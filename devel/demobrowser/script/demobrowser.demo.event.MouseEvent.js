(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"locale":"en","locale.variant":"US","qx.allowUrlSettings":true,"qx.allowUrlVariants":true,"qx.application":"demobrowser.demo.event.MouseEvent","qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.whitespace":true,"qx.theme":"qx.theme.Indigo"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","sourceViewUri":"https://github.com/qooxdoo/qooxdoo/blob/%{qxGitBranch}/framework/source/class/%{classFilePath}#L%{lineNumber}"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"de":null,"de_DE":null,"en":null,"en_US":null,"fr":null,"fr_FR":null};
qx.$$locales = {"C":null,"de":null,"de_DE":null,"en":null,"en_US":null,"fr":null,"fr_FR":null};
qx.$$packageData = {};
qx.$$g = {}

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:demobrowser.demo.event.MouseEvent.ac1abf1c56cf.js"]}},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : true,
  delayDefer: false,

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

var readyStateValue = {"complete" : true};
if (document.documentMode && document.documentMode < 10 ||
    (typeof window.ActiveXObject !== "undefined" && !document.documentMode)) {
  readyStateValue["loaded"] = true;
}

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || readyStateValue[this.readyState]) {
      elem.onreadystatechange = elem.onload = null;
      if (typeof callback === "function") {
        callback();
      }
    }
  };

  if (isLoadParallel) {
    elem.async = null;
  }

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
var isLoadParallel = 'async' in document.createElement('script');

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }

  var item;

  if (isLoadParallel) {
    while (list.length) {
      item = list.shift();
      if (list.length) {
        loadScript(item);
      } else {
        loadScript(item, callback);
      }
    }
  } else {
    item = list.shift();
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
  qx.Bootstrap.executePendingDefers();
  qx.$$loader.delayDefer = false;
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

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_E":"ccc","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, MMM d, y G","cldr_date_time_format_GyMMMd":"MMM d, y G","cldr_date_time_format_H":"HH","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_Hmsv":"HH:mm:ss v","cldr_date_time_format_Hmv":"HH:mm v","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMW":"'week' W 'of' MMMM","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_hmsv":"h:mm:ss a v","cldr_date_time_format_hmv":"h:mm a v","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_date_time_format_yw":"'week' w 'of' y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_short_fri":"Fr","cldr_day_format_short_mon":"Mo","cldr_day_format_short_sat":"Sa","cldr_day_format_short_sun":"Su","cldr_day_format_short_thu":"Th","cldr_day_format_short_tue":"Tu","cldr_day_format_short_wed":"We","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.y","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_E":"ccc","cldr_date_time_format_EHm":"E, HH:mm","cldr_date_time_format_EHms":"E, HH:mm:ss","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E, h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, d. MMM y G","cldr_date_time_format_GyMMMd":"d. MMM y G","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_Hmsv":"HH:mm:ss v","cldr_date_time_format_Hmv":"HH:mm v","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMMW":"'Woche' W 'im' MMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h 'Uhr' a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_hmsv":"h:mm:ss a v","cldr_date_time_format_hmv":"h:mm a v","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"E, d.M.y","cldr_date_time_format_yMM":"MM.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"d. MMM y","cldr_date_time_format_yMMdd":"dd.MM.y","cldr_date_time_format_yMd":"d.M.y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_date_time_format_yw":"'Woche' w 'des' 'Jahres' y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_short_fri":"Fr.","cldr_day_format_short_mon":"Mo.","cldr_day_format_short_sat":"Sa.","cldr_day_format_short_sun":"So.","cldr_day_format_short_thu":"Do.","cldr_day_format_short_tue":"Di.","cldr_day_format_short_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_short_fri":"Fr.","cldr_day_stand-alone_short_mon":"Mo.","cldr_day_stand-alone_short_sat":"Sa.","cldr_day_stand-alone_short_sun":"So.","cldr_day_stand-alone_short_thu":"Do.","cldr_day_stand-alone_short_tue":"Di.","cldr_day_stand-alone_short_wed":"Mi.","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan.","cldr_month_format_abbreviated_10":"Okt.","cldr_month_format_abbreviated_11":"Nov.","cldr_month_format_abbreviated_12":"Dez.","cldr_month_format_abbreviated_2":"Feb.","cldr_month_format_abbreviated_3":"März","cldr_month_format_abbreviated_4":"Apr.","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Juni","cldr_month_format_abbreviated_7":"Juli","cldr_month_format_abbreviated_8":"Aug.","cldr_month_format_abbreviated_9":"Sep.","cldr_month_format_narrow_1":"J","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"J","cldr_month_format_narrow_7":"J","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Jun","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"Januar","cldr_month_stand-alone_wide_10":"Oktober","cldr_month_stand-alone_wide_11":"November","cldr_month_stand-alone_wide_12":"Dezember","cldr_month_stand-alone_wide_2":"Februar","cldr_month_stand-alone_wide_3":"März","cldr_month_stand-alone_wide_4":"April","cldr_month_stand-alone_wide_5":"Mai","cldr_month_stand-alone_wide_6":"Juni","cldr_month_stand-alone_wide_7":"Juli","cldr_month_stand-alone_wide_8":"August","cldr_month_stand-alone_wide_9":"September","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_E":"ccc","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, MMM d, y G","cldr_date_time_format_GyMMMd":"MMM d, y G","cldr_date_time_format_H":"HH","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_Hmsv":"HH:mm:ss v","cldr_date_time_format_Hmv":"HH:mm v","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMW":"'week' W 'of' MMMM","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_hmsv":"h:mm:ss a v","cldr_date_time_format_hmv":"h:mm a v","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_date_time_format_yw":"'week' w 'of' y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_short_fri":"Fr","cldr_day_format_short_mon":"Mo","cldr_day_format_short_sat":"Sa","cldr_day_format_short_sun":"Su","cldr_day_format_short_thu":"Th","cldr_day_format_short_tue":"Tu","cldr_day_format_short_wed":"We","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"»","alternateQuotationStart":"«","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/y","cldr_date_time_format_E":"E","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E d MMM y G","cldr_date_time_format_GyMMMd":"d MMM y G","cldr_date_time_format_H":"HH 'h'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_Hmsv":"HH:mm:ss v","cldr_date_time_format_Hmv":"HH:mm v","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E dd/MM","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMW":"'semaine' W 'de' MMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_Md":"dd/MM","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_hmsv":"h:mm:ss a v","cldr_date_time_format_hmv":"h:mm a v","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"MM/y","cldr_date_time_format_yMEd":"E dd/MM/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"dd/MM/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_date_time_format_yw":"'semaine' w 'de' y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_short_fri":"ve","cldr_day_format_short_mon":"lu","cldr_day_format_short_sat":"sa","cldr_day_format_short_sun":"di","cldr_day_format_short_thu":"je","cldr_day_format_short_tue":"ma","cldr_day_format_short_wed":"me","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_short_fri":"ve","cldr_day_stand-alone_short_mon":"lu","cldr_day_stand-alone_short_sat":"sa","cldr_day_stand-alone_short_sun":"di","cldr_day_stand-alone_short_thu":"je","cldr_day_stand-alone_short_tue":"ma","cldr_day_stand-alone_short_wed":"me","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_narrow_1":"J","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"J","cldr_month_format_narrow_7":"J","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_abbreviated_1":"janv.","cldr_month_stand-alone_abbreviated_10":"oct.","cldr_month_stand-alone_abbreviated_11":"nov.","cldr_month_stand-alone_abbreviated_12":"déc.","cldr_month_stand-alone_abbreviated_2":"févr.","cldr_month_stand-alone_abbreviated_3":"mars","cldr_month_stand-alone_abbreviated_4":"avr.","cldr_month_stand-alone_abbreviated_5":"mai","cldr_month_stand-alone_abbreviated_6":"juin","cldr_month_stand-alone_abbreviated_7":"juil.","cldr_month_stand-alone_abbreviated_8":"août","cldr_month_stand-alone_abbreviated_9":"sept.","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"janvier","cldr_month_stand-alone_wide_10":"octobre","cldr_month_stand-alone_wide_11":"novembre","cldr_month_stand-alone_wide_12":"décembre","cldr_month_stand-alone_wide_2":"février","cldr_month_stand-alone_wide_3":"mars","cldr_month_stand-alone_wide_4":"avril","cldr_month_stand-alone_wide_5":"mai","cldr_month_stand-alone_wide_6":"juin","cldr_month_stand-alone_wide_7":"juillet","cldr_month_stand-alone_wide_8":"août","cldr_month_stand-alone_wide_9":"septembre","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser.demo"],"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/decoration/Indigo/font/JosefinSlab-SemiBold.ttf":"qx","qx/decoration/Indigo/font/JosefinSlab-SemiBold.woff":"qx","qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/checked.png":[6,6,"png","qx"],"qx/decoration/Modern/form/tooltip-error-arrow-right.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/undetermined.png":[6,2,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Simple/arrows/down-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/down-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/down.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/forward.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/left-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/left.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/rewind.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/right-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/right.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/up-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/up-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/up.gif":[7,4,"gif","qx"],"qx/decoration/Simple/checkbox/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/checked.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Simple/checkbox/undetermined.png":[6,2,"png","qx"],"qx/decoration/Simple/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Simple/colorselector/brightness-handle.gif":[35,11,"gif","qx"],"qx/decoration/Simple/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Simple/colorselector/huesaturation-handle.gif":[11,11,"gif","qx"],"qx/decoration/Simple/cursors/alias.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/copy.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/move.gif":[13,9,"gif","qx"],"qx/decoration/Simple/cursors/nodrop.gif":[20,20,"gif","qx"],"qx/decoration/Simple/menu/checkbox-invert.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/checkbox.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/radiobutton-invert.gif":[16,5,"gif","qx"],"qx/decoration/Simple/menu/radiobutton.gif":[16,5,"gif","qx"],"qx/decoration/Simple/splitpane/knob-horizontal.png":[1,8,"png","qx"],"qx/decoration/Simple/splitpane/knob-vertical.png":[8,1,"png","qx"],"qx/decoration/Simple/table/ascending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/ascending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/boolean-false.png":[11,11,"png","qx"],"qx/decoration/Simple/table/boolean-true.png":[11,11,"png","qx"],"qx/decoration/Simple/table/descending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/descending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/select-column-order.png":[10,9,"png","qx"],"qx/decoration/Simple/tabview/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/window/close-white.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/maximize-white.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/maximize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize-white.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/restore-white.gif":[8,9,"gif","qx"],"qx/decoration/Simple/window/restore.gif":[8,9,"gif","qx"],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Oxygen/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Oxygen/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/places/folder.png":[32,32,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-44],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-22],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.png":[1,1,"png","qx"]},"translations":{"C":{},"de":{},"de_DE":{},"en":{},"en_US":{},"fr":{},"fr_FR":{}}};
(function(){var b=".prototype",c="function",d="qx.core.Object",e="AsyncFunction",f="Boolean",g="Error",h="Object.keys requires an object as argument.",j="constructor",k="warn",m="default",n="Null",o="hasOwnProperty",p="Undefined",q="string",r='undefined',s="toLocaleString",t="error",u="toString",v="Blob",w="qx.debug",x="()",y="RegExp",z="dynamic",A="Object",B="String",C="info",D="BROKEN_IE",E="isPrototypeOf",F="Date",G="",H="qx.Bootstrap",I="Function",J="]",K="Cannot call super class. Method is not derived: ",L="Array",M="[Class ",N="valueOf",O="Number",P="FormData",Q="Class",R="debug",S="ES5",T=".",U="ArrayBuffer",V="propertyIsEnumerable",W="object";if(!window.qx){window.qx={};}
;qx.Bootstrap={genericToString:function(){return M+this.classname+J;}
,createNamespace:function(name,X){var bb=name.split(T);var ba=bb[0];var parent=qx.$$namespaceRoot&&qx.$$namespaceRoot[ba]?qx.$$namespaceRoot:window;for(var i=0,Y=bb.length-1;i<Y;i++ ,ba=bb[i]){if(!parent[ba]){parent=parent[ba]={};}
else {parent=parent[ba];}
;}
;parent[ba]=X;return ba;}
,setDisplayName:function(bd,bc,name){bd.displayName=bc+T+name+x;}
,setDisplayNames:function(bf,be){for(var name in bf){var bg=bf[name];if(bg instanceof Function){bg.displayName=be+T+name+x;}
;}
;}
,base:function(bh,bi){if(qx.Bootstrap.DEBUG){if(!qx.Bootstrap.isFunction(bh.callee.base)){throw new Error(K+bh.callee.displayName);}
;}
;if(arguments.length===1){return bh.callee.base.call(this);}
else {return bh.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}
;}
,define:function(name,bu){var br=function(){return (typeof this==r);}
;if(!bu){bu={statics:{}};}
;var bp;var bl=null;qx.Bootstrap.setDisplayNames(bu.statics,name);if(bu.members||bu.extend){qx.Bootstrap.setDisplayNames(bu.members,name+b);bp=bu.construct||new Function;if(bu.extend){this.extendClass(bp,bp,bu.extend,name,bn);}
;var bk=bu.statics||{};for(var i=0,bm=qx.Bootstrap.keys(bk),l=bm.length;i<l;i++ ){var bj=bm[i];bp[bj]=bk[bj];}
;bl=bp.prototype;bl.base=qx.Bootstrap.base;bl.name=bl.classname=name;var bs=bu.members||{};var bj,bq;for(var i=0,bm=qx.Bootstrap.keys(bs),l=bm.length;i<l;i++ ){bj=bm[i];bq=bs[bj];if(bq instanceof Function&&bl[bj]){bq.base=bl[bj];}
;bl[bj]=bq;}
;}
else {bp=bu.statics||{};if(qx.Bootstrap.$$registry&&qx.Bootstrap.$$registry[name]){var bt=qx.Bootstrap.$$registry[name];if(this.keys(bp).length!==0){if(bu.defer){bu.defer(bp,bl);}
;for(var bo in bp){bt[bo]=bp[bo];}
;return bt;}
;}
;}
;bp.$$type=Q;if(!bp.hasOwnProperty(u)){bp.toString=this.genericToString;}
;var bn=name?this.createNamespace(name,bp):G;bp.classname=name;if(!br()){try{bp.name=name;}
catch(bv){}
;}
;bp.basename=bn;bp.$$events=bu.events;if(bu.defer){this.addPendingDefer(bp,function(){bu.defer(bp,bl);}
);}
;if(name!=null){qx.Bootstrap.$$registry[name]=bp;}
;return bp;}
,isQxCoreObject:function(bw){if(bw===bw.constructor){return false;}
;var bx=bw.constructor;while(bx){if(bx.classname===d){return true;}
;bx=bx.superclass;}
;return false;}
};qx.Bootstrap.define(H,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var by=true;if(qx.$$environment&&qx.$$environment[w]===false){by=false;}
;return by;}
)(),getEnvironmentSetting:function(bz){if(qx.$$environment){return qx.$$environment[bz];}
;}
,setEnvironmentSetting:function(bA,bB){if(!qx.$$environment){qx.$$environment={};}
;if(qx.$$environment[bA]===undefined){qx.$$environment[bA]=bB;}
;}
,createNamespace:qx.Bootstrap.createNamespace,setRoot:function(bC){qx.$$namespaceRoot=bC;}
,base:qx.Bootstrap.base,define:qx.Bootstrap.define,isQxCoreObject:qx.Bootstrap.isQxCoreObject,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(clazz,construct,superClass,name,basename){var superproto=superClass.prototype;var helper=new Function();helper.prototype=superproto;var proto=new helper();clazz.prototype=proto;proto.name=proto.classname=name;proto.basename=basename;construct.base=superClass;clazz.superclass=superClass;construct.self=clazz.constructor=proto.constructor=clazz;}
,__a:[],addPendingDefer:function(bE,bD){if(qx.$$loader&&qx.$$loader.delayDefer){this.__a.push(bE);bE.$$pendingDefer=bD;}
else {bD.call(bE);}
;}
,executePendingDefers:function(bK){var bI=function(bO){if(bO.environment){var bM=bO.environment.required;if(bM){for(var bP in bM){var bL=bM[bP];if(bL.load&&bL.className){bG(bL.className);}
;}
;}
;}
;for(var bP in bO.dependsOn){var bN=bO.dependsOn[bP];if(bN.require||bN.usage===z){bG(bP);}
;}
;}
;var bG=function(bQ){var bS=bH(bQ);if(!bS){return;}
;if(bS.$$deferComplete){return;}
;var bR=bS.$$dbClassInfo;if(bR){bI(bR);}
;bF(bS);}
;var bF=function(bU){var bT=bU.$$pendingDefer;if(bT){delete bU.$$pendingDefer;bU.$$deferComplete=true;bT.call(bU);}
;}
;var bH=function(name){var bY=qx.Bootstrap.getByName(name);if(!bY){var bW=name.split(T);var ca=bW[0];var cc=qx.$$namespaceRoot&&qx.$$namespaceRoot[ca]?qx.$$namespaceRoot:window;var bV=cc;for(var i=0,bX=bW.length-1;bV&&i<bX;i++ ,ca=bW[i]){bV=bV[ca];}
;if(bV!=cc){bY=bV;}
;}
;return bY;}
;if(!bK){var bJ=this.__a;this.__a=[];bJ.forEach(bF);return;}
;bI(bK);}
,getByName:function(name){return qx.Bootstrap.$$registry[name];}
,$$registry:{},objectGetLength:function(cd){return qx.Bootstrap.keys(cd).length;}
,objectMergeWith:function(cf,ce,ch){if(ch===undefined){ch=true;}
;for(var cg in ce){if(ch||cf[cg]===undefined){cf[cg]=ce[cg];}
;}
;return cf;}
,__b:[E,o,s,u,N,V,j],keys:({"ES5":Object.keys,"BROKEN_IE":function(ci){if(ci===null||(typeof ci!==W&&typeof ci!==c)){throw new TypeError(h);}
;var cj=[];var cl=Object.prototype.hasOwnProperty;for(var cm in ci){if(cl.call(ci,cm)){cj.push(cm);}
;}
;var ck=qx.Bootstrap.__b;for(var i=0,a=ck,l=a.length;i<l;i++ ){if(cl.call(ci,a[i])){cj.push(a[i]);}
;}
;return cj;}
,"default":function(cn){if(cn===null||(typeof cn!==W&&typeof cn!==c)){throw new TypeError(h);}
;var co=[];var cp=Object.prototype.hasOwnProperty;for(var cq in cn){if(cp.call(cn,cq)){co.push(cq);}
;}
;return co;}
})[typeof (Object.keys)===c?S:(function(){for(var cr in {toString:1}){return cr;}
;}
)()!==u?D:m],__c:{"[object String]":B,"[object Array]":L,"[object Object]":A,"[object RegExp]":y,"[object Number]":O,"[object Boolean]":f,"[object Date]":F,"[object Function]":I,"[object AsyncFunction]":I,"[object Error]":g,"[object Blob]":v,"[object ArrayBuffer]":U,"[object FormData]":P},bind:function(ct,self,cu){var cs=Array.prototype.slice.call(arguments,2,arguments.length);return function(){var cv=Array.prototype.slice.call(arguments,0,arguments.length);return ct.apply(self,cs.concat(cv));}
;}
,firstUp:function(cw){return cw.charAt(0).toUpperCase()+cw.substr(1);}
,firstLow:function(cx){return cx.charAt(0).toLowerCase()+cx.substr(1);}
,getClass:function(cz){if(cz===undefined){return p;}
else if(cz===null){return n;}
;var cy=Object.prototype.toString.call(cz);return (qx.Bootstrap.__c[cy]||cy.slice(8,-1));}
,isString:function(cA){return (cA!==null&&(typeof cA===q||qx.Bootstrap.getClass(cA)===B||cA instanceof String||(!!cA&&!!cA.$$isString)));}
,isArray:function(cB){return (cB!==null&&(cB instanceof Array||(cB&&qx.data&&qx.data.IListData&&qx.util.OOUtil.hasInterface(cB.constructor,qx.data.IListData))||qx.Bootstrap.getClass(cB)===L||(!!cB&&!!cB.$$isArray)));}
,isObject:function(cC){return (cC!==undefined&&cC!==null&&qx.Bootstrap.getClass(cC)===A);}
,isFunction:function(cD){return qx.Bootstrap.getClass(cD)===I;}
,isFunctionOrAsyncFunction:function(cE){var name=qx.Bootstrap.getClass(cE);return ((name===I)||(name===e));}
,$$logs:[],debug:function(cG,cF){qx.Bootstrap.$$logs.push([R,arguments]);}
,info:function(cI,cH){qx.Bootstrap.$$logs.push([C,arguments]);}
,warn:function(cK,cJ){qx.Bootstrap.$$logs.push([k,arguments]);}
,error:function(cM,cL){qx.Bootstrap.$$logs.push([t,arguments]);}
,trace:function(cN){}
}});}
)();
(function(){var a="qx.util.OOUtil";qx.Bootstrap.define(a,{statics:{classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;}
,getPropertyDefinition:function(b,name){while(b){if(b.$$properties&&b.$$properties[name]){return b.$$properties[name];}
;b=b.superclass;}
;return null;}
,hasProperty:function(c,name){return !!qx.util.OOUtil.getPropertyDefinition(c,name);}
,getEventType:function(d,name){var d=d.constructor;while(d.superclass){if(d.$$events&&d.$$events[name]!==undefined){return d.$$events[name];}
;d=d.superclass;}
;return null;}
,supportsEvent:function(e,name){return !!qx.util.OOUtil.getEventType(e,name);}
,getByInterface:function(h,f){var g,i,l;while(h){if(h.$$implements){g=h.$$flatImplements;for(i=0,l=g.length;i<l;i++ ){if(g[i]===f){return h;}
;}
;}
;h=h.superclass;}
;return null;}
,hasInterface:function(k,j){return !!qx.util.OOUtil.getByInterface(k,j);}
,getMixins:function(n){var m=[];while(n){if(n.$$includes){m.push.apply(m,n.$$flatIncludes);}
;n=n.superclass;}
;return m;}
}});}
)();
(function(){var a="qx.core.Environment",b="&",c=' type)',d="qx/static/blank.html",e="' is undefined.",f="|",g="default",h="false",j='] found, and no default ("default") given',k="qx.allowUrlSettings",l=":",m="true",n='" (',o=' in variants [',p=".",q="The environment key '",r='No match for variant "',s="qxenv";qx.Bootstrap.define(a,{statics:{_checks:{},_asyncChecks:{},__d:{},_checksMap:{},_defaults:{"true":true,"qx.allowUrlSettings":false,"qx.allowUrlVariants":false,"qx.debug.property.level":0,"qx.debug":true,"qx.debug.ui.queue":true,"qx.debug.touchpad.detection":false,"qx.aspects":false,"qx.dynlocale":true,"qx.dyntheme":true,"qx.blankpage":d,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.optimization.basecalls":false,"qx.optimization.comments":false,"qx.optimization.privates":false,"qx.optimization.strings":false,"qx.optimization.variables":false,"qx.optimization.variants":false,"module.databinding":true,"module.logger":true,"module.property":true,"module.events":true,"module.objectid":true,"qx.nativeScrollBars":false,"qx.automaticMemoryManagement":true,"qx.promise":true,"qx.promise.warnings":true,"qx.promise.longStackTraces":true,"qx.command.bindEnabled":false},get:function(w){if(this.__d[w]!=undefined){return this.__d[w];}
;var y=this._checks[w];if(y){var u=y();this.__d[w]=u;return u;}
;var t=this._getClassNameFromEnvKey(w);if(t[0]!=undefined){var x=t[0];var v=t[1];var u=x[v]();this.__d[w]=u;return u;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(q+w+e);qx.Bootstrap.trace(this);}
;}
,_getClassNameFromEnvKey:function(D){var F=this._checksMap;if(F[D]!=undefined){var A=F[D];var E=A.lastIndexOf(p);if(E>-1){var C=A.slice(0,E);var z=A.slice(E+1);var B=qx.Bootstrap.getByName(C);if(B!=undefined){return [B,z];}
;}
;}
;return [undefined,undefined];}
,getAsync:function(H,K,self){var L=this;if(this.__d[H]!=undefined){window.setTimeout(function(){K.call(self,L.__d[H]);}
,0);return;}
;var I=this._asyncChecks[H];if(I){I(function(N){L.__d[H]=N;K.call(self,N);}
);return;}
;var G=this._getClassNameFromEnvKey(H);if(G[0]!=undefined){var J=G[0];var M=G[1];J[M](function(O){L.__d[H]=O;K.call(self,O);}
);return;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(q+H+e);qx.Bootstrap.trace(this);}
;}
,select:function(Q,P){return this.__e(this.get(Q),P);}
,selectAsync:function(S,R,self){this.getAsync(S,function(T){var U=this.__e(S,R);U.call(self,T);}
,this);}
,__e:function(Y,X){var W=X[Y];if(X.hasOwnProperty(Y)){return W;}
;for(var ba in X){if(ba.indexOf(f)!=-1){var V=ba.split(f);for(var i=0;i<V.length;i++ ){if(V[i]==Y){return X[ba];}
;}
;}
;}
;if(X[g]!==undefined){return X[g];}
;if(qx.Bootstrap.DEBUG){throw new Error(r+Y+n+(typeof Y)+c+o+qx.Bootstrap.keys(X)+j);}
;}
,filter:function(bb){var bd=[];for(var bc in bb){if(this.get(bc)){bd.push(bb[bc]);}
;}
;return bd;}
,invalidateCacheKey:function(be){delete this.__d[be];}
,add:function(bg,bf){if(this._checks[bg]==undefined){if(bf instanceof Function){if(!this._checksMap[bg]&&bf.displayName){this._checksMap[bg]=bf.displayName.substr(0,bf.displayName.length-2);}
;this._checks[bg]=bf;}
else {this._checks[bg]=this.__h(bf);}
;}
;}
,addAsync:function(bi,bh){if(this._checks[bi]==undefined){this._asyncChecks[bi]=bh;}
;}
,getChecks:function(){return this._checks;}
,getAsyncChecks:function(){return this._asyncChecks;}
,_initDefaultQxValues:function(){var bj=function(bl){return function(){return bl;}
;}
;for(var bk in this._defaults){this.add(bk,bj(this._defaults[bk]));}
;}
,__f:function(){if(qx&&qx.$$environment){for(var bm in qx.$$environment){var bn=qx.$$environment[bm];this._checks[bm]=this.__h(bn);}
;}
;}
,__g:function(){if(window.document&&window.document.location){var bo=window.document.location.search.slice(1).split(b);for(var i=0;i<bo.length;i++ ){var br=bo[i].split(l);if(br.length!=3||br[0]!=s){continue;}
;var bp=br[1];var bq=decodeURIComponent(br[2]);if(bq==m){bq=true;}
else if(bq==h){bq=false;}
else if(/^(\d|\.)+$/.test(bq)){bq=parseFloat(bq);}
;this._checks[bp]=this.__h(bq);}
;}
;}
,__h:function(bs){return qx.Bootstrap.bind(function(bt){return bt;}
,null,bs);}
},defer:function(bu){bu._initDefaultQxValues();bu.__f();if(bu.get(k)===true){bu.__g();}
;}
});}
)();
(function(){var a="ecmascript.string.startsWith",b="function",c="AsyncFunction",d="[native code]",g="ecmascript.array.indexof",h="qx.bom.client.EcmaScript",i="ecmascript.array.foreach",j="ecmascript.array.findIndex",k="ecmascript.array.reduceright",l="ecmascript.array.reduce",m="stack",n="ecmascript.array.map",o="ecmascript.date.parse",p="2001-02-03T04:05:06.007Z",q="ecmascript.object.keys",r="ecmascript.string.trim",s="[object Error]",t="ecmascript.bigint.tolocalestring",u="ecmascript.array.every",v="1,234",w="ecmascript.array.includes",x="ecmascript.mutationobserver",y="ecmascript.array.filter",z="ecmascript.string.endsWith",A="ecmascript.object.is",B="2001-02-03T04:05:06.007",C="ecmascript.array.some",D="stacktrace",E="ecmascript.error.toString",F="ecmascript.function.bind",G="ecmascript.promise.native",H="ecmascript.array.find",I="ecmascript.array.lastindexof",J="f = async function(){};",K="e",L="ecmascript.bigint",M="ecmascript.error.stacktrace",N="de-DE",O="ecmascript.number.EPSILON",P="ecmascript.object.values",Q="undefined",R="ecmascript.function.async",S="ecmascript.date.now";qx.Bootstrap.define(h,{statics:{getStackTrace:function(){var T;var e=new Error(K);T=e.stack?m:e.stacktrace?D:null;if(!T){try{throw e;}
catch(U){e=U;}
;}
;return e.stacktrace?D:e.stack?m:null;}
,getMutationObserver:function(){return typeof MutationObserver!=Q;}
,getArrayIndexOf:function(){return !!Array.prototype.indexOf;}
,getArrayLastIndexOf:function(){return !!Array.prototype.lastIndexOf;}
,getArrayForEach:function(){return !!Array.prototype.forEach;}
,getArrayFilter:function(){return !!Array.prototype.filter;}
,getArrayMap:function(){return !!Array.prototype.map;}
,getArraySome:function(){return !!Array.prototype.some;}
,getArrayFind:function(){return !!Array.prototype.find;}
,getArrayFindIndex:function(){return !!Array.prototype.findIndex;}
,getArrayEvery:function(){return !!Array.prototype.every;}
,getArrayReduce:function(){return !!Array.prototype.reduce;}
,getArrayReduceRight:function(){return !!Array.prototype.reduceRight;}
,getArrayIncludes:function(){return !!Array.prototype.includes;}
,getErrorToString:function(){return typeof Error.prototype.toString==b&&Error.prototype.toString()!==s;}
,getFunctionBind:function(){return typeof Function.prototype.bind===b;}
,getAsyncFunction:function(){var f;try{eval(J);}
catch(e){return false;}
;return qx.Bootstrap.getClass(f)===c;}
,getObjectKeys:function(){return !!Object.keys;}
,getObjectValues:function(){return !!Object.values;}
,getObjectIs:function(){return !!Object.is;}
,getDateNow:function(){return !!Date.now;}
,getDateParse:function(){return typeof Date.parse===b&&(Date.parse(B)!=Date.parse(p));}
,getStringStartsWith:function(){return typeof String.prototype.startsWith===b;}
,getStringEndsWith:function(){return typeof String.prototype.endsWith===b;}
,getStringTrim:function(){return typeof String.prototype.trim===b;}
,getBigInt:function(){return typeof BigInt!==Q;}
,getBigIntToLocaleString:function(){return typeof BigInt!==Q&&typeof BigInt.prototype.toLocaleString===b&&(BigInt(1234).toLocaleString(N)===v);}
,getPromiseNative:function(){return typeof window.Promise!==Q&&window.Promise.toString().indexOf(d)!==-1;}
,getEpsilon:function(){return typeof Number.prototype.EPSILON!==Q;}
},defer:function(V){qx.core.Environment.add(g,V.getArrayIndexOf);qx.core.Environment.add(I,V.getArrayLastIndexOf);qx.core.Environment.add(i,V.getArrayForEach);qx.core.Environment.add(y,V.getArrayFilter);qx.core.Environment.add(n,V.getArrayMap);qx.core.Environment.add(C,V.getArraySome);qx.core.Environment.add(H,V.getArrayFind);qx.core.Environment.add(j,V.getArrayFindIndex);qx.core.Environment.add(u,V.getArrayEvery);qx.core.Environment.add(l,V.getArrayReduce);qx.core.Environment.add(k,V.getArrayReduceRight);qx.core.Environment.add(w,V.getArrayIncludes);qx.core.Environment.add(S,V.getDateNow);qx.core.Environment.add(o,V.getDateParse);qx.core.Environment.add(E,V.getErrorToString);qx.core.Environment.add(M,V.getStackTrace);qx.core.Environment.add(F,V.getFunctionBind);qx.core.Environment.add(q,V.getObjectKeys);qx.core.Environment.add(P,V.getObjectValues);qx.core.Environment.add(A,V.getObjectIs);qx.core.Environment.add(O,V.getEpsilon);qx.core.Environment.add(a,V.getStringStartsWith);qx.core.Environment.add(z,V.getStringEndsWith);qx.core.Environment.add(r,V.getStringTrim);qx.core.Environment.add(R,V.getAsyncFunction);qx.core.Environment.add(x,V.getMutationObserver);qx.core.Environment.add(L,V.getBigInt);qx.core.Environment.add(t,V.getBigIntToLocaleString);qx.core.Environment.add(G,V.getPromiseNative);}
});}
)();
(function(){var a="qx.lang.normalize.Function",b="ecmascript.function.bind",c="function",d="Function.prototype.bind called on incompatible ";qx.Bootstrap.define(a,{statics:{bind:function(i){var e=Array.prototype.slice;var h=this;if(typeof h!=c){throw new TypeError(d+h);}
;var f=e.call(arguments,1);var g=function(){if(this instanceof g){var F=function(){}
;F.prototype=h.prototype;var self=new F;var j=h.apply(self,f.concat(e.call(arguments)));if(Object(j)===j){return j;}
;return self;}
else {return h.apply(i,f.concat(e.call(arguments)));}
;}
;return g;}
},defer:function(k){if(!qx.core.Environment.get(b)){Function.prototype.bind=k.bind;}
;}
});}
)();
(function(){var a="function",b="Length is 0 and no second argument given",c="qx.lang.normalize.Array",d="ecmascript.array.indexof",e="includes",f="ecmascript.array.foreach",g="ecmascript.array.findIndex",h="filter",j="ecmascript.array.reduceright",m="indexOf",p="ecmascript.array.map",q="reduceRight",r="qx.debug",s="lastIndexOf",t="some",u="find",v="ecmascript.array.reduce",w="ecmascript.array.every",z="ecmascript.array.includes",A="ecmascript.array.filter",B="findIndex",C='number',D='"this" is null or not defined',E="ecmascript.array.some",F="First argument is not callable",G="every",H="ecmascript.array.lastindexof",I="ecmascript.array.find",J="reduce",K="forEach",L="map";qx.Bootstrap.define(c,{statics:{indexOf:function(M,N){if(N==null){N=0;}
else if(N<0){N=Math.max(0,this.length+N);}
;for(var i=N;i<this.length;i++ ){if(this[i]===M){return i;}
;}
;return -1;}
,lastIndexOf:function(O,P){if(P==null){P=this.length-1;}
else if(P<0){P=Math.max(0,this.length+P);}
;for(var i=P;i>=0;i-- ){if(this[i]===O){return i;}
;}
;return -1;}
,forEach:function(Q,R){var l=this.length;for(var i=0;i<l;i++ ){var S=this[i];if(S!==undefined){Q.call(R||window,S,i,this);}
;}
;}
,filter:function(W,T){var U=[];var l=this.length;for(var i=0;i<l;i++ ){var V=this[i];if(V!==undefined){if(W.call(T||window,V,i,this)){U.push(this[i]);}
;}
;}
;return U;}
,map:function(bb,X){var Y=[];var l=this.length;for(var i=0;i<l;i++ ){var ba=this[i];if(ba!==undefined){Y[i]=bb.call(X||window,ba,i,this);}
;}
;return Y;}
,some:function(bc,bd){var l=this.length;for(var i=0;i<l;i++ ){var be=this[i];if(be!==undefined){if(bc.call(bd||window,be,i,this)){return true;}
;}
;}
;return false;}
,every:function(bf,bg){var l=this.length;for(var i=0;i<l;i++ ){var bh=this[i];if(bh!==undefined){if(!bf.call(bg||window,bh,i,this)){return false;}
;}
;}
;return true;}
,find:function(bi,bj){if(qx.core.Environment.get(r)){qx.core.Assert.assertFunction(bi);}
;var l=this.length;for(var i=0;i<l;i++ ){var bk=this[i];if(bi.call(bj||window,bk,i,this)){return bk;}
;}
;return undefined;}
,findIndex:function(bl,bm){if(qx.core.Environment.get(r)){qx.core.Assert.assertFunction(bl);}
;var l=this.length;for(var i=0;i<l;i++ ){var bn=this[i];if(bl.call(bm||window,bn,i,this)){return i;}
;}
;return -1;}
,reduce:function(bo,bp){if(typeof bo!==a){throw new TypeError(F);}
;if(bp===undefined&&this.length===0){throw new TypeError(b);}
;var bq=bp===undefined?this[0]:bp;for(var i=bp===undefined?1:0;i<this.length;i++ ){if(i in this){bq=bo.call(undefined,bq,this[i],i,this);}
;}
;return bq;}
,reduceRight:function(br,bs){if(typeof br!==a){throw new TypeError(F);}
;if(bs===undefined&&this.length===0){throw new TypeError(b);}
;var bt=bs===undefined?this[this.length-1]:bs;for(var i=bs===undefined?this.length-2:this.length-1;i>=0;i-- ){if(i in this){bt=br.call(undefined,bt,this[i],i,this);}
;}
;return bt;}
,includes:function(bu,bv){if(this==null){throw new TypeError(D);}
;var o=Object(this);var bw=o.length>>>0;if(bw===0){return false;}
;var n=bv|0;var k=Math.max(n>=0?n:bw-Math.abs(n),0);function bx(x,y){return x===y||(typeof x===C&&typeof y===C&&isNaN(x)&&isNaN(y));}
;while(k<bw){if(bx(o[k],bu)){return true;}
;k++ ;}
;return false;}
},defer:function(by){var bz=function(bA,name){if(!qx.core.Environment.get(bA)){Object.defineProperty(Array.prototype,name,{enumerable:false,value:by[name]});}
;}
;bz(d,m);bz(H,s);bz(f,K);bz(A,h);bz(p,L);bz(E,t);bz(I,u);bz(g,B);bz(w,G);bz(v,J);bz(j,q);bz(z,e);}
});}
)();
(function(){var a="qx.lang.Type",b="Error",c="RegExp",d="Date",e="Number",f="Boolean";qx.Bootstrap.define(a,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isFunctionOrAsyncFunction:qx.Bootstrap.isFunctionOrAsyncFunction,isRegExp:function(g){return this.getClass(g)===c;}
,isNumber:function(h){return (h!==null&&(this.getClass(h)===e||h instanceof Number));}
,isBoolean:function(i){return (i!==null&&(this.getClass(i)===f||i instanceof Boolean));}
,isDate:function(j){return (j!==null&&(this.getClass(j)===d||j instanceof Date));}
,isError:function(k){return (k!==null&&(this.getClass(k)===b||k instanceof Error));}
,isPromise:function(l){return (l!=null)&&this.isFunction(l.then);}
}});}
)();
(function(){var a=" != ",b="qx.core.Object",c="Expected value to be an array but found ",d="' (rgb(",f=") was fired.",g="Expected value to be an integer >= 0 but found ",h="' to be not equal with '",j="' to '",k="Expected object '",m="Called assertTrue with '",n="Expected value to be a map but found ",o="The function did not raise an exception!",p="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",s="' to implement the interface '",t="Expected value to be null but found ",u="Invalid argument 'type'",v="' to be equal with '",w="Assertion error! ",x="'",y="null",z="' but found '",A="'undefined'",B=",",C="' must must be a key of the map '",D="Expected '",E="The String '",F="Expected value to be a string but found ",G="Event (",H="Expected value to be the CSS color '",I="!",J="Called assert with 'false'",K="qx.util.ColorUtil",L="The value '%1' must not have any of the values defined in the array '%2'",M=": ",N="The raised exception does not have the expected type! ",O=") not fired.",P="Expected value not to be undefined but found undefined!",Q="'!",R="qx.core.Assert",S="",T="Expected value to be typeof object but found ",U="' but found ",V="' (identical) but found '",W="' must have any of the values defined in the array '",X="Expected value to be a number but found ",Y="Expected value to be typeof function or typeof async function but found ",bO="Called assertFalse with '",bP="qx.ui.core.Widget",bQ="]",bK="Expected value to be a qooxdoo object but found ",bL="' arguments.",bM="Expected value '%1' to be in the range '%2'..'%3'!",bN="Array[",bU="' does not match the regular expression '",bV="' to be not identical with '",bW="Expected [",cm="' arguments but found '",bR="', which cannot be converted to a CSS color!",bS=", ",bT="qx.core.AssertionError",bG="Expected value to be a boolean but found ",ca="Expected value not to be null but found null!",bJ="))!",cb="Expected value to be a qooxdoo widget but found ",cc="The value '",bI="Expected value to be typeof '",bX="\n Stack trace: \n",cl="Expected value to be typeof function but found ",bY="Expected value to be an integer but found ",cd="Called fail().",ce="The parameter 're' must be a string or a regular expression.",cf=")), but found value '",ci="qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'",cj="Expected value to be a number >= 0 but found ",ck="Expected value to be instanceof '",bH="], but found [",cg="Wrong number of arguments given. Expected '",ch="object";qx.Bootstrap.define(R,{statics:{__i:true,__j:function(cn,co){var cs=S;for(var i=1,l=arguments.length;i<l;i++ ){cs=cs+this.__k(arguments[i]===undefined?A:arguments[i]);}
;var cr=S;if(cs){cr=cn+M+cs;}
else {cr=cn;}
;var cq=w+cr;if(qx.Class&&qx.Class.isDefined(bT)){var cp=new qx.core.AssertionError(cn,cs);if(this.__i){qx.Bootstrap.error(cq+bX+cp.getStackTrace());}
;throw cp;}
else {if(this.__i){qx.Bootstrap.error(cq);}
;throw new Error(cq);}
;}
,__k:function(cu){var ct;if(cu===null){ct=y;}
else if(qx.lang.Type.isArray(cu)&&cu.length>10){ct=bN+cu.length+bQ;}
else if((cu instanceof Object)&&(cu.toString==null)){ct=qx.lang.Json.stringify(cu,null,2);}
else {try{ct=cu.toString();}
catch(e){ct=S;}
;}
;return ct;}
,assert:function(cw,cv){cw==true||this.__j(cv||S,J);}
,fail:function(cx,cy){var cz=cy?S:cd;this.__j(cx||S,cz);}
,assertTrue:function(cB,cA){(cB===true)||this.__j(cA||S,m,cB,x);}
,assertFalse:function(cD,cC){(cD===false)||this.__j(cC||S,bO,cD,x);}
,assertEquals:function(cE,cF,cG){cE==cF||this.__j(cG||S,D,cE,z,cF,Q);}
,assertNotEquals:function(cH,cI,cJ){cH!=cI||this.__j(cJ||S,D,cH,h,cI,Q);}
,assertEqualsFloat:function(cK,cL,cM){this.assertNumber(cK);this.assertNumber(cL);qx.lang.Number.equals(cK,cL)||this.__j(cM||S,D,cK,v,cL,Q);}
,assertNotEqualsFloat:function(cN,cO,cP){this.assertNumber(cN);this.assertNumber(cO);!qx.lang.Number.equals(cN,cO)||this.__j(cP||S,D,cN,h,cO,Q);}
,assertIdentical:function(cQ,cR,cS){cQ===cR||this.__j(cS||S,D,cQ,V,cR,Q);}
,assertNotIdentical:function(cT,cU,cV){cT!==cU||this.__j(cV||S,D,cT,bV,cU,Q);}
,assertNotUndefined:function(cX,cW){cX!==undefined||this.__j(cW||S,P);}
,assertUndefined:function(da,cY){da===undefined||this.__j(cY||S,p,da,I);}
,assertNotNull:function(dc,db){dc!==null||this.__j(db||S,ca);}
,assertNull:function(de,dd){de===null||this.__j(dd||S,t,de,I);}
,assertJsonEquals:function(df,dg,dh){this.assertEquals(qx.lang.Json.stringify(df),qx.lang.Json.stringify(dg),dh);}
,assertMatch:function(dk,dj,di){this.assertString(dk);this.assert(qx.lang.Type.isRegExp(dj)||qx.lang.Type.isString(dj),ce);dk.search(dj)>=0||this.__j(di||S,E,dk,bU,dj.toString(),Q);}
,assertArgumentsCount:function(dn,dp,dq,dl){var dm=dn.length;(dm>=dp&&dm<=dq)||this.__j(dl||S,cg,dp,j,dq,cm,dm,bL);}
,assertEventFired:function(dr,event,du,dv,dw){var ds=false;var dt=function(e){if(dv){dv.call(dr,e);}
;ds=true;}
;var dx;try{dx=dr.addListener(event,dt,dr);du.call(dr);}
catch(dy){throw dy;}
finally{try{dr.removeListenerById(dx);}
catch(dz){}
;}
;ds===true||this.__j(dw||S,G,event,O);}
,assertEventNotFired:function(dA,event,dD,dE){var dB=false;var dC=function(e){dB=true;}
;var dF=dA.addListener(event,dC,dA);dD.call();dB===false||this.__j(dE||S,G,event,f);dA.removeListenerById(dF);}
,assertException:function(dJ,dI,dH,dG){var dI=dI||Error;var dK;try{this.__i=false;dJ();}
catch(dL){dK=dL;}
finally{this.__i=true;}
;if(dK==null){this.__j(dG||S,o);}
;dK instanceof dI||this.__j(dG||S,N,dI,a,dK);if(dH){this.assertMatch(dK.toString(),dH,dG);}
;}
,assertInArray:function(dO,dN,dM){dN.indexOf(dO)!==-1||this.__j(dM||S,cc,dO,W,dN,x);}
,assertNotInArray:function(dR,dQ,dP){dQ.indexOf(dR)===-1||this.__j(dP||S,qx.lang.String.format(L,[dR,dQ]));}
,assertArrayEquals:function(dS,dT,dU){this.assertArray(dS,dU);this.assertArray(dT,dU);dU=dU||bW+dS.join(bS)+bH+dT.join(bS)+bQ;if(dS.length!==dT.length){this.fail(dU,true);}
;for(var i=0;i<dS.length;i++ ){if(dS[i]!==dT[i]){this.fail(dU,true);}
;}
;}
,assertKeyInMap:function(dX,dW,dV){dW[dX]!==undefined||this.__j(dV||S,cc,dX,C,dW,x);}
,assertFunction:function(ea,dY){qx.lang.Type.isFunction(ea)||this.__j(dY||S,cl,ea,I);}
,assertFunctionOrAsyncFunction:function(ec,eb){qx.lang.Type.isFunctionOrAsyncFunction(ec)||this.__j(eb||S,Y,ec,I);}
,assertString:function(ee,ed){qx.lang.Type.isString(ee)||this.__j(ed||S,F,ee,I);}
,assertBoolean:function(eg,ef){qx.lang.Type.isBoolean(eg)||this.__j(ef||S,bG,eg,I);}
,assertNumber:function(ei,eh){(qx.lang.Type.isNumber(ei)&&isFinite(ei))||this.__j(eh||S,X,ei,I);}
,assertPositiveNumber:function(ek,ej){(qx.lang.Type.isNumber(ek)&&isFinite(ek)&&ek>=0)||this.__j(ej||S,cj,ek,I);}
,assertInteger:function(em,el){(qx.lang.Type.isNumber(em)&&isFinite(em)&&em%1===0)||this.__j(el||S,bY,em,I);}
,assertPositiveInteger:function(ep,en){var eo=(qx.lang.Type.isNumber(ep)&&isFinite(ep)&&ep%1===0&&ep>=0);eo||this.__j(en||S,g,ep,I);}
,assertInRange:function(es,et,er,eq){(es>=et&&es<=er)||this.__j(eq||S,qx.lang.String.format(bM,[es,et,er]));}
,assertObject:function(ev,eu){var ew=ev!==null&&(qx.lang.Type.isObject(ev)||typeof ev===ch);ew||this.__j(eu||S,T,(ev),I);}
,assertArray:function(ez,ey){qx.lang.Type.isArray(ez)||this.__j(ey||S,c,ez,I);}
,assertMap:function(eB,eA){qx.lang.Type.isObject(eB)||this.__j(eA||S,n,eB,I);}
,assertRegExp:function(eD,eC){qx.lang.Type.isRegExp(eD)||this.__j(eC||S,r,eD,I);}
,assertType:function(eG,eF,eE){this.assertString(eF,u);typeof (eG)===eF||this.__j(eE||S,bI,eF,U,eG,I);}
,assertInstance:function(eJ,eK,eH){var eI=eK.classname||eK+S;eJ instanceof eK||this.__j(eH||S,ck,eI,U,eJ,I);}
,assertInterface:function(eN,eM,eL){qx.Class&&qx.Class.implementsInterface(eN,eM)||this.__j(eL||S,k,eN,s,eM,Q);}
,assertCssColor:function(eT,eQ,eS){var eO=qx.Class?qx.Class.getByName(K):null;if(!eO){throw new Error(ci);}
;var eP=eO.stringToRgb(eT);try{var eR=eO.stringToRgb(eQ);}
catch(eV){this.__j(eS||S,H,eT,d,eP.join(B),cf,eQ,bR);}
;var eU=eP[0]==eR[0]&&eP[1]==eR[1]&&eP[2]==eR[2];eU||this.__j(eS||S,H,eP,d,eP.join(B),cf,eQ,d,eR.join(B),bJ);}
,assertElement:function(eX,eW){!!(eX&&eX.nodeType===1)||this.__j(eW||S,q,eX,Q);}
,assertQxObject:function(fa,eY){this.__l(fa,b)||this.__j(eY||S,bK,fa,I);}
,assertQxWidget:function(fc,fb){this.__l(fc,bP)||this.__j(fb||S,cb,fc,I);}
,__l:function(fe,fd){if(!fe){return false;}
;var ff=fe.constructor;while(ff){if(ff.classname===fd){return true;}
;ff=ff.superclass;}
;return false;}
}});}
)();
(function(){var a=": ",b="qx.type.BaseError",c="",d="error";qx.Bootstrap.define(b,{extend:Error,construct:function(e,f){var g=Error.call(this,f);if(g.stack){this.stack=g.stack;}
;if(g.stacktrace){this.stacktrace=g.stacktrace;}
;this.__m=e||c;this.message=f||qx.type.BaseError.DEFAULTMESSAGE;}
,statics:{DEFAULTMESSAGE:d},members:{__n:null,__m:null,message:null,getComment:function(){return this.__m;}
,toString:function(){return this.__m+(this.message?a+this.message:c);}
}});}
)();
(function(){var a="qx.core.AssertionError";qx.Bootstrap.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);this.__o=qx.dev.StackTrace.getStackTrace();}
,members:{__o:null,getStackTrace:function(){return this.__o;}
}});}
)();
(function(){var a="ecmascript.string.startsWith",b="ecmascript.string.endsWith",c="qx.lang.normalize.String",d='number',e='',f="ecmascript.string.trim";qx.Bootstrap.define(c,{statics:{trim:function(){return this.replace(/^\s+|\s+$/g,e);}
,startsWith:function(h,g){g=g||0;return this.substr(g,h.length)===h;}
,endsWith:function(j,i){var l=this.toString();if(typeof i!==d||!isFinite(i)||Math.floor(i)!==i||i>l.length){i=l.length;}
;i-=j.length;var k=l.indexOf(j,i);return k!==-1&&k===i;}
},defer:function(m){if(!qx.core.Environment.get(f)){String.prototype.trim=m.trim;}
;if(!qx.core.Environment.get(a)){String.prototype.startsWith=m.startsWith;}
;if(!qx.core.Environment.get(b)){String.prototype.endsWith=m.endsWith;}
;}
});}
)();
(function(){var a="?",b="anonymous",c="...",d="qx.dev.StackTrace",e="",f="\n",g="stacktrace",h="/source/class/",j="Error created at",k="FILENAME_TO_CLASSNAME must return a string!",l="qx.debug",m="ecmascript.error.stacktrace",n="Backtrace:",o="stack",p="FORMAT_STACKTRACE must return an array of strings!",q=":",r=".",s="function",t="prototype",u='undefined';qx.Bootstrap.define(d,{statics:{FILENAME_TO_CLASSNAME:null,FORMAT_STACKTRACE:null,getStackTrace:function(){var x=[];try{throw new Error();}
catch(K){if(qx.dev.StackTrace.hasEnvironmentCheck&&qx.core.Environment.get(m)){var C=qx.dev.StackTrace.getStackTraceFromError(K);var F=qx.dev.StackTrace.getStackTraceFromCaller(arguments);qx.lang.Array.removeAt(C,0);x=F.length>C.length?F:C;for(var i=0;i<Math.min(F.length,C.length);i++ ){var A=F[i];if(A.indexOf(b)>=0){continue;}
;var w=null;var G=A.split(r);var z=/(.*?)\(/.exec(G[G.length-1]);if(z&&z.length==2){w=z[1];G.pop();}
;if(G[G.length-1]==t){G.pop();}
;var I=G.join(r);var y=C[i];var J=y.split(q);var E=J[0];var D=J[1];var v;if(J[2]){v=J[2];}
;var B=null;if(qx.Class&&qx.Class.getByName(E)){B=E;}
else {B=I;}
;var H=B;if(w){H+=r+w;}
;H+=q+D;if(v){H+=q+v;}
;x[i]=H;}
;}
else {x=this.getStackTraceFromCaller(arguments);}
;}
;return x;}
,getStackTraceFromCaller:function(O){var P=function(){return (typeof this==u);}
;var N=[];var R=null;if(!P()){try{R=qx.lang.Function.getCaller(O);}
catch(S){}
;}
;var L={};while(R){var Q=qx.lang.Function.getName(R);N.push(Q);try{R=R.caller;}
catch(T){break;}
;if(!R){break;}
;var M=qx.core.ObjectRegistry.toHashCode(R);if(L[M]){N.push(c);break;}
;L[M]=R;}
;return N;}
,getStackTraceFromError:function(bj){var ba=[];var X,Y,bg,W,V,bl,bh;var bi=qx.dev.StackTrace.hasEnvironmentCheck?qx.core.Environment.get(m):null;if(bi===o){if(!bj.stack){return ba;}
;X=/@(.+):(\d+)$/gm;while((Y=X.exec(bj.stack))!=null){bh=Y[1];W=Y[2];bg=this.__p(bh);ba.push(bg+q+W);}
;if(ba.length>0){return this.__r(ba);}
;X=/at (.*)/gm;var bk=/\((.*?)(:[\d:]+)\)/;var bf=/(.*?)(:[\d:]+$)/;while((Y=X.exec(bj.stack))!=null){var be=bk.exec(Y[1]);if(!be){be=bf.exec(Y[1]);}
;if(be){bg=this.__p(be[1]);ba.push(bg+be[2]);}
else {ba.push(Y[1]);}
;}
;}
else if(bi===g){var bb=bj.stacktrace;if(!bb){return ba;}
;if(bb.indexOf(j)>=0){bb=bb.split(j)[0];}
;X=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;while((Y=X.exec(bb))!=null){W=Y[1];V=Y[2];bh=Y[3];bg=this.__p(bh);ba.push(bg+q+W+q+V);}
;if(ba.length>0){return this.__r(ba);}
;X=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;while((Y=X.exec(bb))!=null){W=Y[1];bh=Y[2];bg=this.__p(bh);ba.push(bg+q+W);}
;}
else if(bj.message&&bj.message.indexOf(n)>=0){var bd=bj.message.split(n)[1].trim();var bc=bd.split(f);for(var i=0;i<bc.length;i++ ){var U=bc[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);if(U&&U.length>=2){W=U[1];bl=this.__p(U[2]);ba.push(bl+q+W);}
;}
;}
else if(bj.sourceURL&&bj.line){ba.push(this.__p(bj.sourceURL)+q+bj.line);}
;return this.__r(ba);}
,__p:function(bn){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==s){var bm=qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bn);if(qx.core.Environment.get(l)&&!qx.lang.Type.isString(bm)){throw new Error(k);}
;return bm;}
;return qx.dev.StackTrace.__q(bn);}
,__q:function(bq){var br=h;var bo=bq.indexOf(br);var bs=bq.indexOf(a);if(bs>=0){bq=bq.substring(0,bs);}
;var bp=(bo==-1)?bq:bq.substring(bo+br.length).replace(/\//g,r).replace(/\.js$/,e);return bp;}
,__r:function(bt){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==s){bt=qx.dev.StackTrace.FORMAT_STACKTRACE(bt);if(qx.core.Environment.get(l)&&!qx.lang.Type.isArray(bt)){throw new Error(p);}
;}
;return bt;}
},defer:function(bu){bu.hasEnvironmentCheck=qx.bom&&qx.bom.client&&qx.bom.client.EcmaScript&&qx.bom.client.EcmaScript.getStackTrace;}
});}
)();
(function(){var a="qx.lang.normalize.Date",b="ecmascript.date.now",c="Z",d="+",e="ecmascript.date.parse";qx.Bootstrap.define(a,{statics:{now:function(){return +new Date();}
,parse:function(j){var f=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(j);if(!f){var g=Date.originalParse(j);if(isNaN(g)||isNaN((new Date()).setTime(g))){return NaN;}
;return g;}
;var h=[4,5,6,7].every(function(i){return f[i]===undefined;}
);[1,4,5,6,7,10,11].forEach(function(i){f[i]=+f[i]||0;}
);f[2]=(+f[2]||1)-1;f[3]=+f[3]||1;if(f[8]!==c&&f[9]===undefined&&!h){return new Date(f[1],f[2],f[3],f[4],f[5],f[6],f[7]).getTime();}
;var k=0;if(f[8]!==c){k=f[10]*60+f[11];if(f[9]===d){k=-k;}
;}
;return Date.UTC(f[1],f[2],f[3],f[4],f[5]+k,f[6],f[7]);}
},defer:function(l){if(!qx.core.Environment.get(b)){Date.now=l.now;}
;if(!qx.core.Environment.get(e)){Date.originalParse=Date.parse||function(m){return NaN;}
;Date.parse=l.parse;}
;}
});}
)();
(function(){var a="The second parameter must be an array.",b="mshtml",c="engine.name",d="[object Array]",e="qx.lang.Array",f="qx.debug",g="The first parameter must be an array.",h="Parameter must be an array.",j="]",k="qx",m="number",n="][",o="string",p="Cannot clean-up map entry doneObjects[";qx.Bootstrap.define(e,{statics:{cast:function(q,s,t){if(q.constructor===s){return q;}
;if(qx.data&&qx.data.IListData){if(qx.Class&&qx.Class.hasInterface(q,qx.data.IListData)){var q=q.toArray();}
;}
;var r=new s;if((qx.core.Environment.get(c)==b)){if(q.item){for(var i=t||0,l=q.length;i<l;i++ ){r.push(q[i]);}
;return r;}
;}
;if(Object.prototype.toString.call(q)===d&&t==null){r.push.apply(r,q);}
else {r.push.apply(r,Array.prototype.slice.call(q,t||0));}
;return r;}
,fromArguments:function(u,v){return Array.prototype.slice.call(u,v||0);}
,fromCollection:function(x){if((qx.core.Environment.get(c)==b)){if(x.item){var w=[];for(var i=0,l=x.length;i<l;i++ ){w[i]=x[i];}
;return w;}
;}
;return Array.prototype.slice.call(x,0);}
,fromShortHand:function(y){var A=y.length;var z=qx.lang.Array.clone(y);switch(A){case 1:z[1]=z[2]=z[3]=z[0];break;case 2:z[2]=z[0];case 3:z[3]=z[1];};return z;}
,clone:function(B){return B.concat();}
,insertAt:function(C,D,i){C.splice(i,0,D);return C;}
,insertBefore:function(E,G,F){var i=E.indexOf(F);if(i==-1){E.push(G);}
else {E.splice(i,0,G);}
;return E;}
,insertAfter:function(H,J,I){var i=H.indexOf(I);if(i==-1||i==(H.length-1)){H.push(J);}
else {H.splice(i+1,0,J);}
;return H;}
,removeAt:function(K,i){return K.splice(i,1)[0];}
,removeAll:function(L){L.length=0;return this;}
,append:function(N,M){if(N instanceof qx.data.Array){return N.append(M);}
;if(M instanceof qx.data.Array){M=M.toArray();}
;if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertArray(N,g);qx.core.Assert&&qx.core.Assert.assertArray(M,a);}
;Array.prototype.push.apply(N,M);return N;}
,exclude:function(P,O){if(P instanceof qx.data.Array){return P.exclude(O);}
;if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertArray(P,g);qx.core.Assert&&qx.core.Assert.assertArray(O,a);}
;O.forEach(function(Q){var R=P.indexOf(Q);if(R!=-1){P.splice(R,1);}
;}
);return P;}
,remove:function(S,T){if(S instanceof qx.data.Array){return S.remove(T);}
;var i=S.indexOf(T);if(i!=-1){S.splice(i,1);return T;}
;}
,contains:function(U,V){return U.includes(V);}
,equals:function(X,W){if(X instanceof qx.data.Array){return X.equals(W);}
;W=qx.lang.Array.toNativeArray(W);var length=X.length;if(length!==W.length){return false;}
;for(var i=0;i<length;i++ ){if(X[i]!==W[i]){return false;}
;}
;return true;}
,sum:function(Y){var ba=0;for(var i=0,l=Y.length;i<l;i++ ){if(Y[i]!=undefined){ba+=Y[i];}
;}
;return ba;}
,max:function(bb){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertArray(bb,h);}
;var i,bd=bb.length,bc=bb[0];for(i=1;i<bd;i++ ){if(bb[i]>bc){bc=bb[i];}
;}
;return bc===undefined?null:bc;}
,min:function(be){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertArray(be,h);}
;var i,bg=be.length,bf=be[0];for(i=1;i<bg;i++ ){if(be[i]<bf){bf=be[i];}
;}
;return bf===undefined?null:bf;}
,unique:function(bj){var bt=[],bi={},bm={},bo={};var bn,bh=0;var br=k+Date.now();var bk=false,bp=false,bs=false;for(var i=0,bq=bj.length;i<bq;i++ ){bn=bj[i];if(bn===null){if(!bk){bk=true;bt.push(bn);}
;}
else if(bn===undefined){}
else if(bn===false){if(!bp){bp=true;bt.push(bn);}
;}
else if(bn===true){if(!bs){bs=true;bt.push(bn);}
;}
else if(typeof bn===o){if(!bi[bn]){bi[bn]=1;bt.push(bn);}
;}
else if(typeof bn===m){if(!bm[bn]){bm[bn]=1;bt.push(bn);}
;}
else {var bl=bn[br];if(bl==null){bl=bn[br]=bh++ ;}
;if(!bo[bl]){bo[bl]=bn;bt.push(bn);}
;}
;}
;for(var bl in bo){try{delete bo[bl][br];}
catch(bu){try{bo[bl][br]=null;}
catch(bv){throw new Error(p+bl+n+br+j);}
;}
;}
;return bt;}
,range:function(by,stop,bz){if(arguments.length<=1){stop=by||0;by=0;}
;bz=arguments[2]||1;var length=Math.max(Math.ceil((stop-by)/bz),0);var bw=0;var bx=Array(length);while(bw<length){bx[bw++ ]=by;by+=bz;}
;return bx;}
,replace:function(bA,bB){if(bA instanceof qx.data.Array){return bA.replace(bB);}
;if(bB===null){if(bA===null){return null;}
else {return [];}
;}
;bB=qx.lang.Array.toNativeArray(bB);if(bA===null){bA=bB.slice(0);}
else {var bC=[0,bA.length];bB.forEach(function(bD){bC.push(bD);}
);bA.splice.apply(bA,bC);}
;return bA;}
,toNativeArray:function(bE,bF){if(bE===undefined||bE===null){return bE;}
;if(bE instanceof qx.data.Array){if(bF){return bE.toArray().slice(0);}
;return bE.toArray();}
;if(qx.lang.Type.isArray(bE)){if(bF){return bE.slice(0);}
;return bE;}
;return [bE];}
}});}
)();
(function(){var b=".prototype",c='Conflict between mixin "',d="function",e="'is undefined/null!",f="constructor",g="' in mixin '",h='The configuration key "',j='" and "',k='" is not allowed!',m='" in member "',n='"! The type of the key must be "',o="Array",p="RegExp",q="members",r='" in property "',s="properties",t="statics",u="qx.Mixin",v="events",w="'is not a mixin!",x='Invalid type of key "',y='"!',z="]",A='"! The value needs to be a map!',B="Mixin",C="[Mixin ",D='" in mixin "',E="Includes of mixins must be mixins. The include number '",F="destruct",G='Invalid key "',H="Date",I='"! The value is undefined/null!',J="qx.debug",K="object";qx.Bootstrap.define(u,{statics:{define:function(name,M){if(M){if(M.include&&!(qx.Bootstrap.getClass(M.include)===o)){M.include=[M.include];}
;if(qx.core.Environment.get(J)){this.__t(name,M);}
;var L=M.statics?M.statics:{};qx.Bootstrap.setDisplayNames(L,name);for(var N in L){if(L[N] instanceof Function){L[N].$$mixin=L;}
;}
;if(M.construct){L.$$constructor=M.construct;qx.Bootstrap.setDisplayName(M.construct,name,f);}
;if(M.include){L.$$includes=M.include;}
;if(M.properties){L.$$properties=M.properties;}
;if(M.members){L.$$members=M.members;qx.Bootstrap.setDisplayNames(M.members,name+b);}
;for(var N in L.$$members){if(L.$$members[N] instanceof Function){L.$$members[N].$$mixin=L;}
;}
;if(M.events){L.$$events=M.events;}
;if(M.destruct){L.$$destructor=M.destruct;qx.Bootstrap.setDisplayName(M.destruct,name,F);}
;}
else {var L={};}
;L.$$type=B;L.name=name;L.toString=this.genericToString;L.basename=qx.Bootstrap.createNamespace(name,L);this.$$registry[name]=L;return L;}
,checkCompatibility:function(P){var Q=this.flatten(P);var R=Q.length;if(R<2){return true;}
;var S={};var T={};var V={};var U;for(var i=0;i<R;i++ ){U=Q[i];for(var O in U.events){if(V[O]){throw new Error(c+U.name+j+V[O]+m+O+y);}
;V[O]=U.name;}
;for(var O in U.properties){if(S[O]){throw new Error(c+U.name+j+S[O]+r+O+y);}
;S[O]=U.name;}
;for(var O in U.members){if(T[O]){throw new Error(c+U.name+j+T[O]+m+O+y);}
;T[O]=U.name;}
;}
;return true;}
,isCompatible:function(X,Y){var W=qx.util.OOUtil.getMixins(Y);W.push(X);return qx.Mixin.checkCompatibility(W);}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,flatten:function(ba){if(!ba){return [];}
;var bb=ba.concat();for(var i=0,l=ba.length;i<l;i++ ){if(ba[i].$$includes){bb.push.apply(bb,this.flatten(ba[i].$$includes));}
;}
;return bb;}
,genericToString:function(){return C+this.name+z;}
,$$registry:{},__s:qx.core.Environment.select(J,{"true":{"include":K,"statics":K,"members":K,"properties":K,"events":K,"destruct":d,"construct":d},"default":null}),__t:qx.core.Environment.select(J,{"true":function(name,bf){var be=this.__s;for(var bd in bf){if(!be[bd]){throw new Error(h+bd+D+name+k);}
;if(bf[bd]==null){throw new Error(G+bd+D+name+I);}
;if(be[bd]!==null&&typeof bf[bd]!==be[bd]){throw new Error(x+bd+D+name+n+be[bd]+y);}
;}
;var bc=[t,q,s,v];for(var i=0,l=bc.length;i<l;i++ ){var bd=bc[i];if(bf[bd]!==undefined&&([o,p,H].indexOf(qx.Bootstrap.getClass(bf[bd]))!=-1||bf[bd].classname!==undefined)){throw new Error(G+bd+D+name+A);}
;}
;if(bf.include){for(var i=0,a=bf.include,l=a.length;i<l;i++ ){if(a[i]==null){throw new Error(E+(i+1)+g+name+e);}
;if(a[i].$$type!==B){throw new Error(E+(i+1)+g+name+w);}
;}
;this.checkCompatibility(bf.include);}
;}
,"default":function(name,bg){}
})}});}
)();
(function(){var a="ecmascript.number.EPSILON",b="qx.lang.normalize.Number";qx.Bootstrap.define(b,{statics:{EPSILON:2e-52},defer:function(c){if(!qx.core.Environment.get(a)){Number.prototype.EPSILON=c.EPSILON;}
;}
});}
)();
(function(){var a="qx.core.Aspect",b="before",c="*",d="static";qx.Bootstrap.define(a,{statics:{__u:[],wrap:function(h,l,j){var m=[];var e=[];var k=this.__u;var g;for(var i=0;i<k.length;i++ ){g=k[i];if((g.type==null||j==g.type||g.type==c)&&(g.name==null||h.match(g.name))){g.pos==-1?m.push(g.fcn):e.push(g.fcn);}
;}
;if(m.length===0&&e.length===0){return l;}
;var f=function(){for(var i=0;i<m.length;i++ ){m[i].call(this,h,l,j,arguments);}
;var n=l.apply(this,arguments);for(var i=0;i<e.length;i++ ){e[i].call(this,h,l,j,arguments,n);}
;return n;}
;if(j!==d){f.self=l.self;f.base=l.base;}
;l.wrapper=f;f.original=l;return f;}
,addAdvice:function(q,o,p,name){this.__u.push({fcn:q,pos:o===b?-1:1,type:p,name:name});}
}});}
)();
(function(){var a="qx.debug",b="qx.lang.normalize.Object",c="Invalid argument 'map'",d="ecmascript.object.is",e="ecmascript.object.keys",f="ecmascript.object.values";qx.Bootstrap.define(b,{statics:{keys:qx.Bootstrap.keys,values:function(h){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertMap(h,c);}
;var j=[];var g=Object.keys(h);for(var i=0,l=g.length;i<l;i++ ){j.push(h[g[i]]);}
;return j;}
,is:function(x,y){if(x===y){return x!==0||1/x===1/y;}
else {return x!==x&&y!==y;}
;}
},defer:function(k){if(!qx.core.Environment.get(e)){Object.keys=k.keys;}
;if(!qx.core.Environment.get(f)){Object.values=k.values;}
;if(!qx.core.Environment.get(d)){Object.is=k.is;}
;}
});}
)();
(function(){var b="function",c="Boolean",d="'! The value is undefined/null!",e="RegExp",f='The configuration key "',g='The property "',h='" is not allowed!',j="string",k='Implementation of method "',m='"',n="Array",o='" is missing in class "',p="' in interface '",q="members",r="number",s="properties",t="statics",u="qx.debug",v="Invalid key '",w='The event "',x="events",y='Invalid type of key "',z='"!',A="]",B='" in class "',C="Interface",D='"! The value needs to be a map!',E='" in interface "',F="' is undefined/null!",G='"! The type of the key must be "',H='Implementation of member "',I="Extends of interfaces must be interfaces. The extend number '",J='" is not supported by Class "',K="' is not an interface!",L="qx.Interface",M='" required by interface "',N='Invalid key "',O="Date",P='"! Static constants must be all uppercase.',Q="toggle",R="boolean",S="is",T="[Interface ",U='"! Static constants must be all of a primitive type.',V="object";qx.Bootstrap.define(L,{statics:{define:function(name,X){if(X){if(X.extend&&!(qx.Bootstrap.getClass(X.extend)===n)){X.extend=[X.extend];}
;if(qx.core.Environment.get(u)){this.__t(name,X);}
;var W=X.statics?X.statics:{};if(X.extend){W.$$extends=X.extend;}
;if(X.properties){W.$$properties=X.properties;}
;if(X.members){W.$$members=X.members;}
;if(X.events){W.$$events=X.events;}
;}
else {var W={};}
;W.$$type=C;W.name=name;W.toString=this.genericToString;W.basename=qx.Bootstrap.createNamespace(name,W);qx.Interface.$$registry[name]=W;return W;}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,flatten:function(ba){if(!ba){return [];}
;var Y=ba.concat();for(var i=0,l=ba.length;i<l;i++ ){if(ba[i].$$extends){Y.push.apply(Y,this.flatten(ba[i].$$extends));}
;}
;return Y;}
,__v:function(be,bf,bb,bi,bg){var bc=bb.$$members;if(bc){for(var bh in bc){if(qx.Bootstrap.isFunction(bc[bh])){var bk=this.__w(bf,bh);var bd=bk||qx.Bootstrap.isFunction(be[bh]);if(!bd){if(bg){throw new Error(k+bh+o+bf.classname+M+bb.name+m);}
else {return false;}
;}
;var bj=bi===true&&!bk&&!qx.util.OOUtil.hasInterface(bf,bb);if(bj){be[bh]=this.__z(bb,be[bh],bh,bc[bh]);}
;}
else {if(typeof be[bh]===undefined){if(typeof be[bh]!==b){if(bg){throw new Error(H+bh+o+bf.classname+M+bb.name+m);}
else {return false;}
;}
;}
;}
;}
;}
;if(!bg){return true;}
;}
,__w:function(bo,bl){var bq=bl.match(/^(is|toggle|get|set|reset)(.*)$/);if(!bq){return false;}
;var bn=qx.Bootstrap.firstLow(bq[2]);var bp=qx.util.OOUtil.getPropertyDefinition(bo,bn);if(!bp){return false;}
;var bm=bq[0]===S||bq[0]===Q;if(bm){return qx.util.OOUtil.getPropertyDefinition(bo,bn).check===c;}
;return true;}
,__x:function(bu,br,bs){if(br.$$properties){for(var bt in br.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(bu,bt)){if(bs){throw new Error(g+bt+J+bu.classname+z);}
else {return false;}
;}
;}
;}
;if(!bs){return true;}
;}
,__y:function(by,bv,bw){if(bv.$$events){for(var bx in bv.$$events){if(!qx.util.OOUtil.supportsEvent(by,bx)){if(bw){throw new Error(w+bx+J+by.classname+z);}
else {return false;}
;}
;}
;}
;if(!bw){return true;}
;}
,assertObject:function(bB,bz){var bC=bB.constructor;this.__v(bB,bC,bz,false,true);this.__x(bC,bz,true);this.__y(bC,bz,true);var bA=bz.$$extends;if(bA){for(var i=0,l=bA.length;i<l;i++ ){this.assertObject(bB,bA[i]);}
;}
;}
,assert:function(bF,bD,bG){this.__v(bF.prototype,bF,bD,bG,true);this.__x(bF,bD,true);this.__y(bF,bD,true);var bE=bD.$$extends;if(bE){for(var i=0,l=bE.length;i<l;i++ ){this.assert(bF,bE[i],bG);}
;}
;}
,objectImplements:function(bJ,bH){var bK=bJ.constructor;if(!this.__v(bJ,bK,bH)||!this.__x(bK,bH)||!this.__y(bK,bH)){return false;}
;var bI=bH.$$extends;if(bI){for(var i=0,l=bI.length;i<l;i++ ){if(!this.objectImplements(bJ,bI[i])){return false;}
;}
;}
;return true;}
,classImplements:function(bN,bL){if(!this.__v(bN.prototype,bN,bL)||!this.__x(bN,bL)||!this.__y(bN,bL)){return false;}
;var bM=bL.$$extends;if(bM){for(var i=0,l=bM.length;i<l;i++ ){if(!this.has(bN,bM[i])){return false;}
;}
;}
;return true;}
,genericToString:function(){return T+this.name+A;}
,$$registry:{},__z:qx.core.Environment.select(u,{"true":function(bR,bP,bS,bO){function bQ(){bO.apply(this,arguments);return bP.apply(this,arguments);}
;bP.wrapper=bQ;return bQ;}
,"default":function(bV,bU,bW,bT){}
}),__s:qx.core.Environment.select(u,{"true":{"extend":V,"statics":V,"members":V,"properties":V,"events":V},"default":null}),__t:qx.core.Environment.select(u,{"true":function(name,cb){if(qx.core.Environment.get(u)){var ca=this.__s;for(var bY in cb){if(ca[bY]===undefined){throw new Error(f+bY+B+name+h);}
;if(cb[bY]==null){throw new Error(v+bY+p+name+d);}
;if(ca[bY]!==null&&typeof cb[bY]!==ca[bY]){throw new Error(y+bY+E+name+G+ca[bY]+z);}
;}
;var bX=[t,q,s,x];for(var i=0,l=bX.length;i<l;i++ ){var bY=bX[i];if(cb[bY]!==undefined&&([n,e,O].indexOf(qx.Bootstrap.getClass(cb[bY]))!=-1||cb[bY].classname!==undefined)){throw new Error(N+bY+E+name+D);}
;}
;if(cb.extend){for(var i=0,a=cb.extend,l=a.length;i<l;i++ ){if(a[i]==null){throw new Error(I+i+1+p+name+F);}
;if(a[i].$$type!==C){throw new Error(I+i+1+p+name+K);}
;}
;}
;if(cb.statics){for(var bY in cb.statics){if(bY.toUpperCase()!==bY){throw new Error(N+bY+E+name+P);}
;switch(typeof cb.statics[bY]){case R:case j:case r:break;default:throw new Error(N+bY+E+name+U);};}
;}
;}
;}
,"default":function(name,cc){}
})}});}
)();
(function(){var a="ecmascript.error.toString",b="qx.lang.normalize.Error",c=": ",d="Error",e="";qx.Bootstrap.define(b,{statics:{toString:function(){var name=this.name||d;var f=this.message||e;if(name===e&&f===e){return d;}
;if(name===e){return f;}
;if(f===e){return name;}
;return name+c+f;}
},defer:function(g){if(!qx.core.Environment.get(a)){Error.prototype.toString=g.toString;}
;}
});}
)();
(function(){var b="  return tracker.promise.then(function() { return computed; });",c="of property '",d='var msg = "Invalid incoming value for property \'',e='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',f='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',g="});",h="set",j="function",k=';',m="resetThemed",n='value !== null && value.nodeType === 9 && value.documentElement',o='value !== null && value.$$type === "Mixin"',p='return init;',q='var init=this.',r='var a=this._getChildren();',s="return promise;",t="Async() method in same class",u='value !== null && value.nodeType === 1 && value.attributes',v="var parent = this.getLayoutParent();",w="Error in property ",x='var old;',y="property",z='function set(value){',A="Asynchronous property ",B="();",C='.validate.call(this, value);',D='qx.core.Assert.assertInstance(value, Date, msg) || true',E='if(computed===inherit){',F='else{',G="Cannot add the non themable property '",H="Cannot implement check for property ",I=" in method ",J='qx.core.Assert.assertInstance(value, Error, msg) || true',K='=computed;',L='Undefined value is not allowed!',M='(backup);',N='if(',O="$$set",P="return qx.Promise.resolve(this.",Q='else ',R="var promiseData = qx.Promise.resolve(computed);",S='var promise;',T="' to the themable property group '",U='if(old===undefined)old=this.',V='promise = set.apply(this, arguments);',W="var promise = promiseData;",X="]: ",Y=',value))return value;',ba="inherit",bb='if(this.',bc='return this.',bd='else if(this.',be='!==inherit){',bf='Is invalid!',bg="}, this);",bh='if(value===undefined)prop.error(this,2,"',bi="getAsync",bj='", "',bk='if(a[i].',bl='else if(computed===undefined)',bm="Malformed generated code to unwrap method: ",bn="Async'))",bo='.isEqual.call(this,a,b);};',bp='delete this.',bq="resetRuntime",br="promise = reg.fireEventAsync(this, '",bs="': ",bt=" of class ",bu="Async', qx.event.type.Data, [qx.Promise.resolve(computed), old]",bv='value !== null && value.nodeType !== undefined',bw='===undefined)return;',bx='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',by="Could not add check to property ",bz='function(a,b){return !!(',bA='function(a,b){return !!',bB="qx.event.Utils.track(tracker, reg.fireEvent(this, '",bC="reset",bD="string",bE='var equ=',bF="module.events",bG="return this.",bH='qx.core.Assert.assertPositiveInteger(value, msg) || true',bI="Code[",bJ='value=this.',bK="Cannot create property group '",bL='","',bM='for(var i=0,l=a.length;i<l;i++){',bN='if(init==qx.core.Property.$$inherit)init=null;',bO="  return reg.fireEventAsync(this, '",bP="return promise.then(fire, this); ",bQ='qx.core.Assert.assertInArray(value, ',bR="get",bS='value !== null && value.$$type === "Interface"',bT='var inherit=prop.$$inherit;',bU=".$$install && this.",bV=')prop.error(this,5,"',bW="var value = parent.",bX="$$useinit_",bY='computed=undefined;delete this.',ca="qx.event.Utils.then(tracker, function() {\n",cb='(value);',cc="' in class '",cd=" is overriding ",ce="(value);",cf=".apply(this, arguments);",cg='if(equ.call(this,this.',ch=');};',ci='this.',cj="setThemed",ck='",value);',cl='promise = value.then(set.bind(this));',cm='}else{',cn="$$runtime_",co=" with ",cp='Requires exactly one argument!',cq=");",cr='if(this.$$initialized)prop.error(this,0,"',cs='qx.core.Assert.assertInstance(value, qx.Class.getByName("',ct="setImpl",cu="Async', qx.event.type.Data, [promiseData, old]",cv="$$user_",cw='if(value===null)prop.error(this,4,"',cx='!==undefined)',cy='){',cz='!',cA='qx.core.Assert.assertArray(value, msg) || true',cB="());",cC=";",cD=" because qx.promise==false",cE='qx.core.Assert.assertPositiveNumber(value, msg) || true',cF="return computed;",cG='computed=value;',cH=".prototype",cI="' including non-existing property '",cJ="Boolean",cK=" is switched to synchronous because qx.promise==false",cL='if(a)',cM="(a[",cN=");\n",cO='(computed, old, "',cP="setRuntime",cQ='return value;',cR="this.",cS='.check, msg)',cT="return reg.fireEventAsync(this, '",cU="if (tracker.promise)\n",cV=".$$install.call(this);",cW="if(reg.hasListener(this, '",cX="}",cY='Does not allow any arguments!',da='\'";',db="promise = promise.then(function() { return computed; });",dc="()",dd=';}',de="if(promise instanceof qx.Promise) ",df="var a=arguments[0] instanceof Array?arguments[0]:arguments;",dg='.$$properties.',dh='value !== null && value.$$type === "Theme"',di='if(value!==null)',dj='set.apply(this, arguments);',dk="'!",dl='this.$$set',dm='.check.call(this, value)',dn=".$$install();",dp='if(computed===undefined||computed===inherit){',dq="())",dr='=value;',ds=" is replacing ",dt='return null;',du="'))",dv='(value, old);',dw='!==undefined){',dx='qx.core.Assert.assertObject(value, msg) || true',dy="));",dz="  var tracker={};",dA='a[i].',dB='");',dC='var old=this.',dD='qx.core.Assert.assertString(value, msg) || true',dE='!==undefined&&',dF="\n",dG='var pa=this.getLayoutParent();if(pa)computed=pa.',dH="if (value===undefined) value = parent.",dI='value !== null && value.$$type === "Class"',dJ='qx.core.Assert.assertFunction(value, msg) || true',dK='old=this.',dL="', qx.event.type.Data, [computed, old]",dM="qx.Promise",dN='var backup=computed;',dO=".",dP='}',dQ='"), msg)',dR="object",dS="$$init_",dT='qx.core.Assert.assertInterface(value, qx.Interface.getByName("',dU="var reg=qx.event.Registration;",dV="$$theme_",dW="qx.debug.property.level",dX='if (value instanceof qx.Promise) ',dY='if(computed===undefined)computed=null;',ea='\' of class \'',eb="Unknown reason: ",ec='if(arguments.length!==1)prop.error(this,1,"',ed="qx.promise",ee="')) {",ef="init",eg='qx.core.Assert.assertMap(value, msg) || true',eh="getThemed",ei='if((computed===undefined||computed===inherit)&&',ej='!(',ek='return qx.Promise.resolve(this.$$set',el="Generating property wrappers: ",em="'",en='qx.core.Assert.assertNumber(value, msg) || true',eo="Impl.apply(this, arguments));",ep="qx.debug",eq="promise = promise.then(function() {",er='Null value is not allowed!',es="Async",et="Impl",eu='qx.core.Assert.assertInteger(value, msg) || true',ev="value",ew='var computed;',ey='function(a,b){return a===b;};',ez="shorthand",eA='promise = this.',eB='computed=this.',eC="Generating property group: ",eD='qx.core.Assert.assertInstance(value, RegExp, msg) || true',eE='value !== null && value.type !== undefined',eF='value !== null && value.document',eG="",eH='throw new Error("Property ',eI="(!this.",eJ='qx.core.Assert.assertBoolean(value, msg) || true',eK="Async() method",eL="qx.aspects",eM="Invalid type for 'isEqual' attribute ",eN=' of an instance of ',eO="toggle",eP="refresh",eQ="$$inherit_",eR='var prop=qx.core.Property;',eS="Conflicting property method ",eT='else this.',eU="if (!parent) return;",eV='if(old===undefined)old=null;',eW='=true;',eX="undefined",eY="boolean",fa="Async.apply(this, arguments);",fb='if(equ.call(this,old,computed))return value;',fc=" with incoming value '",fd="function fire() {",fe="Impl.apply(this, arguments);",ff=' is not (yet) ready!");',fg=')',fh='if(value!==inherit)',fi='if(arguments.length!==0)prop.error(this,3,"',fj="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",fk="return fire.call(this);",fl='if(computed===undefined||computed==inherit)computed=null;',fm='Could not change or apply init value after constructing phase!',fo="is",fp="setAsync",fq="]);",fr="qx.core.Property";qx.Bootstrap.define(fr,{statics:{__A:function(){if(qx.core.Environment.get(bF)){qx.event.type.Data;qx.event.dispatch.Direct;}
;if(qx.core.Environment.get(ed)){qx.Promise;}
;}
,__B:{"Boolean":eJ,"String":dD,"Number":en,"Integer":eu,"PositiveNumber":cE,"PositiveInteger":bH,"Error":J,"RegExp":eD,"Object":dx,"Array":cA,"Map":eg,"Function":dJ,"Date":D,"Node":bv,"Element":u,"Document":n,"Window":eF,"Event":eE,"Class":dI,"Mixin":o,"Interface":bS,"Theme":dh,"Color":e,"Decorator":bx,"Font":f},__C:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:ba,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},getAsync:{},set:{},setImpl:{},setAsync:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{"@":dR,name:bD,dereference:eY,inheritable:eY,nullable:eY,themeable:eY,refine:eY,init:null,apply:bD,event:bD,check:null,transform:bD,async:eY,deferredInit:eY,validate:null,isEqual:null},$$allowedGroupKeys:{"@":dR,name:bD,group:dR,mode:bD,themeable:eY},$$inheritable:{},__D:function(fu){var fs=this.__E(fu);if(!fs.length){var ft=function(){}
;}
else {ft=this.__F(fs);}
;fu.prototype.$$refreshInheritables=ft;}
,__E:function(fv){var fw=[];while(fv){var fx=fv.$$properties;if(fx){for(var name in this.$$inheritable){if(fx[name]&&fx[name].inheritable){fw.push(name);}
;}
;}
;fv=fv.superclass;}
;return fw;}
,__F:function(inheritables){var inherit=this.$$store.inherit;var init=this.$$store.init;var refresh=this.$$method.refresh;var code=[v,eU];for(var i=0,l=inheritables.length;i<l;i++ ){var name=inheritables[i];code.push(bW,inherit[name],cC,dH,init[name],cC,cR,refresh[name],ce);}
;return new Function(code.join(eG));}
,attachRefreshInheritables:function(fy){fy.prototype.$$refreshInheritables=function(){qx.core.Property.__D(fy);return this.$$refreshInheritables();}
;}
,attachMethods:function(fA,name,fz){fz.group?this.__G(fA,fz,name):this.__H(fA,fz,name);}
,__G:function(clazz,config,name){var upname=qx.Bootstrap.firstUp(name);var members=clazz.prototype;var themeable=config.themeable===true;if(qx.core.Environment.get(ep)){if(qx.core.Environment.get(dW)>1){qx.Bootstrap.debug(eC+name);}
;}
;var setter=[];var resetter=[];if(themeable){var styler=[];var unstyler=[];}
;var argHandler=df;setter.push(argHandler);if(themeable){styler.push(argHandler);}
;if(config.mode==ez){var shorthand=fj;setter.push(shorthand);if(themeable){styler.push(shorthand);}
;}
;for(var i=0,a=config.group,l=a.length;i<l;i++ ){if(qx.core.Environment.get(ep)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error(bK+name+cI+a[i]+dk);}
;}
;setter.push(cR,this.$$method.set[a[i]],cM,i,fq);resetter.push(cR,this.$$method.reset[a[i]],B);if(themeable){if(qx.core.Environment.get(ep)){if(!this.$$method.setThemed[a[i]]){throw new Error(G+a[i]+T+name+em);}
;}
;styler.push(cR,this.$$method.setThemed[a[i]],cM,i,fq);unstyler.push(cR,this.$$method.resetThemed[a[i]],B);}
;}
;this.$$method.set[name]=h+upname;members[this.$$method.set[name]]=new Function(setter.join(eG));this.$$method.reset[name]=bC+upname;members[this.$$method.reset[name]]=new Function(resetter.join(eG));if(themeable){this.$$method.setThemed[name]=cj+upname;members[this.$$method.setThemed[name]]=new Function(styler.join(eG));this.$$method.resetThemed[name]=m+upname;members[this.$$method.resetThemed[name]]=new Function(unstyler.join(eG));}
;}
,__H:function(clazz,config,name){var upname=qx.Bootstrap.firstUp(name);var members=clazz.prototype;if(qx.core.Environment.get(ep)){if(qx.core.Environment.get(dW)>1){qx.Bootstrap.debug(el+name);}
;}
;if(config.dereference===undefined&&typeof config.check===bD){config.dereference=this.__I(config.check);}
;if(!qx.core.Environment.get(ed)){if(config.async){this.warn(A+clazz.classname+dO+name+cK);config.async=false;}
;if(config.check==dM){this.error(H+clazz.classname+dO+name+cD);delete config.check;}
;}
;if(qx.core.Environment.get(ep)){if(clazz.classname&&!clazz.classname.match(/^qx.data.model/)){var allNames=[bR+upname,h+upname,bC+upname,cP+upname,bq+upname];if(config.async){allNames.push(bR+upname+es);allNames.push(h+upname+es);}
;if(config.inheritable||config.apply||config.event||config.deferredInit){allNames.push(ef+upname);}
;if(config.inheritable){allNames.push(eP+upname);}
;if(config.themeable){allNames.push(eh+upname);allNames.push(cj+upname);allNames.push(m+upname);}
;if(config.check===cJ){allNames.push(fo+upname);allNames.push(eO+upname);}
;allNames.forEach(function(name){if(clazz.superclass.prototype[name]!==undefined){var fC=null;for(var fB=clazz.superclass;fB&&fB!=qx.core.Object;fB=fB.superclass){if(fB.superclass.prototype[name]===undefined){fC=fB;break;}
;}
;if(fC){qx.log.Logger.warn(eS+clazz.classname+dO+name+co+fC.classname);}
;}
;}
);}
;}
;var method=this.$$method;var store=this.$$store;store.runtime[name]=cn+name;store.user[name]=cv+name;store.theme[name]=dV+name;store.init[name]=dS+name;store.inherit[name]=eQ+name;store.useinit[name]=bX+name;var getName=method.get[name]=bR+upname;members[method.get[name]]=new Function(cR+getName+bU+getName+dn+bG+getName+cf);if(config.async){if(qx.core.Environment.get(ep)){if(members.hasOwnProperty(getName+es)){this.error(A+clazz.classname+dO+name+ds+getName+t);}
else if(members[getName+es]!==undefined){this.warn(A+clazz.classname+dO+name+cd+getName+eK);}
;}
;method.getAsync[name]=getName+es;members[method.getAsync[name]]=new Function(cR+getName+bU+getName+cV+bG+getName+fa);}
;members[method.get[name]].$$install=function(){qx.core.Property.__M(clazz,name,bR,arguments);if(config.async){qx.core.Property.__M(clazz,name,bi,arguments);}
;}
;var setName=method.set[name]=h+upname;members[setName]=new Function(cR+setName+bU+setName+cV+bG+setName+cf);method.setAsync[name]=h+upname+es;if(config.async){if(qx.core.Environment.get(ep)){if(members.hasOwnProperty(setName+es)){this.error(A+clazz.classname+dO+name+ds+setName+t);}
else if(members[setName+es]!==undefined){this.warn(A+clazz.classname+dO+name+cd+setName+eK);}
;}
;members[setName+es]=new Function(cR+setName+bU+setName+cV+bG+setName+fa);}
;method.setImpl[name]=O+upname+et;members[setName].$$install=function(){qx.core.Property.__O(clazz,name,h);qx.core.Property.__O(clazz,name,ct);if(config.async){qx.core.Property.__O(clazz,name,fp);}
;}
;method.reset[name]=bC+upname;members[method.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bC);}
;members[method.reset[name]].$$install=function(){qx.core.Property.__O(clazz,name,bC);}
;if(config.inheritable||config.apply||config.event||config.deferredInit){method.init[name]=ef+upname;members[method.init[name]]=function(fD){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ef,arguments);}
;if(qx.core.Environment.get(ep)){members[method.init[name]].$$propertyMethod=true;}
;}
;if(config.inheritable){method.refresh[name]=eP+upname;members[method.refresh[name]]=function(fE){return qx.core.Property.executeOptimizedSetter(this,clazz,name,eP,arguments);}
;if(qx.core.Environment.get(ep)){members[method.refresh[name]].$$propertyMethod=true;}
;}
;method.setRuntime[name]=cP+upname;members[method.setRuntime[name]]=function(fF){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cP,arguments);}
;method.resetRuntime[name]=bq+upname;members[method.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bq);}
;if(config.themeable){method.setThemed[name]=cj+upname;members[method.setThemed[name]]=function(fG){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cj,arguments);}
;method.resetThemed[name]=m+upname;members[method.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,m);}
;if(qx.core.Environment.get(ep)){members[method.setThemed[name]].$$propertyMethod=true;members[method.resetThemed[name]].$$propertyMethod=true;}
;}
;if(config.check===cJ){members[eO+upname]=new Function(bG+method.set[name]+eI+method.get[name]+dq);members[fo+upname]=new Function(bG+method.get[name]+dc);if(qx.core.Environment.get(ep)){members[eO+upname].$$propertyMethod=true;members[fo+upname].$$propertyMethod=true;}
;}
;if(qx.core.Environment.get(ep)){members[method.get[name]].$$propertyMethod=true;members[method.set[name]].$$propertyMethod=true;members[method.reset[name]].$$propertyMethod=true;members[method.setRuntime[name]].$$propertyMethod=true;members[method.resetRuntime[name]].$$propertyMethod=true;}
;}
,__I:function(fH){return !!this.__C[fH];}
,__J:{'0':fm,'1':cp,'2':L,'3':cY,'4':er,'5':bf},error:function(fI,fO,fN,fJ,fK){var fL=fI.constructor.classname;var fM=w+fN+bt+fL+I+this.$$method[fJ][fN]+fc+fK+bs;throw new Error(fM+(this.__J[fO]||eb+fO));}
,__K:function(fS,fT,name,fR,fP,fQ){var fU=this.__L(fS.constructor,name,fR,fP,fQ);if(fQ===undefined){return fU.call(fS);}
else if(qx.core.Environment.get(ep)){return fU.apply(fS,fQ);}
else {return fU.call(fS,fQ[0]);}
;}
,__L:function(clazz,name,variant,code,args){var store=this.$$method[variant][name];if(qx.core.Environment.get(ep)){if(qx.core.Environment.get(dW)>1){qx.Bootstrap.debug(bI+this.$$method[variant][name]+X+code.join(eG));}
;try{clazz.prototype[store]=new Function(ev,code.join(eG));}
catch(fV){throw new Error(bm+this.$$method[variant][name]+dF+code.join(eG));}
;}
else {clazz.prototype[store]=new Function(ev,code.join(eG));}
;if(qx.core.Environment.get(eL)){clazz.prototype[store]=qx.core.Aspect.wrap(clazz.classname+dO+store,clazz.prototype[store],y);}
;qx.Bootstrap.setDisplayName(clazz.prototype[store],clazz.classname+cH,store);return clazz.prototype[store];}
,executeOptimizedGetter:function(ga,fY,name,fX){var fW=this.__N(fY,name,fX);var gb=fY.prototype;return this.__K(ga,gb,name,fX,fW);}
,__M:function(ge,name,gd){var gc=this.__N(ge,name,gd);this.__L(ge,name,gd,gc);}
,__N:function(gh,name,gg){var gi=gh.$$properties[name];var gf=[];var gj=this.$$store;if(gg==bi){gf.push(P+this.$$method.get[name]+cB);return gf;}
;gf.push(bb,gj.runtime[name],cx);gf.push(bc,gj.runtime[name],k);if(gi.inheritable){gf.push(bd,gj.inherit[name],cx);gf.push(bc,gj.inherit[name],k);gf.push(Q);}
;gf.push(bb,gj.user[name],cx);gf.push(bc,gj.user[name],k);if(gi.themeable){gf.push(bd,gj.theme[name],cx);gf.push(bc,gj.theme[name],k);}
;if(gi.deferredInit&&gi.init===undefined){gf.push(bd,gj.init[name],cx);gf.push(bc,gj.init[name],k);}
;gf.push(Q);if(gi.init!==undefined){if(gi.inheritable){gf.push(q,gj.init[name],k);if(gi.nullable){gf.push(bN);}
;gf.push(p);}
else {gf.push(bc,gj.init[name],k);}
;}
else if(gi.inheritable||gi.nullable){gf.push(dt);}
else {gf.push(eH,name,eN,gh.classname,ff);}
;return gf;}
,executeOptimizedSetter:function(go,gn,name,gm,gl){var gk=this.__P(gn,name,gm);var gp=gn.prototype;return this.__K(go,gp,name,gm,gk,gl);}
,__O:function(gs,name,gr){var gq=this.__P(gs,name,gr);return this.__L(gs,name,gr,gq);}
,__P:function(gy,name,gx){var gv=gy.$$properties[name];var gz=gy.prototype;var gu=[];var gA=qx.lang.String.firstUp(name);if(gx==fp){gu.push(ek+gA+eo);return gu;}
else if(gx==h){gu.push(dl+gA+fe,cQ);return gu;}
;var gt=gx===ct||gx===cj||gx===cP||(gx===ef&&gv.init===undefined);var gw=gv.apply||gv.event||gv.inheritable;var gB=this.__Q(gx,name);this.__R(gu,gy,gv,name);this.__S(gu,gv,name,gx,gt);if(gt||gw){this.__Y(gu,gv,name);}
;if(gt){this.__T(gu,gy,gv,name);}
;if(gw){this.__U(gu,gt,gB,gx);}
;if(gv.inheritable){gu.push(bT);}
;if(qx.core.Environment.get(ep)){if(gt){this.__V(gu,gv,gy,name,gx);}
;}
;if(!gw){this.__W(gu,name,gx,gt);}
else {this.__X(gu,gv,name,gx,gt);}
;if(gv.inheritable){this.__ba(gu,gv,name,gx);}
else if(gw){this.__bb(gu,gv,name,gx);}
;if(gw){this.__bc(gu,gv,name,gx,!!(gv.inheritable&&gz._getChildren));}
;if(gt){gu.unshift(z);gu.push(dP);if(qx.core.Environment.get(ed)&&(!gv.check||gv.check!=dM)){gu.push(S,dX,cl,Q,V);if(gx==ct){gu.push(s);}
else {gu.push(cQ);}
;}
else {gu.push(dj,cQ);}
;}
;return gu;}
,__Q:function(gC,name){if(gC===cP||gC===bq){var gD=this.$$store.runtime[name];}
else if(gC===cj||gC===m){gD=this.$$store.theme[name];}
else if(gC===ef){gD=this.$$store.init[name];}
else {gD=this.$$store.user[name];}
;return gD;}
,__R:function(gE,gH,gF,name){gE.push(bE);if(typeof gF.isEqual===j){gE.push(bA,gH.classname,dg,name,bo);}
else if(typeof gF.isEqual===bD){var gG=gH.prototype;if(gG[gF.isEqual]!==undefined){gE.push(ci,gF.isEqual,k);}
else {gE.push(bz,gF.isEqual,ch);}
;}
else if(typeof gF.isEqual===eX){gE.push(ey);}
else {throw new Error(eM+c+name+cc+gH.classname+em);}
;}
,__S:function(gK,gI,name,gL,gJ){if(qx.core.Environment.get(ep)){gK.push(eR);if(gL===ef){gK.push(cr,name,bL,gL,ck);}
;if(gL===eP){}
else if(gJ){gK.push(ec,name,bL,gL,ck);gK.push(bh,name,bL,gL,ck);}
else {gK.push(fi,name,bL,gL,ck);}
;}
else {if(!gI.nullable||gI.check||gI.inheritable){gK.push(eR);}
;if(gL===ct){gK.push(bh,name,bL,gL,ck);}
;}
;}
,__T:function(gM,gO,gN,name){if(gN.transform){gM.push(bJ,gN.transform,dv);}
;if(gN.validate){if(typeof gN.validate===bD){gM.push(ci,gN.validate,cb);}
else if(gN.validate instanceof Function){gM.push(gO.classname,dg,name);gM.push(C);}
;}
;}
,__U:function(gQ,gP,gS,gR){var gT=(gR===bC||gR===m||gR===bq);if(gP){gQ.push(cg,gS,Y);}
else if(gT){gQ.push(bb,gS,bw);}
;}
,__V:qx.core.Environment.select(ep,{"true":function(gV,gU,gX,name,gW){if(!gU.nullable){gV.push(cw,name,bL,gW,ck);}
;if(gU.check!==undefined){gV.push(d+name+ea+gX.classname+da);if(gU.nullable){gV.push(di);}
;if(gU.inheritable){gV.push(fh);}
;gV.push(N);if(this.__B[gU.check]!==undefined){gV.push(ej,this.__B[gU.check],fg);}
else if(qx.Class.isDefined(gU.check)){gV.push(cs,gU.check,dQ);}
else if(qx.Interface&&qx.Interface.isDefined(gU.check)){gV.push(dT,gU.check,dQ);}
else if(typeof gU.check===j){gV.push(cz,gX.classname,dg,name);gV.push(dm);}
else if(typeof gU.check===bD){gV.push(ej,gU.check,fg);}
else if(gU.check instanceof Array){gV.push(bQ,gX.classname,dg,name,cS);}
else {throw new Error(by+name+bt+gX.classname);}
;gV.push(bV,name,bL,gW,ck);}
;}
,"false":undefined}),__W:function(ha,name,hb,gY){if(hb===cP){ha.push(ci,this.$$store.runtime[name],dr);}
else if(hb===bq){ha.push(bb,this.$$store.runtime[name],cx);ha.push(bp,this.$$store.runtime[name],k);}
else if(hb===ct){ha.push(ci,this.$$store.user[name],dr);}
else if(hb===bC){ha.push(bb,this.$$store.user[name],cx);ha.push(bp,this.$$store.user[name],k);}
else if(hb===cj){ha.push(ci,this.$$store.theme[name],dr);}
else if(hb===m){ha.push(bb,this.$$store.theme[name],cx);ha.push(bp,this.$$store.theme[name],k);}
else if(hb===ef&&gY){ha.push(ci,this.$$store.init[name],dr);}
;}
,__X:function(he,hc,name,hf,hd){he.push(ew);he.push(bb,this.$$store.runtime[name],dw);if(hf===cP){he.push(eB,this.$$store.runtime[name],dr);}
else if(hf===bq){he.push(bp,this.$$store.runtime[name],k);he.push(bb,this.$$store.user[name],cx);he.push(eB,this.$$store.user[name],k);he.push(bd,this.$$store.theme[name],cx);he.push(eB,this.$$store.theme[name],k);he.push(bd,this.$$store.init[name],dw);he.push(eB,this.$$store.init[name],k);he.push(ci,this.$$store.useinit[name],eW);he.push(dP);}
else {he.push(eB,this.$$store.runtime[name],k);if(hf===ct){he.push(ci,this.$$store.user[name],dr);}
else if(hf===bC){he.push(bp,this.$$store.user[name],k);}
else if(hf===cj){he.push(ci,this.$$store.theme[name],dr);}
else if(hf===m){he.push(bp,this.$$store.theme[name],k);}
else if(hf===ef&&hd){he.push(ci,this.$$store.init[name],dr);}
;}
;he.push(dP);he.push(bd,this.$$store.user[name],dw);if(hf===ct){he.push(eB,this.$$store.user[name],dr);}
else if(hf===bC){he.push(bp,this.$$store.user[name],k);he.push(bb,this.$$store.runtime[name],cx);he.push(eB,this.$$store.runtime[name],k);he.push(bb,this.$$store.theme[name],cx);he.push(eB,this.$$store.theme[name],k);he.push(bd,this.$$store.init[name],dw);he.push(eB,this.$$store.init[name],k);he.push(ci,this.$$store.useinit[name],eW);he.push(dP);}
else {if(hf===cP){he.push(eB,this.$$store.runtime[name],dr);}
else if(hc.inheritable){he.push(eB,this.$$store.user[name],k);}
else {he.push(eB,this.$$store.user[name],k);}
;if(hf===cj){he.push(ci,this.$$store.theme[name],dr);}
else if(hf===m){he.push(bp,this.$$store.theme[name],k);}
else if(hf===ef&&hd){he.push(ci,this.$$store.init[name],dr);}
;}
;he.push(dP);if(hc.themeable){he.push(bd,this.$$store.theme[name],dw);if(hf===cP){he.push(eB,this.$$store.runtime[name],dr);}
else if(hf===ct){he.push(eB,this.$$store.user[name],dr);}
else if(hf===cj){he.push(eB,this.$$store.theme[name],dr);}
else if(hf===m){he.push(bp,this.$$store.theme[name],k);he.push(bb,this.$$store.init[name],dw);he.push(eB,this.$$store.init[name],k);he.push(ci,this.$$store.useinit[name],eW);he.push(dP);}
else if(hf===ef){if(hd){he.push(ci,this.$$store.init[name],dr);}
;he.push(eB,this.$$store.theme[name],k);}
else if(hf===eP){he.push(eB,this.$$store.theme[name],k);}
;he.push(dP);}
;he.push(bd,this.$$store.useinit[name],cy);if(hf===ef){if(hd){he.push(eB,this.$$store.init[name],dr);}
else {he.push(eB,this.$$store.init[name],k);}
;}
else if(hf===ct||hf===cP||hf===cj||hf===eP){he.push(bp,this.$$store.useinit[name],k);if(hf===cP){he.push(eB,this.$$store.runtime[name],dr);}
else if(hf===ct){he.push(eB,this.$$store.user[name],dr);}
else if(hf===cj){he.push(eB,this.$$store.theme[name],dr);}
else if(hf===eP){he.push(eB,this.$$store.init[name],k);}
;}
;he.push(dP);if(hf===ct||hf===cP||hf===cj||hf===ef){he.push(F);if(hf===cP){he.push(eB,this.$$store.runtime[name],dr);}
else if(hf===ct){he.push(eB,this.$$store.user[name],dr);}
else if(hf===cj){he.push(eB,this.$$store.theme[name],dr);}
else if(hf===ef){if(hd){he.push(eB,this.$$store.init[name],dr);}
else {he.push(eB,this.$$store.init[name],k);}
;he.push(ci,this.$$store.useinit[name],eW);}
;he.push(dP);}
;}
,__Y:function(hg,hh,name){if(hh.inheritable){hg.push(dC,this.$$store.inherit[name],k);}
else {hg.push(x);}
;hg.push(bb,this.$$store.runtime[name],dw);hg.push(dK,this.$$store.runtime[name],k);hg.push(dP);if(!hh.inheritable){hg.push(bd,this.$$store.user[name],dw);hg.push(dK,this.$$store.user[name],k);hg.push(dP);if(hh.themeable){hg.push(bd,this.$$store.theme[name],dw);hg.push(dK,this.$$store.theme[name],k);hg.push(dP);}
;hg.push(bd,this.$$store.useinit[name],cy);hg.push(dK,this.$$store.init[name],k);hg.push(dP);}
;}
,__ba:function(hj,hi,name,hk){hj.push(dp);if(hk===eP){hj.push(cG);}
else {hj.push(dG,this.$$store.inherit[name],k);}
;hj.push(ei);hj.push(ci,this.$$store.init[name],dE);hj.push(ci,this.$$store.init[name],be);hj.push(eB,this.$$store.init[name],k);hj.push(ci,this.$$store.useinit[name],eW);hj.push(cm);hj.push(bp,this.$$store.useinit[name],dd);hj.push(dP);hj.push(fb);hj.push(E);hj.push(bY,this.$$store.inherit[name],k);hj.push(dP);hj.push(bl);hj.push(bp,this.$$store.inherit[name],k);hj.push(eT,this.$$store.inherit[name],K);hj.push(dN);if(hi.init!==undefined&&hk!==ef){hj.push(U,this.$$store.init[name],cC);}
else {hj.push(eV);}
;hj.push(fl);}
,__bb:function(hm,hl,name,hn){if(hn!==ct&&hn!==cP&&hn!==cj){hm.push(dY);}
;hm.push(fb);if(hl.init!==undefined&&hn!==ef){hm.push(U,this.$$store.init[name],cC);}
else {hm.push(eV);}
;}
,__bc:function(hp,ho,name,hq,hr){hp.push(S);if(ho.apply){hp.push(eA,ho.apply,cO,name,bj,hq,dB);}
;if(ho.async){hp.push(fd,R,W);if(ho.event){hp.push(dU,cW,ho.event,ee,br,ho.event,dL,cq,db,cX,cW,ho.event,bn,eq,cT,ho.event,cu,cq,bg);}
;if(hr){hp.push(r,cL,bM,bk,this.$$method.refresh[name],fg,dA,this.$$method.refresh[name],M,dP);}
;hp.push(s,cX);}
else {hp.push(fd,dz);if(ho.event){hp.push(dU,cW,ho.event,du,bB,ho.event,dL,dy);if(qx.core.Environment.get(ed)){hp.push(cW,ho.event,bn,ca+bO,ho.event,bu,cN+g);}
;}
;if(hr){hp.push(r,cL,bM,bk,this.$$method.refresh[name],fg,dA,this.$$method.refresh[name],M,dP);}
;hp.push(cU,b,cF,cX);}
;if(qx.core.Environment.get(ed)){hp.push(de+bP);}
;hp.push(fk);}
}});}
)();
(function(){var b=': ',c="The mixin to include into class '",d="constructor",e="' is abstract! It is not possible to instantiate it.",f="environment",g='"! The value is undefined: ',h="Property module disabled.",j='Invalid check definition of property "',k="singleton",m="qx.event.type.Data",n='Forbidden environment setting "',o='". It is forbidden to define a default setting for an external namespace!',p=": the event value needs to be a string with the class name of the event object which will be fired.",q='Invalid include definition in class "',r=" could not refine property: ",s='Invalid config in class "',t="toString",u="! Key: ",v="events",w='Invalid type of key "',x='Invalid transform definition of property "',y="@",z="Interface",A='Annonation for static "',B="Please initialize '",C='Assumed static class because no "extend" key was found. ',D="Singleton instance of ",E="'.",F="' objects using the new keyword!",G=": the event value/type cannot be changed from ",H="destructor",I="destruct",J='"! The value is undefined/null!',K='" of Class "',L='" contains an invalid mixin at position ',M='Annonation for "',N="Could not refine an init value if there was previously no init value defined. Property '",O='" of property "',P='Interface "',Q="extend",R=" is requested, but not ready yet. This is most likely due to a recursive call in the constructor path.",S="module.property",T='Error in include definition of class "',U="string",V='Overwriting member "',W="module.events",X='Cannot annotate private member "',Y='" definition for class "',cL="@destruct",cM="members",cN='". It is forbidden to define a ',cH="' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.",cI=" already has a property: ",cJ="Events module not enabled.",cK="The mixin to patch class '",cS="' of class: '",cT='"!',da='"extend" parameter is null or undefined',cU='.',cO="' is undefined/null!",cP=" could not be refined!",cQ="Invalid 'properties' for ",cR="Could not refine non-existent property: '",cY=".prototype",dC="function",ep='The configuration key "',db='" is not allowed!',cV=": the events must be defined as map!",cW="static",el='undefined',cX='"! The type of the key must be "',dc='extend',dd='Cannot annotate private static "',de="refine",dj="!",dk='@',dl="properties",df="'!",dg='"! ',dh="_",di="The class '",dq="Class",dr='"! The value needs to be a map!',ds='Forbidden variant "',dt='"! Needs to be a String.',dm='"! Only interfaces and arrays of interfaces are allowed!',dn='The include definition in class "',em='" found in "',dp=".",dx='". It is forbidden to define a variant for an external namespace!',dy="object",eo="$$init_",dz='"! Only mixins and arrays of mixins are allowed!',du='!',dv='"! Needs to be a String, Array or Function.',en='"! Every non-static class has to extend at least the "qx.core.Object" class.',dw="init",dA='" without a "refine" flag in the property definition! This class: ',dB="qx.aspects",dN="Incomplete parameters!",dM="@construct",dL='" does not exist!',dR="Class ",dQ="Array",dP="Async",dO="variants",dG='The implement definition in class "',dF='" is already used by Class "',dE='Overwriting private member "',dD='Invalid type "',dK="/",dJ="statics",dI='Invalid key "',dH=" to ",dY="' of class '",dX="",dW="]",dV="member",ed=', original class: ',ec='" contains an invalid interface at position ',eb="qx.Class",ea='Could not refine property "',dU="Mixin",dT="settings",dS="[Class ",eg="abstract",ef='environment setting for an external namespace!',ee='" in class "',ek="The class ',",ej='Invalid implement definition in class "',ei="qx.debug",eh='Forbidden setting "';qx.Bootstrap.define(eb,{statics:{__bd:qx.core.Environment.get(S)?qx.core.Property:null,define:function(name,et){if(!et){et={};}
;if(et.include&&!(qx.Bootstrap.getClass(et.include)===dQ)){et.include=[et.include];}
;if(et.implement&&!(qx.Bootstrap.getClass(et.implement)===dQ)){et.implement=[et.implement];}
;var eq=false;if(!et.hasOwnProperty(Q)&&!et.type){et.type=cW;eq=true;}
;if(qx.core.Environment.get(ei)){try{this.__t(name,et);}
catch(eu){if(eq){eu.message=C+eu.message;}
;throw eu;}
;}
;var er=this.__bh(name,et.type,et.extend,et.statics,et.construct,et.destruct,et.include);[y,dM,cL].forEach(function(ev){this.__bg(er,ev,null,et[ev]);}
,this);if(et.extend){if(et.properties){this.__bj(er,et.properties,true);}
;if(et.members){this.__bl(er,et.members,true,true,false);}
;if(et.events){this.__bi(er,et.events,true);}
;if(et.include){for(var i=0,l=et.include.length;i<l;i++ ){this.__bo(er,et.include[i],false);}
;}
;}
else if(et.hasOwnProperty(dc)&&qx.core.Environment.get(ei)){throw new Error(da);}
;if(et.environment){for(var es in et.environment){qx.core.Environment.add(es,et.environment[es]);}
;}
;if(et.implement){for(var i=0,l=et.implement.length;i<l;i++ ){this.__bn(er,et.implement[i]);}
;}
;if(qx.core.Environment.get(ei)){this.__bf(er);}
;if(et.defer){et.defer.self=er;qx.Bootstrap.addPendingDefer(er,function(){er=qx.Class.getByName(er.classname);et.defer(er,er.prototype,{add:function(name,ew){var ey={};ey[name]=ew;qx.Class.__bj(er,ey,true);}
});}
);}
;return er;}
,undefine:function(name){delete this.$$registry[name];var eB=name.split(dp);var eA=[window];for(var i=0;i<eB.length;i++ ){eA.push(eA[i][eB[i]]);}
;for(var i=eA.length-1;i>=1;i-- ){var ez=eA[i];var parent=eA[i-1];if(qx.Bootstrap.isFunction(ez)||qx.Bootstrap.objectGetLength(ez)===0){delete parent[eB[i-1]];}
else {break;}
;}
;}
,isDefined:qx.util.OOUtil.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,getByName:qx.Bootstrap.getByName,include:function(eD,eC){if(qx.core.Environment.get(ei)){if(!eC){throw new Error(c+eD.classname+cO);}
;qx.Mixin.isCompatible(eC,eD);}
;qx.Class.__bo(eD,eC,false);}
,patch:function(eF,eE){if(qx.core.Environment.get(ei)){if(!eE){throw new Error(cK+eF.classname+cO);}
;qx.Mixin.isCompatible(eE,eF);}
;qx.Class.__bo(eF,eE,true);return qx.Class.getByName(eF.classname);}
,isClass:function(eG){return eG&&eG.$$type===dq&&eG.constructor===eG;}
,isSubClassOf:function(eI,eH){if(!eI){return false;}
;if(eI==eH){return true;}
;if(eI.prototype instanceof eH){return true;}
;return false;}
,getPropertyDefinition:qx.util.OOUtil.getPropertyDefinition,getProperties:function(eK){var eJ=[];while(eK){if(eK.$$properties){eJ.push.apply(eJ,Object.keys(eK.$$properties));}
;eK=eK.superclass;}
;return eJ;}
,getByProperty:function(eL,name){while(eL){if(eL.$$properties&&eL.$$properties[name]){return eL;}
;eL=eL.superclass;}
;return null;}
,hasProperty:qx.util.OOUtil.hasProperty,getEventType:qx.util.OOUtil.getEventType,supportsEvent:qx.util.OOUtil.supportsEvent,hasOwnMixin:function(eN,eM){return eN.$$includes&&eN.$$includes.indexOf(eM)!==-1;}
,getByMixin:function(eQ,eP){var eO,i,l;while(eQ){if(eQ.$$includes){eO=eQ.$$flatIncludes;for(i=0,l=eO.length;i<l;i++ ){if(eO[i]===eP){return eQ;}
;}
;}
;eQ=eQ.superclass;}
;return null;}
,getMixins:qx.util.OOUtil.getMixins,hasMixin:function(eS,eR){return !!this.getByMixin(eS,eR);}
,hasOwnInterface:function(eU,eT){return eU.$$implements&&eU.$$implements.indexOf(eT)!==-1;}
,getByInterface:qx.util.OOUtil.getByInterface,getInterfaces:function(eW){var eV=[];while(eW){if(eW.$$implements){eV.push.apply(eV,eW.$$flatImplements);}
;eW=eW.superclass;}
;return eV;}
,hasInterface:qx.util.OOUtil.hasInterface,implementsInterface:function(eY,eX){var fa=eY.constructor;if(this.hasInterface(fa,eX)){return true;}
;if(qx.Interface.objectImplements(eY,eX)){return true;}
;if(qx.Interface.classImplements(fa,eX)){return true;}
;return false;}
,getInstance:function(){if(this.$$instance===null){throw new Error(D+this+R);}
;if(!this.$$instance){this.$$allowconstruct=true;this.$$instance=null;this.$$instance=new this();delete this.$$allowconstruct;}
;return this.$$instance;}
,getSubclasses:function(fb){if(!fb){return null;}
;var fc={};var fd=qx.Class.$$registry;for(var name in fd){if(fd[name].superclass&&fd[name].superclass==fb){fc[name]=fd[name];}
;}
;return fc;}
,genericToString:function(){return dS+this.classname+dW;}
,$$registry:qx.Bootstrap.$$registry,__s:qx.core.Environment.select(ei,{"true":{"@":dy,"@construct":dy,"@destruct":dy,"type":U,"extend":dC,"implement":dy,"include":dy,"construct":dC,"statics":dy,"properties":dy,"members":dy,"environment":dy,"events":dy,"defer":dC,"destruct":dC},"default":null}),__be:qx.core.Environment.select(ei,{"true":{"@":dy,"type":U,"statics":dy,"environment":dy,"defer":dC},"default":null}),__t:qx.core.Environment.select(ei,{"true":function(name,fh){if(fh.type&&!(fh.type===cW||fh.type===eg||fh.type===k)){throw new Error(dD+fh.type+Y+name+cT);}
;if(fh.type&&fh.type!==cW&&!fh.extend){throw new Error(s+name+en);}
;var fg=fh.type===cW?this.__be:this.__s;for(var ff in fh){if(!fg[ff]){throw new Error(ep+ff+ee+name+db);}
;if(fh[ff]==null){throw new Error(dI+ff+ee+name+J);}
;if(typeof fh[ff]!==fg[ff]){throw new Error(w+ff+ee+name+cX+fg[ff]+cT);}
;}
;var fe=[dJ,dl,cM,f,dT,dO,v];for(var i=0,l=fe.length;i<l;i++ ){var ff=fe[i];if(fh[ff]!==undefined&&(fh[ff].$$hash!==undefined||!qx.Bootstrap.isObject(fh[ff]))){throw new Error(dI+ff+ee+name+dr);}
;}
;if(fh.include){if(qx.Bootstrap.getClass(fh.include)===dQ){for(var i=0,a=fh.include,l=a.length;i<l;i++ ){if(a[i]==null||a[i].$$type!==dU){throw new Error(dn+name+L+i+b+a[i]);}
;}
;}
else {throw new Error(q+name+dz);}
;}
;if(fh.implement){if(qx.Bootstrap.getClass(fh.implement)===dQ){for(var i=0,a=fh.implement,l=a.length;i<l;i++ ){if(a[i]==null||a[i].$$type!==z){throw new Error(dG+name+ec+i+b+a[i]);}
;}
;}
else {throw new Error(ej+name+dm);}
;}
;if(fh.include){try{qx.Mixin.checkCompatibility(fh.include);}
catch(fi){throw new Error(T+name+dg+fi.message);}
;}
;if(fh.environment){for(var ff in fh.environment){if(ff.substr(0,ff.indexOf(dp))!=name.substr(0,name.indexOf(dp))){throw new Error(n+ff+em+name+cN+ef);}
;}
;}
;if(fh.settings){for(var ff in fh.settings){if(ff.substr(0,ff.indexOf(dp))!=name.substr(0,name.indexOf(dp))){throw new Error(eh+ff+em+name+o);}
;}
;}
;if(fh.variants){for(var ff in fh.variants){if(ff.substr(0,ff.indexOf(dp))!=name.substr(0,name.indexOf(dp))){throw new Error(ds+ff+em+name+dx);}
;}
;}
;}
,"default":function(name,fj){}
}),__bf:qx.core.Environment.select(ei,{"true":function(fm){var fl=fm.superclass;while(fl){if(fl.$$classtype!==eg){break;}
;var fk=fl.$$implements;if(fk){for(var i=0;i<fk.length;i++ ){qx.Interface.assert(fm,fk[i],true);}
;}
;fl=fl.superclass;}
;}
,"default":function(fn){}
}),__bg:function(fr,fp,fq,fo){if(fo!==undefined){if(fr.$$annotations===undefined){fr.$$annotations={};fr.$$annotations[fp]={};}
else if(fr.$$annotations[fp]===undefined){fr.$$annotations[fp]={};}
;if(!qx.lang.Type.isArray(fo)){fo=[fo];}
;if(fq){fr.$$annotations[fp][fq]=fo;}
else {fr.$$annotations[fp]=fo;}
;}
;}
,__bh:function(name,fC,fB,fs,fz,fw,fv){var fy=function(){return (typeof this==el);}
;var fx;if(!fB&&qx.core.Environment.get(dB)==false){fx=fs||{};qx.Bootstrap.setDisplayNames(fx,name);}
else {fx={};if(fB){if(!fz){fz=this.__bp();}
;fx=this.__bq(fz,name,fC);if(fC===k){fx.getInstance=this.getInstance;}
;qx.Bootstrap.setDisplayName(fz,name,d);}
;if(fs){qx.Bootstrap.setDisplayNames(fs,name);var fA;for(var i=0,a=Object.keys(fs),l=a.length;i<l;i++ ){fA=a[i];var ft=fs[fA];if(qx.core.Environment.get(ei)){if(fA.charAt(0)===dk){if(fs[fA.substring(1)]===undefined){throw new Error(A+fA.substring(1)+K+fx.classname+dL);}
;if(fA.charAt(1)===dh&&fA.charAt(2)===dh){throw new Error(dd+fA.substring(1)+K+fx.classname);}
;}
;}
;if(fA.charAt(0)===dk){continue;}
;if(qx.core.Environment.get(dB)){if(ft instanceof Function){ft=qx.core.Aspect.wrap(name+dp+fA,ft,cW);}
;fx[fA]=ft;}
else {fx[fA]=ft;}
;this.__bg(fx,dJ,fA,fs[y+fA]);}
;}
;}
;var fu=name?qx.Bootstrap.createNamespace(name,fx):dX;fx.classname=name;if(!fy()){try{fx.name=name;}
catch(fD){}
;}
;fx.basename=fu;fx.$$type=dq;if(fC){fx.$$classtype=fC;}
;if(!fx.hasOwnProperty(t)){fx.toString=this.genericToString;}
;if(fB){qx.Bootstrap.extendClass(fx,fz,fB,name,fu);if(fw){if(qx.core.Environment.get(dB)){fw=qx.core.Aspect.wrap(name,fw,H);}
;fx.$$destructor=fw;qx.Bootstrap.setDisplayName(fw,name,I);}
;}
;this.$$registry[name]=fx;return fx;}
,__bi:function(fE,fF,fH){if(qx.core.Environment.get(ei)){if(typeof fF!==dy||qx.Bootstrap.getClass(fF)===dQ){throw new Error(fE.classname+cV);}
;for(var fG in fF){if(typeof fF[fG]!==U){throw new Error(fE.classname+dK+fG+p);}
;}
;if(fE.$$events&&fH!==true){for(var fG in fF){if(fE.$$events[fG]!==undefined&&fE.$$events[fG]!==fF[fG]){throw new Error(fE.classname+dK+fG+G+fE.$$events[fG]+dH+fF[fG]);}
;}
;}
;}
;if(fE.$$events){for(var fG in fF){fE.$$events[fG]=fF[fG];}
;}
else {fE.$$events=fF;}
;}
,__bj:function(fJ,fM,fK){if(!qx.core.Environment.get(S)){throw new Error(h);}
;if(qx.core.Environment.get(ei)){if(qx.Bootstrap.isQxCoreObject(fM)){throw new Error(cQ+fJ.classname);}
;}
;var fL;if(fK===undefined){fK=false;}
;var fI=fJ.prototype;for(var name in fM){fL=fM[name];if(qx.core.Environment.get(ei)){this.__bk(fJ,name,fL,fK);}
;fL.name=name;if(!fL.refine){if(fJ.$$properties===undefined){fJ.$$properties={};}
;fJ.$$properties[name]=fL;}
;if(fL.init!==undefined){fJ.prototype[eo+name]=fL.init;}
;if(fL.event!==undefined){if(!qx.core.Environment.get(W)){throw new Error(cJ);}
;var event={};event[fL.event]=m;if(fL.async){event[fL.event+dP]=m;}
;this.__bi(fJ,event,fK);}
;if(fL.inheritable){this.__bd.$$inheritable[name]=true;if(!fI.$$refreshInheritables){this.__bd.attachRefreshInheritables(fJ);}
;}
;if(!fL.refine){this.__bd.attachMethods(fJ,name,fL);}
;this.__bg(fJ,dl,name,fL[y]);}
;}
,__bk:qx.core.Environment.select(ei,{"true":function(fN,name,fT,fP){if(!qx.core.Environment.get(S)){throw new Error(h);}
;var fS=this.hasProperty(fN,name);if(fS){var fO=this.getPropertyDefinition(fN,name);if(fT.refine&&fO.init===undefined){throw new Error(N+name+dY+fN.classname+E);}
;}
;if(!fS&&fT.refine){throw new Error(cR+name+cS+fN.classname+df);}
;if(fS&&!fP){throw new Error(dR+fN.classname+cI+name+dj);}
;if(fS&&fP){if(!fT.refine){throw new Error(ea+name+dA+fN.classname+ed+this.getByProperty(fN,name).classname+cU);}
;for(var fQ in fT){if(fQ!==dw&&fQ!==de&&fQ!==y){throw new Error(dR+fN.classname+r+name+u+fQ+cP);}
;}
;}
;var fR=fT.group?this.__bd.$$allowedGroupKeys:this.__bd.$$allowedKeys;for(var fQ in fT){if(fR[fQ]===undefined){throw new Error(ep+fQ+O+name+ee+fN.classname+db);}
;if(fT[fQ]===undefined){throw new Error(dI+fQ+O+name+ee+fN.classname+g+fT[fQ]);}
;if(fR[fQ]!==null&&typeof fT[fQ]!==fR[fQ]){throw new Error(w+fQ+O+name+ee+fN.classname+cX+fR[fQ]+cT);}
;}
;if(fT.transform!=null){if(!(typeof fT.transform===U)){throw new Error(x+name+ee+fN.classname+dt);}
;}
;if(fT.check!=null){if(!qx.Bootstrap.isString(fT.check)&&!qx.Bootstrap.isArray(fT.check)&&!qx.Bootstrap.isFunction(fT.check)){throw new Error(j+name+ee+fN.classname+dv);}
;}
;}
,"default":null}),__bl:function(gc,fU,fW,fY,gb){var fV=gc.prototype;var ga,fX;qx.Bootstrap.setDisplayNames(fU,gc.classname+cY);for(var i=0,a=Object.keys(fU),l=a.length;i<l;i++ ){ga=a[i];fX=fU[ga];if(qx.core.Environment.get(ei)){if(ga.charAt(0)===dk){var gd=ga.substring(1);if(fU[gd]===undefined&&fV[gd]===undefined){throw new Error(M+gd+K+gc.classname+dL);}
;if(ga.charAt(1)===dh&&ga.charAt(2)===dh){throw new Error(X+ga.substring(1)+K+gc.classname);}
;}
else {if(fV[ga]!==undefined&&ga.charAt(0)===dh&&ga.charAt(1)===dh){throw new Error(dE+ga+K+gc.classname+db);}
;if(fW!==true&&fV.hasOwnProperty(ga)){throw new Error(V+ga+K+gc.classname+db);}
;}
;}
;if(ga.charAt(0)===dk){var gd=ga.substring(1);if(fU[gd]===undefined){this.__bg(gc,cM,gd,fU[ga]);}
;continue;}
;if(fV[ga]!=undefined&&fV[ga].$$install){fV[ga].$$install();}
;if(fY!==false&&fX instanceof Function&&fX.$$type==null){if(gb==true){fX=this.__bm(fX,fV[ga]);}
else {if(fV[ga]){fX.base=fV[ga];}
;fX.self=gc;}
;if(qx.core.Environment.get(dB)){fX=qx.core.Aspect.wrap(gc.classname+dp+ga,fX,dV);}
;}
;fV[ga]=fX;this.__bg(gc,cM,ga,fU[y+ga]);}
;}
,__bm:function(ge,gf){if(gf){return function(){var gh=ge.base;ge.base=gf;var gg=ge.apply(this,arguments);ge.base=gh;return gg;}
;}
else {return ge;}
;}
,__bn:function(gk,gi){if(qx.core.Environment.get(ei)){if(!gk||!gi){throw new Error(dN);}
;if(this.hasOwnInterface(gk,gi)){throw new Error(P+gi.name+dF+gk.classname+du);}
;if(gk.$$classtype!==eg){qx.Interface.assert(gk,gi,true);}
;}
;var gj=qx.Interface.flatten([gi]);if(gk.$$implements){gk.$$implements.push(gi);gk.$$flatImplements.push.apply(gk.$$flatImplements,gj);}
else {gk.$$implements=[gi];gk.$$flatImplements=gj;}
;}
,__bo:function(gp,gn,gm){if(qx.core.Environment.get(ei)){if(!gp||!gn){throw new Error(dN);}
;}
;if(this.hasMixin(gp,gn)){return;}
;var gl=qx.Mixin.flatten([gn]);var go;for(var i=0,l=gl.length;i<l;i++ ){go=gl[i];if(go.$$events){this.__bi(gp,go.$$events,gm);}
;if(go.$$properties){this.__bj(gp,go.$$properties,gm);}
;if(go.$$members){this.__bl(gp,go.$$members,gm,gm,gm);}
;}
;if(gp.$$includes){gp.$$includes.push(gn);gp.$$flatIncludes.push.apply(gp.$$flatIncludes,gl);}
else {gp.$$includes=[gn];gp.$$flatIncludes=gl;}
;}
,__bp:function(){function gq(){gq.base.apply(this,arguments);}
;return gq;}
,__bq:function(gs,name,gr){var gu=function(){var gx=gu;if(qx.core.Environment.get(ei)){if(!(this instanceof gx)){throw new Error(B+name+F);}
;if(gr===eg){if(this.classname===name){throw new Error(ek+name+e);}
;}
else if(gr===k){if(!gx.$$allowconstruct){throw new Error(di+name+cH);}
;}
;}
;var gv=gx.$$original.apply(this,arguments);if(gx.$$includes){var gw=gx.$$flatIncludes;for(var i=0,l=gw.length;i<l;i++ ){if(gw[i].$$constructor){gw[i].$$constructor.apply(this,arguments);}
;}
;}
;if(qx.core.Environment.get(ei)){if(this.classname===name){this.$$initialized=true;}
;}
;return gv;}
;if(qx.core.Environment.get(dB)){var gt=qx.core.Aspect.wrap(name,gu,d);gu.$$original=gs;gu.constructor=gt;gu=gt;}
;gu.$$original=gs;gs.wrapper=gu;return gu;}
},defer:function(){if(qx.core.Environment.get(dB)){for(var gy in qx.Bootstrap.$$registry){var gz=qx.Bootstrap.$$registry[gy];for(var gA in gz){if(gz[gA] instanceof Function){gz[gA]=qx.core.Aspect.wrap(gy+dp+gA,gz[gA],cW);}
;}
;}
;}
;}
});}
)();
(function(){var a="qx.data.MBinding",b="qx.promise";qx.Mixin.define(a,{members:{bind:function(c,f,d,e){return qx.data.SingleValueBinding.bind(this,c,f,d,e);}
,bindAsync:qx.core.Environment.select(b,{"true":function(g,j,h,k){var i=qx.data.SingleValueBinding.bind(this,g,j,h,k);if(i.initialPromise){return i.initialPromise.then(function(){i.initialPromise=null;return i;}
);}
else {return qx.Promise.resolve(i);}
;}
,"false":function(l,o,m,n){return this.bind(l,o,m,n);}
}),removeBinding:function(p){qx.data.SingleValueBinding.removeBindingFromObject(this,p);}
,removeRelatedBindings:function(q){qx.data.SingleValueBinding.removeRelatedBindings(this,q);}
,removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);}
,getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);}
},destruct:function(){this.$$hash=this.$$discardedHashCode;this.removeAllBindings();delete this.$$hash;}
});}
)();
(function(){var a="qx.debug.databinding",b="function",c="No number or 'last' value has been given",d="Data after conversion: ",f="^",g="deepBinding",h=")",k="No setter for '",l=") to the object '",m="item",n="Can not remove the bindings for null object!",p="Please use only one array at a time: ",q="Binding executed from ",r="Integer",s="reset",t=" of object ",u="qx.event.type.Data",v="qx.data.SingleValueBinding",w="Binding property ",x="Failed so set value ",y=").",z="change",A="qx.debug",B="targetObject",C="targetPropertyChain",D="get",E="set",F="Binding could not be found!",G=" not possible: No event available. Full property chain: ",H="sourceObject",I="String",J=" to ",K="' on target ",L="Could not remove deep bindings. Binding id for ",M="Binding from '",N="",O="sourcePropertyChain",P="PositiveNumber",Q="Data before conversion: ",R="]",S="Could not remove target listener. Listener id for target ",T="[",U=" could not be found!",V="PositiveInteger",W="' (",X=" on ",Y="Binding does not exist!",bq=" does not work.",br=" in an array binding: ",bs=" is not an data (qx.event.type.Data) event on ",bm=".[",bn=" (",bo=". Error message: ",bp="Boolean",bu=" by ",bv="Date",bw="Number",bx=".",bt="last";qx.Class.define(v,{statics:{__br:{},__bs:{},bind:function(bL,bE,bQ,bN,bU){if(qx.core.Environment.get(A)){qx.core.Assert.assertObject(bL,H);qx.core.Assert.assertString(bE,O);qx.core.Assert.assertObject(bQ,B);qx.core.Assert.assertString(bN,C);}
;var bP=this.__bu(bL,bE,bQ,bN,bU);var bA=bE.split(bx);var bz=this.__bC(bA);var bC=[];var bS=[];var bB=[];var bD=[];var bJ=bL;var bR=null;try{for(var i=0;i<bA.length;i++ ){var bG=bA[i];if(bz[i]!==N){bD.push(z);}
else {var bI=this.__bv(bJ,bG);if(!bI){if(i==0){throw new qx.core.AssertionError(w+bG+t+bJ+G+bE);}
;if(bJ instanceof qx.core.Object&&qx.Class.hasProperty(bJ.constructor,bG)){qx.log.Logger.warn(w+bG+t+bJ+G+bE);}
;bR=this.__bB(undefined,bQ,bN,bU,bL);break;}
;bD.push(bI);}
;bC[i]=bJ;if(i==bA.length-1){if(bz[i]!==N){var bK=bz[i]===bt?bJ.length-1:bz[i];var by=bJ.getItem(bK);bR=this.__bB(by,bQ,bN,bU,bL);bB[i]=this.__bD(bJ,bD[i],bQ,bN,bU,bz[i]);}
else {if(bA[i]!=null&&bJ[D+qx.lang.String.firstUp(bA[i])]!=null){var by=bJ[D+qx.lang.String.firstUp(bA[i])]();bR=this.__bB(by,bQ,bN,bU,bL);}
;bB[i]=this.__bD(bJ,bD[i],bQ,bN,bU);}
;}
else {var bM={index:i,propertyNames:bA,sources:bC,listenerIds:bB,arrayIndexValues:bz,targetObject:bQ,targetPropertyChain:bN,options:bU,listeners:bS};var bO=qx.lang.Function.bind(this.__bt,this,bM);bS.push(bO);bB[i]=bJ.addListener(bD[i],bO);}
;if(bJ[D+qx.lang.String.firstUp(bA[i])]==null){bJ=undefined;}
else if(bz[i]!==N){var bK=bz[i]===bt?bJ.length-1:bz[i];bJ=bJ[D+qx.lang.String.firstUp(bA[i])](bK);}
else {bJ=bJ[D+qx.lang.String.firstUp(bA[i])]();if(bJ===null&&(bA.length-1)!=i){bJ=undefined;}
;}
;if(!bJ){this.__bB(bJ,bQ,bN,bU,bL);break;}
;}
;}
catch(bV){for(var i=0;i<bC.length;i++ ){if(bC[i]&&bB[i]){bC[i].removeListenerById(bB[i]);}
;}
;var bF=bP.targets;var bT=bP.listenerIds;for(var i=0;i<bF.length;i++ ){if(bF[i]&&bT[i]){bF[i].removeListenerById(bT[i]);}
;}
;throw bV;}
;var bH={type:g,listenerIds:bB,sources:bC,targetListenerIds:bP.listenerIds,targets:bP.targets,initialPromise:bR};this.__bE(bH,bL,bE,bQ,bN);return bH;}
,__bt:function(cd){if(cd.options&&cd.options.onUpdate){cd.options.onUpdate(cd.sources[cd.index],cd.targetObject);}
;for(var j=cd.index+1;j<cd.propertyNames.length;j++ ){var cb=cd.sources[j];cd.sources[j]=null;if(!cb){continue;}
;cb.removeListenerById(cd.listenerIds[j]);}
;var cb=cd.sources[cd.index];for(var j=cd.index+1;j<cd.propertyNames.length;j++ ){if(cd.arrayIndexValues[j-1]!==N){cb=cb[D+qx.lang.String.firstUp(cd.propertyNames[j-1])](cd.arrayIndexValues[j-1]);}
else {cb=cb[D+qx.lang.String.firstUp(cd.propertyNames[j-1])]();}
;cd.sources[j]=cb;if(!cb){if(cd.options&&cd.options.converter){var bW=false;if(cd.options.ignoreConverter){var ce=cd.propertyNames.slice(0,j).join(bx);var cc=ce.match(new RegExp(f+cd.options.ignoreConverter));bW=cc?cc.length>0:false;}
;if(!bW){this.__bx(cd.targetObject,cd.targetPropertyChain,cd.options.converter());}
else {this.__bw(cd.targetObject,cd.targetPropertyChain);}
;}
else {this.__bw(cd.targetObject,cd.targetPropertyChain);}
;break;}
;if(j==cd.propertyNames.length-1){if(qx.Class.implementsInterface(cb,qx.data.IListData)&&cd.arrayIndexValues[j]!==N){var cf=cd.arrayIndexValues[j]===bt?cb.length-1:cd.arrayIndexValues[j];var bX=cb.getItem(cf);this.__bB(bX,cd.targetObject,cd.targetPropertyChain,cd.options,cd.sources[cd.index]);cd.listenerIds[j]=this.__bD(cb,z,cd.targetObject,cd.targetPropertyChain,cd.options,cd.arrayIndexValues[j]);}
else {if(cd.propertyNames[j]!=null&&cb[D+qx.lang.String.firstUp(cd.propertyNames[j])]!=null){var bX=cb[D+qx.lang.String.firstUp(cd.propertyNames[j])]();this.__bB(bX,cd.targetObject,cd.targetPropertyChain,cd.options,cd.sources[cd.index]);}
;var bY=this.__bv(cb,cd.propertyNames[j]);if(!bY){cd.sources[j]=null;this.__bw(cd.targetObject,cd.targetPropertyChain);return;}
;cd.listenerIds[j]=this.__bD(cb,bY,cd.targetObject,cd.targetPropertyChain,cd.options);}
;}
else {if(cd.listeners[j]==null){var ca=qx.lang.Function.bind(this.__bt,this,cd);cd.listeners.push(ca);}
;if(qx.Class.implementsInterface(cb,qx.data.IListData)){var bY=z;}
else {var bY=this.__bv(cb,cd.propertyNames[j]);}
;if(!bY){cd.sources[j]=null;this.__bw(cd.targetObject,cd.targetPropertyChain);return;}
;cd.listenerIds[j]=cb.addListener(bY,cd.listeners[j]);}
;}
;}
,__bu:function(ci,cq,cu,cm,co){var cl=cm.split(bx);var cj=this.__bC(cl);var ct=[];var cs=[];var cn=[];var cr=[];var ck=cu;for(var i=0;i<cl.length-1;i++ ){if(cj[i]!==N){cr.push(z);}
else {var ch=this.__bv(ck,cl[i]);if(!ch){break;}
;cr.push(ch);}
;ct[i]=ck;var cp=function(){for(var j=i+1;j<cl.length-1;j++ ){var cx=ct[j];ct[j]=null;if(!cx){continue;}
;cx.removeListenerById(cn[j]);}
;var cx=ct[i];for(var j=i+1;j<cl.length-1;j++ ){var cv=qx.lang.String.firstUp(cl[j-1]);if(cj[j-1]!==N){var cy=cj[j-1]===bt?cx.getLength()-1:cj[j-1];cx=cx[D+cv](cy);}
else {cx=cx[D+cv]();}
;ct[j]=cx;if(!cx){break;}
;if(cs[j]==null){cs.push(cp);}
;if(qx.Class.implementsInterface(cx,qx.data.IListData)){var cw=z;}
else {var cw=qx.data.SingleValueBinding.__bv(cx,cl[j]);if(!cw){break;}
;}
;cn[j]=cx.addListener(cw,cs[j]);}
;qx.data.SingleValueBinding.updateTarget(ci,cq,cu,cm,co);}
;cs.push(cp);cn[i]=ck.addListener(cr[i],cp);var cg=qx.lang.String.firstUp(cl[i]);if(ck[D+cg]==null){ck=null;}
else if(cj[i]!==N){ck=ck[D+cg](cj[i]);}
else {ck=ck[D+cg]();}
;if(!ck){break;}
;}
;return {listenerIds:cn,targets:ct};}
,updateTarget:function(cz,cC,cE,cA,cD){var cB=this.resolvePropertyChain(cz,cC);cB=qx.data.SingleValueBinding.__bF(cB,cE,cA,cD,cz);this.__bx(cE,cA,cB);}
,resolvePropertyChain:function(o,cF){var cG=this.__bz(cF);return this.__bA(o,cG,cG.length);}
,__bv:function(cI,cJ){var cH=this.__bG(cI,cJ);if(cH==null){if(qx.Class.supportsEvent(cI.constructor,cJ)){cH=cJ;}
else if(qx.Class.supportsEvent(cI.constructor,z+qx.lang.String.firstUp(cJ))){cH=z+qx.lang.String.firstUp(cJ);}
else {return null;}
;}
;return cH;}
,__bw:function(cO,cM){var cN=this.__bz(cM);var cL=this.__bA(cO,cN);if(cL!=null){var cP=cN[cN.length-1];var cK=this.__by(cP);if(cK){this.__bx(cO,cM,null);return;}
;if(cL[s+qx.lang.String.firstUp(cP)]!=undefined){cL[s+qx.lang.String.firstUp(cP)]();}
else {if(typeof cL[E+qx.lang.String.firstUp(cP)]!=b){throw new qx.core.AssertionError(k+cP+K+cL+bx);}
;cL[E+qx.lang.String.firstUp(cP)](null);}
;}
;}
,__bx:function(cV,cS,cT){var cU=this.__bz(cS);var cR=this.__bA(cV,cU);if(cR){var cW=cU[cU.length-1];var cQ=this.__by(cW);if(cQ){if(cQ===bt){cQ=cR.length-1;}
;cR.setItem(cQ,cT);}
else {if(typeof cR[E+qx.lang.String.firstUp(cW)]!=b){throw new qx.core.AssertionError(k+cW+K+cR+bx);}
;return cR[E+qx.lang.String.firstUp(cW)](cT);}
;}
;}
,__by:function(da){var cX=/^\[(\d+|last)\]$/;var cY=da.match(cX);if(cY){return cY[1];}
;return null;}
,__bz:function(db){return db.replace(/\[/g,bm).split(bx).filter(function(dc){return dc!==N;}
);}
,__bA:function(di,dd,de){de=de||dd.length-1;var dg=di;for(var i=0;dg!==null&&i<de;i++ ){try{var dh=dd[i];var df=this.__by(dh);if(df){if(df===bt){df=dg.length-1;}
;dg=dg.getItem(df);}
else {dg=dg[D+qx.lang.String.firstUp(dh)]();}
;}
catch(dj){return null;}
;}
;return dg;}
,__bB:function(dm,dq,dl,dp,dk){dm=this.__bF(dm,dq,dl,dp,dk);if(dm===undefined){this.__bw(dq,dl);}
;if(dm!==undefined){try{var dn=this.__bx(dq,dl,dm);if(dp&&dp.onUpdate){dp.onUpdate(dk,dq,dm);}
;return dn;}
catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;}
;if(dp&&dp.onSetFail){dp.onSetFail(e);}
else {qx.log.Logger.warn(x+dm+X+dq+bo+e);}
;}
;}
;}
,__bC:function(dr){var ds=[];for(var i=0;i<dr.length;i++ ){var name=dr[i];if(name.endsWith(R)){var dt=name.substring(name.indexOf(T)+1,name.indexOf(R));if(name.indexOf(R)!=name.length-1){throw new Error(p+name+bq);}
;if(dt!==bt){if(dt==N||isNaN(parseInt(dt,10))){throw new Error(c+br+name+bq);}
;}
;if(name.indexOf(T)!=0){dr[i]=name.substring(0,name.indexOf(T));ds[i]=N;ds[i+1]=dt;dr.splice(i+1,0,m);i++ ;}
else {ds[i]=dt;dr.splice(i,1,m);}
;}
else {ds[i]=N;}
;}
;return ds;}
,__bD:function(du,dx,dC,dA,dy,dw){if(qx.core.Environment.get(A)){var dv=qx.Class.getEventType(du.constructor,dx);qx.core.Assert.assertEquals(u,dv,dx+bs+du+bx);}
;var dz=function(dE,e){if(dE!==N){if(dE===bt){dE=du.length-1;}
;var dH=du.getItem(dE);if(dH===undefined){qx.data.SingleValueBinding.__bw(dC,dA);}
;var dF=e.getData().start;var dD=e.getData().end;if(dE<dF||dE>dD){return;}
;}
else {var dH=e.getData();}
;if(qx.core.Environment.get(a)){qx.log.Logger.debug(q+du+bu+dx+J+dC+bn+dA+h);qx.log.Logger.debug(Q+dH);}
;dH=qx.data.SingleValueBinding.__bF(dH,dC,dA,dy,du);if(qx.core.Environment.get(a)){qx.log.Logger.debug(d+dH);}
;var dG;try{if(dH!==undefined){dG=qx.data.SingleValueBinding.__bx(dC,dA,dH);}
else {dG=qx.data.SingleValueBinding.__bw(dC,dA);}
;if(dy&&dy.onUpdate){dy.onUpdate(du,dC,dH);}
;}
catch(dI){if(!(dI instanceof qx.core.ValidationError)){throw dI;}
;if(dy&&dy.onSetFail){dy.onSetFail(dI);}
else {qx.log.Logger.warn(x+dH+X+dC+bo+dI);}
;}
;return dG;}
;if(!dw){dw=N;}
;dz=qx.lang.Function.bind(dz,du,dw);var dB=du.addListener(dx,dz);return dB;}
,__bE:function(dO,dJ,dM,dP,dN){var dK;dK=dJ.toHashCode();if(this.__br[dK]===undefined){this.__br[dK]=[];}
;var dL=[dO,dJ,dM,dP,dN];this.__br[dK].push(dL);dK=dP.toHashCode();if(this.__bs[dK]===undefined){this.__bs[dK]=[];}
;this.__bs[dK].push(dL);}
,__bF:function(dT,ea,dS,dV,dQ){if(dV&&dV.converter){var dW;if(ea.getModel){dW=ea.getModel();}
;return dV.converter(dT,dW,dQ,ea);}
else {var dU=this.__bz(dS);var dR=this.__bA(ea,dU);var eb=dS.substring(dS.lastIndexOf(bx)+1,dS.length);if(dR==null){return dT;}
;var dX=qx.Class.getPropertyDefinition(dR.constructor,eb);var dY=dX==null?N:dX.check;return this.__bH(dT,dY);}
;}
,__bG:function(ec,ee){var ed=qx.Class.getPropertyDefinition(ec.constructor,ee);if(ed==null){return null;}
;return ed.event;}
,__bH:function(eh,eg){var ef=qx.lang.Type.getClass(eh);if((ef==bw||ef==I)&&(eg==r||eg==V)){eh=parseInt(eh,10);}
;if((ef==bp||ef==bw||ef==bv)&&eg==I){eh=eh+N;}
;if((ef==bw||ef==I)&&(eg==bw||eg==P)){eh=parseFloat(eh);}
;return eh;}
,removeBindingFromObject:function(ei,em){if(em.type==g){for(var i=0;i<em.sources.length;i++ ){if(em.sources[i]){if(em.listenerIds[i]){em.sources[i].removeListenerById(em.listenerIds[i]);}
else {ei.error(L+em.sources[i].classname+U);}
;}
;}
;for(var i=0;i<em.targets.length;i++ ){if(em.targets[i]){if(em.targetListenerIds[i]){em.targets[i].removeListenerById(em.targetListenerIds[i]);}
else {ei.error(S+em.targets[i].classname+U);}
;}
;}
;}
else {ei.removeListenerById(em);}
;var el=this.getAllBindingsForObject(ei);if(el!=undefined){for(var i=0;i<el.length;i++ ){if(el[i][0]==em){var ej=el[i][3];if(this.__bs[ej.toHashCode()]){qx.lang.Array.remove(this.__bs[ej.toHashCode()],el[i]);}
;var ek=el[i][1];if(this.__br[ek.toHashCode()]){qx.lang.Array.remove(this.__br[ek.toHashCode()],el[i]);}
;return;}
;}
;}
;throw new Error(F);}
,removeAllBindingsForObject:function(eo){if(qx.core.Environment.get(A)){qx.core.Assert.assertNotNull(eo,n);}
;var en=this.getAllBindingsForObject(eo);if(en!=undefined){for(var i=en.length-1;i>=0;i-- ){this.removeBindingFromObject(eo,en[i][0]);}
;}
;}
,removeRelatedBindings:function(eq,er){if(qx.core.Environment.get(A)){qx.core.Assert.assertNotNull(eq,n);qx.core.Assert.assertNotNull(er,n);}
;var et=this.getAllBindingsForObject(eq);if(et!=undefined){for(var i=et.length-1;i>=0;i-- ){var es=et[i][1];var ep=et[i][3];if(es===er||ep===er){this.removeBindingFromObject(eq,et[i][0]);}
;}
;}
;}
,getAllBindingsForObject:function(ev){var ew=ev.toHashCode();if(this.__br[ew]===undefined){this.__br[ew]=[];}
;var ey=this.__br[ew];var eu=this.__bs[ew]?this.__bs[ew]:[];return qx.lang.Array.unique(ey.concat(eu));}
,removeAllBindings:function(){for(var eA in this.__br){var ez=qx.core.ObjectRegistry.fromHashCode(eA);if(ez==null){delete this.__br[eA];continue;}
;this.removeAllBindingsForObject(ez);}
;this.__br={};}
,getAllBindings:function(){return this.__br;}
,showBindingInLog:function(eC,eE){var eD;for(var i=0;i<this.__br[eC.toHashCode()].length;i++ ){if(this.__br[eC.toHashCode()][i][0]==eE){eD=this.__br[eC.toHashCode()][i];break;}
;}
;if(eD===undefined){var eB=Y;}
else {var eB=M+eD[1]+W+eD[2]+l+eD[3]+W+eD[4]+y;}
;qx.log.Logger.debug(eB);}
,showAllBindingsInLog:function(){for(var eG in this.__br){var eF=qx.core.ObjectRegistry.fromHashCode(eG);if(eF){for(var i=0;i<this.__br[eG].length;i++ ){this.showBindingInLog(eF,this.__br[eG][i][0]);}
;}
;}
;}
}});}
)();
(function(){var a="qx.util.RingBuffer";qx.Bootstrap.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);}
,members:{__bI:0,__bJ:0,__bK:false,__bL:0,__bM:null,__bN:null,setMaxEntries:function(c){this.__bN=c;this.clear();}
,getMaxEntries:function(){return this.__bN;}
,addEntry:function(d){this.__bM[this.__bI]=d;this.__bI=this.__bO(this.__bI,1);var e=this.getMaxEntries();if(this.__bJ<e){this.__bJ++ ;}
;if(this.__bK&&(this.__bL<e)){this.__bL++ ;}
;}
,getNumEntriesStored:function(){return this.__bJ;}
,mark:function(){this.__bK=true;this.__bL=0;}
,clearMark:function(){this.__bK=false;}
,getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);}
,getEntries:function(f,j){if(f>this.__bJ){f=this.__bJ;}
;if(j&&this.__bK&&(f>this.__bL)){f=this.__bL;}
;if(f>0){var h=this.__bO(this.__bI,-1);var g=this.__bO(h,-f+1);var i;if(g<=h){i=this.__bM.slice(g,h+1);}
else {i=this.__bM.slice(g,this.__bJ).concat(this.__bM.slice(0,h+1));}
;}
else {i=[];}
;return i;}
,clear:function(){this.__bM=new Array(this.getMaxEntries());this.__bJ=0;this.__bL=0;this.__bI=0;}
,__bO:function(n,l){var k=this.getMaxEntries();var m=(n+l)%k;if(m<0){m+=k;}
;return m;}
}});}
)();
(function(){var a="Invalid parameter 'func'.",b="qx.debug",c='anonymous()',d="Trying to call a bound function with a disposed object as context: ",e="()",f="qx.globalErrorHandling",g=" :: ",h="qx.lang.Function",i=".",j=".prototype.",k=".constructor()";qx.Bootstrap.define(h,{statics:{getCaller:function(l){return l.caller?l.caller.callee:l.callee.caller;}
,getName:function(m){if(m.displayName){return m.displayName;}
;if(m.$$original||m.wrapper||m.classname){return m.classname+k;}
;if(m.$$mixin){for(var n in m.$$mixin.$$members){if(m.$$mixin.$$members[n]==m){return m.$$mixin.name+j+n+e;}
;}
;for(var n in m.$$mixin){if(m.$$mixin[n]==m){return m.$$mixin.name+i+n+e;}
;}
;}
;if(m.self){var p=m.self.constructor;if(p){for(var n in p.prototype){if(p.prototype[n]==m){return p.classname+j+n+e;}
;}
;for(var n in p){if(p[n]==m){return p.classname+i+n+e;}
;}
;}
;}
;var o=m.toString().match(/function\s*(\w*)\s*\(.*/);if(o&&o.length>=1&&o[1]){return o[1]+e;}
;return c;}
,globalEval:function(data){if(window.execScript){return window.execScript(data);}
else {return eval.call(window,data);}
;}
,create:function(r,q){if(qx.core.Environment.get(b)){qx.core.Assert&&qx.core.Assert.assertFunction(r,a);}
;if(!q){return r;}
;if(!(q.self||q.args||q.delay!=null||q.periodical!=null||q.attempt)){return r;}
;return function(event){if(qx.core.Environment.get(b)){if(qx.core.Object&&q.self&&qx.Bootstrap.isObject(q.self)&&q.self.isDisposed&&qx.Bootstrap.isFunction(q.self.isDisposed)){if(q.self.isDisposed()){qx.core.Assert&&qx.core.Assert.fail(d+q.self.toString()+g+qx.lang.Function.getName(r));}
;}
;}
;var t=qx.lang.Array.fromArguments(arguments);if(q.args){t=q.args.concat(t);}
;if(q.delay||q.periodical){var s=function(){return r.apply(q.self||this,t);}
;if(qx.core.Environment.get(f)){s=qx.event.GlobalError.observeMethod(s);}
;if(q.delay){return window.setTimeout(s,q.delay);}
;if(q.periodical){return window.setInterval(s,q.periodical);}
;}
else if(q.attempt){var u=false;try{u=r.apply(q.self||this,t);}
catch(v){}
;return u;}
else {return r.apply(q.self||this,t);}
;}
;}
,bind:function(w,self,x){return this.create(w,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});}
,curry:function(y,z){return this.create(y,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});}
,listener:function(B,self,C){if(arguments.length<3){return function(event){return B.call(self||this,event||window.event);}
;}
else {var A=qx.lang.Array.fromArguments(arguments,2);return function(event){var D=[event||window.event];D.push.apply(D,A);B.apply(self||this,D);}
;}
;}
,attempt:function(E,self,F){return this.create(E,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();}
,delay:function(H,G,self,I){return this.create(H,{delay:G,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();}
,periodical:function(K,J,self,L){return this.create(K,{periodical:J,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();}
}});}
)();
(function(){var a="qx.globalErrorHandling",b="qx.event.GlobalError";qx.Bootstrap.define(b,{statics:{__bP:null,__bQ:null,__bR:null,__bS:function(){if(qx.core&&qx.core.Environment){return qx.core.Environment.get(a);}
else {return !!qx.Bootstrap.getEnvironmentSetting(a);}
;}
,setErrorHandler:function(c,d){this.__bP=c||null;this.__bR=d||window;if(this.__bS()){if(c&&window.onerror){var e=qx.Bootstrap.bind(this.__bT,this);if(this.__bQ==null){this.__bQ=window.onerror;}
;var self=this;window.onerror=function(f,g,h){self.__bQ(f,g,h);e(f,g,h);}
;}
;if(c&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__bT,this);}
;if(this.__bP==null){if(this.__bQ!=null){window.onerror=this.__bQ;this.__bQ=null;}
else {window.onerror=null;}
;}
;}
;}
,__bT:function(i,l,m,j,k){if(this.__bP){this.handleError(new qx.core.WindowError(i,l,m,j,k));}
;}
,observeMethod:function(n){if(this.__bS()){var self=this;return function(){if(!self.__bP){return n.apply(this,arguments);}
;try{return n.apply(this,arguments);}
catch(o){self.handleError(new qx.core.GlobalError(o,arguments));}
;}
;}
else {return n;}
;}
,handleError:function(p){if(this.__bP){this.__bP.call(this.__bR,p);}
;}
},defer:function(q){if(qx.core&&qx.core.Environment){qx.core.Environment.add(a,true);}
else {qx.Bootstrap.setEnvironmentSetting(a,true);}
;q.setErrorHandler(null,null);}
});}
)();
(function(){var a="",b="qx.core.WindowError";qx.Bootstrap.define(b,{extend:Error,construct:function(g,d,f,c,h){var e=h||Error.call(this,g);if(e.stack){this.stack=e.stack;}
;if(e.stacktrace){this.stacktrace=e.stacktrace;}
;this.__bU=g;this.__bV=d||a;this.__bW=f===undefined?-1:f;this.__bX=c===undefined?-1:c;this.__bY=h;}
,members:{__bU:null,__bV:null,__bW:null,__bX:null,__bY:null,toString:function(){return this.__bU;}
,getUri:function(){return this.__bV;}
,getLineNumber:function(){return this.__bW;}
,getColumnNumber:function(){return this.__bX;}
,getSourceException:function(){return this.__bY;}
}});}
)();
(function(){var a="GlobalError: ",b="qx.core.GlobalError";qx.Bootstrap.define(b,{extend:Error,construct:function(e,c){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(e);}
;this.__bU=a+(e&&e.message?e.message:e);var d=Error.call(this,this.__bU);if(d.stack){this.stack=d.stack;}
;if(d.stacktrace){this.stacktrace=d.stacktrace;}
;this.__ca=c;this.__cb=e;}
,members:{__cb:null,__ca:null,__bU:null,toString:function(){return this.__bU;}
,getArguments:function(){return this.__ca;}
,getSourceException:function(){return this.__cb;}
}});}
)();
(function(){var a="qx.log.appender.RingBuffer";qx.Bootstrap.define(a,{extend:qx.util.RingBuffer,construct:function(b){this.setMaxMessages(b||50);}
,members:{setMaxMessages:function(c){this.setMaxEntries(c);}
,getMaxMessages:function(){return this.getMaxEntries();}
,process:function(d){this.addEntry(d);}
,getAllLogEvents:function(){return this.getAllEntries();}
,retrieveLogEvents:function(e,f){return this.getEntries(e,f);}
,clearHistory:function(){this.clear();}
}});}
)();
(function(){var a="qx.log.Logger",b=")}",c="The mixin '",d="...(+",e="array",f="The method '",g=")",h="warn",j="node",k="The event '",m="instance",n="info",o="string",p="Please consult the API documentation of this method for alternatives.",q="null",r="error",s="qx.debug",t="Please consult the API documentation of this class for alternatives.",u="#",v="class",w="' is deprecated: ",x=": ",y="Please consult the API documentation for alternatives.",z="document",A="{...(",B="",C="number",D="' from class '",E="The class '",F="stringify",G="' overrides a deprecated method: ",H="date",I="unknown",J="function",K="[default]",L="text[",M="]",N="[...(",O="boolean",P="\n",Q="|",R="debug",S=")]",T="map",U="The constant '",V="undefined",W="trace",X="object";qx.Bootstrap.define(a,{statics:{__cc:R,setLevel:function(Y){this.__cc=Y;}
,getLevel:function(){return this.__cc;}
,setTreshold:function(ba){this.__ch.setMaxMessages(ba);}
,getTreshold:function(){return this.__ch.getMaxMessages();}
,__cd:[],__ce:{},__cf:[],__cg:0,register:function(bc){if(bc.$$id){return;}
;var bg=this.__cg++ ;var be=bc.appenderName||bc.classname;this.__cd[bg]=bc;this.__ce[be]=bc;bc.$$id=bg;var bd=this.__ch.getAllLogEvents();for(var i=0,l=bd.length;i<l;i++ ){var bf=bd[i];var bb=this.__cm(bf.loggerName,bf.level);if(bb[be]){bc.process(bf);}
;}
;}
,unregister:function(bi){var bj=bi.$$id;if(bj==null){return;}
;var bh=bi.appenderName||bi.classname;delete this.__ce[bh];delete this.__cd[bj];delete bi.$$id;}
,addFilter:function(bl,bk,bm){if(typeof bl==o){bl=new RegExp(bl);}
;this.__cf.push({loggerMatch:bl,level:bm||this.__cc,appenderName:bk});}
,resetFilters:function(){this.__cf=[];}
,debug:function(bo,bn){qx.log.Logger.__cl(R,arguments);}
,info:function(bq,bp){qx.log.Logger.__cl(n,arguments);}
,warn:function(bs,br){qx.log.Logger.__cl(h,arguments);}
,error:function(bu,bt){qx.log.Logger.__cl(r,arguments);}
,trace:function(by,bv){if(qx.log.Logger.isLoggerEnabled(W,by)){var bx=qx.dev.StackTrace.getStackTrace();var bw=qx.lang.Array.fromArguments(arguments);bw.push(bx.join(P));qx.log.Logger.__cl(W,bw);}
;}
,deprecatedMethodWarning:function(bB,bz){if(qx.core.Environment.get(s)){var bA=qx.lang.Function.getName(bB);this.warn(f+bA+w+(bz||p));this.trace();}
;}
,deprecatedClassWarning:function(bE,bC){if(qx.core.Environment.get(s)){var bD=bE.classname||I;this.warn(E+bD+w+(bC||t));this.trace();}
;}
,deprecatedEventWarning:function(bH,event,bG){if(qx.core.Environment.get(s)){var bF=bH.self?bH.self.classname:I;this.warn(k+(event||I)+D+bF+w+(bG||t));this.trace();}
;}
,deprecatedMixinWarning:function(bJ,bI){if(qx.core.Environment.get(s)){var bK=bJ?bJ.name:I;this.warn(c+bK+w+(bI||t));this.trace();}
;}
,deprecatedConstantWarning:function(bO,bN,bL){if(qx.core.Environment.get(s)){if(bO.__defineGetter__){var self=this;var bM=bO[bN];bO.__defineGetter__(bN,function(){self.warn(U+bN+w+(bL||y));self.trace();return bM;}
);}
;}
;}
,deprecateMethodOverriding:function(bR,bQ,bS,bP){if(qx.core.Environment.get(s)){var bT=bR.constructor;while(bT.classname!==bQ.classname){if(bT.prototype.hasOwnProperty(bS)){this.warn(f+qx.lang.Function.getName(bR[bS])+G+(bP||y));this.trace();break;}
;bT=bT.superclass;}
;}
;}
,clear:function(){this.__ch.clearHistory();}
,__ch:new qx.log.appender.RingBuffer(50),__ci:{trace:0,debug:1,info:2,warn:3,error:4},__cj:{},__ck:function(bU){if(bU){if(bU.classname){return bU.classname;}
;if(typeof bU==o){return bU;}
;}
;return K;}
,isLoggerEnabled:function(bY,bW){var bV=this.__ck(bW);var bX=this.__cm(bV,bY);return !!Object.keys(bX).length;}
,__cl:function(cc,ca){var ce=ca.length<2?null:ca[0];var cf=this.__ck(ce);var cb=this.__cm(cf,cc);if(!Object.keys(cb).length){return;}
;var ch=ce?1:0;var cd=[];for(var i=ch,l=ca.length;i<l;i++ ){cd.push(this.__co(ca[i],true));}
;var ci=new Date;var cj={time:ci,offset:ci-qx.Bootstrap.LOADSTART,level:cc,loggerName:cf,items:cd,win:window};if(ce){if(qx.Bootstrap.isQxCoreObject(ce)){cj.object=ce.toHashCode();}
;if(ce.$$type){cj.clazz=ce;}
else if(ce.constructor){cj.clazz=ce.constructor;}
;}
;this.__ch.process(cj);for(var cg in cb){cb[cg].process(cj);}
;}
,__cm:function(ck,cm){var cp=this.__ci;if(!this.__cf.length){if(cp[cm]<cp[this.__cc]){return [];}
;return this.__ce;}
;var cn=ck+Q+cm;var cl=this.__cj[cn];if(cl!==undefined){return cl;}
;var cl={};for(var i=0;i<this.__cf.length;i++ ){var co=this.__cf[i];if(cp[cm]<cp[co.level]){continue;}
;if(co.appenderName&&cl[co.appenderName]){continue;}
;if(!co.loggerMatch||co.loggerMatch.test(ck)){if(co.appenderName){cl[co.appenderName]=this.__ce[co.appenderName];}
else {return this.__cj[cn]=this.__ce;}
;}
;}
;return this.__cj[cn]=cl;}
,__cn:function(cr){if(cr===undefined){return V;}
else if(cr===null){return q;}
;if(cr.$$type){return v;}
;var cq=typeof cr;if(cq===J||cq==o||cq===C||cq===O){return cq;}
else if(cq===X){if(cr.nodeType){return j;}
else if(cr instanceof Error||(cr.name&&cr.message)){return r;}
else if(cr.classname){return m;}
else if(cr instanceof Array){return e;}
else if(cr instanceof Date){return H;}
else {return T;}
;}
;if(cr.toString){return F;}
;return I;}
,__co:function(cx,cw){var cA=this.__cn(cx);var cu=I;var ct=[];switch(cA){case q:case V:cu=cA;break;case o:case C:case O:case H:cu=cx;break;case j:if(cx.nodeType===9){cu=z;}
else if(cx.nodeType===3){cu=L+cx.nodeValue+M;}
else if(cx.nodeType===1){cu=cx.nodeName.toLowerCase();if(cx.id){cu+=u+cx.id;}
;}
else {cu=j;}
;break;case J:cu=qx.lang.Function.getName(cx)||cA;break;case m:case v:case F:cu=cx.toString();break;case r:ct=qx.dev.StackTrace.getStackTraceFromError(cx);cu=(cx.basename?cx.basename+x:B)+cx.toString();break;case e:if(cw){cu=[];for(var i=0,l=cx.length;i<l;i++ ){if(cu.length>20){cu.push(d+(l-i)+g);break;}
;cu.push(this.__co(cx[i],false));}
;}
else {cu=N+cx.length+S;}
;break;case T:if(cw){var cs;var cz=[];for(var cy in cx){cz.push(cy);}
;cz.sort();cu=[];for(var i=0,l=cz.length;i<l;i++ ){if(cu.length>20){cu.push(d+(l-i)+g);break;}
;cy=cz[i];cs=this.__co(cx[cy],false);cs.key=cy;cu.push(cs);}
;}
else {var cv=0;for(var cy in cx){cv++ ;}
;cu=A+cv+b;}
;break;};return {type:cA,text:cu,trace:ct};}
},defer:function(cB){var cC=qx.Bootstrap.$$logs;for(var i=0;i<cC.length;i++ ){cB.__cl(cC[i][0],cC[i][1]);}
;qx.Bootstrap.debug=cB.debug;qx.Bootstrap.info=cB.info;qx.Bootstrap.warn=cB.warn;qx.Bootstrap.error=cB.error;qx.Bootstrap.trace=cB.trace;}
});}
)();
(function(){var a="info",b="error",c="warn",d="debug",e="qx.core.MLogging",f="trace";qx.Mixin.define(e,{members:{__cp:qx.log.Logger,debug:function(g){this.__cq(d,arguments);}
,info:function(h){this.__cq(a,arguments);}
,warn:function(i){this.__cq(c,arguments);}
,error:function(j){this.__cq(b,arguments);}
,trace:function(k){this.__cq(f,arguments);}
,__cq:function(l,n){var m=qx.lang.Array.fromArguments(n);m.unshift(this);this.__cp[l].apply(this.__cp,m);}
}});}
)();
(function(){var b="qx.dom.Node",c="";qx.Bootstrap.define(b,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(d){return d.nodeType===this.DOCUMENT?d:d.ownerDocument||d.document;}
,getWindow:function(e){if(e.nodeType==null){return e;}
;if(e.nodeType!==this.DOCUMENT){e=e.ownerDocument;}
;return e.defaultView||e.parentWindow;}
,getDocumentElement:function(f){return this.getDocument(f).documentElement;}
,getBodyElement:function(g){return this.getDocument(g).body;}
,isNode:function(h){return !!(h&&h.nodeType!=null);}
,isElement:function(j){return !!(j&&j.nodeType===this.ELEMENT);}
,isDocument:function(k){return !!(k&&k.nodeType===this.DOCUMENT);}
,isDocumentFragment:function(l){return !!(l&&l.nodeType===this.DOCUMENT_FRAGMENT);}
,isText:function(m){return !!(m&&m.nodeType===this.TEXT);}
,isWindow:function(n){return !!(n&&n.history&&n.location&&n.document);}
,isNodeName:function(o,p){if(!p||!o||!o.nodeName){return false;}
;return p.toLowerCase()==qx.dom.Node.getName(o);}
,getName:function(q){if(!q||!q.nodeName){return null;}
;return q.nodeName.toLowerCase();}
,getText:function(r){if(!r||!r.nodeType){return null;}
;switch(r.nodeType){case 1:var i,a=[],s=r.childNodes,length=s.length;for(i=0;i<length;i++ ){a[i]=this.getText(s[i]);}
;return a.join(c);case 2:case 3:case 4:return r.nodeValue;};return null;}
,isBlockNode:function(t){if(!qx.dom.Node.isElement(t)){return false;}
;t=qx.dom.Node.getName(t);return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(t);}
}});}
)();
(function(){var a="qx.core.IDisposable";qx.Interface.define(a,{members:{dispose:function(){}
}});}
)();
(function(){var a="function",b='loadeddata',c="pointerover",d='pause',f="transitionend",g="gecko",h="browser.name",j='timeupdate',k="qx.debug",m="event.passive",n='canplay',o="HTMLEvents",p='loadedmetadata',q="css.transition",r="mobile safari",s="return;",t="browser.documentmode",u="safari",v='play',w='ended',x="",y="qx.bom.Event",z='playing',A="mouseover",B="No method available to remove native listener from ",C="No method available to add native listener to ",D="end-event",E="mshtml",F="engine.name",G='progress',H="webkit",I='volumechange',J='seeked',K="on",L="undefined";qx.Bootstrap.define(y,{statics:{addNativeListener:function(Q,P,N,O,M){if(Q.addEventListener){if(M===undefined||!qx.core.Environment.get(m)){Q.addEventListener(P,N,!!O);}
else {Q.addEventListener(P,N,{capture:!!O,passive:!!M});}
;}
else if(Q.attachEvent){Q.attachEvent(K+P,N);}
else if(typeof Q[K+P]!=L){Q[K+P]=N;}
else {if(qx.core.Environment.get(k)){qx.log.Logger.warn(C+Q);}
;}
;}
,removeNativeListener:function(U,T,R,S){if(U.removeEventListener){U.removeEventListener(T,R,!!S);}
else if(U.detachEvent){try{U.detachEvent(K+T,R);}
catch(e){if(e.number!==-2146828218){throw e;}
;}
;}
else if(typeof U[K+T]!=L){U[K+T]=null;}
else {if(qx.core.Environment.get(k)){qx.log.Logger.warn(B+U);}
;}
;}
,getTarget:function(e){return e.target||e.srcElement;}
,getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(F)==g)){try{e.relatedTarget&&e.relatedTarget.nodeType;}
catch(V){return null;}
;}
;return e.relatedTarget;}
else if(e.fromElement!==undefined&&(e.type===A||e.type===c)){return e.fromElement;}
else if(e.toElement!==undefined){return e.toElement;}
else {return null;}
;}
,preventDefault:function(e){if(e.preventDefault){e.preventDefault();}
else {try{e.keyCode=0;}
catch(W){}
;e.returnValue=false;}
;}
,stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();}
else {e.cancelBubble=true;}
;}
,fire:function(ba,X){if(document.createEvent){var Y=document.createEvent(o);Y.initEvent(X,true,true);return !ba.dispatchEvent(Y);}
else {var Y=document.createEventObject();return ba.fireEvent(K+X,Y);}
;}
,supportsEvent:function(bb,bj){var bf=qx.core.Environment.get(h);var bg=qx.core.Environment.get(F);if(bj.toLowerCase().indexOf(f)!=-1&&bg===E&&qx.core.Environment.get(t)>9){return true;}
;var bh=[r,u];if(bg===H&&bh.indexOf(bf)>-1){var bc=[b,G,j,J,n,v,z,d,p,w,I];if(bc.indexOf(bj.toLowerCase())>-1){return true;}
;}
;if(bb!=window&&bj.toLowerCase().indexOf(f)!=-1){var bi=qx.core.Environment.get(q);return (bi&&bi[D]==bj);}
;var bd=K+bj.toLowerCase();var be=(bd in bb);if(!be){be=typeof bb[bd]==a;if(!be&&bb.setAttribute){bb.setAttribute(bd,s);be=typeof bb[bd]==a;bb.removeAttribute(bd);}
;}
;return be;}
,getEventName:function(bk,bn){var bl=[x].concat(qx.bom.Style.VENDOR_PREFIXES);for(var i=0,l=bl.length;i<l;i++ ){var bm=bl[i].toLowerCase();if(qx.bom.Event.supportsEvent(bk,bm+bn)){return bm?bm+qx.lang.String.firstUp(bn):bn;}
;}
;return null;}
}});}
)();
(function(){var a="-",b="]",c='\\u',d="undefined",e="",f='\\$1',g="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h="\\\\",i='-',j="g",k="\\\"",l="qx.lang.String",m="(^|[^",n="0",o='"',p=' ',q='\n',r="])[",s="object";qx.Bootstrap.define(l,{statics:{__cr:g,__cs:null,__ct:{},camelCase:function(u){var t=this.__ct[u];if(!t){t=u.replace(/\-([a-z])/g,function(w,v){return v.toUpperCase();}
);if(u.indexOf(a)>=0){this.__ct[u]=t;}
;}
;return t;}
,hyphenate:function(y){var x=this.__ct[y];if(!x){x=y.replace(/[A-Z]/g,function(z){return (i+z.charAt(0).toLowerCase());}
);if(y.indexOf(a)==-1){this.__ct[y]=x;}
;}
;return x;}
,capitalize:function(B){if(this.__cs===null){var A=c;this.__cs=new RegExp(m+this.__cr.replace(/[0-9A-F]{4}/g,function(C){return A+C;}
)+r+this.__cr.replace(/[0-9A-F]{4}/g,function(D){return A+D;}
)+b,j);}
;return B.replace(this.__cs,function(E){return E.toUpperCase();}
);}
,clean:function(F){return F.replace(/\s+/g,p).trim();}
,trimLeft:function(G){return G.replace(/^\s+/,e);}
,trimRight:function(H){return H.replace(/\s+$/,e);}
,startsWith:function(J,I){return J.startsWith(I);}
,endsWith:function(L,K){return L.endsWith(K);}
,repeat:function(M,N){return M.length>0?new Array(N+1).join(M):e;}
,pad:function(P,length,O){var Q=length-P.length;if(Q>0){if(typeof O===d){O=n;}
;return this.repeat(O,Q)+P;}
else {return P;}
;}
,firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(S,R){return S.indexOf(R)!=-1;}
,format:function(T,V){var W=T;var X=/%(\d+)|%{(\S*)}/g;if(!Array.isArray(V)){V=[V];}
;var U=(V.length===1&&typeof V[0]===s);W=W.replace(X,function(ba,Y,bb){if(bb){if(U){return V[0][bb];}
;return bb;}
;if(Y&&Y>0&&V.length>=Y){var bc=Y-1;return V[bc];}
;return ba;}
);return W;}
,escapeRegexpChars:function(bd){return bd.replace(/([.*+?^${}()|[\]\/\\])/g,f);}
,toArray:function(be){return be.split(/\B|\b/g);}
,stripTags:function(bf){return bf.replace(/<\/?[^>]+>/gi,e);}
,stripScripts:function(bi,bh){var bj=e;var bg=bi.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){bj+=arguments[1]+q;return e;}
);if(bh===true){qx.lang.Function.globalEval(bj);}
;return bg;}
,quote:function(bk){return o+bk.replace(/\\/g,h).replace(/\"/g,k)+o;}
}});}
)();
(function(){var a="-",b="qx.bom.Style",c="",d='-',e="Webkit",f="ms",g=":",h=";",j="Moz",k="O",m="string",n="Khtml";qx.Bootstrap.define(b,{statics:{VENDOR_PREFIXES:[e,j,k,f,n],__cu:{},__cv:null,getPropertyName:function(q){var o=document.documentElement.style;if(o[q]!==undefined){return q;}
;for(var i=0,l=this.VENDOR_PREFIXES.length;i<l;i++ ){var p=this.VENDOR_PREFIXES[i]+qx.lang.String.firstUp(q);if(o[p]!==undefined){return p;}
;}
;return null;}
,getCssName:function(r){var s=this.__cu[r];if(!s){s=r.replace(/[A-Z]/g,function(t){return (d+t.charAt(0).toLowerCase());}
);if((/^ms/.test(s))){s=a+s;}
;this.__cu[r]=s;}
;return s;}
,getAppliedStyle:function(A,x,z,v){var C=qx.bom.Style.getCssName(x);var w=qx.dom.Node.getWindow(A);var u=(v!==false)?[null].concat(this.VENDOR_PREFIXES):[null];for(var i=0,l=u.length;i<l;i++ ){var y=false;var B=u[i]?a+u[i].toLowerCase()+a+z:z;if(qx.bom.Style.__cv){y=qx.bom.Style.__cv.call(w,C,B);}
else {A.style.cssText+=C+g+B+h;y=(typeof A.style[x]==m&&A.style[x]!==c);}
;if(y){return B;}
;}
;return null;}
},defer:function(D){if(window.CSS&&window.CSS.supports){qx.bom.Style.__cv=window.CSS.supports.bind(window.CSS);}
else if(window.supportsCSS){qx.bom.Style.__cv=window.supportsCSS.bind(window);}
;}
});}
)();
(function(){var a="foo",b="function",c="event.mouseevent",d="UIEvents",f="qx.bom.client.Event",g="test",h="event.dispatchevent",j="event.auxclick",k="event.mousecreateevent",l="mousewheel",m="event.passive",n="event.touch",o="onhelp",p="event.help",q="event.hashchange",r="PointerEvent",s="pointerEnabled",t="event.customevent",u="onauxclick",v="click",w="documentMode",x="ontouchstart",y="mshtml",z="MouseEvents",A="onhashchange",B="event.mousewheel",C="wheel",D="DOMMouseScroll",E="msPointerEnabled",F="event.mspointer";qx.Bootstrap.define(f,{statics:{getTouch:function(){return (x in window);}
,getMsPointer:function(){if(r in window){return true;}
;if(s in window.navigator){return window.navigator.pointerEnabled;}
else if(E in window.navigator){return window.navigator.msPointerEnabled;}
;return false;}
,getHelp:function(){return (o in document);}
,getHashChange:function(){var G=qx.bom.client.Engine.getName();var H=A in window;return (G!==y&&H)||(G===y&&w in document&&document.documentMode>=8&&H);}
,getDispatchEvent:function(){return typeof document.dispatchEvent==b;}
,getCustomEvent:function(){if(!window.CustomEvent){return false;}
;try{new window.CustomEvent(a);return true;}
catch(I){return false;}
;}
,getMouseEvent:function(){if(!window.MouseEvent){return false;}
;try{new window.MouseEvent(a);return true;}
catch(J){return false;}
;}
,getMouseCreateEvent:function(){try{var e=document.createEvent(z);var K=e.pageX;e.initMouseEvent(v,false,false,window,0,0,0,K+1,0,false,false,false,false,0,null);if(e.pageX!==K){return z;}
;return d;}
catch(L){return d;}
;}
,getMouseWheel:function(M){if(!M){M=window;}
;var P=[M,M.document,M.document.body];var O=M;var N=D;for(var i=0;i<P.length;i++ ){if(qx.bom.Event.supportsEvent(P[i],C)){N=C;O=P[i];break;}
;if(qx.bom.Event.supportsEvent(P[i],l)){N=l;O=P[i];break;}
;}
;return {type:N,target:O};}
,getAuxclickEvent:function(){var Q=false;try{Q=(u in document.documentElement);}
catch(R){}
;return (Q?true:false);}
,getPassive:function(){var S=false;try{var T=Object.defineProperties({},{passive:{get:function(){S=true;}
}});window.addEventListener(g,T,T);window.removeEventListener(g,T,T);}
catch(U){S=false;}
;return S;}
},defer:function(V){qx.core.Environment.add(n,V.getTouch);qx.core.Environment.add(c,V.getMouseEvent);qx.core.Environment.add(k,V.getMouseCreateEvent);qx.core.Environment.add(h,V.getDispatchEvent);qx.core.Environment.add(t,V.getCustomEvent);qx.core.Environment.add(F,V.getMsPointer);qx.core.Environment.add(p,V.getHelp);qx.core.Environment.add(q,V.getHashChange);qx.core.Environment.add(B,V.getMouseWheel);qx.core.Environment.add(j,V.getAuxclickEvent);qx.core.Environment.add(m,V.getPassive);}
});}
)();
(function(){var a="[object Opera]",b="function",c="[^\\.0-9]",d="4.0",e="gecko",f="1.9.0.0",g="Version/",h="9.0",i="8.0",j="engine.version",k="Gecko",l="AppleWebKit/",m="Trident",n="Unsupported client: ",o="",p="opera",q="Windows Phone",r="! Assumed gecko version 1.9.0.0 (Firefox 3.0).",s="mshtml",t="engine.name",u="webkit",v="5.0",w=".",x="qx.bom.client.Engine";qx.Bootstrap.define(x,{statics:{getVersion:function(){var A=window.navigator.userAgent;var B=o;if(qx.bom.client.Engine.__cz()){var z=/Trident\/([^\);]+)(\)|;)/.test(A);if(/MSIE\s+([^\);]+)(\)|;)/.test(A)){B=RegExp.$1;if(B<8&&z){if(RegExp.$1==d){B=i;}
else if(RegExp.$1==v){B=h;}
;}
;}
else if(z){var D=/\brv\:(\d+?\.\d+?)\b/.exec(A);if(D){B=D[1];}
;}
;}
else if(qx.bom.client.Engine.__cw()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(A)){if(A.indexOf(g)!=-1){var D=A.match(/Version\/(\d+)\.(\d+)/);B=D[1]+w+D[2].charAt(0)+w+D[2].substring(1,D[2].length);}
else {B=RegExp.$1+w+RegExp.$2;if(RegExp.$3!=o){B+=w+RegExp.$3;}
;}
;}
;}
else if(qx.bom.client.Engine.__cx()){if(/AppleWebKit\/([^ ]+)/.test(A)){B=RegExp.$1;var C=RegExp(c).exec(B);if(C){B=B.slice(0,C.index);}
;}
;}
else if(qx.bom.client.Engine.__cy()){if(/rv\:([^\);]+)(\)|;)/.test(A)){B=RegExp.$1;}
;}
else {var y=window.qxFail;if(y&&typeof y===b){B=y().FULLVERSION;}
else {B=f;qx.Bootstrap.warn(n+A+r);}
;}
;return B;}
,getName:function(){var name;if(qx.bom.client.Engine.__cz()){name=s;}
else if(qx.bom.client.Engine.__cw()){name=p;}
else if(qx.bom.client.Engine.__cx()){name=u;}
else if(qx.bom.client.Engine.__cy()){name=e;}
else {var E=window.qxFail;if(E&&typeof E===b){name=E().NAME;}
else {name=e;qx.Bootstrap.warn(n+window.navigator.userAgent+r);}
;}
;return name;}
,__cw:function(){return window.opera&&Object.prototype.toString.call(window.opera)==a;}
,__cx:function(){return window.navigator.userAgent.indexOf(l)!=-1;}
,__cy:function(){return (window.navigator.mozApps||window.navigator.buildID)&&window.navigator.product===k&&window.navigator.userAgent.indexOf(m)==-1;}
,__cz:function(){if(window.navigator.cpuClass&&(/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent)||/Trident\/\d+?\.\d+?/.test(window.navigator.userAgent))){return true;}
;if(qx.bom.client.Engine.__cA()){return true;}
;return false;}
,__cA:function(){return window.navigator.userAgent.indexOf(q)>-1;}
},defer:function(F){qx.core.Environment.add(j,F.getVersion);qx.core.Environment.add(t,F.getName);}
});}
)();
(function(){var a="rim_tabletos",b="10.1",c="Darwin",d="10.3",e="Windows Phone",f="os.version",g="10.7",h="2003",i=")",j="iPhone",k="android",l="unix",m="ce",n="7",o="10.11",p="SymbianOS",q="10.5",r="os.name",s="10.12",t="10.9",u="|",v="MacPPC",w="95",x="iPod",y="10.8",z="\.",A="Win64",B="linux",C="me",D="10.2",E="Macintosh",F="Android",G="Windows",H="98",I="ios",J="10",K="vista",L="8",M="blackberry",N="2000",O="8.1",P="(",Q="",R="win",S="Linux",T="10.6",U="BSD",V="10.0",W="10.4",X="Mac OS X",Y="iPad",bv="X11",bw="xp",bx="10.13",br="symbian",bs="qx.bom.client.OperatingSystem",bt="g",bu="Win32",bB="10.10",bC="osx",bD="webOS",bF="RIM Tablet OS",by="BlackBerry",bz="nt4",bA=".",bq="MacIntel",bE="webos";qx.Bootstrap.define(bs,{statics:{getName:function(){if(!navigator){return Q;}
;var bG=navigator.platform||Q;var bH=navigator.userAgent||Q;if(bG.indexOf(G)!=-1||bG.indexOf(bu)!=-1||bG.indexOf(A)!=-1||bH.indexOf(e)!=-1){return R;}
else if(bG.indexOf(E)!=-1||bG.indexOf(v)!=-1||bG.indexOf(bq)!=-1||bG.indexOf(X)!=-1){return bC;}
else if(bH.indexOf(bF)!=-1){return a;}
else if(bH.indexOf(bD)!=-1){return bE;}
else if(bG.indexOf(x)!=-1||bG.indexOf(j)!=-1||bG.indexOf(Y)!=-1){return I;}
else if(bH.indexOf(F)!=-1){return k;}
else if(bG.indexOf(S)!=-1){return B;}
else if(bG.indexOf(bv)!=-1||bG.indexOf(U)!=-1||bG.indexOf(c)!=-1){return l;}
else if(bG.indexOf(p)!=-1){return br;}
else if(bG.indexOf(by)!=-1){return M;}
;return Q;}
,__cB:{"Windows NT 10.0":J,"Windows NT 6.3":O,"Windows NT 6.2":L,"Windows NT 6.1":n,"Windows NT 6.0":K,"Windows NT 5.2":h,"Windows NT 5.1":bw,"Windows NT 5.0":N,"Windows 2000":N,"Windows NT 4.0":bz,"Win 9x 4.90":C,"Windows CE":m,"Windows 98":H,"Win98":H,"Windows 95":w,"Win95":w,"Mac OS X 10_13":bx,"Mac OS X 10.13":bx,"Mac OS X 10_12":s,"Mac OS X 10.12":s,"Mac OS X 10_11":o,"Mac OS X 10.11":o,"Mac OS X 10_10":bB,"Mac OS X 10.10":bB,"Mac OS X 10_9":t,"Mac OS X 10.9":t,"Mac OS X 10_8":y,"Mac OS X 10.8":y,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":T,"Mac OS X 10.6":T,"Mac OS X 10_5":q,"Mac OS X 10.5":q,"Mac OS X 10_4":W,"Mac OS X 10.4":W,"Mac OS X 10_3":d,"Mac OS X 10.3":d,"Mac OS X 10_2":D,"Mac OS X 10.2":D,"Mac OS X 10_1":b,"Mac OS X 10.1":b,"Mac OS X 10_0":V,"Mac OS X 10.0":V},getVersion:function(){var bI=qx.bom.client.OperatingSystem.__cC(navigator.userAgent);if(bI==null){bI=qx.bom.client.OperatingSystem.__cD(navigator.userAgent);}
;if(bI!=null){return bI;}
else {return Q;}
;}
,__cC:function(bJ){var bM=[];for(var bL in qx.bom.client.OperatingSystem.__cB){bM.push(bL);}
;var bN=new RegExp(P+bM.join(u).replace(/\./g,z)+i,bt);var bK=bN.exec(bJ);if(bK&&bK[1]){return qx.bom.client.OperatingSystem.__cB[bK[1]];}
;return null;}
,__cD:function(bT){var bO=bT.indexOf(e)!=-1;var bU=bT.indexOf(F)!=-1;var bP=bT.match(/(iPad|iPhone|iPod)/i)?true:false;if(bO){var bW=new RegExp(/Windows Phone (\d+(?:\.\d+)+)/i);var bR=bW.exec(bT);if(bR&&bR[1]){return bR[1];}
;}
else if(bU){var bS=new RegExp(/ Android (\d+(?:\.\d+)+)/i);var bV=bS.exec(bT);if(bV&&bV[1]){return bV[1];}
;}
else if(bP){var bX=new RegExp(/(CPU|iPhone|iPod) OS (\d+)_(\d+)(?:_(\d+))*\s+/);var bQ=bX.exec(bT);if(bQ&&bQ[2]&&bQ[3]){if(bQ[4]){return bQ[2]+bA+bQ[3]+bA+bQ[4];}
else {return bQ[2]+bA+bQ[3];}
;}
;}
;return null;}
},defer:function(bY){qx.core.Environment.add(r,bY.getName);qx.core.Environment.add(f,bY.getVersion);}
});}
)();
(function(){var a="CSS1Compat",b="IEMobile",c=" OPR/",d="msie",e="android",f="operamini",g="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|iPad|iPhone|OmniWeb|Maxthon|Pre|PhantomJS|Mobile Safari|Safari",h="browser.quirksmode",i="browser.name",j="trident",k="mobile chrome",l=")(/| )([0-9]+\.[0-9])",m="iemobile",n="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",o="IEMobile|Maxthon|MSIE|Trident",p="opera mobi",q="Mobile Safari",r="operamobile",s="ie",t="mobile safari",u="qx.bom.client.Browser",v="",w="opera mini",x="(",y="browser.version",z="opera",A="ce",B=")(/|)?([0-9]+\.[0-9])?",C="mshtml",D="Opera Mini|Opera Mobi|Opera",E="edge",F="webkit",G="browser.documentmode",H="5.0",I="Mobile/";qx.Bootstrap.define(u,{statics:{getName:function(){var L=navigator.userAgent;var M=new RegExp(x+qx.bom.client.Browser.__cE+B);var K=L.match(M);if(!K){return v;}
;var name=K[1].toLowerCase();var J=qx.bom.client.Engine.getName();if(J===F){if(L.match(/Edge\/\d+\.\d+/)){name=E;}
else if(name===e){name=k;}
else if(L.indexOf(q)!==-1||L.indexOf(I)!==-1){name=t;}
else if(L.indexOf(c)!=-1){name=z;}
;}
else if(J===C){if(name===d||name===j){name=s;if(qx.bom.client.OperatingSystem.getVersion()===A){name=m;}
;var M=new RegExp(b);if(L.match(M)){name=m;}
;}
;}
else if(J===z){if(name===p){name=r;}
else if(name===w){name=f;}
;}
;return name;}
,getVersion:function(){var P=navigator.userAgent;var Q=new RegExp(x+qx.bom.client.Browser.__cE+l);var N=P.match(Q);if(!N){return v;}
;var name=N[1].toLowerCase();var O=N[3];if(P.match(/Version(\/| )([0-9]+\.[0-9])/)){O=RegExp.$2;}
;if(qx.bom.client.Engine.getName()==C){O=qx.bom.client.Engine.getVersion();if(name===d&&qx.bom.client.OperatingSystem.getVersion()==A){O=H;}
;}
;if(qx.bom.client.Engine.getName()==F||qx.bom.client.Browser.getName()==z){if(P.match(/OPR(\/| )([0-9]+\.[0-9])/)){O=RegExp.$2;}
;if(P.match(/Edge\/([\d+\.*]+)/)){O=RegExp.$1;}
;}
;return O;}
,getDocumentMode:function(){if(document.documentMode){return document.documentMode;}
;return 0;}
,getQuirksMode:function(){if(qx.bom.client.Engine.getName()==C&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;}
else {return document.compatMode!==a;}
;}
,__cE:{"webkit":g,"gecko":n,"mshtml":o,"opera":D}[qx.bom.client.Engine.getName()]},defer:function(R){qx.core.Environment.add(i,R.getName);qx.core.Environment.add(y,R.getVersion);qx.core.Environment.add(G,R.getDocumentMode);qx.core.Environment.add(h,R.getQuirksMode);}
});}
)();
(function(){var a="qx.bom.client.CssTransition",b="E",c="transitionEnd",d="e",e="nd",f="transition",g="css.transition",h="Trans";qx.Bootstrap.define(a,{statics:{getTransitionName:function(){return qx.bom.Style.getPropertyName(f);}
,getSupport:function(){var name=qx.bom.client.CssTransition.getTransitionName();if(!name){return null;}
;var i=qx.bom.Event.getEventName(window,c);i=i==c?i.toLowerCase():i;if(!i){i=name+(name.indexOf(h)>0?b:d)+e;}
;return {name:name,"end-event":i};}
},defer:function(j){qx.core.Environment.add(g,j.getSupport);}
});}
)();
(function(){var a="Failed to remove event listener for id '",b="': ",c="__cJ",d="Invalid context for callback.",e="Invalid capture flag.",f="Failed to add event listener for type '",g="Error in GlobalEventMonitor: ",h="Unexpected change by GlobalEventMonitor, modifications to events: ",j="UNKNOWN_",k="'",m="|bubble",n="Invalid event type.",o="__cK",p="There is no event handler for the event '",q=" from the target '",r="qx.debug",s="capture",t="|capture",u="Invalid callback function",v="qx.event.Manager",w="' on target '",x="'!",y="Could not dispatch event '",z="",A="_",B="DOM_",C="Invalid event target.",D="No dispatcher can handle event of type ",E="QX_",F=" to the target '",G="Failed to remove event listener for type '",H=" on ",I="Invalid id type.",J="c",K="|",L="qx.globalErrorHandling",M="unload",N="DOCUMENT_",O="Invalid object: ",P="Invalid Target.",Q="WIN_",R="Invalid event object.";qx.Class.define(v,{extend:Object,implement:[qx.core.IDisposable],construct:function(S,U){this.__cF=S;this.__cG=qx.core.ObjectRegistry.toHashCode(S);this.__cH=U;if(S.qx!==qx){var self=this;var T=function(){qx.bom.Event.removeNativeListener(S,M,T);self.dispose();}
;if(qx.core.Environment.get(L)){qx.bom.Event.addNativeListener(S,M,qx.event.GlobalError.observeMethod(T));}
else {qx.bom.Event.addNativeListener(S,M,T);}
;}
;this.__cI={};this.__cJ={};this.__cK={};this.__cL={};this.__cM=new qx.util.DeferredCall(function(){this.__cN=null;}
,this);this.__cM.$$blackListCleaner=true;}
,statics:{__cO:0,getNextUniqueId:function(){return (this.__cO++ )+z;}
,__cP:null,getGlobalEventMonitor:function(){return this.__cP;}
,setGlobalEventMonitor:function(V){this.__cP=V;}
},members:{__cH:null,__cI:null,__cK:null,__cQ:null,__cJ:null,__cL:null,__cF:null,__cG:null,__cN:null,__cM:null,getWindow:function(){return this.__cF;}
,getWindowId:function(){return this.__cG;}
,getHandler:function(X){var W=this.__cJ[X.classname];if(W){return W;}
;return this.__cJ[X.classname]=new X(this);}
,getDispatcher:function(ba){var Y=this.__cK[ba.classname];if(Y){return Y;}
;return this.__cK[ba.classname]=new ba(this,this.__cH);}
,getListeners:function(bc,bg,bb){var be=bc.$$hash||qx.core.ObjectRegistry.toHashCode(bc);var bh=this.__cI[be];if(!bh){return null;}
;var bf=bg+(bb?t:m);var bd=bh[bf];return bd?bd.concat():null;}
,getAllListeners:function(){return this.__cI;}
,serializeListeners:function(bj){var bn=bj.$$hash||qx.core.ObjectRegistry.toHashCode(bj);var br=this.__cI[bn];var bm=[];if(br){var bk,bq,bi,bl,bo;for(var bp in br){bk=bp.indexOf(K);bq=bp.substring(0,bk);bi=bp.charAt(bk+1)==J;bl=br[bp];for(var i=0,l=bl.length;i<l;i++ ){bo=bl[i];bm.push({self:bo.context,handler:bo.handler,type:bq,capture:bi});}
;}
;}
;return bm;}
,toggleAttachedEvents:function(bu,bt){var bx=bu.$$hash||qx.core.ObjectRegistry.toHashCode(bu);var bA=this.__cI[bx];if(bA){var bv,bz,bs,bw;for(var by in bA){bv=by.indexOf(K);bz=by.substring(0,bv);bs=by.charCodeAt(bv+1)===99;bw=bA[by];if(bt){this.__cR(bu,bz,bs);}
else {this.__cS(bu,bz,bs);}
;}
;}
;}
,hasListener:function(bC,bG,bB){if(qx.core.Environment.get(r)){if(bC==null){qx.log.Logger.trace(this);throw new Error(O+bC);}
;}
;var bE=bC.$$hash||qx.core.ObjectRegistry.toHashCode(bC);var bH=this.__cI[bE];if(!bH){return false;}
;var bF=bG+(bB?t:m);var bD=bH[bF];return !!(bD&&bD.length>0);}
,importListeners:function(bI,bK){if(qx.core.Environment.get(r)){if(bI==null){qx.log.Logger.trace(this);throw new Error(O+bI);}
;}
;var bP=bI.$$hash||qx.core.ObjectRegistry.toHashCode(bI);var bQ=this.__cI[bP]={};var bM=qx.event.Manager;for(var bJ in bK){var bN=bK[bJ];var bO=bN.type+(bN.capture?t:m);var bL=bQ[bO];if(!bL){bL=bQ[bO]=[];this.__cR(bI,bN.type,bN.capture);}
;bL.push({handler:bN.listener,context:bN.self,unique:bN.unique||(bM.__cO++ )+z});}
;}
,addListener:function(bT,cc,bV,self,bR){if(qx.core.Environment.get(r)){var bX=f+cc+k+F+bT.classname+b;qx.core.Assert.assertObject(bT,bX+P);qx.core.Assert.assertString(cc,bX+n);qx.core.Assert.assertFunctionOrAsyncFunction(bV,bX+u);if(bR!==undefined){qx.core.Assert.assertBoolean(bR,e);}
;}
;var bS=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);var cd=this.__cI[bS];if(!cd){cd=this.__cI[bS]={};}
;var bW=cc+(bR?t:m);var bU=cd[bW];if(!bU){bU=cd[bW]=[];}
;if(bU.length===0){this.__cR(bT,cc,bR);}
;var ca=(qx.event.Manager.__cO++ )+z;var bY={handler:bV,context:self,unique:ca};bU.push(bY);return bW+K+ca;}
,findHandler:function(ci,cr){var cp=false,ch=false,cs=false,ce=false;var co;if(ci.nodeType===1){cp=true;co=B+ci.tagName.toLowerCase()+A+cr;}
else if(ci.nodeType===9){ce=true;co=N+cr;}
else if(ci==this.__cF){ch=true;co=Q+cr;}
else if(ci.classname){cs=true;co=E+ci.classname+A+cr;}
else {co=j+ci+A+cr;}
;var cg=this.__cL;if(cg[co]){return cg[co];}
;var cn=this.__cH.getHandlers();var cj=qx.event.IEventHandler;var cl,cm,ck,cf;for(var i=0,l=cn.length;i<l;i++ ){cl=cn[i];ck=cl.SUPPORTED_TYPES;if(ck&&!ck[cr]){continue;}
;cf=cl.TARGET_CHECK;if(cf){var cq=false;if(cp&&((cf&cj.TARGET_DOMNODE)!=0)){cq=true;}
else if(ch&&((cf&cj.TARGET_WINDOW)!=0)){cq=true;}
else if(cs&&((cf&cj.TARGET_OBJECT)!=0)){cq=true;}
else if(ce&&((cf&cj.TARGET_DOCUMENT)!=0)){cq=true;}
;if(!cq){continue;}
;}
;cm=this.getHandler(cn[i]);if(cl.IGNORE_CAN_HANDLE||cm.canHandleEvent(ci,cr)){cg[co]=cm;return cm;}
;}
;return null;}
,__cR:function(cw,cv,ct){var cu=this.findHandler(cw,cv);if(cu){cu.registerEvent(cw,cv,ct);return;}
;if(qx.core.Environment.get(r)){qx.log.Logger.warn(this,p+cv+w+cw+x);}
;}
,removeListener:function(cz,cF,cB,self,cx){if(qx.core.Environment.get(r)){var cD=G+cF+k+q+cz.classname+b;qx.core.Assert.assertObject(cz,cD+P);qx.core.Assert.assertString(cF,cD+n);qx.core.Assert.assertFunction(cB,cD+u);if(self!==undefined){qx.core.Assert.assertObject(self,d);}
;if(cx!==undefined){qx.core.Assert.assertBoolean(cx,e);}
;}
;var cy=cz.$$hash||qx.core.ObjectRegistry.toHashCode(cz);var cG=this.__cI[cy];if(!cG){return false;}
;var cC=cF+(cx?t:m);var cA=cG[cC];if(!cA){return false;}
;var cE;for(var i=0,l=cA.length;i<l;i++ ){cE=cA[i];if(cE.handler===cB&&cE.context===self){qx.lang.Array.removeAt(cA,i);this.__cT(cE.unique);if(cA.length==0){this.__cS(cz,cF,cx);}
;return true;}
;}
;return false;}
,removeListenerById:function(cJ,cR){if(qx.core.Environment.get(r)){var cN=a+cR+k+q+cJ.classname+b;qx.core.Assert.assertObject(cJ,cN+P);qx.core.Assert.assertString(cR,cN+I);}
;var cL=cR.split(K);var cQ=cL[0];var cH=cL[1].charCodeAt(0)==99;var cP=cL[2];var cI=cJ.$$hash||qx.core.ObjectRegistry.toHashCode(cJ);var cS=this.__cI[cI];if(!cS){return false;}
;var cM=cQ+(cH?t:m);var cK=cS[cM];if(!cK){return false;}
;var cO;for(var i=0,l=cK.length;i<l;i++ ){cO=cK[i];if(cO.unique===cP){qx.lang.Array.removeAt(cK,i);this.__cT(cO.unique);if(cK.length==0){this.__cS(cJ,cQ,cH);}
;return true;}
;}
;return false;}
,removeAllListeners:function(cU){var cW=cU.$$hash||qx.core.ObjectRegistry.toHashCode(cU);var da=this.__cI[cW];if(!da){return false;}
;var cV,cY,cT;for(var cX in da){if(da[cX].length>0){cV=cX.split(K);da[cX].forEach(function(db){this.__cT(db.unique);}
,this);cY=cV[0];cT=cV[1]===s;this.__cS(cU,cY,cT);}
;}
;delete this.__cI[cW];return true;}
,deleteAllListeners:function(dc){delete this.__cI[dc];}
,__cS:function(dg,df,dd){var de=this.findHandler(dg,df);if(de){de.unregisterEvent(dg,df,dd);return;}
;if(qx.core.Environment.get(r)){qx.log.Logger.warn(this,p+df+w+dg+x);}
;}
,dispatchEvent:function(di,event){if(qx.core.Environment.get(r)){var dn=y+event+w+di.classname+b;qx.core.Assert.assertNotUndefined(di,dn+C);qx.core.Assert.assertNotNull(di,dn+C);qx.core.Assert.assertInstance(event,qx.event.type.Event,dn+R);}
;if(qx.event.Manager.__cP){try{var dh=event.getDefaultPrevented();qx.event.Manager.__cP(di,event);if(dh!=event.getDefaultPrevented()){qx.log.Logger.error(h);}
;}
catch(dq){qx.log.Logger.error(g+dq);}
;}
;var dp=event.getType();if(!event.getBubbles()&&!this.hasListener(di,dp)){qx.event.Pool.getInstance().poolObject(event);return true;}
;if(!event.getTarget()){event.setTarget(di);}
;var dl=this.__cH.getDispatchers();var dk;var dj=false;var dm={};for(var i=0,l=dl.length;i<l;i++ ){dk=this.getDispatcher(dl[i]);if(dk.canDispatchEvent(di,event,dp)){qx.event.Utils.track(dm,dk.dispatchEvent(di,event,dp));dj=true;break;}
;}
;if(!dj){if(qx.core.Environment.get(r)){qx.log.Logger.error(this,D+dp+H+di);}
;return true;}
;return qx.event.Utils.then(dm,function(){var dr=event.getDefaultPrevented();qx.event.Pool.getInstance().poolObject(event);return !dr;}
);}
,dispose:function(){this.__cH.removeManager(this);qx.util.DisposeUtil.disposeMap(this,c);qx.util.DisposeUtil.disposeMap(this,o);this.__cI=this.__cF=this.__cQ=null;this.__cH=this.__cL=null;}
,__cT:function(ds){if(this.__cN===null){this.__cN={};this.__cM.schedule();}
;this.__cN[ds]=true;}
,isBlacklisted:function(dt){return (this.__cN!==null&&this.__cN[dt]===true);}
}});}
)();
(function(){var c="-",d="qx.debug.dispose",e="",f="qx.core.ObjectRegistry",g="qx.debug",h="$$hash",j="Object with hash code ",k="-0",m="Invalid object: ",n="Could not dispose object ",o=" objects",p=": ",q=" does not exist (since Qooxdoo 6.0 fromHashCode requires that you explicitly register objects with qx.core.ObjectRegistry.register)",r="Disposed ";qx.Bootstrap.define(f,{statics:{inShutDown:false,__u:{},__cU:0,__cV:e,__cW:{},register:function(s){var u=this.__u;if(!u){return;}
;var t=qx.core.ObjectRegistry.toHashCode(s);if(qx.core.Environment.get(g)){if(!s.dispose){throw new Error(m+s);}
;}
;u[t]=s;}
,unregister:function(v){var w=v.$$hash;if(w==null){return;}
;var x=this.__u;if(x&&x[w]){delete x[w];}
;this.clearHashCode(v);}
,toHashCode:function(z){if(qx.core.Environment.get(g)){if(z==null){throw new Error(m+z);}
;}
;var y=z.$$hash;if(y!=null){return y;}
;y=this.createHashCode();z.$$hash=y;if(qx.core.Environment.get(d)){if(qx.dev&&qx.dev.Debug&&qx.dev.Debug.disposeProfilingActive){this.__cW[y]=qx.dev.StackTrace.getStackTrace();}
;}
;return z.$$hash;}
,createHashCode:function(){var A=String((this.__cU++ )+this.__cV);return A;}
,clearHashCode:function(C){if(qx.core.Environment.get(g)){if(C==null){throw new Error(m+C);}
;}
;var B=C.$$hash;if(B!=null){try{C.$$discardedHashCode=B;delete C.$$hash;}
catch(D){if(C.removeAttribute){C.removeAttribute(h);}
;}
;}
;}
,fromHashCode:function(E,G){var F=this.__u[E]||null;if(!F&&!G){qx.log.Logger.warn(this,j+E+q);}
;return F;}
,hasHashCode:function(H){return !!this.__u[H];}
,shutdown:function(){this.inShutDown=true;var J=this.__u;var L=[];for(var I in J){L.push(I);}
;L.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);}
);var K,i=0,l=L.length;while(true){try{for(;i<l;i++ ){I=L[i];K=J[I];if(K&&K.dispose){K.dispose();}
;}
;}
catch(M){qx.Bootstrap.error(this,n+K.toString()+p+M,M);if(i!==l){i++ ;continue;}
;}
;break;}
;qx.Bootstrap.debug(this,r+l+o);delete this.__u;}
,getRegistry:function(){return this.__u;}
,getNextHash:function(){return this.__cU;}
,getPostId:function(){return this.__cV;}
,getStackTraces:function(){return this.__cW;}
},defer:function(N){if(window&&window.top){var frames=window.top.frames;for(var i=0;i<frames.length;i++ ){if(frames[i]===window){N.__cV=c+(i+1);return;}
;}
;}
;N.__cV=k;}
});}
)();
(function(){var a="",b="[object JavaPackage]",c="qx.bom.client.Runtime",d="runtime.name",e="node.js",f="rhino",g="undefined",h="titanium",i="object";qx.Bootstrap.define(c,{statics:{getName:function(){var name=a;if(typeof Packages===i&&Object.prototype.toString.call(Packages)===b){name=f;}
else if(typeof process!==g){name=e;}
else if(typeof Titanium!==g&&typeof Titanium.userAgent!==g){name=h;}
else {name=qx.bom.client.Browser.getName();}
;return name;}
},defer:function(j){qx.core.Environment.add(d,j.getName);}
});}
)();
(function(){var a="\x00\b\n\f\r\t",b="-",c="function",d="[null,null,null]",e="T",f="+",g=",\n",h="constructor",i="{\n",j='"+275760-09-13T00:00:00.000Z"',k="true",l="\\n",m="false",n='"-271821-04-20T00:00:00.000Z"',o="json",p='object',q='""',r="qx.lang.Json",s="{}",t="hasOwnProperty",u="[null]",v="prototype",w='hasOwnProperty',x='"',y="toLocaleString",z="0",A='function',B="",C='\\"',D="\t",E="string",F="}",G="\r",H="toJSON",I=":",J="[\n 1,\n 2\n]",K="\\f",L='"1969-12-31T23:59:59.999Z"',M="/",N="\\b",O="Z",P="\\t",Q="\b",R="[object Number]",S="isPrototypeOf",T="{",U="toString",V="0x",W="[1]",X="\\r",Y="]",bJ=",",bK="null",bQ="\\u00",bN="\n",bO="json-stringify",bI="[]",bP="1",bT="@",bV="000000",bU="[object Boolean]",cd="valueOf",bR="\\\\",bL="[object String]",bM="json-parse",bS="bug-string-char-index",bY="[object Array]",cq="$",ca="[\n",cb='"-000001-01-01T00:00:00.000Z"',bW="[",cm="runtime.name",cc="\\",bX="rhino",ce="[object Date]",cf='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',cg="a",ch=" ",cl=".",cn="[object Function]",cp="01",ci='"\t"',cj="propertyIsEnumerable",ck="\f",co="object";qx.Bootstrap.define(r,{statics:{stringify:null,parse:null}});(function(){var cs;var cr;var ct;(function(window){if(qx.core.Environment.get(cm)===bX||qx.core.Environment.get(cm)===undefined)return;var cv={}.toString,cK,cU,cG;var cC=typeof ct===c&&ct.amd,cB=typeof cr===co&&cr;if(cB||cC){if(typeof JSON===co&&JSON){if(cB){cB.stringify=JSON.stringify;cB.parse=JSON.parse;}
else {cB=JSON;}
;}
else if(cC){cB=window.JSON={};}
;}
else {cB=window.JSON||(window.JSON={});}
;var cY=new Date(-3509827334573292);try{cY=cY.getUTCFullYear()==-109252&&cY.getUTCMonth()===0&&cY.getUTCDate()===1&&cY.getUTCHours()==10&&cY.getUTCMinutes()==37&&cY.getUTCSeconds()==6&&cY.getUTCMilliseconds()==708;}
catch(de){}
;function cN(name){if(name===bS){return cg[0]!=cg;}
;var di,dh=cf,dl=name===o;if(dl||name===bO||name===bM){if(name==bO||dl){var df=cB.stringify,dk=typeof df===c&&cY;if(dk){(di=function(){return 1;}
).toJSON=di;try{dk=df(0)===z&&df(new Number())===z&&df(new String())===q&&df(cv)===cG&&df(cG)===cG&&df()===cG&&df(di)===bP&&df([di])===W&&df([cG])===u&&df(null)===bK&&df([cG,cv,null])===d&&df({"a":[di,true,false,null,a]})==dh&&df(null,di)===bP&&df([1,2],null,1)===J&&df(new Date(-8.64e15))===n&&df(new Date(8.64e15))===j&&df(new Date(-621987552e5))===cb&&df(new Date(-1))===L;}
catch(dm){dk=false;}
;}
;if(!dl){return dk;}
;}
;if(name===bM||dl){var dj=cB.parse;if(typeof dj===c){try{if(dj(z)===0&&!dj(false)){di=dj(dh);var dg=di[cg].length==5&&di[cg][0]===1;if(dg){try{dg=!dj(ci);}
catch(dn){}
;if(dg){try{dg=dj(cp)!==1;}
catch(dp){}
;}
;}
;}
;}
catch(dq){dg=false;}
;}
;if(!dl){return dg;}
;}
;return dk&&dg;}
;}
;if(!cN(o)){var da=cn;var cR=ce;var cz=R;var dd=bL;var cV=bY;var cJ=bU;var cI=cN(bS);if(!cY){var cH=Math.floor;var cQ=[0,31,59,90,120,151,181,212,243,273,304,334];var dc=function(dr,ds){return cQ[ds]+365*(dr-1970)+cH((dr-1969+(ds=+(ds>1)))/4)-cH((dr-1901+ds)/100)+cH((dr-1601+ds)/400);}
;}
;if(!(cK={}.hasOwnProperty)){cK=function(dt){var du={},dv;if((du.__cX=null,du.__cX={"toString":1},du).toString!=cv){cK=function(dw){var dx=this.__cX,dy=dw in (this.__cX=null,this);this.__cX=dx;return dy;}
;}
else {dv=du.constructor;cK=function(dz){var parent=(this.constructor||dv).prototype;return dz in this&&!(dz in parent&&this[dz]===parent[dz]);}
;}
;du=null;return cK.call(this,dt);}
;}
;var cL={'boolean':1,'number':1,'string':1,'undefined':1};var cT=function(dC,dA){var dB=typeof dC[dA];return dB==p?!!dC[dA]:!cL[dB];}
;cU=function(dD,dE){var dJ=0,dI,dG,dH,dF;(dI=function(){this.valueOf=0;}
).prototype.valueOf=0;dG=new dI();for(dH in dG){if(cK.call(dG,dH)){dJ++ ;}
;}
;dI=dG=null;if(!dJ){dG=[cd,U,y,cj,S,t,h];dF=function(dL,dM){var dN=cv.call(dL)==da,dO,length;var dK=!dN&&typeof dL.constructor!=A&&cT(dL,w)?dL.hasOwnProperty:cK;for(dO in dL){if(!(dN&&dO===v)&&dK.call(dL,dO)){dM(dO);}
;}
;for(length=dG.length;dO=dG[ --length];dK.call(dL,dO)&&dM(dO));}
;}
else if(dJ==2){dF=function(dT,dP){var dS={},dQ=cv.call(dT)==da,dR;for(dR in dT){if(!(dQ&&dR===v)&&!cK.call(dS,dR)&&(dS[dR]=1)&&cK.call(dT,dR)){dP(dR);}
;}
;}
;}
else {dF=function(dX,dU){var dV=cv.call(dX)==da,dW,dY;for(dW in dX){if(!(dV&&dW===v)&&cK.call(dX,dW)&&!(dY=dW===h)){dU(dW);}
;}
;if(dY||cK.call(dX,(dW=h))){dU(dW);}
;}
;}
;return dF(dD,dE);}
;if(!cN(bO)){var cX={'92':bR,'34':C,'8':N,'12':K,'10':l,'13':X,'9':P};var cM=bV;var db=function(ea,eb){return (cM+(eb||0)).slice(-ea);}
;var cF=bQ;var cP=function(ed){var ef=x,ec=0,length=ed.length,eg=length>10&&cI,ee;if(eg){ee=ed.split(B);}
;for(;ec<length;ec++ ){var eh=ed.charCodeAt(ec);switch(eh){case 8:case 9:case 10:case 12:case 13:case 34:case 92:ef+=cX[eh];break;default:if(eh<32){ef+=cF+db(2,eh.toString(16));break;}
;ef+=eg?ee[ec]:cI?ed.charAt(ec):ed[ec];};}
;return ef+x;}
;var cw=function(eD,es,eA,ep,eo,eB,ew){var ex=es[eD],ez,em,ej,ev,eC,et,eE,er,eq,ei,ey,en,length,ek,eu,el;try{ex=es[eD];}
catch(eF){}
;if(typeof ex===co&&ex){ez=cv.call(ex);if(ez==cR&&!cK.call(ex,H)){if(ex>-1/0&&ex<1/0){if(dc){ev=cH(ex/864e5);for(em=cH(ev/365.2425)+1970-1;dc(em+1,0)<=ev;em++ );for(ej=cH((ev-dc(em,0))/30.42);dc(em,ej+1)<=ev;ej++ );ev=1+ev-dc(em,ej);eC=(ex%864e5+864e5)%864e5;et=cH(eC/36e5)%24;eE=cH(eC/6e4)%60;er=cH(eC/1e3)%60;eq=eC%1e3;}
else {em=ex.getUTCFullYear();ej=ex.getUTCMonth();ev=ex.getUTCDate();et=ex.getUTCHours();eE=ex.getUTCMinutes();er=ex.getUTCSeconds();eq=ex.getUTCMilliseconds();}
;ex=(em<=0||em>=1e4?(em<0?b:f)+db(6,em<0?-em:em):db(4,em))+b+db(2,ej+1)+b+db(2,ev)+e+db(2,et)+I+db(2,eE)+I+db(2,er)+cl+db(3,eq)+O;}
else {ex=null;}
;}
else if(typeof ex.toJSON===c&&((ez!=cz&&ez!=dd&&ez!=cV)||cK.call(ex,H))){ex=ex.toJSON(eD);}
;}
;if(eA){ex=eA.call(es,eD,ex);}
;if(ex===null){return bK;}
;ez=cv.call(ex);if(ez==cJ){return B+ex;}
else if(ez==cz){return ex>-1/0&&ex<1/0?B+ex:bK;}
else if(ez==dd){return cP(B+ex);}
;if(typeof ex===co){for(length=ew.length;length-- ;){if(ew[length]===ex){throw TypeError();}
;}
;ew.push(ex);ei=[];ek=eB;eB+=eo;if(ez==cV){for(en=0,length=ex.length;en<length;eu||(eu=true),en++ ){ey=cw(en,ex,eA,ep,eo,eB,ew);ei.push(ey===cG?bK:ey);}
;el=eu?(eo?ca+eB+ei.join(g+eB)+bN+ek+Y:(bW+ei.join(bJ)+Y)):bI;}
else {cU(ep||ex,function(eG){var eH=cw(eG,ex,eA,ep,eo,eB,ew);if(eH!==cG){ei.push(cP(eG)+I+(eo?ch:B)+eH);}
;eu||(eu=true);}
);el=eu?(eo?i+eB+ei.join(g+eB)+bN+ek+F:(T+ei.join(bJ)+F)):s;}
;ew.pop();return el;}
;}
;cB.stringify=function(eO,eN,eP){var eJ,eK,eM;if(typeof eN===c||typeof eN===co&&eN){if(cv.call(eN)==da){eK=eN;}
else if(cv.call(eN)==cV){eM={};for(var eI=0,length=eN.length,eL;eI<length;eL=eN[eI++ ],((cv.call(eL)==dd||cv.call(eL)==cz)&&(eM[eL]=1)));}
;}
;if(eP){if(cv.call(eP)==cz){if((eP-=eP%1)>0){for(eJ=B,eP>10&&(eP=10);eJ.length<eP;eJ+=ch);}
;}
else if(cv.call(eP)==dd){eJ=eP.length<=10?eP:eP.slice(0,10);}
;}
;return cw(B,(eL={},eL[B]=eO,eL),eK,eM,eJ,B,[]);}
;}
;if(!cN(bM)){var cE=String.fromCharCode;var cD={'92':cc,'34':x,'47':M,'98':Q,'116':D,'110':bN,'102':ck,'114':G};var cu,cy;var cA=function(){cu=cy=null;throw SyntaxError();}
;var cW=function(){var eS=cy,length=eS.length,eR,eQ,eU,eT,eV;while(cu<length){eV=eS.charCodeAt(cu);switch(eV){case 9:case 10:case 13:case 32:cu++ ;break;case 123:case 125:case 91:case 93:case 58:case 44:eR=cI?eS.charAt(cu):eS[cu];cu++ ;return eR;case 34:for(eR=bT,cu++ ;cu<length;){eV=eS.charCodeAt(cu);if(eV<32){cA();}
else if(eV==92){eV=eS.charCodeAt( ++cu);switch(eV){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:eR+=cD[eV];cu++ ;break;case 117:eQ= ++cu;for(eU=cu+4;cu<eU;cu++ ){eV=eS.charCodeAt(cu);if(!(eV>=48&&eV<=57||eV>=97&&eV<=102||eV>=65&&eV<=70)){cA();}
;}
;eR+=cE(V+eS.slice(eQ,cu));break;default:cA();};}
else {if(eV==34){break;}
;eV=eS.charCodeAt(cu);eQ=cu;while(eV>=32&&eV!=92&&eV!=34){eV=eS.charCodeAt( ++cu);}
;eR+=eS.slice(eQ,cu);}
;}
;if(eS.charCodeAt(cu)==34){cu++ ;return eR;}
;cA();default:eQ=cu;if(eV==45){eT=true;eV=eS.charCodeAt( ++cu);}
;if(eV>=48&&eV<=57){if(eV==48&&((eV=eS.charCodeAt(cu+1)),eV>=48&&eV<=57)){cA();}
;eT=false;for(;cu<length&&((eV=eS.charCodeAt(cu)),eV>=48&&eV<=57);cu++ );if(eS.charCodeAt(cu)==46){eU= ++cu;for(;eU<length&&((eV=eS.charCodeAt(eU)),eV>=48&&eV<=57);eU++ );if(eU==cu){cA();}
;cu=eU;}
;eV=eS.charCodeAt(cu);if(eV==101||eV==69){eV=eS.charCodeAt( ++cu);if(eV==43||eV==45){cu++ ;}
;for(eU=cu;eU<length&&((eV=eS.charCodeAt(eU)),eV>=48&&eV<=57);eU++ );if(eU==cu){cA();}
;cu=eU;}
;return +eS.slice(eQ,cu);}
;if(eT){cA();}
;if(eS.slice(cu,cu+4)===k){cu+=4;return true;}
else if(eS.slice(cu,cu+5)===m){cu+=5;return false;}
else if(eS.slice(cu,cu+4)===bK){cu+=4;return null;}
;cA();};}
;return cq;}
;var cO=function(eY){var eX,eW;if(eY===cq){cA();}
;if(typeof eY===E){if((cI?eY.charAt(0):eY[0])===bT){return eY.slice(1);}
;if(eY===bW){eX=[];for(;;eW||(eW=true)){eY=cW();if(eY===Y){break;}
;if(eW){if(eY===bJ){eY=cW();if(eY===Y){cA();}
;}
else {cA();}
;}
;if(eY===bJ){cA();}
;eX.push(cO(eY));}
;return eX;}
else if(eY===T){eX={};for(;;eW||(eW=true)){eY=cW();if(eY==F){break;}
;if(eW){if(eY===bJ){eY=cW();if(eY===F){cA();}
;}
else {cA();}
;}
;if(eY===bJ||typeof eY!==E||(cI?eY.charAt(0):eY[0])!==bT||cW()!==I){cA();}
;eX[eY.slice(1)]=cO(cW());}
;return eX;}
;cA();}
;return eY;}
;var cS=function(fa,fb,fc){var fd=cx(fa,fb,fc);if(fd===cG){delete fa[fb];}
else {fa[fb]=fd;}
;}
;var cx=function(fe,ff,fh){var fg=fe[ff],length;if(typeof fg===co&&fg){if(cv.call(fg)==cV){for(length=fg.length;length-- ;){cS(fg,length,fh);}
;}
else {cU(fg,function(fi){cS(fg,fi,fh);}
);}
;}
;return fh.call(fe,ff,fg);}
;cB.parse=function(fj,fm){var fk,fl;cu=0;cy=B+fj;fk=cO(cW());if(cW()!=cq){cA();}
;cu=cy=null;return fm&&cv.call(fm)==da?cx((fl={},fl[B]=fk,fl),B,fm):fk;}
;}
;}
;if(cC){ct(function(){return cB;}
);}
;}
(this||window));}
());qx.lang.Json.stringify=window.JSON.stringify;qx.lang.Json.parse=window.JSON.parse;}
)();
(function(){var c="Create event of type ",d="Invalid event dispatcher!",e="': ",f="Invalid event handler.",g="qx.debug",h=" with undefined class. Please use null to explicit fallback to default event type!",i=".fireNonBubblingEventAsync not supported because qx.promise==false",j="' on target '",k="qx.promise",l="Invalid event target.",m="Could not fire event '",n="qx.event.Registration.getManager(null) was called!",o="undefined",p="qx.event.Registration";qx.Class.define(p,{statics:{__cY:{},getManager:function(s){if(s==null){if(qx.core.Environment.get(g)){qx.log.Logger.error(n);qx.log.Logger.trace(this);}
;s=window;}
else if(s.nodeType){s=qx.dom.Node.getWindow(s);}
else if(!qx.dom.Node.isWindow(s)){s=window;}
;var r=s.$$hash||qx.core.ObjectRegistry.toHashCode(s);var q=this.__cY[r];if(!q){q=new qx.event.Manager(s,this);this.__cY[r]=q;}
;return q;}
,removeManager:function(t){var u=t.getWindowId();delete this.__cY[u];}
,addListener:function(y,x,v,self,w){return this.getManager(y).addListener(y,x,v,self,w);}
,removeListener:function(C,B,z,self,A){return this.getManager(C).removeListener(C,B,z,self,A);}
,removeListenerById:function(D,E){return this.getManager(D).removeListenerById(D,E);}
,removeAllListeners:function(F){return this.getManager(F).removeAllListeners(F);}
,deleteAllListeners:function(H){var G=H.$$hash;if(G){this.getManager(H).deleteAllListeners(G);}
;}
,hasListener:function(K,J,I){return this.getManager(K).hasListener(K,J,I);}
,serializeListeners:function(L){return this.getManager(L).serializeListeners(L);}
,createEvent:function(M,P,N){if(qx.core.Environment.get(g)){if(arguments.length>1&&P===undefined){throw new Error(c+M+h);}
;}
;if(P==null){P=qx.event.type.Event;}
;var O=qx.event.Pool.getInstance().getObject(P);N?O.init.apply(O,N):O.init();if(M){O.setType(M);}
;return O;}
,dispatchEvent:function(Q,event){return this.getManager(Q).dispatchEvent(Q,event);}
,__da:function(R,W,U,T){if(qx.core.Environment.get(g)){if(arguments.length>2&&U===undefined&&T!==undefined){throw new Error(c+W+h);}
;var V=m+W+j+(R?R.classname:o)+e;qx.core.Assert.assertNotUndefined(R,V+l);qx.core.Assert.assertNotNull(R,V+l);}
;var S=this.createEvent(W,U||null,T);this.getManager(R).dispatchEvent(R,S);return S;}
,fireEvent:function(X,Y,bb,ba){if(qx.core.Environment.get(g)){if(arguments.length>2&&bb===undefined&&ba!==undefined){throw new Error(c+Y+h);}
;var bd=m+Y+j+(X?X.classname:o)+e;qx.core.Assert.assertNotUndefined(X,bd+l);qx.core.Assert.assertNotNull(X,bd+l);}
;var be=this.createEvent(Y,bb||null,ba);var bc={};var self=this;qx.event.Utils.then(bc,function(){return self.getManager(X).dispatchEvent(X,be);}
);return qx.event.Utils.then(bc,function(){return !be.getDefaultPrevented();}
);}
,fireEventAsync:function(bh,bg,bi,bf){if(qx.core.Environment.get(k)){return qx.Promise.resolve(this.fireEvent(bh,bg,bi,bf));}
else {throw new Error(this.classname+i);}
;}
,__db:function(bj,bo,bm,bl){if(qx.core.Environment.get(g)){if(arguments.length>2&&bm===undefined&&bl!==undefined){throw new Error(c+bo+h);}
;}
;var bn=this.getManager(bj);if(!bn.hasListener(bj,bo,false)){return null;}
;var bk=this.createEvent(bo,bm||null,bl);bn.dispatchEvent(bj,bk);return bk;}
,fireNonBubblingEvent:function(bs,br,bt,bq){var bp=this.__db.apply(this,arguments);if(bp===null){return true;}
;return !bp.getDefaultPrevented();}
,fireNonBubblingEventAsync:qx.core.Environment.select(k,{"true":function(bx,bw,by,bv){var bu=this.__db.apply(this,arguments);if(bu===null){return qx.Promise.resolve(true);}
;return bu.promise();}
,"false":function(){throw new Error(this.classname+i);}
}),PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cJ:[],addHandler:function(bz){if(qx.core.Environment.get(g)){qx.core.Assert.assertInterface(bz,qx.event.IEventHandler,f);}
;this.__cJ.push(bz);this.__cJ.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getHandlers:function(){return this.__cJ;}
,__cK:[],addDispatcher:function(bB,bA){if(qx.core.Environment.get(g)){qx.core.Assert.assertInterface(bB,qx.event.IEventDispatcher,d);}
;this.__cK.push(bB);this.__cK.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getDispatchers:function(){return this.__cK;}
}});}
)();
(function(){var a="qx.core.MEvent";qx.Mixin.define(a,{members:{__dc:qx.event.Registration,addListener:function(d,b,self,c){if(!this.$$disposed){return this.__dc.addListener(this,d,b,self,c);}
;return null;}
,addListenerOnce:function(j,g,i,f){var self=this;if(!i){i=this;}
;var k;var h=function(e){self.removeListenerById(k);g.call(i,e);}
;if(!g.$$wrapped_callback){g.$$wrapped_callback={};}
;g.$$wrapped_callback[j+this.toHashCode()]=h;k=this.addListener(j,h,i,f);return k;}
,removeListener:function(n,l,self,m){if(!this.$$disposed){if(l.$$wrapped_callback&&l.$$wrapped_callback[n+this.$$hash]){var o=l.$$wrapped_callback[n+this.$$hash];delete l.$$wrapped_callback[n+this.$$hash];l=o;}
;return this.__dc.removeListener(this,n,l,self,m);}
;return false;}
,removeListenerById:function(p){if(!this.$$disposed){return this.__dc.removeListenerById(this,p);}
;return false;}
,hasListener:function(r,q){return this.__dc.hasListener(this,r,q);}
,dispatchEvent:function(s){if(!this.$$disposed){return this.__dc.dispatchEvent(this,s);}
;return true;}
,fireEvent:function(u,v,t){if(!this.$$disposed){return this.__dc.fireEvent(this,u,v,t);}
;return true;}
,fireNonBubblingEvent:function(x,y,w){if(!this.$$disposed){return this.__dc.fireNonBubblingEvent(this,x,y,w);}
;return true;}
,fireDataEvent:function(B,C,z,A){if(!this.$$disposed){if(z===undefined){z=null;}
;return this.__dc.fireEvent(this,B,qx.event.type.Data,[C,z,!!A]);}
;return true;}
}});}
)();
(function(){var a="qx.event.IEventDispatcher";qx.Interface.define(a,{members:{canDispatchEvent:function(c,event,b){this.assertInstance(event,qx.event.type.Event);this.assertString(b);}
,dispatchEvent:function(e,event,d){this.assertInstance(event,qx.event.type.Event);this.assertString(d);}
}});}
)();
(function(){var a=", object=",b="function",c="qx.core.Object",d='#',e="qx.core.MObjectId",f='/',g="_applyQxObjectId",h="Cannot register an object with ID '",i="' because it is already owned by another object this=",j="Cannot register an object that has no ID, obj=",k=", obj=",l="_applyQxOwner",m="' because that ID is already in use, this=",n="Cannot discard object by reference because it is not a Qooxdoo object, please remove it using the original ID; object=",o="Cannot discard owned objects based on a path",p="string",q="Please use API methods to change owner, not the property",r="Cannot discard object because it is not owned by this, this=";qx.Mixin.define(e,{properties:{qxOwner:{init:null,check:c,nullable:true,apply:l},qxObjectId:{init:null,check:function(s){return s===null||(typeof s==p&&s.indexOf(f)<0);}
,nullable:true,apply:g}},members:{__dd:null,__de:false,_applyQxOwner:function(t,u){if(!this.__de){throw new Error(q);}
;}
,_applyQxObjectId:function(w,x){if(!this.__de){var v=this.getQxOwner();if(v){v.__df(this,w,x);}
;this._cascadeQxObjectIdChanges();}
;}
,__df:function(y,z,A){delete this.__dd[A];this.__dd[z]=y;}
,_cascadeQxObjectIdChanges:function(){if(typeof this.getContentElement==b){var B=this.getContentElement();if(B){B.updateObjectId();}
;}
;if(this.__dd){for(var name in this.__dd){var C=this.__dd[name];if(C instanceof qx.core.Object){C._cascadeQxObjectIdChanges();}
;}
;}
;}
,getQxObject:function(K){if(this.__dd){var D=this.__dd[K];if(D!==undefined){return D;}
;}
;var I=null;var F=K.indexOf(d);if(F>-1){I=K.substring(F+1);K=K.substring(0,F);}
;var H=undefined;if(K.indexOf(f)>-1){var G=K.split(f);var E=this;var J=G.every(function(M){if(!M.length){return true;}
;if(!E){return false;}
;var N=E.getQxObject(M);if(N!==undefined){E=N;return true;}
;}
);if(J){H=E;}
;}
else {H=this._createQxObject(K);}
;if(H&&I){var L=H.getChildControl(I);return L;}
;return H;}
,_createQxObject:function(O){var P=this._createQxObjectImpl(O);if(P!==undefined){this.addOwnedQxObject(P,O);}
;return P;}
,_createQxObjectImpl:function(Q){return undefined;}
,addOwnedQxObject:function(S,T){if(!this.__dd){this.__dd={};}
;if(!(S instanceof qx.core.Object)){if(!T){throw new Error(j+S);}
;if(this.__dd[T]){throw new Error(h+T+m+this+k+S);}
;this.__dd[T]=S;return;}
;var R=S.getQxOwner();if(R===this){return;}
;S.__de=true;try{if(R){R.__dg(S);}
;if(T===undefined){T=S.getQxObjectId();}
;if(!T){throw new Error(j+S);}
;if(this.__dd[T]){throw new Error(h+T+m+this+k+S);}
;if(S.getQxOwner()!=null){throw new Error(h+T+i+this+k+S);}
;S.setQxOwner(this);S.setQxObjectId(T);S._cascadeQxObjectIdChanges();}
finally{S.__de=false;}
;this.__dd[T]=S;}
,removeOwnedQxObject:function(U){if(!this.__dd){throw new Error(r+this+a+V);}
;var W;var V;if(typeof U===p){if(U.indexOf(f)>-1){throw new Error(o);}
;W=U;V=this.__dd[W];if(V===undefined){return;}
;}
else {V=U;if(!(V instanceof qx.core.Object)){throw new Error(n+V);}
;W=V.getQxObjectId();if(this.__dd[W]!==V){throw new Error(r+this+a+V);}
;}
;if(V!==null){if(!(V instanceof qx.core.Object)){this.__dg(V);delete this.__dd[W];}
else {V.__de=true;try{this.__dg(V);V._cascadeQxObjectIdChanges();}
finally{V.__de=false;}
;}
;}
;}
,__dg:function(X){if(X!==null){var Y=X.getQxObjectId();X.setQxOwner(null);delete this.__dd[Y];}
;}
,getOwnedQxObjects:function(){return this.__dd?Object.values(this.__dd):[];}
}});}
)();
(function(){var a="$$init_",b="No such property: ",c="set",d="qx.debug",e="get",f="$$user_",g="qx.core.MProperty",h="reset";qx.Mixin.define(g,{members:{set:function(j,k){var i=qx.core.Property.$$method.set;if(qx.Bootstrap.isString(j)){if(!this[i[j]]){if(this[c+qx.Bootstrap.firstUp(j)]!=undefined){this[c+qx.Bootstrap.firstUp(j)](k);return this;}
;throw new Error(b+j);}
;return this[i[j]](k);}
else {for(var l in j){if(!this[i[l]]){if(this[c+qx.Bootstrap.firstUp(l)]!=undefined){this[c+qx.Bootstrap.firstUp(l)](j[l]);continue;}
;throw new Error(b+l);}
;this[i[l]](j[l]);}
;return this;}
;}
,get:function(n){var m=qx.core.Property.$$method.get;if(!this[m[n]]){if(this[e+qx.Bootstrap.firstUp(n)]!=undefined){return this[e+qx.Bootstrap.firstUp(n)]();}
;throw new Error(b+n);}
;return this[m[n]]();}
,reset:function(p){var o=qx.core.Property.$$method.reset;if(!this[o[p]]){if(this[h+qx.Bootstrap.firstUp(p)]!=undefined){this[h+qx.Bootstrap.firstUp(p)]();return;}
;throw new Error(b+p);}
;this[o[p]]();}
,isPropertyInitialized:function(q){if(qx.core.Environment.get(d)){qx.core.Assert.assertString(q);if(!this[e+qx.Bootstrap.firstUp(q)]){throw new Error(b+q);}
;}
;return this[f+q]!==undefined||this[a+q]!==undefined;}
}});}
)();
(function(){var a="qx.core.MAssert";qx.Mixin.define(a,{members:{assert:function(c,b){qx.core.Assert.assert(c,b);}
,fail:function(d,e){qx.core.Assert.fail(d,e);}
,assertTrue:function(g,f){qx.core.Assert.assertTrue(g,f);}
,assertFalse:function(i,h){qx.core.Assert.assertFalse(i,h);}
,assertEquals:function(j,k,l){qx.core.Assert.assertEquals(j,k,l);}
,assertNotEquals:function(m,n,o){qx.core.Assert.assertNotEquals(m,n,o);}
,assertEqualsFloat:function(p,q,r){qx.core.Assert.assertEqualsFloat(p,q,r);}
,assertNotEqualsFloat:function(s,t,u){qx.core.Assert.assertNotEqualsFloat(s,t,u);}
,assertIdentical:function(v,w,x){qx.core.Assert.assertIdentical(v,w,x);}
,assertNotIdentical:function(y,z,A){qx.core.Assert.assertNotIdentical(y,z,A);}
,assertNotUndefined:function(C,B){qx.core.Assert.assertNotUndefined(C,B);}
,assertUndefined:function(E,D){qx.core.Assert.assertUndefined(E,D);}
,assertNotNull:function(G,F){qx.core.Assert.assertNotNull(G,F);}
,assertNull:function(I,H){qx.core.Assert.assertNull(I,H);}
,assertJsonEquals:function(J,K,L){qx.core.Assert.assertJsonEquals(J,K,L);}
,assertMatch:function(O,N,M){qx.core.Assert.assertMatch(O,N,M);}
,assertArgumentsCount:function(R,Q,S,P){qx.core.Assert.assertArgumentsCount(R,Q,S,P);}
,assertEventFired:function(V,event,W,T,U){qx.core.Assert.assertEventFired(V,event,W,T,U);}
,assertEventNotFired:function(ba,event,X,Y){qx.core.Assert.assertEventNotFired(ba,event,X,Y);}
,assertException:function(bc,bd,be,bb){qx.core.Assert.assertException(bc,bd,be,bb);}
,assertInArray:function(bh,bg,bf){qx.core.Assert.assertInArray(bh,bg,bf);}
,assertNotInArray:function(bk,bj,bi){qx.core.Assert.assertNotInArray(bk,bj,bi);}
,assertArrayEquals:function(bl,bm,bn){qx.core.Assert.assertArrayEquals(bl,bm,bn);}
,assertKeyInMap:function(bq,bp,bo){qx.core.Assert.assertKeyInMap(bq,bp,bo);}
,assertFunction:function(bs,br){qx.core.Assert.assertFunction(bs,br);}
,assertString:function(bu,bt){qx.core.Assert.assertString(bu,bt);}
,assertBoolean:function(bw,bv){qx.core.Assert.assertBoolean(bw,bv);}
,assertNumber:function(by,bx){qx.core.Assert.assertNumber(by,bx);}
,assertPositiveNumber:function(bA,bz){qx.core.Assert.assertPositiveNumber(bA,bz);}
,assertInteger:function(bC,bB){qx.core.Assert.assertInteger(bC,bB);}
,assertPositiveInteger:function(bE,bD){qx.core.Assert.assertPositiveInteger(bE,bD);}
,assertInRange:function(bH,bI,bG,bF){qx.core.Assert.assertInRange(bH,bI,bG,bF);}
,assertObject:function(bK,bJ){qx.core.Assert.assertObject(bK,bJ);}
,assertArray:function(bM,bL){qx.core.Assert.assertArray(bM,bL);}
,assertMap:function(bO,bN){qx.core.Assert.assertMap(bO,bN);}
,assertRegExp:function(bQ,bP){qx.core.Assert.assertRegExp(bQ,bP);}
,assertType:function(bT,bS,bR){qx.core.Assert.assertType(bT,bS,bR);}
,assertInstance:function(bV,bW,bU){qx.core.Assert.assertInstance(bV,bW,bU);}
,assertInterface:function(ca,bY,bX){qx.core.Assert.assertInterface(ca,bY,bX);}
,assertCssColor:function(cb,cd,cc){qx.core.Assert.assertCssColor(cb,cd,cc);}
,assertElement:function(cf,ce){qx.core.Assert.assertElement(cf,ce);}
,assertQxObject:function(ch,cg){qx.core.Assert.assertQxObject(ch,cg);}
,assertQxWidget:function(cj,ci){qx.core.Assert.assertQxWidget(cj,ci);}
}});}
)();
(function(){var a="module.events",b="Cloning only possible with properties.",c="qx.core.Object",d="]: ",e="module.property",f="qx.debug",g="Disposing ",h="qx.debug.dispose.level",j="]",k="Cannot call super class. Method is not derived: ",m="' in ",n="[",o="Cannot change the UUID of an object once set",p="Missing destruct definition for '",q="object",r="qx.automaticMemoryManagement",s="Object";qx.Class.define(c,{extend:Object,include:qx.core.Environment.filter({"module.databinding":qx.data.MBinding,"module.logger":qx.core.MLogging,"module.events":qx.core.MEvent,"module.property":qx.core.MProperty,"module.objectid":qx.core.MObjectId,"qx.debug":qx.core.MAssert}),construct:function(){}
,statics:{$$type:s},members:{__bd:qx.core.Environment.get(e)?qx.core.Property:null,toHashCode:function(){if(!this.$$hash&&!this.$$disposed){if(!qx.core.Environment.get(r)||qx.Class.hasInterface(this.constructor,qx.core.IDisposable)){qx.core.ObjectRegistry.register(this);}
else {qx.core.ObjectRegistry.toHashCode(this);}
;}
;return this.$$hash;}
,toUuid:function(){if(!this.$$uuid){this.$$uuid=qx.util.Uuid.createUuidV4();}
;return this.$$uuid;}
,setExplicitUuid:function(t){if(Boolean(this.$$uuid)){throw new Error(o);}
;this.$$uuid=t;}
,toString:function(){return this.classname+n+this.toHashCode()+j;}
,base:function(u,v){if(qx.core.Environment.get(f)){if(!qx.Bootstrap.isFunctionOrAsyncFunction(u.callee.base)){throw new Error(k+u.callee.displayName);}
;}
;if(arguments.length===1){return u.callee.base.call(this);}
else {return u.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}
;}
,self:function(w){return w.callee.self;}
,clone:function(){if(!qx.core.Environment.get(e)){throw new Error(b);}
;var y=this.constructor;var x=new y;var A=qx.Class.getProperties(y);var z=this.__bd.$$store.user;var B=this.__bd.$$method.set;var name;for(var i=0,l=A.length;i<l;i++ ){name=A[i];if(this.hasOwnProperty(z[name])){x[B[name]](this[z[name]]);}
;}
;return x;}
,__dh:null,setUserData:function(C,D){if(!this.__dh){this.__dh={};}
;this.__dh[C]=D;}
,getUserData:function(F){if(!this.__dh){return null;}
;var E=this.__dh[F];return E===undefined?null:E;}
,resetUserData:function(){this.__dh=null;}
,isDisposed:function(){return this.$$disposed||false;}
,isDisposing:function(){return this.$$disposing||false;}
,dispose:function(){if(this.$$disposed){return;}
;this.$$disposed=true;this.$$disposing=true;this.$$instance=null;this.$$allowconstruct=null;if(qx.core.Environment.get(f)){if(qx.core.Environment.get(h)>2){qx.Bootstrap.debug(this,g+this.classname+n+this.toHashCode()+j);}
;}
;var I=this.constructor;var G;while(I.superclass){if(I.$$destructor){I.$$destructor.call(this);}
;if(I.$$includes){G=I.$$flatIncludes;for(var i=0,l=G.length;i<l;i++ ){if(G[i].$$destructor){G[i].$$destructor.call(this);}
;}
;}
;I=I.superclass;}
;this.$$disposing=false;if(qx.core.Environment.get(f)){if(qx.core.Environment.get(h)>0){var J,H;for(J in this){H=this[J];if(H!==null&&typeof H===q&&!(qx.Bootstrap.isString(H))){if(this.constructor.prototype[J]!=null){continue;}
;if(qx.core.Environment.get(h)>1){qx.Bootstrap.warn(this,p+J+m+this.classname+n+this.toHashCode()+d+H);delete this[J];}
;}
;}
;}
;}
;}
,_disposeObjects:function(K){qx.util.DisposeUtil.disposeObjects(this,arguments);}
,_disposeSingletonObjects:function(L){qx.util.DisposeUtil.disposeObjects(this,arguments,true);}
,_disposeArray:function(M){qx.util.DisposeUtil.disposeArray(this,M);}
,_disposeMap:function(N){qx.util.DisposeUtil.disposeMap(this,N);}
},environment:{"qx.debug.dispose.level":0},destruct:function(){if(qx.core.Environment.get(a)){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);}
else {qx.event.Registration.deleteAllListeners(this);}
;}
;qx.core.ObjectRegistry.unregister(this);this.__dh=null;if(qx.core.Environment.get(e)){var Q=this.constructor;var U;var V=this.__bd.$$store;var S=V.user;var T=V.theme;var O=V.inherit;var R=V.useinit;var P=V.init;while(Q){U=Q.$$properties;if(U){for(var name in U){if(U[name].dereference){this[S[name]]=this[T[name]]=this[O[name]]=this[R[name]]=this[P[name]]=undefined;}
;}
;}
;Q=Q.superclass;}
;}
;}
});}
)();
(function(){var a='function',c='string',d='-',e="qx.util.Uuid",f='crypto',g='undefined';qx.Class.define(e,{extend:qx.core.Object,statics:{createUuidV4:null}});(function(){var p,m=0,j=[],i;for(i=0;i<256;i++ ){j[i]=(i+0x100).toString(16).substr(1);}
;h.BUFFER_SIZE=4096;h.bin=o;h.clearBuffer=function(){p=null;m=0;}
;h.test=function(q){if(typeof q===c){return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(q);}
;return false;}
;var l;if(typeof crypto!==g){l=crypto;}
else if((typeof window!==g)&&(typeof window.msCrypto!==g)){l=window.msCrypto;}
;if((typeof module!==g)&&(typeof require===a)){l=l||require(f);}
;qx.util.Uuid.createUuidV4=h;h.randomBytes=(function(){if(l){if(l.randomBytes){return l.randomBytes;}
;if(l.getRandomValues){return function(n){var s=new Uint8Array(n);l.getRandomValues(s);return s;}
;}
;}
;return function(n){var i,r=[];for(i=0;i<n;i++ ){r.push(Math.floor(Math.random()*256));}
;return r;}
;}
)();function k(n){if(!p||((m+n)>h.BUFFER_SIZE)){m=0;p=h.randomBytes(h.BUFFER_SIZE);}
;return p.slice(m,m+=n);}
;function o(){var b=k(16);b[6]=(b[6]&0x0f)|0x40;b[8]=(b[8]&0x3f)|0x80;return b;}
;function h(){var b=o();return j[b[0]]+j[b[1]]+j[b[2]]+j[b[3]]+d+j[b[4]]+j[b[5]]+d+j[b[6]]+j[b[7]]+d+j[b[8]]+j[b[9]]+d+j[b[10]]+j[b[11]]+j[b[12]]+j[b[13]]+j[b[14]]+j[b[15]];}
;}
)();}
)();
(function(){var a=" is a singleton! Please use disposeSingleton instead.",b="undefined",c="qx.debug",d="qx.ui.container.SlideBar or qx.ui.container.Stack!",e="qx.util.DisposeUtil",f=" of object: ",g="Container must be an instance of qx.ui.mobile.container.Composite.",h="!",j=" has non disposable entries: ",k="The map field: ",m="First argument must be a container widget!",n="qx.ui.container.Scroll or qx.ui.container.Resizer or ",o="The array field: ",p="Container must be an instance of qx.ui.container.Composite or ",q="The object stored in key ",r="Has no disposable object under key: ";qx.Class.define(e,{statics:{disposeObjects:function(t,s,u){var name;for(var i=0,l=s.length;i<l;i++ ){name=s[i];if(t[name]==null||!t.hasOwnProperty(name)){continue;}
;if(!qx.core.ObjectRegistry.inShutDown){if(t[name].dispose){if(!u&&t[name].constructor.$$instance){throw new Error(q+name+a);}
else {t[name].dispose();}
;}
else {throw new Error(r+name+h);}
;}
;t[name]=null;}
;}
,disposeArray:function(w,v){var x=w[v];if(!x){return;}
;if(qx.core.ObjectRegistry.inShutDown){w[v]=null;return;}
;try{var y;for(var i=x.length-1;i>=0;i-- ){y=x[i];if(y){y.dispose();}
;}
;}
catch(z){throw new Error(o+v+f+w+j+z);}
;x.length=0;w[v]=null;}
,disposeMap:function(B,A){var C=B[A];if(!C){return;}
;if(qx.core.ObjectRegistry.inShutDown){B[A]=null;return;}
;try{var E;for(var D in C){E=C[D];if(C.hasOwnProperty(D)&&E){E.dispose();}
;}
;}
catch(F){throw new Error(k+A+f+B+j+F);}
;B[A]=null;}
,disposeTriggeredBy:function(G,I){var H=I.dispose;I.dispose=function(){H.call(I);G.dispose();}
;}
,destroyContainer:function(K){if(qx.core.Environment.get(c)){if(qx.ui.mobile&&K instanceof qx.ui.mobile.core.Widget){qx.core.Assert.assertTrue(this.__di(K),g);}
else {qx.core.Assert.assertQxWidget(K,m);qx.core.Assert.assertTrue(this.__di(K),p+n+d);}
;}
;var J=[];this._collectContainerChildren(K,J);var L=J.length;for(var i=L-1;i>=0;i-- ){J[i].destroy();}
;K.destroy();}
,_collectContainerChildren:function(O,N){var P=O.getChildren();for(var i=0;i<P.length;i++ ){var M=P[i];N.push(M);if(this.__di(M)){this._collectContainerChildren(M,N);}
;}
;}
,__di:function(R){var Q=[];if(qx.ui.mobile&&R instanceof qx.ui.mobile.core.Widget){Q=[qx.ui.mobile.container.Composite];}
else {Q=[qx.ui.container.Composite,qx.ui.container.Scroll,qx.ui.container.SlideBar,qx.ui.container.Stack];}
;for(var i=0,l=Q.length;i<l;i++ ){if(typeof Q[i]!==b&&qx.Class.isSubClassOf(R.constructor,Q[i])){return true;}
;}
;return false;}
}});}
)();
(function(){var a="Cannot stop propagation on a non bubbling event: ",b=".promise not supported because qx.promise==false",c=".getPromises not supported because qx.promise==false",d="qx.debug",e="Invalid argument value 'cancelable'.",f="Cannot prevent default action on a non cancelable event: ",g=".addPromise not supported because qx.promise==false",h="Invalid argument value 'canBubble'.",i="qx.event.type.Event",j="qx.promise";qx.Class.define(i,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{_promises:null,init:function(l,k){if(qx.core.Environment.get(d)){if(l!==undefined){qx.core.Assert.assertBoolean(l,h);}
;if(k!==undefined){qx.core.Assert.assertBoolean(k,e);}
;}
;this._type=null;this._target=null;this._currentTarget=null;this._relatedTarget=null;this._originalTarget=null;this._stopPropagation=false;this._preventDefault=false;this._bubbles=!!l;this._cancelable=!!k;this._timeStamp=(new Date()).getTime();this._eventPhase=null;this._promises=null;return this;}
,clone:function(m){if(m){var n=m;}
else {var n=qx.event.Pool.getInstance().getObject(this.constructor);}
;n._type=this._type;n._target=this._target;n._currentTarget=this._currentTarget;n._relatedTarget=this._relatedTarget;n._originalTarget=this._originalTarget;n._stopPropagation=this._stopPropagation;n._bubbles=this._bubbles;n._preventDefault=this._preventDefault;n._cancelable=this._cancelable;n._promises=this._promises;return n;}
,stop:function(){if(this._bubbles){this.stopPropagation();}
;if(this._cancelable){this.preventDefault();}
;}
,stopPropagation:function(){if(qx.core.Environment.get(d)){this.assertTrue(this._bubbles,a+this.getType());}
;this._stopPropagation=true;}
,getPropagationStopped:function(){return !!this._stopPropagation;}
,preventDefault:function(){if(qx.core.Environment.get(d)){this.assertTrue(this._cancelable,f+this.getType());}
;this._preventDefault=true;}
,addPromise:qx.core.Environment.select(j,{"true":function(o){if(this._promises===null){this._promises=[o];}
else {this._promises.push(o);}
;}
,"false":function(){throw new Error(this.classname+g);}
}),getPromises:qx.core.Environment.select(j,{"true":function(){return this._promises;}
,"false":function(){throw new Error(this.classname+c);}
}),promise:qx.core.Environment.select(j,{"true":function(){if(this.getDefaultPrevented()){return qx.Promise.reject();}
;if(this._promises===null){return qx.Promise.resolve(true);}
;return qx.Promise.all(this._promises);}
,"false":function(){throw new Error(this.classname+b);}
}),getDefaultPrevented:function(){return !!this._preventDefault;}
,getType:function(){return this._type;}
,setType:function(p){this._type=p;}
,getEventPhase:function(){return this._eventPhase;}
,setEventPhase:function(q){this._eventPhase=q;}
,getTimeStamp:function(){return this._timeStamp;}
,getTarget:function(){return this._target;}
,setTarget:function(r){this._target=r;}
,getCurrentTarget:function(){return this._currentTarget||this._target;}
,setCurrentTarget:function(s){this._currentTarget=s;}
,getRelatedTarget:function(){return this._relatedTarget;}
,setRelatedTarget:function(t){this._relatedTarget=t;}
,getOriginalTarget:function(){return this._originalTarget;}
,setOriginalTarget:function(u){this._originalTarget=u;}
,getBubbles:function(){return this._bubbles;}
,setBubbles:function(v){this._bubbles=v;}
,isCancelable:function(){return this._cancelable;}
,setCancelable:function(w){this._cancelable=w;}
}});}
)();
(function(){var a="qx.util.ObjectPool",b="Class needs to be defined!",c="Object is already pooled: ",d="Integer";qx.Class.define(a,{extend:qx.core.Object,implement:[qx.core.IDisposable],construct:function(e){qx.core.Object.call(this);this.__dj={};if(e!=null){this.setSize(e);}
;}
,properties:{size:{check:d,init:Infinity}},members:{__dj:null,getObject:function(h){if(this.$$disposed){return new h;}
;if(!h){throw new Error(b);}
;var f=null;var g=this.__dj[h.classname];if(g){f=g.pop();}
;if(f){f.$$pooled=false;}
else {f=new h;}
;return f;}
,poolObject:function(k){if(!this.__dj){return;}
;var j=k.classname;var m=this.__dj[j];if(k.$$pooled){throw new Error(c+k);}
;if(!m){this.__dj[j]=m=[];}
;if(m.length>this.getSize()){if(k.destroy){k.destroy();}
else {k.dispose();}
;return;}
;k.$$pooled=true;m.push(k);}
},destruct:function(){var p=this.__dj;var n,o,i,l;for(n in p){o=p[n];for(i=0,l=o.length;i<l;i++ ){o[i].dispose();}
;}
;delete this.__dj;}
});}
)();
(function(){var a="singleton",b="qx.event.Pool";qx.Class.define(b,{extend:qx.util.ObjectPool,type:a,construct:function(){qx.util.ObjectPool.call(this,30);}
});}
)();
(function(){var b='./timers.js',c='cancel',g="promiseFulfilled",h="A catch statement predicate ",k="caller",m="constructor",q=" Use ",w="cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a",y="range error",z="BLUEBIRD_WARNINGS",A='any',B="use strict",C="'use strict';                                                \n\
                    var ret = function (Parameters) {                                    \n\
                    'use strict';                                                    \n\
                    var len = arguments.length;                                      \n\
                    var promise = new Promise(INTERNAL);                             \n\
                    promise._captureStackTrace();                                    \n\
                    var nodeback = nodebackForPromise(promise, ",D="div",E="cannot enable cancellation after promises are in use",F="prototype",G="cannot .spread() a non-array: ",H="warning",I="stack",J="(<",K=" has no method '",L='each',M="rejectionHandled",N=" instead.",O=" items",P='all',Q=" items but contains only ",R="color: red",S="Promise.coroutine()",U='./filter.js',V="Promise has already been resolved or rejected",W="expecting an object but got ",X='mapSeries',Y="Warning",ba="NODE_ENV",bb="...",bc="_makeSelfResolutionError",bd="No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a",be="\u001b[0m\n",bf="number",bg="Promise.spawn()",bh="unhandledrejection",bi="cancellation error",bj="Holder$",bk="Object ",bl="Input array must contain at least ",bm="this != null ? this['",bn='filter',bo="obj",bp="promiseRejected",bq="options argument must be an object but it is ",br='spread',bs="./schedule",bt="propertyName",bu='./any.js',bv="promiseResolved",bw="fn",bx="at ",by="errorObj",bz="cancellation",bA="promiseCreated",bB='finally',bC="Promise.try",bD="[CodeForCall]",bE="./debuggability",bF="case ",bG=" size",bH="Promise.reduce",bI="tryCatch",bJ="but was not returned from it, ",bK="From previous event:",bL='./promisify.js',bM="./catch_filter",bN="handler ",bO="AggregateError",bP="_arg",bQ="./thenables",bR="every map indexOf lastIndexOf reduce reduceRight sort reverse",bS="holder",bT="CancellationError",bU="|",bV='./race.js',bW="string",bX="cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a",bY="stackDetection@",ca="callee",cc="(not from exception)",cd="ret = callback.apply(receiver, args);\n",ce="cancellation is disabled",cf="./promise",cg='./each.js',ch="ensureMethod",ci='./nodeify.js',cj="./cancel",ck="Unhandled promise rejection: ",cl=":",cm='./call_get.js',cn="                             \n\
                      'use strict';                                                    \n\
                      holder.pIndex = value;                                           \n\
                      holder.checkFulfillment(this);                                   \n\
                      ",co='reject',cp="var promise;\n",cq='catch',cs="join pop push shift unshift slice filter forEach some ",ct="\u001b[33m",cu="Promise.using",cv="new Promise",cw="promise",cx="BLUEBIRD_W_FORGOTTEN_RETURN",cy="qx.promise.longStackTraces",cz="promiseChained",cA="expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a",cB="Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a",cC=".",cD="./async",cE="a promise was created in a ",cF="withAppended",cG="you must pass at least 2 arguments to Promise.using",cH="./finally",cI="a promise was rejected with a non-error: ",cJ="CustomEvent",cK=".all() was passed arguments but it does not take any",cL="circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a",cM="color: darkorange",cN="Parameters",cO="A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a",cP=" ",cQ="_getDomain",cR="testingtheevent",cS="{{args}}",cT="__stackCleaned__",cU="BLUEBIRD_DEBUG",cV="foo",cW="function",cX="./direct_resolve",cY="maybeWrapAsError",da="expecting a function but got ",db="message",dc="async",dd="From coroutine:\u000a",de="./nodeback",df="./promise_array",dg="AggregateError of:",dh="late cancellation observer",di=".settle()",dj="return",dk="Calling reject with non-error object, createdAt=",dl=">, no stack trace)",dm="                                                             \n\
                    default:                                                             \n\
                    var args = new Array(len + 1);                                   \n\
                    var i = 0;                                                       \n\
                    for (var i = 0; i < len; ++i) {                                  \n\
                    args[i] = arguments[i];                                       \n\
                    }                                                                \n\
                    args[i] = nodeback;                                              \n\
                    [CodeForCall]                                                    \n\
                    break;                                                           \n\
                    ",dn="aggregate error",dp="RangeError",dq="notEnumerableProp",dr=";                                      \n\
                    if (promise instanceof Promise) {                            \n\
                    promise.cancel();                                        \n\
                    }                                                            \n\
                    ",ds="the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a",dt="Unhandled rejection ",du="return function(tryCatch, errorObj, Promise, async) {    \n\
                    'use strict';                                                    \n\
                    function [TheName](fn) {                                         \n\
                    [TheProperties]                                              \n\
                    this.fn = fn;                                                \n\
                    this.asyncNeeded = true;                                     \n\
                    this.now = 0;                                                \n\
                    }                                                                \n\
                    \n\
                    [TheName].prototype._callFunction = function(promise) {          \n\
                    promise._pushContext();                                      \n\
                    var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\
                    promise._popContext();                                       \n\
                    if (ret === errorObj) {                                      \n\
                    promise._rejectCallback(ret.e, false);                   \n\
                    } else {                                                     \n\
                    promise._resolveCallback(ret);                           \n\
                    }                                                            \n\
                    };                                                               \n\
                    \n\
                    [TheName].prototype.checkFulfillment = function(promise) {       \n\
                    var now = ++this.now;                                        \n\
                    if (now === [TheTotal]) {                                    \n\
                    if (this.asyncNeeded) {                                  \n\
                    async.invoke(this._callFunction, this, promise);     \n\
                    } else {                                                 \n\
                    this._callFunction(promise);                         \n\
                    }                                                        \n\
                    \n\
                    }                                                            \n\
                    };                                                               \n\
                    \n\
                    [TheName].prototype._resultCancelled = function() {              \n\
                    [CancellationCode]                                           \n\
                    };                                                               \n\
                    \n\
                    return [TheName];                                                \n\
                    }(tryCatch, errorObj, Promise, async);                               \n\
                    ",dv=".reflect()",dw="[object Promise]",dx="unhandledRejection",dy="MODULE_NOT_FOUND",dz='props',dA="throw",dB="break",dC="ret = callback({{args}}, nodeback); break;\n",dD="type error",dE="the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a",dF="ret = callback.call(this, {{args}}, nodeback); break;\n",dG="arguments",dH='some',dI='map',dJ="timeout error",dK="INTERNAL",dL="_",dM="Rejecting a promise with a non-Error value",dN="catch",dO=" is deprecated and will be removed in a future version.",dP="Promise.method",dQ="[no string representation]",dR="[object process]",dS="promiseCancelled",dT="Default Error",dU='./using.js',dV=", ",dW="ret = callback.apply(this, args);\n",dX=");   \n\
                    var ret;                                                         \n\
                    var callback = tryCatch([GetFunctionCode]);                      \n\
                    switch(len) {                                                    \n\
                    [CodeForSwitchCase]                                          \n\
                    }                                                                \n\
                    if (ret === errorObj) {                                          \n\
                    promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
                    }                                                                \n\
                    if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
                    return promise;                                                  \n\
                    };                                                                   \n\
                    notEnumerableProp(ret, '__isPromisified__', true);                   \n\
                    return ret;                                                          \n\
                    ",dY='promisify',ea=" = ",eb="anonymous",ec="./util",ed="'concurrency' must be a number but it is ",ee="\n",ef="operation timed out",eg='reduce',eh='race',ei="generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a",ej="Promise",ek="./errors",el='./generators.js',em="development",en="generator .return() sentinel",eo="__BluebirdErrorTypes__",ep="./synchronous_inspection",eq="qx.Promise",er="_async",es="try",et="on",eu="./join",ev=")$",ew="onCancel must be a function, got: ",ex="object",ey="Promises are installed and initialised but disabled from properties because qx.promise==false; this may cause unexpected behaviour",ez="OperationalError",eA="[CodeForSwitchCase]",eB="warnings",eC="name",eD=".then() only accepts functions but was passed: ",eE="cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a",eF="wForgottenReturn",eG="_promise0",eH="Fatal ",eI='./map.js',eJ="length",eK="'] : fn",eL="__dx",eM="qx.promise",eN="%c",eO="TimeoutError",eP="                                             \n\
                    'use strict';                                                        \n\
                    return obj.propertyName;                                             \n\
                    ",eQ="monitoring",eR="./context",eS="Promise.defer",eT="'",eU='./reduce.js',eV="arity",eW="./method",eX="qx.debug",eY=" = null;",fa="expecting an array or an iterable object but got ",fb="Async",fc="^(?:",fd="value",fe="    (No stack trace)",ff="BLUEBIRD_LONG_STACK_TRACES",fg="Promise.each",fh="$",fi="nodebackForPromise",fj="Cannot find module '",fk="receiver",fl="",fm="Promise.filter",fo="%s",fp='./settle.js',fq="Promise cannot be resolved externally",fr="ret = callback.call(receiver, {{args}}, nodeback); break;\n",fs="                                    \n\
                    return function(obj) {                                               \n\
                    'use strict'                                                     \n\
                    var len = this.length;                                           \n\
                    ensureMethod(obj, 'methodName');                                 \n\
                    switch(len) {                                                    \n\
                    case 1: return obj.methodName(this[0]);                      \n\
                    case 2: return obj.methodName(this[0], this[1]);             \n\
                    case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
                    case 0: return obj.methodName();                             \n\
                    default:                                                     \n\
                    return obj.methodName.apply(obj, this);                  \n\
                    }                                                                \n\
                    };                                                                   \n\
                    ",ft="]",fu="\u001b[31m",fv="finally",fw="./bind",fx="longStackTraces",fy="TypeError",fz="suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a",fA="[function ",fB="[GetFunctionCode]",fC="see http://goo.gl/rRqMUw",fD="./es5",fE="    ",fF="calling Promise.try with more than 1 argument",fG="Promise.map",fH="[object Array]",fI='then',fJ="3.4.5",fK="this.p",fL='./some.js',fM="[Circular AggregateError]",fN="                                                         \n\
                    promise = ",fO="qx.promise.warnings",fP="\\$",fQ='./props.js',fR="./queue",fS="                           \n\
                      'use strict';                                                    \n\
                      holder.pIndex = promise;                                         \n\
                      ",fT="(empty array)",fU="undefined",fV="cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a",fW="isOperational";qx.Class.define(eq,{extend:qx.core.Object,construct:function(fX,ga){qx.core.Object.call(this);qx.Promise.__dr();if(fX instanceof qx.Promise.Bluebird){this.__dk=fX;}
else if(fX){if(ga!==undefined&&ga!==null){fX=fX.bind(ga);}
;if(qx.core.Environment.get(eX)){var fY=fX;var self=this;fX=function(gb,gc){return fY(gb,function(gd){var ge=qx.lang.Array.fromArguments(arguments);if(gd===undefined){ge.shift();ge.unshift(qx.Promise.__do);}
else if(gd&&!(gd instanceof Error)){self.error(dk+JSON.stringify(self.$$createdAt||null));}
;gc.apply(this,ge);}
);}
;}
;this.__dk=new qx.Promise.Bluebird(fX);}
else {this.__dk=new qx.Promise.Bluebird(this.__dm.bind(this));}
;qx.core.Assert.assertTrue(!this.__dk.$$qxPromise);this.__dk.$$qxPromise=this;if(ga!==undefined&&ga!==null){this.__dk=this.__dk.bind(ga);}
;}
,destruct:function(){delete this.__dk.$$qxPromise;delete this.__dk;}
,members:{__dk:null,__dl:null,then:function(gg,gf){return this._callMethod(fI,arguments);}
,"catch":function(gh){return this._callMethod(cq,arguments);}
,bind:function(gi){return qx.Promise.__dt(this.__dk.bind(gi));}
,spread:function(gj){return this._callMethod(br,arguments);}
,"finally":function(gk){return this._callMethod(bB,arguments);}
,cancel:function(){return this._callMethod(c,arguments);}
,all:function(){return this._callIterableMethod(P,arguments);}
,race:function(gl){return this._callIterableMethod(eh,arguments);}
,any:function(gm){return this._callIterableMethod(A,arguments);}
,some:function(go,gn){return this._callIterableMethod(dH,arguments);}
,forEach:function(gp,gq){return this._callIterableMethod(L,arguments);}
,filter:function(gr,gs,gt){return this._callIterableMethod(bn,arguments);}
,map:function(gu,gv,gw){return this._callIterableMethod(dI,arguments);}
,mapSeries:function(gx,gy){return this._callIterableMethod(X,arguments);}
,reduce:function(gB,gz,gA){return this._callIterableMethod(eg,arguments);}
,__dm:function(gC,gD){this.__dl={resolve:gC,reject:gD,complete:false};}
,__dn:function(){if(!this.__dl){throw new Error(fq);}
;if(this.__dl.complete){throw new Error(V);}
;this.__dl.complete=true;return this.__dl;}
,resolve:function(gE){this.__dn().resolve(gE);}
,reject:function(gF){this.__dn().reject(gF);}
,_callIterableMethod:function(gH,gG){gG=qx.Promise.__du(gG);return qx.Promise.__dt(this.__dk.then(function(gJ){var gI=qx.Promise.Bluebird.resolve(gJ instanceof qx.data.Array?gJ.toArray():gJ);return qx.Promise.__dt(gI[gH].apply(gI,gG));}
));}
,_callMethod:function(gL,gK){gK=qx.Promise.__du(gK);return qx.Promise.__dt(this.__dk[gL].apply(this.__dk,gK));}
,toPromise:function(){return this.__dk;}
},statics:{Bluebird:null,Native:null,Promise:null,__do:new Error(dT),resolve:function(gN,gO){var gM;if(gN instanceof qx.Promise){gM=gN;}
else {gM=qx.Promise.__dt(qx.Promise.Bluebird.resolve(gN));}
;if(gO!==undefined){gM=gM.bind(gO);}
;return gM;}
,reject:function(gP,gS){var gQ=qx.lang.Array.fromArguments(arguments);if(gP===undefined){gQ.shift();gQ.unshift(qx.Promise.__do);}
else if(!(gP instanceof Error)){qx.log.Logger.warn(dM);}
;var gR=qx.Promise.__dv(co,gQ,0);if(gS!==undefined){gR=gR.bind(gS);}
;return gR;}
,allOf:function(gU){function gT(gX){var gV=[];var gW=[];for(var name in gX){if(gX.hasOwnProperty(name)&&gX[name] instanceof qx.Promise){gV.push(gX[name]);gW.push(name);}
;}
;return qx.Promise.all(gV).then(function(gY){gY.forEach(function(ha,hb){gX[gW[hb]]=ha;}
);return gX;}
);}
;return gU instanceof qx.Promise?gU.then(gT):gT(gU);}
,all:function(hc){return qx.Promise.__dv(P,arguments);}
,race:function(hd){return qx.Promise.__dv(eh,arguments);}
,any:function(he){return qx.Promise.__dv(A,arguments);}
,some:function(hg,hf){return qx.Promise.__dv(dH,arguments);}
,forEach:function(hh,hi){return qx.Promise.__dv(L,arguments);}
,filter:function(hj,hk,hl){return qx.Promise.__dv(bn,arguments);}
,map:function(hm,hn,ho){return qx.Promise.__dv(dI,arguments);}
,mapSeries:function(hp,hq){return qx.Promise.__dv(X,arguments);}
,reduce:function(ht,hr,hs){return qx.Promise.__dv(eg,arguments);}
,method:function(hu){var hv=qx.Promise.Bluebird.method(hu);return function(){return qx.Promise.__dt(hv.apply(this,arguments));}
;}
,props:function(hw){return qx.Promise.__dv(dz,arguments);}
,promisify:function(f,hx){return qx.Promise.__dv(dY,arguments);}
,__dp:function(hy){qx.Promise.Bluebird=hy;hy.config({warnings:qx.core.Environment.get(fO),longStackTraces:qx.core.Environment.get(cy),cancellation:true});}
,__dq:false,__dr:function(){if(qx.Promise.__dq){return;}
;qx.Promise.__dq=true;qx.bom.Event.addNativeListener(window,bh,qx.Promise.__ds.bind(this));if(!qx.core.Environment.get(eM)){qx.log.Logger.error(this,ey);}
;}
,__ds:function(e){e.preventDefault();var hz=null;if(e instanceof Error){hz=e;}
else if(e.reason instanceof Error){hz=e.reason;}
else if(e.detail&&e.detail.reason instanceof Error){hz=e.detail.reason;}
;qx.log.Logger.error(this,ck+(hz?hz.stack:cc));qx.event.GlobalError.handleError(hz);}
,__dt:function(hA){if(hA instanceof qx.Promise.Bluebird){if(hA.$$qxPromise){hA=hA.$$qxPromise;}
else {hA=new qx.Promise(hA);}
;}
;return hA;}
,__du:function(hB,hC){hB=qx.lang.Array.fromArguments(hB);if(hC===undefined){hC=1;}
;if(hB.length>hC){var hD=hB[hB.length-1];if(hD instanceof qx.core.Object||qx.Class.isClass(hD)){hB.pop();for(var i=0;i<hB.length;i++ ){if(typeof hB[i]==cW){hB[i]=hB[i].bind(hD);}
;}
;}
;}
;return hB;}
,__dv:function(hE,hF,hG){hF=qx.Promise.__du(hF,hG);return qx.Promise.__dt(qx.Promise.Bluebird[hE].apply(qx.Promise.Bluebird,qx.Promise.__dw(hF)));}
,__dw:function(hI){var hH=[];hI.forEach(function(hJ){if(hJ instanceof qx.data.Array){hH.push(hJ.toArray());}
else if(hJ instanceof qx.Promise){hH.push(hJ.toPromise());}
else {hH.push(hJ);}
;}
);return hH;}
},defer:function(hL,hM){hL.Promise=hL.Native=window.Promise;var hK=qx.core.Environment.get(eX);qx.core.Environment.add(fO,hK);qx.core.Environment.add(cy,false);}
});(function(){!function(e){qx.Promise.__dp(e());}
(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_==cW&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(fj+o+eT);throw f.code=dy,f;}
;var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);}
,l,l.exports,e,t,n,r);}
;return n[o].exports;}
;var i=typeof _dereq_==cW&&_dereq_;for(var o=0;o<r.length;o++ )s(r[o]);return s;}
)({'1':[function(hN,hP,hO){B;hP.exports=function(hQ){var hS=hQ._SomePromiseArray;function hR(hT){var hV=new hS(hT);var hU=hV.promise();hV.setHowMany(1);hV.setUnwrap();hV.init();return hU;}
;hQ.any=function(hW){return hR(hW);}
;hQ.prototype.any=function(){return hR(this);}
;}
;}
,{}],'2':[function(ij,ie,hY){B;var ih;try{throw new Error();}
catch(e){ih=e;}
;var id=ij(bs);var hX=ij(fR);var ig=ij(ec);function ii(){this._customScheduler=false;this._isTickUsed=false;this._lateQueue=new hX(16);this._normalQueue=new hX(16);this._haveDrainedQueues=false;this._trampolineEnabled=true;var self=this;this.drainQueues=function(){self._drainQueues();}
;this._schedule=id;}
;ii.prototype.setScheduler=function(il){var ik=this._schedule;this._schedule=il;this._customScheduler=true;return ik;}
;ii.prototype.hasCustomScheduler=function(){return this._customScheduler;}
;ii.prototype.enableTrampoline=function(){this._trampolineEnabled=true;}
;ii.prototype.disableTrampolineIfNecessary=function(){if(ig.hasDevTools){this._trampolineEnabled=false;}
;}
;ii.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues;}
;ii.prototype.fatalError=function(e,im){if(im){process.stderr.write(eH+(e instanceof Error?e.stack:e)+ee);process.exit(2);}
else {this.throwLater(e);}
;}
;ii.prototype.throwLater=function(io,ip){if(arguments.length===1){ip=io;io=function(){throw ip;}
;}
;if(typeof setTimeout!==fU){setTimeout(function(){io(ip);}
,0);}
else try{this._schedule(function(){io(ip);}
);}
catch(e){throw new Error(bd);}
;}
;function ic(ir,iq,is){this._lateQueue.push(ir,iq,is);this._queueTick();}
;function ia(iv,iu,iw){this._normalQueue.push(iv,iu,iw);this._queueTick();}
;function ib(ix){this._normalQueue._pushOne(ix);this._queueTick();}
;if(!ig.hasDevTools){ii.prototype.invokeLater=ic;ii.prototype.invoke=ia;ii.prototype.settlePromises=ib;}
else {ii.prototype.invokeLater=function(iz,iy,iA){if(this._trampolineEnabled){ic.call(this,iz,iy,iA);}
else {this._schedule(function(){setTimeout(function(){iz.call(iy,iA);}
,100);}
);}
;}
;ii.prototype.invoke=function(iC,iB,iD){if(this._trampolineEnabled){ia.call(this,iC,iB,iD);}
else {this._schedule(function(){iC.call(iB,iD);}
);}
;}
;ii.prototype.settlePromises=function(iE){if(this._trampolineEnabled){ib.call(this,iE);}
else {this._schedule(function(){iE._settlePromises();}
);}
;}
;}
;ii.prototype.invokeFirst=function(iG,iF,iH){this._normalQueue.unshift(iG,iF,iH);this._queueTick();}
;ii.prototype._drainQueue=function(iI){while(iI.length()>0){var iK=iI.shift();if(typeof iK!==cW){iK._settlePromises();continue;}
;var iJ=iI.shift();var iL=iI.shift();iK.call(iJ,iL);}
;}
;ii.prototype._drainQueues=function(){this._drainQueue(this._normalQueue);this._reset();this._haveDrainedQueues=true;this._drainQueue(this._lateQueue);}
;ii.prototype._queueTick=function(){if(!this._isTickUsed){this._isTickUsed=true;this._schedule(this.drainQueues);}
;}
;ii.prototype._reset=function(){this._isTickUsed=false;}
;ie.exports=ii;ie.exports.firstLineError=ih;}
,{"./queue":26,"./schedule":29,"./util":36}],'3':[function(iM,iO,iN){B;iO.exports=function(iP,iS,iU,iV){var iT=false;var iQ=function(_,e){this._reject(e);}
;var iX=function(e,iY){iY.promiseRejectionQueued=true;iY.bindingPromise._then(iQ,iQ,null,this,e);}
;var iW=function(jb,ja){if(((this._bitField&50397184)===0)){this._resolveCallback(ja.target);}
;}
;var iR=function(e,jc){if(!jc.promiseRejectionQueued)this._reject(e);}
;iP.prototype.bind=function(jh){if(!iT){iT=true;iP.prototype._propagateFrom=iV.propagateFromFunction();iP.prototype._boundValue=iV.boundValueFunction();}
;var je=iU(jh);var jg=new iP(iS);jg._propagateFrom(this,1);var jf=this._target();jg._setBoundTo(je);if(je instanceof iP){var jd={promiseRejectionQueued:false,promise:jg,target:jf,bindingPromise:je};jf._then(iS,iX,undefined,jg,jd);je._then(iW,iR,undefined,jg,jd);jg._setOnCancel(je);}
else {jg._resolveCallback(jf);}
;return jg;}
;iP.prototype._setBoundTo=function(ji){if(ji!==undefined){this._bitField=this._bitField|2097152;this._boundTo=ji;}
else {this._bitField=this._bitField&(~2097152);}
;}
;iP.prototype._isBound=function(){return (this._bitField&2097152)===2097152;}
;iP.bind=function(jk,jj){return iP.resolve(jj).bind(jk);}
;}
;}
,{}],'4':[function(jp,jo,jl){B;var jm;if(typeof Promise!==fU)jm=Promise;function jn(){try{if(Promise===jq)Promise=jm;}
catch(e){}
;return jq;}
;var jq=jp(cf)();jq.noConflict=jn;jo.exports=jq;}
,{"./promise":22}],'5':[function(_dereq_,module,exports){B;var cr=Object.create;if(cr){var callerCache=cr(null);var getterCache=cr(null);callerCache[bG]=getterCache[bG]=0;}
;module.exports=function(Promise){var util=_dereq_(ec);var canEvaluate=util.canEvaluate;var isIdentifier=util.isIdentifier;var getMethodCaller;var getGetter;if(!true){var makeMethodCaller=function(methodName){return new Function(ch,fs.replace(/methodName/g,methodName))(ensureMethod);}
;var makeGetter=function(propertyName){return new Function(bo,eP.replace(bt,propertyName));}
;var getCompiled=function(name,ju,js){var jt=js[name];if(typeof jt!==cW){if(!isIdentifier(name)){return null;}
;jt=ju(name);js[name]=jt;js[bG]++ ;if(js[bG]>512){var jr=Object.keys(js);for(var i=0;i<256; ++i)delete js[jr[i]];js[bG]=jr.length-256;}
;}
;return jt;}
;getMethodCaller=function(name){return getCompiled(name,makeMethodCaller,callerCache);}
;getGetter=function(name){return getCompiled(name,makeGetter,getterCache);}
;}
;function ensureMethod(jv,jx){var jy;if(jv!=null)jy=jv[jx];if(typeof jy!==cW){var jw=bk+util.classString(jv)+K+util.toString(jx)+eT;throw new Promise.TypeError(jw);}
;return jy;}
;function caller(jz){var jA=this.pop();var jB=ensureMethod(jz,jA);return jB.apply(jz,this);}
;Promise.prototype.call=function(jE){var jD=[].slice.call(arguments,1);;if(!true){if(canEvaluate){var jC=getMethodCaller(jE);if(jC!==null){return this._then(jC,undefined,undefined,jD,undefined);}
;}
;}
;jD.push(jE);return this._then(caller,undefined,undefined,jD,undefined);}
;function namedGetter(jF){return jF[this];}
;function indexedGetter(jH){var jG=+this;if(jG<0)jG=Math.max(0,jG+jH.length);return jH[jG];}
;Promise.prototype.get=function(jK){var jJ=(typeof jK===bf);var jL;if(!jJ){if(canEvaluate){var jI=getGetter(jK);jL=jI!==null?jI:namedGetter;}
else {jL=namedGetter;}
;}
else {jL=indexedGetter;}
;return this._then(jL,undefined,undefined,jK,undefined);}
;}
;}
,{"./util":36}],'6':[function(jM,jO,jN){B;jO.exports=function(jS,jP,jR,jU){var jQ=jM(ec);var jW=jQ.tryCatch;var jT=jQ.errorObj;var jV=jS._async;jS.prototype[dB]=jS.prototype.cancel=function(){if(!jU.cancellation())return this._warn(ce);var jX=this;var jY=jX;while(jX._isCancellable()){if(!jX._cancelBy(jY)){if(jY._isFollowing()){jY._followee().cancel();}
else {jY._cancelBranched();}
;break;}
;var parent=jX._cancellationParent;if(parent==null||!parent._isCancellable()){if(jX._isFollowing()){jX._followee().cancel();}
else {jX._cancelBranched();}
;break;}
else {if(jX._isFollowing())jX._followee().cancel();jX._setWillBeCancelled();jY=jX;jX=parent;}
;}
;}
;jS.prototype._branchHasCancelled=function(){this._branchesRemainingToCancel-- ;}
;jS.prototype._enoughBranchesHaveCancelled=function(){return this._branchesRemainingToCancel===undefined||this._branchesRemainingToCancel<=0;}
;jS.prototype._cancelBy=function(ka){if(ka===this){this._branchesRemainingToCancel=0;this._invokeOnCancel();return true;}
else {this._branchHasCancelled();if(this._enoughBranchesHaveCancelled()){this._invokeOnCancel();return true;}
;}
;return false;}
;jS.prototype._cancelBranched=function(){if(this._enoughBranchesHaveCancelled()){this._cancel();}
;}
;jS.prototype._cancel=function(){if(!this._isCancellable())return;this._setCancelled();jV.invoke(this._cancelPromises,this,undefined);}
;jS.prototype._cancelPromises=function(){if(this._length()>0)this._settlePromises();}
;jS.prototype._unsetOnCancel=function(){this._onCancelField=undefined;}
;jS.prototype._isCancellable=function(){return this.isPending()&&!this._isCancelled();}
;jS.prototype.isCancellable=function(){return this.isPending()&&!this.isCancelled();}
;jS.prototype._doInvokeOnCancel=function(kb,kc){if(jQ.isArray(kb)){for(var i=0;i<kb.length; ++i){this._doInvokeOnCancel(kb[i],kc);}
;}
else if(kb!==undefined){if(typeof kb===cW){if(!kc){var e=jW(kb).call(this._boundValue());if(e===jT){this._attachExtraTrace(e.e);jV.throwLater(e.e);}
;}
;}
else {kb._resultCancelled(this);}
;}
;}
;jS.prototype._invokeOnCancel=function(){var kd=this._onCancel();this._unsetOnCancel();jV.invoke(this._doInvokeOnCancel,this,kd);}
;jS.prototype._invokeInternalOnCancel=function(){if(this._isCancellable()){this._doInvokeOnCancel(this._onCancel(),true);this._unsetOnCancel();}
;}
;jS.prototype._resultCancelled=function(){this.cancel();}
;}
;}
,{"./util":36}],'7':[function(ke,kg,kf){B;kg.exports=function(ki){var kk=ke(ec);var kj=ke(fD).keys;var kl=kk.tryCatch;var km=kk.errorObj;function kh(kn,kp,ko){return function(e){var ks=ko._boundValue();predicateLoop:for(var i=0;i<kn.length; ++i){var kr=kn[i];if(kr===Error||(kr!=null&&kr.prototype instanceof Error)){if(e instanceof kr){return kl(kp).call(ks,e);}
;}
else if(typeof kr===cW){var kq=kl(kr).call(ks,e);if(kq===km){return kq;}
else if(kq){return kl(kp).call(ks,e);}
;}
else if(kk.isObject(e)){var kt=kj(kr);for(var j=0;j<kt.length; ++j){var ku=kt[j];if(kr[ku]!=e[ku]){continue predicateLoop;}
;}
;return kl(kp).call(ks,e);}
;}
;return ki;}
;}
;return kh;}
;}
,{"./es5":13,"./util":36}],'8':[function(kv,kx,kw){B;kx.exports=function(kA){var kD=false;var kC=[];kA.prototype._promiseCreated=function(){}
;kA.prototype._pushContext=function(){}
;kA.prototype._popContext=function(){return null;}
;kA._peekContext=kA.prototype._peekContext=function(){}
;function kB(){this._trace=new kB.CapturedTrace(kz());}
;kB.prototype._pushContext=function(){if(this._trace!==undefined){this._trace._promiseCreated=null;kC.push(this._trace);}
;}
;kB.prototype._popContext=function(){if(this._trace!==undefined){var kF=kC.pop();var kE=kF._promiseCreated;kF._promiseCreated=null;return kE;}
;return null;}
;function ky(){if(kD)return new kB();}
;function kz(){var kG=kC.length-1;if(kG>=0){return kC[kG];}
;return undefined;}
;kB.CapturedTrace=null;kB.create=ky;kB.deactivateLongStackTraces=function(){}
;kB.activateLongStackTraces=function(){var kK=kA.prototype._pushContext;var kI=kA.prototype._popContext;var kJ=kA._peekContext;var kL=kA.prototype._peekContext;var kH=kA.prototype._promiseCreated;kB.deactivateLongStackTraces=function(){kA.prototype._pushContext=kK;kA.prototype._popContext=kI;kA._peekContext=kJ;kA.prototype._peekContext=kL;kA.prototype._promiseCreated=kH;kD=false;}
;kD=true;kA.prototype._pushContext=kB.prototype._pushContext;kA.prototype._popContext=kB.prototype._popContext;kA._peekContext=kA.prototype._peekContext=kz;kA.prototype._promiseCreated=function(){var kM=this._peekContext();if(kM&&kM._promiseCreated==null)kM._promiseCreated=this;}
;}
;return kB;}
;}
,{}],'9':[function(kN,kP,kO){B;kP.exports=function(lo,lC){var lA=lo._getDomain;var lU=lo._async;var lQ=kN(ek).Warning;var lB=kN(ec);var ld=lB.canAttachTrace;var kY;var lj;var kR=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;var lS=/\((?:timers\.js):\d+:\d+\)/;var lp=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;var kU=null;var lv=null;var ln=false;var lx;var kQ=!!(lB.env(cU)!=0&&(true||lB.env(cU)||lB.env(ba)===em));var lk=!!(lB.env(z)!=0&&(kQ||lB.env(z)));var lr=!!(lB.env(ff)!=0&&(kQ||lB.env(ff)));var ll=lB.env(cx)!=0&&(lk||!!lB.env(cx));lo.prototype.suppressUnhandledRejections=function(){var lY=this._target();lY._bitField=((lY._bitField&(~1048576))|524288);}
;lo.prototype._ensurePossibleRejectionHandled=function(){if((this._bitField&524288)!==0)return;this._setRejectionIsUnhandled();lU.invokeLater(this._notifyUnhandledRejection,this,undefined);}
;lo.prototype._notifyUnhandledRejectionIsHandled=function(){lK(M,kY,undefined,this);}
;lo.prototype._setReturnedNonUndefined=function(){this._bitField=this._bitField|268435456;}
;lo.prototype._returnedNonUndefined=function(){return (this._bitField&268435456)!==0;}
;lo.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var ma=this._settledValue();this._setUnhandledRejectionIsNotified();lK(dx,lj,ma,this);}
;}
;lo.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=this._bitField|262144;}
;lo.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=this._bitField&(~262144);}
;lo.prototype._isUnhandledRejectionNotified=function(){return (this._bitField&262144)>0;}
;lo.prototype._setRejectionIsUnhandled=function(){this._bitField=this._bitField|1048576;}
;lo.prototype._unsetRejectionIsUnhandled=function(){this._bitField=this._bitField&(~1048576);if(this._isUnhandledRejectionNotified()){this._unsetUnhandledRejectionIsNotified();this._notifyUnhandledRejectionIsHandled();}
;}
;lo.prototype._isRejectionUnhandled=function(){return (this._bitField&1048576)>0;}
;lo.prototype._warn=function(mc,mb,md){return lN(mc,mb,md||this);}
;lo.onPossiblyUnhandledRejection=function(mf){var me=lA();lj=typeof mf===cW?(me===null?mf:lB.domainBind(me,mf)):undefined;}
;lo.onUnhandledRejectionHandled=function(mh){var mg=lA();kY=typeof mh===cW?(mg===null?mh:lB.domainBind(mg,mh)):undefined;}
;var lz=function(){}
;lo.longStackTraces=function(){if(lU.haveItemsQueued()&&!lq.longStackTraces){throw new Error(fV);}
;if(!lq.longStackTraces&&le()){var mi=lo.prototype._captureStackTrace;var mj=lo.prototype._attachExtraTrace;lq.longStackTraces=true;lz=function(){if(lU.haveItemsQueued()&&!lq.longStackTraces){throw new Error(fV);}
;lo.prototype._captureStackTrace=mi;lo.prototype._attachExtraTrace=mj;lC.deactivateLongStackTraces();lU.enableTrampoline();lq.longStackTraces=false;}
;lo.prototype._captureStackTrace=lb;lo.prototype._attachExtraTrace=lI;lC.activateLongStackTraces();lU.disableTrampolineIfNecessary();}
;}
;lo.hasLongStackTraces=function(){return lq.longStackTraces&&le();}
;var lW=(function(){try{if(typeof CustomEvent===cW){var event=new CustomEvent(cJ);lB.global.dispatchEvent(event);return function(name,event){var mk=new CustomEvent(name.toLowerCase(),{detail:event,cancelable:true});return !lB.global.dispatchEvent(mk);}
;}
else if(typeof Event===cW){var event=new Event(cJ);lB.global.dispatchEvent(event);return function(name,event){var ml=new Event(name.toLowerCase(),{cancelable:true});ml.detail=event;return !lB.global.dispatchEvent(ml);}
;}
else {var event=document.createEvent(cJ);event.initCustomEvent(cR,false,true,{});lB.global.dispatchEvent(event);return function(name,event){var mm=document.createEvent(cJ);mm.initCustomEvent(name.toLowerCase(),false,true,event);return !lB.global.dispatchEvent(mm);}
;}
;}
catch(e){}
;return function(){return false;}
;}
)();var ly=(function(){if(lB.isNode){return function(){return process.emit.apply(process,arguments);}
;}
else {if(!lB.global){return function(){return false;}
;}
;return function(name){var mn=et+name.toLowerCase();var mo=lB.global[mn];if(!mo)return false;mo.apply(lB.global,[].slice.call(arguments,1));return true;}
;}
;}
)();function lM(name,mp){return {promise:mp};}
;var li={promiseCreated:lM,promiseFulfilled:lM,promiseRejected:lM,promiseResolved:lM,promiseCancelled:lM,promiseChained:function(name,mq,mr){return {promise:mq,child:mr};}
,warning:function(name,mt){return {warning:mt};}
,unhandledRejection:function(name,mu,mv){return {reason:mu,promise:mv};}
,rejectionHandled:lM};var kS=function(name){var mx=false;try{mx=ly.apply(null,arguments);}
catch(e){lU.throwLater(e);mx=true;}
;var mw=false;try{mw=lW(name,li[name].apply(null,arguments));}
catch(e){lU.throwLater(e);mw=true;}
;return mw||mx;}
;lo.config=function(mz){mz=Object(mz);if(fx in mz){if(mz.longStackTraces){lo.longStackTraces();}
else if(!mz.longStackTraces&&lo.hasLongStackTraces()){lz();}
;}
;if(eB in mz){var my=mz.warnings;lq.warnings=!!my;ll=lq.warnings;if(lB.isObject(my)){if(eF in my){ll=!!my.wForgottenReturn;}
;}
;}
;if(bz in mz&&mz.cancellation&&!lq.cancellation){if(lU.haveItemsQueued()){throw new Error(E);}
;lo.prototype._clearCancellationData=lF;lo.prototype._propagateFrom=lm;lo.prototype._onCancel=lT;lo.prototype._setOnCancel=lH;lo.prototype._attachCancellationCallback=lR;lo.prototype._execute=lO;kT=lm;lq.cancellation=true;}
;if(eQ in mz){if(mz.monitoring&&!lq.monitoring){lq.monitoring=true;lo.prototype._fireEvent=kS;}
else if(!mz.monitoring&&lq.monitoring){lq.monitoring=false;lo.prototype._fireEvent=lh;}
;}
;}
;function lh(){return false;}
;lo.prototype._fireEvent=lh;lo.prototype._execute=function(mB,mA,mC){try{mB(mA,mC);}
catch(e){return e;}
;}
;lo.prototype._onCancel=function(){}
;lo.prototype._setOnCancel=function(mD){;}
;lo.prototype._attachCancellationCallback=function(mE){;}
;lo.prototype._captureStackTrace=function(){}
;lo.prototype._attachExtraTrace=function(){}
;lo.prototype._clearCancellationData=function(){}
;lo.prototype._propagateFrom=function(parent,mF){;;}
;function lO(mI,mG,mJ){var mH=this;try{mI(mG,mJ,function(mK){if(typeof mK!==cW){throw new TypeError(ew+lB.toString(mK));}
;mH._attachCancellationCallback(mK);}
);}
catch(e){return e;}
;}
;function lR(mL){if(!this._isCancellable())return this;var mM=this._onCancel();if(mM!==undefined){if(lB.isArray(mM)){mM.push(mL);}
else {this._setOnCancel([mM,mL]);}
;}
else {this._setOnCancel(mL);}
;}
;function lT(){return this._onCancelField;}
;function lH(mN){this._onCancelField=mN;}
;function lF(){this._cancellationParent=undefined;this._onCancelField=undefined;}
;function lm(parent,mO){if((mO&1)!==0){this._cancellationParent=parent;var mP=parent._branchesRemainingToCancel;if(mP===undefined){mP=0;}
;parent._branchesRemainingToCancel=mP+1;}
;if((mO&2)!==0&&parent._isBound()){this._setBoundTo(parent._boundTo);}
;}
;function lg(parent,mQ){if((mQ&2)!==0&&parent._isBound()){this._setBoundTo(parent._boundTo);}
;}
;var kT=lg;function lc(){var mR=this._boundTo;if(mR!==undefined){if(mR instanceof lo){if(mR.isFulfilled()){return mR.value();}
else {return undefined;}
;}
;}
;return mR;}
;function lb(){this._trace=new lE(this._peekContext());}
;function lI(mV,mT){if(ld(mV)){var mU=this._trace;if(mU!==undefined){if(mT)mU=mU._parent;}
;if(mU!==undefined){mU.attachExtraTrace(mV);}
else if(!mV.__stackCleaned__){var mS=lX(mV);lB.notEnumerableProp(mV,I,mS.message+ee+mS.stack.join(ee));lB.notEnumerableProp(mV,cT,true);}
;}
;}
;function lw(nd,mY,name,nb,parent){if(nd===undefined&&mY!==null&&ll){if(parent!==undefined&&parent._returnedNonUndefined())return;if((nb._bitField&65535)===0)return;if(name)name=name+cP;var mW=fl;var nc=fl;if(mY._trace){var na=mY._trace.stack.split(ee);var nh=la(na);for(var i=nh.length-1;i>=0; --i){var ng=nh[i];if(!lS.test(ng)){var mX=ng.match(lp);if(mX){mW=bx+mX[1]+cl+mX[2]+cl+mX[3]+cP;}
;break;}
;}
;if(nh.length>0){var nf=nh[0];for(var i=0;i<na.length; ++i){if(na[i]===nf){if(i>0){nc=ee+na[i-1];}
;break;}
;}
;}
;}
;var ne=cE+name+bN+mW+bJ+fC+nc;nb._warn(ne,true,mY);}
;}
;function lL(name,nj){var ni=name+dO;if(nj)ni+=q+nj+N;return lN(ni);}
;function lN(no,nn,nm){if(!lq.warnings)return;var nl=new lQ(no);var nk;if(nn){nm._attachExtraTrace(nl);}
else if(lq.longStackTraces&&(nk=lo._peekContext())){nk.attachExtraTrace(nl);}
else {var np=lX(nl);nl.stack=np.message+ee+np.stack.join(ee);}
;if(!kS(H,nl)){ls(nl,fl,true);}
;}
;function lJ(nq,nr){for(var i=0;i<nr.length-1; ++i){nr[i].push(bK);nr[i]=nr[i].join(ee);}
;if(i<nr.length){nr[i]=nr[i].join(ee);}
;return nq+ee+nr.join(ee);}
;function lD(ns){for(var i=0;i<ns.length; ++i){if(ns[i].length===0||((i+1<ns.length)&&ns[i][0]===ns[i+1][0])){ns.splice(i,1);i-- ;}
;}
;}
;function lG(nx){var nu=nx[0];for(var i=1;i<nx.length; ++i){var nw=nx[i];var nt=nu.length-1;var ny=nu[nt];var nz=-1;for(var j=nw.length-1;j>=0; --j){if(nw[j]===ny){nz=j;break;}
;}
;for(var j=nz;j>=0; --j){var nv=nw[j];if(nu[nt]===nv){nu.pop();nt-- ;}
else {break;}
;}
;nu=nw;}
;}
;function la(nE){var nB=[];for(var i=0;i<nE.length; ++i){var nD=nE[i];var nC=fe===nD||kU.test(nD);var nA=nC&&lu(nD);if(nC&&!nA){if(ln&&nD.charAt(0)!==cP){nD=fE+nD;}
;nB.push(nD);}
;}
;return nB;}
;function lV(nH){var nG=nH.stack.replace(/\s+$/g,fl).split(ee);for(var i=0;i<nG.length; ++i){var nF=nG[i];if(fe===nF||kU.test(nF)){break;}
;}
;if(i>0){nG=nG.slice(i);}
;return nG;}
;function lX(nK){var nJ=nK.stack;var nI=nK.toString();nJ=typeof nJ===bW&&nJ.length>0?lV(nK):[fe];return {message:nI,stack:la(nJ)};}
;function ls(nM,nP,nO){if(typeof console!==fU){var nL;if(lB.isObject(nM)){var nN=nM.stack;nL=nP+lv(nN,nM);}
else {nL=nP+String(nM);}
;if(typeof lx===cW){lx(nL,nO);}
else if(typeof console.log===cW||typeof console.log===ex){console.log(nL);}
;}
;}
;function lK(name,nR,nQ,nS){var nT=false;try{if(typeof nR===cW){nT=true;if(name===M){nR(nS);}
else {nR(nQ,nS);}
;}
;}
catch(e){lU.throwLater(e);}
;if(name===dx){if(!kS(name,nQ,nS)&&!nT){ls(nQ,dt);}
;}
else {kS(name,nS);}
;}
;function lP(nV){var nX;if(typeof nV===cW){nX=fA+(nV.name||eb)+ft;}
else {nX=nV&&typeof nV.toString===cW?nV.toString():lB.toString(nV);var nU=/\[object [a-zA-Z0-9$_]+\]/;if(nU.test(nX)){try{var nW=JSON.stringify(nV);nX=nW;}
catch(e){}
;}
;if(nX.length===0){nX=fT;}
;}
;return (J+kV(nX)+dl);}
;function kV(oa){var nY=41;if(oa.length<nY){return oa;}
;return oa.substr(0,nY-3)+bb;}
;function le(){return typeof kX===cW;}
;var lu=function(){return false;}
;var lf=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;function kW(oc){var ob=oc.match(lf);if(ob){return {fileName:ob[1],line:parseInt(ob[2],10)};}
;}
;function lt(oh,od){if(!le())return;var ok=oh.stack.split(ee);var og=od.stack.split(ee);var ol=-1;var of=-1;var oi;var oe;for(var i=0;i<ok.length; ++i){var oj=kW(ok[i]);if(oj){oi=oj.fileName;ol=oj.line;break;}
;}
;for(var i=0;i<og.length; ++i){var oj=kW(og[i]);if(oj){oe=oj.fileName;of=oj.line;break;}
;}
;if(ol<0||of<0||!oi||!oe||oi!==oe||ol>=of){return;}
;lu=function(on){if(kR.test(on))return true;var om=kW(on);if(om){if(om.fileName===oi&&(ol<=om.line&&om.line<=of)){return true;}
;}
;return false;}
;}
;function lE(parent){this._parent=parent;this._promisesCreated=0;var length=this._length=1+(parent===undefined?0:parent._length);kX(this,lE);if(length>32)this.uncycle();}
;lB.inherits(lE,Error);lC.CapturedTrace=lE;lE.prototype.uncycle=function(){var length=this._length;if(length<2)return;var ou=[];var op={};for(var i=0,oo=this;oo!==undefined; ++i){ou.push(oo);oo=oo._parent;}
;length=this._length=i;for(var i=length-1;i>=0; --i){var or=ou[i].stack;if(op[or]===undefined){op[or]=i;}
;}
;for(var i=0;i<length; ++i){var ot=ou[i].stack;var oq=op[ot];if(oq!==undefined&&oq!==i){if(oq>0){ou[oq-1]._parent=undefined;ou[oq-1]._length=1;}
;ou[i]._parent=undefined;ou[i]._length=1;var os=i>0?ou[i-1]:this;if(oq<length-1){os._parent=ou[oq+1];os._parent.uncycle();os._length=os._parent._length+1;}
else {os._parent=undefined;os._length=1;}
;var ov=os._length+1;for(var j=i-2;j>=0; --j){ou[j]._length=ov;ov++ ;}
;return;}
;}
;}
;lE.prototype.attachExtraTrace=function(oA){if(oA.__stackCleaned__)return;this.uncycle();var oy=lX(oA);var ow=oy.message;var ox=[oy.stack];var oz=this;while(oz!==undefined){ox.push(la(oz.stack.split(ee)));oz=oz._parent;}
;lG(ox);lD(ox);lB.notEnumerableProp(oA,I,lJ(ow,ox));lB.notEnumerableProp(oA,cT,true);}
;var kX=(function oG(){var oB=/^\s*at\s*/;var oE=function(oH,oI){if(typeof oH===bW)return oH;if(oI.name!==undefined&&oI.message!==undefined){return oI.toString();}
;return lP(oI);}
;if(typeof Error.stackTraceLimit===bf&&typeof Error.captureStackTrace===cW){Error.stackTraceLimit+=6;kU=oB;lv=oE;var oD=Error.captureStackTrace;lu=function(oJ){return kR.test(oJ);}
;return function(oL,oK){Error.stackTraceLimit+=6;oD(oL,oK);Error.stackTraceLimit-=6;}
;}
;var oC=new Error();if(typeof oC.stack===bW&&oC.stack.split(ee)[0].indexOf(bY)>=0){kU=/@/;lv=oE;ln=true;return function oM(o){o.stack=new Error().stack;}
;}
;var oF;try{throw new Error();}
catch(e){oF=(I in e);}
;if(!(I in oC)&&oF&&typeof Error.stackTraceLimit===bf){kU=oB;lv=oE;return function oN(o){Error.stackTraceLimit+=6;try{throw new Error();}
catch(e){o.stack=e.stack;}
;Error.stackTraceLimit-=6;}
;}
;lv=function(oO,oP){if(typeof oO===bW)return oO;if((typeof oP===ex||typeof oP===cW)&&oP.name!==undefined&&oP.message!==undefined){return oP.toString();}
;return lP(oP);}
;return null;}
)([]);if(typeof console!==fU&&typeof console.warn!==fU){lx=function(oQ){console.warn(oQ);}
;if(lB.isNode&&process.stderr.isTTY){lx=function(oS,oT){var oR=oT?ct:fu;console.warn(oR+oS+be);}
;}
else if(!lB.isNode&&typeof (new Error().stack)===bW){lx=function(oU,oV){console.warn(eN+oU,oV?cM:R);}
;}
;}
;var lq={warnings:lk,longStackTraces:false,cancellation:false,monitoring:false};if(lr)lo.longStackTraces();return {longStackTraces:function(){return lq.longStackTraces;}
,warnings:function(){return lq.warnings;}
,cancellation:function(){return lq.cancellation;}
,monitoring:function(){return lq.monitoring;}
,propagateFromFunction:function(){return kT;}
,boundValueFunction:function(){return lc;}
,checkForgottenReturns:lw,setBounds:lt,warn:lN,deprecated:lL,CapturedTrace:lE,fireDomEvent:lW,fireGlobalEvent:ly};}
;}
,{"./errors":12,"./util":36}],'10':[function(oW,oY,oX){B;oY.exports=function(pc){function pb(){return this.value;}
;function pa(){throw this.reason;}
;pc.prototype[dj]=pc.prototype.thenReturn=function(pd){if(pd instanceof pc)pd.suppressUnhandledRejections();return this._then(pb,undefined,undefined,{value:pd},undefined);}
;pc.prototype[dA]=pc.prototype.thenThrow=function(pe){return this._then(pa,undefined,undefined,{reason:pe},undefined);}
;pc.prototype.catchThrow=function(pf){if(arguments.length<=1){return this._then(undefined,pa,undefined,{reason:pf},undefined);}
else {var ph=arguments[1];var pg=function(){throw ph;}
;return this.caught(pf,pg);}
;}
;pc.prototype.catchReturn=function(pk){if(arguments.length<=1){if(pk instanceof pc)pk.suppressUnhandledRejections();return this._then(undefined,pb,undefined,{value:pk},undefined);}
else {var pi=arguments[1];if(pi instanceof pc)pi.suppressUnhandledRejections();var pj=function(){return pi;}
;return this.caught(pk,pj);}
;}
;}
;}
,{}],'11':[function(pl,pn,pm){B;pn.exports=function(pt,ps){var pq=pt.reduce;var pr=pt.all;function pp(){return pr(this);}
;function po(pu,pv){return pq(pu,pv,ps,ps);}
;pt.prototype.each=function(pw){return pq(this,pw,ps,0)._then(pp,undefined,undefined,this,undefined);}
;pt.prototype.mapSeries=function(px){return pq(this,px,ps,ps);}
;pt.each=function(py,pz){return pq(py,pz,ps,0)._then(pp,undefined,undefined,py,undefined);}
;pt.mapSeries=po;}
;}
,{}],'12':[function(pP,pI,pC){B;var pH=pP(fD);var pO=pH.freeze;var pK=pP(ec);var pA=pK.inherits;var pJ=pK.notEnumerableProp;function pD(pT,pV){function pU(pW){if(!(this instanceof pU))return new pU(pW);pJ(this,db,typeof pW===bW?pW:pV);pJ(this,eC,pT);if(Error.captureStackTrace){Error.captureStackTrace(this,this.constructor);}
else {Error.call(this);}
;}
;pA(pU,Error);return pU;}
;var pB,pS;var pL=pD(Y,H);var pN=pD(bT,bi);var pM=pD(eO,dJ);var pF=pD(bO,dn);try{pB=TypeError;pS=RangeError;}
catch(e){pB=pD(fy,dD);pS=pD(dp,y);}
;var pE=(cs+bR).split(cP);for(var i=0;i<pE.length; ++i){if(typeof Array.prototype[pE[i]]===cW){pF.prototype[pE[i]]=Array.prototype[pE[i]];}
;}
;pH.defineProperty(pF.prototype,eJ,{value:0,configurable:false,writable:true,enumerable:true});pF.prototype[fW]=true;var pG=0;pF.prototype.toString=function(){var pX=Array(pG*4+1).join(cP);var qa=ee+pX+dg+ee;pG++ ;pX=Array(pG*4+1).join(cP);for(var i=0;i<this.length; ++i){var qb=this[i]===this?fM:this[i]+fl;var pY=qb.split(ee);for(var j=0;j<pY.length; ++j){pY[j]=pX+pY[j];}
;qb=pY.join(ee);qa+=qb+ee;}
;pG-- ;return qa;}
;function pR(qc){if(!(this instanceof pR))return new pR(qc);pJ(this,eC,ez);pJ(this,db,qc);this.cause=qc;this[fW]=true;if(qc instanceof Error){pJ(this,db,qc.message);pJ(this,I,qc.stack);}
else if(Error.captureStackTrace){Error.captureStackTrace(this,this.constructor);}
;}
;pA(pR,Error);var pQ=Error[eo];if(!pQ){pQ=pO({CancellationError:pN,TimeoutError:pM,OperationalError:pR,RejectionError:pR,AggregateError:pF});pH.defineProperty(Error,eo,{value:pQ,writable:false,enumerable:false,configurable:false});}
;pI.exports={Error:Error,TypeError:pB,RangeError:pS,CancellationError:pQ.CancellationError,OperationalError:pQ.OperationalError,TimeoutError:pQ.TimeoutError,AggregateError:pQ.AggregateError,Warning:pL};}
,{"./es5":13,"./util":36}],'13':[function(qn,qk,qd){var qp=(function(){B;return this===undefined;}
)();if(qp){qk.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:qp,propertyIsWritable:function(qr,qs){var qq=Object.getOwnPropertyDescriptor(qr,qs);return !!(!qq||qq.writable||qq.set);}
};}
else {var qo={}.hasOwnProperty;var ql={}.toString;var qh={}.constructor.prototype;var qi=function(o){var qt=[];for(var qu in o){if(qo.call(o,qu)){qt.push(qu);}
;}
;return qt;}
;var qm=function(o,qv){return {value:o[qv]};}
;var qe=function(o,qw,qy){o[qw]=qy.value;return o;}
;var qf=function(qz){return qz;}
;var qj=function(qA){try{return Object(qA).constructor.prototype;}
catch(e){return qh;}
;}
;var qg=function(qB){try{return ql.call(qB)===fH;}
catch(e){return false;}
;}
;qk.exports={isArray:qg,keys:qi,names:qi,defineProperty:qe,getDescriptor:qm,freeze:qf,getPrototypeOf:qj,isES5:qp,propertyIsWritable:function(){return true;}
};}
;}
,{}],'14':[function(qC,qE,qD){B;qE.exports=function(qG,qF){var qH=qG.map;qG.prototype.filter=function(qJ,qI){return qH(this,qJ,qI,qF);}
;qG.filter=function(qK,qM,qL){return qH(qK,qM,qL,qF);}
;}
;}
,{}],'15':[function(qN,qP,qO){B;qP.exports=function(qW,qX){var qQ=qN(ec);var qT=qW.CancellationError;var ra=qQ.errorObj;function qU(rc,re,rd){this.promise=rc;this.type=re;this.handler=rd;this.called=false;this.cancelPromise=null;}
;qU.prototype.isFinallyHandler=function(){return this.type===0;}
;function qS(rf){this.finallyHandler=rf;}
;qS.prototype._resultCancelled=function(){rb(this.finallyHandler);}
;function rb(rh,rg){if(rh.cancelPromise!=null){if(arguments.length>1){rh.cancelPromise._reject(rg);}
else {rh.cancelPromise._cancel();}
;rh.cancelPromise=null;return true;}
;return false;}
;function qV(){return qR.call(this,this.promise._target()._settledValue());}
;function qY(ri){if(rb(this,ri))return;ra.e=ri;return ra;}
;function qR(ro){var rn=this.promise;var rm=this.handler;if(!this.called){this.called=true;var rk=this.isFinallyHandler()?rm.call(rn._boundValue()):rm.call(rn._boundValue(),ro);if(rk!==undefined){rn._setReturnedNonUndefined();var rj=qX(rk,rn);if(rj instanceof qW){if(this.cancelPromise!=null){if(rj._isCancelled()){var rl=new qT(dh);rn._attachExtraTrace(rl);ra.e=rl;return ra;}
else if(rj.isPending()){rj._attachCancellationCallback(new qS(this));}
;}
;return rj._then(qV,qY,undefined,this,undefined);}
;}
;}
;if(rn.isRejected()){rb(this);ra.e=ro;return ra;}
else {rb(this);return ro;}
;}
;qW.prototype._passThrough=function(rq,rr,rs,rp){if(typeof rq!==cW)return this.then();return this._then(rs,rp,undefined,new qU(this,rr,rq),undefined);}
;qW.prototype.lastly=qW.prototype[fv]=function(rt){return this._passThrough(rt,0,qR,qR);}
;qW.prototype.tap=function(ru){return this._passThrough(ru,1,qR);}
;return qU;}
;}
,{"./util":36}],'16':[function(rv,rx,rw){B;rx.exports=function(rG,rB,rF,rH,rE,rI){var rA=rv(ek);var TypeError=rA.TypeError;var rD=rv(ec);var rJ=rD.errorObj;var rK=rD.tryCatch;var rC=[];function rz(rM,rL,rP){for(var i=0;i<rL.length; ++i){rP._pushContext();var rQ=rK(rL[i])(rM);rP._popContext();if(rQ===rJ){rP._pushContext();var rO=rG.reject(rJ.e);rP._popContext();return rO;}
;var rN=rH(rQ,rP);if(rN instanceof rG)return rN;}
;return null;}
;function ry(rV,rU,rR,rX){if(rI.cancellation()){var rS=new rG(rF);var rW=this._finallyPromise=new rG(rF);this._promise=rS.lastly(function(){return rW;}
);rS._captureStackTrace();rS._setOnCancel(this);}
else {var rT=this._promise=new rG(rF);rT._captureStackTrace();}
;this._stack=rX;this._generatorFunction=rV;this._receiver=rU;this._generator=undefined;this._yieldHandlers=typeof rR===cW?[rR].concat(rC):rC;this._yieldedPromise=null;this._cancellationPhase=false;}
;rD.inherits(ry,rE);ry.prototype._isResolved=function(){return this._promise===null;}
;ry.prototype._cleanup=function(){this._promise=this._generator=null;if(rI.cancellation()&&this._finallyPromise!==null){this._finallyPromise._fulfill();this._finallyPromise=null;}
;}
;ry.prototype._promiseCancelled=function(){if(this._isResolved())return;var rY=typeof this._generator[dj]!==fU;var sb;if(!rY){var sa=new rG.CancellationError(en);rG.coroutine.returnSentinel=sa;this._promise._attachExtraTrace(sa);this._promise._pushContext();sb=rK(this._generator[dA]).call(this._generator,sa);this._promise._popContext();}
else {this._promise._pushContext();sb=rK(this._generator[dj]).call(this._generator,undefined);this._promise._popContext();}
;this._cancellationPhase=true;this._yieldedPromise=null;this._continue(sb);}
;ry.prototype._promiseFulfilled=function(sd){this._yieldedPromise=null;this._promise._pushContext();var sc=rK(this._generator.next).call(this._generator,sd);this._promise._popContext();this._continue(sc);}
;ry.prototype._promiseRejected=function(se){this._yieldedPromise=null;this._promise._attachExtraTrace(se);this._promise._pushContext();var sf=rK(this._generator[dA]).call(this._generator,se);this._promise._popContext();this._continue(sf);}
;ry.prototype._resultCancelled=function(){if(this._yieldedPromise instanceof rG){var sg=this._yieldedPromise;this._yieldedPromise=null;sg.cancel();}
;}
;ry.prototype.promise=function(){return this._promise;}
;ry.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver);this._receiver=this._generatorFunction=undefined;this._promiseFulfilled(undefined);}
;ry.prototype._continue=function(sj){var si=this._promise;if(sj===rJ){this._cleanup();if(this._cancellationPhase){return si.cancel();}
else {return si._rejectCallback(sj.e,false);}
;}
;var sk=sj.value;if(sj.done===true){this._cleanup();if(this._cancellationPhase){return si.cancel();}
else {return si._resolveCallback(sk);}
;}
else {var sh=rH(sk,this._promise);if(!(sh instanceof rG)){sh=rz(sh,this._yieldHandlers,this._promise);if(sh===null){this._promiseRejected(new TypeError(cO.replace(fo,sk)+dd+this._stack.split(ee).slice(1,-7).join(ee)));return;}
;}
;sh=sh._target();var sl=sh._bitField;;if(((sl&50397184)===0)){this._yieldedPromise=sh;sh._proxy(this,null);}
else if(((sl&33554432)!==0)){rG._async.invoke(this._promiseFulfilled,this,sh._value());}
else if(((sl&16777216)!==0)){rG._async.invoke(this._promiseRejected,this,sh._reason());}
else {this._promiseCancelled();}
;}
;}
;rG.coroutine=function(so,sq){if(typeof so!==cW){throw new TypeError(ei);}
;var sn=Object(sq).yieldHandler;var sp=ry;var sm=new Error().stack;return function(){var st=so.apply(this,arguments);var sr=new sp(undefined,undefined,sn,sm);var ss=sr.promise();sr._generator=st;sr._promiseFulfilled(undefined);return ss;}
;}
;rG.coroutine.addYieldHandler=function(su){if(typeof su!==cW){throw new TypeError(da+rD.classString(su));}
;rC.push(su);}
;rG.spawn=function(sw){rI.deprecated(bg,S);if(typeof sw!==cW){return rB(ei);}
;var sv=new ry(sw,this);var sx=sv.promise();sv._run(rG.spawn);return sx;}
;}
;}
,{"./errors":12,"./util":36}],'17':[function(_dereq_,module,exports){B;module.exports=function(Promise,PromiseArray,tryConvertToPromise,INTERNAL,async,getDomain){var util=_dereq_(ec);var canEvaluate=util.canEvaluate;var tryCatch=util.tryCatch;var errorObj=util.errorObj;var reject;if(!true){if(canEvaluate){var thenCallback=function(i){return new Function(fd,bS,cn.replace(/Index/g,i));}
;var promiseSetter=function(i){return new Function(cw,bS,fS.replace(/Index/g,i));}
;var generateHolderClass=function(total){var props=new Array(total);for(var i=0;i<props.length; ++i){props[i]=fK+(i+1);}
;var assignment=props.join(ea)+eY;var cancellationCode=cp+props.map(function(sy){return fN+sy+dr;}
).join(ee);var passedArguments=props.join(dV);var name=bj+total;var code=du;code=code.replace(/\[TheName\]/g,name).replace(/\[TheTotal\]/g,total).replace(/\[ThePassedArguments\]/g,passedArguments).replace(/\[TheProperties\]/g,assignment).replace(/\[CancellationCode\]/g,cancellationCode);return new Function(bI,by,ej,dc,code)(tryCatch,errorObj,Promise,async);}
;var holderClasses=[];var thenCallbacks=[];var promiseSetters=[];for(var i=0;i<8; ++i){holderClasses.push(generateHolderClass(i+1));thenCallbacks.push(thenCallback(i+1));promiseSetters.push(promiseSetter(i+1));}
;reject=function(sz){this._reject(sz);}
;}
;}
;Promise.join=function(){var sC=arguments.length-1;var sJ;if(sC>0&&typeof arguments[sC]===cW){sJ=arguments[sC];if(!true){if(sC<=8&&canEvaluate){var sE=new Promise(INTERNAL);sE._captureStackTrace();var sA=holderClasses[sC-1];var sI=new sA(sJ);var sG=thenCallbacks;for(var i=0;i<sC; ++i){var sH=tryConvertToPromise(arguments[i],sE);if(sH instanceof Promise){sH=sH._target();var sF=sH._bitField;;if(((sF&50397184)===0)){sH._then(sG[i],reject,undefined,sE,sI);promiseSetters[i](sH,sI);sI.asyncNeeded=false;}
else if(((sF&33554432)!==0)){sG[i].call(sE,sH._value(),sI);}
else if(((sF&16777216)!==0)){sE._reject(sH._reason());}
else {sE._cancel();}
;}
else {sG[i].call(sE,sH,sI);}
;}
;if(!sE._isFateSealed()){if(sI.asyncNeeded){var sB=getDomain();if(sB!==null){sI.fn=util.domainBind(sB,sI.fn);}
;}
;sE._setAsyncGuaranteed();sE._setOnCancel(sI);}
;return sE;}
;}
;}
;var sD=[].slice.call(arguments);;if(sJ)sD.pop();var sE=new PromiseArray(sD).promise();return sJ!==undefined?sE.spread(sJ):sE;}
;}
;}
,{"./util":36}],'18':[function(sK,sM,sL){B;sM.exports=function(sT,sP,sR,sU,sS,sW){var sN=sT._getDomain;var sQ=sK(ec);var sY=sQ.tryCatch;var sX=sQ.errorObj;function sV(tc,td,tb,te){this.constructor$(tc);this._promise._captureStackTrace();var ta=sN();this._callback=ta===null?td:sQ.domainBind(ta,td);this._preservedValues=te===sS?new Array(this.length()):null;this._limit=tb;this._inFlight=0;this._queue=[];this._init$(undefined,-2);}
;sQ.inherits(sV,sP);sV.prototype._init=function(){}
;sV.prototype._promiseFulfilled=function(tk,tf){var tp=this._values;var length=this.length();var th=this._preservedValues;var tj=this._limit;if(tf<0){tf=(tf*-1)-1;tp[tf]=tk;if(tj>=1){this._inFlight-- ;this._drainQueue();if(this._isResolved())return true;}
;}
else {if(tj>=1&&this._inFlight>=tj){tp[tf]=tk;this._queue.push(tf);return false;}
;if(th!==null)th[tf]=tk;var ts=this._promise;var tm=this._callback;var tr=ts._boundValue();ts._pushContext();var tq=sY(tm).call(tr,tk,tf,length);var tn=ts._popContext();sW.checkForgottenReturns(tq,tn,th!==null?fm:fG,ts);if(tq===sX){this._reject(tq.e);return true;}
;var ti=sU(tq,this._promise);if(ti instanceof sT){ti=ti._target();var tl=ti._bitField;;if(((tl&50397184)===0)){if(tj>=1)this._inFlight++ ;tp[tf]=ti;ti._proxy(this,(tf+1)*-1);return false;}
else if(((tl&33554432)!==0)){tq=ti._value();}
else if(((tl&16777216)!==0)){this._reject(ti._reason());return true;}
else {this._cancel();return true;}
;}
;tp[tf]=tq;}
;var tg= ++this._totalResolved;if(tg>=length){if(th!==null){this._filter(tp,th);}
else {this._resolve(tp);}
;return true;}
;return false;}
;sV.prototype._drainQueue=function(){var tt=this._queue;var tv=this._limit;var tu=this._values;while(tt.length>0&&this._inFlight<tv){if(this._isResolved())return;var tw=tt.pop();this._promiseFulfilled(tu[tw],tw);}
;}
;sV.prototype._filter=function(tx,tz){var ty=tz.length;var tA=new Array(ty);var j=0;for(var i=0;i<ty; ++i){if(tx[i])tA[j++ ]=tz[i];}
;tA.length=j;this._resolve(tA);}
;sV.prototype.preservedValues=function(){return this._preservedValues;}
;function sO(tB,tE,tF,tD){if(typeof tE!==cW){return sR(da+sQ.classString(tE));}
;var tC=0;if(tF!==undefined){if(typeof tF===ex&&tF!==null){if(typeof tF.concurrency!==bf){return sT.reject(new TypeError(ed+sQ.classString(tF.concurrency)));}
;tC=tF.concurrency;}
else {return sT.reject(new TypeError(bq+sQ.classString(tF)));}
;}
;tC=typeof tC===bf&&isFinite(tC)&&tC>=1?tC:0;return new sV(tB,tE,tC,tD).promise();}
;sT.prototype.map=function(tH,tG){return sO(this,tH,tG,null);}
;sT.map=function(tI,tK,tJ,tL){return sO(tI,tK,tJ,tL);}
;}
;}
,{"./util":36}],'19':[function(tM,tO,tN){B;tO.exports=function(tS,tR,tT,tQ,tU){var tP=tM(ec);var tV=tP.tryCatch;tS.method=function(tW){if(typeof tW!==cW){throw new tS.TypeError(da+tP.classString(tW));}
;return function(){var tY=new tS(tR);tY._captureStackTrace();tY._pushContext();var ua=tV(tW).apply(this,arguments);var tX=tY._popContext();tU.checkForgottenReturns(ua,tX,dP,tY);tY._resolveFromSyncValue(ua);return tY;}
;}
;tS.attempt=tS[es]=function(ug){if(typeof ug!==cW){return tQ(da+tP.classString(ug));}
;var ud=new tS(tR);ud._captureStackTrace();ud._pushContext();var ue;if(arguments.length>1){tU.deprecated(fF);var uf=arguments[1];var uc=arguments[2];ue=tP.isArray(uf)?tV(ug).apply(uc,uf):tV(ug).call(uc,uf);}
else {ue=tV(ug)();}
;var ub=ud._popContext();tU.checkForgottenReturns(ue,ub,bC,ud);ud._resolveFromSyncValue(ue);return ud;}
;tS.prototype._resolveFromSyncValue=function(uh){if(uh===tP.errorObj){this._rejectCallback(uh.e,false);}
else {this._resolveCallback(uh,true);}
;}
;}
;}
,{"./util":36}],'20':[function(ur,un,um){B;var uo=ur(ec);var ui=uo.maybeWrapAsError;var uj=ur(ek);var ut=uj.OperationalError;var uq=ur(fD);function uk(uu){return uu instanceof Error&&uq.getPrototypeOf(uu)===Error.prototype;}
;var ul=/^(?:name|message|stack|cause)$/;function us(uw){var ux;if(uk(uw)){ux=new ut(uw);ux.name=uw.name;ux.message=uw.message;ux.stack=uw.stack;var uv=uq.keys(uw);for(var i=0;i<uv.length; ++i){var uy=uv[i];if(!ul.test(uy)){ux[uy]=uw[uy];}
;}
;return ux;}
;uo.markAsOriginatingFromRejection(uw);return uw;}
;function up(uz,uA){return function(uD,uE){if(uz===null)return;if(uD){var uB=us(ui(uD));uz._attachExtraTrace(uB);uz._reject(uB);}
else if(!uA){uz._fulfill(uE);}
else {var uC=[].slice.call(arguments,1);;uz._fulfill(uC);}
;uz=null;}
;}
;un.exports=up;}
,{"./errors":12,"./es5":13,"./util":36}],'21':[function(uF,uH,uG){B;uH.exports=function(uL){var uK=uF(ec);var uM=uL._async;var uN=uK.tryCatch;var uO=uK.errorObj;function uP(uS,uR){var uQ=this;if(!uK.isArray(uS))return uI.call(uQ,uS,uR);var uT=uN(uR).apply(uQ._boundValue(),[null].concat(uS));if(uT===uO){uM.throwLater(uT.e);}
;}
;function uI(uX,uW){var uV=this;var uU=uV._boundValue();var uY=uX===undefined?uN(uW).call(uU,null):uN(uW).call(uU,null,uX);if(uY===uO){uM.throwLater(uY.e);}
;}
;function uJ(va,vc){var vb=this;if(!va){var ve=new Error(va+fl);ve.cause=va;va=ve;}
;var vd=uN(vc).call(vb._boundValue(),va);if(vd===uO){uM.throwLater(vd.e);}
;}
;uL.prototype.asCallback=uL.prototype.nodeify=function(vh,vg){if(typeof vh==cW){var vf=uI;if(vg!==undefined&&Object(vg).spread){vf=uP;}
;this._then(vf,uJ,undefined,this,vh);}
;return this;}
;}
;}
,{"./util":36}],'22':[function(vi,vk,vj){B;vk.exports=function(){var vn=function(){return new TypeError(cL);}
;var vJ=function(){return new vN.PromiseInspection(this._target());}
;var vK=function(vQ){return vN.reject(new TypeError(vQ));}
;function vB(){}
;var vC={};var vA=vi(ec);var vH;if(vA.isNode){vH=function(){var vR=process.domain;if(vR===undefined)vR=null;return vR;}
;}
else {vH=function(){return null;}
;}
;vA.notEnumerableProp(vN,cQ,vH);var vI=vi(fD);var vG=vi(cD);var vP=new vG();vI.defineProperty(vN,er,{value:vP});var vr=vi(ek);var TypeError=vN.TypeError=vr.TypeError;vN.RangeError=vr.RangeError;var vF=vN.CancellationError=vr.CancellationError;vN.TimeoutError=vr.TimeoutError;vN.OperationalError=vr.OperationalError;vN.RejectionError=vr.OperationalError;vN.AggregateError=vr.AggregateError;var vM=function(){}
;var vw={};var vz={};var vD=vi(bQ)(vN,vM);var vs=vi(df)(vN,vM,vD,vK,vB);var vE=vi(eR)(vN);var vl=vE.create;var vO=vi(bE)(vN,vE);var vm=vO.CapturedTrace;var vL=vi(cH)(vN,vD);var vx=vi(bM)(vz);var vq=vi(de);var vo=vA.errorObj;var vv=vA.tryCatch;function vp(self,vS){if(typeof vS!==cW){throw new TypeError(da+vA.classString(vS));}
;if(self.constructor!==vN){throw new TypeError(ds);}
;}
;function vN(vT){this._bitField=0;this._fulfillmentHandler0=undefined;this._rejectionHandler0=undefined;this._promise0=undefined;this._receiver0=undefined;if(vT!==vM){vp(this,vT);this._resolveFromExecutor(vT);}
;this._promiseCreated();this._fireEvent(bA,this);}
;vN.prototype.toString=function(){return dw;}
;vN.prototype.caught=vN.prototype[dN]=function(vX){var vV=arguments.length;if(vV>1){var vU=new Array(vV-1),j=0,i;for(i=0;i<vV-1; ++i){var vW=arguments[i];if(vA.isObject(vW)){vU[j++ ]=vW;}
else {return vK(W+h+vA.classString(vW));}
;}
;vU.length=j;vX=arguments[i];return this.then(undefined,vx(vU,vX,this));}
;return this.then(undefined,vX);}
;vN.prototype.reflect=function(){return this._then(vJ,vJ,undefined,this,undefined);}
;vN.prototype.then=function(wa,wb){if(vO.warnings()&&arguments.length>0&&typeof wa!==cW&&typeof wb!==cW){var vY=eD+vA.classString(wa);if(arguments.length>1){vY+=dV+vA.classString(wb);}
;this._warn(vY);}
;return this._then(wa,wb,undefined,undefined,undefined);}
;vN.prototype.done=function(wd,we){var wc=this._then(wd,we,undefined,undefined,undefined);wc._setIsFinal();}
;vN.prototype.spread=function(wf){if(typeof wf!==cW){return vK(da+vA.classString(wf));}
;return this.all()._then(wf,undefined,undefined,vw,undefined);}
;vN.prototype.toJSON=function(){var wg={isFulfilled:false,isRejected:false,fulfillmentValue:undefined,rejectionReason:undefined};if(this.isFulfilled()){wg.fulfillmentValue=this.value();wg.isFulfilled=true;}
else if(this.isRejected()){wg.rejectionReason=this.reason();wg.isRejected=true;}
;return wg;}
;vN.prototype.all=function(){if(arguments.length>0){this._warn(cK);}
;return new vs(this).promise();}
;vN.prototype.error=function(wh){return this.caught(vA.originatesFromRejection,wh);}
;vN.getNewLibraryCopy=vk.exports;vN.is=function(wi){return wi instanceof vN;}
;vN.fromNode=vN.fromCallback=function(wj){var wl=new vN(vM);wl._captureStackTrace();var wm=arguments.length>1?!!Object(arguments[1]).multiArgs:false;var wk=vv(wj)(vq(wl,wm));if(wk===vo){wl._rejectCallback(wk.e,true);}
;if(!wl._isFateSealed())wl._setAsyncGuaranteed();return wl;}
;vN.all=function(wn){return new vs(wn).promise();}
;vN.cast=function(wo){var wp=vD(wo);if(!(wp instanceof vN)){wp=new vN(vM);wp._captureStackTrace();wp._setFulfilled();wp._rejectionHandler0=wo;}
;return wp;}
;vN.resolve=vN.fulfilled=vN.cast;vN.reject=vN.rejected=function(wq){var wr=new vN(vM);wr._captureStackTrace();wr._rejectCallback(wq,true);return wr;}
;vN.setScheduler=function(ws){if(typeof ws!==cW){throw new TypeError(da+vA.classString(ws));}
;return vP.setScheduler(ws);}
;vN.prototype._then=function(wu,wv,_,wD,wx){var wA=wx!==undefined;var wC=wA?wx:new vN(vM);var wE=this._target();var wz=wE._bitField;if(!wA){wC._propagateFrom(this,3);wC._captureStackTrace();if(wD===undefined&&((this._bitField&2097152)!==0)){if(!((wz&50397184)===0)){wD=this._boundValue();}
else {wD=wE===this?undefined:this._boundTo;}
;}
;this._fireEvent(cz,this,wC);}
;var wt=vH();if(!((wz&50397184)===0)){var wB,wy,ww=wE._settlePromiseCtx;if(((wz&33554432)!==0)){wy=wE._rejectionHandler0;wB=wu;}
else if(((wz&16777216)!==0)){wy=wE._fulfillmentHandler0;wB=wv;wE._unsetRejectionIsUnhandled();}
else {ww=wE._settlePromiseLateCancellationObserver;wy=new vF(dh);wE._attachExtraTrace(wy);wB=wv;}
;vP.invoke(ww,wE,{handler:wt===null?wB:(typeof wB===cW&&vA.domainBind(wt,wB)),promise:wC,receiver:wD,value:wy});}
else {wE._addCallbacks(wu,wv,wC,wD,wt);}
;return wC;}
;vN.prototype._length=function(){return this._bitField&65535;}
;vN.prototype._isFateSealed=function(){return (this._bitField&117506048)!==0;}
;vN.prototype._isFollowing=function(){return (this._bitField&67108864)===67108864;}
;vN.prototype._setLength=function(wF){this._bitField=(this._bitField&-65536)|(wF&65535);}
;vN.prototype._setFulfilled=function(){this._bitField=this._bitField|33554432;this._fireEvent(g,this);}
;vN.prototype._setRejected=function(){this._bitField=this._bitField|16777216;this._fireEvent(bp,this);}
;vN.prototype._setFollowing=function(){this._bitField=this._bitField|67108864;this._fireEvent(bv,this);}
;vN.prototype._setIsFinal=function(){this._bitField=this._bitField|4194304;}
;vN.prototype._isFinal=function(){return (this._bitField&4194304)>0;}
;vN.prototype._unsetCancelled=function(){this._bitField=this._bitField&(~65536);}
;vN.prototype._setCancelled=function(){this._bitField=this._bitField|65536;this._fireEvent(dS,this);}
;vN.prototype._setWillBeCancelled=function(){this._bitField=this._bitField|8388608;}
;vN.prototype._setAsyncGuaranteed=function(){if(vP.hasCustomScheduler())return;this._bitField=this._bitField|134217728;}
;vN.prototype._receiverAt=function(wG){var wH=wG===0?this._receiver0:this[wG*4-4+3];if(wH===vC){return undefined;}
else if(wH===undefined&&this._isBound()){return this._boundValue();}
;return wH;}
;vN.prototype._promiseAt=function(wI){return this[wI*4-4+2];}
;vN.prototype._fulfillmentHandlerAt=function(wJ){return this[wJ*4-4+0];}
;vN.prototype._rejectionHandlerAt=function(wK){return this[wK*4-4+1];}
;vN.prototype._boundValue=function(){}
;vN.prototype._migrateCallback0=function(wN){var wM=wN._bitField;var wQ=wN._fulfillmentHandler0;var wP=wN._rejectionHandler0;var wO=wN._promise0;var wL=wN._receiverAt(0);if(wL===undefined)wL=vC;this._addCallbacks(wQ,wP,wO,wL,null);}
;vN.prototype._migrateCallbackAt=function(wT,wR){var wW=wT._fulfillmentHandlerAt(wR);var wV=wT._rejectionHandlerAt(wR);var wU=wT._promiseAt(wR);var wS=wT._receiverAt(wR);if(wS===undefined)wS=vC;this._addCallbacks(wW,wV,wU,wS,null);}
;vN.prototype._addCallbacks=function(xe,xa,xc,xd,wY){var wX=this._length();if(wX>=65535-4){wX=0;this._setLength(0);}
;if(wX===0){this._promise0=xc;this._receiver0=xd;if(typeof xe===cW){this._fulfillmentHandler0=wY===null?xe:vA.domainBind(wY,xe);}
;if(typeof xa===cW){this._rejectionHandler0=wY===null?xa:vA.domainBind(wY,xa);}
;}
else {var xb=wX*4-4;this[xb+2]=xc;this[xb+3]=xd;if(typeof xe===cW){this[xb+0]=wY===null?xe:vA.domainBind(wY,xe);}
;if(typeof xa===cW){this[xb+1]=wY===null?xa:vA.domainBind(wY,xa);}
;}
;this._setLength(wX+1);return wX;}
;vN.prototype._proxy=function(xf,xg){this._addCallbacks(undefined,undefined,xg,xf,null);}
;vN.prototype._resolveCallback=function(xh,xn){if(((this._bitField&117506048)!==0))return;if(xh===this)return this._rejectCallback(vn(),false);var xk=vD(xh,this);if(!(xk instanceof vN))return this._fulfill(xh);if(xn)this._propagateFrom(xk,2);var xl=xk._target();if(xl===this){this._reject(vn());return;}
;var xi=xl._bitField;if(((xi&50397184)===0)){var xm=this._length();if(xm>0)xl._migrateCallback0(this);for(var i=1;i<xm; ++i){xl._migrateCallbackAt(this,i);}
;this._setFollowing();this._setLength(0);this._setFollowee(xl);}
else if(((xi&33554432)!==0)){this._fulfill(xl._value());}
else if(((xi&16777216)!==0)){this._reject(xl._reason());}
else {var xj=new vF(dh);xl._attachExtraTrace(xj);this._reject(xj);}
;}
;vN.prototype._rejectCallback=function(xr,xp,xq){var xo=vA.ensureErrorObject(xr);var xs=xo===xr;if(!xs&&!xq&&vO.warnings()){var xt=cI+vA.classString(xr);this._warn(xt,true);}
;this._attachExtraTrace(xo,xp?xs:false);this._reject(xr);}
;vN.prototype._resolveFromExecutor=function(xw){var xu=this;this._captureStackTrace();this._pushContext();var xv=true;var r=this._execute(xw,function(xx){xu._resolveCallback(xx);}
,function(xy){xu._rejectCallback(xy,xv);}
);xv=false;this._popContext();if(r!==undefined){xu._rejectCallback(r,true);}
;}
;vN.prototype._settlePromiseFromHandler=function(xC,xE,xA,xD){var xB=xD._bitField;if(((xB&65536)!==0))return;xD._pushContext();var x;if(xE===vw){if(!xA||typeof xA.length!==bf){x=vo;x.e=new TypeError(G+vA.classString(xA));}
else {x=vv(xC).apply(this._boundValue(),xA);}
;}
else {x=vv(xC).call(xE,xA);}
;var xz=xD._popContext();xB=xD._bitField;if(((xB&65536)!==0))return;if(x===vz){xD._reject(xA);}
else if(x===vo){xD._rejectCallback(x.e,false);}
else {vO.checkForgottenReturns(x,xz,fl,xD,this);xD._resolveCallback(x);}
;}
;vN.prototype._target=function(){var xF=this;while(xF._isFollowing())xF=xF._followee();return xF;}
;vN.prototype._followee=function(){return this._rejectionHandler0;}
;vN.prototype._setFollowee=function(xG){this._rejectionHandler0=xG;}
;vN.prototype._settlePromise=function(xM,xL,xN,xI){var xK=xM instanceof vN;var xJ=this._bitField;var xH=((xJ&134217728)!==0);if(((xJ&65536)!==0)){if(xK)xM._invokeInternalOnCancel();if(xN instanceof vL&&xN.isFinallyHandler()){xN.cancelPromise=xM;if(vv(xL).call(xN,xI)===vo){xM._reject(vo.e);}
;}
else if(xL===vJ){xM._fulfill(vJ.call(xN));}
else if(xN instanceof vB){xN._promiseCancelled(xM);}
else if(xK||xM instanceof vs){xM._cancel();}
else {xN.cancel();}
;}
else if(typeof xL===cW){if(!xK){xL.call(xN,xI,xM);}
else {if(xH)xM._setAsyncGuaranteed();this._settlePromiseFromHandler(xL,xN,xI,xM);}
;}
else if(xN instanceof vB){if(!xN._isResolved()){if(((xJ&33554432)!==0)){xN._promiseFulfilled(xI,xM);}
else {xN._promiseRejected(xI,xM);}
;}
;}
else if(xK){if(xH)xM._setAsyncGuaranteed();if(((xJ&33554432)!==0)){xM._fulfill(xI);}
else {xM._reject(xI);}
;}
;}
;vN.prototype._settlePromiseLateCancellationObserver=function(xQ){var xP=xQ.handler;var xO=xQ.promise;var xS=xQ.receiver;var xR=xQ.value;if(typeof xP===cW){if(!(xO instanceof vN)){xP.call(xS,xR,xO);}
else {this._settlePromiseFromHandler(xP,xS,xR,xO);}
;}
else if(xO instanceof vN){xO._reject(xR);}
;}
;vN.prototype._settlePromiseCtx=function(xT){this._settlePromise(xT.promise,xT.handler,xT.receiver,xT.value);}
;vN.prototype._settlePromise0=function(xU,xX,xY){var xV=this._promise0;var xW=this._receiverAt(0);this._promise0=undefined;this._receiver0=undefined;this._settlePromise(xV,xU,xW,xX);}
;vN.prototype._clearCallbackDataAtIndex=function(ya){var yb=ya*4-4;this[yb+2]=this[yb+3]=this[yb+0]=this[yb+1]=undefined;}
;vN.prototype._fulfill=function(yc){var ye=this._bitField;if(((ye&117506048)>>>16))return;if(yc===this){var yd=vn();this._attachExtraTrace(yd);return this._reject(yd);}
;this._setFulfilled();this._rejectionHandler0=yc;if((ye&65535)>0){if(((ye&134217728)!==0)){this._settlePromises();}
else {vP.settlePromises(this);}
;}
;}
;vN.prototype._reject=function(yf){var yg=this._bitField;if(((yg&117506048)>>>16))return;this._setRejected();this._fulfillmentHandler0=yf;if(this._isFinal()){return vP.fatalError(yf,vA.isNode);}
;if((yg&65535)>0){vP.settlePromises(this);}
else {this._ensurePossibleRejectionHandled();}
;}
;vN.prototype._fulfillPromises=function(yh,yk){for(var i=1;i<yh;i++ ){var yi=this._fulfillmentHandlerAt(i);var yj=this._promiseAt(i);var yl=this._receiverAt(i);this._clearCallbackDataAtIndex(i);this._settlePromise(yj,yi,yl,yk);}
;}
;vN.prototype._rejectPromises=function(ym,yn){for(var i=1;i<ym;i++ ){var yo=this._rejectionHandlerAt(i);var yp=this._promiseAt(i);var yq=this._receiverAt(i);this._clearCallbackDataAtIndex(i);this._settlePromise(yp,yo,yq,yn);}
;}
;vN.prototype._settlePromises=function(){var yu=this._bitField;var ys=(yu&65535);if(ys>0){if(((yu&16842752)!==0)){var yr=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,yr,yu);this._rejectPromises(ys,yr);}
else {var yt=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,yt,yu);this._fulfillPromises(ys,yt);}
;this._setLength(0);}
;this._clearCancellationData();}
;vN.prototype._settledValue=function(){var yv=this._bitField;if(((yv&33554432)!==0)){return this._rejectionHandler0;}
else if(((yv&16777216)!==0)){return this._fulfillmentHandler0;}
;}
;function vt(v){this.promise._resolveCallback(v);}
;function vu(v){this.promise._rejectCallback(v,false);}
;vN.defer=vN.pending=function(){vO.deprecated(eS,cv);var yw=new vN(vM);return {promise:yw,resolve:vt,reject:vu};}
;vA.notEnumerableProp(vN,bc,vn);vi(eW)(vN,vM,vD,vK,vO);vi(fw)(vN,vM,vD,vO);vi(cj)(vN,vs,vK,vO);vi(cX)(vN);vi(ep)(vN);vi(eu)(vN,vs,vD,vM,vP,vH);vN.Promise=vN;vN.version=fJ;vi(eI)(vN,vs,vK,vD,vM,vO);vi(cm)(vN);vi(dU)(vN,vK,vD,vl,vM,vO);vi(b)(vN,vM,vO);vi(el)(vN,vK,vM,vD,vB,vO);vi(ci)(vN);vi(bL)(vN,vM);vi(fQ)(vN,vs,vD,vK);vi(bV)(vN,vM,vD,vK);vi(eU)(vN,vs,vK,vD,vM,vO);vi(fp)(vN,vs,vO);vi(fL)(vN,vs,vK);vi(U)(vN,vM);vi(cg)(vN,vM);vi(bu)(vN);vA.toFastProperties(vN);vA.toFastProperties(vN.prototype);function vy(yx){var p=new vN(vM);p._fulfillmentHandler0=yx;p._rejectionHandler0=yx;p._promise0=yx;p._receiver0=yx;}
;vy({a:1});vy({b:2});vy({c:3});vy(1);vy(function(){}
);vy(undefined);vy(false);vy(new vN(vM));vO.setBounds(vG.firstLineError,vA.lastLineError);return vN;}
;}
,{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],'23':[function(yy,yA,yz){B;yA.exports=function(yI,yH,yJ,yC,yG){var yF=yy(ec);var yB=yF.isArray;function yD(yK){switch(yK){case -2:return [];case -3:return {};};}
;function yE(yL){var yM=this._promise=new yI(yH);if(yL instanceof yI){yM._propagateFrom(yL,3);}
;yM._setOnCancel(this);this._values=yL;this._length=0;this._totalResolved=0;this._init(undefined,-2);}
;yF.inherits(yE,yG);yE.prototype.length=function(){return this._length;}
;yE.prototype.promise=function(){return this._promise;}
;yE.prototype._init=function yP(_,yR){var yQ=yJ(this._values,this._promise);if(yQ instanceof yI){yQ=yQ._target();var yO=yQ._bitField;;this._values=yQ;if(((yO&50397184)===0)){this._promise._setAsyncGuaranteed();return yQ._then(yP,this._reject,undefined,this,yR);}
else if(((yO&33554432)!==0)){yQ=yQ._value();}
else if(((yO&16777216)!==0)){return this._reject(yQ._reason());}
else {return this._cancel();}
;}
;yQ=yF.asArray(yQ);if(yQ===null){var yN=yC(fa+yF.classString(yQ)).reason();this._promise._rejectCallback(yN,false);return;}
;if(yQ.length===0){if(yR===-5){this._resolveEmptyArray();}
else {this._resolve(yD(yR));}
;return;}
;this._iterate(yQ);}
;yE.prototype._iterate=function(yV){var yS=this.getActualLength(yV.length);this._length=yS;this._values=this.shouldCopyValues()?new Array(yS):this._values;var yW=this._promise;var yX=false;var yT=null;for(var i=0;i<yS; ++i){var yU=yJ(yV[i],yW);if(yU instanceof yI){yU=yU._target();yT=yU._bitField;}
else {yT=null;}
;if(yX){if(yT!==null){yU.suppressUnhandledRejections();}
;}
else if(yT!==null){if(((yT&50397184)===0)){yU._proxy(this,i);this._values[i]=yU;}
else if(((yT&33554432)!==0)){yX=this._promiseFulfilled(yU._value(),i);}
else if(((yT&16777216)!==0)){yX=this._promiseRejected(yU._reason(),i);}
else {yX=this._promiseCancelled(i);}
;}
else {yX=this._promiseFulfilled(yU,i);}
;}
;if(!yX)yW._setAsyncGuaranteed();}
;yE.prototype._isResolved=function(){return this._values===null;}
;yE.prototype._resolve=function(yY){this._values=null;this._promise._fulfill(yY);}
;yE.prototype._cancel=function(){if(this._isResolved()||!this._promise._isCancellable())return;this._values=null;this._promise._cancel();}
;yE.prototype._reject=function(za){this._values=null;this._promise._rejectCallback(za,false);}
;yE.prototype._promiseFulfilled=function(zd,zb){this._values[zb]=zd;var zc= ++this._totalResolved;if(zc>=this._length){this._resolve(this._values);return true;}
;return false;}
;yE.prototype._promiseCancelled=function(){this._cancel();return true;}
;yE.prototype._promiseRejected=function(ze){this._totalResolved++ ;this._reject(ze);return true;}
;yE.prototype._resultCancelled=function(){if(this._isResolved())return;var zf=this._values;this._cancel();if(zf instanceof yI){zf.cancel();}
else {for(var i=0;i<zf.length; ++i){if(zf[i] instanceof yI){zf[i].cancel();}
;}
;}
;}
;yE.prototype.shouldCopyValues=function(){return true;}
;yE.prototype.getActualLength=function(zg){return zg;}
;return yE;}
;}
,{"./util":36}],'24':[function(_dereq_,module,exports){B;module.exports=function(Promise,INTERNAL){var THIS={};var util=_dereq_(ec);var nodebackForPromise=_dereq_(de);var withAppended=util.withAppended;var maybeWrapAsError=util.maybeWrapAsError;var canEvaluate=util.canEvaluate;var TypeError=_dereq_(ek).TypeError;var defaultSuffix=fb;var defaultPromisified={__dx:true};var noCopyProps=[eV,eJ,eC,dG,k,ca,F,eL];var noCopyPropsPattern=new RegExp(fc+noCopyProps.join(bU)+ev);var defaultFilter=function(name){return util.isIdentifier(name)&&name.charAt(0)!==dL&&name!==m;}
;function propsFilter(zh){return !noCopyPropsPattern.test(zh);}
;function isPromisified(zi){try{return zi.__dx===true;}
catch(e){return false;}
;}
;function hasPromisified(zk,zj,zl){var zm=util.getDataPropertyOrDefault(zk,zj+zl,defaultPromisified);return zm?isPromisified(zm):false;}
;function checkValid(zp,zn,zq){for(var i=0;i<zp.length;i+=2){var zr=zp[i];if(zq.test(zr)){var zo=zr.replace(zq,fl);for(var j=0;j<zp.length;j+=2){if(zp[j]===zo){throw new TypeError(cB.replace(fo,zn));}
;}
;}
;}
;}
;function promisifiableMethods(zt,zu,zs,zx){var zv=util.inheritedDataKeys(zt);var zw=[];for(var i=0;i<zv.length; ++i){var zz=zv[i];var zy=zt[zz];var zA=zx===defaultFilter?true:defaultFilter(zz,zy,zt);if(typeof zy===cW&&!isPromisified(zy)&&!hasPromisified(zt,zz,zu)&&zx(zz,zy,zt,zA)){zw.push(zz,zy);}
;}
;checkValid(zw,zu,zs);return zw;}
;var escapeIdentRegex=function(zB){return zB.replace(/([$])/,fP);}
;var makeNodePromisifiedEval;if(!true){var switchCaseArgumentOrder=function(zC){var zD=[zC];var zE=Math.max(0,zC-1-3);for(var i=zC-1;i>=zE; --i){zD.push(i);}
;for(var i=zC+1;i<=3; ++i){zD.push(i);}
;return zD;}
;var argumentSequence=function(zF){return util.filledRange(zF,bP,fl);}
;var parameterDeclaration=function(zG){return util.filledRange(Math.max(zG,3),bP,fl);}
;var parameterCount=function(zH){if(typeof zH.length===bf){return Math.max(Math.min(zH.length,1023+1),0);}
;return 0;}
;makeNodePromisifiedEval=function(callback,receiver,originalName,fn,_,multiArgs){var newParameterCount=Math.max(0,parameterCount(fn)-1);var argumentOrder=switchCaseArgumentOrder(newParameterCount);var shouldProxyThis=typeof callback===bW||receiver===THIS;function generateCallForArgumentCount(zI){var zJ=argumentSequence(zI).join(dV);var zK=zI>0?dV:fl;var zL;if(shouldProxyThis){zL=dF;}
else {zL=receiver===undefined?dC:fr;}
;return zL.replace(cS,zJ).replace(dV,zK);}
;function generateArgumentSwitchCase(){var zM=fl;for(var i=0;i<argumentOrder.length; ++i){zM+=bF+argumentOrder[i]+cl+generateCallForArgumentCount(argumentOrder[i]);}
;zM+=dm.replace(bD,(shouldProxyThis?dW:cd));return zM;}
;var getFunctionCode=typeof callback===bW?(bm+callback+eK):bw;var body=C+multiArgs+dX.replace(eA,generateArgumentSwitchCase()).replace(fB,getFunctionCode);body=body.replace(cN,parameterDeclaration(newParameterCount));return new Function(ej,bw,fk,cF,cY,fi,bI,by,dq,dK,body)(Promise,fn,receiver,withAppended,maybeWrapAsError,nodebackForPromise,util.tryCatch,util.errorObj,util.notEnumerableProp,INTERNAL);}
;}
;function makeNodePromisifiedClosure(zQ,zS,_,zR,zN,zP){var zT=(function(){return this;}
)();var zU=zQ;if(typeof zU===bW){zQ=zR;}
;function zO(){var zV=zS;if(zS===THIS)zV=this;var zW=new Promise(INTERNAL);zW._captureStackTrace();var zY=typeof zU===bW&&this!==zT?this[zU]:zQ;var zX=nodebackForPromise(zW,zP);try{zY.apply(zV,withAppended(arguments,zX));}
catch(e){zW._rejectCallback(maybeWrapAsError(e),true,true);}
;if(!zW._isFateSealed())zW._setAsyncGuaranteed();return zW;}
;util.notEnumerableProp(zO,eL,true);return zO;}
;var makeNodePromisified=canEvaluate?makeNodePromisifiedEval:makeNodePromisifiedClosure;function promisifyAll(Ab,Ac,Aa,Ag,Aj){var Ae=new RegExp(escapeIdentRegex(Ac)+fh);var Al=promisifiableMethods(Ab,Ac,Ae,Aa);for(var i=0,Ad=Al.length;i<Ad;i+=2){var Ai=Al[i];var Ah=Al[i+1];var Ak=Ai+Ac;if(Ag===makeNodePromisified){Ab[Ak]=makeNodePromisified(Ai,THIS,Ai,Ah,Ac,Aj);}
else {var Af=Ag(Ah,function(){return makeNodePromisified(Ai,THIS,Ai,Ah,Ac,Aj);}
);util.notEnumerableProp(Af,eL,true);Ab[Ak]=Af;}
;}
;util.toFastProperties(Ab);return Ab;}
;function promisify(Am,Ao,An){return makeNodePromisified(Am,Ao,undefined,Am,null,An);}
;Promise.promisify=function(Ap,Ar){if(typeof Ap!==cW){throw new TypeError(da+util.classString(Ap));}
;if(isPromisified(Ap)){return Ap;}
;Ar=Object(Ar);var At=Ar.context===undefined?THIS:Ar.context;var Aq=!!Ar.multiArgs;var As=promisify(Ap,At,Aq);util.copyDescriptors(Ap,As,propsFilter);return As;}
;Promise.promisifyAll=function(AB,Az){if(typeof AB!==cW&&typeof AB!==ex){throw new TypeError(dE);}
;Az=Object(Az);var Ax=!!Az.multiArgs;var Au=Az.suffix;if(typeof Au!==bW)Au=defaultSuffix;var Ay=Az.filter;if(typeof Ay!==cW)Ay=defaultFilter;var AA=Az.promisifier;if(typeof AA!==cW)AA=makeNodePromisified;if(!util.isIdentifier(Au)){throw new RangeError(fz);}
;var Av=util.inheritedDataKeys(AB);for(var i=0;i<Av.length; ++i){var Aw=AB[Av[i]];if(Av[i]!==m&&util.isClass(Aw)){promisifyAll(Aw.prototype,Au,Ay,AA,Ax);promisifyAll(Aw,Au,Ay,AA,Ax);}
;}
;return promisifyAll(AB,Au,Ay,AA,Ax);}
;}
;}
,{"./errors":12,"./nodeback":20,"./util":36}],'25':[function(AC,AE,AD){B;AE.exports=function(AL,AG,AM,AK){var AJ=AC(ec);var AQ=AJ.isObject;var AF=AC(fD);var AN;if(typeof Map===cW)AN=Map;var AI=(function(){var AR=0;var AS=0;function AT(AU,AV){this[AR]=AU;this[AR+AS]=AV;AR++ ;}
;return function AY(AW){AS=AW.size;AR=0;var AX=new Array(AW.size*2);AW.forEach(AT,AX);return AX;}
;}
)();var AP=function(Bd){var Ba=new AN();var length=Bd.length/2|0;for(var i=0;i<length; ++i){var Bc=Bd[length+i];var Bb=Bd[i];Ba.set(Bc,Bb);}
;return Ba;}
;function AH(Be){var Bh=false;var Bj;if(AN!==undefined&&Be instanceof AN){Bj=AI(Be);Bh=true;}
else {var Bf=AF.keys(Be);var Bg=Bf.length;Bj=new Array(Bg*2);for(var i=0;i<Bg; ++i){var Bi=Bf[i];Bj[i]=Be[Bi];Bj[i+Bg]=Bi;}
;}
;this.constructor$(Bj);this._isMap=Bh;this._init$(undefined,-3);}
;AJ.inherits(AH,AG);AH.prototype._init=function(){}
;AH.prototype._promiseFulfilled=function(Bo,Bk){this._values[Bk]=Bo;var Bl= ++this._totalResolved;if(Bl>=this._length){var Bm;if(this._isMap){Bm=AP(this._values);}
else {Bm={};var Bp=this.length();for(var i=0,Bn=this.length();i<Bn; ++i){Bm[this._values[i+Bp]]=this._values[i];}
;}
;this._resolve(Bm);return true;}
;return false;}
;AH.prototype.shouldCopyValues=function(){return false;}
;AH.prototype.getActualLength=function(Bq){return Bq>>1;}
;function AO(Br){var Bt;var Bs=AM(Br);if(!AQ(Bs)){return AK(w);}
else if(Bs instanceof AL){Bt=Bs._then(AL.props,undefined,undefined,undefined,undefined);}
else {Bt=new AH(Bs).promise();}
;if(Bs instanceof AL){Bt._propagateFrom(Bs,2);}
;return Bt;}
;AL.prototype.props=function(){return AO(this);}
;AL.props=function(Bu){return AO(Bu);}
;}
;}
,{"./es5":13,"./util":36}],'26':[function(Bw,By,Bx){B;function Bz(BA,BE,BB,BD,BC){for(var j=0;j<BC; ++j){BB[j+BD]=BA[j+BE];BA[j+BE]=void 0;}
;}
;function Bv(BF){this._capacity=BF;this._length=0;this._front=0;}
;Bv.prototype._willBeOverCapacity=function(BG){return this._capacity<BG;}
;Bv.prototype._pushOne=function(BH){var length=this.length();this._checkCapacity(length+1);var i=(this._front+length)&(this._capacity-1);this[i]=BH;this._length=length+1;}
;Bv.prototype._unshiftOne=function(BK){var BJ=this._capacity;this._checkCapacity(this.length()+1);var BI=this._front;var i=((((BI-1)&(BJ-1))^BJ)-BJ);this[i]=BK;this._front=i;this._length=this.length()+1;}
;Bv.prototype.unshift=function(BM,BL,BN){this._unshiftOne(BN);this._unshiftOne(BL);this._unshiftOne(BM);}
;Bv.prototype.push=function(BR,BP,BQ){var length=this.length()+3;if(this._willBeOverCapacity(length)){this._pushOne(BR);this._pushOne(BP);this._pushOne(BQ);return;}
;var j=this._front+length-3;this._checkCapacity(length);var BO=this._capacity-1;this[(j+0)&BO]=BR;this[(j+1)&BO]=BP;this[(j+2)&BO]=BQ;this._length=length;}
;Bv.prototype.shift=function(){var BS=this._front,BT=this[BS];this[BS]=undefined;this._front=(BS+1)&(this._capacity-1);this._length-- ;return BT;}
;Bv.prototype.length=function(){return this._length;}
;Bv.prototype._checkCapacity=function(BU){if(this._capacity<BU){this._resizeTo(this._capacity<<1);}
;}
;Bv.prototype._resizeTo=function(BX){var BY=this._capacity;this._capacity=BX;var BV=this._front;var length=this._length;var BW=(BV+length)&(BY-1);Bz(this,0,this,BY,BW);}
;By.exports=Bv;}
,{}],'27':[function(Ca,Cc,Cb){B;Cc.exports=function(Ch,Cd,Ci,Cf){var Ce=Ca(ec);var Cj=function(Ck){return Ck.then(function(Cl){return Cg(Cl,Ck);}
);}
;function Cg(Cm,parent){var Cp=Ci(Cm);if(Cp instanceof Ch){return Cj(Cp);}
else {Cm=Ce.asArray(Cm);if(Cm===null)return Cf(fa+Ce.classString(Cm));}
;var Co=new Ch(Cd);if(parent!==undefined){Co._propagateFrom(parent,3);}
;var Cs=Co._fulfill;var Cr=Co._reject;for(var i=0,Cq=Cm.length;i<Cq; ++i){var Cn=Cm[i];if(Cn===undefined&&!(i in Cm)){continue;}
;Ch.cast(Cn)._then(Cs,Cr,undefined,Co,null);}
;return Co;}
;Ch.race=function(Ct){return Cg(Ct,undefined);}
;Ch.prototype.race=function(){return Cg(this,undefined);}
;}
;}
,{"./util":36}],'28':[function(Cu,Cw,Cv){B;Cw.exports=function(CF,Cz,CD,CG,CE,CH){var Cx=CF._getDomain;var CC=Cu(ec);var CI=CC.tryCatch;function Cy(CP,CL,CN,CO){this.constructor$(CP);var CM=Cx();this._fn=CM===null?CL:CC.domainBind(CM,CL);if(CN!==undefined){CN=CF.resolve(CN);CN._attachCancellationCallback(this);}
;this._initialValue=CN;this._currentCancellable=null;if(CO===CE){this._eachValues=Array(this._length);}
else if(CO===0){this._eachValues=null;}
else {this._eachValues=undefined;}
;this._promise._captureStackTrace();this._init$(undefined,-5);}
;CC.inherits(Cy,Cz);Cy.prototype._gotAccum=function(CQ){if(this._eachValues!==undefined&&this._eachValues!==null&&CQ!==CE){this._eachValues.push(CQ);}
;}
;Cy.prototype._eachComplete=function(CR){if(this._eachValues!==null){this._eachValues.push(CR);}
;return this._eachValues;}
;Cy.prototype._init=function(){}
;Cy.prototype._resolveEmptyArray=function(){this._resolve(this._eachValues!==undefined?this._eachValues:this._initialValue);}
;Cy.prototype.shouldCopyValues=function(){return false;}
;Cy.prototype._resolve=function(CS){this._promise._resolveCallback(CS);this._values=null;}
;Cy.prototype._resultCancelled=function(CT){if(CT===this._initialValue)return this._cancel();if(this._isResolved())return;this._resultCancelled$();if(this._currentCancellable instanceof CF){this._currentCancellable.cancel();}
;if(this._initialValue instanceof CF){this._initialValue.cancel();}
;}
;Cy.prototype._iterate=function(CU){this._values=CU;var CW;var i;var length=CU.length;if(this._initialValue!==undefined){CW=this._initialValue;i=0;}
else {CW=CF.resolve(CU[0]);i=1;}
;this._currentCancellable=CW;if(!CW.isRejected()){for(;i<length; ++i){var CV={accum:null,value:CU[i],index:i,length:length,array:this};CW=CW._then(CB,undefined,undefined,CV,undefined);}
;}
;if(this._eachValues!==undefined){CW=CW._then(this._eachComplete,undefined,undefined,this,undefined);}
;CW._then(CJ,CJ,undefined,CW,this);}
;CF.prototype.reduce=function(CY,CX){return CA(this,CY,CX,null);}
;CF.reduce=function(Da,Dd,Db,Dc){return CA(Da,Dd,Db,Dc);}
;function CJ(De,Df){if(this.isFulfilled()){Df._resolve(De);}
else {Df._reject(De);}
;}
;function CA(Dg,Dj,Dh,Dk){if(typeof Dj!==cW){return CD(da+CC.classString(Dj));}
;var Di=new Cy(Dg,Dj,Dh,Dk);return Di.promise();}
;function CB(Dl){this.accum=Dl;this.array._gotAccum(Dl);var Dm=CG(this.value,this.array._promise);if(Dm instanceof CF){this.array._currentCancellable=Dm;return Dm._then(CK,undefined,undefined,this,undefined);}
else {return CK.call(this,Dm);}
;}
;function CK(Dq){var Dr=this.array;var Dp=Dr._promise;var Ds=CI(Dr._fn);Dp._pushContext();var Do;if(Dr._eachValues!==undefined){Do=Ds.call(Dp._boundValue(),Dq,this.index,this.length);}
else {Do=Ds.call(Dp._boundValue(),this.accum,Dq,this.index,this.length);}
;if(Do instanceof CF){Dr._currentCancellable=Do;}
;var Dn=Dp._popContext();CH.checkForgottenReturns(Do,Dn,Dr._eachValues!==undefined?fg:bH,Dp);return Do;}
;}
;}
,{"./util":36}],'29':[function(DB,Dx,Du){B;var Dt=DB(ec);var Dw;var Dz=function(){throw new Error(bd);}
;var Dv=Dt.getNativePromise();if(Dt.isNode&&typeof MutationObserver===fU){var DA=global.setImmediate;var Dy=process.nextTick;Dw=Dt.isRecentNode?function(DD){DA.call(global,DD);}
:function(DE){Dy.call(process,DE);}
;}
else if(typeof Dv===cW&&typeof Dv.resolve===cW){var DC=Dv.resolve();Dw=function(DF){DC.then(DF);}
;}
else if((typeof MutationObserver!==fU)&&!(typeof window!==fU&&window.navigator&&(window.navigator.standalone||window.cordova))){Dw=(function(){var DJ=document.createElement(D);var DL={attributes:true};var DG=false;var DK=document.createElement(D);var DH=new MutationObserver(function(){DJ.classList.toggle(cV);DG=false;}
);DH.observe(DK,DL);var DI=function(){if(DG)return;DG=true;DK.classList.toggle(cV);}
;return function DN(DM){var o=new MutationObserver(function(){o.disconnect();DM();}
);o.observe(DJ,DL);DI();}
;}
)();}
else if(typeof setImmediate!==fU){Dw=function(DO){setImmediate(DO);}
;}
else if(typeof setTimeout!==fU){Dw=function(DP){setTimeout(DP,0);}
;}
else {Dw=Dz;}
;Dx.exports=Dw;}
,{"./util":36}],'30':[function(DQ,DS,DR){B;DS.exports=function(DX,DU,DY){var DT=DX.PromiseInspection;var DW=DQ(ec);function DV(Ea){this.constructor$(Ea);}
;DW.inherits(DV,DU);DV.prototype._promiseResolved=function(Eb,Ed){this._values[Eb]=Ed;var Ec= ++this._totalResolved;if(Ec>=this._length){this._resolve(this._values);return true;}
;return false;}
;DV.prototype._promiseFulfilled=function(Ef,Ee){var Eg=new DT();Eg._bitField=33554432;Eg._settledValueField=Ef;return this._promiseResolved(Ee,Eg);}
;DV.prototype._promiseRejected=function(Ei,Eh){var Ej=new DT();Ej._bitField=16777216;Ej._settledValueField=Ei;return this._promiseResolved(Eh,Ej);}
;DX.settle=function(Ek){DY.deprecated(di,dv);return new DV(Ek).promise();}
;DX.prototype.settle=function(){return DX.settle(this);}
;}
;}
,{"./util":36}],'31':[function(El,En,Em){B;En.exports=function(Eu,Eq,Et){var Es=El(ec);var RangeError=El(ek).RangeError;var Ep=El(ek).AggregateError;var Eo=Es.isArray;var Ev={};function Ew(Ex){this.constructor$(Ex);this._howMany=0;this._unwrap=false;this._initialized=false;}
;Es.inherits(Ew,Eq);Ew.prototype._init=function(){if(!this._initialized){return;}
;if(this._howMany===0){this._resolve([]);return;}
;this._init$(undefined,-5);var Ey=Eo(this._values);if(!this._isResolved()&&Ey&&this._howMany>this._canPossiblyFulfill()){this._reject(this._getRangeError(this.length()));}
;}
;Ew.prototype.init=function(){this._initialized=true;this._init();}
;Ew.prototype.setUnwrap=function(){this._unwrap=true;}
;Ew.prototype.howMany=function(){return this._howMany;}
;Ew.prototype.setHowMany=function(Ez){this._howMany=Ez;}
;Ew.prototype._promiseFulfilled=function(EA){this._addFulfilled(EA);if(this._fulfilled()===this.howMany()){this._values.length=this.howMany();if(this.howMany()===1&&this._unwrap){this._resolve(this._values[0]);}
else {this._resolve(this._values);}
;return true;}
;return false;}
;Ew.prototype._promiseRejected=function(EB){this._addRejected(EB);return this._checkOutcome();}
;Ew.prototype._promiseCancelled=function(){if(this._values instanceof Eu||this._values==null){return this._cancel();}
;this._addRejected(Ev);return this._checkOutcome();}
;Ew.prototype._checkOutcome=function(){if(this.howMany()>this._canPossiblyFulfill()){var e=new Ep();for(var i=this.length();i<this._values.length; ++i){if(this._values[i]!==Ev){e.push(this._values[i]);}
;}
;if(e.length>0){this._reject(e);}
else {this._cancel();}
;return true;}
;return false;}
;Ew.prototype._fulfilled=function(){return this._totalResolved;}
;Ew.prototype._rejected=function(){return this._values.length-this.length();}
;Ew.prototype._addRejected=function(EC){this._values.push(EC);}
;Ew.prototype._addFulfilled=function(ED){this._values[this._totalResolved++ ]=ED;}
;Ew.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected();}
;Ew.prototype._getRangeError=function(EE){var EF=bl+this._howMany+Q+EE+O;return new RangeError(EF);}
;Ew.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0));}
;function Er(EH,EG){if((EG|0)!==EG||EG<0){return Et(cA);}
;var EJ=new Ew(EH);var EI=EJ.promise();EJ.setHowMany(EG);EJ.init();return EI;}
;Eu.some=function(EK,EL){return Er(EK,EL);}
;Eu.prototype.some=function(EM){return Er(this,EM);}
;Eu._SomePromiseArray=Ew;}
;}
,{"./errors":12,"./util":36}],'32':[function(EN,EP,EO){B;EP.exports=function(EV){function EQ(EY){if(EY!==undefined){EY=EY._target();this._bitField=EY._bitField;this._settledValueField=EY._isFateSealed()?EY._settledValue():undefined;}
else {this._bitField=0;this._settledValueField=undefined;}
;}
;EQ.prototype._settledValue=function(){return this._settledValueField;}
;var ES=EQ.prototype.value=function(){if(!this.isFulfilled()){throw new TypeError(eE);}
;return this._settledValue();}
;var ET=EQ.prototype.error=EQ.prototype.reason=function(){if(!this.isRejected()){throw new TypeError(bX);}
;return this._settledValue();}
;var EW=EQ.prototype.isFulfilled=function(){return (this._bitField&33554432)!==0;}
;var EU=EQ.prototype.isRejected=function(){return (this._bitField&16777216)!==0;}
;var ER=EQ.prototype.isPending=function(){return (this._bitField&50397184)===0;}
;var EX=EQ.prototype.isResolved=function(){return (this._bitField&50331648)!==0;}
;EQ.prototype.isCancelled=function(){return (this._bitField&8454144)!==0;}
;EV.prototype.__dy=function(){return (this._bitField&65536)===65536;}
;EV.prototype._isCancelled=function(){return this._target().__dy();}
;EV.prototype.isCancelled=function(){return (this._target()._bitField&8454144)!==0;}
;EV.prototype.isPending=function(){return ER.call(this._target());}
;EV.prototype.isRejected=function(){return EU.call(this._target());}
;EV.prototype.isFulfilled=function(){return EW.call(this._target());}
;EV.prototype.isResolved=function(){return EX.call(this._target());}
;EV.prototype.value=function(){return ES.call(this._target());}
;EV.prototype.reason=function(){var Fa=this._target();Fa._unsetRejectionIsUnhandled();return ET.call(Fa);}
;EV.prototype._value=function(){return this._settledValue();}
;EV.prototype._reason=function(){this._unsetRejectionIsUnhandled();return this._settledValue();}
;EV.PromiseInspection=EQ;}
;}
,{}],'33':[function(Fb,Fd,Fc){B;Fd.exports=function(Fn,Fi){var Fh=Fb(ec);var Fl=Fh.errorObj;var Fo=Fh.isObject;function Fk(Fq,Fr){if(Fo(Fq)){if(Fq instanceof Fn)return Fq;var Fp=Fe(Fq);if(Fp===Fl){if(Fr)Fr._pushContext();var Fs=Fn.reject(Fp.e);if(Fr)Fr._popContext();return Fs;}
else if(typeof Fp===cW){if(Fg(Fq)){var Fs=new Fn(Fi);Fq._then(Fs._fulfill,Fs._reject,undefined,Fs,null);return Fs;}
;return Fm(Fq,Fp,Fr);}
;}
;return Fq;}
;function Ff(Ft){return Ft.then;}
;function Fe(Fu){try{return Ff(Fu);}
catch(e){Fl.e=e;return Fl;}
;}
;var Fj={}.hasOwnProperty;function Fg(Fv){try{return Fj.call(Fv,eG);}
catch(e){return false;}
;}
;function Fm(x,Fw,FC){var FA=new Fn(Fi);var Fz=FA;if(FC)FC._pushContext();FA._captureStackTrace();if(FC)FC._popContext();var Fy=true;var FB=Fh.tryCatch(Fw).call(x,Fx,FD);Fy=false;if(FA&&FB===Fl){FA._rejectCallback(FB.e,true,true);FA=null;}
;function Fx(FE){if(!FA)return;FA._resolveCallback(FE);FA=null;}
;function FD(FF){if(!FA)return;FA._rejectCallback(FF,Fy,true);FA=null;}
;return Fz;}
;return Fk;}
;}
,{"./util":36}],'34':[function(FG,FI,FH){B;FI.exports=function(FQ,FP,FO){var FJ=FG(ec);var FK=FQ.TimeoutError;function FL(FU){this.handle=FU;}
;FL.prototype._resultCancelled=function(){clearTimeout(this.handle);}
;var FM=function(FV){return FN(+this).thenReturn(FV);}
;var FN=FQ.delay=function(FW,Ga){var FY;var FX;if(Ga!==undefined){FY=FQ.resolve(Ga)._then(FM,null,null,FW,undefined);if(FO.cancellation()&&Ga instanceof FQ){FY._setOnCancel(Ga);}
;}
else {FY=new FQ(FP);FX=setTimeout(function(){FY._fulfill();}
,+FW);if(FO.cancellation()){FY._setOnCancel(new FL(FX));}
;FY._captureStackTrace();}
;FY._setAsyncGuaranteed();return FY;}
;FQ.prototype.delay=function(Gb){return FN(Gb,this);}
;var FS=function(Gd,Gc,parent){var Ge;if(typeof Gc!==bW){if(Gc instanceof Error){Ge=Gc;}
else {Ge=new FK(ef);}
;}
else {Ge=new FK(Gc);}
;FJ.markAsOriginatingFromRejection(Ge);Gd._attachExtraTrace(Ge);Gd._reject(Ge);if(parent!=null){parent.cancel();}
;}
;function FT(Gf){clearTimeout(this.handle);return Gf;}
;function FR(Gg){clearTimeout(this.handle);throw Gg;}
;FQ.prototype.timeout=function(Gh,Gi){Gh=+Gh;var Gk,parent;var Gj=new FL(setTimeout(function Gl(){if(Gk.isPending()){FS(Gk,Gi,parent);}
;}
,Gh));if(FO.cancellation()){parent=this.then();Gk=parent._then(FT,FR,undefined,Gj,undefined);Gk._setOnCancel(Gj);}
else {Gk=this._then(FT,FR,undefined,Gj,undefined);}
;return Gk;}
;}
;}
,{"./util":36}],'35':[function(Gm,Go,Gn){B;Go.exports=function(GA,Gx,GB,Gp,Gz,Gt){var Gw=Gm(ec);var TypeError=Gm(ek).TypeError;var Gq=Gm(ec).inherits;var GD=Gw.errorObj;var GG=Gw.tryCatch;var Gr={};function Gy(e){setTimeout(function(){throw e;}
,0);}
;function GE(GH){var GI=GB(GH);if(GI!==GH&&typeof GH._isDisposable===cW&&typeof GH._getDisposer===cW&&GH._isDisposable()){GI._setDisposable(GH._getDisposer());}
;return GI;}
;function Gv(GN,GM){var i=0;var GK=GN.length;var GL=new GA(Gz);function GJ(){if(i>=GK)return GL._fulfill();var GO=GE(GN[i++ ]);if(GO instanceof GA&&GO._isDisposable()){try{GO=GB(GO._getDisposer().tryDispose(GM),GN.promise);}
catch(e){return Gy(e);}
;if(GO instanceof GA){return GO._then(GJ,Gy,null,null,null);}
;}
;GJ();}
;GJ();return GL;}
;function GF(GP,GQ,GR){this._data=GP;this._promise=GQ;this._context=GR;}
;GF.prototype.data=function(){return this._data;}
;GF.prototype.promise=function(){return this._promise;}
;GF.prototype.resource=function(){if(this.promise().isFulfilled()){return this.promise().value();}
;return Gr;}
;GF.prototype.tryDispose=function(GS){var GT=this.resource();var GU=this._context;if(GU!==undefined)GU._pushContext();var GV=GT!==Gr?this.doDispose(GT,GS):null;if(GU!==undefined)GU._popContext();this._promise._unsetDisposable();this._data=null;return GV;}
;GF.isDisposer=function(d){return (d!=null&&typeof d.resource===cW&&typeof d.tryDispose===cW);}
;function Gu(GX,GW,GY){this.constructor$(GX,GW,GY);}
;Gq(Gu,GF);Gu.prototype.doDispose=function(Ha,Hb){var Hc=this.data();return Hc.call(Ha,Ha,Hb);}
;function Gs(Hd){if(GF.isDisposer(Hd)){this.resources[this.index]._setDisposable(Hd);return Hd.promise();}
;return Hd;}
;function GC(length){this.length=length;this.promise=null;this[length-1]=null;}
;GC.prototype._resultCancelled=function(){var Hf=this.length;for(var i=0;i<Hf; ++i){var He=this[i];if(He instanceof GA){He.cancel();}
;}
;}
;GA.using=function(){var Hi=arguments.length;if(Hi<2)return Gx(cG);var Hl=arguments[Hi-1];if(typeof Hl!==cW){return Gx(da+Gw.classString(Hl));}
;var Hm;var Hh=true;if(Hi===2&&Array.isArray(arguments[0])){Hm=arguments[0];Hi=Hm.length;Hh=false;}
else {Hm=arguments;Hi-- ;}
;var Hp=new GC(Hi);for(var i=0;i<Hi; ++i){var Hn=Hm[i];if(GF.isDisposer(Hn)){var Ho=Hn;Hn=Hn.promise();Hn._setDisposable(Ho);}
else {var Hj=GB(Hn);if(Hj instanceof GA){Hn=Hj._then(Gs,null,null,{resources:Hp,index:i},undefined);}
;}
;Hp[i]=Hn;}
;var Hg=new Array(Hp.length);for(var i=0;i<Hg.length; ++i){Hg[i]=GA.resolve(Hp[i]).reflect();}
;var Hq=GA.all(Hg).then(function(Hr){for(var i=0;i<Hr.length; ++i){var Ht=Hr[i];if(Ht.isRejected()){GD.e=Ht.error();return GD;}
else if(!Ht.isFulfilled()){Hq.cancel();return;}
;Hr[i]=Ht.value();}
;Hk._pushContext();Hl=GG(Hl);var Hu=Hh?Hl.apply(undefined,Hr):Hl(Hr);var Hs=Hk._popContext();Gt.checkForgottenReturns(Hu,Hs,cu,Hk);return Hu;}
);var Hk=Hq.lastly(function(){var Hv=new GA.PromiseInspection(Hq);return Gv(Hp,Hv);}
);Hp.promise=Hk;Hk._setOnCancel(Hp);return Hk;}
;GA.prototype._setDisposable=function(Hw){this._bitField=this._bitField|131072;this._disposer=Hw;}
;GA.prototype._isDisposable=function(){return (this._bitField&131072)>0;}
;GA.prototype._getDisposer=function(){return this._disposer;}
;GA.prototype._unsetDisposable=function(){this._bitField=this._bitField&(~131072);this._disposer=undefined;}
;GA.prototype.disposer=function(Hx){if(typeof Hx===cW){return new Gu(Hx,this,Gp());}
;throw new TypeError();}
;}
;}
,{"./errors":12,"./util":36}],'36':[function(_dereq_,module,exports){B;var es5=_dereq_(fD);var canEvaluate=typeof navigator==fU;var errorObj={e:{}};var tryCatchTarget;var globalObject=typeof self!==fU?self:typeof window!==fU?window:typeof global!==fU?global:this!==undefined?this:null;function tryCatcher(){try{var Hy=tryCatchTarget;tryCatchTarget=null;return Hy.apply(this,arguments);}
catch(e){errorObj.e=e;return errorObj;}
;}
;function tryCatch(Hz){tryCatchTarget=Hz;return tryCatcher;}
;var inherits=function(HC,HB){var HA={}.hasOwnProperty;function T(){this.constructor=HC;this.constructor$=HB;for(var HD in HB.prototype){if(HA.call(HB.prototype,HD)&&HD.charAt(HD.length-1)!==fh){this[HD+fh]=HB.prototype[HD];}
;}
;}
;T.prototype=HB.prototype;HC.prototype=new T();return HC.prototype;}
;function isPrimitive(HE){return HE==null||HE===true||HE===false||typeof HE===bW||typeof HE===bf;}
;function isObject(HF){return typeof HF===cW||typeof HF===ex&&HF!==null;}
;function maybeWrapAsError(HG){if(!isPrimitive(HG))return HG;return new Error(safeToString(HG));}
;function withAppended(HI,HH){var HJ=HI.length;var HK=new Array(HJ+1);var i;for(i=0;i<HJ; ++i){HK[i]=HI[i];}
;HK[i]=HH;return HK;}
;function getDataPropertyOrDefault(HM,HN,HL){if(es5.isES5){var HO=Object.getOwnPropertyDescriptor(HM,HN);if(HO!=null){return HO.get==null&&HO.set==null?HO.value:HL;}
;}
else {return {}.hasOwnProperty.call(HM,HN)?HM[HN]:undefined;}
;}
;function notEnumerableProp(HQ,name,HR){if(isPrimitive(HQ))return HQ;var HP={value:HR,configurable:true,enumerable:false,writable:true};es5.defineProperty(HQ,name,HP);return HQ;}
;function thrower(r){throw r;}
;var inheritedDataKeys=(function(){var HS=[Array.prototype,Object.prototype,Function.prototype];var HV=function(HW){for(var i=0;i<HS.length; ++i){if(HS[i]===HW){return true;}
;}
;return false;}
;if(es5.isES5){var HT=Object.getOwnPropertyNames;return function(HX){var Ib=[];var Ia=Object.create(null);while(HX!=null&&!HV(HX)){var HY;try{HY=HT(HX);}
catch(e){return Ib;}
;for(var i=0;i<HY.length; ++i){var Ic=HY[i];if(Ia[Ic])continue;Ia[Ic]=true;var Id=Object.getOwnPropertyDescriptor(HX,Ic);if(Id!=null&&Id.get==null&&Id.set==null){Ib.push(Ic);}
;}
;HX=es5.getPrototypeOf(HX);}
;return Ib;}
;}
else {var HU={}.hasOwnProperty;return function(Ie){if(HV(Ie))return [];var If=[];enumeration:for(var Ig in Ie){if(HU.call(Ie,Ig)){If.push(Ig);}
else {for(var i=0;i<HS.length; ++i){if(HU.call(HS[i],Ig)){continue enumeration;}
;}
;If.push(Ig);}
;}
;return If;}
;}
;}
)();var thisAssignmentPattern=/this\s*\.\s*\S+\s*=/;function isClass(Ik){try{if(typeof Ik===cW){var Ih=es5.names(Ik.prototype);var Ii=es5.isES5&&Ih.length>1;var Ij=Ih.length>0&&!(Ih.length===1&&Ih[0]===m);var Il=thisAssignmentPattern.test(Ik+fl)&&es5.names(Ik).length>0;if(Ii||Ij||Il){return true;}
;}
;return false;}
catch(e){return false;}
;}
;function toFastProperties(obj){function FakeConstructor(){}
;FakeConstructor.prototype=obj;var l=8;while(l-- )new FakeConstructor();return obj;eval(obj);}
;var rident=/^[a-z$_][a-z$_0-9]*$/i;function isIdentifier(Im){return rident.test(Im);}
;function filledRange(In,Io,Ip){var Iq=new Array(In);for(var i=0;i<In; ++i){Iq[i]=Io+i+Ip;}
;return Iq;}
;function safeToString(Ir){try{return Ir+fl;}
catch(e){return dQ;}
;}
;function isError(Is){return Is!==null&&typeof Is===ex&&typeof Is.message===bW&&typeof Is.name===bW;}
;function markAsOriginatingFromRejection(e){try{notEnumerableProp(e,fW,true);}
catch(It){}
;}
;function originatesFromRejection(e){if(e==null)return false;return ((e instanceof Error[eo].OperationalError)||e[fW]===true);}
;function canAttachTrace(Iu){return isError(Iu)&&es5.propertyIsWritable(Iu,I);}
;var ensureErrorObject=(function(){if(!(I in new Error())){return function(Iv){if(canAttachTrace(Iv))return Iv;try{throw new Error(safeToString(Iv));}
catch(Iw){return Iw;}
;}
;}
else {return function(Ix){if(canAttachTrace(Ix))return Ix;return new Error(safeToString(Ix));}
;}
;}
)();function classString(Iy){return {}.toString.call(Iy);}
;function copyDescriptors(Iz,IA,IB){var IC=es5.names(Iz);for(var i=0;i<IC.length; ++i){var ID=IC[i];if(IB(ID)){try{es5.defineProperty(IA,ID,es5.getDescriptor(Iz,ID));}
catch(IE){}
;}
;}
;}
;var asArray=function(v){if(es5.isArray(v)){return v;}
;return null;}
;if(typeof Symbol!==fU&&Symbol.iterator){var ArrayFrom=typeof Array.from===cW?function(v){return Array.from(v);}
:function(v){var IH=[];var IG=v[Symbol.iterator]();var IF;while(!((IF=IG.next()).done)){IH.push(IF.value);}
;return IH;}
;asArray=function(v){if(es5.isArray(v)){return v;}
else if(v!=null&&typeof v[Symbol.iterator]===cW){return ArrayFrom(v);}
;return null;}
;}
;var isNode=typeof process!==fU&&classString(process).toLowerCase()===dR;function env(II,IJ){return isNode?process.env[II]:IJ;}
;function getNativePromise(){if(typeof Promise===cW){try{var IK=new Promise(function(){}
);if({}.toString.call(IK)===dw){return Promise;}
;}
catch(e){}
;}
;}
;function domainBind(self,IL){return self.bind(IL);}
;var ret={isClass:isClass,isIdentifier:isIdentifier,inheritedDataKeys:inheritedDataKeys,getDataPropertyOrDefault:getDataPropertyOrDefault,thrower:thrower,isArray:es5.isArray,asArray:asArray,notEnumerableProp:notEnumerableProp,isPrimitive:isPrimitive,isObject:isObject,isError:isError,canEvaluate:canEvaluate,errorObj:errorObj,tryCatch:tryCatch,inherits:inherits,withAppended:withAppended,maybeWrapAsError:maybeWrapAsError,toFastProperties:toFastProperties,filledRange:filledRange,toString:safeToString,canAttachTrace:canAttachTrace,ensureErrorObject:ensureErrorObject,originatesFromRejection:originatesFromRejection,markAsOriginatingFromRejection:markAsOriginatingFromRejection,classString:classString,copyDescriptors:copyDescriptors,hasDevTools:typeof chrome!==fU&&chrome&&typeof chrome.loadTimes===cW,isNode:isNode,env:env,global:globalObject,getNativePromise:getNativePromise,domainBind:domainBind};ret.isRecentNode=ret.isNode&&(function(){var IM=process.versions.node.split(cC).map(Number);return (IM[0]===0&&IM[1]>10)||(IM[0]>0);}
)();if(ret.isNode)ret.toFastProperties(process);try{throw new Error();}
catch(e){ret.lastLineError=e;}
;module.exports=ret;}
,{"./es5":13}]},{},[4])(4);}
);}
)();}
)();
(function(){var a="qx.event.type.Data",b="qx.event.type.Event",c="qx.data.IListData";qx.Interface.define(c,{events:{"change":a,"changeLength":b},members:{getItem:function(d){}
,setItem:function(e,f){}
,splice:function(g,h,i){}
,contains:function(j){}
,getLength:function(){}
,toArray:function(){}
}});}
)();
(function(){var a="qx.data.marshal.MEventBubbling",b="",c="]",d="idBubble-",f="[",g="changeBubble",h=".",j="qx.event.type.Data";qx.Mixin.define(a,{events:{"changeBubble":j},members:{_applyEventPropagation:function(l,k,name){this.fireDataEvent(g,{value:l,name:name,old:k,item:this});this._registerEventChaining(l,k,name);}
,_registerEventChaining:function(n,m,name){if(m!=null&&m.getUserData&&m.getUserData(d+this.toHashCode())!=null){var p=m.getUserData(d+this.toHashCode());for(var i=0;i<p.length;i++ ){m.removeListenerById(p[i]);}
;m.setUserData(d+this.toHashCode(),null);}
;if((n instanceof qx.core.Object)&&qx.Class.hasMixin(n.constructor,qx.data.marshal.MEventBubbling)){var o=qx.lang.Function.bind(this.__dz,this,name);var q=n.addListener(g,o,this);var p=n.getUserData(d+this.toHashCode());if(p==null){p=[];n.setUserData(d+this.toHashCode(),p);}
;p.push(q);}
;}
,__dz:function(name,e){var y=e.getData();var u=y.value;var s=y.old;if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(y.name.indexOf){var x=y.name.indexOf(h)!=-1?y.name.indexOf(h):y.name.length;var v=y.name.indexOf(f)!=-1?y.name.indexOf(f):y.name.length;if(v==0){var t=name+y.name;}
else if(x<v){var r=y.name.substring(0,x);var w=y.name.substring(x+1,y.name.length);if(w[0]!=f){w=h+w;}
;var t=name+f+r+c+w;}
else if(v<x){var r=y.name.substring(0,v);var w=y.name.substring(v,y.name.length);var t=name+f+r+c+w;}
else {var t=name+f+y.name+c;}
;}
else {var t=name+f+y.name+c;}
;}
else {if(parseInt(name)==name&&name!==b){name=f+name+c;}
;var t=name+h+y.name;}
;this.fireDataEvent(g,{value:u,name:t,old:s,item:y.item||e.getTarget()});}
}});}
)();
(function(){var a="-",b="add",c="order",d="add/remove",e="Boolean",f="",g="remove",h="Please use 'toArray()' to see the content.",j="qx.data.Array",k="qx.debug",l="Type of the parameter not supported!",m="The parameter must be an array.",n="0-",o="change",p="0",q="number",r="changeBubble",s="changeLength",t="qx.event.type.Data";qx.Class.define(j,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(u){qx.core.Object.call(this);if(u==undefined){this.__dA=[];}
else if(arguments.length>1){this.__dA=[];for(var i=0;i<arguments.length;i++ ){this.__dA.push(arguments[i]);}
;}
else if(typeof u==q){this.__dA=new Array(u);}
else if(u instanceof Array){this.__dA=qx.lang.Array.clone(u);}
else {this.__dA=[];this.dispose();throw new Error(l);}
;for(var i=0;i<this.__dA.length;i++ ){this._applyEventPropagation(this.__dA[i],null,i);}
;this.__dB();if(qx.core.Environment.get(k)){this[0]=h;}
;}
,properties:{autoDisposeItems:{check:e,init:false}},events:{"change":t,"changeLength":t},members:{__dA:null,concat:function(v){v=qx.lang.Array.toNativeArray(v);if(v){var w=this.__dA.concat(v);}
else {var w=this.__dA.concat();}
;return new qx.data.Array(w);}
,join:function(x){return this.__dA.join(x);}
,pop:function(){var y=this.__dA.pop();this.__dB();this._registerEventChaining(null,y,this.length-1);this.fireDataEvent(r,{value:[],name:this.length+f,old:[y],item:this});this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:g,removed:[y],added:[]},null);return y;}
,push:function(z){for(var i=0;i<arguments.length;i++ ){this.__dA.push(arguments[i]);this.__dB();this._registerEventChaining(arguments[i],null,this.length-1);this.fireDataEvent(r,{value:[arguments[i]],name:(this.length-1)+f,old:[],item:this});this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:b,added:[arguments[i]],removed:[]},null);}
;return this.length;}
,reverse:function(){if(this.length==0){return;}
;var A=this.__dA.concat();this.__dA.reverse();this.__dC(0,this.length);this.fireDataEvent(o,{start:0,end:this.length-1,type:c,added:[],removed:[]},null);this.fireDataEvent(r,{value:this.__dA,name:n+(this.__dA.length-1),old:A,item:this});}
,shift:function(){if(this.length==0){return;}
;var B=this.__dA.shift();this.__dB();this._registerEventChaining(null,B,this.length-1);this.__dC(0,this.length);this.fireDataEvent(r,{value:[],name:p,old:[B],item:this});this.fireDataEvent(o,{start:0,end:this.length-1,type:g,removed:[B],added:[]},null);return B;}
,slice:function(D,C){return new qx.data.Array(this.__dA.slice(D,C));}
,splice:function(I,K,M){var Q=this.__dA.length;var L=this.__dA.splice.apply(this.__dA,arguments);if(this.__dA.length!=Q){this.__dB();}
else if(K==arguments.length-2){var E=qx.lang.Array.fromArguments(arguments,2);for(var i=0;i<E.length;i++ ){if(E[i]!==L[i]){break;}
;if(i==E.length-1){return new qx.data.Array();}
;}
;}
;var O=K>0;var G=arguments.length>2;if(O||G){var E=qx.lang.Array.fromArguments(arguments,2);if(L.length==0){var P=b;var H=I+E.length;}
else if(E.length==0){var P=g;var H=this.length-1;}
else {var P=d;var H=I+Math.max(E.length,L.length)-1;}
;this.fireDataEvent(o,{start:I,end:H,type:P,added:E,removed:L},null);}
;for(var i=0;i<L.length;i++ ){this._registerEventChaining(null,L[i],i);}
;for(var i=2;i<arguments.length;i++ ){this._registerEventChaining(arguments[i],null,I+(i-2));}
;this.__dC(I+(arguments.length-2)-K,this.length);if(O||G){var J=[];for(var i=2;i<arguments.length;i++ ){J[i-2]=arguments[i];}
;var F=(I+Math.max(arguments.length-3,K-1));var name=I==F?F:I+a+F;var N={value:J,name:name+f,old:L,item:this};this.fireDataEvent(r,N);}
;return (new qx.data.Array(L));}
,replace:function(R){R=qx.lang.Array.toNativeArray(R);if(this.equals(R)){return;}
;var S=[0,this.getLength()];R.forEach(function(T){S.push(T);}
);this.splice.apply(this,S);}
,sort:function(V){if(this.length==0){return;}
;var U=this.__dA.concat();this.__dA.sort.apply(this.__dA,arguments);if(qx.lang.Array.equals(this.__dA,U)===true){return;}
;this.__dC(0,this.length);this.fireDataEvent(o,{start:0,end:this.length-1,type:c,added:[],removed:[]},null);this.fireDataEvent(r,{value:this.__dA,name:n+(this.length-1),old:U,item:this});}
,unshift:function(W){for(var i=arguments.length-1;i>=0;i-- ){this.__dA.unshift(arguments[i]);this.__dB();this.__dC(0,this.length);this.fireDataEvent(r,{value:[this.__dA[0]],name:p,old:[this.__dA[1]],item:this});this.fireDataEvent(o,{start:0,end:this.length-1,type:b,added:[arguments[i]],removed:[]},null);}
;return this.length;}
,toArray:function(){return this.__dA;}
,getItem:function(X){return this.__dA[X];}
,setItem:function(Y,bb){var ba=this.__dA[Y];if(ba===bb){return;}
;this.__dA[Y]=bb;this._registerEventChaining(bb,ba,Y);if(this.length!=this.__dA.length){this.__dB();}
;this.fireDataEvent(r,{value:[bb],name:Y+f,old:[ba],item:this});this.fireDataEvent(o,{start:Y,end:Y,type:d,added:[bb],removed:[ba]},null);}
,getLength:function(){return this.length;}
,indexOf:function(bc){return this.__dA.indexOf(bc);}
,lastIndexOf:function(bd){return this.__dA.lastIndexOf(bd);}
,toString:function(){if(this.__dA!=null){return this.__dA.toString();}
;return f;}
,contains:function(be){return this.includes(be);}
,includes:function(bf){return this.__dA.indexOf(bf)!==-1;}
,copy:function(){return this.concat();}
,insertAt:function(bg,bh){this.splice(bg,0,bh).dispose();}
,insertBefore:function(bj,bi){var bk=this.indexOf(bj);if(bk==-1){this.push(bi);}
else {this.splice(bk,0,bi).dispose();}
;}
,insertAfter:function(bm,bl){var bn=this.indexOf(bm);if(bn==-1||bn==(this.length-1)){this.push(bl);}
else {this.splice(bn+1,0,bl).dispose();}
;}
,removeAt:function(bo){var bp=this.splice(bo,1);var bq=bp.getItem(0);bp.dispose();return bq;}
,removeAll:function(){for(var i=0;i<this.__dA.length;i++ ){this._registerEventChaining(null,this.__dA[i],i);}
;if(this.getLength()==0){return [];}
;var bs=this.getLength();var br=this.__dA.concat();this.__dA.length=0;this.__dB();this.fireDataEvent(r,{value:[],name:n+(bs-1),old:br,item:this});this.fireDataEvent(o,{start:0,end:bs-1,type:g,removed:br,added:[]},null);return br;}
,append:function(bt){bt=qx.lang.Array.toNativeArray(bt);if(qx.core.Environment.get(k)){qx.core.Assert.assertArray(bt,m);}
;var bu=this.__dA.length;Array.prototype.push.apply(this.__dA,bt);for(var i=0;i<bt.length;i++ ){this._registerEventChaining(bt[i],null,bu+i);}
;var bu=this.length;this.__dB();var name=bu==(this.length-1)?bu:bu+a+(this.length-1);this.fireDataEvent(r,{value:bt,name:name+f,old:[],item:this});this.fireDataEvent(o,{start:bu,end:this.length-1,type:b,added:bt,removed:[]},null);}
,exclude:function(bv){bv=qx.lang.Array.toNativeArray(bv);bv.forEach(function(bw){this.remove(bw);}
,this);}
,remove:function(bx){var by=this.indexOf(bx);if(by!=-1){this.splice(by,1).dispose();return bx;}
;}
,equals:function(bz){if(this.length!==bz.length){return false;}
;bz=qx.lang.Array.toNativeArray(bz);for(var i=0;i<this.length;i++ ){if(this.getItem(i)!==bz[i]){return false;}
;}
;return true;}
,sum:function(){var bA=0;for(var i=0;i<this.length;i++ ){bA+=this.getItem(i);}
;return bA;}
,max:function(){var bB=this.getItem(0);for(var i=1;i<this.length;i++ ){if(this.getItem(i)>bB){bB=this.getItem(i);}
;}
;return bB===undefined?null:bB;}
,min:function(){var bC=this.getItem(0);for(var i=1;i<this.length;i++ ){if(this.getItem(i)<bC){bC=this.getItem(i);}
;}
;return bC===undefined?null:bC;}
,forEach:function(bD,bE){for(var i=0;i<this.__dA.length;i++ ){bD.call(bE,this.__dA[i],i,this);}
;}
,filter:function(bF,self){return new qx.data.Array(this.__dA.filter(bF,self));}
,map:function(bG,self){return new qx.data.Array(this.__dA.map(bG,self));}
,some:function(bH,self){return this.__dA.some(bH,self);}
,every:function(bI,self){return this.__dA.every(bI,self);}
,reduce:function(bK,bJ){return this.__dA.reduce(bK,bJ);}
,reduceRight:function(bM,bL){return this.__dA.reduceRight(bM,bL);}
,__dB:function(){var bN=this.length;this.length=this.__dA.length;this.fireDataEvent(s,this.length,bN);}
,__dC:function(bP,bO){for(var i=bP;i<bO;i++ ){this._registerEventChaining(this.__dA[i],this.__dA[i],i);}
;}
},destruct:function(){for(var i=0;i<this.__dA.length;i++ ){var bQ=this.__dA[i];this._applyEventPropagation(null,bQ,i);if(this.isAutoDisposeItems()&&bQ&&bQ instanceof qx.core.Object){bQ.dispose();}
;}
;this.__dA=null;}
});}
)();
(function(){var a="' declared in the class '",b="'",c="' but found '",d="The context object '",e=" is not an available class': ",f="qx.debug",g="Expected event type to be instanceof '",h="' for the event '",i="' of '",j="The event type '",k="'is already disposed.",l="qx.event.dispatch.Direct";qx.Class.define(l,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(m){this._manager=m;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(o,event,n){return !event.getBubbles();}
,dispatchEvent:function(p,event,u){if(qx.core.Environment.get(f)){if(p instanceof qx.core.Object){var t=qx.Class.getEventType(p.constructor,u);var q=qx.Class.getByName(t);if(!q){this.error(j+u+a+p.constructor+e+t);}
else if(!(event instanceof q)){this.error(g+t+c+event.classname+b);}
;}
;}
;event.setEventPhase(qx.event.type.Event.AT_TARGET);var s={};var self=this;var r=this._manager.getListeners(p,u,false);if(r){r.forEach(function(v){if(self._manager.isBlacklisted(v.unique)){return;}
;var w=v.context||p;if(qx.core.Environment.get(f)){if(w&&w.isDisposed&&w.isDisposed()&&!w.isDisposing()){self.warn(d+w+h+u+i+p+k);}
;}
;qx.event.Utils.then(s,function(){return v.handler.call(w,event);}
);}
);}
;return s.promise;}
},defer:function(x){qx.event.Registration.addDispatcher(x);}
});}
)();
(function(){var a="function",b="",c="Rejecting Event",d="qx.event.Utils",f="qx.debug",g="[[ qx.event.Utils.ABORT ]]",h="Rejecting in series()",i="qx.promise",j="qx.event.Utils.hasCatcher";qx.Class.define(d,{extend:qx.core.Object,statics:{ABORT:g,track:qx.core.Environment.select(i,{"true":function(k,l){if(typeof l!==a&&!qx.lang.Type.isPromise(l)){l=(function(m){return function(){return m;}
;}
)(l);}
;return this.then(k,l);}
,"false":function(n,o){if(typeof o===a){return o();}
;return o;}
}),__dD:function(p,r){if(qx.core.Environment.get(f)){if(p.promises===undefined){p.promises=[];}
;var q=null;try{throw new Error(b);}
catch(e){q=e;}
;p.promises.push({promise:r,ex:q});}
;p.promise=r;return p.promise;}
,then:qx.core.Environment.select(i,{"true":function(s,u){if(s.rejected){return null;}
;if(s.promise){if(qx.lang.Type.isPromise(u)){this.__dD(s,s.promise.then(u));}
else {var self=this;this.__dD(s,s.promise.then(function(v){if(s.rejected){return null;}
;v=u(v);if(v===qx.event.Utils.ABORT){return self.reject(s);}
;return v;}
));}
;this.__dF(s);return s.promise;}
;if(qx.lang.Type.isPromise(u)){return this.__dE(s,u);}
;var t=u(s.result);if(qx.lang.Type.isPromise(t)){return this.__dE(s,t);}
;s.result=t;if(t===qx.event.Utils.ABORT){return this.reject(s);}
;return t;}
,"false":function(w,y){if(w.rejected){return null;}
;var x=w.result=y(w.result);if(x===qx.event.Utils.ABORT){return this.reject(w);}
;return x;}
}),__dE:function(z,A){if(z.promise){this.__dD(z,z.promise.then(function(){return A;}
));}
else {this.__dD(z,A);}
;this.__dF(z);return z.promise;}
,reject:function(B){if(B.rejected){return qx.event.Utils.ABORT;}
;B.rejected=true;if(B.promise){throw new Error(c);}
;var C=this.__dG(B);return C===undefined?this.ABORT:C;}
,__dF:function(D){if(D.promise&&D.catch){if(!D.promise[j]){this.__dD(D,D.promise.catch(this.__dG.bind(this,D)));D.promise[j]=true;}
;}
;}
,__dG:function(E,F){var G=E.catch;if(G){E.catch=null;E.rejected=true;return G(F);}
;return qx.event.Utils.ABORT;}
,"catch":function(H,I){if(H.rejected){I();return;}
;if(H.catchers===undefined){H.catchers=[I];}
else {H.catchers.push(I);}
;if(H.catch){H.catch=(function(J,K){return function(){J();K();}
;}
)(H.catch,I);}
else {H.catch=I;}
;this.__dF(H);}
,callListener:function(N,M,O,event){if(N.rejected){return qx.event.Utils.ABORT;}
;var L=M.handler.call(O,event);if(event.getPropagationStopped()){return qx.event.Utils.ABORT;}
;return L;}
,series:qx.core.Environment.select(i,{"true":function(Q,U,T){var R={};for(var P=0;P<Q.length;P++ ){var S=U(Q[P],P);if(S instanceof qx.Promise){for( ++P;P<Q.length;P++ ){(function(V,W){S=S.then(function(){var X=U(V,W);if(!T&&X===qx.event.Utils.ABORT){throw new Error(h);}
;return X;}
);}
)(Q[P],P);}
;return S;}
;if(!T&&S===qx.event.Utils.ABORT){return this.reject(R);}
;}
;return null;}
,"false":function(ba,be,bd){var bb={};for(var Y=0;Y<ba.length;Y++ ){var bc=be(ba[Y],Y);if(!bd&&bc===qx.event.Utils.ABORT){return this.reject(bb);}
;}
;}
})}});}
)();
(function(){var a="qx.event.IEventHandler";qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(c,b){}
,registerEvent:function(f,e,d){}
,unregisterEvent:function(i,h,g){}
}});}
)();
(function(){var a="qx.event.handler.Object";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(c,b){return qx.Class.supportsEvent(c.constructor,b);}
,registerEvent:function(f,e,d){}
,unregisterEvent:function(i,h,g){}
},defer:function(j){qx.event.Registration.addHandler(j);}
});}
)();
(function(){var a="qx.event.type.Data";qx.Class.define(a,{extend:qx.event.type.Event,members:{__dH:null,__dI:null,init:function(c,d,b){qx.event.type.Event.prototype.init.call(this,false,b);this.__dH=c;this.__dI=d;return this;}
,clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);f.__dH=this.__dH;f.__dI=this.__dI;return f;}
,getData:function(){return this.__dH;}
,getOldData:function(){return this.__dI;}
}});}
)();
(function(){var a="qx.util.DeferredCallManager",b="singleton";qx.Class.define(a,{extend:qx.core.Object,type:b,implement:[qx.core.IDisposable],construct:function(){this.__dJ={};this.__dK=qx.lang.Function.bind(this.__dO,this);this.__dL=false;}
,members:{__dM:null,__dN:null,__dJ:null,__dL:null,__dK:null,schedule:function(d){if(this.__dM==null){this.__dM=window.setTimeout(this.__dK,0);}
;var c=d.toHashCode();if(this.__dN&&this.__dN[c]){return;}
;this.__dJ[c]=d;this.__dL=true;}
,refreshTimeout:function(){if(this.__dM!==null){this.__dM=window.setTimeout(this.__dK,0);}
;}
,cancel:function(f){var e=f.toHashCode();if(this.__dN&&this.__dN[e]){this.__dN[e]=null;return;}
;delete this.__dJ[e];if(qx.lang.Object.isEmpty(this.__dJ)&&this.__dM!=null){window.clearTimeout(this.__dM);this.__dM=null;}
;}
,__dO:qx.event.GlobalError.observeMethod(function(){this.__dM=null;while(this.__dL){this.__dN=qx.lang.Object.clone(this.__dJ);this.__dJ={};this.__dL=false;for(var h in this.__dN){var g=this.__dN[h];if(g){this.__dN[h]=null;g.call();}
;}
;}
;this.__dN=null;}
)},destruct:function(){if(this.__dM!=null){window.clearTimeout(this.__dM);}
;this.__dK=this.__dJ=null;}
});}
)();
(function(){var a='[object Boolean]',b="function",c='constructor',d='[object Date]',e="Invalid argument 'array'",f="qx.debug",g='[object Number]',h="Invalid argument 'map'",j='[object Array]',k=" at array index ",m="Could not convert complex objects like ",n='object',o="qx.lang.Object",p='[object String]',q='[object RegExp]',r="undefined",s=" to map syntax",t="object";qx.Bootstrap.define(o,{statics:{empty:function(u){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(u,h);}
;for(var v in u){if(u.hasOwnProperty(v)){delete u[v];}
;}
;}
,isEmpty:function(w){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(w,h);}
;for(var x in w){return false;}
;return true;}
,getLength:qx.Bootstrap.objectGetLength,getValues:function(y){return Object.values(y);}
,mergeWith:qx.Bootstrap.objectMergeWith,clone:function(z,C){if(qx.lang.Type.isObject(z)){var A={};for(var B in z){if(C){A[B]=qx.lang.Object.clone(z[B],C);}
else {A[B]=z[B];}
;}
;return A;}
else if(qx.lang.Type.isArray(z)){var A=[];for(var i=0;i<z.length;i++ ){if(C){A[i]=qx.lang.Object.clone(z[i],C);}
else {A[i]=z[i];}
;}
;return A;}
;return z;}
,equals:function(D,E){return qx.lang.Object.__dP(D,E,[],[]);}
,__dP:function(L,H,F,G){if(L===H){return L!==0||1/L==1/H;}
;if(L==null||H==null){return L===H;}
;var K=Object.prototype.toString.call(L);if(K!=Object.prototype.toString.call(H)){return false;}
;switch(K){case p:return L==String(H);case g:return L!=+L?H!=+H:(L==0?1/L==1/H:L==+H);case d:case a:return +L==+H;case q:return L.source==H.source&&L.global==H.global&&L.multiline==H.multiline&&L.ignoreCase==H.ignoreCase;};if(typeof L!=n||typeof H!=n){return false;}
;var length=F.length;while(length-- ){if(F[length]==L){return G[length]==H;}
;}
;var J=L.constructor,I=H.constructor;if(J!==I&&!(qx.Bootstrap.isFunction(J)&&(J instanceof J)&&qx.Bootstrap.isFunction(I)&&(I instanceof I))&&(c in L&&c in H)){return false;}
;F.push(L);G.push(H);var O=0,M=true;if(K==j){O=L.length;M=O==H.length;if(M){while(O-- ){if(!(M=qx.lang.Object.__dP(L[O],H[O],F,G))){break;}
;}
;}
;}
else {for(var N in L){if(Object.prototype.hasOwnProperty.call(L,N)){O++ ;if(!(M=Object.prototype.hasOwnProperty.call(H,N)&&qx.lang.Object.__dP(L[N],H[N],F,G))){break;}
;}
;}
;if(M){for(N in H){if(Object.prototype.hasOwnProperty.call(H,N)&&!(O-- )){break;}
;}
;M=!O;}
;}
;F.pop();G.pop();return M;}
,invert:function(P){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(P,h);}
;var Q={};for(var R in P){Q[P[R].toString()]=R;}
;return Q;}
,getKeyFromValue:function(S,T){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(S,h);}
;for(var U in S){if(S.hasOwnProperty(U)&&S[U]===T){return U;}
;}
;return null;}
,contains:function(V,W){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(V,h);}
;return this.getKeyFromValue(V,W)!==null;}
,fromArray:function(X){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertArray(X,e);}
;var Y={};for(var i=0,l=X.length;i<l;i++ ){if(qx.core.Environment.get(f)){switch(typeof X[i]){case t:case b:case r:throw new Error(m+X[i]+k+i+s);};}
;Y[X[i].toString()]=true;}
;return Y;}
}});}
)();
(function(){var a="qx.util.DeferredCall",b="The context object '",c="qx.debug",d="'is already disposed.",e="' of the defered call '";qx.Class.define(a,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);this.__bP=f;this.__bR=g||null;this.__dQ=qx.util.DeferredCallManager.getInstance();}
,members:{__bP:null,__bR:null,__dQ:null,cancel:function(){this.__dQ.cancel(this);}
,schedule:function(){this.__dQ.schedule(this);}
,call:function(){if(qx.core.Environment.get(c)){var h=this.__bR;if(h&&h.isDisposed&&h.isDisposed()){this.warn(b+h+e+this+d);}
;}
;this.__bR?this.__bP.apply(this.__bR):this.__bP();}
},destruct:function(){this.cancel();this.__bR=this.__bP=this.__dQ=null;}
});}
)();
(function(){var a="qx.core.ValidationError";qx.Class.define(a,{extend:qx.type.BaseError});}
)();
(function(){var a="qx.debug",b="qx.lang.Number";qx.Class.define(b,{statics:{isInRange:function(d,e,c){return d>=e&&d<=c;}
,isBetweenRange:function(g,h,f){return g>h&&g<f;}
,limit:function(j,k,i){if(i!=null&&j>i){return i;}
else if(k!=null&&j<k){return k;}
else {return j;}
;}
,equals:function(x,y){if(qx.core.Environment.get(a)){qx.core.Assert.assertNumber(x);qx.core.Assert.assertNumber(y);}
;return x===y||Math.abs(x-y)<Number.EPSILON||Math.abs(x-y)<=Math.max(Math.abs(x),Math.abs(y))*1e-14;}
}});}
)();
(function(){var a="qx.application.IApplication";qx.Interface.define(a,{members:{main:function(){}
,finalize:function(){}
,close:function(){}
,terminate:function(){}
}});}
)();
(function(){var a="qx.core.BaseInit",b="engine.name",c="Main runtime: ",d="",f="qx.application",g="os.name",h="engine.version",i="Missing application class: ",j="Load runtime: ",k="ms",l="Could not detect engine!",m="Finalize runtime: ",n="Could not detect operating system!",o="Could not detect the version of the engine!";qx.Class.define(a,{statics:{__dR:null,getApplication:function(){return this.__dR||null;}
,ready:function(){if(this.__dR){return;}
;if(qx.core.Environment.get(b)==d){qx.log.Logger.warn(l);}
;if(qx.core.Environment.get(h)==d){qx.log.Logger.warn(o);}
;if(qx.core.Environment.get(g)==d){qx.log.Logger.warn(n);}
;qx.log.Logger.debug(this,j+(new Date-qx.Bootstrap.LOADSTART)+k);var q=qx.core.Environment.get(f);var r=qx.Class.getByName(q);if(r){this.__dR=new r;var p=new Date;this.__dR.main();qx.log.Logger.debug(this,c+(new Date-p)+k);var p=new Date;this.__dR.finalize();qx.log.Logger.debug(this,m+(new Date-p)+k);qx.event.handler.Application.onAppInstanceInitialized();}
else {qx.log.Logger.warn(i+q);}
;}
,__dS:function(e){var s=this.__dR;if(s){s.close();}
;}
,__dT:function(){var t=this.__dR;if(t){t.terminate();}
;}
}});}
)();
(function(){var a="ready",b="mshtml",c="engine.name",d="qx.event.handler.Application",f="complete",g="appinitialized",h="webkit",i="gecko",j="qx.globalErrorHandling",k="load",l="unload",m="opera",n="left",o="DOMContentLoaded",p="shutdown",q="browser.documentmode";qx.Class.define(d,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(r){qx.core.Object.call(this);this._window=r.getWindow();this.__dU=false;this.__dV=false;this.__dW=false;this.__dX=false;this.__dY=false;this._initObserver();qx.event.handler.Application.$$instance=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var s=qx.event.handler.Application.$$instance;if(s){s.__ea();}
;}
,onAppInstanceInitialized:function(){var t=qx.event.handler.Application.$$instance;if(t){t.__eb();}
;}
},members:{canHandleEvent:function(v,u){}
,registerEvent:function(y,x,w){}
,unregisterEvent:function(B,A,z){}
,__dW:null,__dX:null,__dU:null,__dV:null,__dY:null,__ea:function(){if(!this.__dW&&this.__dU&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(c)==b)){if(qx.event.Registration.hasListener(this._window,a)){this.__dW=true;qx.event.Registration.fireEvent(this._window,a);}
;}
else {this.__dW=true;qx.event.Registration.fireEvent(this._window,a);}
;}
;}
,__eb:function(){this.__dX=true;qx.event.Registration.fireEvent(this._window,g);}
,isApplicationReady:function(){return this.__dW;}
,isApplicationInitialized:function(){return this.__dX;}
,_initObserver:function(){if(qx.$$domReady||document.readyState==f||document.readyState==a){this.__dU=true;this.__ea();}
else {this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);if(qx.core.Environment.get(c)==i||qx.core.Environment.get(c)==m||qx.core.Environment.get(c)==h||(qx.core.Environment.get(c)==b&&qx.core.Environment.get(q)>8)){qx.bom.Event.addNativeListener(this._window,o,this._onNativeLoadWrapped);}
else {var self=this;var C=function(){try{document.documentElement.doScroll(n);if(document.body){self._onNativeLoadWrapped();}
;}
catch(D){window.setTimeout(C,100);}
;}
;C();}
;qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);}
;this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);qx.bom.Event.addNativeListener(this._window,l,this._onNativeUnloadWrapped);}
,_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);}
;qx.bom.Event.removeNativeListener(this._window,l,this._onNativeUnloadWrapped);this._onNativeLoadWrapped=null;this._onNativeUnloadWrapped=null;}
,_onNativeLoad:function(){var E=qx.core.Environment.select(j,{"true":qx.event.GlobalError.observeMethod(this.__ec),"false":this.__ec});E.apply(this,arguments);}
,__ec:function(){this.__dU=true;this.__ea();}
,_onNativeUnload:function(){var F=qx.core.Environment.select(j,{"true":qx.event.GlobalError.observeMethod(this.__ed),"false":this.__ed});F.apply(this,arguments);}
,__ed:function(){if(!this.__dY){this.__dY=true;try{qx.event.Registration.fireEvent(this._window,p);}
catch(e){throw e;}
;}
;}
},destruct:function(){this._stopObserver();this._window=null;}
,defer:function(G){qx.event.Registration.addHandler(G);}
});}
)();
(function(){var a="qx.event.type.Native";qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,e,f,d,c){qx.event.type.Event.prototype.init.call(this,d,c);this._target=e||qx.bom.Event.getTarget(b);this._relatedTarget=f||qx.bom.Event.getRelatedTarget(b);if(b.timeStamp){this._timeStamp=b.timeStamp;}
;this._native=b;this._returnValue=null;return this;}
,clone:function(g){var h=qx.event.type.Event.prototype.clone.call(this,g);var i={};h._native=this._cloneNativeEvent(this._native,i);h._returnValue=this._returnValue;return h;}
,_cloneNativeEvent:function(j,k){k.preventDefault=(function(){}
);return k;}
,preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);qx.bom.Event.preventDefault(this._native);}
,getNativeEvent:function(){return this._native;}
,setReturnValue:function(l){this._returnValue=l;}
,getReturnValue:function(){return this._returnValue;}
}});}
)();
(function(){var a="qx.globalErrorHandling",b="qx.event.handler.Window";qx.Class.define(b,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(c){qx.core.Object.call(this);this._manager=c;this._window=c.getWindow();this._initWindowObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(f,d){}
,registerEvent:function(i,h,g){}
,unregisterEvent:function(l,k,j){}
,_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);var m=qx.event.handler.Window.SUPPORTED_TYPES;for(var n in m){qx.bom.Event.addNativeListener(this._window,n,this._onNativeWrapper);}
;}
,_stopWindowObserver:function(){var o=qx.event.handler.Window.SUPPORTED_TYPES;for(var p in o){qx.bom.Event.removeNativeListener(this._window,p,this._onNativeWrapper);}
;}
,_onNative:function(){var q=qx.core.Environment.select(a,{"true":qx.event.GlobalError.observeMethod(this.__ee),"false":this.__ee});q.apply(this,arguments);}
,__ee:function(e){if(this.isDisposed()){return;}
;var v=this._window;var s;try{s=v.document;}
catch(w){return;}
;var t=s.documentElement;var r=qx.bom.Event.getTarget(e);if(r==null||r===v||r===s||r===t){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,v]);qx.event.Registration.dispatchEvent(v,event);var u=event.getReturnValue();if(u!=null){e.returnValue=u;return u;}
;}
;}
},destruct:function(){this._stopWindowObserver();this._manager=this._window=null;}
,defer:function(x){qx.event.Registration.addHandler(x);}
});}
)();
(function(){var a="ready",b="shutdown",c="beforeunload",d="qx.core.Init";qx.Class.define(d,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__dS:function(e){var f=this.getApplication();if(f){e.setReturnValue(f.close());}
;}
,__dT:function(){var g=this.getApplication();if(g){g.terminate();}
;}
},defer:function(h){qx.event.Registration.addListener(window,a,h.ready,h);qx.event.Registration.addListener(window,b,h.__dT,h);qx.event.Registration.addListener(window,c,h.__dS,h);}
});}
)();
(function(){var a="qx.application.Native";qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){}
,finalize:function(){}
,close:function(){}
,terminate:function(){}
}});}
)();
(function(){var a="</th></tr>",b="demobrowser.demo.event.EventDemo",c="</th><th>",d="",e="</td><td>",f="<table><tr><th>",g="<tr><td>",h="btnClear",j="tap",k="</table>",l="</td></tr>";qx.Class.define(b,{extend:qx.application.Native,members:{main:function(){qx.application.Native.prototype.main.call(this);var m=document.getElementById(h);if(m){qx.bom.Element.addListener(m,j,this._clearLog,this);}
;}
,_initLogger:function(p,n,o){this.__q=f+p.join(c)+a;this.__r=o||50;this.__s=n;this._clearLog();}
,_clearLog:function(){this.__s.innerHTML=this.__q+k;this.__t=[];}
,_log:function(q){this.__t.unshift(q);this.__t=this.__t.slice(0,this.__r);var r=[this.__q];for(var i=0;i<this.__t.length;i++ ){r.push(g,this.__t[i].join(e),l);}
;r.push(k);this.__s.innerHTML=r.join(d);this.__s.scrollTop=0;}
,__q:null,__r:null,__s:null,__t:null},destruct:function(){this.__s=this.__t=null;}
});}
)();
(function(){var a="text",b="engine.version",c="keydown",d="radio",f="textarea",g="password",h="propertychange",j="select-multiple",k="change",m="input",n="value",p="select",q="browser.documentmode",r="browser.version",s="opera",t="keyup",u="mshtml",v="engine.name",w="keypress",x="checkbox",y="qx.event.handler.Input",z="checked";qx.Class.define(y,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);if((qx.core.Environment.get(v)==s)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);}
;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__mE:false,__mF:null,__mG:null,__mH:null,canHandleEvent:function(C,B){var A=C.tagName.toLowerCase();if(B===m&&(A===m||A===f)){return true;}
;if(B===k&&(A===m||A===f||A===p)){return true;}
;return false;}
,registerEvent:function(H,G,E){if(qx.core.Environment.get(v)==u&&(qx.core.Environment.get(b)<9||(qx.core.Environment.get(b)>=9&&qx.core.Environment.get(q)<9))){if(!H.__mI){var F=H.tagName.toLowerCase();var D=H.type;if(D===a||D===g||F===f||D===x||D===d){qx.bom.Event.addNativeListener(H,h,this._onPropertyWrapper);}
;if(D!==x&&D!==d){qx.bom.Event.addNativeListener(H,k,this._onChangeValueWrapper);}
;if(D===a||D===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,H);qx.bom.Event.addNativeListener(H,w,this._onKeyPressWrapped);}
;H.__mI=true;}
;}
else {if(G===m){this.__mJ(H);}
else if(G===k){if(H.type===d||H.type===x){qx.bom.Event.addNativeListener(H,k,this._onChangeCheckedWrapper);}
else {qx.bom.Event.addNativeListener(H,k,this._onChangeValueWrapper);}
;if((qx.core.Environment.get(v)==s)||(qx.core.Environment.get(v)==u)){if(H.type===a||H.type===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,H);qx.bom.Event.addNativeListener(H,w,this._onKeyPressWrapped);}
;}
;}
;}
;}
,__mJ:qx.core.Environment.select(v,{"mshtml":function(I){if(qx.core.Environment.get(b)>=9&&qx.core.Environment.get(q)>=9){qx.bom.Event.addNativeListener(I,m,this._onInputWrapper);if(I.type===a||I.type===g||I.type===f){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,I);qx.bom.Event.addNativeListener(I,t,this._inputFixWrapper);}
;}
;}
,"webkit":function(K){var J=K.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(b))<532&&J==f){qx.bom.Event.addNativeListener(K,w,this._onInputWrapper);}
;qx.bom.Event.addNativeListener(K,m,this._onInputWrapper);}
,"opera":function(L){qx.bom.Event.addNativeListener(L,t,this._onKeyUpWrapper);qx.bom.Event.addNativeListener(L,c,this._onKeyDownWrapper);qx.bom.Event.addNativeListener(L,m,this._onInputWrapper);}
,"default":function(M){qx.bom.Event.addNativeListener(M,m,this._onInputWrapper);}
}),unregisterEvent:function(Q,P){if(qx.core.Environment.get(v)==u&&qx.core.Environment.get(b)<9&&qx.core.Environment.get(q)<9){if(Q.__mI){var O=Q.tagName.toLowerCase();var N=Q.type;if(N===a||N===g||O===f||N===x||N===d){qx.bom.Event.removeNativeListener(Q,h,this._onPropertyWrapper);}
;if(N!==x&&N!==d){qx.bom.Event.removeNativeListener(Q,k,this._onChangeValueWrapper);}
;if(N===a||N===g){qx.bom.Event.removeNativeListener(Q,w,this._onKeyPressWrapped);}
;try{delete Q.__mI;}
catch(R){Q.__mI=null;}
;}
;}
else {if(P===m){this.__mK(Q);}
else if(P===k){if(Q.type===d||Q.type===x){qx.bom.Event.removeNativeListener(Q,k,this._onChangeCheckedWrapper);}
else {qx.bom.Event.removeNativeListener(Q,k,this._onChangeValueWrapper);}
;}
;if((qx.core.Environment.get(v)==s)||(qx.core.Environment.get(v)==u)){if(Q.type===a||Q.type===g){qx.bom.Event.removeNativeListener(Q,w,this._onKeyPressWrapped);}
;}
;}
;}
,__mK:qx.core.Environment.select(v,{"mshtml":function(S){if(qx.core.Environment.get(b)>=9&&qx.core.Environment.get(q)>=9){qx.bom.Event.removeNativeListener(S,m,this._onInputWrapper);if(S.type===a||S.type===g||S.type===f){qx.bom.Event.removeNativeListener(S,t,this._inputFixWrapper);}
;}
;}
,"webkit":function(U){var T=U.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(b))<532&&T==f){qx.bom.Event.removeNativeListener(U,w,this._onInputWrapper);}
;qx.bom.Event.removeNativeListener(U,m,this._onInputWrapper);}
,"opera":function(V){qx.bom.Event.removeNativeListener(V,t,this._onKeyUpWrapper);qx.bom.Event.removeNativeListener(V,c,this._onKeyDownWrapper);qx.bom.Event.removeNativeListener(V,m,this._onInputWrapper);}
,"default":function(W){qx.bom.Event.removeNativeListener(W,m,this._onInputWrapper);}
}),_onKeyPress:qx.core.Environment.select(v,{"mshtml":function(e,X){if(e.keyCode===13){if(X.value!==this.__mG){this.__mG=X.value;qx.event.Registration.fireEvent(X,k,qx.event.type.Data,[X.value]);}
;}
;}
,"opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__mG){this.__mG=Y.value;qx.event.Registration.fireEvent(Y,k,qx.event.type.Data,[Y.value]);}
;}
;}
,"default":null}),_inputFix:qx.core.Environment.select(v,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__mH){this.__mH=ba.value;qx.event.Registration.fireEvent(ba,m,qx.event.type.Data,[ba.value]);}
;}
;}
,"default":null}),_onKeyDown:qx.core.Environment.select(v,{"opera":function(e){if(e.keyCode===13){this.__mE=true;}
;}
,"default":null}),_onKeyUp:qx.core.Environment.select(v,{"opera":function(e){if(e.keyCode===13){this.__mE=false;}
;}
,"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);var bb=bc.tagName.toLowerCase();if(!this.__mE||bb!==m){if((qx.core.Environment.get(v)==s)&&qx.core.Environment.get(r)<10.6){this.__mF=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);}
,0);}
else {qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);}
;}
;}
),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var bd=qx.bom.Event.getTarget(e);var be=bd.value;if(bd.type===j){var be=[];for(var i=0,o=bd.options,l=o.length;i<l;i++ ){if(o[i].selected){be.push(o[i].value);}
;}
;}
;qx.event.Registration.fireEvent(bd,k,qx.event.type.Data,[be]);}
),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bf=qx.bom.Event.getTarget(e);if(bf.type===d){if(bf.checked){qx.event.Registration.fireEvent(bf,k,qx.event.type.Data,[bf.value]);}
;}
else {qx.event.Registration.fireEvent(bf,k,qx.event.type.Data,[bf.checked]);}
;}
),_onProperty:qx.core.Environment.select(v,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bg=qx.bom.Event.getTarget(e);var bh=e.propertyName;if(bh===n&&(bg.type===a||bg.type===g||bg.tagName.toLowerCase()===f)){if(!bg.$$inValueSet){qx.event.Registration.fireEvent(bg,m,qx.event.type.Data,[bg.value]);}
;}
else if(bh===z){if(bg.type===x){qx.event.Registration.fireEvent(bg,k,qx.event.type.Data,[bg.checked]);}
else if(bg.checked){qx.event.Registration.fireEvent(bg,k,qx.event.type.Data,[bg.value]);}
;}
;}
),"default":function(){}
})},defer:function(bi){qx.event.Registration.addHandler(bi);}
});}
)();
(function(){var a="qx.event.handler.Appear",b="engine.name",c="mshtml",d="disappear",e="appear",f="browser.documentmode";qx.Class.define(a,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(g){qx.core.Object.call(this);this.__dQ=g;this.__id={};qx.event.handler.Appear.__ie[this.toHashCode()]=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__ie:{},refresh:function(){var h=this.__ie;for(var i in h){h[i].refresh();}
;}
},members:{__dQ:null,__id:null,canHandleEvent:function(k,j){}
,registerEvent:function(o,p,m){var n=qx.core.ObjectRegistry.toHashCode(o)+p;var l=this.__id;if(l&&!l[n]){l[n]=o;o.$$displayed=o.offsetWidth>0;}
;}
,unregisterEvent:function(t,u,r){var s=qx.core.ObjectRegistry.toHashCode(t)+u;var q=this.__id;if(!q){return;}
;if(q[s]){delete q[s];}
;}
,refresh:function(){var w=this.__id;var x=qx.core.Environment.get(b)==c&&qx.core.Environment.get(f)<9;var v={};var self=this;Object.keys(w).forEach(function(y){var z=w[y];if(z===undefined){return;}
;qx.event.Utils.then(v,function(){var A=z.offsetWidth>0;if(!A&&x){A=z.offsetWidth>0;}
;if((!!z.$$displayed)!==A){z.$$displayed=A;var B=qx.event.Registration.createEvent(A?e:d);return self.__dQ.dispatchEvent(z,B);}
;}
);}
);return v.promise;}
},destruct:function(){this.__dQ=this.__id=null;delete qx.event.handler.Appear.__ie[this.toHashCode()];}
,defer:function(C){qx.event.Registration.addHandler(C);}
});}
)();
(function(){var a="The context object '",b="events promised done",c="bubbleList=",d="events promised",e="targetList=",f="serial #",g="] => localList[",h="qx.debug",j="] localList.length=",k="Missing implementation",l="] -> localList[",m=": ",n=", type=",o="]: localList.length=",p="Aborted serial=",q="' for the event '",r="' of '",s="captureList[",t="events done",u="'is already disposed.",v="qx.event.dispatch.AbstractBubbling",w="abstract",x="] callListener",y="Calling target serial=",z="] is blacklisted",A="captureList=",B="targetList[",C="bubbleList[";qx.Class.define(v,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:w,construct:function(D){this._manager=D;}
,members:{_getParent:function(E){throw new Error(k);}
,canDispatchEvent:function(G,event,F){return event.getBubbles();}
,dispatchEvent:function(J,event,T){var parent=J;var O=this._manager;var L,V;var R;var U=[];L=O.getListeners(J,T,true);V=O.getListeners(J,T,false);if(L){U.push(L);}
;if(V){U.push(V);}
;var parent=this._getParent(J);var I=[];var H=[];var K=[];var M=[];while(parent!=null){L=O.getListeners(parent,T,true);if(L){K.push(L);M.push(parent);}
;V=O.getListeners(parent,T,false);if(V){I.push(V);H.push(parent);}
;parent=this._getParent(parent);}
;var self=this;var P={};var N=false;var Q=function(){}
;if(N){var S=(this.SERIAL||0)+1;this.SERIAL=S+1;Q=function(){var W=[].slice.apply(arguments);W.unshift(f+S+m);console.log.apply(this,W);}
;}
;qx.event.Utils.catch(P,function(){Q(p+S+n+event.getType());}
);qx.event.Utils.then(P,function(){event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);Q(A+K.length);return qx.event.Utils.series(K,function(X,i){Q(s+i+o+X.length);var Y=M[i];event.setCurrentTarget(Y);var ba=qx.event.Utils.series(X,function(bb,bc){R=bb.context||Y;if(qx.core.Environment.get(h)){if(R&&R.isDisposed&&R.isDisposed()){self.warn(a+R+q+T+r+Y+u);}
;}
;if(!self._manager.isBlacklisted(bb.unique)){Q(s+i+g+bc+x);return bb.handler.call(R,event);}
else {Q(s+i+g+bc+z);}
;}
,true);if(ba===qx.event.Utils.ABORT){return qx.event.Utils.reject(P);}
;if(event.getPropagationStopped()){return qx.event.Utils.reject(P);}
;return ba;}
);}
);qx.event.Utils.then(P,function(){event.setEventPhase(qx.event.type.Event.AT_TARGET);event.setCurrentTarget(J);Q(e+U.length);return qx.event.Utils.series(U,function(bd,i){Q(B+i+j+bd.length);var be=qx.event.Utils.series(bd,function(bf,bg){Q(B+i+l+bg+x);R=bf.context||J;if(qx.core.Environment.get(h)){if(R&&R.isDisposed&&R.isDisposed()){self.warn(a+R+q+T+r+J+u);}
;}
;Q(y+S+n+event.getType());return bf.handler.call(R,event);}
,true);if(be===qx.event.Utils.ABORT){return qx.event.Utils.reject(P);}
;if(event.getPropagationStopped()){return qx.event.Utils.reject(P);}
;return be;}
);}
);qx.event.Utils.then(P,function(){event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);Q(c+I.length);return qx.event.Utils.series(I,function(bh,i){Q(C+i+j+bh.length);var bi=H[i];event.setCurrentTarget(bi);var bj=qx.event.Utils.series(bh,function(bk,bl){Q(C+i+l+bl+x);R=bk.context||bi;if(qx.core.Environment.get(h)){if(R&&R.isDisposed&&R.isDisposed()){self.warn(a+R+q+T+r+bi+u);}
;}
;return bk.handler.call(R,event);}
,true);if(bj===qx.event.Utils.ABORT){return qx.event.Utils.reject(P);}
;if(event.getPropagationStopped()){return qx.event.Utils.reject(P);}
;return bj;}
);}
);if(N){if(P.promise){Q(d);qx.event.Utils.then(P,function(){Q(b);}
);}
else {Q(t);}
;}
;return P.promise;}
}});}
)();
(function(){var a="qx.event.dispatch.DomBubbling";qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;}
,canDispatchEvent:function(d,event,c){return d.nodeType!==undefined&&event.getBubbles();}
},defer:function(e){qx.event.Registration.addDispatcher(e);}
});}
)();
(function(){var a="ipod",b="pc",c="ps3",d=")",e="device.type",f="psp",g="wii",h="xbox",i="\.",j="iemobile",k="ipad",l="ds",m="(",n="mobile",o="tablet",p="ontouchstart",q="g",r="iphone",s="|",t="qx.bom.client.Device",u="desktop",v="device.name",w="device.touch",x="undefined",y="device.pixelRatio";qx.Bootstrap.define(t,{statics:{__cB:{"Windows Phone":j,"iPod":a,"iPad":k,"iPhone":r,"PSP":f,"PLAYSTATION 3":c,"Nintendo Wii":g,"Nintendo DS":l,"XBOX":h,"Xbox":h},getName:function(){var B=[];for(var A in qx.bom.client.Device.__cB){B.push(A);}
;var C=new RegExp(m+B.join(s).replace(/\./g,i)+d,q);var z=C.exec(navigator.userAgent);if(z&&z[1]){return qx.bom.client.Device.__cB[z[1]];}
;return b;}
,getType:function(){return qx.bom.client.Device.detectDeviceType(navigator.userAgent);}
,detectDeviceType:function(D){if(qx.bom.client.Device.detectTabletDevice(D)){return o;}
else if(qx.bom.client.Device.detectMobileDevice(D)){return n;}
;return u;}
,detectMobileDevice:function(E){return /android.+mobile|ip(hone|od)|bada\/|blackberry|BB10|maemo|opera m(ob|in)i|fennec|NetFront|phone|psp|symbian|IEMobile|windows (ce|phone)|xda/i.test(E);}
,detectTabletDevice:function(G){var H=(/MSIE 10/i.test(G))&&(/ARM/i.test(G))&&!(/windows phone/i.test(G));var F=(!(/android.+mobile|Tablet PC/i.test(G))&&(/Android|ipad|tablet|playbook|silk|kindle|psp/i.test(G)));return H||F;}
,getDevicePixelRatio:function(){if(typeof window.devicePixelRatio!==x){return window.devicePixelRatio;}
;return 1;}
,getTouch:function(){return ((p in window)||window.navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0);}
},defer:function(I){qx.core.Environment.add(v,I.getName);qx.core.Environment.add(w,I.getTouch);qx.core.Environment.add(e,I.getType);qx.core.Environment.add(y,I.getDevicePixelRatio);}
});}
)();
(function(){var a="touchmove",b="os.name",c="mousedown",d="event.dispatchevent",e="MSPointerDown",f="gesturemove",g="pointerover",h="touch",k="mouseout",m="ms",n="Processed",o="pointercancel",p="pointerleave",q="touchstart",r="pointerenter",s="mouse",t="event.mspointer",u="mousemove",v="MSPointerCancel",w="gesturefinish",z="browser.documentmode",A="pointerup",B="touchend",C="osx",D="mouseover",E="$$qx",F="pointerdown",G="MSPointerUp",H="pointermove",I="MSPointerOver",J="gecko",K="mshtml",L="engine.name",M="mouseup",N="touchcancel",O="contextmenu",P="gesturecancel",Q="MSPointerMove",R="MSPointerOut",S="gesturebegin",T="qx.event.handler.PointerCore",U=".",V="device.touch",W="pointerout";qx.Bootstrap.define(T,{extend:Object,implement:[qx.core.IDisposable],statics:{MOUSE_TO_POINTER_MAPPING:{mousedown:F,mouseup:A,mousemove:H,mouseout:W,mouseover:g},TOUCH_TO_POINTER_MAPPING:{touchstart:F,touchend:A,touchmove:H,touchcancel:o},MSPOINTER_TO_POINTER_MAPPING:{MSPointerDown:F,MSPointerMove:H,MSPointerUp:A,MSPointerCancel:o,MSPointerLeave:p,MSPointerEnter:r,MSPointerOver:g,MSPointerOut:W},POINTER_TO_GESTURE_MAPPING:{pointerdown:S,pointerup:w,pointercancel:P,pointermove:f},LEFT_BUTTON:(qx.core.Environment.get(L)==K&&qx.core.Environment.get(z)<=8)?1:0,SIM_MOUSE_DISTANCE:25,SIM_MOUSE_DELAY:2500,__gE:null},construct:function(ba,bb){this.__gF=ba;this.__gG=bb;this.__gH=[];this.__gI=[];this.__gJ=[];this._processedFlag=E+this.classname.substr(this.classname.lastIndexOf(U)+1)+n;var Y=qx.core.Environment.get(L);var X=parseInt(qx.core.Environment.get(z),10);if(Y==K&&X==10){this.__gH=[e,Q,G,v,I,R,F,H,A,o,g,W];this._initPointerObserver();}
else {if(qx.core.Environment.get(t)){this.__gK=true;}
;this.__gH=[F,H,A,o,g,W];this._initPointerObserver();}
;if(!qx.core.Environment.get(t)){if(qx.core.Environment.get(V)){this.__gH=[q,B,a,N];this._initObserver(this._onTouchEvent);}
;this.__gH=[c,M,u,D,k,O];this._initObserver(this._onMouseEvent);}
;}
,members:{__gF:null,__gG:null,__gH:null,__gK:false,__gL:null,__gM:0,__gI:null,__gN:null,__gJ:null,_processedFlag:null,_initPointerObserver:function(){this._initObserver(this._onPointerEvent);}
,_initObserver:function(bc,bd){this.__gL=qx.lang.Function.listener(bc,this);this.__gH.forEach(function(be){if(bd&&qx.dom.Node.isDocument(this.__gF)){if(!this.__gF.$$emitter){this.__gF.$$emitter=new qx.event.Emitter();}
;this.__gF.$$emitter.on(be,this.__gL);}
else {qx.bom.Event.addNativeListener(this.__gF,be,this.__gL);}
;}
.bind(this));}
,_onPointerEvent:function(bh){if(!qx.core.Environment.get(t)||(qx.core.Environment.get(z)===10&&bh.type.toLowerCase().indexOf(m)==-1)){return;}
;if(!this.__gK){bh.stopPropagation();}
;var bf=qx.event.handler.PointerCore.MSPOINTER_TO_POINTER_MAPPING[bh.type]||bh.type;var bi=qx.bom.Event.getTarget(bh);var bg=new qx.event.type.dom.Pointer(bf,bh);this._fireEvent(bg,bf,bi);}
,_onTouchEvent:function(bl){if(bl[this._processedFlag]){return;}
;bl[this._processedFlag]=true;var bm=qx.event.handler.PointerCore.TOUCH_TO_POINTER_MAPPING[bl.type];var bo=bl.changedTouches;this._determineActiveTouches(bl.type,bo);if(bl.touches.length<this.__gJ.length){for(var i=this.__gJ.length-1;i>=0;i-- ){var bq=new qx.event.type.dom.Pointer(o,bl,{identifier:this.__gJ[i].identifier,target:bl.target,pointerType:h,pointerId:this.__gJ[i].identifier+2});this._fireEvent(bq,o,bl.target);}
;this.__gN=null;this.__gJ=[];return;}
;if(bl.type==q&&this.__gN===null){this.__gN=bo[0].identifier;}
;for(var i=0,l=bo.length;i<l;i++ ){var bp=bo[i];var bn=bl.view.document.elementFromPoint(bp.clientX,bp.clientY)||bl.target;var bk={clientX:bp.clientX,clientY:bp.clientY,pageX:bp.pageX,pageY:bp.pageY,identifier:bp.identifier,screenX:bp.screenX,screenY:bp.screenY,target:bn,pointerType:h,pointerId:bp.identifier+2};if(bl.type==q){var bj=new qx.event.type.dom.Pointer(g,bl,bk);this._fireEvent(bj,g,bk.target);}
;if(bp.identifier==this.__gN){bk.isPrimary=true;bk.button=0;bk.buttons=1;qx.event.handler.PointerCore.__gE={"x":bp.clientX,"y":bp.clientY,"time":new Date().getTime()};}
;var br=new qx.event.type.dom.Pointer(bm,bl,bk);this._fireEvent(br,bm,bk.target);if(bl.type==B||bl.type==N){var bs=new qx.event.type.dom.Pointer(W,bl,bk);this._fireEvent(bs,W,bl.target);if(this.__gN==bp.identifier){this.__gN=null;}
;}
;}
;}
,_onMouseEvent:function(bt){if(bt[this._processedFlag]){return;}
;bt[this._processedFlag]=true;if(this._isSimulatedMouseEvent(bt.clientX,bt.clientY)){return;}
;if(bt.type==c){this.__gI[bt.which]=1;}
else if(bt.type==M){if(qx.core.Environment.get(b)==C&&qx.core.Environment.get(L)==J){if(this.__gI[bt.which]!=1&&bt.ctrlKey){this.__gI[1]=0;}
;}
;this.__gI[bt.which]=0;}
;var bv=qx.event.handler.PointerCore.MOUSE_TO_POINTER_MAPPING[bt.type];var bu=qx.bom.Event.getTarget(bt);var bw=qx.lang.Array.sum(this.__gI);var bz={pointerType:s,pointerId:1};if(this.__gM!=bw&&bw!==0&&this.__gM!==0){var bx=new qx.event.type.dom.Pointer(H,bt,bz);this._fireEvent(bx,H,bu);}
;this.__gM=bw;if(bt.type==c&&bw>1){return;}
;if(bt.type==M&&bw>0){return;}
;if(bt.type==O){this.__gI[bt.which]=0;return;}
;var by=new qx.event.type.dom.Pointer(bv,bt,bz);this._fireEvent(by,bv,bu);}
,_determineActiveTouches:function(bD,bC){if(bD==q){for(var i=0;i<bC.length;i++ ){this.__gJ.push(bC[i]);}
;}
else if(bD==B||bD==N){var bA=[];for(var i=0;i<this.__gJ.length;i++ ){var bB=true;for(var j=0;j<bC.length;j++ ){if(this.__gJ[i].identifier==bC[j].identifier){bB=false;break;}
;}
;if(bB){bA.push(this.__gJ[i]);}
;}
;this.__gJ=bA;}
;}
,_isSimulatedMouseEvent:function(x,y){var bF=qx.event.handler.PointerCore.__gE;if(bF){var bG=new Date().getTime()-bF.time;var bE=qx.event.handler.PointerCore.SIM_MOUSE_DISTANCE;var bI=Math.abs(x-qx.event.handler.PointerCore.__gE.x);var bH=Math.abs(y-qx.event.handler.PointerCore.__gE.y);if(bG<qx.event.handler.PointerCore.SIM_MOUSE_DELAY){if(bI<bE||bH<bE){return true;}
;}
;}
;return false;}
,_stopObserver:function(){for(var i=0;i<this.__gH.length;i++ ){qx.bom.Event.removeNativeListener(this.__gF,this.__gH[i],this.__gL);}
;}
,_fireEvent:function(bL,bJ,bM){bM=bM||bL.target;bJ=bJ||bL.type;var bN;if((bL.pointerType!==s||bL.button<=qx.event.handler.PointerCore.LEFT_BUTTON)&&(bJ==F||bJ==A||bJ==H)){bN=new qx.event.type.dom.Pointer(qx.event.handler.PointerCore.POINTER_TO_GESTURE_MAPPING[bJ],bL);qx.event.type.dom.Pointer.normalize(bN);try{bN.srcElement=bM;}
catch(bO){}
;}
;if(qx.core.Environment.get(d)){var bK={};if(!this.__gK){qx.event.Utils.then(bK,function(){return bM.dispatchEvent(bL);}
);}
;if(bN){qx.event.Utils.then(bK,function(){return bM.dispatchEvent(bN);}
);}
;return bK.promise;}
else {try{bL.srcElement=bM;}
catch(bP){}
;while(bM){if(bM.$$emitter){bL.currentTarget=bM;if(!bL._stopped){bM.$$emitter.emit(bJ,bL);}
;if(bN&&!bN._stopped){bN.currentTarget=bM;bM.$$emitter.emit(bN.type,bN);}
;}
;bM=bM.parentNode;}
;}
;}
,dispose:function(){this._stopObserver();this.__gF=this.__gG=null;}
}});}
)();
(function(){var a="qx.event.Emitter",b="*";qx.Bootstrap.define(a,{extend:Object,statics:{__gB:[]},members:{__gz:null,__gC:null,on:function(name,c,d){var e=qx.event.Emitter.__gB.length;this.__gD(name).push({listener:c,ctx:d,id:e,name:name});qx.event.Emitter.__gB.push({name:name,listener:c,ctx:d});return e;}
,once:function(name,f,g){var h=qx.event.Emitter.__gB.length;this.__gD(name).push({listener:f,ctx:g,once:true,id:h});qx.event.Emitter.__gB.push({name:name,listener:f,ctx:g});return h;}
,off:function(name,m,k){var l=this.__gD(name);for(var i=l.length-1;i>=0;i-- ){var n=l[i];if(n.listener==m&&n.ctx==k){l.splice(i,1);qx.event.Emitter.__gB[n.id]=null;return n.id;}
;}
;return null;}
,offById:function(p){var o=qx.event.Emitter.__gB[p];if(o){this.off(o.name,o.listener,o.ctx);}
;return null;}
,addListener:function(name,q,r){return this.on(name,q,r);}
,addListenerOnce:function(name,s,t){return this.once(name,s,t);}
,removeListener:function(name,u,v){this.off(name,u,v);}
,removeListenerById:function(w){this.offById(w);}
,emit:function(name,A){var x=this.__gD(name).concat();var y=[];for(var i=0;i<x.length;i++ ){var z=x[i];z.listener.call(z.ctx,A);if(z.once){y.push(z);}
;}
;y.forEach(function(B){var C=this.__gD(name);var D=C.indexOf(B);C.splice(D,1);}
.bind(this));x=this.__gD(b);for(var i=x.length-1;i>=0;i-- ){var z=x[i];z.listener.call(z.ctx,A);}
;}
,getListeners:function(){return this.__gz;}
,getEntryById:function(F){for(var name in this.__gz){var E=this.__gz[name];for(var i=0,j=E.length;i<j;i++ ){if(E[i].id===F){return E[i];}
;}
;}
;}
,__gD:function(name){if(this.__gz==null){this.__gz={};}
;if(this.__gz[name]==null){this.__gz[name]=[];}
;return this.__gz[name];}
}});}
)();
(function(){var a="qx.event.type.dom.Custom",b="UIEvents",c="function",d="event.customevent",e="object";qx.Bootstrap.define(a,{extend:Object,statics:{PROPERTIES:{bubbles:false,cancelable:true}},construct:function(f,g,h){this._type=f;this._event=this._createEvent();this._initEvent(g,h);this._event._original=g;this._event.preventDefault=function(){if(this._original.preventDefault){this._original.preventDefault();}
else {try{this._original.returnValue=false;}
catch(i){}
;}
;}
;if(this._event.stopPropagation){this._event._nativeStopPropagation=this._event.stopPropagation;}
;this._event.stopPropagation=function(){this._stopped=true;if(this._nativeStopPropagation){this._original.stopPropagation();this._nativeStopPropagation();}
else {this._original.cancelBubble=true;}
;}
;return this._event;}
,members:{_type:null,_event:null,_createEvent:function(){var j;if(qx.core.Environment.get(d)){j=new window.CustomEvent(this._type);}
else if(typeof document.createEvent==c){j=document.createEvent(b);}
else if(typeof document.createEventObject==e){j={};j.type=this._type;}
;return j;}
,_initEvent:function(k,m){m=m||{};var l=qx.lang.Object.clone(qx.event.type.dom.Custom.PROPERTIES);for(var n in m){l[n]=m[n];}
;if(this._event.initEvent){this._event.initEvent(this._type,l.bubbles,l.cancelable);}
;for(var n in l){try{this._event[n]=l[n];}
catch(o){}
;}
;}
}});}
)();
(function(){var a="bubbles",b="event.mouseevent",c="getScreenLeft",d="getPointerType",e="touch",f="ctrlKey",g="altKey",h="gecko",j="view",k="os.name",m="button",n="string",o="relatedTarget",p="buttons",q="event.mousecreateevent",r="mouse",s="clientX",t="qx.event.type.dom.Pointer",u="ios",v="pageY",w="cancelable",x="screenX",y="shiftKey",z="",A="number",B="detail",C="toElement",D="fromElement",E="getViewportLeft",F="function",G="clientY",H="os.version",I="engine.name",J="undefined",K="getViewportTop",L="screenY",M="getScreenTop",N="pen",O="metaKey",P="pageX",Q="object",R="getDocumentTop",S="which",T="getDocumentLeft";qx.Bootstrap.define(t,{extend:qx.event.type.dom.Custom,statics:{MOUSE_PROPERTIES:[a,w,j,B,x,L,s,G,P,v,f,g,y,O,m,S,o,D,C],POINTER_PROPERTIES:{pointerId:1,width:0,height:0,pressure:0.5,tiltX:0,tiltY:0,pointerType:z,isPrimary:false},READONLY_PROPERTIES:[],BIND_METHODS:[d,E,K,T,R,c,M],getPointerType:function(){if(typeof this.pointerType==n){return this.pointerType;}
;if(typeof this.pointerType==A){if(this.pointerType==this.MSPOINTER_TYPE_MOUSE){return r;}
;if(this.pointerType==this.MSPOINTER_TYPE_PEN){return N;}
;if(this.pointerType==this.MSPOINTER_TYPE_TOUCH){return e;}
;}
;return z;}
,getViewportLeft:function(){return this.clientX;}
,getViewportTop:function(){return this.clientY;}
,getDocumentLeft:function(){if(this.pageX!==undefined){return this.pageX;}
else {var U=qx.dom.Node.getWindow(this.srcElement);return this.clientX+qx.bom.Viewport.getScrollLeft(U);}
;}
,getDocumentTop:function(){if(this.pageY!==undefined){return this.pageY;}
else {var V=qx.dom.Node.getWindow(this.srcElement);return this.clientY+qx.bom.Viewport.getScrollTop(V);}
;}
,getScreenLeft:function(){return this.screenX;}
,getScreenTop:function(){return this.screenY;}
,normalize:function(event){var W=qx.event.type.dom.Pointer.BIND_METHODS;for(var i=0,l=W.length;i<l;i++ ){if(typeof event[W[i]]!=F){event[W[i]]=qx.event.type.dom.Pointer[W[i]].bind(event);}
;}
;}
},construct:function(X,Y,ba){return qx.event.type.dom.Custom.call(this,X,Y,ba);}
,members:{_createEvent:function(){var bb;if(qx.core.Environment.get(b)){bb=new window.MouseEvent(this._type);}
else if(typeof document.createEvent==F){bb=document.createEvent(qx.core.Environment.get(q));}
else if(typeof document.createEventObject==Q){bb={};bb.type=this._type;}
;return bb;}
,_initEvent:function(bc,bd){bd=bd||{};var bg=this._event;var bh={};qx.event.type.dom.Pointer.normalize(bc);Object.keys(qx.event.type.dom.Pointer.POINTER_PROPERTIES).concat(qx.event.type.dom.Pointer.MOUSE_PROPERTIES).forEach(function(bi){if(typeof bd[bi]!==J){bh[bi]=bd[bi];}
else if(typeof bc[bi]!==J){bh[bi]=bc[bi];}
else if(typeof qx.event.type.dom.Pointer.POINTER_PROPERTIES[bi]!==J){bh[bi]=qx.event.type.dom.Pointer.POINTER_PROPERTIES[bi];}
;}
);var bf;switch(bc.which){case 1:bf=1;break;case 2:bf=4;break;case 3:bf=2;break;default:bf=0;};if(bf!==undefined){bh.buttons=bf;bh.pressure=bf?0.5:0;}
;if(bg.initMouseEvent){bg.initMouseEvent(this._type,bh.bubbles,bh.cancelable,bh.view,bh.detail,bh.screenX,bh.screenY,bh.clientX,bh.clientY,bh.ctrlKey,bh.altKey,bh.shiftKey,bh.metaKey,bh.button,bh.relatedTarget);}
else if(bg.initUIEvent){bg.initUIEvent(this._type,bh.bubbles,bh.cancelable,bh.view,bh.detail);}
;for(var be in bh){if(bg[be]!==bh[be]&&qx.event.type.dom.Pointer.READONLY_PROPERTIES.indexOf(be)===-1){try{bg[be]=bh[be];}
catch(bj){}
;}
;}
;switch(bg.pointerType){case bc.MSPOINTER_TYPE_MOUSE:bg.pointerType=r;break;case bc.MSPOINTER_TYPE_PEN:bg.pointerType=N;break;case bc.MSPOINTER_TYPE_TOUCH:bg.pointerType=e;break;};if(bg.pointerType==r){bg.isPrimary=true;}
;}
},defer:function(bk){if(qx.core.Environment.get(I)==h){bk.READONLY_PROPERTIES.push(p);}
else if(qx.core.Environment.get(k)==u&&parseFloat(qx.core.Environment.get(H))>=8){bk.READONLY_PROPERTIES=bk.READONLY_PROPERTIES.concat(bk.MOUSE_PROPERTIES);}
;}
});}
)();
(function(){var a="ios",b="os.name",c="undefined",d="qx.bom.Viewport";qx.Bootstrap.define(d,{statics:{getWidth:function(e){var e=e||window;var f=e.document;return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;}
,getHeight:function(g){var g=g||window;var h=g.document;if(qx.core.Environment.get(b)==a&&window.innerHeight!=h.documentElement.clientHeight){return window.innerHeight;}
;return qx.bom.Document.isStandardMode(g)?h.documentElement.clientHeight:h.body.clientHeight;}
,getScrollLeft:function(i){var i=i?i:window;if(typeof i.pageXOffset!==c){return i.pageXOffset;}
;var j=i.document;return j.documentElement.scrollLeft||j.body.scrollLeft;}
,getScrollTop:function(k){var k=k?k:window;if(typeof k.pageYOffset!==c){return k.pageYOffset;}
;var l=k.document;return l.documentElement.scrollTop||l.body.scrollTop;}
,__fC:function(m){var o=this.getWidth(m)>this.getHeight(m)?90:0;var n=m.orientation;if(n==null||Math.abs(n%180)==o){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};}
else {return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};}
;}
,__fD:null,getOrientation:function(p){var p=p||window.top;var q=p.orientation;if(q==null){q=this.getWidth(p)>this.getHeight(p)?90:0;}
else {if(this.__fD==null){this.__fD=this.__fC(p);}
;q=this.__fD[q];}
;return q;}
,isLandscape:function(r){var s=this.getOrientation(r);return s===-90||s===90;}
,isPortrait:function(t){var u=this.getOrientation(t);return u===0||u===180;}
}});}
)();
(function(){var a="engine.name",b="CSS1Compat",c="position:absolute;width:0;height:0;width:1",d="engine.version",e="qx.bom.Document",f="1px",g="div";qx.Bootstrap.define(e,{statics:{isQuirksMode:qx.core.Environment.select(a,{"mshtml":function(h){if(qx.core.Environment.get(d)>=8){return (h||window).document.documentMode===5;}
else {return (h||window).document.compatMode!==b;}
;}
,"webkit":function(i){if(document.compatMode===undefined){var j=(i||window).document.createElement(g);j.style.cssText=c;return j.style.width===f?true:false;}
else {return (i||window).document.compatMode!==b;}
;}
,"default":function(k){return (k||window).document.compatMode!==b;}
}),isStandardMode:function(l){return !this.isQuirksMode(l);}
,getWidth:function(m){var o=(m||window).document;var n=qx.bom.Viewport.getWidth(m);var scroll=this.isStandardMode(m)?o.documentElement.scrollWidth:o.body.scrollWidth;return Math.max(scroll,n);}
,getHeight:function(p){var r=(p||window).document;var q=qx.bom.Viewport.getHeight(p);var scroll=this.isStandardMode(p)?r.documentElement.scrollHeight:r.body.scrollHeight;return Math.max(scroll,q);}
}});}
)();
(function(){var a="function",b="osx",c="CapsLock",d="os.name",e="ScrollLock",f="NumLock",g="opera",h="engine.name",i="qx.event.type.Dom";qx.Class.define(i,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8,CAPSLOCK_MASK:16,NUMLOCK_MASK:32,SCROLLLOCK_MASK:64},members:{_cloneNativeEvent:function(j,k){var k=qx.event.type.Native.prototype._cloneNativeEvent.call(this,j,k);k.shiftKey=j.shiftKey;k.ctrlKey=j.ctrlKey;k.altKey=j.altKey;k.metaKey=j.metaKey;if(typeof j.getModifierState===a){k.numLock=j.getModifierState(f);k.capsLock=j.getModifierState(c);k.scrollLock=j.getModifierState(e);}
else {k.numLock=false;k.capsLock=false;k.scrollLock=false;}
;return k;}
,getModifiers:function(){var l=0;var m=this._native;if(m.shiftKey){l|=qx.event.type.Dom.SHIFT_MASK;}
;if(m.ctrlKey){l|=qx.event.type.Dom.CTRL_MASK;}
;if(m.altKey){l|=qx.event.type.Dom.ALT_MASK;}
;if(m.metaKey){l|=qx.event.type.Dom.META_MASK;}
;return l;}
,getKeyLockState:function(){var n=0;var o=this._native;if(o.capsLock){n|=qx.event.type.Dom.CAPSLOCK_MASK;}
;if(o.numLock){n|=qx.event.type.Dom.NUMLOCK_MASK;}
;if(o.scrollLock){n|=qx.event.type.Dom.SCROLLLOCK_MASK;}
;return n;}
,isCtrlPressed:function(){return this._native.ctrlKey;}
,isShiftPressed:function(){return this._native.shiftKey;}
,isAltPressed:function(){return this._native.altKey;}
,isMetaPressed:function(){return this._native.metaKey;}
,isCapsLocked:function(){return this._native.capsLock;}
,isNumLocked:function(){return this._native.numLock;}
,isScrollLocked:function(){return this._native.scrollLock;}
,isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(d)==b&&qx.core.Environment.get(h)!=g){return this._native.metaKey;}
else {return this._native.ctrlKey;}
;}
}});}
)();
(function(){var a="mshtml",b="browser.documentmode",c="click",d="middle",e="none",f="contextmenu",g="left",h="engine.name",i="mouseover",j="mouseout",k="browser.name",l="mousemove",m="mouseleave",n="qx.event.type.Mouse",o="right",p="mouseenter",q="ie";qx.Class.define(n,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(r,s){var s=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,r,s);switch(r.type){case l:case p:case m:case i:case j:s.button=-1;break;default:s.button=r.button;break;};s.buttons=r.buttons;s.clientX=Math.round(r.clientX);s.clientY=Math.round(r.clientY);s.pageX=r.pageX?Math.round(r.pageX):undefined;s.pageY=r.pageY?Math.round(r.pageY):undefined;s.screenX=Math.round(r.screenX);s.screenY=Math.round(r.screenY);s.wheelDelta=r.wheelDelta;s.wheelDeltaX=r.wheelDeltaX;s.wheelDeltaY=r.wheelDeltaY;s.delta=r.delta;s.deltaX=r.deltaX;s.deltaY=r.deltaY;s.deltaZ=r.deltaZ;s.detail=r.detail;s.axis=r.axis;s.wheelX=r.wheelX;s.wheelY=r.wheelY;s.HORIZONTAL_AXIS=r.HORIZONTAL_AXIS;s.srcElement=r.srcElement;s.target=r.target;return s;}
,__ih:{'0':g,'2':o,'1':d},__ii:{'0':e,'1':g,'2':o,'4':d},__ij:{'1':g,'2':o,'4':d},stop:function(){this.stopPropagation();}
,getButton:function(){switch(this._type){case f:return o;case c:if(qx.core.Environment.get(k)===q&&qx.core.Environment.get(b)<9){return g;}
;default:if(!(qx.core.Environment.get(h)==a&&qx.core.Environment.get(b)<=8)){if(this._native.button===-1){return this.__ii[this._native.buttons]||e;}
;return this.__ih[this._native.button]||e;}
else {return this.__ij[this._native.button]||e;}
;};}
,isLeftPressed:function(){return this.getButton()===g;}
,isMiddlePressed:function(){return this.getButton()===d;}
,isRightPressed:function(){return this.getButton()===o;}
,getRelatedTarget:function(){return this._relatedTarget;}
,getViewportLeft:function(){return Math.round(this._native.clientX);}
,getViewportTop:function(){return Math.round(this._native.clientY);}
,getDocumentLeft:function(){if(this._native.pageX!==undefined){return Math.round(this._native.pageX);}
else if(this._native.srcElement){var t=qx.dom.Node.getWindow(this._native.srcElement);return Math.round(this._native.clientX)+qx.bom.Viewport.getScrollLeft(t);}
else {return Math.round(this._native.clientX)+qx.bom.Viewport.getScrollLeft(window);}
;}
,getDocumentTop:function(){if(this._native.pageY!==undefined){return Math.round(this._native.pageY);}
else if(this._native.srcElement){var u=qx.dom.Node.getWindow(this._native.srcElement);return Math.round(this._native.clientY)+qx.bom.Viewport.getScrollTop(u);}
else {return Math.round(this._native.clientY)+qx.bom.Viewport.getScrollTop(window);}
;}
,getScreenLeft:function(){return Math.round(this._native.screenX);}
,getScreenTop:function(){return Math.round(this._native.screenY);}
}});}
)();
(function(){var a="",b="mouse",c="number",d="touch",e="qx.event.type.Pointer",f="pen",g="string";qx.Class.define(e,{extend:qx.event.type.Mouse,members:{_cloneNativeEvent:function(h,i){i=qx.event.type.Mouse.prototype._cloneNativeEvent.call(this,h,i);i.pointerId=h.pointerId;i.width=h.width;i.height=h.height;i.pressure=h.pressure;i.tiltX=h.tiltX;i.tiltY=h.tiltY;i.pointerType=h.pointerType;i.isPrimary=h.isPrimary;i._original=h._original;i.MSPOINTER_TYPE_MOUSE=h.MSPOINTER_TYPE_MOUSE;i.MSPOINTER_TYPE_PEN=h.MSPOINTER_TYPE_PEN;i.MSPOINTER_TYPE_TOUCH=h.MSPOINTER_TYPE_TOUCH;return i;}
,getDocumentLeft:function(){var x=qx.event.type.Mouse.prototype.getDocumentLeft.call(this);if(x==0&&this.getPointerType()==d&&this._native._original!==undefined){x=Math.round(this._native._original.changedTouches[0].pageX)||0;}
;return x;}
,getDocumentTop:function(){var y=qx.event.type.Mouse.prototype.getDocumentTop.call(this);if(y==0&&this.getPointerType()==d&&this._native._original!==undefined){y=Math.round(this._native._original.changedTouches[0].pageY)||0;}
;return y;}
,getPointerId:function(){return this._native.pointerId||0;}
,getWidth:function(){return this._native.width||0;}
,getHeight:function(){return this._native.height||0;}
,getPressure:function(){return this._native.pressure||0;}
,getTiltX:function(){return this._native.tiltX||0;}
,getTiltY:function(){return this._native.tiltY||0;}
,getOriginalTarget:function(){if(this._native&&this._native._original){var j=this._native._original;try{if(j.type.indexOf(d)==0){if(j.changedTouches[0]){return document.elementFromPoint(j.changedTouches[0].clientX,j.changedTouches[0].clientY);}
;}
;}
catch(k){return qx.bom.Event.getTarget(this._native);}
;return qx.bom.Event.getTarget(j);}
else if(this._native){return qx.bom.Event.getTarget(this._native);}
;return qx.event.type.Mouse.prototype.getOriginalTarget.call(this);}
,getPointerType:function(){if(typeof this._native.pointerType==g){return this._native.pointerType;}
;if(typeof this._native.pointerType==c){if(this._native.pointerType==this._native.MSPOINTER_TYPE_MOUSE){return b;}
;if(this._native.pointerType==this._native.MSPOINTER_TYPE_PEN){return f;}
;if(this._native.pointerType==this._native.MSPOINTER_TYPE_TOUCH){return d;}
;}
;return a;}
,isPrimary:function(){return !!this._native.isPrimary;}
}});}
)();
(function(){var a="mshtml",b="engine.name",c="pointerup",d="dispose",e="useraction",f="mouse",g="pointercancel",h="pointerdown",i="pointermove",j="qx.event.handler.Pointer",k="browser.documentmode",l="qxanonymous";qx.Class.define(j,{extend:qx.event.handler.PointerCore,implement:[qx.event.IEventHandler,qx.core.IDisposable],statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{pointermove:1,pointerover:1,pointerout:1,pointerdown:1,pointerup:1,pointercancel:1,gesturebegin:1,gesturemove:1,gesturefinish:1,gesturecancel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true},construct:function(m){this.__dQ=m;this.__cF=m.getWindow();this.__ef=this.__cF.document;qx.event.handler.PointerCore.apply(this,[this.__ef]);}
,members:{__dQ:null,__cF:null,__ef:null,canHandleEvent:function(o,n){}
,registerEvent:function(r,q,p){}
,unregisterEvent:function(u,t,s){}
,_initPointerObserver:function(){var v=false;if(qx.core.Environment.get(b)==a&&qx.core.Environment.get(k)<9){v=true;}
;this._initObserver(this._onPointerEvent,v);}
,_fireEvent:function(y,w,z){if(!z){z=qx.bom.Event.getTarget(y);}
;while(z&&z.getAttribute&&z.getAttribute(l)){z=z.parentNode;}
;if(!w){w=y.type;}
;w=qx.event.handler.PointerCore.MSPOINTER_TO_POINTER_MAPPING[w]||w;if(z&&z.nodeType){qx.event.type.dom.Pointer.normalize(y);try{y.srcElement=z;}
catch(A){}
;var x={};var self=this;qx.event.Utils.track(x,function(){return qx.event.Registration.fireEvent(z,w,qx.event.type.Pointer,[y,z,null,true,true]);}
);qx.event.Utils.then(x,function(){if((y.getPointerType()!==f||y.button<=qx.event.handler.PointerCore.LEFT_BUTTON)&&(w==h||w==c||w==i||w==g)){return qx.event.Registration.fireEvent(self.__ef,qx.event.handler.PointerCore.POINTER_TO_GESTURE_MAPPING[w],qx.event.type.Pointer,[y,z,null,false,false]);}
;}
);qx.event.Utils.then(x,function(){return qx.event.Registration.fireEvent(self.__cF,e,qx.event.type.Data,[w]);}
);return x.promise;}
;}
,_onPointerEvent:function(B){if(B._original&&B._original[this._processedFlag]){return;}
;var C=qx.event.handler.PointerCore.MSPOINTER_TO_POINTER_MAPPING[B.type]||B.type;return this._fireEvent(B,C,qx.bom.Event.getTarget(B));}
,dispose:function(){this.__ik(d);this.__dQ=this.__cF=this.__ef=null;}
,__ik:function(E,D){qx.event.handler.PointerCore.prototype[E].apply(this,D||[]);}
},defer:function(F){qx.event.Registration.addHandler(F);qx.event.Registration.getManager(document).getHandler(F);}
});}
)();
(function(){var a="qx.event.type.Tap";qx.Class.define(a,{extend:qx.event.type.Pointer});}
)();
(function(){var a="qx.event.type.Track";qx.Class.define(a,{extend:qx.event.type.Pointer,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Pointer.prototype._cloneNativeEvent.call(this,b,c);c.delta=b.delta;return c;}
,getDelta:function(){return this._native.delta;}
}});}
)();
(function(){var a="qx.event.type.Swipe";qx.Class.define(a,{extend:qx.event.type.Pointer,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Pointer.prototype._cloneNativeEvent.call(this,b,c);c.swipe=b.swipe;return c;}
,getStartTime:function(){return this._native.swipe.startTime;}
,getDuration:function(){return this._native.swipe.duration;}
,getAxis:function(){return this._native.swipe.axis;}
,getDirection:function(){return this._native.swipe.direction;}
,getVelocity:function(){return this._native.swipe.velocity;}
,getDistance:function(){return this._native.swipe.distance;}
}});}
)();
(function(){var a="qx.event.type.Rotate";qx.Class.define(a,{extend:qx.event.type.Pointer,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Pointer.prototype._cloneNativeEvent.call(this,b,c);c.angle=b.angle;return c;}
,getAngle:function(){return this._native.angle;}
}});}
)();
(function(){var a="qx.event.type.Roll";qx.Class.define(a,{extend:qx.event.type.Pointer,members:{stop:function(){this.stopPropagation();this.preventDefault();}
,_cloneNativeEvent:function(b,c){var c=qx.event.type.Pointer.prototype._cloneNativeEvent.call(this,b,c);c.delta=b.delta;c.momentum=b.momentum;c.timeoutId=b.timeoutId;return c;}
,getMomentum:function(){return this._native.momentum;}
,stopMomentum:function(){if(this._native.timeoutId){qx.event.Registration.getManager(this._originalTarget).getHandler(qx.event.handler.Gesture).stopMomentum(this._native.timeoutId);}
;}
,getDelta:function(){return this._native.delta;}
}});}
)();
(function(){var a="qx.event.type.Pinch";qx.Class.define(a,{extend:qx.event.type.Pointer,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Pointer.prototype._cloneNativeEvent.call(this,b,c);c.scale=b.scale;return c;}
,getScale:function(){return this._native.scale;}
}});}
)();
(function(){var a="swipe",b="os.name",c="pinch",d="event.dispatchevent",e="gesturemove",f="touch",g="longtap",h="os.version",j="event.mousewheel",k="roll",l="dblclick",m="wheel",n="osx",o="rotate",p="trackstart",q="gesturefinish",r="y",s="browser.documentmode",t="dbltap",u="qx.event.handler.GestureCore",v="right",w="mshtml",z="engine.name",A="qx.debug.touchpad.detection",B="gesturecancel",C="gesturebegin",D="track",E="trackend",F="IS_TOUCHPAD : ",G="left",H="tap",I="device.touch",J="down",K="x",L="up";qx.Bootstrap.define(u,{extend:Object,implement:[qx.core.IDisposable],statics:{TYPES:[H,a,g,t,D,p,E,o,c,k],GESTURE_EVENTS:[C,q,e,B],TAP_MAX_DISTANCE:{"touch":40,"mouse":5,"pen":20},DOUBLETAP_MAX_DISTANCE:{"touch":10,"mouse":4,"pen":10},SWIPE_DIRECTION:{x:[G,v],y:[L,J]},LONGTAP_TIME:qx.core.Environment.get(I)?500:99999,DOUBLETAP_TIME:500,ROLL_FACTOR:18,TOUCHPAD_ROLL_FACTOR:1,TOUCHPAD_WHEEL_EVENTS_THRESHOLD:10,TOUCHPAD_WHEEL_EVENTS_PERIOD:100,TOUCHPAD_WHEEL_EVENTS_TIMEOUT:5000},construct:function(M,N){this.__gF=M;this.__gG=N;this.__il={};this.__im={};this.__in={};this.__io={};this.__ip=[];this._initObserver();}
,members:{__gF:null,__gG:null,__il:null,__iq:null,__ir:null,__is:null,__it:null,__im:null,__iu:null,__in:null,__iv:null,__io:null,__ip:null,__iw:0,__ix:0,__iy:false,__iz:0,_initObserver:function(){qx.event.handler.GestureCore.GESTURE_EVENTS.forEach(function(P){qxWeb(this.__gF).on(P,this.checkAndFireGesture,this);}
.bind(this));if(qx.core.Environment.get(z)==w&&qx.core.Environment.get(s)<9){qxWeb(this.__gF).on(l,this._onDblClick,this);}
;var O=qx.core.Environment.get(j);qxWeb(O.target).on(O.type,this._fireRoll,this);}
,_stopObserver:function(){qx.event.handler.GestureCore.GESTURE_EVENTS.forEach(function(R){qxWeb(this.__gF).off(R,this.checkAndFireGesture,this);}
.bind(this));if(qx.core.Environment.get(z)==w&&qx.core.Environment.get(s)<9){qxWeb(this.__gF).off(l,this._onDblClick,this);}
;var Q=qx.core.Environment.get(j);qxWeb(Q.target).off(Q.type,this._fireRoll,this);}
,checkAndFireGesture:function(S,T,U){if(!T){T=S.type;}
;if(!U){U=qx.bom.Event.getTarget(S);}
;if(T==C){this.gestureBegin(S,U);}
else if(T==e){this.gestureMove(S,U);}
else if(T==q){this.gestureFinish(S,U);}
else if(T==B){this.gestureCancel(S.pointerId);}
;}
,gestureBegin:function(V,W){if(this.__il[V.pointerId]){this.__iK(this.__il[V.pointerId]);delete this.__il[V.pointerId];}
;if(this._hasIntermediaryHandler(W)){return;}
;this.__il[V.pointerId]={"startTime":new Date().getTime(),"lastEventTime":new Date().getTime(),"startX":V.clientX,"startY":V.clientY,"clientX":V.clientX,"clientY":V.clientY,"velocityX":0,"velocityY":0,"target":W,"isTap":true,"isPrimary":V.isPrimary,"longTapTimer":window.setTimeout(this.__iJ.bind(this,V,W),qx.event.handler.GestureCore.LONGTAP_TIME)};if(V.isPrimary){this.__is=false;this.__ir=W;this.__iD(p,V,W);}
else {this.__is=true;if(Object.keys(this.__il).length===2){this.__it=this._calcAngle();this.__iv=this._calcDistance();}
;}
;}
,gestureMove:function(Y,ba){var bb=this.__il[Y.pointerId];if(bb){var X=bb.clientX;var bc=bb.clientY;bb.clientX=Y.clientX;bb.clientY=Y.clientY;bb.lastEventTime=new Date().getTime();if(X){bb.velocityX=bb.clientX-X;}
;if(bc){bb.velocityY=bb.clientY-bc;}
;if(Object.keys(this.__il).length===2){this.__iH(Y,bb.target);this.__iI(Y,bb.target);}
;if(!this.__is){this.__iD(D,Y,bb.target);this._fireRoll(Y,f,bb.target);}
;if(bb.isTap){bb.isTap=this._isBelowTapMaxDistance(Y);if(!bb.isTap){this.__iK(bb);}
;}
;}
;}
,_hasIntermediaryHandler:function(bd){while(bd&&bd!==this.__gF){if(bd.$$gestureHandler){return true;}
;bd=bd.parentNode;}
;return false;}
,gestureFinish:function(bf,bg){if(!this.__il[bf.pointerId]){return;}
;var bm=this.__il[bf.pointerId];this.__iK(bm);if(this._hasIntermediaryHandler(bg)){return;}
;this.__iA(bm.velocityX,bm.velocityY,bf,bm.target);this.__iD(E,bf,bm.target);if(bm.isTap){if(bg!==bm.target){delete this.__il[bf.pointerId];return;}
;this._fireEvent(bf,H,bf.target||bg);var bh=false;if(Object.keys(this.__im).length>0){var bl=Date.now()-qx.event.handler.GestureCore.DOUBLETAP_TIME;for(var bn in this.__im){if(bn<bl){delete this.__im[bn];}
else {var be=this.__im[bn];var bj=this.__iB(be.x,be.y,bf.clientX,bf.clientY,bf.getPointerType());var bk=be.target===(bf.target||bg);var bo=be.button===bf.button;if(bj&&bo&&bk){bh=true;delete this.__im[bn];this._fireEvent(bf,t,bf.target||bg);}
;}
;}
;}
;if(!bh){this.__im[Date.now()]={x:bf.clientX,y:bf.clientY,target:bf.target||bg,button:bf.button};}
;}
else if(!this._isBelowTapMaxDistance(bf)){var bi=this.__iC(bf,bg);if(bi){bf.swipe=bi;this._fireEvent(bf,a,bm.target||bg);}
;}
;delete this.__il[bf.pointerId];}
,stopMomentum:function(bp){this.__in[bp]=true;}
,gestureCancel:function(bq){if(this.__il[bq]){this.__iK(this.__il[bq]);delete this.__il[bq];}
;if(this.__io[bq]){this.stopMomentum(this.__io[bq]);delete this.__io[bq];}
;}
,updateGestureTarget:function(br,bs){this.__il[br].target=bs;}
,__iA:function(bx,by,bu,bv,bA){var bz=bu.timeoutId;if(!bA&&this.__io[bu.pointerId]){this.stopMomentum(this.__io[bu.pointerId]);}
;if((Math.abs(by)<1&&Math.abs(bx)<1)||this.__in[bz]||!this.getWindow()){delete this.__in[bz];delete this.__io[bu.pointerId];return;}
;if(!bA){bA=1;var bw=2.8;by=by/bw;bx=bx/bw;}
;bA+=0.0006;by=by/bA;bx=bx/bA;var bt=qx.bom.AnimationFrame.request(qx.lang.Function.bind(function(bB,bC,bD,bE,bF){this.__iA(bB,bC,bD,bE,bF);}
,this,bx,by,bu,bv,bA));bx=Math.round(bx*100)/100;by=Math.round(by*100)/100;bu.delta={x:-bx,y:-by};bu.momentum=true;bu.timeoutId=bt;this.__io[bu.pointerId]=bt;this._fireEvent(bu,k,bu.target||bv);}
,_calcAngle:function(){var bH=null;var bI=null;for(var bG in this.__il){var bJ=this.__il[bG];if(bH===null){bH=bJ;}
else {bI=bJ;}
;}
;var x=bH.clientX-bI.clientX;var y=bH.clientY-bI.clientY;return (360+Math.atan2(y,x)*(180/Math.PI))%360;}
,_calcDistance:function(){var bK=null;var bL=null;for(var bN in this.__il){var bO=this.__il[bN];if(bK===null){bK=bO;}
else {bL=bO;}
;}
;var bM=Math.sqrt(Math.pow(bK.clientX-bL.clientX,2)+Math.pow(bK.clientY-bL.clientY,2));return bM;}
,_isBelowTapMaxDistance:function(bQ){var bR=this._getDeltaCoordinates(bQ);var bP=qx.event.handler.GestureCore.TAP_MAX_DISTANCE[bQ.getPointerType()];if(!bR){return null;}
;return (Math.abs(bR.x)<=bP&&Math.abs(bR.y)<=bP);}
,__iB:function(bS,bW,bX,bY,ca){var bV=qx.event.handler.GestureCore;var bT=Math.abs(bS-bX)<bV.DOUBLETAP_MAX_DISTANCE[ca];var bU=Math.abs(bW-bY)<bV.DOUBLETAP_MAX_DISTANCE[ca];return bT&&bU;}
,_getDeltaCoordinates:function(cd){var ce=this.__il[cd.pointerId];if(!ce){return null;}
;var cb=cd.clientX-ce.startX;var cc=cd.clientY-ce.startY;var cf=K;if(Math.abs(cb/cc)<1){cf=r;}
;return {"x":cb,"y":cc,"axis":cf};}
,_fireEvent:function(ch,cj,ci){if(!this.__gF){return;}
;var cg;if(qx.core.Environment.get(d)){cg=new qx.event.type.dom.Custom(cj,ch,{bubbles:true,swipe:ch.swipe,scale:ch.scale,angle:ch.angle,delta:ch.delta,pointerType:ch.pointerType,momentum:ch.momentum});return ci.dispatchEvent(cg);}
else if(this.__gG){cg=new qx.event.type.dom.Custom(cj,ch,{target:this.__gF,currentTarget:this.__gF,srcElement:this.__gF,swipe:ch.swipe,scale:ch.scale,angle:ch.angle,delta:ch.delta,pointerType:ch.pointerType,momentum:ch.momentum});this.__gG.emit(cj,ch);}
;}
,_onDblClick:function(ck){var cl=qx.bom.Event.getTarget(ck);this._fireEvent(ck,H,cl);this._fireEvent(ck,t,cl);}
,__iC:function(co,cp){var cv=this.__il[co.pointerId];if(!cv){return null;}
;var cr=qx.event.handler.GestureCore;var cu=this._getDeltaCoordinates(co);var cs=new Date().getTime()-cv.startTime;var cw=(Math.abs(cu.x)>=Math.abs(cu.y))?K:r;var cm=cu[cw];var cn=cr.SWIPE_DIRECTION[cw][cm<0?0:1];var ct=(cs!==0)?cm/cs:0;var cq={startTime:cv.startTime,duration:cs,axis:cw,direction:cn,distance:cm,velocity:ct};return cq;}
,__iD:function(cx,cy,cz){cy.delta=this._getDeltaCoordinates(cy);this._fireEvent(cy,cx,cy.target||cz);}
,__iE:function(cA,cB,cC){cA.delta={x:qx.util.Wheel.getDelta(cA,K)*cC,y:qx.util.Wheel.getDelta(cA,r)*cC};cA.delta.axis=Math.abs(cA.delta.x/cA.delta.y)<1?r:K;cA.pointerType=m;this._fireEvent(cA,k,cA.target||cB);}
,__iF:function(cF){var cG=qx.event.handler.GestureCore.ROLL_FACTOR;if(qx.util.Wheel.IS_TOUCHPAD){cG=qx.event.handler.GestureCore.TOUCHPAD_ROLL_FACTOR;}
;this.__iz=new Date().getTime();var cD=this.__ip.length;for(var i=0;i<cD;i++ ){var cE=this.__ip[i];this.__iE(cE,cF,cG);}
;this.__ip=[];}
,__iG:function(){if(this.__ip.length>qx.event.handler.GestureCore.TOUCHPAD_WHEEL_EVENTS_THRESHOLD){qx.util.Wheel.IS_TOUCHPAD=true;}
else {qx.util.Wheel.IS_TOUCHPAD=false;}
;if(qx.core.Environment.get(A)){qx.log.Logger.debug(this,F+qx.util.Wheel.IS_TOUCHPAD);}
;this.__iy=true;}
,_isTouchPadDetectionEnabled:function(){return qx.core.Environment.get(b)==n&&qx.core.Environment.get(h)>=10.12;}
,_fireRoll:function(cH,cL,cI){var cK;var cJ;if(cH.type===qx.core.Environment.get(j).type){if(this._isTouchPadDetectionEnabled()){cK=new Date().getTime();cJ=qx.event.handler.GestureCore.TOUCHPAD_WHEEL_EVENTS_TIMEOUT;if(this.__iz>0&&cK-this.__iz>cJ){this.__iy=false;this.__ip=[];this.__iz=0;}
;if(!this.__iy){if(this.__ip.length===0){this.__iw=cK;qx.event.Timer.once(function(){if(!this.__iy){this.__iG();this.__iF(cI);}
;}
,this,qx.event.handler.GestureCore.TOUCHPAD_WHEEL_EVENTS_PERIOD+50);}
;this.__ip.push(cH);this.__ix++ ;if(cK-this.__iw>qx.event.handler.GestureCore.TOUCHPAD_WHEEL_EVENTS_PERIOD){this.__iG();}
;}
;if(this.__iy){if(this.__ip.length===0){this.__ip.push(cH);}
;this.__iF(cI);}
;}
else {this.__iE(cH,cI,qx.event.handler.GestureCore.ROLL_FACTOR);}
;}
else {var cM=this.__il[cH.pointerId];cH.delta={x:-cM.velocityX,y:-cM.velocityY,axis:Math.abs(cM.velocityX/cM.velocityY)<1?r:K};this._fireEvent(cH,k,cH.target||cI);}
;}
,__iH:function(cN,cP){if(!cN.isPrimary){var cO=this._calcAngle();cN.angle=Math.round((cO-this.__it)%360);this._fireEvent(cN,o,this.__ir);}
;}
,__iI:function(cS,cT){if(!cS.isPrimary){var cQ=this._calcDistance();var cR=cQ/this.__iv;cS.scale=(Math.round(cR*100)/100);this._fireEvent(cS,c,this.__ir);}
;}
,__iJ:function(cU,cV){var cW=this.__il[cU.pointerId];if(cW){this._fireEvent(cU,g,cU.target||cV);cW.longTapTimer=null;cW.isTap=false;}
;}
,__iK:function(cX){if(cX.longTapTimer){window.clearTimeout(cX.longTapTimer);cX.longTapTimer=null;}
;}
,dispose:function(){for(var cY in this.__il){this.__iK(cY);}
;this._stopObserver();this.__gF=this.__gG=null;}
}});}
)();
(function(){var a="mshtml",b="engine.name",c="pop.push.reverse.shift.sort.splice.unshift.join.slice",d="number",e="qx.type.BaseArray",f=".";qx.Bootstrap.define(e,{extend:Array,construct:function(g){}
,members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});(function(){function h(p){if((qx.core.Environment.get(b)==a)){j.prototype={length:0,$$isArray:true};var n=c.split(f);for(var length=n.length;length;){j.prototype[n[ --length]]=Array.prototype[n[length]];}
;}
;var m=Array.prototype.slice;j.prototype.concat=function(){var r=this.slice(0);for(var i=0,length=arguments.length;i<length;i++ ){var q;if(arguments[i] instanceof j){q=m.call(arguments[i],0);}
else if(arguments[i] instanceof Array){q=arguments[i];}
else {q=[arguments[i]];}
;r.push.apply(r,q);}
;return r;}
;j.prototype.toString=function(){return m.call(this,0).toString();}
;j.prototype.toLocaleString=function(){return m.call(this,0).toLocaleString();}
;j.prototype.constructor=j;j.prototype.indexOf=Array.prototype.indexOf;j.prototype.lastIndexOf=Array.prototype.lastIndexOf;j.prototype.forEach=Array.prototype.forEach;j.prototype.some=Array.prototype.some;j.prototype.every=Array.prototype.every;var o=Array.prototype.filter;var l=Array.prototype.map;j.prototype.filter=function(){var s=new this.constructor;s.push.apply(s,o.apply(this,arguments));return s;}
;j.prototype.map=function(){var t=new this.constructor;t.push.apply(t,l.apply(this,arguments));return t;}
;j.prototype.slice=function(){var u=new this.constructor;u.push.apply(u,Array.prototype.slice.apply(this,arguments));return u;}
;j.prototype.splice=function(){var v=new this.constructor;v.push.apply(v,Array.prototype.splice.apply(this,arguments));return v;}
;j.prototype.toArray=function(){return Array.prototype.slice.call(this,0);}
;j.prototype.valueOf=function(){return this.length;}
;return j;}
;function j(length){if(arguments.length===1&&typeof length===d){this.length=-1<length&&length===length>>.5?length:this.push(length);}
else if(arguments.length){this.push.apply(this,arguments);}
;}
;function k(){}
;k.prototype=[];j.prototype=new k;j.prototype.length=0;qx.type.BaseArray=h(j);}
)();}
)();
(function(){var a="_",b="qxWeb",c="*** Collection infos ***",d="toString",e="$",f="Instance:",g="classname",h="Method '",j="data-qx-class",k="Elements:",m="' already available.",n="Length:",o="number",p="basename",q="' already available as static method.",r="qx.debug",s="name";qx.Bootstrap.define(b,{extend:qx.type.BaseArray,statics:{__fq:[],$$qx:qx,$init:function(x,v){if(x.length&&x.length==1&&x[0]&&x[0].$widget instanceof qxWeb){return x[0].$widget;}
;var w=[];for(var i=0;i<x.length;i++ ){var u=!!(x[i]&&(x[i].nodeType===1||x[i].nodeType===9||x[i].nodeType===11));if(u){w.push(x[i]);continue;}
;var t=!!(x[i]&&x[i].history&&x[i].location&&x[i].document);if(t){w.push(x[i]);}
;}
;if(x[0]&&x[0].getAttribute&&x[0].getAttribute(j)&&w.length<2){v=qx.Bootstrap.getByName(x[0].getAttribute(j))||v;}
;var y=qx.lang.Array.cast(w,v);for(var i=0;i<qxWeb.__fq.length;i++ ){qxWeb.__fq[i].call(y);}
;return y;}
,$attach:function(A,z){for(var name in A){if(qxWeb.prototype[name]!=undefined&&Array.prototype[name]==undefined&&z!==true){if(qx.core.Environment.get(r)){throw new Error(h+name+m);}
;}
else {qxWeb.prototype[name]=A[name];}
;}
;}
,$attachStatic:function(C,B){for(var name in C){if(qx.core.Environment.get(r)){if(qxWeb[name]!=undefined&&B!==true){throw new Error(h+name+q);}
;}
;qxWeb[name]=C[name];}
;}
,$attachAll:function(F,E){for(var name in F.members){if(name.indexOf(e)!==0&&name.indexOf(a)!==0)qxWeb.prototype[name]=F.members[name];}
;var D;if(E!=null){qxWeb[E]=qxWeb[E]||{};D=qxWeb[E];}
else {D=qxWeb;}
;for(var name in F.statics){if(name.indexOf(e)!==0&&name.indexOf(a)!==0&&name!==s&&name!==p&&name!==g&&name!==d&&name!==name.toUpperCase())D[name]=F.statics[name];}
;}
,$attachInit:function(G){this.__fq.push(G);}
,define:function(name,H){if(H==undefined){H=name;name=null;}
;return qx.Bootstrap.define.call(qx.Bootstrap,name,H);}
},construct:function(J,I){if(!J&&this instanceof qxWeb){return this;}
;if(!J){J=[];}
else if(qx.Bootstrap.isString(J)){if(I instanceof qxWeb&&I.length!=0){I=I[0];}
;if(I instanceof qxWeb){J=[];}
else {J=qx.bom.Selector.query(J,I);}
;}
else if((J.nodeType===1||J.nodeType===9||J.nodeType===11)||(J.history&&J.location&&J.document)){J=[J];}
;return qxWeb.$init(J,qxWeb);}
,members:{filter:function(K){if(qx.lang.Type.isFunction(K)){return qxWeb.$init(Array.prototype.filter.call(this,K),this.constructor);}
;return qxWeb.$init(qx.bom.Selector.matches(K,this),this.constructor);}
,unique:function(){var L=qx.lang.Array.unique(this);return qxWeb.$init(L,this.constructor);}
,slice:function(M,N){if(N!==undefined){return qxWeb.$init(Array.prototype.slice.call(this,M,N),this.constructor);}
;return qxWeb.$init(Array.prototype.slice.call(this,M),this.constructor);}
,splice:function(O,P,Q){return qxWeb.$init(Array.prototype.splice.apply(this,arguments),this.constructor);}
,map:function(R,S){return qxWeb.$init(Array.prototype.map.apply(this,arguments),qxWeb);}
,concat:function(U){var T=Array.prototype.slice.call(this,0);for(var i=0;i<arguments.length;i++ ){if(arguments[i] instanceof qxWeb){T=T.concat(Array.prototype.slice.call(arguments[i],0));}
else {T.push(arguments[i]);}
;}
;return qxWeb.$init(T,this.constructor);}
,indexOf:function(V,W){if(!V){return -1;}
;if(!W){W=0;}
;if(typeof W!==o){return -1;}
;if(W<0){W=this.length+W;if(W<0){W=0;}
;}
;if(qx.lang.Type.isArray(V)){V=V[0];}
;for(var i=W,l=this.length;i<l;i++ ){if(this[i]===V){return i;}
;}
;return -1;}
,debug:function(){if(qx.core.Environment.get(r)){debugger;}
;return this;}
,logThis:function(){if(qx.core.Environment.get(r)){var X=[];this.forEach(function(Y){X.push(Y);}
);var length=this.length;console.group(c);console.info(n,length);console.info(k,X);console.info(f,this);console.groupEnd();}
;return this;}
,_forEachElement:function(bb,ba){for(var i=0,l=this.length;i<l;i++ ){if(this[i]&&(this[i].nodeType===1||this[i].nodeType===11)){bb.apply(ba||this,[this[i],i,this]);}
;}
;return this;}
,_forEachElementWrapped:function(bd,bc){this._forEachElement(function(be,bg,bf){bd.apply(this,[qxWeb(be),bg,bf]);}
,bc);return this;}
},defer:function(bh){if(window.q==undefined){window.q=bh;}
;}
});}
)();
(function(){var c="-",d="(^|",f="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",g="<a id='",h="CLASS",k=":disabled",l="[selected]",n="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",o="nth",p="type|href|height|width",q="option",r="disabled",s="*(?:value|",t="~=",u="previousSibling",v="*(even|odd|(([+-]|)(\\d*)n|)",w="xml:lang",x="only",y="*",z=")(?:\\((",A="unsupported lang: ",B="|[*])",C="+|((?:^|[^\\\\])(?:\\\\.)*)",D="i",E="\\\\([\\da-f]{1,6}",F="='$1']",G="\uFFFD",H="-]",I="form",J="<select disabled='disabled'><option/></select>",K="^=",L="*([>+~]|",M=")*)|",N="*\\)|)",O="((?:\\\\.|[^\\\\()[\\]]|",P="+$",Q="=",R="<a href='' disabled='disabled'></a>",S="unload",T="\0",U="id",V="('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|",W="+",X="needsContext",Y="nextSibling",dg="))|)",dh="*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(",di="$=",dc="[s!='']:x",dd=")(?:",de="string",df=")|.)",dn="\\",dp="[\\x20\\t\\r\\n\\f]",du="[name=d]",dq="*(?:([+-]|)",dj="*((?:-\\d)?\\d*)",dk="#",dl="input",dm="type",dW="legend",fb="[id~=",dv="'></a>",dr="ig",ds="parentNode",eX="+*",dt="a#",dw="href",dx="0x",dy="(",dD="even",dE="<select id='",dF="g",dz="*\\]",dA="*\\)|)(?=[^-]|$)",dB="unsupported pseudo: ",dC="*[*^$|!~]?=",dK=".*",dL=" ",dM="hidden",dN="*,",dG="function",dH="text",dI="^",dJ=")",dR=":(",dS="onunload",fa="*([*^$|!~]?=)",dT="button",dO=".#.+[+~]",dP="0",eY="^(",dQ="odd",dU="class",dV="*(\\d+)|))",eh="lang",eg="|=",ef="\\[",em="name",ek="D",ej="<option selected=''></option></select>",ei="fieldset",ea="!=",dY="<input/>",dX="*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(",ee="sizzle",ed="*=",ec="|",eb="Syntax error, unrecognized expression: ",et=")$",es="object",er="?|(",eq=")\\)|)",ex="$1",ew="*([^\\]'\"]*?)",ev="*(?:''|\"\")",eu="eq",ep="className",eo="qx.bom.Selector",en="of-type",eI="TAG",eH="|$)",eG=",",eM="<a href='#'></a>",eL="empty",eK=":enabled",eJ="^(?:",eB="value",eA="^#(",ez="[*^$]=",ey="*,:x",eF="*(",eE="^\\.(",eD="",eC="CHILD",eS=",.*:",eR="^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(",eQ="-\r\\' msallowcapture=''>",eP="$",eW="[msallowcapture^='']",eV="label",eU=":checked",eT="undefined",eO="ID",eN="last",db="HTML";qx.Bootstrap.define(eo,{statics:{query:null,matches:null}});(function(window){var i,fD,gB,fk,fq,fL,gr,fx,fc,ft,fv,fs,document,gz,fw,fT,fd,fU,fE,gi=ee+1*new Date(),fy=window.document,fN=0,fp=0,fg=fm(),gg=fm(),gx=fm(),fJ=function(a,b){if(a===b){fv=true;}
;return 0;}
,gp=({}).hasOwnProperty,fj=[],fo=fj.pop,gs=fj.push,gb=fj.push,fz=fj.slice,fI=function(gC,gD){var i=0,gE=gC.length;for(;i<gE;i++ ){if(gC[i]===gD){return i;}
;}
;return -1;}
,fS=n,fB=dp,fQ=f,gw=ef+fB+eF+fQ+dd+fB+fa+fB+dh+fQ+dg+fB+dz,fV=dR+fQ+z+V+O+gw+M+dK+eq,fF=new RegExp(fB+W,dF),ge=new RegExp(dI+fB+C+fB+P,dF),gm=new RegExp(dI+fB+dN+fB+y),fC=new RegExp(dI+fB+L+fB+dJ+fB+y),fY=new RegExp(Q+fB+ew+fB+dz,dF),gA=new RegExp(fV),fO=new RegExp(dI+fQ+eP),gq={"ID":new RegExp(eA+fQ+dJ),"CLASS":new RegExp(eE+fQ+dJ),"TAG":new RegExp(eY+fQ+B),"ATTR":new RegExp(dI+gw),"PSEUDO":new RegExp(dI+fV),"CHILD":new RegExp(eR+fB+v+fB+dq+fB+dV+fB+N,D),"bool":new RegExp(eJ+fS+et,D),"needsContext":new RegExp(dI+fB+dX+fB+dj+fB+dA,D)},gl=/^(?:input|select|textarea|button)$/i,fh=/^h\d$/i,go=/^[^{]+\{\s*\[native \w/,gu=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,fR=/[+~]/,fi=new RegExp(E+fB+er+fB+df,dr),gh=function(_,gF,gG){var gH=dx+gF-0x10000;return gH!==gH||gG?gF:gH<0?String.fromCharCode(gH+0x10000):String.fromCharCode(gH>>10|0xD800,gH&0x3FF|0xDC00);}
,fM=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,fe=function(gJ,gI){if(gI){if(gJ===T){return G;}
;return gJ.slice(0,-1)+dn+gJ.charCodeAt(gJ.length-1).toString(16)+dL;}
;return dn+gJ;}
,gf=function(){fs();}
,gj=fW(function(gK){return gK.disabled===true;}
,{dir:ds,next:dW});try{gb.apply((fj=fz.call(fy.childNodes)),fy.childNodes);fj[fy.childNodes.length].nodeType;}
catch(e){gb={apply:fj.length?function(gM,gL){gs.apply(gM,fz.call(gL));}
:function(gO,gN){var j=gO.length,i=0;while((gO[j++ ]=gN[i++ ])){}
;gO.length=j-1;}
};}
;function gc(gT,gQ,gR,gV){var m,i,gY,gS,ha,gW,gU,gX=gQ&&gQ.ownerDocument,gP=gQ?gQ.nodeType:9;gR=gR||[];if(typeof gT!==de||!gT||gP!==1&&gP!==9&&gP!==11){return gR;}
;if(!gV){if((gQ?gQ.ownerDocument||gQ:fy)!==document){fs(gQ);}
;gQ=gQ||document;if(fw){if(gP!==11&&(ha=gu.exec(gT))){if((m=ha[1])){if(gP===9){if((gY=gQ.getElementById(m))){if(gY.id===m){gR.push(gY);return gR;}
;}
else {return gR;}
;}
else {if(gX&&(gY=gX.getElementById(m))&&fE(gQ,gY)&&gY.id===m){gR.push(gY);return gR;}
;}
;}
else if(ha[2]){gb.apply(gR,gQ.getElementsByTagName(gT));return gR;}
else if((m=ha[3])&&fD.getElementsByClassName&&gQ.getElementsByClassName){gb.apply(gR,gQ.getElementsByClassName(m));return gR;}
;}
;if(fD.qsa&&!gx[gT+dL]&&(!fT||!fT.test(gT))){if(gP!==1){gX=gQ;gU=gT;}
else if(gQ.nodeName.toLowerCase()!==es){if((gS=gQ.getAttribute(U))){gS=gS.replace(fM,fe);}
else {gQ.setAttribute(U,(gS=gi));}
;gW=fL(gT);i=gW.length;while(i-- ){gW[i]=dk+gS+dL+fH(gW[i]);}
;gU=gW.join(eG);gX=fR.test(gT)&&fr(gQ.parentNode)||gQ;}
;if(gU){try{gb.apply(gR,gX.querySelectorAll(gU));return gR;}
catch(hb){}
finally{if(gS===gi){gQ.removeAttribute(U);}
;}
;}
;}
;}
;}
;return fx(gT.replace(ge,ex),gQ,gR,gV);}
;function fm(){var hc=[];function hd(he,hf){if(hc.push(he+dL)>gB.cacheLength){delete hd[hc.shift()];}
;return (hd[he+dL]=hf);}
;return hd;}
;function gn(hg){hg[gi]=true;return hg;}
;function ga(hi){var hh=document.createElement(ei);try{return !!hi(hh);}
catch(e){return false;}
finally{if(hh.parentNode){hh.parentNode.removeChild(hh);}
;hh=null;}
;}
;function gd(hl,hk){var hj=hl.split(ec),i=hj.length;while(i-- ){gB.attrHandle[hj[i]]=hk;}
;}
;function fP(a,b){var hn=b&&a,hm=hn&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;if(hm){return hm;}
;if(hn){while((hn=hn.nextSibling)){if(hn===b){return -1;}
;}
;}
;return a?1:-1;}
;function gt(ho){return function(hp){var name=hp.nodeName.toLowerCase();return name===dl&&hp.type===ho;}
;}
;function ff(hq){return function(hr){var name=hr.nodeName.toLowerCase();return (name===dl||name===dT)&&hr.type===hq;}
;}
;function fu(hs){return function(ht){return eV in ht&&ht.disabled===hs||I in ht&&ht.disabled===hs||I in ht&&ht.disabled===false&&(ht.isDisabled===hs||ht.isDisabled!==!hs&&(eV in ht||!gj(ht))!==hs);}
;}
;function fX(hu){return gn(function(hv){hv=+hv;return gn(function(hy,hw){var j,hx=hu([],hy.length,hv),i=hx.length;while(i-- ){if(hy[(j=hx[i])]){hy[j]=!(hw[j]=hy[j]);}
;}
;}
);}
);}
;function fr(hz){return hz&&typeof hz.getElementsByTagName!==eT&&hz;}
;fD=gc.support={};fq=gc.isXML=function(hA){var hB=hA&&(hA.ownerDocument||hA).documentElement;return hB?hB.nodeName!==db:false;}
;fs=gc.setDocument=function(hC){var hF,hE,hD=hC?hC.ownerDocument||hC:fy;if(hD===document||hD.nodeType!==9||!hD.documentElement){return document;}
;document=hD;gz=document.documentElement;fw=!fq(document);if(fy!==document&&(hE=document.defaultView)&&hE.top!==hE){if(hE.addEventListener){hE.addEventListener(S,gf,false);}
else if(hE.attachEvent){hE.attachEvent(dS,gf);}
;}
;fD.attributes=ga(function(hG){hG.className=D;return !hG.getAttribute(ep);}
);fD.getElementsByTagName=ga(function(hH){hH.appendChild(document.createComment(eD));return !hH.getElementsByTagName(y).length;}
);fD.getElementsByClassName=go.test(document.getElementsByClassName);fD.getById=ga(function(hI){gz.appendChild(hI).id=gi;return !document.getElementsByName||!document.getElementsByName(gi).length;}
);if(fD.getById){gB.find[eO]=function(hJ,hK){if(typeof hK.getElementById!==eT&&fw){var m=hK.getElementById(hJ);return m?[m]:[];}
;}
;gB.filter[eO]=function(hM){var hL=hM.replace(fi,gh);return function(hN){return hN.getAttribute(U)===hL;}
;}
;}
else {delete gB.find[eO];gB.filter[eO]=function(hP){var hO=hP.replace(fi,gh);return function(hR){var hQ=typeof hR.getAttributeNode!==eT&&hR.getAttributeNode(U);return hQ&&hQ.value===hO;}
;}
;}
;gB.find[eI]=fD.getElementsByTagName?function(hS,hT){if(typeof hT.getElementsByTagName!==eT){return hT.getElementsByTagName(hS);}
else if(fD.qsa){return hT.querySelectorAll(hS);}
;}
:function(hX,hY){var hV,hU=[],i=0,hW=hY.getElementsByTagName(hX);if(hX===y){while((hV=hW[i++ ])){if(hV.nodeType===1){hU.push(hV);}
;}
;return hU;}
;return hW;}
;gB.find[h]=fD.getElementsByClassName&&function(ia,ib){if(typeof ib.getElementsByClassName!==eT&&fw){return ib.getElementsByClassName(ia);}
;}
;fd=[];fT=[];if((fD.qsa=go.test(document.querySelectorAll))){ga(function(ic){gz.appendChild(ic).innerHTML=g+gi+dv+dE+gi+eQ+ej;if(ic.querySelectorAll(eW).length){fT.push(ez+fB+ev);}
;if(!ic.querySelectorAll(l).length){fT.push(ef+fB+s+fS+dJ);}
;if(!ic.querySelectorAll(fb+gi+H).length){fT.push(t);}
;if(!ic.querySelectorAll(eU).length){fT.push(eU);}
;if(!ic.querySelectorAll(dt+gi+eX).length){fT.push(dO);}
;}
);ga(function(ie){ie.innerHTML=R+J;var ig=document.createElement(dl);ig.setAttribute(dm,dM);ie.appendChild(ig).setAttribute(em,ek);if(ie.querySelectorAll(du).length){fT.push(em+fB+dC);}
;if(ie.querySelectorAll(eK).length!==2){fT.push(eK,k);}
;gz.appendChild(ie).disabled=true;if(ie.querySelectorAll(k).length!==2){fT.push(eK,k);}
;ie.querySelectorAll(ey);fT.push(eS);}
);}
;if((fD.matchesSelector=go.test((fU=gz.matches||gz.webkitMatchesSelector||gz.mozMatchesSelector||gz.oMatchesSelector||gz.msMatchesSelector)))){ga(function(ih){fD.disconnectedMatch=fU.call(ih,y);fU.call(ih,dc);fd.push(ea,fV);}
);}
;fT=fT.length&&new RegExp(fT.join(ec));fd=fd.length&&new RegExp(fd.join(ec));hF=go.test(gz.compareDocumentPosition);fE=hF||go.test(gz.contains)?function(a,b){var ii=a.nodeType===9?a.documentElement:a,ij=b&&b.parentNode;return a===ij||!!(ij&&ij.nodeType===1&&(ii.contains?ii.contains(ij):a.compareDocumentPosition&&a.compareDocumentPosition(ij)&16));}
:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}
;}
;}
;return false;}
;fJ=hF?function(a,b){if(a===b){fv=true;return 0;}
;var ik=!a.compareDocumentPosition-!b.compareDocumentPosition;if(ik){return ik;}
;ik=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(ik&1||(!fD.sortDetached&&b.compareDocumentPosition(a)===ik)){if(a===document||a.ownerDocument===fy&&fE(fy,a)){return -1;}
;if(b===document||b.ownerDocument===fy&&fE(fy,b)){return 1;}
;return ft?(fI(ft,a)-fI(ft,b)):0;}
;return ik&4?-1:1;}
:function(a,b){if(a===b){fv=true;return 0;}
;var il,i=0,im=a.parentNode,io=b.parentNode,ip=[a],iq=[b];if(!im||!io){return a===document?-1:b===document?1:im?-1:io?1:ft?(fI(ft,a)-fI(ft,b)):0;}
else if(im===io){return fP(a,b);}
;il=a;while((il=il.parentNode)){ip.unshift(il);}
;il=b;while((il=il.parentNode)){iq.unshift(il);}
;while(ip[i]===iq[i]){i++ ;}
;return i?fP(ip[i],iq[i]):ip[i]===fy?-1:iq[i]===fy?1:0;}
;return document;}
;gc.matches=function(ir,is){return gc(ir,null,null,is);}
;gc.matchesSelector=function(iu,it){if((iu.ownerDocument||iu)!==document){fs(iu);}
;it=it.replace(fY,F);if(fD.matchesSelector&&fw&&!gx[it+dL]&&(!fd||!fd.test(it))&&(!fT||!fT.test(it))){try{var iv=fU.call(iu,it);if(iv||fD.disconnectedMatch||iu.document&&iu.document.nodeType!==11){return iv;}
;}
catch(e){}
;}
;return gc(it,document,null,[iu]).length>0;}
;gc.contains=function(ix,iw){if((ix.ownerDocument||ix)!==document){fs(ix);}
;return fE(ix,iw);}
;gc.attr=function(iz,name){if((iz.ownerDocument||iz)!==document){fs(iz);}
;var iy=gB.attrHandle[name.toLowerCase()],iA=iy&&gp.call(gB.attrHandle,name.toLowerCase())?iy(iz,name,!fw):undefined;return iA!==undefined?iA:fD.attributes||!fw?iz.getAttribute(name):(iA=iz.getAttributeNode(name))&&iA.specified?iA.value:null;}
;gc.escape=function(iB){return (iB+eD).replace(fM,fe);}
;gc.error=function(iC){throw new Error(eb+iC);}
;gc.uniqueSort=function(iE){var iF,iD=[],j=0,i=0;fv=!fD.detectDuplicates;ft=!fD.sortStable&&iE.slice(0);iE.sort(fJ);if(fv){while((iF=iE[i++ ])){if(iF===iE[i]){j=iD.push(i);}
;}
;while(j-- ){iE.splice(iD[j],1);}
;}
;ft=null;return iE;}
;fk=gc.getText=function(iI){var iG,iJ=eD,i=0,iH=iI.nodeType;if(!iH){while((iG=iI[i++ ])){iJ+=fk(iG);}
;}
else if(iH===1||iH===9||iH===11){if(typeof iI.textContent===de){return iI.textContent;}
else {for(iI=iI.firstChild;iI;iI=iI.nextSibling){iJ+=fk(iI);}
;}
;}
else if(iH===3||iH===4){return iI.nodeValue;}
;return iJ;}
;gB=gc.selectors={cacheLength:50,createPseudo:gn,match:gq,attrHandle:{},find:{},relative:{">":{dir:ds,first:true}," ":{dir:ds},"+":{dir:u,first:true},"~":{dir:u}},preFilter:{"ATTR":function(iK){iK[1]=iK[1].replace(fi,gh);iK[3]=(iK[3]||iK[4]||iK[5]||eD).replace(fi,gh);if(iK[2]===t){iK[3]=dL+iK[3]+dL;}
;return iK.slice(0,4);}
,"CHILD":function(iL){iL[1]=iL[1].toLowerCase();if(iL[1].slice(0,3)===o){if(!iL[3]){gc.error(iL[0]);}
;iL[4]=+(iL[4]?iL[5]+(iL[6]||1):2*(iL[3]===dD||iL[3]===dQ));iL[5]=+((iL[7]+iL[8])||iL[3]===dQ);}
else if(iL[3]){gc.error(iL[0]);}
;return iL;}
,"PSEUDO":function(iN){var iO,iM=!iN[6]&&iN[2];if(gq[eC].test(iN[0])){return null;}
;if(iN[3]){iN[2]=iN[4]||iN[5]||eD;}
else if(iM&&gA.test(iM)&&(iO=fL(iM,true))&&(iO=iM.indexOf(dJ,iM.length-iO)-iM.length)){iN[0]=iN[0].slice(0,iO);iN[2]=iM.slice(0,iO);}
;return iN.slice(0,3);}
},filter:{"TAG":function(iP){var iQ=iP.replace(fi,gh).toLowerCase();return iP===y?function(){return true;}
:function(iR){return iR.nodeName&&iR.nodeName.toLowerCase()===iQ;}
;}
,"CLASS":function(iS){var iT=fg[iS+dL];return iT||(iT=new RegExp(d+fB+dJ+iS+dy+fB+eH))&&fg(iS,function(iU){return iT.test(typeof iU.className===de&&iU.className||typeof iU.getAttribute!==eT&&iU.getAttribute(dU)||eD);}
);}
,"ATTR":function(name,iV,iW){return function(iX){var iY=gc.attr(iX,name);if(iY==null){return iV===ea;}
;if(!iV){return true;}
;iY+=eD;return iV===Q?iY===iW:iV===ea?iY!==iW:iV===K?iW&&iY.indexOf(iW)===0:iV===ed?iW&&iY.indexOf(iW)>-1:iV===di?iW&&iY.slice(-iW.length)===iW:iV===t?(dL+iY.replace(fF,dL)+dL).indexOf(iW)>-1:iV===eg?iY===iW||iY.slice(0,iW.length+1)===iW+c:false;}
;}
,"CHILD":function(jf,ja,je,jg,jb){var jd=jf.slice(0,3)!==o,forward=jf.slice(-4)!==eN,jc=ja===en;return jg===1&&jb===0?function(jh){return !!jh.parentNode;}
:function(jm,jq,ji){var jl,jo,jr,jj,jk,jn,jt=jd!==forward?Y:u,parent=jm.parentNode,name=jc&&jm.nodeName.toLowerCase(),jp=!ji&&!jc,js=false;if(parent){if(jd){while(jt){jj=jm;while((jj=jj[jt])){if(jc?jj.nodeName.toLowerCase()===name:jj.nodeType===1){return false;}
;}
;jn=jt=jf===x&&!jn&&Y;}
;return true;}
;jn=[forward?parent.firstChild:parent.lastChild];if(forward&&jp){jj=parent;jr=jj[gi]||(jj[gi]={});jo=jr[jj.uniqueID]||(jr[jj.uniqueID]={});jl=jo[jf]||[];jk=jl[0]===fN&&jl[1];js=jk&&jl[2];jj=jk&&parent.childNodes[jk];while((jj= ++jk&&jj&&jj[jt]||(js=jk=0)||jn.pop())){if(jj.nodeType===1&& ++js&&jj===jm){jo[jf]=[fN,jk,js];break;}
;}
;}
else {if(jp){jj=jm;jr=jj[gi]||(jj[gi]={});jo=jr[jj.uniqueID]||(jr[jj.uniqueID]={});jl=jo[jf]||[];jk=jl[0]===fN&&jl[1];js=jk;}
;if(js===false){while((jj= ++jk&&jj&&jj[jt]||(js=jk=0)||jn.pop())){if((jc?jj.nodeName.toLowerCase()===name:jj.nodeType===1)&& ++js){if(jp){jr=jj[gi]||(jj[gi]={});jo=jr[jj.uniqueID]||(jr[jj.uniqueID]={});jo[jf]=[fN,js];}
;if(jj===jm){break;}
;}
;}
;}
;}
;js-=jb;return js===jg||(js%jg===0&&js/jg>=0);}
;}
;}
,"PSEUDO":function(jv,jw){var ju,jx=gB.pseudos[jv]||gB.setFilters[jv.toLowerCase()]||gc.error(dB+jv);if(jx[gi]){return jx(jw);}
;if(jx.length>1){ju=[jv,jv,eD,jw];return gB.setFilters.hasOwnProperty(jv.toLowerCase())?gn(function(jz,jy){var jA,jB=jx(jz,jw),i=jB.length;while(i-- ){jA=fI(jz,jB[i]);jz[jA]=!(jy[jA]=jB[i]);}
;}
):function(jC){return jx(jC,0,ju);}
;}
;return jx;}
},pseudos:{"not":gn(function(jE){var jD=[],jF=[],jG=gr(jE.replace(ge,ex));return jG[gi]?gn(function(jL,jI,jM,jH){var jJ,jK=jG(jL,null,jH,[]),i=jL.length;while(i-- ){if((jJ=jK[i])){jL[i]=!(jI[i]=jJ);}
;}
;}
):function(jO,jP,jN){jD[0]=jO;jG(jD,null,jN,jF);jD[0]=null;return !jF.pop();}
;}
),"has":gn(function(jQ){return function(jR){return gc(jQ,jR).length>0;}
;}
),"contains":gn(function(jS){jS=jS.replace(fi,gh);return function(jT){return (jT.textContent||jT.innerText||fk(jT)).indexOf(jS)>-1;}
;}
),"lang":gn(function(jU){if(!fO.test(jU||eD)){gc.error(A+jU);}
;jU=jU.replace(fi,gh).toLowerCase();return function(jW){var jV;do {if((jV=fw?jW.lang:jW.getAttribute(w)||jW.getAttribute(eh))){jV=jV.toLowerCase();return jV===jU||jV.indexOf(jU+c)===0;}
;}
while((jW=jW.parentNode)&&jW.nodeType===1);return false;}
;}
),"target":function(jY){var jX=window.location&&window.location.hash;return jX&&jX.slice(1)===jY.id;}
,"root":function(ka){return ka===gz;}
,"focus":function(kb){return kb===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(kb.type||kb.href||~kb.tabIndex);}
,"enabled":fu(false),"disabled":fu(true),"checked":function(kc){var kd=kc.nodeName.toLowerCase();return (kd===dl&&!!kc.checked)||(kd===q&&!!kc.selected);}
,"selected":function(ke){if(ke.parentNode){ke.parentNode.selectedIndex;}
;return ke.selected===true;}
,"empty":function(kf){for(kf=kf.firstChild;kf;kf=kf.nextSibling){if(kf.nodeType<6){return false;}
;}
;return true;}
,"parent":function(kg){return !gB.pseudos[eL](kg);}
,"header":function(kh){return fh.test(kh.nodeName);}
,"input":function(ki){return gl.test(ki.nodeName);}
,"button":function(kj){var name=kj.nodeName.toLowerCase();return name===dl&&kj.type===dT||name===dT;}
,"text":function(kk){var kl;return kk.nodeName.toLowerCase()===dl&&kk.type===dH&&((kl=kk.getAttribute(dm))==null||kl.toLowerCase()===dH);}
,"first":fX(function(){return [0];}
),"last":fX(function(km,length){return [length-1];}
),"eq":fX(function(kn,length,ko){return [ko<0?ko+length:ko];}
),"even":fX(function(kp,length){var i=0;for(;i<length;i+=2){kp.push(i);}
;return kp;}
),"odd":fX(function(kq,length){var i=1;for(;i<length;i+=2){kq.push(i);}
;return kq;}
),"lt":fX(function(kr,length,ks){var i=ks<0?ks+length:ks;for(; --i>=0;){kr.push(i);}
;return kr;}
),"gt":fX(function(kt,length,ku){var i=ku<0?ku+length:ku;for(; ++i<length;){kt.push(i);}
;return kt;}
)}};gB.pseudos[o]=gB.pseudos[eu];for(i in {radio:true,checkbox:true,file:true,password:true,image:true}){gB.pseudos[i]=gt(i);}
;for(i in {submit:true,reset:true}){gB.pseudos[i]=ff(i);}
;function gy(){}
;gy.prototype=gB.filters=gB.pseudos;gB.setFilters=new gy();fL=gc.tokenize=function(ky,kx){var kE,kD,kv,kC,kz,kB,kA,kw=gg[ky+dL];if(kw){return kx?0:kw.slice(0);}
;kz=ky;kB=[];kA=gB.preFilter;while(kz){if(!kE||(kD=gm.exec(kz))){if(kD){kz=kz.slice(kD[0].length)||kz;}
;kB.push((kv=[]));}
;kE=false;if((kD=fC.exec(kz))){kE=kD.shift();kv.push({value:kE,type:kD[0].replace(ge,dL)});kz=kz.slice(kE.length);}
;for(kC in gB.filter){if((kD=gq[kC].exec(kz))&&(!kA[kC]||(kD=kA[kC](kD)))){kE=kD.shift();kv.push({value:kE,type:kC,matches:kD});kz=kz.slice(kE.length);}
;}
;if(!kE){break;}
;}
;return kx?kz.length:kz?gc.error(ky):gg(ky,kB).slice(0);}
;function fH(kF){var i=0,kG=kF.length,kH=eD;for(;i<kG;i++ ){kH+=kF[i].value;}
;return kH;}
;function fW(kI,kJ,kK){var kL=kJ.dir,kN=kJ.next,kM=kN||kL,kP=kK&&kM===ds,kO=fp++ ;return kJ.first?function(kR,kS,kQ){while((kR=kR[kL])){if(kR.nodeType===1||kP){return kI(kR,kS,kQ);}
;}
;}
:function(kU,kX,kT){var kV,kW,kY,la=[fN,kO];if(kT){while((kU=kU[kL])){if(kU.nodeType===1||kP){if(kI(kU,kX,kT)){return true;}
;}
;}
;}
else {while((kU=kU[kL])){if(kU.nodeType===1||kP){kY=kU[gi]||(kU[gi]={});kW=kY[kU.uniqueID]||(kY[kU.uniqueID]={});if(kN&&kN===kU.nodeName.toLowerCase()){kU=kU[kL]||kU;}
else if((kV=kW[kM])&&kV[0]===fN&&kV[1]===kO){return (la[2]=kV[2]);}
else {kW[kM]=la;if((la[2]=kI(kU,kX,kT))){return true;}
;}
;}
;}
;}
;}
;}
;function fG(lb){return lb.length>1?function(ld,le,lc){var i=lb.length;while(i-- ){if(!lb[i](ld,le,lc)){return false;}
;}
;return true;}
:lb[0];}
;function gk(li,lf,lg){var i=0,lh=lf.length;for(;i<lh;i++ ){gc(li,lf[i],lg);}
;return lg;}
;function fl(lm,lk,ln,lp,lj){var ll,lr=[],i=0,lo=lm.length,lq=lk!=null;for(;i<lo;i++ ){if((ll=lm[i])){if(!ln||ln(ll,lp,lj)){lr.push(ll);if(lq){lk.push(i);}
;}
;}
;}
;return lr;}
;function fA(lw,lv,lu,lt,ls,lx){if(lt&&!lt[gi]){lt=fA(lt);}
;if(ls&&!ls[gi]){ls=fA(ls,lx);}
;return gn(function(lG,lB,lH,ly){var lz,i,lD,lF=[],lJ=[],lA=lB.length,lI=lG||gk(lv||y,lH.nodeType?[lH]:lH,[]),lC=lw&&(lG||!lv)?fl(lI,lF,lw,lH,ly):lI,lE=lu?ls||(lG?lw:lA||lt)?[]:lB:lC;if(lu){lu(lC,lE,lH,ly);}
;if(lt){lz=fl(lE,lJ);lt(lz,[],lH,ly);i=lz.length;while(i-- ){if((lD=lz[i])){lE[lJ[i]]=!(lC[lJ[i]]=lD);}
;}
;}
;if(lG){if(ls||lw){if(ls){lz=[];i=lE.length;while(i-- ){if((lD=lE[i])){lz.push((lC[i]=lD));}
;}
;ls(null,(lE=[]),lz,ly);}
;i=lE.length;while(i-- ){if((lD=lE[i])&&(lz=ls?fI(lG,lD):lF[i])>-1){lG[lz]=!(lB[lz]=lD);}
;}
;}
;}
else {lE=fl(lE===lB?lE.splice(lA,lE.length):lE);if(ls){ls(null,lB,lE,ly);}
else {gb.apply(lB,lE);}
;}
;}
);}
;function gv(lP){var lK,lM,j,lN=lP.length,lL=gB.relative[lP[0].type],lS=lL||gB.relative[dL],i=lL?1:0,lR=fW(function(lT){return lT===lK;}
,lS,true),lO=fW(function(lU){return fI(lK,lU)>-1;}
,lS,true),lQ=[function(lW,lX,lV){var lY=(!lL&&(lV||lX!==fc))||((lK=lX).nodeType?lR(lW,lX,lV):lO(lW,lX,lV));lK=null;return lY;}
];for(;i<lN;i++ ){if((lM=gB.relative[lP[i].type])){lQ=[fW(fG(lQ),lM)];}
else {lM=gB.filter[lP[i].type].apply(null,lP[i].matches);if(lM[gi]){j= ++i;for(;j<lN;j++ ){if(gB.relative[lP[j].type]){break;}
;}
;return fA(i>1&&fG(lQ),i>1&&fH(lP.slice(0,i-1).concat({value:lP[i-2].type===dL?y:eD})).replace(ge,ex),lM,i<j&&gv(lP.slice(i,j)),j<lN&&gv((lP=lP.slice(j))),j<lN&&fH(lP));}
;lQ.push(lM);}
;}
;return fG(lQ);}
;function fK(me,mb){var ma=mb.length>0,mc=me.length>0,md=function(mn,mq,mf,mj,mi){var ml,j,mr,mg=0,i=dP,mk=mn&&[],mm=[],mh=fc,ms=mn||mc&&gB.find[eI](y,mi),mo=(fN+=mh==null?1:Math.random()||0.1),mp=ms.length;if(mi){fc=mq===document||mq||mi;}
;for(;i!==mp&&(ml=ms[i])!=null;i++ ){if(mc&&ml){j=0;if(!mq&&ml.ownerDocument!==document){fs(ml);mf=!fw;}
;while((mr=me[j++ ])){if(mr(ml,mq||document,mf)){mj.push(ml);break;}
;}
;if(mi){fN=mo;}
;}
;if(ma){if((ml=!mr&&ml)){mg-- ;}
;if(mn){mk.push(ml);}
;}
;}
;mg+=i;if(ma&&i!==mg){j=0;while((mr=mb[j++ ])){mr(mk,mm,mq,mf);}
;if(mn){if(mg>0){while(i-- ){if(!(mk[i]||mm[i])){mm[i]=fo.call(mj);}
;}
;}
;mm=fl(mm);}
;gb.apply(mj,mm);if(mi&&!mn&&mm.length>0&&(mg+mb.length)>1){gc.uniqueSort(mj);}
;}
;if(mi){fN=mo;fc=mh;}
;return mk;}
;return ma?gn(md):md;}
;gr=gc.compile=function(mu,mx){var i,mw=[],mt=[],mv=gx[mu+dL];if(!mv){if(!mx){mx=fL(mu);}
;i=mx.length;while(i-- ){mv=gv(mx[i]);if(mv[gi]){mw.push(mv);}
else {mt.push(mv);}
;}
;mv=gx(mu,fK(mt,mw));mv.selector=mu;}
;return mv;}
;fx=gc.select=function(mA,mE,mz,mD){var i,mB,mC,mF,find,my=typeof mA===dG&&mA,mG=!mD&&fL((mA=my.selector||mA));mz=mz||[];if(mG.length===1){mB=mG[0]=mG[0].slice(0);if(mB.length>2&&(mC=mB[0]).type===eO&&fD.getById&&mE.nodeType===9&&fw&&gB.relative[mB[1].type]){mE=(gB.find[eO](mC.matches[0].replace(fi,gh),mE)||[])[0];if(!mE){return mz;}
else if(my){mE=mE.parentNode;}
;mA=mA.slice(mB.shift().value.length);}
;i=gq[X].test(mA)?0:mB.length;while(i-- ){mC=mB[i];if(gB.relative[(mF=mC.type)]){break;}
;if((find=gB.find[mF])){if((mD=find(mC.matches[0].replace(fi,gh),fR.test(mB[0].type)&&fr(mE.parentNode)||mE))){mB.splice(i,1);mA=mD.length&&fH(mB);if(!mA){gb.apply(mz,mD);return mz;}
;break;}
;}
;}
;}
;(my||gr(mA,mG))(mD,mE,!fw,mz,!mE||fR.test(mA)&&fr(mE.parentNode)||mE);return mz;}
;fD.sortStable=gi.split(eD).sort(fJ).join(eD)===gi;fD.detectDuplicates=!!fv;fs();fD.sortDetached=ga(function(mH){return mH.compareDocumentPosition(document.createElement(ei))&1;}
);if(!ga(function(mI){mI.innerHTML=eM;return mI.firstChild.getAttribute(dw)===dk;}
)){gd(p,function(mJ,name,mK){if(!mK){return mJ.getAttribute(name,name.toLowerCase()===dm?1:2);}
;}
);}
;if(!fD.attributes||!ga(function(mL){mL.innerHTML=dY;mL.firstChild.setAttribute(eB,eD);return mL.firstChild.getAttribute(eB)===eD;}
)){gd(eB,function(mM,name,mN){if(!mN&&mM.nodeName.toLowerCase()===dl){return mM.defaultValue;}
;}
);}
;if(!ga(function(mO){return mO.getAttribute(r)==null;}
)){gd(fS,function(mQ,name,mP){var mR;if(!mP){return mQ[name]===true?name.toLowerCase():(mR=mQ.getAttributeNode(name))&&mR.specified?mR.value:null;}
;}
);}
;qx.bom.Selector.query=function(mT,mS){return gc(mT,mS);}
;qx.bom.Selector.matches=function(mV,mU){return gc(mV,null,null,mU);}
;}
)(window);}
)();
(function(){var b="ease-in-out",c="Number",d="css.animation.requestframe",e="qx.bom.AnimationFrame",f="frame",g="end",h="linear",j="ease-in",k="ease-out";qx.Bootstrap.define(e,{extend:qx.event.Emitter,events:{"end":undefined,"frame":c},members:{__hr:false,startSequence:function(l){this.__hr=false;var m=(window.performance&&performance.now)?(performance.now()+qx.bom.AnimationFrame.__hs):Date.now();var n=function(p){if(this.__hr){this.id=null;return;}
;if(p>=m+l){this.emit(g);this.id=null;}
else {var o=Math.max(p-m,0);this.emit(f,o);this.id=qx.bom.AnimationFrame.request(n,this);}
;}
;this.id=qx.bom.AnimationFrame.request(n,this);}
,cancelSequence:function(){this.__hr=true;}
},statics:{TIMEOUT:30,calculateTiming:function(q,x){if(q==j){var a=[3.1223e-7,0.0757,1.2646,-0.167,-0.4387,0.2654];}
else if(q==k){var a=[-7.0198e-8,1.652,-0.551,-0.0458,0.1255,-0.1807];}
else if(q==h){return x;}
else if(q==b){var a=[2.482e-7,-0.2289,3.3466,-1.0857,-1.7354,0.7034];}
else {var a=[-0.0021,0.2472,9.8054,-21.6869,17.7611,-5.1226];}
;var y=0;for(var i=0;i<a.length;i++ ){y+=a[i]*Math.pow(x,i);}
;return y;}
,request:function(u,t){var s=qx.core.Environment.get(d);var r=function(v){if(v<1e10){v=qx.bom.AnimationFrame.__hs+v;}
;v=v||Date.now();u.call(t,v);}
;if(s){return window[s](r);}
else {return window.setTimeout(function(){r();}
,qx.bom.AnimationFrame.TIMEOUT);}
;}
},defer:function(w){w.__hs=window.performance&&performance.timing&&performance.timing.navigationStart;if(!w.__hs){w.__hs=Date.now();}
;}
});}
)();
(function(){var a="qx.bom.client.Stylesheet",b="html.stylesheet.deleterule",c="html.stylesheet.insertrule",d="function",e="html.stylesheet.createstylesheet",f="html.stylesheet.addimport",g="html.stylesheet.removeimport",h="object";qx.Bootstrap.define(a,{statics:{__eq:function(){if(!qx.bom.client.Stylesheet.__er){qx.bom.client.Stylesheet.__er=qx.bom.Stylesheet.createElement();}
;return qx.bom.client.Stylesheet.__er;}
,getCreateStyleSheet:function(){return typeof document.createStyleSheet===h;}
,getInsertRule:function(){return typeof qx.bom.client.Stylesheet.__eq().insertRule===d;}
,getDeleteRule:function(){return typeof qx.bom.client.Stylesheet.__eq().deleteRule===d;}
,getAddImport:function(){return (typeof qx.bom.client.Stylesheet.__eq().addImport===h);}
,getRemoveImport:function(){return (typeof qx.bom.client.Stylesheet.__eq().removeImport===h);}
},defer:function(i){qx.core.Environment.add(e,i.getCreateStyleSheet);qx.core.Environment.add(c,i.getInsertRule);qx.core.Environment.add(b,i.getDeleteRule);qx.core.Environment.add(f,i.getAddImport);qx.core.Environment.add(g,i.getRemoveImport);}
});}
)();
(function(){var a="stylesheet",b="qx.bom.Stylesheet.addRule: The rule '",c="head",d="' must not be enclosed in braces",e="html.stylesheet.insertrule",f='qx.debug',g="' for the selector '",h="}",j="html.stylesheet.createstylesheet",k='@import "',l="text/css",m="{",n='";',o="html.stylesheet.removeimport",p="html.stylesheet.deleterule",q="qx.bom.Stylesheet",r="html.stylesheet.addimport",s="link",t="style";qx.Bootstrap.define(q,{statics:{includeFile:function(w,u){if(!u){u=document;}
;var x=u.createElement(s);x.type=l;x.rel=a;x.href=w;var v=u.getElementsByTagName(c)[0];v.appendChild(x);}
,createElement:function(y){if(qx.core.Environment.get(j)){var z=document.createStyleSheet();if(y){z.cssText=y;}
;return z;}
else {var A=document.createElement(t);A.type=l;if(y){A.appendChild(document.createTextNode(y));}
;document.getElementsByTagName(c)[0].appendChild(A);return A.sheet;}
;}
,addRule:function(D,E,C){if(qx.core.Environment.get(f)){var B=b+C+g+E+d;qx.core.Assert.assertFalse(/^\s*?\{.*?\}\s*?$/.test(C),B);}
;if(qx.core.Environment.get(e)){D.insertRule(E+m+C+h,D.cssRules.length);}
else {D.addRule(E,C);}
;}
,removeRule:function(G,I){if(qx.core.Environment.get(p)){var F=G.cssRules;var H=F.length;for(var i=H-1;i>=0; --i){if(F[i].selectorText==I){G.deleteRule(i);}
;}
;}
else {var F=G.rules;var H=F.length;for(var i=H-1;i>=0; --i){if(F[i].selectorText==I){G.removeRule(i);}
;}
;}
;}
,removeSheet:function(K){var J=K.ownerNode?K.ownerNode:K.owningElement;qx.dom.Element.removeChild(J,J.parentNode);}
,removeAllRules:function(M){if(qx.core.Environment.get(p)){var L=M.cssRules;var N=L.length;for(var i=N-1;i>=0;i-- ){M.deleteRule(i);}
;}
else {var L=M.rules;var N=L.length;for(var i=N-1;i>=0;i-- ){M.removeRule(i);}
;}
;}
,addImport:function(P,O){if(qx.core.Environment.get(r)){P.addImport(O);}
else {P.insertRule(k+O+n,P.cssRules.length);}
;}
,removeImport:function(Q,R){if(qx.core.Environment.get(o)){var S=Q.imports;var T=S.length;for(var i=T-1;i>=0;i-- ){if(S[i].href==R||S[i].href==qx.util.Uri.getAbsolute(R)){Q.removeImport(i);}
;}
;}
else {var U=Q.cssRules;var T=U.length;for(var i=T-1;i>=0;i-- ){if(U[i].href==R){Q.deleteRule(i);}
;}
;}
;}
,removeAllImports:function(W){if(qx.core.Environment.get(o)){var Y=W.imports;var X=Y.length;for(var i=X-1;i>=0;i-- ){W.removeImport(i);}
;}
else {var V=W.cssRules;var X=V.length;for(var i=X-1;i>=0;i-- ){if(V[i].type==V[i].IMPORT_RULE){W.deleteRule(i);}
;}
;}
;}
}});}
)();
(function(){var a="engine.name",b="",c="none",d="qx.dom.Element",e="webkit",f="The tag name is missing!",g="div";qx.Bootstrap.define(d,{statics:{hasChild:function(parent,h){return h.parentNode===parent;}
,hasChildren:function(j){return !!j.firstChild;}
,hasChildElements:function(k){k=k.firstChild;while(k){if(k.nodeType===1){return true;}
;k=k.nextSibling;}
;return false;}
,getParentElement:function(m){return m.parentNode;}
,isInDom:function(p,n){if(!n){n=window;}
;var o=n.document.getElementsByTagName(p.nodeName);for(var i=0,l=o.length;i<l;i++ ){if(o[i]===p){return true;}
;}
;return false;}
,insertAt:function(q,parent,r){var s=parent.childNodes[r];if(s){parent.insertBefore(q,s);}
else {parent.appendChild(q);}
;return true;}
,insertBegin:function(t,parent){if(parent.firstChild){this.insertBefore(t,parent.firstChild);}
else {parent.appendChild(t);}
;return true;}
,insertEnd:function(u,parent){parent.appendChild(u);return true;}
,insertBefore:function(v,w){w.parentNode.insertBefore(v,w);return true;}
,insertAfter:function(x,y){var parent=y.parentNode;if(y==parent.lastChild){parent.appendChild(x);}
else {return this.insertBefore(x,y.nextSibling);}
;return true;}
,remove:function(z){if(!z.parentNode){return false;}
;z.parentNode.removeChild(z);return true;}
,removeChild:function(A,parent){if(A.parentNode!==parent){return false;}
;parent.removeChild(A);return true;}
,removeChildAt:function(B,parent){var C=parent.childNodes[B];if(!C){return false;}
;parent.removeChild(C);return true;}
,replaceChild:function(E,D){if(!D.parentNode){return false;}
;D.parentNode.replaceChild(E,D);return true;}
,replaceAt:function(G,H,parent){var F=parent.childNodes[H];if(!F){return false;}
;parent.replaceChild(G,F);return true;}
,__es:{},getHelperElement:function(I){if(!I){I=window;}
;var J=I.location.href;if(!qx.dom.Element.__es[J]){var K=qx.dom.Element.__es[J]=I.document.createElement(g);if(qx.core.Environment.get(a)==e){K.style.display=c;I.document.body.appendChild(K);}
;}
;return qx.dom.Element.__es[J];}
,create:function(name,M,L){if(!L){L=window;}
;if(!name){throw new Error(f);}
;var O=L.document.createElement(name);for(var N in M){qx.bom.element.Attribute.set(O,N,M[N]);}
;return O;}
,empty:function(P){return P.innerHTML=b;}
}});}
)();
(function(){var b="function",c="html.video.h264",d="html.element.contains",f='video/ogg; codecs="theora, vorbis"',g="qxtest",h="html.console",i="html.xul",j="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",k="html.video.ogg",l="http://www.w3.org/TR/SVG11/feature#BasicStructure",m="html.storage.local",n="div",o="qx.bom.client.Html",p="getSelection",q='audio',r='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',s="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t="html.audio",u="video",w="url(#default#VML)",x="head",y="audio",z="audio/mpeg",A="org.w3c.dom.svg",B="html.classlist",C="html.svg",D="html.video",E="html.geolocation",F="DOMTokenList",G="html.storage.session",H="1.1",I="html.history.state",J="object",K="html.image.naturaldimensions",L="html.audio.aif",M="audio/x-wav",N='<v:shape id="vml_flag1" adj="1" />',O="html.node.isequalnode",P="html.canvas",Q="audio/ogg",R="",S="html.storage.userdata",T="html.fullscreen",U="number",V="html.element.compareDocumentPosition",W="audio/x-aiff",X="html.audio.au",Y="img",bF="html.selection",bG="selection",bH="html.xpath",bB="$qx_check",bC="test",bD='video',bE="span",bM="html.element.textcontent",bN="geolocation",bW="html.audio.mp3",bA="html.vml",bI="undefined",bJ="html.audio.ogg",bK="none",bL="label",bQ='video/webm; codecs="vp8, vorbis"',ca="html.dataurl",bR="html.webworker",bS="html.dataset",bX="1.0",bO="html.audio.wav",bY="html.filereader",bP="audio/basic",bT="display",bU="html.video.webm",bV="#default#userdata";qx.Bootstrap.define(o,{statics:{getWebWorker:function(){return window.Worker!=null;}
,getFileReader:function(){return window.FileReader!=null;}
,getGeoLocation:function(){return bN in navigator;}
,getAudio:function(){return !!document.createElement(q).canPlayType;}
,getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return R;}
;var a=document.createElement(y);return a.canPlayType(Q);}
,getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return R;}
;var a=document.createElement(y);return a.canPlayType(z);}
,getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return R;}
;var a=document.createElement(y);return a.canPlayType(M);}
,getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return R;}
;var a=document.createElement(y);return a.canPlayType(bP);}
,getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return R;}
;var a=document.createElement(y);return a.canPlayType(W);}
,getVideo:function(){return !!document.createElement(bD).canPlayType;}
,getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return R;}
;var v=document.createElement(u);return v.canPlayType(f);}
,getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return R;}
;var v=document.createElement(u);return v.canPlayType(r);}
,getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return R;}
;var v=document.createElement(u);return v.canPlayType(bQ);}
,getLocalStorage:function(){try{window.localStorage.setItem(bB,bC);window.localStorage.removeItem(bB);return true;}
catch(cb){return false;}
;}
,getSessionStorage:function(){try{window.sessionStorage.setItem(bB,bC);window.sessionStorage.removeItem(bB);return true;}
catch(cc){return false;}
;}
,getUserDataStorage:function(){var cd=document.createElement(n);cd.style[bT]=bK;document.getElementsByTagName(x)[0].appendChild(cd);var ce=false;try{cd.addBehavior(bV);cd.load(g);ce=true;}
catch(e){}
;document.getElementsByTagName(x)[0].removeChild(cd);return ce;}
,getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===F);}
,getXPath:function(){return !!document.evaluate;}
,getXul:function(){try{document.createElementNS(j,bL);return true;}
catch(e){return false;}
;}
,getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(A,bX)||document.implementation.hasFeature(l,H));}
,getVml:function(){var cf=document.createElement(n);document.body.appendChild(cf);cf.innerHTML=N;cf.firstChild.style.behavior=w;var cg=typeof cf.firstChild.adj==J;document.body.removeChild(cf);return cg;}
,getCanvas:function(){return !!window.CanvasRenderingContext2D;}
,getDataUrl:function(ch){var ci=new Image();ci.onload=ci.onerror=function(){window.setTimeout(function(){ch.call(null,(ci.width==1&&ci.height==1));}
,0);}
;ci.src=s;}
,getDataset:function(){return !!document.documentElement.dataset;}
,getContains:function(){return (typeof document.documentElement.contains!==bI);}
,getCompareDocumentPosition:function(){return (typeof document.documentElement.compareDocumentPosition===b);}
,getTextContent:function(){var cj=document.createElement(bE);return (typeof cj.textContent!==bI);}
,getFullScreen:function(){return document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled||false;}
,getConsole:function(){return typeof window.console!==bI;}
,getNaturalDimensions:function(){var ck=document.createElement(Y);return typeof ck.naturalHeight===U&&typeof ck.naturalWidth===U;}
,getHistoryState:function(){return (typeof window.onpopstate!==bI&&typeof window.history.replaceState!==bI&&typeof window.history.pushState!==bI);}
,getSelection:function(){if(typeof window.getSelection===b){return p;}
;if(typeof document.selection===J){return bG;}
;return null;}
,getIsEqualNode:function(){return typeof document.documentElement.isEqualNode===b;}
},defer:function(cl){qx.core.Environment.add(bR,cl.getWebWorker);qx.core.Environment.add(bY,cl.getFileReader);qx.core.Environment.add(E,cl.getGeoLocation);qx.core.Environment.add(t,cl.getAudio);qx.core.Environment.add(bJ,cl.getAudioOgg);qx.core.Environment.add(bW,cl.getAudioMp3);qx.core.Environment.add(bO,cl.getAudioWav);qx.core.Environment.add(X,cl.getAudioAu);qx.core.Environment.add(L,cl.getAudioAif);qx.core.Environment.add(D,cl.getVideo);qx.core.Environment.add(k,cl.getVideoOgg);qx.core.Environment.add(c,cl.getVideoH264);qx.core.Environment.add(bU,cl.getVideoWebm);qx.core.Environment.add(m,cl.getLocalStorage);qx.core.Environment.add(G,cl.getSessionStorage);qx.core.Environment.add(S,cl.getUserDataStorage);qx.core.Environment.add(B,cl.getClassList);qx.core.Environment.add(bH,cl.getXPath);qx.core.Environment.add(i,cl.getXul);qx.core.Environment.add(P,cl.getCanvas);qx.core.Environment.add(C,cl.getSvg);qx.core.Environment.add(bA,cl.getVml);qx.core.Environment.add(bS,cl.getDataset);qx.core.Environment.addAsync(ca,cl.getDataUrl);qx.core.Environment.add(d,cl.getContains);qx.core.Environment.add(V,cl.getCompareDocumentPosition);qx.core.Environment.add(bM,cl.getTextContent);qx.core.Environment.add(h,cl.getConsole);qx.core.Environment.add(K,cl.getNaturalDimensions);qx.core.Environment.add(I,cl.getHistoryState);qx.core.Environment.add(bF,cl.getSelection);qx.core.Environment.add(O,cl.getIsEqualNode);qx.core.Environment.add(T,cl.getFullScreen);}
});}
)();
(function(){var a="readOnly",b="data-",c="accessKey",d="qx.bom.element.Attribute",e="rowSpan",f="vAlign",g="className",h="textContent",i="'",j="htmlFor",k="longDesc",l="cellSpacing",m="frameBorder",n="='",o="",p="useMap",q="innerText",r="innerHTML",s="tabIndex",t="dateTime",u="maxLength",v="html.element.textcontent",w="mshtml",x="engine.name",y="cellPadding",z="browser.documentmode",A="colSpan",B="undefined";qx.Bootstrap.define(d,{statics:{__et:{names:{"class":g,"for":j,html:r,text:qx.core.Environment.get(v)?h:q,colspan:A,rowspan:e,valign:f,datetime:t,accesskey:c,tabindex:s,maxlength:u,readonly:a,longdesc:k,cellpadding:y,cellspacing:l,frameborder:m,usemap:p},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$element:1,$$elementObject:1,$$widget:1,$$widgetObject:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$widgetObject:1,$$element:1,$$elementObject:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:o,className:o,innerHTML:o,innerText:o,textContent:o,htmlFor:o,tabIndex:0,maxLength:qx.core.Environment.select(x,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1}},compile:function(C){var D=[];var F=this.__et.runtime;for(var E in C){if(!F[E]){D.push(E,n,C[E],i);}
;}
;return D.join(o);}
,get:function(I,name){var G=this.__et;var H;name=G.names[name]||name;if(G.property[name]){H=I[name];if(typeof G.propertyDefault[name]!==B&&H==G.propertyDefault[name]){if(typeof G.bools[name]===B){return null;}
else {return H;}
;}
;}
else {H=I.getAttribute(name);if(G.bools[name]&&!(qx.core.Environment.get(x)==w&&parseInt(qx.core.Environment.get(z),10)<=8)){return qx.Bootstrap.isString(H);}
;}
;if(G.bools[name]){return !!H;}
;return H;}
,set:function(L,name,K){if(typeof K===B){return;}
;var J=this.__et;name=J.names[name]||name;if(J.bools[name]&&!qx.lang.Type.isBoolean(K)){K=qx.lang.Type.isString(K);}
;if(J.property[name]&&(!(L[name]===undefined)||J.qxProperties[name])){if(K==null){if(J.removeableProperties[name]){L.removeAttribute(name);return;}
else if(typeof J.propertyDefault[name]!==B){K=J.propertyDefault[name];}
;}
;L[name]=K;}
else {if((J.bools[name]||K===null)&&name.indexOf(b)!==0){if(K===true){L.setAttribute(name,name);}
else if(K===false||K===null){L.removeAttribute(name);}
;}
else if(K===null){L.removeAttribute(name);}
else {L.setAttribute(name,K);}
;}
;}
,reset:function(M,name){if(name.indexOf(b)===0){M.removeAttribute(name);}
else {this.set(M,name,null);}
;}
}});}
)();
(function(){var a="file",b="+",c="strict",d="anchor",e="div",f="query",g="source",h="password",j="host",k="protocol",l="qx.debug",n="user",p="directory",q="loose",r="relative",s="queryKey",t="qx.util.Uri",u="",v="path",w="authority",x='">0</a>',y="&",z="port",A="params must be either string or object",B='<a href="',C="userInfo",D="?",E="=";qx.Bootstrap.define(t,{statics:{parseUri:function(H,G){var I={key:[g,k,w,C,n,h,j,z,r,v,p,a,f,d],q:{name:s,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@?]*)(?::([^:@?]*))?)?@)?((?:\[[0-9A-Fa-f:]+\])|(?:[^:\/?#\[\]]*))(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@?]+:[^:@?\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@?]*)(?::([^:@?]*))?)?@)?((?:\[[0-9A-Fa-f:]+\])|(?:[^:\/?#\[\]]*))(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var o=I,m=I.parser[G?c:q].exec(H),F={},i=14;while(i-- ){F[o.key[i]]=m[i]||u;}
;F[o.q.name]={};F[o.key[12]].replace(o.q.parser,function(K,L,J){if(L){F[o.q.name][L]=J;}
;}
);return F;}
,appendParamsToUrl:function(M,N){if(N===undefined){return M;}
;if(qx.core.Environment.get(l)){if(!(qx.lang.Type.isString(N)||qx.lang.Type.isObject(N))){throw new Error(A);}
;}
;if(qx.lang.Type.isObject(N)){N=qx.util.Uri.toParameter(N);}
;if(!N){return M;}
;return M+=(/\?/).test(M)?y+N:D+N;}
,toParameter:function(O,S){var R,Q=[];for(R in O){if(O.hasOwnProperty(R)){var P=O[R];if(P instanceof Array){for(var i=0;i<P.length;i++ ){this.__eu(R,P[i],Q,S);}
;}
else {this.__eu(R,P,Q,S);}
;}
;}
;return Q.join(y);}
,__eu:function(W,X,V,U){var T=window.encodeURIComponent;if(U){V.push(T(W).replace(/%20/g,b)+E+T(X).replace(/%20/g,b));}
else {V.push(T(W)+E+T(X));}
;}
,getAbsolute:function(ba){var Y=document.createElement(e);Y.innerHTML=B+ba+x;return Y.firstChild.href;}
}});}
)();
(function(){var a="oAnimationStart",b="animationend",c="MSAnimationStart",d="oRequestAnimationFrame",f="AnimationFillMode",g="webkitAnimationStart",h="MSAnimationEnd",j="requestAnimationFrame",k="mozRequestAnimationFrame",l="webkitanimationend",m="css.animation.requestframe",n="AnimationPlayState",o="",p="MSAnimationIteration",q="animation",r="oAnimationEnd",s="@",t="animationiteration",u="webkitAnimationEnd",v="webkitRequestAnimationFrame",w=" name",x="qx.bom.client.CssAnimation",y="css.animation",z="oAnimationIteration",A="webkitanimationiteration",B="-keyframes",C="msRequestAnimationFrame",D="@keyframes",E="webkitAnimationIteration",F="animationstart",G="webkitanimationstart";qx.Bootstrap.define(x,{statics:{getSupport:function(){var name=qx.bom.client.CssAnimation.getName();if(name!=null){return {"name":name,"play-state":qx.bom.client.CssAnimation.getPlayState(),"start-event":qx.bom.client.CssAnimation.getAnimationStart(),"iteration-event":qx.bom.client.CssAnimation.getAnimationIteration(),"end-event":qx.bom.client.CssAnimation.getAnimationEnd(),"fill-mode":qx.bom.client.CssAnimation.getFillMode(),"keyframes":qx.bom.client.CssAnimation.getKeyFrames()};}
;return null;}
,getFillMode:function(){return qx.bom.Style.getPropertyName(f);}
,getPlayState:function(){return qx.bom.Style.getPropertyName(n);}
,getName:function(){return qx.bom.Style.getPropertyName(q);}
,getAnimationStart:function(){if(qx.bom.Event.supportsEvent(window,G)){return g;}
;var H={"msAnimation":c,"WebkitAnimation":g,"MozAnimation":F,"OAnimation":a,"animation":F};return H[this.getName()];}
,getAnimationIteration:function(){if(qx.bom.Event.supportsEvent(window,A)){return E;}
;var I={"msAnimation":p,"WebkitAnimation":E,"MozAnimation":t,"OAnimation":z,"animation":t};return I[this.getName()];}
,getAnimationEnd:function(){if(qx.bom.Event.supportsEvent(window,l)){return u;}
;var J={"msAnimation":h,"WebkitAnimation":u,"MozAnimation":b,"OAnimation":r,"animation":b};return J[this.getName()];}
,getKeyFrames:function(){var K=qx.bom.Style.VENDOR_PREFIXES;var N=[];for(var i=0;i<K.length;i++ ){var M=s+qx.bom.Style.getCssName(K[i])+B;N.push(M);}
;N.unshift(D);var L=qx.bom.Stylesheet.createElement();for(var i=0;i<N.length;i++ ){try{qx.bom.Stylesheet.addRule(L,N[i]+w,o);return N[i];}
catch(e){}
;}
;return null;}
,getRequestAnimationFrame:function(){var O=[j,C,v,k,d];for(var i=0;i<O.length;i++ ){if(window[O[i]]!=undefined){return O[i];}
;}
;return null;}
},defer:function(P){qx.core.Environment.add(y,P.getSupport);qx.core.Environment.add(m,P.getRequestAnimationFrame);}
});}
)();
(function(){var a="FACTOR : ",b="x",c="y",d="qx.debug.touchpad.detection",e="qx.util.Wheel";qx.Bootstrap.define(e,{statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1,IS_TOUCHPAD:false,getDelta:function(g,f){if(f===undefined){var h=0;if(g.wheelDelta!==undefined){h=-g.wheelDelta;}
else if(g.detail!==0){h=g.detail;}
else if(g.deltaY!==undefined){h=g.deltaY;}
;return this.__iL(h);}
;if(f===b){var x=0;if(g.wheelDelta!==undefined){if(g.wheelDeltaX!==undefined){x=g.wheelDeltaX?this.__iL(-g.wheelDeltaX):0;}
;}
else {if(g.axis&&g.axis==g.HORIZONTAL_AXIS&&(g.detail!==undefined)&&(g.detail>0)){x=this.__iL(g.detail);}
else if(g.deltaX!==undefined){x=this.__iL(g.deltaX);}
;}
;return x;}
;if(f===c){var y=0;if(g.wheelDelta!==undefined){if(g.wheelDeltaY!==undefined){y=g.wheelDeltaY?this.__iL(-g.wheelDeltaY):0;}
else {y=this.__iL(-g.wheelDelta);}
;}
else {if(!(g.axis&&g.axis==g.HORIZONTAL_AXIS)&&(g.detail!==undefined)&&(g.detail>0)){y=this.__iL(g.detail);}
else if(g.deltaY!==undefined){y=this.__iL(g.deltaY);}
;}
;return y;}
;return 0;}
,__iL:function(l){if(qx.util.Wheel.IS_TOUCHPAD){qx.util.Wheel.MINSCROLL=null;qx.util.Wheel.MAXSCROLL=null;qx.util.Wheel.FACTOR=1;return l;}
;var i=Math.abs(l);if(i===0){return 0;}
;if(qx.util.Wheel.MINSCROLL==null||qx.util.Wheel.MINSCROLL>i){qx.util.Wheel.MINSCROLL=i;this.__iM();}
;if(qx.util.Wheel.MAXSCROLL==null||qx.util.Wheel.MAXSCROLL<i){qx.util.Wheel.MAXSCROLL=i;this.__iM();}
;if(qx.util.Wheel.MAXSCROLL===i&&qx.util.Wheel.MINSCROLL===i){return 2*(l/i);}
;var j=qx.util.Wheel.MAXSCROLL-qx.util.Wheel.MINSCROLL;var k=(l/j)*Math.log(j)*qx.util.Wheel.FACTOR;return k<0?Math.min(k,-1):Math.max(k,1);}
,__iM:function(){var m=qx.util.Wheel.MAXSCROLL||0;var p=qx.util.Wheel.MINSCROLL||m;if(m<=p){return;}
;var n=m-p;var o=(m/n)*Math.log(n);if(o==0){o=1;}
;qx.util.Wheel.FACTOR=6/o;if(qx.core.Environment.get(d)){qx.log.Logger.debug(this,a+qx.util.Wheel.FACTOR);}
;}
}});}
)();
(function(){var a="qx.event.Timer",b="_applyInterval",c="interval",d="func is not a function",f="Boolean",g="qx.debug",h="No timeout given",i="Integer",j="qx.event.type.Event",k="_applyEnabled";qx.Class.define(a,{extend:qx.core.Object,implement:[qx.core.IDisposable],construct:function(l){qx.core.Object.call(this);if(l!=null){this.setInterval(l);}
;var self=this;this.__fi=function(){self._oninterval.call(self);}
;}
,events:{"interval":j},statics:{once:function(m,n,o){if(qx.core.Environment.get(g)){qx.core.Assert.assertFunction(m,d);qx.core.Assert.assertNotUndefined(o,h);}
;var p=new qx.event.Timer(o);p.__fj=m;p.addListener(c,function(e){p.stop();m.call(n,e);delete p.__fj;p.dispose();n=null;}
,n);p.start();return p;}
},properties:{enabled:{init:false,check:f,apply:k},interval:{check:i,init:1000,apply:b}},members:{__fk:null,__fi:null,_applyInterval:function(r,q){if(this.getEnabled()){this.restart();}
;}
,_applyEnabled:function(t,s){if(s){window.clearInterval(this.__fk);this.__fk=null;}
else if(t){this.__fk=window.setInterval(this.__fi,this.getInterval());}
;}
,start:function(){this.setEnabled(true);}
,startWith:function(u){this.setInterval(u);this.start();}
,stop:function(){this.setEnabled(false);}
,restart:function(){this.stop();this.start();}
,restartWith:function(v){this.stop();this.startWith(v);}
,_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;}
;if(this.getEnabled()){this.fireEvent(c);}
;}
)},destruct:function(){if(this.__fk){window.clearInterval(this.__fk);}
;this.__fk=this.__fi=null;}
});}
)();
(function(){var a="dblclick",b="mshtml",c="engine.name",d="dispose",e="useraction",f="gesturemove",g="gesturecancel",h="checkAndFireGesture",i="gesturebegin",j="qx.event.handler.Gesture",k="gesturefinish",l="browser.documentmode";qx.Class.define(j,{extend:qx.event.handler.GestureCore,implement:[qx.event.IEventHandler,qx.core.IDisposable],statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{tap:1,swipe:1,longtap:1,dbltap:1,rotate:1,pinch:1,track:1,trackstart:1,trackend:1,roll:1},GESTURE_EVENTS:[i,k,f,g],TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,EVENT_CLASSES:{"tap":qx.event.type.Tap,"longtap":qx.event.type.Tap,"dbltap":qx.event.type.Tap,"swipe":qx.event.type.Swipe,"rotate":qx.event.type.Rotate,"pinch":qx.event.type.Pinch,"track":qx.event.type.Track,"trackstart":qx.event.type.Track,"trackend":qx.event.type.Track,"roll":qx.event.type.Roll}},construct:function(m){this.__dQ=m;this.__cF=m.getWindow();this.__ef=this.__cF.document;qx.event.handler.GestureCore.apply(this,[this.__ef]);}
,members:{__dQ:null,__cF:null,__ef:null,__gz:null,__iN:null,__iO:null,getWindow:function(){return this.__cF;}
,canHandleEvent:function(o,n){}
,registerEvent:function(r,q,p){}
,unregisterEvent:function(u,t,s){}
,_initObserver:function(){this.__gz=qx.lang.Function.listener(this.checkAndFireGesture,this);qx.event.handler.Gesture.GESTURE_EVENTS.forEach(function(w){qx.event.Registration.addListener(this.__ef,w,this.__gz,this);}
.bind(this));if(qx.core.Environment.get(c)==b&&qx.core.Environment.get(l)<9){this.__iN=qx.lang.Function.listener(this._onDblClick,this);qx.bom.Event.addNativeListener(this.__ef,a,this.__iN);}
;var v=qx.bom.client.Event.getMouseWheel(this.__cF);this.__iO=qx.lang.Function.listener(this._fireRoll,this);qx.bom.Event.addNativeListener(v.target,v.type,this.__iO,true,false);}
,checkAndFireGesture:function(y,x,z){this.__ik(h,[y.getNativeEvent(),y.getType(),y.getTarget()]);}
,_stopObserver:function(){qx.event.handler.Gesture.GESTURE_EVENTS.forEach(function(B){qx.event.Registration.removeListener(this.__ef,B,this.__gz);}
.bind(this));if(qx.core.Environment.get(c)==b&&qx.core.Environment.get(l)<9){qx.bom.Event.removeNativeListener(this.__ef,a,this.__iN);}
;var A=qx.bom.client.Event.getMouseWheel(this.__cF);qx.bom.Event.removeNativeListener(A.target,A.type,this.__iO);}
,_hasIntermediaryHandler:function(C){return false;}
,_fireEvent:function(E,D,F){if(!F){F=qx.bom.Event.getTarget(E);}
;if(!D){D=E.type;}
;var G=qx.event.handler.Gesture.EVENT_CLASSES[D]||qx.event.type.Pointer;if(F&&F.nodeType){qx.event.Registration.fireEvent(F,D,G,[E,F,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cF,e,qx.event.type.Data,[D]);}
,dispose:function(){this._stopObserver();this.__ik(d);this.__dQ=this.__cF=this.__ef=this.__iN=null;}
,__ik:function(I,H){qx.event.handler.GestureCore.prototype[I].apply(this,H||[]);}
},defer:function(J){qx.event.Registration.addHandler(J);qx.event.Registration.getManager(document).getHandler(J);}
});}
)();
(function(){var a="-",b="qx.event.handler.Element",c="load",d="iframe";qx.Class.define(b,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(e){qx.core.Object.call(this);this._manager=e;this._registeredEvents={};}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,load:true,scroll:true,select:true,reset:true,submit:true},CANCELABLE:{selectstart:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(g,f){if(f===c){return g.tagName.toLowerCase()!==d;}
else {return true;}
;}
,registerEvent:function(j,l,i){var m=qx.core.ObjectRegistry.toHashCode(j);var h=m+a+l;var k=qx.lang.Function.listener(this._onNative,this,h);qx.bom.Event.addNativeListener(j,l,k);this._registeredEvents[h]={element:j,type:l,listener:k};}
,unregisterEvent:function(p,r,o){var s=this._registeredEvents;if(!s){return;}
;var t=qx.core.ObjectRegistry.toHashCode(p);var n=t+a+r;var q=this._registeredEvents[n];if(q){qx.bom.Event.removeNativeListener(p,r,q.listener);}
;delete this._registeredEvents[n];}
,_onNative:qx.event.GlobalError.observeMethod(function(v,u){var w=this._registeredEvents;if(!w){return;}
;var y=w[u];var x=this.constructor.CANCELABLE[y.type];qx.event.Registration.fireNonBubblingEvent(y.element,y.type,qx.event.type.Native,[v,undefined,undefined,undefined,x]);}
)},destruct:function(){var z;var A=this._registeredEvents;for(var B in A){z=A[B];qx.bom.Event.removeNativeListener(z.element,z.type,z.listener);}
;this._manager=this._registeredEvents=null;}
,defer:function(C){qx.event.Registration.addHandler(C);}
});}
)();
(function(){var a="qx.event.handler.UserAction";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);this.__dQ=b;this.__cF=b.getWindow();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dQ:null,__cF:null,canHandleEvent:function(d,c){}
,registerEvent:function(g,f,e){}
,unregisterEvent:function(j,i,h){}
},destruct:function(){this.__dQ=this.__cF=null;}
,defer:function(k){qx.event.Registration.addHandler(k);}
});}
)();
(function(){var a="dblclick",b="os.name",c="mouseup",d="mousedown",e="useraction",f="webkit",g="contextmenu",h="mousewheel",i="auxclick",j="mouseover",k="mouseout",l="gecko",m="ios",n="click",o="mousemove",p="qx.event.handler.Mouse",q="on",r="engine.name";qx.Class.define(p,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(s){qx.core.Object.call(this);this.__dQ=s;this.__cF=s.getWindow();this.__ef=this.__cF.document;this._initButtonObserver();this._initMoveObserver();this._initWheelObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,auxclick:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__iP:null,__iQ:null,__iR:null,__iS:null,__iT:null,__dQ:null,__cF:null,__ef:null,__iU:null,canHandleEvent:function(u,t){}
,registerEvent:qx.core.Environment.get(b)===m?function(x,w,v){x[q+w]=(function(){return null;}
);}
:(function(){return null;}
),unregisterEvent:qx.core.Environment.get(b)===m?function(A,z,y){A[q+z]=undefined;}
:(function(){return null;}
),__da:function(B,C,D){if(!D){D=qx.bom.Event.getTarget(B);}
;if(D&&D.nodeType){qx.event.Registration.fireEvent(D,C||B.type,C==h?qx.event.type.MouseWheel:qx.event.type.Mouse,[B,D,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cF,e,qx.event.type.Data,[C||B.type]);}
,preventNextClick:function(){this.__iU=true;}
,_initButtonObserver:function(){this.__iP=qx.lang.Function.listener(this._onButtonEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__ef,d,this.__iP);Event.addNativeListener(this.__ef,c,this.__iP);Event.addNativeListener(this.__ef,n,this.__iP);Event.addNativeListener(this.__ef,i,this.__iP);Event.addNativeListener(this.__ef,a,this.__iP);Event.addNativeListener(this.__ef,g,this.__iP);}
,_initMoveObserver:function(){this.__iQ=qx.lang.Function.listener(this._onMoveEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__ef,o,this.__iQ);Event.addNativeListener(this.__ef,j,this.__iQ);Event.addNativeListener(this.__ef,k,this.__iQ);}
,_initWheelObserver:function(){this.__iR=qx.lang.Function.listener(this._onWheelEvent,this);var E=qx.bom.client.Event.getMouseWheel(this.__cF);qx.bom.Event.addNativeListener(E.target,E.type,this.__iR);}
,_stopButtonObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__ef,d,this.__iP);Event.removeNativeListener(this.__ef,c,this.__iP);Event.removeNativeListener(this.__ef,n,this.__iP);Event.removeNativeListener(this.__ef,a,this.__iP);Event.removeNativeListener(this.__ef,g,this.__iP);}
,_stopMoveObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__ef,o,this.__iQ);Event.removeNativeListener(this.__ef,j,this.__iQ);Event.removeNativeListener(this.__ef,k,this.__iQ);}
,_stopWheelObserver:function(){var F=qx.bom.client.Event.getMouseWheel(this.__cF);qx.bom.Event.removeNativeListener(F.target,F.type,this.__iR);}
,_onMoveEvent:qx.event.GlobalError.observeMethod(function(G){this.__da(G);}
),_onButtonEvent:qx.event.GlobalError.observeMethod(function(J){var I=J.type;var K=qx.bom.Event.getTarget(J);if(I==n&&this.__iU){delete this.__iU;return;}
;if(qx.core.Environment.get(r)==l||qx.core.Environment.get(r)==f){if(K&&K.nodeType==3){K=K.parentNode;}
;}
;var H=qx.event.handler.DragDrop&&this.__dQ.getHandler(qx.event.handler.DragDrop).isSessionActive();if(H&&I==n){return;}
;if(this.__iW){this.__iW(J,I,K);}
;this.__da(J,I,K);if(I==i&&J.button==1){this.__da(J,n,K);}
;if(this.__iV){this.__iV(J,I,K);}
;if(this.__iX&&!H){this.__iX(J,I,K);}
;this.__iS=I;}
),_onWheelEvent:qx.event.GlobalError.observeMethod(function(L){this.__da(L,h);}
),__iV:qx.core.Environment.select(r,{"opera":function(M,N,O){if(N==c&&M.button==2){this.__da(M,g,O);}
;}
,"default":null}),__iW:qx.core.Environment.select(r,{"mshtml":function(P,Q,R){if(P.target!==undefined){return;}
;if(Q==c&&this.__iS==n){this.__da(P,d,R);}
else if(Q==a){this.__da(P,n,R);}
;}
,"default":null}),__iX:qx.core.Environment.select(r,{"mshtml":null,"default":function(T,S,U){switch(S){case d:this.__iT=U;break;case c:if(U!==this.__iT){var V=qx.dom.Hierarchy.getCommonParent(U,this.__iT);if(V){this.__da(T,n,V);}
;}
;};}
})},destruct:function(){this._stopButtonObserver();this._stopMoveObserver();this._stopWheelObserver();this.__dQ=this.__cF=this.__ef=this.__iT=null;}
,defer:function(W){qx.event.Registration.addHandler(W);}
});}
)();
(function(){var a="qx.event.type.MouseWheel";qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();this.preventDefault();}
,getWheelDelta:function(b){return qx.util.Wheel.getDelta(this._native,b);}
}});}
)();
(function(){var a="qx.dom.Hierarchy",b="previousSibling",c="html.element.contains",d="html.element.compareDocumentPosition",e="nextSibling",f="parentNode",g="*";qx.Bootstrap.define(a,{statics:{getNodeIndex:function(h){var i=0;while(h&&(h=h.previousSibling)){i++ ;}
;return i;}
,getElementIndex:function(l){var j=0;var k=qx.dom.Node.ELEMENT;while(l&&(l=l.previousSibling)){if(l.nodeType==k){j++ ;}
;}
;return j;}
,getNextElementSibling:function(m){while(m&&(m=m.nextSibling)&&!qx.dom.Node.isElement(m)){continue;}
;return m||null;}
,getPreviousElementSibling:function(n){while(n&&(n=n.previousSibling)&&!qx.dom.Node.isElement(n)){continue;}
;return n||null;}
,contains:function(q,p){if(qx.core.Environment.get(c)){if(qx.dom.Node.isDocument(q)){var o=qx.dom.Node.getDocument(p);return q&&o==q;}
else if(qx.dom.Node.isDocument(p)){return false;}
else {return q.contains(p);}
;}
else if(qx.core.Environment.get(d)){return !!(q.compareDocumentPosition(p)&16);}
else {while(p){if(q==p){return true;}
;p=p.parentNode;}
;return false;}
;}
,isRendered:function(s){var r=s.ownerDocument||s.document;if(qx.core.Environment.get(c)){if(!s.parentNode){return false;}
;return r.body.contains(s);}
else if(qx.core.Environment.get(d)){return !!(r.compareDocumentPosition(s)&16);}
else {while(s){if(s==r.body){return true;}
;s=s.parentNode;}
;return false;}
;}
,isDescendantOf:function(u,t){return this.contains(t,u);}
,getCommonParent:function(w,x){if(w===x){return w;}
;if(qx.core.Environment.get(c)){while(w&&qx.dom.Node.isElement(w)){if(w.contains(x)){return w;}
;w=w.parentNode;}
;return null;}
else {var v=[];while(w||x){if(w){if(v.includes(w)){return w;}
;v.push(w);w=w.parentNode;}
;if(x){if(v.includes(x)){return x;}
;v.push(x);x=x.parentNode;}
;}
;return null;}
;}
,getAncestors:function(y){return this._recursivelyCollect(y,f);}
,getChildElements:function(A){A=A.firstChild;if(!A){return [];}
;var z=this.getNextSiblings(A);if(A.nodeType===1){z.unshift(A);}
;return z;}
,getDescendants:function(B){return qx.lang.Array.fromCollection(B.getElementsByTagName(g));}
,getFirstDescendant:function(C){C=C.firstChild;while(C&&C.nodeType!=1){C=C.nextSibling;}
;return C;}
,getLastDescendant:function(D){D=D.lastChild;while(D&&D.nodeType!=1){D=D.previousSibling;}
;return D;}
,getPreviousSiblings:function(E){return this._recursivelyCollect(E,b);}
,getNextSiblings:function(F){return this._recursivelyCollect(F,e);}
,_recursivelyCollect:function(I,G){var H=[];while(I=I[G]){if(I.nodeType==1){H.push(I);}
;}
;return H;}
,getSiblings:function(J){return this.getPreviousSiblings(J).reverse().concat(this.getNextSiblings(J));}
,isEmpty:function(K){K=K.firstChild;while(K){if(K.nodeType===qx.dom.Node.ELEMENT||K.nodeType===qx.dom.Node.TEXT){return false;}
;K=K.nextSibling;}
;return true;}
,cleanWhitespace:function(N){var L=N.firstChild;while(L){var M=L.nextSibling;if(L.nodeType==3&&!/\S/.test(L.nodeValue)){N.removeChild(L);}
;L=M;}
;}
}});}
)();
(function(){var a="opera",b="mshtml",c="engine.name",d="keypress",e="useraction",f="text",g="keyinput",h="webkit",i="input",j="gecko",k="browser.version",l="off",m="keydown",n="engine.version",o="autoComplete",p="keyup",q="qx.event.handler.Keyboard";qx.Class.define(q,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(r){qx.core.Object.call(this);this.__dQ=r;this.__cF=r.getWindow();if((qx.core.Environment.get(c)==j)){this.__ef=this.__cF;}
else {this.__ef=this.__cF.document.documentElement;}
;this.__iY={};this._initKeyObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__ja:null,__dQ:null,__cF:null,__ef:null,__iY:null,__jb:null,__jc:null,__jd:null,canHandleEvent:function(t,s){}
,registerEvent:function(w,v,u){}
,unregisterEvent:function(z,y,x){}
,_fireInputEvent:function(A,D){var B=this.__je();var C={};var self=this;if(B&&B.offsetWidth!=0){var event=qx.event.Registration.createEvent(g,qx.event.type.KeyInput,[A,B,D]);qx.event.Utils.then(C,function(){self.__dQ.dispatchEvent(B,event);}
);}
;if(this.__cF){var self=this;qx.event.Utils.then(C,function(){return qx.event.Registration.fireEvent(self.__cF,e,qx.event.type.Data,[g]);}
);}
;return C.promise;}
,_fireSequenceEvent:function(F,J,E){var G=this.__je();var H=F.keyCode;var I={};var self=this;var event=qx.event.Registration.createEvent(J,qx.event.type.KeySequence,[F,G,E]);qx.event.Utils.then(I,function(){return self.__dQ.dispatchEvent(G,event);}
);if(event.getDefaultPrevented()&&J==m){if(qx.core.Environment.get(c)==b||qx.core.Environment.get(c)==h||(qx.core.Environment.get(c)==j&&qx.core.Environment.get(k)>=29)){if(!qx.event.util.Keyboard.isNonPrintableKeyCode(H)&&!this._emulateKeyPress[H]){qx.event.Utils.then(I,function(){return self._fireSequenceEvent(F,d,E);}
);}
;}
;}
;if(this.__cF){qx.event.Utils.then(I,function(){return qx.event.Registration.fireEvent(self.__cF,e,qx.event.type.Data,[J]);}
);}
;return I.promise;}
,__je:function(){var K=this.__dQ.getHandler(qx.event.handler.Focus);var L=K.getActive();if(!L||L.offsetWidth==0){L=K.getFocus();}
;if(!L||L.offsetWidth==0){L=this.__dQ.getWindow().document.body;}
;return L;}
,_initKeyObserver:function(){this.__ja=qx.lang.Function.listener(this.__jf,this);this.__jd=qx.lang.Function.listener(this.__jh,this);var Event=qx.bom.Event;Event.addNativeListener(this.__ef,p,this.__ja);Event.addNativeListener(this.__ef,m,this.__ja);Event.addNativeListener(this.__ef,d,this.__jd);}
,_stopKeyObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__ef,p,this.__ja);Event.removeNativeListener(this.__ef,m,this.__ja);Event.removeNativeListener(this.__ef,d,this.__jd);for(var N in (this.__jc||{})){var M=this.__jc[N];Event.removeNativeListener(M.target,d,M.callback);}
;delete (this.__jc);}
,__jf:qx.event.GlobalError.observeMethod(qx.core.Environment.select(c,{"gecko|webkit|mshtml":function(O){var T=0;var R=0;var S=O.type;T=O.keyCode;var P={};var self=this;qx.event.Utils.track(P,this._idealKeyHandler(T,R,S,O));if(S==m){var Q=O.ctrlKey||O.altKey||O.metaKey;if(qx.event.util.Keyboard.isNonPrintableKeyCode(T)||this._emulateKeyPress[T]||Q){qx.event.Utils.then(P,function(){return self._idealKeyHandler(T,R,d,O);}
);}
;}
;this.__iY[T]=S;return P.promise;}
,"opera":function(U){this.__jb=U.keyCode;return this._idealKeyHandler(U.keyCode,0,U.type,U);}
})),__jg:qx.core.Environment.select(c,{"gecko":function(W,Y,ba){if(Y===m&&(ba==33||ba==34||ba==38||ba==40)&&W.type==f&&W.tagName.toLowerCase()===i&&W.getAttribute(o)!==l){if(!this.__jc){this.__jc={};}
;var V=qx.core.ObjectRegistry.toHashCode(W);if(this.__jc[V]){return;}
;var self=this;this.__jc[V]={target:W,callback:function(bb){qx.bom.Event.stopPropagation(bb);self.__jh(bb);}
};var X=qx.event.GlobalError.observeMethod(this.__jc[V].callback);qx.bom.Event.addNativeListener(W,d,X);}
;}
,"default":null}),__jh:qx.event.GlobalError.observeMethod(qx.core.Environment.select(c,{"mshtml":function(bc){bc=window.event||bc;if(this._charCode2KeyCode[bc.keyCode]){return this._idealKeyHandler(this._charCode2KeyCode[bc.keyCode],0,bc.type,bc);}
else {return this._idealKeyHandler(0,bc.keyCode,bc.type,bc);}
;}
,"gecko":function(bf){if(qx.core.Environment.get(n)<66){var be=bf.charCode;var bd=bf.type;return this._idealKeyHandler(bf.keyCode,be,bd,bf);}
else {if(this._charCode2KeyCode[bf.keyCode]){return this._idealKeyHandler(this._charCode2KeyCode[bf.keyCode],0,bf.type,bf);}
else {return this._idealKeyHandler(0,bf.keyCode,bf.type,bf);}
;}
;}
,"webkit":function(bg){if(this._charCode2KeyCode[bg.keyCode]){return this._idealKeyHandler(this._charCode2KeyCode[bg.keyCode],0,bg.type,bg);}
else {return this._idealKeyHandler(0,bg.keyCode,bg.type,bg);}
;}
,"opera":function(bh){var bj=bh.keyCode;var bi=bh.type;if(bj!=this.__jb){return this._idealKeyHandler(0,this.__jb,bi,bh);}
else {if(qx.event.util.Keyboard.keyCodeToIdentifierMap[bh.keyCode]){return this._idealKeyHandler(bh.keyCode,0,bh.type,bh);}
else {return this._idealKeyHandler(0,bh.keyCode,bh.type,bh);}
;}
;}
})),_idealKeyHandler:function(bp,bo,bm,bl){var bk;if(bp||(!bp&&!bo)){bk=qx.event.util.Keyboard.keyCodeToIdentifier(bp);return this._fireSequenceEvent(bl,bm,bk);}
else {bk=qx.event.util.Keyboard.charCodeToIdentifier(bo);var bn={};var self=this;qx.event.Utils.track(bn,this._fireSequenceEvent(bl,d,bk));return qx.event.Utils.then(bn,function(){return self._fireInputEvent(bl,bo);}
);}
;}
,_emulateKeyPress:qx.core.Environment.select(c,{"mshtml":{'8':true,'9':true},"webkit":{'8':true,'9':true,'27':true},"gecko":(qx.core.Environment.get(k)>=65)?{'8':true,'9':true,'27':true}:{},"default":{}}),_identifierToKeyCode:function(bq){return qx.event.util.Keyboard.identifierToKeyCodeMap[bq]||bq.charCodeAt(0);}
},destruct:function(){this._stopKeyObserver();this.__jb=this.__dQ=this.__cF=this.__ef=this.__iY=null;}
,defer:function(br,bs){qx.event.Registration.addHandler(br);if((qx.core.Environment.get(c)!==a)){bs._charCode2KeyCode={'13':13,'27':27};}
;}
});}
)();
(function(){var a="qx.event.type.KeyInput";qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(c,d,b){qx.event.type.Dom.prototype.init.call(this,c,d,null,true,true);this._charCode=b;return this;}
,clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);f._charCode=this._charCode;return f;}
,getCharCode:function(){return this._charCode;}
,getChar:function(){return String.fromCharCode(this._charCode);}
}});}
)();
(function(){var a="qx.event.type.KeySequence";qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(c,d,b){qx.event.type.Dom.prototype.init.call(this,c,d,null,true,true);this._keyCode=c.keyCode;this._identifier=b;return this;}
,clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);f._keyCode=this._keyCode;f._identifier=this._identifier;return f;}
,getKeyIdentifier:function(){return this._identifier;}
,getKeyCode:function(){return this._keyCode;}
,isPrintable:function(){return qx.event.util.Keyboard.isPrintableKeyIdentifier(this._identifier);}
}});}
)();
(function(){var a="-",b="PageUp",c="Escape",d="Enter",e="+",f="PrintScreen",g="os.name",h="7",i="A",j="Space",k="Left",l="5",m="F5",n="Down",o="Up",p="3",q="Meta",r="F11",s="0",t="F6",u="PageDown",v="osx",w="CapsLock",x="Insert",y="F8",z="Scroll",A="Control",B="Tab",C="Shift",D="End",E="Pause",F="Unidentified",G="/",H="8",I="Z",J="*",K="cmd",L="F1",M="F4",N="Home",O="qx.event.util.Keyboard",P="F2",Q="6",R="F7",S="Apps",T="4",U="F12",V="Alt",W="2",X="NumLock",Y="Delete",bn="1",bo="Win",bp="Backspace",bj="F9",bk="F10",bl="Right",bm="F3",bq="9",br=",";qx.Bootstrap.define(O,{statics:{specialCharCodeMap:{'8':bp,'9':B,'13':d,'27':c,'32':j},numpadToCharCode:{'96':s.charCodeAt(0),'97':bn.charCodeAt(0),'98':W.charCodeAt(0),'99':p.charCodeAt(0),'100':T.charCodeAt(0),'101':l.charCodeAt(0),'102':Q.charCodeAt(0),'103':h.charCodeAt(0),'104':H.charCodeAt(0),'105':bq.charCodeAt(0),'106':J.charCodeAt(0),'107':e.charCodeAt(0),'109':a.charCodeAt(0),'110':br.charCodeAt(0),'111':G.charCodeAt(0)},keyCodeToIdentifierMap:{'16':C,'17':A,'18':V,'20':w,'224':q,'37':k,'38':o,'39':bl,'40':n,'33':b,'34':u,'35':D,'36':N,'45':x,'46':Y,'112':L,'113':P,'114':bm,'115':M,'116':m,'117':t,'118':R,'119':y,'120':bj,'121':bk,'122':r,'123':U,'144':X,'44':f,'145':z,'19':E,'91':qx.core.Environment.get(g)==v?K:bo,'92':bo,'93':qx.core.Environment.get(g)==v?K:S},charCodeA:i.charCodeAt(0),charCodeZ:I.charCodeAt(0),charCode0:s.charCodeAt(0),charCode9:bq.charCodeAt(0),keyCodeToIdentifier:function(bs){if(this.isIdentifiableKeyCode(bs)){var bt=this.numpadToCharCode[bs];if(bt){return String.fromCharCode(bt);}
;return (this.keyCodeToIdentifierMap[bs]||this.specialCharCodeMap[bs]||String.fromCharCode(bs));}
else {return F;}
;}
,charCodeToIdentifier:function(bu){return this.specialCharCodeMap[bu]||String.fromCharCode(bu).toUpperCase();}
,isIdentifiableKeyCode:function(bv){if(bv>=this.charCodeA&&bv<=this.charCodeZ){return true;}
;if(bv>=this.charCode0&&bv<=this.charCode9){return true;}
;if(this.specialCharCodeMap[bv]){return true;}
;if(this.numpadToCharCode[bv]){return true;}
;if(this.isNonPrintableKeyCode(bv)){return true;}
;return false;}
,isNonPrintableKeyCode:function(bw){return this.keyCodeToIdentifierMap[bw]?true:false;}
,isValidKeyIdentifier:function(bx){if(this.identifierToKeyCodeMap[bx]){return true;}
;if(bx.length!=1){return false;}
;if(bx>=s&&bx<=bq){return true;}
;if(bx>=i&&bx<=I){return true;}
;switch(bx){case e:case a:case J:case G:case br:return true;default:return false;};}
,isPrintableKeyIdentifier:function(by){if(by===j){return true;}
else {return this.identifierToKeyCodeMap[by]?false:true;}
;}
},defer:function(bz){if(!bz.identifierToKeyCodeMap){bz.identifierToKeyCodeMap={};for(var bA in bz.keyCodeToIdentifierMap){bz.identifierToKeyCodeMap[bz.keyCodeToIdentifierMap[bA]]=parseInt(bA,10);}
;for(var bA in bz.specialCharCodeMap){bz.identifierToKeyCodeMap[bz.specialCharCodeMap[bA]]=parseInt(bA,10);}
;}
;}
});}
)();
(function(){var a="selectstart",b="os.name",c="blur",d="mousedown",e="function",f="focus",g="os.version",h="qx.event.handler.Focus",i="_applyFocus",j="DOMFocusIn",k="deactivate",l="browser.name",m="textarea",n="_applyActive",o='character',p="input",q="ios",r="",s="textfield",t="qxSelectable",u="tabIndex",v="off",w="on",x="activate",y="focusin",z="mshtml",A="engine.name",B="mouseup",C="DOMFocusOut",D="focusout",E="qxKeepFocus",F="draggesture",G="qxKeepActive";qx.Class.define(h,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(H){qx.core.Object.call(this);this._manager=H;this._window=H.getWindow();this._document=this._window.document;this._root=this._document.documentElement;this._body=this._document.body;if((qx.core.Environment.get(b)==q&&parseFloat(qx.core.Environment.get(g))>6)&&(!qx.application.Inline||!qx.core.Init.getApplication() instanceof qx.application.Inline)){this.__ji=true;}
;this._initObserver();}
,properties:{active:{apply:n,nullable:true},focus:{apply:i,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select(A,{"mshtml":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera":{button:1,input:1,select:1,textarea:1},"webkit":{button:1,input:1,select:1,textarea:1}})},members:{__jj:null,__jk:null,__jl:null,__jm:null,__jn:null,__jo:null,__jp:null,__jq:null,__jr:null,__js:null,__jt:r,__ju:r,__ji:false,__jv:null,canHandleEvent:function(J,I){}
,registerEvent:function(M,L,K){}
,unregisterEvent:function(P,O,N){}
,focus:function(Q){if((qx.core.Environment.get(A)==z)){window.setTimeout(function(){try{Q.focus();var R=qx.bom.Selection.get(Q);if(R.length==0&&typeof Q.createTextRange==e){var S=Q.createTextRange();S.moveStart(o,Q.value.length);S.collapse();S.select();}
;}
catch(T){}
;}
,0);}
else {window.setTimeout(function(){try{Q.focus();}
catch(U){}
;}
,0);}
;this.setFocus(Q);this.setActive(Q);}
,activate:function(V){this.setActive(V);}
,blur:function(W){try{W.blur();}
catch(X){}
;if(this.getActive()===W){this.resetActive();}
;if(this.getFocus()===W){this.resetFocus();}
;}
,deactivate:function(Y){if(this.getActive()===Y){this.resetActive();}
;}
,tryActivate:function(bb){var ba=this.__jK(bb);if(ba){this.setActive(ba);}
;}
,__da:function(bc,be,bh,bg){var bf=qx.event.Registration;var bd=bf.createEvent(bh,qx.event.type.Focus,[bc,be,bg]);return bf.dispatchEvent(bc,bd);}
,_windowFocused:true,__jw:function(){if(this._windowFocused){this._windowFocused=false;this.__da(this._window,null,c,false);}
;}
,__jx:function(){if(!this._windowFocused){this._windowFocused=true;this.__da(this._window,null,f,false);}
;}
,_initObserver:qx.core.Environment.select(A,{"gecko":function(){this.__jj=qx.lang.Function.listener(this.__jD,this);this.__jk=qx.lang.Function.listener(this.__jE,this);this.__jl=qx.lang.Function.listener(this.__jC,this);this.__jm=qx.lang.Function.listener(this.__jB,this);this.__jn=qx.lang.Function.listener(this.__jy,this);qx.bom.Event.addNativeListener(this._document,d,this.__jj,true);qx.bom.Event.addNativeListener(this._document,B,this.__jk,true);qx.bom.Event.addNativeListener(this._window,f,this.__jl,true);qx.bom.Event.addNativeListener(this._window,c,this.__jm,true);qx.bom.Event.addNativeListener(this._window,F,this.__jn,true);}
,"mshtml":function(){this.__jj=qx.lang.Function.listener(this.__jD,this);this.__jk=qx.lang.Function.listener(this.__jE,this);this.__jp=qx.lang.Function.listener(this.__jz,this);this.__jq=qx.lang.Function.listener(this.__jA,this);this.__jo=qx.lang.Function.listener(this.__jH,this);qx.bom.Event.addNativeListener(this._document,d,this.__jj);qx.bom.Event.addNativeListener(this._document,B,this.__jk);qx.bom.Event.addNativeListener(this._document,y,this.__jp);qx.bom.Event.addNativeListener(this._document,D,this.__jq);qx.bom.Event.addNativeListener(this._document,a,this.__jo);}
,"webkit":qx.core.Environment.select(l,{"edge":function(bi){this.__jj=qx.lang.Function.listener(this.__jD,this);this.__jk=qx.lang.Function.listener(this.__jE,this);this.__jq=qx.lang.Function.listener(this.__jA,this);this.__jp=qx.lang.Function.listener(this.__jz,this);this.__jo=qx.lang.Function.listener(this.__jH,this);qx.bom.Event.addNativeListener(this._document,d,this.__jj,true);qx.bom.Event.addNativeListener(this._document,B,this.__jk,true);qx.bom.Event.addNativeListener(this._document,a,this.__jo,false);qx.bom.Event.addNativeListener(this._document,y,this.__jp);qx.bom.Event.addNativeListener(this._document,D,this.__jq);}
,"default":function(bj){this.__jj=qx.lang.Function.listener(this.__jD,this);this.__jk=qx.lang.Function.listener(this.__jE,this);this.__jq=qx.lang.Function.listener(this.__jA,this);this.__jl=qx.lang.Function.listener(this.__jC,this);this.__jm=qx.lang.Function.listener(this.__jB,this);this.__jo=qx.lang.Function.listener(this.__jH,this);qx.bom.Event.addNativeListener(this._document,d,this.__jj,true);qx.bom.Event.addNativeListener(this._document,B,this.__jk,true);qx.bom.Event.addNativeListener(this._document,a,this.__jo,false);qx.bom.Event.addNativeListener(this._window,C,this.__jq,true);qx.bom.Event.addNativeListener(this._window,f,this.__jl,true);qx.bom.Event.addNativeListener(this._window,c,this.__jm,true);}
}),"opera":function(){this.__jj=qx.lang.Function.listener(this.__jD,this);this.__jk=qx.lang.Function.listener(this.__jE,this);this.__jp=qx.lang.Function.listener(this.__jz,this);this.__jq=qx.lang.Function.listener(this.__jA,this);qx.bom.Event.addNativeListener(this._document,d,this.__jj,true);qx.bom.Event.addNativeListener(this._document,B,this.__jk,true);qx.bom.Event.addNativeListener(this._window,j,this.__jp,true);qx.bom.Event.addNativeListener(this._window,C,this.__jq,true);}
}),_stopObserver:qx.core.Environment.select(A,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__jj,true);qx.bom.Event.removeNativeListener(this._document,B,this.__jk,true);qx.bom.Event.removeNativeListener(this._window,f,this.__jl,true);qx.bom.Event.removeNativeListener(this._window,c,this.__jm,true);qx.bom.Event.removeNativeListener(this._window,F,this.__jn,true);}
,"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__jj);qx.bom.Event.removeNativeListener(this._document,B,this.__jk);qx.bom.Event.removeNativeListener(this._document,y,this.__jp);qx.bom.Event.removeNativeListener(this._document,D,this.__jq);qx.bom.Event.removeNativeListener(this._document,a,this.__jo);}
,"webkit":qx.core.Environment.select(l,{"edge":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__jj);qx.bom.Event.removeNativeListener(this._document,B,this.__jk);qx.bom.Event.removeNativeListener(this._document,y,this.__jp);qx.bom.Event.removeNativeListener(this._document,D,this.__jq);qx.bom.Event.removeNativeListener(this._document,a,this.__jo);}
,"default":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__jj,true);qx.bom.Event.removeNativeListener(this._document,B,this.__jk,true);qx.bom.Event.removeNativeListener(this._document,a,this.__jo,false);qx.bom.Event.removeNativeListener(this._window,C,this.__jq,true);qx.bom.Event.removeNativeListener(this._window,f,this.__jl,true);qx.bom.Event.removeNativeListener(this._window,c,this.__jm,true);}
}),"opera":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__jj,true);qx.bom.Event.removeNativeListener(this._document,B,this.__jk,true);qx.bom.Event.removeNativeListener(this._window,j,this.__jp,true);qx.bom.Event.removeNativeListener(this._window,C,this.__jq,true);}
}),__jy:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"gecko":function(bk){var bl=qx.bom.Event.getTarget(bk);if(!this.__jL(bl)){qx.bom.Event.preventDefault(bk);}
;}
,"default":null})),__jz:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"mshtml":function(bn){this.__jx();var bo=qx.bom.Event.getTarget(bn);var bm=this.__jJ(bo);if(bm){this.setFocus(bm);}
;this.tryActivate(bo);}
,"webkit":qx.core.Environment.select(l,{"edge":function(bq){this.__jx();var br=qx.bom.Event.getTarget(bq);var bp=this.__jJ(br);if(bp){this.setFocus(bp);}
;this.tryActivate(br);}
,"default":null}),"opera":function(bs){var bt=qx.bom.Event.getTarget(bs);if(bt==this._document||bt==this._window){this.__jx();if(this.__jr){this.setFocus(this.__jr);delete this.__jr;}
;if(this.__js){this.setActive(this.__js);delete this.__js;}
;}
else {this.setFocus(bt);this.tryActivate(bt);if(!this.__jL(bt)){bt.selectionStart=0;bt.selectionEnd=0;}
;}
;}
,"default":null})),__jA:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"mshtml":function(bu){var bv=qx.bom.Event.getRelatedTarget(bu);if(bv==null){this.__jw();this.resetFocus();this.resetActive();}
;}
,"webkit":qx.core.Environment.select(l,{"edge":function(bw){var bx=qx.bom.Event.getRelatedTarget(bw);if(bx==null){this.__jw();this.resetFocus();this.resetActive();}
;}
,"default":function(by){var bz=qx.bom.Event.getTarget(by);if(bz===this.getFocus()){this.resetFocus();}
;if(bz===this.getActive()){this.resetActive();}
;}
}),"opera":function(bA){var bB=qx.bom.Event.getTarget(bA);if(bB==this._document){this.__jw();this.__jr=this.getFocus();this.__js=this.getActive();this.resetFocus();this.resetActive();}
else {if(bB===this.getFocus()){this.resetFocus();}
;if(bB===this.getActive()){this.resetActive();}
;}
;}
,"default":null})),__jB:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"gecko":function(bC){var bD=qx.bom.Event.getTarget(bC);if(bD===this._window||bD===this._document){this.__jw();this.resetActive();this.resetFocus();}
;}
,"webkit":function(bE){var bF=qx.bom.Event.getTarget(bE);if(bF===this._window||bF===this._document){this.__jw();this.__jr=this.getFocus();this.__js=this.getActive();this.resetActive();this.resetFocus();}
;}
,"default":null})),__jC:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"gecko":function(bG){var bH=qx.bom.Event.getTarget(bG);if(bH===this._window||bH===this._document){this.__jx();bH=this._body;}
;this.setFocus(bH);this.tryActivate(bH);}
,"webkit":function(bI){var bJ=qx.bom.Event.getTarget(bI);if(bJ===this._window||bJ===this._document){this.__jx();if(this.__jr){this.setFocus(this.__jr);delete this.__jr;}
;if(this.__js){this.setActive(this.__js);delete this.__js;}
;}
else {this.__jv=bI.relatedTarget;this.setFocus(bJ);this.__jv=null;this.tryActivate(bJ);}
;}
,"default":null})),__jD:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);var bK=this.__jJ(bM);if(bK){if(!this.__jL(bM)){bM.unselectable=w;try{if(document.selection){document.selection.empty();}
;}
catch(bN){}
;try{bK.focus();}
catch(bO){}
;}
;}
else {qx.bom.Event.preventDefault(bL);if(!this.__jL(bM)){bM.unselectable=w;}
;}
;}
,"webkit":function(bQ){var bR=qx.bom.Event.getTarget(bQ);var bP=this.__jJ(bR);if(bP){this.setFocus(bP);}
else {qx.bom.Event.preventDefault(bQ);}
;}
,"gecko":function(bT){var bU=qx.bom.Event.getTarget(bT);var bS=this.__jJ(bU);if(bS){this.setFocus(bS);}
else {qx.bom.Event.preventDefault(bT);}
;}
,"opera":function(bX){var bY=qx.bom.Event.getTarget(bX);var bV=this.__jJ(bY);if(!this.__jL(bY)){qx.bom.Event.preventDefault(bX);if(bV){var bW=this.getFocus();if(bW&&bW.selectionEnd){bW.selectionStart=0;bW.selectionEnd=0;bW.blur();}
;if(bV){this.setFocus(bV);}
;}
;}
else if(bV){this.setFocus(bV);}
;}
,"default":null})),__jE:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"mshtml":function(ca){var cb=qx.bom.Event.getTarget(ca);if(cb.unselectable){cb.unselectable=v;}
;this.tryActivate(this.__jG(cb));}
,"gecko":function(cc){var cd=qx.bom.Event.getTarget(cc);while(cd&&cd.offsetWidth===undefined){cd=cd.parentNode;}
;if(cd){this.tryActivate(cd);}
;}
,"webkit":function(ce){var cf=qx.bom.Event.getTarget(ce);this.tryActivate(this.__jG(cf));}
,"opera":function(cg){var ch=qx.bom.Event.getTarget(cg);this.tryActivate(this.__jG(ch));}
,"default":null})),__jF:function(ck){var cl=this.getFocus();if(cl&&ck!=cl){if(cl.nodeName.toLowerCase()===p||cl.nodeName.toLowerCase()===m){return cl;}
;var ci=qx.ui.core.Widget.getWidgetByElement(cl),cj=ci&&ci.getChildControl&&ci.getChildControl(s,true);if(cj){return cj.getContentElement().getDomElement();}
;}
;return ck;}
,__jG:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"mshtml":function(cm){return this.__jF(cm);}
,"webkit":function(cn){return this.__jF(cn);}
,"default":function(co){return co;}
})),__jH:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"mshtml":function(cp){var cq=qx.bom.Event.getTarget(cp);if(!this.__jL(cq)){qx.bom.Event.preventDefault(cp);}
;}
,"webkit":function(cr){var cs=qx.bom.Event.getTarget(cr);if(!this.__jL(cs)){qx.bom.Event.preventDefault(cr);}
;}
,"default":null})),__jI:function(ct){var cu=qx.bom.element.Attribute.get(ct,u);if(cu>=1){return true;}
;var cv=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;if(cu>=0&&cv[ct.tagName]){return true;}
;return false;}
,__jJ:function(cw){while(cw&&cw.nodeType===1){if(cw.getAttribute(E)==w){return null;}
;if(this.__jI(cw)){return cw;}
;cw=cw.parentNode;}
;return this._body;}
,__jK:function(cx){var cy=cx;while(cx&&cx.nodeType===1){if(cx.getAttribute(G)==w){return null;}
;cx=cx.parentNode;}
;return cy;}
,__jL:function(cz){while(cz&&cz.nodeType===1){var cA=cz.getAttribute(t);if(cA!=null){return cA===w;}
;cz=cz.parentNode;}
;return true;}
,_applyActive:function(cC,cB){if(cB){this.__da(cB,cC,k,true);}
;if(cC){this.__da(cC,cB,x,true);}
;if(this.__ji){window.scrollTo(0,0);}
;}
,_applyFocus:function(cE,cD){if(cD){this.__da(cD,cE,D,true);}
;if(cE){this.__da(cE,cD,y,true);}
;if(cD){this.__da(cD,cE,c,false);}
;if(cE){this.__da(cE,cD||this.__jv,f,false);}
;}
},destruct:function(){this._stopObserver();this._manager=this._window=this._document=this._root=this._body=this.__jM=this.__jv=null;}
,defer:function(cG){qx.event.Registration.addHandler(cG);var cH=cG.FOCUSABLE_ELEMENTS;for(var cF in cH){cH[cF.toUpperCase()]=1;}
;}
});}
)();
(function(){var a="engine.name",b="qx.bom.Selection",c="character",d="button",e='character',f="#text",g="webkit",h="input",i="gecko",j="EndToEnd",k="opera",l="StartToStart",m="html.selection",n="textarea",o="body";qx.Bootstrap.define(b,{statics:{getSelectionObject:qx.core.Environment.select(m,{"selection":function(p){return p.selection;}
,"default":function(q){return qx.dom.Node.getWindow(q).getSelection();}
}),get:qx.core.Environment.select(m,{"selection":function(r){var s=qx.bom.Range.get(qx.dom.Node.getDocument(r));return s.text;}
,"default":function(t){if(this.__jN(t)){return t.value.substring(t.selectionStart,t.selectionEnd);}
else {return this.getSelectionObject(qx.dom.Node.getDocument(t)).toString();}
;}
}),getLength:qx.core.Environment.select(m,{"selection":function(u){var w=this.get(u);var v=qx.util.StringSplit.split(w,/\r\n/);return w.length-(v.length-1);}
,"default":function(x){if(qx.core.Environment.get(a)==k){var B,C,A;if(this.__jN(x)){var z=x.selectionStart;var y=x.selectionEnd;B=x.value.substring(z,y);C=y-z;}
else {B=qx.bom.Selection.get(x);C=B.length;}
;A=qx.util.StringSplit.split(B,/\r\n/);return C-(A.length-1);}
;if(this.__jN(x)){return x.selectionEnd-x.selectionStart;}
else {return this.get(x).length;}
;}
}),getStart:qx.core.Environment.select(m,{"selection":function(D){if(this.__jN(D)){var I=qx.bom.Range.get();if(!D.contains(I.parentElement())){return -1;}
;var J=qx.bom.Range.get(D);var H=D.value.length;J.moveToBookmark(I.getBookmark());J.moveEnd(e,H);return H-J.text.length;}
else {var J=qx.bom.Range.get(D);var F=J.parentElement();var K=qx.bom.Range.get();try{K.moveToElementText(F);}
catch(M){return 0;}
;var E=qx.bom.Range.get(qx.dom.Node.getBodyElement(D));E.setEndPoint(l,J);E.setEndPoint(j,K);if(K.compareEndPoints(l,E)==0){return 0;}
;var G;var L=0;while(true){G=E.moveStart(c,-1);if(K.compareEndPoints(l,E)==0){break;}
;if(G==0){break;}
else {L++ ;}
;}
;return  ++L;}
;}
,"default":function(N){if(qx.core.Environment.get(a)===i||qx.core.Environment.get(a)===g){if(this.__jN(N)){return N.selectionStart;}
else {var P=qx.dom.Node.getDocument(N);var O=this.getSelectionObject(P);if(O.anchorOffset<O.focusOffset){return O.anchorOffset;}
else {return O.focusOffset;}
;}
;}
;if(this.__jN(N)){return N.selectionStart;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;}
;}
}),getEnd:qx.core.Environment.select(m,{"selection":function(Q){if(this.__jN(Q)){var V=qx.bom.Range.get();if(!Q.contains(V.parentElement())){return -1;}
;var W=qx.bom.Range.get(Q);var U=Q.value.length;W.moveToBookmark(V.getBookmark());W.moveStart(e,-U);return W.text.length;}
else {var W=qx.bom.Range.get(Q);var S=W.parentElement();var X=qx.bom.Range.get();try{X.moveToElementText(S);}
catch(ba){return 0;}
;var U=X.text.length;var R=qx.bom.Range.get(qx.dom.Node.getBodyElement(Q));R.setEndPoint(j,W);R.setEndPoint(l,X);if(X.compareEndPoints(j,R)==0){return U-1;}
;var T;var Y=0;while(true){T=R.moveEnd(c,1);if(X.compareEndPoints(j,R)==0){break;}
;if(T==0){break;}
else {Y++ ;}
;}
;return U-( ++Y);}
;}
,"default":function(bb){if(qx.core.Environment.get(a)===i||qx.core.Environment.get(a)===g){if(this.__jN(bb)){return bb.selectionEnd;}
else {var bd=qx.dom.Node.getDocument(bb);var bc=this.getSelectionObject(bd);if(bc.focusOffset>bc.anchorOffset){return bc.focusOffset;}
else {return bc.anchorOffset;}
;}
;}
;if(this.__jN(bb)){return bb.selectionEnd;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bb)).focusOffset;}
;}
}),__jN:function(be){return qx.dom.Node.isElement(be)&&(be.nodeName.toLowerCase()==h||be.nodeName.toLowerCase()==n);}
,set:qx.core.Environment.select(m,{"selection":function(bf,bi,bh){var bg;if(qx.dom.Node.isDocument(bf)){bf=bf.body;}
;if(qx.dom.Node.isElement(bf)||qx.dom.Node.isText(bf)){switch(bf.nodeName.toLowerCase()){case h:case n:case d:if(bh===undefined){bh=bf.value.length;}
;if(bi>=0&&bi<=bf.value.length&&bh>=0&&bh<=bf.value.length){bg=qx.bom.Range.get(bf);bg.collapse(true);bg.moveStart(c,bi);bg.moveEnd(c,bh-bi);bg.select();return true;}
;break;case f:if(bh===undefined){bh=bf.nodeValue.length;}
;if(bi>=0&&bi<=bf.nodeValue.length&&bh>=0&&bh<=bf.nodeValue.length){bg=qx.bom.Range.get(qx.dom.Node.getBodyElement(bf));bg.moveToElementText(bf.parentNode);bg.collapse(true);bg.moveStart(c,bi);bg.moveEnd(c,bh-bi);bg.select();return true;}
;break;default:if(bh===undefined){bh=bf.childNodes.length-1;}
;if(bf.childNodes[bi]&&bf.childNodes[bh]){bg=qx.bom.Range.get(qx.dom.Node.getBodyElement(bf));bg.moveToElementText(bf.childNodes[bi]);bg.collapse(true);var bj=qx.bom.Range.get(qx.dom.Node.getBodyElement(bf));bj.moveToElementText(bf.childNodes[bh]);bg.setEndPoint(j,bj);bg.select();return true;}
;};}
;return false;}
,"default":function(bk,bp,bm){var bn=bk.nodeName.toLowerCase();if(qx.dom.Node.isElement(bk)&&(bn==h||bn==n)){if(bm===undefined){bm=bk.value.length;}
;if(bp>=0&&bp<=bk.value.length&&bm>=0&&bm<=bk.value.length){bk.focus();bk.select();bk.setSelectionRange(bp,bm);return true;}
;}
else {var bq=false;var bl=qx.dom.Node.getWindow(bk).getSelection();var bo=qx.bom.Range.get(bk);if(qx.dom.Node.isText(bk)){if(bm===undefined){bm=bk.length;}
;if(bp>=0&&bp<bk.length&&bm>=0&&bm<=bk.length){bq=true;}
;}
else if(qx.dom.Node.isElement(bk)){if(bm===undefined){bm=bk.childNodes.length-1;}
;if(bp>=0&&bk.childNodes[bp]&&bm>=0&&bk.childNodes[bm]){bq=true;}
;}
else if(qx.dom.Node.isDocument(bk)){bk=bk.body;if(bm===undefined){bm=bk.childNodes.length-1;}
;if(bp>=0&&bk.childNodes[bp]&&bm>=0&&bk.childNodes[bm]){bq=true;}
;}
;if(bq){if(!bl.isCollapsed){bl.collapseToStart();}
;bo.setStart(bk,bp);if(qx.dom.Node.isText(bk)){bo.setEnd(bk,bm);}
else {bo.setEndAfter(bk.childNodes[bm]);}
;if(bl.rangeCount>0){bl.removeAllRanges();}
;bl.addRange(bo);return true;}
;}
;return false;}
}),setAll:function(br){return qx.bom.Selection.set(br,0);}
,clear:qx.core.Environment.select(m,{"selection":function(bs){var bu=qx.bom.Range.get(bs);var parent=bu.parentElement();var bv=qx.bom.Range.get(qx.dom.Node.getDocument(bs));if(qx.dom.Node.isText(bs)){bs=bs.parentNode;}
;if(parent==bv.parentElement()&&parent==bs){var bt=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bs));bt.empty();}
;}
,"default":function(bw){var bB=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bw));var bx=bw.nodeName.toLowerCase();if(qx.dom.Node.isElement(bw)&&(bx==h||bx==n)){bw.setSelectionRange(0,0);if(qx.bom.Element&&qx.bom.Element.blur){qx.bom.Element.blur(bw);}
;}
else if(qx.dom.Node.isDocument(bw)||bx==o){bB.collapse(bw.body?bw.body:bw,0);}
else {var by=qx.bom.Range.get(bw);if(!by.collapsed){var bz;var bA=by.commonAncestorContainer;if(qx.dom.Node.isElement(bw)&&qx.dom.Node.isText(bA)){bz=bA.parentNode;}
else {bz=bA;}
;if(bz==bw){bB.collapse(bw,0);}
;}
;}
;}
})}});}
)();
(function(){var a="qx.bom.Range",b="text",c="password",d="file",e="submit",f="reset",g="textarea",h="input",i="hidden",j="html.selection",k="button",l="body";qx.Bootstrap.define(a,{statics:{get:qx.core.Environment.select(j,{"selection":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case h:switch(m.type){case b:case c:case i:case k:case f:case d:case e:return m.createTextRange();default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();};break;case g:case l:case k:return m.createTextRange();default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();};}
else {if(m==null){m=window;}
;return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();}
;}
,"default":function(n){var o=qx.dom.Node.getDocument(n);var p=qx.bom.Selection.getSelectionObject(o);if(p.rangeCount>0){return p.getRangeAt(0);}
else {return o.createRange();}
;}
})}});}
)();
(function(){var a="m",b="g",c="^",d="",e="qx.util.StringSplit",f="i",g="$(?!\\s)",h="[object RegExp]",j="y";qx.Bootstrap.define(e,{statics:{split:function(k,p,o){if(Object.prototype.toString.call(p)!==h){return String.prototype.split.call(k,p,o);}
;var r=[],l=0,m=(p.ignoreCase?f:d)+(p.multiline?a:d)+(p.sticky?j:d),p=RegExp(p.source,m+b),n,t,q,u,s=/()??/.exec(d)[1]===undefined;k=k+d;if(!s){n=RegExp(c+p.source+g,m);}
;if(o===undefined||+o<0){o=Infinity;}
else {o=Math.floor(+o);if(!o){return [];}
;}
;while(t=p.exec(k)){q=t.index+t[0].length;if(q>l){r.push(k.slice(l,t.index));if(!s&&t.length>1){t[0].replace(n,function(){for(var i=1;i<arguments.length-2;i++ ){if(arguments[i]===undefined){t[i]=undefined;}
;}
;}
);}
;if(t.length>1&&t.index<k.length){Array.prototype.push.apply(r,t.slice(1));}
;u=t[0].length;l=q;if(r.length>=o){break;}
;}
;if(p.lastIndex===t.index){p.lastIndex++ ;}
;}
;if(l===k.length){if(u||!p.test(d)){r.push(d);}
;}
else {r.push(k.slice(l));}
;return r.length>o?r.slice(0,o):r;}
}});}
)();
(function(){var a="qx.event.type.Focus";qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(d,b,c){qx.event.type.Event.prototype.init.call(this,c,false);this._target=d;this._relatedTarget=b;return this;}
}});}
)();
(function(){var a="To enable localization please include qx.locale.Manager into your build!",b="qx.locale.MTranslation";qx.Mixin.define(b,{members:{tr:function(c,e){var d=qx.locale.Manager;if(d){return d.tr.apply(d,arguments);}
;throw new Error(a);}
,trn:function(g,j,f,h){var i=qx.locale.Manager;if(i){return i.trn.apply(i,arguments);}
;throw new Error(a);}
,trc:function(n,m,l){var k=qx.locale.Manager;if(k){return k.trc.apply(k,arguments);}
;throw new Error(a);}
,trnc:function(p,q,r,o,s){var t=qx.locale.Manager;if(t){return t.trnc.apply(t,arguments);}
;throw new Error(a);}
,marktr:function(v){var u=qx.locale.Manager;if(u){return u.marktr.apply(u,arguments);}
;throw new Error(a);}
}});}
)();
(function(){var a="changeWidth",b="Wrong 'width' argument. ",c="Boolean",d="allowShrinkY",e="_applyAlign",f="_applyStretching",g="Something went wrong with the layout of ",h="bottom",i="Wrong 'left' argument. ",j="Integer",k="changeTheme",l="_applyDimension",m="baseline",n="qx.debug",o="marginBottom",p="qx.ui.core.LayoutItem",q="center",r="marginTop",s="!",t="allowGrowX",u="shorthand",v="middle",w="marginLeft",x="qx.dyntheme",y="allowShrinkX",z="top",A="right",B="marginRight",C="abstract",D="Wrong 'top' argument. ",E="Wrong 'height' argument. ",F="_applyMargin",G="allowGrowY",H="left",I="changeHeight";qx.Class.define(p,{type:C,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);if(qx.core.Environment.get(x)){qx.theme.manager.Meta.getInstance().addListener(k,this._onChangeTheme,this);}
;}
,properties:{minWidth:{check:j,nullable:true,apply:l,init:null,themeable:true},width:{check:j,event:a,nullable:true,apply:l,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:l,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:l,init:null,themeable:true},height:{check:j,event:I,nullable:true,apply:l,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:l,init:null,themeable:true},allowGrowX:{check:c,apply:f,init:true,themeable:true},allowShrinkX:{check:c,apply:f,init:true,themeable:true},allowGrowY:{check:c,apply:f,init:true,themeable:true},allowShrinkY:{check:c,apply:f,init:true,themeable:true},allowStretchX:{group:[t,y],mode:u,themeable:true},allowStretchY:{group:[G,d],mode:u,themeable:true},marginTop:{check:j,init:0,apply:F,themeable:true},marginRight:{check:j,init:0,apply:F,themeable:true},marginBottom:{check:j,init:0,apply:F,themeable:true},marginLeft:{check:j,init:0,apply:F,themeable:true},margin:{group:[r,B,o,w],mode:u,themeable:true},alignX:{check:[H,q,A],nullable:true,apply:e,themeable:true},alignY:{check:[z,v,h,m],nullable:true,apply:e,themeable:true}},members:{_onChangeTheme:qx.core.Environment.select(x,{"true":function(){var L=qx.util.PropertyUtil.getAllProperties(this.constructor);for(var name in L){var K=L[name];if(K.themeable){var J=qx.util.PropertyUtil.getUserValue(this,name);if(J==null){qx.util.PropertyUtil.resetThemed(this,name);}
;}
;}
;}
,"false":null}),__gb:null,__gc:null,__gd:null,__ge:null,__gf:null,__gg:null,__gh:null,getBounds:function(){return this.__gg||this.__gc||null;}
,clearSeparators:function(){}
,renderSeparator:function(M,N){}
,renderLayout:function(U,top,R,Q){if(this.isDisposed()){return null;}
;if(qx.core.Environment.get(n)){var S=g+this.toString()+s;this.assertInteger(U,i+S);this.assertInteger(top,D+S);this.assertInteger(R,b+S);this.assertInteger(Q,E+S);}
;var O=this.__gc;if(!O){O=this.__gc={};}
;var T={};if(U!==O.left||top!==O.top){T.position=true;O.left=U;O.top=top;}
;if(R!==O.width||Q!==O.height){T.size=true;O.width=R;O.height=Q;}
;if(this.__gd){T.local=true;delete this.__gd;}
;if(this.__gf){T.margin=true;delete this.__gf;}
;if(this.getHeight()==null&&this._hasHeightForWidth()){var P=this._getHeightForWidth(R);if(P!=null&&P!==this.__gb){this.__gb=P;qx.ui.core.queue.Layout.add(this);}
;}
;return T;}
,isExcluded:function(){return false;}
,hasValidLayout:function(){return !this.__gd;}
,scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);}
,invalidateLayoutCache:function(){this.__gd=true;this.__ge=null;}
,getSizeHint:function(V){var W=this.__ge;if(W){return W;}
;if(V===false){return null;}
;W=this.__ge=this._computeSizeHint();if(this._hasHeightForWidth()&&this.__gb&&this.getHeight()==null){W.height=this.__gb;}
;if(W.minWidth>W.width){W.width=W.minWidth;}
;if(W.maxWidth<W.width){W.width=W.maxWidth;}
;if(!this.getAllowGrowX()){W.maxWidth=W.width;}
;if(!this.getAllowShrinkX()){W.minWidth=W.width;}
;if(W.minHeight>W.height){W.height=W.minHeight;}
;if(W.maxHeight<W.height){W.height=W.maxHeight;}
;if(!this.getAllowGrowY()){W.maxHeight=W.height;}
;if(!this.getAllowShrinkY()){W.minHeight=W.height;}
;return W;}
,_computeSizeHint:function(){var bc=this.getMinWidth()||0;var Y=this.getMinHeight()||0;var bd=this.getWidth()||bc;var bb=this.getHeight()||Y;var X=this.getMaxWidth()||Infinity;var ba=this.getMaxHeight()||Infinity;return {minWidth:bc,width:bd,maxWidth:X,minHeight:Y,height:bb,maxHeight:ba};}
,_hasHeightForWidth:function(){var be=this._getLayout();if(be){return be.hasHeightForWidth();}
;return false;}
,_getHeightForWidth:function(bf){var bg=this._getLayout();if(bg&&bg.hasHeightForWidth()){return bg.getHeightForWidth(bf);}
;return null;}
,_getLayout:function(){return null;}
,_applyMargin:function(){this.__gf=true;var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}
;}
,_applyAlign:function(){var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}
;}
,_applyDimension:function(){qx.ui.core.queue.Layout.add(this);}
,_applyStretching:function(){qx.ui.core.queue.Layout.add(this);}
,hasUserBounds:function(){return !!this.__gg;}
,setUserBounds:function(bi,top,bh,bj){this.__gg={left:bi,top:top,width:bh,height:bj};qx.ui.core.queue.Layout.add(this);}
,resetUserBounds:function(){delete this.__gg;qx.ui.core.queue.Layout.add(this);}
,__gi:{},setLayoutProperties:function(bm){if(bm==null){return;}
;var bk=this.__gh;if(!bk){bk=this.__gh={};}
;var parent=this.getLayoutParent();if(parent){parent.updateLayoutProperties(bm);}
;for(var bl in bm){if(bm[bl]==null){delete bk[bl];}
else {bk[bl]=bm[bl];}
;}
;}
,getLayoutProperties:function(){return this.__gh||this.__gi;}
,clearLayoutProperties:function(){delete this.__gh;}
,updateLayoutProperties:function(bp){var bn=this._getLayout();if(bn){if(qx.core.Environment.get(n)){if(bp){for(var bo in bp){if(bp[bo]!==null){bn.verifyLayoutProperty(this,bo,bp[bo]);}
;}
;}
;}
;bn.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);}
,getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();}
,getLayoutParent:function(){return this.$$parent||null;}
,setLayoutParent:function(parent){if(this.$$parent===parent){return;}
;this.$$parent=parent||null;qx.ui.core.queue.Visibility.add(this);}
,isRootWidget:function(){return false;}
,_getRoot:function(){var parent=this;while(parent){if(parent.isRootWidget()){return parent;}
;parent=parent.$$parent;}
;return null;}
,clone:function(){var bq=qx.core.Object.prototype.clone.call(this);var br=this.__gh;if(br){bq.__gh=qx.lang.Object.clone(br);}
;return bq;}
},destruct:function(){if(qx.core.Environment.get(x)){qx.theme.manager.Meta.getInstance().removeListener(k,this._onChangeTheme,this);}
;this.$$parent=this.$$subparent=this.__gh=this.__gc=this.__gg=this.__ge=null;}
});}
)();
(function(){var a="The theme to use is not available: ",b="_applyTheme",c="qx.theme",d="qx.theme.manager.Meta",f="qx.theme.Modern",g="qx.event.type.Event",h="Theme",i="changeTheme",j="singleton";qx.Class.define(d,{type:j,extend:qx.core.Object,events:{"changeTheme":g},properties:{theme:{check:h,nullable:false,apply:b}},members:{_applyTheme:function(k,m){var u=true;var w=true;var o=true;var q=true;var l=true;if(m){u=k.meta.color!==m.meta.color;w=k.meta.decoration!==m.meta.decoration;o=k.meta.font!==m.meta.font;q=k.meta.icon!==m.meta.icon;l=k.meta.appearance!==m.meta.appearance;}
;var n=qx.theme.manager.Color.getInstance();var t=qx.theme.manager.Decoration.getInstance();var r=qx.theme.manager.Font.getInstance();var p=qx.theme.manager.Icon.getInstance();var s=qx.theme.manager.Appearance.getInstance();this._suspendEvents();if(u){if(!w){var v=t.getTheme();t._applyTheme(v);}
;n.setTheme(k.meta.color);}
;t.setTheme(k.meta.decoration);r.setTheme(k.meta.font);p.setTheme(k.meta.icon);s.setTheme(k.meta.appearance);if(u||w||o||q||l){this.fireEvent(i);}
;this._activateEvents();}
,__eg:null,_fireEvent:function(e){if(e.getTarget()===qx.theme.manager.Color.getInstance()){qx.theme.manager.Decoration.getInstance().refresh();}
;this.fireEvent(i);}
,_suspendEvents:function(){var B=qx.theme.manager.Color.getInstance();var A=qx.theme.manager.Decoration.getInstance();var x=qx.theme.manager.Font.getInstance();var z=qx.theme.manager.Icon.getInstance();var y=qx.theme.manager.Appearance.getInstance();if(B.hasListener(i)){B.removeListener(i,this._fireEvent,this);}
;if(A.hasListener(i)){A.removeListener(i,this._fireEvent,this);}
;if(x.hasListener(i)){x.removeListener(i,this._fireEvent,this);}
;if(z.hasListener(i)){z.removeListener(i,this._fireEvent,this);}
;if(y.hasListener(i)){y.removeListener(i,this._fireEvent,this);}
;}
,_activateEvents:function(){var G=qx.theme.manager.Color.getInstance();var F=qx.theme.manager.Decoration.getInstance();var C=qx.theme.manager.Font.getInstance();var E=qx.theme.manager.Icon.getInstance();var D=qx.theme.manager.Appearance.getInstance();if(!G.hasListener(i)){G.addListener(i,this._fireEvent,this);}
;if(!F.hasListener(i)){F.addListener(i,this._fireEvent,this);}
;if(!C.hasListener(i)){C.addListener(i,this._fireEvent,this);}
;if(!E.hasListener(i)){E.addListener(i,this._fireEvent,this);}
;if(!D.hasListener(i)){D.addListener(i,this._fireEvent,this);}
;}
,initialize:function(){var J=qx.core.Environment;var H,I;H=J.get(c);if(H){I=qx.Theme.getByName(H);if(!I){throw new Error(a+H);}
;this.setTheme(I);}
;}
},environment:{"qx.theme":f}});}
)();
(function(){var a="qx.util.ValueManager",b="abstract";qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this._dynamic={};}
,members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];}
,isDynamic:function(d){return !!this._dynamic[d];}
,resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];}
;return e;}
,_setDynamic:function(f){this._dynamic=f;}
,_getDynamic:function(){return this._dynamic;}
}});}
)();
(function(){var a="Could not parse color: ",b="_applyTheme",c="qx.theme.manager.Color",d="Theme",e="changeTheme",f="string",g="singleton";qx.Class.define(c,{type:g,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:e}},members:{_applyTheme:function(j){var h={};if(j){var i=j.colors;for(var name in i){h[name]=this.__eh(i,name);}
;}
;this._setDynamic(h);}
,__eh:function(l,name){var k=l[name];if(typeof k===f){if(!qx.util.ColorUtil.isCssString(k)){if(l[k]!=undefined){return this.__eh(l,k);}
;throw new Error(a+k);}
;return k;}
else if(k instanceof Array){return qx.util.ColorUtil.rgbToRgbString(k);}
;throw new Error(a+k);}
,resolve:function(p){var o=this._dynamic;var m=o[p];if(m){return m;}
;var n=this.getTheme();if(n!==null&&n.colors[p]){return o[p]=n.colors[p];}
;return p;}
,isDynamic:function(s){var r=this._dynamic;if(s&&(r[s]!==undefined)){return true;}
;var q=this.getTheme();if(q!==null&&s&&(q.colors[s]!==undefined)){r[s]=q.colors[s];return true;}
;return false;}
}});}
)();
(function(){var a="Could not parse color: ",c="",d="Invalid hex value: ",e="Could not convert system colors to RGB: ",h="(",j=")",k="#",l="a",m="Invalid hex3 value: ",n="qx.theme.manager.Color",o="qx.util.ColorUtil",q="Invalid hex6 value: ",s="rgb",u=",";qx.Bootstrap.define(o,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(v){return this.NAMED[v]!==undefined;}
,isSystemColor:function(w){return this.SYSTEM[w]!==undefined;}
,supportsThemes:function(){if(qx.Class){return qx.Class.isDefined(n);}
;return false;}
,isThemedColor:function(x){if(!this.supportsThemes()){return false;}
;if(qx.theme&&qx.theme.manager&&qx.theme.manager.Color){return qx.theme.manager.Color.getInstance().isDynamic(x);}
;return false;}
,stringToRgb:function(y){if(this.supportsThemes()&&this.isThemedColor(y)){y=qx.theme.manager.Color.getInstance().resolveDynamic(y);}
;if(this.isNamedColor(y)){return this.NAMED[y].concat();}
else if(this.isSystemColor(y)){throw new Error(e+y);}
else if(this.isRgbaString(y)){return this.__ej(y);}
else if(this.isRgbString(y)){return this.__ei();}
else if(this.isHex3String(y)){return this.__ek();}
else if(this.isHex6String(y)){return this.__el();}
;throw new Error(a+y);}
,cssStringToRgb:function(z){if(this.isNamedColor(z)){return this.NAMED[z];}
else if(this.isSystemColor(z)){throw new Error(e+z);}
else if(this.isRgbString(z)){return this.__ei();}
else if(this.isRgbaString(z)){return this.__ej();}
else if(this.isHex3String(z)){return this.__ek();}
else if(this.isHex6String(z)){return this.__el();}
;throw new Error(a+z);}
,stringToRgbString:function(A){return this.rgbToRgbString(this.stringToRgb(A));}
,rgbToRgbString:function(B){return s+(B[3]!==undefined?l:c)+h+B.join(u)+j;}
,rgbToHexString:function(C){return (k+qx.lang.String.pad(C[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(C[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(C[2].toString(16).toUpperCase(),2));}
,isValidPropertyValue:function(D){return (this.isThemedColor(D)||this.isNamedColor(D)||this.isHex3String(D)||this.isHex6String(D)||this.isRgbString(D)||this.isRgbaString(D));}
,isCssString:function(E){return (this.isSystemColor(E)||this.isNamedColor(E)||this.isHex3String(E)||this.isHex6String(E)||this.isRgbString(E)||this.isRgbaString(E));}
,isHex3String:function(F){return this.REGEXP.hex3.test(F);}
,isHex6String:function(G){return this.REGEXP.hex6.test(G);}
,isRgbString:function(H){return this.REGEXP.rgb.test(H);}
,isRgbaString:function(I){return this.REGEXP.rgba.test(I);}
,__ei:function(){var L=parseInt(RegExp.$1,10);var K=parseInt(RegExp.$2,10);var J=parseInt(RegExp.$3,10);return [L,K,J];}
,__ej:function(){var P=parseInt(RegExp.$1,10);var O=parseInt(RegExp.$2,10);var M=parseInt(RegExp.$3,10);var N=parseFloat(RegExp.$4,10);if(P===0&&O===0&M===0&&N===0){return [-1,-1,-1];}
;return [P,O,M];}
,__ek:function(){var S=parseInt(RegExp.$1,16)*17;var R=parseInt(RegExp.$2,16)*17;var Q=parseInt(RegExp.$3,16)*17;return [S,R,Q];}
,__el:function(){var V=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);var U=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);var T=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);return [V,U,T];}
,hex3StringToRgb:function(W){if(this.isHex3String(W)){return this.__ek(W);}
;throw new Error(m+W);}
,hex3StringToHex6String:function(X){if(this.isHex3String(X)){return this.rgbToHexString(this.hex3StringToRgb(X));}
;return X;}
,hex6StringToRgb:function(Y){if(this.isHex6String(Y)){return this.__el(Y);}
;throw new Error(q+Y);}
,hexStringToRgb:function(ba){if(this.isHex3String(ba)){return this.__ek(ba);}
;if(this.isHex6String(ba)){return this.__el(ba);}
;throw new Error(d+ba);}
,rgbToHsb:function(bi){var bc,bd,bf;var bm=bi[0];var bj=bi[1];var bb=bi[2];var bl=(bm>bj)?bm:bj;if(bb>bl){bl=bb;}
;var be=(bm<bj)?bm:bj;if(bb<be){be=bb;}
;bf=bl/255.0;if(bl!=0){bd=(bl-be)/bl;}
else {bd=0;}
;if(bd==0){bc=0;}
else {var bh=(bl-bm)/(bl-be);var bk=(bl-bj)/(bl-be);var bg=(bl-bb)/(bl-be);if(bm==bl){bc=bg-bk;}
else if(bj==bl){bc=2.0+bh-bg;}
else {bc=4.0+bk-bh;}
;bc=bc/6.0;if(bc<0){bc=bc+1.0;}
;}
;return [Math.round(bc*360),Math.round(bd*100),Math.round(bf*100)];}
,hsbToRgb:function(bn){var i,f,p,r,t;var bo=bn[0]/360;var bp=bn[1]/100;var bq=bn[2]/100;if(bo>=1.0){bo%=1.0;}
;if(bp>1.0){bp=1.0;}
;if(bq>1.0){bq=1.0;}
;var br=Math.floor(255*bq);var bs={};if(bp==0.0){bs.red=bs.green=bs.blue=br;}
else {bo*=6.0;i=Math.floor(bo);f=bo-i;p=Math.floor(br*(1.0-bp));r=Math.floor(br*(1.0-(bp*f)));t=Math.floor(br*(1.0-(bp*(1.0-f))));switch(i){case 0:bs.red=br;bs.green=t;bs.blue=p;break;case 1:bs.red=r;bs.green=br;bs.blue=p;break;case 2:bs.red=p;bs.green=br;bs.blue=t;break;case 3:bs.red=p;bs.green=r;bs.blue=br;break;case 4:bs.red=t;bs.green=p;bs.blue=br;break;case 5:bs.red=br;bs.green=p;bs.blue=r;break;};}
;return [bs.red,bs.green,bs.blue];}
,randomColor:function(){var r=Math.round(Math.random()*255);var g=Math.round(Math.random()*255);var b=Math.round(Math.random()*255);return this.rgbToRgbString([r,g,b]);}
}});}
)();
(function(){var a="mshtml",b="engine.name",c="_applyTheme",d="",e="'.",f="__eo",g="qx-",h="Unable to resolve decorator '",j="singleton",k=";",l="qx.theme.manager.Decoration",m=".",n="Theme",o="object",p="changeTheme",q="string",r="browser.documentmode",s=":";qx.Class.define(l,{type:j,extend:qx.core.Object,implement:[qx.core.IDisposable],statics:{CSS_CLASSNAME_PREFIX:g},construct:function(){qx.core.Object.call(this);this.__em=[];this.__en=(qx.core.Environment.get(b)==a&&qx.core.Environment.get(r)<9);}
,properties:{theme:{check:n,nullable:true,apply:c,event:p}},members:{__eo:null,__em:null,__en:false,getCssClassName:function(u){var t=qx.theme.manager.Decoration.CSS_CLASSNAME_PREFIX;if(qx.lang.Type.isString(u)){return t+u;}
else {return t+u.toHashCode();}
;}
,addCssClass:function(x){var w=qx.ui.style.Stylesheet.getInstance();var z=x;x=this.getCssClassName(x);var y=m+x;if(w.hasRule(y)){return x;}
;if(qx.lang.Type.isString(z)){z=this.resolve(z);}
;if(!z){throw new Error(h+x+e);}
;var A=d;var v=z.getStyles(true);Object.keys(v).sort().forEach(function(E){if(qx.Bootstrap.isObject(v[E])){var B=d;var G=v[E];var D=false;for(var C in G){D=true;B+=C+s+G[C]+k;}
;var F=this.__en?y:y+(D?s:d);this.__em.push(F+E);w.addRule(F+E,B);return;}
;A+=E+s+v[E]+k;}
,this);if(A){w.addRule(y,A);this.__em.push(y);}
;return x;}
,removeAllCssClasses:function(){for(var i=0;i<this.__em.length;i++ ){var H=this.__em[i];qx.ui.style.Stylesheet.getInstance().removeRule(H);}
;this.__em=[];}
,resolve:function(L){if(!L){return null;}
;if(typeof L===o){return L;}
;var K=this.__eo;if(!K){K=this.__eo={};}
;var I=K[L];if(I){return I;}
;var M=this.getTheme();if(!M){return null;}
;if(!M.decorations[L]){return null;}
;var N=new qx.ui.decoration.Decorator();var J=function(O,name){if(O.include&&M.decorations[O.include]){J(M.decorations[O.include],O.include);}
;if(O.style){N.set(O.style);}
;}
;J(M.decorations[L],L);K[L]=N;return K[L];}
,isValidPropertyValue:function(P){if(typeof P===q){return this.isDynamic(P);}
else if(typeof P===o){var Q=P.constructor;return qx.Class.hasInterface(Q,qx.ui.decoration.IDecorator);}
;return false;}
,isDynamic:function(S){if(!S){return false;}
;var R=this.getTheme();if(!R){return false;}
;return !!R.decorations[S];}
,isCached:function(T){return !this.__eo?false:qx.lang.Object.contains(this.__eo,T);}
,_applyTheme:function(X,V){var W=qx.util.AliasManager.getInstance();this.removeAllCssClasses();if(V){for(var U in V.aliases){W.remove(U);}
;}
;if(X){for(var U in X.aliases){W.add(U,X.aliases[U]);}
;}
;this._disposeMap(f);this.__eo={};}
,clear:function(){var bb=qx.util.AliasManager.getInstance();var ba=this.getTheme();if(!bb.isDisposed()&&ba&&ba.alias){for(var Y in ba.aliases){bb.remove(Y,ba.aliases[Y]);}
;}
;this.removeAllCssClasses();this._disposeMap(f);this.__eo={};}
,refresh:function(){this.clear();var be=qx.util.AliasManager.getInstance();var bd=this.getTheme();if(bd&&bd.alias){for(var bc in bd.aliases){be.add(bc,bd.aliases[bc]);}
;}
;}
},destruct:function(){this.clear();}
});}
)();
(function(){var a="qx.ui.style.Stylesheet",b="singleton";qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__ep=qx.bom.Stylesheet.createElement();this.__em=[];}
,members:{__em:null,__ep:null,addRule:function(d,c){if(this.hasRule(d)){return;}
;qx.bom.Stylesheet.addRule(this.__ep,d,c);this.__em.push(d);}
,hasRule:function(e){return this.__em.indexOf(e)!=-1;}
,removeRule:function(f){delete this.__em[this.__em.indexOf(f)];qx.bom.Stylesheet.removeRule(this.__ep,f);}
}});}
)();
(function(){var a="background-color",b="qx.debug",c="qx.theme",d="This decorator is already in-use. Modification is not possible anymore!",e="qx.ui.decoration.MBackgroundColor",f="Color",g="_applyBackgroundColor";qx.Mixin.define(e,{properties:{backgroundColor:{check:f,nullable:true,apply:g}},members:{_styleBackgroundColor:function(h){var i=this.getBackgroundColor();if(i&&qx.core.Environment.get(c)){i=qx.theme.manager.Color.getInstance().resolve(i);}
;if(i){h[a]=i;}
;}
,_applyBackgroundColor:function(){if(qx.core.Environment.get(b)){if(this._isInitialized()){throw new Error(d);}
;}
;}
}});}
)();
(function(){var a="qx.ui.decoration.IDecorator";qx.Interface.define(a,{members:{getStyles:function(){}
,getPadding:function(){}
,getInsets:function(){}
}});}
)();
(function(){var a="abstract",b="Abstract method called.",c="qx.ui.decoration.Abstract";qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:a,members:{__ev:null,_getDefaultInsets:function(){throw new Error(b);}
,_isInitialized:function(){throw new Error(b);}
,_resetInsets:function(){this.__ev=null;}
,getInsets:function(){if(!this.__ev){this.__ev=this._getDefaultInsets();}
;return this.__ev;}
},destruct:function(){this.__ev=null;}
});}
)();
(function(){var a="repeat",b="backgroundPositionX",c="px",d=".png",e=" are not supported in this client! The image's resource id is '",f='',g='Boolean',h='background',j='backgroundRepeat',k='push',l="_applyBackgroundImage",m='backgroundOrigin',n="qx.debug",o='size',p='url(',q="Background PNGs with repeat == 'scale' or repeat == 'no-repeat'",r="qx.ui.decoration.MBackgroundImage",s="100% 100%",t='backgroundPositionX',u="browser.documentmode",v="backgroundPositionY",w="'",x=' / ',y='backgroundImage',z='repeat',A=' ',B='unshift',C="background",D="engine.name",E='backgroundPositionY',F="scale",G="This decorator is already in-use. Modification is not possible anymore!",H="no-repeat",I=')',J="_applyBackgroundPosition",K=" ",L="The backgroundPosition property is not supported by this client!",M="mshtml";qx.Mixin.define(r,{properties:{backgroundImage:{nullable:true,apply:l},backgroundRepeat:{init:a,apply:l},backgroundPositionX:{nullable:true,apply:J},backgroundPositionY:{nullable:true,apply:J},backgroundOrigin:{nullable:true,apply:l},backgroundPosition:{group:[v,b]},orderGradientsFront:{check:g,init:false}},members:{_styleBackgroundImage:function(N){if(!this.getBackgroundImage()){return;}
;if(C in N){if(!qx.lang.Type.isArray(N[h])){N[h]=[N[h]];}
;}
else {N[h]=[];}
;var O=[y,j,E,t,m];(function(Y,ba,T,S,R){for(var i=0;i<Y.length;i++ ){var U=Y[i];var Q=ba[i];var top=T[i]||0;var bc=S[i]||0;var P=R[i]||f;if(top==null){top=0;}
;if(bc==null){bc=0;}
;if(!isNaN(top)){top+=c;}
;if(!isNaN(bc)){bc+=c;}
;var bb=qx.util.AliasManager.getInstance().resolve(U);var W=qx.util.ResourceManager.getInstance().toUri(bb);var X={image:p+W+I,position:bc+K+top,repeat:z,origin:P};if(Q===F){X.size=s;}
else {X.repeat=Q;}
;var V=[X.image,X.position+(o in X?x+X.size:f),X.repeat,X.origin];N[C][this.getOrderGradientsFront()?k:B](V.join(A));if(qx.core.Environment.get(n)&&W&&W.endsWith(d)&&(Q==F||Q==H)&&qx.core.Environment.get(D)==M&&qx.core.Environment.get(u)<9){this.warn(q+e+bb+w);}
;}
;}
).apply(this,this._getExtendedPropertyValueArrays(O));}
,_applyBackgroundImage:function(){if(qx.core.Environment.get(n)){if(this._isInitialized()){throw new Error(G);}
;}
;}
,_applyBackgroundPosition:function(){if(qx.core.Environment.get(n)){if(this._isInitialized()){throw new Error(G);}
;if(qx.core.Environment.get(D)==M&&qx.core.Environment.get(u)<9){this.warn(L);}
;}
;}
}});}
)();
(function(){var a="0",b="qx/static",c="http://",d="https://",e="file://",f="qx.util.AliasManager",g="singleton",h=".",i="/",j="static";qx.Class.define(f,{type:g,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);this.__ew={};this.add(j,b);}
,members:{__ew:null,_preprocess:function(n){var m=this._getDynamic();if(m[n]===false){return n;}
else if(m[n]===undefined){if(n.charAt(0)===i||n.charAt(0)===h||n.indexOf(c)===0||n.indexOf(d)===a||n.indexOf(e)===0){m[n]=false;return n;}
;if(this.__ew[n]){return this.__ew[n];}
;var l=n.substring(0,n.indexOf(i));var k=this.__ew[l];if(k!==undefined){m[n]=k+n.substring(l.length);}
;}
;return n;}
,add:function(o,q){this.__ew[o]=q;var p=this._getDynamic();for(var r in p){if(r.substring(0,r.indexOf(i))===o){p[r]=q+r.substring(o.length);}
;}
;}
,remove:function(s){delete this.__ew[s];}
,resolve:function(t){var u=this._getDynamic();if(t!=null){t=this._preprocess(t);}
;return u[t]||t;}
,getAliases:function(){var v={};for(var w in this.__ew){v[w]=this.__ew[w];}
;return v;}
}});}
)();
(function(){var a="Microsoft.XMLHTTP",b="xhr",c="io.ssl",d="io.xhr",e="",f="file:",g="https:",h="webkit",i="gecko",j="activex",k="opera",l=".",m="io.maxrequests",n="qx.bom.client.Transport";qx.Bootstrap.define(n,{statics:{getMaxConcurrentRequestCount:function(){var p;var r=qx.bom.client.Engine.getVersion().split(l);var o=0;var s=0;var q=0;if(r[0]){o=r[0];}
;if(r[1]){s=r[1];}
;if(r[2]){q=r[2];}
;if(window.maxConnectionsPerServer){p=window.maxConnectionsPerServer;}
else if(qx.bom.client.Engine.getName()==k){p=8;}
else if(qx.bom.client.Engine.getName()==h){p=4;}
else if(qx.bom.client.Engine.getName()==i&&((o>1)||((o==1)&&(s>9))||((o==1)&&(s==9)&&(q>=1)))){p=6;}
else {p=2;}
;return p;}
,getSsl:function(){return window.location.protocol===g;}
,getXmlHttpRequest:function(){var t=window.ActiveXObject?(function(){if(window.location.protocol!==f){try{new window.XMLHttpRequest();return b;}
catch(u){}
;}
;try{new window.ActiveXObject(a);return j;}
catch(v){}
;}
)():(function(){try{new window.XMLHttpRequest();return b;}
catch(w){}
;}
)();return t||e;}
},defer:function(x){qx.core.Environment.add(m,x.getMaxConcurrentRequestCount);qx.core.Environment.add(c,x.getSsl);qx.core.Environment.add(d,x.getXmlHttpRequest);}
});}
)();
(function(){var a="singleton",b="qx.util.LibraryManager";qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__ex:qx.$$libraries||{}},members:{has:function(c){return !!this.self(arguments).__ex[c];}
,get:function(d,e){return this.self(arguments).__ex[d][e]?this.self(arguments).__ex[d][e]:null;}
,set:function(f,g,h){this.self(arguments).__ex[f][g]=h;}
}});}
)();
(function(){var a="//",b="3",c="string",d="singleton",e="io.ssl",f="resourceUri",g="type",h="font",j='.',l="/",m="1.5",n="data",o="",p="base",q="@",r="data:image/",s="2",t="mshtml",u="engine.name",v="?",w="encoding",x="qx.util.ResourceManager",y=";",z="x",A=",";qx.Class.define(x,{extend:qx.core.Object,type:d,construct:function(){qx.core.Object.call(this);}
,statics:{__u:qx.$$resources||{},__ey:{}},members:{findHighResolutionSource:function(B,D){var E=[b,s,m];if(!D){D=parseFloat(qx.bom.client.Device.getDevicePixelRatio().toFixed(2));}
;if(D<=1){return false;}
;var i=E.length;while(i>0&&D>E[ --i]){}
;var C;var k;for(k=i;k>=0;k-- ){C=this.getHighResolutionSource(B,E[k]);if(C){return C;}
;}
;for(k=i+1;k<E.length;k++ ){C=this.getHighResolutionSource(B,E[k]);if(C){return C;}
;}
;return null;}
,getHighResolutionSource:function(F,G){var I=F.lastIndexOf(j);if(I>-1){var H=q+G+z;var J=F.slice(0,I)+H+F.slice(I);if(this.has(J)){return J;}
;}
;return null;}
,getIds:function(L){var N=this.self(arguments).__u;if(!N){return null;}
;var M=[];for(var K in N){if(N.hasOwnProperty(K)){if(L&&K.indexOf(L)==-1){continue;}
;M.push(K);}
;}
;return M;}
,has:function(O){return !!this.self(arguments).__u[O];}
,getData:function(P){return this.self(arguments).__u[P]||null;}
,getImageWidth:function(T){var Q;if(T&&T.startsWith(q)){var S=T.split(l);Q=parseInt(S[2],10);if(Q){T=S[0]+l+S[1];}
;}
;var U=this.self(arguments).__u[T];if(Q&&U){var R=Math.ceil(Q/U[1]*U[0]);return R;}
;return U?U[0]:null;}
,getImageHeight:function(X){if(X&&X.startsWith(q)){var W=X.split(l);var Y=parseInt(W[2],10);if(Y){return Y;}
;}
;var V=this.self(arguments).__u[X];return V?V[1]:null;}
,getImageFormat:function(bb){if(bb&&bb.startsWith(q)){return h;}
;var ba=this.self(arguments).__u[bb];return ba?ba[2]:null;}
,getCombinedFormat:function(bg){var bd=o;var bf=this.self(arguments).__u[bg];var bc=bf&&bf.length>4&&typeof (bf[4])==c&&this.constructor.__u[bf[4]];if(bc){var bh=bf[4];var be=this.constructor.__u[bh];bd=be[2];}
;return bd;}
,toUri:function(bl){if(bl==null){return bl;}
;var bi=this.self(arguments).__u[bl];if(!bi){return bl;}
;if(typeof bi===c){var bk=bi;}
else {var bk=bi[3];if(!bk){return bl;}
;}
;var bj=o;if((qx.core.Environment.get(u)==t)&&qx.core.Environment.get(e)){bj=this.self(arguments).__ey[bk];}
;return bj+qx.util.LibraryManager.getInstance().get(bk,f)+l+bl;}
,toDataUri:function(bo){var bn=this.constructor.__u[bo];var bq=bn?this.constructor.__u[bn[4]]:null;var bp;if(bq){var bm=bq[4][bo];bp=r+bm[g]+y+bm[w]+A+bm[n];}
else {bp=this.toUri(bo);}
;return bp;}
,isFontUri:function(br){return br?br.startsWith(q):false;}
},defer:function(bt){if((qx.core.Environment.get(u)==t)){if(qx.core.Environment.get(e)){for(var bu in qx.$$libraries){var bs;if(qx.util.LibraryManager.getInstance().get(bu,f)){bs=qx.util.LibraryManager.getInstance().get(bu,f);}
else {bt.__ey[bu]=o;continue;}
;var by;var bw=document.getElementsByTagName(p);if(bw.length>0){by=bw[0].href;}
;if(bs.match(/^\/\//)!=null){bt.__ey[bu]=window.location.protocol;}
else if(bs.match(/^\//)!=null){if(by){bt.__ey[bu]=by;}
else {bt.__ey[bu]=window.location.protocol+a+window.location.host;}
;}
else if(bs.match(/^\.\//)!=null){var bx=document.URL;bt.__ey[bu]=bx.substring(0,bx.lastIndexOf(l)+1);}
else if(bs.match(/^http/)!=null){bt.__ey[bu]=o;}
else {if(!by){var bv=window.location.href.indexOf(v);if(bv==-1){by=window.location.href;}
else {by=window.location.href.substring(0,bv);}
;}
;bt.__ey[bu]=by.substring(0,by.lastIndexOf(l)+1);}
;}
;}
;}
;}
});}
)();
(function(){var a="double",b="qx.theme",c="px ",d="widthTop",e="inset",f="solid",g="dotted",h="styleRight",i="styleBottom",j="_applyWidth",k="border-top",l="qx.debug",m="border-left",n="ridge",o="border-right",p="qx.ui.decoration.MSingleBorder",q="shorthand",r="Color",s="widthBottom",t="outset",u="widthLeft",v="",w="border-bottom",x="styleTop",y="colorBottom",z="groove",A="styleLeft",B="widthRight",C="dashed",D="Number",E="colorLeft",F="colorRight",G="colorTop",H="_applyStyle",I=" ",J="This decorator is already in-use. Modification is not possible anymore!",K="Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!",L="absolute";qx.Mixin.define(p,{properties:{widthTop:{check:D,init:0,apply:j},widthRight:{check:D,init:0,apply:j},widthBottom:{check:D,init:0,apply:j},widthLeft:{check:D,init:0,apply:j},styleTop:{nullable:true,check:[f,g,C,a,e,t,n,z],init:f,apply:H},styleRight:{nullable:true,check:[f,g,C,a,e,t,n,z],init:f,apply:H},styleBottom:{nullable:true,check:[f,g,C,a,e,t,n,z],init:f,apply:H},styleLeft:{nullable:true,check:[f,g,C,a,e,t,n,z],init:f,apply:H},colorTop:{nullable:true,check:r,apply:H},colorRight:{nullable:true,check:r,apply:H},colorBottom:{nullable:true,check:r,apply:H},colorLeft:{nullable:true,check:r,apply:H},left:{group:[u,A,E]},right:{group:[B,h,F]},top:{group:[d,x,G]},bottom:{group:[s,i,y]},width:{group:[d,B,s,u],mode:q},style:{group:[x,h,i,A],mode:q},color:{group:[G,F,y,E],mode:q}},members:{_styleBorder:function(M){if(qx.core.Environment.get(b)){var O=qx.theme.manager.Color.getInstance();var S=O.resolve(this.getColorTop());var P=O.resolve(this.getColorRight());var N=O.resolve(this.getColorBottom());var R=O.resolve(this.getColorLeft());}
else {var S=this.getColorTop();var P=this.getColorRight();var N=this.getColorBottom();var R=this.getColorLeft();}
;var Q=this.getWidthTop();if(Q>0){M[k]=Q+c+this.getStyleTop()+I+(S||v);}
;var Q=this.getWidthRight();if(Q>0){M[o]=Q+c+this.getStyleRight()+I+(P||v);}
;var Q=this.getWidthBottom();if(Q>0){M[w]=Q+c+this.getStyleBottom()+I+(N||v);}
;var Q=this.getWidthLeft();if(Q>0){M[m]=Q+c+this.getStyleLeft()+I+(R||v);}
;if(qx.core.Environment.get(l)){if(M.length===0){throw new Error(K);}
;}
;M.position=L;}
,_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};}
,_applyWidth:function(){this._applyStyle();this._resetInsets();}
,_applyStyle:function(){if(qx.core.Environment.get(l)){if(this._isInitialized()){throw new Error(J);}
;}
;}
}});}
)();
(function(){var a="innerWidthRight",b="innerColorBottom",c="css.borderradius",d="qx.theme",e="px ",f='""',g="_applyDoubleBorder",h="border-top",i="inset 0 -",j="css.boxsizing",k="innerWidthTop",l="100%",m="qx.debug",n="border-left",o="innerColorRight",p="css.boxshadow",q="innerColorTop",r="innerColorLeft",s="inset ",t="shorthand",u="inset -",v="Color",w="border-box",x="This decorator is already in-use. Modification is not possible anymore!",y="qx.ui.decoration.MDoubleBorder",z="border-bottom",A="innerOpacity is configured but the browser doesn't support RGBA colors.",B=":before",C="inset 0 ",D="px solid ",E="innerWidthBottom",F="css.rgba",G="inherit",H="Number",I="innerWidthLeft",J="px 0 ",K="inset 0 0 0 ",L="border-right",M=" ",N=",",O="absolute";qx.Mixin.define(y,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__eB;this._styleBorder=this.__ez;}
,properties:{innerWidthTop:{check:H,init:0,apply:g},innerWidthRight:{check:H,init:0,apply:g},innerWidthBottom:{check:H,init:0,apply:g},innerWidthLeft:{check:H,init:0,apply:g},innerWidth:{group:[k,a,E,I],mode:t},innerColorTop:{nullable:true,check:v,apply:g},innerColorRight:{nullable:true,check:v,apply:g},innerColorBottom:{nullable:true,check:v,apply:g},innerColorLeft:{nullable:true,check:v,apply:g},innerColor:{group:[q,o,b,r],mode:t},innerOpacity:{check:H,init:1,apply:g}},members:{__ez:function(P){var Y=qx.core.Environment.get(p);var S,bd,innerWidth;if(qx.core.Environment.get(d)){var X=qx.theme.manager.Color.getInstance();S={top:X.resolve(this.getColorTop()),right:X.resolve(this.getColorRight()),bottom:X.resolve(this.getColorBottom()),left:X.resolve(this.getColorLeft())};bd={top:X.resolve(this.getInnerColorTop()),right:X.resolve(this.getInnerColorRight()),bottom:X.resolve(this.getInnerColorBottom()),left:X.resolve(this.getInnerColorLeft())};}
else {S={top:this.getColorTop(),right:this.getColorRight(),bottom:this.getColorBottom(),left:this.getColorLeft()};bd={top:this.getInnerColorTop(),right:this.getInnerColorRight(),bottom:this.getInnerColorBottom(),left:this.getInnerColorLeft()};}
;innerWidth={top:this.getInnerWidthTop(),right:this.getInnerWidthRight(),bottom:this.getInnerWidthBottom(),left:this.getInnerWidthLeft()};var V=this.getWidthTop();if(V>0){P[h]=V+e+this.getStyleTop()+M+S.top;}
;V=this.getWidthRight();if(V>0){P[L]=V+e+this.getStyleRight()+M+S.right;}
;V=this.getWidthBottom();if(V>0){P[z]=V+e+this.getStyleBottom()+M+S.bottom;}
;V=this.getWidthLeft();if(V>0){P[n]=V+e+this.getStyleLeft()+M+S.left;}
;var bc=this.getInnerOpacity();if(bc<1){this.__eA(bd,bc);}
;if(innerWidth.top>0||innerWidth.right>0||innerWidth.bottom>0||innerWidth.left>0){var bb=(innerWidth.top||0)+D+bd.top;var ba=(innerWidth.right||0)+D+bd.right;var U=(innerWidth.bottom||0)+D+bd.bottom;var W=(innerWidth.left||0)+D+bd.left;P[B]={"width":l,"height":l,"position":O,"content":f,"border-top":bb,"border-right":ba,"border-bottom":U,"border-left":W,"left":0,"top":0};var Q=qx.bom.Style.getCssName(qx.core.Environment.get(j));P[B][Q]=w;var R=qx.core.Environment.get(c);if(R){R=qx.bom.Style.getCssName(R);P[B][R]=G;}
;var T=[];if(bd.top&&innerWidth.top&&bd.top==bd.bottom&&bd.top==bd.right&&bd.top==bd.left&&innerWidth.top==innerWidth.bottom&&innerWidth.top==innerWidth.right&&innerWidth.top==innerWidth.left){T.push(K+innerWidth.top+e+bd.top);}
else {if(bd.top){T.push(C+(innerWidth.top||0)+e+bd.top);}
;if(bd.right){T.push(u+(innerWidth.right||0)+J+bd.right);}
;if(bd.bottom){T.push(i+(innerWidth.bottom||0)+e+bd.bottom);}
;if(bd.left){T.push(s+(innerWidth.left||0)+J+bd.left);}
;}
;if(T.length>0&&Y){Y=qx.bom.Style.getCssName(Y);if(!P[Y]){P[Y]=T.join(N);}
else {P[Y]+=N+T.join(N);}
;}
;}
else {P[B]={border:0};}
;}
,__eA:function(bh,be){if(!qx.core.Environment.get(F)){if(qx.core.Environment.get(m)){qx.log.Logger.warn(A);}
;return;}
;for(var bi in bh){var bf=qx.util.ColorUtil.stringToRgb(bh[bi]);bf.push(be);var bg=qx.util.ColorUtil.rgbToRgbString(bf);bh[bi]=bg;}
;}
,_applyDoubleBorder:function(){if(qx.core.Environment.get(m)){if(this._isInitialized()){throw new Error(x);}
;}
;}
,__eB:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};}
}});}
)();
(function(){var a="css.float",b="foo",c="css.borderimage.standardsyntax",d="detect",e="borderRadius",f="boxSizing",g="stretch",h="css.borderradius",j="content",k="css.inlineblock",l="css.gradient.filter",m="css.appearance",n="css.opacity",o="div",p="pointerEvents",q="css.gradient.radial",r="css.pointerevents",s="input",t="color",u="string",v="borderImage",w="userSelect",x="styleFloat",y="css.textShadow.filter",z="css.usermodify",A="flexbox",B='url("foo.png") 4 4 4 4 fill stretch',C="css.boxmodel",D="qx.bom.client.Css",E="css.boxshadow",F="appearance",G="-ms-flexbox",H="placeholder",I="-moz-none",J="backgroundImage",K="css.textShadow",L="DXImageTransform.Microsoft.Shadow",M="flex",N="css.alphaimageloaderneeded",O="css.gradient.legacywebkit",P="css.flexboxSyntax",Q="linear-gradient(0deg, #fff, #000)",R="textShadow",S="auto",T="css.borderimage",U="foo.png",V="rgba(1, 2, 3, 0.5)",W="color=#666666,direction=45",X="radial-gradient(0px 0px, cover, red 50%, blue 100%)",Y="rgba",bH="(",bI="-webkit-flex",bJ='url("foo.png") 4 4 4 4 stretch',bD="css.gradient.linear",bE="DXImageTransform.Microsoft.Gradient",bF="css.userselect",bG="span",bN="css.boxsizing",bO="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",bP="mshtml",cc="engine.name",bK="css.rgba",bL=");",bM="4 fill",bB="none",bS="startColorStr=#550000FF, endColorStr=#55FFFF00",bC="progid:",bT="css.placeholder",bU="css.userselect.none",bY="css.textoverflow",bQ="inline-block",cb="-moz-inline-box",bR="textOverflow",bV="userModify",bW="boxShadow",bX="cssFloat",ca="border";qx.Bootstrap.define(D,{statics:{__eC:null,getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==bP||!qx.bom.client.Browser.getQuirksMode();return content?j:ca;}
,getTextOverflow:function(){return qx.bom.Style.getPropertyName(bR);}
,getPlaceholder:function(){if(qx.core.Environment.get(cc)===bP){return false;}
;var i=document.createElement(s);return H in i;}
,getAppearance:function(){return qx.bom.Style.getPropertyName(F);}
,getBorderRadius:function(){return qx.bom.Style.getPropertyName(e);}
,getBoxShadow:function(){return qx.bom.Style.getPropertyName(bW);}
,getBorderImage:function(){return qx.bom.Style.getPropertyName(v);}
,getBorderImageSyntax:function(){var ce=qx.bom.client.Css.getBorderImage();if(!ce){return null;}
;var cd=document.createElement(o);if(ce===v){cd.style[ce]=B;if(cd.style.borderImageSource.indexOf(U)>=0&&cd.style.borderImageSlice.indexOf(bM)>=0&&cd.style.borderImageRepeat.indexOf(g)>=0){return true;}
;}
else {cd.style[ce]=bJ;if(cd.style[ce].indexOf(U)>=0){return false;}
;}
;return null;}
,getUserSelect:function(){return qx.bom.Style.getPropertyName(w);}
,getUserSelectNone:function(){var cg=qx.bom.client.Css.getUserSelect();if(cg){var cf=document.createElement(bG);cf.style[cg]=I;return cf.style[cg]===I?I:bB;}
;return null;}
,getUserModify:function(){return qx.bom.Style.getPropertyName(bV);}
,getFloat:function(){var ch=document.documentElement.style;return ch.cssFloat!==undefined?bX:ch.styleFloat!==undefined?x:null;}
,getLinearGradient:function(){qx.bom.client.Css.__eC=false;var cl=Q;var ci=document.createElement(o);var cj=qx.bom.Style.getAppliedStyle(ci,J,cl);if(!cj){cl=bO;var cj=qx.bom.Style.getAppliedStyle(ci,J,cl,false);if(cj){qx.bom.client.Css.__eC=true;}
;}
;if(!cj){return null;}
;var ck=/(.*?)\(/.exec(cj);return ck?ck[1]:null;}
,getFilterGradient:function(){return qx.bom.client.Css.__eD(bE,bS);}
,getRadialGradient:function(){var cp=X;var cm=document.createElement(o);var cn=qx.bom.Style.getAppliedStyle(cm,J,cp);if(!cn){return null;}
;var co=/(.*?)\(/.exec(cn);return co?co[1]:null;}
,getLegacyWebkitGradient:function(){if(qx.bom.client.Css.__eC===null){qx.bom.client.Css.getLinearGradient();}
;return qx.bom.client.Css.__eC;}
,getRgba:function(){var cq;try{cq=document.createElement(o);}
catch(cr){cq=document.createElement();}
;try{cq.style[t]=V;if(cq.style[t].indexOf(Y)!=-1){return true;}
;}
catch(cs){}
;return false;}
,getBoxSizing:function(){return qx.bom.Style.getPropertyName(f);}
,getInlineBlock:function(){var ct=document.createElement(bG);ct.style.display=bQ;if(ct.style.display==bQ){return bQ;}
;ct.style.display=cb;if(ct.style.display!==cb){return cb;}
;return null;}
,getOpacity:function(){return (typeof document.documentElement.style.opacity==u);}
,getTextShadow:function(){return !!qx.bom.Style.getPropertyName(R);}
,getFilterTextShadow:function(){return qx.bom.client.Css.__eD(L,W);}
,__eD:function(cx,cv){var cw=false;var cy=bC+cx+bH+cv+bL;var cu=document.createElement(o);document.body.appendChild(cu);cu.style.filter=cy;if(cu.filters&&cu.filters.length>0&&cu.filters.item(cx).enabled==true){cw=true;}
;document.body.removeChild(cu);return cw;}
,getAlphaImageLoaderNeeded:function(){return qx.bom.client.Engine.getName()==bP&&qx.bom.client.Browser.getDocumentMode()<9;}
,getPointerEvents:function(){var cz=document.documentElement;if(p in cz.style){var cB=cz.style.pointerEvents;cz.style.pointerEvents=S;cz.style.pointerEvents=b;var cA=cz.style.pointerEvents==S;cz.style.pointerEvents=cB;return cA;}
;return false;}
,getFlexboxSyntax:function(){var cD=null;var cC=document.createElement(d);var cE=[{value:M,syntax:M},{value:G,syntax:A},{value:bI,syntax:M}];for(var i=0;i<cE.length;i++ ){try{cC.style.display=cE[i].value;}
catch(cF){return null;}
;if(cC.style.display===cE[i].value){cD=cE[i].syntax;break;}
;}
;cC=null;return cD;}
},defer:function(cG){qx.core.Environment.add(bY,cG.getTextOverflow);qx.core.Environment.add(bT,cG.getPlaceholder);qx.core.Environment.add(h,cG.getBorderRadius);qx.core.Environment.add(E,cG.getBoxShadow);qx.core.Environment.add(bD,cG.getLinearGradient);qx.core.Environment.add(l,cG.getFilterGradient);qx.core.Environment.add(q,cG.getRadialGradient);qx.core.Environment.add(O,cG.getLegacyWebkitGradient);qx.core.Environment.add(C,cG.getBoxModel);qx.core.Environment.add(bK,cG.getRgba);qx.core.Environment.add(T,cG.getBorderImage);qx.core.Environment.add(c,cG.getBorderImageSyntax);qx.core.Environment.add(z,cG.getUserModify);qx.core.Environment.add(bF,cG.getUserSelect);qx.core.Environment.add(bU,cG.getUserSelectNone);qx.core.Environment.add(m,cG.getAppearance);qx.core.Environment.add(a,cG.getFloat);qx.core.Environment.add(bN,cG.getBoxSizing);qx.core.Environment.add(k,cG.getInlineBlock);qx.core.Environment.add(n,cG.getOpacity);qx.core.Environment.add(K,cG.getTextShadow);qx.core.Environment.add(y,cG.getFilterTextShadow);qx.core.Environment.add(N,cG.getAlphaImageLoaderNeeded);qx.core.Environment.add(r,cG.getPointerEvents);qx.core.Environment.add(P,cG.getFlexboxSyntax);}
});}
)();
(function(){var a="radiusTopRight",b="radiusTopLeft",c="px",d="-webkit-border-bottom-left-radius",e="-webkit-background-clip",f="radiusBottomRight",g="Integer",h="-webkit-border-bottom-right-radius",i="background-clip",j="border-top-left-radius",k="qx.debug",l="border-top-right-radius",m="border-bottom-left-radius",n="radiusBottomLeft",o="-webkit-border-top-left-radius",p="shorthand",q="-moz-border-radius-bottomright",r="padding-box",s="border-bottom-right-radius",t="qx.ui.decoration.MBorderRadius",u="-moz-border-radius-topright",v="engine.name",w="This decorator is already in-use. Modification is not possible anymore!",x="_applyBorderRadius",y="-webkit-border-top-right-radius",z="webkit",A="-moz-border-radius-topleft",B="-moz-border-radius-bottomleft";qx.Mixin.define(t,{properties:{radiusTopLeft:{nullable:true,check:g,apply:x},radiusTopRight:{nullable:true,check:g,apply:x},radiusBottomLeft:{nullable:true,check:g,apply:x},radiusBottomRight:{nullable:true,check:g,apply:x},radius:{group:[b,a,f,n],mode:p}},members:{_styleBorderRadius:function(C){C[e]=r;C[i]=r;var D=false;var E=this.getRadiusTopLeft();if(E>0){D=true;C[A]=E+c;C[o]=E+c;C[j]=E+c;}
;E=this.getRadiusTopRight();if(E>0){D=true;C[u]=E+c;C[y]=E+c;C[l]=E+c;}
;E=this.getRadiusBottomLeft();if(E>0){D=true;C[B]=E+c;C[d]=E+c;C[m]=E+c;}
;E=this.getRadiusBottomRight();if(E>0){D=true;C[q]=E+c;C[h]=E+c;C[s]=E+c;}
;if(D&&qx.core.Environment.get(v)==z){C[e]=r;}
else {C[i]=r;}
;}
,_applyBorderRadius:function(){if(qx.core.Environment.get(k)){if(this._isInitialized()){throw new Error(w);}
;}
;}
}});}
)();
(function(){var a="border-width",b="css.borderimage.standardsyntax",c="repeat",d="Boolean",e="-l",f="stretch",g="px ",h="sliceBottom",i="-t",j="Integer",k="solid",l="borderImage",m="-r",n="border-style",o="qx.debug",p="sliceLeft",q="-b",r="sliceRight",s="px",t="repeatX",u=" fill",v="String",w="vertical",x="",y="transparent",z="round",A='") ',B="shorthand",C="qx.ui.decoration.MBorderImage",D="sliceTop",E="horizontal",F="_applyBorderImage",G="border-color",H="This decorator is already in-use. Modification is not possible anymore!",I='url("',J=" ",K="grid",L="repeatY";qx.Mixin.define(C,{properties:{borderImage:{check:v,nullable:true,apply:F},sliceTop:{check:j,nullable:true,init:null,apply:F},sliceRight:{check:j,nullable:true,init:null,apply:F},sliceBottom:{check:j,nullable:true,init:null,apply:F},sliceLeft:{check:j,nullable:true,init:null,apply:F},slice:{group:[D,r,h,p],mode:B},repeatX:{check:[f,c,z],init:f,apply:F},repeatY:{check:[f,c,z],init:f,apply:F},repeat:{group:[t,L],mode:B},fill:{check:d,init:true,apply:F},borderImageMode:{check:[E,w,K],init:K}},members:{_styleBorderImage:function(M){if(!this.getBorderImage()){return;}
;var O=qx.util.AliasManager.getInstance().resolve(this.getBorderImage());var Q=qx.util.ResourceManager.getInstance().toUri(O);var T=this._getDefaultInsetsForBorderImage();var N=[T.top,T.right,T.bottom,T.left];var R=[this.getRepeatX(),this.getRepeatY()].join(J);var U=this.getFill()&&qx.core.Environment.get(b)?u:x;var P=qx.bom.Style.getPropertyName(l);if(P){var S=qx.bom.Style.getCssName(P);M[S]=I+Q+A+N.join(J)+U+J+R;}
;M[n]=k;M[G]=y;M[a]=N.join(g)+s;}
,_getDefaultInsetsForBorderImage:function(){if(!this.getBorderImage()){return {top:0,right:0,bottom:0,left:0};}
;var V=qx.util.AliasManager.getInstance().resolve(this.getBorderImage());var W=this.__eE(V);return {top:this.getSliceTop()||W[0],right:this.getSliceRight()||W[1],bottom:this.getSliceBottom()||W[2],left:this.getSliceLeft()||W[3]};}
,_applyBorderImage:function(){if(qx.core.Environment.get(o)){if(this._isInitialized()){throw new Error(H);}
;}
;}
,__eE:function(be){var bd=this.getBorderImageMode();var bf=0;var bb=0;var bc=0;var bg=0;var bh=/(.*)(\.[a-z]+)$/.exec(be);var X=bh[1];var ba=bh[2];var Y=qx.util.ResourceManager.getInstance();if(bd==K||bd==w){bf=Y.getImageHeight(X+i+ba);bc=Y.getImageHeight(X+q+ba);}
;if(bd==K||bd==E){bb=Y.getImageWidth(X+m+ba);bg=Y.getImageWidth(X+e+ba);}
;return [bf,bb,bc,bg];}
}});}
)();
(function(){var a=" 0",b="),to(",c="px",d="css.borderradius",e="from(",f=")",g="css.gradient.filter",h='background',j="orientation",k="filter",l="', ",m="0",n="_applyLinearBackgroundGradient",o="-webkit-gradient(linear,",p="%",q="qx.debug",r="background-color",s="deg, ",t="url(",u="css.gradient.legacywebkit",v="EndColorStr='#FF",w="startColor",x="shorthand",y="qx.theme",z="px 100%",A=") ",B="(GradientType=",C="vertical",D="",E="transparent",F="qx.ui.decoration.MLinearBackgroundGradient",G="% 100%",H="endColorPosition",I="canvas",J="(",K="css.gradient.linear",L="';)",M="endColor",N=", ",O="background",P="horizontal",Q="This decorator is already in-use. Modification is not possible anymore!",R="progid:DXImageTransform.Microsoft.Gradient",S="StartColorStr='#FF",T="100% ",U='2d',V="startColorPosition",W=" ",X="white",Y="colorPositionUnit",bd="linear-gradient",be='getOrderGradientsFront',bf=",";qx.Mixin.define(F,{properties:{startColor:{nullable:true,apply:n},endColor:{nullable:true,apply:n},orientation:{init:C,apply:n},startColorPosition:{init:0,apply:n},endColorPosition:{init:100,apply:n},colorPositionUnit:{init:p,apply:n},gradientStart:{group:[w,V],mode:x},gradientEnd:{group:[M,H],mode:x}},members:{_styleLinearBackgroundGradient:function(bg){var bi=[];if(!this.getStartColor()||!this.getEndColor()){return;}
;var bh=this.__eJ;if(qx.core.Environment.get(u)){bh=this.__eF;}
else if(qx.core.Environment.get(g)&&!qx.core.Environment.get(K)&&qx.core.Environment.get(d)){bh=this.__eG;}
else if(qx.core.Environment.get(g)&&!qx.core.Environment.get(K)){bh=this.__eI;}
;var bj=[w,M,Y,j,V,H];(function(bo,bq,bt,br,bk,bn){for(var i=0;i<bo.length;i++ ){var bw=this.__eK(bo[i]);var bp=this.__eK(bq[i]);var bx=bt[i];var bm=br[i];var bl=bk[i];var bu=bn[i];if(!bh(bw,bp,bx,bm,bl,bu,bg,bi)){break;}
;}
;if(O in bg){if(!qx.lang.Type.isArray(bg[h])){bg[h]=[bg[h]];}
;}
else {bg[h]=[];}
;var bs=be in this?this.getOrderGradientsFront():false;var bv=bs?Array.prototype.unshift:Array.prototype.push;bv.apply(bg[h],bi);}
).apply(this,this._getExtendedPropertyValueArrays(bj));}
,__eF:function(bH,bE,bI,bA,bz,bC,by,bD){bI=bI===c?D:bI;if(bA==P){var bG=bz+bI+a+bI;var bF=bC+bI+a+bI;}
else {var bG=m+bI+W+bz+bI;var bF=m+bI+W+bC+bI;}
;var bB=e+bH+b+bE+f;bD.push(o+bG+bf+bF+bf+bB+f);return true;}
,__eG:function bJ(bW,bQ,bY,bM,bL,bN,bK,bO){if(!bJ.__eH){bJ.__eH=document.createElement(I);}
;var bX=bM==C;var bP=bX?200:1;var bR=bX?1:200;var bS=Math.max(100,bN-bL);if(bY===c){if(bX){bP=Math.max(bP,bN-bL);}
else {bR=Math.max(bR,bN-bL);}
;}
else {if(bX){bP=Math.max(bP,(bN-bL)*2);}
else {bR=Math.max(bR,(bN-bL)*2);}
;}
;bJ.__eH.width=bR;bJ.__eH.height=bP;var bT=bJ.__eH.getContext(U);if(bX){var bV=bT.createLinearGradient(0,0,0,bP);}
else {var bV=bT.createLinearGradient(0,0,bR,0);}
;if(bY===p){bV.addColorStop(Math.max(0,bL)/bS,bW);bV.addColorStop(bN/bS,bQ);}
else {var bU=bX?bP:bR;bV.addColorStop(Math.max(0,bL)/bU,bW);bV.addColorStop(bN/bU,bQ);}
;bT.clearRect(0,0,bR,bP);bT.fillStyle=bV;bT.fillRect(0,0,bR,bP);var ca;if(bY===p){ca=bX?T+bS+p:bS+G;}
else {ca=bX?bP+z:T+bR+c;}
;bO.push(t+bJ.__eH.toDataURL()+A+ca);return true;}
,__eI:function(ci,ch,ck,cd,cc,ce,cb,cf){var cj=cd==P?1:0;if(!qx.util.ColorUtil.isHex6String(ci)){ci=qx.util.ColorUtil.stringToRgb(ci);ci=qx.util.ColorUtil.rgbToHexString(ci);}
;if(!qx.util.ColorUtil.isHex6String(ch)){ch=qx.util.ColorUtil.stringToRgb(ch);ch=qx.util.ColorUtil.rgbToHexString(ch);}
;ci=ci.substring(1,ci.length);ch=ch.substring(1,ch.length);var cg=R+B+cj+N+S+ci+l+v+ch+L;if(cb[k]){cb[k]+=N+cg;}
else {cb[k]=cg;}
;if(!cb[r]||cb[r]==E){cb[r]=X;}
;return false;}
,__eJ:function(cu,cr,cv,co,cm,cp,cl,cq){var cw=co==P?0:270;var cs=cu+W+cm+cv;var cn=cr+W+cp+cv;var ct=qx.core.Environment.get(K);if(ct===bd){cw=co==P?cw+90:cw-90;}
;cq.push(ct+J+cw+s+cs+bf+cn+f);return true;}
,__eK:function(cx){return qx.core.Environment.get(y)?qx.theme.manager.Color.getInstance().resolve(cx):cx;}
,_applyLinearBackgroundGradient:function(){if(qx.core.Environment.get(q)){if(this._isInitialized()){throw new Error(Q);}
;}
;}
}});}
)();
(function(){var a="_applyBoxShadow",b="shadowHorizontalLength",c="shadowBlurRadius",d="shadowColor",e="This decorator is already in-use. Modification is not possible anymore!",f="qx.debug",g="qx.theme",h="shadowSpreadRadius",j="px ",k='',l="css.boxshadow",m="shadowVerticalLength",n="shorthand",o="qx.ui.decoration.MBoxShadow",p="inset",q='inset ',r="black",s=",";qx.Mixin.define(o,{properties:{shadowHorizontalLength:{nullable:true,apply:a},shadowVerticalLength:{nullable:true,apply:a},shadowBlurRadius:{nullable:true,apply:a},shadowSpreadRadius:{nullable:true,apply:a},shadowColor:{nullable:true,apply:a},inset:{init:false,apply:a},shadowLength:{group:[b,m],mode:n}},members:{_styleBoxShadow:function(t){var v=qx.core.Environment.get(l);if(!v||this.getShadowVerticalLength()==null&&this.getShadowHorizontalLength()==null){return;}
;v=qx.bom.Style.getCssName(v);var u=null;if(qx.core.Environment.get(g)){u=qx.theme.manager.Color.getInstance();}
;var w=[m,b,c,h,d,p];(function(A,I,C,y,x,D){for(var i=0;i<A.length;i++ ){var H=A[i]||0;var z=I[i]||0;var blur=C[i]||0;var G=y[i]||0;var E=x[i]||r;var F=D[i];if(u){E=u.resolve(E);}
;if(E!=null){var B=(F?q:k)+z+j+H+j+blur+j+G+j+E;if(!t[v]){t[v]=B;}
else {t[v]+=s+B;}
;}
;}
;}
).apply(this,this._getExtendedPropertyValueArrays(w));}
,_applyBoxShadow:function(){if(qx.core.Environment.get(f)){if(this._isInitialized()){throw new Error(e);}
;}
;}
}});}
)();
(function(){var a="transitionDelay",b="transitionProperty",c="This decorator is already in-use. Modification is not possible anymore!",d="qx.debug",e='0s',f="chrome",g="transitionDuration",h="css.transition",j='ease',k='all',l="transitionTimingFunction",m="qx.ui.decoration.MTransition",n="_applyTransition",o=' ',p="translateZ(0)",q=",";qx.Mixin.define(m,{properties:{transitionProperty:{nullable:true,apply:n},transitionDuration:{nullable:true,apply:n},transitionTimingFunction:{nullable:true,apply:n},transitionDelay:{nullable:true,apply:n}},members:{_styleTransition:function(r){var t=qx.core.Environment.get(h);if(!t||this.getTransitionDuration()==null){return;}
;if(qx.bom.client.Browser.getName()===f&&qx.bom.client.Browser.getVersion()>=71){if(!r.transform){r.transform=p;}
;}
;t=qx.bom.Style.getCssName(t.name);var s=[b,g,l,a];(function(z,B,w,A){for(var i=0;i<z.length;i++ ){var v=z[i]||k;var u=B[i]||e;var C=w[i]||j;var y=A[i]||e;var x=v+o+u+o+C+o+y;if(!r[t]){r[t]=x;}
else {r[t]+=q+x;}
;}
;}
).apply(this,this._getExtendedPropertyValueArrays(s));}
,_applyTransition:function(){if(qx.core.Environment.get(d)){if(this._isInitialized()){throw new Error(c);}
;}
;}
}});}
)();
(function(){var a=', ',b="qx.ui.decoration.Decorator",c="_style",d="_getDefaultInsetsFor",e="left",f="top",g="bottom",h="right";qx.Class.define(b,{extend:qx.ui.decoration.Abstract,implement:[qx.ui.decoration.IDecorator],include:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderImage,qx.ui.decoration.MTransition],members:{__dq:false,getPadding:function(){var l=this.getInset();var j=this._getDefaultInsetsForBorderImage();var o=l.top-(j.top?j.top:this.getWidthTop());var n=l.right-(j.right?j.right:this.getWidthRight());var k=l.bottom-(j.bottom?j.bottom:this.getWidthBottom());var m=l.left-(j.left?j.left:this.getWidthLeft());return {top:l.top?o:this.getInnerWidthTop(),right:l.right?n:this.getInnerWidthRight(),bottom:l.bottom?k:this.getInnerWidthBottom(),left:l.left?m:this.getInnerWidthLeft()};}
,getStyles:function(s){if(s){return this._getStyles();}
;var r={};var q=this._getStyles();for(var p in q){r[qx.lang.String.camelCase(p)]=q[p];}
;return r;}
,_getStyles:function(){var t={};for(var name in this){if(name.indexOf(c)==0&&this[name] instanceof Function){this[name](t);}
;}
;for(var name in t){if(qx.lang.Type.isArray(t[name])){t[name]=t[name].join(a);}
;}
;this.__dq=true;return t;}
,_getDefaultInsets:function(){var x=[f,h,g,e];var v={};for(var name in this){if(name.indexOf(d)==0&&this[name] instanceof Function){var w=this[name]();for(var i=0;i<x.length;i++ ){var u=x[i];if(v[u]==undefined){v[u]=w[u];}
;if(w[u]>v[u]){v[u]=w[u];}
;}
;}
;}
;if(v[f]!=undefined){return v;}
;return {top:0,right:0,bottom:0,left:0};}
,_isInitialized:function(){return this.__dq;}
,_getExtendedPropertyValueArrays:function(A){var z=A.map(function(B){var C=this.get(B);if(!qx.lang.Type.isArray(C)){C=[C];}
;return C;}
,this);var y=Math.max.apply(Math,z.map(function(D){return D.length;}
));for(var i=0;i<z.length;i++ ){this.__eL(z[i],y);}
;return z;}
,__eL:function(F,E){var G=F.length;while(F.length<E){F.push(F[F.length%G]);}
;}
}});}
)();
(function(){var a="_applyTheme",b="qx.theme.manager.Font",c="_dynamic",d="Theme",e="changeTheme",f="singleton";qx.Class.define(b,{type:f,extend:qx.util.ValueManager,implement:[qx.core.IDisposable],construct:function(){qx.util.ValueManager.call(this);if(qx.$$fontBootstrap){this._manifestFonts=qx.$$fontBootstrap;delete qx.$$fontBootstrap;}
;}
,properties:{theme:{check:d,nullable:true,apply:a,event:e}},members:{_manifestFonts:null,resolveDynamic:function(h){var g=this._dynamic;return h instanceof qx.bom.Font?h:g[h];}
,resolve:function(k){var j=this._dynamic;var i=j[k];if(i){return i;}
;var l=this.getTheme();if(l!==null&&l.fonts[k]){var m=this.__eN(l.fonts[k]);var n=(new m);if(l.fonts[k].comparisonString){n.setComparisonString(l.fonts[k].comparisonString);}
;return j[k]=n.set(l.fonts[k]);}
;return k;}
,isDynamic:function(r){var q=this._dynamic;if(r&&(r instanceof qx.bom.Font||q[r]!==undefined)){return true;}
;var p=this.getTheme();if(p!==null&&r&&p.fonts[r]){var o=this.__eN(p.fonts[r]);var s=(new o);if(p.fonts[r].comparisonString){s.setComparisonString(p.fonts[r].comparisonString);}
;q[r]=s.set(p.fonts[r]);return true;}
;return false;}
,__eM:function(u,t){if(u[t].include){var v=u[u[t].include];u[t].include=null;delete u[t].include;u[t]=qx.lang.Object.mergeWith(u[t],v,false);this.__eM(u,t);}
;}
,_applyTheme:function(x){var w=this._dynamic;for(var z in w){if(w[z].themed){w[z].dispose();delete w[z];}
;}
;if(x){var y=this._manifestFonts?Object.assign(x.fonts,this._manifestFonts):x.fonts;for(var z in y){if(y[z].include&&y[y[z].include]){this.__eM(y,z);}
;var A=this.__eN(y[z]);var B=(new A);if(y[z].comparisonString){B.setComparisonString(y[z].comparisonString);}
;w[z]=B.set(y[z]);w[z].themed=true;}
;}
;this._setDynamic(w);}
,__eN:function(C){if(C.sources){return qx.bom.webfonts.WebFont;}
;return qx.bom.Font;}
},destruct:function(){this._disposeMap(c);}
});}
)();
(function(){var a="Boolean",b="px",c="_applyItalic",d="_applyBold",e="underline",f="_applyTextShadow",g="Integer",h="string",j="_applyLineHeight",k='"',m="Array",n="line-through",o="_applyFamily",p="overline",q="Color",r="String",s="",t="italic",u="_applyWeight",v="normal",w="qx.bom.Font",x="bold",y="Number",z="_applyDecoration",A=" ",B="_applySize",C=",",D="_applyColor";qx.Class.define(w,{extend:qx.core.Object,construct:function(F,E){qx.core.Object.call(this);this.__eO={fontFamily:s,fontSize:null,fontWeight:null,fontStyle:null,textDecoration:null,lineHeight:null,color:null,textShadow:null};if(F!==undefined){this.setSize(F);}
;if(E!==undefined){this.setFamily(E);}
;}
,statics:{fromString:function(J){var K=new qx.bom.Font();var H=J.split(/\s+/);var name=[];var I;for(var i=0;i<H.length;i++ ){switch(I=H[i]){case x:K.setBold(true);break;case t:K.setItalic(true);break;case e:K.setDecoration(e);break;default:var G=parseInt(I,10);if(G==I||qx.lang.String.contains(I,b)){K.setSize(G);}
else {name.push(I);}
;break;};}
;if(name.length>0){K.setFamily(name);}
;return K;}
,fromConfig:function(M){var L=new qx.bom.Font;L.set(M);return L;}
,__eP:{fontFamily:s,fontSize:s,fontWeight:s,fontStyle:s,textDecoration:s,lineHeight:1.2,color:s,textShadow:s},getDefaultStyles:function(){return this.__eP;}
},properties:{size:{check:g,nullable:true,apply:B},lineHeight:{check:y,nullable:true,apply:j},comparisonString:{check:r,init:null,nullable:true},version:{check:function(N){return N===null||(typeof N===h&&/^[a-zA-Z0-9.-]+$/.test(N));}
,init:null,nullable:true},family:{check:m,nullable:true,apply:o},bold:{check:a,nullable:true,apply:d},italic:{check:a,nullable:true,apply:c},decoration:{check:[e,n,p],nullable:true,apply:z},color:{check:q,nullable:true,apply:D},textShadow:{nullable:true,check:r,apply:f},weight:{nullable:true,check:r,apply:u}},members:{__eO:null,_applySize:function(P,O){this.__eO.fontSize=P===null?null:P+b;}
,_applyLineHeight:function(R,Q){this.__eO.lineHeight=R===null?null:R;}
,_applyFamily:function(S,T){var U=s;for(var i=0,l=S.length;i<l;i++ ){if(S[i].indexOf(A)>0){U+=k+S[i]+k;}
else {U+=S[i];}
;if(i!==l-1){U+=C;}
;}
;this.__eO.fontFamily=U;}
,_applyBold:function(W,V){this.__eO.fontWeight=W==null?null:W?x:v;}
,_applyItalic:function(Y,X){this.__eO.fontStyle=Y==null?null:Y?t:v;}
,_applyDecoration:function(bb,ba){this.__eO.textDecoration=bb==null?null:bb;}
,_applyColor:function(bd,bc){this.__eO.color=null;if(bd){this.__eO.color=qx.theme.manager.Color.getInstance().resolve(bd);}
;}
,_applyWeight:function(bf,be){this.__eO.fontWeight=bf;}
,_applyTextShadow:function(bh,bg){this.__eO.textShadow=bh==null?null:bh;}
,getStyles:function(){return this.__eO;}
}});}
)();
(function(){var a="qx.bom.webfonts.WebFont",b="",c="qx.debug",d="changeStatus",e="_applySources",f="qx.event.type.Data",g=" was not applied, perhaps the source file could not be loaded.",h="WebFont ";qx.Class.define(a,{extend:qx.bom.Font,events:{"changeStatus":f},properties:{sources:{nullable:true,apply:e}},members:{__eQ:null,_applySources:function(m,o){var j=[];for(var i=0,l=m.length;i<l;i++ ){var k=this._quoteFontFamily(m[i].family);j.push(k);var n=m[i];n.comparisonString=this.getComparisonString();n.version=this.getVersion();qx.bom.webfonts.Manager.getInstance().require(k,n,this._onWebFontChangeStatus,this);}
;this.setFamily(j.concat(this.getFamily()));}
,_onWebFontChangeStatus:function(p){var q=p.getData();this.fireDataEvent(d,q);if(qx.core.Environment.get(c)){if(q.valid===false){this.warn(h+q.family+g);}
;}
;}
,_quoteFontFamily:function(r){return r.replace(/["']/g,b);}
}});}
)();
(function(){var a="m",b="os.name",c="woff2",d="(.*font-weight: *",e=")",f="os.version",g="qx.bom.webfonts.Manager",h=".*font-style: *",k="svg",n="#",o="browser.name",p="singleton",q=",\n",r="(.*font-style: *",s="src: ",t="mobileSafari",u="\nfont-style: ",v="');",w="qx.debug",x="interval",y="'eot)",z="chrome",A="firefox",B="!",C="eot",D="ios",E="changeStatus",F="Couldn't create @font-face rule for WebFont ",G="}\n",H="font-family: ",I="browser.documentmode",J="mobile safari",K="safari",L=")|",M="@font-face.*?",N=";",O="",P="ttf",Q="_",R="') format('svg')",S=";\n",T="('embedded-opentype')",U="browser.version",V="opera",W="engine.version",X="') format('woff')",Y="') format('woff2')",bz="normal",bA="mshtml",bB="engine.name",bv="url('",bw="src: url('",bx="('embedded-opentype)",by="\nfont-weight: ",bF="?",bG="edge",bH="|",bL=".*font-weight: *",bC="?#iefix') format('embedded-opentype')",bD="woff",bE="ie",bt="\.(",bI="'eot')",bu="Error while adding @font-face rule:",bJ="@font-face {",bK="') format('truetype')";qx.Class.define(g,{extend:qx.core.Object,type:p,construct:function(){qx.core.Object.call(this);this.__eR=[];this.__eS={};this.__eT=[];this.__eU=this.getPreferredFormats();}
,statics:{FONT_FORMATS:[C,c,bD,P,k],VALIDATION_TIMEOUT:5000},members:{__eR:null,__eV:null,__eS:null,__eU:null,__eT:null,__eW:null,require:function(bQ,bW,bX,bV){var bP=bW.source;var bO=bW.comparisonString;var bS=bW.version;var bR=bW.fontWeight;var bN=bW.fontStyle;var bT=[];for(var i=0,l=bP.length;i<l;i++ ){var bU=bP[i].split(n);var bM=qx.util.ResourceManager.getInstance().toUri(bU[0]);if(bU.length>1){bM=bM+n+bU[1];}
;bT.push(bM);}
;if(qx.core.Environment.get(bB)==bA&&(parseInt(qx.core.Environment.get(W))<9||qx.core.Environment.get(I)<9)){if(!this.__eW){this.__eW=new qx.event.Timer(100);this.__eW.addListener(x,this.__fa,this);}
;if(!this.__eW.isEnabled()){this.__eW.start();}
;this.__eT.push([bQ,bT,bR,bN,bO,bS,bX,bV]);}
else {this.__eY(bQ,bT,bR,bN,bO,bS,bX,bV);}
;}
,remove:function(cb,cc,cd){var ca=this.__eX(cb,cc,cd);var bY=null;for(var i=0,l=this.__eR.length;i<l;i++ ){if(this.__eR[i]==ca){bY=i;this.__fg(cb,cc,cd);break;}
;}
;if(bY!==null){qx.lang.Array.removeAt(this.__eR,bY);}
;if(cb in this.__eS){this.__eS[cb].dispose();delete this.__eS[cb];}
;}
,getPreferredFormats:function(){var ce=[];var ci=qx.core.Environment.get(o);var cf=qx.core.Environment.get(U);var ch=qx.core.Environment.get(b);var cg=qx.core.Environment.get(f);if((ci==bG&&cf>=14)||(ci==A&&cf>=69)||(ci==z&&cf>=36)){ce.push(c);}
;if((ci==bE&&qx.core.Environment.get(I)>=9)||(ci==bG&&cf>=12)||(ci==A&&cf>=3.6)||(ci==z&&cf>=6)){ce.push(bD);}
;if((ci==bG&&cf>=12)||(ci==V&&cf>=10)||(ci==K&&cf>=3.1)||(ci==A&&cf>=3.5)||(ci==z&&cf>=4)||(ci==J&&ch==D&&cg>=4.2)){ce.push(P);}
;if(ci==bE&&cf>=4){ce.push(C);}
;if(ci==t&&ch==D&&cg>=4.1){ce.push(k);}
;return ce;}
,removeStyleSheet:function(){this.__eR=[];if(this.__eV){qx.bom.Stylesheet.removeSheet(this.__eV);}
;this.__eV=null;}
,__eX:function(ck,cj,cm){var cl=ck+Q+(cj?cj:bz)+Q+(cm?cm:bz);return cl;}
,__eY:function(cr,cq,ct,co,cp,cu,cx,cw){var cv=this.__eX(cr,ct,co);if(!this.__eR.includes(cv)){var cy=this.__fc(cq);var cs=this.__fd(cr,ct,co,cy,cu);if(!cs){throw new Error(F+cr+B);}
;if(!this.__eV){this.__eV=qx.bom.Stylesheet.createElement();}
;try{this.__ff(cs);}
catch(cz){if(qx.core.Environment.get(w)){this.warn(bu,cz.message);return;}
;}
;this.__eR.push(cv);}
;if(!this.__eS[cr]){this.__eS[cr]=new qx.bom.webfonts.Validator(cr,cp);this.__eS[cr].setTimeout(qx.bom.webfonts.Manager.VALIDATION_TIMEOUT);this.__eS[cr].addListenerOnce(E,this.__fb,this);}
;if(cx){var cn=cw||window;this.__eS[cr].addListenerOnce(E,cx,cn);}
;this.__eS[cr].validate();}
,__fa:function(){if(this.__eT.length==0){this.__eW.stop();return;}
;var cA=this.__eT.shift();this.__eY.apply(this,cA);}
,__fb:function(cB){var cC=cB.getData();if(cC.valid===false){qx.event.Timer.once(function(){this.remove(cC.family);}
,this,250);}
;}
,__fc:function(cD){var cF=qx.bom.webfonts.Manager.FONT_FORMATS;var cE={};var cH=new RegExp(bt+cF.join(bH)+e);for(var i=0,l=cD.length;i<l;i++ ){var cI=cH.exec(cD[i]);if(cI){var cG=cI[1];cE[cG]=cD[i];}
;}
;return cE;}
,__fd:function(cN,cJ,cQ,cR,cL){var cP=[];var cK=this.__eU.length>0?this.__eU:qx.bom.webfonts.Manager.FONT_FORMATS;for(var i=0,l=cK.length;i<l;i++ ){var cM=cK[i];if(cR[cM]){cP.push(this.__fe(cM,cR[cM],cL));}
;}
;var cO=s+cP.join(q)+N;cO=H+cN+S+cO;cO=cO+u+(cQ?cQ:bz)+N;cO=cO+by+(cJ?cJ:bz)+N;return cO;}
,__fe:function(cU,cS,cT){if(cT){cS+=bF+cT;}
;switch(cU){case C:return bv+cS+v+bw+cS+bC;case c:return bv+cS+Y;case bD:return bv+cS+X;case P:return bv+cS+bK;case k:return bv+cS+R;default:return null;};}
,__ff:function(cW){var cV=bJ+cW+G;if(qx.core.Environment.get(o)==bE&&qx.core.Environment.get(I)<9){var cX=this.__fh(this.__eV.cssText);cX+=cV;this.__eV.cssText=cX;}
else {this.__eV.insertRule(cV,this.__eV.cssRules.length);}
;}
,__fg:function(dd,de,cY){var dc=M+dd+r+(cY?cY:bz)+bL+(de?de:bz)+L+d+(de?de:bz)+h+(cY?cY:bz)+e;var df=new RegExp(dc,a);for(var i=0,l=document.styleSheets.length;i<l;i++ ){var da=document.styleSheets[i];if(da.cssText){var db=da.cssText.replace(/\n/g,O).replace(/\r/g,O);db=this.__fh(db);if(df.exec(db)){db=db.replace(df,O);}
;da.cssText=db;}
else if(da.cssRules){for(var j=0,m=da.cssRules.length;j<m;j++ ){var db=da.cssRules[j].cssText.replace(/\n/g,O).replace(/\r/g,O);if(df.exec(db)){this.__eV.deleteRule(j);return;}
;}
;}
;}
;}
,__fh:function(dg){return dg.replace(y,bI).replace(bx,T);}
},destruct:function(){if(this.__eW){this.__eW.stop();this.__eW.dispose();}
;delete this.__eR;this.removeStyleSheet();for(var dh in this.__eS){this.__eS[dh].dispose();}
;qx.bom.webfonts.Validator.removeDefaultHelperElements();}
});}
)();
(function(){var a="sans-serif",b="changeStatus",c="Integer",d="auto",e="qx.event.type.Data",f="0",g="qx.bom.webfonts.Validator",h="interval",i="Georgia",j="WEei",k="visible",l="Times New Roman",m="Arial",n="normal",o="Helvetica",p="350px",q="_applyFontFamily",r="__fo",s="-1000px",t="hidden",u="serif",v="span",w="absolute",x=",";qx.Class.define(g,{extend:qx.core.Object,construct:function(y,z){qx.core.Object.call(this);if(z){this.setComparisonString(z);}
;if(y){this.setFontFamily(y);this.__fl=this._getRequestedHelpers();}
;}
,statics:{COMPARISON_FONTS:{sans:[m,o,a],serif:[l,i,u]},HELPER_CSS:{position:w,margin:f,padding:f,top:s,left:s,fontSize:p,width:d,height:d,lineHeight:n,fontVariant:n,visibility:t},COMPARISON_STRING:j,__fm:null,__fn:null,removeDefaultHelperElements:function(){var A=qx.bom.webfonts.Validator.__fn;if(A){for(var B in A){document.body.removeChild(A[B]);}
;}
;delete qx.bom.webfonts.Validator.__fn;}
},properties:{fontFamily:{nullable:true,init:null,apply:q},comparisonString:{nullable:true,init:null},timeout:{check:c,init:5000}},events:{"changeStatus":e},members:{__fl:null,__fo:null,__fp:null,validate:function(){this.__fp=new Date().getTime();if(this.__fo){this.__fo.restart();}
else {this.__fo=new qx.event.Timer(100);this.__fo.addListener(h,this.__fr,this);qx.event.Timer.once(function(){this.__fo.start();}
,this,0);}
;}
,_reset:function(){if(this.__fl){for(var D in this.__fl){var C=this.__fl[D];document.body.removeChild(C);}
;this.__fl=null;}
;}
,_isFontValid:function(){if(!qx.bom.webfonts.Validator.__fm){this.__fq();}
;if(!this.__fl){this.__fl=this._getRequestedHelpers();}
;this.__fl.sans.style.visibility=k;this.__fl.sans.style.visibility=t;this.__fl.serif.style.visibility=k;this.__fl.serif.style.visibility=t;var F=qx.bom.element.Dimension.getWidth(this.__fl.sans);var E=qx.bom.element.Dimension.getWidth(this.__fl.serif);var G=qx.bom.webfonts.Validator;if(F!==G.__fm.sans||E!==G.__fm.serif){return true;}
;return false;}
,_getRequestedHelpers:function(){var H=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.sans);var I=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.serif);return {sans:this._getHelperElement(H,this.getComparisonString()),serif:this._getHelperElement(I,this.getComparisonString())};}
,_getHelperElement:function(J,L){var K=qx.lang.Object.clone(qx.bom.webfonts.Validator.HELPER_CSS);if(J){if(K.fontFamily){K.fontFamily+=x+J.join(x);}
else {K.fontFamily=J.join(x);}
;}
;var M=document.createElement(v);M.innerHTML=L||qx.bom.webfonts.Validator.COMPARISON_STRING;qx.bom.element.Style.setStyles(M,K);document.body.appendChild(M);return M;}
,_applyFontFamily:function(O,N){if(O!==N){this._reset();}
;}
,__fq:function(){var P=qx.bom.webfonts.Validator;if(!P.__fn){P.__fn={sans:this._getHelperElement(P.COMPARISON_FONTS.sans),serif:this._getHelperElement(P.COMPARISON_FONTS.serif)};}
;P.__fm={sans:qx.bom.element.Dimension.getWidth(P.__fn.sans),serif:qx.bom.element.Dimension.getWidth(P.__fn.serif)};}
,__fr:function(){if(this._isFontValid()){this.__fo.stop();this._reset();this.fireDataEvent(b,{family:this.getFontFamily(),valid:true});}
else {var Q=new Date().getTime();if(Q-this.__fp>=this.getTimeout()){this.__fo.stop();this._reset();this.fireDataEvent(b,{family:this.getFontFamily(),valid:false});}
;}
;}
},destruct:function(){this._reset();this.__fo.stop();this.__fo.removeListener(h,this.__fr,this);this._disposeObjects(r);}
});}
)();
(function(){var a="mshtml",b="engine.name",c="qx.bom.element.Dimension",d="0px",e="paddingRight",f="paddingLeft",g="opera",h="paddingBottom",i="paddingTop",j="overflowX",k="overflowY";qx.Bootstrap.define(c,{statics:{getWidth:function(m){var l=m.getBoundingClientRect();return Math.round(l.right-l.left);}
,getHeight:function(o){var n=o.getBoundingClientRect();return Math.round(n.bottom-n.top);}
,getSize:function(p){return {width:this.getWidth(p),height:this.getHeight(p)};}
,__fs:{visible:true,hidden:true},getContentWidth:function(t){var q=qx.bom.element.Style;var r=qx.bom.element.Style.get(t,j);var s=parseInt(q.get(t,f)||d,10);var w=parseInt(q.get(t,e)||d,10);if(this.__fs[r]){var v=t.clientWidth;if((qx.core.Environment.get(b)==g)||qx.dom.Node.isBlockNode(t)){v=v-s-w;}
;if(qx.core.Environment.get(b)==a){if(v===0&&t.offsetHeight===0){return t.offsetWidth;}
;}
;return v;}
else {if(t.clientWidth>=t.scrollWidth){return Math.max(t.clientWidth,t.scrollWidth)-s-w;}
else {var u=t.scrollWidth-s;if(qx.core.Environment.get(b)==a){u-=w;}
;return u;}
;}
;}
,getContentHeight:function(B){var x=qx.bom.element.Style;var A=qx.bom.element.Style.get(B,k);var z=parseInt(x.get(B,i)||d,10);var y=parseInt(x.get(B,h)||d,10);if(this.__fs[A]){return B.clientHeight-z-y;}
else {if(B.clientHeight>=B.scrollHeight){return Math.max(B.clientHeight,B.scrollHeight)-z-y;}
else {return B.scrollHeight-z;}
;}
;}
,getContentSize:function(C){return {width:this.getContentWidth(C),height:this.getContentHeight(C)};}
}});}
)();
(function(){var a="This client does not support the boxSizing value",b="border-box",c="qx.bom.element.BoxSizing",d="css.boxsizing",e="",f="This client does not support dynamic modification of the boxSizing property.",g="qx.debug",h="boxSizing",i="content-box",j=":",k=";";qx.Bootstrap.define(c,{statics:{__ft:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__fu:function(m){var l=this.__ft;return l.tags[m.tagName.toLowerCase()]||l.types[m.type];}
,compile:function(n){if(qx.core.Environment.get(d)){var o=qx.bom.Style.getCssName(qx.core.Environment.get(d));return o+j+n+k;}
else {if(qx.core.Environment.get(g)){qx.log.Logger.warn(this,f);qx.log.Logger.trace();}
;}
;}
,get:function(p){if(qx.core.Environment.get(d)){return qx.bom.element.Style.get(p,h,null,false)||e;}
;if(qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(p))){if(!this.__fu(p)){return i;}
;}
;return b;}
,set:function(r,q){if(qx.core.Environment.get(d)){try{r.style[qx.core.Environment.get(d)]=q;}
catch(s){if(qx.core.Environment.get(g)){qx.log.Logger.warn(this,a,q);}
;}
;}
else {if(qx.core.Environment.get(g)){qx.log.Logger.warn(this,f);}
;}
;}
,reset:function(t){this.set(t,e);}
}});}
)();
(function(){var a="cursor:",b="engine.name",c="",d="mshtml",e="nw-resize",f="engine.version",g="nesw-resize",h="browser.documentmode",i=";",j="nwse-resize",k="qx.bom.element.Cursor",l="ne-resize",m="browser.quirksmode",n="cursor";qx.Bootstrap.define(k,{statics:{__fv:{},compile:function(o){return a+(this.__fv[o]||o)+i;}
,get:function(q,p){return qx.bom.element.Style.get(q,n,p,false);}
,set:function(s,r){s.style.cursor=this.__fv[r]||r;}
,reset:function(t){t.style.cursor=c;}
},defer:function(u){if(qx.core.Environment.get(b)==d&&((parseFloat(qx.core.Environment.get(f))<9||qx.core.Environment.get(h)<9)&&!qx.core.Environment.get(m))){u.__fv[g]=l;u.__fv[j]=e;}
;}
});}
)();
(function(){var a="engine.name",b=");",c="",d=")",e="zoom:1;filter:alpha(opacity=",f="qx.bom.element.Opacity",g="css.opacity",h=";",i="opacity:",j="alpha(opacity=",k="opacity",l="filter";qx.Bootstrap.define(f,{statics:{compile:qx.core.Environment.select(a,{"mshtml":function(m){if(m>=1){m=1;}
;if(m<0.00001){m=0;}
;if(qx.core.Environment.get(g)){return i+m+h;}
else {return e+(m*100)+b;}
;}
,"default":function(n){return i+n+h;}
}),set:qx.core.Environment.select(a,{"mshtml":function(q,o){if(qx.core.Environment.get(g)){q.style.opacity=o;}
else {var p=qx.bom.element.Style.get(q,l,qx.bom.element.Style.COMPUTED_MODE,false);if(o>=1){o=1;}
;if(o<0.00001){o=0;}
;if(!q.currentStyle||!q.currentStyle.hasLayout){q.style.zoom=1;}
;q.style.filter=p.replace(/alpha\([^\)]*\)/gi,c)+j+o*100+d;}
;}
,"default":function(s,r){s.style.opacity=r;}
}),reset:qx.core.Environment.select(a,{"mshtml":function(u){if(qx.core.Environment.get(g)){u.style.opacity=c;}
else {var t=qx.bom.element.Style.get(u,l,qx.bom.element.Style.COMPUTED_MODE,false);u.style.filter=t.replace(/alpha\([^\)]*\)/gi,c);}
;}
,"default":function(v){v.style.opacity=c;}
}),get:qx.core.Environment.select(a,{"mshtml":function(z,y){if(qx.core.Environment.get(g)){var w=qx.bom.element.Style.get(z,k,y,false);if(w!=null){return parseFloat(w);}
;return 1.0;}
else {var x=qx.bom.element.Style.get(z,l,y,false);if(x){var w=x.match(/alpha\(opacity=(.*)\)/);if(w&&w[1]){return parseFloat(w[1])/100;}
;}
;return 1.0;}
;}
,"default":function(C,B){var A=qx.bom.element.Style.get(C,k,B,false);if(A!=null){return parseFloat(A);}
;return 1.0;}
})}});}
)();
(function(){var a="clip:auto;",b="rect(",c=")",d=");",e="",f="px",g="Could not parse clip string: ",h="qx.bom.element.Clip",i="string",j="clip:rect(",k=" ",l="clip",m="rect(auto,auto,auto,auto)",n="rect(auto, auto, auto, auto)",o="auto",p=",";qx.Bootstrap.define(h,{statics:{compile:function(q){if(!q){return a;}
;var v=q.left;var top=q.top;var u=q.width;var t=q.height;var r,s;if(v==null){r=(u==null?o:u+f);v=o;}
else {r=(u==null?o:v+u+f);v=v+f;}
;if(top==null){s=(t==null?o:t+f);top=o;}
else {s=(t==null?o:top+t+f);top=top+f;}
;return j+top+p+r+p+s+p+v+d;}
,get:function(z,D){var x=qx.bom.element.Style.get(z,l,D,false);var C,top,A,E;var w,y;if(typeof x===i&&x!==o&&x!==e){x=x.trim();if(/\((.*)\)/.test(x)){var F=RegExp.$1;if(/,/.test(F)){var B=F.split(p);}
else {var B=F.split(k);}
;top=B[0].trim();w=B[1].trim();y=B[2].trim();C=B[3].trim();if(C===o){C=null;}
;if(top===o){top=null;}
;if(w===o){w=null;}
;if(y===o){y=null;}
;if(top!=null){top=parseInt(top,10);}
;if(w!=null){w=parseInt(w,10);}
;if(y!=null){y=parseInt(y,10);}
;if(C!=null){C=parseInt(C,10);}
;if(w!=null&&C!=null){A=w-C;}
else if(w!=null){A=w;}
;if(y!=null&&top!=null){E=y-top;}
else if(y!=null){E=y;}
;}
else {throw new Error(g+x);}
;}
;return {left:C||null,top:top||null,width:A||null,height:E||null};}
,set:function(L,G){if(!G){L.style.clip=m;return;}
;var M=G.left;var top=G.top;var K=G.width;var J=G.height;var H,I;if(M==null){H=(K==null?o:K+f);M=o;}
else {H=(K==null?o:M+K+f);M=M+f;}
;if(top==null){I=(J==null?o:J+f);top=o;}
else {I=(J==null?o:top+J+f);top=top+f;}
;L.style.clip=b+top+p+H+p+I+p+M+c;}
,reset:function(N){N.style.clip=n;}
}});}
)();
(function(){var a="css.float",b='cssFloat',c="px",d="Cascaded styles are not supported in this browser!",e="css.appearance",f="pixelRight",g="css.userselect",h="css.boxsizing",i="css.textoverflow",j="qx.debug",k="pixelHeight",l=":",m="pixelTop",n="css.borderimage",o="Invalid argument 'name'",p="pixelLeft",q="css.usermodify",r="qx.bom.element.Style",s="Invalid argument 'smart'",t="",u="pixelBottom",v="Invalid argument 'styles'",w="pixelWidth",x='float',y=";",z="\"\"",A="Invalid argument 'element'",B="style";qx.Bootstrap.define(r,{statics:{__fw:null,__fx:null,__fy:function(){var D={"appearance":qx.core.Environment.get(e),"userSelect":qx.core.Environment.get(g),"textOverflow":qx.core.Environment.get(i),"borderImage":qx.core.Environment.get(n),"float":qx.core.Environment.get(a),"userModify":qx.core.Environment.get(q),"boxSizing":qx.core.Environment.get(h)};this.__fx={};for(var C in qx.lang.Object.clone(D)){if(!D[C]){delete D[C];}
else {if(C===x){this.__fx[b]=C;}
else {this.__fx[C]=qx.bom.Style.getCssName(D[C]);}
;}
;}
;this.__fw=D;}
,__fz:function(name){var E=qx.bom.Style.getPropertyName(name);if(E){this.__fw[name]=E;}
;return E;}
,__fA:{width:w,height:k,left:p,right:f,top:m,bottom:u},__fB:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing},compile:function(F){var I=[];var J=this.__fB;var H=this.__fx;var name,G;for(name in F){G=F[name];if(G==null){continue;}
;name=this.__fx[name]||name;if(J[name]){I.push(J[name].compile(G));}
else {if(!H[name]){H[name]=qx.bom.Style.getCssName(name);}
;I.push(H[name],l,G===t?z:G,y);}
;}
;return I.join(t);}
,setCss:function(L,K){L.setAttribute(B,K);}
,getCss:function(M){return M.getAttribute(B);}
,isPropertySupported:function(N){return (this.__fB[N]||this.__fw[N]||N in document.documentElement.style);}
,COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(Q,name,P,O){if(qx.core.Environment.get(j)){qx.core.Assert.assertElement(Q,A);qx.core.Assert.assertString(name,o);if(O!==undefined){qx.core.Assert.assertBoolean(O,s);}
;}
;name=this.__fw[name]||this.__fz(name)||name;if(O!==false&&this.__fB[name]){this.__fB[name].set(Q,P);}
else {Q.style[name]=P!==null?P:t;}
;}
,setStyles:function(X,R,V){if(qx.core.Environment.get(j)){qx.core.Assert.assertElement(X,A);qx.core.Assert.assertMap(R,v);if(V!==undefined){qx.core.Assert.assertBoolean(V,s);}
;}
;var U=this.__fw;var Y=this.__fB;var S=X.style;for(var W in R){var T=R[W];var name=U[W]||this.__fz(W)||W;if(T===undefined){if(V!==false&&Y[name]){Y[name].reset(X);}
else {S[name]=t;}
;}
else {if(V!==false&&Y[name]){Y[name].set(X,T);}
else {S[name]=T!==null?T:t;}
;}
;}
;}
,reset:function(bb,name,ba){name=this.__fw[name]||this.__fz(name)||name;if(ba!==false&&this.__fB[name]){this.__fB[name].reset(bb);}
else {bb.style[name]=t;}
;}
,get:function(bf,name,bh,bj){name=this.__fw[name]||this.__fz(name)||name;if(bj!==false&&this.__fB[name]){return this.__fB[name].get(bf,bh);}
;switch(bh){case this.LOCAL_MODE:return bf.style[name]||t;case this.CASCADED_MODE:if(bf.currentStyle){return bf.currentStyle[name]||t;}
;throw new Error(d);default:var bd=qx.dom.Node.getDocument(bf);var bg=bd.defaultView?bd.defaultView.getComputedStyle:undefined;if(bg!==undefined){var bc=bg(bf,null);if(bc&&bc[name]){return bc[name];}
;}
else {if(!bf.currentStyle){return bf.style[name]||t;}
;var bl=bf.currentStyle[name]||bf.style[name]||t;if(/^-?[\.\d]+(px)?$/i.test(bl)){return bl;}
;var bk=this.__fA[name];if(bk&&(bk in bf.style)){var bi=bf.style[name];bf.style[name]=bl||0;var be=bf.style[bk]+c;bf.style[name]=bi;return be;}
;return bl;}
;return bf.style[name]||t;};}
},defer:function(bm){bm.__fy();}
});}
)();
(function(){var a="qx.theme.manager.Icon",b="Theme",c="changeTheme",d="_applyTheme",e="singleton";qx.Class.define(a,{type:e,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:d,event:c}},members:{_applyTheme:function(i,g){var h=qx.util.AliasManager.getInstance();if(g){for(var f in g.aliases){h.remove(f);}
;}
;if(i){for(var f in i.aliases){h.add(f,i.aliases[f]);}
;}
;}
}});}
)();
(function(){var a="'.",b="Missing appearance: ",c="_applyTheme",d="qx.debug",e="string",f="Cannot find a matching appearance for '",g="Hint: This may be an issue with nested child controls and a missing alias definition in the appearance theme.",h="qx.theme.manager.Appearance",j=":",k="Theme",l="undefined",m="changeTheme",n="/",o="singleton";qx.Class.define(h,{type:o,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__fE={};this.__fF={};}
,properties:{theme:{check:k,nullable:true,event:m,apply:c}},members:{__fG:{},__fE:null,__fF:null,_applyTheme:function(){this.__fF={};this.__fE={};}
,__fH:function(D,z,q,u){var w=z.appearances;var r=w[D];if(!r){var C=n;var s=[];var v=D.split(C);var B=qx.lang.Array.clone(v);var y;while(!r&&v.length>0){s.unshift(v.pop());var t=v.join(C);r=w[t];if(r){y=r.alias||r;if(typeof y===e){var A=y+C+s.join(C);return this.__fH(A,z,q,B);}
;}
;}
;for(var i=0;i<s.length-1;i++ ){s.shift();var x=s.join(C);var p=this.__fH(x,z,null,B);if(p){return p;}
;}
;if(q!=null){return this.__fH(q,z,null,B);}
;if(qx.core.Environment.get(d)){if(typeof u!==l){this.debug(f+u.join(n)+a);if(u.length>1){this.info(g);}
;}
;}
;return null;}
else if(typeof r===e){return this.__fH(r,z,q,B);}
else if(r.include&&!r.style){return this.__fH(r.include,z,q,B);}
;return D;}
,styleFrom:function(W,O,P,F){if(!P){P=this.getTheme();}
;var M=this.__fF;if(!M[P.name]){M[P.name]={};}
;var E=M[P.name][W];if(!E){E=M[P.name][W]=this.__fH(W,P,F);}
;var T=P.appearances[E];if(!T){this.warn(b+W);return null;}
;if(!T.style){return null;}
;var U=E;if(O){var I=T.$$bits;if(!I){I=T.$$bits={};T.$$length=0;}
;var J=0;for(var L in O){if(!O[L]){continue;}
;if(I[L]==null){I[L]=1<<T.$$length++ ;}
;J+=I[L];}
;if(J>0){U+=j+J;}
;}
;var K=this.__fE;if(K[P.name]&&(K[P.name][U]!==undefined)){return K[P.name][U];}
;if(!O){O=this.__fG;}
;var R;if(T.include||T.base){var V;if(T.include){V=this.styleFrom(T.include,O,P,F);}
;var N=T.style(O,V);R={};if(T.base){var S=this.styleFrom(E,O,T.base,F);if(T.include){for(var H in S){if(!V.hasOwnProperty(H)&&!N.hasOwnProperty(H)){R[H]=S[H];}
;}
;}
else {for(var Q in S){if(!N.hasOwnProperty(Q)){R[Q]=S[Q];}
;}
;}
;}
;if(T.include){for(var G in V){if(!N.hasOwnProperty(G)){R[G]=V[G];}
;}
;}
;for(var X in N){R[X]=N[X];}
;}
else {R=T.style(O);}
;if(!K[P.name]){K[P.name]={};}
;return K[P.name][U]=R||null;}
}});}
)();
(function(){var b="'!",c="function",d='Invalid include in theme "',e="fonts",f="appearances",g='The configuration key "',h="Mixin theme is not a valid theme!",j='" is not allowed!',k="icons",m="You can only define one theme category per file! Invalid theme: ",n="string",o="decorations",p="other",q="Found base flag in entry '",r="qx.debug",s='Invalid patch in theme "',t="widgets",u="[Theme ",v="borders",w="' are not compatible '",x="The mixins '",y='": ',z="' of theme '",A='" is invalid: ',B='Invalid extend in theme "',C='Invalid type of key "',D='The key "',E='"!',F="]",G='"! The value needs to be a map!',H='"! The type of the key must be "',I="undefined",J='The type of the key "',K="qx.Theme",L='The content of a meta theme must reference to other themes. The value for "',M='" inside the meta block is wrong.',N='" in theme "',O="colors",P='Invalid key "',Q='"! The value is undefined/null!',R="Theme",S="meta",T='" is not allowed inside a meta theme block.',U="'. Base flags are not allowed for themes without a valid super theme!",V="object";qx.Bootstrap.define(K,{statics:{define:function(name,X){if(!X){var X={};}
;X.include=this.__fI(X.include);X.patch=this.__fI(X.patch);if(qx.core.Environment.get(r)){this.__t(name,X);}
;var W={$$type:R,name:name,title:X.title,toString:this.genericToString};if(X.extend){W.supertheme=X.extend;}
;W.basename=qx.Bootstrap.createNamespace(name,W);this.__fL(W,X);this.__fJ(W,X);this.$$registry[name]=W;for(var i=0,a=X.include,l=a.length;i<l;i++ ){this.include(W,a[i]);}
;for(var i=0,a=X.patch,l=a.length;i<l;i++ ){this.patch(W,a[i]);}
;if(X.boot){X.boot();}
;}
,__fI:function(Y){if(!Y){return [];}
;if(qx.Bootstrap.isArray(Y)){return Y;}
else {return [Y];}
;}
,__fJ:function(ba,bb){var bc=bb.aliases||{};if(bb.extend&&bb.extend.aliases){qx.Bootstrap.objectMergeWith(bc,bb.extend.aliases,false);}
;ba.aliases=bc;}
,getAll:function(){return this.$$registry;}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,genericToString:function(){return u+this.name+F;}
,__fK:function(be){for(var i=0,bd=this.__fM,l=bd.length;i<l;i++ ){if(be[bd[i]]){return bd[i];}
;}
;}
,__fL:function(bj,bk){var bg=this.__fK(bk);if(bk.extend&&!bg){bg=bk.extend.type;}
;bj.type=bg||p;var bh=function(){}
;if(bk.extend){bh.prototype=new bk.extend.$$clazz;}
;var bf=bh.prototype;var bi=bk[bg];for(var bl in bi){bf[bl]=bi[bl];if(bf[bl].base){if(qx.core.Environment.get(r)){if(!bk.extend){throw new Error(q+bl+z+bk.name+U);}
;}
;bf[bl].base=bk.extend;}
;}
;bj.$$clazz=bh;bj[bg]=new bh;}
,$$registry:{},__fM:[O,v,o,e,k,t,f,S],__s:qx.core.Environment.select(r,{"true":{"title":n,"aliases":V,"type":n,"extend":V,"colors":V,"borders":V,"decorations":V,"fonts":V,"icons":V,"widgets":V,"appearances":V,"meta":V,"include":V,"patch":V,"boot":c},"default":null}),__fN:qx.core.Environment.select(r,{"true":{"color":V,"border":V,"decoration":V,"font":V,"icon":V,"appearance":V,"widget":V},"default":null}),__t:qx.core.Environment.select(r,{"true":function(name,br){var bq=this.__s;for(var bp in br){if(bq[bp]===undefined){throw new Error(g+bp+N+name+j);}
;if(br[bp]==null){throw new Error(P+bp+N+name+Q);}
;if(bq[bp]!==null&&typeof br[bp]!==bq[bp]){throw new Error(C+bp+N+name+H+bq[bp]+E);}
;}
;var bo=[O,v,o,e,k,t,f,S];for(var i=0,l=bo.length;i<l;i++ ){var bp=bo[i];if(br[bp]!==undefined&&(br[bp] instanceof Array||br[bp] instanceof RegExp||br[bp] instanceof Date||br[bp].classname!==undefined)){throw new Error(P+bp+N+name+G);}
;}
;var bm=0;for(var i=0,l=bo.length;i<l;i++ ){var bp=bo[i];if(br[bp]){bm++ ;}
;if(bm>1){throw new Error(m+name);}
;}
;if(br.meta){var bn;for(var bp in br.meta){bn=br.meta[bp];if(this.__fN[bp]===undefined){throw new Error(D+bp+T);}
;if(typeof bn!==this.__fN[bp]){throw new Error(J+bp+M);}
;if(!(typeof bn===V&&bn!==null&&bn.$$type===R)){throw new Error(L+bp+N+name+A+bn);}
;}
;}
;if(br.extend&&br.extend.$$type!==R){throw new Error(B+name+y+br.extend);}
;if(br.include){for(var i=0,l=br.include.length;i<l;i++ ){if(typeof (br.include[i])==I||br.include[i].$$type!==R){throw new Error(d+name+y+br.include[i]);}
;}
;}
;if(br.patch){for(var i=0,l=br.patch.length;i<l;i++ ){if(typeof (br.patch[i])===I||br.patch[i].$$type!==R){throw new Error(s+name+y+br.patch[i]);}
;}
;}
;}
,"default":function(){}
}),patch:function(bv,bt){this.__fO(bt);var bx=this.__fK(bt);if(bx!==this.__fK(bv)){throw new Error(x+bv.name+w+bt.name+b);}
;var bu=bt[bx];var bs=bv.$$clazz.prototype;for(var bw in bu){bs[bw]=bu[bw];}
;}
,include:function(bB,bz){this.__fO(bz);var bD=bz.type;if(bD!==bB.type){throw new Error(x+bB.name+w+bz.name+b);}
;var bA=bz[bD];var by=bB.$$clazz.prototype;for(var bC in bA){if(by[bC]!==undefined){continue;}
;by[bC]=bA[bC];}
;}
,__fO:function(bE){if(typeof bE===I||bE==null){var bG=new Error(h);if(qx.core.Environment.get(r)){var bF=qx.dev.StackTrace.getStackTraceFromError(bG);qx.Bootstrap.error(this,bF);}
;throw bG;}
;}
}});}
)();
(function(){var a="$$theme_",b="$$user_",c="qx.util.PropertyUtil",d="$$init_";qx.Class.define(c,{statics:{getProperties:function(e){return e.$$properties;}
,getAllProperties:function(j){var g={};var f=j;while(f!=qx.core.Object){var i=this.getProperties(f);for(var h in i){g[h]=i[h];}
;f=f.superclass;}
;return g;}
,getUserValue:function(l,k){return l[b+k];}
,setUserValue:function(n,m,o){n[b+m]=o;}
,deleteUserValue:function(q,p){delete (q[b+p]);}
,getInitValue:function(s,r){return s[d+r];}
,setInitValue:function(u,t,v){u[d+t]=v;}
,deleteInitValue:function(x,w){delete (x[d+w]);}
,getThemeValue:function(z,y){return z[a+y];}
,setThemeValue:function(B,A,C){B[a+A]=C;}
,deleteThemeValue:function(E,D){delete (E[a+D]);}
,setThemed:function(H,G,I){var F=qx.core.Property.$$method.setThemed;H[F[G]](I);}
,resetThemed:function(K,J){var L=qx.core.Property.$$method.resetThemed;K[L[J]]();}
}});}
)();
(function(){var a="qx.ui.core.queue.Layout",b="layout";qx.Class.define(a,{statics:{__eT:{},__gj:{},remove:function(c){delete this.__eT[c.toHashCode()];}
,add:function(d){this.__eT[d.toHashCode()]=d;qx.ui.core.queue.Manager.scheduleFlush(b);}
,isScheduled:function(e){return !!this.__eT[e.toHashCode()];}
,flush:function(){var f=this.__gl();for(var i=f.length-1;i>=0;i-- ){var g=f[i];if(g.hasValidLayout()){continue;}
;if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();g.renderLayout(0,0,j.width,j.height);}
else {var h=g.getBounds();g.renderLayout(h.left,h.top,h.width,h.height);}
;}
;}
,getNestingLevel:function(l){var k=this.__gj;var n=0;var parent=l;while(true){if(k[parent.toHashCode()]!=null){n+=k[parent.toHashCode()];break;}
;if(!parent.$$parent){break;}
;parent=parent.$$parent;n+=1;}
;var m=n;while(l&&l!==parent){k[l.toHashCode()]=m-- ;l=l.$$parent;}
;return n;}
,__gk:function(){var t=qx.ui.core.queue.Visibility;this.__gj={};var s=[];var r=this.__eT;var o,q;for(var p in r){o=r[p];if(t.isVisible(o)){q=this.getNestingLevel(o);if(!s[q]){s[q]={};}
;s[q][p]=o;delete r[p];}
;}
;return s;}
,__gl:function(){var x=[];var z=this.__gk();for(var w=z.length-1;w>=0;w-- ){if(!z[w]){continue;}
;for(var v in z[w]){var u=z[w][v];if(w==0||u.isRootWidget()||u.hasUserBounds()){x.push(u);u.invalidateLayoutCache();continue;}
;var B=u.getSizeHint(false);if(B){u.invalidateLayoutCache();var y=u.getSizeHint();var A=(!u.getBounds()||B.minWidth!==y.minWidth||B.width!==y.width||B.maxWidth!==y.maxWidth||B.minHeight!==y.minHeight||B.height!==y.height||B.maxHeight!==y.maxHeight);}
else {A=true;}
;if(A){var parent=u.getLayoutParent();if(!z[w-1]){z[w-1]={};}
;z[w-1][parent.toHashCode()]=parent;}
else {x.push(u);}
;}
;}
;return x;}
}});}
)();
(function(){var a="display",b="",c="block",d="none",e="_getHeight",f="_getContentWidth",g="_getContentHeight",h="hidden",j="_getWidth",k="qx.module.Css",m="absolute";qx.Bootstrap.define(k,{statics:{_getHeight:function(p){var q=this[0];if(q){if(qx.dom.Node.isElement(q)){var n;if(p){var o={display:c,position:m,visibility:h};n=qx.module.Css.__go(q,o,e,this);}
else {n=qx.bom.element.Dimension.getHeight(q);}
;return n;}
else if(qx.dom.Node.isDocument(q)){return qx.bom.Document.getHeight(qx.dom.Node.getWindow(q));}
else if(qx.dom.Node.isWindow(q)){return qx.bom.Viewport.getHeight(q);}
;}
;return null;}
,_getWidth:function(t){var u=this[0];if(u){if(qx.dom.Node.isElement(u)){var r;if(t){var s={display:c,position:m,visibility:h};r=qx.module.Css.__go(u,s,j,this);}
else {r=qx.bom.element.Dimension.getWidth(u);}
;return r;}
else if(qx.dom.Node.isDocument(u)){return qx.bom.Document.getWidth(qx.dom.Node.getWindow(u));}
else if(qx.dom.Node.isWindow(u)){return qx.bom.Viewport.getWidth(u);}
;}
;return null;}
,_getContentHeight:function(w){var y=this[0];if(qx.dom.Node.isElement(y)){var x;if(w){var v={position:m,visibility:h,display:c};x=qx.module.Css.__go(y,v,g,this);}
else {x=qx.bom.element.Dimension.getContentHeight(y);}
;return x;}
;return null;}
,_getContentWidth:function(B){var z=this[0];if(qx.dom.Node.isElement(z)){var C;if(B){var A={position:m,visibility:h,display:c};C=qx.module.Css.__go(z,A,f,this);}
else {C=qx.bom.element.Dimension.getContentWidth(z);}
;return C;}
;return null;}
,__gm:{},__gn:function(G,D){var F=qx.module.Css.__gm;if(!F[G]){var H=D||document;var E=qxWeb(H.createElement(G)).appendTo(D.body);F[G]=E.getStyle(a);E.remove();}
;return F[G]||b;}
,__go:function(L,I,J,O){var M={};for(var N in I){M[N]=L.style[N];L.style[N]=I[N];}
;var K=O[J]();for(var N in M){L.style[N]=M[N];}
;return K;}
,includeStylesheet:function(Q,P){qx.bom.Stylesheet.includeFile(Q,P);}
},members:{getHeight:function(R){return this._getHeight(R);}
,getWidth:function(S){return this._getWidth(S);}
,getContentHeight:function(T){return this._getContentHeight(T);}
,getContentWidth:function(U){return this._getContentWidth(U);}
,show:function(){this._forEachElementWrapped(function(X){var Y=X.getStyle(a);var W=X[0].$$qPrevDisp;var V;if(Y==d){if(W&&W!=d){V=W;}
else {var ba=qxWeb.getDocument(X[0]);V=qx.module.Css.__gn(X[0].tagName,ba);}
;X.setStyle(a,V);X[0].$$qPrevDisp=d;}
;}
);return this;}
,hide:function(){this._forEachElementWrapped(function(bb){var bc=bb.getStyle(a);if(bc!==d){bb[0].$$qPrevDisp=bc;bb.setStyle(a,d);}
;}
);return this;}
,getPosition:function(){var bd=this[0];if(qx.dom.Node.isElement(bd)){return qx.bom.element.Location.getPosition(bd);}
;return null;}
,getOffset:function(be){var bf=this[0];if(bf&&qx.dom.Node.isElement(bf)){return qx.bom.element.Location.get(bf,be);}
;return null;}
,setStyle:function(name,bg){if(/\w-\w/.test(name)){name=qx.lang.String.camelCase(name);}
;this._forEachElement(function(bh){qx.bom.element.Style.set(bh,name,bg);}
);return this;}
,getStyle:function(name){if(this[0]&&qx.dom.Node.isElement(this[0])){if(/\w-\w/.test(name)){name=qx.lang.String.camelCase(name);}
;return qx.bom.element.Style.get(this[0],name);}
;return null;}
,setStyles:function(bi){for(var name in bi){this.setStyle(name,bi[name]);}
;return this;}
,getStyles:function(bk){var bj={};for(var i=0;i<bk.length;i++ ){bj[bk[i]]=this.getStyle(bk[i]);}
;return bj;}
,addClass:function(name){this._forEachElement(function(bl){qx.bom.element.Class.add(bl,name);}
);return this;}
,addClasses:function(bm){this._forEachElement(function(bn){qx.bom.element.Class.addClasses(bn,bm);}
);return this;}
,removeClass:function(name){this._forEachElement(function(bo){qx.bom.element.Class.remove(bo,name);}
);return this;}
,removeClasses:function(bp){this._forEachElement(function(bq){qx.bom.element.Class.removeClasses(bq,bp);}
);return this;}
,hasClass:function(name){if(!this[0]||!qx.dom.Node.isElement(this[0])){return false;}
;return qx.bom.element.Class.has(this[0],name);}
,getClass:function(){if(!this[0]||!qx.dom.Node.isElement(this[0])){return b;}
;return qx.bom.element.Class.get(this[0]);}
,toggleClass:function(name){var br=qx.bom.element.Class;this._forEachElement(function(bs){br.has(bs,name)?br.remove(bs,name):br.add(bs,name);}
);return this;}
,toggleClasses:function(bt){for(var i=0,l=bt.length;i<l;i++ ){this.toggleClass(bt[i]);}
;return this;}
,replaceClass:function(bv,bu){this._forEachElement(function(bw){qx.bom.element.Class.replace(bw,bv,bu);}
);return this;}
},defer:function(bx){qxWeb.$attachAll(this);qxWeb.$attach({"_getWidth":bx._getWidth,"_getHeight":bx._getHeight,"_getContentHeight":bx._getContentHeight,"_getContentWidth":bx._getContentWidth});}
});}
)();
(function(){var a="borderBottomWidth",b="scroll",c="qx.bom.element.Location",d="gecko",e="paddingLeft",f="borderRightWidth",g="auto",h="static",i="borderTopWidth",j="borderLeftWidth",k="marginBottom",l="marginTop",m="overflowY",n="marginLeft",o="border-box",p="padding",q="paddingBottom",r="paddingTop",s="marginRight",t="browser.quirksmode",u="engine.name",v="position",w="margin",x="paddingRight",y="BODY",z="overflowX",A="border";qx.Bootstrap.define(c,{statics:{__gp:function(C,B){return qx.bom.element.Style.get(C,B,qx.bom.element.Style.COMPUTED_MODE,false);}
,__gq:function(E,D){return parseInt(qx.bom.element.Style.get(E,D,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;}
,__gr:function(G){var H=0,top=0;var F=qx.dom.Node.getWindow(G);H-=qx.bom.Viewport.getScrollLeft(F);top-=qx.bom.Viewport.getScrollTop(F);return {left:H,top:top};}
,__gs:qx.core.Environment.select(u,{"mshtml":function(K){var J=qx.dom.Node.getDocument(K);var I=J.body;var L=0;var top=0;L-=I.clientLeft+J.documentElement.clientLeft;top-=I.clientTop+J.documentElement.clientTop;if(!qx.core.Environment.get(t)){L+=this.__gq(I,j);top+=this.__gq(I,i);}
;return {left:L,top:top};}
,"webkit":function(O){var N=qx.dom.Node.getDocument(O);var M=N.body;var P=M.offsetLeft;var top=M.offsetTop;return {left:P,top:top};}
,"gecko":function(R){var Q=qx.dom.Node.getDocument(R).body;var S=Q.offsetLeft;var top=Q.offsetTop;if(qx.bom.element.BoxSizing.get(Q)!==o){S+=this.__gq(Q,j);top+=this.__gq(Q,i);}
;return {left:S,top:top};}
,"default":function(U){var T=qx.dom.Node.getDocument(U).body;var V=T.offsetLeft;var top=T.offsetTop;return {left:V,top:top};}
}),__gt:function(W){var X=W.getBoundingClientRect();return {left:Math.round(X.left),top:Math.round(X.top)};}
,get:function(bf,bg){if(bf.tagName==y){var location=this.__gu(bf);var bj=location.left;var top=location.top;}
else {var Y=this.__gs(bf);var bd=this.__gt(bf);var scroll=this.__gr(bf);var bj=bd.left+Y.left-scroll.left;var top=bd.top+Y.top-scroll.top;}
;var ba;var be;if(bf instanceof SVGElement){var bk=bf.getBoundingClientRect();ba=bk.width;be=bk.height;}
else {ba=bf.offsetWidth;be=bf.offsetHeight;}
;var bb=bj+ba;var bc=top+be;if(bg){if(bg==p||bg==b){var bi=qx.bom.element.Style.get(bf,z);if(bi==b||bi==g){bb+=bf.scrollWidth-ba+this.__gq(bf,j)+this.__gq(bf,f);}
;var bh=qx.bom.element.Style.get(bf,m);if(bh==b||bh==g){bc+=bf.scrollHeight-be+this.__gq(bf,i)+this.__gq(bf,a);}
;}
;switch(bg){case p:bj+=this.__gq(bf,e);top+=this.__gq(bf,r);bb-=this.__gq(bf,x);bc-=this.__gq(bf,q);case b:bj-=bf.scrollLeft;top-=bf.scrollTop;bb-=bf.scrollLeft;bc-=bf.scrollTop;case A:bj+=this.__gq(bf,j);top+=this.__gq(bf,i);bb-=this.__gq(bf,f);bc-=this.__gq(bf,a);break;case w:bj-=this.__gq(bf,n);top-=this.__gq(bf,l);bb+=this.__gq(bf,s);bc+=this.__gq(bf,k);break;};}
;return {left:bj,top:top,right:bb,bottom:bc};}
,__gu:function(bl){var top=bl.offsetTop;var bm=bl.offsetLeft;top+=this.__gq(bl,l);bm+=this.__gq(bl,n);if(qx.core.Environment.get(u)===d){top+=this.__gq(bl,j);bm+=this.__gq(bl,i);}
;return {left:bm,top:top};}
,getLeft:function(bn,bo){return this.get(bn,bo).left;}
,getTop:function(bp,bq){return this.get(bp,bq).top;}
,getRight:function(br,bs){return this.get(br,bs).right;}
,getBottom:function(bt,bu){return this.get(bt,bu).bottom;}
,getRelative:function(by,bx,bw,bv){var bA=this.get(by,bw);var bz=this.get(bx,bv);return {left:bA.left-bz.left,top:bA.top-bz.top,right:bA.right-bz.right,bottom:bA.bottom-bz.bottom};}
,getPosition:function(bB){return this.getRelative(bB,this.getOffsetParent(bB));}
,getOffsetParent:function(bE){if(bE instanceof SVGElement){return document.body;}
;var bD=bE.offsetParent||document.body;var bC=qx.bom.element.Style;while(bD&&(!/^body|html$/i.test(bD.tagName)&&bC.get(bD,v)===h)){bD=bD.offsetParent;}
;return bD;}
}});}
)();
(function(){var a='',b="(^|\\s)",c=" is undefined",d='function',e="(\\s|$)",f="",g="\\b|\\b",h="qx.debug",j="qx.bom.element.Class",k=" cannot be determined",m='SVGAnimatedString',n="html.classlist",o="default",p=" ",q='object',r="className for element ",s="g",t="$2",u="native",v="\\b",w='undefined';qx.Bootstrap.define(j,{statics:{__gv:/\s+/g,__gw:/^\s+|\s+$/g,add:{"native":function(x,name){if(name.length>0){x.classList.add(name);}
;return name;}
,"default":function(y,name){if(!this.has(y,name)){y.className+=(y.className?p:f)+name;}
;return name;}
}[qx.core.Environment.get(n)?u:o],addClasses:{"native":function(A,z){for(var i=0;i<z.length;i++ ){if(z[i].length>0){A.classList.add(z[i]);}
;}
;return A.className;}
,"default":function(C,E){var D={};var F;var B=C.className;if(B){F=B.split(this.__gv);for(var i=0,l=F.length;i<l;i++ ){D[F[i]]=true;}
;for(var i=0,l=E.length;i<l;i++ ){if(!D[E[i]]){F.push(E[i]);}
;}
;}
else {F=E;}
;return C.className=F.join(p);}
}[qx.core.Environment.get(n)?u:o],get:function(H){var G=H.className;if(typeof G.split!==d){if(typeof G===q){if(qx.Bootstrap.getClass(G)==m){G=G.baseVal;}
else {if(qx.core.Environment.get(h)){qx.log.Logger.warn(this,r+H+k);}
;G=a;}
;}
;if(typeof G===w){if(qx.core.Environment.get(h)){qx.log.Logger.warn(this,r+H+c);}
;G=a;}
;}
;return G;}
,has:{"native":function(I,name){return I.classList.contains(name);}
,"default":function(K,name){var J=new RegExp(b+name+e);return J.test(K.className);}
}[qx.core.Environment.get(n)?u:o],remove:{"native":function(L,name){L.classList.remove(name);return name;}
,"default":function(N,name){var M=new RegExp(b+name+e);N.className=N.className.replace(M,t);return name;}
}[qx.core.Environment.get(n)?u:o],removeClasses:{"native":function(P,O){for(var i=0;i<O.length;i++ ){P.classList.remove(O[i]);}
;return P.className;}
,"default":function(S,Q){var R=new RegExp(v+Q.join(g)+v,s);return S.className=S.className.replace(R,f).replace(this.__gw,f).replace(this.__gv,p);}
}[qx.core.Environment.get(n)?u:o],replace:function(V,U,T){if(!this.has(V,U)){return f;}
;this.remove(V,U);return this.add(V,T);}
,toggle:{"native":function(X,name,W){if(W===undefined){X.classList.toggle(name);}
else {W?this.add(X,name):this.remove(X,name);}
;return name;}
,"default":function(ba,name,Y){if(Y==null){Y=!this.has(ba,name);}
;Y?this.add(ba,name):this.remove(ba,name);return name;}
}[qx.core.Environment.get(n)?u:o]}});}
)();
(function(){var a="engine.name",b="event.mspointer",c="device.type",d="env",e="engine.version",f="qx.module.Environment",g="browser.version",h="event.touch",i="device.name",j="browser.quirksmode",k="browser.name",l="browser.documentmode";qx.Bootstrap.define(f,{statics:{get:function(m){return qx.core.Environment.get(m);}
,add:function(n,o){qx.core.Environment.add(n,o);return this;}
},defer:function(p){qx.core.Environment.get(k);qx.core.Environment.get(g);qx.core.Environment.get(j);qx.core.Environment.get(l);qx.core.Environment.get(a);qx.core.Environment.get(e);qx.core.Environment.get(i);qx.core.Environment.get(c);qx.core.Environment.get(h);qx.core.Environment.get(b);qxWeb.$attachAll(this,d);}
});}
)();
(function(){var a="qx.module.Polyfill";qx.Bootstrap.define(a,{});}
)();
(function(){var a="mshtml",b="engine.name",c="complete",d="Array",f="pointerout",g="pointerover",h="string",n="load",o="left",p="qx.module.Event",q="undefined",r="DOMContentLoaded",s="browser.documentmode",t="*";qx.Bootstrap.define(p,{statics:{__gx:{},__gy:{on:{},off:{}},__dW:false,ready:function(u){if(document.readyState===c){window.setTimeout(u,1);return;}
;var v=function(){qx.module.Event.__dW=true;u();}
;qxWeb(window).on(n,v);var w=function(){qxWeb(window).off(n,v);u();}
;if(qxWeb.env.get(b)!==a||qxWeb.env.get(s)>8){qx.bom.Event.addNativeListener(document,r,w);}
else {var z=function(){if(qx.module.Event.__dW){return;}
;try{document.documentElement.doScroll(o);if(document.body){w();}
;}
catch(A){window.setTimeout(z,100);}
;}
;z();}
;}
,$registerEventNormalization:function(E,B){if(!qx.lang.Type.isArray(E)){E=[E];}
;var C=qx.module.Event.__gx;for(var i=0,l=E.length;i<l;i++ ){var D=E[i];if(qx.lang.Type.isFunction(B)){if(!C[D]){C[D]=[];}
;C[D].push(B);}
;}
;}
,$unregisterEventNormalization:function(I,F){if(!qx.lang.Type.isArray(I)){I=[I];}
;var G=qx.module.Event.__gx;for(var i=0,l=I.length;i<l;i++ ){var H=I[i];if(G[H]){qx.lang.Array.remove(G[H],F);}
;}
;}
,$getEventNormalizationRegistry:function(){return qx.module.Event.__gx;}
,$registerEventHook:function(O,L,K){if(!qx.lang.Type.isArray(O)){O=[O];}
;var M=qx.module.Event.__gy.on;for(var i=0,l=O.length;i<l;i++ ){var N=O[i];if(qx.lang.Type.isFunction(L)){if(!M[N]){M[N]=[];}
;M[N].push(L);}
;}
;if(!K){return;}
;var J=qx.module.Event.__gy.off;for(var i=0,l=O.length;i<l;i++ ){var N=O[i];if(qx.lang.Type.isFunction(K)){if(!J[N]){J[N]=[];}
;J[N].push(K);}
;}
;}
,$unregisterEventHook:function(U,R,Q){if(!qx.lang.Type.isArray(U)){U=[U];}
;var S=qx.module.Event.__gy.on;for(var i=0,l=U.length;i<l;i++ ){var T=U[i];if(S[T]){qx.lang.Array.remove(S[T],R);}
;}
;if(!Q){return;}
;var P=qx.module.Event.__gy.off;for(var i=0,l=U.length;i<l;i++ ){var T=U[i];if(P[T]){qx.lang.Array.remove(P[T],Q);}
;}
;}
,$getEventHookRegistry:function(){return qx.module.Event.__gy;}
},members:{on:function(bd,bb,bc,W){for(var i=0;i<this.length;i++ ){var V=this[i];var Y=bc||qxWeb(V);var X=qx.module.Event.__gy.on;var be=X[t]||[];if(X[bd]){be=be.concat(X[bd]);}
;for(var j=0,m=be.length;j<m;j++ ){be[j](V,bd,bb,bc);}
;var ba=function(bf,event){var bh=qx.module.Event.__gx;var bg=bh[t]||[];if(bh[bd]){bg=bg.concat(bh[bd]);}
;for(var x=0,y=bg.length;x<y;x++ ){event=bg[x](event,bf,bd);}
;bb.apply(this,[event]);}
.bind(Y,V);ba.original=bb;qx.bom.Event.addNativeListener(V,bd,ba,W);if(!V.$$emitter){V.$$emitter=new qx.event.Emitter();}
;V.$$lastlistenerId=V.$$emitter.on(bd,ba,Y);V.$$emitter.getEntryById(V.$$lastlistenerId).useCapture=!!W;if(!V.__gz){V.__gz={};}
;if(!V.__gz[bd]){V.__gz[bd]={};}
;V.__gz[bd][V.$$lastlistenerId]=ba;if(!bc){if(!V.__gA){V.__gA={};}
;V.__gA[V.$$lastlistenerId]=Y;}
;}
;return this;}
,off:function(bt,bo,bq,bj){var br=(bo===null&&bq===null);for(var j=0;j<this.length;j++ ){var bi=this[j];if(!bi.__gz){continue;}
;var bv=[];if(bt!==null){bv.push(bt);}
else {for(var bm in bi.__gz){bv.push(bm);}
;}
;for(var i=0,l=bv.length;i<l;i++ ){for(var bu in bi.__gz[bv[i]]){var bs=bi.__gz[bv[i]][bu];if(br||bs==bo||bs.original==bo){var bl=typeof bi.__gA!==q&&bi.__gA[bu];var bw;if(!bq&&bl){bw=bi.__gA[bu];}
;var bp=bi.$$emitter.off(bv[i],bs,bw||bq);if(br||bs.original==bo){qx.bom.Event.removeNativeListener(bi,bv[i],bs,bj);}
;if(bp!==null){delete bi.__gz[bv[i]][bu];}
;if(bl){delete bi.__gA[bu];}
;}
;}
;var bk=qx.module.Event.__gy.off;var bn=bk[t]||[];if(bk[bt]){bn=bn.concat(bk[bt]);}
;for(var k=0,m=bn.length;k<m;k++ ){bn[k](bi,bt,bo,bq);}
;}
;}
;return this;}
,allOff:function(bx){return this.off(bx||null,null,null);}
,offById:function(bz){var by=this[0].$$emitter.getEntryById(bz);return this.off(by.name,by.listener.original,by.ctx,by.useCapture);}
,emit:function(bA,bB){for(var j=0;j<this.length;j++ ){var bC=this[j];if(bC.$$emitter){bC.$$emitter.emit(bA,bB);}
;}
;return this;}
,once:function(bE,bD,bG){var self=this;var bF=function(bH){self.off(bE,bF,bG);bD.call(this,bH);}
;this.on(bE,bF,bG);return this;}
,hasListener:function(bL,bJ,bK){if(!this[0]||!this[0].$$emitter||!this[0].$$emitter.getListeners()[bL]){return false;}
;if(bJ){var bM=this[0].$$emitter.getListeners()[bL];for(var i=0;i<bM.length;i++ ){var bI=false;if(bM[i].listener==bJ){bI=true;}
;if(bM[i].listener.original&&bM[i].listener.original==bJ){bI=true;}
;if(bI){if(bK!==undefined){if(bM[i].ctx===bK){return true;}
;}
else {return true;}
;}
;}
;return false;}
;return this[0].$$emitter.getListeners()[bL].length>0;}
,copyEventsTo:function(bT){var bR=this.concat();var bS=bT.concat();for(var i=bR.length-1;i>=0;i-- ){var bO=bR[i].getElementsByTagName(t);for(var j=0;j<bO.length;j++ ){bR.push(bO[j]);}
;}
;for(var i=bS.length-1;i>=0;i-- ){var bO=bS[i].getElementsByTagName(t);for(var j=0;j<bO.length;j++ ){bS.push(bO[j]);}
;}
;bS.forEach(function(bU){bU.$$emitter=null;}
);for(var i=0;i<bR.length;i++ ){var bN=bR[i];if(!bN.$$emitter){continue;}
;var bP=bN.$$emitter.getListeners();for(var name in bP){for(var j=bP[name].length-1;j>=0;j-- ){var bQ=bP[name][j].listener;if(bQ.original){bQ=bQ.original;}
;qxWeb(bS[i]).on(name,bQ,bP[name][j].ctx);}
;}
;}
;}
,hover:function(bV,bW){this.on(g,bV,this);if(qx.lang.Type.isFunction(bW)){this.on(f,bW,this);}
;return this;}
,onMatchTarget:function(bY,ca,cc,cb){cb=cb!==undefined?cb:this;var bX=function(e){var cd=qxWeb(e.getTarget());if(cd.is(ca)){cc.call(cb,cd,qxWeb.object.clone(e));}
else {var ce=typeof ca==h?this.find(ca):qxWeb(ca);for(var i=0,l=ce.length;i<l;i++ ){if(cd.isChildOf(qxWeb(ce[i]))){cc.call(cb,cd,qxWeb.object.clone(e));break;}
;}
;}
;}
;this.forEach(function(cf){var cg={type:bY,listener:bX,callback:cc,context:cb};if(!cf.$$matchTargetInfo){cf.$$matchTargetInfo=[];}
;cf.$$matchTargetInfo.push(cg);}
);this.on(bY,bX);return this;}
,offMatchTarget:function(ch,ci,ck,cj){cj=cj!==undefined?cj:this;this.forEach(function(cl){if(cl.$$matchTargetInfo&&qxWeb.type.get(cl.$$matchTargetInfo)==d){var cm=cl.$$matchTargetInfo;for(var i=cm.length-1;i>=0;i-- ){var cn=cm[i];if(cn.type==ch&&cn.callback==ck&&cn.context==cj){this.off(ch,cn.listener);cm.splice(i,1);}
;}
;if(cm.length===0){cl.$$matchTargetInfo=null;}
;}
;}
,this);return this;}
},defer:function(co){qxWeb.$attachAll(this);qxWeb.$attachStatic({"$registerEventNormalization":co.$registerEventNormalization,"$unregisterEventNormalization":co.$unregisterEventNormalization,"$getEventNormalizationRegistry":co.$getEventNormalizationRegistry,"$registerEventHook":co.$registerEventHook,"$unregisterEventHook":co.$unregisterEventHook,"$getEventHookRegistry":co.$getEventHookRegistry});}
});}
)();
(function(){var a="qx.module.event.PointerHandler",b="pointerup",c="event.dispatchevent",d="gesturemove",e="pointerover",f="gesturebegin",g="pointerdown",h="pointermove",i="gesturefinish",j="qx.event.handler.Pointer",k="gesturecancel",l="pointercancel",m="pointerout";qx.Bootstrap.define(a,{statics:{TYPES:[h,e,m,g,b,l,f,d,i,k],register:function(o,n){if(!o.$$pointerHandler){if(!qx.core.Environment.get(c)){if(!o.$$emitter){o.$$emitter=new qx.event.Emitter();}
;}
;o.$$pointerHandler=new qx.event.handler.PointerCore(o,o.$$emitter);}
;}
,unregister:function(r){if(r.$$pointerHandler){if(r.$$pointerHandler.classname===j){return;}
;var p=r.$$emitter.getListeners();for(var q in p){if(qx.module.event.PointerHandler.TYPES.indexOf(q)!==-1){if(p[q].length>0){return;}
;}
;}
;r.$$pointerHandler.dispose();r.$$pointerHandler=undefined;}
;}
},defer:function(s){qxWeb.$registerEventHook(s.TYPES,s.register,s.unregister);}
});}
)();
(function(){var a="start",b="animationEnd",c="",d="none",e="browser.name",f="browser.version",g="qx.module.Animation",h="animationIteration",j="end",k="animationStart",l="ease-in",m="iteration",n="ease-out",o="ie",p="display";qx.Bootstrap.define(g,{events:{"animationStart":undefined,"animationIteration":undefined,"animationEnd":undefined},statics:{_fadeOut:{duration:700,timing:n,keep:100,keyFrames:{'0':{opacity:1},'100':{opacity:0,display:d}}},_fadeIn:{duration:700,timing:l,keep:100,keyFrames:{'0':{opacity:0},'100':{opacity:1}}},_animate:function(s,q,r){this._forEachElement(function(t,i){if(t.$$animation){t.$$animation.stop();}
;var u;if(r){u=qx.bom.element.Animation.animateReverse(t,s,q);}
else {u=qx.bom.element.Animation.animate(t,s,q);}
;var self=this;if(i==0){u.on(a,function(){self.emit(k);}
,u);u.on(m,function(){self.emit(h);}
,u);}
;u.on(j,function(){for(var i=0;i<self.length;i++ ){if(self[i].$$animation){return;}
;}
;self.emit(b);}
,t);}
);}
},members:{getAnimationHandles:function(){var v=[];for(var i=0;i<this.length;i++ ){v[i]=this[i].$$animation;}
;return v;}
,animate:function(x,w){qx.module.Animation._animate.bind(this)(x,w,false);return this;}
,animateReverse:function(z,y){qx.module.Animation._animate.bind(this)(z,y,true);return this;}
,play:function(){for(var i=0;i<this.length;i++ ){var A=this[i].$$animation;if(A){A.play();}
;}
;return this;}
,pause:function(){for(var i=0;i<this.length;i++ ){var B=this[i].$$animation;if(B){B.pause();}
;}
;return this;}
,stop:function(){for(var i=0;i<this.length;i++ ){var C=this[i].$$animation;if(C){C.stop();}
;}
;return this;}
,isPlaying:function(){for(var i=0;i<this.length;i++ ){var D=this[i].$$animation;if(D&&D.isPlaying()){return true;}
;}
;return false;}
,isEnded:function(){for(var i=0;i<this.length;i++ ){var E=this[i].$$animation;if(E&&!E.isEnded()){return false;}
;}
;return true;}
,fadeIn:function(F){this.setStyle(p,c);return this.animate(qx.module.Animation._fadeIn,F);}
,fadeOut:function(G){return this.animate(qx.module.Animation._fadeOut,G);}
},defer:function(H){qxWeb.$attachAll(this);if(qxWeb.env.get(e)===o&&qxWeb.env.get(f)<=9){H._fadeIn.keyFrames[100].opacity=0.99;}
;}
});}
)();
(function(){var a="css.animation",b="translate",c="rotate",d="skew",e="scale",f="qx.bom.element.Animation";qx.Bootstrap.define(f,{statics:{animate:function(h,k,g){var j=qx.bom.element.Animation.__gO(h,k.keyFrames);if(qx.core.Environment.get(a)&&j){return qx.bom.element.AnimationCss.animate(h,k,g);}
else {return qx.bom.element.AnimationJs.animate(h,k,g);}
;}
,animateReverse:function(m,o,l){var n=qx.bom.element.Animation.__gO(m,o.keyFrames);if(qx.core.Environment.get(a)&&n){return qx.bom.element.AnimationCss.animateReverse(m,o,l);}
else {return qx.bom.element.AnimationJs.animateReverse(m,o,l);}
;}
,__gO:function(p,t){var r=[];for(var v in t){var s=t[v];for(var u in s){if(r.indexOf(u)==-1){r.push(u);}
;}
;}
;var q=[e,c,d,b];for(var i=0;i<r.length;i++ ){var u=qx.lang.String.camelCase(r[i]);if(!(u in p.style)){if(q.indexOf(r[i])!=-1){continue;}
;if(qx.bom.Style.getPropertyName(u)){continue;}
;return false;}
;}
;return true;}
}});}
)();
(function(){var a="fill-mode",b="No 'keyFrames' given > 0",c="os.name",d="repeat",f="os.version",g="timing",h="start",i="end",j="Anni",k="start-event",l="keyFrames",m="Keyframe position needs to be between 0 and 100",n="alternate",o="qx.debug",p="visibilitychange",q="keep",r="duration",s=":",t="ios",u="delay",v="} ",w="name",x="iteration-event",y="",z="origin",A="Unknown key '",B="forwards",C="' in the animation description.",D="Some browsers will not animate elements with display==none",E="iteration",F="end-event",G="css.animation",H="ms ",I="% {",J="none",K=" ",L="linear",M=";",N="qx.bom.element.AnimationCss",O="keyframes",P="display";qx.Bootstrap.define(N,{statics:{__ep:null,__gP:j,__cg:0,__em:{},__gQ:{"scale":true,"rotate":true,"skew":true,"translate":true},__gR:qx.core.Environment.get(G),animateReverse:function(R,S,Q){return this._animate(R,S,Q,true);}
,animate:function(U,V,T){return this._animate(U,V,T,false);}
,_animate:function(W,be,bd,Y){this.__gW(be);if(qx.core.Environment.get(o)){this.__gX(be);}
;var bb=be.keep;if(bb!=null&&(Y||(be.alternate&&be.repeat%2==0))){bb=100-bb;}
;if(!this.__ep){this.__ep=qx.bom.Stylesheet.createElement();}
;var ba=be.keyFrames;if(bd==undefined){bd=be.duration;}
;if(this.__gR!=null){var name=this.__gY(ba,Y);var X=name+K+bd+H+be.timing+K+(be.delay?be.delay+H:y)+be.repeat+K+(be.alternate?n:y);qx.bom.Event.addNativeListener(W,this.__gR[k],this.__gS);qx.bom.Event.addNativeListener(W,this.__gR[x],this.__gT);qx.bom.Event.addNativeListener(W,this.__gR[F],this.__gU);if(qx.core.Environment.get(o)){if(qx.bom.element.Style.get(W,P)==J){qx.log.Logger.warn(W,D);}
;}
;W.style[qx.lang.String.camelCase(this.__gR[w])]=X;if(bb&&bb==100&&this.__gR[a]){W.style[this.__gR[a]]=B;}
;}
;var bc=new qx.bom.element.AnimationHandle();bc.desc=be;bc.el=W;bc.keep=bb;W.$$animation=bc;if(be.origin!=null){qx.bom.element.Transform.setOrigin(W,be.origin);}
;if(this.__gR==null){window.setTimeout(function(){qx.bom.element.AnimationCss.__gU({target:W});}
,0);}
;return bc;}
,__gS:function(e){if(e.target.$$animation){e.target.$$animation.emit(h,e.target);}
;}
,__gT:function(e){if(e.target!=null&&e.target.$$animation!=null){e.target.$$animation.emit(E,e.target);}
;}
,__gU:function(e){var bf=e.target;var bg=bf.$$animation;if(!bg){return;}
;var bi=bg.desc;if(qx.bom.element.AnimationCss.__gR!=null){var bh=qx.lang.String.camelCase(qx.bom.element.AnimationCss.__gR[w]);bf.style[bh]=y;qx.bom.Event.removeNativeListener(bf,qx.bom.element.AnimationCss.__gR[w],qx.bom.element.AnimationCss.__gU);}
;if(bi.origin!=null){qx.bom.element.Transform.setOrigin(bf,y);}
;qx.bom.element.AnimationCss.__gV(bf,bi.keyFrames[bg.keep]);bf.$$animation=null;bg.el=null;bg.ended=true;bg.emit(i,bf);}
,__gV:function(bj,bk){var bm;for(var bl in bk){if(bl in qx.bom.element.AnimationCss.__gQ){if(!bm){bm={};}
;bm[bl]=bk[bl];}
else {bj.style[qx.lang.String.camelCase(bl)]=bk[bl];}
;}
;if(bm){qx.bom.element.Transform.transform(bj,bm);}
;}
,__gW:function(bn){if(!bn.hasOwnProperty(n)){bn.alternate=false;}
;if(!bn.hasOwnProperty(q)){bn.keep=null;}
;if(!bn.hasOwnProperty(d)){bn.repeat=1;}
;if(!bn.hasOwnProperty(g)){bn.timing=L;}
;if(!bn.hasOwnProperty(z)){bn.origin=null;}
;}
,__gX:qx.core.Environment.select(o,{"true":function(bp){var bo=[z,r,q,l,u,d,g,n];for(var name in bp){if(!(bo.indexOf(name)!=-1)){qx.Bootstrap.warn(A+name+C);}
;}
;if(bp.keyFrames==null){qx.Bootstrap.warn(b);}
else {for(var bq in bp.keyFrames){if(bq<0||bq>100){qx.Bootstrap.warn(m);}
;}
;}
;}
,"default":null}),__gY:function(frames,bs){var bv=y;for(var bz in frames){bv+=(bs?-(bz-100):bz)+I;var bu=frames[bz];var bx;for(var br in bu){if(br in this.__gQ){if(!bx){bx={};}
;bx[br]=bu[br];}
else {var by=qx.bom.Style.getPropertyName(br);var bt=(by!==null)?qx.bom.Style.getCssName(by):y;bv+=(bt||br)+s+bu[br]+M;}
;}
;if(bx){bv+=qx.bom.element.Transform.getCss(bx);}
;bv+=v;}
;if(this.__em[bv]){return this.__em[bv];}
;var name=this.__gP+this.__cg++ ;var bw=this.__gR[O]+K+name;qx.bom.Stylesheet.addRule(this.__ep,bw,bv);this.__em[bv]=name;return name;}
,__ha:function(){this.__cg=0;if(this.__ep){this.__ep.ownerNode.remove();this.__ep=null;this.__em={};}
;}
},defer:function(bA){if(qx.core.Environment.get(c)===t&&parseInt(qx.core.Environment.get(f))>=8){document.addEventListener(p,function(){if(!document.hidden){bA.__ha();}
;}
,false);}
;}
});}
)();
(function(){var a="css.animation",b="Element",c="",d="qx.bom.element.AnimationHandle",e="play-state",f="end",g="paused",h="running";qx.Bootstrap.define(d,{extend:qx.event.Emitter,construct:function(){var i=qx.core.Environment.get(a);this.__hb=i&&i[e];this.__hc=true;this.addListenerOnce(f,this.__he,this);}
,events:{"start":b,"end":b,"iteration":b},members:{__hb:null,__hc:false,__hd:false,isPlaying:function(){return this.__hc;}
,isEnded:function(){return this.__hd;}
,isPaused:function(){return this.el.style[this.__hb]==g;}
,pause:function(){if(this.el){this.el.style[this.__hb]=g;this.el.$$animation.__hc=false;if(this.animationId&&qx.bom.element.AnimationJs){qx.bom.element.AnimationJs.pause(this);}
;}
;}
,play:function(){if(this.el){this.el.style[this.__hb]=h;this.el.$$animation.__hc=true;if(this.i!=undefined&&qx.bom.element.AnimationJs){qx.bom.element.AnimationJs.play(this);}
;}
;}
,stop:function(){if(this.el&&qx.core.Environment.get(a)&&!this.jsAnimation){this.el.style[this.__hb]=c;this.el.style[qx.core.Environment.get(a).name]=c;this.el.$$animation.__hc=false;this.el.$$animation.__hd=true;}
else if(this.jsAnimation){this.stopped=true;qx.bom.element.AnimationJs.stop(this);}
;}
,__he:function(){this.__hc=false;this.__hd=true;}
}});}
)();
(function(){var c="cm",d="mm",e="0",f="pt",g="pc",h="",k="%",l="em",m="qx.bom.element.AnimationJs",n="infinite",o="#",p="in",q="px",r="start",s="end",t="ex",u=";",v="undefined",w="iteration",y="string",z=":";qx.Bootstrap.define(m,{statics:{__hf:30,__hg:[k,p,c,d,l,t,f,g,q],__gQ:{"scale":true,"rotate":true,"skew":true,"translate":true},animate:function(B,C,A){return this._animate(B,C,A,false);}
,animateReverse:function(E,F,D){return this._animate(E,F,D,true);}
,_animate:function(G,Q,P,I){if(G.$$animation){return G.$$animation;}
;Q=qx.lang.Object.clone(Q,true);if(P==undefined){P=Q.duration;}
;var L=Q.keyFrames;var J=this.__hp(L);var K=this.__ho(P,J);var N=parseInt(P/K,10);this.__hh(L,G);var O=this.__hj(N,K,J,L,P,Q.timing);var H=new qx.bom.element.AnimationHandle();H.jsAnimation=true;if(I){O.reverse();H.reverse=true;}
;H.desc=Q;H.el=G;H.delta=O;H.stepTime=K;H.steps=N;G.$$animation=H;H.i=0;H.initValues={};H.repeatSteps=this.__hm(N,Q.repeat);var M=Q.delay||0;var self=this;H.delayId=window.setTimeout(function(){H.delayId=null;self.play(H);}
,M);return H;}
,__hh:function(V,R){var Y={};for(var U in V){for(var name in V[U]){var S=qx.bom.Style.getPropertyName(name);if(S&&S!=name){var X=qx.bom.Style.getCssName(S);V[U][X]=V[U][name];delete V[U][name];name=X;}
;if(Y[name]==undefined){var W=V[U][name];if(typeof W==y){Y[name]=this.__hk(W);}
else {Y[name]=h;}
;}
;}
;}
;for(var U in V){var T=V[U];for(var name in Y){if(T[name]==undefined){if(name in R.style){if(window.getComputedStyle){T[name]=window.getComputedStyle(R,null)[name];}
else {T[name]=R.style[name];}
;}
else {T[name]=R[name];}
;if(T[name]===h&&this.__hg.indexOf(Y[name])!=-1){T[name]=e+Y[name];}
;}
;}
;}
;}
,__hi:function(bb){bb=qx.lang.Object.clone(bb);var bc;for(var name in bb){if(name in this.__gQ){if(!bc){bc={};}
;bc[name]=bb[name];delete bb[name];}
;}
;if(bc){var ba=qx.bom.element.Transform.getCss(bc).split(z);if(ba.length>1){bb[ba[0]]=ba[1].replace(u,h);}
;}
;return bb;}
,__hj:function(bw,bh,bo,bi,be,bq){var bp=new Array(bw);var bm=1;bp[0]=this.__hi(bi[0]);var bt=bi[0];var bj=bi[bo[bm]];var bf=Math.floor(bo[bm]/(bh/be*100));var bs=1;for(var i=1;i<bp.length;i++ ){if(i*bh/be*100>bo[bm]){bt=bj;bm++ ;bj=bi[bo[bm]];bf=Math.floor(bo[bm]/(bh/be*100))-bf;bs=1;}
;bp[i]={};var bd;for(var name in bj){var br=bj[name]+h;if(name in this.__gQ){if(!bd){bd={};}
;if(qx.Bootstrap.isArray(bt[name])){if(!qx.Bootstrap.isArray(bj[name])){bj[name]=[bj[name]];}
;bd[name]=[];for(var j=0;j<bj[name].length;j++ ){var bu=bj[name][j]+h;var x=bs/bf;bd[name][j]=this.__hl(bu,bt[name],bq,x);}
;}
else {var x=bs/bf;bd[name]=this.__hl(br,bt[name],bq,x);}
;}
else if(br.charAt(0)==o){var bl=qx.util.ColorUtil.cssStringToRgb(bt[name]);var bk=qx.util.ColorUtil.cssStringToRgb(br);var bg=[];for(var j=0;j<bl.length;j++ ){var bv=bl[j]-bk[j];var x=bs/bf;var bn=qx.bom.AnimationFrame.calculateTiming(bq,x);bg[j]=parseInt(bl[j]-bv*bn,10);}
;bp[i][name]=qx.util.ColorUtil.rgbToHexString(bg);}
else if(!isNaN(parseFloat(br))){var x=bs/bf;bp[i][name]=this.__hl(br,bt[name],bq,x);}
else {bp[i][name]=bt[name]+h;}
;}
;if(bd){var bx=qx.bom.element.Transform.getCss(bd).split(z);if(bx.length>1){bp[i][bx[0]]=bx[1].replace(u,h);}
;}
;bs++ ;}
;bp[bp.length-1]=this.__hi(bi[100]);return bp;}
,__hk:function(by){return by.substring((parseFloat(by)+h).length,by.length);}
,__hl:function(bC,bB,bz,x){var bA=parseFloat(bC)-parseFloat(bB);return (parseFloat(bB)+bA*qx.bom.AnimationFrame.calculateTiming(bz,x))+this.__hk(bC);}
,play:function(bD){bD.emit(r,bD.el);var bE=window.setInterval(function(){bD.repeatSteps-- ;var bF=bD.delta[bD.i%bD.steps];if(bD.i===0){for(var name in bF){if(bD.initValues[name]===undefined){if(bD.el[name]!==undefined){bD.initValues[name]=bD.el[name];}
else if(qx.bom.element.Style){bD.initValues[name]=qx.bom.element.Style.get(bD.el,qx.lang.String.camelCase(name));}
else {bD.initValues[name]=bD.el.style[qx.lang.String.camelCase(name)];}
;}
;}
;}
;qx.bom.element.AnimationJs.__hn(bD.el,bF);bD.i++ ;if(bD.i%bD.steps==0){bD.emit(w,bD.el);if(bD.desc.alternate){bD.delta.reverse();}
;}
;if(bD.repeatSteps<0){qx.bom.element.AnimationJs.stop(bD);}
;}
,bD.stepTime);bD.animationId=bE;return bD;}
,pause:function(bG){window.clearInterval(bG.animationId);bG.animationId=null;return bG;}
,stop:function(bK){var bJ=bK.desc;var bH=bK.el;var bI=bK.initValues;if(bK.animationId){window.clearInterval(bK.animationId);}
;if(bK.delayId){window.clearTimeout(bK.delayId);}
;if(bH==undefined){return bK;}
;var bL=bJ.keep;if(bL!=undefined&&!bK.stopped){if(bK.reverse||(bJ.alternate&&bJ.repeat&&bJ.repeat%2==0)){bL=100-bL;}
;this.__hn(bH,this.__hi(bJ.keyFrames[bL]));}
else {this.__hn(bH,bI);}
;bH.$$animation=null;bK.el=null;bK.ended=true;bK.animationId=null;bK.emit(s,bH);return bK;}
,__hm:function(bN,bM){if(bM==undefined){return bN;}
;if(bM==n){return Number.MAX_VALUE;}
;return bN*bM;}
,__hn:function(bP,bO){for(var bQ in bO){if(bO[bQ]===undefined){continue;}
;if(typeof bP.style[bQ]===v&&bQ in bP){bP[bQ]=bO[bQ];continue;}
;var name=qx.bom.Style.getPropertyName(bQ)||bQ;if(qx.bom.element.Style){qx.bom.element.Style.set(bP,name,bO[bQ]);}
else {bP.style[name]=bO[bQ];}
;}
;}
,__ho:function(bT,bR){var bU=100;for(var i=0;i<bR.length-1;i++ ){bU=Math.min(bU,bR[i+1]-bR[i]);}
;var bS=bT*bU/100;while(bS>this.__hf){bS=bS/2;}
;return Math.round(bS);}
,__hp:function(bW){var bV=Object.keys(bW);for(var i=0;i<bV.length;i++ ){bV[i]=parseInt(bV[i],10);}
;bV.sort(function(a,b){return a-b;}
);return bV;}
}});}
)();
(function(){var a="css.transform.3d",b="backfaceVisibility",c="transformStyle",d="css.transform",e="transformOrigin",f="qx.bom.client.CssTransform",g="transform",h="perspective",i="perspectiveOrigin";qx.Bootstrap.define(f,{statics:{getSupport:function(){var name=qx.bom.client.CssTransform.getName();if(name!=null){return {"name":name,"style":qx.bom.client.CssTransform.getStyle(),"origin":qx.bom.client.CssTransform.getOrigin(),"3d":qx.bom.client.CssTransform.get3D(),"perspective":qx.bom.client.CssTransform.getPerspective(),"perspective-origin":qx.bom.client.CssTransform.getPerspectiveOrigin(),"backface-visibility":qx.bom.client.CssTransform.getBackFaceVisibility()};}
;return null;}
,getStyle:function(){return qx.bom.Style.getPropertyName(c);}
,getPerspective:function(){return qx.bom.Style.getPropertyName(h);}
,getPerspectiveOrigin:function(){return qx.bom.Style.getPropertyName(i);}
,getBackFaceVisibility:function(){return qx.bom.Style.getPropertyName(b);}
,getOrigin:function(){return qx.bom.Style.getPropertyName(e);}
,getName:function(){return qx.bom.Style.getPropertyName(g);}
,get3D:function(){return qx.bom.client.CssTransform.getPerspective()!=null;}
},defer:function(j){qx.core.Environment.add(d,j.getSupport);qx.core.Environment.add(a,j.get3D);}
});}
)();
(function(){var a="backface-visibility",b="css.transform.3d",c=") ",d="px",e="scale",f="Z",g="X",h=", ",j="visible",k=":",l="3d",m="name",n="",o="origin",p="(",q="qx.bom.element.Transform",r="perspective",s="Y",t="css.transform",u="translate",v="perspective-origin",w="hidden",x=";",y=" ",z="style";qx.Bootstrap.define(q,{statics:{__hq:qx.core.Environment.get(t),transform:function(A,C){var D=this.getTransformValue(C);if(this.__hq!=null){var B=this.__hq[m];A.style[B]=D;}
;}
,translate:function(E,F){this.transform(E,{translate:F});}
,scale:function(G,H){this.transform(G,{scale:H});}
,rotate:function(I,J){this.transform(I,{rotate:J});}
,skew:function(K,L){this.transform(K,{skew:L});}
,getCss:function(N){var O=this.getTransformValue(N);if(this.__hq!=null){var M=this.__hq[m];return qx.bom.Style.getCssName(M)+k+O+x;}
;return n;}
,setOrigin:function(P,Q){if(this.__hq!=null){P.style[this.__hq[o]]=Q;}
;}
,getOrigin:function(R){if(this.__hq!=null){return R.style[this.__hq[o]];}
;return n;}
,setStyle:function(S,T){if(this.__hq!=null){S.style[this.__hq[z]]=T;}
;}
,getStyle:function(U){if(this.__hq!=null){return U.style[this.__hq[z]];}
;return n;}
,setPerspective:function(V,W){if(this.__hq!=null){V.style[this.__hq[r]]=W+d;}
;}
,getPerspective:function(X){if(this.__hq!=null){return X.style[this.__hq[r]];}
;return n;}
,setPerspectiveOrigin:function(Y,ba){if(this.__hq!=null){Y.style[this.__hq[v]]=ba;}
;}
,getPerspectiveOrigin:function(bb){if(this.__hq!=null){var bc=bb.style[this.__hq[v]];if(bc!=n){return bc;}
else {var be=bb.style[this.__hq[v]+g];var bd=bb.style[this.__hq[v]+s];if(be!=n){return be+y+bd;}
;}
;}
;return n;}
,setBackfaceVisibility:function(bf,bg){if(this.__hq!=null){bf.style[this.__hq[a]]=bg?j:w;}
;}
,getBackfaceVisibility:function(bh){if(this.__hq!=null){return bh.style[this.__hq[a]]==j;}
;return true;}
,getTransformValue:function(bl){var bm=n;var bi=[u,e];for(var bj in bl){var bk=bl[bj];if(qx.Bootstrap.isArray(bk)){if(bk.length===3&&bi.indexOf(bj)>-1&&qx.core.Environment.get(b)){bm+=this._compute3dProperty(bj,bk);}
else {bm+=this._computeAxisProperties(bj,bk);}
;}
else {bm+=bj+p+bk+c;}
;}
;return bm.trim();}
,_compute3dProperty:function(bo,bn){var bp=n;bo+=l;for(var i=0;i<bn.length;i++ ){if(bn[i]==null){bn[i]=0;}
;}
;bp+=bo+p+bn.join(h)+c;return bp;}
,_computeAxisProperties:function(bq,br){var bt=n;var bs=[g,s,f];for(var i=0;i<br.length;i++ ){if(br[i]==null||(i==2&&!qx.core.Environment.get(b))){continue;}
;bt+=bq+bs[i]+p;bt+=br[i];bt+=c;}
;return bt;}
}});}
)();
(function(){var a="Child is already in: ",b="text",c="|bubble|",d="qx.html.Element",f="': ",g="|capture|",h="scroll",j="Invalid capture flag.",k="focus",m="Failed to add event listener for type '",n="Flushing elements...",o="class",p="blur",q="div",r="Flush: ",s="deactivate",t="module.objectid",u="data-qx-object-id",v="'",w="css.userselect",z="animationEnd",A="Synced DOM with ",B=" from the target '",C="qx.debug",D="capture",E="visible",F="Root elements could not be inserted into other ones.",G="Has no children!",H="off",I="Invalid callback function",J="releaseCapture",K="Could not move to same index!",L="Invalid context for callback.",M="element",N="",O="Flush invisible element",P="Failed to remove event listener for type '",Q="qxSelectable",R="__hP",S="tabIndex",T="Has no child at this position!",U="Invalid event type.",V="qx.html.Iframe",W="activate",X="Has no parent to remove from.",Y=" to the target '",br="mshtml",bs="engine.name",bt=" operations",bn="Flush rendered element",bo="none",bp="Has no child: ",bq="css.userselect.none",bw=" ",bx="hidden",by="on",bz="Switching visibility to: ",bu="id",bv="Could not overwrite existing element!";qx.Class.define(d,{extend:qx.core.Object,implement:[qx.core.IDisposable],construct:function(bC,bA,bB){qx.core.Object.call(this);this.__ht=bC||q;this.__hu=bA||null;this.__hv=bB||null;}
,statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__hw:{},__hx:null,__hy:null,_scheduleFlush:function(bD){qx.html.Element.__ic.schedule();}
,flush:function(){var bP;if(qx.core.Environment.get(C)){if(this.DEBUG){qx.log.Logger.debug(this,n);}
;}
;var bH=this.__hz();var bF=bH.getFocus();if(bF&&this.__hB(bF)){bH.blur(bF);}
;var bW=bH.getActive();if(bW&&this.__hB(bW)){qx.bom.Element.deactivate(bW);}
;var bK=this.__hA();if(bK&&this.__hB(bK)){qx.bom.Element.releaseCapture(bK);}
;var bQ=[];var bR=this._modified;for(var bO in bR){bP=bR[bO];if(bP.__hU()||bP.classname==V){if(bP.__hC&&qx.dom.Hierarchy.isRendered(bP.__hC)){bQ.push(bP);}
else {if(qx.core.Environment.get(C)){if(this.DEBUG){bP.debug(O);}
;}
;bP.__hT();}
;delete bR[bO];}
;}
;for(var i=0,l=bQ.length;i<l;i++ ){bP=bQ[i];if(qx.core.Environment.get(C)){if(this.DEBUG){bP.debug(bn);}
;}
;bP.__hT();}
;var bM=this._visibility;for(var bO in bM){bP=bM[bO];var bS=bP.__hC;if(!bS){delete bM[bO];continue;}
;if(qx.core.Environment.get(C)){if(this.DEBUG){qx.log.Logger.debug(this,bz+bP.__hF);}
;}
;if(!bP.$$disposed){bS.style.display=bP.__hF?N:bo;if((qx.core.Environment.get(bs)==br)){if(!(document.documentMode>=8)){bS.style.visibility=bP.__hF?E:bx;}
;}
;}
;delete bM[bO];}
;var scroll=this._scroll;for(var bO in scroll){bP=scroll[bO];var bG=bP.__hC;if(bG&&bG.offsetWidth){var bJ=true;if(bP.__hI!=null){bP.__hC.scrollLeft=bP.__hI;delete bP.__hI;}
;if(bP.__hJ!=null){bP.__hC.scrollTop=bP.__hJ;delete bP.__hJ;}
;var bT=bP.__hG;if(bT!=null){var bN=bT.element.getDomElement();if(bN&&bN.offsetWidth){qx.bom.element.Scroll.intoViewX(bN,bG,bT.align);delete bP.__hG;}
else {bJ=false;}
;}
;var bU=bP.__hH;if(bU!=null){var bN=bU.element.getDomElement();if(bN&&bN.offsetWidth){qx.bom.element.Scroll.intoViewY(bN,bG,bU.align);delete bP.__hH;}
else {bJ=false;}
;}
;if(bJ){delete scroll[bO];}
;}
;}
;var bI={"releaseCapture":1,"blur":1,"deactivate":1};for(var i=0;i<this._actions.length;i++ ){var bV=this._actions[i];var bS=bV.element.__hC;if(!bS||!bI[bV.type]&&!bV.element.__hU()){continue;}
;var bL=bV.args;bL.unshift(bS);qx.bom.Element[bV.type].apply(qx.bom.Element,bL);}
;this._actions=[];for(var bO in this.__hw){var bE=this.__hw[bO];var bG=bE.element.__hC;if(bG){qx.bom.Selection.set(bG,bE.start,bE.end);delete this.__hw[bO];}
;}
;qx.event.handler.Appear.refresh();}
,__hz:function(){if(!this.__hx){var bX=qx.event.Registration.getManager(window);this.__hx=bX.getHandler(qx.event.handler.Focus);}
;return this.__hx;}
,__hA:function(){if(!this.__hy){var bY=qx.event.Registration.getManager(window);this.__hy=bY.getDispatcher(qx.event.dispatch.MouseCapture);}
;return this.__hy.getCaptureElement();}
,__hB:function(ca){var cb=this.fromDomElement(ca);return cb&&!cb.__hU();}
,fromDomElement:function(cc){if(qx.core.Environment.get(C)){qx.core.Assert.assertTrue((!cc.$$element&&!cc.$$elementObject)||cc.$$element===cc.$$elementObject.toHashCode());}
;return cc.$$elementObject;}
},members:{__ht:null,__hC:null,__hD:null,__ef:false,__hE:true,__hF:true,__hG:null,__hH:null,__hI:null,__hJ:null,__hK:null,__hL:null,__hM:null,__hu:null,__hv:null,__hN:null,__hO:null,__hP:null,__hQ:null,__hR:null,_scheduleChildrenUpdate:function(){if(this.__hQ){return;}
;this.__hQ=true;qx.html.Element._modified[this.toHashCode()]=this;qx.html.Element._scheduleFlush(M);}
,_createDomElement:function(){return qx.dom.Element.create(this.__ht);}
,connectWidget:function(cd){if(qx.core.Environment.get(C)){qx.core.Assert.assertTrue(!this.__hD||this.__hD===cd);}
;this.__hD=cd;if(this.__hC){if(qx.core.Environment.get(C)){qx.core.Assert.assertTrue((!this.__hC.$$widget&&!this.__hC.$$widgetObject)||(this.__hC.$$widgetObject===cd&&this.__hC.$$widget===cd.toHashCode()));}
;this.__hC.$$widget=cd.toHashCode();this.__hC.$$widgetObject=cd;}
;if(qx.core.Environment.get(t)){this.updateObjectId();}
;}
,disconnectWidget:function(ce){if(qx.core.Environment.get(C)){qx.core.Assert.assertTrue(this.__hD===ce);}
;delete this.__hD;if(this.__hC){if(qx.core.Environment.get(C)){qx.core.Assert.assertTrue((!this.__hC.$$widget&&!this.__hC.$$widgetObject)||(this.__hC.$$widgetObject===ce&&this.__hC.$$widget===ce.toHashCode()));}
;this.__hC.$$widget=N;delete this.__hC.$$widgetObject;}
;if(qx.core.Environment.get(t)){this.updateObjectId();}
;}
,__hS:function(cf){if(qx.core.Environment.get(C)){qx.core.Assert.assertTrue(!this.__hC||this.__hC===cf);qx.core.Assert.assertTrue((cf.$$elementObject===this&&cf.$$element===this.toHashCode())||(!cf.$$elementObject&&!cf.$$element));}
;this.__hC=cf;cf.$$elementObject=this;cf.$$element=this.toHashCode();if(this.__hD){cf.$$widget=this.__hD.toHashCode();cf.$$widgetObject=this.__hD;}
;}
,__hT:function(){if(qx.core.Environment.get(C)){if(this.DEBUG){this.debug(r+this.getAttribute(bu));}
;}
;var length;var cg=this.__hP;if(cg){length=cg.length;var ch;for(var i=0;i<length;i++ ){ch=cg[i];if(ch.__hF&&ch.__hE&&!ch.__hC){ch.__hT();}
;}
;}
;if(!this.__hC){this.__hS(this._createDomElement());this._copyData(false);if(cg&&length>0){this._insertChildren();}
;}
else {this._syncData();if(this.__hQ){this._syncChildren();}
;}
;delete this.__hQ;}
,_insertChildren:function(){var ci=this.__hP;var length=ci.length;var ck;if(length>2){var cj=document.createDocumentFragment();for(var i=0;i<length;i++ ){ck=ci[i];if(ck.__hC&&ck.__hE){cj.appendChild(ck.__hC);}
;}
;this.__hC.appendChild(cj);}
else {var cj=this.__hC;for(var i=0;i<length;i++ ){ck=ci[i];if(ck.__hC&&ck.__hE){cj.appendChild(ck.__hC);}
;}
;}
;}
,_syncChildren:function(){var cl=this.__hP;var cs=cl.length;var cm;var cq;var co=this.__hC;var ct=co.childNodes;var cn=0;var cr;if(qx.core.Environment.get(C)){var cp=0;}
;for(var i=ct.length-1;i>=0;i-- ){cr=ct[i];cq=qx.html.Element.fromDomElement(cr);if(!cq||!cq.__hE||cq.__hR!==this){co.removeChild(cr);if(qx.core.Environment.get(C)){cp++ ;}
;}
;}
;for(var i=0;i<cs;i++ ){cm=cl[i];if(cm.__hE){cq=cm.__hC;cr=ct[cn];if(!cq){continue;}
;if(cq!=cr){if(cr){co.insertBefore(cq,cr);}
else {co.appendChild(cq);}
;if(qx.core.Environment.get(C)){cp++ ;}
;}
;cn++ ;}
;}
;if(qx.core.Environment.get(C)){if(qx.html.Element.DEBUG){this.debug(A+cp+bt);}
;}
;}
,updateObjectId:function(){if(qx.core.Environment.get(t)){var cu=null;if(this.__hD&&this.__hD.getQxObjectId()){cu=qx.core.Id.getAbsoluteIdOf(this.__hD,true)||null;}
;this.setAttribute(u,cu,true);}
;}
,_copyData:function(cw){var cy=this.__hC;var cA=this.__hv;if(cA){var cx=qx.bom.element.Attribute;for(var cz in cA){cx.set(cy,cz,cA[cz]);}
;}
;var cA=this.__hu;if(cA){var cv=qx.bom.element.Style;if(cw){cv.setStyles(cy,cA);}
else {cv.setCss(cy,cv.compile(cA));}
;}
;var cA=this.__hN;if(cA){for(var cz in cA){this._applyProperty(cz,cA[cz]);}
;}
;var cA=this.__hO;if(cA){qx.event.Registration.getManager(cy).importListeners(cy,cA);delete this.__hO;}
;}
,_syncData:function(){var cF=this.__hC;var cE=qx.bom.element.Attribute;var cC=qx.bom.element.Style;var cD=this.__hL;if(cD){var cI=this.__hv;if(cI){var cG;for(var cH in cD){cG=cI[cH];if(cG!==undefined){cE.set(cF,cH,cG);}
else {cE.reset(cF,cH);}
;}
;}
;this.__hL=null;}
;var cD=this.__hK;if(cD){var cI=this.__hu;if(cI){var cB={};for(var cH in cD){cB[cH]=cI[cH];}
;cC.setStyles(cF,cB);}
;this.__hK=null;}
;var cD=this.__hM;if(cD){var cI=this.__hN;if(cI){var cG;for(var cH in cD){this._applyProperty(cH,cI[cH]);}
;}
;this.__hM=null;}
;}
,__hU:function(){var cJ=this;while(cJ){if(cJ.__ef){return true;}
;if(!cJ.__hE||!cJ.__hF){return false;}
;cJ=cJ.__hR;}
;return false;}
,__hV:function(cK){if(cK.__hR===this){throw new Error(a+cK);}
;if(cK.__ef){throw new Error(F);}
;if(cK.__hR){cK.__hR.remove(cK);}
;cK.__hR=this;if(!this.__hP){this.__hP=[];}
;if(this.__hC){this._scheduleChildrenUpdate();}
;}
,__hW:function(cL){if(cL.__hR!==this){throw new Error(bp+cL);}
;if(this.__hC){this._scheduleChildrenUpdate();}
;delete cL.__hR;}
,__hX:function(cM){if(cM.__hR!==this){throw new Error(bp+cM);}
;if(this.__hC){this._scheduleChildrenUpdate();}
;}
,getChildren:function(){return this.__hP||null;}
,getChild:function(cN){var cO=this.__hP;return cO&&cO[cN]||null;}
,hasChildren:function(){var cP=this.__hP;return cP&&cP[0]!==undefined;}
,indexOf:function(cR){var cQ=this.__hP;return cQ?cQ.indexOf(cR):-1;}
,hasChild:function(cT){var cS=this.__hP;return cS&&cS.indexOf(cT)!==-1;}
,add:function(cU){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++ ){this.__hV(arguments[i]);}
;this.__hP.push.apply(this.__hP,arguments);}
else {this.__hV(cU);this.__hP.push(cU);}
;return this;}
,addAt:function(cW,cV){this.__hV(cW);qx.lang.Array.insertAt(this.__hP,cW,cV);return this;}
,remove:function(cX){var cY=this.__hP;if(!cY){return this;}
;if(arguments[1]){var da;for(var i=0,l=arguments.length;i<l;i++ ){da=arguments[i];this.__hW(da);qx.lang.Array.remove(cY,da);}
;}
else {this.__hW(cX);qx.lang.Array.remove(cY,cX);}
;return this;}
,removeAt:function(dc){var dd=this.__hP;if(!dd){throw new Error(G);}
;var de=dd[dc];if(!de){throw new Error(T);}
;this.__hW(de);qx.lang.Array.removeAt(this.__hP,dc);return this;}
,removeAll:function(){var df=this.__hP;if(df){for(var i=0,l=df.length;i<l;i++ ){this.__hW(df[i]);}
;df.length=0;}
;return this;}
,getParent:function(){return this.__hR||null;}
,insertInto:function(parent,dg){parent.__hV(this);if(dg==null){parent.__hP.push(this);}
else {qx.lang.Array.insertAt(this.__hP,this,dg);}
;return this;}
,insertBefore:function(dh){var parent=dh.__hR;parent.__hV(this);qx.lang.Array.insertBefore(parent.__hP,this,dh);return this;}
,insertAfter:function(di){var parent=di.__hR;parent.__hV(this);qx.lang.Array.insertAfter(parent.__hP,this,di);return this;}
,moveTo:function(dj){var parent=this.__hR;parent.__hX(this);var dk=parent.__hP.indexOf(this);if(dk===dj){throw new Error(K);}
else if(dk<dj){dj-- ;}
;qx.lang.Array.removeAt(parent.__hP,dk);qx.lang.Array.insertAt(parent.__hP,this,dj);return this;}
,moveBefore:function(dl){var parent=this.__hR;return this.moveTo(parent.__hP.indexOf(dl));}
,moveAfter:function(dm){var parent=this.__hR;return this.moveTo(parent.__hP.indexOf(dm)+1);}
,free:function(){var parent=this.__hR;if(!parent){throw new Error(X);}
;if(!parent.__hP){return this;}
;parent.__hW(this);qx.lang.Array.remove(parent.__hP,this);return this;}
,getDomElement:function(){return this.__hC||null;}
,getNodeName:function(){return this.__ht;}
,setNodeName:function(name){this.__ht=name;}
,setRoot:function(dn){this.__ef=dn;}
,useMarkup:function(dp){if(this.__hC){throw new Error(bv);}
;if(qx.core.Environment.get(bs)==br){var dq=document.createElement(q);}
else {var dq=qx.dom.Element.getHelperElement();}
;dq.innerHTML=dp;this.useElement(dq.firstChild);return this.__hC;}
,useElement:function(dr){if(this.__hC){throw new Error(bv);}
;this.__hS(dr);this._copyData(true);}
,isFocusable:function(){var dt=this.getAttribute(S);if(dt>=1){return true;}
;var ds=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;if(dt>=0&&ds[this.__ht]){return true;}
;return false;}
,setSelectable:function(dv){this.setAttribute(Q,dv?by:H);var du=qx.core.Environment.get(w);if(du){this.setStyle(du,dv?b:qx.core.Environment.get(bq));}
;}
,isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__ht];}
,include:function(){if(this.__hE){return this;}
;delete this.__hE;if(this.__hR){this.__hR._scheduleChildrenUpdate();}
;return this;}
,exclude:function(){if(!this.__hE){return this;}
;this.__hE=false;if(this.__hR){this.__hR._scheduleChildrenUpdate();}
;return this;}
,isIncluded:function(){return this.__hE===true;}
,fadeIn:function(dw){var dx=qxWeb(this.__hC);if(dx.isPlaying()){dx.stop();}
;if(!this.__hC){this.__hT();dx.push(this.__hC);}
;if(this.__hC){dx.fadeIn(dw).once(z,function(){this.show();qx.html.Element.flush();}
,this);return dx.getAnimationHandles()[0];}
;}
,fadeOut:function(dy){var dz=qxWeb(this.__hC);if(dz.isPlaying()){dz.stop();}
;if(this.__hC){dz.fadeOut(dy).once(z,function(){this.hide();qx.html.Element.flush();}
,this);return dz.getAnimationHandles()[0];}
;}
,show:function(){if(this.__hF){return this;}
;if(this.__hC){qx.html.Element._visibility[this.toHashCode()]=this;qx.html.Element._scheduleFlush(M);}
;if(this.__hR){this.__hR._scheduleChildrenUpdate();}
;delete this.__hF;return this;}
,hide:function(){if(!this.__hF){return this;}
;if(this.__hC){qx.html.Element._visibility[this.toHashCode()]=this;qx.html.Element._scheduleFlush(M);}
;this.__hF=false;return this;}
,isVisible:function(){return this.__hF===true;}
,scrollChildIntoViewX:function(dD,dB,dE){var dA=this.__hC;var dC=dD.getDomElement();if(dE!==false&&dA&&dA.offsetWidth&&dC&&dC.offsetWidth){qx.bom.element.Scroll.intoViewX(dC,dA,dB);}
else {this.__hG={element:dD,align:dB};qx.html.Element._scroll[this.toHashCode()]=this;qx.html.Element._scheduleFlush(M);}
;delete this.__hI;}
,scrollChildIntoViewY:function(dI,dG,dJ){var dF=this.__hC;var dH=dI.getDomElement();if(dJ!==false&&dF&&dF.offsetWidth&&dH&&dH.offsetWidth){qx.bom.element.Scroll.intoViewY(dH,dF,dG);}
else {this.__hH={element:dI,align:dG};qx.html.Element._scroll[this.toHashCode()]=this;qx.html.Element._scheduleFlush(M);}
;delete this.__hJ;}
,scrollToX:function(x,dK){var dL=this.__hC;if(dK!==true&&dL&&dL.offsetWidth){dL.scrollLeft=x;delete this.__hI;}
else {this.__hI=x;qx.html.Element._scroll[this.toHashCode()]=this;qx.html.Element._scheduleFlush(M);}
;delete this.__hG;}
,getScrollX:function(){var dM=this.__hC;if(dM){return dM.scrollLeft;}
;return this.__hI||0;}
,scrollToY:function(y,dO){var dN=this.__hC;if(dO!==true&&dN&&dN.offsetWidth){dN.scrollTop=y;delete this.__hJ;}
else {this.__hJ=y;qx.html.Element._scroll[this.toHashCode()]=this;qx.html.Element._scheduleFlush(M);}
;delete this.__hH;}
,getScrollY:function(){var dP=this.__hC;if(dP){return dP.scrollTop;}
;return this.__hJ||0;}
,disableScrolling:function(){this.enableScrolling();this.scrollToX(0);this.scrollToY(0);this.addListener(h,this.__ia,this);}
,enableScrolling:function(){this.removeListener(h,this.__ia,this);}
,__hY:null,__ia:function(e){if(!this.__hY){this.__hY=true;this.__hC.scrollTop=0;this.__hC.scrollLeft=0;delete this.__hY;}
;}
,getTextSelection:function(){var dQ=this.__hC;if(dQ){return qx.bom.Selection.get(dQ);}
;return null;}
,getTextSelectionLength:function(){var dR=this.__hC;if(dR){return qx.bom.Selection.getLength(dR);}
;return null;}
,getTextSelectionStart:function(){var dS=this.__hC;if(dS){return qx.bom.Selection.getStart(dS);}
;return null;}
,getTextSelectionEnd:function(){var dT=this.__hC;if(dT){return qx.bom.Selection.getEnd(dT);}
;return null;}
,setTextSelection:function(dU,dV){var dW=this.__hC;if(dW){qx.bom.Selection.set(dW,dU,dV);return;}
;qx.html.Element.__hw[this.toHashCode()]={element:this,start:dU,end:dV};qx.html.Element._scheduleFlush(M);}
,clearTextSelection:function(){var dX=this.__hC;if(dX){qx.bom.Selection.clear(dX);}
;delete qx.html.Element.__hw[this.toHashCode()];}
,__ib:function(dY,ea){var eb=qx.html.Element._actions;eb.push({type:dY,element:this,args:ea||[]});qx.html.Element._scheduleFlush(M);}
,focus:function(){this.__ib(k);}
,blur:function(){this.__ib(p);}
,activate:function(){this.__ib(W);}
,deactivate:function(){this.__ib(s);}
,capture:function(ec){this.__ib(D,[ec!==false]);}
,releaseCapture:function(){this.__ib(J);}
,setStyle:function(ed,ee,ef){if(!this.__hu){this.__hu={};}
;if(this.__hu[ed]==ee){return this;}
;if(ee==null){delete this.__hu[ed];}
else {this.__hu[ed]=ee;}
;if(this.__hC){if(ef){qx.bom.element.Style.set(this.__hC,ed,ee);return this;}
;if(!this.__hK){this.__hK={};}
;this.__hK[ed]=true;qx.html.Element._modified[this.toHashCode()]=this;qx.html.Element._scheduleFlush(M);}
;return this;}
,setStyles:function(eh,ej){var ei=qx.bom.element.Style;if(!this.__hu){this.__hu={};}
;if(this.__hC){if(!this.__hK){this.__hK={};}
;for(var eg in eh){var ek=eh[eg];if(this.__hu[eg]==ek){continue;}
;if(ek==null){delete this.__hu[eg];}
else {this.__hu[eg]=ek;}
;if(ej){ei.set(this.__hC,eg,ek);continue;}
;this.__hK[eg]=true;}
;qx.html.Element._modified[this.toHashCode()]=this;qx.html.Element._scheduleFlush(M);}
else {for(var eg in eh){var ek=eh[eg];if(this.__hu[eg]==ek){continue;}
;if(ek==null){delete this.__hu[eg];}
else {this.__hu[eg]=ek;}
;}
;}
;return this;}
,removeStyle:function(en,em){this.setStyle(en,null,em);return this;}
,getStyle:function(eo){return this.__hu?this.__hu[eo]:null;}
,getAllStyles:function(){return this.__hu||null;}
,setAttribute:function(ep,eq,er){if(!this.__hv){this.__hv={};}
;if(this.__hv[ep]==eq){return this;}
;if(eq==null){delete this.__hv[ep];}
else {this.__hv[ep]=eq;}
;if(this.__hC){if(er){qx.bom.element.Attribute.set(this.__hC,ep,eq);return this;}
;if(!this.__hL){this.__hL={};}
;this.__hL[ep]=true;qx.html.Element._modified[this.toHashCode()]=this;qx.html.Element._scheduleFlush(M);}
;return this;}
,setAttributes:function(es,et){for(var eu in es){this.setAttribute(eu,es[eu],et);}
;return this;}
,removeAttribute:function(ew,ev){return this.setAttribute(ew,null,ev);}
,getAttribute:function(ex){return this.__hv?this.__hv[ex]:null;}
,addClass:function(name){var ey=((this.getAttribute(o)||N)+bw+name).trim();this.setAttribute(o,ey);}
,removeClass:function(name){var ez=this.getAttribute(o);if(ez){this.setAttribute(o,(ez.replace(name,N)).trim());}
;}
,_applyProperty:function(name,eA){}
,_setProperty:function(eB,eC,eD){if(!this.__hN){this.__hN={};}
;if(this.__hN[eB]==eC){return this;}
;if(eC==null){delete this.__hN[eB];}
else {this.__hN[eB]=eC;}
;if(this.__hC){if(eD){this._applyProperty(eB,eC);return this;}
;if(!this.__hM){this.__hM={};}
;this.__hM[eB]=true;qx.html.Element._modified[this.toHashCode()]=this;qx.html.Element._scheduleFlush(M);}
;return this;}
,_removeProperty:function(eF,eE){return this._setProperty(eF,null,eE);}
,_getProperty:function(eH){var eG=this.__hN;if(!eG){return null;}
;var eI=eG[eH];return eI==null?null:eI;}
,addListener:function(eN,eK,self,eJ){if(this.$$disposed){return null;}
;if(qx.core.Environment.get(C)){var eL=m+eN+v+Y+this+f;this.assertString(eN,eL+U);this.assertFunction(eK,eL+I);if(self!==undefined){this.assertObject(self,L);}
;if(eJ!==undefined){this.assertBoolean(eJ,j);}
;}
;if(this.__hC){return qx.event.Registration.addListener(this.__hC,eN,eK,self,eJ);}
;if(!this.__hO){this.__hO={};}
;if(eJ==null){eJ=false;}
;var eM=qx.event.Manager.getNextUniqueId();var eO=eN+(eJ?g:c)+eM;this.__hO[eO]={type:eN,listener:eK,self:self,capture:eJ,unique:eM};return eO;}
,removeListener:function(eW,eQ,self,eP){if(this.$$disposed){return null;}
;if(qx.core.Environment.get(C)){var eU=P+eW+v+B+this+f;this.assertString(eW,eU+U);this.assertFunction(eQ,eU+I);if(self!==undefined){this.assertObject(self,L);}
;if(eP!==undefined){this.assertBoolean(eP,j);}
;}
;if(this.__hC){if(eQ.$$wrapped_callback&&eQ.$$wrapped_callback[eW+this.toHashCode()]){var eR=eQ.$$wrapped_callback[eW+this.toHashCode()];delete eQ.$$wrapped_callback[eW+this.toHashCode()];eQ=eR;}
;qx.event.Registration.removeListener(this.__hC,eW,eQ,self,eP);}
else {var eS=this.__hO;var eV;if(eP==null){eP=false;}
;for(var eT in eS){eV=eS[eT];if(eV.listener===eQ&&eV.self===self&&eV.capture===eP&&eV.type===eW){delete eS[eT];break;}
;}
;}
;return this;}
,removeListenerById:function(eX){if(this.$$disposed){return null;}
;if(this.__hC){qx.event.Registration.removeListenerById(this.__hC,eX);}
else {delete this.__hO[eX];}
;return this;}
,hasListener:function(fa,eY){if(this.$$disposed){return false;}
;if(this.__hC){return qx.event.Registration.hasListener(this.__hC,fa,eY);}
;var fb=this.__hO;var fd;if(eY==null){eY=false;}
;for(var fc in fb){fd=fb[fc];if(fd.capture===eY&&fd.type===fa){return true;}
;}
;return false;}
,getListeners:function(){if(this.$$disposed){return null;}
;if(this.__hC){return qx.event.Registration.getManager(this.__hC).serializeListeners(this.__hC);}
;var fe=[];for(var fg in this.__hO){var ff=this.__hO[fg];fe.push({type:ff.type,handler:ff.listener,self:ff.self,capture:ff.capture});}
;return fe;}
},defer:function(fh){fh.__ic=new qx.util.DeferredCall(fh.flush,fh);}
,destruct:function(){if(this.toHashCode()){delete qx.html.Element._modified[this.toHashCode()];delete qx.html.Element._scroll[this.toHashCode()];}
;var fi=this.__hC;if(fi){qx.event.Registration.getManager(fi).removeAllListeners(fi);fi.$$element=N;delete fi.$$elementObject;fi.$$widget=N;delete fi.$$widgetObject;}
;if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__hR;if(parent&&!parent.$$disposed){parent.remove(this);}
;}
;this._disposeArray(R);this.__hv=this.__hu=this.__hO=this.__hN=this.__hL=this.__hK=this.__hM=this.__hC=this.__hR=this.__hG=this.__hH=null;}
});}
)();
(function(){var a="touchmove",b="os.name",c="MSPointerDown",d="android",e="engine.version",f="pointercancel",g="qx.event.handler.TouchCore",h="event.mspointer",j="MSPointerCancel",k="y",l="browser.documentmode",m="pointer-events",n="pointerup",o="touchend",p="pointerdown",q="MSPointerUp",r="pointermove",s="right",t="mshtml",u="engine.name",v="undefined",w="touchcancel",z="MSPointerMove",A="webkit",B="none",C="left",D="device.touch",E="down",F="x",G="up",H="touchstart";qx.Bootstrap.define(g,{extend:Object,implement:[qx.core.IDisposable],statics:{TAP_MAX_DISTANCE:qx.core.Environment.get(b)!=d?10:40,SWIPE_DIRECTION:{x:[C,s],y:[G,E]},SWIPE_MIN_DISTANCE:qx.core.Environment.get(b)!=d?11:41,SWIPE_MIN_VELOCITY:0,LONGTAP_TIME:qx.core.Environment.get(D)?500:99999},construct:function(I,J){this.__mo=I;this.__gG=J;this._initTouchObserver();this.__mp=[];this.__mq={};}
,members:{__mo:null,__gG:null,__mr:null,__ms:null,__mq:null,__mt:null,__mu:null,__mv:null,__mp:null,__mw:null,_initTouchObserver:function(){this.__mr=qx.lang.Function.listener(this._onTouchEvent,this);this.__mw=[H,a,o,w];if(qx.core.Environment.get(h)){var K=parseInt(qx.core.Environment.get(e),10);if(K==10){this.__mw=[c,z,q,j];}
else {this.__mw=[p,r,n,f];}
;}
;for(var i=0;i<this.__mw.length;i++ ){qx.bom.Event.addNativeListener(this.__mo,this.__mw[i],this.__mr);}
;}
,_stopTouchObserver:function(){for(var i=0;i<this.__mw.length;i++ ){qx.bom.Event.removeNativeListener(this.__mo,this.__mw[i],this.__mr);}
;}
,_onTouchEvent:function(L){this._commonTouchEventHandler(L);}
,_getScalingDistance:function(N,M){return (Math.sqrt(Math.pow(N.pageX-M.pageX,2)+Math.pow(N.pageY-M.pageY,2)));}
,_getRotationAngle:function(P,O){var x=P.pageX-O.pageX;var y=P.pageY-O.pageY;return (Math.atan2(y,x)*180/Math.PI);}
,_calcTouchesDelta:function(Q){var R=[];for(var i=0;i<Q.length;i++ ){R.push(this._calcSingleTouchDelta(Q[i]));}
;return R;}
,_calcSingleTouchDelta:function(V){if(this.__mq.hasOwnProperty(V.identifier)){var U=this.__mq[V.identifier];var S=Math.floor(V.clientX-U[0]);var T=Math.floor(V.clientY-U[1]);var W=F;if(Math.abs(S/T)<1){W=k;}
;return {"x":S,"y":T,"axis":W,"identifier":V.identifier};}
else {return {"x":0,"y":0,"axis":null,"identifier":V.identifier};}
;}
,_commonTouchEventHandler:function(Y,bd){var bd=bd||Y.type;if(qx.core.Environment.get(h)){bd=this._mapPointerEvent(bd);var X=this._detectTouchesByPointer(Y,bd);Y.changedTouches=X;Y.targetTouches=X;Y.touches=X;}
;Y.delta=[];if(bd==H){this.__ms=this._getTarget(Y);if(Y.touches&&Y.touches.length>1){this.__mu=this._getScalingDistance(Y.touches[0],Y.touches[1]);this.__mv=this._getRotationAngle(Y.touches[0],Y.touches[1]);}
;for(var i=0;i<Y.changedTouches.length;i++ ){var bc=Y.changedTouches[i];this.__mq[bc.identifier]=[bc.clientX,bc.clientY];}
;}
;if(bd==a){if(typeof Y.scale==v&&Y.targetTouches.length>1){var ba=this._getScalingDistance(Y.targetTouches[0],Y.targetTouches[1]);Y.scale=ba/this.__mu;}
;if((typeof Y.rotation==v||qx.core.Environment.get(h))&&Y.targetTouches.length>1){var bb=this._getRotationAngle(Y.targetTouches[0],Y.targetTouches[1]);Y._rotation=bb-this.__mv;}
;Y.delta=this._calcTouchesDelta(Y.targetTouches);}
;this._fireEvent(Y,bd,this.__ms);if(qx.core.Environment.get(h)){if(bd==o||bd==w){delete this.__mp[Y.pointerId];}
;}
;if((bd==o||bd==w)&&Y.changedTouches[0]){delete this.__mq[Y.changedTouches[0].identifier];}
;}
,_detectTouchesByPointer:function(bg,bi){var bf=[];if(bi==H){this.__mp[bg.pointerId]=bg;}
else if(bi==a){this.__mp[bg.pointerId]=bg;}
;for(var bh in this.__mp){var be=this.__mp[bh];bf.push(be);}
;return bf;}
,_mapPointerEvent:function(bj){bj=bj.toLowerCase();if(bj.indexOf(p)!==-1){return H;}
else if(bj.indexOf(n)!==-1){return o;}
else if(bj.indexOf(r)!==-1){return a;}
else if(bj.indexOf(f)!==-1){return w;}
;return bj;}
,_getTarget:function(bl){var bm=qx.bom.Event.getTarget(bl);if(qx.core.Environment.get(u)==A){if(bm&&bm.nodeType==3){bm=bm.parentNode;}
;}
else if(qx.core.Environment.get(u)==t&&qx.core.Environment.get(l)<11){var bk=this.__mx(bl);if(bk){bm=bk;}
;}
;return bm;}
,__mx:function(bp){var bn=null;var bo=null;if(bp&&bp.touches&&bp.touches.length!==0){bn=bp.touches[0].clientX;bo=bp.touches[0].clientY;}
;var br=document.msElementsFromPoint(bn,bo);if(br){for(var i=0;i<br.length;i++ ){var bs=br[i];var bq=qx.bom.element.Style.get(bs,m,3);if(bq!=B){return bs;}
;}
;}
;return null;}
,_fireEvent:function(bt,bu,bv){if(!bv){bv=this._getTarget(bt);}
;var bu=bu||bt.type;if(bv&&bv.nodeType&&this.__gG){this.__gG.emit(bu,bt);}
;}
,dispose:function(){this._stopTouchObserver();this.__ms=this.__mo=this.__mw=this.__mp=this.__gG=this.__mu=this.__mv=null;}
}});}
)();
(function(){var a="resize",b="os.name",c="qx.event.handler.Orientation",d="landscape",e="android",f="portrait",g="orientationchange";qx.Class.define(c,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(h){qx.core.Object.call(this);this.__dQ=h;this.__cF=h.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dQ:null,__cF:null,__my:null,_currentOrientation:null,__mz:null,canHandleEvent:function(j,i){}
,registerEvent:function(m,l,k){}
,unregisterEvent:function(p,o,n){}
,_initObserver:function(){this.__mz=qx.lang.Function.listener(this._onNative,this);this.__my=qx.bom.Event.supportsEvent(this.__cF,g)?g:a;var Event=qx.bom.Event;Event.addNativeListener(this.__cF,this.__my,this.__mz);}
,_stopObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__cF,this.__my,this.__mz);}
,_onNative:qx.event.GlobalError.observeMethod(function(q){var r=0;if(qx.core.Environment.get(b)==e){r=300;}
;qx.lang.Function.delay(this._onOrientationChange,r,this,q);}
),_onOrientationChange:function(s){var u=qx.bom.Viewport;var t=u.getOrientation(s.target);if(this._currentOrientation!=t){this._currentOrientation=t;var v=u.isLandscape(s.target)?d:f;qx.event.Registration.fireEvent(this.__cF,g,qx.event.type.Orientation,[t,v]);}
;}
},destruct:function(){this._stopObserver();this.__dQ=this.__cF=null;}
,defer:function(w){qx.event.Registration.addHandler(w);}
});}
)();
(function(){var a="landscape",b="qx.event.type.Orientation",c="portrait";qx.Class.define(b,{extend:qx.event.type.Event,members:{__mA:null,__kO:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);this.__mA=d;this.__kO=e;return this;}
,clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);g.__mA=this.__mA;g.__kO=this.__kO;return g;}
,getOrientation:function(){return this.__mA;}
,isLandscape:function(){return this.__kO==a;}
,isPortrait:function(){return this.__kO==c;}
}});}
)();
(function(){var a="touchmove",b="dispose",c="useraction",d="touchend",e="event.touch",f="touchstart",g="qx.event.handler.Touch";qx.Class.define(g,{extend:qx.event.handler.TouchCore,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(h){this.__dQ=h;this.__cF=h.getWindow();this.__ef=this.__cF.document;qx.event.handler.TouchCore.apply(this,[this.__ef]);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,longtap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":f,"mousemove":a,"mouseup":d}},members:{__dQ:null,__cF:null,__ef:null,__mB:false,canHandleEvent:function(j,i){}
,registerEvent:function(m,l,k){}
,unregisterEvent:function(p,o,n){}
,_fireEvent:function(r,q,s,t){if(!s){s=this._getTarget(r);}
;var q=q||r.type;if(s&&s.nodeType){qx.event.Registration.fireEvent(s,q,t||qx.event.type.Touch,[r,s,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cF,c,qx.event.type.Data,[q]);}
,_onTouchEvent:qx.event.GlobalError.observeMethod(function(u){this._commonTouchEventHandler(u);}
),dispose:function(){this.__ik(b);this.__dQ=this.__cF=this.__ef=null;}
,__ik:function(w,v){qx.event.handler.TouchCore.prototype[w].apply(this,v||[]);}
},defer:function(x){qx.event.Registration.addHandler(x);if(qx.core.Environment.get(e)){qx.event.Registration.getManager(document).getHandler(x);}
;}
});}
)();
(function(){var a="touchcancel",b="qx.event.type.Touch",c="touchend",d="undefined";qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(e,f){var f=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,e,f);f.pageX=e.pageX;f.pageY=e.pageY;f.offsetX=e.offsetX;f.offsetY=e.offsetY;f.layerX=(e.offsetX||e.layerX);f.layerY=(e.offsetY||e.layerY);f.scale=e.scale;f.rotation=e.rotation;f._rotation=e._rotation;f.delta=e.delta;f.srcElement=e.srcElement;f.targetTouches=[];for(var i=0;i<e.targetTouches.length;i++ ){f.targetTouches[i]=e.targetTouches[i];}
;f.changedTouches=[];for(i=0;i<e.changedTouches.length;i++ ){f.changedTouches[i]=e.changedTouches[i];}
;f.touches=[];for(i=0;i<e.touches.length;i++ ){f.touches[i]=e.touches[i];}
;return f;}
,stop:function(){this.stopPropagation();}
,getAllTouches:function(){return this._native.touches;}
,getTargetTouches:function(){return this._native.targetTouches;}
,getChangedTargetTouches:function(){return this._native.changedTouches;}
,isMultiTouch:function(){return this.__mD().length>1;}
,getScale:function(){return this._native.scale;}
,getRotation:function(){if(typeof this._native._rotation===d){return this._native.rotation;}
else {return this._native._rotation;}
;}
,getDelta:function(){return this._native.delta;}
,getDocumentLeft:function(g){return this.__mC(g).pageX;}
,getDocumentTop:function(h){return this.__mC(h).pageY;}
,getScreenLeft:function(j){return this.__mC(j).screenX;}
,getScreenTop:function(k){return this.__mC(k).screenY;}
,getViewportLeft:function(l){return this.__mC(l).clientX;}
,getViewportTop:function(m){return this.__mC(m).clientY;}
,getIdentifier:function(n){return this.__mC(n).identifier;}
,__mC:function(o){o=o==null?0:o;return this.__mD()[o];}
,__mD:function(){var p=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());return p;}
,_isTouchEnd:function(){return (this.getType()==c||this.getType()==a);}
}});}
)();
(function(){var a="offline",b="qx.event.handler.Offline",c="online";qx.Class.define(b,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(d){qx.core.Object.call(this);this.__dQ=d;this.__cF=d.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{online:true,offline:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dQ:null,__cF:null,__mz:null,canHandleEvent:function(f,e){}
,registerEvent:function(i,h,g){}
,unregisterEvent:function(l,k,j){}
,_initObserver:function(){this.__mz=qx.lang.Function.listener(this._onNative,this);qx.bom.Event.addNativeListener(this.__cF,a,this.__mz);qx.bom.Event.addNativeListener(this.__cF,c,this.__mz);}
,_stopObserver:function(){qx.bom.Event.removeNativeListener(this.__cF,a,this.__mz);qx.bom.Event.removeNativeListener(this.__cF,c,this.__mz);}
,_onNative:qx.event.GlobalError.observeMethod(function(m){qx.event.Registration.fireEvent(this.__cF,m.type,qx.event.type.Event,[]);}
),isOnline:function(){return !!this.__cF.navigator.onLine;}
},destruct:function(){this.__dQ=null;this._stopObserver();delete qx.event.handler.Appear.__instances[this.toHashCode()];}
,defer:function(n){qx.event.Registration.addHandler(n);}
});}
)();
(function(){var a="mshtml",b="engine.name",c="qx.bom.Element";qx.Class.define(c,{statics:{addListener:function(g,f,d,self,e){return qx.event.Registration.addListener(g,f,d,self,e);}
,removeListener:function(n,m,h,self,k){return qx.event.Registration.removeListener(n,m,h,self,k);}
,removeListenerById:function(o,p){return qx.event.Registration.removeListenerById(o,p);}
,hasListener:function(s,r,q){return qx.event.Registration.hasListener(s,r,q);}
,focus:function(t){qx.event.Registration.getManager(t).getHandler(qx.event.handler.Focus).focus(t);}
,blur:function(u){qx.event.Registration.getManager(u).getHandler(qx.event.handler.Focus).blur(u);}
,activate:function(v){qx.event.Registration.getManager(v).getHandler(qx.event.handler.Focus).activate(v);}
,deactivate:function(w){qx.event.Registration.getManager(w).getHandler(qx.event.handler.Focus).deactivate(w);}
,capture:function(y,x){qx.event.Registration.getManager(y).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(y,x);}
,releaseCapture:function(z){qx.event.Registration.getManager(z).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(z);}
,clone:function(E,L){var C;if(L||((qx.core.Environment.get(b)==a)&&!qx.xml.Document.isXmlDocument(E))){var G=qx.event.Registration.getManager(E);var A=qx.dom.Hierarchy.getDescendants(E);A.push(E);}
;if((qx.core.Environment.get(b)==a)){for(var i=0,l=A.length;i<l;i++ ){G.toggleAttachedEvents(A[i],false);}
;}
;var C=E.cloneNode(true);if((qx.core.Environment.get(b)==a)){for(var i=0,l=A.length;i<l;i++ ){G.toggleAttachedEvents(A[i],true);}
;}
;if(L===true){var K=qx.dom.Hierarchy.getDescendants(C);K.push(C);var B,J,I,D;for(var i=0,H=A.length;i<H;i++ ){I=A[i];B=G.serializeListeners(I);if(B.length>0){J=K[i];for(var j=0,F=B.length;j<F;j++ ){D=B[j];G.addListener(J,D.type,D.handler,D.self,D.capture);}
;}
;}
;}
;return C;}
}});}
)();
(function(){var a="mshtml",b="engine.name",c="blur",d="losecapture",e="focus",f="os.version",g="click",h="qx.event.dispatch.MouseCapture",i="capture",j="scroll",k="browser.documentmode";qx.Class.define(h,{extend:qx.event.dispatch.AbstractBubbling,construct:function(l,m){qx.event.dispatch.AbstractBubbling.call(this,l);this.__cF=l.getWindow();this.__cH=m;l.addListener(this.__cF,c,this.releaseCapture,this);l.addListener(this.__cF,e,this.releaseCapture,this);l.addListener(this.__cF,j,this.releaseCapture,this);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cH:null,__lX:null,__lY:true,__cF:null,_getParent:function(n){return n.parentNode;}
,canDispatchEvent:function(p,event,o){return !!(this.__lX&&this.__ma[o]);}
,dispatchEvent:function(r,event,q){if(q==g){event.stopPropagation();this.releaseCapture();return;}
;if(this.__lY||!qx.dom.Hierarchy.contains(this.__lX,r)){r=this.__lX;}
;return qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,r,event,q);}
,__ma:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1,"pointerdown":1,"pointerup":1,"pointermove":1,"pointerover":1,"pointerout":1,"tap":1,"dbltap":1},activateCapture:function(u,s){var s=s!==false;if(this.__lX===u&&this.__lY==s){return;}
;if(this.__lX){this.releaseCapture();}
;if(this.hasNativeCapture){this.nativeSetCapture(u,s);var self=this;var t=function(){qx.bom.Event.removeNativeListener(u,d,t);self.releaseCapture();}
;qx.bom.Event.addNativeListener(u,d,t);}
;this.__lY=s;this.__lX=u;this.__cH.fireEvent(u,i,qx.event.type.Event,[true,false]);}
,getCaptureElement:function(){return this.__lX;}
,releaseCapture:function(){var v=this.__lX;if(!v){return;}
;this.__lX=null;this.__cH.fireEvent(v,d,qx.event.type.Event,[true,false]);this.nativeReleaseCapture(v);}
,hasNativeCapture:(qx.core.Environment.get(b)==a&&qx.core.Environment.get(k)<9||(parseInt(qx.core.Environment.get(f),10)>7&&qx.core.Environment.get(k)>9)),nativeSetCapture:qx.core.Environment.select(b,{"mshtml":function(x,w){x.setCapture(w!==false);}
,"default":(function(){}
)}),nativeReleaseCapture:qx.core.Environment.select(b,{"mshtml":function(y){y.releaseCapture();}
,"default":(function(){}
)})},defer:function(z){qx.event.Registration.addDispatcher(z);}
});}
)();
(function(){var a="qx.event.handler.Capture";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,b){}
,registerEvent:function(f,e,d){}
,unregisterEvent:function(i,h,g){}
},defer:function(j){qx.event.Registration.addHandler(j);}
});}
)();
(function(){var a="function",b="plugin.silverlight.version",c="Silverlight",d="Skype.Detection",f="QuickTimeCheckObject.QuickTimeCheck.1",g="Adobe Acrobat",h="plugin.windowsmedia",k="QuickTime",l="plugin.silverlight",m="pdf",n="wmv",o="qx.bom.client.Plugin",p="application/x-skype",q=',',r="plugin.divx",s='=',t="Chrome PDF Viewer",u="divx",v="Windows Media",w="",x="mshtml",y="skype.click2call",z="plugin.skype",A="plugin.gears",B="plugin.quicktime",C="plugin.windowsmedia.version",D="quicktime",E="DivX Web Player",F="AgControl.AgControl",G="Microsoft.XMLHTTP",H="silverlight",I="plugin.pdf",J="plugin.pdf.version",K="MSXML2.DOMDocument.6.0",L="WMPlayer.OCX.7",M="AcroPDF.PDF",N="plugin.activex",O="plugin.quicktime.version",P="plugin.divx.version",Q="npdivx.DivXBrowserPlugin.1",R="object";qx.Bootstrap.define(o,{statics:{getGears:function(){return !!(window.google&&window.google.gears);}
,getActiveX:function(){if(typeof window.ActiveXObject===a){return true;}
;try{return window.ActiveXObject!==undefined&&(typeof (new window.ActiveXObject(G))===R||typeof (new window.ActiveXObject(K))===R);}
catch(S){return false;}
;}
,getSkype:function(){if(qx.bom.client.Plugin.getActiveX()){try{new window.ActiveXObject(d);return true;}
catch(e){}
;}
;var T=navigator.mimeTypes;if(T){if(p in T){return true;}
;for(var i=0;i<T.length;i++ ){var U=T[i];if(U.type.indexOf(y)!=-1){return true;}
;}
;}
;return false;}
,__mL:{quicktime:{plugin:[k],control:f},wmv:{plugin:[v],control:L},divx:{plugin:[E],control:Q},silverlight:{plugin:[c],control:F},pdf:{plugin:[t,g],control:M}},getQuicktimeVersion:function(){var V=qx.bom.client.Plugin.__mL[D];return qx.bom.client.Plugin.__mM(V.control,V.plugin);}
,getWindowsMediaVersion:function(){var W=qx.bom.client.Plugin.__mL[n];return qx.bom.client.Plugin.__mM(W.control,W.plugin,true);}
,getDivXVersion:function(){var X=qx.bom.client.Plugin.__mL[u];return qx.bom.client.Plugin.__mM(X.control,X.plugin);}
,getSilverlightVersion:function(){var Y=qx.bom.client.Plugin.__mL[H];return qx.bom.client.Plugin.__mM(Y.control,Y.plugin);}
,getPdfVersion:function(){var ba=qx.bom.client.Plugin.__mL[m];return qx.bom.client.Plugin.__mM(ba.control,ba.plugin);}
,getQuicktime:function(){var bb=qx.bom.client.Plugin.__mL[D];return qx.bom.client.Plugin.__mN(bb.control,bb.plugin);}
,getWindowsMedia:function(){var bc=qx.bom.client.Plugin.__mL[n];return qx.bom.client.Plugin.__mN(bc.control,bc.plugin,true);}
,getDivX:function(){var bd=qx.bom.client.Plugin.__mL[u];return qx.bom.client.Plugin.__mN(bd.control,bd.plugin);}
,getSilverlight:function(){var be=qx.bom.client.Plugin.__mL[H];return qx.bom.client.Plugin.__mN(be.control,be.plugin);}
,getPdf:function(){var bf=qx.bom.client.Plugin.__mL[m];return qx.bom.client.Plugin.__mN(bf.control,bf.plugin);}
,__mM:function(bo,bk,bj){var bg=qx.bom.client.Plugin.__mN(bo,bk,bj);if(!bg){return w;}
;if(qx.bom.client.Engine.getName()==x&&(qx.bom.client.Browser.getDocumentMode()<11||bj)){try{var bh=new window.ActiveXObject(bo);var bm;if(bh.GetVersions&&bh.GetVersions()){bm=bh.GetVersions().split(q);if(bm.length>1){bm=bm[0].split(s);if(bm.length===2){return bm[1];}
;}
;}
;bm=bh.versionInfo;if(bm!=undefined){return bm;}
;bm=bh.version;if(bm!=undefined){return bm;}
;bm=bh.settings.version;if(bm!=undefined){return bm;}
;}
catch(bp){return w;}
;return w;}
else {var bn=navigator.plugins;var bl=/([0-9]\.[0-9])/g;for(var i=0;i<bn.length;i++ ){var bi=bn[i];for(var j=0;j<bk.length;j++ ){if(bi.name.indexOf(bk[j])!==-1){if(bl.test(bi.name)||bl.test(bi.description)){return RegExp.$1;}
;}
;}
;}
;return w;}
;}
,__mN:function(bt,br,bq){if(qx.bom.client.Engine.getName()==x&&(qx.bom.client.Browser.getDocumentMode()<11||bq)){if(!this.getActiveX()){return false;}
;try{new ActiveXObject(bt);}
catch(bu){return false;}
;return true;}
else {var bs=navigator.plugins;if(!bs){return false;}
;var name;for(var i=0;i<bs.length;i++ ){name=bs[i].name;for(var j=0;j<br.length;j++ ){if(name.indexOf(br[j])!==-1){return true;}
;}
;}
;return false;}
;}
},defer:function(bv){qx.core.Environment.add(A,bv.getGears);qx.core.Environment.add(B,bv.getQuicktime);qx.core.Environment.add(O,bv.getQuicktimeVersion);qx.core.Environment.add(h,bv.getWindowsMedia);qx.core.Environment.add(C,bv.getWindowsMediaVersion);qx.core.Environment.add(r,bv.getDivX);qx.core.Environment.add(P,bv.getDivXVersion);qx.core.Environment.add(l,bv.getSilverlight);qx.core.Environment.add(b,bv.getSilverlightVersion);qx.core.Environment.add(I,bv.getPdf);qx.core.Environment.add(J,bv.getPdfVersion);qx.core.Environment.add(N,bv.getActiveX);qx.core.Environment.add(z,bv.getSkype);}
});}
)();
(function(){var a='<\?xml version="1.0" encoding="utf-8"?>\n<',b="MSXML2.DOMDocument.3.0",c="qx.xml.Document",d="",e=" />",f="xml.domparser",g="SelectionLanguage",h="'",j="MSXML2.XMLHTTP.3.0",k="plugin.activex",m="No XML implementation available!",n="MSXML2.XMLHTTP.6.0",o="xml.implementation",p=" xmlns='",q="text/xml",r="XPath",s="MSXML2.DOMDocument.6.0",t="HTML";qx.Bootstrap.define(c,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(u){if(u.nodeType===9){return u.documentElement.nodeName!==t;}
else if(u.ownerDocument){return this.isXmlDocument(u.ownerDocument);}
else {return false;}
;}
,create:function(v,w){if(qx.core.Environment.get(k)){var x=new ActiveXObject(this.DOMDOC);if(this.DOMDOC==b){x.setProperty(g,r);}
;if(w){var y=a;y+=w;if(v){y+=p+v+h;}
;y+=e;x.loadXML(y);}
;return x;}
;if(qx.core.Environment.get(o)){return document.implementation.createDocument(v||d,w||d,null);}
;throw new Error(m);}
,fromString:function(A){if(qx.core.Environment.get(k)){var B=qx.xml.Document.create();B.loadXML(A);return B;}
;if(qx.core.Environment.get(f)){var z=new DOMParser();return z.parseFromString(A,q);}
;throw new Error(m);}
},defer:function(D){if(qx.core.Environment.get(k)){var C=[s,b];var E=[n,j];for(var i=0,l=C.length;i<l;i++ ){try{new ActiveXObject(C[i]);new ActiveXObject(E[i]);}
catch(F){continue;}
;D.DOMDOC=C[i];D.XMLHTTP=E[i];break;}
;}
;}
});}
)();
(function(){var a="function",b="xml.implementation",c="xml.attributens",d="xml.selectnodes",e="<a></a>",f="xml.getqualifieditem",g="SelectionLanguage",h="xml.getelementsbytagnamens",i="qx.bom.client.Xml",j="xml.domproperties",k="xml.selectsinglenode",l="1.0",m="xml.createnode",n="xml.domparser",o="getProperty",p="undefined",q="XML",r="string",s="xml.createelementns";qx.Bootstrap.define(i,{statics:{getImplementation:function(){return document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature(q,l);}
,getDomParser:function(){return typeof window.DOMParser!==p;}
,getSelectSingleNode:function(){return typeof qx.xml.Document.create().selectSingleNode!==p;}
,getSelectNodes:function(){return typeof qx.xml.Document.create().selectNodes!==p;}
,getElementsByTagNameNS:function(){return typeof qx.xml.Document.create().getElementsByTagNameNS!==p;}
,getDomProperties:function(){var t=qx.xml.Document.create();return (o in t&&typeof t.getProperty(g)===r);}
,getAttributeNS:function(){var u=qx.xml.Document.fromString(e).documentElement;return typeof u.getAttributeNS===a&&typeof u.setAttributeNS===a;}
,getCreateElementNS:function(){return typeof qx.xml.Document.create().createElementNS===a;}
,getCreateNode:function(){return typeof qx.xml.Document.create().createNode!==p;}
,getQualifiedItem:function(){var v=qx.xml.Document.fromString(e).documentElement;return typeof v.attributes.getQualifiedItem!==p;}
},defer:function(w){qx.core.Environment.add(b,w.getImplementation);qx.core.Environment.add(n,w.getDomParser);qx.core.Environment.add(k,w.getSelectSingleNode);qx.core.Environment.add(d,w.getSelectNodes);qx.core.Environment.add(h,w.getElementsByTagNameNS);qx.core.Environment.add(j,w.getDomProperties);qx.core.Environment.add(c,w.getAttributeNS);qx.core.Environment.add(s,w.getCreateElementNS);qx.core.Environment.add(m,w.getCreateNode);qx.core.Environment.add(f,w.getQualifiedItem);}
});}
)();
(function(){var a="borderBottomWidth",b="visible",d="engine.name",e="borderTopWidth",f="top",g="borderLeftStyle",h="none",i="overflow",j="right",k="bottom",l="borderLeftWidth",m="100px",n="-moz-scrollbars-vertical",o="borderRightStyle",p="hidden",q="div",r="left",u="qx.bom.element.Scroll",v="borderRightWidth",w="scroll",x="overflowY";qx.Class.define(u,{statics:{__mO:null,getScrollbarWidth:function(){if(this.__mO!==null){return this.__mO;}
;var y=qx.bom.element.Style;var A=function(E,F){return parseInt(y.get(E,F),10)||0;}
;var B=function(G){return (y.get(G,o)==h?0:A(G,v));}
;var C=function(H){return (y.get(H,g)==h?0:A(H,l));}
;var D=qx.core.Environment.select(d,{"mshtml":function(I){if(y.get(I,x)==p||I.clientWidth==0){return B(I);}
;return Math.max(0,I.offsetWidth-I.clientLeft-I.clientWidth);}
,"default":function(J){if(J.clientWidth==0){var L=y.get(J,i);var K=(L==w||L==n?16:0);return Math.max(0,B(J)+K);}
;return Math.max(0,(J.offsetWidth-J.clientWidth-C(J)));}
});var z=function(M){return D(M)-B(M);}
;var t=document.createElement(q);var s=t.style;s.height=s.width=m;s.overflow=w;document.body.appendChild(t);var c=z(t);this.__mO=c;document.body.removeChild(t);return this.__mO;}
,intoViewX:function(bi,stop,bh){var parent=bi.parentNode;var bg=qx.dom.Node.getDocument(bi);var Y=bg.body;var be,Q,V;var R,P,S;var bb,T,O;var X,bc,bd,ba;var bf,U,bj;var N=bh===r;var W=bh===j;stop=stop?stop.parentNode:bg;while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===Y||qx.bom.element.Style.get(parent,x)!=b)){if(parent===Y){Q=parent.scrollLeft;V=Q+qx.bom.Viewport.getWidth();R=qx.bom.Viewport.getWidth();P=parent.clientWidth;S=parent.scrollWidth;bb=0;T=0;O=0;}
else {be=qx.bom.element.Location.get(parent);Q=be.left;V=be.right;R=parent.offsetWidth;P=parent.clientWidth;S=parent.scrollWidth;bb=parseInt(qx.bom.element.Style.get(parent,l),10)||0;T=parseInt(qx.bom.element.Style.get(parent,v),10)||0;O=R-P-bb-T;}
;X=qx.bom.element.Location.get(bi);bc=X.left;bd=X.right;ba=bi.offsetWidth;bf=bc-Q-bb;U=bd-V+T;bj=0;if(N){bj=bf;}
else if(W){bj=U+O;}
else if(bf<0||ba>P){bj=bf;}
else if(U>0){bj=U+O;}
;parent.scrollLeft+=bj;qx.event.Registration.fireNonBubblingEvent(parent,w);}
;if(parent===Y){break;}
;parent=parent.parentNode;}
;}
,intoViewY:function(bD,stop,bC){var parent=bD.parentNode;var bB=qx.dom.Node.getDocument(bD);var bk=bB.body;var by,bt,bw;var bE,bx,bu;var bp,bl,bA;var br,bs,bq,bm;var bn,bv,bz;var bo=bC===f;var bF=bC===k;stop=stop?stop.parentNode:bB;while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===bk||qx.bom.element.Style.get(parent,x)!=b)){if(parent===bk){bt=parent.scrollTop;bw=bt+qx.bom.Viewport.getHeight();bE=qx.bom.Viewport.getHeight();bx=parent.clientHeight;bu=parent.scrollHeight;bp=0;bl=0;bA=0;}
else {by=qx.bom.element.Location.get(parent);bt=by.top;bw=by.bottom;bE=parent.offsetHeight;bx=parent.clientHeight;bu=parent.scrollHeight;bp=parseInt(qx.bom.element.Style.get(parent,e),10)||0;bl=parseInt(qx.bom.element.Style.get(parent,a),10)||0;bA=bE-bx-bp-bl;}
;br=qx.bom.element.Location.get(bD);bs=br.top;bq=br.bottom;bm=bD.offsetHeight;bn=bs-bt-bp;bv=bq-bw+bl;bz=0;if(bo){bz=bn;}
else if(bF){bz=bv+bA;}
else if(bn<0||bm>bx){bz=bn;}
else if(bv>0){bz=bv+bA;}
;parent.scrollTop+=bz;qx.event.Registration.fireNonBubblingEvent(parent,w);}
;if(parent===bk){break;}
;parent=parent.parentNode;}
;}
,intoView:function(bI,stop,bH,bG){this.intoViewX(bI,stop,bH);this.intoViewY(bI,stop,bG);}
}});}
)();
(function(){var a="Cannot determine a global absolute Object ID because the topmost object is not registered",b="qx.core.Id",c='/',d=")",e="Cannot determine an absolute Object ID because one of the ancestor ObjectID's is null (got as far as ",f="application",g="/",h="string",i="singleton";qx.Class.define(b,{extend:qx.core.Object,type:i,members:{__mP:null,__mQ:null,_createQxObject:function(j){var k=this._createQxObjectImpl(j);return k;}
,_createQxObjectImpl:function(m){if(this.__mP){var l=this.__mP[m];if(l!==undefined){return l;}
;}
;switch(m){case f:return qx.core.Init.getApplication()||undefined;};return undefined;}
,getAbsoluteIdOf:function(n,o){if(this.__mQ&&this.__mQ[n.toHashCode()]){return n.getQxObjectId();}
;var p=[];var q=qx.core.Init.getApplication();while(n){var u=n.getQxObjectId();if(!u){if(!o){this.error(e+p.join(c)+d);}
;return null;}
;p.unshift(u);var s=n.getQxOwner();if(s){var r=null;if(s===q){r=f;}
else {r=this.__mQ&&this.__mQ[s.toHashCode()]||null;}
;if(r){p.unshift(r);break;}
;}
else {if(!o){this.error(a);}
;return null;}
;n=s;}
;var t=p.join(g);return t;}
,register:function(v,w){if(!this.__mP){this.__mP={};this.__mQ={};}
;if(!w){w=v.getQxObjectId();}
;this.__mP[w]=v;this.__mQ[v.toHashCode()]=w;v._cascadeQxObjectIdChanges();}
,unregister:function(A){if(!this.__mP){return false;}
;var z;if(typeof A==h){z=A;}
else {var y=A.toHashCode();z=this.__mQ[y];if(!z){return false;}
;}
;var x=this.__mP[z];if(x){delete this.__mP[z];delete this.__mQ[x.toHashCode()];x._cascadeQxObjectIdChanges();return true;}
;return false;}
,getRegisteredObjects:function(){return this.__mP;}
},statics:{getQxObject:function(B){return this.getInstance().getQxObject(B);}
,getAbsoluteIdOf:function(C,D){return this.getInstance().getAbsoluteIdOf(C,D);}
}});}
)();
(function(){var a=" due to exceptions in user code. The application has to be reloaded!",b="Error in the 'Appearance' queue:",c="Error in the 'Widget' queue:",d="\n",f="Error in the 'Layout' queue:",g="Error in the 'Visibility' queue:",h="qx.debug",i="useraction",j="qx.debug.ui.queue",k="Error while layout flush: ",l="Error in the 'Dispose' queue:",m="Stack trace: \n",n="event.touch",o="qx.ui.core.queue.Manager",p=" times in a row",q="Fatal Error: Flush terminated ";qx.Class.define(o,{statics:{__lR:false,__hr:false,__lS:{},__lT:0,MAX_RETRIES:10,scheduleFlush:function(r){var self=qx.ui.core.queue.Manager;self.__lS[r]=true;if(!self.__lR){self.__hr=false;qx.bom.AnimationFrame.request(function(){if(self.__hr){self.__hr=false;return;}
;self.flush();}
,self);self.__lR=true;}
;}
,flush:function(){var self=qx.ui.core.queue.Manager;if(self.__lU){return;}
;self.__lU=true;self.__hr=true;var s=self.__lS;self.__lV(function(){while(s.visibility||s.widget||s.appearance||s.layout||s.element){if(s.widget){delete s.widget;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Widget.flush();}
catch(e){qx.log.Logger.error(qx.ui.core.queue.Widget,c+e,e);}
;}
else {qx.ui.core.queue.Widget.flush();}
;}
;if(s.visibility){delete s.visibility;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Visibility.flush();}
catch(e){qx.log.Logger.error(qx.ui.core.queue.Visibility,g+e,e);}
;}
else {qx.ui.core.queue.Visibility.flush();}
;}
;if(s.appearance){delete s.appearance;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Appearance.flush();}
catch(e){qx.log.Logger.error(qx.ui.core.queue.Appearance,b+e,e);}
;}
else {qx.ui.core.queue.Appearance.flush();}
;}
;if(s.widget||s.visibility||s.appearance){continue;}
;if(s.layout){delete s.layout;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Layout.flush();}
catch(e){qx.log.Logger.error(qx.ui.core.queue.Layout,f+e,e);}
;}
else {qx.ui.core.queue.Layout.flush();}
;}
;if(s.widget||s.visibility||s.appearance||s.layout){continue;}
;if(s.element){delete s.element;qx.html.Element.flush();}
;}
;}
,function(){self.__lR=false;}
);self.__lV(function(){if(s.dispose){delete s.dispose;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Dispose.flush();}
catch(e){qx.log.Logger.error(l+e);}
;}
else {qx.ui.core.queue.Dispose.flush();}
;}
;}
,function(){self.__lU=false;}
);self.__lT=0;}
,__lV:qx.core.Environment.select(h,{"true":function(t,u){t();u();}
,"false":function(v,w){var self=qx.ui.core.queue.Manager;try{v();}
catch(e){if(qx.core.Environment.get(h)){qx.log.Logger.error(k+e+d+m+qx.dev.StackTrace.getStackTraceFromError(e));}
;self.__lR=false;self.__lU=false;self.__lT+=1;if(self.__lT<=self.MAX_RETRIES){self.scheduleFlush();}
else {throw new Error(q+(self.__lT-1)+p+a);}
;throw e;}
finally{w();}
;}
}),__lW:function(e){qx.ui.core.queue.Manager.flush();}
},defer:function(x){qx.html.Element._scheduleFlush=x.scheduleFlush;qx.event.Registration.addListener(window,i,qx.core.Environment.get(n)?x.__lW:x.flush);}
});}
)();
(function(){var a="qx.ui.core.queue.Widget",b="widget",c="$$default";qx.Class.define(a,{statics:{__eT:[],__lS:{},remove:function(e,g){var d=this.__eT;if(!d.includes(e)){return;}
;var f=e.toHashCode();if(g==null){qx.lang.Array.remove(d,e);delete this.__lS[f];return;}
;if(this.__lS[f]){delete this.__lS[f][g];if(qx.lang.Object.getLength(this.__lS[f])==0){qx.lang.Array.remove(d,e);}
;}
;}
,add:function(j,l){var h=this.__eT;if(!h.includes(j)){h.unshift(j);}
;if(l==null){l=c;}
;var k=j.toHashCode();if(!this.__lS[k]){this.__lS[k]={};}
;this.__lS[k][l]=true;qx.ui.core.queue.Manager.scheduleFlush(b);}
,flush:function(){var m=this.__eT;var n,o;for(var i=m.length-1;i>=0;i-- ){n=m[i];o=this.__lS[n.toHashCode()];m.splice(i,1);n.syncWidget(o);}
;if(m.length!=0){return;}
;this.__eT=[];this.__lS={};}
}});}
)();
(function(){var a="qx.ui.core.queue.Visibility",b="visibility";qx.Class.define(a,{statics:{__eT:[],__lP:{},__dH:{},remove:function(c){if(this.__lP[c.toHashCode()]){delete this.__lP[c.toHashCode()];qx.lang.Array.remove(this.__eT,c);}
;delete this.__dH[c.toHashCode()];}
,isVisible:function(d){return this.__dH[d.toHashCode()]||false;}
,__lQ:function(f){var h=this.__dH;var g=f.toHashCode();var e;if(f.isExcluded()){e=false;}
else {var parent=f.$$parent;if(parent){e=this.__lQ(parent);}
else {e=f.isRootWidget();}
;}
;return h[g]=e;}
,add:function(j){if(this.__lP[j.toHashCode()]){return;}
;this.__eT.unshift(j);this.__lP[j.toHashCode()]=j;qx.ui.core.queue.Manager.scheduleFlush(b);}
,flush:function(){var n=this.__eT;var o=this.__dH;for(var i=n.length-1;i>=0;i-- ){var m=n[i].toHashCode();if(o[m]!=null){n[i].addChildrenToQueue(n);}
;}
;var k={};for(var i=n.length-1;i>=0;i-- ){var m=n[i].toHashCode();k[m]=o[m];o[m]=null;}
;for(var i=n.length-1;i>=0;i-- ){var l=n[i];var m=l.toHashCode();n.splice(i,1);if(o[m]==null){this.__lQ(l);}
;if(o[m]&&o[m]!=k[m]){l.checkAppearanceNeeds();}
;}
;this.__eT=[];this.__lP={};}
}});}
)();
(function(){var a="appearance",b="qx.ui.core.queue.Appearance";qx.Class.define(b,{statics:{__eT:[],__lP:{},remove:function(c){if(this.__lP[c.toHashCode()]){qx.lang.Array.remove(this.__eT,c);delete this.__lP[c.toHashCode()];}
;}
,add:function(d){if(this.__lP[d.toHashCode()]){return;}
;this.__eT.unshift(d);this.__lP[d.toHashCode()]=d;qx.ui.core.queue.Manager.scheduleFlush(a);}
,has:function(e){return !!this.__lP[e.toHashCode()];}
,flush:function(){var h=qx.ui.core.queue.Visibility;var f=this.__eT;var g;for(var i=f.length-1;i>=0;i-- ){g=f[i];f.splice(i,1);delete this.__lP[g.toHashCode()];if(h.isVisible(g)){g.syncAppearance();}
else {g.$$stateChanges=true;}
;}
;}
}});}
)();
(function(){var a="dispose",b="qx.ui.core.queue.Dispose";qx.Class.define(b,{statics:{__eT:[],add:function(d){var c=this.__eT;if(c.includes(d)){return;}
;c.unshift(d);qx.ui.core.queue.Manager.scheduleFlush(a);}
,isEmpty:function(){return this.__eT.length==0;}
,flush:function(){var e=this.__eT;for(var i=e.length-1;i>=0;i-- ){var f=e[i];e.splice(i,1);f.dispose();}
;if(e.length!=0){return;}
;this.__eT=[];}
}});}
)();
(function(){var a="backgroundColor",b="drag",c="_applyNativeContextMenu",d="touch",f="div",g="_applyBackgroundColor",h="qx.event.type.Data",j="object",k="_applyFocusable",m=" requires a layout, but no one was defined!",n="qx.event.type.KeyInput",o="focused",p="disabled",q="move",r="createChildControl",s="qxanonymous",t="Unsupported control: ",u="dragstart",v="Invalid left decorator inset detected: ",w="__jV",x="Font",y="qx.dynlocale",z="dragchange",A="Invalid layout data: ",B="Could not add widget to itself: ",C="_applyEnabled",D="_applySelectable",E="Number",F="_applyKeepActive",G="qx.event.type.Pinch",H="dragend",I="_applyVisibility",J="The 'before' widget is not a child of this widget!",K="Child control '",L="qxDraggable",M="qx.event.type.Roll",N="syncAppearance",O='" while styling ',P="paddingLeft",Q="' of widget ",R="qx.event.type.Mouse",S="Wrong 'left' argument. ",T="_applyPadding",U="#",V="'Child' must be an instance of qx.ui.core.LayoutItem!",W="Remove Error: ",X="visible",Y="qx.event.type.Event",dg="qx.event.type.MouseWheel",dh="_applyCursor",di="changeVisibility",dc="_applyDraggable",dd="resize",de="Decorator",df="At least one child in control ",dn="zIndex",dp="changeTextColor",dq="changeContextMenu",dr="on",dj="paddingTop",dk="opacity",dl="This widget has no children!",dm="changeSelectable",dv="Invalid top decorator inset detected: ",dW="_applyAnonymous",fd="none",dw="outline",ds="hidden",dt="The 'after' widget is not a child of this widget!",eY="_applyAppearance",du=" returned an invalid size hint!",dx="hovered",dy="_applyOpacity",dz="Boolean",dE="px",dF="qx.ui.core.Widget",dG="longtap",dA="default",dB="minHeight is larger than maxHeight!",dC="TabIndex property must be between 1 and 32000",dD="_applyFont",dK="cursor",dL="qxDroppable",dM="' already created!",dN="changeZIndex",dH=": ",dI="Color",fa="changeEnabled",dJ="Abstract method call: _getContentHeightForWidth()!",dR="changeFont",dS="qx.event.type.Focus",fc="__jO",dT="_applyDecorator",dO="_applyZIndex",dP="_applyTextColor",fb=' has no themeable property "',dQ="Widget is not focusable!",dU="qx.ui.menu.Menu",dV="engine.name",ei="qx.event.type.Drag",eh="Invalid right decorator inset detected: ",eg="Invalid widget to add: ",en="qx.event.type.KeySequence",em="excluded",ek="DOM element is not yet created!",ej="_applyToolTipText",eb="The layout of the widget",ea="Exception while creating child control '",dY="qx.event.type.Rotate",dX="_applyDroppable",ef=" is not a child of this widget!",ee="true",ed="widget",ec="Wrong 'top' argument. ",eu="qxClass",et="changeDecorator",es="qx.event.type.Tap",er="Integer",ey="changeBackgroundColor",ex="_applyTabIndex",ew="Invalid bottom decorator inset detected: ",ev="changeAppearance",eq="qx.debug",ep="qx.event.type.Track",eo="shorthand",eJ="/",eI="String",eH="border-box",eN="",eM="_applyContextMenu",eL="changeToolTipText",eK="padding",eC="__jS",eB="tabIndex",eA="paddingBottom",ez="beforeContextmenuOpen",eG="changeNativeContextMenu",eF="undefined",eE="qx.ui.tooltip.ToolTip",eD="contextmenu",eT="__jT",eS="_applyKeepFocus",eR="paddingRight",eQ="minWidth is larger than maxWidth!",eX="changeLocale",eW="qx.event.type.Pointer",eV="qxKeepFocus",eU="opera",eP="qx.event.type.Touch",eO="qxKeepActive",db="absolute";qx.Class.define(dF,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],implement:[qx.core.IDisposable],construct:function(){qx.ui.core.LayoutItem.call(this);this.__jO=this.__jU();this.initFocusable();this.initSelectable();this.initNativeContextMenu();}
,events:{appear:Y,disappear:Y,createChildControl:h,resize:h,move:h,syncAppearance:h,mousemove:R,mouseover:R,mouseout:R,mousedown:R,mouseup:R,click:R,auxclick:R,dblclick:R,contextmenu:R,beforeContextmenuOpen:h,mousewheel:dg,touchstart:eP,touchend:eP,touchmove:eP,touchcancel:eP,tap:es,longtap:es,dbltap:es,swipe:eP,rotate:dY,pinch:G,track:ep,roll:M,pointermove:eW,pointerover:eW,pointerout:eW,pointerdown:eW,pointerup:eW,pointercancel:eW,keyup:en,keydown:en,keypress:en,keyinput:n,focus:dS,blur:dS,focusin:dS,focusout:dS,activate:dS,deactivate:dS,capture:Y,losecapture:Y,drop:ei,dragleave:ei,dragover:ei,drag:ei,dragstart:ei,dragend:ei,dragchange:ei,droprequest:ei},properties:{paddingTop:{check:er,init:0,apply:T,themeable:true},paddingRight:{check:er,init:0,apply:T,themeable:true},paddingBottom:{check:er,init:0,apply:T,themeable:true},paddingLeft:{check:er,init:0,apply:T,themeable:true},padding:{group:[dj,eR,eA,P],mode:eo,themeable:true},zIndex:{nullable:true,init:10,apply:dO,event:dN,check:er,themeable:true},decorator:{nullable:true,init:null,apply:dT,event:et,check:de,themeable:true},backgroundColor:{nullable:true,check:dI,apply:g,event:ey,themeable:true},textColor:{nullable:true,check:dI,apply:dP,event:dp,themeable:true,inheritable:true},font:{nullable:true,apply:dD,check:x,event:dR,themeable:true,inheritable:true,dereference:true},opacity:{check:E,apply:dy,themeable:true,nullable:true,init:null},cursor:{check:eI,apply:dh,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:eE,nullable:true},toolTipText:{check:eI,nullable:true,event:eL,apply:ej},toolTipIcon:{check:eI,nullable:true,event:eL},blockToolTip:{check:dz,init:false},showToolTipWhenDisabled:{check:dz,init:false},visibility:{check:[X,ds,em],init:X,apply:I,event:di},enabled:{init:true,check:dz,inheritable:true,apply:C,event:fa},anonymous:{init:false,check:dz,apply:dW},tabIndex:{check:er,nullable:true,apply:ex},focusable:{check:dz,init:false,apply:k},keepFocus:{check:dz,init:false,apply:eS},keepActive:{check:dz,init:false,apply:F},draggable:{check:dz,init:false,apply:dc},droppable:{check:dz,init:false,apply:dX},selectable:{check:dz,init:false,event:dm,apply:D},contextMenu:{check:dU,apply:eM,nullable:true,event:dq},nativeContextMenu:{check:dz,init:false,themeable:true,event:eG,apply:c},appearance:{check:eI,init:ed,apply:eY,event:ev}},statics:{DEBUG:false,UNFOCUSABLE_WIDGET_FOCUS_BLUR_ERROR:true,getWidgetByElement:function(fg,fe){while(fg){if(qx.core.Environment.get(eq)){qx.core.Assert.assertTrue((!fg.$$widget&&!fg.$$widgetObject)||(fg.$$widgetObject&&fg.$$widget&&fg.$$widgetObject.toHashCode()===fg.$$widget));}
;var ff=fg.$$widgetObject;if(ff){if(!fe||!ff.getAnonymous()){return ff;}
;}
;try{fg=fg.parentNode;}
catch(e){return null;}
;}
;return null;}
,contains:function(parent,fh){while(fh){fh=fh.getLayoutParent();if(parent==fh){return true;}
;}
;return false;}
,__jP:new qx.util.ObjectPool()},members:{__jO:null,__jQ:null,__jR:null,__jS:null,_getLayout:function(){return this.__jS;}
,_setLayout:function(fi){if(qx.core.Environment.get(eq)){if(fi){this.assertInstance(fi,qx.ui.layout.Abstract);}
;}
;if(this.__jS){this.__jS.connectToWidget(null);}
;if(fi){fi.connectToWidget(this);}
;this.__jS=fi;qx.ui.core.queue.Layout.add(this);}
,setLayoutParent:function(parent){if(this.$$parent===parent){return;}
;var content=this.getContentElement();if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(content);}
;this.$$parent=parent||null;if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(content);}
;this.$$refreshInheritables();qx.ui.core.queue.Visibility.add(this);}
,_updateInsets:null,renderLayout:function(fp,top,fm,fk){var fq=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,fp,top,fm,fk);if(!fq){return null;}
;if(qx.lang.Object.isEmpty(fq)&&!this._updateInsets){return null;}
;var content=this.getContentElement();var ft=fq.size||this._updateInsets;var fr=dE;var fj={};if(fq.position){fj.left=fp+fr;fj.top=top+fr;}
;if(ft||fq.margin){fj.width=fm+fr;fj.height=fk+fr;}
;if(Object.keys(fj).length>0){content.setStyles(fj);}
;if(ft||fq.local||fq.margin){if(this.__jS&&this.hasLayoutChildren()){var fo=this.getInsets();var innerWidth=fm-fo.left-fo.right;var innerHeight=fk-fo.top-fo.bottom;var fs=this.getDecorator();var fn={left:0,right:0,top:0,bottom:0};if(fs){fs=qx.theme.manager.Decoration.getInstance().resolve(fs);fn=fs.getPadding();}
;var fl={top:this.getPaddingTop()+fn.top,right:this.getPaddingRight()+fn.right,bottom:this.getPaddingBottom()+fn.bottom,left:this.getPaddingLeft()+fn.left};this.__jS.renderLayout(innerWidth,innerHeight,fl);}
else if(this.hasLayoutChildren()){throw new Error(df+this._findTopControl()+m);}
;}
;if(fq.position&&this.hasListener(q)){this.fireDataEvent(q,this.getBounds());}
;if(fq.size&&this.hasListener(dd)){this.fireDataEvent(dd,this.getBounds());}
;delete this._updateInsets;return fq;}
,__jT:null,clearSeparators:function(){var fv=this.__jT;if(!fv){return;}
;var fw=qx.ui.core.Widget.__jP;var content=this.getContentElement();var fu;for(var i=0,l=fv.length;i<l;i++ ){fu=fv[i];fw.poolObject(fu);content.remove(fu.getContentElement());}
;fv.length=0;}
,renderSeparator:function(fy,fz){var fx=qx.ui.core.Widget.__jP.getObject(qx.ui.core.Widget);fx.set({decorator:fy});var fB=fx.getContentElement();this.getContentElement().add(fB);var fA=fB.getDomElement();if(fA){fA.style.top=fz.top+dE;fA.style.left=fz.left+dE;fA.style.width=fz.width+dE;fA.style.height=fz.height+dE;}
else {fB.setStyles({left:fz.left+dE,top:fz.top+dE,width:fz.width+dE,height:fz.height+dE});}
;if(!this.__jT){this.__jT=[];}
;this.__jT.push(fx);}
,_computeSizeHint:function(){var fI=this.getWidth();var fC=this.getMinWidth();var fD=this.getMaxWidth();var fG=this.getHeight();var fE=this.getMinHeight();var fF=this.getMaxHeight();if(qx.core.Environment.get(eq)){if(fC!==null&&fD!==null){this.assert(fC<=fD,eQ);}
;if(fE!==null&&fF!==null){this.assert(fE<=fF,dB);}
;}
;var fJ=this._getContentHint();var fH=this.getInsets();var fL=fH.left+fH.right;var fK=fH.top+fH.bottom;if(fI==null){fI=fJ.width+fL;}
;if(fG==null){fG=fJ.height+fK;}
;if(fC==null){fC=fL;if(fJ.minWidth!=null){fC+=fJ.minWidth;if(fC>fD&&fD!=null){fC=fD;}
;}
;}
;if(fE==null){fE=fK;if(fJ.minHeight!=null){fE+=fJ.minHeight;if(fE>fF&&fF!=null){fE=fF;}
;}
;}
;if(fD==null){if(fJ.maxWidth==null){fD=Infinity;}
else {fD=fJ.maxWidth+fL;if(fD<fC&&fC!=null){fD=fC;}
;}
;}
;if(fF==null){if(fJ.maxHeight==null){fF=Infinity;}
else {fF=fJ.maxHeight+fK;if(fF<fE&&fE!=null){fF=fE;}
;}
;}
;return {width:fI,minWidth:fC,maxWidth:fD,height:fG,minHeight:fE,maxHeight:fF};}
,invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);if(this.__jS){this.__jS.invalidateLayoutCache();}
;}
,_getContentHint:function(){var fN=this.__jS;if(fN){if(this.hasLayoutChildren()){var fO=fN.getSizeHint();if(qx.core.Environment.get(eq)){var fM=eb+this.toString()+du;this.assertInteger(fO.width,S+fM);this.assertInteger(fO.height,ec+fM);}
;return fO;}
else {return {width:0,height:0};}
;}
else {return {width:100,height:50};}
;}
,_getHeightForWidth:function(fT){var fS=this.getInsets();var fP=fS.left+fS.right;var fV=fS.top+fS.bottom;var fU=fT-fP;var fQ=this._getLayout();if(fQ&&fQ.hasHeightForWidth()){var fW=fQ.getHeightForWidth(fU);}
else {fW=this._getContentHeightForWidth(fU);}
;var fR=fW+fV;return fR;}
,_getContentHeightForWidth:function(fX){throw new Error(dJ);}
,getInsets:function(){var top=this.getPaddingTop();var fY=this.getPaddingRight();var ga=this.getPaddingBottom();var gd=this.getPaddingLeft();if(this.getDecorator()){var gc=qx.theme.manager.Decoration.getInstance().resolve(this.getDecorator());var gb=gc.getInsets();if(qx.core.Environment.get(eq)){this.assertNumber(gb.top,dv+gb.top);this.assertNumber(gb.right,eh+gb.right);this.assertNumber(gb.bottom,ew+gb.bottom);this.assertNumber(gb.left,v+gb.left);}
;top+=gb.top;fY+=gb.right;ga+=gb.bottom;gd+=gb.left;}
;return {"top":top,"right":fY,"bottom":ga,"left":gd};}
,getInnerSize:function(){var gf=this.getBounds();if(!gf){return null;}
;var ge=this.getInsets();return {width:gf.width-ge.left-ge.right,height:gf.height-ge.top-ge.bottom};}
,fadeOut:function(gg){return this.getContentElement().fadeOut(gg);}
,fadeIn:function(gh){return this.getContentElement().fadeIn(gh);}
,_applyAnonymous:function(gi){if(gi){this.getContentElement().setAttribute(s,ee);}
else {this.getContentElement().removeAttribute(s);}
;}
,show:function(){this.setVisibility(X);}
,hide:function(){this.setVisibility(ds);}
,exclude:function(){this.setVisibility(em);}
,isVisible:function(){return this.getVisibility()===X;}
,isHidden:function(){return this.getVisibility()!==X;}
,isExcluded:function(){return this.getVisibility()===em;}
,isSeeable:function(){qx.ui.core.queue.Manager.flush();var gj=this.getContentElement().getDomElement();if(gj){return gj.offsetWidth>0;}
;return false;}
,__jU:function(){var gl=this._createContentElement();gl.connectWidget(this);gl.setStyles({"touch-action":fd,"-ms-touch-action":fd});if(qx.core.Environment.get(eq)){gl.setAttribute(eu,this.classname);}
;var gk={"zIndex":10,"boxSizing":eH};if(!qx.ui.root.Inline||!(this instanceof qx.ui.root.Inline)){gk.position=db;}
;gl.setStyles(gk);return gl;}
,_createContentElement:function(){return new qx.html.Element(f,{overflowX:ds,overflowY:ds});}
,getContentElement:function(){return this.__jO;}
,__jV:null,getLayoutChildren:function(){var gn=this.__jV;if(!gn){return this.__jW;}
;var go;for(var i=0,l=gn.length;i<l;i++ ){var gm=gn[i];if(gm.hasUserBounds()||gm.isExcluded()){if(go==null){go=gn.concat();}
;qx.lang.Array.remove(go,gm);}
;}
;return go||gn;}
,scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);}
,invalidateLayoutChildren:function(){var gp=this.__jS;if(gp){gp.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);}
,hasLayoutChildren:function(){var gr=this.__jV;if(!gr){return false;}
;var gq;for(var i=0,l=gr.length;i<l;i++ ){gq=gr[i];if(!gq.hasUserBounds()&&!gq.isExcluded()){return true;}
;}
;return false;}
,getChildrenContainer:function(){return this;}
,__jW:[],_getChildren:function(){return this.__jV||this.__jW;}
,_indexOf:function(gt){var gs=this.__jV;if(!gs){return -1;}
;return gs.indexOf(gt);}
,_hasChildren:function(){var gu=this.__jV;return gu!=null&&(!!gu[0]);}
,addChildrenToQueue:function(gv){var gw=this.__jV;if(!gw){return;}
;var gx;for(var i=0,l=gw.length;i<l;i++ ){gx=gw[i];gv.push(gx);gx.addChildrenToQueue(gv);}
;}
,_add:function(gz,gy){if(qx.core.Environment.get(eq)){this.assertInstance(gz,qx.ui.core.LayoutItem.constructor,V);}
;if(gz.getLayoutParent()==this){qx.lang.Array.remove(this.__jV,gz);}
;if(this.__jV){this.__jV.push(gz);}
else {this.__jV=[gz];}
;this.__jX(gz,gy);}
,_addAt:function(gD,gA,gC){if(!this.__jV){this.__jV=[];}
;if(gD.getLayoutParent()==this){qx.lang.Array.remove(this.__jV,gD);}
;var gB=this.__jV[gA];if(gB===gD){gD.setLayoutProperties(gC);}
;if(gB){qx.lang.Array.insertBefore(this.__jV,gD,gB);}
else {this.__jV.push(gD);}
;this.__jX(gD,gC);}
,_addBefore:function(gE,gG,gF){if(qx.core.Environment.get(eq)){this.assertInArray(gG,this._getChildren(),J);}
;if(gE==gG){return;}
;if(!this.__jV){this.__jV=[];}
;if(gE.getLayoutParent()==this){qx.lang.Array.remove(this.__jV,gE);}
;qx.lang.Array.insertBefore(this.__jV,gE,gG);this.__jX(gE,gF);}
,_addAfter:function(gJ,gH,gI){if(qx.core.Environment.get(eq)){this.assertInArray(gH,this._getChildren(),dt);}
;if(gJ==gH){return;}
;if(!this.__jV){this.__jV=[];}
;if(gJ.getLayoutParent()==this){qx.lang.Array.remove(this.__jV,gJ);}
;qx.lang.Array.insertAfter(this.__jV,gJ,gH);this.__jX(gJ,gI);}
,_remove:function(gK){if(!this.__jV){throw new Error(dl);}
;qx.lang.Array.remove(this.__jV,gK);this.__jY(gK);}
,_removeAt:function(gL){if(!this.__jV){throw new Error(dl);}
;var gM=this.__jV[gL];qx.lang.Array.removeAt(this.__jV,gL);this.__jY(gM);return gM;}
,_removeAll:function(){if(!this.__jV){return [];}
;var gN=this.__jV.concat();this.__jV.length=0;for(var i=gN.length-1;i>=0;i-- ){this.__jY(gN[i]);}
;qx.ui.core.queue.Layout.add(this);return gN;}
,_afterAddChild:null,_afterRemoveChild:null,__jX:function(gP,gO){if(qx.core.Environment.get(eq)){this.assertInstance(gP,qx.ui.core.LayoutItem,eg+gP);this.assertNotIdentical(gP,this,B+gP);if(gO!=null){this.assertType(gO,j,A+gO);}
;}
;var parent=gP.getLayoutParent();if(parent&&parent!=this){parent._remove(gP);}
;gP.setLayoutParent(this);if(gO){gP.setLayoutProperties(gO);}
else {this.updateLayoutProperties();}
;if(this._afterAddChild){this._afterAddChild(gP);}
;}
,__jY:function(gQ){if(qx.core.Environment.get(eq)){this.assertNotUndefined(gQ);}
;if(gQ.getLayoutParent()!==this){throw new Error(W+gQ+ef);}
;gQ.setLayoutParent(null);if(this.__jS){this.__jS.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);if(this._afterRemoveChild){this._afterRemoveChild(gQ);}
;}
,capture:function(gR){this.getContentElement().capture(gR);}
,releaseCapture:function(){this.getContentElement().releaseCapture();}
,isCapturing:function(){var gS=this.getContentElement().getDomElement();if(!gS){return false;}
;var gT=qx.event.Registration.getManager(gS);var gU=gT.getDispatcher(qx.event.dispatch.MouseCapture);return gS==gU.getCaptureElement();}
,_applyPadding:function(gW,gV,name){this._updateInsets=true;qx.ui.core.queue.Layout.add(this);this.__ka(name,gW);}
,__ka:function(gX,hb){var content=this.getContentElement();var gY=this.getDecorator();gY=qx.theme.manager.Decoration.getInstance().resolve(gY);if(gY){var ha=qx.Bootstrap.firstLow(gX.replace(eK,eN));hb+=gY.getPadding()[ha]||0;}
;content.setStyle(gX,hb+dE);}
,_applyDecorator:function(hd,hc){var content=this.getContentElement();if(hc){hc=qx.theme.manager.Decoration.getInstance().getCssClassName(hc);content.removeClass(hc);}
;if(hd){hd=qx.theme.manager.Decoration.getInstance().addCssClass(hd);content.addClass(hd);}
;if(hd||hc){qx.ui.core.queue.Layout.add(this);}
;}
,_applyToolTipText:function(hg,hf){if(qx.core.Environment.get(y)){if(this.__jR){return;}
;var he=qx.locale.Manager.getInstance();this.__jR=he.addListener(eX,function(){var hh=this.getToolTipText();if(hh&&hh.translate){this.setToolTipText(hh.translate());}
;}
,this);}
;}
,_applyTextColor:function(hj,hi){}
,_applyZIndex:function(hl,hk){this.getContentElement().setStyle(dn,hl==null?0:hl);}
,_applyVisibility:function(hn,hm){var content=this.getContentElement();if(hn===X){content.show();}
else {content.hide();}
;var parent=this.$$parent;if(parent&&(hm==null||hn==null||hm===em||hn===em)){parent.invalidateLayoutChildren();}
;qx.ui.core.queue.Visibility.add(this);}
,_applyOpacity:function(hp,ho){this.getContentElement().setStyle(dk,hp==1?null:hp);}
,_applyCursor:function(hr,hq){if(hr==null&&!this.isSelectable()){hr=dA;}
;this.getContentElement().setStyle(dK,hr,qx.core.Environment.get(dV)==eU);}
,_applyBackgroundColor:function(hv,hu){var ht=this.getBackgroundColor();var content=this.getContentElement();var hs=qx.theme.manager.Color.getInstance().resolve(ht);content.setStyle(a,hs);}
,_applyFont:function(hx,hw){}
,_onChangeTheme:function(){if(this.isDisposed()){return;}
;qx.ui.core.LayoutItem.prototype._onChangeTheme.call(this);this.updateAppearance();var hy=this.getDecorator();this._applyDecorator(null,hy);this._applyDecorator(hy);hy=this.getFont();if(qx.lang.Type.isString(hy)){this._applyFont(hy,hy);}
;hy=this.getTextColor();if(qx.lang.Type.isString(hy)){this._applyTextColor(hy,hy);}
;hy=this.getBackgroundColor();if(qx.lang.Type.isString(hy)){this._applyBackgroundColor(hy,hy);}
;}
,__kb:null,$$stateChanges:null,_forwardStates:null,hasState:function(hA){var hz=this.__kb;return !!hz&&!!hz[hA];}
,addState:function(hE){var hD=this.__kb;if(!hD){hD=this.__kb={};}
;if(hD[hE]){return;}
;this.__kb[hE]=true;if(hE===dx){this.syncAppearance();}
else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var hC=this.__ke;if(forward&&forward[hE]&&hC){var hB;for(var hF in hC){hB=hC[hF];if(hB instanceof qx.ui.core.Widget){hC[hF].addState(hE);}
;}
;}
;}
,removeState:function(hJ){var hI=this.__kb;if(!hI||!hI[hJ]){return;}
;delete this.__kb[hJ];if(hJ===dx){this.syncAppearance();}
else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var hH=this.__ke;if(forward&&forward[hJ]&&hH){for(var hK in hH){var hG=hH[hK];if(hG instanceof qx.ui.core.Widget){hG.removeState(hJ);}
;}
;}
;}
,replaceState:function(hM,hP){var hO=this.__kb;if(!hO){hO=this.__kb={};}
;if(!hO[hP]){hO[hP]=true;}
;if(hO[hM]){delete hO[hM];}
;if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var hN=this.__ke;if(forward&&forward[hP]&&hN){for(var hQ in hN){var hL=hN[hQ];if(hL instanceof qx.ui.core.Widget){hL.replaceState(hM,hP);}
;}
;}
;}
,__kc:null,__kd:null,syncAppearance:function(){var hV=this.__kb;var hU=this.__kc;var hW=qx.theme.manager.Appearance.getInstance();var hS=qx.core.Property.$$method.setThemed;var ib=qx.core.Property.$$method.resetThemed;if(this.__kd){delete this.__kd;if(hU){var hR=hW.styleFrom(hU,hV,null,this.getAppearance());hU=null;}
;}
;if(!hU){var hT=this;var hX=[];do {hX.push(hT.$$subcontrol||hT.getAppearance());}
while(hT=hT.$$subparent);hU=hX.reverse().join(eJ).replace(/#[0-9]+/g,eN);this.__kc=hU;}
;var ia=hW.styleFrom(hU,hV,null,this.getAppearance());if(ia){if(hR){for(var hY in hR){if(ia[hY]===undefined){this[ib[hY]]();}
;}
;}
;if(qx.core.Environment.get(eq)){for(var hY in ia){if(!this[hS[hY]]){throw new Error(this.classname+fb+hY+O+hU);}
;}
;}
;for(var hY in ia){ia[hY]===undefined?this[ib[hY]]():this[hS[hY]](ia[hY]);}
;}
else if(hR){for(var hY in hR){this[ib[hY]]();}
;}
;this.fireDataEvent(N,this.__kb);}
,_applyAppearance:function(ie,ic){this.updateAppearance();}
,checkAppearanceNeeds:function(){if(!this.__jQ){qx.ui.core.queue.Appearance.add(this);this.__jQ=true;}
else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);delete this.$$stateChanges;}
;}
,updateAppearance:function(){this.__kd=true;qx.ui.core.queue.Appearance.add(this);var ii=this.__ke;if(ii){var ig;for(var ih in ii){ig=ii[ih];if(ig instanceof qx.ui.core.Widget){ig.updateAppearance();}
;}
;}
;}
,syncWidget:function(ij){}
,getEventTarget:function(){var ik=this;while(ik.getAnonymous()){ik=ik.getLayoutParent();if(!ik){return null;}
;}
;return ik;}
,getFocusTarget:function(){var il=this;if(!il.getEnabled()){return null;}
;while(il.getAnonymous()||!il.getFocusable()){il=il.getLayoutParent();if(!il||!il.getEnabled()){return null;}
;}
;return il;}
,getFocusElement:function(){return this.getContentElement();}
,isTabable:function(){return (!!this.getContentElement().getDomElement())&&this.isFocusable();}
,_applyFocusable:function(ip,im){var io=this.getFocusElement();if(ip){var iq=this.getTabIndex();if(iq==null){iq=1;}
;io.setAttribute(eB,iq);io.setStyle(dw,fd);}
else {if(io.isNativelyFocusable()){io.setAttribute(eB,-1);}
else if(im){io.setAttribute(eB,null);}
;}
;}
,_applyKeepFocus:function(is){var ir=this.getFocusElement();ir.setAttribute(eV,is?dr:null);}
,_applyKeepActive:function(iu){var it=this.getContentElement();it.setAttribute(eO,iu?dr:null);}
,_applyTabIndex:function(iv){if(iv==null){iv=1;}
else if(iv<1||iv>32000){throw new Error(dC);}
;if(this.getFocusable()&&iv!=null){this.getFocusElement().setAttribute(eB,iv);}
;}
,_applySelectable:function(ix,iw){if(iw!==null){this._applyCursor(this.getCursor());}
;this.getContentElement().setSelectable(ix);}
,_applyEnabled:function(iz,iy){if(iz===false){this.addState(p);this.removeState(dx);if(this.isFocusable()){this.removeState(o);this._applyFocusable(false,true);}
;if(this.isDraggable()){this._applyDraggable(false,true);}
;if(this.isDroppable()){this._applyDroppable(false,true);}
;}
else {this.removeState(p);if(this.isFocusable()){this._applyFocusable(true,false);}
;if(this.isDraggable()){this._applyDraggable(true,false);}
;if(this.isDroppable()){this._applyDroppable(true,false);}
;}
;}
,_applyNativeContextMenu:function(iB,iA,name){}
,_applyContextMenu:function(iD,iC){if(iC){iC.removeState(eD);if(iC.getOpener()==this){iC.resetOpener();}
;if(!iD){this.removeListener(eD,this._onContextMenuOpen);this.removeListener(dG,this._onContextMenuOpen);iC.removeListener(di,this._onBeforeContextMenuOpen,this);}
;}
;if(iD){iD.setOpener(this);iD.addState(eD);if(!iC){this.addListener(eD,this._onContextMenuOpen);this.addListener(dG,this._onContextMenuOpen);iD.addListener(di,this._onBeforeContextMenuOpen,this);}
;}
;}
,_onContextMenuOpen:function(e){if(e.getType()==dG){if(e.getPointerType()!==d){return;}
;}
;this.getContextMenu().openAtPointer(e);e.stop();}
,_onBeforeContextMenuOpen:function(e){if(e.getData()==X&&this.hasListener(ez)){this.fireDataEvent(ez,e);}
;}
,_onStopEvent:function(e){e.stopPropagation();}
,_getDragDropCursor:function(){return qx.ui.core.DragDropCursor.getInstance();}
,_applyDraggable:function(iF,iE){if(!this.isEnabled()&&iF===true){iF=false;}
;this._getDragDropCursor();if(iF){this.addListener(u,this._onDragStart);this.addListener(b,this._onDrag);this.addListener(H,this._onDragEnd);this.addListener(z,this._onDragChange);}
else {this.removeListener(u,this._onDragStart);this.removeListener(b,this._onDrag);this.removeListener(H,this._onDragEnd);this.removeListener(z,this._onDragChange);}
;this.getContentElement().setAttribute(L,iF?dr:null);}
,_applyDroppable:function(iH,iG){if(!this.isEnabled()&&iH===true){iH=false;}
;this.getContentElement().setAttribute(dL,iH?dr:null);}
,_onDragStart:function(e){this._getDragDropCursor().placeToPointer(e);this.getApplicationRoot().setGlobalCursor(dA);}
,_onDrag:function(e){this._getDragDropCursor().placeToPointer(e);}
,_onDragEnd:function(e){this._getDragDropCursor().moveTo(-1000,-1000);this.getApplicationRoot().resetGlobalCursor();}
,_onDragChange:function(e){var iI=this._getDragDropCursor();var iJ=e.getCurrentAction();iJ?iI.setAction(iJ):iI.resetAction();}
,visualizeFocus:function(){this.addState(o);}
,visualizeBlur:function(){this.removeState(o);}
,scrollChildIntoView:function(iO,iN,iM,iL){iL=typeof iL==eF?true:iL;var iK=qx.ui.core.queue.Layout;var parent;if(iL){iL=!iK.isScheduled(iO);parent=iO.getLayoutParent();if(iL&&parent){iL=!iK.isScheduled(parent);if(iL){parent.getChildren().forEach(function(iP){iL=iL&&!iK.isScheduled(iP);}
);}
;}
;}
;this.scrollChildIntoViewX(iO,iN,iL);this.scrollChildIntoViewY(iO,iM,iL);}
,scrollChildIntoViewX:function(iS,iQ,iR){this.getContentElement().scrollChildIntoViewX(iS.getContentElement(),iQ,iR);}
,scrollChildIntoViewY:function(iV,iT,iU){this.getContentElement().scrollChildIntoViewY(iV.getContentElement(),iT,iU);}
,focus:function(){if(this.isFocusable()){this.getFocusElement().focus();}
else if(qx.ui.core.Widget.UNFOCUSABLE_WIDGET_FOCUS_BLUR_ERROR){throw new Error(dQ);}
;}
,blur:function(){if(this.isFocusable()){this.getFocusElement().blur();}
else if(qx.ui.core.Widget.UNFOCUSABLE_WIDGET_FOCUS_BLUR_ERROR){throw new Error(dQ);}
;}
,activate:function(){this.getContentElement().activate();}
,deactivate:function(){this.getContentElement().deactivate();}
,tabFocus:function(){this.getFocusElement().focus();}
,hasChildControl:function(iW){if(!this.__ke){return false;}
;return !!this.__ke[iW];}
,__ke:null,_getCreatedChildControls:function(){return this.__ke;}
,getChildControl:function(ja,iY){if(!this.__ke){if(iY){return null;}
;this.__ke={};}
;var iX=this.__ke[ja];if(iX){return iX;}
;if(iY===true){return null;}
;return this._createChildControl(ja);}
,_showChildControl:function(jc){var jb=this.getChildControl(jc);jb.show();return jb;}
,_excludeChildControl:function(je){var jd=this.getChildControl(je,true);if(jd){jd.exclude();}
;}
,_isChildControlVisible:function(jg){var jf=this.getChildControl(jg,true);if(jf){return jf.isVisible();}
;return false;}
,_releaseChildControl:function(jk){var jh=this.getChildControl(jk,false);if(!jh){throw new Error(t+jk);}
;delete jh.$$subcontrol;delete jh.$$subparent;var ji=this.__kb;var forward=this._forwardStates;if(ji&&forward&&jh instanceof qx.ui.core.Widget){for(var jj in ji){if(forward[jj]){jh.removeState(jj);}
;}
;}
;delete this.__ke[jk];return jh;}
,_createChildControl:function(jp){if(!this.__ke){this.__ke={};}
else if(this.__ke[jp]){throw new Error(K+jp+dM);}
;var jm=jp.indexOf(U);try{if(jm==-1){var jl=this._createChildControlImpl(jp);}
else {var jl=this._createChildControlImpl(jp.substring(0,jm),jp.substring(jm+1,jp.length));}
;}
catch(jq){jq.message=ea+jp+Q+this.toString()+dH+jq.message;throw jq;}
;if(!jl){throw new Error(t+jp);}
;jl.$$subcontrol=jp;jl.$$subparent=this;var jn=this.__kb;var forward=this._forwardStates;if(jn&&forward&&jl instanceof qx.ui.core.Widget){for(var jo in jn){if(forward[jo]){jl.addState(jo);}
;}
;}
;if(jl.$$resyncNeeded){delete jl.$$resyncNeeded;jl.updateAppearance();}
;this.fireDataEvent(r,jl);return this.__ke[jp]=jl;}
,_createChildControlImpl:function(js,jr){return null;}
,_disposeChildControls:function(){var jw=this.__ke;if(!jw){return;}
;var ju=qx.ui.core.Widget;for(var jv in jw){var jt=jw[jv];if(!ju.contains(this,jt)){jt.destroy();}
else {jt.dispose();}
;}
;delete this.__ke;}
,_findTopControl:function(){var jx=this;while(jx){if(!jx.$$subparent){return jx;}
;jx=jx.$$subparent;}
;return null;}
,getSubcontrolId:function(){return this.$$subcontrol||null;}
,getContentLocation:function(jz){var jy=this.getContentElement().getDomElement();return jy?qx.bom.element.Location.get(jy,jz):null;}
,setDomLeft:function(jB){var jA=this.getContentElement().getDomElement();if(jA){jA.style.left=jB+dE;}
else {throw new Error(ek);}
;}
,setDomTop:function(jD){var jC=this.getContentElement().getDomElement();if(jC){jC.style.top=jD+dE;}
else {throw new Error(ek);}
;}
,setDomPosition:function(jF,top){var jE=this.getContentElement().getDomElement();if(jE){jE.style.left=jF+dE;jE.style.top=top+dE;}
else {throw new Error(ek);}
;}
,destroy:function(){if(this.$$disposed){return;}
;var parent=this.$$parent;if(parent){parent._remove(this);}
;qx.ui.core.queue.Dispose.add(this);}
,clone:function(){var jG=qx.ui.core.LayoutItem.prototype.clone.call(this);if(this.getChildren){var jH=this.getChildren();for(var i=0,l=jH.length;i<l;i++ ){jG.add(jH[i].clone());}
;}
;return jG;}
},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(y)){if(this.__jR){qx.locale.Manager.getInstance().removeListenerById(this.__jR);}
;}
;var jI=this.getContentElement();if(jI){jI.disconnectWidget(this);}
;this._disposeChildControls();qx.ui.core.queue.Appearance.remove(this);qx.ui.core.queue.Layout.remove(this);qx.ui.core.queue.Visibility.remove(this);qx.ui.core.queue.Widget.remove(this);}
;if(this.getContextMenu()){this.setContextMenu(null);}
;if(!qx.core.ObjectRegistry.inShutDown){this.clearSeparators();this.__jT=null;}
else {this._disposeArray(eT);}
;this._disposeArray(w);this.__kb=this.__ke=null;this._disposeObjects(eC,fc);}
});}
)();
(function(){var a="DragDrop event \"",b="blur",c="qxDraggable",d="touch",f="qx.ui.core.Widget",g="longtap",h="Escape",i="drag",j="qx.promise",k="Unsupported data type: ",l="roll",m="drop",n="qxDroppable",o="qx.event.handler.DragDrop",p="mouse",q="This method must not be used outside the drop event listener!",r="Control",s="Shift",t="!",u="alias",v="droprequest",w="copy",x="Alt",y="pointerup",z="dragstart",A="move",B="pointerdown",C="dragchange",D="pointermove",E="keydown",F=".getCurrentActionAsync not supported because qx.promise==false",G="keyup",H="keypress",I="dragleave",J="\" returned a promise but a synchronous event was required, drag and drop may not work as expected (consider using getDataAsync)",K="none",L="dragend",M="dragover",N="left",O="Please use a droprequest listener to the drag source to fill the manager with data!",P="on",Q="qx.debug",R="display";qx.Class.define(o,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(S){qx.core.Object.call(this);this.__dQ=S;this.__ef=S.getWindow().document.documentElement;this.__dQ.addListener(this.__ef,g,this._onLongtap,this);this.__dQ.addListener(this.__ef,B,this._onPointerdown,this,true);qx.event.Registration.addListener(window,b,this._onWindowBlur,this);this.__kr();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true,ALLOWED_BUTTONS:[N],MIN_DRAG_DISTANCE:5},properties:{cursor:{check:f,nullable:true,init:null}},members:{__dQ:null,__ef:null,__kf:null,__kg:null,__kh:null,__ki:null,__kj:null,__d:null,__kk:null,__kl:null,__km:false,__kn:false,__ko:false,__kp:null,__kq:null,canHandleEvent:function(U,T){}
,registerEvent:function(X,W,V){}
,unregisterEvent:function(bb,ba,Y){}
,addType:function(bc){this.__kh[bc]=true;}
,addAction:function(bd){this.__ki[bd]=true;}
,supportsType:function(be){return !!this.__kh[be];}
,supportsAction:function(bf){return !!this.__ki[bf];}
,setDropAllowed:function(bg){this.__kn=bg;this.__ks();}
,getData:function(bh){if(!this.__kn||!this.__kf){throw new Error(q);}
;if(!this.__kh[bh]){throw new Error(k+bh+t);}
;if(!this.__d[bh]){this.__kk=bh;this.__da(v,this.__kg,this.__kf,false,false);}
;if(!this.__d[bh]){throw new Error(O);}
;return this.__d[bh]||null;}
,getDataAsync:function(bj){if(!this.__kn||!this.__kf){throw new Error(q);}
;if(!this.__kh[bj]){throw new Error(k+bj+t);}
;var bi={};var self=this;if(!this.__d[bj]){qx.event.Utils.then(bi,function(){self.__kk=bj;return self.__da(v,self.__kg,self.__kf,false);}
);}
;return qx.event.Utils.then(bi,function(){if(!this.__d[bj]){throw new Error(O);}
;return this.__d[bj]||null;}
);}
,getCurrentAction:function(){this.__ks();return this.__kl;}
,getCurrentActionAsync:qx.core.Environment.select(j,{"true":function(){var self=this;return qx.Promise.resolve(self.__ks()).then(function(){return self.__kl;}
);}
,"false":function(){throw new Error(this.classname+F);}
}),getDragTarget:function(){return this.__kp;}
,addData:function(bk,bl){this.__d[bk]=bl;}
,getCurrentType:function(){return this.__kk;}
,isSessionActive:function(){return this.__km;}
,__kr:function(){this.__kh={};this.__ki={};this.__kj={};this.__d={};}
,__ks:function(){if(this.__kg==null){if(qx.core.Environment.get(j)){return qx.Promise.reject();}
else {return null;}
;}
;var bo=this.__ki;var bn=this.__kj;var bp=null;if(this.__kn){if(bn.Shift&&bn.Control&&bo.alias){bp=u;}
else if(bn.Shift&&bn.Alt&&bo.copy){bp=w;}
else if(bn.Shift&&bo.move){bp=A;}
else if(bn.Alt&&bo.alias){bp=u;}
else if(bn.Control&&bo.copy){bp=w;}
else if(bo.move){bp=A;}
else if(bo.copy){bp=w;}
else if(bo.alias){bp=u;}
;}
;var self=this;var bq={};var bm=this.__kl;if(bp!=bm){if(this.__kf){qx.event.Utils.catch(function(){self.__ko=false;bp=null;}
);qx.event.Utils.then(bq,function(){self.__kl=bp;return self.__da(C,self.__kf,self.__kg,true);}
);qx.event.Utils.then(bq,function(br){self.__ko=br;if(!br){bp=null;}
;}
);}
;}
;return qx.event.Utils.then(bq,function(){if(bp!=bm){self.__kl=bp;return self.__da(C,self.__kg,self.__kf,false);}
;}
);}
,__da:function(bz,bt,bu,bv,bA,by){var bx=qx.event.Registration;var bs=bx.createEvent(bz,qx.event.type.Drag,[bv,bA]);if(bt!==bu){bs.setRelatedTarget(bu);}
;var bw=bx.dispatchEvent(bt,bs);if(qx.core.Environment.get(j)){if(by===undefined||by){return qx.Promise.resolve(bw).then(function(){return !bs.getDefaultPrevented();}
);}
else {if(qx.core.Environment.get(Q)){if(bw instanceof qx.Promise){this.error(a+bz+J);}
;}
;return bw;}
;}
else {return bw;}
;}
,__kt:function(bB){while(bB&&bB.nodeType==1){if(bB.getAttribute(c)==P){return bB;}
;bB=bB.parentNode;}
;return null;}
,__ku:function(bC){while(bC&&bC.nodeType==1){if(bC.getAttribute(n)==P){return bC;}
;bC=bC.parentNode;}
;return null;}
,clearSession:function(){this.__dQ.removeListener(this.__ef,D,this._onPointermove,this);this.__dQ.removeListener(this.__ef,y,this._onPointerup,this,true);this.__dQ.removeListener(this.__ef,E,this._onKeyDown,this,true);this.__dQ.removeListener(this.__ef,G,this._onKeyUp,this,true);this.__dQ.removeListener(this.__ef,H,this._onKeyPress,this,true);this.__dQ.removeListener(this.__ef,l,this._onRoll,this,true);var bD={};var self=this;if(this.__kg){qx.event.Utils.then(bD,function(){return self.__da(L,self.__kg,self.__kf,false);}
);}
;return qx.event.Utils.then(bD,function(){self.__kn=false;self.__kf=null;if(self.__kp){self.__kp.removeState(i);self.__kp=null;}
;self.__kg=null;self.__km=false;self.__kq=null;self.__kr();}
);}
,_onLongtap:function(e){if(e.getPointerType()!=d){return;}
;this.__dQ.addListener(this.__ef,l,this._onRoll,this,true);return this._start(e);}
,_start:function(e){var bI=qx.event.handler.DragDrop.ALLOWED_BUTTONS.indexOf(e.getButton())!==-1;if(!e.isPrimary()||!bI){return false;}
;var bE=this.__kq?this.__kq.target:e.getTarget();var bG=this.__kt(bE);if(bG){this.__kg=bG;var bF=qx.ui.core.Widget.getWidgetByElement(this.__kq.original);while(bF&&bF.isAnonymous()){bF=bF.getLayoutParent();}
;if(bF){this.__kp=bF;bF.addState(i);}
;var self=this;var bH={};qx.event.Utils.catch(function(){self.__km=false;}
);qx.event.Utils.then(bH,function(){return self.__da(z,self.__kg,self.__kf,true,e);}
);return qx.event.Utils.then(bH,function(bJ){if(!bJ){return;}
;self.__dQ.addListener(self.__ef,E,self._onKeyDown,self,true);self.__dQ.addListener(self.__ef,G,self._onKeyUp,self,true);self.__dQ.addListener(self.__ef,H,self._onKeyPress,self,true);self.__km=true;}
);}
;}
,_onPointerdown:function(e){if(e.isPrimary()){this.__kq={target:e.getTarget(),original:e.getOriginalTarget(),left:e.getDocumentLeft(),top:e.getDocumentTop()};this.__dQ.addListener(this.__ef,D,this._onPointermove,this);this.__dQ.addListener(this.__ef,y,this._onPointerup,this,true);}
;}
,_onPointermove:function(e){if(!e.isPrimary()){return;}
;var self=this;var bL={};qx.event.Utils.catch(function(){return self.clearSession();}
);if(!self.__km&&e.getPointerType()==p){var bM=self._getDelta(e);var bK=qx.event.handler.DragDrop.MIN_DRAG_DISTANCE;if(bM&&(Math.abs(bM.x)>bK||Math.abs(bM.y)>bK)){qx.event.Utils.then(bL,function(){return self._start(e);}
);}
;}
;return qx.event.Utils.then(bL,function(){if(!self.__km){return;}
;var bN={};qx.event.Utils.then(bN,function(){return self.__da(i,self.__kg,self.__kf,true,e);}
);qx.event.Utils.then(bN,function(bU){if(!bU){this.clearSession();}
;var bO=e.getTarget();if(self.__kq.target===bO){bO=e.getNativeEvent().view.document.elementFromPoint(e.getDocumentLeft(),e.getDocumentTop());}
;var bS=self.getCursor();if(!bS){bS=qx.ui.core.DragDropCursor.getInstance();}
;var bQ=bS.getContentElement().getDomElement();if(bQ&&(bO===bQ||bQ.contains(bO))){var bV=qx.bom.element.Style.get(bQ,R);qx.bom.element.Style.set(bQ,R,K);bO=e.getNativeEvent().view.document.elementFromPoint(e.getDocumentLeft(),e.getDocumentTop());qx.bom.element.Style.set(bQ,R,bV);}
;if(bO!==bQ){var bR=self.__ku(bO);if(bR&&bR!=self.__kf){var bP=self.__kf;self.__kn=true;self.__kf=bR;var bT={};qx.event.Utils.catch(bT,function(){self.__kf=null;self.__kn=false;}
);if(bP){qx.event.Utils.then(bT,function(){return self.__da(I,bP,self.__kg,false,e);}
);}
;qx.event.Utils.then(bT,function(){return self.__da(M,bR,self.__kg,true,e);}
);return qx.event.Utils.then(bT,function(bW){self.__kn=bW;}
);}
else if(!bR&&self.__kf){var bT={};qx.event.Utils.then(bT,function(){return self.__da(I,self.__kf,self.__kg,false,e);}
);return qx.event.Utils.then(bT,function(){self.__kf=null;self.__kn=false;return self.__ks();}
);}
;}
;}
);return qx.event.Utils.then(bN,function(){var bX=self.__kj;bX.Control=e.isCtrlPressed();bX.Shift=e.isShiftPressed();bX.Alt=e.isAltPressed();return self.__ks();}
);}
);}
,_getDelta:function(e){if(!this.__kq){return null;}
;var bY=e.getDocumentLeft()-this.__kq.left;var ca=e.getDocumentTop()-this.__kq.top;return {"x":bY,"y":ca};}
,_onPointerup:function(e){if(!e.isPrimary()){return;}
;var cb={};var self=this;if(this.__kn&&this.__ko){qx.event.Utils.then(cb,function(){return self.__da(m,self.__kf,self.__kg,false,e);}
);}
;return qx.event.Utils.then(cb,function(){if(e.getTarget()==self.__kg){e.stopPropagation();}
;return self.clearSession();}
);}
,_onRoll:function(e){e.stop();}
,_onWindowBlur:function(e){return this.clearSession();}
,_onKeyDown:function(e){var cc=e.getKeyIdentifier();switch(cc){case x:case r:case s:if(!this.__kj[cc]){this.__kj[cc]=true;return this.__ks();}
;};}
,_onKeyUp:function(e){var cd=e.getKeyIdentifier();switch(cd){case x:case r:case s:if(this.__kj[cd]){this.__kj[cd]=false;return this.__ks();}
;};}
,_onKeyPress:function(e){var ce=e.getKeyIdentifier();switch(ce){case h:return this.clearSession();};}
},destruct:function(){qx.event.Registration.removeListener(window,b,this._onWindowBlur,this);this.__kg=this.__kf=this.__dQ=this.__ef=this.__kh=this.__ki=this.__kj=this.__d=null;}
,defer:function(cf){qx.event.Registration.addHandler(cf);}
});}
)();
(function(){var a="qx.event.type.Drag",b="touch";qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(c,d){qx.event.type.Event.prototype.init.call(this,true,c);if(d){this._native=d.getNativeEvent()||null;this._originalTarget=d.getOriginalTarget()||null;}
else {this._native=null;this._originalTarget=null;}
;return this;}
,clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);f._native=this._native;return f;}
,getDocumentLeft:function(){if(this._native==null){return 0;}
;var x=this._native.pageX;if(x!==undefined){if(x==0&&this._native.pointerType==b){x=this._native._original.changedTouches[0].pageX||0;}
;return Math.round(x);}
else {var g=qx.dom.Node.getWindow(this._native.srcElement);return Math.round(this._native.clientX)+qx.bom.Viewport.getScrollLeft(g);}
;}
,getDocumentTop:function(){if(this._native==null){return 0;}
;var y=this._native.pageY;if(y!==undefined){if(y==0&&this._native.pointerType==b){y=this._native._original.changedTouches[0].pageY||0;}
;return Math.round(y);}
else {var h=qx.dom.Node.getWindow(this._native.srcElement);return Math.round(this._native.clientY)+qx.bom.Viewport.getScrollTop(h);}
;}
,getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);}
,addType:function(i){this.getManager().addType(i);}
,addAction:function(j){this.getManager().addAction(j);}
,supportsType:function(k){return this.getManager().supportsType(k);}
,supportsAction:function(l){return this.getManager().supportsAction(l);}
,addData:function(m,n){this.getManager().addData(m,n);}
,getData:function(o){return this.getManager().getData(o);}
,getDataAsync:function(p){return this.getManager().getDataAsync(p);}
,getCurrentType:function(){return this.getManager().getCurrentType();}
,getCurrentAction:function(){if(this.getDefaultPrevented()){return null;}
;return this.getManager().getCurrentAction();}
,getCurrentActionAsync:function(){if(this.getDefaultPrevented()){return null;}
;return this.getManager().getCurrentActionAsync();}
,setDropAllowed:function(q){this.getManager().setDropAllowed(q);}
,getDragTarget:function(){return this.getManager().getDragTarget();}
,stopSession:function(){this.getManager().clearSession();}
}});}
)();
(function(){var a="best-fit",b="placementRight",c="Boolean",d="bottom-right",e="' ",f="widget",g="placementLeft",h="qx.ui.core.MPlacement",i="left-top",j="Integer",k="left-middle",l="right-middle",m="top-center",n="[qx.ui.core.MPlacement.setMoveDirection()], the value was '",o="offsetRight",p="interval",q="keep-align",r="bottom-left",s="pointer",t="direct",u="shorthand",v="Invalid value for the parameter 'direction' ",w="offsetLeft",x="top-left",y="appear",z="offsetBottom",A="top",B="top-right",C="offsetTop",D="but 'top' or 'left' are allowed.",E="right-bottom",F="disappear",G="right-top",H="bottom-center",I="left-bottom",J="left";qx.Mixin.define(h,{statics:{__hF:null,__kv:J,setVisibleElement:function(K){this.__hF=K;}
,getVisibleElement:function(){return this.__hF;}
,setMoveDirection:function(L){if(L===A||L===J){this.__kv=L;}
else {throw new Error(v+n+L+e+D);}
;}
,getMoveDirection:function(){return this.__kv;}
},properties:{position:{check:[x,m,B,r,H,d,i,k,I,G,l,E],init:r,themeable:true},placeMethod:{check:[f,s],init:s,themeable:true},domMove:{check:c,init:false},placementModeX:{check:[t,q,a],init:q,themeable:true},placementModeY:{check:[t,q,a],init:q,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[C,o,z,w],mode:u,themeable:true}},members:{__kw:null,__kx:null,__ky:null,getLayoutLocation:function(N){var P,O,R,top;O=N.getBounds();if(!O){return null;}
;R=O.left;top=O.top;var Q=O;N=N.getLayoutParent();while(N&&!N.isRootWidget()){O=N.getBounds();R+=O.left;top+=O.top;P=N.getInsets();R+=P.left;top+=P.top;N=N.getLayoutParent();}
;if(N&&N.isRootWidget()){var M=N.getContentLocation();if(M){R+=M.left;top+=M.top;}
;}
;return {left:R,top:top,right:R+Q.width,bottom:top+Q.height};}
,moveTo:function(Y,top){var X=qx.ui.core.MPlacement.getVisibleElement();if(X){var W=this.getBounds();var V=X.getContentLocation();if(W&&V){var U=top+W.height;var T=Y+W.width;if((T>V.left&&Y<V.right)&&(U>V.top&&top<V.bottom)){var S=qx.ui.core.MPlacement.getMoveDirection();if(S===J){Y=Math.max(V.left-W.width,0);}
else {top=Math.max(V.top-W.height,0);}
;}
;}
;}
;if(this.getDomMove()){this.setDomPosition(Y,top);}
else {this.setLayoutProperties({left:Y,top:top});}
;}
,placeToWidget:function(bc,ba){if(ba){this.__kz();this.__kw=qx.lang.Function.bind(this.placeToWidget,this,bc,false);qx.event.Idle.getInstance().addListener(p,this.__kw);this.__ky=function(){this.__kz();}
;this.addListener(F,this.__ky,this);}
;var bb=bc.getContentLocation()||this.getLayoutLocation(bc);if(bb!=null){this._place(bb);return true;}
else {return false;}
;}
,__kz:function(){if(this.__kw){qx.event.Idle.getInstance().removeListener(p,this.__kw);this.__kw=null;}
;if(this.__ky){this.removeListener(F,this.__ky,this);this.__ky=null;}
;}
,placeToPointer:function(event){var be=Math.round(event.getDocumentLeft());var top=Math.round(event.getDocumentTop());var bd={left:be,top:top,right:be,bottom:top};this._place(bd);}
,placeToElement:function(bh,bf){var location=qx.bom.element.Location.get(bh);var bg={left:location.left,top:location.top,right:location.left+bh.offsetWidth,bottom:location.top+bh.offsetHeight};if(bf){this.__kw=qx.lang.Function.bind(this.placeToElement,this,bh,false);qx.event.Idle.getInstance().addListener(p,this.__kw);this.addListener(F,function(){if(this.__kw){qx.event.Idle.getInstance().removeListener(p,this.__kw);this.__kw=null;}
;}
,this);}
;this._place(bg);}
,placeToPoint:function(bj){var bi={left:bj.left,top:bj.top,right:bj.left,bottom:bj.top};this._place(bi);}
,_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};}
,__kA:function(bk){var bl=null;if(this._computePlacementSize){var bl=this._computePlacementSize();}
else if(this.isVisible()){var bl=this.getBounds();}
;if(bl==null){this.addListenerOnce(y,function(){this.__kA(bk);}
,this);}
else {bk.call(this,bl);}
;}
,_place:function(bm){this.__kA(function(bo){var bn=qx.util.placement.Placement.compute(bo,this.getLayoutParent().getBounds(),bm,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());this.removeState(g);this.removeState(b);this.addState(bm.left<bn.left?b:g);this.moveTo(bn.left,bn.top);}
);}
},destruct:function(){this.__kz();}
});}
)();
(function(){var a="Number",b="interval",c="_applyTimeoutInterval",d="qx.event.type.Event",e="qx.event.Idle",f="singleton";qx.Class.define(e,{extend:qx.core.Object,implement:[qx.core.IDisposable],type:f,construct:function(){qx.core.Object.call(this);}
,events:{"interval":d},properties:{timeoutInterval:{check:a,init:100,apply:c}},members:{__eg:null,_applyTimeoutInterval:function(g){if(this.__eg){this.__eg.setInterval(g);}
;}
,_onInterval:function(){this.fireEvent(b);}
,__kB:function(){if(!this.__eg&&this.hasListener(b)){var h=new qx.event.Timer(this.getTimeoutInterval());h.addListener(b,this._onInterval,this);h.start();this.__eg=h;}
;}
,__kC:function(){if(this.__eg&&!this.hasListener(b)){this.__eg.stop();this.__eg.dispose();this.__eg=null;}
;}
,addListener:function(k,i,self,j){var l=qx.core.Object.prototype.addListener.call(this,k,i,self,j);this.__kB();return l;}
,addListenerOnce:function(o,m,self,n){var p=qx.core.Object.prototype.addListenerOnce.call(this,o,m,self,n);this.__kB();return p;}
,removeListener:function(s,q,self,r){var t=qx.core.Object.prototype.removeListener.call(this,s,q,self,r);this.__kC();return t;}
,removeListenerById:function(u){var v=qx.core.Object.prototype.removeListenerById.call(this,u);this.__kC();return v;}
},destruct:function(){if(this.__eg){this.__eg.stop();}
;this.__eg=null;}
});}
)();
(function(){var a="-",b="best-fit",c="size",d="edge-start",e="target.bottom",f="offsets",g="size.width",h="bottom",i="offsets.bottom",j="qx.util.placement.Placement",k="Please use '",l="qx.debug",m="keep-align",n="center",o="target.right",p="direct",q="offsets.right",r="middle",s="target",t='__kD',u="align-start",v="Invalid 'mode' argument!'",w="left",x="align-end",y="Class",z="offsets.left",A="top",B="area",C="right",D="edge-end",E="target.top",F="area.height",G="target.left",H="align-center",I="area.width",J="' instead!",K="size.height",L="offsets.top";qx.Class.define(j,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__kD=qx.util.placement.DirectAxis;}
,properties:{axisX:{check:y},axisY:{check:y},edge:{check:[A,C,h,w],init:A},align:{check:[A,C,h,w,n,r],init:C}},statics:{__kE:null,compute:function(W,P,M,N,V,Q,R){this.__kE=this.__kE||new qx.util.placement.Placement();var T=V.split(a);var S=T[0];var O=T[1];if(qx.core.Environment.get(l)){if(O===n||O===r){var U=r;if(S===A||S===h){U=n;}
;qx.core.Assert.assertEquals(U,O,k+S+a+U+J);}
;}
;this.__kE.set({axisX:this.__kI(Q),axisY:this.__kI(R),edge:S,align:O});return this.__kE.compute(W,P,M,N);}
,__kF:null,__kG:null,__kH:null,__kI:function(X){switch(X){case p:this.__kF=this.__kF||qx.util.placement.DirectAxis;return this.__kF;case m:this.__kG=this.__kG||qx.util.placement.KeepAlignAxis;return this.__kG;case b:this.__kH=this.__kH||qx.util.placement.BestFitAxis;return this.__kH;default:throw new Error(v);};}
},members:{__kD:null,compute:function(be,bb,Y,ba){if(qx.core.Environment.get(l)){this.assertObject(be,c);this.assertNumber(be.width,g);this.assertNumber(be.height,K);this.assertObject(bb,B);this.assertNumber(bb.width,I);this.assertNumber(bb.height,F);this.assertObject(Y,s);this.assertNumber(Y.top,E);this.assertNumber(Y.right,o);this.assertNumber(Y.bottom,e);this.assertNumber(Y.left,G);this.assertObject(ba,f);this.assertNumber(ba.top,L);this.assertNumber(ba.right,q);this.assertNumber(ba.bottom,i);this.assertNumber(ba.left,z);}
;var bc=this.getAxisX()||this.__kD;var bf=bc.computeStart(be.width,{start:Y.left,end:Y.right},{start:ba.left,end:ba.right},bb.width,this.__kJ());var bd=this.getAxisY()||this.__kD;var top=bd.computeStart(be.height,{start:Y.top,end:Y.bottom},{start:ba.top,end:ba.bottom},bb.height,this.__kK());return {left:bf,top:top};}
,__kJ:function(){var bh=this.getEdge();var bg=this.getAlign();if(bh==w){return d;}
else if(bh==C){return D;}
else if(bg==w){return u;}
else if(bg==n){return H;}
else if(bg==C){return x;}
;}
,__kK:function(){var bj=this.getEdge();var bi=this.getAlign();if(bj==A){return d;}
else if(bj==h){return D;}
else if(bi==A){return u;}
else if(bi==r){return H;}
else if(bi==h){return x;}
;}
},destruct:function(){this._disposeObjects(t);}
});}
)();
(function(){var a="align-start",b="align-end",c="qx.util.placement.AbstractAxis",d="edge-start",e="align-center",f="abstract method call!",g="edge-end";qx.Bootstrap.define(c,{extend:Object,statics:{computeStart:function(j,k,l,h,i){throw new Error(f);}
,_moveToEdgeAndAlign:function(n,o,p,m){switch(m){case d:return o.start-p.end-n;case g:return o.end+p.start;case a:return o.start+p.start;case e:return o.start+parseInt((o.end-o.start-n)/2,10)+p.start;case b:return o.end-p.end-n;};}
,_isInRange:function(r,s,q){return r>=0&&r+s<=q;}
}});}
)();
(function(){var a="qx.util.placement.DirectAxis";qx.Bootstrap.define(a,{statics:{_moveToEdgeAndAlign:qx.util.placement.AbstractAxis._moveToEdgeAndAlign,computeStart:function(d,e,f,b,c){return this._moveToEdgeAndAlign(d,e,f,c);}
}});}
)();
(function(){var a="qx.util.placement.KeepAlignAxis",b="edge-start",c="edge-end";qx.Bootstrap.define(a,{statics:{_moveToEdgeAndAlign:qx.util.placement.AbstractAxis._moveToEdgeAndAlign,_isInRange:qx.util.placement.AbstractAxis._isInRange,computeStart:function(k,f,g,d,j){var i=this._moveToEdgeAndAlign(k,f,g,j);var e,h;if(this._isInRange(i,k,d)){return i;}
;if(j==b||j==c){e=f.start-g.end;h=f.end+g.start;}
else {e=f.end-g.end;h=f.start+g.start;}
;if(e>d-h){i=Math.max(0,e-k);}
else {i=h;}
;return i;}
}});}
)();
(function(){var a="qx.util.placement.BestFitAxis";qx.Bootstrap.define(a,{statics:{_isInRange:qx.util.placement.AbstractAxis._isInRange,_moveToEdgeAndAlign:qx.util.placement.AbstractAxis._moveToEdgeAndAlign,computeStart:function(g,c,d,b,f){var e=this._moveToEdgeAndAlign(g,c,d,f);if(this._isInRange(e,g,b)){return e;}
;if(e<0){e=Math.min(0,b-g);}
;if(e+g>b){e=Math.max(0,b-g);}
;return e;}
}});}
)();
(function(){var a="Image could not be loaded: ",b="Boolean",c="px",d="backgroundRepeat",e="http",f=".png",g="Font source needs either a glyph name or the unicode number in hex",h="background-image",i="engine.version",j="scale",k="changeSource",l="div",m=", 0 0",n="class",o="aborted",p="background-size",q="color",r="scaled",s="qx.ui.basic.Image",t="top",u="0 0",v="fontSize",w="center",x="verticalAlign",y="qx.debug",z="textAlign",A="loaded",B="backgroundImage",C='font',D="-disabled.$1",E="font",F="qx.event.type.Event",G="image",H="loadingFailed",I="css.alphaimageloaderneeded",J="/",K="String",L="browser.documentmode",M="backgroundPosition",N="border-box",O="",P="changeScale",Q="left",R="_applySource",S=",",T="img",U="@",V="data:image/",W="px, ",X="middle",Y="nonScaled",bz="table-cell",bA=", ",bB="background",bv="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",bw="__kL",bx="mshtml",by="engine.name",bF="Virtual image source contains unkown font descriptor",bG="_applyScale",bH="try to load an unmanaged relative image: ",bL=", no-repeat",bC="position",bD="replacement",bE="no-repeat",bt="background-position",bI="hidden",bu="alphaScaled",bJ="display",bK="absolute";qx.Class.define(s,{extend:qx.ui.core.Widget,construct:function(bM){this.__kL={};qx.ui.core.Widget.call(this);if(bM){this.setSource(bM);}
;}
,properties:{source:{check:K,init:null,nullable:true,event:k,apply:R,themeable:true},scale:{check:b,init:false,event:P,themeable:true,apply:bG},appearance:{refine:true,init:G},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:F,loaded:F,aborted:F},statics:{PLACEHOLDER_IMAGE:bv},members:{__kM:null,__kN:null,__kO:null,__kL:null,__kP:null,__kQ:null,__kR:0,_onChangeTheme:function(){qx.ui.core.Widget.prototype._onChangeTheme.call(this);this._styleSource();}
,getContentElement:function(){return this.__kV();}
,_createContentElement:function(){return this.__kV();}
,_getContentHint:function(){return {width:this.__kM||0,height:this.__kN||0};}
,_applyDecorator:function(bP,bO){qx.ui.core.Widget.prototype._applyDecorator.call(this,bP,bO);var bQ=this.getSource();bQ=qx.util.AliasManager.getInstance().resolve(bQ);var bN=this.getContentElement();if(this.__kQ){bN=bN.getChild(0);}
;this.__lg(bN,bQ);}
,_applyTextColor:function(bS){if(this.__kT()===E){var bR=this.getContentElement();if(this.__kQ){bR=bR.getChild(0);}
;if(bS){bR.setStyle(q,qx.theme.manager.Color.getInstance().resolve(bS));}
else {bR.removeStyle(q);}
;}
;}
,_applyPadding:function(bU,bT,name){qx.ui.core.Widget.prototype._applyPadding.call(this,bU,bT,name);var bV=this.getContentElement();if(this.__kQ){bV.getChild(0).setStyles({top:this.getPaddingTop()||0,left:this.getPaddingLeft()||0});}
else if(this.__kT()===C){bV.setStyles({top:this.getPaddingTop()||0,left:this.getPaddingLeft()||0});}
else {bV.setPadding(this.getPaddingLeft()||0,this.getPaddingTop()||0);}
;}
,renderLayout:function(bY,top,bW,ca){qx.ui.core.Widget.prototype.renderLayout.call(this,bY,top,bW,ca);var bX=this.getContentElement();if(this.__kQ){bX.getChild(0).setStyles({width:bW-(this.getPaddingLeft()||0)-(this.getPaddingRight()||0),height:ca-(this.getPaddingTop()||0)-(this.getPaddingBottom()||0),top:this.getPaddingTop()||0,left:this.getPaddingLeft()||0});}
;}
,_applyEnabled:function(cc,cb){qx.ui.core.Widget.prototype._applyEnabled.call(this,cc,cb);if(this.getSource()){this._styleSource();}
;}
,_applySource:function(ce,cd){if(cd){if(qx.io.ImageLoader.isLoading(cd)){qx.io.ImageLoader.abort(cd);}
;}
;this._styleSource();}
,_applyScale:function(cf){this._styleSource();}
,__kS:function(cg){this.__kO=cg;}
,__kT:function(){if(this.__kO==null){var ci=this.getSource();if(ci&&qx.lang.String.startsWith(ci,U)){this.__kO=E;}
;var ch=false;if(ci!=null){ch=ci.endsWith(f);}
;if(this.getScale()&&ch&&qx.core.Environment.get(I)){this.__kO=bu;}
else if(this.getScale()){this.__kO=r;}
else {this.__kO=Y;}
;}
;return this.__kO;}
,__kU:function(cm){var cj;var cn;var cl=qx.html.Image;switch(cm){case E:cl=qx.html.Label;cj=true;cn=l;break;case bu:cj=true;cn=l;break;case Y:cj=false;cn=l;break;default:cj=true;cn=T;break;};var co=new (cl)(cn);co.connectWidget(this);co.setStyles({"overflowX":bI,"overflowY":bI,"boxSizing":N});if(cm==E){co.setRich(true);}
else {co.setScale(cj);if(qx.core.Environment.get(I)){var ck=this.__kQ=new qx.html.Element(l);co.connectWidget(this);ck.setStyle(bC,bK);ck.add(co);return ck;}
;}
;return co;}
,__kV:function(){if(this.$$disposed){return null;}
;var cp=this.__kT();if(this.__kL[cp]==null){this.__kL[cp]=this.__kU(cp);}
;var cq=this.__kL[cp];if(!this.__kP){this.__kP=cq;}
;return cq;}
,_styleSource:function(){var cw=qx.util.AliasManager.getInstance();var cu=qx.util.ResourceManager.getInstance();var cy=cw.resolve(this.getSource());var cx=this.getContentElement();if(this.__kQ){cx=cx.getChild(0);}
;if(!cy){this.__lf(cx);return;}
;this.__kY(cy);if((qx.core.Environment.get(by)==bx)&&(parseInt(qx.core.Environment.get(i),10)<9||qx.core.Environment.get(L)<9)){var cs=this.getScale()?j:bE;cx.tagNameHint=qx.bom.element.Decoration.getTagName(cs,cy);}
;var ct=this.__kX();if(cu.isFontUri(cy)){this.__lb(ct,cy);var cv=this.getTextColor();if(qx.lang.Type.isString(cv)){this._applyTextColor(cv,null);}
;}
else if(cu.has(cy)){var cz=cu.findHighResolutionSource(cy);if(cz){var cB=cu.getImageWidth(cy);var cA=cu.getImageHeight(cy);this.setWidth(cB);this.setHeight(cA);var cr=cB+W+cA+c;this.__kP.setStyle(p,cr);this.setSource(cz);cy=cz;}
;this.__lb(ct,cy);this.__kW();}
else if(qx.io.ImageLoader.isLoaded(cy)){this.__lc(ct,cy);this.__kW();}
else {this.__ld(ct,cy);}
;}
,__kW:function(){this.__kR++ ;qx.bom.AnimationFrame.request(function(cC){if(cC===this.__kR){this.fireEvent(A);}
else {this.fireEvent(o);}
;}
.bind(this,this.__kR));}
,__kX:function(){var cD=this.__kP;if(this.__kQ){cD=cD.getChild(0);}
;return cD;}
,__kY:qx.core.Environment.select(by,{"mshtml":function(cH){var cG=qx.core.Environment.get(I);var cE=cH.endsWith(f);var cF=cH.startsWith(U);if(cF){this.__kS(E);}
else if(cG&&cE){if(this.getScale()&&this.__kT()!=bu){this.__kS(bu);}
else if(!this.getScale()&&this.__kT()!=Y){this.__kS(Y);}
;}
else {if(this.getScale()&&this.__kT()!=r){this.__kS(r);}
else if(!this.getScale()&&this.__kT()!=Y){this.__kS(Y);}
;}
;this.__la(this.__kV());}
,"default":function(cI){var cJ=cI&&qx.lang.String.startsWith(cI,U);if(cJ){this.__kS(E);}
else if(this.getScale()&&this.__kT()!=r){this.__kS(r);}
else if(!this.getScale()&&this.__kT()!=Y){this.__kS(Y);}
;this.__la(this.__kV());}
}),__la:function(cN){var cM=this.__kP;if(cM!=cN){if(cM!=null){var db=c;var cK={};var cQ=cM.getAllStyles();if(cQ){for(var cT in cQ){cK[cT]=cQ[cT];}
;}
;if(this.__kT()===E){delete cK.backgroundImage;}
;var cS=this.getBounds();if(cS!=null){cK.width=cS.width+db;cK.height=cS.height+db;}
;var cU=this.getInsets();cK.left=parseInt(cM.getStyle(Q)||cU.left)+db;cK.top=parseInt(cM.getStyle(t)||cU.top)+db;cK.zIndex=10;var cV=this.__kQ?cN.getChild(0):cN;cV.setStyles(cK,true);cV.setSelectable(this.getSelectable());if(!cM.isVisible()){cN.hide();}
else if(!cN.isVisible()){cN.show();}
;if(!cM.isIncluded()){cN.exclude();}
else if(!cN.isIncluded()){cN.include();}
;var cX=cM.getParent();if(cX){var cL=cX.getChildren().indexOf(cM);cX.removeAt(cL);cX.addAt(cN,cL);}
;var cP=cV.getNodeName();if(cV.setSource){cV.setSource(null);}
else {cV.setValue(O);}
;var cO=this.__kX();cV.tagNameHint=cP;cV.setAttribute(n,cO.getAttribute(n));qx.html.Element.flush();var da=cO.getDomElement();var cY=cN.getDomElement();var cW=cM.getListeners()||[];cW.forEach(function(dc){cN.addListener(dc.type,dc.handler,dc.self,dc.capture);}
);if(da&&cY){var cR=da.$$hash;da.$$hash=cY.$$hash;cY.$$hash=cR;}
;this.__kP=cN;}
;}
;}
,__lb:function(dj,di){var de=qx.util.ResourceManager.getInstance();var dd=de.isFontUri(di);if(!this.getEnabled()){var dh=di.replace(/\.([a-z]+)$/,D);if(!dd&&de.has(dh)){di=dh;this.addState(bD);}
else {this.removeState(bD);}
;}
;if(!dd&&dj.getSource()===di){return;}
;if(dd){if(this.getScale()&&parseInt(di.split(J)[2],10)){this.setScale(false);}
;var dl;var dg;if(this.getScale()){var df=this.getSizeHint();dl=this.getWidth()||df.width;dg=this.getHeight()||df.height;}
else {var dk=qx.theme.manager.Font.getInstance().resolve(di.match(/@([^/]+)/)[1]);if(qx.core.Environment.get(y)){this.assertObject(dk,bF);}
;var dm=parseInt(di.split(J)[2]||dk.getSize(),10);dl=de.getImageWidth(di)||dm;dg=de.getImageHeight(di)||dm;}
;this.__li(dl,dg);this.__lg(dj,di);}
else {this.__lg(dj,di);this.__li(de.getImageWidth(di),de.getImageHeight(di));}
;}
,_applyDimension:function(){qx.ui.core.Widget.prototype._applyDimension.call(this);var dn=this.getSource()&&qx.lang.String.startsWith(this.getSource(),U);if(dn){var dp=this.getContentElement();if(dp){if(this.getScale()){var dq=this.getSizeHint();var ds=this.getWidth()||dq.width||40;var dr=this.getHeight()||dq.height||40;dp.setStyle(v,(ds>dr?dr:ds)+c);}
else {var dt=qx.theme.manager.Font.getInstance().resolve(this.getSource().match(/@([^/]+)/)[1]);dp.setStyle(v,dt.getSize()+c);}
;}
;}
;}
,__lc:function(du,dy){var dw=qx.io.ImageLoader;this.__lg(du,dy);var dx=dw.getWidth(dy);var dv=dw.getHeight(dy);this.__li(dx,dv);}
,__ld:function(dA,dC){var dB=qx.io.ImageLoader;if(qx.core.Environment.get(y)){var dz=dC.toLowerCase();if(!dz.startsWith(e)&&!dz.startsWith(V)){var self=this.self(arguments);if(!self.__le){self.__le={};}
;if(!self.__le[dC]){this.debug(bH+dC);self.__le[dC]=true;}
;}
;}
;if(!dB.isFailed(dC)){dB.load(dC,this.__lh,this);}
else {this.__lf(dA);}
;}
,__lf:function(dD){if(dD!=null){if(dD instanceof qx.html.Image){dD.resetSource();}
else {dD.resetValue();}
;}
;}
,__lg:function(dE,dO){var dN=dO&&qx.lang.String.startsWith(dO,U);if(dN){var dM=dO.split(J);var dL=dO;if(dM.length>2){dL=dM[0]+J+dM[1];}
;var dI=qx.util.ResourceManager.getInstance();var dS=qx.theme.manager.Font.getInstance().resolve(dO.match(/@([^/]+)/)[1]);var dJ=qx.lang.Object.clone(dS.getStyles());delete dJ.color;dE.setStyles(dJ);dE.setStyle(E);dE.setStyle(bJ,bz);dE.setStyle(x,X);dE.setStyle(z,w);if(this.getScale()){dE.setStyle(v,(this.__kM>this.__kN?this.__kN:this.__kM)+c);}
else {var dV=parseInt(dM[2]||qx.theme.manager.Font.getInstance().resolve(dO.match(/@([^/]+)/)[1]).getSize());dE.setStyle(v,dV+c);}
;var dG=dI.getData(dL);if(dG){dE.setValue(String.fromCharCode(dG[2]));}
else {var dR=parseInt(qx.theme.manager.Font.getInstance().resolve(dO.match(/@([^/]+)\/(.*)$/)[2]),16);if(qx.core.Environment.get(y)){this.assertNumber(dR,g);}
;dE.setValue(String.fromCharCode(dR));}
;return;}
else if(dE.getNodeName()==l){var dU=qx.theme.manager.Decoration.getInstance().resolve(this.getDecorator());if(dU){var dP=(dU.getStartColor()&&dU.getEndColor());var dK=dU.getBackgroundImage();if(dP||dK){var dF=this.getScale()?j:bE;var dH=qx.bom.element.Decoration.getAttributes(dO,dF);var dT=dU.getStyles(true);var dQ={"backgroundImage":dH.style.backgroundImage,"backgroundPosition":(dH.style.backgroundPosition||u),"backgroundRepeat":(dH.style.backgroundRepeat||bE)};if(dK){dQ[M]+=S+dT[bt]||u;dQ[d]+=bA+dU.getBackgroundRepeat();}
;if(dP){dQ[M]+=m;dQ[d]+=bL;}
;dQ[B]+=S+(dT[h]||dT[bB]);dE.setStyles(dQ);return;}
;}
else {if(dE.setSource){dE.setSource(null);}
;}
;}
;if(dE.setSource){dE.setSource(dO);}
;}
,__lh:function(dW,dX){if(this.$$disposed===true){return;}
;if(dW!==qx.util.AliasManager.getInstance().resolve(this.getSource())){this.fireEvent(o);return;}
;if(dX.failed){this.warn(a+dW);this.fireEvent(H);}
else if(dX.aborted){this.fireEvent(o);return;}
else {this.fireEvent(A);}
;this.__lc(this.__kX(),dW);}
,__li:function(dY,ea){if(dY!==this.__kM||ea!==this.__kN){this.__kM=dY;this.__kN=ea;qx.ui.core.queue.Layout.add(this);}
;}
},destruct:function(){for(var eb in this.__kL){if(this.__kL.hasOwnProperty(eb)){this.__kL[eb].disconnectWidget(this);}
;}
;delete this.__kP;if(this.__kQ){delete this.__kQ;}
;this._disposeMap(bw);}
});}
)();
(function(){var a="mshtml",b='img',c="",d="qx.globalErrorHandling",e="load",f="qx.io.ImageLoader";qx.Bootstrap.define(f,{statics:{__dH:{},__lj:{width:null,height:null},__lk:/\.(png|gif|jpg|jpeg|bmp)\b/i,__ll:/^data:image\/(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(g){var h=this.__dH[g];return !!(h&&h.loaded);}
,isFailed:function(j){var k=this.__dH[j];return !!(k&&k.failed);}
,isLoading:function(m){var n=this.__dH[m];return !!(n&&n.loading);}
,getFormat:function(r){var q=this.__dH[r];if(!q||!q.format){var o=this.__ll.exec(r);if(o!=null){var p=(q&&qx.lang.Type.isNumber(q.width)?q.width:this.__lj.width);var s=(q&&qx.lang.Type.isNumber(q.height)?q.height:this.__lj.height);q={loaded:true,format:o[1],width:p,height:s};}
;}
;return q?q.format:null;}
,getSize:function(t){var u=this.__dH[t];return u?{width:u.width,height:u.height}:this.__lj;}
,getWidth:function(v){var w=this.__dH[v];return w?w.width:null;}
,getHeight:function(x){var y=this.__dH[x];return y?y.height:null;}
,load:function(B,A,C){var D=this.__dH[B];if(!D){D=this.__dH[B]={};}
;if(A&&!C){C=window;}
;if(D.loaded||D.loading||D.failed){if(A){if(D.loading){D.callbacks.push(A,C);}
else {A.call(C,B,D);}
;}
;}
else {D.loading=true;D.callbacks=[];if(A){D.callbacks.push(A,C);}
;var z=document.createElement(b);var E=qx.lang.Function.listener(this.__lm,this,z,B);z.onload=E;z.onerror=E;z.src=B;D.element=z;}
;}
,abort:function(F){var I=this.__dH[F];if(I&&!I.loaded){I.aborted=true;var H=I.callbacks;var G=I.element;G.onload=G.onerror=null;G.src=c;delete I.callbacks;delete I.element;delete I.loading;for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],F,I);}
;}
;this.__dH[F]=null;}
,__lm:function(){var J=qx.core.Environment.select(d,{"true":qx.event.GlobalError.observeMethod(this.__ln),"false":this.__ln});J.apply(this,arguments);}
,__ln:function(event,L,K){var P=this.__dH[K];if(qx.bom.client.Engine.getName()==a&&parseFloat(qx.bom.client.Engine.getVersion())===11){document.body.appendChild(L);}
;var M=function(Q){return (Q&&Q.height!==0);}
;if(event.type===e&&M(L)){P.loaded=true;P.width=L.width;P.height=L.height;var N=this.__lk.exec(K);if(N!=null){P.format=N[1];}
;}
else {P.failed=true;}
;if(qx.bom.client.Engine.getName()==a&&parseFloat(qx.bom.client.Engine.getVersion())===11){document.body.removeChild(L);}
;L.onload=L.onerror=null;var O=P.callbacks;delete P.loading;delete P.callbacks;delete P.element;for(var i=0,l=O.length;i<l;i+=2){O[i].call(O[i+1],K,P);}
;}
,dispose:function(){this.__dH={};}
}});}
)();
(function(){var a="source",b="engine.name",c="",d="mshtml",e="px",f="px ",g="no-repeat",h="backgroundImage",i="scale",j="webkit",k="div",l="qx.html.Image",m="qx/static/blank.gif",n="backgroundPosition";qx.Class.define(l,{extend:qx.html.Element,members:{__lo:null,__lp:null,tagNameHint:null,setPadding:function(o,p){this.__lp=o;this.__lo=p;if(this.getNodeName()==k){this.setStyle(n,o+f+p+e);}
;}
,_applyProperty:function(name,t){qx.html.Element.prototype._applyProperty.call(this,name,t);if(name===a){var s=this.getDomElement();var q=this.getAllStyles();if(this.getNodeName()==k&&this.getStyle(h)){q.backgroundRepeat=null;}
;var u=this._getProperty(a);var r=this._getProperty(i);var v=r?i:g;if(u!=null){u=u||null;q.paddingTop=this.__lo;q.paddingLeft=this.__lp;qx.bom.element.Decoration.update(s,u,v,q);}
;}
;}
,_removeProperty:function(x,w){if(x==a){this._setProperty(x,c,w);}
else {this._setProperty(x,null,w);}
;}
,_createDomElement:function(){var z=this._getProperty(i);var A=z?i:g;if((qx.core.Environment.get(b)==d)){var y=this._getProperty(a);if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);}
else {this.setNodeName(qx.bom.element.Decoration.getTagName(A,y));}
;}
else {this.setNodeName(qx.bom.element.Decoration.getTagName(A));}
;return qx.html.Element.prototype._createDomElement.call(this);}
,_copyData:function(B){return qx.html.Element.prototype._copyData.call(this,true);}
,setSource:function(C){this._setProperty(a,C);return this;}
,getSource:function(){return this._getProperty(a);}
,resetSource:function(){if((qx.core.Environment.get(b)==j)){this._setProperty(a,m);}
else {this._removeProperty(a,true);}
;return this;}
,setScale:function(D){this._setProperty(i,D);return this;}
,getScale:function(){return this._getProperty(i);}
}});}
)();
(function(){var a="qx/icon",b="repeat",c="px",d=".png",f='</div>',g="px ",h="background-image",i="scale",j="no-repeat",k="div",l='display',m="Potential clipped image candidate: ",n="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",o='<div style="',p='verticalAlign',q="qx.debug",r='fontSize',s='width',t="scale-x",u="css.alphaimageloaderneeded",v="repeat-y",w='<img src="',x="Font source needs either a glyph name or the unicode number in hex",y=": ",z="Image modification not possible because elements could not be replaced at runtime anymore!",A="', sizingMethod='",B="'!",C='"></div>',D="",E="crop",F='"/>',G="png",H="ImageLoader: Not recognized format of external image '",I='">',J="')",K="qx.bom.element.Decoration",L="mshtml",M="engine.name",N='" style="',O='position',P="none",Q="b64",R="img",S="webkit",T="scale-y",U=" ",V="repeat-x",W=";",X="background-repeat",Y="DXImageTransform.Microsoft.AlphaImageLoader",bd="qx/static/blank.gif",be='height',bf="absolute";qx.Class.define(K,{statics:{DEBUG:false,__lq:{},__lr:qx.core.Environment.select(M,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__ls:{"scale-x":R,"scale-y":R,"scale":R,"repeat":k,"no-repeat":k,"repeat-x":k,"repeat-y":k},update:function(bk,bl,bi,bh){var bm=this.getTagName(bi,bl);if(bm!=bk.tagName.toLowerCase()){throw new Error(z);}
;var bj=this.getAttributes(bl,bi,bh);if(bm===R){bk.src=bj.src||qx.util.ResourceManager.getInstance().toUri(bd);}
;if(bk.style.backgroundPosition!=D&&bj.style.backgroundPosition===undefined){bj.style.backgroundPosition=null;}
;if(bk.style.clip!=D&&bj.style.clip===undefined){bj.style.clip=null;}
;qx.bom.element.Style.setStyles(bk,bj.style);if(qx.core.Environment.get(u)){try{bk.filters[Y].apply();}
catch(e){}
;}
;}
,create:function(bv,bp,bo){var bw=this.getTagName(bp,bv);var bt=this.getAttributes(bv,bp,bo);var by=qx.bom.element.Style.compile(bt.style);var br=qx.util.ResourceManager.getInstance();if(br.isFontUri(bv)){var bu=qx.theme.manager.Font.getInstance().resolve(bv.match(/@([^/]+)/)[1]);var bn=qx.lang.Object.clone(bu.getStyles());bn[s]=bo.width;bn[be]=bo.height;bn[r]=(parseInt(bo.width)>parseInt(bo.height)?bo.height:bo.width);bn[l]=bo.display;bn[p]=bo.verticalAlign;bn[O]=bo.position;var by=D;for(var bs in bn){if(bn.hasOwnProperty(bs)){by+=qx.bom.Style.getCssName(bs)+y+bn[bs]+W;}
;}
;var bq=br.getData(bv);var bx;if(bq){bx=bq[2];}
else {bx=parseInt(qx.theme.manager.Font.getInstance().resolve(bv.match(/@([^/]+)\/(.*)$/)[2]),16);qx.core.Assert.assertNumber(bx,x);}
;return o+by+I+String.fromCharCode(bx)+f;}
else {if(bw===R){return w+bt.src+N+by+F;}
else {return o+by+C;}
;}
;}
,getTagName:function(bA,bz){if(bz&&qx.core.Environment.get(u)&&this.__lr[bA]&&bz.endsWith(d)){return k;}
;return this.__ls[bA];}
,getAttributes:function(bE,bC,bB){if(!bB){bB={};}
;if(!bB.position){bB.position=bf;}
;if((qx.core.Environment.get(M)==L)){bB.fontSize=0;bB.lineHeight=0;}
else if((qx.core.Environment.get(M)==S)){bB.WebkitUserDrag=P;}
;var bD=qx.util.ResourceManager.getInstance().getImageFormat(bE)||qx.io.ImageLoader.getFormat(bE);if(qx.core.Environment.get(q)){if(bE!=null&&bD==null){qx.log.Logger.warn(H+bE+B);}
;}
;var bF;if(qx.core.Environment.get(u)&&this.__lr[bC]&&bD===G){var bG=this.__lu(bE);this.__lt(bB,bG.width,bG.height);bF=this.processAlphaFix(bB,bC,bE);}
else {delete bB.clip;if(bC===i){bF=this.__lv(bB,bC,bE);}
else if(bC===t||bC===T){bF=this.__lw(bB,bC,bE);}
else {bF=this.__lz(bB,bC,bE);}
;}
;return bF;}
,__lt:function(bI,bH,bJ){if(bI.width==null&&bH!=null){bI.width=bH+c;}
;if(bI.height==null&&bJ!=null){bI.height=bJ+c;}
;}
,__lu:function(bK){var bL=qx.util.ResourceManager.getInstance().getImageWidth(bK)||qx.io.ImageLoader.getWidth(bK);var bM=qx.util.ResourceManager.getInstance().getImageHeight(bK)||qx.io.ImageLoader.getHeight(bK);return {width:bL,height:bM};}
,processAlphaFix:function(bP,bQ,bO){if(bQ==b||bQ==V||bQ==v){return bP;}
;var bR=bQ==j?E:i;var bN=n+qx.util.ResourceManager.getInstance().toUri(bO)+A+bR+J;bP.filter=bN;bP.backgroundImage=bP.backgroundRepeat=D;delete bP[h];delete bP[X];return {style:bP};}
,__lv:function(bT,bU,bS){var bV=qx.util.ResourceManager.getInstance().toUri(bS);var bW=this.__lu(bS);this.__lt(bT,bW.width,bW.height);return {src:bV,style:bT};}
,__lw:function(bX,bY,cb){var ca=qx.util.ResourceManager.getInstance();var ce=ca.getCombinedFormat(cb);var cg=this.__lu(cb);var cc;if(ce){var cf=ca.getData(cb);var cd=cf[4];if(ce==Q){cc=ca.toDataUri(cb);}
else {cc=ca.toUri(cd);}
;if(bY===t){bX=this.__lx(bX,cf,cg.height);}
else {bX=this.__ly(bX,cf,cg.width);}
;return {src:cc,style:bX};}
else {if(qx.core.Environment.get(q)){this.__lB(cb);}
;if(bY==t){bX.height=cg.height==null?null:cg.height+c;}
else if(bY==T){bX.width=cg.width==null?null:cg.width+c;}
;cc=ca.toUri(cb);return {src:cc,style:bX};}
;}
,__lx:function(ch,ci,ck){var cj=qx.util.ResourceManager.getInstance().getImageHeight(ci[4]);ch.clip={top:-ci[6],height:ck};ch.height=cj+c;if(ch.top!=null){ch.top=(parseInt(ch.top,10)+ci[6])+c;}
else if(ch.bottom!=null){ch.bottom=(parseInt(ch.bottom,10)+ck-cj-ci[6])+c;}
;return ch;}
,__ly:function(cm,cn,cl){var co=qx.util.ResourceManager.getInstance().getImageWidth(cn[4]);cm.clip={left:-cn[5],width:cl};cm.width=co+c;if(cm.left!=null){cm.left=(parseInt(cm.left,10)+cn[5])+c;}
else if(cm.right!=null){cm.right=(parseInt(cm.right,10)+cl-co-cn[5])+c;}
;return cm;}
,__lz:function(cp,cq,ct){var cs=qx.util.ResourceManager.getInstance();var cr=cs.getCombinedFormat(ct);var cB=this.__lu(ct);if(cr&&cq!==b){var cA=cs.getData(ct);var cy=cA[4];if(cr==Q){var cv=cs.toDataUri(ct);var cu=0;var cw=0;}
else {var cv=cs.toUri(cy);var cu=cA[5];var cw=cA[6];if(cp.paddingTop||cp.paddingLeft||cp.paddingRight||cp.paddingBottom){var top=cp.paddingTop||0;var cC=cp.paddingLeft||0;cu+=cp.paddingLeft||0;cw+=cp.paddingTop||0;cp.clip={left:cC,top:top,width:cB.width,height:cB.height};}
;}
;var cx=qx.bom.element.Background.getStyles(cv,cq,cu,cw);for(var cz in cx){cp[cz]=cx[cz];}
;if(cB.width!=null&&cp.width==null&&(cq==v||cq===j)){cp.width=cB.width+c;}
;if(cB.height!=null&&cp.height==null&&(cq==V||cq===j)){cp.height=cB.height+c;}
;return {style:cp};}
else {var top=cp.paddingTop||0;var cC=cp.paddingLeft||0;cp.backgroundPosition=cC+g+top+c;if(qx.core.Environment.get(q)){if(cq!==b){this.__lB(ct);}
;}
;this.__lt(cp,cB.width,cB.height);this.__lA(cp,ct,cq);return {style:cp};}
;}
,__lA:function(cD,cG,cE){var top=null;var cJ=null;if(cD.backgroundPosition){var cF=cD.backgroundPosition.split(U);cJ=parseInt(cF[0],10);if(isNaN(cJ)){cJ=cF[0];}
;top=parseInt(cF[1],10);if(isNaN(top)){top=cF[1];}
;}
;var cH=qx.bom.element.Background.getStyles(cG,cE,cJ,top);for(var cI in cH){cD[cI]=cH[cI];}
;if(cD.filter){cD.filter=D;}
;}
,__lB:function(cK){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(cK)&&cK.indexOf(a)==-1){if(!this.__lq[cK]){qx.log.Logger.debug(m+cK);this.__lq[cK]=true;}
;}
;}
}});}
)();
(function(){var a="gecko",b="background-image:url(",c="0",d=");",e="",f="px",g="number",h="background-repeat:",i="engine.version",j="')",k=" ",l="qx.bom.element.Background",m=";",n="background-position:",o="url('",p="engine.name",q="'";qx.Class.define(l,{statics:{__lC:[b,null,d,n,null,m,h,null,m],__lD:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__lE:function(v,top){var r=qx.core.Environment.get(p);var t=qx.core.Environment.get(i);if(r==a&&t<1.9&&v==top&&typeof v==g){top+=0.01;}
;if(v){var u=(typeof v==g)?v+f:v;}
else {u=c;}
;if(top){var s=(typeof top==g)?top+f:top;}
else {s=c;}
;return u+k+s;}
,compile:function(z,x,B,top){var A=this.__lE(B,top);var y=qx.util.ResourceManager.getInstance().toUri(z);var w=this.__lC;w[1]=q+y+q;w[4]=A;w[7]=x;return w.join(e);}
,getStyles:function(F,D,H,top){if(!F){return this.__lD;}
;var G=this.__lE(H,top);var E=qx.util.ResourceManager.getInstance().toUri(F);var I=o+E+j;var C={backgroundPosition:G,backgroundImage:I};if(D!=null){C.backgroundRepeat=D;}
;return C;}
,set:function(N,M,K,O,top){var J=this.getStyles(M,K,O,top);for(var L in J){N.style[L]=J[L];}
;}
}});}
)();
(function(){var a="value",b="qx.html.Label",c="The label mode cannot be modified after initial creation",d='hidden';qx.Class.define(b,{extend:qx.html.Element,members:{__lF:null,_applyProperty:function(name,e){qx.html.Element.prototype._applyProperty.call(this,name,e);if(name==a){var f=this.getDomElement();qx.bom.Label.setValue(f,e);}
;}
,_createDomElement:function(){var h=this.__lF;var g=qx.bom.Label.create(this._content,h);g.style.overflow=d;return g;}
,_copyData:function(i){return qx.html.Element.prototype._copyData.call(this,true);}
,setRich:function(j){var k=this.getDomElement();if(k){throw new Error(c);}
;j=!!j;if(this.__lF==j){return this;}
;this.__lF=j;return this;}
,setValue:function(l){this._setProperty(a,l);return this;}
,getValue:function(){return this._getProperty(a);}
,resetValue:function(){return this._removeProperty(a);}
}});}
)();
(function(){var a="text",b="function",c="px",d="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",e="crop",f="nowrap",g="end",h="div",i="100%",j="auto",k="0",l="css.textoverflow",m="qx.debug",n="html.xul",o="value",p="visible",q="qx.bom.Label",r="",s="ellipsis",t="normal",u="inherit",v="block",w="label",x="-1000px",y="hidden",z="absolute";qx.Bootstrap.define(q,{statics:{__lG:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1,wordBreak:1},__lH:function(){var A=this.__lJ(false);document.body.insertBefore(A,document.body.firstChild);return this._textElement=A;}
,__lI:function(){var B=this.__lJ(true);document.body.insertBefore(B,document.body.firstChild);return this._htmlElement=B;}
,__lJ:function(E){var C=qx.dom.Element.create(h);var D=C.style;D.width=D.height=j;D.left=D.top=x;D.visibility=y;D.position=z;D.overflow=p;D.display=v;if(E){D.whiteSpace=t;}
else {D.whiteSpace=f;if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){var F=document.createElementNS(d,w);var D=F.style;D.padding=k;D.margin=k;D.width=j;for(var G in this.__lG){D[G]=u;}
;C.appendChild(F);}
;}
;return C;}
,__lK:function(I){var H={};H.overflow=y;if(I){H.whiteSpace=t;}
else if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){H.display=v;}
else {H.whiteSpace=f;H[qx.core.Environment.get(l)]=s;}
;return H;}
,create:function(content,M,L){if(!L){L=window;}
;var J=L.document.createElement(h);if(M){J.useHtml=true;}
;if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){var N=L.document.createElementNS(d,w);var K=N.style;K.cursor=u;K.color=u;K.overflow=y;K.maxWidth=i;K.padding=k;K.margin=k;K.width=j;for(var O in this.__lG){N.style[O]=u;}
;N.setAttribute(e,g);J.appendChild(N);}
else {qx.bom.element.Style.setStyles(J,this.__lK(M));}
;if(content){this.setValue(J,content);}
;return J;}
,__lL:null,setSanitizer:function(P){if(qx.core.Environment.get(m)){if(P){qx.core.Assert.assertFunction(P);}
;}
;qx.bom.Label.__lL=P;}
,setValue:function(R,Q){Q=Q||r;if(R.useHtml){if(qx.bom.Label.__lL&&typeof (qx.bom.Label.__lL)===b){Q=qx.bom.Label.__lL(Q);}
;R.innerHTML=Q;}
else if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){R.firstChild.setAttribute(o,Q);}
else {qx.bom.element.Attribute.set(R,a,Q);}
;}
,getValue:function(S){if(S.useHtml){return S.innerHTML;}
else if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){return S.firstChild.getAttribute(o)||r;}
else {return qx.bom.element.Attribute.get(S,a);}
;}
,getHtmlSize:function(content,T,U){var V=this._htmlElement||this.__lI();V.style.width=U!=undefined?U+c:j;V.innerHTML=content;return this.__lM(V,T);}
,getTextSize:function(X,W){var Y=this._textElement||this.__lH();if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){Y.firstChild.setAttribute(o,X);}
else {qx.bom.element.Attribute.set(Y,a,X);}
;return this.__lM(Y,W);}
,__lM:function(be,ba){var bb=this.__lG;if(!ba){ba={};}
;for(var bd in bb){be.style[bd]=ba[bd]||r;}
;var bc=qx.bom.element.Dimension.getSize(be);bc.width++ ;return bc;}
}});}
)();
(function(){var a="dragdrop-cursor",b="_applyAction",c="alias",d="qx.ui.core.DragDropCursor",e="move",f="singleton",g="copy";qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:f,construct:function(){qx.ui.basic.Image.call(this);this.setZIndex(1e8);this.setDomMove(true);var h=this.getApplicationRoot();h.add(this,{left:-1000,top:-1000});}
,properties:{appearance:{refine:true,init:a},action:{check:[c,g,e],apply:b,nullable:true}},members:{_applyAction:function(j,i){if(i){this.removeState(i);}
;if(j){this.addState(j);}
;}
}});}
)();
(function(){var a="blur",b="activate",c="focus",d="qx.ui.core.EventHandler";qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);this.__dQ=qx.event.Registration.getManager(window);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,auxclick:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,longtap:1,swipe:1,dbltap:1,track:1,trackend:1,trackstart:1,pinch:1,rotate:1,roll:1,pointermove:1,pointerover:1,pointerout:1,pointerdown:1,pointerup:1,pointercancel:1},IGNORE_CAN_HANDLE:false},members:{__dQ:null,__lN:{focusin:1,focusout:1,focus:1,blur:1},__lO:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(f,e){return f instanceof qx.ui.core.Widget;}
,_dispatchEvent:function(i){var m=i.getTarget();var l=qx.ui.core.Widget.getWidgetByElement(m);var n=false;while(l&&l.isAnonymous()){var n=true;l=l.getLayoutParent();}
;if(l&&n&&i.getType()==b){l.getContentElement().activate();}
;if(this.__lN[i.getType()]){l=l&&l.getFocusTarget();if(!l){return;}
;}
;if(i.getRelatedTarget){var u=i.getRelatedTarget();var t=qx.ui.core.Widget.getWidgetByElement(u);while(t&&t.isAnonymous()){t=t.getLayoutParent();}
;if(t){if(this.__lN[i.getType()]){t=t.getFocusTarget();}
;if(t===l){return;}
;}
;}
;var q=i.getCurrentTarget();var r=qx.ui.core.Widget.getWidgetByElement(q);if(!r||r.isAnonymous()){return;}
;if(this.__lN[i.getType()]){r=r.getFocusTarget();}
;var s=i.getType();if(!r||!(r.isEnabled()||this.__lO[s])){return;}
;var g=i.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;var o=this.__dQ.getListeners(r,s,g);if(i.getEventPhase()==qx.event.type.Event.AT_TARGET){if(!o){o=[];}
;var h=this.__dQ.getListeners(r,s,!g);if(h){o=o.concat(h);}
;}
;if(!o||o.length===0){return;}
;var j=qx.event.Pool.getInstance().getObject(i.constructor);i.clone(j);j.setTarget(l);j.setRelatedTarget(t||null);j.setCurrentTarget(r);var v=i.getOriginalTarget();if(v){var k=qx.ui.core.Widget.getWidgetByElement(v);while(k&&k.isAnonymous()){k=k.getLayoutParent();}
;j.setOriginalTarget(k);}
else {j.setOriginalTarget(m);}
;var p={};qx.event.Utils.then(p,function(){return qx.event.Utils.series(o,function(w){var x=w.context||r;return w.handler.call(x,j);}
);}
);qx.event.Utils.then(p,function(){if(j.getPropagationStopped()){i.stopPropagation();}
;if(j.getDefaultPrevented()){i.preventDefault();}
;}
);return qx.event.Utils.then(p,function(){qx.event.Pool.getInstance().poolObject(j);}
);}
,registerEvent:function(A,z,y){var B;if(z===c||z===a){B=A.getFocusElement();}
else {B=A.getContentElement();}
;if(B){B.addListener(z,this._dispatchEvent,this,y);}
;}
,unregisterEvent:function(E,D,C){var F;if(D===c||D===a){F=E.getFocusElement();}
else {F=E.getContentElement();}
;if(F){F.removeListener(D,this._dispatchEvent,this,C);}
;}
},destruct:function(){this.__dQ=null;}
,defer:function(G){qx.event.Registration.addHandler(G);}
});}
)();
(function(){var a="Missing renderLayout() implementation!",b="abstract",c="Missing getHeightForWidth() implementation!",d="qx.debug",e="It is not possible to manually set the connected widget.",f="qx.ui.layout.Abstract";qx.Class.define(f,{type:b,extend:qx.core.Object,members:{__ge:null,_invalidChildrenCache:null,__hD:null,invalidateLayoutCache:function(){this.__ge=null;}
,renderLayout:function(h,i,g){this.warn(a);}
,getSizeHint:function(){if(this.__ge){return this.__ge;}
;return this.__ge=this._computeSizeHint();}
,hasHeightForWidth:function(){return false;}
,getHeightForWidth:function(j){this.warn(c);return null;}
,_computeSizeHint:function(){return null;}
,invalidateChildrenCache:function(){this._invalidChildrenCache=true;}
,verifyLayoutProperty:qx.core.Environment.select(d,{"true":function(k,name,l){}
,"false":null}),_clearSeparators:function(){var m=this.__hD;if(m instanceof qx.ui.core.LayoutItem){m.clearSeparators();}
;}
,_renderSeparator:function(n,o){this.__hD.renderSeparator(n,o);}
,connectToWidget:function(p){if(p&&this.__hD){throw new Error(e);}
;this.__hD=p;this.invalidateChildrenCache();}
,_getWidget:function(){return this.__hD;}
,_applyLayoutChange:function(){if(this.__hD){this.__hD.scheduleLayoutUpdate();}
;}
,_getLayoutChildren:function(){return this.__hD.getLayoutChildren();}
},destruct:function(){this.__hD=this.__ge=null;}
});}
)();
(function(){var a="qx.bom.client.Locale",b="-",c="locale",d="",e="android",f="locale.variant",g="C",h="locale.default";qx.Bootstrap.define(a,{statics:{getLocale:function(){var i=qx.bom.client.Locale.__mb();var j=i.indexOf(b);if(j!=-1){i=i.substr(0,j);}
;return i;}
,getVariant:function(){var k=qx.bom.client.Locale.__mb();var m=d;var l=k.indexOf(b);if(l!=-1){m=k.substr(l+1);}
;return m;}
,__mb:function(){var n=(navigator.userLanguage||navigator.language||d);if(qx.bom.client.OperatingSystem.getName()==e){var o=/^(\d+)\.(\d+)(\..+)?/i.exec(qx.bom.client.OperatingSystem.getVersion());if(qx.lang.Type.isArray(o)&&o.length>=3){if(parseInt(o[1])<4||(parseInt(o[1])===4&&parseInt(o[2])<4)){var p=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);if(p){n=p[0];}
;}
;}
;}
;return n.toLowerCase();}
},defer:function(q){qx.core.Environment.add(c,q.getLocale);qx.core.Environment.add(f,q.getVariant);qx.core.Environment.add(h,g);}
});}
)();
(function(){var a='indexOf',b='slice',c='concat',d='toLocaleLowerCase',e="qx.type.BaseString",f="",g='trim',h='match',j="qx.debug",k='search',m='replace',n='toLowerCase',o='charCodeAt',p='split',q='substring',r='lastIndexOf',s='substr',t='toLocaleUpperCase',u='toUpperCase',v='charAt';qx.Class.define(e,{extend:Object,construct:function(w){var w=w||f;this.__mc=w;this.length=w.length;}
,members:{$$isString:true,length:0,__mc:null,toString:function(){return this.__mc;}
,charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);}
,toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(y,x){return qx.core.Object.prototype.base.apply(this,arguments);}
},defer:function(z,A){if(qx.core.Environment.get(j)){qx.Class.include(z,qx.core.MAssert);}
;var B=[v,o,c,a,r,h,m,k,b,p,s,q,n,u,d,t,g];A.valueOf=A.toString;if(new z(f).valueOf()==null){delete A.valueOf;}
;for(var i=0,l=B.length;i<l;i++ ){A[B[i]]=String.prototype[B[i]];}
;}
});}
)();
(function(){var a="qx.locale.LocalizedString";qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,e,c,d){qx.type.BaseString.call(this,b);this.__md=e;this.__me=!!d;this.__mf=c;}
,members:{__me:null,__md:null,__mf:null,translate:function(){if(this.__me){return qx.locale.Manager.getInstance().localize(this.__md,this.__mf);}
;return qx.locale.Manager.getInstance().translate(this.__md,this.__mf);}
,getMessageId:function(){return this.__md;}
}});}
)();
(function(){var a="locale",b="_applyLocale",c="",d="changeLocale",e="_",f="Locale: ",g="locale.default",h="locale.variant",j="qx.dynlocale",k=" not available.",l="qx.locale.Manager",m="String",n="singleton",o="qx.debug";qx.Class.define(l,{type:n,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__mg=qx.$$translations||{};this.__mh=qx.$$locales||{};this.initLocale();this.__mi=this.getLocale();}
,statics:{tr:function(q,r){var p=qx.lang.Array.fromArguments(arguments,1);return qx.locale.Manager.getInstance().translate(q,p);}
,trn:function(t,w,s,v){var u=qx.lang.Array.fromArguments(arguments);u.splice(0,3);if(s!=1){return qx.locale.Manager.getInstance().translate(w,u);}
else {return qx.locale.Manager.getInstance().translate(t,u);}
;}
,trc:function(A,y,z){var x=qx.lang.Array.fromArguments(arguments);x.splice(0,2);return qx.locale.Manager.getInstance().translate(y,x);}
,trnc:function(C,D,G,B,F){var E=qx.lang.Array.fromArguments(arguments);E.splice(0,4);if(B!=1){return qx.locale.Manager.getInstance().translate(G,E);}
else {return qx.locale.Manager.getInstance().translate(D,E);}
;}
,marktr:function(H){return H;}
},properties:{locale:{check:m,apply:b,event:d,init:(function(){var I=qx.core.Environment.get(a);if(!I||I===c){return qx.core.Environment.get(g);}
;var J=qx.core.Environment.get(h);if(J!==c){I+=e+J;}
;return I;}
)()}},members:{__mj:qx.core.Environment.get(g),__mk:null,__ml:null,__mg:null,__mh:null,__mi:null,getLanguage:function(){return this.__ml;}
,getTerritory:function(){return this.getLocale().split(e)[1]||c;}
,getAvailableLocales:function(L){var M=[];for(var K in this.__mh){if(K!=this.__mj){if(this.__mh[K]===null&&!L){continue;}
;M.push(K);}
;}
;return M;}
,__mm:function(N){var P;if(N==null){return null;}
;var O=N.indexOf(e);if(O==-1){P=N;}
else {P=N.substring(0,O);}
;return P;}
,_applyLocale:function(R,Q){if(qx.core.Environment.get(o)){if(!(R in this.__mh||R==this.__mi)){qx.log.Logger.warn(f+R+k);}
;}
;this.__mk=R;this.__ml=this.__mm(R);}
,addTranslation:function(S,V){var T=this.__mg;if(T[S]){for(var U in V){T[S][U]=V[U];}
;}
else {T[S]=V;}
;}
,addLocale:function(ba,X){var W=this.__mh;if(W[ba]){for(var Y in X){W[ba][Y]=X[Y];}
;}
else {W[ba]=X;}
;}
,translate:function(be,bd,bb){var bc=this.__mg;return this.__mn(bc,be,bd,bb);}
,localize:function(bi,bh,bf){var bg=this.__mh;return this.__mn(bg,bi,bh,bf);}
,__mn:function(bn,bo,bl,bm){if(qx.core.Environment.get(o)){this.assertObject(bn);this.assertString(bo);this.assertArray(bl);}
;var bj;if(!bn){return bo;}
;if(bm){var bk=this.__mm(bm);}
else {bm=this.__mk;bk=this.__ml;}
;if(!bj&&bn[bm]){bj=bn[bm][bo];}
;if(!bj&&bn[bk]){bj=bn[bk][bo];}
;if(!bj&&bn[this.__mj]){bj=bn[this.__mj][bo];}
;if(!bj){bj=bo;}
;if(bl.length>0){var bp=[];for(var i=0;i<bl.length;i++ ){var bq=bl[i];if(bq&&bq.translate){bp[i]=bq.translate();}
else {bp[i]=bq;}
;}
;bj=qx.lang.String.format(bj,bp);}
;if(qx.core.Environment.get(j)){bj=new qx.locale.LocalizedString(bj,bo,bl,bn===this.__mh);}
;return bj;}
}});}
)();
(function(){var a="mousedown",b="mouseout",c="demobrowser.demo.event.MouseEvent",d="clientX",f="dblclick",g="relatedTarget",h="mouse",j="button",k="capture",l="mousemove",m="pageY",n="screenX",o="logger",p="",q="_",r="mouseover",s="check_",t="click",u="Event",v="Target",w="clientY",x="mouseup",y="losecapture",z="contextmenu",A="change",B="screenY",C="pageX";qx.Class.define(c,{extend:demobrowser.demo.event.EventDemo,members:{main:function(){demobrowser.demo.event.EventDemo.prototype.main.call(this);this._initLogger([v,u,j,C,m,d,w,n,B,g],document.getElementById(o),50);var E=document.getElementById(h);var D=[a,x,t,f,z,l,r,b];for(var i=0;i<D.length;i++ ){var F=document.getElementById(s+D[i]);if(F.checked){qx.bom.Element.addListener(E,D[i],this.logMouseEvent,this);}
;qx.bom.Element.addListener(F,A,this.__u,this);}
;var G=document.getElementById(k);G.checked=false;qx.bom.Element.addListener(G,A,function(e){var H=e.getTarget().checked;if(H){qx.bom.Element.capture(E);}
else {qx.bom.Element.releaseCapture(E);}
;}
,this);qx.bom.Element.addListener(E,y,function(e){G.checked=false;}
,this);}
,__u:function(e){var K=e.getTarget().id.split(q)[1];var I=e.getTarget().checked;var J=document.getElementById(h);if(I){qx.bom.Element.addListener(J,K,this.logMouseEvent,this);}
else {qx.bom.Element.removeListener(J,K,this.logMouseEvent,this);}
;}
,logMouseEvent:function(L){L.preventDefault();this._log([L.getTarget().id,L.getType(),L.getButton(),L.getDocumentLeft(),L.getDocumentTop(),L.getScreenLeft(),L.getScreenTop(),L.getViewportLeft(),L.getViewportTop(),L.getRelatedTarget()?L.getRelatedTarget().id:p]);}
}});}
)();
(function(){var a="JosefinSlab",b="Verdana",c="qx/decoration/Indigo/font/JosefinSlab-SemiBold.ttf",d="qx/decoration/Indigo/font/JosefinSlab-SemiBold.woff",e="Lucida Grande",f="sans-serif",g="qx.theme.indigo.Font",h="monospace",i="font",j="serif",k="DejaVu Sans",l="Courier New",m="DejaVu Sans Mono";qx.Theme.define(g,{fonts:{"default":{size:12,family:[e,k,b,f],color:i,lineHeight:1.8},"bold":{size:12,family:[e,k,b,f],bold:true,color:i,lineHeight:1.8},"headline":{size:22,family:[j],sources:[{family:a,source:[d,c]}]},"small":{size:11,family:[e,k,b,f],color:i,lineHeight:1.8},"monospace":{size:11,family:[m,l,h],color:i,lineHeight:1.8}}});}
)();
(function(){var a="table-row-background-even",b="button-box-pressed-top-right",c="arrow-left",d="datechooser-weekday",e="arrow-up",f="menu-slidebar-button",g="background-disabled",h="background",j="scrollbar/button",k="icon/16/actions/dialog-ok.png",l="border-invalid",m="combobox/button",n="button-box-top-right",o="slidebar",p="#BABABA",q="button-box-hovered-bottom-right",r="move-frame",s="nodrop",t="window-caption",u="table-header-cell",v="button-box-hovered-top-right",w="row-layer",x="treevirtual-plus-only",y="-right",z="button-frame",A="radiobutton",B="move",C="treevirtual-plus-end",D="background-selected-dark",E="vertical",F="list",G="arrow-down-small",H="arrow-down",I="arrow-",J="-pressed",K="tooltip-error",L="button-box",M="window-restore",N="bold",O="resize-frame",P="text-disabled",Q="scroll-knob",R="tree-minus",S="statusbar",T="white",U="tabview-close",V="down",W="text",X="checkbox",Y="atom/label",eJ="button-box-pressed-bottom-right",eF="button-box-pressed-hovered-bottom-right",eK="background-disabled-checked",eG="groupbox",eH="icon/16/actions/dialog-cancel.png",eE="qx.theme.simple.Appearance",eI="menu-slidebar",eP="-left",eQ="treevirtual-minus-cross",eW="arrow-right",eR="background-pane",eL="table-",eM="scroll-knob-pressed",eN="icon",eO="arrow-rewind",eV="icon/16/apps/office-calendar.png",fz="headline",eX="treevirtual-plus-start",eY="treevirtual-minus-end",eS="middle",eT="-middle",gA="tree",eU="checkbox-undetermined",fa="button-box-bottom-right",fb="datechooser-week",fc="menu-button",fh="descending",fi="splitpane",fj="slidebar/button-forward",fd="toolbar-separator",fe="arrow-up-small",ff="progressive-table-header",fg="invalid",fn="icon/16/places/folder.png",fo="combobox",fp="tree-folder",fq="horizontal",fk="icon/16/mimetypes/text-plain.png",fl="border-light-shadow",gB="tree-plus",fm="text-placeholder",fu="scrollbar",fv="dragover",gG="treevirtual-plus-cross",fw="scrollarea",fr="treevirtual-line",fs="text-selected",gE="cell",ft="menu-checkbox",fx="best-fit",fy="button-border",fK="treevirtual-cross",fJ="default",fI="tabview-page-button-right",fO="button-hover",fN="tabview-page-button-top",fM="tabview-page-button-bottom",fL="inset",fD="tabview-page-button-left",fC="button",fB="menubar-button-pressed",fA="progressbar",fH="tree-file",fG="tooltip-text",fF="keep-align",fE="center",fV="datechooser/button",fU="alias",fT="datechooser",fS="toolbar-button",ga="ascending",fY="button-box-hovered-right-borderless",fX="button-box-right-borderless",fW="lead-item",fR="checkbox-focused",fQ="selectbox",fP="window-minimize",gl="right",gk="button-box-pressed-hovered-top-right",gj="main",gp="image",go="knob-",gn="blank",gm="popup",ge="treevirtual-folder",gd="treevirtual-minus-only",gc="treevirtual-minus-start",gb="checkbox-checked",gi="virtual-list",gh="background-selected",gg="window",gf="-hovered",gv="window-active",gu="table-header-cell-first",gt="left",gs="button-box-pressed-right-borderless",gz="scroll-knob-hovered",gy="up",gx="atom",gw="main-dark",gr="select-column-order",gq="button-box-pressed-hovered-right-borderless",ed="-invalid",ec="scroll-knob-pressed-hovered",gH="white-box",ea="datechooser-week-header",eb="widget",dY="menubar-button-hovered",gF="table-header-column-button",dW="window-close",dX="datechooser-date-pane",dV="cursor-",gC="-focused",dT="menu-radiobutton",dU="window-maximize",dS="treevirtual-end",em="button-box-hovered",en="table",ek="arrow-forward",el="right-top",ei="pointer",ej="focused-inset",eh="slidebar/button-backward",dR="light-background",ef="copy",eg="table-row-background-selected",ee="radiobutton-focused",eA="",ey="textfield",ez="scrollbar/slider/knob",ew="button-box-pressed-hovered",ex="atom/icon",ev="spinner",eB="tooltip",et="-disabled",eu="label",es="table-header",gD="progressive-table-header-cell",eq="menu-separator",er="-invert",eo="link",ep="icon/16/places/folder-open.png",eC="icon/16/actions/view-refresh.png",eD="button-box-pressed";qx.Theme.define(eE,{appearances:{"widget":{},"label":{style:function(gI){return {textColor:gI.disabled?P:undefined};}
},"image":{style:function(gJ){return {opacity:!gJ.replacement&&gJ.disabled?0.3:undefined};}
},"atom":{},"atom/label":eu,"atom/icon":gp,"root":{style:function(gK){return {backgroundColor:h,textColor:W,font:fJ};}
},"popup":{style:function(gL){return {decorator:gm,backgroundColor:eR};}
},"tooltip":{include:gm,style:function(gM){return {backgroundColor:eB,textColor:fG,decorator:eB,padding:[1,3,2,3],offset:[10,5,5,5]};}
},"tooltip/atom":gx,"tooltip-error":{include:eB,style:function(gN){return {textColor:fs,showTimeout:100,hideTimeout:10000,decorator:K,font:N,backgroundColor:undefined};}
},"tooltip-error/atom":gx,"iframe":{style:function(gO){return {backgroundColor:T,decorator:gw};}
},"move-frame":{style:function(gP){return {decorator:gw};}
},"resize-frame":r,"dragdrop-cursor":{style:function(gQ){var gR=s;if(gQ.copy){gR=ef;}
else if(gQ.move){gR=B;}
else if(gQ.alias){gR=fU;}
;return {source:qx.theme.simple.Image.URLS[dV+gR],position:el,offset:[2,16,2,6]};}
},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:fC,include:fC,style:function(gS){return {icon:qx.theme.simple.Image.URLS[I+(gS.vertical?V:gl)]};}
},"slidebar/button-backward":{alias:fC,include:fC,style:function(gT){return {icon:qx.theme.simple.Image.URLS[I+(gT.vertical?gy:gt)]};}
},"table":eb,"table/statusbar":{style:function(gU){return {decorator:S,padding:[2,5]};}
},"table/column-button":{alias:fC,style:function(gV){return {decorator:gF,padding:3,icon:qx.theme.simple.Image.URLS[gr]};}
},"table-column-reset-button":{include:fc,alias:fc,style:function(){return {icon:eC};}
},"table-scroller/scrollbar-x":fu,"table-scroller/scrollbar-y":fu,"table-scroller":eb,"table-scroller/header":{style:function(){return {decorator:es};}
},"table-scroller/pane":{},"table-scroller/focus-indicator":{style:function(gW){return {decorator:gj};}
},"table-scroller/resize-line":{style:function(gX){return {backgroundColor:fy,width:3};}
},"table-header-cell":{alias:gx,style:function(gY){return {decorator:gY.first?gu:u,minWidth:13,font:N,paddingTop:3,paddingLeft:5,cursor:gY.disabled?undefined:ei,sortIcon:gY.sorted?(qx.theme.simple.Image.URLS[eL+(gY.sortedAscending?ga:fh)]):undefined};}
},"table-header-cell/icon":{include:ex,style:function(ha){return {paddingRight:5};}
},"table-header-cell/sort-icon":{style:function(hb){return {alignY:eS,alignX:gl,paddingRight:5};}
},"table-editor-textfield":{include:ey,style:function(hc){return {decorator:undefined,padding:[2,2]};}
},"table-editor-selectbox":{include:fQ,alias:fQ,style:function(hd){return {padding:[0,2]};}
},"table-editor-combobox":{include:fo,alias:fo,style:function(he){return {decorator:undefined};}
},"progressive-table-header":{style:function(hf){return {decorator:ff};}
},"progressive-table-header-cell":{style:function(hg){return {decorator:gD,padding:[5,6,5,6]};}
},"treevirtual":{include:ey,alias:en,style:function(hh,hi){return {padding:[hi.padding[0]+2,hi.padding[1]+1]};}
},"treevirtual-folder":{style:function(hj){return {icon:(hj.opened?ep:fn),opacity:hj.drag?0.5:undefined};}
},"treevirtual-file":{include:ge,alias:ge,style:function(hk){return {icon:fk,opacity:hk.drag?0.5:undefined};}
},"treevirtual-line":{style:function(hl){return {icon:qx.theme.simple.Image.URLS[fr]};}
},"treevirtual-contract":{style:function(hm){return {icon:qx.theme.simple.Image.URLS[R]};}
},"treevirtual-expand":{style:function(hn){return {icon:qx.theme.simple.Image.URLS[gB]};}
},"treevirtual-only-contract":{style:function(ho){return {icon:qx.theme.simple.Image.URLS[gd]};}
},"treevirtual-only-expand":{style:function(hp){return {icon:qx.theme.simple.Image.URLS[x]};}
},"treevirtual-start-contract":{style:function(hq){return {icon:qx.theme.simple.Image.URLS[gc]};}
},"treevirtual-start-expand":{style:function(hr){return {icon:qx.theme.simple.Image.URLS[eX]};}
},"treevirtual-end-contract":{style:function(hs){return {icon:qx.theme.simple.Image.URLS[eY]};}
},"treevirtual-end-expand":{style:function(ht){return {icon:qx.theme.simple.Image.URLS[C]};}
},"treevirtual-cross-contract":{style:function(hu){return {icon:qx.theme.simple.Image.URLS[eQ]};}
},"treevirtual-cross-expand":{style:function(hv){return {icon:qx.theme.simple.Image.URLS[gG]};}
},"treevirtual-end":{style:function(hw){return {icon:qx.theme.simple.Image.URLS[dS]};}
},"treevirtual-cross":{style:function(hx){return {icon:qx.theme.simple.Image.URLS[fK]};}
},"resizer":{style:function(hy){return {decorator:gw};}
},"splitpane":{},"splitpane/splitter":{style:function(hz){return {backgroundColor:dR};}
},"splitpane/splitter/knob":{style:function(hA){return {source:qx.theme.simple.Image.URLS[go+(hA.horizontal?fq:E)],padding:2};}
},"splitpane/slider":{style:function(hB){return {backgroundColor:fl,opacity:0.3};}
},"menu":{style:function(hC){var hD={backgroundColor:h,decorator:gj,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:hC.submenu||hC.contextmenu?fx:fF};if(hC.submenu){hD.position=el;hD.offset=[-2,-3];}
;if(hC.contextmenu){hD.offset=4;}
;return hD;}
},"menu/slidebar":eI,"menu-slidebar":eb,"menu-slidebar-button":{style:function(hE){return {backgroundColor:hE.hovered?gh:undefined,padding:6,center:true};}
},"menu-slidebar/button-backward":{include:f,style:function(hF){return {icon:qx.theme.simple.Image.URLS[e+(hF.hovered?er:eA)]};}
},"menu-slidebar/button-forward":{include:f,style:function(hG){return {icon:qx.theme.simple.Image.URLS[H+(hG.hovered?er:eA)]};}
},"menu-separator":{style:function(hH){return {height:0,decorator:eq,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};}
},"menu-button":{alias:gx,style:function(hI){return {backgroundColor:hI.selected?gh:undefined,textColor:hI.selected?fs:undefined,padding:[2,6]};}
},"menu-button/icon":{include:gp,style:function(hJ){return {alignY:eS};}
},"menu-button/label":{include:eu,style:function(hK){return {alignY:eS,padding:1};}
},"menu-button/shortcut":{include:eu,style:function(hL){return {alignY:eS,marginLeft:14,padding:1};}
},"menu-button/arrow":{include:gp,style:function(hM){return {source:qx.theme.simple.Image.URLS[eW+(hM.selected?er:eA)],alignY:eS};}
},"menu-checkbox":{alias:fc,include:fc,style:function(hN){return {icon:!hN.checked?undefined:qx.theme.simple.Image.URLS[ft+(hN.selected?er:eA)]};}
},"menu-radiobutton":{alias:fc,include:fc,style:function(hO){return {icon:!hO.checked?undefined:qx.theme.simple.Image.URLS[dT+(hO.selected?er:eA)]};}
},"menubar":{style:function(hP){return {backgroundColor:dR,padding:[4,2]};}
},"menubar-button":{style:function(hQ){var hS;var hR=[2,6];if(!hQ.disabled){if(hQ.pressed){hS=fB;hR=[1,5,2,5];}
else if(hQ.hovered){hS=dY;hR=[1,5];}
;}
;return {padding:hR,cursor:hQ.disabled?undefined:ei,textColor:eo,decorator:hS};}
},"virtual-list":F,"virtual-list/row-layer":w,"row-layer":eb,"column-layer":eb,"group-item":{include:eu,alias:eu,style:function(hT){return {padding:4,backgroundColor:p,textColor:T,font:N};}
},"virtual-selectbox":fQ,"virtual-selectbox/dropdown":gm,"virtual-selectbox/dropdown/list":{alias:gi},"virtual-combobox":fo,"virtual-combobox/dropdown":gm,"virtual-combobox/dropdown/list":{alias:gi},"virtual-tree":{include:gA,alias:gA,style:function(hU){return {itemHeight:21};}
},"virtual-tree-folder":fp,"virtual-tree-file":fH,"cell":{style:function(hV){return {backgroundColor:hV.selected?eg:a,textColor:hV.selected?fs:W,padding:[3,6]};}
},"cell-string":gE,"cell-number":{include:gE,style:function(hW){return {textAlign:gl};}
},"cell-image":gE,"cell-boolean":gE,"cell-atom":gE,"cell-date":gE,"cell-html":gE,"scrollbar":{},"scrollbar/slider":{},"scrollbar/slider/knob":{style:function(hX){var hY=Q;if(!hX.disabled){if(hX.hovered&&!hX.pressed&&!hX.checked){hY=gz;}
else if(hX.hovered&&(hX.pressed||hX.checked)){hY=ec;}
else if(hX.pressed||hX.checked){hY=eM;}
;}
;return {height:14,width:14,cursor:hX.disabled?undefined:ei,decorator:hY,minHeight:hX.horizontal?undefined:20,minWidth:hX.horizontal?20:undefined};}
},"scrollbar/button":{style:function(ia){var ib={};ib.padding=4;var ic=eA;if(ia.left){ic=gt;ib.marginRight=2;}
else if(ia.right){ic+=gl;ib.marginLeft=2;}
else if(ia.up){ic+=gy;ib.marginBottom=2;}
else {ic+=V;ib.marginTop=2;}
;ib.icon=qx.theme.simple.Image.URLS[I+ic];ib.cursor=ei;ib.decorator=L;return ib;}
},"scrollbar/button-begin":j,"scrollbar/button-end":j,"scrollarea/corner":{style:function(id){return {backgroundColor:h};}
},"scrollarea":eb,"scrollarea/pane":eb,"scrollarea/scrollbar-x":fu,"scrollarea/scrollbar-y":fu,"textfield":{style:function(ie){var ih;if(ie.disabled){ih=P;}
else if(ie.showingPlaceholder){ih=fm;}
else {ih=undefined;}
;var ii;var ig;if(ie.disabled){ii=fL;ig=[2,3];}
else if(ie.invalid){ii=l;ig=[1,2];}
else if(ie.focused){ii=ej;ig=[1,2];}
else {ig=[2,3];ii=fL;}
;return {decorator:ii,padding:ig,textColor:ih,backgroundColor:ie.disabled?g:T};}
},"textarea":ey,"radiobutton/icon":{style:function(ij){var ik=A;if(ij.focused&&!ij.invalid){ik=ee;}
;ik+=ij.invalid&&!ij.disabled?ed:eA;var il;if(ij.disabled&&ij.checked){il=eK;}
else if(ij.disabled){il=g;}
else if(ij.checked){il=gh;}
;return {decorator:ik,width:12,height:12,backgroundColor:il};}
},"radiobutton":{style:function(im){return {icon:qx.theme.simple.Image.URLS[gn]};}
},"form-renderer-label":{include:eu,style:function(){return {paddingTop:3};}
},"checkbox":{alias:gx,style:function(io){var ip;if(io.checked){ip=qx.theme.simple.Image.URLS[gb];}
else if(io.undetermined){ip=qx.theme.simple.Image.URLS[eU];}
else {ip=qx.theme.simple.Image.URLS[gn];}
;return {icon:ip,gap:6};}
},"checkbox/icon":{style:function(iq){var is=X;if(iq.focused&&!iq.invalid){is=fR;}
;is+=iq.invalid&&!iq.disabled?ed:eA;var ir;if(iq.checked){ir=2;}
else if(iq.undetermined){ir=[4,2];}
;return {decorator:is,width:12,height:12,padding:ir,backgroundColor:T};}
},"spinner":{style:function(it){return {textColor:it.disabled?P:undefined};}
},"spinner/textfield":ey,"spinner/upbutton":{alias:m,include:m,style:function(iu){var iv=n;if(iu.hovered&&!iu.pressed&&!iu.checked){iv=v;}
else if(iu.hovered&&(iu.pressed||iu.checked)){iv=gk;}
else if(iu.pressed||iu.checked){iv=b;}
;return {icon:qx.theme.simple.Image.URLS[fe],decorator:iv,width:17};}
},"spinner/downbutton":{alias:m,include:m,style:function(iw){var ix=fa;if(iw.hovered&&!iw.pressed&&!iw.checked){ix=q;}
else if(iw.hovered&&(iw.pressed||iw.checked)){ix=eF;}
else if(iw.pressed||iw.checked){ix=eJ;}
;return {icon:qx.theme.simple.Image.URLS[G],decorator:ix,width:17};}
},"selectbox":z,"selectbox/atom":gx,"selectbox/popup":gm,"selectbox/list":{alias:F,include:F,style:function(){return {decorator:undefined};}
},"selectbox/arrow":{include:gp,style:function(iy){return {source:qx.theme.simple.Image.URLS[H],paddingRight:4,paddingLeft:5};}
},"combobox":{},"combobox/button":{alias:z,include:z,style:function(iz){var iA=fX;if(iz.hovered&&!iz.pressed&&!iz.checked){iA=fY;}
else if(iz.hovered&&(iz.pressed||iz.checked)){iA=gq;}
else if(iz.pressed||iz.checked){iA=gs;}
;return {icon:qx.theme.simple.Image.URLS[H],decorator:iA,padding:[0,5],width:19};}
},"combobox/popup":gm,"combobox/list":{alias:F},"combobox/textfield":ey,"datefield":ey,"datefield/button":{alias:m,include:m,style:function(iB){return {icon:eV,padding:[0,0,0,3],backgroundColor:undefined,decorator:undefined,width:19};}
},"datefield/textfield":{alias:ey,include:ey,style:function(iC){return {decorator:undefined,padding:0};}
},"datefield/list":{alias:fT,include:fT,style:function(iD){return {decorator:undefined};}
},"list":{alias:fw,include:ey},"listitem":{alias:gx,style:function(iE){var iF=[3,5,3,5];if(iE.lead){iF=[2,4,2,4];}
;if(iE.dragover){iF[2]-=2;}
;var iG;if(iE.selected){iG=gh;if(iE.disabled){iG+=et;}
;}
;return {gap:4,padding:iF,backgroundColor:iG,textColor:iE.selected?fs:undefined,decorator:iE.lead?fW:iE.dragover?fv:undefined,opacity:iE.drag?0.5:undefined};}
},"slider":{style:function(iH){var iJ;var iI;if(iH.disabled){iJ=fL;iI=[2,3];}
else if(iH.invalid){iJ=l;iI=[1,2];}
else if(iH.focused){iJ=ej;iI=[1,2];}
else {iI=[2,3];iJ=fL;}
;return {decorator:iJ,padding:iI};}
},"slider/knob":ez,"button-frame":{alias:gx,style:function(iK){var iL=L;if(!iK.disabled){if(iK.hovered&&!iK.pressed&&!iK.checked){iL=em;}
else if(iK.hovered&&(iK.pressed||iK.checked)){iL=ew;}
else if(iK.pressed||iK.checked){iL=eD;}
;}
;if(iK.invalid&&!iK.disabled){iL+=ed;}
else if(iK.focused){iL+=gC;}
;return {decorator:iL,padding:[3,8],cursor:iK.disabled?undefined:ei,minWidth:5,minHeight:5};}
},"button-frame/label":{alias:Y,style:function(iM){return {textColor:iM.disabled?P:undefined};}
},"button":{alias:z,include:z,style:function(iN){return {center:true};}
},"hover-button":{alias:fC,include:fC,style:function(iO){return {decorator:iO.hovered?fO:undefined};}
},"menubutton":{include:fC,alias:fC,style:function(iP){return {icon:qx.theme.simple.Image.URLS[H],iconPosition:gl};}
},"splitbutton":{},"splitbutton/button":{alias:gx,style:function(iQ){var iR=L;if(!iQ.disabled){if(iQ.pressed||iQ.checked){iR+=J;}
;if(iQ.hovered){iR+=gf;}
;}
;if(iQ.focused){iR+=gC;}
;iR+=eP;return {decorator:iR,padding:[3,8],cursor:iQ.disabled?undefined:ei};}
},"splitbutton/arrow":{style:function(iS){var iT=L;if(!iS.disabled){if(iS.pressed||iS.checked){iT+=J;}
;if(iS.hovered){iT+=gf;}
;}
;if(iS.focused){iT+=gC;}
;iT+=y;return {icon:qx.theme.simple.Image.URLS[H],decorator:iT,cursor:iS.disabled?undefined:ei,padding:[3,4]};}
},"groupbox":{},"groupbox/legend":{alias:gx,style:function(iU){return {textColor:iU.invalid?fg:undefined,padding:5,margin:4,font:N};}
},"groupbox/frame":{style:function(iV){return {backgroundColor:h,padding:[6,9],margin:[18,2,2,2],decorator:gH};}
},"check-groupbox":eG,"check-groupbox/legend":{alias:X,include:X,style:function(iW){return {textColor:iW.invalid?fg:undefined,padding:5,margin:4,font:N};}
},"radio-groupbox":eG,"radio-groupbox/legend":{alias:A,include:A,style:function(iX){return {textColor:iX.invalid?fg:undefined,padding:5,margin:4,font:N};}
},"tree-folder/open":{include:gp,style:function(iY){return {source:iY.opened?qx.theme.simple.Image.URLS[R]:qx.theme.simple.Image.URLS[gB]};}
},"tree-folder":{style:function(ja){var jb;if(ja.selected){jb=gh;if(ja.disabled){jb+=et;}
;}
;return {padding:[2,8,2,5],icon:ja.opened?ep:fn,backgroundColor:jb,iconOpened:ep,opacity:ja.drag?0.5:undefined};}
},"tree-folder/icon":{include:gp,style:function(jc){return {padding:[0,4,0,0]};}
},"tree-folder/label":{style:function(jd){return {padding:[1,2],textColor:jd.selected&&!jd.disabled?fs:undefined};}
},"tree-file":{include:fp,alias:fp,style:function(je){return {icon:fk,opacity:je.drag?0.5:undefined};}
},"tree":{include:F,alias:F,style:function(jf){return {contentPadding:jf.invalid&&!jf.disabled?[3,0]:[4,1],padding:jf.focused?0:1};}
},"window":{style:function(jg){return {contentPadding:[10,10,10,10],backgroundColor:h,decorator:jg.maximized?undefined:jg.active?gv:gg};}
},"window-resize-frame":O,"window/pane":{},"window/captionbar":{style:function(jh){return {backgroundColor:jh.active?dR:g,padding:8,font:N,decorator:t};}
},"window/icon":{style:function(ji){return {marginRight:4};}
},"window/title":{style:function(jj){return {cursor:fJ,font:N,marginRight:20,alignY:eS};}
},"window/minimize-button":{alias:fC,style:function(jk){return {icon:qx.theme.simple.Image.URLS[fP],padding:[1,2],cursor:jk.disabled?undefined:ei};}
},"window/restore-button":{alias:fC,style:function(jl){return {icon:qx.theme.simple.Image.URLS[M],padding:[1,2],cursor:jl.disabled?undefined:ei};}
},"window/maximize-button":{alias:fC,style:function(jm){return {icon:qx.theme.simple.Image.URLS[dU],padding:[1,2],cursor:jm.disabled?undefined:ei};}
},"window/close-button":{alias:fC,style:function(jn){return {marginLeft:2,icon:qx.theme.simple.Image.URLS[dW],padding:[1,2],cursor:jn.disabled?undefined:ei};}
},"window/statusbar":{style:function(jo){return {decorator:S,padding:[2,6]};}
},"window/statusbar-text":eu,"datechooser":{style:function(jp){return {decorator:gj,minWidth:220};}
},"datechooser/navigation-bar":{style:function(jq){return {backgroundColor:h,textColor:jq.disabled?P:jq.invalid?fg:undefined,padding:[2,10]};}
},"datechooser/last-year-button-tooltip":eB,"datechooser/last-month-button-tooltip":eB,"datechooser/next-year-button-tooltip":eB,"datechooser/next-month-button-tooltip":eB,"datechooser/last-year-button":fV,"datechooser/last-month-button":fV,"datechooser/next-year-button":fV,"datechooser/next-month-button":fV,"datechooser/button/icon":{},"datechooser/button":{style:function(jr){var js={width:17,show:eN,cursor:jr.disabled?undefined:ei};if(jr.lastYear){js.icon=qx.theme.simple.Image.URLS[eO];}
else if(jr.lastMonth){js.icon=qx.theme.simple.Image.URLS[c];}
else if(jr.nextYear){js.icon=qx.theme.simple.Image.URLS[ek];}
else if(jr.nextMonth){js.icon=qx.theme.simple.Image.URLS[eW];}
;return js;}
},"datechooser/month-year-label":{style:function(jt){return {font:N,textAlign:fE};}
},"datechooser/date-pane":{style:function(ju){return {decorator:dX,backgroundColor:h};}
},"datechooser/weekday":{style:function(jv){return {decorator:d,font:N,textAlign:fE,textColor:jv.disabled?P:jv.weekend?D:h,backgroundColor:jv.weekend?h:D,paddingTop:2};}
},"datechooser/day":{style:function(jw){return {textAlign:fE,decorator:jw.today?gj:undefined,textColor:jw.disabled?P:jw.selected?fs:jw.otherMonth?P:undefined,backgroundColor:jw.disabled?undefined:jw.selected?gh:undefined,padding:jw.today?[1,3]:[2,4]};}
},"datechooser/week":{style:function(jx){return {textAlign:fE,textColor:D,padding:[2,4],decorator:jx.header?ea:fb};}
},"progressbar":{style:function(jy){return {decorator:fA,padding:1,backgroundColor:T,width:200,height:20};}
},"progressbar/progress":{style:function(jz){return {backgroundColor:jz.disabled?eK:gh};}
},"toolbar":{style:function(jA){return {backgroundColor:dR,padding:0};}
},"toolbar/part":{style:function(jB){return {margin:[0,15]};}
},"toolbar/part/container":{},"toolbar/part/handle":{},"toolbar-separator":{style:function(jC){return {decorator:fd,margin:[7,0],width:4};}
},"toolbar-button":{alias:gx,style:function(jD){var jF=L;if(jD.disabled){jF=L;}
else if(jD.hovered&&!jD.pressed&&!jD.checked){jF=em;}
else if(jD.hovered&&(jD.pressed||jD.checked)){jF=ew;}
else if(jD.pressed||jD.checked){jF=eD;}
;if(jD.left){jF+=eP;}
else if(jD.right){jF+=y;}
else if(jD.middle){jF+=eT;}
;var jE=[7,10];if(jD.left||jD.middle||jD.right){jE=[7,0];}
;return {cursor:jD.disabled?undefined:ei,decorator:jF,margin:jE,padding:[3,5]};}
},"toolbar-menubutton":{alias:fS,include:fS,style:function(jG){return {showArrow:true};}
},"toolbar-menubutton/arrow":{alias:gp,include:gp,style:function(jH){return {source:qx.theme.simple.Image.URLS[H],cursor:jH.disabled?undefined:ei,padding:[0,5],marginLeft:2};}
},"toolbar-splitbutton":{},"toolbar-splitbutton/button":{alias:fS,include:fS,style:function(jI){var jK=L;if(jI.disabled){jK=L;}
else if(jI.hovered&&!jI.pressed&&!jI.checked){jK=em;}
else if(jI.hovered&&(jI.pressed||jI.checked)){jK=ew;}
else if(jI.pressed||jI.checked){jK=eD;}
;var jJ=[7,0,7,10];if(jI.left||jI.middle||jI.right){jJ=[7,0,7,0];}
;if(jI.left){jK+=eP;}
else if(jI.right){jK+=eT;}
else if(jI.middle){jK+=eT;}
else {jK+=eP;}
;return {icon:qx.theme.simple.Image.URLS[H],decorator:jK,margin:jJ};}
},"toolbar-splitbutton/arrow":{alias:fS,include:fS,style:function(jL){var jN=L;if(jL.disabled){jN=L;}
else if(jL.hovered&&!jL.pressed&&!jL.checked){jN=em;}
else if(jL.hovered&&(jL.pressed||jL.checked)){jN=ew;}
else if(jL.pressed||jL.checked){jN=eD;}
;var jM=[7,10,7,0];if(jL.left||jL.middle||jL.right){jM=[7,0,7,0];}
;if(jL.left){jN+=eT;}
else if(jL.right){jN+=y;}
else if(jL.middle){jN+=eT;}
else {jN+=y;}
;return {icon:qx.theme.simple.Image.URLS[H],decorator:jN,margin:jM};}
},"tabview":{},"tabview/bar":{alias:o,style:function(jO){var jP=0,jS=0,jQ=0,jR=0;if(jO.barTop){jQ-=1;}
else if(jO.barBottom){jP-=1;}
else if(jO.barRight){jR-=1;}
else {jS-=1;}
;return {marginBottom:jQ,marginTop:jP,marginLeft:jR,marginRight:jS};}
},"tabview/bar/button-forward":{include:fj,alias:fj,style:function(jT){if(jT.barTop){return {marginTop:4,marginBottom:2,decorator:null};}
else if(jT.barBottom){return {marginTop:2,marginBottom:4,decorator:null};}
else if(jT.barLeft){return {marginLeft:4,marginRight:2,decorator:null};}
else {return {marginLeft:2,marginRight:4,decorator:null};}
;}
},"tabview/bar/button-backward":{include:eh,alias:eh,style:function(jU){if(jU.barTop){return {marginTop:4,marginBottom:2,decorator:null};}
else if(jU.barBottom){return {marginTop:2,marginBottom:4,decorator:null};}
else if(jU.barLeft){return {marginLeft:4,marginRight:2,decorator:null};}
else {return {marginLeft:2,marginRight:4,decorator:null};}
;}
},"tabview/pane":{style:function(jV){return {backgroundColor:h,decorator:gj,padding:10};}
},"tabview-page":eb,"tabview-page/button":{style:function(jW){var jY;if(jW.barTop||jW.barBottom){var jX=[8,16,8,13];}
else {var jX=[8,4,8,4];}
;if(jW.checked){if(jW.barTop){jY=fN;}
else if(jW.barBottom){jY=fM;}
else if(jW.barRight){jY=fI;}
else if(jW.barLeft){jY=fD;}
;}
else {for(var i=0;i<jX.length;i++ ){jX[i]+=1;}
;if(jW.barTop){jX[2]-=1;}
else if(jW.barBottom){jX[0]-=1;}
else if(jW.barRight){jX[3]-=1;}
else if(jW.barLeft){jX[1]-=1;}
;}
;return {zIndex:jW.checked?10:5,decorator:jY,textColor:jW.disabled?P:jW.checked?null:eo,padding:jX,cursor:ei};}
},"tabview-page/button/label":{alias:eu,style:function(ka){return {padding:[0,1,0,1]};}
},"tabview-page/button/icon":gp,"tabview-page/button/close-button":{alias:gx,style:function(kb){return {cursor:kb.disabled?undefined:ei,icon:qx.theme.simple.Image.URLS[U]};}
},"colorpopup":{alias:gm,include:gm,style:function(kc){return {padding:5};}
},"colorpopup/field":{style:function(kd){return {margin:2,width:14,height:14,backgroundColor:h,decorator:gw};}
},"colorpopup/selector-button":fC,"colorpopup/auto-button":fC,"colorpopup/preview-pane":eG,"colorpopup/current-preview":{style:function(ke){return {height:20,padding:4,marginLeft:4,decorator:gw,allowGrowX:true};}
},"colorpopup/selected-preview":{style:function(kf){return {height:20,padding:4,marginRight:4,decorator:gw,allowGrowX:true};}
},"colorpopup/colorselector-okbutton":{alias:fC,include:fC,style:function(kg){return {icon:k};}
},"colorpopup/colorselector-cancelbutton":{alias:fC,include:fC,style:function(kh){return {icon:eH};}
},"colorselector":eb,"colorselector/control-bar":eb,"colorselector/visual-pane":eG,"colorselector/control-pane":eb,"colorselector/preset-grid":eb,"colorselector/colorbucket":{style:function(ki){return {decorator:gw,width:16,height:16};}
},"colorselector/preset-field-set":eG,"colorselector/input-field-set":{include:eG,alias:eG,style:function(){return {paddingTop:12};}
},"colorselector/preview-field-set":{include:eG,alias:eG,style:function(){return {paddingTop:12};}
},"colorselector/hex-field-composite":eb,"colorselector/hex-field":ey,"colorselector/rgb-spinner-composite":eb,"colorselector/rgb-spinner-red":ev,"colorselector/rgb-spinner-green":ev,"colorselector/rgb-spinner-blue":ev,"colorselector/hsb-spinner-composite":eb,"colorselector/hsb-spinner-hue":ev,"colorselector/hsb-spinner-saturation":ev,"colorselector/hsb-spinner-brightness":ev,"colorselector/preview-content-old":{style:function(kj){return {decorator:gw,width:50,height:25};}
},"colorselector/preview-content-new":{style:function(kk){return {decorator:gw,backgroundColor:T,width:50,height:25};}
},"colorselector/hue-saturation-field":{style:function(kl){return {decorator:gw,margin:5};}
},"colorselector/brightness-field":{style:function(km){return {decorator:gw,margin:[5,7]};}
},"colorselector/hue-saturation-pane":eb,"colorselector/hue-saturation-handle":eb,"colorselector/brightness-pane":eb,"colorselector/brightness-handle":eb,"app-header":{style:function(kn){return {font:fz,textColor:fs,backgroundColor:D,padding:[8,12]};}
},"app-header-label":{style:function(ko){return {paddingTop:5};}
},"app-splitpane":{alias:fi,style:function(kp){return {padding:[0,10,10,10],backgroundColor:dR};}
}}});}
)();
(function(){var a="decoration/table/select-column-order.png",b="decoration/treevirtual/end.gif",c="decoration/checkbox/checked.png",d="decoration/arrows/right.gif",e="decoration/window/maximize.gif",f="decoration/treevirtual/only_plus.gif",g="qx.theme.simple.Image",h="decoration/cursors/move.gif",i="decoration/menu/checkbox.gif",j="decoration/table/ascending.png",k="decoration/arrows/down-small.gif",l="decoration/checkbox/undetermined.png",m="decoration/splitpane/knob-vertical.png",n="decoration/arrows/forward.gif",o="decoration/arrows/up-small.gif",p="decoration/arrows/up-invert.gif",q="decoration/treevirtual/cross_plus.gif",r="decoration/window/minimize.gif",s="qx/static/blank.png",t="decoration/tree/minus.gif",u="decoration/arrows/down-invert.gif",v="decoration/arrows/right-invert.gif",w="decoration/cursors/alias.gif",x="decoration/splitpane/knob-horizontal.png",y="decoration/treevirtual/only_minus.gif",z="decoration/treevirtual/start_plus.gif",A="decoration/cursors/nodrop.gif",B="decoration/cursors/copy.gif",C="decoration/arrows/down.gif",D="decoration/treevirtual/end_plus.gif",E="decoration/treevirtual/start_minus.gif",F="decoration/treevirtual/cross.gif",G="decoration/menu/radiobutton.gif",H="decoration/treevirtual/line.gif",I="decoration/arrows/up.gif",J="decoration/tabview/close.gif",K="decoration/tree/plus.gif",L="decoration/arrows/rewind.gif",M="decoration/window/restore.gif",N="decoration/table/descending.png",O="decoration/menu/checkbox-invert.gif",P="decoration/treevirtual/cross_minus.gif",Q="decoration/treevirtual/end_minus.gif",R="decoration/arrows/left.gif",S="decoration/menu/radiobutton-invert.gif",T="decoration/window/close.gif";qx.Class.define(g,{extend:qx.core.Object,statics:{URLS:{"blank":s,"checkbox-checked":c,"checkbox-undetermined":l,"window-minimize":r,"window-maximize":e,"window-restore":M,"window-close":T,"cursor-copy":B,"cursor-move":h,"cursor-alias":w,"cursor-nodrop":A,"arrow-right":d,"arrow-left":R,"arrow-up":I,"arrow-down":C,"arrow-forward":n,"arrow-rewind":L,"arrow-down-small":k,"arrow-up-small":o,"arrow-up-invert":p,"arrow-down-invert":u,"arrow-right-invert":v,"knob-horizontal":x,"knob-vertical":m,"tree-minus":t,"tree-plus":K,"select-column-order":a,"table-ascending":j,"table-descending":N,"treevirtual-line":H,"treevirtual-minus-only":y,"treevirtual-plus-only":f,"treevirtual-minus-start":E,"treevirtual-plus-start":z,"treevirtual-minus-end":Q,"treevirtual-plus-end":D,"treevirtual-minus-cross":P,"treevirtual-plus-cross":q,"treevirtual-end":b,"treevirtual-cross":F,"menu-checkbox":i,"menu-checkbox-invert":O,"menu-radiobutton-invert":S,"menu-radiobutton":G,"tabview-close":J}}});}
)();
(function(){var a="knob-",b="window",c="vertical",d="font",e="window-caption-active",f="window-caption",g="headline",h="groupbox",i="background",j="splitpane",k="window-active",l="highlight",m="default",n="tree",o="middle",p="horizontal",q="app-header",r="text-selected",s="light-background",t="qx.theme.indigo.Appearance";qx.Theme.define(t,{extend:qx.theme.simple.Appearance,appearances:{"colorselector/input-field-set":{include:h,alias:h,style:function(){return {paddingTop:0};}
},"colorselector/preview-field-set":{include:h,alias:h,style:function(){return {paddingTop:0};}
},"toolbar":{style:function(u){return {backgroundColor:s,padding:[4,0]};}
},"splitpane/splitter/knob":{style:function(v){return {source:qx.theme.simple.Image.URLS[a+(v.horizontal?p:c)],padding:3};}
},"window":{style:function(w){return {contentPadding:[10,10,10,10],backgroundColor:w.maximized?i:undefined,decorator:w.maximized?undefined:w.active?k:b};}
},"window/captionbar":{style:function(x){var y=x.active&&!x.disabled;return {padding:[3,8,y?1:3,8],textColor:y?l:d,decorator:y?e:f};}
},"window/title":{style:function(z){return {cursor:m,font:m,marginRight:20,alignY:o};}
},"virtual-tree":{include:n,alias:n,style:function(A){return {itemHeight:27};}
},"app-header":{style:function(B){return {font:g,textColor:r,decorator:q,padding:10};}
},"app-header-label":{style:function(C){return {paddingTop:5};}
},"app-splitpane":{alias:j,style:function(D){return {padding:[0,10,10,10],backgroundColor:s};}
}}});}
)();
(function(){var a="Tango",b="qx/icon/Tango",c="qx.theme.icon.Tango";qx.Theme.define(c,{title:a,aliases:{"icon":b}});}
)();
(function(){var a="button-box-dark-pressed",b="checkbox",c="tabview-page-button-top",d="button-border",e="table-header",f="button-box-invalid",g="button-border-hovered",h="menubar-button-hovered",i="button-box-dark",j="#999999",k="button-box-hovered-focused",l="solid",m="qx/decoration/Simple",n="dotted",o="border-separator",p="shadow",q="window-border",r="tooltip-text",s="button-box-hovered",t="table-focus-indicator",u="button-box-pressed-invalid",v="dark-blue",w="scrollbar-dark",x="radiobutton",y="scroll-knob",z="qx.theme.simple.Decoration",A="button-box-focused",B="table-header-cell",C="button",D="scroll-knob-pressed",E="border-lead",F="button-box-pressed-hovered",G="border-main",H="#FFF",I="button-box-pressed-focused",J="invalid",K="button-box",L="background",M="scrollbar-bright",N="button-box-bright",O="window-border-inner",P="border-light-shadow",Q="white-box-border",R="background-selected",S="window",T="white",U="gray",V="border-light",W="button-box-bright-pressed",X="button-box-pressed-hovered-focused",Y="button-box-pressed";qx.Theme.define(z,{aliases:{decoration:m},decorations:{"border-blue":{style:{width:4,color:R}},"main":{style:{width:1,color:G}},"main-dark":{style:{width:1,color:d}},"popup":{style:{width:1,color:q,shadowLength:2,shadowBlurRadius:5,shadowColor:p}},"dragover":{style:{bottom:[2,l,v]}},"button-box":{style:{radius:3,width:1,color:d,gradientStart:[N,40],gradientEnd:[i,70],backgroundColor:N}},"button-box-pressed":{include:K,style:{gradientStart:[W,40],gradientEnd:[a,70],backgroundColor:W}},"button-box-pressed-hovered":{include:Y,style:{color:g}},"button-box-hovered":{include:K,style:{color:g}},"button-box-invalid":{include:K,style:{color:J}},"button-box-pressed-invalid":{include:Y,style:{color:J}},"button-box-hovered-invalid":{include:f},"button-box-pressed-hovered-invalid":{include:u},"button-box-focused":{include:K,style:{color:R}},"button-box-pressed-focused":{include:Y,style:{color:R}},"button-box-hovered-focused":{include:A},"button-box-pressed-hovered-focused":{include:I},"button-box-right":{include:K,style:{radius:[0,3,3,0]}},"button-box-pressed-right":{include:Y,style:{radius:[0,3,3,0]}},"button-box-pressed-hovered-right":{include:F,style:{radius:[0,3,3,0]}},"button-box-hovered-right":{include:s,style:{radius:[0,3,3,0]}},"button-box-focused-right":{include:A,style:{radius:[0,3,3,0]}},"button-box-hovered-focused-right":{include:k,style:{radius:[0,3,3,0]}},"button-box-pressed-focused-right":{include:I,style:{radius:[0,3,3,0]}},"button-box-pressed-hovered-focused-right":{include:X,style:{radius:[0,3,3,0]}},"button-box-right-borderless":{include:K,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-right-borderless":{include:Y,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-hovered-right-borderless":{include:F,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-hovered-right-borderless":{include:s,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-top-right":{include:K,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-top-right":{include:Y,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-hovered-top-right":{include:F,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-hovered-top-right":{include:s,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-bottom-right":{include:K,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-bottom-right":{include:Y,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-hovered-bottom-right":{include:F,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-hovered-bottom-right":{include:s,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-bottom-left":{include:K,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-bottom-left":{include:Y,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-hovered-bottom-left":{include:F,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-hovered-bottom-left":{include:s,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-top-left":{include:K,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-top-left":{include:Y,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-hovered-top-left":{include:F,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-hovered-top-left":{include:s,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-middle":{include:K,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-middle":{include:Y,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-hovered-middle":{include:F,style:{radius:0,width:[1,0,1,1]}},"button-box-hovered-middle":{include:s,style:{radius:0,width:[1,0,1,1]}},"button-box-left":{include:K,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-left":{include:Y,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-hovered-left":{include:F,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-hovered-left":{include:s,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-focused-left":{include:A,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-hovered-focused-left":{include:k,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-hovered-focused-left":{include:X,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-focused-left":{include:I,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"separator-horizontal":{style:{widthLeft:1,colorLeft:o}},"separator-vertical":{style:{widthTop:1,colorTop:o}},"scroll-knob":{style:{radius:3,width:1,color:d,backgroundColor:M}},"scroll-knob-pressed":{include:y,style:{backgroundColor:w}},"scroll-knob-hovered":{include:y,style:{color:g}},"scroll-knob-pressed-hovered":{include:D,style:{color:g}},"button-hover":{style:{backgroundColor:C,radius:3}},"window":{style:{width:1,color:q,innerWidth:4,innerColor:O,shadowLength:1,shadowBlurRadius:3,shadowColor:p,backgroundColor:L}},"window-active":{include:S,style:{shadowLength:2,shadowBlurRadius:5}},"window-caption":{style:{width:[0,0,2,0],color:O}},"white-box":{style:{width:1,color:Q,shadowBlurRadius:2,shadowColor:j,radius:7,backgroundColor:T,shadowLength:0}},"inset":{style:{width:1,color:[P,V,V,V]}},"focused-inset":{style:{width:2,color:R}},"border-invalid":{style:{width:2,color:J}},"lead-item":{style:{width:1,style:n,color:E}},"tooltip":{style:{width:1,color:r,shadowLength:1,shadowBlurRadius:2,shadowColor:p}},"tooltip-error":{style:{radius:5,backgroundColor:J}},"toolbar-separator":{style:{widthLeft:1,colorLeft:d}},"menu-separator":{style:{widthTop:1,colorTop:R}},"menubar-button-hovered":{style:{width:1,color:G,radius:3,backgroundColor:T}},"menubar-button-pressed":{include:h,style:{radius:[3,3,0,0],width:[1,1,0,1]}},"datechooser-date-pane":{style:{widthTop:1,colorTop:U,style:l}},"datechooser-weekday":{style:{widthBottom:1,colorBottom:U,style:l}},"datechooser-week":{style:{widthRight:1,colorRight:U,style:l}},"datechooser-week-header":{style:{widthBottom:1,colorBottom:U,widthRight:1,colorRight:U,style:l}},"tabview-page-button-top":{style:{width:[1,1,0,1],backgroundColor:L,color:G,radius:[3,3,0,0]}},"tabview-page-button-bottom":{include:c,style:{radius:[0,0,3,3],width:[0,1,1,1]}},"tabview-page-button-left":{include:c,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"tabview-page-button-right":{include:c,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"statusbar":{style:{widthTop:1,colorTop:R,styleTop:l}},"table-scroller-focus-indicator":{style:{width:2,color:t,style:l}},"table-header":{include:K,style:{radius:0,width:[1,0,1,0]}},"table-header-column-button":{include:e,style:{width:1,color:d}},"table-header-cell":{style:{widthRight:1,color:d}},"table-header-cell-first":{include:B,style:{widthLeft:1}},"progressive-table-header":{include:K,style:{radius:0,width:[1,0,1,1]}},"progressive-table-header-cell":{style:{widthRight:1,color:d}},"progressbar":{style:{backgroundColor:H,width:1,color:o}},"radiobutton":{style:{radius:10,width:1,color:d,innerColor:L,innerWidth:2}},"radiobutton-focused":{include:x,style:{color:R}},"radiobutton-invalid":{include:x,style:{color:J}},"checkbox":{style:{width:1,color:d}},"checkbox-focused":{include:b,style:{color:R}},"checkbox-invalid":{include:b,style:{color:J}}}});}
)();
(function(){var a="qx.theme.indigo.Decoration",b="solid",c="window-border",d="white-box-border",e="#505154",f="background",g="highlight",h="border-main",i="white",j="highlight-shade",k="shadow",l="qx/decoration/Simple",m="#323335";qx.Theme.define(a,{extend:qx.theme.simple.Decoration,aliases:{decoration:l},decorations:{"window":{style:{width:1,color:c,shadowLength:1,shadowBlurRadius:3,shadowColor:k,backgroundColor:f,radius:3}},"window-caption":{style:{radius:[3,3,0,0],color:c,widthBottom:1}},"window-caption-active":{style:{radius:[3,3,0,0],color:g,widthBottom:3}},"white-box":{style:{width:1,color:d,backgroundColor:i}},"statusbar":{style:{widthTop:1,colorTop:h,styleTop:b}},"app-header":{style:{innerWidthBottom:1,innerColorBottom:j,widthBottom:9,colorBottom:g,gradientStart:[e,0],gradientEnd:[m,100],backgroundColor:m}}}});}
)();
(function(){var a="#D9D9D9",b="#BBBBBB",c="#24B",d="qx.theme.indigo.Color",e="#dddddd",f="#888888",g="#CCCCCC",h="rgba(0, 0, 0, 0.4)",i="#B7B7B7",j="#1866B5",k="#BABABA",l="black",m="#F7F7F7",n="#A7A6AA",o="#EBEBEB",p="#666666",q="#CBC8CD",r="#F9F9F9",s="#CDCDCD",t="#808080",u="#F4F4F4",v="#C00F00",w="#686868",x="white",y="#5583D0",z="#262626",A="css.rgba",B="#EEE",C="#3D72C9",D="#E3E3E3",E="#323335",F="#BBB",G="#FE0",H="#F1F1F1",I="#939393",J="#134983",K="gray",L="#E8F0E3",M="#AAAAAA";qx.Theme.define(d,{colors:{"background":x,"dark-blue":E,"light-background":u,"font":z,"highlight":C,"highlight-shade":y,"background-selected":C,"background-selected-disabled":s,"background-selected-dark":E,"background-disabled":m,"background-disabled-checked":b,"background-pane":x,"tabview-unselected":j,"tabview-button-border":J,"tabview-label-active-disabled":a,"link":c,"scrollbar-bright":H,"scrollbar-dark":o,"button":L,"button-border":F,"button-border-hovered":I,"invalid":v,"button-box-bright":r,"button-box-dark":D,"button-box-bright-pressed":k,"button-box-dark-pressed":o,"border-lead":f,"window-border":e,"window-border-inner":u,"white-box-border":e,"shadow":qx.core.Environment.get(A)?h:p,"border-main":e,"border-light":i,"border-light-shadow":w,"border-separator":t,"text":z,"text-disabled":n,"text-selected":x,"text-placeholder":q,"tooltip":G,"tooltip-text":l,"table-header":[242,242,242],"table-focus-indicator":C,"table-header-cell":[235,234,219],"table-row-background-focused-selected":C,"table-row-background-focused":u,"table-row-background-selected":[51,94,168],"table-row-background-even":x,"table-row-background-odd":x,"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":B,"table-column-line":B,"progressive-table-header":M,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":K,"progressive-progressbar-indicator-done":g,"progressive-progressbar-indicator-undone":x,"progressive-progressbar-percent-background":K,"progressive-progressbar-percent-text":x}});}
)();
(function(){var a="Indigo",b="qx.theme.Indigo";qx.Theme.define(b,{title:a,meta:{color:qx.theme.indigo.Color,decoration:qx.theme.indigo.Decoration,font:qx.theme.indigo.Font,appearance:qx.theme.indigo.Appearance,icon:qx.theme.icon.Tango}});}
)();
(function(){var a="sans-serif",b="monospace",c="Courier New",d="qx.theme.simple.Font",e="arial",f="DejaVu Sans Mono";qx.Theme.define(d,{fonts:{"default":{size:13,family:[e,a]},"bold":{size:13,family:[e,a],bold:true},"headline":{size:24,family:[a,e]},"small":{size:11,family:[e,a]},"monospace":{size:11,family:[f,c,b]}}});}
)();
(function(){var a="#D9D9D9",b="#1866B5",c="#24B",d="#FF0000",e="#CCCCCC",f="#5685D6",g="rgba(0, 0, 0, 0.4)",h="#FFFFE1",i="#B7B7B7",j="#BBBBBB",k="black",l="#9DCBFE",m="#A7A6AA",n="#EBEBEB",o="#666666",p="#CBC8CD",q="#F9F9F9",r="#CDCDCD",s="#808080",t="#F7F7F7",u="#6694E3",v="#686868",w="white",x="#888888",y="#E0ECFF",z="#2E3A46",A="css.rgba",B="#F5F5F5",C="#EEE",D="#E3E3E3",E="#DDDDDD",F="#BBB",G="qx.theme.simple.Color",H="#F1F1F1",I="#939393",J="#BCBCBC",K="#134983",L="gray",M="#E8F0E3",N="#FAFBFE",O="#AAAAAA";qx.Theme.define(G,{colors:{"background":w,"dark-blue":f,"light-background":y,"background-selected":u,"background-selected-disabled":r,"background-selected-dark":f,"background-disabled":t,"background-disabled-checked":j,"background-pane":N,"tabview-unselected":b,"tabview-button-border":K,"tabview-label-active-disabled":a,"link":c,"scrollbar-bright":H,"scrollbar-dark":n,"button":M,"button-border":F,"button-border-hovered":I,"invalid":d,"button-box-bright":q,"button-box-dark":D,"button-box-bright-pressed":E,"button-box-dark-pressed":B,"border-lead":x,"window-border":z,"window-border-inner":l,"white-box-border":J,"shadow":qx.core.Environment.get(A)?g:o,"border-main":u,"border-light":i,"border-light-shadow":v,"border-separator":s,"text":k,"text-disabled":m,"text-selected":w,"text-placeholder":p,"tooltip":h,"tooltip-text":k,"table-header":[242,242,242],"table-focus-indicator":[179,217,255],"table-header-cell":[235,234,219],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":w,"table-row-background-odd":w,"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":C,"table-column-line":C,"progressive-table-header":O,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":L,"progressive-progressbar-indicator-done":e,"progressive-progressbar-indicator-undone":w,"progressive-progressbar-percent-background":L,"progressive-progressbar-percent-text":w}});}
)();
(function(){var a="Simple",b="qx.theme.Simple";qx.Theme.define(b,{title:a,meta:{color:qx.theme.simple.Color,decoration:qx.theme.simple.Decoration,font:qx.theme.simple.Font,appearance:qx.theme.simple.Appearance,icon:qx.theme.icon.Tango}});}
)();
(function(){var a="button-checked",b="window-resize-frame",c="decoration/window/maximize-active-hovered.png",d="radiobutton-hovered",e="decoration/arrows/right.png",f="background-application",g="keyboard-focus",h="group-item",i="scrollbar/button",j="decoration/cursors/",k="icon/16/actions/dialog-ok.png",l="border-invalid",m="combobox/button",n="input",o="slidebar",p="menu",q="table-scroller-focus-indicator",r="move-frame",s="nodrop",t="decoration/table/boolean-true.png",u="table-header-cell",v="app-header",w="row-layer",x="text-inactive",y="image",z="radiobutton",A="move",B="window-resize-frame-incl-statusbar",C="radiobutton-checked-focused",D="decoration/window/restore-active-hovered.png",E="window-captionbar-inactive",F="list",G="text-label",H="tree-folder",I="right.png",J="tabview-page-button-bottom-inactive",K="tooltip-error",L="decoration/tree/closed.png",M="window-statusbar",N="button-hovered",O="bold",P="decoration/scrollbar/scrollbar-",Q="background-tip",R="scrollbar-slider-horizontal-disabled",S="text-disabled",T="table-scroller-header",U="radiobutton-disabled",V="scrollbar-slider-horizontal",W="button-pressed",X="table-pane",Y="decoration/window/close-active.png",fD="native",fz="checkbox-hovered",fE="decoration/window/minimize-active-hovered.png",fA="input-disabled",fB="virtual-list",fw="menubar",fC="groupbox",fJ="icon/16/actions/dialog-cancel.png",fK="tabview-page-button-top-inactive",fL="tabview-page-button-left-inactive",fM="menu-slidebar",fF="toolbar-button-checked",fG="decoration/arrows/left.png",fH="decoration/tree/open-selected.png",fI="tree-item",fQ="radiobutton-checked",gs="decoration/window/minimize-inactive.png",fR="menu-button",fS="button-focused",fN="icon/16/apps/office-calendar.png",fO="text-light",ht="menu-slidebar-button",fP="decoration/arrows/down.png",fT="middle",fU="group",fV="tree",gb="tabview-page-button-right-inactive",gc="decoration/window/minimize-active.png",gd="decoration/window/restore-inactive.png",fW="input-focused-invalid",fX="text-active",fY="splitpane",ga="text-input",gh="icon/16/actions/window-close.png",gi="combobox/textfield",hy="decoration/window/close-active-hovered.png",gj="invalid",ge="icon/16/places/folder.png",gf="combobox",hx="button-disabled",gg="tabview-page-button-left-active",gn="slidebar/button-forward",go="border-separator",hD="treevirtual-contract",gp="decoration/window/maximize-inactive.png",gk="scrollbar",gl="icon/22/places/folder-open.png",hB="right-top",gm="scrollarea",gq="background-splitpane",gr="datechooser/nav-button",gD="scrollbar-vertical",gC="decoration/toolbar/toolbar-handle-knob.gif",gB="icon/22/mimetypes/office-document.png",gH="text-selected",gG="cell",gF="button-checked-focused",gE="up.png",gw="best-fit",gv="decoration/tree/closed-selected.png",gu="text-hovered",gt="qx.theme.modern.Appearance",gA="decoration/tree/open.png",gz="default",gy="decoration/arrows/up-invert.png",gx="checkbox-disabled",gO="selected",gN="toolbar-button-hovered",gM="decoration/form/checked.png",gL="button",gS="progressive-table-header",gR="decoration/menu/radiobutton.gif",gQ="window-incl-statusbar",gP="decoration/arrows/down-small.png",gK="decoration/arrows/forward.png",gJ="decoration/table/descending.png",gI="decoration/form/undetermined.png",he="tree-file",hd="decoration/form/tooltip-error-arrow-right.png",hc="keep-align",hi="scrollbar-slider-vertical",hh="center",hg="toolbar",hf="alias",gW="decoration/window/restore-active.png",gV="datechooser",gU="toolbar-button",gT="decoration/table/boolean-false.png",hb="qx/static/blank.png",ha="window-pane",gY="icon/32/mimetypes/office-document.png",gX="slidebar/button-backward",ho="radiobutton-checked-disabled",hn="tabview-pane",hm="decoration/arrows/rewind.png",hl="checkbox-focused",hs="selectbox",hr="background-light",hq="top",hp="right",hk="main",hj="button-frame",eB="progressbar-background",eA="radiobutton-checked-hovered",hE="popup",ey="treevirtual-folder",ez="checkbox",ex="table-header-cell-hovered",hC="window",ev="icon/16/mimetypes/office-document.png",ew="treevirtual-expand",eu="text-gray",hz="left",es="decoration/menu/radiobutton-invert.gif",et="text-placeholder",er="atom",eK="text-title",eL="slider",eI="background-medium",eJ="decoration/table/select-column-order.png",eG="down.png",eH="widget",eF="groupitem-text",eq="tabview-page-button-top-active",eD="icon/32/places/folder-open.png",eE="icon/22/places/folder.png",eC="decoration/window/maximize-active.png",eY="decoration/window/close-inactive.png",eW="toolbar-part",eX="decoration/splitpane/knob-vertical.png",eU="left.png",eV="decoration/menu/checkbox-invert.gif",eT="table",hw="decoration/arrows/up.png",eR="table-statusbar",eS="decoration/form/tooltip-error-arrow.png",eQ="window-captionbar-active",hA="copy",eO="radiobutton-focused",eP="decoration/arrows/down-invert.png",eM="decoration/menu/checkbox.gif",eN="",fh="window-caption-active-text",fi="decoration/splitpane/knob-horizontal.png",ff="textfield",fg="icon/32/places/folder.png",fd="toolbar-separator",fe="tabview-page-button-bottom-active",fc="decoration/arrows/up-small.png",hv="decoration/table/ascending.png",fa="small",fb="tabview-page-button-right-active",fv="spinner",hu="tooltip",fx="-disabled",fs="label",fr="scrollbar-horizontal",fu="-invalid",ft="progressbar",fo="progressive-table-header-cell",fn="menu-separator",fq="pane",fp="decoration/arrows/right-invert.png",fk="icon/16/places/folder-open.png",fj="qx/static/blank.gif",fm=".gif",fl="icon/16/actions/view-refresh.png",fy="input-focused";qx.Theme.define(gt,{appearances:{"widget":{},"root":{style:function(hF){return {backgroundColor:f,textColor:G,font:gz};}
},"label":{style:function(hG){return {textColor:hG.disabled?S:undefined};}
},"move-frame":{style:function(hH){return {decorator:hk};}
},"resize-frame":r,"dragdrop-cursor":{style:function(hI){var hJ=s;if(hI.copy){hJ=hA;}
else if(hI.move){hJ=A;}
else if(hI.alias){hJ=hf;}
;return {source:j+hJ+fm,position:hB,offset:[2,16,2,6]};}
},"image":{style:function(hK){return {opacity:!hK.replacement&&hK.disabled?0.3:1};}
},"atom":{},"atom/label":fs,"atom/icon":y,"popup":{style:function(hL){return {decorator:hE,backgroundColor:hr};}
},"button-frame":{alias:er,style:function(hM){var hP,hO;var hN=[3,9];if(hM.checked&&hM.focused&&!hM.inner){hP=gF;hO=undefined;hN=[1,7];}
else if(hM.disabled){hP=hx;hO=undefined;}
else if(hM.pressed){hP=W;hO=gu;}
else if(hM.checked){hP=a;hO=undefined;}
else if(hM.hovered){hP=N;hO=gu;}
else if(hM.focused&&!hM.inner){hP=fS;hO=undefined;hN=[1,7];}
else {hP=gL;hO=undefined;}
;if(hM.invalid&&!hM.disabled){hP+=fu;}
;return {decorator:hP,textColor:hO,padding:hN,margin:[1,0]};}
},"button-frame/image":{style:function(hQ){return {opacity:!hQ.replacement&&hQ.disabled?0.5:1};}
},"button":{alias:hj,include:hj,style:function(hR){return {center:true};}
},"hover-button":{alias:er,include:er,style:function(hS){var hT=hS.hovered?gO:undefined;return {decorator:hT,textColor:hS.hovered?gH:undefined};}
},"menubutton":{include:gL,alias:gL,style:function(hU){return {icon:fP,iconPosition:hp};}
},"splitbutton":{},"splitbutton/button":gL,"splitbutton/arrow":{alias:gL,include:gL,style:function(hV,hW){return {icon:fP,padding:[hW.padding[0],hW.padding[1]-6],marginLeft:1};}
},"form-renderer-label":{include:fs,style:function(){return {paddingTop:4};}
},"checkbox":{alias:er,style:function(hX){var hY;if(hX.checked){hY=gM;}
else if(hX.undetermined){hY=gI;}
else {hY=fj;}
;return {icon:hY,minWidth:14,gap:8,paddingLeft:2};}
},"checkbox/icon":{style:function(ia){var ic;if(ia.disabled){ic=gx;}
else if(ia.focused){ic=hl;}
else if(ia.hovered){ic=fz;}
else {ic=ez;}
;ic+=ia.invalid&&!ia.disabled?fu:eN;var ib=ia.undetermined?[3,1]:1;return {decorator:ic,padding:ib,width:10,height:10};}
},"radiobutton":{alias:er,style:function(id){return {icon:hb,gap:8,paddingLeft:2};}
},"radiobutton/icon":{style:function(ie){var ig;if(ie.disabled&&!ie.checked){ig=U;}
else if(ie.checked&&ie.focused){ig=C;}
else if(ie.checked&&ie.disabled){ig=ho;}
else if(ie.checked&&ie.hovered){ig=eA;}
else if(ie.checked){ig=fQ;}
else if(ie.focused){ig=eO;}
else if(ie.hovered){ig=d;}
else {ig=z;}
;ig+=ie.invalid&&!ie.disabled?fu:eN;return {decorator:ig,width:10,height:10};}
},"textfield":{style:function(ih){var im;var ik=!!ih.focused;var ii=!!ih.invalid;var ij=!!ih.disabled;if(ik&&ii&&!ij){im=fW;}
else if(ik&&!ii&&!ij){im=fy;}
else if(ij){im=fA;}
else if(!ik&&ii&&!ij){im=l;}
else {im=n;}
;var il;if(ih.disabled){il=S;}
else if(ih.showingPlaceholder){il=et;}
else {il=ga;}
;return {decorator:im,padding:[2,4,1],textColor:il};}
},"textarea":{include:ff,style:function(io){return {padding:4};}
},"spinner":{style:function(ip){var is;var ir=!!ip.focused;var it=!!ip.invalid;var iq=!!ip.disabled;if(ir&&it&&!iq){is=fW;}
else if(ir&&!it&&!iq){is=fy;}
else if(iq){is=fA;}
else if(!ir&&it&&!iq){is=l;}
else {is=n;}
;return {decorator:is};}
},"spinner/textfield":{style:function(iu){return {marginRight:2,padding:[2,4,1],textColor:iu.disabled?S:ga};}
},"spinner/upbutton":{alias:hj,include:hj,style:function(iv,iw){return {icon:fc,padding:[iw.padding[0]-1,iw.padding[1]-5],margin:0};}
},"spinner/downbutton":{alias:hj,include:hj,style:function(ix,iy){return {icon:gP,padding:[iy.padding[0]-1,iy.padding[1]-5],margin:0};}
},"datefield":gf,"datefield/button":{alias:m,include:m,style:function(iz){return {icon:fN,padding:[0,3],decorator:undefined};}
},"datefield/textfield":gi,"datefield/list":{alias:gV,include:gV,style:function(iA){return {decorator:undefined};}
},"groupbox":{style:function(iB){return {legendPosition:hq};}
},"groupbox/legend":{alias:er,style:function(iC){return {padding:[1,0,1,4],textColor:iC.invalid?gj:eK,font:O};}
},"groupbox/frame":{style:function(iD){return {padding:10,margin:1,decorator:fU};}
},"check-groupbox":fC,"check-groupbox/legend":{alias:ez,include:ez,style:function(iE){return {padding:[1,0,1,4],textColor:iE.invalid?gj:eK,font:O};}
},"radio-groupbox":fC,"radio-groupbox/legend":{alias:z,include:z,style:function(iF){return {padding:[1,0,1,4],textColor:iF.invalid?gj:eK,font:O};}
},"scrollarea":eH,"scrollarea/corner":{style:function(iG){return {backgroundColor:f};}
},"scrollarea/pane":eH,"scrollarea/scrollbar-x":gk,"scrollarea/scrollbar-y":gk,"scrollbar":{style:function(iH){if(iH[fD]){return {};}
;return {width:iH.horizontal?undefined:16,height:iH.horizontal?16:undefined,decorator:(iH.horizontal?fr:gD),padding:1};}
},"scrollbar/slider":{alias:eL,style:function(iI){return {padding:iI.horizontal?[0,1,0,1]:[1,0,1,0]};}
},"scrollbar/slider/knob":{include:hj,style:function(iJ){var iK=iJ.horizontal?V:hi;if(iJ.disabled){iK+=fx;}
;return {decorator:iK,minHeight:iJ.horizontal?undefined:9,minWidth:iJ.horizontal?9:undefined,padding:undefined,margin:0};}
},"scrollbar/button":{alias:hj,include:hj,style:function(iL){var iN=P;if(iL.left){iN+=eU;}
else if(iL.right){iN+=I;}
else if(iL.up){iN+=gE;}
else {iN+=eG;}
;if(iL.left||iL.right){var iM=iL.left?3:4;return {padding:[3,0,3,iM],icon:iN,width:15,height:14,margin:0};}
else {return {padding:3,icon:iN,width:14,height:15,margin:0};}
;}
},"scrollbar/button-begin":i,"scrollbar/button-end":i,"slider":{style:function(iO){var iR;var iQ=!!iO.focused;var iS=!!iO.invalid;var iP=!!iO.disabled;if(iQ&&iS&&!iP){iR=fW;}
else if(iQ&&!iS&&!iP){iR=fy;}
else if(iP){iR=fA;}
else if(!iQ&&iS&&!iP){iR=l;}
else {iR=n;}
;return {decorator:iR};}
},"slider/knob":{include:hj,style:function(iT){return {decorator:iT.disabled?R:V,height:14,width:14,padding:0,margin:0};}
},"list":{alias:gm,style:function(iU){var iX;var iW=!!iU.focused;var iY=!!iU.invalid;var iV=!!iU.disabled;if(iW&&iY&&!iV){iX=fW;}
else if(iW&&!iY&&!iV){iX=fy;}
else if(iV){iX=fA;}
else if(!iW&&iY&&!iV){iX=l;}
else {iX=n;}
;return {backgroundColor:hr,decorator:iX};}
},"list/pane":eH,"listitem":{alias:er,style:function(ja){return {padding:ja.dragover?[4,4,2,4]:4,textColor:ja.selected?gH:undefined,decorator:ja.selected?gO:undefined,opacity:ja.drag?0.5:undefined};}
},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:hj,include:hj,style:function(jb){return {padding:5,center:true,icon:jb.vertical?fP:e};}
},"slidebar/button-backward":{alias:hj,include:hj,style:function(jc){return {padding:5,center:true,icon:jc.vertical?hw:fG};}
},"tabview":{style:function(jd){return {contentPadding:16};}
},"tabview/bar":{alias:o,style:function(je){var jf={marginBottom:je.barTop?-1:0,marginTop:je.barBottom?-4:0,marginLeft:je.barRight?-3:0,marginRight:je.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};if(je.barTop||je.barBottom){jf.paddingLeft=5;jf.paddingRight=7;}
else {jf.paddingTop=5;jf.paddingBottom=7;}
;return jf;}
},"tabview/bar/button-forward":{include:gn,alias:gn,style:function(jg){if(jg.barTop||jg.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/button-backward":{include:gX,alias:gX,style:function(jh){if(jh.barTop||jh.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(ji){return {decorator:hn,marginBottom:ji.barBottom?-1:0,marginTop:ji.barTop?-1:0,marginLeft:ji.barLeft?-1:0,marginRight:ji.barRight?-1:0};}
},"tabview-page":{alias:eH,include:eH,style:function(jj){return {padding:[4,3]};}
},"tabview-page/button":{alias:er,style:function(jk){var jq,jm=0;var jp=0,jl=0,jn=0,jo=0;if(jk.checked){if(jk.barTop){jq=eq;jm=[5,11];jn=jk.firstTab?0:-5;jo=jk.lastTab?0:-5;}
else if(jk.barBottom){jq=fe;jm=[5,11];jn=jk.firstTab?0:-5;jo=jk.lastTab?0:-5;jp=3;}
else if(jk.barRight){jq=fb;jm=[5,10];jp=jk.firstTab?0:-5;jl=jk.lastTab?0:-5;jn=2;}
else {jq=gg;jm=[5,10];jp=jk.firstTab?0:-5;jl=jk.lastTab?0:-5;}
;}
else {if(jk.barTop){jq=fK;jm=[3,9];jp=4;jn=jk.firstTab?5:1;jo=1;}
else if(jk.barBottom){jq=J;jm=[3,9];jl=4;jn=jk.firstTab?5:1;jo=1;jp=3;}
else if(jk.barRight){jq=gb;jm=[3,9];jo=5;jp=jk.firstTab?5:1;jl=1;jn=3;}
else {jq=fL;jm=[3,9];jn=5;jp=jk.firstTab?5:1;jl=1;jo=1;}
;}
;return {zIndex:jk.checked?10:5,decorator:jq,padding:jm,marginTop:jp,marginBottom:jl,marginLeft:jn,marginRight:jo,textColor:jk.disabled?S:jk.checked?fX:x};}
},"tabview-page/button/label":{alias:fs,style:function(jr){return {padding:jr.focused?[0,1,0,1]:[1,2,1,2],decorator:jr.focused?g:undefined};}
},"tabview-page/button/close-button":{alias:er,style:function(js){return {icon:gh};}
},"toolbar":{style:function(jt){return {decorator:hg,spacing:2};}
},"toolbar/part":{style:function(ju){return {decorator:eW,spacing:2};}
},"toolbar/part/container":{style:function(jv){return {paddingLeft:2,paddingRight:2};}
},"toolbar/part/handle":{style:function(jw){return {source:gC,marginLeft:3,marginRight:3};}
},"toolbar-button":{alias:er,style:function(jx){var jy;if(jx.pressed||(jx.checked&&!jx.hovered)||(jx.checked&&jx.disabled)){jy=fF;}
else if(jx.hovered&&!jx.disabled){jy=gN;}
;return {marginTop:2,marginBottom:2,padding:(jx.pressed||jx.checked||jx.hovered)&&!jx.disabled||(jx.disabled&&jx.checked)?3:5,decorator:jy};}
},"toolbar-menubutton":{alias:gU,include:gU,style:function(jz){return {showArrow:true};}
},"toolbar-menubutton/arrow":{alias:y,include:y,style:function(jA){return {source:gP};}
},"toolbar-splitbutton":{style:function(jB){return {marginTop:2,marginBottom:2};}
},"toolbar-splitbutton/button":{alias:gU,include:gU,style:function(jC){return {icon:fP,marginTop:undefined,marginBottom:undefined};}
},"toolbar-splitbutton/arrow":{alias:gU,include:gU,style:function(jD){if(jD.pressed||jD.checked||(jD.hovered&&!jD.disabled)){var jE=1;}
else {var jE=3;}
;return {padding:jE,icon:fP,marginTop:undefined,marginBottom:undefined};}
},"toolbar-separator":{style:function(jF){return {decorator:fd,margin:7};}
},"tree":F,"tree-item":{style:function(jG){var jH=jG.selected?gO:undefined;return {padding:[2,6],textColor:jG.selected?gH:undefined,decorator:jH,opacity:jG.drag?0.5:undefined};}
},"tree-item/icon":{include:y,style:function(jI){return {paddingRight:5};}
},"tree-item/label":fs,"tree-item/open":{include:y,style:function(jJ){var jK;if(jJ.selected&&jJ.opened){jK=fH;}
else if(jJ.selected&&!jJ.opened){jK=gv;}
else if(jJ.opened){jK=gA;}
else {jK=L;}
;return {padding:[0,5,0,2],source:jK};}
},"tree-folder":{include:fI,alias:fI,style:function(jL){var jN,jM;if(jL.small){jN=jL.opened?fk:ge;jM=fk;}
else if(jL.large){jN=jL.opened?eD:fg;jM=eD;}
else {jN=jL.opened?gl:eE;jM=gl;}
;return {icon:jN,iconOpened:jM};}
},"tree-file":{include:fI,alias:fI,style:function(jO){return {icon:jO.small?ev:jO.large?gY:gB};}
},"treevirtual":eT,"treevirtual-folder":{style:function(jP){return {icon:jP.opened?fk:ge};}
},"treevirtual-file":{include:ey,alias:ey,style:function(jQ){return {icon:ev};}
},"treevirtual-line":{style:function(jR){return {icon:fj};}
},"treevirtual-contract":{style:function(jS){return {icon:gA,paddingLeft:5,paddingTop:2};}
},"treevirtual-expand":{style:function(jT){return {icon:L,paddingLeft:5,paddingTop:2};}
},"treevirtual-only-contract":hD,"treevirtual-only-expand":ew,"treevirtual-start-contract":hD,"treevirtual-start-expand":ew,"treevirtual-end-contract":hD,"treevirtual-end-expand":ew,"treevirtual-cross-contract":hD,"treevirtual-cross-expand":ew,"treevirtual-end":{style:function(jU){return {icon:fj};}
},"treevirtual-cross":{style:function(jV){return {icon:fj};}
},"tooltip":{include:hE,style:function(jW){return {backgroundColor:Q,padding:[1,3,2,3],offset:[15,5,5,5]};}
},"tooltip/atom":er,"tooltip-error":{style:function(jX){return {placeMethod:eH,offset:[-3,1,0,0],arrowPosition:jX.placementLeft?hz:hp,position:hB,showTimeout:100,hideTimeout:10000,padding:[0,4,4,0]};}
},"tooltip-error/arrow":{include:y,style:function(jY){var ka=jY.placementLeft?hd:eS;return {source:ka,padding:[6,0,0,0],zIndex:10000001};}
},"tooltip-error/atom":{include:hE,style:function(kb){return {textColor:gH,backgroundColor:undefined,decorator:K,font:O,padding:[3,4,4,4],margin:[1,0,0,0],maxWidth:333};}
},"window":{style:function(kc){return {decorator:kc.showStatusbar?gQ:hC,contentPadding:[10,10,10,10],margin:kc.maximized?0:[0,5,5,0]};}
},"window-resize-frame":{style:function(kd){return {decorator:kd.showStatusbar?B:b};}
},"window/pane":{style:function(ke){return {decorator:ha};}
},"window/captionbar":{style:function(kf){return {decorator:(kf.active?eQ:E),textColor:kf.active?fh:eu,minHeight:26,paddingRight:2};}
},"window/icon":{style:function(kg){return {margin:[5,0,3,6]};}
},"window/title":{style:function(kh){return {alignY:fT,font:O,marginLeft:6,marginRight:12};}
},"window/minimize-button":{alias:er,style:function(ki){return {icon:ki.active?ki.hovered?fE:gc:gs,margin:[4,8,2,0]};}
},"window/restore-button":{alias:er,style:function(kj){return {icon:kj.active?kj.hovered?D:gW:gd,margin:[5,8,2,0]};}
},"window/maximize-button":{alias:er,style:function(kk){return {icon:kk.active?kk.hovered?c:eC:gp,margin:[4,8,2,0]};}
},"window/close-button":{alias:er,style:function(kl){return {icon:kl.active?kl.hovered?hy:Y:eY,margin:[4,8,2,0]};}
},"window/statusbar":{style:function(km){return {padding:[2,6],decorator:M,minHeight:18};}
},"window/statusbar-text":{style:function(kn){return {font:fa};}
},"iframe":{style:function(ko){return {decorator:hk};}
},"resizer":{style:function(kp){return {decorator:fq};}
},"splitpane":{style:function(kq){return {decorator:fY};}
},"splitpane/splitter":{style:function(kr){return {width:kr.horizontal?3:undefined,height:kr.vertical?3:undefined,backgroundColor:gq};}
},"splitpane/splitter/knob":{style:function(ks){return {source:ks.horizontal?fi:eX};}
},"splitpane/slider":{style:function(kt){return {width:kt.horizontal?3:undefined,height:kt.vertical?3:undefined,backgroundColor:gq};}
},"selectbox":hj,"selectbox/atom":er,"selectbox/popup":hE,"selectbox/list":{alias:F},"selectbox/arrow":{include:y,style:function(ku){return {source:fP,paddingLeft:5};}
},"datechooser":{style:function(kv){var ky;var kx=!!kv.focused;var kz=!!kv.invalid;var kw=!!kv.disabled;if(kx&&kz&&!kw){ky=fW;}
else if(kx&&!kz&&!kw){ky=fy;}
else if(kw){ky=fA;}
else if(!kx&&kz&&!kw){ky=l;}
else {ky=n;}
;return {padding:2,decorator:ky,backgroundColor:hr};}
},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:hj,alias:hj,style:function(kA){var kB={padding:[2,4]};if(kA.lastYear){kB.icon=hm;kB.marginRight=1;}
else if(kA.lastMonth){kB.icon=fG;}
else if(kA.nextYear){kB.icon=gK;kB.marginLeft=1;}
else if(kA.nextMonth){kB.icon=e;}
;return kB;}
},"datechooser/last-year-button-tooltip":hu,"datechooser/last-month-button-tooltip":hu,"datechooser/next-year-button-tooltip":hu,"datechooser/next-month-button-tooltip":hu,"datechooser/last-year-button":gr,"datechooser/last-month-button":gr,"datechooser/next-month-button":gr,"datechooser/next-year-button":gr,"datechooser/month-year-label":{style:function(kC){return {font:O,textAlign:hh,textColor:kC.disabled?S:undefined};}
},"datechooser/date-pane":{style:function(kD){return {textColor:kD.disabled?S:undefined,marginTop:2};}
},"datechooser/weekday":{style:function(kE){return {textColor:kE.disabled?S:kE.weekend?fO:undefined,textAlign:hh,paddingTop:2,backgroundColor:eI};}
},"datechooser/week":{style:function(kF){return {textAlign:hh,padding:[2,4],backgroundColor:eI};}
},"datechooser/day":{style:function(kG){var kH=kG.disabled?undefined:kG.selected?gO:undefined;return {textAlign:hh,decorator:kH,textColor:kG.disabled?S:kG.selected?gH:kG.otherMonth?fO:undefined,font:kG.today?O:undefined,padding:[2,4]};}
},"combobox":{style:function(kI){var kL;var kK=!!kI.focused;var kM=!!kI.invalid;var kJ=!!kI.disabled;if(kK&&kM&&!kJ){kL=fW;}
else if(kK&&!kM&&!kJ){kL=fy;}
else if(kJ){kL=fA;}
else if(!kK&&kM&&!kJ){kL=l;}
else {kL=n;}
;return {decorator:kL};}
},"combobox/popup":hE,"combobox/list":{alias:F},"combobox/button":{include:hj,alias:hj,style:function(kN,kO){var kP={icon:fP,padding:[kO.padding[0],kO.padding[1]-6],margin:undefined};if(kN.selected){kP.decorator=fS;}
;return kP;}
},"combobox/textfield":{include:ff,style:function(kQ){return {decorator:undefined};}
},"menu":{style:function(kR){var kS={decorator:p,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:kR.submenu||kR.contextmenu?gw:hc};if(kR.submenu){kS.position=hB;kS.offset=[-2,-3];}
;return kS;}
},"menu/slidebar":fM,"menu-slidebar":eH,"menu-slidebar-button":{style:function(kT){var kU=kT.hovered?gO:undefined;return {decorator:kU,padding:7,center:true};}
},"menu-slidebar/button-backward":{include:ht,style:function(kV){return {icon:kV.hovered?gy:hw};}
},"menu-slidebar/button-forward":{include:ht,style:function(kW){return {icon:kW.hovered?eP:fP};}
},"menu-separator":{style:function(kX){return {height:0,decorator:fn,margin:[4,2]};}
},"menu-button":{alias:er,style:function(kY){var la=kY.selected?gO:undefined;return {decorator:la,textColor:kY.selected?gH:undefined,padding:[4,6]};}
},"menu-button/icon":{include:y,style:function(lb){return {alignY:fT};}
},"menu-button/label":{include:fs,style:function(lc){return {alignY:fT,padding:1};}
},"menu-button/shortcut":{include:fs,style:function(ld){return {alignY:fT,marginLeft:14,padding:1};}
},"menu-button/arrow":{include:y,style:function(le){return {source:le.selected?fp:e,alignY:fT};}
},"menu-checkbox":{alias:fR,include:fR,style:function(lf){return {icon:!lf.checked?undefined:lf.selected?eV:eM};}
},"menu-radiobutton":{alias:fR,include:fR,style:function(lg){return {icon:!lg.checked?undefined:lg.selected?es:gR};}
},"menubar":{style:function(lh){return {decorator:fw};}
},"menubar-button":{alias:er,style:function(li){var lj=(li.pressed||li.hovered)&&!li.disabled?gO:undefined;return {decorator:lj,textColor:li.pressed||li.hovered?gH:undefined,padding:[3,8]};}
},"colorselector":eH,"colorselector/control-bar":eH,"colorselector/control-pane":eH,"colorselector/visual-pane":fC,"colorselector/preset-grid":eH,"colorselector/colorbucket":{style:function(lk){return {decorator:hk,width:16,height:16};}
},"colorselector/preset-field-set":fC,"colorselector/input-field-set":{include:fC,alias:fC,style:function(){return {paddingTop:20};}
},"colorselector/preview-field-set":{include:fC,alias:fC,style:function(){return {paddingTop:20};}
},"colorselector/hex-field-composite":eH,"colorselector/hex-field":ff,"colorselector/rgb-spinner-composite":eH,"colorselector/rgb-spinner-red":fv,"colorselector/rgb-spinner-green":fv,"colorselector/rgb-spinner-blue":fv,"colorselector/hsb-spinner-composite":eH,"colorselector/hsb-spinner-hue":fv,"colorselector/hsb-spinner-saturation":fv,"colorselector/hsb-spinner-brightness":fv,"colorselector/preview-content-old":{style:function(ll){return {decorator:hk,width:50,height:10};}
},"colorselector/preview-content-new":{style:function(lm){return {decorator:hk,backgroundColor:hr,width:50,height:10};}
},"colorselector/hue-saturation-field":{style:function(ln){return {decorator:hk,margin:5};}
},"colorselector/brightness-field":{style:function(lo){return {decorator:hk,margin:[5,7]};}
},"colorselector/hue-saturation-pane":eH,"colorselector/hue-saturation-handle":eH,"colorselector/brightness-pane":eH,"colorselector/brightness-handle":eH,"colorpopup":{alias:hE,include:hE,style:function(lp){return {padding:5,backgroundColor:f};}
},"colorpopup/field":{style:function(lq){return {decorator:hk,margin:2,width:14,height:14,backgroundColor:hr};}
},"colorpopup/selector-button":gL,"colorpopup/auto-button":gL,"colorpopup/preview-pane":fC,"colorpopup/current-preview":{style:function(lr){return {height:20,padding:4,marginLeft:4,decorator:hk,allowGrowX:true};}
},"colorpopup/selected-preview":{style:function(ls){return {height:20,padding:4,marginRight:4,decorator:hk,allowGrowX:true};}
},"colorpopup/colorselector-okbutton":{alias:gL,include:gL,style:function(lt){return {icon:k};}
},"colorpopup/colorselector-cancelbutton":{alias:gL,include:gL,style:function(lu){return {icon:fJ};}
},"table":{alias:eH,style:function(lv){return {decorator:eT};}
},"table/statusbar":{style:function(lw){return {decorator:eR,padding:[0,2]};}
},"table/column-button":{alias:hj,style:function(lx){return {decorator:T,padding:3,icon:eJ};}
},"table-column-reset-button":{include:fR,alias:fR,style:function(){return {icon:fl};}
},"table-scroller":eH,"table-scroller/scrollbar-x":gk,"table-scroller/scrollbar-y":gk,"table-scroller/header":{style:function(ly){return {decorator:T,textColor:ly.disabled?S:undefined};}
},"table-scroller/pane":{style:function(lz){return {backgroundColor:X};}
},"table-scroller/focus-indicator":{style:function(lA){return {decorator:q};}
},"table-scroller/resize-line":{style:function(lB){return {backgroundColor:go,width:2};}
},"table-header-cell":{alias:er,style:function(lC){return {minWidth:13,minHeight:20,padding:lC.hovered?[3,4,2,4]:[3,4],decorator:lC.hovered?ex:u,sortIcon:lC.sorted?(lC.sortedAscending?hv:gJ):undefined};}
},"table-header-cell/label":{style:function(lD){return {minWidth:0,alignY:fT,paddingRight:5};}
},"table-header-cell/sort-icon":{style:function(lE){return {alignY:fT,alignX:hp,opacity:lE.disabled?0.3:1};}
},"table-header-cell/icon":{style:function(lF){return {minWidth:0,alignY:fT,paddingRight:5,opacity:lF.disabled?0.3:1};}
},"table-editor-textfield":{include:ff,style:function(lG){return {decorator:undefined,padding:[2,2],backgroundColor:hr};}
},"table-editor-selectbox":{include:hs,alias:hs,style:function(lH){return {padding:[0,2],backgroundColor:hr};}
},"table-editor-combobox":{include:gf,alias:gf,style:function(lI){return {decorator:undefined,backgroundColor:hr};}
},"progressive-table-header":{alias:eH,style:function(lJ){return {decorator:gS};}
},"progressive-table-header-cell":{alias:er,style:function(lK){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:fo};}
},"app-header":{style:function(lL){return {font:O,textColor:gH,padding:[8,12],decorator:v};}
},"app-header-label":fs,"app-splitpane":{alias:fY,style:function(lM){return {padding:0};}
},"virtual-list":F,"virtual-list/row-layer":w,"row-layer":eH,"group-item":{include:fs,alias:fs,style:function(lN){return {padding:4,decorator:h,textColor:eF,font:O};}
},"virtual-selectbox":hs,"virtual-selectbox/dropdown":hE,"virtual-selectbox/dropdown/list":{alias:fB},"virtual-combobox":gf,"virtual-combobox/dropdown":hE,"virtual-combobox/dropdown/list":{alias:fB},"virtual-tree":{include:fV,alias:fV,style:function(lO){return {itemHeight:26};}
},"virtual-tree-folder":H,"virtual-tree-file":he,"column-layer":eH,"cell":{style:function(lP){return {textColor:lP.selected?gH:G,padding:[3,6],font:gz};}
},"cell-string":gG,"cell-number":{include:gG,style:function(lQ){return {textAlign:hp};}
},"cell-image":gG,"cell-boolean":{include:gG,style:function(lR){return {iconTrue:t,iconFalse:gT};}
},"cell-atom":gG,"cell-date":gG,"cell-html":gG,"progressbar":{style:function(lS){return {decorator:ft,padding:[1],backgroundColor:eB,width:200,height:20};}
},"progressbar/progress":{style:function(lT){return {decorator:(lT.disabled?h:gO)};}
}}});}
)();
(function(){var a="button-checked-focused",b="window-resize-frame",c="checkbox-disabled-border",d="group-background",e="menu-end",f="keyboard-focus",g="button-disabled-start",h="selected-end",i="table-header-hovered",j="border-invalid",k="decoration/toolbar/toolbar-part.gif",l="border-separator",m="window-border-caption",n="radiobutton-hovered",o="button-hovered-end",p="border-input",q="radiobutton",r="repeat-y",s="border-dragover",t="border-inner-input",u="radiobutton-checked-focused",v="groupitem-end",w="group-border",x="input-start",y="button-hovered-start",z="tooltip-error",A="button-hovered",B="selected-start",C="progressive-table-header-border-right",D="button-border-disabled",E="scrollbar-slider-horizontal",F="button-pressed",G="window-statusbar-background",H="tabview-end",I="radiobutton-hovered-invalid",J="checkbox-hovered",K="radiobutton-background",L="window-captionbar-active",M="checkbox-hovered-inner",N="toolbar-button-hovered",O="window-caption-active-end",P="solid",Q="button-start",R="dotted",S="radiobutton-disabled",T="radiobutton-checked",U="checkbox-disabled-end",V="window-caption-active-start",W="window-border",X="button-focused",Y="input",cv="tabview-inactive",cw="qx/decoration/Modern",cx="border-toolbar-separator-left",cr="invalid",cs="button-disabled",ct="horizontal",cu="table-header-start",cC="background-splitpane",cD="button-end",cE="button-checked",cF="border-toolbar-border-inner",cy="px",cz="input-border-disabled",cA="scrollbar-slider-vertical",cB="checkbox-inner",cJ="button",dk="button-disabled-end",dI="toolbar-end",cK="groupitem-start",cG="menu-start",cH="input-focused-start",dD="scrollbar-start",cI="scrollbar-slider-start",cL="radiobutton-checked-disabled",cM="checkbox-focused",cN="border-toolbar-button-outer",cS="background-light",cT="qx.theme.modern.Decoration",cU="checkbox-hovered-invalid",cO="radiobutton-checked-hovered",cP="tabview-page-button-top-inactive",cQ="#243B58",cR="checkbox",cY="checkbox-focus",da="window",dF="checkbox-disabled-inner",db="border-toolbar-separator-right",cV="tabview-inactive-start",cW="scrollbar-end",dE="table-header-end",cX="tabview-background",df="checkbox-end",dg="border-button",dH="tabview-inactive-end",dh="input-end",dc="tabview-page-button-top-active",dd="input-focused-inner-invalid",dG="menu-separator-top",de="shadow",di="window-caption-inactive-start",dj="scrollbar-slider-end",dw="background-pane",dv="pane-end",du="input-focused-end",dA="menubar-start",dz="toolbar-start",dy="radiobutton-focused",dx="pane-start",dp="table-focus-indicator",dn="menu-separator-bottom",dm="#1D2D45",dl="border-main",dt="scrollbar-horizontal",ds="window-caption-inactive-end",dr="checkbox-border",dq="tabview-start",dC="checkbox-hovered-inner-invalid",dB="input-focused";qx.Theme.define(cT,{aliases:{decoration:cw},decorations:{"main":{style:{width:1,color:dl}},"selected":{style:{startColorPosition:0,endColorPosition:100,startColor:B,endColor:h}},"dragover":{style:{bottom:[2,P,s]}},"pane":{style:{width:1,color:cX,radius:3,shadowColor:de,shadowBlurRadius:2,shadowLength:0,gradientStart:[dx,0],gradientEnd:[dv,100]}},"group":{style:{backgroundColor:d,radius:4,color:w,width:1}},"keyboard-focus":{style:{width:1,color:f,style:R}},"radiobutton":{style:{backgroundColor:K,radius:5,width:1,innerWidth:2,color:dr,innerColor:K,shadowLength:0,shadowBlurRadius:0,shadowColor:cY}},"radiobutton-checked":{include:q,style:{backgroundColor:T}},"radiobutton-checked-focused":{include:T,style:{shadowBlurRadius:4}},"radiobutton-checked-hovered":{include:T,style:{innerColor:J}},"radiobutton-focused":{include:q,style:{shadowBlurRadius:4}},"radiobutton-hovered":{include:q,style:{backgroundColor:J,innerColor:J}},"radiobutton-disabled":{include:q,style:{innerColor:S,backgroundColor:S,color:c}},"radiobutton-checked-disabled":{include:S,style:{backgroundColor:cL}},"radiobutton-invalid":{include:q,style:{color:cr}},"radiobutton-checked-invalid":{include:T,style:{color:cr}},"radiobutton-checked-focused-invalid":{include:u,style:{color:cr,shadowColor:cr}},"radiobutton-checked-hovered-invalid":{include:cO,style:{color:cr,innerColor:I}},"radiobutton-focused-invalid":{include:dy,style:{color:cr,shadowColor:cr}},"radiobutton-hovered-invalid":{include:n,style:{color:cr,innerColor:I,backgroundColor:I}},"separator-horizontal":{style:{widthLeft:1,colorLeft:l}},"separator-vertical":{style:{widthTop:1,colorTop:l}},"tooltip-error":{style:{backgroundColor:z,radius:4,shadowColor:de,shadowBlurRadius:2,shadowLength:1}},"popup":{style:{width:1,color:dl,shadowColor:de,shadowBlurRadius:3,shadowLength:1}},"scrollbar-horizontal":{style:{gradientStart:[dD,0],gradientEnd:[cW,100]}},"scrollbar-vertical":{include:dt,style:{orientation:ct}},"scrollbar-slider-horizontal":{style:{gradientStart:[cI,0],gradientEnd:[dj,100],color:dl,width:1,radius:3}},"scrollbar-slider-vertical":{include:E,style:{orientation:ct}},"scrollbar-slider-horizontal-disabled":{include:E,style:{color:D}},"scrollbar-slider-vertical-disabled":{include:cA,style:{color:D}},"button":{style:{radius:3,color:dg,width:1,startColor:Q,endColor:cD,startColorPosition:35,endColorPosition:100}},"button-disabled":{include:cJ,style:{color:D,startColor:g,endColor:dk}},"button-hovered":{include:cJ,style:{startColor:y,endColor:o}},"button-checked":{include:cJ,style:{endColor:Q,startColor:cD}},"button-pressed":{include:cJ,style:{endColor:y,startColor:o}},"button-focused":{style:{radius:3,color:dg,width:1,innerColor:X,innerWidth:2,startColor:Q,endColor:cD,startColorPosition:30,endColorPosition:100}},"button-checked-focused":{include:X,style:{endColor:Q,startColor:cD}},"button-invalid":{include:cJ,style:{color:j}},"button-disabled-invalid":{include:cs,style:{color:j}},"button-hovered-invalid":{include:A,style:{color:j}},"button-checked-invalid":{include:cE,style:{color:j}},"button-pressed-invalid":{include:F,style:{color:j}},"button-focused-invalid":{include:X,style:{color:j}},"button-checked-focused-invalid":{include:a,style:{color:j}},"checkbox":{style:{width:1,color:dr,innerWidth:1,innerColor:cB,backgroundColor:df,shadowLength:0,shadowBlurRadius:0,shadowColor:cY}},"checkbox-hovered":{include:cR,style:{innerColor:M,backgroundColor:J}},"checkbox-focused":{include:cR,style:{shadowBlurRadius:4}},"checkbox-disabled":{include:cR,style:{color:c,innerColor:dF,backgroundColor:U}},"checkbox-invalid":{include:cR,style:{color:cr}},"checkbox-hovered-invalid":{include:J,style:{color:cr,innerColor:dC,backgroundColor:cU}},"checkbox-focused-invalid":{include:cM,style:{color:cr,shadowColor:cr}},"input":{style:{color:p,innerColor:t,innerWidth:1,width:1,backgroundColor:cS,startColor:x,endColor:dh,startColorPosition:0,endColorPosition:12,colorPositionUnit:cy}},"border-invalid":{include:Y,style:{color:j}},"input-focused":{include:Y,style:{startColor:cH,innerColor:du,endColorPosition:4}},"input-focused-invalid":{include:dB,style:{innerColor:dd,color:j}},"input-disabled":{include:Y,style:{color:cz}},"toolbar":{style:{startColorPosition:40,endColorPosition:60,startColor:dz,endColor:dI}},"toolbar-button-hovered":{style:{color:cN,width:1,innerWidth:1,innerColor:cF,radius:2,gradientStart:[Q,30],gradientEnd:[cD,100]}},"toolbar-button-checked":{include:N,style:{gradientStart:[cD,30],gradientEnd:[Q,100]}},"toolbar-separator":{style:{widthLeft:1,widthRight:1,colorLeft:cx,colorRight:db,styleLeft:P,styleRight:P}},"toolbar-part":{style:{backgroundImage:k,backgroundRepeat:r}},"tabview-pane":{style:{width:1,color:W,radius:3,gradientStart:[dq,90],gradientEnd:[H,100]}},"tabview-page-button-top-active":{style:{radius:[3,3,0,0],width:[1,1,0,1],color:cX,backgroundColor:dq,shadowLength:1,shadowColor:de,shadowBlurRadius:2}},"tabview-page-button-top-inactive":{style:{radius:[3,3,0,0],color:cv,colorBottom:cX,width:1,gradientStart:[cV,0],gradientEnd:[dH,100]}},"tabview-page-button-bottom-active":{include:dc,style:{radius:[0,0,3,3],width:[0,1,1,1],backgroundColor:cV,shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-bottom-inactive":{include:cP,style:{radius:[0,0,3,3],width:[0,1,1,1],colorBottom:cv,colorTop:cX}},"tabview-page-button-left-active":{include:dc,style:{radius:[3,0,0,3],width:[1,0,1,1],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-left-inactive":{include:cP,style:{radius:[3,0,0,3],width:[1,0,1,1],colorBottom:cv,colorRight:cX}},"tabview-page-button-right-active":{include:dc,style:{radius:[0,3,3,0],width:[1,1,1,0],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-right-inactive":{include:cP,style:{radius:[0,3,3,0],width:[1,1,1,0],colorBottom:cv,colorLeft:cX}},"splitpane":{style:{backgroundColor:dw,width:3,color:cC,style:P}},"window":{style:{radius:[5,5,0,0],shadowBlurRadius:4,shadowLength:2,shadowColor:de}},"window-incl-statusbar":{include:da,style:{radius:[5,5,5,5]}},"window-resize-frame":{style:{radius:[5,5,0,0],width:1,color:dl}},"window-resize-frame-incl-statusbar":{include:b,style:{radius:[5,5,5,5]}},"window-captionbar-active":{style:{width:1,color:W,colorBottom:m,radius:[5,5,0,0],gradientStart:[V,30],gradientEnd:[O,70]}},"window-captionbar-inactive":{include:L,style:{gradientStart:[di,30],gradientEnd:[ds,70]}},"window-statusbar":{style:{backgroundColor:G,width:[0,1,1,1],color:W,radius:[0,0,5,5]}},"window-pane":{style:{backgroundColor:dw,width:1,color:W,widthTop:0}},"table":{style:{width:1,color:dl,style:P}},"table-statusbar":{style:{widthTop:1,colorTop:dl,style:P}},"table-scroller-header":{style:{gradientStart:[cu,10],gradientEnd:[dE,90],widthBottom:1,colorBottom:dl}},"table-header-cell":{style:{widthRight:1,colorRight:l,styleRight:P}},"table-header-cell-hovered":{style:{widthRight:1,colorRight:l,styleRight:P,widthBottom:1,colorBottom:i,styleBottom:P}},"table-scroller-focus-indicator":{style:{width:2,color:dp,style:P}},"progressive-table-header":{style:{width:1,color:dl,style:P}},"progressive-table-header-cell":{style:{gradientStart:[cu,10],gradientEnd:[dE,90],widthRight:1,colorRight:C}},"menu":{style:{gradientStart:[cG,0],gradientEnd:[e,100],shadowColor:de,shadowBlurRadius:2,shadowLength:1,width:1,color:dl}},"menu-separator":{style:{widthTop:1,colorTop:dG,widthBottom:1,colorBottom:dn}},"menubar":{style:{gradientStart:[dA,0],gradientEnd:[e,100],width:1,color:l}},"app-header":{style:{gradientStart:[cQ,0],gradientEnd:[dm,100]}},"progressbar":{style:{width:1,color:p}},"group-item":{style:{startColorPosition:0,endColorPosition:100,startColor:cK,endColor:v}}}});}
)();
(function(){var a="black",b="#EEEEEE",c="#1a1a1a",d="#ffffdd",e="#b6b6b6",f="#004DAD",g="#BABABA",h="#005BC3",i="#334866",j="#00204D",k="#CECECE",l="gray",m="#D9D9D9",n="#D8D8D8",o="#99C3FE",p="#001533",q="#B3B3B3",r="#F4F4F4",s="#D5D5D5",t="#fffefe",u="#C3C3C3",v="#E4E4E4",w="#DDDDDD",x="#FF9999",y="css.rgba",z="#E8E8E9",A="#084FAA",B="#AFAFAF",C="white",D="#C5C5C5",E="rgba(0, 0, 0, 0.4)",F="#DBDBDB",G="#4a4a4a",H="#83BAEA",I="#D7E7F4",J="#07125A",K="#084FAB",L="#FAF2F2",M="#87AFE7",N="#F7EAEA",O="#777D8D",P="#FBFBFB",Q="#CACACA",R="#909090",S="#9B9B9B",T="#F0F9FE",U="#314a6e",V="#B4B4B4",W="#787878",X="qx.theme.modern.Color",Y="#000000",cb="#26364D",cc="#A7A7A7",cd="#D1E4FF",bW="#5CB0FD",bX="#FCFCFC",bY="#EAEAEA",ca="#003B91",ci="#80B4EF",cj="#FF6B78",ck="#949494",cl="#808080",ce="#F3F3F3",cf="#930000",cg="#7B7B7B",ch="#F0F0F0",cp="#C82C2C",cM="#DFDFDF",cN="#B6B6B6",cq="#0880EF",cm="#4d4d4d",cn="#f4f4f4",cP="#7B7A7E",co="#D0D0D0",cr="#f8f8f8",cs="#404955",ct="#959595",cx="#AAAAAA",cQ="#F7E9E9",cy="#314A6E",cu="#C72B2B",cv="#FAFAFA",cO="#FBFCFB",cw="#B2D2FF",cC="#666666",cD="#CBC8CD",cE="#999999",cF="#8EB8D6",cz="#b8b8b8",cA="#727272",cR="#33508D",cB="#E8E8E8",cJ="#CCCCCC",cK="#CCC",cS="#EFEFEF",cL="#F2F2F2",cG="#F1F1F1",cH="#990000",cI="#00368A";qx.Theme.define(X,{colors:{"background-application":cM,"background-pane":ce,"background-light":bX,"background-medium":b,"background-splitpane":B,"background-tip":d,"background-tip-error":cu,"background-odd":v,"progressbar-background":C,"text-light":R,"text-gray":G,"text-label":c,"text-title":U,"text-input":Y,"text-hovered":p,"text-disabled":cP,"text-selected":t,"text-active":cb,"text-inactive":cs,"text-placeholder":cD,"border-inner-scrollbar":C,"border-main":cm,"menu-separator-top":D,"menu-separator-bottom":cv,"border-separator":cl,"border-toolbar-button-outer":e,"border-toolbar-border-inner":cr,"border-toolbar-separator-right":cn,"border-toolbar-separator-left":cz,"border-input":i,"border-inner-input":C,"border-disabled":cN,"border-pane":j,"border-button":cC,"border-column":cJ,"border-focused":o,"invalid":cH,"border-focused-invalid":x,"border-dragover":cR,"keyboard-focus":a,"table-pane":ce,"table-focus-indicator":cq,"table-row-background-focused-selected":K,"table-row-background-focused":ci,"table-row-background-selected":K,"table-row-background-even":ce,"table-row-background-odd":v,"table-row-selected":t,"table-row":c,"table-row-line":cK,"table-column-line":cK,"table-header-hovered":C,"progressive-table-header":cx,"progressive-table-header-border-right":cL,"progressive-table-row-background-even":r,"progressive-table-row-background-odd":v,"progressive-progressbar-background":l,"progressive-progressbar-indicator-done":cJ,"progressive-progressbar-indicator-undone":C,"progressive-progressbar-percent-background":l,"progressive-progressbar-percent-text":C,"selected-start":f,"selected-end":cI,"background-selected":cI,"tabview-background":J,"shadow":qx.core.Environment.get(y)?E:cE,"pane-start":P,"pane-end":ch,"group-background":cB,"group-border":V,"radiobutton-background":cS,"checkbox-border":cy,"checkbox-focus":M,"checkbox-hovered":cw,"checkbox-hovered-inner":cd,"checkbox-inner":b,"checkbox-start":v,"checkbox-end":ce,"checkbox-disabled-border":W,"checkbox-disabled-inner":Q,"checkbox-disabled-start":co,"checkbox-disabled-end":n,"checkbox-hovered-inner-invalid":L,"checkbox-hovered-invalid":cQ,"radiobutton-checked":h,"radiobutton-disabled":s,"radiobutton-checked-disabled":cg,"radiobutton-hovered-invalid":N,"tooltip-error":cp,"scrollbar-start":cJ,"scrollbar-end":cG,"scrollbar-slider-start":b,"scrollbar-slider-end":u,"button-border-disabled":ct,"button-start":ch,"button-end":B,"button-disabled-start":r,"button-disabled-end":g,"button-hovered-start":T,"button-hovered-end":cF,"button-focused":H,"border-invalid":cf,"input-start":ch,"input-end":cO,"input-focused-start":I,"input-focused-end":bW,"input-focused-inner-invalid":cj,"input-border-disabled":S,"input-border-inner":C,"toolbar-start":cS,"toolbar-end":w,"window-border":j,"window-border-caption":cA,"window-caption-active-text":C,"window-caption-active-start":A,"window-caption-active-end":ca,"window-caption-inactive-start":cL,"window-caption-inactive-end":F,"window-statusbar-background":cS,"tabview-start":bX,"tabview-end":b,"tabview-inactive":O,"tabview-inactive-start":bY,"tabview-inactive-end":k,"table-header-start":cB,"table-header-end":q,"menu-start":z,"menu-end":m,"menubar-start":cB,"groupitem-start":cc,"groupitem-end":ck,"groupitem-text":C,"virtual-row-layer-background-even":C,"virtual-row-layer-background-odd":C}});}
)();
(function(){var a="Liberation Sans",b="Tahoma",c="os.name",d="sans-serif",e="monospace",f="win",g="Arial",h="Lucida Grande",i="osx",j="Courier New",k="os.version",l="Lucida Console",m="7",n="Monaco",o="Candara",p="Segoe UI",q="Consolas",r="vista",s="qx.theme.modern.Font",t="DejaVu Sans Mono";qx.Theme.define(s,{fonts:{"default":{size:(qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r))?12:11,lineHeight:1.4,family:qx.core.Environment.get(c)==i?[h]:((qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r)))?[p,o]:[b,a,g,d]},"bold":{size:(qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r))?12:11,lineHeight:1.4,family:qx.core.Environment.get(c)==i?[h]:((qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r)))?[p,o]:[b,a,g,d],bold:true},"small":{size:(qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r))?11:10,lineHeight:1.4,family:qx.core.Environment.get(c)==i?[h]:((qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r)))?[p,o]:[b,a,g,d]},"monospace":{size:11,lineHeight:1.4,family:qx.core.Environment.get(c)==i?[l,n]:((qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r)))?[q]:[q,t,j,e]}}});}
)();
(function(){var a="qx.theme.Modern",b="Modern";qx.Theme.define(a,{title:b,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});}
)();
(function(){var a="black",b="border-focused-light",c="border-dark",d="solid",e="dotted",f="effect",g="border-separator",h="border-focused-dark",i="tooltip-text",j="border-focused-light-shadow",k="table-header-border",l="table-focus-indicator",m="outset",n="border-focused-dark-shadow",o="qx/decoration/Classic",p="border-lead",q="border-dark-shadow",r="#FFF",s="main",t="invalid",u="shadow",v="border-light-shadow",w="qx.theme.classic.Decoration",x="white",y="gray",z="border-light";qx.Theme.define(w,{aliases:{decoration:o},decorations:{"main":{style:{width:1,color:c}},"keyboard-focus":{style:{width:1,color:a,style:e}},"inset":{style:{width:1,innerWidth:1,color:[q,z,z,q],innerColor:[c,v,v,c]}},"outset":{style:{width:1,innerWidth:1,color:[v,c,c,v],innerColor:[z,q,q,z]}},"groove":{style:{width:1,innerWidth:1,color:[q,z,z,q],innerColor:[z,q,q,z]}},"ridge":{style:{width:1,innerWidth:1,color:[z,q,q,z],innerColor:[q,z,z,q]}},"inset-thin":{style:{width:1,color:[q,z,z,q]}},"outset-thin":{style:{width:1,color:[z,q,q,z]}},"focused-inset":{style:{width:1,innerWidth:1,color:[n,b,b,n],innerColor:[h,j,j,h]}},"focused-outset":{style:{width:1,innerWidth:1,color:[j,h,h,j],innerColor:[b,n,n,b]}},"border-invalid":{style:{width:1,innerWidth:1,color:[q,z,z,q],innerColor:t}},"separator-horizontal":{style:{widthLeft:1,colorLeft:g}},"separator-vertical":{style:{widthTop:1,colorTop:g}},"window":{include:m,style:{shadowLength:1,shadowBlurRadius:2,shadowColor:u}},"lead-item":{style:{width:1,style:e,color:p}},"tooltip":{style:{width:1,color:i,shadowLength:1,shadowBlurRadius:5,shadowColor:u}},"tooltip-error":{style:{width:1,color:i,shadowLength:1,shadowBlurRadius:5,shadowColor:u}},"popup":{include:s,style:{shadowLength:2,shadowBlurRadius:2,shadowColor:u}},"toolbar-separator":{style:{widthLeft:1,colorLeft:q}},"toolbar-part-handle":{style:{width:1,style:d,colorTop:x,colorLeft:x,colorRight:q,colorBottom:q}},"menu":{include:m,style:{shadowLength:1,shadowBlurRadius:3,shadowColor:u}},"menu-separator":{style:{widthTop:1,widthBottom:1,colorTop:c,colorBottom:z}},"datechooser-date-pane":{style:{widthTop:1,colorTop:y,style:d}},"datechooser-weekday":{style:{widthBottom:1,colorBottom:y,style:d}},"datechooser-week":{style:{widthRight:1,colorRight:y,style:d}},"datechooser-week-header":{style:{widthBottom:1,colorBottom:y,widthRight:1,colorRight:y,style:d}},"tabview-page-button-top":{style:{width:1,color:[v,c,c,v],innerWidth:1,innerColor:[z,q,q,z],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{style:{width:1,color:[v,c,c,v],innerWidth:1,innerColor:[z,q,q,z],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{style:{width:1,color:[v,c,c,v],innerWidth:1,innerColor:[z,q,q,z],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{style:{width:1,color:[v,c,c,v],innerWidth:1,innerColor:[z,q,q,z],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{style:{widthTop:1,colorTop:q,styleTop:d}},"table-scroller-header":{style:{widthBottom:1,colorBottom:k,styleBottom:d}},"table-scroller-focus-indicator":{style:{width:2,color:l,style:d}},"table-header-cell":{style:{widthRight:1,colorRight:k,styleRight:d}},"table-header-cell-hovered":{style:{widthRight:1,colorRight:k,styleRight:d,widthBottom:2,colorBottom:f,styleBottom:d}},"progressbar":{style:{backgroundColor:r,width:1,color:g}}}});}
)();
(function(){var a="table-row-background-even",b="decoration/treevirtual/cross_minus.gif",c="radiobutton-hovered",d="menu-slidebar-button",e="keyboard-focus",f="decoration/treevirtual/start_plus.gif",g="background-disabled",h="background",i="scrollbar/button",j="date-chooser-title",k="decoration/cursors/",l="icon/16/actions/dialog-ok.png",m="combobox/button",n="slidebar",o="menu",p="table-scroller-focus-indicator",q="move-frame",r="nodrop",s="date-chooser-selected",t="tabview-page-button-left",u="decoration/arrows/up-small.gif",v="image",w="radiobutton",x="move",y="radiobutton-checked-focused",z="list",A="decoration/arrows/right.gif",B="qx.theme.classic.Appearance",C="decoration/menu/checkbox.gif",D="tooltip-error",E="decoration/arrows/up.gif",F="default",G="button-hovered",H="bold",I="resize-frame",J="decoration/arrows/rewind.gif",K="text-disabled",L="table-scroller-header",M="table-pane",N="white",O="table-header-cell-hover",P="focused-outset",Q="checkbox-hovered",R="text",S="checkbox",T="virtual-list",U="groupbox",V="icon/16/actions/dialog-cancel.png",W="menu-slidebar",X="border-dark",Y="datechooser-date-pane",eJ="background-pane",eF="decoration/treevirtual/cross_plus.gif",eK="decoration/arrows/down-small.gif",eG="qx/icon/Oxygen/16/actions/window-close.png",eH="menu-button",eE="datechooser-week",eI="icon/16/apps/office-calendar.png",eP="datechooser-weekday",eQ="table-header-border",eW="middle",eR="#BABABA",eL="tree",eM="checkbox-undetermined",eN="window-active-caption-text",eO="window-active-caption",eV="icon",fy="checkbox-checked-focused",eX="splitpane",eY="toolbar-separator",eS="groove",eT="invalid",gz="icon/16/places/folder.png",eU="checkbox-pressed",fa="combobox",fb="tree-folder",fc="cell",fh="slidebar/button-forward",fi="tooltip-invalid",fj="icon/16/mimetypes/text-plain.png",fd="decoration/window/restore.gif",fe="scrollbar",ff="decoration/menu/checkbox-invert.gif",fg="right-top",fn="scrollarea",fo="window-inactive-caption-text",gB="inset-thin",fp="text-selected",fk="table-header-cell",fl="button-checked",gA="best-fit",fm="up.gif",ft="checkbox-undetermined-hovered",fu=".png",gG="keep-align",fv="background-focused",fq="tabview-page-button-right",fr="tabview-page-button-top",gE="tabview-page-button-bottom",fs="inset",fw="row-layer",fx="button",fJ="decoration/menu/radiobutton.gif",fI="decoration/arrows/",fH="decoration/table/descending.png",fN="progressbar",fM="tree-file",fL="tooltip-text",fK="checkbox-checked-hovered",fC="left.gif",fB="center",fA="decoration/arrows/up-invert.gif",fz="datechooser/button",fG="alias",fF="datechooser",fE="toolbar-button",fD="outset",fU="decoration/arrows/right-invert.gif",fT="slidebar/button-backward",fS="button-abandoned",fR="radiobutton-checked-disabled",fY="lead-item",fX="checkbox-focused",fW="selectbox",fV="background-light",fQ="decoration/arrows/down.gif",fP="right",fO="decoration/treevirtual/start_minus.gif",gk="main",gj="spinner",gi="button-frame",go="background-field",gn="radiobutton-checked-hovered",gm="popup",gl="treevirtual-folder",gd="decoration/window/minimize.gif",gc="checkbox-checked",gb="table-header-cell-hovered",ga="down.gif",gh="background-selected",gg="window",gf="decoration/treevirtual/end.gif",ge="decoration/treevirtual/end_minus.gif",gu="window-inactive-caption",gt="decoration/menu/radiobutton-invert.gif",gs="text-placeholder",gr="atom",gy="slider",gx="decoration/table/select-column-order.png",gw="decoration/arrows/next.gif",gv="table-header",gq="decoration/treevirtual/only_minus.gif",gp="datechooser-week-header",ed="widget",ec="decoration/window/maximize.gif",gH="decoration/treevirtual/only_plus.gif",ea="checkbox-checked-pressed",eb="date-chooser",dY="decoration/arrows/down-invert.gif",gF="menu-separator",dW="decoration/splitpane/knob-vertical.png",dX=".gif",dV="decoration/arrows/forward.gif",gC="radiobutton-checked-pressed",dT="table-statusbar",dU="radiobutton-pressed",dS="focused-inset",em="decoration/form/",en="light-background",ek="copy",el="table-row-background-selected",ei="radiobutton-focused",ej="decoration/tree/minus.gif",eh="",dR="decoration/splitpane/knob-horizontal.png",ef="outset-thin",eg="textfield",ee="right.gif",eA="radiobutton-checked",ey="decoration/treevirtual/cross.gif",ez="table-scroller/header",ew="decoration/table/ascending.png",ex="decoration/treevirtual/line.gif",ev="tooltip",eB="label",et="decoration/tree/plus.gif",eu="-invalid",es="decoration/treevirtual/end_plus.gif",gD="checkbox-undetermined-focused",eq="toolbar-part-handle",er="decoration/arrows/left.gif",eo="background-invalid",ep="icon/16/places/folder-open.png",eC="decoration/window/close.gif",eD="icon/16/actions/view-refresh.png";qx.Theme.define(B,{appearances:{"widget":{},"label":{style:function(gI){return {textColor:gI.disabled?K:undefined};}
},"image":{style:function(gJ){return {opacity:!gJ.replacement&&gJ.disabled?0.3:undefined};}
},"atom":{},"atom/label":eB,"atom/icon":v,"root":{style:function(gK){return {backgroundColor:h,textColor:R,font:F};}
},"popup":{style:function(gL){return {decorator:gm,backgroundColor:eJ};}
},"tooltip":{include:gm,style:function(gM){return {backgroundColor:ev,textColor:fL,decorator:ev,padding:[1,3,2,3],offset:[15,5,5,5]};}
},"tooltip/atom":gr,"tooltip-error":{include:ev,style:function(gN){return {textColor:fp,showTimeout:100,hideTimeout:10000,decorator:D,font:H,backgroundColor:fi};}
},"tooltip-error/atom":gr,"iframe":{style:function(gO){return {backgroundColor:N,decorator:fs};}
},"move-frame":{style:function(gP){return {decorator:gk};}
},"resize-frame":q,"dragdrop-cursor":{style:function(gQ){var gR=r;if(gQ.copy){gR=ek;}
else if(gQ.move){gR=x;}
else if(gQ.alias){gR=fG;}
;return {source:k+gR+dX,position:fg,offset:[2,16,2,6]};}
},"button-frame":{alias:gr,style:function(gS){if(gS.pressed||gS.abandoned||gS.checked){var gU=!gS.inner&&gS.focused?dS:fs;var gT=[4,3,2,5];}
else {var gU=!gS.inner&&gS.focused?P:fD;var gT=[3,4];}
;return {backgroundColor:gS.abandoned?fS:gS.hovered?G:gS.checked?fl:fx,decorator:gU,padding:gT};}
},"button":{alias:gi,include:gi,style:function(gV){return {center:true};}
},"hover-button":{alias:gr,include:gr,style:function(gW){return {backgroundColor:gW.hovered?gh:undefined,textColor:gW.hovered?fp:undefined};}
},"menubutton":{include:fx,alias:fx,style:function(gX){return {icon:fQ,iconPosition:fP};}
},"splitbutton":{},"splitbutton/button":fx,"splitbutton/arrow":{alias:fx,include:fx,style:function(gY){return {icon:fQ};}
},"scrollarea/corner":{style:function(){return {backgroundColor:h};}
},"scrollarea":ed,"scrollarea/pane":ed,"scrollarea/scrollbar-x":fe,"scrollarea/scrollbar-y":fe,"list":{alias:fn,style:function(ha){var hd;var hc=!!ha.focused;var he=!!ha.invalid;var hb=!!ha.disabled;if(he&&!hb){hd=eo;}
else if(hc&&!he&&!hb){hd=fv;}
else if(hb){hd=g;}
else {hd=N;}
;return {decorator:ha.focused?dS:fs,backgroundColor:hd};}
},"listitem":{alias:gr,style:function(hf){return {gap:4,padding:hf.lead?[2,4]:[3,5],backgroundColor:hf.selected?gh:undefined,textColor:hf.selected?fp:undefined,decorator:hf.lead?fY:undefined,opacity:hf.drag?0.5:undefined};}
},"form-renderer-label":{include:eB,style:function(){return {paddingTop:4};}
},"textfield":{style:function(hg){var hk;var hj=!!hg.focused;var hh=!!hg.invalid;var hi=!!hg.disabled;if(hh&&!hi){hk=eo;}
else if(hj&&!hh&&!hi){hk=fv;}
else if(hi){hk=g;}
else {hk=go;}
;var hl;if(hg.disabled){hl=K;}
else if(hg.showingPlaceholder){hl=gs;}
else {hl=undefined;}
;return {decorator:hg.focused?dS:fs,padding:[2,3],textColor:hl,backgroundColor:hk};}
},"textarea":eg,"checkbox":{alias:gr,style:function(hm){var ho;if(hm.checked){if(hm.disabled){ho=gc;}
else if(hm.focused){ho=fy;}
else if(hm.pressed){ho=ea;}
else if(hm.hovered){ho=fK;}
else {ho=gc;}
;}
else if(hm.undetermined){if(hm.disabled){ho=eM;}
else if(hm.focused){ho=gD;}
else if(hm.hovered){ho=ft;}
else {ho=eM;}
;}
else if(!hm.disabled){if(hm.focused){ho=fX;}
else if(hm.pressed){ho=eU;}
else if(hm.hovered){ho=Q;}
;}
;ho=ho||S;var hn=hm.invalid&&!hm.disabled?eu:eh;return {icon:em+ho+hn+fu,gap:6};}
},"radiobutton":{alias:S,include:S,style:function(hp){var hr;if(hp.checked&&hp.focused){hr=y;}
else if(hp.checked&&hp.disabled){hr=fR;}
else if(hp.checked&&hp.pressed){hr=gC;}
else if(hp.checked&&hp.hovered){hr=gn;}
else if(hp.checked){hr=eA;}
else if(hp.focused){hr=ei;}
else if(hp.pressed){hr=dU;}
else if(hp.hovered){hr=c;}
else {hr=w;}
;var hq=hp.invalid&&!hp.disabled?eu:eh;return {icon:em+hr+hq+fu};}
},"spinner":{style:function(hs){return {decorator:hs.focused?dS:fs,textColor:hs.disabled?K:undefined};}
},"spinner/textfield":{include:eg,style:function(ht){return {decorator:undefined,padding:[2,3]};}
},"spinner/upbutton":{alias:fx,include:fx,style:function(hu){return {icon:u,padding:hu.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:hu.hovered?G:fx};}
},"spinner/downbutton":{alias:fx,include:fx,style:function(hv){return {icon:eK,padding:hv.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:hv.hovered?G:fx};}
},"datefield":fa,"datefield/button":{alias:m,include:m,style:function(hw){return {icon:eI,padding:[0,3],backgroundColor:undefined,decorator:undefined};}
},"datefield/list":{alias:fF,include:fF,style:function(hx){return {decorator:hx.focused?dS:fs};}
},"groupbox":{style:function(hy){return {backgroundColor:h};}
},"groupbox/legend":{alias:gr,style:function(hz){return {backgroundColor:h,textColor:hz.invalid?eT:undefined,padding:[1,0,1,4]};}
},"groupbox/frame":{style:function(hA){return {padding:[12,9],marginTop:10,decorator:eS};}
},"check-groupbox":U,"check-groupbox/legend":{alias:S,include:S,style:function(hB){return {backgroundColor:h,textColor:hB.invalid?eT:undefined,padding:[1,0,1,4]};}
},"radio-groupbox":U,"radio-groupbox/legend":{alias:w,include:w,style:function(hC){return {backgroundColor:h,textColor:hC.invalid?eT:undefined,padding:[1,0,1,4]};}
},"toolbar":{style:function(hD){return {backgroundColor:h};}
},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(hE){return {decorator:eq,backgroundColor:h,padding:[0,1],margin:[3,2],allowGrowY:true};}
},"toolbar-separator":{style:function(hF){return {margin:[3,2],decorator:eY};}
},"toolbar-button":{alias:gr,style:function(hG){if(hG.pressed||hG.checked||hG.abandoned){var hI=gB;var hH=[3,2,1,4];}
else if(hG.hovered&&!hG.disabled){var hI=ef;var hH=[2,3];}
else {var hI=undefined;var hH=[3,4];}
;return {cursor:F,decorator:hI,padding:hH,backgroundColor:hG.abandoned?fS:hG.checked?fV:fx};}
},"toolbar-menubutton":{alias:fE,include:fE,style:function(hJ){return {showArrow:true};}
},"toolbar-menubutton/arrow":{alias:v,include:v,style:function(hK){return {source:eK};}
},"toolbar-splitbutton":{},"toolbar-splitbutton/button":fE,"toolbar-splitbutton/arrow":{alias:fE,include:fE,style:function(hL){return {icon:fQ};}
},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:fx,include:fx,style:function(hM){return {icon:hM.vertical?fQ:gw};}
},"slidebar/button-backward":{alias:fx,include:fx,style:function(hN){return {icon:hN.vertical?E:er};}
},"tabview":{},"tabview/bar":{alias:n,style:function(hO){var hP=0,hS=0,hQ=0,hR=0;if(hO.barTop){hQ=-2;}
else if(hO.barBottom){hP=-2;}
else if(hO.barRight){hR=-2;}
else {hS=-2;}
;return {marginBottom:hQ,marginTop:hP,marginLeft:hR,marginRight:hS};}
},"tabview/bar/button-forward":{include:fh,alias:fh,style:function(hT){if(hT.barTop||hT.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/button-backward":{include:fT,alias:fT,style:function(hU){if(hU.barTop||hU.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/pane":{style:function(hV){return {backgroundColor:h,decorator:fD,padding:10};}
},"tabview-page":ed,"tabview-page/button":{style:function(ia){var ih;var ie=0,ic=0,hX=0,ib=0;if(ia.barTop||ia.barBottom){var hY=2,hW=2,id=6,ig=6;}
else {var hY=6,hW=6,id=6,ig=6;}
;if(ia.barTop){ih=fr;}
else if(ia.barRight){ih=fq;}
else if(ia.barBottom){ih=gE;}
else {ih=t;}
;if(ia.checked){if(ia.barTop||ia.barBottom){id+=2;ig+=2;}
else {hY+=2;hW+=2;}
;}
else {if(ia.barTop||ia.barBottom){hX+=2;ie+=2;}
else if(ia.barLeft||ia.barRight){ic+=2;ib+=2;}
;}
;if(ia.checked){if(!ia.firstTab){if(ia.barTop||ia.barBottom){ib=-4;}
else {ie=-4;}
;}
;if(!ia.lastTab){if(ia.barTop||ia.barBottom){ic=-4;}
else {hX=-4;}
;}
;}
;return {zIndex:ia.checked?10:5,decorator:ih,backgroundColor:h,padding:[hY,ig,hW,id],margin:[ie,ic,hX,ib],textColor:ia.disabled?K:undefined};}
},"tabview-page/button/label":{alias:eB,style:function(ii){return {padding:ii.focused?[0,1,0,1]:[1,2,1,2],decorator:ii.focused?e:undefined};}
},"tabview-page/button/icon":v,"tabview-page/button/close-button":{alias:gr,style:function(ij){return {icon:eG};}
},"scrollbar":{},"scrollbar/slider":{alias:gy,style:function(ik){return {backgroundColor:fV};}
},"scrollbar/slider/knob":{include:gi,style:function(il){return {height:14,width:14,minHeight:il.horizontal?undefined:9,minWidth:il.horizontal?9:undefined};}
},"scrollbar/button":{alias:fx,include:fx,style:function(im){var io;if(im.up||im.down){if(im.pressed||im.abandoned||im.checked){io=[5,2,3,4];}
else {io=[4,3];}
;}
else {if(im.pressed||im.abandoned||im.checked){io=[4,3,2,5];}
else {io=[3,4];}
;}
;var ip=fI;if(im.left){ip+=fC;}
else if(im.right){ip+=ee;}
else if(im.up){ip+=fm;}
else {ip+=ga;}
;return {padding:io,icon:ip};}
},"scrollbar/button-begin":i,"scrollbar/button-end":i,"slider":{style:function(iq){var ir;if(iq.disabled){ir=g;}
else if(iq.invalid){ir=eo;}
else if(iq.focused){ir=fV;}
else {ir=go;}
;return {backgroundColor:ir,decorator:iq.focused?dS:fs};}
},"slider/knob":{include:gi,style:function(is){return {width:14,height:14,decorator:fD};}
},"tree-folder/open":{style:function(it){return {source:it.opened?ej:et};}
},"tree-folder":{style:function(iu){return {padding:[2,3,2,0],icon:iu.opened?ep:gz,iconOpened:ep,opacity:iu.drag?0.5:undefined};}
},"tree-folder/icon":{style:function(iv){return {padding:[0,4,0,0]};}
},"tree-folder/label":{style:function(iw){return {padding:[1,2],backgroundColor:iw.selected?gh:undefined,textColor:iw.selected?fp:undefined};}
},"tree-file":{include:fb,alias:fb,style:function(ix){return {icon:fj,opacity:ix.drag?0.5:undefined};}
},"tree":{include:z,alias:z,style:function(iy){return {contentPadding:[4,4,4,4]};}
},"treevirtual":{style:function(iz){return {decorator:gk};}
},"treevirtual-folder":{style:function(iA){return {icon:(iA.opened?ep:gz),opacity:iA.drag?0.5:undefined};}
},"treevirtual-file":{include:gl,alias:gl,style:function(iB){return {icon:fj,opacity:iB.drag?0.5:undefined};}
},"treevirtual-line":{style:function(iC){return {icon:ex};}
},"treevirtual-contract":{style:function(iD){return {icon:ej};}
},"treevirtual-expand":{style:function(iE){return {icon:et};}
},"treevirtual-only-contract":{style:function(iF){return {icon:gq};}
},"treevirtual-only-expand":{style:function(iG){return {icon:gH};}
},"treevirtual-start-contract":{style:function(iH){return {icon:fO};}
},"treevirtual-start-expand":{style:function(iI){return {icon:f};}
},"treevirtual-end-contract":{style:function(iJ){return {icon:ge};}
},"treevirtual-end-expand":{style:function(iK){return {icon:es};}
},"treevirtual-cross-contract":{style:function(iL){return {icon:b};}
},"treevirtual-cross-expand":{style:function(iM){return {icon:eF};}
},"treevirtual-end":{style:function(iN){return {icon:gf};}
},"treevirtual-cross":{style:function(iO){return {icon:ey};}
},"window":{style:function(iP){return {contentPadding:[10,10,10,10],backgroundColor:h,decorator:iP.maximized?undefined:gg};}
},"window-resize-frame":I,"window/pane":{},"window/captionbar":{style:function(iQ){return {padding:1,backgroundColor:iQ.active?eO:gu,textColor:iQ.active?eN:fo};}
},"window/icon":{style:function(iR){return {marginRight:4};}
},"window/title":{style:function(iS){return {cursor:F,font:H,marginRight:20,alignY:eW};}
},"window/minimize-button":{include:fx,alias:fx,style:function(iT){return {icon:gd,padding:iT.pressed||iT.abandoned?[2,1,0,3]:[1,2]};}
},"window/restore-button":{include:fx,alias:fx,style:function(iU){return {icon:fd,padding:iU.pressed||iU.abandoned?[2,1,0,3]:[1,2]};}
},"window/maximize-button":{include:fx,alias:fx,style:function(iV){return {icon:ec,padding:iV.pressed||iV.abandoned?[2,1,0,3]:[1,2]};}
},"window/close-button":{include:fx,alias:fx,style:function(iW){return {marginLeft:2,icon:eC,padding:iW.pressed||iW.abandoned?[2,1,0,3]:[1,2]};}
},"window/statusbar":{style:function(iX){return {decorator:gB,padding:[2,6]};}
},"window/statusbar-text":eB,"resizer":{style:function(iY){return {decorator:fD};}
},"splitpane":{},"splitpane/splitter":{style:function(ja){return {backgroundColor:h};}
},"splitpane/splitter/knob":{style:function(jb){return {source:jb.horizontal?dR:dW,padding:2};}
},"splitpane/slider":{style:function(jc){return {backgroundColor:X,opacity:0.3};}
},"selectbox":{include:gi,style:function(jd){var je=fx;if(jd.invalid&&!jd.disabled){je=eo;}
else if(jd.abandoned){je=fS;}
else if(!jd.abandoned&&jd.hovered){je=G;}
else if(!jd.abandoned&&!jd.hovered&&jd.checked){je=fl;}
;return {backgroundColor:je};}
},"selectbox/atom":gr,"selectbox/popup":gm,"selectbox/list":z,"selectbox/arrow":{include:v,style:function(jf){return {source:fQ,paddingRight:4,paddingLeft:5};}
},"datechooser":{style:function(jg){return {decorator:fD};}
},"datechooser/navigation-bar":{style:function(jh){return {backgroundColor:eb,textColor:jh.disabled?K:jh.invalid?eT:undefined,padding:[2,10]};}
},"datechooser/last-year-button-tooltip":ev,"datechooser/last-month-button-tooltip":ev,"datechooser/next-year-button-tooltip":ev,"datechooser/next-month-button-tooltip":ev,"datechooser/last-year-button":fz,"datechooser/last-month-button":fz,"datechooser/next-year-button":fz,"datechooser/next-month-button":fz,"datechooser/button/icon":{},"datechooser/button":{style:function(ji){var jj={width:17,show:eV};if(ji.lastYear){jj.icon=J;}
else if(ji.lastMonth){jj.icon=er;}
else if(ji.nextYear){jj.icon=dV;}
else if(ji.nextMonth){jj.icon=A;}
;if(ji.pressed||ji.checked||ji.abandoned){jj.decorator=gB;}
else if(ji.hovered){jj.decorator=ef;}
else {jj.decorator=undefined;}
;if(ji.pressed||ji.checked||ji.abandoned){jj.padding=[2,0,0,2];}
else if(ji.hovered){jj.padding=1;}
else {jj.padding=2;}
;return jj;}
},"datechooser/month-year-label":{style:function(jk){return {font:H,textAlign:fB};}
},"datechooser/date-pane":{style:function(jl){return {decorator:Y,backgroundColor:eb};}
},"datechooser/weekday":{style:function(jm){return {decorator:eP,font:H,textAlign:fB,textColor:jm.disabled?K:jm.weekend?j:eb,backgroundColor:jm.weekend?eb:j};}
},"datechooser/day":{style:function(jn){return {textAlign:fB,decorator:jn.today?gk:undefined,textColor:jn.disabled?K:jn.selected?fp:jn.otherMonth?K:undefined,backgroundColor:jn.disabled?undefined:jn.selected?s:undefined,padding:[2,4]};}
},"datechooser/week":{style:function(jo){return {textAlign:fB,textColor:j,padding:[2,4],decorator:jo.header?gp:eE};}
},"combobox":{style:function(jp){var jq;if(jp.disabled){jq=g;}
else if(jp.invalid){jq=eo;}
else if(jp.focused){jq=fv;}
else {jq=go;}
;return {decorator:jp.focused?dS:fs,textColor:jp.disabled?K:undefined,backgroundColor:jq};}
},"combobox/button":{alias:fx,include:fx,style:function(jr){return {icon:fQ,backgroundColor:jr.hovered?G:fx};}
},"combobox/popup":gm,"combobox/list":z,"combobox/textfield":{include:eg,style:function(js){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};}
},"menu":{style:function(jt){var ju={backgroundColor:h,decorator:o,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:jt.submenu||jt.contextmenu?gA:gG};if(jt.submenu){ju.position=fg;ju.offset=[-2,-3];}
;if(jt.contextmenu){ju.offset=4;}
;return ju;}
},"menu/slidebar":W,"menu-slidebar":ed,"menu-slidebar-button":{style:function(jv){return {backgroundColor:jv.hovered?gh:undefined,padding:6,center:true};}
},"menu-slidebar/button-backward":{include:d,style:function(jw){return {icon:jw.hovered?fA:E};}
},"menu-slidebar/button-forward":{include:d,style:function(jx){return {icon:jx.hovered?dY:fQ};}
},"menu-separator":{style:function(jy){return {height:0,decorator:gF,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};}
},"menu-button":{alias:gr,style:function(jz){return {backgroundColor:jz.selected?gh:undefined,textColor:jz.selected?fp:undefined,padding:[2,6]};}
},"menu-button/icon":{include:v,style:function(jA){return {alignY:eW};}
},"menu-button/label":{include:eB,style:function(jB){return {alignY:eW,padding:1};}
},"menu-button/shortcut":{include:eB,style:function(jC){return {alignY:eW,marginLeft:14,padding:1};}
},"menu-button/arrow":{include:v,style:function(jD){return {source:jD.selected?fU:A,alignY:eW};}
},"menu-checkbox":{alias:eH,include:eH,style:function(jE){return {icon:!jE.checked?undefined:jE.selected?ff:C};}
},"menu-radiobutton":{alias:eH,include:eH,style:function(jF){return {icon:!jF.checked?undefined:jF.selected?gt:fJ};}
},"menubar":{style:function(jG){return {backgroundColor:h,decorator:fD};}
},"menubar-button":{alias:gr,style:function(jH){return {padding:[2,6],backgroundColor:jH.pressed||jH.hovered&&!jH.disabled?gh:undefined,textColor:jH.pressed||jH.hovered?fp:undefined};}
},"colorselector":ed,"colorselector/control-bar":ed,"colorselector/visual-pane":U,"colorselector/control-pane":ed,"colorselector/preset-grid":ed,"colorselector/colorbucket":{style:function(jI){return {decorator:gB,width:16,height:16};}
},"colorselector/preset-field-set":U,"colorselector/input-field-set":{include:U,alias:U,style:function(){return {paddingTop:12};}
},"colorselector/preview-field-set":{include:U,alias:U,style:function(){return {paddingTop:12};}
},"colorselector/hex-field-composite":ed,"colorselector/hex-field":eg,"colorselector/rgb-spinner-composite":ed,"colorselector/rgb-spinner-red":gj,"colorselector/rgb-spinner-green":gj,"colorselector/rgb-spinner-blue":gj,"colorselector/hsb-spinner-composite":ed,"colorselector/hsb-spinner-hue":gj,"colorselector/hsb-spinner-saturation":gj,"colorselector/hsb-spinner-brightness":gj,"colorselector/preview-content-old":{style:function(jJ){return {decorator:gB,width:50,height:10};}
},"colorselector/preview-content-new":{style:function(jK){return {decorator:gB,backgroundColor:N,width:50,height:10};}
},"colorselector/hue-saturation-field":{style:function(jL){return {decorator:gB,margin:5};}
},"colorselector/brightness-field":{style:function(jM){return {decorator:gB,margin:[5,7]};}
},"colorselector/hue-saturation-pane":ed,"colorselector/hue-saturation-handle":ed,"colorselector/brightness-pane":ed,"colorselector/brightness-handle":ed,"table":ed,"table/statusbar":{style:function(jN){return {decorator:dT,paddingLeft:2,paddingRight:2};}
},"table/column-button":{alias:fx,style:function(jO){var jQ,jP;if(jO.pressed||jO.checked||jO.abandoned){jQ=gB;jP=[3,2,1,4];}
else if(jO.hovered){jQ=ef;jP=[2,3];}
else {jQ=undefined;jP=[3,4];}
;return {decorator:jQ,padding:jP,backgroundColor:jO.abandoned?fS:fx,icon:gx};}
},"table-column-reset-button":{extend:eH,alias:eH,style:function(){return {icon:eD};}
},"table-scroller/scrollbar-x":fe,"table-scroller/scrollbar-y":fe,"table-scroller":ed,"table-scroller/header":{style:function(jR){return {decorator:L,backgroundColor:gv};}
},"table-scroller/pane":{style:function(jS){return {backgroundColor:M};}
},"table-scroller/focus-indicator":{style:function(jT){return {decorator:p};}
},"table-scroller/resize-line":{style:function(jU){return {backgroundColor:eQ,width:3};}
},"table-header-cell":{alias:gr,style:function(jV){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:jV.hovered?0:2,decorator:jV.hovered?gb:fk,backgroundColor:jV.hovered?O:fk,sortIcon:jV.sorted?(jV.sortedAscending?ew:fH):undefined};}
},"table-header-cell/icon":{style:function(jW){return {marginRight:4,opacity:jW.disabled?0.3:1};}
},"table-header-cell/sort-icon":{style:function(jX){return {alignY:eW,opacity:jX.disabled?0.3:1};}
},"table-editor-textfield":{include:eg,style:function(jY){return {decorator:undefined,padding:[2,2]};}
},"table-editor-selectbox":{include:fW,alias:fW,style:function(ka){return {padding:[0,2]};}
},"table-editor-combobox":{include:fa,alias:fa,style:function(kb){return {decorator:undefined};}
},"progressive-table-header":{alias:ez},"progressive-table-header-cell":{style:function(kc){return {decorator:fk,backgroundColor:fk,padding:[0,6,0,6]};}
},"colorpopup":{alias:gm,include:gm,style:function(kd){return {decorator:fD,padding:5,backgroundColor:h};}
},"colorpopup/field":{style:function(ke){return {decorator:gB,margin:2,width:14,height:14,backgroundColor:h};}
},"colorpopup/selector-button":fx,"colorpopup/auto-button":fx,"colorpopup/preview-pane":U,"colorpopup/current-preview":{style:function(kf){return {height:20,padding:4,marginLeft:4,decorator:gB,allowGrowX:true};}
},"colorpopup/selected-preview":{style:function(kg){return {height:20,padding:4,marginRight:4,decorator:gB,allowGrowX:true};}
},"colorpopup/colorselector-okbutton":{alias:fx,include:fx,style:function(kh){return {icon:l};}
},"colorpopup/colorselector-cancelbutton":{alias:fx,include:fx,style:function(ki){return {icon:V};}
},"virtual-list":z,"virtual-list/row-layer":fw,"row-layer":ed,"column-layer":ed,"group-item":{include:eB,alias:eB,style:function(kj){return {padding:4,backgroundColor:eR,textColor:N,font:H};}
},"virtual-selectbox":fW,"virtual-selectbox/dropdown":gm,"virtual-selectbox/dropdown/list":{alias:T},"virtual-combobox":fa,"virtual-combobox/dropdown":gm,"virtual-combobox/dropdown/list":{alias:T},"virtual-tree":{include:eL,alias:eL,style:function(kk){return {itemHeight:21};}
},"virtual-tree-folder":fb,"virtual-tree-file":fM,"cell":{style:function(kl){return {backgroundColor:kl.selected?el:a,textColor:kl.selected?fp:R,padding:[3,6]};}
},"cell-string":fc,"cell-number":{include:fc,style:function(km){return {textAlign:fP};}
},"cell-image":fc,"cell-boolean":fc,"cell-atom":fc,"cell-date":fc,"cell-html":fc,"progressbar":{style:function(kn){return {decorator:fN,padding:[1],backgroundColor:N,width:200,height:20};}
},"progressbar/progress":{style:function(ko){return {backgroundColor:ko.disabled?g:gh};}
},"app-header":{style:function(kp){return {textColor:fp,backgroundColor:gh,padding:[8,12]};}
},"app-header-label":eB,"app-splitpane":{alias:eX,style:function(kq){return {padding:[0,10,10,10],backgroundColor:en};}
}}});}
)();
(function(){var a="Liberation Sans",b="Verdana",c="Bitstream Vera Sans",d="Lucida Grande",e="Tahoma",f="monospace",g="qx.theme.classic.Font",h="Courier New",i="DejaVu Sans Mono";qx.Theme.define(g,{fonts:{"default":{size:11,lineHeight:1.4,family:[d,e,b,c,a]},"bold":{size:11,lineHeight:1.4,family:[d,e,b,c,a],bold:true},"small":{size:10,lineHeight:1.4,family:[d,e,b,c,a]},"monospace":{size:11,lineHeight:1.4,family:[i,h,f]}}});}
)();
(function(){var a="Oxygen",b="qx.theme.icon.Oxygen",c="qx/icon/Oxygen";qx.Theme.define(b,{title:a,aliases:{"icon":c}});}
)();
(function(){var a="black",b="#888888",c="#3E6CA8",d="#3E5B97",e="#EBE9ED",f="#FFFFE1",g="#F3F8FD",h="#A7A6AA",i="#666666",j="#CBC8CD",k="#FFE0E0",l="#F4F4F4",m="#808080",n="#CCCCCC",o="#C82C2C",p="#DBEAF9",q="#BCCEE5",r="#A5BDDE",s="#7CA0CF",t="#EEE",u="#F3F0F5",v="#F6F5F7",w="#FF9999",x="qx.theme.classic.Color",y="css.rgba",z="#990000",A="#F9F8E9",B="white",C="gray",D="#DCDFE4",E="rgba(0, 0, 0, 0.4)",F="#FAFBFE",G="#AAAAAA",H="#85878C";qx.Theme.define(x,{colors:{"background":e,"background-light":u,"light-background":e,"background-focused":g,"background-focused-inner":p,"background-disabled":l,"background-selected":c,"background-field":B,"background-pane":F,"background-invalid":k,"border-lead":b,"border-light":B,"border-light-shadow":D,"border-dark-shadow":h,"border-dark":H,"border-main":H,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":s,"border-focused-dark":c,"border-separator":m,"shadow":qx.core.Environment.get(y)?E:i,"invalid":z,"border-focused-invalid":w,"text":a,"text-disabled":h,"text-selected":B,"text-focused":d,"text-placeholder":j,"tooltip":f,"tooltip-text":a,"tooltip-invalid":o,"button":e,"button-hovered":v,"button-abandoned":A,"button-checked":u,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":B,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":B,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":t,"table-column-line":t,"progressive-table-header":G,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":C,"progressive-progressbar-indicator-done":n,"progressive-progressbar-indicator-undone":B,"progressive-progressbar-percent-background":C,"progressive-progressbar-percent-text":B}});}
)();
(function(){var a="Classic Windows",b="qx.theme.Classic";qx.Theme.define(b,{title:a,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});}
)();
(function(){var a="<span class='object'>",b="&gt;",c="<span class='object' title='Object instance with hash code: ",d="string",e="level-",f="0",g="&lt;",h="</span> ",k="}",l=":",m="{",n="&amp;",o="offset",p="&#39;",q="DIV",r="",s="qx.log.appender.Formatter",t="map",u="YYYY-MM-dd HH:mm:ss",v="]",w="'>",x="<span>",y="[",z=", ",A="</span>",B="datetime",C="\n",D="&quot;",E="<span class='type-key'>",F="</span>:<span class='type-",G="</span>: ",H=" ",I="]</span>: ",J="<span class='offset'>",K="?",L="<span class='type-";qx.Class.define(s,{extend:qx.core.Object,properties:{formatTimeAs:{init:o,check:[o,B]}},members:{formatOffset:function(O,length){var N=O.toString();var P=(length||6)-N.length;var M=r;for(var i=0;i<P;i++ ){M+=f;}
;return M+N;}
,formatEntryTime:function(Q){if(this.getFormatTimeAs()==o){return this.formatOffset(Q.offset,6);}
;if(!qx.log.appender.Formatter.__nN){qx.log.appender.Formatter.__nN=new qx.util.format.DateFormat(u);}
;return qx.log.appender.Formatter.__nN.format(Q.time);}
,normalizeEntryClass:function(R){var T={clazz:null,object:null,hash:null};if(R.object){T.hash=R.object;if(R.clazz){T.clazz=R.clazz;}
else {var S=R.win.qx.core.ObjectRegistry.fromHashCode(R.object,true);if(S){T.clazz=S.constructor;T.object=S;}
;}
;}
else if(R.clazz){T.clazz=R.clazz;}
;return T;}
,formatEntryObjectAndClass:function(V){var U=this.normalizeEntryClass(V);var W=r;if(U.clazz){W+=U.clazz.classname;}
;if(U.hash){W+=y+U.hash+v;}
;W+=l;return W;}
,formatEntryItems:function(bd){var bf=[];var X=bd.items;for(var i=0,bc=X.length;i<bc;i++ ){var bb=X[i];var be=bb.text;if(bb.trace&&bb.trace.length>0){be+=C+bb.trace;}
;if(be instanceof Array){var Y=[];for(var j=0,ba=be.length;j<ba;j++ ){Y.push(be[j].text);}
;if(bb.type===t){bf.push(m,Y.join(z),k);}
else {bf.push(y,Y.join(z),v);}
;}
else {bf.push(be);}
;}
;return bf.join(H);}
,toText:function(bg){var bi=this.formatEntryTime(bg)+H+this.formatEntryObjectAndClass(bg);var bh=this.formatEntryItems(bg);if(bh){bi+=H+bh;}
;return bi;}
,toTextArray:function(bj){var bk=[];bk.push(this.formatEntryTime(bj));bk.push(this.formatEntryObjectAndClass(bj));bk.push(this.formatEntryItems(bj));return bk;}
,toHtml:function(bt){var bv=[];var br,bu,bm,bo;bv.push(J,this.formatEntryTime(bt),h);var bl=this.normalizeEntryClass(bt);var bs=r;if(bl.clazz){bs+=bl.clazz.classname;}
;if(bl.object){bv.push(c+bl.object.toHashCode()+w,bl.classname,y,bl.object,I);}
else if(bl.hash){bv.push(c+bl.hash+w,bl.classname,y,bl.hash,I);}
else if(bl.clazz){bv.push(a+bl.clazz.classname,G);}
;var bn=bt.items;for(var i=0,bw=bn.length;i<bw;i++ ){br=bn[i];bu=br.text;if(bu instanceof Array){var bo=[];for(var j=0,bq=bu.length;j<bq;j++ ){bm=bu[j];if(typeof bm===d){bo.push(x+qx.log.appender.Formatter.escapeHTML(bm)+A);}
else if(bm.key){bo.push(E+bm.key+F+bm.type+w+qx.log.appender.Formatter.escapeHTML(bm.text)+A);}
else {bo.push(L+bm.type+w+qx.log.appender.Formatter.escapeHTML(bm.text)+A);}
;}
;bv.push(L+br.type+w);if(br.type===t){bv.push(m,bo.join(z),k);}
else {bv.push(y,bo.join(z),v);}
;bv.push(A);}
else {bv.push(L+br.type+w+qx.log.appender.Formatter.escapeHTML(bu)+h);}
;}
;var bp=document.createElement(q);bp.innerHTML=bv.join(r);bp.className=e+bt.level;return bp;}
},statics:{__nN:null,__nO:null,getFormatter:function(){if(!qx.log.appender.Formatter.__nO){qx.log.appender.Formatter.__nO=new qx.log.appender.Formatter();}
;return qx.log.appender.Formatter.__nO;}
,setFormatter:function(bx){qx.log.appender.Formatter.__nO=bx;}
,escapeHTML:function(by){return String(by).replace(/[<>&"']/g,qx.log.appender.Formatter.__nP);}
,__nP:function(bA){var bz={"<":g,">":b,"&":n,"'":p,'"':D};return bz[bA]||K;}
}});}
)();
(function(){var a="qx.util.format.IFormat";qx.Interface.define(a,{members:{format:function(b){}
,parse:function(c){}
}});}
)();
(function(){var a="-",b="QQQ",c='W',d="qqqq",e="h",f="KK",g='L',h=" is not supported",m="Z",n="Date string '",o="GGGGG",p='abbreviated',q="Y+",r='D',s="eeeee",t="(\\d\\d?)",u="LL",v="abbreviated",w="EEEE",x="^",y=":",z='y',A="quoted_literal",B="weekOfYear",C='4th quarter',D="SSS",E='a',F="day",G="(-*",H="qqq",I="(\\d\\d)",J='3rd quarter',K="K",L='q',M="Provided date is invalid",N="pm",O="Error parsing date '",P='Anno Domini',Q='G',R="a",S='2nd quarter',T="yyyy-MM-dd'T'HH:mm:ss",U="GMT",V="HH:mm:ss",W="dd",X="+",Y="qx.util.format.DateFormat",eo='weekDay',ek="am",ep="eee",el="string",em="ee",ej="q",en="QQQQ",eu="HHmmss",ev="ww",ew="H",ex='Y+',eq="wide",er='wide',es="(\\d\\d\\d?)",et="(GMT[\\+\\-]\\d\\d:\\d\\d)",eB="Q",ff="c",eC="(",eD="weekOfMonth",ey="ccc",ez="long",gg="Malformed date format: ",eA="EEEEE",eE='Y',eF="EE",eG="GGG",eL="wildcard",eM="w",eN="mm",eH='h',eI="S",eJ='s',eK=". Wildcard ",eS='A',eT="yyyy-MM-dd",eU="G",eV='z',eO="GG",eP=")",eQ="kk",eR="ss",fa="([\\+\\-]\\d\\d\\d\\d)",fb="default",gk='BC',fc='H',eW='S',eX='1st quarter',gi="stand-alone",eY="0",fd="MMMM",fe='c',fq="d",fp='Q',fo='Q1',fu="eeee",ft="QQ",fs="LLLLL",fr="HH",fj='k',fi="m",fh="DDD",fg="D",fn="Cannot set locale to ",fm="LLLL",fl="(\\d\\d*?)",fk='e',fB="': the value for day or month is too large",fA="literal",fz='K',fy="L",fF="hh",fE="ms",fD="(\\d\\d?\\d?)",fC="cccc",fx="e",fw='y+',fv="|",fQ="W",fP="dayOfYear",fO="GGGG",fU='Q2',fT=" - please provide a string",fS='B',fR="MM",fJ='Q4',fI="y+",fH='narrow',fG="ccccc",fN="E",fM='-',fL='',fK="' does not match the date format: ",gb="short",ga='d',fY="unkown",fX="narrow",gf="\\d?",ge="'",gd="k",gc='Before Christ',fW='Z',fV="qx.debug",dR='m',dQ="quarter",gl=" ",dO="yyyy-MM-dd'T'HH:mm:ss'Z'",dP='Q3',dN="z",gj="DD",dL="min",dM="",dK='M',gh="sec",dI='isoUtcDateTime',dJ="(\\d?)",dH="SS",eb="MMM",ec="s",dY="M",ea='w',dW="EEE",dX="$",dV="?",dG='AD',dT="\\d",dU="+?",dS="hour",ei="MMMMM",eg='E',eh='month',ee="LLL",ef="qq",ed="format";qx.Class.define(Y,{extend:qx.core.Object,implement:[qx.util.format.IFormat],construct:function(gn,gm){qx.core.Object.call(this);this.__nQ=this.__mk=gm;if(gn!=null){this.__nR=gn.toString();if(this.__nR in qx.util.format.DateFormat.ISO_MASKS){if(this.__nR===dI){this.__nS=true;}
;this.__nR=qx.util.format.DateFormat.ISO_MASKS[this.__nR];}
;}
else {this.__nR=qx.locale.Date.getDateFormat(ez,this.getLocale())+gl+qx.locale.Date.getDateTimeFormat(eu,V,this.getLocale());}
;}
,statics:{getDateInstance:function(){var go=qx.util.format.DateFormat;var gp=qx.locale.Date.getDateFormat(gb)+dM;if(go._dateInstance==null||go._dateInstance.__nR!=gp){go._dateInstance=new go(gp);}
;return go._dateInstance;}
,getDateTimeInstance:function(){var gq=qx.util.format.DateFormat;var gr=qx.locale.Date.getDateFormat(ez)+gl+qx.locale.Date.getDateTimeFormat(eu,V);if(gq._dateTimeInstance==null||gq._dateTimeInstance.__nR!=gr){gq._dateTimeInstance=new gq(gr);}
;return gq._dateTimeInstance;}
,ASSUME_YEAR_2000_THRESHOLD:30,ISO_MASKS:{isoDate:eT,isoTime:V,isoDateTime:T,isoUtcDateTime:dO},AM_MARKER:ek,PM_MARKER:N},members:{__mk:null,__nQ:null,__nR:null,__nT:null,__nU:null,__nV:null,__nS:null,__nW:function(gt,gs){var gu=dM+(gt<0?((-1)*gt):gt);while(gu.length<gs){gu=eY+gu;}
;return gt<0?a+gu:gu;}
,__nX:function(gv){var gw=new Date(gv.getTime());var gx=gw.getDate();while(gw.getMonth()!=0){gw.setDate(-1);gx+=gw.getDate()+1;}
;return gx;}
,__nY:function(gy){return new Date(gy.getTime()+(3-((gy.getDay()+6)%7))*86400000);}
,__oa:function(gz){var gB=this.__nY(gz);var gC=gB.getFullYear();var gA=this.__nY(new Date(gC,0,4));return Math.floor(1.5+(gB.getTime()-gA.getTime())/86400000/7);}
,__ob:function(gD){var gF=this.__nY(gD);var gE=this.__nY(new Date(gD.getFullYear(),gD.getMonth(),4));return Math.floor(1.5+(gF.getTime()-gE.getTime())/86400000/7);}
,__oc:function(gG){var gH=this.__nY(gG);return gH.getFullYear();}
,__od:function(gJ){var gI=new Date(gJ,2,1);gI.setDate(-1);return gI.getDate()+1===29;}
,__oe:function(gO,gP){var gN=0;var gQ=0;if(!gP){gP=1971;}
;var gK=0;for(var i=1;i<=12;i++ ){var gM=new Date(gP,i,1);gM.setDate(-1);var gL=gM.getDate()+1;gK+=gL;if(gK<gO){gN++ ;gQ+=gL;}
else {gQ=gO-(gK-gL);break;}
;}
;return {month:gN,day:gQ};}
,__of:function(gU,gS,gR){var gT;switch(gS){case 11:gT=gU-1;if(gU!=this.__oc(new Date(gT,gS,gR))){gT=gU;}
;break;case 0:gT=gU+1;if(gU!=this.__oc(new Date(gT,gS,gR))){gT=gU;}
;break;default:gT=gU;};return gT;}
,setLocale:function(gV){if(gV!==null&&typeof gV!=el){throw new Error(fn+gV+fT);}
;this.__mk=gV===null?this.__nQ:gV;}
,resetLocale:function(){this.setLocale(null);}
,getLocale:function(){var gW=this.__mk;if(gW===undefined){gW=qx.locale.Manager.getInstance().getLocale();}
;return gW;}
,format:function(hn){if(hn==null){return null;}
;if(isNaN(hn.getTime())){if(qx.core.Environment.get(fV)){qx.log.Logger.error(M);}
;return null;}
;if(this.__nS){hn=new Date(hn.getUTCFullYear(),hn.getUTCMonth(),hn.getUTCDate(),hn.getUTCHours(),hn.getUTCMinutes(),hn.getUTCSeconds(),hn.getUTCMilliseconds());}
;var ha=this.getLocale();var hf=hn.getFullYear();var hb=hn.getMonth();var he=hn.getDate();var hi=hn.getDay();var hl=hn.getHours();var hs=hn.getMinutes();var hj=hn.getSeconds();var hq=hn.getMilliseconds();var hh=hn.getTimezoneOffset();var hm=hh>0?1:-1;var gX=Math.floor(Math.abs(hh)/60);var hp=Math.abs(hh)%60;this.__og();var hr=dM;for(var i=0;i<this.__nV.length;i++ ){var hg=this.__nV[i];if(hg.type==fA){hr+=hg.text;}
else {var gY=hg.character;var hk=hg.size;var ht=dV;switch(gY){case z:if(hk==2){ht=this.__nW(hf%100,2);}
else {var hc=Math.abs(hf);ht=hc+dM;if(hk>ht.length){for(var j=ht.length;j<hk;j++ ){ht=eY+ht;}
;}
;if(hf<0){ht=a+ht;}
;}
;break;case eE:ht=this.__oc(hn)+dM;var hc=ht.replace(fM,fL);if(hk>ht.length){for(var j=hc.length;j<hk;j++ ){hc=eY+hc;}
;}
;ht=ht.indexOf(a)!=-1?a+hc:hc;break;case Q:if(hk>=1&&hk<=3){ht=hf>0?dG:gk;}
else if(hk==4){ht=hf>0?P:gc;}
else if(hk==5){ht=hf>0?eS:fS;}
;break;case fp:if(hk==1||hk==2){ht=this.__nW(parseInt(hb/4)+1,hk);}
;if(hk==3){ht=fp+(parseInt(hb/4)+1);}
;break;case L:if(hk==1||hk==2){ht=this.__nW(parseInt(hb/4)+1,hk);}
;if(hk==3){ht=fp+(parseInt(hb/4)+1);}
;break;case r:ht=this.__nW(this.__nX(hn),hk);break;case ga:ht=this.__nW(he,hk);break;case ea:ht=this.__nW(this.__oa(hn),hk);break;case c:ht=this.__ob(hn);break;case eg:if(hk>=1&&hk<=3){ht=qx.locale.Date.getDayName(v,hi,ha,ed,true);}
else if(hk==4){ht=qx.locale.Date.getDayName(eq,hi,ha,ed,true);}
else if(hk==5){ht=qx.locale.Date.getDayName(fX,hi,ha,ed,true);}
;break;case fk:var hd=qx.locale.Date.getWeekStart(ha);var ho=1+((hi-hd>=0)?(hi-hd):7+(hi-hd));if(hk>=1&&hk<=2){ht=this.__nW(ho,hk);}
else if(hk==3){ht=qx.locale.Date.getDayName(v,hi,ha,ed,true);}
else if(hk==4){ht=qx.locale.Date.getDayName(eq,hi,ha,ed,true);}
else if(hk==5){ht=qx.locale.Date.getDayName(fX,hi,ha,ed,true);}
;break;case fe:var hd=qx.locale.Date.getWeekStart(ha);var ho=1+((hi-hd>=0)?(hi-hd):7+(hi-hd));if(hk==1){ht=fL+ho;}
else if(hk==3){ht=qx.locale.Date.getDayName(v,hi,ha,gi,true);}
else if(hk==4){ht=qx.locale.Date.getDayName(eq,hi,ha,gi,true);}
else if(hk==5){ht=qx.locale.Date.getDayName(fX,hi,ha,gi,true);}
;break;case dK:if(hk==1||hk==2){ht=this.__nW(hb+1,hk);}
else if(hk==3){ht=qx.locale.Date.getMonthName(v,hb,ha,ed,true);}
else if(hk==4){ht=qx.locale.Date.getMonthName(eq,hb,ha,ed,true);}
else if(hk==5){ht=qx.locale.Date.getMonthName(fX,hb,ha,ed,true);}
;break;case g:if(hk==1||hk==2){ht=this.__nW(hb+1,hk);}
else if(hk==3){ht=qx.locale.Date.getMonthName(v,hb,ha,gi,true);}
else if(hk==4){ht=qx.locale.Date.getMonthName(eq,hb,ha,gi,true);}
else if(hk==5){ht=qx.locale.Date.getMonthName(fX,hb,ha,gi,true);}
;break;case E:ht=(hl<12)?qx.locale.Date.getAmMarker(ha):qx.locale.Date.getPmMarker(ha);break;case fc:ht=this.__nW(hl,hk);break;case fj:ht=this.__nW((hl==0)?24:hl,hk);break;case fz:ht=this.__nW(hl%12,hk);break;case eH:ht=this.__nW(((hl%12)==0)?12:(hl%12),hk);break;case dR:ht=this.__nW(hs,hk);break;case eJ:ht=this.__nW(hj,hk);break;case eW:ht=this.__nW(hq,3);if(hk<ht.length){ht=ht.substr(0,hk);}
else {while(hk>ht.length){ht+=eY;}
;}
;break;case eV:if(hk>=1&&hk<=4){ht=U+((hm>0)?a:X)+this.__nW(Math.abs(gX),2)+y+this.__nW(hp,2);}
;break;case fW:if(hk>=1&&hk<=3){ht=((hm>0)?a:X)+this.__nW(Math.abs(gX),2)+this.__nW(hp,2);}
else {ht=U+((hm>0)?a:X)+this.__nW(Math.abs(gX),2)+y+this.__nW(hp,2);}
;break;};hr+=ht;}
;}
;return hr;}
,parse:function(hA){this.__oh();var hD=this.__nT.regex.exec(hA);if(hD==null){throw new Error(n+hA+fK+this.__nR);}
;var hu={era:1,year:1970,quarter:1,month:0,day:1,dayOfYear:1,hour:0,ispm:false,weekDay:4,weekYear:1970,weekOfMonth:1,weekOfYear:1,min:0,sec:0,ms:0};var hy=1;var hv=false;var hw=false;for(var i=0;i<this.__nT.usedRules.length;i++ ){var hx=this.__nT.usedRules[i];var hz=hD[hy];if(hx.field!=null){hu[hx.field]=parseInt(hz,10);}
else {hx.manipulator(hu,hz,hx.pattern);}
;if(hx.pattern==q){var hB=false;for(var k=0;k<this.__nT.usedRules.length;k++ ){if(this.__nT.usedRules[k].pattern==fw){hB=true;break;}
;}
;if(!hB){hv=true;}
;}
;if(hx.pattern.indexOf(fg)!=-1){var hF=false;for(var k=0;k<this.__nT.usedRules.length;k++ ){if(this.__nT.usedRules[k].pattern.indexOf(fq)!=-1){hF=true;break;}
;}
;if(!hF){hw=true;}
;}
;hy+=(hx.groups==null)?1:hx.groups;}
;if(hv){hu.year=this.__of(hu.weekYear,hu.month,hu.day);}
;if(hw){var hE=this.__oe(hu.dayOfYear,hu.year);hu.month=hE.month;hu.day=hE.day;}
;if(hu.era<0&&(hu.year*hu.era<0)){hu.year=hu.year*hu.era;}
;var hC=new Date(hu.year,hu.month,hu.day,(hu.ispm)?(hu.hour+12):hu.hour,hu.min,hu.sec,hu.ms);if(this.__nS){hC=new Date(hC.getUTCFullYear(),hC.getUTCMonth(),hC.getUTCDate(),hC.getUTCHours(),hC.getUTCMinutes(),hC.getUTCSeconds(),hC.getUTCMilliseconds());}
;if(hu.month!=hC.getMonth()||hu.year!=hC.getFullYear()){throw new Error(O+hA+fB);}
;return hC;}
,__og:function(){if(this.__nV!=null){return;}
;this.__nV=[];var hK;var hI=0;var hM=dM;var hG=this.__nR;var hJ=fb;var i=0;while(i<hG.length){var hL=hG.charAt(i);switch(hJ){case A:if(hL==ge){if(i+1>=hG.length){i++ ;break;}
;var hH=hG.charAt(i+1);if(hH==ge){hM+=hL;i++ ;}
else {i++ ;hJ=fY;}
;}
else {hM+=hL;i++ ;}
;break;case eL:if(hL==hK){hI++ ;i++ ;}
else {this.__nV.push({type:eL,character:hK,size:hI});hK=null;hI=0;hJ=fb;}
;break;default:if((hL>=E&&hL<=eV)||(hL>=eS&&hL<=fW)){hK=hL;hJ=eL;}
else if(hL==ge){if(i+1>=hG.length){hM+=hL;i++ ;break;}
;var hH=hG.charAt(i+1);if(hH==ge){hM+=hL;i++ ;}
;i++ ;hJ=A;}
else {hJ=fb;}
;if(hJ!=fb){if(hM.length>0){this.__nV.push({type:fA,text:hM});hM=dM;}
;}
else {hM+=hL;i++ ;}
;break;};}
;if(hK!=null){this.__nV.push({type:eL,character:hK,size:hI});}
else if(hM.length>0){this.__nV.push({type:fA,text:hM});}
;}
,__oh:function(){if(this.__nT!=null){return;}
;var hQ=this.__nR;this.__oj();this.__og();var hW=[];var hR=x;for(var hO=0;hO<this.__nV.length;hO++ ){var hX=this.__nV[hO];if(hX.type==fA){hR+=qx.lang.String.escapeRegexpChars(hX.text);}
else {var hP=hX.character;var hS=hX.size;var hU;for(var hY=0;hY<this.__nU.length;hY++ ){var hT=this.__nU[hY];if(this.__oi(hT,hP,hS)){hU=hT;break;}
;}
;if(hU==null){var hV=dM;for(var i=0;i<hS;i++ ){hV+=hP;}
;throw new Error(gg+hQ+eK+hV+h);}
else {hW.push(hU);hR+=hU.regex;}
;}
;}
;hR+=dX;var hN;try{hN=new RegExp(hR);}
catch(ia){throw new Error(gg+hQ);}
;this.__nT={regex:hN,"usedRules":hW,pattern:hR};}
,__oi:function(ib,ic,id){if(ic===z&&ib.pattern===fw){ib.regex=ib.regexFunc(id);return true;}
else if(ic===eE&&ib.pattern===ex){ib.regex=ib.regexFunc(id);return true;}
else {return ic==ib.pattern.charAt(0)&&id==ib.pattern.length;}
;}
,__oj:function(){var it=qx.util.format.DateFormat;var iw=qx.lang.String;if(this.__nU!=null){return;}
;var iu=this.__nU=[];var ip=qx.locale.Date.getAmMarker(this.getLocale()).toString()||it.AM_MARKER;var iD=qx.locale.Date.getPmMarker(this.getLocale()).toString()||it.PM_MARKER;var ig=this.getLocale();var il=function(iG,iH){iH=parseInt(iH,10);if(iH>=0){if(iH<it.ASSUME_YEAR_2000_THRESHOLD){iH+=2000;}
else if(iH<100){iH+=1900;}
;}
;iG.year=iH;}
;var iF=function(iI,iJ){iJ=parseInt(iJ,10);if(iJ>=0){if(iJ<it.ASSUME_YEAR_2000_THRESHOLD){iJ+=2000;}
else if(iJ<100){iJ+=1900;}
;}
;iI.weekYear=iJ;}
;var io=function(iK,iL){iK.month=parseInt(iL,10)-1;}
;var ij=function(iO,iP){var iN=qx.locale.Date.getWeekStart(ig);var iM=(parseInt(iP,10)-1+iN)<=6?parseInt(iP,10)-1+iN:(parseInt(iP,10)-1+iN)-7;iO.weekDay=iM;}
;var ii=function(iQ,iR){var iS=qx.locale.Date.getPmMarker(ig).toString()||it.PM_MARKER;iQ.ispm=(iR==iS);}
;var iv=function(iT,iU){iT.hour=parseInt(iU,10)%24;}
;var ih=function(iV,iW){iV.hour=parseInt(iW,10)%12;}
;var iy=function(iX,iY){return;}
;var iz=[eS,fS];var iA=function(ja,jb){ja.era=jb==eS?1:-1;}
;var is=[dG,gk];var ir=function(jc,jd){jc.era=jd==dG?1:-1;}
;var iC=[P,gc];var iq=function(je,jf){je.era=jf==P?1:-1;}
;var iE=[fo,fU,dP,fJ];var ie=function(jg,jh){jg.quarter=iE.indexOf(jh);}
;var iB=[eX,S,J,C];var ix=function(ji,jj){ji.quarter=iB.indexOf(jj);}
;var im={};var ik=function(jn){var jp=[g,dK];var jl=[fe,fk,eg];var js=jn.charAt(0);var jm=jp.indexOf(js)>=0;var jo=function(){var ju=jm?jp:jl;var jv=js===ju[0]?gi:ed;var jt=jn.length;var jw=p;switch(jt){case 4:jw=er;break;case 5:jw=fH;break;default:jw=p;};return [jv,jw];}
;if(!im[jn]){im[jn]={};var jk=jo();var jr=jm?qx.locale.Date.getMonthNames:qx.locale.Date.getDayNames;var jq=jr.call(qx.locale.Date,jk[1],ig,jk[0],true);for(var i=0,l=jq.length;i<l;i++ ){jq[i]=iw.escapeRegexpChars(jq[i].toString());}
;im[jn].data=jq;im[jn].func=function(jx,jy){jy=iw.escapeRegexpChars(jy);jx[jm?eh:eo]=jq.indexOf(jy);}
;}
;return im[jn];}
;iu.push({pattern:fI,regexFunc:function(jA){var jz=G;for(var i=0;i<jA;i++ ){jz+=dT;if(i===jA-1&&i!==1){jz+=dU;}
;}
;jz+=eP;return jz;}
,manipulator:il});iu.push({pattern:q,regexFunc:function(jC){var jB=G;for(var i=0;i<jC;i++ ){jB+=dT;if(i===jC-1){jB+=dU;}
;}
;jB+=eP;return jB;}
,manipulator:iF});iu.push({pattern:eU,regex:eC+is.join(fv)+eP,manipulator:ir});iu.push({pattern:eO,regex:eC+is.join(fv)+eP,manipulator:ir});iu.push({pattern:eG,regex:eC+is.join(fv)+eP,manipulator:ir});iu.push({pattern:fO,regex:eC+iC.join(fv)+eP,manipulator:iq});iu.push({pattern:o,regex:eC+iz.join(fv)+eP,manipulator:iA});iu.push({pattern:eB,regex:fl,field:dQ});iu.push({pattern:ft,regex:t,field:dQ});iu.push({pattern:b,regex:eC+iE.join(fv)+eP,manipulator:ie});iu.push({pattern:en,regex:eC+iB.join(fv)+eP,manipulator:ix});iu.push({pattern:ej,regex:fl,field:dQ});iu.push({pattern:ef,regex:t,field:dQ});iu.push({pattern:H,regex:eC+iE.join(fv)+eP,manipulator:ie});iu.push({pattern:d,regex:eC+iB.join(fv)+eP,manipulator:ix});iu.push({pattern:dY,regex:fl,manipulator:io});iu.push({pattern:fR,regex:t,manipulator:io});iu.push({pattern:eb,regex:eC+ik(eb).data.join(fv)+eP,manipulator:ik(eb).func});iu.push({pattern:fd,regex:eC+ik(fd).data.join(fv)+eP,manipulator:ik(fd).func});iu.push({pattern:ei,regex:eC+ik(ei).data.join(fv)+eP,manipulator:ik(ei).func});iu.push({pattern:fy,regex:fl,manipulator:io});iu.push({pattern:u,regex:t,manipulator:io});iu.push({pattern:ee,regex:eC+ik(ee).data.join(fv)+eP,manipulator:ik(ee).func});iu.push({pattern:fm,regex:eC+ik(fm).data.join(fv)+eP,manipulator:ik(fm).func});iu.push({pattern:fs,regex:eC+ik(fs).data.join(fv)+eP,manipulator:ik(fs).func});iu.push({pattern:W,regex:t,field:F});iu.push({pattern:fq,regex:fl,field:F});iu.push({pattern:fg,regex:dJ,field:fP});iu.push({pattern:gj,regex:t,field:fP});iu.push({pattern:fh,regex:es,field:fP});iu.push({pattern:fN,regex:eC+ik(fN).data.join(fv)+eP,manipulator:ik(fN).func});iu.push({pattern:eF,regex:eC+ik(eF).data.join(fv)+eP,manipulator:ik(eF).func});iu.push({pattern:dW,regex:eC+ik(dW).data.join(fv)+eP,manipulator:ik(dW).func});iu.push({pattern:w,regex:eC+ik(w).data.join(fv)+eP,manipulator:ik(w).func});iu.push({pattern:eA,regex:eC+ik(eA).data.join(fv)+eP,manipulator:ik(eA).func});iu.push({pattern:fx,regex:dJ,manipulator:ij});iu.push({pattern:em,regex:t,manipulator:ij});iu.push({pattern:ep,regex:eC+ik(ep).data.join(fv)+eP,manipulator:ik(ep).func});iu.push({pattern:fu,regex:eC+ik(fu).data.join(fv)+eP,manipulator:ik(fu).func});iu.push({pattern:s,regex:eC+ik(s).data.join(fv)+eP,manipulator:ik(s).func});iu.push({pattern:ff,regex:gf,manipulator:ij});iu.push({pattern:ey,regex:eC+ik(ey).data.join(fv)+eP,manipulator:ik(ey).func});iu.push({pattern:fC,regex:eC+ik(fC).data.join(fv)+eP,manipulator:ik(fC).func});iu.push({pattern:fG,regex:eC+ik(fG).data.join(fv)+eP,manipulator:ik(fG).func});iu.push({pattern:R,regex:eC+ip+fv+iD+eP,manipulator:ii});iu.push({pattern:fQ,regex:dJ,field:eD});iu.push({pattern:eM,regex:t,field:B});iu.push({pattern:ev,regex:I,field:B});iu.push({pattern:fr,regex:t,field:dS});iu.push({pattern:ew,regex:t,field:dS});iu.push({pattern:eQ,regex:t,manipulator:iv});iu.push({pattern:gd,regex:t,manipulator:iv});iu.push({pattern:f,regex:t,field:dS});iu.push({pattern:K,regex:t,field:dS});iu.push({pattern:fF,regex:t,manipulator:ih});iu.push({pattern:e,regex:t,manipulator:ih});iu.push({pattern:eN,regex:t,field:dL});iu.push({pattern:fi,regex:t,field:dL});iu.push({pattern:eR,regex:t,field:gh});iu.push({pattern:ec,regex:t,field:gh});iu.push({pattern:D,regex:fD,field:fE});iu.push({pattern:dH,regex:fD,field:fE});iu.push({pattern:eI,regex:fD,field:fE});iu.push({pattern:m,regex:fa,manipulator:iy});iu.push({pattern:dN,regex:et,manipulator:iy});}
}});}
)();
(function(){var a='format',b="short",c="HH:mm",d='_',e="stand-alone",f="HHmmsszz",g="cldr_date_format_",h="HHmm",j="narrow",k="HHmmss",l="qx.debug",m="This case should never happen.",n="cldr_time_format_",o="sat",p="abbreviated",q="wide",r="HH:mm:ss zz",s="full",t="cldr_pm",u="cldr_day_",v="_",w="cldr_month_",x="long",y="wed",z="medium",A="fri",B="cldr_am",C="tue",D="qx.locale.Date",E="mon",F="cldr_date_time_format_",G="sun",H="format",I="thu",J="HH:mm:ss",K='stand-alone';qx.Class.define(D,{statics:{__ok:qx.locale.Manager.getInstance(),getAmMarker:function(L){return this.__ok.localize(B,[],L);}
,getPmMarker:function(M){return this.__ok.localize(t,[],M);}
,getDayNames:function(length,O,S,P){var S=S?S:H;if(qx.core.Environment.get(l)){qx.core.Assert.assertInArray(length,[p,j,q]);qx.core.Assert.assertInArray(S,[H,e]);}
;var Q=[G,E,C,y,I,A,o];var R=[];for(var i=0;i<Q.length;i++ ){var N=u+S+v+length+v+Q[i];R.push(P?this.__ol(S,S===a?K:a,N,O):this.__ok.localize(N,[],O));}
;return R;}
,getDayName:function(length,Y,V,U,X){var U=U?U:H;if(qx.core.Environment.get(l)){qx.core.Assert.assertInArray(length,[p,j,q]);qx.core.Assert.assertInteger(Y);qx.core.Assert.assertInRange(Y,0,6);qx.core.Assert.assertInArray(U,[H,e]);}
;var W=[G,E,C,y,I,A,o];var T=u+U+v+length+v+W[Y];return X?this.__ol(U,U===a?K:a,T,V):this.__ok.localize(T,[],V);}
,getMonthNames:function(length,bb,be,bc){var be=be?be:H;if(qx.core.Environment.get(l)){qx.core.Assert.assertInArray(length,[p,j,q]);qx.core.Assert.assertInArray(be,[H,e]);}
;var bd=[];for(var i=0;i<12;i++ ){var ba=w+be+v+length+v+(i+1);bd.push(bc?this.__ol(be,be===a?K:a,ba,bb):this.__ok.localize(ba,[],bb));}
;return bd;}
,getMonthName:function(length,bi,bh,bg,bj){var bg=bg?bg:H;if(qx.core.Environment.get(l)){qx.core.Assert.assertInArray(length,[p,j,q]);qx.core.Assert.assertInArray(bg,[H,e]);}
;var bf=w+bg+v+length+v+(bi+1);return bj?this.__ol(bg,bg===a?K:a,bf,bh):this.__ok.localize(bf,[],bh);}
,getDateFormat:function(bm,bk){if(qx.core.Environment.get(l)){qx.core.Assert.assertInArray(bm,[b,z,x,s]);}
;var bl=g+bm;return this.__ok.localize(bl,[],bk);}
,getDateTimeFormat:function(br,bp,bn){var bq=F+br;var bo=this.__ok.localize(bq,[],bn);if(bo==bq){bo=bp;}
;return bo;}
,getTimeFormat:function(bv,bs){if(qx.core.Environment.get(l)){qx.core.Assert.assertInArray(bv,[b,z,x,s]);}
;var bu=n+bv;var bt=this.__ok.localize(bu,[],bs);if(bt!=bu){return bt;}
;switch(bv){case b:case z:return qx.locale.Date.getDateTimeFormat(h,c);case x:return qx.locale.Date.getDateTimeFormat(k,J);case s:return qx.locale.Date.getDateTimeFormat(f,r);default:throw new Error(m);};}
,getWeekStart:function(bw){var bx={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};var by=qx.locale.Date._getTerritory(bw);return bx[by]!=null?bx[by]:1;}
,getWeekendStart:function(bz){var bB={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};var bA=qx.locale.Date._getTerritory(bz);return bB[bA]!=null?bB[bA]:6;}
,getWeekendEnd:function(bC){var bD={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};var bE=qx.locale.Date._getTerritory(bC);return bD[bE]!=null?bD[bE]:0;}
,isWeekend:function(bH,bF){var bI=qx.locale.Date.getWeekendStart(bF);var bG=qx.locale.Date.getWeekendEnd(bF);if(bG>bI){return ((bH>=bI)&&(bH<=bG));}
else {return ((bH>=bI)||(bH<=bG));}
;}
,_getTerritory:function(bJ){if(bJ){var bK=bJ.split(v)[1]||bJ;}
else {bK=this.__ok.getTerritory()||this.__ok.getLanguage();}
;return bK.toUpperCase();}
,__ol:function(bN,bM,bQ,bP){var bO=this.__ok.localize(bQ,[],bP);if(bO==bQ){var bL=bQ.replace(d+bN+d,d+bM+d);return this.__ok.localize(bL,[],bP);}
else {return bO;}
;}
}});}
)();
(function(){var a="html.console",b="qx.log.appender.Native",c="log";qx.Bootstrap.define(b,{statics:{process:function(d){if(qx.core.Environment.get(a)){var g=console[d.level]?d.level:c;if(console[g]){var f=qx.log.appender.Formatter.getFormatter();var e=f.toText(d);console[g](e);}
;}
;}
},defer:function(h){qx.log.Logger.register(h);}
});}
)();
(function(){var a='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',b="Enter",c="px",d='</div>',f="longtap",g='.qxconsole .messages .user-result{background:white}',h='.qxconsole .messages .level-error{background:#FFE2D5}',i="navigationbar",j="div",k="user-command",l='<div class="command">',m="Up",n='.qxconsole .command input:focus{outline:none;}',o='.qxconsole .messages .type-key{color:#565656;font-style:italic}',p="none",q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',r='.qxconsole .messages div{padding:0px 4px;}',s='.qxconsole .messages .level-debug{background:white}',t='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',u="DIV",v='.qxconsole .messages .level-user{background:#E3EFE9}',w='<div class="qxconsole">',x="",y="D",z='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',A='.qxconsole .messages .type-string{color:black;font-weight:normal;}',B='.qxconsole .control a{text-decoration:none;color:black;}',C='<div class="messages">',D='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',E='<input type="text"/>',F="clear",G='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',H="keypress",I='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',J='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',K='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',L='.qxconsole .messages .user-command{color:blue}',M="F7",N="qx.log.appender.Console",O='.qxconsole .messages .level-info{background:#DEEDFA}',P="block",Q='.qxconsole .messages .level-warn{background:#FFF7D5}',R='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',S='.qxconsole .messages .user-error{background:#FFE2D5}',T='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',U='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',V=">>> ",W="Down",X='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';qx.Class.define(N,{statics:{__om:null,__cl:null,__on:null,__oo:null,init:function(){var Y=[J,T,B,a,r,L,g,S,s,O,Q,h,v,A,X,D,I,z,o,t,q,R,K,G,n];qx.bom.Stylesheet.createElement(Y.join(x));var bb=[w,U,C,d,l,E,d,d];var bc=document.createElement(u);bc.innerHTML=bb.join(x);var ba=bc.firstChild;document.body.appendChild(bc.firstChild);this.__om=ba;this.__cl=ba.childNodes[1];this.__on=ba.childNodes[2].firstChild;this.__or();qx.log.Logger.register(this);qx.core.ObjectRegistry.register(this);}
,dispose:function(){qx.event.Registration.removeListener(document.documentElement,H,this.__jh,this);qx.log.Logger.unregister(this);}
,clear:function(){this.__cl.innerHTML=x;}
,process:function(bd){var be=qx.log.appender.Formatter.getFormatter();this.__cl.appendChild(be.toHtml(bd));this.__op();}
,__op:function(){this.__cl.scrollTop=this.__cl.scrollHeight;}
,__hF:true,toggle:function(){if(!this.__om){this.init();}
else if(this.__om.style.display==p){this.show();}
else {this.__om.style.display=p;}
;}
,show:function(){if(!this.__om){this.init();}
else {this.__om.style.display=P;this.__cl.scrollTop=this.__cl.scrollHeight;}
;}
,__oq:[],execute:function(){var bi=this.__on.value;if(bi==x){return;}
;if(bi==F){this.clear();return;}
;var bg=document.createElement(j);var bf=qx.log.appender.Formatter.getFormatter();bg.innerHTML=bf.escapeHTML(V+bi);bg.className=k;this.__oq.push(bi);this.__oo=this.__oq.length;this.__cl.appendChild(bg);this.__op();try{var bh=window.eval(bi);}
catch(bj){qx.log.Logger.error(bj);}
;if(bh!==undefined){qx.log.Logger.debug(bh);}
;}
,__or:function(e){this.__cl.style.height=(this.__om.clientHeight-this.__om.firstChild.offsetHeight-this.__om.lastChild.offsetHeight)+c;}
,__jh:function(e){if(e instanceof qx.event.type.Tap||e instanceof qx.event.type.Pointer){var bm=e.getTarget();if(bm&&bm.className&&bm.className.indexOf&&bm.className.indexOf(i)!=-1){this.toggle();}
;return;}
;var bl=e.getKeyIdentifier();if((bl==M)||(bl==y&&e.isCtrlPressed())){this.toggle();e.preventDefault();}
;if(!this.__om){return;}
;if(!qx.dom.Hierarchy.contains(this.__om,e.getTarget())){return;}
;if(bl==b&&this.__on.value!=x){this.execute();this.__on.value=x;}
;if(bl==m||bl==W){this.__oo+=bl==m?-1:1;this.__oo=Math.min(Math.max(0,this.__oo),this.__oq.length);var bk=this.__oq[this.__oo];this.__on.value=bk||x;this.__on.select();}
;}
},defer:function(bn){qx.event.Registration.addListener(document.documentElement,H,bn.__jh,bn);qx.event.Registration.addListener(document.documentElement,f,bn.__jh,bn);}
});}
)();
(function(){var c="qx.dev.ObjectSummary",d="\n",e=" Objects)\n\n",f=")\r\n",g=" (",h=" Objects)\r\n\r\n",j=": ",k=", ",l="Summary: (";qx.Class.define(c,{statics:{getInfo:function(){var m={};var t=0;var n;var p=qx.core.ObjectRegistry.getRegistry();for(var q in p){n=p[q];if(n&&n.isDisposed()===false){if(m[n.classname]==null){m[n.classname]=1;}
else {m[n.classname]++ ;}
;t++ ;}
;}
;var s=[];for(var o in m){s.push({classname:o,number:m[o]});}
;s.sort(function(a,b){return b.number-a.number;}
);var r=l+t+e;for(var i=0;i<s.length;i++ ){r+=s[i].number+j+s[i].classname+d;}
;return r;}
,getNewObjects:function(){var v={};var F=0;var w;var A=qx.core.ObjectRegistry.getRegistry();var y={};var E;for(var B in A){w=A[B];if(w&&w.isDisposed()===false){var z=w.classname;if(v[z]==null){v[z]=1;}
else {v[z]++ ;}
;E=y[z];if(E==null){E=y[z]=[];}
;E[E.length]=w.toHashCode();F++ ;}
;}
;if(!this._m_dObjectList){this._m_dObjectList={};}
;var u={};for(var z in v){if(!(z in this._m_dObjectList)){this._m_dObjectList[z]=0;}
;if(this._m_dObjectList[z]>=0&&this._m_dObjectList[z]<v[z]){u[z]=v[z]-this._m_dObjectList[z];}
;}
;this._m_dObjectList=v;var D=[];for(var x in u){D.push({classname:x,number:u[x],aHashCode:y[x]});}
;D.sort(function(a,b){return b.number-a.number;}
);var C=l+F+h;for(var i=0;i<D.length;i++ ){C+=D[i].number+j+D[i].classname+g+D[i].aHashCode.join(k)+f;}
;return C;}
}});}
)();


qx.$$loader.init();

