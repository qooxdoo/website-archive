(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"locale":"en","locale.variant":"US","qx.allowUrlSettings":true,"qx.allowUrlVariants":true,"qx.application":"demobrowser.demo.layout.Grid_Simple","qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.whitespace":true,"qx.theme":"qx.theme.Indigo"};
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
  packages : {"0":{"uris":["__out__:demobrowser.demo.layout.Grid_Simple.674908c3ad10.js"]}},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : true,

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

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, MMM d, y G","cldr_date_time_format_GyMMMd":"MMM d, y G","cldr_date_time_format_H":"HH","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_short_fri":"Fr","cldr_day_format_short_mon":"Mo","cldr_day_format_short_sat":"Sa","cldr_day_format_short_sun":"Su","cldr_day_format_short_thu":"Th","cldr_day_format_short_tue":"Tu","cldr_day_format_short_wed":"We","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.y","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EHm":"E, HH:mm","cldr_date_time_format_EHms":"E, HH:mm:ss","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E, h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, d. MMM y G","cldr_date_time_format_GyMMMd":"d. MMM y G","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"E, d.M.y","cldr_date_time_format_yMM":"MM.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"d. MMM y","cldr_date_time_format_yMMdd":"dd.MM.y","cldr_date_time_format_yMd":"d.M.y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_short_fri":"Fr.","cldr_day_format_short_mon":"Mo.","cldr_day_format_short_sat":"Sa.","cldr_day_format_short_sun":"So.","cldr_day_format_short_thu":"Do.","cldr_day_format_short_tue":"Di.","cldr_day_format_short_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_short_fri":"Fr.","cldr_day_stand-alone_short_mon":"Mo.","cldr_day_stand-alone_short_sat":"Sa.","cldr_day_stand-alone_short_sun":"So.","cldr_day_stand-alone_short_thu":"Do.","cldr_day_stand-alone_short_tue":"Di.","cldr_day_stand-alone_short_wed":"Mi.","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan.","cldr_month_format_abbreviated_10":"Okt.","cldr_month_format_abbreviated_11":"Nov.","cldr_month_format_abbreviated_12":"Dez.","cldr_month_format_abbreviated_2":"Feb.","cldr_month_format_abbreviated_3":"März","cldr_month_format_abbreviated_4":"Apr.","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Juni","cldr_month_format_abbreviated_7":"Juli","cldr_month_format_abbreviated_8":"Aug.","cldr_month_format_abbreviated_9":"Sep.","cldr_month_format_narrow_1":"J","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"J","cldr_month_format_narrow_7":"J","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Jun","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"Januar","cldr_month_stand-alone_wide_10":"Oktober","cldr_month_stand-alone_wide_11":"November","cldr_month_stand-alone_wide_12":"Dezember","cldr_month_stand-alone_wide_2":"Februar","cldr_month_stand-alone_wide_3":"März","cldr_month_stand-alone_wide_4":"April","cldr_month_stand-alone_wide_5":"Mai","cldr_month_stand-alone_wide_6":"Juni","cldr_month_stand-alone_wide_7":"Juli","cldr_month_stand-alone_wide_8":"August","cldr_month_stand-alone_wide_9":"September","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, MMM d, y G","cldr_date_time_format_GyMMMd":"MMM d, y G","cldr_date_time_format_H":"HH","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_short_fri":"Fr","cldr_day_format_short_mon":"Mo","cldr_day_format_short_sat":"Sa","cldr_day_format_short_sun":"Su","cldr_day_format_short_thu":"Th","cldr_day_format_short_tue":"Tu","cldr_day_format_short_wed":"We","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"»","alternateQuotationStart":"«","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/y","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E d MMM y G","cldr_date_time_format_GyMMMd":"d MMM y G","cldr_date_time_format_H":"HH 'h'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E d/M/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d/M/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_short_fri":"ve","cldr_day_format_short_mon":"lu","cldr_day_format_short_sat":"sa","cldr_day_format_short_sun":"di","cldr_day_format_short_thu":"je","cldr_day_format_short_tue":"ma","cldr_day_format_short_wed":"me","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_short_fri":"ven.","cldr_day_stand-alone_short_mon":"lun.","cldr_day_stand-alone_short_sat":"sam.","cldr_day_stand-alone_short_sun":"dim.","cldr_day_stand-alone_short_thu":"jeu.","cldr_day_stand-alone_short_tue":"mar.","cldr_day_stand-alone_short_wed":"mer.","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_narrow_1":"J","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"J","cldr_month_format_narrow_7":"J","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_abbreviated_1":"janv.","cldr_month_stand-alone_abbreviated_10":"oct.","cldr_month_stand-alone_abbreviated_11":"nov.","cldr_month_stand-alone_abbreviated_12":"déc.","cldr_month_stand-alone_abbreviated_2":"févr.","cldr_month_stand-alone_abbreviated_3":"mars","cldr_month_stand-alone_abbreviated_4":"avr.","cldr_month_stand-alone_abbreviated_5":"mai","cldr_month_stand-alone_abbreviated_6":"juin","cldr_month_stand-alone_abbreviated_7":"juil.","cldr_month_stand-alone_abbreviated_8":"août","cldr_month_stand-alone_abbreviated_9":"sept.","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"janvier","cldr_month_stand-alone_wide_10":"octobre","cldr_month_stand-alone_wide_11":"novembre","cldr_month_stand-alone_wide_12":"décembre","cldr_month_stand-alone_wide_2":"février","cldr_month_stand-alone_wide_3":"mars","cldr_month_stand-alone_wide_4":"avril","cldr_month_stand-alone_wide_5":"mai","cldr_month_stand-alone_wide_6":"juin","cldr_month_stand-alone_wide_7":"juillet","cldr_month_stand-alone_wide_8":"août","cldr_month_stand-alone_wide_9":"septembre","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser.demo"],"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/decoration/Indigo/font/JosefinSlab-SemiBold.ttf":"qx","qx/decoration/Indigo/font/JosefinSlab-SemiBold.woff":"qx","qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/checked.png":[6,6,"png","qx"],"qx/decoration/Modern/form/tooltip-error-arrow-right.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/undetermined.png":[6,2,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Simple/arrows/down-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/down-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/down.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/forward.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/left-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/left.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/rewind.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/right-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/right.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/up-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/up-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/up.gif":[7,4,"gif","qx"],"qx/decoration/Simple/checkbox/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/checked.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Simple/checkbox/undetermined.png":[6,2,"png","qx"],"qx/decoration/Simple/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Simple/colorselector/brightness-handle.gif":[35,11,"gif","qx"],"qx/decoration/Simple/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Simple/colorselector/huesaturation-handle.gif":[11,11,"gif","qx"],"qx/decoration/Simple/cursors/alias.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/copy.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/move.gif":[13,9,"gif","qx"],"qx/decoration/Simple/cursors/nodrop.gif":[20,20,"gif","qx"],"qx/decoration/Simple/menu/checkbox-invert.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/checkbox.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/radiobutton-invert.gif":[16,5,"gif","qx"],"qx/decoration/Simple/menu/radiobutton.gif":[16,5,"gif","qx"],"qx/decoration/Simple/splitpane/knob-horizontal.png":[1,8,"png","qx"],"qx/decoration/Simple/splitpane/knob-vertical.png":[8,1,"png","qx"],"qx/decoration/Simple/table/ascending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/ascending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/boolean-false.png":[11,11,"png","qx"],"qx/decoration/Simple/table/boolean-true.png":[11,11,"png","qx"],"qx/decoration/Simple/table/descending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/descending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/select-column-order.png":[10,9,"png","qx"],"qx/decoration/Simple/tabview/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/window/close-white.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/maximize-white.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/maximize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize-white.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/restore-white.gif":[8,9,"gif","qx"],"qx/decoration/Simple/window/restore.gif":[8,9,"gif","qx"],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-44],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-22],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.png":[1,1,"png","qx"]},"translations":{"C":{},"de":{},"de_DE":{},"en":{},"en_US":{},"fr":{},"fr_FR":{}}};
(function(){var b=".prototype",c="function",d="Boolean",e="Error",f="Object.keys requires an object as argument.",g="constructor",h="warn",j="default",k="hasOwnProperty",m="string",n="Object",o="toLocaleString",p="error",q="toString",r="qx.debug",s="()",t="RegExp",u="String",v="info",w="BROKEN_IE",x="isPrototypeOf",y="Date",z="",A="qx.Bootstrap",B="Function",C="]",D="Cannot call super class. Method is not derived: ",E="Array",F="[Class ",G="valueOf",H="Number",I="Class",J="debug",K="ES5",L=".",M="propertyIsEnumerable",N="object";if(!window.qx){window.qx={};}
;qx.Bootstrap={genericToString:function(){return F+this.classname+C;}
,createNamespace:function(name,O){var R=name.split(L);var Q=R[0];var parent=qx.$$namespaceRoot&&qx.$$namespaceRoot[Q]?qx.$$namespaceRoot:window;for(var i=0,P=R.length-1;i<P;i++ ,Q=R[i]){if(!parent[Q]){parent=parent[Q]={};}
else {parent=parent[Q];}
;}
;parent[Q]=O;return Q;}
,setDisplayName:function(T,S,name){T.displayName=S+L+name+s;}
,setDisplayNames:function(V,U){for(var name in V){var W=V[name];if(W instanceof Function){W.displayName=U+L+name+s;}
;}
;}
,base:function(X,Y){if(qx.Bootstrap.DEBUG){if(!qx.Bootstrap.isFunction(X.callee.base)){throw new Error(D+X.callee.displayName);}
;}
;if(arguments.length===1){return X.callee.base.call(this);}
else {return X.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}
;}
,define:function(name,bk){if(!bk){bk={statics:{}};}
;var bg;var bc=null;qx.Bootstrap.setDisplayNames(bk.statics,name);if(bk.members||bk.extend){qx.Bootstrap.setDisplayNames(bk.members,name+b);bg=bk.construct||new Function;if(bk.extend){this.extendClass(bg,bg,bk.extend,name,be);}
;var bb=bk.statics||{};for(var i=0,bd=qx.Bootstrap.keys(bb),l=bd.length;i<l;i++ ){var ba=bd[i];bg[ba]=bb[ba];}
;bc=bg.prototype;bc.base=qx.Bootstrap.base;bc.name=bc.classname=name;var bi=bk.members||{};var ba,bh;for(var i=0,bd=qx.Bootstrap.keys(bi),l=bd.length;i<l;i++ ){ba=bd[i];bh=bi[ba];if(bh instanceof Function&&bc[ba]){bh.base=bc[ba];}
;bc[ba]=bh;}
;}
else {bg=bk.statics||{};if(qx.Bootstrap.$$registry&&qx.Bootstrap.$$registry[name]){var bj=qx.Bootstrap.$$registry[name];if(this.keys(bg).length!==0){if(bk.defer){bk.defer(bg,bc);}
;for(var bf in bg){bj[bf]=bg[bf];}
;return bj;}
;}
;}
;bg.$$type=I;if(!bg.hasOwnProperty(q)){bg.toString=this.genericToString;}
;var be=name?this.createNamespace(name,bg):z;bg.name=bg.classname=name;bg.basename=be;bg.$$events=bk.events;if(bk.defer){bk.defer(bg,bc);}
;if(name!=null){qx.Bootstrap.$$registry[name]=bg;}
;return bg;}
};qx.Bootstrap.define(A,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var bl=true;if(qx.$$environment&&qx.$$environment[r]===false){bl=false;}
;return bl;}
)(),getEnvironmentSetting:function(bm){if(qx.$$environment){return qx.$$environment[bm];}
;}
,setEnvironmentSetting:function(bn,bo){if(!qx.$$environment){qx.$$environment={};}
;if(qx.$$environment[bn]===undefined){qx.$$environment[bn]=bo;}
;}
,createNamespace:qx.Bootstrap.createNamespace,setRoot:function(bp){qx.$$namespaceRoot=bp;}
,base:qx.Bootstrap.base,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(clazz,construct,superClass,name,basename){var superproto=superClass.prototype;var helper=new Function();helper.prototype=superproto;var proto=new helper();clazz.prototype=proto;proto.name=proto.classname=name;proto.basename=basename;construct.base=superClass;clazz.superclass=superClass;construct.self=clazz.constructor=proto.constructor=clazz;}
,getByName:function(name){return qx.Bootstrap.$$registry[name];}
,$$registry:{},objectGetLength:function(bq){return qx.Bootstrap.keys(bq).length;}
,objectMergeWith:function(bs,br,bu){if(bu===undefined){bu=true;}
;for(var bt in br){if(bu||bs[bt]===undefined){bs[bt]=br[bt];}
;}
;return bs;}
,__a:[x,k,o,q,G,M,g],keys:({"ES5":Object.keys,"BROKEN_IE":function(bv){if(bv===null||(typeof bv!=N&&typeof bv!=c)){throw new TypeError(f);}
;var bw=[];var by=Object.prototype.hasOwnProperty;for(var bz in bv){if(by.call(bv,bz)){bw.push(bz);}
;}
;var bx=qx.Bootstrap.__a;for(var i=0,a=bx,l=a.length;i<l;i++ ){if(by.call(bv,a[i])){bw.push(a[i]);}
;}
;return bw;}
,"default":function(bA){if(bA===null||(typeof bA!=N&&typeof bA!=c)){throw new TypeError(f);}
;var bB=[];var bC=Object.prototype.hasOwnProperty;for(var bD in bA){if(bC.call(bA,bD)){bB.push(bD);}
;}
;return bB;}
})[typeof (Object.keys)==c?K:(function(){for(var bE in {toString:1}){return bE;}
;}
)()!==q?w:j],__b:{"[object String]":u,"[object Array]":E,"[object Object]":n,"[object RegExp]":t,"[object Number]":H,"[object Boolean]":d,"[object Date]":y,"[object Function]":B,"[object Error]":e},bind:function(bG,self,bH){var bF=Array.prototype.slice.call(arguments,2,arguments.length);return function(){var bI=Array.prototype.slice.call(arguments,0,arguments.length);return bG.apply(self,bF.concat(bI));}
;}
,firstUp:function(bJ){return bJ.charAt(0).toUpperCase()+bJ.substr(1);}
,firstLow:function(bK){return bK.charAt(0).toLowerCase()+bK.substr(1);}
,getClass:function(bM){var bL=Object.prototype.toString.call(bM);return (qx.Bootstrap.__b[bL]||bL.slice(8,-1));}
,isString:function(bN){return (bN!==null&&(typeof bN===m||qx.Bootstrap.getClass(bN)==u||bN instanceof String||(!!bN&&!!bN.$$isString)));}
,isArray:function(bO){return (bO!==null&&(bO instanceof Array||(bO&&qx.data&&qx.data.IListData&&qx.util.OOUtil.hasInterface(bO.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bO)==E||(!!bO&&!!bO.$$isArray)));}
,isObject:function(bP){return (bP!==undefined&&bP!==null&&qx.Bootstrap.getClass(bP)==n);}
,isFunction:function(bQ){return qx.Bootstrap.getClass(bQ)==B;}
,$$logs:[],debug:function(bS,bR){qx.Bootstrap.$$logs.push([J,arguments]);}
,info:function(bU,bT){qx.Bootstrap.$$logs.push([v,arguments]);}
,warn:function(bW,bV){qx.Bootstrap.$$logs.push([h,arguments]);}
,error:function(bY,bX){qx.Bootstrap.$$logs.push([p,arguments]);}
,trace:function(ca){}
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
(function(){var a="qx.bom.client.Xml.getSelectSingleNode",b="qx.bom.client.Stylesheet.getInsertRule",c="qx.bom.client.Html.getDataset",d="qx.bom.client.PhoneGap.getPhoneGap",e="qx.bom.client.EcmaScript.getArrayReduce",f="qx.core.Environment for a list of predefined keys.",g='] found, and no default ("default") given',h="qx.bom.client.Event.getCustomEvent",j="qx.bom.client.Html.getCanvas",k="qx.bom.client.CssTransform.get3D",l="qx.bom.client.EcmaScript.getArrayLastIndexOf",m=" is not a valid key. Please see the API-doc of ",n=' type)',o="qx.bom.client.EcmaScript.getArrayForEach",p="qx.bom.client.Xml.getAttributeNS",q="qx.bom.client.Stylesheet.getRemoveImport",r="qx.bom.client.Css.getUserModify",s="qx.bom.client.Xml.getQualifiedItem",t="qx.bom.client.Css.getBoxShadow",u="qx.bom.client.Html.getXul",v="qx.bom.client.Plugin.getWindowsMedia",w=":",x="qx.blankpage",y="The environment key 'json' is deprecated ",z="qx.bom.client.Html.getVideo",A="qx.bom.client.Device.getName",B="qx.bom.client.Event.getTouch",C="qx.optimization.strings",D="qx.debug.property.level",E="qx.bom.client.EcmaScript.getArrayFilter",F="qx.bom.client.EcmaScript.getStringTrim",G="qx.optimization.variables",H="qx.bom.client.EcmaScript.getStackTrace",I="qx.bom.client.EcmaScript.getDateNow",J="qx.bom.client.EcmaScript.getArrayEvery",K="qx.bom.client.Xml.getImplementation",L="qx.bom.client.Html.getConsole",M="qx.bom.client.Engine.getVersion",N="qx.bom.client.Plugin.getQuicktime",O="qx.bom.client.Html.getNaturalDimensions",P="qx.bom.client.Xml.getSelectNodes",Q="qx.bom.client.Xml.getElementsByTagNameNS",R="qx.nativeScrollBars",S="qx.bom.client.Html.getDataUrl",T="qx.bom.client.Flash.isAvailable",U="qx.bom.client.Html.getAudioAif",V="qx.dyntheme",W="qx.bom.client.Device.getPixelRatio",X="qx.bom.client.Plugin.getQuicktimeVersion",Y="qx.bom.client.Css.getBoxModel",ew="qx.bom.client.Plugin.getSilverlight",es="qx/static/blank.html",ex="qx.bom.client.EcmaScript.getArrayMap",et="qx.bom.client.Css.getUserSelect",eu="qx.bom.client.Css.getRadialGradient",er="json",ev="module.property",eC="qx.bom.client.Plugin.getWindowsMediaVersion",eD="qx.bom.client.Stylesheet.getCreateStyleSheet",eE='No match for variant "',eF="qx.bom.client.Locale.getLocale",ey="module.events",ez="qx.bom.client.Plugin.getSkype",eA="module.databinding",eB="qx.bom.client.Html.getFileReader",eJ="qx.bom.client.Css.getBorderImage",fm="qx.bom.client.Stylesheet.getDeleteRule",eK="qx.bom.client.EcmaScript.getErrorToString",eL="qx.bom.client.Plugin.getDivXVersion",eG="qx.bom.client.Scroll.scrollBarOverlayed",eH="qx.bom.client.Plugin.getPdfVersion",gn="qx.bom.client.Xml.getCreateNode",eI="qx.bom.client.Css.getAlphaImageLoaderNeeded",eM="qx.bom.client.Css.getLinearGradient",eN="qx.bom.client.Transport.getXmlHttpRequest",eO="qx.bom.client.Css.getBorderImageSyntax",eT="qx.bom.client.Html.getClassList",eU="qx.bom.client.Event.getHelp",eV="qx.optimization.comments",eP="qx.bom.client.Locale.getVariant",eQ="qx.bom.client.Css.getBoxSizing",eR="qx.bom.client.OperatingSystem.getName",eS="module.logger",fa="qx.bom.client.Event.getDispatchEvent",fb="qx.mobile.emulatetouch",fc="qx.bom.client.Html.getIsEqualNode",fd="qx.bom.client.Html.getAudioWav",eW="qx.bom.client.Browser.getName",eX="qx.bom.client.Css.getInlineBlock",go="qx.bom.client.Plugin.getPdf",eY="qx.emulatemouse",fh="qx.bom.client.Device.getTouch",fi='" (',gs="qx.bom.client.Html.getAudio",fj="qx.core.Environment",fe="qx.bom.client.EcmaScript.getFunctionBind",ff="qx.bom.client.CssTransform.getSupport",gq="qx.bom.client.Html.getTextContent",fg="qx.bom.client.Css.getPlaceholder",fk="qx.bom.client.Css.getFloat",fl="default",fx=' in variants [',fw="false",fv="qx.bom.client.Css.getFilterGradient",fB="The environment key 'qx.emulatemouse' has been removed. ",fA="qx.bom.client.Html.getHistoryState",fz="qxenv",fy="qx.bom.client.Html.getSessionStorage",fq="qx.bom.client.Html.getAudioAu",fp="qx.bom.client.Css.getOpacity",fo="qx.bom.client.Css.getFilterTextShadow",fn="qx.bom.client.Html.getVml",fu="qx.bom.client.Transport.getMaxConcurrentRequestCount",ft="qx.bom.client.Pdfjs.getPdfjs",fs="The environment key 'qx.mobile.emulatetouch' has been removed. ",fr="qx.bom.client.Css.getRgba",fI="qx.debug.dispose",fH="qx.bom.client.Css.getBorderRadius",fG="qx.bom.client.EcmaScript.getArraySome",fF="qx.bom.client.Transport.getSsl",fM="qx.bom.client.Html.getWebWorker",fL="qx.bom.client.Json.getJson",fK="qx.bom.client.Browser.getQuirksMode",fJ="and will eventually be removed.",fE="qx.bom.client.Css.getTextOverflow",fD="qx.bom.client.EcmaScript.getArrayIndexOf",fC="qx.bom.client.Event.getMouseEvent",fX="qx.bom.client.Event.getHashChange",fW="&",fV="qx.bom.client.EcmaScript.getArrayReduceRight",gc="qx.bom.client.Device.getType",gb="qx.bom.client.Browser.getDocumentMode",ga="qx.allowUrlVariants",fY="qx.debug.ui.queue",fQ="|",fP="qx.bom.client.Html.getContains",fO="qx.bom.client.Plugin.getActiveX",fN="qx.bom.client.Event.getMouseWheel",fU=".",fT="qx.bom.client.Xml.getDomProperties",fS="qx.bom.client.CssAnimation.getSupport",fR="qx.debug.databinding",gi="qx.optimization.basecalls",gh="qx.bom.client.Browser.getVersion",gg="qx.bom.client.Css.getUserSelectNone",gf="true",gm="qx.bom.client.Html.getSvg",gl="qx.bom.client.EcmaScript.getObjectKeys",gk="qx.bom.client.Plugin.getDivX",gj="qx.bom.client.Runtime.getName",ge="qx.bom.client.Html.getLocalStorage",gd="qx.allowUrlSettings",dV="qx.bom.client.Flash.getStrictSecurityModel",dU="qx.aspects",gt="qx.debug",dS="qx.bom.client.Css.getPointerEvents",dT="qx.bom.client.Html.getAudioMp3",dR="qx.bom.client.Engine.getName",gr="qx.bom.client.Html.getVideoOgg",dP="qx.bom.client.Html.getUserDataStorage",dQ="qx.bom.client.Plugin.getGears",dO="qx.bom.client.Event.getMsPointer",gp="qx.bom.client.Html.getAudioOgg",dM="qx.bom.client.Css.getTextShadow",dN="qx.bom.client.Plugin.getSilverlightVersion",dL="qx.bom.client.Html.getCompareDocumentPosition",ef="See the release notes for more details.",eg="qx.bom.client.Flash.getExpressInstall",ed="qx.bom.client.Html.getSelection",ee="qx.bom.client.OperatingSystem.getVersion",eb="qx.bom.client.Html.getXPath",ec="qx.bom.client.Html.getGeoLocation",ea="qx.optimization.privates",dK="qx.bom.client.Scroll.getNativeScroll",dX="qx.bom.client.Css.getAppearance",dY="qx.bom.client.CssTransition.getSupport",dW="qx.bom.client.Stylesheet.getAddImport",ep="qx.optimization.variants",en="qx.bom.client.Html.getVideoWebm",eo="qx.bom.client.Flash.getVersion",el="qx.bom.client.CssAnimation.getRequestAnimationFrame",em="qx.bom.client.Css.getLegacyWebkitGradient",ek="qx.bom.client.PhoneGap.getNotification",eq="qx.bom.client.Html.getVideoH264",ei="qx.bom.client.Xml.getCreateElementNS",ej="qx.bom.client.Xml.getDomParser",eh="qx.dynlocale";qx.Bootstrap.define(fj,{statics:{_checks:{},_asyncChecks:{},__c:{},_checksMap:{"engine.version":M,"engine.name":dR,"browser.name":eW,"browser.version":gh,"browser.documentmode":gb,"browser.quirksmode":fK,"runtime.name":gj,"device.name":A,"device.type":gc,"device.pixelRatio":W,"device.touch":fh,"locale":eF,"locale.variant":eP,"os.name":eR,"os.version":ee,"os.scrollBarOverlayed":eG,"plugin.gears":dQ,"plugin.activex":fO,"plugin.skype":ez,"plugin.quicktime":N,"plugin.quicktime.version":X,"plugin.windowsmedia":v,"plugin.windowsmedia.version":eC,"plugin.divx":gk,"plugin.divx.version":eL,"plugin.silverlight":ew,"plugin.silverlight.version":dN,"plugin.flash":T,"plugin.flash.version":eo,"plugin.flash.express":eg,"plugin.flash.strictsecurity":dV,"plugin.pdf":go,"plugin.pdf.version":eH,"plugin.pdfjs":ft,"io.maxrequests":fu,"io.ssl":fF,"io.xhr":eN,"event.touch":B,"event.mspointer":dO,"event.help":eU,"event.hashchange":fX,"event.dispatchevent":fa,"event.customevent":h,"event.mouseevent":fC,"event.mousewheel":fN,"ecmascript.error.stacktrace":H,"ecmascript.array.indexof":fD,"ecmascript.array.lastindexof":l,"ecmascript.array.foreach":o,"ecmascript.array.filter":E,"ecmascript.array.map":ex,"ecmascript.array.some":fG,"ecmascript.array.every":J,"ecmascript.array.reduce":e,"ecmascript.array.reduceright":fV,"ecmascript.function.bind":fe,"ecmascript.object.keys":gl,"ecmascript.date.now":I,"ecmascript.error.toString":eK,"ecmascript.string.trim":F,"html.webworker":fM,"html.filereader":eB,"html.geolocation":ec,"html.audio":gs,"html.audio.ogg":gp,"html.audio.mp3":dT,"html.audio.wav":fd,"html.audio.au":fq,"html.audio.aif":U,"html.video":z,"html.video.ogg":gr,"html.video.h264":eq,"html.video.webm":en,"html.storage.local":ge,"html.storage.session":fy,"html.storage.userdata":dP,"html.classlist":eT,"html.xpath":eb,"html.xul":u,"html.canvas":j,"html.svg":gm,"html.vml":fn,"html.dataset":c,"html.dataurl":S,"html.console":L,"html.stylesheet.createstylesheet":eD,"html.stylesheet.insertrule":b,"html.stylesheet.deleterule":fm,"html.stylesheet.addimport":dW,"html.stylesheet.removeimport":q,"html.element.contains":fP,"html.element.compareDocumentPosition":dL,"html.element.textcontent":gq,"html.image.naturaldimensions":O,"html.history.state":fA,"html.selection":ed,"html.node.isequalnode":fc,"json":fL,"css.textoverflow":fE,"css.placeholder":fg,"css.borderradius":fH,"css.borderimage":eJ,"css.borderimage.standardsyntax":eO,"css.boxshadow":t,"css.gradient.linear":eM,"css.gradient.filter":fv,"css.gradient.radial":eu,"css.gradient.legacywebkit":em,"css.boxmodel":Y,"css.rgba":fr,"css.userselect":et,"css.userselect.none":gg,"css.usermodify":r,"css.appearance":dX,"css.float":fk,"css.boxsizing":eQ,"css.animation":fS,"css.animation.requestframe":el,"css.transform":ff,"css.transform.3d":k,"css.transition":dY,"css.inlineblock":eX,"css.opacity":fp,"css.textShadow":dM,"css.textShadow.filter":fo,"css.alphaimageloaderneeded":eI,"css.pointerevents":dS,"phonegap":d,"phonegap.notification":ek,"xml.implementation":K,"xml.domparser":ej,"xml.selectsinglenode":a,"xml.selectnodes":P,"xml.getelementsbytagnamens":Q,"xml.domproperties":fT,"xml.attributens":p,"xml.createnode":gn,"xml.getqualifieditem":s,"xml.createelementns":ei,"qx.mobile.nativescroll":dK},get:function(gx){if(qx.Bootstrap.DEBUG){if(gx===er){qx.Bootstrap.warn(y+fJ);}
;if(gx===eY){qx.Bootstrap.warn(fB+ef);}
;if(gx===fb){qx.Bootstrap.warn(fs+ef);}
;}
;if(this.__c[gx]!=undefined){return this.__c[gx];}
;var gz=this._checks[gx];if(gz){var gv=gz();this.__c[gx]=gv;return gv;}
;var gu=this._getClassNameFromEnvKey(gx);if(gu[0]!=undefined){var gy=gu[0];var gw=gu[1];var gv=gy[gw]();this.__c[gx]=gv;return gv;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(gx+m+f);qx.Bootstrap.trace(this);}
;}
,_getClassNameFromEnvKey:function(gE){var gG=this._checksMap;if(gG[gE]!=undefined){var gB=gG[gE];var gF=gB.lastIndexOf(fU);if(gF>-1){var gD=gB.slice(0,gF);var gA=gB.slice(gF+1);var gC=qx.Bootstrap.getByName(gD);if(gC!=undefined){return [gC,gA];}
;}
;}
;return [undefined,undefined];}
,getAsync:function(gI,gL,self){var gM=this;if(this.__c[gI]!=undefined){window.setTimeout(function(){gL.call(self,gM.__c[gI]);}
,0);return;}
;var gJ=this._asyncChecks[gI];if(gJ){gJ(function(gO){gM.__c[gI]=gO;gL.call(self,gO);}
);return;}
;var gH=this._getClassNameFromEnvKey(gI);if(gH[0]!=undefined){var gK=gH[0];var gN=gH[1];gK[gN](function(gP){gM.__c[gI]=gP;gL.call(self,gP);}
);return;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(gI+m+f);qx.Bootstrap.trace(this);}
;}
,select:function(gR,gQ){return this.__d(this.get(gR),gQ);}
,selectAsync:function(gT,gS,self){this.getAsync(gT,function(gU){var gV=this.__d(gT,gS);gV.call(self,gU);}
,this);}
,__d:function(ha,gY){var gX=gY[ha];if(gY.hasOwnProperty(ha)){return gX;}
;for(var hb in gY){if(hb.indexOf(fQ)!=-1){var gW=hb.split(fQ);for(var i=0;i<gW.length;i++ ){if(gW[i]==ha){return gY[hb];}
;}
;}
;}
;if(gY[fl]!==undefined){return gY[fl];}
;if(qx.Bootstrap.DEBUG){throw new Error(eE+ha+fi+(typeof ha)+n+fx+qx.Bootstrap.keys(gY)+g);}
;}
,filter:function(hc){var he=[];for(var hd in hc){if(this.get(hd)){he.push(hc[hd]);}
;}
;return he;}
,invalidateCacheKey:function(hf){delete this.__c[hf];}
,add:function(hh,hg){if(this._checks[hh]==undefined){if(hg instanceof Function){this._checks[hh]=hg;}
else {this._checks[hh]=this.__g(hg);}
;}
;}
,addAsync:function(hj,hi){if(this._checks[hj]==undefined){this._asyncChecks[hj]=hi;}
;}
,getChecks:function(){return this._checks;}
,getAsyncChecks:function(){return this._asyncChecks;}
,_initDefaultQxValues:function(){this.add(gf,function(){return true;}
);this.add(gd,function(){return false;}
);this.add(ga,function(){return false;}
);this.add(D,function(){return 0;}
);this.add(gt,function(){return true;}
);this.add(fY,function(){return true;}
);this.add(dU,function(){return false;}
);this.add(eh,function(){return true;}
);this.add(V,function(){return true;}
);this.add(fb,function(){return false;}
);this.add(eY,function(){return false;}
);this.add(x,function(){return es;}
);this.add(fR,function(){return false;}
);this.add(fI,function(){return false;}
);this.add(gi,function(){return false;}
);this.add(eV,function(){return false;}
);this.add(ea,function(){return false;}
);this.add(C,function(){return false;}
);this.add(G,function(){return false;}
);this.add(ep,function(){return false;}
);this.add(eA,function(){return true;}
);this.add(eS,function(){return true;}
);this.add(ev,function(){return true;}
);this.add(ey,function(){return true;}
);this.add(R,function(){return false;}
);}
,__e:function(){if(qx&&qx.$$environment){for(var hk in qx.$$environment){var hl=qx.$$environment[hk];this._checks[hk]=this.__g(hl);}
;}
;}
,__f:function(){if(window.document&&window.document.location){var hm=window.document.location.search.slice(1).split(fW);for(var i=0;i<hm.length;i++ ){var hp=hm[i].split(w);if(hp.length!=3||hp[0]!=fz){continue;}
;var hn=hp[1];var ho=decodeURIComponent(hp[2]);if(ho==gf){ho=true;}
else if(ho==fw){ho=false;}
else if(/^(\d|\.)+$/.test(ho)){ho=parseFloat(ho);}
;this._checks[hn]=this.__g(ho);}
;}
;}
,__g:function(hq){return qx.Bootstrap.bind(function(hr){return hr;}
,null,hq);}
},defer:function(hs){hs._initDefaultQxValues();hs.__e();if(hs.get(gd)===true){hs.__f();}
;}
});}
)();
(function(){var a="ecmascript.array.lastindexof",b="function",c="stack",d="ecmascript.array.map",f="ecmascript.date.now",g="ecmascript.array.reduce",h="e",i="qx.bom.client.EcmaScript",j="ecmascript.object.keys",k="ecmascript.error.stacktrace",l="ecmascript.string.trim",m="ecmascript.array.indexof",n="stacktrace",o="ecmascript.error.toString",p="[object Error]",q="ecmascript.array.foreach",r="ecmascript.function.bind",s="ecmascript.array.reduceright",t="ecmascript.array.some",u="ecmascript.array.filter",v="ecmascript.array.every";qx.Bootstrap.define(i,{statics:{getStackTrace:function(){var w;var e=new Error(h);w=e.stack?c:e.stacktrace?n:null;if(!w){try{throw e;}
catch(x){e=x;}
;}
;return e.stacktrace?n:e.stack?c:null;}
,getArrayIndexOf:function(){return !!Array.prototype.indexOf;}
,getArrayLastIndexOf:function(){return !!Array.prototype.lastIndexOf;}
,getArrayForEach:function(){return !!Array.prototype.forEach;}
,getArrayFilter:function(){return !!Array.prototype.filter;}
,getArrayMap:function(){return !!Array.prototype.map;}
,getArraySome:function(){return !!Array.prototype.some;}
,getArrayEvery:function(){return !!Array.prototype.every;}
,getArrayReduce:function(){return !!Array.prototype.reduce;}
,getArrayReduceRight:function(){return !!Array.prototype.reduceRight;}
,getErrorToString:function(){return typeof Error.prototype.toString==b&&Error.prototype.toString()!==p;}
,getFunctionBind:function(){return typeof Function.prototype.bind===b;}
,getObjectKeys:function(){return !!Object.keys;}
,getDateNow:function(){return !!Date.now;}
,getStringTrim:function(){return typeof String.prototype.trim===b;}
},defer:function(y){qx.core.Environment.add(m,y.getArrayIndexOf);qx.core.Environment.add(a,y.getArrayLastIndexOf);qx.core.Environment.add(q,y.getArrayForEach);qx.core.Environment.add(u,y.getArrayFilter);qx.core.Environment.add(d,y.getArrayMap);qx.core.Environment.add(t,y.getArraySome);qx.core.Environment.add(v,y.getArrayEvery);qx.core.Environment.add(g,y.getArrayReduce);qx.core.Environment.add(s,y.getArrayReduceRight);qx.core.Environment.add(f,y.getDateNow);qx.core.Environment.add(o,y.getErrorToString);qx.core.Environment.add(k,y.getStackTrace);qx.core.Environment.add(r,y.getFunctionBind);qx.core.Environment.add(j,y.getObjectKeys);qx.core.Environment.add(l,y.getStringTrim);}
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
(function(){var a="function",b="ecmascript.array.lastindexof",c="ecmascript.array.map",d="ecmascript.array.filter",e="Length is 0 and no second argument given",f="qx.lang.normalize.Array",g="ecmascript.array.indexof",h="First argument is not callable",j="ecmascript.array.reduce",k="ecmascript.array.foreach",m="ecmascript.array.reduceright",n="ecmascript.array.some",o="ecmascript.array.every";qx.Bootstrap.define(f,{statics:{indexOf:function(p,q){if(q==null){q=0;}
else if(q<0){q=Math.max(0,this.length+q);}
;for(var i=q;i<this.length;i++ ){if(this[i]===p){return i;}
;}
;return -1;}
,lastIndexOf:function(r,s){if(s==null){s=this.length-1;}
else if(s<0){s=Math.max(0,this.length+s);}
;for(var i=s;i>=0;i-- ){if(this[i]===r){return i;}
;}
;return -1;}
,forEach:function(t,u){var l=this.length;for(var i=0;i<l;i++ ){var v=this[i];if(v!==undefined){t.call(u||window,v,i,this);}
;}
;}
,filter:function(z,w){var x=[];var l=this.length;for(var i=0;i<l;i++ ){var y=this[i];if(y!==undefined){if(z.call(w||window,y,i,this)){x.push(this[i]);}
;}
;}
;return x;}
,map:function(D,A){var B=[];var l=this.length;for(var i=0;i<l;i++ ){var C=this[i];if(C!==undefined){B[i]=D.call(A||window,C,i,this);}
;}
;return B;}
,some:function(E,F){var l=this.length;for(var i=0;i<l;i++ ){var G=this[i];if(G!==undefined){if(E.call(F||window,G,i,this)){return true;}
;}
;}
;return false;}
,every:function(H,I){var l=this.length;for(var i=0;i<l;i++ ){var J=this[i];if(J!==undefined){if(!H.call(I||window,J,i,this)){return false;}
;}
;}
;return true;}
,reduce:function(K,L){if(typeof K!==a){throw new TypeError(h);}
;if(L===undefined&&this.length===0){throw new TypeError(e);}
;var M=L===undefined?this[0]:L;for(var i=L===undefined?1:0;i<this.length;i++ ){if(i in this){M=K.call(undefined,M,this[i],i,this);}
;}
;return M;}
,reduceRight:function(N,O){if(typeof N!==a){throw new TypeError(h);}
;if(O===undefined&&this.length===0){throw new TypeError(e);}
;var P=O===undefined?this[this.length-1]:O;for(var i=O===undefined?this.length-2:this.length-1;i>=0;i-- ){if(i in this){P=N.call(undefined,P,this[i],i,this);}
;}
;return P;}
},defer:function(Q){if(!qx.core.Environment.get(g)){Array.prototype.indexOf=Q.indexOf;}
;if(!qx.core.Environment.get(b)){Array.prototype.lastIndexOf=Q.lastIndexOf;}
;if(!qx.core.Environment.get(k)){Array.prototype.forEach=Q.forEach;}
;if(!qx.core.Environment.get(d)){Array.prototype.filter=Q.filter;}
;if(!qx.core.Environment.get(c)){Array.prototype.map=Q.map;}
;if(!qx.core.Environment.get(n)){Array.prototype.some=Q.some;}
;if(!qx.core.Environment.get(o)){Array.prototype.every=Q.every;}
;if(!qx.core.Environment.get(j)){Array.prototype.reduce=Q.reduce;}
;if(!qx.core.Environment.get(m)){Array.prototype.reduceRight=Q.reduceRight;}
;}
});}
)();
(function(){var b=".prototype",c='Conflict between mixin "',d="function",e="'is undefined/null!",f="constructor",g="' in mixin '",h='The configuration key "',j='" and "',k='" is not allowed!',m='" in member "',n='"! The type of the key must be "',o="Array",p="RegExp",q="members",r='" in property "',s="properties",t="statics",u="qx.Mixin",v="events",w="'is not a mixin!",x='Invalid type of key "',y='"!',z="]",A='"! The value needs to be a map!',B="Mixin",C="[Mixin ",D='" in mixin "',E="Includes of mixins must be mixins. The include number '",F="destruct",G='Invalid key "',H="Date",I='"! The value is undefined/null!',J="qx.debug",K="object";qx.Bootstrap.define(u,{statics:{define:function(name,M){if(M){if(M.include&&!(qx.Bootstrap.getClass(M.include)===o)){M.include=[M.include];}
;if(qx.core.Environment.get(J)){this.__i(name,M);}
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
,$$registry:{},__h:qx.core.Environment.select(J,{"true":{"include":K,"statics":K,"members":K,"properties":K,"events":K,"destruct":d,"construct":d},"default":null}),__i:qx.core.Environment.select(J,{"true":function(name,bf){var be=this.__h;for(var bd in bf){if(!be[bd]){throw new Error(h+bd+D+name+k);}
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
(function(){var a="qx.core.Aspect",b="before",c="*",d="static";qx.Bootstrap.define(a,{statics:{__bH:[],wrap:function(h,l,j){var m=[];var e=[];var k=this.__bH;var g;for(var i=0;i<k.length;i++ ){g=k[i];if((g.type==null||j==g.type||g.type==c)&&(g.name==null||h.match(g.name))){g.pos==-1?m.push(g.fcn):e.push(g.fcn);}
;}
;if(m.length===0&&e.length===0){return l;}
;var f=function(){for(var i=0;i<m.length;i++ ){m[i].call(this,h,l,j,arguments);}
;var n=l.apply(this,arguments);for(var i=0;i<e.length;i++ ){e[i].call(this,h,l,j,arguments,n);}
;return n;}
;if(j!==d){f.self=l.self;f.base=l.base;}
;l.wrapper=f;f.original=l;return f;}
,addAdvice:function(q,o,p,name){this.__bH.push({fcn:q,pos:o===b?-1:1,type:p,name:name});}
}});}
)();
(function(){var a='',b="ecmascript.string.trim",c="qx.lang.normalize.String";qx.Bootstrap.define(c,{statics:{trim:function(){return this.replace(/^\s+|\s+$/g,a);}
},defer:function(d){if(!qx.core.Environment.get(b)){String.prototype.trim=d.trim;}
;}
});}
)();
(function(){var a="ecmascript.object.keys",b="qx.lang.normalize.Object";qx.Bootstrap.define(b,{statics:{keys:qx.Bootstrap.keys},defer:function(c){if(!qx.core.Environment.get(a)){Object.keys=c.keys;}
;}
});}
)();
(function(){var b="function",c="Boolean",d="'! The value is undefined/null!",e="RegExp",f='The configuration key "',g='The property "',h='" is not allowed!',j="string",k='Implementation of method "',m='"',n="Array",o='" is missing in class "',p="' in interface '",q="members",r="number",s="properties",t="statics",u="qx.debug",v="Invalid key '",w='The event "',x="events",y='Invalid type of key "',z='"!',A="]",B='" in class "',C="Interface",D='"! The value needs to be a map!',E='" in interface "',F="' is undefined/null!",G='"! The type of the key must be "',H='Implementation of member "',I="Extends of interfaces must be interfaces. The extend number '",J='" is not supported by Class "',K="' is not an interface!",L="qx.Interface",M='" required by interface "',N='Invalid key "',O="Date",P='"! Static constants must be all uppercase.',Q="toggle",R="boolean",S="is",T="[Interface ",U='"! Static constants must be all of a primitive type.',V="object";qx.Bootstrap.define(L,{statics:{define:function(name,X){if(X){if(X.extend&&!(qx.Bootstrap.getClass(X.extend)===n)){X.extend=[X.extend];}
;if(qx.core.Environment.get(u)){this.__i(name,X);}
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
,__j:function(be,bf,bb,bi,bg){var bc=bb.$$members;if(bc){for(var bh in bc){if(qx.Bootstrap.isFunction(bc[bh])){var bk=this.__k(bf,bh);var bd=bk||qx.Bootstrap.isFunction(be[bh]);if(!bd){if(bg){throw new Error(k+bh+o+bf.classname+M+bb.name+m);}
else {return false;}
;}
;var bj=bi===true&&!bk&&!qx.util.OOUtil.hasInterface(bf,bb);if(bj){be[bh]=this.__n(bb,be[bh],bh,bc[bh]);}
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
,__k:function(bo,bl){var bq=bl.match(/^(is|toggle|get|set|reset)(.*)$/);if(!bq){return false;}
;var bn=qx.Bootstrap.firstLow(bq[2]);var bp=qx.util.OOUtil.getPropertyDefinition(bo,bn);if(!bp){return false;}
;var bm=bq[0]==S||bq[0]==Q;if(bm){return qx.util.OOUtil.getPropertyDefinition(bo,bn).check==c;}
;return true;}
,__l:function(bu,br,bs){if(br.$$properties){for(var bt in br.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(bu,bt)){if(bs){throw new Error(g+bt+J+bu.classname+z);}
else {return false;}
;}
;}
;}
;if(!bs){return true;}
;}
,__m:function(by,bv,bw){if(bv.$$events){for(var bx in bv.$$events){if(!qx.util.OOUtil.supportsEvent(by,bx)){if(bw){throw new Error(w+bx+J+by.classname+z);}
else {return false;}
;}
;}
;}
;if(!bw){return true;}
;}
,assertObject:function(bB,bz){var bC=bB.constructor;this.__j(bB,bC,bz,false,true);this.__l(bC,bz,true);this.__m(bC,bz,true);var bA=bz.$$extends;if(bA){for(var i=0,l=bA.length;i<l;i++ ){this.assertObject(bB,bA[i]);}
;}
;}
,assert:function(bF,bD,bG){this.__j(bF.prototype,bF,bD,bG,true);this.__l(bF,bD,true);this.__m(bF,bD,true);var bE=bD.$$extends;if(bE){for(var i=0,l=bE.length;i<l;i++ ){this.assert(bF,bE[i],bG);}
;}
;}
,objectImplements:function(bJ,bH){var bK=bJ.constructor;if(!this.__j(bJ,bK,bH)||!this.__l(bK,bH)||!this.__m(bK,bH)){return false;}
;var bI=bH.$$extends;if(bI){for(var i=0,l=bI.length;i<l;i++ ){if(!this.objectImplements(bJ,bI[i])){return false;}
;}
;}
;return true;}
,classImplements:function(bN,bL){if(!this.__j(bN.prototype,bN,bL)||!this.__l(bN,bL)||!this.__m(bN,bL)){return false;}
;var bM=bL.$$extends;if(bM){for(var i=0,l=bM.length;i<l;i++ ){if(!this.has(bN,bM[i])){return false;}
;}
;}
;return true;}
,genericToString:function(){return T+this.name+A;}
,$$registry:{},__n:qx.core.Environment.select(u,{"true":function(bR,bP,bS,bO){function bQ(){bO.apply(this,arguments);return bP.apply(this,arguments);}
;bP.wrapper=bQ;return bQ;}
,"default":function(bV,bU,bW,bT){}
}),__h:qx.core.Environment.select(u,{"true":{"extend":V,"statics":V,"members":V,"properties":V,"events":V},"default":null}),__i:qx.core.Environment.select(u,{"true":function(name,cb){if(qx.core.Environment.get(u)){var ca=this.__h;for(var bY in cb){if(ca[bY]===undefined){throw new Error(f+bY+B+name+h);}
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
(function(){var a="qx.lang.normalize.Date",b="ecmascript.date.now";qx.Bootstrap.define(a,{statics:{now:function(){return +new Date();}
},defer:function(c){if(!qx.core.Environment.get(b)){Date.now=c.now;}
;}
});}
)();
(function(){var b='!==inherit){',c='var msg = "Invalid incoming value for property \'',d='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',e='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',f="set",g="function",h=';',j="resetThemed",k='value !== null && value.nodeType === 9 && value.documentElement',m='===value)return value;',n='value !== null && value.$$type === "Mixin"',o='return init;',p='var init=this.',q=')prop.error(this,5,"',r='value !== null && value.nodeType === 1 && value.attributes',s="var parent = this.getLayoutParent();",t="Error in property ",u='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',v="property",w='.check.call(this, value)',x='if((computed===undefined||computed===inherit)&&',y="();",z='.validate.call(this, value);',A='qx.core.Assert.assertInstance(value, Date, msg) || true',B='else{',C="Cannot add the non themable property '",D="if (!parent) return;",E=" in method ",F='qx.core.Assert.assertInstance(value, Error, msg) || true',G='=computed;',H='Undefined value is not allowed!',I='(backup);',J='if(',K='else ',L='=true;',M="' to the themable property group '",N='if(old===undefined)old=this.',O='if(computed===inherit){',P='old=computed=this.',Q="]: ",R="inherit",S='if(this.',T='return this.',U='else if(this.',V='Is invalid!',W='if(value===undefined)prop.error(this,2,"',X='", "',Y='var computed, old=this.',ba='else if(computed===undefined)',bb="Malformed generated code to unwrap method: ",bc='delete this.',bd="resetRuntime",be="': ",bf=" of class ",bg='value !== null && value.nodeType !== undefined',bh='===undefined)return;',bi='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bj="Could not add check to property ",bk="reset",bl="string",bm="')){",bn="module.events",bo="return this.",bp='qx.core.Assert.assertPositiveInteger(value, msg) || true',bq="Code[",br='value=this.',bs="Cannot create property group '",bt='","',bu='if(init==qx.core.Property.$$inherit)init=null;',bv='qx.core.Assert.assertInArray(value, ',bw="get",bx='value !== null && value.$$type === "Interface"',by='var inherit=prop.$$inherit;',bz="', qx.event.type.Data, [computed, old]",bA="var value = parent.",bB="$$useinit_",bC='computed=undefined;delete this.',bD="(value);",bE='this.',bF='Requires exactly one argument!',bG='",value);',bH='computed=value;',bI='}else{',bJ="$$runtime_",bK="setThemed",bL='if(this.$$initialized)prop.error(this,0,"',bM='qx.core.Assert.assertInstance(value, qx.Class.getByName("',bN='(value);',bO="$$user_",bP='if(value===null)prop.error(this,4,"',bQ='!==undefined)',bR='){',bS='!',bT='qx.core.Assert.assertArray(value, msg) || true',bU='if(computed===undefined||computed===inherit){',bV=";",bW='qx.core.Assert.assertPositiveNumber(value, msg) || true',bX=".prototype",bY="' including non-existing property '",ca="Boolean",cb=")}",cc="(a[",cd='(computed, old, "',ce="setRuntime",cf='return value;',cg="this.",ch='.check, msg)',ci='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cj="if(reg.hasListener(this, '",ck='Does not allow any arguments!',cl='\'";',cm=')a[i].',cn="()",co=';}',cp="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cq='.$$properties.',cr='value !== null && value.$$type === "Theme"',cs='if(value!==null)',ct="'!",cu="var reg=qx.event.Registration;",cv="())",cw='=value;',cx='return null;',cy='!==undefined){',cz='qx.core.Assert.assertObject(value, msg) || true',cA='");',cB='if(old===computed)return value;',cC='qx.core.Assert.assertString(value, msg) || true',cD='!==undefined&&',cE="\n",cF='var pa=this.getLayoutParent();if(pa)computed=pa.',cG="if (value===undefined) value = parent.",cH='value !== null && value.$$type === "Class"',cI='qx.core.Assert.assertFunction(value, msg) || true',cJ='old=this.',cK='var computed, old;',cL='var backup=computed;',cM=".",cN='}',cO='"), msg)',cP="object",cQ="$$init_",cR='qx.core.Assert.assertInterface(value, qx.Interface.getByName("',cS="$$theme_",cT="qx.debug.property.level",cU='if(computed===undefined)computed=null;',cV='\' of class \'',cW="Unknown reason: ",cX='if(arguments.length!==1)prop.error(this,1,"',cY="init",da='qx.core.Assert.assertMap(value, msg) || true',db='!(',dc="Generating property wrappers: ",dd="'",de='qx.core.Assert.assertNumber(value, msg) || true',df="qx.debug",dg="reg.fireEvent(this, '",dh='Null value is not allowed!',di='if(value!==inherit)',dj='qx.core.Assert.assertInteger(value, msg) || true',dk="value",dl="shorthand",dm='computed=this.',dn="Generating property group: ",dp='qx.core.Assert.assertInstance(value, RegExp, msg) || true',dq='value !== null && value.type !== undefined',dr='value !== null && value.document',ds="",dt='throw new Error("Property ',du="(!this.",dv='qx.core.Assert.assertBoolean(value, msg) || true',dw='if(a[i].',dx="qx.aspects",dy=' of an instance of ',dz="toggle",dA="refresh",dB="$$inherit_",dC='var prop=qx.core.Property;',dD='else this.',dE='if(old===undefined)old=null;',dF="boolean",dG=" with incoming value '",dH=')',dI='if(arguments.length!==0)prop.error(this,3,"',dJ="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",dK='if(computed===undefined||computed==inherit)computed=null;',dL="qx.core.Property",dM="is",dN=' is not (yet) ready!");',dO="]);",dP='Could not change or apply init value after constructing phase!';qx.Bootstrap.define(dL,{statics:{__o:function(){if(qx.core.Environment.get(bn)){qx.event.type.Data;qx.event.dispatch.Direct;}
;}
,__p:{"Boolean":dv,"String":cC,"Number":de,"Integer":dj,"PositiveNumber":bW,"PositiveInteger":bp,"Error":F,"RegExp":dp,"Object":cz,"Array":bT,"Map":da,"Function":cI,"Date":A,"Node":bg,"Element":r,"Document":k,"Window":dr,"Event":dq,"Class":cH,"Mixin":n,"Interface":bx,"Theme":cr,"Color":d,"Decorator":bi,"Font":e},__q:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:R,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bl,dereference:dF,inheritable:dF,nullable:dF,themeable:dF,refine:dF,init:null,apply:bl,event:bl,check:null,transform:bl,deferredInit:dF,validate:null},$$allowedGroupKeys:{name:bl,group:cP,mode:bl,themeable:dF},$$inheritable:{},__r:function(dS){var dQ=this.__s(dS);if(!dQ.length){var dR=function(){}
;}
else {dR=this.__t(dQ);}
;dS.prototype.$$refreshInheritables=dR;}
,__s:function(dT){var dU=[];while(dT){var dV=dT.$$properties;if(dV){for(var name in this.$$inheritable){if(dV[name]&&dV[name].inheritable){dU.push(name);}
;}
;}
;dT=dT.superclass;}
;return dU;}
,__t:function(inheritables){var inherit=this.$$store.inherit;var init=this.$$store.init;var refresh=this.$$method.refresh;var code=[s,D];for(var i=0,l=inheritables.length;i<l;i++ ){var name=inheritables[i];code.push(bA,inherit[name],bV,cG,init[name],bV,cg,refresh[name],bD);}
;return new Function(code.join(ds));}
,attachRefreshInheritables:function(dW){dW.prototype.$$refreshInheritables=function(){qx.core.Property.__r(dW);return this.$$refreshInheritables();}
;}
,attachMethods:function(dY,name,dX){dX.group?this.__u(dY,dX,name):this.__v(dY,dX,name);}
,__u:function(clazz,config,name){var upname=qx.Bootstrap.firstUp(name);var members=clazz.prototype;var themeable=config.themeable===true;if(qx.core.Environment.get(df)){if(qx.core.Environment.get(cT)>1){qx.Bootstrap.debug(dn+name);}
;}
;var setter=[];var resetter=[];if(themeable){var styler=[];var unstyler=[];}
;var argHandler=cp;setter.push(argHandler);if(themeable){styler.push(argHandler);}
;if(config.mode==dl){var shorthand=dJ;setter.push(shorthand);if(themeable){styler.push(shorthand);}
;}
;for(var i=0,a=config.group,l=a.length;i<l;i++ ){if(qx.core.Environment.get(df)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error(bs+name+bY+a[i]+ct);}
;}
;setter.push(cg,this.$$method.set[a[i]],cc,i,dO);resetter.push(cg,this.$$method.reset[a[i]],y);if(themeable){if(qx.core.Environment.get(df)){if(!this.$$method.setThemed[a[i]]){throw new Error(C+a[i]+M+name+dd);}
;}
;styler.push(cg,this.$$method.setThemed[a[i]],cc,i,dO);unstyler.push(cg,this.$$method.resetThemed[a[i]],y);}
;}
;this.$$method.set[name]=f+upname;members[this.$$method.set[name]]=new Function(setter.join(ds));this.$$method.reset[name]=bk+upname;members[this.$$method.reset[name]]=new Function(resetter.join(ds));if(themeable){this.$$method.setThemed[name]=bK+upname;members[this.$$method.setThemed[name]]=new Function(styler.join(ds));this.$$method.resetThemed[name]=j+upname;members[this.$$method.resetThemed[name]]=new Function(unstyler.join(ds));}
;}
,__v:function(clazz,config,name){var upname=qx.Bootstrap.firstUp(name);var members=clazz.prototype;if(qx.core.Environment.get(df)){if(qx.core.Environment.get(cT)>1){qx.Bootstrap.debug(dc+name);}
;}
;if(config.dereference===undefined&&typeof config.check===bl){config.dereference=this.__w(config.check);}
;var method=this.$$method;var store=this.$$store;store.runtime[name]=bJ+name;store.user[name]=bO+name;store.theme[name]=cS+name;store.init[name]=cQ+name;store.inherit[name]=dB+name;store.useinit[name]=bB+name;method.get[name]=bw+upname;members[method.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bw);}
;method.set[name]=f+upname;members[method.set[name]]=function(ea){return qx.core.Property.executeOptimizedSetter(this,clazz,name,f,arguments);}
;method.reset[name]=bk+upname;members[method.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bk);}
;if(config.inheritable||config.apply||config.event||config.deferredInit){method.init[name]=cY+upname;members[method.init[name]]=function(eb){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cY,arguments);}
;if(qx.core.Environment.get(df)){members[method.init[name]].$$propertyMethod=true;}
;}
;if(config.inheritable){method.refresh[name]=dA+upname;members[method.refresh[name]]=function(ec){return qx.core.Property.executeOptimizedSetter(this,clazz,name,dA,arguments);}
;if(qx.core.Environment.get(df)){members[method.refresh[name]].$$propertyMethod=true;}
;}
;method.setRuntime[name]=ce+upname;members[method.setRuntime[name]]=function(ed){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ce,arguments);}
;method.resetRuntime[name]=bd+upname;members[method.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bd);}
;if(config.themeable){method.setThemed[name]=bK+upname;members[method.setThemed[name]]=function(ee){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bK,arguments);}
;method.resetThemed[name]=j+upname;members[method.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,j);}
;if(qx.core.Environment.get(df)){members[method.setThemed[name]].$$propertyMethod=true;members[method.resetThemed[name]].$$propertyMethod=true;}
;}
;if(config.check===ca){members[dz+upname]=new Function(bo+method.set[name]+du+method.get[name]+cv);members[dM+upname]=new Function(bo+method.get[name]+cn);if(qx.core.Environment.get(df)){members[dz+upname].$$propertyMethod=true;members[dM+upname].$$propertyMethod=true;}
;}
;if(qx.core.Environment.get(df)){members[method.get[name]].$$propertyMethod=true;members[method.set[name]].$$propertyMethod=true;members[method.reset[name]].$$propertyMethod=true;members[method.setRuntime[name]].$$propertyMethod=true;members[method.resetRuntime[name]].$$propertyMethod=true;}
;}
,__w:function(ef){return !!this.__q[ef];}
,__x:{'0':dP,'1':bF,'2':H,'3':ck,'4':dh,'5':V},error:function(eg,em,el,eh,ei){var ej=eg.constructor.classname;var ek=t+el+bf+ej+E+this.$$method[eh][el]+dG+ei+be;throw new Error(ek+(this.__x[em]||cW+em));}
,__y:function(instance,members,name,variant,code,args){var store=this.$$method[variant][name];if(qx.core.Environment.get(df)){if(qx.core.Environment.get(cT)>1){qx.Bootstrap.debug(bq+this.$$method[variant][name]+Q+code.join(ds));}
;try{members[store]=new Function(dk,code.join(ds));}
catch(en){throw new Error(bb+this.$$method[variant][name]+cE+code.join(ds));}
;}
else {members[store]=new Function(dk,code.join(ds));}
;if(qx.core.Environment.get(dx)){members[store]=qx.core.Aspect.wrap(instance.classname+cM+store,members[store],v);}
;qx.Bootstrap.setDisplayName(members[store],instance.classname+bX,store);if(args===undefined){return instance[store]();}
else if(qx.core.Environment.get(df)){return instance[store].apply(instance,args);}
else {return instance[store](args[0]);}
;}
,executeOptimizedGetter:function(er,eq,name,ep){var et=eq.$$properties[name];var es=eq.prototype;var eo=[];var eu=this.$$store;eo.push(S,eu.runtime[name],bQ);eo.push(T,eu.runtime[name],h);if(et.inheritable){eo.push(U,eu.inherit[name],bQ);eo.push(T,eu.inherit[name],h);eo.push(K);}
;eo.push(S,eu.user[name],bQ);eo.push(T,eu.user[name],h);if(et.themeable){eo.push(U,eu.theme[name],bQ);eo.push(T,eu.theme[name],h);}
;if(et.deferredInit&&et.init===undefined){eo.push(U,eu.init[name],bQ);eo.push(T,eu.init[name],h);}
;eo.push(K);if(et.init!==undefined){if(et.inheritable){eo.push(p,eu.init[name],h);if(et.nullable){eo.push(bu);}
else if(et.init!==undefined){eo.push(T,eu.init[name],h);}
else {eo.push(ci,name,dy,eq.classname,dN);}
;eo.push(o);}
else {eo.push(T,eu.init[name],h);}
;}
else if(et.inheritable||et.nullable){eo.push(cx);}
else {eo.push(dt,name,dy,eq.classname,dN);}
;return this.__y(er,es,name,ep,eo);}
,executeOptimizedSetter:function(eC,eB,name,eA,ez){var eE=eB.$$properties[name];var eD=eB.prototype;var ew=[];var ev=eA===f||eA===bK||eA===ce||(eA===cY&&eE.init===undefined);var ey=eE.apply||eE.event||eE.inheritable;var eF=this.__z(eA,name);this.__A(ew,eE,name,eA,ev);if(ev){this.__B(ew,eB,eE,name);}
;if(ey){this.__C(ew,ev,eF,eA);}
;if(eE.inheritable){ew.push(by);}
;if(qx.core.Environment.get(df)){if(ev){this.__D(ew,eE,eB,name,eA);}
;}
;if(!ey){this.__E(ew,name,eA,ev);}
else {this.__F(ew,eE,name,eA,ev);}
;if(eE.inheritable){this.__G(ew,eE,name,eA);}
else if(ey){this.__H(ew,eE,name,eA);}
;if(ey){this.__I(ew,eE,name,eA);if(eE.inheritable&&eD._getChildren){this.__J(ew,name);}
;}
;if(ev){ew.push(cf);}
;return this.__y(eC,eD,name,eA,ew,ez);}
,__z:function(eG,name){if(eG===ce||eG===bd){var eH=this.$$store.runtime[name];}
else if(eG===bK||eG===j){eH=this.$$store.theme[name];}
else if(eG===cY){eH=this.$$store.init[name];}
else {eH=this.$$store.user[name];}
;return eH;}
,__A:function(eK,eI,name,eL,eJ){if(qx.core.Environment.get(df)){eK.push(dC);if(eL===cY){eK.push(bL,name,bt,eL,bG);}
;if(eL===dA){}
else if(eJ){eK.push(cX,name,bt,eL,bG);eK.push(W,name,bt,eL,bG);}
else {eK.push(dI,name,bt,eL,bG);}
;}
else {if(!eI.nullable||eI.check||eI.inheritable){eK.push(dC);}
;if(eL===f){eK.push(W,name,bt,eL,bG);}
;}
;}
,__B:function(eM,eO,eN,name){if(eN.transform){eM.push(br,eN.transform,bN);}
;if(eN.validate){if(typeof eN.validate===bl){eM.push(bE,eN.validate,bN);}
else if(eN.validate instanceof Function){eM.push(eO.classname,cq,name);eM.push(z);}
;}
;}
,__C:function(eQ,eP,eS,eR){var eT=(eR===bk||eR===j||eR===bd);if(eP){eQ.push(S,eS,m);}
else if(eT){eQ.push(S,eS,bh);}
;}
,__D:qx.core.Environment.select(df,{"true":function(eV,eU,eX,name,eW){if(!eU.nullable){eV.push(bP,name,bt,eW,bG);}
;if(eU.check!==undefined){eV.push(c+name+cV+eX.classname+cl);if(eU.nullable){eV.push(cs);}
;if(eU.inheritable){eV.push(di);}
;eV.push(J);if(this.__p[eU.check]!==undefined){eV.push(db,this.__p[eU.check],dH);}
else if(qx.Class.isDefined(eU.check)){eV.push(bM,eU.check,cO);}
else if(qx.Interface&&qx.Interface.isDefined(eU.check)){eV.push(cR,eU.check,cO);}
else if(typeof eU.check===g){eV.push(bS,eX.classname,cq,name);eV.push(w);}
else if(typeof eU.check===bl){eV.push(db,eU.check,dH);}
else if(eU.check instanceof Array){eV.push(bv,eX.classname,cq,name,ch);}
else {throw new Error(bj+name+bf+eX.classname);}
;eV.push(q,name,bt,eW,bG);}
;}
,"false":undefined}),__E:function(fa,name,fb,eY){if(fb===ce){fa.push(bE,this.$$store.runtime[name],cw);}
else if(fb===bd){fa.push(S,this.$$store.runtime[name],bQ);fa.push(bc,this.$$store.runtime[name],h);}
else if(fb===f){fa.push(bE,this.$$store.user[name],cw);}
else if(fb===bk){fa.push(S,this.$$store.user[name],bQ);fa.push(bc,this.$$store.user[name],h);}
else if(fb===bK){fa.push(bE,this.$$store.theme[name],cw);}
else if(fb===j){fa.push(S,this.$$store.theme[name],bQ);fa.push(bc,this.$$store.theme[name],h);}
else if(fb===cY&&eY){fa.push(bE,this.$$store.init[name],cw);}
;}
,__F:function(fe,fc,name,ff,fd){if(fc.inheritable){fe.push(Y,this.$$store.inherit[name],h);}
else {fe.push(cK);}
;fe.push(S,this.$$store.runtime[name],cy);if(ff===ce){fe.push(dm,this.$$store.runtime[name],cw);}
else if(ff===bd){fe.push(bc,this.$$store.runtime[name],h);fe.push(S,this.$$store.user[name],bQ);fe.push(dm,this.$$store.user[name],h);fe.push(U,this.$$store.theme[name],bQ);fe.push(dm,this.$$store.theme[name],h);fe.push(U,this.$$store.init[name],cy);fe.push(dm,this.$$store.init[name],h);fe.push(bE,this.$$store.useinit[name],L);fe.push(cN);}
else {fe.push(P,this.$$store.runtime[name],h);if(ff===f){fe.push(bE,this.$$store.user[name],cw);}
else if(ff===bk){fe.push(bc,this.$$store.user[name],h);}
else if(ff===bK){fe.push(bE,this.$$store.theme[name],cw);}
else if(ff===j){fe.push(bc,this.$$store.theme[name],h);}
else if(ff===cY&&fd){fe.push(bE,this.$$store.init[name],cw);}
;}
;fe.push(cN);fe.push(U,this.$$store.user[name],cy);if(ff===f){if(!fc.inheritable){fe.push(cJ,this.$$store.user[name],h);}
;fe.push(dm,this.$$store.user[name],cw);}
else if(ff===bk){if(!fc.inheritable){fe.push(cJ,this.$$store.user[name],h);}
;fe.push(bc,this.$$store.user[name],h);fe.push(S,this.$$store.runtime[name],bQ);fe.push(dm,this.$$store.runtime[name],h);fe.push(S,this.$$store.theme[name],bQ);fe.push(dm,this.$$store.theme[name],h);fe.push(U,this.$$store.init[name],cy);fe.push(dm,this.$$store.init[name],h);fe.push(bE,this.$$store.useinit[name],L);fe.push(cN);}
else {if(ff===ce){fe.push(dm,this.$$store.runtime[name],cw);}
else if(fc.inheritable){fe.push(dm,this.$$store.user[name],h);}
else {fe.push(P,this.$$store.user[name],h);}
;if(ff===bK){fe.push(bE,this.$$store.theme[name],cw);}
else if(ff===j){fe.push(bc,this.$$store.theme[name],h);}
else if(ff===cY&&fd){fe.push(bE,this.$$store.init[name],cw);}
;}
;fe.push(cN);if(fc.themeable){fe.push(U,this.$$store.theme[name],cy);if(!fc.inheritable){fe.push(cJ,this.$$store.theme[name],h);}
;if(ff===ce){fe.push(dm,this.$$store.runtime[name],cw);}
else if(ff===f){fe.push(dm,this.$$store.user[name],cw);}
else if(ff===bK){fe.push(dm,this.$$store.theme[name],cw);}
else if(ff===j){fe.push(bc,this.$$store.theme[name],h);fe.push(S,this.$$store.init[name],cy);fe.push(dm,this.$$store.init[name],h);fe.push(bE,this.$$store.useinit[name],L);fe.push(cN);}
else if(ff===cY){if(fd){fe.push(bE,this.$$store.init[name],cw);}
;fe.push(dm,this.$$store.theme[name],h);}
else if(ff===dA){fe.push(dm,this.$$store.theme[name],h);}
;fe.push(cN);}
;fe.push(U,this.$$store.useinit[name],bR);if(!fc.inheritable){fe.push(cJ,this.$$store.init[name],h);}
;if(ff===cY){if(fd){fe.push(dm,this.$$store.init[name],cw);}
else {fe.push(dm,this.$$store.init[name],h);}
;}
else if(ff===f||ff===ce||ff===bK||ff===dA){fe.push(bc,this.$$store.useinit[name],h);if(ff===ce){fe.push(dm,this.$$store.runtime[name],cw);}
else if(ff===f){fe.push(dm,this.$$store.user[name],cw);}
else if(ff===bK){fe.push(dm,this.$$store.theme[name],cw);}
else if(ff===dA){fe.push(dm,this.$$store.init[name],h);}
;}
;fe.push(cN);if(ff===f||ff===ce||ff===bK||ff===cY){fe.push(B);if(ff===ce){fe.push(dm,this.$$store.runtime[name],cw);}
else if(ff===f){fe.push(dm,this.$$store.user[name],cw);}
else if(ff===bK){fe.push(dm,this.$$store.theme[name],cw);}
else if(ff===cY){if(fd){fe.push(dm,this.$$store.init[name],cw);}
else {fe.push(dm,this.$$store.init[name],h);}
;fe.push(bE,this.$$store.useinit[name],L);}
;fe.push(cN);}
;}
,__G:function(fh,fg,name,fi){fh.push(bU);if(fi===dA){fh.push(bH);}
else {fh.push(cF,this.$$store.inherit[name],h);}
;fh.push(x);fh.push(bE,this.$$store.init[name],cD);fh.push(bE,this.$$store.init[name],b);fh.push(dm,this.$$store.init[name],h);fh.push(bE,this.$$store.useinit[name],L);fh.push(bI);fh.push(bc,this.$$store.useinit[name],co);fh.push(cN);fh.push(cB);fh.push(O);fh.push(bC,this.$$store.inherit[name],h);fh.push(cN);fh.push(ba);fh.push(bc,this.$$store.inherit[name],h);fh.push(dD,this.$$store.inherit[name],G);fh.push(cL);if(fg.init!==undefined&&fi!==cY){fh.push(N,this.$$store.init[name],bV);}
else {fh.push(dE);}
;fh.push(dK);}
,__H:function(fk,fj,name,fl){if(fl!==f&&fl!==ce&&fl!==bK){fk.push(cU);}
;fk.push(cB);if(fj.init!==undefined&&fl!==cY){fk.push(N,this.$$store.init[name],bV);}
else {fk.push(dE);}
;}
,__I:function(fn,fm,name,fo){if(fm.apply){fn.push(bE,fm.apply,cd,name,X,fo,cA);}
;if(fm.event){fn.push(cu,cj,fm.event,bm,dg,fm.event,bz,cb);}
;}
,__J:function(fp,name){fp.push(u);fp.push(dw,this.$$method.refresh[name],cm,this.$$method.refresh[name],I);fp.push(cN);}
}});}
)();
(function(){var b=': ',c="The mixin to include into class '",d="constructor",e="' is abstract! It is not possible to instantiate it.",f="environment",g='"! The value is undefined: ',h="Property module disabled.",j='Invalid check definition of property "',k="singleton",m="qx.event.type.Data",n='Forbidden environment setting "',o='". It is forbidden to define a default setting for an external namespace!',p=": the event value needs to be a string with the class name of the event object which will be fired.",q='Invalid include definition in class "',r=" could not refine property: ",s='Invalid config in class "',t="toString",u="! Key: ",v="events",w='Invalid type of key "',x='Invalid transform definition of property "',y='" in class "',z="Interface",A="Please initialize '",B='Assumed static class because no "extend" key was found. ',C="'.",D="' objects using the new keyword!",E=": the event value/type cannot be changed from ",F="destructor",G="destruct",H='"! The value is undefined/null!',I='" of Class "',J='" contains an invalid mixin at position ',K="Could not refine an init value if there was previously no init value defined. Property '",L='" of property "',M='Interface "',N="extend",O="module.property",P='Error in include definition of class "',Q="string",R='Overwriting member "',S="module.events",T='" definition for class "',U="members",V='". It is forbidden to define a ',W="' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.",X=" already has a property: ",Y="Events module not enabled.",cy="The mixin to patch class '",cz="' of class: '",cA='"!',cu='"extend" parameter is null or undefined',cv='.',cw="' is undefined/null!",cx=" could not be refined!",cF="Could not refine non-existent property: '",cG=".prototype",cM="function",cH='The configuration key "',cB='" is not allowed!',cC=": the events must be defined as map!",cD="static",cE='"! The type of the key must be "',cL='extend',dp="refine",dO="!",cN="properties",cI="'!",cJ='"! ',dK="_",cK="The class '",cO="Class",cP='"! The value needs to be a map!',cQ='Forbidden variant "',cV='"! Needs to be a String.',cW='"! Only interfaces and arrays of interfaces are allowed!',cX='The include definition in class "',cR='Overwriting generated property method "',cS='" found in "',cT=".",cU='". It is forbidden to define a variant for an external namespace!',dc="object",dd="$$init_",de='"! Only mixins and arrays of mixins are allowed!',df='!',cY='"! Needs to be a String, Array or Function.',da='"! Every non-static class has to extend at least the "qx.core.Object" class.',dL="init",db='" without a "refine" flag in the property definition! This class: ',dj="qx.aspects",dk="Incomplete parameters!",dN='" contains an invalid interface at position ',dl="Class ",dg="Array",dh="variants",dM='The implement definition in class "',di='" is already used by Class "',dm='Overwriting private member "',dn='Invalid type "',dA="/",dz="statics",dy='Invalid key "',dE=" to ",dD="' of class '",dC="",dB="]",dt="member",ds=', original class: ',dr="qx.Class",dq='Could not refine property "',dx="Mixin",dw="settings",dv="[Class ",du="abstract",dI='environment setting for an external namespace!',dH="The class ',",dG='Invalid implement definition in class "',dF="qx.debug",dJ='Forbidden setting "';qx.Bootstrap.define(dr,{statics:{__K:qx.core.Environment.get(O)?qx.core.Property:null,define:function(name,dS){if(!dS){dS={};}
;if(dS.include&&!(qx.Bootstrap.getClass(dS.include)===dg)){dS.include=[dS.include];}
;if(dS.implement&&!(qx.Bootstrap.getClass(dS.implement)===dg)){dS.implement=[dS.implement];}
;var dP=false;if(!dS.hasOwnProperty(N)&&!dS.type){dS.type=cD;dP=true;}
;if(qx.core.Environment.get(dF)){try{this.__i(name,dS);}
catch(dT){if(dP){dT.message=B+dT.message;}
;throw dT;}
;}
;var dQ=this.__N(name,dS.type,dS.extend,dS.statics,dS.construct,dS.destruct,dS.include);if(dS.extend){if(dS.properties){this.__P(dQ,dS.properties,true);}
;if(dS.members){this.__R(dQ,dS.members,true,true,false);}
;if(dS.events){this.__O(dQ,dS.events,true);}
;if(dS.include){for(var i=0,l=dS.include.length;i<l;i++ ){this.__V(dQ,dS.include[i],false);}
;}
;}
else if(dS.hasOwnProperty(cL)&&qx.core.Environment.get(dF)){throw new Error(cu);}
;if(dS.environment){for(var dR in dS.environment){qx.core.Environment.add(dR,dS.environment[dR]);}
;}
;if(dS.implement){for(var i=0,l=dS.implement.length;i<l;i++ ){this.__T(dQ,dS.implement[i]);}
;}
;if(qx.core.Environment.get(dF)){this.__M(dQ);}
;if(dS.defer){dS.defer.self=dQ;dS.defer(dQ,dQ.prototype,{add:function(name,dU){var dV={};dV[name]=dU;qx.Class.__P(dQ,dV,true);}
});}
;return dQ;}
,undefine:function(name){delete this.$$registry[name];var dY=name.split(cT);var dX=[window];for(var i=0;i<dY.length;i++ ){dX.push(dX[i][dY[i]]);}
;for(var i=dX.length-1;i>=1;i-- ){var dW=dX[i];var parent=dX[i-1];if(qx.Bootstrap.isFunction(dW)||qx.Bootstrap.objectGetLength(dW)===0){delete parent[dY[i-1]];}
else {break;}
;}
;}
,isDefined:qx.util.OOUtil.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,getByName:qx.Bootstrap.getByName,include:function(eb,ea){if(qx.core.Environment.get(dF)){if(!ea){throw new Error(c+eb.classname+cw);}
;qx.Mixin.isCompatible(ea,eb);}
;qx.Class.__V(eb,ea,false);}
,patch:function(ed,ec){if(qx.core.Environment.get(dF)){if(!ec){throw new Error(cy+ed.classname+cw);}
;qx.Mixin.isCompatible(ec,ed);}
;qx.Class.__V(ed,ec,true);}
,isSubClassOf:function(ef,ee){if(!ef){return false;}
;if(ef==ee){return true;}
;if(ef.prototype instanceof ee){return true;}
;return false;}
,getPropertyDefinition:qx.util.OOUtil.getPropertyDefinition,getProperties:function(eh){var eg=[];while(eh){if(eh.$$properties){eg.push.apply(eg,Object.keys(eh.$$properties));}
;eh=eh.superclass;}
;return eg;}
,getByProperty:function(ei,name){while(ei){if(ei.$$properties&&ei.$$properties[name]){return ei;}
;ei=ei.superclass;}
;return null;}
,hasProperty:qx.util.OOUtil.hasProperty,getEventType:qx.util.OOUtil.getEventType,supportsEvent:qx.util.OOUtil.supportsEvent,hasOwnMixin:function(ek,ej){return ek.$$includes&&ek.$$includes.indexOf(ej)!==-1;}
,getByMixin:function(en,em){var el,i,l;while(en){if(en.$$includes){el=en.$$flatIncludes;for(i=0,l=el.length;i<l;i++ ){if(el[i]===em){return en;}
;}
;}
;en=en.superclass;}
;return null;}
,getMixins:qx.util.OOUtil.getMixins,hasMixin:function(ep,eo){return !!this.getByMixin(ep,eo);}
,hasOwnInterface:function(er,eq){return er.$$implements&&er.$$implements.indexOf(eq)!==-1;}
,getByInterface:qx.util.OOUtil.getByInterface,getInterfaces:function(et){var es=[];while(et){if(et.$$implements){es.push.apply(es,et.$$flatImplements);}
;et=et.superclass;}
;return es;}
,hasInterface:qx.util.OOUtil.hasInterface,implementsInterface:function(ev,eu){var ew=ev.constructor;if(this.hasInterface(ew,eu)){return true;}
;if(qx.Interface.objectImplements(ev,eu)){return true;}
;if(qx.Interface.classImplements(ew,eu)){return true;}
;return false;}
,getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;this.$$instance=new this();delete this.$$allowconstruct;}
;return this.$$instance;}
,genericToString:function(){return dv+this.classname+dB;}
,$$registry:qx.Bootstrap.$$registry,__h:qx.core.Environment.select(dF,{"true":{"type":Q,"extend":cM,"implement":dc,"include":dc,"construct":cM,"statics":dc,"properties":dc,"members":dc,"environment":dc,"events":dc,"defer":cM,"destruct":cM},"default":null}),__L:qx.core.Environment.select(dF,{"true":{"type":Q,"statics":dc,"environment":dc,"defer":cM},"default":null}),__i:qx.core.Environment.select(dF,{"true":function(name,eB){if(eB.type&&!(eB.type===cD||eB.type===du||eB.type===k)){throw new Error(dn+eB.type+T+name+cA);}
;if(eB.type&&eB.type!==cD&&!eB.extend){throw new Error(s+name+da);}
;var eA=eB.type===cD?this.__L:this.__h;for(var ez in eB){if(!eA[ez]){throw new Error(cH+ez+y+name+cB);}
;if(eB[ez]==null){throw new Error(dy+ez+y+name+H);}
;if(typeof eB[ez]!==eA[ez]){throw new Error(w+ez+y+name+cE+eA[ez]+cA);}
;}
;var ey=[dz,cN,U,f,dw,dh,v];for(var i=0,l=ey.length;i<l;i++ ){var ez=ey[i];if(eB[ez]!==undefined&&(eB[ez].$$hash!==undefined||!qx.Bootstrap.isObject(eB[ez]))){throw new Error(dy+ez+y+name+cP);}
;}
;if(eB.include){if(qx.Bootstrap.getClass(eB.include)===dg){for(var i=0,a=eB.include,l=a.length;i<l;i++ ){if(a[i]==null||a[i].$$type!==dx){throw new Error(cX+name+J+i+b+a[i]);}
;}
;}
else {throw new Error(q+name+de);}
;}
;if(eB.implement){if(qx.Bootstrap.getClass(eB.implement)===dg){for(var i=0,a=eB.implement,l=a.length;i<l;i++ ){if(a[i]==null||a[i].$$type!==z){throw new Error(dM+name+dN+i+b+a[i]);}
;}
;}
else {throw new Error(dG+name+cW);}
;}
;if(eB.include){try{qx.Mixin.checkCompatibility(eB.include);}
catch(eC){throw new Error(P+name+cJ+eC.message);}
;}
;if(eB.environment){for(var ez in eB.environment){if(ez.substr(0,ez.indexOf(cT))!=name.substr(0,name.indexOf(cT))){throw new Error(n+ez+cS+name+V+dI);}
;}
;}
;if(eB.settings){for(var ez in eB.settings){if(ez.substr(0,ez.indexOf(cT))!=name.substr(0,name.indexOf(cT))){throw new Error(dJ+ez+cS+name+o);}
;}
;}
;if(eB.variants){for(var ez in eB.variants){if(ez.substr(0,ez.indexOf(cT))!=name.substr(0,name.indexOf(cT))){throw new Error(cQ+ez+cS+name+cU);}
;}
;}
;}
,"default":function(name,eD){}
}),__M:qx.core.Environment.select(dF,{"true":function(eG){var eF=eG.superclass;while(eF){if(eF.$$classtype!==du){break;}
;var eE=eF.$$implements;if(eE){for(var i=0;i<eE.length;i++ ){qx.Interface.assert(eG,eE[i],true);}
;}
;eF=eF.superclass;}
;}
,"default":function(eH){}
}),__N:function(name,eR,eQ,eI,eO,eM,eL){var eN;if(!eQ&&qx.core.Environment.get(dj)==false){eN=eI||{};qx.Bootstrap.setDisplayNames(eN,name);}
else {eN={};if(eQ){if(!eO){eO=this.__W();}
;if(this.__Y(eQ,eL)){eN=this.__ba(eO,name,eR);}
else {eN=eO;}
;if(eR===k){eN.getInstance=this.getInstance;}
;qx.Bootstrap.setDisplayName(eO,name,d);}
;if(eI){qx.Bootstrap.setDisplayNames(eI,name);var eP;for(var i=0,a=Object.keys(eI),l=a.length;i<l;i++ ){eP=a[i];var eJ=eI[eP];if(qx.core.Environment.get(dj)){if(eJ instanceof Function){eJ=qx.core.Aspect.wrap(name+cT+eP,eJ,cD);}
;eN[eP]=eJ;}
else {eN[eP]=eJ;}
;}
;}
;}
;var eK=name?qx.Bootstrap.createNamespace(name,eN):dC;eN.name=eN.classname=name;eN.basename=eK;eN.$$type=cO;if(eR){eN.$$classtype=eR;}
;if(!eN.hasOwnProperty(t)){eN.toString=this.genericToString;}
;if(eQ){qx.Bootstrap.extendClass(eN,eO,eQ,name,eK);if(eM){if(qx.core.Environment.get(dj)){eM=qx.core.Aspect.wrap(name,eM,F);}
;eN.$$destructor=eM;qx.Bootstrap.setDisplayName(eM,name,G);}
;}
;this.$$registry[name]=eN;return eN;}
,__O:function(eS,eT,eV){if(qx.core.Environment.get(dF)){if(typeof eT!==dc||qx.Bootstrap.getClass(eT)===dg){throw new Error(eS.classname+cC);}
;for(var eU in eT){if(typeof eT[eU]!==Q){throw new Error(eS.classname+dA+eU+p);}
;}
;if(eS.$$events&&eV!==true){for(var eU in eT){if(eS.$$events[eU]!==undefined&&eS.$$events[eU]!==eT[eU]){throw new Error(eS.classname+dA+eU+E+eS.$$events[eU]+dE+eT[eU]);}
;}
;}
;}
;if(eS.$$events){for(var eU in eT){eS.$$events[eU]=eT[eU];}
;}
else {eS.$$events=eT;}
;}
,__P:function(eX,fb,eY){if(!qx.core.Environment.get(O)){throw new Error(h);}
;var fa;if(eY===undefined){eY=false;}
;var eW=eX.prototype;for(var name in fb){fa=fb[name];if(qx.core.Environment.get(dF)){this.__Q(eX,name,fa,eY);}
;fa.name=name;if(!fa.refine){if(eX.$$properties===undefined){eX.$$properties={};}
;eX.$$properties[name]=fa;}
;if(fa.init!==undefined){eX.prototype[dd+name]=fa.init;}
;if(fa.event!==undefined){if(!qx.core.Environment.get(S)){throw new Error(Y);}
;var event={};event[fa.event]=m;this.__O(eX,event,eY);}
;if(fa.inheritable){this.__K.$$inheritable[name]=true;if(!eW.$$refreshInheritables){this.__K.attachRefreshInheritables(eX);}
;}
;if(!fa.refine){this.__K.attachMethods(eX,name,fa);}
;}
;}
,__Q:qx.core.Environment.select(dF,{"true":function(fc,name,fi,fe){if(!qx.core.Environment.get(O)){throw new Error(h);}
;var fh=this.hasProperty(fc,name);if(fh){var fd=this.getPropertyDefinition(fc,name);if(fi.refine&&fd.init===undefined){throw new Error(K+name+dD+fc.classname+C);}
;}
;if(!fh&&fi.refine){throw new Error(cF+name+cz+fc.classname+cI);}
;if(fh&&!fe){throw new Error(dl+fc.classname+X+name+dO);}
;if(fh&&fe){if(!fi.refine){throw new Error(dq+name+db+fc.classname+ds+this.getByProperty(fc,name).classname+cv);}
;for(var ff in fi){if(ff!==dL&&ff!==dp){throw new Error(dl+fc.classname+r+name+u+ff+cx);}
;}
;}
;var fg=fi.group?this.__K.$$allowedGroupKeys:this.__K.$$allowedKeys;for(var ff in fi){if(fg[ff]===undefined){throw new Error(cH+ff+L+name+y+fc.classname+cB);}
;if(fi[ff]===undefined){throw new Error(dy+ff+L+name+y+fc.classname+g+fi[ff]);}
;if(fg[ff]!==null&&typeof fi[ff]!==fg[ff]){throw new Error(w+ff+L+name+y+fc.classname+cE+fg[ff]+cA);}
;}
;if(fi.transform!=null){if(!(typeof fi.transform==Q)){throw new Error(x+name+y+fc.classname+cV);}
;}
;if(fi.check!=null){if(!qx.Bootstrap.isString(fi.check)&&!qx.Bootstrap.isArray(fi.check)&&!qx.Bootstrap.isFunction(fi.check)){throw new Error(j+name+y+fc.classname+cY);}
;}
;}
,"default":null}),__R:function(fq,fj,fl,fn,fp){var fk=fq.prototype;var fo,fm;qx.Bootstrap.setDisplayNames(fj,fq.classname+cG);for(var i=0,a=Object.keys(fj),l=a.length;i<l;i++ ){fo=a[i];fm=fj[fo];if(qx.core.Environment.get(dF)){if(fk[fo]!==undefined&&fo.charAt(0)==dK&&fo.charAt(1)==dK){throw new Error(dm+fo+I+fq.classname+cB);}
;if(fl!==true&&fk.hasOwnProperty(fo)){throw new Error(R+fo+I+fq.classname+cB);}
;if(fk[fo]!=undefined&&fk[fo].$$propertyMethod){throw new Error(cR+fo+I+fq.classname+cB);}
;}
;if(fn!==false&&fm instanceof Function&&fm.$$type==null){if(fp==true){fm=this.__S(fm,fk[fo]);}
else {if(fk[fo]){fm.base=fk[fo];}
;fm.self=fq;}
;if(qx.core.Environment.get(dj)){fm=qx.core.Aspect.wrap(fq.classname+cT+fo,fm,dt);}
;}
;fk[fo]=fm;}
;}
,__S:function(fr,fs){if(fs){return function(){var fu=fr.base;fr.base=fs;var ft=fr.apply(this,arguments);fr.base=fu;return ft;}
;}
else {return fr;}
;}
,__T:function(fx,fv){if(qx.core.Environment.get(dF)){if(!fx||!fv){throw new Error(dk);}
;if(this.hasOwnInterface(fx,fv)){throw new Error(M+fv.name+di+fx.classname+df);}
;if(fx.$$classtype!==du){qx.Interface.assert(fx,fv,true);}
;}
;var fw=qx.Interface.flatten([fv]);if(fx.$$implements){fx.$$implements.push(fv);fx.$$flatImplements.push.apply(fx.$$flatImplements,fw);}
else {fx.$$implements=[fv];fx.$$flatImplements=fw;}
;}
,__U:function(fz){var name=fz.classname;var fy=this.__ba(fz,name,fz.$$classtype);for(var i=0,a=Object.keys(fz),l=a.length;i<l;i++ ){fA=a[i];fy[fA]=fz[fA];}
;fy.prototype=fz.prototype;var fC=fz.prototype;for(var i=0,a=Object.keys(fC),l=a.length;i<l;i++ ){fA=a[i];var fD=fC[fA];if(fD&&fD.self==fz){fD.self=fy;}
;}
;for(var fA in this.$$registry){var fB=this.$$registry[fA];if(!fB){continue;}
;if(fB.base==fz){fB.base=fy;}
;if(fB.superclass==fz){fB.superclass=fy;}
;if(fB.$$original){if(fB.$$original.base==fz){fB.$$original.base=fy;}
;if(fB.$$original.superclass==fz){fB.$$original.superclass=fy;}
;}
;}
;qx.Bootstrap.createNamespace(name,fy);this.$$registry[name]=fy;return fy;}
,__V:function(fJ,fH,fG){if(qx.core.Environment.get(dF)){if(!fJ||!fH){throw new Error(dk);}
;}
;if(this.hasMixin(fJ,fH)){return;}
;var fE=fJ.$$original;if(fH.$$constructor&&!fE){fJ=this.__U(fJ);}
;var fF=qx.Mixin.flatten([fH]);var fI;for(var i=0,l=fF.length;i<l;i++ ){fI=fF[i];if(fI.$$events){this.__O(fJ,fI.$$events,fG);}
;if(fI.$$properties){this.__P(fJ,fI.$$properties,fG);}
;if(fI.$$members){this.__R(fJ,fI.$$members,fG,fG,fG);}
;}
;if(fJ.$$includes){fJ.$$includes.push(fH);fJ.$$flatIncludes.push.apply(fJ.$$flatIncludes,fF);}
else {fJ.$$includes=[fH];fJ.$$flatIncludes=fF;}
;}
,__W:function(){function fK(){fK.base.apply(this,arguments);}
;return fK;}
,__X:function(){return function(){}
;}
,__Y:function(fM,fL){if(qx.core.Environment.get(dF)){return true;}
;if(fM&&fM.$$includes){var fN=fM.$$flatIncludes;for(var i=0,l=fN.length;i<l;i++ ){if(fN[i].$$constructor){return true;}
;}
;}
;if(fL){var fO=qx.Mixin.flatten(fL);for(var i=0,l=fO.length;i<l;i++ ){if(fO[i].$$constructor){return true;}
;}
;}
;return false;}
,__ba:function(fQ,name,fP){var fS=function(){var fV=fS;if(qx.core.Environment.get(dF)){if(!(this instanceof fV)){throw new Error(A+name+D);}
;if(fP===du){if(this.classname===name){throw new Error(dH+name+e);}
;}
else if(fP===k){if(!fV.$$allowconstruct){throw new Error(cK+name+W);}
;}
;}
;var fT=fV.$$original.apply(this,arguments);if(fV.$$includes){var fU=fV.$$flatIncludes;for(var i=0,l=fU.length;i<l;i++ ){if(fU[i].$$constructor){fU[i].$$constructor.apply(this,arguments);}
;}
;}
;if(qx.core.Environment.get(dF)){if(this.classname===name){this.$$initialized=true;}
;}
;return fT;}
;if(qx.core.Environment.get(dj)){var fR=qx.core.Aspect.wrap(name,fS,d);fS.$$original=fQ;fS.constructor=fR;fS=fR;}
;fS.$$original=fQ;fQ.wrapper=fS;return fS;}
},defer:function(){if(qx.core.Environment.get(dj)){for(var fW in qx.Bootstrap.$$registry){var fX=qx.Bootstrap.$$registry[fW];for(var fY in fX){if(fX[fY] instanceof Function){fX[fY]=qx.core.Aspect.wrap(fW+cT+fY,fX[fY],cD);}
;}
;}
;}
;}
});}
)();
(function(){var a="qx.data.MBinding";qx.Mixin.define(a,{members:{bind:function(b,e,c,d){return qx.data.SingleValueBinding.bind(this,b,e,c,d);}
,removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);}
,removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);}
,getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);}
}});}
)();
(function(){var a="qx.debug.databinding",b=". Error message: ",c="Boolean",d="Data after conversion: ",f="set",g="deepBinding",h=")",k=") to the object '",l="item",m="Can not remove the bindings for null object!",n="Please use only one array at a time: ",p="Binding executed from ",q="Integer",r="reset",s=" of object ",t="qx.event.type.Data",u="qx.data.SingleValueBinding",v="No number or 'last' value hast been given",w="Binding property ",x="Failed so set value ",y="change",z="qx.debug",A="targetObject",B="targetPropertyChain",C="get",D="^",E="Binding could not be found!",F="sourceObject",G="String",H=" to ",I="Binding from '",J="",K="sourcePropertyChain",L="PositiveNumber",M="Data before conversion: ",N="]",O="[",P=".",Q="PositiveInteger",R="' (",S=" on ",T="Binding does not exist!",U=" does not work.",V=" in an array binding: ",W=" is not an data (qx.event.type.Data) event on ",X=").",Y=" (",bh=" by ",bi="Date",bj="Number",bf=" not possible: No event available. ",bg="last";qx.Class.define(u,{statics:{__bb:{},bind:function(bn,bA,by,bp,bx){if(qx.core.Environment.get(z)){qx.core.Assert.assertObject(bn,F);qx.core.Assert.assertString(bA,K);qx.core.Assert.assertObject(by,A);qx.core.Assert.assertString(bp,B);}
;var bB=this.__bd(bn,bA,by,bp,bx);var br=bA.split(P);var bm=this.__bj(br);var bv=[];var bq=[];var bs=[];var bw=[];var bo=bn;try{for(var i=0;i<br.length;i++ ){if(bm[i]!==J){bw.push(y);}
else {bw.push(this.__be(bo,br[i]));}
;bv[i]=bo;if(i==br.length-1){if(bm[i]!==J){var bD=bm[i]===bg?bo.length-1:bm[i];var bl=bo.getItem(bD);this.__bi(bl,by,bp,bx,bn);bs[i]=this.__bk(bo,bw[i],by,bp,bx,bm[i]);}
else {if(br[i]!=null&&bo[C+qx.lang.String.firstUp(br[i])]!=null){var bl=bo[C+qx.lang.String.firstUp(br[i])]();this.__bi(bl,by,bp,bx,bn);}
;bs[i]=this.__bk(bo,bw[i],by,bp,bx);}
;}
else {var bk={index:i,propertyNames:br,sources:bv,listenerIds:bs,arrayIndexValues:bm,targetObject:by,targetPropertyChain:bp,options:bx,listeners:bq};var bu=qx.lang.Function.bind(this.__bc,this,bk);bq.push(bu);bs[i]=bo.addListener(bw[i],bu);}
;if(bo[C+qx.lang.String.firstUp(br[i])]==null){bo=undefined;}
else if(bm[i]!==J){var bD=bm[i]===bg?bo.length-1:bm[i];bo=bo[C+qx.lang.String.firstUp(br[i])](bD);}
else {bo=bo[C+qx.lang.String.firstUp(br[i])]();if(bo===null&&(br.length-1)!=i){bo=undefined;}
;}
;if(!bo){this.__bi(bo,by,bp,bx,bn);break;}
;}
;}
catch(bE){for(var i=0;i<bv.length;i++ ){if(bv[i]&&bs[i]){bv[i].removeListenerById(bs[i]);}
;}
;var bt=bB.targets;var bz=bB.listenerIds;for(var i=0;i<bt.length;i++ ){if(bt[i]&&bz[i]){bt[i].removeListenerById(bz[i]);}
;}
;throw bE;}
;var bC={type:g,listenerIds:bs,sources:bv,targetListenerIds:bB.listenerIds,targets:bB.targets};this.__bl(bC,bn,bA,by,bp);return bC;}
,__bc:function(bL){if(bL.options&&bL.options.onUpdate){bL.options.onUpdate(bL.sources[bL.index],bL.targetObject);}
;for(var j=bL.index+1;j<bL.propertyNames.length;j++ ){var bJ=bL.sources[j];bL.sources[j]=null;if(!bJ){continue;}
;bJ.removeListenerById(bL.listenerIds[j]);}
;var bJ=bL.sources[bL.index];for(var j=bL.index+1;j<bL.propertyNames.length;j++ ){if(bL.arrayIndexValues[j-1]!==J){bJ=bJ[C+qx.lang.String.firstUp(bL.propertyNames[j-1])](bL.arrayIndexValues[j-1]);}
else {bJ=bJ[C+qx.lang.String.firstUp(bL.propertyNames[j-1])]();}
;bL.sources[j]=bJ;if(!bJ){if(bL.options&&bL.options.converter){var bF=false;if(bL.options.ignoreConverter){var bM=bL.propertyNames.slice(0,j).join(P);var bK=bM.match(new RegExp(D+bL.options.ignoreConverter));bF=bK?bK.length>0:false;}
;if(!bF){this.__bg(bL.targetObject,bL.targetPropertyChain,bL.options.converter());}
else {this.__bf(bL.targetObject,bL.targetPropertyChain);}
;}
else {this.__bf(bL.targetObject,bL.targetPropertyChain);}
;break;}
;if(j==bL.propertyNames.length-1){if(qx.Class.implementsInterface(bJ,qx.data.IListData)){var bN=bL.arrayIndexValues[j]===bg?bJ.length-1:bL.arrayIndexValues[j];var bG=bJ.getItem(bN);this.__bi(bG,bL.targetObject,bL.targetPropertyChain,bL.options,bL.sources[bL.index]);bL.listenerIds[j]=this.__bk(bJ,y,bL.targetObject,bL.targetPropertyChain,bL.options,bL.arrayIndexValues[j]);}
else {if(bL.propertyNames[j]!=null&&bJ[C+qx.lang.String.firstUp(bL.propertyNames[j])]!=null){var bG=bJ[C+qx.lang.String.firstUp(bL.propertyNames[j])]();this.__bi(bG,bL.targetObject,bL.targetPropertyChain,bL.options,bL.sources[bL.index]);}
;var bH=this.__be(bJ,bL.propertyNames[j]);bL.listenerIds[j]=this.__bk(bJ,bH,bL.targetObject,bL.targetPropertyChain,bL.options);}
;}
else {if(bL.listeners[j]==null){var bI=qx.lang.Function.bind(this.__bc,this,bL);bL.listeners.push(bI);}
;if(qx.Class.implementsInterface(bJ,qx.data.IListData)){var bH=y;}
else {var bH=this.__be(bJ,bL.propertyNames[j]);}
;bL.listenerIds[j]=bJ.addListener(bH,bL.listeners[j]);}
;}
;}
,__bd:function(bP,bX,cc,bT,bV){var bS=bT.split(P);var bQ=this.__bj(bS);var cb=[];var ca=[];var bU=[];var bY=[];var bR=cc;for(var i=0;i<bS.length-1;i++ ){if(bQ[i]!==J){bY.push(y);}
else {try{bY.push(this.__be(bR,bS[i]));}
catch(e){break;}
;}
;cb[i]=bR;var bW=function(){for(var j=i+1;j<bS.length-1;j++ ){var cf=cb[j];cb[j]=null;if(!cf){continue;}
;cf.removeListenerById(bU[j]);}
;var cf=cb[i];for(var j=i+1;j<bS.length-1;j++ ){var cd=qx.lang.String.firstUp(bS[j-1]);if(bQ[j-1]!==J){var cg=bQ[j-1]===bg?cf.getLength()-1:bQ[j-1];cf=cf[C+cd](cg);}
else {cf=cf[C+cd]();}
;cb[j]=cf;if(ca[j]==null){ca.push(bW);}
;if(qx.Class.implementsInterface(cf,qx.data.IListData)){var ce=y;}
else {try{var ce=qx.data.SingleValueBinding.__be(cf,bS[j]);}
catch(e){break;}
;}
;bU[j]=cf.addListener(ce,ca[j]);}
;qx.data.SingleValueBinding.updateTarget(bP,bX,cc,bT,bV);}
;ca.push(bW);bU[i]=bR.addListener(bY[i],bW);var bO=qx.lang.String.firstUp(bS[i]);if(bR[C+bO]==null){bR=null;}
else if(bQ[i]!==J){bR=bR[C+bO](bQ[i]);}
else {bR=bR[C+bO]();}
;if(!bR){break;}
;}
;return {listenerIds:bU,targets:cb};}
,updateTarget:function(ch,ck,cm,ci,cl){var cj=this.resolvePropertyChain(ch,ck);cj=qx.data.SingleValueBinding.__bm(cj,cm,ci,cl,ch);this.__bg(cm,ci,cj);}
,resolvePropertyChain:function(o,cq){var cp=this.__bh(o,cq);var cr;if(cp!=null){var ct=cq.substring(cq.lastIndexOf(P)+1,cq.length);if(ct.charAt(ct.length-1)==N){var cn=ct.substring(ct.lastIndexOf(O)+1,ct.length-1);var co=ct.substring(0,ct.lastIndexOf(O));var cs=cp[C+qx.lang.String.firstUp(co)]();if(cn==bg){cn=cs.length-1;}
;if(cs!=null){cr=cs.getItem(cn);}
;}
else {cr=cp[C+qx.lang.String.firstUp(ct)]();}
;}
;return cr;}
,__be:function(cv,cw){var cu=this.__bn(cv,cw);if(cu==null){if(qx.Class.supportsEvent(cv.constructor,cw)){cu=cw;}
else if(qx.Class.supportsEvent(cv.constructor,y+qx.lang.String.firstUp(cw))){cu=y+qx.lang.String.firstUp(cw);}
else {throw new qx.core.AssertionError(w+cw+s+cv+bf);}
;}
;return cu;}
,__bf:function(cz,cx){var cy=this.__bh(cz,cx);if(cy!=null){var cA=cx.substring(cx.lastIndexOf(P)+1,cx.length);if(cA.charAt(cA.length-1)==N){this.__bg(cz,cx,null);return;}
;if(cy[r+qx.lang.String.firstUp(cA)]!=undefined){cy[r+qx.lang.String.firstUp(cA)]();}
else {cy[f+qx.lang.String.firstUp(cA)](null);}
;}
;}
,__bg:function(cH,cD,cE){var cC=this.__bh(cH,cD);if(cC!=null){var cI=cD.substring(cD.lastIndexOf(P)+1,cD.length);if(cI.charAt(cI.length-1)==N){var cB=cI.substring(cI.lastIndexOf(O)+1,cI.length-1);var cF=cI.substring(0,cI.lastIndexOf(O));var cG=cH;if(!qx.Class.implementsInterface(cG,qx.data.IListData)){cG=cC[C+qx.lang.String.firstUp(cF)]();}
;if(cB==bg){cB=cG.length-1;}
;if(cG!=null){cG.setItem(cB,cE);}
;}
else {cC[f+qx.lang.String.firstUp(cI)](cE);}
;}
;}
,__bh:function(cO,cL){var cN=cL.split(P);var cK=cO;for(var i=0;i<cN.length-1;i++ ){try{var cM=cN[i];if(cM.indexOf(N)==cM.length-1){var cJ=cM.substring(cM.indexOf(O)+1,cM.length-1);cM=cM.substring(0,cM.indexOf(O));}
;if(cM!=J){cK=cK[C+qx.lang.String.firstUp(cM)]();}
;if(cJ!=null){if(cJ==bg){cJ=cK.length-1;}
;cK=cK.getItem(cJ);cJ=null;}
;}
catch(cP){return null;}
;}
;return cK;}
,__bi:function(cU,cQ,cS,cT,cR){cU=this.__bm(cU,cQ,cS,cT,cR);if(cU===undefined){this.__bf(cQ,cS);}
;if(cU!==undefined){try{this.__bg(cQ,cS,cU);if(cT&&cT.onUpdate){cT.onUpdate(cR,cQ,cU);}
;}
catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;}
;if(cT&&cT.onSetFail){cT.onSetFail(e);}
else {qx.log.Logger.warn(x+cU+S+cQ+b+e);}
;}
;}
;}
,__bj:function(cV){var cW=[];for(var i=0;i<cV.length;i++ ){var name=cV[i];if(qx.lang.String.endsWith(name,N)){var cX=name.substring(name.indexOf(O)+1,name.indexOf(N));if(name.indexOf(N)!=name.length-1){throw new Error(n+name+U);}
;if(cX!==bg){if(cX==J||isNaN(parseInt(cX,10))){throw new Error(v+V+name+U);}
;}
;if(name.indexOf(O)!=0){cV[i]=name.substring(0,name.indexOf(O));cW[i]=J;cW[i+1]=cX;cV.splice(i+1,0,l);i++ ;}
else {cW[i]=cX;cV.splice(i,1,l);}
;}
else {cW[i]=J;}
;}
;return cW;}
,__bk:function(cY,dc,dh,df,dd,db){if(qx.core.Environment.get(z)){var da=qx.Class.getEventType(cY.constructor,dc);qx.core.Assert.assertEquals(t,da,dc+W+cY+P);}
;var de=function(dk,e){if(dk!==J){if(dk===bg){dk=cY.length-1;}
;var dl=cY.getItem(dk);if(dl===undefined){qx.data.SingleValueBinding.__bf(dh,df);}
;var dj=e.getData().start;var di=e.getData().end;if(dk<dj||dk>di){return;}
;}
else {var dl=e.getData();}
;if(qx.core.Environment.get(a)){qx.log.Logger.debug(p+cY+bh+dc+H+dh+Y+df+h);qx.log.Logger.debug(M+dl);}
;dl=qx.data.SingleValueBinding.__bm(dl,dh,df,dd,cY);if(qx.core.Environment.get(a)){qx.log.Logger.debug(d+dl);}
;try{if(dl!==undefined){qx.data.SingleValueBinding.__bg(dh,df,dl);}
else {qx.data.SingleValueBinding.__bf(dh,df);}
;if(dd&&dd.onUpdate){dd.onUpdate(cY,dh,dl);}
;}
catch(dm){if(!(dm instanceof qx.core.ValidationError)){throw dm;}
;if(dd&&dd.onSetFail){dd.onSetFail(dm);}
else {qx.log.Logger.warn(x+dl+S+dh+b+dm);}
;}
;}
;if(!db){db=J;}
;de=qx.lang.Function.bind(de,cY,db);var dg=cY.addListener(dc,de);return dg;}
,__bl:function(ds,dn,dr,dp,dq){if(this.__bb[dn.toHashCode()]===undefined){this.__bb[dn.toHashCode()]=[];}
;this.__bb[dn.toHashCode()].push([ds,dn,dr,dp,dq]);}
,__bm:function(dw,dB,dv,dx,dt){if(dx&&dx.converter){var dy;if(dB.getModel){dy=dB.getModel();}
;return dx.converter(dw,dy,dt,dB);}
else {var du=this.__bh(dB,dv);var dC=dv.substring(dv.lastIndexOf(P)+1,dv.length);if(du==null){return dw;}
;var dz=qx.Class.getPropertyDefinition(du.constructor,dC);var dA=dz==null?J:dz.check;return this.__bo(dw,dA);}
;}
,__bn:function(dD,dF){var dE=qx.Class.getPropertyDefinition(dD.constructor,dF);if(dE==null){return null;}
;return dE.event;}
,__bo:function(dI,dH){var dG=qx.lang.Type.getClass(dI);if((dG==bj||dG==G)&&(dH==q||dH==Q)){dI=parseInt(dI,10);}
;if((dG==c||dG==bj||dG==bi)&&dH==G){dI=dI+J;}
;if((dG==bj||dG==G)&&(dH==bj||dH==L)){dI=parseFloat(dI);}
;return dI;}
,removeBindingFromObject:function(dJ,dL){if(dL.type==g){for(var i=0;i<dL.sources.length;i++ ){if(dL.sources[i]){dL.sources[i].removeListenerById(dL.listenerIds[i]);}
;}
;for(var i=0;i<dL.targets.length;i++ ){if(dL.targets[i]){dL.targets[i].removeListenerById(dL.targetListenerIds[i]);}
;}
;}
else {dJ.removeListenerById(dL);}
;var dK=this.__bb[dJ.toHashCode()];if(dK!=undefined){for(var i=0;i<dK.length;i++ ){if(dK[i][0]==dL){qx.lang.Array.remove(dK,dK[i]);return;}
;}
;}
;throw new Error(E);}
,removeAllBindingsForObject:function(dN){if(qx.core.Environment.get(z)){qx.core.Assert.assertNotNull(dN,m);}
;var dM=this.__bb[dN.toHashCode()];if(dM!=undefined){for(var i=dM.length-1;i>=0;i-- ){this.removeBindingFromObject(dN,dM[i][0]);}
;}
;}
,getAllBindingsForObject:function(dO){if(this.__bb[dO.toHashCode()]===undefined){this.__bb[dO.toHashCode()]=[];}
;return this.__bb[dO.toHashCode()];}
,removeAllBindings:function(){for(var dQ in this.__bb){var dP=qx.core.ObjectRegistry.fromHashCode(dQ);if(dP==null){delete this.__bb[dQ];continue;}
;this.removeAllBindingsForObject(dP);}
;this.__bb={};}
,getAllBindings:function(){return this.__bb;}
,showBindingInLog:function(dS,dU){var dT;for(var i=0;i<this.__bb[dS.toHashCode()].length;i++ ){if(this.__bb[dS.toHashCode()][i][0]==dU){dT=this.__bb[dS.toHashCode()][i];break;}
;}
;if(dT===undefined){var dR=T;}
else {var dR=I+dT[1]+R+dT[2]+k+dT[3]+R+dT[4]+X;}
;qx.log.Logger.debug(dR);}
,showAllBindingsInLog:function(){for(var dW in this.__bb){var dV=qx.core.ObjectRegistry.fromHashCode(dW);for(var i=0;i<this.__bb[dW].length;i++ ){this.showBindingInLog(dV,this.__bb[dW][i][0]);}
;}
;}
}});}
)();
(function(){var a="qx.lang.Type",b="Error",c="RegExp",d="Date",e="Number",f="Boolean";qx.Bootstrap.define(a,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==c;}
,isNumber:function(h){return (h!==null&&(this.getClass(h)==e||h instanceof Number));}
,isBoolean:function(i){return (i!==null&&(this.getClass(i)==f||i instanceof Boolean));}
,isDate:function(j){return (j!==null&&(this.getClass(j)==d||j instanceof Date));}
,isError:function(k){return (k!==null&&(this.getClass(k)==b||k instanceof Error));}
}});}
)();
(function(){var a=" != ",b="qx.core.Object",c="Expected value to be an array but found ",d="' (rgb(",f=") was fired.",g="Expected value to be an integer >= 0 but found ",h="' to be not equal with '",j="' to '",k="Expected object '",m="Called assertTrue with '",n="Expected value to be a map but found ",o="The function did not raise an exception!",p="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",s="' to implement the interface '",t="Expected value to be null but found ",u="Invalid argument 'type'",v="Called assert with 'false'",w="Assertion error! ",x="'",y="null",z="' but found '",A="'undefined'",B=",",C="' must must be a key of the map '",D="Expected '",E="The String '",F="Expected value to be a string but found ",G="Event (",H="Expected value to be the CSS color '",I="!",J="Expected value not to be undefined but found undefined!",K="qx.util.ColorUtil",L=": ",M="The raised exception does not have the expected type! ",N=") not fired.",O="'!",P="qx.core.Assert",Q="",R="Expected value to be typeof object but found ",S="' but found ",T="' (identical) but found '",U="' must have any of the values defined in the array '",V="Expected value to be a number but found ",W="Called assertFalse with '",X="qx.ui.core.Widget",Y="]",bJ="Expected value to be a qooxdoo object but found ",bK="' arguments.",bL="Expected value '%1' to be in the range '%2'..'%3'!",bF="Array[",bG="' does not match the regular expression '",bH="' to be not identical with '",bI="Expected [",bP="' arguments but found '",bQ="', which cannot be converted to a CSS color!",bR=", ",cg="qx.core.AssertionError",bM="Expected value to be a boolean but found ",bN="Expected value not to be null but found null!",bO="))!",bD="Expected value to be a qooxdoo widget but found ",bU="The value '",bE="Expected value to be typeof '",bV="\n Stack trace: \n",bW="Expected value to be typeof function but found ",cb="Expected value to be an integer but found ",bS="Called fail().",cf="The parameter 're' must be a string or a regular expression.",bT=")), but found value '",bX="qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'",bY="Expected value to be a number >= 0 but found ",ca="Expected value to be instanceof '",cc="], but found [",cd="Wrong number of arguments given. Expected '",ce="object";qx.Class.define(P,{statics:{__bI:true,__bJ:function(ch,ci){var cm=Q;for(var i=1,l=arguments.length;i<l;i++ ){cm=cm+this.__bK(arguments[i]===undefined?A:arguments[i]);}
;var cl=Q;if(cm){cl=ch+L+cm;}
else {cl=ch;}
;var ck=w+cl;if(qx.Class.isDefined(cg)){var cj=new qx.core.AssertionError(ch,cm);if(this.__bI){qx.Bootstrap.error(ck+bV+cj.getStackTrace());}
;throw cj;}
else {if(this.__bI){qx.Bootstrap.error(ck);}
;throw new Error(ck);}
;}
,__bK:function(co){var cn;if(co===null){cn=y;}
else if(qx.lang.Type.isArray(co)&&co.length>10){cn=bF+co.length+Y;}
else if((co instanceof Object)&&(co.toString==null)){cn=qx.lang.Json.stringify(co,null,2);}
else {try{cn=co.toString();}
catch(e){cn=Q;}
;}
;return cn;}
,assert:function(cq,cp){cq==true||this.__bJ(cp||Q,v);}
,fail:function(cr,cs){var ct=cs?Q:bS;this.__bJ(cr||Q,ct);}
,assertTrue:function(cv,cu){(cv===true)||this.__bJ(cu||Q,m,cv,x);}
,assertFalse:function(cx,cw){(cx===false)||this.__bJ(cw||Q,W,cx,x);}
,assertEquals:function(cy,cz,cA){cy==cz||this.__bJ(cA||Q,D,cy,z,cz,O);}
,assertNotEquals:function(cB,cC,cD){cB!=cC||this.__bJ(cD||Q,D,cB,h,cC,O);}
,assertIdentical:function(cE,cF,cG){cE===cF||this.__bJ(cG||Q,D,cE,T,cF,O);}
,assertNotIdentical:function(cH,cI,cJ){cH!==cI||this.__bJ(cJ||Q,D,cH,bH,cI,O);}
,assertNotUndefined:function(cL,cK){cL!==undefined||this.__bJ(cK||Q,J);}
,assertUndefined:function(cN,cM){cN===undefined||this.__bJ(cM||Q,p,cN,I);}
,assertNotNull:function(cP,cO){cP!==null||this.__bJ(cO||Q,bN);}
,assertNull:function(cR,cQ){cR===null||this.__bJ(cQ||Q,t,cR,I);}
,assertJsonEquals:function(cS,cT,cU){this.assertEquals(qx.lang.Json.stringify(cS),qx.lang.Json.stringify(cT),cU);}
,assertMatch:function(cX,cW,cV){this.assertString(cX);this.assert(qx.lang.Type.isRegExp(cW)||qx.lang.Type.isString(cW),cf);cX.search(cW)>=0||this.__bJ(cV||Q,E,cX,bG,cW.toString(),O);}
,assertArgumentsCount:function(db,dc,dd,cY){var da=db.length;(da>=dc&&da<=dd)||this.__bJ(cY||Q,cd,dc,j,dd,bP,da,bK);}
,assertEventFired:function(de,event,dh,di,dj){var df=false;var dg=function(e){if(di){di.call(de,e);}
;df=true;}
;var dk;try{dk=de.addListener(event,dg,de);dh.call(de);}
catch(dl){throw dl;}
finally{try{de.removeListenerById(dk);}
catch(dm){}
;}
;df===true||this.__bJ(dj||Q,G,event,N);}
,assertEventNotFired:function(dn,event,dr,ds){var dp=false;var dq=function(e){dp=true;}
;var dt=dn.addListener(event,dq,dn);dr.call();dp===false||this.__bJ(ds||Q,G,event,f);dn.removeListenerById(dt);}
,assertException:function(dx,dw,dv,du){var dw=dw||Error;var dy;try{this.__bI=false;dx();}
catch(dz){dy=dz;}
finally{this.__bI=true;}
;if(dy==null){this.__bJ(du||Q,o);}
;dy instanceof dw||this.__bJ(du||Q,M,dw,a,dy);if(dv){this.assertMatch(dy.toString(),dv,du);}
;}
,assertInArray:function(dC,dB,dA){dB.indexOf(dC)!==-1||this.__bJ(dA||Q,bU,dC,U,dB,x);}
,assertArrayEquals:function(dD,dE,dF){this.assertArray(dD,dF);this.assertArray(dE,dF);dF=dF||bI+dD.join(bR)+cc+dE.join(bR)+Y;if(dD.length!==dE.length){this.fail(dF,true);}
;for(var i=0;i<dD.length;i++ ){if(dD[i]!==dE[i]){this.fail(dF,true);}
;}
;}
,assertKeyInMap:function(dI,dH,dG){dH[dI]!==undefined||this.__bJ(dG||Q,bU,dI,C,dH,x);}
,assertFunction:function(dK,dJ){qx.lang.Type.isFunction(dK)||this.__bJ(dJ||Q,bW,dK,I);}
,assertString:function(dM,dL){qx.lang.Type.isString(dM)||this.__bJ(dL||Q,F,dM,I);}
,assertBoolean:function(dO,dN){qx.lang.Type.isBoolean(dO)||this.__bJ(dN||Q,bM,dO,I);}
,assertNumber:function(dQ,dP){(qx.lang.Type.isNumber(dQ)&&isFinite(dQ))||this.__bJ(dP||Q,V,dQ,I);}
,assertPositiveNumber:function(dS,dR){(qx.lang.Type.isNumber(dS)&&isFinite(dS)&&dS>=0)||this.__bJ(dR||Q,bY,dS,I);}
,assertInteger:function(dU,dT){(qx.lang.Type.isNumber(dU)&&isFinite(dU)&&dU%1===0)||this.__bJ(dT||Q,cb,dU,I);}
,assertPositiveInteger:function(dX,dV){var dW=(qx.lang.Type.isNumber(dX)&&isFinite(dX)&&dX%1===0&&dX>=0);dW||this.__bJ(dV||Q,g,dX,I);}
,assertInRange:function(eb,ec,ea,dY){(eb>=ec&&eb<=ea)||this.__bJ(dY||Q,qx.lang.String.format(bL,[eb,ec,ea]));}
,assertObject:function(ee,ed){var ef=ee!==null&&(qx.lang.Type.isObject(ee)||typeof ee===ce);ef||this.__bJ(ed||Q,R,(ee),I);}
,assertArray:function(eh,eg){qx.lang.Type.isArray(eh)||this.__bJ(eg||Q,c,eh,I);}
,assertMap:function(ej,ei){qx.lang.Type.isObject(ej)||this.__bJ(ei||Q,n,ej,I);}
,assertRegExp:function(el,ek){qx.lang.Type.isRegExp(el)||this.__bJ(ek||Q,r,el,I);}
,assertType:function(eo,en,em){this.assertString(en,u);typeof (eo)===en||this.__bJ(em||Q,bE,en,S,eo,I);}
,assertInstance:function(er,es,ep){var eq=es.classname||es+Q;er instanceof es||this.__bJ(ep||Q,ca,eq,S,er,I);}
,assertInterface:function(ev,eu,et){qx.Class.implementsInterface(ev,eu)||this.__bJ(et||Q,k,ev,s,eu,O);}
,assertCssColor:function(eC,ez,eB){var ew=qx.Class.getByName(K);if(!ew){throw new Error(bX);}
;var ey=ew.stringToRgb(eC);try{var eA=ew.stringToRgb(ez);}
catch(eE){this.__bJ(eB||Q,H,eC,d,ey.join(B),bT,ez,bQ);}
;var eD=ey[0]==eA[0]&&ey[1]==eA[1]&&ey[2]==eA[2];eD||this.__bJ(eB||Q,H,ey,d,ey.join(B),bT,ez,d,eA.join(B),bO);}
,assertElement:function(eG,eF){!!(eG&&eG.nodeType===1)||this.__bJ(eF||Q,q,eG,O);}
,assertQxObject:function(eI,eH){this.__bL(eI,b)||this.__bJ(eH||Q,bJ,eI,I);}
,assertQxWidget:function(eK,eJ){this.__bL(eK,X)||this.__bJ(eJ||Q,bD,eK,I);}
,__bL:function(eM,eL){if(!eM){return false;}
;var eN=eM.constructor;while(eN){if(eN.classname===eL){return true;}
;eN=eN.superclass;}
;return false;}
}});}
)();
(function(){var a=": ",b="qx.type.BaseError",c="",d="error";qx.Class.define(b,{extend:Error,construct:function(e,f){var g=Error.call(this,f);if(g.stack){this.stack=g.stack;}
;if(g.stacktrace){this.stacktrace=g.stacktrace;}
;this.__bM=e||c;this.message=f||qx.type.BaseError.DEFAULTMESSAGE;}
,statics:{DEFAULTMESSAGE:d},members:{__bN:null,__bM:null,message:null,getComment:function(){return this.__bM;}
,toString:function(){return this.__bM+(this.message?a+this.message:c);}
}});}
)();
(function(){var a="qx.core.AssertionError";qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);this.__bO=qx.dev.StackTrace.getStackTrace();}
,members:{__bO:null,getStackTrace:function(){return this.__bO;}
}});}
)();
(function(){var a="?",b="anonymous",c="...",d="qx.dev.StackTrace",e="",f="\n",g="qx.debug",h="/source/class/",j="Error created at",k="FILENAME_TO_CLASSNAME must return a string!",l="ecmascript.error.stacktrace",m="Backtrace:",n="stack",o="FORMAT_STACKTRACE must return an array of strings!",p=":",q=".",r="function",s="prototype",t="stacktrace";qx.Bootstrap.define(d,{statics:{FILENAME_TO_CLASSNAME:null,FORMAT_STACKTRACE:null,getStackTrace:function(){var w=[];try{throw new Error();}
catch(J){if(qx.dev.StackTrace.hasEnvironmentCheck&&qx.core.Environment.get(l)){var B=qx.dev.StackTrace.getStackTraceFromError(J);var E=qx.dev.StackTrace.getStackTraceFromCaller(arguments);qx.lang.Array.removeAt(B,0);w=E.length>B.length?E:B;for(var i=0;i<Math.min(E.length,B.length);i++ ){var z=E[i];if(z.indexOf(b)>=0){continue;}
;var v=null;var F=z.split(q);var y=/(.*?)\(/.exec(F[F.length-1]);if(y&&y.length==2){v=y[1];F.pop();}
;if(F[F.length-1]==s){F.pop();}
;var H=F.join(q);var x=B[i];var I=x.split(p);var D=I[0];var C=I[1];var u;if(I[2]){u=I[2];}
;var A=null;if(qx.Class&&qx.Class.getByName(D)){A=D;}
else {A=H;}
;var G=A;if(v){G+=q+v;}
;G+=p+C;if(u){G+=p+u;}
;w[i]=G;}
;}
else {w=this.getStackTraceFromCaller(arguments);}
;}
;return w;}
,getStackTraceFromCaller:function(N){var M=[];var P=qx.lang.Function.getCaller(N);var K={};while(P){var O=qx.lang.Function.getName(P);M.push(O);try{P=P.caller;}
catch(Q){break;}
;if(!P){break;}
;var L=qx.core.ObjectRegistry.toHashCode(P);if(K[L]){M.push(c);break;}
;K[L]=P;}
;return M;}
,getStackTraceFromError:function(bg){var W=[];var U,V,bd,T,S,bi,be;var bf=qx.dev.StackTrace.hasEnvironmentCheck?qx.core.Environment.get(l):null;if(bf===n){if(!bg.stack){return W;}
;U=/@(.+):(\d+)$/gm;while((V=U.exec(bg.stack))!=null){be=V[1];T=V[2];bd=this.__bP(be);W.push(bd+p+T);}
;if(W.length>0){return this.__bR(W);}
;U=/at (.*)/gm;var bh=/\((.*?)(:[^\/].*)\)/;var bc=/(.*?)(:[^\/].*)/;while((V=U.exec(bg.stack))!=null){var bb=bh.exec(V[1]);if(!bb){bb=bc.exec(V[1]);}
;if(bb){bd=this.__bP(bb[1]);W.push(bd+bb[2]);}
else {W.push(V[1]);}
;}
;}
else if(bf===t){var X=bg.stacktrace;if(!X){return W;}
;if(X.indexOf(j)>=0){X=X.split(j)[0];}
;U=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;while((V=U.exec(X))!=null){T=V[1];S=V[2];be=V[3];bd=this.__bP(be);W.push(bd+p+T+p+S);}
;if(W.length>0){return this.__bR(W);}
;U=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;while((V=U.exec(X))!=null){T=V[1];be=V[2];bd=this.__bP(be);W.push(bd+p+T);}
;}
else if(bg.message&&bg.message.indexOf(m)>=0){var ba=bg.message.split(m)[1].trim();var Y=ba.split(f);for(var i=0;i<Y.length;i++ ){var R=Y[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);if(R&&R.length>=2){T=R[1];bi=this.__bP(R[2]);W.push(bi+p+T);}
;}
;}
else if(bg.sourceURL&&bg.line){W.push(this.__bP(bg.sourceURL)+p+bg.line);}
;return this.__bR(W);}
,__bP:function(bk){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==r){var bj=qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bk);if(qx.core.Environment.get(g)&&!qx.lang.Type.isString(bj)){throw new Error(k);}
;return bj;}
;return qx.dev.StackTrace.__bQ(bk);}
,__bQ:function(bn){var bo=h;var bl=bn.indexOf(bo);var bp=bn.indexOf(a);if(bp>=0){bn=bn.substring(0,bp);}
;var bm=(bl==-1)?bn:bn.substring(bl+bo.length).replace(/\//g,q).replace(/\.js$/,e);return bm;}
,__bR:function(bq){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==r){bq=qx.dev.StackTrace.FORMAT_STACKTRACE(bq);if(qx.core.Environment.get(g)&&!qx.lang.Type.isArray(bq)){throw new Error(o);}
;}
;return bq;}
},defer:function(br){br.hasEnvironmentCheck=qx.bom.client.EcmaScript&&qx.bom.client.EcmaScript.getStackTrace;}
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
,append:function(N,M){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertArray(N,g);qx.core.Assert&&qx.core.Assert.assertArray(M,a);}
;Array.prototype.push.apply(N,M);return N;}
,exclude:function(Q,P){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertArray(Q,g);qx.core.Assert&&qx.core.Assert.assertArray(P,a);}
;for(var i=0,R=P.length,O;i<R;i++ ){O=Q.indexOf(P[i]);if(O!=-1){Q.splice(O,1);}
;}
;return Q;}
,remove:function(S,T){var i=S.indexOf(T);if(i!=-1){S.splice(i,1);return T;}
;}
,contains:function(U,V){return U.indexOf(V)!==-1;}
,equals:function(X,W){var length=X.length;if(length!==W.length){return false;}
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
}});}
)();
(function(){var a="[object Opera]",b="function",c="[^\\.0-9]",d="4.0",e="gecko",f="1.9.0.0",g="Version/",h="9.0",i="8.0",j="Gecko",k="Maple",l="AppleWebKit/",m="Trident",n="Unsupported client: ",o="",p="opera",q="engine.version",r="! Assumed gecko version 1.9.0.0 (Firefox 3.0).",s="mshtml",t="engine.name",u="webkit",v="5.0",w=".",x="qx.bom.client.Engine";qx.Bootstrap.define(x,{statics:{getVersion:function(){var A=window.navigator.userAgent;var B=o;if(qx.bom.client.Engine.__bs()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(A)){if(A.indexOf(g)!=-1){var D=A.match(/Version\/(\d+)\.(\d+)/);B=D[1]+w+D[2].charAt(0)+w+D[2].substring(1,D[2].length);}
else {B=RegExp.$1+w+RegExp.$2;if(RegExp.$3!=o){B+=w+RegExp.$3;}
;}
;}
;}
else if(qx.bom.client.Engine.__bt()){if(/AppleWebKit\/([^ ]+)/.test(A)){B=RegExp.$1;var C=RegExp(c).exec(B);if(C){B=B.slice(0,C.index);}
;}
;}
else if(qx.bom.client.Engine.__bv()||qx.bom.client.Engine.__bu()){if(/rv\:([^\);]+)(\)|;)/.test(A)){B=RegExp.$1;}
;}
else if(qx.bom.client.Engine.__bw()){var z=/Trident\/([^\);]+)(\)|;)/.test(A);if(/MSIE\s+([^\);]+)(\)|;)/.test(A)){B=RegExp.$1;if(B<8&&z){if(RegExp.$1==d){B=i;}
else if(RegExp.$1==v){B=h;}
;}
;}
else if(z){var D=/\brv\:(\d+?\.\d+?)\b/.exec(A);if(D){B=D[1];}
;}
;}
else {var y=window.qxFail;if(y&&typeof y===b){B=y().FULLVERSION;}
else {B=f;qx.Bootstrap.warn(n+A+r);}
;}
;return B;}
,getName:function(){var name;if(qx.bom.client.Engine.__bs()){name=p;}
else if(qx.bom.client.Engine.__bt()){name=u;}
else if(qx.bom.client.Engine.__bv()||qx.bom.client.Engine.__bu()){name=e;}
else if(qx.bom.client.Engine.__bw()){name=s;}
else {var E=window.qxFail;if(E&&typeof E===b){name=E().NAME;}
else {name=e;qx.Bootstrap.warn(n+window.navigator.userAgent+r);}
;}
;return name;}
,__bs:function(){return window.opera&&Object.prototype.toString.call(window.opera)==a;}
,__bt:function(){return window.navigator.userAgent.indexOf(l)!=-1;}
,__bu:function(){return window.navigator.userAgent.indexOf(k)!=-1;}
,__bv:function(){return (window.controllers||window.navigator.mozApps)&&window.navigator.product===j&&window.navigator.userAgent.indexOf(k)==-1&&window.navigator.userAgent.indexOf(m)==-1;}
,__bw:function(){return window.navigator.cpuClass&&(/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent)||/Trident\/\d+?\.\d+?/.test(window.navigator.userAgent));}
},defer:function(F){qx.core.Environment.add(q,F.getVersion);qx.core.Environment.add(t,F.getName);}
});}
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
;return function(event){if(qx.core.Environment.get(b)){if(qx.core.Object&&q.self&&qx.Bootstrap.isObject(q.self)&&q.self.isDisposed&&qx.Bootstrap.isFunction(q.self.isDisposed)){qx.core.Assert&&qx.core.Assert.assertFalse(q.self.isDisposed(),d+q.self.toString()+g+qx.lang.Function.getName(r));}
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
(function(){var a="qx.globalErrorHandling",b="qx.event.GlobalError";qx.Bootstrap.define(b,{statics:{__bx:null,__by:null,__bz:null,__bA:function(){if(qx.core&&qx.core.Environment){return qx.core.Environment.get(a);}
else {return !!qx.Bootstrap.getEnvironmentSetting(a);}
;}
,setErrorHandler:function(c,d){this.__bx=c||null;this.__bz=d||window;if(this.__bA()){if(c&&window.onerror){var e=qx.Bootstrap.bind(this.__bB,this);if(this.__by==null){this.__by=window.onerror;}
;var self=this;window.onerror=function(f,g,h){self.__by(f,g,h);e(f,g,h);}
;}
;if(c&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__bB,this);}
;if(this.__bx==null){if(this.__by!=null){window.onerror=this.__by;this.__by=null;}
else {window.onerror=null;}
;}
;}
;}
,__bB:function(i,j,k){if(this.__bx){this.handleError(new qx.core.WindowError(i,j,k));}
;}
,observeMethod:function(l){if(this.__bA()){var self=this;return function(){if(!self.__bx){return l.apply(this,arguments);}
;try{return l.apply(this,arguments);}
catch(m){self.handleError(new qx.core.GlobalError(m,arguments));}
;}
;}
else {return l;}
;}
,handleError:function(n){if(this.__bx){this.__bx.call(this.__bz,n);}
;}
},defer:function(o){if(qx.core&&qx.core.Environment){qx.core.Environment.add(a,true);}
else {qx.Bootstrap.setEnvironmentSetting(a,true);}
;o.setErrorHandler(null,null);}
});}
)();
(function(){var a="",b="qx.core.WindowError";qx.Bootstrap.define(b,{extend:Error,construct:function(c,e,f){var d=Error.call(this,c);if(d.stack){this.stack=d.stack;}
;if(d.stacktrace){this.stacktrace=d.stacktrace;}
;this.__bC=c;this.__bD=e||a;this.__bE=f===undefined?-1:f;}
,members:{__bC:null,__bD:null,__bE:null,toString:function(){return this.__bC;}
,getUri:function(){return this.__bD;}
,getLineNumber:function(){return this.__bE;}
}});}
)();
(function(){var a="GlobalError: ",b="qx.core.GlobalError";qx.Bootstrap.define(b,{extend:Error,construct:function(e,c){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(e);}
;this.__bC=a+(e&&e.message?e.message:e);var d=Error.call(this,this.__bC);if(d.stack){this.stack=d.stack;}
;if(d.stacktrace){this.stacktrace=d.stacktrace;}
;this.__bF=c;this.__bG=e;}
,members:{__bG:null,__bF:null,__bC:null,toString:function(){return this.__bC;}
,getArguments:function(){return this.__bF;}
,getSourceException:function(){return this.__bG;}
},destruct:function(){this.__bG=null;this.__bF=null;this.__bC=null;}
});}
)();
(function(){var c="-",d="qx.debug.dispose",e="",f="qx.core.ObjectRegistry",g="qx.debug",h="$$hash",j="-0",k="Invalid object: ",m="Could not dispose object ",n=" objects",o=": ",p="Disposed ";qx.Bootstrap.define(f,{statics:{inShutDown:false,__bH:{},__bS:0,__bT:[],__bU:e,__bV:{},register:function(q){var t=this.__bH;if(!t){return;}
;var s=q.$$hash;if(s==null){var r=this.__bT;if(r.length>0&&!qx.core.Environment.get(d)){s=r.pop();}
else {s=(this.__bS++ )+this.__bU;}
;q.$$hash=s;if(qx.core.Environment.get(d)){if(qx.dev&&qx.dev.Debug&&qx.dev.Debug.disposeProfilingActive){this.__bV[s]=qx.dev.StackTrace.getStackTrace();}
;}
;}
;if(qx.core.Environment.get(g)){if(!q.dispose){throw new Error(k+q);}
;}
;t[s]=q;}
,unregister:function(u){var v=u.$$hash;if(v==null){return;}
;var w=this.__bH;if(w&&w[v]){delete w[v];this.__bT.push(v);}
;try{delete u.$$hash;}
catch(x){if(u.removeAttribute){u.removeAttribute(h);}
;}
;}
,toHashCode:function(A){if(qx.core.Environment.get(g)){if(A==null){throw new Error(k+A);}
;}
;var y=A.$$hash;if(y!=null){return y;}
;var z=this.__bT;if(z.length>0){y=z.pop();}
else {y=(this.__bS++ )+this.__bU;}
;return A.$$hash=y;}
,clearHashCode:function(C){if(qx.core.Environment.get(g)){if(C==null){throw new Error(k+C);}
;}
;var B=C.$$hash;if(B!=null){this.__bT.push(B);try{delete C.$$hash;}
catch(D){if(C.removeAttribute){C.removeAttribute(h);}
;}
;}
;}
,fromHashCode:function(E){return this.__bH[E]||null;}
,shutdown:function(){this.inShutDown=true;var G=this.__bH;var I=[];for(var F in G){I.push(F);}
;I.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);}
);var H,i=0,l=I.length;while(true){try{for(;i<l;i++ ){F=I[i];H=G[F];if(H&&H.dispose){H.dispose();}
;}
;}
catch(J){qx.Bootstrap.error(this,m+H.toString()+o+J,J);if(i!==l){i++ ;continue;}
;}
;break;}
;qx.Bootstrap.debug(this,p+l+n);delete this.__bH;}
,getRegistry:function(){return this.__bH;}
,getNextHash:function(){return this.__bS;}
,getPostId:function(){return this.__bU;}
,getStackTraces:function(){return this.__bV;}
},defer:function(K){if(window&&window.top){var frames=window.top.frames;for(var i=0;i<frames.length;i++ ){if(frames[i]===window){K.__bU=c+(i+1);return;}
;}
;}
;K.__bU=j;}
});}
)();
(function(){var a="\x00\b\n\f\r\t",b="-",c="function",d="[null,null,null]",e="T",f="+",g=",\n",h="constructor",i="{\n",j='"+275760-09-13T00:00:00.000Z"',k="true",l="\\n",m="false",n='"-271821-04-20T00:00:00.000Z"',o="json",p='object',q='""',r="qx.lang.Json",s="{}",t="hasOwnProperty",u="@",v="prototype",w='hasOwnProperty',x='"',y="toLocaleString",z="0",A='function',B="",C='\\"',D="\t",E="string",F="}",G="\r",H="toJSON",I=":",J="[\n 1,\n 2\n]",K="\\f",L='"1969-12-31T23:59:59.999Z"',M="/",N="\\b",O="Z",P="\\t",Q="\b",R="[object Number]",S="isPrototypeOf",T="{",U="toString",V="0x",W="[1]",X="\\r",Y="]",bO=",",bP="null",bQ="\\u00",bK="\n",bL="json-stringify",bM="[]",bN="1",bU="000000",bV="[object Boolean]",bW="valueOf",cm="\\\\",bR="[object String]",bS="json-parse",bT="bug-string-char-index",bG="[object Array]",ca="$",bJ="[\n",cb='"-000001-01-01T00:00:00.000Z"',cc="[",bI="[null]",bX="\\",cl="[object Date]",bY='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',cd="a",ce=" ",cf=".",ci="[object Function]",cj="01",ck='"\t"',bH="propertyIsEnumerable",cg="\f",ch="object";qx.Bootstrap.define(r,{statics:{stringify:null,parse:null}});(function(){var co;var cn;var cp;(function(window){var cr={}.toString,cG,cQ,cC;var cy=typeof cp===c&&cp.amd,cx=typeof cn==ch&&cn;if(cx||cy){if(typeof JSON==ch&&JSON){if(cx){cx.stringify=JSON.stringify;cx.parse=JSON.parse;}
else {cx=JSON;}
;}
else if(cy){cx=window.JSON={};}
;}
else {cx=window.JSON||(window.JSON={});}
;var cU=new Date(-3509827334573292);try{cU=cU.getUTCFullYear()==-109252&&cU.getUTCMonth()===0&&cU.getUTCDate()===1&&cU.getUTCHours()==10&&cU.getUTCMinutes()==37&&cU.getUTCSeconds()==6&&cU.getUTCMilliseconds()==708;}
catch(da){}
;function cJ(name){if(name==bT){return cd[0]!=cd;}
;var de,dd=bY,dh=name==o;if(dh||name==bL||name==bS){if(name==bL||dh){var db=cx.stringify,dg=typeof db==c&&cU;if(dg){(de=function(){return 1;}
).toJSON=de;try{dg=db(0)===z&&db(new Number())===z&&db(new String())==q&&db(cr)===cC&&db(cC)===cC&&db()===cC&&db(de)===bN&&db([de])==W&&db([cC])==bI&&db(null)==bP&&db([cC,cr,null])==d&&db({"a":[de,true,false,null,a]})==dd&&db(null,de)===bN&&db([1,2],null,1)==J&&db(new Date(-8.64e15))==n&&db(new Date(8.64e15))==j&&db(new Date(-621987552e5))==cb&&db(new Date(-1))==L;}
catch(di){dg=false;}
;}
;if(!dh){return dg;}
;}
;if(name==bS||dh){var df=cx.parse;if(typeof df==c){try{if(df(z)===0&&!df(false)){de=df(dd);var dc=de[cd].length==5&&de[cd][0]===1;if(dc){try{dc=!df(ck);}
catch(dj){}
;if(dc){try{dc=df(cj)!==1;}
catch(dk){}
;}
;}
;}
;}
catch(dl){dc=false;}
;}
;if(!dh){return dc;}
;}
;return dg&&dc;}
;}
;if(!cJ(o)){var cV=ci;var cN=cl;var cv=R;var cY=bR;var cR=bG;var cF=bV;var cE=cJ(bT);if(!cU){var cD=Math.floor;var cM=[0,31,59,90,120,151,181,212,243,273,304,334];var cX=function(dm,dn){return cM[dn]+365*(dm-1970)+cD((dm-1969+(dn=+(dn>1)))/4)-cD((dm-1901+dn)/100)+cD((dm-1601+dn)/400);}
;}
;if(!(cG={}.hasOwnProperty)){cG=function(dp){var dq={},dr;if((dq.__bW=null,dq.__bW={"toString":1},dq).toString!=cr){cG=function(ds){var dt=this.__bW,du=ds in (this.__bW=null,this);this.__bW=dt;return du;}
;}
else {dr=dq.constructor;cG=function(dv){var parent=(this.constructor||dr).prototype;return dv in this&&!(dv in parent&&this[dv]===parent[dv]);}
;}
;dq=null;return cG.call(this,dp);}
;}
;var cH={'boolean':1,'number':1,'string':1,'undefined':1};var cP=function(dy,dw){var dx=typeof dy[dw];return dx==p?!!dy[dw]:!cH[dx];}
;cQ=function(dz,dA){var dF=0,dE,dC,dD,dB;(dE=function(){this.valueOf=0;}
).prototype.valueOf=0;dC=new dE();for(dD in dC){if(cG.call(dC,dD)){dF++ ;}
;}
;dE=dC=null;if(!dF){dC=[bW,U,y,bH,S,t,h];dB=function(dH,dI){var dJ=cr.call(dH)==cV,dK,length;var dG=!dJ&&typeof dH.constructor!=A&&cP(dH,w)?dH.hasOwnProperty:cG;for(dK in dH){if(!(dJ&&dK==v)&&dG.call(dH,dK)){dI(dK);}
;}
;for(length=dC.length;dK=dC[ --length];dG.call(dH,dK)&&dI(dK));}
;}
else if(dF==2){dB=function(dP,dL){var dO={},dM=cr.call(dP)==cV,dN;for(dN in dP){if(!(dM&&dN==v)&&!cG.call(dO,dN)&&(dO[dN]=1)&&cG.call(dP,dN)){dL(dN);}
;}
;}
;}
else {dB=function(dT,dQ){var dR=cr.call(dT)==cV,dS,dU;for(dS in dT){if(!(dR&&dS==v)&&cG.call(dT,dS)&&!(dU=dS===h)){dQ(dS);}
;}
;if(dU||cG.call(dT,(dS=h))){dQ(dS);}
;}
;}
;return dB(dz,dA);}
;if(!cJ(bL)){var cT={'92':cm,'34':C,'8':N,'12':K,'10':l,'13':X,'9':P};var cI=bU;var cW=function(dV,dW){return (cI+(dW||0)).slice(-dV);}
;var cB=bQ;var cL=function(dY){var eb=x,dX=0,length=dY.length,ec=length>10&&cE,ea;if(ec){ea=dY.split(B);}
;for(;dX<length;dX++ ){var ed=dY.charCodeAt(dX);switch(ed){case 8:case 9:case 10:case 12:case 13:case 34:case 92:eb+=cT[ed];break;default:if(ed<32){eb+=cB+cW(2,ed.toString(16));break;}
;eb+=ec?ea[dX]:cE?dY.charAt(dX):dY[dX];};}
;return eb+x;}
;var cs=function(ez,eo,ew,el,ek,ex,es){var et=eo[ez],ev,ei,ef,er,ey,ep,eA,en,em,ee,eu,ej,length,eg,eq,eh;try{et=eo[ez];}
catch(eB){}
;if(typeof et==ch&&et){ev=cr.call(et);if(ev==cN&&!cG.call(et,H)){if(et>-1/0&&et<1/0){if(cX){er=cD(et/864e5);for(ei=cD(er/365.2425)+1970-1;cX(ei+1,0)<=er;ei++ );for(ef=cD((er-cX(ei,0))/30.42);cX(ei,ef+1)<=er;ef++ );er=1+er-cX(ei,ef);ey=(et%864e5+864e5)%864e5;ep=cD(ey/36e5)%24;eA=cD(ey/6e4)%60;en=cD(ey/1e3)%60;em=ey%1e3;}
else {ei=et.getUTCFullYear();ef=et.getUTCMonth();er=et.getUTCDate();ep=et.getUTCHours();eA=et.getUTCMinutes();en=et.getUTCSeconds();em=et.getUTCMilliseconds();}
;et=(ei<=0||ei>=1e4?(ei<0?b:f)+cW(6,ei<0?-ei:ei):cW(4,ei))+b+cW(2,ef+1)+b+cW(2,er)+e+cW(2,ep)+I+cW(2,eA)+I+cW(2,en)+cf+cW(3,em)+O;}
else {et=null;}
;}
else if(typeof et.toJSON==c&&((ev!=cv&&ev!=cY&&ev!=cR)||cG.call(et,H))){et=et.toJSON(ez);}
;}
;if(ew){et=ew.call(eo,ez,et);}
;if(et===null){return bP;}
;ev=cr.call(et);if(ev==cF){return B+et;}
else if(ev==cv){return et>-1/0&&et<1/0?B+et:bP;}
else if(ev==cY){return cL(B+et);}
;if(typeof et==ch){for(length=es.length;length-- ;){if(es[length]===et){throw TypeError();}
;}
;es.push(et);ee=[];eg=ex;ex+=ek;if(ev==cR){for(ej=0,length=et.length;ej<length;eq||(eq=true),ej++ ){eu=cs(ej,et,ew,el,ek,ex,es);ee.push(eu===cC?bP:eu);}
;eh=eq?(ek?bJ+ex+ee.join(g+ex)+bK+eg+Y:(cc+ee.join(bO)+Y)):bM;}
else {cQ(el||et,function(eC){var eD=cs(eC,et,ew,el,ek,ex,es);if(eD!==cC){ee.push(cL(eC)+I+(ek?ce:B)+eD);}
;eq||(eq=true);}
);eh=eq?(ek?i+ex+ee.join(g+ex)+bK+eg+F:(T+ee.join(bO)+F)):s;}
;es.pop();return eh;}
;}
;cx.stringify=function(eK,eJ,eL){var eF,eG,eI;if(typeof eJ==c||typeof eJ==ch&&eJ){if(cr.call(eJ)==cV){eG=eJ;}
else if(cr.call(eJ)==cR){eI={};for(var eE=0,length=eJ.length,eH;eE<length;eH=eJ[eE++ ],((cr.call(eH)==cY||cr.call(eH)==cv)&&(eI[eH]=1)));}
;}
;if(eL){if(cr.call(eL)==cv){if((eL-=eL%1)>0){for(eF=B,eL>10&&(eL=10);eF.length<eL;eF+=ce);}
;}
else if(cr.call(eL)==cY){eF=eL.length<=10?eL:eL.slice(0,10);}
;}
;return cs(B,(eH={},eH[B]=eK,eH),eG,eI,eF,B,[]);}
;}
;if(!cJ(bS)){var cA=String.fromCharCode;var cz={'92':bX,'34':x,'47':M,'98':Q,'116':D,'110':bK,'102':cg,'114':G};var cq,cu;var cw=function(){cq=cu=null;throw SyntaxError();}
;var cS=function(){var eO=cu,length=eO.length,eN,eM,eQ,eP,eR;while(cq<length){eR=eO.charCodeAt(cq);switch(eR){case 9:case 10:case 13:case 32:cq++ ;break;case 123:case 125:case 91:case 93:case 58:case 44:eN=cE?eO.charAt(cq):eO[cq];cq++ ;return eN;case 34:for(eN=u,cq++ ;cq<length;){eR=eO.charCodeAt(cq);if(eR<32){cw();}
else if(eR==92){eR=eO.charCodeAt( ++cq);switch(eR){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:eN+=cz[eR];cq++ ;break;case 117:eM= ++cq;for(eQ=cq+4;cq<eQ;cq++ ){eR=eO.charCodeAt(cq);if(!(eR>=48&&eR<=57||eR>=97&&eR<=102||eR>=65&&eR<=70)){cw();}
;}
;eN+=cA(V+eO.slice(eM,cq));break;default:cw();};}
else {if(eR==34){break;}
;eR=eO.charCodeAt(cq);eM=cq;while(eR>=32&&eR!=92&&eR!=34){eR=eO.charCodeAt( ++cq);}
;eN+=eO.slice(eM,cq);}
;}
;if(eO.charCodeAt(cq)==34){cq++ ;return eN;}
;cw();default:eM=cq;if(eR==45){eP=true;eR=eO.charCodeAt( ++cq);}
;if(eR>=48&&eR<=57){if(eR==48&&((eR=eO.charCodeAt(cq+1)),eR>=48&&eR<=57)){cw();}
;eP=false;for(;cq<length&&((eR=eO.charCodeAt(cq)),eR>=48&&eR<=57);cq++ );if(eO.charCodeAt(cq)==46){eQ= ++cq;for(;eQ<length&&((eR=eO.charCodeAt(eQ)),eR>=48&&eR<=57);eQ++ );if(eQ==cq){cw();}
;cq=eQ;}
;eR=eO.charCodeAt(cq);if(eR==101||eR==69){eR=eO.charCodeAt( ++cq);if(eR==43||eR==45){cq++ ;}
;for(eQ=cq;eQ<length&&((eR=eO.charCodeAt(eQ)),eR>=48&&eR<=57);eQ++ );if(eQ==cq){cw();}
;cq=eQ;}
;return +eO.slice(eM,cq);}
;if(eP){cw();}
;if(eO.slice(cq,cq+4)==k){cq+=4;return true;}
else if(eO.slice(cq,cq+5)==m){cq+=5;return false;}
else if(eO.slice(cq,cq+4)==bP){cq+=4;return null;}
;cw();};}
;return ca;}
;var cK=function(eU){var eT,eS;if(eU==ca){cw();}
;if(typeof eU==E){if((cE?eU.charAt(0):eU[0])==u){return eU.slice(1);}
;if(eU==cc){eT=[];for(;;eS||(eS=true)){eU=cS();if(eU==Y){break;}
;if(eS){if(eU==bO){eU=cS();if(eU==Y){cw();}
;}
else {cw();}
;}
;if(eU==bO){cw();}
;eT.push(cK(eU));}
;return eT;}
else if(eU==T){eT={};for(;;eS||(eS=true)){eU=cS();if(eU==F){break;}
;if(eS){if(eU==bO){eU=cS();if(eU==F){cw();}
;}
else {cw();}
;}
;if(eU==bO||typeof eU!=E||(cE?eU.charAt(0):eU[0])!=u||cS()!=I){cw();}
;eT[eU.slice(1)]=cK(cS());}
;return eT;}
;cw();}
;return eU;}
;var cO=function(eV,eW,eX){var eY=ct(eV,eW,eX);if(eY===cC){delete eV[eW];}
else {eV[eW]=eY;}
;}
;var ct=function(fa,fb,fd){var fc=fa[fb],length;if(typeof fc==ch&&fc){if(cr.call(fc)==cR){for(length=fc.length;length-- ;){cO(fc,length,fd);}
;}
else {cQ(fc,function(fe){cO(fc,fe,fd);}
);}
;}
;return fd.call(fa,fb,fc);}
;cx.parse=function(ff,fi){var fg,fh;cq=0;cu=B+ff;fg=cK(cS());if(cS()!=ca){cw();}
;cq=cu=null;return fi&&cr.call(fi)==cV?ct((fh={},fh[B]=fg,fh),B,fi):fg;}
;}
;}
;if(cy){cp(function(){return cx;}
);}
;}
(this));}
());qx.lang.Json.stringify=window.JSON.stringify;qx.lang.Json.parse=window.JSON.parse;}
)();
(function(){var a="-",b="]",c='\\u',d="undefined",e="",f='\\$1',g="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h="\\\\",j='-',k="g",l="\\\"",m="qx.lang.String",n="(^|[^",o="0",p="%",q='"',r=' ',s='\n',t="])[";qx.Bootstrap.define(m,{statics:{__bp:g,__bq:null,__br:{},camelCase:function(v){var u=this.__br[v];if(!u){u=v.replace(/\-([a-z])/g,function(x,w){return w.toUpperCase();}
);if(v.indexOf(a)>=0){this.__br[v]=u;}
;}
;return u;}
,hyphenate:function(z){var y=this.__br[z];if(!y){y=z.replace(/[A-Z]/g,function(A){return (j+A.charAt(0).toLowerCase());}
);if(z.indexOf(a)==-1){this.__br[z]=y;}
;}
;return y;}
,capitalize:function(C){if(this.__bq===null){var B=c;this.__bq=new RegExp(n+this.__bp.replace(/[0-9A-F]{4}/g,function(D){return B+D;}
)+t+this.__bp.replace(/[0-9A-F]{4}/g,function(E){return B+E;}
)+b,k);}
;return C.replace(this.__bq,function(F){return F.toUpperCase();}
);}
,clean:function(G){return G.replace(/\s+/g,r).trim();}
,trimLeft:function(H){return H.replace(/^\s+/,e);}
,trimRight:function(I){return I.replace(/\s+$/,e);}
,startsWith:function(K,J){return K.indexOf(J)===0;}
,endsWith:function(M,L){return M.substring(M.length-L.length,M.length)===L;}
,repeat:function(N,O){return N.length>0?new Array(O+1).join(N):e;}
,pad:function(Q,length,P){var R=length-Q.length;if(R>0){if(typeof P===d){P=o;}
;return this.repeat(P,R)+Q;}
else {return Q;}
;}
,firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(T,S){return T.indexOf(S)!=-1;}
,format:function(U,V){var W=U;var i=V.length;while(i-- ){W=W.replace(new RegExp(p+(i+1),k),V[i]+e);}
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
(function(){var a="qx.event.type.Data",b="qx.event.type.Event",c="qx.data.IListData";qx.Interface.define(c,{events:{"change":a,"changeLength":b},members:{getItem:function(d){}
,setItem:function(e,f){}
,splice:function(g,h,i){}
,contains:function(j){}
,getLength:function(){}
,toArray:function(){}
}});}
)();
(function(){var a="qx.core.ValidationError";qx.Class.define(a,{extend:qx.type.BaseError});}
)();
(function(){var a="qx.util.RingBuffer";qx.Bootstrap.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);}
,members:{__bX:0,__bY:0,__ca:false,__cb:0,__cc:null,__cd:null,setMaxEntries:function(c){this.__cd=c;this.clear();}
,getMaxEntries:function(){return this.__cd;}
,addEntry:function(d){this.__cc[this.__bX]=d;this.__bX=this.__ce(this.__bX,1);var e=this.getMaxEntries();if(this.__bY<e){this.__bY++ ;}
;if(this.__ca&&(this.__cb<e)){this.__cb++ ;}
;}
,mark:function(){this.__ca=true;this.__cb=0;}
,clearMark:function(){this.__ca=false;}
,getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);}
,getEntries:function(f,j){if(f>this.__bY){f=this.__bY;}
;if(j&&this.__ca&&(f>this.__cb)){f=this.__cb;}
;if(f>0){var h=this.__ce(this.__bX,-1);var g=this.__ce(h,-f+1);var i;if(g<=h){i=this.__cc.slice(g,h+1);}
else {i=this.__cc.slice(g,this.__bY).concat(this.__cc.slice(0,h+1));}
;}
else {i=[];}
;return i;}
,clear:function(){this.__cc=new Array(this.getMaxEntries());this.__bY=0;this.__cb=0;this.__bX=0;}
,__ce:function(n,l){var k=this.getMaxEntries();var m=(n+l)%k;if(m<0){m+=k;}
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
(function(){var a="qx.log.Logger",b="[",c="The mixin '",d="...(+",e="array",f="The method '",g=")",h="warn",j="node",k="The event '",m="instance",n="info",o="string",p="Please consult the API documentation of this method for alternatives.",q="null",r="error",s="qx.debug",t="Please consult the API documentation of this class for alternatives.",u="#",v="class",w="' is deprecated: ",x=": ",y="Please consult the API documentation for alternatives.",z="document",A="{...(",B="",C="number",D="' from class '",E="The class '",F="stringify",G="' overrides a deprecated method: ",H="date",I="unknown",J="function",K="text[",L="]",M="[...(",N="boolean",O="\n",P=")}",Q="debug",R=")]",S="map",T="The constant '",U="undefined",V="object";qx.Bootstrap.define(a,{statics:{__cf:Q,setLevel:function(W){this.__cf=W;}
,getLevel:function(){return this.__cf;}
,setTreshold:function(X){this.__ci.setMaxMessages(X);}
,getTreshold:function(){return this.__ci.getMaxMessages();}
,__cg:{},__ch:0,register:function(bc){if(bc.$$id){return;}
;var Y=this.__ch++ ;this.__cg[Y]=bc;bc.$$id=Y;var ba=this.__cj;var bb=this.__ci.getAllLogEvents();for(var i=0,l=bb.length;i<l;i++ ){if(ba[bb[i].level]>=ba[this.__cf]){bc.process(bb[i]);}
;}
;}
,unregister:function(bd){var be=bd.$$id;if(be==null){return;}
;delete this.__cg[be];delete bd.$$id;}
,debug:function(bg,bf){qx.log.Logger.__ck(Q,arguments);}
,info:function(bi,bh){qx.log.Logger.__ck(n,arguments);}
,warn:function(bk,bj){qx.log.Logger.__ck(h,arguments);}
,error:function(bm,bl){qx.log.Logger.__ck(r,arguments);}
,trace:function(bn){var bo=qx.dev.StackTrace.getStackTrace();qx.log.Logger.__ck(n,[(typeof bn!==U?[bn].concat(bo):bo).join(O)]);}
,deprecatedMethodWarning:function(br,bp){if(qx.core.Environment.get(s)){var bq=qx.lang.Function.getName(br);this.warn(f+bq+w+(bp||p));this.trace();}
;}
,deprecatedClassWarning:function(bu,bs){if(qx.core.Environment.get(s)){var bt=bu.classname||I;this.warn(E+bt+w+(bs||t));this.trace();}
;}
,deprecatedEventWarning:function(bx,event,bw){if(qx.core.Environment.get(s)){var bv=bx.self?bx.self.classname:I;this.warn(k+(event||I)+D+bv+w+(bw||t));this.trace();}
;}
,deprecatedMixinWarning:function(bz,by){if(qx.core.Environment.get(s)){var bA=bz?bz.name:I;this.warn(c+bA+w+(by||t));this.trace();}
;}
,deprecatedConstantWarning:function(bE,bD,bB){if(qx.core.Environment.get(s)){if(bE.__defineGetter__){var self=this;var bC=bE[bD];bE.__defineGetter__(bD,function(){self.warn(T+bD+w+(bB||y));self.trace();return bC;}
);}
;}
;}
,deprecateMethodOverriding:function(bH,bG,bI,bF){if(qx.core.Environment.get(s)){var bJ=bH.constructor;while(bJ.classname!==bG.classname){if(bJ.prototype.hasOwnProperty(bI)){this.warn(f+qx.lang.Function.getName(bH[bI])+G+(bF||y));this.trace();break;}
;bJ=bJ.superclass;}
;}
;}
,clear:function(){this.__ci.clearHistory();}
,__ci:new qx.log.appender.RingBuffer(50),__cj:{debug:0,info:1,warn:2,error:3},__ck:function(bL,bN){var bQ=this.__cj;if(bQ[bL]<bQ[this.__cf]){return;}
;var bK=bN.length<2?null:bN[0];var bP=bK?1:0;var bM=[];for(var i=bP,l=bN.length;i<l;i++ ){bM.push(this.__cm(bN[i],true));}
;var bR=new Date;var bS={time:bR,offset:bR-qx.Bootstrap.LOADSTART,level:bL,items:bM,win:window};if(bK){if(bK.$$hash!==undefined){bS.object=bK.$$hash;}
else if(bK.$$type){bS.clazz=bK;}
else if(bK.constructor){bS.clazz=bK.constructor;}
;}
;this.__ci.process(bS);var bO=this.__cg;for(var bT in bO){bO[bT].process(bS);}
;}
,__cl:function(bV){if(bV===undefined){return U;}
else if(bV===null){return q;}
;if(bV.$$type){return v;}
;var bU=typeof bV;if(bU===J||bU==o||bU===C||bU===N){return bU;}
else if(bU===V){if(bV.nodeType){return j;}
else if(bV instanceof Error||(bV.name&&bV.message)){return r;}
else if(bV.classname){return m;}
else if(bV instanceof Array){return e;}
else if(bV instanceof Date){return H;}
else {return S;}
;}
;if(bV.toString){return F;}
;return I;}
,__cm:function(cc,cb){var cf=this.__cl(cc);var bY=I;var bX=[];switch(cf){case q:case U:bY=cf;break;case o:case C:case N:case H:bY=cc;break;case j:if(cc.nodeType===9){bY=z;}
else if(cc.nodeType===3){bY=K+cc.nodeValue+L;}
else if(cc.nodeType===1){bY=cc.nodeName.toLowerCase();if(cc.id){bY+=u+cc.id;}
;}
else {bY=j;}
;break;case J:bY=qx.lang.Function.getName(cc)||cf;break;case m:bY=cc.basename+b+cc.$$hash+L;break;case v:case F:bY=cc.toString();break;case r:bX=qx.dev.StackTrace.getStackTraceFromError(cc);bY=(cc.basename?cc.basename+x:B)+cc.toString();break;case e:if(cb){bY=[];for(var i=0,l=cc.length;i<l;i++ ){if(bY.length>20){bY.push(d+(l-i)+g);break;}
;bY.push(this.__cm(cc[i],false));}
;}
else {bY=M+cc.length+R;}
;break;case S:if(cb){var bW;var ce=[];for(var cd in cc){ce.push(cd);}
;ce.sort();bY=[];for(var i=0,l=ce.length;i<l;i++ ){if(bY.length>20){bY.push(d+(l-i)+g);break;}
;cd=ce[i];bW=this.__cm(cc[cd],false);bW.key=cd;bY.push(bW);}
;}
else {var ca=0;for(var cd in cc){ca++ ;}
;bY=A+ca+P;}
;break;};return {type:cf,text:bY,trace:bX};}
},defer:function(cg){var ch=qx.Bootstrap.$$logs;for(var i=0;i<ch.length;i++ ){cg.__ck(ch[i][0],ch[i][1]);}
;qx.Bootstrap.debug=cg.debug;qx.Bootstrap.info=cg.info;qx.Bootstrap.warn=cg.warn;qx.Bootstrap.error=cg.error;qx.Bootstrap.trace=cg.trace;}
});}
)();
(function(){var a="info",b="debug",c="warn",d="qx.core.MLogging",e="error";qx.Mixin.define(d,{members:{__cn:qx.log.Logger,debug:function(f){this.__co(b,arguments);}
,info:function(g){this.__co(a,arguments);}
,warn:function(h){this.__co(c,arguments);}
,error:function(i){this.__co(e,arguments);}
,trace:function(){this.__cn.trace(this);}
,__co:function(j,l){var k=qx.lang.Array.fromArguments(l);k.unshift(this);this.__cn[j].apply(this.__cn,k);}
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
(function(){var a="gecko",b="engine.name",c="",d="mshtml",f="qx.bom.Event",g="qx.debug",h="function",j="mouseover",k="transitionend",m="No method available to remove native listener from ",n="No method available to add native listener to ",o="HTMLEvents",p="css.transition",q="return;",r="on",s="undefined",t="pointerover",u="browser.documentmode",v="end-event";qx.Bootstrap.define(f,{statics:{addNativeListener:function(z,y,w,x){if(z.addEventListener){z.addEventListener(y,w,!!x);}
else if(z.attachEvent){z.attachEvent(r+y,w);}
else if(typeof z[r+y]!=s){z[r+y]=w;}
else {if(qx.core.Environment.get(g)){qx.log.Logger.warn(n+z);}
;}
;}
,removeNativeListener:function(D,C,A,B){if(D.removeEventListener){D.removeEventListener(C,A,!!B);}
else if(D.detachEvent){try{D.detachEvent(r+C,A);}
catch(e){if(e.number!==-2146828218){throw e;}
;}
;}
else if(typeof D[r+C]!=s){D[r+C]=null;}
else {if(qx.core.Environment.get(g)){qx.log.Logger.warn(m+D);}
;}
;}
,getTarget:function(e){return e.target||e.srcElement;}
,getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(b)==a)){try{e.relatedTarget&&e.relatedTarget.nodeType;}
catch(E){return null;}
;}
;return e.relatedTarget;}
else if(e.fromElement!==undefined&&(e.type===j||e.type===t)){return e.fromElement;}
else if(e.toElement!==undefined){return e.toElement;}
else {return null;}
;}
,preventDefault:function(e){if(e.preventDefault){e.preventDefault();}
else {try{e.keyCode=0;}
catch(F){}
;e.returnValue=false;}
;}
,stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();}
else {e.cancelBubble=true;}
;}
,fire:function(I,G){if(document.createEvent){var H=document.createEvent(o);H.initEvent(G,true,true);return !I.dispatchEvent(H);}
else {var H=document.createEventObject();return I.fireEvent(r+G,H);}
;}
,supportsEvent:function(N,M){if(M.toLowerCase().indexOf(k)!=-1&&qx.core.Environment.get(b)===d&&qx.core.Environment.get(u)>9){return true;}
;if(N!=window&&M.toLowerCase().indexOf(k)!=-1){var L=qx.core.Environment.get(p);return (L&&L[v]==M);}
;var J=r+M.toLowerCase();var K=(J in N);if(!K){K=typeof N[J]==h;if(!K&&N.setAttribute){N.setAttribute(J,q);K=typeof N[J]==h;N.removeAttribute(J);}
;}
;return K;}
,getEventName:function(O,R){var P=[c].concat(qx.bom.Style.VENDOR_PREFIXES);for(var i=0,l=P.length;i<l;i++ ){var Q=P[i].toLowerCase();if(qx.bom.Event.supportsEvent(O,Q+R)){return Q?Q+qx.lang.String.firstUp(R):R;}
;}
;return null;}
}});}
)();
(function(){var a="-",b="qx.bom.Style",c="",d='-',e="Webkit",f="ms",g=":",h=";",j="Moz",k="O",m="string",n="Khtml";qx.Bootstrap.define(b,{statics:{VENDOR_PREFIXES:[e,j,k,f,n],__cp:{},__cq:null,getPropertyName:function(q){var o=document.documentElement.style;if(o[q]!==undefined){return q;}
;for(var i=0,l=this.VENDOR_PREFIXES.length;i<l;i++ ){var p=this.VENDOR_PREFIXES[i]+qx.lang.String.firstUp(q);if(o[p]!==undefined){return p;}
;}
;return null;}
,getCssName:function(r){var s=this.__cp[r];if(!s){s=r.replace(/[A-Z]/g,function(t){return (d+t.charAt(0).toLowerCase());}
);if((/^ms/.test(s))){s=a+s;}
;this.__cp[r]=s;}
;return s;}
,getAppliedStyle:function(A,x,z,v){var C=qx.bom.Style.getCssName(x);var w=qx.dom.Node.getWindow(A);var u=(v!==false)?[null].concat(this.VENDOR_PREFIXES):[null];for(var i=0,l=u.length;i<l;i++ ){var y=false;var B=u[i]?a+u[i].toLowerCase()+a+z:z;if(qx.bom.Style.__cq){y=qx.bom.Style.__cq.call(w,C,B);}
else {A.style.cssText+=C+g+B+h;y=(typeof A.style[x]==m&&A.style[x]!==c);}
;if(y){return B;}
;}
;return null;}
},defer:function(D){if(window.CSS&&window.CSS.supports){qx.bom.Style.__cq=window.CSS.supports.bind(window.CSS);}
else if(window.supportsCSS){qx.bom.Style.__cq=window.supportsCSS.bind(window);}
;}
});}
)();
(function(){var a="rim_tabletos",b="10.1",c="Darwin",d="10.3",e="os.version",f="10.7",g="2003",h=")",i="iPhone",j="android",k="unix",l="ce",m="7",n="SymbianOS",o="10.5",p="os.name",q="10.9",r="|",s="MacPPC",t="95",u="iPod",v="10.8",w="\.",x="Win64",y="linux",z="me",A="10.2",B="Macintosh",C="Android",D="Windows",E="98",F="ios",G="vista",H="8",I="blackberry",J="2000",K="8.1",L="(",M="",N="win",O="Linux",P="10.6",Q="BSD",R="10.0",S="10.4",T="Mac OS X",U="iPad",V="X11",W="xp",X="symbian",Y="qx.bom.client.OperatingSystem",bo="g",bp="Win32",bq="osx",bk="webOS",bl="RIM Tablet OS",bm="BlackBerry",bn="nt4",br=".",bs="MacIntel",bt="webos";qx.Bootstrap.define(Y,{statics:{getName:function(){if(!navigator){return M;}
;var bu=navigator.platform||M;var bv=navigator.userAgent||M;if(bu.indexOf(D)!=-1||bu.indexOf(bp)!=-1||bu.indexOf(x)!=-1){return N;}
else if(bu.indexOf(B)!=-1||bu.indexOf(s)!=-1||bu.indexOf(bs)!=-1||bu.indexOf(T)!=-1){return bq;}
else if(bv.indexOf(bl)!=-1){return a;}
else if(bv.indexOf(bk)!=-1){return bt;}
else if(bu.indexOf(u)!=-1||bu.indexOf(i)!=-1||bu.indexOf(U)!=-1){return F;}
else if(bv.indexOf(C)!=-1){return j;}
else if(bu.indexOf(O)!=-1){return y;}
else if(bu.indexOf(V)!=-1||bu.indexOf(Q)!=-1||bu.indexOf(c)!=-1){return k;}
else if(bu.indexOf(n)!=-1){return X;}
else if(bu.indexOf(bm)!=-1){return I;}
;return M;}
,__cr:{"Windows NT 6.3":K,"Windows NT 6.2":H,"Windows NT 6.1":m,"Windows NT 6.0":G,"Windows NT 5.2":g,"Windows NT 5.1":W,"Windows NT 5.0":J,"Windows 2000":J,"Windows NT 4.0":bn,"Win 9x 4.90":z,"Windows CE":l,"Windows 98":E,"Win98":E,"Windows 95":t,"Win95":t,"Mac OS X 10_9":q,"Mac OS X 10.9":q,"Mac OS X 10_8":v,"Mac OS X 10.8":v,"Mac OS X 10_7":f,"Mac OS X 10.7":f,"Mac OS X 10_6":P,"Mac OS X 10.6":P,"Mac OS X 10_5":o,"Mac OS X 10.5":o,"Mac OS X 10_4":S,"Mac OS X 10.4":S,"Mac OS X 10_3":d,"Mac OS X 10.3":d,"Mac OS X 10_2":A,"Mac OS X 10.2":A,"Mac OS X 10_1":b,"Mac OS X 10.1":b,"Mac OS X 10_0":R,"Mac OS X 10.0":R},getVersion:function(){var bw=qx.bom.client.OperatingSystem.__cs(navigator.userAgent);if(bw==null){bw=qx.bom.client.OperatingSystem.__ct(navigator.userAgent);}
;if(bw!=null){return bw;}
else {return M;}
;}
,__cs:function(bx){var bA=[];for(var bz in qx.bom.client.OperatingSystem.__cr){bA.push(bz);}
;var bB=new RegExp(L+bA.join(r).replace(/\./g,w)+h,bo);var by=bB.exec(bx);if(by&&by[1]){return qx.bom.client.OperatingSystem.__cr[by[1]];}
;return null;}
,__ct:function(bF){var bG=bF.indexOf(C)!=-1;var bC=bF.match(/(iPad|iPhone|iPod)/i)?true:false;if(bG){var bE=new RegExp(/ Android (\d+(?:\.\d+)+)/i);var bH=bE.exec(bF);if(bH&&bH[1]){return bH[1];}
;}
else if(bC){var bI=new RegExp(/(CPU|iPhone|iPod) OS (\d+)_(\d+)(?:_(\d+))*\s+/);var bD=bI.exec(bF);if(bD&&bD[2]&&bD[3]){if(bD[4]){return bD[2]+br+bD[3]+br+bD[4];}
else {return bD[2]+br+bD[3];}
;}
;}
;return null;}
},defer:function(bJ){qx.core.Environment.add(p,bJ.getName);qx.core.Environment.add(e,bJ.getVersion);}
});}
)();
(function(){var a="CSS1Compat",b="IEMobile",c=" OPR/",d="msie",e="android",f="operamini",g="gecko",h="maple",i="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|iPad|iPhone|OmniWeb|Maxthon|Pre|PhantomJS|Mobile Safari|Safari",j="browser.quirksmode",k="browser.name",l="trident",m="mobile chrome",n=")(/| )([0-9]+\.[0-9])",o="iemobile",p="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",q="IEMobile|Maxthon|MSIE|Trident",r="opera mobi",s="Mobile Safari",t="Maple",u="operamobile",v="ie",w="mobile safari",x="qx.bom.client.Browser",y="(Maple )([0-9]+\.[0-9]+\.[0-9]*)",z="",A="opera mini",B="(",C="browser.version",D="opera",E="ce",F=")(/|)?([0-9]+\.[0-9])?",G="mshtml",H="Opera Mini|Opera Mobi|Opera",I="webkit",J="browser.documentmode",K="5.0",L="Mobile/";qx.Bootstrap.define(x,{statics:{getName:function(){var O=navigator.userAgent;var P=new RegExp(B+qx.bom.client.Browser.__cu+F);var N=O.match(P);if(!N){return z;}
;var name=N[1].toLowerCase();var M=qx.bom.client.Engine.getName();if(M===I){if(name===e){name=m;}
else if(O.indexOf(s)!==-1||O.indexOf(L)!==-1){name=w;}
else if(O.indexOf(c)!=-1){name=D;}
;}
else if(M===G){if(name===d||name===l){name=v;if(qx.bom.client.OperatingSystem.getVersion()===E){name=o;}
;var P=new RegExp(b);if(O.match(P)){name=o;}
;}
;}
else if(M===D){if(name===r){name=u;}
else if(name===A){name=f;}
;}
else if(M===g){if(O.indexOf(t)!==-1){name=h;}
;}
;return name;}
,getVersion:function(){var S=navigator.userAgent;var T=new RegExp(B+qx.bom.client.Browser.__cu+n);var Q=S.match(T);if(!Q){return z;}
;var name=Q[1].toLowerCase();var R=Q[3];if(S.match(/Version(\/| )([0-9]+\.[0-9])/)){R=RegExp.$2;}
;if(qx.bom.client.Engine.getName()==G){R=qx.bom.client.Engine.getVersion();if(name===d&&qx.bom.client.OperatingSystem.getVersion()==E){R=K;}
;}
;if(qx.bom.client.Browser.getName()==h){T=new RegExp(y);Q=S.match(T);if(!Q){return z;}
;R=Q[2];}
;if(qx.bom.client.Engine.getName()==I||qx.bom.client.Browser.getName()==D){if(S.match(/OPR(\/| )([0-9]+\.[0-9])/)){R=RegExp.$2;}
;}
;return R;}
,getDocumentMode:function(){if(document.documentMode){return document.documentMode;}
;return 0;}
,getQuirksMode:function(){if(qx.bom.client.Engine.getName()==G&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;}
else {return document.compatMode!==a;}
;}
,__cu:{"webkit":i,"gecko":p,"mshtml":q,"opera":H}[qx.bom.client.Engine.getName()]},defer:function(U){qx.core.Environment.add(k,U.getName),qx.core.Environment.add(C,U.getVersion),qx.core.Environment.add(J,U.getDocumentMode),qx.core.Environment.add(j,U.getQuirksMode);}
});}
)();
(function(){var a="qx.bom.client.CssTransition",b="E",c="transitionEnd",d="e",e="nd",f="transition",g="css.transition",h="Trans";qx.Bootstrap.define(a,{statics:{getTransitionName:function(){return qx.bom.Style.getPropertyName(f);}
,getSupport:function(){var name=qx.bom.client.CssTransition.getTransitionName();if(!name){return null;}
;var i=qx.bom.Event.getEventName(window,c);i=i==c?i.toLowerCase():i;if(!i){i=name+(name.indexOf(h)>0?b:d)+e;}
;return {name:name,"end-event":i};}
},defer:function(j){qx.core.Environment.add(g,j.getSupport);}
});}
)();
(function(){var a="Failed to remove event listener for id '",b="': ",c="Invalid context for callback.",d="Invalid capture flag.",e="Failed to add event listener for type '",f="UNKNOWN_",g="'",h="|bubble",j="Invalid event type.",k="There is no event handler for the event '",m=" from the target '",n="qx.debug",o="capture",p="__cz",q="|capture",r="Invalid callback function",s="qx.event.Manager",t="' on target '",u="'!",v="Could not dispatch event '",w="",x="_",y="__cA",z="DOM_",A="Invalid event target.",B="No dispatcher can handle event of type ",C="QX_",D=" to the target '",E="Failed to remove event listener for type '",F=" on ",G="Invalid id type.",H="c",I="|",J="unload",K="DOCUMENT_",L="Invalid object: ",M="Invalid Target.",N="WIN_",O="Invalid event object.";qx.Class.define(s,{extend:Object,construct:function(P,Q){this.__cv=P;this.__cw=qx.core.ObjectRegistry.toHashCode(P);this.__cx=Q;if(P.qx!==qx){var self=this;qx.bom.Event.addNativeListener(P,J,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(P,J,arguments.callee);self.dispose();}
));}
;this.__cy={};this.__cz={};this.__cA={};this.__cB={};}
,statics:{__cC:0,getNextUniqueId:function(){return (this.__cC++ )+w;}
},members:{__cx:null,__cy:null,__cA:null,__cD:null,__cz:null,__cB:null,__cv:null,__cw:null,getWindow:function(){return this.__cv;}
,getWindowId:function(){return this.__cw;}
,getHandler:function(S){var R=this.__cz[S.classname];if(R){return R;}
;return this.__cz[S.classname]=new S(this);}
,getDispatcher:function(U){var T=this.__cA[U.classname];if(T){return T;}
;return this.__cA[U.classname]=new U(this,this.__cx);}
,getListeners:function(W,bb,V){var Y=W.$$hash||qx.core.ObjectRegistry.toHashCode(W);var bc=this.__cy[Y];if(!bc){return null;}
;var ba=bb+(V?q:h);var X=bc[ba];return X?X.concat():null;}
,getAllListeners:function(){return this.__cy;}
,serializeListeners:function(be){var bi=be.$$hash||qx.core.ObjectRegistry.toHashCode(be);var bm=this.__cy[bi];var bh=[];if(bm){var bf,bl,bd,bg,bj;for(var bk in bm){bf=bk.indexOf(I);bl=bk.substring(0,bf);bd=bk.charAt(bf+1)==H;bg=bm[bk];for(var i=0,l=bg.length;i<l;i++ ){bj=bg[i];bh.push({self:bj.context,handler:bj.handler,type:bl,capture:bd});}
;}
;}
;return bh;}
,toggleAttachedEvents:function(bp,bo){var bs=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);var bv=this.__cy[bs];if(bv){var bq,bu,bn,br;for(var bt in bv){bq=bt.indexOf(I);bu=bt.substring(0,bq);bn=bt.charCodeAt(bq+1)===99;br=bv[bt];if(bo){this.__cE(bp,bu,bn);}
else {this.__cF(bp,bu,bn);}
;}
;}
;}
,hasListener:function(bx,bB,bw){if(qx.core.Environment.get(n)){if(bx==null){qx.log.Logger.trace(this);throw new Error(L+bx);}
;}
;var bz=bx.$$hash||qx.core.ObjectRegistry.toHashCode(bx);var bC=this.__cy[bz];if(!bC){return false;}
;var bA=bB+(bw?q:h);var by=bC[bA];return !!(by&&by.length>0);}
,importListeners:function(bD,bF){if(qx.core.Environment.get(n)){if(bD==null){qx.log.Logger.trace(this);throw new Error(L+bD);}
;}
;var bK=bD.$$hash||qx.core.ObjectRegistry.toHashCode(bD);var bL=this.__cy[bK]={};var bH=qx.event.Manager;for(var bE in bF){var bI=bF[bE];var bJ=bI.type+(bI.capture?q:h);var bG=bL[bJ];if(!bG){bG=bL[bJ]=[];this.__cE(bD,bI.type,bI.capture);}
;bG.push({handler:bI.listener,context:bI.self,unique:bI.unique||(bH.__cC++ )+w});}
;}
,addListener:function(bO,bV,bQ,self,bM){if(qx.core.Environment.get(n)){var bS=e+bV+g+D+bO.classname+b;qx.core.Assert.assertObject(bO,bS+M);qx.core.Assert.assertString(bV,bS+j);qx.core.Assert.assertFunction(bQ,bS+r);if(bM!==undefined){qx.core.Assert.assertBoolean(bM,d);}
;}
;var bN=bO.$$hash||qx.core.ObjectRegistry.toHashCode(bO);var bW=this.__cy[bN];if(!bW){bW=this.__cy[bN]={};}
;var bR=bV+(bM?q:h);var bP=bW[bR];if(!bP){bP=bW[bR]=[];}
;if(bP.length===0){this.__cE(bO,bV,bM);}
;var bU=(qx.event.Manager.__cC++ )+w;var bT={handler:bQ,context:self,unique:bU};bP.push(bT);return bR+I+bU;}
,findHandler:function(cc,cl){var cj=false,cb=false,cm=false,bX=false;var ci;if(cc.nodeType===1){cj=true;ci=z+cc.tagName.toLowerCase()+x+cl;}
else if(cc.nodeType===9){bX=true;ci=K+cl;}
else if(cc==this.__cv){cb=true;ci=N+cl;}
else if(cc.classname){cm=true;ci=C+cc.classname+x+cl;}
else {ci=f+cc+x+cl;}
;var ca=this.__cB;if(ca[ci]){return ca[ci];}
;var ch=this.__cx.getHandlers();var cd=qx.event.IEventHandler;var cf,cg,ce,bY;for(var i=0,l=ch.length;i<l;i++ ){cf=ch[i];ce=cf.SUPPORTED_TYPES;if(ce&&!ce[cl]){continue;}
;bY=cf.TARGET_CHECK;if(bY){var ck=false;if(cj&&((bY&cd.TARGET_DOMNODE)!=0)){ck=true;}
else if(cb&&((bY&cd.TARGET_WINDOW)!=0)){ck=true;}
else if(cm&&((bY&cd.TARGET_OBJECT)!=0)){ck=true;}
else if(bX&&((bY&cd.TARGET_DOCUMENT)!=0)){ck=true;}
;if(!ck){continue;}
;}
;cg=this.getHandler(ch[i]);if(cf.IGNORE_CAN_HANDLE||cg.canHandleEvent(cc,cl)){ca[ci]=cg;return cg;}
;}
;return null;}
,__cE:function(cq,cp,cn){var co=this.findHandler(cq,cp);if(co){co.registerEvent(cq,cp,cn);return;}
;if(qx.core.Environment.get(n)){qx.log.Logger.warn(this,k+cp+t+cq+u);}
;}
,removeListener:function(ct,cz,cv,self,cr){if(qx.core.Environment.get(n)){var cx=E+cz+g+m+ct.classname+b;qx.core.Assert.assertObject(ct,cx+M);qx.core.Assert.assertString(cz,cx+j);qx.core.Assert.assertFunction(cv,cx+r);if(self!==undefined){qx.core.Assert.assertObject(self,c);}
;if(cr!==undefined){qx.core.Assert.assertBoolean(cr,d);}
;}
;var cs=ct.$$hash||qx.core.ObjectRegistry.toHashCode(ct);var cA=this.__cy[cs];if(!cA){return false;}
;var cw=cz+(cr?q:h);var cu=cA[cw];if(!cu){return false;}
;var cy;for(var i=0,l=cu.length;i<l;i++ ){cy=cu[i];if(cy.handler===cv&&cy.context===self){qx.lang.Array.removeAt(cu,i);if(cu.length==0){this.__cF(ct,cz,cr);}
;return true;}
;}
;return false;}
,removeListenerById:function(cD,cL){if(qx.core.Environment.get(n)){var cH=a+cL+g+m+cD.classname+b;qx.core.Assert.assertObject(cD,cH+M);qx.core.Assert.assertString(cL,cH+G);}
;var cF=cL.split(I);var cK=cF[0];var cB=cF[1].charCodeAt(0)==99;var cJ=cF[2];var cC=cD.$$hash||qx.core.ObjectRegistry.toHashCode(cD);var cM=this.__cy[cC];if(!cM){return false;}
;var cG=cK+(cB?q:h);var cE=cM[cG];if(!cE){return false;}
;var cI;for(var i=0,l=cE.length;i<l;i++ ){cI=cE[i];if(cI.unique===cJ){qx.lang.Array.removeAt(cE,i);if(cE.length==0){this.__cF(cD,cK,cB);}
;return true;}
;}
;return false;}
,removeAllListeners:function(cO){var cQ=cO.$$hash||qx.core.ObjectRegistry.toHashCode(cO);var cT=this.__cy[cQ];if(!cT){return false;}
;var cP,cS,cN;for(var cR in cT){if(cT[cR].length>0){cP=cR.split(I);cS=cP[0];cN=cP[1]===o;this.__cF(cO,cS,cN);}
;}
;delete this.__cy[cQ];return true;}
,deleteAllListeners:function(cU){delete this.__cy[cU];}
,__cF:function(cY,cX,cV){var cW=this.findHandler(cY,cX);if(cW){cW.unregisterEvent(cY,cX,cV);return;}
;if(qx.core.Environment.get(n)){qx.log.Logger.warn(this,k+cX+t+cY+u);}
;}
,dispatchEvent:function(db,event){if(qx.core.Environment.get(n)){var df=v+event+t+db.classname+b;qx.core.Assert.assertNotUndefined(db,df+A);qx.core.Assert.assertNotNull(db,df+A);qx.core.Assert.assertInstance(event,qx.event.type.Event,df+O);}
;var dg=event.getType();if(!event.getBubbles()&&!this.hasListener(db,dg)){qx.event.Pool.getInstance().poolObject(event);return true;}
;if(!event.getTarget()){event.setTarget(db);}
;var de=this.__cx.getDispatchers();var dd;var da=false;for(var i=0,l=de.length;i<l;i++ ){dd=this.getDispatcher(de[i]);if(dd.canDispatchEvent(db,event,dg)){dd.dispatchEvent(db,event,dg);da=true;break;}
;}
;if(!da){if(qx.core.Environment.get(n)){qx.log.Logger.error(this,B+dg+F+db);}
;return true;}
;var dc=event.getDefaultPrevented();qx.event.Pool.getInstance().poolObject(event);return !dc;}
,dispose:function(){this.__cx.removeManager(this);qx.util.DisposeUtil.disposeMap(this,p);qx.util.DisposeUtil.disposeMap(this,y);this.__cy=this.__cv=this.__cD=null;this.__cx=this.__cB=null;}
}});}
)();
(function(){var a="qx.event.IEventHandler";qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(c,b){}
,registerEvent:function(f,e,d){}
,unregisterEvent:function(i,h,g){}
}});}
)();
(function(){var c="Create event of type ",d="Invalid event dispatcher!",e="': ",f="Invalid event handler.",g="qx.debug",h=" with undefined class. Please use null to explicit fallback to default event type!",i="' on target '",j="Invalid event target.",k="Could not fire event '",l="qx.event.Registration.getManager(null) was called!",m="undefined",n="qx.event.Registration";qx.Class.define(n,{statics:{__cG:{},getManager:function(q){if(q==null){if(qx.core.Environment.get(g)){qx.log.Logger.error(l);qx.log.Logger.trace(this);}
;q=window;}
else if(q.nodeType){q=qx.dom.Node.getWindow(q);}
else if(!qx.dom.Node.isWindow(q)){q=window;}
;var p=q.$$hash||qx.core.ObjectRegistry.toHashCode(q);var o=this.__cG[p];if(!o){o=new qx.event.Manager(q,this);this.__cG[p]=o;}
;return o;}
,removeManager:function(r){var s=r.getWindowId();delete this.__cG[s];}
,addListener:function(w,v,t,self,u){return this.getManager(w).addListener(w,v,t,self,u);}
,removeListener:function(A,z,x,self,y){return this.getManager(A).removeListener(A,z,x,self,y);}
,removeListenerById:function(B,C){return this.getManager(B).removeListenerById(B,C);}
,removeAllListeners:function(D){return this.getManager(D).removeAllListeners(D);}
,deleteAllListeners:function(F){var E=F.$$hash;if(E){this.getManager(F).deleteAllListeners(E);}
;}
,hasListener:function(I,H,G){return this.getManager(I).hasListener(I,H,G);}
,serializeListeners:function(J){return this.getManager(J).serializeListeners(J);}
,createEvent:function(K,N,L){if(qx.core.Environment.get(g)){if(arguments.length>1&&N===undefined){throw new Error(c+K+h);}
;}
;if(N==null){N=qx.event.type.Event;}
;var M=qx.event.Pool.getInstance().getObject(N);L?M.init.apply(M,L):M.init();if(K){M.setType(K);}
;return M;}
,dispatchEvent:function(O,event){return this.getManager(O).dispatchEvent(O,event);}
,fireEvent:function(P,U,S,R){if(qx.core.Environment.get(g)){if(arguments.length>2&&S===undefined&&R!==undefined){throw new Error(c+U+h);}
;var T=k+U+i+(P?P.classname:m)+e;qx.core.Assert.assertNotUndefined(P,T+j);qx.core.Assert.assertNotNull(P,T+j);}
;var Q=this.createEvent(U,S||null,R);return this.getManager(P).dispatchEvent(P,Q);}
,fireNonBubblingEvent:function(V,bb,Y,X){if(qx.core.Environment.get(g)){if(arguments.length>2&&Y===undefined&&X!==undefined){throw new Error(c+bb+h);}
;}
;var ba=this.getManager(V);if(!ba.hasListener(V,bb,false)){return true;}
;var W=this.createEvent(bb,Y||null,X);return ba.dispatchEvent(V,W);}
,PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cz:[],addHandler:function(bc){if(qx.core.Environment.get(g)){qx.core.Assert.assertInterface(bc,qx.event.IEventHandler,f);}
;this.__cz.push(bc);this.__cz.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getHandlers:function(){return this.__cz;}
,__cA:[],addDispatcher:function(be,bd){if(qx.core.Environment.get(g)){qx.core.Assert.assertInterface(be,qx.event.IEventDispatcher,d);}
;this.__cA.push(be);this.__cA.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getDispatchers:function(){return this.__cA;}
}});}
)();
(function(){var a="qx.core.MEvent";qx.Mixin.define(a,{members:{__cH:qx.event.Registration,addListener:function(d,b,self,c){if(!this.$$disposed){return this.__cH.addListener(this,d,b,self,c);}
;return null;}
,addListenerOnce:function(h,f,self,g){var i=function(e){this.removeListener(h,f,this,g);f.call(self||this,e);}
;if(!f.$$wrapped_callback){f.$$wrapped_callback={};}
;f.$$wrapped_callback[h]=i;return this.addListener(h,i,this,g);}
,removeListener:function(l,j,self,k){if(!this.$$disposed){if(j.$$wrapped_callback&&j.$$wrapped_callback[l]){var m=j.$$wrapped_callback[l];delete j.$$wrapped_callback[l];j=m;}
;return this.__cH.removeListener(this,l,j,self,k);}
;return false;}
,removeListenerById:function(n){if(!this.$$disposed){return this.__cH.removeListenerById(this,n);}
;return false;}
,hasListener:function(p,o){return this.__cH.hasListener(this,p,o);}
,dispatchEvent:function(q){if(!this.$$disposed){return this.__cH.dispatchEvent(this,q);}
;return true;}
,fireEvent:function(s,t,r){if(!this.$$disposed){return this.__cH.fireEvent(this,s,t,r);}
;return true;}
,fireNonBubblingEvent:function(v,w,u){if(!this.$$disposed){return this.__cH.fireNonBubblingEvent(this,v,w,u);}
;return true;}
,fireDataEvent:function(z,A,x,y){if(!this.$$disposed){if(x===undefined){x=null;}
;return this.__cH.fireNonBubblingEvent(this,z,qx.event.type.Data,[A,x,!!y]);}
;return true;}
}});}
)();
(function(){var a="qx.event.IEventDispatcher";qx.Interface.define(a,{members:{canDispatchEvent:function(c,event,b){this.assertInstance(event,qx.event.type.Event);this.assertString(b);}
,dispatchEvent:function(e,event,d){this.assertInstance(event,qx.event.type.Event);this.assertString(d);}
}});}
)();
(function(){var a="qx.core.MProperty",b="get",c="reset",d="No such property: ",e="set";qx.Mixin.define(a,{members:{set:function(g,h){var f=qx.core.Property.$$method.set;if(qx.Bootstrap.isString(g)){if(!this[f[g]]){if(this[e+qx.Bootstrap.firstUp(g)]!=undefined){this[e+qx.Bootstrap.firstUp(g)](h);return this;}
;throw new Error(d+g);}
;return this[f[g]](h);}
else {for(var i in g){if(!this[f[i]]){if(this[e+qx.Bootstrap.firstUp(i)]!=undefined){this[e+qx.Bootstrap.firstUp(i)](g[i]);continue;}
;throw new Error(d+i);}
;this[f[i]](g[i]);}
;return this;}
;}
,get:function(k){var j=qx.core.Property.$$method.get;if(!this[j[k]]){if(this[b+qx.Bootstrap.firstUp(k)]!=undefined){return this[b+qx.Bootstrap.firstUp(k)]();}
;throw new Error(d+k);}
;return this[j[k]]();}
,reset:function(m){var l=qx.core.Property.$$method.reset;if(!this[l[m]]){if(this[c+qx.Bootstrap.firstUp(m)]!=undefined){this[c+qx.Bootstrap.firstUp(m)]();return;}
;throw new Error(d+m);}
;this[l[m]]();}
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
,assertArrayEquals:function(bc,bd,be){qx.core.Assert.assertArrayEquals(bc,bd,be);}
,assertKeyInMap:function(bh,bg,bf){qx.core.Assert.assertKeyInMap(bh,bg,bf);}
,assertFunction:function(bj,bi){qx.core.Assert.assertFunction(bj,bi);}
,assertString:function(bl,bk){qx.core.Assert.assertString(bl,bk);}
,assertBoolean:function(bn,bm){qx.core.Assert.assertBoolean(bn,bm);}
,assertNumber:function(bp,bo){qx.core.Assert.assertNumber(bp,bo);}
,assertPositiveNumber:function(br,bq){qx.core.Assert.assertPositiveNumber(br,bq);}
,assertInteger:function(bt,bs){qx.core.Assert.assertInteger(bt,bs);}
,assertPositiveInteger:function(bv,bu){qx.core.Assert.assertPositiveInteger(bv,bu);}
,assertInRange:function(by,bz,bx,bw){qx.core.Assert.assertInRange(by,bz,bx,bw);}
,assertObject:function(bB,bA){qx.core.Assert.assertObject(bB,bA);}
,assertArray:function(bD,bC){qx.core.Assert.assertArray(bD,bC);}
,assertMap:function(bF,bE){qx.core.Assert.assertMap(bF,bE);}
,assertRegExp:function(bH,bG){qx.core.Assert.assertRegExp(bH,bG);}
,assertType:function(bK,bJ,bI){qx.core.Assert.assertType(bK,bJ,bI);}
,assertInstance:function(bM,bN,bL){qx.core.Assert.assertInstance(bM,bN,bL);}
,assertInterface:function(bQ,bP,bO){qx.core.Assert.assertInterface(bQ,bP,bO);}
,assertCssColor:function(bR,bT,bS){qx.core.Assert.assertCssColor(bR,bT,bS);}
,assertElement:function(bV,bU){qx.core.Assert.assertElement(bV,bU);}
,assertQxObject:function(bX,bW){qx.core.Assert.assertQxObject(bX,bW);}
,assertQxWidget:function(ca,bY){qx.core.Assert.assertQxWidget(ca,bY);}
}});}
)();
(function(){var a="module.events",b="Cloning only possible with properties.",c="qx.core.Object",d="]: ",e="module.property",f="qx.debug",g="Disposing ",h="qx.debug.dispose.level",j="]",k="Cannot call super class. Method is not derived: ",m="' in ",n="[",o="Missing destruct definition for '",p="object",q="Object";qx.Class.define(c,{extend:Object,include:qx.core.Environment.filter({"module.databinding":qx.data.MBinding,"module.logger":qx.core.MLogging,"module.events":qx.core.MEvent,"module.property":qx.core.MProperty,"qx.debug":qx.core.MAssert}),construct:function(){qx.core.ObjectRegistry.register(this);}
,statics:{$$type:q},members:{__K:qx.core.Environment.get(e)?qx.core.Property:null,toHashCode:function(){return this.$$hash;}
,toString:function(){return this.classname+n+this.$$hash+j;}
,base:function(r,s){if(qx.core.Environment.get(f)){if(!qx.Bootstrap.isFunction(r.callee.base)){throw new Error(k+r.callee.displayName);}
;}
;if(arguments.length===1){return r.callee.base.call(this);}
else {return r.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}
;}
,self:function(t){return t.callee.self;}
,clone:function(){if(!qx.core.Environment.get(e)){throw new Error(b);}
;var v=this.constructor;var u=new v;var x=qx.Class.getProperties(v);var w=this.__K.$$store.user;var y=this.__K.$$method.set;var name;for(var i=0,l=x.length;i<l;i++ ){name=x[i];if(this.hasOwnProperty(w[name])){u[y[name]](this[w[name]]);}
;}
;return u;}
,__cI:null,setUserData:function(z,A){if(!this.__cI){this.__cI={};}
;this.__cI[z]=A;}
,getUserData:function(C){if(!this.__cI){return null;}
;var B=this.__cI[C];return B===undefined?null:B;}
,isDisposed:function(){return this.$$disposed||false;}
,dispose:function(){if(this.$$disposed){return;}
;this.$$disposed=true;this.$$instance=null;this.$$allowconstruct=null;if(qx.core.Environment.get(f)){if(qx.core.Environment.get(h)>2){qx.Bootstrap.debug(this,g+this.classname+n+this.toHashCode()+j);}
;}
;var F=this.constructor;var D;while(F.superclass){if(F.$$destructor){F.$$destructor.call(this);}
;if(F.$$includes){D=F.$$flatIncludes;for(var i=0,l=D.length;i<l;i++ ){if(D[i].$$destructor){D[i].$$destructor.call(this);}
;}
;}
;F=F.superclass;}
;if(qx.core.Environment.get(f)){if(qx.core.Environment.get(h)>0){var G,E;for(G in this){E=this[G];if(E!==null&&typeof E===p&&!(qx.Bootstrap.isString(E))){if(this.constructor.prototype[G]!=null){continue;}
;if(qx.core.Environment.get(h)>1){qx.Bootstrap.warn(this,o+G+m+this.classname+n+this.toHashCode()+d+E);delete this[G];}
;}
;}
;}
;}
;}
,_disposeObjects:function(H){qx.util.DisposeUtil.disposeObjects(this,arguments);}
,_disposeSingletonObjects:function(I){qx.util.DisposeUtil.disposeObjects(this,arguments,true);}
,_disposeArray:function(J){qx.util.DisposeUtil.disposeArray(this,J);}
,_disposeMap:function(K){qx.util.DisposeUtil.disposeMap(this,K);}
},environment:{"qx.debug.dispose.level":0},destruct:function(){if(qx.core.Environment.get(a)){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);}
else {qx.event.Registration.deleteAllListeners(this);}
;}
;qx.core.ObjectRegistry.unregister(this);this.__cI=null;if(qx.core.Environment.get(e)){var N=this.constructor;var R;var S=this.__K.$$store;var P=S.user;var Q=S.theme;var L=S.inherit;var O=S.useinit;var M=S.init;while(N){R=N.$$properties;if(R){for(var name in R){if(R[name].dereference){this[P[name]]=this[Q[name]]=this[L[name]]=this[O[name]]=this[M[name]]=undefined;}
;}
;}
;N=N.superclass;}
;}
;}
});}
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
,destroyContainer:function(K){if(qx.core.Environment.get(c)){if(K instanceof qx.ui.mobile.core.Widget){qx.core.Assert.assertTrue(this.__cJ(K),g);}
else {qx.core.Assert.assertQxWidget(K,m);qx.core.Assert.assertTrue(this.__cJ(K),p+n+d);}
;}
;var J=[];this._collectContainerChildren(K,J);var L=J.length;for(var i=L-1;i>=0;i-- ){J[i].destroy();}
;K.destroy();}
,_collectContainerChildren:function(O,N){var P=O.getChildren();for(var i=0;i<P.length;i++ ){var M=P[i];N.push(M);if(this.__cJ(M)){this._collectContainerChildren(M,N);}
;}
;}
,__cJ:function(R){var Q=[];if(R instanceof qx.ui.mobile.core.Widget){Q=[qx.ui.mobile.container.Composite];}
else {Q=[qx.ui.container.Composite,qx.ui.container.Scroll,qx.ui.container.SlideBar,qx.ui.container.Stack];}
;for(var i=0,l=Q.length;i<l;i++ ){if(typeof Q[i]!==b&&qx.Class.isSubClassOf(R.constructor,Q[i])){return true;}
;}
;return false;}
}});}
)();
(function(){var a="Cannot stop propagation on a non bubbling event: ",b="qx.debug",c="Invalid argument value 'cancelable'.",d="Cannot prevent default action on a non cancelable event: ",e="Invalid argument value 'canBubble'.",f="qx.event.type.Event";qx.Class.define(f,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(h,g){if(qx.core.Environment.get(b)){if(h!==undefined){qx.core.Assert.assertBoolean(h,e);}
;if(g!==undefined){qx.core.Assert.assertBoolean(g,c);}
;}
;this._type=null;this._target=null;this._currentTarget=null;this._relatedTarget=null;this._originalTarget=null;this._stopPropagation=false;this._preventDefault=false;this._bubbles=!!h;this._cancelable=!!g;this._timeStamp=(new Date()).getTime();this._eventPhase=null;return this;}
,clone:function(i){if(i){var j=i;}
else {var j=qx.event.Pool.getInstance().getObject(this.constructor);}
;j._type=this._type;j._target=this._target;j._currentTarget=this._currentTarget;j._relatedTarget=this._relatedTarget;j._originalTarget=this._originalTarget;j._stopPropagation=this._stopPropagation;j._bubbles=this._bubbles;j._preventDefault=this._preventDefault;j._cancelable=this._cancelable;return j;}
,stop:function(){if(this._bubbles){this.stopPropagation();}
;if(this._cancelable){this.preventDefault();}
;}
,stopPropagation:function(){if(qx.core.Environment.get(b)){this.assertTrue(this._bubbles,a+this.getType());}
;this._stopPropagation=true;}
,getPropagationStopped:function(){return !!this._stopPropagation;}
,preventDefault:function(){if(qx.core.Environment.get(b)){this.assertTrue(this._cancelable,d+this.getType());}
;this._preventDefault=true;}
,getDefaultPrevented:function(){return !!this._preventDefault;}
,getType:function(){return this._type;}
,setType:function(k){this._type=k;}
,getEventPhase:function(){return this._eventPhase;}
,setEventPhase:function(l){this._eventPhase=l;}
,getTimeStamp:function(){return this._timeStamp;}
,getTarget:function(){return this._target;}
,setTarget:function(m){this._target=m;}
,getCurrentTarget:function(){return this._currentTarget||this._target;}
,setCurrentTarget:function(n){this._currentTarget=n;}
,getRelatedTarget:function(){return this._relatedTarget;}
,setRelatedTarget:function(o){this._relatedTarget=o;}
,getOriginalTarget:function(){return this._originalTarget;}
,setOriginalTarget:function(p){this._originalTarget=p;}
,getBubbles:function(){return this._bubbles;}
,setBubbles:function(q){this._bubbles=q;}
,isCancelable:function(){return this._cancelable;}
,setCancelable:function(r){this._cancelable=r;}
},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;}
});}
)();
(function(){var a="qx.util.ObjectPool",b="Class needs to be defined!",c="Object is already pooled: ",d="Integer";qx.Class.define(a,{extend:qx.core.Object,construct:function(e){qx.core.Object.call(this);this.__cK={};if(e!=null){this.setSize(e);}
;}
,properties:{size:{check:d,init:Infinity}},members:{__cK:null,getObject:function(h){if(this.$$disposed){return new h;}
;if(!h){throw new Error(b);}
;var f=null;var g=this.__cK[h.classname];if(g){f=g.pop();}
;if(f){f.$$pooled=false;}
else {f=new h;}
;return f;}
,poolObject:function(k){if(!this.__cK){return;}
;var j=k.classname;var m=this.__cK[j];if(k.$$pooled){throw new Error(c+k);}
;if(!m){this.__cK[j]=m=[];}
;if(m.length>this.getSize()){if(k.destroy){k.destroy();}
else {k.dispose();}
;return;}
;k.$$pooled=true;m.push(k);}
},destruct:function(){var p=this.__cK;var n,o,i,l;for(n in p){o=p[n];for(i=0,l=o.length;i<l;i++ ){o[i].dispose();}
;}
;delete this.__cK;}
});}
)();
(function(){var a="singleton",b="qx.event.Pool";qx.Class.define(b,{extend:qx.util.ObjectPool,type:a,construct:function(){qx.util.ObjectPool.call(this,30);}
});}
)();
(function(){var a="' declared in the class '",b="'",c="' but found '",d="The context object '",e=" is not an available class': ",f="qx.debug",g="Expected event type to be instanceof '",h="' for the event '",j="' of '",k="The event type '",m="'is already disposed.",n="qx.event.dispatch.Direct";qx.Class.define(n,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(o){this._manager=o;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(q,event,p){return !event.getBubbles();}
,dispatchEvent:function(r,event,w){if(qx.core.Environment.get(f)){if(r instanceof qx.core.Object){var v=qx.Class.getEventType(r.constructor,w);var s=qx.Class.getByName(v);if(!s){this.error(k+w+a+r.constructor+e+v);}
else if(!(event instanceof s)){this.error(g+v+c+event.classname+b);}
;}
;}
;event.setEventPhase(qx.event.type.Event.AT_TARGET);var t=this._manager.getListeners(r,w,false);if(t){for(var i=0,l=t.length;i<l;i++ ){var u=t[i].context||r;if(qx.core.Environment.get(f)){if(u&&u.isDisposed&&u.isDisposed()){this.warn(d+u+h+w+j+r+m);}
;}
;t[i].handler.call(u,event);}
;}
;}
},defer:function(x){qx.event.Registration.addDispatcher(x);}
});}
)();
(function(){var a="qx.event.handler.Object";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(c,b){return qx.Class.supportsEvent(c.constructor,b);}
,registerEvent:function(f,e,d){}
,unregisterEvent:function(i,h,g){}
},defer:function(j){qx.event.Registration.addHandler(j);}
});}
)();
(function(){var a="qx.event.type.Data";qx.Class.define(a,{extend:qx.event.type.Event,members:{__cL:null,__cM:null,init:function(c,d,b){qx.event.type.Event.prototype.init.call(this,false,b);this.__cL=c;this.__cM=d;return this;}
,clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);f.__cL=this.__cL;f.__cM=this.__cM;return f;}
,getData:function(){return this.__cL;}
,getOldData:function(){return this.__cM;}
},destruct:function(){this.__cL=this.__cM=null;}
});}
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
(function(){var a="qx.application.IApplication";qx.Interface.define(a,{members:{main:function(){}
,finalize:function(){}
,close:function(){}
,terminate:function(){}
}});}
)();
(function(){var a="qx.core.BaseInit",b="engine.name",c="Main runtime: ",d="",f="qx.application",g="os.name",h="engine.version",i="Missing application class: ",j="Load runtime: ",k="ms",l="Could not detect engine!",m="Finalize runtime: ",n="Could not detect operating system!",o="Could not detect the version of the engine!";qx.Class.define(a,{statics:{__hp:null,getApplication:function(){return this.__hp||null;}
,ready:function(){if(this.__hp){return;}
;if(qx.core.Environment.get(b)==d){qx.log.Logger.warn(l);}
;if(qx.core.Environment.get(h)==d){qx.log.Logger.warn(o);}
;if(qx.core.Environment.get(g)==d){qx.log.Logger.warn(n);}
;qx.log.Logger.debug(this,j+(new Date-qx.Bootstrap.LOADSTART)+k);var q=qx.core.Environment.get(f);var r=qx.Class.getByName(q);if(r){this.__hp=new r;var p=new Date;this.__hp.main();qx.log.Logger.debug(this,c+(new Date-p)+k);var p=new Date;this.__hp.finalize();qx.log.Logger.debug(this,m+(new Date-p)+k);}
else {qx.log.Logger.warn(i+q);}
;}
,__hq:function(e){var s=this.__hp;if(s){s.close();}
;}
,__hr:function(){var t=this.__hp;if(t){t.terminate();}
;qx.core.ObjectRegistry.shutdown();}
}});}
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
},destruct:function(){this._native=this._returnValue=null;}
});}
)();
(function(){var a="qx.event.handler.Window";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);this._manager=b;this._window=b.getWindow();this._initWindowObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(d,c){}
,registerEvent:function(h,g,f){}
,unregisterEvent:function(k,j,i){}
,_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);var l=qx.event.handler.Window.SUPPORTED_TYPES;for(var m in l){qx.bom.Event.addNativeListener(this._window,m,this._onNativeWrapper);}
;}
,_stopWindowObserver:function(){var n=qx.event.handler.Window.SUPPORTED_TYPES;for(var o in n){qx.bom.Event.removeNativeListener(this._window,o,this._onNativeWrapper);}
;}
,_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;}
;var t=this._window;try{var q=t.document;}
catch(u){return;}
;var r=q.documentElement;var p=qx.bom.Event.getTarget(e);if(p==null||p===t||p===q||p===r){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,t]);qx.event.Registration.dispatchEvent(t,event);var s=event.getReturnValue();if(s!=null){e.returnValue=s;return s;}
;}
;}
)},destruct:function(){this._stopWindowObserver();this._manager=this._window=null;}
,defer:function(v){qx.event.Registration.addHandler(v);}
});}
)();
(function(){var a="ready",b="mshtml",c="engine.name",d="qx.event.handler.Application",f="complete",g="webkit",h="gecko",i="load",j="unload",k="opera",l="left",m="DOMContentLoaded",n="shutdown",o="browser.documentmode";qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(p){qx.core.Object.call(this);this._window=p.getWindow();this.__hs=false;this.__ht=false;this.__cS=false;this.__hu=false;this._initObserver();qx.event.handler.Application.$$instance=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var q=qx.event.handler.Application.$$instance;if(q){q.__hv();}
;}
},members:{canHandleEvent:function(s,r){}
,registerEvent:function(v,u,t){}
,unregisterEvent:function(y,x,w){}
,__cS:null,__hs:null,__ht:null,__hu:null,__hv:function(){if(!this.__cS&&this.__hs&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(c)==b)){if(qx.event.Registration.hasListener(this._window,a)){this.__cS=true;qx.event.Registration.fireEvent(this._window,a);}
;}
else {this.__cS=true;qx.event.Registration.fireEvent(this._window,a);}
;}
;}
,isApplicationReady:function(){return this.__cS;}
,_initObserver:function(){if(qx.$$domReady||document.readyState==f||document.readyState==a){this.__hs=true;this.__hv();}
else {this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);if(qx.core.Environment.get(c)==h||qx.core.Environment.get(c)==k||qx.core.Environment.get(c)==g||(qx.core.Environment.get(c)==b&&qx.core.Environment.get(o)>8)){qx.bom.Event.addNativeListener(this._window,m,this._onNativeLoadWrapped);}
else {var self=this;var z=function(){try{document.documentElement.doScroll(l);if(document.body){self._onNativeLoadWrapped();}
;}
catch(A){window.setTimeout(z,100);}
;}
;z();}
;qx.bom.Event.addNativeListener(this._window,i,this._onNativeLoadWrapped);}
;this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);}
,_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,i,this._onNativeLoadWrapped);}
;qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);this._onNativeLoadWrapped=null;this._onNativeUnloadWrapped=null;}
,_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__hs=true;this.__hv();}
),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__hu){this.__hu=true;try{qx.event.Registration.fireEvent(this._window,n);}
catch(e){throw e;}
finally{qx.core.ObjectRegistry.shutdown();}
;}
;}
)},destruct:function(){this._stopObserver();this._window=null;}
,defer:function(B){qx.event.Registration.addHandler(B);}
});}
)();
(function(){var a="ready",b="shutdown",c="beforeunload",d="qx.core.Init";qx.Class.define(d,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__hq:function(e){var f=this.getApplication();if(f){e.setReturnValue(f.close());}
;}
,__hr:function(){var g=this.getApplication();if(g){g.terminate();}
;}
},defer:function(h){qx.event.Registration.addListener(window,a,h.ready,h);qx.event.Registration.addListener(window,b,h.__hr,h);qx.event.Registration.addListener(window,c,h.__hq,h);}
});}
)();
(function(){var a="Abstract method call",b="abstract",c="*",d="",e="-webkit-tap-highlight-color: transparent;",f="-ms-touch-select: none;",g="qx.application.AbstractGui",h="-webkit-touch-callout: none;",i="-webkit-tap-highlight-color: rgba(0,0,0,0);";qx.Class.define(g,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__fJ:null,_createRootWidget:function(){throw new Error(a);}
,getRoot:function(){return this.__fJ;}
,main:function(){qx.theme.manager.Meta.getInstance().initialize();qx.ui.tooltip.Manager.getInstance();var j=[h,f,i,e].join(d);qx.ui.style.Stylesheet.getInstance().addRule(c,j);this.__fJ=this._createRootWidget();window.scrollTo(0,0);}
,finalize:function(){this.render();}
,render:function(){qx.ui.core.queue.Manager.flush();}
,close:function(k){}
,terminate:function(){}
},destruct:function(){this.__fJ=null;}
});}
)();
(function(){var a="The theme to use is not available: ",b="_applyTheme",c="qx.theme",d="qx.theme.manager.Meta",e="qx.theme.Modern",f="Theme",g="singleton";qx.Class.define(d,{type:g,extend:qx.core.Object,properties:{theme:{check:f,nullable:true,apply:b}},members:{_applyTheme:function(n,i){var k=null;var h=null;var r=null;var s=null;var m=null;if(n){k=n.meta.color||null;h=n.meta.decoration||null;r=n.meta.font||null;s=n.meta.icon||null;m=n.meta.appearance||null;}
;var j=qx.theme.manager.Color.getInstance();var q=qx.theme.manager.Decoration.getInstance();var o=qx.theme.manager.Font.getInstance();var l=qx.theme.manager.Icon.getInstance();var p=qx.theme.manager.Appearance.getInstance();j.setTheme(k);q.setTheme(h);o.setTheme(r);l.setTheme(s);p.setTheme(m);}
,initialize:function(){var v=qx.core.Environment;var t,u;t=v.get(c);if(t){u=qx.Theme.getByName(t);if(!u){throw new Error(a+t);}
;this.setTheme(u);}
;}
},environment:{"qx.theme":e}});}
)();
(function(){var a="qx.util.ValueManager",b="abstract";qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this._dynamic={};}
,members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];}
,isDynamic:function(d){return !!this._dynamic[d];}
,resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];}
;return e;}
,_setDynamic:function(f){this._dynamic=f;}
,_getDynamic:function(){return this._dynamic;}
},destruct:function(){this._dynamic=null;}
});}
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
,__ej:function(){var P=parseInt(RegExp.$1,10);var O=parseInt(RegExp.$2,10);var M=parseInt(RegExp.$3,10);var N=parseInt(RegExp.$4,10);if(P===0&&O===0&M===0&&N===0){return [-1,-1,-1];}
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
(function(){var a="mshtml",b="engine.name",c="_applyTheme",d="",e="'.",f="qx-",g="__iM",h="Unable to resolve decorator '",j="singleton",k=";",l="qx.theme.manager.Decoration",m=".",n="Theme",o="object",p="changeTheme",q="string",r="browser.documentmode",s=":";qx.Class.define(l,{type:j,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__eQ=[];this.__iL=(qx.core.Environment.get(b)==a&&qx.core.Environment.get(r)<9);}
,properties:{theme:{check:n,nullable:true,apply:c,event:p}},members:{__iM:null,__eQ:null,__iL:false,getCssClassName:function(t){if(qx.lang.Type.isString(t)){return f+t;}
else {return f+t.toHashCode();}
;}
,addCssClass:function(y){var v=qx.ui.style.Stylesheet.getInstance();var A=y;y=this.getCssClassName(y);var z=m+y;if(v.hasRule(z)){return y;}
;if(qx.lang.Type.isString(A)){A=this.resolve(A);}
;if(!A){throw new Error(h+y+e);}
;var F=d;var u=A.getStyles(true);for(var C in u){if(qx.Bootstrap.isObject(u[C])){var w=d;var E=u[C];var B=false;for(var x in E){B=true;w+=x+s+E[x]+k;}
;var D=this.__iL?z:z+(B?s:d);this.__eQ.push(D+C);v.addRule(D+C,w);continue;}
;F+=C+s+u[C]+k;}
;if(F){v.addRule(z,F);this.__eQ.push(z);}
;return y;}
,resolve:function(J){if(!J){return null;}
;if(typeof J===o){return J;}
;var K=this.getTheme();if(!K){return null;}
;var H=this.__iM;if(!H){H=this.__iM={};}
;var G=H[J];if(G){return G;}
;var M=qx.lang.Object.clone(K.decorations[J],true);if(!M){return null;}
;if(!M.style){M.style={};}
;var I=M;while(I.include){I=K.decorations[I.include];if(!M.decorator&&I.decorator){M.decorator=qx.lang.Object.clone(I.decorator);}
;if(I.style){for(var L in I.style){if(M.style[L]===undefined){M.style[L]=qx.lang.Object.clone(I.style[L],true);}
;}
;}
;}
;return H[J]=(new qx.ui.decoration.Decorator()).set(M.style);}
,isValidPropertyValue:function(N){if(typeof N===q){return this.isDynamic(N);}
else if(typeof N===o){var O=N.constructor;return qx.Class.hasInterface(O,qx.ui.decoration.IDecorator);}
;return false;}
,isDynamic:function(Q){if(!Q){return false;}
;var P=this.getTheme();if(!P){return false;}
;return !!P.decorations[Q];}
,isCached:function(R){return !this.__iM?false:qx.lang.Object.contains(this.__iM,R);}
,_applyTheme:function(U,S){var T=qx.util.AliasManager.getInstance();for(var i=0;i<this.__eQ.length;i++ ){var V=this.__eQ[i];qx.ui.style.Stylesheet.getInstance().removeRule(V);}
;this.__eQ=[];if(S){for(var W in S.aliases){T.remove(W);}
;}
;if(U){for(var W in U.aliases){T.add(W,U.aliases[W]);}
;}
;this._disposeMap(g);this.__iM={};}
},destruct:function(){this._disposeMap(g);}
});}
)();
(function(){var a="qx.ui.style.Stylesheet",b="singleton";qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__eO=qx.bom.Stylesheet.createElement();this.__eQ=[];}
,members:{__eQ:null,__eO:null,addRule:function(d,c){if(this.hasRule(d)){return;}
;qx.bom.Stylesheet.addRule(this.__eO,d,c);this.__eQ.push(d);}
,hasRule:function(e){return this.__eQ.indexOf(e)!=-1;}
,removeRule:function(f){delete this.__eQ[this.__eQ.indexOf(f)];qx.bom.Stylesheet.removeRule(this.__eO,f);}
}});}
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
,__dp:{},getHelperElement:function(I){if(!I){I=window;}
;var J=I.location.href;if(!qx.dom.Element.__dp[J]){var K=qx.dom.Element.__dp[J]=I.document.createElement(g);if(qx.core.Environment.get(a)==e){K.style.display=c;I.document.body.appendChild(K);}
;}
;return qx.dom.Element.__dp[J];}
,create:function(name,M,L){if(!L){L=window;}
;if(!name){throw new Error(f);}
;var O=L.document.createElement(name);for(var N in M){qx.bom.element.Attribute.set(O,N,M[N]);}
;return O;}
,empty:function(P){return P.innerHTML=b;}
}});}
)();
(function(){var b="function",c="html.video.h264",d="html.element.contains",f='video/ogg; codecs="theora, vorbis"',g="qxtest",h="html.console",i="html.xul",j="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",k="html.video.ogg",l="http://www.w3.org/TR/SVG11/feature#BasicStructure",m="html.storage.local",n="div",o="qx.bom.client.Html",p="getSelection",q='audio',r='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',s="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t="html.audio",u="video",w="url(#default#VML)",x="head",y="audio",z="audio/mpeg",A="org.w3c.dom.svg",B="html.classlist",C="html.svg",D="html.video",E="html.geolocation",F="DOMTokenList",G="html.storage.session",H="1.1",I="html.history.state",J="object",K="html.image.naturaldimensions",L="html.audio.aif",M="audio/x-wav",N='<v:shape id="vml_flag1" adj="1" />',O="html.node.isequalnode",P="html.canvas",Q="audio/ogg",R="",S="html.storage.userdata",T="number",U="html.element.compareDocumentPosition",V="audio/x-aiff",W="html.audio.au",X="img",Y="html.selection",bD="selection",bE="html.xpath",bF="$qx_check",bz="test",bA='video',bB="span",bC="html.element.textcontent",bK="geolocation",bL="html.audio.mp3",bT="html.vml",bW="undefined",bG="html.audio.ogg",bH="none",bI="label",bJ='video/webm; codecs="vp8, vorbis"',bO="html.dataurl",bX="html.webworker",bP="html.dataset",bQ="1.0",bU="html.audio.wav",bM="html.filereader",bV="audio/basic",bN="display",bR="html.video.webm",bS="#default#userdata";qx.Bootstrap.define(o,{statics:{getWebWorker:function(){return window.Worker!=null;}
,getFileReader:function(){return window.FileReader!=null;}
,getGeoLocation:function(){return bK in navigator;}
,getAudio:function(){return !!document.createElement(q).canPlayType;}
,getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return R;}
;var a=document.createElement(y);return a.canPlayType(Q);}
,getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return R;}
;var a=document.createElement(y);return a.canPlayType(z);}
,getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return R;}
;var a=document.createElement(y);return a.canPlayType(M);}
,getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return R;}
;var a=document.createElement(y);return a.canPlayType(bV);}
,getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return R;}
;var a=document.createElement(y);return a.canPlayType(V);}
,getVideo:function(){return !!document.createElement(bA).canPlayType;}
,getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return R;}
;var v=document.createElement(u);return v.canPlayType(f);}
,getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return R;}
;var v=document.createElement(u);return v.canPlayType(r);}
,getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return R;}
;var v=document.createElement(u);return v.canPlayType(bJ);}
,getLocalStorage:function(){try{var bY=window.localStorage!=null;if(bY){window.sessionStorage.setItem(bF,bz);window.sessionStorage.removeItem(bF);}
;return bY;}
catch(ca){return false;}
;}
,getSessionStorage:function(){try{var cb=window.sessionStorage!=null;if(cb){window.sessionStorage.setItem(bF,bz);window.sessionStorage.removeItem(bF);}
;return cb;}
catch(cc){return false;}
;}
,getUserDataStorage:function(){var cd=document.createElement(n);cd.style[bN]=bH;document.getElementsByTagName(x)[0].appendChild(cd);var ce=false;try{cd.addBehavior(bS);cd.load(g);ce=true;}
catch(e){}
;document.getElementsByTagName(x)[0].removeChild(cd);return ce;}
,getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===F);}
,getXPath:function(){return !!document.evaluate;}
,getXul:function(){try{document.createElementNS(j,bI);return true;}
catch(e){return false;}
;}
,getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(A,bQ)||document.implementation.hasFeature(l,H));}
,getVml:function(){var cf=document.createElement(n);document.body.appendChild(cf);cf.innerHTML=N;cf.firstChild.style.behavior=w;var cg=typeof cf.firstChild.adj==J;document.body.removeChild(cf);return cg;}
,getCanvas:function(){return !!window.CanvasRenderingContext2D;}
,getDataUrl:function(ch){var ci=new Image();ci.onload=ci.onerror=function(){window.setTimeout(function(){ch.call(null,(ci.width==1&&ci.height==1));}
,0);}
;ci.src=s;}
,getDataset:function(){return !!document.documentElement.dataset;}
,getContains:function(){return (typeof document.documentElement.contains!==bW);}
,getCompareDocumentPosition:function(){return (typeof document.documentElement.compareDocumentPosition===b);}
,getTextContent:function(){var cj=document.createElement(bB);return (typeof cj.textContent!==bW);}
,getConsole:function(){return typeof window.console!==bW;}
,getNaturalDimensions:function(){var ck=document.createElement(X);return typeof ck.naturalHeight===T&&typeof ck.naturalWidth===T;}
,getHistoryState:function(){return (typeof window.onpopstate!==bW&&typeof window.history.replaceState!==bW&&typeof window.history.pushState!==bW);}
,getSelection:function(){if(typeof window.getSelection===b){return p;}
;if(typeof document.selection===J){return bD;}
;return null;}
,getIsEqualNode:function(){return typeof document.documentElement.isEqualNode===b;}
},defer:function(cl){qx.core.Environment.add(bX,cl.getWebWorker);qx.core.Environment.add(bM,cl.getFileReader);qx.core.Environment.add(E,cl.getGeoLocation);qx.core.Environment.add(t,cl.getAudio);qx.core.Environment.add(bG,cl.getAudioOgg);qx.core.Environment.add(bL,cl.getAudioMp3);qx.core.Environment.add(bU,cl.getAudioWav);qx.core.Environment.add(W,cl.getAudioAu);qx.core.Environment.add(L,cl.getAudioAif);qx.core.Environment.add(D,cl.getVideo);qx.core.Environment.add(k,cl.getVideoOgg);qx.core.Environment.add(c,cl.getVideoH264);qx.core.Environment.add(bR,cl.getVideoWebm);qx.core.Environment.add(m,cl.getLocalStorage);qx.core.Environment.add(G,cl.getSessionStorage);qx.core.Environment.add(S,cl.getUserDataStorage);qx.core.Environment.add(B,cl.getClassList);qx.core.Environment.add(bE,cl.getXPath);qx.core.Environment.add(i,cl.getXul);qx.core.Environment.add(P,cl.getCanvas);qx.core.Environment.add(C,cl.getSvg);qx.core.Environment.add(bT,cl.getVml);qx.core.Environment.add(bP,cl.getDataset);qx.core.Environment.addAsync(bO,cl.getDataUrl);qx.core.Environment.add(d,cl.getContains);qx.core.Environment.add(U,cl.getCompareDocumentPosition);qx.core.Environment.add(bC,cl.getTextContent);qx.core.Environment.add(h,cl.getConsole);qx.core.Environment.add(K,cl.getNaturalDimensions);qx.core.Environment.add(I,cl.getHistoryState);qx.core.Environment.add(Y,cl.getSelection);qx.core.Environment.add(O,cl.getIsEqualNode);}
});}
)();
(function(){var a="readOnly",b="accessKey",c="qx.bom.element.Attribute",d="rowSpan",e="vAlign",f="className",g="textContent",h="'",i="htmlFor",j="longDesc",k="cellSpacing",l="frameBorder",m="='",n="",o="useMap",p="innerText",q="innerHTML",r="tabIndex",s="dateTime",t="maxLength",u="html.element.textcontent",v="mshtml",w="engine.name",x="cellPadding",y="browser.documentmode",z="colSpan",A="undefined";qx.Bootstrap.define(c,{statics:{__dk:{names:{"class":f,"for":i,html:q,text:qx.core.Environment.get(u)?g:p,colspan:z,rowspan:d,valign:e,datetime:s,accesskey:b,tabindex:r,maxlength:t,readonly:a,longdesc:j,cellpadding:x,cellspacing:k,frameborder:l,usemap:o},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:n,className:n,innerHTML:n,innerText:n,textContent:n,htmlFor:n,tabIndex:0,maxLength:qx.core.Environment.select(w,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1}},compile:function(B){var C=[];var E=this.__dk.runtime;for(var D in B){if(!E[D]){C.push(D,m,B[D],h);}
;}
;return C.join(n);}
,get:function(H,name){var F=this.__dk;var G;name=F.names[name]||name;if(F.property[name]){G=H[name];if(typeof F.propertyDefault[name]!==A&&G==F.propertyDefault[name]){if(typeof F.bools[name]===A){return null;}
else {return G;}
;}
;}
else {G=H.getAttribute(name);if(F.bools[name]&&!(qx.core.Environment.get(w)==v&&parseInt(qx.core.Environment.get(y),10)<=8)){return qx.Bootstrap.isString(G);}
;}
;if(F.bools[name]){return !!G;}
;return G;}
,set:function(K,name,J){if(typeof J===A){return;}
;var I=this.__dk;name=I.names[name]||name;if(I.bools[name]&&!qx.lang.Type.isBoolean(J)){J=qx.lang.Type.isString(J);}
;if(I.property[name]&&(!(K[name]===undefined)||I.qxProperties[name])){if(J==null){if(I.removeableProperties[name]){K.removeAttribute(name);return;}
else if(typeof I.propertyDefault[name]!==A){J=I.propertyDefault[name];}
;}
;K[name]=J;}
else {if(J===true){K.setAttribute(name,name);}
else if(J===false||J===null){K.removeAttribute(name);}
else {K.setAttribute(name,J);}
;}
;}
,reset:function(L,name){this.set(L,name,null);}
}});}
)();
(function(){var a="file",b="+",c="strict",d="anchor",e="div",f="query",g="source",h="password",j="host",k="protocol",l="qx.debug",n="user",p="directory",q="loose",r="relative",s="queryKey",t="qx.util.Uri",u="",v="path",w="authority",x='">0</a>',y="&",z="port",A="params must be either string or object",B='<a href="',C="userInfo",D="?",E="=";qx.Bootstrap.define(t,{statics:{parseUri:function(H,G){var I={key:[g,k,w,C,n,h,j,z,r,v,p,a,f,d],q:{name:s,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var o=I,m=I.parser[G?c:q].exec(H),F={},i=14;while(i-- ){F[o.key[i]]=m[i]||u;}
;F[o.q.name]={};F[o.key[12]].replace(o.q.parser,function(K,L,J){if(L){F[o.q.name][L]=J;}
;}
);return F;}
,appendParamsToUrl:function(M,N){if(N===undefined){return M;}
;if(qx.core.Environment.get(l)){if(!(qx.lang.Type.isString(N)||qx.lang.Type.isObject(N))){throw new Error(A);}
;}
;if(qx.lang.Type.isObject(N)){N=qx.util.Uri.toParameter(N);}
;if(!N){return M;}
;return M+=(/\?/).test(M)?y+N:D+N;}
,toParameter:function(O,S){var R,Q=[];for(R in O){if(O.hasOwnProperty(R)){var P=O[R];if(P instanceof Array){for(var i=0;i<P.length;i++ ){this.__dK(R,P[i],Q,S);}
;}
else {this.__dK(R,P,Q,S);}
;}
;}
;return Q.join(y);}
,__dK:function(W,X,V,U){var T=window.encodeURIComponent;if(U){V.push(T(W).replace(/%20/g,b)+E+T(X).replace(/%20/g,b));}
else {V.push(T(W)+E+T(X));}
;}
,getAbsolute:function(ba){var Y=document.createElement(e);Y.innerHTML=B+ba+x;return Y.firstChild.href;}
}});}
)();
(function(){var a="qx.bom.client.Stylesheet",b="html.stylesheet.deleterule",c="html.stylesheet.insertrule",d="function",e="html.stylesheet.createstylesheet",f="html.stylesheet.addimport",g="html.stylesheet.removeimport",h="object";qx.Bootstrap.define(a,{statics:{__dL:function(){if(!qx.bom.client.Stylesheet.__dM){qx.bom.client.Stylesheet.__dM=qx.bom.Stylesheet.createElement();}
;return qx.bom.client.Stylesheet.__dM;}
,getCreateStyleSheet:function(){return typeof document.createStyleSheet===h;}
,getInsertRule:function(){return typeof qx.bom.client.Stylesheet.__dL().insertRule===d;}
,getDeleteRule:function(){return typeof qx.bom.client.Stylesheet.__dL().deleteRule===d;}
,getAddImport:function(){return (typeof qx.bom.client.Stylesheet.__dL().addImport===h);}
,getRemoveImport:function(){return (typeof qx.bom.client.Stylesheet.__dL().removeImport===h);}
},defer:function(i){qx.core.Environment.add(e,i.getCreateStyleSheet);qx.core.Environment.add(c,i.getInsertRule);qx.core.Environment.add(b,i.getDeleteRule);qx.core.Environment.add(f,i.getAddImport);qx.core.Environment.add(g,i.getRemoveImport);}
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
else if(qx.lang.Type.isArray(B)){var C=[];for(var i=0;i<B.length;i++ ){if(E){C[i]=qx.lang.Object.clone(B[i]);}
else {C[i]=B[i];}
;}
;return C;}
;return B;}
,equals:function(F,G){return qx.lang.Object.__dh(F,G,[],[]);}
,__dh:function(N,J,H,I){if(N===J){return N!==0||1/N==1/J;}
;if(N==null||J==null){return N===J;}
;var M=Object.prototype.toString.call(N);if(M!=Object.prototype.toString.call(J)){return false;}
;switch(M){case p:return N==String(J);case g:return N!=+N?J!=+J:(N==0?1/N==1/J:N==+J);case d:case a:return +N==+J;case q:return N.source==J.source&&N.global==J.global&&N.multiline==J.multiline&&N.ignoreCase==J.ignoreCase;};if(typeof N!=n||typeof J!=n){return false;}
;var length=H.length;while(length-- ){if(H[length]==N){return I[length]==J;}
;}
;var L=N.constructor,K=J.constructor;if(L!==K&&!(qx.Bootstrap.isFunction(L)&&(L instanceof L)&&qx.Bootstrap.isFunction(K)&&(K instanceof K))&&(c in N&&c in J)){return false;}
;H.push(N);I.push(J);var Q=0,O=true;if(M==j){Q=N.length;O=Q==J.length;if(O){while(Q-- ){if(!(O=qx.lang.Object.__dh(N[Q],J[Q],H,I))){break;}
;}
;}
;}
else {for(var P in N){if(Object.prototype.hasOwnProperty.call(N,P)){Q++ ;if(!(O=Object.prototype.hasOwnProperty.call(J,P)&&qx.lang.Object.__dh(N[P],J[P],H,I))){break;}
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
(function(){var a="abstract",b="Abstract method called.",c="qx.ui.decoration.Abstract";qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:a,members:{__iN:null,_getDefaultInsets:function(){throw new Error(b);}
,_isInitialized:function(){throw new Error(b);}
,_resetInsets:function(){this.__iN=null;}
,getInsets:function(){if(this.__iN){return this.__iN;}
;return this._getDefaultInsets();}
},destruct:function(){this.__iN=null;}
});}
)();
(function(){var a="repeat",b="backgroundPositionX",c="px",d=".png",e=" are not supported in this client! The image's resource id is '",f="background-image",g="scale",h="background-size",i="_applyBackgroundImage",j=', url(',k="'",l="qx.debug",m='url(',n="repeat-y",o="qx.ui.decoration.MBackgroundImage",p="100% 100%",q="String",r="browser.documentmode",s="This decorator is already in-use. Modification is not possible anymore!",t="backgroundPositionY",u="Background PNGs with repeat == 'scale' or repeat == 'no-repeat'",v="mshtml",w="engine.name",x="background-position",y="no-repeat",z=')',A="_applyBackgroundPosition",B=" ",C="repeat-x",D="background-repeat",E="The backgroundPosition property is not supported by this client!";qx.Mixin.define(o,{properties:{backgroundImage:{check:q,nullable:true,apply:i},backgroundRepeat:{check:[a,C,n,y,g],init:a,apply:i},backgroundPositionX:{nullable:true,apply:A},backgroundPositionY:{nullable:true,apply:A},backgroundPosition:{group:[t,b]}},members:{_styleBackgroundImage:function(F){var H=this.getBackgroundImage();if(!H){return;}
;var I=qx.util.AliasManager.getInstance().resolve(H);var J=qx.util.ResourceManager.getInstance().toUri(I);if(F[f]){F[f]+=j+J+z;}
else {F[f]=m+J+z;}
;var G=this.getBackgroundRepeat();if(G===g){F[h]=p;}
else {F[D]=G;}
;var top=this.getBackgroundPositionY()||0;var K=this.getBackgroundPositionX()||0;if(!isNaN(top)){top+=c;}
;if(!isNaN(K)){K+=c;}
;F[x]=K+B+top;if(qx.core.Environment.get(l)&&J&&qx.lang.String.endsWith(J,d)&&(G==g||G==y)&&qx.core.Environment.get(w)==v&&qx.core.Environment.get(r)<9){this.warn(u+e+I+k);}
;}
,_applyBackgroundImage:function(){if(qx.core.Environment.get(l)){if(this._isInitialized()){throw new Error(s);}
;}
;}
,_applyBackgroundPosition:function(){if(qx.core.Environment.get(l)){if(this._isInitialized()){throw new Error(s);}
;if(qx.core.Environment.get(w)==v&&qx.core.Environment.get(r)<9){this.warn(E);}
;}
;}
}});}
)();
(function(){var a="0",b="qx/static",c="http://",d="https://",e="file://",f="qx.util.AliasManager",g="singleton",h=".",i="/",j="static";qx.Class.define(f,{type:g,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);this.__iO={};this.add(j,b);}
,members:{__iO:null,_preprocess:function(n){var m=this._getDynamic();if(m[n]===false){return n;}
else if(m[n]===undefined){if(n.charAt(0)===i||n.charAt(0)===h||n.indexOf(c)===0||n.indexOf(d)===a||n.indexOf(e)===0){m[n]=false;return n;}
;if(this.__iO[n]){return this.__iO[n];}
;var l=n.substring(0,n.indexOf(i));var k=this.__iO[l];if(k!==undefined){m[n]=k+n.substring(l.length);}
;}
;return n;}
,add:function(o,q){this.__iO[o]=q;var p=this._getDynamic();for(var r in p){if(r.substring(0,r.indexOf(i))===o){p[r]=q+r.substring(o.length);}
;}
;}
,remove:function(s){delete this.__iO[s];}
,resolve:function(t){var u=this._getDynamic();if(t!=null){t=this._preprocess(t);}
;return u[t]||t;}
,getAliases:function(){var v={};for(var w in this.__iO){v[w]=this.__iO[w];}
;return v;}
},destruct:function(){this.__iO=null;}
});}
)();
(function(){var a="singleton",b="qx.util.LibraryManager";qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__iP:qx.$$libraries||{}},members:{has:function(c){return !!this.self(arguments).__iP[c];}
,get:function(d,e){return this.self(arguments).__iP[d][e]?this.self(arguments).__iP[d][e]:null;}
,set:function(f,g,h){this.self(arguments).__iP[f][g]=h;}
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
(function(){var a="mshtml",b="engine.name",c="//",d="io.ssl",e="",f="encoding",g="?",h="data",i="string",j="type",k="data:image/",l=";",m="/",n="resourceUri",o="qx.util.ResourceManager",p="singleton",q=",";qx.Class.define(o,{extend:qx.core.Object,type:p,construct:function(){qx.core.Object.call(this);}
,statics:{__bH:qx.$$resources||{},__iQ:{}},members:{has:function(r){return !!this.self(arguments).__bH[r];}
,getData:function(s){return this.self(arguments).__bH[s]||null;}
,getImageWidth:function(u){var t=this.self(arguments).__bH[u];return t?t[0]:null;}
,getImageHeight:function(w){var v=this.self(arguments).__bH[w];return v?v[1]:null;}
,getImageFormat:function(y){var x=this.self(arguments).__bH[y];return x?x[2]:null;}
,getCombinedFormat:function(D){var A=e;var C=this.self(arguments).__bH[D];var z=C&&C.length>4&&typeof (C[4])==i&&this.constructor.__bH[C[4]];if(z){var E=C[4];var B=this.constructor.__bH[E];A=B[2];}
;return A;}
,toUri:function(I){if(I==null){return I;}
;var F=this.self(arguments).__bH[I];if(!F){return I;}
;if(typeof F===i){var H=F;}
else {var H=F[3];if(!H){return I;}
;}
;var G=e;if((qx.core.Environment.get(b)==a)&&qx.core.Environment.get(d)){G=this.self(arguments).__iQ[H];}
;return G+qx.util.LibraryManager.getInstance().get(H,n)+m+I;}
,toDataUri:function(L){var K=this.constructor.__bH[L];var N=this.constructor.__bH[K[4]];var M;if(N){var J=N[4][L];M=k+J[j]+l+J[f]+q+J[h];}
else {M=this.toUri(L);}
;return M;}
},defer:function(P){if((qx.core.Environment.get(b)==a)){if(qx.core.Environment.get(d)){for(var Q in qx.$$libraries){var O;if(qx.util.LibraryManager.getInstance().get(Q,n)){O=qx.util.LibraryManager.getInstance().get(Q,n);}
else {P.__iQ[Q]=e;continue;}
;if(O.match(/^\/\//)!=null){P.__iQ[Q]=window.location.protocol;}
else if(O.match(/^\//)!=null){P.__iQ[Q]=window.location.protocol+c+window.location.host;}
else if(O.match(/^\.\//)!=null){var S=document.URL;P.__iQ[Q]=S.substring(0,S.lastIndexOf(m)+1);}
else if(O.match(/^http/)!=null){P.__iQ[Q]=e;}
else {var R=window.location.href.indexOf(g);var T;if(R==-1){T=window.location.href;}
else {T=window.location.href.substring(0,R);}
;P.__iQ[Q]=T.substring(0,T.lastIndexOf(m)+1);}
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
(function(){var a="innerWidthRight",b="innerColorBottom",c="css.borderradius",d="qx.theme",e="px ",f='""',g="_applyDoubleBorder",h="border-top",i="inset 0 -",j="css.boxsizing",k="innerWidthTop",l="100%",m="qx.debug",n="border-left",o="innerColorRight",p="css.boxshadow",q="innerColorTop",r="innerColorLeft",s="inset ",t="shorthand",u="inset -",v="Color",w="border-box",x="This decorator is already in-use. Modification is not possible anymore!",y="qx.ui.decoration.MDoubleBorder",z="border-bottom",A="innerOpacity is configured but the browser doesn't support RGBA colors.",B=":before",C="inset 0 ",D="px solid ",E="innerWidthBottom",F="css.rgba",G="inherit",H="Number",I="innerWidthLeft",J="px 0 ",K="inset 0 0 0 ",L="border-right",M=" ",N=",",O="absolute";qx.Mixin.define(y,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__iT;this._styleBorder=this.__iR;}
,properties:{innerWidthTop:{check:H,init:0,apply:g},innerWidthRight:{check:H,init:0,apply:g},innerWidthBottom:{check:H,init:0,apply:g},innerWidthLeft:{check:H,init:0,apply:g},innerWidth:{group:[k,a,E,I],mode:t},innerColorTop:{nullable:true,check:v,apply:g},innerColorRight:{nullable:true,check:v,apply:g},innerColorBottom:{nullable:true,check:v,apply:g},innerColorLeft:{nullable:true,check:v,apply:g},innerColor:{group:[q,o,b,r],mode:t},innerOpacity:{check:H,init:1,apply:g}},members:{__iR:function(P){var Y=qx.core.Environment.get(p);var S,bd,innerWidth;if(qx.core.Environment.get(d)){var X=qx.theme.manager.Color.getInstance();S={top:X.resolve(this.getColorTop()),right:X.resolve(this.getColorRight()),bottom:X.resolve(this.getColorBottom()),left:X.resolve(this.getColorLeft())};bd={top:X.resolve(this.getInnerColorTop()),right:X.resolve(this.getInnerColorRight()),bottom:X.resolve(this.getInnerColorBottom()),left:X.resolve(this.getInnerColorLeft())};}
else {S={top:this.getColorTop(),right:this.getColorRight(),bottom:this.getColorBottom(),left:this.getColorLeft()};bd={top:this.getInnerColorTop(),right:this.getInnerColorRight(),bottom:this.getInnerColorBottom(),left:this.getInnerColorLeft()};}
;innerWidth={top:this.getInnerWidthTop(),right:this.getInnerWidthRight(),bottom:this.getInnerWidthBottom(),left:this.getInnerWidthLeft()};var V=this.getWidthTop();if(V>0){P[h]=V+e+this.getStyleTop()+M+S.top;}
;V=this.getWidthRight();if(V>0){P[L]=V+e+this.getStyleRight()+M+S.right;}
;V=this.getWidthBottom();if(V>0){P[z]=V+e+this.getStyleBottom()+M+S.bottom;}
;V=this.getWidthLeft();if(V>0){P[n]=V+e+this.getStyleLeft()+M+S.left;}
;var bc=this.getInnerOpacity();if(bc<1){this.__iS(bd,bc);}
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
;}
,__iS:function(bh,be){if(!qx.core.Environment.get(F)){if(qx.core.Environment.get(m)){qx.log.Logger.warn(A);}
;return;}
;for(var bi in bh){var bf=qx.util.ColorUtil.stringToRgb(bh[bi]);bf.push(be);var bg=qx.util.ColorUtil.rgbToRgbString(bf);bh[bi]=bg;}
;}
,_applyDoubleBorder:function(){if(qx.core.Environment.get(m)){if(this._isInitialized()){throw new Error(x);}
;}
;}
,__iT:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};}
}});}
)();
(function(){var a="css.float",b="foo",c="css.borderimage.standardsyntax",d="detect",e="borderRadius",f="boxSizing",g="stretch",h='m11',j="content",k="css.inlineblock",l="css.gradient.filter",m="css.appearance",n="css.opacity",o="div",p="pointerEvents",q="css.gradient.radial",r="css.pointerevents",s="input",t="color",u="string",v="borderImage",w="userSelect",x="styleFloat",y="css.textShadow.filter",z="css.usermodify",A="flexbox",B='url("foo.png") 4 4 4 4 fill stretch',C="css.boxmodel",D="qx.bom.client.Css",E="css.boxshadow",F="appearance",G="-ms-flexbox",H="placeholder",I="-moz-none",J="backgroundImage",K="css.textShadow",L="DXImageTransform.Microsoft.Shadow",M="flex",N="css.alphaimageloaderneeded",O="css.gradient.legacywebkit",P="css.borderradius",Q="linear-gradient(0deg, #fff, #000)",R="textShadow",S="auto",T="css.flexboxSyntax",U="css.borderimage",V="foo.png",W="rgba(1, 2, 3, 0.5)",X="color=#666666,direction=45",Y="radial-gradient(0px 0px, cover, red 50%, blue 100%)",bI="rgba",bJ="(",bK="-webkit-flex",bE='url("foo.png") 4 4 4 4 stretch',bF="css.gradient.linear",bG="DXImageTransform.Microsoft.Gradient",bH="css.userselect",bO="span",bP="css.boxsizing",bQ="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",ce="mshtml",bL="css.rgba",bM=");",bN="4 fill",bC='WebKitCSSMatrix',bT="none",bD="startColorStr=#550000FF, endColorStr=#55FFFF00",bU="progid:",bV="css.placeholder",ca="css.userselect.none",bR="css.textoverflow",cd="inline-block",bS="-moz-inline-box",bW="textOverflow",bX="userModify",bY="boxShadow",cb="cssFloat",cc="border";qx.Bootstrap.define(D,{statics:{__ew:null,getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==ce||!qx.bom.client.Browser.getQuirksMode();return content?j:cc;}
,getTextOverflow:function(){return qx.bom.Style.getPropertyName(bW);}
,getPlaceholder:function(){var i=document.createElement(s);return H in i;}
,getAppearance:function(){return qx.bom.Style.getPropertyName(F);}
,getBorderRadius:function(){return qx.bom.Style.getPropertyName(e);}
,getBoxShadow:function(){return qx.bom.Style.getPropertyName(bY);}
,getBorderImage:function(){return qx.bom.Style.getPropertyName(v);}
,getBorderImageSyntax:function(){var cg=qx.bom.client.Css.getBorderImage();if(!cg){return null;}
;var cf=document.createElement(o);if(cg===v){cf.style[cg]=B;if(cf.style.borderImageSource.indexOf(V)>=0&&cf.style.borderImageSlice.indexOf(bN)>=0&&cf.style.borderImageRepeat.indexOf(g)>=0){return true;}
;}
else {cf.style[cg]=bE;if(cf.style[cg].indexOf(V)>=0){return false;}
;}
;return null;}
,getUserSelect:function(){return qx.bom.Style.getPropertyName(w);}
,getUserSelectNone:function(){var ci=qx.bom.client.Css.getUserSelect();if(ci){var ch=document.createElement(bO);ch.style[ci]=I;return ch.style[ci]===I?I:bT;}
;return null;}
,getUserModify:function(){return qx.bom.Style.getPropertyName(bX);}
,getFloat:function(){var cj=document.documentElement.style;return cj.cssFloat!==undefined?cb:cj.styleFloat!==undefined?x:null;}
,getTranslate3d:function(){return bC in window&&h in new WebKitCSSMatrix();}
,getLinearGradient:function(){qx.bom.client.Css.__ew=false;var cn=Q;var ck=document.createElement(o);var cl=qx.bom.Style.getAppliedStyle(ck,J,cn);if(!cl){cn=bQ;var cl=qx.bom.Style.getAppliedStyle(ck,J,cn,false);if(cl){qx.bom.client.Css.__ew=true;}
;}
;if(!cl){return null;}
;var cm=/(.*?)\(/.exec(cl);return cm?cm[1]:null;}
,getFilterGradient:function(){return qx.bom.client.Css.__ex(bG,bD);}
,getRadialGradient:function(){var cr=Y;var co=document.createElement(o);var cp=qx.bom.Style.getAppliedStyle(co,J,cr);if(!cp){return null;}
;var cq=/(.*?)\(/.exec(cp);return cq?cq[1]:null;}
,getLegacyWebkitGradient:function(){if(qx.bom.client.Css.__ew===null){qx.bom.client.Css.getLinearGradient();}
;return qx.bom.client.Css.__ew;}
,getRgba:function(){var cs;try{cs=document.createElement(o);}
catch(ct){cs=document.createElement();}
;try{cs.style[t]=W;if(cs.style[t].indexOf(bI)!=-1){return true;}
;}
catch(cu){}
;return false;}
,getBoxSizing:function(){return qx.bom.Style.getPropertyName(f);}
,getInlineBlock:function(){var cv=document.createElement(bO);cv.style.display=cd;if(cv.style.display==cd){return cd;}
;cv.style.display=bS;if(cv.style.display!==bS){return bS;}
;return null;}
,getOpacity:function(){return (typeof document.documentElement.style.opacity==u);}
,getTextShadow:function(){return !!qx.bom.Style.getPropertyName(R);}
,getFilterTextShadow:function(){return qx.bom.client.Css.__ex(L,X);}
,__ex:function(cz,cx){var cy=false;var cA=bU+cz+bJ+cx+bM;var cw=document.createElement(o);document.body.appendChild(cw);cw.style.filter=cA;if(cw.filters&&cw.filters.length>0&&cw.filters.item(cz).enabled==true){cy=true;}
;document.body.removeChild(cw);return cy;}
,getAlphaImageLoaderNeeded:function(){return qx.bom.client.Engine.getName()==ce&&qx.bom.client.Browser.getDocumentMode()<9;}
,getPointerEvents:function(){var cB=document.documentElement;if(p in cB.style){var cD=cB.style.pointerEvents;cB.style.pointerEvents=S;cB.style.pointerEvents=b;var cC=cB.style.pointerEvents==S;cB.style.pointerEvents=cD;return cC;}
;return false;}
,getFlexboxSyntax:function(){var cF=null;var cE=document.createElement(d);var cG=[{value:M,syntax:M},{value:G,syntax:A},{value:bK,syntax:M}];for(var i=0;i<cG.length;i++ ){try{cE.style.display=cG[i].value;}
catch(cH){return null;}
;if(cE.style.display===cG[i].value){cF=cG[i].syntax;break;}
;}
;cE=null;return cF;}
},defer:function(cI){qx.core.Environment.add(bR,cI.getTextOverflow);qx.core.Environment.add(bV,cI.getPlaceholder);qx.core.Environment.add(P,cI.getBorderRadius);qx.core.Environment.add(E,cI.getBoxShadow);qx.core.Environment.add(bF,cI.getLinearGradient);qx.core.Environment.add(l,cI.getFilterGradient);qx.core.Environment.add(q,cI.getRadialGradient);qx.core.Environment.add(O,cI.getLegacyWebkitGradient);qx.core.Environment.add(C,cI.getBoxModel);qx.core.Environment.add(bL,cI.getRgba);qx.core.Environment.add(U,cI.getBorderImage);qx.core.Environment.add(c,cI.getBorderImageSyntax);qx.core.Environment.add(z,cI.getUserModify);qx.core.Environment.add(bH,cI.getUserSelect);qx.core.Environment.add(ca,cI.getUserSelectNone);qx.core.Environment.add(m,cI.getAppearance);qx.core.Environment.add(a,cI.getFloat);qx.core.Environment.add(bP,cI.getBoxSizing);qx.core.Environment.add(k,cI.getInlineBlock);qx.core.Environment.add(n,cI.getOpacity);qx.core.Environment.add(K,cI.getTextShadow);qx.core.Environment.add(y,cI.getFilterTextShadow);qx.core.Environment.add(N,cI.getAlphaImageLoaderNeeded);qx.core.Environment.add(r,cI.getPointerEvents);qx.core.Environment.add(T,cI.getFlexboxSyntax);}
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
;var V=qx.util.AliasManager.getInstance().resolve(this.getBorderImage());var W=this.__iU(V);return {top:this.getSliceTop()||W[0],right:this.getSliceRight()||W[1],bottom:this.getSliceBottom()||W[2],left:this.getSliceLeft()||W[3]};}
,_applyBorderImage:function(){if(qx.core.Environment.get(o)){if(this._isInitialized()){throw new Error(H);}
;}
;}
,__iU:function(be){var bd=this.getBorderImageMode();var bf=0;var bb=0;var bc=0;var bg=0;var bh=/(.*)(\.[a-z]+)$/.exec(be);var X=bh[1];var ba=bh[2];var Y=qx.util.ResourceManager.getInstance();if(bd==K||bd==w){bf=Y.getImageHeight(X+i+ba);bc=Y.getImageHeight(X+q+ba);}
;if(bd==K||bd==E){bb=Y.getImageWidth(X+m+ba);bg=Y.getImageWidth(X+e+ba);}
;return [bf,bb,bc,bg];}
}});}
)();
(function(){var a=" 0",b="</div>",c="),to(",d="px",e="css.borderradius",f="from(",g=")",h="background-image",i="background",j="<div style='width: 100%; height: 100%; position: absolute;",k="filter",l="background-size",m="', ",n="'></div>",o="0",p="_applyLinearBackgroundGradient",q="-webkit-gradient(linear,",r="startColorPosition",s="qx.debug",t="background-color",u="deg, ",v="url(",w="css.gradient.legacywebkit",x="EndColorStr='#FF",y="startColor",z="shorthand",A="qx.theme",B="Color",C="px 100%",D="MBoxShadow",E="<div style=\"position: absolute; width: 100%; height: 100%; ",F="(GradientType=",G="vertical",H="",I="transparent",J="qx.ui.decoration.MLinearBackgroundGradient",K="% 100%",L="endColorPosition",M="canvas",N="';)\">",O="(",P="css.gradient.linear",Q="';)",R="endColor",S=", ",T="css.gradient.filter",U="horizontal",V="Number",W="progid:DXImageTransform.Microsoft.Gradient",X="StartColorStr='#FF",Y="100% ",bm='2d',bn="%",bo=" ",bi="white",bj="This decorator is already in-use. Modification is not possible anymore!",bk="linear-gradient",bl="filter:progid:DXImageTransform.Microsoft.Gradient",bp=",";qx.Mixin.define(J,{properties:{startColor:{check:B,nullable:true,apply:p},endColor:{check:B,nullable:true,apply:p},orientation:{check:[U,G],init:G,apply:p},startColorPosition:{check:V,init:0,apply:p},endColorPosition:{check:V,init:100,apply:p},colorPositionUnit:{check:[d,bn],init:bn,apply:p},gradientStart:{group:[y,r],mode:z},gradientEnd:{group:[R,L],mode:z}},members:{__iV:null,_styleLinearBackgroundGradient:function(bq){var bC=this.__iW();var bG=bC.start;var bA=bC.end;var by;if(!bG||!bA){return;}
;var bJ=this.getColorPositionUnit();if(qx.core.Environment.get(w)){bJ=bJ===d?H:bJ;if(this.getOrientation()==U){var bF=this.getStartColorPosition()+bJ+a+bJ;var bD=this.getEndColorPosition()+bJ+a+bJ;}
else {var bF=o+bJ+bo+this.getStartColorPosition()+bJ;var bD=o+bJ+bo+this.getEndColorPosition()+bJ;}
;var bu=f+bG+c+bA+g;by=q+bF+bp+bD+bp+bu+g;bq[i]=by;}
else if(qx.core.Environment.get(T)&&!qx.core.Environment.get(P)&&qx.core.Environment.get(e)){if(!this.__iV){this.__iV=document.createElement(M);}
;var br=this.getOrientation()==G;var bC=this.__iW();var bz=br?200:1;var bt=br?1:200;var bx=Math.max(100,this.getEndColorPosition()-this.getStartColorPosition());if(bJ===d){if(br){bz=Math.max(bz,this.getEndColorPosition()-this.getStartColorPosition());}
else {bt=Math.max(bt,this.getEndColorPosition()-this.getStartColorPosition());}
;}
else {if(br){bz=Math.max(bz,(this.getEndColorPosition()-this.getStartColorPosition())*2);}
else {bt=Math.max(bt,(this.getEndColorPosition()-this.getStartColorPosition())*2);}
;}
;this.__iV.width=bt;this.__iV.height=bz;var bw=this.__iV.getContext(bm);if(br){var bI=bw.createLinearGradient(0,0,0,bz);}
else {var bI=bw.createLinearGradient(0,0,bt,0);}
;if(bJ===bn){bI.addColorStop(Math.max(0,this.getStartColorPosition())/bx,bC.start);bI.addColorStop(this.getEndColorPosition()/bx,bC.end);}
else {var bv=br?bz:bt;bI.addColorStop(Math.max(0,this.getStartColorPosition())/bv,bC.start);bI.addColorStop(this.getEndColorPosition()/bv,bC.end);}
;bw.fillStyle=bI;bw.fillRect(0,0,bt,bz);var by=v+this.__iV.toDataURL()+g;bq[h]=by;if(bJ===bn){if(br){bq[l]=Y+bx+bn;}
else {bq[l]=bx+K;}
;}
else {bq[l]=br?bz+C:Y+bt+d;}
;}
else if(qx.core.Environment.get(T)&&!qx.core.Environment.get(P)){var bC=this.__iW();var bH=this.getOrientation()==U?1:0;var bG=bC.start;var bA=bC.end;if(!qx.util.ColorUtil.isHex6String(bG)){bG=qx.util.ColorUtil.stringToRgb(bG);bG=qx.util.ColorUtil.rgbToHexString(bG);}
;if(!qx.util.ColorUtil.isHex6String(bA)){bA=qx.util.ColorUtil.stringToRgb(bA);bA=qx.util.ColorUtil.rgbToHexString(bA);}
;bG=bG.substring(1,bG.length);bA=bA.substring(1,bA.length);by=W+F+bH+S+X+bG+m+x+bA+Q;if(bq[k]){bq[k]+=S+by;}
else {bq[k]=by;}
;if(!bq[t]||bq[t]==I){bq[t]=bi;}
;}
else {var bK=this.getOrientation()==U?0:270;var bB=bG+bo+this.getStartColorPosition()+bJ;var bs=bA+bo+this.getEndColorPosition()+bJ;var bE=qx.core.Environment.get(P);if(bE===bk){bK=this.getOrientation()==U?bK+90:bK-90;}
;by=bE+O+bK+u+bB+bp+bs+g;if(bq[h]){bq[h]+=S+by;}
else {bq[h]=by;}
;}
;}
,__iW:function(){if(qx.core.Environment.get(A)){var bL=qx.theme.manager.Color.getInstance();var bN=bL.resolve(this.getStartColor());var bM=bL.resolve(this.getEndColor());}
else {var bN=this.getStartColor();var bM=this.getEndColor();}
;return {start:bN,end:bM};}
,_getContent:function(){if(qx.core.Environment.get(T)&&!qx.core.Environment.get(P)){var bQ=this.__iW();var bT=this.getOrientation()==U?1:0;var bS=qx.util.ColorUtil.hex3StringToHex6String(bQ.start);var bP=qx.util.ColorUtil.hex3StringToHex6String(bQ.end);bS=bS.substring(1,bS.length);bP=bP.substring(1,bP.length);var bR=H;if(this.classname.indexOf(D)!=-1){var bO={};this._styleBoxShadow(bO);bR=j+qx.bom.element.Style.compile(bO)+n;}
;return E+bl+F+bT+S+X+bS+m+x+bP+N+bR+b;}
;return H;}
,_applyLinearBackgroundGradient:function(){if(qx.core.Environment.get(s)){if(this._isInitialized()){throw new Error(bj);}
;}
;}
}});}
)();
(function(){var a="This client does not support the boxSizing value",b="border-box",c="qx.bom.element.BoxSizing",d="css.boxsizing",e="",f="This client does not support dynamic modification of the boxSizing property.",g="qx.debug",h="boxSizing",i="content-box",j=":",k=";";qx.Bootstrap.define(c,{statics:{__eu:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__ev:function(m){var l=this.__eu;return l.tags[m.tagName.toLowerCase()]||l.types[m.type];}
,compile:function(n){if(qx.core.Environment.get(d)){var o=qx.bom.Style.getCssName(qx.core.Environment.get(d));return o+j+n+k;}
else {if(qx.core.Environment.get(g)){qx.log.Logger.warn(this,f);qx.log.Logger.trace();}
;}
;}
,get:function(p){if(qx.core.Environment.get(d)){return qx.bom.element.Style.get(p,h,null,false)||e;}
;if(qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(p))){if(!this.__ev(p)){return i;}
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
(function(){var a="cursor:",b="engine.name",c="ns-resize",d="",e="mshtml",f="nw-resize",g="n-resize",h="engine.version",i="nesw-resize",j="opera",k="browser.documentmode",l=";",m="nwse-resize",n="ew-resize",o="qx.bom.element.Cursor",p="ne-resize",q="e-resize",r="browser.quirksmode",s="cursor";qx.Bootstrap.define(o,{statics:{__et:{},compile:function(t){return a+(this.__et[t]||t)+l;}
,get:function(v,u){return qx.bom.element.Style.get(v,s,u,false);}
,set:function(x,w){x.style.cursor=this.__et[w]||w;}
,reset:function(y){y.style.cursor=d;}
},defer:function(z){if(qx.core.Environment.get(b)==e&&((parseFloat(qx.core.Environment.get(h))<9||qx.core.Environment.get(k)<9)&&!qx.core.Environment.get(r))){z.__et[i]=p;z.__et[m]=f;if(((parseFloat(qx.core.Environment.get(h))<8||qx.core.Environment.get(k)<8)&&!qx.core.Environment.get(r))){z.__et[n]=q;z.__et[c]=g;}
;}
else if(qx.core.Environment.get(b)==j&&parseInt(qx.core.Environment.get(h))<12){z.__et[i]=p;z.__et[m]=f;}
;}
});}
)();
(function(){var a="engine.name",b=");",c="",d=")",e="zoom:1;filter:alpha(opacity=",f="qx.bom.element.Opacity",g="css.opacity",h=";",i="opacity:",j="alpha(opacity=",k="opacity",l="filter";qx.Bootstrap.define(f,{statics:{compile:qx.core.Environment.select(a,{"mshtml":function(m){if(m>=1){m=1;}
;if(m<0.00001){m=0;}
;if(qx.core.Environment.get(g)){return i+m+h;}
else {return e+(m*100)+b;}
;}
,"default":function(n){if(n>=1){return c;}
;return i+n+h;}
}),set:qx.core.Environment.select(a,{"mshtml":function(q,o){if(qx.core.Environment.get(g)){if(o>=1){o=c;}
;q.style.opacity=o;}
else {var p=qx.bom.element.Style.get(q,l,qx.bom.element.Style.COMPUTED_MODE,false);if(o>=1){o=1;}
;if(o<0.00001){o=0;}
;if(!q.currentStyle||!q.currentStyle.hasLayout){q.style.zoom=1;}
;q.style.filter=p.replace(/alpha\([^\)]*\)/gi,c)+j+o*100+d;}
;}
,"default":function(s,r){if(r>=1){r=c;}
;s.style.opacity=r;}
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
(function(){var a="css.float",b="px",c="Cascaded styles are not supported in this browser!",d="css.appearance",e="pixelRight",f="float",g="css.userselect",h="css.boxsizing",i="css.textoverflow",j="qx.debug",k="pixelHeight",l=":",m="pixelTop",n="browser.documentmode",o="css.borderimage",p="Invalid argument 'name'",q="pixelLeft",r="engine.name",s="css.usermodify",t="mshtml",u="qx.bom.element.Style",v="Invalid argument 'smart'",w="",x="pixelBottom",y="Invalid argument 'styles'",z="pixelWidth",A=";",B="Invalid argument 'element'",C="style";qx.Bootstrap.define(u,{statics:{__ey:null,__ez:null,__eA:function(){var E={"appearance":qx.core.Environment.get(d),"userSelect":qx.core.Environment.get(g),"textOverflow":qx.core.Environment.get(i),"borderImage":qx.core.Environment.get(o),"float":qx.core.Environment.get(a),"userModify":qx.core.Environment.get(s),"boxSizing":qx.core.Environment.get(h)};this.__ez={};for(var D in qx.lang.Object.clone(E)){if(!E[D]){delete E[D];}
else {this.__ez[D]=D==f?f:qx.bom.Style.getCssName(E[D]);}
;}
;this.__ey=E;}
,__eB:function(name){var F=qx.bom.Style.getPropertyName(name);if(F){this.__ey[name]=F;}
;return F;}
,__eC:{width:z,height:k,left:q,right:e,top:m,bottom:x},__eD:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing},compile:function(G){var J=[];var K=this.__eD;var I=this.__ez;var name,H;for(name in G){H=G[name];if(H==null){continue;}
;name=this.__ey[name]||this.__eB(name)||name;if(K[name]){J.push(K[name].compile(H));}
else {if(!I[name]){I[name]=qx.bom.Style.getCssName(name);}
;J.push(I[name],l,H,A);}
;}
;return J.join(w);}
,setCss:function(M,L){if(qx.core.Environment.get(r)===t&&parseInt(qx.core.Environment.get(n),10)<8){M.style.cssText=L;}
else {M.setAttribute(C,L);}
;}
,getCss:function(N){if(qx.core.Environment.get(r)===t&&parseInt(qx.core.Environment.get(n),10)<8){return N.style.cssText.toLowerCase();}
else {return N.getAttribute(C);}
;}
,isPropertySupported:function(O){return (this.__eD[O]||this.__ey[O]||O in document.documentElement.style);}
,COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(R,name,Q,P){if(qx.core.Environment.get(j)){qx.core.Assert.assertElement(R,B);qx.core.Assert.assertString(name,p);if(P!==undefined){qx.core.Assert.assertBoolean(P,v);}
;}
;name=this.__ey[name]||this.__eB(name)||name;if(P!==false&&this.__eD[name]){this.__eD[name].set(R,Q);}
else {R.style[name]=Q!==null?Q:w;}
;}
,setStyles:function(Y,S,W){if(qx.core.Environment.get(j)){qx.core.Assert.assertElement(Y,B);qx.core.Assert.assertMap(S,y);if(W!==undefined){qx.core.Assert.assertBoolean(W,v);}
;}
;var V=this.__ey;var ba=this.__eD;var T=Y.style;for(var X in S){var U=S[X];var name=V[X]||this.__eB(X)||X;if(U===undefined){if(W!==false&&ba[name]){ba[name].reset(Y);}
else {T[name]=w;}
;}
else {if(W!==false&&ba[name]){ba[name].set(Y,U);}
else {T[name]=U!==null?U:w;}
;}
;}
;}
,reset:function(bc,name,bb){name=this.__ey[name]||this.__eB(name)||name;if(bb!==false&&this.__eD[name]){this.__eD[name].reset(bc);}
else {bc.style[name]=w;}
;}
,get:function(bg,name,bi,bk){name=this.__ey[name]||this.__eB(name)||name;if(bk!==false&&this.__eD[name]){return this.__eD[name].get(bg,bi);}
;switch(bi){case this.LOCAL_MODE:return bg.style[name]||w;case this.CASCADED_MODE:if(bg.currentStyle){return bg.currentStyle[name]||w;}
;throw new Error(c);default:var be=qx.dom.Node.getDocument(bg);var bh=be.defaultView?be.defaultView.getComputedStyle:undefined;if(bh!==undefined){var bd=bh(bg,null);if(bd&&bd[name]){return bd[name];}
;}
else {if(!bg.currentStyle){return bg.style[name]||w;}
;var bm=bg.currentStyle[name]||bg.style[name]||w;if(/^-?[\.\d]+(px)?$/i.test(bm)){return bm;}
;var bl=this.__eC[name];if(bl&&(bl in bg.style)){var bj=bg.style[name];bg.style[name]=bm||0;var bf=bg.style[bl]+b;bg.style[name]=bj;return bf;}
;return bm;}
;return bg.style[name]||w;};}
},defer:function(bn){bn.__eA();}
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
,__di:function(m){var o=this.getWidth(m)>this.getHeight(m)?90:0;var n=m.orientation;if(n==null||Math.abs(n%180)==o){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};}
else {return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};}
;}
,__dj:null,getOrientation:function(p){var p=p||window.top;var q=p.orientation;if(q==null){q=this.getWidth(p)>this.getHeight(p)?90:0;}
else {if(this.__dj==null){this.__dj=this.__di(p);}
;q=this.__dj[q];}
;return q;}
,isLandscape:function(r){return this.getWidth(r)>=this.getHeight(r);}
,isPortrait:function(s){return this.getWidth(s)<this.getHeight(s);}
}});}
)();
(function(){var a="_applyBoxShadow",b="shadowHorizontalLength",c="Boolean",d="",e="This decorator is already in-use. Modification is not possible anymore!",f="qx.debug",g="qx.theme",h="px ",i="css.boxshadow",j="shadowVerticalLength",k="inset ",l="shorthand",m="qx.ui.decoration.MBoxShadow",n="Integer",o="Color",p=",";qx.Mixin.define(m,{properties:{shadowHorizontalLength:{nullable:true,check:n,apply:a},shadowVerticalLength:{nullable:true,check:n,apply:a},shadowBlurRadius:{nullable:true,check:n,apply:a},shadowSpreadRadius:{nullable:true,check:n,apply:a},shadowColor:{nullable:true,check:o,apply:a},inset:{init:false,check:c,apply:a},shadowLength:{group:[b,j],mode:l}},members:{_styleBoxShadow:function(q){var y=qx.core.Environment.get(i);if(!y||this.getShadowVerticalLength()==null&&this.getShadowHorizontalLength()==null){return;}
;if(qx.core.Environment.get(g)){var u=qx.theme.manager.Color.getInstance();var r=u.resolve(this.getShadowColor());}
else {var r=this.getShadowColor();}
;if(r!=null){var x=this.getShadowVerticalLength()||0;var s=this.getShadowHorizontalLength()||0;var blur=this.getShadowBlurRadius()||0;var w=this.getShadowSpreadRadius()||0;var v=this.getInset()?k:d;var t=v+s+h+x+h+blur+h+w+h+r;y=qx.bom.Style.getCssName(y);if(!q[y]){q[y]=t;}
else {q[y]+=p+t;}
;}
;}
,_applyBoxShadow:function(){if(qx.core.Environment.get(f)){if(this._isInitialized()){throw new Error(e);}
;}
;}
}});}
)();
(function(){var a="qx.ui.decoration.Decorator",b="_style",c="_getDefaultInsetsFor",d="bottom",e="top",f="left",g="right";qx.Class.define(a,{extend:qx.ui.decoration.Abstract,implement:[qx.ui.decoration.IDecorator],include:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderImage],members:{__iX:false,getPadding:function(){var k=this.getInset();var h=this._getDefaultInsetsForBorderImage();var n=k.top-(h.top?h.top:this.getWidthTop());var m=k.right-(h.right?h.right:this.getWidthRight());var j=k.bottom-(h.bottom?h.bottom:this.getWidthBottom());var l=k.left-(h.left?h.left:this.getWidthLeft());return {top:k.top?n:this.getInnerWidthTop(),right:k.right?m:this.getInnerWidthRight(),bottom:k.bottom?j:this.getInnerWidthBottom(),left:k.left?l:this.getInnerWidthLeft()};}
,getStyles:function(r){if(r){return this._getStyles();}
;var q={};var p=this._getStyles();for(var o in p){q[qx.lang.String.camelCase(o)]=p[o];}
;return q;}
,_getStyles:function(){var s={};for(var name in this){if(name.indexOf(b)==0&&this[name] instanceof Function){this[name](s);}
;}
;this.__iX=true;return s;}
,_getDefaultInsets:function(){var w=[e,g,d,f];var u={};for(var name in this){if(name.indexOf(c)==0&&this[name] instanceof Function){var v=this[name]();for(var i=0;i<w.length;i++ ){var t=w[i];if(u[t]==undefined){u[t]=v[t];}
;if(v[t]>u[t]){u[t]=v[t];}
;}
;}
;}
;if(u[e]!=undefined){return u;}
;return {top:0,right:0,bottom:0,left:0};}
,_isInitialized:function(){return this.__iX;}
}});}
)();
(function(){var a="_applyTheme",b="qx.theme.manager.Font",c="_dynamic",d="Theme",e="changeTheme",f="singleton";qx.Class.define(b,{type:f,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:a,event:e}},members:{resolveDynamic:function(h){var g=this._dynamic;return h instanceof qx.bom.Font?h:g[h];}
,resolve:function(l){var k=this._dynamic;var i=k[l];if(i){return i;}
;var j=this.getTheme();if(j!==null&&j.fonts[l]){var m=this.__kE(j.fonts[l]);return k[l]=(new m).set(j.fonts[l]);}
;return l;}
,isDynamic:function(q){var p=this._dynamic;if(q&&(q instanceof qx.bom.Font||p[q]!==undefined)){return true;}
;var o=this.getTheme();if(o!==null&&q&&o.fonts[q]){var n=this.__kE(o.fonts[q]);p[q]=(new n).set(o.fonts[q]);return true;}
;return false;}
,__kD:function(s,r){if(s[r].include){var t=s[s[r].include];s[r].include=null;delete s[r].include;s[r]=qx.lang.Object.mergeWith(s[r],t,false);this.__kD(s,r);}
;}
,_applyTheme:function(y){var u=this._dynamic;for(var x in u){if(u[x].themed){u[x].dispose();delete u[x];}
;}
;if(y){var v=y.fonts;for(var x in v){if(v[x].include&&v[v[x].include]){this.__kD(v,x);}
;var w=this.__kE(v[x]);u[x]=(new w).set(v[x]);u[x].themed=true;}
;}
;this._setDynamic(u);}
,__kE:function(z){if(z.sources){return qx.bom.webfonts.WebFont;}
;return qx.bom.Font;}
},destruct:function(){this._disposeMap(c);}
});}
)();
(function(){var a="Boolean",b="px",c="_applyItalic",d="_applyBold",e="underline",f="_applyTextShadow",g="Integer",h="_applyFamily",j="_applyLineHeight",k='"',m="Array",n="line-through",o="overline",p="Color",q="String",r="",s="italic",t="normal",u="qx.bom.Font",v="bold",w="Number",x="_applyDecoration",y=" ",z="_applySize",A=",",B="_applyColor";qx.Class.define(u,{extend:qx.core.Object,construct:function(D,C){qx.core.Object.call(this);this.__kF={fontFamily:r,fontSize:null,fontWeight:null,fontStyle:null,textDecoration:null,lineHeight:null,color:null,textShadow:null};if(D!==undefined){this.setSize(D);}
;if(C!==undefined){this.setFamily(C);}
;}
,statics:{fromString:function(H){var I=new qx.bom.Font();var F=H.split(/\s+/);var name=[];var G;for(var i=0;i<F.length;i++ ){switch(G=F[i]){case v:I.setBold(true);break;case s:I.setItalic(true);break;case e:I.setDecoration(e);break;default:var E=parseInt(G,10);if(E==G||qx.lang.String.contains(G,b)){I.setSize(E);}
else {name.push(G);}
;break;};}
;if(name.length>0){I.setFamily(name);}
;return I;}
,fromConfig:function(K){var J=new qx.bom.Font;J.set(K);return J;}
,__kG:{fontFamily:r,fontSize:r,fontWeight:r,fontStyle:r,textDecoration:r,lineHeight:1.2,color:r,textShadow:r},getDefaultStyles:function(){return this.__kG;}
},properties:{size:{check:g,nullable:true,apply:z},lineHeight:{check:w,nullable:true,apply:j},family:{check:m,nullable:true,apply:h},bold:{check:a,nullable:true,apply:d},italic:{check:a,nullable:true,apply:c},decoration:{check:[e,n,o],nullable:true,apply:x},color:{check:p,nullable:true,apply:B},textShadow:{nullable:true,check:q,apply:f}},members:{__kF:null,_applySize:function(M,L){this.__kF.fontSize=M===null?null:M+b;}
,_applyLineHeight:function(O,N){this.__kF.lineHeight=O===null?null:O;}
,_applyFamily:function(P,Q){var R=r;for(var i=0,l=P.length;i<l;i++ ){if(P[i].indexOf(y)>0){R+=k+P[i]+k;}
else {R+=P[i];}
;if(i!==l-1){R+=A;}
;}
;this.__kF.fontFamily=R;}
,_applyBold:function(T,S){this.__kF.fontWeight=T==null?null:T?v:t;}
,_applyItalic:function(V,U){this.__kF.fontStyle=V==null?null:V?s:t;}
,_applyDecoration:function(X,W){this.__kF.textDecoration=X==null?null:X;}
,_applyColor:function(ba,Y){this.__kF.color=null;if(ba){this.__kF.color=qx.theme.manager.Color.getInstance().resolve(ba);}
;}
,_applyTextShadow:function(bc,bb){this.__kF.textShadow=bc==null?null:bc;}
,getStyles:function(){return this.__kF;}
}});}
)();
(function(){var a="qx.bom.webfonts.WebFont",b="",c="qx.debug",d="changeStatus",e="_applySources",f="qx.event.type.Data",g=" was not applied, perhaps the source file could not be loaded.",h="WebFont ";qx.Class.define(a,{extend:qx.bom.Font,events:{"changeStatus":f},properties:{sources:{nullable:true,apply:e}},members:{__kH:null,_applySources:function(m,o){var j=[];for(var i=0,l=m.length;i<l;i++ ){var k=this._quoteFontFamily(m[i].family);j.push(k);var n=m[i].source;qx.bom.webfonts.Manager.getInstance().require(k,n,this._onWebFontChangeStatus,this);}
;this.setFamily(j.concat(this.getFamily()));}
,_onWebFontChangeStatus:function(p){var q=p.getData();this.fireDataEvent(d,q);if(qx.core.Environment.get(c)){if(q.valid===false){this.warn(h+q.family+g);}
;}
;}
,_quoteFontFamily:function(r){return r.replace(/["']/g,b);}
}});}
)();
(function(){var a="m",b="os.name",c=")",d="os.version",e="qx.bom.webfonts.Manager",f="svg",g="#",h="browser.name",k="singleton",n=",\n",o="src: ",p="mobileSafari",q="'eot)",r="');",s="qx.debug",t="interval",u="chrome",v="firefox",w="!",y="eot",z="ios",A="changeStatus",B="\.(",C="}\n",D="font-family: ",E="browser.documentmode",F="mobile safari",G="safari",H="@font-face.*?",I="",J="ttf",K=";\n",L="') format('svg')",M="') format('woff')",N="('embedded-opentype')",O="browser.version",P="opera",Q="engine.version",R="Couldn't create @font-face rule for WebFont ",S="mshtml",T="engine.name",U="url('",V="src: url('",W="('embedded-opentype)",X="\nfont-style: normal;\nfont-weight: normal;",Y="?#iefix') format('embedded-opentype')",bl="woff",bm="ie",bn=";",bh="'eot')",bi="Error while adding @font-face rule:",bj="@font-face {",bk="') format('truetype')";qx.Class.define(e,{extend:qx.core.Object,type:k,construct:function(){qx.core.Object.call(this);this.__kI=[];this.__kJ={};this.__em=[];this.__kK=this.getPreferredFormats();var bp=qx.core.Environment.get(h);var bo=parseInt(qx.core.Environment.get(O),10);if((bp==u&&bo<35)||(bp==P)&&bo<22){this.__kL=true;}
;}
,statics:{FONT_FORMATS:[y,bl,J,f],VALIDATION_TIMEOUT:5000},members:{__kI:null,__kM:null,__kJ:null,__kK:null,__em:null,__kN:null,__kL:false,require:function(bs,bt,bu,bw){var br=[];for(var i=0,l=bt.length;i<l;i++ ){var bv=bt[i].split(g);var bq=qx.util.ResourceManager.getInstance().toUri(bv[0]);if(bv.length>1){bq=bq+g+bv[1];}
;if(this.__kL){bq=qx.util.Uri.getAbsolute(bq);}
;br.push(bq);}
;if(qx.core.Environment.get(T)==S&&(parseInt(qx.core.Environment.get(Q))<9||qx.core.Environment.get(E)<9)){if(!this.__kN){this.__kN=new qx.event.Timer(100);this.__kN.addListener(t,this.__kP,this);}
;if(!this.__kN.isEnabled()){this.__kN.start();}
;this.__em.push([bs,br,bu,bw]);}
else {this.__kO(bs,br,bu,bw);}
;}
,remove:function(by){var bx=null;for(var i=0,l=this.__kI.length;i<l;i++ ){if(this.__kI[i]==by){bx=i;this.__kV(by);break;}
;}
;if(bx){qx.lang.Array.removeAt(this.__kI,bx);}
;if(by in this.__kJ){this.__kJ[by].dispose();delete this.__kJ[by];}
;}
,getPreferredFormats:function(){var bz=[];var bD=qx.core.Environment.get(h);var bA=qx.core.Environment.get(O);var bC=qx.core.Environment.get(b);var bB=qx.core.Environment.get(d);if((bD==bm&&qx.core.Environment.get(E)>=9)||(bD==v&&bA>=3.6)||(bD==u&&bA>=6)){bz.push(bl);}
;if((bD==P&&bA>=10)||(bD==G&&bA>=3.1)||(bD==v&&bA>=3.5)||(bD==u&&bA>=4)||(bD==F&&bC==z&&bB>=4.2)){bz.push(J);}
;if(bD==bm&&bA>=4){bz.push(y);}
;if(bD==p&&bC==z&&bB>=4.1){bz.push(f);}
;return bz;}
,removeStyleSheet:function(){this.__kI=[];if(this.__kM){qx.bom.Stylesheet.removeSheet(this.__kM);}
;this.__kM=null;}
,__kO:function(bG,bI,bF,bJ){if(!qx.lang.Array.contains(this.__kI,bG)){var bK=this.__kR(bI);var bH=this.__kS(bG,bK);if(!bH){throw new Error(R+bG+w);}
;if(!this.__kM){this.__kM=qx.bom.Stylesheet.createElement();}
;try{this.__kU(bH);}
catch(bL){if(qx.core.Environment.get(s)){this.warn(bi,bL.message);return;}
;}
;this.__kI.push(bG);}
;if(!this.__kJ[bG]){this.__kJ[bG]=new qx.bom.webfonts.Validator(bG);this.__kJ[bG].setTimeout(qx.bom.webfonts.Manager.VALIDATION_TIMEOUT);this.__kJ[bG].addListenerOnce(A,this.__kQ,this);}
;if(bF){var bE=bJ||window;this.__kJ[bG].addListenerOnce(A,bF,bE);}
;this.__kJ[bG].validate();}
,__kP:function(){if(this.__em.length==0){this.__kN.stop();return;}
;var bM=this.__em.shift();this.__kO.apply(this,bM);}
,__kQ:function(bN){var bO=bN.getData();if(bO.valid===false){qx.event.Timer.once(function(){this.remove(bO.family);}
,this,250);}
;}
,__kR:function(bP){var bR=qx.bom.webfonts.Manager.FONT_FORMATS;var bQ={};for(var i=0,l=bP.length;i<l;i++ ){var bS=null;for(var x=0;x<bR.length;x++ ){var bT=new RegExp(B+bR[x]+c);var bU=bT.exec(bP[i]);if(bU){bS=bU[1];}
;}
;if(bS){bQ[bS]=bP[i];}
;}
;return bQ;}
,__kS:function(bX,cb){var ca=[];var bV=this.__kK.length>0?this.__kK:qx.bom.webfonts.Manager.FONT_FORMATS;for(var i=0,l=bV.length;i<l;i++ ){var bW=bV[i];if(cb[bW]){ca.push(this.__kT(bW,cb[bW]));}
;}
;var bY=o+ca.join(n)+bn;bY=D+bX+K+bY;bY=bY+X;return bY;}
,__kT:function(cd,cc){switch(cd){case y:return U+cc+r+V+cc+Y;case bl:return U+cc+M;case J:return U+cc+bk;case f:return U+cc+L;default:return null;};}
,__kU:function(cf){var ce=bj+cf+C;if(qx.core.Environment.get(h)==bm&&qx.core.Environment.get(E)<9){var cg=this.__kW(this.__kM.cssText);cg+=ce;this.__kM.cssText=cg;}
else {this.__kM.insertRule(ce,this.__kM.cssRules.length);}
;}
,__kV:function(ch){var ck=new RegExp(H+ch,a);for(var i=0,l=document.styleSheets.length;i<l;i++ ){var ci=document.styleSheets[i];if(ci.cssText){var cj=ci.cssText.replace(/\n/g,I).replace(/\r/g,I);cj=this.__kW(cj);if(ck.exec(cj)){cj=cj.replace(ck,I);}
;ci.cssText=cj;}
else if(ci.cssRules){for(var j=0,m=ci.cssRules.length;j<m;j++ ){var cj=ci.cssRules[j].cssText.replace(/\n/g,I).replace(/\r/g,I);if(ck.exec(cj)){this.__kM.deleteRule(j);return;}
;}
;}
;}
;}
,__kW:function(cl){return cl.replace(q,bh).replace(W,N);}
},destruct:function(){if(this.__kN){this.__kN.stop();this.__kN.dispose();}
;delete this.__kI;this.removeStyleSheet();for(var cm in this.__kJ){this.__kJ[cm].dispose();}
;qx.bom.webfonts.Validator.removeDefaultHelperElements();}
});}
)();
(function(){var a="qx.event.Timer",b="_applyInterval",c="interval",d="func is not a function",f="Boolean",g="qx.debug",h="No timeout given",i="Integer",j="qx.event.type.Event",k="_applyEnabled";qx.Class.define(a,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);this.setEnabled(false);if(l!=null){this.setInterval(l);}
;var self=this;this.__jv=function(){self._oninterval.call(self);}
;}
,events:{"interval":j},statics:{once:function(m,n,o){if(qx.core.Environment.get(g)){qx.core.Assert.assertFunction(m,d);qx.core.Assert.assertNotUndefined(o,h);}
;var p=new qx.event.Timer(o);p.__jw=m;p.addListener(c,function(e){p.stop();m.call(n,e);p.dispose();n=null;}
,n);p.start();return p;}
},properties:{enabled:{init:true,check:f,apply:k},interval:{check:i,init:1000,apply:b}},members:{__jx:null,__jv:null,_applyInterval:function(r,q){if(this.getEnabled()){this.restart();}
;}
,_applyEnabled:function(t,s){if(s){window.clearInterval(this.__jx);this.__jx=null;}
else if(t){this.__jx=window.setInterval(this.__jv,this.getInterval());}
;}
,start:function(){this.setEnabled(true);}
,startWith:function(u){this.setInterval(u);this.start();}
,stop:function(){this.setEnabled(false);}
,restart:function(){this.stop();this.start();}
,restartWith:function(v){this.stop();this.startWith(v);}
,_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;}
;if(this.getEnabled()){this.fireEvent(c);}
;}
)},destruct:function(){if(this.__jx){window.clearInterval(this.__jx);}
;this.__jx=this.__jv=null;}
});}
)();
(function(){var a="sans-serif",b="changeStatus",c="Integer",d="auto",e="qx.event.type.Data",f="0",g="qx.bom.webfonts.Validator",h="interval",i="Georgia",j="WEei",k="__lb",l="visible",m="Times New Roman",n="Arial",o="normal",p="Helvetica",q="350px",r="_applyFontFamily",s="-1000px",t="hidden",u="serif",v="span",w="absolute",x=",";qx.Class.define(g,{extend:qx.core.Object,construct:function(y){qx.core.Object.call(this);if(y){this.setFontFamily(y);}
;this.__kX=this._getRequestedHelpers();}
,statics:{COMPARISON_FONTS:{sans:[n,p,a],serif:[m,i,u]},HELPER_CSS:{position:w,margin:f,padding:f,top:s,left:s,fontSize:q,width:d,height:d,lineHeight:o,fontVariant:o,visibility:t},COMPARISON_STRING:j,__kY:null,__la:null,removeDefaultHelperElements:function(){var z=qx.bom.webfonts.Validator.__la;if(z){for(var A in z){document.body.removeChild(z[A]);}
;}
;delete qx.bom.webfonts.Validator.__la;}
},properties:{fontFamily:{nullable:true,init:null,apply:r},timeout:{check:c,init:5000}},events:{"changeStatus":e},members:{__kX:null,__lb:null,__lc:null,validate:function(){this.__lc=new Date().getTime();if(this.__lb){this.__lb.restart();}
else {this.__lb=new qx.event.Timer(100);this.__lb.addListener(h,this.__ld,this);qx.event.Timer.once(function(){this.__lb.start();}
,this,0);}
;}
,_reset:function(){if(this.__kX){for(var C in this.__kX){var B=this.__kX[C];document.body.removeChild(B);}
;this.__kX=null;}
;}
,_isFontValid:function(){if(!qx.bom.webfonts.Validator.__kY){this.__cN();}
;if(!this.__kX){this.__kX=this._getRequestedHelpers();}
;this.__kX.sans.style.visibility=l;this.__kX.sans.style.visibility=t;this.__kX.serif.style.visibility=l;this.__kX.serif.style.visibility=t;var E=qx.bom.element.Dimension.getWidth(this.__kX.sans);var D=qx.bom.element.Dimension.getWidth(this.__kX.serif);var F=qx.bom.webfonts.Validator;if(E!==F.__kY.sans&&D!==F.__kY.serif){return true;}
;return false;}
,_getRequestedHelpers:function(){var G=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.sans);var H=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.serif);return {sans:this._getHelperElement(G),serif:this._getHelperElement(H)};}
,_getHelperElement:function(I){var J=qx.lang.Object.clone(qx.bom.webfonts.Validator.HELPER_CSS);if(I){if(J.fontFamily){J.fontFamily+=x+I.join(x);}
else {J.fontFamily=I.join(x);}
;}
;var K=document.createElement(v);K.innerHTML=qx.bom.webfonts.Validator.COMPARISON_STRING;qx.bom.element.Style.setStyles(K,J);document.body.appendChild(K);return K;}
,_applyFontFamily:function(M,L){if(M!==L){this._reset();}
;}
,__cN:function(){var N=qx.bom.webfonts.Validator;if(!N.__la){N.__la={sans:this._getHelperElement(N.COMPARISON_FONTS.sans),serif:this._getHelperElement(N.COMPARISON_FONTS.serif)};}
;N.__kY={sans:qx.bom.element.Dimension.getWidth(N.__la.sans),serif:qx.bom.element.Dimension.getWidth(N.__la.serif)};}
,__ld:function(){if(this._isFontValid()){this.__lb.stop();this._reset();this.fireDataEvent(b,{family:this.getFontFamily(),valid:true});}
else {var O=new Date().getTime();if(O-this.__lc>=this.getTimeout()){this.__lb.stop();this._reset();this.fireDataEvent(b,{family:this.getFontFamily(),valid:false});}
;}
;}
},destruct:function(){this._reset();this.__lb.stop();this.__lb.removeListener(h,this.__ld,this);this._disposeObjects(k);}
});}
)();
(function(){var a="mshtml",b="engine.name",c="qx.bom.element.Dimension",d="0px",e="paddingRight",f="engine.version",g="paddingLeft",h="opera",i="paddingBottom",j="paddingTop",k="overflowX",l="overflowY";qx.Bootstrap.define(c,{statics:{getWidth:function(n){var m=n.getBoundingClientRect();return Math.round(m.right-m.left);}
,getHeight:function(p){var o=p.getBoundingClientRect();return Math.round(o.bottom-o.top);}
,getSize:function(q){return {width:this.getWidth(q),height:this.getHeight(q)};}
,__eG:{visible:true,hidden:true},getContentWidth:function(u){var r=qx.bom.element.Style;var s=qx.bom.element.Style.get(u,k);var t=parseInt(r.get(u,g)||d,10);var x=parseInt(r.get(u,e)||d,10);if(this.__eG[s]){var w=u.clientWidth;if((qx.core.Environment.get(b)==h)||qx.dom.Node.isBlockNode(u)){w=w-t-x;}
;if(qx.core.Environment.get(b)==a){if(w===0&&u.offsetHeight===0){return u.offsetWidth;}
;}
;return w;}
else {if(u.clientWidth>=u.scrollWidth){return Math.max(u.clientWidth,u.scrollWidth)-t-x;}
else {var v=u.scrollWidth-t;if(qx.core.Environment.get(b)==a&&qx.core.Environment.get(f)>=6){v-=x;}
;return v;}
;}
;}
,getContentHeight:function(D){var y=qx.bom.element.Style;var A=qx.bom.element.Style.get(D,l);var B=parseInt(y.get(D,j)||d,10);var z=parseInt(y.get(D,i)||d,10);if(this.__eG[A]){return D.clientHeight-B-z;}
else {if(D.clientHeight>=D.scrollHeight){return Math.max(D.clientHeight,D.scrollHeight)-B-z;}
else {var C=D.scrollHeight-B;if(qx.core.Environment.get(b)==a&&qx.core.Environment.get(f)==6){C-=z;}
;return C;}
;}
;}
,getContentSize:function(E){return {width:this.getContentWidth(E),height:this.getContentHeight(E)};}
}});}
)();
(function(){var a="qx.theme.manager.Icon",b="Theme",c="changeTheme",d="_applyTheme",e="singleton";qx.Class.define(a,{type:e,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:d,event:c}},members:{_applyTheme:function(i,g){var h=qx.util.AliasManager.getInstance();if(g){for(var f in g.aliases){h.remove(f);}
;}
;if(i){for(var f in i.aliases){h.add(f,i.aliases[f]);}
;}
;}
}});}
)();
(function(){var a="'.",b="Missing appearance: ",c="_applyTheme",d="qx.debug",e="string",f="Cannot find a matching appearance for '",g="Hint: This may be an issue with nested child controls and a missing alias definition in the appearance theme.",h="qx.theme.manager.Appearance",j=":",k="Theme",l="undefined",m="changeTheme",n="/",o="singleton";qx.Class.define(h,{type:o,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__ed={};this.__ee={};}
,properties:{theme:{check:k,nullable:true,event:m,apply:c}},members:{__ef:{},__ed:null,__ee:null,_applyTheme:function(){this.__ee={};this.__ed={};}
,__eg:function(D,z,q,u){var w=z.appearances;var r=w[D];if(!r){var C=n;var s=[];var v=D.split(C);var B=qx.lang.Array.clone(v);var y;while(!r&&v.length>0){s.unshift(v.pop());var t=v.join(C);r=w[t];if(r){y=r.alias||r;if(typeof y===e){var A=y+C+s.join(C);return this.__eg(A,z,q,B);}
;}
;}
;for(var i=0;i<s.length-1;i++ ){s.shift();var x=s.join(C);var p=this.__eg(x,z,null,B);if(p){return p;}
;}
;if(q!=null){return this.__eg(q,z,null,B);}
;if(qx.core.Environment.get(d)){if(typeof u!==l){this.debug(f+u.join(n)+a);if(u.length>1){this.info(g);}
;}
;}
;return null;}
else if(typeof r===e){return this.__eg(r,z,q,B);}
else if(r.include&&!r.style){return this.__eg(r.include,z,q,B);}
;return D;}
,styleFrom:function(W,O,P,F){if(!P){P=this.getTheme();}
;var M=this.__ee;var E=M[W];if(!E){E=M[W]=this.__eg(W,P,F);}
;var T=P.appearances[E];if(!T){this.warn(b+W);return null;}
;if(!T.style){return null;}
;var U=E;if(O){var I=T.$$bits;if(!I){I=T.$$bits={};T.$$length=0;}
;var J=0;for(var L in O){if(!O[L]){continue;}
;if(I[L]==null){I[L]=1<<T.$$length++ ;}
;J+=I[L];}
;if(J>0){U+=j+J;}
;}
;var K=this.__ed;if(K[U]!==undefined){return K[U];}
;if(!O){O=this.__ef;}
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
},destruct:function(){this.__ed=this.__ee=null;}
});}
)();
(function(){var b="'!",c='Invalid include in theme "',d="fonts",e="appearances",f='The configuration key "',g="Mixin theme is not a valid theme!",h='" is not allowed!',j="icons",k="You can only define one theme category per file! Invalid theme: ",m="string",n="decorations",o="other",p="Found base flag in entry '",q="qx.debug",r='Invalid patch in theme "',s="widgets",t="[Theme ",u="borders",v="' are not compatible '",w="The mixins '",x='": ',y="' of theme '",z='" is invalid: ',A='Invalid extend in theme "',B='Invalid type of key "',C='The key "',D='"!',E="]",F='"! The value needs to be a map!',G='"! The type of the key must be "',H="undefined",I='The type of the key "',J="qx.Theme",K='The content of a meta theme must reference to other themes. The value for "',L='" inside the meta block is wrong.',M='" in theme "',N="colors",O='Invalid key "',P='"! The value is undefined/null!',Q="Theme",R="meta",S='" is not allowed inside a meta theme block.',T="'. Base flags are not allowed for themes without a valid super theme!",U="object";qx.Bootstrap.define(J,{statics:{define:function(name,W){if(!W){var W={};}
;W.include=this.__nG(W.include);W.patch=this.__nG(W.patch);if(qx.core.Environment.get(q)){this.__i(name,W);}
;var V={$$type:Q,name:name,title:W.title,toString:this.genericToString};if(W.extend){V.supertheme=W.extend;}
;V.basename=qx.Bootstrap.createNamespace(name,V);this.__nJ(V,W);this.__nH(V,W);this.$$registry[name]=V;for(var i=0,a=W.include,l=a.length;i<l;i++ ){this.include(V,a[i]);}
;for(var i=0,a=W.patch,l=a.length;i<l;i++ ){this.patch(V,a[i]);}
;}
,__nG:function(X){if(!X){return [];}
;if(qx.Bootstrap.isArray(X)){return X;}
else {return [X];}
;}
,__nH:function(Y,ba){var bb=ba.aliases||{};if(ba.extend&&ba.extend.aliases){qx.Bootstrap.objectMergeWith(bb,ba.extend.aliases,false);}
;Y.aliases=bb;}
,getAll:function(){return this.$$registry;}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,genericToString:function(){return t+this.name+E;}
,__nI:function(bd){for(var i=0,bc=this.__nK,l=bc.length;i<l;i++ ){if(bd[bc[i]]){return bc[i];}
;}
;}
,__nJ:function(bi,bj){var bf=this.__nI(bj);if(bj.extend&&!bf){bf=bj.extend.type;}
;bi.type=bf||o;var bg=function(){}
;if(bj.extend){bg.prototype=new bj.extend.$$clazz;}
;var be=bg.prototype;var bh=bj[bf];for(var bk in bh){be[bk]=bh[bk];if(be[bk].base){if(qx.core.Environment.get(q)){if(!bj.extend){throw new Error(p+bk+y+bj.name+T);}
;}
;be[bk].base=bj.extend;}
;}
;bi.$$clazz=bg;bi[bf]=new bg;}
,$$registry:{},__nK:[N,u,n,d,j,s,e,R],__h:qx.core.Environment.select(q,{"true":{"title":m,"aliases":U,"type":m,"extend":U,"colors":U,"borders":U,"decorations":U,"fonts":U,"icons":U,"widgets":U,"appearances":U,"meta":U,"include":U,"patch":U},"default":null}),__nL:qx.core.Environment.select(q,{"true":{"color":U,"border":U,"decoration":U,"font":U,"icon":U,"appearance":U,"widget":U},"default":null}),__i:qx.core.Environment.select(q,{"true":function(name,bq){var bp=this.__h;for(var bo in bq){if(bp[bo]===undefined){throw new Error(f+bo+M+name+h);}
;if(bq[bo]==null){throw new Error(O+bo+M+name+P);}
;if(bp[bo]!==null&&typeof bq[bo]!==bp[bo]){throw new Error(B+bo+M+name+G+bp[bo]+D);}
;}
;var bn=[N,u,n,d,j,s,e,R];for(var i=0,l=bn.length;i<l;i++ ){var bo=bn[i];if(bq[bo]!==undefined&&(bq[bo] instanceof Array||bq[bo] instanceof RegExp||bq[bo] instanceof Date||bq[bo].classname!==undefined)){throw new Error(O+bo+M+name+F);}
;}
;var bl=0;for(var i=0,l=bn.length;i<l;i++ ){var bo=bn[i];if(bq[bo]){bl++ ;}
;if(bl>1){throw new Error(k+name);}
;}
;if(bq.meta){var bm;for(var bo in bq.meta){bm=bq.meta[bo];if(this.__nL[bo]===undefined){throw new Error(C+bo+S);}
;if(typeof bm!==this.__nL[bo]){throw new Error(I+bo+L);}
;if(!(typeof bm===U&&bm!==null&&bm.$$type===Q)){throw new Error(K+bo+M+name+z+bm);}
;}
;}
;if(bq.extend&&bq.extend.$$type!==Q){throw new Error(A+name+x+bq.extend);}
;if(bq.include){for(var i=0,l=bq.include.length;i<l;i++ ){if(typeof (bq.include[i])==H||bq.include[i].$$type!==Q){throw new Error(c+name+x+bq.include[i]);}
;}
;}
;if(bq.patch){for(var i=0,l=bq.patch.length;i<l;i++ ){if(typeof (bq.patch[i])==H||bq.patch[i].$$type!==Q){throw new Error(r+name+x+bq.patch[i]);}
;}
;}
;}
,"default":function(){}
}),patch:function(bu,bs){this.__nM(bs);var bw=this.__nI(bs);if(bw!==this.__nI(bu)){throw new Error(w+bu.name+v+bs.name+b);}
;var bt=bs[bw];var br=bu.$$clazz.prototype;for(var bv in bt){br[bv]=bt[bv];}
;}
,include:function(bA,by){this.__nM(by);var bC=by.type;if(bC!==bA.type){throw new Error(w+bA.name+v+by.name+b);}
;var bz=by[bC];var bx=bA.$$clazz.prototype;for(var bB in bz){if(bx[bB]!==undefined){continue;}
;bx[bB]=bz[bB];}
;}
,__nM:function(bD){if(typeof bD===H||bD==null){var bF=new Error(g);if(qx.core.Environment.get(q)){var bE=qx.dev.StackTrace.getStackTraceFromError(bF);qx.Bootstrap.error(this,bE);}
;throw bF;}
;}
}});}
)();
(function(){var a="qx.ui.tooltip.ToolTip",b="Boolean",c="",d="mouse",f="pointerover",g="interval",h="_applyCurrent",i="widget",j="qx.ui.tooltip.Manager",k="__op",l="pointermove",m="focusout",n="__os",o="tooltip-error",p="__oq",q="singleton",r="pointerout";qx.Class.define(j,{type:q,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);qx.event.Registration.addListener(document.body,f,this.__ox,this,true);this.__op=new qx.event.Timer();this.__op.addListener(g,this.__ou,this);this.__oq=new qx.event.Timer();this.__oq.addListener(g,this.__ov,this);this.__or={left:0,top:0};}
,properties:{current:{check:a,nullable:true,apply:h},showInvalidToolTips:{check:b,init:true},showToolTips:{check:b,init:true}},members:{__or:null,__oq:null,__op:null,__os:null,__ot:null,getSharedTooltip:function(){if(!this.__os){this.__os=new qx.ui.tooltip.ToolTip().set({rich:true});}
;return this.__os;}
,getSharedErrorTooltip:function(){if(!this.__ot){this.__ot=new qx.ui.tooltip.ToolTip().set({appearance:o,rich:true});this.__ot.setLabel(c);this.__ot.syncAppearance();}
;return this.__ot;}
,_applyCurrent:function(u,t){if(t&&qx.ui.core.Widget.contains(t,u)){return;}
;if(t){if(!t.isDisposed()){t.exclude();}
;this.__op.stop();this.__oq.stop();}
;var v=qx.event.Registration;var s=document.body;if(u){this.__op.startWith(u.getShowTimeout());v.addListener(s,r,this.__oy,this,true);v.addListener(s,m,this.__oz,this,true);v.addListener(s,l,this.__ow,this,true);}
else {v.removeListener(s,r,this.__oy,this,true);v.removeListener(s,m,this.__oz,this,true);v.removeListener(s,l,this.__ow,this,true);}
;}
,__ou:function(e){var w=this.getCurrent();if(w&&!w.isDisposed()){this.__oq.startWith(w.getHideTimeout());if(w.getPlaceMethod()==i){w.placeToWidget(w.getOpener());}
else {w.placeToPoint(this.__or);}
;w.show();}
;this.__op.stop();}
,__ov:function(e){var x=this.getCurrent();if(x&&!x.isDisposed()){x.exclude();}
;this.__oq.stop();this.resetCurrent();}
,__ow:function(e){var y=this.__or;y.left=Math.round(e.getDocumentLeft());y.top=Math.round(e.getDocumentTop());}
,__ox:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());this.__ow(e);this.showToolTip(z);}
,showToolTip:function(C){if(!C){return;}
;var D,B,E,A;while(C!=null){D=C.getToolTip();B=C.getToolTipText()||null;E=C.getToolTipIcon()||null;if(qx.Class.hasInterface(C.constructor,qx.ui.form.IForm)&&!C.isValid()){A=C.getInvalidMessage();}
;if(D||B||E||A){break;}
;C=C.getLayoutParent();}
;if(!C||!C.getEnabled()||C.isBlockToolTip()||(!A&&!this.getShowToolTips())||(A&&!this.getShowInvalidToolTips())){return;}
;if(A){D=this.getSharedErrorTooltip().set({label:A});}
;if(!D){D=this.getSharedTooltip().set({label:B,icon:E});}
;this.setCurrent(D);D.setOpener(C);}
,__oy:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());if(!F){return;}
;var G=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());if(!G&&e.getPointerType()==d){return;}
;var H=this.getCurrent();if(H&&(G==H||qx.ui.core.Widget.contains(H,G))){return;}
;if(G&&F&&qx.ui.core.Widget.contains(F,G)){return;}
;if(H&&!G){this.setCurrent(null);}
else {this.resetCurrent();}
;}
,__oz:function(e){var I=qx.ui.core.Widget.getWidgetByElement(e.getTarget());if(!I){return;}
;var J=this.getCurrent();if(J&&J==I.getToolTip()){this.setCurrent(null);}
;}
},destruct:function(){qx.event.Registration.removeListener(document.body,f,this.__ox,this,true);this._disposeObjects(k,p,n);this.__or=null;}
});}
)();
(function(){var a="qx.ui.core.MLayoutHandling";qx.Mixin.define(a,{members:{setLayout:function(b){this._setLayout(b);}
,getLayout:function(){return this._getLayout();}
},statics:{remap:function(c){c.getLayout=c._getLayout;c.setLayout=c._setLayout;}
}});}
)();
(function(){var a="changeWidth",b="Wrong 'width' argument. ",c="Boolean",d="allowShrinkY",e="_applyAlign",f="_applyStretching",g="Something went wrong with the layout of ",h="bottom",i="Wrong 'left' argument. ",j="Integer",k="changeTheme",l="_applyDimension",m="baseline",n="qx.debug",o="marginBottom",p="qx.ui.core.LayoutItem",q="center",r="marginTop",s="!",t="allowGrowX",u="shorthand",v="middle",w="marginLeft",x="qx.dyntheme",y="allowShrinkX",z="top",A="right",B="marginRight",C="abstract",D="Wrong 'top' argument. ",E="Wrong 'height' argument. ",F="_applyMargin",G="allowGrowY",H="left",I="changeHeight";qx.Class.define(p,{type:C,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);if(qx.core.Environment.get(x)){qx.theme.manager.Appearance.getInstance().addListener(k,this._onChangeTheme,this);qx.theme.manager.Color.getInstance().addListener(k,this._onChangeTheme,this);}
;}
,properties:{minWidth:{check:j,nullable:true,apply:l,init:null,themeable:true},width:{check:j,event:a,nullable:true,apply:l,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:l,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:l,init:null,themeable:true},height:{check:j,event:I,nullable:true,apply:l,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:l,init:null,themeable:true},allowGrowX:{check:c,apply:f,init:true,themeable:true},allowShrinkX:{check:c,apply:f,init:true,themeable:true},allowGrowY:{check:c,apply:f,init:true,themeable:true},allowShrinkY:{check:c,apply:f,init:true,themeable:true},allowStretchX:{group:[t,y],mode:u,themeable:true},allowStretchY:{group:[G,d],mode:u,themeable:true},marginTop:{check:j,init:0,apply:F,themeable:true},marginRight:{check:j,init:0,apply:F,themeable:true},marginBottom:{check:j,init:0,apply:F,themeable:true},marginLeft:{check:j,init:0,apply:F,themeable:true},margin:{group:[r,B,o,w],mode:u,themeable:true},alignX:{check:[H,q,A],nullable:true,apply:e,themeable:true},alignY:{check:[z,v,h,m],nullable:true,apply:e,themeable:true}},members:{_onChangeTheme:qx.core.Environment.select(x,{"true":function(){var L=qx.util.PropertyUtil.getAllProperties(this.constructor);for(var name in L){var K=L[name];if(K.themeable){var J=qx.util.PropertyUtil.getUserValue(this,name);if(J==null){qx.util.PropertyUtil.resetThemed(this,name);}
;}
;}
;}
,"false":null}),__dU:null,__dV:null,__dW:null,__dX:null,__dY:null,__ea:null,__eb:null,getBounds:function(){return this.__ea||this.__dV||null;}
,clearSeparators:function(){}
,renderSeparator:function(M,N){}
,renderLayout:function(U,top,R,Q){if(qx.core.Environment.get(n)){var S=g+this.toString()+s;this.assertInteger(U,i+S);this.assertInteger(top,D+S);this.assertInteger(R,b+S);this.assertInteger(Q,E+S);}
;var P=null;if(this.getHeight()==null&&this._hasHeightForWidth()){var P=this._getHeightForWidth(R);}
;if(P!=null&&P!==this.__dU){this.__dU=P;qx.ui.core.queue.Layout.add(this);return null;}
;var O=this.__dV;if(!O){O=this.__dV={};}
;var T={};if(U!==O.left||top!==O.top){T.position=true;O.left=U;O.top=top;}
;if(R!==O.width||Q!==O.height){T.size=true;O.width=R;O.height=Q;}
;if(this.__dW){T.local=true;delete this.__dW;}
;if(this.__dY){T.margin=true;delete this.__dY;}
;return T;}
,isExcluded:function(){return false;}
,hasValidLayout:function(){return !this.__dW;}
,scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);}
,invalidateLayoutCache:function(){this.__dW=true;this.__dX=null;}
,getSizeHint:function(V){var W=this.__dX;if(W){return W;}
;if(V===false){return null;}
;W=this.__dX=this._computeSizeHint();if(this._hasHeightForWidth()&&this.__dU&&this.getHeight()==null){W.height=this.__dU;}
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
,_applyMargin:function(){this.__dY=true;var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}
;}
,_applyAlign:function(){var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}
;}
,_applyDimension:function(){qx.ui.core.queue.Layout.add(this);}
,_applyStretching:function(){qx.ui.core.queue.Layout.add(this);}
,hasUserBounds:function(){return !!this.__ea;}
,setUserBounds:function(bi,top,bh,bj){this.__ea={left:bi,top:top,width:bh,height:bj};qx.ui.core.queue.Layout.add(this);}
,resetUserBounds:function(){delete this.__ea;qx.ui.core.queue.Layout.add(this);}
,__ec:{},setLayoutProperties:function(bm){if(bm==null){return;}
;var bk=this.__eb;if(!bk){bk=this.__eb={};}
;var parent=this.getLayoutParent();if(parent){parent.updateLayoutProperties(bm);}
;for(var bl in bm){if(bm[bl]==null){delete bk[bl];}
else {bk[bl]=bm[bl];}
;}
;}
,getLayoutProperties:function(){return this.__eb||this.__ec;}
,clearLayoutProperties:function(){delete this.__eb;}
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
,clone:function(){var bq=qx.core.Object.prototype.clone.call(this);var br=this.__eb;if(br){bq.__eb=qx.lang.Object.clone(br);}
;return bq;}
},destruct:function(){if(qx.core.Environment.get(x)){qx.theme.manager.Appearance.getInstance().removeListener(k,this._onChangeTheme,this);qx.theme.manager.Color.getInstance().removeListener(k,this._onChangeTheme,this);}
;this.$$parent=this.$$subparent=this.__eb=this.__dV=this.__ea=this.__dX=null;}
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
(function(){var a="qx.ui.core.queue.Layout",b="layout";qx.Class.define(a,{statics:{__em:{},__en:{},remove:function(c){delete this.__em[c.$$hash];}
,add:function(d){this.__em[d.$$hash]=d;qx.ui.core.queue.Manager.scheduleFlush(b);}
,isScheduled:function(e){return !!this.__em[e.$$hash];}
,flush:function(){var f=this.__ep();for(var i=f.length-1;i>=0;i-- ){var g=f[i];if(g.hasValidLayout()){continue;}
;if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();g.renderLayout(0,0,j.width,j.height);}
else {var h=g.getBounds();g.renderLayout(h.left,h.top,h.width,h.height);}
;}
;}
,getNestingLevel:function(l){var k=this.__en;var n=0;var parent=l;while(true){if(k[parent.$$hash]!=null){n+=k[parent.$$hash];break;}
;if(!parent.$$parent){break;}
;parent=parent.$$parent;n+=1;}
;var m=n;while(l&&l!==parent){k[l.$$hash]=m-- ;l=l.$$parent;}
;return n;}
,__eo:function(){var t=qx.ui.core.queue.Visibility;this.__en={};var s=[];var r=this.__em;var o,q;for(var p in r){o=r[p];if(t.isVisible(o)){q=this.getNestingLevel(o);if(!s[q]){s[q]={};}
;s[q][p]=o;delete r[p];}
;}
;return s;}
,__ep:function(){var x=[];var z=this.__eo();for(var w=z.length-1;w>=0;w-- ){if(!z[w]){continue;}
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
(function(){var a="qxWeb",b="Method '",c="data-qx-class",d="' already available.",e="' already available as static method.",f="qx.debug";qx.Bootstrap.define(a,{extend:qx.type.BaseArray,statics:{__cN:[],$$qx:qx,$init:function(m,j){var k=[];for(var i=0;i<m.length;i++ ){var h=!!(m[i]&&(m[i].nodeType===1||m[i].nodeType===9||m[i].nodeType===11));if(h){k.push(m[i]);continue;}
;var g=!!(m[i]&&m[i].history&&m[i].location&&m[i].document);if(g){k.push(m[i]);}
;}
;if(m[0]&&m[0].getAttribute&&m[0].getAttribute(c)){j=qx.Bootstrap.getByName(m[0].getAttribute(c))||j;}
;var n=qx.lang.Array.cast(k,j);for(var i=0;i<qxWeb.__cN.length;i++ ){qxWeb.__cN[i].call(n);}
;return n;}
,$attach:function(o){for(var name in o){if(qx.core.Environment.get(f)){if(qxWeb.prototype[name]!=undefined&&Array.prototype[name]==undefined){throw new Error(b+name+d);}
;}
;qxWeb.prototype[name]=o[name];}
;}
,$attachStatic:function(p){for(var name in p){if(qx.core.Environment.get(f)){if(qxWeb[name]!=undefined){throw new Error(b+name+e);}
;}
;qxWeb[name]=p[name];}
;}
,$attachInit:function(r){this.__cN.push(r);}
,define:function(name,s){if(s==undefined){s=name;name=null;}
;return qx.Bootstrap.define.call(qx.Bootstrap,name,s);}
},construct:function(u,t){if(!u&&this instanceof qxWeb){return this;}
;if(!u){u=[];}
else if(qx.Bootstrap.isString(u)){if(t instanceof qxWeb){t=t[0];}
;u=qx.bom.Selector.query(u,t);}
else if((u.nodeType===1||u.nodeType===9||u.nodeType===11)||(u.history&&u.location&&u.document)){u=[u];}
;return qxWeb.$init(u,qxWeb);}
,members:{filter:function(v){if(qx.lang.Type.isFunction(v)){return qxWeb.$init(Array.prototype.filter.call(this,v),this.constructor);}
;return qxWeb.$init(qx.bom.Selector.matches(v,this),this.constructor);}
,unique:function(){var w=qx.lang.Array.unique(this);return qxWeb.$init(w,this.constructor);}
,slice:function(x,y){if(y!==undefined){return qxWeb.$init(Array.prototype.slice.call(this,x,y),this.constructor);}
;return qxWeb.$init(Array.prototype.slice.call(this,x),this.constructor);}
,splice:function(z,A,B){return qxWeb.$init(Array.prototype.splice.apply(this,arguments),this.constructor);}
,map:function(C,D){return qxWeb.$init(Array.prototype.map.apply(this,arguments),qxWeb);}
,concat:function(F){var E=Array.prototype.slice.call(this,0);for(var i=0;i<arguments.length;i++ ){if(arguments[i] instanceof qxWeb){E=E.concat(Array.prototype.slice.call(arguments[i],0));}
else {E.push(arguments[i]);}
;}
;return qxWeb.$init(E,this.constructor);}
,indexOf:function(G){if(!G){return -1;}
;if(qx.Bootstrap.isArray(G)){G=G[0];}
;for(var i=0,l=this.length;i<l;i++ ){if(this[i]===G){return i;}
;}
;return -1;}
,debug:function(){debugger;return this;}
,_forEachElement:function(I,H){for(var i=0,l=this.length;i<l;i++ ){if(this[i]&&(this[i].nodeType===1||this[i].nodeType===11)){I.apply(H||this,[this[i],i,this]);}
;}
;return this;}
,_forEachElementWrapped:function(K,J){this._forEachElement(function(L,N,M){K.apply(this,[qxWeb(L),N,M]);}
,J);return this;}
},defer:function(O){if(window.q==undefined){q=O;}
;}
});}
)();
(function(){var c="-",d="(^|",f="'] ",g="CLASS",h=":disabled",k="div",l="input",n="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",o="nth",p="*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(",q="type|href|height|width",r=")*)|.*)\\)|)",s="disabled",t="*(?:value|",u="~=",v="previousSibling",w="*(even|odd|(([+-]|)(\\d*)n|)",x="xml:lang",y="only",z="*",A="unsupported lang: ",B="+|((?:^|[^\\\\])(?:\\\\.)*)",C="i",D="\\\\([\\da-f]{1,6}",E="='$1']",F="w#",G="^=",H="*([>+~]|",I="[t^='']",J="*\\)|)",K="+$",L="=",M="unload",N="id",O="text",P="needsContext",Q="nextSibling",R="$=",S="[s!='']:x",T="string",U=")|.)",V="[\\x20\\t\\r\\n\\f]",W="[name=d]",X="*(?:([+-]|)",Y="*((?:-\\d)?\\d*)",cL="#",cM="[selected]",cN="type",cH="ig",cI="parentNode",cJ="href",cK="0x",cS="(",cT="w",cY="even",cU="<div class='a'></div><div class='a i'></div>",cO="g",cP="*\\]",cQ="*\\)|)(?=[^-]|$)",cR="unsupported pseudo: ",dC="w*",eo="*[*^$|!~]?=",da="<select t=''><option selected=''></option></select>",cV=" ",cW="hidden",el="*(?:([*^$|!~]?=)",cX="*,",db="function",dc="^",dd=")",di=")|)|)",dj=":(",dk="onunload",de="button",df="0",dg="^(",dh="option",dq="odd",dr="class",ds="*(\\d+)|))",dt="lang",dl="|=",dm="\\[",dn="name",dp="D",dx="!=",dy="<input/>",en="*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(",dz="sizzle",du="*=",dv="|",em="Syntax error, unrecognized expression: ",dw=")$",dA="object",dB="?|(",dN="$1",dM=")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|",dL="*([^\\]'\"]*?)",dR="*(?:''|\"\")",dQ="eq",dP="className",dO=":enabled",dG="of-type",dF="TAG",dE="|$)",dD="<a href='#'></a>",dK="empty",dJ="qx.bom.Selector",dI="^(?:",dH="value",dY="[id='",dX="^#(",dW="[*^$]=",dV="*,:x",ed="*(",ec="^\\.(",eb="",ea="CHILD",dU=",.*:",dT="^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(",dS="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",eg="$",ef="\\$&",ee=":checked",ek=",",ej="ID",ei="last",eh="HTML";qx.Bootstrap.define(dJ,{statics:{query:null,matches:null}});(function(window){var i,eM,fM,ew,eB,fC,eG,ep,eE,eF,eD,document,fK,fq,fe,eq,ff,eN,fa=dz+-(new Date()),eH=window.document,eW=0,eA=0,es=ey(),fr=ey(),fI=ey(),eT=function(a,b){if(a===b){eF=true;}
;return 0;}
,eR=typeof undefined,ft=1<<31,fA=({}).hasOwnProperty,ev=[],ez=ev.pop,fD=ev.push,fG=ev.push,eI=ev.slice,eS=ev.indexOf||function(fN){var i=0,fO=this.length;for(;i<fO;i++ ){if(this[i]===fN){return i;}
;}
;return -1;}
,fd=n,eK=V,fh=dS,fv=fh.replace(cT,F),fH=dm+eK+ed+fh+dd+eK+el+eK+p+fv+di+eK+cP,fg=dj+fh+dM+fH.replace(3,8)+r,fp=new RegExp(dc+eK+B+eK+K,cO),fx=new RegExp(dc+eK+cX+eK+z),eL=new RegExp(dc+eK+H+eK+dd+eK+z),fj=new RegExp(L+eK+dL+eK+cP,cO),fu=new RegExp(fg),eX=new RegExp(dc+fv+eg),fB={"ID":new RegExp(dX+fh+dd),"CLASS":new RegExp(ec+fh+dd),"TAG":new RegExp(dg+fh.replace(cT,dC)+dd),"ATTR":new RegExp(dc+fH),"PSEUDO":new RegExp(dc+fg),"CHILD":new RegExp(dT+eK+w+eK+X+eK+ds+eK+J,C),"bool":new RegExp(dI+fd+dw,C),"needsContext":new RegExp(dc+eK+en+eK+Y+eK+cQ,C)},fl=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,fz=/^[^{]+\{\s*\[native \w/,fF=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,fc=/[+~]/,fm=/'|\\/g,eu=new RegExp(D+eK+dB+eK+U,cH),fs=function(_,fP,fQ){var fR=cK+fP-0x10000;return fR!==fR||fQ?fP:fR<0?String.fromCharCode(fR+0x10000):String.fromCharCode(fR>>10|0xD800,fR&0x3FF|0xDC00);}
;try{fG.apply((ev=eI.call(eH.childNodes)),eH.childNodes);ev[eH.childNodes.length].nodeType;}
catch(e){fG={apply:ev.length?function(fT,fS){fD.apply(fT,eI.call(fS));}
:function(fV,fU){var j=fV.length,i=0;while((fV[j++ ]=fU[i++ ])){}
;fV.length=j-1;}
};}
;function fL(gg,fX,gb,gd){var gi,fY,m,fW,i,ge,gh,ga,gf,gc;if((fX?fX.ownerDocument||fX:eH)!==document){eD(fX);}
;fX=fX||document;gb=gb||[];if(!gg||typeof gg!==T){return gb;}
;if((fW=fX.nodeType)!==1&&fW!==9){return [];}
;if(fq&&!gd){if((gi=fF.exec(gg))){if((m=gi[1])){if(fW===9){fY=fX.getElementById(m);if(fY&&fY.parentNode){if(fY.id===m){gb.push(fY);return gb;}
;}
else {return gb;}
;}
else {if(fX.ownerDocument&&(fY=fX.ownerDocument.getElementById(m))&&eN(fX,fY)&&fY.id===m){gb.push(fY);return gb;}
;}
;}
else if(gi[2]){fG.apply(gb,fX.getElementsByTagName(gg));return gb;}
else if((m=gi[3])&&eM.getElementsByClassName&&fX.getElementsByClassName){fG.apply(gb,fX.getElementsByClassName(m));return gb;}
;}
;if(eM.qsa&&(!fe||!fe.test(gg))){ga=gh=fa;gf=fX;gc=fW===9&&gg;if(fW===1&&fX.nodeName.toLowerCase()!==dA){ge=eV(gg);if((gh=fX.getAttribute(N))){ga=gh.replace(fm,ef);}
else {fX.setAttribute(N,ga);}
;ga=dY+ga+f;i=ge.length;while(i-- ){ge[i]=ga+eQ(ge[i]);}
;gf=fc.test(gg)&&eC(fX.parentNode)||fX;gc=ge.join(ek);}
;if(gc){try{fG.apply(gb,gf.querySelectorAll(gc));return gb;}
catch(gj){}
finally{if(!gh){fX.removeAttribute(N);}
;}
;}
;}
;}
;return eG(gg.replace(fp,dN),fX,gb,gd);}
;function ey(){var gk=[];function gl(gm,gn){if(gk.push(gm+cV)>fM.cacheLength){delete gl[gk.shift()];}
;return (gl[gm+cV]=gn);}
;return gl;}
;function fy(go){go[fa]=true;return go;}
;function fk(gq){var gp=document.createElement(k);try{return !!gq(gp);}
catch(e){return false;}
finally{if(gp.parentNode){gp.parentNode.removeChild(gp);}
;gp=null;}
;}
;function fo(gt,gs){var gr=gt.split(dv),i=gt.length;while(i-- ){fM.attrHandle[gr[i]]=gs;}
;}
;function eY(a,b){var gv=b&&a,gu=gv&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||ft)-(~a.sourceIndex||ft);if(gu){return gu;}
;if(gv){while((gv=gv.nextSibling)){if(gv===b){return -1;}
;}
;}
;return a?1:-1;}
;function fE(gw){return function(gx){var name=gx.nodeName.toLowerCase();return name===l&&gx.type===gw;}
;}
;function er(gy){return function(gz){var name=gz.nodeName.toLowerCase();return (name===l||name===de)&&gz.type===gy;}
;}
;function fi(gA){return fy(function(gB){gB=+gB;return fy(function(gE,gC){var j,gD=gA([],gE.length,gB),i=gD.length;while(i-- ){if(gE[(j=gD[i])]){gE[j]=!(gC[j]=gE[j]);}
;}
;}
);}
);}
;function eC(gF){return gF&&typeof gF.getElementsByTagName!==eR&&gF;}
;eM=fL.support={};eB=fL.isXML=function(gG){var gH=gG&&(gG.ownerDocument||gG).documentElement;return gH?gH.nodeName!==eh:false;}
;eD=fL.setDocument=function(gI){var gK,gJ=gI?gI.ownerDocument||gI:eH,parent=gJ.defaultView;if(gJ===document||gJ.nodeType!==9||!gJ.documentElement){return document;}
;document=gJ;fK=gJ.documentElement;fq=!eB(gJ);if(parent&&parent!==parent.top){if(parent.addEventListener){parent.addEventListener(M,function(){eD();}
,false);}
else if(parent.attachEvent){parent.attachEvent(dk,function(){eD();}
);}
;}
;eM.attributes=fk(function(gL){gL.className=C;return !gL.getAttribute(dP);}
);eM.getElementsByTagName=fk(function(gM){gM.appendChild(gJ.createComment(eb));return !gM.getElementsByTagName(z).length;}
);eM.getElementsByClassName=fz.test(gJ.getElementsByClassName)&&fk(function(gN){gN.innerHTML=cU;gN.firstChild.className=C;return gN.getElementsByClassName(C).length===2;}
);eM.getById=fk(function(gO){fK.appendChild(gO).id=fa;return !gJ.getElementsByName||!gJ.getElementsByName(fa).length;}
);if(eM.getById){fM.find[ej]=function(gP,gQ){if(typeof gQ.getElementById!==eR&&fq){var m=gQ.getElementById(gP);return m&&m.parentNode?[m]:[];}
;}
;fM.filter[ej]=function(gS){var gR=gS.replace(eu,fs);return function(gT){return gT.getAttribute(N)===gR;}
;}
;}
else {delete fM.find[ej];fM.filter[ej]=function(gV){var gU=gV.replace(eu,fs);return function(gX){var gW=typeof gX.getAttributeNode!==eR&&gX.getAttributeNode(N);return gW&&gW.value===gU;}
;}
;}
;fM.find[dF]=eM.getElementsByTagName?function(gY,ha){if(typeof ha.getElementsByTagName!==eR){return ha.getElementsByTagName(gY);}
;}
:function(he,hf){var hc,hb=[],i=0,hd=hf.getElementsByTagName(he);if(he===z){while((hc=hd[i++ ])){if(hc.nodeType===1){hb.push(hc);}
;}
;return hb;}
;return hd;}
;fM.find[g]=eM.getElementsByClassName&&function(hg,hh){if(typeof hh.getElementsByClassName!==eR&&fq){return hh.getElementsByClassName(hg);}
;}
;eq=[];fe=[];if((eM.qsa=fz.test(gJ.querySelectorAll))){fk(function(hi){hi.innerHTML=da;if(hi.querySelectorAll(I).length){fe.push(dW+eK+dR);}
;if(!hi.querySelectorAll(cM).length){fe.push(dm+eK+t+fd+dd);}
;if(!hi.querySelectorAll(ee).length){fe.push(ee);}
;}
);fk(function(hk){var hj=gJ.createElement(l);hj.setAttribute(cN,cW);hk.appendChild(hj).setAttribute(dn,dp);if(hk.querySelectorAll(W).length){fe.push(dn+eK+eo);}
;if(!hk.querySelectorAll(dO).length){fe.push(dO,h);}
;hk.querySelectorAll(dV);fe.push(dU);}
);}
;if((eM.matchesSelector=fz.test((ff=fK.webkitMatchesSelector||fK.mozMatchesSelector||fK.oMatchesSelector||fK.msMatchesSelector)))){fk(function(hl){eM.disconnectedMatch=ff.call(hl,k);ff.call(hl,S);eq.push(dx,fg);}
);}
;fe=fe.length&&new RegExp(fe.join(dv));eq=eq.length&&new RegExp(eq.join(dv));gK=fz.test(fK.compareDocumentPosition);eN=gK||fz.test(fK.contains)?function(a,b){var hm=a.nodeType===9?a.documentElement:a,hn=b&&b.parentNode;return a===hn||!!(hn&&hn.nodeType===1&&(hm.contains?hm.contains(hn):a.compareDocumentPosition&&a.compareDocumentPosition(hn)&16));}
:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}
;}
;}
;return false;}
;eT=gK?function(a,b){if(a===b){eF=true;return 0;}
;var ho=!a.compareDocumentPosition-!b.compareDocumentPosition;if(ho){return ho;}
;ho=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(ho&1||(!eM.sortDetached&&b.compareDocumentPosition(a)===ho)){if(a===gJ||a.ownerDocument===eH&&eN(eH,a)){return -1;}
;if(b===gJ||b.ownerDocument===eH&&eN(eH,b)){return 1;}
;return eE?(eS.call(eE,a)-eS.call(eE,b)):0;}
;return ho&4?-1:1;}
:function(a,b){if(a===b){eF=true;return 0;}
;var hp,i=0,hq=a.parentNode,hr=b.parentNode,hs=[a],ht=[b];if(!hq||!hr){return a===gJ?-1:b===gJ?1:hq?-1:hr?1:eE?(eS.call(eE,a)-eS.call(eE,b)):0;}
else if(hq===hr){return eY(a,b);}
;hp=a;while((hp=hp.parentNode)){hs.unshift(hp);}
;hp=b;while((hp=hp.parentNode)){ht.unshift(hp);}
;while(hs[i]===ht[i]){i++ ;}
;return i?eY(hs[i],ht[i]):hs[i]===eH?-1:ht[i]===eH?1:0;}
;return gJ;}
;fL.matches=function(hu,hv){return fL(hu,null,null,hv);}
;fL.matchesSelector=function(hx,hw){if((hx.ownerDocument||hx)!==document){eD(hx);}
;hw=hw.replace(fj,E);if(eM.matchesSelector&&fq&&(!eq||!eq.test(hw))&&(!fe||!fe.test(hw))){try{var hy=ff.call(hx,hw);if(hy||eM.disconnectedMatch||hx.document&&hx.document.nodeType!==11){return hy;}
;}
catch(e){}
;}
;return fL(hw,document,null,[hx]).length>0;}
;fL.contains=function(hA,hz){if((hA.ownerDocument||hA)!==document){eD(hA);}
;return eN(hA,hz);}
;fL.attr=function(hC,name){if((hC.ownerDocument||hC)!==document){eD(hC);}
;var hB=fM.attrHandle[name.toLowerCase()],hD=hB&&fA.call(fM.attrHandle,name.toLowerCase())?hB(hC,name,!fq):undefined;return hD!==undefined?hD:eM.attributes||!fq?hC.getAttribute(name):(hD=hC.getAttributeNode(name))&&hD.specified?hD.value:null;}
;fL.error=function(hE){throw new Error(em+hE);}
;fL.uniqueSort=function(hG){var hH,hF=[],j=0,i=0;eF=!eM.detectDuplicates;eE=!eM.sortStable&&hG.slice(0);hG.sort(eT);if(eF){while((hH=hG[i++ ])){if(hH===hG[i]){j=hF.push(i);}
;}
;while(j-- ){hG.splice(hF[j],1);}
;}
;eE=null;return hG;}
;ew=fL.getText=function(hK){var hI,hL=eb,i=0,hJ=hK.nodeType;if(!hJ){while((hI=hK[i++ ])){hL+=ew(hI);}
;}
else if(hJ===1||hJ===9||hJ===11){if(typeof hK.textContent===T){return hK.textContent;}
else {for(hK=hK.firstChild;hK;hK=hK.nextSibling){hL+=ew(hK);}
;}
;}
else if(hJ===3||hJ===4){return hK.nodeValue;}
;return hL;}
;fM=fL.selectors={cacheLength:50,createPseudo:fy,match:fB,attrHandle:{},find:{},relative:{">":{dir:cI,first:true}," ":{dir:cI},"+":{dir:v,first:true},"~":{dir:v}},preFilter:{"ATTR":function(hM){hM[1]=hM[1].replace(eu,fs);hM[3]=(hM[4]||hM[5]||eb).replace(eu,fs);if(hM[2]===u){hM[3]=cV+hM[3]+cV;}
;return hM.slice(0,4);}
,"CHILD":function(hN){hN[1]=hN[1].toLowerCase();if(hN[1].slice(0,3)===o){if(!hN[3]){fL.error(hN[0]);}
;hN[4]=+(hN[4]?hN[5]+(hN[6]||1):2*(hN[3]===cY||hN[3]===dq));hN[5]=+((hN[7]+hN[8])||hN[3]===dq);}
else if(hN[3]){fL.error(hN[0]);}
;return hN;}
,"PSEUDO":function(hP){var hQ,hO=!hP[5]&&hP[2];if(fB[ea].test(hP[0])){return null;}
;if(hP[3]&&hP[4]!==undefined){hP[2]=hP[4];}
else if(hO&&fu.test(hO)&&(hQ=eV(hO,true))&&(hQ=hO.indexOf(dd,hO.length-hQ)-hO.length)){hP[0]=hP[0].slice(0,hQ);hP[2]=hO.slice(0,hQ);}
;return hP.slice(0,3);}
},filter:{"TAG":function(hR){var hS=hR.replace(eu,fs).toLowerCase();return hR===z?function(){return true;}
:function(hT){return hT.nodeName&&hT.nodeName.toLowerCase()===hS;}
;}
,"CLASS":function(hU){var hV=es[hU+cV];return hV||(hV=new RegExp(d+eK+dd+hU+cS+eK+dE))&&es(hU,function(hW){return hV.test(typeof hW.className===T&&hW.className||typeof hW.getAttribute!==eR&&hW.getAttribute(dr)||eb);}
);}
,"ATTR":function(name,hX,hY){return function(ia){var ib=fL.attr(ia,name);if(ib==null){return hX===dx;}
;if(!hX){return true;}
;ib+=eb;return hX===L?ib===hY:hX===dx?ib!==hY:hX===G?hY&&ib.indexOf(hY)===0:hX===du?hY&&ib.indexOf(hY)>-1:hX===R?hY&&ib.slice(-hY.length)===hY:hX===u?(cV+ib+cV).indexOf(hY)>-1:hX===dl?ib===hY||ib.slice(0,hY.length+1)===hY+c:false;}
;}
,"CHILD":function(ij,ic,ii,ik,ie){var ih=ij.slice(0,3)!==o,forward=ij.slice(-4)!==ei,ig=ic===dG;return ik===1&&ie===0?function(il){return !!il.parentNode;}
:function(ir,iu,im){var iq,iv,io,iw,ip,is,ix=ih!==forward?Q:v,parent=ir.parentNode,name=ig&&ir.nodeName.toLowerCase(),it=!im&&!ig;if(parent){if(ih){while(ix){io=ir;while((io=io[ix])){if(ig?io.nodeName.toLowerCase()===name:io.nodeType===1){return false;}
;}
;is=ix=ij===y&&!is&&Q;}
;return true;}
;is=[forward?parent.firstChild:parent.lastChild];if(forward&&it){iv=parent[fa]||(parent[fa]={});iq=iv[ij]||[];ip=iq[0]===eW&&iq[1];iw=iq[0]===eW&&iq[2];io=ip&&parent.childNodes[ip];while((io= ++ip&&io&&io[ix]||(iw=ip=0)||is.pop())){if(io.nodeType===1&& ++iw&&io===ir){iv[ij]=[eW,ip,iw];break;}
;}
;}
else if(it&&(iq=(ir[fa]||(ir[fa]={}))[ij])&&iq[0]===eW){iw=iq[1];}
else {while((io= ++ip&&io&&io[ix]||(iw=ip=0)||is.pop())){if((ig?io.nodeName.toLowerCase()===name:io.nodeType===1)&& ++iw){if(it){(io[fa]||(io[fa]={}))[ij]=[eW,iw];}
;if(io===ir){break;}
;}
;}
;}
;iw-=ie;return iw===ik||(iw%ik===0&&iw/ik>=0);}
;}
;}
,"PSEUDO":function(iz,iA){var iy,iB=fM.pseudos[iz]||fM.setFilters[iz.toLowerCase()]||fL.error(cR+iz);if(iB[fa]){return iB(iA);}
;if(iB.length>1){iy=[iz,iz,eb,iA];return fM.setFilters.hasOwnProperty(iz.toLowerCase())?fy(function(iD,iC){var iE,iF=iB(iD,iA),i=iF.length;while(i-- ){iE=eS.call(iD,iF[i]);iD[iE]=!(iC[iE]=iF[i]);}
;}
):function(iG){return iB(iG,0,iy);}
;}
;return iB;}
},pseudos:{"not":fy(function(iI){var iH=[],iJ=[],iK=fC(iI.replace(fp,dN));return iK[fa]?fy(function(iP,iM,iQ,iL){var iN,iO=iK(iP,null,iL,[]),i=iP.length;while(i-- ){if((iN=iO[i])){iP[i]=!(iM[i]=iN);}
;}
;}
):function(iS,iT,iR){iH[0]=iS;iK(iH,null,iR,iJ);return !iJ.pop();}
;}
),"has":fy(function(iU){return function(iV){return fL(iU,iV).length>0;}
;}
),"contains":fy(function(iW){return function(iX){return (iX.textContent||iX.innerText||ew(iX)).indexOf(iW)>-1;}
;}
),"lang":fy(function(iY){if(!eX.test(iY||eb)){fL.error(A+iY);}
;iY=iY.replace(eu,fs).toLowerCase();return function(jb){var ja;do {if((ja=fq?jb.lang:jb.getAttribute(x)||jb.getAttribute(dt))){ja=ja.toLowerCase();return ja===iY||ja.indexOf(iY+c)===0;}
;}
while((jb=jb.parentNode)&&jb.nodeType===1);return false;}
;}
),"target":function(jd){var jc=window.location&&window.location.hash;return jc&&jc.slice(1)===jd.id;}
,"root":function(je){return je===fK;}
,"focus":function(jf){return jf===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(jf.type||jf.href||~jf.tabIndex);}
,"enabled":function(jg){return jg.disabled===false;}
,"disabled":function(jh){return jh.disabled===true;}
,"checked":function(ji){var jj=ji.nodeName.toLowerCase();return (jj===l&&!!ji.checked)||(jj===dh&&!!ji.selected);}
,"selected":function(jk){if(jk.parentNode){jk.parentNode.selectedIndex;}
;return jk.selected===true;}
,"empty":function(jl){for(jl=jl.firstChild;jl;jl=jl.nextSibling){if(jl.nodeType<6){return false;}
;}
;return true;}
,"parent":function(jm){return !fM.pseudos[dK](jm);}
,"header":function(jn){return et.test(jn.nodeName);}
,"input":function(jo){return fl.test(jo.nodeName);}
,"button":function(jp){var name=jp.nodeName.toLowerCase();return name===l&&jp.type===de||name===de;}
,"text":function(jq){var jr;return jq.nodeName.toLowerCase()===l&&jq.type===O&&((jr=jq.getAttribute(cN))==null||jr.toLowerCase()===O);}
,"first":fi(function(){return [0];}
),"last":fi(function(js,length){return [length-1];}
),"eq":fi(function(jt,length,ju){return [ju<0?ju+length:ju];}
),"even":fi(function(jv,length){var i=0;for(;i<length;i+=2){jv.push(i);}
;return jv;}
),"odd":fi(function(jw,length){var i=1;for(;i<length;i+=2){jw.push(i);}
;return jw;}
),"lt":fi(function(jx,length,jy){var i=jy<0?jy+length:jy;for(; --i>=0;){jx.push(i);}
;return jx;}
),"gt":fi(function(jz,length,jA){var i=jA<0?jA+length:jA;for(; ++i<length;){jz.push(i);}
;return jz;}
)}};fM.pseudos[o]=fM.pseudos[dQ];for(i in {radio:true,checkbox:true,file:true,password:true,image:true}){fM.pseudos[i]=fE(i);}
;for(i in {submit:true,reset:true}){fM.pseudos[i]=er(i);}
;function fJ(){}
;fJ.prototype=fM.filters=fM.pseudos;fM.setFilters=new fJ();function eV(jE,jD){var jK,jJ,jB,jI,jF,jH,jG,jC=fr[jE+cV];if(jC){return jD?0:jC.slice(0);}
;jF=jE;jH=[];jG=fM.preFilter;while(jF){if(!jK||(jJ=fx.exec(jF))){if(jJ){jF=jF.slice(jJ[0].length)||jF;}
;jH.push((jB=[]));}
;jK=false;if((jJ=eL.exec(jF))){jK=jJ.shift();jB.push({value:jK,type:jJ[0].replace(fp,cV)});jF=jF.slice(jK.length);}
;for(jI in fM.filter){if((jJ=fB[jI].exec(jF))&&(!jG[jI]||(jJ=jG[jI](jJ)))){jK=jJ.shift();jB.push({value:jK,type:jI,matches:jJ});jF=jF.slice(jK.length);}
;}
;if(!jK){break;}
;}
;return jD?jF.length:jF?fL.error(jE):fr(jE,jH).slice(0);}
;function eQ(jL){var i=0,jM=jL.length,jN=eb;for(;i<jM;i++ ){jN+=jL[i].value;}
;return jN;}
;function eO(jO,jP,jQ){var jR=jP.dir,jT=jQ&&jR===cI,jS=eA++ ;return jP.first?function(jV,jW,jU){while((jV=jV[jR])){if(jV.nodeType===1||jT){return jO(jV,jW,jU);}
;}
;}
:function(jY,kb,jX){var ka,kc,kd=[eW,jS];if(jX){while((jY=jY[jR])){if(jY.nodeType===1||jT){if(jO(jY,kb,jX)){return true;}
;}
;}
;}
else {while((jY=jY[jR])){if(jY.nodeType===1||jT){kc=jY[fa]||(jY[fa]={});if((ka=kc[jR])&&ka[0]===eW&&ka[1]===jS){return (kd[2]=ka[2]);}
else {kc[jR]=kd;if((kd[2]=jO(jY,kb,jX))){return true;}
;}
;}
;}
;}
;}
;}
;function eP(ke){return ke.length>1?function(kg,kh,kf){var i=ke.length;while(i-- ){if(!ke[i](kg,kh,kf)){return false;}
;}
;return true;}
:ke[0];}
;function fw(kl,ki,kj){var i=0,kk=ki.length;for(;i<kk;i++ ){fL(kl,ki[i],kj);}
;return kj;}
;function ex(kp,kn,kq,ks,km){var ko,ku=[],i=0,kr=kp.length,kt=kn!=null;for(;i<kr;i++ ){if((ko=kp[i])){if(!kq||kq(ko,ks,km)){ku.push(ko);if(kt){kn.push(i);}
;}
;}
;}
;return ku;}
;function eJ(kz,ky,kx,kw,kv,kA){if(kw&&!kw[fa]){kw=eJ(kw);}
;if(kv&&!kv[fa]){kv=eJ(kv,kA);}
;return fy(function(kJ,kE,kK,kB){var kC,i,kG,kI=[],kM=[],kD=kE.length,kL=kJ||fw(ky||z,kK.nodeType?[kK]:kK,[]),kF=kz&&(kJ||!ky)?ex(kL,kI,kz,kK,kB):kL,kH=kx?kv||(kJ?kz:kD||kw)?[]:kE:kF;if(kx){kx(kF,kH,kK,kB);}
;if(kw){kC=ex(kH,kM);kw(kC,[],kK,kB);i=kC.length;while(i-- ){if((kG=kC[i])){kH[kM[i]]=!(kF[kM[i]]=kG);}
;}
;}
;if(kJ){if(kv||kz){if(kv){kC=[];i=kH.length;while(i-- ){if((kG=kH[i])){kC.push((kF[i]=kG));}
;}
;kv(null,(kH=[]),kC,kB);}
;i=kH.length;while(i-- ){if((kG=kH[i])&&(kC=kv?eS.call(kJ,kG):kI[i])>-1){kJ[kC]=!(kE[kC]=kG);}
;}
;}
;}
else {kH=ex(kH===kE?kH.splice(kD,kH.length):kH);if(kv){kv(null,kE,kH,kB);}
else {fG.apply(kE,kH);}
;}
;}
);}
;function fb(kS){var kN,kP,j,kQ=kS.length,kO=fM.relative[kS[0].type],kV=kO||fM.relative[cV],i=kO?1:0,kU=eO(function(kW){return kW===kN;}
,kV,true),kR=eO(function(kX){return eS.call(kN,kX)>-1;}
,kV,true),kT=[function(la,lb,kY){return (!kO&&(kY||lb!==ep))||((kN=lb).nodeType?kU(la,lb,kY):kR(la,lb,kY));}
];for(;i<kQ;i++ ){if((kP=fM.relative[kS[i].type])){kT=[eO(eP(kT),kP)];}
else {kP=fM.filter[kS[i].type].apply(null,kS[i].matches);if(kP[fa]){j= ++i;for(;j<kQ;j++ ){if(fM.relative[kS[j].type]){break;}
;}
;return eJ(i>1&&eP(kT),i>1&&eQ(kS.slice(0,i-1).concat({value:kS[i-2].type===cV?z:eb})).replace(fp,dN),kP,i<j&&fb(kS.slice(i,j)),j<kQ&&fb((kS=kS.slice(j))),j<kQ&&eQ(kS));}
;kT.push(kP);}
;}
;return eP(kT);}
;function eU(lg,ld){var lc=ld.length>0,le=lg.length>0,lf=function(lp,ls,lh,ll,lk){var ln,j,lt,li=0,i=df,lm=lp&&[],lo=[],lj=ep,lu=lp||le&&fM.find[dF](z,lk),lq=(eW+=lj==null?1:Math.random()||0.1),lr=lu.length;if(lk){ep=ls!==document&&ls;}
;for(;i!==lr&&(ln=lu[i])!=null;i++ ){if(le&&ln){j=0;while((lt=lg[j++ ])){if(lt(ln,ls,lh)){ll.push(ln);break;}
;}
;if(lk){eW=lq;}
;}
;if(lc){if((ln=!lt&&ln)){li-- ;}
;if(lp){lm.push(ln);}
;}
;}
;li+=i;if(lc&&i!==li){j=0;while((lt=ld[j++ ])){lt(lm,lo,ls,lh);}
;if(lp){if(li>0){while(i-- ){if(!(lm[i]||lo[i])){lo[i]=ez.call(ll);}
;}
;}
;lo=ex(lo);}
;fG.apply(ll,lo);if(lk&&!lp&&lo.length>0&&(li+ld.length)>1){fL.uniqueSort(ll);}
;}
;if(lk){eW=lq;ep=lj;}
;return lm;}
;return lc?fy(lf):lf;}
;fC=fL.compile=function(lw,lz){var i,ly=[],lv=[],lx=fI[lw+cV];if(!lx){if(!lz){lz=eV(lw);}
;i=lz.length;while(i-- ){lx=fb(lz[i]);if(lx[fa]){ly.push(lx);}
else {lv.push(lx);}
;}
;lx=fI(lw,eU(lv,ly));lx.selector=lw;}
;return lx;}
;eG=fL.select=function(lC,lG,lB,lF){var i,lD,lE,lH,find,lA=typeof lC===db&&lC,lI=!lF&&eV((lC=lA.selector||lC));lB=lB||[];if(lI.length===1){lD=lI[0]=lI[0].slice(0);if(lD.length>2&&(lE=lD[0]).type===ej&&eM.getById&&lG.nodeType===9&&fq&&fM.relative[lD[1].type]){lG=(fM.find[ej](lE.matches[0].replace(eu,fs),lG)||[])[0];if(!lG){return lB;}
else if(lA){lG=lG.parentNode;}
;lC=lC.slice(lD.shift().value.length);}
;i=fB[P].test(lC)?0:lD.length;while(i-- ){lE=lD[i];if(fM.relative[(lH=lE.type)]){break;}
;if((find=fM.find[lH])){if((lF=find(lE.matches[0].replace(eu,fs),fc.test(lD[0].type)&&eC(lG.parentNode)||lG))){lD.splice(i,1);lC=lF.length&&eQ(lD);if(!lC){fG.apply(lB,lF);return lB;}
;break;}
;}
;}
;}
;(lA||fC(lC,lI))(lF,lG,!fq,lB,fc.test(lC)&&eC(lG.parentNode)||lG);return lB;}
;eM.sortStable=fa.split(eb).sort(eT).join(eb)===fa;eM.detectDuplicates=!!eF;eD();eM.sortDetached=fk(function(lJ){return lJ.compareDocumentPosition(document.createElement(k))&1;}
);if(!fk(function(lK){lK.innerHTML=dD;return lK.firstChild.getAttribute(cJ)===cL;}
)){fo(q,function(lL,name,lM){if(!lM){return lL.getAttribute(name,name.toLowerCase()===cN?1:2);}
;}
);}
;if(!eM.attributes||!fk(function(lN){lN.innerHTML=dy;lN.firstChild.setAttribute(dH,eb);return lN.firstChild.getAttribute(dH)===eb;}
)){fo(dH,function(lO,name,lP){if(!lP&&lO.nodeName.toLowerCase()===l){return lO.defaultValue;}
;}
);}
;if(!fk(function(lQ){return lQ.getAttribute(s)==null;}
)){fo(fd,function(lS,name,lR){var lT;if(!lR){return lS[name]===true?name.toLowerCase():(lT=lS.getAttributeNode(name))&&lT.specified?lT.value:null;}
;}
);}
;qx.bom.Selector.query=function(lV,lU){return fL(lV,lU);}
;qx.bom.Selector.matches=function(lX,lW){return fL(lX,null,null,lW);}
;}
)(window);}
)();
(function(){var a="mshtml",b="function",c="pointerEnabled",d="onhashchange",e="event.help",f="mousewheel",g="event.mousewheel",h="event.touch",j="wheel",k="DOMMouseScroll",l="msPointerEnabled",m="event.hashchange",n="onhelp",o="documentMode",p="qx.bom.client.Event",q="ontouchstart",r="foo",s="event.mspointer";qx.Bootstrap.define(p,{statics:{getTouch:function(){return (q in window);}
,getMsPointer:function(){if(c in window.navigator){return window.navigator.pointerEnabled;}
else if(l in window.navigator){return window.navigator.msPointerEnabled;}
;return false;}
,getHelp:function(){return (n in document);}
,getHashChange:function(){var t=qx.bom.client.Engine.getName();var u=d in window;return (t!==a&&u)||(t===a&&o in document&&document.documentMode>=8&&u);}
,getDispatchEvent:function(){return typeof document.dispatchEvent==b;}
,getCustomEvent:function(){if(!window.CustomEvent){return false;}
;try{new window.CustomEvent(r);return true;}
catch(v){return false;}
;}
,getMouseEvent:function(){if(!window.MouseEvent){return false;}
;try{new window.MouseEvent(r);return true;}
catch(w){return false;}
;}
,getMouseWheel:function(x){if(!x){x=window;}
;var A=[x,x.document,x.document.body];var z=x;var y=k;for(var i=0;i<A.length;i++ ){if(qx.bom.Event.supportsEvent(A[i],j)){y=j;z=A[i];break;}
;if(qx.bom.Event.supportsEvent(A[i],f)){y=f;z=A[i];break;}
;}
;return {type:y,target:z};}
},defer:function(B){qx.core.Environment.add(h,B.getTouch);qx.core.Environment.add(s,B.getMsPointer);qx.core.Environment.add(e,B.getHelp);qx.core.Environment.add(m,B.getHashChange);qx.core.Environment.add(g,B.getMouseWheel);}
});}
)();
(function(){var a="ipod",b="pc",c="ps3",d=")",e="device.type",f="psp",g="wii",h="xbox",i="\.",j="ipad",k="ds",l="(",m="mobile",n="tablet",o="ontouchstart",p="g",q="iphone",r="|",s="qx.bom.client.Device",t="desktop",u="device.name",v="device.touch",w="undefined",x="device.pixelRatio";qx.Bootstrap.define(s,{statics:{__cr:{"iPod":a,"iPad":j,"iPhone":q,"PSP":f,"PLAYSTATION 3":c,"Nintendo Wii":g,"Nintendo DS":k,"XBOX":h,"Xbox":h},getName:function(){var A=[];for(var z in qx.bom.client.Device.__cr){A.push(z);}
;var B=new RegExp(l+A.join(r).replace(/\./g,i)+d,p);var y=B.exec(navigator.userAgent);if(y&&y[1]){return qx.bom.client.Device.__cr[y[1]];}
;return b;}
,getType:function(){return qx.bom.client.Device.detectDeviceType(navigator.userAgent);}
,detectDeviceType:function(C){if(qx.bom.client.Device.detectTabletDevice(C)){return n;}
else if(qx.bom.client.Device.detectMobileDevice(C)){return m;}
;return t;}
,detectMobileDevice:function(D){return /android.+mobile|ip(hone|od)|bada\/|blackberry|BB10|maemo|opera m(ob|in)i|fennec|NetFront|phone|psp|symbian|IEMobile|windows (ce|phone)|xda/i.test(D);}
,detectTabletDevice:function(F){var G=(/MSIE 10/i.test(F))&&(/ARM/i.test(F))&&!(/windows phone/i.test(F));var E=(!(/android.+mobile|Tablet PC/i.test(F))&&(/Android|ipad|tablet|playbook|silk|kindle|psp/i.test(F)));return G||E;}
,getDevicePixelRatio:function(){if(typeof window.devicePixelRatio!==w){return window.devicePixelRatio;}
;return 1;}
,getTouch:function(){return ((o in window)||window.navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0);}
},defer:function(H){qx.core.Environment.add(u,H.getName);qx.core.Environment.add(v,H.getTouch);qx.core.Environment.add(e,H.getType);qx.core.Environment.add(x,H.getDevicePixelRatio);}
});}
)();
(function(){var a="engine.name",b="event.mspointer",c="device.type",d="engine.version",e="qx.module.Environment",f="browser.version",g="event.touch",h="device.name",i="browser.quirksmode",j="browser.name",k="browser.documentmode";qx.Bootstrap.define(e,{statics:{get:function(l){return qx.core.Environment.get(l);}
,add:function(m,n){qx.core.Environment.add(m,n);return this;}
},defer:function(o){qx.core.Environment.get(j);qx.core.Environment.get(f);qx.core.Environment.get(i);qx.core.Environment.get(k);qx.core.Environment.get(a);qx.core.Environment.get(d);qx.core.Environment.get(h);qx.core.Environment.get(c);qx.core.Environment.get(g);qx.core.Environment.get(b);qxWeb.$attachStatic({"env":{get:o.get,add:o.add}});}
});}
)();
(function(){var a="",b="block",c="none",d="hidden",e="absolute",f="qx.module.Css",g="display";qx.Bootstrap.define(f,{statics:{setStyle:function(name,h){if(/\w-\w/.test(name)){name=qx.lang.String.camelCase(name);}
;this._forEachElement(function(j){qx.bom.element.Style.set(j,name,h);}
);return this;}
,getStyle:function(name){if(this[0]&&qx.dom.Node.isElement(this[0])){if(/\w-\w/.test(name)){name=qx.lang.String.camelCase(name);}
;return qx.bom.element.Style.get(this[0],name);}
;return null;}
,setStyles:function(k){for(var name in k){this.setStyle(name,k[name]);}
;return this;}
,getStyles:function(n){var m={};for(var i=0;i<n.length;i++ ){m[n[i]]=this.getStyle(n[i]);}
;return m;}
,addClass:function(name){this._forEachElement(function(o){qx.bom.element.Class.add(o,name);}
);return this;}
,addClasses:function(p){this._forEachElement(function(q){qx.bom.element.Class.addClasses(q,p);}
);return this;}
,removeClass:function(name){this._forEachElement(function(r){qx.bom.element.Class.remove(r,name);}
);return this;}
,removeClasses:function(s){this._forEachElement(function(t){qx.bom.element.Class.removeClasses(t,s);}
);return this;}
,hasClass:function(name){if(!this[0]||!qx.dom.Node.isElement(this[0])){return false;}
;return qx.bom.element.Class.has(this[0],name);}
,getClass:function(){if(!this[0]||!qx.dom.Node.isElement(this[0])){return a;}
;return qx.bom.element.Class.get(this[0]);}
,toggleClass:function(name){var u=qx.bom.element.Class;this._forEachElement(function(v){u.has(v,name)?u.remove(v,name):u.add(v,name);}
);return this;}
,toggleClasses:function(w){for(var i=0,l=w.length;i<l;i++ ){this.toggleClass(w[i]);}
;return this;}
,replaceClass:function(y,x){this._forEachElement(function(z){qx.bom.element.Class.replace(z,y,x);}
);return this;}
,getHeight:function(C){var D=this[0];if(D){if(qx.dom.Node.isElement(D)){var A;if(C){var B={display:b,position:e,visibility:d};A=qx.module.Css.__es(D,B,qx.module.Css.getHeight,this);}
else {A=qx.bom.element.Dimension.getHeight(D);}
;return A;}
else if(qx.dom.Node.isDocument(D)){return qx.bom.Document.getHeight(qx.dom.Node.getWindow(D));}
else if(qx.dom.Node.isWindow(D)){return qx.bom.Viewport.getHeight(D);}
;}
;return null;}
,getWidth:function(G){var H=this[0];if(H){if(qx.dom.Node.isElement(H)){var E;if(G){var F={display:b,position:e,visibility:d};E=qx.module.Css.__es(H,F,qx.module.Css.getWidth,this);}
else {E=qx.bom.element.Dimension.getWidth(H);}
;return E;}
else if(qx.dom.Node.isDocument(H)){return qx.bom.Document.getWidth(qx.dom.Node.getWindow(H));}
else if(qx.dom.Node.isWindow(H)){return qx.bom.Viewport.getWidth(H);}
;}
;return null;}
,getOffset:function(I){var J=this[0];if(J&&qx.dom.Node.isElement(J)){return qx.bom.element.Location.get(J,I);}
;return null;}
,getContentHeight:function(L){var N=this[0];if(qx.dom.Node.isElement(N)){var M;if(L){var K={position:e,visibility:d,display:b};M=qx.module.Css.__es(N,K,qx.module.Css.getContentHeight,this);}
else {M=qx.bom.element.Dimension.getContentHeight(N);}
;return M;}
;return null;}
,getContentWidth:function(Q){var O=this[0];if(qx.dom.Node.isElement(O)){var R;if(Q){var P={position:e,visibility:d,display:b};R=qx.module.Css.__es(O,P,qx.module.Css.getContentWidth,this);}
else {R=qx.bom.element.Dimension.getContentWidth(O);}
;return R;}
;return null;}
,getPosition:function(){var S=this[0];if(qx.dom.Node.isElement(S)){return qx.bom.element.Location.getPosition(S);}
;return null;}
,includeStylesheet:function(U,T){qx.bom.Stylesheet.includeFile(U,T);}
,hide:function(){this._forEachElementWrapped(function(V){var W=V.getStyle(g);if(W!==c){V[0].$$qPrevDisp=W;V.setStyle(g,c);}
;}
);return this;}
,show:function(){this._forEachElementWrapped(function(ba){var bb=ba.getStyle(g);var Y=ba[0].$$qPrevDisp;var X;if(bb==c){if(Y&&Y!=c){X=Y;}
else {var bc=qxWeb.getDocument(ba[0]);X=qx.module.Css.__er(ba[0].tagName,bc);}
;ba.setStyle(g,X);ba[0].$$qPrevDisp=c;}
;}
);return this;}
,__eq:{},__er:function(bg,bd){var bf=qx.module.Css.__eq;if(!bf[bg]){var bh=bd||document;var be=qxWeb(bh.createElement(bg)).appendTo(bd.body);bf[bg]=be.getStyle(g);be.remove();}
;return bf[bg]||a;}
,__es:function(bk,bi,bl,bo){var bm={};for(var bn in bi){bm[bn]=bk.style[bn];bk.style[bn]=bi[bn];}
;var bj=bl.call(bo);for(var bn in bm){bk.style[bn]=bm[bn];}
;return bj;}
},defer:function(bp){qxWeb.$attach({"setStyle":bp.setStyle,"getStyle":bp.getStyle,"setStyles":bp.setStyles,"getStyles":bp.getStyles,"addClass":bp.addClass,"addClasses":bp.addClasses,"removeClass":bp.removeClass,"removeClasses":bp.removeClasses,"hasClass":bp.hasClass,"getClass":bp.getClass,"toggleClass":bp.toggleClass,"toggleClasses":bp.toggleClasses,"replaceClass":bp.replaceClass,"getHeight":bp.getHeight,"getWidth":bp.getWidth,"getOffset":bp.getOffset,"getContentHeight":bp.getContentHeight,"getContentWidth":bp.getContentWidth,"getPosition":bp.getPosition,"hide":bp.hide,"show":bp.show});qxWeb.$attachStatic({"includeStylesheet":bp.includeStylesheet});}
});}
)();
(function(){var a='',b="(^|\\s)",c=" is undefined",d='function',e="(\\s|$)",f="",g="\\b|\\b",h="qx.debug",j="qx.bom.element.Class",k=" cannot be determined",m='SVGAnimatedString',n="html.classlist",o="default",p=" ",q='object',r="className for element ",s="g",t="$2",u="native",v="\\b",w='undefined';qx.Bootstrap.define(j,{statics:{__eE:/\s+/g,__eF:/^\s+|\s+$/g,add:{"native":function(x,name){x.classList.add(name);return name;}
,"default":function(y,name){if(!this.has(y,name)){y.className+=(y.className?p:f)+name;}
;return name;}
}[qx.core.Environment.get(n)?u:o],addClasses:{"native":function(A,z){for(var i=0;i<z.length;i++ ){A.classList.add(z[i]);}
;return A.className;}
,"default":function(C,E){var D={};var F;var B=C.className;if(B){F=B.split(this.__eE);for(var i=0,l=F.length;i<l;i++ ){D[F[i]]=true;}
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
,"default":function(S,Q){var R=new RegExp(v+Q.join(g)+v,s);return S.className=S.className.replace(R,f).replace(this.__eF,f).replace(this.__eE,p);}
}[qx.core.Environment.get(n)?u:o],replace:function(V,U,T){if(!this.has(V,U)){return f;}
;this.remove(V,U);return this.add(V,T);}
,toggle:{"native":function(X,name,W){if(W===undefined){X.classList.toggle(name);}
else {W?this.add(X,name):this.remove(X,name);}
;return name;}
,"default":function(ba,name,Y){if(Y==null){Y=!this.has(ba,name);}
;Y?this.add(ba,name):this.remove(ba,name);return name;}
}[qx.core.Environment.get(n)?u:o]}});}
)();
(function(){var a="borderBottomWidth",b="scroll",c="qx.bom.element.Location",d="engine.version",e="paddingLeft",f="borderRightWidth",g="auto",h="static",i="borderTopWidth",j="borderLeftWidth",k="marginBottom",l="marginTop",m="overflowY",n="marginLeft",o="border-box",p="padding",q="paddingBottom",r="paddingTop",s="gecko",t="marginRight",u="browser.quirksmode",v="mshtml",w="engine.name",x="position",y="margin",z="paddingRight",A="BODY",B="overflowX",C="border",D="browser.documentmode";qx.Bootstrap.define(c,{statics:{__eH:function(F,E){return qx.bom.element.Style.get(F,E,qx.bom.element.Style.COMPUTED_MODE,false);}
,__eI:function(H,G){return parseInt(qx.bom.element.Style.get(H,G,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;}
,__eJ:function(J){var K=0,top=0;var I=qx.dom.Node.getWindow(J);K-=qx.bom.Viewport.getScrollLeft(I);top-=qx.bom.Viewport.getScrollTop(I);return {left:K,top:top};}
,__eK:qx.core.Environment.select(w,{"mshtml":function(N){var M=qx.dom.Node.getDocument(N);var L=M.body;var O=0;var top=0;O-=L.clientLeft+M.documentElement.clientLeft;top-=L.clientTop+M.documentElement.clientTop;if(!qx.core.Environment.get(u)){O+=this.__eI(L,j);top+=this.__eI(L,i);}
;return {left:O,top:top};}
,"webkit":function(R){var Q=qx.dom.Node.getDocument(R);var P=Q.body;var S=P.offsetLeft;var top=P.offsetTop;if(parseFloat(qx.core.Environment.get(d))<530.17){S+=this.__eI(P,j);top+=this.__eI(P,i);}
;return {left:S,top:top};}
,"gecko":function(U){var T=qx.dom.Node.getDocument(U).body;var V=T.offsetLeft;var top=T.offsetTop;if(parseFloat(qx.core.Environment.get(d))<1.9){V+=this.__eI(T,n);top+=this.__eI(T,l);}
;if(qx.bom.element.BoxSizing.get(T)!==o){V+=this.__eI(T,j);top+=this.__eI(T,i);}
;return {left:V,top:top};}
,"default":function(X){var W=qx.dom.Node.getDocument(X).body;var Y=W.offsetLeft;var top=W.offsetTop;return {left:Y,top:top};}
}),__eL:function(ba){var bb=ba.getBoundingClientRect();return {left:Math.round(bb.left),top:Math.round(bb.top)};}
,get:function(bg,bh){if(bg.tagName==A){var location=this.__eM(bg);var bk=location.left;var top=location.top;}
else {var bc=this.__eK(bg);var bf=this.__eL(bg);var scroll=this.__eJ(bg);var bk=bf.left+bc.left-scroll.left;var top=bf.top+bc.top-scroll.top;}
;var bd=bk+bg.offsetWidth;var be=top+bg.offsetHeight;if(bh){if(bh==p||bh==b){var bj=qx.bom.element.Style.get(bg,B);if(bj==b||bj==g){bd+=bg.scrollWidth-bg.offsetWidth+this.__eI(bg,j)+this.__eI(bg,f);}
;var bi=qx.bom.element.Style.get(bg,m);if(bi==b||bi==g){be+=bg.scrollHeight-bg.offsetHeight+this.__eI(bg,i)+this.__eI(bg,a);}
;}
;switch(bh){case p:bk+=this.__eI(bg,e);top+=this.__eI(bg,r);bd-=this.__eI(bg,z);be-=this.__eI(bg,q);case b:bk-=bg.scrollLeft;top-=bg.scrollTop;bd-=bg.scrollLeft;be-=bg.scrollTop;case C:bk+=this.__eI(bg,j);top+=this.__eI(bg,i);bd-=this.__eI(bg,f);be-=this.__eI(bg,a);break;case y:bk-=this.__eI(bg,n);top-=this.__eI(bg,l);bd+=this.__eI(bg,t);be+=this.__eI(bg,k);break;};}
;return {left:bk,top:top,right:bd,bottom:be};}
,__eM:function(bl){var top=bl.offsetTop;var bm=bl.offsetLeft;if(qx.core.Environment.get(w)!==v||!((parseFloat(qx.core.Environment.get(d))<8||qx.core.Environment.get(D)<8)&&!qx.core.Environment.get(u))){top+=this.__eI(bl,l);bm+=this.__eI(bl,n);}
;if(qx.core.Environment.get(w)===s){top+=this.__eI(bl,j);bm+=this.__eI(bl,i);}
;return {left:bm,top:top};}
,getLeft:function(bn,bo){return this.get(bn,bo).left;}
,getTop:function(bp,bq){return this.get(bp,bq).top;}
,getRight:function(br,bs){return this.get(br,bs).right;}
,getBottom:function(bt,bu){return this.get(bt,bu).bottom;}
,getRelative:function(by,bx,bw,bv){var bA=this.get(by,bw);var bz=this.get(bx,bv);return {left:bA.left-bz.left,top:bA.top-bz.top,right:bA.right-bz.right,bottom:bA.bottom-bz.bottom};}
,getPosition:function(bB){return this.getRelative(bB,this.getOffsetParent(bB));}
,getOffsetParent:function(bE){var bD=bE.offsetParent||document.body;var bC=qx.bom.element.Style;while(bD&&(!/^body|html$/i.test(bD.tagName)&&bC.get(bD,x)===h)){bD=bD.offsetParent;}
;return bD;}
}});}
)();
(function(){var a="qx.module.Polyfill";qx.Bootstrap.define(a,{});}
)();
(function(){var a="mshtml",b="engine.name",c="*",d="pointerout",e="pointerover",f="load",g="left",h="qx.module.Event",n="undefined",o="DOMContentLoaded",p="browser.documentmode",q="complete";qx.Bootstrap.define(h,{statics:{__cO:{},__cP:{on:{},off:{}},on:function(B,z,A,s){for(var i=0;i<this.length;i++ ){var r=this[i];var v=A||qxWeb(r);var u=qx.module.Event.__cP.on;var t=u[c]||[];if(u[B]){t=t.concat(u[B]);}
;for(var j=0,m=t.length;j<m;j++ ){t[j](r,B,z,A);}
;var w=function(event){var E=qx.module.Event.__cO;var D=E[c]||[];if(E[B]){D=D.concat(E[B]);}
;for(var x=0,y=D.length;x<y;x++ ){event=D[x](event,r,B);}
;z.apply(this,[event]);}
.bind(v);w.original=z;if(qx.bom.Event.supportsEvent(r,B)){qx.bom.Event.addNativeListener(r,B,w,s);}
;if(!r.$$emitter){r.$$emitter=new qx.event.Emitter();}
;var C=r.$$emitter.on(B,w,v);if(!r.__cQ){r.__cQ={};}
;if(!r.__cQ[B]){r.__cQ[B]={};}
;r.__cQ[B][C]=w;if(!A){if(!r.__cR){r.__cR={};}
;r.__cR[C]=v;}
;}
;return this;}
,off:function(P,H,M,G){var L=(H===null&&M===null);for(var j=0;j<this.length;j++ ){var F=this[j];if(!F.__cQ){continue;}
;var R=[];if(P!==null){R.push(P);}
else {for(var J in F.__cQ){R.push(J);}
;}
;for(var i=0,l=R.length;i<l;i++ ){for(var K in F.__cQ[R[i]]){var O=F.__cQ[R[i]][K];if(L||O==H||O.original==H){var I=typeof F.__cR!==n&&F.__cR[K];var S;if(!M&&I){S=F.__cR[K];}
;F.$$emitter.off(R[i],O,S||M);if(L||O.original==H){qx.bom.Event.removeNativeListener(F,R[i],O,G);}
;delete F.__cQ[R[i]][K];if(I){delete F.__cR[K];}
;}
;}
;var N=qx.module.Event.__cP.off;var Q=N[c]||[];if(N[P]){Q=Q.concat(N[P]);}
;for(var k=0,m=Q.length;k<m;k++ ){Q[k](F,P,H,M);}
;}
;}
;return this;}
,allOff:function(T){return this.off(T||null,null,null);}
,emit:function(U,V){for(var j=0;j<this.length;j++ ){var W=this[j];if(W.$$emitter){W.$$emitter.emit(U,V);}
;}
;return this;}
,once:function(Y,X,bb){var self=this;var ba=function(bc){self.off(Y,ba,bb);X.call(this,bc);}
;this.on(Y,ba,bb);return this;}
,hasListener:function(bg,be,bf){if(!this[0]||!this[0].$$emitter||!this[0].$$emitter.getListeners()[bg]){return false;}
;if(be){var bh=this[0].$$emitter.getListeners()[bg];for(var i=0;i<bh.length;i++ ){var bd=false;if(bh[i].listener==be){bd=true;}
;if(bh[i].listener.original&&bh[i].listener.original==be){bd=true;}
;if(bd){if(bf!==undefined){if(bh[i].ctx===bf){return true;}
;}
else {return true;}
;}
;}
;return false;}
;return this[0].$$emitter.getListeners()[bg].length>0;}
,copyEventsTo:function(bo){var bm=this.concat();var bn=bo.concat();for(var i=bm.length-1;i>=0;i-- ){var bj=bm[i].getElementsByTagName(c);for(var j=0;j<bj.length;j++ ){bm.push(bj[j]);}
;}
;for(var i=bn.length-1;i>=0;i-- ){var bj=bn[i].getElementsByTagName(c);for(var j=0;j<bj.length;j++ ){bn.push(bj[j]);}
;}
;bn.forEach(function(bp){bp.$$emitter=null;}
);for(var i=0;i<bm.length;i++ ){var bi=bm[i];if(!bi.$$emitter){continue;}
;var bk=bi.$$emitter.getListeners();for(var name in bk){for(var j=bk[name].length-1;j>=0;j-- ){var bl=bk[name][j].listener;if(bl.original){bl=bl.original;}
;qxWeb(bn[i]).on(name,bl,bk[name][j].ctx);}
;}
;}
;}
,__cS:false,ready:function(bq){if(document.readyState===q){window.setTimeout(bq,1);return;}
;var br=function(){qx.module.Event.__cS=true;bq();}
;qxWeb(window).on(f,br);var bs=function(){qxWeb(window).off(f,br);bq();}
;if(qxWeb.env.get(b)!==a||qxWeb.env.get(p)>8){qx.bom.Event.addNativeListener(document,o,bs);}
else {var bt=function(){if(qx.module.Event.__cS){return;}
;try{document.documentElement.doScroll(g);if(document.body){bs();}
;}
catch(bu){window.setTimeout(bt,100);}
;}
;bt();}
;}
,hover:function(bv,bw){this.on(e,bv,this);if(qx.lang.Type.isFunction(bw)){this.on(d,bw,this);}
;return this;}
,$registerNormalization:function(bA,bx){if(!qx.lang.Type.isArray(bA)){bA=[bA];}
;var by=qx.module.Event.__cO;for(var i=0,l=bA.length;i<l;i++ ){var bz=bA[i];if(qx.lang.Type.isFunction(bx)){if(!by[bz]){by[bz]=[];}
;by[bz].push(bx);}
;}
;}
,$unregisterNormalization:function(bE,bB){if(!qx.lang.Type.isArray(bE)){bE=[bE];}
;var bC=qx.module.Event.__cO;for(var i=0,l=bE.length;i<l;i++ ){var bD=bE[i];if(bC[bD]){qx.lang.Array.remove(bC[bD],bB);}
;}
;}
,$getRegistry:function(){return qx.module.Event.__cO;}
,$registerEventHook:function(bK,bH,bG){if(!qx.lang.Type.isArray(bK)){bK=[bK];}
;var bI=qx.module.Event.__cP.on;for(var i=0,l=bK.length;i<l;i++ ){var bJ=bK[i];if(qx.lang.Type.isFunction(bH)){if(!bI[bJ]){bI[bJ]=[];}
;bI[bJ].push(bH);}
;}
;if(!bG){return;}
;var bF=qx.module.Event.__cP.off;for(var i=0,l=bK.length;i<l;i++ ){var bJ=bK[i];if(qx.lang.Type.isFunction(bG)){if(!bF[bJ]){bF[bJ]=[];}
;bF[bJ].push(bG);}
;}
;}
,$unregisterEventHook:function(bQ,bN,bM){if(!qx.lang.Type.isArray(bQ)){bQ=[bQ];}
;var bO=qx.module.Event.__cP.on;for(var i=0,l=bQ.length;i<l;i++ ){var bP=bQ[i];if(bO[bP]){qx.lang.Array.remove(bO[bP],bN);}
;}
;if(!bM){return;}
;var bL=qx.module.Event.__cP.off;for(var i=0,l=bQ.length;i<l;i++ ){var bP=bQ[i];if(bL[bP]){qx.lang.Array.remove(bL[bP],bM);}
;}
;}
,$getHookRegistry:function(){return qx.module.Event.__cP;}
},defer:function(bR){qxWeb.$attach({"on":bR.on,"off":bR.off,"allOff":bR.allOff,"once":bR.once,"emit":bR.emit,"hasListener":bR.hasListener,"copyEventsTo":bR.copyEventsTo,"hover":bR.hover});qxWeb.$attachStatic({"ready":bR.ready,"$registerEventNormalization":bR.$registerNormalization,"$unregisterEventNormalization":bR.$unregisterNormalization,"$getEventNormalizationRegistry":bR.$getRegistry,"$registerEventHook":bR.$registerEventHook,"$unregisterEventHook":bR.$unregisterEventHook,"$getEventHookRegistry":bR.$getHookRegistry});}
});}
)();
(function(){var a="qx.module.event.PointerHandler",b="pointerup",c="event.dispatchevent",d="gesturemove",e="pointerover",f="gesturebegin",g="pointerdown",h="on",i="pointermove",j="gesturefinish",k="gesturecancel",l="pointercancel",m="pointerout";qx.Bootstrap.define(a,{statics:{TYPES:[i,e,m,g,b,l,f,d,j,k],register:function(o,n){if(!o[h+n]){o[h+n]=true;}
;if(!o.__cT){o.__cT=0;}
;if(!o.$$pointerHandler){if(!qx.core.Environment.get(c)){if(!o.$$emitter){o.$$emitter=new qx.event.Emitter();}
;}
;o.$$pointerHandler=new qx.event.handler.PointerCore(o,o.$$emitter);}
;o.__cT++ ;}
,unregister:function(p){if(p.$$pointerHandler){p.__cT-- ;if(p.__cT===0){p.$$pointerHandler.dispose();p.$$pointerHandler=null;}
;}
;}
},defer:function(q){qxWeb.$registerEventHook(q.TYPES,q.register,q.unregister);}
});}
)();
(function(){var a="qx.event.Emitter",b="*";qx.Bootstrap.define(a,{extend:Object,statics:{__cU:[]},members:{__cQ:null,__cV:null,on:function(name,c,d){var e=qx.event.Emitter.__cU.length;this.__cW(name).push({listener:c,ctx:d,id:e});qx.event.Emitter.__cU.push({name:name,listener:c,ctx:d});return e;}
,once:function(name,f,g){var h=qx.event.Emitter.__cU.length;this.__cW(name).push({listener:f,ctx:g,once:true,id:h});qx.event.Emitter.__cU.push({name:name,listener:f,ctx:g});return h;}
,off:function(name,l,j){var k=this.__cW(name);for(var i=k.length-1;i>=0;i-- ){var m=k[i];if(m.listener==l&&m.ctx==j){k.splice(i,1);qx.event.Emitter.__cU[m.id]=null;return m.id;}
;}
;return null;}
,offById:function(o){var n=qx.event.Emitter.__cU[o];if(n){this.off(n.name,n.listener,n.ctx);}
;return null;}
,addListener:function(name,p,q){return this.on(name,p,q);}
,addListenerOnce:function(name,r,s){return this.once(name,r,s);}
,removeListener:function(name,t,u){this.off(name,t,u);}
,removeListenerById:function(v){this.offById(v);}
,emit:function(name,y){var x=this.__cW(name);for(var i=0;i<x.length;i++ ){var w=x[i];w.listener.call(w.ctx,y);if(w.once){x.splice(i,1);i-- ;}
;}
;x=this.__cW(b);for(var i=x.length-1;i>=0;i-- ){var w=x[i];w.listener.call(w.ctx,y);}
;}
,getListeners:function(){return this.__cQ;}
,__cW:function(name){if(this.__cQ==null){this.__cQ={};}
;if(this.__cQ[name]==null){this.__cQ[name]=[];}
;return this.__cQ[name];}
}});}
)();
(function(){var a="touchmove",b="mousedown",c="event.dispatchevent",d="MSPointerDown",e="gesturemove",f="pointerover",g="touch",h="mouseout",j="pointercancel",k="pointerleave",m="touchstart",n="pointerenter",o="mouse",p="event.mspointer",q="mousemove",r="MSPointerCancel",s="gesturefinish",t="browser.documentmode",u="pointerup",v="touchend",w="mouseover",z="pointerdown",A="MSPointerUp",B="device.touch",C="MSPointerOver",D="mshtml",E="engine.name",F="mouseup",G="touchcancel",H="contextmenu",I="gesturecancel",J="MSPointerMove",K="MSPointerOut",L="gesturebegin",M="qx.event.handler.PointerCore",N="pointermove",O="pointerout";qx.Bootstrap.define(M,{extend:Object,statics:{MOUSE_TO_POINTER_MAPPING:{mousedown:z,mouseup:u,mousemove:N,mouseout:O,mouseover:f},TOUCH_TO_POINTER_MAPPING:{touchstart:z,touchend:u,touchmove:N,touchcancel:j},MSPOINTER_TO_POINTER_MAPPING:{MSPointerDown:z,MSPointerMove:N,MSPointerUp:u,MSPointerCancel:j,MSPointerLeave:k,MSPointerEnter:n,MSPointerOver:f,MSPointerOut:O},POINTER_TO_GESTURE_MAPPING:{pointerdown:L,pointerup:s,pointercancel:I,pointermove:e},SIM_MOUSE_DISTANCE:25,SIM_MOUSE_DELAY:2500,__cX:null},construct:function(R,S){this.__cY=R;this.__da=S;this.__db=[];this.__dc=[];var Q=qx.core.Environment.get(E);var P=parseInt(qx.core.Environment.get(t),10);if(Q==D&&P==10){this.__db=[d,J,A,r,C,K];this._initPointerObserver();}
else {if(qx.core.Environment.get(p)){this.__dd=true;}
;this.__db=[z,N,u,j,f,O];this._initPointerObserver();}
;if(!qx.core.Environment.get(p)){if(qx.core.Environment.get(B)){this.__db=[m,v,a,G];this._initObserver(this._onTouchEvent);}
;this.__db=[b,F,q,w,h,H];this._initObserver(this._onMouseEvent);}
;}
,members:{__cY:null,__da:null,__db:null,__dd:false,__de:null,__df:0,__dc:null,__dg:null,_initPointerObserver:function(){this._initObserver(this._onPointerEvent);}
,_initObserver:function(T,U){this.__de=qx.lang.Function.listener(T,this);this.__db.forEach(function(V){if(U&&qx.dom.Node.isDocument(this.__cY)){if(!this.__cY.$$emitter){this.__cY.$$emitter=new qx.event.Emitter();}
;this.__cY.$$emitter.on(V,this.__de);}
else {qx.bom.Event.addNativeListener(this.__cY,V,this.__de);}
;}
.bind(this));}
,_onPointerEvent:function(Y){if(!qx.core.Environment.get(p)){return;}
;if(!this.__dd){Y.stopPropagation();}
;var W=qx.event.handler.PointerCore.MSPOINTER_TO_POINTER_MAPPING[Y.type]||Y.type;var ba=qx.bom.Event.getTarget(Y);var X=new qx.event.type.dom.Pointer(W,Y);this._fireEvent(X,W,ba);}
,_onTouchEvent:function(bd){var be=qx.event.handler.PointerCore.TOUCH_TO_POINTER_MAPPING[bd.type];var bf=bd.changedTouches;bd.stopPropagation();if(bd.type==m&&this.__dg===null){this.__dg=bf[0].identifier;}
;for(var i=0,l=bf.length;i<l;i++ ){var bg=bf[i];var bc={clientX:bg.clientX,clientY:bg.clientY,pageX:bg.pageX,pageY:bg.pageY,identifier:bg.identifier,screenX:bg.screenX,screenY:bg.screenY,target:document.elementFromPoint(bg.clientX,bg.clientY),pointerType:g,pointerId:bg.identifier+2};if(bd.type==m){var bb=new qx.event.type.dom.Pointer(f,bd,bc);this._fireEvent(bb,f,bc.target);}
;var bh=new qx.event.type.dom.Pointer(be,bd,bc);if(bg.identifier==this.__dg){bh.isPrimary=true;bh.button=0;bh.buttons=1;qx.event.handler.PointerCore.__cX={"x":bg.clientX,"y":bg.clientY,"time":new Date().getTime()};}
;this._fireEvent(bh,be,bc.target);if(bd.type==v||bd.type==G){var bi=new qx.event.type.dom.Pointer(O,bd,bc);this._fireEvent(bi,O,bd.target);if(this.__dg==bg.identifier){this.__dg=null;}
;}
;}
;}
,_onMouseEvent:function(bj){qx.bom.Event.stopPropagation(bj);if(this._isSimulatedMouseEvent(bj.clientX,bj.clientY)){return;}
;if(bj.type==b){this.__dc[bj.which]=1;}
else if(bj.type==F){this.__dc[bj.which]=0;}
;var bl=qx.event.handler.PointerCore.MOUSE_TO_POINTER_MAPPING[bj.type];var bk=qx.bom.Event.getTarget(bj);var bm=qx.lang.Array.sum(this.__dc);var bp={pointerType:o,pointerId:1};if(this.__df!=bm&&bm!==0&&this.__df!==0){var bn=new qx.event.type.dom.Pointer(N,bj,bp);this._fireEvent(bn,N,bk);}
;this.__df=bm;if(bj.type==b&&bm>1){return;}
;if(bj.type==F&&bm>0){return;}
;if(bj.type==H){this.__dc[bj.which]=0;return;}
;var bo=new qx.event.type.dom.Pointer(bl,bj,bp);this._fireEvent(bo,bl,bk);}
,_isSimulatedMouseEvent:function(x,y){var br=qx.event.handler.PointerCore.__cX;if(br){var bs=new Date().getTime()-br.time;var bq=qx.event.handler.PointerCore.SIM_MOUSE_DISTANCE;var bu=Math.abs(x-qx.event.handler.PointerCore.__cX.x);var bt=Math.abs(y-qx.event.handler.PointerCore.__cX.y);if(bs<qx.event.handler.PointerCore.SIM_MOUSE_DELAY){if(bu<bq||bt<bq){return true;}
;}
;}
;return false;}
,_stopObserver:function(){for(var i=0;i<this.__db.length;i++ ){qx.bom.Event.removeNativeListener(this.__cY,this.__db[i],this.__de);}
;}
,_fireEvent:function(bw,bv,bx){bx=bx||bw.target;bv=bv||bw.type;var by;if(bv==z||bv==u||bv==N){by=new qx.event.type.dom.Pointer(qx.event.handler.PointerCore.POINTER_TO_GESTURE_MAPPING[bv],bw);qx.event.type.dom.Pointer.normalize(by);by.srcElement=bx;}
;if(qx.core.Environment.get(c)){if(!this.__dd){bx.dispatchEvent(bw);}
;if(by){bx.dispatchEvent(by);}
;}
else {bw.srcElement=bx;while(bx){if(bx.$$emitter){bw.currentTarget=bx;if(!bw._stopped){bx.$$emitter.emit(bv,bw);}
;if(by&&!by._stopped){by.currentTarget=bx;bx.$$emitter.emit(by.type,by);}
;}
;bx=bx.parentNode;}
;}
;}
,dispose:function(){this._stopObserver();this.__cY=this.__da=null;}
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
,_initEvent:function(k,m){var l=qx.lang.Object.clone(qx.event.type.dom.Custom.PROPERTIES);for(var n in m){l[n]=m[n];}
;if(this._event.initEvent){this._event.initEvent(this._type,l.bubbles,l.cancelable);}
;for(var n in l){this._event[n]=l[n];}
;}
}});}
)();
(function(){var a="bubbles",b="event.mouseevent",c="getScreenLeft",d="getPointerType",e="touch",f="ctrlKey",g="altKey",h="view",j="button",k="string",m="relatedTarget",n="mouse",o="clientX",p="qx.event.type.dom.Pointer",q="UIEvents",r="pageY",s="cancelable",t="screenX",u="shiftKey",v="",w="number",x="detail",y="toElement",z="fromElement",A="getViewportLeft",B="function",C="clientY",D="getViewportTop",E="screenY",F="getScreenTop",G="pen",H="metaKey",I="pageX",J="object",K="getDocumentTop",L="which",M="getDocumentLeft";qx.Bootstrap.define(p,{extend:qx.event.type.dom.Custom,statics:{MOUSE_PROPERTIES:[a,s,h,x,t,E,o,C,I,r,f,g,u,H,j,L,m,z,y],POINTER_PROPERTIES:{pointerId:1,width:0,height:0,pressure:0.5,tiltX:0,tiltY:0,pointerType:v,isPrimary:false},BIND_METHODS:[d,A,D,M,K,c,F],getPointerType:function(){if(typeof this.pointerType==k){return this.pointerType;}
;if(typeof this.pointerType==w){if(this.pointerType==this.MSPOINTER_TYPE_MOUSE){return n;}
;if(this.pointerType==this.MSPOINTER_TYPE_PEN){return G;}
;if(this.pointerType==this.MSPOINTER_TYPE_TOUCH){return e;}
;}
;return v;}
,getViewportLeft:function(){return this.clientX;}
,getViewportTop:function(){return this.clientY;}
,getDocumentLeft:function(){if(this.pageX!==undefined){return this.pageX;}
else {var N=qx.dom.Node.getWindow(this.srcElement);return this.clientX+qx.bom.Viewport.getScrollLeft(N);}
;}
,getDocumentTop:function(){if(this.pageY!==undefined){return this.pageY;}
else {var O=qx.dom.Node.getWindow(this.srcElement);return this.clientY+qx.bom.Viewport.getScrollTop(O);}
;}
,getScreenLeft:function(){return this.screenX;}
,getScreenTop:function(){return this.screenY;}
,normalize:function(event){var P=qx.event.type.dom.Pointer.BIND_METHODS;for(var i=0,l=P.length;i<l;i++ ){if(typeof event[P[i]]!=B){event[P[i]]=qx.event.type.dom.Pointer[P[i]].bind(event);}
;}
;}
},construct:function(Q,R,S){return qx.event.type.dom.Custom.call(this,Q,R,S);}
,members:{_createEvent:function(){var T;if(qx.core.Environment.get(b)){T=new window.MouseEvent(this._type);}
else if(typeof document.createEvent==B){T=document.createEvent(q);}
else if(typeof document.createEventObject==J){T={};T.type=this._type;}
;return T;}
,_initEvent:function(V,W){var bc=this._event;qx.event.type.dom.Pointer.normalize(V);var bd={};var bb=qx.event.type.dom.Pointer.MOUSE_PROPERTIES;for(var i=0;i<bb.length;i++ ){var ba=bb[i];if(ba in V){bd[ba]=V[ba];}
;if(W&&W[ba]!==undefined){bd[ba]=W[ba];}
;}
;for(var U in qx.event.type.dom.Pointer.POINTER_PROPERTIES){bd[U]=qx.event.type.dom.Pointer.POINTER_PROPERTIES[U];if(U in V){bd[U]=V[U];}
;if(W&&W[U]!==undefined){bd[U]=W[U];}
;}
;var Y;switch(V.which){case 1:Y=1;break;case 2:Y=4;break;case 3:Y=2;break;default:Y=0;};if(Y){bd.buttons=Y;bd.pressure=Y?0.5:0;}
;if(V.pressure){bd.pressure=V.pressure;}
;if(bc.initMouseEvent){bc.initMouseEvent(this._type,bd.bubbles,bd.cancelable,bd.view,bd.detail,bd.screenX,bd.screenY,bd.clientX,bd.clientY,bd.ctrlKey,bd.altKey,bd.shiftKey,bd.metaKey,bd.button,bd.relatedTarget);}
else if(bc.initUIEvent){bc.initUIEvent(this._type,bd.bubbles,bd.cancelable,bd.view,bd.detail);}
;for(var X in bd){bc[X]=bd[X];}
;switch(bc.pointerType){case V.MSPOINTER_TYPE_MOUSE:bc.pointerType=n;break;case V.MSPOINTER_TYPE_PEN:bc.pointerType=G;break;case V.MSPOINTER_TYPE_TOUCH:bc.pointerType=e;break;};if(bc.pointerType==n){bc.isPrimary=true;}
;}
}});}
)();
(function(){var a="start",b="animationEnd",c="",d="none",e="browser.name",f="browser.version",g="qx.module.Animation",h="animationIteration",j="end",k="animationStart",l="ease-in",m="iteration",n="ease-out",o="ie",p="display";qx.Bootstrap.define(g,{events:{"animationStart":undefined,"animationIteration":undefined,"animationEnd":undefined},statics:{getAnimationHandles:function(){var q=[];for(var i=0;i<this.length;i++ ){q[i]=this[i].$$animation;}
;return q;}
,_fadeOut:{duration:700,timing:n,keep:100,keyFrames:{'0':{opacity:1},'100':{opacity:0,display:d}}},_fadeIn:{duration:700,timing:l,keep:100,keyFrames:{'0':{opacity:0},'100':{opacity:1}}},animate:function(s,r){qx.module.Animation._animate.bind(this)(s,r,false);return this;}
,animateReverse:function(u,t){qx.module.Animation._animate.bind(this)(u,t,true);return this;}
,_animate:function(x,v,w){this._forEachElement(function(y,i){if(y.$$animation){y.$$animation.stop();}
;var z;if(w){z=qx.bom.element.Animation.animateReverse(y,x,v);}
else {z=qx.bom.element.Animation.animate(y,x,v);}
;var self=this;if(i==0){z.on(a,function(){self.emit(k);}
,z);z.on(m,function(){self.emit(h);}
,z);}
;z.on(j,function(){for(var i=0;i<self.length;i++ ){if(self[i].$$animation){return;}
;}
;self.emit(b);}
,y);}
);}
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
},defer:function(H){qxWeb.$attach({"animate":H.animate,"animateReverse":H.animateReverse,"fadeIn":H.fadeIn,"fadeOut":H.fadeOut,"play":H.play,"pause":H.pause,"stop":H.stop,"isEnded":H.isEnded,"isPlaying":H.isPlaying,"getAnimationHandles":H.getAnimationHandles});if(qxWeb.env.get(e)===o&&qxWeb.env.get(f)<=9){H._fadeIn.keyFrames[100].opacity=0.99;}
;}
});}
)();
(function(){var a="css.animation",b="translate",c="rotate",d="skew",e="scale",f="qx.bom.element.Animation";qx.Bootstrap.define(f,{statics:{animate:function(h,k,g){var j=qx.bom.element.Animation.__eN(h,k.keyFrames);if(qx.core.Environment.get(a)&&j){return qx.bom.element.AnimationCss.animate(h,k,g);}
else {return qx.bom.element.AnimationJs.animate(h,k,g);}
;}
,animateReverse:function(m,o,l){var n=qx.bom.element.Animation.__eN(m,o.keyFrames);if(qx.core.Environment.get(a)&&n){return qx.bom.element.AnimationCss.animateReverse(m,o,l);}
else {return qx.bom.element.AnimationJs.animateReverse(m,o,l);}
;}
,__eN:function(p,t){var r=[];for(var v in t){var s=t[v];for(var u in s){if(r.indexOf(u)==-1){r.push(u);}
;}
;}
;var q=[e,c,d,b];for(var i=0;i<r.length;i++ ){var u=qx.lang.String.camelCase(r[i]);if(!(u in p.style)){if(q.indexOf(r[i])!=-1){continue;}
;if(qx.bom.Style.getPropertyName(u)){continue;}
;return false;}
;}
;return true;}
}});}
)();
(function(){var a="oAnimationStart",b="animationend",c="MSAnimationStart",d="oRequestAnimationFrame",f="AnimationFillMode",g="MSAnimationEnd",h="requestAnimationFrame",j="mozRequestAnimationFrame",k="webkitAnimationEnd",l="css.animation.requestframe",m="AnimationPlayState",n="",o="MSAnimationIteration",p="animation",q="oAnimationEnd",r="@",s="animationiteration",t="webkitRequestAnimationFrame",u=" name",v="qx.bom.client.CssAnimation",w="css.animation",x="oAnimationIteration",y="webkitAnimationIteration",z="-keyframes",A="msRequestAnimationFrame",B="@keyframes",C="animationstart",D="webkitAnimationStart";qx.Bootstrap.define(v,{statics:{getSupport:function(){var name=qx.bom.client.CssAnimation.getName();if(name!=null){return {"name":name,"play-state":qx.bom.client.CssAnimation.getPlayState(),"start-event":qx.bom.client.CssAnimation.getAnimationStart(),"iteration-event":qx.bom.client.CssAnimation.getAnimationIteration(),"end-event":qx.bom.client.CssAnimation.getAnimationEnd(),"fill-mode":qx.bom.client.CssAnimation.getFillMode(),"keyframes":qx.bom.client.CssAnimation.getKeyFrames()};}
;return null;}
,getFillMode:function(){return qx.bom.Style.getPropertyName(f);}
,getPlayState:function(){return qx.bom.Style.getPropertyName(m);}
,getName:function(){return qx.bom.Style.getPropertyName(p);}
,getAnimationStart:function(){var E={"msAnimation":c,"WebkitAnimation":D,"MozAnimation":C,"OAnimation":a,"animation":C};return E[this.getName()];}
,getAnimationIteration:function(){var F={"msAnimation":o,"WebkitAnimation":y,"MozAnimation":s,"OAnimation":x,"animation":s};return F[this.getName()];}
,getAnimationEnd:function(){var G={"msAnimation":g,"WebkitAnimation":k,"MozAnimation":b,"OAnimation":q,"animation":b};return G[this.getName()];}
,getKeyFrames:function(){var H=qx.bom.Style.VENDOR_PREFIXES;var K=[];for(var i=0;i<H.length;i++ ){var J=r+qx.bom.Style.getCssName(H[i])+z;K.push(J);}
;K.unshift(B);var I=qx.bom.Stylesheet.createElement();for(var i=0;i<K.length;i++ ){try{qx.bom.Stylesheet.addRule(I,K[i]+u,n);return K[i];}
catch(e){}
;}
;return null;}
,getRequestAnimationFrame:function(){var L=[h,A,t,j,d];for(var i=0;i<L.length;i++ ){if(window[L[i]]!=undefined){return L[i];}
;}
;return null;}
},defer:function(M){qx.core.Environment.add(w,M.getSupport);qx.core.Environment.add(l,M.getRequestAnimationFrame);}
});}
)();
(function(){var a="fill-mode",b="No 'keyFrames' given > 0",c="repeat",d="timing",f="start",g="end",h="Anni",i="start-event",j="keyFrames",k="Keyframe position needs to be between 0 and 100",l="alternate",m="qx.debug",n="keep",o="duration",p=":",q="delay",r="} ",s="name",t="iteration-event",u="",v="origin",w="Unknown key '",x="forwards",y="' in the animation description.",z="Some browsers will not animate elements with display==none",A="iteration",B="end-event",C="css.animation",D="ms ",E="% {",F="none",G=" ",H="linear",I=";",J="qx.bom.element.AnimationCss",K="keyframes",L="display";qx.Bootstrap.define(J,{statics:{__eO:null,__eP:h,__ch:0,__eQ:{},__eR:{"scale":true,"rotate":true,"skew":true,"translate":true},__eS:qx.core.Environment.get(C),animateReverse:function(N,O,M){return this._animate(N,O,M,true);}
,animate:function(Q,R,P){return this._animate(Q,R,P,false);}
,_animate:function(S,ba,Y,U){this.__eX(ba);if(qx.core.Environment.get(m)){this.__eY(ba);}
;var W=ba.keep;if(W!=null&&(U||(ba.alternate&&ba.repeat%2==0))){W=100-W;}
;if(!this.__eO){this.__eO=qx.bom.Stylesheet.createElement();}
;var V=ba.keyFrames;if(Y==undefined){Y=ba.duration;}
;if(this.__eS!=null){var name=this.__fa(V,U);var T=name+G+Y+D+ba.timing+G+(ba.delay?ba.delay+D:u)+ba.repeat+G+(ba.alternate?l:u);qx.bom.Event.addNativeListener(S,this.__eS[i],this.__eT);qx.bom.Event.addNativeListener(S,this.__eS[t],this.__eU);qx.bom.Event.addNativeListener(S,this.__eS[B],this.__eV);if(qx.core.Environment.get(m)){if(qx.bom.element.Style.get(S,L)==F){qx.log.Logger.warn(z,S);}
;}
;S.style[qx.lang.String.camelCase(this.__eS[s])]=T;if(W&&W==100&&this.__eS[a]){S.style[this.__eS[a]]=x;}
;}
;var X=new qx.bom.element.AnimationHandle();X.desc=ba;X.el=S;X.keep=W;S.$$animation=X;if(ba.origin!=null){qx.bom.element.Transform.setOrigin(S,ba.origin);}
;if(this.__eS==null){window.setTimeout(function(){qx.bom.element.AnimationCss.__eV({target:S});}
,0);}
;return X;}
,__eT:function(e){e.target.$$animation.emit(f,e.target);}
,__eU:function(e){if(e.target!=null&&e.target.$$animation!=null){e.target.$$animation.emit(A,e.target);}
;}
,__eV:function(e){var bb=e.target;var bc=bb.$$animation;if(!bc){return;}
;var be=bc.desc;if(qx.bom.element.AnimationCss.__eS!=null){var bd=qx.lang.String.camelCase(qx.bom.element.AnimationCss.__eS[s]);bb.style[bd]=u;qx.bom.Event.removeNativeListener(bb,qx.bom.element.AnimationCss.__eS[s],qx.bom.element.AnimationCss.__eV);}
;if(be.origin!=null){qx.bom.element.Transform.setOrigin(bb,u);}
;qx.bom.element.AnimationCss.__eW(bb,be.keyFrames[bc.keep]);bb.$$animation=null;bc.el=null;bc.ended=true;bc.emit(g,bb);}
,__eW:function(bf,bg){var bi;for(var bh in bg){if(bh in qx.bom.element.AnimationCss.__eR){if(!bi){bi={};}
;bi[bh]=bg[bh];}
else {bf.style[qx.lang.String.camelCase(bh)]=bg[bh];}
;}
;if(bi){qx.bom.element.Transform.transform(bf,bi);}
;}
,__eX:function(bj){if(!bj.hasOwnProperty(l)){bj.alternate=false;}
;if(!bj.hasOwnProperty(n)){bj.keep=null;}
;if(!bj.hasOwnProperty(c)){bj.repeat=1;}
;if(!bj.hasOwnProperty(d)){bj.timing=H;}
;if(!bj.hasOwnProperty(v)){bj.origin=null;}
;}
,__eY:qx.core.Environment.select(m,{"true":function(bl){var bk=[v,o,n,j,q,c,d,l];for(var name in bl){if(!(bk.indexOf(name)!=-1)){qx.Bootstrap.warn(w+name+y);}
;}
;if(bl.keyFrames==null){qx.Bootstrap.warn(b);}
else {for(var bm in bl.keyFrames){if(bm<0||bm>100){qx.Bootstrap.warn(k);}
;}
;}
;}
,"default":null}),__fa:function(frames,bo){var br=u;for(var bv in frames){br+=(bo?-(bv-100):bv)+E;var bq=frames[bv];var bt;for(var bn in bq){if(bn in this.__eR){if(!bt){bt={};}
;bt[bn]=bq[bn];}
else {var bu=qx.bom.Style.getPropertyName(bn);var bp=(bu!==null)?qx.bom.Style.getCssName(bu):u;br+=(bp||bn)+p+bq[bn]+I;}
;}
;if(bt){br+=qx.bom.element.Transform.getCss(bt);}
;br+=r;}
;if(this.__eQ[br]){return this.__eQ[br];}
;var name=this.__eP+this.__ch++ ;var bs=this.__eS[K]+G+name;qx.bom.Stylesheet.addRule(this.__eO,bs,br);this.__eQ[br]=name;return name;}
}});}
)();
(function(){var a="css.animation",b="Element",c="",d="qx.bom.element.AnimationHandle",e="play-state",f="paused",g="running";qx.Bootstrap.define(d,{extend:qx.event.Emitter,construct:function(){var h=qx.core.Environment.get(a);this.__fb=h&&h[e];this.__fc=true;}
,events:{"start":b,"end":b,"iteration":b},members:{__fb:null,__fc:false,__fd:false,isPlaying:function(){return this.__fc;}
,isEnded:function(){return this.__fd;}
,isPaused:function(){return this.el.style[this.__fb]==f;}
,pause:function(){if(this.el){this.el.style[this.__fb]=f;this.el.$$animation.__fc=false;if(this.animationId&&qx.bom.element.AnimationJs){qx.bom.element.AnimationJs.pause(this);}
;}
;}
,play:function(){if(this.el){this.el.style[this.__fb]=g;this.el.$$animation.__fc=true;if(this.i!=undefined&&qx.bom.element.AnimationJs){qx.bom.element.AnimationJs.play(this);}
;}
;}
,stop:function(){if(this.el&&qx.core.Environment.get(a)&&!this.jsAnimation){this.el.style[this.__fb]=c;this.el.style[qx.core.Environment.get(a).name]=c;this.el.$$animation.__fc=false;this.el.$$animation.__fd=true;}
else if(this.jsAnimation){this.stopped=true;qx.bom.element.AnimationJs.stop(this);}
;}
}});}
)();
(function(){var c="cm",d="mm",e="0",f="pt",g="pc",h="",k="%",l="em",m="qx.bom.element.AnimationJs",n="infinite",o="#",p="in",q="px",r="start",s="end",t="ex",u=";",v="undefined",w="iteration",y="string",z=":";qx.Bootstrap.define(m,{statics:{__fe:30,__ff:[k,p,c,d,l,t,f,g,q],__eR:{"scale":true,"rotate":true,"skew":true,"translate":true},animate:function(B,C,A){return this._animate(B,C,A,false);}
,animateReverse:function(E,F,D){return this._animate(E,F,D,true);}
,_animate:function(G,Q,P,I){if(G.$$animation){return G.$$animation;}
;Q=qx.lang.Object.clone(Q,true);if(P==undefined){P=Q.duration;}
;var L=Q.keyFrames;var J=this.__fo(L);var K=this.__fn(P,J);var N=parseInt(P/K,10);this.__fg(L,G);var O=this.__fi(N,K,J,L,P,Q.timing);var H=new qx.bom.element.AnimationHandle();H.jsAnimation=true;if(I){O.reverse();H.reverse=true;}
;H.desc=Q;H.el=G;H.delta=O;H.stepTime=K;H.steps=N;G.$$animation=H;H.i=0;H.initValues={};H.repeatSteps=this.__fl(N,Q.repeat);var M=Q.delay||0;var self=this;H.delayId=window.setTimeout(function(){H.delayId=null;self.play(H);}
,M);return H;}
,__fg:function(V,R){var Y={};for(var U in V){for(var name in V[U]){var S=qx.bom.Style.getPropertyName(name);if(S&&S!=name){var X=qx.bom.Style.getCssName(S);V[U][X]=V[U][name];delete V[U][name];name=X;}
;if(Y[name]==undefined){var W=V[U][name];if(typeof W==y){Y[name]=this.__fj(W);}
else {Y[name]=h;}
;}
;}
;}
;for(var U in V){var T=V[U];for(var name in Y){if(T[name]==undefined){if(name in R.style){if(window.getComputedStyle){T[name]=getComputedStyle(R,null)[name];}
else {T[name]=R.style[name];}
;}
else {T[name]=R[name];}
;if(T[name]===h&&this.__ff.indexOf(Y[name])!=-1){T[name]=e+Y[name];}
;}
;}
;}
;}
,__fh:function(bb){bb=qx.lang.Object.clone(bb);var bc;for(var name in bb){if(name in this.__eR){if(!bc){bc={};}
;bc[name]=bb[name];delete bb[name];}
;}
;if(bc){var ba=qx.bom.element.Transform.getCss(bc).split(z);if(ba.length>1){bb[ba[0]]=ba[1].replace(u,h);}
;}
;return bb;}
,__fi:function(bw,bh,bo,bi,be,bq){var bp=new Array(bw);var bm=1;bp[0]=this.__fh(bi[0]);var bt=bi[0];var bj=bi[bo[bm]];var bf=Math.floor(bo[bm]/(bh/be*100));var bs=1;for(var i=1;i<bp.length;i++ ){if(i*bh/be*100>bo[bm]){bt=bj;bm++ ;bj=bi[bo[bm]];bf=Math.floor(bo[bm]/(bh/be*100))-bf;bs=1;}
;bp[i]={};var bd;for(var name in bj){var br=bj[name]+h;if(name in this.__eR){if(!bd){bd={};}
;if(qx.Bootstrap.isArray(bt[name])){if(!qx.Bootstrap.isArray(bj[name])){bj[name]=[bj[name]];}
;bd[name]=[];for(var j=0;j<bj[name].length;j++ ){var bu=bj[name][j]+h;var x=bs/bf;bd[name][j]=this.__fk(bu,bt[name],bq,x);}
;}
else {var x=bs/bf;bd[name]=this.__fk(br,bt[name],bq,x);}
;}
else if(br.charAt(0)==o){var bl=qx.util.ColorUtil.cssStringToRgb(bt[name]);var bk=qx.util.ColorUtil.cssStringToRgb(br);var bg=[];for(var j=0;j<bl.length;j++ ){var bv=bl[j]-bk[j];var x=bs/bf;var bn=qx.bom.AnimationFrame.calculateTiming(bq,x);bg[j]=parseInt(bl[j]-bv*bn,10);}
;bp[i][name]=qx.util.ColorUtil.rgbToHexString(bg);}
else if(!isNaN(parseFloat(br))){var x=bs/bf;bp[i][name]=this.__fk(br,bt[name],bq,x);}
else {bp[i][name]=bt[name]+h;}
;}
;if(bd){var bx=qx.bom.element.Transform.getCss(bd).split(z);if(bx.length>1){bp[i][bx[0]]=bx[1].replace(u,h);}
;}
;bs++ ;}
;bp[bp.length-1]=this.__fh(bi[100]);return bp;}
,__fj:function(by){return by.substring((parseFloat(by)+h).length,by.length);}
,__fk:function(bC,bB,bz,x){var bA=parseFloat(bC)-parseFloat(bB);return (parseFloat(bB)+bA*qx.bom.AnimationFrame.calculateTiming(bz,x))+this.__fj(bC);}
,play:function(bD){bD.emit(r,bD.el);var bE=window.setInterval(function(){bD.repeatSteps-- ;var bF=bD.delta[bD.i%bD.steps];if(bD.i===0){for(var name in bF){if(bD.initValues[name]===undefined){if(bD.el[name]!==undefined){bD.initValues[name]=bD.el[name];}
else if(qx.bom.element.Style){bD.initValues[name]=qx.bom.element.Style.get(bD.el,qx.lang.String.camelCase(name));}
else {bD.initValues[name]=bD.el.style[qx.lang.String.camelCase(name)];}
;}
;}
;}
;qx.bom.element.AnimationJs.__fm(bD.el,bF);bD.i++ ;if(bD.i%bD.steps==0){bD.emit(w,bD.el);if(bD.desc.alternate){bD.delta.reverse();}
;}
;if(bD.repeatSteps<0){qx.bom.element.AnimationJs.stop(bD);}
;}
,bD.stepTime);bD.animationId=bE;return bD;}
,pause:function(bG){window.clearInterval(bG.animationId);bG.animationId=null;return bG;}
,stop:function(bK){var bJ=bK.desc;var bH=bK.el;var bI=bK.initValues;if(bK.animationId){window.clearInterval(bK.animationId);}
;if(bK.delayId){window.clearTimeout(bK.delayId);}
;if(bH==undefined){return bK;}
;var bL=bJ.keep;if(bL!=undefined&&!bK.stopped){if(bK.reverse||(bJ.alternate&&bJ.repeat&&bJ.repeat%2==0)){bL=100-bL;}
;this.__fm(bH,bJ.keyFrames[bL]);}
else {this.__fm(bH,bI);}
;bH.$$animation=null;bK.el=null;bK.ended=true;bK.animationId=null;bK.emit(s,bH);return bK;}
,__fl:function(bN,bM){if(bM==undefined){return bN;}
;if(bM==n){return Number.MAX_VALUE;}
;return bN*bM;}
,__fm:function(bP,bO){for(var bQ in bO){if(bO[bQ]===undefined){continue;}
;if(typeof bP.style[bQ]===v&&bQ in bP){bP[bQ]=bO[bQ];continue;}
;var name=qx.bom.Style.getPropertyName(bQ)||bQ;if(qx.bom.element.Style){qx.bom.element.Style.set(bP,name,bO[bQ]);}
else {bP.style[name]=bO[bQ];}
;}
;}
,__fn:function(bT,bR){var bU=100;for(var i=0;i<bR.length-1;i++ ){bU=Math.min(bU,bR[i+1]-bR[i]);}
;var bS=bT*bU/100;while(bS>this.__fe){bS=bS/2;}
;return Math.round(bS);}
,__fo:function(bW){var bV=Object.keys(bW);for(var i=0;i<bV.length;i++ ){bV[i]=parseInt(bV[i],10);}
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
(function(){var a="backface-visibility",b="name",c="perspective",d="css.transform.3d",e="visible",f="",g="(",h="px",j="css.transform",k=" ",l="qx.bom.element.Transform",m="hidden",n="Z",o=";",p="perspective-origin",q=") ",r="X",s="Y",t="origin",u="style",v=":";qx.Bootstrap.define(l,{statics:{__fp:[r,s,n],__fq:qx.core.Environment.get(j),transform:function(w,y){var z=this.__fr(y);if(this.__fq!=null){var x=this.__fq[b];w.style[x]=z;}
;}
,translate:function(A,B){this.transform(A,{translate:B});}
,scale:function(C,D){this.transform(C,{scale:D});}
,rotate:function(E,F){this.transform(E,{rotate:F});}
,skew:function(G,H){this.transform(G,{skew:H});}
,getCss:function(J){var K=this.__fr(J);if(this.__fq!=null){var I=this.__fq[b];return qx.bom.Style.getCssName(I)+v+K+o;}
;return f;}
,setOrigin:function(L,M){if(this.__fq!=null){L.style[this.__fq[t]]=M;}
;}
,getOrigin:function(N){if(this.__fq!=null){return N.style[this.__fq[t]];}
;return f;}
,setStyle:function(O,P){if(this.__fq!=null){O.style[this.__fq[u]]=P;}
;}
,getStyle:function(Q){if(this.__fq!=null){return Q.style[this.__fq[u]];}
;return f;}
,setPerspective:function(R,S){if(this.__fq!=null){R.style[this.__fq[c]]=S+h;}
;}
,getPerspective:function(T){if(this.__fq!=null){return T.style[this.__fq[c]];}
;return f;}
,setPerspectiveOrigin:function(U,V){if(this.__fq!=null){U.style[this.__fq[p]]=V;}
;}
,getPerspectiveOrigin:function(W){if(this.__fq!=null){var X=W.style[this.__fq[p]];if(X!=f){return X;}
else {var ba=W.style[this.__fq[p]+r];var Y=W.style[this.__fq[p]+s];if(ba!=f){return ba+k+Y;}
;}
;}
;return f;}
,setBackfaceVisibility:function(bb,bc){if(this.__fq!=null){bb.style[this.__fq[a]]=bc?e:m;}
;}
,getBackfaceVisibility:function(bd){if(this.__fq!=null){return bd.style[this.__fq[a]]==e;}
;return true;}
,__fr:function(bg){var bh=f;for(var be in bg){var bf=bg[be];if(qx.Bootstrap.isArray(bf)){for(var i=0;i<bf.length;i++ ){if(bf[i]==undefined||(i==2&&!qx.core.Environment.get(d))){continue;}
;bh+=be+this.__fp[i]+g;bh+=bf[i];bh+=q;}
;}
else {bh+=be+g+bg[be]+q;}
;}
;return bh;}
}});}
)();
(function(){var b="ease-in-out",c="Number",d="css.animation.requestframe",e="qx.bom.AnimationFrame",f="frame",g="end",h="linear",j="ease-in",k="ease-out";qx.Bootstrap.define(e,{extend:qx.event.Emitter,events:{"end":undefined,"frame":c},members:{__dI:false,startSequence:function(l){this.__dI=false;var m=+(new Date());var n=function(p){if(this.__dI){this.id=null;return;}
;if(p>=m+l){this.emit(g);this.id=null;}
else {var o=Math.max(p-m,0);this.emit(f,o);this.id=qx.bom.AnimationFrame.request(n,this);}
;}
;this.id=qx.bom.AnimationFrame.request(n,this);}
,cancelSequence:function(){this.__dI=true;}
},statics:{TIMEOUT:30,calculateTiming:function(q,x){if(q==j){var a=[3.1223e-7,0.0757,1.2646,-0.167,-0.4387,0.2654];}
else if(q==k){var a=[-7.0198e-8,1.652,-0.551,-0.0458,0.1255,-0.1807];}
else if(q==h){return x;}
else if(q==b){var a=[2.482e-7,-0.2289,3.3466,-1.0857,-1.7354,0.7034];}
else {var a=[-0.0021,0.2472,9.8054,-21.6869,17.7611,-5.1226];}
;var y=0;for(var i=0;i<a.length;i++ ){y+=a[i]*Math.pow(x,i);}
;return y;}
,request:function(r,t){var s=qx.core.Environment.get(d);var u=function(v){if(v<1e10){v=this.__dJ+v;}
;v=v||+(new Date());r.call(t,v);}
;if(s){return window[s](u);}
else {return window.setTimeout(function(){u();}
,qx.bom.AnimationFrame.TIMEOUT);}
;}
},defer:function(w){w.__dJ=window.performance&&performance.timing&&performance.timing.navigationStart;if(!w.__dJ){w.__dJ=Date.now();}
;}
});}
)();
(function(){var a="qx.util.DeferredCallManager",b="singleton";qx.Class.define(a,{extend:qx.core.Object,type:b,construct:function(){this.__fs={};this.__ft=qx.lang.Function.bind(this.__fx,this);this.__fu=false;}
,members:{__fv:null,__fw:null,__fs:null,__fu:null,__ft:null,schedule:function(d){if(this.__fv==null){this.__fv=window.setTimeout(this.__ft,0);}
;var c=d.toHashCode();if(this.__fw&&this.__fw[c]){return;}
;this.__fs[c]=d;this.__fu=true;}
,cancel:function(f){var e=f.toHashCode();if(this.__fw&&this.__fw[e]){this.__fw[e]=null;return;}
;delete this.__fs[e];if(qx.lang.Object.isEmpty(this.__fs)&&this.__fv!=null){window.clearTimeout(this.__fv);this.__fv=null;}
;}
,__fx:qx.event.GlobalError.observeMethod(function(){this.__fv=null;while(this.__fu){this.__fw=qx.lang.Object.clone(this.__fs);this.__fs={};this.__fu=false;for(var h in this.__fw){var g=this.__fw[h];if(g){this.__fw[h]=null;g.call();}
;}
;}
;this.__fw=null;}
)},destruct:function(){if(this.__fv!=null){window.clearTimeout(this.__fv);}
;this.__ft=this.__fs=null;}
});}
)();
(function(){var a="qx.util.DeferredCall",b="The context object '",c="qx.debug",d="'is already disposed.",e="' of the defered call '";qx.Class.define(a,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);this.__bx=f;this.__bz=g||null;this.__fy=qx.util.DeferredCallManager.getInstance();}
,members:{__bx:null,__bz:null,__fy:null,cancel:function(){this.__fy.cancel(this);}
,schedule:function(){this.__fy.schedule(this);}
,call:function(){if(qx.core.Environment.get(c)){var h=this.__bz;if(h&&h.isDisposed&&h.isDisposed()){this.warn(b+h+e+this+d);}
;}
;this.__bz?this.__bx.apply(this.__bz):this.__bx();}
},destruct:function(){this.cancel();this.__bz=this.__bx=this.__fy=null;}
});}
)();
(function(){var a="Child is already in: ",b="text",c="|bubble|",d="qx.html.Element",f="': ",g="|capture|",h="scroll",j="__fV",k="Invalid capture flag.",m="focus",n="Failed to add event listener for type '",o="Flushing elements...",p="class",q="blur",r="div",s="Flush: ",t="deactivate",u="'",v="css.userselect",w="animationEnd",z="Synced DOM with ",A=" from the target '",B="qx.debug",C="capture",D="visible",E="Root elements could not be inserted into other ones.",F="Has no children!",G="off",H="Invalid callback function",I="releaseCapture",J="Could not move to same index!",K="Invalid context for callback.",L="element",M="",N="Flush invisible element",O="Failed to remove event listener for type '",P="qxSelectable",Q="tabIndex",R="Has no child at this position!",S="Invalid event type.",T="qx.html.Iframe",U="activate",V="Has no parent to remove from.",W=" to the target '",X="mshtml",Y="engine.name",bp=" operations",bq="Flush rendered element",br="none",bl="Has no child: ",bm="css.userselect.none",bn=" ",bo="hidden",bs="on",bt="Switching visibility to: ",bu="id",bv="Could not overwrite existing element!";qx.Class.define(d,{extend:qx.core.Object,construct:function(by,bw,bx){qx.core.Object.call(this);this.__fz=by||r;this.__fA=bw||null;this.__fB=bx||null;}
,statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__fC:{},__fD:null,__fE:null,_scheduleFlush:function(bz){qx.html.Element.__gh.schedule();}
,flush:function(){var bL;if(qx.core.Environment.get(B)){if(this.DEBUG){qx.log.Logger.debug(this,o);}
;}
;var bD=this.__fF();var bB=bD.getFocus();if(bB&&this.__fH(bB)){bD.blur(bB);}
;var bS=bD.getActive();if(bS&&this.__fH(bS)){qx.bom.Element.deactivate(bS);}
;var bG=this.__fG();if(bG&&this.__fH(bG)){qx.bom.Element.releaseCapture(bG);}
;var bM=[];var bN=this._modified;for(var bK in bN){bL=bN[bK];if(bL.__ga()||bL.classname==T){if(bL.__fI&&qx.dom.Hierarchy.isRendered(bL.__fI)){bM.push(bL);}
else {if(qx.core.Environment.get(B)){if(this.DEBUG){bL.debug(N);}
;}
;bL.__fY();}
;delete bN[bK];}
;}
;for(var i=0,l=bM.length;i<l;i++ ){bL=bM[i];if(qx.core.Environment.get(B)){if(this.DEBUG){bL.debug(bq);}
;}
;bL.__fY();}
;var bI=this._visibility;for(var bK in bI){bL=bI[bK];var bO=bL.__fI;if(!bO){delete bI[bK];continue;}
;if(qx.core.Environment.get(B)){if(this.DEBUG){qx.log.Logger.debug(this,bt+bL.__fL);}
;}
;if(!bL.$$disposed){bO.style.display=bL.__fL?M:br;if((qx.core.Environment.get(Y)==X)){if(!(document.documentMode>=8)){bO.style.visibility=bL.__fL?D:bo;}
;}
;}
;delete bI[bK];}
;var scroll=this._scroll;for(var bK in scroll){bL=scroll[bK];var bC=bL.__fI;if(bC&&bC.offsetWidth){var bF=true;if(bL.__fO!=null){bL.__fI.scrollLeft=bL.__fO;delete bL.__fO;}
;if(bL.__fP!=null){bL.__fI.scrollTop=bL.__fP;delete bL.__fP;}
;var bP=bL.__fM;if(bP!=null){var bJ=bP.element.getDomElement();if(bJ&&bJ.offsetWidth){qx.bom.element.Scroll.intoViewX(bJ,bC,bP.align);delete bL.__fM;}
else {bF=false;}
;}
;var bQ=bL.__fN;if(bQ!=null){var bJ=bQ.element.getDomElement();if(bJ&&bJ.offsetWidth){qx.bom.element.Scroll.intoViewY(bJ,bC,bQ.align);delete bL.__fN;}
else {bF=false;}
;}
;if(bF){delete scroll[bK];}
;}
;}
;var bE={"releaseCapture":1,"blur":1,"deactivate":1};for(var i=0;i<this._actions.length;i++ ){var bR=this._actions[i];var bO=bR.element.__fI;if(!bO||!bE[bR.type]&&!bR.element.__ga()){continue;}
;var bH=bR.args;bH.unshift(bO);qx.bom.Element[bR.type].apply(qx.bom.Element,bH);}
;this._actions=[];for(var bK in this.__fC){var bA=this.__fC[bK];var bC=bA.element.__fI;if(bC){qx.bom.Selection.set(bC,bA.start,bA.end);delete this.__fC[bK];}
;}
;qx.event.handler.Appear.refresh();}
,__fF:function(){if(!this.__fD){var bT=qx.event.Registration.getManager(window);this.__fD=bT.getHandler(qx.event.handler.Focus);}
;return this.__fD;}
,__fG:function(){if(!this.__fE){var bU=qx.event.Registration.getManager(window);this.__fE=bU.getDispatcher(qx.event.dispatch.MouseCapture);}
;return this.__fE.getCaptureElement();}
,__fH:function(bV){var bW=qx.core.ObjectRegistry.fromHashCode(bV.$$element);return bW&&!bW.__ga();}
},members:{__fz:null,__fI:null,__fJ:false,__fK:true,__fL:true,__fM:null,__fN:null,__fO:null,__fP:null,__fQ:null,__fR:null,__fS:null,__fA:null,__fB:null,__fT:null,__fU:null,__fV:null,__fW:null,__fX:null,_scheduleChildrenUpdate:function(){if(this.__fW){return;}
;this.__fW=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
,_createDomElement:function(){return qx.dom.Element.create(this.__fz);}
,__fY:function(){if(qx.core.Environment.get(B)){if(this.DEBUG){this.debug(s+this.getAttribute(bu));}
;}
;var length;var bX=this.__fV;if(bX){length=bX.length;var bY;for(var i=0;i<length;i++ ){bY=bX[i];if(bY.__fL&&bY.__fK&&!bY.__fI){bY.__fY();}
;}
;}
;if(!this.__fI){this.__fI=this._createDomElement();this.__fI.$$element=this.$$hash;this._copyData(false);if(bX&&length>0){this._insertChildren();}
;}
else {this._syncData();if(this.__fW){this._syncChildren();}
;}
;delete this.__fW;}
,_insertChildren:function(){var ca=this.__fV;var length=ca.length;var cc;if(length>2){var cb=document.createDocumentFragment();for(var i=0;i<length;i++ ){cc=ca[i];if(cc.__fI&&cc.__fK){cb.appendChild(cc.__fI);}
;}
;this.__fI.appendChild(cb);}
else {var cb=this.__fI;for(var i=0;i<length;i++ ){cc=ca[i];if(cc.__fI&&cc.__fK){cb.appendChild(cc.__fI);}
;}
;}
;}
,_syncChildren:function(){var cm=qx.core.ObjectRegistry;var cd=this.__fV;var ck=cd.length;var ce;var ci;var cg=this.__fI;var cl=cg.childNodes;var cf=0;var cj;if(qx.core.Environment.get(B)){var ch=0;}
;for(var i=cl.length-1;i>=0;i-- ){cj=cl[i];ci=cm.fromHashCode(cj.$$element);if(!ci||!ci.__fK||ci.__fX!==this){cg.removeChild(cj);if(qx.core.Environment.get(B)){ch++ ;}
;}
;}
;for(var i=0;i<ck;i++ ){ce=cd[i];if(ce.__fK){ci=ce.__fI;cj=cl[cf];if(!ci){continue;}
;if(ci!=cj){if(cj){cg.insertBefore(ci,cj);}
else {cg.appendChild(ci);}
;if(qx.core.Environment.get(B)){ch++ ;}
;}
;cf++ ;}
;}
;if(qx.core.Environment.get(B)){if(qx.html.Element.DEBUG){this.debug(z+ch+bp);}
;}
;}
,_copyData:function(co){var cq=this.__fI;var cs=this.__fB;if(cs){var cp=qx.bom.element.Attribute;for(var cr in cs){cp.set(cq,cr,cs[cr]);}
;}
;var cs=this.__fA;if(cs){var cn=qx.bom.element.Style;if(co){cn.setStyles(cq,cs);}
else {cn.setCss(cq,cn.compile(cs));}
;}
;var cs=this.__fT;if(cs){for(var cr in cs){this._applyProperty(cr,cs[cr]);}
;}
;var cs=this.__fU;if(cs){qx.event.Registration.getManager(cq).importListeners(cq,cs);delete this.__fU;}
;}
,_syncData:function(){var cx=this.__fI;var cw=qx.bom.element.Attribute;var cu=qx.bom.element.Style;var cv=this.__fR;if(cv){var cA=this.__fB;if(cA){var cy;for(var cz in cv){cy=cA[cz];if(cy!==undefined){cw.set(cx,cz,cy);}
else {cw.reset(cx,cz);}
;}
;}
;this.__fR=null;}
;var cv=this.__fQ;if(cv){var cA=this.__fA;if(cA){var ct={};for(var cz in cv){ct[cz]=cA[cz];}
;cu.setStyles(cx,ct);}
;this.__fQ=null;}
;var cv=this.__fS;if(cv){var cA=this.__fT;if(cA){var cy;for(var cz in cv){this._applyProperty(cz,cA[cz]);}
;}
;this.__fS=null;}
;}
,__ga:function(){var cB=this;while(cB){if(cB.__fJ){return true;}
;if(!cB.__fK||!cB.__fL){return false;}
;cB=cB.__fX;}
;return false;}
,__gb:function(cC){if(cC.__fX===this){throw new Error(a+cC);}
;if(cC.__fJ){throw new Error(E);}
;if(cC.__fX){cC.__fX.remove(cC);}
;cC.__fX=this;if(!this.__fV){this.__fV=[];}
;if(this.__fI){this._scheduleChildrenUpdate();}
;}
,__gc:function(cD){if(cD.__fX!==this){throw new Error(bl+cD);}
;if(this.__fI){this._scheduleChildrenUpdate();}
;delete cD.__fX;}
,__gd:function(cE){if(cE.__fX!==this){throw new Error(bl+cE);}
;if(this.__fI){this._scheduleChildrenUpdate();}
;}
,getChildren:function(){return this.__fV||null;}
,getChild:function(cF){var cG=this.__fV;return cG&&cG[cF]||null;}
,hasChildren:function(){var cH=this.__fV;return cH&&cH[0]!==undefined;}
,indexOf:function(cJ){var cI=this.__fV;return cI?cI.indexOf(cJ):-1;}
,hasChild:function(cL){var cK=this.__fV;return cK&&cK.indexOf(cL)!==-1;}
,add:function(cM){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++ ){this.__gb(arguments[i]);}
;this.__fV.push.apply(this.__fV,arguments);}
else {this.__gb(cM);this.__fV.push(cM);}
;return this;}
,addAt:function(cO,cN){this.__gb(cO);qx.lang.Array.insertAt(this.__fV,cO,cN);return this;}
,remove:function(cP){var cQ=this.__fV;if(!cQ){return this;}
;if(arguments[1]){var cR;for(var i=0,l=arguments.length;i<l;i++ ){cR=arguments[i];this.__gc(cR);qx.lang.Array.remove(cQ,cR);}
;}
else {this.__gc(cP);qx.lang.Array.remove(cQ,cP);}
;return this;}
,removeAt:function(cS){var cT=this.__fV;if(!cT){throw new Error(F);}
;var cU=cT[cS];if(!cU){throw new Error(R);}
;this.__gc(cU);qx.lang.Array.removeAt(this.__fV,cS);return this;}
,removeAll:function(){var cV=this.__fV;if(cV){for(var i=0,l=cV.length;i<l;i++ ){this.__gc(cV[i]);}
;cV.length=0;}
;return this;}
,getParent:function(){return this.__fX||null;}
,insertInto:function(parent,cW){parent.__gb(this);if(cW==null){parent.__fV.push(this);}
else {qx.lang.Array.insertAt(this.__fV,this,cW);}
;return this;}
,insertBefore:function(cX){var parent=cX.__fX;parent.__gb(this);qx.lang.Array.insertBefore(parent.__fV,this,cX);return this;}
,insertAfter:function(cY){var parent=cY.__fX;parent.__gb(this);qx.lang.Array.insertAfter(parent.__fV,this,cY);return this;}
,moveTo:function(da){var parent=this.__fX;parent.__gd(this);var dc=parent.__fV.indexOf(this);if(dc===da){throw new Error(J);}
else if(dc<da){da-- ;}
;qx.lang.Array.removeAt(parent.__fV,dc);qx.lang.Array.insertAt(parent.__fV,this,da);return this;}
,moveBefore:function(dd){var parent=this.__fX;return this.moveTo(parent.__fV.indexOf(dd));}
,moveAfter:function(de){var parent=this.__fX;return this.moveTo(parent.__fV.indexOf(de)+1);}
,free:function(){var parent=this.__fX;if(!parent){throw new Error(V);}
;if(!parent.__fV){return this;}
;parent.__gc(this);qx.lang.Array.remove(parent.__fV,this);return this;}
,getDomElement:function(){return this.__fI||null;}
,getNodeName:function(){return this.__fz;}
,setNodeName:function(name){this.__fz=name;}
,setRoot:function(df){this.__fJ=df;}
,useMarkup:function(dg){if(this.__fI){throw new Error(bv);}
;if(qx.core.Environment.get(Y)==X){var dh=document.createElement(r);}
else {var dh=qx.dom.Element.getHelperElement();}
;dh.innerHTML=dg;this.useElement(dh.firstChild);return this.__fI;}
,useElement:function(di){if(this.__fI){throw new Error(bv);}
;this.__fI=di;this.__fI.$$element=this.$$hash;this._copyData(true);}
,isFocusable:function(){var dk=this.getAttribute(Q);if(dk>=1){return true;}
;var dj=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;if(dk>=0&&dj[this.__fz]){return true;}
;return false;}
,setSelectable:function(dm){this.setAttribute(P,dm?bs:G);var dl=qx.core.Environment.get(v);if(dl){this.setStyle(dl,dm?b:qx.core.Environment.get(bm));}
;}
,isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__fz];}
,include:function(){if(this.__fK){return this;}
;delete this.__fK;if(this.__fX){this.__fX._scheduleChildrenUpdate();}
;return this;}
,exclude:function(){if(!this.__fK){return this;}
;this.__fK=false;if(this.__fX){this.__fX._scheduleChildrenUpdate();}
;return this;}
,isIncluded:function(){return this.__fK===true;}
,fadeIn:function(dn){var dp=qxWeb(this.__fI);if(dp.isPlaying()){dp.stop();}
;if(!this.__fI){this.__fY();dp.push(this.__fI);}
;if(this.__fI){dp.fadeIn(dn);return dp.getAnimationHandles()[0];}
;}
,fadeOut:function(dq){var dr=qxWeb(this.__fI);if(dr.isPlaying()){dr.stop();}
;if(this.__fI){dr.fadeOut(dq).once(w,function(){this.hide();qx.html.Element.flush();}
,this);return dr.getAnimationHandles()[0];}
;}
,show:function(){if(this.__fL){return this;}
;if(this.__fI){qx.html.Element._visibility[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;if(this.__fX){this.__fX._scheduleChildrenUpdate();}
;delete this.__fL;return this;}
,hide:function(){if(!this.__fL){return this;}
;if(this.__fI){qx.html.Element._visibility[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;this.__fL=false;return this;}
,isVisible:function(){return this.__fL===true;}
,scrollChildIntoViewX:function(dv,dt,dw){var ds=this.__fI;var du=dv.getDomElement();if(dw!==false&&ds&&ds.offsetWidth&&du&&du.offsetWidth){qx.bom.element.Scroll.intoViewX(du,ds,dt);}
else {this.__fM={element:dv,align:dt};qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__fO;}
,scrollChildIntoViewY:function(dA,dy,dB){var dx=this.__fI;var dz=dA.getDomElement();if(dB!==false&&dx&&dx.offsetWidth&&dz&&dz.offsetWidth){qx.bom.element.Scroll.intoViewY(dz,dx,dy);}
else {this.__fN={element:dA,align:dy};qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__fP;}
,scrollToX:function(x,dC){var dD=this.__fI;if(dC!==true&&dD&&dD.offsetWidth){dD.scrollLeft=x;delete this.__fO;}
else {this.__fO=x;qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__fM;}
,getScrollX:function(){var dE=this.__fI;if(dE){return dE.scrollLeft;}
;return this.__fO||0;}
,scrollToY:function(y,dG){var dF=this.__fI;if(dG!==true&&dF&&dF.offsetWidth){dF.scrollTop=y;delete this.__fP;}
else {this.__fP=y;qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__fN;}
,getScrollY:function(){var dH=this.__fI;if(dH){return dH.scrollTop;}
;return this.__fP||0;}
,disableScrolling:function(){this.enableScrolling();this.scrollToX(0);this.scrollToY(0);this.addListener(h,this.__gf,this);}
,enableScrolling:function(){this.removeListener(h,this.__gf,this);}
,__ge:null,__gf:function(e){if(!this.__ge){this.__ge=true;this.__fI.scrollTop=0;this.__fI.scrollLeft=0;delete this.__ge;}
;}
,getTextSelection:function(){var dI=this.__fI;if(dI){return qx.bom.Selection.get(dI);}
;return null;}
,getTextSelectionLength:function(){var dJ=this.__fI;if(dJ){return qx.bom.Selection.getLength(dJ);}
;return null;}
,getTextSelectionStart:function(){var dK=this.__fI;if(dK){return qx.bom.Selection.getStart(dK);}
;return null;}
,getTextSelectionEnd:function(){var dL=this.__fI;if(dL){return qx.bom.Selection.getEnd(dL);}
;return null;}
,setTextSelection:function(dM,dN){var dO=this.__fI;if(dO){qx.bom.Selection.set(dO,dM,dN);return;}
;qx.html.Element.__fC[this.toHashCode()]={element:this,start:dM,end:dN};qx.html.Element._scheduleFlush(L);}
,clearTextSelection:function(){var dP=this.__fI;if(dP){qx.bom.Selection.clear(dP);}
;delete qx.html.Element.__fC[this.toHashCode()];}
,__gg:function(dQ,dR){var dS=qx.html.Element._actions;dS.push({type:dQ,element:this,args:dR||[]});qx.html.Element._scheduleFlush(L);}
,focus:function(){this.__gg(m);}
,blur:function(){this.__gg(q);}
,activate:function(){this.__gg(U);}
,deactivate:function(){this.__gg(t);}
,capture:function(dT){this.__gg(C,[dT!==false]);}
,releaseCapture:function(){this.__gg(I);}
,setStyle:function(dU,dV,dW){if(!this.__fA){this.__fA={};}
;if(this.__fA[dU]==dV){return this;}
;if(dV==null){delete this.__fA[dU];}
else {this.__fA[dU]=dV;}
;if(this.__fI){if(dW){qx.bom.element.Style.set(this.__fI,dU,dV);return this;}
;if(!this.__fQ){this.__fQ={};}
;this.__fQ[dU]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;return this;}
,setStyles:function(dY,eb){var ea=qx.bom.element.Style;if(!this.__fA){this.__fA={};}
;if(this.__fI){if(!this.__fQ){this.__fQ={};}
;for(var dX in dY){var ec=dY[dX];if(this.__fA[dX]==ec){continue;}
;if(ec==null){delete this.__fA[dX];}
else {this.__fA[dX]=ec;}
;if(eb){ea.set(this.__fI,dX,ec);continue;}
;this.__fQ[dX]=true;}
;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
else {for(var dX in dY){var ec=dY[dX];if(this.__fA[dX]==ec){continue;}
;if(ec==null){delete this.__fA[dX];}
else {this.__fA[dX]=ec;}
;}
;}
;return this;}
,removeStyle:function(ee,ed){this.setStyle(ee,null,ed);return this;}
,getStyle:function(ef){return this.__fA?this.__fA[ef]:null;}
,getAllStyles:function(){return this.__fA||null;}
,setAttribute:function(eg,eh,ei){if(!this.__fB){this.__fB={};}
;if(this.__fB[eg]==eh){return this;}
;if(eh==null){delete this.__fB[eg];}
else {this.__fB[eg]=eh;}
;if(this.__fI){if(ei){qx.bom.element.Attribute.set(this.__fI,eg,eh);return this;}
;if(!this.__fR){this.__fR={};}
;this.__fR[eg]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;return this;}
,setAttributes:function(ej,ek){for(var em in ej){this.setAttribute(em,ej[em],ek);}
;return this;}
,removeAttribute:function(eo,en){return this.setAttribute(eo,null,en);}
,getAttribute:function(ep){return this.__fB?this.__fB[ep]:null;}
,addClass:function(name){var eq=((this.getAttribute(p)||M)+bn+name).trim();this.setAttribute(p,eq);}
,removeClass:function(name){var er=this.getAttribute(p);if(er){this.setAttribute(p,(er.replace(name,M)).trim());}
;}
,_applyProperty:function(name,es){}
,_setProperty:function(et,eu,ev){if(!this.__fT){this.__fT={};}
;if(this.__fT[et]==eu){return this;}
;if(eu==null){delete this.__fT[et];}
else {this.__fT[et]=eu;}
;if(this.__fI){if(ev){this._applyProperty(et,eu);return this;}
;if(!this.__fS){this.__fS={};}
;this.__fS[et]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;return this;}
,_removeProperty:function(ex,ew){return this._setProperty(ex,null,ew);}
,_getProperty:function(ez){var ey=this.__fT;if(!ey){return null;}
;var eA=ey[ez];return eA==null?null:eA;}
,addListener:function(eF,eC,self,eB){if(this.$$disposed){return null;}
;if(qx.core.Environment.get(B)){var eD=n+eF+u+W+this+f;this.assertString(eF,eD+S);this.assertFunction(eC,eD+H);if(self!==undefined){this.assertObject(self,K);}
;if(eB!==undefined){this.assertBoolean(eB,k);}
;}
;if(this.__fI){return qx.event.Registration.addListener(this.__fI,eF,eC,self,eB);}
;if(!this.__fU){this.__fU={};}
;if(eB==null){eB=false;}
;var eE=qx.event.Manager.getNextUniqueId();var eG=eF+(eB?g:c)+eE;this.__fU[eG]={type:eF,listener:eC,self:self,capture:eB,unique:eE};return eG;}
,removeListener:function(eN,eI,self,eH){if(this.$$disposed){return null;}
;if(qx.core.Environment.get(B)){var eL=O+eN+u+A+this+f;this.assertString(eN,eL+S);this.assertFunction(eI,eL+H);if(self!==undefined){this.assertObject(self,K);}
;if(eH!==undefined){this.assertBoolean(eH,k);}
;}
;if(this.__fI){qx.event.Registration.removeListener(this.__fI,eN,eI,self,eH);}
else {var eJ=this.__fU;var eM;if(eH==null){eH=false;}
;for(var eK in eJ){eM=eJ[eK];if(eM.listener===eI&&eM.self===self&&eM.capture===eH&&eM.type===eN){delete eJ[eK];break;}
;}
;}
;return this;}
,removeListenerById:function(eO){if(this.$$disposed){return null;}
;if(this.__fI){qx.event.Registration.removeListenerById(this.__fI,eO);}
else {delete this.__fU[eO];}
;return this;}
,hasListener:function(eQ,eP){if(this.$$disposed){return false;}
;if(this.__fI){return qx.event.Registration.hasListener(this.__fI,eQ,eP);}
;var eR=this.__fU;var eT;if(eP==null){eP=false;}
;for(var eS in eR){eT=eR[eS];if(eT.capture===eP&&eT.type===eQ){return true;}
;}
;return false;}
,getListeners:function(){if(this.$$disposed){return null;}
;if(this.__fI){return qx.event.Registration.getManager(this.__fI).serializeListeners(this.__fI);}
;var eU=[];for(var eW in this.__fU){var eV=this.__fU[eW];eU.push({type:eV.type,handler:eV.listener,self:eV.self,capture:eV.capture});}
;return eU;}
},defer:function(eX){eX.__gh=new qx.util.DeferredCall(eX.flush,eX);}
,destruct:function(){var eY=this.__fI;if(eY){qx.event.Registration.getManager(eY).removeAllListeners(eY);eY.$$element=M;}
;if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__fX;if(parent&&!parent.$$disposed){parent.remove(this);}
;}
;this._disposeArray(j);this.__fB=this.__fA=this.__fU=this.__fT=this.__fR=this.__fQ=this.__fS=this.__fI=this.__fX=this.__fM=this.__fN=null;}
});}
)();
(function(){var a="qx.event.handler.Appear",b="engine.name",c="mshtml",d="disappear",e="appear",f="browser.documentmode";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){qx.core.Object.call(this);this.__fy=g;this.__gi={};qx.event.handler.Appear.__gj[this.$$hash]=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__gj:{},refresh:function(){var h=this.__gj;for(var i in h){h[i].refresh();}
;}
},members:{__fy:null,__gi:null,canHandleEvent:function(k,j){}
,registerEvent:function(o,p,m){var n=qx.core.ObjectRegistry.toHashCode(o)+p;var l=this.__gi;if(l&&!l[n]){l[n]=o;o.$$displayed=o.offsetWidth>0;}
;}
,unregisterEvent:function(t,u,r){var s=qx.core.ObjectRegistry.toHashCode(t)+u;var q=this.__gi;if(!q){return;}
;if(q[s]){delete q[s];}
;}
,refresh:function(){var A=this.__gi;var x;var y=qx.core.Environment.get(b)==c&&qx.core.Environment.get(f)<9;for(var v in A){x=A[v];var w=x.offsetWidth>0;if(!w&&y){w=x.offsetWidth>0;}
;if((!!x.$$displayed)!==w){x.$$displayed=w;var z=qx.event.Registration.createEvent(w?e:d);this.__fy.dispatchEvent(x,z);}
;}
;}
},destruct:function(){this.__fy=this.__gi=null;delete qx.event.handler.Appear.__gj[this.$$hash];}
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
;A.handler.call(z,event);}
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
(function(){var a="qx.event.dispatch.DomBubbling";qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;}
,canDispatchEvent:function(d,event,c){return d.nodeType!==undefined&&event.getBubbles();}
},defer:function(e){qx.event.Registration.addDispatcher(e);}
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
(function(){var a="mshtml",b="engine.name",c="click",d="middle",e="none",f="contextmenu",g="qx.event.type.Mouse",h="browser.documentmode",i="left",j="right",k="browser.name",l="ie";qx.Class.define(g,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(m,n){var n=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,m,n);n.button=m.button;n.clientX=Math.round(m.clientX);n.clientY=Math.round(m.clientY);n.pageX=m.pageX?Math.round(m.pageX):undefined;n.pageY=m.pageY?Math.round(m.pageY):undefined;n.screenX=Math.round(m.screenX);n.screenY=Math.round(m.screenY);n.wheelDelta=m.wheelDelta;n.wheelDeltaX=m.wheelDeltaX;n.wheelDeltaY=m.wheelDeltaY;n.detail=m.detail;n.axis=m.axis;n.wheelX=m.wheelX;n.wheelY=m.wheelY;n.HORIZONTAL_AXIS=m.HORIZONTAL_AXIS;n.srcElement=m.srcElement;n.target=m.target;return n;}
,__gk:{'0':i,'2':j,'1':d},__gl:{'0':e,'1':i,'2':j,'4':d},__gm:{'1':i,'2':j,'4':d},stop:function(){this.stopPropagation();}
,getButton:function(){switch(this._type){case f:return j;case c:if(qx.core.Environment.get(k)===l&&qx.core.Environment.get(h)<9){return i;}
;default:if(!(qx.core.Environment.get(b)==a&&qx.core.Environment.get(h)<=8)){if(this._native.button===-1){return this.__gl[this._native.buttons]||e;}
;return this.__gk[this._native.button]||e;}
else {return this.__gm[this._native.button]||e;}
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
,getDocumentLeft:function(){var x=qx.event.type.Mouse.prototype.getDocumentLeft.call(this);if(x==0&&this.getPointerType()==d){x=Math.round(this._native._original.changedTouches[0].pageX)||0;}
;return x;}
,getDocumentTop:function(){var y=qx.event.type.Mouse.prototype.getDocumentTop.call(this);if(y==0&&this.getPointerType()==d){y=Math.round(this._native._original.changedTouches[0].pageY)||0;}
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
(function(){var a="mshtml",b="engine.name",c="pointerup",d="dispose",e="useraction",f="pointercancel",g="pointerdown",h="pointermove",i="qx.event.handler.Pointer",j="browser.documentmode";qx.Class.define(i,{extend:qx.event.handler.PointerCore,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{pointermove:1,pointerover:1,pointerout:1,pointerdown:1,pointerup:1,pointercancel:1,gesturebegin:1,gesturemove:1,gesturefinish:1,gesturecancel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true},construct:function(k){this.__fy=k;this.__cv=k.getWindow();this.__fJ=this.__cv.document;qx.event.handler.PointerCore.apply(this,[this.__fJ]);this.__fJ.$$pointerHandler=this;}
,members:{__fy:null,__cv:null,__fJ:null,canHandleEvent:function(m,l){}
,registerEvent:function(p,o,n){}
,unregisterEvent:function(s,r,q){}
,_initPointerObserver:function(){var t=false;if(qx.core.Environment.get(b)==a&&qx.core.Environment.get(j)<9){t=true;}
;this._initObserver(this._onPointerEvent,t);}
,_fireEvent:function(u,v,w){if(!w){w=qx.bom.Event.getTarget(u);}
;if(!v){v=u.type;}
;v=qx.event.handler.PointerCore.MSPOINTER_TO_POINTER_MAPPING[v]||v;if(w&&w.nodeType){qx.event.type.dom.Pointer.normalize(u);u.srcElement=w;qx.event.Registration.fireEvent(w,v,qx.event.type.Pointer,[u,w,null,true,true]);if(v==g||v==c||v==h||v==f){qx.event.Registration.fireEvent(this.__fJ,qx.event.handler.PointerCore.POINTER_TO_GESTURE_MAPPING[v],qx.event.type.Pointer,[u,w,null,false,false]);}
;qx.event.Registration.fireEvent(this.__cv,e,qx.event.type.Data,[v]);}
;}
,_onPointerEvent:function(x){var y=qx.event.handler.PointerCore.MSPOINTER_TO_POINTER_MAPPING[x.type]||x.type;this._fireEvent(x,y,qx.bom.Event.getTarget(x));}
,dispose:function(){this.__gn(d);this.__fy=this.__cv=this.__fJ=null;}
,__gn:function(A,z){qx.event.handler.PointerCore.prototype[A].apply(this,z||[]);}
},defer:function(B){qx.event.Registration.addHandler(B);qx.event.Registration.getManager(document).getHandler(B);}
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
(function(){var a="swipe",b="pinch",c="event.dispatchevent",d="gesturemove",e="touch",f="longtap",g="event.mousewheel",h="roll",i="dblclick",j="wheel",k="rotate",l="trackstart",m="gesturefinish",n="y",o="browser.documentmode",p="dbltap",q="qx.event.handler.GestureCore",r="right",s="mshtml",t="engine.name",u="gesturecancel",v="gesturebegin",w="track",z="trackend",A="left",B="tap",C="on",D="down",E="x",F="up";qx.Bootstrap.define(q,{extend:Object,statics:{TYPES:[B,a,f,p,w,l,z,k,b,h],GESTURE_EVENTS:[v,m,d,u],TAP_MAX_DISTANCE:{"touch":40,"mouse":50,"pen":20},SWIPE_DIRECTION:{x:[A,r],y:[F,D]},LONGTAP_TIME:500,DOUBLETAP_TIME:500,ROLL_FACTOR:18},construct:function(G,H){this.__cY=G;this.__da=H;this.__dr={};this.__ds={};this.__dt={};this._initObserver();}
,members:{__cY:null,__da:null,__dr:null,__du:null,__dv:null,__dw:null,__dx:null,__ds:null,__dy:null,__dt:null,__dz:null,_initObserver:function(){qx.event.handler.GestureCore.TYPES.forEach(function(J){if(!this.__cY[C+J]){this.__cY[C+J]=true;}
;}
.bind(this));qx.event.handler.GestureCore.GESTURE_EVENTS.forEach(function(K){qxWeb(this.__cY).on(K,this.checkAndFireGesture,this);}
.bind(this));if(qx.core.Environment.get(t)==s&&qx.core.Environment.get(o)<9){qxWeb(this.__cY).on(i,this._onDblClick,this);}
;var I=qx.core.Environment.get(g);qxWeb(I.target).on(I.type,this._fireRoll,this);}
,_stopObserver:function(){qx.event.handler.GestureCore.GESTURE_EVENTS.forEach(function(M){qxWeb(this.__cY).off(M,this.checkAndFireGesture,this);}
.bind(this));if(qx.core.Environment.get(t)==s&&qx.core.Environment.get(o)<9){qxWeb(this.__cY).off(i,this._onDblClick,this);}
;var L=qx.core.Environment.get(g);qxWeb(L.target).off(L.type,this._fireRoll,this);}
,checkAndFireGesture:function(N,O,P){if(!O){O=N.type;}
;if(!P){P=qx.bom.Event.getTarget(N);}
;if(O==v){this.gestureBegin(N,P);}
else if(O==d){this.gestureMove(N,P);}
else if(O==m){this.gestureFinish(N,P);}
else if(O==u){this.gestureCancel(N.pointerId);}
;}
,gestureBegin:function(Q,R){if(this.__dr[Q.pointerId]){this.__dH(this.__dr[Q.pointerId]);delete this.__dr[Q.pointerId];}
;this.__dr[Q.pointerId]={"startTime":new Date().getTime(),"lastEventTime":new Date().getTime(),"startX":Q.clientX,"startY":Q.clientY,"clientX":Q.clientX,"clientY":Q.clientY,"velocityX":0,"velocityY":0,"target":R,"isTap":true,"isPrimary":Q.isPrimary,"longTapTimer":window.setTimeout(this.__dG.bind(this,Q,R),qx.event.handler.GestureCore.LONGTAP_TIME)};if(Q.isPrimary){this.__dw=false;this.__dv=R;this.__dD(l,Q,R);}
else {this.__dw=true;if(Object.keys(this.__dr).length===2){this.__dx=this._calcAngle();this.__dz=this._calcDistance();}
;}
;}
,gestureMove:function(T,U){var V=this.__dr[T.pointerId];if(V){var S=V.clientX;var W=V.clientY;V.clientX=T.clientX;V.clientY=T.clientY;V.lastEventTime=new Date().getTime();if(S){V.velocityX=V.clientX-S;}
;if(W){V.velocityY=V.clientY-W;}
;if(Object.keys(this.__dr).length===2){this.__dE(T,V.target);this.__dF(T,V.target);}
;if(!this.__dw){this.__dD(w,T,V.target);this._fireRoll(T,e,V.target);}
;if(V.isTap){V.isTap=this._isBelowTapMaxDistance(T);if(!V.isTap){this.__dH(V);}
;}
;}
;}
,_hasIntermediaryHandler:function(X){while(X&&X!==this.__cY){if(X.$$gestureHandler){return true;}
;X=X.parentNode;}
;return false;}
,gestureFinish:function(Y,ba){if(!this.__dr[Y.pointerId]){return;}
;var be=this.__dr[Y.pointerId];this.__dH(be);if(this._hasIntermediaryHandler(ba)){return;}
;this.__dA(be.velocityX,be.velocityY,Y,be.target);this.__dD(z,Y,be.target);if(ba!==be.target){delete this.__dr[Y.pointerId];return;}
;if(be.isTap){this._fireEvent(Y,B,Y.target||ba);if(Object.keys(this.__ds).length>0){var bc=Date.now()-qx.event.handler.GestureCore.DOUBLETAP_TIME;for(var bd in this.__ds){if(bd<bc){delete this.__ds[bd];}
else {if(this.__dB(this.__ds[bd].x,this.__ds[bd].y,Y.clientX,Y.clientY,Y.getPointerType())){this._fireEvent(Y,p,Y.target||ba);}
;}
;}
;}
;this.__ds[Date.now()]={x:Y.clientX,y:Y.clientY};}
else if(!this._isBelowTapMaxDistance(Y)){var bb=this.__dC(Y,ba);if(bb){Y.swipe=bb;this._fireEvent(Y,a,Y.target||ba);}
;}
;delete this.__dr[Y.pointerId];}
,stopMomentum:function(bf){this.__dt[bf]=true;}
,gestureCancel:function(bg){if(this.__dr[bg]){this.__dH(this.__dr[bg]);delete this.__dr[bg];}
;}
,__dA:function(bl,bm,bi,bj,bo){var bn=bi.timeoutId;if((Math.abs(bm)<1&&Math.abs(bl)<1)||this.__dt[bn]){delete this.__dt[bn];return;}
;if(!bo){bo=1;var bk=2.8;bm=bm/bk;bl=bl/bk;}
;bo+=0.0006;bm=bm/bo;bl=bl/bo;var bh=qx.bom.AnimationFrame.request(qx.lang.Function.bind(function(bp,bq,br,bs,bt){this.__dA(bp,bq,br,bs,bt);}
,this,bl,bm,bi,bj,bo));bl=Math.round(bl*100)/100;bm=Math.round(bm*100)/100;bi.delta={x:-bl,y:-bm};bi.momentum=true;bi.timeoutId=bh;this._fireEvent(bi,h,bi.target||bj);}
,_calcAngle:function(){var bv=null;var bw=null;for(var bu in this.__dr){var bx=this.__dr[bu];if(bv===null){bv=bx;}
else {bw=bx;}
;}
;var x=bv.clientX-bw.clientX;var y=bv.clientY-bw.clientY;return (360+Math.atan2(y,x)*(180/Math.PI))%360;}
,_calcDistance:function(){var by=null;var bz=null;for(var bB in this.__dr){var bC=this.__dr[bB];if(by===null){by=bC;}
else {bz=bC;}
;}
;var bA=Math.sqrt(Math.pow(by.clientX-bz.clientX,2)+Math.pow(by.clientY-bz.clientY,2));return bA;}
,_isBelowTapMaxDistance:function(bE){var bF=this._getDeltaCoordinates(bE);var bD=qx.event.handler.GestureCore.TAP_MAX_DISTANCE[bE.getPointerType()];if(!bF){return null;}
;return (Math.abs(bF.x)<=bD&&Math.abs(bF.y)<=bD);}
,__dB:function(bG,bK,bL,bM,bN){var bJ=qx.event.handler.GestureCore;var bH=Math.abs(bG-bL)<bJ.TAP_MAX_DISTANCE[bN];var bI=Math.abs(bK-bM)<bJ.TAP_MAX_DISTANCE[bN];return bH&&bI;}
,_getDeltaCoordinates:function(bQ){var bR=this.__dr[bQ.pointerId];if(!bR){return null;}
;var bO=bQ.clientX-bR.startX;var bP=bQ.clientY-bR.startY;var bS=E;if(Math.abs(bO/bP)<1){bS=n;}
;return {"x":bO,"y":bP,"axis":bS};}
,_fireEvent:function(bU,bW,bV){if(!this.__cY){return;}
;var bT;if(qx.core.Environment.get(c)){bT=new qx.event.type.dom.Custom(bW,bU,{bubbles:true,swipe:bU.swipe,scale:bU.scale,angle:bU.angle,delta:bU.delta,pointerType:bU.pointerType,momentum:bU.momentum});bV.dispatchEvent(bT);}
else if(this.__da){bT=new qx.event.type.dom.Custom(bW,bU,{target:this.__cY,currentTarget:this.__cY,srcElement:this.__cY,swipe:bU.swipe,scale:bU.scale,angle:bU.angle,delta:bU.delta,pointerType:bU.pointerType,momentum:bU.momentum});this.__da.emit(bW,bU);}
;}
,_onDblClick:function(bX){var bY=qx.bom.Event.getTarget(bX);this._fireEvent(bX,B,bY);this._fireEvent(bX,p,bY);}
,__dC:function(cc,cd){var cj=this.__dr[cc.pointerId];if(!cj){return null;}
;var cf=qx.event.handler.GestureCore;var ci=this._getDeltaCoordinates(cc);var cg=new Date().getTime()-cj.startTime;var ck=(Math.abs(ci.x)>=Math.abs(ci.y))?E:n;var ca=ci[ck];var cb=cf.SWIPE_DIRECTION[ck][ca<0?0:1];var ch=(cg!==0)?ca/cg:0;var ce={startTime:cj.startTime,duration:cg,axis:ck,direction:cb,distance:ca,velocity:ch};return ce;}
,__dD:function(cl,cm,cn){cm.delta=this._getDeltaCoordinates(cm);this._fireEvent(cm,cl,cm.target||cn);}
,_fireRoll:function(cp,co,cq){if(cp.type===qx.core.Environment.get(g).type){cp.delta={x:qx.util.Wheel.getDelta(cp,E)*qx.event.handler.GestureCore.ROLL_FACTOR,y:qx.util.Wheel.getDelta(cp,n)*qx.event.handler.GestureCore.ROLL_FACTOR};cp.delta.axis=Math.abs(cp.delta.x/cp.delta.y)<1?n:E;cp.pointerType=j;}
else {var cr=this.__dr[cp.pointerId];cp.delta={x:-cr.velocityX,y:-cr.velocityY,axis:Math.abs(cr.velocityX/cr.velocityY)<1?n:E};}
;this._fireEvent(cp,h,cp.target||cq);}
,__dE:function(cs,cu){if(!cs.isPrimary){var ct=this._calcAngle();cs.angle=Math.round((ct-this.__dx)%360);this._fireEvent(cs,k,this.__dv);}
;}
,__dF:function(cx,cy){if(!cx.isPrimary){var cv=this._calcDistance();var cw=cv/this.__dz;cx.scale=(Math.round(cw*100)/100);this._fireEvent(cx,b,this.__dv);}
;}
,__dG:function(cz,cA){var cB=this.__dr[cz.pointerId];if(cB){this._fireEvent(cz,f,cz.target||cA);cB.longTapTimer=null;cB.isTap=false;}
;}
,__dH:function(cC){if(cC.longTapTimer){window.clearTimeout(cC.longTapTimer);cC.longTapTimer=null;}
;}
,isBelowTapMaxDistance:function(event){var cD=this._calcDelta(event);var cE=qx.event.handler.GestureCore;return (Math.abs(cD.x)<=cE.TAP_MAX_DISTANCE&&Math.abs(cD.y)<=cE.TAP_MAX_DISTANCE);}
,dispose:function(){for(var cF in this.__dr){this.__dH(cF);}
;this._stopObserver();this.__cY=this.__da=null;}
}});}
)();
(function(){var a="x",b="y",c="qx.util.Wheel";qx.Bootstrap.define(c,{statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1,getDelta:function(e,d){if(d===undefined){if(f===undefined){var f=-e.wheelDelta;if(e.wheelDelta===undefined){f=e.detail;}
;}
;return this.__dN(f);}
;if(d===a){var x=0;if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__dN(-e.wheelDeltaX):0;}
;}
else {if(e.axis&&e.axis==e.HORIZONTAL_AXIS){if((e.detail!==undefined)&&(e.detail>0)){x=this.__dN(e.detail);}
else if(e.deltaX!==undefined){x=this.__dN(e.deltaX);}
;}
;}
;return x;}
;if(d===b){var y=0;if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__dN(-e.wheelDeltaY):0;}
else {y=this.__dN(-e.wheelDelta);}
;}
else {if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){if((e.detail!==undefined)&&(e.detail>0)){y=this.__dN(e.detail);}
else if(e.deltaY!==undefined){y=this.__dN(e.deltaY);}
;}
;}
;return y;}
;return 0;}
,__dN:function(j){var g=Math.abs(j);if(qx.util.Wheel.MINSCROLL==null||qx.util.Wheel.MINSCROLL>g){qx.util.Wheel.MINSCROLL=g;this.__dO();}
;if(qx.util.Wheel.MAXSCROLL==null||qx.util.Wheel.MAXSCROLL<g){qx.util.Wheel.MAXSCROLL=g;this.__dO();}
;if(qx.util.Wheel.MAXSCROLL===g&&qx.util.Wheel.MINSCROLL===g){return 2*(j/g);}
;var h=qx.util.Wheel.MAXSCROLL-qx.util.Wheel.MINSCROLL;var i=(j/h)*Math.log(h)*qx.util.Wheel.FACTOR;return i<0?Math.min(i,-1):Math.max(i,1);}
,__dO:function(){var k=qx.util.Wheel.MAXSCROLL||0;var n=qx.util.Wheel.MINSCROLL||k;if(k<=n){return;}
;var l=k-n;var m=(k/l)*Math.log(l);if(m==0){m=1;}
;qx.util.Wheel.FACTOR=6/m;}
}});}
)();
(function(){var a="dblclick",b="mshtml",c="engine.name",d="dispose",e="useraction",f="gesturemove",g="gesturecancel",h="checkAndFireGesture",i="gesturebegin",j="qx.event.handler.Gesture",k="gesturefinish",l="browser.documentmode";qx.Class.define(j,{extend:qx.event.handler.GestureCore,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{tap:1,swipe:1,longtap:1,dbltap:1,rotate:1,pinch:1,track:1,trackstart:1,trackend:1,roll:1},GESTURE_EVENTS:[i,k,f,g],TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,EVENT_CLASSES:{"tap":qx.event.type.Tap,"longtap":qx.event.type.Tap,"dbltap":qx.event.type.Tap,"swipe":qx.event.type.Swipe,"rotate":qx.event.type.Rotate,"pinch":qx.event.type.Pinch,"track":qx.event.type.Track,"trackstart":qx.event.type.Track,"trackend":qx.event.type.Track,"roll":qx.event.type.Roll}},construct:function(m){this.__fy=m;this.__cv=m.getWindow();this.__fJ=this.__cv.document;qx.event.handler.GestureCore.apply(this,[this.__fJ]);}
,members:{__fy:null,__cv:null,__fJ:null,__cQ:null,__go:null,__gp:null,canHandleEvent:function(o,n){}
,registerEvent:function(r,q,p){}
,unregisterEvent:function(u,t,s){}
,_initObserver:function(){this.__cQ=qx.lang.Function.listener(this.checkAndFireGesture,this);qx.event.handler.Gesture.GESTURE_EVENTS.forEach(function(w){qx.event.Registration.addListener(this.__fJ,w,this.__cQ,this);}
.bind(this));if(qx.core.Environment.get(c)==b&&qx.core.Environment.get(l)<9){this.__go=qx.lang.Function.listener(this._onDblClick,this);qx.bom.Event.addNativeListener(this.__fJ,a,this.__go);}
;var v=qx.bom.client.Event.getMouseWheel(this.__cv);this.__gp=qx.lang.Function.listener(this._fireRoll,this);qx.bom.Event.addNativeListener(v.target,v.type,this.__gp,this);}
,checkAndFireGesture:function(y,x,z){this.__gn(h,[y.getNativeEvent(),y.getType(),y.getTarget()]);}
,_stopObserver:function(){qx.event.handler.Gesture.GESTURE_EVENTS.forEach(function(B){qx.event.Registration.removeListener(this.__fJ,B,this.__cQ);}
.bind(this));if(qx.core.Environment.get(c)==b&&qx.core.Environment.get(l)<9){qx.bom.Event.removeNativeListener(this.__fJ,a,this.__go);}
;var A=qx.bom.client.Event.getMouseWheel(this.__cv);qx.bom.Event.removeNativeListener(A.target,A.type,this.__gp);}
,_hasIntermediaryHandler:function(C){return false;}
,_fireEvent:function(E,D,F){if(!F){F=qx.bom.Event.getTarget(E);}
;if(!D){D=E.type;}
;var G=qx.event.handler.Gesture.EVENT_CLASSES[D]||qx.event.type.Pointer;if(F&&F.nodeType){qx.event.Registration.fireEvent(F,D,G,[E,F,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cv,e,qx.event.type.Data,[D]);}
,dispose:function(){this._stopObserver();this.__gn(d);this.__fy=this.__cv=this.__fJ=this.__go=null;}
,__gn:function(I,H){qx.event.handler.GestureCore.prototype[I].apply(this,H||[]);}
},defer:function(J){qx.event.Registration.addHandler(J);qx.event.Registration.getManager(document).getHandler(J);}
});}
)();
(function(){var a="-",b="qx.event.handler.Element",c="load",d="iframe";qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(e){qx.core.Object.call(this);this._manager=e;this._registeredEvents={};}
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
(function(){var a="qx.event.handler.UserAction";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);this.__fy=b;this.__cv=b.getWindow();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fy:null,__cv:null,canHandleEvent:function(d,c){}
,registerEvent:function(g,f,e){}
,unregisterEvent:function(j,i,h){}
},destruct:function(){this.__fy=this.__cv=null;}
,defer:function(k){qx.event.Registration.addHandler(k);}
});}
)();
(function(){var a="dblclick",b="engine.version",c="os.name",d="mouseup",e="mousedown",f="useraction",g="webkit",h="contextmenu",i="mousewheel",j="engine.name",k="mouseover",l="mouseout",m="gecko",n="ios",o="click",p="mousemove",q="qx.event.handler.Mouse",r="on";qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(s){qx.core.Object.call(this);this.__fy=s;this.__cv=s.getWindow();this.__fJ=this.__cv.document;this._initButtonObserver();this._initMoveObserver();this._initWheelObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__gq:null,__gr:null,__gs:null,__gt:null,__gu:null,__fy:null,__cv:null,__fJ:null,__gv:null,canHandleEvent:function(u,t){}
,registerEvent:qx.core.Environment.get(c)===n?function(x,w,v){x[r+w]=(function(){return null;}
);}
:(function(){return null;}
),unregisterEvent:qx.core.Environment.get(c)===n?function(A,z,y){A[r+z]=undefined;}
:(function(){return null;}
),__gw:function(B,C,D){if(!D){D=qx.bom.Event.getTarget(B);}
;if(D&&D.nodeType){qx.event.Registration.fireEvent(D,C||B.type,C==i?qx.event.type.MouseWheel:qx.event.type.Mouse,[B,D,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cv,f,qx.event.type.Data,[C||B.type]);}
,preventNextClick:function(){this.__gv=true;}
,_initButtonObserver:function(){this.__gq=qx.lang.Function.listener(this._onButtonEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__fJ,e,this.__gq);Event.addNativeListener(this.__fJ,d,this.__gq);Event.addNativeListener(this.__fJ,o,this.__gq);Event.addNativeListener(this.__fJ,a,this.__gq);Event.addNativeListener(this.__fJ,h,this.__gq);}
,_initMoveObserver:function(){this.__gr=qx.lang.Function.listener(this._onMoveEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__fJ,p,this.__gr);Event.addNativeListener(this.__fJ,k,this.__gr);Event.addNativeListener(this.__fJ,l,this.__gr);}
,_initWheelObserver:function(){this.__gs=qx.lang.Function.listener(this._onWheelEvent,this);var E=qx.bom.client.Event.getMouseWheel(this.__cv);qx.bom.Event.addNativeListener(E.target,E.type,this.__gs);}
,_stopButtonObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__fJ,e,this.__gq);Event.removeNativeListener(this.__fJ,d,this.__gq);Event.removeNativeListener(this.__fJ,o,this.__gq);Event.removeNativeListener(this.__fJ,a,this.__gq);Event.removeNativeListener(this.__fJ,h,this.__gq);}
,_stopMoveObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__fJ,p,this.__gr);Event.removeNativeListener(this.__fJ,k,this.__gr);Event.removeNativeListener(this.__fJ,l,this.__gr);}
,_stopWheelObserver:function(){var F=qx.bom.client.Event.getMouseWheel(this.__cv);qx.bom.Event.removeNativeListener(F.target,F.type,this.__gs);}
,_onMoveEvent:qx.event.GlobalError.observeMethod(function(G){this.__gw(G);}
),_onButtonEvent:qx.event.GlobalError.observeMethod(function(J){var I=J.type;var K=qx.bom.Event.getTarget(J);if(I==o&&this.__gv){delete this.__gv;return;}
;if(qx.core.Environment.get(j)==m||qx.core.Environment.get(j)==g){if(K&&K.nodeType==3){K=K.parentNode;}
;}
;var H=qx.event.handler.DragDrop&&this.__fy.getHandler(qx.event.handler.DragDrop).isSessionActive();if(H&&I==o){return;}
;if(this.__gx){this.__gx(J,I,K);}
;if(this.__gz){this.__gz(J,I,K);}
;this.__gw(J,I,K);if(this.__gy){this.__gy(J,I,K);}
;if(this.__gA&&!H){this.__gA(J,I,K);}
;this.__gt=I;}
),_onWheelEvent:qx.event.GlobalError.observeMethod(function(L){this.__gw(L,i);}
),__gx:qx.core.Environment.select(j,{"webkit":function(N,M,O){if(parseFloat(qx.core.Environment.get(b))<530){if(M==h){this.__gw(N,d,O);}
;}
;}
,"default":null}),__gy:qx.core.Environment.select(j,{"opera":function(P,Q,R){if(Q==d&&P.button==2){this.__gw(P,h,R);}
;}
,"default":null}),__gz:qx.core.Environment.select(j,{"mshtml":function(S,T,U){if(S.target!==undefined){return;}
;if(T==d&&this.__gt==o){this.__gw(S,e,U);}
else if(T==a){this.__gw(S,o,U);}
;}
,"default":null}),__gA:qx.core.Environment.select(j,{"mshtml":null,"default":function(W,V,X){switch(V){case e:this.__gu=X;break;case d:if(X!==this.__gu){var Y=qx.dom.Hierarchy.getCommonParent(X,this.__gu);if(Y){this.__gw(W,o,Y);}
;}
;};}
})},destruct:function(){this._stopButtonObserver();this._stopMoveObserver();this._stopWheelObserver();this.__fy=this.__cv=this.__fJ=this.__gu=null;}
,defer:function(ba){qx.event.Registration.addHandler(ba);}
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
(function(){var a="mshtml",b="engine.name",c="keypress",d="useraction",e="win",f="text",g="keyinput",h="os.name",i="webkit",j="input",k="gecko",l="off",m="keydown",n="autoComplete",o="keyup",p="qx.event.handler.Keyboard";qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){qx.core.Object.call(this);this.__fy=q;this.__cv=q.getWindow();if((qx.core.Environment.get(b)==k)){this.__fJ=this.__cv;}
else {this.__fJ=this.__cv.document.documentElement;}
;this.__gB={};this._initKeyObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__gC:null,__fy:null,__cv:null,__fJ:null,__gB:null,__gD:null,__gE:null,__gF:null,canHandleEvent:function(s,r){}
,registerEvent:function(v,u,t){}
,unregisterEvent:function(y,x,w){}
,_fireInputEvent:function(A,z){var B=this.__gG();if(B&&B.offsetWidth!=0){var event=qx.event.Registration.createEvent(g,qx.event.type.KeyInput,[A,B,z]);this.__fy.dispatchEvent(B,event);}
;if(this.__cv){qx.event.Registration.fireEvent(this.__cv,d,qx.event.type.Data,[g]);}
;}
,_fireSequenceEvent:function(D,F,C){var E=this.__gG();var G=D.keyCode;var event=qx.event.Registration.createEvent(F,qx.event.type.KeySequence,[D,E,C]);this.__fy.dispatchEvent(E,event);if(qx.core.Environment.get(b)==a||qx.core.Environment.get(b)==i){if(F==m&&event.getDefaultPrevented()){if(!qx.event.util.Keyboard.isNonPrintableKeyCode(G)&&!this._emulateKeyPress[G]){this._fireSequenceEvent(D,c,C);}
;}
;}
;if(this.__cv){qx.event.Registration.fireEvent(this.__cv,d,qx.event.type.Data,[F]);}
;}
,__gG:function(){var H=this.__fy.getHandler(qx.event.handler.Focus);var I=H.getActive();if(!I||I.offsetWidth==0){I=H.getFocus();}
;if(!I||I.offsetWidth==0){I=this.__fy.getWindow().document.body;}
;return I;}
,_initKeyObserver:function(){this.__gC=qx.lang.Function.listener(this.__gH,this);this.__gF=qx.lang.Function.listener(this.__gJ,this);var Event=qx.bom.Event;Event.addNativeListener(this.__fJ,o,this.__gC);Event.addNativeListener(this.__fJ,m,this.__gC);Event.addNativeListener(this.__fJ,c,this.__gF);}
,_stopKeyObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__fJ,o,this.__gC);Event.removeNativeListener(this.__fJ,m,this.__gC);Event.removeNativeListener(this.__fJ,c,this.__gF);for(var K in (this.__gE||{})){var J=this.__gE[K];Event.removeNativeListener(J.target,c,J.callback);}
;delete (this.__gE);}
,__gH:qx.event.GlobalError.observeMethod(qx.core.Environment.select(b,{"mshtml":function(N){N=window.event||N;var O=N.keyCode;var M=0;var L=N.type;if(!(this.__gB[O]==m&&L==m)){this._idealKeyHandler(O,M,L,N);}
;if(L==m){if(qx.event.util.Keyboard.isNonPrintableKeyCode(O)||this._emulateKeyPress[O]){this._idealKeyHandler(O,M,c,N);}
;}
;this.__gB[O]=L;}
,"gecko":function(Q){var S=0;var U=Q.keyCode;var T=Q.type;var R=qx.event.util.Keyboard;if(qx.core.Environment.get(h)==e){var P=U?R.keyCodeToIdentifier(U):R.charCodeToIdentifier(S);if(!(this.__gB[P]==m&&T==m)){this._idealKeyHandler(U,S,T,Q);}
;this.__gB[P]=T;}
else {this._idealKeyHandler(U,S,T,Q);}
;this.__gI(Q.target,T,U);}
,"webkit":function(X){var Y=0;var W=0;var V=X.type;Y=X.keyCode;this._idealKeyHandler(Y,W,V,X);if(V==m){if(qx.event.util.Keyboard.isNonPrintableKeyCode(Y)||this._emulateKeyPress[Y]){this._idealKeyHandler(Y,W,c,X);}
;}
;this.__gB[Y]=V;}
,"opera":function(ba){this.__gD=ba.keyCode;this._idealKeyHandler(ba.keyCode,0,ba.type,ba);}
})),__gI:qx.core.Environment.select(b,{"gecko":function(bc,be,bf){if(be===m&&(bf==33||bf==34||bf==38||bf==40)&&bc.type==f&&bc.tagName.toLowerCase()===j&&bc.getAttribute(n)!==l){if(!this.__gE){this.__gE={};}
;var bb=qx.core.ObjectRegistry.toHashCode(bc);if(this.__gE[bb]){return;}
;var self=this;this.__gE[bb]={target:bc,callback:function(bg){qx.bom.Event.stopPropagation(bg);self.__gJ(bg);}
};var bd=qx.event.GlobalError.observeMethod(this.__gE[bb].callback);qx.bom.Event.addNativeListener(bc,c,bd);}
;}
,"default":null}),__gJ:qx.event.GlobalError.observeMethod(qx.core.Environment.select(b,{"mshtml":function(bh){bh=window.event||bh;if(this._charCode2KeyCode[bh.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bh.keyCode],0,bh.type,bh);}
else {this._idealKeyHandler(0,bh.keyCode,bh.type,bh);}
;}
,"gecko":function(bi){var bj=bi.charCode;var bk=bi.type;this._idealKeyHandler(bi.keyCode,bj,bk,bi);}
,"webkit":function(bl){if(this._charCode2KeyCode[bl.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bl.keyCode],0,bl.type,bl);}
else {this._idealKeyHandler(0,bl.keyCode,bl.type,bl);}
;}
,"opera":function(bm){var bo=bm.keyCode;var bn=bm.type;if(bo!=this.__gD){this._idealKeyHandler(0,this.__gD,bn,bm);}
else {if(qx.event.util.Keyboard.keyCodeToIdentifierMap[bm.keyCode]){this._idealKeyHandler(bm.keyCode,0,bm.type,bm);}
else {this._idealKeyHandler(0,bm.keyCode,bm.type,bm);}
;}
;}
})),_idealKeyHandler:function(bs,bq,bt,br){var bp;if(bs||(!bs&&!bq)){bp=qx.event.util.Keyboard.keyCodeToIdentifier(bs);this._fireSequenceEvent(br,bt,bp);}
else {bp=qx.event.util.Keyboard.charCodeToIdentifier(bq);this._fireSequenceEvent(br,c,bp);this._fireInputEvent(br,bq);}
;}
,_emulateKeyPress:qx.core.Environment.select(b,{"mshtml":{'8':true,'9':true},"webkit":{'8':true,'9':true,'27':true},"default":{}}),_identifierToKeyCode:function(bu){return qx.event.util.Keyboard.identifierToKeyCodeMap[bu]||bu.charCodeAt(0);}
},destruct:function(){this._stopKeyObserver();this.__gD=this.__fy=this.__cv=this.__fJ=this.__gB=null;}
,defer:function(bv,bw){qx.event.Registration.addHandler(bv);if((qx.core.Environment.get(b)==a)||qx.core.Environment.get(b)==i){bw._charCode2KeyCode={'13':13,'27':27};}
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
;switch(bx){case e:case a:case J:case G:return true;default:return false;};}
,isPrintableKeyIdentifier:function(by){if(by===j){return true;}
else {return this.identifierToKeyCodeMap[by]?false:true;}
;}
},defer:function(bz,bA){if(!bz.identifierToKeyCodeMap){bz.identifierToKeyCodeMap={};for(var bB in bz.keyCodeToIdentifierMap){bz.identifierToKeyCodeMap[bz.keyCodeToIdentifierMap[bB]]=parseInt(bB,10);}
;for(var bB in bz.specialCharCodeMap){bz.identifierToKeyCodeMap[bz.specialCharCodeMap[bB]]=parseInt(bB,10);}
;}
;}
});}
)();
(function(){var a="selectstart",b="os.name",c="blur",d="mousedown",e="focus",f="os.version",g="qx.event.handler.Focus",h="_applyFocus",i="DOMFocusIn",j="deactivate",k="textarea",l="_applyActive",m='character',n="input",o="ios",p="",q="qxSelectable",r="tabIndex",s="off",t="on",u="activate",v="focusin",w="mshtml",x="engine.name",y="mouseup",z="DOMFocusOut",A="focusout",B="qxKeepFocus",C="draggesture",D="qxKeepActive";qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(E){qx.core.Object.call(this);this._manager=E;this._window=E.getWindow();this._document=this._window.document;this._root=this._document.documentElement;this._body=this._document.body;if((qx.core.Environment.get(b)==o&&parseFloat(qx.core.Environment.get(f))>6)&&(!qx.application.Inline||!qx.core.Init.getApplication() instanceof qx.application.Inline)){this.__gK=true;}
;this._initObserver();}
,properties:{active:{apply:l,nullable:true},focus:{apply:h,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select(x,{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gL:null,__gM:null,__gN:null,__gO:null,__gP:null,__gQ:null,__gR:null,__gS:null,__gT:null,__gU:null,__gV:p,__gW:p,__gK:false,__gX:null,canHandleEvent:function(G,F){}
,registerEvent:function(J,I,H){}
,unregisterEvent:function(M,L,K){}
,focus:function(N){if((qx.core.Environment.get(x)==w)){window.setTimeout(function(){try{N.focus();var O=qx.bom.Selection.get(N);if(O.length==0){var P=N.createTextRange();P.moveStart(m,N.value.length);P.collapse();P.select();}
;}
catch(Q){}
;}
,0);}
else {try{N.focus();}
catch(R){}
;}
;this.setFocus(N);this.setActive(N);}
,activate:function(S){this.setActive(S);}
,blur:function(T){try{T.blur();}
catch(U){}
;if(this.getActive()===T){this.resetActive();}
;if(this.getFocus()===T){this.resetFocus();}
;}
,deactivate:function(V){if(this.getActive()===V){this.resetActive();}
;}
,tryActivate:function(X){var W=this.__hm(X);if(W){this.setActive(W);}
;}
,__gw:function(Y,bb,be,bd){var bc=qx.event.Registration;var ba=bc.createEvent(be,qx.event.type.Focus,[Y,bb,bd]);bc.dispatchEvent(Y,ba);}
,_windowFocused:true,__gY:function(){if(this._windowFocused){this._windowFocused=false;this.__gw(this._window,null,c,false);}
;}
,__ha:function(){if(!this._windowFocused){this._windowFocused=true;this.__gw(this._window,null,e,false);}
;}
,_initObserver:qx.core.Environment.select(x,{"gecko":function(){this.__gL=qx.lang.Function.listener(this.__hg,this);this.__gM=qx.lang.Function.listener(this.__hh,this);this.__gN=qx.lang.Function.listener(this.__hf,this);this.__gO=qx.lang.Function.listener(this.__he,this);this.__gP=qx.lang.Function.listener(this.__hb,this);qx.bom.Event.addNativeListener(this._document,d,this.__gL,true);qx.bom.Event.addNativeListener(this._document,y,this.__gM,true);qx.bom.Event.addNativeListener(this._window,e,this.__gN,true);qx.bom.Event.addNativeListener(this._window,c,this.__gO,true);qx.bom.Event.addNativeListener(this._window,C,this.__gP,true);}
,"mshtml":function(){this.__gL=qx.lang.Function.listener(this.__hg,this);this.__gM=qx.lang.Function.listener(this.__hh,this);this.__gR=qx.lang.Function.listener(this.__hc,this);this.__gS=qx.lang.Function.listener(this.__hd,this);this.__gQ=qx.lang.Function.listener(this.__hj,this);qx.bom.Event.addNativeListener(this._document,d,this.__gL);qx.bom.Event.addNativeListener(this._document,y,this.__gM);qx.bom.Event.addNativeListener(this._document,v,this.__gR);qx.bom.Event.addNativeListener(this._document,A,this.__gS);qx.bom.Event.addNativeListener(this._document,a,this.__gQ);}
,"webkit":function(){this.__gL=qx.lang.Function.listener(this.__hg,this);this.__gM=qx.lang.Function.listener(this.__hh,this);this.__gS=qx.lang.Function.listener(this.__hd,this);this.__gN=qx.lang.Function.listener(this.__hf,this);this.__gO=qx.lang.Function.listener(this.__he,this);this.__gQ=qx.lang.Function.listener(this.__hj,this);qx.bom.Event.addNativeListener(this._document,d,this.__gL,true);qx.bom.Event.addNativeListener(this._document,y,this.__gM,true);qx.bom.Event.addNativeListener(this._document,a,this.__gQ,false);qx.bom.Event.addNativeListener(this._window,z,this.__gS,true);qx.bom.Event.addNativeListener(this._window,e,this.__gN,true);qx.bom.Event.addNativeListener(this._window,c,this.__gO,true);}
,"opera":function(){this.__gL=qx.lang.Function.listener(this.__hg,this);this.__gM=qx.lang.Function.listener(this.__hh,this);this.__gR=qx.lang.Function.listener(this.__hc,this);this.__gS=qx.lang.Function.listener(this.__hd,this);qx.bom.Event.addNativeListener(this._document,d,this.__gL,true);qx.bom.Event.addNativeListener(this._document,y,this.__gM,true);qx.bom.Event.addNativeListener(this._window,i,this.__gR,true);qx.bom.Event.addNativeListener(this._window,z,this.__gS,true);}
}),_stopObserver:qx.core.Environment.select(x,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__gL,true);qx.bom.Event.removeNativeListener(this._document,y,this.__gM,true);qx.bom.Event.removeNativeListener(this._window,e,this.__gN,true);qx.bom.Event.removeNativeListener(this._window,c,this.__gO,true);qx.bom.Event.removeNativeListener(this._window,C,this.__gP,true);}
,"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__gL);qx.bom.Event.removeNativeListener(this._document,y,this.__gM);qx.bom.Event.removeNativeListener(this._document,v,this.__gR);qx.bom.Event.removeNativeListener(this._document,A,this.__gS);qx.bom.Event.removeNativeListener(this._document,a,this.__gQ);}
,"webkit":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__gL,true);qx.bom.Event.removeNativeListener(this._document,y,this.__gM,true);qx.bom.Event.removeNativeListener(this._document,a,this.__gQ,false);qx.bom.Event.removeNativeListener(this._window,z,this.__gS,true);qx.bom.Event.removeNativeListener(this._window,e,this.__gN,true);qx.bom.Event.removeNativeListener(this._window,c,this.__gO,true);}
,"opera":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__gL,true);qx.bom.Event.removeNativeListener(this._document,y,this.__gM,true);qx.bom.Event.removeNativeListener(this._window,i,this.__gR,true);qx.bom.Event.removeNativeListener(this._window,z,this.__gS,true);}
}),__hb:qx.event.GlobalError.observeMethod(qx.core.Environment.select(x,{"gecko":function(bf){var bg=qx.bom.Event.getTarget(bf);if(!this.__hn(bg)){qx.bom.Event.preventDefault(bf);}
;}
,"default":null})),__hc:qx.event.GlobalError.observeMethod(qx.core.Environment.select(x,{"mshtml":function(bi){this.__ha();var bj=qx.bom.Event.getTarget(bi);var bh=this.__hl(bj);if(bh){this.setFocus(bh);}
;this.tryActivate(bj);}
,"opera":function(bk){var bl=qx.bom.Event.getTarget(bk);if(bl==this._document||bl==this._window){this.__ha();if(this.__gT){this.setFocus(this.__gT);delete this.__gT;}
;if(this.__gU){this.setActive(this.__gU);delete this.__gU;}
;}
else {this.setFocus(bl);this.tryActivate(bl);if(!this.__hn(bl)){bl.selectionStart=0;bl.selectionEnd=0;}
;}
;}
,"default":null})),__hd:qx.event.GlobalError.observeMethod(qx.core.Environment.select(x,{"mshtml":function(bm){var bn=qx.bom.Event.getRelatedTarget(bm);if(bn==null){this.__gY();this.resetFocus();this.resetActive();}
;}
,"webkit":function(bo){var bp=qx.bom.Event.getTarget(bo);if(bp===this.getFocus()){this.resetFocus();}
;if(bp===this.getActive()){this.resetActive();}
;}
,"opera":function(bq){var br=qx.bom.Event.getTarget(bq);if(br==this._document){this.__gY();this.__gT=this.getFocus();this.__gU=this.getActive();this.resetFocus();this.resetActive();}
else {if(br===this.getFocus()){this.resetFocus();}
;if(br===this.getActive()){this.resetActive();}
;}
;}
,"default":null})),__he:qx.event.GlobalError.observeMethod(qx.core.Environment.select(x,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);if(bt===this._window||bt===this._document){this.__gY();this.resetActive();this.resetFocus();}
;}
,"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);if(bv===this._window||bv===this._document){this.__gY();this.__gT=this.getFocus();this.__gU=this.getActive();this.resetActive();this.resetFocus();}
;}
,"default":null})),__hf:qx.event.GlobalError.observeMethod(qx.core.Environment.select(x,{"gecko":function(bw){var bx=qx.bom.Event.getTarget(bw);if(bx===this._window||bx===this._document){this.__ha();bx=this._body;}
;this.setFocus(bx);this.tryActivate(bx);}
,"webkit":function(by){var bz=qx.bom.Event.getTarget(by);if(bz===this._window||bz===this._document){this.__ha();if(this.__gT){this.setFocus(this.__gT);delete this.__gT;}
;if(this.__gU){this.setActive(this.__gU);delete this.__gU;}
;}
else {this.__gX=by.relatedTarget;this.setFocus(bz);this.__gX=null;this.tryActivate(bz);}
;}
,"default":null})),__hg:qx.event.GlobalError.observeMethod(qx.core.Environment.select(x,{"mshtml":function(bB){var bC=qx.bom.Event.getTarget(bB);var bA=this.__hl(bC);if(bA){if(!this.__hn(bC)){bC.unselectable=t;try{document.selection.empty();}
catch(bD){}
;try{bA.focus();}
catch(bE){}
;}
;}
else {qx.bom.Event.preventDefault(bB);if(!this.__hn(bC)){bC.unselectable=t;}
;}
;}
,"webkit|gecko":function(bG){var bH=qx.bom.Event.getTarget(bG);var bF=this.__hl(bH);if(bF){this.setFocus(bF);}
else {qx.bom.Event.preventDefault(bG);}
;}
,"opera":function(bK){var bL=qx.bom.Event.getTarget(bK);var bI=this.__hl(bL);if(!this.__hn(bL)){qx.bom.Event.preventDefault(bK);if(bI){var bJ=this.getFocus();if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;bJ.selectionEnd=0;bJ.blur();}
;if(bI){this.setFocus(bI);}
;}
;}
else if(bI){this.setFocus(bI);}
;}
,"default":null})),__hh:qx.event.GlobalError.observeMethod(qx.core.Environment.select(x,{"mshtml":function(bM){var bN=qx.bom.Event.getTarget(bM);if(bN.unselectable){bN.unselectable=s;}
;this.tryActivate(this.__hi(bN));}
,"gecko":function(bO){var bP=qx.bom.Event.getTarget(bO);while(bP&&bP.offsetWidth===undefined){bP=bP.parentNode;}
;if(bP){this.tryActivate(bP);}
;}
,"webkit|opera":function(bQ){var bR=qx.bom.Event.getTarget(bQ);this.tryActivate(this.__hi(bR));}
,"default":null})),__hi:qx.event.GlobalError.observeMethod(qx.core.Environment.select(x,{"mshtml|webkit":function(bS){var bT=this.getFocus();if(bT&&bS!=bT&&(bT.nodeName.toLowerCase()===n||bT.nodeName.toLowerCase()===k)){bS=bT;}
;return bS;}
,"default":function(bU){return bU;}
})),__hj:qx.event.GlobalError.observeMethod(qx.core.Environment.select(x,{"mshtml|webkit":function(bV){var bW=qx.bom.Event.getTarget(bV);if(!this.__hn(bW)){qx.bom.Event.preventDefault(bV);}
;}
,"default":null})),__hk:function(bX){var bY=qx.bom.element.Attribute.get(bX,r);if(bY>=1){return true;}
;var ca=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;if(bY>=0&&ca[bX.tagName]){return true;}
;return false;}
,__hl:function(cb){while(cb&&cb.nodeType===1){if(cb.getAttribute(B)==t){return null;}
;if(this.__hk(cb)){return cb;}
;cb=cb.parentNode;}
;return this._body;}
,__hm:function(cc){var cd=cc;while(cc&&cc.nodeType===1){if(cc.getAttribute(D)==t){return null;}
;cc=cc.parentNode;}
;return cd;}
,__hn:function(ce){while(ce&&ce.nodeType===1){var cf=ce.getAttribute(q);if(cf!=null){return cf===t;}
;ce=ce.parentNode;}
;return true;}
,_applyActive:function(ch,cg){if(cg){this.__gw(cg,ch,j,true);}
;if(ch){this.__gw(ch,cg,u,true);}
;if(this.__gK){window.scrollTo(0,0);}
;}
,_applyFocus:function(cj,ci){if(ci){this.__gw(ci,cj,A,true);}
;if(cj){this.__gw(cj,ci,v,true);}
;if(ci){this.__gw(ci,cj,c,false);}
;if(cj){this.__gw(cj,ci||this.__gX,e,false);}
;}
},destruct:function(){this._stopObserver();this._manager=this._window=this._document=this._root=this._body=this.__ho=this.__gX=null;}
,defer:function(cl){qx.event.Registration.addHandler(cl);var cm=cl.FOCUSABLE_ELEMENTS;for(var ck in cm){cm[ck.toUpperCase()]=1;}
;}
});}
)();
(function(){var a="engine.name",b="qx.bom.Selection",c="character",d="button",e='character',f="#text",g="webkit",h="input",i="gecko",j="EndToEnd",k="opera",l="StartToStart",m="html.selection",n="textarea",o="body";qx.Bootstrap.define(b,{statics:{getSelectionObject:qx.core.Environment.select(m,{"selection":function(p){return p.selection;}
,"default":function(q){return qx.dom.Node.getWindow(q).getSelection();}
}),get:qx.core.Environment.select(m,{"selection":function(r){var s=qx.bom.Range.get(qx.dom.Node.getDocument(r));return s.text;}
,"default":function(t){if(this.__hw(t)){return t.value.substring(t.selectionStart,t.selectionEnd);}
else {return this.getSelectionObject(qx.dom.Node.getDocument(t)).toString();}
;}
}),getLength:qx.core.Environment.select(m,{"selection":function(u){var w=this.get(u);var v=qx.util.StringSplit.split(w,/\r\n/);return w.length-(v.length-1);}
,"default":function(x){if(qx.core.Environment.get(a)==k){var B,C,A;if(this.__hw(x)){var z=x.selectionStart;var y=x.selectionEnd;B=x.value.substring(z,y);C=y-z;}
else {B=qx.bom.Selection.get(x);C=B.length;}
;A=qx.util.StringSplit.split(B,/\r\n/);return C-(A.length-1);}
;if(this.__hw(x)){return x.selectionEnd-x.selectionStart;}
else {return this.get(x).length;}
;}
}),getStart:qx.core.Environment.select(m,{"selection":function(D){if(this.__hw(D)){var I=qx.bom.Range.get();if(!D.contains(I.parentElement())){return -1;}
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
,"default":function(N){if(qx.core.Environment.get(a)===i||qx.core.Environment.get(a)===g){if(this.__hw(N)){return N.selectionStart;}
else {var P=qx.dom.Node.getDocument(N);var O=this.getSelectionObject(P);if(O.anchorOffset<O.focusOffset){return O.anchorOffset;}
else {return O.focusOffset;}
;}
;}
;if(this.__hw(N)){return N.selectionStart;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;}
;}
}),getEnd:qx.core.Environment.select(m,{"selection":function(Q){if(this.__hw(Q)){var V=qx.bom.Range.get();if(!Q.contains(V.parentElement())){return -1;}
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
,"default":function(bb){if(qx.core.Environment.get(a)===i||qx.core.Environment.get(a)===g){if(this.__hw(bb)){return bb.selectionEnd;}
else {var bd=qx.dom.Node.getDocument(bb);var bc=this.getSelectionObject(bd);if(bc.focusOffset>bc.anchorOffset){return bc.focusOffset;}
else {return bc.anchorOffset;}
;}
;}
;if(this.__hw(bb)){return bb.selectionEnd;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bb)).focusOffset;}
;}
}),__hw:function(be){return qx.dom.Node.isElement(be)&&(be.nodeName.toLowerCase()==h||be.nodeName.toLowerCase()==n);}
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
(function(){var a="resize",b="os.name",c="qx.event.handler.Orientation",d="landscape",e="android",f="portrait",g="orientationchange";qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){qx.core.Object.call(this);this.__fy=h;this.__cv=h.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fy:null,__cv:null,__hx:null,_currentOrientation:null,__hy:null,canHandleEvent:function(j,i){}
,registerEvent:function(m,l,k){}
,unregisterEvent:function(p,o,n){}
,_initObserver:function(){this.__hy=qx.lang.Function.listener(this._onNative,this);this.__hx=qx.bom.Event.supportsEvent(this.__cv,g)?g:a;var Event=qx.bom.Event;Event.addNativeListener(this.__cv,this.__hx,this.__hy);}
,_stopObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__cv,this.__hx,this.__hy);}
,_onNative:qx.event.GlobalError.observeMethod(function(q){var r=0;if(qx.core.Environment.get(b)==e){r=300;}
;qx.lang.Function.delay(this._onOrientationChange,r,this,q);}
),_onOrientationChange:function(s){var u=qx.bom.Viewport;var t=u.getOrientation(s.target);if(this._currentOrientation!=t){this._currentOrientation=t;var v=u.isLandscape(s.target)?d:f;qx.event.Registration.fireEvent(this.__cv,g,qx.event.type.Orientation,[t,v]);}
;}
},destruct:function(){this._stopObserver();this.__fy=this.__cv=null;}
,defer:function(w){qx.event.Registration.addHandler(w);}
});}
)();
(function(){var a="landscape",b="qx.event.type.Orientation",c="portrait";qx.Class.define(b,{extend:qx.event.type.Event,members:{__hz:null,__hA:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);this.__hz=d;this.__hA=e;return this;}
,clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);g.__hz=this.__hz;g.__hA=this.__hA;return g;}
,getOrientation:function(){return this.__hz;}
,isLandscape:function(){return this.__hA==a;}
,isPortrait:function(){return this.__hA==c;}
}});}
)();
(function(){var a="touchmove",b="os.name",c="MSPointerDown",d="android",e="engine.version",f="pointercancel",g="qx.event.handler.TouchCore",h="event.mspointer",j="MSPointerCancel",k="y",l="pointer-events",m="pointerup",n="touchend",o="pointerdown",p="MSPointerUp",q="right",r="engine.name",s="undefined",t="touchcancel",u="MSPointerMove",v="webkit",w="none",z="left",A="pointermove",B="down",C="x",D="up",E="touchstart";qx.Bootstrap.define(g,{extend:Object,statics:{TAP_MAX_DISTANCE:qx.core.Environment.get(b)!=d?10:40,SWIPE_DIRECTION:{x:[z,q],y:[D,B]},SWIPE_MIN_DISTANCE:qx.core.Environment.get(b)!=d?11:41,SWIPE_MIN_VELOCITY:0,LONGTAP_TIME:500},construct:function(F,G){this.__hB=F;this.__da=G;this._initTouchObserver();this.__hC=[];this.__hD={};}
,members:{__hB:null,__da:null,__hE:null,__hF:null,__hD:null,__hG:null,__hH:null,__hI:null,__hC:null,__hJ:null,_initTouchObserver:function(){this.__hE=qx.lang.Function.listener(this._onTouchEvent,this);this.__hJ=[E,a,n,t];if(qx.core.Environment.get(h)){var H=parseInt(qx.core.Environment.get(e),10);if(H==10){this.__hJ=[c,u,p,j];}
else {this.__hJ=[o,A,m,f];}
;}
;for(var i=0;i<this.__hJ.length;i++ ){qx.bom.Event.addNativeListener(this.__hB,this.__hJ[i],this.__hE);}
;}
,_stopTouchObserver:function(){for(var i=0;i<this.__hJ.length;i++ ){qx.bom.Event.removeNativeListener(this.__hB,this.__hJ[i],this.__hE);}
;}
,_onTouchEvent:function(I){this._commonTouchEventHandler(I);}
,_getScalingDistance:function(K,J){return (Math.sqrt(Math.pow(K.pageX-J.pageX,2)+Math.pow(K.pageY-J.pageY,2)));}
,_getRotationAngle:function(M,L){var x=M.pageX-L.pageX;var y=M.pageY-L.pageY;return (Math.atan2(y,x)*180/Math.PI);}
,_calcTouchesDelta:function(N){var O=[];for(var i=0;i<N.length;i++ ){O.push(this._calcSingleTouchDelta(N[i]));}
;return O;}
,_calcSingleTouchDelta:function(S){if(this.__hD.hasOwnProperty(S.identifier)){var R=this.__hD[S.identifier];var P=Math.floor(S.clientX-R[0]);var Q=Math.floor(S.clientY-R[1]);var T=C;if(Math.abs(P/Q)<1){T=k;}
;return {"x":P,"y":Q,"axis":T,"identifier":S.identifier};}
else {return {"x":0,"y":0,"axis":null,"identifier":S.identifier};}
;}
,_commonTouchEventHandler:function(V,ba){var ba=ba||V.type;if(qx.core.Environment.get(h)){ba=this._mapPointerEvent(ba);var U=this._detectTouchesByPointer(V,ba);V.changedTouches=U;V.targetTouches=U;V.touches=U;}
;V.delta=[];if(ba==E){this.__hF=this._getTarget(V);if(V.touches&&V.touches.length>1){this.__hH=this._getScalingDistance(V.touches[0],V.touches[1]);this.__hI=this._getRotationAngle(V.touches[0],V.touches[1]);}
;for(var i=0;i<V.changedTouches.length;i++ ){var Y=V.changedTouches[i];this.__hD[Y.identifier]=[Y.clientX,Y.clientY];}
;}
;if(ba==a){if(typeof V.scale==s&&V.targetTouches.length>1){var W=this._getScalingDistance(V.targetTouches[0],V.targetTouches[1]);V.scale=W/this.__hH;}
;if((typeof V.rotation==s||qx.core.Environment.get(h))&&V.targetTouches.length>1){var X=this._getRotationAngle(V.targetTouches[0],V.targetTouches[1]);V._rotation=X-this.__hI;}
;V.delta=this._calcTouchesDelta(V.targetTouches);}
;this._fireEvent(V,ba,this.__hF);if(qx.core.Environment.get(h)){if(ba==n||ba==t){delete this.__hC[V.pointerId];}
;}
;if(ba==n||ba==t&&V.changedTouches[0]){delete this.__hD[V.changedTouches[0].identifier];}
;}
,_detectTouchesByPointer:function(bd,bf){var bc=[];if(bf==E){this.__hC[bd.pointerId]=bd;}
else if(bf==a){this.__hC[bd.pointerId]=bd;}
;for(var be in this.__hC){var bb=this.__hC[be];bc.push(bb);}
;return bc;}
,_mapPointerEvent:function(bg){bg=bg.toLowerCase();if(bg.indexOf(o)!==-1){return E;}
else if(bg.indexOf(m)!==-1){return n;}
else if(bg.indexOf(A)!==-1){return a;}
else if(bg.indexOf(f)!==-1){return t;}
;return bg;}
,_getTarget:function(bi){var bj=qx.bom.Event.getTarget(bi);if(qx.core.Environment.get(r)==v){if(bj&&bj.nodeType==3){bj=bj.parentNode;}
;}
else if(qx.core.Environment.get(h)){var bh=this.__hK(bi);if(bh){bj=bh;}
;}
;return bj;}
,__hK:function(bm){var bk=null;var bl=null;if(bm&&bm.touches&&bm.touches.length!==0){bk=bm.touches[0].clientX;bl=bm.touches[0].clientY;}
;var bo=document.msElementsFromPoint(bk,bl);if(bo){for(var i=0;i<bo.length;i++ ){var bp=bo[i];var bn=qx.bom.element.Style.get(bp,l,3);if(bn!=w){return bp;}
;}
;}
;return null;}
,_fireEvent:function(bq,br,bs){if(!bs){bs=this._getTarget(bq);}
;var br=br||bq.type;if(bs&&bs.nodeType&&this.__da){this.__da.emit(br,bq);}
;}
,dispose:function(){this._stopTouchObserver();this.__hF=this.__hB=this.__hJ=this.__hC=this.__da=this.__hH=this.__hI=null;}
}});}
)();
(function(){var a="touchmove",b="dispose",c="useraction",d="touchend",e="event.touch",f="touchstart",g="qx.event.handler.Touch";qx.Class.define(g,{extend:qx.event.handler.TouchCore,implement:qx.event.IEventHandler,construct:function(h){this.__fy=h;this.__cv=h.getWindow();this.__fJ=this.__cv.document;qx.event.handler.TouchCore.apply(this,[this.__fJ]);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,longtap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":f,"mousemove":a,"mouseup":d}},members:{__fy:null,__cv:null,__fJ:null,__hL:false,canHandleEvent:function(j,i){}
,registerEvent:function(m,l,k){}
,unregisterEvent:function(p,o,n){}
,_fireEvent:function(r,q,s,t){if(!s){s=this._getTarget(r);}
;var q=q||r.type;if(s&&s.nodeType){qx.event.Registration.fireEvent(s,q,t||qx.event.type.Touch,[r,s,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cv,c,qx.event.type.Data,[q]);}
,_onTouchEvent:qx.event.GlobalError.observeMethod(function(u){this._commonTouchEventHandler(u);}
),dispose:function(){this.__gn(b);this._stopMouseObserver();this.__fy=this.__cv=this.__fJ=null;}
,__gn:function(w,v){qx.event.handler.TouchCore.prototype[w].apply(this,v||[]);}
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
,isMultiTouch:function(){return this.__hN().length>1;}
,getScale:function(){return this._native.scale;}
,getRotation:function(){if(typeof this._native._rotation===d){return this._native.rotation;}
else {return this._native._rotation;}
;}
,getDelta:function(){return this._native.delta;}
,getDocumentLeft:function(g){return this.__hM(g).pageX;}
,getDocumentTop:function(h){return this.__hM(h).pageY;}
,getScreenLeft:function(j){return this.__hM(j).screenX;}
,getScreenTop:function(k){return this.__hM(k).screenY;}
,getViewportLeft:function(l){return this.__hM(l).clientX;}
,getViewportTop:function(m){return this.__hM(m).clientY;}
,getIdentifier:function(n){return this.__hM(n).identifier;}
,__hM:function(o){o=o==null?0:o;return this.__hN()[o];}
,__hN:function(){var p=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());return p;}
,_isTouchEnd:function(){return (this.getType()==c||this.getType()==a);}
}});}
)();
(function(){var a="text",b="blur",c="engine.version",d="keydown",f="radio",g="textarea",h="password",j="propertychange",k="select-multiple",m="change",n="input",p="value",q="select",r="browser.documentmode",s="browser.version",t="opera",u="keyup",v="mshtml",w="engine.name",x="keypress",y="checkbox",z="qx.event.handler.Input",A="checked";qx.Class.define(z,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);if((qx.core.Environment.get(w)==t)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);}
;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__hO:false,__hP:null,__hQ:null,__hR:null,canHandleEvent:function(D,C){var B=D.tagName.toLowerCase();if(C===n&&(B===n||B===g)){return true;}
;if(C===m&&(B===n||B===g||B===q)){return true;}
;return false;}
,registerEvent:function(I,H,F){if(qx.core.Environment.get(w)==v&&(qx.core.Environment.get(c)<9||(qx.core.Environment.get(c)>=9&&qx.core.Environment.get(r)<9))){if(!I.__hS){var G=I.tagName.toLowerCase();var E=I.type;if(E===a||E===h||G===g||E===y||E===f){qx.bom.Event.addNativeListener(I,j,this._onPropertyWrapper);}
;if(E!==y&&E!==f){qx.bom.Event.addNativeListener(I,m,this._onChangeValueWrapper);}
;if(E===a||E===h){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,I);qx.bom.Event.addNativeListener(I,x,this._onKeyPressWrapped);}
;I.__hS=true;}
;}
else {if(H===n){this.__hT(I);}
else if(H===m){if(I.type===f||I.type===y){qx.bom.Event.addNativeListener(I,m,this._onChangeCheckedWrapper);}
else {qx.bom.Event.addNativeListener(I,m,this._onChangeValueWrapper);}
;if((qx.core.Environment.get(w)==t)||(qx.core.Environment.get(w)==v)){if(I.type===a||I.type===h){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,I);qx.bom.Event.addNativeListener(I,x,this._onKeyPressWrapped);}
;}
;}
;}
;}
,__hT:qx.core.Environment.select(w,{"mshtml":function(J){if(qx.core.Environment.get(c)>=9&&qx.core.Environment.get(r)>=9){qx.bom.Event.addNativeListener(J,n,this._onInputWrapper);if(J.type===a||J.type===h||J.type===g){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,J);qx.bom.Event.addNativeListener(J,u,this._inputFixWrapper);}
;}
;}
,"webkit":function(L){var K=L.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(c))<532&&K==g){qx.bom.Event.addNativeListener(L,x,this._onInputWrapper);}
;qx.bom.Event.addNativeListener(L,n,this._onInputWrapper);}
,"opera":function(M){qx.bom.Event.addNativeListener(M,u,this._onKeyUpWrapper);qx.bom.Event.addNativeListener(M,d,this._onKeyDownWrapper);qx.bom.Event.addNativeListener(M,b,this._onBlurWrapper);qx.bom.Event.addNativeListener(M,n,this._onInputWrapper);}
,"default":function(N){qx.bom.Event.addNativeListener(N,n,this._onInputWrapper);}
}),unregisterEvent:function(R,Q){if(qx.core.Environment.get(w)==v&&qx.core.Environment.get(c)<9&&qx.core.Environment.get(r)<9){if(R.__hS){var P=R.tagName.toLowerCase();var O=R.type;if(O===a||O===h||P===g||O===y||O===f){qx.bom.Event.removeNativeListener(R,j,this._onPropertyWrapper);}
;if(O!==y&&O!==f){qx.bom.Event.removeNativeListener(R,m,this._onChangeValueWrapper);}
;if(O===a||O===h){qx.bom.Event.removeNativeListener(R,x,this._onKeyPressWrapped);}
;try{delete R.__hS;}
catch(S){R.__hS=null;}
;}
;}
else {if(Q===n){this.__hU(R);}
else if(Q===m){if(R.type===f||R.type===y){qx.bom.Event.removeNativeListener(R,m,this._onChangeCheckedWrapper);}
else {qx.bom.Event.removeNativeListener(R,m,this._onChangeValueWrapper);}
;}
;if((qx.core.Environment.get(w)==t)||(qx.core.Environment.get(w)==v)){if(R.type===a||R.type===h){qx.bom.Event.removeNativeListener(R,x,this._onKeyPressWrapped);}
;}
;}
;}
,__hU:qx.core.Environment.select(w,{"mshtml":function(T){if(qx.core.Environment.get(c)>=9&&qx.core.Environment.get(r)>=9){qx.bom.Event.removeNativeListener(T,n,this._onInputWrapper);if(T.type===a||T.type===h||T.type===g){qx.bom.Event.removeNativeListener(T,u,this._inputFixWrapper);}
;}
;}
,"webkit":function(V){var U=V.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(c))<532&&U==g){qx.bom.Event.removeNativeListener(V,x,this._onInputWrapper);}
;qx.bom.Event.removeNativeListener(V,n,this._onInputWrapper);}
,"opera":function(W){qx.bom.Event.removeNativeListener(W,u,this._onKeyUpWrapper);qx.bom.Event.removeNativeListener(W,d,this._onKeyDownWrapper);qx.bom.Event.removeNativeListener(W,b,this._onBlurWrapper);qx.bom.Event.removeNativeListener(W,n,this._onInputWrapper);}
,"default":function(X){qx.bom.Event.removeNativeListener(X,n,this._onInputWrapper);}
}),_onKeyPress:qx.core.Environment.select(w,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__hQ){this.__hQ=Y.value;qx.event.Registration.fireEvent(Y,m,qx.event.type.Data,[Y.value]);}
;}
;}
,"default":null}),_inputFix:qx.core.Environment.select(w,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__hR){this.__hR=ba.value;qx.event.Registration.fireEvent(ba,n,qx.event.type.Data,[ba.value]);}
;}
;}
,"default":null}),_onKeyDown:qx.core.Environment.select(w,{"opera":function(e){if(e.keyCode===13){this.__hO=true;}
;}
,"default":null}),_onKeyUp:qx.core.Environment.select(w,{"opera":function(e){if(e.keyCode===13){this.__hO=false;}
;}
,"default":null}),_onBlur:qx.core.Environment.select(w,{"opera":function(e){if(this.__hP&&qx.core.Environment.get(s)<10.6){window.clearTimeout(this.__hP);}
;}
,"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);var bb=bc.tagName.toLowerCase();if(!this.__hO||bb!==n){if((qx.core.Environment.get(w)==t)&&qx.core.Environment.get(s)<10.6){this.__hP=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,n,qx.event.type.Data,[bc.value]);}
,0);}
else {qx.event.Registration.fireEvent(bc,n,qx.event.type.Data,[bc.value]);}
;}
;}
),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var bd=qx.bom.Event.getTarget(e);var be=bd.value;if(bd.type===k){var be=[];for(var i=0,o=bd.options,l=o.length;i<l;i++ ){if(o[i].selected){be.push(o[i].value);}
;}
;}
;qx.event.Registration.fireEvent(bd,m,qx.event.type.Data,[be]);}
),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bf=qx.bom.Event.getTarget(e);if(bf.type===f){if(bf.checked){qx.event.Registration.fireEvent(bf,m,qx.event.type.Data,[bf.value]);}
;}
else {qx.event.Registration.fireEvent(bf,m,qx.event.type.Data,[bf.checked]);}
;}
),_onProperty:qx.core.Environment.select(w,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bg=qx.bom.Event.getTarget(e);var bh=e.propertyName;if(bh===p&&(bg.type===a||bg.type===h||bg.tagName.toLowerCase()===g)){if(!bg.$$inValueSet){qx.event.Registration.fireEvent(bg,n,qx.event.type.Data,[bg.value]);}
;}
else if(bh===A){if(bg.type===y){qx.event.Registration.fireEvent(bg,m,qx.event.type.Data,[bg.checked]);}
else if(bg.checked){qx.event.Registration.fireEvent(bg,m,qx.event.type.Data,[bg.value]);}
;}
;}
),"default":function(){}
})},defer:function(bi){qx.event.Registration.addHandler(bi);}
});}
)();
(function(){var a="qx.event.handler.Capture";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,b){}
,registerEvent:function(f,e,d){}
,unregisterEvent:function(i,h,g){}
},defer:function(j){qx.event.Registration.addHandler(j);}
});}
)();
(function(){var a="blur",b="qxDraggable",c="touch",d="qx.ui.core.Widget",f="longtap",g="Escape",h="drag",i="keydown",j="Unsupported data type: ",k="roll",l="drop",m="qxDroppable",n="qx.event.handler.DragDrop",o="mouse",p="This method must not be used outside the drop event listener!",q="dragover",r="Control",s="trackstart",t="Shift",u="!",v="alias",w="droprequest",x="copy",y="dragstart",z="move",A="dragchange",B="Alt",C="keyup",D="keypress",E="dragleave",F="dragend",G="track",H="trackend",I="left",J="Please use a droprequest listener to the drag source to fill the manager with data!",K="on";qx.Class.define(n,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(L){qx.core.Object.call(this);this.__fy=L;this.__fJ=L.getWindow().document.documentElement;this.__fy.addListener(this.__fJ,f,this._onLongtap,this);this.__fy.addListener(this.__fJ,s,this._onTrackStart,this);this.__fy.addListener(this.__fJ,G,this._onTrack,this);this.__fy.addListener(this.__fJ,H,this._onTrackEnd,this);qx.event.Registration.addListener(window,a,this._onWindowBlur,this);this.__ii();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true,ALLOWED_BUTTONS:[I]},properties:{cursor:{check:d,nullable:true,init:null}},members:{__fy:null,__fJ:null,__hV:null,__hW:null,__do:null,__hX:null,__hY:null,__c:null,__ia:null,__ib:null,__ic:false,__id:false,__ie:false,__if:null,__ig:null,__ih:false,canHandleEvent:function(N,M){}
,registerEvent:function(Q,P,O){}
,unregisterEvent:function(T,S,R){}
,addType:function(U){this.__do[U]=true;}
,addAction:function(V){this.__hX[V]=true;}
,supportsType:function(W){return !!this.__do[W];}
,supportsAction:function(X){return !!this.__hX[X];}
,getData:function(Y){if(!this.__id||!this.__hV){throw new Error(p);}
;if(!this.__do[Y]){throw new Error(j+Y+u);}
;if(!this.__c[Y]){this.__ia=Y;this.__gw(w,this.__hW,this.__hV,false);}
;if(!this.__c[Y]){throw new Error(J);}
;return this.__c[Y]||null;}
,getCurrentAction:function(){this.__ij();return this.__ib;}
,getDragTarget:function(){return this.__if;}
,addData:function(ba,bb){this.__c[ba]=bb;}
,getCurrentType:function(){return this.__ia;}
,isSessionActive:function(){return this.__ic;}
,__ii:function(){this.__do={};this.__hX={};this.__hY={};this.__c={};}
,__ij:function(){if(this.__hW==null){return;}
;var bf=this.__hX;var bc=this.__hY;var bd=null;if(this.__id){if(bc.Shift&&bc.Control&&bf.alias){bd=v;}
else if(bc.Shift&&bc.Alt&&bf.copy){bd=x;}
else if(bc.Shift&&bf.move){bd=z;}
else if(bc.Alt&&bf.alias){bd=v;}
else if(bc.Control&&bf.copy){bd=x;}
else if(bf.move){bd=z;}
else if(bf.copy){bd=x;}
else if(bf.alias){bd=v;}
;}
;var be=this.__ib;if(bd!=be){if(this.__hV){this.__ib=bd;this.__ie=this.__gw(A,this.__hV,this.__hW,true);if(!this.__ie){bd=null;}
;}
;if(bd!=be){this.__ib=bd;this.__gw(A,this.__hW,this.__hV,false);}
;}
;}
,__gw:function(bl,bh,bi,bj,bm){var bk=qx.event.Registration;var bg=bk.createEvent(bl,qx.event.type.Drag,[bj,bm]);if(bh!==bi){bg.setRelatedTarget(bi);}
;return bk.dispatchEvent(bh,bg);}
,__ik:function(bn){while(bn&&bn.nodeType==1){if(bn.getAttribute(b)==K){return bn;}
;bn=bn.parentNode;}
;return null;}
,__il:function(bo){while(bo&&bo.nodeType==1){if(bo.getAttribute(m)==K){return bo;}
;bo=bo.parentNode;}
;return null;}
,clearSession:function(){this.__fy.removeListener(this.__fJ,i,this._onKeyDown,this,true);this.__fy.removeListener(this.__fJ,C,this._onKeyUp,this,true);this.__fy.removeListener(this.__fJ,D,this._onKeyPress,this,true);this.__fy.removeListener(this.__fJ,k,this._onRoll,this,true);if(this.__hW){this.__gw(F,this.__hW,this.__hV,false);}
;this.__id=false;this.__hV=null;if(this.__if){this.__if.removeState(h);this.__if=null;}
;this.__hW=null;this.__ic=false;this.__ig=null;this.__ii();}
,_onLongtap:function(e){if(e.getPointerType()!=c){return;}
;this.__fy.addListener(this.__fJ,k,this._onRoll,this,true);this._start(e);}
,_start:function(e){var bp=qx.event.handler.DragDrop.ALLOWED_BUTTONS.indexOf(e.getButton())!==-1;if(!e.isPrimary()||!bp){return;}
;var br=this.__ig?this.__ig.target:e.getTarget();var bq=this.__ik(br);if(bq){this.__hW=bq;var bs=qx.ui.core.Widget.getWidgetByElement(this.__ig.original);while(bs&&bs.isAnonymous()){bs=bs.getLayoutParent();}
;if(bs){this.__if=bs;bs.addState(h);}
;if(!this.__gw(y,this.__hW,this.__hV,true,e)){this.__if=null;return;}
;this.__fy.addListener(this.__fJ,i,this._onKeyDown,this,true);this.__fy.addListener(this.__fJ,C,this._onKeyUp,this,true);this.__fy.addListener(this.__fJ,D,this._onKeyPress,this,true);this.__ic=true;}
;}
,_onTrackStart:function(e){if(e.isPrimary()){this.__ig={target:e.getTarget(),original:e.getOriginalTarget()};}
;}
,_onTrack:function(e){if(!e.isPrimary()){return;}
;if(this.__ih){return;}
;if(!this.__ic&&e.getPointerType()==o){var bA=e.getDelta();var bt=qx.event.handler.GestureCore.TAP_MAX_DISTANCE.mouse;if(Math.abs(bA.x)>bt||Math.abs(bA.y)>bt){this._start(e);}
;}
;if(!this.__ic){return;}
;if(!this.__gw(h,this.__hW,this.__hV,true,e)){this.clearSession();}
;var bw=this.__fy.getWindow().document;var bu=bw.elementFromPoint(e.getDocumentLeft(),e.getDocumentTop());var by=this.getCursor();if(!by){by=qx.ui.core.DragDropCursor.getInstance();}
;var bx=by.getContentElement().getDomElement();if(bu!==bx){var bv=this.__il(bu);if(bv&&bv!=this.__hV){if(this.__hV){this.__gw(E,this.__hV,this.__hW,false,e);}
;this.__id=true;this.__id=this.__gw(q,bv,this.__hW,true,e);this.__hV=bv;}
else if(!bv&&this.__hV){this.__gw(E,this.__hV,this.__hW,false,e);this.__hV=null;this.__id=false;qx.event.Timer.once(this.__ij,this,0);}
;}
;var bz=this.__hY;bz.Control=e.isCtrlPressed();bz.Shift=e.isShiftPressed();bz.Alt=e.isAltPressed();this.__ij();}
,_onTrackEnd:function(e){if(!e.isPrimary()){return;}
;if(this.__id&&this.__ie){this.__gw(l,this.__hV,this.__hW,false,e);}
;if(e.getTarget()==this.__hW){e.stopPropagation();}
;this.clearSession();this.__ih=false;}
,_onRoll:function(e){e.stop();}
,_onWindowBlur:function(e){this.clearSession();}
,_onKeyDown:function(e){var bB=e.getKeyIdentifier();switch(bB){case B:case r:case t:if(!this.__hY[bB]){this.__hY[bB]=true;this.__ij();}
;};}
,_onKeyUp:function(e){var bC=e.getKeyIdentifier();switch(bC){case B:case r:case t:if(this.__hY[bC]){this.__hY[bC]=false;this.__ij();}
;};}
,_onKeyPress:function(e){var bD=e.getKeyIdentifier();switch(bD){case g:this.clearSession();this.__ih=true;};}
},destruct:function(){this.__hW=this.__hV=this.__fy=this.__fJ=this.__do=this.__hX=this.__hY=this.__c=null;}
,defer:function(bE){qx.event.Registration.addHandler(bE);}
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
,getDragTarget:function(){return this.getManager().getDragTarget();}
,stopSession:function(){this.getManager().clearSession();}
}});}
)();
(function(){var a="backgroundColor",b="__ir",c="drag",d="_applyNativeContextMenu",f="touch",g="div",h="_applyBackgroundColor",j="qx.event.type.Data",k="object",m="_applyFocusable",n=" requires a layout, but no one was defined!",o="qx.event.type.KeyInput",p="focused",q="disabled",r="move",s="createChildControl",t="Unsupported control: ",u="dragstart",v="Invalid left decorator inset detected: ",w="Font",x="qx.dynlocale",y="dragchange",z="Invalid layout data: ",A="Could not add widget to itself: ",B="_applyEnabled",C="_applySelectable",D="Number",E="_applyKeepActive",F="qx.event.type.Pinch",G="dragend",H="_applyVisibility",I="The 'before' widget is not a child of this widget!",J="Child control '",K="qxDraggable",L="qx.event.type.Roll",M="syncAppearance",N='" while styling ',O="paddingLeft",P="' of widget ",Q="qx.event.type.Mouse",R="Wrong 'left' argument. ",S="_applyPadding",T="#",U="'Child' must be an instance of qx.ui.core.LayoutItem!",V="Remove Error: ",W="visible",X="qx.event.type.Event",Y="qx.event.type.MouseWheel",dd="_applyCursor",de="changeVisibility",df="_applyDraggable",cY="resize",da="Decorator",db="At least one child in control ",dc="zIndex",dk="changeTextColor",dl="$$widget",dm="changeContextMenu",dn="on",dg="paddingTop",dh="opacity",di="This widget has no children!",dj="changeSelectable",ds="__it",dT="Invalid top decorator inset detected: ",eY="none",dt="__iq",dp="outline",dq="hidden",eU="The 'after' widget is not a child of this widget!",dr="_applyAppearance",du=" returned an invalid size hint!",dv="hovered",dw="_applyOpacity",dB="Boolean",dC="px",dD="qx.ui.core.Widget",dx="longtap",dy="default",dz="minHeight is larger than maxHeight!",dA="TabIndex property must be between 1 and 32000",dH="_applyFont",dI="cursor",dJ="qxDroppable",dK="' already created!",dE="changeZIndex",dF=": ",eV="Color",dG="changeEnabled",dO="Abstract method call: _getContentHeightForWidth()!",dP="changeFont",eX="qx.event.type.Focus",dQ="_applyDecorator",dL="_applyZIndex",dM="_applyTextColor",eW=' has no themeable property "',dN="Widget is not focusable!",dR="qx.ui.menu.Menu",dS="engine.name",ef="qx.event.type.Drag",ee="Invalid right decorator inset detected: ",ed="Invalid widget to add: ",ej="qx.event.type.KeySequence",ei="excluded",eh="DOM element is not yet created!",eg="_applyToolTipText",dX="The layout of the widget",dW="Exception while creating child control '",dV="qx.event.type.Rotate",dU="_applyDroppable",ec=" is not a child of this widget!",eb="widget",ea="Wrong 'top' argument. ",dY="qxClass",er="changeDecorator",eq="qx.event.type.Tap",ep="Integer",eo="changeBackgroundColor",ev="_applyTabIndex",eu="Invalid bottom decorator inset detected: ",et="changeAppearance",es="qx.debug",en="qx.event.type.Track",em="shorthand",ek="/",eG="String",eF="border-box",eE="",eK="_applyContextMenu",eJ="changeToolTipText",eI="padding",eH="tabIndex",ez="paddingBottom",ey="beforeContextmenuOpen",ex="changeNativeContextMenu",ew="undefined",eD="qx.ui.tooltip.ToolTip",eC="contextmenu",eB="_applyKeepFocus",eA="paddingRight",eP="minWidth is larger than maxWidth!",eO="changeLocale",eN="__im",eM="qx.event.type.Pointer",eT="qxKeepFocus",eS="opera",eR="qx.event.type.Touch",eQ="qxKeepActive",eL="absolute";qx.Class.define(dD,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);this.__im=this.__is();this.initFocusable();this.initSelectable();this.initNativeContextMenu();}
,events:{appear:X,disappear:X,createChildControl:j,resize:j,move:j,syncAppearance:j,mousemove:Q,mouseover:Q,mouseout:Q,mousedown:Q,mouseup:Q,click:Q,dblclick:Q,contextmenu:Q,beforeContextmenuOpen:j,mousewheel:Y,touchstart:eR,touchend:eR,touchmove:eR,touchcancel:eR,tap:eq,longtap:eq,dbltap:eq,swipe:eR,rotate:dV,pinch:F,track:en,roll:L,pointermove:eM,pointerover:eM,pointerout:eM,pointerdown:eM,pointerup:eM,pointercancel:eM,keyup:ej,keydown:ej,keypress:ej,keyinput:o,focus:eX,blur:eX,focusin:eX,focusout:eX,activate:eX,deactivate:eX,capture:X,losecapture:X,drop:ef,dragleave:ef,dragover:ef,drag:ef,dragstart:ef,dragend:ef,dragchange:ef,droprequest:ef},properties:{paddingTop:{check:ep,init:0,apply:S,themeable:true},paddingRight:{check:ep,init:0,apply:S,themeable:true},paddingBottom:{check:ep,init:0,apply:S,themeable:true},paddingLeft:{check:ep,init:0,apply:S,themeable:true},padding:{group:[dg,eA,ez,O],mode:em,themeable:true},zIndex:{nullable:true,init:10,apply:dL,event:dE,check:ep,themeable:true},decorator:{nullable:true,init:null,apply:dQ,event:er,check:da,themeable:true},backgroundColor:{nullable:true,check:eV,apply:h,event:eo,themeable:true},textColor:{nullable:true,check:eV,apply:dM,event:dk,themeable:true,inheritable:true},font:{nullable:true,apply:dH,check:w,event:dP,themeable:true,inheritable:true,dereference:true},opacity:{check:D,apply:dw,themeable:true,nullable:true,init:null},cursor:{check:eG,apply:dd,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:eD,nullable:true},toolTipText:{check:eG,nullable:true,event:eJ,apply:eg},toolTipIcon:{check:eG,nullable:true,event:eJ},blockToolTip:{check:dB,init:false},visibility:{check:[W,dq,ei],init:W,apply:H,event:de},enabled:{init:true,check:dB,inheritable:true,apply:B,event:dG},anonymous:{init:false,check:dB},tabIndex:{check:ep,nullable:true,apply:ev},focusable:{check:dB,init:false,apply:m},keepFocus:{check:dB,init:false,apply:eB},keepActive:{check:dB,init:false,apply:E},draggable:{check:dB,init:false,apply:df},droppable:{check:dB,init:false,apply:dU},selectable:{check:dB,init:false,event:dj,apply:C},contextMenu:{check:dR,apply:eK,nullable:true,event:dm},nativeContextMenu:{check:dB,init:false,themeable:true,event:ex,apply:d},appearance:{check:eG,init:eb,apply:dr,event:et}},statics:{DEBUG:false,getWidgetByElement:function(fd,fb){while(fd){var fa=fd.$$widget;if(fa!=null){var fc=qx.core.ObjectRegistry.fromHashCode(fa);if(!fb||!fc.getAnonymous()){return fc;}
;}
;try{fd=fd.parentNode;}
catch(e){return null;}
;}
;return null;}
,contains:function(parent,fe){while(fe){if(parent==fe){return true;}
;fe=fe.getLayoutParent();}
;return false;}
,__in:new qx.util.ObjectPool()},members:{__im:null,__io:null,__ip:null,__iq:null,_getLayout:function(){return this.__iq;}
,_setLayout:function(ff){if(qx.core.Environment.get(es)){if(ff){this.assertInstance(ff,qx.ui.layout.Abstract);}
;}
;if(this.__iq){this.__iq.connectToWidget(null);}
;if(ff){ff.connectToWidget(this);}
;this.__iq=ff;qx.ui.core.queue.Layout.add(this);}
,setLayoutParent:function(parent){if(this.$$parent===parent){return;}
;var content=this.getContentElement();if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(content);}
;this.$$parent=parent||null;if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(content);}
;this.$$refreshInheritables();qx.ui.core.queue.Visibility.add(this);}
,_updateInsets:null,renderLayout:function(fm,top,fj,fh){var fn=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,fm,top,fj,fh);if(!fn){return null;}
;if(qx.lang.Object.isEmpty(fn)&&!this._updateInsets){return null;}
;var content=this.getContentElement();var fq=fn.size||this._updateInsets;var fo=dC;var fg={};if(fn.position){fg.left=fm+fo;fg.top=top+fo;}
;if(fq||fn.margin){fg.width=fj+fo;fg.height=fh+fo;}
;if(Object.keys(fg).length>0){content.setStyles(fg);}
;if(fq||fn.local||fn.margin){if(this.__iq&&this.hasLayoutChildren()){var fl=this.getInsets();var innerWidth=fj-fl.left-fl.right;var innerHeight=fh-fl.top-fl.bottom;var fp=this.getDecorator();var fk={left:0,right:0,top:0,bottom:0};if(fp){fp=qx.theme.manager.Decoration.getInstance().resolve(fp);fk=fp.getPadding();}
;var fi={top:this.getPaddingTop()+fk.top,right:this.getPaddingRight()+fk.right,bottom:this.getPaddingBottom()+fk.bottom,left:this.getPaddingLeft()+fk.left};this.__iq.renderLayout(innerWidth,innerHeight,fi);}
else if(this.hasLayoutChildren()){throw new Error(db+this._findTopControl()+n);}
;}
;if(fn.position&&this.hasListener(r)){this.fireDataEvent(r,this.getBounds());}
;if(fn.size&&this.hasListener(cY)){this.fireDataEvent(cY,this.getBounds());}
;delete this._updateInsets;return fn;}
,__ir:null,clearSeparators:function(){var fs=this.__ir;if(!fs){return;}
;var ft=qx.ui.core.Widget.__in;var content=this.getContentElement();var fr;for(var i=0,l=fs.length;i<l;i++ ){fr=fs[i];ft.poolObject(fr);content.remove(fr.getContentElement());}
;fs.length=0;}
,renderSeparator:function(fv,fw){var fu=qx.ui.core.Widget.__in.getObject(qx.ui.core.Widget);fu.set({decorator:fv});var fy=fu.getContentElement();this.getContentElement().add(fy);var fx=fy.getDomElement();if(fx){fx.style.top=fw.top+dC;fx.style.left=fw.left+dC;fx.style.width=fw.width+dC;fx.style.height=fw.height+dC;}
else {fy.setStyles({left:fw.left+dC,top:fw.top+dC,width:fw.width+dC,height:fw.height+dC});}
;if(!this.__ir){this.__ir=[];}
;this.__ir.push(fu);}
,_computeSizeHint:function(){var fF=this.getWidth();var fz=this.getMinWidth();var fA=this.getMaxWidth();var fD=this.getHeight();var fB=this.getMinHeight();var fC=this.getMaxHeight();if(qx.core.Environment.get(es)){if(fz!==null&&fA!==null){this.assert(fz<=fA,eP);}
;if(fB!==null&&fC!==null){this.assert(fB<=fC,dz);}
;}
;var fG=this._getContentHint();var fE=this.getInsets();var fI=fE.left+fE.right;var fH=fE.top+fE.bottom;if(fF==null){fF=fG.width+fI;}
;if(fD==null){fD=fG.height+fH;}
;if(fz==null){fz=fI;if(fG.minWidth!=null){fz+=fG.minWidth;if(fz>fA&&fA!=null){fz=fA;}
;}
;}
;if(fB==null){fB=fH;if(fG.minHeight!=null){fB+=fG.minHeight;if(fB>fC&&fC!=null){fB=fC;}
;}
;}
;if(fA==null){if(fG.maxWidth==null){fA=Infinity;}
else {fA=fG.maxWidth+fI;if(fA<fz&&fz!=null){fA=fz;}
;}
;}
;if(fC==null){if(fG.maxHeight==null){fC=Infinity;}
else {fC=fG.maxHeight+fH;if(fC<fB&&fB!=null){fC=fB;}
;}
;}
;return {width:fF,minWidth:fz,maxWidth:fA,height:fD,minHeight:fB,maxHeight:fC};}
,invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);if(this.__iq){this.__iq.invalidateLayoutCache();}
;}
,_getContentHint:function(){var fK=this.__iq;if(fK){if(this.hasLayoutChildren()){var fL=fK.getSizeHint();if(qx.core.Environment.get(es)){var fJ=dX+this.toString()+du;this.assertInteger(fL.width,R+fJ);this.assertInteger(fL.height,ea+fJ);}
;return fL;}
else {return {width:0,height:0};}
;}
else {return {width:100,height:50};}
;}
,_getHeightForWidth:function(fQ){var fP=this.getInsets();var fM=fP.left+fP.right;var fS=fP.top+fP.bottom;var fR=fQ-fM;var fN=this._getLayout();if(fN&&fN.hasHeightForWidth()){var fT=fN.getHeightForWidth(fQ);}
else {fT=this._getContentHeightForWidth(fR);}
;var fO=fT+fS;return fO;}
,_getContentHeightForWidth:function(fU){throw new Error(dO);}
,getInsets:function(){var top=this.getPaddingTop();var fV=this.getPaddingRight();var fW=this.getPaddingBottom();var ga=this.getPaddingLeft();if(this.getDecorator()){var fY=qx.theme.manager.Decoration.getInstance().resolve(this.getDecorator());var fX=fY.getInsets();if(qx.core.Environment.get(es)){this.assertNumber(fX.top,dT+fX.top);this.assertNumber(fX.right,ee+fX.right);this.assertNumber(fX.bottom,eu+fX.bottom);this.assertNumber(fX.left,v+fX.left);}
;top+=fX.top;fV+=fX.right;fW+=fX.bottom;ga+=fX.left;}
;return {"top":top,"right":fV,"bottom":fW,"left":ga};}
,getInnerSize:function(){var gc=this.getBounds();if(!gc){return null;}
;var gb=this.getInsets();return {width:gc.width-gb.left-gb.right,height:gc.height-gb.top-gb.bottom};}
,fadeOut:function(gd){return this.getContentElement().fadeOut(gd);}
,fadeIn:function(ge){return this.getContentElement().fadeIn(ge);}
,show:function(){this.setVisibility(W);}
,hide:function(){this.setVisibility(dq);}
,exclude:function(){this.setVisibility(ei);}
,isVisible:function(){return this.getVisibility()===W;}
,isHidden:function(){return this.getVisibility()!==W;}
,isExcluded:function(){return this.getVisibility()===ei;}
,isSeeable:function(){qx.ui.core.queue.Manager.flush();var gf=this.getContentElement().getDomElement();if(gf){return gf.offsetWidth>0;}
;return false;}
,__is:function(){var gh=this._createContentElement();gh.setAttribute(dl,this.toHashCode());gh.setStyles({"touch-action":eY,"-ms-touch-action":eY});if(qx.core.Environment.get(es)){gh.setAttribute(dY,this.classname);}
;var gg={"zIndex":10,"boxSizing":eF};if(!qx.ui.root.Inline||!(this instanceof qx.ui.root.Inline)){gg.position=eL;}
;gh.setStyles(gg);return gh;}
,_createContentElement:function(){return new qx.html.Element(g,{overflowX:dq,overflowY:dq});}
,getContentElement:function(){return this.__im;}
,__it:null,getLayoutChildren:function(){var gj=this.__it;if(!gj){return this.__iu;}
;var gk;for(var i=0,l=gj.length;i<l;i++ ){var gi=gj[i];if(gi.hasUserBounds()||gi.isExcluded()){if(gk==null){gk=gj.concat();}
;qx.lang.Array.remove(gk,gi);}
;}
;return gk||gj;}
,scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);}
,invalidateLayoutChildren:function(){var gl=this.__iq;if(gl){gl.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);}
,hasLayoutChildren:function(){var gn=this.__it;if(!gn){return false;}
;var gm;for(var i=0,l=gn.length;i<l;i++ ){gm=gn[i];if(!gm.hasUserBounds()&&!gm.isExcluded()){return true;}
;}
;return false;}
,getChildrenContainer:function(){return this;}
,__iu:[],_getChildren:function(){return this.__it||this.__iu;}
,_indexOf:function(gp){var go=this.__it;if(!go){return -1;}
;return go.indexOf(gp);}
,_hasChildren:function(){var gq=this.__it;return gq!=null&&(!!gq[0]);}
,addChildrenToQueue:function(gr){var gs=this.__it;if(!gs){return;}
;var gt;for(var i=0,l=gs.length;i<l;i++ ){gt=gs[i];gr.push(gt);gt.addChildrenToQueue(gr);}
;}
,_add:function(gv,gu){if(qx.core.Environment.get(es)){this.assertInstance(gv,qx.ui.core.LayoutItem.constructor,U);}
;if(gv.getLayoutParent()==this){qx.lang.Array.remove(this.__it,gv);}
;if(this.__it){this.__it.push(gv);}
else {this.__it=[gv];}
;this.__iv(gv,gu);}
,_addAt:function(gz,gw,gy){if(!this.__it){this.__it=[];}
;if(gz.getLayoutParent()==this){qx.lang.Array.remove(this.__it,gz);}
;var gx=this.__it[gw];if(gx===gz){gz.setLayoutProperties(gy);}
;if(gx){qx.lang.Array.insertBefore(this.__it,gz,gx);}
else {this.__it.push(gz);}
;this.__iv(gz,gy);}
,_addBefore:function(gA,gC,gB){if(qx.core.Environment.get(es)){this.assertInArray(gC,this._getChildren(),I);}
;if(gA==gC){return;}
;if(!this.__it){this.__it=[];}
;if(gA.getLayoutParent()==this){qx.lang.Array.remove(this.__it,gA);}
;qx.lang.Array.insertBefore(this.__it,gA,gC);this.__iv(gA,gB);}
,_addAfter:function(gF,gD,gE){if(qx.core.Environment.get(es)){this.assertInArray(gD,this._getChildren(),eU);}
;if(gF==gD){return;}
;if(!this.__it){this.__it=[];}
;if(gF.getLayoutParent()==this){qx.lang.Array.remove(this.__it,gF);}
;qx.lang.Array.insertAfter(this.__it,gF,gD);this.__iv(gF,gE);}
,_remove:function(gG){if(!this.__it){throw new Error(di);}
;qx.lang.Array.remove(this.__it,gG);this.__iw(gG);}
,_removeAt:function(gH){if(!this.__it){throw new Error(di);}
;var gI=this.__it[gH];qx.lang.Array.removeAt(this.__it,gH);this.__iw(gI);return gI;}
,_removeAll:function(){if(!this.__it){return [];}
;var gJ=this.__it.concat();this.__it.length=0;for(var i=gJ.length-1;i>=0;i-- ){this.__iw(gJ[i]);}
;qx.ui.core.queue.Layout.add(this);return gJ;}
,_afterAddChild:null,_afterRemoveChild:null,__iv:function(gL,gK){if(qx.core.Environment.get(es)){this.assertInstance(gL,qx.ui.core.LayoutItem,ed+gL);this.assertNotIdentical(gL,this,A+gL);if(gK!=null){this.assertType(gK,k,z+gK);}
;}
;var parent=gL.getLayoutParent();if(parent&&parent!=this){parent._remove(gL);}
;gL.setLayoutParent(this);if(gK){gL.setLayoutProperties(gK);}
else {this.updateLayoutProperties();}
;if(this._afterAddChild){this._afterAddChild(gL);}
;}
,__iw:function(gM){if(qx.core.Environment.get(es)){this.assertNotUndefined(gM);}
;if(gM.getLayoutParent()!==this){throw new Error(V+gM+ec);}
;gM.setLayoutParent(null);if(this.__iq){this.__iq.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);if(this._afterRemoveChild){this._afterRemoveChild(gM);}
;}
,capture:function(gN){this.getContentElement().capture(gN);}
,releaseCapture:function(){this.getContentElement().releaseCapture();}
,isCapturing:function(){var gO=this.getContentElement().getDomElement();if(!gO){return false;}
;var gP=qx.event.Registration.getManager(gO);var gQ=gP.getDispatcher(qx.event.dispatch.MouseCapture);return gO==gQ.getCaptureElement();}
,_applyPadding:function(gS,gR,name){this._updateInsets=true;qx.ui.core.queue.Layout.add(this);this.__ix(name,gS);}
,__ix:function(gT,gW){var content=this.getContentElement();var gU=this.getDecorator();gU=qx.theme.manager.Decoration.getInstance().resolve(gU);if(gU){var gV=qx.Bootstrap.firstLow(gT.replace(eI,eE));gW+=gU.getPadding()[gV]||0;}
;content.setStyle(gT,gW+dC);}
,_applyDecorator:function(gY,gX){var content=this.getContentElement();if(gX){gX=qx.theme.manager.Decoration.getInstance().getCssClassName(gX);content.removeClass(gX);}
;if(gY){gY=qx.theme.manager.Decoration.getInstance().addCssClass(gY);content.addClass(gY);}
;}
,_applyToolTipText:function(hc,hb){if(qx.core.Environment.get(x)){if(this.__ip){return;}
;var ha=qx.locale.Manager.getInstance();this.__ip=ha.addListener(eO,function(){var hd=this.getToolTipText();if(hd&&hd.translate){this.setToolTipText(hd.translate());}
;}
,this);}
;}
,_applyTextColor:function(hf,he){}
,_applyZIndex:function(hh,hg){this.getContentElement().setStyle(dc,hh==null?0:hh);}
,_applyVisibility:function(hj,hi){var content=this.getContentElement();if(hj===W){content.show();}
else {content.hide();}
;var parent=this.$$parent;if(parent&&(hi==null||hj==null||hi===ei||hj===ei)){parent.invalidateLayoutChildren();}
;qx.ui.core.queue.Visibility.add(this);}
,_applyOpacity:function(hl,hk){this.getContentElement().setStyle(dh,hl==1?null:hl);}
,_applyCursor:function(hn,hm){if(hn==null&&!this.isSelectable()){hn=dy;}
;this.getContentElement().setStyle(dI,hn,qx.core.Environment.get(dS)==eS);}
,_applyBackgroundColor:function(hr,hq){var hp=this.getBackgroundColor();var content=this.getContentElement();var ho=qx.theme.manager.Color.getInstance().resolve(hp);content.setStyle(a,ho);}
,_applyFont:function(ht,hs){}
,_onChangeTheme:function(){qx.ui.core.LayoutItem.prototype._onChangeTheme.call(this);this.updateAppearance();var hu=this.getDecorator();this._applyDecorator(null,hu);this._applyDecorator(hu);hu=this.getFont();if(qx.lang.Type.isString(hu)){this._applyFont(hu,hu);}
;hu=this.getTextColor();if(qx.lang.Type.isString(hu)){this._applyTextColor(hu,hu);}
;hu=this.getBackgroundColor();if(qx.lang.Type.isString(hu)){this._applyBackgroundColor(hu,hu);}
;}
,__iy:null,$$stateChanges:null,_forwardStates:null,hasState:function(hw){var hv=this.__iy;return !!hv&&!!hv[hw];}
,addState:function(hA){var hz=this.__iy;if(!hz){hz=this.__iy={};}
;if(hz[hA]){return;}
;this.__iy[hA]=true;if(hA===dv){this.syncAppearance();}
else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var hy=this.__iB;if(forward&&forward[hA]&&hy){var hx;for(var hB in hy){hx=hy[hB];if(hx instanceof qx.ui.core.Widget){hy[hB].addState(hA);}
;}
;}
;}
,removeState:function(hF){var hE=this.__iy;if(!hE||!hE[hF]){return;}
;delete this.__iy[hF];if(hF===dv){this.syncAppearance();}
else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var hD=this.__iB;if(forward&&forward[hF]&&hD){for(var hG in hD){var hC=hD[hG];if(hC instanceof qx.ui.core.Widget){hC.removeState(hF);}
;}
;}
;}
,replaceState:function(hI,hL){var hK=this.__iy;if(!hK){hK=this.__iy={};}
;if(!hK[hL]){hK[hL]=true;}
;if(hK[hI]){delete hK[hI];}
;if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var hJ=this.__iB;if(forward&&forward[hL]&&hJ){for(var hM in hJ){var hH=hJ[hM];if(hH instanceof qx.ui.core.Widget){hH.replaceState(hI,hL);}
;}
;}
;}
,__iz:null,__iA:null,syncAppearance:function(){var hR=this.__iy;var hQ=this.__iz;var hS=qx.theme.manager.Appearance.getInstance();var hO=qx.core.Property.$$method.setThemed;var hW=qx.core.Property.$$method.resetThemed;if(this.__iA){delete this.__iA;if(hQ){var hN=hS.styleFrom(hQ,hR,null,this.getAppearance());hQ=null;}
;}
;if(!hQ){var hP=this;var hT=[];do {hT.push(hP.$$subcontrol||hP.getAppearance());}
while(hP=hP.$$subparent);hQ=hT.reverse().join(ek).replace(/#[0-9]+/g,eE);this.__iz=hQ;}
;var hV=hS.styleFrom(hQ,hR,null,this.getAppearance());if(hV){if(hN){for(var hU in hN){if(hV[hU]===undefined){this[hW[hU]]();}
;}
;}
;if(qx.core.Environment.get(es)){for(var hU in hV){if(!this[hO[hU]]){throw new Error(this.classname+eW+hU+N+hQ);}
;}
;}
;for(var hU in hV){hV[hU]===undefined?this[hW[hU]]():this[hO[hU]](hV[hU]);}
;}
else if(hN){for(var hU in hN){this[hW[hU]]();}
;}
;this.fireDataEvent(M,this.__iy);}
,_applyAppearance:function(hY,hX){this.updateAppearance();}
,checkAppearanceNeeds:function(){if(!this.__io){qx.ui.core.queue.Appearance.add(this);this.__io=true;}
else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);delete this.$$stateChanges;}
;}
,updateAppearance:function(){this.__iA=true;qx.ui.core.queue.Appearance.add(this);var ic=this.__iB;if(ic){var ia;for(var ib in ic){ia=ic[ib];if(ia instanceof qx.ui.core.Widget){ia.updateAppearance();}
;}
;}
;}
,syncWidget:function(ie){}
,getEventTarget:function(){var ig=this;while(ig.getAnonymous()){ig=ig.getLayoutParent();if(!ig){return null;}
;}
;return ig;}
,getFocusTarget:function(){var ih=this;if(!ih.getEnabled()){return null;}
;while(ih.getAnonymous()||!ih.getFocusable()){ih=ih.getLayoutParent();if(!ih||!ih.getEnabled()){return null;}
;}
;return ih;}
,getFocusElement:function(){return this.getContentElement();}
,isTabable:function(){return (!!this.getContentElement().getDomElement())&&this.isFocusable();}
,_applyFocusable:function(ik,ii){var ij=this.getFocusElement();if(ik){var il=this.getTabIndex();if(il==null){il=1;}
;ij.setAttribute(eH,il);ij.setStyle(dp,eY);}
else {if(ij.isNativelyFocusable()){ij.setAttribute(eH,-1);}
else if(ii){ij.setAttribute(eH,null);}
;}
;}
,_applyKeepFocus:function(io){var im=this.getFocusElement();im.setAttribute(eT,io?dn:null);}
,_applyKeepActive:function(iq){var ip=this.getContentElement();ip.setAttribute(eQ,iq?dn:null);}
,_applyTabIndex:function(ir){if(ir==null){ir=1;}
else if(ir<1||ir>32000){throw new Error(dA);}
;if(this.getFocusable()&&ir!=null){this.getFocusElement().setAttribute(eH,ir);}
;}
,_applySelectable:function(it,is){if(is!==null){this._applyCursor(this.getCursor());}
;this.getContentElement().setSelectable(it);}
,_applyEnabled:function(iv,iu){if(iv===false){this.addState(q);this.removeState(dv);if(this.isFocusable()){this.removeState(p);this._applyFocusable(false,true);}
;if(this.isDraggable()){this._applyDraggable(false,true);}
;if(this.isDroppable()){this._applyDroppable(false,true);}
;}
else {this.removeState(q);if(this.isFocusable()){this._applyFocusable(true,false);}
;if(this.isDraggable()){this._applyDraggable(true,false);}
;if(this.isDroppable()){this._applyDroppable(true,false);}
;}
;}
,_applyNativeContextMenu:function(ix,iw,name){}
,_applyContextMenu:function(iz,iy){if(iy){iy.removeState(eC);if(iy.getOpener()==this){iy.resetOpener();}
;if(!iz){this.removeListener(eC,this._onContextMenuOpen);this.removeListener(dx,this._onContextMenuOpen);iy.removeListener(de,this._onBeforeContextMenuOpen,this);}
;}
;if(iz){iz.setOpener(this);iz.addState(eC);if(!iy){this.addListener(eC,this._onContextMenuOpen);this.addListener(dx,this._onContextMenuOpen);iz.addListener(de,this._onBeforeContextMenuOpen,this);}
;}
;}
,_onContextMenuOpen:function(e){if(e.getType()==dx){if(e.getPointerType()!==f){return;}
;}
;this.getContextMenu().openAtPointer(e);e.stop();}
,_onBeforeContextMenuOpen:function(e){if(e.getData()==W&&this.hasListener(ey)){this.fireDataEvent(ey,e);}
;}
,_onStopEvent:function(e){e.stopPropagation();}
,_getDragDropCursor:function(){return qx.ui.core.DragDropCursor.getInstance();}
,_applyDraggable:function(iB,iA){if(!this.isEnabled()&&iB===true){iB=false;}
;this._getDragDropCursor();if(iB){this.addListener(u,this._onDragStart);this.addListener(c,this._onDrag);this.addListener(G,this._onDragEnd);this.addListener(y,this._onDragChange);}
else {this.removeListener(u,this._onDragStart);this.removeListener(c,this._onDrag);this.removeListener(G,this._onDragEnd);this.removeListener(y,this._onDragChange);}
;this.getContentElement().setAttribute(K,iB?dn:null);}
,_applyDroppable:function(iD,iC){if(!this.isEnabled()&&iD===true){iD=false;}
;this.getContentElement().setAttribute(dJ,iD?dn:null);}
,_onDragStart:function(e){this._getDragDropCursor().placeToPointer(e);this.getApplicationRoot().setGlobalCursor(dy);}
,_onDrag:function(e){this._getDragDropCursor().placeToPointer(e);}
,_onDragEnd:function(e){this._getDragDropCursor().moveTo(-1000,-1000);this.getApplicationRoot().resetGlobalCursor();}
,_onDragChange:function(e){var iE=this._getDragDropCursor();var iF=e.getCurrentAction();iF?iE.setAction(iF):iE.resetAction();}
,visualizeFocus:function(){this.addState(p);}
,visualizeBlur:function(){this.removeState(p);}
,scrollChildIntoView:function(iK,iJ,iI,iH){iH=typeof iH==ew?true:iH;var iG=qx.ui.core.queue.Layout;var parent;if(iH){iH=!iG.isScheduled(iK);parent=iK.getLayoutParent();if(iH&&parent){iH=!iG.isScheduled(parent);if(iH){parent.getChildren().forEach(function(iL){iH=iH&&!iG.isScheduled(iL);}
);}
;}
;}
;this.scrollChildIntoViewX(iK,iJ,iH);this.scrollChildIntoViewY(iK,iI,iH);}
,scrollChildIntoViewX:function(iO,iM,iN){this.getContentElement().scrollChildIntoViewX(iO.getContentElement(),iM,iN);}
,scrollChildIntoViewY:function(iR,iP,iQ){this.getContentElement().scrollChildIntoViewY(iR.getContentElement(),iP,iQ);}
,focus:function(){if(this.isFocusable()){this.getFocusElement().focus();}
else {throw new Error(dN);}
;}
,blur:function(){if(this.isFocusable()){this.getFocusElement().blur();}
else {throw new Error(dN);}
;}
,activate:function(){this.getContentElement().activate();}
,deactivate:function(){this.getContentElement().deactivate();}
,tabFocus:function(){this.getFocusElement().focus();}
,hasChildControl:function(iS){if(!this.__iB){return false;}
;return !!this.__iB[iS];}
,__iB:null,_getCreatedChildControls:function(){return this.__iB;}
,getChildControl:function(iV,iU){if(!this.__iB){if(iU){return null;}
;this.__iB={};}
;var iT=this.__iB[iV];if(iT){return iT;}
;if(iU===true){return null;}
;return this._createChildControl(iV);}
,_showChildControl:function(iX){var iW=this.getChildControl(iX);iW.show();return iW;}
,_excludeChildControl:function(ja){var iY=this.getChildControl(ja,true);if(iY){iY.exclude();}
;}
,_isChildControlVisible:function(jc){var jb=this.getChildControl(jc,true);if(jb){return jb.isVisible();}
;return false;}
,_releaseChildControl:function(jg){var jd=this.getChildControl(jg,false);if(!jd){throw new Error(t+jg);}
;delete jd.$$subcontrol;delete jd.$$subparent;var je=this.__iy;var forward=this._forwardStates;if(je&&forward&&jd instanceof qx.ui.core.Widget){for(var jf in je){if(forward[jf]){jd.removeState(jf);}
;}
;}
;delete this.__iB[jg];return jd;}
,_createChildControl:function(jl){if(!this.__iB){this.__iB={};}
else if(this.__iB[jl]){throw new Error(J+jl+dK);}
;var ji=jl.indexOf(T);try{if(ji==-1){var jh=this._createChildControlImpl(jl);}
else {var jh=this._createChildControlImpl(jl.substring(0,ji),jl.substring(ji+1,jl.length));}
;}
catch(jm){jm.message=dW+jl+P+this.toString()+dF+jm.message;throw jm;}
;if(!jh){throw new Error(t+jl);}
;jh.$$subcontrol=jl;jh.$$subparent=this;var jj=this.__iy;var forward=this._forwardStates;if(jj&&forward&&jh instanceof qx.ui.core.Widget){for(var jk in jj){if(forward[jk]){jh.addState(jk);}
;}
;}
;this.fireDataEvent(s,jh);return this.__iB[jl]=jh;}
,_createChildControlImpl:function(jo,jn){return null;}
,_disposeChildControls:function(){var js=this.__iB;if(!js){return;}
;var jq=qx.ui.core.Widget;for(var jr in js){var jp=js[jr];if(!jq.contains(this,jp)){jp.destroy();}
else {jp.dispose();}
;}
;delete this.__iB;}
,_findTopControl:function(){var jt=this;while(jt){if(!jt.$$subparent){return jt;}
;jt=jt.$$subparent;}
;return null;}
,getContentLocation:function(jv){var ju=this.getContentElement().getDomElement();return ju?qx.bom.element.Location.get(ju,jv):null;}
,setDomLeft:function(jx){var jw=this.getContentElement().getDomElement();if(jw){jw.style.left=jx+dC;}
else {throw new Error(eh);}
;}
,setDomTop:function(jz){var jy=this.getContentElement().getDomElement();if(jy){jy.style.top=jz+dC;}
else {throw new Error(eh);}
;}
,setDomPosition:function(jB,top){var jA=this.getContentElement().getDomElement();if(jA){jA.style.left=jB+dC;jA.style.top=top+dC;}
else {throw new Error(eh);}
;}
,destroy:function(){if(this.$$disposed){return;}
;var parent=this.$$parent;if(parent){parent._remove(this);}
;qx.ui.core.queue.Dispose.add(this);}
,clone:function(){var jC=qx.ui.core.LayoutItem.prototype.clone.call(this);if(this.getChildren){var jD=this.getChildren();for(var i=0,l=jD.length;i<l;i++ ){jC.add(jD[i].clone());}
;}
;return jC;}
},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(x)){if(this.__ip){qx.locale.Manager.getInstance().removeListenerById(this.__ip);}
;}
;var jE=this.getContentElement();if(jE){jE.setAttribute(dl,null,true);}
;this._disposeChildControls();qx.ui.core.queue.Appearance.remove(this);qx.ui.core.queue.Layout.remove(this);qx.ui.core.queue.Visibility.remove(this);qx.ui.core.queue.Widget.remove(this);}
;if(this.getContextMenu()){this.setContextMenu(null);}
;if(!qx.core.ObjectRegistry.inShutDown){this.clearSeparators();this.__ir=null;}
else {this._disposeArray(b);}
;this._disposeArray(ds);this.__iy=this.__iB=null;this._disposeObjects(dt,eN);}
});}
)();
(function(){var a="blur",b="activate",c="focus",d="qx.ui.core.EventHandler";qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);this.__fy=qx.event.Registration.getManager(window);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,longtap:1,swipe:1,dbltap:1,track:1,trackend:1,trackstart:1,pinch:1,rotate:1,roll:1,pointermove:1,pointerover:1,pointerout:1,pointerdown:1,pointerup:1,pointercancel:1},IGNORE_CAN_HANDLE:false},members:{__fy:null,__iC:{focusin:1,focusout:1,focus:1,blur:1},__iD:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(f,e){return f instanceof qx.ui.core.Widget;}
,_dispatchEvent:function(h){var n=h.getTarget();var m=qx.ui.core.Widget.getWidgetByElement(n);var o=false;while(m&&m.isAnonymous()){var o=true;m=m.getLayoutParent();}
;if(m&&o&&h.getType()==b){m.getContentElement().activate();}
;if(this.__iC[h.getType()]){m=m&&m.getFocusTarget();if(!m){return;}
;}
;if(h.getRelatedTarget){var v=h.getRelatedTarget();var u=qx.ui.core.Widget.getWidgetByElement(v);while(u&&u.isAnonymous()){u=u.getLayoutParent();}
;if(u){if(this.__iC[h.getType()]){u=u.getFocusTarget();}
;if(u===m){return;}
;}
;}
;var q=h.getCurrentTarget();var s=qx.ui.core.Widget.getWidgetByElement(q);if(!s||s.isAnonymous()){return;}
;if(this.__iC[h.getType()]){s=s.getFocusTarget();}
;var t=h.getType();if(!s||!(s.isEnabled()||this.__iD[t])){return;}
;var g=h.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;var p=this.__fy.getListeners(s,t,g);if(!p||p.length===0){return;}
;var j=qx.event.Pool.getInstance().getObject(h.constructor);h.clone(j);j.setTarget(m);j.setRelatedTarget(u||null);j.setCurrentTarget(s);var w=h.getOriginalTarget();if(w){var k=qx.ui.core.Widget.getWidgetByElement(w);while(k&&k.isAnonymous()){k=k.getLayoutParent();}
;j.setOriginalTarget(k);}
else {j.setOriginalTarget(n);}
;for(var i=0,l=p.length;i<l;i++ ){var r=p[i].context||s;p[i].handler.call(r,j);}
;if(j.getPropagationStopped()){h.stopPropagation();}
;if(j.getDefaultPrevented()){h.preventDefault();}
;qx.event.Pool.getInstance().poolObject(j);}
,registerEvent:function(z,y,x){var A;if(y===c||y===a){A=z.getFocusElement();}
else {A=z.getContentElement();}
;if(A){A.addListener(y,this._dispatchEvent,this,x);}
;}
,unregisterEvent:function(D,C,B){var E;if(C===c||C===a){E=D.getFocusElement();}
else {E=D.getContentElement();}
;if(E){E.removeListener(C,this._dispatchEvent,this,B);}
;}
},destruct:function(){this.__fy=null;}
,defer:function(F){qx.event.Registration.addHandler(F);}
});}
)();
(function(){var a="Missing renderLayout() implementation!",b="abstract",c="Missing getHeightForWidth() implementation!",d="qx.debug",e="It is not possible to manually set the connected widget.",f="qx.ui.layout.Abstract";qx.Class.define(f,{type:b,extend:qx.core.Object,members:{__dX:null,_invalidChildrenCache:null,__mb:null,invalidateLayoutCache:function(){this.__dX=null;}
,renderLayout:function(h,i,g){this.warn(a);}
,getSizeHint:function(){if(this.__dX){return this.__dX;}
;return this.__dX=this._computeSizeHint();}
,hasHeightForWidth:function(){return false;}
,getHeightForWidth:function(j){this.warn(c);return null;}
,_computeSizeHint:function(){return null;}
,invalidateChildrenCache:function(){this._invalidChildrenCache=true;}
,verifyLayoutProperty:qx.core.Environment.select(d,{"true":function(k,name,l){}
,"false":null}),_clearSeparators:function(){var m=this.__mb;if(m instanceof qx.ui.core.LayoutItem){m.clearSeparators();}
;}
,_renderSeparator:function(n,o){this.__mb.renderSeparator(n,o);}
,connectToWidget:function(p){if(p&&this.__mb){throw new Error(e);}
;this.__mb=p;this.invalidateChildrenCache();}
,_getWidget:function(){return this.__mb;}
,_applyLayoutChange:function(){if(this.__mb){this.__mb.scheduleLayoutUpdate();}
;}
,_getLayoutChildren:function(){return this.__mb.getLayoutChildren();}
},destruct:function(){this.__mb=this.__dX=null;}
});}
)();
(function(){var a="qx.ui.core.queue.Visibility",b="visibility";qx.Class.define(a,{statics:{__em:[],__cL:{},remove:function(c){delete this.__cL[c.$$hash];qx.lang.Array.remove(this.__em,c);}
,isVisible:function(d){return this.__cL[d.$$hash]||false;}
,__iE:function(f){var h=this.__cL;var g=f.$$hash;var e;if(f.isExcluded()){e=false;}
else {var parent=f.$$parent;if(parent){e=this.__iE(parent);}
else {e=f.isRootWidget();}
;}
;return h[g]=e;}
,add:function(k){var j=this.__em;if(qx.lang.Array.contains(j,k)){return;}
;j.unshift(k);qx.ui.core.queue.Manager.scheduleFlush(b);}
,flush:function(){var o=this.__em;var p=this.__cL;for(var i=o.length-1;i>=0;i-- ){var n=o[i].$$hash;if(p[n]!=null){o[i].addChildrenToQueue(o);}
;}
;var l={};for(var i=o.length-1;i>=0;i-- ){var n=o[i].$$hash;l[n]=p[n];p[n]=null;}
;for(var i=o.length-1;i>=0;i-- ){var m=o[i];var n=m.$$hash;o.splice(i,1);if(p[n]==null){this.__iE(m);}
;if(p[n]&&p[n]!=l[n]){m.checkAppearanceNeeds();}
;}
;this.__em=[];}
}});}
)();
(function(){var a=" due to exceptions in user code. The application has to be reloaded!",b="Error in the 'Appearance' queue:",c="Error in the 'Widget' queue:",d="\n",f="Error in the 'Layout' queue:",g="Error in the 'Visibility' queue:",h="qx.debug",i="useraction",j="qx.debug.ui.queue",k="Error while layout flush: ",l="Error in the 'Dispose' queue:",m="Stack trace: \n",n="event.touch",o="qx.ui.core.queue.Manager",p=" times in a row",q="Fatal Error: Flush terminated ";qx.Class.define(o,{statics:{__iF:false,__dI:false,__iG:{},__iH:0,MAX_RETRIES:10,scheduleFlush:function(r){var self=qx.ui.core.queue.Manager;self.__iG[r]=true;if(!self.__iF){self.__dI=false;qx.bom.AnimationFrame.request(function(){if(self.__dI){self.__dI=false;return;}
;self.flush();}
,self);self.__iF=true;}
;}
,flush:function(){var self=qx.ui.core.queue.Manager;if(self.__iI){return;}
;self.__iI=true;self.__dI=true;var s=self.__iG;self.__iJ(function(){while(s.visibility||s.widget||s.appearance||s.layout||s.element){if(s.widget){delete s.widget;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Widget.flush();}
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
,function(){self.__iF=false;}
);self.__iJ(function(){if(s.dispose){delete s.dispose;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Dispose.flush();}
catch(e){qx.log.Logger.error(l+e);}
;}
else {qx.ui.core.queue.Dispose.flush();}
;}
;}
,function(){self.__iI=false;}
);self.__iH=0;}
,__iJ:qx.core.Environment.select(h,{"true":function(t,u){t();u();}
,"false":function(v,w){var self=qx.ui.core.queue.Manager;try{v();}
catch(e){if(qx.core.Environment.get(h)){qx.log.Logger.error(k+e+d+m+qx.dev.StackTrace.getStackTraceFromError(e));}
;self.__iF=false;self.__iI=false;self.__iH+=1;if(self.__iH<=self.MAX_RETRIES){self.scheduleFlush();}
else {throw new Error(q+(self.__iH-1)+p+a);}
;throw e;}
finally{w();}
;}
}),__iK:function(e){qx.ui.core.queue.Manager.flush();}
},defer:function(x){qx.html.Element._scheduleFlush=x.scheduleFlush;qx.event.Registration.addListener(window,i,qx.core.Environment.get(n)?x.__iK:x.flush);}
});}
)();
(function(){var a="qx.ui.core.queue.Widget",b="widget",c="$$default";qx.Class.define(a,{statics:{__em:[],__iG:{},remove:function(e,g){var d=this.__em;if(!qx.lang.Array.contains(d,e)){return;}
;var f=e.$$hash;if(g==null){qx.lang.Array.remove(d,e);delete this.__iG[f];return;}
;if(this.__iG[f]){delete this.__iG[f][g];if(qx.lang.Object.getLength(this.__iG[f])==0){qx.lang.Array.remove(d,e);}
;}
;}
,add:function(j,l){var h=this.__em;if(!qx.lang.Array.contains(h,j)){h.unshift(j);}
;if(l==null){l=c;}
;var k=j.$$hash;if(!this.__iG[k]){this.__iG[k]={};}
;this.__iG[k][l]=true;qx.ui.core.queue.Manager.scheduleFlush(b);}
,flush:function(){var m=this.__em;var n,o;for(var i=m.length-1;i>=0;i-- ){n=m[i];o=this.__iG[n.$$hash];m.splice(i,1);n.syncWidget(o);}
;if(m.length!=0){return;}
;this.__em=[];this.__iG={};}
}});}
)();
(function(){var a="appearance",b="qx.ui.core.queue.Appearance";qx.Class.define(b,{statics:{__em:[],remove:function(c){qx.lang.Array.remove(this.__em,c);}
,add:function(e){var d=this.__em;if(qx.lang.Array.contains(d,e)){return;}
;d.unshift(e);qx.ui.core.queue.Manager.scheduleFlush(a);}
,has:function(f){return qx.lang.Array.contains(this.__em,f);}
,flush:function(){var j=qx.ui.core.queue.Visibility;var g=this.__em;var h;for(var i=g.length-1;i>=0;i-- ){h=g[i];g.splice(i,1);if(j.isVisible(h)){h.syncAppearance();}
else {h.$$stateChanges=true;}
;}
;}
}});}
)();
(function(){var a="dispose",b="qx.ui.core.queue.Dispose";qx.Class.define(b,{statics:{__em:[],add:function(d){var c=this.__em;if(qx.lang.Array.contains(c,d)){return;}
;c.unshift(d);qx.ui.core.queue.Manager.scheduleFlush(a);}
,isEmpty:function(){return this.__em.length==0;}
,flush:function(){var e=this.__em;for(var i=e.length-1;i>=0;i-- ){var f=e[i];e.splice(i,1);f.dispose();}
;if(e.length!=0){return;}
;this.__em=[];}
}});}
)();
(function(){var a="mshtml",b="engine.name",c="blur",d="losecapture",e="focus",f="click",g="qx.event.dispatch.MouseCapture",h="capture",i="scroll",j="browser.documentmode";qx.Class.define(g,{extend:qx.event.dispatch.AbstractBubbling,construct:function(k,l){qx.event.dispatch.AbstractBubbling.call(this,k);this.__cv=k.getWindow();this.__cx=l;k.addListener(this.__cv,c,this.releaseCapture,this);k.addListener(this.__cv,e,this.releaseCapture,this);k.addListener(this.__cv,i,this.releaseCapture,this);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cx:null,__iY:null,__ja:true,__cv:null,_getParent:function(m){return m.parentNode;}
,canDispatchEvent:function(o,event,n){return !!(this.__iY&&this.__jb[n]);}
,dispatchEvent:function(q,event,p){if(p==f){event.stopPropagation();this.releaseCapture();return;}
;if(this.__ja||!qx.dom.Hierarchy.contains(this.__iY,q)){q=this.__iY;}
;qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,q,event,p);}
,__jb:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1,"pointerdown":1,"pointerup":1,"pointermove":1,"pointerover":1,"pointerout":1,"tap":1,"dbltap":1},activateCapture:function(s,r){var r=r!==false;if(this.__iY===s&&this.__ja==r){return;}
;if(this.__iY){this.releaseCapture();}
;if(qx.core.Environment.get(j)!==9){this.nativeSetCapture(s,r);if(this.hasNativeCapture){var self=this;qx.bom.Event.addNativeListener(s,d,function(){qx.bom.Event.removeNativeListener(s,d,arguments.callee);self.releaseCapture();}
);}
;}
;this.__ja=r;this.__iY=s;this.__cx.fireEvent(s,h,qx.event.type.Event,[true,false]);}
,getCaptureElement:function(){return this.__iY;}
,releaseCapture:function(){var t=this.__iY;if(!t){return;}
;this.__iY=null;this.__cx.fireEvent(t,d,qx.event.type.Event,[true,false]);this.nativeReleaseCapture(t);}
,hasNativeCapture:qx.core.Environment.get(b)==a,nativeSetCapture:qx.core.Environment.select(b,{"mshtml":function(v,u){v.setCapture(u!==false);}
,"default":(function(){}
)}),nativeReleaseCapture:qx.core.Environment.select(b,{"mshtml":function(w){w.releaseCapture();}
,"default":(function(){}
)})},destruct:function(){this.__iY=this.__cv=this.__cx=null;}
,defer:function(x){qx.event.Registration.addDispatcher(x);}
});}
)();
(function(){var a='indexOf',b='slice',c='concat',d='toLocaleLowerCase',e="qx.type.BaseString",f="",g='trim',h='match',j="qx.debug",k='search',m='replace',n='toLowerCase',o='charCodeAt',p='split',q='substring',r='lastIndexOf',s='substr',t='toLocaleUpperCase',u='toUpperCase',v='charAt';qx.Class.define(e,{extend:Object,construct:function(w){var w=w||f;this.__jc=w;this.length=w.length;}
,members:{$$isString:true,length:0,__jc:null,toString:function(){return this.__jc;}
,charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);}
,toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(y,x){return qx.core.Object.prototype.base.apply(this,arguments);}
},defer:function(z,A){if(qx.core.Environment.get(j)){qx.Class.include(z,qx.core.MAssert);}
;var B=[v,o,c,a,r,h,m,k,b,p,s,q,n,u,d,t,g];A.valueOf=A.toString;if(new z(f).valueOf()==null){delete A.valueOf;}
;for(var i=0,l=B.length;i<l;i++ ){A[B[i]]=String.prototype[B[i]];}
;}
});}
)();
(function(){var a="qx.locale.LocalizedString";qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,d,c){qx.type.BaseString.call(this,b);this.__jd=d;this.__je=c;}
,members:{__jd:null,__je:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__jd,this.__je);}
,getMessageId:function(){return this.__jd;}
}});}
)();
(function(){var a="locale",b="_applyLocale",c="",d="changeLocale",e="_",f="Locale: ",g="C",h="locale.variant",j="qx.dynlocale",k=" not available.",l="qx.locale.Manager",m="String",n="singleton",o="qx.debug";qx.Class.define(l,{type:n,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__jf=qx.$$translations||{};this.__jg=qx.$$locales||{};var p=qx.core.Environment.get(a);var q=qx.core.Environment.get(h);if(q!==c){p+=e+q;}
;this.__jh=p;this.setLocale(p||this.__ji);}
,statics:{tr:function(s,t){var r=qx.lang.Array.fromArguments(arguments);r.splice(0,1);return qx.locale.Manager.getInstance().translate(s,r);}
,trn:function(v,y,u,x){var w=qx.lang.Array.fromArguments(arguments);w.splice(0,3);if(u!=1){return qx.locale.Manager.getInstance().translate(y,w);}
else {return qx.locale.Manager.getInstance().translate(v,w);}
;}
,trc:function(C,A,B){var z=qx.lang.Array.fromArguments(arguments);z.splice(0,2);return qx.locale.Manager.getInstance().translate(A,z);}
,trnc:function(E,F,I,D,H){var G=qx.lang.Array.fromArguments(arguments);G.splice(0,4);if(D!=1){return qx.locale.Manager.getInstance().translate(I,G);}
else {return qx.locale.Manager.getInstance().translate(F,G);}
;}
,marktr:function(J){return J;}
},properties:{locale:{check:m,nullable:true,apply:b,event:d}},members:{__ji:g,__jj:null,__jk:null,__jf:null,__jg:null,__jh:null,getLanguage:function(){return this.__jk;}
,getTerritory:function(){return this.getLocale().split(e)[1]||c;}
,getAvailableLocales:function(L){var M=[];for(var K in this.__jg){if(K!=this.__ji){if(this.__jg[K]===null&&!L){continue;}
;M.push(K);}
;}
;return M;}
,__jl:function(N){var P;if(N==null){return null;}
;var O=N.indexOf(e);if(O==-1){P=N;}
else {P=N.substring(0,O);}
;return P;}
,_applyLocale:function(R,Q){if(qx.core.Environment.get(o)){if(!(R in this.__jg||R==this.__jh)){qx.log.Logger.warn(f+R+k);}
;}
;this.__jj=R;this.__jk=this.__jl(R);}
,addTranslation:function(S,V){var T=this.__jf;if(T[S]){for(var U in V){T[S][U]=V[U];}
;}
else {T[S]=V;}
;}
,addLocale:function(ba,X){var W=this.__jg;if(W[ba]){for(var Y in X){W[ba][Y]=X[Y];}
;}
else {W[ba]=X;}
;}
,translate:function(be,bd,bb){var bc=this.__jf;return this.__jm(bc,be,bd,bb);}
,localize:function(bi,bh,bf){var bg=this.__jg;return this.__jm(bg,bi,bh,bf);}
,__jm:function(bn,bo,bl,bm){if(qx.core.Environment.get(o)){this.assertObject(bn);this.assertString(bo);this.assertArray(bl);}
;var bj;if(!bn){return bo;}
;if(bm){var bk=this.__jl(bm);}
else {bm=this.__jj;bk=this.__jk;}
;if(!bj&&bn[bm]){bj=bn[bm][bo];}
;if(!bj&&bn[bk]){bj=bn[bk][bo];}
;if(!bj&&bn[this.__ji]){bj=bn[this.__ji][bo];}
;if(!bj){bj=bo;}
;if(bl.length>0){var bp=[];for(var i=0;i<bl.length;i++ ){var bq=bl[i];if(bq&&bq.translate){bp[i]=bq.translate();}
else {bp[i]=bq;}
;}
;bj=qx.lang.String.format(bj,bp);}
;if(qx.core.Environment.get(j)){bj=new qx.locale.LocalizedString(bj,bo,bl);}
;return bj;}
},destruct:function(){this.__jf=this.__jg=null;}
});}
)();
(function(){var a="qx.bom.client.Locale",b="-",c="locale",d="",e="android",f="locale.variant";qx.Bootstrap.define(a,{statics:{getLocale:function(){var g=qx.bom.client.Locale.__jn();var h=g.indexOf(b);if(h!=-1){g=g.substr(0,h);}
;return g;}
,getVariant:function(){var i=qx.bom.client.Locale.__jn();var k=d;var j=i.indexOf(b);if(j!=-1){k=i.substr(j+1);}
;return k;}
,__jn:function(){var l=(navigator.userLanguage||navigator.language||d);if(qx.bom.client.OperatingSystem.getName()==e){var m=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);if(m){l=m[0];}
;}
;return l.toLowerCase();}
},defer:function(n){qx.core.Environment.add(c,n.getLocale);qx.core.Environment.add(f,n.getVariant);}
});}
)();
(function(){var a="best-fit",b="placementRight",c="Boolean",d="bottom-right",e="' ",f="widget",g="placementLeft",h="qx.ui.core.MPlacement",i="left-top",j="Integer",k="left-middle",l="right-middle",m="top-center",n="[qx.ui.core.MPlacement.setMoveDirection()], the value was '",o="offsetRight",p="interval",q="keep-align",r="bottom-left",s="pointer",t="direct",u="shorthand",v="Invalid value for the parameter 'direction' ",w="offsetLeft",x="top-left",y="appear",z="offsetBottom",A="top",B="top-right",C="offsetTop",D="but 'top' or 'left' are allowed.",E="right-bottom",F="disappear",G="right-top",H="bottom-center",I="left-bottom",J="left";qx.Mixin.define(h,{statics:{__fL:null,__jo:J,setVisibleElement:function(K){this.__fL=K;}
,getVisibleElement:function(){return this.__fL;}
,setMoveDirection:function(L){if(L===A||L===J){this.__jo=L;}
else {throw new Error(v+n+L+e+D);}
;}
,getMoveDirection:function(){return this.__jo;}
},properties:{position:{check:[x,m,B,r,H,d,i,k,I,G,l,E],init:r,themeable:true},placeMethod:{check:[f,s],init:s,themeable:true},domMove:{check:c,init:false},placementModeX:{check:[t,q,a],init:q,themeable:true},placementModeY:{check:[t,q,a],init:q,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[C,o,z,w],mode:u,themeable:true}},members:{__jp:null,__jq:null,__jr:null,getLayoutLocation:function(N){var P,O,R,top;O=N.getBounds();if(!O){return null;}
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
,placeToWidget:function(bc,ba){if(ba){this.__js();this.__jp=qx.lang.Function.bind(this.placeToWidget,this,bc,false);qx.event.Idle.getInstance().addListener(p,this.__jp);this.__jr=function(){this.__js();}
;this.addListener(F,this.__jr,this);}
;var bb=bc.getContentLocation()||this.getLayoutLocation(bc);if(bb!=null){this._place(bb);return true;}
else {return false;}
;}
,__js:function(){if(this.__jp){qx.event.Idle.getInstance().removeListener(p,this.__jp);this.__jp=null;}
;if(this.__jr){this.removeListener(F,this.__jr,this);this.__jr=null;}
;}
,placeToPointer:function(event){var be=Math.round(event.getDocumentLeft());var top=Math.round(event.getDocumentTop());var bd={left:be,top:top,right:be,bottom:top};this._place(bd);}
,placeToElement:function(bh,bf){var location=qx.bom.element.Location.get(bh);var bg={left:location.left,top:location.top,right:location.left+bh.offsetWidth,bottom:location.top+bh.offsetHeight};if(bf){this.__jp=qx.lang.Function.bind(this.placeToElement,this,bh,false);qx.event.Idle.getInstance().addListener(p,this.__jp);this.addListener(F,function(){if(this.__jp){qx.event.Idle.getInstance().removeListener(p,this.__jp);this.__jp=null;}
;}
,this);}
;this._place(bg);}
,placeToPoint:function(bj){var bi={left:bj.left,top:bj.top,right:bj.left,bottom:bj.top};this._place(bi);}
,_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};}
,__jt:function(bk){var bl=null;if(this._computePlacementSize){var bl=this._computePlacementSize();}
else if(this.isVisible()){var bl=this.getBounds();}
;if(bl==null){this.addListenerOnce(y,function(){this.__jt(bk);}
,this);}
else {bk.call(this,bl);}
;}
,_place:function(bm){this.__jt(function(bo){var bn=qx.util.placement.Placement.compute(bo,this.getLayoutParent().getBounds(),bm,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());this.removeState(g);this.removeState(b);this.addState(bm.left<bn.left?b:g);this.moveTo(bn.left,bn.top);}
);}
},destruct:function(){this.__js();}
});}
)();
(function(){var a="Number",b="interval",c="_applyTimeoutInterval",d="qx.event.type.Event",e="qx.event.Idle",f="singleton";qx.Class.define(e,{extend:qx.core.Object,type:f,construct:function(){qx.core.Object.call(this);var g=new qx.event.Timer(this.getTimeoutInterval());g.addListener(b,this._onInterval,this);g.start();this.__ju=g;}
,events:{"interval":d},properties:{timeoutInterval:{check:a,init:100,apply:c}},members:{__ju:null,_applyTimeoutInterval:function(h){this.__ju.setInterval(h);}
,_onInterval:function(){this.fireEvent(b);}
},destruct:function(){if(this.__ju){this.__ju.stop();}
;this.__ju=null;}
});}
)();
(function(){var a="-",b="best-fit",c="size",d="edge-start",e="target.bottom",f="offsets",g="size.width",h="bottom",i="offsets.bottom",j="qx.util.placement.Placement",k="Please use '",l="qx.debug",m="keep-align",n="center",o="target.right",p="direct",q="offsets.right",r="middle",s="target",t="align-start",u="Invalid 'mode' argument!'",v='__jy',w="left",x="align-end",y="Class",z="offsets.left",A="top",B="area",C="right",D="edge-end",E="target.top",F="area.height",G="target.left",H="align-center",I="area.width",J="' instead!",K="size.height",L="offsets.top";qx.Class.define(j,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__jy=qx.util.placement.DirectAxis;}
,properties:{axisX:{check:y},axisY:{check:y},edge:{check:[A,C,h,w],init:A},align:{check:[A,C,h,w,n,r],init:C}},statics:{__jz:null,compute:function(W,P,M,N,V,Q,R){this.__jz=this.__jz||new qx.util.placement.Placement();var T=V.split(a);var S=T[0];var O=T[1];if(qx.core.Environment.get(l)){if(O===n||O===r){var U=r;if(S===A||S===h){U=n;}
;qx.core.Assert.assertEquals(U,O,k+S+a+U+J);}
;}
;this.__jz.set({axisX:this.__jD(Q),axisY:this.__jD(R),edge:S,align:O});return this.__jz.compute(W,P,M,N);}
,__jA:null,__jB:null,__jC:null,__jD:function(X){switch(X){case p:this.__jA=this.__jA||qx.util.placement.DirectAxis;return this.__jA;case m:this.__jB=this.__jB||qx.util.placement.KeepAlignAxis;return this.__jB;case b:this.__jC=this.__jC||qx.util.placement.BestFitAxis;return this.__jC;default:throw new Error(u);};}
},members:{__jy:null,compute:function(be,bb,Y,ba){if(qx.core.Environment.get(l)){this.assertObject(be,c);this.assertNumber(be.width,g);this.assertNumber(be.height,K);this.assertObject(bb,B);this.assertNumber(bb.width,I);this.assertNumber(bb.height,F);this.assertObject(Y,s);this.assertNumber(Y.top,E);this.assertNumber(Y.right,o);this.assertNumber(Y.bottom,e);this.assertNumber(Y.left,G);this.assertObject(ba,f);this.assertNumber(ba.top,L);this.assertNumber(ba.right,q);this.assertNumber(ba.bottom,i);this.assertNumber(ba.left,z);}
;var bc=this.getAxisX()||this.__jy;var bf=bc.computeStart(be.width,{start:Y.left,end:Y.right},{start:ba.left,end:ba.right},bb.width,this.__jE());var bd=this.getAxisY()||this.__jy;var top=bd.computeStart(be.height,{start:Y.top,end:Y.bottom},{start:ba.top,end:ba.bottom},bb.height,this.__jF());return {left:bf,top:top};}
,__jE:function(){var bh=this.getEdge();var bg=this.getAlign();if(bh==w){return d;}
else if(bh==C){return D;}
else if(bg==w){return t;}
else if(bg==n){return H;}
else if(bg==C){return x;}
;}
,__jF:function(){var bj=this.getEdge();var bi=this.getAlign();if(bj==A){return d;}
else if(bj==h){return D;}
else if(bi==A){return t;}
else if(bi==r){return H;}
else if(bi==h){return x;}
;}
},destruct:function(){this._disposeObjects(v);}
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
;if(e>d-h){i=e-k;}
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
(function(){var a="Image could not be loaded: ",b="Boolean",c="px",d="http",e=".png",f="background-image",g="engine.version",h="scale",i="changeSource",j="div",k="aborted",l="nonScaled",m="qx.ui.basic.Image",n="0 0",o=", no-repeat",p="qx.debug",q="loaded",r="backgroundImage",s="backgroundRepeat",t="-disabled.$1",u="class",v="qx.event.type.Event",w="loadingFailed",x="css.alphaimageloaderneeded",y="String",z="browser.documentmode",A="backgroundPosition",B="border-box",C="__jG",D="left",E="_applySource",F="$$widget",G="data:image/",H="top",I="scaled",J=", ",K="image",L="mshtml",M="engine.name",N=", 0 0",O="_applyScale",P="try to load an unmanaged relative image: ",Q="position",R="replacement",S="img",T="no-repeat",U="background-position",V="hidden",W="alphaScaled",X=",",Y="absolute";qx.Class.define(m,{extend:qx.ui.core.Widget,construct:function(ba){this.__jG={};qx.ui.core.Widget.call(this);if(ba){this.setSource(ba);}
;}
,properties:{source:{check:y,init:null,nullable:true,event:i,apply:E,themeable:true},scale:{check:b,init:false,themeable:true,apply:O},appearance:{refine:true,init:K},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:v,loaded:v,aborted:v},members:{__jH:null,__jI:null,__hA:null,__jG:null,__jJ:null,__jK:null,__jL:0,_onChangeTheme:function(){qx.ui.core.Widget.prototype._onChangeTheme.call(this);this._styleSource();}
,getContentElement:function(){return this.__jP();}
,_createContentElement:function(){return this.__jP();}
,_getContentHint:function(){return {width:this.__jH||0,height:this.__jI||0};}
,_applyDecorator:function(bd,bc){qx.ui.core.Widget.prototype._applyDecorator.call(this,bd,bc);var be=this.getSource();be=qx.util.AliasManager.getInstance().resolve(be);var bb=this.getContentElement();if(this.__jK){bb=bb.getChild(0);}
;this.__jX(bb,be);}
,_applyPadding:function(bg,bf,name){qx.ui.core.Widget.prototype._applyPadding.call(this,bg,bf,name);var bh=this.getContentElement();if(this.__jK){bh.getChild(0).setStyles({top:this.getPaddingTop()||0,left:this.getPaddingLeft()||0});}
else {bh.setPadding(this.getPaddingLeft()||0,this.getPaddingTop()||0);}
;}
,renderLayout:function(bk,top,bi,bl){qx.ui.core.Widget.prototype.renderLayout.call(this,bk,top,bi,bl);var bj=this.getContentElement();if(this.__jK){bj.getChild(0).setStyles({width:bi-(this.getPaddingLeft()||0)-(this.getPaddingRight()||0),height:bl-(this.getPaddingTop()||0)-(this.getPaddingBottom()||0),top:this.getPaddingTop()||0,left:this.getPaddingLeft()||0});}
;}
,_applyEnabled:function(bn,bm){qx.ui.core.Widget.prototype._applyEnabled.call(this,bn,bm);if(this.getSource()){this._styleSource();}
;}
,_applySource:function(bp,bo){if(bo){if(qx.io.ImageLoader.isLoading(bo)){qx.io.ImageLoader.abort(bo);}
;}
;this._styleSource();}
,_applyScale:function(bq){this._styleSource();}
,__jM:function(br){this.__hA=br;}
,__jN:function(){if(this.__hA==null){var bt=this.getSource();var bs=false;if(bt!=null){bs=qx.lang.String.endsWith(bt,e);}
;if(this.getScale()&&bs&&qx.core.Environment.get(x)){this.__hA=W;}
else if(this.getScale()){this.__hA=I;}
else {this.__hA=l;}
;}
;return this.__hA;}
,__jO:function(bw){var bv;var bu;if(bw==W){bv=true;bu=j;}
else if(bw==l){bv=false;bu=j;}
else {bv=true;bu=S;}
;var by=new qx.html.Image(bu);by.setAttribute(F,this.toHashCode());by.setScale(bv);by.setStyles({"overflowX":V,"overflowY":V,"boxSizing":B});if(qx.core.Environment.get(x)){var bx=this.__jK=new qx.html.Element(j);bx.setAttribute(F,this.toHashCode());bx.setStyle(Q,Y);bx.add(by);return bx;}
;return by;}
,__jP:function(){if(this.$$disposed){return null;}
;var bz=this.__jN();if(this.__jG[bz]==null){this.__jG[bz]=this.__jO(bz);}
;var bA=this.__jG[bz];if(!this.__jJ){this.__jJ=bA;}
;return bA;}
,_styleSource:function(){var bB=qx.util.AliasManager.getInstance().resolve(this.getSource());var bE=this.getContentElement();if(this.__jK){bE=bE.getChild(0);}
;if(!bB){bE.resetSource();return;}
;this.__jS(bB);if((qx.core.Environment.get(M)==L)&&(parseInt(qx.core.Environment.get(g),10)<9||qx.core.Environment.get(z)<9)){var bC=this.getScale()?h:T;bE.tagNameHint=qx.bom.element.Decoration.getTagName(bC,bB);}
;var bD=this.__jR();if(qx.util.ResourceManager.getInstance().has(bB)){this.__jU(bD,bB);this.__jQ();}
else if(qx.io.ImageLoader.isLoaded(bB)){this.__jV(bD,bB);this.__jQ();}
else {this.__jW(bD,bB);}
;}
,__jQ:function(){this.__jL++ ;qx.bom.AnimationFrame.request(function(bF){if(bF===this.__jL){this.fireEvent(q);}
else {this.fireEvent(k);}
;}
.bind(this,this.__jL));}
,__jR:function(){var bG=this.__jJ;if(this.__jK){bG=bG.getChild(0);}
;return bG;}
,__jS:qx.core.Environment.select(M,{"mshtml":function(bI){var bJ=qx.core.Environment.get(x);var bH=qx.lang.String.endsWith(bI,e);if(bJ&&bH){if(this.getScale()&&this.__jN()!=W){this.__jM(W);}
else if(!this.getScale()&&this.__jN()!=l){this.__jM(l);}
;}
else {if(this.getScale()&&this.__jN()!=I){this.__jM(I);}
else if(!this.getScale()&&this.__jN()!=l){this.__jM(l);}
;}
;this.__jT(this.__jP());}
,"default":function(bK){if(this.getScale()&&this.__jN()!=I){this.__jM(I);}
else if(!this.getScale()&&this.__jN(l)){this.__jM(l);}
;this.__jT(this.__jP());}
}),__jT:function(bO){var bN=this.__jJ;if(bN!=bO){if(bN!=null){var ca=c;var bL={};var bT=this.getBounds();if(bT!=null){bL.width=bT.width+ca;bL.height=bT.height+ca;}
;var bU=this.getInsets();bL.left=parseInt(bN.getStyle(D)||bU.left)+ca;bL.top=parseInt(bN.getStyle(H)||bU.top)+ca;bL.zIndex=10;var bR=this.__jK?bO.getChild(0):bO;bR.setStyles(bL,true);bR.setSelectable(this.getSelectable());if(!bN.isVisible()){bO.hide();}
;if(!bN.isIncluded()){bO.exclude();}
;var bW=bN.getParent();if(bW){var bM=bW.getChildren().indexOf(bN);bW.removeAt(bM);bW.addAt(bO,bM);}
;var bQ=bR.getNodeName();bR.setSource(null);var bP=this.__jR();bR.tagNameHint=bQ;bR.setAttribute(u,bP.getAttribute(u));qx.html.Element.flush();var bY=bP.getDomElement();var bX=bO.getDomElement();var bV=bN.getListeners()||[];bV.forEach(function(cb){bO.addListener(cb.type,cb.handler,cb.self,cb.capture);}
);if(bY&&bX){var bS=bY.$$hash;bY.$$hash=bX.$$hash;bX.$$hash=bS;}
;this.__jJ=bO;}
;}
;}
,__jU:function(cd,cf){var ce=qx.util.ResourceManager.getInstance();if(!this.getEnabled()){var cc=cf.replace(/\.([a-z]+)$/,t);if(ce.has(cc)){cf=cc;this.addState(R);}
else {this.removeState(R);}
;}
;if(cd.getSource()===cf){return;}
;this.__jX(cd,cf);this.__ka(ce.getImageWidth(cf),ce.getImageHeight(cf));}
,__jV:function(cg,ck){var ci=qx.io.ImageLoader;this.__jX(cg,ck);var cj=ci.getWidth(ck);var ch=ci.getHeight(ck);this.__ka(cj,ch);}
,__jW:function(cl,co){var cp=qx.io.ImageLoader;if(qx.core.Environment.get(p)){var cn=co.toLowerCase();var cm=qx.lang.String.startsWith;if(!cm(cn,d)&&!cm(cn,G)){var self=this.self(arguments);if(!self.__Ma){self.__Ma={};}
;if(!self.__Ma[co]){this.debug(P+co);self.__Ma[co]=true;}
;}
;}
;if(!cp.isFailed(co)){cp.load(co,this.__jY,this);}
else {if(cl!=null){cl.resetSource();}
;}
;}
,__jX:function(cq,cv){if(cq.getNodeName()==j){var cy=qx.theme.manager.Decoration.getInstance().resolve(this.getDecorator());if(cy){var cw=(cy.getStartColor()&&cy.getEndColor());var cu=cy.getBackgroundImage();if(cw||cu){var cr=this.getScale()?h:T;var cs=qx.bom.element.Decoration.getAttributes(cv,cr);var ct=cy.getStyles(true);var cx={"backgroundImage":cs.style.backgroundImage,"backgroundPosition":(cs.style.backgroundPosition||n),"backgroundRepeat":(cs.style.backgroundRepeat||T)};if(cu){cx[A]+=X+ct[U]||n;cx[s]+=J+cy.getBackgroundRepeat();}
;if(cw){cx[A]+=N;cx[s]+=o;}
;cx[r]+=X+ct[f];cq.setStyles(cx);return;}
;}
else {cq.setSource(null);}
;}
;cq.setSource(cv);}
,__jY:function(cz,cA){if(this.$$disposed===true){return;}
;if(cz!==qx.util.AliasManager.getInstance().resolve(this.getSource())){this.fireEvent(k);return;}
;if(cA.failed){this.warn(a+cz);this.fireEvent(w);}
else if(cA.aborted){this.fireEvent(k);return;}
else {this.fireEvent(q);}
;this.__jV(this.__jR(),cz);}
,__ka:function(cB,cC){if(cB!==this.__jH||cC!==this.__jI){this.__jH=cB;this.__jI=cC;qx.ui.core.queue.Layout.add(this);}
;}
},destruct:function(){delete this.__jJ;if(this.__jK){delete this.__jK;}
;this._disposeMap(C);}
});}
)();
(function(){var a="load",b="",c="qx.io.ImageLoader",d="html.image.naturaldimensions";qx.Bootstrap.define(c,{statics:{__cL:{},__kb:{width:null,height:null},__kc:/\.(png|gif|jpg|jpeg|bmp)\b/i,__kd:/^data:image\/(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(e){var f=this.__cL[e];return !!(f&&f.loaded);}
,isFailed:function(g){var h=this.__cL[g];return !!(h&&h.failed);}
,isLoading:function(j){var k=this.__cL[j];return !!(k&&k.loading);}
,getFormat:function(p){var o=this.__cL[p];if(!o||!o.format){var m=this.__kd.exec(p);if(m!=null){var n=(o&&qx.lang.Type.isNumber(o.width)?o.width:this.__kb.width);var q=(o&&qx.lang.Type.isNumber(o.height)?o.height:this.__kb.height);o={loaded:true,format:m[1],width:n,height:q};}
;}
;return o?o.format:null;}
,getSize:function(r){var s=this.__cL[r];return s?{width:s.width,height:s.height}:this.__kb;}
,getWidth:function(t){var u=this.__cL[t];return u?u.width:null;}
,getHeight:function(v){var w=this.__cL[v];return w?w.height:null;}
,load:function(z,y,A){var B=this.__cL[z];if(!B){B=this.__cL[z]={};}
;if(y&&!A){A=window;}
;if(B.loaded||B.loading||B.failed){if(y){if(B.loading){B.callbacks.push(y,A);}
else {y.call(A,z,B);}
;}
;}
else {B.loading=true;B.callbacks=[];if(y){B.callbacks.push(y,A);}
;var x=new Image();var C=qx.lang.Function.listener(this.__ke,this,x,z);x.onload=C;x.onerror=C;x.src=z;B.element=x;}
;}
,abort:function(D){var G=this.__cL[D];if(G&&!G.loaded){G.aborted=true;var F=G.callbacks;var E=G.element;E.onload=E.onerror=null;E.src=b;delete G.callbacks;delete G.element;delete G.loading;for(var i=0,l=F.length;i<l;i+=2){F[i].call(F[i+1],D,G);}
;}
;this.__cL[D]=null;}
,__ke:qx.event.GlobalError.observeMethod(function(event,I,H){var M=this.__cL[H];var J=function(N){return (N&&N.height!==0);}
;if(event.type===a&&J(I)){M.loaded=true;M.width=this.__kf(I);M.height=this.__kg(I);var K=this.__kc.exec(H);if(K!=null){M.format=K[1];}
;}
else {M.failed=true;}
;I.onload=I.onerror=null;var L=M.callbacks;delete M.loading;delete M.callbacks;delete M.element;for(var i=0,l=L.length;i<l;i+=2){L[i].call(L[i+1],H,M);}
;}
),__kf:function(O){return qx.core.Environment.get(d)?O.naturalWidth:O.width;}
,__kg:function(P){return qx.core.Environment.get(d)?P.naturalHeight:P.height;}
,dispose:function(){this.__cL={};}
}});}
)();
(function(){var a="source",b="engine.name",c="",d="mshtml",e="px",f="px ",g="no-repeat",h="backgroundImage",i="scale",j="webkit",k="div",l="qx.html.Image",m="qx/static/blank.gif",n="backgroundPosition";qx.Class.define(l,{extend:qx.html.Element,members:{__kh:null,__ki:null,tagNameHint:null,setPadding:function(o,p){this.__ki=o;this.__kh=p;if(this.getNodeName()==k){this.setStyle(n,o+f+p+e);}
;}
,_applyProperty:function(name,t){qx.html.Element.prototype._applyProperty.call(this,name,t);if(name===a){var s=this.getDomElement();var q=this.getAllStyles();if(this.getNodeName()==k&&this.getStyle(h)){q.backgroundRepeat=null;}
;var u=this._getProperty(a);var r=this._getProperty(i);var v=r?i:g;if(u!=null){u=u||null;q.paddingTop=this.__kh;q.paddingLeft=this.__ki;qx.bom.element.Decoration.update(s,u,v,q);}
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
(function(){var a="qx/icon",b="repeat",c="px",d=".png",f="crop",g="px ",h="background-image",i="scale",j="no-repeat",k="div",l="Potential clipped image candidate: ",m="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",n='<div style="',o="qx.debug",p="scale-x",q="css.alphaimageloaderneeded",r="repeat-y",s='<img src="',t="qx.bom.element.Decoration",u="Image modification not possible because elements could not be replaced at runtime anymore!",v="', sizingMethod='",w="'!",x="",y='"/>',z="png",A="ImageLoader: Not recognized format of external image '",B="')",C='"></div>',D="mshtml",E="engine.name",F='" style="',G="none",H="b64",I="img",J="webkit",K=" ",L="repeat-x",M="background-repeat",N="DXImageTransform.Microsoft.AlphaImageLoader",O="qx/static/blank.gif",P="scale-y",Q="absolute";qx.Class.define(t,{statics:{DEBUG:false,__kj:{},__kk:qx.core.Environment.select(E,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__kl:{"scale-x":I,"scale-y":I,"scale":I,"repeat":k,"no-repeat":k,"repeat-x":k,"repeat-y":k},update:function(U,V,S,R){var W=this.getTagName(S,V);if(W!=U.tagName.toLowerCase()){throw new Error(u);}
;var T=this.getAttributes(V,S,R);if(W===I){U.src=T.src||qx.util.ResourceManager.getInstance().toUri(O);}
;if(U.style.backgroundPosition!=x&&T.style.backgroundPosition===undefined){T.style.backgroundPosition=null;}
;if(U.style.clip!=x&&T.style.clip===undefined){T.style.clip=null;}
;qx.bom.element.Style.setStyles(U,T.style);if(qx.core.Environment.get(q)){try{U.filters[N].apply();}
catch(e){}
;}
;}
,create:function(bb,Y,X){var bc=this.getTagName(Y,bb);var ba=this.getAttributes(bb,Y,X);var bd=qx.bom.element.Style.compile(ba.style);if(bc===I){return s+ba.src+F+bd+y;}
else {return n+bd+C;}
;}
,getTagName:function(bf,be){if(be&&qx.core.Environment.get(q)&&this.__kk[bf]&&qx.lang.String.endsWith(be,d)){return k;}
;return this.__kl[bf];}
,getAttributes:function(bk,bi,bh){if(!bh){bh={};}
;if(!bh.position){bh.position=Q;}
;if((qx.core.Environment.get(E)==D)){bh.fontSize=0;bh.lineHeight=0;}
else if((qx.core.Environment.get(E)==J)){bh.WebkitUserDrag=G;}
;var bj=qx.util.ResourceManager.getInstance().getImageFormat(bk)||qx.io.ImageLoader.getFormat(bk);if(qx.core.Environment.get(o)){if(bk!=null&&bj==null){qx.log.Logger.warn(A+bk+w);}
;}
;var bl;if(qx.core.Environment.get(q)&&this.__kk[bi]&&bj===z){var bm=this.__kn(bk);this.__km(bh,bm.width,bm.height);bl=this.processAlphaFix(bh,bi,bk);}
else {delete bh.clip;if(bi===i){bl=this.__ko(bh,bi,bk);}
else if(bi===p||bi===P){bl=this.__kp(bh,bi,bk);}
else {bl=this.__ks(bh,bi,bk);}
;}
;return bl;}
,__km:function(bo,bn,bp){if(bo.width==null&&bn!=null){bo.width=bn+c;}
;if(bo.height==null&&bp!=null){bo.height=bp+c;}
;}
,__kn:function(bq){var br=qx.util.ResourceManager.getInstance().getImageWidth(bq)||qx.io.ImageLoader.getWidth(bq);var bs=qx.util.ResourceManager.getInstance().getImageHeight(bq)||qx.io.ImageLoader.getHeight(bq);return {width:br,height:bs};}
,processAlphaFix:function(bv,bw,bu){if(bw==b||bw==L||bw==r){return bv;}
;var bx=bw==j?f:i;var bt=m+qx.util.ResourceManager.getInstance().toUri(bu)+v+bx+B;bv.filter=bt;bv.backgroundImage=bv.backgroundRepeat=x;delete bv[h];delete bv[M];return {style:bv};}
,__ko:function(bz,bA,by){var bB=qx.util.ResourceManager.getInstance().toUri(by);var bC=this.__kn(by);this.__km(bz,bC.width,bC.height);return {src:bB,style:bz};}
,__kp:function(bD,bE,bG){var bF=qx.util.ResourceManager.getInstance();var bJ=bF.getCombinedFormat(bG);var bL=this.__kn(bG);var bH;if(bJ){var bK=bF.getData(bG);var bI=bK[4];if(bJ==H){bH=bF.toDataUri(bG);}
else {bH=bF.toUri(bI);}
;if(bE===p){bD=this.__kq(bD,bK,bL.height);}
else {bD=this.__kr(bD,bK,bL.width);}
;return {src:bH,style:bD};}
else {if(qx.core.Environment.get(o)){this.__ku(bG);}
;if(bE==p){bD.height=bL.height==null?null:bL.height+c;}
else if(bE==P){bD.width=bL.width==null?null:bL.width+c;}
;bH=bF.toUri(bG);return {src:bH,style:bD};}
;}
,__kq:function(bM,bN,bP){var bO=qx.util.ResourceManager.getInstance().getImageHeight(bN[4]);bM.clip={top:-bN[6],height:bP};bM.height=bO+c;if(bM.top!=null){bM.top=(parseInt(bM.top,10)+bN[6])+c;}
else if(bM.bottom!=null){bM.bottom=(parseInt(bM.bottom,10)+bP-bO-bN[6])+c;}
;return bM;}
,__kr:function(bR,bS,bQ){var bT=qx.util.ResourceManager.getInstance().getImageWidth(bS[4]);bR.clip={left:-bS[5],width:bQ};bR.width=bT+c;if(bR.left!=null){bR.left=(parseInt(bR.left,10)+bS[5])+c;}
else if(bR.right!=null){bR.right=(parseInt(bR.right,10)+bQ-bT-bS[5])+c;}
;return bR;}
,__ks:function(bU,bV,bY){var bX=qx.util.ResourceManager.getInstance();var bW=bX.getCombinedFormat(bY);var ch=this.__kn(bY);if(bW&&bV!==b){var cg=bX.getData(bY);var ce=cg[4];if(bW==H){var cb=bX.toDataUri(bY);var ca=0;var cc=0;}
else {var cb=bX.toUri(ce);var ca=cg[5];var cc=cg[6];if(bU.paddingTop||bU.paddingLeft||bU.paddingRight||bU.paddingBottom){var top=bU.paddingTop||0;var ci=bU.paddingLeft||0;ca+=bU.paddingLeft||0;cc+=bU.paddingTop||0;bU.clip={left:ci,top:top,width:ch.width,height:ch.height};}
;}
;var cd=qx.bom.element.Background.getStyles(cb,bV,ca,cc);for(var cf in cd){bU[cf]=cd[cf];}
;if(ch.width!=null&&bU.width==null&&(bV==r||bV===j)){bU.width=ch.width+c;}
;if(ch.height!=null&&bU.height==null&&(bV==L||bV===j)){bU.height=ch.height+c;}
;return {style:bU};}
else {var top=bU.paddingTop||0;var ci=bU.paddingLeft||0;bU.backgroundPosition=ci+g+top+c;if(qx.core.Environment.get(o)){if(bV!==b){this.__ku(bY);}
;}
;this.__km(bU,ch.width,ch.height);this.__kt(bU,bY,bV);return {style:bU};}
;}
,__kt:function(cj,cm,ck){var top=null;var cp=null;if(cj.backgroundPosition){var cl=cj.backgroundPosition.split(K);cp=parseInt(cl[0],10);if(isNaN(cp)){cp=cl[0];}
;top=parseInt(cl[1],10);if(isNaN(top)){top=cl[1];}
;}
;var cn=qx.bom.element.Background.getStyles(cm,ck,cp,top);for(var co in cn){cj[co]=cn[co];}
;if(cj.filter){cj.filter=x;}
;}
,__ku:function(cq){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(cq)&&cq.indexOf(a)==-1){if(!this.__kj[cq]){qx.log.Logger.debug(l+cq);this.__kj[cq]=true;}
;}
;}
}});}
)();
(function(){var a="')",b="gecko",c="background-image:url(",d="0",e=");",f="",g="px",h="number",i=")",j="background-repeat:",k="engine.version",l="data:",m=" ",n="qx.bom.element.Background",o=";",p="url(",q="background-position:",r="base64",s="url('",t="engine.name",u="'";qx.Class.define(n,{statics:{__kv:[c,null,e,q,null,o,j,null,o],__kw:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__kx:function(z,top){var v=qx.core.Environment.get(t);var x=qx.core.Environment.get(k);if(v==b&&x<1.9&&z==top&&typeof z==h){top+=0.01;}
;if(z){var y=(typeof z==h)?z+g:z;}
else {y=d;}
;if(top){var w=(typeof top==h)?top+g:top;}
else {w=d;}
;return y+m+w;}
,__ky:function(A){var String=qx.lang.String;var B=A.substr(0,50);return String.startsWith(B,l)&&String.contains(B,r);}
,compile:function(F,D,H,top){var G=this.__kx(H,top);var E=qx.util.ResourceManager.getInstance().toUri(F);if(this.__ky(E)){E=u+E+u;}
;var C=this.__kv;C[1]=E;C[4]=G;C[7]=D;return C.join(f);}
,getStyles:function(L,J,N,top){if(!L){return this.__kw;}
;var M=this.__kx(N,top);var K=qx.util.ResourceManager.getInstance().toUri(L);var O;if(this.__ky(K)){O=s+K+a;}
else {O=p+K+i;}
;var I={backgroundPosition:M,backgroundImage:O};if(J!=null){I.backgroundRepeat=J;}
;return I;}
,set:function(T,S,Q,U,top){var P=this.getStyles(S,Q,U,top);for(var R in P){T.style[R]=P[R];}
;}
}});}
)();
(function(){var a="dragdrop-cursor",b="_applyAction",c="alias",d="qx.ui.core.DragDropCursor",e="move",f="singleton",g="copy";qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:f,construct:function(){qx.ui.basic.Image.call(this);this.setZIndex(1e8);this.setDomMove(true);var h=this.getApplicationRoot();h.add(this,{left:-1000,top:-1000});}
,properties:{appearance:{refine:true,init:a},action:{check:[c,g,e],apply:b,nullable:true}},members:{_applyAction:function(j,i){if(i){this.removeState(i);}
;if(j){this.addState(j);}
;}
}});}
)();
(function(){var a="offline",b="qx.event.handler.Offline",c="online";qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);this.__fy=d;this.__cv=d.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{online:true,offline:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fy:null,__cv:null,__hy:null,canHandleEvent:function(f,e){}
,registerEvent:function(i,h,g){}
,unregisterEvent:function(l,k,j){}
,_initObserver:function(){this.__hy=qx.lang.Function.listener(this._onNative,this);qx.bom.Event.addNativeListener(this.__cv,a,this.__hy);qx.bom.Event.addNativeListener(this.__cv,c,this.__hy);}
,_stopObserver:function(){qx.bom.Event.removeNativeListener(this.__cv,a,this.__hy);qx.bom.Event.removeNativeListener(this.__cv,c,this.__hy);}
,_onNative:qx.event.GlobalError.observeMethod(function(m){qx.event.Registration.fireEvent(this.__cv,m.type,qx.event.type.Event,[]);}
),isOnline:function(){return !!this.__cv.navigator.onLine;}
},destruct:function(){this.__fy=null;this._stopObserver();delete qx.event.handler.Appear.__instances[this.$$hash];}
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
(function(){var a="function",b="plugin.silverlight.version",c="Silverlight",d="Skype.Detection",f="QuickTimeCheckObject.QuickTimeCheck.1",g="Adobe Acrobat",h="plugin.windowsmedia",k="QuickTime",l="plugin.silverlight",m="pdf",n="wmv",o="qx.bom.client.Plugin",p="application/x-skype",q="plugin.divx",r="Chrome PDF Viewer",s="divx",t="Windows Media",u="",v="mshtml",w="skype.click2call",x="plugin.skype",y="plugin.gears",z="plugin.quicktime",A="plugin.windowsmedia.version",B="quicktime",C="DivX Web Player",D="AgControl.AgControl",E="Microsoft.XMLHTTP",F="silverlight",G="plugin.pdf",H="plugin.pdf.version",I="MSXML2.DOMDocument.6.0",J="WMPlayer.OCX.7",K="AcroPDF.PDF",L="plugin.activex",M="plugin.quicktime.version",N="plugin.divx.version",O="npdivx.DivXBrowserPlugin.1",P="object";qx.Bootstrap.define(o,{statics:{getGears:function(){return !!(window.google&&window.google.gears);}
,getActiveX:function(){if(typeof window.ActiveXObject===a){return true;}
;try{return (typeof (new window.ActiveXObject(E))===P||typeof (new window.ActiveXObject(I))===P);}
catch(Q){return false;}
;}
,getSkype:function(){if(qx.bom.client.Plugin.getActiveX()){try{new ActiveXObject(d);return true;}
catch(e){}
;}
;var R=navigator.mimeTypes;if(R){if(p in R){return true;}
;for(var i=0;i<R.length;i++ ){var S=R[i];if(S.type.indexOf(w)!=-1){return true;}
;}
;}
;return false;}
,__kz:{quicktime:{plugin:[k],control:f},wmv:{plugin:[t],control:J},divx:{plugin:[C],control:O},silverlight:{plugin:[c],control:D},pdf:{plugin:[r,g],control:K}},getQuicktimeVersion:function(){var T=qx.bom.client.Plugin.__kz[B];return qx.bom.client.Plugin.__kA(T.control,T.plugin);}
,getWindowsMediaVersion:function(){var U=qx.bom.client.Plugin.__kz[n];return qx.bom.client.Plugin.__kA(U.control,U.plugin);}
,getDivXVersion:function(){var V=qx.bom.client.Plugin.__kz[s];return qx.bom.client.Plugin.__kA(V.control,V.plugin);}
,getSilverlightVersion:function(){var W=qx.bom.client.Plugin.__kz[F];return qx.bom.client.Plugin.__kA(W.control,W.plugin);}
,getPdfVersion:function(){var X=qx.bom.client.Plugin.__kz[m];return qx.bom.client.Plugin.__kA(X.control,X.plugin);}
,getQuicktime:function(){var Y=qx.bom.client.Plugin.__kz[B];return qx.bom.client.Plugin.__kB(Y.control,Y.plugin);}
,getWindowsMedia:function(){var ba=qx.bom.client.Plugin.__kz[n];return qx.bom.client.Plugin.__kB(ba.control,ba.plugin);}
,getDivX:function(){var bb=qx.bom.client.Plugin.__kz[s];return qx.bom.client.Plugin.__kB(bb.control,bb.plugin);}
,getSilverlight:function(){var bc=qx.bom.client.Plugin.__kz[F];return qx.bom.client.Plugin.__kB(bc.control,bc.plugin);}
,getPdf:function(){var bd=qx.bom.client.Plugin.__kz[m];return qx.bom.client.Plugin.__kB(bd.control,bd.plugin);}
,__kA:function(bl,bh){var be=qx.bom.client.Plugin.__kB(bl,bh);if(!be){return u;}
;if(qx.bom.client.Engine.getName()==v){var bf=new ActiveXObject(bl);try{var bj=bf.versionInfo;if(bj!=undefined){return bj;}
;bj=bf.version;if(bj!=undefined){return bj;}
;bj=bf.settings.version;if(bj!=undefined){return bj;}
;}
catch(bm){return u;}
;return u;}
else {var bk=navigator.plugins;var bi=/([0-9]\.[0-9])/g;for(var i=0;i<bk.length;i++ ){var bg=bk[i];for(var j=0;j<bh.length;j++ ){if(bg.name.indexOf(bh[j])!==-1){if(bi.test(bg.name)||bi.test(bg.description)){return RegExp.$1;}
;}
;}
;}
;return u;}
;}
,__kB:function(bq,bo){if(qx.bom.client.Engine.getName()==v){var bn=window.ActiveXObject;if(!bn){return false;}
;try{new ActiveXObject(bq);}
catch(br){return false;}
;return true;}
else {var bp=navigator.plugins;if(!bp){return false;}
;var name;for(var i=0;i<bp.length;i++ ){name=bp[i].name;for(var j=0;j<bo.length;j++ ){if(name.indexOf(bo[j])!==-1){return true;}
;}
;}
;return false;}
;}
},defer:function(bs){qx.core.Environment.add(y,bs.getGears);qx.core.Environment.add(z,bs.getQuicktime);qx.core.Environment.add(M,bs.getQuicktimeVersion);qx.core.Environment.add(h,bs.getWindowsMedia);qx.core.Environment.add(A,bs.getWindowsMediaVersion);qx.core.Environment.add(q,bs.getDivX);qx.core.Environment.add(N,bs.getDivXVersion);qx.core.Environment.add(l,bs.getSilverlight);qx.core.Environment.add(b,bs.getSilverlightVersion);qx.core.Environment.add(G,bs.getPdf);qx.core.Environment.add(H,bs.getPdfVersion);qx.core.Environment.add(L,bs.getActiveX);qx.core.Environment.add(x,bs.getSkype);}
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
(function(){var a="borderBottomWidth",b="visible",d="engine.name",e="borderTopWidth",f="top",g="borderLeftStyle",h="none",i="overflow",j="right",k="bottom",l="borderLeftWidth",m="100px",n="-moz-scrollbars-vertical",o="borderRightStyle",p="hidden",q="div",r="left",u="qx.bom.element.Scroll",v="borderRightWidth",w="scroll",x="overflowY";qx.Class.define(u,{statics:{__kC:null,getScrollbarWidth:function(){if(this.__kC!==null){return this.__kC;}
;var y=qx.bom.element.Style;var A=function(E,F){return parseInt(y.get(E,F),10)||0;}
;var B=function(G){return (y.get(G,o)==h?0:A(G,v));}
;var C=function(H){return (y.get(H,g)==h?0:A(H,l));}
;var D=qx.core.Environment.select(d,{"mshtml":function(I){if(y.get(I,x)==p||I.clientWidth==0){return B(I);}
;return Math.max(0,I.offsetWidth-I.clientLeft-I.clientWidth);}
,"default":function(J){if(J.clientWidth==0){var L=y.get(J,i);var K=(L==w||L==n?16:0);return Math.max(0,B(J)+K);}
;return Math.max(0,(J.offsetWidth-J.clientWidth-C(J)));}
});var z=function(M){return D(M)-B(M);}
;var t=document.createElement(q);var s=t.style;s.height=s.width=m;s.overflow=w;document.body.appendChild(t);var c=z(t);this.__kC=c;document.body.removeChild(t);return this.__kC;}
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
(function(){var a="qx.ui.core.MChildrenHandling";qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();}
,hasChildren:function(){return this._hasChildren();}
,indexOf:function(b){return this._indexOf(b);}
,add:function(d,c){this._add(d,c);}
,addAt:function(g,e,f){this._addAt(g,e,f);}
,addBefore:function(h,j,i){this._addBefore(h,j,i);}
,addAfter:function(m,k,l){this._addAfter(m,k,l);}
,remove:function(n){this._remove(n);}
,removeAt:function(o){return this._removeAt(o);}
,removeAll:function(){return this._removeAll();}
},statics:{remap:function(p){p.getChildren=p._getChildren;p.hasChildren=p._hasChildren;p.indexOf=p._indexOf;p.add=p._add;p.addAt=p._addAt;p.addBefore=p._addBefore;p.addAfter=p._addAfter;p.remove=p._remove;p.removeAt=p._removeAt;p.removeAll=p._removeAll;}
}});}
)();
(function(){var a="qx.ui.container.Composite",b="addChildWidget",c="removeChildWidget",d="qx.event.type.Data";qx.Class.define(a,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(e){qx.ui.core.Widget.call(this);if(e!=null){this._setLayout(e);}
;}
,events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);}
,_afterRemoveChild:function(g){this.fireNonBubblingEvent(c,qx.event.type.Data,[g]);}
},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);qx.ui.core.MLayoutHandling.remap(i);}
});}
)();
(function(){var a="qx.ui.popup.Popup",b="visible",c="excluded",d="popup",e="Boolean";qx.Class.define(a,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);this.initVisibility();}
,properties:{appearance:{refine:true,init:d},visibility:{refine:true,init:c},autoHide:{check:e,init:true}},members:{show:function(){if(this.getLayoutParent()==null){qx.core.Init.getApplication().getRoot().add(this);}
;qx.ui.container.Composite.prototype.show.call(this);}
,_applyVisibility:function(i,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,i,h);var g=qx.ui.popup.Manager.getInstance();i===b?g.add(this):g.remove(this);}
},destruct:function(){if(!qx.ui.popup.Manager.getInstance().isDisposed()){qx.ui.popup.Manager.getInstance().remove(this);}
;}
});}
)();
(function(){var a="blur",b="qx.debug",c="__oA",d="qx.ui.popup.Manager",f="Object is no popup: ",g="pointerdown",h="singleton";qx.Class.define(d,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__oA=[];qx.event.Registration.addListener(document.documentElement,g,this.__oC,this,true);qx.bom.Element.addListener(window,a,this.hideAll,this);}
,members:{__oA:null,add:function(j){if(qx.core.Environment.get(b)){if(!(j instanceof qx.ui.popup.Popup)){throw new Error(f+j);}
;}
;this.__oA.push(j);this.__oB();}
,remove:function(k){if(qx.core.Environment.get(b)){if(!(k instanceof qx.ui.popup.Popup)){throw new Error(f+k);}
;}
;qx.lang.Array.remove(this.__oA,k);this.__oB();}
,hideAll:function(){var l=this.__oA.length,m={};while(l-- ){m=this.__oA[l];if(m.getAutoHide()){m.exclude();}
;}
;}
,__oB:function(){var n=1e7;for(var i=0;i<this.__oA.length;i++ ){this.__oA[i].setZIndex(n++ );}
;}
,__oC:function(e){var p=qx.ui.core.Widget.getWidgetByElement(e.getTarget());var q=this.__oA;for(var i=0;i<q.length;i++ ){var o=q[i];if(!o.getAutoHide()||p==o||qx.ui.core.Widget.contains(o,p)){continue;}
;o.exclude();}
;}
},destruct:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__oC,this,true);this._disposeArray(c);}
});}
)();
(function(){var a="_applyRich",b="qx.ui.tooltip.ToolTip",c="_applyIcon",d="tooltip",f="pointerover",g="qx.ui.core.Widget",h="arrow",i="Boolean",j="_applyArrowPosition",k="left",l="right",m="_applyLabel",n="Integer",o="String",p="atom";qx.Class.define(b,{extend:qx.ui.popup.Popup,construct:function(q,r){qx.ui.popup.Popup.call(this);this.setLayout(new qx.ui.layout.HBox());this._createChildControl(h);this._createChildControl(p);if(q!=null){this.setLabel(q);}
;if(r!=null){this.setIcon(r);}
;this.addListener(f,this._onPointerOver,this);}
,properties:{appearance:{refine:true,init:d},showTimeout:{check:n,init:700,themeable:true},hideTimeout:{check:n,init:4000,themeable:true},label:{check:o,nullable:true,apply:m},icon:{check:o,nullable:true,apply:c,themeable:true},rich:{check:i,init:false,apply:a},opener:{check:g,nullable:true},arrowPosition:{check:[k,l],init:k,themeable:true,apply:j}},members:{_forwardStates:{placementLeft:true},_createChildControlImpl:function(u,t){var s;switch(u){case p:s=new qx.ui.basic.Atom();this._add(s,{flex:1});break;case h:s=new qx.ui.basic.Image();this._add(s);};return s||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,u);}
,_onPointerOver:function(e){}
,_applyIcon:function(w,v){var x=this.getChildControl(p);w==null?x.resetIcon():x.setIcon(w);}
,_applyLabel:function(z,y){var A=this.getChildControl(p);z==null?A.resetLabel():A.setLabel(z);}
,_applyRich:function(C,B){var D=this.getChildControl(p);D.setRich(C);}
,_applyArrowPosition:function(F,E){this._getLayout().setReversed(F==k);}
}});}
)();
(function(){var a="Decorator",b="middle",c="_applyLayoutChange",d="width",e="_applyReversed",f="qx.debug",g="bottom",h="' is not supported by the HBox layout!",j="center",k="Boolean",m="flex",n="top",o="left",p="right",q="Integer",r="The property '",s="qx.ui.layout.HBox";qx.Class.define(s,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);if(t){this.setSpacing(t);}
;if(u){this.setAlignX(u);}
;if(v){this.setSeparator(v);}
;}
,properties:{alignX:{check:[o,j,p],init:o,apply:c},alignY:{check:[n,b,g],init:n,apply:c},spacing:{check:q,init:0,apply:c},separator:{check:a,nullable:true,apply:c},reversed:{check:k,init:false,apply:e}},members:{__ni:null,__nj:null,__nk:null,__fV:null,_applyReversed:function(){this._invalidChildrenCache=true;this._applyLayoutChange();}
,__nl:function(){var B=this._getLayoutChildren();var length=B.length;var y=false;var w=this.__ni&&this.__ni.length!=length&&this.__nj&&this.__ni;var z;var x=w?this.__ni:new Array(length);var A=w?this.__nj:new Array(length);if(this.getReversed()){B=B.concat().reverse();}
;for(var i=0;i<length;i++ ){z=B[i].getLayoutProperties();if(z.width!=null){x[i]=parseFloat(z.width)/100;}
;if(z.flex!=null){A[i]=z.flex;y=true;}
else {A[i]=0;}
;}
;if(!w){this.__ni=x;this.__nj=A;}
;this.__nk=y;this.__fV=B;delete this._invalidChildrenCache;}
,verifyLayoutProperty:qx.core.Environment.select(f,{"true":function(C,name,D){this.assert(name===m||name===d,r+name+h);if(name==d){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);}
else {this.assertNumber(D);this.assert(D>=0);}
;}
,"false":null}),renderLayout:function(U,O,T){if(this._invalidChildrenCache){this.__nl();}
;var K=this.__fV;var length=K.length;var W=qx.ui.layout.Util;var S=this.getSpacing();var Y=this.getSeparator();if(Y){var H=W.computeHorizontalSeparatorGaps(K,S,Y);}
else {var H=W.computeHorizontalGaps(K,S,true);}
;var i,V,Q,P;var X=[];var L=H;for(i=0;i<length;i+=1){P=this.__ni[i];Q=P!=null?Math.floor((U-H)*P):K[i].getSizeHint().width;X.push(Q);L+=Q;}
;if(this.__nk&&L!=U){var N={};var R,F;for(i=0;i<length;i+=1){R=this.__nj[i];if(R>0){M=K[i].getSizeHint();N[i]={min:M.minWidth,value:X[i],max:M.maxWidth,flex:R};}
;}
;var I=W.computeFlexOffsets(N,U,L);for(i in I){F=I[i].offset;X[i]+=F;L+=F;}
;}
;var bd=K[0].getMarginLeft();if(L<U&&this.getAlignX()!=o){bd=U-L;if(this.getAlignX()===j){bd=Math.round(bd/2);}
;}
;var M,top,G,Q,J,bb,E;var S=this.getSpacing();this._clearSeparators();if(Y){var ba=qx.theme.manager.Decoration.getInstance().resolve(Y).getInsets();var bc=ba.left+ba.right;}
;for(i=0;i<length;i+=1){V=K[i];Q=X[i];M=V.getSizeHint();bb=V.getMarginTop();E=V.getMarginBottom();G=Math.max(M.minHeight,Math.min(O-bb-E,M.maxHeight));top=W.computeVerticalAlignOffset(V.getAlignY()||this.getAlignY(),G,O,bb,E);if(i>0){if(Y){bd+=J+S;this._renderSeparator(Y,{left:bd+T.left,top:T.top,width:bc,height:O});bd+=bc+S+V.getMarginLeft();}
else {bd+=W.collapseMargins(S,J,V.getMarginLeft());}
;}
;V.renderLayout(bd+T.left,top+T.top,Q,G);bd+=Q;J=V.getMarginRight();}
;}
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__nl();}
;var bs=qx.ui.layout.Util;var bf=this.__fV;var bk=0,bl=0,be=0;var bi=0,bj=0;var bp,bg,br;for(var i=0,l=bf.length;i<l;i+=1){bp=bf[i];bg=bp.getSizeHint();bl+=bg.width;var bo=this.__nj[i];var bh=this.__ni[i];if(bo){bk+=bg.minWidth;}
else if(bh){be=Math.max(be,Math.round(bg.minWidth/bh));}
else {bk+=bg.width;}
;br=bp.getMarginTop()+bp.getMarginBottom();if((bg.height+br)>bj){bj=bg.height+br;}
;if((bg.minHeight+br)>bi){bi=bg.minHeight+br;}
;}
;bk+=be;var bn=this.getSpacing();var bq=this.getSeparator();if(bq){var bm=bs.computeHorizontalSeparatorGaps(bf,bn,bq);}
else {var bm=bs.computeHorizontalGaps(bf,bn,true);}
;return {minWidth:bk+bm,width:bl+bm,minHeight:bi,height:bj};}
},destruct:function(){this.__ni=this.__nj=this.__fV=null;}
});}
)();
(function(){var a="middle",b="qx.ui.layout.Util",c="left",d="center",e="top",f="bottom",g="right";qx.Class.define(b,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(j,n,h){var r,q,s,k;var m=n>h;var t=Math.abs(n-h);var u,o;var p={};for(q in j){r=j[q];p[q]={potential:m?r.max-r.value:r.value-r.min,flex:m?r.flex:1/r.flex,offset:0};}
;while(t!=0){k=Infinity;s=0;for(q in p){r=p[q];if(r.potential>0){s+=r.flex;k=Math.min(k,r.potential/r.flex);}
;}
;if(s==0){break;}
;k=Math.min(t,k*s)/s;u=0;for(q in p){r=p[q];if(r.potential>0){o=Math.min(t,r.potential,Math.ceil(k*r.flex));u+=o-k*r.flex;if(u>=1){u-=1;o-=1;}
;r.potential-=o;if(m){r.offset+=o;}
else {r.offset-=o;}
;t-=o;}
;}
;}
;return p;}
,computeHorizontalAlignOffset:function(w,v,y,z,A){if(z==null){z=0;}
;if(A==null){A=0;}
;var x=0;switch(w){case c:x=z;break;case g:x=y-v-A;break;case d:x=Math.round((y-v)/2);if(x<z){x=z;}
else if(x<A){x=Math.max(z,y-v-A);}
;break;};return x;}
,computeVerticalAlignOffset:function(C,F,B,G,D){if(G==null){G=0;}
;if(D==null){D=0;}
;var E=0;switch(C){case e:E=G;break;case f:E=B-F-D;break;case a:E=Math.round((B-F)/2);if(E<G){E=G;}
else if(E<D){E=Math.max(G,B-F-D);}
;break;};return E;}
,collapseMargins:function(K){var I=0,H=0;for(var i=0,l=arguments.length;i<l;i++ ){var J=arguments[i];if(J<0){H=Math.min(H,J);}
else if(J>0){I=Math.max(I,J);}
;}
;return I+H;}
,computeHorizontalGaps:function(O,M,L){if(M==null){M=0;}
;var N=0;if(L){N+=O[0].getMarginLeft();for(var i=1,l=O.length;i<l;i+=1){N+=this.collapseMargins(M,O[i-1].getMarginRight(),O[i].getMarginLeft());}
;N+=O[l-1].getMarginRight();}
else {for(var i=1,l=O.length;i<l;i+=1){N+=O[i].getMarginLeft()+O[i].getMarginRight();}
;N+=(M*(l-1));}
;return N;}
,computeVerticalGaps:function(S,Q,P){if(Q==null){Q=0;}
;var R=0;if(P){R+=S[0].getMarginTop();for(var i=1,l=S.length;i<l;i+=1){R+=this.collapseMargins(Q,S[i-1].getMarginBottom(),S[i].getMarginTop());}
;R+=S[l-1].getMarginBottom();}
else {for(var i=1,l=S.length;i<l;i+=1){R+=S[i].getMarginTop()+S[i].getMarginBottom();}
;R+=(Q*(l-1));}
;return R;}
,computeHorizontalSeparatorGaps:function(bb,U,Y){var T=qx.theme.manager.Decoration.getInstance().resolve(Y);var V=T.getInsets();var W=V.left+V.right;var X=0;for(var i=0,l=bb.length;i<l;i++ ){var ba=bb[i];X+=ba.getMarginLeft()+ba.getMarginRight();}
;X+=(U+W+U)*(l-1);return X;}
,computeVerticalSeparatorGaps:function(bj,bc,bh){var bf=qx.theme.manager.Decoration.getInstance().resolve(bh);var be=bf.getInsets();var bd=be.top+be.bottom;var bg=0;for(var i=0,l=bj.length;i<l;i++ ){var bi=bj[i];bg+=bi.getMarginTop()+bi.getMarginBottom();}
;bg+=(bc+bd+bc)*(l-1);return bg;}
,arrangeIdeals:function(bl,bn,bk,bm,bo,bp){if(bn<bl||bo<bm){if(bn<bl&&bo<bm){bn=bl;bo=bm;}
else if(bn<bl){bo-=(bl-bn);bn=bl;if(bo<bm){bo=bm;}
;}
else if(bo<bm){bn-=(bm-bo);bo=bm;if(bn<bl){bn=bl;}
;}
;}
;if(bn>bk||bo>bp){if(bn>bk&&bo>bp){bn=bk;bo=bp;}
else if(bn>bk){bo+=(bn-bk);bn=bk;if(bo>bp){bo=bp;}
;}
else if(bo>bp){bn+=(bo-bp);bo=bp;if(bn>bk){bn=bk;}
;}
;}
;return {begin:bn,end:bo};}
}});}
)();
(function(){var a="Boolean",b="changeGap",c="changeShow",d="bottom",e="bottom-right",f="_applyCenter",g="changeIcon",h="qx.ui.basic.Atom",i="changeLabel",j="both",k="Integer",l="_applyIconPosition",m="qx.debug",n="bottom-left",o="String",p="icon",q="top-left",r="top",s="top-right",t="right",u="_applyRich",v="_applyIcon",w="label",x="_applyShow",y="left",z="_applyLabel",A="_applyGap",B="atom";qx.Class.define(h,{extend:qx.ui.core.Widget,construct:function(D,C){if(qx.core.Environment.get(m)){this.assertArgumentsCount(arguments,0,2);}
;qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.Atom());if(D!=null){this.setLabel(D);}
;if(C!==undefined){this.setIcon(C);}
;}
,properties:{appearance:{refine:true,init:B},label:{apply:z,nullable:true,check:o,event:i},rich:{check:a,init:false,apply:u},icon:{check:o,apply:v,nullable:true,themeable:true,event:g},gap:{check:k,nullable:false,event:b,apply:A,themeable:true,init:4},show:{init:j,check:[j,w,p],themeable:true,inheritable:true,apply:x,event:c},iconPosition:{init:y,check:[r,t,d,y,q,n,s,e],themeable:true,apply:l},center:{init:false,check:a,themeable:true,apply:f}},members:{_createChildControlImpl:function(G,F){var E;switch(G){case w:E=new qx.ui.basic.Label(this.getLabel());E.setAnonymous(true);E.setRich(this.getRich());this._add(E);if(this.getLabel()==null||this.getShow()===p){E.exclude();}
;break;case p:E=new qx.ui.basic.Image(this.getIcon());E.setAnonymous(true);this._addAt(E,0);if(this.getIcon()==null||this.getShow()===w){E.exclude();}
;break;};return E||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,G);}
,_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===p){this._excludeChildControl(w);}
else {this._showChildControl(w);}
;}
,_handleIcon:function(){if(this.getIcon()==null||this.getShow()===w){this._excludeChildControl(p);}
else {this._showChildControl(p);}
;}
,_applyLabel:function(I,H){var J=this.getChildControl(w,true);if(J){J.setValue(I);}
;this._handleLabel();}
,_applyRich:function(L,K){var M=this.getChildControl(w,true);if(M){M.setRich(L);}
;}
,_applyIcon:function(O,N){var P=this.getChildControl(p,true);if(P){P.setSource(O);}
;this._handleIcon();}
,_applyGap:function(R,Q){this._getLayout().setGap(R);}
,_applyShow:function(T,S){this._handleLabel();this._handleIcon();}
,_applyIconPosition:function(V,U){this._getLayout().setIconPosition(V);}
,_applyCenter:function(X,W){this._getLayout().setCenter(X);}
,_applySelectable:function(ba,Y){qx.ui.core.Widget.prototype._applySelectable.call(this,ba,Y);var bb=this.getChildControl(w,true);if(bb){this.getChildControl(w).setSelectable(ba);}
;}
}});}
)();
(function(){var a="' is not supported by the Atom layout!",b="middle",c="_applyLayoutChange",d="top-right",e="qx.debug",f="bottom",g="top-left",h="bottom-left",j="center",k="qx.ui.layout.Atom",l="bottom-right",m="top",n="left",o="right",p="Integer",q="The property '",r="Boolean";qx.Class.define(k,{extend:qx.ui.layout.Abstract,properties:{gap:{check:p,init:4,apply:c},iconPosition:{check:[n,m,o,f,g,h,d,l],init:n,apply:c},center:{check:r,init:false,apply:c}},members:{verifyLayoutProperty:qx.core.Environment.select(e,{"true":function(s,name,t){this.assert(false,q+name+a);}
,"false":null}),renderLayout:function(J,D,I){var S=I.left;var top=I.top;var E=qx.ui.layout.Util;var v=this.getIconPosition();var y=this._getLayoutChildren();var length=y.length;var R,w;var L,C;var H=this.getGap();var O=this.getCenter();var Q=[f,o,d,l];if(Q.indexOf(v)!=-1){var F=length-1;var A=-1;var x=-1;}
else {var F=0;var A=length;var x=1;}
;if(v==m||v==f){if(O){var K=0;for(var i=F;i!=A;i+=x){w=y[i].getSizeHint().height;if(w>0){K+=w;if(i!=F){K+=H;}
;}
;}
;top+=Math.round((D-K)/2);}
;var z=top;for(var i=F;i!=A;i+=x){L=y[i];C=L.getSizeHint();R=Math.min(C.maxWidth,Math.max(J,C.minWidth));w=C.height;S=E.computeHorizontalAlignOffset(j,R,J)+I.left;L.renderLayout(S,z,R,w);if(w>0){z=top+w+H;}
;}
;}
else {var B=J;var u=null;var N=0;for(var i=F;i!=A;i+=x){L=y[i];R=L.getSizeHint().width;if(R>0){if(!u&&L instanceof qx.ui.basic.Label){u=L;}
else {B-=R;}
;N++ ;}
;}
;if(N>1){var M=(N-1)*H;B-=M;}
;if(u){var C=u.getSizeHint();var G=Math.max(C.minWidth,Math.min(B,C.maxWidth));B-=G;}
;if(O&&B>0){S+=Math.round(B/2);}
;for(var i=F;i!=A;i+=x){L=y[i];C=L.getSizeHint();w=Math.min(C.maxHeight,Math.max(D,C.minHeight));if(L===u){R=G;}
else {R=C.width;}
;var P=b;if(v==g||v==d){P=m;}
else if(v==h||v==l){P=f;}
;var z=top+E.computeVerticalAlignOffset(P,C.height,D);L.renderLayout(S,z,R,w);if(R>0){S+=R+H;}
;}
;}
;}
,_computeSizeHint:function(){var be=this._getLayoutChildren();var length=be.length;var U,bc;if(length===1){var U=be[0].getSizeHint();bc={width:U.width,height:U.height,minWidth:U.minWidth,minHeight:U.minHeight};}
else {var ba=0,bb=0;var W=0,Y=0;var X=this.getIconPosition();var V=this.getGap();if(X===m||X===f){var T=0;for(var i=0;i<length;i++ ){U=be[i].getSizeHint();bb=Math.max(bb,U.width);ba=Math.max(ba,U.minWidth);if(U.height>0){Y+=U.height;W+=U.minHeight;T++ ;}
;}
;if(T>1){var bd=(T-1)*V;Y+=bd;W+=bd;}
;}
else {var T=0;for(var i=0;i<length;i++ ){U=be[i].getSizeHint();Y=Math.max(Y,U.height);W=Math.max(W,U.minHeight);if(U.width>0){bb+=U.width;ba+=U.minWidth;T++ ;}
;}
;if(T>1){var bd=(T-1)*V;bb+=bd;ba+=bd;}
;}
;bc={minWidth:ba,width:bb,minHeight:W,height:Y};}
;return bc;}
}});}
)();
(function(){var a="qx.event.type.Data",b="qx.ui.form.IStringForm";qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;}
,resetValue:function(){}
,getValue:function(){}
}});}
)();
(function(){var a="os.name",b="_applyTextAlign",c="Boolean",d="qx.ui.core.Widget",f="nowrap",g="changeStatus",h="changeTextAlign",i="_applyWrap",j="changeValue",k="color",l="qx.ui.basic.Label",m="osx",n="css.textoverflow",o="qx.debug",p="textAlign",q="html.xul",r="_applyValue",s="center",t="Only rich labels support wrap.",u="_applyBuddy",v="enabled",w="String",x="toggleValue",y="whiteSpace",z="Only rich labels are selectable in browsers with Gecko engine!",A="function",B="qx.dynlocale",C="engine.version",D="right",E="gecko",F="justify",G="changeRich",H="normal",I="_applyRich",J="engine.name",K="label",L="changeLocale",M="left",N="tap",O="A";qx.Class.define(l,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(P){qx.ui.core.Widget.call(this);if(P!=null){this.setValue(P);}
;if(qx.core.Environment.get(B)){qx.locale.Manager.getInstance().addListener(L,this._onChangeLocale,this);}
;}
,properties:{rich:{check:c,init:false,event:G,apply:I},wrap:{check:c,init:true,apply:i},value:{check:w,apply:r,event:j,nullable:true},buddy:{check:d,apply:u,nullable:true,init:null,dereference:true},textAlign:{check:[M,s,D,F],nullable:true,themeable:true,apply:b,event:h},appearance:{refine:true,init:K},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__mc:null,__md:null,__me:null,__mf:null,__mg:null,_getContentHint:function(){if(this.__md){this.__mh=this.__mi();delete this.__md;}
;return {width:this.__mh.width,height:this.__mh.height};}
,_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();}
,_applySelectable:function(Q){if(!qx.core.Environment.get(n)&&qx.core.Environment.get(q)){if(Q&&!this.isRich()){if(qx.core.Environment.get(o)){this.warn(z);}
;return;}
;}
;qx.ui.core.Widget.prototype._applySelectable.call(this,Q);}
,_getContentHeightForWidth:function(R){if(!this.getRich()&&!this.getWrap()){return null;}
;return this.__mi(R).height;}
,_createContentElement:function(){return new qx.html.Label;}
,_applyTextAlign:function(T,S){this.getContentElement().setStyle(p,T);}
,_applyTextColor:function(V,U){if(V){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(V));}
else {this.getContentElement().removeStyle(k);}
;}
,__mh:{width:0,height:0},_applyFont:function(Y,X){if(X&&this.__mc&&this.__mg){this.__mc.removeListenerById(this.__mg);this.__mg=null;}
;var W;if(Y){this.__mc=qx.theme.manager.Font.getInstance().resolve(Y);if(this.__mc instanceof qx.bom.webfonts.WebFont){this.__mg=this.__mc.addListener(g,this._onWebFontStatusChange,this);}
;W=this.__mc.getStyles();}
else {this.__mc=null;W=qx.bom.Font.getDefaultStyles();}
;if(this.getTextColor()!=null){delete W[k];}
;this.getContentElement().setStyles(W);this.__md=true;qx.ui.core.queue.Layout.add(this);}
,__mi:function(bc){var bb=qx.bom.Label;var be=this.getFont();var ba=be?this.__mc.getStyles():qx.bom.Font.getDefaultStyles();var content=this.getValue()||O;var bd=this.getRich();if(this.__mg){this.__mj();}
;return bd?bb.getHtmlSize(content,ba,bc):bb.getTextSize(content,ba);}
,__mj:function(){if(!this.getContentElement()){return;}
;if(qx.core.Environment.get(a)==m&&qx.core.Environment.get(J)==E&&parseInt(qx.core.Environment.get(C),10)<16&&parseInt(qx.core.Environment.get(C),10)>9){var bf=this.getContentElement().getDomElement();if(bf){bf.innerHTML=bf.innerHTML;}
;}
;}
,_applyBuddy:function(bh,bg){if(bg!=null){bg.removeBinding(this.__me);this.__me=null;this.removeListenerById(this.__mf);this.__mf=null;}
;if(bh!=null){this.__me=bh.bind(v,this,v);this.__mf=this.addListener(N,function(){if(bh.isFocusable()){bh.focus.apply(bh);}
;if(x in bh&&typeof bh.toggleValue===A){bh.toggleValue();}
;}
,this);}
;}
,_applyRich:function(bi){this.getContentElement().setRich(bi);this.__md=true;qx.ui.core.queue.Layout.add(this);}
,_applyWrap:function(bl,bj){if(bl&&!this.isRich()){if(qx.core.Environment.get(o)){this.warn(t);}
;}
;if(this.isRich()){var bk=bl?H:f;this.getContentElement().setStyle(y,bk);}
;}
,_onChangeLocale:qx.core.Environment.select(B,{"true":function(e){var content=this.getValue();if(content&&content.translate){this.setValue(content.translate());}
;}
,"false":null}),_onWebFontStatusChange:function(bm){if(bm.getData().valid===true){this.__md=true;qx.ui.core.queue.Layout.add(this);}
;}
,_applyValue:function(bo,bn){this.getContentElement().setValue(bo);this.__md=true;qx.ui.core.queue.Layout.add(this);}
},destruct:function(){if(qx.core.Environment.get(B)){qx.locale.Manager.getInstance().removeListener(L,this._onChangeLocale,this);}
;if(this.__me!=null){var bp=this.getBuddy();if(bp!=null&&!bp.isDisposed()){bp.removeBinding(this.__me);}
;}
;if(this.__mc&&this.__mg){this.__mc.removeListenerById(this.__mg);}
;this.__mc=this.__me=null;}
});}
)();
(function(){var a="value",b="qx.html.Label",c="The label mode cannot be modified after initial creation";qx.Class.define(b,{extend:qx.html.Element,members:{__mk:null,_applyProperty:function(name,d){qx.html.Element.prototype._applyProperty.call(this,name,d);if(name==a){var e=this.getDomElement();qx.bom.Label.setValue(e,d);}
;}
,_createDomElement:function(){var g=this.__mk;var f=qx.bom.Label.create(this._content,g);return f;}
,_copyData:function(h){return qx.html.Element.prototype._copyData.call(this,true);}
,setRich:function(i){var j=this.getDomElement();if(j){throw new Error(c);}
;i=!!i;if(this.__mk==i){return this;}
;this.__mk=i;return this;}
,setValue:function(k){this._setProperty(a,k);return this;}
,getValue:function(){return this._getProperty(a);}
}});}
)();
(function(){var a="text",b="px",c="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",d="crop",e="nowrap",f="gecko",g="end",h="div",i="browser.name",j="100%",k="auto",l="0",m="css.textoverflow",n="html.xul",o="chrome",p="value",q="visible",r="qx.bom.Label",s="safari",t="",u="ellipsis",v="browser.version",w="engine.version",x="normal",y="mshtml",z="engine.name",A="inherit",B="block",C="label",D="-1000px",E="hidden",F="absolute";qx.Bootstrap.define(r,{statics:{__ml:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__mm:function(){var G=this.__mo(false);document.body.insertBefore(G,document.body.firstChild);return this._textElement=G;}
,__mn:function(){var H=this.__mo(true);document.body.insertBefore(H,document.body.firstChild);return this._htmlElement=H;}
,__mo:function(K){var I=qx.dom.Element.create(h);var J=I.style;J.width=J.height=k;J.left=J.top=D;J.visibility=E;J.position=F;J.overflow=q;J.display=B;if(K){J.whiteSpace=x;}
else {J.whiteSpace=e;if(!qx.core.Environment.get(m)&&qx.core.Environment.get(n)){var L=document.createElementNS(c,C);var J=L.style;J.padding=l;J.margin=l;J.width=k;for(var M in this.__ml){J[M]=A;}
;I.appendChild(L);}
;}
;return I;}
,__mp:function(O){var N={};if(O){N.whiteSpace=x;}
else if(!qx.core.Environment.get(m)&&qx.core.Environment.get(n)){N.display=B;}
else {N.overflow=E;N.whiteSpace=e;N[qx.core.Environment.get(m)]=u;}
;return N;}
,create:function(content,S,R){if(!R){R=window;}
;var P=R.document.createElement(h);if(S){P.useHtml=true;}
else if(!qx.core.Environment.get(m)&&qx.core.Environment.get(n)){var T=R.document.createElementNS(c,C);var Q=T.style;Q.cursor=A;Q.color=A;Q.overflow=E;Q.maxWidth=j;Q.padding=l;Q.margin=l;Q.width=k;for(var U in this.__ml){T.style[U]=A;}
;T.setAttribute(d,g);P.appendChild(T);}
else {qx.bom.element.Style.setStyles(P,this.__mp(S));}
;if(content){this.setValue(P,content);}
;return P;}
,setValue:function(W,V){V=V||t;if(W.useHtml){W.innerHTML=V;}
else if(!qx.core.Environment.get(m)&&qx.core.Environment.get(n)){W.firstChild.setAttribute(p,V);}
else {qx.bom.element.Attribute.set(W,a,V);}
;}
,getValue:function(X){if(X.useHtml){return X.innerHTML;}
else if(!qx.core.Environment.get(m)&&qx.core.Environment.get(n)){return X.firstChild.getAttribute(p)||t;}
else {return qx.bom.element.Attribute.get(X,a);}
;}
,getHtmlSize:function(content,Y,ba){var bb=this._htmlElement||this.__mn();bb.style.width=ba!=undefined?ba+b:k;bb.innerHTML=content;return this.__mq(bb,Y);}
,getTextSize:function(bd,bc){var be=this._textElement||this.__mm();if(!qx.core.Environment.get(m)&&qx.core.Environment.get(n)){be.firstChild.setAttribute(p,bd);}
else {qx.bom.element.Attribute.set(be,a,bd);}
;return this.__mq(be,bc);}
,__mq:function(bj,bf){var bg=this.__ml;if(!bf){bf={};}
;for(var bi in bg){bj.style[bi]=bf[bi]||t;}
;var bh=qx.bom.element.Dimension.getSize(bj);if((qx.core.Environment.get(z)==f)){bh.width++ ;}
;if((qx.core.Environment.get(z)==y)&&parseFloat(qx.core.Environment.get(w))>=9){bh.width++ ;}
;if(qx.core.Environment.get(i)==o&&parseFloat(qx.core.Environment.get(v))>=22){bh.width++ ;}
;if(qx.core.Environment.get(i)==s&&parseFloat(qx.core.Environment.get(v))>=6){bh.width++ ;}
;return bh;}
}});}
)();
(function(){var a="qx.ui.form.IForm",b="qx.event.type.Data";qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(c){return arguments.length==1;}
,getEnabled:function(){}
,setRequired:function(d){return arguments.length==1;}
,getRequired:function(){}
,setValid:function(e){return arguments.length==1;}
,getValid:function(){}
,setInvalidMessage:function(f){return arguments.length==1;}
,getInvalidMessage:function(){}
,setRequiredInvalidMessage:function(g){return arguments.length==1;}
,getRequiredInvalidMessage:function(){}
}});}
)();
(function(){var a="qx.application.Standalone";qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);}
}});}
)();
(function(){var a="_applyActiveWindow",b="changeModal",c="__fy",d="changeVisibility",f="__oD",g="changeActive",h="qx.ui.window.MDesktop",i="qx.ui.window.Window";qx.Mixin.define(h,{properties:{activeWindow:{check:i,apply:a,init:null,nullable:true}},members:{__oD:null,__fy:null,getWindowManager:function(){if(!this.__fy){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());}
;return this.__fy;}
,supportsMaximize:function(){return true;}
,setWindowManager:function(j){if(this.__fy){this.__fy.setDesktop(null);}
;j.setDesktop(this);this.__fy=j;}
,_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());}
else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);}
;}
,_applyActiveWindow:function(l,k){this.getWindowManager().changeActiveWindow(l,k);this.getWindowManager().updateStack();}
,_onChangeModal:function(e){this.getWindowManager().updateStack();}
,_onChangeVisibility:function(){this.getWindowManager().updateStack();}
,_afterAddChild:function(m){if(qx.Class.isDefined(i)&&m instanceof qx.ui.window.Window){this._addWindow(m);}
;}
,_addWindow:function(n){if(!qx.lang.Array.contains(this.getWindows(),n)){this.getWindows().push(n);n.addListener(g,this._onChangeActive,this);n.addListener(b,this._onChangeModal,this);n.addListener(d,this._onChangeVisibility,this);}
;if(n.getActive()){this.setActiveWindow(n);}
;this.getWindowManager().updateStack();}
,_afterRemoveChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._removeWindow(o);}
;}
,_removeWindow:function(p){qx.lang.Array.remove(this.getWindows(),p);p.removeListener(g,this._onChangeActive,this);p.removeListener(b,this._onChangeModal,this);p.removeListener(d,this._onChangeVisibility,this);this.getWindowManager().updateStack();}
,getWindows:function(){if(!this.__oD){this.__oD=[];}
;return this.__oD;}
},destruct:function(){this._disposeArray(f);this._disposeObjects(c);}
});}
)();
(function(){var a="__lg",b="_applyBlockerColor",c="Number",d="qx.ui.core.MBlocker",e="_applyBlockerOpacity",f="Color";qx.Mixin.define(d,{properties:{blockerColor:{check:f,init:null,nullable:true,apply:b,themeable:true},blockerOpacity:{check:c,init:1,apply:e,themeable:true}},members:{__lg:null,_createBlocker:function(){return new qx.ui.core.Blocker(this);}
,_applyBlockerColor:function(h,g){this.getBlocker().setColor(h);}
,_applyBlockerOpacity:function(j,i){this.getBlocker().setOpacity(j);}
,block:function(){this.getBlocker().block();}
,isBlocked:function(){return this.__lg&&this.__lg.isBlocked();}
,unblock:function(){if(this.__lg){this.__lg.unblock();}
;}
,forceUnblock:function(){if(this.__lg){this.__lg.forceUnblock();}
;}
,blockContent:function(k){this.getBlocker().blockContent(k);}
,getBlocker:function(){if(!this.__lg){this.__lg=this._createBlocker();}
;return this.__lg;}
},destruct:function(){this._disposeObjects(a);}
});}
)();
(function(){var a="qx.dyntheme",b="backgroundColor",c="_applyOpacity",d="Boolean",f="px",g="keydown",h="deactivate",j="changeTheme",k="__ju",l="opacity",m="Tab",n="qx.event.type.Event",o="move",p="Color",q="resize",r="__lg",s="zIndex",t="appear",u="qx.ui.root.Abstract",v="keyup",w="keypress",x="Number",y="unblocked",z="qx.ui.core.Blocker",A="disappear",B="blocked",C="_applyColor";qx.Class.define(z,{extend:qx.core.Object,events:{blocked:n,unblocked:n},construct:function(D){qx.core.Object.call(this);this._widget=D;D.addListener(q,this.__ll,this);D.addListener(o,this.__ll,this);D.addListener(A,this.__ln,this);if(qx.Class.isDefined(u)&&D instanceof qx.ui.root.Abstract){this._isRoot=true;this.setKeepBlockerActive(true);}
;if(qx.core.Environment.get(a)){qx.theme.manager.Color.getInstance().addListener(j,this._onChangeTheme,this);}
;this.__lh=[];this.__li=[];}
,properties:{color:{check:p,init:null,nullable:true,apply:C,themeable:true},opacity:{check:x,init:1,apply:c,themeable:true},keepBlockerActive:{check:d,init:false}},members:{__lg:null,__lj:0,__lh:null,__li:null,__ju:null,_widget:null,_isRoot:false,__lk:null,__ll:function(e){var E=e.getData();if(this.isBlocked()){this._updateBlockerBounds(E);}
;}
,__lm:function(){this._updateBlockerBounds(this._widget.getBounds());if(this._widget.isRootWidget()){this._widget.getContentElement().add(this.getBlockerElement());}
else {this._widget.getLayoutParent().getContentElement().add(this.getBlockerElement());}
;}
,__ln:function(){if(this.isBlocked()){this.getBlockerElement().getParent().remove(this.getBlockerElement());this._widget.addListenerOnce(t,this.__lm,this);}
;}
,_updateBlockerBounds:function(F){this.getBlockerElement().setStyles({width:F.width+f,height:F.height+f,left:F.left+f,top:F.top+f});}
,_applyColor:function(I,H){var G=qx.theme.manager.Color.getInstance().resolve(I);this.__lo(b,G);}
,_applyOpacity:function(K,J){this.__lo(l,K);}
,_onChangeTheme:qx.core.Environment.select(a,{"true":function(){this._applyColor(this.getColor());}
,"false":null}),__lo:function(M,N){var L=[];this.__lg&&L.push(this.__lg);for(var i=0;i<L.length;i++ ){L[i].setStyle(M,N);}
;}
,_backupActiveWidget:function(){var O=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);this.__lh.push(O.getActive());this.__li.push(O.getFocus());if(this._widget.isFocusable()){this._widget.focus();}
;}
,_restoreActiveWidget:function(){var R=this.__lh.length;if(R>0){var Q=this.__lh[R-1];if(Q){qx.bom.Element.activate(Q);}
;this.__lh.pop();}
;var P=this.__li.length;if(P>0){var Q=this.__li[P-1];if(Q){qx.bom.Element.focus(this.__li[P-1]);}
;this.__li.pop();}
;}
,__lp:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());}
,getBlockerElement:function(S){if(!this.__lg){this.__lg=this.__lp();this.__lg.setStyle(s,15);if(!S){if(this._isRoot){S=this._widget;}
else {S=this._widget.getLayoutParent();}
;}
;S.getContentElement().add(this.__lg);this.__lg.exclude();}
;return this.__lg;}
,block:function(){this._block();}
,_block:function(T,V){if(!this._isRoot&&!this._widget.getLayoutParent()){this.__lk=this._widget.addListenerOnce(t,this._block.bind(this,T));return;}
;var parent;if(this._isRoot||V){parent=this._widget;}
else {parent=this._widget.getLayoutParent();}
;var U=this.getBlockerElement(parent);if(T!=null){U.setStyle(s,T);}
;this.__lj++ ;if(this.__lj<2){this._backupActiveWidget();var W=this._widget.getBounds();if(W){this._updateBlockerBounds(W);}
;U.include();if(!V){U.activate();}
;U.addListener(h,this.__ls,this);U.addListener(w,this.__lr,this);U.addListener(g,this.__lr,this);U.addListener(v,this.__lr,this);this.fireEvent(B,qx.event.type.Event);}
;}
,isBlocked:function(){return this.__lj>0;}
,unblock:function(){if(this.__lk){this._widget.removeListenerById(this.__lk);}
;if(!this.isBlocked()){return;}
;this.__lj-- ;if(this.__lj<1){this.__lq();this.__lj=0;}
;}
,forceUnblock:function(){if(!this.isBlocked()){return;}
;this.__lj=0;this.__lq();}
,__lq:function(){this._restoreActiveWidget();var X=this.getBlockerElement();X.removeListener(h,this.__ls,this);X.removeListener(w,this.__lr,this);X.removeListener(g,this.__lr,this);X.removeListener(v,this.__lr,this);X.exclude();this.fireEvent(y,qx.event.type.Event);}
,blockContent:function(Y){this._block(Y,true);}
,__lr:function(e){if(e.getKeyIdentifier()==m){e.stop();}
;}
,__ls:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();}
;}
},destruct:function(){if(qx.core.Environment.get(a)){qx.theme.manager.Color.getInstance().removeListener(j,this._onChangeTheme,this);}
;this._widget.removeListener(q,this.__ll,this);this._widget.removeListener(o,this.__ll,this);this._widget.removeListener(t,this.__lm,this);this._widget.removeListener(A,this.__ln,this);if(this.__lk){this._widget.removeListenerById(this.__lk);}
;this._disposeObjects(r,k);this.__lh=this.__li=this._widget=null;}
});}
)();
(function(){var a="swipe",b="repeat",c="mousedown",d="url(",f="pointerover",g=")",h="longtap",i="mouseout",j="div",k="roll",l="cursor",m="dblclick",n="mousewheel",o="qx.html.Blocker",p="mousemove",q="dbltap",r="pointerup",s="mouseover",t="appear",u="click",v="pointerdown",w="mshtml",x="engine.name",y="mouseup",z="contextmenu",A="disappear",B="tap",C="pointermove",D="pointerout",E="qx/static/blank.gif",F="absolute";qx.Class.define(o,{extend:qx.html.Element,construct:function(I,G){var I=I?qx.theme.manager.Color.getInstance().resolve(I):null;var H={position:F,opacity:G||0,backgroundColor:I};if((qx.core.Environment.get(x)==w)){H.backgroundImage=d+qx.util.ResourceManager.getInstance().toUri(E)+g;H.backgroundRepeat=b;}
;qx.html.Element.call(this,j,H);this.addListener(c,this._stopPropagation,this);this.addListener(y,this._stopPropagation,this);this.addListener(u,this._stopPropagation,this);this.addListener(m,this._stopPropagation,this);this.addListener(p,this._stopPropagation,this);this.addListener(s,this._stopPropagation,this);this.addListener(i,this._stopPropagation,this);this.addListener(n,this._stopPropagation,this);this.addListener(k,this._stopPropagation,this);this.addListener(z,this._stopPropagation,this);this.addListener(v,this._stopPropagation,this);this.addListener(r,this._stopPropagation,this);this.addListener(C,this._stopPropagation,this);this.addListener(f,this._stopPropagation,this);this.addListener(D,this._stopPropagation,this);this.addListener(B,this._stopPropagation,this);this.addListener(q,this._stopPropagation,this);this.addListener(a,this._stopPropagation,this);this.addListener(h,this._stopPropagation,this);this.addListener(t,this.__lt,this);this.addListener(A,this.__lt,this);}
,members:{_stopPropagation:function(e){e.stopPropagation();}
,__lt:function(){var J=this.getStyle(l);this.setStyle(l,null,true);this.setStyle(l,J,true);}
}});}
)();
(function(){var a="changeGlobalCursor",b="engine.name",c="keypress",d="Boolean",f="root",g="help",h="",i="contextmenu",j=" !important",k="input",l="_applyGlobalCursor",m="Space",n="_applyNativeHelp",o=";",p="event.help",q="qx.ui.root.Abstract",r="abstract",s="textarea",t="String",u="*";qx.Class.define(q,{type:r,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);qx.ui.core.FocusHandler.getInstance().addRoot(this);qx.ui.core.queue.Visibility.add(this);this.initNativeHelp();this.addListener(c,this.__oF,this);}
,properties:{appearance:{refine:true,init:f},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:t,nullable:true,themeable:true,apply:l,event:a},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:d,init:false,apply:n}},members:{__oE:null,isRootWidget:function(){return true;}
,getLayout:function(){return this._getLayout();}
,_applyGlobalCursor:qx.core.Environment.select(b,{"mshtml":function(w,v){}
,"default":function(A,z){var y=qx.bom.Stylesheet;var x=this.__oE;if(!x){this.__oE=x=y.createElement();}
;y.removeAllRules(x);if(A){y.addRule(x,u,qx.bom.element.Cursor.compile(A).replace(o,h)+j);}
;}
}),_applyNativeContextMenu:function(C,B){if(C){this.removeListener(i,this._onNativeContextMenu,this,true);}
else {this.addListener(i,this._onNativeContextMenu,this,true);}
;}
,_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;}
;e.preventDefault();}
,__oF:function(e){if(e.getKeyIdentifier()!==m){return;}
;var E=e.getTarget();var D=qx.ui.core.FocusHandler.getInstance();if(!D.isFocused(E)){return;}
;var F=E.getContentElement().getNodeName();if(F===k||F===s){return;}
;e.preventDefault();}
,_applyNativeHelp:function(H,G){if(qx.core.Environment.get(p)){if(G===false){qx.bom.Event.removeNativeListener(document,g,(function(){return false;}
));}
;if(H===false){qx.bom.Event.addNativeListener(document,g,(function(){return false;}
));}
;}
;}
},destruct:function(){this.__oE=null;}
,defer:function(I,J){qx.ui.core.MChildrenHandling.remap(J);}
});}
)();
(function(){var a="keypress",b="focusout",c="activate",d="Tab",f="__oG",g="singleton",h="deactivate",j="focusin",k="qx.ui.core.FocusHandler";qx.Class.define(k,{extend:qx.core.Object,type:g,construct:function(){qx.core.Object.call(this);this.__oG={};}
,members:{__oG:null,__oH:null,__oI:null,__oJ:null,connectTo:function(m){m.addListener(a,this.__gJ,this);m.addListener(j,this._onFocusIn,this,true);m.addListener(b,this._onFocusOut,this,true);m.addListener(c,this._onActivate,this,true);m.addListener(h,this._onDeactivate,this,true);}
,addRoot:function(n){this.__oG[n.$$hash]=n;}
,removeRoot:function(o){delete this.__oG[o.$$hash];}
,getActiveWidget:function(){return this.__oH;}
,isActive:function(p){return this.__oH==p;}
,getFocusedWidget:function(){return this.__oI;}
,isFocused:function(q){return this.__oI==q;}
,isFocusRoot:function(r){return !!this.__oG[r.$$hash];}
,_onActivate:function(e){var t=e.getTarget();this.__oH=t;var s=this.__oK(t);if(s!=this.__oJ){this.__oJ=s;}
;}
,_onDeactivate:function(e){var u=e.getTarget();if(this.__oH==u){this.__oH=null;}
;}
,_onFocusIn:function(e){var v=e.getTarget();if(v!=this.__oI){this.__oI=v;v.visualizeFocus();}
;}
,_onFocusOut:function(e){var w=e.getTarget();if(w==this.__oI){this.__oI=null;w.visualizeBlur();}
;}
,__gJ:function(e){if(e.getKeyIdentifier()!=d){return;}
;if(!this.__oJ){return;}
;e.stopPropagation();e.preventDefault();var x=this.__oI;if(!e.isShiftPressed()){var y=x?this.__oO(x):this.__oM();}
else {var y=x?this.__oP(x):this.__oN();}
;if(y){y.tabFocus();}
;}
,__oK:function(z){var A=this.__oG;while(z){if(A[z.$$hash]){return z;}
;z=z.getLayoutParent();}
;return null;}
,__oL:function(I,H){if(I===H){return 0;}
;var C=I.getTabIndex()||0;var B=H.getTabIndex()||0;if(C!=B){return C-B;}
;var J=I.getContentElement().getDomElement();var G=H.getContentElement().getDomElement();var F=qx.bom.element.Location;var E=F.get(J);var D=F.get(G);if(E.top!=D.top){return E.top-D.top;}
;if(E.left!=D.left){return E.left-D.left;}
;var K=I.getZIndex();var L=H.getZIndex();if(K!=L){return K-L;}
;return 0;}
,__oM:function(){return this.__oS(this.__oJ,null);}
,__oN:function(){return this.__oT(this.__oJ,null);}
,__oO:function(M){var N=this.__oJ;if(N==M){return this.__oM();}
;while(M&&M.getAnonymous()){M=M.getLayoutParent();}
;if(M==null){return [];}
;var O=[];this.__oQ(N,M,O);O.sort(this.__oL);var P=O.length;return P>0?O[0]:this.__oM();}
,__oP:function(Q){var R=this.__oJ;if(R==Q){return this.__oN();}
;while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();}
;if(Q==null){return [];}
;var S=[];this.__oR(R,Q,S);S.sort(this.__oL);var T=S.length;return T>0?S[T-1]:this.__oN();}
,__oQ:function(parent,U,V){var X=parent.getLayoutChildren();var W;for(var i=0,l=X.length;i<l;i++ ){W=X[i];if(!(W instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(W)&&W.isEnabled()&&W.isVisible()){if(W.isTabable()&&this.__oL(U,W)<0){V.push(W);}
;this.__oQ(W,U,V);}
;}
;}
,__oR:function(parent,Y,ba){var bc=parent.getLayoutChildren();var bb;for(var i=0,l=bc.length;i<l;i++ ){bb=bc[i];if(!(bb instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(bb)&&bb.isEnabled()&&bb.isVisible()){if(bb.isTabable()&&this.__oL(Y,bb)>0){ba.push(bb);}
;this.__oR(bb,Y,ba);}
;}
;}
,__oS:function(parent,bd){var bf=parent.getLayoutChildren();var be;for(var i=0,l=bf.length;i<l;i++ ){be=bf[i];if(!(be instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(be)&&be.isEnabled()&&be.isVisible()){if(be.isTabable()){if(bd==null||this.__oL(be,bd)<0){bd=be;}
;}
;bd=this.__oS(be,bd);}
;}
;return bd;}
,__oT:function(parent,bg){var bi=parent.getLayoutChildren();var bh;for(var i=0,l=bi.length;i<l;i++ ){bh=bi[i];if(!(bh instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(bh)&&bh.isEnabled()&&bh.isVisible()){if(bh.isTabable()){if(bg==null||this.__oL(bh,bg)>0){bg=bh;}
;}
;bg=this.__oT(bh,bg);}
;}
;return bg;}
},destruct:function(){this._disposeMap(f);this.__oI=this.__oH=this.__oJ=null;}
});}
)();
(function(){var a="touchmove",b="-webkit-overflow-scrolling",c="touch",d="paddingLeft",f="div",g="100%",h="The root widget does not support 'left', or 'top' paddings!",i="0px",j="The application could not be started due to a missing body tag in the HTML file!",k="overflowY",l="resize",m="",n="$$widget",o="paddingTop",p="engine.name",q="none",r="webkit",s="-webkit-backface-visibility",t="touch-action",u="qx.ui.root.Application",v="hidden",w="overflowX",x="absolute";qx.Class.define(u,{extend:qx.ui.root.Abstract,construct:function(y){this.__cv=qx.dom.Node.getWindow(y);this.__oU=y;qx.ui.root.Abstract.call(this);qx.event.Registration.addListener(this.__cv,l,this._onResize,this);this._setLayout(new qx.ui.layout.Canvas());qx.ui.core.queue.Layout.add(this);qx.ui.core.FocusHandler.getInstance().connectTo(this);this.getContentElement().disableScrolling();this.getContentElement().setStyle(s,v);this.addListener(a,this.__oV,this);}
,members:{__cv:null,__oU:null,_createContentElement:function(){var z=this.__oU;if((qx.core.Environment.get(p)==r)){if(!z.body){alert(j);}
;}
;var D=z.documentElement.style;var A=z.body.style;D.overflow=A.overflow=v;D.padding=D.margin=A.padding=A.margin=i;D.width=D.height=A.width=A.height=g;var C=z.createElement(f);z.body.appendChild(C);var B=new qx.html.Root(C);B.setStyles({"position":x,"overflowX":v,"overflowY":v});B.setAttribute(n,this.toHashCode());return B;}
,_onResize:function(e){qx.ui.core.queue.Layout.add(this);if(qx.ui.popup&&qx.ui.popup.Manager){qx.ui.popup.Manager.getInstance().hideAll();}
;if(qx.ui.menu&&qx.ui.menu.Manager){qx.ui.menu.Manager.getInstance().hideAll();}
;}
,_computeSizeHint:function(){var E=qx.bom.Viewport.getWidth(this.__cv);var F=qx.bom.Viewport.getHeight(this.__cv);return {minWidth:E,width:E,maxWidth:E,minHeight:F,height:F,maxHeight:F};}
,_applyPadding:function(H,G,name){if(H&&(name==o||name==d)){throw new Error(h);}
;qx.ui.root.Abstract.prototype._applyPadding.call(this,H,G,name);}
,__oV:function(e){var I=e.getOriginalTarget();while(I&&I.style){var M=qx.bom.element.Style.get(I,t)!==q&&qx.bom.element.Style.get(I,t)!==m;var L=qx.bom.element.Style.get(I,b)===c;var K=qx.bom.element.Style.get(I,w)!=v;var J=qx.bom.element.Style.get(I,k)!=v;if(M||L||J||K){return;}
;I=I.parentNode;}
;e.preventDefault();}
},destruct:function(){this.__cv=this.__oU=null;}
});}
)();
(function(){var a="Boolean",b="': ",c="width",d="qx.ui.layout.Canvas",e="number",f="qx.debug",g="height",h="Bad format of layout property '",j="The property '",k=". The value must be either an integer or an percent string.",m="' is not supported by the Canvas layout!";qx.Class.define(d,{extend:qx.ui.layout.Abstract,properties:{desktop:{check:a,init:false}},members:{verifyLayoutProperty:qx.core.Environment.select(f,{"true":function(p,name,o){var n={top:1,left:1,bottom:1,right:1,width:1,height:1,edge:1};this.assert(n[name]==1,j+name+m);if(name==c||name==g){this.assertMatch(o,qx.ui.layout.Util.PERCENT_VALUE);}
else {if(typeof o===e){this.assertInteger(o);}
else if(qx.lang.Type.isString(o)){this.assertMatch(o,qx.ui.layout.Util.PERCENT_VALUE);}
else {this.fail(h+name+b+o+k);}
;}
;}
,"false":null}),renderLayout:function(t,v,x){var D=this._getLayoutChildren();var q,F,C;var s,top,r,u,y,w;var B,A,E,z;for(var i=0,l=D.length;i<l;i++ ){q=D[i];F=q.getSizeHint();C=q.getLayoutProperties();B=q.getMarginTop();A=q.getMarginRight();E=q.getMarginBottom();z=q.getMarginLeft();s=C.left!=null?C.left:C.edge;if(qx.lang.Type.isString(s)){s=Math.round(parseFloat(s)*t/100);}
;r=C.right!=null?C.right:C.edge;if(qx.lang.Type.isString(r)){r=Math.round(parseFloat(r)*t/100);}
;top=C.top!=null?C.top:C.edge;if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*v/100);}
;u=C.bottom!=null?C.bottom:C.edge;if(qx.lang.Type.isString(u)){u=Math.round(parseFloat(u)*v/100);}
;if(s!=null&&r!=null){y=t-s-r-z-A;if(y<F.minWidth){y=F.minWidth;}
else if(y>F.maxWidth){y=F.maxWidth;}
;s+=z;}
else {y=C.width;if(y==null){y=F.width;}
else {y=Math.round(parseFloat(y)*t/100);if(y<F.minWidth){y=F.minWidth;}
else if(y>F.maxWidth){y=F.maxWidth;}
;}
;if(r!=null){s=t-y-r-A-z;}
else if(s==null){s=z;}
else {s+=z;}
;}
;if(top!=null&&u!=null){w=v-top-u-B-E;if(w<F.minHeight){w=F.minHeight;}
else if(w>F.maxHeight){w=F.maxHeight;}
;top+=B;}
else {w=C.height;if(w==null){w=F.height;}
else {w=Math.round(parseFloat(w)*v/100);if(w<F.minHeight){w=F.minHeight;}
else if(w>F.maxHeight){w=F.maxHeight;}
;}
;if(u!=null){top=v-w-u-E-B;}
else if(top==null){top=B;}
else {top+=B;}
;}
;s+=x.left;top+=x.top;q.renderLayout(s,top,y,w);}
;}
,_computeSizeHint:function(){var X=0,J=0;var U=0,T=0;var S,G;var P,N;var W=this._getLayoutChildren();var H,M,K;var V=this.isDesktop();var L,top,I,O;for(var i=0,l=W.length;i<l;i++ ){H=W[i];M=H.getLayoutProperties();K=H.getSizeHint();var R=H.getMarginLeft()+H.getMarginRight();var Q=H.getMarginTop()+H.getMarginBottom();S=K.width+R;G=K.minWidth+R;L=M.left!=null?M.left:M.edge;if(L&&typeof L===e){S+=L;G+=L;}
;I=M.right!=null?M.right:M.edge;if(I&&typeof I===e){S+=I;G+=I;}
;X=Math.max(X,S);J=V?0:Math.max(J,G);P=K.height+Q;N=K.minHeight+Q;top=M.top!=null?M.top:M.edge;if(top&&typeof top===e){P+=top;N+=top;}
;O=M.bottom!=null?M.bottom:M.edge;if(O&&typeof O===e){P+=O;N+=O;}
;U=Math.max(U,P);T=V?0:Math.max(T,N);}
;return {width:X,minWidth:J,height:U,minHeight:T};}
}});}
)();
(function(){var a="qx.html.Root";qx.Class.define(a,{extend:qx.html.Element,construct:function(b){qx.html.Element.call(this);if(b!=null){this.useElement(b);}
;}
,members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);this.setRoot(true);qx.html.Element._modified[this.$$hash]=this;}
}});}
)();
(function(){var a="tap",b="demobrowser.demo.util.LayoutApplication",c="east";qx.Class.define(b,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);var d=new qx.ui.container.Composite(new qx.ui.layout.Dock());var f=new qx.ui.container.Composite(new qx.ui.layout.Canvas()).set({minHeight:10,minWidth:10});var g=new demobrowser.demo.util.PropertyEditor(f);f.addListener(a,this._onTapRoot,this);d.add(g,{edge:c});d.add(f);this._root=f;this._editor=g;qx.application.Standalone.prototype.getRoot.call(this).add(d,{edge:0});}
,getRoot:function(){return this._root;}
,_onTapRoot:function(e){if(e.getTarget()!==this._root){this._editor.handleWidgetTap(e);}
;}
},destruct:function(){this._root=this._editor=null;}
});}
)();
(function(){var a="Boolean",b="It is not allowed to have more than one child aligned to 'center'!",c="height",d="west",e="bottom",f="Integer",g="The property '",h="_applyLayoutChange",j="qx.debug",k="width",l="' is not supported by the Dock layout!",m="auto",n="center",o="y",p="Decorator",q="qx.ui.layout.Dock",r="_applySort",s="north",t="top",u="right",v="east",w="edge",x="south",y="flex",z="left",A="x";qx.Class.define(q,{extend:qx.ui.layout.Abstract,construct:function(C,B,E,D){qx.ui.layout.Abstract.call(this);if(C){this.setSpacingX(C);}
;if(B){this.setSpacingY(B);}
;if(E){this.setSeparatorX(E);}
;if(D){this.setSeparatorY(D);}
;}
,properties:{sort:{check:[m,o,A],init:m,apply:r},separatorX:{check:p,nullable:true,apply:h},separatorY:{check:p,nullable:true,apply:h},connectSeparators:{check:a,init:false,apply:h},spacingX:{check:f,init:0,apply:h},spacingY:{check:f,init:0,apply:h}},members:{__fV:null,__Ia:null,verifyLayoutProperty:qx.core.Environment.select(j,{"true":function(F,name,G){this.assertInArray(name,[y,w,c,k],g+name+l);if(name===w){this.assertInArray(G,[s,x,d,v,n]);}
else if(name===y){this.assertNumber(G);this.assert(G>=0);}
else {this.assertMatch(G,qx.ui.layout.Util.PERCENT_VALUE);}
;}
,"false":null}),_applySort:function(){this._invalidChildrenCache=true;this._applyLayoutChange();}
,__Ib:{north:1,south:2,west:3,east:4,center:5},__Ic:{'1':t,'2':e,'3':z,'4':u},__nl:function(){var H=this._getLayoutChildren();var P,J;var length=H.length;var L=[];var O=[];var K=[];var I=this.getSort()===o;var N=this.getSort()===A;for(var i=0;i<length;i++ ){P=H[i];K=P.getLayoutProperties().edge;if(K===n){if(J){throw new Error(b);}
;J=P;}
else if(N||I){if(K===s||K===x){I?L.push(P):O.push(P);}
else if(K===d||K===v){I?O.push(P):L.push(P);}
;}
else {L.push(P);}
;}
;var Q=L.concat(O);if(J){Q.push(J);}
;this.__fV=Q;var M=[];for(var i=0;i<length;i++ ){K=Q[i].getLayoutProperties().edge;M[i]=this.__Ib[K]||5;}
;this.__Ia=M;delete this._invalidChildrenCache;}
,renderLayout:function(bl,bb,bt){if(this._invalidChildrenCache){this.__nl();}
;var bk=qx.ui.layout.Util;var W=this.__fV;var bm=this.__Ia;var length=W.length;var ba,bu,Y,bf,bg,br,bd,T,S;var bx=[];var bc=[];var bs=this._getSeparatorWidths();var bB=this.getSpacingX();var bA=this.getSpacingY();var X=-bB;var bn=-bA;if(bs.x){X-=bs.x+bB;}
;if(bs.y){bn-=bs.y+bA;}
;for(var i=0;i<length;i++ ){bu=W[i];bf=bu.getLayoutProperties();Y=bu.getSizeHint();bd=Y.width;T=Y.height;if(bf.width!=null){bd=Math.floor(bl*parseFloat(bf.width)/100);if(bd<Y.minWidth){bd=Y.minWidth;}
else if(bd>Y.maxWidth){bd=Y.maxWidth;}
;}
;if(bf.height!=null){T=Math.floor(bb*parseFloat(bf.height)/100);if(T<Y.minHeight){T=Y.minHeight;}
else if(T>Y.maxHeight){T=Y.maxHeight;}
;}
;bx[i]=bd;bc[i]=T;switch(bm[i]){case 1:case 2:bn+=T+bu.getMarginTop()+bu.getMarginBottom()+bA;if(bs.y){bn+=bs.y+bA;}
;break;case 3:case 4:X+=bd+bu.getMarginLeft()+bu.getMarginRight()+bB;if(bs.x){X+=bs.x+bB;}
;break;default:X+=bd+bu.getMarginLeft()+bu.getMarginRight()+bB;bn+=T+bu.getMarginTop()+bu.getMarginBottom()+bA;if(bs.x){X+=bs.x+bB;}
;if(bs.y){bn+=bs.y+bA;}
;};}
;if(X!=bl){ba={};br=X<bl;for(var i=0;i<length;i++ ){bu=W[i];switch(bm[i]){case 3:case 4:case 5:bg=bu.getLayoutProperties().flex;if(bg==null&&bm[i]==5){bg=1;}
;if(bg>0){Y=bu.getSizeHint();ba[i]={min:Y.minWidth,value:bx[i],max:Y.maxWidth,flex:bg};}
;};}
;var U=bk.computeFlexOffsets(ba,bl,X);for(var i in U){S=U[i].offset;bx[i]+=S;X+=S;}
;}
;if(bn!=bb){ba={};br=bn<bb;for(var i=0;i<length;i++ ){bu=W[i];switch(bm[i]){case 1:case 2:case 5:bg=bu.getLayoutProperties().flex;if(bg==null&&bm[i]==5){bg=1;}
;if(bg>0){Y=bu.getSizeHint();ba[i]={min:Y.minHeight,value:bc[i],max:Y.maxHeight,flex:bg};}
;};}
;var U=bk.computeFlexOffsets(ba,bb,bn);for(var i in U){S=U[i].offset;bc[i]+=S;bn+=S;}
;}
;this._clearSeparators();var bw=this.getSeparatorX(),bv=this.getSeparatorY();var by=this.getConnectSeparators();var bi=0,bq=0;var bF,top,bd,T,bh,bC;var bj,bz,bE,bo;var bD,R,be,V;var bp=this.__Ic;for(var i=0;i<length;i++ ){bu=W[i];bC=bm[i];Y=bu.getSizeHint();bD=bu.getMarginTop();R=bu.getMarginBottom();be=bu.getMarginLeft();V=bu.getMarginRight();switch(bC){case 1:case 2:bd=bl-be-V;if(bd<Y.minWidth){bd=Y.minWidth;}
else if(bd>Y.maxWidth){bd=Y.maxWidth;}
;T=bc[i];top=bi+bk.computeVerticalAlignOffset(bp[bC],T,bb,bD,R);bF=bq+bk.computeHorizontalAlignOffset(bu.getAlignX()||z,bd,bl,be,V);if(bs.y){if(bC==1){bz=bi+T+bD+bA+R;}
else {bz=bi+bb-T-bD-bA-R-bs.y;}
;bj=bF;bE=bl;if(by&&bj>0){bj-=bB+be;bE+=(bB)*2;}
else {bj-=be;}
;this._renderSeparator(bv,{left:bj+bt.left,top:bz+bt.top,width:bE,height:bs.y});}
;bh=T+bD+R+bA;if(bs.y){bh+=bs.y+bA;}
;bb-=bh;if(bC==1){bi+=bh;}
;break;case 3:case 4:T=bb-bD-R;if(T<Y.minHeight){T=Y.minHeight;}
else if(T>Y.maxHeight){T=Y.maxHeight;}
;bd=bx[i];bF=bq+bk.computeHorizontalAlignOffset(bp[bC],bd,bl,be,V);top=bi+bk.computeVerticalAlignOffset(bu.getAlignY()||t,T,bb,bD,R);if(bs.x){if(bC==3){bj=bq+bd+be+bB+V;}
else {bj=bq+bl-bd-be-bB-V-bs.x;}
;bz=top;bo=bb;if(by&&bz>0){bz-=bA+bD;bo+=(bA)*2;}
else {bz-=bD;}
;this._renderSeparator(bw,{left:bj+bt.left,top:bz+bt.top,width:bs.x,height:bo});}
;bh=bd+be+V+bB;if(bs.x){bh+=bs.x+bB;}
;bl-=bh;if(bC==3){bq+=bh;}
;break;default:bd=bl-be-V;T=bb-bD-R;if(bd<Y.minWidth){bd=Y.minWidth;}
else if(bd>Y.maxWidth){bd=Y.maxWidth;}
;if(T<Y.minHeight){T=Y.minHeight;}
else if(T>Y.maxHeight){T=Y.maxHeight;}
;bF=bq+bk.computeHorizontalAlignOffset(bu.getAlignX()||z,bd,bl,be,V);top=bi+bk.computeVerticalAlignOffset(bu.getAlignY()||t,T,bb,bD,R);};bu.renderLayout(bF+bt.left,top+bt.top,bd,T);}
;}
,_getSeparatorWidths:function(){var bH=this.getSeparatorX(),bG=this.getSeparatorY();if(bH||bG){var bK=qx.theme.manager.Decoration.getInstance();}
;if(bH){var bN=bK.resolve(bH);var bJ=bN.getInsets();var bM=bJ.left+bJ.right;}
;if(bG){var bO=bK.resolve(bG);var bI=bO.getInsets();var bL=bI.top+bI.bottom;}
;return {x:bM||0,y:bL||0};}
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__nl();}
;var bS=this.__fV;var cd=this.__Ia;var length=bS.length;var bW,ce;var bY,bX;var ca=0,cl=0;var bP=0,cg=0;var cb=0,ck=0;var bQ=0,cf=0;var ch=this._getSeparatorWidths();var cj=this.getSpacingX(),ci=this.getSpacingY();var bU=-cj,bT=-ci;if(ch.x){bU-=ch.x+cj;}
;if(ch.y){bT-=ch.y+ci;}
;for(var i=0;i<length;i++ ){ce=bS[i];bW=ce.getSizeHint();bY=ce.getMarginLeft()+ce.getMarginRight();bX=ce.getMarginTop()+ce.getMarginBottom();switch(cd[i]){case 1:case 2:cb=Math.max(cb,bW.width+ca+bY);ck=Math.max(ck,bW.minWidth+cl+bY);bQ+=bW.height+bX;cf+=bW.minHeight+bX;bT+=ci;if(ch.y){bT+=ch.y+ci;}
;break;case 3:case 4:bP=Math.max(bP,bW.height+bQ+bX);cg=Math.max(cg,bW.minHeight+cf+bX);ca+=bW.width+bY;cl+=bW.minWidth+bY;bU+=cj;if(ch.x){bU+=ch.x+cj;}
;break;default:ca+=bW.width+bY;cl+=bW.minWidth+bY;bQ+=bW.height+bX;cf+=bW.minHeight+bX;bU+=cj;if(ch.x){bU+=ch.x+cj;}
;bT+=ci;if(ch.y){bT+=ch.y+ci;}
;};}
;var bV=Math.max(cl,ck)+bU;var cm=Math.max(ca,cb)+bU;var cc=Math.max(cg,cf)+bT;var bR=Math.max(bP,bQ)+bT;return {minWidth:bV,width:cm,minHeight:cc,height:bR};}
},destruct:function(){this.__Ia=this.__fV=null;}
});}
)();
(function(){var a="mouse",b="scrollbar-y",c="qx.ui.core.scroll.MRoll",d="pointerdown",f="scrollbar-x",g="roll";qx.Mixin.define(c,{members:{__nq:null,_addRollHandling:function(){this.addListener(g,this._onRoll,this);this.addListener(d,this._onPointerDownForRoll,this);}
,_removeRollHandling:function(){this.removeListener(g,this._onRoll,this);this.removeListener(d,this._onPointerDownForRoll,this);}
,_onPointerDownForRoll:function(e){this.__nq=e.getPointerId();}
,_onRoll:function(e){if(e.getPointerType()==a){return;}
;if(this.__nq&&e.getMomentum()){qx.event.Registration.getManager(e.getOriginalTarget()).getHandler(qx.event.handler.Gesture).gestureCancel(this.__nq);e.stopMomentum();this.__nq=null;return;}
;this.__nq=null;var k=this._isChildControlVisible(f);var l=this._isChildControlVisible(b);var q=l?this.getChildControl(b,true):null;var p=k?this.getChildControl(f,true):null;var m=e.getDelta().y;var h=e.getDelta().x;var j=!l;var o=!k;if(q){if(m!==0){q.scrollBy(parseInt(m,10));}
;var n=q.getPosition();var i=q.getMaximum();if(m<0&&n<=0||m>0&&n>=i){j=true;}
;}
;if(p){if(h!==0){p.scrollBy(parseInt(h,10));}
;var n=p.getPosition();var i=p.getMaximum();if(h<0&&n<=0||h>0&&n>=i){o=true;}
;}
;if(o&&j){e.stopMomentum();}
;if((!j&&h===0)||(!o&&m===0)||((!o||!j)&&h!==0&&m!==0)){e.stop();}
;}
}});}
)();
(function(){var a="x",b="Float",c="qx.ui.core.MDragDropScrolling",d="",f="). Must be: 'left', 'right', 'top' or 'bottom'",g="bottom",h="interval",i="dragend",j="scrollbar-",k="drag",l="Invalid edge type given (",m="top",n="left",o="right",p="Integer",q="y";qx.Mixin.define(c,{construct:function(){this.addListener(k,this.__nu,this);this.addListener(i,this.__nv,this);this.__nr=[n,o];this.__ns=[m,g];}
,properties:{dragScrollThresholdX:{check:p,init:30},dragScrollThresholdY:{check:p,init:30},dragScrollSlowDownFactor:{check:b,init:0.1}},members:{__nt:null,__nr:null,__ns:null,_findScrollableParent:function(r){var s=r;if(s===null){return null;}
;while(s.getLayoutParent()){s=s.getLayoutParent();if(this._isScrollable(s)){return s;}
;}
;return null;}
,_isScrollable:function(t){return qx.Class.hasMixin(t.constructor,qx.ui.core.scroll.MScrollBarFactory);}
,_getBounds:function(u){var v=u.getContentLocation();if(u.getScrollAreaContainer){v=u.getScrollAreaContainer().getContentLocation();}
;return v;}
,_getEdgeType:function(x,y,w){if((x.left*-1)<=y&&x.left<0){return n;}
else if((x.top*-1)<=w&&x.top<0){return m;}
else if(x.right<=y&&x.right>0){return o;}
else if(x.bottom<=w&&x.bottom>0){return g;}
else {return null;}
;}
,_getAxis:function(z){if(this.__nr.indexOf(z)!==-1){return a;}
else if(this.__ns.indexOf(z)!==-1){return q;}
else {throw new Error(l+z+f);}
;}
,_getThresholdByEdgeType:function(A){if(this.__nr.indexOf(A)!==-1){return this.getDragScrollThresholdX();}
else if(this.__ns.indexOf(A)!==-1){return this.getDragScrollThresholdY();}
;}
,_isScrollbarVisible:function(B,C){if(B&&B._isChildControlVisible){return B._isChildControlVisible(j+C);}
else {return false;}
;}
,_isScrollbarExceedingMaxPos:function(E,G,D){var F=0;if(!E){return true;}
;F=E.getPosition()+D;return (F>E.getMaximum()||F<0);}
,_calculateThresholdExceedance:function(I,H){var J=H-Math.abs(I);return I<0?(J*-1):J;}
,_calculateScrollAmount:function(K,L){return Math.floor(((K/100)*L)*this.getDragScrollSlowDownFactor());}
,_scrollBy:function(M,S,P){var R=M.getChildControl(j+S,true);if(!R){return;}
;var O=R.getBounds(),N=S===a?O.width:O.height,Q=this._calculateScrollAmount(N,P);if(this._isScrollbarExceedingMaxPos(R,S,Q)){this.__nt.stop();}
;R.scrollBy(Q);}
,__nu:function(e){if(this.__nt){this.__nt.stop();}
;var T=this._findScrollableParent(e.getOriginalTarget());if(T){var X=this._getBounds(T),U=e.getDocumentLeft(),W=e.getDocumentTop(),ba={"left":X.left-U,"right":X.right-U,"top":X.top-W,"bottom":X.bottom-W},V=null,bb=d,Y=0;V=this._getEdgeType(ba,this.getDragScrollThresholdX(),this.getDragScrollThresholdY());if(!V){return;}
;bb=this._getAxis(V);if(this._isScrollbarVisible(T,bb)){Y=this._calculateThresholdExceedance(ba[V],this._getThresholdByEdgeType(V));if(this.__nt){this.__nt.dispose();}
;this.__nt=new qx.event.Timer(50);this.__nt.addListener(h,function(bc,be,bd){this._scrollBy(bc,be,bd);}
.bind(this,T,bb,Y));this.__nt.start();}
;}
;}
,__nv:function(e){if(this.__nt){this.__nt.stop();}
;}
},destruct:function(){if(this.__nt){this.__nt.dispose();}
;}
});}
)();
(function(){var a="qx.nativeScrollBars",b="qx.ui.core.scroll.MScrollBarFactory";qx.core.Environment.add(a,false);qx.Mixin.define(b,{members:{_createScrollBar:function(c){if(qx.core.Environment.get(a)){return new qx.ui.core.scroll.NativeScrollBar(c);}
else {return new qx.ui.core.scroll.ScrollBar(c);}
;}
}});}
)();
(function(){var a='qx.event.type.Event',b="qx.ui.core.scroll.IScrollBar",c="qx.event.type.Data";qx.Interface.define(b,{events:{"scroll":c,"scrollAnimationEnd":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(e,d){this.assertNumber(e);}
,scrollBy:function(g,f){this.assertNumber(g);}
,scrollBySteps:function(i,h){this.assertNumber(i);}
}});}
)();
(function(){var a="qx.ui.core.scroll.NativeScrollBar",b="px",c="PositiveNumber",d="frame",f="end",g="box-sizing",h="Integer",i="track",j="__nx",k="hidden",l="content-box",m="pointerup",n="vertical",o="_applyOrientation",p="scrollAnimationEnd",q="appear",r="pointerdown",s="PositiveInteger",t='qx.event.type.Event',u="mshtml",v="engine.name",w="horizontal",x="Number",y="_applyPosition",z="scrollbar",A="_applyMaximum",B="pointermove",C="native",D="scroll";qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(E){qx.ui.core.Widget.call(this);this.addState(C);this.getContentElement().addListener(D,this._onScroll,this);this.addListener(r,this._stopPropagation,this);this.addListener(m,this._stopPropagation,this);this.addListener(B,this._stopPropagation,this);this.addListener(q,this._onAppear,this);this.getContentElement().add(this._getScrollPaneElement());this.getContentElement().setStyle(g,l);if(E!=null){this.setOrientation(E);}
else {this.initOrientation();}
;this.addListener(i,function(e){e.stopPropagation();}
,this);}
,events:{scrollAnimationEnd:t},properties:{appearance:{refine:true,init:z},orientation:{check:[w,n],init:w,apply:o},maximum:{check:s,apply:A,init:100},position:{check:x,init:0,apply:y,event:D},singleStep:{check:h,init:20},knobFactor:{check:c,nullable:true}},members:{__nw:null,__nx:null,__jL:null,__ny:null,_getScrollPaneElement:function(){if(!this.__nx){this.__nx=new qx.html.Element();}
;return this.__nx;}
,renderLayout:function(G,top,F,I){var H=qx.ui.core.Widget.prototype.renderLayout.call(this,G,top,F,I);this._updateScrollBar();return H;}
,_getContentHint:function(){var J=qx.bom.element.Scroll.getScrollbarWidth();return {width:this.__nw?100:J,maxWidth:this.__nw?null:J,minWidth:this.__nw?null:J,height:this.__nw?J:100,maxHeight:this.__nw?J:null,minHeight:this.__nw?J:null};}
,_applyEnabled:function(L,K){qx.ui.core.Widget.prototype._applyEnabled.call(this,L,K);this._updateScrollBar();}
,_applyMaximum:function(M){this._updateScrollBar();}
,_applyPosition:function(N){var content=this.getContentElement();if(this.__nw){content.scrollToX(N);}
else {content.scrollToY(N);}
;}
,_applyOrientation:function(Q,O){var P=this.__nw=Q===w;this.set({allowGrowX:P,allowShrinkX:P,allowGrowY:!P,allowShrinkY:!P});if(P){this.replaceState(n,w);}
else {this.replaceState(w,n);}
;this.getContentElement().setStyles({overflowX:P?D:k,overflowY:P?k:D});qx.ui.core.queue.Layout.add(this);}
,_updateScrollBar:function(){var S=this.__nw;var T=this.getBounds();if(!T){return;}
;if(this.isEnabled()){var U=S?T.width:T.height;var R=this.getMaximum()+U;}
else {R=0;}
;if(qx.core.Environment.get(v)==u){var T=this.getBounds();this.getContentElement().setStyles({left:(S?T.left:(T.left-1))+b,top:(S?(T.top-1):T.top)+b,width:(S?T.width:T.width+1)+b,height:(S?T.height+1:T.height)+b});}
;this._getScrollPaneElement().setStyles({left:0,top:0,width:(S?R:1)+b,height:(S?1:R)+b});this.updatePosition(this.getPosition());}
,scrollTo:function(W,V){this.stopScrollAnimation();if(V){var X=this.getPosition();this.__ny=new qx.bom.AnimationFrame();this.__ny.on(d,function(ba){var Y=parseInt(ba/V*(W-X)+X);this.updatePosition(Y);}
,this);this.__ny.on(f,function(){this.setPosition(Math.max(0,Math.min(this.getMaximum(),W)));this.__ny=null;this.fireEvent(p);}
,this);this.__ny.startSequence(V);}
else {this.updatePosition(W);}
;}
,updatePosition:function(bb){this.setPosition(Math.max(0,Math.min(this.getMaximum(),bb)));}
,scrollBy:function(bd,bc){this.scrollTo(this.getPosition()+bd,bc);}
,scrollBySteps:function(bf,be){var bg=this.getSingleStep();this.scrollBy(bf*bg,be);}
,stopScrollAnimation:function(){if(this.__ny){this.__ny.cancelSequence();this.__ny=null;}
;}
,_onScroll:function(e){var bh=this.getContentElement();var bi=this.__nw?bh.getScrollX():bh.getScrollY();this.setPosition(bi);}
,_onAppear:function(e){this._applyPosition(this.getPosition());}
,_stopPropagation:function(e){e.stopPropagation();}
},destruct:function(){this._disposeObjects(j);}
});}
)();
(function(){var a="slider",b="slideAnimationEnd",c="PositiveNumber",d="changeValue",f="Integer",g="execute",h="track",i="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",j="_applyKnobFactor",k="visible",l="qx.event.type.Event",m="knob",n="button-begin",o="hidden",p="qx.ui.core.scroll.ScrollBar",q="resize",r="vertical",s="_applyOrientation",t="scrollAnimationEnd",u="_applyPageStep",v="right",w="PositiveInteger",x="horizontal",y="up",z="_applyPosition",A="scrollbar",B="_applyMaximum",C="left",D="button-end",E="down",F="scroll";qx.Class.define(p,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(G){qx.ui.core.Widget.call(this);this._createChildControl(n);this._createChildControl(a).addListener(q,this._onResizeSlider,this);this._createChildControl(D);if(G!=null){this.setOrientation(G);}
else {this.initOrientation();}
;this.addListener(h,function(e){e.stopPropagation();}
,this);}
,events:{"scrollAnimationEnd":l},properties:{appearance:{refine:true,init:A},orientation:{check:[x,r],init:x,apply:s},maximum:{check:w,apply:B,init:100},position:{check:i,init:0,apply:z,event:F},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:u},knobFactor:{check:c,apply:j,nullable:true}},members:{__xK:2,__xL:0,_computeSizeHint:function(){var H=qx.ui.core.Widget.prototype._computeSizeHint.call(this);if(this.getOrientation()===x){this.__xL=H.minWidth;H.minWidth=0;}
else {this.__xL=H.minHeight;H.minHeight=0;}
;return H;}
,renderLayout:function(M,top,J,I){var L=qx.ui.core.Widget.prototype.renderLayout.call(this,M,top,J,I);var K=this.getOrientation()===x;if(this.__xL>=(K?J:I)){this.getChildControl(n).setVisibility(o);this.getChildControl(D).setVisibility(o);}
else {this.getChildControl(n).setVisibility(k);this.getChildControl(D).setVisibility(k);}
;return L;}
,_createChildControlImpl:function(P,O){var N;switch(P){case a:N=new qx.ui.core.scroll.ScrollSlider();N.setPageStep(100);N.setFocusable(false);N.addListener(d,this._onChangeSliderValue,this);N.addListener(b,this._onSlideAnimationEnd,this);this._add(N,{flex:1});break;case n:N=new qx.ui.form.RepeatButton();N.setFocusable(false);N.addListener(g,this._onExecuteBegin,this);this._add(N);break;case D:N=new qx.ui.form.RepeatButton();N.setFocusable(false);N.addListener(g,this._onExecuteEnd,this);this._add(N);break;};return N||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,P);}
,_applyMaximum:function(Q){this.getChildControl(a).setMaximum(Q);}
,_applyPosition:function(R){this.getChildControl(a).setValue(R);}
,_applyKnobFactor:function(S){this.getChildControl(a).setKnobFactor(S);}
,_applyPageStep:function(T){this.getChildControl(a).setPageStep(T);}
,_applyOrientation:function(W,U){var V=this._getLayout();if(V){V.dispose();}
;if(W===x){this._setLayout(new qx.ui.layout.HBox());this.setAllowStretchX(true);this.setAllowStretchY(false);this.replaceState(r,x);this.getChildControl(n).replaceState(y,C);this.getChildControl(D).replaceState(E,v);}
else {this._setLayout(new qx.ui.layout.VBox());this.setAllowStretchX(false);this.setAllowStretchY(true);this.replaceState(x,r);this.getChildControl(n).replaceState(C,y);this.getChildControl(D).replaceState(v,E);}
;this.getChildControl(a).setOrientation(W);}
,scrollTo:function(Y,X){this.getChildControl(a).slideTo(Y,X);}
,scrollBy:function(bb,ba){this.getChildControl(a).slideBy(bb,ba);}
,scrollBySteps:function(bd,bc){var be=this.getSingleStep();this.getChildControl(a).slideBy(bd*be,bc);}
,updatePosition:function(bf){this.getChildControl(a).updatePosition(bf);}
,stopScrollAnimation:function(){this.getChildControl(a).stopSlideAnimation();}
,_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep(),50);}
,_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep(),50);}
,_onSlideAnimationEnd:function(){this.fireEvent(t);}
,_onChangeSliderValue:function(e){this.setPosition(e.getData());}
,_onResizeSlider:function(e){var bg=this.getChildControl(a).getChildControl(m);var bj=bg.getSizeHint();var bh=false;var bi=this.getChildControl(a).getInnerSize();if(this.getOrientation()==r){if(bi.height<bj.minHeight+this.__xK){bh=true;}
;}
else {if(bi.width<bj.minWidth+this.__xK){bh=true;}
;}
;if(bh){bg.exclude();}
else {bg.show();}
;}
}});}
)();
(function(){var a="",b="qx.ui.form.MForm",c="Boolean",d="_applyValid",f="changeLocale",g="changeRequired",h="changeValid",i="qx.dynlocale",j="changeInvalidMessage",k="String",l="invalid";qx.Mixin.define(b,{construct:function(){if(qx.core.Environment.get(i)){qx.locale.Manager.getInstance().addListener(f,this.__mr,this);}
;}
,properties:{valid:{check:c,init:true,apply:d,event:h},required:{check:c,init:false,event:g},invalidMessage:{check:k,init:a,event:j},requiredInvalidMessage:{check:k,nullable:true,event:j}},members:{_applyValid:function(n,m){n?this.removeState(l):this.addState(l);}
,__mr:qx.core.Environment.select(i,{"true":function(e){var o=this.getInvalidMessage();if(o&&o.translate){this.setInvalidMessage(o.translate());}
;var p=this.getRequiredInvalidMessage();if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());}
;}
,"false":null})},destruct:function(){if(qx.core.Environment.get(i)){qx.locale.Manager.getInstance().removeListener(f,this.__mr,this);}
;}
});}
)();
(function(){var a="qx.ui.form.IRange";qx.Interface.define(a,{members:{setMinimum:function(b){return arguments.length==1;}
,getMinimum:function(){}
,setMaximum:function(c){return arguments.length==1;}
,getMaximum:function(){}
,setSingleStep:function(d){return arguments.length==1;}
,getSingleStep:function(){}
,setPageStep:function(e){return arguments.length==1;}
,getPageStep:function(){}
}});}
)();
(function(){var a="qx.ui.form.INumberForm",b="qx.event.type.Data";qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;}
,resetValue:function(){}
,getValue:function(){}
}});}
)();
(function(){var a="slider",b="hovered",c="pressed",d="px",f="pointerover",g="PageUp",h="changeValue",i="frame",j="end",k='qx.event.type.Data',l="Left",m="Down",n="Integer",o="roll",p="qx.ui.form.Slider",q="PageDown",r="interval",s="_applyValue",t="Up",u="_applyKnobFactor",v="End",w="pointermove",x="height",y="y",z="dbltap",A="resize",B="pointerup",C="vertical",D="Right",E="width",F="_applyOrientation",G="left",H="Home",I="floor",J="_applyMinimum",K="pointerdown",L="top",M="changeMaximum",N="horizontal",O="slideAnimationEnd",P="knob",Q="ceil",R='qx.event.type.Event',S="x",T="keypress",U="losecapture",V="contextmenu",W="wheel",X="_applyMaximum",Y="Number",bf="tap",bg="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",bh="changeMinimum",be="pointerout";qx.Class.define(p,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(bi){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.Canvas());this.addListener(T,this._onKeyPress);this.addListener(o,this._onRoll);this.addListener(K,this._onPointerDown);this.addListener(B,this._onPointerUp);this.addListener(U,this._onPointerUp);this.addListener(A,this._onUpdate);this.addListener(V,this._onStopEvent);this.addListener(bf,this._onStopEvent);this.addListener(z,this._onStopEvent);if(bi!=null){this.setOrientation(bi);}
else {this.initOrientation();}
;}
,events:{changeValue:k,slideAnimationEnd:R},properties:{appearance:{refine:true,init:a},focusable:{refine:true,init:true},orientation:{check:[N,C],init:N,apply:F},value:{check:bg,init:0,apply:s,nullable:true},minimum:{check:n,init:0,apply:J,event:bh},maximum:{check:n,init:100,apply:X,event:M},singleStep:{check:n,init:1},pageStep:{check:n,init:10},knobFactor:{check:Y,apply:u,nullable:true}},members:{__xM:null,__xN:null,__xO:null,__xP:null,__xQ:null,__xR:null,__xS:null,__xT:null,__ju:null,__xU:null,__xV:null,__xW:null,__ny:null,_forwardStates:{invalid:true},renderLayout:function(bk,top,bj,bl){qx.ui.core.Widget.prototype.renderLayout.call(this,bk,top,bj,bl);this._updateKnobPosition();}
,_createChildControlImpl:function(bo,bn){var bm;switch(bo){case P:bm=new qx.ui.core.Widget();bm.addListener(A,this._onUpdate,this);bm.addListener(f,this._onPointerOver);bm.addListener(be,this._onPointerOut);this._add(bm);break;};return bm||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bo);}
,_onPointerOver:function(e){this.addState(b);}
,_onPointerOut:function(e){this.removeState(b);}
,_onRoll:function(e){if(e.getPointerType()!=W){return;}
;var bq=this.getOrientation()===N?S:y;var br=e.getDelta()[bq];var bp=br>0?1:br<0?-1:0;this.slideBy(bp*this.getSingleStep());e.stop();}
,_onKeyPress:function(e){var bt=this.getOrientation()===N;var bs=bt?l:t;var forward=bt?D:m;switch(e.getKeyIdentifier()){case forward:this.slideForward();break;case bs:this.slideBack();break;case q:this.slidePageForward(100);break;case g:this.slidePageBack(100);break;case H:this.slideToBegin(200);break;case v:this.slideToEnd(200);break;default:return;};e.stop();}
,_onPointerDown:function(e){if(this.__xP){return;}
;var bw=this.__nw;var bu=this.getChildControl(P);var bv=bw?G:L;var bA=bw?e.getDocumentLeft():e.getDocumentTop();var bC=this.getDecorator();bC=qx.theme.manager.Decoration.getInstance().resolve(bC);if(bw){var bz=bC?bC.getInsets().left:0;var by=(this.getPaddingLeft()||0)+bz;}
else {var bz=bC?bC.getInsets().top:0;var by=(this.getPaddingTop()||0)+bz;}
;var bB=this.__xM=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bv];bB+=by;var bx=this.__xN=qx.bom.element.Location.get(bu.getContentElement().getDomElement())[bv];if(e.getTarget()===bu){this.__xP=true;if(!this.__xU){this.__xU=new qx.event.Timer(100);this.__xU.addListener(r,this._fireValue,this);}
;this.__xU.start();this.__xQ=bA+bB-bx;bu.addState(c);}
else {this.__xR=true;this.__xS=bA<=bx?-1:1;this.__xY(e);this._onInterval();if(!this.__ju){this.__ju=new qx.event.Timer(100);this.__ju.addListener(r,this._onInterval,this);}
;this.__ju.start();}
;this.addListener(w,this._onPointerMove);this.capture();e.stopPropagation();}
,_onPointerUp:function(e){if(this.__xP){this.releaseCapture();delete this.__xP;this.__xU.stop();this._fireValue();delete this.__xQ;this.getChildControl(P).removeState(c);if(e.getType()===B){var bE;var bF;var bD;if(this.__nw){bE=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__xM);bD=qx.bom.element.Location.get(this.getContentElement().getDomElement())[L];bF=e.getDocumentTop()-(bD+this.getChildControl(P).getBounds().top);}
else {bE=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__xM);bD=qx.bom.element.Location.get(this.getContentElement().getDomElement())[G];bF=e.getDocumentLeft()-(bD+this.getChildControl(P).getBounds().left);}
;if(bF<0||bF>this.__xO||bE<0||bE>this.__xO){this.getChildControl(P).removeState(b);}
;}
;}
else if(this.__xR){this.__ju.stop();this.releaseCapture();delete this.__xR;delete this.__xS;delete this.__xT;}
;this.removeListener(w,this._onPointerMove);if(e.getType()===B){e.stopPropagation();}
;}
,_onPointerMove:function(e){if(this.__xP){var bH=this.__nw?e.getDocumentLeft():e.getDocumentTop();var bG=bH-this.__xQ;this.slideTo(this._positionToValue(bG));}
else if(this.__xR){this.__xY(e);}
;e.stopPropagation();}
,_onInterval:function(e){var bI=this.getValue()+(this.__xS*this.getPageStep());if(bI<this.getMinimum()){bI=this.getMinimum();}
else if(bI>this.getMaximum()){bI=this.getMaximum();}
;var bJ=this.__xS==-1;if((bJ&&bI<=this.__xT)||(!bJ&&bI>=this.__xT)){bI=this.__xT;}
;this.slideTo(bI);}
,_onUpdate:function(e){var bL=this.getInnerSize();var bM=this.getChildControl(P).getBounds();var bK=this.__nw?E:x;this._updateKnobSize();this.__xX=bL[bK]-bM[bK];this.__xO=bM[bK];this._updateKnobPosition();}
,__nw:false,__xX:0,__xY:function(e){var bN=this.__nw;var bU=bN?e.getDocumentLeft():e.getDocumentTop();var bX=this.__xM;var bO=this.__xN;var bY=this.__xO;var bV=bU-bX;if(bU>=bO){bV-=bY;}
;var bR=this._positionToValue(bV);var bP=this.getMinimum();var bQ=this.getMaximum();if(bR<bP){bR=bP;}
else if(bR>bQ){bR=bQ;}
else {var bW=this.getValue();var bT=this.getPageStep();var bS=this.__xS<0?I:Q;bR=bW+(Math[bS]((bR-bW)/bT)*bT);}
;if(this.__xT==null||(this.__xS==-1&&bR<=this.__xT)||(this.__xS==1&&bR>=this.__xT)){this.__xT=bR;}
;}
,_positionToValue:function(cb){var ca=this.__xX;if(ca==null||ca==0){return 0;}
;var cd=cb/ca;if(cd<0){cd=0;}
else if(cd>1){cd=1;}
;var cc=this.getMaximum()-this.getMinimum();return this.getMinimum()+Math.round(cc*cd);}
,_valueToPosition:function(ch){var ce=this.__xX;if(ce==null){return 0;}
;var cf=this.getMaximum()-this.getMinimum();if(cf==0){return 0;}
;var ch=ch-this.getMinimum();var cg=ch/cf;if(cg<0){cg=0;}
else if(cg>1){cg=1;}
;return Math.round(ce*cg);}
,_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));}
,_setKnobPosition:function(ck){var ci=this.getChildControl(P);var cj=this.getDecorator();cj=qx.theme.manager.Decoration.getInstance().resolve(cj);var content=ci.getContentElement();if(this.__nw){if(cj&&cj.getPadding()){ck+=cj.getPadding().left;}
;ck+=this.getPaddingLeft()||0;content.setStyle(G,ck+d,true);}
else {if(cj&&cj.getPadding()){ck+=cj.getPadding().top;}
;ck+=this.getPaddingTop()||0;content.setStyle(L,ck+d,true);}
;}
,_updateKnobSize:function(){var cm=this.getKnobFactor();if(cm==null){return;}
;var cl=this.getInnerSize();if(cl==null){return;}
;if(this.__nw){this.getChildControl(P).setWidth(Math.round(cm*cl.width));}
else {this.getChildControl(P).setHeight(Math.round(cm*cl.height));}
;}
,slideToBegin:function(cn){this.slideTo(this.getMinimum(),cn);}
,slideToEnd:function(co){this.slideTo(this.getMaximum(),co);}
,slideForward:function(){this.slideBy(this.getSingleStep());}
,slideBack:function(){this.slideBy(-this.getSingleStep());}
,slidePageForward:function(cp){this.slideBy(this.getPageStep(),cp);}
,slidePageBack:function(cq){this.slideBy(-this.getPageStep(),cq);}
,slideBy:function(cs,cr){this.slideTo(this.getValue()+cs,cr);}
,slideTo:function(cu,ct){this.stopSlideAnimation();if(ct){this.__yb(cu,ct);}
else {this.updatePosition(cu);}
;}
,updatePosition:function(cv){this.setValue(this.__ya(cv));}
,stopSlideAnimation:function(){if(this.__ny){this.__ny.cancelSequence();this.__ny=null;}
;}
,__ya:function(cw){if(cw<this.getMinimum()){cw=this.getMinimum();}
else if(cw>this.getMaximum()){cw=this.getMaximum();}
else {cw=this.getMinimum()+Math.round((cw-this.getMinimum())/this.getSingleStep())*this.getSingleStep();}
;return cw;}
,__yb:function(cy,cx){cy=this.__ya(cy);var cz=this.getValue();this.__ny=new qx.bom.AnimationFrame();this.__ny.on(i,function(cA){this.setValue(parseInt(cA/cx*(cy-cz)+cz));}
,this);this.__ny.on(j,function(){this.setValue(cy);this.__ny=null;this.fireEvent(O);}
,this);this.__ny.startSequence(cx);}
,_applyOrientation:function(cD,cC){var cB=this.getChildControl(P);this.__nw=cD===N;if(this.__nw){this.removeState(C);cB.removeState(C);this.addState(N);cB.addState(N);cB.setLayoutProperties({top:0,right:null,bottom:0});}
else {this.removeState(N);cB.removeState(N);this.addState(C);cB.addState(C);cB.setLayoutProperties({right:0,bottom:null,left:0});}
;this._updateKnobPosition();}
,_applyKnobFactor:function(cF,cE){if(cF!=null){this._updateKnobSize();}
else {if(this.__nw){this.getChildControl(P).resetWidth();}
else {this.getChildControl(P).resetHeight();}
;}
;}
,_applyValue:function(cH,cG){if(cH!=null){this._updateKnobPosition();if(this.__xP){this.__xW=[cH,cG];}
else {this.fireEvent(h,qx.event.type.Data,[cH,cG]);}
;}
else {this.resetValue();}
;}
,_fireValue:function(){if(!this.__xW){return;}
;var cI=this.__xW;this.__xW=null;this.fireEvent(h,qx.event.type.Data,cI);}
,_applyMinimum:function(cK,cJ){if(this.getValue()<cK){this.setValue(cK);}
;this._updateKnobPosition();}
,_applyMaximum:function(cM,cL){if(this.getValue()>cM){this.setValue(cM);}
;this._updateKnobPosition();}
}});}
)();
(function(){var a="horizontal",b="qx.ui.core.scroll.ScrollSlider",c="keypress",d="roll";qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);this.removeListener(c,this._onKeyPress);this.removeListener(d,this._onRoll);}
,members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);if(this.getOrientation()===a){g.width=0;}
else {g.height=0;}
;return g;}
}});}
)();
(function(){var a="toolTipText",b="icon",c="label",d="qx.ui.core.MExecutable",f="value",g="qx.event.type.Event",h="execute",j="_applyCommand",k="enabled",l="menu",m="changeCommand",n="qx.ui.core.Command";qx.Mixin.define(d,{events:{"execute":g},properties:{command:{check:n,apply:j,event:m,nullable:true}},members:{__lW:null,__lX:false,__lY:null,_bindableProperties:[k,c,b,a,f,l],execute:function(){var o=this.getCommand();if(o){if(this.__lX){this.__lX=false;}
else {this.__lX=true;o.execute(this);}
;}
;this.fireEvent(h);}
,__ma:function(e){if(this.__lX){this.__lX=false;return;}
;this.__lX=true;this.execute();}
,_applyCommand:function(r,p){if(p!=null){p.removeListenerById(this.__lY);}
;if(r!=null){this.__lY=r.addListener(h,this.__ma,this);}
;var q=this.__lW;if(q==null){this.__lW=q={};}
;var u;for(var i=0;i<this._bindableProperties.length;i++ ){var t=this._bindableProperties[i];if(p!=null&&!p.isDisposed()&&q[t]!=null){p.removeBinding(q[t]);q[t]=null;}
;if(r!=null&&qx.Class.hasProperty(this.constructor,t)){var s=r.get(t);if(s==null){u=this.get(t);if(u==null){this.syncAppearance();u=qx.util.PropertyUtil.getThemeValue(this,t);}
;}
else {u=null;}
;q[t]=r.bind(t,this,t);if(u){this.set(t,u);}
;}
;}
;}
},destruct:function(){this._applyCommand(null,this.getCommand());this.__lW=null;}
});}
)();
(function(){var a="qx.ui.form.IExecutable",b="qx.event.type.Data";qx.Interface.define(a,{events:{"execute":b},members:{setCommand:function(c){return arguments.length==1;}
,getCommand:function(){}
,execute:function(){}
}});}
)();
(function(){var a="qx.ui.form.Button",b="pointerup",c="Enter",d="pressed",f="pointerover",g="hovered",h="pointerdown",i="Space",j="keydown",k="abandoned",l="tap",m="dbltap",n="button",o="keyup",p="pointerout";qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(q,s,r){qx.ui.basic.Atom.call(this,q,s);if(r!=null){this.setCommand(r);}
;this.addListener(f,this._onPointerOver);this.addListener(p,this._onPointerOut);this.addListener(h,this._onPointerDown);this.addListener(b,this._onPointerUp);this.addListener(l,this._onTap);this.addListener(j,this._onKeyDown);this.addListener(o,this._onKeyUp);this.addListener(m,this._onStopEvent);}
,properties:{appearance:{refine:true,init:n},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(k)){return;}
;this.addState(d);}
,release:function(){if(this.hasState(d)){this.removeState(d);}
;}
,reset:function(){this.removeState(d);this.removeState(k);this.removeState(g);}
,_onPointerOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;if(this.hasState(k)){this.removeState(k);this.addState(d);}
;this.addState(g);}
,_onPointerOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;this.removeState(g);if(this.hasState(d)){this.removeState(d);this.addState(k);}
;}
,_onPointerDown:function(e){if(!e.isLeftPressed()){return;}
;e.stopPropagation();this.capture();this.removeState(k);this.addState(d);}
,_onPointerUp:function(e){this.releaseCapture();var t=this.hasState(d);var u=this.hasState(k);if(t){this.removeState(d);}
;if(u){this.removeState(k);}
;e.stopPropagation();}
,_onTap:function(e){this.execute();e.stopPropagation();}
,_onKeyDown:function(e){switch(e.getKeyIdentifier()){case c:case i:this.removeState(k);this.addState(d);e.stopPropagation();};}
,_onKeyUp:function(e){switch(e.getKeyIdentifier()){case c:case i:if(this.hasState(d)){this.removeState(k);this.removeState(d);this.execute();e.stopPropagation();}
;};}
}});}
)();
(function(){var a="press",b="__ju",c="hovered",d="qx.ui.form.RepeatButton",f="release",g="Enter",h="pressed",i="interval",j="qx.event.type.Event",k="Space",l="abandoned",m="Integer",n="execute";qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);this.__ju=new qx.event.AcceleratingTimer();this.__ju.addListener(i,this._onInterval,this);}
,events:{"execute":j,"press":j,"release":j},properties:{interval:{check:m,init:100},firstInterval:{check:m,init:500},minTimer:{check:m,init:20},timerDecrease:{check:m,init:2}},members:{__nQ:null,__ju:null,press:function(){if(this.isEnabled()){if(!this.hasState(h)){this.__nR();}
;this.removeState(l);this.addState(h);}
;}
,release:function(q){if(!this.isEnabled()){return;}
;if(this.hasState(h)){if(!this.__nQ){this.execute();}
;}
;this.removeState(h);this.removeState(l);this.__nS();}
,_applyEnabled:function(s,r){qx.ui.form.Button.prototype._applyEnabled.call(this,s,r);if(!s){if(this.isCapturing()){this.releaseCapture();}
;this.removeState(h);this.removeState(l);this.__nS();}
;}
,_onPointerOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;if(this.hasState(l)){this.removeState(l);this.addState(h);this.__ju.start();}
;this.addState(c);}
,_onPointerOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;this.removeState(c);if(this.hasState(h)){this.removeState(h);this.addState(l);this.__ju.stop();}
;}
,_onPointerDown:function(e){if(!e.isLeftPressed()){return;}
;this.capture();this.__nR();e.stopPropagation();}
,_onPointerUp:function(e){this.releaseCapture();if(!this.hasState(l)){this.addState(c);if(this.hasState(h)&&!this.__nQ){this.execute();}
;}
;this.__nS();e.stopPropagation();}
,_onKeyUp:function(e){switch(e.getKeyIdentifier()){case g:case k:if(this.hasState(h)){if(!this.__nQ){this.execute();}
;this.removeState(h);this.removeState(l);e.stopPropagation();this.__nS();}
;};}
,_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:case k:this.removeState(l);this.addState(h);e.stopPropagation();this.__nR();};}
,_onInterval:function(e){this.__nQ=true;this.fireEvent(n);}
,__nR:function(){this.fireEvent(a);this.__nQ=false;this.__ju.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();this.removeState(l);this.addState(h);}
,__nS:function(){this.fireEvent(f);this.__ju.stop();this.removeState(l);this.removeState(h);}
},destruct:function(){this._disposeObjects(b);}
});}
)();
(function(){var a="Integer",b="__ju",c="interval",d="qx.event.type.Event",e="qx.event.AcceleratingTimer";qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__ju=new qx.event.Timer(this.getInterval());this.__ju.addListener(c,this._onInterval,this);}
,events:{"interval":d},properties:{interval:{check:a,init:100},firstInterval:{check:a,init:500},minimum:{check:a,init:20},decrease:{check:a,init:2}},members:{__ju:null,__nT:null,start:function(){this.__ju.setInterval(this.getFirstInterval());this.__ju.start();}
,stop:function(){this.__ju.stop();this.__nT=null;}
,_onInterval:function(){this.__ju.stop();if(this.__nT==null){this.__nT=this.getInterval();}
;this.__nT=Math.max(this.getMinimum(),this.__nT-this.getDecrease());this.__ju.setInterval(this.__nT);this.__ju.start();this.fireEvent(c);}
},destruct:function(){this._disposeObjects(b);}
});}
)();
(function(){var a="Decorator",b="_applyLayoutChange",c="center",d="_applyReversed",e="qx.debug",f="bottom",g="' is not supported by the VBox layout!",h="qx.ui.layout.VBox",j="flex",k="top",m="left",n="height",o="middle",p="Integer",q="The property '",r="right",s="Boolean";qx.Class.define(h,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);if(t){this.setSpacing(t);}
;if(u){this.setAlignY(u);}
;if(v){this.setSeparator(v);}
;}
,properties:{alignY:{check:[k,o,f],init:k,apply:b},alignX:{check:[m,c,r],init:m,apply:b},spacing:{check:p,init:0,apply:b},separator:{check:a,nullable:true,apply:b},reversed:{check:s,init:false,apply:d}},members:{__np:null,__nj:null,__nk:null,__fV:null,_applyReversed:function(){this._invalidChildrenCache=true;this._applyLayoutChange();}
,__nl:function(){var B=this._getLayoutChildren();var length=B.length;var x=false;var w=this.__np&&this.__np.length!=length&&this.__nj&&this.__np;var z;var y=w?this.__np:new Array(length);var A=w?this.__nj:new Array(length);if(this.getReversed()){B=B.concat().reverse();}
;for(var i=0;i<length;i++ ){z=B[i].getLayoutProperties();if(z.height!=null){y[i]=parseFloat(z.height)/100;}
;if(z.flex!=null){A[i]=z.flex;x=true;}
else {A[i]=0;}
;}
;if(!w){this.__np=y;this.__nj=A;}
;this.__nk=x;this.__fV=B;delete this._invalidChildrenCache;}
,verifyLayoutProperty:qx.core.Environment.select(e,{"true":function(C,name,D){this.assert(name===j||name===n,q+name+g);if(name==n){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);}
else {this.assertNumber(D);this.assert(D>=0);}
;}
,"false":null}),renderLayout:function(V,N,Y){if(this._invalidChildrenCache){this.__nl();}
;var K=this.__fV;var length=K.length;var U=qx.ui.layout.Util;var T=this.getSpacing();var bb=this.getSeparator();if(bb){var H=U.computeVerticalSeparatorGaps(K,T,bb);}
else {var H=U.computeVerticalGaps(K,T,true);}
;var i,ba,G,O;var P=[];var W=H;for(i=0;i<length;i+=1){O=this.__np[i];G=O!=null?Math.floor((N-H)*O):K[i].getSizeHint().height;P.push(G);W+=G;}
;if(this.__nk&&W!=N){var M={};var S,F;for(i=0;i<length;i+=1){S=this.__nj[i];if(S>0){L=K[i].getSizeHint();M[i]={min:L.minHeight,value:P[i],max:L.maxHeight,flex:S};}
;}
;var I=U.computeFlexOffsets(M,N,W);for(i in I){F=I[i].offset;P[i]+=F;W+=F;}
;}
;var top=K[0].getMarginTop();if(W<N&&this.getAlignY()!=k){top=N-W;if(this.getAlignY()===o){top=Math.round(top/2);}
;}
;var L,bd,Q,G,E,R,J;this._clearSeparators();if(bb){var bc=qx.theme.manager.Decoration.getInstance().resolve(bb).getInsets();var X=bc.top+bc.bottom;}
;for(i=0;i<length;i+=1){ba=K[i];G=P[i];L=ba.getSizeHint();R=ba.getMarginLeft();J=ba.getMarginRight();Q=Math.max(L.minWidth,Math.min(V-R-J,L.maxWidth));bd=U.computeHorizontalAlignOffset(ba.getAlignX()||this.getAlignX(),Q,V,R,J);if(i>0){if(bb){top+=E+T;this._renderSeparator(bb,{top:top+Y.top,left:Y.left,height:X,width:V});top+=X+T+ba.getMarginTop();}
else {top+=U.collapseMargins(T,E,ba.getMarginTop());}
;}
;ba.renderLayout(bd+Y.left,top+Y.top,Q,G);top+=G;E=ba.getMarginBottom();}
;}
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__nl();}
;var be=qx.ui.layout.Util;var bs=this.__fV;var bh=0,bi=0,bq=0;var bj=0,bk=0;var bo,bf,br;for(var i=0,l=bs.length;i<l;i+=1){bo=bs[i];bf=bo.getSizeHint();bi+=bf.height;var bn=this.__nj[i];var bg=this.__np[i];if(bn){bh+=bf.minHeight;}
else if(bg){bq=Math.max(bq,Math.round(bf.minHeight/bg));}
else {bh+=bf.height;}
;br=bo.getMarginLeft()+bo.getMarginRight();if((bf.width+br)>bk){bk=bf.width+br;}
;if((bf.minWidth+br)>bj){bj=bf.minWidth+br;}
;}
;bh+=bq;var bm=this.getSpacing();var bp=this.getSeparator();if(bp){var bl=be.computeVerticalSeparatorGaps(bs,bm,bp);}
else {var bl=be.computeVerticalGaps(bs,bm,true);}
;return {minHeight:bh+bl,height:bi+bl,minWidth:bj,width:bk};}
},destruct:function(){this.__np=this.__nj=this.__fV=null;}
});}
)();
(function(){var a="scrollY",b="_computeScrollbars",c="X",d="scrollbar-y",f="scrollAnimation",g="scrollbarX",h="auto",i="End",j="corner",k="os.scrollBarOverlayed",l="scrollarea",m="changeVisibility",n="vertical",o="scrollX",p="scrollAnimationEnd",q="off",r="horizontal",s="scrollbar-x",t="Y",u='qx.event.type.Event',v="qx.ui.core.scroll.AbstractScrollArea",w="abstract",x="update",y="scrollbarY",z="pane",A="on",B="scroll";qx.Class.define(v,{extend:qx.ui.core.Widget,include:[qx.ui.core.scroll.MScrollBarFactory,qx.ui.core.scroll.MRoll,qx.ui.core.MDragDropScrolling],type:w,statics:{DEFAULT_SCROLLBAR_WIDTH:14},construct:function(){qx.ui.core.Widget.call(this);if(qx.core.Environment.get(k)){this._setLayout(new qx.ui.layout.Canvas());}
else {var C=new qx.ui.layout.Grid();C.setColumnFlex(0,1);C.setRowFlex(0,1);this._setLayout(C);}
;this._addRollHandling();}
,events:{scrollAnimationXEnd:u,scrollAnimationYEnd:u},properties:{appearance:{refine:true,init:l},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[h,A,q],init:h,themeable:true,apply:b},scrollbarY:{check:[h,A,q],init:h,themeable:true,apply:b},scrollbar:{group:[g,y]}},members:{_createChildControlImpl:function(F,E){var D;switch(F){case z:D=new qx.ui.core.scroll.ScrollPane();D.addListener(x,this._computeScrollbars,this);D.addListener(o,this._onScrollPaneX,this);D.addListener(a,this._onScrollPaneY,this);if(qx.core.Environment.get(k)){this._add(D,{edge:0});}
else {this._add(D,{row:0,column:0});}
;break;case s:D=this._createScrollBar(r);D.setMinWidth(0);D.exclude();D.addListener(B,this._onScrollBarX,this);D.addListener(m,this._onChangeScrollbarXVisibility,this);D.addListener(p,this._onScrollAnimationEnd.bind(this,c));if(qx.core.Environment.get(k)){D.setMinHeight(qx.ui.core.scroll.AbstractScrollArea.DEFAULT_SCROLLBAR_WIDTH);this._add(D,{bottom:0,right:0,left:0});}
else {this._add(D,{row:1,column:0});}
;break;case d:D=this._createScrollBar(n);D.setMinHeight(0);D.exclude();D.addListener(B,this._onScrollBarY,this);D.addListener(m,this._onChangeScrollbarYVisibility,this);D.addListener(p,this._onScrollAnimationEnd.bind(this,t));if(qx.core.Environment.get(k)){D.setMinWidth(qx.ui.core.scroll.AbstractScrollArea.DEFAULT_SCROLLBAR_WIDTH);this._add(D,{right:0,bottom:0,top:0});}
else {this._add(D,{row:0,column:1});}
;break;case j:D=new qx.ui.core.Widget();D.setWidth(0);D.setHeight(0);D.exclude();if(!qx.core.Environment.get(k)){this._add(D,{row:1,column:1});}
;break;};return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);}
,getPaneSize:function(){return this.getChildControl(z).getInnerSize();}
,getItemTop:function(G){return this.getChildControl(z).getItemTop(G);}
,getItemBottom:function(H){return this.getChildControl(z).getItemBottom(H);}
,getItemLeft:function(I){return this.getChildControl(z).getItemLeft(I);}
,getItemRight:function(J){return this.getChildControl(z).getItemRight(J);}
,scrollToX:function(L,K){qx.ui.core.queue.Manager.flush();this.getChildControl(s).scrollTo(L,K);}
,scrollByX:function(N,M){qx.ui.core.queue.Manager.flush();this.getChildControl(s).scrollBy(N,M);}
,getScrollX:function(){var O=this.getChildControl(s,true);return O?O.getPosition():0;}
,scrollToY:function(Q,P){qx.ui.core.queue.Manager.flush();this.getChildControl(d).scrollTo(Q,P);}
,scrollByY:function(S,R){qx.ui.core.queue.Manager.flush();this.getChildControl(d).scrollBy(S,R);}
,getScrollY:function(){var T=this.getChildControl(d,true);return T?T.getPosition():0;}
,stopScrollAnimationX:function(){var U=this.getChildControl(s,true);if(U){U.stopScrollAnimation();}
;}
,stopScrollAnimationY:function(){var V=this.getChildControl(d,true);if(V){V.stopScrollAnimation();}
;}
,_onScrollAnimationEnd:function(W){this.fireEvent(f+W+i);}
,_onScrollBarX:function(e){this.getChildControl(z).scrollToX(e.getData());}
,_onScrollBarY:function(e){this.getChildControl(z).scrollToY(e.getData());}
,_onScrollPaneX:function(e){var X=this.getChildControl(s);if(X){X.updatePosition(e.getData());}
;}
,_onScrollPaneY:function(e){var Y=this.getChildControl(d);if(Y){Y.updatePosition(e.getData());}
;}
,_onChangeScrollbarXVisibility:function(e){var ba=this._isChildControlVisible(s);var bb=this._isChildControlVisible(d);if(!ba){this.scrollToX(0);}
;ba&&bb?this._showChildControl(j):this._excludeChildControl(j);}
,_onChangeScrollbarYVisibility:function(e){var bc=this._isChildControlVisible(s);var bd=this._isChildControlVisible(d);if(!bd){this.scrollToY(0);}
;bc&&bd?this._showChildControl(j):this._excludeChildControl(j);}
,_computeScrollbars:function(){var bk=this.getChildControl(z);var content=bk.getChildren()[0];if(!content){this._excludeChildControl(s);this._excludeChildControl(d);return;}
;var be=this.getInnerSize();var bj=bk.getInnerSize();var bh=bk.getScrollSize();if(!bj||!bh){return;}
;var bl=this.getScrollbarX();var bm=this.getScrollbarY();if(bl===h&&bm===h){var bi=bh.width>be.width;var bn=bh.height>be.height;if((bi||bn)&&!(bi&&bn)){if(bi){bn=bh.height>bj.height;}
else if(bn){bi=bh.width>bj.width;}
;}
;}
else {var bi=bl===A;var bn=bm===A;if(bh.width>(bi?bj.width:be.width)&&bl===h){bi=true;}
;if(bh.height>(bi?bj.height:be.height)&&bm===h){bn=true;}
;}
;if(bi){var bg=this.getChildControl(s);bg.show();bg.setMaximum(Math.max(0,bh.width-bj.width));bg.setKnobFactor((bh.width===0)?0:bj.width/bh.width);}
else {this._excludeChildControl(s);}
;if(bn){var bf=this.getChildControl(d);bf.show();bf.setMaximum(Math.max(0,bh.height-bj.height));bf.setKnobFactor((bh.height===0)?0:bj.height/bh.height);}
else {this._excludeChildControl(d);}
;}
}});}
)();
(function(){var a="' must be defined!",b="height",c="vAlign",d="hAlign",e="' is not supported by the Grid layout!",f="bottom",g="Invalid parameter 'column'",h="Integer",m="The property '",n="'",o="_applyLayoutChange",p="qx.debug",q="Value must be positive",r="center",s="qx.ui.layout.Grid",t="middle",u="maxHeight",v="Cannot add widget '",w="width",z=") for '",A="'!. ",B="top",C="minHeight",D="right",E="' in this cell (",F=", ",G="The layout properties 'row' and 'column' of the child widget '",H="minWidth",I="flex",J="left",K="maxWidth",L="Invalid parameter 'row'",M="There is already a widget '";qx.Class.define(s,{extend:qx.ui.layout.Abstract,construct:function(O,N){qx.ui.layout.Abstract.call(this);this.__ms=[];this.__mt=[];if(O){this.setSpacingX(O);}
;if(N){this.setSpacingY(N);}
;}
,properties:{spacingX:{check:h,init:0,apply:o},spacingY:{check:h,init:0,apply:o}},members:{__mu:null,__ms:null,__mt:null,__mv:null,__mw:null,__mx:null,__my:null,__mz:null,__mA:null,verifyLayoutProperty:qx.core.Environment.select(p,{"true":function(P,name,Q){var R={"row":1,"column":1,"rowSpan":1,"colSpan":1};this.assert(R[name]==1,m+name+e);this.assertInteger(Q);this.assert(Q>=0,q);}
,"false":null}),__mB:function(){var Y=[];var T=[];var W=[];var V=-1;var S=-1;var X=this._getLayoutChildren();for(var i=0,l=X.length;i<l;i++ ){var ba=X[i];var bb=ba.getLayoutProperties();var bc=bb.row;var U=bb.column;bb.colSpan=bb.colSpan||1;bb.rowSpan=bb.rowSpan||1;if(bc==null||U==null){throw new Error(G+ba+a);}
;if(Y[bc]&&Y[bc][U]){throw new Error(v+ba+A+M+Y[bc][U]+E+bc+F+U+z+this+n);}
;for(var x=U;x<U+bb.colSpan;x++ ){for(var y=bc;y<bc+bb.rowSpan;y++ ){if(Y[y]==undefined){Y[y]=[];}
;Y[y][x]=ba;S=Math.max(S,x);V=Math.max(V,y);}
;}
;if(bb.rowSpan>1){W.push(ba);}
;if(bb.colSpan>1){T.push(ba);}
;}
;for(var y=0;y<=V;y++ ){if(Y[y]==undefined){Y[y]=[];}
;}
;this.__mu=Y;this.__mv=T;this.__mw=W;this.__mx=V;this.__my=S;this.__mz=null;this.__mA=null;delete this._invalidChildrenCache;}
,_setRowData:function(bg,be,bf){var bd=this.__ms[bg];if(!bd){this.__ms[bg]={};this.__ms[bg][be]=bf;}
else {bd[be]=bf;}
;}
,_setColumnData:function(bh,bj,bk){var bi=this.__mt[bh];if(!bi){this.__mt[bh]={};this.__mt[bh][bj]=bk;}
else {bi[bj]=bk;}
;}
,setSpacing:function(bl){this.setSpacingY(bl);this.setSpacingX(bl);return this;}
,setColumnAlign:function(bm,bn,bo){if(qx.core.Environment.get(p)){this.assertInteger(bm,g);this.assertInArray(bn,[J,r,D]);this.assertInArray(bo,[B,t,f]);}
;this._setColumnData(bm,d,bn);this._setColumnData(bm,c,bo);this._applyLayoutChange();return this;}
,getColumnAlign:function(bp){var bq=this.__mt[bp]||{};return {vAlign:bq.vAlign||B,hAlign:bq.hAlign||J};}
,setRowAlign:function(bs,br,bt){if(qx.core.Environment.get(p)){this.assertInteger(bs,L);this.assertInArray(br,[J,r,D]);this.assertInArray(bt,[B,t,f]);}
;this._setRowData(bs,d,br);this._setRowData(bs,c,bt);this._applyLayoutChange();return this;}
,getRowAlign:function(bv){var bu=this.__ms[bv]||{};return {vAlign:bu.vAlign||B,hAlign:bu.hAlign||J};}
,getCellWidget:function(bx,bw){if(this._invalidChildrenCache){this.__mB();}
;var bx=this.__mu[bx]||{};return bx[bw]||null;}
,getRowCount:function(){if(this._invalidChildrenCache){this.__mB();}
;return this.__mx+1;}
,getColumnCount:function(){if(this._invalidChildrenCache){this.__mB();}
;return this.__my+1;}
,getCellAlign:function(bF,bz){var bE=B;var bC=J;var bD=this.__ms[bF];var bA=this.__mt[bz];var by=this.__mu[bF][bz];if(by){var bB={vAlign:by.getAlignY(),hAlign:by.getAlignX()};}
else {bB={};}
;if(bB.vAlign){bE=bB.vAlign;}
else if(bD&&bD.vAlign){bE=bD.vAlign;}
else if(bA&&bA.vAlign){bE=bA.vAlign;}
;if(bB.hAlign){bC=bB.hAlign;}
else if(bA&&bA.hAlign){bC=bA.hAlign;}
else if(bD&&bD.hAlign){bC=bD.hAlign;}
;return {vAlign:bE,hAlign:bC};}
,setColumnFlex:function(bG,bH){this._setColumnData(bG,I,bH);this._applyLayoutChange();return this;}
,getColumnFlex:function(bI){var bJ=this.__mt[bI]||{};return bJ.flex!==undefined?bJ.flex:0;}
,setRowFlex:function(bL,bK){this._setRowData(bL,I,bK);this._applyLayoutChange();return this;}
,getRowFlex:function(bO){var bM=this.__ms[bO]||{};var bN=bM.flex!==undefined?bM.flex:0;return bN;}
,setColumnMaxWidth:function(bP,bQ){this._setColumnData(bP,K,bQ);this._applyLayoutChange();return this;}
,getColumnMaxWidth:function(bR){var bS=this.__mt[bR]||{};return bS.maxWidth!==undefined?bS.maxWidth:Infinity;}
,setColumnWidth:function(bT,bU){this._setColumnData(bT,w,bU);this._applyLayoutChange();return this;}
,getColumnWidth:function(bV){var bW=this.__mt[bV]||{};return bW.width!==undefined?bW.width:null;}
,setColumnMinWidth:function(bX,bY){this._setColumnData(bX,H,bY);this._applyLayoutChange();return this;}
,getColumnMinWidth:function(ca){var cb=this.__mt[ca]||{};return cb.minWidth||0;}
,setRowMaxHeight:function(cd,cc){this._setRowData(cd,u,cc);this._applyLayoutChange();return this;}
,getRowMaxHeight:function(cf){var ce=this.__ms[cf]||{};return ce.maxHeight||Infinity;}
,setRowHeight:function(cg,ch){this._setRowData(cg,b,ch);this._applyLayoutChange();return this;}
,getRowHeight:function(cj){var ci=this.__ms[cj]||{};return ci.height!==undefined?ci.height:null;}
,setRowMinHeight:function(cl,ck){this._setRowData(cl,C,ck);this._applyLayoutChange();return this;}
,getRowMinHeight:function(cn){var cm=this.__ms[cn]||{};return cm.minHeight||0;}
,__mC:function(cp){var co=cp.getSizeHint();var cr=cp.getMarginLeft()+cp.getMarginRight();var cq=cp.getMarginTop()+cp.getMarginBottom();var cs={height:co.height+cq,width:co.width+cr,minHeight:co.minHeight+cq,minWidth:co.minWidth+cr,maxHeight:co.maxHeight+cq,maxWidth:co.maxWidth+cr};return cs;}
,_fixHeightsRowSpan:function(cN){var cz=this.getSpacingY();for(var i=0,l=this.__mw.length;i<l;i++ ){var cF=this.__mw[i];var cC=this.__mC(cF);var cv=cF.getLayoutProperties();var cB=cv.row;var cK=cz*(cv.rowSpan-1);var ct=cK;var cw={};for(var j=0;j<cv.rowSpan;j++ ){var cA=cv.row+j;var cJ=cN[cA];var cL=this.getRowFlex(cA);if(cL>0){cw[cA]={min:cJ.minHeight,value:cJ.height,max:cJ.maxHeight,flex:cL};}
;cK+=cJ.height;ct+=cJ.minHeight;}
;if(cK<cC.height){if(!qx.lang.Object.isEmpty(cw)){var cM=qx.ui.layout.Util.computeFlexOffsets(cw,cC.height,cK);for(var k=0;k<cv.rowSpan;k++ ){var cH=cM[cB+k]?cM[cB+k].offset:0;cN[cB+k].height+=cH;}
;}
else {var cE=cz*(cv.rowSpan-1);var cD=cC.height-cE;var cI=Math.floor(cD/cv.rowSpan);var cG=0;var cu=0;for(var k=0;k<cv.rowSpan;k++ ){var cy=cN[cB+k].height;cG+=cy;if(cy<cI){cu++ ;}
;}
;var cx=Math.floor((cD-cG)/cu);for(var k=0;k<cv.rowSpan;k++ ){if(cN[cB+k].height<cI){cN[cB+k].height+=cx;}
;}
;}
;}
;if(ct<cC.minHeight){var cM=qx.ui.layout.Util.computeFlexOffsets(cw,cC.minHeight,ct);for(var j=0;j<cv.rowSpan;j++ ){var cH=cM[cB+j]?cM[cB+j].offset:0;cN[cB+j].minHeight+=cH;}
;}
;}
;}
,_fixWidthsColSpan:function(cR){var cS=this.getSpacingX();for(var i=0,l=this.__mv.length;i<l;i++ ){var cO=this.__mv[i];var cQ=this.__mC(cO);var cU=cO.getLayoutProperties();var cP=cU.column;var db=cS*(cU.colSpan-1);var cT=db;var cV={};var cX;for(var j=0;j<cU.colSpan;j++ ){var cW=cU.column+j;var da=cR[cW];var cY=this.getColumnFlex(cW);if(cY>0){cV[cW]={min:da.minWidth,value:da.width,max:da.maxWidth,flex:cY};}
;db+=da.width;cT+=da.minWidth;}
;if(db<cQ.width){var dc=qx.ui.layout.Util.computeFlexOffsets(cV,cQ.width,db);for(var j=0;j<cU.colSpan;j++ ){cX=dc[cP+j]?dc[cP+j].offset:0;cR[cP+j].width+=cX;}
;}
;if(cT<cQ.minWidth){var dc=qx.ui.layout.Util.computeFlexOffsets(cV,cQ.minWidth,cT);for(var j=0;j<cU.colSpan;j++ ){cX=dc[cP+j]?dc[cP+j].offset:0;cR[cP+j].minWidth+=cX;}
;}
;}
;}
,_getRowHeights:function(){if(this.__mz!=null){return this.__mz;}
;var dm=[];var df=this.__mx;var de=this.__my;for(var dn=0;dn<=df;dn++ ){var dg=0;var di=0;var dh=0;for(var dl=0;dl<=de;dl++ ){var dd=this.__mu[dn][dl];if(!dd){continue;}
;var dj=dd.getLayoutProperties().rowSpan||0;if(dj>1){continue;}
;var dk=this.__mC(dd);if(this.getRowFlex(dn)>0){dg=Math.max(dg,dk.minHeight);}
else {dg=Math.max(dg,dk.height);}
;di=Math.max(di,dk.height);}
;var dg=Math.max(dg,this.getRowMinHeight(dn));var dh=this.getRowMaxHeight(dn);if(this.getRowHeight(dn)!==null){var di=this.getRowHeight(dn);}
else {var di=Math.max(dg,Math.min(di,dh));}
;dm[dn]={minHeight:dg,height:di,maxHeight:dh};}
;if(this.__mw.length>0){this._fixHeightsRowSpan(dm);}
;this.__mz=dm;return dm;}
,_getColWidths:function(){if(this.__mA!=null){return this.__mA;}
;var dt=[];var dq=this.__my;var ds=this.__mx;for(var dy=0;dy<=dq;dy++ ){var dw=0;var dv=0;var dr=Infinity;for(var dz=0;dz<=ds;dz++ ){var dp=this.__mu[dz][dy];if(!dp){continue;}
;var du=dp.getLayoutProperties().colSpan||0;if(du>1){continue;}
;var dx=this.__mC(dp);if(this.getColumnFlex(dy)>0){dv=Math.max(dv,dx.minWidth);}
else {dv=Math.max(dv,dx.width);}
;dw=Math.max(dw,dx.width);}
;dv=Math.max(dv,this.getColumnMinWidth(dy));dr=this.getColumnMaxWidth(dy);if(this.getColumnWidth(dy)!==null){var dw=this.getColumnWidth(dy);}
else {var dw=Math.max(dv,Math.min(dw,dr));}
;dt[dy]={minWidth:dv,width:dw,maxWidth:dr};}
;if(this.__mv.length>0){this._fixWidthsColSpan(dt);}
;this.__mA=dt;return dt;}
,_getColumnFlexOffsets:function(dD){var dA=this.getSizeHint();var dF=dD-dA.width;if(dF==0){return {};}
;var dC=this._getColWidths();var dB={};for(var i=0,l=dC.length;i<l;i++ ){var dG=dC[i];var dE=this.getColumnFlex(i);if((dE<=0)||(dG.width==dG.maxWidth&&dF>0)||(dG.width==dG.minWidth&&dF<0)){continue;}
;dB[i]={min:dG.minWidth,value:dG.width,max:dG.maxWidth,flex:dE};}
;return qx.ui.layout.Util.computeFlexOffsets(dB,dD,dA.width);}
,_getRowFlexOffsets:function(dJ){var dH=this.getSizeHint();var dL=dJ-dH.height;if(dL==0){return {};}
;var dK=this._getRowHeights();var dI={};for(var i=0,l=dK.length;i<l;i++ ){var dN=dK[i];var dM=this.getRowFlex(i);if((dM<=0)||(dN.height==dN.maxHeight&&dL>0)||(dN.height==dN.minHeight&&dL<0)){continue;}
;dI[i]={min:dN.minHeight,value:dN.height,max:dN.maxHeight,flex:dM};}
;return qx.ui.layout.Util.computeFlexOffsets(dI,dJ,dH.height);}
,renderLayout:function(ej,dO,ei){if(this._invalidChildrenCache){this.__mB();}
;var ed=qx.ui.layout.Util;var dQ=this.getSpacingX();var dW=this.getSpacingY();var eh=this._getColWidths();var ek=this._getColumnFlexOffsets(ej);var dR=[];var em=this.__my;var dP=this.__mx;var el;for(var en=0;en<=em;en++ ){el=ek[en]?ek[en].offset:0;dR[en]=eh[en].width+el;}
;var ea=this._getRowHeights();var ec=this._getRowFlexOffsets(dO);var et=[];for(var dX=0;dX<=dP;dX++ ){el=ec[dX]?ec[dX].offset:0;et[dX]=ea[dX].height+el;}
;var er=0;for(var en=0;en<=em;en++ ){var top=0;for(var dX=0;dX<=dP;dX++ ){var ef=this.__mu[dX][en];if(!ef){top+=et[dX]+dW;continue;}
;var dS=ef.getLayoutProperties();if(dS.row!==dX||dS.column!==en){top+=et[dX]+dW;continue;}
;var es=dQ*(dS.colSpan-1);for(var i=0;i<dS.colSpan;i++ ){es+=dR[en+i];}
;var eg=dW*(dS.rowSpan-1);for(var i=0;i<dS.rowSpan;i++ ){eg+=et[dX+i];}
;var dT=ef.getSizeHint();var eq=ef.getMarginTop();var ee=ef.getMarginLeft();var eb=ef.getMarginBottom();var dV=ef.getMarginRight();var dY=Math.max(dT.minWidth,Math.min(es-ee-dV,dT.maxWidth));var eu=Math.max(dT.minHeight,Math.min(eg-eq-eb,dT.maxHeight));var eo=this.getCellAlign(dX,en);var ep=er+ed.computeHorizontalAlignOffset(eo.hAlign,dY,es,ee,dV);var dU=top+ed.computeVerticalAlignOffset(eo.vAlign,eu,eg,eq,eb);ef.renderLayout(ep+ei.left,dU+ei.top,dY,eu);top+=et[dX]+dW;}
;er+=dR[en]+dQ;}
;}
,invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);this.__mA=null;this.__mz=null;}
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__mB();}
;var ex=this._getColWidths();var ev=0,eD=0;for(var i=0,l=ex.length;i<l;i++ ){var eC=ex[i];if(this.getColumnFlex(i)>0){ev+=eC.minWidth;}
else {ev+=eC.width;}
;eD+=eC.width;}
;var eE=this._getRowHeights();var ey=0,ez=0;for(var i=0,l=eE.length;i<l;i++ ){var eF=eE[i];if(this.getRowFlex(i)>0){ey+=eF.minHeight;}
else {ey+=eF.height;}
;ez+=eF.height;}
;var eB=this.getSpacingX()*(ex.length-1);var eA=this.getSpacingY()*(eE.length-1);var ew={minWidth:ev+eB,width:eD+eB,minHeight:ey+eA,height:ez+eA};return ew;}
},destruct:function(){this.__mu=this.__ms=this.__mt=this.__mv=this.__mw=this.__mA=this.__mz=null;}
});}
)();
(function(){var a="resize",b="scrollY",c="scrollAnimationEnd",d="update",f="scrollX",g="_applyScrollX",h="_applyScrollY",i="frame",j="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",k="appear",l="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",m="qx.event.type.Event",n="qx.ui.core.scroll.ScrollPane",o="end",p="scroll";qx.Class.define(n,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);this.set({minWidth:0,minHeight:0});this._setLayout(new qx.ui.layout.Grow());this.addListener(a,this._onUpdate);var q=this.getContentElement();q.addListener(p,this._onScroll,this);q.addListener(k,this._onAppear,this);}
,events:{update:m,scrollAnimationEnd:m},properties:{scrollX:{check:j,apply:g,event:f,init:0},scrollY:{check:l,apply:h,event:b,init:0}},members:{__no:null,add:function(r){var s=this._getChildren()[0];if(s){this._remove(s);s.removeListener(a,this._onUpdate,this);}
;if(r){this._add(r);r.addListener(a,this._onUpdate,this);}
;}
,remove:function(t){if(t){this._remove(t);t.removeListener(a,this._onUpdate,this);}
;}
,getChildren:function(){return this._getChildren();}
,_onUpdate:function(e){this.fireEvent(d);}
,_onScroll:function(e){var u=this.getContentElement();this.setScrollX(u.getScrollX());this.setScrollY(u.getScrollY());}
,_onAppear:function(e){var z=this.getContentElement();var v=this.getScrollX();var A=z.getScrollX();if(v!=A){z.scrollToX(v);}
;var w=this.getScrollY();var B=z.getScrollY();if(w!=B){z.scrollToY(w);}
;}
,getItemTop:function(C){var top=0;do {top+=C.getBounds().top;C=C.getLayoutParent();}
while(C&&C!==this);return top;}
,getItemBottom:function(D){return this.getItemTop(D)+D.getBounds().height;}
,getItemLeft:function(E){var F=0;var parent;do {F+=E.getBounds().left;parent=E.getLayoutParent();if(parent){F+=parent.getInsets().left;}
;E=parent;}
while(E&&E!==this);return F;}
,getItemRight:function(G){return this.getItemLeft(G)+G.getBounds().width;}
,getScrollSize:function(){return this.getChildren()[0].getBounds();}
,getScrollMaxX:function(){var I=this.getInnerSize();var H=this.getScrollSize();if(I&&H){return Math.max(0,H.width-I.width);}
;return 0;}
,getScrollMaxY:function(){var K=this.getInnerSize();var J=this.getScrollSize();if(K&&J){return Math.max(0,J.height-K.height);}
;return 0;}
,scrollToX:function(O,L){var M=this.getScrollMaxX();if(O<0){O=0;}
else if(O>M){O=M;}
;this.stopScrollAnimation();if(L){var N=this.getScrollX();this.__no=new qx.bom.AnimationFrame();this.__no.on(o,function(){this.setScrollX(O);this.__no=null;this.fireEvent(c);}
,this);this.__no.on(i,function(Q){var P=parseInt(Q/L*(O-N)+N);this.setScrollX(P);}
,this);this.__no.startSequence(L);}
else {this.setScrollX(O);}
;}
,scrollToY:function(U,R){var S=this.getScrollMaxY();if(U<0){U=0;}
else if(U>S){U=S;}
;this.stopScrollAnimation();if(R){var T=this.getScrollY();this.__no=new qx.bom.AnimationFrame();this.__no.on(o,function(){this.setScrollY(U);this.__no=null;this.fireEvent(c);}
,this);this.__no.on(i,function(W){var V=parseInt(W/R*(U-T)+T);this.setScrollY(V);}
,this);this.__no.startSequence(R);}
else {this.setScrollY(U);}
;}
,scrollByX:function(x,X){this.scrollToX(this.getScrollX()+x,X);}
,scrollByY:function(y,Y){this.scrollToY(this.getScrollY()+y,Y);}
,stopScrollAnimation:function(){if(this.__no){this.__no.cancelSequence();this.__no=null;}
;}
,_applyScrollX:function(ba){this.getContentElement().scrollToX(ba);}
,_applyScrollY:function(bb){this.getContentElement().scrollToY(bb);}
}});}
)();
(function(){var a="' is not supported by the Grow layout!",b="qx.ui.layout.Grow",c="qx.debug",d="The property '";qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Environment.select(c,{"true":function(e,name,f){this.assert(false,d+name+a);}
,"false":null}),renderLayout:function(g,h,k){var o=this._getLayoutChildren();var n,p,m,j;for(var i=0,l=o.length;i<l;i++ ){n=o[i];p=n.getSizeHint();m=g;if(m<p.minWidth){m=p.minWidth;}
else if(m>p.maxWidth){m=p.maxWidth;}
;j=h;if(j<p.minHeight){j=p.minHeight;}
else if(j>p.maxHeight){j=p.maxHeight;}
;n.renderLayout(k.left,k.top,m,j);}
;}
,_computeSizeHint:function(){var w=this._getLayoutChildren();var u,y;var x=0,v=0;var t=0,r=0;var q=Infinity,s=Infinity;for(var i=0,l=w.length;i<l;i++ ){u=w[i];y=u.getSizeHint();x=Math.max(x,y.width);v=Math.max(v,y.height);t=Math.max(t,y.minWidth);r=Math.max(r,y.minHeight);q=Math.min(q,y.maxWidth);s=Math.min(s,y.maxHeight);}
;return {width:x,height:v,minWidth:t,minHeight:r,maxWidth:q,maxHeight:s};}
}});}
)();
(function(){var a="os.version",b="os.name",c="qx.mobile.nativescroll",d="osx",e="qx.nativeScrollBars",f="event.mspointer",g="android",h="firefox",i="os.scrollBarOverlayed",j="browser.version",k="ios",l=".",m="browser.name",n="qx.bom.client.Scroll";qx.Bootstrap.define(n,{statics:{scrollBarOverlayed:function(){var o=qx.bom.element.Scroll.getScrollbarWidth();var q=qx.bom.client.OperatingSystem.getName()===d;var p=qx.core.Environment.get(e);return o===0&&q&&p;}
,getNativeScroll:function(){if(qx.core.Environment.get(b)==k&&parseInt(qx.core.Environment.get(j),10)>4){return true;}
;if(qx.core.Environment.get(m)==h){return true;}
;if(qx.core.Environment.get(b)==g){var s=qx.core.Environment.get(a);var r=s.split(l);if(r[0]>4||(r.length>1&&r[0]>3&&r[1]>3)){return true;}
;}
;if(qx.core.Environment.get(f)){return true;}
;return false;}
},defer:function(t){qx.core.Environment.add(i,t.scrollBarOverlayed);qx.core.Environment.add(c,t.getNativeScroll);}
});}
)();
(function(){var a="wlpe_qx.ui.layout.Grid",b="black",c="demobrowser.demo.util.PropertyEditor",d="Widget Properties",f="lpe_qx.ui.layout.HBox",g="wlpe_qx.ui.layout.Dock",h="wlpe_",i="lpe_qx.ui.layout.Dock",j="lpe_",k="solid",l="string",m="wlpe_qx.ui.layout.HBox",n="wlpe_qx.ui.layout.Canvas",o="wlpe_qx.ui.layout.VBox",p=" layout properties",q="_applyWidget",r="qx.ui.core.Widget",s=" properties",t="wlpe_qx.ui.layout.Basic",u="Selected Widget",v="lpe_qx.ui.layout.Grid",w="bold",x="pane",y="white";qx.Class.define(c,{extend:qx.ui.core.scroll.AbstractScrollArea,construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);this.setWidth(null);this._editorGroups={};var z=new qx.ui.decoration.Decorator().set({widthLeft:1,styleLeft:k,colorLeft:b});this.setDecorator(z);this.setBackgroundColor(y);var B=new qx.ui.container.Composite().set({padding:[20,14]});this.getChildControl(x).add(B);this._pane=B;var A=new qx.ui.layout.VBox().set({spacing:5});B.setLayout(A);B.add(this._createWidgetIndicator());B.add(new qx.ui.basic.Label(d).set({font:w,padding:[1,0,5,0]}));var C=qx.lang.Object.clone(demobrowser.demo.util.PropertyGroup.WIDGET_PROPERTIES);C.value={type:l,nullable:true};this._layoutControls=new demobrowser.demo.util.PropertyGroup(C);B.add(this._layoutControls);}
,properties:{widget:{check:r,apply:q}},members:{handleWidgetTap:function(e){var D=e.getTarget();this.setWidget(D);}
,_createWidgetIndicator:function(){var E=new qx.ui.container.Composite(new qx.ui.layout.VBox().set({spacing:5}));E.add(this._createLabel(u));this._widgetIndicator=new qx.ui.basic.Label().set({height:30,allowGrowX:true,allowGrowY:true,padding:5});E._add(this._widgetIndicator);return E;}
,_createLabel:function(F){return new qx.ui.basic.Label(F).set({font:w,allowGrowX:true,padding:[5,0,5,0]});}
,_createContainer:function(I,H){var G=new qx.ui.container.Composite(new qx.ui.layout.VBox().set({spacing:5}));G.add(this._createLabel(I));G.add(H);return G;}
,updateWidgetLayoutPropertyEditor:function(K){var L=K.getLayoutParent()?K.getLayoutParent()._getLayout():null;var J=this.getWidgetLayoutPropertyEditor(L);if(J){J.getChildren()[1].setSelected(K);}
;if(J===this._wlpe){return;}
;if(this._wlpe){this._pane.remove(this._wlpe);}
;if(!J){this._wlpe=J;return;}
;this._pane.addAfter(J,this._layoutControls);this._wlpe=J;}
,updateLayoutPropertyEditor:function(M){var N=M.getLayout?M.getLayout():null;var O=this.getLayoutPropertyEditor(N);if(O){O.getChildren()[1].setSelected(N);}
;if(O===this._lpe){return;}
;if(this._lpe){this._pane.remove(this._lpe);}
;if(!O){this._lpe=O;return;}
;this._pane.add(O);this._lpe=O;}
,getWidgetLayoutPropertyEditor:function(P){if(!P){return null;}
;var name=h+P.constructor.classname;var Q;if(this._editorGroups[name]){return this._editorGroups[name];}
;switch(name){case m:case o:Q=new demobrowser.demo.util.LayoutPropertyGroup(demobrowser.demo.util.LayoutPropertyGroup.BOX_PROPERTIES);break;case n:Q=new demobrowser.demo.util.LayoutPropertyGroup(demobrowser.demo.util.LayoutPropertyGroup.CANVAS_PROPERTIES);break;case t:Q=new demobrowser.demo.util.LayoutPropertyGroup(demobrowser.demo.util.LayoutPropertyGroup.BASIC_PROPERTIES);break;case g:Q=new demobrowser.demo.util.LayoutPropertyGroup(demobrowser.demo.util.LayoutPropertyGroup.DOCK_PROPERTIES);break;case a:Q=new demobrowser.demo.util.LayoutPropertyGroup(demobrowser.demo.util.LayoutPropertyGroup.GRID_PROPERTIES);break;};if(!Q){return null;}
;this._editorGroups[name]=this._createContainer(P.constructor.classname+p,Q);return this._editorGroups[name];}
,getLayoutPropertyEditor:function(R){if(!R){return null;}
;var name=j+R.constructor.classname;var S;if(this._editorGroups[name]){return this._editorGroups[name];}
;switch(name){case f:S=new demobrowser.demo.util.PropertyGroup(demobrowser.demo.util.PropertyGroup.HBOX_PROPERTIES);break;case i:S=new demobrowser.demo.util.PropertyGroup(demobrowser.demo.util.PropertyGroup.DOCK_PROPERTIES);break;case v:S=new demobrowser.demo.util.PropertyGroup(demobrowser.demo.util.PropertyGroup.GRID_PROPERTIES);break;};if(!S){return null;}
;this._editorGroups[name]=this._createContainer(R.constructor.classname+s,S);return this._editorGroups[name];}
,_applyWidget:function(U,T){this._layoutControls.setSelected(U);this._widgetIndicator.setBackgroundColor(U.getBackgroundColor());this._widgetIndicator.setDecorator(U.getDecorator());this._widgetIndicator.setValue(U.toString());this.updateLayoutPropertyEditor(U);this.updateWidgetLayoutPropertyEditor(U);}
},destruct:function(){this._pane=this._editorGroups=this._widgetIndicator=this._layoutControls=null;}
});}
)();
(function(){var a="function",b="set",c="changeValue",d="bottom",f="auto",g="null",h="baseline",j="string",k="center",m="value",n="get",o="changeSelection",p="middle",q="y",r="demobrowser.demo.util.PropertyGroup",s="_applySelected",t="int",u="top",v="right",w="bool",x="enum",y="left",z="x";qx.Class.define(r,{extend:qx.ui.core.Widget,construct:function(E){qx.ui.core.Widget.call(this);this._properties=E;var B=new qx.ui.layout.Grid(10,5);B.setColumnAlign(0,v,u);B.setColumnMinWidth(0,110);this._setLayout(B);this.set({allowShrinkX:false,allowShrinkY:false});var J=0;for(var F in this._properties){var I=this._properties[F].type;var D=this._properties[F].nullable;this._add(new qx.ui.basic.Label(F).set({paddingTop:4}),{row:J,column:0});if(D){var C=new qx.ui.form.CheckBox(g);C.addListener(c,this._createOnNullPropertyChange(F),this);this._add(C,{row:J,column:2});this._properties[F].nullWidget=C;}
;if(I==t){var H=new qx.ui.form.Spinner().set({minimum:this._properties[F].min||0,maximum:this._properties[F].max!==undefined?this._properties[F].max:1000});H.addListener(c,this._createOnIntPropertyChange(F),this);this._add(H,{row:J++ ,column:1});}
else if(I==w){var H=new qx.ui.form.CheckBox();H.addListener(c,this._createOnBoolPropertyChange(F),this);this._add(H,{row:J++ ,column:1});}
else if(I==x){var G=this._properties[F].values;var H=new qx.ui.form.RadioGroup();for(var i=0;i<G.length;i++ ){var A=new qx.ui.form.RadioButton(G[i]);A.setUserData(m,G[i]);H.add(A);this._add(A,{row:J++ ,column:1});}
;H.addListener(o,this._createOnEnumPropertyChange(F,H),this);}
else if(I==j){var H=new qx.ui.form.TextField();H.setLiveUpdate(true);H.addListener(c,this._createOnIntPropertyChange(F),this);this._add(H,{row:J++ ,column:1});}
;this._properties[F].formItem=H;}
;}
,statics:{WIDGET_PROPERTIES:{"width":{type:t,nullable:true},"height":{type:t,nullable:true},"minWidth":{type:t,nullable:true},"minHeight":{type:t,nullable:true},"maxWidth":{type:t,nullable:true},"maxHeight":{type:t,nullable:true},"allowGrowX":{type:w,nullable:false},"allowGrowY":{type:w,nullable:false},"allowShrinkX":{type:w,nullable:false},"allowShrinkY":{type:w,nullable:false},"marginTop":{type:t,min:-1000,nullable:false},"marginRight":{type:t,min:-1000,nullable:false},"marginBottom":{type:t,min:-1000,nullable:false},"marginLeft":{type:t,min:-1000,nullable:false},"paddingTop":{type:t,nullable:false},"paddingRight":{type:t,nullable:false},"paddingBottom":{type:t,nullable:false},"paddingLeft":{type:t,nullable:false},"alignX":{type:x,values:[y,k,v],nullable:true},"alignY":{type:x,values:[u,p,d,h],nullable:true}},HBOX_PROPERTIES:{"alignX":{type:x,values:[y,k,v],nullable:false},"alignY":{type:x,values:[u,p,d,h],nullable:false},"spacing":{type:t,nullable:false},"reversed":{type:w,nullable:false}},DOCK_PROPERTIES:{"sort":{type:x,values:[f,q,z],nullable:false},"spacingX":{type:t,nullable:false},"spacingY":{type:t,nullable:false}},GRID_PROPERTIES:{"horizontalSpacing":{type:t,nullable:false},"verticalSpacing":{type:t,nullable:false}}},properties:{selected:{apply:s,nullable:true}},members:{_applySelected:function(L,K){this._updateControls(L);}
,_setProperty:function(N,name,O){if(!N){return;}
;var P=b+qx.lang.String.firstUp(name);var M=this._properties[name].convert;if(M){O=M(O);}
;N[P](O);}
,_getProperty:function(Q,name){var R=n+qx.lang.String.firstUp(name);return Q[R]();}
,_hasProperty:function(S,name){var T=b+qx.lang.String.firstUp(name);return (typeof (S[T])==a);}
,_createOnIntPropertyChange:function(U){return function(e){var V=this.getSelected();this._setProperty(V,U,e.getTarget().getValue());}
;}
,_createOnBoolPropertyChange:function(W){return function(e){var X=this.getSelected();this._setProperty(X,W,e.getTarget().getValue());}
;}
,_createOnEnumPropertyChange:function(ba,Y){return function(e){var bb=this.getSelected();this._setProperty(bb,ba,Y.getSelection()[0].getUserData(m));}
;}
,_createOnNullPropertyChange:function(bc){return function(e){var be=this.getSelected();var bd=e.getTarget();if(bd.getValue()){this._setProperty(be,bc,null);this._properties[bc].formItem.setEnabled(false);}
else {var bf=null;if(this._properties[bc].type==x){bf=this._properties[bc].formItem.getSelection()[0].getUserData(m);}
else {bf=this._properties[bc].formItem.getValue();}
;this._setProperty(be,bc,bf);this._properties[bc].formItem.setEnabled(true);}
;}
;}
,_updateControls:function(bg){for(var bm in this._properties){var bn=this._properties[bm].type;var bj=this._properties[bm].formItem;var bh=this._properties[bm].nullable;if(!this._hasProperty(bg,bm)){bj.setEnabled(false);if(bh){this._properties[bm].nullWidget.setEnabled(false);}
;return;}
;bj.setEnabled(true);var bl=this._getProperty(bg,bm);if(bl!==null){if(bn==t){bj.setValue(parseInt(bl));}
else if(bn==j){bj.setValue(bl.toString());}
else if(bn==w){bj.setValue(!!bl);}
else if(bn==x){var bi=bj.getItems();for(var i=0,l=bi.length;i<l;i++ ){var bk=bi[i];if(bk.getUserData(m)==bl){bj.setSelection([bk]);break;}
;}
;}
;}
;if(bh){this._properties[bm].nullWidget.setValue(bl==null);this._properties[bm].nullWidget.setEnabled(true);bj.setEnabled(bl!==null);}
;}
;}
},destruct:function(){this._properties=null;}
});}
)();
(function(){var a="qx.ui.form.IRadioItem",b="qx.event.type.Data";qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){}
,getValue:function(){}
,setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);}
,getGroup:function(){}
}});}
)();
(function(){var a="__fy",b=" array contains ",c="qx.ui.core.MSingleSelectionHandling",d=" items!",f="changeSelection",g="changeSelected",h="Could only select one item, but the selection",i="qx.event.type.Data";qx.Mixin.define(c,{events:{"changeSelection":i},members:{__fy:null,getSelection:function(){var j=this.__lH().getSelected();if(j){return [j];}
else {return [];}
;}
,setSelection:function(k){switch(k.length){case 0:this.resetSelection();break;case 1:this.__lH().setSelected(k[0]);break;default:throw new Error(h+b+k.length+d);};}
,resetSelection:function(){this.__lH().resetSelected();}
,isSelected:function(l){return this.__lH().isSelected(l);}
,isSelectionEmpty:function(){return this.__lH().isSelectionEmpty();}
,getSelectables:function(m){return this.__lH().getSelectables(m);}
,_onChangeSelected:function(e){var o=e.getData();var n=e.getOldData();o==null?o=[]:o=[o];n==null?n=[]:n=[n];this.fireDataEvent(f,o,n);}
,__lH:function(){if(this.__fy==null){var p=this;this.__fy=new qx.ui.core.SingleSelectionManager({getItems:function(){return p._getItems();}
,isItemSelectable:function(q){if(p._isItemSelectable){return p._isItemSelectable(q);}
else {return q.isVisible();}
;}
});this.__fy.addListener(g,this._onChangeSelected,this);}
;this.__fy.setAllowEmptySelection(this._isAllowEmptySelection());return this.__fy;}
},destruct:function(){this._disposeObjects(a);}
});}
)();
(function(){var a=", because it is not a child element!",b="Boolean",c="qx.ui.core.SingleSelectionManager",d="__lI",e="qx.debug",f="Invalid selectionProvider!",g="Could not check if ",h=" is selected,",j="Could not select ",k="__lK",l="changeSelected",m=" because it is not a child element!",n="__lJ",o="qx.event.type.Data";qx.Class.define(c,{extend:qx.core.Object,construct:function(p){qx.core.Object.call(this);if(qx.core.Environment.get(e)){qx.core.Assert.assertInterface(p,qx.ui.core.ISingleSelectionProvider,f);}
;this.__lI=p;}
,events:{"changeSelected":o},properties:{allowEmptySelection:{check:b,init:true,apply:k}},members:{__lJ:null,__lI:null,getSelected:function(){return this.__lJ;}
,setSelected:function(q){if(!this.__lM(q)){throw new Error(j+q+a);}
;this.__lL(q);}
,resetSelected:function(){this.__lL(null);}
,isSelected:function(r){if(!this.__lM(r)){throw new Error(g+r+h+m);}
;return this.__lJ===r;}
,isSelectionEmpty:function(){return this.__lJ==null;}
,getSelectables:function(t){var s=this.__lI.getItems();var u=[];for(var i=0;i<s.length;i++ ){if(this.__lI.isItemSelectable(s[i])){u.push(s[i]);}
;}
;if(!t){for(var i=u.length-1;i>=0;i-- ){if(!u[i].getEnabled()){u.splice(i,1);}
;}
;}
;return u;}
,__lK:function(w,v){if(!w){this.__lL(this.__lJ);}
;}
,__lL:function(x){var A=this.__lJ;var y=x;if(y!=null&&A===y){return;}
;if(!this.isAllowEmptySelection()&&y==null){var z=this.getSelectables(true)[0];if(z){y=z;}
;}
;this.__lJ=y;this.fireDataEvent(l,y,A);}
,__lM:function(B){var C=this.__lI.getItems();for(var i=0;i<C.length;i++ ){if(C[i]===B){return true;}
;}
;return false;}
},destruct:function(){if(this.__lI.toHashCode){this._disposeObjects(d);}
else {this.__lI=null;}
;this._disposeObjects(n);}
});}
)();
(function(){var a="qx.ui.core.ISingleSelectionProvider";qx.Interface.define(a,{members:{getItems:function(){}
,isItemSelectable:function(b){}
}});}
)();
(function(){var a="Could not set the model selection. Maybe your models are not unique? ",b="qx.ui.form.MModelSelection",c="Please use an array as parameter.",d="change",f="qx.debug",g="changeSelection",h="__lN",k="qx.event.type.Data";qx.Mixin.define(b,{construct:function(){this.__lN=new qx.data.Array();this.__lN.addListener(d,this.__lQ,this);this.addListener(g,this.__lP,this);}
,events:{changeModelSelection:k},members:{__lN:null,__lO:false,__lP:function(){if(this.__lO){return;}
;var n=this.getSelection();var o=[];for(var i=0;i<n.length;i++ ){var l=n[i];var m=l.getModel?l.getModel():null;if(m!==null){o.push(m);}
;}
;if(o.length===n.length){try{this.setModelSelection(o);}
catch(e){throw new Error(a+e);}
;}
;}
,__lQ:function(){this.__lO=true;var r=this.getSelectables(true);var s=[];var q=this.__lN.toArray();for(var i=0;i<q.length;i++ ){var u=q[i];for(var j=0;j<r.length;j++ ){var v=r[j];var p=v.getModel?v.getModel():null;if(u===p){s.push(v);break;}
;}
;}
;this.setSelection(s);this.__lO=false;var t=this.getSelection();if(!qx.lang.Array.equals(t,s)){this.__lP();}
;}
,getModelSelection:function(){return this.__lN;}
,setModelSelection:function(w){if(!w){this.__lN.removeAll();return;}
;if(qx.core.Environment.get(f)){this.assertArray(w,c);}
;w.unshift(this.__lN.getLength());w.unshift(0);var x=this.__lN.splice.apply(this.__lN,w);x.dispose();}
},destruct:function(){this._disposeObjects(h);}
});}
)();
(function(){var a="qx.data.marshal.MEventBubbling",b="",c="]",d="idBubble-",f="[",g="changeBubble",h=".",j="qx.event.type.Data";qx.Mixin.define(a,{events:{"changeBubble":j},members:{_applyEventPropagation:function(l,k,name){this.fireDataEvent(g,{value:l,name:name,old:k,item:this});this._registerEventChaining(l,k,name);}
,_registerEventChaining:function(n,m,name){if(m!=null&&m.getUserData&&m.getUserData(d+this.$$hash)!=null){var p=m.getUserData(d+this.$$hash);for(var i=0;i<p.length;i++ ){m.removeListenerById(p[i]);}
;m.setUserData(d+this.$$hash,null);}
;if((n instanceof qx.core.Object)&&qx.Class.hasMixin(n.constructor,qx.data.marshal.MEventBubbling)){var o=qx.lang.Function.bind(this.__lR,this,name);var q=n.addListener(g,o,this);var p=n.getUserData(d+this.$$hash);if(p==null){p=[];n.setUserData(d+this.$$hash,p);}
;p.push(q);}
;}
,__lR:function(name,e){var y=e.getData();var u=y.value;var s=y.old;if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(y.name.indexOf){var x=y.name.indexOf(h)!=-1?y.name.indexOf(h):y.name.length;var v=y.name.indexOf(f)!=-1?y.name.indexOf(f):y.name.length;if(v==0){var t=name+y.name;}
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
(function(){var a="-",b="add",c="order",d="add/remove",e="Boolean",f="",g="remove",h="Please use 'toArray()' to see the content.",j="qx.data.Array",k="qx.debug",l="Type of the parameter not supported!",m="The parameter must be an array.",n="0-",o="change",p="0",q="number",r="changeBubble",s="changeLength",t="qx.event.type.Data";qx.Class.define(j,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(u){qx.core.Object.call(this);if(u==undefined){this.__lS=[];}
else if(arguments.length>1){this.__lS=[];for(var i=0;i<arguments.length;i++ ){this.__lS.push(arguments[i]);}
;}
else if(typeof u==q){this.__lS=new Array(u);}
else if(u instanceof Array){this.__lS=qx.lang.Array.clone(u);}
else {this.__lS=[];this.dispose();throw new Error(l);}
;for(var i=0;i<this.__lS.length;i++ ){this._applyEventPropagation(this.__lS[i],null,i);}
;this.__lT();if(qx.core.Environment.get(k)){this[0]=h;}
;}
,properties:{autoDisposeItems:{check:e,init:false}},events:{"change":t,"changeLength":t},members:{__lS:null,concat:function(v){if(v){var w=this.__lS.concat(v);}
else {var w=this.__lS.concat();}
;return new qx.data.Array(w);}
,join:function(x){return this.__lS.join(x);}
,pop:function(){var y=this.__lS.pop();this.__lT();this._registerEventChaining(null,y,this.length-1);this.fireDataEvent(r,{value:[],name:this.length+f,old:[y],item:this});this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:g,removed:[y],added:[]},null);return y;}
,push:function(z){for(var i=0;i<arguments.length;i++ ){this.__lS.push(arguments[i]);this.__lT();this._registerEventChaining(arguments[i],null,this.length-1);this.fireDataEvent(r,{value:[arguments[i]],name:(this.length-1)+f,old:[],item:this});this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:b,added:[arguments[i]],removed:[]},null);}
;return this.length;}
,reverse:function(){if(this.length==0){return;}
;var A=this.__lS.concat();this.__lS.reverse();this.__lU(0,this.length);this.fireDataEvent(o,{start:0,end:this.length-1,type:c,added:[],removed:[]},null);this.fireDataEvent(r,{value:this.__lS,name:n+(this.__lS.length-1),old:A,item:this});}
,shift:function(){if(this.length==0){return;}
;var B=this.__lS.shift();this.__lT();this._registerEventChaining(null,B,this.length-1);this.__lU(0,this.length);this.fireDataEvent(r,{value:[],name:p,old:[B],item:this});this.fireDataEvent(o,{start:0,end:this.length-1,type:g,removed:[B],added:[]},null);return B;}
,slice:function(D,C){return new qx.data.Array(this.__lS.slice(D,C));}
,splice:function(I,K,M){var P=this.__lS.length;var L=this.__lS.splice.apply(this.__lS,arguments);if(this.__lS.length!=P){this.__lT();}
else if(K==arguments.length-2){var E=qx.lang.Array.fromArguments(arguments,2);for(var i=0;i<E.length;i++ ){if(E[i]!==L[i]){break;}
;if(i==E.length-1){return new qx.data.Array();}
;}
;}
;var N=K>0;var G=arguments.length>2;if(N||G){var E=qx.lang.Array.fromArguments(arguments,2);if(L.length==0){var O=b;var H=I+E.length;}
else if(E.length==0){var O=g;var H=this.length-1;}
else {var O=d;var H=I+Math.abs(E.length-L.length);}
;this.fireDataEvent(o,{start:I,end:H,type:O,added:E,removed:L},null);}
;for(var i=0;i<L.length;i++ ){this._registerEventChaining(null,L[i],i);}
;for(var i=2;i<arguments.length;i++ ){this._registerEventChaining(arguments[i],null,I+(i-2));}
;this.__lU(I+(arguments.length-2)-K,this.length);var J=[];for(var i=2;i<arguments.length;i++ ){J[i-2]=arguments[i];}
;var F=(I+Math.max(arguments.length-3,K-1));var name=I==F?F:I+a+F;this.fireDataEvent(r,{value:J,name:name+f,old:L,item:this});return (new qx.data.Array(L));}
,sort:function(R){if(this.length==0){return;}
;var Q=this.__lS.concat();this.__lS.sort.apply(this.__lS,arguments);if(qx.lang.Array.equals(this.__lS,Q)===true){return;}
;this.__lU(0,this.length);this.fireDataEvent(o,{start:0,end:this.length-1,type:c,added:[],removed:[]},null);this.fireDataEvent(r,{value:this.__lS,name:n+(this.length-1),old:Q,item:this});}
,unshift:function(S){for(var i=arguments.length-1;i>=0;i-- ){this.__lS.unshift(arguments[i]);this.__lT();this.__lU(0,this.length);this.fireDataEvent(r,{value:[this.__lS[0]],name:p,old:[this.__lS[1]],item:this});this.fireDataEvent(o,{start:0,end:this.length-1,type:b,added:[arguments[i]],removed:[]},null);}
;return this.length;}
,toArray:function(){return this.__lS;}
,getItem:function(T){return this.__lS[T];}
,setItem:function(U,W){var V=this.__lS[U];if(V===W){return;}
;this.__lS[U]=W;this._registerEventChaining(W,V,U);if(this.length!=this.__lS.length){this.__lT();}
;this.fireDataEvent(r,{value:[W],name:U+f,old:[V],item:this});this.fireDataEvent(o,{start:U,end:U,type:d,added:[W],removed:[V]},null);}
,getLength:function(){return this.length;}
,indexOf:function(X){return this.__lS.indexOf(X);}
,lastIndexOf:function(Y){return this.__lS.lastIndexOf(Y);}
,toString:function(){if(this.__lS!=null){return this.__lS.toString();}
;return f;}
,contains:function(ba){return this.__lS.indexOf(ba)!==-1;}
,copy:function(){return this.concat();}
,insertAt:function(bb,bc){this.splice(bb,0,bc).dispose();}
,insertBefore:function(be,bd){var bf=this.indexOf(be);if(bf==-1){this.push(bd);}
else {this.splice(bf,0,bd).dispose();}
;}
,insertAfter:function(bh,bg){var bi=this.indexOf(bh);if(bi==-1||bi==(this.length-1)){this.push(bg);}
else {this.splice(bi+1,0,bg).dispose();}
;}
,removeAt:function(bj){var bk=this.splice(bj,1);var bl=bk.getItem(0);bk.dispose();return bl;}
,removeAll:function(){for(var i=0;i<this.__lS.length;i++ ){this._registerEventChaining(null,this.__lS[i],i);}
;if(this.getLength()==0){return [];}
;var bn=this.getLength();var bm=this.__lS.concat();this.__lS.length=0;this.__lT();this.fireDataEvent(r,{value:[],name:n+(bn-1),old:bm,item:this});this.fireDataEvent(o,{start:0,end:bn-1,type:g,removed:bm,added:[]},null);return bm;}
,append:function(bo){if(bo instanceof qx.data.Array){bo=bo.toArray();}
;if(qx.core.Environment.get(k)){qx.core.Assert.assertArray(bo,m);}
;Array.prototype.push.apply(this.__lS,bo);for(var i=0;i<bo.length;i++ ){this._registerEventChaining(bo[i],null,this.__lS.length+i);}
;var bp=this.length;this.__lT();var name=bp==(this.length-1)?bp:bp+a+(this.length-1);this.fireDataEvent(r,{value:bo,name:name+f,old:[],item:this});this.fireDataEvent(o,{start:bp,end:this.length-1,type:b,added:bo,removed:[]},null);}
,remove:function(bq){var br=this.indexOf(bq);if(br!=-1){this.splice(br,1).dispose();return bq;}
;}
,equals:function(bs){if(this.length!==bs.length){return false;}
;for(var i=0;i<this.length;i++ ){if(this.getItem(i)!==bs.getItem(i)){return false;}
;}
;return true;}
,sum:function(){var bt=0;for(var i=0;i<this.length;i++ ){bt+=this.getItem(i);}
;return bt;}
,max:function(){var bu=this.getItem(0);for(var i=1;i<this.length;i++ ){if(this.getItem(i)>bu){bu=this.getItem(i);}
;}
;return bu===undefined?null:bu;}
,min:function(){var bv=this.getItem(0);for(var i=1;i<this.length;i++ ){if(this.getItem(i)<bv){bv=this.getItem(i);}
;}
;return bv===undefined?null:bv;}
,forEach:function(bw,bx){for(var i=0;i<this.__lS.length;i++ ){bw.call(bx,this.__lS[i],i,this);}
;}
,filter:function(by,self){return new qx.data.Array(this.__lS.filter(by,self));}
,map:function(bz,self){return new qx.data.Array(this.__lS.map(bz,self));}
,some:function(bA,self){return this.__lS.some(bA,self);}
,every:function(bB,self){return this.__lS.every(bB,self);}
,reduce:function(bD,bC){return this.__lS.reduce(bD,bC);}
,reduceRight:function(bF,bE){return this.__lS.reduceRight(bF,bE);}
,__lT:function(){var bG=this.length;this.length=this.__lS.length;this.fireDataEvent(s,this.length,bG);}
,__lU:function(bI,bH){for(var i=bI;i<bH;i++ ){this._registerEventChaining(this.__lS[i],this.__lS[i],i);}
;}
},destruct:function(){for(var i=0;i<this.__lS.length;i++ ){var bJ=this.__lS[i];this._applyEventPropagation(null,bJ,i);if(this.isAutoDisposeItems()&&bJ&&bJ instanceof qx.core.Object){bJ.dispose();}
;}
;this.__lS=null;}
});}
)();
(function(){var a="qx.ui.core.ISingleSelection",b="qx.event.type.Data";qx.Interface.define(a,{events:{"changeSelection":b},members:{getSelection:function(){return true;}
,setSelection:function(c){return arguments.length==1;}
,resetSelection:function(){return true;}
,isSelected:function(d){return arguments.length==1;}
,isSelectionEmpty:function(){return true;}
,getSelectables:function(e){return arguments.length==1;}
}});}
)();
(function(){var a="qx.ui.form.IModelSelection";qx.Interface.define(a,{members:{setModelSelection:function(b){}
,getModelSelection:function(){}
}});}
)();
(function(){var a="_applyAllowEmptySelection",b="_applyInvalidMessage",c="qx.ui.form.RadioGroup",d="Boolean",f="_applyValid",g="",h="changeRequired",j="changeValid",k="changeEnabled",m="changeInvalidMessage",n="__lV",o="changeSelection",p="changeValue",q="_applyEnabled",r="String";qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(s){qx.core.Object.call(this);this.__lV=[];this.addListener(o,this.__lG,this);if(s!=null){this.add.apply(this,arguments);}
;}
,properties:{enabled:{check:d,apply:q,event:k,init:true},wrap:{check:d,init:true},allowEmptySelection:{check:d,init:false,apply:a},valid:{check:d,init:true,apply:f,event:j},required:{check:d,init:false,event:h},invalidMessage:{check:r,init:g,event:m,apply:b},requiredInvalidMessage:{check:r,nullable:true,event:m}},members:{__lV:null,getItems:function(){return this.__lV;}
,add:function(u){var v=this.__lV;var t;for(var i=0,l=arguments.length;i<l;i++ ){t=arguments[i];if(qx.lang.Array.contains(v,t)){continue;}
;t.addListener(p,this._onItemChangeChecked,this);v.push(t);t.setGroup(this);if(t.getValue()){this.setSelection([t]);}
;}
;if(!this.isAllowEmptySelection()&&v.length>0&&!this.getSelection()[0]){this.setSelection([v[0]]);}
;}
,remove:function(w){var x=this.__lV;if(qx.lang.Array.contains(x,w)){qx.lang.Array.remove(x,w);if(w.getGroup()===this){w.resetGroup();}
;w.removeListener(p,this._onItemChangeChecked,this);if(w.getValue()){this.resetSelection();}
;}
;}
,getChildren:function(){return this.__lV;}
,_onItemChangeChecked:function(e){var y=e.getTarget();if(y.getValue()){this.setSelection([y]);}
else if(this.getSelection()[0]==y){this.resetSelection();}
;}
,_applyInvalidMessage:function(A,z){for(var i=0;i<this.__lV.length;i++ ){this.__lV[i].setInvalidMessage(A);}
;}
,_applyValid:function(C,B){for(var i=0;i<this.__lV.length;i++ ){this.__lV[i].setValid(C);}
;}
,_applyEnabled:function(F,E){var D=this.__lV;if(F==null){for(var i=0,l=D.length;i<l;i++ ){D[i].resetEnabled();}
;}
else {for(var i=0,l=D.length;i<l;i++ ){D[i].setEnabled(F);}
;}
;}
,_applyAllowEmptySelection:function(H,G){if(!H&&this.isSelectionEmpty()){this.resetSelection();}
;}
,selectNext:function(){var J=this.getSelection()[0];var K=this.__lV;var I=K.indexOf(J);if(I==-1){return;}
;var i=0;var length=K.length;if(this.getWrap()){I=(I+1)%length;}
else {I=Math.min(I+1,length-1);}
;while(i<length&&!K[I].getEnabled()){I=(I+1)%length;i++ ;}
;this.setSelection([K[I]]);}
,selectPrevious:function(){var M=this.getSelection()[0];var N=this.__lV;var L=N.indexOf(M);if(L==-1){return;}
;var i=0;var length=N.length;if(this.getWrap()){L=(L-1+length)%length;}
else {L=Math.max(L-1,0);}
;while(i<length&&!N[L].getEnabled()){L=(L-1+length)%length;i++ ;}
;this.setSelection([N[L]]);}
,_getItems:function(){return this.getItems();}
,_isAllowEmptySelection:function(){return this.isAllowEmptySelection();}
,_isItemSelectable:function(O){return this.__lV.indexOf(O)!=-1;}
,__lG:function(e){var Q=e.getData()[0];var P=e.getOldData()[0];if(P){P.setValue(false);}
;if(Q){Q.setValue(true);}
;}
},destruct:function(){this._disposeArray(n);}
});}
)();
(function(){var a="qx.ui.form.IBooleanForm",b="qx.event.type.Data";qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;}
,resetValue:function(){}
,getValue:function(){}
}});}
)();
(function(){var a="hovered",b="Boolean",c="pressed",d="_applyTriState",f="pointerover",g="changeValue",h="Space",i="keydown",j="abandoned",k="undetermined",l="_applyGroup",m="button",n="execute",o="Enter",p="qx.ui.form.RadioGroup",q="_applyValue",r="qx.ui.form.ToggleButton",s="pointerup",t="pointerdown",u="keyup",v="checked",w="pointerout";qx.Class.define(r,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable,qx.ui.form.IRadioItem],construct:function(x,y){qx.ui.basic.Atom.call(this,x,y);this.addListener(f,this._onPointerOver);this.addListener(w,this._onPointerOut);this.addListener(t,this._onPointerDown);this.addListener(s,this._onPointerUp);this.addListener(i,this._onKeyDown);this.addListener(u,this._onKeyUp);this.addListener(n,this._onExecute,this);}
,properties:{appearance:{refine:true,init:m},focusable:{refine:true,init:true},value:{check:b,nullable:true,event:g,apply:q,init:false},group:{check:p,nullable:true,apply:l},triState:{check:b,apply:d,nullable:true,init:null}},members:{_applyGroup:function(A,z){if(z){z.remove(this);}
;if(A){A.add(this);}
;}
,_applyValue:function(C,B){C?this.addState(v):this.removeState(v);if(this.isTriState()){if(C===null){this.addState(k);}
else if(B===null){this.removeState(k);}
;}
;}
,_applyTriState:function(E,D){this._applyValue(this.getValue());}
,_onExecute:function(e){this.toggleValue();}
,_onPointerOver:function(e){if(e.getTarget()!==this){return;}
;this.addState(a);if(this.hasState(j)){this.removeState(j);this.addState(c);}
;}
,_onPointerOut:function(e){if(e.getTarget()!==this){return;}
;this.removeState(a);if(this.hasState(c)){if(!this.getValue()){this.removeState(c);}
;this.addState(j);}
;}
,_onPointerDown:function(e){if(!e.isLeftPressed()){return;}
;this.capture();this.removeState(j);this.addState(c);e.stopPropagation();}
,_onPointerUp:function(e){this.releaseCapture();if(this.hasState(j)){this.removeState(j);}
else if(this.hasState(c)){this.execute();}
;this.removeState(c);e.stopPropagation();}
,_onKeyDown:function(e){switch(e.getKeyIdentifier()){case o:case h:this.removeState(j);this.addState(c);e.stopPropagation();};}
,_onKeyUp:function(e){if(!this.hasState(c)){return;}
;switch(e.getKeyIdentifier()){case o:case h:this.removeState(j);this.execute();this.removeState(c);e.stopPropagation();};}
}});}
)();
(function(){var a="changeModel",b="_applyModel",c="qx.ui.form.MModelProperty";qx.Mixin.define(c,{properties:{model:{nullable:true,event:a,apply:b,dereference:true}},members:{_applyModel:function(e,d){}
}});}
)();
(function(){var a="qx.ui.form.IModel",b="qx.event.type.Data";qx.Interface.define(a,{events:{"changeModel":b},members:{setModel:function(c){}
,getModel:function(){}
,resetModel:function(){}
}});}
)();
(function(){var a="label",b="qx.debug",c="checkbox",d="qx.ui.form.CheckBox",e="value",f="toolTipText",g="enabled",h="menu";qx.Class.define(d,{extend:qx.ui.form.ToggleButton,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(i){if(qx.core.Environment.get(b)){this.assertArgumentsCount(arguments,0,1);}
;qx.ui.form.ToggleButton.call(this,i);this.setValue(false);}
,properties:{appearance:{refine:true,init:c},allowGrowX:{refine:true,init:false}},members:{_forwardStates:{invalid:true,focused:true,undetermined:true,checked:true,hovered:true},_bindableProperties:[g,a,f,e,h]}});}
)();
(function(){var a="resetPaddingRight",b="setPaddingTop",c="_applyContentPadding",d="setPaddingBottom",e="resetThemed",f="contentPaddingRight",g="Integer",h="contentPaddingLeft",i="setThemedPaddingLeft",j="resetPaddingTop",k="shorthand",l="setThemedPaddingRight",m="setThemed",n="setPaddingRight",o="contentPaddingBottom",p="resetPaddingBottom",q="qx.ui.core.MContentPadding",r="resetPaddingLeft",s="setThemedPaddingTop",t="setPaddingLeft",u="setThemedPaddingBottom",v="contentPaddingTop";qx.Mixin.define(q,{properties:{contentPaddingTop:{check:g,init:0,apply:c,themeable:true},contentPaddingRight:{check:g,init:0,apply:c,themeable:true},contentPaddingBottom:{check:g,init:0,apply:c,themeable:true},contentPaddingLeft:{check:g,init:0,apply:c,themeable:true},contentPadding:{group:[v,f,o,h],mode:k,themeable:true}},members:{__nz:{contentPaddingTop:b,contentPaddingRight:n,contentPaddingBottom:d,contentPaddingLeft:t},__nA:{contentPaddingTop:s,contentPaddingRight:l,contentPaddingBottom:u,contentPaddingLeft:i},__nB:{contentPaddingTop:j,contentPaddingRight:a,contentPaddingBottom:p,contentPaddingLeft:r},_applyContentPadding:function(z,w,name,y){var A=this._getContentPaddingTarget();if(z==null){var x=this.__nB[name];A[x]();}
else {if(y==m||y==e){var B=this.__nA[name];A[B](z);}
else {var B=this.__nz[name];A[B](z);}
;}
;}
}});}
)();
(function(){var a="PageUp",b="Boolean",c="_applyEditable",d="_applyWrap",f="changeValue",g="keydown",h="Down",i="\-]",j="roll",k="execute",l="inner",m="PageDown",n="changeLocale",o="_applyValue",p="Up",q="downbutton",r="",s="number",t="textfield",u="_applyMinimum",v="qx.util.format.NumberFormat",w="qx.dynlocale",x="[0-9",y="upbutton",z="keyup",A="spinner",B="this._checkValue(value)",C="Number",D="wheel",E="_applyMaximum",F="changeNumberFormat",G="changeMaximum",H="changeMinimum",I="_applyNumberFormat",J="qx.ui.form.Spinner";qx.Class.define(J,{extend:qx.ui.core.Widget,implement:[qx.ui.form.INumberForm,qx.ui.form.IRange,qx.ui.form.IForm],include:[qx.ui.core.MContentPadding,qx.ui.form.MForm],construct:function(N,M,K){qx.ui.core.Widget.call(this);var L=new qx.ui.layout.Grid();L.setColumnFlex(0,1);L.setRowFlex(0,1);L.setRowFlex(1,1);this._setLayout(L);this.addListener(g,this._onKeyDown,this);this.addListener(z,this._onKeyUp,this);this.addListener(j,this._onRoll,this);if(qx.core.Environment.get(w)){qx.locale.Manager.getInstance().addListener(n,this._onChangeLocale,this);}
;this._createChildControl(t);this._createChildControl(y);this._createChildControl(q);if(N!=null){this.setMinimum(N);}
;if(K!=null){this.setMaximum(K);}
;if(M!==undefined){this.setValue(M);}
else {this.initValue();}
;}
,properties:{appearance:{refine:true,init:A},focusable:{refine:true,init:true},singleStep:{check:C,init:1},pageStep:{check:C,init:10},minimum:{check:C,apply:u,init:0,event:H},value:{check:B,nullable:true,apply:o,init:0,event:f},maximum:{check:C,apply:E,init:100,event:G},wrap:{check:b,init:false,apply:d},editable:{check:b,init:true,apply:c},numberFormat:{check:v,apply:I,nullable:true},allowShrinkY:{refine:true,init:false}},members:{__vW:null,__vX:false,__vY:false,_createChildControlImpl:function(Q,P){var O;switch(Q){case t:O=new qx.ui.form.TextField();O.setFilter(this._getFilterRegExp());O.addState(l);O.setWidth(40);O.setFocusable(false);O.addListener(f,this._onTextChange,this);this._add(O,{column:0,row:0,rowSpan:2});break;case y:O=new qx.ui.form.RepeatButton();O.addState(l);O.setFocusable(false);O.addListener(k,this._countUp,this);this._add(O,{column:1,row:0});break;case q:O=new qx.ui.form.RepeatButton();O.addState(l);O.setFocusable(false);O.addListener(k,this._countDown,this);this._add(O,{column:1,row:1});break;};return O||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,Q);}
,_getFilterRegExp:function(){var V=qx.locale.Number.getDecimalSeparator(qx.locale.Manager.getInstance().getLocale());var U=qx.locale.Number.getGroupSeparator(qx.locale.Manager.getInstance().getLocale());var T=r;var R=r;if(this.getNumberFormat()!==null){T=this.getNumberFormat().getPrefix()||r;R=this.getNumberFormat().getPostfix()||r;}
;var S=new RegExp(x+qx.lang.String.escapeRegexpChars(V)+qx.lang.String.escapeRegexpChars(U)+qx.lang.String.escapeRegexpChars(T)+qx.lang.String.escapeRegexpChars(R)+i);return S;}
,_forwardStates:{focused:true,invalid:true},tabFocus:function(){var W=this.getChildControl(t);W.getFocusElement().focus();W.selectAllText();}
,_applyMinimum:function(Y,X){if(this.getMaximum()<Y){this.setMaximum(Y);}
;if(this.getValue()<Y){this.setValue(Y);}
else {this._updateButtons();}
;}
,_applyMaximum:function(bb,ba){if(this.getMinimum()>bb){this.setMinimum(bb);}
;if(this.getValue()>bb){this.setValue(bb);}
else {this._updateButtons();}
;}
,_applyEnabled:function(bd,bc){qx.ui.core.Widget.prototype._applyEnabled.call(this,bd,bc);this._updateButtons();}
,_checkValue:function(be){return typeof be===s&&be>=this.getMinimum()&&be<=this.getMaximum();}
,_applyValue:function(bh,bg){var bf=this.getChildControl(t);this._updateButtons();this.__vW=bh;if(bh!==null){if(this.getNumberFormat()){bf.setValue(this.getNumberFormat().format(bh));}
else {bf.setValue(bh+r);}
;}
else {bf.setValue(r);}
;}
,_applyEditable:function(bk,bj){var bi=this.getChildControl(t);if(bi){bi.setReadOnly(!bk);}
;}
,_applyWrap:function(bm,bl){this._updateButtons();}
,_applyNumberFormat:function(bp,bo){var bn=this.getChildControl(t);bn.setFilter(this._getFilterRegExp());this.getNumberFormat().addListener(F,this._onChangeNumberFormat,this);this._applyValue(this.__vW,undefined);}
,_getContentPaddingTarget:function(){return this.getChildControl(t);}
,_updateButtons:function(){var br=this.getChildControl(y);var bq=this.getChildControl(q);var bs=this.getValue();if(!this.getEnabled()){br.setEnabled(false);bq.setEnabled(false);}
else {if(this.getWrap()){br.setEnabled(true);bq.setEnabled(true);}
else {if(bs!==null&&bs<this.getMaximum()){br.setEnabled(true);}
else {br.setEnabled(false);}
;if(bs!==null&&bs>this.getMinimum()){bq.setEnabled(true);}
else {bq.setEnabled(false);}
;}
;}
;}
,_onKeyDown:function(e){switch(e.getKeyIdentifier()){case a:this.__vX=true;case p:this.getChildControl(y).press();break;case m:this.__vY=true;case h:this.getChildControl(q).press();break;default:return;};e.stopPropagation();e.preventDefault();}
,_onKeyUp:function(e){switch(e.getKeyIdentifier()){case a:this.getChildControl(y).release();this.__vX=false;break;case p:this.getChildControl(y).release();break;case m:this.getChildControl(q).release();this.__vY=false;break;case h:this.getChildControl(q).release();break;};}
,_onRoll:function(e){if(e.getPointerType()!=D){return;}
;var bt=e.getDelta().y;if(bt<0){this._countUp();}
else if(bt>0){this._countDown();}
;e.stop();}
,_onTextChange:function(e){var bu=this.getChildControl(t);var bv;if(this.getNumberFormat()){try{bv=this.getNumberFormat().parse(bu.getValue());}
catch(bw){}
;}
;if(bv===undefined){bv=parseFloat(bu.getValue());}
;if(!isNaN(bv)){if(bv>this.getMaximum()){bu.setValue(this.getMaximum()+r);return;}
else if(bv<this.getMinimum()){bu.setValue(this.getMinimum()+r);return;}
;this.setValue(bv);}
else {this._applyValue(this.__vW,undefined);}
;}
,_onChangeLocale:function(by){if(this.getNumberFormat()!==null){this.setNumberFormat(this.getNumberFormat());var bx=this.getChildControl(t);bx.setFilter(this._getFilterRegExp());bx.setValue(this.getNumberFormat().format(this.getValue()));}
;}
,_onChangeNumberFormat:function(bA){var bz=this.getChildControl(t);bz.setFilter(this._getFilterRegExp());bz.setValue(this.getNumberFormat().format(this.getValue()));}
,_countUp:function(){if(this.__vX){var bC=this.getValue()+this.getPageStep();}
else {var bC=this.getValue()+this.getSingleStep();}
;if(this.getWrap()){if(bC>this.getMaximum()){var bB=this.getMaximum()-bC;bC=this.getMinimum()-bB-1;}
;}
;this.gotoValue(bC);}
,_countDown:function(){if(this.__vY){var bE=this.getValue()-this.getPageStep();}
else {var bE=this.getValue()-this.getSingleStep();}
;if(this.getWrap()){if(bE<this.getMinimum()){var bD=this.getMinimum()+bE;bE=this.getMaximum()+bD+1;}
;}
;this.gotoValue(bE);}
,gotoValue:function(bF){return this.setValue(Math.min(this.getMaximum(),Math.max(this.getMinimum(),bF)));}
},destruct:function(){if(qx.core.Environment.get(w)){qx.locale.Manager.getInstance().removeListener(n,this._onChangeLocale,this);}
;}
});}
)();
(function(){var a="readOnly",b="text",c="outline: none;",d="_applyTextAlign",f="Boolean",g="px",h="RegExp",i=")",j="syncAppearance",k="engine.version",l="Invalid value type: ",m="A",n="input::-moz-placeholder, textarea::-moz-placeholder",o="autoComplete: off;",p=".qx-abstract-field",q="input",r="color",s="border: none;",t="qx.event.type.Data",u="focusin",v="showingPlaceholder",w="resize: none;",x="center",y="change",z="changeStatus",A="placeholder",B="input.qx-placeholder-color::-webkit-input-placeholder, textarea.qx-placeholder-color::-webkit-input-placeholder",C="focused",D="qx-placeholder-color",E="visible",F="PositiveInteger",G=" !important",H="url(",I="display : block;",J="_applyReadOnly",K="browser.documentmode",L="input:-moz-placeholder, textarea:-moz-placeholder",M="readonly",N="qx.ui.form.AbstractField",O="disabled",P="",Q="textAlign",R="visibility",S="_applyMaxLength",T="input.qx-placeholder-color:-ms-input-placeholder, textarea.qx-placeholder-color:-ms-input-placeholder",U="appearance: none;",V="color: ",W="qx-abstract-field",X="background : transparent;",Y="qx.dynlocale",bH="spellcheck",bI="false",bJ="right",bD="maxLength",bE="gecko",bF="normal",bG="mshtml",bN="engine.name",bO="padding: 0;",bP="abstract",cc="focusout",bK="pointerdown",bL="position: absolute;",bM="margin: 0;",bB="css.placeholder",bS="webkit",bC="String",bT="changeLocale",bU="_applyPlaceholder",bY="hidden",bQ="border-radius: 0;",cb="left",bR="changeValue",bV="qx/static/blank.gif",bW="text-placeholder",bX="changeReadOnly",ca="absolute";qx.Class.define(N,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:bP,statics:{__dM:null,__pp:function(){var ce=qx.theme.manager.Color.getInstance();var cd=ce.resolve(bW);var cf;if(qx.core.Environment.get(bN)==bE){if(parseFloat(qx.core.Environment.get(k))>=19){cf=n;}
else {cf=L;}
;qx.ui.style.Stylesheet.getInstance().addRule(cf,V+cd+G);}
else if(qx.core.Environment.get(bN)==bS){cf=B;qx.ui.style.Stylesheet.getInstance().addRule(cf,V+cd);}
else if(qx.core.Environment.get(bN)==bG){cf=T;qx.ui.style.Stylesheet.getInstance().addRule(cf,V+cd+G);}
;}
},construct:function(cg){qx.ui.core.Widget.call(this);this.__pq=!qx.core.Environment.get(bB);if(cg!=null){this.setValue(cg);}
;this.getContentElement().addListener(y,this._onChangeContent,this);if(this.__pq){this.addListener(j,this._syncPlaceholder,this);}
else {qx.ui.form.AbstractField.__pp();this.getContentElement().addClass(D);}
;if(qx.core.Environment.get(Y)){qx.locale.Manager.getInstance().addListener(bT,this._onChangeLocale,this);}
;}
,events:{"input":t,"changeValue":t},properties:{textAlign:{check:[cb,x,bJ],nullable:true,themeable:true,apply:d},readOnly:{check:f,apply:J,event:bX,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{apply:S,check:F,init:Infinity},liveUpdate:{check:f,init:false},placeholder:{check:bC,nullable:true,apply:bU},filter:{check:h,nullable:true,init:null}},members:{__pr:true,_placeholder:null,__hQ:null,__hR:null,__pq:true,__mc:null,__mg:null,getFocusElement:function(){var ch=this.getContentElement();if(ch){return ch;}
;}
,_createInputElement:function(){return new qx.html.Input(b);}
,renderLayout:function(cq,top,cl,cj){var ci=this._updateInsets;var co=qx.ui.core.Widget.prototype.renderLayout.call(this,cq,top,cl,cj);if(!co){return;}
;var cm=co.size||ci;var cp=g;if(cm||co.local||co.margin){var innerWidth=cl;var innerHeight=cj;}
;var cn=this.getContentElement();if(ci&&this.__pq){if(this.__pq){var ck=this.getInsets();this._getPlaceholderElement().setStyles({paddingTop:ck.top+cp,paddingRight:ck.right+cp,paddingBottom:ck.bottom+cp,paddingLeft:ck.left+cp});}
;}
;if(cm||co.margin){if(this.__pq){var ck=this.getInsets();this._getPlaceholderElement().setStyles({"width":(innerWidth-ck.left-ck.right)+cp,"height":(innerHeight-ck.top-ck.bottom)+cp});}
;cn.setStyles({"width":innerWidth+cp,"height":innerHeight+cp});this._renderContentElement(innerHeight,cn);}
;if(co.position){if(this.__pq){this._getPlaceholderElement().setStyles({"left":cq+cp,"top":top+cp});}
;}
;}
,_renderContentElement:function(innerHeight,cr){}
,_createContentElement:function(){var cs=this._createInputElement();cs.setSelectable(this.getSelectable());cs.setEnabled(this.getEnabled());cs.addListener(q,this._onHtmlInput,this);cs.setAttribute(bH,bI);cs.addClass(W);if((qx.core.Environment.get(bN)==bG)&&(qx.core.Environment.get(K)==8)){cs.setStyles({backgroundImage:H+qx.util.ResourceManager.getInstance().toUri(bV)+i});}
;return cs;}
,_applyEnabled:function(cv,cu){qx.ui.core.Widget.prototype._applyEnabled.call(this,cv,cu);this.getContentElement().setEnabled(cv);if(this.__pq){if(cv){this._showPlaceholder();}
else {this._removePlaceholder();}
;}
else {var ct=this.getContentElement();ct.setAttribute(A,cv?this.getPlaceholder():P);}
;}
,__ps:{width:16,height:16},_getContentHint:function(){return {width:this.__ps.width*10,height:this.__ps.height||16};}
,_applyFont:function(cy,cx){if(cx&&this.__mc&&this.__mg){this.__mc.removeListenerById(this.__mg);this.__mg=null;}
;var cw;if(cy){this.__mc=qx.theme.manager.Font.getInstance().resolve(cy);if(this.__mc instanceof qx.bom.webfonts.WebFont){this.__mg=this.__mc.addListener(z,this._onWebFontStatusChange,this);}
;cw=this.__mc.getStyles();}
else {cw=qx.bom.Font.getDefaultStyles();}
;if(this.getTextColor()!=null){delete cw[r];}
;if(qx.core.Environment.get(bN)==bG&&qx.core.Environment.get(K)<11){qx.html.Element.flush();this.getContentElement().setStyles(cw,true);}
else {this.getContentElement().setStyles(cw);}
;if(this.__pq){delete cw[r];this._getPlaceholderElement().setStyles(cw);}
;if(cy){this.__ps=qx.bom.Label.getTextSize(m,cw);}
else {delete this.__ps;}
;qx.ui.core.queue.Layout.add(this);}
,_applyTextColor:function(cA,cz){if(cA){this.getContentElement().setStyle(r,qx.theme.manager.Color.getInstance().resolve(cA));}
else {this.getContentElement().removeStyle(r);}
;}
,_applyMaxLength:function(cC,cB){if(cC){this.getContentElement().setAttribute(bD,cC);}
else {this.getContentElement().removeAttribute(bD);}
;}
,tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);this.selectAllText();}
,_getTextSize:function(){return this.__ps;}
,_onHtmlInput:function(e){var cF=e.getData();var cE=true;this.__pr=false;if(this.__hR&&this.__hR===cF){cE=false;}
;if(this.getFilter()!=null){var cH=P;var cD=cF.search(this.getFilter());var cG=cF;while(cD>=0){cH=cH+(cG.charAt(cD));cG=cG.substring(cD+1,cG.length);cD=cG.search(this.getFilter());}
;if(cH!=cF){cE=false;cF=cH;this.getContentElement().setValue(cF);}
;}
;if(cE){this.fireDataEvent(q,cF,this.__hR);this.__hR=cF;if(this.getLiveUpdate()){this.__pt(cF);}
;}
;}
,_onWebFontStatusChange:function(cJ){if(cJ.getData().valid===true){var cI=this.__mc.getStyles();this.__ps=qx.bom.Label.getTextSize(m,cI);qx.ui.core.queue.Layout.add(this);}
;}
,__pt:function(cL){var cK=this.__hQ;this.__hQ=cL;if(cK!=cL){this.fireNonBubblingEvent(bR,qx.event.type.Data,[cL,cK]);}
;}
,setValue:function(cP){if(cP===null){if(this.__pr){return cP;}
;cP=P;this.__pr=true;}
else {this.__pr=false;if(this.__pq){this._removePlaceholder();}
;}
;if(qx.lang.Type.isString(cP)){var cO=this.getContentElement();if(cO.getValue()!=cP){var cM=cO.getValue();cO.setValue(cP);var cN=this.__pr?null:cP;this.__hQ=cM;this.__pt(cN);this.__hR=this.__hQ;}
;if(this.__pq){this._showPlaceholder();}
;return cP;}
;throw new Error(l+cP);}
,getValue:function(){var cQ=this.getContentElement().getValue();return this.__pr?null:cQ;}
,resetValue:function(){this.setValue(null);}
,_onChangeContent:function(e){this.__pr=e.getData()===null;this.__pt(e.getData());}
,getTextSelection:function(){return this.getContentElement().getTextSelection();}
,getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();}
,getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();}
,getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();}
,setTextSelection:function(cR,cS){this.getContentElement().setTextSelection(cR,cS);}
,clearTextSelection:function(){this.getContentElement().clearTextSelection();}
,selectAllText:function(){this.setTextSelection(0);}
,setLayoutParent:function(parent){qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);if(this.__pq){if(parent){this.getLayoutParent().getContentElement().add(this._getPlaceholderElement());}
else {var cT=this._getPlaceholderElement();cT.getParent().remove(cT);}
;}
;}
,_showPlaceholder:function(){var cV=this.getValue()||P;var cU=this.getPlaceholder();if(cU!=null&&cV==P&&!this.hasState(C)&&!this.hasState(O)){if(this.hasState(v)){this._syncPlaceholder();}
else {this.addState(v);}
;}
;}
,_onPointerDownPlaceholder:function(){window.setTimeout(function(){this.focus();}
.bind(this),0);}
,_removePlaceholder:function(){if(this.hasState(v)){if(this.__pq){this._getPlaceholderElement().setStyle(R,bY);}
;this.removeState(v);}
;}
,_syncPlaceholder:function(){if(this.hasState(v)&&this.__pq){this._getPlaceholderElement().setStyle(R,E);}
;}
,_getPlaceholderElement:function(){if(this._placeholder==null){this._placeholder=new qx.html.Label();var cW=qx.theme.manager.Color.getInstance();this._placeholder.setStyles({"zIndex":11,"position":ca,"color":cW.resolve(bW),"whiteSpace":bF,"cursor":b,"visibility":bY});this._placeholder.addListener(bK,this._onPointerDownPlaceholder,this);}
;return this._placeholder;}
,_onChangeLocale:qx.core.Environment.select(Y,{"true":function(e){var content=this.getPlaceholder();if(content&&content.translate){this.setPlaceholder(content.translate());}
;}
,"false":null}),_onChangeTheme:function(){qx.ui.core.Widget.prototype._onChangeTheme.call(this);if(this._placeholder){this._placeholder.dispose();this._placeholder=null;}
;if(!this.__pq&&qx.ui.form.AbstractField.__dM){qx.bom.Stylesheet.removeSheet(qx.ui.form.AbstractField.__dM);qx.ui.form.AbstractField.__dM=null;qx.ui.form.AbstractField.__pp();}
;}
,_applyPlaceholder:function(cY,cX){if(this.__pq){this._getPlaceholderElement().setValue(cY);if(cY!=null){this.addListener(u,this._removePlaceholder,this);this.addListener(cc,this._showPlaceholder,this);this._showPlaceholder();}
else {this.removeListener(u,this._removePlaceholder,this);this.removeListener(cc,this._showPlaceholder,this);this._removePlaceholder();}
;}
else {if(this.getEnabled()){this.getContentElement().setAttribute(A,cY);}
;}
;}
,_applyTextAlign:function(db,da){this.getContentElement().setStyle(Q,db);}
,_applyReadOnly:function(dd,dc){var de=this.getContentElement();de.setAttribute(a,dd);if(dd){this.addState(M);this.setFocusable(false);}
else {this.removeState(M);this.setFocusable(true);}
;}
},defer:function(df){var dg=s+bO+bM+I+X+c+U+bL+o+w+bQ;qx.ui.style.Stylesheet.getInstance().addRule(p,dg);}
,destruct:function(){if(this._placeholder){this._placeholder.removeListener(bK,this._onPointerDownPlaceholder,this);var parent=this._placeholder.getParent();if(parent){parent.remove(this._placeholder);}
;this._placeholder.dispose();}
;this._placeholder=this.__mc=null;if(qx.core.Environment.get(Y)){qx.locale.Manager.getInstance().removeListener(bT,this._onChangeLocale,this);}
;if(this.__mc&&this.__mg){this.__mc.removeListenerById(this.__mg);}
;this.getContentElement().removeListener(q,this._onHtmlInput,this);}
});}
)();
(function(){var a="engine.name",b="",c="wrap",d="none",e="Text wrapping is only support by textareas!",f="overflow",g="webkit",h="input",i="qx.html.Input",j="value",k="select",l="disabled",m="read-only",n="textarea",o="overflowX",p="overflowY";qx.Class.define(i,{extend:qx.html.Element,construct:function(s,q,r){if(s===k||s===n){var t=s;}
else {t=h;}
;qx.html.Element.call(this,t,q,r);this.__pu=s;}
,members:{__pu:null,__pv:null,__pw:null,_createDomElement:function(){return qx.bom.Input.create(this.__pu);}
,_applyProperty:function(name,u){qx.html.Element.prototype._applyProperty.call(this,name,u);var v=this.getDomElement();if(name===j){qx.bom.Input.setValue(v,u);}
else if(name===c){qx.bom.Input.setWrap(v,u);this.setStyle(f,v.style.overflow,true);this.setStyle(o,v.style.overflowX,true);this.setStyle(p,v.style.overflowY,true);}
;}
,setEnabled:function(w){this.__pw=w;this.setAttribute(l,w===false);if(qx.core.Environment.get(a)==g){if(!w){this.setStyles({"userModify":m,"userSelect":d});}
else {this.setStyles({"userModify":null,"userSelect":this.__pv?null:d});}
;}
;}
,setSelectable:qx.core.Environment.select(a,{"webkit":function(x){this.__pv=x;qx.html.Element.prototype.setSelectable.call(this,this.__pw&&x);}
,"default":function(y){qx.html.Element.prototype.setSelectable.call(this,y);}
}),setValue:function(z){var A=this.getDomElement();if(A){if(A.value!=z){qx.bom.Input.setValue(A,z);}
;}
else {this._setProperty(j,z);}
;return this;}
,getValue:function(){var B=this.getDomElement();if(B){return qx.bom.Input.getValue(B);}
;return this._getProperty(j)||b;}
,setWrap:function(C,D){if(this.__pu===n){this._setProperty(c,C,D);}
else {throw new Error(e);}
;return this;}
,getWrap:function(){if(this.__pu===n){return this._getProperty(c);}
else {throw new Error(e);}
;}
}});}
)();
(function(){var a="text",b="Unsupported input type.",c="nowrap",d="radio",e="textarea",f="auto",g="",h="qx.debug",j="input",k="option",m="value",n="select",o="soft",p="number",q="off",r="qx.bom.Input",s="normal",t="mshtml",u="engine.name",v="wrap",w="checkbox",x="select-one";qx.Bootstrap.define(r,{statics:{__do:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(A,B,y){if(qx.core.Environment.get(h)){qx.core.Assert.assertKeyInMap(A,this.__do,b);}
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
,"gecko|webkit":function(bd,ba){var bc=ba?o:q;var bb=ba?g:f;bd.setAttribute(v,bc);bd.style.overflow=bb;}
,"default":function(bf,be){bf.style.whiteSpace=be?s:c;}
})}});}
)();
(function(){var a="mshtml",b="engine.name",c="qx.ui.form.TextField",d='px',e="textfield",f="engine.version",g="browser.documentmode";qx.Class.define(c,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:e},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,h){if((qx.core.Environment.get(b)==a)&&(parseInt(qx.core.Environment.get(f),10)<9||qx.core.Environment.get(g)<9)){h.setStyles({"line-height":innerHeight+d});}
;}
}});}
)();
(function(){var a="cldr_number_decimal_separator",b="cldr_number_percent_format",c="qx.locale.Number",d="cldr_number_group_separator";qx.Class.define(c,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(a,[],e);}
,getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(d,[],f);}
,getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(b,[],g);}
}});}
)();
(function(){var a="keypress",b="Boolean",c="Right",d="label",f="qx.debug",g="Left",h="_applyValue",i="changeValue",j="Up",k="value",l="qx.ui.form.RadioButton",m="radiobutton",n="toolTipText",o="enabled",p="qx.ui.form.RadioGroup",q="Down",r="_applyGroup",s="checked",t="menu",u="execute";qx.Class.define(l,{extend:qx.ui.form.Button,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IForm,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(v){if(qx.core.Environment.get(f)){this.assertArgumentsCount(arguments,0,1);}
;qx.ui.form.Button.call(this,v);this.addListener(u,this._onExecute);this.addListener(a,this._onKeyPress);}
,properties:{group:{check:p,nullable:true,apply:r},value:{check:b,nullable:true,event:i,apply:h,init:false},appearance:{refine:true,init:m},allowGrowX:{refine:true,init:false}},members:{_forwardStates:{checked:true,focused:true,invalid:true,hovered:true},_bindableProperties:[o,d,n,k,t],_applyValue:function(x,w){x?this.addState(s):this.removeState(s);}
,_applyGroup:function(z,y){if(y){y.remove(this);}
;if(z){z.add(this);}
;}
,_onExecute:function(e){var A=this.getGroup();if(A&&A.getAllowEmptySelection()){this.toggleValue();}
else {this.setValue(true);}
;}
,_onKeyPress:function(e){var B=this.getGroup();if(!B){return;}
;switch(e.getKeyIdentifier()){case g:case j:B.selectPrevious();break;case c:case q:B.selectNext();break;};}
}});}
)();
(function(){var a="enum",b="center",c="%",d="south",e="int",f="west",g="north",h="east",i="string",j="demobrowser.demo.util.LayoutPropertyGroup";qx.Class.define(j,{extend:demobrowser.demo.util.PropertyGroup,statics:{BOX_PROPERTIES:{"flex":{type:e,min:-1000,nullable:true}},BASIC_PROPERTIES:{"top":{type:e,min:-1000,nullable:true},"left":{type:e,min:-1000,nullable:true}},CANVAS_PROPERTIES:{"top":{type:i,nullable:true,convert:function(k){if(parseInt(k).toString()==k){k=parseInt(k);}
;return k||null;}
},"right":{type:i,nullable:true,convert:function(l){if(parseInt(l).toString()==l){l=parseInt(l);}
;return l||null;}
},"bottom":{type:i,nullable:true,convert:function(m){if(parseInt(m).toString()==m){m=parseInt(m);}
;return m||null;}
},"left":{type:i,nullable:true,convert:function(n){if(parseInt(n).toString()==n){n=parseInt(n);}
;return n||null;}
},"width":{type:e,nullable:true,convert:function(o){return o==null?null:o+c;}
},"height":{type:e,nullable:true,convert:function(p){return p==null?null:p+c;}
}},DOCK_PROPERTIES:{"width":{type:e,nullable:true,convert:function(q){return q==null?null:q+c;}
},"height":{type:e,nullable:true,convert:function(r){return r==null?null:r+c;}
},"edge":{type:a,values:[g,h,d,f,b],nullable:false}},GRID_PROPERTIES:{"row":{type:e,nullable:false},"column":{type:e,nullable:false},"rowSpan":{type:e,nullable:true},"colSpan":{type:e,nullable:true}}},members:{_setProperty:function(s,name,u){var t=this._properties[name].convert;if(t){u=t(u);}
;var v={};v[name]=u;s.setLayoutProperties(v);}
,_getProperty:function(w,name){return w.getLayoutProperties()[name]||null;}
,_hasProperty:function(x,name){return true;}
}});}
)();
(function(){var a="yellow",b="center",c="green",d="tap me",f="top",g="middle",h="tap",i="right",j="demobrowser.demo.layout.Grid_Simple",k="main";qx.Class.define(j,{extend:demobrowser.demo.util.LayoutApplication,members:{main:function(){demobrowser.demo.util.LayoutApplication.prototype.main.call(this);var scroll=new qx.ui.container.Scroll();this.getRoot().add(scroll,{edge:0});var l=new qx.ui.container.Composite(new qx.ui.layout.VBox(20)).set({padding:20});scroll.add(l);l.add(this.getGrid1());l.add(this.getGrid2());l.add(this.getGrid3());}
,getGrid1:function(){var m=new qx.ui.container.Composite(new qx.ui.layout.Grid(10,20)).set({decorator:k,backgroundColor:a,allowGrowX:false,allowGrowY:false});m.add(new qx.ui.core.Widget().set({decorator:k,backgroundColor:c}),{row:0,column:0});m.add(new qx.ui.core.Widget().set({decorator:k,backgroundColor:c}),{row:0,column:1});m.add(new qx.ui.core.Widget().set({decorator:k,backgroundColor:c}),{row:1,column:0});m.add(new qx.ui.core.Widget().set({decorator:k,backgroundColor:c}),{row:1,column:1});return m;}
,getGrid2:function(){var o=new qx.ui.layout.Grid();o.setColumnAlign(1,b,f);o.setColumnAlign(0,i,g);o.setSpacing(5);var p=new qx.ui.container.Composite(o).set({decorator:k,backgroundColor:a,allowGrowX:false});p.add(new qx.ui.core.Widget().set({decorator:k,backgroundColor:c,width:150}),{row:0,column:0});var n=new qx.ui.basic.Label(d).set({decorator:k,backgroundColor:c,allowGrowX:false,width:50,height:50});p.add(n,{row:0,column:1});p.add(new qx.ui.core.Widget().set({decorator:k,backgroundColor:c,maxHeight:60,allowGrowX:false}),{row:1,column:0});p.add(new qx.ui.core.Widget().set({decorator:k,backgroundColor:c,height:80}),{row:1,column:1});p.add(new qx.ui.core.Widget().set({decorator:k,backgroundColor:c}),{row:2,column:0});p.add(new qx.ui.core.Widget().set({decorator:k,backgroundColor:c}),{row:2,column:1});var q=10;n.addListener(h,function(e){n.setWidth(50+q);q=-q;}
);return p;}
,getGrid3:function(){var s=new qx.ui.container.Composite().set({decorator:k,backgroundColor:a,width:400,height:300,allowShrinkX:false,allowShrinkY:false});var r=new qx.ui.layout.Grid();r.setColumnFlex(1,2);r.setRowFlex(1,3);r.setSpacing(5);s.setLayout(r);s.add(new qx.ui.core.Widget().set({decorator:k,backgroundColor:c}),{row:0,column:0});s.add(new qx.ui.core.Widget().set({decorator:k,backgroundColor:c}),{row:0,column:1});s.add(new qx.ui.core.Widget().set({decorator:k,backgroundColor:c}),{row:1,column:0});s.add(new qx.ui.core.Widget().set({decorator:k,backgroundColor:c}),{row:1,column:1});return s;}
}});}
)();
(function(){var a="qx.ui.container.Scroll",b="pane";qx.Class.define(a,{extend:qx.ui.core.scroll.AbstractScrollArea,include:[qx.ui.core.MContentPadding],construct:function(content){qx.ui.core.scroll.AbstractScrollArea.call(this);if(content){this.add(content);}
;}
,members:{add:function(c){this.getChildControl(b).add(c);}
,remove:function(d){this.getChildControl(b).remove(d);}
,getChildren:function(){return this.getChildControl(b).getChildren();}
,_getContentPaddingTarget:function(){return this.getChildControl(b);}
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
},"toolbar-splitbutton":{},"toolbar-splitbutton/button":{alias:fS,include:fS,style:function(jI){var jJ=L;if(jI.disabled){jJ=L;}
else if(jI.hovered&&!jI.pressed&&!jI.checked){jJ=em;}
else if(jI.hovered&&(jI.pressed||jI.checked)){jJ=ew;}
else if(jI.pressed||jI.checked){jJ=eD;}
;if(jI.left){jJ+=eP;}
else if(jI.right){jJ+=eT;}
else if(jI.middle){jJ+=eT;}
;return {icon:qx.theme.simple.Image.URLS[H],decorator:jJ};}
},"toolbar-splitbutton/arrow":{alias:fS,include:fS,style:function(jK){var jL=L;if(jK.disabled){jL=L;}
else if(jK.hovered&&!jK.pressed&&!jK.checked){jL=em;}
else if(jK.hovered&&(jK.pressed||jK.checked)){jL=ew;}
else if(jK.pressed||jK.checked){jL=eD;}
;if(jK.left){jL+=eT;}
else if(jK.right){jL+=y;}
else if(jK.middle){jL+=eT;}
;return {icon:qx.theme.simple.Image.URLS[H],decorator:jL};}
},"tabview":{},"tabview/bar":{alias:o,style:function(jM){var jN=0,jQ=0,jO=0,jP=0;if(jM.barTop){jO-=1;}
else if(jM.barBottom){jN-=1;}
else if(jM.barRight){jP-=1;}
else {jQ-=1;}
;return {marginBottom:jO,marginTop:jN,marginLeft:jP,marginRight:jQ};}
},"tabview/bar/button-forward":{include:fj,alias:fj,style:function(jR){if(jR.barTop){return {marginTop:4,marginBottom:2,decorator:null};}
else if(jR.barBottom){return {marginTop:2,marginBottom:4,decorator:null};}
else if(jR.barLeft){return {marginLeft:4,marginRight:2,decorator:null};}
else {return {marginLeft:2,marginRight:4,decorator:null};}
;}
},"tabview/bar/button-backward":{include:eh,alias:eh,style:function(jS){if(jS.barTop){return {marginTop:4,marginBottom:2,decorator:null};}
else if(jS.barBottom){return {marginTop:2,marginBottom:4,decorator:null};}
else if(jS.barLeft){return {marginLeft:4,marginRight:2,decorator:null};}
else {return {marginLeft:2,marginRight:4,decorator:null};}
;}
},"tabview/pane":{style:function(jT){return {backgroundColor:h,decorator:gj,padding:10};}
},"tabview-page":eb,"tabview-page/button":{style:function(jU){var jW;if(jU.barTop||jU.barBottom){var jV=[8,16,8,13];}
else {var jV=[8,4,8,4];}
;if(jU.checked){if(jU.barTop){jW=fN;}
else if(jU.barBottom){jW=fM;}
else if(jU.barRight){jW=fI;}
else if(jU.barLeft){jW=fD;}
;}
else {for(var i=0;i<jV.length;i++ ){jV[i]+=1;}
;if(jU.barTop){jV[2]-=1;}
else if(jU.barBottom){jV[0]-=1;}
else if(jU.barRight){jV[3]-=1;}
else if(jU.barLeft){jV[1]-=1;}
;}
;return {zIndex:jU.checked?10:5,decorator:jW,textColor:jU.disabled?P:jU.checked?null:eo,padding:jV,cursor:ei};}
},"tabview-page/button/label":{alias:eu,style:function(jX){return {padding:[0,1,0,1]};}
},"tabview-page/button/icon":gp,"tabview-page/button/close-button":{alias:gx,style:function(jY){return {cursor:jY.disabled?undefined:ei,icon:qx.theme.simple.Image.URLS[U]};}
},"colorpopup":{alias:gm,include:gm,style:function(ka){return {padding:5};}
},"colorpopup/field":{style:function(kb){return {margin:2,width:14,height:14,backgroundColor:h,decorator:gw};}
},"colorpopup/selector-button":fC,"colorpopup/auto-button":fC,"colorpopup/preview-pane":eG,"colorpopup/current-preview":{style:function(kc){return {height:20,padding:4,marginLeft:4,decorator:gw,allowGrowX:true};}
},"colorpopup/selected-preview":{style:function(kd){return {height:20,padding:4,marginRight:4,decorator:gw,allowGrowX:true};}
},"colorpopup/colorselector-okbutton":{alias:fC,include:fC,style:function(ke){return {icon:k};}
},"colorpopup/colorselector-cancelbutton":{alias:fC,include:fC,style:function(kf){return {icon:eH};}
},"colorselector":eb,"colorselector/control-bar":eb,"colorselector/visual-pane":eG,"colorselector/control-pane":eb,"colorselector/preset-grid":eb,"colorselector/colorbucket":{style:function(kg){return {decorator:gw,width:16,height:16};}
},"colorselector/preset-field-set":eG,"colorselector/input-field-set":{include:eG,alias:eG,style:function(){return {paddingTop:12};}
},"colorselector/preview-field-set":{include:eG,alias:eG,style:function(){return {paddingTop:12};}
},"colorselector/hex-field-composite":eb,"colorselector/hex-field":ey,"colorselector/rgb-spinner-composite":eb,"colorselector/rgb-spinner-red":ev,"colorselector/rgb-spinner-green":ev,"colorselector/rgb-spinner-blue":ev,"colorselector/hsb-spinner-composite":eb,"colorselector/hsb-spinner-hue":ev,"colorselector/hsb-spinner-saturation":ev,"colorselector/hsb-spinner-brightness":ev,"colorselector/preview-content-old":{style:function(kh){return {decorator:gw,width:50,height:25};}
},"colorselector/preview-content-new":{style:function(ki){return {decorator:gw,backgroundColor:T,width:50,height:25};}
},"colorselector/hue-saturation-field":{style:function(kj){return {decorator:gw,margin:5};}
},"colorselector/brightness-field":{style:function(kk){return {decorator:gw,margin:[5,7]};}
},"colorselector/hue-saturation-pane":eb,"colorselector/hue-saturation-handle":eb,"colorselector/brightness-pane":eb,"colorselector/brightness-handle":eb,"app-header":{style:function(kl){return {font:fz,textColor:fs,backgroundColor:D,padding:[8,12]};}
},"app-header-label":{style:function(km){return {paddingTop:5};}
},"app-splitpane":{alias:fi,style:function(kn){return {padding:[0,10,10,10],backgroundColor:dR};}
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
(function(){var a="Use qx.dev.StackTrace.FORMAT_STACKTRACE instead",b="function",c="<span class='object'>",d="]:",e="&gt;",f="<span class='object' title='Object instance with hash code: ",g="FORMAT_STACK",h="string",k="level-",l="0",m="&lt;",n="<span class='offset'>",o="</span> ",p="}",q=":",r="qx.log.appender.Util",s="&amp;",t="&#39;",u="DIV",v="",w="]",x="'>",y="<span>",z="[",A=", ",B="</span>",C="\n",D="&quot;",E="<span class='type-key'>",F="{",G="</span>:<span class='type-",H="</span>: ",I=" ",J="]</span>: ",K="map",L="?",M="<span class='type-";qx.Bootstrap.define(r,{statics:{toHtml:function(V){var X=[];var T,W,O,Q;X.push(n,this.formatOffset(V.offset,6),o);if(V.object){var N=V.win.qx.core.ObjectRegistry.fromHashCode(V.object);if(N){X.push(f+N.$$hash+x,N.classname,z,N.$$hash,J);}
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
,escapeHTML:function(bd){return String(bd).replace(/[<>&"']/g,this.__Dm);}
,__Dm:function(bf){var be={"<":m,">":e,"&":s,"'":t,'"':D};return be[bf]||L;}
,toText:function(bg){return this.toTextArray(bg).join(I);}
,toTextArray:function(bn){var bp=[];bp.push(this.formatOffset(bn.offset,6));if(bn.object){var bh=bn.win.qx.core.ObjectRegistry.fromHashCode(bn.object);if(bh){bp.push(bh.classname+z+bh.$$hash+d);}
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
(function(){var a='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',b="Enter",c="px",d='</div>',f="longtap",g='.qxconsole .messages .user-result{background:white}',h='.qxconsole .messages .level-error{background:#FFE2D5}',i="navigationbar",j="div",k="user-command",l='<div class="command">',m="Up",n='.qxconsole .command input:focus{outline:none;}',o='.qxconsole .messages .type-key{color:#565656;font-style:italic}',p="none",q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',r='.qxconsole .messages div{padding:0px 4px;}',s='.qxconsole .messages .level-debug{background:white}',t='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',u="DIV",v='.qxconsole .messages .level-user{background:#E3EFE9}',w='<div class="qxconsole">',x="",y="D",z='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',A='.qxconsole .messages .type-string{color:black;font-weight:normal;}',B='.qxconsole .control a{text-decoration:none;color:black;}',C='<div class="messages">',D='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',E='<input type="text"/>',F="clear",G='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',H="keypress",I='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',J='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',K='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',L='.qxconsole .messages .user-command{color:blue}',M="F7",N="qx.log.appender.Console",O='.qxconsole .messages .level-info{background:#DEEDFA}',P="block",Q='.qxconsole .messages .level-warn{background:#FFF7D5}',R='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',S='.qxconsole .messages .user-error{background:#FFE2D5}',T='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',U='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',V=">>> ",W="Down",X='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';qx.Class.define(N,{statics:{__Dh:null,__ck:null,__Di:null,__Dj:null,init:function(){var Y=[J,T,B,a,r,L,g,S,s,O,Q,h,v,A,X,D,I,z,o,t,q,R,K,G,n];qx.bom.Stylesheet.createElement(Y.join(x));var bb=[w,U,C,d,l,E,d,d];var bc=document.createElement(u);bc.innerHTML=bb.join(x);var ba=bc.firstChild;document.body.appendChild(bc.firstChild);this.__Dh=ba;this.__ck=ba.childNodes[1];this.__Di=ba.childNodes[2].firstChild;this.__yK();qx.log.Logger.register(this);qx.core.ObjectRegistry.register(this);}
,dispose:function(){qx.event.Registration.removeListener(document.documentElement,H,this.__gJ,this);qx.log.Logger.unregister(this);}
,clear:function(){this.__ck.innerHTML=x;}
,process:function(bd){this.__ck.appendChild(qx.log.appender.Util.toHtml(bd));this.__Dk();}
,__Dk:function(){this.__ck.scrollTop=this.__ck.scrollHeight;}
,__fL:true,toggle:function(){if(!this.__Dh){this.init();}
else if(this.__Dh.style.display==p){this.show();}
else {this.__Dh.style.display=p;}
;}
,show:function(){if(!this.__Dh){this.init();}
else {this.__Dh.style.display=P;this.__ck.scrollTop=this.__ck.scrollHeight;}
;}
,__Dl:[],execute:function(){var bf=this.__Di.value;if(bf==x){return;}
;if(bf==F){this.clear();return;}
;var be=document.createElement(j);be.innerHTML=qx.log.appender.Util.escapeHTML(V+bf);be.className=k;this.__Dl.push(bf);this.__Dj=this.__Dl.length;this.__ck.appendChild(be);this.__Dk();try{var bg=window.eval(bf);}
catch(bh){qx.log.Logger.error(bh);}
;if(bg!==undefined){qx.log.Logger.debug(bg);}
;}
,__yK:function(e){this.__ck.style.height=(this.__Dh.clientHeight-this.__Dh.firstChild.offsetHeight-this.__Dh.lastChild.offsetHeight)+c;}
,__gJ:function(e){if(e instanceof qx.event.type.Tap||e instanceof qx.event.type.Pointer){var bk=e.getTarget();if(bk&&bk.className&&bk.className.indexOf(i)!=-1){this.toggle();}
;return;}
;var bj=e.getKeyIdentifier();if((bj==M)||(bj==y&&e.isCtrlPressed())){this.toggle();e.preventDefault();}
;if(!this.__Dh){return;}
;if(!qx.dom.Hierarchy.contains(this.__Dh,e.getTarget())){return;}
;if(bj==b&&this.__Di.value!=x){this.execute();this.__Di.value=x;}
;if(bj==m||bj==W){this.__Dj+=bj==m?-1:1;this.__Dj=Math.min(Math.max(0,this.__Dj),this.__Dl.length);var bi=this.__Dl[this.__Dj];this.__Di.value=bi||x;this.__Di.select();}
;}
},defer:function(bl){qx.event.Registration.addListener(document.documentElement,H,bl.__gJ,bl);qx.event.Registration.addListener(document.documentElement,f,bl.__gJ,bl);}
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

