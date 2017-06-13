(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"locale":"en","locale.variant":"US","qx.allowUrlSettings":true,"qx.allowUrlVariants":true,"qx.application":"demobrowser.demo.bom.Background","qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.whitespace":true,"qx.theme":"qx.theme.Indigo"};
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
  packages : {"0":{"uris":["__out__:demobrowser.demo.bom.Background.2f2e1141e41d.js"]}},
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

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_E":"ccc","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, MMM d, y G","cldr_date_time_format_GyMMMd":"MMM d, y G","cldr_date_time_format_H":"HH","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_Hmsv":"HH:mm:ss v","cldr_date_time_format_Hmv":"HH:mm v","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMW":"'week' W 'of' MMMM","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_hmsv":"h:mm:ss a v","cldr_date_time_format_hmv":"h:mm a v","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_date_time_format_yw":"'week' w 'of' y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_short_fri":"Fr","cldr_day_format_short_mon":"Mo","cldr_day_format_short_sat":"Sa","cldr_day_format_short_sun":"Su","cldr_day_format_short_thu":"Th","cldr_day_format_short_tue":"Tu","cldr_day_format_short_wed":"We","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.y","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_E":"ccc","cldr_date_time_format_EHm":"E, HH:mm","cldr_date_time_format_EHms":"E, HH:mm:ss","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E, h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, d. MMM y G","cldr_date_time_format_GyMMMd":"d. MMM y G","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_Hmsv":"HH:mm:ss v","cldr_date_time_format_Hmv":"HH:mm v","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMMW":"'Woche' W 'im' MMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h 'Uhr' a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_hmsv":"h:mm:ss a v","cldr_date_time_format_hmv":"h:mm a v","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"E, d.M.y","cldr_date_time_format_yMM":"MM.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"d. MMM y","cldr_date_time_format_yMMdd":"dd.MM.y","cldr_date_time_format_yMd":"d.M.y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_date_time_format_yw":"'Woche' w 'des' 'Jahres' y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_short_fri":"Fr.","cldr_day_format_short_mon":"Mo.","cldr_day_format_short_sat":"Sa.","cldr_day_format_short_sun":"So.","cldr_day_format_short_thu":"Do.","cldr_day_format_short_tue":"Di.","cldr_day_format_short_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_short_fri":"Fr.","cldr_day_stand-alone_short_mon":"Mo.","cldr_day_stand-alone_short_sat":"Sa.","cldr_day_stand-alone_short_sun":"So.","cldr_day_stand-alone_short_thu":"Do.","cldr_day_stand-alone_short_tue":"Di.","cldr_day_stand-alone_short_wed":"Mi.","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan.","cldr_month_format_abbreviated_10":"Okt.","cldr_month_format_abbreviated_11":"Nov.","cldr_month_format_abbreviated_12":"Dez.","cldr_month_format_abbreviated_2":"Feb.","cldr_month_format_abbreviated_3":"März","cldr_month_format_abbreviated_4":"Apr.","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Juni","cldr_month_format_abbreviated_7":"Juli","cldr_month_format_abbreviated_8":"Aug.","cldr_month_format_abbreviated_9":"Sep.","cldr_month_format_narrow_1":"J","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"J","cldr_month_format_narrow_7":"J","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Jun","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"Januar","cldr_month_stand-alone_wide_10":"Oktober","cldr_month_stand-alone_wide_11":"November","cldr_month_stand-alone_wide_12":"Dezember","cldr_month_stand-alone_wide_2":"Februar","cldr_month_stand-alone_wide_3":"März","cldr_month_stand-alone_wide_4":"April","cldr_month_stand-alone_wide_5":"Mai","cldr_month_stand-alone_wide_6":"Juni","cldr_month_stand-alone_wide_7":"Juli","cldr_month_stand-alone_wide_8":"August","cldr_month_stand-alone_wide_9":"September","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_E":"ccc","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, MMM d, y G","cldr_date_time_format_GyMMMd":"MMM d, y G","cldr_date_time_format_H":"HH","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_Hmsv":"HH:mm:ss v","cldr_date_time_format_Hmv":"HH:mm v","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMW":"'week' W 'of' MMMM","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_hmsv":"h:mm:ss a v","cldr_date_time_format_hmv":"h:mm a v","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_date_time_format_yw":"'week' w 'of' y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_short_fri":"Fr","cldr_day_format_short_mon":"Mo","cldr_day_format_short_sat":"Sa","cldr_day_format_short_sun":"Su","cldr_day_format_short_thu":"Th","cldr_day_format_short_tue":"Tu","cldr_day_format_short_wed":"We","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"»","alternateQuotationStart":"«","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/y","cldr_date_time_format_E":"E","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E d MMM y G","cldr_date_time_format_GyMMMd":"d MMM y G","cldr_date_time_format_H":"HH 'h'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_Hmsv":"HH:mm:ss v","cldr_date_time_format_Hmv":"HH:mm v","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E dd/MM","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMW":"'semaine' W 'de' MMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_Md":"dd/MM","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_hmsv":"h:mm:ss a v","cldr_date_time_format_hmv":"h:mm a v","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"MM/y","cldr_date_time_format_yMEd":"E dd/MM/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"dd/MM/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_date_time_format_yw":"'semaine' w 'de' y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_short_fri":"ve","cldr_day_format_short_mon":"lu","cldr_day_format_short_sat":"sa","cldr_day_format_short_sun":"di","cldr_day_format_short_thu":"je","cldr_day_format_short_tue":"ma","cldr_day_format_short_wed":"me","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_short_fri":"ve","cldr_day_stand-alone_short_mon":"lu","cldr_day_stand-alone_short_sat":"sa","cldr_day_stand-alone_short_sun":"di","cldr_day_stand-alone_short_thu":"je","cldr_day_stand-alone_short_tue":"ma","cldr_day_stand-alone_short_wed":"me","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_narrow_1":"J","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"J","cldr_month_format_narrow_7":"J","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_abbreviated_1":"janv.","cldr_month_stand-alone_abbreviated_10":"oct.","cldr_month_stand-alone_abbreviated_11":"nov.","cldr_month_stand-alone_abbreviated_12":"déc.","cldr_month_stand-alone_abbreviated_2":"févr.","cldr_month_stand-alone_abbreviated_3":"mars","cldr_month_stand-alone_abbreviated_4":"avr.","cldr_month_stand-alone_abbreviated_5":"mai","cldr_month_stand-alone_abbreviated_6":"juin","cldr_month_stand-alone_abbreviated_7":"juil.","cldr_month_stand-alone_abbreviated_8":"août","cldr_month_stand-alone_abbreviated_9":"sept.","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"janvier","cldr_month_stand-alone_wide_10":"octobre","cldr_month_stand-alone_wide_11":"novembre","cldr_month_stand-alone_wide_12":"décembre","cldr_month_stand-alone_wide_2":"février","cldr_month_stand-alone_wide_3":"mars","cldr_month_stand-alone_wide_4":"avril","cldr_month_stand-alone_wide_5":"mai","cldr_month_stand-alone_wide_6":"juin","cldr_month_stand-alone_wide_7":"juillet","cldr_month_stand-alone_wide_8":"août","cldr_month_stand-alone_wide_9":"septembre","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser.demo"],"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/decoration/Indigo/font/JosefinSlab-SemiBold.ttf":"qx","qx/decoration/Indigo/font/JosefinSlab-SemiBold.woff":"qx","qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/checked.png":[6,6,"png","qx"],"qx/decoration/Modern/form/tooltip-error-arrow-right.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/undetermined.png":[6,2,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Simple/arrows/down-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/down-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/down.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/forward.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/left-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/left.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/rewind.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/right-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/right.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/up-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/up-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/up.gif":[7,4,"gif","qx"],"qx/decoration/Simple/checkbox/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/checked.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Simple/checkbox/undetermined.png":[6,2,"png","qx"],"qx/decoration/Simple/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Simple/colorselector/brightness-handle.gif":[35,11,"gif","qx"],"qx/decoration/Simple/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Simple/colorselector/huesaturation-handle.gif":[11,11,"gif","qx"],"qx/decoration/Simple/cursors/alias.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/copy.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/move.gif":[13,9,"gif","qx"],"qx/decoration/Simple/cursors/nodrop.gif":[20,20,"gif","qx"],"qx/decoration/Simple/menu/checkbox-invert.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/checkbox.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/radiobutton-invert.gif":[16,5,"gif","qx"],"qx/decoration/Simple/menu/radiobutton.gif":[16,5,"gif","qx"],"qx/decoration/Simple/splitpane/knob-horizontal.png":[1,8,"png","qx"],"qx/decoration/Simple/splitpane/knob-vertical.png":[8,1,"png","qx"],"qx/decoration/Simple/table/ascending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/ascending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/boolean-false.png":[11,11,"png","qx"],"qx/decoration/Simple/table/boolean-true.png":[11,11,"png","qx"],"qx/decoration/Simple/table/descending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/descending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/select-column-order.png":[10,9,"png","qx"],"qx/decoration/Simple/tabview/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/window/close-white.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/maximize-white.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/maximize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize-white.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/restore-white.gif":[8,9,"gif","qx"],"qx/decoration/Simple/window/restore.gif":[8,9,"gif","qx"],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-44],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-22],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/icon/Tango/48/devices/drive-optical.png":[48,48,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.png":[1,1,"png","qx"]},"translations":{"C":{},"de":{},"de_DE":{},"en":{},"en_US":{},"fr":{},"fr_FR":{}}};
(function(){var b=".prototype",c="function",d="AsyncFunction",e="Boolean",f="Error",g="Object.keys requires an object as argument.",h="constructor",j="warn",k="default",m="Null",n="hasOwnProperty",o="Undefined",p="string",q='undefined',r="toLocaleString",s="error",t="toString",u="Blob",v="qx.debug",w="()",x="RegExp",y="dynamic",z="Object",A="String",B="info",C="BROKEN_IE",D="isPrototypeOf",E="Date",F="",G="qx.Bootstrap",H="Function",I="]",J="Cannot call super class. Method is not derived: ",K="Array",L="[Class ",M="valueOf",N="Number",O="FormData",P="Class",Q="debug",R="ES5",S=".",T="ArrayBuffer",U="propertyIsEnumerable",V="object";if(!window.qx){window.qx={};}
;qx.Bootstrap={genericToString:function(){return L+this.classname+I;}
,createNamespace:function(name,W){var ba=name.split(S);var Y=ba[0];var parent=qx.$$namespaceRoot&&qx.$$namespaceRoot[Y]?qx.$$namespaceRoot:window;for(var i=0,X=ba.length-1;i<X;i++ ,Y=ba[i]){if(!parent[Y]){parent=parent[Y]={};}
else {parent=parent[Y];}
;}
;parent[Y]=W;return Y;}
,setDisplayName:function(bc,bb,name){bc.displayName=bb+S+name+w;}
,setDisplayNames:function(be,bd){for(var name in be){var bf=be[name];if(bf instanceof Function){bf.displayName=bd+S+name+w;}
;}
;}
,base:function(bg,bh){if(qx.Bootstrap.DEBUG){if(!qx.Bootstrap.isFunction(bg.callee.base)){throw new Error(J+bg.callee.displayName);}
;}
;if(arguments.length===1){return bg.callee.base.call(this);}
else {return bg.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}
;}
,define:function(name,bt){var bq=function(){return (typeof this==q);}
;if(!bt){bt={statics:{}};}
;var bo;var bk=null;qx.Bootstrap.setDisplayNames(bt.statics,name);if(bt.members||bt.extend){qx.Bootstrap.setDisplayNames(bt.members,name+b);bo=bt.construct||new Function;if(bt.extend){this.extendClass(bo,bo,bt.extend,name,bm);}
;var bj=bt.statics||{};for(var i=0,bl=qx.Bootstrap.keys(bj),l=bl.length;i<l;i++ ){var bi=bl[i];bo[bi]=bj[bi];}
;bk=bo.prototype;bk.base=qx.Bootstrap.base;bk.name=bk.classname=name;var br=bt.members||{};var bi,bp;for(var i=0,bl=qx.Bootstrap.keys(br),l=bl.length;i<l;i++ ){bi=bl[i];bp=br[bi];if(bp instanceof Function&&bk[bi]){bp.base=bk[bi];}
;bk[bi]=bp;}
;}
else {bo=bt.statics||{};if(qx.Bootstrap.$$registry&&qx.Bootstrap.$$registry[name]){var bs=qx.Bootstrap.$$registry[name];if(this.keys(bo).length!==0){if(bt.defer){bt.defer(bo,bk);}
;for(var bn in bo){bs[bn]=bo[bn];}
;return bs;}
;}
;}
;bo.$$type=P;if(!bo.hasOwnProperty(t)){bo.toString=this.genericToString;}
;var bm=name?this.createNamespace(name,bo):F;bo.classname=name;if(!bq()){try{bo.name=name;}
catch(bu){}
;}
;bo.basename=bm;bo.$$events=bt.events;if(bt.defer){this.addPendingDefer(bo,function(){bt.defer(bo,bk);}
);}
;if(name!=null){qx.Bootstrap.$$registry[name]=bo;}
;return bo;}
};qx.Bootstrap.define(G,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var bv=true;if(qx.$$environment&&qx.$$environment[v]===false){bv=false;}
;return bv;}
)(),getEnvironmentSetting:function(bw){if(qx.$$environment){return qx.$$environment[bw];}
;}
,setEnvironmentSetting:function(bx,by){if(!qx.$$environment){qx.$$environment={};}
;if(qx.$$environment[bx]===undefined){qx.$$environment[bx]=by;}
;}
,createNamespace:qx.Bootstrap.createNamespace,setRoot:function(bz){qx.$$namespaceRoot=bz;}
,base:qx.Bootstrap.base,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(clazz,construct,superClass,name,basename){var superproto=superClass.prototype;var helper=new Function();helper.prototype=superproto;var proto=new helper();clazz.prototype=proto;proto.name=proto.classname=name;proto.basename=basename;construct.base=superClass;clazz.superclass=superClass;construct.self=clazz.constructor=proto.constructor=clazz;}
,__a:[],addPendingDefer:function(bB,bA){if(qx.$$loader&&qx.$$loader.delayDefer){this.__a.push(bB);bB.$$pendingDefer=bA;}
else {bA.call(bB);}
;}
,executePendingDefers:function(bH){var bF=function(bL){if(bL.environment){var bJ=bL.environment.required;if(bJ){for(var bM in bJ){var bI=bJ[bM];if(bI.load&&bI.className){bD(bI.className);}
;}
;}
;}
;for(var bM in bL.dependsOn){var bK=bL.dependsOn[bM];if(bK.require||bK.usage===y){bD(bM);}
;}
;}
;var bD=function(bN){var bP=bE(bN);if(bP.$$deferComplete){return;}
;var bO=bP.$$dbClassInfo;if(bO){bF(bO);}
;bC(bP);}
;var bC=function(bR){var bQ=bR.$$pendingDefer;if(bQ){delete bR.$$pendingDefer;bR.$$deferComplete=true;bQ.call(bR);}
;}
;var bE=function(name){var bV=qx.Bootstrap.getByName(name);if(!bV){var bT=name.split(S);var bW=bT[0];var bX=qx.$$namespaceRoot&&qx.$$namespaceRoot[bW]?qx.$$namespaceRoot:window;var bS=bX;for(var i=0,bU=bT.length-1;bS&&i<bU;i++ ,bW=bT[i]){bS=bS[bW];}
;if(bS!=bX){bV=bS;}
;}
;return bV;}
;if(!bH){var bG=this.__a;this.__a=[];bG.forEach(bC);return;}
;bF(bH);}
,getByName:function(name){return qx.Bootstrap.$$registry[name];}
,$$registry:{},objectGetLength:function(bY){return qx.Bootstrap.keys(bY).length;}
,objectMergeWith:function(cc,ca,ce){if(ce===undefined){ce=true;}
;for(var cd in ca){if(ce||cc[cd]===undefined){cc[cd]=ca[cd];}
;}
;return cc;}
,__b:[D,n,r,t,M,U,h],keys:({"ES5":Object.keys,"BROKEN_IE":function(cf){if(cf===null||(typeof cf!==V&&typeof cf!==c)){throw new TypeError(g);}
;var cg=[];var ci=Object.prototype.hasOwnProperty;for(var cj in cf){if(ci.call(cf,cj)){cg.push(cj);}
;}
;var ch=qx.Bootstrap.__b;for(var i=0,a=ch,l=a.length;i<l;i++ ){if(ci.call(cf,a[i])){cg.push(a[i]);}
;}
;return cg;}
,"default":function(ck){if(ck===null||(typeof ck!==V&&typeof ck!==c)){throw new TypeError(g);}
;var cl=[];var cm=Object.prototype.hasOwnProperty;for(var cn in ck){if(cm.call(ck,cn)){cl.push(cn);}
;}
;return cl;}
})[typeof (Object.keys)===c?R:(function(){for(var co in {toString:1}){return co;}
;}
)()!==t?C:k],__c:{"[object String]":A,"[object Array]":K,"[object Object]":z,"[object RegExp]":x,"[object Number]":N,"[object Boolean]":e,"[object Date]":E,"[object Function]":H,"[object Error]":f,"[object Blob]":u,"[object ArrayBuffer]":T,"[object FormData]":O},bind:function(cq,self,cr){var cp=Array.prototype.slice.call(arguments,2,arguments.length);return function(){var cs=Array.prototype.slice.call(arguments,0,arguments.length);return cq.apply(self,cp.concat(cs));}
;}
,firstUp:function(ct){return ct.charAt(0).toUpperCase()+ct.substr(1);}
,firstLow:function(cu){return cu.charAt(0).toLowerCase()+cu.substr(1);}
,getClass:function(cw){if(cw===undefined){return o;}
else if(cw===null){return m;}
;var cv=Object.prototype.toString.call(cw);return (qx.Bootstrap.__c[cv]||cv.slice(8,-1));}
,isString:function(cx){return (cx!==null&&(typeof cx===p||qx.Bootstrap.getClass(cx)===A||cx instanceof String||(!!cx&&!!cx.$$isString)));}
,isArray:function(cy){return (cy!==null&&(cy instanceof Array||(cy&&qx.data&&qx.data.IListData&&qx.util.OOUtil.hasInterface(cy.constructor,qx.data.IListData))||qx.Bootstrap.getClass(cy)===K||(!!cy&&!!cy.$$isArray)));}
,isObject:function(cz){return (cz!==undefined&&cz!==null&&qx.Bootstrap.getClass(cz)===z);}
,isFunction:function(cA){return qx.Bootstrap.getClass(cA)===H;}
,isFunctionOrAsyncFunction:function(cB){var name=qx.Bootstrap.getClass(cB);return ((name===H)||(name===d));}
,$$logs:[],debug:function(cD,cC){qx.Bootstrap.$$logs.push([Q,arguments]);}
,info:function(cF,cE){qx.Bootstrap.$$logs.push([B,arguments]);}
,warn:function(cH,cG){qx.Bootstrap.$$logs.push([j,arguments]);}
,error:function(cJ,cI){qx.Bootstrap.$$logs.push([s,arguments]);}
,trace:function(cK){}
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
(function(){var a="qx.core.Environment",b="default",c=' type)',d="&",e="qx/static/blank.html",f="true",g="|",h="qx.core.Environment for a list of predefined keys.",j="false",k='] found, and no default ("default") given',l=":",m='" (',n=' in variants [',o=".",p="qx.allowUrlSettings",q='No match for variant "',r=" is not a valid key. Please see the API-doc of ",s="qxenv";qx.Bootstrap.define(a,{statics:{_checks:{},_asyncChecks:{},__d:{},_checksMap:{},_defaults:{"true":true,"qx.allowUrlSettings":false,"qx.allowUrlVariants":false,"qx.debug.property.level":0,"qx.debug":true,"qx.debug.ui.queue":true,"qx.debug.touchpad.detection":false,"qx.aspects":false,"qx.dynlocale":true,"qx.dyntheme":true,"qx.blankpage":e,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.optimization.basecalls":false,"qx.optimization.comments":false,"qx.optimization.privates":false,"qx.optimization.strings":false,"qx.optimization.variables":false,"qx.optimization.variants":false,"module.databinding":true,"module.logger":true,"module.property":true,"module.events":true,"qx.nativeScrollBars":false,"qx.automaticMemoryManagement":true,"qx.promise":true,"qx.promise.warnings":true,"qx.promise.longStackTraces":true},get:function(w){if(this.__d[w]!=undefined){return this.__d[w];}
;var y=this._checks[w];if(y){var u=y();this.__d[w]=u;return u;}
;var t=this._getClassNameFromEnvKey(w);if(t[0]!=undefined){var x=t[0];var v=t[1];var u=x[v]();this.__d[w]=u;return u;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(w+r+h);qx.Bootstrap.trace(this);}
;}
,_getClassNameFromEnvKey:function(D){var F=this._checksMap;if(F[D]!=undefined){var A=F[D];var E=A.lastIndexOf(o);if(E>-1){var C=A.slice(0,E);var z=A.slice(E+1);var B=qx.Bootstrap.getByName(C);if(B!=undefined){return [B,z];}
;}
;}
;return [undefined,undefined];}
,getAsync:function(H,K,self){var L=this;if(this.__d[H]!=undefined){window.setTimeout(function(){K.call(self,L.__d[H]);}
,0);return;}
;var I=this._asyncChecks[H];if(I){I(function(N){L.__d[H]=N;K.call(self,N);}
);return;}
;var G=this._getClassNameFromEnvKey(H);if(G[0]!=undefined){var J=G[0];var M=G[1];J[M](function(O){L.__d[H]=O;K.call(self,O);}
);return;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(H+r+h);qx.Bootstrap.trace(this);}
;}
,select:function(Q,P){return this.__e(this.get(Q),P);}
,selectAsync:function(S,R,self){this.getAsync(S,function(T){var U=this.__e(S,R);U.call(self,T);}
,this);}
,__e:function(Y,X){var W=X[Y];if(X.hasOwnProperty(Y)){return W;}
;for(var ba in X){if(ba.indexOf(g)!=-1){var V=ba.split(g);for(var i=0;i<V.length;i++ ){if(V[i]==Y){return X[ba];}
;}
;}
;}
;if(X[b]!==undefined){return X[b];}
;if(qx.Bootstrap.DEBUG){throw new Error(q+Y+m+(typeof Y)+c+n+qx.Bootstrap.keys(X)+k);}
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
,__g:function(){if(window.document&&window.document.location){var bo=window.document.location.search.slice(1).split(d);for(var i=0;i<bo.length;i++ ){var br=bo[i].split(l);if(br.length!=3||br[0]!=s){continue;}
;var bp=br[1];var bq=decodeURIComponent(br[2]);if(bq==f){bq=true;}
else if(bq==j){bq=false;}
else if(/^(\d|\.)+$/.test(bq)){bq=parseFloat(bq);}
;this._checks[bp]=this.__h(bq);}
;}
;}
,__h:function(bs){return qx.Bootstrap.bind(function(bt){return bt;}
,null,bs);}
},defer:function(bu){bu._initDefaultQxValues();bu.__f();if(bu.get(p)===true){bu.__g();}
;}
});}
)();
(function(){var a="ecmascript.string.startsWith",b="function",c="AsyncFunction",d="ecmascript.array.indexof",g="qx.bom.client.EcmaScript",h="ecmascript.array.foreach",i="ecmascript.array.findIndex",j="ecmascript.array.reduceright",k="stack",l="ecmascript.array.map",m="ecmascript.date.parse",n="2001-02-03T04:05:06.007Z",o="ecmascript.object.keys",p="ecmascript.string.trim",q="ecmascript.array.reduce",r="ecmascript.array.every",s="[native code]",t="ecmascript.array.filter",u="ecmascript.mutationobserver",v="[object Error]",w="ecmascript.string.endsWith",x="2001-02-03T04:05:06.007",y="ecmascript.array.some",z="stacktrace",A="ecmascript.error.toString",B="ecmascript.function.bind",C="ecmascript.promise.native",D="ecmascript.array.find",E="ecmascript.array.lastindexof",F="f = async function(){};",G="e",H="ecmascript.error.stacktrace",I="undefined",J="ecmascript.function.async",K="ecmascript.date.now";qx.Bootstrap.define(g,{statics:{getStackTrace:function(){var L;var e=new Error(G);L=e.stack?k:e.stacktrace?z:null;if(!L){try{throw e;}
catch(M){e=M;}
;}
;return e.stacktrace?z:e.stack?k:null;}
,getMutationObserver:function(){return typeof MutationObserver!=I;}
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
,getErrorToString:function(){return typeof Error.prototype.toString==b&&Error.prototype.toString()!==v;}
,getFunctionBind:function(){return typeof Function.prototype.bind===b;}
,getAsyncFunction:function(){var f;try{eval(F);}
catch(e){return false;}
;return qx.Bootstrap.getClass(f)===c;}
,getObjectKeys:function(){return !!Object.keys;}
,getDateNow:function(){return !!Date.now;}
,getDateParse:function(){return typeof Date.parse===b&&(Date.parse(x)!=Date.parse(n));}
,getStringStartsWith:function(){return typeof String.prototype.startsWith===b;}
,getStringEndsWith:function(){return typeof String.prototype.endsWith===b;}
,getStringTrim:function(){return typeof String.prototype.trim===b;}
,getPromiseNative:function(){return typeof window.Promise!==I&&window.Promise.toString().indexOf(s)!==-1;}
},defer:function(N){qx.core.Environment.add(d,N.getArrayIndexOf);qx.core.Environment.add(E,N.getArrayLastIndexOf);qx.core.Environment.add(h,N.getArrayForEach);qx.core.Environment.add(t,N.getArrayFilter);qx.core.Environment.add(l,N.getArrayMap);qx.core.Environment.add(y,N.getArraySome);qx.core.Environment.add(D,N.getArrayFind);qx.core.Environment.add(i,N.getArrayFindIndex);qx.core.Environment.add(r,N.getArrayEvery);qx.core.Environment.add(q,N.getArrayReduce);qx.core.Environment.add(j,N.getArrayReduceRight);qx.core.Environment.add(K,N.getDateNow);qx.core.Environment.add(m,N.getDateParse);qx.core.Environment.add(A,N.getErrorToString);qx.core.Environment.add(H,N.getStackTrace);qx.core.Environment.add(B,N.getFunctionBind);qx.core.Environment.add(o,N.getObjectKeys);qx.core.Environment.add(a,N.getStringStartsWith);qx.core.Environment.add(w,N.getStringEndsWith);qx.core.Environment.add(p,N.getStringTrim);qx.core.Environment.add(J,N.getAsyncFunction);qx.core.Environment.add(u,N.getMutationObserver);qx.core.Environment.add(C,N.getPromiseNative);}
});}
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
(function(){var a="ecmascript.object.keys",b="qx.lang.normalize.Object";qx.Bootstrap.define(b,{statics:{keys:qx.Bootstrap.keys},defer:function(c){if(!qx.core.Environment.get(a)){Object.keys=c.keys;}
;}
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
(function(){var a="ecmascript.error.toString",b="qx.lang.normalize.Error",c=": ",d="Error",e="";qx.Bootstrap.define(b,{statics:{toString:function(){var name=this.name||d;var f=this.message||e;if(name===e&&f===e){return d;}
;if(name===e){return f;}
;if(f===e){return name;}
;return name+c+f;}
},defer:function(g){if(!qx.core.Environment.get(a)){Error.prototype.toString=g.toString;}
;}
});}
)();
(function(){var a="qx.lang.normalize.Date",b="ecmascript.date.now",c="Z",d="+",e="ecmascript.date.parse";qx.Bootstrap.define(a,{statics:{now:function(){return +new Date();}
,parse:function(h){var f=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(h);if(!f){return Date.originalParse(h);}
;var g=[4,5,6,7].every(function(i){return f[i]===undefined;}
);[1,4,5,6,7,10,11].forEach(function(i){f[i]=+f[i]||0;}
);f[2]=(+f[2]||1)-1;f[3]=+f[3]||1;if(f[8]!==c&&f[9]===undefined&&!g){return new Date(f[1],f[2],f[3],f[4],f[5],f[6],f[7]).getTime();}
;var j=0;if(f[8]!==c){j=f[10]*60+f[11];if(f[9]===d){j=-j;}
;}
;return Date.UTC(f[1],f[2],f[3],f[4],f[5]+j,f[6],f[7]);}
},defer:function(k){if(!qx.core.Environment.get(b)){Date.now=k.now;}
;if(!qx.core.Environment.get(e)){Date.originalParse=Date.parse||function(l){return NaN;}
;Date.parse=k.parse;}
;}
});}
)();
(function(){var a="function",b="Length is 0 and no second argument given",c="qx.lang.normalize.Array",d="ecmascript.array.indexof",e="ecmascript.array.foreach",f="ecmascript.array.findIndex",g="filter",h="ecmascript.array.reduceright",j="indexOf",k="ecmascript.array.map",m="reduceRight",n="qx.debug",o="lastIndexOf",p="some",q="find",r="ecmascript.array.reduce",s="ecmascript.array.every",t="ecmascript.array.filter",u="findIndex",v="ecmascript.array.some",w="First argument is not callable",x="every",y="ecmascript.array.lastindexof",z="ecmascript.array.find",A="reduce",B="forEach",C="map";qx.Bootstrap.define(c,{statics:{indexOf:function(D,E){if(E==null){E=0;}
else if(E<0){E=Math.max(0,this.length+E);}
;for(var i=E;i<this.length;i++ ){if(this[i]===D){return i;}
;}
;return -1;}
,lastIndexOf:function(F,G){if(G==null){G=this.length-1;}
else if(G<0){G=Math.max(0,this.length+G);}
;for(var i=G;i>=0;i-- ){if(this[i]===F){return i;}
;}
;return -1;}
,forEach:function(H,I){var l=this.length;for(var i=0;i<l;i++ ){var J=this[i];if(J!==undefined){H.call(I||window,J,i,this);}
;}
;}
,filter:function(N,K){var L=[];var l=this.length;for(var i=0;i<l;i++ ){var M=this[i];if(M!==undefined){if(N.call(K||window,M,i,this)){L.push(this[i]);}
;}
;}
;return L;}
,map:function(R,O){var P=[];var l=this.length;for(var i=0;i<l;i++ ){var Q=this[i];if(Q!==undefined){P[i]=R.call(O||window,Q,i,this);}
;}
;return P;}
,some:function(S,T){var l=this.length;for(var i=0;i<l;i++ ){var U=this[i];if(U!==undefined){if(S.call(T||window,U,i,this)){return true;}
;}
;}
;return false;}
,every:function(V,W){var l=this.length;for(var i=0;i<l;i++ ){var X=this[i];if(X!==undefined){if(!V.call(W||window,X,i,this)){return false;}
;}
;}
;return true;}
,find:function(Y,ba){if(qx.core.Environment.get(n)){qx.core.Assert.assertFunction(Y);}
;var l=this.length;for(var i=0;i<l;i++ ){var bb=this[i];if(Y.call(ba||window,bb,i,this)){return bb;}
;}
;return undefined;}
,findIndex:function(bc,bd){if(qx.core.Environment.get(n)){qx.core.Assert.assertFunction(bc);}
;var l=this.length;for(var i=0;i<l;i++ ){var be=this[i];if(bc.call(bd||window,be,i,this)){return i;}
;}
;return -1;}
,reduce:function(bf,bg){if(typeof bf!==a){throw new TypeError(w);}
;if(bg===undefined&&this.length===0){throw new TypeError(b);}
;var bh=bg===undefined?this[0]:bg;for(var i=bg===undefined?1:0;i<this.length;i++ ){if(i in this){bh=bf.call(undefined,bh,this[i],i,this);}
;}
;return bh;}
,reduceRight:function(bi,bj){if(typeof bi!==a){throw new TypeError(w);}
;if(bj===undefined&&this.length===0){throw new TypeError(b);}
;var bk=bj===undefined?this[this.length-1]:bj;for(var i=bj===undefined?this.length-2:this.length-1;i>=0;i-- ){if(i in this){bk=bi.call(undefined,bk,this[i],i,this);}
;}
;return bk;}
},defer:function(bl){var bm=function(bn,name){if(!qx.core.Environment.get(bn)){Object.defineProperty(Array.prototype,name,{enumerable:false,value:bl[name]});}
;}
;bm(d,j);bm(y,o);bm(e,B);bm(t,g);bm(k,C);bm(v,p);bm(z,q);bm(f,u);bm(s,x);bm(r,A);bm(h,m);}
});}
)();
(function(){var a="qx.lang.Type",b="Error",c="RegExp",d="Date",e="Number",f="Boolean";qx.Bootstrap.define(a,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isFunctionOrAsyncFunction:qx.Bootstrap.isFunctionOrAsyncFunction,isRegExp:function(g){return this.getClass(g)===c;}
,isNumber:function(h){return (h!==null&&(this.getClass(h)===e||h instanceof Number));}
,isBoolean:function(i){return (i!==null&&(this.getClass(i)===f||i instanceof Boolean));}
,isDate:function(j){return (j!==null&&(this.getClass(j)===d||j instanceof Date));}
,isError:function(k){return (k!==null&&(this.getClass(k)===b||k instanceof Error));}
}});}
)();
(function(){var a=" != ",b="qx.core.Object",c="Expected value to be an array but found ",d="' (rgb(",f=") was fired.",g="Expected value to be an integer >= 0 but found ",h="' to be not equal with '",j="' to '",k="Expected object '",m="Called assertTrue with '",n="Expected value to be a map but found ",o="The function did not raise an exception!",p="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",s="' to implement the interface '",t="Expected value to be null but found ",u="Invalid argument 'type'",v="Called assert with 'false'",w="Assertion error! ",x="'",y="null",z="' but found '",A="'undefined'",B=",",C="' must must be a key of the map '",D="Expected '",E="The String '",F="Expected value to be a string but found ",G="Event (",H="Expected value to be the CSS color '",I="!",J="Expected value not to be undefined but found undefined!",K="qx.util.ColorUtil",L="The value '%1' must not have any of the values defined in the array '%2'",M=": ",N="The raised exception does not have the expected type! ",O=") not fired.",P="'!",Q="qx.core.Assert",R="",S="Expected value to be typeof object but found ",T="' but found ",U="' (identical) but found '",V="' must have any of the values defined in the array '",W="Expected value to be a number but found ",X="Expected value to be typeof function or typeof async function but found ",Y="Called assertFalse with '",bN="qx.ui.core.Widget",bO="]",bP="Expected value to be a qooxdoo object but found ",bJ="' arguments.",bK="Expected value '%1' to be in the range '%2'..'%3'!",bL="Array[",bM="' does not match the regular expression '",bT="' to be not identical with '",bU="Expected [",bV="' arguments but found '",ck="', which cannot be converted to a CSS color!",bQ=", ",bR="qx.core.AssertionError",bS="Expected value to be a boolean but found ",bF="Expected value not to be null but found null!",bY="))!",bI="Expected value to be a qooxdoo widget but found ",ca="The value '",cb="Expected value to be typeof '",bH="\n Stack trace: \n",bW="Expected value to be typeof function but found ",cj="Expected value to be an integer but found ",bX="Called fail().",cc="The parameter 're' must be a string or a regular expression.",cd=")), but found value '",ce="qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'",cg="Expected value to be a number >= 0 but found ",ch="Expected value to be instanceof '",ci="], but found [",bG="Wrong number of arguments given. Expected '",cf="object";qx.Bootstrap.define(Q,{statics:{__i:true,__j:function(cl,cm){var cq=R;for(var i=1,l=arguments.length;i<l;i++ ){cq=cq+this.__k(arguments[i]===undefined?A:arguments[i]);}
;var cp=R;if(cq){cp=cl+M+cq;}
else {cp=cl;}
;var co=w+cp;if(qx.Class&&qx.Class.isDefined(bR)){var cn=new qx.core.AssertionError(cl,cq);if(this.__i){qx.Bootstrap.error(co+bH+cn.getStackTrace());}
;throw cn;}
else {if(this.__i){qx.Bootstrap.error(co);}
;throw new Error(co);}
;}
,__k:function(cs){var cr;if(cs===null){cr=y;}
else if(qx.lang.Type.isArray(cs)&&cs.length>10){cr=bL+cs.length+bO;}
else if((cs instanceof Object)&&(cs.toString==null)){cr=qx.lang.Json.stringify(cs,null,2);}
else {try{cr=cs.toString();}
catch(e){cr=R;}
;}
;return cr;}
,assert:function(cu,ct){cu==true||this.__j(ct||R,v);}
,fail:function(cv,cw){var cx=cw?R:bX;this.__j(cv||R,cx);}
,assertTrue:function(cz,cy){(cz===true)||this.__j(cy||R,m,cz,x);}
,assertFalse:function(cB,cA){(cB===false)||this.__j(cA||R,Y,cB,x);}
,assertEquals:function(cC,cD,cE){cC==cD||this.__j(cE||R,D,cC,z,cD,P);}
,assertNotEquals:function(cF,cG,cH){cF!=cG||this.__j(cH||R,D,cF,h,cG,P);}
,assertIdentical:function(cI,cJ,cK){cI===cJ||this.__j(cK||R,D,cI,U,cJ,P);}
,assertNotIdentical:function(cL,cM,cN){cL!==cM||this.__j(cN||R,D,cL,bT,cM,P);}
,assertNotUndefined:function(cP,cO){cP!==undefined||this.__j(cO||R,J);}
,assertUndefined:function(cR,cQ){cR===undefined||this.__j(cQ||R,p,cR,I);}
,assertNotNull:function(cT,cS){cT!==null||this.__j(cS||R,bF);}
,assertNull:function(cV,cU){cV===null||this.__j(cU||R,t,cV,I);}
,assertJsonEquals:function(cW,cX,cY){this.assertEquals(qx.lang.Json.stringify(cW),qx.lang.Json.stringify(cX),cY);}
,assertMatch:function(dc,db,da){this.assertString(dc);this.assert(qx.lang.Type.isRegExp(db)||qx.lang.Type.isString(db),cc);dc.search(db)>=0||this.__j(da||R,E,dc,bM,db.toString(),P);}
,assertArgumentsCount:function(df,dg,dh,dd){var de=df.length;(de>=dg&&de<=dh)||this.__j(dd||R,bG,dg,j,dh,bV,de,bJ);}
,assertEventFired:function(di,event,dl,dm,dn){var dj=false;var dk=function(e){if(dm){dm.call(di,e);}
;dj=true;}
;var dp;try{dp=di.addListener(event,dk,di);dl.call(di);}
catch(dq){throw dq;}
finally{try{di.removeListenerById(dp);}
catch(dr){}
;}
;dj===true||this.__j(dn||R,G,event,O);}
,assertEventNotFired:function(ds,event,dv,dw){var dt=false;var du=function(e){dt=true;}
;var dx=ds.addListener(event,du,ds);dv.call();dt===false||this.__j(dw||R,G,event,f);ds.removeListenerById(dx);}
,assertException:function(dB,dA,dz,dy){var dA=dA||Error;var dC;try{this.__i=false;dB();}
catch(dD){dC=dD;}
finally{this.__i=true;}
;if(dC==null){this.__j(dy||R,o);}
;dC instanceof dA||this.__j(dy||R,N,dA,a,dC);if(dz){this.assertMatch(dC.toString(),dz,dy);}
;}
,assertInArray:function(dG,dF,dE){dF.indexOf(dG)!==-1||this.__j(dE||R,ca,dG,V,dF,x);}
,assertNotInArray:function(dJ,dI,dH){dI.indexOf(dJ)===-1||this.__j(dH||R,qx.lang.String.format(L,[dJ,dI]));}
,assertArrayEquals:function(dK,dL,dM){this.assertArray(dK,dM);this.assertArray(dL,dM);dM=dM||bU+dK.join(bQ)+ci+dL.join(bQ)+bO;if(dK.length!==dL.length){this.fail(dM,true);}
;for(var i=0;i<dK.length;i++ ){if(dK[i]!==dL[i]){this.fail(dM,true);}
;}
;}
,assertKeyInMap:function(dP,dO,dN){dO[dP]!==undefined||this.__j(dN||R,ca,dP,C,dO,x);}
,assertFunction:function(dR,dQ){qx.lang.Type.isFunction(dR)||this.__j(dQ||R,bW,dR,I);}
,assertFunctionOrAsyncFunction:function(dT,dS){qx.lang.Type.isFunctionOrAsyncFunction(dT)||this.__j(dS||R,X,dT,I);}
,assertString:function(dV,dU){qx.lang.Type.isString(dV)||this.__j(dU||R,F,dV,I);}
,assertBoolean:function(dX,dW){qx.lang.Type.isBoolean(dX)||this.__j(dW||R,bS,dX,I);}
,assertNumber:function(ea,dY){(qx.lang.Type.isNumber(ea)&&isFinite(ea))||this.__j(dY||R,W,ea,I);}
,assertPositiveNumber:function(ec,eb){(qx.lang.Type.isNumber(ec)&&isFinite(ec)&&ec>=0)||this.__j(eb||R,cg,ec,I);}
,assertInteger:function(ee,ed){(qx.lang.Type.isNumber(ee)&&isFinite(ee)&&ee%1===0)||this.__j(ed||R,cj,ee,I);}
,assertPositiveInteger:function(eh,ef){var eg=(qx.lang.Type.isNumber(eh)&&isFinite(eh)&&eh%1===0&&eh>=0);eg||this.__j(ef||R,g,eh,I);}
,assertInRange:function(ek,el,ej,ei){(ek>=el&&ek<=ej)||this.__j(ei||R,qx.lang.String.format(bK,[ek,el,ej]));}
,assertObject:function(en,em){var eo=en!==null&&(qx.lang.Type.isObject(en)||typeof en===cf);eo||this.__j(em||R,S,(en),I);}
,assertArray:function(eq,ep){qx.lang.Type.isArray(eq)||this.__j(ep||R,c,eq,I);}
,assertMap:function(es,er){qx.lang.Type.isObject(es)||this.__j(er||R,n,es,I);}
,assertRegExp:function(eu,et){qx.lang.Type.isRegExp(eu)||this.__j(et||R,r,eu,I);}
,assertType:function(ey,ew,ev){this.assertString(ew,u);typeof (ey)===ew||this.__j(ev||R,cb,ew,T,ey,I);}
,assertInstance:function(eB,eC,ez){var eA=eC.classname||eC+R;eB instanceof eC||this.__j(ez||R,ch,eA,T,eB,I);}
,assertInterface:function(eF,eE,eD){qx.Class&&qx.Class.implementsInterface(eF,eE)||this.__j(eD||R,k,eF,s,eE,P);}
,assertCssColor:function(eL,eI,eK){var eG=qx.Class?qx.Class.getByName(K):null;if(!eG){throw new Error(ce);}
;var eH=eG.stringToRgb(eL);try{var eJ=eG.stringToRgb(eI);}
catch(eN){this.__j(eK||R,H,eL,d,eH.join(B),cd,eI,ck);}
;var eM=eH[0]==eJ[0]&&eH[1]==eJ[1]&&eH[2]==eJ[2];eM||this.__j(eK||R,H,eH,d,eH.join(B),cd,eI,d,eJ.join(B),bY);}
,assertElement:function(eP,eO){!!(eP&&eP.nodeType===1)||this.__j(eO||R,q,eP,P);}
,assertQxObject:function(eR,eQ){this.__l(eR,b)||this.__j(eQ||R,bP,eR,I);}
,assertQxWidget:function(eT,eS){this.__l(eT,bN)||this.__j(eS||R,bI,eT,I);}
,__l:function(eV,eU){if(!eV){return false;}
;var eW=eV.constructor;while(eW){if(eW.classname===eU){return true;}
;eW=eW.superclass;}
;return false;}
}});}
)();
(function(){var a="-",b="]",c='\\u',d="undefined",e="",f='\\$1',g="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h="\\\\",j='-',k="g",l="\\\"",m="qx.lang.String",n="(^|[^",o="0",p="%",q='"',r=' ',s='\n',t="])[";qx.Bootstrap.define(m,{statics:{__m:g,__n:null,__o:{},camelCase:function(v){var u=this.__o[v];if(!u){u=v.replace(/\-([a-z])/g,function(x,w){return w.toUpperCase();}
);if(v.indexOf(a)>=0){this.__o[v]=u;}
;}
;return u;}
,hyphenate:function(z){var y=this.__o[z];if(!y){y=z.replace(/[A-Z]/g,function(A){return (j+A.charAt(0).toLowerCase());}
);if(z.indexOf(a)==-1){this.__o[z]=y;}
;}
;return y;}
,capitalize:function(C){if(this.__n===null){var B=c;this.__n=new RegExp(n+this.__m.replace(/[0-9A-F]{4}/g,function(D){return B+D;}
)+t+this.__m.replace(/[0-9A-F]{4}/g,function(E){return B+E;}
)+b,k);}
;return C.replace(this.__n,function(F){return F.toUpperCase();}
);}
,clean:function(G){return G.replace(/\s+/g,r).trim();}
,trimLeft:function(H){return H.replace(/^\s+/,e);}
,trimRight:function(I){return I.replace(/\s+$/,e);}
,startsWith:function(K,J){return K.startsWith(J);}
,endsWith:function(M,L){return M.endsWith(L);}
,repeat:function(N,O){return N.length>0?new Array(O+1).join(N):e;}
,pad:function(Q,length,P){var R=length-Q.length;if(R>0){if(typeof P===d){P=o;}
;return this.repeat(P,R)+Q;}
else {return Q;}
;}
,firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(T,S){return T.indexOf(S)!=-1;}
,format:function(U,V){var W=U;var i=V.length;while(i-- ){W=W.replace(new RegExp(p+(i+1),k),function(){return V[i]+e;}
);}
;return W;}
,escapeRegexpChars:function(X){return X.replace(/([.*+?^${}()|[\]\/\\])/g,f);}
,toArray:function(Y){return Y.split(/\B|\b/g);}
,stripTags:function(ba){return ba.replace(/<\/?[^>]+>/gi,e);}
,stripScripts:function(bd,bc){var be=e;var bb=bd.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){be+=arguments[1]+s;return e;}
);if(bc===true){qx.lang.Function.globalEval(be);}
;return bb;}
,quote:function(bf){return q+bf.replace(/\\/g,h).replace(/\"/g,l)+q;}
}});}
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
,contains:function(U,V){return U.indexOf(V)!==-1;}
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
;if(qx.core.Environment.get(J)){this.__q(name,M);}
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
,$$registry:{},__p:qx.core.Environment.select(J,{"true":{"include":K,"statics":K,"members":K,"properties":K,"events":K,"destruct":d,"construct":d},"default":null}),__q:qx.core.Environment.select(J,{"true":function(name,bf){var be=this.__p;for(var bd in bf){if(!be[bd]){throw new Error(h+bd+D+name+k);}
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
(function(){var a="qx.data.marshal.MEventBubbling",b="",c="]",d="idBubble-",f="[",g="changeBubble",h=".",j="qx.event.type.Data";qx.Mixin.define(a,{events:{"changeBubble":j},members:{_applyEventPropagation:function(l,k,name){this.fireDataEvent(g,{value:l,name:name,old:k,item:this});this._registerEventChaining(l,k,name);}
,_registerEventChaining:function(n,m,name){if(m!=null&&m.getUserData&&m.getUserData(d+this.$$hash)!=null){var p=m.getUserData(d+this.$$hash);for(var i=0;i<p.length;i++ ){m.removeListenerById(p[i]);}
;m.setUserData(d+this.$$hash,null);}
;if((n instanceof qx.core.Object)&&qx.Class.hasMixin(n.constructor,qx.data.marshal.MEventBubbling)){var o=qx.lang.Function.bind(this.__r,this,name);var q=n.addListener(g,o,this);var p=n.getUserData(d+this.$$hash);if(p==null){p=[];n.setUserData(d+this.$$hash,p);}
;p.push(q);}
;}
,__r:function(name,e){var y=e.getData();var u=y.value;var s=y.old;if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(y.name.indexOf){var x=y.name.indexOf(h)!=-1?y.name.indexOf(h):y.name.length;var v=y.name.indexOf(f)!=-1?y.name.indexOf(f):y.name.length;if(v==0){var t=name+y.name;}
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
(function(){var a="qx.globalErrorHandling",b="qx.event.GlobalError";qx.Bootstrap.define(b,{statics:{__s:null,__t:null,__u:null,__v:function(){if(qx.core&&qx.core.Environment){return qx.core.Environment.get(a);}
else {return !!qx.Bootstrap.getEnvironmentSetting(a);}
;}
,setErrorHandler:function(c,d){this.__s=c||null;this.__u=d||window;if(this.__v()){if(c&&window.onerror){var e=qx.Bootstrap.bind(this.__w,this);if(this.__t==null){this.__t=window.onerror;}
;var self=this;window.onerror=function(f,g,h){self.__t(f,g,h);e(f,g,h);}
;}
;if(c&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__w,this);}
;if(this.__s==null){if(this.__t!=null){window.onerror=this.__t;this.__t=null;}
else {window.onerror=null;}
;}
;}
;}
,__w:function(i,j,k){if(this.__s){this.handleError(new qx.core.WindowError(i,j,k));}
;}
,observeMethod:function(l){if(this.__v()){var self=this;return function(){if(!self.__s){return l.apply(this,arguments);}
;try{return l.apply(this,arguments);}
catch(m){self.handleError(new qx.core.GlobalError(m,arguments));}
;}
;}
else {return l;}
;}
,handleError:function(n){if(this.__s){this.__s.call(this.__u,n);}
;}
},defer:function(o){if(qx.core&&qx.core.Environment){qx.core.Environment.add(a,true);}
else {qx.Bootstrap.setEnvironmentSetting(a,true);}
;o.setErrorHandler(null,null);}
});}
)();
(function(){var a="",b="qx.core.WindowError";qx.Bootstrap.define(b,{extend:Error,construct:function(c,e,f){var d=Error.call(this,c);if(d.stack){this.stack=d.stack;}
;if(d.stacktrace){this.stacktrace=d.stacktrace;}
;this.__x=c;this.__y=e||a;this.__z=f===undefined?-1:f;}
,members:{__x:null,__y:null,__z:null,toString:function(){return this.__x;}
,getUri:function(){return this.__y;}
,getLineNumber:function(){return this.__z;}
}});}
)();
(function(){var a="GlobalError: ",b="qx.core.GlobalError";qx.Bootstrap.define(b,{extend:Error,construct:function(e,c){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(e);}
;this.__x=a+(e&&e.message?e.message:e);var d=Error.call(this,this.__x);if(d.stack){this.stack=d.stack;}
;if(d.stacktrace){this.stacktrace=d.stacktrace;}
;this.__A=c;this.__B=e;}
,members:{__B:null,__A:null,__x:null,toString:function(){return this.__x;}
,getArguments:function(){return this.__A;}
,getSourceException:function(){return this.__B;}
}});}
)();
(function(){var b="function",c="Boolean",d="'! The value is undefined/null!",e="RegExp",f='The configuration key "',g='The property "',h='" is not allowed!',j="string",k='Implementation of method "',m='"',n="Array",o='" is missing in class "',p="' in interface '",q="members",r="number",s="properties",t="statics",u="qx.debug",v="Invalid key '",w='The event "',x="events",y='Invalid type of key "',z='"!',A="]",B='" in class "',C="Interface",D='"! The value needs to be a map!',E='" in interface "',F="' is undefined/null!",G='"! The type of the key must be "',H='Implementation of member "',I="Extends of interfaces must be interfaces. The extend number '",J='" is not supported by Class "',K="' is not an interface!",L="qx.Interface",M='" required by interface "',N='Invalid key "',O="Date",P='"! Static constants must be all uppercase.',Q="toggle",R="boolean",S="is",T="[Interface ",U='"! Static constants must be all of a primitive type.',V="object";qx.Bootstrap.define(L,{statics:{define:function(name,X){if(X){if(X.extend&&!(qx.Bootstrap.getClass(X.extend)===n)){X.extend=[X.extend];}
;if(qx.core.Environment.get(u)){this.__q(name,X);}
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
,__C:function(be,bf,bb,bi,bg){var bc=bb.$$members;if(bc){for(var bh in bc){if(qx.Bootstrap.isFunction(bc[bh])){var bk=this.__D(bf,bh);var bd=bk||qx.Bootstrap.isFunction(be[bh]);if(!bd){if(bg){throw new Error(k+bh+o+bf.classname+M+bb.name+m);}
else {return false;}
;}
;var bj=bi===true&&!bk&&!qx.util.OOUtil.hasInterface(bf,bb);if(bj){be[bh]=this.__G(bb,be[bh],bh,bc[bh]);}
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
,__D:function(bo,bl){var bq=bl.match(/^(is|toggle|get|set|reset)(.*)$/);if(!bq){return false;}
;var bn=qx.Bootstrap.firstLow(bq[2]);var bp=qx.util.OOUtil.getPropertyDefinition(bo,bn);if(!bp){return false;}
;var bm=bq[0]===S||bq[0]===Q;if(bm){return qx.util.OOUtil.getPropertyDefinition(bo,bn).check===c;}
;return true;}
,__E:function(bu,br,bs){if(br.$$properties){for(var bt in br.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(bu,bt)){if(bs){throw new Error(g+bt+J+bu.classname+z);}
else {return false;}
;}
;}
;}
;if(!bs){return true;}
;}
,__F:function(by,bv,bw){if(bv.$$events){for(var bx in bv.$$events){if(!qx.util.OOUtil.supportsEvent(by,bx)){if(bw){throw new Error(w+bx+J+by.classname+z);}
else {return false;}
;}
;}
;}
;if(!bw){return true;}
;}
,assertObject:function(bB,bz){var bC=bB.constructor;this.__C(bB,bC,bz,false,true);this.__E(bC,bz,true);this.__F(bC,bz,true);var bA=bz.$$extends;if(bA){for(var i=0,l=bA.length;i<l;i++ ){this.assertObject(bB,bA[i]);}
;}
;}
,assert:function(bF,bD,bG){this.__C(bF.prototype,bF,bD,bG,true);this.__E(bF,bD,true);this.__F(bF,bD,true);var bE=bD.$$extends;if(bE){for(var i=0,l=bE.length;i<l;i++ ){this.assert(bF,bE[i],bG);}
;}
;}
,objectImplements:function(bJ,bH){var bK=bJ.constructor;if(!this.__C(bJ,bK,bH)||!this.__E(bK,bH)||!this.__F(bK,bH)){return false;}
;var bI=bH.$$extends;if(bI){for(var i=0,l=bI.length;i<l;i++ ){if(!this.objectImplements(bJ,bI[i])){return false;}
;}
;}
;return true;}
,classImplements:function(bN,bL){if(!this.__C(bN.prototype,bN,bL)||!this.__E(bN,bL)||!this.__F(bN,bL)){return false;}
;var bM=bL.$$extends;if(bM){for(var i=0,l=bM.length;i<l;i++ ){if(!this.has(bN,bM[i])){return false;}
;}
;}
;return true;}
,genericToString:function(){return T+this.name+A;}
,$$registry:{},__G:qx.core.Environment.select(u,{"true":function(bR,bP,bS,bO){function bQ(){bO.apply(this,arguments);return bP.apply(this,arguments);}
;bP.wrapper=bQ;return bQ;}
,"default":function(bV,bU,bW,bT){}
}),__p:qx.core.Environment.select(u,{"true":{"extend":V,"statics":V,"members":V,"properties":V,"events":V},"default":null}),__q:qx.core.Environment.select(u,{"true":function(name,cb){if(qx.core.Environment.get(u)){var ca=this.__p;for(var bY in cb){if(ca[bY]===undefined){throw new Error(f+bY+B+name+h);}
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
(function(){var a="qx.event.type.Data",b="qx.event.type.Event",c="qx.data.IListData";qx.Interface.define(c,{events:{"change":a,"changeLength":b},members:{getItem:function(d){}
,setItem:function(e,f){}
,splice:function(g,h,i){}
,contains:function(j){}
,getLength:function(){}
,toArray:function(){}
}});}
)();
(function(){var a="qx.data.MBinding",b="qx.promise";qx.Mixin.define(a,{construct:function(){this.__H=this.toHashCode();}
,members:{__H:null,bind:function(c,f,d,e){return qx.data.SingleValueBinding.bind(this,c,f,d,e);}
,bindAsync:qx.core.Environment.select(b,{"true":function(g,j,h,k){var i=qx.data.SingleValueBinding.bind(this,g,j,h,k);if(i.initialPromise){return i.initialPromise.then(function(){i.initialPromise=null;return i;}
);}
else {return qx.Promise.resolve(i);}
;}
,"false":function(l,o,m,n){return this.bind(l,o,m,n);}
}),removeBinding:function(p){qx.data.SingleValueBinding.removeBindingFromObject(this,p);}
,removeRelatedBindings:function(q){qx.data.SingleValueBinding.removeRelatedBindings(this,q);}
,removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);}
,getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);}
},destruct:function(){this.$$hash=this.__H;this.removeAllBindings();delete this.$$hash;}
});}
)();
(function(){var b="of property '",c='var msg = "Invalid incoming value for property \'',d='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',e='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',f="set",g="function",h=';',j="resetThemed",k='value !== null && value.nodeType === 9 && value.documentElement',m='value !== null && value.$$type === "Mixin"',n='return init;',o='var init=this.',p='var a=this._getChildren();',q="return promise;",r="Async() method in same class",s='value !== null && value.nodeType === 1 && value.attributes',t="var parent = this.getLayoutParent();",u="Error in property ",v='var old;',w="property",x='function set(value){',y="Asynchronous property ",z="();",A='.validate.call(this, value);',B='qx.core.Assert.assertInstance(value, Date, msg) || true',C='if(computed===inherit){',D='else{',E="Cannot add the non themable property '",F="Cannot implement check for property ",G=" in method ",H='qx.core.Assert.assertInstance(value, Error, msg) || true',I='=computed;',J='Undefined value is not allowed!',K='(backup);',L='if(',M="$$set",N="return qx.Promise.resolve(this.",O='else ',P="var promiseData = qx.Promise.resolve(computed);",Q='var promise;',R="' to the themable property group '",S='if(old===undefined)old=this.',T='promise = set.apply(this, arguments);',U="var promise = promiseData;",V="]: ",W=',value))return value;',X="inherit",Y='if(this.',ba='return this.',bb='else if(this.',bc='!==inherit){',bd='Is invalid!',be="}, this);",bf='if(value===undefined)prop.error(this,2,"',bg="getAsync",bh='", "',bi='if(a[i].',bj='else if(computed===undefined)',bk="Malformed generated code to unwrap method: ",bl="Async'))",bm='.isEqual.call(this,a,b);};',bn='delete this.',bo="resetRuntime",bp="promise = reg.fireEventAsync(this, '",bq="': ",br=" of class ",bs="Async', qx.event.type.Data, [qx.Promise.resolve(computed), old]",bt='value !== null && value.nodeType !== undefined',bu='===undefined)return;',bv='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bw="Could not add check to property ",bx='function(a,b){return !!(',by='function(a,b){return !!',bz="reset",bA="string",bB='var equ=',bC="module.events",bD="return this.",bE='qx.core.Assert.assertPositiveInteger(value, msg) || true',bF="Code[",bG='value=this.',bH="Cannot create property group '",bI='","',bJ='for(var i=0,l=a.length;i<l;i++){',bK='if(init==qx.core.Property.$$inherit)init=null;',bL="return promise.then(fire, this); ",bM='qx.core.Assert.assertInArray(value, ',bN="get",bO='value !== null && value.$$type === "Interface"',bP='var inherit=prop.$$inherit;',bQ=".$$install && this.",bR=')prop.error(this,5,"',bS="var value = parent.",bT="$$useinit_",bU='computed=undefined;delete this.',bV='(value);',bW="' in class '",bX=" is overriding ",bY="(value);",ca=".apply(this, arguments);",cb='if(equ.call(this,this.',cc=');};',cd='this.',ce="setThemed",cf='",value);',cg='promise = value.then(set.bind(this));',ch='}else{',ci="$$runtime_",cj=" with ",ck='Requires exactly one argument!',cl=");",cm='if(this.$$initialized)prop.error(this,0,"',cn='qx.core.Assert.assertInstance(value, qx.Class.getByName("',co="setImpl",cp="Async', qx.event.type.Data, [promiseData, old]",cq="$$user_",cr='if(value===null)prop.error(this,4,"',cs='!==undefined)',ct='){',cu='!',cv='qx.core.Assert.assertArray(value, msg) || true',cw="());",cx=";",cy=" because qx.promise==false",cz='qx.core.Assert.assertPositiveNumber(value, msg) || true',cA="return computed;",cB='computed=value;',cC=".prototype",cD="' including non-existing property '",cE="Boolean",cF=" is switched to synchronous because qx.promise==false",cG='if(a)',cH="(a[",cI='(computed, old, "',cJ="setRuntime",cK='return value;',cL="this.",cM='.check, msg)',cN="return reg.fireEventAsync(this, '",cO=".$$install.call(this);",cP="if(reg.hasListener(this, '",cQ="}",cR='Does not allow any arguments!',cS='\'";',cT="promise = promise.then(function() { return computed; });",cU="()",cV=';}',cW="if(promise instanceof qx.Promise) ",cX="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cY='.$$properties.',da='value !== null && value.$$type === "Theme"',db='if(value!==null)',dc='set.apply(this, arguments);',dd="'!",de='this.$$set',df='.check.call(this, value)',dg=".$$install();",dh='if(computed===undefined||computed===inherit){',di="())",dj='=value;',dk=" is replacing ",dl='return null;',dm="'))",dn='(value, old);',dp='!==undefined){',dq='qx.core.Assert.assertObject(value, msg) || true',dr='a[i].',ds='");',dt='var old=this.',du='qx.core.Assert.assertString(value, msg) || true',dv='!==undefined&&',dw="\n",dx='var pa=this.getLayoutParent();if(pa)computed=pa.',dy="if (value===undefined) value = parent.",dz='value !== null && value.$$type === "Class"',dA='qx.core.Assert.assertFunction(value, msg) || true',dB='old=this.',dC="', qx.event.type.Data, [computed, old]",dD="qx.Promise",dE='var backup=computed;',dF=".",dG='}',dH='"), msg)',dI="object",dJ="$$init_",dK='qx.core.Assert.assertInterface(value, qx.Interface.getByName("',dL="var reg=qx.event.Registration;",dM="$$theme_",dN="qx.debug.property.level",dO='if (value instanceof qx.Promise) ',dP='if(computed===undefined)computed=null;',dQ='\' of class \'',dR="Unknown reason: ",dS='if(arguments.length!==1)prop.error(this,1,"',dT="qx.promise",dU="')) {",dV="init",dW='qx.core.Assert.assertMap(value, msg) || true',dX="getThemed",dY='if((computed===undefined||computed===inherit)&&',ea='!(',eb='return qx.Promise.resolve(this.$$set',ec="Generating property wrappers: ",ed="'",ee='qx.core.Assert.assertNumber(value, msg) || true',ef="Impl.apply(this, arguments));",eg="qx.debug",eh="promise = promise.then(function() {",ei="reg.fireEvent(this, '",ej='Null value is not allowed!',ek="Async",el="Impl",em='qx.core.Assert.assertInteger(value, msg) || true',en="value",eo='var computed;',ep='function(a,b){return a===b;};',eq="shorthand",er='promise = this.',es='computed=this.',et="Generating property group: ",eu='qx.core.Assert.assertInstance(value, RegExp, msg) || true',ev='value !== null && value.type !== undefined',ew='value !== null && value.document',ey="reg.fireEventAsync(this, '",ez="",eA='throw new Error("Property ',eB="(!this.",eC='qx.core.Assert.assertBoolean(value, msg) || true',eD="Async() method",eE="qx.aspects",eF="Invalid type for 'isEqual' attribute ",eG=' of an instance of ',eH="toggle",eI="refresh",eJ="$$inherit_",eK='var prop=qx.core.Property;',eL="Conflicting property method ",eM='else this.',eN="if (!parent) return;",eO='if(old===undefined)old=null;',eP='=true;',eQ="undefined",eR="boolean",eS="Async.apply(this, arguments);",eT='if(equ.call(this,old,computed))return value;',eU=" with incoming value '",eV="function fire() {",eW="Impl.apply(this, arguments);",eX=' is not (yet) ready!");',eY=')',fa='if(value!==inherit)',fb='if(arguments.length!==0)prop.error(this,3,"',fc="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",fd="return fire.call(this);",fe='if(computed===undefined||computed==inherit)computed=null;',ff='Could not change or apply init value after constructing phase!',fg="is",fh="setAsync",fi="]);",fj="qx.core.Property";qx.Bootstrap.define(fj,{statics:{__I:function(){if(qx.core.Environment.get(bC)){qx.event.type.Data;qx.event.dispatch.Direct;}
;if(qx.core.Environment.get(dT)){qx.Promise;}
;}
,__J:{"Boolean":eC,"String":du,"Number":ee,"Integer":em,"PositiveNumber":cz,"PositiveInteger":bE,"Error":H,"RegExp":eu,"Object":dq,"Array":cv,"Map":dW,"Function":dA,"Date":B,"Node":bt,"Element":s,"Document":k,"Window":ew,"Event":ev,"Class":dz,"Mixin":m,"Interface":bO,"Theme":da,"Color":d,"Decorator":bv,"Font":e},__K:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:X,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},getAsync:{},set:{},setImpl:{},setAsync:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{"@":dI,name:bA,dereference:eR,inheritable:eR,nullable:eR,themeable:eR,refine:eR,init:null,apply:bA,event:bA,check:null,transform:bA,async:eR,deferredInit:eR,validate:null,isEqual:null},$$allowedGroupKeys:{"@":dI,name:bA,group:dI,mode:bA,themeable:eR},$$inheritable:{},__L:function(fm){var fk=this.__M(fm);if(!fk.length){var fl=function(){}
;}
else {fl=this.__N(fk);}
;fm.prototype.$$refreshInheritables=fl;}
,__M:function(fo){var fp=[];while(fo){var fq=fo.$$properties;if(fq){for(var name in this.$$inheritable){if(fq[name]&&fq[name].inheritable){fp.push(name);}
;}
;}
;fo=fo.superclass;}
;return fp;}
,__N:function(inheritables){var inherit=this.$$store.inherit;var init=this.$$store.init;var refresh=this.$$method.refresh;var code=[t,eN];for(var i=0,l=inheritables.length;i<l;i++ ){var name=inheritables[i];code.push(bS,inherit[name],cx,dy,init[name],cx,cL,refresh[name],bY);}
;return new Function(code.join(ez));}
,attachRefreshInheritables:function(fr){fr.prototype.$$refreshInheritables=function(){qx.core.Property.__L(fr);return this.$$refreshInheritables();}
;}
,attachMethods:function(ft,name,fs){fs.group?this.__O(ft,fs,name):this.__P(ft,fs,name);}
,__O:function(clazz,config,name){var upname=qx.Bootstrap.firstUp(name);var members=clazz.prototype;var themeable=config.themeable===true;if(qx.core.Environment.get(eg)){if(qx.core.Environment.get(dN)>1){qx.Bootstrap.debug(et+name);}
;}
;var setter=[];var resetter=[];if(themeable){var styler=[];var unstyler=[];}
;var argHandler=cX;setter.push(argHandler);if(themeable){styler.push(argHandler);}
;if(config.mode==eq){var shorthand=fc;setter.push(shorthand);if(themeable){styler.push(shorthand);}
;}
;for(var i=0,a=config.group,l=a.length;i<l;i++ ){if(qx.core.Environment.get(eg)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error(bH+name+cD+a[i]+dd);}
;}
;setter.push(cL,this.$$method.set[a[i]],cH,i,fi);resetter.push(cL,this.$$method.reset[a[i]],z);if(themeable){if(qx.core.Environment.get(eg)){if(!this.$$method.setThemed[a[i]]){throw new Error(E+a[i]+R+name+ed);}
;}
;styler.push(cL,this.$$method.setThemed[a[i]],cH,i,fi);unstyler.push(cL,this.$$method.resetThemed[a[i]],z);}
;}
;this.$$method.set[name]=f+upname;members[this.$$method.set[name]]=new Function(setter.join(ez));this.$$method.reset[name]=bz+upname;members[this.$$method.reset[name]]=new Function(resetter.join(ez));if(themeable){this.$$method.setThemed[name]=ce+upname;members[this.$$method.setThemed[name]]=new Function(styler.join(ez));this.$$method.resetThemed[name]=j+upname;members[this.$$method.resetThemed[name]]=new Function(unstyler.join(ez));}
;}
,__P:function(clazz,config,name){var upname=qx.Bootstrap.firstUp(name);var members=clazz.prototype;if(qx.core.Environment.get(eg)){if(qx.core.Environment.get(dN)>1){qx.Bootstrap.debug(ec+name);}
;}
;if(config.dereference===undefined&&typeof config.check===bA){config.dereference=this.__Q(config.check);}
;if(!qx.core.Environment.get(dT)){if(config.async){this.warn(y+clazz.classname+dF+name+cF);config.async=false;}
;if(config.check==dD){this.error(F+clazz.classname+dF+name+cy);delete config.check;}
;}
;if(qx.core.Environment.get(eg)){if(clazz.classname&&!clazz.classname.match(/^qx.data.model/)){var allNames=[bN+upname,f+upname,bz+upname,cJ+upname,bo+upname];if(config.async){allNames.push(bN+upname+ek);allNames.push(f+upname+ek);}
;if(config.inheritable||config.apply||config.event||config.deferredInit){allNames.push(dV+upname);}
;if(config.inheritable){allNames.push(eI+upname);}
;if(config.themeable){allNames.push(dX+upname);allNames.push(ce+upname);allNames.push(j+upname);}
;if(config.check===cE){allNames.push(fg+upname);allNames.push(eH+upname);}
;allNames.forEach(function(name){if(clazz.superclass.prototype[name]!==undefined){var fv=null;for(var fu=clazz.superclass;fu&&fu!=qx.core.Object;fu=fu.superclass){if(fu.superclass.prototype[name]===undefined){fv=fu;break;}
;}
;if(fv){qx.log.Logger.warn(eL+clazz.classname+dF+name+cj+fv.classname);}
;}
;}
);}
;}
;var method=this.$$method;var store=this.$$store;store.runtime[name]=ci+name;store.user[name]=cq+name;store.theme[name]=dM+name;store.init[name]=dJ+name;store.inherit[name]=eJ+name;store.useinit[name]=bT+name;var getName=method.get[name]=bN+upname;members[method.get[name]]=new Function(cL+getName+bQ+getName+dg+bD+getName+ca);if(config.async){if(qx.core.Environment.get(eg)){if(members.hasOwnProperty(getName+ek)){this.error(y+clazz.classname+dF+name+dk+getName+r);}
else if(members[getName+ek]!==undefined){this.warn(y+clazz.classname+dF+name+bX+getName+eD);}
;}
;method.getAsync[name]=getName+ek;members[method.getAsync[name]]=new Function(cL+getName+bQ+getName+cO+bD+getName+eS);}
;members[method.get[name]].$$install=function(){qx.core.Property.__U(clazz,name,bN,arguments);if(config.async){qx.core.Property.__U(clazz,name,bg,arguments);}
;}
;var setName=method.set[name]=f+upname;members[setName]=new Function(cL+setName+bQ+setName+cO+bD+setName+ca);method.setAsync[name]=f+upname+ek;if(config.async){if(qx.core.Environment.get(eg)){if(members.hasOwnProperty(setName+ek)){this.error(y+clazz.classname+dF+name+dk+setName+r);}
else if(members[setName+ek]!==undefined){this.warn(y+clazz.classname+dF+name+bX+setName+eD);}
;}
;members[setName+ek]=new Function(cL+setName+bQ+setName+cO+bD+setName+eS);}
;method.setImpl[name]=M+upname+el;members[setName].$$install=function(){qx.core.Property.__W(clazz,name,f);qx.core.Property.__W(clazz,name,co);if(config.async){qx.core.Property.__W(clazz,name,fh);}
;}
;method.reset[name]=bz+upname;members[method.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bz);}
;members[method.reset[name]].$$install=function(){qx.core.Property.__W(clazz,name,bz);}
;if(config.inheritable||config.apply||config.event||config.deferredInit){method.init[name]=dV+upname;members[method.init[name]]=function(fw){return qx.core.Property.executeOptimizedSetter(this,clazz,name,dV,arguments);}
;if(qx.core.Environment.get(eg)){members[method.init[name]].$$propertyMethod=true;}
;}
;if(config.inheritable){method.refresh[name]=eI+upname;members[method.refresh[name]]=function(fx){return qx.core.Property.executeOptimizedSetter(this,clazz,name,eI,arguments);}
;if(qx.core.Environment.get(eg)){members[method.refresh[name]].$$propertyMethod=true;}
;}
;method.setRuntime[name]=cJ+upname;members[method.setRuntime[name]]=function(fy){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cJ,arguments);}
;method.resetRuntime[name]=bo+upname;members[method.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bo);}
;if(config.themeable){method.setThemed[name]=ce+upname;members[method.setThemed[name]]=function(fz){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ce,arguments);}
;method.resetThemed[name]=j+upname;members[method.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,j);}
;if(qx.core.Environment.get(eg)){members[method.setThemed[name]].$$propertyMethod=true;members[method.resetThemed[name]].$$propertyMethod=true;}
;}
;if(config.check===cE){members[eH+upname]=new Function(bD+method.set[name]+eB+method.get[name]+di);members[fg+upname]=new Function(bD+method.get[name]+cU);if(qx.core.Environment.get(eg)){members[eH+upname].$$propertyMethod=true;members[fg+upname].$$propertyMethod=true;}
;}
;if(qx.core.Environment.get(eg)){members[method.get[name]].$$propertyMethod=true;members[method.set[name]].$$propertyMethod=true;members[method.reset[name]].$$propertyMethod=true;members[method.setRuntime[name]].$$propertyMethod=true;members[method.resetRuntime[name]].$$propertyMethod=true;}
;}
,__Q:function(fA){return !!this.__K[fA];}
,__R:{'0':ff,'1':ck,'2':J,'3':cR,'4':ej,'5':bd},error:function(fB,fH,fG,fC,fD){var fE=fB.constructor.classname;var fF=u+fG+br+fE+G+this.$$method[fC][fG]+eU+fD+bq;throw new Error(fF+(this.__R[fH]||dR+fH));}
,__S:function(fL,fM,name,fK,fI,fJ){var fN=this.__T(fL.constructor,name,fK,fI,fJ);if(fJ===undefined){return fN.call(fL);}
else if(qx.core.Environment.get(eg)){return fN.apply(fL,fJ);}
else {return fN.call(fL,fJ[0]);}
;}
,__T:function(clazz,name,variant,code,args){var store=this.$$method[variant][name];if(qx.core.Environment.get(eg)){if(qx.core.Environment.get(dN)>1){qx.Bootstrap.debug(bF+this.$$method[variant][name]+V+code.join(ez));}
;try{clazz.prototype[store]=new Function(en,code.join(ez));}
catch(fO){throw new Error(bk+this.$$method[variant][name]+dw+code.join(ez));}
;}
else {clazz.prototype[store]=new Function(en,code.join(ez));}
;if(qx.core.Environment.get(eE)){clazz.prototype[store]=qx.core.Aspect.wrap(clazz.classname+dF+store,clazz.prototype[store],w);}
;qx.Bootstrap.setDisplayName(clazz.prototype[store],clazz.classname+cC,store);return clazz.prototype[store];}
,executeOptimizedGetter:function(fS,fR,name,fQ){var fP=this.__V(fR,name,fQ);var fT=fR.prototype;return this.__S(fS,fT,name,fQ,fP);}
,__U:function(fW,name,fV){var fU=this.__V(fW,name,fV);this.__T(fW,name,fV,fU);}
,__V:function(ga,name,fY){var gb=ga.$$properties[name];var fX=[];var gc=this.$$store;if(fY==bg){fX.push(N+this.$$method.get[name]+cw);return fX;}
;fX.push(Y,gc.runtime[name],cs);fX.push(ba,gc.runtime[name],h);if(gb.inheritable){fX.push(bb,gc.inherit[name],cs);fX.push(ba,gc.inherit[name],h);fX.push(O);}
;fX.push(Y,gc.user[name],cs);fX.push(ba,gc.user[name],h);if(gb.themeable){fX.push(bb,gc.theme[name],cs);fX.push(ba,gc.theme[name],h);}
;if(gb.deferredInit&&gb.init===undefined){fX.push(bb,gc.init[name],cs);fX.push(ba,gc.init[name],h);}
;fX.push(O);if(gb.init!==undefined){if(gb.inheritable){fX.push(o,gc.init[name],h);if(gb.nullable){fX.push(bK);}
;fX.push(n);}
else {fX.push(ba,gc.init[name],h);}
;}
else if(gb.inheritable||gb.nullable){fX.push(dl);}
else {fX.push(eA,name,eG,ga.classname,eX);}
;return fX;}
,executeOptimizedSetter:function(gh,gg,name,gf,ge){var gd=this.__X(gg,name,gf);var gi=gg.prototype;return this.__S(gh,gi,name,gf,gd,ge);}
,__W:function(gl,name,gk){var gj=this.__X(gl,name,gk);return this.__T(gl,name,gk,gj);}
,__X:function(gr,name,gq){var go=gr.$$properties[name];var gs=gr.prototype;var gn=[];var gt=qx.lang.String.firstUp(name);if(gq==fh){gn.push(eb+gt+ef);return gn;}
else if(gq==f){gn.push(de+gt+eW,cK);return gn;}
;var gm=gq===co||gq===ce||gq===cJ||(gq===dV&&go.init===undefined);var gp=go.apply||go.event||go.inheritable;var gu=this.__Y(gq,name);this.__ba(gn,gr,go,name);this.__bb(gn,go,name,gq,gm);if(gm||gp){this.__bh(gn,go,name);}
;if(gm){this.__bc(gn,gr,go,name);}
;if(gp){this.__bd(gn,gm,gu,gq);}
;if(go.inheritable){gn.push(bP);}
;if(qx.core.Environment.get(eg)){if(gm){this.__be(gn,go,gr,name,gq);}
;}
;if(!gp){this.__bf(gn,name,gq,gm);}
else {this.__bg(gn,go,name,gq,gm);}
;if(go.inheritable){this.__bi(gn,go,name,gq);}
else if(gp){this.__bj(gn,go,name,gq);}
;if(gp){this.__bk(gn,go,name,gq,!!(go.inheritable&&gs._getChildren));}
;if(gm){gn.unshift(x);gn.push(dG);if(qx.core.Environment.get(dT)&&(!go.check||go.check!=dD)){gn.push(Q,dO,cg,O,T);if(gq==co){gn.push(q);}
else {gn.push(cK);}
;}
else {gn.push(dc,cK);}
;}
;return gn;}
,__Y:function(gv,name){if(gv===cJ||gv===bo){var gw=this.$$store.runtime[name];}
else if(gv===ce||gv===j){gw=this.$$store.theme[name];}
else if(gv===dV){gw=this.$$store.init[name];}
else {gw=this.$$store.user[name];}
;return gw;}
,__ba:function(gx,gA,gy,name){gx.push(bB);if(typeof gy.isEqual===g){gx.push(by,gA.classname,cY,name,bm);}
else if(typeof gy.isEqual===bA){var gz=gA.prototype;if(gz[gy.isEqual]!==undefined){gx.push(cd,gy.isEqual,h);}
else {gx.push(bx,gy.isEqual,cc);}
;}
else if(typeof gy.isEqual===eQ){gx.push(ep);}
else {throw new Error(eF+b+name+bW+gA.classname+ed);}
;}
,__bb:function(gD,gB,name,gE,gC){if(qx.core.Environment.get(eg)){gD.push(eK);if(gE===dV){gD.push(cm,name,bI,gE,cf);}
;if(gE===eI){}
else if(gC){gD.push(dS,name,bI,gE,cf);gD.push(bf,name,bI,gE,cf);}
else {gD.push(fb,name,bI,gE,cf);}
;}
else {if(!gB.nullable||gB.check||gB.inheritable){gD.push(eK);}
;if(gE===co){gD.push(bf,name,bI,gE,cf);}
;}
;}
,__bc:function(gF,gH,gG,name){if(gG.transform){gF.push(bG,gG.transform,dn);}
;if(gG.validate){if(typeof gG.validate===bA){gF.push(cd,gG.validate,bV);}
else if(gG.validate instanceof Function){gF.push(gH.classname,cY,name);gF.push(A);}
;}
;}
,__bd:function(gJ,gI,gL,gK){var gM=(gK===bz||gK===j||gK===bo);if(gI){gJ.push(cb,gL,W);}
else if(gM){gJ.push(Y,gL,bu);}
;}
,__be:qx.core.Environment.select(eg,{"true":function(gO,gN,gQ,name,gP){if(!gN.nullable){gO.push(cr,name,bI,gP,cf);}
;if(gN.check!==undefined){gO.push(c+name+dQ+gQ.classname+cS);if(gN.nullable){gO.push(db);}
;if(gN.inheritable){gO.push(fa);}
;gO.push(L);if(this.__J[gN.check]!==undefined){gO.push(ea,this.__J[gN.check],eY);}
else if(qx.Class.isDefined(gN.check)){gO.push(cn,gN.check,dH);}
else if(qx.Interface&&qx.Interface.isDefined(gN.check)){gO.push(dK,gN.check,dH);}
else if(typeof gN.check===g){gO.push(cu,gQ.classname,cY,name);gO.push(df);}
else if(typeof gN.check===bA){gO.push(ea,gN.check,eY);}
else if(gN.check instanceof Array){gO.push(bM,gQ.classname,cY,name,cM);}
else {throw new Error(bw+name+br+gQ.classname);}
;gO.push(bR,name,bI,gP,cf);}
;}
,"false":undefined}),__bf:function(gS,name,gT,gR){if(gT===cJ){gS.push(cd,this.$$store.runtime[name],dj);}
else if(gT===bo){gS.push(Y,this.$$store.runtime[name],cs);gS.push(bn,this.$$store.runtime[name],h);}
else if(gT===co){gS.push(cd,this.$$store.user[name],dj);}
else if(gT===bz){gS.push(Y,this.$$store.user[name],cs);gS.push(bn,this.$$store.user[name],h);}
else if(gT===ce){gS.push(cd,this.$$store.theme[name],dj);}
else if(gT===j){gS.push(Y,this.$$store.theme[name],cs);gS.push(bn,this.$$store.theme[name],h);}
else if(gT===dV&&gR){gS.push(cd,this.$$store.init[name],dj);}
;}
,__bg:function(gW,gU,name,gX,gV){gW.push(eo);gW.push(Y,this.$$store.runtime[name],dp);if(gX===cJ){gW.push(es,this.$$store.runtime[name],dj);}
else if(gX===bo){gW.push(bn,this.$$store.runtime[name],h);gW.push(Y,this.$$store.user[name],cs);gW.push(es,this.$$store.user[name],h);gW.push(bb,this.$$store.theme[name],cs);gW.push(es,this.$$store.theme[name],h);gW.push(bb,this.$$store.init[name],dp);gW.push(es,this.$$store.init[name],h);gW.push(cd,this.$$store.useinit[name],eP);gW.push(dG);}
else {gW.push(es,this.$$store.runtime[name],h);if(gX===co){gW.push(cd,this.$$store.user[name],dj);}
else if(gX===bz){gW.push(bn,this.$$store.user[name],h);}
else if(gX===ce){gW.push(cd,this.$$store.theme[name],dj);}
else if(gX===j){gW.push(bn,this.$$store.theme[name],h);}
else if(gX===dV&&gV){gW.push(cd,this.$$store.init[name],dj);}
;}
;gW.push(dG);gW.push(bb,this.$$store.user[name],dp);if(gX===co){gW.push(es,this.$$store.user[name],dj);}
else if(gX===bz){gW.push(bn,this.$$store.user[name],h);gW.push(Y,this.$$store.runtime[name],cs);gW.push(es,this.$$store.runtime[name],h);gW.push(Y,this.$$store.theme[name],cs);gW.push(es,this.$$store.theme[name],h);gW.push(bb,this.$$store.init[name],dp);gW.push(es,this.$$store.init[name],h);gW.push(cd,this.$$store.useinit[name],eP);gW.push(dG);}
else {if(gX===cJ){gW.push(es,this.$$store.runtime[name],dj);}
else if(gU.inheritable){gW.push(es,this.$$store.user[name],h);}
else {gW.push(es,this.$$store.user[name],h);}
;if(gX===ce){gW.push(cd,this.$$store.theme[name],dj);}
else if(gX===j){gW.push(bn,this.$$store.theme[name],h);}
else if(gX===dV&&gV){gW.push(cd,this.$$store.init[name],dj);}
;}
;gW.push(dG);if(gU.themeable){gW.push(bb,this.$$store.theme[name],dp);if(gX===cJ){gW.push(es,this.$$store.runtime[name],dj);}
else if(gX===co){gW.push(es,this.$$store.user[name],dj);}
else if(gX===ce){gW.push(es,this.$$store.theme[name],dj);}
else if(gX===j){gW.push(bn,this.$$store.theme[name],h);gW.push(Y,this.$$store.init[name],dp);gW.push(es,this.$$store.init[name],h);gW.push(cd,this.$$store.useinit[name],eP);gW.push(dG);}
else if(gX===dV){if(gV){gW.push(cd,this.$$store.init[name],dj);}
;gW.push(es,this.$$store.theme[name],h);}
else if(gX===eI){gW.push(es,this.$$store.theme[name],h);}
;gW.push(dG);}
;gW.push(bb,this.$$store.useinit[name],ct);if(gX===dV){if(gV){gW.push(es,this.$$store.init[name],dj);}
else {gW.push(es,this.$$store.init[name],h);}
;}
else if(gX===co||gX===cJ||gX===ce||gX===eI){gW.push(bn,this.$$store.useinit[name],h);if(gX===cJ){gW.push(es,this.$$store.runtime[name],dj);}
else if(gX===co){gW.push(es,this.$$store.user[name],dj);}
else if(gX===ce){gW.push(es,this.$$store.theme[name],dj);}
else if(gX===eI){gW.push(es,this.$$store.init[name],h);}
;}
;gW.push(dG);if(gX===co||gX===cJ||gX===ce||gX===dV){gW.push(D);if(gX===cJ){gW.push(es,this.$$store.runtime[name],dj);}
else if(gX===co){gW.push(es,this.$$store.user[name],dj);}
else if(gX===ce){gW.push(es,this.$$store.theme[name],dj);}
else if(gX===dV){if(gV){gW.push(es,this.$$store.init[name],dj);}
else {gW.push(es,this.$$store.init[name],h);}
;gW.push(cd,this.$$store.useinit[name],eP);}
;gW.push(dG);}
;}
,__bh:function(gY,ha,name){if(ha.inheritable){gY.push(dt,this.$$store.inherit[name],h);}
else {gY.push(v);}
;gY.push(Y,this.$$store.runtime[name],dp);gY.push(dB,this.$$store.runtime[name],h);gY.push(dG);if(!ha.inheritable){gY.push(bb,this.$$store.user[name],dp);gY.push(dB,this.$$store.user[name],h);gY.push(dG);if(ha.themeable){gY.push(bb,this.$$store.theme[name],dp);gY.push(dB,this.$$store.theme[name],h);gY.push(dG);}
;gY.push(bb,this.$$store.useinit[name],ct);gY.push(dB,this.$$store.init[name],h);gY.push(dG);}
;}
,__bi:function(hc,hb,name,hd){hc.push(dh);if(hd===eI){hc.push(cB);}
else {hc.push(dx,this.$$store.inherit[name],h);}
;hc.push(dY);hc.push(cd,this.$$store.init[name],dv);hc.push(cd,this.$$store.init[name],bc);hc.push(es,this.$$store.init[name],h);hc.push(cd,this.$$store.useinit[name],eP);hc.push(ch);hc.push(bn,this.$$store.useinit[name],cV);hc.push(dG);hc.push(eT);hc.push(C);hc.push(bU,this.$$store.inherit[name],h);hc.push(dG);hc.push(bj);hc.push(bn,this.$$store.inherit[name],h);hc.push(eM,this.$$store.inherit[name],I);hc.push(dE);if(hb.init!==undefined&&hd!==dV){hc.push(S,this.$$store.init[name],cx);}
else {hc.push(eO);}
;hc.push(fe);}
,__bj:function(hf,he,name,hg){if(hg!==co&&hg!==cJ&&hg!==ce){hf.push(dP);}
;hf.push(eT);if(he.init!==undefined&&hg!==dV){hf.push(S,this.$$store.init[name],cx);}
else {hf.push(eO);}
;}
,__bk:function(hi,hh,name,hj,hk){hi.push(Q);if(hh.apply){hi.push(er,hh.apply,cI,name,bh,hj,ds);}
;if(hh.async){hi.push(eV,P,U);if(hh.event){hi.push(dL,cP,hh.event,dU,bp,hh.event,dC,cl,cT,cQ,cP,hh.event,bl,eh,cN,hh.event,cp,cl,be);}
;if(hk){hi.push(p,cG,bJ,bi,this.$$method.refresh[name],eY,dr,this.$$method.refresh[name],K,dG);}
;hi.push(q,cQ);}
else {hi.push(eV);if(hh.event){hi.push(dL,cP,hh.event,dm,ei,hh.event,dC,cl);if(qx.core.Environment.get(dT)){hi.push(cP,hh.event,bl,ey,hh.event,bs,cl);}
;}
;if(hk){hi.push(p,cG,bJ,bi,this.$$method.refresh[name],eY,dr,this.$$method.refresh[name],K,dG);}
;hi.push(cA,cQ);}
;if(qx.core.Environment.get(dT)){hi.push(cW+bL);}
;hi.push(fd);}
}});}
)();
(function(){var a="qx.util.RingBuffer";qx.Bootstrap.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);}
,members:{__bl:0,__bm:0,__bn:false,__bo:0,__bp:null,__bq:null,setMaxEntries:function(c){this.__bq=c;this.clear();}
,getMaxEntries:function(){return this.__bq;}
,addEntry:function(d){this.__bp[this.__bl]=d;this.__bl=this.__br(this.__bl,1);var e=this.getMaxEntries();if(this.__bm<e){this.__bm++ ;}
;if(this.__bn&&(this.__bo<e)){this.__bo++ ;}
;}
,getNumEntriesStored:function(){return this.__bm;}
,mark:function(){this.__bn=true;this.__bo=0;}
,clearMark:function(){this.__bn=false;}
,getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);}
,getEntries:function(f,j){if(f>this.__bm){f=this.__bm;}
;if(j&&this.__bn&&(f>this.__bo)){f=this.__bo;}
;if(f>0){var h=this.__br(this.__bl,-1);var g=this.__br(h,-f+1);var i;if(g<=h){i=this.__bp.slice(g,h+1);}
else {i=this.__bp.slice(g,this.__bm).concat(this.__bp.slice(0,h+1));}
;}
else {i=[];}
;return i;}
,clear:function(){this.__bp=new Array(this.getMaxEntries());this.__bm=0;this.__bo=0;this.__bl=0;}
,__br:function(n,l){var k=this.getMaxEntries();var m=(n+l)%k;if(m<0){m+=k;}
;return m;}
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
;X=/@(.+):(\d+)$/gm;while((Y=X.exec(bj.stack))!=null){bh=Y[1];W=Y[2];bg=this.__bs(bh);ba.push(bg+q+W);}
;if(ba.length>0){return this.__bu(ba);}
;X=/at (.*)/gm;var bk=/\((.*?)(:[\d:]+)\)/;var bf=/(.*?)(:[\d:]+$)/;while((Y=X.exec(bj.stack))!=null){var be=bk.exec(Y[1]);if(!be){be=bf.exec(Y[1]);}
;if(be){bg=this.__bs(be[1]);ba.push(bg+be[2]);}
else {ba.push(Y[1]);}
;}
;}
else if(bi===g){var bb=bj.stacktrace;if(!bb){return ba;}
;if(bb.indexOf(j)>=0){bb=bb.split(j)[0];}
;X=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;while((Y=X.exec(bb))!=null){W=Y[1];V=Y[2];bh=Y[3];bg=this.__bs(bh);ba.push(bg+q+W+q+V);}
;if(ba.length>0){return this.__bu(ba);}
;X=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;while((Y=X.exec(bb))!=null){W=Y[1];bh=Y[2];bg=this.__bs(bh);ba.push(bg+q+W);}
;}
else if(bj.message&&bj.message.indexOf(n)>=0){var bd=bj.message.split(n)[1].trim();var bc=bd.split(f);for(var i=0;i<bc.length;i++ ){var U=bc[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);if(U&&U.length>=2){W=U[1];bl=this.__bs(U[2]);ba.push(bl+q+W);}
;}
;}
else if(bj.sourceURL&&bj.line){ba.push(this.__bs(bj.sourceURL)+q+bj.line);}
;return this.__bu(ba);}
,__bs:function(bn){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==s){var bm=qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bn);if(qx.core.Environment.get(l)&&!qx.lang.Type.isString(bm)){throw new Error(k);}
;return bm;}
;return qx.dev.StackTrace.__bt(bn);}
,__bt:function(bq){var br=h;var bo=bq.indexOf(br);var bs=bq.indexOf(a);if(bs>=0){bq=bq.substring(0,bs);}
;var bp=(bo==-1)?bq:bq.substring(bo+br.length).replace(/\//g,r).replace(/\.js$/,e);return bp;}
,__bu:function(bt){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==s){bt=qx.dev.StackTrace.FORMAT_STACKTRACE(bt);if(qx.core.Environment.get(l)&&!qx.lang.Type.isArray(bt)){throw new Error(p);}
;}
;return bt;}
},defer:function(bu){bu.hasEnvironmentCheck=qx.bom&&qx.bom.client&&qx.bom.client.EcmaScript&&qx.bom.client.EcmaScript.getStackTrace;}
});}
)();
(function(){var c="-",d="qx.debug.dispose",e="",f="qx.core.ObjectRegistry",g="qx.debug",h="$$hash",j="Object with hash code ",k="-0",m="Invalid object: ",n="Could not dispose object ",o=" objects",p=": ",q=" does not exist (since Qooxdoo 6.0 fromHashCode requires that you explicitly register objects with qx.core.ObjectRegistry.register)",r="Disposed ";qx.Bootstrap.define(f,{statics:{inShutDown:false,__bv:{},__bw:0,__bx:[],__by:e,__bz:{},register:function(s){var v=this.__bv;if(!v){return;}
;var u=s.$$hash;if(u==null){var t=this.__bx;if(t.length>0&&!qx.core.Environment.get(d)){u=t.pop();}
else {u=(this.__bw++ )+this.__by;}
;s.$$hash=u;if(qx.core.Environment.get(d)){if(qx.dev&&qx.dev.Debug&&qx.dev.Debug.disposeProfilingActive){this.__bz[u]=qx.dev.StackTrace.getStackTrace();}
;}
;}
;if(qx.core.Environment.get(g)){if(!s.dispose){throw new Error(m+s);}
;}
;v[u]=s;}
,unregister:function(w){var x=w.$$hash;if(x==null){return;}
;var y=this.__bv;if(y&&y[x]){delete y[x];this.__bx.push(x);}
;try{delete w.$$hash;}
catch(z){if(w.removeAttribute){w.removeAttribute(h);}
;}
;}
,toHashCode:function(C){if(qx.core.Environment.get(g)){if(C==null){throw new Error(m+C);}
;}
;var A=C.$$hash;if(A!=null){return A;}
;var B=this.__bx;if(B.length>0){A=B.pop();}
else {A=(this.__bw++ )+this.__by;}
;return C.$$hash=A;}
,clearHashCode:function(E){if(qx.core.Environment.get(g)){if(E==null){throw new Error(m+E);}
;}
;var D=E.$$hash;if(D!=null){this.__bx.push(D);try{delete E.$$hash;}
catch(F){if(E.removeAttribute){E.removeAttribute(h);}
;}
;}
;}
,fromHashCode:function(G,I){var H=this.__bv[G]||null;if(!H&&!I){qx.log.Logger.warn(this,j+G+q);}
;return H;}
,hasHashCode:function(J){return !!this.__bv[J];}
,shutdown:function(){this.inShutDown=true;var L=this.__bv;var N=[];for(var K in L){N.push(K);}
;N.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);}
);var M,i=0,l=N.length;while(true){try{for(;i<l;i++ ){K=N[i];M=L[K];if(M&&M.dispose){M.dispose();}
;}
;}
catch(O){qx.Bootstrap.error(this,n+M.toString()+p+O,O);if(i!==l){i++ ;continue;}
;}
;break;}
;qx.Bootstrap.debug(this,r+l+o);delete this.__bv;}
,getRegistry:function(){return this.__bv;}
,getNextHash:function(){return this.__bw;}
,getPostId:function(){return this.__by;}
,getStackTraces:function(){return this.__bz;}
},defer:function(P){if(window&&window.top){var frames=window.top.frames;for(var i=0;i<frames.length;i++ ){if(frames[i]===window){P.__by=c+(i+1);return;}
;}
;}
;P.__by=k;}
});}
)();
(function(){var a="qx.log.Logger",b="[",c="The mixin '",d="...(+",e="array",f="The method '",g=")",h="warn",j="node",k="The event '",m="instance",n="info",o="string",p="Please consult the API documentation of this method for alternatives.",q="null",r="error",s="qx.debug",t="Please consult the API documentation of this class for alternatives.",u="#",v="class",w="' is deprecated: ",x=": ",y="Please consult the API documentation for alternatives.",z="document",A="{...(",B="",C="number",D="' from class '",E="The class '",F="stringify",G="' overrides a deprecated method: ",H="date",I="unknown",J="function",K="[default]",L="text[",M="]",N="[...(",O="boolean",P="\n",Q=")}",R="|",S="debug",T=")]",U="map",V="The constant '",W="undefined",X="trace",Y="object";qx.Bootstrap.define(a,{statics:{__bA:S,setLevel:function(ba){this.__bA=ba;}
,getLevel:function(){return this.__bA;}
,setTreshold:function(bb){this.__bF.setMaxMessages(bb);}
,getTreshold:function(){return this.__bF.getMaxMessages();}
,__bB:[],__bC:{},__bD:[],__bE:0,register:function(bd){if(bd.$$id){return;}
;var bg=this.__bE++ ;this.__bB[bg]=bd;this.__bC[bd.classname]=bd;bd.$$id=bg;var be=this.__bF.getAllLogEvents();for(var i=0,l=be.length;i<l;i++ ){var bf=be[i];var bc=this.__bK(bf.loggerName,bf.level);if(bc[bd.classname]){bd.process(bf);}
;}
;}
,unregister:function(bh){var bi=bh.$$id;if(bi==null){return;}
;delete this.__bC[bh.classname];delete this.__bB[bi];delete bh.$$id;}
,addFilter:function(bk,bj,bl){if(typeof bk==o){bk=new RegExp(bk);}
;this.__bD.push({loggerMatch:bk,level:bl||this.__bA,appenderName:bj});}
,resetFilters:function(){this.__bD=[];}
,debug:function(bn,bm){qx.log.Logger.__bJ(S,arguments);}
,info:function(bp,bo){qx.log.Logger.__bJ(n,arguments);}
,warn:function(br,bq){qx.log.Logger.__bJ(h,arguments);}
,error:function(bt,bs){qx.log.Logger.__bJ(r,arguments);}
,trace:function(bx,bu){if(qx.log.Logger.isLoggerEnabled(X,bx)){var bw=qx.dev.StackTrace.getStackTrace();var bv=qx.lang.Array.fromArguments(arguments);bv.push(bw.join(P));qx.log.Logger.__bJ(X,bv);}
;}
,deprecatedMethodWarning:function(bA,by){if(qx.core.Environment.get(s)){var bz=qx.lang.Function.getName(bA);this.warn(f+bz+w+(by||p));this.trace();}
;}
,deprecatedClassWarning:function(bD,bB){if(qx.core.Environment.get(s)){var bC=bD.classname||I;this.warn(E+bC+w+(bB||t));this.trace();}
;}
,deprecatedEventWarning:function(bG,event,bF){if(qx.core.Environment.get(s)){var bE=bG.self?bG.self.classname:I;this.warn(k+(event||I)+D+bE+w+(bF||t));this.trace();}
;}
,deprecatedMixinWarning:function(bI,bH){if(qx.core.Environment.get(s)){var bJ=bI?bI.name:I;this.warn(c+bJ+w+(bH||t));this.trace();}
;}
,deprecatedConstantWarning:function(bN,bM,bK){if(qx.core.Environment.get(s)){if(bN.__defineGetter__){var self=this;var bL=bN[bM];bN.__defineGetter__(bM,function(){self.warn(V+bM+w+(bK||y));self.trace();return bL;}
);}
;}
;}
,deprecateMethodOverriding:function(bQ,bP,bR,bO){if(qx.core.Environment.get(s)){var bS=bQ.constructor;while(bS.classname!==bP.classname){if(bS.prototype.hasOwnProperty(bR)){this.warn(f+qx.lang.Function.getName(bQ[bR])+G+(bO||y));this.trace();break;}
;bS=bS.superclass;}
;}
;}
,clear:function(){this.__bF.clearHistory();}
,__bF:new qx.log.appender.RingBuffer(50),__bG:{trace:0,debug:1,info:2,warn:3,error:4},__bH:{},__bI:function(bT){if(bT){if(bT.classname){return bT.classname;}
;if(typeof bT==o){return bT;}
;}
;return K;}
,isLoggerEnabled:function(bX,bV){var bU=this.__bI(bV);var bW=this.__bK(bU,bX);return !!Object.keys(bW).length;}
,__bJ:function(cb,bY){var cd=bY.length<2?null:bY[0];var ce=this.__bI(cd);var ca=this.__bK(ce,cb);if(!Object.keys(ca).length){return;}
;var cg=cd?1:0;var cc=[];for(var i=cg,l=bY.length;i<l;i++ ){cc.push(this.__bM(bY[i],true));}
;var ch=new Date;var ci={time:ch,offset:ch-qx.Bootstrap.LOADSTART,level:cb,loggerName:ce,items:cc,win:window};if(cd){if(cd.$$hash!==undefined){ci.object=cd.$$hash;}
;if(cd.$$type){ci.clazz=cd;}
else if(cd.constructor){ci.clazz=cd.constructor;}
;}
;this.__bF.process(ci);for(var cf in ca){ca[cf].process(ci);}
;}
,__bK:function(cj,cl){var co=this.__bG;if(!this.__bD.length){if(co[cl]<co[this.__bA]){return [];}
;return this.__bC;}
;var cm=cj+R+cl;var ck=this.__bH[cm];if(ck!==undefined){return ck;}
;var ck={};for(var i=0;i<this.__bD.length;i++ ){var cn=this.__bD[i];if(co[cl]<co[cn.level]){continue;}
;if(cn.appenderName&&ck[cn.appenderName]){continue;}
;if(!cn.loggerMatch||cn.loggerMatch.test(cj)){if(cn.appenderName){ck[cn.appenderName]=this.__bC[cn.appenderName];}
else {return this.__bH[cm]=this.__bC;}
;}
;}
;return this.__bH[cm]=ck;}
,__bL:function(cq){if(cq===undefined){return W;}
else if(cq===null){return q;}
;if(cq.$$type){return v;}
;var cp=typeof cq;if(cp===J||cp==o||cp===C||cp===O){return cp;}
else if(cp===Y){if(cq.nodeType){return j;}
else if(cq instanceof Error||(cq.name&&cq.message)){return r;}
else if(cq.classname){return m;}
else if(cq instanceof Array){return e;}
else if(cq instanceof Date){return H;}
else {return U;}
;}
;if(cq.toString){return F;}
;return I;}
,__bM:function(cw,cv){var cz=this.__bL(cw);var ct=I;var cs=[];switch(cz){case q:case W:ct=cz;break;case o:case C:case O:case H:ct=cw;break;case j:if(cw.nodeType===9){ct=z;}
else if(cw.nodeType===3){ct=L+cw.nodeValue+M;}
else if(cw.nodeType===1){ct=cw.nodeName.toLowerCase();if(cw.id){ct+=u+cw.id;}
;}
else {ct=j;}
;break;case J:ct=qx.lang.Function.getName(cw)||cz;break;case m:ct=cw.basename+b+cw.$$hash+M;break;case v:case F:ct=cw.toString();break;case r:cs=qx.dev.StackTrace.getStackTraceFromError(cw);ct=(cw.basename?cw.basename+x:B)+cw.toString();break;case e:if(cv){ct=[];for(var i=0,l=cw.length;i<l;i++ ){if(ct.length>20){ct.push(d+(l-i)+g);break;}
;ct.push(this.__bM(cw[i],false));}
;}
else {ct=N+cw.length+T;}
;break;case U:if(cv){var cr;var cy=[];for(var cx in cw){cy.push(cx);}
;cy.sort();ct=[];for(var i=0,l=cy.length;i<l;i++ ){if(ct.length>20){ct.push(d+(l-i)+g);break;}
;cx=cy[i];cr=this.__bM(cw[cx],false);cr.key=cx;ct.push(cr);}
;}
else {var cu=0;for(var cx in cw){cu++ ;}
;ct=A+cu+Q;}
;break;};return {type:cz,text:ct,trace:cs};}
},defer:function(cA){var cB=qx.Bootstrap.$$logs;for(var i=0;i<cB.length;i++ ){cA.__bJ(cB[i][0],cB[i][1]);}
;qx.Bootstrap.debug=cA.debug;qx.Bootstrap.info=cA.info;qx.Bootstrap.warn=cA.warn;qx.Bootstrap.error=cA.error;qx.Bootstrap.trace=cA.trace;}
});}
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
(function(){var a="info",b="error",c="warn",d="debug",e="qx.core.MLogging",f="trace";qx.Mixin.define(e,{members:{__bN:qx.log.Logger,debug:function(g){this.__bO(d,arguments);}
,info:function(h){this.__bO(a,arguments);}
,warn:function(i){this.__bO(c,arguments);}
,error:function(j){this.__bO(b,arguments);}
,trace:function(k){this.__bO(f,arguments);}
,__bO:function(l,n){var m=qx.lang.Array.fromArguments(n);m.unshift(this);this.__bN[l].apply(this.__bN,m);}
}});}
)();
(function(){var a="qx.core.IDisposable";qx.Interface.define(a,{members:{dispose:function(){}
}});}
)();
(function(){var a="qx.core.Aspect",b="before",c="*",d="static";qx.Bootstrap.define(a,{statics:{__bv:[],wrap:function(h,l,j){var m=[];var e=[];var k=this.__bv;var g;for(var i=0;i<k.length;i++ ){g=k[i];if((g.type==null||j==g.type||g.type==c)&&(g.name==null||h.match(g.name))){g.pos==-1?m.push(g.fcn):e.push(g.fcn);}
;}
;if(m.length===0&&e.length===0){return l;}
;var f=function(){for(var i=0;i<m.length;i++ ){m[i].call(this,h,l,j,arguments);}
;var n=l.apply(this,arguments);for(var i=0;i<e.length;i++ ){e[i].call(this,h,l,j,arguments,n);}
;return n;}
;if(j!==d){f.self=l.self;f.base=l.base;}
;l.wrapper=f;f.original=l;return f;}
,addAdvice:function(q,o,p,name){this.__bv.push({fcn:q,pos:o===b?-1:1,type:p,name:name});}
}});}
)();
(function(){var a="function",b='loadeddata',c="pointerover",d='pause',f="transitionend",g="gecko",h="browser.name",j='timeupdate',k="qx.debug",m='canplay',n="HTMLEvents",o='loadedmetadata',p="css.transition",q="mobile safari",r="return;",s="browser.documentmode",t="safari",u='play',v='ended',w="",x="qx.bom.Event",y='playing',z="mouseover",A="No method available to remove native listener from ",B="No method available to add native listener to ",C="end-event",D="mshtml",E="engine.name",F='progress',G="webkit",H='volumechange',I='seeked',J="on",K="undefined";qx.Bootstrap.define(x,{statics:{addNativeListener:function(O,N,L,M){if(O.addEventListener){O.addEventListener(N,L,!!M);}
else if(O.attachEvent){O.attachEvent(J+N,L);}
else if(typeof O[J+N]!=K){O[J+N]=L;}
else {if(qx.core.Environment.get(k)){qx.log.Logger.warn(B+O);}
;}
;}
,removeNativeListener:function(S,R,P,Q){if(S.removeEventListener){S.removeEventListener(R,P,!!Q);}
else if(S.detachEvent){try{S.detachEvent(J+R,P);}
catch(e){if(e.number!==-2146828218){throw e;}
;}
;}
else if(typeof S[J+R]!=K){S[J+R]=null;}
else {if(qx.core.Environment.get(k)){qx.log.Logger.warn(A+S);}
;}
;}
,getTarget:function(e){return e.target||e.srcElement;}
,getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(E)==g)){try{e.relatedTarget&&e.relatedTarget.nodeType;}
catch(T){return null;}
;}
;return e.relatedTarget;}
else if(e.fromElement!==undefined&&(e.type===z||e.type===c)){return e.fromElement;}
else if(e.toElement!==undefined){return e.toElement;}
else {return null;}
;}
,preventDefault:function(e){if(e.preventDefault){e.preventDefault();}
else {try{e.keyCode=0;}
catch(U){}
;e.returnValue=false;}
;}
,stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();}
else {e.cancelBubble=true;}
;}
,fire:function(X,V){if(document.createEvent){var W=document.createEvent(n);W.initEvent(V,true,true);return !X.dispatchEvent(W);}
else {var W=document.createEventObject();return X.fireEvent(J+V,W);}
;}
,supportsEvent:function(Y,bh){var bd=qx.core.Environment.get(h);var be=qx.core.Environment.get(E);if(bh.toLowerCase().indexOf(f)!=-1&&be===D&&qx.core.Environment.get(s)>9){return true;}
;var bf=[q,t];if(be===G&&bf.indexOf(bd)>-1){var ba=[b,F,j,I,m,u,y,d,o,v,H];if(ba.indexOf(bh.toLowerCase())>-1){return true;}
;}
;if(Y!=window&&bh.toLowerCase().indexOf(f)!=-1){var bg=qx.core.Environment.get(p);return (bg&&bg[C]==bh);}
;var bb=J+bh.toLowerCase();var bc=(bb in Y);if(!bc){bc=typeof Y[bb]==a;if(!bc&&Y.setAttribute){Y.setAttribute(bb,r);bc=typeof Y[bb]==a;Y.removeAttribute(bb);}
;}
;return bc;}
,getEventName:function(bi,bl){var bj=[w].concat(qx.bom.Style.VENDOR_PREFIXES);for(var i=0,l=bj.length;i<l;i++ ){var bk=bj[i].toLowerCase();if(qx.bom.Event.supportsEvent(bi,bk+bl)){return bk?bk+qx.lang.String.firstUp(bl):bl;}
;}
;return null;}
}});}
)();
(function(){var a="[object Opera]",b="function",c="[^\\.0-9]",d="4.0",e="gecko",f="1.9.0.0",g="Version/",h="9.0",i="8.0",j="engine.version",k="Gecko",l="AppleWebKit/",m="Trident",n="Unsupported client: ",o="",p="opera",q="Windows Phone",r="! Assumed gecko version 1.9.0.0 (Firefox 3.0).",s="mshtml",t="engine.name",u="webkit",v="5.0",w=".",x="qx.bom.client.Engine";qx.Bootstrap.define(x,{statics:{getVersion:function(){var A=window.navigator.userAgent;var B=o;if(qx.bom.client.Engine.__bS()){var z=/Trident\/([^\);]+)(\)|;)/.test(A);if(/MSIE\s+([^\);]+)(\)|;)/.test(A)){B=RegExp.$1;if(B<8&&z){if(RegExp.$1==d){B=i;}
else if(RegExp.$1==v){B=h;}
;}
;}
else if(z){var D=/\brv\:(\d+?\.\d+?)\b/.exec(A);if(D){B=D[1];}
;}
;}
else if(qx.bom.client.Engine.__bP()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(A)){if(A.indexOf(g)!=-1){var D=A.match(/Version\/(\d+)\.(\d+)/);B=D[1]+w+D[2].charAt(0)+w+D[2].substring(1,D[2].length);}
else {B=RegExp.$1+w+RegExp.$2;if(RegExp.$3!=o){B+=w+RegExp.$3;}
;}
;}
;}
else if(qx.bom.client.Engine.__bQ()){if(/AppleWebKit\/([^ ]+)/.test(A)){B=RegExp.$1;var C=RegExp(c).exec(B);if(C){B=B.slice(0,C.index);}
;}
;}
else if(qx.bom.client.Engine.__bR()){if(/rv\:([^\);]+)(\)|;)/.test(A)){B=RegExp.$1;}
;}
else {var y=window.qxFail;if(y&&typeof y===b){B=y().FULLVERSION;}
else {B=f;qx.Bootstrap.warn(n+A+r);}
;}
;return B;}
,getName:function(){var name;if(qx.bom.client.Engine.__bS()){name=s;}
else if(qx.bom.client.Engine.__bP()){name=p;}
else if(qx.bom.client.Engine.__bQ()){name=u;}
else if(qx.bom.client.Engine.__bR()){name=e;}
else {var E=window.qxFail;if(E&&typeof E===b){name=E().NAME;}
else {name=e;qx.Bootstrap.warn(n+window.navigator.userAgent+r);}
;}
;return name;}
,__bP:function(){return window.opera&&Object.prototype.toString.call(window.opera)==a;}
,__bQ:function(){return window.navigator.userAgent.indexOf(l)!=-1;}
,__bR:function(){return (window.navigator.mozApps||window.navigator.buildID)&&window.navigator.product===k&&window.navigator.userAgent.indexOf(m)==-1;}
,__bS:function(){if(window.navigator.cpuClass&&(/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent)||/Trident\/\d+?\.\d+?/.test(window.navigator.userAgent))){return true;}
;if(qx.bom.client.Engine.__bT()){return true;}
;return false;}
,__bT:function(){return window.navigator.userAgent.indexOf(q)>-1;}
},defer:function(F){qx.core.Environment.add(j,F.getVersion);qx.core.Environment.add(t,F.getName);}
});}
)();
(function(){var a="qx.bom.client.CssTransition",b="E",c="transitionEnd",d="e",e="nd",f="transition",g="css.transition",h="Trans";qx.Bootstrap.define(a,{statics:{getTransitionName:function(){return qx.bom.Style.getPropertyName(f);}
,getSupport:function(){var name=qx.bom.client.CssTransition.getTransitionName();if(!name){return null;}
;var i=qx.bom.Event.getEventName(window,c);i=i==c?i.toLowerCase():i;if(!i){i=name+(name.indexOf(h)>0?b:d)+e;}
;return {name:name,"end-event":i};}
},defer:function(j){qx.core.Environment.add(g,j.getSupport);}
});}
)();
(function(){var a="-",b="qx.bom.Style",c="",d='-',e="Webkit",f="ms",g=":",h=";",j="Moz",k="O",m="string",n="Khtml";qx.Bootstrap.define(b,{statics:{VENDOR_PREFIXES:[e,j,k,f,n],__bU:{},__bV:null,getPropertyName:function(q){var o=document.documentElement.style;if(o[q]!==undefined){return q;}
;for(var i=0,l=this.VENDOR_PREFIXES.length;i<l;i++ ){var p=this.VENDOR_PREFIXES[i]+qx.lang.String.firstUp(q);if(o[p]!==undefined){return p;}
;}
;return null;}
,getCssName:function(r){var s=this.__bU[r];if(!s){s=r.replace(/[A-Z]/g,function(t){return (d+t.charAt(0).toLowerCase());}
);if((/^ms/.test(s))){s=a+s;}
;this.__bU[r]=s;}
;return s;}
,getAppliedStyle:function(A,x,z,v){var C=qx.bom.Style.getCssName(x);var w=qx.dom.Node.getWindow(A);var u=(v!==false)?[null].concat(this.VENDOR_PREFIXES):[null];for(var i=0,l=u.length;i<l;i++ ){var y=false;var B=u[i]?a+u[i].toLowerCase()+a+z:z;if(qx.bom.Style.__bV){y=qx.bom.Style.__bV.call(w,C,B);}
else {A.style.cssText+=C+g+B+h;y=(typeof A.style[x]==m&&A.style[x]!==c);}
;if(y){return B;}
;}
;return null;}
},defer:function(D){if(window.CSS&&window.CSS.supports){qx.bom.Style.__bV=window.CSS.supports.bind(window.CSS);}
else if(window.supportsCSS){qx.bom.Style.__bV=window.supportsCSS.bind(window);}
;}
});}
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
(function(){var a="rim_tabletos",b="10.1",c="Darwin",d="10.3",e="Windows Phone",f="os.version",g="10.7",h="2003",i=")",j="iPhone",k="android",l="unix",m="ce",n="7",o="10.11",p="SymbianOS",q="10.5",r="os.name",s="10.12",t="10.9",u="|",v="MacPPC",w="95",x="iPod",y="10.8",z="\.",A="Win64",B="linux",C="me",D="10.2",E="Macintosh",F="Android",G="Windows",H="98",I="ios",J="10",K="vista",L="8",M="blackberry",N="2000",O="8.1",P="(",Q="",R="win",S="Linux",T="10.6",U="BSD",V="10.0",W="10.4",X="Mac OS X",Y="iPad",bu="X11",bv="xp",bw="symbian",bq="qx.bom.client.OperatingSystem",br="g",bs="Win32",bt="10.10",bA="osx",bB="webOS",bC="RIM Tablet OS",bD="BlackBerry",bx="nt4",by=".",bz="MacIntel",bp="webos";qx.Bootstrap.define(bq,{statics:{getName:function(){if(!navigator){return Q;}
;var bE=navigator.platform||Q;var bF=navigator.userAgent||Q;if(bE.indexOf(G)!=-1||bE.indexOf(bs)!=-1||bE.indexOf(A)!=-1||bF.indexOf(e)!=-1){return R;}
else if(bE.indexOf(E)!=-1||bE.indexOf(v)!=-1||bE.indexOf(bz)!=-1||bE.indexOf(X)!=-1){return bA;}
else if(bF.indexOf(bC)!=-1){return a;}
else if(bF.indexOf(bB)!=-1){return bp;}
else if(bE.indexOf(x)!=-1||bE.indexOf(j)!=-1||bE.indexOf(Y)!=-1){return I;}
else if(bF.indexOf(F)!=-1){return k;}
else if(bE.indexOf(S)!=-1){return B;}
else if(bE.indexOf(bu)!=-1||bE.indexOf(U)!=-1||bE.indexOf(c)!=-1){return l;}
else if(bE.indexOf(p)!=-1){return bw;}
else if(bE.indexOf(bD)!=-1){return M;}
;return Q;}
,__bW:{"Windows NT 10.0":J,"Windows NT 6.3":O,"Windows NT 6.2":L,"Windows NT 6.1":n,"Windows NT 6.0":K,"Windows NT 5.2":h,"Windows NT 5.1":bv,"Windows NT 5.0":N,"Windows 2000":N,"Windows NT 4.0":bx,"Win 9x 4.90":C,"Windows CE":m,"Windows 98":H,"Win98":H,"Windows 95":w,"Win95":w,"Mac OS X 10_12":s,"Mac OS X 10.12":s,"Mac OS X 10_11":o,"Mac OS X 10.11":o,"Mac OS X 10_10":bt,"Mac OS X 10.10":bt,"Mac OS X 10_9":t,"Mac OS X 10.9":t,"Mac OS X 10_8":y,"Mac OS X 10.8":y,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":T,"Mac OS X 10.6":T,"Mac OS X 10_5":q,"Mac OS X 10.5":q,"Mac OS X 10_4":W,"Mac OS X 10.4":W,"Mac OS X 10_3":d,"Mac OS X 10.3":d,"Mac OS X 10_2":D,"Mac OS X 10.2":D,"Mac OS X 10_1":b,"Mac OS X 10.1":b,"Mac OS X 10_0":V,"Mac OS X 10.0":V},getVersion:function(){var bG=qx.bom.client.OperatingSystem.__bX(navigator.userAgent);if(bG==null){bG=qx.bom.client.OperatingSystem.__bY(navigator.userAgent);}
;if(bG!=null){return bG;}
else {return Q;}
;}
,__bX:function(bH){var bK=[];for(var bJ in qx.bom.client.OperatingSystem.__bW){bK.push(bJ);}
;var bL=new RegExp(P+bK.join(u).replace(/\./g,z)+i,br);var bI=bL.exec(bH);if(bI&&bI[1]){return qx.bom.client.OperatingSystem.__bW[bI[1]];}
;return null;}
,__bY:function(bR){var bM=bR.indexOf(e)!=-1;var bS=bR.indexOf(F)!=-1;var bN=bR.match(/(iPad|iPhone|iPod)/i)?true:false;if(bM){var bU=new RegExp(/Windows Phone (\d+(?:\.\d+)+)/i);var bP=bU.exec(bR);if(bP&&bP[1]){return bP[1];}
;}
else if(bS){var bQ=new RegExp(/ Android (\d+(?:\.\d+)+)/i);var bT=bQ.exec(bR);if(bT&&bT[1]){return bT[1];}
;}
else if(bN){var bV=new RegExp(/(CPU|iPhone|iPod) OS (\d+)_(\d+)(?:_(\d+))*\s+/);var bO=bV.exec(bR);if(bO&&bO[2]&&bO[3]){if(bO[4]){return bO[2]+by+bO[3]+by+bO[4];}
else {return bO[2]+by+bO[3];}
;}
;}
;return null;}
},defer:function(bW){qx.core.Environment.add(r,bW.getName);qx.core.Environment.add(f,bW.getVersion);}
});}
)();
(function(){var a="CSS1Compat",b="IEMobile",c=" OPR/",d="msie",e="android",f="operamini",g="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|iPad|iPhone|OmniWeb|Maxthon|Pre|PhantomJS|Mobile Safari|Safari",h="browser.quirksmode",i="browser.name",j="trident",k="mobile chrome",l=")(/| )([0-9]+\.[0-9])",m="iemobile",n="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",o="IEMobile|Maxthon|MSIE|Trident",p="opera mobi",q="Mobile Safari",r="operamobile",s="ie",t="mobile safari",u="qx.bom.client.Browser",v="",w="opera mini",x="(",y="browser.version",z="opera",A="ce",B=")(/|)?([0-9]+\.[0-9])?",C="mshtml",D="Opera Mini|Opera Mobi|Opera",E="edge",F="webkit",G="browser.documentmode",H="5.0",I="Mobile/";qx.Bootstrap.define(u,{statics:{getName:function(){var L=navigator.userAgent;var M=new RegExp(x+qx.bom.client.Browser.__ca+B);var K=L.match(M);if(!K){return v;}
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
,getVersion:function(){var P=navigator.userAgent;var Q=new RegExp(x+qx.bom.client.Browser.__ca+l);var N=P.match(Q);if(!N){return v;}
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
,__ca:{"webkit":g,"gecko":n,"mshtml":o,"opera":D}[qx.bom.client.Engine.getName()]},defer:function(R){qx.core.Environment.add(i,R.getName);qx.core.Environment.add(y,R.getVersion);qx.core.Environment.add(G,R.getDocumentMode);qx.core.Environment.add(h,R.getQuirksMode);}
});}
)();
(function(){var b=': ',c="The mixin to include into class '",d="constructor",e="' is abstract! It is not possible to instantiate it.",f="environment",g='"! The value is undefined: ',h="Property module disabled.",j='Invalid check definition of property "',k="singleton",m="qx.event.type.Data",n='Forbidden environment setting "',o='". It is forbidden to define a default setting for an external namespace!',p=": the event value needs to be a string with the class name of the event object which will be fired.",q='Invalid include definition in class "',r=" could not refine property: ",s='Invalid config in class "',t="toString",u="! Key: ",v="events",w='Invalid type of key "',x='Invalid transform definition of property "',y="@",z="Interface",A='Annonation for static "',B="Please initialize '",C='Assumed static class because no "extend" key was found. ',D="'.",E="' objects using the new keyword!",F=": the event value/type cannot be changed from ",G="destructor",H="destruct",I='"! The value is undefined/null!',J='" of Class "',K='" contains an invalid mixin at position ',L='Annonation for "',M="Could not refine an init value if there was previously no init value defined. Property '",N='" of property "',O='Interface "',P="extend",Q="module.property",R='Error in include definition of class "',S="string",T='Overwriting member "',U="module.events",V='Cannot annotate private member "',W='" definition for class "',X="@destruct",Y="members",cI='". It is forbidden to define a ',cJ="' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.",cK=" already has a property: ",cE="Events module not enabled.",cF="The mixin to patch class '",cG="' of class: '",cH='"!',cP='"extend" parameter is null or undefined',cQ='.',cW="' is undefined/null!",cR=" could not be refined!",cL="Could not refine non-existent property: '",cM=".prototype",cN="function",cO='The configuration key "',cV='" is not allowed!',dz=": the events must be defined as map!",ej="static",cX='undefined',cS='"! The type of the key must be "',cT='extend',ef='Cannot annotate private static "',cU="refine",cY="!",da='@',db="properties",dg="'!",dh='"! ',di="_",dc="The class '",dd="Class",de='"! The value needs to be a map!',df='Forbidden variant "',dm='"! Needs to be a String.',dn='"! Only interfaces and arrays of interfaces are allowed!',dp='The include definition in class "',dq='" found in "',dj=".",dk='". It is forbidden to define a variant for an external namespace!',eg="object",dl="$$init_",du='"! Only mixins and arrays of mixins are allowed!',dv='!',ei='"! Needs to be a String, Array or Function.',dw='"! Every non-static class has to extend at least the "qx.core.Object" class.',dr="init",ds='" without a "refine" flag in the property definition! This class: ',eh="qx.aspects",dt="Incomplete parameters!",dx="@construct",dy='" does not exist!',dK="Class ",dJ="Array",dI="Async",dO="variants",dN='The implement definition in class "',dM='" is already used by Class "',dL='Overwriting private member "',dD='Invalid type "',dC="/",dB="statics",dA='Invalid key "',dH=" to ",dG="' of class '",dF="",dE="]",dV="member",dU=', original class: ',dT='" contains an invalid interface at position ',dS="qx.Class",ea='Could not refine property "',dY="Mixin",dX="settings",dW="[Class ",dR="abstract",dQ='environment setting for an external namespace!',dP='" in class "',ed="The class ',",ec='Invalid implement definition in class "',eb="qx.debug",ee='Forbidden setting "';qx.Bootstrap.define(dS,{statics:{__cb:qx.core.Environment.get(Q)?qx.core.Property:null,define:function(name,en){if(!en){en={};}
;if(en.include&&!(qx.Bootstrap.getClass(en.include)===dJ)){en.include=[en.include];}
;if(en.implement&&!(qx.Bootstrap.getClass(en.implement)===dJ)){en.implement=[en.implement];}
;var ek=false;if(!en.hasOwnProperty(P)&&!en.type){en.type=ej;ek=true;}
;if(qx.core.Environment.get(eb)){try{this.__q(name,en);}
catch(eo){if(ek){eo.message=C+eo.message;}
;throw eo;}
;}
;var el=this.__cf(name,en.type,en.extend,en.statics,en.construct,en.destruct,en.include);[y,dx,X].forEach(function(ep){this.__ce(el,ep,null,en[ep]);}
,this);if(en.extend){if(en.properties){this.__ch(el,en.properties,true);}
;if(en.members){this.__cj(el,en.members,true,true,false);}
;if(en.events){this.__cg(el,en.events,true);}
;if(en.include){for(var i=0,l=en.include.length;i<l;i++ ){this.__cn(el,en.include[i],false);}
;}
;}
else if(en.hasOwnProperty(cT)&&qx.core.Environment.get(eb)){throw new Error(cP);}
;if(en.environment){for(var em in en.environment){qx.core.Environment.add(em,en.environment[em]);}
;}
;if(en.implement){for(var i=0,l=en.implement.length;i<l;i++ ){this.__cl(el,en.implement[i]);}
;}
;if(qx.core.Environment.get(eb)){this.__cd(el);}
;if(en.defer){en.defer.self=el;qx.Bootstrap.addPendingDefer(el,function(){en.defer(el,el.prototype,{add:function(name,eq){var er={};er[name]=eq;qx.Class.__ch(el,er,true);}
});}
);}
;return el;}
,undefine:function(name){delete this.$$registry[name];var eu=name.split(dj);var et=[window];for(var i=0;i<eu.length;i++ ){et.push(et[i][eu[i]]);}
;for(var i=et.length-1;i>=1;i-- ){var es=et[i];var parent=et[i-1];if(qx.Bootstrap.isFunction(es)||qx.Bootstrap.objectGetLength(es)===0){delete parent[eu[i-1]];}
else {break;}
;}
;}
,isDefined:qx.util.OOUtil.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,getByName:qx.Bootstrap.getByName,include:function(ew,ev){if(qx.core.Environment.get(eb)){if(!ev){throw new Error(c+ew.classname+cW);}
;qx.Mixin.isCompatible(ev,ew);}
;qx.Class.__cn(ew,ev,false);}
,patch:function(ez,ey){if(qx.core.Environment.get(eb)){if(!ey){throw new Error(cF+ez.classname+cW);}
;qx.Mixin.isCompatible(ey,ez);}
;qx.Class.__cn(ez,ey,true);}
,isClass:function(eA){return eA&&eA.$$type===dd&&eA.constructor===eA;}
,isSubClassOf:function(eC,eB){if(!eC){return false;}
;if(eC==eB){return true;}
;if(eC.prototype instanceof eB){return true;}
;return false;}
,getPropertyDefinition:qx.util.OOUtil.getPropertyDefinition,getProperties:function(eE){var eD=[];while(eE){if(eE.$$properties){eD.push.apply(eD,Object.keys(eE.$$properties));}
;eE=eE.superclass;}
;return eD;}
,getByProperty:function(eF,name){while(eF){if(eF.$$properties&&eF.$$properties[name]){return eF;}
;eF=eF.superclass;}
;return null;}
,hasProperty:qx.util.OOUtil.hasProperty,getEventType:qx.util.OOUtil.getEventType,supportsEvent:qx.util.OOUtil.supportsEvent,hasOwnMixin:function(eH,eG){return eH.$$includes&&eH.$$includes.indexOf(eG)!==-1;}
,getByMixin:function(eK,eJ){var eI,i,l;while(eK){if(eK.$$includes){eI=eK.$$flatIncludes;for(i=0,l=eI.length;i<l;i++ ){if(eI[i]===eJ){return eK;}
;}
;}
;eK=eK.superclass;}
;return null;}
,getMixins:qx.util.OOUtil.getMixins,hasMixin:function(eM,eL){return !!this.getByMixin(eM,eL);}
,hasOwnInterface:function(eO,eN){return eO.$$implements&&eO.$$implements.indexOf(eN)!==-1;}
,getByInterface:qx.util.OOUtil.getByInterface,getInterfaces:function(eQ){var eP=[];while(eQ){if(eQ.$$implements){eP.push.apply(eP,eQ.$$flatImplements);}
;eQ=eQ.superclass;}
;return eP;}
,hasInterface:qx.util.OOUtil.hasInterface,implementsInterface:function(eS,eR){var eT=eS.constructor;if(this.hasInterface(eT,eR)){return true;}
;if(qx.Interface.objectImplements(eS,eR)){return true;}
;if(qx.Interface.classImplements(eT,eR)){return true;}
;return false;}
,getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;this.$$instance=new this();delete this.$$allowconstruct;}
;return this.$$instance;}
,getSubclasses:function(eU){if(!eU){return null;}
;var eV={};var eW=qx.Class.$$registry;for(var name in eW){if(eW[name].superclass&&eW[name].superclass==eU){eV[name]=eW[name];}
;}
;return eV;}
,genericToString:function(){return dW+this.classname+dE;}
,$$registry:qx.Bootstrap.$$registry,__p:qx.core.Environment.select(eb,{"true":{"@":eg,"@construct":eg,"@destruct":eg,"type":S,"extend":cN,"implement":eg,"include":eg,"construct":cN,"statics":eg,"properties":eg,"members":eg,"environment":eg,"events":eg,"defer":cN,"destruct":cN},"default":null}),__cc:qx.core.Environment.select(eb,{"true":{"@":eg,"type":S,"statics":eg,"environment":eg,"defer":cN},"default":null}),__q:qx.core.Environment.select(eb,{"true":function(name,fb){if(fb.type&&!(fb.type===ej||fb.type===dR||fb.type===k)){throw new Error(dD+fb.type+W+name+cH);}
;if(fb.type&&fb.type!==ej&&!fb.extend){throw new Error(s+name+dw);}
;var fa=fb.type===ej?this.__cc:this.__p;for(var eY in fb){if(!fa[eY]){throw new Error(cO+eY+dP+name+cV);}
;if(fb[eY]==null){throw new Error(dA+eY+dP+name+I);}
;if(typeof fb[eY]!==fa[eY]){throw new Error(w+eY+dP+name+cS+fa[eY]+cH);}
;}
;var eX=[dB,db,Y,f,dX,dO,v];for(var i=0,l=eX.length;i<l;i++ ){var eY=eX[i];if(fb[eY]!==undefined&&(fb[eY].$$hash!==undefined||!qx.Bootstrap.isObject(fb[eY]))){throw new Error(dA+eY+dP+name+de);}
;}
;if(fb.include){if(qx.Bootstrap.getClass(fb.include)===dJ){for(var i=0,a=fb.include,l=a.length;i<l;i++ ){if(a[i]==null||a[i].$$type!==dY){throw new Error(dp+name+K+i+b+a[i]);}
;}
;}
else {throw new Error(q+name+du);}
;}
;if(fb.implement){if(qx.Bootstrap.getClass(fb.implement)===dJ){for(var i=0,a=fb.implement,l=a.length;i<l;i++ ){if(a[i]==null||a[i].$$type!==z){throw new Error(dN+name+dT+i+b+a[i]);}
;}
;}
else {throw new Error(ec+name+dn);}
;}
;if(fb.include){try{qx.Mixin.checkCompatibility(fb.include);}
catch(fc){throw new Error(R+name+dh+fc.message);}
;}
;if(fb.environment){for(var eY in fb.environment){if(eY.substr(0,eY.indexOf(dj))!=name.substr(0,name.indexOf(dj))){throw new Error(n+eY+dq+name+cI+dQ);}
;}
;}
;if(fb.settings){for(var eY in fb.settings){if(eY.substr(0,eY.indexOf(dj))!=name.substr(0,name.indexOf(dj))){throw new Error(ee+eY+dq+name+o);}
;}
;}
;if(fb.variants){for(var eY in fb.variants){if(eY.substr(0,eY.indexOf(dj))!=name.substr(0,name.indexOf(dj))){throw new Error(df+eY+dq+name+dk);}
;}
;}
;}
,"default":function(name,fd){}
}),__cd:qx.core.Environment.select(eb,{"true":function(fg){var ff=fg.superclass;while(ff){if(ff.$$classtype!==dR){break;}
;var fe=ff.$$implements;if(fe){for(var i=0;i<fe.length;i++ ){qx.Interface.assert(fg,fe[i],true);}
;}
;ff=ff.superclass;}
;}
,"default":function(fh){}
}),__ce:function(fl,fj,fk,fi){if(fi!==undefined){if(fl.$$annotations===undefined){fl.$$annotations={};fl.$$annotations[fj]={};}
else if(fl.$$annotations[fj]===undefined){fl.$$annotations[fj]={};}
;if(!qx.lang.Type.isArray(fi)){fi=[fi];}
;if(fk){fl.$$annotations[fj][fk]=fi;}
else {fl.$$annotations[fj]=fi;}
;}
;}
,__cf:function(name,fw,fv,fm,ft,fq,fp){var fs=function(){return (typeof this==cX);}
;var fr;if(!fv&&qx.core.Environment.get(eh)==false){fr=fm||{};qx.Bootstrap.setDisplayNames(fr,name);}
else {fr={};if(fv){if(!ft){ft=this.__co();}
;if(this.__cp(fv,fp)){fr=this.__cq(ft,name,fw);}
else {fr=ft;}
;if(fw===k){fr.getInstance=this.getInstance;}
;qx.Bootstrap.setDisplayName(ft,name,d);}
;if(fm){qx.Bootstrap.setDisplayNames(fm,name);var fu;for(var i=0,a=Object.keys(fm),l=a.length;i<l;i++ ){fu=a[i];var fn=fm[fu];if(qx.core.Environment.get(eb)){if(fu.charAt(0)===da){if(fm[fu.substring(1)]===undefined){throw new Error(A+fu.substring(1)+J+fr.classname+dy);}
;if(fu.charAt(1)===di&&fu.charAt(2)===di){throw new Error(ef+fu.substring(1)+J+fr.classname);}
;}
;}
;if(fu.charAt(0)===da){continue;}
;if(qx.core.Environment.get(eh)){if(fn instanceof Function){fn=qx.core.Aspect.wrap(name+dj+fu,fn,ej);}
;fr[fu]=fn;}
else {fr[fu]=fn;}
;this.__ce(fr,dB,fu,fm[y+fu]);}
;}
;}
;var fo=name?qx.Bootstrap.createNamespace(name,fr):dF;fr.classname=name;if(!fs()){try{fr.name=name;}
catch(fx){}
;}
;fr.basename=fo;fr.$$type=dd;if(fw){fr.$$classtype=fw;}
;if(!fr.hasOwnProperty(t)){fr.toString=this.genericToString;}
;if(fv){qx.Bootstrap.extendClass(fr,ft,fv,name,fo);if(fq){if(qx.core.Environment.get(eh)){fq=qx.core.Aspect.wrap(name,fq,G);}
;fr.$$destructor=fq;qx.Bootstrap.setDisplayName(fq,name,H);}
;}
;this.$$registry[name]=fr;return fr;}
,__cg:function(fy,fz,fB){if(qx.core.Environment.get(eb)){if(typeof fz!==eg||qx.Bootstrap.getClass(fz)===dJ){throw new Error(fy.classname+dz);}
;for(var fA in fz){if(typeof fz[fA]!==S){throw new Error(fy.classname+dC+fA+p);}
;}
;if(fy.$$events&&fB!==true){for(var fA in fz){if(fy.$$events[fA]!==undefined&&fy.$$events[fA]!==fz[fA]){throw new Error(fy.classname+dC+fA+F+fy.$$events[fA]+dH+fz[fA]);}
;}
;}
;}
;if(fy.$$events){for(var fA in fz){fy.$$events[fA]=fz[fA];}
;}
else {fy.$$events=fz;}
;}
,__ch:function(fD,fG,fE){if(!qx.core.Environment.get(Q)){throw new Error(h);}
;var fF;if(fE===undefined){fE=false;}
;var fC=fD.prototype;for(var name in fG){fF=fG[name];if(qx.core.Environment.get(eb)){this.__ci(fD,name,fF,fE);}
;fF.name=name;if(!fF.refine){if(fD.$$properties===undefined){fD.$$properties={};}
;fD.$$properties[name]=fF;}
;if(fF.init!==undefined){fD.prototype[dl+name]=fF.init;}
;if(fF.event!==undefined){if(!qx.core.Environment.get(U)){throw new Error(cE);}
;var event={};event[fF.event]=m;if(fF.async){event[fF.event+dI]=m;}
;this.__cg(fD,event,fE);}
;if(fF.inheritable){this.__cb.$$inheritable[name]=true;if(!fC.$$refreshInheritables){this.__cb.attachRefreshInheritables(fD);}
;}
;if(!fF.refine){this.__cb.attachMethods(fD,name,fF);}
;this.__ce(fD,db,name,fF[y]);}
;}
,__ci:qx.core.Environment.select(eb,{"true":function(fH,name,fN,fJ){if(!qx.core.Environment.get(Q)){throw new Error(h);}
;var fM=this.hasProperty(fH,name);if(fM){var fI=this.getPropertyDefinition(fH,name);if(fN.refine&&fI.init===undefined){throw new Error(M+name+dG+fH.classname+D);}
;}
;if(!fM&&fN.refine){throw new Error(cL+name+cG+fH.classname+dg);}
;if(fM&&!fJ){throw new Error(dK+fH.classname+cK+name+cY);}
;if(fM&&fJ){if(!fN.refine){throw new Error(ea+name+ds+fH.classname+dU+this.getByProperty(fH,name).classname+cQ);}
;for(var fK in fN){if(fK!==dr&&fK!==cU&&fK!==y){throw new Error(dK+fH.classname+r+name+u+fK+cR);}
;}
;}
;var fL=fN.group?this.__cb.$$allowedGroupKeys:this.__cb.$$allowedKeys;for(var fK in fN){if(fL[fK]===undefined){throw new Error(cO+fK+N+name+dP+fH.classname+cV);}
;if(fN[fK]===undefined){throw new Error(dA+fK+N+name+dP+fH.classname+g+fN[fK]);}
;if(fL[fK]!==null&&typeof fN[fK]!==fL[fK]){throw new Error(w+fK+N+name+dP+fH.classname+cS+fL[fK]+cH);}
;}
;if(fN.transform!=null){if(!(typeof fN.transform===S)){throw new Error(x+name+dP+fH.classname+dm);}
;}
;if(fN.check!=null){if(!qx.Bootstrap.isString(fN.check)&&!qx.Bootstrap.isArray(fN.check)&&!qx.Bootstrap.isFunction(fN.check)){throw new Error(j+name+dP+fH.classname+ei);}
;}
;}
,"default":null}),__cj:function(fV,fO,fQ,fS,fU){var fP=fV.prototype;var fT,fR;qx.Bootstrap.setDisplayNames(fO,fV.classname+cM);for(var i=0,a=Object.keys(fO),l=a.length;i<l;i++ ){fT=a[i];fR=fO[fT];if(qx.core.Environment.get(eb)){if(fT.charAt(0)===da){var fW=fT.substring(1);if(fO[fW]===undefined&&fP[fW]===undefined){throw new Error(L+fW+J+fV.classname+dy);}
;if(fT.charAt(1)===di&&fT.charAt(2)===di){throw new Error(V+fT.substring(1)+J+fV.classname);}
;}
else {if(fP[fT]!==undefined&&fT.charAt(0)===di&&fT.charAt(1)===di){throw new Error(dL+fT+J+fV.classname+cV);}
;if(fQ!==true&&fP.hasOwnProperty(fT)){throw new Error(T+fT+J+fV.classname+cV);}
;}
;}
;if(fT.charAt(0)===da){var fW=fT.substring(1);if(fO[fW]===undefined){this.__ce(fV,Y,fW,fO[fT]);}
;continue;}
;if(fP[fT]!=undefined&&fP[fT].$$install){fP[fT].$$install();}
;if(fS!==false&&fR instanceof Function&&fR.$$type==null){if(fU==true){fR=this.__ck(fR,fP[fT]);}
else {if(fP[fT]){fR.base=fP[fT];}
;fR.self=fV;}
;if(qx.core.Environment.get(eh)){fR=qx.core.Aspect.wrap(fV.classname+dj+fT,fR,dV);}
;}
;fP[fT]=fR;this.__ce(fV,Y,fT,fO[y+fT]);}
;}
,__ck:function(fX,fY){if(fY){return function(){var gb=fX.base;fX.base=fY;var ga=fX.apply(this,arguments);fX.base=gb;return ga;}
;}
else {return fX;}
;}
,__cl:function(ge,gc){if(qx.core.Environment.get(eb)){if(!ge||!gc){throw new Error(dt);}
;if(this.hasOwnInterface(ge,gc)){throw new Error(O+gc.name+dM+ge.classname+dv);}
;if(ge.$$classtype!==dR){qx.Interface.assert(ge,gc,true);}
;}
;var gd=qx.Interface.flatten([gc]);if(ge.$$implements){ge.$$implements.push(gc);ge.$$flatImplements.push.apply(ge.$$flatImplements,gd);}
else {ge.$$implements=[gc];ge.$$flatImplements=gd;}
;}
,__cm:function(gg){var name=gg.classname;var gf=this.__cq(gg,name,gg.$$classtype);for(var i=0,a=Object.keys(gg),l=a.length;i<l;i++ ){gh=a[i];gf[gh]=gg[gh];}
;gf.prototype=gg.prototype;var gj=gg.prototype;for(var i=0,a=Object.keys(gj),l=a.length;i<l;i++ ){gh=a[i];var gk=gj[gh];if(gk&&gk.self==gg){gk.self=gf;}
;}
;for(var gh in this.$$registry){var gi=this.$$registry[gh];if(!gi){continue;}
;if(gi.base==gg){gi.base=gf;}
;if(gi.superclass==gg){gi.superclass=gf;}
;if(gi.$$original){if(gi.$$original.base==gg){gi.$$original.base=gf;}
;if(gi.$$original.superclass==gg){gi.$$original.superclass=gf;}
;}
;}
;qx.Bootstrap.createNamespace(name,gf);this.$$registry[name]=gf;return gf;}
,__cn:function(gq,go,gn){if(qx.core.Environment.get(eb)){if(!gq||!go){throw new Error(dt);}
;}
;if(this.hasMixin(gq,go)){return;}
;var gl=gq.$$original;if(go.$$constructor&&!gl){gq=this.__cm(gq);}
;var gm=qx.Mixin.flatten([go]);var gp;for(var i=0,l=gm.length;i<l;i++ ){gp=gm[i];if(gp.$$events){this.__cg(gq,gp.$$events,gn);}
;if(gp.$$properties){this.__ch(gq,gp.$$properties,gn);}
;if(gp.$$members){this.__cj(gq,gp.$$members,gn,gn,gn);}
;}
;if(gq.$$includes){gq.$$includes.push(go);gq.$$flatIncludes.push.apply(gq.$$flatIncludes,gm);}
else {gq.$$includes=[go];gq.$$flatIncludes=gm;}
;}
,__co:function(){function gr(){gr.base.apply(this,arguments);}
;return gr;}
,__cp:function(gt,gs){if(qx.core.Environment.get(eb)){return true;}
;if(gt&&gt.$$includes){var gu=gt.$$flatIncludes;for(var i=0,l=gu.length;i<l;i++ ){if(gu[i].$$constructor){return true;}
;}
;}
;if(gs){var gv=qx.Mixin.flatten(gs);for(var i=0,l=gv.length;i<l;i++ ){if(gv[i].$$constructor){return true;}
;}
;}
;return false;}
,__cq:function(gx,name,gw){var gz=function(){var gC=gz;if(qx.core.Environment.get(eb)){if(!(this instanceof gC)){throw new Error(B+name+E);}
;if(gw===dR){if(this.classname===name){throw new Error(ed+name+e);}
;}
else if(gw===k){if(!gC.$$allowconstruct){throw new Error(dc+name+cJ);}
;}
;}
;var gA=gC.$$original.apply(this,arguments);if(gC.$$includes){var gB=gC.$$flatIncludes;for(var i=0,l=gB.length;i<l;i++ ){if(gB[i].$$constructor){gB[i].$$constructor.apply(this,arguments);}
;}
;}
;if(qx.core.Environment.get(eb)){if(this.classname===name){this.$$initialized=true;}
;}
;return gA;}
;if(qx.core.Environment.get(eh)){var gy=qx.core.Aspect.wrap(name,gz,d);gz.$$original=gx;gz.constructor=gy;gz=gy;}
;gz.$$original=gx;gx.wrapper=gz;return gz;}
},defer:function(){if(qx.core.Environment.get(eh)){for(var gD in qx.Bootstrap.$$registry){var gE=qx.Bootstrap.$$registry[gD];for(var gF in gE){if(gE[gF] instanceof Function){gE[gF]=qx.core.Aspect.wrap(gD+dj+gF,gE[gF],ej);}
;}
;}
;}
;}
});}
)();
(function(){var a="Failed to remove event listener for id '",b="__cv",c="': ",d="Invalid context for callback.",e="Invalid capture flag.",f="Failed to add event listener for type '",g="UNKNOWN_",h="'",j="|bubble",k="Invalid event type.",m="There is no event handler for the event '",n=" from the target '",o="qx.debug",p="capture",q="|capture",r="Invalid callback function",s="qx.event.Manager",t="' on target '",u="'!",v="Could not dispatch event '",w="",x="_",y="DOM_",z="Invalid event target.",A="No dispatcher can handle event of type ",B="QX_",C=" to the target '",D="Failed to remove event listener for type '",E=" on ",F="Invalid id type.",G="c",H="|",I="qx.globalErrorHandling",J="unload",K="DOCUMENT_",L="Invalid object: ",M="Invalid Target.",N="WIN_",O="__cw",P="Invalid event object.";qx.Class.define(s,{extend:Object,implement:[qx.core.IDisposable],construct:function(Q,S){this.__cr=Q;this.__cs=qx.core.ObjectRegistry.toHashCode(Q);this.__ct=S;if(Q.qx!==qx){var self=this;var R=function(){qx.bom.Event.removeNativeListener(Q,J,arguments.callee);self.dispose();}
;if(qx.core.Environment.get(I)){qx.bom.Event.addNativeListener(Q,J,qx.event.GlobalError.observeMethod(R));}
else {qx.bom.Event.addNativeListener(Q,J,R);}
;}
;this.__cu={};this.__cv={};this.__cw={};this.__cx={};this.__cy=new qx.util.DeferredCall(function(){this.__cz=null;}
,this);this.__cy.$$blackListCleaner=true;}
,statics:{__cA:0,getNextUniqueId:function(){return (this.__cA++ )+w;}
},members:{__ct:null,__cu:null,__cw:null,__cB:null,__cv:null,__cx:null,__cr:null,__cs:null,__cz:null,__cy:null,getWindow:function(){return this.__cr;}
,getWindowId:function(){return this.__cs;}
,getHandler:function(U){var T=this.__cv[U.classname];if(T){return T;}
;return this.__cv[U.classname]=new U(this);}
,getDispatcher:function(W){var V=this.__cw[W.classname];if(V){return V;}
;return this.__cw[W.classname]=new W(this,this.__ct);}
,getListeners:function(Y,bd,X){var bb=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);var be=this.__cu[bb];if(!be){return null;}
;var bc=bd+(X?q:j);var ba=be[bc];return ba?ba.concat():null;}
,getAllListeners:function(){return this.__cu;}
,serializeListeners:function(bg){var bk=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);var bo=this.__cu[bk];var bj=[];if(bo){var bh,bn,bf,bi,bl;for(var bm in bo){bh=bm.indexOf(H);bn=bm.substring(0,bh);bf=bm.charAt(bh+1)==G;bi=bo[bm];for(var i=0,l=bi.length;i<l;i++ ){bl=bi[i];bj.push({self:bl.context,handler:bl.handler,type:bn,capture:bf});}
;}
;}
;return bj;}
,toggleAttachedEvents:function(br,bq){var bu=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);var bx=this.__cu[bu];if(bx){var bs,bw,bp,bt;for(var bv in bx){bs=bv.indexOf(H);bw=bv.substring(0,bs);bp=bv.charCodeAt(bs+1)===99;bt=bx[bv];if(bq){this.__cC(br,bw,bp);}
else {this.__cD(br,bw,bp);}
;}
;}
;}
,hasListener:function(bz,bD,by){if(qx.core.Environment.get(o)){if(bz==null){qx.log.Logger.trace(this);throw new Error(L+bz);}
;}
;var bB=bz.$$hash||qx.core.ObjectRegistry.toHashCode(bz);var bE=this.__cu[bB];if(!bE){return false;}
;var bC=bD+(by?q:j);var bA=bE[bC];return !!(bA&&bA.length>0);}
,importListeners:function(bF,bH){if(qx.core.Environment.get(o)){if(bF==null){qx.log.Logger.trace(this);throw new Error(L+bF);}
;}
;var bM=bF.$$hash||qx.core.ObjectRegistry.toHashCode(bF);var bN=this.__cu[bM]={};var bJ=qx.event.Manager;for(var bG in bH){var bK=bH[bG];var bL=bK.type+(bK.capture?q:j);var bI=bN[bL];if(!bI){bI=bN[bL]=[];this.__cC(bF,bK.type,bK.capture);}
;bI.push({handler:bK.listener,context:bK.self,unique:bK.unique||(bJ.__cA++ )+w});}
;}
,addListener:function(bQ,bX,bS,self,bO){if(qx.core.Environment.get(o)){var bU=f+bX+h+C+bQ.classname+c;qx.core.Assert.assertObject(bQ,bU+M);qx.core.Assert.assertString(bX,bU+k);qx.core.Assert.assertFunctionOrAsyncFunction(bS,bU+r);if(bO!==undefined){qx.core.Assert.assertBoolean(bO,e);}
;}
;var bP=bQ.$$hash||qx.core.ObjectRegistry.toHashCode(bQ);var bY=this.__cu[bP];if(!bY){bY=this.__cu[bP]={};}
;var bT=bX+(bO?q:j);var bR=bY[bT];if(!bR){bR=bY[bT]=[];}
;if(bR.length===0){this.__cC(bQ,bX,bO);}
;var bW=(qx.event.Manager.__cA++ )+w;var bV={handler:bS,context:self,unique:bW};bR.push(bV);return bT+H+bW;}
,findHandler:function(ce,cn){var cl=false,cd=false,co=false,ca=false;var ck;if(ce.nodeType===1){cl=true;ck=y+ce.tagName.toLowerCase()+x+cn;}
else if(ce.nodeType===9){ca=true;ck=K+cn;}
else if(ce==this.__cr){cd=true;ck=N+cn;}
else if(ce.classname){co=true;ck=B+ce.classname+x+cn;}
else {ck=g+ce+x+cn;}
;var cc=this.__cx;if(cc[ck]){return cc[ck];}
;var cj=this.__ct.getHandlers();var cf=qx.event.IEventHandler;var ch,ci,cg,cb;for(var i=0,l=cj.length;i<l;i++ ){ch=cj[i];cg=ch.SUPPORTED_TYPES;if(cg&&!cg[cn]){continue;}
;cb=ch.TARGET_CHECK;if(cb){var cm=false;if(cl&&((cb&cf.TARGET_DOMNODE)!=0)){cm=true;}
else if(cd&&((cb&cf.TARGET_WINDOW)!=0)){cm=true;}
else if(co&&((cb&cf.TARGET_OBJECT)!=0)){cm=true;}
else if(ca&&((cb&cf.TARGET_DOCUMENT)!=0)){cm=true;}
;if(!cm){continue;}
;}
;ci=this.getHandler(cj[i]);if(ch.IGNORE_CAN_HANDLE||ci.canHandleEvent(ce,cn)){cc[ck]=ci;return ci;}
;}
;return null;}
,__cC:function(cs,cr,cp){var cq=this.findHandler(cs,cr);if(cq){cq.registerEvent(cs,cr,cp);return;}
;if(qx.core.Environment.get(o)){qx.log.Logger.warn(this,m+cr+t+cs+u);}
;}
,removeListener:function(cv,cB,cx,self,ct){if(qx.core.Environment.get(o)){var cz=D+cB+h+n+cv.classname+c;qx.core.Assert.assertObject(cv,cz+M);qx.core.Assert.assertString(cB,cz+k);qx.core.Assert.assertFunction(cx,cz+r);if(self!==undefined){qx.core.Assert.assertObject(self,d);}
;if(ct!==undefined){qx.core.Assert.assertBoolean(ct,e);}
;}
;var cu=cv.$$hash||qx.core.ObjectRegistry.toHashCode(cv);var cC=this.__cu[cu];if(!cC){return false;}
;var cy=cB+(ct?q:j);var cw=cC[cy];if(!cw){return false;}
;var cA;for(var i=0,l=cw.length;i<l;i++ ){cA=cw[i];if(cA.handler===cx&&cA.context===self){qx.lang.Array.removeAt(cw,i);this.__cE(cA.unique);if(cw.length==0){this.__cD(cv,cB,ct);}
;return true;}
;}
;return false;}
,removeListenerById:function(cF,cN){if(qx.core.Environment.get(o)){var cJ=a+cN+h+n+cF.classname+c;qx.core.Assert.assertObject(cF,cJ+M);qx.core.Assert.assertString(cN,cJ+F);}
;var cH=cN.split(H);var cM=cH[0];var cD=cH[1].charCodeAt(0)==99;var cL=cH[2];var cE=cF.$$hash||qx.core.ObjectRegistry.toHashCode(cF);var cO=this.__cu[cE];if(!cO){return false;}
;var cI=cM+(cD?q:j);var cG=cO[cI];if(!cG){return false;}
;var cK;for(var i=0,l=cG.length;i<l;i++ ){cK=cG[i];if(cK.unique===cL){qx.lang.Array.removeAt(cG,i);this.__cE(cK.unique);if(cG.length==0){this.__cD(cF,cM,cD);}
;return true;}
;}
;return false;}
,removeAllListeners:function(cQ){var cS=cQ.$$hash||qx.core.ObjectRegistry.toHashCode(cQ);var cV=this.__cu[cS];if(!cV){return false;}
;var cR,cU,cP;for(var cT in cV){if(cV[cT].length>0){cR=cT.split(H);cV[cT].forEach(function(cW){this.__cE(cW.unique);}
,this);cU=cR[0];cP=cR[1]===p;this.__cD(cQ,cU,cP);}
;}
;delete this.__cu[cS];return true;}
,deleteAllListeners:function(cX){delete this.__cu[cX];}
,__cD:function(dc,db,cY){var da=this.findHandler(dc,db);if(da){da.unregisterEvent(dc,db,cY);return;}
;if(qx.core.Environment.get(o)){qx.log.Logger.warn(this,m+db+t+dc+u);}
;}
,dispatchEvent:function(de,event){if(qx.core.Environment.get(o)){var di=v+event+t+de.classname+c;qx.core.Assert.assertNotUndefined(de,di+z);qx.core.Assert.assertNotNull(de,di+z);qx.core.Assert.assertInstance(event,qx.event.type.Event,di+P);}
;var dj=event.getType();if(!event.getBubbles()&&!this.hasListener(de,dj)){qx.event.Pool.getInstance().poolObject(event);return true;}
;if(!event.getTarget()){event.setTarget(de);}
;var dh=this.__ct.getDispatchers();var dg;var dd=false;for(var i=0,l=dh.length;i<l;i++ ){dg=this.getDispatcher(dh[i]);if(dg.canDispatchEvent(de,event,dj)){dg.dispatchEvent(de,event,dj);dd=true;break;}
;}
;if(!dd){if(qx.core.Environment.get(o)){qx.log.Logger.error(this,A+dj+E+de);}
;return true;}
;var df=event.getDefaultPrevented();qx.event.Pool.getInstance().poolObject(event);return !df;}
,dispose:function(){this.__ct.removeManager(this);qx.util.DisposeUtil.disposeMap(this,b);qx.util.DisposeUtil.disposeMap(this,O);this.__cu=this.__cr=this.__cB=null;this.__ct=this.__cx=null;}
,__cE:function(dk){if(this.__cz===null){this.__cz={};this.__cy.schedule();}
;this.__cz[dk]=true;}
,isBlacklisted:function(dl){return (this.__cz!==null&&this.__cz[dl]===true);}
}});}
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
,destroyContainer:function(K){if(qx.core.Environment.get(c)){if(qx.ui.mobile&&K instanceof qx.ui.mobile.core.Widget){qx.core.Assert.assertTrue(this.__cF(K),g);}
else {qx.core.Assert.assertQxWidget(K,m);qx.core.Assert.assertTrue(this.__cF(K),p+n+d);}
;}
;var J=[];this._collectContainerChildren(K,J);var L=J.length;for(var i=L-1;i>=0;i-- ){J[i].destroy();}
;K.destroy();}
,_collectContainerChildren:function(O,N){var P=O.getChildren();for(var i=0;i<P.length;i++ ){var M=P[i];N.push(M);if(this.__cF(M)){this._collectContainerChildren(M,N);}
;}
;}
,__cF:function(R){var Q=[];if(qx.ui.mobile&&R instanceof qx.ui.mobile.core.Widget){Q=[qx.ui.mobile.container.Composite];}
else {Q=[qx.ui.container.Composite,qx.ui.container.Scroll,qx.ui.container.SlideBar,qx.ui.container.Stack];}
;for(var i=0,l=Q.length;i<l;i++ ){if(typeof Q[i]!==b&&qx.Class.isSubClassOf(R.constructor,Q[i])){return true;}
;}
;return false;}
}});}
)();
(function(){var a=": ",b="qx.type.BaseError",c="",d="error";qx.Bootstrap.define(b,{extend:Error,construct:function(e,f){var g=Error.call(this,f);if(g.stack){this.stack=g.stack;}
;if(g.stacktrace){this.stacktrace=g.stacktrace;}
;this.__cG=e||c;this.message=f||qx.type.BaseError.DEFAULTMESSAGE;}
,statics:{DEFAULTMESSAGE:d},members:{__cH:null,__cG:null,message:null,getComment:function(){return this.__cG;}
,toString:function(){return this.__cG+(this.message?a+this.message:c);}
}});}
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
;if(!(cK={}.hasOwnProperty)){cK=function(dt){var du={},dv;if((du.__cI=null,du.__cI={"toString":1},du).toString!=cv){cK=function(dw){var dx=this.__cI,dy=dw in (this.__cI=null,this);this.__cI=dx;return dy;}
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
(function(){var c="Create event of type ",d="Invalid event dispatcher!",e="': ",f="Invalid event handler.",g="qx.debug",h=" with undefined class. Please use null to explicit fallback to default event type!",i=".fireNonBubblingEventAsync not supported because qx.promise==false",j="' on target '",k="qx.promise",l="Invalid event target.",m="Could not fire event '",n="qx.event.Registration.getManager(null) was called!",o="undefined",p="qx.event.Registration";qx.Class.define(p,{statics:{__cJ:{},getManager:function(s){if(s==null){if(qx.core.Environment.get(g)){qx.log.Logger.error(n);qx.log.Logger.trace(this);}
;s=window;}
else if(s.nodeType){s=qx.dom.Node.getWindow(s);}
else if(!qx.dom.Node.isWindow(s)){s=window;}
;var r=s.$$hash||qx.core.ObjectRegistry.toHashCode(s);var q=this.__cJ[r];if(!q){q=new qx.event.Manager(s,this);this.__cJ[r]=q;}
;return q;}
,removeManager:function(t){var u=t.getWindowId();delete this.__cJ[u];}
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
,__cK:function(R,W,U,T){if(qx.core.Environment.get(g)){if(arguments.length>2&&U===undefined&&T!==undefined){throw new Error(c+W+h);}
;var V=m+W+j+(R?R.classname:o)+e;qx.core.Assert.assertNotUndefined(R,V+l);qx.core.Assert.assertNotNull(R,V+l);}
;var S=this.createEvent(W,U||null,T);this.getManager(R).dispatchEvent(R,S);return S;}
,fireEvent:function(bb,ba,bc,Y){var X=this.__cK.apply(this,arguments);return !X.getDefaultPrevented();}
,fireEventAsync:function(bg,bf,bh,be){var bd=this.__cK.apply(this,arguments);return bd.promise();}
,__cL:function(bi,bn,bl,bk){if(qx.core.Environment.get(g)){if(arguments.length>2&&bl===undefined&&bk!==undefined){throw new Error(c+bn+h);}
;}
;var bm=this.getManager(bi);if(!bm.hasListener(bi,bn,false)){return null;}
;var bj=this.createEvent(bn,bl||null,bk);bm.dispatchEvent(bi,bj);return bj;}
,fireNonBubblingEvent:function(br,bq,bs,bp){var bo=this.__cL.apply(this,arguments);if(bo===null){return true;}
;return !bo.getDefaultPrevented();}
,fireNonBubblingEventAsync:qx.core.Environment.select(k,{"true":function(bw,bv,bx,bu){var bt=this.__cL.apply(this,arguments);if(bt===null){return qx.Promise.resolve(true);}
;return bt.promise();}
,"false":function(){throw new Error(this.classname+i);}
}),PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cv:[],addHandler:function(by){if(qx.core.Environment.get(g)){qx.core.Assert.assertInterface(by,qx.event.IEventHandler,f);}
;this.__cv.push(by);this.__cv.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getHandlers:function(){return this.__cv;}
,__cw:[],addDispatcher:function(bA,bz){if(qx.core.Environment.get(g)){qx.core.Assert.assertInterface(bA,qx.event.IEventDispatcher,d);}
;this.__cw.push(bA);this.__cw.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getDispatchers:function(){return this.__cw;}
}});}
)();
(function(){var a="qx.core.MEvent";qx.Mixin.define(a,{members:{__cM:qx.event.Registration,addListener:function(d,b,self,c){if(!this.$$disposed){return this.__cM.addListener(this,d,b,self,c);}
;return null;}
,addListenerOnce:function(j,g,i,f){var self=this;if(!i){i=this;}
;var h=function(e){self.removeListener(j,g,i,f);g.call(i,e);}
;if(!g.$$wrapped_callback){g.$$wrapped_callback={};}
;g.$$wrapped_callback[j+this.$$hash]=h;return this.addListener(j,h,i,f);}
,removeListener:function(m,k,self,l){if(!this.$$disposed){if(k.$$wrapped_callback&&k.$$wrapped_callback[m+this.$$hash]){var n=k.$$wrapped_callback[m+this.$$hash];delete k.$$wrapped_callback[m+this.$$hash];k=n;}
;return this.__cM.removeListener(this,m,k,self,l);}
;return false;}
,removeListenerById:function(o){if(!this.$$disposed){return this.__cM.removeListenerById(this,o);}
;return false;}
,hasListener:function(q,p){return this.__cM.hasListener(this,q,p);}
,dispatchEvent:function(r){if(!this.$$disposed){return this.__cM.dispatchEvent(this,r);}
;return true;}
,fireEvent:function(t,u,s){if(!this.$$disposed){return this.__cM.fireEvent(this,t,u,s);}
;return true;}
,fireNonBubblingEvent:function(w,x,v){if(!this.$$disposed){return this.__cM.fireNonBubblingEvent(this,w,x,v);}
;return true;}
,fireDataEvent:function(A,B,y,z){if(!this.$$disposed){if(y===undefined){y=null;}
;return this.__cM.fireNonBubblingEvent(this,A,qx.event.type.Data,[B,y,!!z]);}
;return true;}
}});}
)();
(function(){var a="qx.core.MAssert";qx.Mixin.define(a,{members:{assert:function(c,b){qx.core.Assert.assert(c,b);}
,fail:function(d,e){qx.core.Assert.fail(d,e);}
,assertTrue:function(g,f){qx.core.Assert.assertTrue(g,f);}
,assertFalse:function(i,h){qx.core.Assert.assertFalse(i,h);}
,assertEquals:function(j,k,l){qx.core.Assert.assertEquals(j,k,l);}
,assertNotEquals:function(m,n,o){qx.core.Assert.assertNotEquals(m,n,o);}
,assertIdentical:function(p,q,r){qx.core.Assert.assertIdentical(p,q,r);}
,assertNotIdentical:function(s,t,u){qx.core.Assert.assertNotIdentical(s,t,u);}
,assertNotUndefined:function(w,v){qx.core.Assert.assertNotUndefined(w,v);}
,assertUndefined:function(y,x){qx.core.Assert.assertUndefined(y,x);}
,assertNotNull:function(A,z){qx.core.Assert.assertNotNull(A,z);}
,assertNull:function(C,B){qx.core.Assert.assertNull(C,B);}
,assertJsonEquals:function(D,E,F){qx.core.Assert.assertJsonEquals(D,E,F);}
,assertMatch:function(I,H,G){qx.core.Assert.assertMatch(I,H,G);}
,assertArgumentsCount:function(L,K,M,J){qx.core.Assert.assertArgumentsCount(L,K,M,J);}
,assertEventFired:function(P,event,Q,N,O){qx.core.Assert.assertEventFired(P,event,Q,N,O);}
,assertEventNotFired:function(T,event,R,S){qx.core.Assert.assertEventNotFired(T,event,R,S);}
,assertException:function(V,W,X,U){qx.core.Assert.assertException(V,W,X,U);}
,assertInArray:function(bb,ba,Y){qx.core.Assert.assertInArray(bb,ba,Y);}
,assertNotInArray:function(be,bd,bc){qx.core.Assert.assertNotInArray(be,bd,bc);}
,assertArrayEquals:function(bf,bg,bh){qx.core.Assert.assertArrayEquals(bf,bg,bh);}
,assertKeyInMap:function(bk,bj,bi){qx.core.Assert.assertKeyInMap(bk,bj,bi);}
,assertFunction:function(bm,bl){qx.core.Assert.assertFunction(bm,bl);}
,assertString:function(bo,bn){qx.core.Assert.assertString(bo,bn);}
,assertBoolean:function(bq,bp){qx.core.Assert.assertBoolean(bq,bp);}
,assertNumber:function(bs,br){qx.core.Assert.assertNumber(bs,br);}
,assertPositiveNumber:function(bu,bt){qx.core.Assert.assertPositiveNumber(bu,bt);}
,assertInteger:function(bw,bv){qx.core.Assert.assertInteger(bw,bv);}
,assertPositiveInteger:function(by,bx){qx.core.Assert.assertPositiveInteger(by,bx);}
,assertInRange:function(bB,bC,bA,bz){qx.core.Assert.assertInRange(bB,bC,bA,bz);}
,assertObject:function(bE,bD){qx.core.Assert.assertObject(bE,bD);}
,assertArray:function(bG,bF){qx.core.Assert.assertArray(bG,bF);}
,assertMap:function(bI,bH){qx.core.Assert.assertMap(bI,bH);}
,assertRegExp:function(bK,bJ){qx.core.Assert.assertRegExp(bK,bJ);}
,assertType:function(bN,bM,bL){qx.core.Assert.assertType(bN,bM,bL);}
,assertInstance:function(bP,bQ,bO){qx.core.Assert.assertInstance(bP,bQ,bO);}
,assertInterface:function(bT,bS,bR){qx.core.Assert.assertInterface(bT,bS,bR);}
,assertCssColor:function(bU,bW,bV){qx.core.Assert.assertCssColor(bU,bW,bV);}
,assertElement:function(bY,bX){qx.core.Assert.assertElement(bY,bX);}
,assertQxObject:function(cb,ca){qx.core.Assert.assertQxObject(cb,ca);}
,assertQxWidget:function(cd,cc){qx.core.Assert.assertQxWidget(cd,cc);}
}});}
)();
(function(){var a="module.events",b="Cloning only possible with properties.",c="qx.core.Object",d="]: ",e="module.property",f="qx.debug",g="Disposing ",h="qx.debug.dispose.level",j="]",k="Cannot call super class. Method is not derived: ",m="' in ",n="[",o="Missing destruct definition for '",p="object",q="qx.automaticMemoryManagement",r="Object";qx.Class.define(c,{extend:Object,include:qx.core.Environment.filter({"module.databinding":qx.data.MBinding,"module.logger":qx.core.MLogging,"module.events":qx.core.MEvent,"module.property":qx.core.MProperty,"qx.debug":qx.core.MAssert}),construct:function(){if(!qx.core.Environment.get(q)||qx.Class.hasInterface(this.constructor,qx.core.IDisposable)){qx.core.ObjectRegistry.register(this);}
else {qx.core.ObjectRegistry.toHashCode(this);}
;}
,statics:{$$type:r},members:{__cb:qx.core.Environment.get(e)?qx.core.Property:null,toHashCode:function(){return this.$$hash;}
,toString:function(){return this.classname+n+this.$$hash+j;}
,base:function(s,t){if(qx.core.Environment.get(f)){if(!qx.Bootstrap.isFunction(s.callee.base)){throw new Error(k+s.callee.displayName);}
;}
;if(arguments.length===1){return s.callee.base.call(this);}
else {return s.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}
;}
,self:function(u){return u.callee.self;}
,clone:function(){if(!qx.core.Environment.get(e)){throw new Error(b);}
;var w=this.constructor;var v=new w;var y=qx.Class.getProperties(w);var x=this.__cb.$$store.user;var z=this.__cb.$$method.set;var name;for(var i=0,l=y.length;i<l;i++ ){name=y[i];if(this.hasOwnProperty(x[name])){v[z[name]](this[x[name]]);}
;}
;return v;}
,__cN:null,setUserData:function(A,B){if(!this.__cN){this.__cN={};}
;this.__cN[A]=B;}
,getUserData:function(D){if(!this.__cN){return null;}
;var C=this.__cN[D];return C===undefined?null:C;}
,isDisposed:function(){return this.$$disposed||false;}
,isDisposing:function(){return this.$$disposing||false;}
,dispose:function(){if(this.$$disposed){return;}
;this.$$disposed=true;this.$$disposing=true;this.$$instance=null;this.$$allowconstruct=null;if(qx.core.Environment.get(f)){if(qx.core.Environment.get(h)>2){qx.Bootstrap.debug(this,g+this.classname+n+this.toHashCode()+j);}
;}
;var G=this.constructor;var E;while(G.superclass){if(G.$$destructor){G.$$destructor.call(this);}
;if(G.$$includes){E=G.$$flatIncludes;for(var i=0,l=E.length;i<l;i++ ){if(E[i].$$destructor){E[i].$$destructor.call(this);}
;}
;}
;G=G.superclass;}
;this.$$disposing=false;if(qx.core.Environment.get(f)){if(qx.core.Environment.get(h)>0){var H,F;for(H in this){F=this[H];if(F!==null&&typeof F===p&&!(qx.Bootstrap.isString(F))){if(this.constructor.prototype[H]!=null){continue;}
;if(qx.core.Environment.get(h)>1){qx.Bootstrap.warn(this,o+H+m+this.classname+n+this.toHashCode()+d+F);delete this[H];}
;}
;}
;}
;}
;}
,_disposeObjects:function(I){qx.util.DisposeUtil.disposeObjects(this,arguments);}
,_disposeSingletonObjects:function(J){qx.util.DisposeUtil.disposeObjects(this,arguments,true);}
,_disposeArray:function(K){qx.util.DisposeUtil.disposeArray(this,K);}
,_disposeMap:function(L){qx.util.DisposeUtil.disposeMap(this,L);}
},environment:{"qx.debug.dispose.level":0},destruct:function(){if(qx.core.Environment.get(a)){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);}
else {qx.event.Registration.deleteAllListeners(this);}
;}
;qx.core.ObjectRegistry.unregister(this);this.__cN=null;if(qx.core.Environment.get(e)){var O=this.constructor;var S;var T=this.__cb.$$store;var Q=T.user;var R=T.theme;var M=T.inherit;var P=T.useinit;var N=T.init;while(O){S=O.$$properties;if(S){for(var name in S){if(S[name].dereference){this[Q[name]]=this[R[name]]=this[M[name]]=this[P[name]]=this[N[name]]=undefined;}
;}
;}
;O=O.superclass;}
;}
;}
});}
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
(function(){var a="qx.util.ObjectPool",b="Class needs to be defined!",c="Object is already pooled: ",d="Integer";qx.Class.define(a,{extend:qx.core.Object,implement:[qx.core.IDisposable],construct:function(e){qx.core.Object.call(this);this.__cO={};if(e!=null){this.setSize(e);}
;}
,properties:{size:{check:d,init:Infinity}},members:{__cO:null,getObject:function(h){if(this.$$disposed){return new h;}
;if(!h){throw new Error(b);}
;var f=null;var g=this.__cO[h.classname];if(g){f=g.pop();}
;if(f){f.$$pooled=false;}
else {f=new h;}
;return f;}
,poolObject:function(k){if(!this.__cO){return;}
;var j=k.classname;var m=this.__cO[j];if(k.$$pooled){throw new Error(c+k);}
;if(!m){this.__cO[j]=m=[];}
;if(m.length>this.getSize()){if(k.destroy){k.destroy();}
else {k.dispose();}
;return;}
;k.$$pooled=true;m.push(k);}
},destruct:function(){var p=this.__cO;var n,o,i,l;for(n in p){o=p[n];for(i=0,l=o.length;i<l;i++ ){o[i].dispose();}
;}
;delete this.__cO;}
});}
)();
(function(){var a="singleton",b="qx.event.Pool";qx.Class.define(b,{extend:qx.util.ObjectPool,type:a,construct:function(){qx.util.ObjectPool.call(this,30);}
});}
)();
(function(){var b='./timers.js',c='cancel',g="promiseFulfilled",h="A catch statement predicate ",k="caller",m="constructor",q=" Use ",w="                                                         \n\
                promise = ",y="range error",z="BLUEBIRD_WARNINGS",A='any',B="use strict",C="cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a",D="cannot enable cancellation after promises are in use",E="'use strict';                                                \n\
        var ret = function (Parameters) {                                    \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._captureStackTrace();                                    \n\
            var nodeback = nodebackForPromise(promise, ",F="prototype",G="cannot .spread() a non-array: ",H="warning",I="stack",J="(<",K=" has no method '",L='each',M="rejectionHandled",N="ret = callback.apply(this, args);\n",O=" instead.",P=" items",Q='all',R=" items but contains only ",S="color: red",U="_getDomain",V="Promise has already been resolved or rejected",W="expecting an object but got ",X='mapSeries',Y="Warning",ba="NODE_ENV",bb="...",bc="_makeSelfResolutionError",bd="No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a",be="\u001b[0m\n",bf="number",bg="Promise.spawn()",bh="unhandledrejection",bi="cancellation error",bj="Holder$",bk="Object ",bl="Input array must contain at least ",bm="this != null ? this['",bn='filter',bo="obj",bp="promiseRejected",bq="options argument must be an object but it is ",br='spread',bs="./schedule",bt="propertyName",bu='./any.js',bv="promiseResolved",bw="fn",bx="at ",by="errorObj",bz="cancellation",bA="promiseCreated",bB='finally',bC="Promise.try",bD="[CodeForCall]",bE="./debuggability",bF="case ",bG=" size",bH="Promise.reduce",bI="tryCatch",bJ="but was not returned from it, ",bK="div",bL="From previous event:",bM='./promisify.js',bN="./catch_filter",bO="handler ",bP="AggregateError",bQ="_arg",bR="./thenables",bS="every map indexOf lastIndexOf reduce reduceRight sort reverse",bT="holder",bU="CancellationError",bV="                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = nodeback;                                              \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ",bW="|",bX='./race.js',bY="string",ca="cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a",cc="stackDetection@",cd="callee",ce="                           \n\
            'use strict';                                                    \n\
            holder.pIndex = promise;                                         \n\
            ",cf="                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ",cg="(not from exception)",ch="ret = callback.apply(receiver, args);\n",ci="cancellation is disabled",cj="./promise",ck='./each.js',cl="ensureMethod",cm='./nodeify.js',cn="./cancel",co="Unhandled promise rejection: ",cp=":",cq='./call_get.js',cs='reject',ct="var promise;\n",cu='catch',cv="join pop push shift unshift slice filter forEach some ",cw="\u001b[33m",cx="Promise.using",cy="new Promise",cz="promise",cA="BLUEBIRD_W_FORGOTTEN_RETURN",cB="qx.promise.longStackTraces",cC="promiseChained",cD="expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a",cE="Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a",cF=".",cG="./async",cH="a promise was created in a ",cI="withAppended",cJ="you must pass at least 2 arguments to Promise.using",cK="./finally",cL="a promise was rejected with a non-error: ",cM="CustomEvent",cN=".all() was passed arguments but it does not take any",cO="circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a",cP="color: darkorange",cQ="A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a",cR=" ",cS="testingtheevent",cT="__stackCleaned__",cU="BLUEBIRD_DEBUG",cV="foo",cW="function",cX="./direct_resolve",cY="maybeWrapAsError",da="expecting a function but got ",db="message",dc="async",dd="From coroutine:\u000a",de="./nodeback",df="return function(tryCatch, errorObj, Promise, async) {    \n\
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
        ",dg="./promise_array",dh="AggregateError of:",di="late cancellation observer",dj=".settle()",dk="return",dl=">, no stack trace)",dm="aggregate error",dn="RangeError",dp="notEnumerableProp",dq="Parameters",dr="the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a",ds="Unhandled rejection ",dt='./filter.js',du=".reflect()",dv="[object Promise]",dw="unhandledRejection",dx="MODULE_NOT_FOUND",dy='props',dz="throw",dA="break",dB="ret = callback({{args}}, nodeback); break;\n",dC="type error",dD="the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a",dE="ret = callback.call(this, {{args}}, nodeback); break;\n",dF="arguments",dG='some',dH='map',dI="timeout error",dJ="INTERNAL",dK="_",dL="catch",dM=" is deprecated and will be removed in a future version.",dN="Promise.method",dO="[no string representation]",dP="[object process]",dQ="promiseCancelled",dR='./using.js',dS=", ",dT=";                                      \n\
                if (promise instanceof Promise) {                            \n\
                    promise.cancel();                                        \n\
                }                                                            \n\
            ",dU="Promise.coroutine()",dV=" = ",dW="anonymous",dX="./util",dY="'concurrency' must be a number but it is ",ea="\n",eb="operation timed out",ec='reduce',ed='race',ee="generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a",ef="Promise",eg="./errors",eh='./generators.js',ei="development",ej="generator .return() sentinel",ek="__BluebirdErrorTypes__",el="./synchronous_inspection",em="qx.Promise",en="_async",eo="try",ep="on",eq="./join",er=")$",es="onCancel must be a function, got: ",et="object",eu="Promises are installed and initialised but disabled from properties because qx.promise==false; this may cause unexpected behaviour",ev="OperationalError",ew=");   \n\
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
    ",ex="warnings",ey="name",ez="__dc",eA=".then() only accepts functions but was passed: ",eB="[CodeForSwitchCase]",eC="cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a",eD="wForgottenReturn",eE="_promise0",eF="Fatal ",eG='./map.js',eH="length",eI="'] : fn",eJ="qx.promise",eK="%c",eL="TimeoutError",eM="monitoring",eN="./context",eO="Promise.defer",eP="'",eQ='./reduce.js',eR="arity",eS="./method",eT="qx.debug",eU=" = null;",eV="expecting an array or an iterable object but got ",eW="Async",eX="^(?:",eY="value",fa="    (No stack trace)",fb="BLUEBIRD_LONG_STACK_TRACES",fc="Promise.each",fd="$",fe="                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ",ff="nodebackForPromise",fg="Cannot find module '",fh="receiver",fi="",fj="Promise.filter",fk="%s",fl='./settle.js',fm="Promise cannot be resolved externally",fo="ret = callback.call(receiver, {{args}}, nodeback); break;\n",fp="{{args}}",fq="]",fr="\u001b[31m",fs="finally",ft="./bind",fu="longStackTraces",fv="TypeError",fw="suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a",fx="[function ",fy="[GetFunctionCode]",fz="                                    \n\
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
        ",fA="see http://goo.gl/rRqMUw",fB="./es5",fC="    ",fD="calling Promise.try with more than 1 argument",fE="Promise.map",fF="[object Array]",fG='then',fH="3.4.5",fI="this.p",fJ='./some.js',fK="[Circular AggregateError]",fL="qx.promise.warnings",fM="\\$",fN='./props.js',fO="./queue",fP="(empty array)",fQ="undefined",fR="cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a",fS="isOperational";qx.Class.define(em,{extend:qx.core.Object,construct:function(fT,fU){qx.core.Object.call(this);qx.Promise.__cV();if(fT instanceof qx.Promise.Bluebird){this.__cP=fT;}
else if(fT){if(fU!==undefined&&fU!==null){fT=fT.bind(fU);}
;this.__cP=new qx.Promise.Bluebird(fT);}
else {this.__cP=new qx.Promise.Bluebird(this.__cR.bind(this));}
;qx.core.Assert.assertTrue(!this.__cP.$$qxPromise);this.__cP.$$qxPromise=this;if(fU!==undefined&&fU!==null){this.__cP=this.__cP.bind(fU);}
;}
,destruct:function(){delete this.__cP.$$qxPromise;delete this.__cP;}
,members:{__cP:null,__cQ:null,then:function(fW,fV){return this._callMethod(fG,arguments);}
,"catch":function(fX){return this._callMethod(cu,arguments);}
,bind:function(fY){return qx.Promise.__cX(this.__cP.bind(fY));}
,spread:function(ga){return this._callMethod(br,arguments);}
,"finally":function(gb){return this._callMethod(bB,arguments);}
,cancel:function(){return this._callMethod(c,arguments);}
,all:function(){return this._callIterableMethod(Q,arguments);}
,race:function(gc){return this._callIterableMethod(ed,arguments);}
,any:function(gd){return this._callIterableMethod(A,arguments);}
,some:function(gf,ge){return this._callIterableMethod(dG,arguments);}
,forEach:function(gg,gh){return this._callIterableMethod(L,arguments);}
,filter:function(gi,gj,gk){return this._callIterableMethod(bn,arguments);}
,map:function(gl,gm,gn){return this._callIterableMethod(dH,arguments);}
,mapSeries:function(go,gp){return this._callIterableMethod(X,arguments);}
,reduce:function(gs,gq,gr){return this._callIterableMethod(ec,arguments);}
,__cR:function(gt,gu){this.__cQ={resolve:gt,reject:gu,complete:false};}
,__cS:function(){if(!this.__cQ){throw new Error(fm);}
;if(this.__cQ.complete){throw new Error(V);}
;this.__cQ.complete=true;return this.__cQ;}
,resolve:function(gv){this.__cS().resolve(gv);}
,reject:function(gw){this.__cS().reject(gw);}
,_callIterableMethod:function(gy,gx){gx=qx.Promise.__cY(gx);return qx.Promise.__cX(this.__cP.then(function(gA){var gz=qx.Promise.Bluebird.resolve(gA instanceof qx.data.Array?gA.toArray():gA);return qx.Promise.__cX(gz[gy].apply(gz,gx));}
));}
,_callMethod:function(gC,gB){gB=qx.Promise.__cY(gB);return qx.Promise.__cX(this.__cP[gC].apply(this.__cP,gB));}
,toPromise:function(){return this.__cP;}
},statics:{Bluebird:null,Native:null,Promise:null,resolve:function(gF,gE){var gD;if(gF instanceof qx.Promise){gD=gF;}
else {gD=this.__cX(qx.Promise.Bluebird.resolve(gF));}
;if(gE!==undefined){gD=gD.bind(gE);}
;return gD;}
,reject:function(gG,gI){var gH=this.__da(cs,arguments,0);if(gI!==undefined){gH=gH.bind(gI);}
;return gH;}
,all:function(gJ){return this.__da(Q,arguments);}
,race:function(gK){return this.__da(ed,arguments);}
,any:function(gL){return this.__da(A,arguments);}
,some:function(gN,gM){return this.__da(dG,arguments);}
,forEach:function(gO,gP){return this.__da(L,arguments);}
,filter:function(gQ,gR,gS){return this.__da(bn,arguments);}
,map:function(gT,gU,gV){return this.__da(dH,arguments);}
,mapSeries:function(gW,gX){return this.__da(X,arguments);}
,reduce:function(hb,gY,ha){return this.__da(ec,arguments);}
,method:function(hc){var hd=qx.Promise.Bluebird.method(hc);return function(){return qx.Promise.__cX(hd.apply(this,arguments));}
;}
,props:function(he){return this.__da(dy,arguments);}
,__cT:function(hf){this.Bluebird=hf;hf.config({warnings:qx.core.Environment.get(fL),longStackTraces:qx.core.Environment.get(cB),cancellation:true});}
,__cU:false,__cV:function(){if(this.__cU){return;}
;this.__cU=true;qx.bom.Event.addNativeListener(window,bh,this.__cW.bind(this));if(!qx.core.Environment.get(eJ)){qx.log.Logger.error(this,eu);}
;}
,__cW:function(e){e.preventDefault();var hg=null;if(e instanceof Error){hg=e;}
else if(e.reason instanceof Error){hg=e.reason;}
else if(e.detail&&e.detail.reason instanceof Error){hg=e.detail.reason;}
;qx.log.Logger.error(this,co+(hg?hg.stack:cg));qx.event.GlobalError.handleError(hg);}
,__cX:function(hh){if(hh instanceof qx.Promise.Bluebird){if(hh.$$qxPromise){hh=hh.$$qxPromise;}
else {hh=new qx.Promise(hh);}
;}
;return hh;}
,__cY:function(hi,hj){hi=qx.lang.Array.fromArguments(hi);if(hj===undefined){hj=1;}
;if(hi.length>hj){var hk=hi[hi.length-1];if(hk instanceof qx.core.Object||qx.Class.isClass(hk)){hi.pop();for(var i=0;i<hi.length;i++ ){if(typeof hi[i]==cW){hi[i]=hi[i].bind(hk);}
;}
;}
;}
;return hi;}
,__da:function(hl,hm,hn){hm=qx.Promise.__cY(hm,hn);return this.__cX(qx.Promise.Bluebird[hl].apply(qx.Promise.Bluebird,this.__db(hm)));}
,__db:function(hp){var ho=[];hp.forEach(function(hq){if(hq instanceof qx.data.Array){ho.push(hq.toArray());}
else if(hq instanceof qx.Promise){ho.push(hq.toPromise());}
else {ho.push(hq);}
;}
);return ho;}
},defer:function(hs,ht){hs.Promise=hs.Native=window.Promise;var hr=qx.core.Environment.get(eT);qx.core.Environment.add(fL,hr);qx.core.Environment.add(cB,false);}
});(function(){!function(e){qx.Promise.__cT(e());}
(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_==cW&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(fg+o+eP);throw f.code=dx,f;}
;var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);}
,l,l.exports,e,t,n,r);}
;return n[o].exports;}
;var i=typeof _dereq_==cW&&_dereq_;for(var o=0;o<r.length;o++ )s(r[o]);return s;}
)({'1':[function(hu,hw,hv){B;hw.exports=function(hx){var hz=hx._SomePromiseArray;function hy(hA){var hC=new hz(hA);var hB=hC.promise();hC.setHowMany(1);hC.setUnwrap();hC.init();return hB;}
;hx.any=function(hD){return hy(hD);}
;hx.prototype.any=function(){return hy(this);}
;}
;}
,{}],'2':[function(hO,hK,hF){B;var hM;try{throw new Error();}
catch(e){hM=e;}
;var hJ=hO(bs);var hE=hO(fO);var hL=hO(dX);function hN(){this._customScheduler=false;this._isTickUsed=false;this._lateQueue=new hE(16);this._normalQueue=new hE(16);this._haveDrainedQueues=false;this._trampolineEnabled=true;var self=this;this.drainQueues=function(){self._drainQueues();}
;this._schedule=hJ;}
;hN.prototype.setScheduler=function(hQ){var hP=this._schedule;this._schedule=hQ;this._customScheduler=true;return hP;}
;hN.prototype.hasCustomScheduler=function(){return this._customScheduler;}
;hN.prototype.enableTrampoline=function(){this._trampolineEnabled=true;}
;hN.prototype.disableTrampolineIfNecessary=function(){if(hL.hasDevTools){this._trampolineEnabled=false;}
;}
;hN.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues;}
;hN.prototype.fatalError=function(e,hR){if(hR){process.stderr.write(eF+(e instanceof Error?e.stack:e)+ea);process.exit(2);}
else {this.throwLater(e);}
;}
;hN.prototype.throwLater=function(hS,hT){if(arguments.length===1){hT=hS;hS=function(){throw hT;}
;}
;if(typeof setTimeout!==fQ){setTimeout(function(){hS(hT);}
,0);}
else try{this._schedule(function(){hS(hT);}
);}
catch(e){throw new Error(bd);}
;}
;function hI(hV,hU,hW){this._lateQueue.push(hV,hU,hW);this._queueTick();}
;function hG(hY,hX,ia){this._normalQueue.push(hY,hX,ia);this._queueTick();}
;function hH(ib){this._normalQueue._pushOne(ib);this._queueTick();}
;if(!hL.hasDevTools){hN.prototype.invokeLater=hI;hN.prototype.invoke=hG;hN.prototype.settlePromises=hH;}
else {hN.prototype.invokeLater=function(id,ic,ie){if(this._trampolineEnabled){hI.call(this,id,ic,ie);}
else {this._schedule(function(){setTimeout(function(){id.call(ic,ie);}
,100);}
);}
;}
;hN.prototype.invoke=function(ih,ig,ii){if(this._trampolineEnabled){hG.call(this,ih,ig,ii);}
else {this._schedule(function(){ih.call(ig,ii);}
);}
;}
;hN.prototype.settlePromises=function(ij){if(this._trampolineEnabled){hH.call(this,ij);}
else {this._schedule(function(){ij._settlePromises();}
);}
;}
;}
;hN.prototype.invokeFirst=function(il,ik,im){this._normalQueue.unshift(il,ik,im);this._queueTick();}
;hN.prototype._drainQueue=function(io){while(io.length()>0){var iq=io.shift();if(typeof iq!==cW){iq._settlePromises();continue;}
;var ip=io.shift();var ir=io.shift();iq.call(ip,ir);}
;}
;hN.prototype._drainQueues=function(){this._drainQueue(this._normalQueue);this._reset();this._haveDrainedQueues=true;this._drainQueue(this._lateQueue);}
;hN.prototype._queueTick=function(){if(!this._isTickUsed){this._isTickUsed=true;this._schedule(this.drainQueues);}
;}
;hN.prototype._reset=function(){this._isTickUsed=false;}
;hK.exports=hN;hK.exports.firstLineError=hM;}
,{"./queue":26,"./schedule":29,"./util":36}],'3':[function(is,iv,iu){B;iv.exports=function(iw,iz,iB,iC){var iA=false;var ix=function(_,e){this._reject(e);}
;var iE=function(e,iF){iF.promiseRejectionQueued=true;iF.bindingPromise._then(ix,ix,null,this,e);}
;var iD=function(iH,iG){if(((this._bitField&50397184)===0)){this._resolveCallback(iG.target);}
;}
;var iy=function(e,iI){if(!iI.promiseRejectionQueued)this._reject(e);}
;iw.prototype.bind=function(iN){if(!iA){iA=true;iw.prototype._propagateFrom=iC.propagateFromFunction();iw.prototype._boundValue=iC.boundValueFunction();}
;var iK=iB(iN);var iM=new iw(iz);iM._propagateFrom(this,1);var iL=this._target();iM._setBoundTo(iK);if(iK instanceof iw){var iJ={promiseRejectionQueued:false,promise:iM,target:iL,bindingPromise:iK};iL._then(iz,iE,undefined,iM,iJ);iK._then(iD,iy,undefined,iM,iJ);iM._setOnCancel(iK);}
else {iM._resolveCallback(iL);}
;return iM;}
;iw.prototype._setBoundTo=function(iO){if(iO!==undefined){this._bitField=this._bitField|2097152;this._boundTo=iO;}
else {this._bitField=this._bitField&(~2097152);}
;}
;iw.prototype._isBound=function(){return (this._bitField&2097152)===2097152;}
;iw.bind=function(iQ,iP){return iw.resolve(iP).bind(iQ);}
;}
;}
,{}],'4':[function(iV,iU,iR){B;var iS;if(typeof Promise!==fQ)iS=Promise;function iT(){try{if(Promise===iW)Promise=iS;}
catch(e){}
;return iW;}
;var iW=iV(cj)();iW.noConflict=iT;iU.exports=iW;}
,{"./promise":22}],'5':[function(_dereq_,module,exports){B;var cr=Object.create;if(cr){var callerCache=cr(null);var getterCache=cr(null);callerCache[bG]=getterCache[bG]=0;}
;module.exports=function(Promise){var util=_dereq_(dX);var canEvaluate=util.canEvaluate;var isIdentifier=util.isIdentifier;var getMethodCaller;var getGetter;if(!true){var makeMethodCaller=function(methodName){return new Function(cl,fz.replace(/methodName/g,methodName))(ensureMethod);}
;var makeGetter=function(propertyName){return new Function(bo,cf.replace(bt,propertyName));}
;var getCompiled=function(name,jb,iY){var ja=iY[name];if(typeof ja!==cW){if(!isIdentifier(name)){return null;}
;ja=jb(name);iY[name]=ja;iY[bG]++ ;if(iY[bG]>512){var iX=Object.keys(iY);for(var i=0;i<256; ++i)delete iY[iX[i]];iY[bG]=iX.length-256;}
;}
;return ja;}
;getMethodCaller=function(name){return getCompiled(name,makeMethodCaller,callerCache);}
;getGetter=function(name){return getCompiled(name,makeGetter,getterCache);}
;}
;function ensureMethod(jc,je){var jf;if(jc!=null)jf=jc[je];if(typeof jf!==cW){var jd=bk+util.classString(jc)+K+util.toString(je)+eP;throw new Promise.TypeError(jd);}
;return jf;}
;function caller(jg){var jh=this.pop();var ji=ensureMethod(jg,jh);return ji.apply(jg,this);}
;Promise.prototype.call=function(jl){var jk=[].slice.call(arguments,1);;if(!true){if(canEvaluate){var jj=getMethodCaller(jl);if(jj!==null){return this._then(jj,undefined,undefined,jk,undefined);}
;}
;}
;jk.push(jl);return this._then(caller,undefined,undefined,jk,undefined);}
;function namedGetter(jm){return jm[this];}
;function indexedGetter(jo){var jn=+this;if(jn<0)jn=Math.max(0,jn+jo.length);return jo[jn];}
;Promise.prototype.get=function(jr){var jq=(typeof jr===bf);var js;if(!jq){if(canEvaluate){var jp=getGetter(jr);js=jp!==null?jp:namedGetter;}
else {js=namedGetter;}
;}
else {js=indexedGetter;}
;return this._then(js,undefined,undefined,jr,undefined);}
;}
;}
,{"./util":36}],'6':[function(jt,jv,ju){B;jv.exports=function(jz,jw,jy,jB){var jx=jt(dX);var jD=jx.tryCatch;var jA=jx.errorObj;var jC=jz._async;jz.prototype[dA]=jz.prototype.cancel=function(){if(!jB.cancellation())return this._warn(ci);var jE=this;var jF=jE;while(jE._isCancellable()){if(!jE._cancelBy(jF)){if(jF._isFollowing()){jF._followee().cancel();}
else {jF._cancelBranched();}
;break;}
;var parent=jE._cancellationParent;if(parent==null||!parent._isCancellable()){if(jE._isFollowing()){jE._followee().cancel();}
else {jE._cancelBranched();}
;break;}
else {if(jE._isFollowing())jE._followee().cancel();jE._setWillBeCancelled();jF=jE;jE=parent;}
;}
;}
;jz.prototype._branchHasCancelled=function(){this._branchesRemainingToCancel-- ;}
;jz.prototype._enoughBranchesHaveCancelled=function(){return this._branchesRemainingToCancel===undefined||this._branchesRemainingToCancel<=0;}
;jz.prototype._cancelBy=function(jG){if(jG===this){this._branchesRemainingToCancel=0;this._invokeOnCancel();return true;}
else {this._branchHasCancelled();if(this._enoughBranchesHaveCancelled()){this._invokeOnCancel();return true;}
;}
;return false;}
;jz.prototype._cancelBranched=function(){if(this._enoughBranchesHaveCancelled()){this._cancel();}
;}
;jz.prototype._cancel=function(){if(!this._isCancellable())return;this._setCancelled();jC.invoke(this._cancelPromises,this,undefined);}
;jz.prototype._cancelPromises=function(){if(this._length()>0)this._settlePromises();}
;jz.prototype._unsetOnCancel=function(){this._onCancelField=undefined;}
;jz.prototype._isCancellable=function(){return this.isPending()&&!this._isCancelled();}
;jz.prototype.isCancellable=function(){return this.isPending()&&!this.isCancelled();}
;jz.prototype._doInvokeOnCancel=function(jH,jI){if(jx.isArray(jH)){for(var i=0;i<jH.length; ++i){this._doInvokeOnCancel(jH[i],jI);}
;}
else if(jH!==undefined){if(typeof jH===cW){if(!jI){var e=jD(jH).call(this._boundValue());if(e===jA){this._attachExtraTrace(e.e);jC.throwLater(e.e);}
;}
;}
else {jH._resultCancelled(this);}
;}
;}
;jz.prototype._invokeOnCancel=function(){var jJ=this._onCancel();this._unsetOnCancel();jC.invoke(this._doInvokeOnCancel,this,jJ);}
;jz.prototype._invokeInternalOnCancel=function(){if(this._isCancellable()){this._doInvokeOnCancel(this._onCancel(),true);this._unsetOnCancel();}
;}
;jz.prototype._resultCancelled=function(){this.cancel();}
;}
;}
,{"./util":36}],'7':[function(jK,jM,jL){B;jM.exports=function(jO){var jQ=jK(dX);var jP=jK(fB).keys;var jR=jQ.tryCatch;var jS=jQ.errorObj;function jN(jT,jV,jU){return function(e){var jY=jU._boundValue();predicateLoop:for(var i=0;i<jT.length; ++i){var jX=jT[i];if(jX===Error||(jX!=null&&jX.prototype instanceof Error)){if(e instanceof jX){return jR(jV).call(jY,e);}
;}
else if(typeof jX===cW){var jW=jR(jX).call(jY,e);if(jW===jS){return jW;}
else if(jW){return jR(jV).call(jY,e);}
;}
else if(jQ.isObject(e)){var ka=jP(jX);for(var j=0;j<ka.length; ++j){var kb=ka[j];if(jX[kb]!=e[kb]){continue predicateLoop;}
;}
;return jR(jV).call(jY,e);}
;}
;return jO;}
;}
;return jN;}
;}
,{"./es5":13,"./util":36}],'8':[function(kc,ke,kd){B;ke.exports=function(kh){var kk=false;var kj=[];kh.prototype._promiseCreated=function(){}
;kh.prototype._pushContext=function(){}
;kh.prototype._popContext=function(){return null;}
;kh._peekContext=kh.prototype._peekContext=function(){}
;function ki(){this._trace=new ki.CapturedTrace(kg());}
;ki.prototype._pushContext=function(){if(this._trace!==undefined){this._trace._promiseCreated=null;kj.push(this._trace);}
;}
;ki.prototype._popContext=function(){if(this._trace!==undefined){var km=kj.pop();var kl=km._promiseCreated;km._promiseCreated=null;return kl;}
;return null;}
;function kf(){if(kk)return new ki();}
;function kg(){var kn=kj.length-1;if(kn>=0){return kj[kn];}
;return undefined;}
;ki.CapturedTrace=null;ki.create=kf;ki.deactivateLongStackTraces=function(){}
;ki.activateLongStackTraces=function(){var kr=kh.prototype._pushContext;var kp=kh.prototype._popContext;var kq=kh._peekContext;var ks=kh.prototype._peekContext;var ko=kh.prototype._promiseCreated;ki.deactivateLongStackTraces=function(){kh.prototype._pushContext=kr;kh.prototype._popContext=kp;kh._peekContext=kq;kh.prototype._peekContext=ks;kh.prototype._promiseCreated=ko;kk=false;}
;kk=true;kh.prototype._pushContext=ki.prototype._pushContext;kh.prototype._popContext=ki.prototype._popContext;kh._peekContext=kh.prototype._peekContext=kg;kh.prototype._promiseCreated=function(){var kt=this._peekContext();if(kt&&kt._promiseCreated==null)kt._promiseCreated=this;}
;}
;return ki;}
;}
,{}],'9':[function(ku,kw,kv){B;kw.exports=function(kU,lj){var lh=kU._getDomain;var lB=kU._async;var lx=ku(eg).Warning;var li=ku(dX);var kJ=li.canAttachTrace;var kF;var kP;var ky=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;var lz=/\((?:timers\.js):\d+:\d+\)/;var kV=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;var kB=null;var lc=null;var kT=false;var le;var kx=!!(li.env(cU)!=0&&(true||li.env(cU)||li.env(ba)===ei));var kQ=!!(li.env(z)!=0&&(kx||li.env(z)));var kX=!!(li.env(fb)!=0&&(kx||li.env(fb)));var kR=li.env(cA)!=0&&(kQ||!!li.env(cA));kU.prototype.suppressUnhandledRejections=function(){var lF=this._target();lF._bitField=((lF._bitField&(~1048576))|524288);}
;kU.prototype._ensurePossibleRejectionHandled=function(){if((this._bitField&524288)!==0)return;this._setRejectionIsUnhandled();lB.invokeLater(this._notifyUnhandledRejection,this,undefined);}
;kU.prototype._notifyUnhandledRejectionIsHandled=function(){lr(M,kF,undefined,this);}
;kU.prototype._setReturnedNonUndefined=function(){this._bitField=this._bitField|268435456;}
;kU.prototype._returnedNonUndefined=function(){return (this._bitField&268435456)!==0;}
;kU.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var lG=this._settledValue();this._setUnhandledRejectionIsNotified();lr(dw,kP,lG,this);}
;}
;kU.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=this._bitField|262144;}
;kU.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=this._bitField&(~262144);}
;kU.prototype._isUnhandledRejectionNotified=function(){return (this._bitField&262144)>0;}
;kU.prototype._setRejectionIsUnhandled=function(){this._bitField=this._bitField|1048576;}
;kU.prototype._unsetRejectionIsUnhandled=function(){this._bitField=this._bitField&(~1048576);if(this._isUnhandledRejectionNotified()){this._unsetUnhandledRejectionIsNotified();this._notifyUnhandledRejectionIsHandled();}
;}
;kU.prototype._isRejectionUnhandled=function(){return (this._bitField&1048576)>0;}
;kU.prototype._warn=function(lI,lH,lJ){return lu(lI,lH,lJ||this);}
;kU.onPossiblyUnhandledRejection=function(lL){var lK=lh();kP=typeof lL===cW?(lK===null?lL:li.domainBind(lK,lL)):undefined;}
;kU.onUnhandledRejectionHandled=function(lN){var lM=lh();kF=typeof lN===cW?(lM===null?lN:li.domainBind(lM,lN)):undefined;}
;var lg=function(){}
;kU.longStackTraces=function(){if(lB.haveItemsQueued()&&!kW.longStackTraces){throw new Error(fR);}
;if(!kW.longStackTraces&&kK()){var lO=kU.prototype._captureStackTrace;var lP=kU.prototype._attachExtraTrace;kW.longStackTraces=true;lg=function(){if(lB.haveItemsQueued()&&!kW.longStackTraces){throw new Error(fR);}
;kU.prototype._captureStackTrace=lO;kU.prototype._attachExtraTrace=lP;lj.deactivateLongStackTraces();lB.enableTrampoline();kW.longStackTraces=false;}
;kU.prototype._captureStackTrace=kH;kU.prototype._attachExtraTrace=lp;lj.activateLongStackTraces();lB.disableTrampolineIfNecessary();}
;}
;kU.hasLongStackTraces=function(){return kW.longStackTraces&&kK();}
;var lD=(function(){try{if(typeof CustomEvent===cW){var event=new CustomEvent(cM);li.global.dispatchEvent(event);return function(name,event){var lQ=new CustomEvent(name.toLowerCase(),{detail:event,cancelable:true});return !li.global.dispatchEvent(lQ);}
;}
else if(typeof Event===cW){var event=new Event(cM);li.global.dispatchEvent(event);return function(name,event){var lR=new Event(name.toLowerCase(),{cancelable:true});lR.detail=event;return !li.global.dispatchEvent(lR);}
;}
else {var event=document.createEvent(cM);event.initCustomEvent(cS,false,true,{});li.global.dispatchEvent(event);return function(name,event){var lS=document.createEvent(cM);lS.initCustomEvent(name.toLowerCase(),false,true,event);return !li.global.dispatchEvent(lS);}
;}
;}
catch(e){}
;return function(){return false;}
;}
)();var lf=(function(){if(li.isNode){return function(){return process.emit.apply(process,arguments);}
;}
else {if(!li.global){return function(){return false;}
;}
;return function(name){var lT=ep+name.toLowerCase();var lU=li.global[lT];if(!lU)return false;lU.apply(li.global,[].slice.call(arguments,1));return true;}
;}
;}
)();function lt(name,lV){return {promise:lV};}
;var kO={promiseCreated:lt,promiseFulfilled:lt,promiseRejected:lt,promiseResolved:lt,promiseCancelled:lt,promiseChained:function(name,lW,lX){return {promise:lW,child:lX};}
,warning:function(name,lY){return {warning:lY};}
,unhandledRejection:function(name,ma,mb){return {reason:ma,promise:mb};}
,rejectionHandled:lt};var kz=function(name){var md=false;try{md=lf.apply(null,arguments);}
catch(e){lB.throwLater(e);md=true;}
;var mc=false;try{mc=lD(name,kO[name].apply(null,arguments));}
catch(e){lB.throwLater(e);mc=true;}
;return mc||md;}
;kU.config=function(mf){mf=Object(mf);if(fu in mf){if(mf.longStackTraces){kU.longStackTraces();}
else if(!mf.longStackTraces&&kU.hasLongStackTraces()){lg();}
;}
;if(ex in mf){var me=mf.warnings;kW.warnings=!!me;kR=kW.warnings;if(li.isObject(me)){if(eD in me){kR=!!me.wForgottenReturn;}
;}
;}
;if(bz in mf&&mf.cancellation&&!kW.cancellation){if(lB.haveItemsQueued()){throw new Error(D);}
;kU.prototype._clearCancellationData=lm;kU.prototype._propagateFrom=kS;kU.prototype._onCancel=lA;kU.prototype._setOnCancel=lo;kU.prototype._attachCancellationCallback=ly;kU.prototype._execute=lv;kA=kS;kW.cancellation=true;}
;if(eM in mf){if(mf.monitoring&&!kW.monitoring){kW.monitoring=true;kU.prototype._fireEvent=kz;}
else if(!mf.monitoring&&kW.monitoring){kW.monitoring=false;kU.prototype._fireEvent=kN;}
;}
;}
;function kN(){return false;}
;kU.prototype._fireEvent=kN;kU.prototype._execute=function(mh,mg,mi){try{mh(mg,mi);}
catch(e){return e;}
;}
;kU.prototype._onCancel=function(){}
;kU.prototype._setOnCancel=function(mj){;}
;kU.prototype._attachCancellationCallback=function(mk){;}
;kU.prototype._captureStackTrace=function(){}
;kU.prototype._attachExtraTrace=function(){}
;kU.prototype._clearCancellationData=function(){}
;kU.prototype._propagateFrom=function(parent,ml){;;}
;function lv(mo,mm,mp){var mn=this;try{mo(mm,mp,function(mq){if(typeof mq!==cW){throw new TypeError(es+li.toString(mq));}
;mn._attachCancellationCallback(mq);}
);}
catch(e){return e;}
;}
;function ly(mr){if(!this._isCancellable())return this;var mt=this._onCancel();if(mt!==undefined){if(li.isArray(mt)){mt.push(mr);}
else {this._setOnCancel([mt,mr]);}
;}
else {this._setOnCancel(mr);}
;}
;function lA(){return this._onCancelField;}
;function lo(mu){this._onCancelField=mu;}
;function lm(){this._cancellationParent=undefined;this._onCancelField=undefined;}
;function kS(parent,mv){if((mv&1)!==0){this._cancellationParent=parent;var mw=parent._branchesRemainingToCancel;if(mw===undefined){mw=0;}
;parent._branchesRemainingToCancel=mw+1;}
;if((mv&2)!==0&&parent._isBound()){this._setBoundTo(parent._boundTo);}
;}
;function kM(parent,mx){if((mx&2)!==0&&parent._isBound()){this._setBoundTo(parent._boundTo);}
;}
;var kA=kM;function kI(){var my=this._boundTo;if(my!==undefined){if(my instanceof kU){if(my.isFulfilled()){return my.value();}
else {return undefined;}
;}
;}
;return my;}
;function kH(){this._trace=new ll(this._peekContext());}
;function lp(mC,mA){if(kJ(mC)){var mB=this._trace;if(mB!==undefined){if(mA)mB=mB._parent;}
;if(mB!==undefined){mB.attachExtraTrace(mC);}
else if(!mC.__stackCleaned__){var mz=lE(mC);li.notEnumerableProp(mC,I,mz.message+ea+mz.stack.join(ea));li.notEnumerableProp(mC,cT,true);}
;}
;}
;function ld(mJ,mF,name,mH,parent){if(mJ===undefined&&mF!==null&&kR){if(parent!==undefined&&parent._returnedNonUndefined())return;if((mH._bitField&65535)===0)return;if(name)name=name+cR;var mD=fi;var mI=fi;if(mF._trace){var mG=mF._trace.stack.split(ea);var mN=kG(mG);for(var i=mN.length-1;i>=0; --i){var mM=mN[i];if(!lz.test(mM)){var mE=mM.match(kV);if(mE){mD=bx+mE[1]+cp+mE[2]+cp+mE[3]+cR;}
;break;}
;}
;if(mN.length>0){var mL=mN[0];for(var i=0;i<mG.length; ++i){if(mG[i]===mL){if(i>0){mI=ea+mG[i-1];}
;break;}
;}
;}
;}
;var mK=cH+name+bO+mD+bJ+fA+mI;mH._warn(mK,true,mF);}
;}
;function ls(name,mP){var mO=name+dM;if(mP)mO+=q+mP+O;return lu(mO);}
;function lu(mU,mT,mS){if(!kW.warnings)return;var mR=new lx(mU);var mQ;if(mT){mS._attachExtraTrace(mR);}
else if(kW.longStackTraces&&(mQ=kU._peekContext())){mQ.attachExtraTrace(mR);}
else {var mV=lE(mR);mR.stack=mV.message+ea+mV.stack.join(ea);}
;if(!kz(H,mR)){kY(mR,fi,true);}
;}
;function lq(mW,mX){for(var i=0;i<mX.length-1; ++i){mX[i].push(bL);mX[i]=mX[i].join(ea);}
;if(i<mX.length){mX[i]=mX[i].join(ea);}
;return mW+ea+mX.join(ea);}
;function lk(mY){for(var i=0;i<mY.length; ++i){if(mY[i].length===0||((i+1<mY.length)&&mY[i][0]===mY[i+1][0])){mY.splice(i,1);i-- ;}
;}
;}
;function ln(ne){var nb=ne[0];for(var i=1;i<ne.length; ++i){var nd=ne[i];var na=nb.length-1;var nf=nb[na];var ng=-1;for(var j=nd.length-1;j>=0; --j){if(nd[j]===nf){ng=j;break;}
;}
;for(var j=ng;j>=0; --j){var nc=nd[j];if(nb[na]===nc){nb.pop();na-- ;}
else {break;}
;}
;nb=nd;}
;}
;function kG(nl){var ni=[];for(var i=0;i<nl.length; ++i){var nk=nl[i];var nj=fa===nk||kB.test(nk);var nh=nj&&lb(nk);if(nj&&!nh){if(kT&&nk.charAt(0)!==cR){nk=fC+nk;}
;ni.push(nk);}
;}
;return ni;}
;function lC(no){var nn=no.stack.replace(/\s+$/g,fi).split(ea);for(var i=0;i<nn.length; ++i){var nm=nn[i];if(fa===nm||kB.test(nm)){break;}
;}
;if(i>0){nn=nn.slice(i);}
;return nn;}
;function lE(nr){var nq=nr.stack;var np=nr.toString();nq=typeof nq===bY&&nq.length>0?lC(nr):[fa];return {message:np,stack:kG(nq)};}
;function kY(nt,nw,nv){if(typeof console!==fQ){var ns;if(li.isObject(nt)){var nu=nt.stack;ns=nw+lc(nu,nt);}
else {ns=nw+String(nt);}
;if(typeof le===cW){le(ns,nv);}
else if(typeof console.log===cW||typeof console.log===et){console.log(ns);}
;}
;}
;function lr(name,ny,nx,nz){var nA=false;try{if(typeof ny===cW){nA=true;if(name===M){ny(nz);}
else {ny(nx,nz);}
;}
;}
catch(e){lB.throwLater(e);}
;if(name===dw){if(!kz(name,nx,nz)&&!nA){kY(nx,ds);}
;}
else {kz(name,nz);}
;}
;function lw(nC){var nE;if(typeof nC===cW){nE=fx+(nC.name||dW)+fq;}
else {nE=nC&&typeof nC.toString===cW?nC.toString():li.toString(nC);var nB=/\[object [a-zA-Z0-9$_]+\]/;if(nB.test(nE)){try{var nD=JSON.stringify(nC);nE=nD;}
catch(e){}
;}
;if(nE.length===0){nE=fP;}
;}
;return (J+kC(nE)+dl);}
;function kC(nG){var nF=41;if(nG.length<nF){return nG;}
;return nG.substr(0,nF-3)+bb;}
;function kK(){return typeof kE===cW;}
;var lb=function(){return false;}
;var kL=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;function kD(nI){var nH=nI.match(kL);if(nH){return {fileName:nH[1],line:parseInt(nH[2],10)};}
;}
;function la(nN,nJ){if(!kK())return;var nQ=nN.stack.split(ea);var nM=nJ.stack.split(ea);var nR=-1;var nL=-1;var nO;var nK;for(var i=0;i<nQ.length; ++i){var nP=kD(nQ[i]);if(nP){nO=nP.fileName;nR=nP.line;break;}
;}
;for(var i=0;i<nM.length; ++i){var nP=kD(nM[i]);if(nP){nK=nP.fileName;nL=nP.line;break;}
;}
;if(nR<0||nL<0||!nO||!nK||nO!==nK||nR>=nL){return;}
;lb=function(nT){if(ky.test(nT))return true;var nS=kD(nT);if(nS){if(nS.fileName===nO&&(nR<=nS.line&&nS.line<=nL)){return true;}
;}
;return false;}
;}
;function ll(parent){this._parent=parent;this._promisesCreated=0;var length=this._length=1+(parent===undefined?0:parent._length);kE(this,ll);if(length>32)this.uncycle();}
;li.inherits(ll,Error);lj.CapturedTrace=ll;ll.prototype.uncycle=function(){var length=this._length;if(length<2)return;var ob=[];var nV={};for(var i=0,nU=this;nU!==undefined; ++i){ob.push(nU);nU=nU._parent;}
;length=this._length=i;for(var i=length-1;i>=0; --i){var nX=ob[i].stack;if(nV[nX]===undefined){nV[nX]=i;}
;}
;for(var i=0;i<length; ++i){var oa=ob[i].stack;var nW=nV[oa];if(nW!==undefined&&nW!==i){if(nW>0){ob[nW-1]._parent=undefined;ob[nW-1]._length=1;}
;ob[i]._parent=undefined;ob[i]._length=1;var nY=i>0?ob[i-1]:this;if(nW<length-1){nY._parent=ob[nW+1];nY._parent.uncycle();nY._length=nY._parent._length+1;}
else {nY._parent=undefined;nY._length=1;}
;var oc=nY._length+1;for(var j=i-2;j>=0; --j){ob[j]._length=oc;oc++ ;}
;return;}
;}
;}
;ll.prototype.attachExtraTrace=function(oh){if(oh.__stackCleaned__)return;this.uncycle();var of=lE(oh);var od=of.message;var oe=[of.stack];var og=this;while(og!==undefined){oe.push(kG(og.stack.split(ea)));og=og._parent;}
;ln(oe);lk(oe);li.notEnumerableProp(oh,I,lq(od,oe));li.notEnumerableProp(oh,cT,true);}
;var kE=(function on(){var oi=/^\s*at\s*/;var ol=function(oo,op){if(typeof oo===bY)return oo;if(op.name!==undefined&&op.message!==undefined){return op.toString();}
;return lw(op);}
;if(typeof Error.stackTraceLimit===bf&&typeof Error.captureStackTrace===cW){Error.stackTraceLimit+=6;kB=oi;lc=ol;var ok=Error.captureStackTrace;lb=function(oq){return ky.test(oq);}
;return function(os,or){Error.stackTraceLimit+=6;ok(os,or);Error.stackTraceLimit-=6;}
;}
;var oj=new Error();if(typeof oj.stack===bY&&oj.stack.split(ea)[0].indexOf(cc)>=0){kB=/@/;lc=ol;kT=true;return function ot(o){o.stack=new Error().stack;}
;}
;var om;try{throw new Error();}
catch(e){om=(I in e);}
;if(!(I in oj)&&om&&typeof Error.stackTraceLimit===bf){kB=oi;lc=ol;return function ou(o){Error.stackTraceLimit+=6;try{throw new Error();}
catch(e){o.stack=e.stack;}
;Error.stackTraceLimit-=6;}
;}
;lc=function(ov,ow){if(typeof ov===bY)return ov;if((typeof ow===et||typeof ow===cW)&&ow.name!==undefined&&ow.message!==undefined){return ow.toString();}
;return lw(ow);}
;return null;}
)([]);if(typeof console!==fQ&&typeof console.warn!==fQ){le=function(ox){console.warn(ox);}
;if(li.isNode&&process.stderr.isTTY){le=function(oz,oA){var oy=oA?cw:fr;console.warn(oy+oz+be);}
;}
else if(!li.isNode&&typeof (new Error().stack)===bY){le=function(oB,oC){console.warn(eK+oB,oC?cP:S);}
;}
;}
;var kW={warnings:kQ,longStackTraces:false,cancellation:false,monitoring:false};if(kX)kU.longStackTraces();return {longStackTraces:function(){return kW.longStackTraces;}
,warnings:function(){return kW.warnings;}
,cancellation:function(){return kW.cancellation;}
,monitoring:function(){return kW.monitoring;}
,propagateFromFunction:function(){return kA;}
,boundValueFunction:function(){return kI;}
,checkForgottenReturns:ld,setBounds:la,warn:lu,deprecated:ls,CapturedTrace:ll,fireDomEvent:lD,fireGlobalEvent:lf};}
;}
,{"./errors":12,"./util":36}],'10':[function(oD,oF,oE){B;oF.exports=function(oI){function oH(){return this.value;}
;function oG(){throw this.reason;}
;oI.prototype[dk]=oI.prototype.thenReturn=function(oJ){if(oJ instanceof oI)oJ.suppressUnhandledRejections();return this._then(oH,undefined,undefined,{value:oJ},undefined);}
;oI.prototype[dz]=oI.prototype.thenThrow=function(oK){return this._then(oG,undefined,undefined,{reason:oK},undefined);}
;oI.prototype.catchThrow=function(oL){if(arguments.length<=1){return this._then(undefined,oG,undefined,{reason:oL},undefined);}
else {var oN=arguments[1];var oM=function(){throw oN;}
;return this.caught(oL,oM);}
;}
;oI.prototype.catchReturn=function(oQ){if(arguments.length<=1){if(oQ instanceof oI)oQ.suppressUnhandledRejections();return this._then(undefined,oH,undefined,{value:oQ},undefined);}
else {var oO=arguments[1];if(oO instanceof oI)oO.suppressUnhandledRejections();var oP=function(){return oO;}
;return this.caught(oQ,oP);}
;}
;}
;}
,{}],'11':[function(oR,oT,oS){B;oT.exports=function(pa,oY){var oW=pa.reduce;var oX=pa.all;function oV(){return oX(this);}
;function oU(pb,pc){return oW(pb,pc,oY,oY);}
;pa.prototype.each=function(pd){return oW(this,pd,oY,0)._then(oV,undefined,undefined,this,undefined);}
;pa.prototype.mapSeries=function(pe){return oW(this,pe,oY,oY);}
;pa.each=function(pf,pg){return oW(pf,pg,oY,0)._then(oV,undefined,undefined,pf,undefined);}
;pa.mapSeries=oU;}
;}
,{}],'12':[function(pw,pp,pj){B;var po=pw(fB);var pv=po.freeze;var pr=pw(dX);var ph=pr.inherits;var pq=pr.notEnumerableProp;function pk(pA,pC){function pB(pD){if(!(this instanceof pB))return new pB(pD);pq(this,db,typeof pD===bY?pD:pC);pq(this,ey,pA);if(Error.captureStackTrace){Error.captureStackTrace(this,this.constructor);}
else {Error.call(this);}
;}
;ph(pB,Error);return pB;}
;var pi,pz;var ps=pk(Y,H);var pu=pk(bU,bi);var pt=pk(eL,dI);var pm=pk(bP,dm);try{pi=TypeError;pz=RangeError;}
catch(e){pi=pk(fv,dC);pz=pk(dn,y);}
;var pl=(cv+bS).split(cR);for(var i=0;i<pl.length; ++i){if(typeof Array.prototype[pl[i]]===cW){pm.prototype[pl[i]]=Array.prototype[pl[i]];}
;}
;po.defineProperty(pm.prototype,eH,{value:0,configurable:false,writable:true,enumerable:true});pm.prototype[fS]=true;var pn=0;pm.prototype.toString=function(){var pE=Array(pn*4+1).join(cR);var pG=ea+pE+dh+ea;pn++ ;pE=Array(pn*4+1).join(cR);for(var i=0;i<this.length; ++i){var pH=this[i]===this?fK:this[i]+fi;var pF=pH.split(ea);for(var j=0;j<pF.length; ++j){pF[j]=pE+pF[j];}
;pH=pF.join(ea);pG+=pH+ea;}
;pn-- ;return pG;}
;function py(pI){if(!(this instanceof py))return new py(pI);pq(this,ey,ev);pq(this,db,pI);this.cause=pI;this[fS]=true;if(pI instanceof Error){pq(this,db,pI.message);pq(this,I,pI.stack);}
else if(Error.captureStackTrace){Error.captureStackTrace(this,this.constructor);}
;}
;ph(py,Error);var px=Error[ek];if(!px){px=pv({CancellationError:pu,TimeoutError:pt,OperationalError:py,RejectionError:py,AggregateError:pm});po.defineProperty(Error,ek,{value:px,writable:false,enumerable:false,configurable:false});}
;pp.exports={Error:Error,TypeError:pi,RangeError:pz,CancellationError:px.CancellationError,OperationalError:px.OperationalError,TimeoutError:px.TimeoutError,AggregateError:px.AggregateError,Warning:ps};}
,{"./es5":13,"./util":36}],'13':[function(pT,pQ,pJ){var pV=(function(){B;return this===undefined;}
)();if(pV){pQ.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:pV,propertyIsWritable:function(pX,pY){var pW=Object.getOwnPropertyDescriptor(pX,pY);return !!(!pW||pW.writable||pW.set);}
};}
else {var pU={}.hasOwnProperty;var pR={}.toString;var pN={}.constructor.prototype;var pO=function(o){var qa=[];for(var qb in o){if(pU.call(o,qb)){qa.push(qb);}
;}
;return qa;}
;var pS=function(o,qc){return {value:o[qc]};}
;var pK=function(o,qd,qe){o[qd]=qe.value;return o;}
;var pL=function(qf){return qf;}
;var pP=function(qg){try{return Object(qg).constructor.prototype;}
catch(e){return pN;}
;}
;var pM=function(qh){try{return pR.call(qh)===fF;}
catch(e){return false;}
;}
;pQ.exports={isArray:pM,keys:pO,names:pO,defineProperty:pK,getDescriptor:pS,freeze:pL,getPrototypeOf:pP,isES5:pV,propertyIsWritable:function(){return true;}
};}
;}
,{}],'14':[function(qi,qk,qj){B;qk.exports=function(qm,ql){var qn=qm.map;qm.prototype.filter=function(qp,qo){return qn(this,qp,qo,ql);}
;qm.filter=function(qq,qs,qr){return qn(qq,qs,qr,ql);}
;}
;}
,{}],'15':[function(qt,qv,qu){B;qv.exports=function(qD,qE){var qw=qt(dX);var qA=qD.CancellationError;var qG=qw.errorObj;function qB(qI,qK,qJ){this.promise=qI;this.type=qK;this.handler=qJ;this.called=false;this.cancelPromise=null;}
;qB.prototype.isFinallyHandler=function(){return this.type===0;}
;function qz(qL){this.finallyHandler=qL;}
;qz.prototype._resultCancelled=function(){qH(this.finallyHandler);}
;function qH(qN,qM){if(qN.cancelPromise!=null){if(arguments.length>1){qN.cancelPromise._reject(qM);}
else {qN.cancelPromise._cancel();}
;qN.cancelPromise=null;return true;}
;return false;}
;function qC(){return qy.call(this,this.promise._target()._settledValue());}
;function qF(qO){if(qH(this,qO))return;qG.e=qO;return qG;}
;function qy(qU){var qT=this.promise;var qS=this.handler;if(!this.called){this.called=true;var qQ=this.isFinallyHandler()?qS.call(qT._boundValue()):qS.call(qT._boundValue(),qU);if(qQ!==undefined){qT._setReturnedNonUndefined();var qP=qE(qQ,qT);if(qP instanceof qD){if(this.cancelPromise!=null){if(qP._isCancelled()){var qR=new qA(di);qT._attachExtraTrace(qR);qG.e=qR;return qG;}
else if(qP.isPending()){qP._attachCancellationCallback(new qz(this));}
;}
;return qP._then(qC,qF,undefined,this,undefined);}
;}
;}
;if(qT.isRejected()){qH(this);qG.e=qU;return qG;}
else {qH(this);return qU;}
;}
;qD.prototype._passThrough=function(qW,qX,qY,qV){if(typeof qW!==cW)return this.then();return this._then(qY,qV,undefined,new qB(this,qX,qW),undefined);}
;qD.prototype.lastly=qD.prototype[fs]=function(ra){return this._passThrough(ra,0,qy,qy);}
;qD.prototype.tap=function(rb){return this._passThrough(rb,1,qy);}
;return qB;}
;}
,{"./util":36}],'16':[function(rc,re,rd){B;re.exports=function(rn,ri,rm,ro,rl,rp){var rh=rc(eg);var TypeError=rh.TypeError;var rk=rc(dX);var rq=rk.errorObj;var rr=rk.tryCatch;var rj=[];function rg(rt,rs,rw){for(var i=0;i<rs.length; ++i){rw._pushContext();var rx=rr(rs[i])(rt);rw._popContext();if(rx===rq){rw._pushContext();var rv=rn.reject(rq.e);rw._popContext();return rv;}
;var ru=ro(rx,rw);if(ru instanceof rn)return ru;}
;return null;}
;function rf(rC,rB,ry,rE){if(rp.cancellation()){var rz=new rn(rm);var rD=this._finallyPromise=new rn(rm);this._promise=rz.lastly(function(){return rD;}
);rz._captureStackTrace();rz._setOnCancel(this);}
else {var rA=this._promise=new rn(rm);rA._captureStackTrace();}
;this._stack=rE;this._generatorFunction=rC;this._receiver=rB;this._generator=undefined;this._yieldHandlers=typeof ry===cW?[ry].concat(rj):rj;this._yieldedPromise=null;this._cancellationPhase=false;}
;rk.inherits(rf,rl);rf.prototype._isResolved=function(){return this._promise===null;}
;rf.prototype._cleanup=function(){this._promise=this._generator=null;if(rp.cancellation()&&this._finallyPromise!==null){this._finallyPromise._fulfill();this._finallyPromise=null;}
;}
;rf.prototype._promiseCancelled=function(){if(this._isResolved())return;var rF=typeof this._generator[dk]!==fQ;var rH;if(!rF){var rG=new rn.CancellationError(ej);rn.coroutine.returnSentinel=rG;this._promise._attachExtraTrace(rG);this._promise._pushContext();rH=rr(this._generator[dz]).call(this._generator,rG);this._promise._popContext();}
else {this._promise._pushContext();rH=rr(this._generator[dk]).call(this._generator,undefined);this._promise._popContext();}
;this._cancellationPhase=true;this._yieldedPromise=null;this._continue(rH);}
;rf.prototype._promiseFulfilled=function(rJ){this._yieldedPromise=null;this._promise._pushContext();var rI=rr(this._generator.next).call(this._generator,rJ);this._promise._popContext();this._continue(rI);}
;rf.prototype._promiseRejected=function(rK){this._yieldedPromise=null;this._promise._attachExtraTrace(rK);this._promise._pushContext();var rL=rr(this._generator[dz]).call(this._generator,rK);this._promise._popContext();this._continue(rL);}
;rf.prototype._resultCancelled=function(){if(this._yieldedPromise instanceof rn){var rM=this._yieldedPromise;this._yieldedPromise=null;rM.cancel();}
;}
;rf.prototype.promise=function(){return this._promise;}
;rf.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver);this._receiver=this._generatorFunction=undefined;this._promiseFulfilled(undefined);}
;rf.prototype._continue=function(rP){var rO=this._promise;if(rP===rq){this._cleanup();if(this._cancellationPhase){return rO.cancel();}
else {return rO._rejectCallback(rP.e,false);}
;}
;var rQ=rP.value;if(rP.done===true){this._cleanup();if(this._cancellationPhase){return rO.cancel();}
else {return rO._resolveCallback(rQ);}
;}
else {var rN=ro(rQ,this._promise);if(!(rN instanceof rn)){rN=rg(rN,this._yieldHandlers,this._promise);if(rN===null){this._promiseRejected(new TypeError(cQ.replace(fk,rQ)+dd+this._stack.split(ea).slice(1,-7).join(ea)));return;}
;}
;rN=rN._target();var rR=rN._bitField;;if(((rR&50397184)===0)){this._yieldedPromise=rN;rN._proxy(this,null);}
else if(((rR&33554432)!==0)){rn._async.invoke(this._promiseFulfilled,this,rN._value());}
else if(((rR&16777216)!==0)){rn._async.invoke(this._promiseRejected,this,rN._reason());}
else {this._promiseCancelled();}
;}
;}
;rn.coroutine=function(rU,rW){if(typeof rU!==cW){throw new TypeError(ee);}
;var rT=Object(rW).yieldHandler;var rV=rf;var rS=new Error().stack;return function(){var sa=rU.apply(this,arguments);var rX=new rV(undefined,undefined,rT,rS);var rY=rX.promise();rX._generator=sa;rX._promiseFulfilled(undefined);return rY;}
;}
;rn.coroutine.addYieldHandler=function(sb){if(typeof sb!==cW){throw new TypeError(da+rk.classString(sb));}
;rj.push(sb);}
;rn.spawn=function(sd){rp.deprecated(bg,dU);if(typeof sd!==cW){return ri(ee);}
;var sc=new rf(sd,this);var se=sc.promise();sc._run(rn.spawn);return se;}
;}
;}
,{"./errors":12,"./util":36}],'17':[function(_dereq_,module,exports){B;module.exports=function(Promise,PromiseArray,tryConvertToPromise,INTERNAL,async,getDomain){var util=_dereq_(dX);var canEvaluate=util.canEvaluate;var tryCatch=util.tryCatch;var errorObj=util.errorObj;var reject;if(!true){if(canEvaluate){var thenCallback=function(i){return new Function(eY,bT,fe.replace(/Index/g,i));}
;var promiseSetter=function(i){return new Function(cz,bT,ce.replace(/Index/g,i));}
;var generateHolderClass=function(total){var props=new Array(total);for(var i=0;i<props.length; ++i){props[i]=fI+(i+1);}
;var assignment=props.join(dV)+eU;var cancellationCode=ct+props.map(function(sf){return w+sf+dT;}
).join(ea);var passedArguments=props.join(dS);var name=bj+total;var code=df;code=code.replace(/\[TheName\]/g,name).replace(/\[TheTotal\]/g,total).replace(/\[ThePassedArguments\]/g,passedArguments).replace(/\[TheProperties\]/g,assignment).replace(/\[CancellationCode\]/g,cancellationCode);return new Function(bI,by,ef,dc,code)(tryCatch,errorObj,Promise,async);}
;var holderClasses=[];var thenCallbacks=[];var promiseSetters=[];for(var i=0;i<8; ++i){holderClasses.push(generateHolderClass(i+1));thenCallbacks.push(thenCallback(i+1));promiseSetters.push(promiseSetter(i+1));}
;reject=function(sg){this._reject(sg);}
;}
;}
;Promise.join=function(){var sj=arguments.length-1;var sq;if(sj>0&&typeof arguments[sj]===cW){sq=arguments[sj];if(!true){if(sj<=8&&canEvaluate){var sl=new Promise(INTERNAL);sl._captureStackTrace();var sh=holderClasses[sj-1];var sp=new sh(sq);var sn=thenCallbacks;for(var i=0;i<sj; ++i){var so=tryConvertToPromise(arguments[i],sl);if(so instanceof Promise){so=so._target();var sm=so._bitField;;if(((sm&50397184)===0)){so._then(sn[i],reject,undefined,sl,sp);promiseSetters[i](so,sp);sp.asyncNeeded=false;}
else if(((sm&33554432)!==0)){sn[i].call(sl,so._value(),sp);}
else if(((sm&16777216)!==0)){sl._reject(so._reason());}
else {sl._cancel();}
;}
else {sn[i].call(sl,so,sp);}
;}
;if(!sl._isFateSealed()){if(sp.asyncNeeded){var si=getDomain();if(si!==null){sp.fn=util.domainBind(si,sp.fn);}
;}
;sl._setAsyncGuaranteed();sl._setOnCancel(sp);}
;return sl;}
;}
;}
;var sk=[].slice.call(arguments);;if(sq)sk.pop();var sl=new PromiseArray(sk).promise();return sq!==undefined?sl.spread(sq):sl;}
;}
;}
,{"./util":36}],'18':[function(sr,st,ss){B;st.exports=function(sA,sw,sy,sB,sz,sD){var su=sA._getDomain;var sx=sr(dX);var sF=sx.tryCatch;var sE=sx.errorObj;function sC(sI,sJ,sH,sK){this.constructor$(sI);this._promise._captureStackTrace();var sG=su();this._callback=sG===null?sJ:sx.domainBind(sG,sJ);this._preservedValues=sK===sz?new Array(this.length()):null;this._limit=sH;this._inFlight=0;this._queue=[];this._init$(undefined,-2);}
;sx.inherits(sC,sw);sC.prototype._init=function(){}
;sC.prototype._promiseFulfilled=function(sQ,sL){var sU=this._values;var length=this.length();var sN=this._preservedValues;var sP=this._limit;if(sL<0){sL=(sL*-1)-1;sU[sL]=sQ;if(sP>=1){this._inFlight-- ;this._drainQueue();if(this._isResolved())return true;}
;}
else {if(sP>=1&&this._inFlight>=sP){sU[sL]=sQ;this._queue.push(sL);return false;}
;if(sN!==null)sN[sL]=sQ;var sX=this._promise;var sS=this._callback;var sW=sX._boundValue();sX._pushContext();var sV=sF(sS).call(sW,sQ,sL,length);var sT=sX._popContext();sD.checkForgottenReturns(sV,sT,sN!==null?fj:fE,sX);if(sV===sE){this._reject(sV.e);return true;}
;var sO=sB(sV,this._promise);if(sO instanceof sA){sO=sO._target();var sR=sO._bitField;;if(((sR&50397184)===0)){if(sP>=1)this._inFlight++ ;sU[sL]=sO;sO._proxy(this,(sL+1)*-1);return false;}
else if(((sR&33554432)!==0)){sV=sO._value();}
else if(((sR&16777216)!==0)){this._reject(sO._reason());return true;}
else {this._cancel();return true;}
;}
;sU[sL]=sV;}
;var sM= ++this._totalResolved;if(sM>=length){if(sN!==null){this._filter(sU,sN);}
else {this._resolve(sU);}
;return true;}
;return false;}
;sC.prototype._drainQueue=function(){var sY=this._queue;var tb=this._limit;var ta=this._values;while(sY.length>0&&this._inFlight<tb){if(this._isResolved())return;var tc=sY.pop();this._promiseFulfilled(ta[tc],tc);}
;}
;sC.prototype._filter=function(td,tf){var te=tf.length;var tg=new Array(te);var j=0;for(var i=0;i<te; ++i){if(td[i])tg[j++ ]=tf[i];}
;tg.length=j;this._resolve(tg);}
;sC.prototype.preservedValues=function(){return this._preservedValues;}
;function sv(th,tk,tl,tj){if(typeof tk!==cW){return sy(da+sx.classString(tk));}
;var ti=0;if(tl!==undefined){if(typeof tl===et&&tl!==null){if(typeof tl.concurrency!==bf){return sA.reject(new TypeError(dY+sx.classString(tl.concurrency)));}
;ti=tl.concurrency;}
else {return sA.reject(new TypeError(bq+sx.classString(tl)));}
;}
;ti=typeof ti===bf&&isFinite(ti)&&ti>=1?ti:0;return new sC(th,tk,ti,tj).promise();}
;sA.prototype.map=function(tn,tm){return sv(this,tn,tm,null);}
;sA.map=function(tp,tr,tq,ts){return sv(tp,tr,tq,ts);}
;}
;}
,{"./util":36}],'19':[function(tt,tv,tu){B;tv.exports=function(tz,ty,tA,tx,tB){var tw=tt(dX);var tC=tw.tryCatch;tz.method=function(tD){if(typeof tD!==cW){throw new tz.TypeError(da+tw.classString(tD));}
;return function(){var tF=new tz(ty);tF._captureStackTrace();tF._pushContext();var tG=tC(tD).apply(this,arguments);var tE=tF._popContext();tB.checkForgottenReturns(tG,tE,dN,tF);tF._resolveFromSyncValue(tG);return tF;}
;}
;tz.attempt=tz[eo]=function(tM){if(typeof tM!==cW){return tx(da+tw.classString(tM));}
;var tJ=new tz(ty);tJ._captureStackTrace();tJ._pushContext();var tK;if(arguments.length>1){tB.deprecated(fD);var tL=arguments[1];var tI=arguments[2];tK=tw.isArray(tL)?tC(tM).apply(tI,tL):tC(tM).call(tI,tL);}
else {tK=tC(tM)();}
;var tH=tJ._popContext();tB.checkForgottenReturns(tK,tH,bC,tJ);tJ._resolveFromSyncValue(tK);return tJ;}
;tz.prototype._resolveFromSyncValue=function(tN){if(tN===tw.errorObj){this._rejectCallback(tN.e,false);}
else {this._resolveCallback(tN,true);}
;}
;}
;}
,{"./util":36}],'20':[function(tX,tT,tS){B;var tU=tX(dX);var tO=tU.maybeWrapAsError;var tP=tX(eg);var ua=tP.OperationalError;var tW=tX(fB);function tQ(ub){return ub instanceof Error&&tW.getPrototypeOf(ub)===Error.prototype;}
;var tR=/^(?:name|message|stack|cause)$/;function tY(ud){var ue;if(tQ(ud)){ue=new ua(ud);ue.name=ud.name;ue.message=ud.message;ue.stack=ud.stack;var uc=tW.keys(ud);for(var i=0;i<uc.length; ++i){var uf=uc[i];if(!tR.test(uf)){ue[uf]=ud[uf];}
;}
;return ue;}
;tU.markAsOriginatingFromRejection(ud);return ud;}
;function tV(ug,uh){return function(uk,ul){if(ug===null)return;if(uk){var ui=tY(tO(uk));ug._attachExtraTrace(ui);ug._reject(ui);}
else if(!uh){ug._fulfill(ul);}
else {var uj=[].slice.call(arguments,1);;ug._fulfill(uj);}
;ug=null;}
;}
;tT.exports=tV;}
,{"./errors":12,"./es5":13,"./util":36}],'21':[function(um,uo,un){B;uo.exports=function(us){var ur=um(dX);var ut=us._async;var uu=ur.tryCatch;var uv=ur.errorObj;function uw(uz,uy){var ux=this;if(!ur.isArray(uz))return up.call(ux,uz,uy);var uA=uu(uy).apply(ux._boundValue(),[null].concat(uz));if(uA===uv){ut.throwLater(uA.e);}
;}
;function up(uE,uD){var uC=this;var uB=uC._boundValue();var uF=uE===undefined?uu(uD).call(uB,null):uu(uD).call(uB,null,uE);if(uF===uv){ut.throwLater(uF.e);}
;}
;function uq(uG,uI){var uH=this;if(!uG){var uK=new Error(uG+fi);uK.cause=uG;uG=uK;}
;var uJ=uu(uI).call(uH._boundValue(),uG);if(uJ===uv){ut.throwLater(uJ.e);}
;}
;us.prototype.asCallback=us.prototype.nodeify=function(uN,uM){if(typeof uN==cW){var uL=up;if(uM!==undefined&&Object(uM).spread){uL=uw;}
;this._then(uL,uq,undefined,this,uN);}
;return this;}
;}
;}
,{"./util":36}],'22':[function(uO,uQ,uP){B;uQ.exports=function(){var uT=function(){return new TypeError(cO);}
;var vq=function(){return new vu.PromiseInspection(this._target());}
;var vr=function(vx){return vu.reject(new TypeError(vx));}
;function vi(){}
;var vj={};var vh=uO(dX);var vo;if(vh.isNode){vo=function(){var vy=process.domain;if(vy===undefined)vy=null;return vy;}
;}
else {vo=function(){return null;}
;}
;vh.notEnumerableProp(vu,U,vo);var vp=uO(fB);var vn=uO(cG);var vw=new vn();vp.defineProperty(vu,en,{value:vw});var uX=uO(eg);var TypeError=vu.TypeError=uX.TypeError;vu.RangeError=uX.RangeError;var vm=vu.CancellationError=uX.CancellationError;vu.TimeoutError=uX.TimeoutError;vu.OperationalError=uX.OperationalError;vu.RejectionError=uX.OperationalError;vu.AggregateError=uX.AggregateError;var vt=function(){}
;var vd={};var vg={};var vk=uO(bR)(vu,vt);var uY=uO(dg)(vu,vt,vk,vr,vi);var vl=uO(eN)(vu);var uR=vl.create;var vv=uO(bE)(vu,vl);var uS=vv.CapturedTrace;var vs=uO(cK)(vu,vk);var ve=uO(bN)(vg);var uW=uO(de);var uU=vh.errorObj;var vc=vh.tryCatch;function uV(self,vz){if(typeof vz!==cW){throw new TypeError(da+vh.classString(vz));}
;if(self.constructor!==vu){throw new TypeError(dr);}
;}
;function vu(vA){this._bitField=0;this._fulfillmentHandler0=undefined;this._rejectionHandler0=undefined;this._promise0=undefined;this._receiver0=undefined;if(vA!==vt){uV(this,vA);this._resolveFromExecutor(vA);}
;this._promiseCreated();this._fireEvent(bA,this);}
;vu.prototype.toString=function(){return dv;}
;vu.prototype.caught=vu.prototype[dL]=function(vE){var vC=arguments.length;if(vC>1){var vB=new Array(vC-1),j=0,i;for(i=0;i<vC-1; ++i){var vD=arguments[i];if(vh.isObject(vD)){vB[j++ ]=vD;}
else {return vr(W+h+vh.classString(vD));}
;}
;vB.length=j;vE=arguments[i];return this.then(undefined,ve(vB,vE,this));}
;return this.then(undefined,vE);}
;vu.prototype.reflect=function(){return this._then(vq,vq,undefined,this,undefined);}
;vu.prototype.then=function(vG,vH){if(vv.warnings()&&arguments.length>0&&typeof vG!==cW&&typeof vH!==cW){var vF=eA+vh.classString(vG);if(arguments.length>1){vF+=dS+vh.classString(vH);}
;this._warn(vF);}
;return this._then(vG,vH,undefined,undefined,undefined);}
;vu.prototype.done=function(vJ,vK){var vI=this._then(vJ,vK,undefined,undefined,undefined);vI._setIsFinal();}
;vu.prototype.spread=function(vL){if(typeof vL!==cW){return vr(da+vh.classString(vL));}
;return this.all()._then(vL,undefined,undefined,vd,undefined);}
;vu.prototype.toJSON=function(){var vM={isFulfilled:false,isRejected:false,fulfillmentValue:undefined,rejectionReason:undefined};if(this.isFulfilled()){vM.fulfillmentValue=this.value();vM.isFulfilled=true;}
else if(this.isRejected()){vM.rejectionReason=this.reason();vM.isRejected=true;}
;return vM;}
;vu.prototype.all=function(){if(arguments.length>0){this._warn(cN);}
;return new uY(this).promise();}
;vu.prototype.error=function(vN){return this.caught(vh.originatesFromRejection,vN);}
;vu.getNewLibraryCopy=uQ.exports;vu.is=function(vO){return vO instanceof vu;}
;vu.fromNode=vu.fromCallback=function(vP){var vR=new vu(vt);vR._captureStackTrace();var vS=arguments.length>1?!!Object(arguments[1]).multiArgs:false;var vQ=vc(vP)(uW(vR,vS));if(vQ===uU){vR._rejectCallback(vQ.e,true);}
;if(!vR._isFateSealed())vR._setAsyncGuaranteed();return vR;}
;vu.all=function(vT){return new uY(vT).promise();}
;vu.cast=function(vU){var vV=vk(vU);if(!(vV instanceof vu)){vV=new vu(vt);vV._captureStackTrace();vV._setFulfilled();vV._rejectionHandler0=vU;}
;return vV;}
;vu.resolve=vu.fulfilled=vu.cast;vu.reject=vu.rejected=function(vW){var vX=new vu(vt);vX._captureStackTrace();vX._rejectCallback(vW,true);return vX;}
;vu.setScheduler=function(vY){if(typeof vY!==cW){throw new TypeError(da+vh.classString(vY));}
;return vw.setScheduler(vY);}
;vu.prototype._then=function(wb,wc,_,wk,we){var wh=we!==undefined;var wj=wh?we:new vu(vt);var wl=this._target();var wg=wl._bitField;if(!wh){wj._propagateFrom(this,3);wj._captureStackTrace();if(wk===undefined&&((this._bitField&2097152)!==0)){if(!((wg&50397184)===0)){wk=this._boundValue();}
else {wk=wl===this?undefined:this._boundTo;}
;}
;this._fireEvent(cC,this,wj);}
;var wa=vo();if(!((wg&50397184)===0)){var wi,wf,wd=wl._settlePromiseCtx;if(((wg&33554432)!==0)){wf=wl._rejectionHandler0;wi=wb;}
else if(((wg&16777216)!==0)){wf=wl._fulfillmentHandler0;wi=wc;wl._unsetRejectionIsUnhandled();}
else {wd=wl._settlePromiseLateCancellationObserver;wf=new vm(di);wl._attachExtraTrace(wf);wi=wc;}
;vw.invoke(wd,wl,{handler:wa===null?wi:(typeof wi===cW&&vh.domainBind(wa,wi)),promise:wj,receiver:wk,value:wf});}
else {wl._addCallbacks(wb,wc,wj,wk,wa);}
;return wj;}
;vu.prototype._length=function(){return this._bitField&65535;}
;vu.prototype._isFateSealed=function(){return (this._bitField&117506048)!==0;}
;vu.prototype._isFollowing=function(){return (this._bitField&67108864)===67108864;}
;vu.prototype._setLength=function(wm){this._bitField=(this._bitField&-65536)|(wm&65535);}
;vu.prototype._setFulfilled=function(){this._bitField=this._bitField|33554432;this._fireEvent(g,this);}
;vu.prototype._setRejected=function(){this._bitField=this._bitField|16777216;this._fireEvent(bp,this);}
;vu.prototype._setFollowing=function(){this._bitField=this._bitField|67108864;this._fireEvent(bv,this);}
;vu.prototype._setIsFinal=function(){this._bitField=this._bitField|4194304;}
;vu.prototype._isFinal=function(){return (this._bitField&4194304)>0;}
;vu.prototype._unsetCancelled=function(){this._bitField=this._bitField&(~65536);}
;vu.prototype._setCancelled=function(){this._bitField=this._bitField|65536;this._fireEvent(dQ,this);}
;vu.prototype._setWillBeCancelled=function(){this._bitField=this._bitField|8388608;}
;vu.prototype._setAsyncGuaranteed=function(){if(vw.hasCustomScheduler())return;this._bitField=this._bitField|134217728;}
;vu.prototype._receiverAt=function(wn){var wo=wn===0?this._receiver0:this[wn*4-4+3];if(wo===vj){return undefined;}
else if(wo===undefined&&this._isBound()){return this._boundValue();}
;return wo;}
;vu.prototype._promiseAt=function(wp){return this[wp*4-4+2];}
;vu.prototype._fulfillmentHandlerAt=function(wq){return this[wq*4-4+0];}
;vu.prototype._rejectionHandlerAt=function(wr){return this[wr*4-4+1];}
;vu.prototype._boundValue=function(){}
;vu.prototype._migrateCallback0=function(wu){var wt=wu._bitField;var wx=wu._fulfillmentHandler0;var ww=wu._rejectionHandler0;var wv=wu._promise0;var ws=wu._receiverAt(0);if(ws===undefined)ws=vj;this._addCallbacks(wx,ww,wv,ws,null);}
;vu.prototype._migrateCallbackAt=function(wA,wy){var wD=wA._fulfillmentHandlerAt(wy);var wC=wA._rejectionHandlerAt(wy);var wB=wA._promiseAt(wy);var wz=wA._receiverAt(wy);if(wz===undefined)wz=vj;this._addCallbacks(wD,wC,wB,wz,null);}
;vu.prototype._addCallbacks=function(wK,wG,wI,wJ,wF){var wE=this._length();if(wE>=65535-4){wE=0;this._setLength(0);}
;if(wE===0){this._promise0=wI;this._receiver0=wJ;if(typeof wK===cW){this._fulfillmentHandler0=wF===null?wK:vh.domainBind(wF,wK);}
;if(typeof wG===cW){this._rejectionHandler0=wF===null?wG:vh.domainBind(wF,wG);}
;}
else {var wH=wE*4-4;this[wH+2]=wI;this[wH+3]=wJ;if(typeof wK===cW){this[wH+0]=wF===null?wK:vh.domainBind(wF,wK);}
;if(typeof wG===cW){this[wH+1]=wF===null?wG:vh.domainBind(wF,wG);}
;}
;this._setLength(wE+1);return wE;}
;vu.prototype._proxy=function(wL,wM){this._addCallbacks(undefined,undefined,wM,wL,null);}
;vu.prototype._resolveCallback=function(wN,wT){if(((this._bitField&117506048)!==0))return;if(wN===this)return this._rejectCallback(uT(),false);var wQ=vk(wN,this);if(!(wQ instanceof vu))return this._fulfill(wN);if(wT)this._propagateFrom(wQ,2);var wR=wQ._target();if(wR===this){this._reject(uT());return;}
;var wO=wR._bitField;if(((wO&50397184)===0)){var wS=this._length();if(wS>0)wR._migrateCallback0(this);for(var i=1;i<wS; ++i){wR._migrateCallbackAt(this,i);}
;this._setFollowing();this._setLength(0);this._setFollowee(wR);}
else if(((wO&33554432)!==0)){this._fulfill(wR._value());}
else if(((wO&16777216)!==0)){this._reject(wR._reason());}
else {var wP=new vm(di);wR._attachExtraTrace(wP);this._reject(wP);}
;}
;vu.prototype._rejectCallback=function(wX,wV,wW){var wU=vh.ensureErrorObject(wX);var wY=wU===wX;if(!wY&&!wW&&vv.warnings()){var xa=cL+vh.classString(wX);this._warn(xa,true);}
;this._attachExtraTrace(wU,wV?wY:false);this._reject(wX);}
;vu.prototype._resolveFromExecutor=function(xd){var xb=this;this._captureStackTrace();this._pushContext();var xc=true;var r=this._execute(xd,function(xe){xb._resolveCallback(xe);}
,function(xf){xb._rejectCallback(xf,xc);}
);xc=false;this._popContext();if(r!==undefined){xb._rejectCallback(r,true);}
;}
;vu.prototype._settlePromiseFromHandler=function(xj,xl,xh,xk){var xi=xk._bitField;if(((xi&65536)!==0))return;xk._pushContext();var x;if(xl===vd){if(!xh||typeof xh.length!==bf){x=uU;x.e=new TypeError(G+vh.classString(xh));}
else {x=vc(xj).apply(this._boundValue(),xh);}
;}
else {x=vc(xj).call(xl,xh);}
;var xg=xk._popContext();xi=xk._bitField;if(((xi&65536)!==0))return;if(x===vg){xk._reject(xh);}
else if(x===uU){xk._rejectCallback(x.e,false);}
else {vv.checkForgottenReturns(x,xg,fi,xk,this);xk._resolveCallback(x);}
;}
;vu.prototype._target=function(){var xm=this;while(xm._isFollowing())xm=xm._followee();return xm;}
;vu.prototype._followee=function(){return this._rejectionHandler0;}
;vu.prototype._setFollowee=function(xn){this._rejectionHandler0=xn;}
;vu.prototype._settlePromise=function(xt,xs,xu,xp){var xr=xt instanceof vu;var xq=this._bitField;var xo=((xq&134217728)!==0);if(((xq&65536)!==0)){if(xr)xt._invokeInternalOnCancel();if(xu instanceof vs&&xu.isFinallyHandler()){xu.cancelPromise=xt;if(vc(xs).call(xu,xp)===uU){xt._reject(uU.e);}
;}
else if(xs===vq){xt._fulfill(vq.call(xu));}
else if(xu instanceof vi){xu._promiseCancelled(xt);}
else if(xr||xt instanceof uY){xt._cancel();}
else {xu.cancel();}
;}
else if(typeof xs===cW){if(!xr){xs.call(xu,xp,xt);}
else {if(xo)xt._setAsyncGuaranteed();this._settlePromiseFromHandler(xs,xu,xp,xt);}
;}
else if(xu instanceof vi){if(!xu._isResolved()){if(((xq&33554432)!==0)){xu._promiseFulfilled(xp,xt);}
else {xu._promiseRejected(xp,xt);}
;}
;}
else if(xr){if(xo)xt._setAsyncGuaranteed();if(((xq&33554432)!==0)){xt._fulfill(xp);}
else {xt._reject(xp);}
;}
;}
;vu.prototype._settlePromiseLateCancellationObserver=function(xx){var xw=xx.handler;var xv=xx.promise;var xz=xx.receiver;var xy=xx.value;if(typeof xw===cW){if(!(xv instanceof vu)){xw.call(xz,xy,xv);}
else {this._settlePromiseFromHandler(xw,xz,xy,xv);}
;}
else if(xv instanceof vu){xv._reject(xy);}
;}
;vu.prototype._settlePromiseCtx=function(xA){this._settlePromise(xA.promise,xA.handler,xA.receiver,xA.value);}
;vu.prototype._settlePromise0=function(xB,xE,xF){var xC=this._promise0;var xD=this._receiverAt(0);this._promise0=undefined;this._receiver0=undefined;this._settlePromise(xC,xB,xD,xE);}
;vu.prototype._clearCallbackDataAtIndex=function(xG){var xH=xG*4-4;this[xH+2]=this[xH+3]=this[xH+0]=this[xH+1]=undefined;}
;vu.prototype._fulfill=function(xI){var xK=this._bitField;if(((xK&117506048)>>>16))return;if(xI===this){var xJ=uT();this._attachExtraTrace(xJ);return this._reject(xJ);}
;this._setFulfilled();this._rejectionHandler0=xI;if((xK&65535)>0){if(((xK&134217728)!==0)){this._settlePromises();}
else {vw.settlePromises(this);}
;}
;}
;vu.prototype._reject=function(xL){var xM=this._bitField;if(((xM&117506048)>>>16))return;this._setRejected();this._fulfillmentHandler0=xL;if(this._isFinal()){return vw.fatalError(xL,vh.isNode);}
;if((xM&65535)>0){vw.settlePromises(this);}
else {this._ensurePossibleRejectionHandled();}
;}
;vu.prototype._fulfillPromises=function(xN,xQ){for(var i=1;i<xN;i++ ){var xO=this._fulfillmentHandlerAt(i);var xP=this._promiseAt(i);var xR=this._receiverAt(i);this._clearCallbackDataAtIndex(i);this._settlePromise(xP,xO,xR,xQ);}
;}
;vu.prototype._rejectPromises=function(xS,xT){for(var i=1;i<xS;i++ ){var xU=this._rejectionHandlerAt(i);var xV=this._promiseAt(i);var xW=this._receiverAt(i);this._clearCallbackDataAtIndex(i);this._settlePromise(xV,xU,xW,xT);}
;}
;vu.prototype._settlePromises=function(){var yb=this._bitField;var xY=(yb&65535);if(xY>0){if(((yb&16842752)!==0)){var xX=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,xX,yb);this._rejectPromises(xY,xX);}
else {var ya=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,ya,yb);this._fulfillPromises(xY,ya);}
;this._setLength(0);}
;this._clearCancellationData();}
;vu.prototype._settledValue=function(){var yc=this._bitField;if(((yc&33554432)!==0)){return this._rejectionHandler0;}
else if(((yc&16777216)!==0)){return this._fulfillmentHandler0;}
;}
;function va(v){this.promise._resolveCallback(v);}
;function vb(v){this.promise._rejectCallback(v,false);}
;vu.defer=vu.pending=function(){vv.deprecated(eO,cy);var yd=new vu(vt);return {promise:yd,resolve:va,reject:vb};}
;vh.notEnumerableProp(vu,bc,uT);uO(eS)(vu,vt,vk,vr,vv);uO(ft)(vu,vt,vk,vv);uO(cn)(vu,uY,vr,vv);uO(cX)(vu);uO(el)(vu);uO(eq)(vu,uY,vk,vt,vw,vo);vu.Promise=vu;vu.version=fH;uO(eG)(vu,uY,vr,vk,vt,vv);uO(cq)(vu);uO(dR)(vu,vr,vk,uR,vt,vv);uO(b)(vu,vt,vv);uO(eh)(vu,vr,vt,vk,vi,vv);uO(cm)(vu);uO(bM)(vu,vt);uO(fN)(vu,uY,vk,vr);uO(bX)(vu,vt,vk,vr);uO(eQ)(vu,uY,vr,vk,vt,vv);uO(fl)(vu,uY,vv);uO(fJ)(vu,uY,vr);uO(dt)(vu,vt);uO(ck)(vu,vt);uO(bu)(vu);vh.toFastProperties(vu);vh.toFastProperties(vu.prototype);function vf(ye){var p=new vu(vt);p._fulfillmentHandler0=ye;p._rejectionHandler0=ye;p._promise0=ye;p._receiver0=ye;}
;vf({a:1});vf({b:2});vf({c:3});vf(1);vf(function(){}
);vf(undefined);vf(false);vf(new vu(vt));vv.setBounds(vn.firstLineError,vh.lastLineError);return vu;}
;}
,{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],'23':[function(yf,yh,yg){B;yh.exports=function(yp,yo,yq,yj,yn){var ym=yf(dX);var yi=ym.isArray;function yk(yr){switch(yr){case -2:return [];case -3:return {};};}
;function yl(ys){var yt=this._promise=new yp(yo);if(ys instanceof yp){yt._propagateFrom(ys,3);}
;yt._setOnCancel(this);this._values=ys;this._length=0;this._totalResolved=0;this._init(undefined,-2);}
;ym.inherits(yl,yn);yl.prototype.length=function(){return this._length;}
;yl.prototype.promise=function(){return this._promise;}
;yl.prototype._init=function yw(_,yy){var yx=yq(this._values,this._promise);if(yx instanceof yp){yx=yx._target();var yv=yx._bitField;;this._values=yx;if(((yv&50397184)===0)){this._promise._setAsyncGuaranteed();return yx._then(yw,this._reject,undefined,this,yy);}
else if(((yv&33554432)!==0)){yx=yx._value();}
else if(((yv&16777216)!==0)){return this._reject(yx._reason());}
else {return this._cancel();}
;}
;yx=ym.asArray(yx);if(yx===null){var yu=yj(eV+ym.classString(yx)).reason();this._promise._rejectCallback(yu,false);return;}
;if(yx.length===0){if(yy===-5){this._resolveEmptyArray();}
else {this._resolve(yk(yy));}
;return;}
;this._iterate(yx);}
;yl.prototype._iterate=function(yC){var yz=this.getActualLength(yC.length);this._length=yz;this._values=this.shouldCopyValues()?new Array(yz):this._values;var yD=this._promise;var yE=false;var yA=null;for(var i=0;i<yz; ++i){var yB=yq(yC[i],yD);if(yB instanceof yp){yB=yB._target();yA=yB._bitField;}
else {yA=null;}
;if(yE){if(yA!==null){yB.suppressUnhandledRejections();}
;}
else if(yA!==null){if(((yA&50397184)===0)){yB._proxy(this,i);this._values[i]=yB;}
else if(((yA&33554432)!==0)){yE=this._promiseFulfilled(yB._value(),i);}
else if(((yA&16777216)!==0)){yE=this._promiseRejected(yB._reason(),i);}
else {yE=this._promiseCancelled(i);}
;}
else {yE=this._promiseFulfilled(yB,i);}
;}
;if(!yE)yD._setAsyncGuaranteed();}
;yl.prototype._isResolved=function(){return this._values===null;}
;yl.prototype._resolve=function(yF){this._values=null;this._promise._fulfill(yF);}
;yl.prototype._cancel=function(){if(this._isResolved()||!this._promise._isCancellable())return;this._values=null;this._promise._cancel();}
;yl.prototype._reject=function(yG){this._values=null;this._promise._rejectCallback(yG,false);}
;yl.prototype._promiseFulfilled=function(yJ,yH){this._values[yH]=yJ;var yI= ++this._totalResolved;if(yI>=this._length){this._resolve(this._values);return true;}
;return false;}
;yl.prototype._promiseCancelled=function(){this._cancel();return true;}
;yl.prototype._promiseRejected=function(yK){this._totalResolved++ ;this._reject(yK);return true;}
;yl.prototype._resultCancelled=function(){if(this._isResolved())return;var yL=this._values;this._cancel();if(yL instanceof yp){yL.cancel();}
else {for(var i=0;i<yL.length; ++i){if(yL[i] instanceof yp){yL[i].cancel();}
;}
;}
;}
;yl.prototype.shouldCopyValues=function(){return true;}
;yl.prototype.getActualLength=function(yM){return yM;}
;return yl;}
;}
,{"./util":36}],'24':[function(_dereq_,module,exports){B;module.exports=function(Promise,INTERNAL){var THIS={};var util=_dereq_(dX);var nodebackForPromise=_dereq_(de);var withAppended=util.withAppended;var maybeWrapAsError=util.maybeWrapAsError;var canEvaluate=util.canEvaluate;var TypeError=_dereq_(eg).TypeError;var defaultSuffix=eW;var defaultPromisified={__dc:true};var noCopyProps=[eR,eH,ey,dF,k,cd,F,ez];var noCopyPropsPattern=new RegExp(eX+noCopyProps.join(bW)+er);var defaultFilter=function(name){return util.isIdentifier(name)&&name.charAt(0)!==dK&&name!==m;}
;function propsFilter(yN){return !noCopyPropsPattern.test(yN);}
;function isPromisified(yO){try{return yO.__dc===true;}
catch(e){return false;}
;}
;function hasPromisified(yQ,yP,yR){var yS=util.getDataPropertyOrDefault(yQ,yP+yR,defaultPromisified);return yS?isPromisified(yS):false;}
;function checkValid(yV,yT,yW){for(var i=0;i<yV.length;i+=2){var yX=yV[i];if(yW.test(yX)){var yU=yX.replace(yW,fi);for(var j=0;j<yV.length;j+=2){if(yV[j]===yU){throw new TypeError(cE.replace(fk,yT));}
;}
;}
;}
;}
;function promisifiableMethods(za,zb,yY,ze){var zc=util.inheritedDataKeys(za);var zd=[];for(var i=0;i<zc.length; ++i){var zg=zc[i];var zf=za[zg];var zh=ze===defaultFilter?true:defaultFilter(zg,zf,za);if(typeof zf===cW&&!isPromisified(zf)&&!hasPromisified(za,zg,zb)&&ze(zg,zf,za,zh)){zd.push(zg,zf);}
;}
;checkValid(zd,zb,yY);return zd;}
;var escapeIdentRegex=function(zi){return zi.replace(/([$])/,fM);}
;var makeNodePromisifiedEval;if(!true){var switchCaseArgumentOrder=function(zj){var zk=[zj];var zl=Math.max(0,zj-1-3);for(var i=zj-1;i>=zl; --i){zk.push(i);}
;for(var i=zj+1;i<=3; ++i){zk.push(i);}
;return zk;}
;var argumentSequence=function(zm){return util.filledRange(zm,bQ,fi);}
;var parameterDeclaration=function(zn){return util.filledRange(Math.max(zn,3),bQ,fi);}
;var parameterCount=function(zo){if(typeof zo.length===bf){return Math.max(Math.min(zo.length,1023+1),0);}
;return 0;}
;makeNodePromisifiedEval=function(callback,receiver,originalName,fn,_,multiArgs){var newParameterCount=Math.max(0,parameterCount(fn)-1);var argumentOrder=switchCaseArgumentOrder(newParameterCount);var shouldProxyThis=typeof callback===bY||receiver===THIS;function generateCallForArgumentCount(zp){var zq=argumentSequence(zp).join(dS);var zr=zp>0?dS:fi;var zs;if(shouldProxyThis){zs=dE;}
else {zs=receiver===undefined?dB:fo;}
;return zs.replace(fp,zq).replace(dS,zr);}
;function generateArgumentSwitchCase(){var zt=fi;for(var i=0;i<argumentOrder.length; ++i){zt+=bF+argumentOrder[i]+cp+generateCallForArgumentCount(argumentOrder[i]);}
;zt+=bV.replace(bD,(shouldProxyThis?N:ch));return zt;}
;var getFunctionCode=typeof callback===bY?(bm+callback+eI):bw;var body=E+multiArgs+ew.replace(eB,generateArgumentSwitchCase()).replace(fy,getFunctionCode);body=body.replace(dq,parameterDeclaration(newParameterCount));return new Function(ef,bw,fh,cI,cY,ff,bI,by,dp,dJ,body)(Promise,fn,receiver,withAppended,maybeWrapAsError,nodebackForPromise,util.tryCatch,util.errorObj,util.notEnumerableProp,INTERNAL);}
;}
;function makeNodePromisifiedClosure(zx,zz,_,zy,zu,zw){var zA=(function(){return this;}
)();var zB=zx;if(typeof zB===bY){zx=zy;}
;function zv(){var zC=zz;if(zz===THIS)zC=this;var zD=new Promise(INTERNAL);zD._captureStackTrace();var zF=typeof zB===bY&&this!==zA?this[zB]:zx;var zE=nodebackForPromise(zD,zw);try{zF.apply(zC,withAppended(arguments,zE));}
catch(e){zD._rejectCallback(maybeWrapAsError(e),true,true);}
;if(!zD._isFateSealed())zD._setAsyncGuaranteed();return zD;}
;util.notEnumerableProp(zv,ez,true);return zv;}
;var makeNodePromisified=canEvaluate?makeNodePromisifiedEval:makeNodePromisifiedClosure;function promisifyAll(zH,zI,zG,zM,zP){var zK=new RegExp(escapeIdentRegex(zI)+fd);var zR=promisifiableMethods(zH,zI,zK,zG);for(var i=0,zJ=zR.length;i<zJ;i+=2){var zO=zR[i];var zN=zR[i+1];var zQ=zO+zI;if(zM===makeNodePromisified){zH[zQ]=makeNodePromisified(zO,THIS,zO,zN,zI,zP);}
else {var zL=zM(zN,function(){return makeNodePromisified(zO,THIS,zO,zN,zI,zP);}
);util.notEnumerableProp(zL,ez,true);zH[zQ]=zL;}
;}
;util.toFastProperties(zH);return zH;}
;function promisify(zS,zU,zT){return makeNodePromisified(zS,zU,undefined,zS,null,zT);}
;Promise.promisify=function(zV,zX){if(typeof zV!==cW){throw new TypeError(da+util.classString(zV));}
;if(isPromisified(zV)){return zV;}
;zX=Object(zX);var Aa=zX.context===undefined?THIS:zX.context;var zW=!!zX.multiArgs;var zY=promisify(zV,Aa,zW);util.copyDescriptors(zV,zY,propsFilter);return zY;}
;Promise.promisifyAll=function(Ai,Ag){if(typeof Ai!==cW&&typeof Ai!==et){throw new TypeError(dD);}
;Ag=Object(Ag);var Ae=!!Ag.multiArgs;var Ab=Ag.suffix;if(typeof Ab!==bY)Ab=defaultSuffix;var Af=Ag.filter;if(typeof Af!==cW)Af=defaultFilter;var Ah=Ag.promisifier;if(typeof Ah!==cW)Ah=makeNodePromisified;if(!util.isIdentifier(Ab)){throw new RangeError(fw);}
;var Ac=util.inheritedDataKeys(Ai);for(var i=0;i<Ac.length; ++i){var Ad=Ai[Ac[i]];if(Ac[i]!==m&&util.isClass(Ad)){promisifyAll(Ad.prototype,Ab,Af,Ah,Ae);promisifyAll(Ad,Ab,Af,Ah,Ae);}
;}
;return promisifyAll(Ai,Ab,Af,Ah,Ae);}
;}
;}
,{"./errors":12,"./nodeback":20,"./util":36}],'25':[function(Aj,Al,Ak){B;Al.exports=function(As,An,At,Ar){var Aq=Aj(dX);var Ax=Aq.isObject;var Am=Aj(fB);var Au;if(typeof Map===cW)Au=Map;var Ap=(function(){var Ay=0;var Az=0;function AA(AB,AC){this[Ay]=AB;this[Ay+Az]=AC;Ay++ ;}
;return function AF(AD){Az=AD.size;Ay=0;var AE=new Array(AD.size*2);AD.forEach(AA,AE);return AE;}
;}
)();var Aw=function(AJ){var AG=new Au();var length=AJ.length/2|0;for(var i=0;i<length; ++i){var AI=AJ[length+i];var AH=AJ[i];AG.set(AI,AH);}
;return AG;}
;function Ao(AK){var AN=false;var AP;if(Au!==undefined&&AK instanceof Au){AP=Ap(AK);AN=true;}
else {var AL=Am.keys(AK);var AM=AL.length;AP=new Array(AM*2);for(var i=0;i<AM; ++i){var AO=AL[i];AP[i]=AK[AO];AP[i+AM]=AO;}
;}
;this.constructor$(AP);this._isMap=AN;this._init$(undefined,-3);}
;Aq.inherits(Ao,An);Ao.prototype._init=function(){}
;Ao.prototype._promiseFulfilled=function(AU,AQ){this._values[AQ]=AU;var AR= ++this._totalResolved;if(AR>=this._length){var AS;if(this._isMap){AS=Aw(this._values);}
else {AS={};var AV=this.length();for(var i=0,AT=this.length();i<AT; ++i){AS[this._values[i+AV]]=this._values[i];}
;}
;this._resolve(AS);return true;}
;return false;}
;Ao.prototype.shouldCopyValues=function(){return false;}
;Ao.prototype.getActualLength=function(AW){return AW>>1;}
;function Av(AX){var Ba;var AY=At(AX);if(!Ax(AY)){return Ar(C);}
else if(AY instanceof As){Ba=AY._then(As.props,undefined,undefined,undefined,undefined);}
else {Ba=new Ao(AY).promise();}
;if(AY instanceof As){Ba._propagateFrom(AY,2);}
;return Ba;}
;As.prototype.props=function(){return Av(this);}
;As.props=function(Bb){return Av(Bb);}
;}
;}
,{"./es5":13,"./util":36}],'26':[function(Bd,Bf,Be){B;function Bg(Bh,Bl,Bi,Bk,Bj){for(var j=0;j<Bj; ++j){Bi[j+Bk]=Bh[j+Bl];Bh[j+Bl]=void 0;}
;}
;function Bc(Bm){this._capacity=Bm;this._length=0;this._front=0;}
;Bc.prototype._willBeOverCapacity=function(Bn){return this._capacity<Bn;}
;Bc.prototype._pushOne=function(Bo){var length=this.length();this._checkCapacity(length+1);var i=(this._front+length)&(this._capacity-1);this[i]=Bo;this._length=length+1;}
;Bc.prototype._unshiftOne=function(Br){var Bq=this._capacity;this._checkCapacity(this.length()+1);var Bp=this._front;var i=((((Bp-1)&(Bq-1))^Bq)-Bq);this[i]=Br;this._front=i;this._length=this.length()+1;}
;Bc.prototype.unshift=function(Bt,Bs,Bu){this._unshiftOne(Bu);this._unshiftOne(Bs);this._unshiftOne(Bt);}
;Bc.prototype.push=function(By,Bw,Bx){var length=this.length()+3;if(this._willBeOverCapacity(length)){this._pushOne(By);this._pushOne(Bw);this._pushOne(Bx);return;}
;var j=this._front+length-3;this._checkCapacity(length);var Bv=this._capacity-1;this[(j+0)&Bv]=By;this[(j+1)&Bv]=Bw;this[(j+2)&Bv]=Bx;this._length=length;}
;Bc.prototype.shift=function(){var Bz=this._front,BA=this[Bz];this[Bz]=undefined;this._front=(Bz+1)&(this._capacity-1);this._length-- ;return BA;}
;Bc.prototype.length=function(){return this._length;}
;Bc.prototype._checkCapacity=function(BB){if(this._capacity<BB){this._resizeTo(this._capacity<<1);}
;}
;Bc.prototype._resizeTo=function(BE){var BF=this._capacity;this._capacity=BE;var BC=this._front;var length=this._length;var BD=(BC+length)&(BF-1);Bg(this,0,this,BF,BD);}
;Bf.exports=Bc;}
,{}],'27':[function(BG,BI,BH){B;BI.exports=function(BN,BJ,BO,BL){var BK=BG(dX);var BP=function(BQ){return BQ.then(function(BR){return BM(BR,BQ);}
);}
;function BM(BS,parent){var BV=BO(BS);if(BV instanceof BN){return BP(BV);}
else {BS=BK.asArray(BS);if(BS===null)return BL(eV+BK.classString(BS));}
;var BU=new BN(BJ);if(parent!==undefined){BU._propagateFrom(parent,3);}
;var BY=BU._fulfill;var BX=BU._reject;for(var i=0,BW=BS.length;i<BW; ++i){var BT=BS[i];if(BT===undefined&&!(i in BS)){continue;}
;BN.cast(BT)._then(BY,BX,undefined,BU,null);}
;return BU;}
;BN.race=function(Ca){return BM(Ca,undefined);}
;BN.prototype.race=function(){return BM(this,undefined);}
;}
;}
,{"./util":36}],'28':[function(Cb,Cd,Cc){B;Cd.exports=function(Cm,Cg,Ck,Cn,Cl,Co){var Ce=Cm._getDomain;var Cj=Cb(dX);var Cp=Cj.tryCatch;function Cf(Cw,Cs,Cu,Cv){this.constructor$(Cw);var Ct=Ce();this._fn=Ct===null?Cs:Cj.domainBind(Ct,Cs);if(Cu!==undefined){Cu=Cm.resolve(Cu);Cu._attachCancellationCallback(this);}
;this._initialValue=Cu;this._currentCancellable=null;if(Cv===Cl){this._eachValues=Array(this._length);}
else if(Cv===0){this._eachValues=null;}
else {this._eachValues=undefined;}
;this._promise._captureStackTrace();this._init$(undefined,-5);}
;Cj.inherits(Cf,Cg);Cf.prototype._gotAccum=function(Cx){if(this._eachValues!==undefined&&this._eachValues!==null&&Cx!==Cl){this._eachValues.push(Cx);}
;}
;Cf.prototype._eachComplete=function(Cy){if(this._eachValues!==null){this._eachValues.push(Cy);}
;return this._eachValues;}
;Cf.prototype._init=function(){}
;Cf.prototype._resolveEmptyArray=function(){this._resolve(this._eachValues!==undefined?this._eachValues:this._initialValue);}
;Cf.prototype.shouldCopyValues=function(){return false;}
;Cf.prototype._resolve=function(Cz){this._promise._resolveCallback(Cz);this._values=null;}
;Cf.prototype._resultCancelled=function(CA){if(CA===this._initialValue)return this._cancel();if(this._isResolved())return;this._resultCancelled$();if(this._currentCancellable instanceof Cm){this._currentCancellable.cancel();}
;if(this._initialValue instanceof Cm){this._initialValue.cancel();}
;}
;Cf.prototype._iterate=function(CB){this._values=CB;var CD;var i;var length=CB.length;if(this._initialValue!==undefined){CD=this._initialValue;i=0;}
else {CD=Cm.resolve(CB[0]);i=1;}
;this._currentCancellable=CD;if(!CD.isRejected()){for(;i<length; ++i){var CC={accum:null,value:CB[i],index:i,length:length,array:this};CD=CD._then(Ci,undefined,undefined,CC,undefined);}
;}
;if(this._eachValues!==undefined){CD=CD._then(this._eachComplete,undefined,undefined,this,undefined);}
;CD._then(Cq,Cq,undefined,CD,this);}
;Cm.prototype.reduce=function(CF,CE){return Ch(this,CF,CE,null);}
;Cm.reduce=function(CG,CJ,CH,CI){return Ch(CG,CJ,CH,CI);}
;function Cq(CK,CL){if(this.isFulfilled()){CL._resolve(CK);}
else {CL._reject(CK);}
;}
;function Ch(CM,CP,CN,CQ){if(typeof CP!==cW){return Ck(da+Cj.classString(CP));}
;var CO=new Cf(CM,CP,CN,CQ);return CO.promise();}
;function Ci(CR){this.accum=CR;this.array._gotAccum(CR);var CS=Cn(this.value,this.array._promise);if(CS instanceof Cm){this.array._currentCancellable=CS;return CS._then(Cr,undefined,undefined,this,undefined);}
else {return Cr.call(this,CS);}
;}
;function Cr(CW){var CX=this.array;var CV=CX._promise;var CY=Cp(CX._fn);CV._pushContext();var CU;if(CX._eachValues!==undefined){CU=CY.call(CV._boundValue(),CW,this.index,this.length);}
else {CU=CY.call(CV._boundValue(),this.accum,CW,this.index,this.length);}
;if(CU instanceof Cm){CX._currentCancellable=CU;}
;var CT=CV._popContext();Co.checkForgottenReturns(CU,CT,CX._eachValues!==undefined?fc:bH,CV);return CU;}
;}
;}
,{"./util":36}],'29':[function(Di,De,Db){B;var Da=Di(dX);var Dd;var Dg=function(){throw new Error(bd);}
;var Dc=Da.getNativePromise();if(Da.isNode&&typeof MutationObserver===fQ){var Dh=global.setImmediate;var Df=process.nextTick;Dd=Da.isRecentNode?function(Dk){Dh.call(global,Dk);}
:function(Dl){Df.call(process,Dl);}
;}
else if(typeof Dc===cW&&typeof Dc.resolve===cW){var Dj=Dc.resolve();Dd=function(Dm){Dj.then(Dm);}
;}
else if((typeof MutationObserver!==fQ)&&!(typeof window!==fQ&&window.navigator&&(window.navigator.standalone||window.cordova))){Dd=(function(){var Dq=document.createElement(bK);var Ds={attributes:true};var Dn=false;var Dr=document.createElement(bK);var Do=new MutationObserver(function(){Dq.classList.toggle(cV);Dn=false;}
);Do.observe(Dr,Ds);var Dp=function(){if(Dn)return;Dn=true;Dr.classList.toggle(cV);}
;return function Du(Dt){var o=new MutationObserver(function(){o.disconnect();Dt();}
);o.observe(Dq,Ds);Dp();}
;}
)();}
else if(typeof setImmediate!==fQ){Dd=function(Dv){setImmediate(Dv);}
;}
else if(typeof setTimeout!==fQ){Dd=function(Dw){setTimeout(Dw,0);}
;}
else {Dd=Dg;}
;De.exports=Dd;}
,{"./util":36}],'30':[function(Dx,Dz,Dy){B;Dz.exports=function(DE,DB,DF){var DA=DE.PromiseInspection;var DD=Dx(dX);function DC(DG){this.constructor$(DG);}
;DD.inherits(DC,DB);DC.prototype._promiseResolved=function(DH,DJ){this._values[DH]=DJ;var DI= ++this._totalResolved;if(DI>=this._length){this._resolve(this._values);return true;}
;return false;}
;DC.prototype._promiseFulfilled=function(DL,DK){var DM=new DA();DM._bitField=33554432;DM._settledValueField=DL;return this._promiseResolved(DK,DM);}
;DC.prototype._promiseRejected=function(DO,DN){var DP=new DA();DP._bitField=16777216;DP._settledValueField=DO;return this._promiseResolved(DN,DP);}
;DE.settle=function(DQ){DF.deprecated(dj,du);return new DC(DQ).promise();}
;DE.prototype.settle=function(){return DE.settle(this);}
;}
;}
,{"./util":36}],'31':[function(DR,DT,DS){B;DT.exports=function(Eb,DW,Ea){var DY=DR(dX);var RangeError=DR(eg).RangeError;var DV=DR(eg).AggregateError;var DU=DY.isArray;var Ec={};function Ed(Ee){this.constructor$(Ee);this._howMany=0;this._unwrap=false;this._initialized=false;}
;DY.inherits(Ed,DW);Ed.prototype._init=function(){if(!this._initialized){return;}
;if(this._howMany===0){this._resolve([]);return;}
;this._init$(undefined,-5);var Ef=DU(this._values);if(!this._isResolved()&&Ef&&this._howMany>this._canPossiblyFulfill()){this._reject(this._getRangeError(this.length()));}
;}
;Ed.prototype.init=function(){this._initialized=true;this._init();}
;Ed.prototype.setUnwrap=function(){this._unwrap=true;}
;Ed.prototype.howMany=function(){return this._howMany;}
;Ed.prototype.setHowMany=function(Eg){this._howMany=Eg;}
;Ed.prototype._promiseFulfilled=function(Eh){this._addFulfilled(Eh);if(this._fulfilled()===this.howMany()){this._values.length=this.howMany();if(this.howMany()===1&&this._unwrap){this._resolve(this._values[0]);}
else {this._resolve(this._values);}
;return true;}
;return false;}
;Ed.prototype._promiseRejected=function(Ei){this._addRejected(Ei);return this._checkOutcome();}
;Ed.prototype._promiseCancelled=function(){if(this._values instanceof Eb||this._values==null){return this._cancel();}
;this._addRejected(Ec);return this._checkOutcome();}
;Ed.prototype._checkOutcome=function(){if(this.howMany()>this._canPossiblyFulfill()){var e=new DV();for(var i=this.length();i<this._values.length; ++i){if(this._values[i]!==Ec){e.push(this._values[i]);}
;}
;if(e.length>0){this._reject(e);}
else {this._cancel();}
;return true;}
;return false;}
;Ed.prototype._fulfilled=function(){return this._totalResolved;}
;Ed.prototype._rejected=function(){return this._values.length-this.length();}
;Ed.prototype._addRejected=function(Ej){this._values.push(Ej);}
;Ed.prototype._addFulfilled=function(Ek){this._values[this._totalResolved++ ]=Ek;}
;Ed.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected();}
;Ed.prototype._getRangeError=function(El){var Em=bl+this._howMany+R+El+P;return new RangeError(Em);}
;Ed.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0));}
;function DX(Eo,En){if((En|0)!==En||En<0){return Ea(cD);}
;var Eq=new Ed(Eo);var Ep=Eq.promise();Eq.setHowMany(En);Eq.init();return Ep;}
;Eb.some=function(Er,Es){return DX(Er,Es);}
;Eb.prototype.some=function(Et){return DX(this,Et);}
;Eb._SomePromiseArray=Ed;}
;}
,{"./errors":12,"./util":36}],'32':[function(Eu,Ew,Ev){B;Ew.exports=function(EC){function Ex(EF){if(EF!==undefined){EF=EF._target();this._bitField=EF._bitField;this._settledValueField=EF._isFateSealed()?EF._settledValue():undefined;}
else {this._bitField=0;this._settledValueField=undefined;}
;}
;Ex.prototype._settledValue=function(){return this._settledValueField;}
;var Ez=Ex.prototype.value=function(){if(!this.isFulfilled()){throw new TypeError(eC);}
;return this._settledValue();}
;var EA=Ex.prototype.error=Ex.prototype.reason=function(){if(!this.isRejected()){throw new TypeError(ca);}
;return this._settledValue();}
;var ED=Ex.prototype.isFulfilled=function(){return (this._bitField&33554432)!==0;}
;var EB=Ex.prototype.isRejected=function(){return (this._bitField&16777216)!==0;}
;var Ey=Ex.prototype.isPending=function(){return (this._bitField&50397184)===0;}
;var EE=Ex.prototype.isResolved=function(){return (this._bitField&50331648)!==0;}
;Ex.prototype.isCancelled=function(){return (this._bitField&8454144)!==0;}
;EC.prototype.__dd=function(){return (this._bitField&65536)===65536;}
;EC.prototype._isCancelled=function(){return this._target().__dd();}
;EC.prototype.isCancelled=function(){return (this._target()._bitField&8454144)!==0;}
;EC.prototype.isPending=function(){return Ey.call(this._target());}
;EC.prototype.isRejected=function(){return EB.call(this._target());}
;EC.prototype.isFulfilled=function(){return ED.call(this._target());}
;EC.prototype.isResolved=function(){return EE.call(this._target());}
;EC.prototype.value=function(){return Ez.call(this._target());}
;EC.prototype.reason=function(){var EG=this._target();EG._unsetRejectionIsUnhandled();return EA.call(EG);}
;EC.prototype._value=function(){return this._settledValue();}
;EC.prototype._reason=function(){this._unsetRejectionIsUnhandled();return this._settledValue();}
;EC.PromiseInspection=Ex;}
;}
,{}],'33':[function(EH,EJ,EI){B;EJ.exports=function(ET,EO){var EN=EH(dX);var ER=EN.errorObj;var EU=EN.isObject;function EQ(EW,EX){if(EU(EW)){if(EW instanceof ET)return EW;var EV=EK(EW);if(EV===ER){if(EX)EX._pushContext();var EY=ET.reject(EV.e);if(EX)EX._popContext();return EY;}
else if(typeof EV===cW){if(EM(EW)){var EY=new ET(EO);EW._then(EY._fulfill,EY._reject,undefined,EY,null);return EY;}
;return ES(EW,EV,EX);}
;}
;return EW;}
;function EL(Fa){return Fa.then;}
;function EK(Fb){try{return EL(Fb);}
catch(e){ER.e=e;return ER;}
;}
;var EP={}.hasOwnProperty;function EM(Fc){try{return EP.call(Fc,eE);}
catch(e){return false;}
;}
;function ES(x,Fd,Fj){var Fh=new ET(EO);var Fg=Fh;if(Fj)Fj._pushContext();Fh._captureStackTrace();if(Fj)Fj._popContext();var Ff=true;var Fi=EN.tryCatch(Fd).call(x,Fe,Fk);Ff=false;if(Fh&&Fi===ER){Fh._rejectCallback(Fi.e,true,true);Fh=null;}
;function Fe(Fl){if(!Fh)return;Fh._resolveCallback(Fl);Fh=null;}
;function Fk(Fm){if(!Fh)return;Fh._rejectCallback(Fm,Ff,true);Fh=null;}
;return Fg;}
;return EQ;}
;}
,{"./util":36}],'34':[function(Fn,Fp,Fo){B;Fp.exports=function(Fx,Fw,Fv){var Fq=Fn(dX);var Fr=Fx.TimeoutError;function Fs(FB){this.handle=FB;}
;Fs.prototype._resultCancelled=function(){clearTimeout(this.handle);}
;var Ft=function(FC){return Fu(+this).thenReturn(FC);}
;var Fu=Fx.delay=function(FD,FG){var FF;var FE;if(FG!==undefined){FF=Fx.resolve(FG)._then(Ft,null,null,FD,undefined);if(Fv.cancellation()&&FG instanceof Fx){FF._setOnCancel(FG);}
;}
else {FF=new Fx(Fw);FE=setTimeout(function(){FF._fulfill();}
,+FD);if(Fv.cancellation()){FF._setOnCancel(new Fs(FE));}
;FF._captureStackTrace();}
;FF._setAsyncGuaranteed();return FF;}
;Fx.prototype.delay=function(FH){return Fu(FH,this);}
;var Fz=function(FJ,FI,parent){var FK;if(typeof FI!==bY){if(FI instanceof Error){FK=FI;}
else {FK=new Fr(eb);}
;}
else {FK=new Fr(FI);}
;Fq.markAsOriginatingFromRejection(FK);FJ._attachExtraTrace(FK);FJ._reject(FK);if(parent!=null){parent.cancel();}
;}
;function FA(FL){clearTimeout(this.handle);return FL;}
;function Fy(FM){clearTimeout(this.handle);throw FM;}
;Fx.prototype.timeout=function(FN,FO){FN=+FN;var FQ,parent;var FP=new Fs(setTimeout(function FR(){if(FQ.isPending()){Fz(FQ,FO,parent);}
;}
,FN));if(Fv.cancellation()){parent=this.then();FQ=parent._then(FA,Fy,undefined,FP,undefined);FQ._setOnCancel(FP);}
else {FQ=this._then(FA,Fy,undefined,FP,undefined);}
;return FQ;}
;}
;}
,{"./util":36}],'35':[function(FS,FU,FT){B;FU.exports=function(Gh,Ge,Gi,FV,Gg,Ga){var Gd=FS(dX);var TypeError=FS(eg).TypeError;var FW=FS(dX).inherits;var Gk=Gd.errorObj;var Gn=Gd.tryCatch;var FX={};function Gf(e){setTimeout(function(){throw e;}
,0);}
;function Gl(Go){var Gp=Gi(Go);if(Gp!==Go&&typeof Go._isDisposable===cW&&typeof Go._getDisposer===cW&&Go._isDisposable()){Gp._setDisposable(Go._getDisposer());}
;return Gp;}
;function Gc(Gu,Gt){var i=0;var Gr=Gu.length;var Gs=new Gh(Gg);function Gq(){if(i>=Gr)return Gs._fulfill();var Gv=Gl(Gu[i++ ]);if(Gv instanceof Gh&&Gv._isDisposable()){try{Gv=Gi(Gv._getDisposer().tryDispose(Gt),Gu.promise);}
catch(e){return Gf(e);}
;if(Gv instanceof Gh){return Gv._then(Gq,Gf,null,null,null);}
;}
;Gq();}
;Gq();return Gs;}
;function Gm(Gw,Gx,Gy){this._data=Gw;this._promise=Gx;this._context=Gy;}
;Gm.prototype.data=function(){return this._data;}
;Gm.prototype.promise=function(){return this._promise;}
;Gm.prototype.resource=function(){if(this.promise().isFulfilled()){return this.promise().value();}
;return FX;}
;Gm.prototype.tryDispose=function(Gz){var GA=this.resource();var GB=this._context;if(GB!==undefined)GB._pushContext();var GC=GA!==FX?this.doDispose(GA,Gz):null;if(GB!==undefined)GB._popContext();this._promise._unsetDisposable();this._data=null;return GC;}
;Gm.isDisposer=function(d){return (d!=null&&typeof d.resource===cW&&typeof d.tryDispose===cW);}
;function Gb(GE,GD,GF){this.constructor$(GE,GD,GF);}
;FW(Gb,Gm);Gb.prototype.doDispose=function(GG,GH){var GI=this.data();return GI.call(GG,GG,GH);}
;function FY(GJ){if(Gm.isDisposer(GJ)){this.resources[this.index]._setDisposable(GJ);return GJ.promise();}
;return GJ;}
;function Gj(length){this.length=length;this.promise=null;this[length-1]=null;}
;Gj.prototype._resultCancelled=function(){var GL=this.length;for(var i=0;i<GL; ++i){var GK=this[i];if(GK instanceof Gh){GK.cancel();}
;}
;}
;Gh.using=function(){var GO=arguments.length;if(GO<2)return Ge(cJ);var GR=arguments[GO-1];if(typeof GR!==cW){return Ge(da+Gd.classString(GR));}
;var GS;var GN=true;if(GO===2&&Array.isArray(arguments[0])){GS=arguments[0];GO=GS.length;GN=false;}
else {GS=arguments;GO-- ;}
;var GV=new Gj(GO);for(var i=0;i<GO; ++i){var GT=GS[i];if(Gm.isDisposer(GT)){var GU=GT;GT=GT.promise();GT._setDisposable(GU);}
else {var GP=Gi(GT);if(GP instanceof Gh){GT=GP._then(FY,null,null,{resources:GV,index:i},undefined);}
;}
;GV[i]=GT;}
;var GM=new Array(GV.length);for(var i=0;i<GM.length; ++i){GM[i]=Gh.resolve(GV[i]).reflect();}
;var GW=Gh.all(GM).then(function(GX){for(var i=0;i<GX.length; ++i){var Ha=GX[i];if(Ha.isRejected()){Gk.e=Ha.error();return Gk;}
else if(!Ha.isFulfilled()){GW.cancel();return;}
;GX[i]=Ha.value();}
;GQ._pushContext();GR=Gn(GR);var Hb=GN?GR.apply(undefined,GX):GR(GX);var GY=GQ._popContext();Ga.checkForgottenReturns(Hb,GY,cx,GQ);return Hb;}
);var GQ=GW.lastly(function(){var Hc=new Gh.PromiseInspection(GW);return Gc(GV,Hc);}
);GV.promise=GQ;GQ._setOnCancel(GV);return GQ;}
;Gh.prototype._setDisposable=function(Hd){this._bitField=this._bitField|131072;this._disposer=Hd;}
;Gh.prototype._isDisposable=function(){return (this._bitField&131072)>0;}
;Gh.prototype._getDisposer=function(){return this._disposer;}
;Gh.prototype._unsetDisposable=function(){this._bitField=this._bitField&(~131072);this._disposer=undefined;}
;Gh.prototype.disposer=function(He){if(typeof He===cW){return new Gb(He,this,FV());}
;throw new TypeError();}
;}
;}
,{"./errors":12,"./util":36}],'36':[function(_dereq_,module,exports){B;var es5=_dereq_(fB);var canEvaluate=typeof navigator==fQ;var errorObj={e:{}};var tryCatchTarget;var globalObject=typeof self!==fQ?self:typeof window!==fQ?window:typeof global!==fQ?global:this!==undefined?this:null;function tryCatcher(){try{var Hf=tryCatchTarget;tryCatchTarget=null;return Hf.apply(this,arguments);}
catch(e){errorObj.e=e;return errorObj;}
;}
;function tryCatch(Hg){tryCatchTarget=Hg;return tryCatcher;}
;var inherits=function(Hj,Hi){var Hh={}.hasOwnProperty;function T(){this.constructor=Hj;this.constructor$=Hi;for(var Hk in Hi.prototype){if(Hh.call(Hi.prototype,Hk)&&Hk.charAt(Hk.length-1)!==fd){this[Hk+fd]=Hi.prototype[Hk];}
;}
;}
;T.prototype=Hi.prototype;Hj.prototype=new T();return Hj.prototype;}
;function isPrimitive(Hl){return Hl==null||Hl===true||Hl===false||typeof Hl===bY||typeof Hl===bf;}
;function isObject(Hm){return typeof Hm===cW||typeof Hm===et&&Hm!==null;}
;function maybeWrapAsError(Hn){if(!isPrimitive(Hn))return Hn;return new Error(safeToString(Hn));}
;function withAppended(Hp,Ho){var Hq=Hp.length;var Hr=new Array(Hq+1);var i;for(i=0;i<Hq; ++i){Hr[i]=Hp[i];}
;Hr[i]=Ho;return Hr;}
;function getDataPropertyOrDefault(Ht,Hu,Hs){if(es5.isES5){var Hv=Object.getOwnPropertyDescriptor(Ht,Hu);if(Hv!=null){return Hv.get==null&&Hv.set==null?Hv.value:Hs;}
;}
else {return {}.hasOwnProperty.call(Ht,Hu)?Ht[Hu]:undefined;}
;}
;function notEnumerableProp(Hx,name,Hy){if(isPrimitive(Hx))return Hx;var Hw={value:Hy,configurable:true,enumerable:false,writable:true};es5.defineProperty(Hx,name,Hw);return Hx;}
;function thrower(r){throw r;}
;var inheritedDataKeys=(function(){var Hz=[Array.prototype,Object.prototype,Function.prototype];var HC=function(HD){for(var i=0;i<Hz.length; ++i){if(Hz[i]===HD){return true;}
;}
;return false;}
;if(es5.isES5){var HA=Object.getOwnPropertyNames;return function(HE){var HH=[];var HG=Object.create(null);while(HE!=null&&!HC(HE)){var HF;try{HF=HA(HE);}
catch(e){return HH;}
;for(var i=0;i<HF.length; ++i){var HI=HF[i];if(HG[HI])continue;HG[HI]=true;var HJ=Object.getOwnPropertyDescriptor(HE,HI);if(HJ!=null&&HJ.get==null&&HJ.set==null){HH.push(HI);}
;}
;HE=es5.getPrototypeOf(HE);}
;return HH;}
;}
else {var HB={}.hasOwnProperty;return function(HK){if(HC(HK))return [];var HL=[];enumeration:for(var HM in HK){if(HB.call(HK,HM)){HL.push(HM);}
else {for(var i=0;i<Hz.length; ++i){if(HB.call(Hz[i],HM)){continue enumeration;}
;}
;HL.push(HM);}
;}
;return HL;}
;}
;}
)();var thisAssignmentPattern=/this\s*\.\s*\S+\s*=/;function isClass(HQ){try{if(typeof HQ===cW){var HN=es5.names(HQ.prototype);var HO=es5.isES5&&HN.length>1;var HP=HN.length>0&&!(HN.length===1&&HN[0]===m);var HR=thisAssignmentPattern.test(HQ+fi)&&es5.names(HQ).length>0;if(HO||HP||HR){return true;}
;}
;return false;}
catch(e){return false;}
;}
;function toFastProperties(obj){function FakeConstructor(){}
;FakeConstructor.prototype=obj;var l=8;while(l-- )new FakeConstructor();return obj;eval(obj);}
;var rident=/^[a-z$_][a-z$_0-9]*$/i;function isIdentifier(HS){return rident.test(HS);}
;function filledRange(HT,HU,HV){var HW=new Array(HT);for(var i=0;i<HT; ++i){HW[i]=HU+i+HV;}
;return HW;}
;function safeToString(HX){try{return HX+fi;}
catch(e){return dO;}
;}
;function isError(HY){return HY!==null&&typeof HY===et&&typeof HY.message===bY&&typeof HY.name===bY;}
;function markAsOriginatingFromRejection(e){try{notEnumerableProp(e,fS,true);}
catch(Ia){}
;}
;function originatesFromRejection(e){if(e==null)return false;return ((e instanceof Error[ek].OperationalError)||e[fS]===true);}
;function canAttachTrace(Ib){return isError(Ib)&&es5.propertyIsWritable(Ib,I);}
;var ensureErrorObject=(function(){if(!(I in new Error())){return function(Ic){if(canAttachTrace(Ic))return Ic;try{throw new Error(safeToString(Ic));}
catch(Id){return Id;}
;}
;}
else {return function(Ie){if(canAttachTrace(Ie))return Ie;return new Error(safeToString(Ie));}
;}
;}
)();function classString(If){return {}.toString.call(If);}
;function copyDescriptors(Ig,Ih,Ii){var Ij=es5.names(Ig);for(var i=0;i<Ij.length; ++i){var Ik=Ij[i];if(Ii(Ik)){try{es5.defineProperty(Ih,Ik,es5.getDescriptor(Ig,Ik));}
catch(Il){}
;}
;}
;}
;var asArray=function(v){if(es5.isArray(v)){return v;}
;return null;}
;if(typeof Symbol!==fQ&&Symbol.iterator){var ArrayFrom=typeof Array.from===cW?function(v){return Array.from(v);}
:function(v){var Io=[];var In=v[Symbol.iterator]();var Im;while(!((Im=In.next()).done)){Io.push(Im.value);}
;return Io;}
;asArray=function(v){if(es5.isArray(v)){return v;}
else if(v!=null&&typeof v[Symbol.iterator]===cW){return ArrayFrom(v);}
;return null;}
;}
;var isNode=typeof process!==fQ&&classString(process).toLowerCase()===dP;function env(Ip,Iq){return isNode?process.env[Ip]:Iq;}
;function getNativePromise(){if(typeof Promise===cW){try{var Ir=new Promise(function(){}
);if({}.toString.call(Ir)===dv){return Promise;}
;}
catch(e){}
;}
;}
;function domainBind(self,Is){return self.bind(Is);}
;var ret={isClass:isClass,isIdentifier:isIdentifier,inheritedDataKeys:inheritedDataKeys,getDataPropertyOrDefault:getDataPropertyOrDefault,thrower:thrower,isArray:es5.isArray,asArray:asArray,notEnumerableProp:notEnumerableProp,isPrimitive:isPrimitive,isObject:isObject,isError:isError,canEvaluate:canEvaluate,errorObj:errorObj,tryCatch:tryCatch,inherits:inherits,withAppended:withAppended,maybeWrapAsError:maybeWrapAsError,toFastProperties:toFastProperties,filledRange:filledRange,toString:safeToString,canAttachTrace:canAttachTrace,ensureErrorObject:ensureErrorObject,originatesFromRejection:originatesFromRejection,markAsOriginatingFromRejection:markAsOriginatingFromRejection,classString:classString,copyDescriptors:copyDescriptors,hasDevTools:typeof chrome!==fQ&&chrome&&typeof chrome.loadTimes===cW,isNode:isNode,env:env,global:globalObject,getNativePromise:getNativePromise,domainBind:domainBind};ret.isRecentNode=ret.isNode&&(function(){var It=process.versions.node.split(cF).map(Number);return (It[0]===0&&It[1]>10)||(It[0]>0);}
)();if(ret.isNode)ret.toFastProperties(process);try{throw new Error();}
catch(e){ret.lastLineError=e;}
;module.exports=ret;}
,{"./es5":13}]},{},[4])(4);}
);}
)();}
)();
(function(){var a="-",b="add",c="order",d="add/remove",e="Boolean",f="",g="remove",h="Please use 'toArray()' to see the content.",j="qx.data.Array",k="qx.debug",l="Type of the parameter not supported!",m="The parameter must be an array.",n="0-",o="change",p="0",q="number",r="changeBubble",s="changeLength",t="qx.event.type.Data";qx.Class.define(j,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(u){qx.core.Object.call(this);if(u==undefined){this.__de=[];}
else if(arguments.length>1){this.__de=[];for(var i=0;i<arguments.length;i++ ){this.__de.push(arguments[i]);}
;}
else if(typeof u==q){this.__de=new Array(u);}
else if(u instanceof Array){this.__de=qx.lang.Array.clone(u);}
else {this.__de=[];this.dispose();throw new Error(l);}
;for(var i=0;i<this.__de.length;i++ ){this._applyEventPropagation(this.__de[i],null,i);}
;this.__df();if(qx.core.Environment.get(k)){this[0]=h;}
;}
,properties:{autoDisposeItems:{check:e,init:false}},events:{"change":t,"changeLength":t},members:{__de:null,concat:function(v){v=qx.lang.Array.toNativeArray(v);if(v){var w=this.__de.concat(v);}
else {var w=this.__de.concat();}
;return new qx.data.Array(w);}
,join:function(x){return this.__de.join(x);}
,pop:function(){var y=this.__de.pop();this.__df();this._registerEventChaining(null,y,this.length-1);this.fireDataEvent(r,{value:[],name:this.length+f,old:[y],item:this});this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:g,removed:[y],added:[]},null);return y;}
,push:function(z){for(var i=0;i<arguments.length;i++ ){this.__de.push(arguments[i]);this.__df();this._registerEventChaining(arguments[i],null,this.length-1);this.fireDataEvent(r,{value:[arguments[i]],name:(this.length-1)+f,old:[],item:this});this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:b,added:[arguments[i]],removed:[]},null);}
;return this.length;}
,reverse:function(){if(this.length==0){return;}
;var A=this.__de.concat();this.__de.reverse();this.__dg(0,this.length);this.fireDataEvent(o,{start:0,end:this.length-1,type:c,added:[],removed:[]},null);this.fireDataEvent(r,{value:this.__de,name:n+(this.__de.length-1),old:A,item:this});}
,shift:function(){if(this.length==0){return;}
;var B=this.__de.shift();this.__df();this._registerEventChaining(null,B,this.length-1);this.__dg(0,this.length);this.fireDataEvent(r,{value:[],name:p,old:[B],item:this});this.fireDataEvent(o,{start:0,end:this.length-1,type:g,removed:[B],added:[]},null);return B;}
,slice:function(D,C){return new qx.data.Array(this.__de.slice(D,C));}
,splice:function(I,K,M){var Q=this.__de.length;var L=this.__de.splice.apply(this.__de,arguments);if(this.__de.length!=Q){this.__df();}
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
;this.__dg(I+(arguments.length-2)-K,this.length);if(O||G){var J=[];for(var i=2;i<arguments.length;i++ ){J[i-2]=arguments[i];}
;var F=(I+Math.max(arguments.length-3,K-1));var name=I==F?F:I+a+F;var N={value:J,name:name+f,old:L,item:this};this.fireDataEvent(r,N);}
;return (new qx.data.Array(L));}
,replace:function(R){R=qx.lang.Array.toNativeArray(R);if(this.equals(R)){return;}
;var S=[0,this.getLength()];R.forEach(function(T){S.push(T);}
);this.splice.apply(this,S);}
,sort:function(V){if(this.length==0){return;}
;var U=this.__de.concat();this.__de.sort.apply(this.__de,arguments);if(qx.lang.Array.equals(this.__de,U)===true){return;}
;this.__dg(0,this.length);this.fireDataEvent(o,{start:0,end:this.length-1,type:c,added:[],removed:[]},null);this.fireDataEvent(r,{value:this.__de,name:n+(this.length-1),old:U,item:this});}
,unshift:function(W){for(var i=arguments.length-1;i>=0;i-- ){this.__de.unshift(arguments[i]);this.__df();this.__dg(0,this.length);this.fireDataEvent(r,{value:[this.__de[0]],name:p,old:[this.__de[1]],item:this});this.fireDataEvent(o,{start:0,end:this.length-1,type:b,added:[arguments[i]],removed:[]},null);}
;return this.length;}
,toArray:function(){return this.__de;}
,getItem:function(X){return this.__de[X];}
,setItem:function(Y,bb){var ba=this.__de[Y];if(ba===bb){return;}
;this.__de[Y]=bb;this._registerEventChaining(bb,ba,Y);if(this.length!=this.__de.length){this.__df();}
;this.fireDataEvent(r,{value:[bb],name:Y+f,old:[ba],item:this});this.fireDataEvent(o,{start:Y,end:Y,type:d,added:[bb],removed:[ba]},null);}
,getLength:function(){return this.length;}
,indexOf:function(bc){return this.__de.indexOf(bc);}
,lastIndexOf:function(bd){return this.__de.lastIndexOf(bd);}
,toString:function(){if(this.__de!=null){return this.__de.toString();}
;return f;}
,contains:function(be){return this.__de.indexOf(be)!==-1;}
,copy:function(){return this.concat();}
,insertAt:function(bf,bg){this.splice(bf,0,bg).dispose();}
,insertBefore:function(bi,bh){var bj=this.indexOf(bi);if(bj==-1){this.push(bh);}
else {this.splice(bj,0,bh).dispose();}
;}
,insertAfter:function(bl,bk){var bm=this.indexOf(bl);if(bm==-1||bm==(this.length-1)){this.push(bk);}
else {this.splice(bm+1,0,bk).dispose();}
;}
,removeAt:function(bn){var bo=this.splice(bn,1);var bp=bo.getItem(0);bo.dispose();return bp;}
,removeAll:function(){for(var i=0;i<this.__de.length;i++ ){this._registerEventChaining(null,this.__de[i],i);}
;if(this.getLength()==0){return [];}
;var br=this.getLength();var bq=this.__de.concat();this.__de.length=0;this.__df();this.fireDataEvent(r,{value:[],name:n+(br-1),old:bq,item:this});this.fireDataEvent(o,{start:0,end:br-1,type:g,removed:bq,added:[]},null);return bq;}
,append:function(bs){bs=qx.lang.Array.toNativeArray(bs);if(qx.core.Environment.get(k)){qx.core.Assert.assertArray(bs,m);}
;var bt=this.__de.length;Array.prototype.push.apply(this.__de,bs);for(var i=0;i<bs.length;i++ ){this._registerEventChaining(bs[i],null,bt+i);}
;var bt=this.length;this.__df();var name=bt==(this.length-1)?bt:bt+a+(this.length-1);this.fireDataEvent(r,{value:bs,name:name+f,old:[],item:this});this.fireDataEvent(o,{start:bt,end:this.length-1,type:b,added:bs,removed:[]},null);}
,exclude:function(bu){bu=qx.lang.Array.toNativeArray(bu);bu.forEach(function(bv){this.remove(bv);}
,this);}
,remove:function(bw){var bx=this.indexOf(bw);if(bx!=-1){this.splice(bx,1).dispose();return bw;}
;}
,equals:function(by){if(this.length!==by.length){return false;}
;by=qx.lang.Array.toNativeArray(by);for(var i=0;i<this.length;i++ ){if(this.getItem(i)!==by[i]){return false;}
;}
;return true;}
,sum:function(){var bz=0;for(var i=0;i<this.length;i++ ){bz+=this.getItem(i);}
;return bz;}
,max:function(){var bA=this.getItem(0);for(var i=1;i<this.length;i++ ){if(this.getItem(i)>bA){bA=this.getItem(i);}
;}
;return bA===undefined?null:bA;}
,min:function(){var bB=this.getItem(0);for(var i=1;i<this.length;i++ ){if(this.getItem(i)<bB){bB=this.getItem(i);}
;}
;return bB===undefined?null:bB;}
,forEach:function(bC,bD){for(var i=0;i<this.__de.length;i++ ){bC.call(bD,this.__de[i],i,this);}
;}
,filter:function(bE,self){return new qx.data.Array(this.__de.filter(bE,self));}
,map:function(bF,self){return new qx.data.Array(this.__de.map(bF,self));}
,some:function(bG,self){return this.__de.some(bG,self);}
,every:function(bH,self){return this.__de.every(bH,self);}
,reduce:function(bJ,bI){return this.__de.reduce(bJ,bI);}
,reduceRight:function(bL,bK){return this.__de.reduceRight(bL,bK);}
,__df:function(){var bM=this.length;this.length=this.__de.length;this.fireDataEvent(s,this.length,bM);}
,__dg:function(bO,bN){for(var i=bO;i<bN;i++ ){this._registerEventChaining(this.__de[i],this.__de[i],i);}
;}
},destruct:function(){for(var i=0;i<this.__de.length;i++ ){var bP=this.__de[i];this._applyEventPropagation(null,bP,i);if(this.isAutoDisposeItems()&&bP&&bP instanceof qx.core.Object){bP.dispose();}
;}
;this.__de=null;}
});}
)();
(function(){var a="qx.event.type.Data";qx.Class.define(a,{extend:qx.event.type.Event,members:{__dh:null,__di:null,init:function(c,d,b){qx.event.type.Event.prototype.init.call(this,false,b);this.__dh=c;this.__di=d;return this;}
,clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);f.__dh=this.__dh;f.__di=this.__di;return f;}
,getData:function(){return this.__dh;}
,getOldData:function(){return this.__di;}
}});}
)();
(function(){var a="qx.event.IEventHandler";qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(c,b){}
,registerEvent:function(f,e,d){}
,unregisterEvent:function(i,h,g){}
}});}
)();
(function(){var a="qx.core.AssertionError";qx.Bootstrap.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);this.__dj=qx.dev.StackTrace.getStackTrace();}
,members:{__dj:null,getStackTrace:function(){return this.__dj;}
}});}
)();
(function(){var a="qx.event.handler.Object";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(c,b){return qx.Class.supportsEvent(c.constructor,b);}
,registerEvent:function(f,e,d){}
,unregisterEvent:function(i,h,g){}
},defer:function(j){qx.event.Registration.addHandler(j);}
});}
)();
(function(){var a="qx.event.IEventDispatcher";qx.Interface.define(a,{members:{canDispatchEvent:function(c,event,b){this.assertInstance(event,qx.event.type.Event);this.assertString(b);}
,dispatchEvent:function(e,event,d){this.assertInstance(event,qx.event.type.Event);this.assertString(d);}
}});}
)();
(function(){var a="' declared in the class '",b="'",c="' but found '",d="qx.promise",e="The context object '",f=" is not an available class': ",g="qx.debug",h="Expected event type to be instanceof '",j="' for the event '",k="' of '",m="The event type '",n="'is already disposed.",o="qx.event.dispatch.Direct";qx.Class.define(o,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(p){this._manager=p;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(r,event,q){return !event.getBubbles();}
,dispatchEvent:function(s,event,y){if(qx.core.Environment.get(g)){if(s instanceof qx.core.Object){var x=qx.Class.getEventType(s.constructor,y);var t=qx.Class.getByName(x);if(!t){this.error(m+y+a+s.constructor+f+x);}
else if(!(event instanceof t)){this.error(h+x+c+event.classname+b);}
;}
;}
;event.setEventPhase(qx.event.type.Event.AT_TARGET);var u=this._manager.getListeners(s,y,false);if(u){for(var i=0,l=u.length;i<l;i++ ){if(this._manager.isBlacklisted(u[i].unique)){continue;}
;var w=u[i].context||s;if(qx.core.Environment.get(g)){if(w&&w.isDisposed&&w.isDisposed()&&!w.isDisposing()){this.warn(e+w+j+y+k+s+n);}
;}
;var v=u[i].handler.call(w,event);if(qx.core.Environment.get(d)){if(v instanceof qx.Promise){event.addPromise(v);}
;}
;}
;}
;}
},defer:function(z){qx.event.Registration.addDispatcher(z);}
});}
)();
(function(){var a="qx.util.DeferredCallManager",b="singleton";qx.Class.define(a,{extend:qx.core.Object,type:b,implement:[qx.core.IDisposable],construct:function(){this.__dk={};this.__dl=qx.lang.Function.bind(this.__dp,this);this.__dm=false;}
,members:{__dn:null,__do:null,__dk:null,__dm:null,__dl:null,schedule:function(d){if(this.__dn==null){this.__dn=window.setTimeout(this.__dl,0);}
;var c=d.toHashCode();if(this.__do&&this.__do[c]){return;}
;this.__dk[c]=d;this.__dm=true;}
,refreshTimeout:function(){if(this.__dn!==null){this.__dn=window.setTimeout(this.__dl,0);}
;}
,cancel:function(f){var e=f.toHashCode();if(this.__do&&this.__do[e]){this.__do[e]=null;return;}
;delete this.__dk[e];if(qx.lang.Object.isEmpty(this.__dk)&&this.__dn!=null){window.clearTimeout(this.__dn);this.__dn=null;}
;}
,__dp:qx.event.GlobalError.observeMethod(function(){this.__dn=null;while(this.__dm){this.__do=qx.lang.Object.clone(this.__dk);this.__dk={};this.__dm=false;for(var h in this.__do){var g=this.__do[h];if(g){this.__do[h]=null;g.call();}
;}
;}
;this.__do=null;}
)},destruct:function(){if(this.__dn!=null){window.clearTimeout(this.__dn);}
;this.__dl=this.__dk=null;}
});}
)();
(function(){var a='[object Boolean]',b="function",c='constructor',d='[object Date]',e="Invalid argument 'array'",f="qx.debug",g='[object Number]',h="Invalid argument 'map'",j='[object Array]',k=" at array index ",m="Could not convert complex objects like ",n='object',o="qx.lang.Object",p='[object String]',q='[object RegExp]',r="undefined",s=" to map syntax",t="object";qx.Bootstrap.define(o,{statics:{empty:function(u){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(u,h);}
;for(var v in u){if(u.hasOwnProperty(v)){delete u[v];}
;}
;}
,isEmpty:function(w){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(w,h);}
;for(var x in w){return false;}
;return true;}
,getLength:qx.Bootstrap.objectGetLength,getValues:function(z){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(z,h);}
;var A=[];var y=Object.keys(z);for(var i=0,l=y.length;i<l;i++ ){A.push(z[y[i]]);}
;return A;}
,mergeWith:qx.Bootstrap.objectMergeWith,clone:function(B,E){if(qx.lang.Type.isObject(B)){var C={};for(var D in B){if(E){C[D]=qx.lang.Object.clone(B[D],E);}
else {C[D]=B[D];}
;}
;return C;}
else if(qx.lang.Type.isArray(B)){var C=[];for(var i=0;i<B.length;i++ ){if(E){C[i]=qx.lang.Object.clone(B[i],E);}
else {C[i]=B[i];}
;}
;return C;}
;return B;}
,equals:function(F,G){return qx.lang.Object.__dq(F,G,[],[]);}
,__dq:function(N,J,H,I){if(N===J){return N!==0||1/N==1/J;}
;if(N==null||J==null){return N===J;}
;var M=Object.prototype.toString.call(N);if(M!=Object.prototype.toString.call(J)){return false;}
;switch(M){case p:return N==String(J);case g:return N!=+N?J!=+J:(N==0?1/N==1/J:N==+J);case d:case a:return +N==+J;case q:return N.source==J.source&&N.global==J.global&&N.multiline==J.multiline&&N.ignoreCase==J.ignoreCase;};if(typeof N!=n||typeof J!=n){return false;}
;var length=H.length;while(length-- ){if(H[length]==N){return I[length]==J;}
;}
;var L=N.constructor,K=J.constructor;if(L!==K&&!(qx.Bootstrap.isFunction(L)&&(L instanceof L)&&qx.Bootstrap.isFunction(K)&&(K instanceof K))&&(c in N&&c in J)){return false;}
;H.push(N);I.push(J);var Q=0,O=true;if(M==j){Q=N.length;O=Q==J.length;if(O){while(Q-- ){if(!(O=qx.lang.Object.__dq(N[Q],J[Q],H,I))){break;}
;}
;}
;}
else {for(var P in N){if(Object.prototype.hasOwnProperty.call(N,P)){Q++ ;if(!(O=Object.prototype.hasOwnProperty.call(J,P)&&qx.lang.Object.__dq(N[P],J[P],H,I))){break;}
;}
;}
;if(O){for(P in J){if(Object.prototype.hasOwnProperty.call(J,P)&&!(Q-- )){break;}
;}
;O=!Q;}
;}
;H.pop();I.pop();return O;}
,invert:function(R){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(R,h);}
;var S={};for(var T in R){S[R[T].toString()]=T;}
;return S;}
,getKeyFromValue:function(U,V){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(U,h);}
;for(var W in U){if(U.hasOwnProperty(W)&&U[W]===V){return W;}
;}
;return null;}
,contains:function(X,Y){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(X,h);}
;return this.getKeyFromValue(X,Y)!==null;}
,fromArray:function(ba){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertArray(ba,e);}
;var bb={};for(var i=0,l=ba.length;i<l;i++ ){if(qx.core.Environment.get(f)){switch(typeof ba[i]){case t:case b:case r:throw new Error(m+ba[i]+k+i+s);};}
;bb[ba[i].toString()]=true;}
;return bb;}
}});}
)();
(function(){var a="qx.util.DeferredCall",b="The context object '",c="qx.debug",d="'is already disposed.",e="' of the defered call '";qx.Class.define(a,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);this.__s=f;this.__u=g||null;this.__dr=qx.util.DeferredCallManager.getInstance();}
,members:{__s:null,__u:null,__dr:null,cancel:function(){this.__dr.cancel(this);}
,schedule:function(){this.__dr.schedule(this);}
,call:function(){if(qx.core.Environment.get(c)){var h=this.__u;if(h&&h.isDisposed&&h.isDisposed()){this.warn(b+h+e+this+d);}
;}
;this.__u?this.__s.apply(this.__u):this.__s();}
},destruct:function(){this.cancel();this.__u=this.__s=this.__dr=null;}
});}
)();
(function(){var a="qx.debug.databinding",b=". Error message: ",c="No number or 'last' value has been given",d="Data after conversion: ",f="set",g="deepBinding",h=")",k=") to the object '",l="item",m="Can not remove the bindings for null object!",n="Please use only one array at a time: ",p="Binding executed from ",q="Integer",r="reset",s=" of object ",t="qx.event.type.Data",u="qx.data.SingleValueBinding",v="Binding property ",w="Failed so set value ",x=").",y="change",z="qx.debug",A="targetObject",B="targetPropertyChain",C="get",D="^",E="Binding could not be found!",F="sourceObject",G="String",H=" to ",I="Binding from '",J="",K="sourcePropertyChain",L="PositiveNumber",M="Data before conversion: ",N="]",O="[",P=".",Q="PositiveInteger",R="' (",S=" on ",T="Binding does not exist!",U=" does not work.",V=" in an array binding: ",W=" is not an data (qx.event.type.Data) event on ",X=".[",Y=" (",bj="Boolean",bk=" by ",bl="Date",bg="Number",bh=" not possible: No event available. ",bi="last";qx.Class.define(u,{statics:{__ds:{},__dt:{},bind:function(by,bs,bD,bA,bH){if(qx.core.Environment.get(z)){qx.core.Assert.assertObject(by,F);qx.core.Assert.assertString(bs,K);qx.core.Assert.assertObject(bD,A);qx.core.Assert.assertString(bA,B);}
;var bC=this.__dv(by,bs,bD,bA,bH);var bo=bs.split(P);var bn=this.__dD(bo);var bq=[];var bF=[];var bp=[];var br=[];var bw=by;var bE=null;try{for(var i=0;i<bo.length;i++ ){if(bn[i]!==J){br.push(y);}
else {var bv=this.__dw(bw,bo[i]);if(!bv){if(i==0){throw new qx.core.AssertionError(v+bo[i]+s+bw+bh);}
;bE=this.__dC(undefined,bD,bA,bH,by);break;}
;br.push(bv);}
;bq[i]=bw;if(i==bo.length-1){if(bn[i]!==J){var bx=bn[i]===bi?bw.length-1:bn[i];var bm=bw.getItem(bx);bE=this.__dC(bm,bD,bA,bH,by);bp[i]=this.__dE(bw,br[i],bD,bA,bH,bn[i]);}
else {if(bo[i]!=null&&bw[C+qx.lang.String.firstUp(bo[i])]!=null){var bm=bw[C+qx.lang.String.firstUp(bo[i])]();bE=this.__dC(bm,bD,bA,bH,by);}
;bp[i]=this.__dE(bw,br[i],bD,bA,bH);}
;}
else {var bG={index:i,propertyNames:bo,sources:bq,listenerIds:bp,arrayIndexValues:bn,targetObject:bD,targetPropertyChain:bA,options:bH,listeners:bF};var bB=qx.lang.Function.bind(this.__du,this,bG);bF.push(bB);bp[i]=bw.addListener(br[i],bB);}
;if(bw[C+qx.lang.String.firstUp(bo[i])]==null){bw=undefined;}
else if(bn[i]!==J){var bx=bn[i]===bi?bw.length-1:bn[i];bw=bw[C+qx.lang.String.firstUp(bo[i])](bx);}
else {bw=bw[C+qx.lang.String.firstUp(bo[i])]();if(bw===null&&(bo.length-1)!=i){bw=undefined;}
;}
;if(!bw){this.__dC(bw,bD,bA,bH,by);break;}
;}
;}
catch(bI){for(var i=0;i<bq.length;i++ ){if(bq[i]&&bp[i]){bq[i].removeListenerById(bp[i]);}
;}
;var bt=bC.targets;var bz=bC.listenerIds;for(var i=0;i<bt.length;i++ ){if(bt[i]&&bz[i]){bt[i].removeListenerById(bz[i]);}
;}
;throw bI;}
;var bu={type:g,listenerIds:bp,sources:bq,targetListenerIds:bC.listenerIds,targets:bC.targets,initialPromise:bE};this.__dF(bu,by,bs,bD,bA);return bu;}
,__du:function(bP){if(bP.options&&bP.options.onUpdate){bP.options.onUpdate(bP.sources[bP.index],bP.targetObject);}
;for(var j=bP.index+1;j<bP.propertyNames.length;j++ ){var bN=bP.sources[j];bP.sources[j]=null;if(!bN){continue;}
;bN.removeListenerById(bP.listenerIds[j]);}
;var bN=bP.sources[bP.index];for(var j=bP.index+1;j<bP.propertyNames.length;j++ ){if(bP.arrayIndexValues[j-1]!==J){bN=bN[C+qx.lang.String.firstUp(bP.propertyNames[j-1])](bP.arrayIndexValues[j-1]);}
else {bN=bN[C+qx.lang.String.firstUp(bP.propertyNames[j-1])]();}
;bP.sources[j]=bN;if(!bN){if(bP.options&&bP.options.converter){var bJ=false;if(bP.options.ignoreConverter){var bQ=bP.propertyNames.slice(0,j).join(P);var bO=bQ.match(new RegExp(D+bP.options.ignoreConverter));bJ=bO?bO.length>0:false;}
;if(!bJ){this.__dy(bP.targetObject,bP.targetPropertyChain,bP.options.converter());}
else {this.__dx(bP.targetObject,bP.targetPropertyChain);}
;}
else {this.__dx(bP.targetObject,bP.targetPropertyChain);}
;break;}
;if(j==bP.propertyNames.length-1){if(qx.Class.implementsInterface(bN,qx.data.IListData)){var bR=bP.arrayIndexValues[j]===bi?bN.length-1:bP.arrayIndexValues[j];var bK=bN.getItem(bR);this.__dC(bK,bP.targetObject,bP.targetPropertyChain,bP.options,bP.sources[bP.index]);bP.listenerIds[j]=this.__dE(bN,y,bP.targetObject,bP.targetPropertyChain,bP.options,bP.arrayIndexValues[j]);}
else {if(bP.propertyNames[j]!=null&&bN[C+qx.lang.String.firstUp(bP.propertyNames[j])]!=null){var bK=bN[C+qx.lang.String.firstUp(bP.propertyNames[j])]();this.__dC(bK,bP.targetObject,bP.targetPropertyChain,bP.options,bP.sources[bP.index]);}
;var bL=this.__dw(bN,bP.propertyNames[j]);if(!bL){this.__dx(bP.targetObject,bP.targetPropertyChain);break;}
;bP.listenerIds[j]=this.__dE(bN,bL,bP.targetObject,bP.targetPropertyChain,bP.options);}
;}
else {if(bP.listeners[j]==null){var bM=qx.lang.Function.bind(this.__du,this,bP);bP.listeners.push(bM);}
;if(qx.Class.implementsInterface(bN,qx.data.IListData)){var bL=y;}
else {var bL=this.__dw(bN,bP.propertyNames[j]);}
;if(!bL){this.__dx(bP.targetObject,bP.targetPropertyChain);return;}
;bP.listenerIds[j]=bN.addListener(bL,bP.listeners[j]);}
;}
;}
,__dv:function(bU,cd,ch,bY,cb){var bX=bY.split(P);var bV=this.__dD(bX);var cg=[];var cf=[];var ca=[];var ce=[];var bW=ch;for(var i=0;i<bX.length-1;i++ ){if(bV[i]!==J){ce.push(y);}
else {var bT=this.__dw(bW,bX[i]);if(!bT){break;}
;ce.push(bT);}
;cg[i]=bW;var cc=function(){for(var j=i+1;j<bX.length-1;j++ ){var ck=cg[j];cg[j]=null;if(!ck){continue;}
;ck.removeListenerById(ca[j]);}
;var ck=cg[i];for(var j=i+1;j<bX.length-1;j++ ){var ci=qx.lang.String.firstUp(bX[j-1]);if(bV[j-1]!==J){var cl=bV[j-1]===bi?ck.getLength()-1:bV[j-1];ck=ck[C+ci](cl);}
else {ck=ck[C+ci]();}
;cg[j]=ck;if(cf[j]==null){cf.push(cc);}
;if(qx.Class.implementsInterface(ck,qx.data.IListData)){var cj=y;}
else {var cj=qx.data.SingleValueBinding.__dw(ck,bX[j]);if(!cj){break;}
;}
;ca[j]=ck.addListener(cj,cf[j]);}
;qx.data.SingleValueBinding.updateTarget(bU,cd,ch,bY,cb);}
;cf.push(cc);ca[i]=bW.addListener(ce[i],cc);var bS=qx.lang.String.firstUp(bX[i]);if(bW[C+bS]==null){bW=null;}
else if(bV[i]!==J){bW=bW[C+bS](bV[i]);}
else {bW=bW[C+bS]();}
;if(!bW){break;}
;}
;return {listenerIds:ca,targets:cg};}
,updateTarget:function(cm,cp,cr,cn,cq){var co=this.resolvePropertyChain(cm,cp);co=qx.data.SingleValueBinding.__dG(co,cr,cn,cq,cm);this.__dy(cr,cn,co);}
,resolvePropertyChain:function(o,cs){var ct=this.__dA(cs);return this.__dB(o,ct,ct.length);}
,__dw:function(cv,cw){var cu=this.__dH(cv,cw);if(cu==null){if(qx.Class.supportsEvent(cv.constructor,cw)){cu=cw;}
else if(qx.Class.supportsEvent(cv.constructor,y+qx.lang.String.firstUp(cw))){cu=y+qx.lang.String.firstUp(cw);}
else {return null;}
;}
;return cu;}
,__dx:function(cB,cz){var cA=this.__dA(cz);var cy=this.__dB(cB,cA);if(cy!=null){var cC=cA[cA.length-1];var cx=this.__dz(cC);if(cx){this.__dy(cB,cz,null);return;}
;if(cy[r+qx.lang.String.firstUp(cC)]!=undefined){cy[r+qx.lang.String.firstUp(cC)]();}
else {cy[f+qx.lang.String.firstUp(cC)](null);}
;}
;}
,__dy:function(cI,cF,cG){var cH=this.__dA(cF);var cE=this.__dB(cI,cH);if(cE){var cJ=cH[cH.length-1];var cD=this.__dz(cJ);if(cD){if(cD===bi){cD=cE.length-1;}
;cE.setItem(cD,cG);}
else {return cE[f+qx.lang.String.firstUp(cJ)](cG);}
;}
;}
,__dz:function(cM){var cK=/^\[(\d+|last)\]$/;var cL=cM.match(cK);if(cL){return cL[1];}
;return null;}
,__dA:function(cN){return cN.replace(/\[/g,X).split(P).filter(function(cO){return cO!==J;}
);}
,__dB:function(cU,cP,cQ){cQ=cQ||cP.length-1;var cS=cU;for(var i=0;cS!==null&&i<cQ;i++ ){try{var cT=cP[i];var cR=this.__dz(cT);if(cR){if(cR===bi){cR=cS.length-1;}
;cS=cS.getItem(cR);}
else {cS=cS[C+qx.lang.String.firstUp(cT)]();}
;}
catch(cV){return null;}
;}
;return cS;}
,__dC:function(cY,dc,cX,db,cW){cY=this.__dG(cY,dc,cX,db,cW);if(cY===undefined){this.__dx(dc,cX);}
;if(cY!==undefined){try{var da=this.__dy(dc,cX,cY);if(db&&db.onUpdate){db.onUpdate(cW,dc,cY);}
;return da;}
catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;}
;if(db&&db.onSetFail){db.onSetFail(e);}
else {qx.log.Logger.warn(w+cY+S+dc+b+e);}
;}
;}
;}
,__dD:function(dd){var de=[];for(var i=0;i<dd.length;i++ ){var name=dd[i];if(name.endsWith(N)){var df=name.substring(name.indexOf(O)+1,name.indexOf(N));if(name.indexOf(N)!=name.length-1){throw new Error(n+name+U);}
;if(df!==bi){if(df==J||isNaN(parseInt(df,10))){throw new Error(c+V+name+U);}
;}
;if(name.indexOf(O)!=0){dd[i]=name.substring(0,name.indexOf(O));de[i]=J;de[i+1]=df;dd.splice(i+1,0,l);i++ ;}
else {de[i]=df;dd.splice(i,1,l);}
;}
else {de[i]=J;}
;}
;return de;}
,__dE:function(dg,dj,dp,dm,dk,di){if(qx.core.Environment.get(z)){var dh=qx.Class.getEventType(dg.constructor,dj);qx.core.Assert.assertEquals(t,dh,dj+W+dg+P);}
;var dl=function(dr,e){if(dr!==J){if(dr===bi){dr=dg.length-1;}
;var du=dg.getItem(dr);if(du===undefined){qx.data.SingleValueBinding.__dx(dp,dm);}
;var ds=e.getData().start;var dq=e.getData().end;if(dr<ds||dr>dq){return;}
;}
else {var du=e.getData();}
;if(qx.core.Environment.get(a)){qx.log.Logger.debug(p+dg+bk+dj+H+dp+Y+dm+h);qx.log.Logger.debug(M+du);}
;du=qx.data.SingleValueBinding.__dG(du,dp,dm,dk,dg);if(qx.core.Environment.get(a)){qx.log.Logger.debug(d+du);}
;var dt;try{if(du!==undefined){dt=qx.data.SingleValueBinding.__dy(dp,dm,du);}
else {dt=qx.data.SingleValueBinding.__dx(dp,dm);}
;if(dk&&dk.onUpdate){dk.onUpdate(dg,dp,du);}
;}
catch(dv){if(!(dv instanceof qx.core.ValidationError)){throw dv;}
;if(dk&&dk.onSetFail){dk.onSetFail(dv);}
else {qx.log.Logger.warn(w+du+S+dp+b+dv);}
;}
;return dt;}
;if(!di){di=J;}
;dl=qx.lang.Function.bind(dl,dg,di);var dn=dg.addListener(dj,dl);return dn;}
,__dF:function(dB,dw,dz,dC,dA){var dx;dx=dw.toHashCode();if(this.__ds[dx]===undefined){this.__ds[dx]=[];}
;var dy=[dB,dw,dz,dC,dA];this.__ds[dx].push(dy);dx=dC.toHashCode();if(this.__dt[dx]===undefined){this.__dt[dx]=[];}
;this.__dt[dx].push(dy);}
,__dG:function(dG,dM,dF,dI,dD){if(dI&&dI.converter){var dJ;if(dM.getModel){dJ=dM.getModel();}
;return dI.converter(dG,dJ,dD,dM);}
else {var dH=this.__dA(dF);var dE=this.__dB(dM,dH);var dN=dF.substring(dF.lastIndexOf(P)+1,dF.length);if(dE==null){return dG;}
;var dK=qx.Class.getPropertyDefinition(dE.constructor,dN);var dL=dK==null?J:dK.check;return this.__dI(dG,dL);}
;}
,__dH:function(dO,dQ){var dP=qx.Class.getPropertyDefinition(dO.constructor,dQ);if(dP==null){return null;}
;return dP.event;}
,__dI:function(dT,dS){var dR=qx.lang.Type.getClass(dT);if((dR==bg||dR==G)&&(dS==q||dS==Q)){dT=parseInt(dT,10);}
;if((dR==bj||dR==bg||dR==bl)&&dS==G){dT=dT+J;}
;if((dR==bg||dR==G)&&(dS==bg||dS==L)){dT=parseFloat(dT);}
;return dT;}
,removeBindingFromObject:function(dU,dY){if(dY.type==g){for(var i=0;i<dY.sources.length;i++ ){if(dY.sources[i]){dY.sources[i].removeListenerById(dY.listenerIds[i]);}
;}
;for(var i=0;i<dY.targets.length;i++ ){if(dY.targets[i]){dY.targets[i].removeListenerById(dY.targetListenerIds[i]);}
;}
;}
else {dU.removeListenerById(dY);}
;var dX=this.getAllBindingsForObject(dU);if(dX!=undefined){for(var i=0;i<dX.length;i++ ){if(dX[i][0]==dY){var dV=dX[i][3];if(this.__dt[dV.toHashCode()]){qx.lang.Array.remove(this.__dt[dV.toHashCode()],dX[i]);}
;var dW=dX[i][1];if(this.__ds[dW.toHashCode()]){qx.lang.Array.remove(this.__ds[dW.toHashCode()],dX[i]);}
;return;}
;}
;}
;throw new Error(E);}
,removeAllBindingsForObject:function(eb){if(qx.core.Environment.get(z)){qx.core.Assert.assertNotNull(eb,m);}
;var ea=this.getAllBindingsForObject(eb);if(ea!=undefined){for(var i=ea.length-1;i>=0;i-- ){this.removeBindingFromObject(eb,ea[i][0]);}
;}
;}
,removeRelatedBindings:function(ed,ee){if(qx.core.Environment.get(z)){qx.core.Assert.assertNotNull(ed,m);qx.core.Assert.assertNotNull(ee,m);}
;var eg=this.getAllBindingsForObject(ed);if(eg!=undefined){for(var i=eg.length-1;i>=0;i-- ){var ef=eg[i][1];var ec=eg[i][3];if(ef===ee||ec===ee){this.removeBindingFromObject(ed,eg[i][0]);}
;}
;}
;}
,getAllBindingsForObject:function(ei){var ej=ei.toHashCode();if(this.__ds[ej]===undefined){this.__ds[ej]=[];}
;var ek=this.__ds[ej];var eh=this.__dt[ej]?this.__dt[ej]:[];return qx.lang.Array.unique(ek.concat(eh));}
,removeAllBindings:function(){for(var em in this.__ds){var el=qx.core.ObjectRegistry.fromHashCode(em);if(el==null){delete this.__ds[em];continue;}
;this.removeAllBindingsForObject(el);}
;this.__ds={};}
,getAllBindings:function(){return this.__ds;}
,showBindingInLog:function(eo,eq){var ep;for(var i=0;i<this.__ds[eo.toHashCode()].length;i++ ){if(this.__ds[eo.toHashCode()][i][0]==eq){ep=this.__ds[eo.toHashCode()][i];break;}
;}
;if(ep===undefined){var en=T;}
else {var en=I+ep[1]+R+ep[2]+k+ep[3]+R+ep[4]+x;}
;qx.log.Logger.debug(en);}
,showAllBindingsInLog:function(){for(var es in this.__ds){var er=qx.core.ObjectRegistry.fromHashCode(es);if(er){for(var i=0;i<this.__ds[es].length;i++ ){this.showBindingInLog(er,this.__ds[es][i][0]);}
;}
;}
;}
}});}
)();
(function(){var a="qx.core.ValidationError";qx.Class.define(a,{extend:qx.type.BaseError});}
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
,_onNative:function(){var q=qx.core.Environment.select(a,{"true":qx.event.GlobalError.observeMethod(this.__dJ),"false":this.__dJ});q.apply(this,arguments);}
,__dJ:function(e){if(this.isDisposed()){return;}
;var v=this._window;var s;try{s=v.document;}
catch(w){return;}
;var t=s.documentElement;var r=qx.bom.Event.getTarget(e);if(r==null||r===v||r===s||r===t){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,v]);qx.event.Registration.dispatchEvent(v,event);var u=event.getReturnValue();if(u!=null){e.returnValue=u;return u;}
;}
;}
},destruct:function(){this._stopWindowObserver();this._manager=this._window=null;}
,defer:function(x){qx.event.Registration.addHandler(x);}
});}
)();
(function(){var a="ready",b="mshtml",c="engine.name",d="qx.event.handler.Application",f="complete",g="webkit",h="gecko",i="qx.globalErrorHandling",j="load",k="unload",l="opera",m="left",n="DOMContentLoaded",o="shutdown",p="browser.documentmode";qx.Class.define(d,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(q){qx.core.Object.call(this);this._window=q.getWindow();this.__dK=false;this.__dL=false;this.__dM=false;this.__dN=false;this._initObserver();qx.event.handler.Application.$$instance=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var r=qx.event.handler.Application.$$instance;if(r){r.__dO();}
;}
},members:{canHandleEvent:function(t,s){}
,registerEvent:function(w,v,u){}
,unregisterEvent:function(z,y,x){}
,__dM:null,__dK:null,__dL:null,__dN:null,__dO:function(){if(!this.__dM&&this.__dK&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(c)==b)){if(qx.event.Registration.hasListener(this._window,a)){this.__dM=true;qx.event.Registration.fireEvent(this._window,a);}
;}
else {this.__dM=true;qx.event.Registration.fireEvent(this._window,a);}
;}
;}
,isApplicationReady:function(){return this.__dM;}
,_initObserver:function(){if(qx.$$domReady||document.readyState==f||document.readyState==a){this.__dK=true;this.__dO();}
else {this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);if(qx.core.Environment.get(c)==h||qx.core.Environment.get(c)==l||qx.core.Environment.get(c)==g||(qx.core.Environment.get(c)==b&&qx.core.Environment.get(p)>8)){qx.bom.Event.addNativeListener(this._window,n,this._onNativeLoadWrapped);}
else {var self=this;var A=function(){try{document.documentElement.doScroll(m);if(document.body){self._onNativeLoadWrapped();}
;}
catch(B){window.setTimeout(A,100);}
;}
;A();}
;qx.bom.Event.addNativeListener(this._window,j,this._onNativeLoadWrapped);}
;this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);qx.bom.Event.addNativeListener(this._window,k,this._onNativeUnloadWrapped);}
,_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeLoadWrapped);}
;qx.bom.Event.removeNativeListener(this._window,k,this._onNativeUnloadWrapped);this._onNativeLoadWrapped=null;this._onNativeUnloadWrapped=null;}
,_onNativeLoad:function(){var C=qx.core.Environment.select(i,{"true":qx.event.GlobalError.observeMethod(this.__dP),"false":this.__dP});C.apply(this,arguments);}
,__dP:function(){this.__dK=true;this.__dO();}
,_onNativeUnload:function(){var D=qx.core.Environment.select(i,{"true":qx.event.GlobalError.observeMethod(this.__dQ),"false":this.__dQ});D.apply(this,arguments);}
,__dQ:function(){if(!this.__dN){this.__dN=true;try{qx.event.Registration.fireEvent(this._window,o);}
catch(e){throw e;}
;}
;}
},destruct:function(){this._stopObserver();this._window=null;}
,defer:function(E){qx.event.Registration.addHandler(E);}
});}
)();
(function(){var a="qx.core.BaseInit",b="engine.name",c="Main runtime: ",d="",f="qx.application",g="os.name",h="engine.version",i="Missing application class: ",j="Load runtime: ",k="ms",l="Could not detect engine!",m="Finalize runtime: ",n="Could not detect operating system!",o="Could not detect the version of the engine!";qx.Class.define(a,{statics:{__dR:null,getApplication:function(){return this.__dR||null;}
,ready:function(){if(this.__dR){return;}
;if(qx.core.Environment.get(b)==d){qx.log.Logger.warn(l);}
;if(qx.core.Environment.get(h)==d){qx.log.Logger.warn(o);}
;if(qx.core.Environment.get(g)==d){qx.log.Logger.warn(n);}
;qx.log.Logger.debug(this,j+(new Date-qx.Bootstrap.LOADSTART)+k);var q=qx.core.Environment.get(f);var r=qx.Class.getByName(q);if(r){this.__dR=new r;var p=new Date;this.__dR.main();qx.log.Logger.debug(this,c+(new Date-p)+k);var p=new Date;this.__dR.finalize();qx.log.Logger.debug(this,m+(new Date-p)+k);}
else {qx.log.Logger.warn(i+q);}
;}
,__dS:function(e){var s=this.__dR;if(s){s.close();}
;}
,__dT:function(){var t=this.__dR;if(t){t.terminate();}
;}
}});}
)();
(function(){var a="ready",b="shutdown",c="beforeunload",d="qx.core.Init";qx.Class.define(d,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__dS:function(e){var f=this.getApplication();if(f){e.setReturnValue(f.close());}
;}
,__dT:function(){var g=this.getApplication();if(g){g.terminate();}
;}
},defer:function(h){qx.event.Registration.addListener(window,a,h.ready,h);qx.event.Registration.addListener(window,b,h.__dT,h);qx.event.Registration.addListener(window,c,h.__dS,h);}
});}
)();
(function(){var a="qx.application.IApplication";qx.Interface.define(a,{members:{main:function(){}
,finalize:function(){}
,close:function(){}
,terminate:function(){}
}});}
)();
(function(){var a="qx.application.Native";qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){}
,finalize:function(){}
,close:function(){}
,terminate:function(){}
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
(function(){var a="_",b="qxWeb",c="*** Collection infos ***",d="toString",e="$",f="Instance:",g="classname",h="Method '",j="data-qx-class",k="Elements:",m="' already available.",n="Length:",o="number",p="basename",q="' already available as static method.",r="qx.debug",s="name";qx.Bootstrap.define(b,{extend:qx.type.BaseArray,statics:{__fh:[],$$qx:qx,$init:function(x,v){if(x.length&&x.length==1&&x[0]&&x[0].$widget instanceof qxWeb){return x[0].$widget;}
;var w=[];for(var i=0;i<x.length;i++ ){var u=!!(x[i]&&(x[i].nodeType===1||x[i].nodeType===9||x[i].nodeType===11));if(u){w.push(x[i]);continue;}
;var t=!!(x[i]&&x[i].history&&x[i].location&&x[i].document);if(t){w.push(x[i]);}
;}
;if(x[0]&&x[0].getAttribute&&x[0].getAttribute(j)&&w.length<2){v=qx.Bootstrap.getByName(x[0].getAttribute(j))||v;}
;var y=qx.lang.Array.cast(w,v);for(var i=0;i<qxWeb.__fh.length;i++ ){qxWeb.__fh[i].call(y);}
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
,$attachInit:function(G){this.__fh.push(G);}
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
else {var v=[];while(w||x){if(w){if(qx.lang.Array.contains(v,w)){return w;}
;v.push(w);w=w.parentNode;}
;if(x){if(qx.lang.Array.contains(v,x)){return x;}
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
(function(){var a="html.node.isequalnode",b="namespaceURI",c="nodeValue",d="nodeType",e="qx.module.Traversing",f="getNextSiblings",g="prefix",h="nodeName",k="getPreviousSiblings",n="getSiblings",o="localName",p="length",q="string";qx.Bootstrap.define(e,{statics:{EQUALITY_ATTRIBUTES:[d,h,o,b,g,c],__tx:function(s,t){var r=[];for(var i=0;i<this.length;i++ ){var parent=qx.dom.Element.getParentElement(this[i]);while(parent){var u=[parent];if(s&&qx.bom.Selector.matches(s,u).length>0){break;}
;if(t){u=qx.bom.Selector.matches(t,u);}
;r=r.concat(u);parent=qx.dom.Element.getParentElement(parent);}
;}
;return qxWeb.$init(r,qxWeb);}
,__ty:function(v){if(v instanceof qxWeb){return v[0];}
else if(qx.Bootstrap.isString(v)){return qxWeb(v)[0];}
;return v;}
,__tz:function(w){if(typeof w==q){w=qxWeb(w);}
;if(w instanceof Array||w instanceof qxWeb){w=w[0];}
;return qxWeb.isNode(w)?w:null;}
,__tA:function(x){var y={};for(var z in x.attributes){if(z==p){continue;}
;var name=x.attributes[z].name;var A=x.attributes[z].value;y[name]=A;}
;return y;}
,__tB:function(D,G,E){var B=[];var C=qx.dom.Hierarchy;for(var i=0,l=D.length;i<l;i++ ){B.push.apply(B,C[G](D[i]));}
;var F=qx.lang.Array.unique(B);if(E){F=qx.bom.Selector.matches(E,F);}
;return F;}
,isElement:function(H){return qx.dom.Node.isElement(qx.module.Traversing.__ty(H));}
,isNode:function(I){return qx.dom.Node.isNode(qx.module.Traversing.__ty(I));}
,isNodeName:function(K,J){return qx.dom.Node.isNodeName(qx.module.Traversing.__ty(K),J);}
,isDocument:function(L){if(L instanceof qxWeb){L=L[0];}
;return qx.dom.Node.isDocument(L);}
,isDocumentFragment:function(M){if(M instanceof qxWeb){M=M[0];}
;return qx.dom.Node.isDocumentFragment(M);}
,getWindow:function(N){return qx.dom.Node.getWindow(qx.module.Traversing.__ty(N));}
,isTextNode:function(O){return qx.dom.Node.isText(O);}
,isWindow:function(P){if(P instanceof qxWeb){P=P[0];}
;return qx.dom.Node.isWindow(P);}
,getDocument:function(Q){return qx.dom.Node.getDocument(qx.module.Traversing.__ty(Q));}
,getNodeName:function(R){return qx.dom.Node.getName(qx.module.Traversing.__ty(R));}
,getNodeText:function(S){return qx.dom.Node.getText(qx.module.Traversing.__ty(S));}
,isBlockNode:function(T){return qx.dom.Node.isBlockNode(qx.module.Traversing.__ty(T));}
,equalNodes:function(bd,bf){bd=qx.module.Traversing.__tz(bd);bf=qx.module.Traversing.__tz(bf);if(!bd||!bf){return false;}
;if(qx.core.Environment.get(a)){return bd.isEqualNode(bf);}
else {if(bd===bf){return true;}
;var bc=bd.attributes&&bf.attributes;if(bc&&bd.attributes.length!==bf.attributes.length){return false;}
;var bb=bd.childNodes&&bf.childNodes;if(bb&&bd.childNodes.length!==bf.childNodes.length){return false;}
;var ba=qx.module.Traversing.EQUALITY_ATTRIBUTES;for(var i=0,l=ba.length;i<l;i++ ){var Y=ba[i];if(bd[Y]!==bf[Y]){return false;}
;}
;if(bc){var U=qx.module.Traversing.__tA(bd);var be=qx.module.Traversing.__tA(bf);for(var W in U){if(U[W]!==be[W]){return false;}
;}
;}
;if(bb){for(var j=0,m=bd.childNodes.length;j<m;j++ ){var X=bd.childNodes[j];var V=bf.childNodes[j];if(!qx.module.Traversing.equalNodes(X,V)){return false;}
;}
;}
;return true;}
;}
},members:{__tx:null,add:function(bg){if(bg instanceof qxWeb){bg=bg[0];}
;if(qx.module.Traversing.isElement(bg)||qx.module.Traversing.isDocument(bg)||qx.module.Traversing.isWindow(bg)||qx.module.Traversing.isDocumentFragment(bg)){this.push(bg);}
;return this;}
,getChildren:function(bj){var bi=[];for(var i=0;i<this.length;i++ ){var bh=qx.dom.Hierarchy.getChildElements(this[i]);if(bj){bh=qx.bom.Selector.matches(bj,bh);}
;bi=bi.concat(bh);}
;return qxWeb.$init(bi,qxWeb);}
,forEach:function(bl,bk){for(var i=0;i<this.length;i++ ){bl.call(bk,this[i],i,this);}
;return this;}
,getParents:function(bo){var bn=[];for(var i=0;i<this.length;i++ ){var bm=qx.dom.Element.getParentElement(this[i]);if(bo){bm=qx.bom.Selector.matches(bo,[bm]);}
;bn=bn.concat(bm);}
;return qxWeb.$init(bn,qxWeb);}
,isChildOf:function(parent){if(this.length==0){return false;}
;var bp=null,bs=qxWeb(parent),bq=false;for(var i=0,l=this.length;i<l&&!bq;i++ ){bp=qxWeb(this[i]).getAncestors();for(var j=0,br=bs.length;j<br;j++ ){if(bp.indexOf(bs[j])!=-1){bq=true;break;}
;}
;}
;return bq;}
,getAncestors:function(bt){return this.__tx(null,bt);}
,getAncestorsUntil:function(bv,bu){return this.__tx(bv,bu);}
,getClosest:function(by){var bx=[];var bw=function(bz){var bA=qx.bom.Selector.matches(by,bz);if(bA.length){bx.push(bA[0]);}
else {bz=bz.getParents();if(bz[0]&&bz[0].parentNode){bw(bz);}
;}
;}
;for(var i=0;i<this.length;i++ ){bw(qxWeb(this[i]));}
;return qxWeb.$init(bx,qxWeb);}
,find:function(bC){var bB=[];for(var i=0;i<this.length;i++ ){bB=bB.concat(qx.bom.Selector.query(bC,this[i]));}
;return qxWeb.$init(bB,qxWeb);}
,getContents:function(){var bD=[];this._forEachElement(function(bE){bD=bD.concat(qx.lang.Array.fromCollection(bE.childNodes));}
);return qxWeb.$init(bD,qxWeb);}
,is:function(bF){if(qx.lang.Type.isFunction(bF)){return this.filter(bF).length>0;}
;return !!bF&&qx.bom.Selector.matches(bF,this).length>0;}
,eq:function(bG){return this.slice(bG,+bG+1);}
,getFirst:function(){return this.slice(0,1);}
,getLast:function(){return this.slice(this.length-1);}
,has:function(bI){var bH=[];this._forEachElement(function(bJ,bK){var bL=qx.bom.Selector.matches(bI,this.eq(bK).getContents());if(bL.length>0){bH.push(bJ);}
;}
);return qxWeb.$init(bH,this.constructor);}
,contains:function(bM){if(bM instanceof Array||bM instanceof qxWeb){bM=bM[0];}
;if(!bM){return qxWeb();}
;if(qx.dom.Node.isWindow(bM)){bM=bM.document;}
;return this.filter(function(bN){if(qx.dom.Node.isWindow(bN)){bN=bN.document;}
;return qx.dom.Hierarchy.contains(bN,bM);}
);}
,getNext:function(bP){var bO=this.map(qx.dom.Hierarchy.getNextElementSibling,qx.dom.Hierarchy);if(bP){bO=qxWeb.$init(qx.bom.Selector.matches(bP,bO),qxWeb);}
;return bO;}
,getNextAll:function(bR){var bQ=qx.module.Traversing.__tB(this,f,bR);return qxWeb.$init(bQ,qxWeb);}
,getNextUntil:function(bT){var bS=[];this.forEach(function(bW,bU){var bV=qx.dom.Hierarchy.getNextSiblings(bW);for(var i=0,l=bV.length;i<l;i++ ){if(qx.bom.Selector.matches(bT,[bV[i]]).length>0){break;}
;bS.push(bV[i]);}
;}
);return qxWeb.$init(bS,qxWeb);}
,getPrev:function(bY){var bX=this.map(qx.dom.Hierarchy.getPreviousElementSibling,qx.dom.Hierarchy);if(bY){bX=qxWeb.$init(qx.bom.Selector.matches(bY,bX),qxWeb);}
;return bX;}
,getPrevAll:function(cb){var ca=qx.module.Traversing.__tB(this,k,cb);return qxWeb.$init(ca,qxWeb);}
,getPrevUntil:function(cd){var cc=[];this.forEach(function(cg,ce){var cf=qx.dom.Hierarchy.getPreviousSiblings(cg);for(var i=0,l=cf.length;i<l;i++ ){if(qx.bom.Selector.matches(cd,[cf[i]]).length>0){break;}
;cc.push(cf[i]);}
;}
);return qxWeb.$init(cc,qxWeb);}
,getSiblings:function(ci){var ch=qx.module.Traversing.__tB(this,n,ci);return qxWeb.$init(ch,qxWeb);}
,not:function(ck){if(qx.lang.Type.isFunction(ck)){return this.filter(function(cl,cn,cm){return !ck(cl,cn,cm);}
);}
;var cj=qx.bom.Selector.matches(ck,this);return this.filter(function(co){return cj.indexOf(co)===-1;}
);}
,getOffsetParent:function(){return this.map(qx.bom.element.Location.getOffsetParent);}
,isRendered:function(){if(!this[0]){return false;}
;return qx.dom.Hierarchy.isRendered(this[0]);}
},defer:function(cp){qxWeb.$attachAll(this);qxWeb.$attach({"__tx":cp.__tx});}
});}
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
,__fI:{},getHelperElement:function(I){if(!I){I=window;}
;var J=I.location.href;if(!qx.dom.Element.__fI[J]){var K=qx.dom.Element.__fI[J]=I.document.createElement(g);if(qx.core.Environment.get(a)==e){K.style.display=c;I.document.body.appendChild(K);}
;}
;return qx.dom.Element.__fI[J];}
,create:function(name,M,L){if(!L){L=window;}
;if(!name){throw new Error(f);}
;var O=L.document.createElement(name);for(var N in M){qx.bom.element.Attribute.set(O,N,M[N]);}
;return O;}
,empty:function(P){return P.innerHTML=b;}
}});}
)();
(function(){var a="readOnly",b="data-",c="accessKey",d="qx.bom.element.Attribute",e="rowSpan",f="vAlign",g="className",h="textContent",i="'",j="htmlFor",k="longDesc",l="cellSpacing",m="frameBorder",n="='",o="",p="useMap",q="innerText",r="innerHTML",s="tabIndex",t="dateTime",u="maxLength",v="html.element.textcontent",w="mshtml",x="engine.name",y="cellPadding",z="browser.documentmode",A="colSpan",B="undefined";qx.Bootstrap.define(d,{statics:{__fJ:{names:{"class":g,"for":j,html:r,text:qx.core.Environment.get(v)?h:q,colspan:A,rowspan:e,valign:f,datetime:t,accesskey:c,tabindex:s,maxlength:u,readonly:a,longdesc:k,cellpadding:y,cellspacing:l,frameborder:m,usemap:p},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$element:1,$$elementObject:1,$$widget:1,$$widgetObject:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$widgetObject:1,$$element:1,$$elementObject:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:o,className:o,innerHTML:o,innerText:o,textContent:o,htmlFor:o,tabIndex:0,maxLength:qx.core.Environment.select(x,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1}},compile:function(C){var D=[];var F=this.__fJ.runtime;for(var E in C){if(!F[E]){D.push(E,n,C[E],i);}
;}
;return D.join(o);}
,get:function(I,name){var G=this.__fJ;var H;name=G.names[name]||name;if(G.property[name]){H=I[name];if(typeof G.propertyDefault[name]!==B&&H==G.propertyDefault[name]){if(typeof G.bools[name]===B){return null;}
else {return H;}
;}
;}
else {H=I.getAttribute(name);if(G.bools[name]&&!(qx.core.Environment.get(x)==w&&parseInt(qx.core.Environment.get(z),10)<=8)){return qx.Bootstrap.isString(H);}
;}
;if(G.bools[name]){return !!H;}
;return H;}
,set:function(L,name,K){if(typeof K===B){return;}
;var J=this.__fJ;name=J.names[name]||name;if(J.bools[name]&&!qx.lang.Type.isBoolean(K)){K=qx.lang.Type.isString(K);}
;if(J.property[name]&&(!(L[name]===undefined)||J.qxProperties[name])){if(K==null){if(J.removeableProperties[name]){L.removeAttribute(name);return;}
else if(typeof J.propertyDefault[name]!==B){K=J.propertyDefault[name];}
;}
;L[name]=K;}
else {if((J.bools[name]||K===null)&&name.indexOf(b)!==0){if(K===true){L.setAttribute(name,name);}
else if(K===false||K===null){L.removeAttribute(name);}
;}
else {L.setAttribute(name,K);}
;}
;}
,reset:function(M,name){if(name.indexOf(b)===0){M.removeAttribute(name);}
else {this.set(M,name,null);}
;}
}});}
)();
(function(){var a="borderBottomWidth",b="scroll",c="qx.bom.element.Location",d="gecko",e="paddingLeft",f="borderRightWidth",g="auto",h="static",i="borderTopWidth",j="borderLeftWidth",k="marginBottom",l="marginTop",m="overflowY",n="marginLeft",o="border-box",p="padding",q="paddingBottom",r="paddingTop",s="marginRight",t="browser.quirksmode",u="engine.name",v="position",w="margin",x="paddingRight",y="BODY",z="overflowX",A="border";qx.Bootstrap.define(c,{statics:{__eC:function(C,B){return qx.bom.element.Style.get(C,B,qx.bom.element.Style.COMPUTED_MODE,false);}
,__eD:function(E,D){return parseInt(qx.bom.element.Style.get(E,D,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;}
,__eE:function(G){var H=0,top=0;var F=qx.dom.Node.getWindow(G);H-=qx.bom.Viewport.getScrollLeft(F);top-=qx.bom.Viewport.getScrollTop(F);return {left:H,top:top};}
,__eF:qx.core.Environment.select(u,{"mshtml":function(K){var J=qx.dom.Node.getDocument(K);var I=J.body;var L=0;var top=0;L-=I.clientLeft+J.documentElement.clientLeft;top-=I.clientTop+J.documentElement.clientTop;if(!qx.core.Environment.get(t)){L+=this.__eD(I,j);top+=this.__eD(I,i);}
;return {left:L,top:top};}
,"webkit":function(O){var N=qx.dom.Node.getDocument(O);var M=N.body;var P=M.offsetLeft;var top=M.offsetTop;return {left:P,top:top};}
,"gecko":function(R){var Q=qx.dom.Node.getDocument(R).body;var S=Q.offsetLeft;var top=Q.offsetTop;if(qx.bom.element.BoxSizing.get(Q)!==o){S+=this.__eD(Q,j);top+=this.__eD(Q,i);}
;return {left:S,top:top};}
,"default":function(U){var T=qx.dom.Node.getDocument(U).body;var V=T.offsetLeft;var top=T.offsetTop;return {left:V,top:top};}
}),__eG:function(W){var X=W.getBoundingClientRect();return {left:Math.round(X.left),top:Math.round(X.top)};}
,get:function(bf,bg){if(bf.tagName==y){var location=this.__eH(bf);var bj=location.left;var top=location.top;}
else {var Y=this.__eF(bf);var bd=this.__eG(bf);var scroll=this.__eE(bf);var bj=bd.left+Y.left-scroll.left;var top=bd.top+Y.top-scroll.top;}
;var ba;var be;if(bf instanceof SVGElement){var bk=bf.getBoundingClientRect();ba=bk.width;be=bk.height;}
else {ba=bf.offsetWidth;be=bf.offsetHeight;}
;var bb=bj+ba;var bc=top+be;if(bg){if(bg==p||bg==b){var bi=qx.bom.element.Style.get(bf,z);if(bi==b||bi==g){bb+=bf.scrollWidth-ba+this.__eD(bf,j)+this.__eD(bf,f);}
;var bh=qx.bom.element.Style.get(bf,m);if(bh==b||bh==g){bc+=bf.scrollHeight-be+this.__eD(bf,i)+this.__eD(bf,a);}
;}
;switch(bg){case p:bj+=this.__eD(bf,e);top+=this.__eD(bf,r);bb-=this.__eD(bf,x);bc-=this.__eD(bf,q);case b:bj-=bf.scrollLeft;top-=bf.scrollTop;bb-=bf.scrollLeft;bc-=bf.scrollTop;case A:bj+=this.__eD(bf,j);top+=this.__eD(bf,i);bb-=this.__eD(bf,f);bc-=this.__eD(bf,a);break;case w:bj-=this.__eD(bf,n);top-=this.__eD(bf,l);bb+=this.__eD(bf,s);bc+=this.__eD(bf,k);break;};}
;return {left:bj,top:top,right:bb,bottom:bc};}
,__eH:function(bl){var top=bl.offsetTop;var bm=bl.offsetLeft;top+=this.__eD(bl,l);bm+=this.__eD(bl,n);if(qx.core.Environment.get(u)===d){top+=this.__eD(bl,j);bm+=this.__eD(bl,i);}
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
(function(){var a="cursor:",b="engine.name",c="",d="mshtml",e="nw-resize",f="engine.version",g="nesw-resize",h="browser.documentmode",i=";",j="nwse-resize",k="qx.bom.element.Cursor",l="ne-resize",m="browser.quirksmode",n="cursor";qx.Bootstrap.define(k,{statics:{__eI:{},compile:function(o){return a+(this.__eI[o]||o)+i;}
,get:function(q,p){return qx.bom.element.Style.get(q,n,p,false);}
,set:function(s,r){s.style.cursor=this.__eI[r]||r;}
,reset:function(t){t.style.cursor=c;}
},defer:function(u){if(qx.core.Environment.get(b)==d&&((parseFloat(qx.core.Environment.get(f))<9||qx.core.Environment.get(h)<9)&&!qx.core.Environment.get(m))){u.__eI[g]=l;u.__eI[j]=e;}
;}
});}
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
(function(){var a="This client does not support the boxSizing value",b="border-box",c="qx.bom.element.BoxSizing",d="css.boxsizing",e="",f="This client does not support dynamic modification of the boxSizing property.",g="qx.debug",h="boxSizing",i="content-box",j=":",k=";";qx.Bootstrap.define(c,{statics:{__eJ:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__eK:function(m){var l=this.__eJ;return l.tags[m.tagName.toLowerCase()]||l.types[m.type];}
,compile:function(n){if(qx.core.Environment.get(d)){var o=qx.bom.Style.getCssName(qx.core.Environment.get(d));return o+j+n+k;}
else {if(qx.core.Environment.get(g)){qx.log.Logger.warn(this,f);qx.log.Logger.trace();}
;}
;}
,get:function(p){if(qx.core.Environment.get(d)){return qx.bom.element.Style.get(p,h,null,false)||e;}
;if(qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(p))){if(!this.__eK(p)){return i;}
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
(function(){var a="css.float",b="foo",c="css.borderimage.standardsyntax",d="detect",e="borderRadius",f="boxSizing",g="stretch",h="css.borderradius",j="content",k="css.inlineblock",l="css.gradient.filter",m="css.appearance",n="css.opacity",o="div",p="pointerEvents",q="css.gradient.radial",r="css.pointerevents",s="input",t="color",u="string",v="borderImage",w="userSelect",x="styleFloat",y="css.textShadow.filter",z="css.usermodify",A="flexbox",B='url("foo.png") 4 4 4 4 fill stretch',C="css.boxmodel",D="qx.bom.client.Css",E="css.boxshadow",F="appearance",G="-ms-flexbox",H="placeholder",I="-moz-none",J="backgroundImage",K="css.textShadow",L="DXImageTransform.Microsoft.Shadow",M="flex",N="css.alphaimageloaderneeded",O="css.gradient.legacywebkit",P="css.flexboxSyntax",Q="linear-gradient(0deg, #fff, #000)",R="textShadow",S="auto",T="css.borderimage",U="foo.png",V="rgba(1, 2, 3, 0.5)",W="color=#666666,direction=45",X="radial-gradient(0px 0px, cover, red 50%, blue 100%)",Y="rgba",bG="(",bH="-webkit-flex",bI='url("foo.png") 4 4 4 4 stretch',bC="css.gradient.linear",bD="DXImageTransform.Microsoft.Gradient",bE="css.userselect",bF="span",bM="css.boxsizing",bN="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",bO="mshtml",ca="css.rgba",bJ=");",bK="4 fill",bL="none",bA="startColorStr=#550000FF, endColorStr=#55FFFF00",bR="progid:",bB="css.placeholder",bS="css.userselect.none",bT="css.textoverflow",bX="inline-block",bP="-moz-inline-box",bY="textOverflow",bQ="userModify",bU="boxShadow",bV="cssFloat",bW="border";qx.Bootstrap.define(D,{statics:{__eL:null,getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==bO||!qx.bom.client.Browser.getQuirksMode();return content?j:bW;}
,getTextOverflow:function(){return qx.bom.Style.getPropertyName(bY);}
,getPlaceholder:function(){var i=document.createElement(s);return H in i;}
,getAppearance:function(){return qx.bom.Style.getPropertyName(F);}
,getBorderRadius:function(){return qx.bom.Style.getPropertyName(e);}
,getBoxShadow:function(){return qx.bom.Style.getPropertyName(bU);}
,getBorderImage:function(){return qx.bom.Style.getPropertyName(v);}
,getBorderImageSyntax:function(){var cc=qx.bom.client.Css.getBorderImage();if(!cc){return null;}
;var cb=document.createElement(o);if(cc===v){cb.style[cc]=B;if(cb.style.borderImageSource.indexOf(U)>=0&&cb.style.borderImageSlice.indexOf(bK)>=0&&cb.style.borderImageRepeat.indexOf(g)>=0){return true;}
;}
else {cb.style[cc]=bI;if(cb.style[cc].indexOf(U)>=0){return false;}
;}
;return null;}
,getUserSelect:function(){return qx.bom.Style.getPropertyName(w);}
,getUserSelectNone:function(){var ce=qx.bom.client.Css.getUserSelect();if(ce){var cd=document.createElement(bF);cd.style[ce]=I;return cd.style[ce]===I?I:bL;}
;return null;}
,getUserModify:function(){return qx.bom.Style.getPropertyName(bQ);}
,getFloat:function(){var cf=document.documentElement.style;return cf.cssFloat!==undefined?bV:cf.styleFloat!==undefined?x:null;}
,getLinearGradient:function(){qx.bom.client.Css.__eL=false;var cj=Q;var cg=document.createElement(o);var ch=qx.bom.Style.getAppliedStyle(cg,J,cj);if(!ch){cj=bN;var ch=qx.bom.Style.getAppliedStyle(cg,J,cj,false);if(ch){qx.bom.client.Css.__eL=true;}
;}
;if(!ch){return null;}
;var ci=/(.*?)\(/.exec(ch);return ci?ci[1]:null;}
,getFilterGradient:function(){return qx.bom.client.Css.__eM(bD,bA);}
,getRadialGradient:function(){var cn=X;var ck=document.createElement(o);var cl=qx.bom.Style.getAppliedStyle(ck,J,cn);if(!cl){return null;}
;var cm=/(.*?)\(/.exec(cl);return cm?cm[1]:null;}
,getLegacyWebkitGradient:function(){if(qx.bom.client.Css.__eL===null){qx.bom.client.Css.getLinearGradient();}
;return qx.bom.client.Css.__eL;}
,getRgba:function(){var co;try{co=document.createElement(o);}
catch(cp){co=document.createElement();}
;try{co.style[t]=V;if(co.style[t].indexOf(Y)!=-1){return true;}
;}
catch(cq){}
;return false;}
,getBoxSizing:function(){return qx.bom.Style.getPropertyName(f);}
,getInlineBlock:function(){var cr=document.createElement(bF);cr.style.display=bX;if(cr.style.display==bX){return bX;}
;cr.style.display=bP;if(cr.style.display!==bP){return bP;}
;return null;}
,getOpacity:function(){return (typeof document.documentElement.style.opacity==u);}
,getTextShadow:function(){return !!qx.bom.Style.getPropertyName(R);}
,getFilterTextShadow:function(){return qx.bom.client.Css.__eM(L,W);}
,__eM:function(cv,ct){var cu=false;var cw=bR+cv+bG+ct+bJ;var cs=document.createElement(o);document.body.appendChild(cs);cs.style.filter=cw;if(cs.filters&&cs.filters.length>0&&cs.filters.item(cv).enabled==true){cu=true;}
;document.body.removeChild(cs);return cu;}
,getAlphaImageLoaderNeeded:function(){return qx.bom.client.Engine.getName()==bO&&qx.bom.client.Browser.getDocumentMode()<9;}
,getPointerEvents:function(){var cx=document.documentElement;if(p in cx.style){var cz=cx.style.pointerEvents;cx.style.pointerEvents=S;cx.style.pointerEvents=b;var cy=cx.style.pointerEvents==S;cx.style.pointerEvents=cz;return cy;}
;return false;}
,getFlexboxSyntax:function(){var cB=null;var cA=document.createElement(d);var cC=[{value:M,syntax:M},{value:G,syntax:A},{value:bH,syntax:M}];for(var i=0;i<cC.length;i++ ){try{cA.style.display=cC[i].value;}
catch(cD){return null;}
;if(cA.style.display===cC[i].value){cB=cC[i].syntax;break;}
;}
;cA=null;return cB;}
},defer:function(cE){qx.core.Environment.add(bT,cE.getTextOverflow);qx.core.Environment.add(bB,cE.getPlaceholder);qx.core.Environment.add(h,cE.getBorderRadius);qx.core.Environment.add(E,cE.getBoxShadow);qx.core.Environment.add(bC,cE.getLinearGradient);qx.core.Environment.add(l,cE.getFilterGradient);qx.core.Environment.add(q,cE.getRadialGradient);qx.core.Environment.add(O,cE.getLegacyWebkitGradient);qx.core.Environment.add(C,cE.getBoxModel);qx.core.Environment.add(ca,cE.getRgba);qx.core.Environment.add(T,cE.getBorderImage);qx.core.Environment.add(c,cE.getBorderImageSyntax);qx.core.Environment.add(z,cE.getUserModify);qx.core.Environment.add(bE,cE.getUserSelect);qx.core.Environment.add(bS,cE.getUserSelectNone);qx.core.Environment.add(m,cE.getAppearance);qx.core.Environment.add(a,cE.getFloat);qx.core.Environment.add(bM,cE.getBoxSizing);qx.core.Environment.add(k,cE.getInlineBlock);qx.core.Environment.add(n,cE.getOpacity);qx.core.Environment.add(K,cE.getTextShadow);qx.core.Environment.add(y,cE.getFilterTextShadow);qx.core.Environment.add(N,cE.getAlphaImageLoaderNeeded);qx.core.Environment.add(r,cE.getPointerEvents);qx.core.Environment.add(P,cE.getFlexboxSyntax);}
});}
)();
(function(){var a="css.float",b='cssFloat',c="px",d="Cascaded styles are not supported in this browser!",e="css.appearance",f="pixelRight",g="css.userselect",h="css.boxsizing",i="css.textoverflow",j="qx.debug",k="pixelHeight",l=":",m="pixelTop",n="css.borderimage",o="Invalid argument 'name'",p="pixelLeft",q="css.usermodify",r="qx.bom.element.Style",s="Invalid argument 'smart'",t="",u="pixelBottom",v="Invalid argument 'styles'",w="pixelWidth",x='float',y=";",z="\"\"",A="Invalid argument 'element'",B="style";qx.Bootstrap.define(r,{statics:{__eN:null,__eO:null,__eP:function(){var D={"appearance":qx.core.Environment.get(e),"userSelect":qx.core.Environment.get(g),"textOverflow":qx.core.Environment.get(i),"borderImage":qx.core.Environment.get(n),"float":qx.core.Environment.get(a),"userModify":qx.core.Environment.get(q),"boxSizing":qx.core.Environment.get(h)};this.__eO={};for(var C in qx.lang.Object.clone(D)){if(!D[C]){delete D[C];}
else {if(C===x){this.__eO[b]=C;}
else {this.__eO[C]=qx.bom.Style.getCssName(D[C]);}
;}
;}
;this.__eN=D;}
,__eQ:function(name){var E=qx.bom.Style.getPropertyName(name);if(E){this.__eN[name]=E;}
;return E;}
,__eR:{width:w,height:k,left:p,right:f,top:m,bottom:u},__eS:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing},compile:function(F){var I=[];var J=this.__eS;var H=this.__eO;var name,G;for(name in F){G=F[name];if(G==null){continue;}
;name=this.__eO[name]||name;if(J[name]){I.push(J[name].compile(G));}
else {if(!H[name]){H[name]=qx.bom.Style.getCssName(name);}
;I.push(H[name],l,G===t?z:G,y);}
;}
;return I.join(t);}
,setCss:function(L,K){L.setAttribute(B,K);}
,getCss:function(M){return M.getAttribute(B);}
,isPropertySupported:function(N){return (this.__eS[N]||this.__eN[N]||N in document.documentElement.style);}
,COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(Q,name,P,O){if(qx.core.Environment.get(j)){qx.core.Assert.assertElement(Q,A);qx.core.Assert.assertString(name,o);if(O!==undefined){qx.core.Assert.assertBoolean(O,s);}
;}
;name=this.__eN[name]||this.__eQ(name)||name;if(O!==false&&this.__eS[name]){this.__eS[name].set(Q,P);}
else {Q.style[name]=P!==null?P:t;}
;}
,setStyles:function(X,R,V){if(qx.core.Environment.get(j)){qx.core.Assert.assertElement(X,A);qx.core.Assert.assertMap(R,v);if(V!==undefined){qx.core.Assert.assertBoolean(V,s);}
;}
;var U=this.__eN;var Y=this.__eS;var S=X.style;for(var W in R){var T=R[W];var name=U[W]||this.__eQ(W)||W;if(T===undefined){if(V!==false&&Y[name]){Y[name].reset(X);}
else {S[name]=t;}
;}
else {if(V!==false&&Y[name]){Y[name].set(X,T);}
else {S[name]=T!==null?T:t;}
;}
;}
;}
,reset:function(bb,name,ba){name=this.__eN[name]||this.__eQ(name)||name;if(ba!==false&&this.__eS[name]){this.__eS[name].reset(bb);}
else {bb.style[name]=t;}
;}
,get:function(bf,name,bh,bj){name=this.__eN[name]||this.__eQ(name)||name;if(bj!==false&&this.__eS[name]){return this.__eS[name].get(bf,bh);}
;switch(bh){case this.LOCAL_MODE:return bf.style[name]||t;case this.CASCADED_MODE:if(bf.currentStyle){return bf.currentStyle[name]||t;}
;throw new Error(d);default:var bd=qx.dom.Node.getDocument(bf);var bg=bd.defaultView?bd.defaultView.getComputedStyle:undefined;if(bg!==undefined){var bc=bg(bf,null);if(bc&&bc[name]){return bc[name];}
;}
else {if(!bf.currentStyle){return bf.style[name]||t;}
;var bl=bf.currentStyle[name]||bf.style[name]||t;if(/^-?[\.\d]+(px)?$/i.test(bl)){return bl;}
;var bk=this.__eR[name];if(bk&&(bk in bf.style)){var bi=bf.style[name];bf.style[name]=bl||0;var be=bf.style[bk]+c;bf.style[name]=bi;return be;}
;return bl;}
;return bf.style[name]||t;};}
},defer:function(bm){bm.__eP();}
});}
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
(function(){var a="ios",b="os.name",c="undefined",d="qx.bom.Viewport";qx.Bootstrap.define(d,{statics:{getWidth:function(e){var e=e||window;var f=e.document;return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;}
,getHeight:function(g){var g=g||window;var h=g.document;if(qx.core.Environment.get(b)==a&&window.innerHeight!=h.documentElement.clientHeight){return window.innerHeight;}
;return qx.bom.Document.isStandardMode(g)?h.documentElement.clientHeight:h.body.clientHeight;}
,getScrollLeft:function(i){var i=i?i:window;if(typeof i.pageXOffset!==c){return i.pageXOffset;}
;var j=i.document;return j.documentElement.scrollLeft||j.body.scrollLeft;}
,getScrollTop:function(k){var k=k?k:window;if(typeof k.pageYOffset!==c){return k.pageYOffset;}
;var l=k.document;return l.documentElement.scrollTop||l.body.scrollTop;}
,__eT:function(m){var o=this.getWidth(m)>this.getHeight(m)?90:0;var n=m.orientation;if(n==null||Math.abs(n%180)==o){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};}
else {return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};}
;}
,__eU:null,getOrientation:function(p){var p=p||window.top;var q=p.orientation;if(q==null){q=this.getWidth(p)>this.getHeight(p)?90:0;}
else {if(this.__eU==null){this.__eU=this.__eT(p);}
;q=this.__eU[q];}
;return q;}
,isLandscape:function(r){var s=this.getOrientation(r);return s===-90||s===90;}
,isPortrait:function(t){var u=this.getOrientation(t);return u===0||u===180;}
}});}
)();
(function(){var a="qx.module.Polyfill";qx.Bootstrap.define(a,{});}
)();
(function(){var a="scrollLeft",b="qx.module.Manipulating",c="ease-in",d="scrollTop";qx.Bootstrap.define(b,{statics:{_animationDescription:{scrollLeft:{duration:700,timing:c,keep:100,keyFrames:{'0':{},'100':{scrollLeft:1}}},scrollTop:{duration:700,timing:c,keep:100,keyFrames:{'0':{},'100':{scrollTop:1}}}},__tC:function(f,g,e){var h=qx.lang.Object.clone(qx.module.Manipulating._animationDescription[f],true);h.keyFrames[100][f]=g;return this.animate(h,e);}
,__tD:function(o){var k;if(qx.lang.Type.isArray(o)){k=qxWeb(o);}
else {var n=qx.bom.Html.clean([o]);if(n.length>0&&qx.dom.Node.isElement(n[0])){k=qxWeb(n);}
else {k=qxWeb(o);}
;}
;return k;}
,__tE:function(p){if(p.childNodes.length==0){return p;}
;for(var i=0,l=p.childNodes.length;i<l;i++ ){if(p.childNodes[i].nodeType===1){return this.__tE(p.childNodes[i]);}
;}
;return p;}
,__tF:function(r){if(!qx.lang.Type.isArray(r)){var q=qxWeb(r);r=q.length>0?q:[r];}
;return r.filter(function(s){return (s&&(s.nodeType===1||s.nodeType===11));}
);}
,create:function(t,u){return qxWeb.$init(qx.bom.Html.clean([t],u),qxWeb);}
},members:{clone:function(w){var v=[];for(var i=0;i<this.length;i++ ){if(this[i]&&this[i].nodeType===1){v[i]=this[i].cloneNode(true);}
;}
;if(w===true&&this.copyEventsTo){this.copyEventsTo(v);}
;return qxWeb(v);}
,append:function(y){var x=qx.bom.Html.clean([y]);var z=qxWeb.$init(x,qxWeb);this._forEachElement(function(A,B){for(var j=0,m=z.length;j<m;j++ ){if(B==0){qx.dom.Element.insertEnd(z[j],A);}
else {qx.dom.Element.insertEnd(z.eq(j).clone(true)[0],A);}
;}
;}
);return this;}
,appendTo:function(parent){parent=qx.module.Manipulating.__tF(parent);for(var i=0,l=parent.length;i<l;i++ ){this._forEachElement(function(C,j){if(i==0){qx.dom.Element.insertEnd(this[j],parent[i]);}
else {qx.dom.Element.insertEnd(this.eq(j).clone(true)[0],parent[i]);}
;}
);}
;return this;}
,insertBefore:function(D){D=qx.module.Manipulating.__tF(D);for(var i=0,l=D.length;i<l;i++ ){this._forEachElement(function(E,F){if(i==0){qx.dom.Element.insertBefore(E,D[i]);}
else {qx.dom.Element.insertBefore(this.eq(F).clone(true)[0],D[i]);}
;}
);}
;return this;}
,insertAfter:function(G){G=qx.module.Manipulating.__tF(G);for(var i=0,l=G.length;i<l;i++ ){for(var j=this.length-1;j>=0;j-- ){if(!this[j]||this[j].nodeType!==1){continue;}
;if(i==0){qx.dom.Element.insertAfter(this[j],G[i]);}
else {qx.dom.Element.insertAfter(this.eq(j).clone(true)[0],G[i]);}
;}
;}
;return this;}
,wrap:function(H){H=qx.module.Manipulating.__tD(H);if(H.length==0){return this;}
;this._forEachElement(function(I){var J=H.eq(0).clone(true);qx.dom.Element.insertAfter(J[0],I);var K=qx.module.Manipulating.__tE(J[0]);qx.dom.Element.insertEnd(I,K);}
);return this;}
,remove:function(){this._forEachElement(function(L){qx.dom.Element.remove(L);}
);return this;}
,empty:function(){this._forEachElement(function(M){while(M.firstChild){M.removeChild(M.firstChild);}
;}
);return this;}
,before:function(content){if(!qx.lang.Type.isArray(content)){content=[content];}
;var N=document.createDocumentFragment();qx.bom.Html.clean(content,document,N);this._forEachElement(function(Q,O){var P=qx.lang.Array.cast(N.childNodes,Array);for(var i=0,l=P.length;i<l;i++ ){var R;if(O<this.length-1){R=P[i].cloneNode(true);}
else {R=P[i];}
;Q.parentNode.insertBefore(R,Q);}
;}
,this);return this;}
,after:function(content){if(!qx.lang.Type.isArray(content)){content=[content];}
;var S=document.createDocumentFragment();qx.bom.Html.clean(content,document,S);this._forEachElement(function(W,T){var V=qx.lang.Array.cast(S.childNodes,Array);for(var i=V.length-1;i>=0;i-- ){var U;if(T<this.length-1){U=V[i].cloneNode(true);}
else {U=V[i];}
;W.parentNode.insertBefore(U,W.nextSibling);}
;}
,this);return this;}
,getScrollLeft:function(){var X=this[0];if(!X){return null;}
;var Node=qx.dom.Node;if(Node.isWindow(X)||Node.isDocument(X)){return qx.bom.Viewport.getScrollLeft();}
;return X.scrollLeft;}
,getScrollTop:function(){var Y=this[0];if(!Y){return null;}
;var Node=qx.dom.Node;if(Node.isWindow(Y)||Node.isDocument(Y)){return qx.bom.Viewport.getScrollTop();}
;return Y.scrollTop;}
,setScrollLeft:function(bb,bc){var Node=qx.dom.Node;if(bc&&qx.bom.element&&qx.bom.element.AnimationJs){qx.module.Manipulating.__tC.bind(this,a,bb,bc)();}
;for(var i=0,l=this.length,ba;i<l;i++ ){ba=this[i];if(Node.isElement(ba)){if(!(bc&&qx.bom.element&&qx.bom.element.AnimationJs)){ba.scrollLeft=bb;}
;}
else if(Node.isWindow(ba)){ba.scrollTo(bb,this.getScrollTop(ba));}
else if(Node.isDocument(ba)){Node.getWindow(ba).scrollTo(bb,this.getScrollTop(ba));}
;}
;return this;}
,setScrollTop:function(be,bf){var Node=qx.dom.Node;if(bf&&qx.bom.element&&qx.bom.element.AnimationJs){qx.module.Manipulating.__tC.bind(this,d,be,bf)();}
;for(var i=0,l=this.length,bd;i<l;i++ ){bd=this[i];if(Node.isElement(bd)){if(!(bf&&qx.bom.element&&qx.bom.element.AnimationJs)){bd.scrollTop=be;}
;}
else if(Node.isWindow(bd)){bd.scrollTo(this.getScrollLeft(bd),be);}
else if(Node.isDocument(bd)){Node.getWindow(bd).scrollTo(this.getScrollLeft(bd),be);}
;}
;return this;}
,focus:function(){try{this[0].focus();}
catch(bg){}
;return this;}
,blur:function(){this.forEach(function(bh,bi){try{bh.blur();}
catch(bj){}
;}
);return this;}
},defer:function(bk){qxWeb.$attachAll(this);}
});}
)();
(function(){var a="<fieldset>",b="<select multiple='multiple'>",c="</div>",d="</select>",e="</tr></tbody></table>",f="<col",g="div",h="<table><tbody><tr>",k="string",m=">",n="script",o="<table><tbody></tbody><colgroup>",p="<th",q="</tbody></table>",r="<td",s="</colgroup></table>",t="<opt",u="text/javascript",v="",w="<table>",x="</fieldset>",y="<table><tbody>",z="div<div>",A="<table",B="mshtml",C="engine.name",D="qx.bom.Html",E="<leg",F="tbody",G="<tr",H="</table>",I="undefined",J="></";qx.Bootstrap.define(D,{statics:{__tG:function(L,K,M){return M.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?L:K+J+M+m;}
,__tH:{opt:[1,b,d],leg:[1,a,x],table:[1,w,H],tr:[2,y,q],td:[3,h,e],col:[2,o,s],def:qx.core.Environment.select(C,{"mshtml":[1,z,c],"default":null})},fixEmptyTags:function(N){return N.replace(/(<(\w+)[^>]*?)\/>/g,this.__tG);}
,__tI:function(S,T){var V=T.createElement(g);S=qx.bom.Html.fixEmptyTags(S);var P=S.replace(/^\s+/,v).substring(0,5).toLowerCase();var U,O=this.__tH;if(!P.indexOf(t)){U=O.opt;}
else if(!P.indexOf(E)){U=O.leg;}
else if(P.match(/^<(thead|tbody|tfoot|colg|cap)/)){U=O.table;}
else if(!P.indexOf(G)){U=O.tr;}
else if(!P.indexOf(r)||!P.indexOf(p)){U=O.td;}
else if(!P.indexOf(f)){U=O.col;}
else {U=O.def;}
;if(U){V.innerHTML=U[1]+S+U[2];var R=U[0];while(R-- ){V=V.lastChild;}
;}
else {V.innerHTML=S;}
;if((qx.core.Environment.get(C)==B)){var W=/<tbody/i.test(S);var Q=!P.indexOf(A)&&!W?V.firstChild&&V.firstChild.childNodes:U[1]==w&&!W?V.childNodes:[];for(var j=Q.length-1;j>=0; --j){if(Q[j].tagName.toLowerCase()===F&&!Q[j].childNodes.length){Q[j].parentNode.removeChild(Q[j]);}
;}
;if(/^\s/.test(S)){V.insertBefore(T.createTextNode(S.match(/^\s*/)[0]),V.firstChild);}
;}
;return qx.lang.Array.fromCollection(V.childNodes);}
,clean:function(X,bc,ba){bc=bc||document;if(typeof bc.createElement===I){bc=bc.ownerDocument||bc[0]&&bc[0].ownerDocument||document;}
;if(!ba&&X.length===1&&typeof X[0]===k){var bd=/^<(\w+)\s*\/?>$/.exec(X[0]);if(bd){return [bc.createElement(bd[1])];}
;}
;var Y,bb=[];for(var i=0,l=X.length;i<l;i++ ){Y=X[i];if(typeof Y===k){Y=this.__tI(Y,bc);}
;if(Y.nodeType){bb.push(Y);}
else if(Y instanceof qx.type.BaseArray||(typeof qxWeb!==I&&Y instanceof qxWeb)){bb.push.apply(bb,Array.prototype.slice.call(Y,0));}
else if(Y.toElement){bb.push(Y.toElement());}
else {bb.push.apply(bb,Y);}
;}
;if(ba){return qx.bom.Html.extractScripts(bb,ba);}
;return bb;}
,extractScripts:function(bh,bf){var bi=[],bg;for(var i=0;bh[i];i++ ){bg=bh[i];if(bg.nodeType==1&&bg.tagName.toLowerCase()===n&&(!bg.type||bg.type.toLowerCase()===u)){if(bg.parentNode){bg.parentNode.removeChild(bh[i]);}
;bi.push(bg);}
else {if(bg.nodeType===1){var be=qx.lang.Array.fromCollection(bg.getElementsByTagName(n));bh.splice.apply(bh,[i+1,0].concat(be));}
;if(bf){bf.appendChild(bg);}
;}
;}
;return bi;}
}});}
)();
(function(){var a="foo",b="function",c="event.mouseevent",d="UIEvents",f="qx.bom.client.Event",g="event.dispatchevent",h="event.auxclick",j="event.mousecreateevent",k="mousewheel",l="event.touch",m="onhelp",n="event.help",o="event.hashchange",p="PointerEvent",q="pointerEnabled",r="event.customevent",s="onauxclick",t="click",u="documentMode",v="ontouchstart",w="mshtml",x="MouseEvents",y="onhashchange",z="event.mousewheel",A="wheel",B="DOMMouseScroll",C="msPointerEnabled",D="event.mspointer";qx.Bootstrap.define(f,{statics:{getTouch:function(){return (v in window);}
,getMsPointer:function(){if(p in window){return true;}
;if(q in window.navigator){return window.navigator.pointerEnabled;}
else if(C in window.navigator){return window.navigator.msPointerEnabled;}
;return false;}
,getHelp:function(){return (m in document);}
,getHashChange:function(){var E=qx.bom.client.Engine.getName();var F=y in window;return (E!==w&&F)||(E===w&&u in document&&document.documentMode>=8&&F);}
,getDispatchEvent:function(){return typeof document.dispatchEvent==b;}
,getCustomEvent:function(){if(!window.CustomEvent){return false;}
;try{new window.CustomEvent(a);return true;}
catch(G){return false;}
;}
,getMouseEvent:function(){if(!window.MouseEvent){return false;}
;try{new window.MouseEvent(a);return true;}
catch(H){return false;}
;}
,getMouseCreateEvent:function(){try{var e=document.createEvent(x);var I=e.pageX;e.initMouseEvent(t,false,false,window,0,0,0,I+1,0,false,false,false,false,0,null);if(e.pageX!==I){return x;}
;return d;}
catch(J){return d;}
;}
,getMouseWheel:function(K){if(!K){K=window;}
;var N=[K,K.document,K.document.body];var M=K;var L=B;for(var i=0;i<N.length;i++ ){if(qx.bom.Event.supportsEvent(N[i],A)){L=A;M=N[i];break;}
;if(qx.bom.Event.supportsEvent(N[i],k)){L=k;M=N[i];break;}
;}
;return {type:L,target:M};}
,getAuxclickEvent:function(){var O=false;try{O=(s in document.documentElement);}
catch(P){}
;return (O?true:false);}
},defer:function(Q){qx.core.Environment.add(l,Q.getTouch);qx.core.Environment.add(c,Q.getMouseEvent);qx.core.Environment.add(j,Q.getMouseCreateEvent);qx.core.Environment.add(g,Q.getDispatchEvent);qx.core.Environment.add(r,Q.getCustomEvent);qx.core.Environment.add(D,Q.getMsPointer);qx.core.Environment.add(n,Q.getHelp);qx.core.Environment.add(o,Q.getHashChange);qx.core.Environment.add(z,Q.getMouseWheel);qx.core.Environment.add(h,Q.getAuxclickEvent);}
});}
)();
(function(){var a="ipod",b="pc",c="ps3",d=")",e="device.type",f="psp",g="wii",h="xbox",i="\.",j="iemobile",k="ipad",l="ds",m="(",n="mobile",o="tablet",p="ontouchstart",q="g",r="iphone",s="|",t="qx.bom.client.Device",u="desktop",v="device.name",w="device.touch",x="undefined",y="device.pixelRatio";qx.Bootstrap.define(t,{statics:{__bW:{"Windows Phone":j,"iPod":a,"iPad":k,"iPhone":r,"PSP":f,"PLAYSTATION 3":c,"Nintendo Wii":g,"Nintendo DS":l,"XBOX":h,"Xbox":h},getName:function(){var B=[];for(var A in qx.bom.client.Device.__bW){B.push(A);}
;var C=new RegExp(m+B.join(s).replace(/\./g,i)+d,q);var z=C.exec(navigator.userAgent);if(z&&z[1]){return qx.bom.client.Device.__bW[z[1]];}
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
(function(){var a="engine.name",b="event.mspointer",c="device.type",d="env",e="engine.version",f="qx.module.Environment",g="browser.version",h="event.touch",i="device.name",j="browser.quirksmode",k="browser.name",l="browser.documentmode";qx.Bootstrap.define(f,{statics:{get:function(m){return qx.core.Environment.get(m);}
,add:function(n,o){qx.core.Environment.add(n,o);return this;}
},defer:function(p){qx.core.Environment.get(k);qx.core.Environment.get(g);qx.core.Environment.get(j);qx.core.Environment.get(l);qx.core.Environment.get(a);qx.core.Environment.get(e);qx.core.Environment.get(i);qx.core.Environment.get(c);qx.core.Environment.get(h);qx.core.Environment.get(b);qxWeb.$attachAll(this,d);}
});}
)();
(function(){var a="mshtml",b="engine.name",c="complete",d="Array",f="pointerout",g="pointerover",h="string",n="load",o="left",p="qx.module.Event",q="undefined",r="DOMContentLoaded",s="browser.documentmode",t="*";qx.Bootstrap.define(p,{statics:{__fi:{},__fj:{on:{},off:{}},__dM:false,ready:function(u){if(document.readyState===c){window.setTimeout(u,1);return;}
;var v=function(){qx.module.Event.__dM=true;u();}
;qxWeb(window).on(n,v);var w=function(){qxWeb(window).off(n,v);u();}
;if(qxWeb.env.get(b)!==a||qxWeb.env.get(s)>8){qx.bom.Event.addNativeListener(document,r,w);}
else {var z=function(){if(qx.module.Event.__dM){return;}
;try{document.documentElement.doScroll(o);if(document.body){w();}
;}
catch(A){window.setTimeout(z,100);}
;}
;z();}
;}
,$registerEventNormalization:function(E,B){if(!qx.lang.Type.isArray(E)){E=[E];}
;var C=qx.module.Event.__fi;for(var i=0,l=E.length;i<l;i++ ){var D=E[i];if(qx.lang.Type.isFunction(B)){if(!C[D]){C[D]=[];}
;C[D].push(B);}
;}
;}
,$unregisterEventNormalization:function(I,F){if(!qx.lang.Type.isArray(I)){I=[I];}
;var G=qx.module.Event.__fi;for(var i=0,l=I.length;i<l;i++ ){var H=I[i];if(G[H]){qx.lang.Array.remove(G[H],F);}
;}
;}
,$getEventNormalizationRegistry:function(){return qx.module.Event.__fi;}
,$registerEventHook:function(O,L,K){if(!qx.lang.Type.isArray(O)){O=[O];}
;var M=qx.module.Event.__fj.on;for(var i=0,l=O.length;i<l;i++ ){var N=O[i];if(qx.lang.Type.isFunction(L)){if(!M[N]){M[N]=[];}
;M[N].push(L);}
;}
;if(!K){return;}
;var J=qx.module.Event.__fj.off;for(var i=0,l=O.length;i<l;i++ ){var N=O[i];if(qx.lang.Type.isFunction(K)){if(!J[N]){J[N]=[];}
;J[N].push(K);}
;}
;}
,$unregisterEventHook:function(U,R,Q){if(!qx.lang.Type.isArray(U)){U=[U];}
;var S=qx.module.Event.__fj.on;for(var i=0,l=U.length;i<l;i++ ){var T=U[i];if(S[T]){qx.lang.Array.remove(S[T],R);}
;}
;if(!Q){return;}
;var P=qx.module.Event.__fj.off;for(var i=0,l=U.length;i<l;i++ ){var T=U[i];if(P[T]){qx.lang.Array.remove(P[T],Q);}
;}
;}
,$getEventHookRegistry:function(){return qx.module.Event.__fj;}
},members:{on:function(bd,bb,bc,W){for(var i=0;i<this.length;i++ ){var V=this[i];var Y=bc||qxWeb(V);var X=qx.module.Event.__fj.on;var be=X[t]||[];if(X[bd]){be=be.concat(X[bd]);}
;for(var j=0,m=be.length;j<m;j++ ){be[j](V,bd,bb,bc);}
;var ba=function(bf,event){var bh=qx.module.Event.__fi;var bg=bh[t]||[];if(bh[bd]){bg=bg.concat(bh[bd]);}
;for(var x=0,y=bg.length;x<y;x++ ){event=bg[x](event,bf,bd);}
;bb.apply(this,[event]);}
.bind(Y,V);ba.original=bb;qx.bom.Event.addNativeListener(V,bd,ba,W);if(!V.$$emitter){V.$$emitter=new qx.event.Emitter();}
;V.$$lastlistenerId=V.$$emitter.on(bd,ba,Y);V.$$emitter.getEntryById(V.$$lastlistenerId).useCapture=!!W;if(!V.__fk){V.__fk={};}
;if(!V.__fk[bd]){V.__fk[bd]={};}
;V.__fk[bd][V.$$lastlistenerId]=ba;if(!bc){if(!V.__fl){V.__fl={};}
;V.__fl[V.$$lastlistenerId]=Y;}
;}
;return this;}
,off:function(bt,bo,bq,bj){var br=(bo===null&&bq===null);for(var j=0;j<this.length;j++ ){var bi=this[j];if(!bi.__fk){continue;}
;var bv=[];if(bt!==null){bv.push(bt);}
else {for(var bm in bi.__fk){bv.push(bm);}
;}
;for(var i=0,l=bv.length;i<l;i++ ){for(var bu in bi.__fk[bv[i]]){var bs=bi.__fk[bv[i]][bu];if(br||bs==bo||bs.original==bo){var bl=typeof bi.__fl!==q&&bi.__fl[bu];var bw;if(!bq&&bl){bw=bi.__fl[bu];}
;var bp=bi.$$emitter.off(bv[i],bs,bw||bq);if(br||bs.original==bo){qx.bom.Event.removeNativeListener(bi,bv[i],bs,bj);}
;if(bp!==null){delete bi.__fk[bv[i]][bu];}
;if(bl){delete bi.__fl[bu];}
;}
;}
;var bk=qx.module.Event.__fj.off;var bn=bk[t]||[];if(bk[bt]){bn=bn.concat(bk[bt]);}
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
(function(){var a="touchmove",b="os.name",c="mousedown",d="event.dispatchevent",e="MSPointerDown",f="gesturemove",g="pointerover",h="touch",k="mouseout",m="ms",n="Processed",o="pointercancel",p="pointerleave",q="touchstart",r="pointerenter",s="mouse",t="event.mspointer",u="mousemove",v="MSPointerCancel",w="gesturefinish",z="browser.documentmode",A="pointerup",B="touchend",C="osx",D="mouseover",E="$$qx",F="pointerdown",G="MSPointerUp",H="pointermove",I="MSPointerOver",J="gecko",K="mshtml",L="engine.name",M="mouseup",N="touchcancel",O="contextmenu",P="gesturecancel",Q="MSPointerMove",R="MSPointerOut",S="gesturebegin",T="qx.event.handler.PointerCore",U=".",V="device.touch",W="pointerout";qx.Bootstrap.define(T,{extend:Object,implement:[qx.core.IDisposable],statics:{MOUSE_TO_POINTER_MAPPING:{mousedown:F,mouseup:A,mousemove:H,mouseout:W,mouseover:g},TOUCH_TO_POINTER_MAPPING:{touchstart:F,touchend:A,touchmove:H,touchcancel:o},MSPOINTER_TO_POINTER_MAPPING:{MSPointerDown:F,MSPointerMove:H,MSPointerUp:A,MSPointerCancel:o,MSPointerLeave:p,MSPointerEnter:r,MSPointerOver:g,MSPointerOut:W},POINTER_TO_GESTURE_MAPPING:{pointerdown:S,pointerup:w,pointercancel:P,pointermove:f},LEFT_BUTTON:(qx.core.Environment.get(L)==K&&qx.core.Environment.get(z)<=8)?1:0,SIM_MOUSE_DISTANCE:25,SIM_MOUSE_DELAY:2500,__fm:null},construct:function(ba,bb){this.__fn=ba;this.__fo=bb;this.__fp=[];this.__fq=[];this.__fr=[];this._processedFlag=E+this.classname.substr(this.classname.lastIndexOf(U)+1)+n;var Y=qx.core.Environment.get(L);var X=parseInt(qx.core.Environment.get(z),10);if(Y==K&&X==10){this.__fp=[e,Q,G,v,I,R,F,H,A,o,g,W];this._initPointerObserver();}
else {if(qx.core.Environment.get(t)){this.__fs=true;}
;this.__fp=[F,H,A,o,g,W];this._initPointerObserver();}
;if(!qx.core.Environment.get(t)){if(qx.core.Environment.get(V)){this.__fp=[q,B,a,N];this._initObserver(this._onTouchEvent);}
;this.__fp=[c,M,u,D,k,O];this._initObserver(this._onMouseEvent);}
;}
,members:{__fn:null,__fo:null,__fp:null,__fs:false,__ft:null,__fu:0,__fq:null,__fv:null,__fr:null,_processedFlag:null,_initPointerObserver:function(){this._initObserver(this._onPointerEvent);}
,_initObserver:function(bc,bd){this.__ft=qx.lang.Function.listener(bc,this);this.__fp.forEach(function(be){if(bd&&qx.dom.Node.isDocument(this.__fn)){if(!this.__fn.$$emitter){this.__fn.$$emitter=new qx.event.Emitter();}
;this.__fn.$$emitter.on(be,this.__ft);}
else {qx.bom.Event.addNativeListener(this.__fn,be,this.__ft);}
;}
.bind(this));}
,_onPointerEvent:function(bh){if(!qx.core.Environment.get(t)||(qx.core.Environment.get(z)===10&&bh.type.toLowerCase().indexOf(m)==-1)){return;}
;if(!this.__fs){bh.stopPropagation();}
;var bf=qx.event.handler.PointerCore.MSPOINTER_TO_POINTER_MAPPING[bh.type]||bh.type;var bi=qx.bom.Event.getTarget(bh);var bg=new qx.event.type.dom.Pointer(bf,bh);this._fireEvent(bg,bf,bi);}
,_onTouchEvent:function(bl){if(bl[this._processedFlag]){return;}
;bl[this._processedFlag]=true;var bm=qx.event.handler.PointerCore.TOUCH_TO_POINTER_MAPPING[bl.type];var bo=bl.changedTouches;this._determineActiveTouches(bl.type,bo);if(bl.touches.length<this.__fr.length){for(var i=this.__fr.length-1;i>=0;i-- ){var bq=new qx.event.type.dom.Pointer(o,bl,{identifier:this.__fr[i].identifier,target:bl.target,pointerType:h,pointerId:this.__fr[i].identifier+2});this._fireEvent(bq,o,bl.target);}
;this.__fv=null;this.__fr=[];return;}
;if(bl.type==q&&this.__fv===null){this.__fv=bo[0].identifier;}
;for(var i=0,l=bo.length;i<l;i++ ){var bp=bo[i];var bn=bl.view.document.elementFromPoint(bp.clientX,bp.clientY)||bl.target;var bk={clientX:bp.clientX,clientY:bp.clientY,pageX:bp.pageX,pageY:bp.pageY,identifier:bp.identifier,screenX:bp.screenX,screenY:bp.screenY,target:bn,pointerType:h,pointerId:bp.identifier+2};if(bl.type==q){var bj=new qx.event.type.dom.Pointer(g,bl,bk);this._fireEvent(bj,g,bk.target);}
;if(bp.identifier==this.__fv){bk.isPrimary=true;bk.button=0;bk.buttons=1;qx.event.handler.PointerCore.__fm={"x":bp.clientX,"y":bp.clientY,"time":new Date().getTime()};}
;var br=new qx.event.type.dom.Pointer(bm,bl,bk);this._fireEvent(br,bm,bk.target);if(bl.type==B||bl.type==N){var bs=new qx.event.type.dom.Pointer(W,bl,bk);this._fireEvent(bs,W,bl.target);if(this.__fv==bp.identifier){this.__fv=null;}
;}
;}
;}
,_onMouseEvent:function(bt){if(bt[this._processedFlag]){return;}
;bt[this._processedFlag]=true;if(this._isSimulatedMouseEvent(bt.clientX,bt.clientY)){return;}
;if(bt.type==c){this.__fq[bt.which]=1;}
else if(bt.type==M){if(qx.core.Environment.get(b)==C&&qx.core.Environment.get(L)==J){if(this.__fq[bt.which]!=1&&bt.ctrlKey){this.__fq[1]=0;}
;}
;this.__fq[bt.which]=0;}
;var bv=qx.event.handler.PointerCore.MOUSE_TO_POINTER_MAPPING[bt.type];var bu=qx.bom.Event.getTarget(bt);var bw=qx.lang.Array.sum(this.__fq);var bz={pointerType:s,pointerId:1};if(this.__fu!=bw&&bw!==0&&this.__fu!==0){var bx=new qx.event.type.dom.Pointer(H,bt,bz);this._fireEvent(bx,H,bu);}
;this.__fu=bw;if(bt.type==c&&bw>1){return;}
;if(bt.type==M&&bw>0){return;}
;if(bt.type==O){this.__fq[bt.which]=0;return;}
;var by=new qx.event.type.dom.Pointer(bv,bt,bz);this._fireEvent(by,bv,bu);}
,_determineActiveTouches:function(bD,bC){if(bD==q){for(var i=0;i<bC.length;i++ ){this.__fr.push(bC[i]);}
;}
else if(bD==B||bD==N){var bA=[];for(var i=0;i<this.__fr.length;i++ ){var bB=true;for(var j=0;j<bC.length;j++ ){if(this.__fr[i].identifier==bC[j].identifier){bB=false;break;}
;}
;if(bB){bA.push(this.__fr[i]);}
;}
;this.__fr=bA;}
;}
,_isSimulatedMouseEvent:function(x,y){var bF=qx.event.handler.PointerCore.__fm;if(bF){var bG=new Date().getTime()-bF.time;var bE=qx.event.handler.PointerCore.SIM_MOUSE_DISTANCE;var bI=Math.abs(x-qx.event.handler.PointerCore.__fm.x);var bH=Math.abs(y-qx.event.handler.PointerCore.__fm.y);if(bG<qx.event.handler.PointerCore.SIM_MOUSE_DELAY){if(bI<bE||bH<bE){return true;}
;}
;}
;return false;}
,_stopObserver:function(){for(var i=0;i<this.__fp.length;i++ ){qx.bom.Event.removeNativeListener(this.__fn,this.__fp[i],this.__ft);}
;}
,_fireEvent:function(bK,bJ,bL){bL=bL||bK.target;bJ=bJ||bK.type;var bM;if((bK.pointerType!==s||bK.button<=qx.event.handler.PointerCore.LEFT_BUTTON)&&(bJ==F||bJ==A||bJ==H)){bM=new qx.event.type.dom.Pointer(qx.event.handler.PointerCore.POINTER_TO_GESTURE_MAPPING[bJ],bK);qx.event.type.dom.Pointer.normalize(bM);try{bM.srcElement=bL;}
catch(bN){}
;}
;if(qx.core.Environment.get(d)){if(!this.__fs){bL.dispatchEvent(bK);}
;if(bM){bL.dispatchEvent(bM);}
;}
else {try{bK.srcElement=bL;}
catch(bO){}
;while(bL){if(bL.$$emitter){bK.currentTarget=bL;if(!bK._stopped){bL.$$emitter.emit(bJ,bK);}
;if(bM&&!bM._stopped){bM.currentTarget=bL;bL.$$emitter.emit(bM.type,bM);}
;}
;bL=bL.parentNode;}
;}
;}
,dispose:function(){this._stopObserver();this.__fn=this.__fo=null;}
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
(function(){var a="qx.event.Emitter",b="*";qx.Bootstrap.define(a,{extend:Object,statics:{__fw:[]},members:{__fk:null,__fx:null,on:function(name,c,d){var e=qx.event.Emitter.__fw.length;this.__fy(name).push({listener:c,ctx:d,id:e,name:name});qx.event.Emitter.__fw.push({name:name,listener:c,ctx:d});return e;}
,once:function(name,f,g){var h=qx.event.Emitter.__fw.length;this.__fy(name).push({listener:f,ctx:g,once:true,id:h});qx.event.Emitter.__fw.push({name:name,listener:f,ctx:g});return h;}
,off:function(name,m,k){var l=this.__fy(name);for(var i=l.length-1;i>=0;i-- ){var n=l[i];if(n.listener==m&&n.ctx==k){l.splice(i,1);qx.event.Emitter.__fw[n.id]=null;return n.id;}
;}
;return null;}
,offById:function(p){var o=qx.event.Emitter.__fw[p];if(o){this.off(o.name,o.listener,o.ctx);}
;return null;}
,addListener:function(name,q,r){return this.on(name,q,r);}
,addListenerOnce:function(name,s,t){return this.once(name,s,t);}
,removeListener:function(name,u,v){this.off(name,u,v);}
,removeListenerById:function(w){this.offById(w);}
,emit:function(name,A){var x=this.__fy(name).concat();var y=[];for(var i=0;i<x.length;i++ ){var z=x[i];z.listener.call(z.ctx,A);if(z.once){y.push(z);}
;}
;y.forEach(function(B){var C=this.__fy(name);var D=C.indexOf(B);C.splice(D,1);}
.bind(this));x=this.__fy(b);for(var i=x.length-1;i>=0;i-- ){var z=x[i];z.listener.call(z.ctx,A);}
;}
,getListeners:function(){return this.__fk;}
,getEntryById:function(F){for(var name in this.__fk){var E=this.__fk[name];for(var i=0,j=E.length;i<j;i++ ){if(E[i].id===F){return E[i];}
;}
;}
;}
,__fy:function(name){if(this.__fk==null){this.__fk={};}
;if(this.__fk[name]==null){this.__fk[name]=[];}
;return this.__fk[name];}
}});}
)();
(function(){var a="display",b="",c="block",d="none",e="_getHeight",f="_getContentWidth",g="_getContentHeight",h="hidden",j="_getWidth",k="qx.module.Css",m="absolute";qx.Bootstrap.define(k,{statics:{_getHeight:function(p){var q=this[0];if(q){if(qx.dom.Node.isElement(q)){var n;if(p){var o={display:c,position:m,visibility:h};n=qx.module.Css.__fB(q,o,e,this);}
else {n=qx.bom.element.Dimension.getHeight(q);}
;return n;}
else if(qx.dom.Node.isDocument(q)){return qx.bom.Document.getHeight(qx.dom.Node.getWindow(q));}
else if(qx.dom.Node.isWindow(q)){return qx.bom.Viewport.getHeight(q);}
;}
;return null;}
,_getWidth:function(t){var u=this[0];if(u){if(qx.dom.Node.isElement(u)){var r;if(t){var s={display:c,position:m,visibility:h};r=qx.module.Css.__fB(u,s,j,this);}
else {r=qx.bom.element.Dimension.getWidth(u);}
;return r;}
else if(qx.dom.Node.isDocument(u)){return qx.bom.Document.getWidth(qx.dom.Node.getWindow(u));}
else if(qx.dom.Node.isWindow(u)){return qx.bom.Viewport.getWidth(u);}
;}
;return null;}
,_getContentHeight:function(w){var y=this[0];if(qx.dom.Node.isElement(y)){var x;if(w){var v={position:m,visibility:h,display:c};x=qx.module.Css.__fB(y,v,g,this);}
else {x=qx.bom.element.Dimension.getContentHeight(y);}
;return x;}
;return null;}
,_getContentWidth:function(B){var z=this[0];if(qx.dom.Node.isElement(z)){var C;if(B){var A={position:m,visibility:h,display:c};C=qx.module.Css.__fB(z,A,f,this);}
else {C=qx.bom.element.Dimension.getContentWidth(z);}
;return C;}
;return null;}
,__fz:{},__fA:function(G,D){var F=qx.module.Css.__fz;if(!F[G]){var H=D||document;var E=qxWeb(H.createElement(G)).appendTo(D.body);F[G]=E.getStyle(a);E.remove();}
;return F[G]||b;}
,__fB:function(L,I,J,O){var M={};for(var N in I){M[N]=L.style[N];L.style[N]=I[N];}
;var K=O[J]();for(var N in M){L.style[N]=M[N];}
;return K;}
,includeStylesheet:function(Q,P){qx.bom.Stylesheet.includeFile(Q,P);}
},members:{getHeight:function(R){return this._getHeight(R);}
,getWidth:function(S){return this._getWidth(S);}
,getContentHeight:function(T){return this._getContentHeight(T);}
,getContentWidth:function(U){return this._getContentWidth(U);}
,show:function(){this._forEachElementWrapped(function(X){var Y=X.getStyle(a);var W=X[0].$$qPrevDisp;var V;if(Y==d){if(W&&W!=d){V=W;}
else {var ba=qxWeb.getDocument(X[0]);V=qx.module.Css.__fA(X[0].tagName,ba);}
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
(function(){var a="mshtml",b="engine.name",c="qx.bom.element.Dimension",d="0px",e="paddingRight",f="paddingLeft",g="opera",h="paddingBottom",i="paddingTop",j="overflowX",k="overflowY";qx.Bootstrap.define(c,{statics:{getWidth:function(m){var l=m.getBoundingClientRect();return Math.round(l.right-l.left);}
,getHeight:function(o){var n=o.getBoundingClientRect();return Math.round(n.bottom-n.top);}
,getSize:function(p){return {width:this.getWidth(p),height:this.getHeight(p)};}
,__fC:{visible:true,hidden:true},getContentWidth:function(t){var q=qx.bom.element.Style;var r=qx.bom.element.Style.get(t,j);var s=parseInt(q.get(t,f)||d,10);var w=parseInt(q.get(t,e)||d,10);if(this.__fC[r]){var v=t.clientWidth;if((qx.core.Environment.get(b)==g)||qx.dom.Node.isBlockNode(t)){v=v-s-w;}
;if(qx.core.Environment.get(b)==a){if(v===0&&t.offsetHeight===0){return t.offsetWidth;}
;}
;return v;}
else {if(t.clientWidth>=t.scrollWidth){return Math.max(t.clientWidth,t.scrollWidth)-s-w;}
else {var u=t.scrollWidth-s;if(qx.core.Environment.get(b)==a){u-=w;}
;return u;}
;}
;}
,getContentHeight:function(B){var x=qx.bom.element.Style;var A=qx.bom.element.Style.get(B,k);var z=parseInt(x.get(B,i)||d,10);var y=parseInt(x.get(B,h)||d,10);if(this.__fC[A]){return B.clientHeight-z-y;}
else {if(B.clientHeight>=B.scrollHeight){return Math.max(B.clientHeight,B.scrollHeight)-z-y;}
else {return B.scrollHeight-z;}
;}
;}
,getContentSize:function(C){return {width:this.getContentWidth(C),height:this.getContentHeight(C)};}
}});}
)();
(function(){var a='',b="(^|\\s)",c=" is undefined",d='function',e="(\\s|$)",f="",g="\\b|\\b",h="qx.debug",j="qx.bom.element.Class",k=" cannot be determined",m='SVGAnimatedString',n="html.classlist",o="default",p=" ",q='object',r="className for element ",s="g",t="$2",u="native",v="\\b",w='undefined';qx.Bootstrap.define(j,{statics:{__fD:/\s+/g,__fE:/^\s+|\s+$/g,add:{"native":function(x,name){if(name.length>0){x.classList.add(name);}
;return name;}
,"default":function(y,name){if(!this.has(y,name)){y.className+=(y.className?p:f)+name;}
;return name;}
}[qx.core.Environment.get(n)?u:o],addClasses:{"native":function(A,z){for(var i=0;i<z.length;i++ ){if(z[i].length>0){A.classList.add(z[i]);}
;}
;return A.className;}
,"default":function(C,E){var D={};var F;var B=C.className;if(B){F=B.split(this.__fD);for(var i=0,l=F.length;i<l;i++ ){D[F[i]]=true;}
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
,"default":function(S,Q){var R=new RegExp(v+Q.join(g)+v,s);return S.className=S.className.replace(R,f).replace(this.__fE,f).replace(this.__fD,p);}
}[qx.core.Environment.get(n)?u:o],replace:function(V,U,T){if(!this.has(V,U)){return f;}
;this.remove(V,U);return this.add(V,T);}
,toggle:{"native":function(X,name,W){if(W===undefined){X.classList.toggle(name);}
else {W?this.add(X,name):this.remove(X,name);}
;return name;}
,"default":function(ba,name,Y){if(Y==null){Y=!this.has(ba,name);}
;Y?this.add(ba,name):this.remove(ba,name);return name;}
}[qx.core.Environment.get(n)?u:o]}});}
)();
(function(){var a="qx.bom.client.Stylesheet",b="html.stylesheet.deleterule",c="html.stylesheet.insertrule",d="function",e="html.stylesheet.createstylesheet",f="html.stylesheet.addimport",g="html.stylesheet.removeimport",h="object";qx.Bootstrap.define(a,{statics:{__fF:function(){if(!qx.bom.client.Stylesheet.__fG){qx.bom.client.Stylesheet.__fG=qx.bom.Stylesheet.createElement();}
;return qx.bom.client.Stylesheet.__fG;}
,getCreateStyleSheet:function(){return typeof document.createStyleSheet===h;}
,getInsertRule:function(){return typeof qx.bom.client.Stylesheet.__fF().insertRule===d;}
,getDeleteRule:function(){return typeof qx.bom.client.Stylesheet.__fF().deleteRule===d;}
,getAddImport:function(){return (typeof qx.bom.client.Stylesheet.__fF().addImport===h);}
,getRemoveImport:function(){return (typeof qx.bom.client.Stylesheet.__fF().removeImport===h);}
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
(function(){var a="file",b="+",c="strict",d="anchor",e="div",f="query",g="source",h="password",j="host",k="protocol",l="qx.debug",n="user",p="directory",q="loose",r="relative",s="queryKey",t="qx.util.Uri",u="",v="path",w="authority",x='">0</a>',y="&",z="port",A="params must be either string or object",B='<a href="',C="userInfo",D="?",E="=";qx.Bootstrap.define(t,{statics:{parseUri:function(H,G){var I={key:[g,k,w,C,n,h,j,z,r,v,p,a,f,d],q:{name:s,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:\[[0-9A-Fa-f:]+\])|(?:[^:\/?#\[\]]*))(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:\[[0-9A-Fa-f:]+\])|(?:[^:\/?#\[\]]*))(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var o=I,m=I.parser[G?c:q].exec(H),F={},i=14;while(i-- ){F[o.key[i]]=m[i]||u;}
;F[o.q.name]={};F[o.key[12]].replace(o.q.parser,function(K,L,J){if(L){F[o.q.name][L]=J;}
;}
);return F;}
,appendParamsToUrl:function(M,N){if(N===undefined){return M;}
;if(qx.core.Environment.get(l)){if(!(qx.lang.Type.isString(N)||qx.lang.Type.isObject(N))){throw new Error(A);}
;}
;if(qx.lang.Type.isObject(N)){N=qx.util.Uri.toParameter(N);}
;if(!N){return M;}
;return M+=(/\?/).test(M)?y+N:D+N;}
,toParameter:function(O,S){var R,Q=[];for(R in O){if(O.hasOwnProperty(R)){var P=O[R];if(P instanceof Array){for(var i=0;i<P.length;i++ ){this.__fH(R,P[i],Q,S);}
;}
else {this.__fH(R,P,Q,S);}
;}
;}
;return Q.join(y);}
,__fH:function(W,X,V,U){var T=window.encodeURIComponent;if(U){V.push(T(W).replace(/%20/g,b)+E+T(X).replace(/%20/g,b));}
else {V.push(T(W)+E+T(X));}
;}
,getAbsolute:function(ba){var Y=document.createElement(e);Y.innerHTML=B+ba+x;return Y.firstChild.href;}
}});}
)();
(function(){var a="qx.module.Attribute",b="html";qx.Bootstrap.define(a,{members:{getHtml:function(){if(this[0]&&this[0].nodeType===1){return qx.bom.element.Attribute.get(this[0],b);}
;return null;}
,setHtml:function(c){c=qx.bom.Html.fixEmptyTags(c);this._forEachElement(function(d){qx.bom.element.Attribute.set(d,b,c);}
);return this;}
,setAttribute:function(name,e){this._forEachElement(function(f){qx.bom.element.Attribute.set(f,name,e);}
);return this;}
,getAttribute:function(name){if(this[0]&&this[0].nodeType===1){return qx.bom.element.Attribute.get(this[0],name);}
;return null;}
,removeAttribute:function(name){this._forEachElement(function(g){qx.bom.element.Attribute.set(g,name,null);}
);return this;}
,setAttributes:function(h){for(var name in h){this.setAttribute(name,h[name]);}
;return this;}
,getAttributes:function(k){var j={};for(var i=0;i<k.length;i++ ){j[k[i]]=this.getAttribute(k[i]);}
;return j;}
,removeAttributes:function(m){for(var i=0,l=m.length;i<l;i++ ){this.removeAttribute(m[i]);}
;return this;}
,setProperty:function(name,n){for(var i=0;i<this.length;i++ ){this[i][name]=n;}
;return this;}
,getProperty:function(name){if(this[0]){return this[0][name];}
;return null;}
,setProperties:function(o){for(var name in o){this.setProperty(name,o[name]);}
;return this;}
,removeProperties:function(p){for(var i=0;i<p.length;i++ ){this.removeProperty(p[i]);}
;return this;}
,getProperties:function(q){var r={};for(var i=0;i<q.length;i++ ){r[q[i]]=this.getProperty(q[i]);}
;return r;}
,removeProperty:function(name){if(this[0]){this[0][name]=undefined;}
;return this;}
,getValue:function(){if(this[0]&&this[0].nodeType===1){return qx.bom.Input.getValue(this[0]);}
;return null;}
,setValue:function(s){this._forEachElement(function(t){qx.bom.Input.setValue(t,s);}
);return this;}
},defer:function(u){qxWeb.$attachAll(this);}
});}
)();
(function(){var a="text",b="Unsupported input type.",c="nowrap",d="radio",e="textarea",f="auto",g="",h="qx.debug",j="input",k="option",m="value",n="select",o="soft",p="number",q="off",r="qx.bom.Input",s="normal",t="mshtml",u="engine.name",v="wrap",w="checkbox",x="select-one";qx.Bootstrap.define(r,{statics:{__ls:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(A,B,y){if(qx.core.Environment.get(h)){qx.core.Assert.assertKeyInMap(A,this.__ls,b);}
;var B=B?qx.lang.Object.clone(B):{};var z;if(A===e||A===n){z=A;}
else {z=j;B.type=A;}
;return qx.dom.Element.create(z,B,y);}
,setValue:function(H,G){var I=H.nodeName.toLowerCase();var D=H.type;var Array=qx.lang.Array;var J=qx.lang.Type;if(typeof G===p){G+=g;}
;if((D===w||D===d)){if(J.isArray(G)){H.checked=Array.contains(G,H.value);}
else {H.checked=H.value==G;}
;}
else if(I===n){var C=J.isArray(G);var K=H.options;var E,F;for(var i=0,l=K.length;i<l;i++ ){E=K[i];F=E.getAttribute(m);if(F==null){F=E.text;}
;E.selected=C?Array.contains(G,F):G==F;}
;if(C&&G.length==0){H.selectedIndex=-1;}
;}
else if((D===a||D===e)&&(qx.core.Environment.get(u)==t)){H.$$inValueSet=true;H.value=G;H.$$inValueSet=null;}
else {H.value=G;}
;}
,getValue:function(S){var Q=S.nodeName.toLowerCase();if(Q===k){return (S.attributes.value||{}).specified?S.value:S.text;}
;if(Q===n){var L=S.selectedIndex;if(L<0){return null;}
;var R=[];var U=S.options;var P=S.type==x;var T=qx.bom.Input;var O;for(var i=P?L:0,N=P?L+1:U.length;i<N;i++ ){var M=U[i];if(M.selected){O=T.getValue(M);if(P){return O;}
;R.push(O);}
;}
;return R;}
else {return (S.value||g).replace(/\r/g,g);}
;}
,setWrap:qx.core.Environment.select(u,{"mshtml":function(Y,V){var X=V?o:q;var W=V?f:g;Y.wrap=X;Y.style.overflowY=W;}
,"gecko":function(bd,ba){var bc=ba?o:q;var bb=ba?g:f;bd.setAttribute(v,bc);bd.style.overflow=bb;}
,"webkit":function(bh,be){var bg=be?o:q;var bf=be?g:f;bh.setAttribute(v,bg);bh.style.overflow=bf;}
,"default":function(bj,bi){bj.style.whiteSpace=bi?s:c;}
})}});}
)();
(function(){var a="qx.module.Core";qx.Bootstrap.define(a,{});}
)();
(function(){var a="repeat",b="#box1_7",c="#box2_3",d="#box1_1",e="#box2_1",f="bottom",g="#box1_5",h="#box2_4",i="#box1_2",j="#box2_6",k="no-repeat",l="center",m="repeat-y",n="demobrowser.demo.bom.Background",o="#box1_8",p="#box2_8",r="#box2_2",s="right",t="#box1_4",u="#box1_6",v="#box2_5",w="#box1_3",x="#box2_7",y="qx/icon/Tango/48/devices/drive-optical.png",z="repeat-x",A="style";qx.Class.define(n,{extend:qx.application.Native,members:{main:function(){qx.application.Native.prototype.main.call(this);var B=qx.util.ResourceManager.getInstance().toUri(y);q(d).setAttribute(A,qx.bom.element.Background.compile(B));q(i).setAttribute(A,qx.bom.element.Background.compile(B,z));q(w).setAttribute(A,qx.bom.element.Background.compile(B,m));q(t).setAttribute(A,qx.bom.element.Background.compile(B,a,10));q(g).setAttribute(A,qx.bom.element.Background.compile(B,a,0,10));q(u).setAttribute(A,qx.bom.element.Background.compile(B,a,10,10));q(b).setAttribute(A,qx.bom.element.Background.compile(B,k,l,l));q(o).setAttribute(A,qx.bom.element.Background.compile(B,k,s,f));q(e).setStyles(qx.bom.element.Background.getStyles(B));q(r).setStyles(qx.bom.element.Background.getStyles(B,z));q(c).setStyles(qx.bom.element.Background.getStyles(B,m));q(h).setStyles(qx.bom.element.Background.getStyles(B,a,10));q(v).setStyles(qx.bom.element.Background.getStyles(B,a,0,10));q(j).setStyles(qx.bom.element.Background.getStyles(B,a,10,10));q(x).setStyles(qx.bom.element.Background.getStyles(B,k,l,l));q(p).setStyles(qx.bom.element.Background.getStyles(B,k,s,f));}
}});}
)();
(function(){var a="singleton",b="qx.util.LibraryManager";qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__iI:qx.$$libraries||{}},members:{has:function(c){return !!this.self(arguments).__iI[c];}
,get:function(d,e){return this.self(arguments).__iI[d][e]?this.self(arguments).__iI[d][e]:null;}
,set:function(f,g,h){this.self(arguments).__iI[f][g]=h;}
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
(function(){var a="mshtml",b="engine.name",c="//",d="io.ssl",e="",f="encoding",g="?",h="type",i="string",j="@",k="font",l="data",m="data:image/",n=";",o="/",p="resourceUri",q="qx.util.ResourceManager",r="singleton",s=",";qx.Class.define(q,{extend:qx.core.Object,type:r,construct:function(){qx.core.Object.call(this);}
,statics:{__bv:qx.$$resources||{},__iJ:{}},members:{getIds:function(u){var w=this.self(arguments).__bv;if(!w){return null;}
;var v=[];for(var t in w){if(w.hasOwnProperty(t)){if(u&&t.indexOf(u)==-1){continue;}
;v.push(t);}
;}
;return v;}
,has:function(x){return !!this.self(arguments).__bv[x];}
,getData:function(y){return this.self(arguments).__bv[y]||null;}
,getImageWidth:function(A){var z=this.self(arguments).__bv[A];return z?z[0]:null;}
,getImageHeight:function(C){var B=this.self(arguments).__bv[C];return B?B[1]:null;}
,getImageFormat:function(E){if(E&&E.startsWith(j)){return k;}
;var D=this.self(arguments).__bv[E];return D?D[2]:null;}
,getCombinedFormat:function(J){var G=e;var I=this.self(arguments).__bv[J];var F=I&&I.length>4&&typeof (I[4])==i&&this.constructor.__bv[I[4]];if(F){var K=I[4];var H=this.constructor.__bv[K];G=H[2];}
;return G;}
,toUri:function(O){if(O==null){return O;}
;var L=this.self(arguments).__bv[O];if(!L){return O;}
;if(typeof L===i){var N=L;}
else {var N=L[3];if(!N){return O;}
;}
;var M=e;if((qx.core.Environment.get(b)==a)&&qx.core.Environment.get(d)){M=this.self(arguments).__iJ[N];}
;return M+qx.util.LibraryManager.getInstance().get(N,p)+o+O;}
,toDataUri:function(R){var Q=this.constructor.__bv[R];var T=Q?this.constructor.__bv[Q[4]]:null;var S;if(T){var P=T[4][R];S=m+P[h]+n+P[f]+s+P[l];}
else {S=this.toUri(R);}
;return S;}
,isFontUri:function(U){return U?U.startsWith(j):false;}
},defer:function(W){if((qx.core.Environment.get(b)==a)){if(qx.core.Environment.get(d)){for(var X in qx.$$libraries){var V;if(qx.util.LibraryManager.getInstance().get(X,p)){V=qx.util.LibraryManager.getInstance().get(X,p);}
else {W.__iJ[X]=e;continue;}
;if(V.match(/^\/\//)!=null){W.__iJ[X]=window.location.protocol;}
else if(V.match(/^\//)!=null){W.__iJ[X]=window.location.protocol+c+window.location.host;}
else if(V.match(/^\.\//)!=null){var ba=document.URL;W.__iJ[X]=ba.substring(0,ba.lastIndexOf(o)+1);}
else if(V.match(/^http/)!=null){W.__iJ[X]=e;}
else {var Y=window.location.href.indexOf(g);var bb;if(Y==-1){bb=window.location.href;}
else {bb=window.location.href.substring(0,Y);}
;W.__iJ[X]=bb.substring(0,bb.lastIndexOf(o)+1);}
;}
;}
;}
;}
});}
)();
(function(){var a="')",b="gecko",c="background-image:url(",d="0",e=");",f="",g="px",h="number",i=")",j="background-repeat:",k="engine.version",l="data:",m=" ",n="qx.bom.element.Background",o=";",p="url(",q="background-position:",r="base64",s="url('",t="engine.name",u="'";qx.Class.define(n,{statics:{__kd:[c,null,e,q,null,o,j,null,o],__ke:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__kf:function(z,top){var v=qx.core.Environment.get(t);var x=qx.core.Environment.get(k);if(v==b&&x<1.9&&z==top&&typeof z==h){top+=0.01;}
;if(z){var y=(typeof z==h)?z+g:z;}
else {y=d;}
;if(top){var w=(typeof top==h)?top+g:top;}
else {w=d;}
;return y+m+w;}
,__kg:function(A){var String=qx.lang.String;var B=A.substr(0,50);return B.startsWith(l)&&String.contains(B,r);}
,compile:function(F,D,H,top){var G=this.__kf(H,top);var E=qx.util.ResourceManager.getInstance().toUri(F);if(this.__kg(E)){E=u+E+u;}
;var C=this.__kd;C[1]=E;C[4]=G;C[7]=D;return C.join(f);}
,getStyles:function(L,J,N,top){if(!L){return this.__ke;}
;var M=this.__kf(N,top);var K=qx.util.ResourceManager.getInstance().toUri(L);var O;if(this.__kg(K)){O=s+K+a;}
else {O=p+K+i;}
;var I={backgroundPosition:M,backgroundImage:O};if(J!=null){I.backgroundRepeat=J;}
;return I;}
,set:function(T,S,Q,U,top){var P=this.getStyles(S,Q,U,top);for(var R in P){T.style[R]=P[R];}
;}
}});}
)();
(function(){var a="q";qx.Bootstrap.define(a,{extend:qxWeb});q=qxWeb;}
)();
(function(){var b="'!",c='Invalid include in theme "',d="fonts",e="appearances",f='The configuration key "',g="Mixin theme is not a valid theme!",h='" is not allowed!',j="icons",k="You can only define one theme category per file! Invalid theme: ",m="string",n="decorations",o="other",p="Found base flag in entry '",q="qx.debug",r='Invalid patch in theme "',s="widgets",t="[Theme ",u="borders",v="' are not compatible '",w="The mixins '",x='": ',y="' of theme '",z='" is invalid: ',A='Invalid extend in theme "',B='Invalid type of key "',C='The key "',D='"!',E="]",F='"! The value needs to be a map!',G='"! The type of the key must be "',H="undefined",I='The type of the key "',J="qx.Theme",K='The content of a meta theme must reference to other themes. The value for "',L='" inside the meta block is wrong.',M='" in theme "',N="colors",O='Invalid key "',P='"! The value is undefined/null!',Q="Theme",R="meta",S='" is not allowed inside a meta theme block.',T="'. Base flags are not allowed for themes without a valid super theme!",U="object";qx.Bootstrap.define(J,{statics:{define:function(name,W){if(!W){var W={};}
;W.include=this.__mx(W.include);W.patch=this.__mx(W.patch);if(qx.core.Environment.get(q)){this.__q(name,W);}
;var V={$$type:Q,name:name,title:W.title,toString:this.genericToString};if(W.extend){V.supertheme=W.extend;}
;V.basename=qx.Bootstrap.createNamespace(name,V);this.__mA(V,W);this.__my(V,W);this.$$registry[name]=V;for(var i=0,a=W.include,l=a.length;i<l;i++ ){this.include(V,a[i]);}
;for(var i=0,a=W.patch,l=a.length;i<l;i++ ){this.patch(V,a[i]);}
;}
,__mx:function(X){if(!X){return [];}
;if(qx.Bootstrap.isArray(X)){return X;}
else {return [X];}
;}
,__my:function(Y,ba){var bb=ba.aliases||{};if(ba.extend&&ba.extend.aliases){qx.Bootstrap.objectMergeWith(bb,ba.extend.aliases,false);}
;Y.aliases=bb;}
,getAll:function(){return this.$$registry;}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,genericToString:function(){return t+this.name+E;}
,__mz:function(bd){for(var i=0,bc=this.__mB,l=bc.length;i<l;i++ ){if(bd[bc[i]]){return bc[i];}
;}
;}
,__mA:function(bi,bj){var bf=this.__mz(bj);if(bj.extend&&!bf){bf=bj.extend.type;}
;bi.type=bf||o;var bg=function(){}
;if(bj.extend){bg.prototype=new bj.extend.$$clazz;}
;var be=bg.prototype;var bh=bj[bf];for(var bk in bh){be[bk]=bh[bk];if(be[bk].base){if(qx.core.Environment.get(q)){if(!bj.extend){throw new Error(p+bk+y+bj.name+T);}
;}
;be[bk].base=bj.extend;}
;}
;bi.$$clazz=bg;bi[bf]=new bg;}
,$$registry:{},__mB:[N,u,n,d,j,s,e,R],__p:qx.core.Environment.select(q,{"true":{"title":m,"aliases":U,"type":m,"extend":U,"colors":U,"borders":U,"decorations":U,"fonts":U,"icons":U,"widgets":U,"appearances":U,"meta":U,"include":U,"patch":U},"default":null}),__mC:qx.core.Environment.select(q,{"true":{"color":U,"border":U,"decoration":U,"font":U,"icon":U,"appearance":U,"widget":U},"default":null}),__q:qx.core.Environment.select(q,{"true":function(name,bq){var bp=this.__p;for(var bo in bq){if(bp[bo]===undefined){throw new Error(f+bo+M+name+h);}
;if(bq[bo]==null){throw new Error(O+bo+M+name+P);}
;if(bp[bo]!==null&&typeof bq[bo]!==bp[bo]){throw new Error(B+bo+M+name+G+bp[bo]+D);}
;}
;var bn=[N,u,n,d,j,s,e,R];for(var i=0,l=bn.length;i<l;i++ ){var bo=bn[i];if(bq[bo]!==undefined&&(bq[bo] instanceof Array||bq[bo] instanceof RegExp||bq[bo] instanceof Date||bq[bo].classname!==undefined)){throw new Error(O+bo+M+name+F);}
;}
;var bl=0;for(var i=0,l=bn.length;i<l;i++ ){var bo=bn[i];if(bq[bo]){bl++ ;}
;if(bl>1){throw new Error(k+name);}
;}
;if(bq.meta){var bm;for(var bo in bq.meta){bm=bq.meta[bo];if(this.__mC[bo]===undefined){throw new Error(C+bo+S);}
;if(typeof bm!==this.__mC[bo]){throw new Error(I+bo+L);}
;if(!(typeof bm===U&&bm!==null&&bm.$$type===Q)){throw new Error(K+bo+M+name+z+bm);}
;}
;}
;if(bq.extend&&bq.extend.$$type!==Q){throw new Error(A+name+x+bq.extend);}
;if(bq.include){for(var i=0,l=bq.include.length;i<l;i++ ){if(typeof (bq.include[i])==H||bq.include[i].$$type!==Q){throw new Error(c+name+x+bq.include[i]);}
;}
;}
;if(bq.patch){for(var i=0,l=bq.patch.length;i<l;i++ ){if(typeof (bq.patch[i])===H||bq.patch[i].$$type!==Q){throw new Error(r+name+x+bq.patch[i]);}
;}
;}
;}
,"default":function(){}
}),patch:function(bu,bs){this.__mD(bs);var bw=this.__mz(bs);if(bw!==this.__mz(bu)){throw new Error(w+bu.name+v+bs.name+b);}
;var bt=bs[bw];var br=bu.$$clazz.prototype;for(var bv in bt){br[bv]=bt[bv];}
;}
,include:function(bA,by){this.__mD(by);var bC=by.type;if(bC!==bA.type){throw new Error(w+bA.name+v+by.name+b);}
;var bz=by[bC];var bx=bA.$$clazz.prototype;for(var bB in bz){if(bx[bB]!==undefined){continue;}
;bx[bB]=bz[bB];}
;}
,__mD:function(bD){if(typeof bD===H||bD==null){var bF=new Error(g);if(qx.core.Environment.get(q)){var bE=qx.dev.StackTrace.getStackTraceFromError(bF);qx.Bootstrap.error(this,bE);}
;throw bF;}
;}
}});}
)();
(function(){var a="JosefinSlab",b="Verdana",c="qx/decoration/Indigo/font/JosefinSlab-SemiBold.ttf",d="qx/decoration/Indigo/font/JosefinSlab-SemiBold.woff",e="Lucida Grande",f="sans-serif",g="qx.theme.indigo.Font",h="monospace",i="font",j="serif",k="DejaVu Sans",l="Courier New",m="DejaVu Sans Mono";qx.Theme.define(g,{fonts:{"default":{size:12,family:[e,k,b,f],color:i,lineHeight:1.8},"bold":{size:12,family:[e,k,b,f],bold:true,color:i,lineHeight:1.8},"headline":{size:22,family:[j],sources:[{family:a,source:[d,c]}]},"small":{size:11,family:[e,k,b,f],color:i,lineHeight:1.8},"monospace":{size:11,family:[m,l,h],color:i,lineHeight:1.8}}});}
)();
(function(){var a="button-box-dark-pressed",b="checkbox",c="tabview-page-button-top",d="button-border",e="table-header",f="button-box-invalid",g="button-border-hovered",h="menubar-button-hovered",i="button-box-dark",j="#999999",k="button-box-hovered-focused",l="solid",m="qx/decoration/Simple",n="dotted",o="border-separator",p="shadow",q="window-border",r="tooltip-text",s="button-box-hovered",t="table-focus-indicator",u="button-box-pressed-invalid",v="dark-blue",w="scrollbar-dark",x="radiobutton",y="scroll-knob",z="qx.theme.simple.Decoration",A="button-box-focused",B="table-header-cell",C="button",D="scroll-knob-pressed",E="border-lead",F="button-box-pressed-hovered",G="border-main",H="#FFF",I="button-box-pressed-focused",J="invalid",K="button-box",L="background",M="scrollbar-bright",N="button-box-bright",O="window-border-inner",P="border-light-shadow",Q="white-box-border",R="background-selected",S="window",T="white",U="gray",V="border-light",W="button-box-bright-pressed",X="button-box-pressed-hovered-focused",Y="button-box-pressed";qx.Theme.define(z,{aliases:{decoration:m},decorations:{"border-blue":{style:{width:4,color:R}},"main":{style:{width:1,color:G}},"main-dark":{style:{width:1,color:d}},"popup":{style:{width:1,color:q,shadowLength:2,shadowBlurRadius:5,shadowColor:p}},"dragover":{style:{bottom:[2,l,v]}},"button-box":{style:{radius:3,width:1,color:d,gradientStart:[N,40],gradientEnd:[i,70],backgroundColor:N}},"button-box-pressed":{include:K,style:{gradientStart:[W,40],gradientEnd:[a,70],backgroundColor:W}},"button-box-pressed-hovered":{include:Y,style:{color:g}},"button-box-hovered":{include:K,style:{color:g}},"button-box-invalid":{include:K,style:{color:J}},"button-box-pressed-invalid":{include:Y,style:{color:J}},"button-box-hovered-invalid":{include:f},"button-box-pressed-hovered-invalid":{include:u},"button-box-focused":{include:K,style:{color:R}},"button-box-pressed-focused":{include:Y,style:{color:R}},"button-box-hovered-focused":{include:A},"button-box-pressed-hovered-focused":{include:I},"button-box-right":{include:K,style:{radius:[0,3,3,0]}},"button-box-pressed-right":{include:Y,style:{radius:[0,3,3,0]}},"button-box-pressed-hovered-right":{include:F,style:{radius:[0,3,3,0]}},"button-box-hovered-right":{include:s,style:{radius:[0,3,3,0]}},"button-box-focused-right":{include:A,style:{radius:[0,3,3,0]}},"button-box-hovered-focused-right":{include:k,style:{radius:[0,3,3,0]}},"button-box-pressed-focused-right":{include:I,style:{radius:[0,3,3,0]}},"button-box-pressed-hovered-focused-right":{include:X,style:{radius:[0,3,3,0]}},"button-box-right-borderless":{include:K,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-right-borderless":{include:Y,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-hovered-right-borderless":{include:F,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-hovered-right-borderless":{include:s,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-top-right":{include:K,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-top-right":{include:Y,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-hovered-top-right":{include:F,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-hovered-top-right":{include:s,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-bottom-right":{include:K,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-bottom-right":{include:Y,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-hovered-bottom-right":{include:F,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-hovered-bottom-right":{include:s,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-bottom-left":{include:K,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-bottom-left":{include:Y,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-hovered-bottom-left":{include:F,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-hovered-bottom-left":{include:s,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-top-left":{include:K,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-top-left":{include:Y,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-hovered-top-left":{include:F,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-hovered-top-left":{include:s,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-middle":{include:K,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-middle":{include:Y,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-hovered-middle":{include:F,style:{radius:0,width:[1,0,1,1]}},"button-box-hovered-middle":{include:s,style:{radius:0,width:[1,0,1,1]}},"button-box-left":{include:K,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-left":{include:Y,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-hovered-left":{include:F,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-hovered-left":{include:s,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-focused-left":{include:A,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-hovered-focused-left":{include:k,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-hovered-focused-left":{include:X,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-focused-left":{include:I,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"separator-horizontal":{style:{widthLeft:1,colorLeft:o}},"separator-vertical":{style:{widthTop:1,colorTop:o}},"scroll-knob":{style:{radius:3,width:1,color:d,backgroundColor:M}},"scroll-knob-pressed":{include:y,style:{backgroundColor:w}},"scroll-knob-hovered":{include:y,style:{color:g}},"scroll-knob-pressed-hovered":{include:D,style:{color:g}},"button-hover":{style:{backgroundColor:C,radius:3}},"window":{style:{width:1,color:q,innerWidth:4,innerColor:O,shadowLength:1,shadowBlurRadius:3,shadowColor:p,backgroundColor:L}},"window-active":{include:S,style:{shadowLength:2,shadowBlurRadius:5}},"window-caption":{style:{width:[0,0,2,0],color:O}},"white-box":{style:{width:1,color:Q,shadowBlurRadius:2,shadowColor:j,radius:7,backgroundColor:T,shadowLength:0}},"inset":{style:{width:1,color:[P,V,V,V]}},"focused-inset":{style:{width:2,color:R}},"border-invalid":{style:{width:2,color:J}},"lead-item":{style:{width:1,style:n,color:E}},"tooltip":{style:{width:1,color:r,shadowLength:1,shadowBlurRadius:2,shadowColor:p}},"tooltip-error":{style:{radius:5,backgroundColor:J}},"toolbar-separator":{style:{widthLeft:1,colorLeft:d}},"menu-separator":{style:{widthTop:1,colorTop:R}},"menubar-button-hovered":{style:{width:1,color:G,radius:3,backgroundColor:T}},"menubar-button-pressed":{include:h,style:{radius:[3,3,0,0],width:[1,1,0,1]}},"datechooser-date-pane":{style:{widthTop:1,colorTop:U,style:l}},"datechooser-weekday":{style:{widthBottom:1,colorBottom:U,style:l}},"datechooser-week":{style:{widthRight:1,colorRight:U,style:l}},"datechooser-week-header":{style:{widthBottom:1,colorBottom:U,widthRight:1,colorRight:U,style:l}},"tabview-page-button-top":{style:{width:[1,1,0,1],backgroundColor:L,color:G,radius:[3,3,0,0]}},"tabview-page-button-bottom":{include:c,style:{radius:[0,0,3,3],width:[0,1,1,1]}},"tabview-page-button-left":{include:c,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"tabview-page-button-right":{include:c,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"statusbar":{style:{widthTop:1,colorTop:R,styleTop:l}},"table-scroller-focus-indicator":{style:{width:2,color:t,style:l}},"table-header":{include:K,style:{radius:0,width:[1,0,1,0]}},"table-header-column-button":{include:e,style:{width:1,color:d}},"table-header-cell":{style:{widthRight:1,color:d}},"table-header-cell-first":{include:B,style:{widthLeft:1}},"progressive-table-header":{include:K,style:{radius:0,width:[1,0,1,1]}},"progressive-table-header-cell":{style:{widthRight:1,color:d}},"progressbar":{style:{backgroundColor:H,width:1,color:o}},"radiobutton":{style:{radius:10,width:1,color:d,innerColor:L,innerWidth:2}},"radiobutton-focused":{include:x,style:{color:R}},"radiobutton-invalid":{include:x,style:{color:J}},"checkbox":{style:{width:1,color:d}},"checkbox-focused":{include:b,style:{color:R}},"checkbox-invalid":{include:b,style:{color:J}}}});}
)();
(function(){var a="qx.theme.indigo.Decoration",b="solid",c="window-border",d="white-box-border",e="#505154",f="background",g="highlight",h="border-main",i="white",j="highlight-shade",k="shadow",l="qx/decoration/Simple",m="#323335";qx.Theme.define(a,{extend:qx.theme.simple.Decoration,aliases:{decoration:l},decorations:{"window":{style:{width:1,color:c,shadowLength:1,shadowBlurRadius:3,shadowColor:k,backgroundColor:f,radius:3}},"window-caption":{style:{radius:[3,3,0,0],color:c,widthBottom:1}},"window-caption-active":{style:{radius:[3,3,0,0],color:g,widthBottom:3}},"white-box":{style:{width:1,color:d,backgroundColor:i}},"statusbar":{style:{widthTop:1,colorTop:h,styleTop:b}},"app-header":{style:{innerWidthBottom:1,innerColorBottom:j,widthBottom:9,colorBottom:g,gradientStart:[e,0],gradientEnd:[m,100],backgroundColor:m}}}});}
)();
(function(){var a="#D9D9D9",b="#BBBBBB",c="#24B",d="qx.theme.indigo.Color",e="#dddddd",f="#888888",g="#CCCCCC",h="rgba(0, 0, 0, 0.4)",i="#B7B7B7",j="#1866B5",k="#BABABA",l="black",m="#F7F7F7",n="#A7A6AA",o="#EBEBEB",p="#666666",q="#CBC8CD",r="#F9F9F9",s="#CDCDCD",t="#808080",u="#F4F4F4",v="#C00F00",w="#686868",x="white",y="#5583D0",z="#262626",A="css.rgba",B="#EEE",C="#3D72C9",D="#E3E3E3",E="#323335",F="#BBB",G="#FE0",H="#F1F1F1",I="#939393",J="#134983",K="gray",L="#E8F0E3",M="#AAAAAA";qx.Theme.define(d,{colors:{"background":x,"dark-blue":E,"light-background":u,"font":z,"highlight":C,"highlight-shade":y,"background-selected":C,"background-selected-disabled":s,"background-selected-dark":E,"background-disabled":m,"background-disabled-checked":b,"background-pane":x,"tabview-unselected":j,"tabview-button-border":J,"tabview-label-active-disabled":a,"link":c,"scrollbar-bright":H,"scrollbar-dark":o,"button":L,"button-border":F,"button-border-hovered":I,"invalid":v,"button-box-bright":r,"button-box-dark":D,"button-box-bright-pressed":k,"button-box-dark-pressed":o,"border-lead":f,"window-border":e,"window-border-inner":u,"white-box-border":e,"shadow":qx.core.Environment.get(A)?h:p,"border-main":e,"border-light":i,"border-light-shadow":w,"border-separator":t,"text":z,"text-disabled":n,"text-selected":x,"text-placeholder":q,"tooltip":G,"tooltip-text":l,"table-header":[242,242,242],"table-focus-indicator":C,"table-header-cell":[235,234,219],"table-row-background-focused-selected":C,"table-row-background-focused":u,"table-row-background-selected":[51,94,168],"table-row-background-even":x,"table-row-background-odd":x,"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":B,"table-column-line":B,"progressive-table-header":M,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":K,"progressive-progressbar-indicator-done":g,"progressive-progressbar-indicator-undone":x,"progressive-progressbar-percent-background":K,"progressive-progressbar-percent-text":x}});}
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
(function(){var a="Indigo",b="qx.theme.Indigo";qx.Theme.define(b,{title:a,meta:{color:qx.theme.indigo.Color,decoration:qx.theme.indigo.Decoration,font:qx.theme.indigo.Font,appearance:qx.theme.indigo.Appearance,icon:qx.theme.icon.Tango}});}
)();
(function(){var a="sans-serif",b="monospace",c="Courier New",d="qx.theme.simple.Font",e="arial",f="DejaVu Sans Mono";qx.Theme.define(d,{fonts:{"default":{size:13,family:[e,a]},"bold":{size:13,family:[e,a],bold:true},"headline":{size:24,family:[a,e]},"small":{size:11,family:[e,a]},"monospace":{size:11,family:[f,c,b]}}});}
)();
(function(){var a="#D9D9D9",b="#1866B5",c="#24B",d="#FF0000",e="#CCCCCC",f="#5685D6",g="rgba(0, 0, 0, 0.4)",h="#FFFFE1",i="#B7B7B7",j="#BBBBBB",k="black",l="#9DCBFE",m="#A7A6AA",n="#EBEBEB",o="#666666",p="#CBC8CD",q="#F9F9F9",r="#CDCDCD",s="#808080",t="#F7F7F7",u="#6694E3",v="#686868",w="white",x="#888888",y="#E0ECFF",z="#2E3A46",A="css.rgba",B="#F5F5F5",C="#EEE",D="#E3E3E3",E="#DDDDDD",F="#BBB",G="qx.theme.simple.Color",H="#F1F1F1",I="#939393",J="#BCBCBC",K="#134983",L="gray",M="#E8F0E3",N="#FAFBFE",O="#AAAAAA";qx.Theme.define(G,{colors:{"background":w,"dark-blue":f,"light-background":y,"background-selected":u,"background-selected-disabled":r,"background-selected-dark":f,"background-disabled":t,"background-disabled-checked":j,"background-pane":N,"tabview-unselected":b,"tabview-button-border":K,"tabview-label-active-disabled":a,"link":c,"scrollbar-bright":H,"scrollbar-dark":n,"button":M,"button-border":F,"button-border-hovered":I,"invalid":d,"button-box-bright":q,"button-box-dark":D,"button-box-bright-pressed":E,"button-box-dark-pressed":B,"border-lead":x,"window-border":z,"window-border-inner":l,"white-box-border":J,"shadow":qx.core.Environment.get(A)?g:o,"border-main":u,"border-light":i,"border-light-shadow":v,"border-separator":s,"text":k,"text-disabled":m,"text-selected":w,"text-placeholder":p,"tooltip":h,"tooltip-text":k,"table-header":[242,242,242],"table-focus-indicator":[179,217,255],"table-header-cell":[235,234,219],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":w,"table-row-background-odd":w,"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":C,"table-column-line":C,"progressive-table-header":O,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":L,"progressive-progressbar-indicator-done":e,"progressive-progressbar-indicator-undone":w,"progressive-progressbar-percent-background":L,"progressive-progressbar-percent-text":w}});}
)();
(function(){var a="Simple",b="qx.theme.Simple";qx.Theme.define(b,{title:a,meta:{color:qx.theme.simple.Color,decoration:qx.theme.simple.Decoration,font:qx.theme.simple.Font,appearance:qx.theme.simple.Appearance,icon:qx.theme.icon.Tango}});}
)();
(function(){var a="Liberation Sans",b="Tahoma",c="os.name",d="sans-serif",e="monospace",f="win",g="Arial",h="Lucida Grande",i="osx",j="Courier New",k="os.version",l="Lucida Console",m="7",n="Monaco",o="Candara",p="Segoe UI",q="Consolas",r="vista",s="qx.theme.modern.Font",t="DejaVu Sans Mono";qx.Theme.define(s,{fonts:{"default":{size:(qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r))?12:11,lineHeight:1.4,family:qx.core.Environment.get(c)==i?[h]:((qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r)))?[p,o]:[b,a,g,d]},"bold":{size:(qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r))?12:11,lineHeight:1.4,family:qx.core.Environment.get(c)==i?[h]:((qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r)))?[p,o]:[b,a,g,d],bold:true},"small":{size:(qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r))?11:10,lineHeight:1.4,family:qx.core.Environment.get(c)==i?[h]:((qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r)))?[p,o]:[b,a,g,d]},"monospace":{size:11,lineHeight:1.4,family:qx.core.Environment.get(c)==i?[l,n]:((qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r)))?[q]:[q,t,j,e]}}});}
)();
(function(){var a="button-checked-focused",b="window-resize-frame",c="checkbox-disabled-border",d="group-background",e="menu-end",f="keyboard-focus",g="button-disabled-start",h="selected-end",i="table-header-hovered",j="border-invalid",k="decoration/toolbar/toolbar-part.gif",l="border-separator",m="window-border-caption",n="radiobutton-hovered",o="button-hovered-end",p="border-input",q="radiobutton",r="repeat-y",s="border-dragover",t="border-inner-input",u="radiobutton-checked-focused",v="groupitem-end",w="group-border",x="input-start",y="button-hovered-start",z="tooltip-error",A="button-hovered",B="selected-start",C="progressive-table-header-border-right",D="button-border-disabled",E="scrollbar-slider-horizontal",F="button-pressed",G="window-statusbar-background",H="tabview-end",I="radiobutton-hovered-invalid",J="checkbox-hovered",K="radiobutton-background",L="window-captionbar-active",M="checkbox-hovered-inner",N="toolbar-button-hovered",O="window-caption-active-end",P="solid",Q="button-start",R="dotted",S="radiobutton-disabled",T="radiobutton-checked",U="checkbox-disabled-end",V="window-caption-active-start",W="window-border",X="button-focused",Y="input",cv="tabview-inactive",cw="qx/decoration/Modern",cx="border-toolbar-separator-left",cr="invalid",cs="button-disabled",ct="horizontal",cu="table-header-start",cC="background-splitpane",cD="button-end",cE="button-checked",cF="border-toolbar-border-inner",cy="px",cz="input-border-disabled",cA="scrollbar-slider-vertical",cB="checkbox-inner",cJ="button",dk="button-disabled-end",dI="toolbar-end",cK="groupitem-start",cG="menu-start",cH="input-focused-start",dD="scrollbar-start",cI="scrollbar-slider-start",cL="radiobutton-checked-disabled",cM="checkbox-focused",cN="border-toolbar-button-outer",cS="background-light",cT="qx.theme.modern.Decoration",cU="checkbox-hovered-invalid",cO="radiobutton-checked-hovered",cP="tabview-page-button-top-inactive",cQ="#243B58",cR="checkbox",cY="checkbox-focus",da="window",dF="checkbox-disabled-inner",db="border-toolbar-separator-right",cV="tabview-inactive-start",cW="scrollbar-end",dE="table-header-end",cX="tabview-background",df="checkbox-end",dg="border-button",dH="tabview-inactive-end",dh="input-end",dc="tabview-page-button-top-active",dd="input-focused-inner-invalid",dG="menu-separator-top",de="shadow",di="window-caption-inactive-start",dj="scrollbar-slider-end",dw="background-pane",dv="pane-end",du="input-focused-end",dA="menubar-start",dz="toolbar-start",dy="radiobutton-focused",dx="pane-start",dp="table-focus-indicator",dn="menu-separator-bottom",dm="#1D2D45",dl="border-main",dt="scrollbar-horizontal",ds="window-caption-inactive-end",dr="checkbox-border",dq="tabview-start",dC="checkbox-hovered-inner-invalid",dB="input-focused";qx.Theme.define(cT,{aliases:{decoration:cw},decorations:{"main":{style:{width:1,color:dl}},"selected":{style:{startColorPosition:0,endColorPosition:100,startColor:B,endColor:h}},"dragover":{style:{bottom:[2,P,s]}},"pane":{style:{width:1,color:cX,radius:3,shadowColor:de,shadowBlurRadius:2,shadowLength:0,gradientStart:[dx,0],gradientEnd:[dv,100]}},"group":{style:{backgroundColor:d,radius:4,color:w,width:1}},"keyboard-focus":{style:{width:1,color:f,style:R}},"radiobutton":{style:{backgroundColor:K,radius:5,width:1,innerWidth:2,color:dr,innerColor:K,shadowLength:0,shadowBlurRadius:0,shadowColor:cY}},"radiobutton-checked":{include:q,style:{backgroundColor:T}},"radiobutton-checked-focused":{include:T,style:{shadowBlurRadius:4}},"radiobutton-checked-hovered":{include:T,style:{innerColor:J}},"radiobutton-focused":{include:q,style:{shadowBlurRadius:4}},"radiobutton-hovered":{include:q,style:{backgroundColor:J,innerColor:J}},"radiobutton-disabled":{include:q,style:{innerColor:S,backgroundColor:S,color:c}},"radiobutton-checked-disabled":{include:S,style:{backgroundColor:cL}},"radiobutton-invalid":{include:q,style:{color:cr}},"radiobutton-checked-invalid":{include:T,style:{color:cr}},"radiobutton-checked-focused-invalid":{include:u,style:{color:cr,shadowColor:cr}},"radiobutton-checked-hovered-invalid":{include:cO,style:{color:cr,innerColor:I}},"radiobutton-focused-invalid":{include:dy,style:{color:cr,shadowColor:cr}},"radiobutton-hovered-invalid":{include:n,style:{color:cr,innerColor:I,backgroundColor:I}},"separator-horizontal":{style:{widthLeft:1,colorLeft:l}},"separator-vertical":{style:{widthTop:1,colorTop:l}},"tooltip-error":{style:{backgroundColor:z,radius:4,shadowColor:de,shadowBlurRadius:2,shadowLength:1}},"popup":{style:{width:1,color:dl,shadowColor:de,shadowBlurRadius:3,shadowLength:1}},"scrollbar-horizontal":{style:{gradientStart:[dD,0],gradientEnd:[cW,100]}},"scrollbar-vertical":{include:dt,style:{orientation:ct}},"scrollbar-slider-horizontal":{style:{gradientStart:[cI,0],gradientEnd:[dj,100],color:dl,width:1,radius:3}},"scrollbar-slider-vertical":{include:E,style:{orientation:ct}},"scrollbar-slider-horizontal-disabled":{include:E,style:{color:D}},"scrollbar-slider-vertical-disabled":{include:cA,style:{color:D}},"button":{style:{radius:3,color:dg,width:1,startColor:Q,endColor:cD,startColorPosition:35,endColorPosition:100}},"button-disabled":{include:cJ,style:{color:D,startColor:g,endColor:dk}},"button-hovered":{include:cJ,style:{startColor:y,endColor:o}},"button-checked":{include:cJ,style:{endColor:Q,startColor:cD}},"button-pressed":{include:cJ,style:{endColor:y,startColor:o}},"button-focused":{style:{radius:3,color:dg,width:1,innerColor:X,innerWidth:2,startColor:Q,endColor:cD,startColorPosition:30,endColorPosition:100}},"button-checked-focused":{include:X,style:{endColor:Q,startColor:cD}},"button-invalid":{include:cJ,style:{color:j}},"button-disabled-invalid":{include:cs,style:{color:j}},"button-hovered-invalid":{include:A,style:{color:j}},"button-checked-invalid":{include:cE,style:{color:j}},"button-pressed-invalid":{include:F,style:{color:j}},"button-focused-invalid":{include:X,style:{color:j}},"button-checked-focused-invalid":{include:a,style:{color:j}},"checkbox":{style:{width:1,color:dr,innerWidth:1,innerColor:cB,backgroundColor:df,shadowLength:0,shadowBlurRadius:0,shadowColor:cY}},"checkbox-hovered":{include:cR,style:{innerColor:M,backgroundColor:J}},"checkbox-focused":{include:cR,style:{shadowBlurRadius:4}},"checkbox-disabled":{include:cR,style:{color:c,innerColor:dF,backgroundColor:U}},"checkbox-invalid":{include:cR,style:{color:cr}},"checkbox-hovered-invalid":{include:J,style:{color:cr,innerColor:dC,backgroundColor:cU}},"checkbox-focused-invalid":{include:cM,style:{color:cr,shadowColor:cr}},"input":{style:{color:p,innerColor:t,innerWidth:1,width:1,backgroundColor:cS,startColor:x,endColor:dh,startColorPosition:0,endColorPosition:12,colorPositionUnit:cy}},"border-invalid":{include:Y,style:{color:j}},"input-focused":{include:Y,style:{startColor:cH,innerColor:du,endColorPosition:4}},"input-focused-invalid":{include:dB,style:{innerColor:dd,color:j}},"input-disabled":{include:Y,style:{color:cz}},"toolbar":{style:{startColorPosition:40,endColorPosition:60,startColor:dz,endColor:dI}},"toolbar-button-hovered":{style:{color:cN,width:1,innerWidth:1,innerColor:cF,radius:2,gradientStart:[Q,30],gradientEnd:[cD,100]}},"toolbar-button-checked":{include:N,style:{gradientStart:[cD,30],gradientEnd:[Q,100]}},"toolbar-separator":{style:{widthLeft:1,widthRight:1,colorLeft:cx,colorRight:db,styleLeft:P,styleRight:P}},"toolbar-part":{style:{backgroundImage:k,backgroundRepeat:r}},"tabview-pane":{style:{width:1,color:W,radius:3,gradientStart:[dq,90],gradientEnd:[H,100]}},"tabview-page-button-top-active":{style:{radius:[3,3,0,0],width:[1,1,0,1],color:cX,backgroundColor:dq,shadowLength:1,shadowColor:de,shadowBlurRadius:2}},"tabview-page-button-top-inactive":{style:{radius:[3,3,0,0],color:cv,colorBottom:cX,width:1,gradientStart:[cV,0],gradientEnd:[dH,100]}},"tabview-page-button-bottom-active":{include:dc,style:{radius:[0,0,3,3],width:[0,1,1,1],backgroundColor:cV,shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-bottom-inactive":{include:cP,style:{radius:[0,0,3,3],width:[0,1,1,1],colorBottom:cv,colorTop:cX}},"tabview-page-button-left-active":{include:dc,style:{radius:[3,0,0,3],width:[1,0,1,1],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-left-inactive":{include:cP,style:{radius:[3,0,0,3],width:[1,0,1,1],colorBottom:cv,colorRight:cX}},"tabview-page-button-right-active":{include:dc,style:{radius:[0,3,3,0],width:[1,1,1,0],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-right-inactive":{include:cP,style:{radius:[0,3,3,0],width:[1,1,1,0],colorBottom:cv,colorLeft:cX}},"splitpane":{style:{backgroundColor:dw,width:3,color:cC,style:P}},"window":{style:{radius:[5,5,0,0],shadowBlurRadius:4,shadowLength:2,shadowColor:de}},"window-incl-statusbar":{include:da,style:{radius:[5,5,5,5]}},"window-resize-frame":{style:{radius:[5,5,0,0],width:1,color:dl}},"window-resize-frame-incl-statusbar":{include:b,style:{radius:[5,5,5,5]}},"window-captionbar-active":{style:{width:1,color:W,colorBottom:m,radius:[5,5,0,0],gradientStart:[V,30],gradientEnd:[O,70]}},"window-captionbar-inactive":{include:L,style:{gradientStart:[di,30],gradientEnd:[ds,70]}},"window-statusbar":{style:{backgroundColor:G,width:[0,1,1,1],color:W,radius:[0,0,5,5]}},"window-pane":{style:{backgroundColor:dw,width:1,color:W,widthTop:0}},"table":{style:{width:1,color:dl,style:P}},"table-statusbar":{style:{widthTop:1,colorTop:dl,style:P}},"table-scroller-header":{style:{gradientStart:[cu,10],gradientEnd:[dE,90],widthBottom:1,colorBottom:dl}},"table-header-cell":{style:{widthRight:1,colorRight:l,styleRight:P}},"table-header-cell-hovered":{style:{widthRight:1,colorRight:l,styleRight:P,widthBottom:1,colorBottom:i,styleBottom:P}},"table-scroller-focus-indicator":{style:{width:2,color:dp,style:P}},"progressive-table-header":{style:{width:1,color:dl,style:P}},"progressive-table-header-cell":{style:{gradientStart:[cu,10],gradientEnd:[dE,90],widthRight:1,colorRight:C}},"menu":{style:{gradientStart:[cG,0],gradientEnd:[e,100],shadowColor:de,shadowBlurRadius:2,shadowLength:1,width:1,color:dl}},"menu-separator":{style:{widthTop:1,colorTop:dG,widthBottom:1,colorBottom:dn}},"menubar":{style:{gradientStart:[dA,0],gradientEnd:[e,100],width:1,color:l}},"app-header":{style:{gradientStart:[cQ,0],gradientEnd:[dm,100]}},"progressbar":{style:{width:1,color:p}},"group-item":{style:{startColorPosition:0,endColorPosition:100,startColor:cK,endColor:v}}}});}
)();
(function(){var a="black",b="#EEEEEE",c="#1a1a1a",d="#ffffdd",e="#b6b6b6",f="#004DAD",g="#BABABA",h="#005BC3",i="#334866",j="#00204D",k="#CECECE",l="gray",m="#D9D9D9",n="#D8D8D8",o="#99C3FE",p="#001533",q="#B3B3B3",r="#F4F4F4",s="#D5D5D5",t="#fffefe",u="#C3C3C3",v="#E4E4E4",w="#DDDDDD",x="#FF9999",y="css.rgba",z="#E8E8E9",A="#084FAA",B="#AFAFAF",C="white",D="#C5C5C5",E="rgba(0, 0, 0, 0.4)",F="#DBDBDB",G="#4a4a4a",H="#83BAEA",I="#D7E7F4",J="#07125A",K="#084FAB",L="#FAF2F2",M="#87AFE7",N="#F7EAEA",O="#777D8D",P="#FBFBFB",Q="#CACACA",R="#909090",S="#9B9B9B",T="#F0F9FE",U="#314a6e",V="#B4B4B4",W="#787878",X="qx.theme.modern.Color",Y="#000000",cb="#26364D",cc="#A7A7A7",cd="#D1E4FF",bW="#5CB0FD",bX="#FCFCFC",bY="#EAEAEA",ca="#003B91",ci="#80B4EF",cj="#FF6B78",ck="#949494",cl="#808080",ce="#F3F3F3",cf="#930000",cg="#7B7B7B",ch="#F0F0F0",cp="#C82C2C",cM="#DFDFDF",cN="#B6B6B6",cq="#0880EF",cm="#4d4d4d",cn="#f4f4f4",cP="#7B7A7E",co="#D0D0D0",cr="#f8f8f8",cs="#404955",ct="#959595",cx="#AAAAAA",cQ="#F7E9E9",cy="#314A6E",cu="#C72B2B",cv="#FAFAFA",cO="#FBFCFB",cw="#B2D2FF",cC="#666666",cD="#CBC8CD",cE="#999999",cF="#8EB8D6",cz="#b8b8b8",cA="#727272",cR="#33508D",cB="#E8E8E8",cJ="#CCCCCC",cK="#CCC",cS="#EFEFEF",cL="#F2F2F2",cG="#F1F1F1",cH="#990000",cI="#00368A";qx.Theme.define(X,{colors:{"background-application":cM,"background-pane":ce,"background-light":bX,"background-medium":b,"background-splitpane":B,"background-tip":d,"background-tip-error":cu,"background-odd":v,"progressbar-background":C,"text-light":R,"text-gray":G,"text-label":c,"text-title":U,"text-input":Y,"text-hovered":p,"text-disabled":cP,"text-selected":t,"text-active":cb,"text-inactive":cs,"text-placeholder":cD,"border-inner-scrollbar":C,"border-main":cm,"menu-separator-top":D,"menu-separator-bottom":cv,"border-separator":cl,"border-toolbar-button-outer":e,"border-toolbar-border-inner":cr,"border-toolbar-separator-right":cn,"border-toolbar-separator-left":cz,"border-input":i,"border-inner-input":C,"border-disabled":cN,"border-pane":j,"border-button":cC,"border-column":cJ,"border-focused":o,"invalid":cH,"border-focused-invalid":x,"border-dragover":cR,"keyboard-focus":a,"table-pane":ce,"table-focus-indicator":cq,"table-row-background-focused-selected":K,"table-row-background-focused":ci,"table-row-background-selected":K,"table-row-background-even":ce,"table-row-background-odd":v,"table-row-selected":t,"table-row":c,"table-row-line":cK,"table-column-line":cK,"table-header-hovered":C,"progressive-table-header":cx,"progressive-table-header-border-right":cL,"progressive-table-row-background-even":r,"progressive-table-row-background-odd":v,"progressive-progressbar-background":l,"progressive-progressbar-indicator-done":cJ,"progressive-progressbar-indicator-undone":C,"progressive-progressbar-percent-background":l,"progressive-progressbar-percent-text":C,"selected-start":f,"selected-end":cI,"background-selected":cI,"tabview-background":J,"shadow":qx.core.Environment.get(y)?E:cE,"pane-start":P,"pane-end":ch,"group-background":cB,"group-border":V,"radiobutton-background":cS,"checkbox-border":cy,"checkbox-focus":M,"checkbox-hovered":cw,"checkbox-hovered-inner":cd,"checkbox-inner":b,"checkbox-start":v,"checkbox-end":ce,"checkbox-disabled-border":W,"checkbox-disabled-inner":Q,"checkbox-disabled-start":co,"checkbox-disabled-end":n,"checkbox-hovered-inner-invalid":L,"checkbox-hovered-invalid":cQ,"radiobutton-checked":h,"radiobutton-disabled":s,"radiobutton-checked-disabled":cg,"radiobutton-hovered-invalid":N,"tooltip-error":cp,"scrollbar-start":cJ,"scrollbar-end":cG,"scrollbar-slider-start":b,"scrollbar-slider-end":u,"button-border-disabled":ct,"button-start":ch,"button-end":B,"button-disabled-start":r,"button-disabled-end":g,"button-hovered-start":T,"button-hovered-end":cF,"button-focused":H,"border-invalid":cf,"input-start":ch,"input-end":cO,"input-focused-start":I,"input-focused-end":bW,"input-focused-inner-invalid":cj,"input-border-disabled":S,"input-border-inner":C,"toolbar-start":cS,"toolbar-end":w,"window-border":j,"window-border-caption":cA,"window-caption-active-text":C,"window-caption-active-start":A,"window-caption-active-end":ca,"window-caption-inactive-start":cL,"window-caption-inactive-end":F,"window-statusbar-background":cS,"tabview-start":bX,"tabview-end":b,"tabview-inactive":O,"tabview-inactive-start":bY,"tabview-inactive-end":k,"table-header-start":cB,"table-header-end":q,"menu-start":z,"menu-end":m,"menubar-start":cB,"groupitem-start":cc,"groupitem-end":ck,"groupitem-text":C,"virtual-row-layer-background-even":C,"virtual-row-layer-background-odd":C}});}
)();
(function(){var a="button-checked",b="window-resize-frame",c="decoration/window/maximize-active-hovered.png",d="radiobutton-hovered",e="decoration/arrows/right.png",f="background-application",g="keyboard-focus",h="group-item",i="scrollbar/button",j="decoration/cursors/",k="icon/16/actions/dialog-ok.png",l="border-invalid",m="combobox/button",n="input",o="slidebar",p="menu",q="table-scroller-focus-indicator",r="move-frame",s="nodrop",t="decoration/table/boolean-true.png",u="table-header-cell",v="app-header",w="row-layer",x="icon/16/places/folder.png",y="text-inactive",z="image",A="radiobutton",B="move",C="window-resize-frame-incl-statusbar",D="radiobutton-checked-focused",E="decoration/window/restore-active-hovered.png",F="window-captionbar-inactive",G="list",H="text-label",I="tree-folder",J="right.png",K="tabview-page-button-bottom-inactive",L="tooltip-error",M="decoration/tree/closed.png",N="window-statusbar",O="button-hovered",P="bold",Q="decoration/scrollbar/scrollbar-",R="background-tip",S="scrollbar-slider-horizontal-disabled",T="text-disabled",U="table-scroller-header",V="radiobutton-disabled",W="scrollbar-slider-horizontal",X="button-pressed",Y="table-pane",fD="decoration/window/close-active.png",fz="native",fE="checkbox-hovered",fA="decoration/window/minimize-active-hovered.png",fB="input-disabled",fw="virtual-list",fC="menubar",fJ="groupbox",fK="icon/16/actions/dialog-cancel.png",fL="tabview-page-button-top-inactive",fM="tabview-page-button-left-inactive",fF="menu-slidebar",fG="toolbar-button-checked",fH="decoration/arrows/left.png",fI="decoration/tree/open-selected.png",fQ="tree-item",gs="radiobutton-checked",fR="decoration/window/minimize-inactive.png",fS="menu-button",fN="button-focused",fO="icon/16/apps/office-calendar.png",ht="text-light",fP="menu-slidebar-button",fT="decoration/arrows/down.png",fU="middle",fV="group",gb="tree",gc="tabview-page-button-right-inactive",gd="decoration/window/minimize-active.png",fW="decoration/window/restore-inactive.png",fX="input-focused-invalid",fY="text-active",ga="splitpane",gh="text-input",gi="combobox/textfield",hy="decoration/window/close-active-hovered.png",gj="invalid",ge="qx/icon/Tango/16/actions/window-close.png",gf="combobox",hx="button-disabled",gg="tabview-page-button-left-active",gn="slidebar/button-forward",go="border-separator",hD="treevirtual-contract",gp="decoration/window/maximize-inactive.png",gk="scrollbar",gl="icon/22/places/folder-open.png",hB="right-top",gm="scrollarea",gq="background-splitpane",gr="datechooser/nav-button",gD="scrollbar-vertical",gC="decoration/toolbar/toolbar-handle-knob.gif",gB="icon/22/mimetypes/office-document.png",gH="text-selected",gG="cell",gF="button-checked-focused",gE="up.png",gw="best-fit",gv="decoration/tree/closed-selected.png",gu="text-hovered",gt="qx.theme.modern.Appearance",gA="decoration/tree/open.png",gz="default",gy="decoration/arrows/up-invert.png",gx="checkbox-disabled",gO="selected",gN="toolbar-button-hovered",gM="decoration/form/checked.png",gL="button",gS="progressive-table-header",gR="decoration/menu/radiobutton.gif",gQ="window-incl-statusbar",gP="decoration/arrows/down-small.png",gK="decoration/arrows/forward.png",gJ="decoration/table/descending.png",gI="decoration/form/undetermined.png",he="tree-file",hd="decoration/form/tooltip-error-arrow-right.png",hc="keep-align",hi="scrollbar-slider-vertical",hh="center",hg="toolbar",hf="alias",gW="decoration/window/restore-active.png",gV="datechooser",gU="toolbar-button",gT="decoration/table/boolean-false.png",hb="qx/static/blank.png",ha="window-pane",gY="icon/32/mimetypes/office-document.png",gX="slidebar/button-backward",ho="radiobutton-checked-disabled",hn="tabview-pane",hm="decoration/arrows/rewind.png",hl="checkbox-focused",hs="selectbox",hr="background-light",hq="top",hp="right",hk="main",hj="button-frame",eB="progressbar-background",eA="radiobutton-checked-hovered",hE="popup",ey="treevirtual-folder",ez="checkbox",ex="table-header-cell-hovered",hC="window",ev="icon/16/mimetypes/office-document.png",ew="treevirtual-expand",eu="text-gray",hz="left",es="decoration/menu/radiobutton-invert.gif",et="text-placeholder",er="atom",eK="text-title",eL="slider",eI="background-medium",eJ="decoration/table/select-column-order.png",eG="down.png",eH="widget",eF="groupitem-text",eq="tabview-page-button-top-active",eD="icon/32/places/folder-open.png",eE="icon/22/places/folder.png",eC="decoration/window/maximize-active.png",eY="decoration/window/close-inactive.png",eW="toolbar-part",eX="decoration/splitpane/knob-vertical.png",eU="left.png",eV="decoration/menu/checkbox-invert.gif",eT="table",hw="decoration/arrows/up.png",eR="table-statusbar",eS="decoration/form/tooltip-error-arrow.png",eQ="window-captionbar-active",hA="copy",eO="radiobutton-focused",eP="decoration/arrows/down-invert.png",eM="decoration/menu/checkbox.gif",eN="",fh="window-caption-active-text",fi="decoration/splitpane/knob-horizontal.png",ff="textfield",fg="icon/32/places/folder.png",fd="toolbar-separator",fe="tabview-page-button-bottom-active",fc="decoration/arrows/up-small.png",hv="decoration/table/ascending.png",fa="small",fb="tabview-page-button-right-active",fv="spinner",hu="tooltip",fx="-disabled",fs="label",fr="scrollbar-horizontal",fu="-invalid",ft="progressbar",fo="progressive-table-header-cell",fn="menu-separator",fq="pane",fp="decoration/arrows/right-invert.png",fk="icon/16/places/folder-open.png",fj="qx/static/blank.gif",fm=".gif",fl="icon/16/actions/view-refresh.png",fy="input-focused";qx.Theme.define(gt,{appearances:{"widget":{},"root":{style:function(hF){return {backgroundColor:f,textColor:H,font:gz};}
},"label":{style:function(hG){return {textColor:hG.disabled?T:undefined};}
},"move-frame":{style:function(hH){return {decorator:hk};}
},"resize-frame":r,"dragdrop-cursor":{style:function(hI){var hJ=s;if(hI.copy){hJ=hA;}
else if(hI.move){hJ=B;}
else if(hI.alias){hJ=hf;}
;return {source:j+hJ+fm,position:hB,offset:[2,16,2,6]};}
},"image":{style:function(hK){return {opacity:!hK.replacement&&hK.disabled?0.3:1};}
},"atom":{},"atom/label":fs,"atom/icon":z,"popup":{style:function(hL){return {decorator:hE,backgroundColor:hr};}
},"button-frame":{alias:er,style:function(hM){var hP,hO;var hN=[3,9];if(hM.checked&&hM.focused&&!hM.inner){hP=gF;hO=undefined;hN=[1,7];}
else if(hM.disabled){hP=hx;hO=undefined;}
else if(hM.pressed){hP=X;hO=gu;}
else if(hM.checked){hP=a;hO=undefined;}
else if(hM.hovered){hP=O;hO=gu;}
else if(hM.focused&&!hM.inner){hP=fN;hO=undefined;hN=[1,7];}
else {hP=gL;hO=undefined;}
;if(hM.invalid&&!hM.disabled){hP+=fu;}
;return {decorator:hP,textColor:hO,padding:hN,margin:[1,0]};}
},"button-frame/image":{style:function(hQ){return {opacity:!hQ.replacement&&hQ.disabled?0.5:1};}
},"button":{alias:hj,include:hj,style:function(hR){return {center:true};}
},"hover-button":{alias:er,include:er,style:function(hS){var hT=hS.hovered?gO:undefined;return {decorator:hT,textColor:hS.hovered?gH:undefined};}
},"menubutton":{include:gL,alias:gL,style:function(hU){return {icon:fT,iconPosition:hp};}
},"splitbutton":{},"splitbutton/button":gL,"splitbutton/arrow":{alias:gL,include:gL,style:function(hV,hW){return {icon:fT,padding:[hW.padding[0],hW.padding[1]-6],marginLeft:1};}
},"form-renderer-label":{include:fs,style:function(){return {paddingTop:4};}
},"checkbox":{alias:er,style:function(hX){var hY;if(hX.checked){hY=gM;}
else if(hX.undetermined){hY=gI;}
else {hY=fj;}
;return {icon:hY,minWidth:14,gap:8,paddingLeft:2};}
},"checkbox/icon":{style:function(ia){var ic;if(ia.disabled){ic=gx;}
else if(ia.focused){ic=hl;}
else if(ia.hovered){ic=fE;}
else {ic=ez;}
;ic+=ia.invalid&&!ia.disabled?fu:eN;var ib=ia.undetermined?[3,1]:1;return {decorator:ic,padding:ib,width:10,height:10};}
},"radiobutton":{alias:er,style:function(id){return {icon:hb,gap:8,paddingLeft:2};}
},"radiobutton/icon":{style:function(ie){var ig;if(ie.disabled&&!ie.checked){ig=V;}
else if(ie.checked&&ie.focused){ig=D;}
else if(ie.checked&&ie.disabled){ig=ho;}
else if(ie.checked&&ie.hovered){ig=eA;}
else if(ie.checked){ig=gs;}
else if(ie.focused){ig=eO;}
else if(ie.hovered){ig=d;}
else {ig=A;}
;ig+=ie.invalid&&!ie.disabled?fu:eN;return {decorator:ig,width:10,height:10};}
},"textfield":{style:function(ih){var im;var ik=!!ih.focused;var ii=!!ih.invalid;var ij=!!ih.disabled;if(ik&&ii&&!ij){im=fX;}
else if(ik&&!ii&&!ij){im=fy;}
else if(ij){im=fB;}
else if(!ik&&ii&&!ij){im=l;}
else {im=n;}
;var il;if(ih.disabled){il=T;}
else if(ih.showingPlaceholder){il=et;}
else {il=gh;}
;return {decorator:im,padding:[2,4,1],textColor:il};}
},"textarea":{include:ff,style:function(io){return {padding:4};}
},"spinner":{style:function(ip){var is;var ir=!!ip.focused;var it=!!ip.invalid;var iq=!!ip.disabled;if(ir&&it&&!iq){is=fX;}
else if(ir&&!it&&!iq){is=fy;}
else if(iq){is=fB;}
else if(!ir&&it&&!iq){is=l;}
else {is=n;}
;return {decorator:is};}
},"spinner/textfield":{style:function(iu){return {marginRight:2,padding:[2,4,1],textColor:iu.disabled?T:gh};}
},"spinner/upbutton":{alias:hj,include:hj,style:function(iv,iw){return {icon:fc,padding:[iw.padding[0]-1,iw.padding[1]-5],margin:0};}
},"spinner/downbutton":{alias:hj,include:hj,style:function(ix,iy){return {icon:gP,padding:[iy.padding[0]-1,iy.padding[1]-5],margin:0};}
},"datefield":gf,"datefield/button":{alias:m,include:m,style:function(iz){return {icon:fO,padding:[0,3],decorator:undefined};}
},"datefield/textfield":gi,"datefield/list":{alias:gV,include:gV,style:function(iA){return {decorator:undefined};}
},"groupbox":{style:function(iB){return {legendPosition:hq};}
},"groupbox/legend":{alias:er,style:function(iC){return {padding:[1,0,1,4],textColor:iC.invalid?gj:eK,font:P};}
},"groupbox/frame":{style:function(iD){return {padding:10,margin:1,decorator:fV};}
},"check-groupbox":fJ,"check-groupbox/legend":{alias:ez,include:ez,style:function(iE){return {padding:[1,0,1,4],textColor:iE.invalid?gj:eK,font:P};}
},"radio-groupbox":fJ,"radio-groupbox/legend":{alias:A,include:A,style:function(iF){return {padding:[1,0,1,4],textColor:iF.invalid?gj:eK,font:P};}
},"scrollarea":{style:function(iG){return {minWidth:50,minHeight:50};}
},"scrollarea/corner":{style:function(iH){return {backgroundColor:f};}
},"scrollarea/pane":eH,"scrollarea/scrollbar-x":gk,"scrollarea/scrollbar-y":gk,"scrollbar":{style:function(iI){if(iI[fz]){return {};}
;return {width:iI.horizontal?undefined:16,height:iI.horizontal?16:undefined,decorator:(iI.horizontal?fr:gD),padding:1};}
},"scrollbar/slider":{alias:eL,style:function(iJ){return {padding:iJ.horizontal?[0,1,0,1]:[1,0,1,0]};}
},"scrollbar/slider/knob":{include:hj,style:function(iK){var iL=iK.horizontal?W:hi;if(iK.disabled){iL+=fx;}
;return {decorator:iL,minHeight:iK.horizontal?undefined:9,minWidth:iK.horizontal?9:undefined,padding:undefined,margin:0};}
},"scrollbar/button":{alias:hj,include:hj,style:function(iM){var iO=Q;if(iM.left){iO+=eU;}
else if(iM.right){iO+=J;}
else if(iM.up){iO+=gE;}
else {iO+=eG;}
;if(iM.left||iM.right){var iN=iM.left?3:4;return {padding:[3,0,3,iN],icon:iO,width:15,height:14,margin:0};}
else {return {padding:3,icon:iO,width:14,height:15,margin:0};}
;}
},"scrollbar/button-begin":i,"scrollbar/button-end":i,"slider":{style:function(iP){var iS;var iR=!!iP.focused;var iT=!!iP.invalid;var iQ=!!iP.disabled;if(iR&&iT&&!iQ){iS=fX;}
else if(iR&&!iT&&!iQ){iS=fy;}
else if(iQ){iS=fB;}
else if(!iR&&iT&&!iQ){iS=l;}
else {iS=n;}
;return {decorator:iS};}
},"slider/knob":{include:hj,style:function(iU){return {decorator:iU.disabled?S:W,height:14,width:14,padding:0,margin:0};}
},"list":{alias:gm,style:function(iV){var iY;var iX=!!iV.focused;var ja=!!iV.invalid;var iW=!!iV.disabled;if(iX&&ja&&!iW){iY=fX;}
else if(iX&&!ja&&!iW){iY=fy;}
else if(iW){iY=fB;}
else if(!iX&&ja&&!iW){iY=l;}
else {iY=n;}
;return {backgroundColor:hr,decorator:iY};}
},"list/pane":eH,"listitem":{alias:er,style:function(jb){return {padding:jb.dragover?[4,4,2,4]:4,textColor:jb.selected?gH:undefined,decorator:jb.selected?gO:undefined,opacity:jb.drag?0.5:undefined};}
},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:hj,include:hj,style:function(jc){return {padding:5,center:true,icon:jc.vertical?fT:e};}
},"slidebar/button-backward":{alias:hj,include:hj,style:function(jd){return {padding:5,center:true,icon:jd.vertical?hw:fH};}
},"tabview":{style:function(je){return {contentPadding:16};}
},"tabview/bar":{alias:o,style:function(jf){var jg={marginBottom:jf.barTop?-1:0,marginTop:jf.barBottom?-4:0,marginLeft:jf.barRight?-3:0,marginRight:jf.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};if(jf.barTop||jf.barBottom){jg.paddingLeft=5;jg.paddingRight=7;}
else {jg.paddingTop=5;jg.paddingBottom=7;}
;return jg;}
},"tabview/bar/button-forward":{include:gn,alias:gn,style:function(jh){if(jh.barTop||jh.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/button-backward":{include:gX,alias:gX,style:function(ji){if(ji.barTop||ji.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(jj){return {decorator:hn,marginBottom:jj.barBottom?-1:0,marginTop:jj.barTop?-1:0,marginLeft:jj.barLeft?-1:0,marginRight:jj.barRight?-1:0};}
},"tabview-page":{alias:eH,include:eH,style:function(jk){return {padding:[4,3]};}
},"tabview-page/button":{alias:er,style:function(jl){var jr,jn=0;var jq=0,jm=0,jo=0,jp=0;if(jl.checked){if(jl.barTop){jr=eq;jn=[5,11];jo=jl.firstTab?0:-5;jp=jl.lastTab?0:-5;}
else if(jl.barBottom){jr=fe;jn=[5,11];jo=jl.firstTab?0:-5;jp=jl.lastTab?0:-5;jq=3;}
else if(jl.barRight){jr=fb;jn=[5,10];jq=jl.firstTab?0:-5;jm=jl.lastTab?0:-5;jo=2;}
else {jr=gg;jn=[5,10];jq=jl.firstTab?0:-5;jm=jl.lastTab?0:-5;}
;}
else {if(jl.barTop){jr=fL;jn=[3,9];jq=4;jo=jl.firstTab?5:1;jp=1;}
else if(jl.barBottom){jr=K;jn=[3,9];jm=4;jo=jl.firstTab?5:1;jp=1;jq=3;}
else if(jl.barRight){jr=gc;jn=[3,9];jp=5;jq=jl.firstTab?5:1;jm=1;jo=3;}
else {jr=fM;jn=[3,9];jo=5;jq=jl.firstTab?5:1;jm=1;jp=1;}
;}
;return {zIndex:jl.checked?10:5,decorator:jr,padding:jn,marginTop:jq,marginBottom:jm,marginLeft:jo,marginRight:jp,textColor:jl.disabled?T:jl.checked?fY:y};}
},"tabview-page/button/label":{alias:fs,style:function(js){return {padding:js.focused?[0,1,0,1]:[1,2,1,2],decorator:js.focused?g:undefined};}
},"tabview-page/button/close-button":{alias:er,style:function(jt){return {icon:ge};}
},"toolbar":{style:function(ju){return {decorator:hg,spacing:2};}
},"toolbar/part":{style:function(jv){return {decorator:eW,spacing:2};}
},"toolbar/part/container":{style:function(jw){return {paddingLeft:2,paddingRight:2};}
},"toolbar/part/handle":{style:function(jx){return {source:gC,marginLeft:3,marginRight:3};}
},"toolbar-button":{alias:er,style:function(jy){var jz;if(jy.pressed||(jy.checked&&!jy.hovered)||(jy.checked&&jy.disabled)){jz=fG;}
else if(jy.hovered&&!jy.disabled){jz=gN;}
;return {marginTop:2,marginBottom:2,padding:(jy.pressed||jy.checked||jy.hovered)&&!jy.disabled||(jy.disabled&&jy.checked)?3:5,decorator:jz};}
},"toolbar-menubutton":{alias:gU,include:gU,style:function(jA){return {showArrow:true};}
},"toolbar-menubutton/arrow":{alias:z,include:z,style:function(jB){return {source:gP};}
},"toolbar-splitbutton":{style:function(jC){return {marginTop:2,marginBottom:2};}
},"toolbar-splitbutton/button":{alias:gU,include:gU,style:function(jD){return {icon:fT,marginTop:undefined,marginBottom:undefined};}
},"toolbar-splitbutton/arrow":{alias:gU,include:gU,style:function(jE){if(jE.pressed||jE.checked||(jE.hovered&&!jE.disabled)){var jF=1;}
else {var jF=3;}
;return {padding:jF,icon:fT,marginTop:undefined,marginBottom:undefined};}
},"toolbar-separator":{style:function(jG){return {decorator:fd,margin:7};}
},"tree":G,"tree-item":{style:function(jH){var jI=jH.selected?gO:undefined;return {padding:[2,6],textColor:jH.selected?gH:undefined,decorator:jI,opacity:jH.drag?0.5:undefined};}
},"tree-item/icon":{include:z,style:function(jJ){return {paddingRight:5};}
},"tree-item/label":fs,"tree-item/open":{include:z,style:function(jK){var jL;if(jK.selected&&jK.opened){jL=fI;}
else if(jK.selected&&!jK.opened){jL=gv;}
else if(jK.opened){jL=gA;}
else {jL=M;}
;return {padding:[0,5,0,2],source:jL};}
},"tree-folder":{include:fQ,alias:fQ,style:function(jM){var jO,jN;if(jM.small){jO=jM.opened?fk:x;jN=fk;}
else if(jM.large){jO=jM.opened?eD:fg;jN=eD;}
else {jO=jM.opened?gl:eE;jN=gl;}
;return {icon:jO,iconOpened:jN};}
},"tree-file":{include:fQ,alias:fQ,style:function(jP){return {icon:jP.small?ev:jP.large?gY:gB};}
},"treevirtual":eT,"treevirtual-folder":{style:function(jQ){return {icon:jQ.opened?fk:x};}
},"treevirtual-file":{include:ey,alias:ey,style:function(jR){return {icon:ev};}
},"treevirtual-line":{style:function(jS){return {icon:fj};}
},"treevirtual-contract":{style:function(jT){return {icon:gA,paddingLeft:5,paddingTop:2};}
},"treevirtual-expand":{style:function(jU){return {icon:M,paddingLeft:5,paddingTop:2};}
},"treevirtual-only-contract":hD,"treevirtual-only-expand":ew,"treevirtual-start-contract":hD,"treevirtual-start-expand":ew,"treevirtual-end-contract":hD,"treevirtual-end-expand":ew,"treevirtual-cross-contract":hD,"treevirtual-cross-expand":ew,"treevirtual-end":{style:function(jV){return {icon:fj};}
},"treevirtual-cross":{style:function(jW){return {icon:fj};}
},"tooltip":{include:hE,style:function(jX){return {backgroundColor:R,padding:[1,3,2,3],offset:[15,5,5,5]};}
},"tooltip/atom":er,"tooltip-error":{style:function(jY){return {placeMethod:eH,offset:[-3,1,0,0],arrowPosition:jY.placementLeft?hz:hp,position:hB,showTimeout:100,hideTimeout:10000,padding:[0,4,4,0]};}
},"tooltip-error/arrow":{include:z,style:function(ka){var kb=ka.placementLeft?hd:eS;return {source:kb,padding:[6,0,0,0],zIndex:10000001};}
},"tooltip-error/atom":{include:hE,style:function(kc){return {textColor:gH,backgroundColor:undefined,decorator:L,font:P,padding:[3,4,4,4],margin:[1,0,0,0],maxWidth:333};}
},"window":{style:function(kd){return {decorator:kd.showStatusbar?gQ:hC,contentPadding:[10,10,10,10],margin:kd.maximized?0:[0,5,5,0]};}
},"window-resize-frame":{style:function(ke){return {decorator:ke.showStatusbar?C:b};}
},"window/pane":{style:function(kf){return {decorator:ha};}
},"window/captionbar":{style:function(kg){return {decorator:(kg.active?eQ:F),textColor:kg.active?fh:eu,minHeight:26,paddingRight:2};}
},"window/icon":{style:function(kh){return {margin:[5,0,3,6]};}
},"window/title":{style:function(ki){return {alignY:fU,font:P,marginLeft:6,marginRight:12};}
},"window/minimize-button":{alias:er,style:function(kj){return {icon:kj.active?kj.hovered?fA:gd:fR,margin:[4,8,2,0]};}
},"window/restore-button":{alias:er,style:function(kk){return {icon:kk.active?kk.hovered?E:gW:fW,margin:[5,8,2,0]};}
},"window/maximize-button":{alias:er,style:function(kl){return {icon:kl.active?kl.hovered?c:eC:gp,margin:[4,8,2,0]};}
},"window/close-button":{alias:er,style:function(km){return {icon:km.active?km.hovered?hy:fD:eY,margin:[4,8,2,0]};}
},"window/statusbar":{style:function(kn){return {padding:[2,6],decorator:N,minHeight:18};}
},"window/statusbar-text":{style:function(ko){return {font:fa};}
},"iframe":{style:function(kp){return {decorator:hk};}
},"resizer":{style:function(kq){return {decorator:fq};}
},"splitpane":{style:function(kr){return {decorator:ga};}
},"splitpane/splitter":{style:function(ks){return {width:ks.horizontal?3:undefined,height:ks.vertical?3:undefined,backgroundColor:gq};}
},"splitpane/splitter/knob":{style:function(kt){return {source:kt.horizontal?fi:eX};}
},"splitpane/slider":{style:function(ku){return {width:ku.horizontal?3:undefined,height:ku.vertical?3:undefined,backgroundColor:gq};}
},"selectbox":hj,"selectbox/atom":er,"selectbox/popup":hE,"selectbox/list":{alias:G},"selectbox/arrow":{include:z,style:function(kv){return {source:fT,paddingLeft:5};}
},"datechooser":{style:function(kw){var kz;var ky=!!kw.focused;var kA=!!kw.invalid;var kx=!!kw.disabled;if(ky&&kA&&!kx){kz=fX;}
else if(ky&&!kA&&!kx){kz=fy;}
else if(kx){kz=fB;}
else if(!ky&&kA&&!kx){kz=l;}
else {kz=n;}
;return {padding:2,decorator:kz,backgroundColor:hr};}
},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:hj,alias:hj,style:function(kB){var kC={padding:[2,4]};if(kB.lastYear){kC.icon=hm;kC.marginRight=1;}
else if(kB.lastMonth){kC.icon=fH;}
else if(kB.nextYear){kC.icon=gK;kC.marginLeft=1;}
else if(kB.nextMonth){kC.icon=e;}
;return kC;}
},"datechooser/last-year-button-tooltip":hu,"datechooser/last-month-button-tooltip":hu,"datechooser/next-year-button-tooltip":hu,"datechooser/next-month-button-tooltip":hu,"datechooser/last-year-button":gr,"datechooser/last-month-button":gr,"datechooser/next-month-button":gr,"datechooser/next-year-button":gr,"datechooser/month-year-label":{style:function(kD){return {font:P,textAlign:hh,textColor:kD.disabled?T:undefined};}
},"datechooser/date-pane":{style:function(kE){return {textColor:kE.disabled?T:undefined,marginTop:2};}
},"datechooser/weekday":{style:function(kF){return {textColor:kF.disabled?T:kF.weekend?ht:undefined,textAlign:hh,paddingTop:2,backgroundColor:eI};}
},"datechooser/week":{style:function(kG){return {textAlign:hh,padding:[2,4],backgroundColor:eI};}
},"datechooser/day":{style:function(kH){var kI=kH.disabled?undefined:kH.selected?gO:undefined;return {textAlign:hh,decorator:kI,textColor:kH.disabled?T:kH.selected?gH:kH.otherMonth?ht:undefined,font:kH.today?P:undefined,padding:[2,4]};}
},"combobox":{style:function(kJ){var kM;var kL=!!kJ.focused;var kN=!!kJ.invalid;var kK=!!kJ.disabled;if(kL&&kN&&!kK){kM=fX;}
else if(kL&&!kN&&!kK){kM=fy;}
else if(kK){kM=fB;}
else if(!kL&&kN&&!kK){kM=l;}
else {kM=n;}
;return {decorator:kM};}
},"combobox/popup":hE,"combobox/list":{alias:G},"combobox/button":{include:hj,alias:hj,style:function(kO,kP){var kQ={icon:fT,padding:[kP.padding[0],kP.padding[1]-6],margin:undefined};if(kO.selected){kQ.decorator=fN;}
;return kQ;}
},"combobox/textfield":{include:ff,style:function(kR){return {decorator:undefined};}
},"menu":{style:function(kS){var kT={decorator:p,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:kS.submenu||kS.contextmenu?gw:hc};if(kS.submenu){kT.position=hB;kT.offset=[-2,-3];}
;return kT;}
},"menu/slidebar":fF,"menu-slidebar":eH,"menu-slidebar-button":{style:function(kU){var kV=kU.hovered?gO:undefined;return {decorator:kV,padding:7,center:true};}
},"menu-slidebar/button-backward":{include:fP,style:function(kW){return {icon:kW.hovered?gy:hw};}
},"menu-slidebar/button-forward":{include:fP,style:function(kX){return {icon:kX.hovered?eP:fT};}
},"menu-separator":{style:function(kY){return {height:0,decorator:fn,margin:[4,2]};}
},"menu-button":{alias:er,style:function(la){var lb=la.selected?gO:undefined;return {decorator:lb,textColor:la.selected?gH:undefined,padding:[4,6]};}
},"menu-button/icon":{include:z,style:function(lc){return {alignY:fU};}
},"menu-button/label":{include:fs,style:function(ld){return {alignY:fU,padding:1};}
},"menu-button/shortcut":{include:fs,style:function(le){return {alignY:fU,marginLeft:14,padding:1};}
},"menu-button/arrow":{include:z,style:function(lf){return {source:lf.selected?fp:e,alignY:fU};}
},"menu-checkbox":{alias:fS,include:fS,style:function(lg){return {icon:!lg.checked?undefined:lg.selected?eV:eM};}
},"menu-radiobutton":{alias:fS,include:fS,style:function(lh){return {icon:!lh.checked?undefined:lh.selected?es:gR};}
},"menubar":{style:function(li){return {decorator:fC};}
},"menubar-button":{alias:er,style:function(lj){var lk=(lj.pressed||lj.hovered)&&!lj.disabled?gO:undefined;return {decorator:lk,textColor:lj.pressed||lj.hovered?gH:undefined,padding:[3,8]};}
},"colorselector":eH,"colorselector/control-bar":eH,"colorselector/control-pane":eH,"colorselector/visual-pane":fJ,"colorselector/preset-grid":eH,"colorselector/colorbucket":{style:function(ll){return {decorator:hk,width:16,height:16};}
},"colorselector/preset-field-set":fJ,"colorselector/input-field-set":{include:fJ,alias:fJ,style:function(){return {paddingTop:20};}
},"colorselector/preview-field-set":{include:fJ,alias:fJ,style:function(){return {paddingTop:20};}
},"colorselector/hex-field-composite":eH,"colorselector/hex-field":ff,"colorselector/rgb-spinner-composite":eH,"colorselector/rgb-spinner-red":fv,"colorselector/rgb-spinner-green":fv,"colorselector/rgb-spinner-blue":fv,"colorselector/hsb-spinner-composite":eH,"colorselector/hsb-spinner-hue":fv,"colorselector/hsb-spinner-saturation":fv,"colorselector/hsb-spinner-brightness":fv,"colorselector/preview-content-old":{style:function(lm){return {decorator:hk,width:50,height:10};}
},"colorselector/preview-content-new":{style:function(ln){return {decorator:hk,backgroundColor:hr,width:50,height:10};}
},"colorselector/hue-saturation-field":{style:function(lo){return {decorator:hk,margin:5};}
},"colorselector/brightness-field":{style:function(lp){return {decorator:hk,margin:[5,7]};}
},"colorselector/hue-saturation-pane":eH,"colorselector/hue-saturation-handle":eH,"colorselector/brightness-pane":eH,"colorselector/brightness-handle":eH,"colorpopup":{alias:hE,include:hE,style:function(lq){return {padding:5,backgroundColor:f};}
},"colorpopup/field":{style:function(lr){return {decorator:hk,margin:2,width:14,height:14,backgroundColor:hr};}
},"colorpopup/selector-button":gL,"colorpopup/auto-button":gL,"colorpopup/preview-pane":fJ,"colorpopup/current-preview":{style:function(ls){return {height:20,padding:4,marginLeft:4,decorator:hk,allowGrowX:true};}
},"colorpopup/selected-preview":{style:function(lt){return {height:20,padding:4,marginRight:4,decorator:hk,allowGrowX:true};}
},"colorpopup/colorselector-okbutton":{alias:gL,include:gL,style:function(lu){return {icon:k};}
},"colorpopup/colorselector-cancelbutton":{alias:gL,include:gL,style:function(lv){return {icon:fK};}
},"table":{alias:eH,style:function(lw){return {decorator:eT};}
},"table/statusbar":{style:function(lx){return {decorator:eR,padding:[0,2]};}
},"table/column-button":{alias:hj,style:function(ly){return {decorator:U,padding:3,icon:eJ};}
},"table-column-reset-button":{include:fS,alias:fS,style:function(){return {icon:fl};}
},"table-scroller":eH,"table-scroller/scrollbar-x":gk,"table-scroller/scrollbar-y":gk,"table-scroller/header":{style:function(lz){return {decorator:U,textColor:lz.disabled?T:undefined};}
},"table-scroller/pane":{style:function(lA){return {backgroundColor:Y};}
},"table-scroller/focus-indicator":{style:function(lB){return {decorator:q};}
},"table-scroller/resize-line":{style:function(lC){return {backgroundColor:go,width:2};}
},"table-header-cell":{alias:er,style:function(lD){return {minWidth:13,minHeight:20,padding:lD.hovered?[3,4,2,4]:[3,4],decorator:lD.hovered?ex:u,sortIcon:lD.sorted?(lD.sortedAscending?hv:gJ):undefined};}
},"table-header-cell/label":{style:function(lE){return {minWidth:0,alignY:fU,paddingRight:5};}
},"table-header-cell/sort-icon":{style:function(lF){return {alignY:fU,alignX:hp,opacity:lF.disabled?0.3:1};}
},"table-header-cell/icon":{style:function(lG){return {minWidth:0,alignY:fU,paddingRight:5,opacity:lG.disabled?0.3:1};}
},"table-editor-textfield":{include:ff,style:function(lH){return {decorator:undefined,padding:[2,2],backgroundColor:hr};}
},"table-editor-selectbox":{include:hs,alias:hs,style:function(lI){return {padding:[0,2],backgroundColor:hr};}
},"table-editor-combobox":{include:gf,alias:gf,style:function(lJ){return {decorator:undefined,backgroundColor:hr};}
},"progressive-table-header":{alias:eH,style:function(lK){return {decorator:gS};}
},"progressive-table-header-cell":{alias:er,style:function(lL){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:fo};}
},"app-header":{style:function(lM){return {font:P,textColor:gH,padding:[8,12],decorator:v};}
},"app-header-label":fs,"app-splitpane":{alias:ga,style:function(lN){return {padding:0};}
},"virtual-list":G,"virtual-list/row-layer":w,"row-layer":eH,"group-item":{include:fs,alias:fs,style:function(lO){return {padding:4,decorator:h,textColor:eF,font:P};}
},"virtual-selectbox":hs,"virtual-selectbox/dropdown":hE,"virtual-selectbox/dropdown/list":{alias:fw},"virtual-combobox":gf,"virtual-combobox/dropdown":hE,"virtual-combobox/dropdown/list":{alias:fw},"virtual-tree":{include:gb,alias:gb,style:function(lP){return {itemHeight:26};}
},"virtual-tree-folder":I,"virtual-tree-file":he,"column-layer":eH,"cell":{style:function(lQ){return {textColor:lQ.selected?gH:H,padding:[3,6],font:gz};}
},"cell-string":gG,"cell-number":{include:gG,style:function(lR){return {textAlign:hp};}
},"cell-image":gG,"cell-boolean":{include:gG,style:function(lS){return {iconTrue:t,iconFalse:gT};}
},"cell-atom":gG,"cell-date":gG,"cell-html":gG,"progressbar":{style:function(lT){return {decorator:ft,padding:[1],backgroundColor:eB,width:200,height:20};}
},"progressbar/progress":{style:function(lU){return {decorator:(lU.disabled?h:gO)};}
}}});}
)();
(function(){var a="qx.theme.Modern",b="Modern";qx.Theme.define(a,{title:b,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});}
)();
(function(){var a="Oxygen",b="qx.theme.icon.Oxygen",c="qx/icon/Oxygen";qx.Theme.define(b,{title:a,aliases:{"icon":c}});}
)();
(function(){var a="Liberation Sans",b="Verdana",c="Bitstream Vera Sans",d="Lucida Grande",e="Tahoma",f="monospace",g="qx.theme.classic.Font",h="Courier New",i="DejaVu Sans Mono";qx.Theme.define(g,{fonts:{"default":{size:11,lineHeight:1.4,family:[d,e,b,c,a]},"bold":{size:11,lineHeight:1.4,family:[d,e,b,c,a],bold:true},"small":{size:10,lineHeight:1.4,family:[d,e,b,c,a]},"monospace":{size:11,lineHeight:1.4,family:[i,h,f]}}});}
)();
(function(){var a="black",b="border-focused-light",c="border-dark",d="solid",e="dotted",f="effect",g="border-separator",h="border-focused-dark",i="tooltip-text",j="border-focused-light-shadow",k="table-header-border",l="table-focus-indicator",m="outset",n="border-focused-dark-shadow",o="qx/decoration/Classic",p="border-lead",q="border-dark-shadow",r="#FFF",s="main",t="invalid",u="shadow",v="border-light-shadow",w="qx.theme.classic.Decoration",x="white",y="gray",z="border-light";qx.Theme.define(w,{aliases:{decoration:o},decorations:{"main":{style:{width:1,color:c}},"keyboard-focus":{style:{width:1,color:a,style:e}},"inset":{style:{width:1,innerWidth:1,color:[q,z,z,q],innerColor:[c,v,v,c]}},"outset":{style:{width:1,innerWidth:1,color:[v,c,c,v],innerColor:[z,q,q,z]}},"groove":{style:{width:1,innerWidth:1,color:[q,z,z,q],innerColor:[z,q,q,z]}},"ridge":{style:{width:1,innerWidth:1,color:[z,q,q,z],innerColor:[q,z,z,q]}},"inset-thin":{style:{width:1,color:[q,z,z,q]}},"outset-thin":{style:{width:1,color:[z,q,q,z]}},"focused-inset":{style:{width:1,innerWidth:1,color:[n,b,b,n],innerColor:[h,j,j,h]}},"focused-outset":{style:{width:1,innerWidth:1,color:[j,h,h,j],innerColor:[b,n,n,b]}},"border-invalid":{style:{width:1,innerWidth:1,color:[q,z,z,q],innerColor:t}},"separator-horizontal":{style:{widthLeft:1,colorLeft:g}},"separator-vertical":{style:{widthTop:1,colorTop:g}},"window":{include:m,style:{shadowLength:1,shadowBlurRadius:2,shadowColor:u}},"lead-item":{style:{width:1,style:e,color:p}},"tooltip":{style:{width:1,color:i,shadowLength:1,shadowBlurRadius:5,shadowColor:u}},"tooltip-error":{style:{width:1,color:i,shadowLength:1,shadowBlurRadius:5,shadowColor:u}},"popup":{include:s,style:{shadowLength:2,shadowBlurRadius:2,shadowColor:u}},"toolbar-separator":{style:{widthLeft:1,colorLeft:q}},"toolbar-part-handle":{style:{width:1,style:d,colorTop:x,colorLeft:x,colorRight:q,colorBottom:q}},"menu":{include:m,style:{shadowLength:1,shadowBlurRadius:3,shadowColor:u}},"menu-separator":{style:{widthTop:1,widthBottom:1,colorTop:c,colorBottom:z}},"datechooser-date-pane":{style:{widthTop:1,colorTop:y,style:d}},"datechooser-weekday":{style:{widthBottom:1,colorBottom:y,style:d}},"datechooser-week":{style:{widthRight:1,colorRight:y,style:d}},"datechooser-week-header":{style:{widthBottom:1,colorBottom:y,widthRight:1,colorRight:y,style:d}},"tabview-page-button-top":{style:{width:1,color:[v,c,c,v],innerWidth:1,innerColor:[z,q,q,z],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{style:{width:1,color:[v,c,c,v],innerWidth:1,innerColor:[z,q,q,z],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{style:{width:1,color:[v,c,c,v],innerWidth:1,innerColor:[z,q,q,z],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{style:{width:1,color:[v,c,c,v],innerWidth:1,innerColor:[z,q,q,z],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{style:{widthTop:1,colorTop:q,styleTop:d}},"table-scroller-header":{style:{widthBottom:1,colorBottom:k,styleBottom:d}},"table-scroller-focus-indicator":{style:{width:2,color:l,style:d}},"table-header-cell":{style:{widthRight:1,colorRight:k,styleRight:d}},"table-header-cell-hovered":{style:{widthRight:1,colorRight:k,styleRight:d,widthBottom:2,colorBottom:f,styleBottom:d}},"progressbar":{style:{backgroundColor:r,width:1,color:g}}}});}
)();
(function(){var a="black",b="#888888",c="#3E6CA8",d="#3E5B97",e="#EBE9ED",f="#FFFFE1",g="#F3F8FD",h="#A7A6AA",i="#666666",j="#CBC8CD",k="#FFE0E0",l="#F4F4F4",m="#808080",n="#CCCCCC",o="#C82C2C",p="#DBEAF9",q="#BCCEE5",r="#A5BDDE",s="#7CA0CF",t="#EEE",u="#F3F0F5",v="#F6F5F7",w="#FF9999",x="qx.theme.classic.Color",y="css.rgba",z="#990000",A="#F9F8E9",B="white",C="gray",D="#DCDFE4",E="rgba(0, 0, 0, 0.4)",F="#FAFBFE",G="#AAAAAA",H="#85878C";qx.Theme.define(x,{colors:{"background":e,"background-light":u,"light-background":e,"background-focused":g,"background-focused-inner":p,"background-disabled":l,"background-selected":c,"background-field":B,"background-pane":F,"background-invalid":k,"border-lead":b,"border-light":B,"border-light-shadow":D,"border-dark-shadow":h,"border-dark":H,"border-main":H,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":s,"border-focused-dark":c,"border-separator":m,"shadow":qx.core.Environment.get(y)?E:i,"invalid":z,"border-focused-invalid":w,"text":a,"text-disabled":h,"text-selected":B,"text-focused":d,"text-placeholder":j,"tooltip":f,"tooltip-text":a,"tooltip-invalid":o,"button":e,"button-hovered":v,"button-abandoned":A,"button-checked":u,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":B,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":B,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":t,"table-column-line":t,"progressive-table-header":G,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":C,"progressive-progressbar-indicator-done":n,"progressive-progressbar-indicator-undone":B,"progressive-progressbar-percent-background":C,"progressive-progressbar-percent-text":B}});}
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
(function(){var a="Classic Windows",b="qx.theme.Classic";qx.Theme.define(b,{title:a,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});}
)();
(function(){var a="Use qx.dev.StackTrace.FORMAT_STACKTRACE instead",b="function",c="<span class='object'>",d="]:",e="&gt;",f="<span class='object' title='Object instance with hash code: ",g="FORMAT_STACK",h="string",k="level-",l="0",m="&lt;",n="<span class='offset'>",o="</span> ",p="}",q=":",r="qx.log.appender.Util",s="&amp;",t="&#39;",u="DIV",v="",w="]",x="'>",y="<span>",z="[",A=", ",B="</span>",C="\n",D="&quot;",E="<span class='type-key'>",F="{",G="</span>:<span class='type-",H="</span>: ",I=" ",J="]</span>: ",K="map",L="?",M="<span class='type-";qx.Bootstrap.define(r,{statics:{toHtml:function(V){var X=[];var T,W,O,Q;X.push(n,this.formatOffset(V.offset,6),o);if(V.object){if(V.clazz){X.push(f+V.object+x,V.clazz.classname,z,V.object,J);}
else {var N=V.win.qx.core.ObjectRegistry.fromHashCode(V.object,true);if(N){X.push(f+N.$$hash+x,N.classname,z,N.$$hash,J);}
;}
;}
else if(V.clazz){X.push(c+V.clazz.classname,H);}
;var P=V.items;for(var i=0,U=P.length;i<U;i++ ){T=P[i];W=T.text;if(W instanceof Array){var Q=[];for(var j=0,S=W.length;j<S;j++ ){O=W[j];if(typeof O===h){Q.push(y+this.escapeHTML(O)+B);}
else if(O.key){Q.push(E+O.key+G+O.type+x+this.escapeHTML(O.text)+B);}
else {Q.push(M+O.type+x+this.escapeHTML(O.text)+B);}
;}
;X.push(M+T.type+x);if(T.type===K){X.push(F,Q.join(A),p);}
else {X.push(z,Q.join(A),w);}
;X.push(B);}
else {X.push(M+T.type+x+this.escapeHTML(W)+o);}
;}
;var R=document.createElement(u);R.innerHTML=X.join(v);R.className=k+V.level;return R;}
,formatOffset:function(bb,length){var ba=bb.toString();var bc=(length||6)-ba.length;var Y=v;for(var i=0;i<bc;i++ ){Y+=l;}
;return Y+ba;}
,escapeHTML:function(bd){return String(bd).replace(/[<>&"']/g,this.__nA);}
,__nA:function(bf){var be={"<":m,">":e,"&":s,"'":t,'"':D};return be[bf]||L;}
,toText:function(bg){return this.toTextArray(bg).join(I);}
,toTextArray:function(bn){var bp=[];bp.push(this.formatOffset(bn.offset,6));if(bn.object){if(bn.clazz){bp.push(bn.clazz.classname+z+bn.object+d);}
else {var bh=bn.win.qx.core.ObjectRegistry.fromHashCode(bn.object,true);if(bh){bp.push(bh.classname+z+bh.$$hash+d);}
;}
;}
else if(bn.clazz){bp.push(bn.clazz.classname+q);}
;var bi=bn.items;var bl,bo;for(var i=0,bm=bi.length;i<bm;i++ ){bl=bi[i];bo=bl.text;if(bl.trace&&bl.trace.length>0){if(typeof (this.FORMAT_STACK)==b){qx.log.Logger.deprecatedConstantWarning(qx.log.appender.Util,g,a);bo+=C+this.FORMAT_STACK(bl.trace);}
else {bo+=C+bl.trace;}
;}
;if(bo instanceof Array){var bj=[];for(var j=0,bk=bo.length;j<bk;j++ ){bj.push(bo[j].text);}
;if(bl.type===K){bp.push(F,bj.join(A),p);}
else {bp.push(z,bj.join(A),w);}
;}
else {bp.push(bo);}
;}
;return bp;}
}});}
)();
(function(){var a="html.console",b="qx.log.appender.Native",c="log";qx.Bootstrap.define(b,{statics:{process:function(d){if(qx.core.Environment.get(a)){var f=console[d.level]?d.level:c;if(console[f]){var e=qx.log.appender.Util.toText(d);console[f](e);}
;}
;}
},defer:function(g){qx.log.Logger.register(g);}
});}
)();
(function(){var a="qx.event.handler.UserAction";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);this.__dr=b;this.__cr=b.getWindow();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dr:null,__cr:null,canHandleEvent:function(d,c){}
,registerEvent:function(g,f,e){}
,unregisterEvent:function(j,i,h){}
},destruct:function(){this.__dr=this.__cr=null;}
,defer:function(k){qx.event.Registration.addHandler(k);}
});}
)();
(function(){var a="mshtml",b="engine.name",c="keypress",d="useraction",e="win",f="text",g="keyinput",h="os.name",i="webkit",j="input",k="gecko",l="off",m="keydown",n="autoComplete",o="keyup",p="qx.event.handler.Keyboard";qx.Class.define(p,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(q){qx.core.Object.call(this);this.__dr=q;this.__cr=q.getWindow();if((qx.core.Environment.get(b)==k)){this.__dU=this.__cr;}
else {this.__dU=this.__cr.document.documentElement;}
;this.__ky={};this._initKeyObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__kz:null,__dr:null,__cr:null,__dU:null,__ky:null,__kA:null,__kB:null,__kC:null,canHandleEvent:function(s,r){}
,registerEvent:function(v,u,t){}
,unregisterEvent:function(y,x,w){}
,_fireInputEvent:function(A,z){var B=this.__kD();if(B&&B.offsetWidth!=0){var event=qx.event.Registration.createEvent(g,qx.event.type.KeyInput,[A,B,z]);this.__dr.dispatchEvent(B,event);}
;if(this.__cr){qx.event.Registration.fireEvent(this.__cr,d,qx.event.type.Data,[g]);}
;}
,_fireSequenceEvent:function(D,F,C){var E=this.__kD();var G=D.keyCode;var event=qx.event.Registration.createEvent(F,qx.event.type.KeySequence,[D,E,C]);this.__dr.dispatchEvent(E,event);if(qx.core.Environment.get(b)==a||qx.core.Environment.get(b)==i){if(F==m&&event.getDefaultPrevented()){if(!qx.event.util.Keyboard.isNonPrintableKeyCode(G)&&!this._emulateKeyPress[G]){this._fireSequenceEvent(D,c,C);}
;}
;}
;if(this.__cr){qx.event.Registration.fireEvent(this.__cr,d,qx.event.type.Data,[F]);}
;}
,__kD:function(){var H=this.__dr.getHandler(qx.event.handler.Focus);var I=H.getActive();if(!I||I.offsetWidth==0){I=H.getFocus();}
;if(!I||I.offsetWidth==0){I=this.__dr.getWindow().document.body;}
;return I;}
,_initKeyObserver:function(){this.__kz=qx.lang.Function.listener(this.__kE,this);this.__kC=qx.lang.Function.listener(this.__kG,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dU,o,this.__kz);Event.addNativeListener(this.__dU,m,this.__kz);Event.addNativeListener(this.__dU,c,this.__kC);}
,_stopKeyObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__dU,o,this.__kz);Event.removeNativeListener(this.__dU,m,this.__kz);Event.removeNativeListener(this.__dU,c,this.__kC);for(var K in (this.__kB||{})){var J=this.__kB[K];Event.removeNativeListener(J.target,c,J.callback);}
;delete (this.__kB);}
,__kE:qx.event.GlobalError.observeMethod(qx.core.Environment.select(b,{"mshtml":function(N){N=window.event||N;var O=N.keyCode;var M=0;var L=N.type;if(!(this.__ky[O]==m&&L==m)){this._idealKeyHandler(O,M,L,N);}
;if(L==m){if(qx.event.util.Keyboard.isNonPrintableKeyCode(O)||this._emulateKeyPress[O]){this._idealKeyHandler(O,M,c,N);}
;}
;this.__ky[O]=L;}
,"gecko":function(Q){var S=0;var U=Q.keyCode;var T=Q.type;var R=qx.event.util.Keyboard;if(qx.core.Environment.get(h)==e){var P=U?R.keyCodeToIdentifier(U):R.charCodeToIdentifier(S);if(!(this.__ky[P]==m&&T==m)){this._idealKeyHandler(U,S,T,Q);}
;this.__ky[P]=T;}
else {this._idealKeyHandler(U,S,T,Q);}
;this.__kF(Q.target,T,U);}
,"webkit":function(X){var Y=0;var W=0;var V=X.type;Y=X.keyCode;this._idealKeyHandler(Y,W,V,X);if(V==m){if(qx.event.util.Keyboard.isNonPrintableKeyCode(Y)||this._emulateKeyPress[Y]){this._idealKeyHandler(Y,W,c,X);}
;}
;this.__ky[Y]=V;}
,"opera":function(ba){this.__kA=ba.keyCode;this._idealKeyHandler(ba.keyCode,0,ba.type,ba);}
})),__kF:qx.core.Environment.select(b,{"gecko":function(bc,be,bf){if(be===m&&(bf==33||bf==34||bf==38||bf==40)&&bc.type==f&&bc.tagName.toLowerCase()===j&&bc.getAttribute(n)!==l){if(!this.__kB){this.__kB={};}
;var bb=qx.core.ObjectRegistry.toHashCode(bc);if(this.__kB[bb]){return;}
;var self=this;this.__kB[bb]={target:bc,callback:function(bg){qx.bom.Event.stopPropagation(bg);self.__kG(bg);}
};var bd=qx.event.GlobalError.observeMethod(this.__kB[bb].callback);qx.bom.Event.addNativeListener(bc,c,bd);}
;}
,"default":null}),__kG:qx.event.GlobalError.observeMethod(qx.core.Environment.select(b,{"mshtml":function(bh){bh=window.event||bh;if(this._charCode2KeyCode[bh.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bh.keyCode],0,bh.type,bh);}
else {this._idealKeyHandler(0,bh.keyCode,bh.type,bh);}
;}
,"gecko":function(bi){var bj=bi.charCode;var bk=bi.type;this._idealKeyHandler(bi.keyCode,bj,bk,bi);}
,"webkit":function(bl){if(this._charCode2KeyCode[bl.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bl.keyCode],0,bl.type,bl);}
else {this._idealKeyHandler(0,bl.keyCode,bl.type,bl);}
;}
,"opera":function(bm){var bo=bm.keyCode;var bn=bm.type;if(bo!=this.__kA){this._idealKeyHandler(0,this.__kA,bn,bm);}
else {if(qx.event.util.Keyboard.keyCodeToIdentifierMap[bm.keyCode]){this._idealKeyHandler(bm.keyCode,0,bm.type,bm);}
else {this._idealKeyHandler(0,bm.keyCode,bm.type,bm);}
;}
;}
})),_idealKeyHandler:function(bs,bq,bt,br){var bp;if(bs||(!bs&&!bq)){bp=qx.event.util.Keyboard.keyCodeToIdentifier(bs);this._fireSequenceEvent(br,bt,bp);}
else {bp=qx.event.util.Keyboard.charCodeToIdentifier(bq);this._fireSequenceEvent(br,c,bp);this._fireInputEvent(br,bq);}
;}
,_emulateKeyPress:qx.core.Environment.select(b,{"mshtml":{'8':true,'9':true},"webkit":{'8':true,'9':true,'27':true},"default":{}}),_identifierToKeyCode:function(bu){return qx.event.util.Keyboard.identifierToKeyCodeMap[bu]||bu.charCodeAt(0);}
},destruct:function(){this._stopKeyObserver();this.__kA=this.__dr=this.__cr=this.__dU=this.__ky=null;}
,defer:function(bv,bw){qx.event.Registration.addHandler(bv);if((qx.core.Environment.get(b)==a)||qx.core.Environment.get(b)==i){bw._charCode2KeyCode={'13':13,'27':27};}
;}
});}
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
(function(){var a="os.name",b="opera",c="engine.name",d="qx.event.type.Dom",e="osx";qx.Class.define(d,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(f,g){var g=qx.event.type.Native.prototype._cloneNativeEvent.call(this,f,g);g.shiftKey=f.shiftKey;g.ctrlKey=f.ctrlKey;g.altKey=f.altKey;g.metaKey=f.metaKey;return g;}
,getModifiers:function(){var h=0;var i=this._native;if(i.shiftKey){h|=qx.event.type.Dom.SHIFT_MASK;}
;if(i.ctrlKey){h|=qx.event.type.Dom.CTRL_MASK;}
;if(i.altKey){h|=qx.event.type.Dom.ALT_MASK;}
;if(i.metaKey){h|=qx.event.type.Dom.META_MASK;}
;return h;}
,isCtrlPressed:function(){return this._native.ctrlKey;}
,isShiftPressed:function(){return this._native.shiftKey;}
,isAltPressed:function(){return this._native.altKey;}
,isMetaPressed:function(){return this._native.metaKey;}
,isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(a)==e&&qx.core.Environment.get(c)!=b){return this._native.metaKey;}
else {return this._native.ctrlKey;}
;}
}});}
)();
(function(){var a="qx.event.type.KeySequence";qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(c,d,b){qx.event.type.Dom.prototype.init.call(this,c,d,null,true,true);this._keyCode=c.keyCode;this._identifier=b;return this;}
,clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);f._keyCode=this._keyCode;f._identifier=this._identifier;return f;}
,getKeyIdentifier:function(){return this._identifier;}
,getKeyCode:function(){return this._keyCode;}
,isPrintable:function(){return qx.event.util.Keyboard.isPrintableKeyIdentifier(this._identifier);}
}});}
)();
(function(){var a="qx.event.type.KeyInput";qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(c,d,b){qx.event.type.Dom.prototype.init.call(this,c,d,null,true,true);this._charCode=b;return this;}
,clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);f._charCode=this._charCode;return f;}
,getCharCode:function(){return this._charCode;}
,getChar:function(){return String.fromCharCode(this._charCode);}
}});}
)();
(function(){var a="selectstart",b="os.name",c="blur",d="mousedown",e="function",f="focus",g="os.version",h="qx.event.handler.Focus",i="_applyFocus",j="DOMFocusIn",k="deactivate",l="browser.name",m="textarea",n="_applyActive",o='character',p="input",q="ios",r="",s="textfield",t="qxSelectable",u="tabIndex",v="off",w="on",x="activate",y="focusin",z="mshtml",A="engine.name",B="mouseup",C="DOMFocusOut",D="focusout",E="qxKeepFocus",F="draggesture",G="qxKeepActive";qx.Class.define(h,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(H){qx.core.Object.call(this);this._manager=H;this._window=H.getWindow();this._document=this._window.document;this._root=this._document.documentElement;this._body=this._document.body;if((qx.core.Environment.get(b)==q&&parseFloat(qx.core.Environment.get(g))>6)&&(!qx.application.Inline||!qx.core.Init.getApplication() instanceof qx.application.Inline)){this.__he=true;}
;this._initObserver();}
,properties:{active:{apply:n,nullable:true},focus:{apply:i,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select(A,{"mshtml":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera":{button:1,input:1,select:1,textarea:1},"webkit":{button:1,input:1,select:1,textarea:1}})},members:{__hf:null,__hg:null,__hh:null,__hi:null,__hj:null,__hk:null,__hl:null,__hm:null,__hn:null,__ho:null,__hp:r,__hq:r,__he:false,__hr:null,canHandleEvent:function(J,I){}
,registerEvent:function(M,L,K){}
,unregisterEvent:function(P,O,N){}
,focus:function(Q){if((qx.core.Environment.get(A)==z)){window.setTimeout(function(){try{Q.focus();var R=qx.bom.Selection.get(Q);if(R.length==0&&typeof Q.createTextRange==e){var S=Q.createTextRange();S.moveStart(o,Q.value.length);S.collapse();S.select();}
;}
catch(T){}
;}
,0);}
else {try{Q.focus();}
catch(U){}
;}
;this.setFocus(Q);this.setActive(Q);}
,activate:function(V){this.setActive(V);}
,blur:function(W){try{W.blur();}
catch(X){}
;if(this.getActive()===W){this.resetActive();}
;if(this.getFocus()===W){this.resetFocus();}
;}
,deactivate:function(Y){if(this.getActive()===Y){this.resetActive();}
;}
,tryActivate:function(bb){var ba=this.__hG(bb);if(ba){this.setActive(ba);}
;}
,__cK:function(bc,be,bh,bg){var bf=qx.event.Registration;var bd=bf.createEvent(bh,qx.event.type.Focus,[bc,be,bg]);bf.dispatchEvent(bc,bd);}
,_windowFocused:true,__hs:function(){if(this._windowFocused){this._windowFocused=false;this.__cK(this._window,null,c,false);}
;}
,__ht:function(){if(!this._windowFocused){this._windowFocused=true;this.__cK(this._window,null,f,false);}
;}
,_initObserver:qx.core.Environment.select(A,{"gecko":function(){this.__hf=qx.lang.Function.listener(this.__hz,this);this.__hg=qx.lang.Function.listener(this.__hA,this);this.__hh=qx.lang.Function.listener(this.__hy,this);this.__hi=qx.lang.Function.listener(this.__hx,this);this.__hj=qx.lang.Function.listener(this.__hu,this);qx.bom.Event.addNativeListener(this._document,d,this.__hf,true);qx.bom.Event.addNativeListener(this._document,B,this.__hg,true);qx.bom.Event.addNativeListener(this._window,f,this.__hh,true);qx.bom.Event.addNativeListener(this._window,c,this.__hi,true);qx.bom.Event.addNativeListener(this._window,F,this.__hj,true);}
,"mshtml":function(){this.__hf=qx.lang.Function.listener(this.__hz,this);this.__hg=qx.lang.Function.listener(this.__hA,this);this.__hl=qx.lang.Function.listener(this.__hv,this);this.__hm=qx.lang.Function.listener(this.__hw,this);this.__hk=qx.lang.Function.listener(this.__hD,this);qx.bom.Event.addNativeListener(this._document,d,this.__hf);qx.bom.Event.addNativeListener(this._document,B,this.__hg);qx.bom.Event.addNativeListener(this._document,y,this.__hl);qx.bom.Event.addNativeListener(this._document,D,this.__hm);qx.bom.Event.addNativeListener(this._document,a,this.__hk);}
,"webkit":qx.core.Environment.select(l,{"edge":function(bi){this.__hf=qx.lang.Function.listener(this.__hz,this);this.__hg=qx.lang.Function.listener(this.__hA,this);this.__hm=qx.lang.Function.listener(this.__hw,this);this.__hl=qx.lang.Function.listener(this.__hv,this);this.__hk=qx.lang.Function.listener(this.__hD,this);qx.bom.Event.addNativeListener(this._document,d,this.__hf,true);qx.bom.Event.addNativeListener(this._document,B,this.__hg,true);qx.bom.Event.addNativeListener(this._document,a,this.__hk,false);qx.bom.Event.addNativeListener(this._document,y,this.__hl);qx.bom.Event.addNativeListener(this._document,D,this.__hm);}
,"default":function(bj){this.__hf=qx.lang.Function.listener(this.__hz,this);this.__hg=qx.lang.Function.listener(this.__hA,this);this.__hm=qx.lang.Function.listener(this.__hw,this);this.__hh=qx.lang.Function.listener(this.__hy,this);this.__hi=qx.lang.Function.listener(this.__hx,this);this.__hk=qx.lang.Function.listener(this.__hD,this);qx.bom.Event.addNativeListener(this._document,d,this.__hf,true);qx.bom.Event.addNativeListener(this._document,B,this.__hg,true);qx.bom.Event.addNativeListener(this._document,a,this.__hk,false);qx.bom.Event.addNativeListener(this._window,C,this.__hm,true);qx.bom.Event.addNativeListener(this._window,f,this.__hh,true);qx.bom.Event.addNativeListener(this._window,c,this.__hi,true);}
}),"opera":function(){this.__hf=qx.lang.Function.listener(this.__hz,this);this.__hg=qx.lang.Function.listener(this.__hA,this);this.__hl=qx.lang.Function.listener(this.__hv,this);this.__hm=qx.lang.Function.listener(this.__hw,this);qx.bom.Event.addNativeListener(this._document,d,this.__hf,true);qx.bom.Event.addNativeListener(this._document,B,this.__hg,true);qx.bom.Event.addNativeListener(this._window,j,this.__hl,true);qx.bom.Event.addNativeListener(this._window,C,this.__hm,true);}
}),_stopObserver:qx.core.Environment.select(A,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__hf,true);qx.bom.Event.removeNativeListener(this._document,B,this.__hg,true);qx.bom.Event.removeNativeListener(this._window,f,this.__hh,true);qx.bom.Event.removeNativeListener(this._window,c,this.__hi,true);qx.bom.Event.removeNativeListener(this._window,F,this.__hj,true);}
,"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__hf);qx.bom.Event.removeNativeListener(this._document,B,this.__hg);qx.bom.Event.removeNativeListener(this._document,y,this.__hl);qx.bom.Event.removeNativeListener(this._document,D,this.__hm);qx.bom.Event.removeNativeListener(this._document,a,this.__hk);}
,"webkit":qx.core.Environment.select(l,{"edge":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__hf);qx.bom.Event.removeNativeListener(this._document,B,this.__hg);qx.bom.Event.removeNativeListener(this._document,y,this.__hl);qx.bom.Event.removeNativeListener(this._document,D,this.__hm);qx.bom.Event.removeNativeListener(this._document,a,this.__hk);}
,"default":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__hf,true);qx.bom.Event.removeNativeListener(this._document,B,this.__hg,true);qx.bom.Event.removeNativeListener(this._document,a,this.__hk,false);qx.bom.Event.removeNativeListener(this._window,C,this.__hm,true);qx.bom.Event.removeNativeListener(this._window,f,this.__hh,true);qx.bom.Event.removeNativeListener(this._window,c,this.__hi,true);}
}),"opera":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__hf,true);qx.bom.Event.removeNativeListener(this._document,B,this.__hg,true);qx.bom.Event.removeNativeListener(this._window,j,this.__hl,true);qx.bom.Event.removeNativeListener(this._window,C,this.__hm,true);}
}),__hu:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"gecko":function(bk){var bl=qx.bom.Event.getTarget(bk);if(!this.__hH(bl)){qx.bom.Event.preventDefault(bk);}
;}
,"default":null})),__hv:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"mshtml":function(bn){this.__ht();var bo=qx.bom.Event.getTarget(bn);var bm=this.__hF(bo);if(bm){this.setFocus(bm);}
;this.tryActivate(bo);}
,"webkit":qx.core.Environment.select(l,{"edge":function(bq){this.__ht();var br=qx.bom.Event.getTarget(bq);var bp=this.__hF(br);if(bp){this.setFocus(bp);}
;this.tryActivate(br);}
,"default":null}),"opera":function(bs){var bt=qx.bom.Event.getTarget(bs);if(bt==this._document||bt==this._window){this.__ht();if(this.__hn){this.setFocus(this.__hn);delete this.__hn;}
;if(this.__ho){this.setActive(this.__ho);delete this.__ho;}
;}
else {this.setFocus(bt);this.tryActivate(bt);if(!this.__hH(bt)){bt.selectionStart=0;bt.selectionEnd=0;}
;}
;}
,"default":null})),__hw:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"mshtml":function(bu){var bv=qx.bom.Event.getRelatedTarget(bu);if(bv==null){this.__hs();this.resetFocus();this.resetActive();}
;}
,"webkit":qx.core.Environment.select(l,{"edge":function(bw){var bx=qx.bom.Event.getRelatedTarget(bw);if(bx==null){this.__hs();this.resetFocus();this.resetActive();}
;}
,"default":function(by){var bz=qx.bom.Event.getTarget(by);if(bz===this.getFocus()){this.resetFocus();}
;if(bz===this.getActive()){this.resetActive();}
;}
}),"opera":function(bA){var bB=qx.bom.Event.getTarget(bA);if(bB==this._document){this.__hs();this.__hn=this.getFocus();this.__ho=this.getActive();this.resetFocus();this.resetActive();}
else {if(bB===this.getFocus()){this.resetFocus();}
;if(bB===this.getActive()){this.resetActive();}
;}
;}
,"default":null})),__hx:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"gecko":function(bC){var bD=qx.bom.Event.getTarget(bC);if(bD===this._window||bD===this._document){this.__hs();this.resetActive();this.resetFocus();}
;}
,"webkit":function(bE){var bF=qx.bom.Event.getTarget(bE);if(bF===this._window||bF===this._document){this.__hs();this.__hn=this.getFocus();this.__ho=this.getActive();this.resetActive();this.resetFocus();}
;}
,"default":null})),__hy:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"gecko":function(bG){var bH=qx.bom.Event.getTarget(bG);if(bH===this._window||bH===this._document){this.__ht();bH=this._body;}
;this.setFocus(bH);this.tryActivate(bH);}
,"webkit":function(bI){var bJ=qx.bom.Event.getTarget(bI);if(bJ===this._window||bJ===this._document){this.__ht();if(this.__hn){this.setFocus(this.__hn);delete this.__hn;}
;if(this.__ho){this.setActive(this.__ho);delete this.__ho;}
;}
else {this.__hr=bI.relatedTarget;this.setFocus(bJ);this.__hr=null;this.tryActivate(bJ);}
;}
,"default":null})),__hz:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);var bK=this.__hF(bM);if(bK){if(!this.__hH(bM)){bM.unselectable=w;try{if(document.selection){document.selection.empty();}
;}
catch(bN){}
;try{bK.focus();}
catch(bO){}
;}
;}
else {qx.bom.Event.preventDefault(bL);if(!this.__hH(bM)){bM.unselectable=w;}
;}
;}
,"webkit":function(bQ){var bR=qx.bom.Event.getTarget(bQ);var bP=this.__hF(bR);if(bP){this.setFocus(bP);}
else {qx.bom.Event.preventDefault(bQ);}
;}
,"gecko":function(bT){var bU=qx.bom.Event.getTarget(bT);var bS=this.__hF(bU);if(bS){this.setFocus(bS);}
else {qx.bom.Event.preventDefault(bT);}
;}
,"opera":function(bX){var bY=qx.bom.Event.getTarget(bX);var bV=this.__hF(bY);if(!this.__hH(bY)){qx.bom.Event.preventDefault(bX);if(bV){var bW=this.getFocus();if(bW&&bW.selectionEnd){bW.selectionStart=0;bW.selectionEnd=0;bW.blur();}
;if(bV){this.setFocus(bV);}
;}
;}
else if(bV){this.setFocus(bV);}
;}
,"default":null})),__hA:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"mshtml":function(ca){var cb=qx.bom.Event.getTarget(ca);if(cb.unselectable){cb.unselectable=v;}
;this.tryActivate(this.__hC(cb));}
,"gecko":function(cc){var cd=qx.bom.Event.getTarget(cc);while(cd&&cd.offsetWidth===undefined){cd=cd.parentNode;}
;if(cd){this.tryActivate(cd);}
;}
,"webkit":function(ce){var cf=qx.bom.Event.getTarget(ce);this.tryActivate(this.__hC(cf));}
,"opera":function(cg){var ch=qx.bom.Event.getTarget(cg);this.tryActivate(this.__hC(ch));}
,"default":null})),__hB:function(ck){var cl=this.getFocus();if(cl&&ck!=cl){if(cl.nodeName.toLowerCase()===p||cl.nodeName.toLowerCase()===m){return cl;}
;var ci=qx.ui.core.Widget.getWidgetByElement(cl),cj=ci&&ci.getChildControl&&ci.getChildControl(s,true);if(cj){return cj.getContentElement().getDomElement();}
;}
;return ck;}
,__hC:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"mshtml":this.__hB,"webkit":this.__hB,"default":function(cm){return cm;}
})),__hD:qx.event.GlobalError.observeMethod(qx.core.Environment.select(A,{"mshtml":function(cn){var co=qx.bom.Event.getTarget(cn);if(!this.__hH(co)){qx.bom.Event.preventDefault(cn);}
;}
,"webkit":function(cp){var cq=qx.bom.Event.getTarget(cp);if(!this.__hH(cq)){qx.bom.Event.preventDefault(cp);}
;}
,"default":null})),__hE:function(cr){var cs=qx.bom.element.Attribute.get(cr,u);if(cs>=1){return true;}
;var ct=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;if(cs>=0&&ct[cr.tagName]){return true;}
;return false;}
,__hF:function(cu){while(cu&&cu.nodeType===1){if(cu.getAttribute(E)==w){return null;}
;if(this.__hE(cu)){return cu;}
;cu=cu.parentNode;}
;return this._body;}
,__hG:function(cv){var cw=cv;while(cv&&cv.nodeType===1){if(cv.getAttribute(G)==w){return null;}
;cv=cv.parentNode;}
;return cw;}
,__hH:function(cx){while(cx&&cx.nodeType===1){var cy=cx.getAttribute(t);if(cy!=null){return cy===w;}
;cx=cx.parentNode;}
;return true;}
,_applyActive:function(cA,cz){if(cz){this.__cK(cz,cA,k,true);}
;if(cA){this.__cK(cA,cz,x,true);}
;if(this.__he){window.scrollTo(0,0);}
;}
,_applyFocus:function(cC,cB){if(cB){this.__cK(cB,cC,D,true);}
;if(cC){this.__cK(cC,cB,y,true);}
;if(cB){this.__cK(cB,cC,c,false);}
;if(cC){this.__cK(cC,cB||this.__hr,f,false);}
;}
},destruct:function(){this._stopObserver();this._manager=this._window=this._document=this._root=this._body=this.__hI=this.__hr=null;}
,defer:function(cE){qx.event.Registration.addHandler(cE);var cF=cE.FOCUSABLE_ELEMENTS;for(var cD in cF){cF[cD.toUpperCase()]=1;}
;}
});}
)();
(function(){var a="changeWidth",b="Wrong 'width' argument. ",c="Boolean",d="allowShrinkY",e="_applyAlign",f="_applyStretching",g="Something went wrong with the layout of ",h="bottom",i="Wrong 'left' argument. ",j="Integer",k="changeTheme",l="_applyDimension",m="baseline",n="qx.debug",o="marginBottom",p="qx.ui.core.LayoutItem",q="center",r="marginTop",s="!",t="allowGrowX",u="shorthand",v="middle",w="marginLeft",x="qx.dyntheme",y="allowShrinkX",z="top",A="right",B="marginRight",C="abstract",D="Wrong 'top' argument. ",E="Wrong 'height' argument. ",F="_applyMargin",G="allowGrowY",H="left",I="changeHeight";qx.Class.define(p,{type:C,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);if(qx.core.Environment.get(x)){qx.theme.manager.Meta.getInstance().addListener(k,this._onChangeTheme,this);}
;}
,properties:{minWidth:{check:j,nullable:true,apply:l,init:null,themeable:true},width:{check:j,event:a,nullable:true,apply:l,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:l,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:l,init:null,themeable:true},height:{check:j,event:I,nullable:true,apply:l,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:l,init:null,themeable:true},allowGrowX:{check:c,apply:f,init:true,themeable:true},allowShrinkX:{check:c,apply:f,init:true,themeable:true},allowGrowY:{check:c,apply:f,init:true,themeable:true},allowShrinkY:{check:c,apply:f,init:true,themeable:true},allowStretchX:{group:[t,y],mode:u,themeable:true},allowStretchY:{group:[G,d],mode:u,themeable:true},marginTop:{check:j,init:0,apply:F,themeable:true},marginRight:{check:j,init:0,apply:F,themeable:true},marginBottom:{check:j,init:0,apply:F,themeable:true},marginLeft:{check:j,init:0,apply:F,themeable:true},margin:{group:[r,B,o,w],mode:u,themeable:true},alignX:{check:[H,q,A],nullable:true,apply:e,themeable:true},alignY:{check:[z,v,h,m],nullable:true,apply:e,themeable:true}},members:{_onChangeTheme:qx.core.Environment.select(x,{"true":function(){var L=qx.util.PropertyUtil.getAllProperties(this.constructor);for(var name in L){var K=L[name];if(K.themeable){var J=qx.util.PropertyUtil.getUserValue(this,name);if(J==null){qx.util.PropertyUtil.resetThemed(this,name);}
;}
;}
;}
,"false":null}),__eV:null,__eW:null,__eX:null,__eY:null,__fa:null,__fb:null,__fc:null,getBounds:function(){return this.__fb||this.__eW||null;}
,clearSeparators:function(){}
,renderSeparator:function(M,N){}
,renderLayout:function(U,top,R,Q){if(this.isDisposed()){return null;}
;if(qx.core.Environment.get(n)){var S=g+this.toString()+s;this.assertInteger(U,i+S);this.assertInteger(top,D+S);this.assertInteger(R,b+S);this.assertInteger(Q,E+S);}
;var P=null;if(this.getHeight()==null&&this._hasHeightForWidth()){var P=this._getHeightForWidth(R);}
;if(P!=null&&P!==this.__eV){this.__eV=P;qx.ui.core.queue.Layout.add(this);return null;}
;var O=this.__eW;if(!O){O=this.__eW={};}
;var T={};if(U!==O.left||top!==O.top){T.position=true;O.left=U;O.top=top;}
;if(R!==O.width||Q!==O.height){T.size=true;O.width=R;O.height=Q;}
;if(this.__eX){T.local=true;delete this.__eX;}
;if(this.__fa){T.margin=true;delete this.__fa;}
;return T;}
,isExcluded:function(){return false;}
,hasValidLayout:function(){return !this.__eX;}
,scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);}
,invalidateLayoutCache:function(){this.__eX=true;this.__eY=null;}
,getSizeHint:function(V){var W=this.__eY;if(W){return W;}
;if(V===false){return null;}
;W=this.__eY=this._computeSizeHint();if(this._hasHeightForWidth()&&this.__eV&&this.getHeight()==null){W.height=this.__eV;}
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
,_applyMargin:function(){this.__fa=true;var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}
;}
,_applyAlign:function(){var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}
;}
,_applyDimension:function(){qx.ui.core.queue.Layout.add(this);}
,_applyStretching:function(){qx.ui.core.queue.Layout.add(this);}
,hasUserBounds:function(){return !!this.__fb;}
,setUserBounds:function(bi,top,bh,bj){this.__fb={left:bi,top:top,width:bh,height:bj};qx.ui.core.queue.Layout.add(this);}
,resetUserBounds:function(){delete this.__fb;qx.ui.core.queue.Layout.add(this);}
,__fd:{},setLayoutProperties:function(bm){if(bm==null){return;}
;var bk=this.__fc;if(!bk){bk=this.__fc={};}
;var parent=this.getLayoutParent();if(parent){parent.updateLayoutProperties(bm);}
;for(var bl in bm){if(bm[bl]==null){delete bk[bl];}
else {bk[bl]=bm[bl];}
;}
;}
,getLayoutProperties:function(){return this.__fc||this.__fd;}
,clearLayoutProperties:function(){delete this.__fc;}
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
,clone:function(){var bq=qx.core.Object.prototype.clone.call(this);var br=this.__fc;if(br){bq.__fc=qx.lang.Object.clone(br);}
;return bq;}
},destruct:function(){if(qx.core.Environment.get(x)){qx.theme.manager.Meta.getInstance().removeListener(k,this._onChangeTheme,this);}
;this.$$parent=this.$$subparent=this.__fc=this.__eW=this.__fb=this.__eY=null;}
});}
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
(function(){var a="qx.ui.core.queue.Visibility",b="visibility";qx.Class.define(a,{statics:{__fe:[],__ff:{},__dh:{},remove:function(c){if(this.__ff[c.$$hash]){delete this.__ff[c.$$hash];qx.lang.Array.remove(this.__fe,c);}
;delete this.__dh[c.$$hash];}
,isVisible:function(d){return this.__dh[d.$$hash]||false;}
,__fg:function(f){var h=this.__dh;var g=f.$$hash;var e;if(f.isExcluded()){e=false;}
else {var parent=f.$$parent;if(parent){e=this.__fg(parent);}
else {e=f.isRootWidget();}
;}
;return h[g]=e;}
,add:function(j){if(this.__ff[j.$$hash]){return;}
;this.__fe.unshift(j);this.__ff[j.$$hash]=j;qx.ui.core.queue.Manager.scheduleFlush(b);}
,flush:function(){var n=this.__fe;var o=this.__dh;for(var i=n.length-1;i>=0;i-- ){var m=n[i].$$hash;if(o[m]!=null){n[i].addChildrenToQueue(n);}
;}
;var k={};for(var i=n.length-1;i>=0;i-- ){var m=n[i].$$hash;k[m]=o[m];o[m]=null;}
;for(var i=n.length-1;i>=0;i-- ){var l=n[i];var m=l.$$hash;n.splice(i,1);if(o[m]==null){this.__fg(l);}
;if(o[m]&&o[m]!=k[m]){l.checkAppearanceNeeds();}
;}
;this.__fe=[];this.__ff={};}
}});}
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
(function(){var a="css.animation",b="translate",c="rotate",d="skew",e="scale",f="qx.bom.element.Animation";qx.Bootstrap.define(f,{statics:{animate:function(h,k,g){var j=qx.bom.element.Animation.__fK(h,k.keyFrames);if(qx.core.Environment.get(a)&&j){return qx.bom.element.AnimationCss.animate(h,k,g);}
else {return qx.bom.element.AnimationJs.animate(h,k,g);}
;}
,animateReverse:function(m,o,l){var n=qx.bom.element.Animation.__fK(m,o.keyFrames);if(qx.core.Environment.get(a)&&n){return qx.bom.element.AnimationCss.animateReverse(m,o,l);}
else {return qx.bom.element.AnimationJs.animateReverse(m,o,l);}
;}
,__fK:function(p,t){var r=[];for(var v in t){var s=t[v];for(var u in s){if(r.indexOf(u)==-1){r.push(u);}
;}
;}
;var q=[e,c,d,b];for(var i=0;i<r.length;i++ ){var u=qx.lang.String.camelCase(r[i]);if(!(u in p.style)){if(q.indexOf(r[i])!=-1){continue;}
;if(qx.bom.Style.getPropertyName(u)){continue;}
;return false;}
;}
;return true;}
}});}
)();
(function(){var c="cm",d="mm",e="0",f="pt",g="pc",h="",k="%",l="em",m="qx.bom.element.AnimationJs",n="infinite",o="#",p="in",q="px",r="start",s="end",t="ex",u=";",v="undefined",w="iteration",y="string",z=":";qx.Bootstrap.define(m,{statics:{__fL:30,__fM:[k,p,c,d,l,t,f,g,q],__fN:{"scale":true,"rotate":true,"skew":true,"translate":true},animate:function(B,C,A){return this._animate(B,C,A,false);}
,animateReverse:function(E,F,D){return this._animate(E,F,D,true);}
,_animate:function(G,Q,P,I){if(G.$$animation){return G.$$animation;}
;Q=qx.lang.Object.clone(Q,true);if(P==undefined){P=Q.duration;}
;var L=Q.keyFrames;var J=this.__fW(L);var K=this.__fV(P,J);var N=parseInt(P/K,10);this.__fO(L,G);var O=this.__fQ(N,K,J,L,P,Q.timing);var H=new qx.bom.element.AnimationHandle();H.jsAnimation=true;if(I){O.reverse();H.reverse=true;}
;H.desc=Q;H.el=G;H.delta=O;H.stepTime=K;H.steps=N;G.$$animation=H;H.i=0;H.initValues={};H.repeatSteps=this.__fT(N,Q.repeat);var M=Q.delay||0;var self=this;H.delayId=window.setTimeout(function(){H.delayId=null;self.play(H);}
,M);return H;}
,__fO:function(V,R){var Y={};for(var U in V){for(var name in V[U]){var S=qx.bom.Style.getPropertyName(name);if(S&&S!=name){var X=qx.bom.Style.getCssName(S);V[U][X]=V[U][name];delete V[U][name];name=X;}
;if(Y[name]==undefined){var W=V[U][name];if(typeof W==y){Y[name]=this.__fR(W);}
else {Y[name]=h;}
;}
;}
;}
;for(var U in V){var T=V[U];for(var name in Y){if(T[name]==undefined){if(name in R.style){if(window.getComputedStyle){T[name]=getComputedStyle(R,null)[name];}
else {T[name]=R.style[name];}
;}
else {T[name]=R[name];}
;if(T[name]===h&&this.__fM.indexOf(Y[name])!=-1){T[name]=e+Y[name];}
;}
;}
;}
;}
,__fP:function(bb){bb=qx.lang.Object.clone(bb);var bc;for(var name in bb){if(name in this.__fN){if(!bc){bc={};}
;bc[name]=bb[name];delete bb[name];}
;}
;if(bc){var ba=qx.bom.element.Transform.getCss(bc).split(z);if(ba.length>1){bb[ba[0]]=ba[1].replace(u,h);}
;}
;return bb;}
,__fQ:function(bw,bh,bo,bi,be,bq){var bp=new Array(bw);var bm=1;bp[0]=this.__fP(bi[0]);var bt=bi[0];var bj=bi[bo[bm]];var bf=Math.floor(bo[bm]/(bh/be*100));var bs=1;for(var i=1;i<bp.length;i++ ){if(i*bh/be*100>bo[bm]){bt=bj;bm++ ;bj=bi[bo[bm]];bf=Math.floor(bo[bm]/(bh/be*100))-bf;bs=1;}
;bp[i]={};var bd;for(var name in bj){var br=bj[name]+h;if(name in this.__fN){if(!bd){bd={};}
;if(qx.Bootstrap.isArray(bt[name])){if(!qx.Bootstrap.isArray(bj[name])){bj[name]=[bj[name]];}
;bd[name]=[];for(var j=0;j<bj[name].length;j++ ){var bu=bj[name][j]+h;var x=bs/bf;bd[name][j]=this.__fS(bu,bt[name],bq,x);}
;}
else {var x=bs/bf;bd[name]=this.__fS(br,bt[name],bq,x);}
;}
else if(br.charAt(0)==o){var bl=qx.util.ColorUtil.cssStringToRgb(bt[name]);var bk=qx.util.ColorUtil.cssStringToRgb(br);var bg=[];for(var j=0;j<bl.length;j++ ){var bv=bl[j]-bk[j];var x=bs/bf;var bn=qx.bom.AnimationFrame.calculateTiming(bq,x);bg[j]=parseInt(bl[j]-bv*bn,10);}
;bp[i][name]=qx.util.ColorUtil.rgbToHexString(bg);}
else if(!isNaN(parseFloat(br))){var x=bs/bf;bp[i][name]=this.__fS(br,bt[name],bq,x);}
else {bp[i][name]=bt[name]+h;}
;}
;if(bd){var bx=qx.bom.element.Transform.getCss(bd).split(z);if(bx.length>1){bp[i][bx[0]]=bx[1].replace(u,h);}
;}
;bs++ ;}
;bp[bp.length-1]=this.__fP(bi[100]);return bp;}
,__fR:function(by){return by.substring((parseFloat(by)+h).length,by.length);}
,__fS:function(bC,bB,bz,x){var bA=parseFloat(bC)-parseFloat(bB);return (parseFloat(bB)+bA*qx.bom.AnimationFrame.calculateTiming(bz,x))+this.__fR(bC);}
,play:function(bD){bD.emit(r,bD.el);var bE=window.setInterval(function(){bD.repeatSteps-- ;var bF=bD.delta[bD.i%bD.steps];if(bD.i===0){for(var name in bF){if(bD.initValues[name]===undefined){if(bD.el[name]!==undefined){bD.initValues[name]=bD.el[name];}
else if(qx.bom.element.Style){bD.initValues[name]=qx.bom.element.Style.get(bD.el,qx.lang.String.camelCase(name));}
else {bD.initValues[name]=bD.el.style[qx.lang.String.camelCase(name)];}
;}
;}
;}
;qx.bom.element.AnimationJs.__fU(bD.el,bF);bD.i++ ;if(bD.i%bD.steps==0){bD.emit(w,bD.el);if(bD.desc.alternate){bD.delta.reverse();}
;}
;if(bD.repeatSteps<0){qx.bom.element.AnimationJs.stop(bD);}
;}
,bD.stepTime);bD.animationId=bE;return bD;}
,pause:function(bG){window.clearInterval(bG.animationId);bG.animationId=null;return bG;}
,stop:function(bK){var bJ=bK.desc;var bH=bK.el;var bI=bK.initValues;if(bK.animationId){window.clearInterval(bK.animationId);}
;if(bK.delayId){window.clearTimeout(bK.delayId);}
;if(bH==undefined){return bK;}
;var bL=bJ.keep;if(bL!=undefined&&!bK.stopped){if(bK.reverse||(bJ.alternate&&bJ.repeat&&bJ.repeat%2==0)){bL=100-bL;}
;this.__fU(bH,bJ.keyFrames[bL]);}
else {this.__fU(bH,bI);}
;bH.$$animation=null;bK.el=null;bK.ended=true;bK.animationId=null;bK.emit(s,bH);return bK;}
,__fT:function(bN,bM){if(bM==undefined){return bN;}
;if(bM==n){return Number.MAX_VALUE;}
;return bN*bM;}
,__fU:function(bP,bO){for(var bQ in bO){if(bO[bQ]===undefined){continue;}
;if(typeof bP.style[bQ]===v&&bQ in bP){bP[bQ]=bO[bQ];continue;}
;var name=qx.bom.Style.getPropertyName(bQ)||bQ;if(qx.bom.element.Style){qx.bom.element.Style.set(bP,name,bO[bQ]);}
else {bP.style[name]=bO[bQ];}
;}
;}
,__fV:function(bT,bR){var bU=100;for(var i=0;i<bR.length-1;i++ ){bU=Math.min(bU,bR[i+1]-bR[i]);}
;var bS=bT*bU/100;while(bS>this.__fL){bS=bS/2;}
;return Math.round(bS);}
,__fW:function(bW){var bV=Object.keys(bW);for(var i=0;i<bV.length;i++ ){bV[i]=parseInt(bV[i],10);}
;bV.sort(function(a,b){return a-b;}
);return bV;}
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
else if(this.isRgbaString(y)){return this.__fY(y);}
else if(this.isRgbString(y)){return this.__fX();}
else if(this.isHex3String(y)){return this.__ga();}
else if(this.isHex6String(y)){return this.__gb();}
;throw new Error(a+y);}
,cssStringToRgb:function(z){if(this.isNamedColor(z)){return this.NAMED[z];}
else if(this.isSystemColor(z)){throw new Error(e+z);}
else if(this.isRgbString(z)){return this.__fX();}
else if(this.isRgbaString(z)){return this.__fY();}
else if(this.isHex3String(z)){return this.__ga();}
else if(this.isHex6String(z)){return this.__gb();}
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
,__fX:function(){var L=parseInt(RegExp.$1,10);var K=parseInt(RegExp.$2,10);var J=parseInt(RegExp.$3,10);return [L,K,J];}
,__fY:function(){var P=parseInt(RegExp.$1,10);var O=parseInt(RegExp.$2,10);var M=parseInt(RegExp.$3,10);var N=parseFloat(RegExp.$4,10);if(P===0&&O===0&M===0&&N===0){return [-1,-1,-1];}
;return [P,O,M];}
,__ga:function(){var S=parseInt(RegExp.$1,16)*17;var R=parseInt(RegExp.$2,16)*17;var Q=parseInt(RegExp.$3,16)*17;return [S,R,Q];}
,__gb:function(){var V=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);var U=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);var T=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);return [V,U,T];}
,hex3StringToRgb:function(W){if(this.isHex3String(W)){return this.__ga(W);}
;throw new Error(m+W);}
,hex3StringToHex6String:function(X){if(this.isHex3String(X)){return this.rgbToHexString(this.hex3StringToRgb(X));}
;return X;}
,hex6StringToRgb:function(Y){if(this.isHex6String(Y)){return this.__gb(Y);}
;throw new Error(q+Y);}
,hexStringToRgb:function(ba){if(this.isHex3String(ba)){return this.__ga(ba);}
;if(this.isHex6String(ba)){return this.__gb(ba);}
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
(function(){var a="backface-visibility",b="css.transform.3d",c=") ",d="px",e="scale",f="Z",g="X",h=", ",j="visible",k=":",l="3d",m="name",n="",o="origin",p="(",q="qx.bom.element.Transform",r="perspective",s="Y",t="css.transform",u="translate",v="perspective-origin",w="hidden",x=";",y=" ",z="style";qx.Bootstrap.define(q,{statics:{__gc:qx.core.Environment.get(t),transform:function(A,C){var D=this.getTransformValue(C);if(this.__gc!=null){var B=this.__gc[m];A.style[B]=D;}
;}
,translate:function(E,F){this.transform(E,{translate:F});}
,scale:function(G,H){this.transform(G,{scale:H});}
,rotate:function(I,J){this.transform(I,{rotate:J});}
,skew:function(K,L){this.transform(K,{skew:L});}
,getCss:function(N){var O=this.getTransformValue(N);if(this.__gc!=null){var M=this.__gc[m];return qx.bom.Style.getCssName(M)+k+O+x;}
;return n;}
,setOrigin:function(P,Q){if(this.__gc!=null){P.style[this.__gc[o]]=Q;}
;}
,getOrigin:function(R){if(this.__gc!=null){return R.style[this.__gc[o]];}
;return n;}
,setStyle:function(S,T){if(this.__gc!=null){S.style[this.__gc[z]]=T;}
;}
,getStyle:function(U){if(this.__gc!=null){return U.style[this.__gc[z]];}
;return n;}
,setPerspective:function(V,W){if(this.__gc!=null){V.style[this.__gc[r]]=W+d;}
;}
,getPerspective:function(X){if(this.__gc!=null){return X.style[this.__gc[r]];}
;return n;}
,setPerspectiveOrigin:function(Y,ba){if(this.__gc!=null){Y.style[this.__gc[v]]=ba;}
;}
,getPerspectiveOrigin:function(bb){if(this.__gc!=null){var bc=bb.style[this.__gc[v]];if(bc!=n){return bc;}
else {var be=bb.style[this.__gc[v]+g];var bd=bb.style[this.__gc[v]+s];if(be!=n){return be+y+bd;}
;}
;}
;return n;}
,setBackfaceVisibility:function(bf,bg){if(this.__gc!=null){bf.style[this.__gc[a]]=bg?j:w;}
;}
,getBackfaceVisibility:function(bh){if(this.__gc!=null){return bh.style[this.__gc[a]]==j;}
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
(function(){var a="css.animation",b="Element",c="",d="qx.bom.element.AnimationHandle",e="play-state",f="end",g="paused",h="running";qx.Bootstrap.define(d,{extend:qx.event.Emitter,construct:function(){var i=qx.core.Environment.get(a);this.__gd=i&&i[e];this.__ge=true;this.addListenerOnce(f,this.__gg,this);}
,events:{"start":b,"end":b,"iteration":b},members:{__gd:null,__ge:false,__gf:false,isPlaying:function(){return this.__ge;}
,isEnded:function(){return this.__gf;}
,isPaused:function(){return this.el.style[this.__gd]==g;}
,pause:function(){if(this.el){this.el.style[this.__gd]=g;this.el.$$animation.__ge=false;if(this.animationId&&qx.bom.element.AnimationJs){qx.bom.element.AnimationJs.pause(this);}
;}
;}
,play:function(){if(this.el){this.el.style[this.__gd]=h;this.el.$$animation.__ge=true;if(this.i!=undefined&&qx.bom.element.AnimationJs){qx.bom.element.AnimationJs.play(this);}
;}
;}
,stop:function(){if(this.el&&qx.core.Environment.get(a)&&!this.jsAnimation){this.el.style[this.__gd]=c;this.el.style[qx.core.Environment.get(a).name]=c;this.el.$$animation.__ge=false;this.el.$$animation.__gf=true;}
else if(this.jsAnimation){this.stopped=true;qx.bom.element.AnimationJs.stop(this);}
;}
,__gg:function(){this.__ge=false;this.__gf=true;}
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
(function(){var b="ease-in-out",c="Number",d="css.animation.requestframe",e="qx.bom.AnimationFrame",f="frame",g="end",h="linear",j="ease-in",k="ease-out";qx.Bootstrap.define(e,{extend:qx.event.Emitter,events:{"end":undefined,"frame":c},members:{__gh:false,startSequence:function(l){this.__gh=false;var m=(window.performance&&performance.now)?(performance.now()+qx.bom.AnimationFrame.__gi):Date.now();var n=function(p){if(this.__gh){this.id=null;return;}
;if(p>=m+l){this.emit(g);this.id=null;}
else {var o=Math.max(p-m,0);this.emit(f,o);this.id=qx.bom.AnimationFrame.request(n,this);}
;}
;this.id=qx.bom.AnimationFrame.request(n,this);}
,cancelSequence:function(){this.__gh=true;}
},statics:{TIMEOUT:30,calculateTiming:function(q,x){if(q==j){var a=[3.1223e-7,0.0757,1.2646,-0.167,-0.4387,0.2654];}
else if(q==k){var a=[-7.0198e-8,1.652,-0.551,-0.0458,0.1255,-0.1807];}
else if(q==h){return x;}
else if(q==b){var a=[2.482e-7,-0.2289,3.3466,-1.0857,-1.7354,0.7034];}
else {var a=[-0.0021,0.2472,9.8054,-21.6869,17.7611,-5.1226];}
;var y=0;for(var i=0;i<a.length;i++ ){y+=a[i]*Math.pow(x,i);}
;return y;}
,request:function(u,t){var s=qx.core.Environment.get(d);var r=function(v){if(v<1e10){v=qx.bom.AnimationFrame.__gi+v;}
;v=v||Date.now();u.call(t,v);}
;if(s){return window[s](r);}
else {return window.setTimeout(function(){r();}
,qx.bom.AnimationFrame.TIMEOUT);}
;}
},defer:function(w){w.__gi=window.performance&&performance.timing&&performance.timing.navigationStart;if(!w.__gi){w.__gi=Date.now();}
;}
});}
)();
(function(){var a="fill-mode",b="No 'keyFrames' given > 0",c="os.name",d="repeat",f="os.version",g="timing",h="start",i="end",j="Anni",k="start-event",l="keyFrames",m="Keyframe position needs to be between 0 and 100",n="alternate",o="qx.debug",p="visibilitychange",q="keep",r="duration",s=":",t="ios",u="delay",v="} ",w="name",x="iteration-event",y="",z="origin",A="Unknown key '",B="forwards",C="' in the animation description.",D="Some browsers will not animate elements with display==none",E="iteration",F="end-event",G="css.animation",H="ms ",I="% {",J="none",K=" ",L="linear",M=";",N="qx.bom.element.AnimationCss",O="keyframes",P="display";qx.Bootstrap.define(N,{statics:{__gj:null,__gk:j,__bE:0,__gl:{},__fN:{"scale":true,"rotate":true,"skew":true,"translate":true},__gm:qx.core.Environment.get(G),animateReverse:function(R,S,Q){return this._animate(R,S,Q,true);}
,animate:function(U,V,T){return this._animate(U,V,T,false);}
,_animate:function(W,be,bd,Y){this.__gr(be);if(qx.core.Environment.get(o)){this.__gs(be);}
;var bb=be.keep;if(bb!=null&&(Y||(be.alternate&&be.repeat%2==0))){bb=100-bb;}
;if(!this.__gj){this.__gj=qx.bom.Stylesheet.createElement();}
;var ba=be.keyFrames;if(bd==undefined){bd=be.duration;}
;if(this.__gm!=null){var name=this.__gt(ba,Y);var X=name+K+bd+H+be.timing+K+(be.delay?be.delay+H:y)+be.repeat+K+(be.alternate?n:y);qx.bom.Event.addNativeListener(W,this.__gm[k],this.__gn);qx.bom.Event.addNativeListener(W,this.__gm[x],this.__go);qx.bom.Event.addNativeListener(W,this.__gm[F],this.__gp);if(qx.core.Environment.get(o)){if(qx.bom.element.Style.get(W,P)==J){qx.log.Logger.warn(W,D);}
;}
;W.style[qx.lang.String.camelCase(this.__gm[w])]=X;if(bb&&bb==100&&this.__gm[a]){W.style[this.__gm[a]]=B;}
;}
;var bc=new qx.bom.element.AnimationHandle();bc.desc=be;bc.el=W;bc.keep=bb;W.$$animation=bc;if(be.origin!=null){qx.bom.element.Transform.setOrigin(W,be.origin);}
;if(this.__gm==null){window.setTimeout(function(){qx.bom.element.AnimationCss.__gp({target:W});}
,0);}
;return bc;}
,__gn:function(e){if(e.target.$$animation){e.target.$$animation.emit(h,e.target);}
;}
,__go:function(e){if(e.target!=null&&e.target.$$animation!=null){e.target.$$animation.emit(E,e.target);}
;}
,__gp:function(e){var bf=e.target;var bg=bf.$$animation;if(!bg){return;}
;var bi=bg.desc;if(qx.bom.element.AnimationCss.__gm!=null){var bh=qx.lang.String.camelCase(qx.bom.element.AnimationCss.__gm[w]);bf.style[bh]=y;qx.bom.Event.removeNativeListener(bf,qx.bom.element.AnimationCss.__gm[w],qx.bom.element.AnimationCss.__gp);}
;if(bi.origin!=null){qx.bom.element.Transform.setOrigin(bf,y);}
;qx.bom.element.AnimationCss.__gq(bf,bi.keyFrames[bg.keep]);bf.$$animation=null;bg.el=null;bg.ended=true;bg.emit(i,bf);}
,__gq:function(bj,bk){var bm;for(var bl in bk){if(bl in qx.bom.element.AnimationCss.__fN){if(!bm){bm={};}
;bm[bl]=bk[bl];}
else {bj.style[qx.lang.String.camelCase(bl)]=bk[bl];}
;}
;if(bm){qx.bom.element.Transform.transform(bj,bm);}
;}
,__gr:function(bn){if(!bn.hasOwnProperty(n)){bn.alternate=false;}
;if(!bn.hasOwnProperty(q)){bn.keep=null;}
;if(!bn.hasOwnProperty(d)){bn.repeat=1;}
;if(!bn.hasOwnProperty(g)){bn.timing=L;}
;if(!bn.hasOwnProperty(z)){bn.origin=null;}
;}
,__gs:qx.core.Environment.select(o,{"true":function(bp){var bo=[z,r,q,l,u,d,g,n];for(var name in bp){if(!(bo.indexOf(name)!=-1)){qx.Bootstrap.warn(A+name+C);}
;}
;if(bp.keyFrames==null){qx.Bootstrap.warn(b);}
else {for(var bq in bp.keyFrames){if(bq<0||bq>100){qx.Bootstrap.warn(m);}
;}
;}
;}
,"default":null}),__gt:function(frames,bs){var bv=y;for(var bz in frames){bv+=(bs?-(bz-100):bz)+I;var bu=frames[bz];var bx;for(var br in bu){if(br in this.__fN){if(!bx){bx={};}
;bx[br]=bu[br];}
else {var by=qx.bom.Style.getPropertyName(br);var bt=(by!==null)?qx.bom.Style.getCssName(by):y;bv+=(bt||br)+s+bu[br]+M;}
;}
;if(bx){bv+=qx.bom.element.Transform.getCss(bx);}
;bv+=v;}
;if(this.__gl[bv]){return this.__gl[bv];}
;var name=this.__gk+this.__bE++ ;var bw=this.__gm[O]+K+name;qx.bom.Stylesheet.addRule(this.__gj,bw,bv);this.__gl[bv]=name;return name;}
,__gu:function(){this.__bE=0;if(this.__gj){this.__gj.ownerNode.remove();this.__gj=null;this.__gl={};}
;}
},defer:function(bA){if(qx.core.Environment.get(c)===t&&parseInt(qx.core.Environment.get(f))>=8){document.addEventListener(p,function(){if(!document.hidden){bA.__gu();}
;}
,false);}
;}
});}
)();
(function(){var a="Child is already in: ",b="text",c="|bubble|",d="qx.html.Element",f="__gQ",g="': ",h="|capture|",j="scroll",k="Invalid capture flag.",m="focus",n="Failed to add event listener for type '",o="Flushing elements...",p="class",q="blur",r="div",s="Flush: ",t="deactivate",u="'",v="css.userselect",w="animationEnd",z="Synced DOM with ",A=" from the target '",B="qx.debug",C="capture",D="visible",E="Root elements could not be inserted into other ones.",F="Has no children!",G="off",H="Invalid callback function",I="releaseCapture",J="Could not move to same index!",K="Invalid context for callback.",L="element",M="",N="Flush invisible element",O="Failed to remove event listener for type '",P="qxSelectable",Q="tabIndex",R="Has no child at this position!",S="Invalid event type.",T="qx.html.Iframe",U="activate",V="Has no parent to remove from.",W=" to the target '",X="mshtml",Y="engine.name",bp=" operations",bq="Flush rendered element",br="none",bl="Has no child: ",bm="css.userselect.none",bn=" ",bo="hidden",bs="on",bt="Switching visibility to: ",bu="id",bv="Could not overwrite existing element!";qx.Class.define(d,{extend:qx.core.Object,implement:[qx.core.IDisposable],construct:function(by,bw,bx){qx.core.Object.call(this);this.__gv=by||r;this.__gw=bw||null;this.__gx=bx||null;}
,statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__gy:{},__gz:null,__gA:null,_scheduleFlush:function(bz){qx.html.Element.__hd.schedule();}
,flush:function(){var bL;if(qx.core.Environment.get(B)){if(this.DEBUG){qx.log.Logger.debug(this,o);}
;}
;var bD=this.__gB();var bB=bD.getFocus();if(bB&&this.__gD(bB)){bD.blur(bB);}
;var bS=bD.getActive();if(bS&&this.__gD(bS)){qx.bom.Element.deactivate(bS);}
;var bG=this.__gC();if(bG&&this.__gD(bG)){qx.bom.Element.releaseCapture(bG);}
;var bM=[];var bN=this._modified;for(var bK in bN){bL=bN[bK];if(bL.__gV()||bL.classname==T){if(bL.__gE&&qx.dom.Hierarchy.isRendered(bL.__gE)){bM.push(bL);}
else {if(qx.core.Environment.get(B)){if(this.DEBUG){bL.debug(N);}
;}
;bL.__gU();}
;delete bN[bK];}
;}
;for(var i=0,l=bM.length;i<l;i++ ){bL=bM[i];if(qx.core.Environment.get(B)){if(this.DEBUG){bL.debug(bq);}
;}
;bL.__gU();}
;var bI=this._visibility;for(var bK in bI){bL=bI[bK];var bO=bL.__gE;if(!bO){delete bI[bK];continue;}
;if(qx.core.Environment.get(B)){if(this.DEBUG){qx.log.Logger.debug(this,bt+bL.__eh);}
;}
;if(!bL.$$disposed){bO.style.display=bL.__eh?M:br;if((qx.core.Environment.get(Y)==X)){if(!(document.documentMode>=8)){bO.style.visibility=bL.__eh?D:bo;}
;}
;}
;delete bI[bK];}
;var scroll=this._scroll;for(var bK in scroll){bL=scroll[bK];var bC=bL.__gE;if(bC&&bC.offsetWidth){var bF=true;if(bL.__gJ!=null){bL.__gE.scrollLeft=bL.__gJ;delete bL.__gJ;}
;if(bL.__gK!=null){bL.__gE.scrollTop=bL.__gK;delete bL.__gK;}
;var bP=bL.__gH;if(bP!=null){var bJ=bP.element.getDomElement();if(bJ&&bJ.offsetWidth){qx.bom.element.Scroll.intoViewX(bJ,bC,bP.align);delete bL.__gH;}
else {bF=false;}
;}
;var bQ=bL.__gI;if(bQ!=null){var bJ=bQ.element.getDomElement();if(bJ&&bJ.offsetWidth){qx.bom.element.Scroll.intoViewY(bJ,bC,bQ.align);delete bL.__gI;}
else {bF=false;}
;}
;if(bF){delete scroll[bK];}
;}
;}
;var bE={"releaseCapture":1,"blur":1,"deactivate":1};for(var i=0;i<this._actions.length;i++ ){var bR=this._actions[i];var bO=bR.element.__gE;if(!bO||!bE[bR.type]&&!bR.element.__gV()){continue;}
;var bH=bR.args;bH.unshift(bO);qx.bom.Element[bR.type].apply(qx.bom.Element,bH);}
;this._actions=[];for(var bK in this.__gy){var bA=this.__gy[bK];var bC=bA.element.__gE;if(bC){qx.bom.Selection.set(bC,bA.start,bA.end);delete this.__gy[bK];}
;}
;qx.event.handler.Appear.refresh();}
,__gB:function(){if(!this.__gz){var bT=qx.event.Registration.getManager(window);this.__gz=bT.getHandler(qx.event.handler.Focus);}
;return this.__gz;}
,__gC:function(){if(!this.__gA){var bU=qx.event.Registration.getManager(window);this.__gA=bU.getDispatcher(qx.event.dispatch.MouseCapture);}
;return this.__gA.getCaptureElement();}
,__gD:function(bV){var bW=this.fromDomElement(bV);return bW&&!bW.__gV();}
,fromDomElement:function(bX){if(qx.core.Environment.get(B)){qx.core.Assert.assertTrue((!bX.$$element&&!bX.$$elementObject)||bX.$$element===bX.$$elementObject.toHashCode());}
;return bX.$$elementObject;}
},members:{__gv:null,__gE:null,__gF:null,__dU:false,__gG:true,__eh:true,__gH:null,__gI:null,__gJ:null,__gK:null,__gL:null,__gM:null,__gN:null,__gw:null,__gx:null,__gO:null,__gP:null,__gQ:null,__gR:null,__gS:null,_scheduleChildrenUpdate:function(){if(this.__gR){return;}
;this.__gR=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
,_createDomElement:function(){return qx.dom.Element.create(this.__gv);}
,connectWidget:function(bY){if(qx.core.Environment.get(B)){qx.core.Assert.assertTrue(!this.__gF||this.__gF===bY);}
;this.__gF=bY;if(this.__gE){if(qx.core.Environment.get(B)){qx.core.Assert.assertTrue((!this.__gE.$$widget&&!this.__gE.$$widgetObject)||(this.__gE.$$widgetObject===bY&&this.__gE.$$widget===bY.toHashCode()));}
;this.__gE.$$widget=bY.toHashCode();this.__gE.$$widgetObject=bY;}
;}
,disconnectWidget:function(ca){if(qx.core.Environment.get(B)){qx.core.Assert.assertTrue(this.__gF===ca);}
;delete this.__gF;if(this.__gE){if(qx.core.Environment.get(B)){qx.core.Assert.assertTrue((!this.__gE.$$widget&&!this.__gE.$$widgetObject)||(this.__gE.$$widgetObject===ca&&this.__gE.$$widget===ca.toHashCode()));}
;this.__gE.$$widget=M;delete this.__gE.$$widgetObject;}
;}
,__gT:function(cb){if(qx.core.Environment.get(B)){qx.core.Assert.assertTrue(!this.__gE||this.__gE===cb);qx.core.Assert.assertTrue((cb.$$elementObject===this&&cb.$$element===this.toHashCode())||(!cb.$$elementObject&&!cb.$$element));}
;this.__gE=cb;cb.$$elementObject=this;cb.$$element=this.toHashCode();if(this.__gF){cb.$$widget=this.__gF.toHashCode();cb.$$widgetObject=this.__gF;}
;}
,__gU:function(){if(qx.core.Environment.get(B)){if(this.DEBUG){this.debug(s+this.getAttribute(bu));}
;}
;var length;var cc=this.__gQ;if(cc){length=cc.length;var cd;for(var i=0;i<length;i++ ){cd=cc[i];if(cd.__eh&&cd.__gG&&!cd.__gE){cd.__gU();}
;}
;}
;if(!this.__gE){this.__gT(this._createDomElement());this._copyData(false);if(cc&&length>0){this._insertChildren();}
;}
else {this._syncData();if(this.__gR){this._syncChildren();}
;}
;delete this.__gR;}
,_insertChildren:function(){var ce=this.__gQ;var length=ce.length;var cg;if(length>2){var cf=document.createDocumentFragment();for(var i=0;i<length;i++ ){cg=ce[i];if(cg.__gE&&cg.__gG){cf.appendChild(cg.__gE);}
;}
;this.__gE.appendChild(cf);}
else {var cf=this.__gE;for(var i=0;i<length;i++ ){cg=ce[i];if(cg.__gE&&cg.__gG){cf.appendChild(cg.__gE);}
;}
;}
;}
,_syncChildren:function(){var ch=this.__gQ;var co=ch.length;var ci;var cm;var ck=this.__gE;var cp=ck.childNodes;var cj=0;var cn;if(qx.core.Environment.get(B)){var cl=0;}
;for(var i=cp.length-1;i>=0;i-- ){cn=cp[i];cm=qx.html.Element.fromDomElement(cn);if(!cm||!cm.__gG||cm.__gS!==this){ck.removeChild(cn);if(qx.core.Environment.get(B)){cl++ ;}
;}
;}
;for(var i=0;i<co;i++ ){ci=ch[i];if(ci.__gG){cm=ci.__gE;cn=cp[cj];if(!cm){continue;}
;if(cm!=cn){if(cn){ck.insertBefore(cm,cn);}
else {ck.appendChild(cm);}
;if(qx.core.Environment.get(B)){cl++ ;}
;}
;cj++ ;}
;}
;if(qx.core.Environment.get(B)){if(qx.html.Element.DEBUG){this.debug(z+cl+bp);}
;}
;}
,_copyData:function(cr){var ct=this.__gE;var cv=this.__gx;if(cv){var cs=qx.bom.element.Attribute;for(var cu in cv){cs.set(ct,cu,cv[cu]);}
;}
;var cv=this.__gw;if(cv){var cq=qx.bom.element.Style;if(cr){cq.setStyles(ct,cv);}
else {cq.setCss(ct,cq.compile(cv));}
;}
;var cv=this.__gO;if(cv){for(var cu in cv){this._applyProperty(cu,cv[cu]);}
;}
;var cv=this.__gP;if(cv){qx.event.Registration.getManager(ct).importListeners(ct,cv);delete this.__gP;}
;}
,_syncData:function(){var cA=this.__gE;var cz=qx.bom.element.Attribute;var cx=qx.bom.element.Style;var cy=this.__gM;if(cy){var cD=this.__gx;if(cD){var cB;for(var cC in cy){cB=cD[cC];if(cB!==undefined){cz.set(cA,cC,cB);}
else {cz.reset(cA,cC);}
;}
;}
;this.__gM=null;}
;var cy=this.__gL;if(cy){var cD=this.__gw;if(cD){var cw={};for(var cC in cy){cw[cC]=cD[cC];}
;cx.setStyles(cA,cw);}
;this.__gL=null;}
;var cy=this.__gN;if(cy){var cD=this.__gO;if(cD){var cB;for(var cC in cy){this._applyProperty(cC,cD[cC]);}
;}
;this.__gN=null;}
;}
,__gV:function(){var cE=this;while(cE){if(cE.__dU){return true;}
;if(!cE.__gG||!cE.__eh){return false;}
;cE=cE.__gS;}
;return false;}
,__gW:function(cF){if(cF.__gS===this){throw new Error(a+cF);}
;if(cF.__dU){throw new Error(E);}
;if(cF.__gS){cF.__gS.remove(cF);}
;cF.__gS=this;if(!this.__gQ){this.__gQ=[];}
;if(this.__gE){this._scheduleChildrenUpdate();}
;}
,__gX:function(cG){if(cG.__gS!==this){throw new Error(bl+cG);}
;if(this.__gE){this._scheduleChildrenUpdate();}
;delete cG.__gS;}
,__gY:function(cH){if(cH.__gS!==this){throw new Error(bl+cH);}
;if(this.__gE){this._scheduleChildrenUpdate();}
;}
,getChildren:function(){return this.__gQ||null;}
,getChild:function(cI){var cJ=this.__gQ;return cJ&&cJ[cI]||null;}
,hasChildren:function(){var cK=this.__gQ;return cK&&cK[0]!==undefined;}
,indexOf:function(cM){var cL=this.__gQ;return cL?cL.indexOf(cM):-1;}
,hasChild:function(cO){var cN=this.__gQ;return cN&&cN.indexOf(cO)!==-1;}
,add:function(cP){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++ ){this.__gW(arguments[i]);}
;this.__gQ.push.apply(this.__gQ,arguments);}
else {this.__gW(cP);this.__gQ.push(cP);}
;return this;}
,addAt:function(cR,cQ){this.__gW(cR);qx.lang.Array.insertAt(this.__gQ,cR,cQ);return this;}
,remove:function(cS){var cT=this.__gQ;if(!cT){return this;}
;if(arguments[1]){var cU;for(var i=0,l=arguments.length;i<l;i++ ){cU=arguments[i];this.__gX(cU);qx.lang.Array.remove(cT,cU);}
;}
else {this.__gX(cS);qx.lang.Array.remove(cT,cS);}
;return this;}
,removeAt:function(cV){var cW=this.__gQ;if(!cW){throw new Error(F);}
;var cX=cW[cV];if(!cX){throw new Error(R);}
;this.__gX(cX);qx.lang.Array.removeAt(this.__gQ,cV);return this;}
,removeAll:function(){var cY=this.__gQ;if(cY){for(var i=0,l=cY.length;i<l;i++ ){this.__gX(cY[i]);}
;cY.length=0;}
;return this;}
,getParent:function(){return this.__gS||null;}
,insertInto:function(parent,da){parent.__gW(this);if(da==null){parent.__gQ.push(this);}
else {qx.lang.Array.insertAt(this.__gQ,this,da);}
;return this;}
,insertBefore:function(dc){var parent=dc.__gS;parent.__gW(this);qx.lang.Array.insertBefore(parent.__gQ,this,dc);return this;}
,insertAfter:function(dd){var parent=dd.__gS;parent.__gW(this);qx.lang.Array.insertAfter(parent.__gQ,this,dd);return this;}
,moveTo:function(de){var parent=this.__gS;parent.__gY(this);var df=parent.__gQ.indexOf(this);if(df===de){throw new Error(J);}
else if(df<de){de-- ;}
;qx.lang.Array.removeAt(parent.__gQ,df);qx.lang.Array.insertAt(parent.__gQ,this,de);return this;}
,moveBefore:function(dg){var parent=this.__gS;return this.moveTo(parent.__gQ.indexOf(dg));}
,moveAfter:function(dh){var parent=this.__gS;return this.moveTo(parent.__gQ.indexOf(dh)+1);}
,free:function(){var parent=this.__gS;if(!parent){throw new Error(V);}
;if(!parent.__gQ){return this;}
;parent.__gX(this);qx.lang.Array.remove(parent.__gQ,this);return this;}
,getDomElement:function(){return this.__gE||null;}
,getNodeName:function(){return this.__gv;}
,setNodeName:function(name){this.__gv=name;}
,setRoot:function(di){this.__dU=di;}
,useMarkup:function(dj){if(this.__gE){throw new Error(bv);}
;if(qx.core.Environment.get(Y)==X){var dk=document.createElement(r);}
else {var dk=qx.dom.Element.getHelperElement();}
;dk.innerHTML=dj;this.useElement(dk.firstChild);return this.__gE;}
,useElement:function(dl){if(this.__gE){throw new Error(bv);}
;this.__gT(dl);this._copyData(true);}
,isFocusable:function(){var dn=this.getAttribute(Q);if(dn>=1){return true;}
;var dm=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;if(dn>=0&&dm[this.__gv]){return true;}
;return false;}
,setSelectable:function(dq){this.setAttribute(P,dq?bs:G);var dp=qx.core.Environment.get(v);if(dp){this.setStyle(dp,dq?b:qx.core.Environment.get(bm));}
;}
,isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__gv];}
,include:function(){if(this.__gG){return this;}
;delete this.__gG;if(this.__gS){this.__gS._scheduleChildrenUpdate();}
;return this;}
,exclude:function(){if(!this.__gG){return this;}
;this.__gG=false;if(this.__gS){this.__gS._scheduleChildrenUpdate();}
;return this;}
,isIncluded:function(){return this.__gG===true;}
,fadeIn:function(dr){var ds=qxWeb(this.__gE);if(ds.isPlaying()){ds.stop();}
;if(!this.__gE){this.__gU();ds.push(this.__gE);}
;if(this.__gE){ds.fadeIn(dr).once(w,function(){this.show();qx.html.Element.flush();}
,this);return ds.getAnimationHandles()[0];}
;}
,fadeOut:function(dt){var du=qxWeb(this.__gE);if(du.isPlaying()){du.stop();}
;if(this.__gE){du.fadeOut(dt).once(w,function(){this.hide();qx.html.Element.flush();}
,this);return du.getAnimationHandles()[0];}
;}
,show:function(){if(this.__eh){return this;}
;if(this.__gE){qx.html.Element._visibility[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;if(this.__gS){this.__gS._scheduleChildrenUpdate();}
;delete this.__eh;return this;}
,hide:function(){if(!this.__eh){return this;}
;if(this.__gE){qx.html.Element._visibility[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;this.__eh=false;return this;}
,isVisible:function(){return this.__eh===true;}
,scrollChildIntoViewX:function(dy,dw,dz){var dv=this.__gE;var dx=dy.getDomElement();if(dz!==false&&dv&&dv.offsetWidth&&dx&&dx.offsetWidth){qx.bom.element.Scroll.intoViewX(dx,dv,dw);}
else {this.__gH={element:dy,align:dw};qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__gJ;}
,scrollChildIntoViewY:function(dD,dB,dE){var dA=this.__gE;var dC=dD.getDomElement();if(dE!==false&&dA&&dA.offsetWidth&&dC&&dC.offsetWidth){qx.bom.element.Scroll.intoViewY(dC,dA,dB);}
else {this.__gI={element:dD,align:dB};qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__gK;}
,scrollToX:function(x,dF){var dG=this.__gE;if(dF!==true&&dG&&dG.offsetWidth){dG.scrollLeft=x;delete this.__gJ;}
else {this.__gJ=x;qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__gH;}
,getScrollX:function(){var dH=this.__gE;if(dH){return dH.scrollLeft;}
;return this.__gJ||0;}
,scrollToY:function(y,dJ){var dI=this.__gE;if(dJ!==true&&dI&&dI.offsetWidth){dI.scrollTop=y;delete this.__gK;}
else {this.__gK=y;qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__gI;}
,getScrollY:function(){var dK=this.__gE;if(dK){return dK.scrollTop;}
;return this.__gK||0;}
,disableScrolling:function(){this.enableScrolling();this.scrollToX(0);this.scrollToY(0);this.addListener(j,this.__hb,this);}
,enableScrolling:function(){this.removeListener(j,this.__hb,this);}
,__ha:null,__hb:function(e){if(!this.__ha){this.__ha=true;this.__gE.scrollTop=0;this.__gE.scrollLeft=0;delete this.__ha;}
;}
,getTextSelection:function(){var dL=this.__gE;if(dL){return qx.bom.Selection.get(dL);}
;return null;}
,getTextSelectionLength:function(){var dM=this.__gE;if(dM){return qx.bom.Selection.getLength(dM);}
;return null;}
,getTextSelectionStart:function(){var dN=this.__gE;if(dN){return qx.bom.Selection.getStart(dN);}
;return null;}
,getTextSelectionEnd:function(){var dO=this.__gE;if(dO){return qx.bom.Selection.getEnd(dO);}
;return null;}
,setTextSelection:function(dP,dQ){var dR=this.__gE;if(dR){qx.bom.Selection.set(dR,dP,dQ);return;}
;qx.html.Element.__gy[this.toHashCode()]={element:this,start:dP,end:dQ};qx.html.Element._scheduleFlush(L);}
,clearTextSelection:function(){var dS=this.__gE;if(dS){qx.bom.Selection.clear(dS);}
;delete qx.html.Element.__gy[this.toHashCode()];}
,__hc:function(dT,dU){var dV=qx.html.Element._actions;dV.push({type:dT,element:this,args:dU||[]});qx.html.Element._scheduleFlush(L);}
,focus:function(){this.__hc(m);}
,blur:function(){this.__hc(q);}
,activate:function(){this.__hc(U);}
,deactivate:function(){this.__hc(t);}
,capture:function(dW){this.__hc(C,[dW!==false]);}
,releaseCapture:function(){this.__hc(I);}
,setStyle:function(dX,dY,ea){if(!this.__gw){this.__gw={};}
;if(this.__gw[dX]==dY){return this;}
;if(dY==null){delete this.__gw[dX];}
else {this.__gw[dX]=dY;}
;if(this.__gE){if(ea){qx.bom.element.Style.set(this.__gE,dX,dY);return this;}
;if(!this.__gL){this.__gL={};}
;this.__gL[dX]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;return this;}
,setStyles:function(ec,ee){var ed=qx.bom.element.Style;if(!this.__gw){this.__gw={};}
;if(this.__gE){if(!this.__gL){this.__gL={};}
;for(var eb in ec){var ef=ec[eb];if(this.__gw[eb]==ef){continue;}
;if(ef==null){delete this.__gw[eb];}
else {this.__gw[eb]=ef;}
;if(ee){ed.set(this.__gE,eb,ef);continue;}
;this.__gL[eb]=true;}
;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
else {for(var eb in ec){var ef=ec[eb];if(this.__gw[eb]==ef){continue;}
;if(ef==null){delete this.__gw[eb];}
else {this.__gw[eb]=ef;}
;}
;}
;return this;}
,removeStyle:function(eh,eg){this.setStyle(eh,null,eg);return this;}
,getStyle:function(ei){return this.__gw?this.__gw[ei]:null;}
,getAllStyles:function(){return this.__gw||null;}
,setAttribute:function(ej,ek,em){if(!this.__gx){this.__gx={};}
;if(this.__gx[ej]==ek){return this;}
;if(ek==null){delete this.__gx[ej];}
else {this.__gx[ej]=ek;}
;if(this.__gE){if(em){qx.bom.element.Attribute.set(this.__gE,ej,ek);return this;}
;if(!this.__gM){this.__gM={};}
;this.__gM[ej]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;return this;}
,setAttributes:function(en,eo){for(var ep in en){this.setAttribute(ep,en[ep],eo);}
;return this;}
,removeAttribute:function(er,eq){return this.setAttribute(er,null,eq);}
,getAttribute:function(es){return this.__gx?this.__gx[es]:null;}
,addClass:function(name){var et=((this.getAttribute(p)||M)+bn+name).trim();this.setAttribute(p,et);}
,removeClass:function(name){var eu=this.getAttribute(p);if(eu){this.setAttribute(p,(eu.replace(name,M)).trim());}
;}
,_applyProperty:function(name,ev){}
,_setProperty:function(ew,ex,ey){if(!this.__gO){this.__gO={};}
;if(this.__gO[ew]==ex){return this;}
;if(ex==null){delete this.__gO[ew];}
else {this.__gO[ew]=ex;}
;if(this.__gE){if(ey){this._applyProperty(ew,ex);return this;}
;if(!this.__gN){this.__gN={};}
;this.__gN[ew]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;return this;}
,_removeProperty:function(eA,ez){return this._setProperty(eA,null,ez);}
,_getProperty:function(eC){var eB=this.__gO;if(!eB){return null;}
;var eD=eB[eC];return eD==null?null:eD;}
,addListener:function(eI,eF,self,eE){if(this.$$disposed){return null;}
;if(qx.core.Environment.get(B)){var eG=n+eI+u+W+this+g;this.assertString(eI,eG+S);this.assertFunction(eF,eG+H);if(self!==undefined){this.assertObject(self,K);}
;if(eE!==undefined){this.assertBoolean(eE,k);}
;}
;if(this.__gE){return qx.event.Registration.addListener(this.__gE,eI,eF,self,eE);}
;if(!this.__gP){this.__gP={};}
;if(eE==null){eE=false;}
;var eH=qx.event.Manager.getNextUniqueId();var eJ=eI+(eE?h:c)+eH;this.__gP[eJ]={type:eI,listener:eF,self:self,capture:eE,unique:eH};return eJ;}
,removeListener:function(eR,eL,self,eK){if(this.$$disposed){return null;}
;if(qx.core.Environment.get(B)){var eP=O+eR+u+A+this+g;this.assertString(eR,eP+S);this.assertFunction(eL,eP+H);if(self!==undefined){this.assertObject(self,K);}
;if(eK!==undefined){this.assertBoolean(eK,k);}
;}
;if(this.__gE){if(eL.$$wrapped_callback&&eL.$$wrapped_callback[eR+this.$$hash]){var eM=eL.$$wrapped_callback[eR+this.$$hash];delete eL.$$wrapped_callback[eR+this.$$hash];eL=eM;}
;qx.event.Registration.removeListener(this.__gE,eR,eL,self,eK);}
else {var eN=this.__gP;var eQ;if(eK==null){eK=false;}
;for(var eO in eN){eQ=eN[eO];if(eQ.listener===eL&&eQ.self===self&&eQ.capture===eK&&eQ.type===eR){delete eN[eO];break;}
;}
;}
;return this;}
,removeListenerById:function(eS){if(this.$$disposed){return null;}
;if(this.__gE){qx.event.Registration.removeListenerById(this.__gE,eS);}
else {delete this.__gP[eS];}
;return this;}
,hasListener:function(eU,eT){if(this.$$disposed){return false;}
;if(this.__gE){return qx.event.Registration.hasListener(this.__gE,eU,eT);}
;var eV=this.__gP;var eX;if(eT==null){eT=false;}
;for(var eW in eV){eX=eV[eW];if(eX.capture===eT&&eX.type===eU){return true;}
;}
;return false;}
,getListeners:function(){if(this.$$disposed){return null;}
;if(this.__gE){return qx.event.Registration.getManager(this.__gE).serializeListeners(this.__gE);}
;var eY=[];for(var fb in this.__gP){var fa=this.__gP[fb];eY.push({type:fa.type,handler:fa.listener,self:fa.self,capture:fa.capture});}
;return eY;}
},defer:function(fc){fc.__hd=new qx.util.DeferredCall(fc.flush,fc);}
,destruct:function(){if(this.$$hash){delete qx.html.Element._modified[this.$$hash];delete qx.html.Element._scroll[this.$$hash];}
;var fd=this.__gE;if(fd){qx.event.Registration.getManager(fd).removeAllListeners(fd);fd.$$element=M;delete fd.$$elementObject;fd.$$widget=M;delete fd.$$widgetObject;}
;if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__gS;if(parent&&!parent.$$disposed){parent.remove(this);}
;}
;this._disposeArray(f);this.__gx=this.__gw=this.__gP=this.__gO=this.__gM=this.__gL=this.__gN=this.__gE=this.__gS=this.__gH=this.__gI=null;}
});}
)();
(function(){var a="qx.event.handler.Appear",b="engine.name",c="mshtml",d="disappear",e="appear",f="browser.documentmode";qx.Class.define(a,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(g){qx.core.Object.call(this);this.__dr=g;this.__lK={};qx.event.handler.Appear.__lL[this.$$hash]=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__lL:{},refresh:function(){var h=this.__lL;for(var i in h){h[i].refresh();}
;}
},members:{__dr:null,__lK:null,canHandleEvent:function(k,j){}
,registerEvent:function(o,p,m){var n=qx.core.ObjectRegistry.toHashCode(o)+p;var l=this.__lK;if(l&&!l[n]){l[n]=o;o.$$displayed=o.offsetWidth>0;}
;}
,unregisterEvent:function(t,u,r){var s=qx.core.ObjectRegistry.toHashCode(t)+u;var q=this.__lK;if(!q){return;}
;if(q[s]){delete q[s];}
;}
,refresh:function(){var A=this.__lK;var x;var y=qx.core.Environment.get(b)==c&&qx.core.Environment.get(f)<9;for(var v in A){x=A[v];var w=x.offsetWidth>0;if(!w&&y){w=x.offsetWidth>0;}
;if((!!x.$$displayed)!==w){x.$$displayed=w;var z=qx.event.Registration.createEvent(w?e:d);this.__dr.dispatchEvent(x,z);}
;}
;}
},destruct:function(){this.__dr=this.__lK=null;delete qx.event.handler.Appear.__lL[this.$$hash];}
,defer:function(B){qx.event.Registration.addHandler(B);}
});}
)();
(function(){var a="abstract",b="The context object '",c="qx.debug",d="' for the event '",e="' of '",f="qx.event.dispatch.AbstractBubbling",g="'is already disposed.",h="Missing implementation";qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:a,construct:function(k){this._manager=k;}
,members:{_getParent:function(l){throw new Error(h);}
,canDispatchEvent:function(n,event,m){return event.getBubbles();}
,dispatchEvent:function(q,event,B){var parent=q;var x=this._manager;var t,C;var s;var A,z;var D;var v=[];t=x.getListeners(q,B,true);C=x.getListeners(q,B,false);if(t){v.push(t);}
;if(C){v.push(C);}
;var parent=this._getParent(q);var p=[];var o=[];var r=[];var u=[];while(parent!=null){t=x.getListeners(parent,B,true);if(t){r.push(t);u.push(parent);}
;C=x.getListeners(parent,B,false);if(C){p.push(C);o.push(parent);}
;parent=this._getParent(parent);}
;event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);for(var i=r.length-1;i>=0;i-- ){D=u[i];event.setCurrentTarget(D);s=r[i];for(var j=0,w=s.length;j<w;j++ ){A=s[j];z=A.context||D;if(qx.core.Environment.get(c)){if(z&&z.isDisposed&&z.isDisposed()){this.warn(b+z+d+B+e+D+g);}
;}
;if(!this._manager.isBlacklisted(A.unique)){A.handler.call(z,event);}
;}
;if(event.getPropagationStopped()){return;}
;}
;event.setEventPhase(qx.event.type.Event.AT_TARGET);event.setCurrentTarget(q);for(var i=0,y=v.length;i<y;i++ ){s=v[i];for(var j=0,w=s.length;j<w;j++ ){A=s[j];z=A.context||q;if(qx.core.Environment.get(c)){if(z&&z.isDisposed&&z.isDisposed()){this.warn(b+z+d+B+e+q+g);}
;}
;A.handler.call(z,event);}
;if(event.getPropagationStopped()){return;}
;}
;event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);for(var i=0,y=p.length;i<y;i++ ){D=o[i];event.setCurrentTarget(D);s=p[i];for(var j=0,w=s.length;j<w;j++ ){A=s[j];z=A.context||D;if(qx.core.Environment.get(c)){if(z&&z.isDisposed&&z.isDisposed()){this.warn(b+z+d+B+e+D+g);}
;}
;A.handler.call(z,event);}
;if(event.getPropagationStopped()){return;}
;}
;}
}});}
)();
(function(){var a="mshtml",b="engine.name",c="blur",d="losecapture",e="focus",f="os.version",g="click",h="qx.event.dispatch.MouseCapture",i="capture",j="scroll",k="browser.documentmode";qx.Class.define(h,{extend:qx.event.dispatch.AbstractBubbling,construct:function(l,m){qx.event.dispatch.AbstractBubbling.call(this,l);this.__cr=l.getWindow();this.__ct=m;l.addListener(this.__cr,c,this.releaseCapture,this);l.addListener(this.__cr,e,this.releaseCapture,this);l.addListener(this.__cr,j,this.releaseCapture,this);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__ct:null,__lG:null,__lH:true,__cr:null,_getParent:function(n){return n.parentNode;}
,canDispatchEvent:function(p,event,o){return !!(this.__lG&&this.__lI[o]);}
,dispatchEvent:function(r,event,q){if(q==g){event.stopPropagation();this.releaseCapture();return;}
;if(this.__lH||!qx.dom.Hierarchy.contains(this.__lG,r)){r=this.__lG;}
;qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,r,event,q);}
,__lI:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1,"pointerdown":1,"pointerup":1,"pointermove":1,"pointerover":1,"pointerout":1,"tap":1,"dbltap":1},activateCapture:function(t,s){var s=s!==false;if(this.__lG===t&&this.__lH==s){return;}
;if(this.__lG){this.releaseCapture();}
;if(this.hasNativeCapture){this.nativeSetCapture(t,s);var self=this;qx.bom.Event.addNativeListener(t,d,function(){qx.bom.Event.removeNativeListener(t,d,arguments.callee);self.releaseCapture();}
);}
;this.__lH=s;this.__lG=t;this.__ct.fireEvent(t,i,qx.event.type.Event,[true,false]);}
,getCaptureElement:function(){return this.__lG;}
,releaseCapture:function(){var u=this.__lG;if(!u){return;}
;this.__lG=null;this.__ct.fireEvent(u,d,qx.event.type.Event,[true,false]);this.nativeReleaseCapture(u);}
,hasNativeCapture:(qx.core.Environment.get(b)==a&&qx.core.Environment.get(k)<9||(parseInt(qx.core.Environment.get(f),10)>7&&qx.core.Environment.get(k)>9)),nativeSetCapture:qx.core.Environment.select(b,{"mshtml":function(w,v){w.setCapture(v!==false);}
,"default":(function(){}
)}),nativeReleaseCapture:qx.core.Environment.select(b,{"mshtml":function(x){x.releaseCapture();}
,"default":(function(){}
)})},defer:function(y){qx.event.Registration.addDispatcher(y);}
});}
)();
(function(){var a="qx.event.handler.Capture";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,b){}
,registerEvent:function(f,e,d){}
,unregisterEvent:function(i,h,g){}
},defer:function(j){qx.event.Registration.addHandler(j);}
});}
)();
(function(){var a="borderBottomWidth",b="visible",d="engine.name",e="borderTopWidth",f="top",g="borderLeftStyle",h="none",i="overflow",j="right",k="bottom",l="borderLeftWidth",m="100px",n="-moz-scrollbars-vertical",o="borderRightStyle",p="hidden",q="div",r="left",u="qx.bom.element.Scroll",v="borderRightWidth",w="scroll",x="overflowY";qx.Class.define(u,{statics:{__lM:null,getScrollbarWidth:function(){if(this.__lM!==null){return this.__lM;}
;var y=qx.bom.element.Style;var A=function(E,F){return parseInt(y.get(E,F),10)||0;}
;var B=function(G){return (y.get(G,o)==h?0:A(G,v));}
;var C=function(H){return (y.get(H,g)==h?0:A(H,l));}
;var D=qx.core.Environment.select(d,{"mshtml":function(I){if(y.get(I,x)==p||I.clientWidth==0){return B(I);}
;return Math.max(0,I.offsetWidth-I.clientLeft-I.clientWidth);}
,"default":function(J){if(J.clientWidth==0){var L=y.get(J,i);var K=(L==w||L==n?16:0);return Math.max(0,B(J)+K);}
;return Math.max(0,(J.offsetWidth-J.clientWidth-C(J)));}
});var z=function(M){return D(M)-B(M);}
;var t=document.createElement(q);var s=t.style;s.height=s.width=m;s.overflow=w;document.body.appendChild(t);var c=z(t);this.__lM=c;document.body.removeChild(t);return this.__lM;}
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
(function(){var a="engine.name",b="qx.bom.Selection",c="character",d="button",e='character',f="#text",g="webkit",h="input",i="gecko",j="EndToEnd",k="opera",l="StartToStart",m="html.selection",n="textarea",o="body";qx.Bootstrap.define(b,{statics:{getSelectionObject:qx.core.Environment.select(m,{"selection":function(p){return p.selection;}
,"default":function(q){return qx.dom.Node.getWindow(q).getSelection();}
}),get:qx.core.Environment.select(m,{"selection":function(r){var s=qx.bom.Range.get(qx.dom.Node.getDocument(r));return s.text;}
,"default":function(t){if(this.__lJ(t)){return t.value.substring(t.selectionStart,t.selectionEnd);}
else {return this.getSelectionObject(qx.dom.Node.getDocument(t)).toString();}
;}
}),getLength:qx.core.Environment.select(m,{"selection":function(u){var w=this.get(u);var v=qx.util.StringSplit.split(w,/\r\n/);return w.length-(v.length-1);}
,"default":function(x){if(qx.core.Environment.get(a)==k){var B,C,A;if(this.__lJ(x)){var z=x.selectionStart;var y=x.selectionEnd;B=x.value.substring(z,y);C=y-z;}
else {B=qx.bom.Selection.get(x);C=B.length;}
;A=qx.util.StringSplit.split(B,/\r\n/);return C-(A.length-1);}
;if(this.__lJ(x)){return x.selectionEnd-x.selectionStart;}
else {return this.get(x).length;}
;}
}),getStart:qx.core.Environment.select(m,{"selection":function(D){if(this.__lJ(D)){var I=qx.bom.Range.get();if(!D.contains(I.parentElement())){return -1;}
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
,"default":function(N){if(qx.core.Environment.get(a)===i||qx.core.Environment.get(a)===g){if(this.__lJ(N)){return N.selectionStart;}
else {var P=qx.dom.Node.getDocument(N);var O=this.getSelectionObject(P);if(O.anchorOffset<O.focusOffset){return O.anchorOffset;}
else {return O.focusOffset;}
;}
;}
;if(this.__lJ(N)){return N.selectionStart;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;}
;}
}),getEnd:qx.core.Environment.select(m,{"selection":function(Q){if(this.__lJ(Q)){var V=qx.bom.Range.get();if(!Q.contains(V.parentElement())){return -1;}
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
,"default":function(bb){if(qx.core.Environment.get(a)===i||qx.core.Environment.get(a)===g){if(this.__lJ(bb)){return bb.selectionEnd;}
else {var bd=qx.dom.Node.getDocument(bb);var bc=this.getSelectionObject(bd);if(bc.focusOffset>bc.anchorOffset){return bc.focusOffset;}
else {return bc.anchorOffset;}
;}
;}
;if(this.__lJ(bb)){return bb.selectionEnd;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bb)).focusOffset;}
;}
}),__lJ:function(be){return qx.dom.Node.isElement(be)&&(be.nodeName.toLowerCase()==h||be.nodeName.toLowerCase()==n);}
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
(function(){var a="qx.bom.Range",b="text",c="password",d="file",e="submit",f="reset",g="textarea",h="input",i="hidden",j="html.selection",k="button",l="body";qx.Bootstrap.define(a,{statics:{get:qx.core.Environment.select(j,{"selection":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case h:switch(m.type){case b:case c:case i:case k:case f:case d:case e:return m.createTextRange();default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();};break;case g:case l:case k:return m.createTextRange();default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();};}
else {if(m==null){m=window;}
;return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();}
;}
,"default":function(n){var o=qx.dom.Node.getDocument(n);var p=qx.bom.Selection.getSelectionObject(o);if(p.rangeCount>0){return p.getRangeAt(0);}
else {return o.createRange();}
;}
})}});}
)();
(function(){var a="mshtml",b="engine.name",c="click",d="middle",e="none",f="contextmenu",g="qx.event.type.Mouse",h="browser.documentmode",i="left",j="right",k="browser.name",l="ie";qx.Class.define(g,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(m,n){var n=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,m,n);n.button=m.button;n.clientX=Math.round(m.clientX);n.clientY=Math.round(m.clientY);n.pageX=m.pageX?Math.round(m.pageX):undefined;n.pageY=m.pageY?Math.round(m.pageY):undefined;n.screenX=Math.round(m.screenX);n.screenY=Math.round(m.screenY);n.wheelDelta=m.wheelDelta;n.wheelDeltaX=m.wheelDeltaX;n.wheelDeltaY=m.wheelDeltaY;n.delta=m.delta;n.deltaX=m.deltaX;n.deltaY=m.deltaY;n.deltaZ=m.deltaZ;n.detail=m.detail;n.axis=m.axis;n.wheelX=m.wheelX;n.wheelY=m.wheelY;n.HORIZONTAL_AXIS=m.HORIZONTAL_AXIS;n.srcElement=m.srcElement;n.target=m.target;return n;}
,__kH:{'0':i,'2':j,'1':d},__kI:{'0':e,'1':i,'2':j,'4':d},__kJ:{'1':i,'2':j,'4':d},stop:function(){this.stopPropagation();}
,getButton:function(){switch(this._type){case f:return j;case c:if(qx.core.Environment.get(k)===l&&qx.core.Environment.get(h)<9){return i;}
;default:if(!(qx.core.Environment.get(b)==a&&qx.core.Environment.get(h)<=8)){if(this._native.button===-1){return this.__kI[this._native.buttons]||e;}
;return this.__kH[this._native.button]||e;}
else {return this.__kJ[this._native.button]||e;}
;};}
,isLeftPressed:function(){return this.getButton()===i;}
,isMiddlePressed:function(){return this.getButton()===d;}
,isRightPressed:function(){return this.getButton()===j;}
,getRelatedTarget:function(){return this._relatedTarget;}
,getViewportLeft:function(){return Math.round(this._native.clientX);}
,getViewportTop:function(){return Math.round(this._native.clientY);}
,getDocumentLeft:function(){if(this._native.pageX!==undefined){return Math.round(this._native.pageX);}
else if(this._native.srcElement){var o=qx.dom.Node.getWindow(this._native.srcElement);return Math.round(this._native.clientX)+qx.bom.Viewport.getScrollLeft(o);}
else {return Math.round(this._native.clientX)+qx.bom.Viewport.getScrollLeft(window);}
;}
,getDocumentTop:function(){if(this._native.pageY!==undefined){return Math.round(this._native.pageY);}
else if(this._native.srcElement){var p=qx.dom.Node.getWindow(this._native.srcElement);return Math.round(this._native.clientY)+qx.bom.Viewport.getScrollTop(p);}
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
(function(){var a="qx.event.type.Track";qx.Class.define(a,{extend:qx.event.type.Pointer,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Pointer.prototype._cloneNativeEvent.call(this,b,c);c.delta=b.delta;return c;}
,getDelta:function(){return this._native.delta;}
}});}
)();
(function(){var a="qx.event.type.Tap";qx.Class.define(a,{extend:qx.event.type.Pointer});}
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
(function(){var a="qx.event.type.Pinch";qx.Class.define(a,{extend:qx.event.type.Pointer,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Pointer.prototype._cloneNativeEvent.call(this,b,c);c.scale=b.scale;return c;}
,getScale:function(){return this._native.scale;}
}});}
)();
(function(){var a="touchmove",b="os.name",c="MSPointerDown",d="android",e="engine.version",f="pointercancel",g="qx.event.handler.TouchCore",h="event.mspointer",j="MSPointerCancel",k="y",l="pointer-events",m="pointerup",n="touchend",o="pointerdown",p="MSPointerUp",q="right",r="engine.name",s="undefined",t="touchcancel",u="MSPointerMove",v="webkit",w="none",z="left",A="pointermove",B="down",C="x",D="up",E="touchstart";qx.Bootstrap.define(g,{extend:Object,implement:[qx.core.IDisposable],statics:{TAP_MAX_DISTANCE:qx.core.Environment.get(b)!=d?10:40,SWIPE_DIRECTION:{x:[z,q],y:[D,B]},SWIPE_MIN_DISTANCE:qx.core.Environment.get(b)!=d?11:41,SWIPE_MIN_VELOCITY:0,LONGTAP_TIME:500},construct:function(F,G){this.__lN=F;this.__fo=G;this._initTouchObserver();this.__lO=[];this.__lP={};}
,members:{__lN:null,__fo:null,__lQ:null,__lR:null,__lP:null,__lS:null,__lT:null,__lU:null,__lO:null,__lV:null,_initTouchObserver:function(){this.__lQ=qx.lang.Function.listener(this._onTouchEvent,this);this.__lV=[E,a,n,t];if(qx.core.Environment.get(h)){var H=parseInt(qx.core.Environment.get(e),10);if(H==10){this.__lV=[c,u,p,j];}
else {this.__lV=[o,A,m,f];}
;}
;for(var i=0;i<this.__lV.length;i++ ){qx.bom.Event.addNativeListener(this.__lN,this.__lV[i],this.__lQ);}
;}
,_stopTouchObserver:function(){for(var i=0;i<this.__lV.length;i++ ){qx.bom.Event.removeNativeListener(this.__lN,this.__lV[i],this.__lQ);}
;}
,_onTouchEvent:function(I){this._commonTouchEventHandler(I);}
,_getScalingDistance:function(K,J){return (Math.sqrt(Math.pow(K.pageX-J.pageX,2)+Math.pow(K.pageY-J.pageY,2)));}
,_getRotationAngle:function(M,L){var x=M.pageX-L.pageX;var y=M.pageY-L.pageY;return (Math.atan2(y,x)*180/Math.PI);}
,_calcTouchesDelta:function(N){var O=[];for(var i=0;i<N.length;i++ ){O.push(this._calcSingleTouchDelta(N[i]));}
;return O;}
,_calcSingleTouchDelta:function(S){if(this.__lP.hasOwnProperty(S.identifier)){var R=this.__lP[S.identifier];var P=Math.floor(S.clientX-R[0]);var Q=Math.floor(S.clientY-R[1]);var T=C;if(Math.abs(P/Q)<1){T=k;}
;return {"x":P,"y":Q,"axis":T,"identifier":S.identifier};}
else {return {"x":0,"y":0,"axis":null,"identifier":S.identifier};}
;}
,_commonTouchEventHandler:function(V,ba){var ba=ba||V.type;if(qx.core.Environment.get(h)){ba=this._mapPointerEvent(ba);var U=this._detectTouchesByPointer(V,ba);V.changedTouches=U;V.targetTouches=U;V.touches=U;}
;V.delta=[];if(ba==E){this.__lR=this._getTarget(V);if(V.touches&&V.touches.length>1){this.__lT=this._getScalingDistance(V.touches[0],V.touches[1]);this.__lU=this._getRotationAngle(V.touches[0],V.touches[1]);}
;for(var i=0;i<V.changedTouches.length;i++ ){var Y=V.changedTouches[i];this.__lP[Y.identifier]=[Y.clientX,Y.clientY];}
;}
;if(ba==a){if(typeof V.scale==s&&V.targetTouches.length>1){var W=this._getScalingDistance(V.targetTouches[0],V.targetTouches[1]);V.scale=W/this.__lT;}
;if((typeof V.rotation==s||qx.core.Environment.get(h))&&V.targetTouches.length>1){var X=this._getRotationAngle(V.targetTouches[0],V.targetTouches[1]);V._rotation=X-this.__lU;}
;V.delta=this._calcTouchesDelta(V.targetTouches);}
;this._fireEvent(V,ba,this.__lR);if(qx.core.Environment.get(h)){if(ba==n||ba==t){delete this.__lO[V.pointerId];}
;}
;if((ba==n||ba==t)&&V.changedTouches[0]){delete this.__lP[V.changedTouches[0].identifier];}
;}
,_detectTouchesByPointer:function(bd,bf){var bc=[];if(bf==E){this.__lO[bd.pointerId]=bd;}
else if(bf==a){this.__lO[bd.pointerId]=bd;}
;for(var be in this.__lO){var bb=this.__lO[be];bc.push(bb);}
;return bc;}
,_mapPointerEvent:function(bg){bg=bg.toLowerCase();if(bg.indexOf(o)!==-1){return E;}
else if(bg.indexOf(m)!==-1){return n;}
else if(bg.indexOf(A)!==-1){return a;}
else if(bg.indexOf(f)!==-1){return t;}
;return bg;}
,_getTarget:function(bi){var bj=qx.bom.Event.getTarget(bi);if(qx.core.Environment.get(r)==v){if(bj&&bj.nodeType==3){bj=bj.parentNode;}
;}
else if(qx.core.Environment.get(h)){var bh=this.__lW(bi);if(bh){bj=bh;}
;}
;return bj;}
,__lW:function(bm){var bk=null;var bl=null;if(bm&&bm.touches&&bm.touches.length!==0){bk=bm.touches[0].clientX;bl=bm.touches[0].clientY;}
;var bo=document.msElementsFromPoint(bk,bl);if(bo){for(var i=0;i<bo.length;i++ ){var bp=bo[i];var bn=qx.bom.element.Style.get(bp,l,3);if(bn!=w){return bp;}
;}
;}
;return null;}
,_fireEvent:function(bq,br,bs){if(!bs){bs=this._getTarget(bq);}
;var br=br||bq.type;if(bs&&bs.nodeType&&this.__fo){this.__fo.emit(br,bq);}
;}
,dispose:function(){this._stopTouchObserver();this.__lR=this.__lN=this.__lV=this.__lO=this.__fo=this.__lT=this.__lU=null;}
}});}
)();
(function(){var a="resize",b="os.name",c="qx.event.handler.Orientation",d="landscape",e="android",f="portrait",g="orientationchange";qx.Class.define(c,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(h){qx.core.Object.call(this);this.__dr=h;this.__cr=h.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dr:null,__cr:null,__lX:null,_currentOrientation:null,__lY:null,canHandleEvent:function(j,i){}
,registerEvent:function(m,l,k){}
,unregisterEvent:function(p,o,n){}
,_initObserver:function(){this.__lY=qx.lang.Function.listener(this._onNative,this);this.__lX=qx.bom.Event.supportsEvent(this.__cr,g)?g:a;var Event=qx.bom.Event;Event.addNativeListener(this.__cr,this.__lX,this.__lY);}
,_stopObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__cr,this.__lX,this.__lY);}
,_onNative:qx.event.GlobalError.observeMethod(function(q){var r=0;if(qx.core.Environment.get(b)==e){r=300;}
;qx.lang.Function.delay(this._onOrientationChange,r,this,q);}
),_onOrientationChange:function(s){var u=qx.bom.Viewport;var t=u.getOrientation(s.target);if(this._currentOrientation!=t){this._currentOrientation=t;var v=u.isLandscape(s.target)?d:f;qx.event.Registration.fireEvent(this.__cr,g,qx.event.type.Orientation,[t,v]);}
;}
},destruct:function(){this._stopObserver();this.__dr=this.__cr=null;}
,defer:function(w){qx.event.Registration.addHandler(w);}
});}
)();
(function(){var a="landscape",b="qx.event.type.Orientation",c="portrait";qx.Class.define(b,{extend:qx.event.type.Event,members:{__ma:null,__io:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);this.__ma=d;this.__io=e;return this;}
,clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);g.__ma=this.__ma;g.__io=this.__io;return g;}
,getOrientation:function(){return this.__ma;}
,isLandscape:function(){return this.__io==a;}
,isPortrait:function(){return this.__io==c;}
}});}
)();
(function(){var a="touchmove",b="dispose",c="useraction",d="touchend",e="event.touch",f="touchstart",g="qx.event.handler.Touch";qx.Class.define(g,{extend:qx.event.handler.TouchCore,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(h){this.__dr=h;this.__cr=h.getWindow();this.__dU=this.__cr.document;qx.event.handler.TouchCore.apply(this,[this.__dU]);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,longtap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":f,"mousemove":a,"mouseup":d}},members:{__dr:null,__cr:null,__dU:null,__mb:false,canHandleEvent:function(j,i){}
,registerEvent:function(m,l,k){}
,unregisterEvent:function(p,o,n){}
,_fireEvent:function(r,q,s,t){if(!s){s=this._getTarget(r);}
;var q=q||r.type;if(s&&s.nodeType){qx.event.Registration.fireEvent(s,q,t||qx.event.type.Touch,[r,s,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cr,c,qx.event.type.Data,[q]);}
,_onTouchEvent:qx.event.GlobalError.observeMethod(function(u){this._commonTouchEventHandler(u);}
),dispose:function(){this.__kK(b);this.__dr=this.__cr=this.__dU=null;}
,__kK:function(w,v){qx.event.handler.TouchCore.prototype[w].apply(this,v||[]);}
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
,isMultiTouch:function(){return this.__md().length>1;}
,getScale:function(){return this._native.scale;}
,getRotation:function(){if(typeof this._native._rotation===d){return this._native.rotation;}
else {return this._native._rotation;}
;}
,getDelta:function(){return this._native.delta;}
,getDocumentLeft:function(g){return this.__mc(g).pageX;}
,getDocumentTop:function(h){return this.__mc(h).pageY;}
,getScreenLeft:function(j){return this.__mc(j).screenX;}
,getScreenTop:function(k){return this.__mc(k).screenY;}
,getViewportLeft:function(l){return this.__mc(l).clientX;}
,getViewportTop:function(m){return this.__mc(m).clientY;}
,getIdentifier:function(n){return this.__mc(n).identifier;}
,__mc:function(o){o=o==null?0:o;return this.__md()[o];}
,__md:function(){var p=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());return p;}
,_isTouchEnd:function(){return (this.getType()==c||this.getType()==a);}
}});}
)();
(function(){var a="qx.event.dispatch.DomBubbling";qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;}
,canDispatchEvent:function(d,event,c){return d.nodeType!==undefined&&event.getBubbles();}
},defer:function(e){qx.event.Registration.addDispatcher(e);}
});}
)();
(function(){var a="mshtml",b="engine.name",c="pointerup",d="dispose",e="useraction",f="mouse",g="pointercancel",h="pointerdown",i="pointermove",j="qx.event.handler.Pointer",k="browser.documentmode",l="qxanonymous";qx.Class.define(j,{extend:qx.event.handler.PointerCore,implement:[qx.event.IEventHandler,qx.core.IDisposable],statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{pointermove:1,pointerover:1,pointerout:1,pointerdown:1,pointerup:1,pointercancel:1,gesturebegin:1,gesturemove:1,gesturefinish:1,gesturecancel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true},construct:function(m){this.__dr=m;this.__cr=m.getWindow();this.__dU=this.__cr.document;qx.event.handler.PointerCore.apply(this,[this.__dU]);}
,members:{__dr:null,__cr:null,__dU:null,canHandleEvent:function(o,n){}
,registerEvent:function(r,q,p){}
,unregisterEvent:function(u,t,s){}
,_initPointerObserver:function(){var v=false;if(qx.core.Environment.get(b)==a&&qx.core.Environment.get(k)<9){v=true;}
;this._initObserver(this._onPointerEvent,v);}
,_fireEvent:function(w,x,y){if(!y){y=qx.bom.Event.getTarget(w);}
;while(y&&y.getAttribute&&y.getAttribute(l)){y=y.parentNode;}
;if(!x){x=w.type;}
;x=qx.event.handler.PointerCore.MSPOINTER_TO_POINTER_MAPPING[x]||x;if(y&&y.nodeType){qx.event.type.dom.Pointer.normalize(w);try{w.srcElement=y;}
catch(z){}
;qx.event.Registration.fireEvent(y,x,qx.event.type.Pointer,[w,y,null,true,true]);if((w.getPointerType()!==f||w.button<=qx.event.handler.PointerCore.LEFT_BUTTON)&&(x==h||x==c||x==i||x==g)){qx.event.Registration.fireEvent(this.__dU,qx.event.handler.PointerCore.POINTER_TO_GESTURE_MAPPING[x],qx.event.type.Pointer,[w,y,null,false,false]);}
;qx.event.Registration.fireEvent(this.__cr,e,qx.event.type.Data,[x]);}
;}
,_onPointerEvent:function(A){if(A._original&&A._original[this._processedFlag]){return;}
;var B=qx.event.handler.PointerCore.MSPOINTER_TO_POINTER_MAPPING[A.type]||A.type;this._fireEvent(A,B,qx.bom.Event.getTarget(A));}
,dispose:function(){this.__kK(d);this.__dr=this.__cr=this.__dU=null;}
,__kK:function(D,C){qx.event.handler.PointerCore.prototype[D].apply(this,C||[]);}
},defer:function(E){qx.event.Registration.addHandler(E);qx.event.Registration.getManager(document).getHandler(E);}
});}
)();
(function(){var a="offline",b="qx.event.handler.Offline",c="online";qx.Class.define(b,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(d){qx.core.Object.call(this);this.__dr=d;this.__cr=d.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{online:true,offline:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dr:null,__cr:null,__lY:null,canHandleEvent:function(f,e){}
,registerEvent:function(i,h,g){}
,unregisterEvent:function(l,k,j){}
,_initObserver:function(){this.__lY=qx.lang.Function.listener(this._onNative,this);qx.bom.Event.addNativeListener(this.__cr,a,this.__lY);qx.bom.Event.addNativeListener(this.__cr,c,this.__lY);}
,_stopObserver:function(){qx.bom.Event.removeNativeListener(this.__cr,a,this.__lY);qx.bom.Event.removeNativeListener(this.__cr,c,this.__lY);}
,_onNative:qx.event.GlobalError.observeMethod(function(m){qx.event.Registration.fireEvent(this.__cr,m.type,qx.event.type.Event,[]);}
),isOnline:function(){return !!this.__cr.navigator.onLine;}
},destruct:function(){this.__dr=null;this._stopObserver();delete qx.event.handler.Appear.__instances[this.$$hash];}
,defer:function(n){qx.event.Registration.addHandler(n);}
});}
)();
(function(){var a="dblclick",b="os.name",c="mouseup",d="mousedown",e="useraction",f="webkit",g="contextmenu",h="mousewheel",i="auxclick",j="mouseover",k="mouseout",l="gecko",m="ios",n="click",o="mousemove",p="qx.event.handler.Mouse",q="on",r="engine.name";qx.Class.define(p,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(s){qx.core.Object.call(this);this.__dr=s;this.__cr=s.getWindow();this.__dU=this.__cr.document;this._initButtonObserver();this._initMoveObserver();this._initWheelObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,auxclick:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__me:null,__mf:null,__mg:null,__mh:null,__mi:null,__dr:null,__cr:null,__dU:null,__mj:null,canHandleEvent:function(u,t){}
,registerEvent:qx.core.Environment.get(b)===m?function(x,w,v){x[q+w]=(function(){return null;}
);}
:(function(){return null;}
),unregisterEvent:qx.core.Environment.get(b)===m?function(A,z,y){A[q+z]=undefined;}
:(function(){return null;}
),__cK:function(B,C,D){if(!D){D=qx.bom.Event.getTarget(B);}
;if(D&&D.nodeType){qx.event.Registration.fireEvent(D,C||B.type,C==h?qx.event.type.MouseWheel:qx.event.type.Mouse,[B,D,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cr,e,qx.event.type.Data,[C||B.type]);}
,preventNextClick:function(){this.__mj=true;}
,_initButtonObserver:function(){this.__me=qx.lang.Function.listener(this._onButtonEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dU,d,this.__me);Event.addNativeListener(this.__dU,c,this.__me);Event.addNativeListener(this.__dU,n,this.__me);Event.addNativeListener(this.__dU,i,this.__me);Event.addNativeListener(this.__dU,a,this.__me);Event.addNativeListener(this.__dU,g,this.__me);}
,_initMoveObserver:function(){this.__mf=qx.lang.Function.listener(this._onMoveEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dU,o,this.__mf);Event.addNativeListener(this.__dU,j,this.__mf);Event.addNativeListener(this.__dU,k,this.__mf);}
,_initWheelObserver:function(){this.__mg=qx.lang.Function.listener(this._onWheelEvent,this);var E=qx.bom.client.Event.getMouseWheel(this.__cr);qx.bom.Event.addNativeListener(E.target,E.type,this.__mg);}
,_stopButtonObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__dU,d,this.__me);Event.removeNativeListener(this.__dU,c,this.__me);Event.removeNativeListener(this.__dU,n,this.__me);Event.removeNativeListener(this.__dU,a,this.__me);Event.removeNativeListener(this.__dU,g,this.__me);}
,_stopMoveObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__dU,o,this.__mf);Event.removeNativeListener(this.__dU,j,this.__mf);Event.removeNativeListener(this.__dU,k,this.__mf);}
,_stopWheelObserver:function(){var F=qx.bom.client.Event.getMouseWheel(this.__cr);qx.bom.Event.removeNativeListener(F.target,F.type,this.__mg);}
,_onMoveEvent:qx.event.GlobalError.observeMethod(function(G){this.__cK(G);}
),_onButtonEvent:qx.event.GlobalError.observeMethod(function(J){var I=J.type;var K=qx.bom.Event.getTarget(J);if(I==n&&this.__mj){delete this.__mj;return;}
;if(qx.core.Environment.get(r)==l||qx.core.Environment.get(r)==f){if(K&&K.nodeType==3){K=K.parentNode;}
;}
;var H=qx.event.handler.DragDrop&&this.__dr.getHandler(qx.event.handler.DragDrop).isSessionActive();if(H&&I==n){return;}
;if(this.__ml){this.__ml(J,I,K);}
;this.__cK(J,I,K);if(I==i&&J.button==1){this.__cK(J,n,K);}
;if(this.__mk){this.__mk(J,I,K);}
;if(this.__mm&&!H){this.__mm(J,I,K);}
;this.__mh=I;}
),_onWheelEvent:qx.event.GlobalError.observeMethod(function(L){this.__cK(L,h);}
),__mk:qx.core.Environment.select(r,{"opera":function(M,N,O){if(N==c&&M.button==2){this.__cK(M,g,O);}
;}
,"default":null}),__ml:qx.core.Environment.select(r,{"mshtml":function(P,Q,R){if(P.target!==undefined){return;}
;if(Q==c&&this.__mh==n){this.__cK(P,d,R);}
else if(Q==a){this.__cK(P,n,R);}
;}
,"default":null}),__mm:qx.core.Environment.select(r,{"mshtml":null,"default":function(T,S,U){switch(S){case d:this.__mi=U;break;case c:if(U!==this.__mi){var V=qx.dom.Hierarchy.getCommonParent(U,this.__mi);if(V){this.__cK(T,n,V);}
;}
;};}
})},destruct:function(){this._stopButtonObserver();this._stopMoveObserver();this._stopWheelObserver();this.__dr=this.__cr=this.__dU=this.__mi=null;}
,defer:function(W){qx.event.Registration.addHandler(W);}
});}
)();
(function(){var a="qx.event.type.MouseWheel";qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();this.preventDefault();}
,getWheelDelta:function(b){return qx.util.Wheel.getDelta(this._native,b);}
}});}
)();
(function(){var a="FACTOR : ",b="x",c="y",d="qx.debug.touchpad.detection",e="qx.util.Wheel";qx.Bootstrap.define(e,{statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1,IS_TOUCHPAD:false,getDelta:function(g,f){if(f===undefined){var h=0;if(g.wheelDelta!==undefined){h=-g.wheelDelta;}
else if(g.detail!==0){h=g.detail;}
else if(g.deltaY!==undefined){h=g.deltaY;}
;return this.__lm(h);}
;if(f===b){var x=0;if(g.wheelDelta!==undefined){if(g.wheelDeltaX!==undefined){x=g.wheelDeltaX?this.__lm(-g.wheelDeltaX):0;}
;}
else {if(g.axis&&g.axis==g.HORIZONTAL_AXIS&&(g.detail!==undefined)&&(g.detail>0)){x=this.__lm(g.detail);}
else if(g.deltaX!==undefined){x=this.__lm(g.deltaX);}
;}
;return x;}
;if(f===c){var y=0;if(g.wheelDelta!==undefined){if(g.wheelDeltaY!==undefined){y=g.wheelDeltaY?this.__lm(-g.wheelDeltaY):0;}
else {y=this.__lm(-g.wheelDelta);}
;}
else {if(!(g.axis&&g.axis==g.HORIZONTAL_AXIS)&&(g.detail!==undefined)&&(g.detail>0)){y=this.__lm(g.detail);}
else if(g.deltaY!==undefined){y=this.__lm(g.deltaY);}
;}
;return y;}
;return 0;}
,__lm:function(l){if(qx.util.Wheel.IS_TOUCHPAD){qx.util.Wheel.MINSCROLL=null;qx.util.Wheel.MAXSCROLL=null;qx.util.Wheel.FACTOR=1;return l;}
;var i=Math.abs(l);if(i===0){return 0;}
;if(qx.util.Wheel.MINSCROLL==null||qx.util.Wheel.MINSCROLL>i){qx.util.Wheel.MINSCROLL=i;this.__ln();}
;if(qx.util.Wheel.MAXSCROLL==null||qx.util.Wheel.MAXSCROLL<i){qx.util.Wheel.MAXSCROLL=i;this.__ln();}
;if(qx.util.Wheel.MAXSCROLL===i&&qx.util.Wheel.MINSCROLL===i){return 2*(l/i);}
;var j=qx.util.Wheel.MAXSCROLL-qx.util.Wheel.MINSCROLL;var k=(l/j)*Math.log(j)*qx.util.Wheel.FACTOR;return k<0?Math.min(k,-1):Math.max(k,1);}
,__ln:function(){var m=qx.util.Wheel.MAXSCROLL||0;var p=qx.util.Wheel.MINSCROLL||m;if(m<=p){return;}
;var n=m-p;var o=(m/n)*Math.log(n);if(o==0){o=1;}
;qx.util.Wheel.FACTOR=6/o;if(qx.core.Environment.get(d)){qx.log.Logger.debug(this,a+qx.util.Wheel.FACTOR);}
;}
}});}
)();
(function(){var a="text",b="engine.version",c="keydown",d="radio",f="textarea",g="password",h="propertychange",j="select-multiple",k="change",m="input",n="value",p="select",q="browser.documentmode",r="browser.version",s="opera",t="keyup",u="mshtml",v="engine.name",w="keypress",x="checkbox",y="qx.event.handler.Input",z="checked";qx.Class.define(y,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);if((qx.core.Environment.get(v)==s)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);}
;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__mn:false,__mo:null,__mp:null,__mq:null,canHandleEvent:function(C,B){var A=C.tagName.toLowerCase();if(B===m&&(A===m||A===f)){return true;}
;if(B===k&&(A===m||A===f||A===p)){return true;}
;return false;}
,registerEvent:function(H,G,E){if(qx.core.Environment.get(v)==u&&(qx.core.Environment.get(b)<9||(qx.core.Environment.get(b)>=9&&qx.core.Environment.get(q)<9))){if(!H.__mr){var F=H.tagName.toLowerCase();var D=H.type;if(D===a||D===g||F===f||D===x||D===d){qx.bom.Event.addNativeListener(H,h,this._onPropertyWrapper);}
;if(D!==x&&D!==d){qx.bom.Event.addNativeListener(H,k,this._onChangeValueWrapper);}
;if(D===a||D===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,H);qx.bom.Event.addNativeListener(H,w,this._onKeyPressWrapped);}
;H.__mr=true;}
;}
else {if(G===m){this.__ms(H);}
else if(G===k){if(H.type===d||H.type===x){qx.bom.Event.addNativeListener(H,k,this._onChangeCheckedWrapper);}
else {qx.bom.Event.addNativeListener(H,k,this._onChangeValueWrapper);}
;if((qx.core.Environment.get(v)==s)||(qx.core.Environment.get(v)==u)){if(H.type===a||H.type===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,H);qx.bom.Event.addNativeListener(H,w,this._onKeyPressWrapped);}
;}
;}
;}
;}
,__ms:qx.core.Environment.select(v,{"mshtml":function(I){if(qx.core.Environment.get(b)>=9&&qx.core.Environment.get(q)>=9){qx.bom.Event.addNativeListener(I,m,this._onInputWrapper);if(I.type===a||I.type===g||I.type===f){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,I);qx.bom.Event.addNativeListener(I,t,this._inputFixWrapper);}
;}
;}
,"webkit":function(K){var J=K.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(b))<532&&J==f){qx.bom.Event.addNativeListener(K,w,this._onInputWrapper);}
;qx.bom.Event.addNativeListener(K,m,this._onInputWrapper);}
,"opera":function(L){qx.bom.Event.addNativeListener(L,t,this._onKeyUpWrapper);qx.bom.Event.addNativeListener(L,c,this._onKeyDownWrapper);qx.bom.Event.addNativeListener(L,m,this._onInputWrapper);}
,"default":function(M){qx.bom.Event.addNativeListener(M,m,this._onInputWrapper);}
}),unregisterEvent:function(Q,P){if(qx.core.Environment.get(v)==u&&qx.core.Environment.get(b)<9&&qx.core.Environment.get(q)<9){if(Q.__mr){var O=Q.tagName.toLowerCase();var N=Q.type;if(N===a||N===g||O===f||N===x||N===d){qx.bom.Event.removeNativeListener(Q,h,this._onPropertyWrapper);}
;if(N!==x&&N!==d){qx.bom.Event.removeNativeListener(Q,k,this._onChangeValueWrapper);}
;if(N===a||N===g){qx.bom.Event.removeNativeListener(Q,w,this._onKeyPressWrapped);}
;try{delete Q.__mr;}
catch(R){Q.__mr=null;}
;}
;}
else {if(P===m){this.__mt(Q);}
else if(P===k){if(Q.type===d||Q.type===x){qx.bom.Event.removeNativeListener(Q,k,this._onChangeCheckedWrapper);}
else {qx.bom.Event.removeNativeListener(Q,k,this._onChangeValueWrapper);}
;}
;if((qx.core.Environment.get(v)==s)||(qx.core.Environment.get(v)==u)){if(Q.type===a||Q.type===g){qx.bom.Event.removeNativeListener(Q,w,this._onKeyPressWrapped);}
;}
;}
;}
,__mt:qx.core.Environment.select(v,{"mshtml":function(S){if(qx.core.Environment.get(b)>=9&&qx.core.Environment.get(q)>=9){qx.bom.Event.removeNativeListener(S,m,this._onInputWrapper);if(S.type===a||S.type===g||S.type===f){qx.bom.Event.removeNativeListener(S,t,this._inputFixWrapper);}
;}
;}
,"webkit":function(U){var T=U.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(b))<532&&T==f){qx.bom.Event.removeNativeListener(U,w,this._onInputWrapper);}
;qx.bom.Event.removeNativeListener(U,m,this._onInputWrapper);}
,"opera":function(V){qx.bom.Event.removeNativeListener(V,t,this._onKeyUpWrapper);qx.bom.Event.removeNativeListener(V,c,this._onKeyDownWrapper);qx.bom.Event.removeNativeListener(V,m,this._onInputWrapper);}
,"default":function(W){qx.bom.Event.removeNativeListener(W,m,this._onInputWrapper);}
}),_onKeyPress:qx.core.Environment.select(v,{"mshtml":function(e,X){if(e.keyCode===13){if(X.value!==this.__mp){this.__mp=X.value;qx.event.Registration.fireEvent(X,k,qx.event.type.Data,[X.value]);}
;}
;}
,"opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__mp){this.__mp=Y.value;qx.event.Registration.fireEvent(Y,k,qx.event.type.Data,[Y.value]);}
;}
;}
,"default":null}),_inputFix:qx.core.Environment.select(v,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__mq){this.__mq=ba.value;qx.event.Registration.fireEvent(ba,m,qx.event.type.Data,[ba.value]);}
;}
;}
,"default":null}),_onKeyDown:qx.core.Environment.select(v,{"opera":function(e){if(e.keyCode===13){this.__mn=true;}
;}
,"default":null}),_onKeyUp:qx.core.Environment.select(v,{"opera":function(e){if(e.keyCode===13){this.__mn=false;}
;}
,"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);var bb=bc.tagName.toLowerCase();if(!this.__mn||bb!==m){if((qx.core.Environment.get(v)==s)&&qx.core.Environment.get(r)<10.6){this.__mo=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);}
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
(function(){var a="qx.event.type.Roll";qx.Class.define(a,{extend:qx.event.type.Pointer,members:{stop:function(){this.stopPropagation();this.preventDefault();}
,_cloneNativeEvent:function(b,c){var c=qx.event.type.Pointer.prototype._cloneNativeEvent.call(this,b,c);c.delta=b.delta;c.momentum=b.momentum;c.timeoutId=b.timeoutId;return c;}
,getMomentum:function(){return this._native.momentum;}
,stopMomentum:function(){if(this._native.timeoutId){qx.event.Registration.getManager(this._originalTarget).getHandler(qx.event.handler.Gesture).stopMomentum(this._native.timeoutId);}
;}
,getDelta:function(){return this._native.delta;}
}});}
)();
(function(){var a="swipe",b="os.name",c="pinch",d="event.dispatchevent",e="gesturemove",f="touch",g="longtap",h="os.version",j="event.mousewheel",k="roll",l="dblclick",m="wheel",n="osx",o="rotate",p="trackstart",q="gesturefinish",r="y",s="browser.documentmode",t="dbltap",u="qx.event.handler.GestureCore",v="right",w="mshtml",z="engine.name",A="qx.debug.touchpad.detection",B="gesturecancel",C="gesturebegin",D="track",E="trackend",F="IS_TOUCHPAD : ",G="left",H="tap",I="down",J="x",K="up";qx.Bootstrap.define(u,{extend:Object,implement:[qx.core.IDisposable],statics:{TYPES:[H,a,g,t,D,p,E,o,c,k],GESTURE_EVENTS:[C,q,e,B],TAP_MAX_DISTANCE:{"touch":40,"mouse":5,"pen":20},DOUBLETAP_MAX_DISTANCE:{"touch":10,"mouse":4,"pen":10},SWIPE_DIRECTION:{x:[G,v],y:[K,I]},LONGTAP_TIME:500,DOUBLETAP_TIME:500,ROLL_FACTOR:18,TOUCHPAD_ROLL_FACTOR:1,TOUCHPAD_WHEEL_EVENTS_THRESHOLD:10,TOUCHPAD_WHEEL_EVENTS_PERIOD:100,TOUCHPAD_WHEEL_EVENTS_TIMEOUT:5000},construct:function(L,M){this.__fn=L;this.__fo=M;this.__kL={};this.__kM={};this.__kN={};this.__kO={};this.__kP=[];this._initObserver();}
,members:{__fn:null,__fo:null,__kL:null,__kQ:null,__kR:null,__kS:null,__kT:null,__kM:null,__kU:null,__kN:null,__kV:null,__kO:null,__kP:null,__kW:0,__kX:0,__kY:false,__la:0,_initObserver:function(){qx.event.handler.GestureCore.GESTURE_EVENTS.forEach(function(O){qxWeb(this.__fn).on(O,this.checkAndFireGesture,this);}
.bind(this));if(qx.core.Environment.get(z)==w&&qx.core.Environment.get(s)<9){qxWeb(this.__fn).on(l,this._onDblClick,this);}
;var N=qx.core.Environment.get(j);qxWeb(N.target).on(N.type,this._fireRoll,this);}
,_stopObserver:function(){qx.event.handler.GestureCore.GESTURE_EVENTS.forEach(function(Q){qxWeb(this.__fn).off(Q,this.checkAndFireGesture,this);}
.bind(this));if(qx.core.Environment.get(z)==w&&qx.core.Environment.get(s)<9){qxWeb(this.__fn).off(l,this._onDblClick,this);}
;var P=qx.core.Environment.get(j);qxWeb(P.target).off(P.type,this._fireRoll,this);}
,checkAndFireGesture:function(R,S,T){if(!S){S=R.type;}
;if(!T){T=qx.bom.Event.getTarget(R);}
;if(S==C){this.gestureBegin(R,T);}
else if(S==e){this.gestureMove(R,T);}
else if(S==q){this.gestureFinish(R,T);}
else if(S==B){this.gestureCancel(R.pointerId);}
;}
,gestureBegin:function(U,V){if(this.__kL[U.pointerId]){this.__ll(this.__kL[U.pointerId]);delete this.__kL[U.pointerId];}
;if(this._hasIntermediaryHandler(V)){return;}
;this.__kL[U.pointerId]={"startTime":new Date().getTime(),"lastEventTime":new Date().getTime(),"startX":U.clientX,"startY":U.clientY,"clientX":U.clientX,"clientY":U.clientY,"velocityX":0,"velocityY":0,"target":V,"isTap":true,"isPrimary":U.isPrimary,"longTapTimer":window.setTimeout(this.__lk.bind(this,U,V),qx.event.handler.GestureCore.LONGTAP_TIME)};if(U.isPrimary){this.__kS=false;this.__kR=V;this.__le(p,U,V);}
else {this.__kS=true;if(Object.keys(this.__kL).length===2){this.__kT=this._calcAngle();this.__kV=this._calcDistance();}
;}
;}
,gestureMove:function(X,Y){var ba=this.__kL[X.pointerId];if(ba){var W=ba.clientX;var bb=ba.clientY;ba.clientX=X.clientX;ba.clientY=X.clientY;ba.lastEventTime=new Date().getTime();if(W){ba.velocityX=ba.clientX-W;}
;if(bb){ba.velocityY=ba.clientY-bb;}
;if(Object.keys(this.__kL).length===2){this.__li(X,ba.target);this.__lj(X,ba.target);}
;if(!this.__kS){this.__le(D,X,ba.target);this._fireRoll(X,f,ba.target);}
;if(ba.isTap){ba.isTap=this._isBelowTapMaxDistance(X);if(!ba.isTap){this.__ll(ba);}
;}
;}
;}
,_hasIntermediaryHandler:function(bc){while(bc&&bc!==this.__fn){if(bc.$$gestureHandler){return true;}
;bc=bc.parentNode;}
;return false;}
,gestureFinish:function(be,bf){if(!this.__kL[be.pointerId]){return;}
;var bl=this.__kL[be.pointerId];this.__ll(bl);if(this._hasIntermediaryHandler(bf)){return;}
;this.__lb(bl.velocityX,bl.velocityY,be,bl.target);this.__le(E,be,bl.target);if(bl.isTap){if(bf!==bl.target){delete this.__kL[be.pointerId];return;}
;this._fireEvent(be,H,be.target||bf);var bg=false;if(Object.keys(this.__kM).length>0){var bk=Date.now()-qx.event.handler.GestureCore.DOUBLETAP_TIME;for(var bm in this.__kM){if(bm<bk){delete this.__kM[bm];}
else {var bd=this.__kM[bm];var bi=this.__lc(bd.x,bd.y,be.clientX,be.clientY,be.getPointerType());var bj=bd.target===(be.target||bf);var bn=bd.button===be.button;if(bi&&bn&&bj){bg=true;delete this.__kM[bm];this._fireEvent(be,t,be.target||bf);}
;}
;}
;}
;if(!bg){this.__kM[Date.now()]={x:be.clientX,y:be.clientY,target:be.target||bf,button:be.button};}
;}
else if(!this._isBelowTapMaxDistance(be)){var bh=this.__ld(be,bf);if(bh){be.swipe=bh;this._fireEvent(be,a,bl.target||bf);}
;}
;delete this.__kL[be.pointerId];}
,stopMomentum:function(bo){this.__kN[bo]=true;}
,gestureCancel:function(bp){if(this.__kL[bp]){this.__ll(this.__kL[bp]);delete this.__kL[bp];}
;if(this.__kO[bp]){this.stopMomentum(this.__kO[bp]);delete this.__kO[bp];}
;}
,updateGestureTarget:function(bq,br){this.__kL[bq].target=br;}
,__lb:function(bw,bx,bt,bu,bz){var by=bt.timeoutId;if(!bz&&this.__kO[bt.pointerId]){this.stopMomentum(this.__kO[bt.pointerId]);}
;if((Math.abs(bx)<1&&Math.abs(bw)<1)||this.__kN[by]||!this.getWindow()){delete this.__kN[by];delete this.__kO[bt.pointerId];return;}
;if(!bz){bz=1;var bv=2.8;bx=bx/bv;bw=bw/bv;}
;bz+=0.0006;bx=bx/bz;bw=bw/bz;var bs=qx.bom.AnimationFrame.request(qx.lang.Function.bind(function(bA,bB,bC,bD,bE){this.__lb(bA,bB,bC,bD,bE);}
,this,bw,bx,bt,bu,bz));bw=Math.round(bw*100)/100;bx=Math.round(bx*100)/100;bt.delta={x:-bw,y:-bx};bt.momentum=true;bt.timeoutId=bs;this.__kO[bt.pointerId]=bs;this._fireEvent(bt,k,bt.target||bu);}
,_calcAngle:function(){var bG=null;var bH=null;for(var bF in this.__kL){var bI=this.__kL[bF];if(bG===null){bG=bI;}
else {bH=bI;}
;}
;var x=bG.clientX-bH.clientX;var y=bG.clientY-bH.clientY;return (360+Math.atan2(y,x)*(180/Math.PI))%360;}
,_calcDistance:function(){var bJ=null;var bK=null;for(var bM in this.__kL){var bN=this.__kL[bM];if(bJ===null){bJ=bN;}
else {bK=bN;}
;}
;var bL=Math.sqrt(Math.pow(bJ.clientX-bK.clientX,2)+Math.pow(bJ.clientY-bK.clientY,2));return bL;}
,_isBelowTapMaxDistance:function(bP){var bQ=this._getDeltaCoordinates(bP);var bO=qx.event.handler.GestureCore.TAP_MAX_DISTANCE[bP.getPointerType()];if(!bQ){return null;}
;return (Math.abs(bQ.x)<=bO&&Math.abs(bQ.y)<=bO);}
,__lc:function(bR,bV,bW,bX,bY){var bU=qx.event.handler.GestureCore;var bS=Math.abs(bR-bW)<bU.DOUBLETAP_MAX_DISTANCE[bY];var bT=Math.abs(bV-bX)<bU.DOUBLETAP_MAX_DISTANCE[bY];return bS&&bT;}
,_getDeltaCoordinates:function(cc){var cd=this.__kL[cc.pointerId];if(!cd){return null;}
;var ca=cc.clientX-cd.startX;var cb=cc.clientY-cd.startY;var ce=J;if(Math.abs(ca/cb)<1){ce=r;}
;return {"x":ca,"y":cb,"axis":ce};}
,_fireEvent:function(cg,ci,ch){if(!this.__fn){return;}
;var cf;if(qx.core.Environment.get(d)){cf=new qx.event.type.dom.Custom(ci,cg,{bubbles:true,swipe:cg.swipe,scale:cg.scale,angle:cg.angle,delta:cg.delta,pointerType:cg.pointerType,momentum:cg.momentum});ch.dispatchEvent(cf);}
else if(this.__fo){cf=new qx.event.type.dom.Custom(ci,cg,{target:this.__fn,currentTarget:this.__fn,srcElement:this.__fn,swipe:cg.swipe,scale:cg.scale,angle:cg.angle,delta:cg.delta,pointerType:cg.pointerType,momentum:cg.momentum});this.__fo.emit(ci,cg);}
;}
,_onDblClick:function(cj){var ck=qx.bom.Event.getTarget(cj);this._fireEvent(cj,H,ck);this._fireEvent(cj,t,ck);}
,__ld:function(cn,co){var cu=this.__kL[cn.pointerId];if(!cu){return null;}
;var cq=qx.event.handler.GestureCore;var ct=this._getDeltaCoordinates(cn);var cr=new Date().getTime()-cu.startTime;var cv=(Math.abs(ct.x)>=Math.abs(ct.y))?J:r;var cl=ct[cv];var cm=cq.SWIPE_DIRECTION[cv][cl<0?0:1];var cs=(cr!==0)?cl/cr:0;var cp={startTime:cu.startTime,duration:cr,axis:cv,direction:cm,distance:cl,velocity:cs};return cp;}
,__le:function(cw,cx,cy){cx.delta=this._getDeltaCoordinates(cx);this._fireEvent(cx,cw,cx.target||cy);}
,__lf:function(cz,cA,cB){cz.delta={x:qx.util.Wheel.getDelta(cz,J)*cB,y:qx.util.Wheel.getDelta(cz,r)*cB};cz.delta.axis=Math.abs(cz.delta.x/cz.delta.y)<1?r:J;cz.pointerType=m;this._fireEvent(cz,k,cz.target||cA);}
,__lg:function(cE){var cF=qx.event.handler.GestureCore.ROLL_FACTOR;if(qx.util.Wheel.IS_TOUCHPAD){cF=qx.event.handler.GestureCore.TOUCHPAD_ROLL_FACTOR;}
;this.__la=new Date().getTime();var cC=this.__kP.length;for(var i=0;i<cC;i++ ){var cD=this.__kP[i];this.__lf(cD,cE,cF);}
;this.__kP=[];}
,__lh:function(){if(this.__kP.length>qx.event.handler.GestureCore.TOUCHPAD_WHEEL_EVENTS_THRESHOLD){qx.util.Wheel.IS_TOUCHPAD=true;}
else {qx.util.Wheel.IS_TOUCHPAD=false;}
;if(qx.core.Environment.get(A)){qx.log.Logger.debug(this,F+qx.util.Wheel.IS_TOUCHPAD);}
;this.__kY=true;}
,_isTouchPadDetectionEnabled:function(){return qx.core.Environment.get(b)==n&&qx.core.Environment.get(h)>=10.12;}
,_fireRoll:function(cG,cK,cH){var cJ;var cI;if(cG.type===qx.core.Environment.get(j).type){if(this._isTouchPadDetectionEnabled()){cJ=new Date().getTime();cI=qx.event.handler.GestureCore.TOUCHPAD_WHEEL_EVENTS_TIMEOUT;if(this.__la>0&&cJ-this.__la>cI){this.__kY=false;this.__kP=[];this.__la=0;}
;if(!this.__kY){if(this.__kP.length===0){this.__kW=cJ;qx.event.Timer.once(function(){if(!this.__kY){this.__lh();this.__lg(cH);}
;}
,this,qx.event.handler.GestureCore.TOUCHPAD_WHEEL_EVENTS_PERIOD+50);}
;this.__kP.push(cG);this.__kX++ ;if(cJ-this.__kW>qx.event.handler.GestureCore.TOUCHPAD_WHEEL_EVENTS_PERIOD){this.__lh();}
;}
;if(this.__kY){if(this.__kP.length===0){this.__kP.push(cG);}
;this.__lg(cH);}
;}
else {this.__lf(cG,cH,qx.event.handler.GestureCore.ROLL_FACTOR);}
;}
else {var cL=this.__kL[cG.pointerId];cG.delta={x:-cL.velocityX,y:-cL.velocityY,axis:Math.abs(cL.velocityX/cL.velocityY)<1?r:J};this._fireEvent(cG,k,cG.target||cH);}
;}
,__li:function(cM,cO){if(!cM.isPrimary){var cN=this._calcAngle();cM.angle=Math.round((cN-this.__kT)%360);this._fireEvent(cM,o,this.__kR);}
;}
,__lj:function(cR,cS){if(!cR.isPrimary){var cP=this._calcDistance();var cQ=cP/this.__kV;cR.scale=(Math.round(cQ*100)/100);this._fireEvent(cR,c,this.__kR);}
;}
,__lk:function(cT,cU){var cV=this.__kL[cT.pointerId];if(cV){this._fireEvent(cT,g,cT.target||cU);cV.longTapTimer=null;cV.isTap=false;}
;}
,__ll:function(cW){if(cW.longTapTimer){window.clearTimeout(cW.longTapTimer);cW.longTapTimer=null;}
;}
,dispose:function(){for(var cX in this.__kL){this.__ll(cX);}
;this._stopObserver();this.__fn=this.__fo=null;}
}});}
)();
(function(){var a="qx.event.Timer",b="_applyInterval",c="interval",d="func is not a function",f="Boolean",g="qx.debug",h="No timeout given",i="Integer",j="qx.event.type.Event",k="_applyEnabled";qx.Class.define(a,{extend:qx.core.Object,implement:[qx.core.IDisposable],construct:function(l){qx.core.Object.call(this);this.setEnabled(false);if(l!=null){this.setInterval(l);}
;var self=this;this.__ez=function(){self._oninterval.call(self);}
;}
,events:{"interval":j},statics:{once:function(m,n,o){if(qx.core.Environment.get(g)){qx.core.Assert.assertFunction(m,d);qx.core.Assert.assertNotUndefined(o,h);}
;var p=new qx.event.Timer(o);p.__eA=m;p.addListener(c,function(e){p.stop();m.call(n,e);p.dispose();n=null;}
,n);p.start();return p;}
},properties:{enabled:{init:true,check:f,apply:k},interval:{check:i,init:1000,apply:b}},members:{__eB:null,__ez:null,_applyInterval:function(r,q){if(this.getEnabled()){this.restart();}
;}
,_applyEnabled:function(t,s){if(s){window.clearInterval(this.__eB);this.__eB=null;}
else if(t){this.__eB=window.setInterval(this.__ez,this.getInterval());}
;}
,start:function(){this.setEnabled(true);}
,startWith:function(u){this.setInterval(u);this.start();}
,stop:function(){this.setEnabled(false);}
,restart:function(){this.stop();this.start();}
,restartWith:function(v){this.stop();this.startWith(v);}
,_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;}
;if(this.getEnabled()){this.fireEvent(c);}
;}
)},destruct:function(){if(this.__eB){window.clearInterval(this.__eB);}
;this.__eB=this.__ez=null;}
});}
)();
(function(){var a="dblclick",b="mshtml",c="engine.name",d="dispose",e="useraction",f="gesturemove",g="gesturecancel",h="checkAndFireGesture",i="gesturebegin",j="qx.event.handler.Gesture",k="gesturefinish",l="browser.documentmode";qx.Class.define(j,{extend:qx.event.handler.GestureCore,implement:[qx.event.IEventHandler,qx.core.IDisposable],statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{tap:1,swipe:1,longtap:1,dbltap:1,rotate:1,pinch:1,track:1,trackstart:1,trackend:1,roll:1},GESTURE_EVENTS:[i,k,f,g],TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,EVENT_CLASSES:{"tap":qx.event.type.Tap,"longtap":qx.event.type.Tap,"dbltap":qx.event.type.Tap,"swipe":qx.event.type.Swipe,"rotate":qx.event.type.Rotate,"pinch":qx.event.type.Pinch,"track":qx.event.type.Track,"trackstart":qx.event.type.Track,"trackend":qx.event.type.Track,"roll":qx.event.type.Roll}},construct:function(m){this.__dr=m;this.__cr=m.getWindow();this.__dU=this.__cr.document;qx.event.handler.GestureCore.apply(this,[this.__dU]);}
,members:{__dr:null,__cr:null,__dU:null,__fk:null,__lo:null,__lp:null,getWindow:function(){return this.__cr;}
,canHandleEvent:function(o,n){}
,registerEvent:function(r,q,p){}
,unregisterEvent:function(u,t,s){}
,_initObserver:function(){this.__fk=qx.lang.Function.listener(this.checkAndFireGesture,this);qx.event.handler.Gesture.GESTURE_EVENTS.forEach(function(w){qx.event.Registration.addListener(this.__dU,w,this.__fk,this);}
.bind(this));if(qx.core.Environment.get(c)==b&&qx.core.Environment.get(l)<9){this.__lo=qx.lang.Function.listener(this._onDblClick,this);qx.bom.Event.addNativeListener(this.__dU,a,this.__lo);}
;var v=qx.bom.client.Event.getMouseWheel(this.__cr);this.__lp=qx.lang.Function.listener(this._fireRoll,this);qx.bom.Event.addNativeListener(v.target,v.type,this.__lp,true);}
,checkAndFireGesture:function(y,x,z){this.__kK(h,[y.getNativeEvent(),y.getType(),y.getTarget()]);}
,_stopObserver:function(){qx.event.handler.Gesture.GESTURE_EVENTS.forEach(function(B){qx.event.Registration.removeListener(this.__dU,B,this.__fk);}
.bind(this));if(qx.core.Environment.get(c)==b&&qx.core.Environment.get(l)<9){qx.bom.Event.removeNativeListener(this.__dU,a,this.__lo);}
;var A=qx.bom.client.Event.getMouseWheel(this.__cr);qx.bom.Event.removeNativeListener(A.target,A.type,this.__lp);}
,_hasIntermediaryHandler:function(C){return false;}
,_fireEvent:function(E,D,F){if(!F){F=qx.bom.Event.getTarget(E);}
;if(!D){D=E.type;}
;var G=qx.event.handler.Gesture.EVENT_CLASSES[D]||qx.event.type.Pointer;if(F&&F.nodeType){qx.event.Registration.fireEvent(F,D,G,[E,F,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cr,e,qx.event.type.Data,[D]);}
,dispose:function(){this._stopObserver();this.__kK(d);this.__dr=this.__cr=this.__dU=this.__lo=null;}
,__kK:function(I,H){qx.event.handler.GestureCore.prototype[I].apply(this,H||[]);}
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
(function(){var a="function",b="plugin.silverlight.version",c="Silverlight",d="Skype.Detection",f="QuickTimeCheckObject.QuickTimeCheck.1",g="Adobe Acrobat",h="plugin.windowsmedia",k="QuickTime",l="plugin.silverlight",m="pdf",n="wmv",o="qx.bom.client.Plugin",p="application/x-skype",q=',',r="plugin.divx",s='=',t="Chrome PDF Viewer",u="divx",v="Windows Media",w="",x="mshtml",y="skype.click2call",z="plugin.skype",A="plugin.gears",B="plugin.quicktime",C="plugin.windowsmedia.version",D="quicktime",E="DivX Web Player",F="AgControl.AgControl",G="Microsoft.XMLHTTP",H="silverlight",I="plugin.pdf",J="plugin.pdf.version",K="MSXML2.DOMDocument.6.0",L="WMPlayer.OCX.7",M="AcroPDF.PDF",N="plugin.activex",O="plugin.quicktime.version",P="plugin.divx.version",Q="npdivx.DivXBrowserPlugin.1",R="object";qx.Bootstrap.define(o,{statics:{getGears:function(){return !!(window.google&&window.google.gears);}
,getActiveX:function(){if(typeof window.ActiveXObject===a){return true;}
;try{return window.ActiveXObject!==undefined&&(typeof (new window.ActiveXObject(G))===R||typeof (new window.ActiveXObject(K))===R);}
catch(S){return false;}
;}
,getSkype:function(){if(qx.bom.client.Plugin.getActiveX()){try{new ActiveXObject(d);return true;}
catch(e){}
;}
;var T=navigator.mimeTypes;if(T){if(p in T){return true;}
;for(var i=0;i<T.length;i++ ){var U=T[i];if(U.type.indexOf(y)!=-1){return true;}
;}
;}
;return false;}
,__mu:{quicktime:{plugin:[k],control:f},wmv:{plugin:[v],control:L},divx:{plugin:[E],control:Q},silverlight:{plugin:[c],control:F},pdf:{plugin:[t,g],control:M}},getQuicktimeVersion:function(){var V=qx.bom.client.Plugin.__mu[D];return qx.bom.client.Plugin.__mv(V.control,V.plugin);}
,getWindowsMediaVersion:function(){var W=qx.bom.client.Plugin.__mu[n];return qx.bom.client.Plugin.__mv(W.control,W.plugin,true);}
,getDivXVersion:function(){var X=qx.bom.client.Plugin.__mu[u];return qx.bom.client.Plugin.__mv(X.control,X.plugin);}
,getSilverlightVersion:function(){var Y=qx.bom.client.Plugin.__mu[H];return qx.bom.client.Plugin.__mv(Y.control,Y.plugin);}
,getPdfVersion:function(){var ba=qx.bom.client.Plugin.__mu[m];return qx.bom.client.Plugin.__mv(ba.control,ba.plugin);}
,getQuicktime:function(){var bb=qx.bom.client.Plugin.__mu[D];return qx.bom.client.Plugin.__mw(bb.control,bb.plugin);}
,getWindowsMedia:function(){var bc=qx.bom.client.Plugin.__mu[n];return qx.bom.client.Plugin.__mw(bc.control,bc.plugin,true);}
,getDivX:function(){var bd=qx.bom.client.Plugin.__mu[u];return qx.bom.client.Plugin.__mw(bd.control,bd.plugin);}
,getSilverlight:function(){var be=qx.bom.client.Plugin.__mu[H];return qx.bom.client.Plugin.__mw(be.control,be.plugin);}
,getPdf:function(){var bf=qx.bom.client.Plugin.__mu[m];return qx.bom.client.Plugin.__mw(bf.control,bf.plugin);}
,__mv:function(bo,bk,bj){var bg=qx.bom.client.Plugin.__mw(bo,bk,bj);if(!bg){return w;}
;if(qx.bom.client.Engine.getName()==x&&(qx.bom.client.Browser.getDocumentMode()<11||bj)){try{var bh=new ActiveXObject(bo);var bm;if(bh.GetVersions&&bh.GetVersions()){bm=bh.GetVersions().split(q);if(bm.length>1){bm=bm[0].split(s);if(bm.length===2){return bm[1];}
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
,__mw:function(bt,br,bq){if(qx.bom.client.Engine.getName()==x&&(qx.bom.client.Browser.getDocumentMode()<11||bq)){if(!this.getActiveX()){return false;}
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
(function(){var a=" due to exceptions in user code. The application has to be reloaded!",b="Error in the 'Appearance' queue:",c="Error in the 'Widget' queue:",d="\n",f="Error in the 'Layout' queue:",g="Error in the 'Visibility' queue:",h="qx.debug",i="useraction",j="qx.debug.ui.queue",k="Error while layout flush: ",l="Error in the 'Dispose' queue:",m="Stack trace: \n",n="event.touch",o="qx.ui.core.queue.Manager",p=" times in a row",q="Fatal Error: Flush terminated ";qx.Class.define(o,{statics:{__ib:false,__gh:false,__ia:{},__ic:0,MAX_RETRIES:10,scheduleFlush:function(r){var self=qx.ui.core.queue.Manager;self.__ia[r]=true;if(!self.__ib){self.__gh=false;qx.bom.AnimationFrame.request(function(){if(self.__gh){self.__gh=false;return;}
;self.flush();}
,self);self.__ib=true;}
;}
,flush:function(){var self=qx.ui.core.queue.Manager;if(self.__id){return;}
;self.__id=true;self.__gh=true;var s=self.__ia;self.__ie(function(){while(s.visibility||s.widget||s.appearance||s.layout||s.element){if(s.widget){delete s.widget;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Widget.flush();}
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
,function(){self.__ib=false;}
);self.__ie(function(){if(s.dispose){delete s.dispose;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Dispose.flush();}
catch(e){qx.log.Logger.error(l+e);}
;}
else {qx.ui.core.queue.Dispose.flush();}
;}
;}
,function(){self.__id=false;}
);self.__ic=0;}
,__ie:qx.core.Environment.select(h,{"true":function(t,u){t();u();}
,"false":function(v,w){var self=qx.ui.core.queue.Manager;try{v();}
catch(e){if(qx.core.Environment.get(h)){qx.log.Logger.error(k+e+d+m+qx.dev.StackTrace.getStackTraceFromError(e));}
;self.__ib=false;self.__id=false;self.__ic+=1;if(self.__ic<=self.MAX_RETRIES){self.scheduleFlush();}
else {throw new Error(q+(self.__ic-1)+p+a);}
;throw e;}
finally{w();}
;}
}),__if:function(e){qx.ui.core.queue.Manager.flush();}
},defer:function(x){qx.html.Element._scheduleFlush=x.scheduleFlush;qx.event.Registration.addListener(window,i,qx.core.Environment.get(n)?x.__if:x.flush);}
});}
)();
(function(){var a="qx.ui.core.queue.Widget",b="widget",c="$$default";qx.Class.define(a,{statics:{__fe:[],__ia:{},remove:function(e,g){var d=this.__fe;if(!qx.lang.Array.contains(d,e)){return;}
;var f=e.$$hash;if(g==null){qx.lang.Array.remove(d,e);delete this.__ia[f];return;}
;if(this.__ia[f]){delete this.__ia[f][g];if(qx.lang.Object.getLength(this.__ia[f])==0){qx.lang.Array.remove(d,e);}
;}
;}
,add:function(j,l){var h=this.__fe;if(!qx.lang.Array.contains(h,j)){h.unshift(j);}
;if(l==null){l=c;}
;var k=j.$$hash;if(!this.__ia[k]){this.__ia[k]={};}
;this.__ia[k][l]=true;qx.ui.core.queue.Manager.scheduleFlush(b);}
,flush:function(){var m=this.__fe;var n,o;for(var i=m.length-1;i>=0;i-- ){n=m[i];o=this.__ia[n.$$hash];m.splice(i,1);n.syncWidget(o);}
;if(m.length!=0){return;}
;this.__fe=[];this.__ia={};}
}});}
)();
(function(){var a="qx.ui.core.queue.Layout",b="layout";qx.Class.define(a,{statics:{__fe:{},__ig:{},remove:function(c){delete this.__fe[c.$$hash];}
,add:function(d){this.__fe[d.$$hash]=d;qx.ui.core.queue.Manager.scheduleFlush(b);}
,isScheduled:function(e){return !!this.__fe[e.$$hash];}
,flush:function(){var f=this.__ii();for(var i=f.length-1;i>=0;i-- ){var g=f[i];if(g.hasValidLayout()){continue;}
;if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();g.renderLayout(0,0,j.width,j.height);}
else {var h=g.getBounds();g.renderLayout(h.left,h.top,h.width,h.height);}
;}
;}
,getNestingLevel:function(l){var k=this.__ig;var n=0;var parent=l;while(true){if(k[parent.$$hash]!=null){n+=k[parent.$$hash];break;}
;if(!parent.$$parent){break;}
;parent=parent.$$parent;n+=1;}
;var m=n;while(l&&l!==parent){k[l.$$hash]=m-- ;l=l.$$parent;}
;return n;}
,__ih:function(){var t=qx.ui.core.queue.Visibility;this.__ig={};var s=[];var r=this.__fe;var o,q;for(var p in r){o=r[p];if(t.isVisible(o)){q=this.getNestingLevel(o);if(!s[q]){s[q]={};}
;s[q][p]=o;delete r[p];}
;}
;return s;}
,__ii:function(){var x=[];var z=this.__ih();for(var w=z.length-1;w>=0;w-- ){if(!z[w]){continue;}
;for(var v in z[w]){var u=z[w][v];if(w==0||u.isRootWidget()||u.hasUserBounds()){x.push(u);u.invalidateLayoutCache();continue;}
;var B=u.getSizeHint(false);if(B){u.invalidateLayoutCache();var y=u.getSizeHint();var A=(!u.getBounds()||B.minWidth!==y.minWidth||B.width!==y.width||B.maxWidth!==y.maxWidth||B.minHeight!==y.minHeight||B.height!==y.height||B.maxHeight!==y.maxHeight);}
else {A=true;}
;if(A){var parent=u.getLayoutParent();if(!z[w-1]){z[w-1]={};}
;z[w-1][parent.$$hash]=parent;}
else {x.push(u);}
;}
;}
;return x;}
}});}
)();
(function(){var a="dispose",b="qx.ui.core.queue.Dispose";qx.Class.define(b,{statics:{__fe:[],add:function(d){var c=this.__fe;if(qx.lang.Array.contains(c,d)){return;}
;c.unshift(d);qx.ui.core.queue.Manager.scheduleFlush(a);}
,isEmpty:function(){return this.__fe.length==0;}
,flush:function(){var e=this.__fe;for(var i=e.length-1;i>=0;i-- ){var f=e[i];e.splice(i,1);f.dispose();}
;if(e.length!=0){return;}
;this.__fe=[];}
}});}
)();
(function(){var a="appearance",b="qx.ui.core.queue.Appearance";qx.Class.define(b,{statics:{__fe:[],__ff:{},remove:function(c){if(this.__ff[c.$$hash]){qx.lang.Array.remove(this.__fe,c);delete this.__ff[c.$$hash];}
;}
,add:function(d){if(this.__ff[d.$$hash]){return;}
;this.__fe.unshift(d);this.__ff[d.$$hash]=d;qx.ui.core.queue.Manager.scheduleFlush(a);}
,has:function(e){return !!this.__ff[e.$$hash];}
,flush:function(){var h=qx.ui.core.queue.Visibility;var f=this.__fe;var g;for(var i=f.length-1;i>=0;i-- ){g=f[i];f.splice(i,1);delete this.__ff[g.$$hash];if(h.isVisible(g)){g.syncAppearance();}
else {g.$$stateChanges=true;}
;}
;}
}});}
)();
(function(){var a="The theme to use is not available: ",b="_applyTheme",c="qx.theme",d="qx.theme.manager.Meta",f="qx.theme.Modern",g="qx.event.type.Event",h="Theme",i="changeTheme",j="singleton";qx.Class.define(d,{type:j,extend:qx.core.Object,events:{"changeTheme":g},properties:{theme:{check:h,nullable:false,apply:b}},members:{_applyTheme:function(k,m){var u=true;var w=true;var o=true;var q=true;var l=true;if(m){u=k.meta.color!==m.meta.color;w=k.meta.decoration!==m.meta.decoration;o=k.meta.font!==m.meta.font;q=k.meta.icon!==m.meta.icon;l=k.meta.appearance!==m.meta.appearance;}
;var n=qx.theme.manager.Color.getInstance();var t=qx.theme.manager.Decoration.getInstance();var r=qx.theme.manager.Font.getInstance();var p=qx.theme.manager.Icon.getInstance();var s=qx.theme.manager.Appearance.getInstance();this._suspendEvents();if(u){if(!w){var v=t.getTheme();t._applyTheme(v);}
;n.setTheme(k.meta.color);}
;t.setTheme(k.meta.decoration);r.setTheme(k.meta.font);p.setTheme(k.meta.icon);s.setTheme(k.meta.appearance);if(u||w||o||q||l){this.fireEvent(i);}
;this._activateEvents();}
,__ew:null,_fireEvent:function(e){if(e.getTarget()===qx.theme.manager.Color.getInstance()){qx.theme.manager.Decoration.getInstance().refresh();}
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
(function(){var a="qx.theme.manager.Icon",b="Theme",c="changeTheme",d="_applyTheme",e="singleton";qx.Class.define(a,{type:e,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:d,event:c}},members:{_applyTheme:function(i,g){var h=qx.util.AliasManager.getInstance();if(g){for(var f in g.aliases){h.remove(f);}
;}
;if(i){for(var f in i.aliases){h.add(f,i.aliases[f]);}
;}
;}
}});}
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
(function(){var a="0",b="qx/static",c="http://",d="https://",e="file://",f="qx.util.AliasManager",g="singleton",h=".",i="/",j="static";qx.Class.define(f,{type:g,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);this.__iK={};this.add(j,b);}
,members:{__iK:null,_preprocess:function(n){var m=this._getDynamic();if(m[n]===false){return n;}
else if(m[n]===undefined){if(n.charAt(0)===i||n.charAt(0)===h||n.indexOf(c)===0||n.indexOf(d)===a||n.indexOf(e)===0){m[n]=false;return n;}
;if(this.__iK[n]){return this.__iK[n];}
;var l=n.substring(0,n.indexOf(i));var k=this.__iK[l];if(k!==undefined){m[n]=k+n.substring(l.length);}
;}
;return n;}
,add:function(o,q){this.__iK[o]=q;var p=this._getDynamic();for(var r in p){if(r.substring(0,r.indexOf(i))===o){p[r]=q+r.substring(o.length);}
;}
;}
,remove:function(s){delete this.__iK[s];}
,resolve:function(t){var u=this._getDynamic();if(t!=null){t=this._preprocess(t);}
;return u[t]||t;}
,getAliases:function(){var v={};for(var w in this.__iK){v[w]=this.__iK[w];}
;return v;}
}});}
)();
(function(){var a="_applyTheme",b="qx.theme.manager.Font",c="_dynamic",d="Theme",e="changeTheme",f="singleton";qx.Class.define(b,{type:f,extend:qx.util.ValueManager,implement:[qx.core.IDisposable],properties:{theme:{check:d,nullable:true,apply:a,event:e}},members:{resolveDynamic:function(h){var g=this._dynamic;return h instanceof qx.bom.Font?h:g[h];}
,resolve:function(k){var j=this._dynamic;var i=j[k];if(i){return i;}
;var l=this.getTheme();if(l!==null&&l.fonts[k]){var m=this.__iM(l.fonts[k]);var n=(new m);if(l.fonts[k].testCharacters){n.setTestCharacters(l.fonts[k].testCharacters);}
;return j[k]=n.set(l.fonts[k]);}
;return k;}
,isDynamic:function(r){var q=this._dynamic;if(r&&(r instanceof qx.bom.Font||q[r]!==undefined)){return true;}
;var p=this.getTheme();if(p!==null&&r&&p.fonts[r]){var o=this.__iM(p.fonts[r]);var s=(new o);if(p.fonts[r].testCharacters){s.setTestCharacters(p.fonts[r].testCharacters);}
;q[r]=s.set(p.fonts[r]);return true;}
;return false;}
,__iL:function(u,t){if(u[t].include){var v=u[u[t].include];u[t].include=null;delete u[t].include;u[t]=qx.lang.Object.mergeWith(u[t],v,false);this.__iL(u,t);}
;}
,_applyTheme:function(x){var w=this._dynamic;for(var z in w){if(w[z].themed){w[z].dispose();delete w[z];}
;}
;if(x){var y=x.fonts;for(var z in y){if(y[z].include&&y[y[z].include]){this.__iL(y,z);}
;var A=this.__iM(y[z]);var B=(new A);if(y[z].testCharacters){B.setTestCharacters(y[z].testCharacters);}
;w[z]=(new A).set(y[z]);w[z].themed=true;}
;}
;this._setDynamic(w);}
,__iM:function(C){if(C.sources){return qx.bom.webfonts.WebFont;}
;return qx.bom.Font;}
},destruct:function(){this._disposeMap(c);}
});}
)();
(function(){var a="Boolean",b="px",c="_applyItalic",d="_applyBold",e="underline",f="_applyTextShadow",g="Integer",h="string",j="_applyLineHeight",k='"',m="Array",n="line-through",o="_applyFamily",p="overline",q="Color",r="String",s="",t="italic",u="normal",v="qx.bom.Font",w="bold",x="Number",y="_applyDecoration",z=" ",A="_applySize",B=",",C="_applyColor";qx.Class.define(v,{extend:qx.core.Object,construct:function(E,D){qx.core.Object.call(this);this.__iN={fontFamily:s,fontSize:null,fontWeight:null,fontStyle:null,textDecoration:null,lineHeight:null,color:null,textShadow:null};if(E!==undefined){this.setSize(E);}
;if(D!==undefined){this.setFamily(D);}
;}
,statics:{fromString:function(I){var J=new qx.bom.Font();var G=I.split(/\s+/);var name=[];var H;for(var i=0;i<G.length;i++ ){switch(H=G[i]){case w:J.setBold(true);break;case t:J.setItalic(true);break;case e:J.setDecoration(e);break;default:var F=parseInt(H,10);if(F==H||qx.lang.String.contains(H,b)){J.setSize(F);}
else {name.push(H);}
;break;};}
;if(name.length>0){J.setFamily(name);}
;return J;}
,fromConfig:function(L){var K=new qx.bom.Font;K.set(L);return K;}
,__iO:{fontFamily:s,fontSize:s,fontWeight:s,fontStyle:s,textDecoration:s,lineHeight:1.2,color:s,textShadow:s},getDefaultStyles:function(){return this.__iO;}
},properties:{size:{check:g,nullable:true,apply:A},lineHeight:{check:x,nullable:true,apply:j},comparisonString:{check:r,init:null,nullable:true},version:{check:function(M){return M===null||(typeof M===h&&/^[a-zA-Z0-9.-]+$/.test(M));}
,init:null,nullable:true},family:{check:m,nullable:true,apply:o},bold:{check:a,nullable:true,apply:d},italic:{check:a,nullable:true,apply:c},decoration:{check:[e,n,p],nullable:true,apply:y},color:{check:q,nullable:true,apply:C},textShadow:{nullable:true,check:r,apply:f}},members:{__iN:null,_applySize:function(O,N){this.__iN.fontSize=O===null?null:O+b;}
,_applyLineHeight:function(Q,P){this.__iN.lineHeight=Q===null?null:Q;}
,_applyFamily:function(R,S){var T=s;for(var i=0,l=R.length;i<l;i++ ){if(R[i].indexOf(z)>0){T+=k+R[i]+k;}
else {T+=R[i];}
;if(i!==l-1){T+=B;}
;}
;this.__iN.fontFamily=T;}
,_applyBold:function(V,U){this.__iN.fontWeight=V==null?null:V?w:u;}
,_applyItalic:function(X,W){this.__iN.fontStyle=X==null?null:X?t:u;}
,_applyDecoration:function(ba,Y){this.__iN.textDecoration=ba==null?null:ba;}
,_applyColor:function(bc,bb){this.__iN.color=null;if(bc){this.__iN.color=qx.theme.manager.Color.getInstance().resolve(bc);}
;}
,_applyTextShadow:function(be,bd){this.__iN.textShadow=be==null?null:be;}
,getStyles:function(){return this.__iN;}
}});}
)();
(function(){var a="Could not parse color: ",b="_applyTheme",c="qx.theme.manager.Color",d="Theme",e="changeTheme",f="string",g="singleton";qx.Class.define(c,{type:g,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:e}},members:{_applyTheme:function(j){var h={};if(j){var i=j.colors;for(var name in i){h[name]=this.__iP(i,name);}
;}
;this._setDynamic(h);}
,__iP:function(l,name){var k=l[name];if(typeof k===f){if(!qx.util.ColorUtil.isCssString(k)){if(l[k]!=undefined){return this.__iP(l,k);}
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
(function(){var a="qx.bom.webfonts.WebFont",b="",c="qx.debug",d="changeStatus",e="_applySources",f="qx.event.type.Data",g=" was not applied, perhaps the source file could not be loaded.",h="WebFont ";qx.Class.define(a,{extend:qx.bom.Font,events:{"changeStatus":f},properties:{sources:{nullable:true,apply:e}},members:{__iQ:null,_applySources:function(m,o){var j=[];for(var i=0,l=m.length;i<l;i++ ){var k=this._quoteFontFamily(m[i].family);j.push(k);var n=m[i];n.comparisonString=this.getComparisonString();n.version=this.getVersion();qx.bom.webfonts.Manager.getInstance().require(k,n,this._onWebFontChangeStatus,this);}
;this.setFamily(j.concat(this.getFamily()));}
,_onWebFontChangeStatus:function(p){var q=p.getData();this.fireDataEvent(d,q);if(qx.core.Environment.get(c)){if(q.valid===false){this.warn(h+q.family+g);}
;}
;}
,_quoteFontFamily:function(r){return r.replace(/["']/g,b);}
}});}
)();
(function(){var a="m",b="os.name",c=")",d="os.version",e="qx.bom.webfonts.Manager",f=".*font-style: *",g="svg",h="chrome",k="browser.name",n="singleton",o=",\n",p="src: ",q="mobileSafari",r="\nfont-style: ",s="');",t="qx.debug",u="interval",v="'eot)",w="#",y="firefox",z="!",A="eot",B="ios",C="changeStatus",D="Couldn't create @font-face rule for WebFont ",E="}\n",F="font-family: ",G="browser.documentmode",H="mobile safari",I="safari",J="@font-face.*?",K=";",L="",M="ttf",N="_",O="') format('svg')",P=";\n",Q="('embedded-opentype')",R="browser.version",S="opera",T="engine.version",U="') format('woff')",V="normal",W="mshtml",X="engine.name",Y="url('",br="src: url('",bs="('embedded-opentype)",bt="\nfont-weight: ",bn="?",bo=".*font-weight: *",bp="?#iefix') format('embedded-opentype')",bq="woff",bw="ie",bx="\.(",by="'eot')",bz="Error while adding @font-face rule:",bu="@font-face {",bv="') format('truetype')";qx.Class.define(e,{extend:qx.core.Object,type:n,construct:function(){qx.core.Object.call(this);this.__iR=[];this.__iS={};this.__fe=[];this.__iT=this.getPreferredFormats();}
,statics:{FONT_FORMATS:[A,bq,M,g],VALIDATION_TIMEOUT:5000},members:{__iR:null,__iU:null,__iS:null,__iT:null,__fe:null,__iV:null,require:function(bE,bK,bL,bJ){var bD=bK.source;var bC=bK.comparisonString;var bG=bK.version;var bF=bK.fontWeight;var bB=bK.fontStyle;var bH=[];for(var i=0,l=bD.length;i<l;i++ ){var bI=bD[i].split(w);var bA=qx.util.ResourceManager.getInstance().toUri(bI[0]);if(bI.length>1){bA=bA+w+bI[1];}
;bH.push(bA);}
;if(qx.core.Environment.get(X)==W&&(parseInt(qx.core.Environment.get(T))<9||qx.core.Environment.get(G)<9)){if(!this.__iV){this.__iV=new qx.event.Timer(100);this.__iV.addListener(u,this.__iY,this);}
;if(!this.__iV.isEnabled()){this.__iV.start();}
;this.__fe.push([bE,bH,bF,bB,bC,bG,bL,bJ]);}
else {this.__iX(bE,bH,bF,bB,bC,bG,bL,bJ);}
;}
,remove:function(bO,bP,bQ){var bN=this.__iW(bO,bP,bQ);var bM=null;for(var i=0,l=this.__iR.length;i<l;i++ ){if(this.__iR[i]==bN){bM=i;this.__jf(bO,bP,bQ);break;}
;}
;if(bM!==null){qx.lang.Array.removeAt(this.__iR,bM);}
;if(bO in this.__iS){this.__iS[bO].dispose();delete this.__iS[bO];}
;}
,getPreferredFormats:function(){var bR=[];var bV=qx.core.Environment.get(k);var bS=qx.core.Environment.get(R);var bU=qx.core.Environment.get(b);var bT=qx.core.Environment.get(d);if((bV==bw&&qx.core.Environment.get(G)>=9)||(bV==y&&bS>=3.6)||(bV==h&&bS>=6)){bR.push(bq);}
;if((bV==S&&bS>=10)||(bV==I&&bS>=3.1)||(bV==y&&bS>=3.5)||(bV==h&&bS>=4)||(bV==H&&bU==B&&bT>=4.2)){bR.push(M);}
;if(bV==bw&&bS>=4){bR.push(A);}
;if(bV==q&&bU==B&&bT>=4.1){bR.push(g);}
;return bR;}
,removeStyleSheet:function(){this.__iR=[];if(this.__iU){qx.bom.Stylesheet.removeSheet(this.__iU);}
;this.__iU=null;}
,__iW:function(bX,bW,ca){var bY=bX+N+(bW?bW:V)+N+(ca?ca:V);return bY;}
,__iX:function(cf,ce,ch,cc,cd,ci,cl,ck){var cj=this.__iW(cf,ch,cc);if(!qx.lang.Array.contains(this.__iR,cj)){var cm=this.__jb(ce);var cg=this.__jc(cf,ch,cc,cm,ci);if(!cg){throw new Error(D+cf+z);}
;if(!this.__iU){this.__iU=qx.bom.Stylesheet.createElement();}
;try{this.__je(cg);}
catch(cn){if(qx.core.Environment.get(t)){this.warn(bz,cn.message);return;}
;}
;this.__iR.push(cj);}
;if(!this.__iS[cf]){this.__iS[cf]=new qx.bom.webfonts.Validator(cf,cd);this.__iS[cf].setTimeout(qx.bom.webfonts.Manager.VALIDATION_TIMEOUT);this.__iS[cf].addListenerOnce(C,this.__ja,this);}
;if(cl){var cb=ck||window;this.__iS[cf].addListenerOnce(C,cl,cb);}
;this.__iS[cf].validate();}
,__iY:function(){if(this.__fe.length==0){this.__iV.stop();return;}
;var co=this.__fe.shift();this.__iX.apply(this,co);}
,__ja:function(cp){var cq=cp.getData();if(cq.valid===false){qx.event.Timer.once(function(){this.remove(cq.family);}
,this,250);}
;}
,__jb:function(cr){var ct=qx.bom.webfonts.Manager.FONT_FORMATS;var cs={};for(var i=0,l=cr.length;i<l;i++ ){var cu=null;for(var x=0;x<ct.length;x++ ){var cv=new RegExp(bx+ct[x]+c);var cw=cv.exec(cr[i]);if(cw){cu=cw[1];}
;}
;if(cu){cs[cu]=cr[i];}
;}
;return cs;}
,__jc:function(cB,cx,cE,cF,cz){var cD=[];var cy=this.__iT.length>0?this.__iT:qx.bom.webfonts.Manager.FONT_FORMATS;for(var i=0,l=cy.length;i<l;i++ ){var cA=cy[i];if(cF[cA]){cD.push(this.__jd(cA,cF[cA],cz));}
;}
;var cC=p+cD.join(o)+K;cC=F+cB+P+cC;cC=cC+r+(cE?cE:V)+K;cC=cC+bt+(cx?cx:V)+K;return cC;}
,__jd:function(cI,cG,cH){if(cH){cG+=bn+cH;}
;switch(cI){case A:return Y+cG+s+br+cG+bp;case bq:return Y+cG+U;case M:return Y+cG+bv;case g:return Y+cG+O;default:return null;};}
,__je:function(cK){var cJ=bu+cK+E;if(qx.core.Environment.get(k)==bw&&qx.core.Environment.get(G)<9){var cL=this.__jg(this.__iU.cssText);cL+=cJ;this.__iU.cssText=cL;}
else {this.__iU.insertRule(cJ,this.__iU.cssRules.length);}
;}
,__jf:function(cP,cQ,cM){var cR=new RegExp(J+cP+f+(cM?cM:V)+bo+(cQ?cQ:V),a);for(var i=0,l=document.styleSheets.length;i<l;i++ ){var cN=document.styleSheets[i];if(cN.cssText){var cO=cN.cssText.replace(/\n/g,L).replace(/\r/g,L);cO=this.__jg(cO);if(cR.exec(cO)){cO=cO.replace(cR,L);}
;cN.cssText=cO;}
else if(cN.cssRules){for(var j=0,m=cN.cssRules.length;j<m;j++ ){var cO=cN.cssRules[j].cssText.replace(/\n/g,L).replace(/\r/g,L);if(cR.exec(cO)){this.__iU.deleteRule(j);return;}
;}
;}
;}
;}
,__jg:function(cS){return cS.replace(v,by).replace(bs,Q);}
},destruct:function(){if(this.__iV){this.__iV.stop();this.__iV.dispose();}
;delete this.__iR;this.removeStyleSheet();for(var cT in this.__iS){this.__iS[cT].dispose();}
;qx.bom.webfonts.Validator.removeDefaultHelperElements();}
});}
)();
(function(){var a="sans-serif",b="changeStatus",c="Integer",d="auto",e="qx.event.type.Data",f="0",g="qx.bom.webfonts.Validator",h="interval",i="Georgia",j="WEei",k="visible",l="Times New Roman",m="Arial",n="normal",o="Helvetica",p="350px",q="_applyFontFamily",r="__jk",s="-1000px",t="hidden",u="serif",v="span",w="absolute",x=",";qx.Class.define(g,{extend:qx.core.Object,construct:function(y,z){qx.core.Object.call(this);if(z){this.setComparisonString(z);}
;if(y){this.setFontFamily(y);this.__jh=this._getRequestedHelpers();}
;}
,statics:{COMPARISON_FONTS:{sans:[m,o,a],serif:[l,i,u]},HELPER_CSS:{position:w,margin:f,padding:f,top:s,left:s,fontSize:p,width:d,height:d,lineHeight:n,fontVariant:n,visibility:t},COMPARISON_STRING:j,__ji:null,__jj:null,removeDefaultHelperElements:function(){var A=qx.bom.webfonts.Validator.__jj;if(A){for(var B in A){document.body.removeChild(A[B]);}
;}
;delete qx.bom.webfonts.Validator.__jj;}
},properties:{fontFamily:{nullable:true,init:null,apply:q},comparisonString:{nullable:true,init:null},timeout:{check:c,init:5000}},events:{"changeStatus":e},members:{__jh:null,__jk:null,__jl:null,validate:function(){this.__jl=new Date().getTime();if(this.__jk){this.__jk.restart();}
else {this.__jk=new qx.event.Timer(100);this.__jk.addListener(h,this.__jm,this);qx.event.Timer.once(function(){this.__jk.start();}
,this,0);}
;}
,_reset:function(){if(this.__jh){for(var D in this.__jh){var C=this.__jh[D];document.body.removeChild(C);}
;this.__jh=null;}
;}
,_isFontValid:function(){if(!qx.bom.webfonts.Validator.__ji){this.__fh();}
;if(!this.__jh){this.__jh=this._getRequestedHelpers();}
;this.__jh.sans.style.visibility=k;this.__jh.sans.style.visibility=t;this.__jh.serif.style.visibility=k;this.__jh.serif.style.visibility=t;var F=qx.bom.element.Dimension.getWidth(this.__jh.sans);var E=qx.bom.element.Dimension.getWidth(this.__jh.serif);var G=qx.bom.webfonts.Validator;if(F!==G.__ji.sans||E!==G.__ji.serif){return true;}
;return false;}
,_getRequestedHelpers:function(){var H=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.sans);var I=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.serif);return {sans:this._getHelperElement(H,this.getComparisonString()),serif:this._getHelperElement(I,this.getComparisonString())};}
,_getHelperElement:function(J,L){var K=qx.lang.Object.clone(qx.bom.webfonts.Validator.HELPER_CSS);if(J){if(K.fontFamily){K.fontFamily+=x+J.join(x);}
else {K.fontFamily=J.join(x);}
;}
;var M=document.createElement(v);M.innerHTML=L||qx.bom.webfonts.Validator.COMPARISON_STRING;qx.bom.element.Style.setStyles(M,K);document.body.appendChild(M);return M;}
,_applyFontFamily:function(O,N){if(O!==N){this._reset();}
;}
,__fh:function(){var P=qx.bom.webfonts.Validator;if(!P.__jj){P.__jj={sans:this._getHelperElement(P.COMPARISON_FONTS.sans),serif:this._getHelperElement(P.COMPARISON_FONTS.serif)};}
;P.__ji={sans:qx.bom.element.Dimension.getWidth(P.__jj.sans),serif:qx.bom.element.Dimension.getWidth(P.__jj.serif)};}
,__jm:function(){if(this._isFontValid()){this.__jk.stop();this._reset();this.fireDataEvent(b,{family:this.getFontFamily(),valid:true});}
else {var Q=new Date().getTime();if(Q-this.__jl>=this.getTimeout()){this.__jk.stop();this._reset();this.fireDataEvent(b,{family:this.getFontFamily(),valid:false});}
;}
;}
},destruct:function(){this._reset();this.__jk.stop();this.__jk.removeListener(h,this.__jm,this);this._disposeObjects(r);}
});}
)();
(function(){var a="mshtml",b="engine.name",c="__jo",d="_applyTheme",e="",f="'.",g="qx-",h="Unable to resolve decorator '",j="singleton",k=";",l="qx.theme.manager.Decoration",m=".",n="Theme",o="object",p="changeTheme",q="string",r="browser.documentmode",s=":";qx.Class.define(l,{type:j,extend:qx.core.Object,implement:[qx.core.IDisposable],statics:{CSS_CLASSNAME_PREFIX:g},construct:function(){qx.core.Object.call(this);this.__gl=[];this.__jn=(qx.core.Environment.get(b)==a&&qx.core.Environment.get(r)<9);}
,properties:{theme:{check:n,nullable:true,apply:d,event:p}},members:{__jo:null,__gl:null,__jn:false,getCssClassName:function(u){var t=qx.theme.manager.Decoration.CSS_CLASSNAME_PREFIX;if(qx.lang.Type.isString(u)){return t+u;}
else {return t+u.toHashCode();}
;}
,addCssClass:function(x){var w=qx.ui.style.Stylesheet.getInstance();var z=x;x=this.getCssClassName(x);var y=m+x;if(w.hasRule(y)){return x;}
;if(qx.lang.Type.isString(z)){z=this.resolve(z);}
;if(!z){throw new Error(h+x+f);}
;var A=e;var v=z.getStyles(true);Object.keys(v).sort().forEach(function(E){if(qx.Bootstrap.isObject(v[E])){var B=e;var G=v[E];var D=false;for(var C in G){D=true;B+=C+s+G[C]+k;}
;var F=this.__jn?y:y+(D?s:e);this.__gl.push(F+E);w.addRule(F+E,B);return;}
;A+=E+s+v[E]+k;}
,this);if(A){w.addRule(y,A);this.__gl.push(y);}
;return x;}
,removeAllCssClasses:function(){for(var i=0;i<this.__gl.length;i++ ){var H=this.__gl[i];qx.ui.style.Stylesheet.getInstance().removeRule(H);}
;this.__gl=[];}
,resolve:function(L){if(!L){return null;}
;if(typeof L===o){return L;}
;var M=this.getTheme();if(!M){return null;}
;var J=this.__jo;if(!J){J=this.__jo={};}
;var I=J[L];if(I){return I;}
;var O=qx.lang.Object.clone(M.decorations[L],true);if(!O){return null;}
;if(!O.style){O.style={};}
;var K=O;while(K.include){K=M.decorations[K.include];if(!O.decorator&&K.decorator){O.decorator=qx.lang.Object.clone(K.decorator);}
;if(K.style){for(var N in K.style){if(O.style[N]===undefined){O.style[N]=qx.lang.Object.clone(K.style[N],true);}
;}
;}
;}
;return J[L]=(new qx.ui.decoration.Decorator()).set(O.style);}
,isValidPropertyValue:function(P){if(typeof P===q){return this.isDynamic(P);}
else if(typeof P===o){var Q=P.constructor;return qx.Class.hasInterface(Q,qx.ui.decoration.IDecorator);}
;return false;}
,isDynamic:function(S){if(!S){return false;}
;var R=this.getTheme();if(!R){return false;}
;return !!R.decorations[S];}
,isCached:function(T){return !this.__jo?false:qx.lang.Object.contains(this.__jo,T);}
,_applyTheme:function(X,V){var W=qx.util.AliasManager.getInstance();this.removeAllCssClasses();if(V){for(var U in V.aliases){W.remove(U);}
;}
;if(X){for(var U in X.aliases){W.add(U,X.aliases[U]);}
;}
;this._disposeMap(c);this.__jo={};}
,clear:function(){var bb=qx.util.AliasManager.getInstance();var ba=this.getTheme();if(!bb.isDisposed()&&ba&&ba.alias){for(var Y in ba.aliases){bb.remove(Y,ba.aliases[Y]);}
;}
;this.removeAllCssClasses();this._disposeMap(c);this.__jo={};}
,refresh:function(){this.clear();var be=qx.util.AliasManager.getInstance();var bd=this.getTheme();if(bd&&bd.alias){for(var bc in bd.aliases){be.add(bc,bd.aliases[bc]);}
;}
;}
},destruct:function(){this.clear();}
});}
)();
(function(){var a="qx.ui.style.Stylesheet",b="singleton";qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__gj=qx.bom.Stylesheet.createElement();this.__gl=[];}
,members:{__gl:null,__gj:null,addRule:function(d,c){if(this.hasRule(d)){return;}
;qx.bom.Stylesheet.addRule(this.__gj,d,c);this.__gl.push(d);}
,hasRule:function(e){return this.__gl.indexOf(e)!=-1;}
,removeRule:function(f){delete this.__gl[this.__gl.indexOf(f)];qx.bom.Stylesheet.removeRule(this.__gj,f);}
}});}
)();
(function(){var a="qx.ui.decoration.IDecorator";qx.Interface.define(a,{members:{getStyles:function(){}
,getPadding:function(){}
,getInsets:function(){}
}});}
)();
(function(){var a="transitionDelay",b="transitionProperty",c="This decorator is already in-use. Modification is not possible anymore!",d="qx.debug",e='0s',f='ease',g="transitionDuration",h="css.transition",j='all',k="transitionTimingFunction",l="qx.ui.decoration.MTransition",m="_applyTransition",n=' ',o=",";qx.Mixin.define(l,{properties:{transitionProperty:{nullable:true,apply:m},transitionDuration:{nullable:true,apply:m},transitionTimingFunction:{nullable:true,apply:m},transitionDelay:{nullable:true,apply:m}},members:{_styleTransition:function(p){var r=qx.core.Environment.get(h);if(!r||this.getTransitionDuration()==null){return;}
;r=qx.bom.Style.getCssName(r.name);var q=[b,g,k,a];(function(x,z,u,y){for(var i=0;i<x.length;i++ ){var t=x[i]||j;var s=z[i]||e;var A=u[i]||f;var w=y[i]||e;var v=t+n+s+n+A+n+w;if(!p[r]){p[r]=v;}
else {p[r]+=o+v;}
;}
;}
).apply(this,this._getExtendedPropertyValueArrays(q));}
,_applyTransition:function(){if(qx.core.Environment.get(d)){if(this._isInitialized()){throw new Error(c);}
;}
;}
}});}
)();
(function(){var a=" 0",b="),to(",c="px",d="css.borderradius",e="from(",f=")",g="css.gradient.filter",h='background',j="orientation",k="filter",l="', ",m="0",n="_applyLinearBackgroundGradient",o="-webkit-gradient(linear,",p="%",q="qx.debug",r="background-color",s="deg, ",t="url(",u="css.gradient.legacywebkit",v="EndColorStr='#FF",w="startColor",x="shorthand",y="qx.theme",z="px 100%",A=") ",B="(GradientType=",C="vertical",D="",E="transparent",F="qx.ui.decoration.MLinearBackgroundGradient",G="% 100%",H="endColorPosition",I="canvas",J="(",K="css.gradient.linear",L="';)",M="endColor",N=", ",O="background",P="horizontal",Q="This decorator is already in-use. Modification is not possible anymore!",R="progid:DXImageTransform.Microsoft.Gradient",S="StartColorStr='#FF",T="100% ",U='2d',V="startColorPosition",W=" ",X="white",Y="colorPositionUnit",bd="linear-gradient",be='getOrderGradientsFront',bf=",";qx.Mixin.define(F,{properties:{startColor:{nullable:true,apply:n},endColor:{nullable:true,apply:n},orientation:{init:C,apply:n},startColorPosition:{init:0,apply:n},endColorPosition:{init:100,apply:n},colorPositionUnit:{init:p,apply:n},gradientStart:{group:[w,V],mode:x},gradientEnd:{group:[M,H],mode:x}},members:{_styleLinearBackgroundGradient:function(bg){var bi=[];if(!this.getStartColor()||!this.getEndColor()){return;}
;var bh=this.__jt;if(qx.core.Environment.get(u)){bh=this.__jp;}
else if(qx.core.Environment.get(g)&&!qx.core.Environment.get(K)&&qx.core.Environment.get(d)){bh=this.__jq;}
else if(qx.core.Environment.get(g)&&!qx.core.Environment.get(K)){bh=this.__js;}
;var bj=[w,M,Y,j,V,H];(function(bo,bq,bt,br,bk,bn){for(var i=0;i<bo.length;i++ ){var bw=this.__ju(bo[i]);var bp=this.__ju(bq[i]);var bx=bt[i];var bm=br[i];var bl=bk[i];var bu=bn[i];if(!bh(bw,bp,bx,bm,bl,bu,bg,bi)){break;}
;}
;if(O in bg){if(!qx.lang.Type.isArray(bg[h])){bg[h]=[bg[h]];}
;}
else {bg[h]=[];}
;var bs=be in this?this.getOrderGradientsFront():false;var bv=bs?Array.prototype.unshift:Array.prototype.push;bv.apply(bg[h],bi);}
).apply(this,this._getExtendedPropertyValueArrays(bj));}
,__jp:function(bH,bE,bI,bA,bz,bC,by,bD){bI=bI===c?D:bI;if(bA==P){var bG=bz+bI+a+bI;var bF=bC+bI+a+bI;}
else {var bG=m+bI+W+bz+bI;var bF=m+bI+W+bC+bI;}
;var bB=e+bH+b+bE+f;bD.push(o+bG+bf+bF+bf+bB+f);return true;}
,__jq:function bJ(bW,bQ,bY,bM,bL,bN,bK,bO){if(!bJ.__jr){bJ.__jr=document.createElement(I);}
;var bX=bM==C;var bP=bX?200:1;var bR=bX?1:200;var bS=Math.max(100,bN-bL);if(bY===c){if(bX){bP=Math.max(bP,bN-bL);}
else {bR=Math.max(bR,bN-bL);}
;}
else {if(bX){bP=Math.max(bP,(bN-bL)*2);}
else {bR=Math.max(bR,(bN-bL)*2);}
;}
;bJ.__jr.width=bR;bJ.__jr.height=bP;var bT=bJ.__jr.getContext(U);if(bX){var bV=bT.createLinearGradient(0,0,0,bP);}
else {var bV=bT.createLinearGradient(0,0,bR,0);}
;if(bY===p){bV.addColorStop(Math.max(0,bL)/bS,bW);bV.addColorStop(bN/bS,bQ);}
else {var bU=bX?bP:bR;bV.addColorStop(Math.max(0,bL)/bU,bW);bV.addColorStop(bN/bU,bQ);}
;bT.clearRect(0,0,bR,bP);bT.fillStyle=bV;bT.fillRect(0,0,bR,bP);var ca;if(bY===p){ca=bX?T+bS+p:bS+G;}
else {ca=bX?bP+z:T+bR+c;}
;bO.push(t+bJ.__jr.toDataURL()+A+ca);return true;}
,__js:function(ci,ch,ck,cd,cc,ce,cb,cf){var cj=cd==P?1:0;if(!qx.util.ColorUtil.isHex6String(ci)){ci=qx.util.ColorUtil.stringToRgb(ci);ci=qx.util.ColorUtil.rgbToHexString(ci);}
;if(!qx.util.ColorUtil.isHex6String(ch)){ch=qx.util.ColorUtil.stringToRgb(ch);ch=qx.util.ColorUtil.rgbToHexString(ch);}
;ci=ci.substring(1,ci.length);ch=ch.substring(1,ch.length);var cg=R+B+cj+N+S+ci+l+v+ch+L;if(cb[k]){cb[k]+=N+cg;}
else {cb[k]=cg;}
;if(!cb[r]||cb[r]==E){cb[r]=X;}
;return false;}
,__jt:function(cu,cr,cv,co,cm,cp,cl,cq){var cw=co==P?0:270;var cs=cu+W+cm+cv;var cn=cr+W+cp+cv;var ct=qx.core.Environment.get(K);if(ct===bd){cw=co==P?cw+90:cw-90;}
;cq.push(ct+J+cw+s+cs+bf+cn+f);return true;}
,__ju:function(cx){return qx.core.Environment.get(y)?qx.theme.manager.Color.getInstance().resolve(cx):cx;}
,_applyLinearBackgroundGradient:function(){if(qx.core.Environment.get(q)){if(this._isInitialized()){throw new Error(Q);}
;}
;}
}});}
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
(function(){var a="innerWidthRight",b="innerColorBottom",c="css.borderradius",d="qx.theme",e="px ",f='""',g="_applyDoubleBorder",h="border-top",i="inset 0 -",j="css.boxsizing",k="innerWidthTop",l="100%",m="qx.debug",n="border-left",o="innerColorRight",p="css.boxshadow",q="innerColorTop",r="innerColorLeft",s="inset ",t="shorthand",u="inset -",v="Color",w="border-box",x="This decorator is already in-use. Modification is not possible anymore!",y="qx.ui.decoration.MDoubleBorder",z="border-bottom",A="innerOpacity is configured but the browser doesn't support RGBA colors.",B=":before",C="inset 0 ",D="px solid ",E="innerWidthBottom",F="css.rgba",G="inherit",H="Number",I="innerWidthLeft",J="px 0 ",K="inset 0 0 0 ",L="border-right",M=" ",N=",",O="absolute";qx.Mixin.define(y,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__jx;this._styleBorder=this.__jv;}
,properties:{innerWidthTop:{check:H,init:0,apply:g},innerWidthRight:{check:H,init:0,apply:g},innerWidthBottom:{check:H,init:0,apply:g},innerWidthLeft:{check:H,init:0,apply:g},innerWidth:{group:[k,a,E,I],mode:t},innerColorTop:{nullable:true,check:v,apply:g},innerColorRight:{nullable:true,check:v,apply:g},innerColorBottom:{nullable:true,check:v,apply:g},innerColorLeft:{nullable:true,check:v,apply:g},innerColor:{group:[q,o,b,r],mode:t},innerOpacity:{check:H,init:1,apply:g}},members:{__jv:function(P){var Y=qx.core.Environment.get(p);var S,bd,innerWidth;if(qx.core.Environment.get(d)){var X=qx.theme.manager.Color.getInstance();S={top:X.resolve(this.getColorTop()),right:X.resolve(this.getColorRight()),bottom:X.resolve(this.getColorBottom()),left:X.resolve(this.getColorLeft())};bd={top:X.resolve(this.getInnerColorTop()),right:X.resolve(this.getInnerColorRight()),bottom:X.resolve(this.getInnerColorBottom()),left:X.resolve(this.getInnerColorLeft())};}
else {S={top:this.getColorTop(),right:this.getColorRight(),bottom:this.getColorBottom(),left:this.getColorLeft()};bd={top:this.getInnerColorTop(),right:this.getInnerColorRight(),bottom:this.getInnerColorBottom(),left:this.getInnerColorLeft()};}
;innerWidth={top:this.getInnerWidthTop(),right:this.getInnerWidthRight(),bottom:this.getInnerWidthBottom(),left:this.getInnerWidthLeft()};var V=this.getWidthTop();if(V>0){P[h]=V+e+this.getStyleTop()+M+S.top;}
;V=this.getWidthRight();if(V>0){P[L]=V+e+this.getStyleRight()+M+S.right;}
;V=this.getWidthBottom();if(V>0){P[z]=V+e+this.getStyleBottom()+M+S.bottom;}
;V=this.getWidthLeft();if(V>0){P[n]=V+e+this.getStyleLeft()+M+S.left;}
;var bc=this.getInnerOpacity();if(bc<1){this.__jw(bd,bc);}
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
,__jw:function(bh,be){if(!qx.core.Environment.get(F)){if(qx.core.Environment.get(m)){qx.log.Logger.warn(A);}
;return;}
;for(var bi in bh){var bf=qx.util.ColorUtil.stringToRgb(bh[bi]);bf.push(be);var bg=qx.util.ColorUtil.rgbToRgbString(bf);bh[bi]=bg;}
;}
,_applyDoubleBorder:function(){if(qx.core.Environment.get(m)){if(this._isInitialized()){throw new Error(x);}
;}
;}
,__jx:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};}
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
;var V=qx.util.AliasManager.getInstance().resolve(this.getBorderImage());var W=this.__jy(V);return {top:this.getSliceTop()||W[0],right:this.getSliceRight()||W[1],bottom:this.getSliceBottom()||W[2],left:this.getSliceLeft()||W[3]};}
,_applyBorderImage:function(){if(qx.core.Environment.get(o)){if(this._isInitialized()){throw new Error(H);}
;}
;}
,__jy:function(be){var bd=this.getBorderImageMode();var bf=0;var bb=0;var bc=0;var bg=0;var bh=/(.*)(\.[a-z]+)$/.exec(be);var X=bh[1];var ba=bh[2];var Y=qx.util.ResourceManager.getInstance();if(bd==K||bd==w){bf=Y.getImageHeight(X+i+ba);bc=Y.getImageHeight(X+q+ba);}
;if(bd==K||bd==E){bb=Y.getImageWidth(X+m+ba);bg=Y.getImageWidth(X+e+ba);}
;return [bf,bb,bc,bg];}
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
(function(){var a="abstract",b="Abstract method called.",c="qx.ui.decoration.Abstract";qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:a,members:{__jz:null,_getDefaultInsets:function(){throw new Error(b);}
,_isInitialized:function(){throw new Error(b);}
,_resetInsets:function(){this.__jz=null;}
,getInsets:function(){if(!this.__jz){this.__jz=this._getDefaultInsets();}
;return this.__jz;}
},destruct:function(){this.__jz=null;}
});}
)();
(function(){var a=', ',b="qx.ui.decoration.Decorator",c="_style",d="_getDefaultInsetsFor",e="left",f="top",g="bottom",h="right";qx.Class.define(b,{extend:qx.ui.decoration.Abstract,implement:[qx.ui.decoration.IDecorator],include:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderImage,qx.ui.decoration.MTransition],members:{__cU:false,getPadding:function(){var l=this.getInset();var j=this._getDefaultInsetsForBorderImage();var o=l.top-(j.top?j.top:this.getWidthTop());var n=l.right-(j.right?j.right:this.getWidthRight());var k=l.bottom-(j.bottom?j.bottom:this.getWidthBottom());var m=l.left-(j.left?j.left:this.getWidthLeft());return {top:l.top?o:this.getInnerWidthTop(),right:l.right?n:this.getInnerWidthRight(),bottom:l.bottom?k:this.getInnerWidthBottom(),left:l.left?m:this.getInnerWidthLeft()};}
,getStyles:function(s){if(s){return this._getStyles();}
;var r={};var q=this._getStyles();for(var p in q){r[qx.lang.String.camelCase(p)]=q[p];}
;return r;}
,_getStyles:function(){var t={};for(var name in this){if(name.indexOf(c)==0&&this[name] instanceof Function){this[name](t);}
;}
;for(var name in t){if(qx.lang.Type.isArray(t[name])){t[name]=t[name].join(a);}
;}
;this.__cU=true;return t;}
,_getDefaultInsets:function(){var x=[f,h,g,e];var v={};for(var name in this){if(name.indexOf(d)==0&&this[name] instanceof Function){var w=this[name]();for(var i=0;i<x.length;i++ ){var u=x[i];if(v[u]==undefined){v[u]=w[u];}
;if(w[u]>v[u]){v[u]=w[u];}
;}
;}
;}
;if(v[f]!=undefined){return v;}
;return {top:0,right:0,bottom:0,left:0};}
,_isInitialized:function(){return this.__cU;}
,_getExtendedPropertyValueArrays:function(A){var z=A.map(function(B){var C=this.get(B);if(!qx.lang.Type.isArray(C)){C=[C];}
;return C;}
,this);var y=Math.max.apply(Math,z.map(function(D){return D.length;}
));for(var i=0;i<z.length;i++ ){this.__jA(z[i],y);}
;return z;}
,__jA:function(F,E){var G=F.length;while(F.length<E){F.push(F[F.length%G]);}
;}
}});}
)();
(function(){var a="'.",b="Missing appearance: ",c="_applyTheme",d="qx.debug",e="string",f="Cannot find a matching appearance for '",g="Hint: This may be an issue with nested child controls and a missing alias definition in the appearance theme.",h="qx.theme.manager.Appearance",j=":",k="Theme",l="undefined",m="changeTheme",n="/",o="singleton";qx.Class.define(h,{type:o,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__kh={};this.__ki={};}
,properties:{theme:{check:k,nullable:true,event:m,apply:c}},members:{__kj:{},__kh:null,__ki:null,_applyTheme:function(){this.__ki={};this.__kh={};}
,__kk:function(D,z,q,u){var w=z.appearances;var r=w[D];if(!r){var C=n;var s=[];var v=D.split(C);var B=qx.lang.Array.clone(v);var y;while(!r&&v.length>0){s.unshift(v.pop());var t=v.join(C);r=w[t];if(r){y=r.alias||r;if(typeof y===e){var A=y+C+s.join(C);return this.__kk(A,z,q,B);}
;}
;}
;for(var i=0;i<s.length-1;i++ ){s.shift();var x=s.join(C);var p=this.__kk(x,z,null,B);if(p){return p;}
;}
;if(q!=null){return this.__kk(q,z,null,B);}
;if(qx.core.Environment.get(d)){if(typeof u!==l){this.debug(f+u.join(n)+a);if(u.length>1){this.info(g);}
;}
;}
;return null;}
else if(typeof r===e){return this.__kk(r,z,q,B);}
else if(r.include&&!r.style){return this.__kk(r.include,z,q,B);}
;return D;}
,styleFrom:function(W,O,P,F){if(!P){P=this.getTheme();}
;var M=this.__ki;var E=M[W];if(!E){E=M[W]=this.__kk(W,P,F);}
;var T=P.appearances[E];if(!T){this.warn(b+W);return null;}
;if(!T.style){return null;}
;var U=E;if(O){var I=T.$$bits;if(!I){I=T.$$bits={};T.$$length=0;}
;var J=0;for(var L in O){if(!O[L]){continue;}
;if(I[L]==null){I[L]=1<<T.$$length++ ;}
;J+=I[L];}
;if(J>0){U+=j+J;}
;}
;var K=this.__kh;if(K[U]!==undefined){return K[U];}
;if(!O){O=this.__kj;}
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
;return K[U]=R||null;}
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
(function(){var a="backgroundColor",b="drag",c="_applyNativeContextMenu",d="touch",f="div",g="_applyBackgroundColor",h="qx.event.type.Data",j="object",k="_applyFocusable",m=" requires a layout, but no one was defined!",n="qx.event.type.KeyInput",o="__hO",p="focused",q="disabled",r="move",s="createChildControl",t="qxanonymous",u="Unsupported control: ",v="dragstart",w="Invalid left decorator inset detected: ",x="Font",y="qx.dynlocale",z="dragchange",A="Invalid layout data: ",B="Could not add widget to itself: ",C="_applyEnabled",D="_applySelectable",E="__hJ",F="Number",G="_applyKeepActive",H="qx.event.type.Pinch",I="dragend",J="_applyVisibility",K="The 'before' widget is not a child of this widget!",L="Child control '",M="qxDraggable",N="qx.event.type.Roll",O="syncAppearance",P='" while styling ',Q="paddingLeft",R="' of widget ",S="qx.event.type.Mouse",T="Wrong 'left' argument. ",U="_applyPadding",V="#",W="'Child' must be an instance of qx.ui.core.LayoutItem!",X="Remove Error: ",Y="visible",dg="qx.event.type.Event",dh="qx.event.type.MouseWheel",di="_applyCursor",dc="changeVisibility",dd="_applyDraggable",de="resize",df="Decorator",dn="At least one child in control ",dp="zIndex",dq="changeTextColor",dr="changeContextMenu",dj="on",dk="paddingTop",dl="opacity",dm="This widget has no children!",dv="changeSelectable",dW="Invalid top decorator inset detected: ",fd="_applyAnonymous",dw="none",ds="outline",dt="hidden",eY="The 'after' widget is not a child of this widget!",du="_applyAppearance",dx=" returned an invalid size hint!",dy="hovered",dz="_applyOpacity",dE="Boolean",dF="px",dG="qx.ui.core.Widget",dA="longtap",dB="default",dC="__hN",dD="minHeight is larger than maxHeight!",dK="TabIndex property must be between 1 and 32000",dL="_applyFont",dM="cursor",dN="qxDroppable",dH="' already created!",dI="changeZIndex",fa=": ",dJ="Color",dR="changeEnabled",dS="Abstract method call: _getContentHeightForWidth()!",fc="changeFont",dT="qx.event.type.Focus",dO="_applyDecorator",dP="_applyZIndex",fb="_applyTextColor",dQ=' has no themeable property "',dU="Widget is not focusable!",dV="qx.ui.menu.Menu",ei="engine.name",eh="qx.event.type.Drag",eg="Invalid right decorator inset detected: ",en="Invalid widget to add: ",em="qx.event.type.KeySequence",ek="excluded",ej="DOM element is not yet created!",eb="_applyToolTipText",ea="The layout of the widget",dY="Exception while creating child control '",dX="qx.event.type.Rotate",ef="_applyDroppable",ee=" is not a child of this widget!",ed="true",ec="widget",eu="Wrong 'top' argument. ",et="qxClass",es="changeDecorator",er="qx.event.type.Tap",ey="Integer",ex="changeBackgroundColor",ew="_applyTabIndex",ev="Invalid bottom decorator inset detected: ",eq="changeAppearance",ep="qx.debug",eo="qx.event.type.Track",eJ="shorthand",eI="/",eH="String",eN="border-box",eM="__hQ",eL="",eK="_applyContextMenu",eC="changeToolTipText",eB="padding",eA="tabIndex",ez="paddingBottom",eG="beforeContextmenuOpen",eF="changeNativeContextMenu",eE="undefined",eD="qx.ui.tooltip.ToolTip",eT="contextmenu",eS="_applyKeepFocus",eR="paddingRight",eQ="minWidth is larger than maxWidth!",eX="changeLocale",eW="qx.event.type.Pointer",eV="qxKeepFocus",eU="opera",eP="qx.event.type.Touch",eO="qxKeepActive",db="absolute";qx.Class.define(dG,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],implement:[qx.core.IDisposable],construct:function(){qx.ui.core.LayoutItem.call(this);this.__hJ=this.__hP();this.initFocusable();this.initSelectable();this.initNativeContextMenu();}
,events:{appear:dg,disappear:dg,createChildControl:h,resize:h,move:h,syncAppearance:h,mousemove:S,mouseover:S,mouseout:S,mousedown:S,mouseup:S,click:S,auxclick:S,dblclick:S,contextmenu:S,beforeContextmenuOpen:h,mousewheel:dh,touchstart:eP,touchend:eP,touchmove:eP,touchcancel:eP,tap:er,longtap:er,dbltap:er,swipe:eP,rotate:dX,pinch:H,track:eo,roll:N,pointermove:eW,pointerover:eW,pointerout:eW,pointerdown:eW,pointerup:eW,pointercancel:eW,keyup:em,keydown:em,keypress:em,keyinput:n,focus:dT,blur:dT,focusin:dT,focusout:dT,activate:dT,deactivate:dT,capture:dg,losecapture:dg,drop:eh,dragleave:eh,dragover:eh,drag:eh,dragstart:eh,dragend:eh,dragchange:eh,droprequest:eh},properties:{paddingTop:{check:ey,init:0,apply:U,themeable:true},paddingRight:{check:ey,init:0,apply:U,themeable:true},paddingBottom:{check:ey,init:0,apply:U,themeable:true},paddingLeft:{check:ey,init:0,apply:U,themeable:true},padding:{group:[dk,eR,ez,Q],mode:eJ,themeable:true},zIndex:{nullable:true,init:10,apply:dP,event:dI,check:ey,themeable:true},decorator:{nullable:true,init:null,apply:dO,event:es,check:df,themeable:true},backgroundColor:{nullable:true,check:dJ,apply:g,event:ex,themeable:true},textColor:{nullable:true,check:dJ,apply:fb,event:dq,themeable:true,inheritable:true},font:{nullable:true,apply:dL,check:x,event:fc,themeable:true,inheritable:true,dereference:true},opacity:{check:F,apply:dz,themeable:true,nullable:true,init:null},cursor:{check:eH,apply:di,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:eD,nullable:true},toolTipText:{check:eH,nullable:true,event:eC,apply:eb},toolTipIcon:{check:eH,nullable:true,event:eC},blockToolTip:{check:dE,init:false},showToolTipWhenDisabled:{check:dE,init:false},visibility:{check:[Y,dt,ek],init:Y,apply:J,event:dc},enabled:{init:true,check:dE,inheritable:true,apply:C,event:dR},anonymous:{init:false,check:dE,apply:fd},tabIndex:{check:ey,nullable:true,apply:ew},focusable:{check:dE,init:false,apply:k},keepFocus:{check:dE,init:false,apply:eS},keepActive:{check:dE,init:false,apply:G},draggable:{check:dE,init:false,apply:dd},droppable:{check:dE,init:false,apply:ef},selectable:{check:dE,init:false,event:dv,apply:D},contextMenu:{check:dV,apply:eK,nullable:true,event:dr},nativeContextMenu:{check:dE,init:false,themeable:true,event:eF,apply:c},appearance:{check:eH,init:ec,apply:du,event:eq}},statics:{DEBUG:false,getWidgetByElement:function(fg,fe){while(fg){if(qx.core.Environment.get(ep)){qx.core.Assert.assertTrue((!fg.$$widget&&!fg.$$widgetObject)||(fg.$$widgetObject&&fg.$$widget&&fg.$$widgetObject.toHashCode()===fg.$$widget));}
;var ff=fg.$$widgetObject;if(ff){if(!fe||!ff.getAnonymous()){return ff;}
;}
;try{fg=fg.parentNode;}
catch(e){return null;}
;}
;return null;}
,contains:function(parent,fh){while(fh){fh=fh.getLayoutParent();if(parent==fh){return true;}
;}
;return false;}
,__hK:new qx.util.ObjectPool()},members:{__hJ:null,__hL:null,__hM:null,__hN:null,_getLayout:function(){return this.__hN;}
,_setLayout:function(fi){if(qx.core.Environment.get(ep)){if(fi){this.assertInstance(fi,qx.ui.layout.Abstract);}
;}
;if(this.__hN){this.__hN.connectToWidget(null);}
;if(fi){fi.connectToWidget(this);}
;this.__hN=fi;qx.ui.core.queue.Layout.add(this);}
,setLayoutParent:function(parent){if(this.$$parent===parent){return;}
;var content=this.getContentElement();if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(content);}
;this.$$parent=parent||null;if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(content);}
;this.$$refreshInheritables();qx.ui.core.queue.Visibility.add(this);}
,_updateInsets:null,renderLayout:function(fp,top,fm,fk){var fq=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,fp,top,fm,fk);if(!fq){return null;}
;if(qx.lang.Object.isEmpty(fq)&&!this._updateInsets){return null;}
;var content=this.getContentElement();var ft=fq.size||this._updateInsets;var fr=dF;var fj={};if(fq.position){fj.left=fp+fr;fj.top=top+fr;}
;if(ft||fq.margin){fj.width=fm+fr;fj.height=fk+fr;}
;if(Object.keys(fj).length>0){content.setStyles(fj);}
;if(ft||fq.local||fq.margin){if(this.__hN&&this.hasLayoutChildren()){var fo=this.getInsets();var innerWidth=fm-fo.left-fo.right;var innerHeight=fk-fo.top-fo.bottom;var fs=this.getDecorator();var fn={left:0,right:0,top:0,bottom:0};if(fs){fs=qx.theme.manager.Decoration.getInstance().resolve(fs);fn=fs.getPadding();}
;var fl={top:this.getPaddingTop()+fn.top,right:this.getPaddingRight()+fn.right,bottom:this.getPaddingBottom()+fn.bottom,left:this.getPaddingLeft()+fn.left};this.__hN.renderLayout(innerWidth,innerHeight,fl);}
else if(this.hasLayoutChildren()){throw new Error(dn+this._findTopControl()+m);}
;}
;if(fq.position&&this.hasListener(r)){this.fireDataEvent(r,this.getBounds());}
;if(fq.size&&this.hasListener(de)){this.fireDataEvent(de,this.getBounds());}
;delete this._updateInsets;return fq;}
,__hO:null,clearSeparators:function(){var fv=this.__hO;if(!fv){return;}
;var fw=qx.ui.core.Widget.__hK;var content=this.getContentElement();var fu;for(var i=0,l=fv.length;i<l;i++ ){fu=fv[i];fw.poolObject(fu);content.remove(fu.getContentElement());}
;fv.length=0;}
,renderSeparator:function(fy,fz){var fx=qx.ui.core.Widget.__hK.getObject(qx.ui.core.Widget);fx.set({decorator:fy});var fB=fx.getContentElement();this.getContentElement().add(fB);var fA=fB.getDomElement();if(fA){fA.style.top=fz.top+dF;fA.style.left=fz.left+dF;fA.style.width=fz.width+dF;fA.style.height=fz.height+dF;}
else {fB.setStyles({left:fz.left+dF,top:fz.top+dF,width:fz.width+dF,height:fz.height+dF});}
;if(!this.__hO){this.__hO=[];}
;this.__hO.push(fx);}
,_computeSizeHint:function(){var fI=this.getWidth();var fC=this.getMinWidth();var fD=this.getMaxWidth();var fG=this.getHeight();var fE=this.getMinHeight();var fF=this.getMaxHeight();if(qx.core.Environment.get(ep)){if(fC!==null&&fD!==null){this.assert(fC<=fD,eQ);}
;if(fE!==null&&fF!==null){this.assert(fE<=fF,dD);}
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
,invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);if(this.__hN){this.__hN.invalidateLayoutCache();}
;}
,_getContentHint:function(){var fN=this.__hN;if(fN){if(this.hasLayoutChildren()){var fO=fN.getSizeHint();if(qx.core.Environment.get(ep)){var fM=ea+this.toString()+dx;this.assertInteger(fO.width,T+fM);this.assertInteger(fO.height,eu+fM);}
;return fO;}
else {return {width:0,height:0};}
;}
else {return {width:100,height:50};}
;}
,_getHeightForWidth:function(fT){var fS=this.getInsets();var fP=fS.left+fS.right;var fV=fS.top+fS.bottom;var fU=fT-fP;var fQ=this._getLayout();if(fQ&&fQ.hasHeightForWidth()){var fW=fQ.getHeightForWidth(fU);}
else {fW=this._getContentHeightForWidth(fU);}
;var fR=fW+fV;return fR;}
,_getContentHeightForWidth:function(fX){throw new Error(dS);}
,getInsets:function(){var top=this.getPaddingTop();var fY=this.getPaddingRight();var ga=this.getPaddingBottom();var gd=this.getPaddingLeft();if(this.getDecorator()){var gc=qx.theme.manager.Decoration.getInstance().resolve(this.getDecorator());var gb=gc.getInsets();if(qx.core.Environment.get(ep)){this.assertNumber(gb.top,dW+gb.top);this.assertNumber(gb.right,eg+gb.right);this.assertNumber(gb.bottom,ev+gb.bottom);this.assertNumber(gb.left,w+gb.left);}
;top+=gb.top;fY+=gb.right;ga+=gb.bottom;gd+=gb.left;}
;return {"top":top,"right":fY,"bottom":ga,"left":gd};}
,getInnerSize:function(){var gf=this.getBounds();if(!gf){return null;}
;var ge=this.getInsets();return {width:gf.width-ge.left-ge.right,height:gf.height-ge.top-ge.bottom};}
,fadeOut:function(gg){return this.getContentElement().fadeOut(gg);}
,fadeIn:function(gh){return this.getContentElement().fadeIn(gh);}
,_applyAnonymous:function(gi){if(gi){this.getContentElement().setAttribute(t,ed);}
else {this.getContentElement().removeAttribute(t);}
;}
,show:function(){this.setVisibility(Y);}
,hide:function(){this.setVisibility(dt);}
,exclude:function(){this.setVisibility(ek);}
,isVisible:function(){return this.getVisibility()===Y;}
,isHidden:function(){return this.getVisibility()!==Y;}
,isExcluded:function(){return this.getVisibility()===ek;}
,isSeeable:function(){qx.ui.core.queue.Manager.flush();var gj=this.getContentElement().getDomElement();if(gj){return gj.offsetWidth>0;}
;return false;}
,__hP:function(){var gl=this._createContentElement();gl.connectWidget(this);gl.setStyles({"touch-action":dw,"-ms-touch-action":dw});if(qx.core.Environment.get(ep)){gl.setAttribute(et,this.classname);}
;var gk={"zIndex":10,"boxSizing":eN};if(!qx.ui.root.Inline||!(this instanceof qx.ui.root.Inline)){gk.position=db;}
;gl.setStyles(gk);return gl;}
,_createContentElement:function(){return new qx.html.Element(f,{overflowX:dt,overflowY:dt});}
,getContentElement:function(){return this.__hJ;}
,__hQ:null,getLayoutChildren:function(){var gn=this.__hQ;if(!gn){return this.__hR;}
;var go;for(var i=0,l=gn.length;i<l;i++ ){var gm=gn[i];if(gm.hasUserBounds()||gm.isExcluded()){if(go==null){go=gn.concat();}
;qx.lang.Array.remove(go,gm);}
;}
;return go||gn;}
,scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);}
,invalidateLayoutChildren:function(){var gp=this.__hN;if(gp){gp.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);}
,hasLayoutChildren:function(){var gr=this.__hQ;if(!gr){return false;}
;var gq;for(var i=0,l=gr.length;i<l;i++ ){gq=gr[i];if(!gq.hasUserBounds()&&!gq.isExcluded()){return true;}
;}
;return false;}
,getChildrenContainer:function(){return this;}
,__hR:[],_getChildren:function(){return this.__hQ||this.__hR;}
,_indexOf:function(gt){var gs=this.__hQ;if(!gs){return -1;}
;return gs.indexOf(gt);}
,_hasChildren:function(){var gu=this.__hQ;return gu!=null&&(!!gu[0]);}
,addChildrenToQueue:function(gv){var gw=this.__hQ;if(!gw){return;}
;var gx;for(var i=0,l=gw.length;i<l;i++ ){gx=gw[i];gv.push(gx);gx.addChildrenToQueue(gv);}
;}
,_add:function(gz,gy){if(qx.core.Environment.get(ep)){this.assertInstance(gz,qx.ui.core.LayoutItem.constructor,W);}
;if(gz.getLayoutParent()==this){qx.lang.Array.remove(this.__hQ,gz);}
;if(this.__hQ){this.__hQ.push(gz);}
else {this.__hQ=[gz];}
;this.__hS(gz,gy);}
,_addAt:function(gD,gA,gC){if(!this.__hQ){this.__hQ=[];}
;if(gD.getLayoutParent()==this){qx.lang.Array.remove(this.__hQ,gD);}
;var gB=this.__hQ[gA];if(gB===gD){gD.setLayoutProperties(gC);}
;if(gB){qx.lang.Array.insertBefore(this.__hQ,gD,gB);}
else {this.__hQ.push(gD);}
;this.__hS(gD,gC);}
,_addBefore:function(gE,gG,gF){if(qx.core.Environment.get(ep)){this.assertInArray(gG,this._getChildren(),K);}
;if(gE==gG){return;}
;if(!this.__hQ){this.__hQ=[];}
;if(gE.getLayoutParent()==this){qx.lang.Array.remove(this.__hQ,gE);}
;qx.lang.Array.insertBefore(this.__hQ,gE,gG);this.__hS(gE,gF);}
,_addAfter:function(gJ,gH,gI){if(qx.core.Environment.get(ep)){this.assertInArray(gH,this._getChildren(),eY);}
;if(gJ==gH){return;}
;if(!this.__hQ){this.__hQ=[];}
;if(gJ.getLayoutParent()==this){qx.lang.Array.remove(this.__hQ,gJ);}
;qx.lang.Array.insertAfter(this.__hQ,gJ,gH);this.__hS(gJ,gI);}
,_remove:function(gK){if(!this.__hQ){throw new Error(dm);}
;qx.lang.Array.remove(this.__hQ,gK);this.__hT(gK);}
,_removeAt:function(gL){if(!this.__hQ){throw new Error(dm);}
;var gM=this.__hQ[gL];qx.lang.Array.removeAt(this.__hQ,gL);this.__hT(gM);return gM;}
,_removeAll:function(){if(!this.__hQ){return [];}
;var gN=this.__hQ.concat();this.__hQ.length=0;for(var i=gN.length-1;i>=0;i-- ){this.__hT(gN[i]);}
;qx.ui.core.queue.Layout.add(this);return gN;}
,_afterAddChild:null,_afterRemoveChild:null,__hS:function(gP,gO){if(qx.core.Environment.get(ep)){this.assertInstance(gP,qx.ui.core.LayoutItem,en+gP);this.assertNotIdentical(gP,this,B+gP);if(gO!=null){this.assertType(gO,j,A+gO);}
;}
;var parent=gP.getLayoutParent();if(parent&&parent!=this){parent._remove(gP);}
;gP.setLayoutParent(this);if(gO){gP.setLayoutProperties(gO);}
else {this.updateLayoutProperties();}
;if(this._afterAddChild){this._afterAddChild(gP);}
;}
,__hT:function(gQ){if(qx.core.Environment.get(ep)){this.assertNotUndefined(gQ);}
;if(gQ.getLayoutParent()!==this){throw new Error(X+gQ+ee);}
;gQ.setLayoutParent(null);if(this.__hN){this.__hN.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);if(this._afterRemoveChild){this._afterRemoveChild(gQ);}
;}
,capture:function(gR){this.getContentElement().capture(gR);}
,releaseCapture:function(){this.getContentElement().releaseCapture();}
,isCapturing:function(){var gS=this.getContentElement().getDomElement();if(!gS){return false;}
;var gT=qx.event.Registration.getManager(gS);var gU=gT.getDispatcher(qx.event.dispatch.MouseCapture);return gS==gU.getCaptureElement();}
,_applyPadding:function(gW,gV,name){this._updateInsets=true;qx.ui.core.queue.Layout.add(this);this.__hU(name,gW);}
,__hU:function(gX,hb){var content=this.getContentElement();var gY=this.getDecorator();gY=qx.theme.manager.Decoration.getInstance().resolve(gY);if(gY){var ha=qx.Bootstrap.firstLow(gX.replace(eB,eL));hb+=gY.getPadding()[ha]||0;}
;content.setStyle(gX,hb+dF);}
,_applyDecorator:function(hd,hc){var content=this.getContentElement();if(hc){hc=qx.theme.manager.Decoration.getInstance().getCssClassName(hc);content.removeClass(hc);}
;if(hd){hd=qx.theme.manager.Decoration.getInstance().addCssClass(hd);content.addClass(hd);}
;if(hd||hc){qx.ui.core.queue.Layout.add(this);}
;}
,_applyToolTipText:function(hg,hf){if(qx.core.Environment.get(y)){if(this.__hM){return;}
;var he=qx.locale.Manager.getInstance();this.__hM=he.addListener(eX,function(){var hh=this.getToolTipText();if(hh&&hh.translate){this.setToolTipText(hh.translate());}
;}
,this);}
;}
,_applyTextColor:function(hj,hi){}
,_applyZIndex:function(hl,hk){this.getContentElement().setStyle(dp,hl==null?0:hl);}
,_applyVisibility:function(hn,hm){var content=this.getContentElement();if(hn===Y){content.show();}
else {content.hide();}
;var parent=this.$$parent;if(parent&&(hm==null||hn==null||hm===ek||hn===ek)){parent.invalidateLayoutChildren();}
;qx.ui.core.queue.Visibility.add(this);}
,_applyOpacity:function(hp,ho){this.getContentElement().setStyle(dl,hp==1?null:hp);}
,_applyCursor:function(hr,hq){if(hr==null&&!this.isSelectable()){hr=dB;}
;this.getContentElement().setStyle(dM,hr,qx.core.Environment.get(ei)==eU);}
,_applyBackgroundColor:function(hv,hu){var ht=this.getBackgroundColor();var content=this.getContentElement();var hs=qx.theme.manager.Color.getInstance().resolve(ht);content.setStyle(a,hs);}
,_applyFont:function(hx,hw){}
,_onChangeTheme:function(){if(this.isDisposed()){return;}
;qx.ui.core.LayoutItem.prototype._onChangeTheme.call(this);this.updateAppearance();var hy=this.getDecorator();this._applyDecorator(null,hy);this._applyDecorator(hy);hy=this.getFont();if(qx.lang.Type.isString(hy)){this._applyFont(hy,hy);}
;hy=this.getTextColor();if(qx.lang.Type.isString(hy)){this._applyTextColor(hy,hy);}
;hy=this.getBackgroundColor();if(qx.lang.Type.isString(hy)){this._applyBackgroundColor(hy,hy);}
;}
,__hV:null,$$stateChanges:null,_forwardStates:null,hasState:function(hA){var hz=this.__hV;return !!hz&&!!hz[hA];}
,addState:function(hE){var hD=this.__hV;if(!hD){hD=this.__hV={};}
;if(hD[hE]){return;}
;this.__hV[hE]=true;if(hE===dy){this.syncAppearance();}
else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var hC=this.__hY;if(forward&&forward[hE]&&hC){var hB;for(var hF in hC){hB=hC[hF];if(hB instanceof qx.ui.core.Widget){hC[hF].addState(hE);}
;}
;}
;}
,removeState:function(hJ){var hI=this.__hV;if(!hI||!hI[hJ]){return;}
;delete this.__hV[hJ];if(hJ===dy){this.syncAppearance();}
else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var hH=this.__hY;if(forward&&forward[hJ]&&hH){for(var hK in hH){var hG=hH[hK];if(hG instanceof qx.ui.core.Widget){hG.removeState(hJ);}
;}
;}
;}
,replaceState:function(hM,hP){var hO=this.__hV;if(!hO){hO=this.__hV={};}
;if(!hO[hP]){hO[hP]=true;}
;if(hO[hM]){delete hO[hM];}
;if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var hN=this.__hY;if(forward&&forward[hP]&&hN){for(var hQ in hN){var hL=hN[hQ];if(hL instanceof qx.ui.core.Widget){hL.replaceState(hM,hP);}
;}
;}
;}
,__hW:null,__hX:null,syncAppearance:function(){var hV=this.__hV;var hU=this.__hW;var hW=qx.theme.manager.Appearance.getInstance();var hS=qx.core.Property.$$method.setThemed;var ib=qx.core.Property.$$method.resetThemed;if(this.__hX){delete this.__hX;if(hU){var hR=hW.styleFrom(hU,hV,null,this.getAppearance());hU=null;}
;}
;if(!hU){var hT=this;var hX=[];do {hX.push(hT.$$subcontrol||hT.getAppearance());}
while(hT=hT.$$subparent);hU=hX.reverse().join(eI).replace(/#[0-9]+/g,eL);this.__hW=hU;}
;var ia=hW.styleFrom(hU,hV,null,this.getAppearance());if(ia){if(hR){for(var hY in hR){if(ia[hY]===undefined){this[ib[hY]]();}
;}
;}
;if(qx.core.Environment.get(ep)){for(var hY in ia){if(!this[hS[hY]]){throw new Error(this.classname+dQ+hY+P+hU);}
;}
;}
;for(var hY in ia){ia[hY]===undefined?this[ib[hY]]():this[hS[hY]](ia[hY]);}
;}
else if(hR){for(var hY in hR){this[ib[hY]]();}
;}
;this.fireDataEvent(O,this.__hV);}
,_applyAppearance:function(ie,ic){this.updateAppearance();}
,checkAppearanceNeeds:function(){if(!this.__hL){qx.ui.core.queue.Appearance.add(this);this.__hL=true;}
else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);delete this.$$stateChanges;}
;}
,updateAppearance:function(){this.__hX=true;qx.ui.core.queue.Appearance.add(this);var ii=this.__hY;if(ii){var ig;for(var ih in ii){ig=ii[ih];if(ig instanceof qx.ui.core.Widget){ig.updateAppearance();}
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
;io.setAttribute(eA,iq);io.setStyle(ds,dw);}
else {if(io.isNativelyFocusable()){io.setAttribute(eA,-1);}
else if(im){io.setAttribute(eA,null);}
;}
;}
,_applyKeepFocus:function(is){var ir=this.getFocusElement();ir.setAttribute(eV,is?dj:null);}
,_applyKeepActive:function(iu){var it=this.getContentElement();it.setAttribute(eO,iu?dj:null);}
,_applyTabIndex:function(iv){if(iv==null){iv=1;}
else if(iv<1||iv>32000){throw new Error(dK);}
;if(this.getFocusable()&&iv!=null){this.getFocusElement().setAttribute(eA,iv);}
;}
,_applySelectable:function(ix,iw){if(iw!==null){this._applyCursor(this.getCursor());}
;this.getContentElement().setSelectable(ix);}
,_applyEnabled:function(iz,iy){if(iz===false){this.addState(q);this.removeState(dy);if(this.isFocusable()){this.removeState(p);this._applyFocusable(false,true);}
;if(this.isDraggable()){this._applyDraggable(false,true);}
;if(this.isDroppable()){this._applyDroppable(false,true);}
;}
else {this.removeState(q);if(this.isFocusable()){this._applyFocusable(true,false);}
;if(this.isDraggable()){this._applyDraggable(true,false);}
;if(this.isDroppable()){this._applyDroppable(true,false);}
;}
;}
,_applyNativeContextMenu:function(iB,iA,name){}
,_applyContextMenu:function(iD,iC){if(iC){iC.removeState(eT);if(iC.getOpener()==this){iC.resetOpener();}
;if(!iD){this.removeListener(eT,this._onContextMenuOpen);this.removeListener(dA,this._onContextMenuOpen);iC.removeListener(dc,this._onBeforeContextMenuOpen,this);}
;}
;if(iD){iD.setOpener(this);iD.addState(eT);if(!iC){this.addListener(eT,this._onContextMenuOpen);this.addListener(dA,this._onContextMenuOpen);iD.addListener(dc,this._onBeforeContextMenuOpen,this);}
;}
;}
,_onContextMenuOpen:function(e){if(e.getType()==dA){if(e.getPointerType()!==d){return;}
;}
;this.getContextMenu().openAtPointer(e);e.stop();}
,_onBeforeContextMenuOpen:function(e){if(e.getData()==Y&&this.hasListener(eG)){this.fireDataEvent(eG,e);}
;}
,_onStopEvent:function(e){e.stopPropagation();}
,_getDragDropCursor:function(){return qx.ui.core.DragDropCursor.getInstance();}
,_applyDraggable:function(iF,iE){if(!this.isEnabled()&&iF===true){iF=false;}
;this._getDragDropCursor();if(iF){this.addListener(v,this._onDragStart);this.addListener(b,this._onDrag);this.addListener(I,this._onDragEnd);this.addListener(z,this._onDragChange);}
else {this.removeListener(v,this._onDragStart);this.removeListener(b,this._onDrag);this.removeListener(I,this._onDragEnd);this.removeListener(z,this._onDragChange);}
;this.getContentElement().setAttribute(M,iF?dj:null);}
,_applyDroppable:function(iH,iG){if(!this.isEnabled()&&iH===true){iH=false;}
;this.getContentElement().setAttribute(dN,iH?dj:null);}
,_onDragStart:function(e){this._getDragDropCursor().placeToPointer(e);this.getApplicationRoot().setGlobalCursor(dB);}
,_onDrag:function(e){this._getDragDropCursor().placeToPointer(e);}
,_onDragEnd:function(e){this._getDragDropCursor().moveTo(-1000,-1000);this.getApplicationRoot().resetGlobalCursor();}
,_onDragChange:function(e){var iI=this._getDragDropCursor();var iJ=e.getCurrentAction();iJ?iI.setAction(iJ):iI.resetAction();}
,visualizeFocus:function(){this.addState(p);}
,visualizeBlur:function(){this.removeState(p);}
,scrollChildIntoView:function(iO,iN,iM,iL){iL=typeof iL==eE?true:iL;var iK=qx.ui.core.queue.Layout;var parent;if(iL){iL=!iK.isScheduled(iO);parent=iO.getLayoutParent();if(iL&&parent){iL=!iK.isScheduled(parent);if(iL){parent.getChildren().forEach(function(iP){iL=iL&&!iK.isScheduled(iP);}
);}
;}
;}
;this.scrollChildIntoViewX(iO,iN,iL);this.scrollChildIntoViewY(iO,iM,iL);}
,scrollChildIntoViewX:function(iS,iQ,iR){this.getContentElement().scrollChildIntoViewX(iS.getContentElement(),iQ,iR);}
,scrollChildIntoViewY:function(iV,iT,iU){this.getContentElement().scrollChildIntoViewY(iV.getContentElement(),iT,iU);}
,focus:function(){if(this.isFocusable()){this.getFocusElement().focus();}
else {throw new Error(dU);}
;}
,blur:function(){if(this.isFocusable()){this.getFocusElement().blur();}
else {throw new Error(dU);}
;}
,activate:function(){this.getContentElement().activate();}
,deactivate:function(){this.getContentElement().deactivate();}
,tabFocus:function(){this.getFocusElement().focus();}
,hasChildControl:function(iW){if(!this.__hY){return false;}
;return !!this.__hY[iW];}
,__hY:null,_getCreatedChildControls:function(){return this.__hY;}
,getChildControl:function(ja,iY){if(!this.__hY){if(iY){return null;}
;this.__hY={};}
;var iX=this.__hY[ja];if(iX){return iX;}
;if(iY===true){return null;}
;return this._createChildControl(ja);}
,_showChildControl:function(jc){var jb=this.getChildControl(jc);jb.show();return jb;}
,_excludeChildControl:function(je){var jd=this.getChildControl(je,true);if(jd){jd.exclude();}
;}
,_isChildControlVisible:function(jg){var jf=this.getChildControl(jg,true);if(jf){return jf.isVisible();}
;return false;}
,_releaseChildControl:function(jk){var jh=this.getChildControl(jk,false);if(!jh){throw new Error(u+jk);}
;delete jh.$$subcontrol;delete jh.$$subparent;var ji=this.__hV;var forward=this._forwardStates;if(ji&&forward&&jh instanceof qx.ui.core.Widget){for(var jj in ji){if(forward[jj]){jh.removeState(jj);}
;}
;}
;delete this.__hY[jk];return jh;}
,_createChildControl:function(jp){if(!this.__hY){this.__hY={};}
else if(this.__hY[jp]){throw new Error(L+jp+dH);}
;var jm=jp.indexOf(V);try{if(jm==-1){var jl=this._createChildControlImpl(jp);}
else {var jl=this._createChildControlImpl(jp.substring(0,jm),jp.substring(jm+1,jp.length));}
;}
catch(jq){jq.message=dY+jp+R+this.toString()+fa+jq.message;throw jq;}
;if(!jl){throw new Error(u+jp);}
;jl.$$subcontrol=jp;jl.$$subparent=this;var jn=this.__hV;var forward=this._forwardStates;if(jn&&forward&&jl instanceof qx.ui.core.Widget){for(var jo in jn){if(forward[jo]){jl.addState(jo);}
;}
;}
;this.fireDataEvent(s,jl);return this.__hY[jp]=jl;}
,_createChildControlImpl:function(js,jr){return null;}
,_disposeChildControls:function(){var jw=this.__hY;if(!jw){return;}
;var ju=qx.ui.core.Widget;for(var jv in jw){var jt=jw[jv];if(!ju.contains(this,jt)){jt.destroy();}
else {jt.dispose();}
;}
;delete this.__hY;}
,_findTopControl:function(){var jx=this;while(jx){if(!jx.$$subparent){return jx;}
;jx=jx.$$subparent;}
;return null;}
,getSubcontrolId:function(){return this.$$subcontrol||null;}
,getContentLocation:function(jz){var jy=this.getContentElement().getDomElement();return jy?qx.bom.element.Location.get(jy,jz):null;}
,setDomLeft:function(jB){var jA=this.getContentElement().getDomElement();if(jA){jA.style.left=jB+dF;}
else {throw new Error(ej);}
;}
,setDomTop:function(jD){var jC=this.getContentElement().getDomElement();if(jC){jC.style.top=jD+dF;}
else {throw new Error(ej);}
;}
,setDomPosition:function(jF,top){var jE=this.getContentElement().getDomElement();if(jE){jE.style.left=jF+dF;jE.style.top=top+dF;}
else {throw new Error(ej);}
;}
,destroy:function(){if(this.$$disposed){return;}
;var parent=this.$$parent;if(parent){parent._remove(this);}
;qx.ui.core.queue.Dispose.add(this);}
,clone:function(){var jG=qx.ui.core.LayoutItem.prototype.clone.call(this);if(this.getChildren){var jH=this.getChildren();for(var i=0,l=jH.length;i<l;i++ ){jG.add(jH[i].clone());}
;}
;return jG;}
},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(y)){if(this.__hM){qx.locale.Manager.getInstance().removeListenerById(this.__hM);}
;}
;var jI=this.getContentElement();if(jI){jI.disconnectWidget(this);}
;this._disposeChildControls();qx.ui.core.queue.Appearance.remove(this);qx.ui.core.queue.Layout.remove(this);qx.ui.core.queue.Visibility.remove(this);qx.ui.core.queue.Widget.remove(this);}
;if(this.getContextMenu()){this.setContextMenu(null);}
;if(!qx.core.ObjectRegistry.inShutDown){this.clearSeparators();this.__hO=null;}
else {this._disposeArray(o);}
;this._disposeArray(eM);this.__hV=this.__hY=null;this._disposeObjects(dC,E);}
});}
)();
(function(){var a="Missing renderLayout() implementation!",b="abstract",c="Missing getHeightForWidth() implementation!",d="qx.debug",e="It is not possible to manually set the connected widget.",f="qx.ui.layout.Abstract";qx.Class.define(f,{type:b,extend:qx.core.Object,members:{__eY:null,_invalidChildrenCache:null,__gF:null,invalidateLayoutCache:function(){this.__eY=null;}
,renderLayout:function(h,i,g){this.warn(a);}
,getSizeHint:function(){if(this.__eY){return this.__eY;}
;return this.__eY=this._computeSizeHint();}
,hasHeightForWidth:function(){return false;}
,getHeightForWidth:function(j){this.warn(c);return null;}
,_computeSizeHint:function(){return null;}
,invalidateChildrenCache:function(){this._invalidChildrenCache=true;}
,verifyLayoutProperty:qx.core.Environment.select(d,{"true":function(k,name,l){}
,"false":null}),_clearSeparators:function(){var m=this.__gF;if(m instanceof qx.ui.core.LayoutItem){m.clearSeparators();}
;}
,_renderSeparator:function(n,o){this.__gF.renderSeparator(n,o);}
,connectToWidget:function(p){if(p&&this.__gF){throw new Error(e);}
;this.__gF=p;this.invalidateChildrenCache();}
,_getWidget:function(){return this.__gF;}
,_applyLayoutChange:function(){if(this.__gF){this.__gF.scheduleLayoutUpdate();}
;}
,_getLayoutChildren:function(){return this.__gF.getLayoutChildren();}
},destruct:function(){this.__gF=this.__eY=null;}
});}
)();
(function(){var a="blur",b="activate",c="focus",d="qx.ui.core.EventHandler";qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);this.__dr=qx.event.Registration.getManager(window);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,auxclick:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,longtap:1,swipe:1,dbltap:1,track:1,trackend:1,trackstart:1,pinch:1,rotate:1,roll:1,pointermove:1,pointerover:1,pointerout:1,pointerdown:1,pointerup:1,pointercancel:1},IGNORE_CAN_HANDLE:false},members:{__dr:null,__ij:{focusin:1,focusout:1,focus:1,blur:1},__ik:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(f,e){return f instanceof qx.ui.core.Widget;}
,_dispatchEvent:function(j){var o=j.getTarget();var n=qx.ui.core.Widget.getWidgetByElement(o);var p=false;while(n&&n.isAnonymous()){var p=true;n=n.getLayoutParent();}
;if(n&&p&&j.getType()==b){n.getContentElement().activate();}
;if(this.__ij[j.getType()]){n=n&&n.getFocusTarget();if(!n){return;}
;}
;if(j.getRelatedTarget){var w=j.getRelatedTarget();var v=qx.ui.core.Widget.getWidgetByElement(w);while(v&&v.isAnonymous()){v=v.getLayoutParent();}
;if(v){if(this.__ij[j.getType()]){v=v.getFocusTarget();}
;if(v===n){return;}
;}
;}
;var r=j.getCurrentTarget();var t=qx.ui.core.Widget.getWidgetByElement(r);if(!t||t.isAnonymous()){return;}
;if(this.__ij[j.getType()]){t=t.getFocusTarget();}
;var u=j.getType();if(!t||!(t.isEnabled()||this.__ik[u])){return;}
;var g=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;var q=this.__dr.getListeners(t,u,g);if(j.getEventPhase()==qx.event.type.Event.AT_TARGET){if(!q){q=[];}
;var h=this.__dr.getListeners(t,u,!g);if(h){q=q.concat(h);}
;}
;if(!q||q.length===0){return;}
;var k=qx.event.Pool.getInstance().getObject(j.constructor);j.clone(k);k.setTarget(n);k.setRelatedTarget(v||null);k.setCurrentTarget(t);var x=j.getOriginalTarget();if(x){var m=qx.ui.core.Widget.getWidgetByElement(x);while(m&&m.isAnonymous()){m=m.getLayoutParent();}
;k.setOriginalTarget(m);}
else {k.setOriginalTarget(o);}
;for(var i=0,l=q.length;i<l;i++ ){var s=q[i].context||t;q[i].handler.call(s,k);}
;if(k.getPropagationStopped()){j.stopPropagation();}
;if(k.getDefaultPrevented()){j.preventDefault();}
;qx.event.Pool.getInstance().poolObject(k);}
,registerEvent:function(A,z,y){var B;if(z===c||z===a){B=A.getFocusElement();}
else {B=A.getContentElement();}
;if(B){B.addListener(z,this._dispatchEvent,this,y);}
;}
,unregisterEvent:function(E,D,C){var F;if(D===c||D===a){F=E.getFocusElement();}
else {F=E.getContentElement();}
;if(F){F.removeListener(D,this._dispatchEvent,this,C);}
;}
},destruct:function(){this.__dr=null;}
,defer:function(G){qx.event.Registration.addHandler(G);}
});}
)();
(function(){var a="best-fit",b="placementRight",c="Boolean",d="bottom-right",e="' ",f="widget",g="placementLeft",h="qx.ui.core.MPlacement",i="left-top",j="Integer",k="left-middle",l="right-middle",m="top-center",n="[qx.ui.core.MPlacement.setMoveDirection()], the value was '",o="offsetRight",p="interval",q="keep-align",r="bottom-left",s="pointer",t="direct",u="shorthand",v="Invalid value for the parameter 'direction' ",w="offsetLeft",x="top-left",y="appear",z="offsetBottom",A="top",B="top-right",C="offsetTop",D="but 'top' or 'left' are allowed.",E="right-bottom",F="disappear",G="right-top",H="bottom-center",I="left-bottom",J="left";qx.Mixin.define(h,{statics:{__eh:null,__ei:J,setVisibleElement:function(K){this.__eh=K;}
,getVisibleElement:function(){return this.__eh;}
,setMoveDirection:function(L){if(L===A||L===J){this.__ei=L;}
else {throw new Error(v+n+L+e+D);}
;}
,getMoveDirection:function(){return this.__ei;}
},properties:{position:{check:[x,m,B,r,H,d,i,k,I,G,l,E],init:r,themeable:true},placeMethod:{check:[f,s],init:s,themeable:true},domMove:{check:c,init:false},placementModeX:{check:[t,q,a],init:q,themeable:true},placementModeY:{check:[t,q,a],init:q,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[C,o,z,w],mode:u,themeable:true}},members:{__ej:null,__ek:null,__el:null,getLayoutLocation:function(N){var P,O,R,top;O=N.getBounds();if(!O){return null;}
;R=O.left;top=O.top;var Q=O;N=N.getLayoutParent();while(N&&!N.isRootWidget()){O=N.getBounds();R+=O.left;top+=O.top;P=N.getInsets();R+=P.left;top+=P.top;N=N.getLayoutParent();}
;if(N.isRootWidget()){var M=N.getContentLocation();if(M){R+=M.left;top+=M.top;}
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
,placeToWidget:function(bc,ba){if(ba){this.__em();this.__ej=qx.lang.Function.bind(this.placeToWidget,this,bc,false);qx.event.Idle.getInstance().addListener(p,this.__ej);this.__el=function(){this.__em();}
;this.addListener(F,this.__el,this);}
;var bb=bc.getContentLocation()||this.getLayoutLocation(bc);if(bb!=null){this._place(bb);return true;}
else {return false;}
;}
,__em:function(){if(this.__ej){qx.event.Idle.getInstance().removeListener(p,this.__ej);this.__ej=null;}
;if(this.__el){this.removeListener(F,this.__el,this);this.__el=null;}
;}
,placeToPointer:function(event){var be=Math.round(event.getDocumentLeft());var top=Math.round(event.getDocumentTop());var bd={left:be,top:top,right:be,bottom:top};this._place(bd);}
,placeToElement:function(bh,bf){var location=qx.bom.element.Location.get(bh);var bg={left:location.left,top:location.top,right:location.left+bh.offsetWidth,bottom:location.top+bh.offsetHeight};if(bf){this.__ej=qx.lang.Function.bind(this.placeToElement,this,bh,false);qx.event.Idle.getInstance().addListener(p,this.__ej);this.addListener(F,function(){if(this.__ej){qx.event.Idle.getInstance().removeListener(p,this.__ej);this.__ej=null;}
;}
,this);}
;this._place(bg);}
,placeToPoint:function(bj){var bi={left:bj.left,top:bj.top,right:bj.left,bottom:bj.top};this._place(bi);}
,_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};}
,__en:function(bk){var bl=null;if(this._computePlacementSize){var bl=this._computePlacementSize();}
else if(this.isVisible()){var bl=this.getBounds();}
;if(bl==null){this.addListenerOnce(y,function(){this.__en(bk);}
,this);}
else {bk.call(this,bl);}
;}
,_place:function(bm){this.__en(function(bo){var bn=qx.util.placement.Placement.compute(bo,this.getLayoutParent().getBounds(),bm,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());this.removeState(g);this.removeState(b);this.addState(bm.left<bn.left?b:g);this.moveTo(bn.left,bn.top);}
);}
},destruct:function(){this.__em();}
});}
)();
(function(){var a="-",b="best-fit",c="size",d="edge-start",e="target.bottom",f="offsets",g="size.width",h='__eo',i="bottom",j="offsets.bottom",k="qx.util.placement.Placement",l="Please use '",m="qx.debug",n="keep-align",o="center",p="target.right",q="direct",r="offsets.right",s="middle",t="target",u="align-start",v="Invalid 'mode' argument!'",w="left",x="align-end",y="Class",z="offsets.left",A="top",B="area",C="right",D="edge-end",E="target.top",F="area.height",G="target.left",H="align-center",I="area.width",J="' instead!",K="size.height",L="offsets.top";qx.Class.define(k,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__eo=qx.util.placement.DirectAxis;}
,properties:{axisX:{check:y},axisY:{check:y},edge:{check:[A,C,i,w],init:A},align:{check:[A,C,i,w,o,s],init:C}},statics:{__ep:null,compute:function(W,P,M,N,V,Q,R){this.__ep=this.__ep||new qx.util.placement.Placement();var T=V.split(a);var S=T[0];var O=T[1];if(qx.core.Environment.get(m)){if(O===o||O===s){var U=s;if(S===A||S===i){U=o;}
;qx.core.Assert.assertEquals(U,O,l+S+a+U+J);}
;}
;this.__ep.set({axisX:this.__et(Q),axisY:this.__et(R),edge:S,align:O});return this.__ep.compute(W,P,M,N);}
,__eq:null,__er:null,__es:null,__et:function(X){switch(X){case q:this.__eq=this.__eq||qx.util.placement.DirectAxis;return this.__eq;case n:this.__er=this.__er||qx.util.placement.KeepAlignAxis;return this.__er;case b:this.__es=this.__es||qx.util.placement.BestFitAxis;return this.__es;default:throw new Error(v);};}
},members:{__eo:null,compute:function(be,bb,Y,ba){if(qx.core.Environment.get(m)){this.assertObject(be,c);this.assertNumber(be.width,g);this.assertNumber(be.height,K);this.assertObject(bb,B);this.assertNumber(bb.width,I);this.assertNumber(bb.height,F);this.assertObject(Y,t);this.assertNumber(Y.top,E);this.assertNumber(Y.right,p);this.assertNumber(Y.bottom,e);this.assertNumber(Y.left,G);this.assertObject(ba,f);this.assertNumber(ba.top,L);this.assertNumber(ba.right,r);this.assertNumber(ba.bottom,j);this.assertNumber(ba.left,z);}
;var bc=this.getAxisX()||this.__eo;var bf=bc.computeStart(be.width,{start:Y.left,end:Y.right},{start:ba.left,end:ba.right},bb.width,this.__eu());var bd=this.getAxisY()||this.__eo;var top=bd.computeStart(be.height,{start:Y.top,end:Y.bottom},{start:ba.top,end:ba.bottom},bb.height,this.__ev());return {left:bf,top:top};}
,__eu:function(){var bh=this.getEdge();var bg=this.getAlign();if(bh==w){return d;}
else if(bh==C){return D;}
else if(bg==w){return u;}
else if(bg==o){return H;}
else if(bg==C){return x;}
;}
,__ev:function(){var bj=this.getEdge();var bi=this.getAlign();if(bj==A){return d;}
else if(bj==i){return D;}
else if(bi==A){return u;}
else if(bi==s){return H;}
else if(bi==i){return x;}
;}
},destruct:function(){this._disposeObjects(h);}
});}
)();
(function(){var a="align-start",b="align-end",c="qx.util.placement.AbstractAxis",d="edge-start",e="align-center",f="abstract method call!",g="edge-end";qx.Bootstrap.define(c,{extend:Object,statics:{computeStart:function(j,k,l,h,i){throw new Error(f);}
,_moveToEdgeAndAlign:function(n,o,p,m){switch(m){case d:return o.start-p.end-n;case g:return o.end+p.start;case a:return o.start+p.start;case e:return o.start+parseInt((o.end-o.start-n)/2,10)+p.start;case b:return o.end-p.end-n;};}
,_isInRange:function(r,s,q){return r>=0&&r+s<=q;}
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
(function(){var a="qx.util.placement.DirectAxis";qx.Bootstrap.define(a,{statics:{_moveToEdgeAndAlign:qx.util.placement.AbstractAxis._moveToEdgeAndAlign,computeStart:function(d,e,f,b,c){return this._moveToEdgeAndAlign(d,e,f,c);}
}});}
)();
(function(){var a="qx.util.placement.BestFitAxis";qx.Bootstrap.define(a,{statics:{_isInRange:qx.util.placement.AbstractAxis._isInRange,_moveToEdgeAndAlign:qx.util.placement.AbstractAxis._moveToEdgeAndAlign,computeStart:function(g,c,d,b,f){var e=this._moveToEdgeAndAlign(g,c,d,f);if(this._isInRange(e,g,b)){return e;}
;if(e<0){e=Math.min(0,b-g);}
;if(e+g>b){e=Math.max(0,b-g);}
;return e;}
}});}
)();
(function(){var a="Number",b="interval",c="_applyTimeoutInterval",d="qx.event.type.Event",e="qx.event.Idle",f="singleton";qx.Class.define(e,{extend:qx.core.Object,implement:[qx.core.IDisposable],type:f,construct:function(){qx.core.Object.call(this);}
,events:{"interval":d},properties:{timeoutInterval:{check:a,init:100,apply:c}},members:{__ew:null,_applyTimeoutInterval:function(g){if(this.__ew){this.__ew.setInterval(g);}
;}
,_onInterval:function(){this.fireEvent(b);}
,__ex:function(){if(!this.__ew&&this.hasListener(b)){var h=new qx.event.Timer(this.getTimeoutInterval());h.addListener(b,this._onInterval,this);h.start();this.__ew=h;}
;}
,__ey:function(){if(this.__ew&&!this.hasListener(b)){this.__ew.stop();this.__ew.dispose();this.__ew=null;}
;}
,addListener:function(k,i,self,j){var l=qx.core.Object.prototype.addListener.call(this,k,i,self,j);this.__ex();return l;}
,addListenerOnce:function(o,m,self,n){var p=qx.core.Object.prototype.addListenerOnce.call(this,o,m,self,n);this.__ex();return p;}
,removeListener:function(s,q,self,r){var t=qx.core.Object.prototype.removeListener.call(this,s,q,self,r);this.__ey();return t;}
,removeListenerById:function(u){var v=qx.core.Object.prototype.removeListenerById.call(this,u);this.__ey();return v;}
},destruct:function(){if(this.__ew){this.__ew.stop();}
;this.__ew=null;}
});}
)();
(function(){var a="Image could not be loaded: ",b="Boolean",c="px",d="backgroundRepeat",e="http",f=".png",g="background-image",h="engine.version",j="scale",l="changeSource",m="x",n="div",o="class",p="aborted",q="background-size",r="color",s="scaled",t="3",u="qx.ui.basic.Image",v="top",w="0 0",x="fontSize",y="Font source needs either a glyph name or the unicode number in hex",z="verticalAlign",A="qx.debug",B="textAlign",C="loaded",D="backgroundImage",E="center",F="-disabled.$1",G="font",H="qx.event.type.Event",I="image",J="loadingFailed",K="css.alphaimageloaderneeded",L="1.5",M="String",N="browser.documentmode",O="backgroundPosition",P="border-box",Q="",R="changeScale",S="left",T="_applySource",U=",",V="img",W="@",X="data:image/",Y="px, ",bD="middle",bE='.',bF="nonScaled",bz="table-cell",bA=", ",bB="background",bC="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",bJ="mshtml",bK="engine.name",bL=", 0 0",bT="_applyScale",bG="try to load an unmanaged relative image: ",bH=", no-repeat",bI="position",bx="replacement",bO="2",by="no-repeat",bP="background-position",bQ="hidden",bR="alphaScaled",bM="display",bS="__il",bN="absolute";qx.Class.define(u,{extend:qx.ui.core.Widget,construct:function(bU){this.__il={};qx.ui.core.Widget.call(this);if(bU){this.setSource(bU);}
;}
,properties:{source:{check:M,init:null,nullable:true,event:l,apply:T,themeable:true},scale:{check:b,init:false,event:R,themeable:true,apply:bT},appearance:{refine:true,init:I},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:H,loaded:H,aborted:H},statics:{PLACEHOLDER_IMAGE:bC},members:{__im:null,__in:null,__io:null,__il:null,__ip:null,__iq:null,__ir:0,_onChangeTheme:function(){qx.ui.core.Widget.prototype._onChangeTheme.call(this);this._styleSource();}
,getContentElement:function(){return this.__iv();}
,_createContentElement:function(){return this.__iv();}
,_getContentHint:function(){return {width:this.__im||0,height:this.__in||0};}
,_applyDecorator:function(bX,bW){qx.ui.core.Widget.prototype._applyDecorator.call(this,bX,bW);var bY=this.getSource();bY=qx.util.AliasManager.getInstance().resolve(bY);var bV=this.getContentElement();if(this.__iq){bV=bV.getChild(0);}
;this.__iF(bV,bY);}
,_applyTextColor:function(cb){if(this.__it()===G){var ca=this.getContentElement();if(this.__iq){ca=ca.getChild(0);}
;if(cb){ca.setStyle(r,qx.theme.manager.Color.getInstance().resolve(cb));}
else {ca.removeStyle(r);}
;}
;}
,_applyPadding:function(cd,cc,name){qx.ui.core.Widget.prototype._applyPadding.call(this,cd,cc,name);var ce=this.getContentElement();if(this.__iq){ce.getChild(0).setStyles({top:this.getPaddingTop()||0,left:this.getPaddingLeft()||0});}
else {ce.setPadding(this.getPaddingLeft()||0,this.getPaddingTop()||0);}
;}
,renderLayout:function(ch,top,cf,ci){qx.ui.core.Widget.prototype.renderLayout.call(this,ch,top,cf,ci);var cg=this.getContentElement();if(this.__iq){cg.getChild(0).setStyles({width:cf-(this.getPaddingLeft()||0)-(this.getPaddingRight()||0),height:ci-(this.getPaddingTop()||0)-(this.getPaddingBottom()||0),top:this.getPaddingTop()||0,left:this.getPaddingLeft()||0});}
;}
,_applyEnabled:function(ck,cj){qx.ui.core.Widget.prototype._applyEnabled.call(this,ck,cj);if(this.getSource()){this._styleSource();}
;}
,_applySource:function(cm,cl){if(cl){if(qx.io.ImageLoader.isLoading(cl)){qx.io.ImageLoader.abort(cl);}
;}
;this._styleSource();}
,_applyScale:function(cn){this._styleSource();}
,__is:function(co){this.__io=co;}
,__it:function(){if(this.__io==null){var cq=this.getSource();if(cq&&qx.lang.String.startsWith(cq,W)){this.__io=G;}
;var cp=false;if(cq!=null){cp=cq.endsWith(f);}
;if(this.getScale()&&cp&&qx.core.Environment.get(K)){this.__io=bR;}
else if(this.getScale()){this.__io=s;}
else {this.__io=bF;}
;}
;return this.__io;}
,__iu:function(cu){var cr;var cv;var ct=qx.html.Image;if(cu==G){ct=qx.html.Label;cr=true;cv=n;}
else if(cu==bR){cr=true;cv=n;}
else if(cu==bF){cr=false;cv=n;}
else {cr=true;cv=V;}
;var cw=new (ct)(cv);cw.connectWidget(this);cw.setStyles({"overflowX":bQ,"overflowY":bQ,"boxSizing":P});if(cu==G){cw.setRich(true);}
else {cw.setScale(cr);if(qx.core.Environment.get(K)){var cs=this.__iq=new qx.html.Element(n);cw.connectWidget(this);cs.setStyle(bI,bN);cs.add(cw);return cs;}
;}
;return cw;}
,__iv:function(){if(this.$$disposed){return null;}
;var cx=this.__it();if(this.__il[cx]==null){this.__il[cx]=this.__iu(cx);}
;var cy=this.__il[cx];if(!this.__ip){this.__ip=cy;}
;return cy;}
,_styleSource:function(){var cD=qx.util.AliasManager.getInstance();var cC=qx.util.ResourceManager.getInstance();var cF=cD.resolve(this.getSource());var cE=this.getContentElement();if(this.__iq){cE=cE.getChild(0);}
;if(!cF){this.__iE(cE);return;}
;this.__iy(cF);if((qx.core.Environment.get(bK)==bJ)&&(parseInt(qx.core.Environment.get(h),10)<9||qx.core.Environment.get(N)<9)){var cA=this.getScale()?j:by;cE.tagNameHint=qx.bom.element.Decoration.getTagName(cA,cF);}
;var cB=this.__ix();if(cC.isFontUri(cF)){this.__iA(cB,cF);}
else if(cC.has(cF)){var cG=this._findHighResolutionSource(cF);if(cG){var cI=cC.getImageHeight(cF);var cH=cC.getImageWidth(cF);this.setWidth(cI);this.setHeight(cH);var cz=cI+Y+cH+c;this.__ip.setStyle(q,cz);this.setSource(cG);cF=cG;}
;this.__iA(cB,cF);this.__iw();}
else if(qx.io.ImageLoader.isLoaded(cF)){this.__iB(cB,cF);this.__iw();}
else {this.__iC(cB,cF);}
;}
,__iw:function(){this.__ir++ ;qx.bom.AnimationFrame.request(function(cJ){if(cJ===this.__ir){this.fireEvent(C);}
else {this.fireEvent(p);}
;}
.bind(this,this.__ir));}
,__ix:function(){var cK=this.__ip;if(this.__iq){cK=cK.getChild(0);}
;return cK;}
,__iy:qx.core.Environment.select(bK,{"mshtml":function(cO){var cN=qx.core.Environment.get(K);var cL=cO.endsWith(f);var cM=cO.startsWith(W);if(cM){this.__is(G);}
else if(cN&&cL){if(this.getScale()&&this.__it()!=bR){this.__is(bR);}
else if(!this.getScale()&&this.__it()!=bF){this.__is(bF);}
;}
else {if(this.getScale()&&this.__it()!=s){this.__is(s);}
else if(!this.getScale()&&this.__it()!=bF){this.__is(bF);}
;}
;this.__iz(this.__iv());}
,"default":function(cP){var cQ=cP&&qx.lang.String.startsWith(cP,W);if(cQ){this.__is(G);}
else if(this.getScale()&&this.__it()!=s){this.__is(s);}
else if(!this.getScale()&&this.__it()!=bF){this.__is(bF);}
;this.__iz(this.__iv());}
}),__iz:function(cU){var cT=this.__ip;if(cT!=cU){if(cT!=null){var di=c;var cR={};var cX=cT.getAllStyles();if(cX){for(var db in cX){cR[db]=cX[db];}
;}
;var da=this.getBounds();if(da!=null){cR.width=da.width+di;cR.height=da.height+di;}
;var dc=this.getInsets();cR.left=parseInt(cT.getStyle(S)||dc.left)+di;cR.top=parseInt(cT.getStyle(v)||dc.top)+di;cR.zIndex=10;var dd=this.__iq?cU.getChild(0):cU;dd.setStyles(cR,true);dd.setSelectable(this.getSelectable());if(!cT.isVisible()){cU.hide();}
else if(!cU.isVisible()){cU.show();}
;if(!cT.isIncluded()){cU.exclude();}
else if(!cU.isIncluded()){cU.include();}
;var df=cT.getParent();if(df){var cS=df.getChildren().indexOf(cT);df.removeAt(cS);df.addAt(cU,cS);}
;var cW=dd.getNodeName();if(dd.setSource){dd.setSource(null);}
else {dd.setValue(Q);}
;var cV=this.__ix();dd.tagNameHint=cW;dd.setAttribute(o,cV.getAttribute(o));qx.html.Element.flush();var dh=cV.getDomElement();var dg=cU.getDomElement();var de=cT.getListeners()||[];de.forEach(function(dj){cU.addListener(dj.type,dj.handler,dj.self,dj.capture);}
);if(dh&&dg){var cY=dh.$$hash;dh.$$hash=dg.$$hash;dg.$$hash=cY;}
;this.__ip=cU;}
;}
;}
,__iA:function(dm,dq){var dl=qx.util.ResourceManager.getInstance();var dk=dl.isFontUri(dq);if(!this.getEnabled()){var dp=dq.replace(/\.([a-z]+)$/,F);if(!dk&&dl.has(dp)){dq=dp;this.addState(bx);}
else {this.removeState(bx);}
;}
;if(!dk&&dm.getSource()===dq){return;}
;if(dk){var dt;if(this.getScale()){var ds=this.getWidth()||this.getHeight()||40;var dn=this.getHeight()||this.getWidth()||40;dt=ds>dn?dn:ds;}
else {var dr=qx.theme.manager.Font.getInstance().resolve(dq.match(/@([^/]+)/)[1]);dt=dr.getSize();}
;if(!dt){dt=0;}
;this.__iH(dt,dt);this.__iF(dm,dq);}
else {this.__iF(dm,dq);this.__iH(dl.getImageWidth(dq),dl.getImageHeight(dq));}
;}
,_applyDimension:function(){qx.ui.core.Widget.prototype._applyDimension.call(this);var dy=this.getSource()&&qx.lang.String.startsWith(this.getSource(),W);if(dy){var dv=this.getContentElement();if(dv){if(this.getScale()){var dx=this.getWidth()||this.getHeight()||40;var dw=this.getHeight()||this.getWidth()||40;dv.setStyle(x,(dx>dw?dw:dx)+c);}
else {var du=qx.theme.manager.Font.getInstance().resolve(this.getSource().match(/@([^/]+)/)[1]);dv.setStyle(x,du.getSize()+c);}
;}
;}
;}
,__iB:function(dz,dD){var dB=qx.io.ImageLoader;this.__iF(dz,dD);var dC=dB.getWidth(dD);var dA=dB.getHeight(dD);this.__iH(dC,dA);}
,__iC:function(dF,dH){var dG=qx.io.ImageLoader;if(qx.core.Environment.get(A)){var dE=dH.toLowerCase();if(!dE.startsWith(e)&&!dE.startsWith(X)){var self=this.self(arguments);if(!self.__iD){self.__iD={};}
;if(!self.__iD[dH]){this.debug(bG+dH);self.__iD[dH]=true;}
;}
;}
;if(!dG.isFailed(dH)){dG.load(dH,this.__iG,this);}
else {this.__iE(dF);}
;}
,__iE:function(dI){if(dI!=null){if(dI instanceof qx.html.Image){dI.resetSource();}
else {dI.resetValue();}
;}
;}
,__iF:function(dU,dR){var dJ=dR&&qx.lang.String.startsWith(dR,W);if(dJ){var dN=qx.util.ResourceManager.getInstance();var dQ=qx.theme.manager.Font.getInstance().resolve(dR.match(/@([^/]+)/)[1]);var dO=qx.lang.Object.clone(dQ.getStyles());delete dO.color;dU.setStyles(dO);dU.setStyle(G);dU.setStyle(bM,bz);dU.setStyle(z,bD);dU.setStyle(B,E);if(this.getScale()){dU.setStyle(x,(this.__im>this.__in?this.__in:this.__im)+c);}
else {dU.setStyle(x,dQ.getSize()+c);}
;var dL=dN.getData(dR);if(dL){dU.setValue(String.fromCharCode(dL[2]));}
else {var dV=parseInt(qx.theme.manager.Font.getInstance().resolve(dR.match(/@([^/]+)\/(.*)$/)[2]),16);if(qx.core.Environment.get(A)){this.assertNumber(dV,y);}
;dU.setValue(String.fromCharCode(dV));}
;return;}
else if(dU.getNodeName()==n){var dX=qx.theme.manager.Decoration.getInstance().resolve(this.getDecorator());if(dX){var dS=(dX.getStartColor()&&dX.getEndColor());var dP=dX.getBackgroundImage();if(dS||dP){var dK=this.getScale()?j:by;var dM=qx.bom.element.Decoration.getAttributes(dR,dK);var dW=dX.getStyles(true);var dT={"backgroundImage":dM.style.backgroundImage,"backgroundPosition":(dM.style.backgroundPosition||w),"backgroundRepeat":(dM.style.backgroundRepeat||by)};if(dP){dT[O]+=U+dW[bP]||w;dT[d]+=bA+dX.getBackgroundRepeat();}
;if(dS){dT[O]+=bL;dT[d]+=bH;}
;dT[D]+=U+(dW[g]||dW[bB]);dU.setStyles(dT);return;}
;}
else {dU.setSource(null);}
;}
;dU.setSource(dR);}
,_findHighResolutionSource:function(dY){var ec=[t,bO,L];var eb=parseFloat(qx.bom.client.Device.getDevicePixelRatio().toFixed(2));if(eb<=1){return false;}
;var i=ec.length;while(i>0&&eb>ec[ --i]){}
;var ea;var k;for(k=i;k>=0;k-- ){ea=this._getHighResolutionSource(dY,ec[k]);if(ea){return ea;}
;}
;for(k=i+1;k<ec.length;k++ ){ea=this._getHighResolutionSource(dY,ec[k]);if(ea){return ea;}
;}
;return null;}
,_getHighResolutionSource:function(ed,ee){var eg=ed.lastIndexOf(bE);if(eg>-1){var ef=W+ee+m;var eh=ed.slice(0,eg)+ef+ed.slice(eg);if(qx.util.ResourceManager.getInstance().has(eh)){return eh;}
;}
;return null;}
,__iG:function(ei,ej){if(this.$$disposed===true){return;}
;if(ei!==qx.util.AliasManager.getInstance().resolve(this.getSource())){this.fireEvent(p);return;}
;if(ej.failed){this.warn(a+ei);this.fireEvent(J);}
else if(ej.aborted){this.fireEvent(p);return;}
else {this.fireEvent(C);}
;this.__iB(this.__ix(),ei);}
,__iH:function(ek,em){if(ek!==this.__im||em!==this.__in){this.__im=ek;this.__in=em;qx.ui.core.queue.Layout.add(this);}
;}
},destruct:function(){for(var en in this.__il){if(this.__il.hasOwnProperty(en)){this.__il[en].disconnectWidget(this);}
;}
;delete this.__ip;if(this.__iq){delete this.__iq;}
;this._disposeMap(bS);}
});}
)();
(function(){var a="mshtml",b='img',c="",d="qx.globalErrorHandling",e="load",f="qx.io.ImageLoader";qx.Bootstrap.define(f,{statics:{__dh:{},__jB:{width:null,height:null},__jC:/\.(png|gif|jpg|jpeg|bmp)\b/i,__jD:/^data:image\/(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(g){var h=this.__dh[g];return !!(h&&h.loaded);}
,isFailed:function(j){var k=this.__dh[j];return !!(k&&k.failed);}
,isLoading:function(m){var n=this.__dh[m];return !!(n&&n.loading);}
,getFormat:function(r){var q=this.__dh[r];if(!q||!q.format){var o=this.__jD.exec(r);if(o!=null){var p=(q&&qx.lang.Type.isNumber(q.width)?q.width:this.__jB.width);var s=(q&&qx.lang.Type.isNumber(q.height)?q.height:this.__jB.height);q={loaded:true,format:o[1],width:p,height:s};}
;}
;return q?q.format:null;}
,getSize:function(t){var u=this.__dh[t];return u?{width:u.width,height:u.height}:this.__jB;}
,getWidth:function(v){var w=this.__dh[v];return w?w.width:null;}
,getHeight:function(x){var y=this.__dh[x];return y?y.height:null;}
,load:function(B,A,C){var D=this.__dh[B];if(!D){D=this.__dh[B]={};}
;if(A&&!C){C=window;}
;if(D.loaded||D.loading||D.failed){if(A){if(D.loading){D.callbacks.push(A,C);}
else {A.call(C,B,D);}
;}
;}
else {D.loading=true;D.callbacks=[];if(A){D.callbacks.push(A,C);}
;var z=document.createElement(b);var E=qx.lang.Function.listener(this.__jE,this,z,B);z.onload=E;z.onerror=E;z.src=B;D.element=z;}
;}
,abort:function(F){var I=this.__dh[F];if(I&&!I.loaded){I.aborted=true;var H=I.callbacks;var G=I.element;G.onload=G.onerror=null;G.src=c;delete I.callbacks;delete I.element;delete I.loading;for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],F,I);}
;}
;this.__dh[F]=null;}
,__jE:function(){var J=qx.core.Environment.select(d,{"true":qx.event.GlobalError.observeMethod(this.__jF),"false":this.__jF});J.apply(this,arguments);}
,__jF:function(event,L,K){var P=this.__dh[K];if(qx.bom.client.Engine.getName()==a&&parseFloat(qx.bom.client.Engine.getVersion())===11){document.body.appendChild(L);}
;var M=function(Q){return (Q&&Q.height!==0);}
;if(event.type===e&&M(L)){P.loaded=true;P.width=L.width;P.height=L.height;var N=this.__jC.exec(K);if(N!=null){P.format=N[1];}
;}
else {P.failed=true;}
;if(qx.bom.client.Engine.getName()==a&&parseFloat(qx.bom.client.Engine.getVersion())===11){document.body.removeChild(L);}
;L.onload=L.onerror=null;var O=P.callbacks;delete P.loading;delete P.callbacks;delete P.element;for(var i=0,l=O.length;i<l;i+=2){O[i].call(O[i+1],K,P);}
;}
,dispose:function(){this.__dh={};}
}});}
)();
(function(){var a="value",b="qx.html.Label",c="The label mode cannot be modified after initial creation",d='hidden';qx.Class.define(b,{extend:qx.html.Element,members:{__jG:null,_applyProperty:function(name,e){qx.html.Element.prototype._applyProperty.call(this,name,e);if(name==a){var f=this.getDomElement();qx.bom.Label.setValue(f,e);}
;}
,_createDomElement:function(){var h=this.__jG;var g=qx.bom.Label.create(this._content,h);g.style.overflow=d;return g;}
,_copyData:function(i){return qx.html.Element.prototype._copyData.call(this,true);}
,setRich:function(j){var k=this.getDomElement();if(k){throw new Error(c);}
;j=!!j;if(this.__jG==j){return this;}
;this.__jG=j;return this;}
,setValue:function(l){this._setProperty(a,l);return this;}
,getValue:function(){return this._getProperty(a);}
,resetValue:function(){return this._removeProperty(a);}
}});}
)();
(function(){var a="text",b="function",c="px",d="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",e="crop",f="nowrap",g="end",h="div",i="100%",j="auto",k="0",l="css.textoverflow",m="qx.debug",n="html.xul",o="value",p="visible",q="qx.bom.Label",r="",s="ellipsis",t="normal",u="inherit",v="block",w="label",x="-1000px",y="hidden",z="absolute";qx.Bootstrap.define(q,{statics:{__jH:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jI:function(){var A=this.__jK(false);document.body.insertBefore(A,document.body.firstChild);return this._textElement=A;}
,__jJ:function(){var B=this.__jK(true);document.body.insertBefore(B,document.body.firstChild);return this._htmlElement=B;}
,__jK:function(E){var C=qx.dom.Element.create(h);var D=C.style;D.width=D.height=j;D.left=D.top=x;D.visibility=y;D.position=z;D.overflow=p;D.display=v;if(E){D.whiteSpace=t;}
else {D.whiteSpace=f;if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){var F=document.createElementNS(d,w);var D=F.style;D.padding=k;D.margin=k;D.width=j;for(var G in this.__jH){D[G]=u;}
;C.appendChild(F);}
;}
;return C;}
,__jL:function(I){var H={};H.overflow=y;if(I){H.whiteSpace=t;}
else if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){H.display=v;}
else {H.whiteSpace=f;H[qx.core.Environment.get(l)]=s;}
;return H;}
,create:function(content,M,L){if(!L){L=window;}
;var J=L.document.createElement(h);if(M){J.useHtml=true;}
;if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){var N=L.document.createElementNS(d,w);var K=N.style;K.cursor=u;K.color=u;K.overflow=y;K.maxWidth=i;K.padding=k;K.margin=k;K.width=j;for(var O in this.__jH){N.style[O]=u;}
;N.setAttribute(e,g);J.appendChild(N);}
else {qx.bom.element.Style.setStyles(J,this.__jL(M));}
;if(content){this.setValue(J,content);}
;return J;}
,__jM:null,setSanitizer:function(P){if(qx.core.Environment.get(m)){if(P){qx.core.Assert.assertFunction(P);}
;}
;qx.bom.Label.__jM=P;}
,setValue:function(R,Q){Q=Q||r;if(R.useHtml){if(qx.bom.Label.__jM&&typeof (qx.bom.Label.__jM)===b){Q=qx.bom.Label.__jM(Q);}
;R.innerHTML=Q;}
else if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){R.firstChild.setAttribute(o,Q);}
else {qx.bom.element.Attribute.set(R,a,Q);}
;}
,getValue:function(S){if(S.useHtml){return S.innerHTML;}
else if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){return S.firstChild.getAttribute(o)||r;}
else {return qx.bom.element.Attribute.get(S,a);}
;}
,getHtmlSize:function(content,T,U){var V=this._htmlElement||this.__jJ();V.style.width=U!=undefined?U+c:j;V.innerHTML=content;return this.__jN(V,T);}
,getTextSize:function(X,W){var Y=this._textElement||this.__jI();if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){Y.firstChild.setAttribute(o,X);}
else {qx.bom.element.Attribute.set(Y,a,X);}
;return this.__jN(Y,W);}
,__jN:function(be,ba){var bb=this.__jH;if(!ba){ba={};}
;for(var bd in bb){be.style[bd]=ba[bd]||r;}
;var bc=qx.bom.element.Dimension.getSize(be);bc.width++ ;return bc;}
}});}
)();
(function(){var a="source",b="engine.name",c="",d="mshtml",e="px",f="px ",g="no-repeat",h="backgroundImage",i="scale",j="webkit",k="div",l="qx.html.Image",m="qx/static/blank.gif",n="backgroundPosition";qx.Class.define(l,{extend:qx.html.Element,members:{__jO:null,__jP:null,tagNameHint:null,setPadding:function(o,p){this.__jP=o;this.__jO=p;if(this.getNodeName()==k){this.setStyle(n,o+f+p+e);}
;}
,_applyProperty:function(name,t){qx.html.Element.prototype._applyProperty.call(this,name,t);if(name===a){var s=this.getDomElement();var q=this.getAllStyles();if(this.getNodeName()==k&&this.getStyle(h)){q.backgroundRepeat=null;}
;var u=this._getProperty(a);var r=this._getProperty(i);var v=r?i:g;if(u!=null){u=u||null;q.paddingTop=this.__jO;q.paddingLeft=this.__jP;qx.bom.element.Decoration.update(s,u,v,q);}
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
(function(){var a="qx/icon",b="repeat",c="px",d=".png",f='</div>',g="px ",h="background-image",i="scale",j="no-repeat",k="div",l='display',m="Potential clipped image candidate: ",n="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",o='<div style="',p='verticalAlign',q="qx.debug",r='fontSize',s='width',t="scale-x",u="css.alphaimageloaderneeded",v="repeat-y",w='<img src="',x="Font source needs either a glyph name or the unicode number in hex",y=": ",z="Image modification not possible because elements could not be replaced at runtime anymore!",A="', sizingMethod='",B="'!",C='"></div>',D="",E="crop",F='"/>',G="png",H="ImageLoader: Not recognized format of external image '",I='">',J="')",K="qx.bom.element.Decoration",L="mshtml",M="engine.name",N='" style="',O='position',P="none",Q="b64",R="img",S="webkit",T="scale-y",U=" ",V="repeat-x",W=";",X="background-repeat",Y="DXImageTransform.Microsoft.AlphaImageLoader",bd="qx/static/blank.gif",be='height',bf="absolute";qx.Class.define(K,{statics:{DEBUG:false,__jQ:{},__jR:qx.core.Environment.select(M,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__jS:{"scale-x":R,"scale-y":R,"scale":R,"repeat":k,"no-repeat":k,"repeat-x":k,"repeat-y":k},update:function(bk,bl,bi,bh){var bm=this.getTagName(bi,bl);if(bm!=bk.tagName.toLowerCase()){throw new Error(z);}
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
,getTagName:function(bA,bz){if(bz&&qx.core.Environment.get(u)&&this.__jR[bA]&&bz.endsWith(d)){return k;}
;return this.__jS[bA];}
,getAttributes:function(bE,bC,bB){if(!bB){bB={};}
;if(!bB.position){bB.position=bf;}
;if((qx.core.Environment.get(M)==L)){bB.fontSize=0;bB.lineHeight=0;}
else if((qx.core.Environment.get(M)==S)){bB.WebkitUserDrag=P;}
;var bD=qx.util.ResourceManager.getInstance().getImageFormat(bE)||qx.io.ImageLoader.getFormat(bE);if(qx.core.Environment.get(q)){if(bE!=null&&bD==null){qx.log.Logger.warn(H+bE+B);}
;}
;var bF;if(qx.core.Environment.get(u)&&this.__jR[bC]&&bD===G){var bG=this.__jU(bE);this.__jT(bB,bG.width,bG.height);bF=this.processAlphaFix(bB,bC,bE);}
else {delete bB.clip;if(bC===i){bF=this.__jV(bB,bC,bE);}
else if(bC===t||bC===T){bF=this.__jW(bB,bC,bE);}
else {bF=this.__ka(bB,bC,bE);}
;}
;return bF;}
,__jT:function(bI,bH,bJ){if(bI.width==null&&bH!=null){bI.width=bH+c;}
;if(bI.height==null&&bJ!=null){bI.height=bJ+c;}
;}
,__jU:function(bK){var bL=qx.util.ResourceManager.getInstance().getImageWidth(bK)||qx.io.ImageLoader.getWidth(bK);var bM=qx.util.ResourceManager.getInstance().getImageHeight(bK)||qx.io.ImageLoader.getHeight(bK);return {width:bL,height:bM};}
,processAlphaFix:function(bP,bQ,bO){if(bQ==b||bQ==V||bQ==v){return bP;}
;var bR=bQ==j?E:i;var bN=n+qx.util.ResourceManager.getInstance().toUri(bO)+A+bR+J;bP.filter=bN;bP.backgroundImage=bP.backgroundRepeat=D;delete bP[h];delete bP[X];return {style:bP};}
,__jV:function(bT,bU,bS){var bV=qx.util.ResourceManager.getInstance().toUri(bS);var bW=this.__jU(bS);this.__jT(bT,bW.width,bW.height);return {src:bV,style:bT};}
,__jW:function(bX,bY,cb){var ca=qx.util.ResourceManager.getInstance();var ce=ca.getCombinedFormat(cb);var cg=this.__jU(cb);var cc;if(ce){var cf=ca.getData(cb);var cd=cf[4];if(ce==Q){cc=ca.toDataUri(cb);}
else {cc=ca.toUri(cd);}
;if(bY===t){bX=this.__jX(bX,cf,cg.height);}
else {bX=this.__jY(bX,cf,cg.width);}
;return {src:cc,style:bX};}
else {if(qx.core.Environment.get(q)){this.__kc(cb);}
;if(bY==t){bX.height=cg.height==null?null:cg.height+c;}
else if(bY==T){bX.width=cg.width==null?null:cg.width+c;}
;cc=ca.toUri(cb);return {src:cc,style:bX};}
;}
,__jX:function(ch,ci,ck){var cj=qx.util.ResourceManager.getInstance().getImageHeight(ci[4]);ch.clip={top:-ci[6],height:ck};ch.height=cj+c;if(ch.top!=null){ch.top=(parseInt(ch.top,10)+ci[6])+c;}
else if(ch.bottom!=null){ch.bottom=(parseInt(ch.bottom,10)+ck-cj-ci[6])+c;}
;return ch;}
,__jY:function(cm,cn,cl){var co=qx.util.ResourceManager.getInstance().getImageWidth(cn[4]);cm.clip={left:-cn[5],width:cl};cm.width=co+c;if(cm.left!=null){cm.left=(parseInt(cm.left,10)+cn[5])+c;}
else if(cm.right!=null){cm.right=(parseInt(cm.right,10)+cl-co-cn[5])+c;}
;return cm;}
,__ka:function(cp,cq,ct){var cs=qx.util.ResourceManager.getInstance();var cr=cs.getCombinedFormat(ct);var cB=this.__jU(ct);if(cr&&cq!==b){var cA=cs.getData(ct);var cy=cA[4];if(cr==Q){var cv=cs.toDataUri(ct);var cu=0;var cw=0;}
else {var cv=cs.toUri(cy);var cu=cA[5];var cw=cA[6];if(cp.paddingTop||cp.paddingLeft||cp.paddingRight||cp.paddingBottom){var top=cp.paddingTop||0;var cC=cp.paddingLeft||0;cu+=cp.paddingLeft||0;cw+=cp.paddingTop||0;cp.clip={left:cC,top:top,width:cB.width,height:cB.height};}
;}
;var cx=qx.bom.element.Background.getStyles(cv,cq,cu,cw);for(var cz in cx){cp[cz]=cx[cz];}
;if(cB.width!=null&&cp.width==null&&(cq==v||cq===j)){cp.width=cB.width+c;}
;if(cB.height!=null&&cp.height==null&&(cq==V||cq===j)){cp.height=cB.height+c;}
;return {style:cp};}
else {var top=cp.paddingTop||0;var cC=cp.paddingLeft||0;cp.backgroundPosition=cC+g+top+c;if(qx.core.Environment.get(q)){if(cq!==b){this.__kc(ct);}
;}
;this.__jT(cp,cB.width,cB.height);this.__kb(cp,ct,cq);return {style:cp};}
;}
,__kb:function(cD,cG,cE){var top=null;var cJ=null;if(cD.backgroundPosition){var cF=cD.backgroundPosition.split(U);cJ=parseInt(cF[0],10);if(isNaN(cJ)){cJ=cF[0];}
;top=parseInt(cF[1],10);if(isNaN(top)){top=cF[1];}
;}
;var cH=qx.bom.element.Background.getStyles(cG,cE,cJ,top);for(var cI in cH){cD[cI]=cH[cI];}
;if(cD.filter){cD.filter=D;}
;}
,__kc:function(cK){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(cK)&&cK.indexOf(a)==-1){if(!this.__jQ[cK]){qx.log.Logger.debug(m+cK);this.__jQ[cK]=true;}
;}
;}
}});}
)();
(function(){var a="dragdrop-cursor",b="_applyAction",c="alias",d="qx.ui.core.DragDropCursor",e="move",f="singleton",g="copy";qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:f,construct:function(){qx.ui.basic.Image.call(this);this.setZIndex(1e8);this.setDomMove(true);var h=this.getApplicationRoot();h.add(this,{left:-1000,top:-1000});}
,properties:{appearance:{refine:true,init:a},action:{check:[c,g,e],apply:b,nullable:true}},members:{_applyAction:function(j,i){if(i){this.removeState(i);}
;if(j){this.addState(j);}
;}
}});}
)();
(function(){var a='indexOf',b='slice',c='concat',d='toLocaleLowerCase',e="qx.type.BaseString",f="",g='trim',h='match',j="qx.debug",k='search',m='replace',n='toLowerCase',o='charCodeAt',p='split',q='substring',r='lastIndexOf',s='substr',t='toLocaleUpperCase',u='toUpperCase',v='charAt';qx.Class.define(e,{extend:Object,construct:function(w){var w=w||f;this.__kl=w;this.length=w.length;}
,members:{$$isString:true,length:0,__kl:null,toString:function(){return this.__kl;}
,charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);}
,toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(y,x){return qx.core.Object.prototype.base.apply(this,arguments);}
},defer:function(z,A){if(qx.core.Environment.get(j)){qx.Class.include(z,qx.core.MAssert);}
;var B=[v,o,c,a,r,h,m,k,b,p,s,q,n,u,d,t,g];A.valueOf=A.toString;if(new z(f).valueOf()==null){delete A.valueOf;}
;for(var i=0,l=B.length;i<l;i++ ){A[B[i]]=String.prototype[B[i]];}
;}
});}
)();
(function(){var a="qx.locale.LocalizedString";qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,e,c,d){qx.type.BaseString.call(this,b);this.__km=e;this.__kn=!!d;this.__ko=c;}
,members:{__kn:null,__km:null,__ko:null,translate:function(){if(this.__kn){return qx.locale.Manager.getInstance().localize(this.__km,this.__ko);}
;return qx.locale.Manager.getInstance().translate(this.__km,this.__ko);}
,getMessageId:function(){return this.__km;}
}});}
)();
(function(){var a="qx.bom.client.Locale",b="-",c="locale",d="",e="android",f="locale.variant",g="C",h="locale.default";qx.Bootstrap.define(a,{statics:{getLocale:function(){var i=qx.bom.client.Locale.__kp();var j=i.indexOf(b);if(j!=-1){i=i.substr(0,j);}
;return i;}
,getVariant:function(){var k=qx.bom.client.Locale.__kp();var m=d;var l=k.indexOf(b);if(l!=-1){m=k.substr(l+1);}
;return m;}
,__kp:function(){var n=(navigator.userLanguage||navigator.language||d);if(qx.bom.client.OperatingSystem.getName()==e){var o=/^(\d+)\.(\d+)(\..+)?/i.exec(qx.bom.client.OperatingSystem.getVersion());if(qx.lang.Type.isArray(o)&&o.length>=3){if(parseInt(o[1])<4||(parseInt(o[1])===4&&parseInt(o[2])<4)){var p=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);if(p){n=p[0];}
;}
;}
;}
;return n.toLowerCase();}
},defer:function(q){qx.core.Environment.add(c,q.getLocale);qx.core.Environment.add(f,q.getVariant);qx.core.Environment.add(h,g);}
});}
)();
(function(){var a="locale",b="_applyLocale",c="",d="changeLocale",e="_",f="Locale: ",g="locale.default",h="locale.variant",j="qx.dynlocale",k=" not available.",l="qx.locale.Manager",m="String",n="singleton",o="qx.debug";qx.Class.define(l,{type:n,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__kq=qx.$$translations||{};this.__kr=qx.$$locales||{};this.initLocale();this.__ks=this.getLocale();}
,statics:{tr:function(q,r){var p=qx.lang.Array.fromArguments(arguments);p.splice(0,1);return qx.locale.Manager.getInstance().translate(q,p);}
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
)()}},members:{__kt:qx.core.Environment.get(g),__ku:null,__kv:null,__kq:null,__kr:null,__ks:null,getLanguage:function(){return this.__kv;}
,getTerritory:function(){return this.getLocale().split(e)[1]||c;}
,getAvailableLocales:function(L){var M=[];for(var K in this.__kr){if(K!=this.__kt){if(this.__kr[K]===null&&!L){continue;}
;M.push(K);}
;}
;return M;}
,__kw:function(N){var P;if(N==null){return null;}
;var O=N.indexOf(e);if(O==-1){P=N;}
else {P=N.substring(0,O);}
;return P;}
,_applyLocale:function(R,Q){if(qx.core.Environment.get(o)){if(!(R in this.__kr||R==this.__ks)){qx.log.Logger.warn(f+R+k);}
;}
;this.__ku=R;this.__kv=this.__kw(R);}
,addTranslation:function(S,V){var T=this.__kq;if(T[S]){for(var U in V){T[S][U]=V[U];}
;}
else {T[S]=V;}
;}
,addLocale:function(ba,X){var W=this.__kr;if(W[ba]){for(var Y in X){W[ba][Y]=X[Y];}
;}
else {W[ba]=X;}
;}
,translate:function(be,bd,bb){var bc=this.__kq;return this.__kx(bc,be,bd,bb);}
,localize:function(bi,bh,bf){var bg=this.__kr;return this.__kx(bg,bi,bh,bf);}
,__kx:function(bn,bo,bl,bm){if(qx.core.Environment.get(o)){this.assertObject(bn);this.assertString(bo);this.assertArray(bl);}
;var bj;if(!bn){return bo;}
;if(bm){var bk=this.__kw(bm);}
else {bm=this.__ku;bk=this.__kv;}
;if(!bj&&bn[bm]){bj=bn[bm][bo];}
;if(!bj&&bn[bk]){bj=bn[bk][bo];}
;if(!bj&&bn[this.__kt]){bj=bn[this.__kt][bo];}
;if(!bj){bj=bo;}
;if(bl.length>0){var bp=[];for(var i=0;i<bl.length;i++ ){var bq=bl[i];if(bq&&bq.translate){bp[i]=bq.translate();}
else {bp[i]=bq;}
;}
;bj=qx.lang.String.format(bj,bp);}
;if(qx.core.Environment.get(j)){bj=new qx.locale.LocalizedString(bj,bo,bl,bn===this.__kr);}
;return bj;}
}});}
)();
(function(){var a="blur",b="qxDraggable",c="touch",d="qx.ui.core.Widget",f="longtap",g="Escape",h="drag",i="keydown",j="Unsupported data type: ",k="roll",l="drop",m="qxDroppable",n="qx.event.handler.DragDrop",o="mouse",p="This method must not be used outside the drop event listener!",q="Control",r="Shift",s="!",t="alias",u="droprequest",v="copy",w="pointerup",x="dragstart",y="move",z="pointerdown",A="dragchange",B="on",C="Alt",D="keyup",E="keypress",F="dragleave",G="none",H="dragend",I="dragover",J="left",K="Please use a droprequest listener to the drag source to fill the manager with data!",L="pointermove",M="display";qx.Class.define(n,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(N){qx.core.Object.call(this);this.__dr=N;this.__dU=N.getWindow().document.documentElement;this.__dr.addListener(this.__dU,f,this._onLongtap,this);this.__dr.addListener(this.__dU,z,this._onPointerdown,this,true);qx.event.Registration.addListener(window,a,this._onWindowBlur,this);this.__lC();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true,ALLOWED_BUTTONS:[J],MIN_DRAG_DISTANCE:5},properties:{cursor:{check:d,nullable:true,init:null}},members:{__dr:null,__dU:null,__lq:null,__lr:null,__ls:null,__lt:null,__lu:null,__d:null,__lv:null,__lw:null,__lx:false,__ly:false,__lz:false,__lA:null,__lB:null,canHandleEvent:function(P,O){}
,registerEvent:function(S,R,Q){}
,unregisterEvent:function(V,U,T){}
,addType:function(W){this.__ls[W]=true;}
,addAction:function(X){this.__lt[X]=true;}
,supportsType:function(Y){return !!this.__ls[Y];}
,supportsAction:function(ba){return !!this.__lt[ba];}
,setDropAllowed:function(bb){this.__ly=bb;this.__lD();}
,getData:function(bc){if(!this.__ly||!this.__lq){throw new Error(p);}
;if(!this.__ls[bc]){throw new Error(j+bc+s);}
;if(!this.__d[bc]){this.__lv=bc;this.__cK(u,this.__lr,this.__lq,false);}
;if(!this.__d[bc]){throw new Error(K);}
;return this.__d[bc]||null;}
,getCurrentAction:function(){this.__lD();return this.__lw;}
,getDragTarget:function(){return this.__lA;}
,addData:function(bd,be){this.__d[bd]=be;}
,getCurrentType:function(){return this.__lv;}
,isSessionActive:function(){return this.__lx;}
,__lC:function(){this.__ls={};this.__lt={};this.__lu={};this.__d={};}
,__lD:function(){if(this.__lr==null){return;}
;var bi=this.__lt;var bf=this.__lu;var bg=null;if(this.__ly){if(bf.Shift&&bf.Control&&bi.alias){bg=t;}
else if(bf.Shift&&bf.Alt&&bi.copy){bg=v;}
else if(bf.Shift&&bi.move){bg=y;}
else if(bf.Alt&&bi.alias){bg=t;}
else if(bf.Control&&bi.copy){bg=v;}
else if(bi.move){bg=y;}
else if(bi.copy){bg=v;}
else if(bi.alias){bg=t;}
;}
;var bh=this.__lw;if(bg!=bh){if(this.__lq){this.__lw=bg;this.__lz=this.__cK(A,this.__lq,this.__lr,true);if(!this.__lz){bg=null;}
;}
;if(bg!=bh){this.__lw=bg;this.__cK(A,this.__lr,this.__lq,false);}
;}
;}
,__cK:function(bo,bk,bl,bm,bp){var bn=qx.event.Registration;var bj=bn.createEvent(bo,qx.event.type.Drag,[bm,bp]);if(bk!==bl){bj.setRelatedTarget(bl);}
;return bn.dispatchEvent(bk,bj);}
,__lE:function(bq){while(bq&&bq.nodeType==1){if(bq.getAttribute(b)==B){return bq;}
;bq=bq.parentNode;}
;return null;}
,__lF:function(br){while(br&&br.nodeType==1){if(br.getAttribute(m)==B){return br;}
;br=br.parentNode;}
;return null;}
,clearSession:function(){this.__dr.removeListener(this.__dU,L,this._onPointermove,this);this.__dr.removeListener(this.__dU,w,this._onPointerup,this,true);this.__dr.removeListener(this.__dU,i,this._onKeyDown,this,true);this.__dr.removeListener(this.__dU,D,this._onKeyUp,this,true);this.__dr.removeListener(this.__dU,E,this._onKeyPress,this,true);this.__dr.removeListener(this.__dU,k,this._onRoll,this,true);if(this.__lr){this.__cK(H,this.__lr,this.__lq,false);}
;this.__ly=false;this.__lq=null;if(this.__lA){this.__lA.removeState(h);this.__lA=null;}
;this.__lr=null;this.__lx=false;this.__lB=null;this.__lC();}
,_onLongtap:function(e){if(e.getPointerType()!=c){return;}
;this.__dr.addListener(this.__dU,k,this._onRoll,this,true);this._start(e);}
,_start:function(e){var bt=qx.event.handler.DragDrop.ALLOWED_BUTTONS.indexOf(e.getButton())!==-1;if(!e.isPrimary()||!bt){return false;}
;var bu=this.__lB?this.__lB.target:e.getTarget();var bs=this.__lE(bu);if(bs){this.__lr=bs;var bv=qx.ui.core.Widget.getWidgetByElement(this.__lB.original);while(bv&&bv.isAnonymous()){bv=bv.getLayoutParent();}
;if(bv){this.__lA=bv;bv.addState(h);}
;if(!this.__cK(x,this.__lr,this.__lq,true,e)){return false;}
;this.__dr.addListener(this.__dU,i,this._onKeyDown,this,true);this.__dr.addListener(this.__dU,D,this._onKeyUp,this,true);this.__dr.addListener(this.__dU,E,this._onKeyPress,this,true);this.__lx=true;return true;}
;}
,_onPointerdown:function(e){if(e.isPrimary()){this.__lB={target:e.getTarget(),original:e.getOriginalTarget(),left:e.getDocumentLeft(),top:e.getDocumentTop()};this.__dr.addListener(this.__dU,L,this._onPointermove,this);this.__dr.addListener(this.__dU,w,this._onPointerup,this,true);}
;}
,_onPointermove:function(e){if(!e.isPrimary()){return;}
;if(!this.__lx&&e.getPointerType()==o){var bC=this._getDelta(e);var bw=qx.event.handler.DragDrop.MIN_DRAG_DISTANCE;if(bC&&(Math.abs(bC.x)>bw||Math.abs(bC.y)>bw)){if(!this._start(e)){this.clearSession();return;}
;}
;}
;if(!this.__lx){return;}
;if(!this.__cK(h,this.__lr,this.__lq,true,e)){this.clearSession();}
;var bx=e.getTarget();if(this.__lB.target===bx){bx=e.getNativeEvent().view.document.elementFromPoint(e.getDocumentLeft(),e.getDocumentTop());}
;var bA=this.getCursor();if(!bA){bA=qx.ui.core.DragDropCursor.getInstance();}
;var bz=bA.getContentElement().getDomElement();if(bz&&(bx===bz||bz.contains(bx))){var bD=qx.bom.element.Style.get(bz,M);qx.bom.element.Style.set(bz,M,G);bx=e.getNativeEvent().view.document.elementFromPoint(e.getDocumentLeft(),e.getDocumentTop());qx.bom.element.Style.set(bz,M,bD);}
;if(bx!==bz){var by=this.__lF(bx);if(by&&by!=this.__lq){if(this.__lq){this.__cK(F,this.__lq,this.__lr,false,e);}
;this.__ly=true;this.__lq=by;this.__ly=this.__cK(I,by,this.__lr,true,e);}
else if(!by&&this.__lq){this.__cK(F,this.__lq,this.__lr,false,e);this.__lq=null;this.__ly=false;qx.event.Timer.once(this.__lD,this,0);}
;}
;var bB=this.__lu;bB.Control=e.isCtrlPressed();bB.Shift=e.isShiftPressed();bB.Alt=e.isAltPressed();this.__lD();}
,_getDelta:function(e){if(!this.__lB){return null;}
;var bE=e.getDocumentLeft()-this.__lB.left;var bF=e.getDocumentTop()-this.__lB.top;return {"x":bE,"y":bF};}
,_onPointerup:function(e){if(!e.isPrimary()){return;}
;if(this.__ly&&this.__lz){this.__cK(l,this.__lq,this.__lr,false,e);}
;if(e.getTarget()==this.__lr){e.stopPropagation();}
;this.clearSession();}
,_onRoll:function(e){e.stop();}
,_onWindowBlur:function(e){this.clearSession();}
,_onKeyDown:function(e){var bG=e.getKeyIdentifier();switch(bG){case C:case q:case r:if(!this.__lu[bG]){this.__lu[bG]=true;this.__lD();}
;};}
,_onKeyUp:function(e){var bH=e.getKeyIdentifier();switch(bH){case C:case q:case r:if(this.__lu[bH]){this.__lu[bH]=false;this.__lD();}
;};}
,_onKeyPress:function(e){var bI=e.getKeyIdentifier();switch(bI){case g:this.clearSession();};}
},destruct:function(){qx.event.Registration.removeListener(window,a,this._onWindowBlur,this);this.__lr=this.__lq=this.__dr=this.__dU=this.__ls=this.__lt=this.__lu=this.__d=null;}
,defer:function(bJ){qx.event.Registration.addHandler(bJ);}
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
,getCurrentType:function(){return this.getManager().getCurrentType();}
,getCurrentAction:function(){if(this.getDefaultPrevented()){return null;}
;return this.getManager().getCurrentAction();}
,setDropAllowed:function(p){this.getManager().setDropAllowed(p);}
,getDragTarget:function(){return this.getManager().getDragTarget();}
,stopSession:function(){this.getManager().clearSession();}
}});}
)();
(function(){var a="qx.event.type.Focus";qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(d,b,c){qx.event.type.Event.prototype.init.call(this,c,false);this._target=d;this._relatedTarget=b;return this;}
}});}
)();
(function(){var a='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',b="Enter",c="px",d='</div>',f="longtap",g='.qxconsole .messages .user-result{background:white}',h='.qxconsole .messages .level-error{background:#FFE2D5}',i="navigationbar",j="div",k="user-command",l='<div class="command">',m="Up",n='.qxconsole .command input:focus{outline:none;}',o='.qxconsole .messages .type-key{color:#565656;font-style:italic}',p="none",q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',r='.qxconsole .messages div{padding:0px 4px;}',s='.qxconsole .messages .level-debug{background:white}',t='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',u="DIV",v='.qxconsole .messages .level-user{background:#E3EFE9}',w='<div class="qxconsole">',x="",y="D",z='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',A='.qxconsole .messages .type-string{color:black;font-weight:normal;}',B='.qxconsole .control a{text-decoration:none;color:black;}',C='<div class="messages">',D='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',E='<input type="text"/>',F="clear",G='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',H="keypress",I='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',J='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',K='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',L='.qxconsole .messages .user-command{color:blue}',M="F7",N="qx.log.appender.Console",O='.qxconsole .messages .level-info{background:#DEEDFA}',P="block",Q='.qxconsole .messages .level-warn{background:#FFF7D5}',R='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',S='.qxconsole .messages .user-error{background:#FFE2D5}',T='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',U='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',V=">>> ",W="Down",X='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';qx.Class.define(N,{statics:{__nB:null,__bJ:null,__nC:null,__nD:null,init:function(){var Y=[J,T,B,a,r,L,g,S,s,O,Q,h,v,A,X,D,I,z,o,t,q,R,K,G,n];qx.bom.Stylesheet.createElement(Y.join(x));var bb=[w,U,C,d,l,E,d,d];var bc=document.createElement(u);bc.innerHTML=bb.join(x);var ba=bc.firstChild;document.body.appendChild(bc.firstChild);this.__nB=ba;this.__bJ=ba.childNodes[1];this.__nC=ba.childNodes[2].firstChild;this.__nG();qx.log.Logger.register(this);qx.core.ObjectRegistry.register(this);}
,dispose:function(){qx.event.Registration.removeListener(document.documentElement,H,this.__kG,this);qx.log.Logger.unregister(this);}
,clear:function(){this.__bJ.innerHTML=x;}
,process:function(bd){this.__bJ.appendChild(qx.log.appender.Util.toHtml(bd));this.__nE();}
,__nE:function(){this.__bJ.scrollTop=this.__bJ.scrollHeight;}
,__eh:true,toggle:function(){if(!this.__nB){this.init();}
else if(this.__nB.style.display==p){this.show();}
else {this.__nB.style.display=p;}
;}
,show:function(){if(!this.__nB){this.init();}
else {this.__nB.style.display=P;this.__bJ.scrollTop=this.__bJ.scrollHeight;}
;}
,__nF:[],execute:function(){var bf=this.__nC.value;if(bf==x){return;}
;if(bf==F){this.clear();return;}
;var be=document.createElement(j);be.innerHTML=qx.log.appender.Util.escapeHTML(V+bf);be.className=k;this.__nF.push(bf);this.__nD=this.__nF.length;this.__bJ.appendChild(be);this.__nE();try{var bg=window.eval(bf);}
catch(bh){qx.log.Logger.error(bh);}
;if(bg!==undefined){qx.log.Logger.debug(bg);}
;}
,__nG:function(e){this.__bJ.style.height=(this.__nB.clientHeight-this.__nB.firstChild.offsetHeight-this.__nB.lastChild.offsetHeight)+c;}
,__kG:function(e){if(e instanceof qx.event.type.Tap||e instanceof qx.event.type.Pointer){var bk=e.getTarget();if(bk&&bk.className&&bk.className.indexOf&&bk.className.indexOf(i)!=-1){this.toggle();}
;return;}
;var bj=e.getKeyIdentifier();if((bj==M)||(bj==y&&e.isCtrlPressed())){this.toggle();e.preventDefault();}
;if(!this.__nB){return;}
;if(!qx.dom.Hierarchy.contains(this.__nB,e.getTarget())){return;}
;if(bj==b&&this.__nC.value!=x){this.execute();this.__nC.value=x;}
;if(bj==m||bj==W){this.__nD+=bj==m?-1:1;this.__nD=Math.min(Math.max(0,this.__nD),this.__nF.length);var bi=this.__nF[this.__nD];this.__nC.value=bi||x;this.__nC.select();}
;}
},defer:function(bl){qx.event.Registration.addListener(document.documentElement,H,bl.__kG,bl);qx.event.Registration.addListener(document.documentElement,f,bl.__kG,bl);}
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

