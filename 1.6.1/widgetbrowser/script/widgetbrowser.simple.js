(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"widgetbrowser.Application","qx.debug":false,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.nativeScrollBars":true,"qx.optimization.basecalls":true,"qx.optimization.comments":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.variants":true,"qx.revision":"","qx.theme":"qx.theme.Simple","qx.version":"1.6.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script"},"qxc.application.formdemo":{"resourceUri":"resource","sourceUri":"script"},"qxc.ui.versionlabel":{"resourceUri":"resource","sourceUri":"script"},"widgetbrowser":{"resourceUri":"resource","sourceUri":"script"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"en":null};
qx.$$locales = {"C":null,"en":null};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"basic":[8191,8187,512],"boot":[8191],"control":[8191,8187,1177,1169,1043,131,35,4099,1041,3,1],"embed":[8191,8187,2080,2048],"embedframe":[8191,8187,35,2080,34,32],"form":[8191,8187,5138,1043,131,82,35,4099,3,4098,66,34,130,2],"list":[8191,8187,82,66,80,64],"misc":[8191,8187,1177,8],"tab":[8191,8187,256],"table":[8191,8187,1177,1169,5138,1043,5136,1041,1040,1024],"toolbar":[8191,8187,5138,4099,5136,4098,4096],"tree":[8191,8187,1177,1169,5138,1043,82,5136,1041,1040,80,16],"window":[8191,8187,1177,1169,131,130,128]},
  packages : {"1":{"uris":["__out__:widgetbrowser.simple.7fb3a4e7c7b5.js"]},"2":{"uris":["__out__:widgetbrowser.simple.25d2a5d7fb5c.js"]},"3":{"uris":["__out__:widgetbrowser.simple.fe4122cca07d.js"]},"8":{"uris":["__out__:widgetbrowser.simple.273f87d45bd6.js"]},"16":{"uris":["__out__:widgetbrowser.simple.5085a1263b9d.js"]},"32":{"uris":["__out__:widgetbrowser.simple.783d7086d2aa.js"]},"34":{"uris":["__out__:widgetbrowser.simple.656f54503883.js"]},"35":{"uris":["__out__:widgetbrowser.simple.8c0e6ee6e837.js"]},"64":{"uris":["__out__:widgetbrowser.simple.16b739f800fa.js"]},"66":{"uris":["__out__:widgetbrowser.simple.41e6eea3c45c.js"]},"80":{"uris":["__out__:widgetbrowser.simple.519e62d00d9c.js"]},"82":{"uris":["__out__:widgetbrowser.simple.a9e21a772bb2.js"]},"128":{"uris":["__out__:widgetbrowser.simple.677397eb1bdb.js"]},"130":{"uris":["__out__:widgetbrowser.simple.4f7ccda69f7e.js"]},"131":{"uris":["__out__:widgetbrowser.simple.3f86adff3b4a.js"]},"256":{"uris":["__out__:widgetbrowser.simple.85b61b24b1e6.js"]},"512":{"uris":["__out__:widgetbrowser.simple.8006ab379445.js"]},"1024":{"uris":["__out__:widgetbrowser.simple.dd90da905ca5.js"]},"1040":{"uris":["__out__:widgetbrowser.simple.5002ccff8072.js"]},"1041":{"uris":["__out__:widgetbrowser.simple.5e29a13e7f29.js"]},"1043":{"uris":["__out__:widgetbrowser.simple.fc0fedc46dc3.js"]},"1169":{"uris":["__out__:widgetbrowser.simple.591bf52ce589.js"]},"1177":{"uris":["__out__:widgetbrowser.simple.f2aec8ea87ab.js"]},"2048":{"uris":["__out__:widgetbrowser.simple.90821c84519f.js"]},"2080":{"uris":["__out__:widgetbrowser.simple.51161dda4e4c.js"]},"4096":{"uris":["__out__:widgetbrowser.simple.ba66f29ad186.js"]},"4098":{"uris":["__out__:widgetbrowser.simple.352f9f1dd551.js"]},"4099":{"uris":["__out__:widgetbrowser.simple.e354e78f1dd7.js"]},"5136":{"uris":["__out__:widgetbrowser.simple.3b39c7c8c688.js"]},"5138":{"uris":["__out__:widgetbrowser.simple.9a09d20b8cc8.js"]},"8187":{"uris":["__out__:widgetbrowser.simple.e1639f2b9f32.js"]},"8191":{"uris":["__out__:widgetbrowser.simple.b1ae03708806.js"]}},
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

qx.$$packageData['8191']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"}},"resources":{"qx/decoration/Simple/arrows/down-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/down-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/down.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/forward.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/left-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/left.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/rewind.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/right-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/right.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/up-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/up-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/up.gif":[7,4,"gif","qx"],"qx/decoration/Simple/checkbox/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/checked.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Simple/checkbox/undetermined.png":[6,2,"png","qx"],"qx/decoration/Simple/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Simple/colorselector/brightness-handle.gif":[35,11,"gif","qx"],"qx/decoration/Simple/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Simple/colorselector/huesaturation-handle.gif":[11,11,"gif","qx"],"qx/decoration/Simple/cursors/alias.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/copy.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/move.gif":[13,9,"gif","qx"],"qx/decoration/Simple/cursors/nodrop.gif":[20,20,"gif","qx"],"qx/decoration/Simple/menu/checkbox-invert.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/checkbox.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/radiobutton-invert.gif":[16,5,"gif","qx"],"qx/decoration/Simple/menu/radiobutton.gif":[16,5,"gif","qx"],"qx/decoration/Simple/splitpane/knob-horizontal.png":[1,8,"png","qx"],"qx/decoration/Simple/splitpane/knob-vertical.png":[8,1,"png","qx"],"qx/decoration/Simple/table/ascending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/ascending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/boolean-false.png":[11,11,"png","qx"],"qx/decoration/Simple/table/boolean-true.png":[11,11,"png","qx"],"qx/decoration/Simple/table/descending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/descending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/select-column-order.png":[10,9,"png","qx"],"qx/decoration/Simple/tabview/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/window/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/maximize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/restore.gif":[8,9,"gif","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"widgetbrowser/helper.js":"widgetbrowser","widgetbrowser/loading66.gif":[66,66,"gif","widgetbrowser"]},"translations":{}};
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
}qx.Bootstrap.$$registry[name]=ba;
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
},$$registry:{},__c:null,__d:function(){}}});
})();
(function(){var cs="qx.bom.client.CssTransform.get3D",cr="default",cq="|",cp="qx.allowUrlSettings",co="qx.bom.client.Stylesheet.getInsertRule",cn="css.transform.3d",cm="qx.bom.client.Html.getDataset",cl="qx.bom.client.PhoneGap.getPhoneGap",ck="qx.bom.client.Html.getAudioAif",cj="qx.debug.dispose",bt="qx.bom.client.Xml.getAttributeNS",bs="qx.bom.client.Stylesheet.getRemoveImport",br="qx.bom.client.Css.getUserModify",bq="qx.bom.client.Css.getBoxShadow",bp="qx.bom.client.Event.getHashChange",bo="qx.bom.client.Plugin.getWindowsMedia",bn="qx.bom.client.Html.getVideo",bm="qx.bom.client.Device.getName",bl="qx.bom.client.Event.getTouch",bk="qx.optimization.strings",cz="qx.optimization.variables",cA="qx.bom.client.EcmaScript.getStackTrace",cx="qx.bom.client.EcmaScript.getObjectCount",cy="qx.bom.client.Xml.getSelectSingleNode",cv="css.gradient.linear",cw="qx.bom.client.Xml.getImplementation",ct="qx.bom.client.Html.getConsole",cu="qx.bom.client.Engine.getVersion",cB="qx.bom.client.Plugin.getQuicktime",cC="qx.propertyDebugLevel",bR="qx.bom.client.Html.getNaturalDimensions",bQ="qx.bom.client.Xml.getSelectNodes",bT="qx.bom.client.Xml.getElementsByTagNameNS",bS="qx.bom.client.Html.getDataUrl",bV="qx.bom.client.Flash.isAvailable",bU="qx.bom.client.Html.getCanvas",bX="qx.bom.client.Css.getBoxModel",bW="qx.bom.client.Plugin.getSilverlight",bP="qx.bom.client.Css.getUserSelect",bO="qx.bom.client.Css.getRadialGradient",a="module.property",b="qx.bom.client.Plugin.getWindowsMediaVersion",c="qx.bom.client.Stylesheet.getCreateStyleSheet",d="qx.bom.client.Locale.getLocale",e="module.events",f="module.databinding",g="qx.bom.client.Html.getFileReader",h="qx.bom.client.Css.getBorderImage",j="qx.bom.client.Stylesheet.getDeleteRule",k="qx.bom.client.Plugin.getDivXVersion",cG="qx.bom.client.Scroll.scrollBarOverlayed",cF="qx.bom.client.Plugin.getPdfVersion",cE=":",cD="qx.bom.client.Css.getLinearGradient",cK="qx.bom.client.Transport.getXmlHttpRequest",cJ="qx.bom.client.Css.getBorderImageSyntax",cI="qx.bom.client.Html.getClassList",cH="qx.bom.client.Event.getHelp",cM="qx.optimization.comments",cL="qx.bom.client.Locale.getVariant",J="qx.bom.client.Css.getBoxSizing",K="qx.bom.client.OperatingSystem.getName",H="module.logger",I="qx.bom.client.Css.getOverflowXY",N="qx.mobile.emulatetouch",O="qx.bom.client.Html.getAudioWav",L="qx.bom.client.Browser.getName",M="qx.bom.client.Css.getInlineBlock",F="qx.bom.client.Plugin.getPdf",G="qx.dynlocale",s="qx.bom.client.Html.getAudio",r="qx.core.Environment",u="qx.bom.client.CssTransform.getSupport",t="qx.bom.client.Html.getTextContent",o="qx.bom.client.Css.getPlaceholder",n="qx.bom.client.Css.getFloat",q="false",p="qx.bom.client.Html.getXul",m="qx.bom.client.Xml.getCreateNode",l="qxenv",T="qx.bom.client.Html.getSessionStorage",U="qx.bom.client.Html.getAudioAu",V="qx.bom.client.Css.getOpacity",W="qx.bom.client.Html.getVml",P="qx.bom.client.Css.getRgba",Q="qx.bom.client.Transport.getMaxConcurrentRequestCount",R="qx.bom.client.Css.getBorderRadius",S="qx.bom.client.Event.getPointer",X="qx.bom.client.Css.getGradients",Y="qx.bom.client.Transport.getSsl",C="qx.bom.client.Html.getWebWorker",B="qx.bom.client.Json.getJson",A="qx.bom.client.Browser.getQuirksMode",z="qx.bom.client.Css.getTextOverflow",y="qx.bom.client.Xml.getQualifiedItem",x="qx.bom.client.Html.getVideoOgg",w="&",v="qx.bom.client.Browser.getDocumentMode",E="qx.allowUrlVariants",D="qx.bom.client.Html.getContains",ba="qx.bom.client.Plugin.getActiveX",bb=".",bc="qx.bom.client.Xml.getDomProperties",bd="qx.bom.client.CssAnimation.getSupport",be="qx.debug.databinding",bf="qx.optimization.basecalls",bg="qx.bom.client.Browser.getVersion",bh="qx.bom.client.Css.getUserSelectNone",bi="true",bj="qx.bom.client.Html.getSvg",bx="qx.optimization.privates",bw="qx.bom.client.Plugin.getDivX",bv="qx.bom.client.Runtime.getName",bu="qx.bom.client.Html.getLocalStorage",bB="qx.bom.client.Flash.getStrictSecurityModel",bA="qx.aspects",bz="qx.debug",by="qx.dynamicmousewheel",bD="qx.bom.client.Html.getAudioMp3",bC="qx.bom.client.Engine.getName",bK="qx.bom.client.Plugin.getGears",bL="qx.bom.client.Plugin.getQuicktimeVersion",bI="qx.bom.client.Html.getAudioOgg",bJ="qx.bom.client.Plugin.getSilverlightVersion",bG="qx.bom.client.Html.getCompareDocumentPosition",bH="qx.bom.client.Flash.getExpressInstall",bE="qx.bom.client.OperatingSystem.getVersion",bF="qx.bom.client.Html.getXPath",bM="qx.bom.client.Html.getGeoLocation",bN="qx.bom.client.Css.getAppearance",cc="qx.mobile.nativescroll",cb="qx.bom.client.Xml.getDomParser",ce="qx.bom.client.Stylesheet.getAddImport",cd="qx.optimization.variants",cg="qx.bom.client.Html.getVideoWebm",cf="qx.bom.client.Flash.getVersion",ci="qx.bom.client.Css.getLegacyWebkitGradient",ch="qx.bom.client.PhoneGap.getNotification",ca="qx.bom.client.Html.getVideoH264",bY="qx.bom.client.Xml.getCreateElementNS";
qx.Bootstrap.define(r,{statics:{_checks:{},_asyncChecks:{},__e:{},_checksMap:{"engine.version":cu,"engine.name":bC,"browser.name":L,"browser.version":bg,"browser.documentmode":v,"browser.quirksmode":A,"runtime.name":bv,"device.name":bm,"locale":d,"locale.variant":cL,"os.name":K,"os.version":bE,"os.scrollBarOverlayed":cG,"plugin.gears":bK,"plugin.activex":ba,"plugin.quicktime":cB,"plugin.quicktime.version":bL,"plugin.windowsmedia":bo,"plugin.windowsmedia.version":b,"plugin.divx":bw,"plugin.divx.version":k,"plugin.silverlight":bW,"plugin.silverlight.version":bJ,"plugin.flash":bV,"plugin.flash.version":cf,"plugin.flash.express":bH,"plugin.flash.strictsecurity":bB,"plugin.pdf":F,"plugin.pdf.version":cF,"io.maxrequests":Q,"io.ssl":Y,"io.xhr":cK,"event.touch":bl,"event.pointer":S,"event.help":cH,"event.hashchange":bp,"ecmascript.objectcount":cx,"ecmascript.stacktrace":cA,"html.webworker":C,"html.filereader":g,"html.geolocation":bM,"html.audio":s,"html.audio.ogg":bI,"html.audio.mp3":bD,"html.audio.wav":O,"html.audio.au":U,"html.audio.aif":ck,"html.video":bn,"html.video.ogg":x,"html.video.h264":ca,"html.video.webm":cg,"html.storage.local":bu,"html.storage.session":T,"html.classlist":cI,"html.xpath":bF,"html.xul":p,"html.canvas":bU,"html.svg":bj,"html.vml":W,"html.dataset":cm,"html.dataurl":bS,"html.console":ct,"html.stylesheet.createstylesheet":c,"html.stylesheet.insertrule":co,"html.stylesheet.deleterule":j,"html.stylesheet.addimport":ce,"html.stylesheet.removeimport":bs,"html.element.contains":D,"html.element.compareDocumentPosition":bG,"html.element.textcontent":t,"html.image.naturaldimensions":bR,"json":B,"css.textoverflow":z,"css.placeholder":o,"css.borderradius":R,"css.borderimage":h,"css.borderimage.standardsyntax":cJ,"css.boxshadow":bq,"css.gradients":X,"css.gradient.linear":cD,"css.gradient.radial":bO,"css.gradient.legacywebkit":ci,"css.boxmodel":bX,"css.rgba":P,"css.userselect":bP,"css.userselect.none":bh,"css.usermodify":br,"css.appearance":bN,"css.float":n,"css.boxsizing":J,"css.translate3d":cs,"css.animation":bd,"css.transform":u,"css.transform.3d":cs,"css.inlineblock":M,"css.opacity":V,"css.overflowxy":I,"phonegap":cl,"phonegap.notification":ch,"xml.implementation":cw,"xml.domparser":cb,"xml.selectsinglenode":cy,"xml.selectnodes":bQ,"xml.getelementsbytagnamens":bT,"xml.domproperties":bc,"xml.attributens":bt,"xml.createnode":m,"xml.getqualifieditem":y,"xml.createelementns":bY},get:function(cN){if(qx.Bootstrap.DEBUG){var cP={"css.translate3d":cn,"css.gradients":cv,"ecmascript.objectcount":null};

if(cN in cP){qx.Bootstrap.warn("The key '"+cN+"' is deprecated."+(cP[cN]?" Please use '"+cP[cN]+"' instead.":""));
}}if(this.__e[cN]!=undefined){return this.__e[cN];
}var cR=this._checks[cN];

if(cR){var cQ=cR();
this.__e[cN]=cQ;
return cQ;
}var cO=this._getClassNameFromEnvKey(cN);

if(cO[0]!=undefined){var cS=cO[0];
var cT=cO[1];
var cQ=cS[cT]();
this.__e[cN]=cQ;
return cQ;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(cN+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},_getClassNameFromEnvKey:function(cU){var db=this._checksMap;

if(db[cU]!=undefined){var cW=db[cU];
var da=cW.lastIndexOf(bb);

if(da>-1){var cY=cW.slice(0,da);
var cV=cW.slice(da+1);
var cX=qx.Bootstrap.getByName(cY);

if(cX!=undefined){return [cX,cV];
}}}return [undefined,undefined];
},getAsync:function(dc,dd,self){var dh=this;

if(this.__e[dc]!=undefined){window.setTimeout(function(){dd.call(self,dh.__e[dc]);
},0);
return;
}var dg=this._asyncChecks[dc];

if(dg){dg(function(dj){dh.__e[dc]=dj;
dd.call(self,dj);
});
return;
}var df=this._getClassNameFromEnvKey(dc);

if(df[0]!=undefined){var di=df[0];
var de=df[1];
di[de](function(dk){dh.__e[dc]=dk;
dd.call(self,dk);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(dc+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(dl,dm){return this.__f(this.get(dl),dm);
},selectAsync:function(dn,dp,self){this.getAsync(dn,function(dq){var dr=this.__f(dn,dp);
dr.call(self,dq);
},this);
},__f:function(ds,dt){var dv=dt[ds];

if(dt.hasOwnProperty(ds)){return dv;
}for(var du in dt){if(du.indexOf(cq)!=-1){var dw=du.split(cq);

for(var i=0;i<dw.length;i++){if(dw[i]==ds){return dt[du];
}}}}
if(dt[cr]!==undefined){return dt[cr];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+ds+'" ('+(typeof ds)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(dt)+'] found, and no default ("default") given');
}},filter:function(dx){var dz=[];

for(var dy in dx){if(this.get(dy)){dz.push(dx[dy]);
}}return dz;
},invalidateCacheKey:function(dA){delete this.__e[dA];
},add:function(dB,dC){if(this._checks[dB]==undefined){if(dC instanceof Function){this._checks[dB]=dC;
}else{this._checks[dB]=this.__i(dC);
}}},addAsync:function(dD,dE){if(this._checks[dD]==undefined){this._asyncChecks[dD]=dE;
}},getChecks:function(){return this._checks;
},getAsyncChecks:function(){return this._asyncChecks;
},_initDefaultQxValues:function(){this.add(cp,function(){return false;
});
this.add(E,function(){return false;
});
this.add(cC,function(){return 0;
});
this.add(bz,function(){return true;
});
this.add(bA,function(){return false;
});
this.add(G,function(){return true;
});
this.add(N,function(){return false;
});
this.add(cc,function(){return false;
});
this.add(by,function(){return true;
});
this.add(be,function(){return false;
});
this.add(cj,function(){return false;
});
this.add(bf,function(){return false;
});
this.add(cM,function(){return false;
});
this.add(bx,function(){return false;
});
this.add(bk,function(){return false;
});
this.add(cz,function(){return false;
});
this.add(cd,function(){return false;
});
this.add(f,function(){return true;
});
this.add(H,function(){return true;
});
this.add(a,function(){return true;
});
this.add(e,function(){return true;
});
},__g:function(){if(qx&&qx.$$environment){for(var dG in qx.$$environment){var dF=qx.$$environment[dG];
this._checks[dG]=this.__i(dF);
}}},__h:function(){if(window.document&&window.document.location){var dH=window.document.location.search.slice(1).split(w);

for(var i=0;i<dH.length;i++){var dJ=dH[i].split(cE);

if(dJ.length!=3||dJ[0]!=l){continue;
}var dK=dJ[1];
var dI=decodeURIComponent(dJ[2]);
if(dI==bi){dI=true;
}else if(dI==q){dI=false;
}else if(/^(\d|\.)+$/.test(dI)){dI=parseFloat(dI);
}this._checks[dK]=this.__i(dI);
}}},__i:function(dL){return qx.Bootstrap.bind(function(dM){return dM;
},null,dL);
}},defer:function(dN){dN._initDefaultQxValues();
dN.__g();
if(dN.get(cp)===true){dN.__h();
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__bc:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__bc;
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
},addAdvice:function(o,p,q,name){this.__bc.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
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
},__j:function(p,q,r,s){var w=r.$$members;

if(w){for(var v in w){if(qx.Bootstrap.isFunction(w[v])){var u=this.__k(q,v);
var t=u||qx.Bootstrap.isFunction(p[v]);

if(!t){throw new Error('Implementation of method "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}var x=s===true&&!u&&!qx.util.OOUtil.hasInterface(q,r);

if(x){p[v]=this.__n(r,p[v],v,w[v]);
}}else{if(typeof p[v]===undefined){if(typeof p[v]!==j){throw new Error('Implementation of member "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}}}}}},__k:function(y,z){var D=z.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!D){return false;
}var A=qx.Bootstrap.firstLow(D[2]);
var B=qx.util.OOUtil.getPropertyDefinition(y,A);

if(!B){return false;
}var C=D[0]==b||D[0]==d;

if(C){return qx.util.OOUtil.getPropertyDefinition(y,A).check==h;
}return true;
},__l:function(E,F){if(F.$$properties){for(var G in F.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(E,G)){throw new Error('The property "'+G+'" is not supported by Class "'+E.classname+'"!');
}}}},__m:function(H,I){if(I.$$events){for(var J in I.$$events){if(!qx.util.OOUtil.supportsEvent(H,J)){throw new Error('The event "'+J+'" is not supported by Class "'+H.classname+'"!');
}}}},assertObject:function(K,L){var N=K.constructor;
this.__j(K,N,L,false);
this.__l(N,L);
this.__m(N,L);
var M=L.$$extends;

if(M){for(var i=0,l=M.length;i<l;i++){this.assertObject(K,M[i]);
}}},assert:function(O,P,Q){this.__j(O.prototype,O,P,Q);
this.__l(O,P);
this.__m(O,P);
var R=P.$$extends;

if(R){for(var i=0,l=R.length;i<l;i++){this.assert(O,R[i],Q);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__n:function(){},__c:null,__d:function(){}}});
})();
(function(){var g="emulated",f="native",e='"',d="[object Error]",c="qx.lang.Core",b="\\\\",a="\\\"";
qx.Bootstrap.define(c,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==d)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;
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
}}[Array.prototype.every?f:g],stringQuote:{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,b).replace(/\"/g,a)+e;
}}[String.prototype.quote?f:g]}});
if(!Error.prototype.toString||Error.prototype.toString()==d){Error.prototype.toString=qx.lang.Core.errorToString;
}if(!Array.prototype.indexOf){Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
}
if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
}
if(!Array.prototype.forEach){Array.prototype.forEach=qx.lang.Core.arrayForEach;
}
if(!Array.prototype.filter){Array.prototype.filter=qx.lang.Core.arrayFilter;
}
if(!Array.prototype.map){Array.prototype.map=qx.lang.Core.arrayMap;
}
if(!Array.prototype.some){Array.prototype.some=qx.lang.Core.arraySome;
}
if(!Array.prototype.every){Array.prototype.every=qx.lang.Core.arrayEvery;
}if(!String.prototype.quote){String.prototype.quote=qx.lang.Core.stringQuote;
}})();
(function(){var bG=';',bF='return this.',bE="string",bD="boolean",bC="",bB='!==undefined)',bA="this.",bz="set",by="setThemed",bx="resetThemed",bm='else if(this.',bl="reset",bk="setRuntime",bj="init",bi="();",bh='else ',bg='if(this.',bf="resetRuntime",be="return this.",bd="get",bN=";",bO="(a[",bL=' of an instance of ',bM="refresh",bJ=' is not (yet) ready!");',bK="]);",bH='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bI='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bP='value !== null && value.nodeType === 9 && value.documentElement',bQ='value !== null && value.$$type === "Mixin"',bq='return init;',bp='var init=this.',bs='value !== null && value.nodeType === 1 && value.attributes',br="var parent = this.getLayoutParent();",bu="Error in property ",bt="property",bw='qx.core.Assert.assertInstance(value, Date, msg) || true',bv="if (!parent) return;",bo=" in method ",bn='qx.core.Assert.assertInstance(value, Error, msg) || true',b='Undefined value is not allowed!',c="inherit",d='Is invalid!',e="MSIE 6.0",f="': ",g=" of class ",h='value !== null && value.nodeType !== undefined',j='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',k="module.events",m='qx.core.Assert.assertPositiveInteger(value, msg) || true',bU='if(init==qx.core.Property.$$inherit)init=null;',bT='value !== null && value.$$type === "Interface"',bS='var inherit=prop.$$inherit;',bR="var value = parent.",bY="$$useinit_",bX="(value);",bW='Requires exactly one argument!',bV="$$runtime_",cb="$$user_",ca='qx.core.Assert.assertArray(value, msg) || true',L='qx.core.Assert.assertPositiveNumber(value, msg) || true',M=".prototype",J="Boolean",K='return value;',P='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',Q='Does not allow any arguments!',N="()",O="var a=arguments[0] instanceof Array?arguments[0]:arguments;",H='value !== null && value.$$type === "Theme"',I="())",u='return null;',t='qx.core.Assert.assertObject(value, msg) || true',w='qx.core.Assert.assertString(value, msg) || true',v="if (value===undefined) value = parent.",q='value !== null && value.$$type === "Class"',p='qx.core.Assert.assertFunction(value, msg) || true',s=".",r="object",o="$$init_",n="$$theme_",V='qx.core.Assert.assertMap(value, msg) || true',W="qx.aspects",X='qx.core.Assert.assertNumber(value, msg) || true',Y='Null value is not allowed!',R='qx.core.Assert.assertInteger(value, msg) || true',S="value",T="rv:1.8.1",U="shorthand",ba='qx.core.Assert.assertInstance(value, RegExp, msg) || true',bb='value !== null && value.type !== undefined',E='value !== null && value.document',D='throw new Error("Property ',C="(!this.",B='qx.core.Assert.assertBoolean(value, msg) || true',A="toggle",z="$$inherit_",y=" with incoming value '",x="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",G="qx.core.Property",F="is",bc='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(G,{statics:{__o:function(){if(qx.core.Environment.get(k)){qx.event.type.Data;
qx.event.dispatch.Direct;
}},__p:{"Boolean":B,"String":w,"Number":X,"Integer":R,"PositiveNumber":L,"PositiveInteger":m,"Error":bn,"RegExp":ba,"Object":t,"Array":ca,"Map":V,"Function":p,"Date":bw,"Node":h,"Element":bs,"Document":bP,"Window":E,"Event":bb,"Class":q,"Mixin":bQ,"Interface":bT,"Theme":H,"Color":bH,"Decorator":j,"Font":bI},__q:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:c,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bE,dereference:bD,inheritable:bD,nullable:bD,themeable:bD,refine:bD,init:null,apply:bE,event:bE,check:null,transform:bE,deferredInit:bD,validate:null},$$allowedGroupKeys:{name:bE,group:r,mode:bE,themeable:bD},$$inheritable:{},__r:function(cc){var cd=this.__s(cc);

if(!cd.length){var ce=function(){};
}else{ce=this.__t(cd);
}cc.prototype.$$refreshInheritables=ce;
},__s:function(cf){var ch=[];

while(cf){var cg=cf.$$properties;

if(cg){for(var name in this.$$inheritable){if(cg[name]&&cg[name].inheritable){ch.push(name);
}}}cf=cf.superclass;
}return ch;
},__t:function(ci){var cm=this.$$store.inherit;
var cl=this.$$store.init;
var ck=this.$$method.refresh;
var cj=[br,bv];

for(var i=0,l=ci.length;i<l;i++){var name=ci[i];
cj.push(bR,cm[name],bN,v,cl[name],bN,bA,ck[name],bX);
}return new Function(cj.join(bC));
},attachRefreshInheritables:function(cn){cn.prototype.$$refreshInheritables=function(){qx.core.Property.__r(cn);
return this.$$refreshInheritables();
};
},attachMethods:function(co,name,cp){cp.group?this.__u(co,cp,name):this.__v(co,cp,name);
},__u:function(cq,cr,name){var cy=qx.Bootstrap.firstUp(name);
var cx=cq.prototype;
var cz=cr.themeable===true;
var cA=[];
var cu=[];

if(cz){var cs=[];
var cw=[];
}var cv=O;
cA.push(cv);

if(cz){cs.push(cv);
}
if(cr.mode==U){var ct=x;
cA.push(ct);

if(cz){cs.push(ct);
}}
for(var i=0,a=cr.group,l=a.length;i<l;i++){cA.push(bA,this.$$method.set[a[i]],bO,i,bK);
cu.push(bA,this.$$method.reset[a[i]],bi);

if(cz){cs.push(bA,this.$$method.setThemed[a[i]],bO,i,bK);
cw.push(bA,this.$$method.resetThemed[a[i]],bi);
}}this.$$method.set[name]=bz+cy;
cx[this.$$method.set[name]]=new Function(cA.join(bC));
this.$$method.reset[name]=bl+cy;
cx[this.$$method.reset[name]]=new Function(cu.join(bC));

if(cz){this.$$method.setThemed[name]=by+cy;
cx[this.$$method.setThemed[name]]=new Function(cs.join(bC));
this.$$method.resetThemed[name]=bx+cy;
cx[this.$$method.resetThemed[name]]=new Function(cw.join(bC));
}},__v:function(cB,cC,name){var cE=qx.Bootstrap.firstUp(name);
var cG=cB.prototype;
if(cC.dereference===undefined&&typeof cC.check===bE){cC.dereference=this.__w(cC.check);
}var cF=this.$$method;
var cD=this.$$store;
cD.runtime[name]=bV+name;
cD.user[name]=cb+name;
cD.theme[name]=n+name;
cD.init[name]=o+name;
cD.inherit[name]=z+name;
cD.useinit[name]=bY+name;
cF.get[name]=bd+cE;
cG[cF.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cB,name,bd);
};
cF.set[name]=bz+cE;
cG[cF.set[name]]=function(cH){return qx.core.Property.executeOptimizedSetter(this,cB,name,bz,arguments);
};
cF.reset[name]=bl+cE;
cG[cF.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cB,name,bl);
};

if(cC.inheritable||cC.apply||cC.event||cC.deferredInit){cF.init[name]=bj+cE;
cG[cF.init[name]]=function(cI){return qx.core.Property.executeOptimizedSetter(this,cB,name,bj,arguments);
};
}
if(cC.inheritable){cF.refresh[name]=bM+cE;
cG[cF.refresh[name]]=function(cJ){return qx.core.Property.executeOptimizedSetter(this,cB,name,bM,arguments);
};
}cF.setRuntime[name]=bk+cE;
cG[cF.setRuntime[name]]=function(cK){return qx.core.Property.executeOptimizedSetter(this,cB,name,bk,arguments);
};
cF.resetRuntime[name]=bf+cE;
cG[cF.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cB,name,bf);
};

if(cC.themeable){cF.setThemed[name]=by+cE;
cG[cF.setThemed[name]]=function(cL){return qx.core.Property.executeOptimizedSetter(this,cB,name,by,arguments);
};
cF.resetThemed[name]=bx+cE;
cG[cF.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cB,name,bx);
};
}
if(cC.check===J){cG[A+cE]=new Function(be+cF.set[name]+C+cF.get[name]+I);
cG[F+cE]=new Function(be+cF.get[name]+N);
}},__w:function(cM){return !!this.__q[cM];
},__x:function(cN){return this.__q[cN]||qx.util.OOUtil.classIsDefined(cN)||(qx.Interface&&qx.Interface.isDefined(cN));
},__y:{0:bc,1:bW,2:b,3:Q,4:Y,5:d},error:function(cO,cP,cQ,cR,cS){var cT=cO.constructor.classname;
var cU=bu+cQ+g+cT+bo+this.$$method[cR][cQ]+y+cS+f;
throw new Error(cU+(this.__y[cP]||"Unknown reason: "+cP));
},__z:function(cV,cW,name,cX,cY,da){var db=this.$$method[cX][name];
{cW[db]=new Function(S,cY.join(bC));
};
if(qx.core.Environment.get(W)){cW[db]=qx.core.Aspect.wrap(cV.classname+s+db,cW[db],bt);
}qx.Bootstrap.setDisplayName(cW[db],cV.classname+M,db);
if(da===undefined){return cV[db]();
}else{return cV[db](da[0]);
}},executeOptimizedGetter:function(dc,dd,name,de){var dg=dd.$$properties[name];
var di=dd.prototype;
var df=[];
var dh=this.$$store;
df.push(bg,dh.runtime[name],bB);
df.push(bF,dh.runtime[name],bG);

if(dg.inheritable){df.push(bm,dh.inherit[name],bB);
df.push(bF,dh.inherit[name],bG);
df.push(bh);
}df.push(bg,dh.user[name],bB);
df.push(bF,dh.user[name],bG);

if(dg.themeable){df.push(bm,dh.theme[name],bB);
df.push(bF,dh.theme[name],bG);
}
if(dg.deferredInit&&dg.init===undefined){df.push(bm,dh.init[name],bB);
df.push(bF,dh.init[name],bG);
}df.push(bh);

if(dg.init!==undefined){if(dg.inheritable){df.push(bp,dh.init[name],bG);

if(dg.nullable){df.push(bU);
}else if(dg.init!==undefined){df.push(bF,dh.init[name],bG);
}else{df.push(P,name,bL,dd.classname,bJ);
}df.push(bq);
}else{df.push(bF,dh.init[name],bG);
}}else if(dg.inheritable||dg.nullable){df.push(u);
}else{df.push(D,name,bL,dd.classname,bJ);
}return this.__z(dc,di,name,de,df);
},executeOptimizedSetter:function(dj,dk,name,dl,dm){var ds=dk.$$properties[name];
var dr=dk.prototype;
var dp=[];
var dn=dl===bz||dl===by||dl===bk||(dl===bj&&ds.init===undefined);
var dq=ds.apply||ds.event||ds.inheritable;
var dt=this.__A(dl,name);
this.__B(dp,ds,name,dl,dn);

if(dn){this.__C(dp,dk,ds,name);
}
if(dq){this.__D(dp,dn,dt,dl);
}
if(ds.inheritable){dp.push(bS);
}
if(!dq){this.__F(dp,name,dl,dn);
}else{this.__G(dp,ds,name,dl,dn);
}
if(ds.inheritable){this.__H(dp,ds,name,dl);
}else if(dq){this.__I(dp,ds,name,dl);
}
if(dq){this.__J(dp,ds,name);
if(ds.inheritable&&dr._getChildren){this.__K(dp,name);
}}if(dn){dp.push(K);
}return this.__z(dj,dr,name,dl,dp,dm);
},__A:function(du,name){if(du==="setRuntime"||du==="resetRuntime"){var dv=this.$$store.runtime[name];
}else if(du==="setThemed"||du==="resetThemed"){dv=this.$$store.theme[name];
}else if(du==="init"){dv=this.$$store.init[name];
}else{dv=this.$$store.user[name];
}return dv;
},__B:function(dw,dx,name,dy,dz){{if(!dx.nullable||dx.check||dx.inheritable){dw.push('var prop=qx.core.Property;');
}if(dy==="set"){dw.push('if(value===undefined)prop.error(this,2,"',name,'","',dy,'",value);');
}};
},__C:function(dA,dB,dC,name){if(dC.transform){dA.push('value=this.',dC.transform,'(value);');
}if(dC.validate){if(typeof dC.validate==="string"){dA.push('this.',dC.validate,'(value);');
}else if(dC.validate instanceof Function){dA.push(dB.classname,'.$$properties.',name);
dA.push('.validate.call(this, value);');
}}},__D:function(dD,dE,dF,dG){var dH=(dG==="reset"||dG==="resetThemed"||dG==="resetRuntime");

if(dE){dD.push('if(this.',dF,'===value)return value;');
}else if(dH){dD.push('if(this.',dF,'===undefined)return;');
}},__E:undefined,__F:function(dI,name,dJ,dK){if(dJ==="setRuntime"){dI.push('this.',this.$$store.runtime[name],'=value;');
}else if(dJ==="resetRuntime"){dI.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dI.push('delete this.',this.$$store.runtime[name],';');
}else if(dJ==="set"){dI.push('this.',this.$$store.user[name],'=value;');
}else if(dJ==="reset"){dI.push('if(this.',this.$$store.user[name],'!==undefined)');
dI.push('delete this.',this.$$store.user[name],';');
}else if(dJ==="setThemed"){dI.push('this.',this.$$store.theme[name],'=value;');
}else if(dJ==="resetThemed"){dI.push('if(this.',this.$$store.theme[name],'!==undefined)');
dI.push('delete this.',this.$$store.theme[name],';');
}else if(dJ==="init"&&dK){dI.push('this.',this.$$store.init[name],'=value;');
}},__G:function(dL,dM,name,dN,dO){if(dM.inheritable){dL.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{dL.push('var computed, old;');
}dL.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(dN==="setRuntime"){dL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dN==="resetRuntime"){dL.push('delete this.',this.$$store.runtime[name],';');
dL.push('if(this.',this.$$store.user[name],'!==undefined)');
dL.push('computed=this.',this.$$store.user[name],';');
dL.push('else if(this.',this.$$store.theme[name],'!==undefined)');
dL.push('computed=this.',this.$$store.theme[name],';');
dL.push('else if(this.',this.$$store.init[name],'!==undefined){');
dL.push('computed=this.',this.$$store.init[name],';');
dL.push('this.',this.$$store.useinit[name],'=true;');
dL.push('}');
}else{dL.push('old=computed=this.',this.$$store.runtime[name],';');
if(dN==="set"){dL.push('this.',this.$$store.user[name],'=value;');
}else if(dN==="reset"){dL.push('delete this.',this.$$store.user[name],';');
}else if(dN==="setThemed"){dL.push('this.',this.$$store.theme[name],'=value;');
}else if(dN==="resetThemed"){dL.push('delete this.',this.$$store.theme[name],';');
}else if(dN==="init"&&dO){dL.push('this.',this.$$store.init[name],'=value;');
}}dL.push('}');
dL.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(dN==="set"){if(!dM.inheritable){dL.push('old=this.',this.$$store.user[name],';');
}dL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dN==="reset"){if(!dM.inheritable){dL.push('old=this.',this.$$store.user[name],';');
}dL.push('delete this.',this.$$store.user[name],';');
dL.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dL.push('computed=this.',this.$$store.runtime[name],';');
dL.push('if(this.',this.$$store.theme[name],'!==undefined)');
dL.push('computed=this.',this.$$store.theme[name],';');
dL.push('else if(this.',this.$$store.init[name],'!==undefined){');
dL.push('computed=this.',this.$$store.init[name],';');
dL.push('this.',this.$$store.useinit[name],'=true;');
dL.push('}');
}else{if(dN==="setRuntime"){dL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dM.inheritable){dL.push('computed=this.',this.$$store.user[name],';');
}else{dL.push('old=computed=this.',this.$$store.user[name],';');
}if(dN==="setThemed"){dL.push('this.',this.$$store.theme[name],'=value;');
}else if(dN==="resetThemed"){dL.push('delete this.',this.$$store.theme[name],';');
}else if(dN==="init"&&dO){dL.push('this.',this.$$store.init[name],'=value;');
}}dL.push('}');
if(dM.themeable){dL.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!dM.inheritable){dL.push('old=this.',this.$$store.theme[name],';');
}
if(dN==="setRuntime"){dL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dN==="set"){dL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dN==="setThemed"){dL.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dN==="resetThemed"){dL.push('delete this.',this.$$store.theme[name],';');
dL.push('if(this.',this.$$store.init[name],'!==undefined){');
dL.push('computed=this.',this.$$store.init[name],';');
dL.push('this.',this.$$store.useinit[name],'=true;');
dL.push('}');
}else if(dN==="init"){if(dO){dL.push('this.',this.$$store.init[name],'=value;');
}dL.push('computed=this.',this.$$store.theme[name],';');
}else if(dN==="refresh"){dL.push('computed=this.',this.$$store.theme[name],';');
}dL.push('}');
}dL.push('else if(this.',this.$$store.useinit[name],'){');

if(!dM.inheritable){dL.push('old=this.',this.$$store.init[name],';');
}
if(dN==="init"){if(dO){dL.push('computed=this.',this.$$store.init[name],'=value;');
}else{dL.push('computed=this.',this.$$store.init[name],';');
}}else if(dN==="set"||dN==="setRuntime"||dN==="setThemed"||dN==="refresh"){dL.push('delete this.',this.$$store.useinit[name],';');

if(dN==="setRuntime"){dL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dN==="set"){dL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dN==="setThemed"){dL.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dN==="refresh"){dL.push('computed=this.',this.$$store.init[name],';');
}}dL.push('}');
if(dN==="set"||dN==="setRuntime"||dN==="setThemed"||dN==="init"){dL.push('else{');

if(dN==="setRuntime"){dL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dN==="set"){dL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dN==="setThemed"){dL.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dN==="init"){if(dO){dL.push('computed=this.',this.$$store.init[name],'=value;');
}else{dL.push('computed=this.',this.$$store.init[name],';');
}dL.push('this.',this.$$store.useinit[name],'=true;');
}dL.push('}');
}},__H:function(dP,dQ,name,dR){dP.push('if(computed===undefined||computed===inherit){');

if(dR==="refresh"){dP.push('computed=value;');
}else{dP.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}dP.push('if((computed===undefined||computed===inherit)&&');
dP.push('this.',this.$$store.init[name],'!==undefined&&');
dP.push('this.',this.$$store.init[name],'!==inherit){');
dP.push('computed=this.',this.$$store.init[name],';');
dP.push('this.',this.$$store.useinit[name],'=true;');
dP.push('}else{');
dP.push('delete this.',this.$$store.useinit[name],';}');
dP.push('}');
dP.push('if(old===computed)return value;');
dP.push('if(computed===inherit){');
dP.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
dP.push('}');
dP.push('else if(computed===undefined)');
dP.push('delete this.',this.$$store.inherit[name],';');
dP.push('else this.',this.$$store.inherit[name],'=computed;');
dP.push('var backup=computed;');
if(dQ.init!==undefined&&dR!=="init"){dP.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dP.push('if(old===undefined)old=null;');
}dP.push('if(computed===undefined||computed==inherit)computed=null;');
},__I:function(dS,dT,name,dU){if(dU!=="set"&&dU!=="setRuntime"&&dU!=="setThemed"){dS.push('if(computed===undefined)computed=null;');
}dS.push('if(old===computed)return value;');
if(dT.init!==undefined&&dU!=="init"){dS.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dS.push('if(old===undefined)old=null;');
}},__J:function(dV,dW,name){if(dW.apply){dV.push('this.',dW.apply,'(computed, old, "',name,'");');
}if(dW.event){dV.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",dW.event,"')){","reg.fireEvent(this, '",dW.event,"', qx.event.type.Data, [computed, old]",")}");
}},__K:function(dX,name){dX.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
dX.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
dX.push('}');
}},defer:function(dY){var eb=navigator.userAgent.indexOf(e)!=-1;
var ea=navigator.userAgent.indexOf(T)!=-1;
if(eb||ea){dY.__w=dY.__x;
}}});
})();
(function(){var k="qx.aspects",j="Array",h=".",g="static",f="[Class ",e="]",d="constructor",c="extend",b="qx.Class";
qx.Bootstrap.define(b,{statics:{__L:qx.core.Environment.get("module.property")?qx.core.Property:null,define:function(name,m){if(!m){var m={};
}if(m.include&&!(qx.Bootstrap.getClass(m.include)===j)){m.include=[m.include];
}if(m.implement&&!(qx.Bootstrap.getClass(m.implement)===j)){m.implement=[m.implement];
}var n=false;

if(!m.hasOwnProperty(c)&&!m.type){m.type=g;
n=true;
}var o=this.__O(name,m.type,m.extend,m.statics,m.construct,m.destruct,m.include);
if(m.extend){if(m.properties){this.__Q(o,m.properties,true);
}if(m.members){this.__S(o,m.members,true,true,false);
}if(m.events){this.__P(o,m.events,true);
}if(m.include){for(var i=0,l=m.include.length;i<l;i++){this.__W(o,m.include[i],false);
}}}if(m.environment){for(var p in m.environment){qx.core.Environment.add(p,m.environment[p]);
}}if(m.implement){for(var i=0,l=m.implement.length;i<l;i++){this.__U(o,m.implement[i]);
}}if(m.defer){m.defer.self=o;
m.defer(o,o.prototype,{add:function(name,q){var r={};
r[name]=q;
qx.Class.__Q(o,r,true);
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
},getByName:qx.Bootstrap.getByName,include:function(v,w){qx.Class.__W(v,w,false);
},patch:function(x,y){qx.Class.__W(x,y,true);
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
},$$registry:qx.Bootstrap.$$registry,__c:null,__M:null,__d:function(){},__N:function(){},__O:function(name,U,V,W,X,Y,ba){var bd;

if(!V&&qx.core.Environment.get("qx.aspects")==false){bd=W||{};
qx.Bootstrap.setDisplayNames(bd,name);
}else{var bd={};

if(V){if(!X){X=this.__X();
}
if(this.__ba(V,ba)){bd=this.__bb(X,name,U);
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
},__P:function(bf,bg,bh){var bi,bi;

if(bf.$$events){for(var bi in bg){bf.$$events[bi]=bg[bi];
}}else{bf.$$events=bg;
}},__Q:function(bj,bk,bl){if(!qx.core.Environment.get("module.property")){throw new Error("Property module disabled.");
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
this.__P(bj,event,bl);
}if(bm.inheritable){this.__L.$$inheritable[name]=true;

if(!bn.$$refreshInheritables){this.__L.attachRefreshInheritables(bj);
}}
if(!bm.refine){this.__L.attachMethods(bj,name,bm);
}}},__R:null,__S:function(bo,bp,bq,br,bs){var bt=bo.prototype;
var bv,bu;
qx.Bootstrap.setDisplayNames(bp,bo.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bp),l=a.length;i<l;i++){bv=a[i];
bu=bp[bv];
if(br!==false&&bu instanceof Function&&bu.$$type==null){if(bs==true){bu=this.__T(bu,bt[bv]);
}else{if(bt[bv]){bu.base=bt[bv];
}bu.self=bo;
}
if(qx.core.Environment.get("qx.aspects")){bu=qx.core.Aspect.wrap(bo.classname+"."+bv,bu,"member");
}}bt[bv]=bu;
}},__T:function(bw,bx){if(bx){return function(){var bz=bw.base;
bw.base=bx;
var by=bw.apply(this,arguments);
bw.base=bz;
return by;
};
}else{return bw;
}},__U:function(bA,bB){var bC=qx.Interface.flatten([bB]);

if(bA.$$implements){bA.$$implements.push(bB);
bA.$$flatImplements.push.apply(bA.$$flatImplements,bC);
}else{bA.$$implements=[bB];
bA.$$flatImplements=bC;
}},__V:function(bD){var name=bD.classname;
var bE=this.__bb(bD,name,bD.$$classtype);
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
},__W:function(bJ,bK,bL){if(this.hasMixin(bJ,bK)){return;
}var bO=bJ.$$original;

if(bK.$$constructor&&!bO){bJ=this.__V(bJ);
}var bN=qx.Mixin.flatten([bK]);
var bM;

for(var i=0,l=bN.length;i<l;i++){bM=bN[i];
if(bM.$$events){this.__P(bJ,bM.$$events,bL);
}if(bM.$$properties){this.__Q(bJ,bM.$$properties,bL);
}if(bM.$$members){this.__S(bJ,bM.$$members,bL,bL,bL);
}}if(bJ.$$includes){bJ.$$includes.push(bK);
bJ.$$flatIncludes.push.apply(bJ.$$flatIncludes,bN);
}else{bJ.$$includes=[bK];
bJ.$$flatIncludes=bN;
}},__X:function(){function bP(){bP.base.apply(this,arguments);
}return bP;
},__Y:function(){return function(){};
},__ba:function(bQ,bR){if(bQ&&bQ.$$includes){var bS=bQ.$$flatIncludes;

for(var i=0,l=bS.length;i<l;i++){if(bS[i].$$constructor){return true;
}}}if(bR){var bT=qx.Mixin.flatten(bR);

for(var i=0,l=bT.length;i<l;i++){if(bT[i].$$constructor){return true;
}}}return false;
},__bb:function(bU,name,bV){var bX=function(){var cb=bX;
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
qx.Class.define(f,{statics:{inShutDown:false,__bc:{},__bV:0,__bW:[],__bX:d,__bY:{},register:function(h){var m=this.__bc;

if(!m){return;
}var k=h.$$hash;

if(k==null){var j=this.__bW;

if(j.length>0&&true){k=j.pop();
}else{k=(this.__bV++)+this.__bX;
}h.$$hash=k;
}m[k]=h;
},unregister:function(n){var o=n.$$hash;

if(o==null){return;
}var p=this.__bc;

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
}}}},fromHashCode:function(x){return this.__bc[x]||null;
},shutdown:function(){this.inShutDown=true;
var z=this.__bc;
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
delete this.__bc;
},getRegistry:function(){return this.__bc;
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
(function(){var u=".",t="function",s="",r="gecko",q="Maple",p="[object Opera]",o="mshtml",n="8.0",m="AppleWebKit/",l="9.0",e="[^\\.0-9]",k="Gecko",h="webkit",c="4.0",b="1.9.0.0",g="opera",f="Version/",i="5.0",a="engine.version",j="qx.bom.client.Engine",d="engine.name";
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
},__bA:function(){return window.controllers&&window.navigator.product===k&&window.navigator.userAgent.indexOf(q)==-1;
},__bB:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}},defer:function(B){qx.core.Environment.add(a,B.getVersion);
qx.core.Environment.add(d,B.getName);
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

if(qx.core.Environment.get(o)===d){if(!O.stack){return S;
}var be=/@(.+):(\d+)$/gm;
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

if(!Q){return S;
}
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
},__bS:function(bf){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==m){var bg=qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bf);

if(false&&!qx.lang.Type.isString(bg)){throw new Error("FILENAME_TO_CLASSNAME must return a string!");
}return bg;
}return qx.dev.StackTrace.__bT(bf);
},__bT:function(bh){var bl=c;
var bi=bh.indexOf(bl);
var bk=bh.indexOf(f);

if(bk>=0){bh=bh.substring(0,bk);
}var bj=(bi==-1)?bh:bh.substring(bi+bl.length).replace(/\//g,b).replace(/\.js$/,h);
return bj;
},__bU:function(bm){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==m){bm=qx.dev.StackTrace.FORMAT_STACKTRACE(bm);
if(false&&!qx.lang.Type.isArray(bm)){throw new Error("FORMAT_STACKTRACE must return an array of strings!");
}}return bm;
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
(function(){var p="",o="g",n="]",m='\\u',l="undefined",k='\\$1',j="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h='-',g="qx.lang.String",f="(^|[^",c="0",e="%",d=' ',b='\n',a="])[";
qx.Bootstrap.define(g,{statics:{__bu:j,__bv:null,__bw:{},camelCase:function(q){var r=this.__bw[q];

if(!r){r=q.replace(/\-([a-z])/g,function(s,t){return t.toUpperCase();
});
this.__bw[q]=r;
}return r;
},hyphenate:function(u){var v=this.__bw[u];

if(!v){v=u.replace(/[A-Z]/g,function(w){return (h+w.charAt(0).toLowerCase());
});
this.__bw[u]=v;
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
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Bootstrap.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
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
},statics:{$$type:a},members:{__L:qx.core.Environment.get("module.property")?qx.core.Property:null,toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+f+this.$$hash+d;
},base:function(k,m){if(arguments.length===1){return k.callee.base.call(this);
}else{return k.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(n){return n.callee.self;
},clone:function(){if(!qx.core.Environment.get(j)){throw new Error("Cloning only possible with properties.");
}var p=this.constructor;
var o=new p;
var r=qx.Class.getProperties(p);
var q=this.__L.$$store.user;
var s=this.__L.$$method.set;
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
var T=this.__L.$$store;
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
(function(){var k="__jN",j="keypress",h="focusout",g="activate",f="Tab",d="singleton",c="deactivate",b="focusin",a="qx.ui.core.FocusHandler";
qx.Class.define(a,{extend:qx.core.Object,type:d,construct:function(){qx.core.Object.call(this);
this.__jN={};
},members:{__jN:null,__jO:null,__jP:null,__jQ:null,connectTo:function(m){m.addListener(j,this.__eF,this);
m.addListener(b,this._onFocusIn,this,true);
m.addListener(h,this._onFocusOut,this,true);
m.addListener(g,this._onActivate,this,true);
m.addListener(c,this._onDeactivate,this,true);
},addRoot:function(n){this.__jN[n.$$hash]=n;
},removeRoot:function(o){delete this.__jN[o.$$hash];
},getActiveWidget:function(){return this.__jO;
},isActive:function(p){return this.__jO==p;
},getFocusedWidget:function(){return this.__jP;
},isFocused:function(q){return this.__jP==q;
},isFocusRoot:function(r){return !!this.__jN[r.$$hash];
},_onActivate:function(e){var t=e.getTarget();
this.__jO=t;
var s=this.__jR(t);

if(s!=this.__jQ){this.__jQ=s;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__jO==u){this.__jO=null;
}},_onFocusIn:function(e){var v=e.getTarget();

if(v!=this.__jP){this.__jP=v;
v.visualizeFocus();
}},_onFocusOut:function(e){var w=e.getTarget();

if(w==this.__jP){this.__jP=null;
w.visualizeBlur();
}},__eF:function(e){if(e.getKeyIdentifier()!=f){return;
}
if(!this.__jQ){return;
}e.stopPropagation();
e.preventDefault();
var x=this.__jP;

if(!e.isShiftPressed()){var y=x?this.__jV(x):this.__jT();
}else{var y=x?this.__jW(x):this.__jU();
}if(y){y.tabFocus();
}},__jR:function(z){var A=this.__jN;

while(z){if(A[z.$$hash]){return z;
}z=z.getLayoutParent();
}return null;
},__jS:function(B,C){if(B===C){return 0;
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
},__jT:function(){return this.__ka(this.__jQ,null);
},__jU:function(){return this.__kb(this.__jQ,null);
},__jV:function(M){var N=this.__jQ;

if(N==M){return this.__jT();
}
while(M&&M.getAnonymous()){M=M.getLayoutParent();
}
if(M==null){return [];
}var O=[];
this.__jX(N,M,O);
O.sort(this.__jS);
var P=O.length;
return P>0?O[0]:this.__jT();
},__jW:function(Q){var R=this.__jQ;

if(R==Q){return this.__jU();
}
while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();
}
if(Q==null){return [];
}var S=[];
this.__jY(R,Q,S);
S.sort(this.__jS);
var T=S.length;
return T>0?S[T-1]:this.__jU();
},__jX:function(parent,U,V){var W=parent.getLayoutChildren();
var X;

for(var i=0,l=W.length;i<l;i++){X=W[i];
if(!(X instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__jS(U,X)<0){V.push(X);
}this.__jX(X,U,V);
}}},__jY:function(parent,Y,ba){var bb=parent.getLayoutChildren();
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
if(!(bc instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__jS(Y,bc)>0){ba.push(bc);
}this.__jY(bc,Y,ba);
}}},__ka:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__jS(bf,bd)<0){bd=bf;
}}bd=this.__ka(bf,bd);
}}return bd;
},__kb:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__jS(bi,bg)>0){bg=bi;
}}bg=this.__kb(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(k);
this.__jP=this.__jO=this.__jQ=null;
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__of:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__of(c);
},hasChildren:function(){return this.__of(f);
},add:function(r,s){return this.__of(j,r,s);
},remove:function(t){return this.__of(a,t);
},removeAll:function(){return this.__of(d);
},indexOf:function(u){return this.__of(l,u);
},addAt:function(v,w,x){this.__of(g,v,w,x);
},addBefore:function(y,z,A){this.__of(i,y,z,A);
},addAfter:function(B,C,D){this.__of(k,B,C,D);
},removeAt:function(E){return this.__of(e,E);
}}});
})();
(function(){var f="qx.ui.core.MSingleSelectionHandling",d="changeSelection",c="changeSelected",b="__dv",a="qx.event.type.Data";
qx.Mixin.define(f,{events:{"changeSelection":a},members:{__dv:null,getSelection:function(){var g=this.__mD().getSelected();

if(g){return [g];
}else{return [];
}},setSelection:function(h){switch(h.length){case 0:this.resetSelection();
break;
case 1:this.__mD().setSelected(h[0]);
break;
default:throw new Error("Could only select one item, but the selection"+" array contains "+h.length+" items!");
}},resetSelection:function(){this.__mD().resetSelected();
},isSelected:function(i){return this.__mD().isSelected(i);
},isSelectionEmpty:function(){return this.__mD().isSelectionEmpty();
},getSelectables:function(j){return this.__mD().getSelectables(j);
},_onChangeSelected:function(e){var l=e.getData();
var k=e.getOldData();
l==null?l=[]:l=[l];
k==null?k=[]:k=[k];
this.fireDataEvent(d,l,k);
},__mD:function(){if(this.__dv==null){var m=this;
this.__dv=new qx.ui.core.SingleSelectionManager({getItems:function(){return m._getItems();
},isItemSelectable:function(n){if(m._isItemSelectable){return m._isItemSelectable(n);
}else{return n.isVisible();
}}});
this.__dv.addListener(c,this._onChangeSelected,this);
}this.__dv.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__dv;
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
(function(){var f="change",d="qx.event.type.Data",c="qx.ui.form.MModelSelection",b="__lE",a="changeSelection";
qx.Mixin.define(c,{construct:function(){this.__lE=new qx.data.Array();
this.__lE.addListener(f,this.__lH,this);
this.addListener(a,this.__lG,this);
},events:{changeModelSelection:d},members:{__lE:null,__lF:false,__lG:function(){if(this.__lF){return;
}var k=this.getSelection();
var g=[];

for(var i=0;i<k.length;i++){var l=k[i];
var h=l.getModel?l.getModel():null;

if(h!==null){g.push(h);
}}if(g.length===k.length){try{this.setModelSelection(g);
}catch(e){throw new Error("Could not set the model selection. Maybe your models are not unique?");
}}},__lH:function(){this.__lF=true;
var n=this.getSelectables(true);
var p=[];
var o=this.__lE.toArray();

for(var i=0;i<o.length;i++){var r=o[i];

for(var j=0;j<n.length;j++){var s=n[j];
var m=s.getModel?s.getModel():null;

if(r===m){p.push(s);
break;
}}}this.setSelection(p);
this.__lF=false;
var q=this.getSelection();

if(!qx.lang.Array.equals(q,p)){this.__lG();
}},getModelSelection:function(){return this.__lE;
},setModelSelection:function(t){if(!t){this.__lE.removeAll();
return;
}t.unshift(this.__lE.getLength());
t.unshift(0);
var u=this.__lE.splice.apply(this.__lE,t);
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
(function(){var r="Boolean",q="changeInvalidMessage",p="changeValue",o="String",n="_applyAllowEmptySelection",m="_applyInvalidMessage",k="qx.ui.form.RadioGroup",j="_applyValid",h="",g="changeRequired",c="changeValid",f="changeEnabled",d="__mJ",b="changeSelection",a="_applyEnabled";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(s){qx.core.Object.call(this);
this.__mJ=[];
this.addListener(b,this.__mK,this);

if(s!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:a,event:f,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:n},valid:{check:r,init:true,apply:j,event:c},required:{check:r,init:false,event:g},invalidMessage:{check:o,init:h,event:q,apply:m},requiredInvalidMessage:{check:o,nullable:true,event:q}},members:{__mJ:null,getItems:function(){return this.__mJ;
},add:function(t){var u=this.__mJ;
var v;

for(var i=0,l=arguments.length;i<l;i++){v=arguments[i];

if(qx.lang.Array.contains(u,v)){continue;
}v.addListener(p,this._onItemChangeChecked,this);
u.push(v);
v.setGroup(this);
if(v.getValue()){this.setSelection([v]);
}}if(!this.isAllowEmptySelection()&&u.length>0&&!this.getSelection()[0]){this.setSelection([u[0]]);
}},remove:function(w){var x=this.__mJ;

if(qx.lang.Array.contains(x,w)){qx.lang.Array.remove(x,w);
if(w.getGroup()===this){w.resetGroup();
}w.removeListener(p,this._onItemChangeChecked,this);
if(w.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__mJ;
},_onItemChangeChecked:function(e){var y=e.getTarget();

if(y.getValue()){this.setSelection([y]);
}else if(this.getSelection()[0]==y){this.resetSelection();
}},_applyInvalidMessage:function(z,A){for(var i=0;i<this.__mJ.length;i++){this.__mJ[i].setInvalidMessage(z);
}},_applyValid:function(B,C){for(var i=0;i<this.__mJ.length;i++){this.__mJ[i].setValid(B);
}},_applyEnabled:function(D,E){var F=this.__mJ;

if(D==null){for(var i=0,l=F.length;i<l;i++){F[i].resetEnabled();
}}else{for(var i=0,l=F.length;i<l;i++){F[i].setEnabled(D);
}}},_applyAllowEmptySelection:function(G,H){if(!G&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var I=this.getSelection()[0];
var K=this.__mJ;
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
var N=this.__mJ;
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
},_isItemSelectable:function(O){return this.__mJ.indexOf(O)!=-1;
},__mK:function(e){var Q=e.getData()[0];
var P=e.getOldData()[0];

if(P){P.setValue(false);
}
if(Q){Q.setValue(true);
}}},destruct:function(){this._disposeArray(d);
}});
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
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g="Event (",f="Expected value to be the CSS color '",d="' but found ",bA="]",bz=", ",by="The value '",bx=")), but found value '",bw=" != ",bv="qx.core.Object",bu="Expected value to be an array but found ",bt=") was fired.",bs="Expected value to be an integer >= 0 but found ",br="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",T="Invalid argument 'type'",P="Called assert with 'false'",bc="Assertion error! ",W="null",bn="' but found '",bh="'undefined'",K="' must must be a key of the map '",bq="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",I="qx.util.ColorUtil",M=": ",O="The raised exception does not have the expected type! ",R=") not fired.",U="qx.core.Assert",X="Expected value to be typeof object but found ",be="' (identical) but found '",bj="' must have any of the values defined in the array '",y="Expected value to be a number but found ",z="Called assertFalse with '",L="qx.ui.core.Widget",bb="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",bg="Array[",bf="' does not match the regular expression '",V="' to be not identical with '",bd="Expected [",a="' arguments but found '",bi="', which cannot be converted to a CSS color!",A="qx.core.AssertionError",B="Expected value to be a boolean but found ",Q="Expected value not to be null but found null!",b="))!",c="Expected value to be a qooxdoo widget but found ",H="Expected value to be typeof '",C="Expected value to be typeof function but found ",D="Expected value to be an integer but found ",G="Called fail().",S="The parameter 're' must be a string or a regular expression.",bl="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",N="], but found [",bm="Wrong number of arguments given. Expected '",J="object";
qx.Class.define(U,{statics:{__bM:true,__bN:function(bB,bC){var bG=p;

for(var i=1,l=arguments.length;i<l;i++){bG=bG+this.__bO(arguments[i]===undefined?bh:arguments[i]);
}var bF=p;

if(bG){bF=bB+M+bG;
}else{bF=bB;
}var bE=bc+bF;

if(qx.Class.isDefined(A)){var bD=new qx.core.AssertionError(bB,bG);

if(this.__bM){qx.Bootstrap.error(bE+"\n Stack trace: \n"+bD.getStackTrace());
}throw bD;
}else{if(this.__bM){qx.Bootstrap.error(bE);
}throw new Error(bE);
}},__bO:function(bH){var bI;

if(bH===null){bI=W;
}else if(qx.lang.Type.isArray(bH)&&bH.length>10){bI=bg+bH.length+bA;
}else if((bH instanceof Object)&&(bH.toString==null)){bI=qx.lang.Json.stringify(bH,null,2);
}else{try{bI=bH.toString();
}catch(e){bI=p;
}}return bI;
},assert:function(bJ,bK){bJ==true||this.__bN(bK||p,P);
},fail:function(bL,bM){var bN=bM?p:G;
this.__bN(bL||p,bN);
},assertTrue:function(bO,bP){(bO===true)||this.__bN(bP||p,u,bO,m);
},assertFalse:function(bQ,bR){(bQ===false)||this.__bN(bR||p,z,bQ,m);
},assertEquals:function(bS,bT,bU){bS==bT||this.__bN(bU||p,k,bS,bn,bT,n);
},assertNotEquals:function(bV,bW,bX){bV!=bW||this.__bN(bX||p,k,bV,br,bW,n);
},assertIdentical:function(bY,ca,cb){bY===ca||this.__bN(cb||p,k,bY,be,ca,n);
},assertNotIdentical:function(cc,cd,ce){cc!==cd||this.__bN(ce||p,k,cc,V,cd,n);
},assertNotUndefined:function(cf,cg){cf!==undefined||this.__bN(cg||p,bo);
},assertUndefined:function(ch,ci){ch===undefined||this.__bN(ci||p,t,ch,o);
},assertNotNull:function(cj,ck){cj!==null||this.__bN(ck||p,Q);
},assertNull:function(cl,cm){cl===null||this.__bN(cm||p,F,cl,o);
},assertJsonEquals:function(cn,co,cp){this.assertEquals(qx.lang.Json.stringify(cn),qx.lang.Json.stringify(co),cp);
},assertMatch:function(cq,cr,cs){this.assertString(cq);
this.assert(qx.lang.Type.isRegExp(cr)||qx.lang.Type.isString(cr),S);
cq.search(cr)>=0||this.__bN(cs||p,bq,cq,bf,cr.toString(),n);
},assertArgumentsCount:function(ct,cu,cv,cw){var cx=ct.length;
(cx>=cu&&cx<=cv)||this.__bN(cw||p,bm,cu,w,cv,a,arguments.length,ba);
},assertEventFired:function(cy,event,cz,cA,cB){var cD=false;
var cC=function(e){if(cA){cA.call(cy,e);
}cD=true;
};
var cE;

try{cE=cy.addListener(event,cC,cy);
cz.call();
}catch(cF){throw cF;
}finally{try{cy.removeListenerById(cE);
}catch(cG){}}cD===true||this.__bN(cB||p,g,event,R);
},assertEventNotFired:function(cH,event,cI,cJ){var cL=false;
var cK=function(e){cL=true;
};
var cM=cH.addListener(event,cK,cH);
cI.call();
cL===false||this.__bN(cJ||p,g,event,bt);
cH.removeListenerById(cM);
},assertException:function(cN,cO,cP,cQ){var cO=cO||Error;
var cR;

try{this.__bM=false;
cN();
}catch(cS){cR=cS;
}finally{this.__bM=true;
}
if(cR==null){this.__bN(cQ||p,s);
}cR instanceof cO||this.__bN(cQ||p,O,cO,bw,cR);

if(cP){this.assertMatch(cR.toString(),cP,cQ);
}},assertInArray:function(cT,cU,cV){cU.indexOf(cT)!==-1||this.__bN(cV||p,by,cT,bj,cU,m);
},assertArrayEquals:function(cW,cX,cY){this.assertArray(cW,cY);
this.assertArray(cX,cY);
cY=cY||bd+cW.join(bz)+N+cX.join(bz)+bA;

if(cW.length!==cX.length){this.fail(cY,true);
}
for(var i=0;i<cW.length;i++){if(cW[i]!==cX[i]){this.fail(cY,true);
}}},assertKeyInMap:function(da,db,dc){db[da]!==undefined||this.__bN(dc||p,by,da,K,db,m);
},assertFunction:function(dd,de){qx.lang.Type.isFunction(dd)||this.__bN(de||p,C,dd,o);
},assertString:function(df,dg){qx.lang.Type.isString(df)||this.__bN(dg||p,bp,df,o);
},assertBoolean:function(dh,di){qx.lang.Type.isBoolean(dh)||this.__bN(di||p,B,dh,o);
},assertNumber:function(dj,dk){(qx.lang.Type.isNumber(dj)&&isFinite(dj))||this.__bN(dk||p,y,dj,o);
},assertPositiveNumber:function(dl,dm){(qx.lang.Type.isNumber(dl)&&isFinite(dl)&&dl>=0)||this.__bN(dm||p,bl,dl,o);
},assertInteger:function(dn,dp){(qx.lang.Type.isNumber(dn)&&isFinite(dn)&&dn%1===0)||this.__bN(dp||p,D,dn,o);
},assertPositiveInteger:function(dq,dr){var ds=(qx.lang.Type.isNumber(dq)&&isFinite(dq)&&dq%1===0&&dq>=0);
ds||this.__bN(dr||p,bs,dq,o);
},assertInRange:function(dt,du,dv,dw){(dt>=du&&dt<=dv)||this.__bN(dw||p,qx.lang.String.format(Y,[dt,du,dv]));
},assertObject:function(dx,dy){var dz=dx!==null&&(qx.lang.Type.isObject(dx)||typeof dx===J);
dz||this.__bN(dy||p,X,(dx),o);
},assertArray:function(dA,dB){qx.lang.Type.isArray(dA)||this.__bN(dB||p,bu,dA,o);
},assertMap:function(dC,dD){qx.lang.Type.isObject(dC)||this.__bN(dD||p,v,dC,o);
},assertRegExp:function(dE,dF){qx.lang.Type.isRegExp(dE)||this.__bN(dF||p,r,dE,o);
},assertType:function(dG,dH,dI){this.assertString(dH,T);
typeof (dG)===dH||this.__bN(dI||p,H,dH,d,dG,o);
},assertInstance:function(dJ,dK,dL){var dM=dK.classname||dK+p;
dJ instanceof dK||this.__bN(dL||p,bk,dM,d,dJ,o);
},assertInterface:function(dN,dO,dP){qx.Class.implementsInterface(dN,dO)||this.__bN(dP||p,x,dN,E,dO,n);
},assertCssColor:function(dQ,dR,dS){var dT=qx.Class.getByName(I);

if(!dT){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dV=dT.stringToRgb(dQ);

try{var dU=dT.stringToRgb(dR);
}catch(dX){this.__bN(dS||p,f,dQ,j,dV.join(h),bx,dR,bi);
}var dW=dV[0]==dU[0]&&dV[1]==dU[1]&&dV[2]==dU[2];
dW||this.__bN(dS||p,f,dV,j,dV.join(h),bx,dR,j,dU.join(h),b);
},assertElement:function(dY,ea){!!(dY&&dY.nodeType===1)||this.__bN(ea||p,q,dY,n);
},assertQxObject:function(eb,ec){this.__bP(eb,bv)||this.__bN(ec||p,bb,eb,o);
},assertQxWidget:function(ed,ee){this.__bP(ed,L)||this.__bN(ee||p,c,ed,o);
},__bP:function(ef,eg){if(!ef){return false;
}var eh=ef.constructor;

while(eh){if(eh.classname===eg){return true;
}eh=eh.superclass;
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
this.__dv=d;
this.__ef={};
qx.event.handler.Appear.__eg[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__eg:{},refresh:function(){var e=this.__eg;

for(var f in e){e[f].refresh();
}}},members:{__dv:null,__ef:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__ef;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__ef;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__ef;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__dv.dispatchEvent(w,t);
}}}},destruct:function(){this.__dv=this.__ef=null;
delete qx.event.handler.Appear.__eg[this.$$hash];
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
},statics:{__bc:qx.$$resources||{},__hs:{}},members:{has:function(q){return !!this.self(arguments).__bc[q];
},getData:function(r){return this.self(arguments).__bc[r]||null;
},getImageWidth:function(s){var t=this.self(arguments).__bc[s];
return t?t[0]:null;
},getImageHeight:function(u){var v=this.self(arguments).__bc[u];
return v?v[1]:null;
},getImageFormat:function(w){var x=this.self(arguments).__bc[w];
return x?x[2]:null;
},getCombinedFormat:function(y){var B=p;
var A=this.self(arguments).__bc[y];
var z=A&&A.length>4&&typeof (A[4])==k&&this.constructor.__bc[A[4]];

if(z){var D=A[4];
var C=this.constructor.__bc[D];
B=C[2];
}return B;
},toUri:function(E){if(E==null){return E;
}var F=this.self(arguments).__bc[E];

if(!F){return E;
}
if(typeof F===k){var H=F;
}else{var H=F[3];
if(!H){return E;
}}var G=p;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){G=this.self(arguments).__hs[H];
}return G+qx.$$libraries[H].resourceUri+o+E;
},toDataUri:function(I){var K=this.constructor.__bc[I];
var L=this.constructor.__bc[K[4]];
var M;

if(L){var J=L[4][I];
M=c+J[g]+f+J[e]+d+J[h];
}else{M=this.toUri(I);
}return M;
}},defer:function(N){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var R in qx.$$libraries){var P;

if(qx.$$libraries[R].resourceUri){P=qx.$$libraries[R].resourceUri;
}else{N.__hs[R]=p;
continue;
}if(P.match(/^\/\//)!=null){N.__hs[R]=window.location.protocol;
}else if(P.match(/^\//)!=null){N.__hs[R]=window.location.protocol+j+window.location.host;
}else if(P.match(/^\.\//)!=null){var O=document.URL;
N.__hs[R]=O.substring(0,O.lastIndexOf(o)+1);
}else if(P.match(/^http/)!=null){N.__hs[R]=p;
}else{var S=window.location.href.indexOf(i);
var Q;

if(S==-1){Q=window.location.href;
}else{Q=window.location.href.substring(0,S);
}N.__hs[R]=Q.substring(0,Q.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__gv:null,_invalidChildrenCache:null,__kd:null,invalidateLayoutCache:function(){this.__gv=null;
},renderLayout:function(c,d){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__gv){return this.__gv;
}return this.__gv=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(e){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var f=this.__kd;

if(f instanceof qx.ui.core.LayoutItem){f.clearSeparators();
}},_renderSeparator:function(g,h){this.__kd.renderSeparator(g,h);
},connectToWidget:function(i){if(i&&this.__kd){throw new Error("It is not possible to manually set the connected widget.");
}this.__kd=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__kd;
},_applyLayoutChange:function(){if(this.__kd){this.__kd.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__kd.getLayoutChildren();
}},destruct:function(){this.__kd=this.__gv=null;
}});
})();
(function(){var m="bottom",l="top",k="_applyLayoutChange",j="top-left",h="bottom-left",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",a="Integer",b="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:k},iconPosition:{check:[g,l,f,m,j,h],init:g,apply:k},center:{check:b,init:false,apply:k}},members:{verifyLayoutProperty:null,renderLayout:function(n,o){var x=qx.ui.layout.Util;
var q=this.getIconPosition();
var t=this._getLayoutChildren();
var length=t.length;
var I,top,y,r;
var D,w;
var B=this.getGap();
var G=this.getCenter();
if(q===m||q===f){var z=length-1;
var u=-1;
var s=-1;
}else{var z=0;
var u=length;
var s=1;
}if(q==l||q==m){if(G){var C=0;

for(var i=z;i!=u;i+=s){r=t[i].getSizeHint().height;

if(r>0){C+=r;

if(i!=z){C+=B;
}}}top=Math.round((o-C)/2);
}else{top=0;
}
for(var i=z;i!=u;i+=s){D=t[i];
w=D.getSizeHint();
y=Math.min(w.maxWidth,Math.max(n,w.minWidth));
r=w.height;
I=x.computeHorizontalAlignOffset(d,y,n);
D.renderLayout(I,top,y,r);
if(r>0){top+=r+B;
}}}else{var v=n;
var p=null;
var F=0;

for(var i=z;i!=u;i+=s){D=t[i];
y=D.getSizeHint().width;

if(y>0){if(!p&&D instanceof qx.ui.basic.Label){p=D;
}else{v-=y;
}F++;
}}
if(F>1){var E=(F-1)*B;
v-=E;
}
if(p){var w=p.getSizeHint();
var A=Math.max(w.minWidth,Math.min(v,w.maxWidth));
v-=A;
}
if(G&&v>0){I=Math.round(v/2);
}else{I=0;
}
for(var i=z;i!=u;i+=s){D=t[i];
w=D.getSizeHint();
r=Math.min(w.maxHeight,Math.max(o,w.minHeight));

if(D===p){y=A;
}else{y=w.width;
}var H=e;

if(q==j){H=l;
}else if(q==h){H=m;
}top=x.computeVerticalAlignOffset(H,w.height,o);
D.renderLayout(I,top,y,r);
if(y>0){I+=y+B;
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
(function(){var m="object",l="_applyTheme",k="",j="_",h="__cX",g="qx.ui.decoration.",f="qx.theme.manager.Decoration",e=".",d="Theme",c="changeTheme",a="string",b="singleton";
qx.Class.define(f,{type:b,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:l,event:c}},members:{__cX:null,resolve:function(n){if(!n){return null;
}
if(typeof n===m){return n;
}var s=this.getTheme();

if(!s){return null;
}var p=this.__cX;

if(!p){p=this.__cX={};
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
}var name=g+t.join(j);

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
},isCached:function(A){return !this.__cX?false:qx.lang.Object.contains(this.__cX,A);
},_applyTheme:function(B,C){var E=qx.util.AliasManager.getInstance();

if(C){for(var D in C.aliases){E.remove(D);
}}
if(B){for(var D in B.aliases){E.add(D,B.aliases[D]);
}}
if(!B){this.__cX={};
}}},destruct:function(){this._disposeMap(h);
}});
})();
(function(){var b="qx.ui.core.DecoratorFactory",a="$$nopool$$";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cO={};
},statics:{MAX_SIZE:15,__cW:a},members:{__cO:null,getDecoratorElement:function(c){var h=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(c)){var f=c;
var e=qx.theme.manager.Decoration.getInstance().resolve(c);
}else{var f=h.__cW;
e=c;
}var g=this.__cO;

if(g[f]&&g[f].length>0){var d=g[f].pop();
}else{var d=this._createDecoratorElement(e,f);
}d.$$pooled=false;
return d;
},poolDecorator:function(i){if(!i||i.$$pooled||i.isDisposed()){return;
}var l=qx.ui.core.DecoratorFactory;
var j=i.getId();

if(j==l.__cW){i.dispose();
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
qx.Class.define(w,{type:n,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[t,q],mode:e,themeable:true},allowStretchY:{group:[k,c],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[u,m,x,r],mode:e,themeable:true},alignX:{check:[l,v,o],nullable:true,apply:d,themeable:true},alignY:{check:[p,s,b,a],nullable:true,apply:d,themeable:true}},members:{__gs:null,__gt:null,__gu:null,__gv:null,__gw:null,__gx:null,__gy:null,getBounds:function(){return this.__gx||this.__gt||null;
},clearSeparators:function(){},renderSeparator:function(y,z){},renderLayout:function(A,top,B,C){var D;
var E=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var E=this._getHeightForWidth(B);
}
if(E!=null&&E!==this.__gs){this.__gs=E;
qx.ui.core.queue.Layout.add(this);
return null;
}var G=this.__gt;

if(!G){G=this.__gt={};
}var F={};

if(A!==G.left||top!==G.top){F.position=true;
G.left=A;
G.top=top;
}
if(B!==G.width||C!==G.height){F.size=true;
G.width=B;
G.height=C;
}if(this.__gu){F.local=true;
delete this.__gu;
}
if(this.__gw){F.margin=true;
delete this.__gw;
}return F;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__gu;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__gu=true;
this.__gv=null;
},getSizeHint:function(H){var I=this.__gv;

if(I){return I;
}
if(H===false){return null;
}I=this.__gv=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__gs&&this.getHeight()==null){I.height=this.__gs;
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
},_applyMargin:function(){this.__gw=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__gx;
},setUserBounds:function(S,top,T,U){this.__gx={left:S,top:top,width:T,height:U};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__gx;
qx.ui.core.queue.Layout.add(this);
},__gz:{},setLayoutProperties:function(V){if(V==null){return;
}var W=this.__gy;

if(!W){W=this.__gy={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(V);
}for(var X in V){if(V[X]==null){delete W[X];
}else{W[X]=V[X];
}}},getLayoutProperties:function(){return this.__gy||this.__gz;
},clearLayoutProperties:function(){delete this.__gy;
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
var bd=this.__gy;

if(bd){bc.__gy=qx.lang.Object.clone(bd);
}return bc;
}},destruct:function(){this.$$parent=this.$$subparent=this.__gy=this.__gt=this.__gx=this.__gv=null;
}});
})();
(function(){var cb="px",ca="Boolean",bY="qx.event.type.Drag",bX="qx.event.type.Mouse",bW="visible",bV="qx.event.type.Focus",bU="Integer",bT="qx.event.type.Touch",bS="qx.event.type.Data",bR="engine.name",bx="excluded",bw="_applyPadding",bv="qx.event.type.Event",bu="on",bt="mshtml",bs="hidden",br="contextmenu",bq="String",bp="tabIndex",bo="focused",ci="changeVisibility",cj="hovered",cg="qx.event.type.KeySequence",ch="absolute",ce="backgroundColor",cf="drag",cc="div",cd="disabled",ck="move",cl="dragstart",bK="qx.dynlocale",bJ="dragchange",bM="dragend",bL="resize",bO="Decorator",bN="zIndex",bQ="opacity",bP="default",bI="Color",bH="changeToolTipText",c="beforeContextmenuOpen",d="_applyNativeContextMenu",f="engine.version",g="_applyBackgroundColor",h="event.pointer",j="_applyFocusable",k="changeShadow",m="qx.event.type.KeyInput",n="createChildControl",o="browser.documentmode",cp="Font",co="_applyShadow",cn="_applyEnabled",cm="_applySelectable",ct="Number",cs="_applyKeepActive",cr="__hi",cq="_applyVisibility",cv="repeat",cu="qxDraggable",N="__gU",O="syncAppearance",L="paddingLeft",M="_applyDroppable",R="__hb",S="#",P="qx.event.type.MouseWheel",Q="_applyCursor",J="_applyDraggable",K="changeTextColor",w="$$widget",v="changeContextMenu",y="paddingTop",x="changeSelectable",s="hideFocus",r="none",u="outline",t="_applyAppearance",q="__hg",p="_applyOpacity",X="url(",Y=")",ba="qx.ui.core.Widget",bb="_applyFont",T="cursor",U="qxDroppable",V="changeZIndex",W="changeEnabled",bc="changeFont",bd="__he",G="__gV",F="_applyDecorator",E="_applyZIndex",D="_applyTextColor",C="qx.ui.menu.Menu",B="_applyToolTipText",A="true",z="widget",I="changeDecorator",H="__gY",be="_applyTabIndex",bf="changeAppearance",bg="shorthand",bh="/",bi="",bj="_applyContextMenu",bk="paddingBottom",bl="changeNativeContextMenu",bm="undefined",bn="qx.ui.tooltip.ToolTip",bB="qxKeepActive",bA="_applyKeepFocus",bz="paddingRight",by="changeBackgroundColor",bF="changeLocale",bE="__ha",bD="qxKeepFocus",bC="opera",bG="qx/static/blank.gif";
qx.Class.define(ba,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__gU=this._createContainerElement();
this.__gV=this.__hh();
this.__gU.add(this.__gV);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bv,disappear:bv,createChildControl:bS,resize:bS,move:bS,syncAppearance:bS,mousemove:bX,mouseover:bX,mouseout:bX,mousedown:bX,mouseup:bX,click:bX,dblclick:bX,contextmenu:bX,beforeContextmenuOpen:bS,mousewheel:P,touchstart:bT,touchend:bT,touchmove:bT,touchcancel:bT,tap:bT,swipe:bT,keyup:cg,keydown:cg,keypress:cg,keyinput:m,focus:bV,blur:bV,focusin:bV,focusout:bV,activate:bV,deactivate:bV,capture:bv,losecapture:bv,drop:bY,dragleave:bY,dragover:bY,drag:bY,dragstart:bY,dragend:bY,dragchange:bY,droprequest:bY},properties:{paddingTop:{check:bU,init:0,apply:bw,themeable:true},paddingRight:{check:bU,init:0,apply:bw,themeable:true},paddingBottom:{check:bU,init:0,apply:bw,themeable:true},paddingLeft:{check:bU,init:0,apply:bw,themeable:true},padding:{group:[y,bz,bk,L],mode:bg,themeable:true},zIndex:{nullable:true,init:null,apply:E,event:V,check:bU,themeable:true},decorator:{nullable:true,init:null,apply:F,event:I,check:bO,themeable:true},shadow:{nullable:true,init:null,apply:co,event:k,check:bO,themeable:true},backgroundColor:{nullable:true,check:bI,apply:g,event:by,themeable:true},textColor:{nullable:true,check:bI,apply:D,event:K,themeable:true,inheritable:true},font:{nullable:true,apply:bb,check:cp,event:bc,themeable:true,inheritable:true,dereference:true},opacity:{check:ct,apply:p,themeable:true,nullable:true,init:null},cursor:{check:bq,apply:Q,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bn,nullable:true},toolTipText:{check:bq,nullable:true,event:bH,apply:B},toolTipIcon:{check:bq,nullable:true,event:bH},blockToolTip:{check:ca,init:false},visibility:{check:[bW,bs,bx],init:bW,apply:cq,event:ci},enabled:{init:true,check:ca,inheritable:true,apply:cn,event:W},anonymous:{init:false,check:ca},tabIndex:{check:bU,nullable:true,apply:be},focusable:{check:ca,init:false,apply:j},keepFocus:{check:ca,init:false,apply:bA},keepActive:{check:ca,init:false,apply:cs},draggable:{check:ca,init:false,apply:J},droppable:{check:ca,init:false,apply:M},selectable:{check:ca,init:false,event:x,apply:cm},contextMenu:{check:C,apply:bj,nullable:true,event:v},nativeContextMenu:{check:ca,init:false,themeable:true,event:bl,apply:d},appearance:{check:bq,init:z,apply:t,event:bf}},statics:{DEBUG:false,getWidgetByElement:function(cw,cx){while(cw){var cy=cw.$$widget;
if(cy!=null){var cz=qx.core.ObjectRegistry.fromHashCode(cy);
if(!cx||!cz.getAnonymous()){return cz;
}}try{cw=cw.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cA){while(cA){if(parent==cA){return true;
}cA=cA.getLayoutParent();
}return false;
},__gW:new qx.ui.core.DecoratorFactory(),__gX:new qx.ui.core.DecoratorFactory()},members:{__gU:null,__gV:null,__gY:null,__ha:null,__hb:null,__hc:null,__hd:null,__he:null,_getLayout:function(){return this.__he;
},_setLayout:function(cB){if(this.__he){this.__he.connectToWidget(null);
}
if(cB){cB.connectToWidget(this);
}this.__he=cB;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cC=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cC);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cC);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__hf:function(a,b){if(a==b){return false;
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
if(cR.size){var cQ=this.__hb;

if(cQ){cQ.setStyles({width:cH+cb,height:cI+cb});
}}
if(cR.size||this._updateInsets){if(this.__gY){this.__gY.resize(cH,cI);
}}
if(cR.size){if(this.__ha){var cJ=this.__ha.getInsets();
var cN=cH+cJ.left+cJ.right;
var cL=cI+cJ.top+cJ.bottom;
this.__ha.resize(cN,cL);
}}
if(cO||cR.local||cR.margin){if(this.__he&&this.hasLayoutChildren()){this.__he.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cR.position&&this.hasListener(ck)){this.fireDataEvent(ck,this.getBounds());
}
if(cR.size&&this.hasListener(bL)){this.fireDataEvent(bL,this.getBounds());
}delete this._updateInsets;
return cR;
},__hg:null,clearSeparators:function(){var cU=this.__hg;

if(!cU){return;
}var cV=qx.ui.core.Widget.__gW;
var content=this.getContentElement();
var cT;

for(var i=0,l=cU.length;i<l;i++){cT=cU[i];
cV.poolDecorator(cT);
content.remove(cT);
}cU.length=0;
},renderSeparator:function(cW,cX){var da=qx.ui.core.Widget.__gW.getDecoratorElement(cW);
this.getContentElement().add(da);
da.resize(cX.width,cX.height);
var cY=da.getDomElement();
if(cY){cY.style.top=cX.top+cb;
cY.style.left=cX.left+cb;
}else{da.setStyles({left:cX.left+cb,top:cX.top+cb});
}if(!this.__hg){this.__hg=[da];
}else{this.__hg.push(da);
}},_computeSizeHint:function(){var dh=this.getWidth();
var dg=this.getMinWidth();
var dc=this.getMaxWidth();
var df=this.getHeight();
var dd=this.getMinHeight();
var de=this.getMaxHeight();
var di=this._getContentHint();
var db=this.getInsets();
var dk=db.left+db.right;
var dj=db.top+db.bottom;

if(dh==null){dh=di.width+dk;
}
if(df==null){df=di.height+dj;
}
if(dg==null){dg=dk;

if(di.minWidth!=null){dg+=di.minWidth;
if(dg>dc&&dc!=null){dg=dc;
}}}
if(dd==null){dd=dj;

if(di.minHeight!=null){dd+=di.minHeight;
if(dd>de&&de!=null){dd=de;
}}}
if(dc==null){if(di.maxWidth==null){dc=Infinity;
}else{dc=di.maxWidth+dk;
if(dc<dg&&dg!=null){dc=dg;
}}}
if(de==null){if(di.maxHeight==null){de=Infinity;
}else{de=di.maxHeight+dj;
if(de<dd&&dd!=null){de=dd;
}}}return {width:dh,minWidth:dg,maxWidth:dc,height:df,minHeight:dd,maxHeight:de};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__he){this.__he.invalidateLayoutCache();
}},_getContentHint:function(){var dm=this.__he;

if(dm){if(this.hasLayoutChildren()){var dl;
var dn=dm.getSizeHint();
return dn;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(dp){var dt=this.getInsets();
var dw=dt.left+dt.right;
var dv=dt.top+dt.bottom;
var du=dp-dw;
var dr=this._getLayout();

if(dr&&dr.hasHeightForWidth()){var dq=dr.getHeightForWidth(dp);
}else{dq=this._getContentHeightForWidth(du);
}var ds=dq+dv;
return ds;
},_getContentHeightForWidth:function(dx){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var dz=this.getPaddingRight();
var dB=this.getPaddingBottom();
var dA=this.getPaddingLeft();

if(this.__gY){var dy=this.__gY.getInsets();
top+=dy.top;
dz+=dy.right;
dB+=dy.bottom;
dA+=dy.left;
}return {"top":top,"right":dz,"bottom":dB,"left":dA};
},getInnerSize:function(){var dD=this.getBounds();

if(!dD){return null;
}var dC=this.getInsets();
return {width:dD.width-dC.left-dC.right,height:dD.height-dC.top-dC.bottom};
},show:function(){this.setVisibility(bW);
},hide:function(){this.setVisibility(bs);
},exclude:function(){this.setVisibility(bx);
},isVisible:function(){return this.getVisibility()===bW;
},isHidden:function(){return this.getVisibility()!==bW;
},isExcluded:function(){return this.getVisibility()===bx;
},isSeeable:function(){qx.ui.core.queue.Manager.flush();
var dE=this.getContainerElement().getDomElement();

if(dE){return dE.offsetWidth>0;
}return false;
},_createContainerElement:function(){var dG={"$$widget":this.toHashCode()};
var dF={zIndex:0,position:ch};
return new qx.html.Element(cc,dF,dG);
},__hh:function(){var dH=this._createContentElement();
dH.setStyles({"position":ch,"zIndex":10});
return dH;
},_createContentElement:function(){return new qx.html.Element(cc,{overflowX:bs,overflowY:bs});
},getContainerElement:function(){return this.__gU;
},getContentElement:function(){return this.__gV;
},getDecoratorElement:function(){return this.__gY||null;
},getShadowElement:function(){return this.__ha||null;
},__hi:null,getLayoutChildren:function(){var dJ=this.__hi;

if(!dJ){return this.__hj;
}var dK;

for(var i=0,l=dJ.length;i<l;i++){var dI=dJ[i];

if(dI.hasUserBounds()||dI.isExcluded()){if(dK==null){dK=dJ.concat();
}qx.lang.Array.remove(dK,dI);
}}return dK||dJ;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var dL=this.__he;

if(dL){dL.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var dM=this.__hi;

if(!dM){return false;
}var dN;

for(var i=0,l=dM.length;i<l;i++){dN=dM[i];

if(!dN.hasUserBounds()&&!dN.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__hj:[],_getChildren:function(){return this.__hi||this.__hj;
},_indexOf:function(dO){var dP=this.__hi;

if(!dP){return -1;
}return dP.indexOf(dO);
},_hasChildren:function(){var dQ=this.__hi;
return dQ!=null&&(!!dQ[0]);
},addChildrenToQueue:function(dR){var dS=this.__hi;

if(!dS){return;
}var dT;

for(var i=0,l=dS.length;i<l;i++){dT=dS[i];
dR.push(dT);
dT.addChildrenToQueue(dR);
}},_add:function(dU,dV){if(dU.getLayoutParent()==this){qx.lang.Array.remove(this.__hi,dU);
}
if(this.__hi){this.__hi.push(dU);
}else{this.__hi=[dU];
}this.__hk(dU,dV);
},_addAt:function(dW,dX,dY){if(!this.__hi){this.__hi=[];
}if(dW.getLayoutParent()==this){qx.lang.Array.remove(this.__hi,dW);
}var ea=this.__hi[dX];

if(ea===dW){dW.setLayoutProperties(dY);
}
if(ea){qx.lang.Array.insertBefore(this.__hi,dW,ea);
}else{this.__hi.push(dW);
}this.__hk(dW,dY);
},_addBefore:function(eb,ec,ed){if(eb==ec){return;
}
if(!this.__hi){this.__hi=[];
}if(eb.getLayoutParent()==this){qx.lang.Array.remove(this.__hi,eb);
}qx.lang.Array.insertBefore(this.__hi,eb,ec);
this.__hk(eb,ed);
},_addAfter:function(ee,ef,eg){if(ee==ef){return;
}
if(!this.__hi){this.__hi=[];
}if(ee.getLayoutParent()==this){qx.lang.Array.remove(this.__hi,ee);
}qx.lang.Array.insertAfter(this.__hi,ee,ef);
this.__hk(ee,eg);
},_remove:function(eh){if(!this.__hi){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__hi,eh);
this.__hl(eh);
},_removeAt:function(ei){if(!this.__hi){throw new Error("This widget has no children!");
}var ej=this.__hi[ei];
qx.lang.Array.removeAt(this.__hi,ei);
this.__hl(ej);
return ej;
},_removeAll:function(){if(!this.__hi){return [];
}var ek=this.__hi.concat();
this.__hi.length=0;

for(var i=ek.length-1;i>=0;i--){this.__hl(ek[i]);
}qx.ui.core.queue.Layout.add(this);
return ek;
},_afterAddChild:null,_afterRemoveChild:null,__hk:function(em,en){var parent=em.getLayoutParent();

if(parent&&parent!=this){parent._remove(em);
}em.setLayoutParent(this);
if(en){em.setLayoutProperties(en);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(em);
}},__hl:function(eo){if(eo.getLayoutParent()!==this){throw new Error("Remove Error: "+eo+" is not a child of this widget!");
}eo.setLayoutParent(null);
if(this.__he){this.__he.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(eo);
}},capture:function(ep){this.getContainerElement().capture(ep);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(eq,er,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__hb){return;
}var es=this.__hb=new qx.html.Element;
es.setStyles({position:ch,top:0,left:0,zIndex:7});
var et=this.getBounds();

if(et){this.__hb.setStyles({width:et.width+cb,height:et.height+cb});
}if((qx.core.Environment.get(bR)==bt)){es.setStyles({backgroundImage:X+qx.util.ResourceManager.getInstance().toUri(bG)+Y,backgroundRepeat:cv});
}this.getContainerElement().add(es);
},_applyDecorator:function(eu,ev){var ey=qx.ui.core.Widget.__gW;
var ew=this.getContainerElement();
if(!this.__hb&&!qx.core.Environment.get(h)){this._createProtectorElement();
}if(ev){ew.remove(this.__gY);
ey.poolDecorator(this.__gY);
}if(eu){var ex=this.__gY=ey.getDecoratorElement(eu);
ex.setStyle(bN,5);
ew.add(ex);
}else{delete this.__gY;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__hf(ev,eu)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(eu){var ez=this.getBounds();

if(ez){ex.resize(ez.width,ez.height);
this.__hb&&this.__hb.setStyles({width:ez.width+cb,height:ez.height+cb});
}}},_applyShadow:function(eA,eB){var eI=qx.ui.core.Widget.__gX;
var eD=this.getContainerElement();
if(eB){eD.remove(this.__ha);
eI.poolDecorator(this.__ha);
}if(eA){var eF=this.__ha=eI.getDecoratorElement(eA);
eD.add(eF);
var eH=eF.getInsets();
eF.setStyles({left:(-eH.left)+cb,top:(-eH.top)+cb});
var eG=this.getBounds();

if(eG){var eE=eG.width+eH.left+eH.right;
var eC=eG.height+eH.top+eH.bottom;
eF.resize(eE,eC);
}eF.tint(null);
}else{delete this.__ha;
}},_applyToolTipText:function(eJ,eK){if(qx.core.Environment.get(bK)){if(this.__hd){return;
}var eL=qx.locale.Manager.getInstance();
this.__hd=eL.addListener(bF,function(){var eM=this.getToolTipText();

if(eM&&eM.translate){this.setToolTipText(eM.translate());
}},this);
}},_applyTextColor:function(eN,eO){},_applyZIndex:function(eP,eQ){this.getContainerElement().setStyle(bN,eP==null?0:eP);
},_applyVisibility:function(eR,eS){var eT=this.getContainerElement();

if(eR===bW){eT.show();
}else{eT.hide();
}var parent=this.$$parent;

if(parent&&(eS==null||eR==null||eS===bx||eR===bx)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(eU,eV){this.getContainerElement().setStyle(bQ,eU==1?null:eU);
if((qx.core.Environment.get(bR)==bt)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var eW=(eU==1||eU==null)?null:0.99;
this.getContentElement().setStyle(bQ,eW);
}}},_applyCursor:function(eX,eY){if(eX==null&&!this.isSelectable()){eX=bP;
}this.getContainerElement().setStyle(T,eX,qx.core.Environment.get(bR)==bC);
},_applyBackgroundColor:function(fa,fb){var fc=this.getBackgroundColor();
var fe=this.getContainerElement();

if(this.__gY){this.__gY.tint(fc);
fe.setStyle(ce,null);
}else{var fd=qx.theme.manager.Color.getInstance().resolve(fc);
fe.setStyle(ce,fd);
}},_applyFont:function(ff,fg){},__hm:null,$$stateChanges:null,_forwardStates:null,hasState:function(fh){var fi=this.__hm;
return !!fi&&!!fi[fh];
},addState:function(fj){var fk=this.__hm;

if(!fk){fk=this.__hm={};
}
if(fk[fj]){return;
}this.__hm[fj]=true;
if(fj===cj){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fn=this.__hp;

if(forward&&forward[fj]&&fn){var fl;

for(var fm in fn){fl=fn[fm];

if(fl instanceof qx.ui.core.Widget){fn[fm].addState(fj);
}}}},removeState:function(fo){var fp=this.__hm;

if(!fp||!fp[fo]){return;
}delete this.__hm[fo];
if(fo===cj){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fs=this.__hp;

if(forward&&forward[fo]&&fs){for(var fr in fs){var fq=fs[fr];

if(fq instanceof qx.ui.core.Widget){fq.removeState(fo);
}}}},replaceState:function(ft,fu){var fv=this.__hm;

if(!fv){fv=this.__hm={};
}
if(!fv[fu]){fv[fu]=true;
}
if(fv[ft]){delete fv[ft];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fy=this.__hp;

if(forward&&forward[fu]&&fy){for(var fx in fy){var fw=fy[fx];

if(fw instanceof qx.ui.core.Widget){fw.replaceState(ft,fu);
}}}},__hn:null,__ho:null,syncAppearance:function(){var fD=this.__hm;
var fC=this.__hn;
var fE=qx.theme.manager.Appearance.getInstance();
var fA=qx.core.Property.$$method.setThemed;
var fI=qx.core.Property.$$method.resetThemed;
if(this.__ho){delete this.__ho;
if(fC){var fz=fE.styleFrom(fC,fD,null,this.getAppearance());
fC=null;
}}if(!fC){var fB=this;
var fH=[];

do{fH.push(fB.$$subcontrol||fB.getAppearance());
}while(fB=fB.$$subparent);
fC=fH.reverse().join(bh).replace(/#[0-9]+/g,bi);
this.__hn=fC;
}var fF=fE.styleFrom(fC,fD,null,this.getAppearance());

if(fF){var fG;

if(fz){for(var fG in fz){if(fF[fG]===undefined){this[fI[fG]]();
}}}for(var fG in fF){fF[fG]===undefined?this[fI[fG]]():this[fA[fG]](fF[fG]);
}}else if(fz){for(var fG in fz){this[fI[fG]]();
}}this.fireDataEvent(O,this.__hm);
},_applyAppearance:function(fJ,fK){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__hc){qx.ui.core.queue.Appearance.add(this);
this.__hc=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__ho=true;
qx.ui.core.queue.Appearance.add(this);
var fN=this.__hp;

if(fN){var fL;

for(var fM in fN){fL=fN[fM];

if(fL instanceof qx.ui.core.Widget){fL.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fO=this;

while(fO.getAnonymous()){fO=fO.getLayoutParent();

if(!fO){return null;
}}return fO;
},getFocusTarget:function(){var fP=this;

if(!fP.getEnabled()){return null;
}
while(fP.getAnonymous()||!fP.getFocusable()){fP=fP.getLayoutParent();

if(!fP||!fP.getEnabled()){return null;
}}return fP;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(fQ,fR){var fS=this.getFocusElement();
if(fQ){var fT=this.getTabIndex();

if(fT==null){fT=1;
}fS.setAttribute(bp,fT);
if((qx.core.Environment.get(bR)==bt&&parseFloat(qx.core.Environment.get(f))<8)||(qx.core.Environment.get(bR)==bt&&qx.core.Environment.get(o)<8)){fS.setAttribute(s,A);
}else{fS.setStyle(u,r);
}}else{if(fS.isNativelyFocusable()){fS.setAttribute(bp,-1);
}else if(fR){fS.setAttribute(bp,null);
}}},_applyKeepFocus:function(fU){var fV=this.getFocusElement();
fV.setAttribute(bD,fU?bu:null);
},_applyKeepActive:function(fW){var fX=this.getContainerElement();
fX.setAttribute(bB,fW?bu:null);
},_applyTabIndex:function(fY){if(fY==null){fY=1;
}else if(fY<1||fY>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&fY!=null){this.getFocusElement().setAttribute(bp,fY);
}},_applySelectable:function(ga,gb){if(gb!==null){this._applyCursor(this.getCursor());
}this.getContentElement().setSelectable(ga);
},_applyEnabled:function(gc,gd){if(gc===false){this.addState(cd);
this.removeState(cj);
if(this.isFocusable()){this.removeState(bo);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(cd);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(ge,gf,name){},_applyContextMenu:function(gg,gh){if(gh){gh.removeState(br);

if(gh.getOpener()==this){gh.resetOpener();
}
if(!gg){this.removeListener(br,this._onContextMenuOpen);
gh.removeListener(ci,this._onBeforeContextMenuOpen,this);
}}
if(gg){gg.setOpener(this);
gg.addState(br);

if(!gh){this.addListener(br,this._onContextMenuOpen);
gg.addListener(ci,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==bW&&this.hasListener(c)){this.fireDataEvent(c,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gi,gj){if(!this.isEnabled()&&gi===true){gi=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gi){this.addListener(cl,this._onDragStart);
this.addListener(cf,this._onDrag);
this.addListener(bM,this._onDragEnd);
this.addListener(bJ,this._onDragChange);
}else{this.removeListener(cl,this._onDragStart);
this.removeListener(cf,this._onDrag);
this.removeListener(bM,this._onDragEnd);
this.removeListener(bJ,this._onDragChange);
}this.getContainerElement().setAttribute(cu,gi?bu:null);
},_applyDroppable:function(gk,gl){if(!this.isEnabled()&&gk===true){gk=false;
}this.getContainerElement().setAttribute(U,gk?bu:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bP);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gm=qx.ui.core.DragDropCursor.getInstance();
var gn=e.getCurrentAction();
gn?gm.setAction(gn):gm.resetAction();
},visualizeFocus:function(){this.addState(bo);
},visualizeBlur:function(){this.removeState(bo);
},scrollChildIntoView:function(go,gp,gq,gr){gr=typeof gr==bm?true:gr;
var gs=qx.ui.core.queue.Layout;
var parent;
if(gr){gr=!gs.isScheduled(go);
parent=go.getLayoutParent();
if(gr&&parent){gr=!gs.isScheduled(parent);
if(gr){parent.getChildren().forEach(function(gt){gr=gr&&!gs.isScheduled(gt);
});
}}}this.scrollChildIntoViewX(go,gp,gr);
this.scrollChildIntoViewY(go,gq,gr);
},scrollChildIntoViewX:function(gu,gv,gw){this.getContentElement().scrollChildIntoViewX(gu.getContainerElement(),gv,gw);
},scrollChildIntoViewY:function(gx,gy,gz){this.getContentElement().scrollChildIntoViewY(gx.getContainerElement(),gy,gz);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(gA){if(!this.__hp){return false;
}return !!this.__hp[gA];
},__hp:null,_getCreatedChildControls:function(){return this.__hp;
},getChildControl:function(gB,gC){if(!this.__hp){if(gC){return null;
}this.__hp={};
}var gD=this.__hp[gB];

if(gD){return gD;
}
if(gC===true){return null;
}return this._createChildControl(gB);
},_showChildControl:function(gE){var gF=this.getChildControl(gE);
gF.show();
return gF;
},_excludeChildControl:function(gG){var gH=this.getChildControl(gG,true);

if(gH){gH.exclude();
}},_isChildControlVisible:function(gI){var gJ=this.getChildControl(gI,true);

if(gJ){return gJ.isVisible();
}return false;
},_createChildControl:function(gK){if(!this.__hp){this.__hp={};
}else if(this.__hp[gK]){throw new Error("Child control '"+gK+"' already created!");
}var gO=gK.indexOf(S);

if(gO==-1){var gL=this._createChildControlImpl(gK);
}else{var gL=this._createChildControlImpl(gK.substring(0,gO),gK.substring(gO+1,gK.length));
}
if(!gL){throw new Error("Unsupported control: "+gK);
}gL.$$subcontrol=gK;
gL.$$subparent=this;
var gM=this.__hm;
var forward=this._forwardStates;

if(gM&&forward&&gL instanceof qx.ui.core.Widget){for(var gN in gM){if(forward[gN]){gL.addState(gN);
}}}this.fireDataEvent(n,gL);
return this.__hp[gK]=gL;
},_createChildControlImpl:function(gP,gQ){return null;
},_disposeChildControls:function(){var gU=this.__hp;

if(!gU){return;
}var gS=qx.ui.core.Widget;

for(var gT in gU){var gR=gU[gT];

if(!gS.contains(this,gR)){gR.destroy();
}else{gR.dispose();
}}delete this.__hp;
},_findTopControl:function(){var gV=this;

while(gV){if(!gV.$$subparent){return gV;
}gV=gV.$$subparent;
}return null;
},getContainerLocation:function(gW){var gX=this.getContainerElement().getDomElement();
return gX?qx.bom.element.Location.get(gX,gW):null;
},getContentLocation:function(gY){var ha=this.getContentElement().getDomElement();
return ha?qx.bom.element.Location.get(ha,gY):null;
},setDomLeft:function(hb){var hc=this.getContainerElement().getDomElement();

if(hc){hc.style.left=hb+cb;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(hd){var he=this.getContainerElement().getDomElement();

if(he){he.style.top=hd+cb;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(hf,top){var hg=this.getContainerElement().getDomElement();

if(hg){hg.style.left=hf+cb;
hg.style.top=top+cb;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var hh=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var hi=this.getChildren();

for(var i=0,l=hi.length;i<l;i++){hh.add(hi[i].clone());
}}return hh;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(bK)){if(this.__hd){qx.locale.Manager.getInstance().removeListenerById(this.__hd);
}}this.getContainerElement().setAttribute(w,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}
if(this.getContextMenu()){this.setContextMenu(null);
}if(!qx.core.ObjectRegistry.inShutDown){var hk=qx.ui.core.Widget;
var hj=this.getContainerElement();

if(this.__gY){hj.remove(this.__gY);
hk.__gW.poolDecorator(this.__gY);
}
if(this.__ha){hj.remove(this.__ha);
hk.__gX.poolDecorator(this.__ha);
}this.clearSeparators();
this.__gY=this.__ha=this.__hg=null;
}else{this._disposeArray(q);
this._disposeObjects(H,bE);
}this._disposeArray(cr);
this.__hm=this.__hp=null;
this._disposeObjects(bd,N,G,R);
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
},_applyColor:function(W,X){this.__iS.color=null;

if(W){this.__iS.color=qx.theme.manager.Color.getInstance().resolve(W);
}},getStyles:function(){return this.__iS;
}}});
})();
(function(){var q="other",p="widgets",o="undefined",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",c="Theme",e="meta",d="borders",b="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,r){if(!r){var r={};
}r.include=this.__qT(r.include);
r.patch=this.__qT(r.patch);
var s={$$type:c,name:name,title:r.title,toString:this.genericToString};
if(r.extend){s.supertheme=r.extend;
}s.basename=qx.Bootstrap.createNamespace(name,s);
this.__qW(s,r);
this.__qU(s,r);
this.$$registry[name]=s;
for(var i=0,a=r.include,l=a.length;i<l;i++){this.include(s,a[i]);
}
for(var i=0,a=r.patch,l=a.length;i<l;i++){this.patch(s,a[i]);
}},__qT:function(t){if(!t){return [];
}
if(qx.Bootstrap.isArray(t)){return t;
}else{return [t];
}},__qU:function(u,v){var w=v.aliases||{};

if(v.extend&&v.extend.aliases){qx.Bootstrap.objectMergeWith(w,v.extend.aliases,false);
}u.aliases=w;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__qV:function(x){for(var i=0,y=this.__qX,l=y.length;i<l;i++){if(x[y[i]]){return y[i];
}}},__qW:function(z,A){var D=this.__qV(A);
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
},$$registry:{},__qX:[g,d,f,n,b,p,m,e],__c:null,__qY:null,__d:function(){},patch:function(G,H){this.__ra(H);
var J=this.__qV(H);

if(J!==this.__qV(G)){throw new Error("The mixins '"+G.name+"' are not compatible '"+H.name+"'!");
}var I=H[J];
var K=G.$$clazz.prototype;

for(var L in I){K[L]=I[L];
}},include:function(M,N){this.__ra(N);
var P=N.type;

if(P!==M.type){throw new Error("The mixins '"+M.name+"' are not compatible '"+N.name+"'!");
}var O=N[P];
var Q=M.$$clazz.prototype;

for(var R in O){if(Q[R]!==undefined){continue;
}Q[R]=O[R];
}},__ra:function(S){if(typeof S===o||S==null){var T;
var U=new Error("Mixin theme is not a valid theme!");
throw U;
}}}});
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
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__cY:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__cY=null;
},getInsets:function(){if(this.__cY){return this.__cY;
}var j=this._getDefaultInsets();
return this.__cY={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){this.__cY=null;
}},destruct:function(){this.__cY=null;
}});
})();
(function(){var b="px",a="qx.ui.decoration.Single";
qx.Class.define(a,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder],construct:function(c,d,e){qx.ui.decoration.Abstract.call(this);
if(c!=null){this.setWidth(c);
}
if(d!=null){this.setStyle(d);
}
if(e!=null){this.setColor(e);
}},members:{_markup:null,getMarkup:function(){if(this._markup){return this._markup;
}var f={};
this._styleBorder(f);
var g=this._generateBackgroundMarkup(f);
return this._markup=g;
},resize:function(h,i,j){var k=this._resizeBorder(h,i,j);
h.style.width=k.width+b;
h.style.height=k.height+b;
h.style.left=k.left+b;
h.style.top=k.top+b;
},tint:function(l,m){this._tintBackgroundColor(l,m,l.style);
},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();
}},destruct:function(){this._markup=null;
}});
})();
(function(){var j="px",i="Integer",h="_applyBorderRadius",g="radiusTopRight",f="radiusTopLeft",e="-webkit-border-bottom-left-radius",d="-webkit-background-clip",c="radiusBottomRight",b="-webkit-border-bottom-right-radius",a="border-top-left-radius",w="border-top-right-radius",v="border-bottom-left-radius",u="radiusBottomLeft",t="-webkit-border-top-left-radius",s="shorthand",r="-moz-border-radius-bottomright",q="padding-box",p="border-bottom-right-radius",o="qx.ui.decoration.MBorderRadius",n="-moz-border-radius-topright",l="-webkit-border-top-right-radius",m="-moz-border-radius-topleft",k="-moz-border-radius-bottomleft";
qx.Mixin.define(o,{properties:{radiusTopLeft:{nullable:true,check:i,apply:h},radiusTopRight:{nullable:true,check:i,apply:h},radiusBottomLeft:{nullable:true,check:i,apply:h},radiusBottomRight:{nullable:true,check:i,apply:h},radius:{group:[f,g,c,u],mode:s}},members:{_styleBorderRadius:function(x){x[d]=q;
var y=this.getRadiusTopLeft();

if(y>0){x[m]=y+j;
x[t]=y+j;
x[a]=y+j;
}y=this.getRadiusTopRight();

if(y>0){x[n]=y+j;
x[l]=y+j;
x[w]=y+j;
}y=this.getRadiusBottomLeft();

if(y>0){x[k]=y+j;
x[e]=y+j;
x[v]=y+j;
}y=this.getRadiusBottomRight();

if(y>0){x[r]=y+j;
x[b]=y+j;
x[p]=y+j;
}},_applyBorderRadius:function(){}}});
})();
(function(){var k="_applyBoxShadow",j="px ",i="Integer",h="shadowHorizontalLength",g="box-shadow",f="-webkit-box-shadow",e="shadowVerticalLength",d="-moz-box-shadow",c="shorthand",b="qx.ui.decoration.MBoxShadow",a="Color";
qx.Mixin.define(b,{properties:{shadowHorizontalLength:{nullable:true,check:i,apply:k},shadowVerticalLength:{nullable:true,check:i,apply:k},shadowBlurRadius:{nullable:true,check:i,apply:k},shadowColor:{nullable:true,check:a,apply:k},shadowLength:{group:[h,e],mode:c}},members:{_styleBoxShadow:function(l){{var m=qx.theme.manager.Color.getInstance();
var p=m.resolve(this.getShadowColor());
};

if(p!=null){var q=this.getShadowVerticalLength()||0;
var n=this.getShadowHorizontalLength()||0;
var blur=this.getShadowBlurRadius()||0;
var o=n+j+q+j+blur+j+p;
l[d]=o;
l[f]=o;
l[g]=o;
}},_applyBoxShadow:function(){}}});
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
(function(){var j="_applyLinearBackgroundGradient",i=" ",h=")",g="horizontal",f=",",e=" 0",d="px",c="0",b="shorthand",a="Color",D="vertical",C="Number",B="%",A="),to(",z="from(",y="background-image",x="background",w="browser.name",v="-webkit-gradient(linear,",u="startColorPosition",q="deg, ",r="css.gradient.legacywebkit",o="startColor",p="ie",m="",n="qx.ui.decoration.MLinearBackgroundGradient",k="(",l="endColorPosition",s="css.gradient.linear",t="endColor";
qx.Mixin.define(n,{properties:{startColor:{check:a,nullable:true,apply:j},endColor:{check:a,nullable:true,apply:j},orientation:{check:[g,D],init:D,apply:j},startColorPosition:{check:C,init:0,apply:j},endColorPosition:{check:C,init:100,apply:j},colorPositionUnit:{check:[d,B],init:B,apply:j},gradientStart:{group:[o,u],mode:b},gradientEnd:{group:[t,l],mode:b}},members:{_styleLinearBackgroundGradient:function(E){{var H=qx.theme.manager.Color.getInstance();
var O=H.resolve(this.getStartColor());
var J=H.resolve(this.getEndColor());
};
var P=this.getColorPositionUnit();
if(qx.core.Environment.get(r)){P=P===d?m:P;

if(this.getOrientation()==g){var N=this.getStartColorPosition()+P+e+P;
var L=this.getEndColorPosition()+P+e+P;
}else{var N=c+P+i+this.getStartColorPosition()+P;
var L=c+P+i+this.getEndColorPosition()+P;
}var K=z+O+A+J+h;
var I=v+N+f+L+f+K+h;
E[x]=I;
}else{var Q=this.getOrientation()==g?0:270;
if(qx.core.Environment.get(w)==p){Q=Q-90;
}var G=O+i+this.getStartColorPosition()+P;
var F=J+i+this.getEndColorPosition()+P;
var M=qx.core.Environment.get(s);
E[y]=M+k+Q+q+G+f+F+h;
}},_resizeLinearBackgroundGradient:function(R,S,T){var U=this.getInsets();
S-=U.left+U.right;
T-=U.top+U.bottom;
return {left:U.left,top:U.top,width:S,height:T};
},_applyLinearBackgroundGradient:function(){}}});
})();
(function(){var j="px ",i=" ",h='',g="Color",f="Number",e="border-top",d="border-left",c="border-bottom",b="border-right",a="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",u="innerColorTop",t="relative",q="browser.documentmode",r="innerColorLeft",o="qx.ui.decoration.MDoubleBorder",p="left",m="engine.version",n="innerWidthBottom",k="innerWidthLeft",l="position",s="absolute";
qx.Mixin.define(o,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__sb;
this._resizeBorder=this.__sa;
this._styleBorder=this.__rX;
this._generateMarkup=this.__rY;
},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[w,z,n,k],mode:a},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[u,v,x,r],mode:a}},members:{__rW:null,__rX:function(D){{var F=qx.theme.manager.Color.getInstance();
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
}},__rY:function(K){var O=this._generateBackgroundMarkup(K);
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
return this.__rW=this._generateBackgroundMarkup(K,O);
},__sa:function(S,T,U){var V=this.getInsets();
T-=V.left+V.right;
U-=V.top+V.bottom;
var W=V.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=V.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:W,top:top,width:T,height:U,elementToApplyDimensions:S.firstChild};
},__sb:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var j="tabview-button-border",i="button-box",h="button-box-pressed",g="background-selected",f="button-border",e="button-box-hovered",d="button-box-pressed-hovered",c="solid",b="invalid",a="gray",X="button-border-hovered",W="tabview-unselected",V="shadow",U="border-separator",T="button-box-focused",S="border-light",R="checkbox",Q="tabview-page-button-top-bottom",P="window-border",O="radiobutton",q="scroll-knob",r="tabview-page-button-right-left",o="background",p="button-box-bright",m="window-border-inner",n="white",k="button-box-bright-pressed",l="button-box-dark-pressed",u="table-header",v="button-box-invalid",C="menubar-button-hovered",A="button-box-dark",G="#999999",E="qx/decoration/Simple",K="dotted",I="button",x="tooltip-text",N="table-focus-indicator",M="button-box-pressed-invalid",L="scrollbar-dark",w="qx.theme.simple.Decoration",y="table-header-cell",z="border-lead",B="#FFF",D="button-box-pressed-focused",F="scrollbar-bright",H="border-light-shadow",J="white-box-border",s="window",t="scroll-knob-pressed";
qx.Theme.define(w,{aliases:{decoration:E},decorations:{"border-blue":{decorator:qx.ui.decoration.Uniform,style:{width:4,color:g}},"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:g}},"main-dark":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:f}},"popup":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:P,shadowLength:2,shadowBlurRadius:5,shadowColor:V}},"button-box":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:f,gradientStart:[p,40],gradientEnd:[A,70],backgroundColor:p}},"button-box-pressed":{include:i,style:{gradientStart:[k,40],gradientEnd:[l,70],backgroundColor:k}},"button-box-pressed-hovered":{include:h,style:{color:X}},"button-box-hovered":{include:i,style:{color:X}},"button-box-invalid":{include:i,style:{color:b}},"button-box-pressed-invalid":{include:h,style:{color:b}},"button-box-hovered-invalid":{include:v},"button-box-pressed-hovered-invalid":{include:M},"button-box-focused":{include:i,style:{color:g}},"button-box-pressed-focused":{include:h,style:{color:g}},"button-box-hovered-focused":{include:T},"button-box-pressed-hovered-focused":{include:D},"button-box-right":{include:i,style:{radius:[0,3,3,0]}},"button-box-pressed-right":{include:h,style:{radius:[0,3,3,0]}},"button-box-pressed-hovered-right":{include:d,style:{radius:[0,3,3,0]}},"button-box-hovered-right":{include:e,style:{radius:[0,3,3,0]}},"button-box-focused-right":{include:T,style:{radius:[0,3,3,0]}},"button-box-right-borderless":{include:i,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-right-borderless":{include:h,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-hovered-right-borderless":{include:d,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-hovered-right-borderless":{include:e,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-top-right":{include:i,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-top-right":{include:h,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-hovered-top-right":{include:d,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-hovered-top-right":{include:e,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-bottom-right":{include:i,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-bottom-right":{include:h,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-hovered-bottom-right":{include:d,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-hovered-bottom-right":{include:e,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-bottom-left":{include:i,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-bottom-left":{include:h,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-hovered-bottom-left":{include:d,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-hovered-bottom-left":{include:e,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-top-left":{include:i,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-top-left":{include:h,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-hovered-top-left":{include:d,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-hovered-top-left":{include:e,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-middle":{include:i,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-middle":{include:h,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-hovered-middle":{include:d,style:{radius:0,width:[1,0,1,1]}},"button-box-hovered-middle":{include:e,style:{radius:0,width:[1,0,1,1]}},"button-box-left":{include:i,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-left":{include:h,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-hovered-left":{include:d,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-hovered-left":{include:e,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-focused-left":{include:T,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:U}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:U}},"scroll-knob":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:f,backgroundColor:F}},"scroll-knob-pressed":{include:q,style:{backgroundColor:L}},"scroll-knob-hovered":{include:q,style:{color:X}},"scroll-knob-pressed-hovered":{include:t,style:{color:X}},"button-hover":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius],style:{backgroundColor:I,radius:3}},"window":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:P,innerWidth:4,innerColor:m,shadowLength:1,shadowBlurRadius:3,shadowColor:V,backgroundColor:o}},"window-active":{include:s,style:{shadowLength:2,shadowBlurRadius:5}},"window-caption":{decorator:qx.ui.decoration.Single,style:{width:[0,0,2,0],color:m}},"white-box":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:J,shadowBlurRadius:2,shadowColor:G,radius:7,backgroundColor:n}},"inset":{decorator:qx.ui.decoration.Single,style:{width:1,color:[H,S,S,S]}},"focused-inset":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:g}},"border-invalid":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:b}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:K,color:z}},"tooltip":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{width:1,color:x,shadowLength:1,shadowBlurRadius:2,shadowColor:V}},"tooltip-error":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{radius:5,backgroundColor:b}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:f}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g}},"menubar-button-hovered":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{width:1,color:g,radius:3,backgroundColor:n}},"menubar-button-pressed":{include:C,style:{radius:[3,3,0,0],width:[1,1,0,1]}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:a,style:c}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:a,style:c}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:a,style:c}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:a,widthRight:1,colorRight:a,style:c}},"tabview-page-button-top-bottom":{decorator:qx.ui.decoration.Single,style:{width:[0,1],color:j}},"tabview-page-button-top-bottom-first":{include:Q,style:{color:[j,j,j,W]}},"tabview-page-button-top-bottom-last":{include:Q,style:{color:[j,W,j,j]}},"tabview-page-button-right-left":{decorator:qx.ui.decoration.Single,style:{width:[1,0],color:j}},"tabview-page-button-right-left-first":{include:r,style:{color:[W,j,j,j]}},"tabview-page-button-right-left-last":{include:r,style:{color:[j,j,W,j]}},"statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g,styleTop:c}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:N,style:c}},"table-header":{include:i,style:{radius:0,width:[1,0,1,0]}},"table-header-column-button":{include:u,style:{width:1,color:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,color:f}},"table-header-cell-first":{include:y,style:{widthLeft:1}},"progressbar":{decorator:qx.ui.decoration.Single,style:{backgroundColor:B,width:1,color:U}},"radiobutton":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:10,width:1,color:f,innerColor:o,innerWidth:2}},"radiobutton-focused":{include:O,style:{color:g}},"radiobutton-invalid":{include:O,style:{color:b}},"checkbox":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:f}},"checkbox-focused":{include:R,style:{color:g}},"checkbox-invalid":{include:R,style:{color:b}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b}});
})();
(function(){var dl="widget",dk="button",dj="pointer",di="button-box",dh="atom",dg="background",df="main-dark",de="bold",dd="text-disabled",dc="image",ca="white",bY="background-selected",bX="popup",bW="button-box-hovered",bV="",bU="button-box-pressed-hovered",bT="label",bS="button-box-pressed",bR="arrow-down",bQ="groupbox",dt="text-selected",du="cell",dr="textfield",ds="tooltip",dp="combobox/button",dq="list",dm="middle",dn="menu-button",dv="toolbar-button",dw="spinner",cK="button-frame",cJ="-middle",cM="-invert",cL="background-selected-dark",cO="invalid",cN="combobox",cQ="scrollbar",cP="inset",cI="center",cH="datechooser/button",k="right",l="main",m="light-background",n="background-disabled",o="-right",p="radiobutton",q="arrow-",r="checkbox",s="-left",t="tree-folder",dK="selectbox",dJ="-invalid",dI="icon/16/places/folder-open.png",dH="menu-slidebar-button",dO="scrollbar/button",dN="border-invalid",dM="tree-minus",dL="statusbar",dQ="down",dP="text",bg="background-disabled-checked",bh="tree",be="slidebar/button-forward",bf="icon/16/places/folder.png",bk="icon/16/mimetypes/text-plain.png",bl="tree-plus",bi="default",bj="-top-left",bc="datechooser",bd="button-box-focused",L="blank",K="treevirtual-folder",N="-bottom-right",M="virtual-list",H="-top-right",G="arrow-right",J="left",I="up",F="right-top",E="focused-inset",bq="slidebar/button-backward",br="-bottom-left",bs="table-row-background-even",bt="button-box-pressed-top-right",bm="arrow-left",bn="datechooser-weekday",bo="arrow-up",bp="icon/16/actions/dialog-ok.png",bu="button-box-top-right",bv="slidebar",W="#BABABA",V="button-box-hovered-bottom-right",U="tabview-page-button-top-bottom",T="move-frame",S="nodrop",R="window-caption",Q="table-header-cell",P="button-box-hovered-top-right",bb="row-layer",ba="treevirtual-plus-only",bw="move",bx="treevirtual-plus-end",by="-last",bz="vertical",bA="arrow-down-small",bB="tooltip-error",bC="window-restore",bD="resize-frame",bE="scroll-knob",bF="tabview-close",ci="atom/label",ch="button-box-pressed-bottom-right",cg="button-box-pressed-hovered-bottom-right",cf="icon/16/actions/dialog-cancel.png",cm="qx.theme.simple.Appearance",cl="menu-slidebar",ck="treevirtual-minus-cross",cj="background-pane",cp="table-",co="scroll-knob-pressed",cD="icon",cE="arrow-rewind",cB="icon/16/apps/office-calendar.png",cC="headline",cz="treevirtual-plus-start",cA="treevirtual-minus-end",cx="checkbox-undetermined",cy="button-box-bottom-right",cF="datechooser-week",cG="descending",cU="toolbar-separator",cT="arrow-up-small",cW="horizontal",cV="border-light-shadow",cY="text-placeholder",cX="treevirtual-plus-cross",db="scrollarea",da="treevirtual-line",cS="tabview-page-button-right-left",cR="menu-checkbox",dD="best-fit",dE="button-border",dF="treevirtual-cross",dG="button-hover",dz="menubar-button-pressed",dA="progressbar",dB="tree-file",dC="tooltip-text",dx="keep-align",dy="-first",j="alias",i="ascending",h="button-box-hovered-right-borderless",g="button-box-right-borderless",f="lead-item",e="checkbox-focused",d="border-blue",c="window-minimize",b="button-box-pressed-hovered-top-right",a="knob-",w="treevirtual-minus-only",x="treevirtual-minus-start",u="checkbox-checked",v="window",A="window-active",B="table-header-cell-first",y="button-box-pressed-right-borderless",z="scroll-knob-hovered",C="tabview-label-active-disabled",D="select-column-order",cq="button-box-pressed-hovered-right-borderless",cn="scroll-knob-pressed-hovered",cv="white-box",cr="datechooser-week-header",cd="menubar-button-hovered",cb="table-header-column-button",O="window-close",ce="datechooser-date-pane",Y="tabview-unselected",X="cursor-",bI="-focused",bJ="menu-radiobutton",bK="window-maximize",bL="treevirtual-end",bM="table",bN="arrow-forward",bO="copy",bP="table-row-background-selected",bG="radiobutton-focused",bH="scrollbar/slider/knob",cc="atom/icon",cu="table-header",ct="menu-separator",cs="link",cw="icon/16/actions/view-refresh.png";
qx.Theme.define(cm,{appearances:{"widget":{},"label":{style:function(dR){return {textColor:dR.disabled?dd:undefined};
}},"image":{style:function(dS){return {opacity:!dS.replacement&&dS.disabled?0.3:undefined};
}},"atom":{},"atom/label":bT,"atom/icon":dc,"root":{style:function(dT){return {backgroundColor:dg,textColor:dP,font:bi};
}},"popup":{style:function(dU){return {decorator:bX,backgroundColor:cj};
}},"tooltip":{include:bX,style:function(dV){return {backgroundColor:ds,textColor:dC,decorator:ds,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":dh,"tooltip-error":{include:ds,style:function(dW){return {textColor:dt,showTimeout:100,hideTimeout:10000,decorator:bB,font:de,backgroundColor:undefined};
}},"tooltip-error/atom":dh,"iframe":{style:function(dX){return {backgroundColor:ca,decorator:df};
}},"move-frame":{style:function(dY){return {decorator:df};
}},"resize-frame":T,"dragdrop-cursor":{style:function(ea){var eb=S;

if(ea.copy){eb=bO;
}else if(ea.move){eb=bw;
}else if(ea.alias){eb=j;
}return {source:qx.theme.simple.Image.URLS[X+eb],position:F,offset:[2,16,2,6]};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dk,include:dk,style:function(ec){return {icon:qx.theme.simple.Image.URLS[q+(ec.vertical?dQ:k)]};
}},"slidebar/button-backward":{alias:dk,include:dk,style:function(ed){return {icon:qx.theme.simple.Image.URLS[q+(ed.vertical?I:J)]};
}},"table":dl,"table/statusbar":{style:function(ee){return {decorator:dL,padding:[2,5]};
}},"table/column-button":{alias:dk,style:function(ef){return {decorator:cb,padding:3,icon:qx.theme.simple.Image.URLS[D]};
}},"table-column-reset-button":{include:dn,alias:dn,style:function(){return {icon:cw};
}},"table-scroller/scrollbar-x":cQ,"table-scroller/scrollbar-y":cQ,"table-scroller":dl,"table-scroller/header":{style:function(){return {decorator:cu};
}},"table-scroller/pane":{},"table-scroller/focus-indicator":{style:function(eg){return {decorator:l};
}},"table-scroller/resize-line":{style:function(eh){return {backgroundColor:dE,width:3};
}},"table-header-cell":{alias:dh,style:function(ei){return {decorator:ei.first?B:Q,minWidth:13,font:de,paddingTop:3,paddingLeft:5,cursor:ei.disabled?undefined:dj,sortIcon:ei.sorted?(qx.theme.simple.Image.URLS[cp+(ei.sortedAscending?i:cG)]):undefined};
}},"table-header-cell/icon":{include:cc,style:function(ej){return {paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(ek){return {alignY:dm,alignX:k,paddingRight:5};
}},"table-editor-textfield":{include:dr,style:function(el){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:dK,alias:dK,style:function(em){return {padding:[0,2]};
}},"table-editor-combobox":{include:cN,alias:cN,style:function(en){return {decorator:undefined};
}},"treevirtual":{include:dr,alias:bM,style:function(eo,ep){return {padding:[ep.padding[0]+2,ep.padding[1]+1]};
}},"treevirtual-folder":{style:function(eq){return {icon:(eq.opened?dI:bf)};
}},"treevirtual-file":{include:K,alias:K,style:function(er){return {icon:bk};
}},"treevirtual-line":{style:function(es){return {icon:qx.theme.simple.Image.URLS[da]};
}},"treevirtual-contract":{style:function(et){return {icon:qx.theme.simple.Image.URLS[dM]};
}},"treevirtual-expand":{style:function(eu){return {icon:qx.theme.simple.Image.URLS[bl]};
}},"treevirtual-only-contract":{style:function(ev){return {icon:qx.theme.simple.Image.URLS[w]};
}},"treevirtual-only-expand":{style:function(ew){return {icon:qx.theme.simple.Image.URLS[ba]};
}},"treevirtual-start-contract":{style:function(ex){return {icon:qx.theme.simple.Image.URLS[x]};
}},"treevirtual-start-expand":{style:function(ey){return {icon:qx.theme.simple.Image.URLS[cz]};
}},"treevirtual-end-contract":{style:function(ez){return {icon:qx.theme.simple.Image.URLS[cA]};
}},"treevirtual-end-expand":{style:function(eA){return {icon:qx.theme.simple.Image.URLS[bx]};
}},"treevirtual-cross-contract":{style:function(eB){return {icon:qx.theme.simple.Image.URLS[ck]};
}},"treevirtual-cross-expand":{style:function(eC){return {icon:qx.theme.simple.Image.URLS[cX]};
}},"treevirtual-end":{style:function(eD){return {icon:qx.theme.simple.Image.URLS[bL]};
}},"treevirtual-cross":{style:function(eE){return {icon:qx.theme.simple.Image.URLS[dF]};
}},"resizer":{style:function(eF){return {decorator:df};
}},"splitpane":{},"splitpane/splitter":{style:function(eG){return {backgroundColor:m};
}},"splitpane/splitter/knob":{style:function(eH){return {source:qx.theme.simple.Image.URLS[a+(eH.horizontal?cW:bz)],padding:2};
}},"splitpane/slider":{style:function(eI){return {backgroundColor:cV,opacity:0.3};
}},"menu":{style:function(eJ){var eK={backgroundColor:dg,decorator:l,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:eJ.submenu||eJ.contextmenu?dD:dx};

if(eJ.submenu){eK.position=F;
eK.offset=[-2,-3];
}
if(eJ.contextmenu){eK.offset=4;
}return eK;
}},"menu/slidebar":cl,"menu-slidebar":dl,"menu-slidebar-button":{style:function(eL){return {backgroundColor:eL.hovered?bY:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:dH,style:function(eM){return {icon:qx.theme.simple.Image.URLS[bo+(eM.hovered?cM:bV)]};
}},"menu-slidebar/button-forward":{include:dH,style:function(eN){return {icon:qx.theme.simple.Image.URLS[bR+(eN.hovered?cM:bV)]};
}},"menu-separator":{style:function(eO){return {height:0,decorator:ct,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:dh,style:function(eP){return {backgroundColor:eP.selected?bY:undefined,textColor:eP.selected?dt:undefined,padding:[2,6]};
}},"menu-button/icon":{include:dc,style:function(eQ){return {alignY:dm};
}},"menu-button/label":{include:bT,style:function(eR){return {alignY:dm,padding:1};
}},"menu-button/shortcut":{include:bT,style:function(eS){return {alignY:dm,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:dc,style:function(eT){return {source:qx.theme.simple.Image.URLS[G+(eT.selected?cM:bV)],alignY:dm};
}},"menu-checkbox":{alias:dn,include:dn,style:function(eU){return {icon:!eU.checked?undefined:qx.theme.simple.Image.URLS[cR+(eU.selected?cM:bV)]};
}},"menu-radiobutton":{alias:dn,include:dn,style:function(eV){return {icon:!eV.checked?undefined:qx.theme.simple.Image.URLS[bJ+(eV.selected?cM:bV)]};
}},"menubar":{style:function(eW){return {backgroundColor:m,padding:[4,2]};
}},"menubar-button":{style:function(eX){var fa;
var eY=[2,6];

if(!eX.disabled){if(eX.pressed){fa=dz;
eY=[1,5,2,5];
}else if(eX.hovered){fa=cd;
eY=[1,5];
}}return {padding:eY,cursor:eX.disabled?undefined:dj,textColor:cs,decorator:fa};
}},"virtual-list":dq,"virtual-list/row-layer":bb,"row-layer":dl,"column-layer":dl,"group-item":{include:bT,alias:bT,style:function(fb){return {padding:4,backgroundColor:W,textColor:ca,font:de};
}},"virtual-selectbox":dK,"virtual-selectbox/dropdown":bX,"virtual-selectbox/dropdown/list":{alias:M},"virtual-combobox":cN,"virtual-combobox/dropdown":bX,"virtual-combobox/dropdown/list":{alias:M},"virtual-tree":{include:bh,alias:bh,style:function(fc){return {itemHeight:21};
}},"virtual-tree-folder":t,"virtual-tree-file":dB,"cell":{style:function(fd){return {backgroundColor:fd.selected?bP:bs,textColor:fd.selected?dt:dP,padding:[3,6]};
}},"cell-string":du,"cell-number":{include:du,style:function(fe){return {textAlign:k};
}},"cell-image":du,"cell-boolean":du,"cell-atom":du,"cell-date":du,"cell-html":du,"htmlarea":{"include":dl,style:function(ff){return {backgroundColor:ca};
}},"scrollbar":{},"scrollbar/slider":{},"scrollbar/slider/knob":{style:function(fg){var fh=bE;

if(!fg.disabled){if(fg.hovered&&!fg.pressed&&!fg.checked){fh=z;
}else if(fg.hovered&&(fg.pressed||fg.checked)){fh=cn;
}else if(fg.pressed||fg.checked){fh=co;
}}return {height:14,width:14,cursor:fg.disabled?undefined:dj,decorator:fh,minHeight:fg.horizontal?undefined:20,minWidth:fg.horizontal?20:undefined};
}},"scrollbar/button":{style:function(fi){var fj={};
fj.padding=4;
var fk=bV;

if(fi.left){fk=J;
fj.marginRight=2;
}else if(fi.right){fk+=k;
fj.marginLeft=2;
}else if(fi.up){fk+=I;
fj.marginBottom=2;
}else{fk+=dQ;
fj.marginTop=2;
}fj.icon=qx.theme.simple.Image.URLS[q+fk];
fj.cursor=dj;
fj.decorator=di;
return fj;
}},"scrollbar/button-begin":dO,"scrollbar/button-end":dO,"scrollarea/corner":{style:function(fl){return {backgroundColor:dg};
}},"scrollarea":dl,"scrollarea/pane":dl,"scrollarea/scrollbar-x":cQ,"scrollarea/scrollbar-y":cQ,"textfield":{style:function(fm){var fo;

if(fm.disabled){fo=dd;
}else if(fm.showingPlaceholder){fo=cY;
}else{fo=undefined;
}var fp;
var fn;

if(fm.disabled){fp=cP;
fn=[2,3];
}else if(fm.invalid){fp=dN;
fn=[1,2];
}else if(fm.focused){fp=E;
fn=[1,2];
}else{fn=[2,3];
fp=cP;
}return {decorator:fp,padding:fn,textColor:fo,backgroundColor:fm.disabled?n:ca};
}},"textarea":dr,"radiobutton/icon":{style:function(fq){var fs=p;

if(fq.focused&&!fq.invalid){fs=bG;
}fs+=fq.invalid&&!fq.disabled?dJ:bV;
var fr;

if(fq.disabled&&fq.checked){fr=bg;
}else if(fq.disabled){fr=n;
}else if(fq.checked){fr=bY;
}return {decorator:fs,width:12,height:12,backgroundColor:fr};
}},"radiobutton":{style:function(ft){return {icon:qx.theme.simple.Image.URLS[L]};
}},"form-renderer-label":{include:bT,style:function(){return {paddingTop:3};
}},"checkbox":{alias:dh,style:function(fu){var fv;
if(fu.checked){fv=qx.theme.simple.Image.URLS[u];
}else if(fu.undetermined){fv=qx.theme.simple.Image.URLS[cx];
}else{fv=qx.theme.simple.Image.URLS[L];
}return {icon:fv,gap:6};
}},"checkbox/icon":{style:function(fw){var fy=r;

if(fw.focused&&!fw.invalid){fy=e;
}fy+=fw.invalid&&!fw.disabled?dJ:bV;
var fx;
if(fw.checked){fx=2;
}else if(fw.undetermined){fx=[4,2];
}return {decorator:fy,width:12,height:12,padding:fx,backgroundColor:ca};
}},"spinner":{style:function(fz){return {textColor:fz.disabled?dd:undefined};
}},"spinner/textfield":dr,"spinner/upbutton":{alias:dp,include:dp,style:function(fA){var fB=bu;

if(fA.hovered&&!fA.pressed&&!fA.checked){fB=P;
}else if(fA.hovered&&(fA.pressed||fA.checked)){fB=b;
}else if(fA.pressed||fA.checked){fB=bt;
}return {icon:qx.theme.simple.Image.URLS[cT],decorator:fB,width:17};
}},"spinner/downbutton":{alias:dp,include:dp,style:function(fC){var fD=cy;

if(fC.hovered&&!fC.pressed&&!fC.checked){fD=V;
}else if(fC.hovered&&(fC.pressed||fC.checked)){fD=cg;
}else if(fC.pressed||fC.checked){fD=ch;
}return {icon:qx.theme.simple.Image.URLS[bA],decorator:fD,width:17};
}},"selectbox":cK,"selectbox/atom":dh,"selectbox/popup":bX,"selectbox/list":{alias:dq,include:dq,style:function(){return {decorator:undefined};
}},"selectbox/arrow":{include:dc,style:function(fE){return {source:qx.theme.simple.Image.URLS[bR],paddingRight:4,paddingLeft:5};
}},"combobox":{},"combobox/button":{alias:cK,include:cK,style:function(fF){var fG=g;

if(fF.hovered&&!fF.pressed&&!fF.checked){fG=h;
}else if(fF.hovered&&(fF.pressed||fF.checked)){fG=cq;
}else if(fF.pressed||fF.checked){fG=y;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:fG,padding:[0,5],width:19};
}},"combobox/popup":bX,"combobox/list":{alias:dq},"combobox/textfield":dr,"datefield":cN,"datefield/button":{alias:dp,include:dp,style:function(fH){return {icon:cB,padding:[0,0,0,3],backgroundColor:undefined,decorator:undefined,width:19};
}},"datefield/list":{alias:bc,include:bc,style:function(fI){return {decorator:undefined};
}},"list":{alias:db,include:dr},"listitem":{alias:dh,style:function(fJ){return {gap:4,padding:fJ.lead?[2,4]:[3,5],backgroundColor:fJ.selected?bY:undefined,textColor:fJ.selected?dt:undefined,decorator:fJ.lead?f:undefined};
}},"slider":{style:function(fK){var fM;
var fL;

if(fK.disabled){fM=cP;
fL=[2,3];
}else if(fK.invalid){fM=dN;
fL=[1,2];
}else if(fK.focused){fM=E;
fL=[1,2];
}else{fL=[2,3];
fM=cP;
}return {decorator:fM,padding:fL};
}},"slider/knob":bH,"button-frame":{alias:dh,style:function(fN){var fO=di;

if(!fN.disabled){if(fN.hovered&&!fN.pressed&&!fN.checked){fO=bW;
}else if(fN.hovered&&(fN.pressed||fN.checked)){fO=bU;
}else if(fN.pressed||fN.checked){fO=bS;
}}
if(fN.invalid&&!fN.disabled){fO+=dJ;
}else if(fN.focused){fO+=bI;
}return {decorator:fO,padding:[3,8],cursor:fN.disabled?undefined:dj,minWidth:5,minHeight:5};
}},"button-frame/label":{alias:ci,style:function(fP){return {textColor:fP.disabled?dd:undefined};
}},"button":{alias:cK,include:cK,style:function(fQ){return {center:true};
}},"hover-button":{alias:dk,include:dk,style:function(fR){return {decorator:fR.hovered?dG:undefined};
}},"splitbutton":{},"splitbutton/button":{alias:dh,style:function(fS){var fT=di;

if(fS.disabled){fT=di;
}else if(fS.focused){fT=bd;
}else if(fS.hovered&&!fS.pressed&&!fS.checked){fT=bW;
}else if(fS.hovered&&(fS.pressed||fS.checked)){fT=bU;
}else if(fS.pressed||fS.checked){fT=bS;
}fT+=s;
return {decorator:fT,padding:[3,8],cursor:fS.disabled?undefined:dj};
}},"splitbutton/arrow":{style:function(fU){var fV=di;

if(fU.disabled){fV=di;
}else if(fU.focused){fV=bd;
}else if(fU.hovered&&!fU.pressed&&!fU.checked){fV=bW;
}else if(fU.hovered&&(fU.pressed||fU.checked)){fV=bU;
}else if(fU.pressed||fU.checked){fV=bS;
}fV+=o;
return {icon:qx.theme.simple.Image.URLS[bR],decorator:fV,cursor:fU.disabled?undefined:dj,padding:[3,4]};
}},"groupbox":{},"groupbox/legend":{alias:dh,style:function(fW){return {textColor:fW.invalid?cO:undefined,padding:5,margin:4,font:de};
}},"groupbox/frame":{style:function(fX){return {backgroundColor:dg,padding:[6,9],margin:[18,2,2,2],decorator:cv};
}},"check-groupbox":bQ,"check-groupbox/legend":{alias:r,include:r,style:function(fY){return {textColor:fY.invalid?cO:undefined,padding:5,margin:4,font:de};
}},"radio-groupbox":bQ,"radio-groupbox/legend":{alias:p,include:p,style:function(ga){return {textColor:ga.invalid?cO:undefined,padding:5,margin:4,font:de};
}},"tree-folder/open":{include:dc,style:function(gb){return {source:gb.opened?qx.theme.simple.Image.URLS[dM]:qx.theme.simple.Image.URLS[bl]};
}},"tree-folder":{style:function(gc){return {padding:[2,8,2,5],icon:gc.opened?dI:bf,backgroundColor:gc.selected?bY:undefined,iconOpened:dI};
}},"tree-folder/icon":{include:dc,style:function(gd){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(ge){return {padding:[1,2],textColor:ge.selected?dt:undefined};
}},"tree-file":{include:t,alias:t,style:function(gf){return {icon:bk};
}},"tree":{include:dq,alias:dq,style:function(gg){return {contentPadding:gg.invalid&&!gg.disabled?[3,0]:[4,1],padding:gg.focused?0:1};
}},"window":{style:function(gh){return {contentPadding:[10,10,10,10],backgroundColor:dg,decorator:gh.maximized?undefined:gh.active?A:v};
}},"window-resize-frame":bD,"window/pane":{},"window/captionbar":{style:function(gi){return {backgroundColor:gi.active?m:n,padding:8,font:de,decorator:R};
}},"window/icon":{style:function(gj){return {marginRight:4};
}},"window/title":{style:function(gk){return {cursor:bi,font:de,marginRight:20,alignY:dm};
}},"window/minimize-button":{alias:dk,style:function(gl){return {icon:qx.theme.simple.Image.URLS[c],padding:[1,2],cursor:gl.disabled?undefined:dj};
}},"window/restore-button":{alias:dk,style:function(gm){return {icon:qx.theme.simple.Image.URLS[bC],padding:[1,2],cursor:gm.disabled?undefined:dj};
}},"window/maximize-button":{alias:dk,style:function(gn){return {icon:qx.theme.simple.Image.URLS[bK],padding:[1,2],cursor:gn.disabled?undefined:dj};
}},"window/close-button":{alias:dk,style:function(go){return {marginLeft:2,icon:qx.theme.simple.Image.URLS[O],padding:[1,2],cursor:go.disabled?undefined:dj};
}},"window/statusbar":{style:function(gp){return {decorator:dL,padding:[2,6]};
}},"window/statusbar-text":bT,"datechooser":{style:function(gq){return {decorator:l};
}},"datechooser/navigation-bar":{style:function(gr){return {backgroundColor:dg,textColor:gr.disabled?dd:gr.invalid?cO:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":ds,"datechooser/last-month-button-tooltip":ds,"datechooser/next-year-button-tooltip":ds,"datechooser/next-month-button-tooltip":ds,"datechooser/last-year-button":cH,"datechooser/last-month-button":cH,"datechooser/next-year-button":cH,"datechooser/next-month-button":cH,"datechooser/button/icon":{},"datechooser/button":{style:function(gs){var gt={width:17,show:cD,cursor:gs.disabled?undefined:dj};

if(gs.lastYear){gt.icon=qx.theme.simple.Image.URLS[cE];
}else if(gs.lastMonth){gt.icon=qx.theme.simple.Image.URLS[bm];
}else if(gs.nextYear){gt.icon=qx.theme.simple.Image.URLS[bN];
}else if(gs.nextMonth){gt.icon=qx.theme.simple.Image.URLS[G];
}return gt;
}},"datechooser/month-year-label":{style:function(gu){return {font:de,textAlign:cI};
}},"datechooser/date-pane":{style:function(gv){return {decorator:ce,backgroundColor:dg};
}},"datechooser/weekday":{style:function(gw){return {decorator:bn,font:de,textAlign:cI,textColor:gw.disabled?dd:gw.weekend?cL:dg,backgroundColor:gw.weekend?dg:cL,paddingTop:2};
}},"datechooser/day":{style:function(gx){return {textAlign:cI,decorator:gx.today?l:undefined,textColor:gx.disabled?dd:gx.selected?dt:gx.otherMonth?dd:undefined,backgroundColor:gx.disabled?undefined:gx.selected?bY:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(gy){return {textAlign:cI,textColor:cL,padding:[2,4],decorator:gy.header?cr:cF};
}},"progressbar":{style:function(gz){return {decorator:dA,padding:1,backgroundColor:ca,width:200,height:20};
}},"progressbar/progress":{style:function(gA){return {backgroundColor:gA.disabled?bg:bY};
}},"toolbar":{style:function(gB){return {backgroundColor:m,padding:0};
}},"toolbar/part":{style:function(gC){return {margin:[0,15]};
}},"toolbar/part/container":{},"toolbar/part/handle":{},"toolbar-separator":{style:function(gD){return {decorator:cU,margin:[7,0],width:4};
}},"toolbar-button":{alias:dh,style:function(gE){var gG=di;

if(gE.disabled){gG=di;
}else if(gE.hovered&&!gE.pressed&&!gE.checked){gG=bW;
}else if(gE.hovered&&(gE.pressed||gE.checked)){gG=bU;
}else if(gE.pressed||gE.checked){gG=bS;
}if(gE.left){gG+=s;
}else if(gE.right){gG+=o;
}else if(gE.middle){gG+=cJ;
}var gF=[7,10];

if(gE.left||gE.middle||gE.right){gF=[7,0];
}return {cursor:gE.disabled?undefined:dj,decorator:gG,margin:gF,padding:[3,5]};
}},"toolbar-menubutton":{alias:dv,include:dv,style:function(gH){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:dc,include:dc,style:function(gI){return {source:qx.theme.simple.Image.URLS[bR],cursor:gI.disabled?undefined:dj,padding:[0,5],marginLeft:2};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":{alias:dv,include:dv,style:function(gJ){var gK=di;

if(gJ.disabled){gK=di;
}else if(gJ.hovered&&!gJ.pressed&&!gJ.checked){gK=bW;
}else if(gJ.hovered&&(gJ.pressed||gJ.checked)){gK=bU;
}else if(gJ.pressed||gJ.checked){gK=bS;
}if(gJ.left){gK+=s;
}else if(gJ.right){gK+=cJ;
}else if(gJ.middle){gK+=cJ;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:gK};
}},"toolbar-splitbutton/arrow":{alias:dv,include:dv,style:function(gL){var gM=di;

if(gL.disabled){gM=di;
}else if(gL.hovered&&!gL.pressed&&!gL.checked){gM=bW;
}else if(gL.hovered&&(gL.pressed||gL.checked)){gM=bU;
}else if(gL.pressed||gL.checked){gM=bS;
}if(gL.left){gM+=cJ;
}else if(gL.right){gM+=o;
}else if(gL.middle){gM+=cJ;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:gM};
}},"tabview":{},"tabview/bar":{alias:bv,style:function(gN){var gO=0,gR=0,gP=0,gQ=0;

if(gN.barTop){gP-=2;
}else if(gN.barBottom){gO-=2;
}else if(gN.barRight){gQ-=2;
}else{gR-=2;
}return {marginBottom:gP,marginTop:gO,marginLeft:gQ,marginRight:gR};
}},"tabview/bar/button-forward":{include:be,alias:be,style:function(gS){var gT=di;

if(gS.hovered&&!gS.pressed&&!gS.checked){gT=bW;
}else if(gS.hovered&&(gS.pressed||gS.checked)){gT=bU;
}else if(gS.pressed||gS.checked){gT=bS;
}
if(gS.barTop){return {marginTop:4,marginBottom:2,decorator:gT+H};
}else if(gS.barBottom){return {marginTop:2,marginBottom:4,decorator:gT+N};
}else if(gS.barLeft){return {marginLeft:4,marginRight:2,decorator:gT+br};
}else{return {marginLeft:2,marginRight:4,decorator:gT+N};
}}},"tabview/bar/button-backward":{include:bq,alias:bq,style:function(gU){var gV=di;

if(gU.hovered&&!gU.pressed&&!gU.checked){gV=bW;
}else if(gU.hovered&&(gU.pressed||gU.checked)){gV=bU;
}else if(gU.pressed||gU.checked){gV=bS;
}
if(gU.barTop){return {marginTop:4,marginBottom:2,decorator:gV+bj};
}else if(gU.barBottom){return {marginTop:2,marginBottom:4,decorator:gV+br};
}else if(gU.barLeft){return {marginLeft:4,marginRight:2,decorator:gV+bj};
}else{return {marginLeft:2,marginRight:4,decorator:gV+H};
}}},"tabview/pane":{style:function(gW){return {backgroundColor:dg,decorator:d,padding:10};
}},"tabview-page":dl,"tabview-page/button":{style:function(gX){var hh;
var hf=0,hd=0,ha=0,hc=0;
if(gX.barTop||gX.barBottom){var hb=5,gY=5,he=9,hg=9;
}else{var hb=8,gY=8,he=4,hg=4;
}if(gX.barTop||gX.barBottom){hh=U;
}else if(gX.barRight||gX.barLeft){hh=cS;
}if(gX.checked){if(gX.barTop){he+=1;
hg+=1;
hb+=4;
}else if(gX.barBottom){he+=1;
hg+=1;
hb+=2;
}else if(gX.barLeft){hb+=1;
gY+=1;
he+=4;
hg+=2;
}else if(gX.barRight){hb+=1;
gY+=1;
he+=2;
hg+=4;
}}else{if(gX.barTop){ha+=2;
hf+=4;
}else if(gX.barBottom){ha+=4;
hf+=2;
}else if(gX.barLeft){hd+=2;
hc+=4;
}else if(gX.barRight){hd+=4;
hc+=2;
}}
if(gX.firstTab&&!gX.checked){hh+=dy;
}else if(gX.lastTab&&!gX.checked){hh+=by;
}return {zIndex:gX.checked?10:5,decorator:gX.checked?undefined:hh,backgroundColor:gX.checked?bY:Y,textColor:gX.disabled?gX.checked?C:dd:ca,padding:[hb,hg,gY,he],margin:[hf,hd,ha,hc]};
}},"tabview-page/button/label":{alias:bT,style:function(hi){return {padding:[0,1,0,1]};
}},"tabview-page/button/icon":dc,"tabview-page/button/close-button":{alias:dh,style:function(hj){return {cursor:hj.disabled?undefined:dj,icon:qx.theme.simple.Image.URLS[bF]};
}},"colorpopup":{alias:bX,include:bX,style:function(hk){return {padding:5};
}},"colorpopup/field":{style:function(hl){return {margin:2,width:14,height:14,backgroundColor:dg,decorator:df};
}},"colorpopup/selector-button":dk,"colorpopup/auto-button":dk,"colorpopup/preview-pane":bQ,"colorpopup/current-preview":{style:function(hm){return {height:20,padding:4,marginLeft:4,decorator:df,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hn){return {height:20,padding:4,marginRight:4,decorator:df,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dk,include:dk,style:function(ho){return {icon:bp};
}},"colorpopup/colorselector-cancelbutton":{alias:dk,include:dk,style:function(hp){return {icon:cf};
}},"colorselector":dl,"colorselector/control-bar":dl,"colorselector/visual-pane":bQ,"colorselector/control-pane":dl,"colorselector/preset-grid":dl,"colorselector/colorbucket":{style:function(hq){return {decorator:df,width:16,height:16};
}},"colorselector/preset-field-set":bQ,"colorselector/input-field-set":bQ,"colorselector/preview-field-set":bQ,"colorselector/hex-field-composite":dl,"colorselector/hex-field":dr,"colorselector/rgb-spinner-composite":dl,"colorselector/rgb-spinner-red":dw,"colorselector/rgb-spinner-green":dw,"colorselector/rgb-spinner-blue":dw,"colorselector/hsb-spinner-composite":dl,"colorselector/hsb-spinner-hue":dw,"colorselector/hsb-spinner-saturation":dw,"colorselector/hsb-spinner-brightness":dw,"colorselector/preview-content-old":{style:function(hr){return {decorator:df,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(hs){return {decorator:df,backgroundColor:ca,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(ht){return {decorator:df,margin:5};
}},"colorselector/brightness-field":{style:function(hu){return {decorator:df,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dl,"colorselector/hue-saturation-handle":dl,"colorselector/brightness-pane":dl,"colorselector/brightness-handle":dl,"app-header":{style:function(hv){return {font:cC,textColor:dt,backgroundColor:cL,padding:[8,12]};
}},"app-header-label":{style:function(hw){return {paddingTop:5};
}}}});
})();
(function(){var f="sans-serif",e="arial",d="monospace",c="Courier New",b="qx.theme.simple.Font",a="DejaVu Sans Mono";
qx.Theme.define(b,{fonts:{"default":{size:13,family:[e,f]},"bold":{size:13,family:[e,f],bold:true},"headline":{size:24,family:[f,e]},"small":{size:11,family:[e,f]},"monospace":{size:11,family:[a,c,d]}}});
})();
(function(){var k="div",j="string",h="-moz-none",g="backgroundImage",f="inline-block",e="-moz-inline-box",d="color",c="span",b="css.float",a="css.borderimage.standardsyntax",bg="borderRadius",bf="boxSizing",be='m11',bd="content",bc="css.inlineblock",bb="css.appearance",ba="css.gradient.radial",Y="input",X="borderImage",W="userSelect",s="css.overflowxy",t="styleFloat",q="css.usermodify",r="css.boxsizing",o='url("foo.png") 4 4 4 4 fill stretch',p="css.boxmodel",m="qx.bom.client.Css",n="appearance",w="placeholder",x="css.boxshadow",F="css.gradient.legacywebkit",D="css.borderradius",M="linear-gradient(0deg, #fff, #000)",H="css.opacity",S="css.borderimage",Q="rgba(1, 2, 3, 0.5)",z="radial-gradient(0px 0px, cover, red 50%, blue 100%)",V="rgba",U="css.gradients",T='url("foo.png") 4 4 4 4 stretch',y="css.gradient.linear",B="css.userselect",C="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",E="mshtml",G="css.rgba",I="4 fill",N='WebKitCSSMatrix',R="none",u="css.placeholder",v="css.userselect.none",A="css.textoverflow",L="textOverflow",K="userModify",J="boxShadow",P="cssFloat",O="border";
qx.Bootstrap.define(m,{statics:{__db:null,getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==E||!qx.bom.client.Browser.getQuirksMode();
return content?bd:O;
},getTextOverflow:function(){return qx.bom.Style.getPropertyName(L);
},getPlaceholder:function(){var i=document.createElement(Y);
return w in i;
},getAppearance:function(){return qx.bom.Style.getPropertyName(n);
},getBorderRadius:function(){return qx.bom.Style.getPropertyName(bg);
},getBoxShadow:function(){return qx.bom.Style.getPropertyName(J);
},getBorderImage:function(){return qx.bom.Style.getPropertyName(X);
},getBorderImageSyntax:function(){var bj=qx.bom.client.Css.getBorderImage();

if(!bj){return null;
}var bi=[{standard:true,syntax:o,regEx:/foo\.png.*?4.*?fill.*?stretch/},{standard:false,syntax:T,regEx:/foo\.png.*?4 4 4 4 stretch/}];

for(var i=0,l=bi.length;i<l;i++){var bh=document.createElement(k);
bh.style[bj]=bi[i].syntax;

if(bi[i].regEx.exec(bh.style[bj])||bh.style.borderImageSlice&&bh.style.borderImageSlice==I){return bi[i].standard;
}}return null;
},getUserSelect:function(){return qx.bom.Style.getPropertyName(W);
},getUserSelectNone:function(){var bl=qx.bom.client.Css.getUserSelect();

if(bl){var bk=document.createElement(c);
bk.style[bl]=h;
return bk.style[bl]===h?h:R;
}return null;
},getUserModify:function(){return qx.bom.Style.getPropertyName(K);
},getFloat:function(){var bm=document.documentElement.style;
return bm.cssFloat!==undefined?P:bm.styleFloat!==undefined?t:null;
},getTranslate3d:function(){return N in window&&be in new WebKitCSSMatrix();
},getGradients:function(){return !!(qx.bom.client.Css.getLinearGradient());
},getLinearGradient:function(){qx.bom.client.Css.__db=false;
var bq=M;
var bn=document.createElement(k);
var bo=qx.bom.Style.getAppliedStyle(bn,g,bq);

if(!bo){bq=C;
var bo=qx.bom.Style.getAppliedStyle(bn,g,bq,false);

if(bo){qx.bom.client.Css.__db=true;
}}if(!bo){return null;
}var bp=/(.*?)\(/.exec(bo);
return bp?bp[1]:null;
},getRadialGradient:function(){var bu=z;
var br=document.createElement(k);
var bs=qx.bom.Style.getAppliedStyle(br,g,bu);

if(!bs){return null;
}var bt=/(.*?)\(/.exec(bs);
return bt?bt[1]:null;
},getLegacyWebkitGradient:function(){if(qx.bom.client.Css.__db===null){qx.bom.client.Css.getLinearGradient();
}return qx.bom.client.Css.__db;
},getRgba:function(){var bv;

try{bv=document.createElement(k);
}catch(bw){bv=document.createElement();
}try{bv.style[d]=Q;

if(bv.style[d].indexOf(V)!=-1){return true;
}}catch(bx){}return false;
},getBoxSizing:function(){return qx.bom.Style.getPropertyName(bf);
},getInlineBlock:function(){var by=document.createElement(c);
by.style.display=f;

if(by.style.display==f){return f;
}by.style.display=e;

if(by.style.display!==e){return e;
}return null;
},getOpacity:function(){return (typeof document.documentElement.style.opacity==j);
},getOverflowXY:function(){return (typeof document.documentElement.style.overflowX==j)&&(typeof document.documentElement.style.overflowY==j);
}},defer:function(bz){qx.core.Environment.add(A,bz.getTextOverflow);
qx.core.Environment.add(u,bz.getPlaceholder);
qx.core.Environment.add(D,bz.getBorderRadius);
qx.core.Environment.add(x,bz.getBoxShadow);
qx.core.Environment.add(U,bz.getGradients);
qx.core.Environment.add(y,bz.getLinearGradient);
qx.core.Environment.add(ba,bz.getRadialGradient);
qx.core.Environment.add(F,bz.getLegacyWebkitGradient);
qx.core.Environment.add(p,bz.getBoxModel);
qx.core.Environment.add(G,bz.getRgba);
qx.core.Environment.add(S,bz.getBorderImage);
qx.core.Environment.add(a,bz.getBorderImageSyntax);
qx.core.Environment.add(q,bz.getUserModify);
qx.core.Environment.add(B,bz.getUserSelect);
qx.core.Environment.add(v,bz.getUserSelectNone);
qx.core.Environment.add(bb,bz.getAppearance);
qx.core.Environment.add(b,bz.getFloat);
qx.core.Environment.add(r,bz.getBoxSizing);
qx.core.Environment.add(bc,bz.getInlineBlock);
qx.core.Environment.add(H,bz.getOpacity);
qx.core.Environment.add(s,bz.getOverflowXY);
}});
})();
(function(){var j="white",i="#5685D6",h="black",g="#6694E3",f="#EEE",e="gray",d="#D9D9D9",c="#1866B5",b="#24B",a="#FF0000",N="#CCCCCC",M="rgba(0, 0, 0, 0.4)",L="#FFFFE1",K="#B7B7B7",J="#BBBBBB",I="#9DCBFE",H="#A7A6AA",G="#EBEBEB",F="#666666",E="#CBC8CD",q="#F9F9F9",r="#F7F7F7",o="#808080",p="#686868",m="#888888",n="#E0ECFF",k="#2E3A46",l="css.rgba",s="#F5F5F5",t="#E3E3E3",w="#DDDDDD",v="#BBB",y="qx.theme.simple.Color",x="#F1F1F1",A="#939393",z="#BCBCBC",u="#134983",D="#E8F0E3",C="#FAFBFE",B="#AAAAAA";
qx.Theme.define(y,{colors:{"background":j,"dark-blue":i,"light-background":n,"background-selected":g,"background-selected-dark":i,"background-disabled":r,"background-disabled-checked":J,"background-pane":C,"tabview-unselected":c,"tabview-button-border":u,"tabview-label-active-disabled":d,"link":b,"scrollbar-bright":x,"scrollbar-dark":G,"button":D,"button-border":v,"button-border-hovered":A,"invalid":a,"button-box-bright":q,"button-box-dark":t,"button-box-bright-pressed":w,"button-box-dark-pressed":s,"border-lead":m,"window-border":k,"window-border-inner":I,"white-box-border":z,"shadow":qx.core.Environment.get(l)?M:F,"border-main":g,"border-light":K,"border-light-shadow":p,"border-separator":o,"text":h,"text-disabled":H,"text-selected":j,"text-placeholder":E,"tooltip":L,"tooltip-text":h,"table-header":[242,242,242],"table-focus-indicator":[179,217,255],"table-header-cell":[235,234,219],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":j,"table-row-background-odd":j,"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":f,"table-column-line":f,"progressive-table-header":B,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":N,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":j}});
})();
(function(){var b="Simple",a="qx.theme.Simple";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.simple.Color,decoration:qx.theme.simple.Decoration,font:qx.theme.simple.Font,appearance:qx.theme.simple.Appearance,icon:qx.theme.icon.Tango}});
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
qx.Class.define(e,{statics:{__df:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dg:function(i){var j=this.__df;
return j.tags[i.tagName.toLowerCase()]||j.types[i.type];
},compile:function(k){if(qx.core.Environment.get(h)){var l=qx.lang.String.hyphenate(qx.core.Environment.get(h));
return l+b+k+a;
}else{qx.log.Logger.warn(this,"This client does not support dynamic modification of the boxSizing property.");
qx.log.Logger.trace();
}},get:function(m){if(qx.core.Environment.get(h)){return qx.bom.element.Style.get(m,d,null,false)||g;
}
if(qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(m))){if(!this.__dg(m)){return c;
}}return f;
},set:function(n,o){if(qx.core.Environment.get(h)){try{n.style[qx.core.Environment.get(h)]=o;
}catch(p){qx.log.Logger.warn(this,"This client does not support the boxSizing value",o);
}}else{qx.log.Logger.warn(this,"This client does not support dynamic modification of the boxSizing property.");
}},reset:function(q){this.set(q,g);
}}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__mb:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__mc:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__mc[name];
s[t]();
}else{var u=this.__mb[name];
s[u](q);
}}}});
})();
(function(){var m="pane",k="lastTab",j="bar",h="page",g="firstTab",f="close",d="right",c="bottom",b="button",a="changeSelection",B="top",A="left",z="qx.event.type.Data",y="barRight",x="beforeChangeSelection",w="close-button",v="tabview",u="vertical",t="__qG",s="_applyBarPosition",q="barLeft",r="horizontal",o="qx.ui.tabview.TabView",p="barTop",n="barBottom";
qx.Class.define(o,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:[qx.ui.core.MContentPadding],construct:function(C){qx.ui.core.Widget.call(this);
this.__qF={top:p,right:y,bottom:n,left:q};
this._createChildControl(j);
this._createChildControl(m);
var D=this.__qG=new qx.ui.form.RadioGroup;
D.setWrap(false);
D.addListener(a,this._onChangeSelection,this);
if(C!=null){this.setBarPosition(C);
}else{this.initBarPosition();
}},events:{"changeSelection":z},properties:{appearance:{refine:true,init:v},barPosition:{check:[A,d,B,c],init:B,apply:s}},members:{__qG:null,_createChildControlImpl:function(E,F){var G;

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
this.__qG.add(I);
H.addState(this.__qF[this.getBarPosition()]);
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
this.__qG.add(O);
M.addState(this.__qF[this.getBarPosition()]);
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
this.__qG.remove(U);
S.removeState(this.__qF[this.getBarPosition()]);
if(S.hasState(g)){S.removeState(g);

if(W[0]){W[0].addState(g);
}}
if(S.hasState(k)){S.removeState(k);

if(W.length>0){W[W.length-1].addState(k);
}}S.removeListener(f,this._onPageClose,this);
},getChildren:function(){return this.getChildControl(m).getChildren();
},indexOf:function(Y){return this.getChildControl(m).indexOf(Y);
},__qF:null,_applyBarPosition:function(ba,bb){var bc=this.getChildControl(j);
var bh=ba==A||ba==d;
var bf=ba==d||ba==c;
var bg=bh?qx.ui.layout.HBox:qx.ui.layout.VBox;
var bj=this._getLayout();

if(bj&&bj instanceof bg){}else{this._setLayout(bj=new bg);
}bj.setReversed(bf);
bc.setOrientation(bh?u:r);
var bi=this.getChildren();
if(bb){var bd=this.__qF[bb];
bc.removeState(bd);
for(var i=0,l=bi.length;i<l;i++){bi[i].removeState(bd);
}}
if(ba){var be=this.__qF[ba];
bc.addState(be);
for(var i=0,l=bi.length;i<l;i++){bi[i].addState(be);
}}},getSelection:function(){var bk=this.__qG.getSelection();
var bl=[];

for(var i=0;i<bk.length;i++){bl.push(bk[i].getUserData(h));
}return bl;
},setSelection:function(bm){var bn=[];

for(var i=0;i<bm.length;i++){bn.push(bm[i].getChildControl(b));
}this.__qG.setSelection(bn);
},resetSelection:function(){this.__qG.resetSelection();
},isSelected:function(bo){var bp=bo.getChildControl(b);
return this.__qG.isSelected(bp);
},isSelectionEmpty:function(){return this.__qG.isSelectionEmpty();
},getSelectables:function(bq){var br=this.__qG.getSelectables(bq);
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
}},destruct:function(){this._disposeObjects(t);
this.__qF=null;
}});
})();
(function(){var k="currentTab",j="widgetbrowser.pages.Basic",i="widgetbrowser.pages.Tree",h="widgetbrowser.pages.Embed",g="widgetbrowser.pages.Form",f="Window",d="basic",c="widgetbrowser.view.TabView",b="widgetbrowser.pages.ToolBar",a="EmbedFrame",C="Misc",B="Toolbar/Menu",A="Control",z="Basic",y="Tab",x="Tree",w="widgetbrowser.pages.List",v="changeSelection",u="widgetbrowser.pages.Table",t="Table",r="widgetbrowser.pages.EmbedFrame",s="widgetbrowser.pages.Tab",p="Embed",q="widgetbrowser.pages.Misc",n="List",o="widgetbrowser.pages.Window",l="Form",m="widgetbrowser.pages.Control";
qx.Class.define(c,{extend:qx.ui.tabview.TabView,construct:function(){qx.ui.tabview.TabView.call(this);
this.init();
this.addListener(v,this.__Mv,this);
this.__Mw();
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
},__Mv:function(e){qx.bom.Cookie.set(k,e.getData()[0].getLabel());
},__Mw:function(){var R=qx.bom.Cookie.get(k)||qx.bom.Cookie.set(k,d);
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
(function(){var e="os.name",d="opera",c="engine.name",b="qx.event.type.Dom",a="osx";
qx.Class.define(b,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(f,g){var g=qx.event.type.Native.prototype._cloneNativeEvent.call(this,f,g);
g.shiftKey=f.shiftKey;
g.ctrlKey=f.ctrlKey;
g.altKey=f.altKey;
g.metaKey=f.metaKey;
return g;
},getModifiers:function(){var i=0;
var h=this._native;

if(h.shiftKey){i|=qx.event.type.Dom.SHIFT_MASK;
}
if(h.ctrlKey){i|=qx.event.type.Dom.CTRL_MASK;
}
if(h.altKey){i|=qx.event.type.Dom.ALT_MASK;
}
if(h.metaKey){i|=qx.event.type.Dom.META_MASK;
}return i;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(e)==a&&qx.core.Environment.get(c)!=d){return this._native.metaKey;
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
},__es:{0:j,2:i,1:h},__et:{1:j,2:i,4:h},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:return i;
case f:if(qx.core.Environment.get(b)===a&&qx.core.Environment.get(c)<9){return j;
}default:if(this._native.target!==undefined){return this.__es[this._native.button]||g;
}else{return this.__et[this._native.button]||g;
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
},__eu:function(m){var n=Math.abs(m);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>n){qx.event.type.MouseWheel.MINSCROLL=n;
this.__ev();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<n){qx.event.type.MouseWheel.MAXSCROLL=n;
this.__ev();
}if(qx.event.type.MouseWheel.MAXSCROLL===n&&qx.event.type.MouseWheel.MINSCROLL===n){return 2*(m/n);
}var o=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var p=(m/o)*Math.log(o)*qx.event.type.MouseWheel.FACTOR;
return p<0?Math.min(p,-1):Math.max(p,1);
},__ev:function(){var q=qx.event.type.MouseWheel.MAXSCROLL||0;
var t=qx.event.type.MouseWheel.MINSCROLL||q;

if(q<=t){return;
}var r=q-t;
var s=(q/r)*Math.log(r);

if(s==0){s=1;
}qx.event.type.MouseWheel.FACTOR=6/s;
},getWheelDelta:function(u){var e=this._native;
if(u===undefined){if(v===undefined){var v=-e.wheelDelta;

if(e.wheelDelta===undefined){v=e.detail;
}}return this.__ew(v);
}if(u===i){var x=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__ew(-e.wheelDeltaX):0;
}}else{if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__ew(e.detail);
}}return x;
}if(u===a){var y=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__ew(-e.wheelDeltaY):0;
}else{y=this.__ew(-e.wheelDelta);
}}else{if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__ew(e.detail);
}}return y;
}return 0;
},__ew:function(w){if(qx.core.Environment.get(f)){return this.__eu(w);
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
(function(){var o="one",n="single",m="selected",k="additive",j="multi",h="os.name",g="osx",f="under",d="PageUp",c="Left",O="lead",N="Down",M="Up",L="Boolean",K="PageDown",J="anchor",I="End",H="Home",G="Right",F="right",v="click",w="above",t="left",u="Escape",r="A",s="Space",p="__kH",q="_applyMode",x="interval",y="changeSelection",A="qx.event.type.Data",z="quick",C="key",B="abstract",E="drag",D="qx.ui.core.selection.Abstract";
qx.Class.define(D,{type:B,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__dz={};
},events:{"changeSelection":A},properties:{mode:{check:[n,j,k,o],init:n,apply:q},drag:{check:L,init:false},quick:{check:L,init:false}},members:{__kF:0,__kG:0,__kH:null,__kI:null,__kJ:null,__kK:null,__kL:null,__kM:null,__kN:null,__kO:null,__kP:null,__kQ:null,__kR:null,__kS:null,__kT:null,__kU:null,__kV:null,__dz:null,__kW:null,__kX:null,_userInteraction:false,__kY:null,getSelectionContext:function(){return this.__kU;
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
},getSelection:function(){return qx.lang.Object.getValues(this.__dz);
},getSortedSelection:function(){var bg=this.getSelectables();
var bf=qx.lang.Object.getValues(this.__dz);
bf.sort(function(a,b){return bg.indexOf(a)-bg.indexOf(b);
});
return bf;
},isItemSelected:function(bh){var bi=this._selectableToHashCode(bh);
return this.__dz[bi]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__dz);
},invertSelection:function(){var bk=this.getMode();

if(bk===n||bk===o){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bj=this.getSelectables();

for(var i=0;i<bj.length;i++){this._toggleInSelection(bj[i]);
}this._fireChange();
},_setLeadItem:function(bl){var bm=this.__kV;

if(bm!==null){this._styleSelectable(bm,O,false);
}
if(bl!==null){this._styleSelectable(bl,O,true);
}this.__kV=bl;
},getLeadItem:function(){return this.__kV!==null?this.__kV:null;
},_setAnchorItem:function(bn){var bo=this.__kW;

if(bo!=null){this._styleSelectable(bo,J,false);
}
if(bn!=null){this._styleSelectable(bn,J,true);
}this.__kW=bn;
},_getAnchorItem:function(){return this.__kW!==null?this.__kW:null;
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
},handleMouseOver:function(event){if(this.__kY!=null&&this.__kY!=this._getScroll().top){this.__kY=null;
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
this._fireChange(z);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var bM=this._getSelectableFromMouseEvent(event);

if(bM===null){this._userInteraction=false;
return;
}var bO=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var bL=event.isShiftPressed();
if(this.isItemSelected(bM)&&!bL&&!bO&&!this.getDrag()){this.__kX=bM;
this._userInteraction=false;
return;
}else{this.__kX=null;
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

if(this.getDrag()&&bP!==n&&bP!==o&&!bL&&!bO){this.__kL=this._getLocation();
this.__kI=this._getScroll();
this.__kM=event.getDocumentLeft()+this.__kI.left;
this.__kN=event.getDocumentTop()+this.__kI.top;
this.__kO=true;
this._capture();
}this._fireChange(v);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var bT=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var bQ=event.isShiftPressed();

if(!bT&&!bQ&&this.__kX!=null){var bR=this._getSelectableFromMouseEvent(event);

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
},handleMouseMove:function(event){if(!this.__kO){return;
}this.__kP=event.getDocumentLeft();
this.__kQ=event.getDocumentTop();
this._userInteraction=true;
var bV=this.__kP+this.__kI.left;

if(bV>this.__kM){this.__kR=1;
}else if(bV<this.__kM){this.__kR=-1;
}else{this.__kR=0;
}var bU=this.__kQ+this.__kI.top;

if(bU>this.__kN){this.__kS=1;
}else if(bU<this.__kN){this.__kS=-1;
}else{this.__kS=0;
}var location=this.__kL;

if(this.__kP<location.left){this.__kF=this.__kP-location.left;
}else if(this.__kP>location.right){this.__kF=this.__kP-location.right;
}else{this.__kF=0;
}
if(this.__kQ<location.top){this.__kG=this.__kQ-location.top;
}else if(this.__kQ>location.bottom){this.__kG=this.__kQ-location.bottom;
}else{this.__kG=0;
}if(!this.__kH){this.__kH=new qx.event.Timer(100);
this.__kH.addListener(x,this._onInterval,this);
}this.__kH.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var bW=e.getData();

if(this.getMode()===o&&this.isSelectionEmpty()){this.addItem(bW);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__kO){return;
}if(this.__kT){this._fireChange(v);
}delete this.__kO;
delete this.__kJ;
delete this.__kK;
this._releaseCapture();
if(this.__kH){this.__kH.stop();
}},_onInterval:function(e){this._scrollBy(this.__kF,this.__kG);
this.__kI=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cg=this._getDimension();
var bY=Math.max(0,Math.min(this.__kP-this.__kL.left,cg.width))+this.__kI.left;
var bX=Math.max(0,Math.min(this.__kQ-this.__kL.top,cg.height))+this.__kI.top;
if(this.__kJ===bY&&this.__kK===bX){return;
}this.__kJ=bY;
this.__kK=bX;
var ci=this._getAnchorItem();
var cb=ci;
var ce=this.__kR;
var ch,ca;

while(ce!==0){ch=ce>0?this._getRelatedSelectable(cb,F):this._getRelatedSelectable(cb,t);
if(ch!==null){ca=this._getSelectableLocationX(ch);
if((ce>0&&ca.left<=bY)||(ce<0&&ca.right>=bY)){cb=ch;
continue;
}}break;
}var cf=this.__kS;
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
},__la:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
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
}}else if(this.__la[cr]){cn=true;

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
}this.__kY=this._getScroll().top;
this._scrollItemIntoView(co);
}}
if(cn){event.stop();
this._fireChange(C);
}this._userInteraction=false;
},_selectAllItems:function(){var ct=this.getSelectables();

for(var i=0,l=ct.length;i<l;i++){this._addToSelection(ct[i]);
}},_clearSelection:function(){var cu=this.__dz;

for(var cv in cu){this._removeFromSelection(cu[cv]);
}this.__dz={};
},_selectItemRange:function(cw,cx,cy){var cB=this._getSelectableRange(cw,cx);
if(!cy){var cA=this.__dz;
var cC=this.__lb(cB);

for(var cz in cA){if(!cC[cz]){this._removeFromSelection(cA[cz]);
}}}for(var i=0,l=cB.length;i<l;i++){this._addToSelection(cB[i]);
}},_deselectItemRange:function(cD,cE){var cF=this._getSelectableRange(cD,cE);

for(var i=0,l=cF.length;i<l;i++){this._removeFromSelection(cF[i]);
}},__lb:function(cG){var cI={};
var cH;

for(var i=0,l=cG.length;i<l;i++){cH=cG[i];
cI[this._selectableToHashCode(cH)]=cH;
}return cI;
},_getSelectedItem:function(){for(var cJ in this.__dz){return this.__dz[cJ];
}return null;
},_setSelectedItem:function(cK){if(this._isSelectable(cK)){var cL=this.__dz;
var cM=this._selectableToHashCode(cK);

if(!cL[cM]||qx.lang.Object.hasMinLength(cL,2)){this._clearSelection();
this._addToSelection(cK);
}}},_addToSelection:function(cN){var cO=this._selectableToHashCode(cN);

if(this.__dz[cO]==null&&this._isSelectable(cN)){this.__dz[cO]=cN;
this._styleSelectable(cN,m,true);
this.__kT=true;
}},_toggleInSelection:function(cP){var cQ=this._selectableToHashCode(cP);

if(this.__dz[cQ]==null){this.__dz[cQ]=cP;
this._styleSelectable(cP,m,true);
}else{delete this.__dz[cQ];
this._styleSelectable(cP,m,false);
}this.__kT=true;
},_removeFromSelection:function(cR){var cS=this._selectableToHashCode(cR);

if(this.__dz[cS]!=null){delete this.__dz[cS];
this._styleSelectable(cR,m,false);
this.__kT=true;
}},_replaceMultiSelection:function(cT){var cW=false;
var da,cY;
var cU={};

for(var i=0,l=cT.length;i<l;i++){da=cT[i];

if(this._isSelectable(da)){cY=this._selectableToHashCode(da);
cU[cY]=da;
}}var db=cT[0];
var cV=da;
var cX=this.__dz;

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
this.__kT=true;
this._fireChange();
},_fireChange:function(dc){if(this.__kT){this.__kU=dc||null;
this.fireDataEvent(y,this.getSelection());
delete this.__kT;
}},_applyDefaultSelection:function(dd){if(dd===true||this.getMode()===o&&this.isSelectionEmpty()){var de=this._getFirstSelectable();

if(de!=null){this.selectItem(de);
}return de;
}return null;
}},destruct:function(){this._disposeObjects(p);
this.__dz=this.__kX=this.__kW=null;
this.__kV=null;
}});
})();
(function(){var f="vertical",e="under",d="above",c="qx.ui.core.selection.Widget",b="left",a="right";
qx.Class.define(c,{extend:qx.ui.core.selection.Abstract,construct:function(g){qx.ui.core.selection.Abstract.call(this);
this.__kd=g;
},members:{__kd:null,_isSelectable:function(h){return this._isItemSelectable(h)&&h.getLayoutParent()===this.__kd;
},_selectableToHashCode:function(j){return j.$$hash;
},_styleSelectable:function(k,m,n){n?k.addState(m):k.removeState(m);
},_capture:function(){this.__kd.capture();
},_releaseCapture:function(){this.__kd.releaseCapture();
},_isItemSelectable:function(o){if(this._userInteraction){return o.isVisible()&&o.isEnabled();
}else{return o.isVisible();
}},_getWidget:function(){return this.__kd;
},_getLocation:function(){var p=this.__kd.getContentElement().getDomElement();
return p?qx.bom.element.Location.get(p):null;
},_getDimension:function(){return this.__kd.getInnerSize();
},_getSelectableLocationX:function(q){var r=q.getBounds();

if(r){return {left:r.left,right:r.left+r.width};
}},_getSelectableLocationY:function(s){var t=s.getBounds();

if(t){return {top:t.top,bottom:t.top+t.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(u,v){},_scrollItemIntoView:function(w){this.__kd.scrollChildIntoView(w);
},getSelectables:function(x){var y=false;

if(!x){y=this._userInteraction;
this._userInteraction=true;
}var B=this.__kd.getChildren();
var z=[];
var A;

for(var i=0,l=B.length;i<l;i++){A=B[i];

if(this._isItemSelectable(A)){z.push(A);
}}this._userInteraction=y;
return z;
},_getSelectableRange:function(C,D){if(C===D){return [C];
}var H=this.__kd.getChildren();
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
},_getFirstSelectable:function(){var I=this.__kd.getChildren();

for(var i=0,l=I.length;i<l;i++){if(this._isItemSelectable(I[i])){return I[i];
}}return null;
},_getLastSelectable:function(){var J=this.__kd.getChildren();

for(var i=J.length-1;i>0;i--){if(this._isItemSelectable(J[i])){return J[i];
}}return null;
},_getRelatedSelectable:function(K,L){var O=this.__kd.getOrientation()===f;
var N=this.__kd.getChildren();
var M=N.indexOf(K);
var P;

if((O&&L===d)||(!O&&L===b)){for(var i=M-1;i>=0;i--){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}else if((O&&L===e)||(!O&&L===a)){for(var i=M+1;i<N.length;i++){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}return null;
},_getPage:function(Q,R){if(R){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__kd=null;
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
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b="direct",a='__iu';
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__iu=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__iv:null,compute:function(p,q,r,s,t,u,v){this.__iv=this.__iv||new qx.util.placement.Placement();
var y=t.split(f);
var x=y[0];
var w=y[1];
this.__iv.set({axisX:this.__iz(u),axisY:this.__iz(v),edge:x,align:w});
return this.__iv.compute(p,q,r,s);
},__iw:null,__ix:null,__iy:null,__iz:function(z){switch(z){case b:this.__iw=this.__iw||new qx.util.placement.DirectAxis();
return this.__iw;
case d:this.__ix=this.__ix||new qx.util.placement.KeepAlignAxis();
return this.__ix;
case c:this.__iy=this.__iy||new qx.util.placement.BestFitAxis();
return this.__iy;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__iu:null,compute:function(A,B,C,D){var E=this.getAxisX()||this.__iu;
var G=E.computeStart(A.width,{start:C.left,end:C.right},{start:D.left,end:D.right},B.width,this.__iA());
var F=this.getAxisY()||this.__iu;
var top=F.computeStart(A.height,{start:C.top,end:C.bottom},{start:D.top,end:D.bottom},B.height,this.__iB());
return {left:G,top:top};
},__iA:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==l){return i;
}else if(I==n){return g;
}else if(H==l){return k;
}else if(H==n){return h;
}},__iB:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var j="[",h="]",g="idBubble-",f=".",d="changeBubble",c="qx.data.marshal.MEventBubbling",b="",a="qx.event.type.Data";
qx.Mixin.define(c,{events:{"changeBubble":a},members:{_applyEventPropagation:function(k,l,name){this.fireDataEvent(d,{value:k,name:name,old:l});
this._registerEventChaining(k,l,name);
},_registerEventChaining:function(m,n,name){if((m instanceof qx.core.Object)&&qx.Class.hasMixin(m.constructor,qx.data.marshal.MEventBubbling)){var o=qx.lang.Function.bind(this.__lI,this,name);
var q=m.addListener(d,o,this);
var p=m.getUserData(g+this.$$hash);

if(p==null){p=[];
m.setUserData(g+this.$$hash,p);
}p.push(q);
}if(n!=null&&n.getUserData&&n.getUserData(g+this.$$hash)!=null){var p=n.getUserData(g+this.$$hash);

for(var i=0;i<p.length;i++){n.removeListenerById(p[i]);
}n.setUserData(g+this.$$hash,null);
}},__lI:function(name,e){var y=e.getData();
var u=y.value;
var s=y.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(y.name.indexOf){var x=y.name.indexOf(f)!=-1?y.name.indexOf(f):y.name.length;
var v=y.name.indexOf(j)!=-1?y.name.indexOf(j):y.name.length;
if(v==0){var t=name+y.name;
}else if(x<v){var r=y.name.substring(0,x);
var w=y.name.substring(x+1,y.name.length);

if(w[0]!=j){w=f+w;
}var t=name+j+r+h+w;
}else if(v<x){var r=y.name.substring(0,v);
var w=y.name.substring(v,y.name.length);
var t=name+j+r+h+w;
}else{var t=name+j+y.name+h;
}}else{var t=name+j+y.name+h;
}}else{if(parseInt(name)==name&&name!==b){name=j+name+h;
}var t=name+f+y.name;
}this.fireDataEvent(d,{value:u,name:t,old:s});
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var o="change",n="changeBubble",m="add",l="remove",k="0-",j="order",h="-",g="0",f="qx.event.type.Data",e="Boolean",b="",d="qx.data.Array",c="number",a="changeLength";
qx.Class.define(d,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(p){qx.core.Object.call(this);
if(p==undefined){this.__lJ=[];
}else if(arguments.length>1){this.__lJ=[];

for(var i=0;i<arguments.length;i++){this.__lJ.push(arguments[i]);
}}else if(typeof p==c){this.__lJ=new Array(p);
}else if(p instanceof Array){this.__lJ=qx.lang.Array.clone(p);
}else{this.__lJ=[];
this.dispose();
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__lJ.length;i++){this._applyEventPropagation(this.__lJ[i],null,i);
}this.__lK();
},properties:{autoDisposeItems:{check:e,init:false}},events:{"change":f,"changeLength":f},members:{__lJ:null,concat:function(q){if(q){var r=this.__lJ.concat(q);
}else{var r=this.__lJ.concat();
}return new qx.data.Array(r);
},join:function(s){return this.__lJ.join(s);
},pop:function(){var t=this.__lJ.pop();
this.__lK();
this._registerEventChaining(null,t,this.length-1);
this.fireDataEvent(n,{value:[],name:this.length,old:[t]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:l,items:[t]},null);
return t;
},push:function(u){for(var i=0;i<arguments.length;i++){this.__lJ.push(arguments[i]);
this.__lK();
this._registerEventChaining(arguments[i],null,this.length-1);
this.fireDataEvent(n,{value:[arguments[i]],name:this.length-1,old:[]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){if(this.length==0){return;
}var v=this.__lJ.concat();
this.__lJ.reverse();
this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__lJ,name:k+(this.__lJ.length-1),old:v});
},shift:function(){if(this.length==0){return;
}var w=this.__lJ.shift();
this.__lK();
this._registerEventChaining(null,w,this.length-1);
this.fireDataEvent(n,{value:[],name:g,old:[w]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:l,items:[w]},null);
return w;
},slice:function(x,y){return new qx.data.Array(this.__lJ.slice(x,y));
},splice:function(z,A,B){var J=this.__lJ.length;
var F=this.__lJ.splice.apply(this.__lJ,arguments);
if(this.__lJ.length!=J){this.__lK();
}var H=A>0;
var D=arguments.length>2;
var E=null;

if(H||D){if(this.__lJ.length>J){var I=m;
E=qx.lang.Array.fromArguments(arguments,2);
}else if(this.__lJ.length<J){var I=l;
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
}var L=this.__lJ.concat();
this.__lJ.sort.apply(this.__lJ,arguments);
if(qx.lang.Array.equals(this.__lJ,L)===true){return;
}this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__lJ,name:k+(this.length-1),old:L});
},unshift:function(M){for(var i=arguments.length-1;i>=0;i--){this.__lJ.unshift(arguments[i]);
this.__lK();
this._registerEventChaining(arguments[i],null,0);
this.fireDataEvent(n,{value:[this.__lJ[0]],name:g,old:[this.__lJ[1]]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__lJ;
},getItem:function(N){return this.__lJ[N];
},setItem:function(O,P){var Q=this.__lJ[O];
if(Q===P){return;
}this.__lJ[O]=P;
this._registerEventChaining(P,Q,O);
if(this.length!=this.__lJ.length){this.__lK();
}this.fireDataEvent(n,{value:[P],name:O,old:[Q]});
this.fireDataEvent(o,{start:O,end:O,type:m,items:[P]},null);
},getLength:function(){return this.length;
},indexOf:function(R){return this.__lJ.indexOf(R);
},toString:function(){if(this.__lJ!=null){return this.__lJ.toString();
}return b;
},contains:function(S){return this.__lJ.indexOf(S)!==-1;
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
},removeAll:function(){for(var i=0;i<this.__lJ.length;i++){this._registerEventChaining(null,this.__lJ[i],i);
}if(this.getLength()==0){return;
}var bg=this.getLength();
var bf=this.__lJ.concat();
this.__lJ.length=0;
this.__lK();
this.fireDataEvent(n,{value:[],name:k+(bg-1),old:bf});
this.fireDataEvent(o,{start:0,end:bg-1,type:l,items:bf},null);
return bf;
},append:function(bh){if(bh instanceof qx.data.Array){bh=bh.toArray();
}Array.prototype.push.apply(this.__lJ,bh);
for(var i=0;i<bh.length;i++){this._registerEventChaining(bh[i],null,this.__lJ.length+i);
}var bi=this.length;
this.__lK();
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
},forEach:function(bp,bq){for(var i=0;i<this.__lJ.length;i++){bp.call(bq,this.__lJ[i],i,this);
}},__lK:function(){var br=this.length;
this.length=this.__lJ.length;
this.fireDataEvent(a,this.length,br);
}},destruct:function(){for(var i=0;i<this.__lJ.length;i++){var bs=this.__lJ[i];
this._applyEventPropagation(null,bs,i);
if(this.isAutoDisposeItems()&&bs&&bs instanceof qx.core.Object){bs.dispose();
}}this.__lJ=null;
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
e.offsetX=d.offsetX;
e.offsetY=d.offsetY;
e.layerX=(d.offsetX||d.layerX);
e.layerY=(d.offsetY||d.layerY);
e.scale=d.scale;
e.rotation=d.rotation;
e.srcElement=d.srcElement;
e.targetTouches=[];

for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];
}e.changedTouches=[];

for(i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];
}e.touches=[];

for(i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];
}return e;
},stop:function(){this.stopPropagation();
},getAllTouches:function(){return this._native.touches;
},getTargetTouches:function(){return this._native.targetTouches;
},getChangedTargetTouches:function(){return this._native.changedTouches;
},isMultiTouch:function(){return this.__fF().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__fE(f).pageX;
},getDocumentTop:function(g){return this.__fE(g).pageY;
},getScreenLeft:function(h){return this.__fE(h).screenX;
},getScreenTop:function(j){return this.__fE(j).screenY;
},getViewportLeft:function(k){return this.__fE(k).clientX;
},getViewportTop:function(l){return this.__fE(l).clientY;
},getIdentifier:function(m){return this.__fE(m).identifier;
},__fE:function(n){n=n==null?0:n;
return this.__fF()[n];
},__fF:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
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
(function(){var a="qx.theme.simple.Image";
qx.Class.define(a,{extend:qx.core.Object,statics:{URLS:{"blank":"qx/static/blank.gif","checkbox-checked":"decoration/checkbox/checked.png","checkbox-undetermined":"decoration/checkbox/undetermined.png","window-minimize":"decoration/window/minimize.gif","window-maximize":"decoration/window/maximize.gif","window-restore":"decoration/window/restore.gif","window-close":"decoration/window/close.gif","cursor-copy":"decoration/cursors/copy.gif","cursor-move":"decoration/cursors/move.gif","cursor-alias":"decoration/cursors/alias.gif","cursor-nodrop":"decoration/cursors/nodrop.gif","arrow-right":"decoration/arrows/right.gif","arrow-left":"decoration/arrows/left.gif","arrow-up":"decoration/arrows/up.gif","arrow-down":"decoration/arrows/down.gif","arrow-forward":"decoration/arrows/forward.gif","arrow-rewind":"decoration/arrows/rewind.gif","arrow-down-small":"decoration/arrows/down-small.gif","arrow-up-small":"decoration/arrows/up-small.gif","arrow-up-invert":"decoration/arrows/up-invert.gif","arrow-down-invert":"decoration/arrows/down-invert.gif","arrow-right-invert":"decoration/arrows/right-invert.gif","knob-horizontal":"decoration/splitpane/knob-horizontal.png","knob-vertical":"decoration/splitpane/knob-vertical.png","tree-minus":"decoration/tree/minus.gif","tree-plus":"decoration/tree/plus.gif","select-column-order":"decoration/table/select-column-order.png","table-ascending":"decoration/table/ascending.png","table-descending":"decoration/table/descending.png","treevirtual-line":"decoration/treevirtual/line.gif","treevirtual-minus-only":"decoration/treevirtual/only_minus.gif","treevirtual-plus-only":"decoration/treevirtual/only_plus.gif","treevirtual-minus-start":"decoration/treevirtual/start_minus.gif","treevirtual-plus-start":"decoration/treevirtual/start_plus.gif","treevirtual-minus-end":"decoration/treevirtual/end_minus.gif","treevirtual-plus-end":"decoration/treevirtual/end_plus.gif","treevirtual-minus-cross":"decoration/treevirtual/cross_minus.gif","treevirtual-plus-cross":"decoration/treevirtual/cross_plus.gif","treevirtual-end":"decoration/treevirtual/end.gif","treevirtual-cross":"decoration/treevirtual/cross.gif","menu-checkbox":"decoration/menu/checkbox.gif","menu-checkbox-invert":"decoration/menu/checkbox-invert.gif","menu-radiobutton-invert":"decoration/menu/radiobutton-invert.gif","menu-radiobutton":"decoration/menu/radiobutton.gif","tabview-close":"decoration/tabview/close.gif"}}});
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
},toUriParameter:function(K,L){var O,M=[];

for(O in K){if(K.hasOwnProperty(O)){var N=K[O];

if(N instanceof Array){for(var i=0;i<N.length;i++){this.__da(O,N[i],M,L);
}}else{this.__da(O,N,M,L);
}}}return M.join(b);
},__da:function(P,Q,R,S){var T=window.encodeURIComponent;

if(S){R.push(T(P).replace(/%20/g,c)+d+T(Q).replace(/%20/g,c));
}else{R.push(T(P)+d+T(Q));
}}}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__dp={};
this.__dq=qx.lang.Function.bind(this.__du,this);
this.__dr=false;
},members:{__ds:null,__dt:null,__dp:null,__dr:null,__dq:null,schedule:function(c){if(this.__ds==null){this.__ds=window.setTimeout(this.__dq,0);
}var d=c.toHashCode();
if(this.__dt&&this.__dt[d]){return;
}this.__dp[d]=c;
this.__dr=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__dt&&this.__dt[f]){this.__dt[f]=null;
return;
}delete this.__dp[f];
if(qx.lang.Object.isEmpty(this.__dp)&&this.__ds!=null){window.clearTimeout(this.__ds);
this.__ds=null;
}},__du:qx.event.GlobalError.observeMethod(function(){this.__ds=null;
while(this.__dr){this.__dt=qx.lang.Object.clone(this.__dp);
this.__dp={};
this.__dr=false;

for(var h in this.__dt){var g=this.__dt[h];

if(g){this.__dt[h]=null;
g.call();
}}}this.__dt=null;
})},destruct:function(){if(this.__ds!=null){window.clearTimeout(this.__ds);
}this.__dq=this.__dp=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){qx.core.Object.call(this);
this.__bD=b;
this.__bE=c||null;
this.__dv=qx.util.DeferredCallManager.getInstance();
},members:{__bD:null,__bE:null,__dv:null,cancel:function(){this.__dv.cancel(this);
},schedule:function(){this.__dv.schedule(this);
},call:function(){var d;
this.__bE?this.__bD.apply(this.__bE):this.__bD();
}},destruct:function(){this.cancel();
this.__bE=this.__bD=this.__dv=null;
}});
})();
(function(){var m="element",k="div",j="",h="mshtml",g="engine.name",f="scroll",d="text",c="qx.html.Element",b="|capture|",a="activate",F="blur",E="deactivate",D="css.userselect",C="capture",B="visible",A="releaseCapture",z="|bubble|",w="qxSelectable",v="tabIndex",u="off",s="__dS",t="qx.html.Iframe",q="focus",r="none",o="css.userselect.none",p="hidden",n="on";
qx.Class.define(c,{extend:qx.core.Object,construct:function(G,H,I){qx.core.Object.call(this);
this.__dw=G||k;
this.__dx=H||null;
this.__dy=I||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__dz:{},_scheduleFlush:function(J){qx.html.Element.__ee.schedule();
},flush:function(){var U;
var M=this.__dA();
var L=M.getFocus();

if(L&&this.__dE(L)){M.blur(L);
}var bc=M.getActive();

if(bc&&this.__dE(bc)){qx.bom.Element.deactivate(bc);
}var P=this.__dC();

if(P&&this.__dE(P)){qx.bom.Element.releaseCapture(P);
}var V=[];
var W=this._modified;

for(var T in W){U=W[T];
if(U.__dW()||U.classname==t){if(U.__dF&&qx.dom.Hierarchy.isRendered(U.__dF)){V.push(U);
}else{U.__dV();
}delete W[T];
}}
for(var i=0,l=V.length;i<l;i++){U=V[i];
U.__dV();
}var R=this._visibility;

for(var T in R){U=R[T];
var X=U.__dF;

if(!X){delete R[T];
continue;
}if(!U.$$disposed){X.style.display=U.__dI?j:r;
if((qx.core.Environment.get(g)==h)){if(!(document.documentMode>=8)){X.style.visibility=U.__dI?B:p;
}}}delete R[T];
}var scroll=this._scroll;

for(var T in scroll){U=scroll[T];
var bd=U.__dF;

if(bd&&bd.offsetWidth){var O=true;
if(U.__dL!=null){U.__dF.scrollLeft=U.__dL;
delete U.__dL;
}if(U.__dM!=null){U.__dF.scrollTop=U.__dM;
delete U.__dM;
}var Y=U.__dJ;

if(Y!=null){var S=Y.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewX(S,bd,Y.align);
delete U.__dJ;
}else{O=false;
}}var ba=U.__dK;

if(ba!=null){var S=ba.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewY(S,bd,ba.align);
delete U.__dK;
}else{O=false;
}}if(O){delete scroll[T];
}}}var N={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bb=this._actions[i];
var X=bb.element.__dF;

if(!X||!N[bb.type]&&!bb.element.__dW()){continue;
}var Q=bb.args;
Q.unshift(X);
qx.bom.Element[bb.type].apply(qx.bom.Element,Q);
}this._actions=[];
for(var T in this.__dz){var K=this.__dz[T];
var bd=K.element.__dF;

if(bd){qx.bom.Selection.set(bd,K.start,K.end);
delete this.__dz[T];
}}qx.event.handler.Appear.refresh();
},__dA:function(){if(!this.__dB){var be=qx.event.Registration.getManager(window);
this.__dB=be.getHandler(qx.event.handler.Focus);
}return this.__dB;
},__dC:function(){if(!this.__dD){var bf=qx.event.Registration.getManager(window);
this.__dD=bf.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__dD.getCaptureElement();
},__dE:function(bg){var bh=qx.core.ObjectRegistry.fromHashCode(bg.$$element);
return bh&&!bh.__dW();
}},members:{__dw:null,__dF:null,__dG:false,__dH:true,__dI:true,__dJ:null,__dK:null,__dL:null,__dM:null,__dN:null,__dO:null,__dP:null,__dx:null,__dy:null,__dQ:null,__dR:null,__dS:null,__dT:null,__dU:null,_scheduleChildrenUpdate:function(){if(this.__dT){return;
}this.__dT=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__dw);
},__dV:function(){var length;
var bi=this.__dS;

if(bi){length=bi.length;
var bj;

for(var i=0;i<length;i++){bj=bi[i];

if(bj.__dI&&bj.__dH&&!bj.__dF){bj.__dV();
}}}
if(!this.__dF){this.__dF=this._createDomElement();
this.__dF.$$element=this.$$hash;
this._copyData(false);

if(bi&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__dT){this._syncChildren();
}}delete this.__dT;
},_insertChildren:function(){var bk=this.__dS;
var length=bk.length;
var bm;

if(length>2){var bl=document.createDocumentFragment();

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__dF&&bm.__dH){bl.appendChild(bm.__dF);
}}this.__dF.appendChild(bl);
}else{var bl=this.__dF;

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__dF&&bm.__dH){bl.appendChild(bm.__dF);
}}}},_syncChildren:function(){var br;
var bw=qx.core.ObjectRegistry;
var bn=this.__dS;
var bu=bn.length;
var bo;
var bs;
var bq=this.__dF;
var bt=bq.childNodes;
var bp=0;
var bv;
for(var i=bt.length-1;i>=0;i--){bv=bt[i];
bs=bw.fromHashCode(bv.$$element);

if(!bs||!bs.__dH||bs.__dU!==this){bq.removeChild(bv);
}}for(var i=0;i<bu;i++){bo=bn[i];
if(bo.__dH){bs=bo.__dF;
bv=bt[bp];

if(!bs){continue;
}if(bs!=bv){if(bv){bq.insertBefore(bs,bv);
}else{bq.appendChild(bs);
}}bp++;
}}},_copyData:function(bx){var bB=this.__dF;
var bA=this.__dy;

if(bA){var by=qx.bom.element.Attribute;

for(var bC in bA){by.set(bB,bC,bA[bC]);
}}var bA=this.__dx;

if(bA){var bz=qx.bom.element.Style;

if(bx){bz.setStyles(bB,bA);
}else{bz.setCss(bB,bz.compile(bA));
}}var bA=this.__dQ;

if(bA){for(var bC in bA){this._applyProperty(bC,bA[bC]);
}}var bA=this.__dR;

if(bA){qx.event.Registration.getManager(bB).importListeners(bB,bA);
delete this.__dR;
}},_syncData:function(){var bH=this.__dF;
var bG=qx.bom.element.Attribute;
var bE=qx.bom.element.Style;
var bF=this.__dO;

if(bF){var bK=this.__dy;

if(bK){var bI;

for(var bJ in bF){bI=bK[bJ];

if(bI!==undefined){bG.set(bH,bJ,bI);
}else{bG.reset(bH,bJ);
}}}this.__dO=null;
}var bF=this.__dN;

if(bF){var bK=this.__dx;

if(bK){var bD={};

for(var bJ in bF){bD[bJ]=bK[bJ];
}bE.setStyles(bH,bD);
}this.__dN=null;
}var bF=this.__dP;

if(bF){var bK=this.__dQ;

if(bK){var bI;

for(var bJ in bF){this._applyProperty(bJ,bK[bJ]);
}}this.__dP=null;
}},__dW:function(){var bL=this;
while(bL){if(bL.__dG){return true;
}
if(!bL.__dH||!bL.__dI){return false;
}bL=bL.__dU;
}return false;
},__dX:function(bM){if(bM.__dU===this){throw new Error("Child is already in: "+bM);
}
if(bM.__dG){throw new Error("Root elements could not be inserted into other ones.");
}if(bM.__dU){bM.__dU.remove(bM);
}bM.__dU=this;
if(!this.__dS){this.__dS=[];
}if(this.__dF){this._scheduleChildrenUpdate();
}},__dY:function(bN){if(bN.__dU!==this){throw new Error("Has no child: "+bN);
}if(this.__dF){this._scheduleChildrenUpdate();
}delete bN.__dU;
},__ea:function(bO){if(bO.__dU!==this){throw new Error("Has no child: "+bO);
}if(this.__dF){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__dS||null;
},getChild:function(bP){var bQ=this.__dS;
return bQ&&bQ[bP]||null;
},hasChildren:function(){var bR=this.__dS;
return bR&&bR[0]!==undefined;
},indexOf:function(bS){var bT=this.__dS;
return bT?bT.indexOf(bS):-1;
},hasChild:function(bU){var bV=this.__dS;
return bV&&bV.indexOf(bU)!==-1;
},add:function(bW){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dX(arguments[i]);
}this.__dS.push.apply(this.__dS,arguments);
}else{this.__dX(bW);
this.__dS.push(bW);
}return this;
},addAt:function(bX,bY){this.__dX(bX);
qx.lang.Array.insertAt(this.__dS,bX,bY);
return this;
},remove:function(ca){var cb=this.__dS;

if(!cb){return;
}
if(arguments[1]){var cc;

for(var i=0,l=arguments.length;i<l;i++){cc=arguments[i];
this.__dY(cc);
qx.lang.Array.remove(cb,cc);
}}else{this.__dY(ca);
qx.lang.Array.remove(cb,ca);
}return this;
},removeAt:function(cd){var ce=this.__dS;

if(!ce){throw new Error("Has no children!");
}var cf=ce[cd];

if(!cf){throw new Error("Has no child at this position!");
}this.__dY(cf);
qx.lang.Array.removeAt(this.__dS,cd);
return this;
},removeAll:function(){var cg=this.__dS;

if(cg){for(var i=0,l=cg.length;i<l;i++){this.__dY(cg[i]);
}cg.length=0;
}return this;
},getParent:function(){return this.__dU||null;
},insertInto:function(parent,ch){parent.__dX(this);

if(ch==null){parent.__dS.push(this);
}else{qx.lang.Array.insertAt(this.__dS,this,ch);
}return this;
},insertBefore:function(ci){var parent=ci.__dU;
parent.__dX(this);
qx.lang.Array.insertBefore(parent.__dS,this,ci);
return this;
},insertAfter:function(cj){var parent=cj.__dU;
parent.__dX(this);
qx.lang.Array.insertAfter(parent.__dS,this,cj);
return this;
},moveTo:function(ck){var parent=this.__dU;
parent.__ea(this);
var cl=parent.__dS.indexOf(this);

if(cl===ck){throw new Error("Could not move to same index!");
}else if(cl<ck){ck--;
}qx.lang.Array.removeAt(parent.__dS,cl);
qx.lang.Array.insertAt(parent.__dS,this,ck);
return this;
},moveBefore:function(cm){var parent=this.__dU;
return this.moveTo(parent.__dS.indexOf(cm));
},moveAfter:function(cn){var parent=this.__dU;
return this.moveTo(parent.__dS.indexOf(cn)+1);
},free:function(){var parent=this.__dU;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__dS){return;
}parent.__dY(this);
qx.lang.Array.remove(parent.__dS,this);
return this;
},getDomElement:function(){return this.__dF||null;
},getNodeName:function(){return this.__dw;
},setNodeName:function(name){this.__dw=name;
},setRoot:function(co){this.__dG=co;
},useMarkup:function(cp){if(this.__dF){throw new Error("Could not overwrite existing element!");
}if((qx.core.Environment.get(g)==h)){var cq=document.createElement(k);
}else{var cq=qx.bom.Element.getHelperElement();
}cq.innerHTML=cp;
this.useElement(cq.firstChild);
return this.__dF;
},useElement:function(cr){if(this.__dF){throw new Error("Could not overwrite existing element!");
}this.__dF=cr;
this.__dF.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var ct=this.getAttribute(v);

if(ct>=1){return true;
}var cs=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ct>=0&&cs[this.__dw]){return true;
}return false;
},setSelectable:function(cu){this.setAttribute(w,cu?n:u);
var cv=qx.core.Environment.get(D);

if(cv){this.setStyle(cv,cu?d:qx.core.Environment.get(o));
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__dw];
},include:function(){if(this.__dH){return;
}delete this.__dH;

if(this.__dU){this.__dU._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__dH){return;
}this.__dH=false;

if(this.__dU){this.__dU._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__dH===true;
},show:function(){if(this.__dI){return;
}
if(this.__dF){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}if(this.__dU){this.__dU._scheduleChildrenUpdate();
}delete this.__dI;
},hide:function(){if(!this.__dI){return;
}
if(this.__dF){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}this.__dI=false;
},isVisible:function(){return this.__dI===true;
},scrollChildIntoViewX:function(cw,cx,cy){var cz=this.__dF;
var cA=cw.getDomElement();

if(cy!==false&&cz&&cz.offsetWidth&&cA&&cA.offsetWidth){qx.bom.element.Scroll.intoViewX(cA,cz,cx);
}else{this.__dJ={element:cw,align:cx};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dL;
},scrollChildIntoViewY:function(cB,cC,cD){var cE=this.__dF;
var cF=cB.getDomElement();

if(cD!==false&&cE&&cE.offsetWidth&&cF&&cF.offsetWidth){qx.bom.element.Scroll.intoViewY(cF,cE,cC);
}else{this.__dK={element:cB,align:cC};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dM;
},scrollToX:function(x,cG){var cH=this.__dF;

if(cG!==true&&cH&&cH.offsetWidth){cH.scrollLeft=x;
delete this.__dL;
}else{this.__dL=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dJ;
},getScrollX:function(){var cI=this.__dF;

if(cI){return cI.scrollLeft;
}return this.__dL||0;
},scrollToY:function(y,cJ){var cK=this.__dF;

if(cJ!==true&&cK&&cK.offsetWidth){cK.scrollTop=y;
delete this.__dM;
}else{this.__dM=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dK;
},getScrollY:function(){var cL=this.__dF;

if(cL){return cL.scrollTop;
}return this.__dM||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(f,this.__ec,this);
},enableScrolling:function(){this.removeListener(f,this.__ec,this);
},__eb:null,__ec:function(e){if(!this.__eb){this.__eb=true;
this.__dF.scrollTop=0;
this.__dF.scrollLeft=0;
delete this.__eb;
}},getTextSelection:function(){var cM=this.__dF;

if(cM){return qx.bom.Selection.get(cM);
}return null;
},getTextSelectionLength:function(){var cN=this.__dF;

if(cN){return qx.bom.Selection.getLength(cN);
}return null;
},getTextSelectionStart:function(){var cO=this.__dF;

if(cO){return qx.bom.Selection.getStart(cO);
}return null;
},getTextSelectionEnd:function(){var cP=this.__dF;

if(cP){return qx.bom.Selection.getEnd(cP);
}return null;
},setTextSelection:function(cQ,cR){var cS=this.__dF;

if(cS){qx.bom.Selection.set(cS,cQ,cR);
return;
}qx.html.Element.__dz[this.toHashCode()]={element:this,start:cQ,end:cR};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var cT=this.__dF;

if(cT){qx.bom.Selection.clear(cT);
}delete qx.html.Element.__dz[this.toHashCode()];
},__ed:function(cU,cV){var cW=qx.html.Element._actions;
cW.push({type:cU,element:this,args:cV||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__ed(q);
},blur:function(){this.__ed(F);
},activate:function(){this.__ed(a);
},deactivate:function(){this.__ed(E);
},capture:function(cX){this.__ed(C,[cX!==false]);
},releaseCapture:function(){this.__ed(A);
},setStyle:function(cY,da,dc){if(!this.__dx){this.__dx={};
}
if(this.__dx[cY]==da){return;
}
if(da==null){delete this.__dx[cY];
}else{this.__dx[cY]=da;
}if(this.__dF){if(dc){qx.bom.element.Style.set(this.__dF,cY,da);
return this;
}if(!this.__dN){this.__dN={};
}this.__dN[cY]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(dd,de){var df=qx.bom.element.Style;

if(!this.__dx){this.__dx={};
}
if(this.__dF){if(!this.__dN){this.__dN={};
}
for(var dh in dd){var dg=dd[dh];

if(this.__dx[dh]==dg){continue;
}
if(dg==null){delete this.__dx[dh];
}else{this.__dx[dh]=dg;
}if(de){df.set(this.__dF,dh,dg);
continue;
}this.__dN[dh]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var dh in dd){var dg=dd[dh];

if(this.__dx[dh]==dg){continue;
}
if(dg==null){delete this.__dx[dh];
}else{this.__dx[dh]=dg;
}}}return this;
},removeStyle:function(di,dj){this.setStyle(di,null,dj);
},getStyle:function(dk){return this.__dx?this.__dx[dk]:null;
},getAllStyles:function(){return this.__dx||null;
},setAttribute:function(dl,dm,dn){if(!this.__dy){this.__dy={};
}
if(this.__dy[dl]==dm){return;
}
if(dm==null){delete this.__dy[dl];
}else{this.__dy[dl]=dm;
}if(this.__dF){if(dn){qx.bom.element.Attribute.set(this.__dF,dl,dm);
return this;
}if(!this.__dO){this.__dO={};
}this.__dO[dl]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(dp,dq){for(var dr in dp){this.setAttribute(dr,dp[dr],dq);
}return this;
},removeAttribute:function(ds,dt){this.setAttribute(ds,null,dt);
},getAttribute:function(du){return this.__dy?this.__dy[du]:null;
},_applyProperty:function(name,dv){},_setProperty:function(dw,dx,dy){if(!this.__dQ){this.__dQ={};
}
if(this.__dQ[dw]==dx){return;
}
if(dx==null){delete this.__dQ[dw];
}else{this.__dQ[dw]=dx;
}if(this.__dF){if(dy){this._applyProperty(dw,dx);
return this;
}if(!this.__dP){this.__dP={};
}this.__dP[dw]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(dz,dA){this._setProperty(dz,null,dA);
},_getProperty:function(dB){var dC=this.__dQ;

if(!dC){return null;
}var dD=dC[dB];
return dD==null?null:dD;
},addListener:function(dE,dF,self,dG){var dH;

if(this.$$disposed){return null;
}
if(this.__dF){return qx.event.Registration.addListener(this.__dF,dE,dF,self,dG);
}
if(!this.__dR){this.__dR={};
}
if(dG==null){dG=false;
}var dI=qx.event.Manager.getNextUniqueId();
var dJ=dE+(dG?b:z)+dI;
this.__dR[dJ]={type:dE,listener:dF,self:self,capture:dG,unique:dI};
return dJ;
},removeListener:function(dK,dL,self,dM){var dN;

if(this.$$disposed){return null;
}
if(this.__dF){qx.event.Registration.removeListener(this.__dF,dK,dL,self,dM);
}else{var dP=this.__dR;
var dO;

if(dM==null){dM=false;
}
for(var dQ in dP){dO=dP[dQ];
if(dO.listener===dL&&dO.self===self&&dO.capture===dM&&dO.type===dK){delete dP[dQ];
break;
}}}return this;
},removeListenerById:function(dR){if(this.$$disposed){return null;
}
if(this.__dF){qx.event.Registration.removeListenerById(this.__dF,dR);
}else{delete this.__dR[dR];
}return this;
},hasListener:function(dS,dT){if(this.$$disposed){return false;
}
if(this.__dF){return qx.event.Registration.hasListener(this.__dF,dS,dT);
}var dV=this.__dR;
var dU;

if(dT==null){dT=false;
}
for(var dW in dV){dU=dV[dW];
if(dU.capture===dT&&dU.type===dS){return true;
}}return false;
}},defer:function(dX){dX.__ee=new qx.util.DeferredCall(dX.flush,dX);
},destruct:function(){var dY=this.__dF;

if(dY){qx.event.Registration.getManager(dY).removeAllListeners(dY);
dY.$$element=j;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dU;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(s);
this.__dy=this.__dx=this.__dR=this.__dQ=this.__dO=this.__dN=this.__dP=this.__dF=this.__dU=this.__dJ=this.__dK=null;
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
qx.Class.define(f,{statics:{getApplication:function(){return this.__gM||null;
},ready:function(){if(this.__gM){return;
}
if(qx.core.Environment.get(d)==g){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(a)==g){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==g){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=c;
var j=qx.Class.getByName(i);

if(j){this.__gM=new j;
var h=new Date;
this.__gM.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__gM.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__gN:function(e){var k=this.__gM;

if(k){k.close();
}},__gO:function(){var l=this.__gM;

if(l){l.terminate();
}qx.core.ObjectRegistry.shutdown();
}}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__ia:[n,null,m,i,null,r,k,null,r],__ib:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ic:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__id:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__ic(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__id(G)){G=q+G+q;
}var H=this.__ia;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__ib;
}var L=this.__ic(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__id(N)){O=j+N+p;
}else{O=f+N+e;
}var M={backgroundPosition:L,backgroundImage:O};

if(J!=null){M.backgroundRepeat=J;
}return M;
},set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);

for(var U in T){P.style[U]=T[U];
}}}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="left",e="best-fit",d="mouse",c="bottom-left",b="direct",a="Boolean",z="bottom-right",y="widget",x="qx.ui.core.MPlacement",w="left-top",v="offsetRight",u="shorthand",t="offsetLeft",s="top-left",r="appear",q="offsetBottom",o="top",p="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(x,{statics:{__dI:null,__im:f,setVisibleElement:function(A){this.__dI=A;
},getVisibleElement:function(){return this.__dI;
},setMoveDirection:function(B){if(B===o||B===f){this.__im=B;
}else{throw new Error("Invalid value for the parameter 'direction' "+"[qx.ui.core.MPlacement.setMoveDirection()], the value was '"+B+"' "+"but 'top' or 'left' are allowed.");
}},getMoveDirection:function(){return this.__im;
}},properties:{position:{check:[s,p,c,z,w,l,k,n],init:c,themeable:true},placeMethod:{check:[y,d],init:d,themeable:true},domMove:{check:a,init:false},placementModeX:{check:[b,h,e],init:h,themeable:true},placementModeY:{check:[b,h,e],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,v,q,t],mode:u,themeable:true}},members:{__in:null,__io:null,__ip:null,getLayoutLocation:function(C){var F,E,G,top;
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
}},placeToWidget:function(P,Q){if(Q){this.__iq();
this.__in=qx.lang.Function.bind(this.placeToWidget,this,P,false);
qx.event.Idle.getInstance().addListener(i,this.__in);
this.__ip=function(){this.__iq();
};
this.addListener(g,this.__ip,this);
}var R=P.getContainerLocation()||this.getLayoutLocation(P);
this.__is(R);
},__iq:function(){if(this.__in){qx.event.Idle.getInstance().removeListener(i,this.__in);
this.__in=null;
}
if(this.__ip){this.removeListener(g,this.__ip,this);
this.__ip=null;
}},placeToMouse:function(event){var T=event.getDocumentLeft();
var top=event.getDocumentTop();
var S={left:T,top:top,right:T,bottom:top};
this.__is(S);
},placeToElement:function(U,V){var location=qx.bom.element.Location.get(U);
var W={left:location.left,top:location.top,right:location.left+U.offsetWidth,bottom:location.top+U.offsetHeight};
if(V){this.__in=qx.lang.Function.bind(this.placeToElement,this,U,false);
qx.event.Idle.getInstance().addListener(i,this.__in);
this.addListener(g,function(){if(this.__in){qx.event.Idle.getInstance().removeListener(i,this.__in);
this.__in=null;
}},this);
}this.__is(W);
},placeToPoint:function(X){var Y={left:X.left,top:X.top,right:X.left,bottom:X.top};
this.__is(Y);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__ir:function(ba){var bb=null;

if(this._computePlacementSize){var bb=this._computePlacementSize();
}else if(this.isVisible()){var bb=this.getBounds();
}
if(bb==null){this.addListenerOnce(r,function(){this.__ir(ba);
},this);
}else{ba.call(this,bb);
}},__is:function(bc){this.__ir(function(bd){var be=qx.util.placement.Placement.compute(bd,this.getLayoutParent().getBounds(),bc,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(be.left,be.top);
});
}},destruct:function(){this.__iq();
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
qx.Bootstrap.define(a,{construct:function(name,f,g){this.__AL=name;
this._readyState=e;
this._packages=f;
this._loader=g;

for(var i=0;i<f.length;i++){if(f[i].getReadyState()!==e){this._readyState=b;
break;
}}},members:{_readyState:null,_loader:null,_packages:null,__AL:null,getReadyState:function(){return this._readyState;
},getName:function(){return this.__AL;
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
this.__ii={};
this.__ij={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__ik:{},__ii:null,__ij:null,_applyTheme:function(j,k){this.__ij={};
this.__ii={};
},__il:function(l,m,n){var s=m.appearances;
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
return this.__il(r,m,n);
}}}for(var i=0;i<p.length-1;i++){p.shift();
var q=p.join(w);
var o=this.__il(q,m);

if(o){return o;
}}if(n!=null){return this.__il(n,m);
}return null;
}else if(typeof v===h){return this.__il(v,m,n);
}else if(v.include&&!v.style){return this.__il(v.include,m,n);
}return l;
},styleFrom:function(x,y,z,A){if(!z){z=this.getTheme();
}var F=this.__ij;
var B=F[x];

if(!B){B=F[x]=this.__il(x,z,A);
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
}}var E=this.__ii;

if(E[M]!==undefined){return E[M];
}if(!y){y=this.__ik;
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
}},destruct:function(){this.__ii=this.__ij=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__lr:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__lr;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(g){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__lr==h){return;
}this.__lr=h;
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
(function(){var v="single",u="Boolean",t="one",s="changeSelection",r="__dv",q="mouseup",p="mousedown",o="losecapture",n="multi",m="_applyQuickSelection",d="mouseover",l="_applySelectionMode",h="_applyDragSelection",c="qx.ui.core.MMultiSelectionHandling",b="removeItem",g="keypress",f="qx.event.type.Data",j="addItem",a="additive",k="mousemove";
qx.Mixin.define(c,{construct:function(){var x=this.SELECTION_MANAGER;
var w=this.__dv=new x(this);
this.addListener(p,w.handleMouseDown,w);
this.addListener(q,w.handleMouseUp,w);
this.addListener(d,w.handleMouseOver,w);
this.addListener(k,w.handleMouseMove,w);
this.addListener(o,w.handleLoseCapture,w);
this.addListener(g,w.handleKeyPress,w);
this.addListener(j,w.handleAddItem,w);
this.addListener(b,w.handleRemoveItem,w);
w.addListener(s,this._onSelectionChange,this);
},events:{"changeSelection":f},properties:{selectionMode:{check:[v,n,a,t],init:v,apply:l},dragSelection:{check:u,init:false,apply:h},quickSelection:{check:u,init:false,apply:m}},members:{__dv:null,selectAll:function(){this.__dv.selectAll();
},isSelected:function(y){if(!qx.ui.core.Widget.contains(this,y)){throw new Error("Could not test if "+y+" is selected, because it is not a child element!");
}return this.__dv.isItemSelected(y);
},addToSelection:function(z){if(!qx.ui.core.Widget.contains(this,z)){throw new Error("Could not add + "+z+" to selection, because it is not a child element!");
}this.__dv.addItem(z);
},removeFromSelection:function(A){if(!qx.ui.core.Widget.contains(this,A)){throw new Error("Could not remove "+A+" from selection, because it is not a child element!");
}this.__dv.removeItem(A);
},selectRange:function(B,C){this.__dv.selectItemRange(B,C);
},resetSelection:function(){this.__dv.clearSelection();
},setSelection:function(D){for(var i=0;i<D.length;i++){if(!qx.ui.core.Widget.contains(this,D[i])){throw new Error("Could not select "+D[i]+", because it is not a child element!");
}}
if(D.length===0){this.resetSelection();
}else{var E=this.getSelection();

if(!qx.lang.Array.equals(E,D)){this.__dv.replaceSelection(D);
}}},getSelection:function(){return this.__dv.getSelection();
},getSortedSelection:function(){return this.__dv.getSortedSelection();
},isSelectionEmpty:function(){return this.__dv.isSelectionEmpty();
},getSelectionContext:function(){return this.__dv.getSelectionContext();
},_getManager:function(){return this.__dv;
},getSelectables:function(F){return this.__dv.getSelectables(F);
},invertSelection:function(){this.__dv.invertSelection();
},_getLeadItem:function(){var G=this.__dv.getMode();

if(G===v||G===t){return this.__dv.getSelectedItem();
}else{return this.__dv.getLeadItem();
}},_applySelectionMode:function(H,I){this.__dv.setMode(H);
},_applyDragSelection:function(J,K){this.__dv.setDrag(J);
},_applyQuickSelection:function(L,M){this.__dv.setQuick(L);
},_onSelectionChange:function(e){this.fireDataEvent(s,e.getData());
}},destruct:function(){this._disposeObjects(r);
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
this.__gP=false;
this.__gQ=false;
this.__gR=false;
this.__gS=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__gT();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__gR:null,__gP:null,__gQ:null,__gS:null,__gT:function(){if(!this.__gR&&this.__gP&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__gR=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__gR=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__gR;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__gP=true;
this.__gT();
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
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gP=true;
this.__gT();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gS){this.__gS=true;

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
qx.Class.define(a,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__gN:function(e){var f=this.getApplication();

if(f){e.setReturnValue(f.close());
}},__gO:function(){var g=this.getApplication();

if(g){g.terminate();
}}},defer:function(h){qx.event.Registration.addListener(window,d,h.ready,h);
qx.event.Registration.addListener(window,c,h.__gO,h);
qx.event.Registration.addListener(window,b,h.__gN,h);
}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__dG:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__dG;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__dG=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__dG=null;
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
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",bf="10.0",be="10.4",bd="rim_tabletos",bc="Darwin",bb="os.version",ba="2003",Y=")",X="iPhone",W="android",V="unix",q="ce",r="7",o="SymbianOS",p="os.name",m="|",n="MacPPC",k="iPod",l="\.",u="Win64",v="linux",D="me",B="Macintosh",L="Android",G="Windows",R="ios",P="vista",x="8",U="blackberry",T="(",S="win",w="Linux",z="BSD",A="Mac OS X",C="iPad",E="X11",H="xp",M="symbian",Q="qx.bom.client.OperatingSystem",s="g",t="Win32",y="osx",K="webOS",J="RIM Tablet OS",I="BlackBerry",O="nt4",N="MacIntel",F="webos";
qx.Bootstrap.define(Q,{statics:{getName:function(){if(!navigator){return j;
}var bg=navigator.platform||j;
var bh=navigator.userAgent||j;

if(bg.indexOf(G)!=-1||bg.indexOf(t)!=-1||bg.indexOf(u)!=-1){return S;
}else if(bg.indexOf(B)!=-1||bg.indexOf(n)!=-1||bg.indexOf(N)!=-1||bg.indexOf(A)!=-1){return y;
}else if(bh.indexOf(J)!=-1){return bd;
}else if(bh.indexOf(K)!=-1){return F;
}else if(bg.indexOf(k)!=-1||bg.indexOf(X)!=-1||bg.indexOf(C)!=-1){return R;
}else if(bh.indexOf(L)!=-1){return W;
}else if(bg.indexOf(w)!=-1){return v;
}else if(bg.indexOf(E)!=-1||bg.indexOf(z)!=-1||bg.indexOf(bc)!=-1){return V;
}else if(bg.indexOf(o)!=-1){return M;
}else if(bg.indexOf(I)!=-1){return U;
}return j;
},__dd:{"Windows NT 6.2":x,"Windows NT 6.1":r,"Windows NT 6.0":P,"Windows NT 5.2":ba,"Windows NT 5.1":H,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":O,"Win 9x 4.90":D,"Windows CE":q,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":be,"Mac OS X 10.4":be,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":bf,"Mac OS X 10.0":bf},getVersion:function(){var bk=[];

for(var bj in qx.bom.client.OperatingSystem.__dd){bk.push(bj);
}var bl=new RegExp(T+bk.join(m).replace(/\./g,l)+Y,s);
var bi=bl.exec(navigator.userAgent);

if(bi&&bi[1]){return qx.bom.client.OperatingSystem.__dd[bi[1]];
}return j;
}},defer:function(bm){qx.core.Environment.add(p,bm.getName);
qx.core.Environment.add(bb,bm.getVersion);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__dv=b;
this.__cy=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dv:null,__cy:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__dv=this.__cy=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var t="mouseup",s="engine.name",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="os.name",l="mouseover",k="mouseout",d="ios",j="mousemove",g="on",c="engine.version",b="useraction",f="webkit",e="gecko",h="DOMMouseScroll",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__dv=u;
this.__cy=u.getWindow();
this.__dG=this.__cy.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eh:null,__ei:null,__ej:null,__ek:null,__el:null,__dv:null,__cy:null,__dG:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===d?function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===d?function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__em:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__cy,b,qx.event.type.Data,[E||D.type]);
},__en:function(){var H=[this.__cy,this.__dG,this.__dG.body];
var I=this.__cy;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__eh=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,q,this.__eh);
Event.addNativeListener(this.__dG,t,this.__eh);
Event.addNativeListener(this.__dG,r,this.__eh);
Event.addNativeListener(this.__dG,n,this.__eh);
Event.addNativeListener(this.__dG,p,this.__eh);
},_initMoveObserver:function(){this.__ei=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,j,this.__ei);
Event.addNativeListener(this.__dG,l,this.__ei);
Event.addNativeListener(this.__dG,k,this.__ei);
},_initWheelObserver:function(){this.__ej=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__en();
qx.bom.Event.addNativeListener(J.target,J.type,this.__ej);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,q,this.__eh);
Event.removeNativeListener(this.__dG,t,this.__eh);
Event.removeNativeListener(this.__dG,r,this.__eh);
Event.removeNativeListener(this.__dG,n,this.__eh);
Event.removeNativeListener(this.__dG,p,this.__eh);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,j,this.__ei);
Event.removeNativeListener(this.__dG,l,this.__ei);
Event.removeNativeListener(this.__dG,k,this.__ei);
},_stopWheelObserver:function(){var K=this.__en();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__ej);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__em(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__eo){this.__eo(M,N,O);
}
if(this.__eq){this.__eq(M,N,O);
}this.__em(M,N,O);

if(this.__ep){this.__ep(M,N,O);
}
if(this.__er){this.__er(M,N,O);
}this.__ek=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__em(P,o);
}),__eo:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__em(Q,t,S);
}}},"default":null}),__ep:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__em(T,p,V);
}},"default":null}),__eq:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__ek==r){this.__em(W,q,Y);
}else if(X==n){this.__em(W,r,Y);
}},"default":null}),__er:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__el=bc;
break;
case t:if(bc!==this.__el){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__el);
this.__em(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dv=this.__cy=this.__dG=this.__el=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="win",c="1",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__dv=by;
this.__cy=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__dG=this.__cy;
}else{this.__dG=this.__cy.document.documentElement;
}this.__ex={};
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
}}},members:{__ey:null,__dv:null,__cy:null,__dG:null,__ex:null,__ez:null,__eA:null,__eB:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__eC();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__dv.dispatchEvent(bL,event);
}if(this.__cy){qx.event.Registration.fireEvent(this.__cy,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__eC();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__dv.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__cy){qx.event.Registration.fireEvent(this.__cy,s,qx.event.type.Data,[bN]);
}},__eC:function(){var bR=this.__dv.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__dv.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__ey=qx.lang.Function.listener(this.__eD,this);
this.__eB=qx.lang.Function.listener(this.__eF,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,i,this.__ey);
Event.addNativeListener(this.__dG,m,this.__ey);
Event.addNativeListener(this.__dG,k,this.__eB);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,i,this.__ey);
Event.removeNativeListener(this.__dG,m,this.__ey);
Event.removeNativeListener(this.__dG,k,this.__eB);

for(var bU in (this.__eA||{})){var bT=this.__eA[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__eA);
},__eD:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__ex[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__ex[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==b){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__ex[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__ex[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__eE(ca.target,cd,ce);
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
}}this.__ex[ci]=ch;
}},"opera":function(cj){this.__ez=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__eE:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__eA){this.__eA={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__eA[co]){return;
}var self=this;
this.__eA[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__eF(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__eA[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__eF:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

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
if(cB!=this.__ez){this._idealKeyHandler(0,this.__ez,cA,cz);
}else{if(this._keyCodeToIdentifierMap[cz.keyCode]){this._idealKeyHandler(cz.keyCode,0,cz.type,cz);
}else{this._idealKeyHandler(0,cz.keyCode,cz.type,cz);
}}}})),_idealKeyHandler:function(cC,cD,cE,cF){var cG;
if(cC||(!cC&&!cD)){cG=this._keyCodeToIdentifier(cC);
this._fireSequenceEvent(cF,cE,cG);
}else{cG=this._charCodeToIdentifier(cD);
this._fireSequenceEvent(cF,k,cG);
this._fireInputEvent(cF,cD);
}},_specialCharCodeMap:{8:K,9:a,13:g,27:w,32:br},_emulateKeyPress:qx.core.Environment.select(l,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bf,17:ba,18:P,20:bc,224:W,37:bq,38:t,39:bb,40:bo,33:bu,34:bn,35:B,36:bk,45:n,46:Q,112:Y,113:be,114:p,115:T,116:bp,117:r,118:bl,119:o,120:L,121:U,122:u,123:H,144:j,44:bv,145:bd,19:x,91:qx.core.Environment.get(h)==J?R:F,92:F,93:qx.core.Environment.get(h)==J?R:E},_numpadToCharCode:{96:f.charCodeAt(0),97:c.charCodeAt(0),98:bi.charCodeAt(0),99:X.charCodeAt(0),100:D.charCodeAt(0),101:I.charCodeAt(0),102:z.charCodeAt(0),103:V.charCodeAt(0),104:bh.charCodeAt(0),105:d.charCodeAt(0),106:M.charCodeAt(0),107:bw.charCodeAt(0),109:bx.charCodeAt(0),110:G.charCodeAt(0),111:C.charCodeAt(0)},_charCodeA:bs.charCodeAt(0),_charCodeZ:bg.charCodeAt(0),_charCode0:f.charCodeAt(0),_charCode9:d.charCodeAt(0),_isNonPrintableKeyCode:function(cH){return this._keyCodeToIdentifierMap[cH]?true:false;
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
this.__ez=this.__dv=this.__cy=this.__dG=this.__ex=null;
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
this.__dv=f;
this.__cy=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dv:null,__cy:null,__fi:null,__fj:null,__fk:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__fk=qx.lang.Function.listener(this._onNative,this);
this.__fi=qx.bom.Event.supportsEvent(this.__cy,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__cy,this.__fi,this.__fk);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cy,this.__fi,this.__fk);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__fj!=p){this.__fj=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__cy,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__dv=this.__cy=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",d="mshtml",j="qx.event.handler.Touch",h="useraction",c="swipe",b="qx.mobile.nativescroll",g="webkit",f="tap",i="x",a="y";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__dv=u;
this.__cy=u.getWindow();
this.__dG=this.__cy.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__fn:null,__fo:null,__dv:null,__cy:null,__dG:null,__fp:null,__fq:null,__fr:null,__fs:null,__ft:false,__fu:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__fv:function(D){var E=qx.bom.Event.getTarget(D);
if((qx.core.Environment.get(n)==g)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__em:function(F,G,H,I){if(!H){H=this.__fv(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__cy,h,qx.event.type.Data,[G]);
},__fw:function(J,K,L){if(!L){L=this.__fv(J);
}var K=K||J.type;

if(K==r){this.__fx(J,L);
}else if(K==q){this.__fy(J,L);
}else if(K==s){this.__fz(J,L);
}},__fx:function(M,N){var O=M.changedTouches[0];
this.__fp=O.screenX;
this.__fq=O.screenY;
this.__fr=new Date().getTime();
this.__fs=M.changedTouches.length===1;
},__fy:function(P,Q){if(this.__fs&&P.changedTouches.length>1){this.__fs=false;
}},__fz:function(R,S){if(this.__fs){var T=R.changedTouches[0];
var V={x:T.screenX-this.__fp,y:T.screenY-this.__fq};
var W=qx.event.handler.Touch;

if(this.__fu==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__em(R,f,S,qx.event.type.Tap);
}else{var U=this.__fA(R,S,V);

if(U){R.swipe=U;
this.__em(R,c,S,qx.event.type.Swipe);
}}}},__fA:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__fr;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__fr,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__fB:qx.core.Environment.select(t,{"true":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__fC(bi)){this.__ft=true;
}else if(bj==s){this.__ft=false;
}var bm=this.__fD(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__fC:qx.core.Environment.select(t,{"true":function(bn){if((qx.core.Environment.get(n)==d)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__fD:qx.core.Environment.select(t,{"true":function(bp){var bq=this.__fv(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__fn=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,r,this.__fn);
Event.addNativeListener(this.__dG,q,this.__fn);
Event.addNativeListener(this.__dG,s,this.__fn);
Event.addNativeListener(this.__dG,m,this.__fn);
},_initMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){this.__fo=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,k,this.__fo);
Event.addNativeListener(this.__dG,o,this.__fo);
Event.addNativeListener(this.__dG,l,this.__fo);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,r,this.__fn);
Event.removeNativeListener(this.__dG,q,this.__fn);
Event.removeNativeListener(this.__dG,s,this.__fn);
Event.removeNativeListener(this.__dG,m,this.__fn);
},_stopMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,k,this.__fo);
Event.removeNativeListener(this.__dG,o,this.__fo);
Event.removeNativeListener(this.__dG,l,this.__fo);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Environment.select(t,{"true":qx.event.GlobalError.observeMethod(function(bs){if(!qx.core.Environment.get(p)){if(bs.type==o&&!this.__ft){return;
}var bt=this.__fB(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__fu=this.__fv(bu);
}this.__em(bu,bv);
this.__fw(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__dv=this.__cy=this.__dG=this.__fu=null;
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
this.__dv=E;
this.__dG=E.getWindow().document.documentElement;
this.__dv.addListener(this.__dG,x,this._onMouseDown,this);
this.__fQ();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__dv:null,__dG:null,__fG:null,__fH:null,__fI:null,__fJ:null,__fK:null,__e:null,__fL:null,__fM:null,__fN:false,__fO:0,__fP:0,canHandleEvent:function(F,G){},registerEvent:function(H,I,J){},unregisterEvent:function(K,L,M){},addType:function(N){this.__fI[N]=true;
},addAction:function(O){this.__fJ[O]=true;
},supportsType:function(P){return !!this.__fI[P];
},supportsAction:function(Q){return !!this.__fJ[Q];
},getData:function(R){if(!this.__fW||!this.__fG){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__fI[R]){throw new Error("Unsupported data type: "+R+"!");
}
if(!this.__e[R]){this.__fL=R;
this.__em(q,this.__fH,this.__fG,false);
}
if(!this.__e[R]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__e[R]||null;
},getCurrentAction:function(){return this.__fM;
},addData:function(S,T){this.__e[S]=T;
},getCurrentType:function(){return this.__fL;
},isSessionActive:function(){return this.__fN;
},__fQ:function(){this.__fI={};
this.__fJ={};
this.__fK={};
this.__e={};
},__fR:function(){if(this.__fH==null){return;
}var W=this.__fJ;
var U=this.__fK;
var V=null;

if(this.__fW){if(U.Shift&&U.Control&&W.alias){V=k;
}else if(U.Shift&&U.Alt&&W.copy){V=j;
}else if(U.Shift&&W.move){V=b;
}else if(U.Alt&&W.alias){V=k;
}else if(U.Control&&W.copy){V=j;
}else if(W.move){V=b;
}else if(W.copy){V=j;
}else if(W.alias){V=k;
}}
if(V!=this.__fM){this.__fM=V;
this.__em(o,this.__fH,this.__fG,false);
}},__em:function(X,Y,ba,bb,bc){var be=qx.event.Registration;
var bd=be.createEvent(X,qx.event.type.Drag,[bb,bc]);

if(Y!==ba){bd.setRelatedTarget(ba);
}return be.dispatchEvent(Y,bd);
},__fS:function(bf){while(bf&&bf.nodeType==1){if(bf.getAttribute(w)==y){return bf;
}bf=bf.parentNode;
}return null;
},__fT:function(bg){while(bg&&bg.nodeType==1){if(bg.getAttribute(s)==y){return bg;
}bg=bg.parentNode;
}return null;
},__fU:function(){this.__fH=null;
this.__dv.removeListener(this.__dG,c,this._onMouseMove,this,true);
this.__dv.removeListener(this.__dG,B,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__fQ();
},__fV:function(){if(this.__fN){this.__dv.removeListener(this.__dG,a,this._onMouseOver,this,true);
this.__dv.removeListener(this.__dG,h,this._onMouseOut,this,true);
this.__dv.removeListener(this.__dG,g,this._onKeyDown,this,true);
this.__dv.removeListener(this.__dG,C,this._onKeyUp,this,true);
this.__dv.removeListener(this.__dG,A,this._onKeyPress,this,true);
this.__em(z,this.__fH,this.__fG,false);
this.__fN=false;
}this.__fW=false;
this.__fG=null;
this.__fU();
},__fW:false,_onWindowBlur:function(e){this.__fV();
},_onKeyDown:function(e){var bh=e.getKeyIdentifier();

switch(bh){case D:case f:case d:if(!this.__fK[bh]){this.__fK[bh]=true;
this.__fR();
}}},_onKeyUp:function(e){var bi=e.getKeyIdentifier();

switch(bi){case D:case f:case d:if(this.__fK[bi]){this.__fK[bi]=false;
this.__fR();
}}},_onKeyPress:function(e){var bj=e.getKeyIdentifier();

switch(bj){case v:this.__fV();
}},_onMouseDown:function(e){if(this.__fN||e.getButton()!==t){return;
}var bk=this.__fS(e.getTarget());

if(bk){this.__fO=e.getDocumentLeft();
this.__fP=e.getDocumentTop();
this.__fH=bk;
this.__dv.addListener(this.__dG,c,this._onMouseMove,this,true);
this.__dv.addListener(this.__dG,B,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__fW){this.__em(r,this.__fG,this.__fH,false,e);
}if(this.__fN){e.stopPropagation();
}this.__fV();
},_onMouseMove:function(e){if(this.__fN){if(!this.__em(u,this.__fH,this.__fG,true,e)){this.__fV();
}}else{if(Math.abs(e.getDocumentLeft()-this.__fO)>3||Math.abs(e.getDocumentTop()-this.__fP)>3){if(this.__em(n,this.__fH,this.__fG,true,e)){this.__fN=true;
this.__dv.addListener(this.__dG,a,this._onMouseOver,this,true);
this.__dv.addListener(this.__dG,h,this._onMouseOut,this,true);
this.__dv.addListener(this.__dG,g,this._onKeyDown,this,true);
this.__dv.addListener(this.__dG,C,this._onKeyUp,this,true);
this.__dv.addListener(this.__dG,A,this._onKeyPress,this,true);
var bl=this.__fK;
bl.Control=e.isCtrlPressed();
bl.Shift=e.isShiftPressed();
bl.Alt=e.isAltPressed();
this.__fR();
}else{this.__em(z,this.__fH,this.__fG,false);
this.__fU();
}}}},_onMouseOver:function(e){var bm=e.getTarget();
var bn=this.__fT(bm);

if(bn&&bn!=this.__fG){this.__fW=this.__em(m,bn,this.__fH,true,e);
this.__fG=bn;
this.__fR();
}},_onMouseOut:function(e){var bp=this.__fT(e.getTarget());
var bo=this.__fT(e.getRelatedTarget());

if(bp&&bp!==bo&&bp==this.__fG){this.__em(l,this.__fG,bo,false,e);
this.__fG=null;
this.__fW=false;
qx.event.Timer.once(this.__fR,this,0);
}}},destruct:function(){this.__fH=this.__fG=this.__dv=this.__dG=this.__fI=this.__fJ=this.__fK=this.__e=null;
},defer:function(bq){qx.event.Registration.addHandler(bq);
}});
})();
(function(){var c="offline",b="online",a="qx.event.handler.Offline";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__dv=d;
this.__cy=d.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{online:true,offline:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dv:null,__cy:null,__fk:null,canHandleEvent:function(e,f){},registerEvent:function(g,h,i){},unregisterEvent:function(j,k,l){},_initObserver:function(){this.__fk=qx.lang.Function.listener(this._onNative,this);
qx.bom.Event.addNativeListener(this.__cy,c,this.__fk);
qx.bom.Event.addNativeListener(this.__cy,b,this.__fk);
},_stopObserver:function(){qx.bom.Event.removeNativeListener(this.__cy,c,this.__fk);
qx.bom.Event.removeNativeListener(this.__cy,b,this.__fk);
},_onNative:qx.event.GlobalError.observeMethod(function(m){qx.event.Registration.fireEvent(this.__cy,m.type,qx.event.type.Event,[]);
}),isOnline:function(){return !!this.__cy.navigator.onLine;
}},destruct:function(){this.__dv=null;
this._stopObserver();
delete qx.event.handler.Appear.__instances[this.$$hash];
},defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__gb:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__gc:{},__gd:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__gd[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__gd[t]=true;
}catch(e){qx.bom.Element.__gd[t]=false;
}}return qx.bom.Element.__gd[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__gc[w]){var v=qx.bom.Element.__gc[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__gc[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__gb;
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
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(b){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
}}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__fl:null,__fm:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__fl=d;
this.__fm=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__fl=this.__fl;
g.__fm=this.__fm;
return g;
},getOrientation:function(){return this.__fl;
},isLandscape:function(){return this.__fm==c;
},isPortrait:function(){return this.__fm==a;
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
(function(){var n="",k="url('",h="ie",g="browser.name",f="changeStatus",e="svg",d="#",c="chrome",b="firefox",a="eot",W="ios",V="ttf",U="woff",T="browser.documentmode",S="m",R="os.name",Q=")",P="qx.bom.webfonts.Manager",O="singleton",N=",\n",u="src: ",v="mobileSafari",s="'eot)",t="');",q="@font-face {",r="interval",o="}\n",p="font-family: ",w="mobile safari",y="safari",F="@font-face.*?",D=";\n",H="') format('woff')",G="browser.version",J="opera",I="\.(",A="os.version",M="') format('svg')",L="'eot')",K="src: url('",z="\nfont-style: normal;\nfont-weight: normal;",B="?#iefix') format('embedded-opentype')",C=";",E="') format('truetype')";
qx.Class.define(P,{extend:qx.core.Object,type:O,construct:function(){qx.core.Object.call(this);
this.__iV=[];
this.__iW={};
this.__gA=[];
this.__iX=this.getPreferredFormats();
},statics:{FONT_FORMATS:["eot","woff","ttf","svg"],VALIDATION_TIMEOUT:5000},members:{__iV:null,__iY:null,__iW:null,__iX:null,__gA:null,__ja:null,require:function(X,Y,ba,bb){var bc=[];

for(var i=0,l=Y.length;i<l;i++){var be=Y[i].split(d);
var bd=qx.util.ResourceManager.getInstance().toUri(be[0]);

if(be.length>1){bd=bd+d+be[1];
}bc.push(bd);
}if(!(qx.core.Environment.get(g)==h&&qx.bom.client.Browser.getVersion()<9)){this.__jb(X,bc,ba,bb);
return;
}
if(!this.__ja){this.__ja=new qx.event.Timer(100);
this.__ja.addListener(r,this.__jc,this);
}
if(!this.__ja.isEnabled()){this.__ja.start();
}this.__gA.push([X,bc,ba,bb]);
},remove:function(bf){var bg=null;

for(var i=0,l=this.__iV.length;i<l;i++){if(this.__iV[i]==bf){bg=i;
this.__ji(bf);
break;
}}
if(bg){qx.lang.Array.removeAt(this.__iV,bg);
}
if(bf in this.__iW){this.__iW[bf].dispose();
delete this.__iW[bf];
}},getPreferredFormats:function(){var bh=[];
var bl=qx.core.Environment.get(g);
var bi=qx.core.Environment.get(G);
var bk=qx.core.Environment.get(R);
var bj=qx.core.Environment.get(A);

if((bl==h&&qx.core.Environment.get(T)>=9)||(bl==b&&bi>=3.6)||(bl==c&&bi>=6)){bh.push(U);
}
if((bl==J&&bi>=10)||(bl==y&&bi>=3.1)||(bl==b&&bi>=3.5)||(bl==c&&bi>=4)||(bl==w&&bk==W&&bj>=4.2)){bh.push(V);
}
if(bl==h&&bi>=4){bh.push(a);
}
if(bl==v&&bk==W&&bj>=4.1){bh.push(e);
}return bh;
},removeStyleSheet:function(){this.__iV=[];

if(this.__iY){var bm=this.__iY.ownerNode?this.__iY.ownerNode:this.__iY.owningElement;
qx.dom.Element.removeChild(bm,bm.parentNode);
}this.__iY=null;
},__jb:function(bn,bo,bp,bq){if(!qx.lang.Array.contains(this.__iV,bn)){var bt=this.__je(bo);
var bs=this.__jf(bn,bt);

if(!bs){throw new Error("Couldn't create @font-face rule for WebFont "+bn+"!");
}
if(!this.__iY){this.__iY=qx.bom.Stylesheet.createElement();
}
try{this.__jh(bs);
}catch(bu){}this.__iV.push(bn);
}
if(!this.__iW[bn]){this.__iW[bn]=new qx.bom.webfonts.Validator(bn);
this.__iW[bn].setTimeout(qx.bom.webfonts.Manager.VALIDATION_TIMEOUT);
this.__iW[bn].addListenerOnce(f,this.__jd,this);
}
if(bp){var br=bq||window;
this.__iW[bn].addListenerOnce(f,bp,br);
}this.__iW[bn].validate();
},__jc:function(){if(this.__gA.length==0){this.__ja.stop();
return;
}var bv=this.__gA.shift();
this.__jb.apply(this,bv);
},__jd:function(bw){var bx=bw.getData();

if(bx.valid===false){qx.event.Timer.once(function(){this.remove(bx.family);
},this,250);
}},__je:function(by){var bA=qx.bom.webfonts.Manager.FONT_FORMATS;
var bD={};

for(var i=0,l=by.length;i<l;i++){var bB=null;

for(var x=0;x<bA.length;x++){var bC=new RegExp(I+bA[x]+Q);
var bz=bC.exec(by[i]);

if(bz){bB=bz[1];
}}
if(bB){bD[bB]=by[i];
}}return bD;
},__jf:function(bE,bF){var bI=[];
var bG=this.__iX.length>0?this.__iX:qx.bom.webfonts.Manager.FONT_FORMATS;

for(var i=0,l=bG.length;i<l;i++){var bH=bG[i];

if(bF[bH]){bI.push(this.__jg(bH,bF[bH]));
}}var bJ=u+bI.join(N)+C;
bJ=p+bE+D+bJ;
bJ=bJ+z;
return bJ;
},__jg:function(bK,bL){switch(bK){case a:return k+bL+t+K+bL+B;
case U:return k+bL+H;
case V:return k+bL+E;
case e:return k+bL+M;
default:return null;
}},__jh:function(bM){var bO=q+bM+o;

if(qx.core.Environment.get(g)==h&&qx.core.Environment.get(T)<9){var bN=this.__jj(this.__iY.cssText);
bN+=bO;
this.__iY.cssText=bN;
}else{this.__iY.insertRule(bO,this.__iY.cssRules.length);
}},__ji:function(bP){var bS=new RegExp(F+bP,S);

for(var i=0,l=document.styleSheets.length;i<l;i++){var bQ=document.styleSheets[i];

if(bQ.cssText){var bR=bQ.cssText.replace(/\n/g,n).replace(/\r/g,n);
bR=this.__jj(bR);

if(bS.exec(bR)){bR=bR.replace(bS,n);
}bQ.cssText=bR;
}else if(bQ.cssRules){for(var j=0,m=bQ.cssRules.length;j<m;j++){var bR=bQ.cssRules[j].cssText.replace(/\n/g,n).replace(/\r/g,n);

if(bS.exec(bR)){this.__iY.deleteRule(j);
return;
}}}}},__jj:function(bT){return bT.replace(s,L);
}},destruct:function(){delete this.__iV;
this.removeStyleSheet();

for(var bU in this.__iW){this.__iW[bU].dispose();
}qx.bom.webfonts.Validator.removeDefaultHelperElements();
}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__ly:null,__lz:false,__lA:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__lz){this.__lz=false;
}else{this.__lz=true;
o.execute(this);
}}this.fireEvent(n);
},__lB:function(e){if(this.__lz){this.__lz=false;
return;
}this.__lz=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__lA);
}
if(p!=null){this.__lA=p.addListener(n,this.__lB,this);
}var t=this.__ly;

if(t==null){this.__ly=t={};
}var u;

for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&!q.isDisposed()&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){u=this.get(s);
if(u==null){this.syncAppearance();
u=qx.util.PropertyUtil.getThemeValue(this,s);
}}else{u=null;
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this._applyCommand(null,this.getCommand());
this.__ly=null;
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
this.__dv=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__dv:null,__hq:{focusin:1,focusout:1,focus:1,blur:1},__hr:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;
},_dispatchEvent:function(j){var p=j.getTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);
var q=false;

while(o&&o.isAnonymous()){var q=true;
o=o.getLayoutParent();
}if(o&&q&&j.getType()==a){o.getContainerElement().activate();
}if(this.__hq[j.getType()]){o=o&&o.getFocusTarget();
if(!o){return;
}}if(j.getRelatedTarget){var x=j.getRelatedTarget();
var w=qx.ui.core.Widget.getWidgetByElement(x);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}
if(w){if(this.__hq[j.getType()]){w=w.getFocusTarget();
}if(w===o){return;
}}}var s=j.getCurrentTarget();
var u=qx.ui.core.Widget.getWidgetByElement(s);

if(!u||u.isAnonymous()){return;
}if(this.__hq[j.getType()]){u=u.getFocusTarget();
}var v=j.getType();

if(!u||!(u.isEnabled()||this.__hr[v])){return;
}var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var r=this.__dv.getListeners(u,v,k);

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
}}},destruct:function(){this.__dv=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var g="Boolean",f="__mE",e="qx.ui.core.SingleSelectionManager",d="__mG",c="changeSelected",b="__mF",a="qx.event.type.Data";
qx.Class.define(e,{extend:qx.core.Object,construct:function(h){qx.core.Object.call(this);
this.__mE=h;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:g,init:true,apply:d}},members:{__mF:null,__mE:null,getSelected:function(){return this.__mF;
},setSelected:function(j){if(!this.__mI(j)){throw new Error("Could not select "+j+", because it is not a child element!");
}this.__mH(j);
},resetSelected:function(){this.__mH(null);
},isSelected:function(k){if(!this.__mI(k)){throw new Error("Could not check if "+k+" is selected,"+" because it is not a child element!");
}return this.__mF===k;
},isSelectionEmpty:function(){return this.__mF==null;
},getSelectables:function(l){var m=this.__mE.getItems();
var n=[];

for(var i=0;i<m.length;i++){if(this.__mE.isItemSelectable(m[i])){n.push(m[i]);
}}if(!l){for(var i=n.length-1;i>=0;i--){if(!n[i].getEnabled()){n.splice(i,1);
}}}return n;
},__mG:function(o,p){if(!o){this.__mH(this.__mF);
}},__mH:function(q){var t=this.__mF;
var s=q;

if(s!=null&&t===s){return;
}
if(!this.isAllowEmptySelection()&&s==null){var r=this.getSelectables(true)[0];

if(r){s=r;
}}this.__mF=s;
this.fireDataEvent(c,s,t);
},__mI:function(u){var v=this.__mE.getItems();

for(var i=0;i<v.length;i++){if(v[i]===u){return true;
}}return false;
}},destruct:function(){if(this.__mE.toHashCode){this._disposeObjects(f);
}else{this.__mE=null;
}this._disposeObjects(b);
}});
})();
(function(){var l="qx.dynlocale",k="Boolean",j="changeLocale",i="changeInvalidMessage",h="String",g="invalid",f="",d="qx.ui.form.MForm",c="_applyValid",b="changeRequired",a="changeValid";
qx.Mixin.define(d,{construct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().addListener(j,this.__kE,this);
}},properties:{valid:{check:k,init:true,apply:c,event:a},required:{check:k,init:false,event:b},invalidMessage:{check:h,init:f,event:i},requiredInvalidMessage:{check:h,nullable:true,event:i}},members:{_applyValid:function(m,n){m?this.removeState(g):this.addState(g);
},__kE:qx.core.Environment.select(l,{"true":function(e){var o=this.getInvalidMessage();

if(o&&o.translate){this.setInvalidMessage(o.translate());
}var p=this.getRequiredInvalidMessage();

if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());
}},"false":null})},destruct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().removeListener(j,this.__kE,this);
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
this.__lN={};
}},properties:{appearance:{refine:true,init:r},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[h,c,E],init:h,themeable:true,apply:b},scrollbarY:{check:[h,c,E],init:h,themeable:true,apply:b},scrollbar:{group:[x,u]}},members:{__cQ:null,__lN:null,_createChildControlImpl:function(H,I){var J;

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
if(this.__lN[U]){clearTimeout(this.__lN[U]);
this.__lN[U]=null;
}this.__lN[U]=setTimeout(qx.lang.Function.bind(function(ba){this.__lO(ba,U);
},this,W),100);
}},__lO:function(bb,bc){this.__lN[bc]=null;
var be=this._isChildControlVisible(d+bc);

if(bb==0||!be){return;
}if(bb>0){bb=Math.max(0,bb-3);
}else{bb=Math.min(0,bb+3);
}this.__lN[bc]=setTimeout(qx.lang.Function.bind(function(bf,bg){this.__lO(bf,bg);
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
(function(){var m="horizontal",k="qx.event.type.Data",j="vertical",h="",g="qx.ui.form.List",f="text",d="Boolean",c="__md",b="one",a="addChildWidget",A="_applySpacing",z="Enter",y="Integer",x="action",w="keyinput",v="addItem",u="removeChildWidget",t="_applyOrientation",s="single",r="keypress",p="list",q="label",n="pane",o="removeItem";
qx.Class.define(g,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(B){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__md=this._createListItemContainer();
this.__md.addListener(a,this._onAddChild,this);
this.__md.addListener(u,this._onRemoveChild,this);
this.getChildControl(n).add(this.__md);
if(B){this.setOrientation(m);
}else{this.initOrientation();
}this.addListener(r,this._onKeyPress);
this.addListener(w,this._onKeyInput);
this.__Aj=h;
},events:{addItem:k,removeItem:k},properties:{appearance:{refine:true,init:p},focusable:{refine:true,init:true},orientation:{check:[m,j],init:j,apply:t},spacing:{check:y,init:0,apply:A,themeable:true},enableInlineFind:{check:d,init:true}},members:{__Aj:null,__Ak:null,__md:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__md;
},_onAddChild:function(e){this.fireDataEvent(v,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(o,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_createListItemContainer:function(){return new qx.ui.container.Composite;
},_applyOrientation:function(C,D){var E=C===m;
var F=E?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__md;
content.setLayout(F);
content.setAllowGrowX(!E);
content.setAllowGrowY(E);
this._applySpacing(this.getSpacing());
},_applySpacing:function(G,H){this.__md.getLayout().setSpacing(G);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==z&&!e.isAltPressed()){var I=this.getSelection();

for(var i=0;i<I.length;i++){I[i].fireEvent(x);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var J=this.getSelectionMode();

if(!(J===s||J===b)){return;
}if(((new Date).valueOf()-this.__Ak)>1000){this.__Aj=h;
}this.__Aj+=e.getChar();
var K=this.findItemByLabelFuzzy(this.__Aj);
if(K){this.setSelection([K]);
}this.__Ak=(new Date).valueOf();
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
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__ht=u;
this.length=u.length;
},members:{$$isString:true,length:0,__ht:null,toString:function(){return this.__ht;
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
this.__hu=c;
this.__hv=d;
},members:{__hu:null,__hv:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hu,this.__hv);
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
(function(){var c="initialized",b="qx.io.part.Package",a="error";
qx.Bootstrap.define(b,{construct:function(d,e,f){this.__AM=f?"complete":"initialized";
this.__AN=d;
this.__cq=e;
},members:{__AM:null,__AN:null,__cq:null,__AO:null,__AP:null,__ds:null,__AQ:null,getId:function(){return this.__cq;
},getReadyState:function(){return this.__AM;
},getUrls:function(){return this.__AN;
},saveClosure:function(g){if(this.__AM==a){return;
}this.__AO=g;

if(!this.__AP){this.execute();
}else{clearTimeout(this.__ds);
this.__AM="cached";
this.__AQ(this);
}},execute:function(){if(this.__AO){this.__AO();
delete this.__AO;
}
if(qx.$$packageData[this.__cq]){this.__AS(qx.$$packageData[this.__cq]);
delete qx.$$packageData[this.__cq];
}this.__AM="complete";
},loadClosure:function(h,self){if(this.__AM!==c){return;
}this.__AP=true;
this.__AM="loading";
this.__AQ=qx.Bootstrap.bind(h,self);
this.__AR(this.__AN,function(){},function(){this.__AM="error";
h.call(self,this);
},this);
var i=this;
this.__ds=setTimeout(function(){i.__AM="error";
h.call(self,i);
},qx.Part.TIMEOUT);
},load:function(j,self){if(this.__AM!==c){return;
}this.__AP=false;
this.__AM="loading";
this.__AR(this.__AN,function(){this.__AM="complete";
this.execute();
j.call(self,this);
},function(){this.__AM="error";
j.call(self,this);
},this);
},__AR:function(k,l,m,self){if(k.length==0){l.call(self);
return;
}var o=0;
var self=this;
var n=function(p){if(o>=k.length){l.call(self);
return;
}var q=new qx.io.ScriptLoader();
q.load(p.shift(),function(status){o+=1;
q.dispose();

if(status!=="success"){if(self.__AM=="loading"){clearTimeout(self.__ds);
return m.call(self);
}}if((qx.bom.client.Engine.getName()=="webkit")){setTimeout(function(){n.call(self,p,l,self);
},0);
}else{n.call(self,p,l,self);
}},self);
};
n(k.concat());
},__AS:qx.$$loader.importPackageData}});
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="execute",b="__it";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__it=new qx.event.AcceleratingTimer();
this.__it.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__om:null,__it:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__on();
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
this.__it.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__it.stop();
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
this.fireEvent(c);
},__on:function(){this.fireEvent(g);
this.__om=false;
this.__it.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__oo:function(){this.fireEvent(d);
this.__it.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(b);
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
this.__fX=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__fY=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__ga:null,__fX:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__ga);
this.__ga=null;
}else if(p){this.__ga=window.setInterval(this.__fX,this.getInterval());
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
}})},destruct:function(){if(this.__ga){window.clearInterval(this.__ga);
}this.__ga=this.__fX=null;
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
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__bd:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__bd[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__bd[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignY(p);
}
if(q){this.setSeparator(q);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__kA:null,__kB:null,__kC:null,__dS:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kD:function(){var w=this._getLayoutChildren();
var length=w.length;
var s=false;
var r=this.__kA&&this.__kA.length!=length&&this.__kB&&this.__kA;
var u;
var t=r?this.__kA:new Array(length);
var v=r?this.__kB:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.height!=null){t[i]=parseFloat(u.height)/100;
}
if(u.flex!=null){v[i]=u.flex;
s=true;
}else{v[i]=0;
}}if(!r){this.__kA=t;
this.__kB=v;
}this.__kC=s;
this.__dS=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__kD();
}var F=this.__dS;
var length=F.length;
var P=qx.ui.layout.Util;
var O=this.getSpacing();
var S=this.getSeparator();

if(S){var C=P.computeVerticalSeparatorGaps(F,O,S);
}else{var C=P.computeVerticalGaps(F,O,true);
}var i,A,B,J;
var K=[];
var Q=C;

for(i=0;i<length;i+=1){J=this.__kA[i];
B=J!=null?Math.floor((y-C)*J):F[i].getSizeHint().height;
K.push(B);
Q+=B;
}if(this.__kC&&Q!=y){var H={};
var N,R;

for(i=0;i<length;i+=1){N=this.__kB[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kD();
}var bc=qx.ui.layout.Util;
var bk=this.__dS;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__kB[i];
var Y=this.__kA[i];

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
}},destruct:function(){this.__kA=this.__kB=this.__dS=null;
}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__gA:[],add:function(c){var d=this.__gA;

if(qx.lang.Array.contains(d,c)){return;
}d.unshift(c);
qx.ui.core.queue.Manager.scheduleFlush(b);
},isEmpty:function(){return this.__gA.length==0;
},flush:function(){var e=this.__gA;

for(var i=e.length-1;i>=0;i--){var f=e[i];
e.splice(i,1);
f.dispose();
}if(e.length!=0){return;
}this.__gA=[];
}}});
})();
(function(){var j="nonScaled",i="scaled",h="alphaScaled",g=".png",f="div",e="replacement",d="qx.event.type.Event",c="engine.name",b="hidden",a="Boolean",z="px",y="engine.version",x="scale",w="changeSource",v="qx.ui.basic.Image",u="loaded",t="__iC",s="-disabled.$1",r="loadingFailed",q="String",o="_applySource",p="img",m="image",n="mshtml",k="_applyScale",l="no-repeat";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(A){this.__iC={};
qx.ui.core.Widget.call(this);

if(A){this.setSource(A);
}},properties:{source:{check:q,init:null,nullable:true,event:w,apply:o,themeable:true},scale:{check:a,init:false,themeable:true,apply:k},appearance:{refine:true,init:m},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:d,loaded:d},members:{__iD:null,__iE:null,__fm:null,__iC:null,getContentElement:function(){return this.__iI();
},_createContentElement:function(){return this.__iI();
},_getContentHint:function(){return {width:this.__iD||0,height:this.__iE||0};
},_applyEnabled:function(B,C){qx.ui.core.Widget.prototype._applyEnabled.call(this,B,C);

if(this.getSource()){this._styleSource();
}},_applySource:function(D){this._styleSource();
},_applyScale:function(E){this._styleSource();
},__iF:function(F){this.__fm=F;
},__iG:function(){if(this.__fm==null){var H=this.getSource();
var G=false;

if(H!=null){G=qx.lang.String.endsWith(H,g);
}
if(this.getScale()&&G&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__fm=h;
}else if(this.getScale()){this.__fm=i;
}else{this.__fm=j;
}}return this.__fm;
},__iH:function(I){var J;
var K;

if(I==h){J=true;
K=f;
}else if(I==j){J=false;
K=f;
}else{J=true;
K=p;
}var L=new qx.html.Image(K);
L.setScale(J);
L.setStyles({"overflowX":b,"overflowY":b});
return L;
},__iI:function(){var M=this.__iG();

if(this.__iC[M]==null){this.__iC[M]=this.__iH(M);
}return this.__iC[M];
},_styleSource:function(){var N=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!N){this.getContentElement().resetSource();
return;
}this.__iJ(N);

if((qx.core.Environment.get(c)==n)&&parseInt(qx.core.Environment.get(y),10)<9){var O=this.getScale()?x:l;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(O,N);
}if(qx.util.ResourceManager.getInstance().has(N)){this.__iL(this.getContentElement(),N);
}else if(qx.io.ImageLoader.isLoaded(N)){this.__iM(this.getContentElement(),N);
}else{this.__iN(this.getContentElement(),N);
}},__iJ:qx.core.Environment.select(c,{"mshtml":function(P){var R=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var Q=qx.lang.String.endsWith(P,g);

if(R&&Q){if(this.getScale()&&this.__iG()!=h){this.__iF(h);
}else if(!this.getScale()&&this.__iG()!=j){this.__iF(j);
}}else{if(this.getScale()&&this.__iG()!=i){this.__iF(i);
}else if(!this.getScale()&&this.__iG()!=j){this.__iF(j);
}}this.__iK(this.__iI());
},"default":function(S){if(this.getScale()&&this.__iG()!=i){this.__iF(i);
}else if(!this.getScale()&&this.__iG(j)){this.__iF(j);
}this.__iK(this.__iI());
}}),__iK:function(T){var W=this.getContainerElement();
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
W.removeAt(0);
W.addAt(T,0);
}}},__iL:function(bb,bc){var be=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bd=bc.replace(/\.([a-z]+)$/,s);

if(be.has(bd)){bc=bd;
this.addState(e);
}else{this.removeState(e);
}}if(bb.getSource()===bc){return;
}bb.setSource(bc);
this.__iP(be.getImageWidth(bc),be.getImageHeight(bc));
},__iM:function(bf,bg){var bi=qx.io.ImageLoader;
bf.setSource(bg);
var bh=bi.getWidth(bg);
var bj=bi.getHeight(bg);
this.__iP(bh,bj);
},__iN:function(bk,bl){var bm,bn,self;
var bo=qx.io.ImageLoader;
if(!bo.isFailed(bl)){bo.load(bl,this.__iO,this);
}else{if(bk!=null){bk.resetSource();
}}},__iO:function(bp,bq){if(this.$$disposed===true){return;
}if(bp!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bq.failed){this.warn("Image could not be loaded: "+bp);
this.fireEvent(r);
}else if(bq.aborted){return ;
}else{this.fireEvent(u);
}this._styleSource();
},__iP:function(br,bs){if(br!==this.__iD||bs!==this.__iE){this.__iD=br;
this.__iE=bs;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(t);
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
qx.Class.define(b,{statics:{__gA:[],remove:function(c){qx.lang.Array.remove(this.__gA,c);
},add:function(d){var e=this.__gA;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__gA;
var g;

for(var i=f.length-1;i>=0;i--){g=f[i];
f.splice(i,1);
g.syncWidget();
}if(f.length!=0){return;
}this.__gA=[];
}}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Font",d="_dynamic",c="Theme",b="changeTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:c,nullable:true,apply:f,event:b}},members:{resolveDynamic:function(g){var h=this._dynamic;
return g instanceof qx.bom.Font?g:h[g];
},resolve:function(i){var l=this._dynamic;
var j=l[i];

if(j){return j;
}var k=this.getTheme();

if(k!==null&&k.fonts[i]){var m=this.__iR(k.fonts[i]);
return l[i]=(new m).set(k.fonts[i]);
}return i;
},isDynamic:function(n){var q=this._dynamic;

if(n&&(n instanceof qx.bom.Font||q[n]!==undefined)){return true;
}var p=this.getTheme();

if(p!==null&&n&&p.fonts[n]){var o=this.__iR(p.fonts[n]);
q[n]=(new o).set(p.fonts[n]);
return true;
}return false;
},__iQ:function(r,s){if(r[s].include){var t=r[r[s].include];
r[s].include=null;
delete r[s].include;
r[s]=qx.lang.Object.mergeWith(r[s],t,false);
this.__iQ(r,s);
}},_applyTheme:function(u){var v=this._getDynamic();

for(var y in v){if(v[y].themed){v[y].dispose();
delete v[y];
}}
if(u){var w=u.fonts;

for(var y in w){if(w[y].include&&w[w[y].include]){this.__iQ(w,y);
}var x=this.__iR(w[y]);
v[y]=(new x).set(w[y]);
v[y].themed=true;
}}this._setDynamic(v);
},__iR:function(z){if(z.sources){return qx.bom.webfonts.WebFont;
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
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cA:null,__gf:null,__gg:true,__cy:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__gf&&this.__gh[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__gg||!qx.dom.Hierarchy.contains(this.__gf,o)){o=this.__gf;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__gh:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__gf===q&&this.__gg==r){return;
}
if(this.__gf){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__gg=r;
this.__gf=q;
this.__cA.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__gf;
},releaseCapture:function(){var s=this.__gf;

if(!s){return;
}this.__gf=null;
this.__cA.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__gf=this.__cy=this.__cA=null;
},defer:function(w){qx.event.Registration.addDispatcher(w);
}});
})();
(function(){var d="engine.version",c="engine.name",b="undefined",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Environment.select(c,{"opera":function(e){if(parseFloat(qx.core.Environment.get(d))<9.5){return (e||window).document.body.clientWidth;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;
}},"webkit":function(g){if(parseFloat(qx.core.Environment.get(d))<523.15){return (g||window).innerWidth;
}else{var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}},"default":function(i){var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientWidth:j.body.clientWidth;
}}),getHeight:qx.core.Environment.select(c,{"opera":function(k){if(parseFloat(qx.core.Environment.get(d))<9.5){return (k||window).document.body.clientHeight;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}},"webkit":function(m){if(parseFloat(qx.core.Environment.get(d))<523.15){return (m||window).innerHeight;
}else{var n=(m||window).document;
return qx.bom.Document.isStandardMode(m)?n.documentElement.clientHeight:n.body.clientHeight;
}},"default":function(o){var p=(o||window).document;
return qx.bom.Document.isStandardMode(o)?p.documentElement.clientHeight:p.body.clientHeight;
}}),getScrollLeft:function(q){var q=q?q:window;

if(typeof q.pageXOffset!==b){return q.pageXOffset;
}var r=q.document;
return r.documentElement.scrollLeft||r.body.scrollLeft;
},getScrollTop:function(s){var s=s?s:window;

if(typeof s.pageYOffeset!==b){return s.pageYOffset;
}var t=s.document;
return t.documentElement.scrollTop||t.body.scrollTop;
},__dm:function(){var u=this.getWidth()>this.getHeight()?90:0;
var v=window.orientation;

if(v==null||Math.abs(v%180)==u){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};
}else{return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};
}},__dn:null,getOrientation:function(w){var x=(w||window).orientation;

if(x==null){x=this.getWidth(w)>this.getHeight(w)?90:0;
}else{x=this.__dn[x];
}return x;
},isLandscape:function(y){return Math.abs(this.getOrientation(y))==90;
},isPortrait:function(z){return Math.abs(this.getOrientation(z))!==90;
}},defer:function(A){A.__dn=A.__dm();
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
}else if(this.isRgbString(m)){return this.__ie();
}else if(this.isHex3String(m)){return this.__ig();
}else if(this.isHex6String(m)){return this.__ih();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__ie();
}else if(this.isRgbaString(n)){return this.__if();
}else if(this.isHex3String(n)){return this.__ig();
}else if(this.isHex6String(n)){return this.__ih();
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
},__ie:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__if:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__ig:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__ih:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__ig(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__ih(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__ig(P);
}
if(this.isHex6String(P)){return this.__ih(P);
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
this.__do={};
this.add(a,h);
},members:{__do:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__do[k]){return this.__do[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__do[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__do[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__do[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__do){v[w]=this.__do[w];
}return v;
}},destruct:function(){this.__do=null;
}});
})();
(function(){var k="color",j="qx.dynlocale",i="Boolean",h="enabled",g="changeLocale",f="os.name",d="_applyTextAlign",c="qx.ui.core.Widget",b="nowrap",a="changeStatus",J="changeTextAlign",I="_applyWrap",H="changeValue",G="qx.ui.basic.Label",F="osx",E="css.textoverflow",D="html.xul",C="_applyValue",B="center",A="_applyBuddy",r="String",s="whiteSpace",p="textAlign",q="engine.version",n="right",o="gecko",l="justify",m="changeRich",t="normal",u="_applyRich",w="engine.name",v="click",y="label",x="left",z="A";
qx.Class.define(G,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(K){qx.ui.core.Widget.call(this);

if(K!=null){this.setValue(K);
}
if(qx.core.Environment.get(j)){qx.locale.Manager.getInstance().addListener(g,this._onChangeLocale,this);
}},properties:{rich:{check:i,init:false,event:m,apply:u},wrap:{check:i,init:true,apply:I},value:{check:r,apply:C,event:H,nullable:true},buddy:{check:c,apply:A,nullable:true,init:null,dereference:true},textAlign:{check:[x,B,n,l],nullable:true,themeable:true,apply:d,event:J},appearance:{refine:true,init:y},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__lj:null,__lk:null,__ll:null,__lm:null,__ln:null,_getContentHint:function(){if(this.__lk){this.__lo=this.__lp();
delete this.__lk;
}return {width:this.__lo.width,height:this.__lo.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(L){if(!qx.core.Environment.get(E)&&qx.core.Environment.get(D)){if(L&&!this.isRich()){return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,L);
},_getContentHeightForWidth:function(M){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__lp(M).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(N,O){this.getContentElement().setStyle(p,N);
},_applyTextColor:function(P,Q){if(P){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(P));
}else{this.getContentElement().removeStyle(k);
}},__lo:{width:0,height:0},_applyFont:function(R,S){if(S&&this.__lj&&this.__ln){this.__lj.removeListenerById(this.__ln);
this.__ln=null;
}var T;

if(R){this.__lj=qx.theme.manager.Font.getInstance().resolve(R);

if(this.__lj instanceof qx.bom.webfonts.WebFont){this.__ln=this.__lj.addListener(a,this._onWebFontStatusChange,this);
}T=this.__lj.getStyles();
}else{this.__lj=null;
T=qx.bom.Font.getDefaultStyles();
}if(this.getTextColor()!=null){delete T[k];
}this.getContentElement().setStyles(T);
this.__lk=true;
qx.ui.core.queue.Layout.add(this);
},__lp:function(U){var Y=qx.bom.Label;
var W=this.getFont();
var V=W?this.__lj.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||z;
var X=this.getRich();

if(this.__ln){this.__lq();
}return X?Y.getHtmlSize(content,V,U):Y.getTextSize(content,V);
},__lq:function(){if(qx.core.Environment.get(f)==F&&qx.core.Environment.get(w)==o&&parseInt(qx.core.Environment.get(q),10)>9){if(!this.getContentElement()){return;
}var ba=this.getContentElement().getDomElement();

if(ba){ba.innerHTML=ba.innerHTML;
}}},_applyBuddy:function(bb,bc){if(bc!=null){bc.removeBinding(this.__ll);
this.__ll=null;
this.removeListenerById(this.__lm);
this.__lm=null;
}
if(bb!=null){this.__ll=bb.bind(h,this,h);
this.__lm=this.addListener(v,function(){if(bb.isFocusable()){bb.focus.apply(bb);
}},this);
}},_applyRich:function(bd){this.getContentElement().setRich(bd);
this.__lk=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(be,bf){if(be&&!this.isRich()){}
if(this.isRich()){var bg=be?t:b;
this.getContentElement().setStyle(s,bg);
}},_onChangeLocale:qx.core.Environment.select(j,{"true":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"false":null}),_onWebFontStatusChange:function(bh){if(bh.getData().valid===true){this.__lk=true;
qx.ui.core.queue.Layout.add(this);
}},_applyValue:function(bi,bj){this.getContentElement().setValue(bi);
this.__lk=true;
qx.ui.core.queue.Layout.add(this);
}},destruct:function(){if(qx.core.Environment.get(j)){qx.locale.Manager.getInstance().removeListener(g,this._onChangeLocale,this);
}if(this.__ll!=null){var bk=this.getBuddy();

if(bk!=null&&!bk.isDisposed()){bk.removeBinding(this.__ll);
}}
if(this.__lj&&this.__ln){this.__lj.removeListenerById(this.__ln);
}this.__lj=this.__ll=null;
}});
})();
(function(){var m="",l="audio",k="video",j="undefined",i="number",h="function",g="html.video.h264",f="html.element.contains",d='video/ogg; codecs="theora, vorbis"',c="html.console",bk="html.xul",bj="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",bi="html.video.ogg",bh="http://www.w3.org/TR/SVG11/feature#BasicStructure",bg="html.storage.local",bf="div",be='audio',bd='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',bc="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",bb="html.audio",t="url(#default#VML)",u="audio/mpeg",r="org.w3c.dom.svg",s="html.classlist",p="html.video",q="html.geolocation",n="DOMTokenList",o="html.storage.session",y="1.1",z="html.image.naturaldimensions",H="html.audio.aif",F="audio/x-wav",P='<v:shape id="vml_flag1" adj="1" />',K="html.canvas",W="audio/ogg",U="html.element.compareDocumentPosition",B="audio/x-aiff",ba="html.audio.au",Y="img",X="html.xpath",A="qx.bom.client.Html",D='video',E="span",G="html.element.textcontent",I="html.audio.mp3",L="html.vml",R="html.svg",V="html.audio.ogg",w="label",x='video/webm; codecs="vp8, vorbis"',C="html.dataurl",O="html.webworker",N="html.dataset",M="1.0",T="html.audio.wav",S="html.filereader",J="audio/basic",Q="html.video.webm",b="object";
qx.Bootstrap.define(A,{statics:{getWebWorker:function(){return window.Worker!=null;
},getFileReader:function(){return window.FileReader!=null;
},getGeoLocation:function(){return navigator.geolocation!=null;
},getAudio:function(){return !!document.createElement(be).canPlayType;
},getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(W);
},getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(u);
},getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(F);
},getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(J);
},getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(B);
},getVideo:function(){return !!document.createElement(D).canPlayType;
},getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return m;
}var v=document.createElement(k);
return v.canPlayType(d);
},getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return m;
}var v=document.createElement(k);
return v.canPlayType(bd);
},getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return m;
}var v=document.createElement(k);
return v.canPlayType(x);
},getLocalStorage:function(){try{return window.localStorage!=null;
}catch(bl){return false;
}},getSessionStorage:function(){try{return window.sessionStorage!=null;
}catch(bm){return false;
}},getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===n);
},getXPath:function(){return !!document.evaluate;
},getXul:function(){try{document.createElementNS(bj,w);
return true;
}catch(e){return false;
}},getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(r,M)||document.implementation.hasFeature(bh,y));
},getVml:function(){var bn=document.createElement(bf);
document.body.appendChild(bn);
bn.innerHTML=P;
bn.firstChild.style.behavior=t;
var bo=typeof bn.firstChild.adj==b;
document.body.removeChild(bn);
return bo;
},getCanvas:function(){return !!window.CanvasRenderingContext2D;
},getDataUrl:function(bp){var bq=new Image();
bq.onload=bq.onerror=function(){window.setTimeout(function(){bp.call(null,(bq.width==1&&bq.height==1));
},0);
};
bq.src=bc;
},getDataset:function(){return !!document.documentElement.dataset;
},getContains:function(){return (typeof document.documentElement.contains!==j);
},getCompareDocumentPosition:function(){return (typeof document.documentElement.compareDocumentPosition===h);
},getTextContent:function(){var br=document.createElement(E);
return (typeof br.textContent!==j);
},getConsole:function(){return typeof window.console!==j;
},getNaturalDimensions:function(){var bs=document.createElement(Y);
return typeof bs.naturalHeight===i&&typeof bs.naturalWidth===i;
}},defer:function(bt){qx.core.Environment.add(O,bt.getWebWorker);
qx.core.Environment.add(S,bt.getFileReader);
qx.core.Environment.add(q,bt.getGeoLocation);
qx.core.Environment.add(bb,bt.getAudio);
qx.core.Environment.add(V,bt.getAudioOgg);
qx.core.Environment.add(I,bt.getAudioMp3);
qx.core.Environment.add(T,bt.getAudioWav);
qx.core.Environment.add(ba,bt.getAudioAu);
qx.core.Environment.add(H,bt.getAudioAif);
qx.core.Environment.add(p,bt.getVideo);
qx.core.Environment.add(bi,bt.getVideoOgg);
qx.core.Environment.add(g,bt.getVideoH264);
qx.core.Environment.add(Q,bt.getVideoWebm);
qx.core.Environment.add(bg,bt.getLocalStorage);
qx.core.Environment.add(o,bt.getSessionStorage);
qx.core.Environment.add(s,bt.getClassList);
qx.core.Environment.add(X,bt.getXPath);
qx.core.Environment.add(bk,bt.getXul);
qx.core.Environment.add(K,bt.getCanvas);
qx.core.Environment.add(R,bt.getSvg);
qx.core.Environment.add(L,bt.getVml);
qx.core.Environment.add(N,bt.getDataset);
qx.core.Environment.addAsync(C,bt.getDataUrl);
qx.core.Environment.add(f,bt.getContains);
qx.core.Environment.add(U,bt.getCompareDocumentPosition);
qx.core.Environment.add(G,bt.getTextContent);
qx.core.Environment.add(c,bt.getConsole);
qx.core.Environment.add(z,bt.getNaturalDimensions);
}});
})();
(function(){var j="",i="undefined",h="engine.name",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",A="'",z="htmlFor",y="longDesc",x="cellSpacing",w="frameBorder",v="='",u="useMap",t="innerText",s="innerHTML",r="tabIndex",p="dateTime",q="maxLength",n="html.element.textcontent",o="mshtml",l="cellPadding",m="browser.documentmode",k="colSpan";
qx.Class.define(e,{statics:{__ge:{names:{"class":b,"for":z,html:s,text:qx.core.Environment.get(n)?a:t,colspan:k,rowspan:d,valign:c,datetime:p,accesskey:f,tabindex:r,maxlength:q,readonly:g,longdesc:y,cellpadding:l,cellspacing:x,frameborder:w,usemap:u},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(B){var C=[];
var E=this.__ge.runtime;

for(var D in B){if(!E[D]){C.push(D,v,B[D],A);
}}return C.join(j);
},get:function(F,name){var H=this.__ge;
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
}var K=this.__ge;
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
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__dv",b="qx.ui.window.MDesktop",a="__jK";
qx.Mixin.define(b,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__jK:null,__dv:null,getWindowManager:function(){if(!this.__dv){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__dv;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__dv){this.__dv.setDesktop(null);
}j.setDesktop(this);
this.__dv=j;
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
},getWindows:function(){if(!this.__jK){this.__jK=[];
}return this.__jK;
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
qx.Class.define(r,{statics:{DEBUG:false,__hF:{},__hG:(qx.core.Environment.get(g)==b)&&qx.core.Environment.get(D)<9,__hH:qx.core.Environment.select(g,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hI:{"scale-x":i,"scale-y":i,"scale":i,"repeat":j,"no-repeat":j,"repeat-x":j,"repeat-y":j},update:function(J,K,L,M){var O=this.getTagName(L,K);

if(O!=J.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var P=this.getAttributes(K,L,M);

if(O===i){J.src=P.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(J.style.backgroundPosition!=h&&P.style.backgroundPosition===undefined){P.style.backgroundPosition=null;
}if(J.style.clip!=h&&P.style.clip===undefined){P.style.clip=null;
}var N=qx.bom.element.Style;
N.setStyles(J,P.style);
if(this.__hG){try{J.filters[v].apply();
}catch(e){}}},create:function(Q,R,S){var T=this.getTagName(R,Q);
var V=this.getAttributes(Q,R,S);
var U=qx.bom.element.Style.compile(V.style);

if(T===i){return z+V.src+l+U+p;
}else{return B+U+o;
}},getTagName:function(W,X){if(X&&this.__hG&&this.__hH[W]&&qx.lang.String.endsWith(X,F)){return j;
}return this.__hI[W];
},getAttributes:function(Y,ba,bb){if(!bb){bb={};
}
if(!bb.position){bb.position=x;
}
if((qx.core.Environment.get(g)==b)){bb.fontSize=0;
bb.lineHeight=0;
}else if((qx.core.Environment.get(g)==t)){bb.WebkitUserDrag=m;
}var bd=qx.util.ResourceManager.getInstance().getImageFormat(Y)||qx.io.ImageLoader.getFormat(Y);
var bc;
if(this.__hG&&this.__hH[ba]&&bd===q){bc=this.__hL(bb,ba,Y);
}else{if(ba===c){bc=this.__hM(bb,ba,Y);
}else if(ba===d||ba===I){bc=this.__hN(bb,ba,Y);
}else{bc=this.__hQ(bb,ba,Y);
}}return bc;
},__hJ:function(be,bf,bh){if(be.width==null&&bf!=null){be.width=bf+k;
}
if(be.height==null&&bh!=null){be.height=bh+k;
}return be;
},__hK:function(bi){var bj=qx.util.ResourceManager.getInstance().getImageWidth(bi)||qx.io.ImageLoader.getWidth(bi);
var bk=qx.util.ResourceManager.getInstance().getImageHeight(bi)||qx.io.ImageLoader.getHeight(bi);
return {width:bj,height:bk};
},__hL:function(bl,bm,bn){var bq=this.__hK(bn);
bl=this.__hJ(bl,bq.width,bq.height);
var bp=bm==f?E:c;
var bo=C+qx.util.ResourceManager.getInstance().toUri(bn)+s+bp+n;
bl.filter=bo;
bl.backgroundImage=bl.backgroundRepeat=h;
return {style:bl};
},__hM:function(br,bs,bt){var bu=qx.util.ResourceManager.getInstance().toUri(bt);
var bv=this.__hK(bt);
br=this.__hJ(br,bv.width,bv.height);
return {src:bu,style:br};
},__hN:function(bw,bx,by){var bz=qx.util.ResourceManager.getInstance();
var bC=bz.getCombinedFormat(by);
var bE=this.__hK(by);
var bA;

if(bC){var bD=bz.getData(by);
var bB=bD[4];

if(bC==a){bA=bz.toDataUri(by);
}else{bA=bz.toUri(bB);
}
if(bx===d){bw=this.__hO(bw,bD,bE.height);
}else{bw=this.__hP(bw,bD,bE.width);
}return {src:bA,style:bw};
}else{if(bx==d){bw.height=bE.height==null?null:bE.height+k;
}else if(bx==I){bw.width=bE.width==null?null:bE.width+k;
}bA=bz.toUri(by);
return {src:bA,style:bw};
}},__hO:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().getImageHeight(bG[4]);
bF.clip={top:-bG[6],height:bH};
bF.height=bI+k;
if(bF.top!=null){bF.top=(parseInt(bF.top,10)+bG[6])+k;
}else if(bF.bottom!=null){bF.bottom=(parseInt(bF.bottom,10)+bH-bI-bG[6])+k;
}return bF;
},__hP:function(bJ,bK,bL){var bM=qx.util.ResourceManager.getInstance().getImageWidth(bK[4]);
bJ.clip={left:-bK[5],width:bL};
bJ.width=bM+k;
if(bJ.left!=null){bJ.left=(parseInt(bJ.left,10)+bK[5])+k;
}else if(bJ.right!=null){bJ.right=(parseInt(bJ.right,10)+bL-bM-bK[5])+k;
}return bJ;
},__hQ:function(bN,bO,bP){var bS=qx.util.ResourceManager.getInstance();
var bX=bS.getCombinedFormat(bP);
var ca=this.__hK(bP);
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
}else{bN=this.__hJ(bN,ca.width,ca.height);
bN=this.__hR(bN,bP,bO);
return {style:bN};
}},__hR:function(cb,cc,cd){var top=null;
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
},__hS:function(ci){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ci)&&ci.indexOf(H)==-1){if(!this.__hF[ci]){qx.log.Logger.debug("Potential clipped image candidate: "+ci);
this.__hF[ci]=true;
}}},isAlphaImageLoaderEnabled:function(){return qx.bom.element.Decoration.__hG;
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__gA:[],remove:function(c){qx.lang.Array.remove(this.__gA,c);
},add:function(d){var e=this.__gA;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(f){return qx.lang.Array.contains(this.__gA,f);
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__gA;
var h;

for(var i=g.length-1;i>=0;i--){h=g[i];
g.splice(i,1);
if(j.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__jv",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__jv=this._createBlocker();
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__jv:null,_createBlocker:function(){return new qx.ui.core.Blocker(this);
},_applyBlockerColor:function(g,h){this.__jv.setColor(g);
},_applyBlockerOpacity:function(i,j){this.__jv.setOpacity(i);
},block:function(){this.__jv.block();
},isBlocked:function(){return this.__jv.isBlocked();
},unblock:function(){this.__jv.unblock();
},forceUnblock:function(){this.__jv.forceUnblock();
},blockContent:function(k){this.__jv.blockContent(k);
},isContentBlocked:function(){return this.__jv.isContentBlocked();
},unblockContent:function(){this.__jv.unblockContent();
},forceUnblockContent:function(){this.__jv.forceUnblockContent();
},getBlocker:function(){return this.__jv;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var u="help",t="contextmenu",s="changeGlobalCursor",r="engine.name",q="keypress",p="Boolean",o="root",n="",m=" !important",l="input",d="_applyGlobalCursor",k="Space",h="_applyNativeHelp",c=";",b="event.help",g="qx.ui.root.Abstract",f="abstract",i="textarea",a="String",j="*";
qx.Class.define(g,{type:f,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
this.addListener(q,this.__jM,this);
},properties:{appearance:{refine:true,init:o},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:a,nullable:true,themeable:true,apply:d,event:s},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:p,init:false,apply:h}},members:{__jL:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Environment.select(r,{"mshtml":function(v,w){},"default":function(x,y){var z=qx.bom.Stylesheet;
var A=this.__jL;

if(!A){this.__jL=A=z.createElement();
}z.removeAllRules(A);

if(x){z.addRule(A,j,qx.bom.element.Cursor.compile(x).replace(c,n)+m);
}}}),_applyNativeContextMenu:function(B,C){if(B){this.removeListener(t,this._onNativeContextMenu,this,true);
}else{this.addListener(t,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},__jM:function(e){if(e.getKeyIdentifier()!==k){return;
}var E=e.getTarget();
var D=qx.ui.core.FocusHandler.getInstance();

if(!D.isFocused(E)){return;
}var F=E.getContentElement().getNodeName();

if(F===l||F===i){return;
}e.preventDefault();
},_applyNativeHelp:function(G,H){if(qx.core.Environment.get(b)){if(H===false){qx.bom.Event.removeNativeListener(document,u,qx.lang.Function.returnFalse);
}
if(G===false){qx.bom.Event.addNativeListener(document,u,qx.lang.Function.returnFalse);
}}}},destruct:function(){this.__jL=null;
},defer:function(I,J){qx.ui.core.MChildrenHandling.remap(J);
}});
})();
(function(){var n="resize",m="engine.name",l="position",k="0px",j="webkit",i="paddingLeft",h="$$widget",g="qx.ui.root.Application",f="hidden",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(g,{extend:qx.ui.root.Abstract,construct:function(o){this.__cy=qx.dom.Node.getWindow(o);
this.__kc=o;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__cy,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__cy:null,__kc:null,_createContainerElement:function(){var p=this.__kc;
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
}}},destruct:function(){this.__cy=this.__kc=null;
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
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="resize",f="keyup",d="keypress",c="backgroundColor",b="_applyOpacity",a="Boolean",x="__jA",w="__jv",v="opacity",u="__it",t="interval",s="Tab",r="Color",q="qx.ui.root.Page",p="Number",o="qx.ui.core.Blocker",m="qx.ui.root.Application",n="_applyColor";
qx.Class.define(o,{extend:qx.core.Object,construct:function(y){qx.core.Object.call(this);
this._widget=y;
this._isPageRoot=(qx.Class.isDefined(q)&&y instanceof qx.ui.root.Page);

if(this._isPageRoot){y.addListener(g,this.__jC,this);
}
if(qx.Class.isDefined(m)&&y instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__jw=[];
this.__jx=[];
this.__jy=[];
},properties:{color:{check:r,init:null,nullable:true,apply:n,themeable:true},opacity:{check:p,init:1,apply:b,themeable:true},keepBlockerActive:{check:a,init:false}},members:{__jv:null,__jz:0,__jA:null,__jy:null,__jw:null,__jx:null,__jB:null,__it:null,_isPageRoot:false,_widget:null,__jC:function(e){var z=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:z.width,height:z.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:z.width,height:z.height});
}},_applyColor:function(A,B){var C=qx.theme.manager.Color.getInstance().resolve(A);
this.__jD(c,C);
},_applyOpacity:function(D,E){this.__jD(v,D);
},__jD:function(F,G){var H=[];
this.__jv&&H.push(this.__jv);
this.__jA&&H.push(this.__jA);

for(var i=0;i<H.length;i++){H[i].setStyle(F,G);
}},_backupActiveWidget:function(){var I=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__jw.push(I.getActive());
this.__jx.push(I.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var L=this.__jw.length;

if(L>0){var K=this.__jw[L-1];

if(K){qx.bom.Element.activate(K);
}this.__jw.pop();
}var J=this.__jx.length;

if(J>0){var K=this.__jx[J-1];

if(K){qx.bom.Element.focus(this.__jx[J-1]);
}this.__jx.pop();
}},__jE:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__jv){this.__jv=this.__jE();
this.__jv.setStyle(l,15);
this._widget.getContainerElement().add(this.__jv);
this.__jv.exclude();
}return this.__jv;
},block:function(){this.__jz++;

if(this.__jz<2){this._backupActiveWidget();
var M=this.getBlockerElement();
M.include();
M.activate();
M.addListener(h,this.__jJ,this);
M.addListener(d,this.__jI,this);
M.addListener(j,this.__jI,this);
M.addListener(f,this.__jI,this);
}},isBlocked:function(){return this.__jz>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__jz--;

if(this.__jz<1){this.__jF();
this.__jz=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__jz=0;
this.__jF();
},__jF:function(){this._restoreActiveWidget();
var N=this.getBlockerElement();
N.removeListener(h,this.__jJ,this);
N.removeListener(d,this.__jI,this);
N.removeListener(j,this.__jI,this);
N.removeListener(f,this.__jI,this);
N.exclude();
},getContentBlockerElement:function(){if(!this.__jA){this.__jA=this.__jE();
this._widget.getContentElement().add(this.__jA);
this.__jA.exclude();
}return this.__jA;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(l,O);
this.__jy.push(O);

if(this.__jy.length<2){P.include();

if(this._isPageRoot){if(!this.__it){this.__it=new qx.event.Timer(300);
this.__it.addListener(t,this.__jH,this);
}this.__it.start();
this.__jH();
}}},isContentBlocked:function(){return this.__jy.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jy.pop();
var Q=this.__jy[this.__jy.length-1];
var R=this.getContentBlockerElement();
R.setStyle(l,Q);

if(this.__jy.length<1){this.__jG();
this.__jy=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jy=[];
var S=this.getContentBlockerElement();
S.setStyle(l,null);
this.__jG();
},__jG:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__it.stop();
}},__jH:function(){var T=this._widget.getContainerElement().getDomElement();
var U=qx.dom.Node.getDocument(T);
this.getContentBlockerElement().setStyles({height:U.documentElement.scrollHeight+k,width:U.documentElement.scrollWidth+k});
},__jI:function(e){if(e.getKeyIdentifier()==s){e.stop();
}},__jJ:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(g,this.__jC,this);
}this._disposeObjects(x,w,u);
this.__jB=this.__jw=this.__jx=this._widget=this.__jy=null;
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
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__gA:{},remove:function(c){delete this.__gA[c.$$hash];
},add:function(d){this.__gA[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},isScheduled:function(e){return !!this.__gA[e.$$hash];
},flush:function(){var f=this.__gD();
for(var i=f.length-1;i>=0;i--){var g=f[i];
if(g.hasValidLayout()){continue;
}if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();
g.renderLayout(0,0,j.width,j.height);
}else{var h=g.getBounds();
g.renderLayout(h.left,h.top,h.width,h.height);
}}},getNestingLevel:function(k){var l=this.__gC;
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
},__gB:function(){var t=qx.ui.core.queue.Visibility;
this.__gC={};
var s=[];
var r=this.__gA;
var o,q;

for(var p in r){o=r[p];

if(t.isVisible(o)){q=this.getNestingLevel(o);
if(!s[q]){s[q]={};
}s[q][p]=o;
delete r[p];
}}return s;
},__gD:function(){var x=[];
var z=this.__gB();

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
},__gi:{quicktime:{plugin:[E],control:H},wmv:{plugin:[z],control:n},divx:{plugin:[q],control:w},silverlight:{plugin:[c],control:r},pdf:{plugin:[A,G],control:u}},getQuicktimeVersion:function(){var I=qx.bom.client.Plugin.__gi[f];
return qx.bom.client.Plugin.__gj(I.control,I.plugin);
},getWindowsMediaVersion:function(){var J=qx.bom.client.Plugin.__gi[h];
return qx.bom.client.Plugin.__gj(J.control,J.plugin);
},getDivXVersion:function(){var K=qx.bom.client.Plugin.__gi[g];
return qx.bom.client.Plugin.__gj(K.control,K.plugin);
},getSilverlightVersion:function(){var L=qx.bom.client.Plugin.__gi[d];
return qx.bom.client.Plugin.__gj(L.control,L.plugin);
},getPdfVersion:function(){var M=qx.bom.client.Plugin.__gi[k];
return qx.bom.client.Plugin.__gj(M.control,M.plugin);
},getQuicktime:function(){var N=qx.bom.client.Plugin.__gi[f];
return qx.bom.client.Plugin.__gk(N.control,N.plugin);
},getWindowsMedia:function(){var O=qx.bom.client.Plugin.__gi[h];
return qx.bom.client.Plugin.__gk(O.control,O.plugin);
},getDivX:function(){var P=qx.bom.client.Plugin.__gi[g];
return qx.bom.client.Plugin.__gk(P.control,P.plugin);
},getSilverlight:function(){var Q=qx.bom.client.Plugin.__gi[d];
return qx.bom.client.Plugin.__gk(Q.control,Q.plugin);
},getPdf:function(){var R=qx.bom.client.Plugin.__gi[k];
return qx.bom.client.Plugin.__gk(R.control,R.plugin);
},__gj:function(S,T){var U=qx.bom.client.Plugin.__gk(S,T);
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
}},__gk:function(bc,bd){if(qx.bom.client.Engine.getName()==e){var be=window.ActiveXObject;

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
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="0",d="hidden",c="mousedown",b="qx.ui.core.scroll.NativeScrollBar",a="PositiveNumber",y="Integer",x="__lM",w="mousemove",v="_applyMaximum",u="_applyOrientation",t="appear",s="PositiveInteger",r="mshtml",q="engine.name",p="mouseup",n="Number",o="_applyPosition",l="scrollbar",m="native";
qx.Class.define(b,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(z){qx.ui.core.Widget.call(this);
this.addState(m);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(c,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);
this.addListener(t,this._onAppear,this);
this.getContentElement().add(this._getScrollPaneElement());
if(z!=null){this.setOrientation(z);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:l},orientation:{check:[k,h],init:k,apply:u},maximum:{check:s,apply:v,init:100},position:{check:n,init:0,apply:o,event:i},singleStep:{check:y,init:20},knobFactor:{check:a,nullable:true}},members:{__lL:null,__lM:null,_getScrollPaneElement:function(){if(!this.__lM){this.__lM=new qx.html.Element();
}return this.__lM;
},renderLayout:function(A,top,B,C){var D=qx.ui.core.Widget.prototype.renderLayout.call(this,A,top,B,C);
this._updateScrollBar();
return D;
},_getContentHint:function(){var E=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__lL?100:E,maxWidth:this.__lL?null:E,minWidth:this.__lL?null:E,height:this.__lL?E:100,maxHeight:this.__lL?E:null,minHeight:this.__lL?E:null};
},_applyEnabled:function(F,G){qx.ui.core.Widget.prototype._applyEnabled.call(this,F,G);
this._updateScrollBar();
},_applyMaximum:function(H){this._updateScrollBar();
},_applyPosition:function(I){var content=this.getContentElement();

if(this.__lL){content.scrollToX(I);
}else{content.scrollToY(I);
}},_applyOrientation:function(J,K){var L=this.__lL=J===k;
this.set({allowGrowX:L,allowShrinkX:L,allowGrowY:!L,allowShrinkY:!L});

if(L){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:L?i:d,overflowY:L?d:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var N=this.__lL;
var O=this.getBounds();

if(!O){return;
}
if(this.isEnabled()){var P=N?O.width:O.height;
var M=this.getMaximum()+P;
}else{M=0;
}if((qx.core.Environment.get(q)==r)){var O=this.getBounds();
this.getContentElement().setStyles({left:N?f:g,top:N?g:f,width:(N?O.width:O.width+1)+j,height:(N?O.height+1:O.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(N?M:1)+j,height:(N?1:M)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(Q){this.setPosition(Math.max(0,Math.min(this.getMaximum(),Q)));
},scrollBy:function(R){this.scrollTo(this.getPosition()+R);
},scrollBySteps:function(S){var T=this.getSingleStep();
this.scrollBy(S*T);
},_onScroll:function(e){var V=this.getContentElement();
var U=this.__lL?V.getScrollX():V.getScrollY();
this.setPosition(U);
},_onAppear:function(e){this._applyPosition(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(x);
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
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="set",E="deepBinding",D="item",C="reset",B="' (",A="Boolean",z=") to the object '",y="Integer",x=" of object ",w="qx.data.SingleValueBinding",v="Binding property ",t="Binding from '",u="PositiveNumber",r="PositiveInteger",s="Binding does not exist!",p=").",q="Date",n=" not possible: No event available. ";
qx.Class.define(w,{statics:{__bg:{},bind:function(F,G,H,I,J){var U=this.__bi(F,G,H,I,J);
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
}else{throw new qx.core.AssertionError(v+bN+x+bM+n);
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
if((cY==c||cY==b)&&(cX==y||cX==r)){cW=parseInt(cW,10);
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
if(dl===undefined){var dk=s;
}else{var dk=t+dl[1]+B+dl[2]+z+dl[3]+B+dl[4]+p;
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
(function(){var k="popup",j="list",i="popupOpen",h="",g="mousewheel",f="PageUp",d="blur",c="mousedown",b="one",a="Escape",x="_applyMaxListHeight",w="Function",v="visible",u="changeSelection",t="middle",s="changeVisibility",r="resize",q="qx.ui.form.AbstractSelectBox",p="keypress",o="PageDown",m="mouseup",n="abstract",l="Number";
qx.Class.define(q,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:n,construct:function(){qx.ui.core.Widget.call(this);
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
D.addListener(s,this._onPopupChangeVisibility,this);
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
(function(){var e="Integer",d="interval",c="qx.event.type.Event",b="__it",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__it=new qx.event.Timer(this.getInterval());
this.__it.addListener(d,this._onInterval,this);
},events:{"interval":c},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__it:null,__op:null,start:function(){this.__it.setInterval(this.getFirstInterval());
this.__it.start();
},stop:function(){this.__it.stop();
this.__op=null;
},_onInterval:function(){this.__it.stop();

if(this.__op==null){this.__op=this.getInterval();
}this.__op=Math.max(this.getMinimum(),this.__op-this.getDecrease());
this.__it.setInterval(this.__op);
this.__it.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var e="changeStatus",d="qx.bom.webfonts.WebFont",c="_applySources",b="",a="qx.event.type.Data";
qx.Class.define(d,{extend:qx.bom.Font,events:{"changeStatus":a},properties:{sources:{nullable:true,apply:c}},members:{__iU:null,_applySources:function(f,g){var k=[];

for(var i=0,l=f.length;i<l;i++){var j=this._quoteFontFamily(f[i].family);
k.push(j);
var h=f[i].source;
qx.bom.webfonts.Manager.getInstance().require(j,h,this._onWebFontChangeStatus,this);
}this.setFamily(k.concat(this.getFamily()));
},_onWebFontChangeStatus:function(m){var n=m.getData();
this.fireDataEvent(e,n);
},_quoteFontFamily:function(o){return o.replace(/["']/g,b);
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
(function(){var d="-",c="qx.bom.Style",b="string",a="";
qx.Bootstrap.define(c,{statics:{VENDOR_PREFIXES:["Webkit","Moz","O","ms","Khtml"],getPropertyName:function(e){var f=document.documentElement.style;

if(f[e]!==undefined){return e;
}
for(var i=0,l=this.VENDOR_PREFIXES.length;i<l;i++){var g=this.VENDOR_PREFIXES[i]+qx.lang.String.firstUp(e);

if(f[g]!==undefined){return g;
}}return null;
},getAppliedStyle:function(h,j,k,m){var n=(m!==false)?[null].concat(this.VENDOR_PREFIXES):[null];

for(var i=0,l=n.length;i<l;i++){var o=n[i]?d+n[i].toLowerCase()+d+k:k;
try{h.style[j]=o;

if(typeof h.style[j]==b&&h.style[j]!==a){return o;
}}catch(p){}}return null;
}}});
})();
(function(){var k="css.overflowxy",j="hidden",i="-moz-scrollbars-none",h="",g="engine.name",f="gecko",e="overflow",d="overflowY",b="engine.version",a="none",B="scroll",A="borderLeftStyle",z="borderRightStyle",y="div",x="borderRightWidth",w="overflow-y",v="borderLeftWidth",u="-moz-scrollbars-vertical",r=":",q="100px",o="overflow:",p="qx.bom.element.Overflow",m="overflow-x",n="overflowX",l=";";
qx.Class.define(p,{statics:{DEFAULT_SCROLLBAR_WIDTH:14,__de:null,getScrollbarWidth:function(){if(this.__de!==null){return this.__de;
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
this.__de=c;
document.body.removeChild(t);
return this.__de;
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
(function(){var j="",i="engine.name",h="float",g="browser.documentmode",f="mshtml",e="style",d="css.float",c="px",b="css.appearance",a="pixelRight",w="css.userselect",v="css.boxsizing",u="css.textoverflow",t="pixelHeight",s=":",r="pixelTop",q="css.borderimage",p="pixelLeft",o="css.usermodify",n="qx.bom.element.Style",l="pixelBottom",m="pixelWidth",k=";";
qx.Class.define(n,{statics:{__dh:function(){var y={"appearance":qx.core.Environment.get(b),"userSelect":qx.core.Environment.get(w),"textOverflow":qx.core.Environment.get(u),"borderImage":qx.core.Environment.get(q),"float":qx.core.Environment.get(d),"userModify":qx.core.Environment.get(o),"boxSizing":qx.core.Environment.get(v)};
this.__di={};

for(var x in qx.lang.Object.clone(y)){if(!y[x]){delete y[x];
}else{this.__di[x]=x==h?h:qx.lang.String.hyphenate(y[x]);
}}this.__dj=y;
},__dk:{width:m,height:t,left:p,right:a,top:r,bottom:l},__dl:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(z){var B=[];
var D=this.__dl;
var C=this.__di;
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
}},isPropertySupported:function(H){return (this.__dl[H]||this.__dj[H]||H in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(I,name,J,K){name=this.__dj[name]||name;
if(K!==false&&this.__dl[name]){return this.__dl[name].set(I,J);
}else{I.style[name]=J!==null?J:j;
}},setStyles:function(L,M,N){var Q=this.__dj;
var S=this.__dl;
var O=L.style;

for(var R in M){var P=M[R];
var name=Q[R]||R;

if(P===undefined){if(N!==false&&S[name]){S[name].reset(L);
}else{O[name]=j;
}}else{if(N!==false&&S[name]){S[name].set(L,P);
}else{O[name]=P!==null?P:j;
}}}},reset:function(T,name,U){name=this.__dj[name]||name;
if(U!==false&&this.__dl[name]){return this.__dl[name].reset(T);
}else{T.style[name]=j;
}},get:qx.core.Environment.select(i,{"mshtml":function(V,name,W,X){name=this.__dj[name]||name;
if(X!==false&&this.__dl[name]){return this.__dl[name].get(V,W);
}if(!V.currentStyle){return V.style[name]||j;
}switch(W){case this.LOCAL_MODE:return V.style[name]||j;
case this.CASCADED_MODE:return V.currentStyle[name]||j;
default:var bc=V.currentStyle[name]||j;
if(/^-?[\.\d]+(px)?$/i.test(bc)){return bc;
}var bb=this.__dk[name];

if(bb){var Y=V.style[name];
V.style[name]=bc||0;
var ba=V.style[bb]+c;
V.style[name]=Y;
return ba;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bc)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bc;
}},"default":function(bd,name,be,bf){name=this.__dj[name]||name;
if(bf!==false&&this.__dl[name]){return this.__dl[name].get(bd,be);
}switch(be){case this.LOCAL_MODE:return bd.style[name]||j;
case this.CASCADED_MODE:if(bd.currentStyle){return bd.currentStyle[name]||j;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bg=qx.dom.Node.getDocument(bd);
var bh=bg.defaultView.getComputedStyle(bd,null);
return bh?bh[name]:j;
}}})},defer:function(bi){bi.__dh();
}});
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
qx.Class.define(b,{statics:{__gA:[],__cP:{},remove:function(c){delete this.__cP[c.$$hash];
qx.lang.Array.remove(this.__gA,c);
},isVisible:function(d){return this.__cP[d.$$hash]||false;
},__gL:function(e){var g=this.__cP;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__gL(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(j){var k=this.__gA;

if(qx.lang.Array.contains(k,j)){return;
}k.unshift(j);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var o=this.__gA;
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
if(p[n]==null){this.__gL(m);
}if(p[n]&&p[n]!=l[n]){m.checkAppearanceNeeds();
}}this.__gA=[];
}}});
})();
(function(){var r="left",q="top",p="_applyLayoutChange",o="hAlign",n="flex",m="vAlign",h="Integer",g="minWidth",f="width",e="minHeight",b="qx.ui.layout.Grid",d="height",c="maxHeight",a="maxWidth";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(s,t){qx.ui.layout.Abstract.call(this);
this.__lP=[];
this.__lQ=[];

if(s){this.setSpacingX(s);
}
if(t){this.setSpacingY(t);
}},properties:{spacingX:{check:h,init:0,apply:p},spacingY:{check:h,init:0,apply:p}},members:{__lR:null,__lP:null,__lQ:null,__lS:null,__lT:null,__lU:null,__lV:null,__lW:null,__lX:null,verifyLayoutProperty:null,__lY:function(){var B=[];
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
}}this.__lR=B;
this.__lS=A;
this.__lT=C;
this.__lU=w;
this.__lV=v;
this.__lW=null;
this.__lX=null;
delete this._invalidChildrenCache;
},_setRowData:function(G,H,I){var J=this.__lP[G];

if(!J){this.__lP[G]={};
this.__lP[G][H]=I;
}else{J[H]=I;
}},_setColumnData:function(K,L,M){var N=this.__lQ[K];

if(!N){this.__lQ[K]={};
this.__lQ[K][L]=M;
}else{N[L]=M;
}},setSpacing:function(O){this.setSpacingY(O);
this.setSpacingX(O);
return this;
},setColumnAlign:function(P,Q,R){this._setColumnData(P,o,Q);
this._setColumnData(P,m,R);
this._applyLayoutChange();
return this;
},getColumnAlign:function(S){var T=this.__lQ[S]||{};
return {vAlign:T.vAlign||q,hAlign:T.hAlign||r};
},setRowAlign:function(U,V,W){this._setRowData(U,o,V);
this._setRowData(U,m,W);
this._applyLayoutChange();
return this;
},getRowAlign:function(X){var Y=this.__lP[X]||{};
return {vAlign:Y.vAlign||q,hAlign:Y.hAlign||r};
},getCellWidget:function(ba,bb){if(this._invalidChildrenCache){this.__lY();
}var ba=this.__lR[ba]||{};
return ba[bb]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__lY();
}return this.__lU+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__lY();
}return this.__lV+1;
},getCellAlign:function(bc,bd){var bj=q;
var bh=r;
var bi=this.__lP[bc];
var bf=this.__lQ[bd];
var be=this.__lR[bc][bd];

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
},getColumnFlex:function(bm){var bn=this.__lQ[bm]||{};
return bn.flex!==undefined?bn.flex:0;
},setRowFlex:function(bo,bp){this._setRowData(bo,n,bp);
this._applyLayoutChange();
return this;
},getRowFlex:function(bq){var br=this.__lP[bq]||{};
var bs=br.flex!==undefined?br.flex:0;
return bs;
},setColumnMaxWidth:function(bt,bu){this._setColumnData(bt,a,bu);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bv){var bw=this.__lQ[bv]||{};
return bw.maxWidth!==undefined?bw.maxWidth:Infinity;
},setColumnWidth:function(bx,by){this._setColumnData(bx,f,by);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bz){var bA=this.__lQ[bz]||{};
return bA.width!==undefined?bA.width:null;
},setColumnMinWidth:function(bB,bC){this._setColumnData(bB,g,bC);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bD){var bE=this.__lQ[bD]||{};
return bE.minWidth||0;
},setRowMaxHeight:function(bF,bG){this._setRowData(bF,c,bG);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bH){var bI=this.__lP[bH]||{};
return bI.maxHeight||Infinity;
},setRowHeight:function(bJ,bK){this._setRowData(bJ,d,bK);
this._applyLayoutChange();
return this;
},getRowHeight:function(bL){var bM=this.__lP[bL]||{};
return bM.height!==undefined?bM.height:null;
},setRowMinHeight:function(bN,bO){this._setRowData(bN,e,bO);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bP){var bQ=this.__lP[bP]||{};
return bQ.minHeight||0;
},__ma:function(bR){var bV=bR.getSizeHint();
var bU=bR.getMarginLeft()+bR.getMarginRight();
var bT=bR.getMarginTop()+bR.getMarginBottom();
var bS={height:bV.height+bT,width:bV.width+bU,minHeight:bV.minHeight+bT,minWidth:bV.minWidth+bU,maxHeight:bV.maxHeight+bT,maxWidth:bV.maxWidth+bU};
return bS;
},_fixHeightsRowSpan:function(bW){var ce=this.getSpacingY();

for(var i=0,l=this.__lT.length;i<l;i++){var cl=this.__lT[i];
var ch=this.__ma(cl);
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

for(var i=0,l=this.__lS.length;i<l;i++){var ct=this.__lS[i];
var cv=this.__ma(ct);
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
}}}},_getRowHeights:function(){if(this.__lW!=null){return this.__lW;
}var cP=[];
var cI=this.__lU;
var cH=this.__lV;

for(var cQ=0;cQ<=cI;cQ++){var cJ=0;
var cL=0;
var cK=0;

for(var cO=0;cO<=cH;cO++){var cG=this.__lR[cQ][cO];

if(!cG){continue;
}var cM=cG.getLayoutProperties().rowSpan||0;

if(cM>1){continue;
}var cN=this.__ma(cG);

if(this.getRowFlex(cQ)>0){cJ=Math.max(cJ,cN.minHeight);
}else{cJ=Math.max(cJ,cN.height);
}cL=Math.max(cL,cN.height);
}var cJ=Math.max(cJ,this.getRowMinHeight(cQ));
var cK=this.getRowMaxHeight(cQ);

if(this.getRowHeight(cQ)!==null){var cL=this.getRowHeight(cQ);
}else{var cL=Math.max(cJ,Math.min(cL,cK));
}cP[cQ]={minHeight:cJ,height:cL,maxHeight:cK};
}
if(this.__lT.length>0){this._fixHeightsRowSpan(cP);
}this.__lW=cP;
return cP;
},_getColWidths:function(){if(this.__lX!=null){return this.__lX;
}var cV=[];
var cS=this.__lV;
var cU=this.__lU;

for(var db=0;db<=cS;db++){var cY=0;
var cX=0;
var cT=Infinity;

for(var dc=0;dc<=cU;dc++){var cR=this.__lR[dc][db];

if(!cR){continue;
}var cW=cR.getLayoutProperties().colSpan||0;

if(cW>1){continue;
}var da=this.__ma(cR);

if(this.getColumnFlex(db)>0){cX=Math.max(cX,da.minWidth);
}else{cX=Math.max(cX,da.width);
}cY=Math.max(cY,da.width);
}cX=Math.max(cX,this.getColumnMinWidth(db));
cT=this.getColumnMaxWidth(db);

if(this.getColumnWidth(db)!==null){var cY=this.getColumnWidth(db);
}else{var cY=Math.max(cX,Math.min(cY,cT));
}cV[db]={minWidth:cX,width:cY,maxWidth:cT};
}
if(this.__lS.length>0){this._fixWidthsColSpan(cV);
}this.__lX=cV;
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
},renderLayout:function(ds,dt){if(this._invalidChildrenCache){this.__lY();
}var dH=qx.ui.layout.Util;
var dv=this.getSpacingX();
var dB=this.getSpacingY();
var dM=this._getColWidths();
var dL=this._getColumnFlexOffsets(ds);
var dw=[];
var dO=this.__lV;
var du=this.__lU;
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

for(var dC=0;dC<=du;dC++){var dJ=this.__lR[dC][dP];
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
this.__lX=null;
this.__lW=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lY();
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
}},destruct:function(){this.__lR=this.__lP=this.__lQ=this.__lS=this.__lT=this.__lX=this.__lW=null;
}});
})();
(function(){var j="borderTopWidth",i="borderLeftWidth",h="engine.name",g="scroll",f="engine.version",e="marginTop",d="marginLeft",c="border-box",b="borderBottomWidth",a="borderRightWidth",D="auto",C="padding",B="browser.quirksmode",A="qx.bom.element.Location",z="paddingLeft",y="static",x="marginBottom",w="visible",v="BODY",u="paddingBottom",q="paddingTop",r="gecko",o="marginRight",p="mshtml",m="position",n="margin",k="overflow",l="paddingRight",s="browser.documentmode",t="border";
qx.Class.define(A,{statics:{__gl:function(E,F){return qx.bom.element.Style.get(E,F,qx.bom.element.Style.COMPUTED_MODE,false);
},__gm:function(G,H){return parseInt(qx.bom.element.Style.get(G,H,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gn:function(I){var K=0,top=0;
var J=qx.dom.Node.getWindow(I);
K-=qx.bom.Viewport.getScrollLeft(J);
top-=qx.bom.Viewport.getScrollTop(J);
return {left:K,top:top};
},__go:qx.core.Environment.select(h,{"mshtml":function(L){var N=qx.dom.Node.getDocument(L);
var M=N.body;
var O=0;
var top=0;
O-=M.clientLeft+N.documentElement.clientLeft;
top-=M.clientTop+N.documentElement.clientTop;

if(!qx.core.Environment.get(B)){O+=this.__gm(M,i);
top+=this.__gm(M,j);
}return {left:O,top:top};
},"webkit":function(P){var R=qx.dom.Node.getDocument(P);
var Q=R.body;
var S=Q.offsetLeft;
var top=Q.offsetTop;
if(parseFloat(qx.core.Environment.get(f))<530.17){S+=this.__gm(Q,i);
top+=this.__gm(Q,j);
}return {left:S,top:top};
},"gecko":function(T){var U=qx.dom.Node.getDocument(T).body;
var V=U.offsetLeft;
var top=U.offsetTop;
if(parseFloat(qx.core.Environment.get(f))<1.9){V+=this.__gm(U,d);
top+=this.__gm(U,e);
}if(qx.bom.element.BoxSizing.get(U)!==c){V+=this.__gm(U,i);
top+=this.__gm(U,j);
}return {left:V,top:top};
},"default":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
return {left:Y,top:top};
}}),__gp:qx.core.Environment.select(h,{"gecko":function(ba){if(ba.getBoundingClientRect){var bd=ba.getBoundingClientRect();
var be=Math.round(bd.left);
var top=Math.round(bd.top);
}else{var be=0;
var top=0;
var bb=qx.dom.Node.getDocument(ba).body;
var bc=qx.bom.element.BoxSizing;

if(bc.get(ba)!==c){be-=this.__gm(ba,i);
top-=this.__gm(ba,j);
}
while(ba&&ba!==bb){be+=ba.offsetLeft;
top+=ba.offsetTop;
if(bc.get(ba)!==c){be+=this.__gm(ba,i);
top+=this.__gm(ba,j);
}if(ba.parentNode&&this.__gl(ba.parentNode,k)!=w){be+=this.__gm(ba.parentNode,i);
top+=this.__gm(ba.parentNode,j);
}ba=ba.offsetParent;
}}return {left:be,top:top};
},"default":function(bf){var bh=qx.dom.Node.getDocument(bf);
if(bf.getBoundingClientRect){var bi=bf.getBoundingClientRect();
var bj=bi.left;
var top=bi.top;
}else{var bj=bf.offsetLeft;
var top=bf.offsetTop;
bf=bf.offsetParent;
var bg=bh.body;
while(bf&&bf!=bg){bj+=bf.offsetLeft;
top+=bf.offsetTop;
bj+=this.__gm(bf,i);
top+=this.__gm(bf,j);
bf=bf.offsetParent;
}}return {left:bj,top:top};
}}),get:function(bk,bl){if(bk.tagName==v){var location=this.__gq(bk);
var bs=location.left;
var top=location.top;
}else{var bm=this.__go(bk);
var br=this.__gp(bk);
var scroll=this.__gn(bk);
var bs=br.left+bm.left-scroll.left;
var top=br.top+bm.top-scroll.top;
}var bn=bs+bk.offsetWidth;
var bo=top+bk.offsetHeight;

if(bl){if(bl==C||bl==g){var bp=qx.bom.element.Overflow.getX(bk);

if(bp==g||bp==D){bn+=bk.scrollWidth-bk.offsetWidth+this.__gm(bk,i)+this.__gm(bk,a);
}var bq=qx.bom.element.Overflow.getY(bk);

if(bq==g||bq==D){bo+=bk.scrollHeight-bk.offsetHeight+this.__gm(bk,j)+this.__gm(bk,b);
}}
switch(bl){case C:bs+=this.__gm(bk,z);
top+=this.__gm(bk,q);
bn-=this.__gm(bk,l);
bo-=this.__gm(bk,u);
case g:bs-=bk.scrollLeft;
top-=bk.scrollTop;
bn-=bk.scrollLeft;
bo-=bk.scrollTop;
case t:bs+=this.__gm(bk,i);
top+=this.__gm(bk,j);
bn-=this.__gm(bk,a);
bo-=this.__gm(bk,b);
break;
case n:bs-=this.__gm(bk,d);
top-=this.__gm(bk,e);
bn+=this.__gm(bk,o);
bo+=this.__gm(bk,x);
break;
}}return {left:bs,top:top,right:bn,bottom:bo};
},__gq:function(bt){var top=bt.offsetTop;
var bu=bt.offsetLeft;

if(qx.core.Environment.get(h)!==p||!((parseFloat(qx.core.Environment.get(f))<8||qx.core.Environment.get(s)<8)&&!qx.core.Environment.get(B))){top+=this.__gm(bt,e);
bu+=this.__gm(bt,d);
}
if(qx.core.Environment.get(h)===r){top+=this.__gm(bt,i);
bu+=this.__gm(bt,j);
}return {left:bu,top:top};
},getLeft:function(bv,bw){return this.get(bv,bw).left;
},getTop:function(bx,by){return this.get(bx,by).top;
},getRight:function(bz,bA){return this.get(bz,bA).right;
},getBottom:function(bB,bC){return this.get(bB,bC).bottom;
},getRelative:function(bD,bE,bF,bG){var bI=this.get(bD,bF);
var bH=this.get(bE,bG);
return {left:bI.left-bH.left,top:bI.top-bH.top,right:bI.right-bH.right,bottom:bI.bottom-bH.bottom};
},getPosition:function(bJ){return this.getRelative(bJ,this.getOffsetParent(bJ));
},getOffsetParent:function(bK){var bM=bK.offsetParent||document.body;
var bL=qx.bom.element.Style;

while(bM&&(!/^body|html$/i.test(bM.tagName)&&bL.get(bM,m)===y)){bM=bM.offsetParent;
}return bM;
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
(function(){var d="$$theme_",c="$$user_",b="$$init_",a="qx.util.PropertyUtil";
qx.Class.define(a,{statics:{getProperties:function(e){return e.$$properties;
},getAllProperties:function(f){var i={};
var j=f;
while(j!=qx.core.Object){var h=this.getProperties(j);

for(var g in h){i[g]=h[g];
}j=j.superclass;
}return i;
},getUserValue:function(k,l){return k[c+l];
},setUserValue:function(m,n,o){m[c+n]=o;
},deleteUserValue:function(p,q){delete (p[c+q]);
},getInitValue:function(r,s){return r[b+s];
},setInitValue:function(t,u,v){t[b+u]=v;
},deleteInitValue:function(w,x){delete (w[b+x]);
},getThemeValue:function(y,z){return y[d+z];
},setThemeValue:function(A,B,C){A[d+B]=C;
},deleteThemeValue:function(D,E){delete (D[d+E]);
},setThemed:function(F,G,H){var I=qx.core.Property.$$method.setThemed;
F[I[G]](H);
},resetThemed:function(J,K){var L=qx.core.Property.$$method.resetThemed;
J[L[K]]();
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
this.__hw=qx.$$translations||{};
this.__hx=qx.$$locales||{};
var m=qx.core.Environment.get(j);
var n=qx.core.Environment.get(e);

if(n!==k){m+=l+n;
}this.__hy=m;
this.setLocale(m||this.__hz);
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
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__hz:f,__hA:null,__hB:null,__hw:null,__hx:null,__hy:null,getLanguage:function(){return this.__hB;
},getTerritory:function(){return this.getLocale().split(l)[1]||k;
},getAvailableLocales:function(B){var D=[];

for(var C in this.__hx){if(C!=this.__hz){if(this.__hx[C]===null&&!B){continue;
}D.push(C);
}}return D;
},__hC:function(E){var G;

if(E==null){return null;
}var F=E.indexOf(l);

if(F==-1){G=E;
}else{G=E.substring(0,F);
}return G;
},_applyLocale:function(H,I){this.__hA=H;
this.__hB=this.__hC(H);
},addTranslation:function(J,K){var L=this.__hw;

if(L[J]){for(var M in K){L[J][M]=K[M];
}}else{L[J]=K;
}},addLocale:function(N,O){var P=this.__hx;

if(P[N]){for(var Q in O){P[N][Q]=O[Q];
}}else{P[N]=O;
}},translate:function(R,S,T){var U=this.__hw;
return this.__hD(U,R,S,T);
},localize:function(V,W,X){var Y=this.__hx;
return this.__hD(Y,V,W,X);
},__hD:function(ba,bb,bc,bd){var be;

if(!ba){return bb;
}
if(bd){var bg=this.__hC(bd);
}else{bd=this.__hA;
bg=this.__hB;
}if(!be&&ba[bd]){be=ba[bd][bb];
}if(!be&&ba[bg]){be=ba[bg][bb];
}if(!be&&ba[this.__hz]){be=ba[this.__hz][bb];
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
}},destruct:function(){this.__hw=this.__hx=null;
}});
})();
(function(){var j="css.textoverflow",i="html.xul",h="auto",g="0",f="inherit",e="text",d="value",c="",b="hidden",a="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",B="nowrap",A="div",z="normal",y="engine.name",x="block",w="label",v="px",u="crop",t="gecko",s="end",q="100%",r="visible",o="qx.bom.Label",p="ellipsis",m="engine.version",n="mshtml",k="-1000px",l="absolute";
qx.Class.define(o,{statics:{__ls:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__lt:function(){var C=this.__lv(false);
document.body.insertBefore(C,document.body.firstChild);
return this._textElement=C;
},__lu:function(){var D=this.__lv(true);
document.body.insertBefore(D,document.body.firstChild);
return this._htmlElement=D;
},__lv:function(E){var F=qx.bom.Element.create(A);
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

for(var I in this.__ls){G[I]=f;
}F.appendChild(H);
}}return F;
},__lw:function(J){var K={};

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
for(var Q in this.__ls){P.style[Q]=f;
}P.setAttribute(u,s);
N.appendChild(P);
}else{qx.bom.element.Style.setStyles(N,this.__lw(L));
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
}},getHtmlSize:function(content,U,V){var W=this._htmlElement||this.__lu();
W.style.width=V!=undefined?V+v:h;
W.innerHTML=content;
return this.__lx(W,U);
},getTextSize:function(X,Y){var ba=this._textElement||this.__lt();

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){ba.firstChild.setAttribute(d,X);
}else{qx.bom.element.Attribute.set(ba,e,X);
}return this.__lx(ba,Y);
},__lx:function(bb,bc){var bd=this.__ls;

if(!bc){bc={};
}
for(var be in bd){bb.style[be]=bc[be]||c;
}var bf=qx.bom.element.Dimension.getSize(bb);
if((qx.core.Environment.get(y)==t)){bf.width++;
}if((qx.core.Environment.get(y)==n)&&parseFloat(qx.core.Environment.get(m))>=9){bf.width++;
}return bf;
}}});
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
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__eG:null,__eH:null,__eI:null,__eJ:null,__eK:null,__eL:null,__eM:null,__eN:null,__eO:null,__eP:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
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
}},tryActivate:function(S){var T=this.__fe(S);

if(T){this.setActive(T);
}},__em:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__eQ:function(){if(this._windowFocused){this._windowFocused=false;
this.__em(this._window,null,g,false);
}},__eR:function(){if(!this._windowFocused){this._windowFocused=true;
this.__em(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eI=qx.lang.Function.listener(this.__eW,this);
this.__eJ=qx.lang.Function.listener(this.__eV,this);
this.__eK=qx.lang.Function.listener(this.__eS,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.addNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.addNativeListener(this._window,g,this.__eJ,true);
qx.bom.Event.addNativeListener(this._window,y,this.__eK,true);
},"mshtml":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eM=qx.lang.Function.listener(this.__eT,this);
this.__eN=qx.lang.Function.listener(this.__eU,this);
this.__eL=qx.lang.Function.listener(this.__fb,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG);
qx.bom.Event.addNativeListener(this._document,h,this.__eH);
qx.bom.Event.addNativeListener(this._document,b,this.__eM);
qx.bom.Event.addNativeListener(this._document,a,this.__eN);
qx.bom.Event.addNativeListener(this._document,d,this.__eL);
},"webkit":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eN=qx.lang.Function.listener(this.__eU,this);
this.__eI=qx.lang.Function.listener(this.__eW,this);
this.__eJ=qx.lang.Function.listener(this.__eV,this);
this.__eL=qx.lang.Function.listener(this.__fb,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.addNativeListener(this._document,d,this.__eL,false);
qx.bom.Event.addNativeListener(this._window,c,this.__eN,true);
qx.bom.Event.addNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.addNativeListener(this._window,g,this.__eJ,true);
},"opera":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eM=qx.lang.Function.listener(this.__eT,this);
this.__eN=qx.lang.Function.listener(this.__eU,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.addNativeListener(this._window,z,this.__eM,true);
qx.bom.Event.addNativeListener(this._window,c,this.__eN,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__eJ,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__eK,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH);
qx.bom.Event.removeNativeListener(this._document,b,this.__eM);
qx.bom.Event.removeNativeListener(this._document,a,this.__eN);
qx.bom.Event.removeNativeListener(this._document,d,this.__eL);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__eL,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__eN,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__eJ,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__eM,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__eN,true);
}}),__eS:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__ff(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__eT:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__eR();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__fd(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__eR();

if(this.__eO){this.setFocus(this.__eO);
delete this.__eO;
}
if(this.__eP){this.setActive(this.__eP);
delete this.__eP;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__ff(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__eU:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__eQ();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__eQ();
this.__eO=this.getFocus();
this.__eP=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__eV:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__eQ();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__eQ();
this.__eO=this.getFocus();
this.__eP=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__eW:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__eR();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__eR();

if(this.__eO){this.setFocus(this.__eO);
delete this.__eO;
}
if(this.__eP){this.setActive(this.__eP);
delete this.__eP;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__eX:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__fd(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__fd(bB);

if(bA){if(!this.__ff(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__ff(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__fd(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__fd(bK);

if(!this.__ff(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__eY:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__fa(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__fa(bQ));
},"default":null})),__fa:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__fb:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__ff(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__fc:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__fd:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__fc(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__fe:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__ff:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__em(cg,cf,v,true);
}
if(cf){this.__em(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__em(ci,ch,a,true);
}
if(ch){this.__em(ch,ci,b,true);
}if(ci){this.__em(ci,ch,g,false);
}
if(ch){this.__em(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fg=null;
},defer:function(cj){qx.event.Registration.addHandler(cj);
var ck=cj.FOCUSABLE_ELEMENTS;

for(var cl in ck){ck[cl.toUpperCase()]=1;
}}});
})();
(function(){var d="event.pointer",c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(e,f){var g={position:a,top:0,left:0};

if(qx.core.Environment.get(d)){g.pointerEvents=c;
}qx.html.Element.call(this,null,g);
this.__gr=e;
this.__cq=f||e.toHashCode();
this.useMarkup(e.getMarkup());
},members:{__cq:null,__gr:null,getId:function(){return this.__cq;
},getDecorator:function(){return this.__gr;
},resize:function(h,i){this.__gr.resize(this.getDomElement(),h,i);
},tint:function(j){this.__gr.tint(this.getDomElement(),j);
},getInsets:function(){return this.__gr.getInsets();
}},destruct:function(){this.__gr=null;
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
(function(){var p="success",o="fail",n="mshtml",m="complete",l="error",k="load",j="opera",i="loaded",h="readystatechange",g="head",c="webkit",f="script",d="qx.io.ScriptLoader",b="text/javascript",a="abort";
qx.Bootstrap.define(d,{construct:function(){this.__zP=qx.Bootstrap.bind(this.__zS,this);
this.__zQ=document.createElement(f);
},statics:{TIMEOUT:15},members:{__zR:null,__sv:null,__bD:null,__bE:null,__zP:null,__zQ:null,load:function(q,r,s){if(this.__zR){throw new Error("Another request is still running!");
}this.__zR=true;
this.__sv=false;
var t=document.getElementsByTagName(g)[0];
var u=this.__zQ;
this.__bD=r||null;
this.__bE=s||window;
u.type=b;
u.onerror=u.onload=u.onreadystatechange=this.__zP;
var self=this;
if(qx.bom.client.Engine.getName()===j&&this._getTimeout()>0){setTimeout(function(){self.dispose(o);
},this._getTimeout()*1000);
}u.src=q;
setTimeout(function(){t.appendChild(u);
},0);
},abort:function(){if(this.__zR){this.dispose(a);
}},dispose:function(status){if(this.__sv){return;
}this.__sv=true;
var x=this.__zQ;
x.onerror=x.onload=x.onreadystatechange=null;
var w=x.parentNode;

if(w){w.removeChild(x);
}delete this.__zR;
if(this.__bD){var v=qx.bom.client.Engine.getName();

if(v==n||v==c){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__bD.call(self.__bE,status);
delete self.__bD;
}),0);
}else{this.__bD.call(this.__bE,status);
delete this.__bD;
}}},_getTimeout:function(){return qx.io.ScriptLoader.TIMEOUT;
},__zS:qx.event.GlobalError.observeMethod(function(e){var y=qx.bom.client.Engine.getName();
if(y==n){var z=this.__zQ.readyState;

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
(function(){var c="function",b="qx.Part",a="complete";
qx.Bootstrap.define(b,{construct:function(d){var e=d.parts[d.boot][0];
this.__Bh=d;
this.__Bi={};
this.__Bj={};
this.__Bk={};
this.__Bl={};

for(var j in d.packages){var h=new qx.io.part.Package(this.__Bo(d.packages[j].uris),j,j==e);
this.__Bl[j]=h;
}this.__Bm={};
var g=d.parts;
var f=d.closureParts||{};

for(var name in g){var m=g[name];
var l=[];

for(var i=0;i<m.length;i++){l.push(this.__Bl[m[i]]);
}if(f[name]){var k=new qx.io.part.ClosurePart(name,l,this);
}else{var k=new qx.io.part.Part(name,l,this);
}this.__Bm[name]=k;
}},statics:{TIMEOUT:7500,getInstance:function(){if(!this.$$instance){this.$$instance=new this(qx.$$loader);
}return this.$$instance;
},require:function(n,o,self){this.getInstance().require(n,o,self);
},preload:function(p){this.getInstance().preload(p);
},$$notifyLoad:function(q,r){this.getInstance().saveClosure(q,r);
}},members:{__Bh:null,__Bl:null,__Bm:null,__Bk:null,addToPackage:function(s){this.__Bl[s.getId()]=s;
},addClosurePackageListener:function(t,u){var v=t.getId();

if(!this.__Bk[v]){this.__Bk[v]=[];
}this.__Bk[v].push(u);
},saveClosure:function(w,x){var z=this.__Bl[w];
if(!z){throw new Error("Package not available: "+w);
}z.saveClosure(x);
var y=this.__Bk[w];

if(!y){return;
}
for(var i=0;i<y.length;i++){y[i](a,w);
}this.__Bk[w]=[];
},getParts:function(){return this.__Bm;
},require:function(A,B,self){var B=B||function(){};
var self=self||window;

if(qx.Bootstrap.isString(A)){A=[A];
}var E=[];

for(var i=0;i<A.length;i++){E.push(this.__Bm[A[i]]);
}var D=0;
var C=function(){D+=1;
if(D>=E.length){var F=[];

for(var i=0;i<E.length;i++){F.push(E[i].getReadyState());
}B.call(self,F);
}};

for(var i=0;i<E.length;i++){E[i].load(C,this);
}},preload:function(G,H,self){if(qx.Bootstrap.isString(G)){G=[G];
}var I=0;

for(var i=0;i<G.length;i++){this.__Bm[G[i]].preload(function(){I++;

if(I>=G.length){var J=[];

for(var i=0;i<G.length;i++){J.push(this.__Bm[G[i]].getReadyState());
}
if(H){H.call(self,J);
}}},this);
}},__Bn:function(){var K=this.__Bh.packages;
var L=[];

for(var M in K){L.push(this.__Bo(K[M].uris));
}return L;
},__Bo:qx.$$loader.decodeUris,__Bi:null,addPartListener:function(N,O){var P=N.getName();

if(!this.__Bi[P]){this.__Bi[P]=[];
}this.__Bi[P].push(O);
},onpart:null,notifyPartResult:function(Q){var S=Q.getName();
var R=this.__Bi[S];

if(R){for(var i=0;i<R.length;i++){R[i](Q.getReadyState());
}this.__Bi[S]=[];
}
if(typeof this.onpart==c){this.onpart(Q);
}},__Bj:null,addPackageListener:function(T,U){var V=T.getId();

if(!this.__Bj[V]){this.__Bj[V]=[];
}this.__Bj[V].push(U);
},notifyPackageResult:function(W){var Y=W.getId();
var X=this.__Bj[Y];

if(!X){return;
}
for(var i=0;i<X.length;i++){X[i](W.getReadyState());
}this.__Bj[Y]=[];
}}});
})();
(function(){var f="mousedown",d="__nt",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nt=[];
qx.event.Registration.addListener(document.documentElement,f,this.__nv,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__nt:null,add:function(g){this.__nt.push(g);
this.__nu();
},remove:function(h){if(this.__nt){qx.lang.Array.remove(this.__nt,h);
this.__nu();
}},hideAll:function(){var j;
var k=this.__nt;

if(k){for(var i=0,l=k.length;i<l;i++){var j=k[i];
j.getAutoHide()&&j.exclude();
}}},__nu:function(){var m=1e7;

for(var i=0;i<this.__nt.length;i++){this.__nt[i].setZIndex(m++);
}},__nv:function(e){var o=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var p=this.__nt;

for(var i=0;i<p.length;i++){var n=p[i];

if(!n.getAutoHide()||o==n||qx.ui.core.Widget.contains(n,o)){continue;
}n.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__nv,this,true);
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
},__js:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(r);
var u=parseInt(s.get(r,d)||i,10);
var x=parseInt(s.get(r,e)||i,10);

if(this.__js[t]){var w=r.clientWidth;

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

if(this.__js[C]){return y.clientHeight-B-A;
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
}this.__jm=this._getRequestedHelpers();
},statics:{COMPARISON_FONTS:{sans:["Arial","Helvetica","sans-serif"],serif:["Times New Roman","Georgia","serif"]},HELPER_CSS:{position:"absolute",margin:"0",padding:"0",top:"-1000px",left:"-1000px",fontSize:"350px",width:"auto",height:"auto",lineHeight:"normal",fontVariant:"normal"},COMPARISON_STRING:"WEei",__jn:null,__jo:null,removeDefaultHelperElements:function(){var j=qx.bom.webfonts.Validator.__jo;

if(j){for(var k in j){document.body.removeChild(j[k]);
}}delete qx.bom.webfonts.Validator.__jo;
}},properties:{fontFamily:{nullable:true,init:null,apply:c},timeout:{check:a,init:5000}},events:{"changeStatus":e},members:{__jm:null,__jp:null,__jq:null,validate:function(){this.__jq=new Date().getTime();

if(this.__jp){this.__jp.restart();
}else{this.__jp=new qx.event.Timer(100);
this.__jp.addListener(g,this.__jr,this);
qx.event.Timer.once(function(){this.__jp.start();
},this,0);
}},_reset:function(){if(this.__jm){for(var m in this.__jm){var l=this.__jm[m];
document.body.removeChild(l);
}this.__jm=null;
}},_isFontValid:function(){if(!qx.bom.webfonts.Validator.__jn){this.__bf();
}
if(!this.__jm){this.__jm=this._getRequestedHelpers();
}var o=qx.bom.element.Dimension.getWidth(this.__jm.sans);
var n=qx.bom.element.Dimension.getWidth(this.__jm.serif);
var p=qx.bom.webfonts.Validator;

if(o!==p.__jn.sans&&n!==p.__jn.serif){return true;
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

if(!x.__jo){x.__jo={sans:this._getHelperElement(x.COMPARISON_FONTS.sans),serif:this._getHelperElement(x.COMPARISON_FONTS.serif)};
}x.__jn={sans:qx.bom.element.Dimension.getWidth(x.__jo.sans),serif:qx.bom.element.Dimension.getWidth(x.__jo.serif)};
},__jr:function(){if(this._isFontValid()){this.__jp.stop();
this._reset();
this.fireDataEvent(f,{family:this.getFontFamily(),valid:true});
}else{var y=new Date().getTime();

if(y-this.__jq>=this.getTimeout()){this.__jp.stop();
this._reset();
this.fireDataEvent(f,{family:this.getFontFamily(),valid:false});
}}}},destruct:function(){this._reset();
this.__jp.stop();
this.__jp.removeListener(g,this.__jr,this);
this._disposeObjects(this.__jp);
}});
})();
(function(){var e="error",d="initialized",c="loading",b="qx.io.part.ClosurePart",a="complete";
qx.Bootstrap.define(b,{extend:qx.io.part.Part,construct:function(name,f,g){qx.io.part.Part.call(this,name,f,g);
},members:{__Bb:0,preload:function(h,self){var j=0;
var l=this;

for(var i=0;i<this._packages.length;i++){var k=this._packages[i];

if(k.getReadyState()==d){k.loadClosure(function(m){j++;
l._loader.notifyPackageResult(m);
if(j>=l._packages.length&&h){h.call(self);
}},this._loader);
}}},load:function(n,self){if(this._checkCompleteLoading(n,self)){return;
}this._readyState=c;

if(n){this._appendPartListener(n,self,this);
}this.__Bb=this._packages.length;

for(var i=0;i<this._packages.length;i++){var p=this._packages[i];
var o=p.getReadyState();
if(o==d){p.loadClosure(this._loader.notifyPackageResult,this._loader);
}if(o==d||o==c){this._loader.addPackageListener(p,qx.Bootstrap.bind(this._onPackageLoad,this,p));
}else if(o==e){this._markAsCompleted(e);
return;
}else{this.__Bb--;
}}if(this.__Bb<=0){this.__Bc();
}},__Bc:function(){for(var i=0;i<this._packages.length;i++){this._packages[i].execute();
}this._markAsCompleted(a);
},_onPackageLoad:function(q){if(this._readyState==e){return;
}if(q.getReadyState()==e){this._markAsCompleted(e);
return;
}this.__Bb--;

if(this.__Bb<=0){this.__Bc();
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
this.addListener(s,this.__mK,this);
},properties:{appearance:{refine:true,init:n}},members:{__zD:null,_createChildControlImpl:function(B,C){var D;

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
},__mK:function(e){var F=e.getData()[0];
var E=this.getChildControl(k);

if(E.getSelection()[0]!=F){if(F){E.setSelection([F]);
}else{E.resetSelection();
}}this.__zN();
this.__zO();
},__zN:function(){var H=this.getChildControl(k).getSelection()[0];
var I=this.getChildControl(j);
var G=H?H.getIcon():a;
G==null?I.resetIcon():I.setIcon(G);
},__zO:function(){var L=this.getChildControl(k).getSelection()[0];
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

if(S==z||S==w){if(this.__zD){this.setSelection([this.__zD]);
this.__zD=null;
}this.toggle();
}else{qx.ui.form.AbstractSelectBox.prototype._onKeyPress.call(this,e);
}},_onKeyInput:function(e){var T=e.clone();
T.setTarget(this._list);
T.setBubbles(false);
this.getChildControl(k).dispatchEvent(T);
},_onListMouseDown:function(e){if(this.__zD){this.setSelection([this.__zD]);
this.__zD=null;
}},_onListChangeSelection:function(e){var U=e.getData();
var X=e.getOldData();
if(X&&X.length>0){X[0].removeListener(c,this.__zN,this);
X[0].removeListener(d,this.__zO,this);
}
if(U.length>0){var W=this.getChildControl(g);
var V=this.getChildControl(k);
var Y=V.getSelectionContext();

if(W.isVisible()&&(Y==l||Y==v)){this.__zD=U[0];
}else{this.setSelection([U[0]]);
this.__zD=null;
}U[0].addListener(c,this.__zN,this);
U[0].addListener(d,this.__zO,this);
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
}}}},destruct:function(){this.__zD=null;
}});
})();
(function(){var m="value",l="default",k="index.html?qx.theme=",j="black",i="app-header-label",h=" Theme",g="changeSelection",f="2%",e="Widget Browser",d="widgetbrowser.view.Header",a="qx.theme.Simple",c="Theme",b="app-header";
qx.Class.define(d,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this.setLayout(new qx.ui.layout.HBox);
this.setAppearance(b);
var q=new qx.ui.basic.Label(e);
var n=new qxc.ui.versionlabel.VersionLabel();
n.setFont(l);
n.setAppearance(i);
var p=new qx.ui.form.SelectBox(c);
qx.core.Init.getApplication().getThemes().forEach(function(r){var name=qx.Bootstrap.getKeys(r)[0];
var s=new qx.ui.form.ListItem(name+h);
s.setUserData(m,r[name]);
p.add(s);
var t=r[name];

if(t==a){p.setSelection([s]);
}});
p.setFont(l);
var o=p.getSelectables().filter(function(u){if(window.location.search){return window.location.search.match(u.getUserData(m));
}})[0];
if(o){p.setSelection([o]);
}p.setTextColor(j);
p.addListener(g,function(v){var x=v.getData()[0];
var w=k+x.getUserData(m);
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
this.addListener(c,this.__mK,this);
},properties:{dynamic:{check:b,init:false,apply:d}},members:{_applyDynamic:function(f){var h=this._getChildren();
var g=this.getSelection()[0];
var j;

for(var i=0,l=h.length;i<l;i++){j=h[i];

if(j!=g){if(f){h[i].exclude();
}else{h[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(k){return true;
},__mK:function(e){var m=e.getOldData()[0];
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
(function(){var p="Boolean",o="focusout",n="interval",m="mouseover",l="mouseout",k="mousemove",j="widget",i="__rg",h="qx.ui.tooltip.ToolTip",g="__re",c="_applyCurrent",f="qx.ui.tooltip.Manager",d="__rd",b="tooltip-error",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,m,this.__rn,this,true);
this.__rd=new qx.event.Timer();
this.__rd.addListener(n,this.__rk,this);
this.__re=new qx.event.Timer();
this.__re.addListener(n,this.__rl,this);
this.__rf={left:0,top:0};
},properties:{current:{check:h,nullable:true,apply:c},showInvalidToolTips:{check:p,init:true},showToolTips:{check:p,init:true}},members:{__rf:null,__re:null,__rd:null,__rg:null,__rh:null,__ri:function(){if(!this.__rg){this.__rg=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__rg;
},__rj:function(){if(!this.__rh){this.__rh=new qx.ui.tooltip.ToolTip().set({appearance:b});
this.__rh.syncAppearance();
}return this.__rh;
},_applyCurrent:function(q,r){if(r&&qx.ui.core.Widget.contains(r,q)){return;
}if(r){if(!r.isDisposed()){r.exclude();
}this.__rd.stop();
this.__re.stop();
}var t=qx.event.Registration;
var s=document.body;
if(q){this.__rd.startWith(q.getShowTimeout());
t.addListener(s,l,this.__ro,this,true);
t.addListener(s,o,this.__rp,this,true);
t.addListener(s,k,this.__rm,this,true);
}else{t.removeListener(s,l,this.__ro,this,true);
t.removeListener(s,o,this.__rp,this,true);
t.removeListener(s,k,this.__rm,this,true);
}},__rk:function(e){var u=this.getCurrent();

if(u&&!u.isDisposed()){this.__re.startWith(u.getHideTimeout());

if(u.getPlaceMethod()==j){u.placeToWidget(u.getOpener());
}else{u.placeToPoint(this.__rf);
}u.show();
}this.__rd.stop();
},__rl:function(e){var v=this.getCurrent();

if(v&&!v.isDisposed()){v.exclude();
}this.__re.stop();
this.resetCurrent();
},__rm:function(e){var w=this.__rf;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__rn:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

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
if(x){A=this.__rj().set({label:x});
}
if(!A){A=this.__ri().set({label:B,icon:y});
}this.setCurrent(A);
A.setOpener(z);
},__ro:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!D){return;
}var E=this.getCurrent();
if(E&&(D==E||qx.ui.core.Widget.contains(E,D))){return;
}if(D&&C&&qx.ui.core.Widget.contains(C,D)){return;
}if(E&&!D){this.setCurrent(null);
}else{this.resetCurrent();
}},__rp:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&G==F.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,m,this.__rn,this,true);
this._disposeObjects(d,g,i);
this.__rf=null;
}});
})();
(function(){var e="qx.theme.Modern",d="qx.theme.Simple",c="north",b="qx.theme.Classic",a="widgetbrowser.Application";
qx.Class.define(a,{extend:qx.application.Standalone,construct:function(){qx.application.Standalone.call(this);
},members:{__oM:null,__Mx:null,__Dl:null,main:function(){qx.application.Standalone.prototype.main.call(this);
var f=this.getRoot();
var g=new qx.ui.layout.Dock();
var h=new qx.ui.container.Composite(g);
f.add(h,{edge:0});
this.__oM=new widgetbrowser.view.Header();
h.add(this.__oM,{edge:c});
var scroll=this.__Dl=new qx.ui.container.Scroll();
h.add(scroll);
this.__Mx=this._createTabView();
this.__Mx.set({minWidth:800,minHeight:800,padding:15});
scroll.add(this.__Mx);
},_createTabView:function(){this.__Mx=new widgetbrowser.view.TabView();
return this.__Mx;
},getScroll:function(){return this.__Dl;
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
this.addListener(t,this.__ke,this);
this.addListener(n,this.__ke,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__ke:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__it=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__it:null,_applyTimeoutInterval:function(h){this.__it.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__it){this.__it.stop();
}this.__it=null;
}});
})();
(function(){var h="object",g="function",f="qx.bom.client.Stylesheet",e="html.stylesheet.deleterule",d="html.stylesheet.insertrule",c="html.stylesheet.createstylesheet",b="html.stylesheet.addimport",a="html.stylesheet.removeimport";
qx.Bootstrap.define(f,{statics:{__jk:function(){if(!qx.bom.client.Stylesheet.__jl){qx.bom.client.Stylesheet.__jl=qx.bom.Stylesheet.createElement();
}return qx.bom.client.Stylesheet.__jl;
},getCreateStyleSheet:function(){return typeof document.createStyleSheet===h;
},getInsertRule:function(){return typeof qx.bom.client.Stylesheet.__jk().insertRule===g;
},getDeleteRule:function(){return typeof qx.bom.client.Stylesheet.__jk().deleteRule===g;
},getAddImport:function(){return (typeof qx.bom.client.Stylesheet.__jk().addImport===h);
},getRemoveImport:function(){return (typeof qx.bom.client.Stylesheet.__jk().removeImport===h);
}},defer:function(i){qx.core.Environment.add(c,i.getCreateStyleSheet);
qx.core.Environment.add(d,i.getInsertRule);
qx.core.Environment.add(e,i.getDeleteRule);
qx.core.Environment.add(b,i.getAddImport);
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
},"default":function(p){if(this.__fh(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__fh(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__fh(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__fh(A)){var F=qx.bom.Range.get();
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
}},"gecko|webkit":function(K){if(this.__fh(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__fh(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__fh(O)){var T=qx.bom.Range.get();
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
}},"gecko|webkit":function(Y){if(this.__fh(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__fh(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__fh:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
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
qx.Class.define(b,{statics:{__gE:false,__gF:{},__gG:0,MAX_RETRIES:10,scheduleFlush:function(i){var self=qx.ui.core.queue.Manager;
self.__gF[i]=true;

if(!self.__gE){self.__ee.schedule();
self.__gE=true;
}},flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;
}var self=qx.ui.core.queue.Manager;
if(self.__gH){return;
}self.__gH=true;
self.__ee.cancel();
var j=self.__gF;
self.__gI(function(){while(j.visibility||j.widget||j.appearance||j.layout||j.element){if(j.widget){delete j.widget;
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
}}},function(){self.__gE=false;
});
self.__gI(function(){if(j.dispose){delete j.dispose;
{qx.ui.core.queue.Dispose.flush();
};
}},function(){self.__gH=false;
});
self.__gG=0;
},__gI:function(k,l){var self=qx.ui.core.queue.Manager;

try{k();
}catch(e){self.__gE=false;
self.__gH=false;
self.__gG+=1;
if(qx.core.Environment.get(a)==f&&qx.core.Environment.get(d)<=7){l();
}
if(self.__gG<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__gG-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{l();
}},__gJ:function(e){var m=qx.ui.core.queue.Manager;
if(e.getData()==g){m.PAUSE=true;

if(m.__gK){window.clearTimeout(m.__gK);
}m.__gK=window.setTimeout(function(){m.PAUSE=false;
m.__gK=null;
m.flush();
},500);
}else{m.flush();
}}},defer:function(n){n.__ee=new qx.util.DeferredCall(n.flush);
qx.html.Element._scheduleFlush=n.scheduleFlush;
qx.event.Registration.addListener(window,h,qx.core.Environment.get(c)?n.__gJ:n.flush);
}});
})();
(function(){var c="html.image.naturaldimensions",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__cP:{},__hT:{width:null,height:null},__hU:/\.(png|gif|jpg|jpeg|bmp)\b/i,__hV:/^data:image\/(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__cP[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__cP[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__cP[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__cP[k];

if(!m||!m.format){var o=this.__hV.exec(k);

if(o!=null){var p=(m&&qx.lang.Type.isNumber(m.width)?m.width:this.__hT.width);
var n=(m&&qx.lang.Type.isNumber(m.height)?m.height:this.__hT.height);
m={loaded:true,format:o[1],width:p,height:n};
}}return m?m.format:null;
},getSize:function(q){var r=this.__cP[q];
return r?{width:r.width,height:r.height}:this.__hT;
},getWidth:function(s){var t=this.__cP[s];
return t?t.width:null;
},getHeight:function(u){var v=this.__cP[u];
return v?v.height:null;
},load:function(w,x,y){var z=this.__cP[w];

if(!z){z=this.__cP[w]={};
}if(x&&!y){y=window;
}if(z.loaded||z.loading||z.failed){if(x){if(z.loading){z.callbacks.push(x,y);
}else{x.call(y,w,z);
}}}else{z.loading=true;
z.callbacks=[];

if(x){z.callbacks.push(x,y);
}var B=new Image();
var A=qx.lang.Function.listener(this.__hW,this,B,w);
B.onload=A;
B.onerror=A;
B.src=w;
z.element=B;
}},abort:function(C){var D=this.__cP[C];

if(D&&!D.loaded){D.aborted=true;
var F=D.callbacks;
var E=D.element;
E.onload=E.onerror=null;
delete D.callbacks;
delete D.element;
delete D.loading;

for(var i=0,l=F.length;i<l;i+=2){F[i].call(F[i+1],C,D);
}}this.__cP[C]=null;
},__hW:qx.event.GlobalError.observeMethod(function(event,G,H){var I=this.__cP[H];
if(event.type===b){I.loaded=true;
I.width=this.__hX(G);
I.height=this.__hY(G);
var J=this.__hU.exec(H);

if(J!=null){I.format=J[1];
}}else{I.failed=true;
}G.onload=G.onerror=null;
var K=I.callbacks;
delete I.loading;
delete I.callbacks;
delete I.element;
for(var i=0,l=K.length;i<l;i+=2){K[i].call(K[i+1],H,I);
}}),__hX:function(L){return qx.core.Environment.get(c)?L.naturalWidth:L.width;
},__hY:function(M){return qx.core.Environment.get(c)?M.naturalHeight:M.height;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var q="_applyLayoutChange",p="Decorator",o="Integer",n="top",m="left",l="x",k="y",j="auto",h="qx.ui.layout.Dock",g="_applySort",c="west",f="south",e="center",b="east",a="Boolean",d="north";
qx.Class.define(h,{extend:qx.ui.layout.Abstract,construct:function(r,s,t,u){qx.ui.layout.Abstract.call(this);

if(r){this.setSpacingX(r);
}
if(s){this.setSpacingY(s);
}
if(t){this.setSeparatorX(t);
}
if(u){this.setSeparatorY(u);
}},properties:{sort:{check:[j,k,l],init:j,apply:g},separatorX:{check:p,nullable:true,apply:q},separatorY:{check:p,nullable:true,apply:q},connectSeparators:{check:a,init:false,apply:q},spacingX:{check:o,init:0,apply:q},spacingY:{check:o,init:0,apply:q}},members:{__dS:null,__AV:null,verifyLayoutProperty:null,_applySort:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__BU:{north:1,south:2,west:3,east:4,center:5},__BV:{1:"top",2:"bottom",3:"left",4:"right"},__kD:function(){var v=this._getLayoutChildren();
var D,x;
var length=v.length;
var z=[];
var C=[];
var A=[];
var w=this.getSort()===k;
var B=this.getSort()===l;

for(var i=0;i<length;i++){D=v[i];
A=D.getLayoutProperties().edge;

if(A===e){if(x){throw new Error("It is not allowed to have more than one child aligned to 'center'!");
}x=D;
}else if(B||w){if(A===d||A===f){w?z.push(D):C.push(D);
}else if(A===c||A===b){w?C.push(D):z.push(D);
}}else{z.push(D);
}}var E=z.concat(C);

if(x){E.push(x);
}this.__dS=E;
var y=[];

for(var i=0;i<length;i++){A=E[i].getLayoutProperties().edge;
y[i]=this.__BU[A]||5;
}this.__AV=y;
delete this._invalidChildrenCache;
},renderLayout:function(F,G){if(this._invalidChildrenCache){this.__kD();
}var ba=qx.ui.layout.Util;
var M=this.__dS;
var bb=this.__AV;
var length=M.length;
var P,I,O,U,V,bg,S,J,bd;
var bk=[];
var R=[];
var bj=this._getSeparatorWidths();
var bo=this.getSpacingX();
var bn=this.getSpacingY();
var N=-bo;
var bc=-bn;

if(bj.x){N-=bj.x+bo;
}
if(bj.y){bc-=bj.y+bn;
}
for(var i=0;i<length;i++){I=M[i];
U=I.getLayoutProperties();
O=I.getSizeHint();
S=O.width;
J=O.height;

if(U.width!=null){S=Math.floor(F*parseFloat(U.width)/100);

if(S<O.minWidth){S=O.minWidth;
}else if(S>O.maxWidth){S=O.maxWidth;
}}
if(U.height!=null){J=Math.floor(G*parseFloat(U.height)/100);

if(J<O.minHeight){J=O.minHeight;
}else if(J>O.maxHeight){J=O.maxHeight;
}}bk[i]=S;
R[i]=J;
switch(bb[i]){case 1:case 2:bc+=J+I.getMarginTop()+I.getMarginBottom()+bn;

if(bj.y){bc+=bj.y+bn;
}break;
case 3:case 4:N+=S+I.getMarginLeft()+I.getMarginRight()+bo;

if(bj.x){N+=bj.x+bo;
}break;
default:N+=S+I.getMarginLeft()+I.getMarginRight()+bo;
bc+=J+I.getMarginTop()+I.getMarginBottom()+bn;

if(bj.x){N+=bj.x+bo;
}
if(bj.y){bc+=bj.y+bn;
}}}if(N!=F){P={};
bg=N<F;

for(var i=0;i<length;i++){I=M[i];

switch(bb[i]){case 3:case 4:case 5:V=I.getLayoutProperties().flex;
if(V==null&&bb[i]==5){V=1;
}
if(V>0){O=I.getSizeHint();
P[i]={min:O.minWidth,value:bk[i],max:O.maxWidth,flex:V};
}}}var K=ba.computeFlexOffsets(P,F,N);

for(var i in K){bd=K[i].offset;
bk[i]+=bd;
N+=bd;
}}if(bc!=G){P={};
bg=bc<G;

for(var i=0;i<length;i++){I=M[i];

switch(bb[i]){case 1:case 2:case 5:V=I.getLayoutProperties().flex;
if(V==null&&bb[i]==5){V=1;
}
if(V>0){O=I.getSizeHint();
P[i]={min:O.minHeight,value:R[i],max:O.maxHeight,flex:V};
}}}var K=ba.computeFlexOffsets(P,G,bc);

for(var i in K){bd=K[i].offset;
R[i]+=bd;
bc+=bd;
}}this._clearSeparators();
var bh=this.getSeparatorX(),bi=this.getSeparatorY();
var bl=this.getConnectSeparators();
var X=0,bf=0;
var bs,top,S,J,W,bp;
var Y,bm,br,H;
var bq,Q,T,L;
var be=this.__BV;

for(var i=0;i<length;i++){I=M[i];
bp=bb[i];
O=I.getSizeHint();
bq=I.getMarginTop();
Q=I.getMarginBottom();
T=I.getMarginLeft();
L=I.getMarginRight();
switch(bp){case 1:case 2:S=F-T-L;
if(S<O.minWidth){S=O.minWidth;
}else if(S>O.maxWidth){S=O.maxWidth;
}J=R[i];
top=X+ba.computeVerticalAlignOffset(be[bp],J,G,bq,Q);
bs=bf+ba.computeHorizontalAlignOffset(I.getAlignX()||m,S,F,T,L);
if(bj.y){if(bp==1){bm=X+J+bq+bn+Q;
}else{bm=X+G-J-bq-bn-Q-bj.y;
}Y=bs;
br=F;

if(bl&&Y>0){Y-=bo+T;
br+=(bo)*2;
}else{Y-=T;
}this._renderSeparator(bi,{left:Y,top:bm,width:br,height:bj.y});
}W=J+bq+Q+bn;

if(bj.y){W+=bj.y+bn;
}G-=W;
if(bp==1){X+=W;
}break;
case 3:case 4:J=G-bq-Q;
if(J<O.minHeight){J=O.minHeight;
}else if(J>O.maxHeight){J=O.maxHeight;
}S=bk[i];
bs=bf+ba.computeHorizontalAlignOffset(be[bp],S,F,T,L);
top=X+ba.computeVerticalAlignOffset(I.getAlignY()||n,J,G,bq,Q);
if(bj.x){if(bp==3){Y=bf+S+T+bo+L;
}else{Y=bf+F-S-T-bo-L-bj.x;
}bm=top;
H=G;

if(bl&&bm>0){bm-=bn+bq;
H+=(bn)*2;
}else{bm-=bq;
}this._renderSeparator(bh,{left:Y,top:bm,width:bj.x,height:H});
}W=S+T+L+bo;

if(bj.x){W+=bj.x+bo;
}F-=W;
if(bp==3){bf+=W;
}break;
default:S=F-T-L;
J=G-bq-Q;
if(S<O.minWidth){S=O.minWidth;
}else if(S>O.maxWidth){S=O.maxWidth;
}if(J<O.minHeight){J=O.minHeight;
}else if(J>O.maxHeight){J=O.maxHeight;
}bs=bf+ba.computeHorizontalAlignOffset(I.getAlignX()||m,S,F,T,L);
top=X+ba.computeVerticalAlignOffset(I.getAlignY()||n,J,G,bq,Q);
}I.renderLayout(bs,top,S,J);
}},_getSeparatorWidths:function(){var bu=this.getSeparatorX(),bt=this.getSeparatorY();

if(bu||bt){var bz=qx.theme.manager.Decoration.getInstance();
}
if(bu){var bA=bz.resolve(bu);
var bw=bA.getInsets();
var bx=bw.left+bw.right;
}
if(bt){var bB=bz.resolve(bt);
var bv=bB.getInsets();
var by=bv.top+bv.bottom;
}return {x:bx||0,y:by||0};
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kD();
}var bF=this.__dS;
var bP=this.__AV;
var length=bF.length;
var bJ,bQ;
var bL,bK;
var bM=0,bX=0;
var bC=0,bS=0;
var bN=0,bW=0;
var bD=0,bR=0;
var bT=this._getSeparatorWidths();
var bV=this.getSpacingX(),bU=this.getSpacingY();
var bH=-bV,bG=-bU;

if(bT.x){bH-=bT.x+bV;
}
if(bT.y){bG-=bT.y+bU;
}for(var i=0;i<length;i++){bQ=bF[i];
bJ=bQ.getSizeHint();
bL=bQ.getMarginLeft()+bQ.getMarginRight();
bK=bQ.getMarginTop()+bQ.getMarginBottom();
switch(bP[i]){case 1:case 2:bN=Math.max(bN,bJ.width+bM+bL);
bW=Math.max(bW,bJ.minWidth+bX+bL);
bD+=bJ.height+bK;
bR+=bJ.minHeight+bK;
bG+=bU;

if(bT.y){bG+=bT.y+bU;
}break;
case 3:case 4:bC=Math.max(bC,bJ.height+bD+bK);
bS=Math.max(bS,bJ.minHeight+bR+bK);
bM+=bJ.width+bL;
bX+=bJ.minWidth+bL;
bH+=bV;

if(bT.x){bH+=bT.x+bV;
}break;
default:bM+=bJ.width+bL;
bX+=bJ.minWidth+bL;
bD+=bJ.height+bK;
bR+=bJ.minHeight+bK;
bH+=bV;

if(bT.x){bH+=bT.x+bV;
}bG+=bU;

if(bT.y){bG+=bT.y+bU;
}}}var bI=Math.max(bX,bW)+bH;
var bY=Math.max(bM,bN)+bH;
var bO=Math.max(bS,bR)+bG;
var bE=Math.max(bC,bD)+bG;
return {minWidth:bI,width:bY,minHeight:bO,height:bE};
}},destruct:function(){this.__AV=this.__dS=null;
}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignX(p);
}
if(q){this.setSeparator(q);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__li:null,__kB:null,__kC:null,__dS:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kD:function(){var w=this._getLayoutChildren();
var length=w.length;
var t=false;
var r=this.__li&&this.__li.length!=length&&this.__kB&&this.__li;
var u;
var s=r?this.__li:new Array(length);
var v=r?this.__kB:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.width!=null){s[i]=parseFloat(u.width)/100;
}
if(u.flex!=null){v[i]=u.flex;
t=true;
}else{v[i]=0;
}}if(!r){this.__li=s;
this.__kB=v;
}this.__kC=t;
this.__dS=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__kD();
}var E=this.__dS;
var length=E.length;
var N=qx.ui.layout.Util;
var M=this.getSpacing();
var Q=this.getSeparator();

if(Q){var B=N.computeHorizontalSeparatorGaps(E,M,Q);
}else{var B=N.computeHorizontalGaps(E,M,true);
}var i,z,K,J;
var P=[];
var F=B;

for(i=0;i<length;i+=1){J=this.__li[i];
K=J!=null?Math.floor((x-B)*J):E[i].getSizeHint().width;
P.push(K);
F+=K;
}if(this.__kC&&F!=x){var H={};
var L,O;

for(i=0;i<length;i+=1){L=this.__kB[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kD();
}var bc=qx.ui.layout.Util;
var bk=this.__dS;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__kB[i];
var X=this.__li[i];

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
}},destruct:function(){this.__li=this.__kB=this.__dS=null;
}});
})();
(function(){var f="-",e="",d="qx.bom.client.Locale",c="locale",b="android",a="locale.variant";
qx.Bootstrap.define(d,{statics:{getLocale:function(){var g=qx.bom.client.Locale.__hE();
var h=g.indexOf(f);

if(h!=-1){g=g.substr(0,h);
}return g;
},getVariant:function(){var i=qx.bom.client.Locale.__hE();
var k=e;
var j=i.indexOf(f);

if(j!=-1){k=i.substr(j+1);
}return k;
},__hE:function(){var l=(navigator.userLanguage||navigator.language||e);
if(qx.bom.client.OperatingSystem.getName()==b){var m=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(m){l=m[0];
}}return l.toLowerCase();
}},defer:function(n){qx.core.Environment.add(c,n.getLocale);
qx.core.Environment.add(a,n.getVariant);
}});
})();
(function(){var j="",i="mshtml",h="msie",g="maple",f=")(/| )([0-9]+\.[0-9])",e="(",d="ce",c="CSS1Compat",b="android",a="operamini",H="gecko",G="browser.quirksmode",F="browser.name",E="mobile chrome",D="iemobile",C="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",B="opera mobi",A="Mobile Safari",z="Maple",y="operamobile",q="ie",r="mobile safari",o="IEMobile|Maxthon|MSIE",p="qx.bom.client.Browser",m="(Maple )([0-9]+\.[0-9]+\.[0-9]*)",n="opera mini",k="browser.version",l="opera",s="Opera Mini|Opera Mobi|Opera",t="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",v="webkit",u="browser.documentmode",x="5.0",w="Mobile/";
qx.Bootstrap.define(p,{statics:{getName:function(){var L=navigator.userAgent;
var K=new RegExp(e+qx.bom.client.Browser.__dc+f);
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
var O=new RegExp(e+qx.bom.client.Browser.__dc+f);
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
}},__dc:{"webkit":t,"gecko":C,"mshtml":o,"opera":s}[qx.bom.client.Engine.getName()]},defer:function(Q){qx.core.Environment.add(F,Q.getName),qx.core.Environment.add(k,Q.getVersion),qx.core.Environment.add(u,Q.getDocumentMode),qx.core.Environment.add(G,Q.getQuirksMode);
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
}},_onMouseWheel:function(e){var Q=0;
var P=this.getChildControl(u);

if(this.getOrientation()===v){Q=e.getWheelDelta(g);
var M=P.getScrollX();
var N=P.getScrollMaxX();
var O=parseInt(Q);
if(!(O<0&&M<=0||O>0&&M>=N||Q==0)){e.stop();
}}else{Q=e.getWheelDelta(j);
var M=P.getScrollY();
var N=P.getScrollMaxY();
var O=parseInt(Q);
if(!(O<0&&M<=0||O>0&&M>=N||Q==0)){e.stop();
}}this.scrollBy(Q*this.getScrollStep());
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(u).getChildren()[0];

if(!content){return;
}var R=this.getInnerSize();
var T=content.getBounds();
var S=(this.getOrientation()===v)?T.width>R.width:T.height>R.height;

if(S){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){var U=this.getChildControl(u);

if(!U.isDisposed()){this.scrollBy(U.getScrollX());
}},this,50);
},_updateArrowsEnabled:function(){if(!this.getEnabled()){this.getChildControl(t).setEnabled(false);
this.getChildControl(s).setEnabled(false);
return;
}var W=this.getChildControl(u);

if(this.getOrientation()===v){var V=W.getScrollX();
var X=W.getScrollMaxX();
}else{var V=W.getScrollY();
var X=W.getScrollMaxY();
}this.getChildControl(t).setEnabled(V>0);
this.getChildControl(s).setEnabled(V<X);
},_showArrows:function(){this._showChildControl(s);
this._showChildControl(t);
},_hideArrows:function(){this._excludeChildControl(s);
this._excludeChildControl(t);
this.scrollTo(0);
}}});
})();


qx.$$loader.init();

