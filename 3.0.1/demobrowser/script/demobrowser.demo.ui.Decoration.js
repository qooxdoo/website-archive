(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"locale":"en","locale.variant":"US","qx.allowUrlSettings":true,"qx.allowUrlVariants":true,"qx.application":"demobrowser.demo.ui.Decoration","qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.whitespace":true,"qx.theme":"qx.theme.Indigo"};
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
  packages : {"0":{"uris":["__out__:demobrowser.demo.ui.Decoration.b2f35bbc0cca.js"]}},
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

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, MMM d, y G","cldr_date_time_format_GyMMMd":"MMM d, y G","cldr_date_time_format_H":"HH","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_short_fri":"Fr","cldr_day_format_short_mon":"Mo","cldr_day_format_short_sat":"Sa","cldr_day_format_short_sun":"Su","cldr_day_format_short_thu":"Th","cldr_day_format_short_tue":"Tu","cldr_day_format_short_wed":"We","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.y","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, d. MMM y G","cldr_date_time_format_GyMMMd":"d. MMM y G","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"E, d.M.y","cldr_date_time_format_yMM":"MM.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"d. MMM y","cldr_date_time_format_yMMdd":"dd.MM.y","cldr_date_time_format_yMd":"d.M.y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_short_fri":"Fr.","cldr_day_format_short_mon":"Mo.","cldr_day_format_short_sat":"Sa.","cldr_day_format_short_sun":"So.","cldr_day_format_short_thu":"Do.","cldr_day_format_short_tue":"Di.","cldr_day_format_short_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_short_fri":"Fr.","cldr_day_stand-alone_short_mon":"Mo.","cldr_day_stand-alone_short_sat":"Sa.","cldr_day_stand-alone_short_sun":"So.","cldr_day_stand-alone_short_thu":"Do.","cldr_day_stand-alone_short_tue":"Di.","cldr_day_stand-alone_short_wed":"Mi.","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan.","cldr_month_format_abbreviated_10":"Okt.","cldr_month_format_abbreviated_11":"Nov.","cldr_month_format_abbreviated_12":"Dez.","cldr_month_format_abbreviated_2":"Feb.","cldr_month_format_abbreviated_3":"Mär.","cldr_month_format_abbreviated_4":"Apr.","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Juni","cldr_month_format_abbreviated_7":"Juli","cldr_month_format_abbreviated_8":"Aug.","cldr_month_format_abbreviated_9":"Sep.","cldr_month_format_narrow_1":"J","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"J","cldr_month_format_narrow_7":"J","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Jun","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"Januar","cldr_month_stand-alone_wide_10":"Oktober","cldr_month_stand-alone_wide_11":"November","cldr_month_stand-alone_wide_12":"Dezember","cldr_month_stand-alone_wide_2":"Februar","cldr_month_stand-alone_wide_3":"März","cldr_month_stand-alone_wide_4":"April","cldr_month_stand-alone_wide_5":"Mai","cldr_month_stand-alone_wide_6":"Juni","cldr_month_stand-alone_wide_7":"Juli","cldr_month_stand-alone_wide_8":"August","cldr_month_stand-alone_wide_9":"September","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, MMM d, y G","cldr_date_time_format_GyMMMd":"MMM d, y G","cldr_date_time_format_H":"HH","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_short_fri":"Fr","cldr_day_format_short_mon":"Mo","cldr_day_format_short_sat":"Sa","cldr_day_format_short_sun":"Su","cldr_day_format_short_thu":"Th","cldr_day_format_short_tue":"Tu","cldr_day_format_short_wed":"We","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"»","alternateQuotationStart":"«","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/y","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E d MMM y G","cldr_date_time_format_GyMMMd":"d MMM y G","cldr_date_time_format_H":"HH","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E d/M/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d/M/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_short_fri":"ve","cldr_day_format_short_mon":"lu","cldr_day_format_short_sat":"sa","cldr_day_format_short_sun":"di","cldr_day_format_short_thu":"je","cldr_day_format_short_tue":"ma","cldr_day_format_short_wed":"me","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_short_fri":"ven.","cldr_day_stand-alone_short_mon":"lun.","cldr_day_stand-alone_short_sat":"sam.","cldr_day_stand-alone_short_sun":"dim.","cldr_day_stand-alone_short_thu":"jeu.","cldr_day_stand-alone_short_tue":"mar.","cldr_day_stand-alone_short_wed":"mer.","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_narrow_1":"J","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"J","cldr_month_format_narrow_7":"J","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_abbreviated_1":"janv.","cldr_month_stand-alone_abbreviated_10":"oct.","cldr_month_stand-alone_abbreviated_11":"nov.","cldr_month_stand-alone_abbreviated_12":"déc.","cldr_month_stand-alone_abbreviated_2":"févr.","cldr_month_stand-alone_abbreviated_3":"mars","cldr_month_stand-alone_abbreviated_4":"avr.","cldr_month_stand-alone_abbreviated_5":"mai","cldr_month_stand-alone_abbreviated_6":"juin","cldr_month_stand-alone_abbreviated_7":"juil.","cldr_month_stand-alone_abbreviated_8":"août","cldr_month_stand-alone_abbreviated_9":"sept.","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"janvier","cldr_month_stand-alone_wide_10":"octobre","cldr_month_stand-alone_wide_11":"novembre","cldr_month_stand-alone_wide_12":"décembre","cldr_month_stand-alone_wide_2":"février","cldr_month_stand-alone_wide_3":"mars","cldr_month_stand-alone_wide_4":"avril","cldr_month_stand-alone_wide_5":"mai","cldr_month_stand-alone_wide_6":"juin","cldr_month_stand-alone_wide_7":"juillet","cldr_month_stand-alone_wide_8":"août","cldr_month_stand-alone_wide_9":"septembre","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser.demo"],"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/decoration/Indigo/font/JosefinSlab-SemiBold.ttf":"qx","qx/decoration/Indigo/font/JosefinSlab-SemiBold.woff":"qx","qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/checked.png":[6,6,"png","qx"],"qx/decoration/Modern/form/tooltip-error-arrow-right.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/undetermined.png":[6,2,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Simple/arrows/down-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/down-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/down.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/forward.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/left-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/left.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/rewind.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/right-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/right.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/up-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/up-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/up.gif":[7,4,"gif","qx"],"qx/decoration/Simple/checkbox/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/checked.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Simple/checkbox/undetermined.png":[6,2,"png","qx"],"qx/decoration/Simple/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Simple/colorselector/brightness-handle.gif":[35,11,"gif","qx"],"qx/decoration/Simple/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Simple/colorselector/huesaturation-handle.gif":[11,11,"gif","qx"],"qx/decoration/Simple/cursors/alias.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/copy.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/move.gif":[13,9,"gif","qx"],"qx/decoration/Simple/cursors/nodrop.gif":[20,20,"gif","qx"],"qx/decoration/Simple/menu/checkbox-invert.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/checkbox.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/radiobutton-invert.gif":[16,5,"gif","qx"],"qx/decoration/Simple/menu/radiobutton.gif":[16,5,"gif","qx"],"qx/decoration/Simple/splitpane/knob-horizontal.png":[1,8,"png","qx"],"qx/decoration/Simple/splitpane/knob-vertical.png":[8,1,"png","qx"],"qx/decoration/Simple/table/ascending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/ascending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/boolean-false.png":[11,11,"png","qx"],"qx/decoration/Simple/table/boolean-true.png":[11,11,"png","qx"],"qx/decoration/Simple/table/descending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/descending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/select-column-order.png":[10,9,"png","qx"],"qx/decoration/Simple/tabview/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/window/close-white.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/maximize-white.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/maximize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize-white.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/restore-white.gif":[8,9,"gif","qx"],"qx/decoration/Simple/window/restore.gif":[8,9,"gif","qx"],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-44],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-22],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{"C":{},"de":{},"de_DE":{},"en":{},"en_US":{},"fr":{},"fr_FR":{}}};
(function(){var b=".prototype",c="function",d="Boolean",e="Error",f="Object.keys requires an object as argument.",g="constructor",h="warn",j="default",k="hasOwnProperty",m="string",n="Object",o="toLocaleString",p="error",q="toString",r="qx.debug",s="()",t="RegExp",u="String",v="info",w="BROKEN_IE",x="isPrototypeOf",y="Date",z="",A="qx.Bootstrap",B="Function",C="]",D="Cannot call super class. Method is not derived: ",E="Array",F="[Class ",G="valueOf",H="Number",I="Class",J="debug",K="ES5",L=".",M="propertyIsEnumerable",N="object";if(!window.qx){window.qx={};}
;qx.Bootstrap={genericToString:function(){return F+this.classname+C;}
,createNamespace:function(name,O){var R=name.split(L);var Q=R[0];var parent=this.__a&&this.__a[Q]?this.__a:window;for(var i=0,P=R.length-1;i<P;i++ ,Q=R[i]){if(!parent[Q]){parent=parent[Q]={};}
else {parent=parent[Q];}
;}
;parent[Q]=O;return Q;}
,setDisplayName:function(T,S,name){T.displayName=S+L+name+s;}
,setDisplayNames:function(V,U){for(var name in V){var W=V[name];if(W instanceof Function){W.displayName=U+L+name+s;}
;}
;}
,base:function(X,Y){if(qx.core.Environment.get(r)){if(!qx.Bootstrap.isFunction(X.callee.base)){throw new Error(D+X.callee.displayName);}
;}
;if(arguments.length===1){return X.callee.base.call(this);}
else {return X.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}
;}
,define:function(name,bk){if(!bk){var bk={statics:{}};}
;var bg;var bc=null;qx.Bootstrap.setDisplayNames(bk.statics,name);if(bk.members||bk.extend){qx.Bootstrap.setDisplayNames(bk.members,name+b);bg=bk.construct||new Function;if(bk.extend){this.extendClass(bg,bg,bk.extend,name,be);}
;var bb=bk.statics||{};for(var i=0,bd=qx.Bootstrap.keys(bb),l=bd.length;i<l;i++ ){var ba=bd[i];bg[ba]=bb[ba];}
;bc=bg.prototype;bc.base=qx.Bootstrap.base;var bi=bk.members||{};var ba,bh;for(var i=0,bd=qx.Bootstrap.keys(bi),l=bd.length;i<l;i++ ){ba=bd[i];bh=bi[ba];if(bh instanceof Function&&bc[ba]){bh.base=bc[ba];}
;bc[ba]=bh;}
;}
else {bg=bk.statics||{};if(qx.Bootstrap.$$registry&&qx.Bootstrap.$$registry[name]){var bj=qx.Bootstrap.$$registry[name];if(this.keys(bg).length!==0){if(bk.defer){bk.defer(bg,bc);}
;for(var bf in bg){bj[bf]=bg[bf];}
;return;}
;}
;}
;bg.$$type=I;if(!bg.hasOwnProperty(q)){bg.toString=this.genericToString;}
;var be=name?this.createNamespace(name,bg):z;bg.name=bg.classname=name;bg.basename=be;if(bk.defer){bk.defer(bg,bc);}
;qx.Bootstrap.$$registry[name]=bg;return bg;}
};qx.Bootstrap.define(A,{statics:{__a:null,LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var bl=true;if(qx.$$environment&&qx.$$environment[r]===false){bl=false;}
;return bl;}
)(),getEnvironmentSetting:function(bm){if(qx.$$environment){return qx.$$environment[bm];}
;}
,setEnvironmentSetting:function(bn,bo){if(!qx.$$environment){qx.$$environment={};}
;if(qx.$$environment[bn]===undefined){qx.$$environment[bn]=bo;}
;}
,createNamespace:qx.Bootstrap.createNamespace,setRoot:function(bp){this.__a=bp;}
,base:qx.Bootstrap.base,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(clazz,construct,superClass,name,basename){var superproto=superClass.prototype;var helper=new Function();helper.prototype=superproto;var proto=new helper();clazz.prototype=proto;proto.name=proto.classname=name;proto.basename=basename;construct.base=superClass;clazz.superclass=superClass;construct.self=clazz.constructor=proto.constructor=clazz;}
,getByName:function(name){return qx.Bootstrap.$$registry[name];}
,$$registry:{},objectGetLength:function(bq){return qx.Bootstrap.keys(bq).length;}
,objectMergeWith:function(bs,br,bu){if(bu===undefined){bu=true;}
;for(var bt in br){if(bu||bs[bt]===undefined){bs[bt]=br[bt];}
;}
;return bs;}
,__b:[x,k,o,q,G,M,g],keys:({"ES5":Object.keys,"BROKEN_IE":function(bv){if(bv===null||(typeof bv!=N&&typeof bv!=c)){throw new TypeError(f);}
;var bw=[];var by=Object.prototype.hasOwnProperty;for(var bz in bv){if(by.call(bv,bz)){bw.push(bz);}
;}
;var bx=qx.Bootstrap.__b;for(var i=0,a=bx,l=a.length;i<l;i++ ){if(by.call(bv,a[i])){bw.push(a[i]);}
;}
;return bw;}
,"default":function(bA){if(bA===null||(typeof bA!=N&&typeof bA!=c)){throw new TypeError(f);}
;var bB=[];var bC=Object.prototype.hasOwnProperty;for(var bD in bA){if(bC.call(bA,bD)){bB.push(bD);}
;}
;return bB;}
})[typeof (Object.keys)==c?K:(function(){for(var bE in {toString:1}){return bE;}
;}
)()!==q?w:j],__c:{"[object String]":u,"[object Array]":E,"[object Object]":n,"[object RegExp]":t,"[object Number]":H,"[object Boolean]":d,"[object Date]":y,"[object Function]":B,"[object Error]":e},bind:function(bG,self,bH){var bF=Array.prototype.slice.call(arguments,2,arguments.length);return function(){var bI=Array.prototype.slice.call(arguments,0,arguments.length);return bG.apply(self,bF.concat(bI));}
;}
,firstUp:function(bJ){return bJ.charAt(0).toUpperCase()+bJ.substr(1);}
,firstLow:function(bK){return bK.charAt(0).toLowerCase()+bK.substr(1);}
,getClass:function(bM){var bL=Object.prototype.toString.call(bM);return (qx.Bootstrap.__c[bL]||bL.slice(8,-1));}
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
(function(){var a="qx.bom.client.Xml.getSelectSingleNode",b="qx.bom.client.Stylesheet.getInsertRule",c="qx.bom.client.Html.getDataset",d="qx.bom.client.PhoneGap.getPhoneGap",e="qx.bom.client.EcmaScript.getArrayReduce",f="qx.core.Environment for a list of predefined keys.",g='] found, and no default ("default") given',h="qx.bom.client.Html.getAudioAif",j="qx.bom.client.CssTransform.get3D",k="qx.bom.client.EcmaScript.getArrayLastIndexOf",l=" is not a valid key. Please see the API-doc of ",m=' type)',n="qx.bom.client.EcmaScript.getArrayForEach",o="qx.bom.client.Xml.getAttributeNS",p="qx.bom.client.Stylesheet.getRemoveImport",q="qx.bom.client.Css.getUserModify",r="qx.bom.client.Css.getBoxShadow",s="qx.bom.client.Html.getXul",t="qx.bom.client.Plugin.getWindowsMedia",u=":",v="qx.blankpage",w="qx.bom.client.Html.getVideo",x="qx.bom.client.Device.getName",y="qx.bom.client.Event.getTouch",z="qx.optimization.strings",A="qx.debug.property.level",B="qx.bom.client.EcmaScript.getArrayFilter",C="qx.bom.client.EcmaScript.getStringTrim",D="qx.optimization.variables",E="qx.bom.client.EcmaScript.getStackTrace",F="qx.bom.client.EcmaScript.getDateNow",G="qx.bom.client.EcmaScript.getArrayEvery",H="qx.bom.client.Xml.getImplementation",I="qx.bom.client.Html.getConsole",J="qx.bom.client.Engine.getVersion",K="qx.bom.client.Device.getType",L="qx.bom.client.Plugin.getQuicktime",M="qx.bom.client.Html.getNaturalDimensions",N="qx.bom.client.Xml.getSelectNodes",O="qx.bom.client.Xml.getElementsByTagNameNS",P="qx.nativeScrollBars",Q="qx.bom.client.Html.getDataUrl",R="qx.bom.client.Flash.isAvailable",S="qx.bom.client.Html.getCanvas",T="qx.dyntheme",U="qx.bom.client.Device.getPixelRatio",V="qx.bom.client.Css.getBoxModel",W="qx.bom.client.Plugin.getSilverlight",X="qx/static/blank.html",Y="qx.bom.client.EcmaScript.getArrayMap",ej="qx.bom.client.Css.getUserSelect",ee="qx.bom.client.Css.getRadialGradient",ek="module.property",eg="qx.bom.client.Plugin.getWindowsMediaVersion",eh="qx.bom.client.Stylesheet.getCreateStyleSheet",ed='No match for variant "',ei="qx.bom.client.Locale.getLocale",eo="module.events",ep="qx.bom.client.Plugin.getSkype",eq="module.databinding",er="qx.bom.client.Html.getFileReader",el="qx.bom.client.Css.getBorderImage",em="qx.bom.client.Stylesheet.getDeleteRule",ef="qx.bom.client.EcmaScript.getErrorToString",en="qx.bom.client.Plugin.getDivXVersion",ev="qx.bom.client.Scroll.scrollBarOverlayed",eX="qx.bom.client.Plugin.getPdfVersion",ew="qx.bom.client.Xml.getCreateNode",ex="qx.bom.client.Css.getAlphaImageLoaderNeeded",es="qx.bom.client.Css.getLinearGradient",et="qx.bom.client.Transport.getXmlHttpRequest",fY="qx.bom.client.Css.getBorderImageSyntax",eu="qx.bom.client.Html.getClassList",ey="qx.bom.client.Event.getHelp",ez="qx.optimization.comments",eA="qx.bom.client.Locale.getVariant",eF="qx.bom.client.Css.getBoxSizing",eG="qx.bom.client.OperatingSystem.getName",eH="module.logger",eB="qx.mobile.emulatetouch",eC="qx.bom.client.Html.getAudioWav",eD="qx.bom.client.Browser.getName",eE="qx.bom.client.Css.getInlineBlock",eL="qx.bom.client.Plugin.getPdf",eM="please use 'css.pointerevents' instead.",eN="qx.dynlocale",eO="qx.bom.client.Device.getTouch",eI="The environment key 'event.pointer' is deprecated, ",eJ="qx.emulatemouse",ga='" (',eK="qx.bom.client.Html.getAudio",eS="qx.core.Environment",eT="qx.bom.client.EcmaScript.getFunctionBind",ge="qx.bom.client.CssTransform.getSupport",eU="qx.bom.client.Html.getTextContent",eP="qx.bom.client.Css.getPlaceholder",eQ="qx.bom.client.Css.getFloat",gc="default",eR=' in variants [',eV="false",eW="qx.bom.client.Css.getFilterGradient",fj="qx.bom.client.Html.getHistoryState",fi="qxenv",fh="qx.bom.client.Html.getSessionStorage",fn="qx.bom.client.Html.getAudioAu",fm="qx.bom.client.Css.getOpacity",fl="qx.bom.client.Css.getFilterTextShadow",fk="qx.bom.client.Html.getVml",fc="qx.bom.client.Transport.getMaxConcurrentRequestCount",fb="qx.bom.client.Event.getHashChange",fa="qx.bom.client.Css.getRgba",eY="qx.bom.client.Css.getBorderRadius",fg="qx.bom.client.EcmaScript.getArraySome",ff="qx.bom.client.Transport.getSsl",fe="qx.bom.client.Html.getWebWorker",fd="qx.bom.client.Json.getJson",fu="qx.bom.client.Browser.getQuirksMode",ft="qx.debug.dispose",fs="qx.bom.client.Css.getTextOverflow",fr="qx.bom.client.EcmaScript.getArrayIndexOf",fy="qx.bom.client.Xml.getQualifiedItem",fx="qx.bom.client.Html.getVideoOgg",fw="&",fv="qx.bom.client.EcmaScript.getArrayReduceRight",fq="qx.bom.client.Engine.getMsPointer",fp="qx.bom.client.Browser.getDocumentMode",fo="qx.allowUrlVariants",fJ="qx.debug.ui.queue",fI="|",fH="qx.bom.client.Html.getContains",fN="qx.bom.client.Plugin.getActiveX",fM=".",fL="qx.bom.client.Xml.getDomProperties",fK="qx.bom.client.CssAnimation.getSupport",fC="qx.debug.databinding",fB="qx.optimization.basecalls",fA="qx.bom.client.Browser.getVersion",fz="qx.bom.client.Css.getUserSelectNone",fG="true",fF="qx.bom.client.Html.getSvg",fE="qx.bom.client.EcmaScript.getObjectKeys",fD="qx.bom.client.Plugin.getDivX",fT="qx.bom.client.Runtime.getName",fS="qx.bom.client.Html.getLocalStorage",fR="css.pointerevents",fQ="qx.allowUrlSettings",fX="qx.bom.client.Flash.getStrictSecurityModel",fW="qx.aspects",fV="qx.debug",fU="qx.bom.client.Css.getPointerEvents",fP="qx.dynamicmousewheel",fO="qx.bom.client.Html.getAudioMp3",dO="qx.bom.client.Engine.getName",dN="qx.bom.client.Html.getUserDataStorage",gf="qx.bom.client.Plugin.getGears",dL="qx.bom.client.Plugin.getQuicktimeVersion",dM="qx.bom.client.Html.getAudioOgg",dK="event.pointer",gd="qx.bom.client.Css.getTextShadow",dI="qx.bom.client.Plugin.getSilverlightVersion",dJ="qx.bom.client.Html.getCompareDocumentPosition",dH="qx.bom.client.Flash.getExpressInstall",gb="qx.bom.client.Html.getSelection",dF="qx.bom.client.OperatingSystem.getVersion",dG="qx.bom.client.Html.getXPath",dE="qx.bom.client.Html.getGeoLocation",dX="qx.optimization.privates",dY="qx.bom.client.Scroll.getNativeScroll",dV="qx.bom.client.Css.getAppearance",dW="qx.bom.client.CssTransition.getSupport",dT="qx.bom.client.Stylesheet.getAddImport",dU="qx.optimization.variants",dS="qx.bom.client.Html.getVideoWebm",dD="qx.bom.client.Flash.getVersion",dQ="qx.bom.client.CssAnimation.getRequestAnimationFrame",dR="qx.bom.client.Css.getLegacyWebkitGradient",dP="qx.bom.client.PhoneGap.getNotification",ec="qx.bom.client.Html.getVideoH264",ea="qx.bom.client.Xml.getCreateElementNS",eb="qx.bom.client.Xml.getDomParser";qx.Bootstrap.define(eS,{statics:{_checks:{},_asyncChecks:{},__d:{},_checksMap:{"engine.version":J,"engine.name":dO,"browser.name":eD,"browser.version":fA,"browser.documentmode":fp,"browser.quirksmode":fu,"runtime.name":fT,"device.name":x,"device.type":K,"device.pixelRatio":U,"device.touch":eO,"locale":ei,"locale.variant":eA,"os.name":eG,"os.version":dF,"os.scrollBarOverlayed":ev,"plugin.gears":gf,"plugin.activex":fN,"plugin.skype":ep,"plugin.quicktime":L,"plugin.quicktime.version":dL,"plugin.windowsmedia":t,"plugin.windowsmedia.version":eg,"plugin.divx":fD,"plugin.divx.version":en,"plugin.silverlight":W,"plugin.silverlight.version":dI,"plugin.flash":R,"plugin.flash.version":dD,"plugin.flash.express":dH,"plugin.flash.strictsecurity":fX,"plugin.pdf":eL,"plugin.pdf.version":eX,"io.maxrequests":fc,"io.ssl":ff,"io.xhr":et,"event.touch":y,"event.mspointer":fq,"event.help":ey,"event.hashchange":fb,"ecmascript.error.stacktrace":E,"ecmascript.array.indexof":fr,"ecmascript.array.lastindexof":k,"ecmascript.array.foreach":n,"ecmascript.array.filter":B,"ecmascript.array.map":Y,"ecmascript.array.some":fg,"ecmascript.array.every":G,"ecmascript.array.reduce":e,"ecmascript.array.reduceright":fv,"ecmascript.function.bind":eT,"ecmascript.object.keys":fE,"ecmascript.date.now":F,"ecmascript.error.toString":ef,"ecmascript.string.trim":C,"html.webworker":fe,"html.filereader":er,"html.geolocation":dE,"html.audio":eK,"html.audio.ogg":dM,"html.audio.mp3":fO,"html.audio.wav":eC,"html.audio.au":fn,"html.audio.aif":h,"html.video":w,"html.video.ogg":fx,"html.video.h264":ec,"html.video.webm":dS,"html.storage.local":fS,"html.storage.session":fh,"html.storage.userdata":dN,"html.classlist":eu,"html.xpath":dG,"html.xul":s,"html.canvas":S,"html.svg":fF,"html.vml":fk,"html.dataset":c,"html.dataurl":Q,"html.console":I,"html.stylesheet.createstylesheet":eh,"html.stylesheet.insertrule":b,"html.stylesheet.deleterule":em,"html.stylesheet.addimport":dT,"html.stylesheet.removeimport":p,"html.element.contains":fH,"html.element.compareDocumentPosition":dJ,"html.element.textcontent":eU,"html.image.naturaldimensions":M,"html.history.state":fj,"html.selection":gb,"json":fd,"css.textoverflow":fs,"css.placeholder":eP,"css.borderradius":eY,"css.borderimage":el,"css.borderimage.standardsyntax":fY,"css.boxshadow":r,"css.gradient.linear":es,"css.gradient.filter":eW,"css.gradient.radial":ee,"css.gradient.legacywebkit":dR,"css.boxmodel":V,"css.rgba":fa,"css.userselect":ej,"css.userselect.none":fz,"css.usermodify":q,"css.appearance":dV,"css.float":eQ,"css.boxsizing":eF,"css.animation":fK,"css.animation.requestframe":dQ,"css.transform":ge,"css.transform.3d":j,"css.transition":dW,"css.inlineblock":eE,"css.opacity":fm,"css.textShadow":gd,"css.textShadow.filter":fl,"css.alphaimageloaderneeded":ex,"css.pointerevents":fU,"phonegap":d,"phonegap.notification":dP,"xml.implementation":H,"xml.domparser":eb,"xml.selectsinglenode":a,"xml.selectnodes":N,"xml.getelementsbytagnamens":O,"xml.domproperties":fL,"xml.attributens":o,"xml.createnode":ew,"xml.getqualifieditem":fy,"xml.createelementns":ea,"qx.mobile.nativescroll":dY},get:function(gj){if(qx.Bootstrap.DEBUG){if(gj===dK){gj=fR;qx.Bootstrap.warn(eI+eM);}
;}
;if(this.__d[gj]!=undefined){return this.__d[gj];}
;var gl=this._checks[gj];if(gl){var gh=gl();this.__d[gj]=gh;return gh;}
;var gg=this._getClassNameFromEnvKey(gj);if(gg[0]!=undefined){var gk=gg[0];var gi=gg[1];var gh=gk[gi]();this.__d[gj]=gh;return gh;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(gj+l+f);qx.Bootstrap.trace(this);}
;}
,_getClassNameFromEnvKey:function(gq){var gs=this._checksMap;if(gs[gq]!=undefined){var gn=gs[gq];var gr=gn.lastIndexOf(fM);if(gr>-1){var gp=gn.slice(0,gr);var gm=gn.slice(gr+1);var go=qx.Bootstrap.getByName(gp);if(go!=undefined){return [go,gm];}
;}
;}
;return [undefined,undefined];}
,getAsync:function(gu,gx,self){var gy=this;if(this.__d[gu]!=undefined){window.setTimeout(function(){gx.call(self,gy.__d[gu]);}
,0);return;}
;var gv=this._asyncChecks[gu];if(gv){gv(function(gA){gy.__d[gu]=gA;gx.call(self,gA);}
);return;}
;var gt=this._getClassNameFromEnvKey(gu);if(gt[0]!=undefined){var gw=gt[0];var gz=gt[1];gw[gz](function(gB){gy.__d[gu]=gB;gx.call(self,gB);}
);return;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(gu+l+f);qx.Bootstrap.trace(this);}
;}
,select:function(gD,gC){return this.__e(this.get(gD),gC);}
,selectAsync:function(gF,gE,self){this.getAsync(gF,function(gG){var gH=this.__e(gF,gE);gH.call(self,gG);}
,this);}
,__e:function(gL,gK){var gJ=gK[gL];if(gK.hasOwnProperty(gL)){return gJ;}
;for(var gM in gK){if(gM.indexOf(fI)!=-1){var gI=gM.split(fI);for(var i=0;i<gI.length;i++ ){if(gI[i]==gL){return gK[gM];}
;}
;}
;}
;if(gK[gc]!==undefined){return gK[gc];}
;if(qx.Bootstrap.DEBUG){throw new Error(ed+gL+ga+(typeof gL)+m+eR+qx.Bootstrap.keys(gK)+g);}
;}
,filter:function(gN){var gP=[];for(var gO in gN){if(this.get(gO)){gP.push(gN[gO]);}
;}
;return gP;}
,invalidateCacheKey:function(gQ){delete this.__d[gQ];}
,add:function(gS,gR){if(this._checks[gS]==undefined){if(gR instanceof Function){this._checks[gS]=gR;}
else {this._checks[gS]=this.__h(gR);}
;}
;}
,addAsync:function(gU,gT){if(this._checks[gU]==undefined){this._asyncChecks[gU]=gT;}
;}
,getChecks:function(){return this._checks;}
,getAsyncChecks:function(){return this._asyncChecks;}
,_initDefaultQxValues:function(){this.add(fG,function(){return true;}
);this.add(fQ,function(){return false;}
);this.add(fo,function(){return false;}
);this.add(A,function(){return 0;}
);this.add(fV,function(){return true;}
);this.add(fJ,function(){return true;}
);this.add(fW,function(){return false;}
);this.add(eN,function(){return true;}
);this.add(T,function(){return true;}
);this.add(eB,function(){return false;}
);this.add(eJ,function(){return false;}
);this.add(v,function(){return X;}
);this.add(fP,function(){return true;}
);this.add(fC,function(){return false;}
);this.add(ft,function(){return false;}
);this.add(fB,function(){return false;}
);this.add(ez,function(){return false;}
);this.add(dX,function(){return false;}
);this.add(z,function(){return false;}
);this.add(D,function(){return false;}
);this.add(dU,function(){return false;}
);this.add(eq,function(){return true;}
);this.add(eH,function(){return true;}
);this.add(ek,function(){return true;}
);this.add(eo,function(){return true;}
);this.add(P,function(){return false;}
);}
,__f:function(){if(qx&&qx.$$environment){for(var gV in qx.$$environment){var gW=qx.$$environment[gV];this._checks[gV]=this.__h(gW);}
;}
;}
,__g:function(){if(window.document&&window.document.location){var gX=window.document.location.search.slice(1).split(fw);for(var i=0;i<gX.length;i++ ){var hb=gX[i].split(u);if(hb.length!=3||hb[0]!=fi){continue;}
;var gY=hb[1];var ha=decodeURIComponent(hb[2]);if(ha==fG){ha=true;}
else if(ha==eV){ha=false;}
else if(/^(\d|\.)+$/.test(ha)){ha=parseFloat(ha);}
;this._checks[gY]=this.__h(ha);}
;}
;}
,__h:function(hc){return qx.Bootstrap.bind(function(hd){return hd;}
,null,hc);}
},defer:function(he){he._initDefaultQxValues();he.__f();if(he.get(fQ)===true){he.__g();}
;}
});}
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
(function(){var a="qx.lang.normalize.Function",b="ecmascript.function.bind",c="function",d="Function.prototype.bind called on incompatible ";qx.Bootstrap.define(a,{defer:function(){if(!qx.core.Environment.get(b)){var e=Array.prototype.slice;Function.prototype.bind=function(i){var h=this;if(typeof h!=c){throw new TypeError(d+h);}
;var f=e.call(arguments,1);var g=function(){if(this instanceof g){var F=function(){}
;F.prototype=h.prototype;var self=new F;var j=h.apply(self,f.concat(e.call(arguments)));if(Object(j)===j){return j;}
;return self;}
else {return h.apply(i,f.concat(e.call(arguments)));}
;}
;return g;}
;}
;}
});}
)();
(function(){var a="function",b="ecmascript.array.lastindexof",c="ecmascript.array.map",d="ecmascript.array.filter",e="Length is 0 and no second argument given",f="qx.lang.normalize.Array",g="ecmascript.array.indexof",h="First argument is not callable",j="ecmascript.array.reduce",k="ecmascript.array.foreach",m="ecmascript.array.reduceright",n="ecmascript.array.some",o="ecmascript.array.every";qx.Bootstrap.define(f,{defer:function(){if(!qx.core.Environment.get(g)){Array.prototype.indexOf=function(p,q){if(q==null){q=0;}
else if(q<0){q=Math.max(0,this.length+q);}
;for(var i=q;i<this.length;i++ ){if(this[i]===p){return i;}
;}
;return -1;}
;}
;if(!qx.core.Environment.get(b)){Array.prototype.lastIndexOf=function(r,s){if(s==null){s=this.length-1;}
else if(s<0){s=Math.max(0,this.length+s);}
;for(var i=s;i>=0;i-- ){if(this[i]===r){return i;}
;}
;return -1;}
;}
;if(!qx.core.Environment.get(k)){Array.prototype.forEach=function(t,u){var l=this.length;for(var i=0;i<l;i++ ){var v=this[i];if(v!==undefined){t.call(u||window,v,i,this);}
;}
;}
;}
;if(!qx.core.Environment.get(d)){Array.prototype.filter=function(z,w){var x=[];var l=this.length;for(var i=0;i<l;i++ ){var y=this[i];if(y!==undefined){if(z.call(w||window,y,i,this)){x.push(this[i]);}
;}
;}
;return x;}
;}
;if(!qx.core.Environment.get(c)){Array.prototype.map=function(D,A){var B=[];var l=this.length;for(var i=0;i<l;i++ ){var C=this[i];if(C!==undefined){B[i]=D.call(A||window,C,i,this);}
;}
;return B;}
;}
;if(!qx.core.Environment.get(n)){Array.prototype.some=function(E,F){var l=this.length;for(var i=0;i<l;i++ ){var G=this[i];if(G!==undefined){if(E.call(F||window,G,i,this)){return true;}
;}
;}
;return false;}
;}
;if(!qx.core.Environment.get(o)){Array.prototype.every=function(H,I){var l=this.length;for(var i=0;i<l;i++ ){var J=this[i];if(J!==undefined){if(!H.call(I||window,J,i,this)){return false;}
;}
;}
;return true;}
;}
;if(!qx.core.Environment.get(j)){Array.prototype.reduce=function(K,L){if(typeof K!==a){throw new TypeError(h);}
;if(L===undefined&&this.length===0){throw new TypeError(e);}
;var M=L===undefined?this[0]:L;for(var i=L===undefined?1:0;i<this.length;i++ ){if(i in this){M=K.call(undefined,M,this[i],i,this);}
;}
;return M;}
;}
;if(!qx.core.Environment.get(m)){Array.prototype.reduceRight=function(N,O){if(typeof N!==a){throw new TypeError(h);}
;if(O===undefined&&this.length===0){throw new TypeError(e);}
;var P=O===undefined?this[this.length-1]:O;for(var i=O===undefined?this.length-2:this.length-1;i>=0;i-- ){if(i in this){P=N.call(undefined,P,this[i],i,this);}
;}
;return P;}
;}
;}
});}
)();
(function(){var b=".prototype",c='Conflict between mixin "',d="function",e="'is undefined/null!",f="constructor",g="' in mixin '",h='The configuration key "',j='" and "',k='" is not allowed!',m='" in member "',n='"! The type of the key must be "',o="Array",p="RegExp",q="members",r='" in property "',s="properties",t="statics",u="qx.Mixin",v="events",w="'is not a mixin!",x='Invalid type of key "',y='"!',z="]",A='"! The value needs to be a map!',B="Mixin",C="[Mixin ",D='" in mixin "',E="Includes of mixins must be mixins. The include number '",F="destruct",G='Invalid key "',H="Date",I='"! The value is undefined/null!',J="qx.debug",K="object";qx.Bootstrap.define(u,{statics:{define:function(name,M){if(M){if(M.include&&!(qx.Bootstrap.getClass(M.include)===o)){M.include=[M.include];}
;if(qx.core.Environment.get(J)){this.__j(name,M);}
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
,$$registry:{},__i:qx.core.Environment.select(J,{"true":{"include":K,"statics":K,"members":K,"properties":K,"events":K,"destruct":d,"construct":d},"default":null}),__j:qx.core.Environment.select(J,{"true":function(name,bf){var be=this.__i;for(var bd in bf){if(!be[bd]){throw new Error(h+bd+D+name+k);}
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
(function(){var a="qx.core.Aspect",b="before",c="*",d="static";qx.Bootstrap.define(a,{statics:{__k:[],wrap:function(h,l,j){var m=[];var e=[];var k=this.__k;var g;for(var i=0;i<k.length;i++ ){g=k[i];if((g.type==null||j==g.type||g.type==c)&&(g.name==null||h.match(g.name))){g.pos==-1?m.push(g.fcn):e.push(g.fcn);}
;}
;if(m.length===0&&e.length===0){return l;}
;var f=function(){for(var i=0;i<m.length;i++ ){m[i].call(this,h,l,j,arguments);}
;var n=l.apply(this,arguments);for(var i=0;i<e.length;i++ ){e[i].call(this,h,l,j,arguments,n);}
;return n;}
;if(j!==d){f.self=l.self;f.base=l.base;}
;l.wrapper=f;f.original=l;return f;}
,addAdvice:function(q,o,p,name){this.__k.push({fcn:q,pos:o===b?-1:1,type:p,name:name});}
}});}
)();
(function(){var a='',b="ecmascript.string.trim",c="qx.lang.normalize.String";qx.Bootstrap.define(c,{defer:function(){if(!qx.core.Environment.get(b)){String.prototype.trim=function(d){return this.replace(/^\s+|\s+$/g,a);}
;}
;}
});}
)();
(function(){var a="ecmascript.object.keys",b="qx.lang.normalize.Object";qx.Bootstrap.define(b,{defer:function(){if(!qx.core.Environment.get(a)){Object.keys=qx.Bootstrap.keys;}
;}
});}
)();
(function(){var b="function",c="Boolean",d="'! The value is undefined/null!",e="RegExp",f='The configuration key "',g='The property "',h='" is not allowed!',j="string",k='Implementation of method "',m='"',n="Array",o='" is missing in class "',p="' in interface '",q="members",r="number",s="properties",t="statics",u="qx.debug",v="Invalid key '",w='The event "',x="events",y='Invalid type of key "',z='"!',A="]",B='" in class "',C="Interface",D='"! The value needs to be a map!',E='" in interface "',F="' is undefined/null!",G='"! The type of the key must be "',H='Implementation of member "',I="Extends of interfaces must be interfaces. The extend number '",J='" is not supported by Class "',K="' is not an interface!",L="qx.Interface",M='" required by interface "',N='Invalid key "',O="Date",P='"! Static constants must be all uppercase.',Q="toggle",R="boolean",S="is",T="[Interface ",U='"! Static constants must be all of a primitive type.',V="object";qx.Bootstrap.define(L,{statics:{define:function(name,X){if(X){if(X.extend&&!(qx.Bootstrap.getClass(X.extend)===n)){X.extend=[X.extend];}
;if(qx.core.Environment.get(u)){this.__j(name,X);}
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
,__l:function(be,bf,bb,bi,bg){var bc=bb.$$members;if(bc){for(var bh in bc){if(qx.Bootstrap.isFunction(bc[bh])){var bk=this.__m(bf,bh);var bd=bk||qx.Bootstrap.isFunction(be[bh]);if(!bd){if(bg){throw new Error(k+bh+o+bf.classname+M+bb.name+m);}
else {return false;}
;}
;var bj=bi===true&&!bk&&!qx.util.OOUtil.hasInterface(bf,bb);if(bj){be[bh]=this.__p(bb,be[bh],bh,bc[bh]);}
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
,__m:function(bo,bl){var bq=bl.match(/^(is|toggle|get|set|reset)(.*)$/);if(!bq){return false;}
;var bn=qx.Bootstrap.firstLow(bq[2]);var bp=qx.util.OOUtil.getPropertyDefinition(bo,bn);if(!bp){return false;}
;var bm=bq[0]==S||bq[0]==Q;if(bm){return qx.util.OOUtil.getPropertyDefinition(bo,bn).check==c;}
;return true;}
,__n:function(bu,br,bs){if(br.$$properties){for(var bt in br.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(bu,bt)){if(bs){throw new Error(g+bt+J+bu.classname+z);}
else {return false;}
;}
;}
;}
;if(!bs){return true;}
;}
,__o:function(by,bv,bw){if(bv.$$events){for(var bx in bv.$$events){if(!qx.util.OOUtil.supportsEvent(by,bx)){if(bw){throw new Error(w+bx+J+by.classname+z);}
else {return false;}
;}
;}
;}
;if(!bw){return true;}
;}
,assertObject:function(bB,bz){var bC=bB.constructor;this.__l(bB,bC,bz,false,true);this.__n(bC,bz,true);this.__o(bC,bz,true);var bA=bz.$$extends;if(bA){for(var i=0,l=bA.length;i<l;i++ ){this.assertObject(bB,bA[i]);}
;}
;}
,assert:function(bF,bD,bG){this.__l(bF.prototype,bF,bD,bG,true);this.__n(bF,bD,true);this.__o(bF,bD,true);var bE=bD.$$extends;if(bE){for(var i=0,l=bE.length;i<l;i++ ){this.assert(bF,bE[i],bG);}
;}
;}
,objectImplements:function(bJ,bH){var bK=bJ.constructor;if(!this.__l(bJ,bK,bH)||!this.__n(bK,bH)||!this.__o(bK,bH)){return false;}
;var bI=bH.$$extends;if(bI){for(var i=0,l=bI.length;i<l;i++ ){if(!this.objectImplements(bJ,bI[i])){return false;}
;}
;}
;return true;}
,classImplements:function(bN,bL){if(!this.__l(bN.prototype,bN,bL)||!this.__n(bN,bL)||!this.__o(bN,bL)){return false;}
;var bM=bL.$$extends;if(bM){for(var i=0,l=bM.length;i<l;i++ ){if(!this.has(bN,bM[i])){return false;}
;}
;}
;return true;}
,genericToString:function(){return T+this.name+A;}
,$$registry:{},__p:qx.core.Environment.select(u,{"true":function(bR,bP,bS,bO){function bQ(){bO.apply(this,arguments);return bP.apply(this,arguments);}
;bP.wrapper=bQ;return bQ;}
,"default":function(bV,bU,bW,bT){}
}),__i:qx.core.Environment.select(u,{"true":{"extend":V,"statics":V,"members":V,"properties":V,"events":V},"default":null}),__j:qx.core.Environment.select(u,{"true":function(name,cb){if(qx.core.Environment.get(u)){var ca=this.__i;for(var bY in cb){if(ca[bY]===undefined){throw new Error(f+bY+B+name+h);}
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
(function(){var a="",b="qx.lang.normalize.Error",c=": ",d="Error",e="ecmascript.error.toString";qx.Bootstrap.define(b,{defer:function(){if(!qx.core.Environment.get(e)){Error.prototype.toString=function(){var name=this.name||d;var f=this.message||a;if(name===a&&f===a){return d;}
;if(name===a){return f;}
;if(f===a){return name;}
;return name+c+f;}
;}
;}
});}
)();
(function(){var a="qx.lang.normalize.Date",b="ecmascript.date.now";qx.Bootstrap.define(a,{defer:function(){if(!qx.core.Environment.get(b)){Date.now=function(){return +new Date();}
;}
;}
});}
)();
(function(){var b='!==inherit){',c='var msg = "Invalid incoming value for property \'',d='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',e='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',f="set",g="function",h=';',j="resetThemed",k='value !== null && value.nodeType === 9 && value.documentElement',m='===value)return value;',n='value !== null && value.$$type === "Mixin"',o='return init;',p='var init=this.',q=')prop.error(this,5,"',r='value !== null && value.nodeType === 1 && value.attributes',s="var parent = this.getLayoutParent();",t="Error in property ",u='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',v="property",w='.check.call(this, value)',x='if((computed===undefined||computed===inherit)&&',y="();",z='.validate.call(this, value);',A='qx.core.Assert.assertInstance(value, Date, msg) || true',B='else{',C="Cannot add the non themable property '",D="if (!parent) return;",E=" in method ",F='qx.core.Assert.assertInstance(value, Error, msg) || true',G='=computed;',H='Undefined value is not allowed!',I='(backup);',J='if(',K='else ',L='=true;',M="' to the themable property group '",N='if(old===undefined)old=this.',O='if(computed===inherit){',P='old=computed=this.',Q="]: ",R="inherit",S='if(this.',T='return this.',U='else if(this.',V='Is invalid!',W='if(value===undefined)prop.error(this,2,"',X='", "',Y='var computed, old=this.',ba='else if(computed===undefined)',bb="Malformed generated code to unwrap method: ",bc='delete this.',bd="resetRuntime",be="': ",bf=" of class ",bg='value !== null && value.nodeType !== undefined',bh='===undefined)return;',bi='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bj="Could not add check to property ",bk="reset",bl="string",bm="')){",bn="module.events",bo="return this.",bp='qx.core.Assert.assertPositiveInteger(value, msg) || true',bq="Code[",br='value=this.',bs="Cannot create property group '",bt='","',bu='if(init==qx.core.Property.$$inherit)init=null;',bv='qx.core.Assert.assertInArray(value, ',bw="get",bx='value !== null && value.$$type === "Interface"',by='var inherit=prop.$$inherit;',bz="', qx.event.type.Data, [computed, old]",bA="var value = parent.",bB="$$useinit_",bC='computed=undefined;delete this.',bD="(value);",bE='this.',bF='Requires exactly one argument!',bG='",value);',bH='computed=value;',bI='}else{',bJ="$$runtime_",bK="setThemed",bL='if(this.$$initialized)prop.error(this,0,"',bM='qx.core.Assert.assertInstance(value, qx.Class.getByName("',bN='(value);',bO="$$user_",bP='if(value===null)prop.error(this,4,"',bQ='!==undefined)',bR='){',bS='!',bT='qx.core.Assert.assertArray(value, msg) || true',bU='if(computed===undefined||computed===inherit){',bV=";",bW='qx.core.Assert.assertPositiveNumber(value, msg) || true',bX=".prototype",bY="' including non-existing property '",ca="Boolean",cb=")}",cc="(a[",cd='(computed, old, "',ce="setRuntime",cf='return value;',cg="this.",ch='.check, msg)',ci='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cj="if(reg.hasListener(this, '",ck='Does not allow any arguments!',cl='\'";',cm=')a[i].',cn="()",co=';}',cp="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cq='.$$properties.',cr='value !== null && value.$$type === "Theme"',cs='if(value!==null)',ct="'!",cu="var reg=qx.event.Registration;",cv="())",cw='=value;',cx='return null;',cy='!==undefined){',cz='qx.core.Assert.assertObject(value, msg) || true',cA='");',cB='if(old===computed)return value;',cC='qx.core.Assert.assertString(value, msg) || true',cD='!==undefined&&',cE="\n",cF='var pa=this.getLayoutParent();if(pa)computed=pa.',cG="if (value===undefined) value = parent.",cH='value !== null && value.$$type === "Class"',cI='qx.core.Assert.assertFunction(value, msg) || true',cJ='old=this.',cK='var computed, old;',cL='var backup=computed;',cM=".",cN='}',cO='"), msg)',cP="object",cQ="$$init_",cR='qx.core.Assert.assertInterface(value, qx.Interface.getByName("',cS="$$theme_",cT="qx.debug.property.level",cU='if(computed===undefined)computed=null;',cV='\' of class \'',cW="Unknown reason: ",cX='if(arguments.length!==1)prop.error(this,1,"',cY="init",da='qx.core.Assert.assertMap(value, msg) || true',db='!(',dc="Generating property wrappers: ",dd="'",de='qx.core.Assert.assertNumber(value, msg) || true',df="qx.debug",dg="reg.fireEvent(this, '",dh='Null value is not allowed!',di='if(value!==inherit)',dj='qx.core.Assert.assertInteger(value, msg) || true',dk="value",dl="shorthand",dm='computed=this.',dn="Generating property group: ",dp='qx.core.Assert.assertInstance(value, RegExp, msg) || true',dq='value !== null && value.type !== undefined',dr='value !== null && value.document',ds="",dt='throw new Error("Property ',du="(!this.",dv='qx.core.Assert.assertBoolean(value, msg) || true',dw='if(a[i].',dx="qx.aspects",dy=' of an instance of ',dz="toggle",dA="refresh",dB="$$inherit_",dC='var prop=qx.core.Property;',dD='else this.',dE='if(old===undefined)old=null;',dF="boolean",dG=" with incoming value '",dH=')',dI='if(arguments.length!==0)prop.error(this,3,"',dJ="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",dK='if(computed===undefined||computed==inherit)computed=null;',dL="qx.core.Property",dM="is",dN=' is not (yet) ready!");',dO="]);",dP='Could not change or apply init value after constructing phase!';qx.Bootstrap.define(dL,{statics:{__q:function(){if(qx.core.Environment.get(bn)){qx.event.type.Data;qx.event.dispatch.Direct;}
;}
,__r:{"Boolean":dv,"String":cC,"Number":de,"Integer":dj,"PositiveNumber":bW,"PositiveInteger":bp,"Error":F,"RegExp":dp,"Object":cz,"Array":bT,"Map":da,"Function":cI,"Date":A,"Node":bg,"Element":r,"Document":k,"Window":dr,"Event":dq,"Class":cH,"Mixin":n,"Interface":bx,"Theme":cr,"Color":d,"Decorator":bi,"Font":e},__s:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:R,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bl,dereference:dF,inheritable:dF,nullable:dF,themeable:dF,refine:dF,init:null,apply:bl,event:bl,check:null,transform:bl,deferredInit:dF,validate:null},$$allowedGroupKeys:{name:bl,group:cP,mode:bl,themeable:dF},$$inheritable:{},__t:function(dS){var dQ=this.__u(dS);if(!dQ.length){var dR=function(){}
;}
else {dR=this.__v(dQ);}
;dS.prototype.$$refreshInheritables=dR;}
,__u:function(dT){var dU=[];while(dT){var dV=dT.$$properties;if(dV){for(var name in this.$$inheritable){if(dV[name]&&dV[name].inheritable){dU.push(name);}
;}
;}
;dT=dT.superclass;}
;return dU;}
,__v:function(inheritables){var inherit=this.$$store.inherit;var init=this.$$store.init;var refresh=this.$$method.refresh;var code=[s,D];for(var i=0,l=inheritables.length;i<l;i++ ){var name=inheritables[i];code.push(bA,inherit[name],bV,cG,init[name],bV,cg,refresh[name],bD);}
;return new Function(code.join(ds));}
,attachRefreshInheritables:function(dW){dW.prototype.$$refreshInheritables=function(){qx.core.Property.__t(dW);return this.$$refreshInheritables();}
;}
,attachMethods:function(dY,name,dX){dX.group?this.__w(dY,dX,name):this.__x(dY,dX,name);}
,__w:function(clazz,config,name){var upname=qx.Bootstrap.firstUp(name);var members=clazz.prototype;var themeable=config.themeable===true;if(qx.core.Environment.get(df)){if(qx.core.Environment.get(cT)>1){qx.Bootstrap.debug(dn+name);}
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
,__x:function(clazz,config,name){var upname=qx.Bootstrap.firstUp(name);var members=clazz.prototype;if(qx.core.Environment.get(df)){if(qx.core.Environment.get(cT)>1){qx.Bootstrap.debug(dc+name);}
;}
;if(config.dereference===undefined&&typeof config.check===bl){config.dereference=this.__y(config.check);}
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
,__y:function(ef){return !!this.__s[ef];}
,__z:{'0':dP,'1':bF,'2':H,'3':ck,'4':dh,'5':V},error:function(eg,em,el,eh,ei){var ej=eg.constructor.classname;var ek=t+el+bf+ej+E+this.$$method[eh][el]+dG+ei+be;throw new Error(ek+(this.__z[em]||cW+em));}
,__A:function(instance,members,name,variant,code,args){var store=this.$$method[variant][name];if(qx.core.Environment.get(df)){if(qx.core.Environment.get(cT)>1){qx.Bootstrap.debug(bq+this.$$method[variant][name]+Q+code.join(ds));}
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
;return this.__A(er,es,name,ep,eo);}
,executeOptimizedSetter:function(eC,eB,name,eA,ez){var eE=eB.$$properties[name];var eD=eB.prototype;var ew=[];var ev=eA===f||eA===bK||eA===ce||(eA===cY&&eE.init===undefined);var ey=eE.apply||eE.event||eE.inheritable;var eF=this.__B(eA,name);this.__C(ew,eE,name,eA,ev);if(ev){this.__D(ew,eB,eE,name);}
;if(ey){this.__E(ew,ev,eF,eA);}
;if(eE.inheritable){ew.push(by);}
;if(qx.core.Environment.get(df)){if(ev){this.__F(ew,eE,eB,name,eA);}
;}
;if(!ey){this.__G(ew,name,eA,ev);}
else {this.__H(ew,eE,name,eA,ev);}
;if(eE.inheritable){this.__I(ew,eE,name,eA);}
else if(ey){this.__J(ew,eE,name,eA);}
;if(ey){this.__K(ew,eE,name,eA);if(eE.inheritable&&eD._getChildren){this.__L(ew,name);}
;}
;if(ev){ew.push(cf);}
;return this.__A(eC,eD,name,eA,ew,ez);}
,__B:function(eG,name){if(eG===ce||eG===bd){var eH=this.$$store.runtime[name];}
else if(eG===bK||eG===j){eH=this.$$store.theme[name];}
else if(eG===cY){eH=this.$$store.init[name];}
else {eH=this.$$store.user[name];}
;return eH;}
,__C:function(eK,eI,name,eL,eJ){if(qx.core.Environment.get(df)){eK.push(dC);if(eL===cY){eK.push(bL,name,bt,eL,bG);}
;if(eL===dA){}
else if(eJ){eK.push(cX,name,bt,eL,bG);eK.push(W,name,bt,eL,bG);}
else {eK.push(dI,name,bt,eL,bG);}
;}
else {if(!eI.nullable||eI.check||eI.inheritable){eK.push(dC);}
;if(eL===f){eK.push(W,name,bt,eL,bG);}
;}
;}
,__D:function(eM,eO,eN,name){if(eN.transform){eM.push(br,eN.transform,bN);}
;if(eN.validate){if(typeof eN.validate===bl){eM.push(bE,eN.validate,bN);}
else if(eN.validate instanceof Function){eM.push(eO.classname,cq,name);eM.push(z);}
;}
;}
,__E:function(eQ,eP,eS,eR){var eT=(eR===bk||eR===j||eR===bd);if(eP){eQ.push(S,eS,m);}
else if(eT){eQ.push(S,eS,bh);}
;}
,__F:qx.core.Environment.select(df,{"true":function(eV,eU,eX,name,eW){if(!eU.nullable){eV.push(bP,name,bt,eW,bG);}
;if(eU.check!==undefined){eV.push(c+name+cV+eX.classname+cl);if(eU.nullable){eV.push(cs);}
;if(eU.inheritable){eV.push(di);}
;eV.push(J);if(this.__r[eU.check]!==undefined){eV.push(db,this.__r[eU.check],dH);}
else if(qx.Class.isDefined(eU.check)){eV.push(bM,eU.check,cO);}
else if(qx.Interface&&qx.Interface.isDefined(eU.check)){eV.push(cR,eU.check,cO);}
else if(typeof eU.check===g){eV.push(bS,eX.classname,cq,name);eV.push(w);}
else if(typeof eU.check===bl){eV.push(db,eU.check,dH);}
else if(eU.check instanceof Array){eV.push(bv,eX.classname,cq,name,ch);}
else {throw new Error(bj+name+bf+eX.classname);}
;eV.push(q,name,bt,eW,bG);}
;}
,"false":undefined}),__G:function(fa,name,fb,eY){if(fb===ce){fa.push(bE,this.$$store.runtime[name],cw);}
else if(fb===bd){fa.push(S,this.$$store.runtime[name],bQ);fa.push(bc,this.$$store.runtime[name],h);}
else if(fb===f){fa.push(bE,this.$$store.user[name],cw);}
else if(fb===bk){fa.push(S,this.$$store.user[name],bQ);fa.push(bc,this.$$store.user[name],h);}
else if(fb===bK){fa.push(bE,this.$$store.theme[name],cw);}
else if(fb===j){fa.push(S,this.$$store.theme[name],bQ);fa.push(bc,this.$$store.theme[name],h);}
else if(fb===cY&&eY){fa.push(bE,this.$$store.init[name],cw);}
;}
,__H:function(fe,fc,name,ff,fd){if(fc.inheritable){fe.push(Y,this.$$store.inherit[name],h);}
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
,__I:function(fh,fg,name,fi){fh.push(bU);if(fi===dA){fh.push(bH);}
else {fh.push(cF,this.$$store.inherit[name],h);}
;fh.push(x);fh.push(bE,this.$$store.init[name],cD);fh.push(bE,this.$$store.init[name],b);fh.push(dm,this.$$store.init[name],h);fh.push(bE,this.$$store.useinit[name],L);fh.push(bI);fh.push(bc,this.$$store.useinit[name],co);fh.push(cN);fh.push(cB);fh.push(O);fh.push(bC,this.$$store.inherit[name],h);fh.push(cN);fh.push(ba);fh.push(bc,this.$$store.inherit[name],h);fh.push(dD,this.$$store.inherit[name],G);fh.push(cL);if(fg.init!==undefined&&fi!==cY){fh.push(N,this.$$store.init[name],bV);}
else {fh.push(dE);}
;fh.push(dK);}
,__J:function(fk,fj,name,fl){if(fl!==f&&fl!==ce&&fl!==bK){fk.push(cU);}
;fk.push(cB);if(fj.init!==undefined&&fl!==cY){fk.push(N,this.$$store.init[name],bV);}
else {fk.push(dE);}
;}
,__K:function(fn,fm,name,fo){if(fm.apply){fn.push(bE,fm.apply,cd,name,X,fo,cA);}
;if(fm.event){fn.push(cu,cj,fm.event,bm,dg,fm.event,bz,cb);}
;}
,__L:function(fp,name){fp.push(u);fp.push(dw,this.$$method.refresh[name],cm,this.$$method.refresh[name],I);fp.push(cN);}
}});}
)();
(function(){var b=': ',c="The mixin to include into class '",d="constructor",e="' is abstract! It is not possible to instantiate it.",f="environment",g='"! The value is undefined: ',h="Property module disabled.",j='Invalid check definition of property "',k="singleton",m="qx.event.type.Data",n='Forbidden environment setting "',o='". It is forbidden to define a default setting for an external namespace!',p=": the event value needs to be a string with the class name of the event object which will be fired.",q='Invalid include definition in class "',r=" could not refine property: ",s='Invalid config in class "',t="toString",u="! Key: ",v="events",w='Invalid type of key "',x='Invalid transform definition of property "',y='" in class "',z="Interface",A="Please initialize '",B='Assumed static class because no "extend" key was found. ',C="'.",D="' objects using the new keyword!",E=": the event value/type cannot be changed from ",F="destructor",G="destruct",H='"! The value is undefined/null!',I='" of Class "',J='" contains an invalid mixin at position ',K="Could not refine an init value if there was previously no init value defined. Property '",L='" of property "',M='Interface "',N="extend",O="module.property",P='Error in include definition of class "',Q="string",R='Overwriting member "',S="module.events",T='" definition for class "',U="members",V='". It is forbidden to define a ',W="' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.",X=" already has a property: ",Y="Events module not enabled.",cy="The mixin to patch class '",cz="' of class: '",cA='"!',cu='"extend" parameter is null or undefined',cv='.',cw="' is undefined/null!",cx=" could not be refined!",cF="Could not refine non-existent property: '",cG=".prototype",cM="function",cH='The configuration key "',cB='" is not allowed!',cC=": the events must be defined as map!",cD="static",cE='"! The type of the key must be "',cL='extend',dp="refine",dO="!",cN="properties",cI="'!",cJ='"! ',dK="_",cK="The class '",cO="Class",cP='"! The value needs to be a map!',cQ='Forbidden variant "',cV='"! Needs to be a String.',cW='"! Only interfaces and arrays of interfaces are allowed!',cX='The include definition in class "',cR='Overwriting generated property method "',cS='" found in "',cT=".",cU='". It is forbidden to define a variant for an external namespace!',dc="object",dd="$$init_",de='"! Only mixins and arrays of mixins are allowed!',df='!',cY='"! Needs to be a String, Array or Function.',da='"! Every non-static class has to extend at least the "qx.core.Object" class.',dL="init",db='" without a "refine" flag in the property definition! This class: ',dj="qx.aspects",dk="Incomplete parameters!",dN='" contains an invalid interface at position ',dl="Class ",dg="Array",dh="variants",dM='The implement definition in class "',di='" is already used by Class "',dm='Overwriting private member "',dn='Invalid type "',dA="/",dz="statics",dy='Invalid key "',dE=" to ",dD="' of class '",dC="",dB="]",dt="member",ds=', original class: ',dr="qx.Class",dq='Could not refine property "',dx="Mixin",dw="settings",dv="[Class ",du="abstract",dI='environment setting for an external namespace!',dH="The class ',",dG='Invalid implement definition in class "',dF="qx.debug",dJ='Forbidden setting "';qx.Bootstrap.define(dr,{statics:{__M:qx.core.Environment.get(O)?qx.core.Property:null,define:function(name,dS){if(!dS){dS={};}
;if(dS.include&&!(qx.Bootstrap.getClass(dS.include)===dg)){dS.include=[dS.include];}
;if(dS.implement&&!(qx.Bootstrap.getClass(dS.implement)===dg)){dS.implement=[dS.implement];}
;var dP=false;if(!dS.hasOwnProperty(N)&&!dS.type){dS.type=cD;dP=true;}
;if(qx.core.Environment.get(dF)){try{this.__j(name,dS);}
catch(dT){if(dP){dT.message=B+dT.message;}
;throw dT;}
;}
;var dQ=this.__P(name,dS.type,dS.extend,dS.statics,dS.construct,dS.destruct,dS.include);if(dS.extend){if(dS.properties){this.__R(dQ,dS.properties,true);}
;if(dS.members){this.__T(dQ,dS.members,true,true,false);}
;if(dS.events){this.__Q(dQ,dS.events,true);}
;if(dS.include){for(var i=0,l=dS.include.length;i<l;i++ ){this.__X(dQ,dS.include[i],false);}
;}
;}
else if(dS.hasOwnProperty(cL)&&qx.core.Environment.get(dF)){throw new Error(cu);}
;if(dS.environment){for(var dR in dS.environment){qx.core.Environment.add(dR,dS.environment[dR]);}
;}
;if(dS.implement){for(var i=0,l=dS.implement.length;i<l;i++ ){this.__V(dQ,dS.implement[i]);}
;}
;if(qx.core.Environment.get(dF)){this.__O(dQ);}
;if(dS.defer){dS.defer.self=dQ;dS.defer(dQ,dQ.prototype,{add:function(name,dU){var dV={};dV[name]=dU;qx.Class.__R(dQ,dV,true);}
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
;qx.Class.__X(eb,ea,false);}
,patch:function(ed,ec){if(qx.core.Environment.get(dF)){if(!ec){throw new Error(cy+ed.classname+cw);}
;qx.Mixin.isCompatible(ec,ed);}
;qx.Class.__X(ed,ec,true);}
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
,$$registry:qx.Bootstrap.$$registry,__i:qx.core.Environment.select(dF,{"true":{"type":Q,"extend":cM,"implement":dc,"include":dc,"construct":cM,"statics":dc,"properties":dc,"members":dc,"environment":dc,"events":dc,"defer":cM,"destruct":cM},"default":null}),__N:qx.core.Environment.select(dF,{"true":{"type":Q,"statics":dc,"environment":dc,"defer":cM},"default":null}),__j:qx.core.Environment.select(dF,{"true":function(name,eB){if(eB.type&&!(eB.type===cD||eB.type===du||eB.type===k)){throw new Error(dn+eB.type+T+name+cA);}
;if(eB.type&&eB.type!==cD&&!eB.extend){throw new Error(s+name+da);}
;var eA=eB.type===cD?this.__N:this.__i;for(var ez in eB){if(!eA[ez]){throw new Error(cH+ez+y+name+cB);}
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
}),__O:qx.core.Environment.select(dF,{"true":function(eG){var eF=eG.superclass;while(eF){if(eF.$$classtype!==du){break;}
;var eE=eF.$$implements;if(eE){for(var i=0;i<eE.length;i++ ){qx.Interface.assert(eG,eE[i],true);}
;}
;eF=eF.superclass;}
;}
,"default":function(eH){}
}),__P:function(name,eR,eQ,eI,eO,eM,eL){var eN;if(!eQ&&qx.core.Environment.get(dj)==false){eN=eI||{};qx.Bootstrap.setDisplayNames(eN,name);}
else {eN={};if(eQ){if(!eO){eO=this.__Y();}
;if(this.__bb(eQ,eL)){eN=this.__bc(eO,name,eR);}
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
,__Q:function(eS,eT,eV){if(qx.core.Environment.get(dF)){if(typeof eT!==dc||qx.Bootstrap.getClass(eT)===dg){throw new Error(eS.classname+cC);}
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
,__R:function(eX,fb,eY){if(!qx.core.Environment.get(O)){throw new Error(h);}
;var fa;if(eY===undefined){eY=false;}
;var eW=eX.prototype;for(var name in fb){fa=fb[name];if(qx.core.Environment.get(dF)){this.__S(eX,name,fa,eY);}
;fa.name=name;if(!fa.refine){if(eX.$$properties===undefined){eX.$$properties={};}
;eX.$$properties[name]=fa;}
;if(fa.init!==undefined){eX.prototype[dd+name]=fa.init;}
;if(fa.event!==undefined){if(!qx.core.Environment.get(S)){throw new Error(Y);}
;var event={};event[fa.event]=m;this.__Q(eX,event,eY);}
;if(fa.inheritable){this.__M.$$inheritable[name]=true;if(!eW.$$refreshInheritables){this.__M.attachRefreshInheritables(eX);}
;}
;if(!fa.refine){this.__M.attachMethods(eX,name,fa);}
;}
;}
,__S:qx.core.Environment.select(dF,{"true":function(fc,name,fi,fe){if(!qx.core.Environment.get(O)){throw new Error(h);}
;var fh=this.hasProperty(fc,name);if(fh){var fd=this.getPropertyDefinition(fc,name);if(fi.refine&&fd.init===undefined){throw new Error(K+name+dD+fc.classname+C);}
;}
;if(!fh&&fi.refine){throw new Error(cF+name+cz+fc.classname+cI);}
;if(fh&&!fe){throw new Error(dl+fc.classname+X+name+dO);}
;if(fh&&fe){if(!fi.refine){throw new Error(dq+name+db+fc.classname+ds+this.getByProperty(fc,name).classname+cv);}
;for(var ff in fi){if(ff!==dL&&ff!==dp){throw new Error(dl+fc.classname+r+name+u+ff+cx);}
;}
;}
;var fg=fi.group?this.__M.$$allowedGroupKeys:this.__M.$$allowedKeys;for(var ff in fi){if(fg[ff]===undefined){throw new Error(cH+ff+L+name+y+fc.classname+cB);}
;if(fi[ff]===undefined){throw new Error(dy+ff+L+name+y+fc.classname+g+fi[ff]);}
;if(fg[ff]!==null&&typeof fi[ff]!==fg[ff]){throw new Error(w+ff+L+name+y+fc.classname+cE+fg[ff]+cA);}
;}
;if(fi.transform!=null){if(!(typeof fi.transform==Q)){throw new Error(x+name+y+fc.classname+cV);}
;}
;if(fi.check!=null){if(!qx.Bootstrap.isString(fi.check)&&!qx.Bootstrap.isArray(fi.check)&&!qx.Bootstrap.isFunction(fi.check)){throw new Error(j+name+y+fc.classname+cY);}
;}
;}
,"default":null}),__T:function(fq,fj,fl,fn,fp){var fk=fq.prototype;var fo,fm;qx.Bootstrap.setDisplayNames(fj,fq.classname+cG);for(var i=0,a=Object.keys(fj),l=a.length;i<l;i++ ){fo=a[i];fm=fj[fo];if(qx.core.Environment.get(dF)){if(fk[fo]!==undefined&&fo.charAt(0)==dK&&fo.charAt(1)==dK){throw new Error(dm+fo+I+fq.classname+cB);}
;if(fl!==true&&fk.hasOwnProperty(fo)){throw new Error(R+fo+I+fq.classname+cB);}
;if(fk[fo]!=undefined&&fk[fo].$$propertyMethod){throw new Error(cR+fo+I+fq.classname+cB);}
;}
;if(fn!==false&&fm instanceof Function&&fm.$$type==null){if(fp==true){fm=this.__U(fm,fk[fo]);}
else {if(fk[fo]){fm.base=fk[fo];}
;fm.self=fq;}
;if(qx.core.Environment.get(dj)){fm=qx.core.Aspect.wrap(fq.classname+cT+fo,fm,dt);}
;}
;fk[fo]=fm;}
;}
,__U:function(fr,fs){if(fs){return function(){var fu=fr.base;fr.base=fs;var ft=fr.apply(this,arguments);fr.base=fu;return ft;}
;}
else {return fr;}
;}
,__V:function(fx,fv){if(qx.core.Environment.get(dF)){if(!fx||!fv){throw new Error(dk);}
;if(this.hasOwnInterface(fx,fv)){throw new Error(M+fv.name+di+fx.classname+df);}
;if(fx.$$classtype!==du){qx.Interface.assert(fx,fv,true);}
;}
;var fw=qx.Interface.flatten([fv]);if(fx.$$implements){fx.$$implements.push(fv);fx.$$flatImplements.push.apply(fx.$$flatImplements,fw);}
else {fx.$$implements=[fv];fx.$$flatImplements=fw;}
;}
,__W:function(fz){var name=fz.classname;var fy=this.__bc(fz,name,fz.$$classtype);for(var i=0,a=Object.keys(fz),l=a.length;i<l;i++ ){fA=a[i];fy[fA]=fz[fA];}
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
,__X:function(fJ,fH,fG){if(qx.core.Environment.get(dF)){if(!fJ||!fH){throw new Error(dk);}
;}
;if(this.hasMixin(fJ,fH)){return;}
;var fE=fJ.$$original;if(fH.$$constructor&&!fE){fJ=this.__W(fJ);}
;var fF=qx.Mixin.flatten([fH]);var fI;for(var i=0,l=fF.length;i<l;i++ ){fI=fF[i];if(fI.$$events){this.__Q(fJ,fI.$$events,fG);}
;if(fI.$$properties){this.__R(fJ,fI.$$properties,fG);}
;if(fI.$$members){this.__T(fJ,fI.$$members,fG,fG,fG);}
;}
;if(fJ.$$includes){fJ.$$includes.push(fH);fJ.$$flatIncludes.push.apply(fJ.$$flatIncludes,fF);}
else {fJ.$$includes=[fH];fJ.$$flatIncludes=fF;}
;}
,__Y:function(){function fK(){fK.base.apply(this,arguments);}
;return fK;}
,__ba:function(){return function(){}
;}
,__bb:function(fM,fL){if(qx.core.Environment.get(dF)){return true;}
;if(fM&&fM.$$includes){var fN=fM.$$flatIncludes;for(var i=0,l=fN.length;i<l;i++ ){if(fN[i].$$constructor){return true;}
;}
;}
;if(fL){var fO=qx.Mixin.flatten(fL);for(var i=0,l=fO.length;i<l;i++ ){if(fO[i].$$constructor){return true;}
;}
;}
;return false;}
,__bc:function(fQ,name,fP){var fS=function(){var fV=fS;if(qx.core.Environment.get(dF)){if(!(this instanceof fV)){throw new Error(A+name+D);}
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
(function(){var a="qx.debug.databinding",b=". Error message: ",c="Boolean",d="Data after conversion: ",f="set",g="deepBinding",h=")",k=") to the object '",l="item",m="Can not remove the bindings for null object!",n="Please use only one array at a time: ",p="Binding executed from ",q="Integer",r="reset",s=" of object ",t="qx.event.type.Data",u="qx.data.SingleValueBinding",v="No number or 'last' value hast been given",w="Binding property ",x="Failed so set value ",y="change",z="qx.debug",A="Binding could not be found!",B="get",C="^",D=" does not work.",E="String",F=" to ",G="Binding from '",H="",I=" (",J="PositiveNumber",K="Data before conversion: ",L="]",M="[",N=".",O="PositiveInteger",P="' (",Q=" on ",R="Binding does not exist!",S="Number",T=" in an array binding: ",U=" is not an data (qx.event.type.Data) event on ",V=").",W=" by ",X="Date",Y=" not possible: No event available. ",bb="last";qx.Class.define(u,{statics:{__bd:{},bind:function(bf,bs,bq,bh,bp){var bt=this.__bf(bf,bs,bq,bh,bp);var bj=bs.split(N);var be=this.__bl(bj);var bn=[];var bi=[];var bk=[];var bo=[];var bg=bf;try{for(var i=0;i<bj.length;i++ ){if(be[i]!==H){bo.push(y);}
else {bo.push(this.__bg(bg,bj[i]));}
;bn[i]=bg;if(i==bj.length-1){if(be[i]!==H){var bv=be[i]===bb?bg.length-1:be[i];var bd=bg.getItem(bv);this.__bk(bd,bq,bh,bp,bf);bk[i]=this.__bm(bg,bo[i],bq,bh,bp,be[i]);}
else {if(bj[i]!=null&&bg[B+qx.lang.String.firstUp(bj[i])]!=null){var bd=bg[B+qx.lang.String.firstUp(bj[i])]();this.__bk(bd,bq,bh,bp,bf);}
;bk[i]=this.__bm(bg,bo[i],bq,bh,bp);}
;}
else {var bc={index:i,propertyNames:bj,sources:bn,listenerIds:bk,arrayIndexValues:be,targetObject:bq,targetPropertyChain:bh,options:bp,listeners:bi};var bm=qx.lang.Function.bind(this.__be,this,bc);bi.push(bm);bk[i]=bg.addListener(bo[i],bm);}
;if(bg[B+qx.lang.String.firstUp(bj[i])]==null){bg=null;}
else if(be[i]!==H){bg=bg[B+qx.lang.String.firstUp(bj[i])](be[i]);}
else {bg=bg[B+qx.lang.String.firstUp(bj[i])]();}
;if(!bg){break;}
;}
;}
catch(bw){for(var i=0;i<bn.length;i++ ){if(bn[i]&&bk[i]){bn[i].removeListenerById(bk[i]);}
;}
;var bl=bt.targets;var br=bt.listenerIds;for(var i=0;i<bl.length;i++ ){if(bl[i]&&br[i]){bl[i].removeListenerById(br[i]);}
;}
;throw bw;}
;var bu={type:g,listenerIds:bk,sources:bn,targetListenerIds:bt.listenerIds,targets:bt.targets};this.__bn(bu,bf,bs,bq,bh);return bu;}
,__be:function(bD){if(bD.options&&bD.options.onUpdate){bD.options.onUpdate(bD.sources[bD.index],bD.targetObject);}
;for(var j=bD.index+1;j<bD.propertyNames.length;j++ ){var bB=bD.sources[j];bD.sources[j]=null;if(!bB){continue;}
;bB.removeListenerById(bD.listenerIds[j]);}
;var bB=bD.sources[bD.index];for(var j=bD.index+1;j<bD.propertyNames.length;j++ ){if(bD.arrayIndexValues[j-1]!==H){bB=bB[B+qx.lang.String.firstUp(bD.propertyNames[j-1])](bD.arrayIndexValues[j-1]);}
else {bB=bB[B+qx.lang.String.firstUp(bD.propertyNames[j-1])]();}
;bD.sources[j]=bB;if(!bB){if(bD.options&&bD.options.converter){var bx=false;if(bD.options.ignoreConverter){var bE=bD.propertyNames.slice(0,j).join(N);var bC=bE.match(new RegExp(C+bD.options.ignoreConverter));bx=bC?bC.length>0:false;}
;var bF=null;if(!bx){bF=bD.options.converter();}
;this.__bi(bD.targetObject,bD.targetPropertyChain,bF);}
else {this.__bh(bD.targetObject,bD.targetPropertyChain);}
;break;}
;if(j==bD.propertyNames.length-1){if(qx.Class.implementsInterface(bB,qx.data.IListData)){var bG=bD.arrayIndexValues[j]===bb?bB.length-1:bD.arrayIndexValues[j];var by=bB.getItem(bG);this.__bk(by,bD.targetObject,bD.targetPropertyChain,bD.options,bD.sources[bD.index]);bD.listenerIds[j]=this.__bm(bB,y,bD.targetObject,bD.targetPropertyChain,bD.options,bD.arrayIndexValues[j]);}
else {if(bD.propertyNames[j]!=null&&bB[B+qx.lang.String.firstUp(bD.propertyNames[j])]!=null){var by=bB[B+qx.lang.String.firstUp(bD.propertyNames[j])]();this.__bk(by,bD.targetObject,bD.targetPropertyChain,bD.options,bD.sources[bD.index]);}
;var bz=this.__bg(bB,bD.propertyNames[j]);bD.listenerIds[j]=this.__bm(bB,bz,bD.targetObject,bD.targetPropertyChain,bD.options);}
;}
else {if(bD.listeners[j]==null){var bA=qx.lang.Function.bind(this.__be,this,bD);bD.listeners.push(bA);}
;if(qx.Class.implementsInterface(bB,qx.data.IListData)){var bz=y;}
else {var bz=this.__bg(bB,bD.propertyNames[j]);}
;bD.listenerIds[j]=bB.addListener(bz,bD.listeners[j]);}
;}
;}
,__bf:function(bI,bQ,bU,bM,bO){var bL=bM.split(N);var bJ=this.__bl(bL);var bT=[];var bS=[];var bN=[];var bR=[];var bK=bU;for(var i=0;i<bL.length-1;i++ ){if(bJ[i]!==H){bR.push(y);}
else {try{bR.push(this.__bg(bK,bL[i]));}
catch(e){break;}
;}
;bT[i]=bK;var bP=function(){for(var j=i+1;j<bL.length-1;j++ ){var bX=bT[j];bT[j]=null;if(!bX){continue;}
;bX.removeListenerById(bN[j]);}
;var bX=bT[i];for(var j=i+1;j<bL.length-1;j++ ){var bV=qx.lang.String.firstUp(bL[j-1]);if(bJ[j-1]!==H){var bY=bJ[j-1]===bb?bX.getLength()-1:bJ[j-1];bX=bX[B+bV](bY);}
else {bX=bX[B+bV]();}
;bT[j]=bX;if(bS[j]==null){bS.push(bP);}
;if(qx.Class.implementsInterface(bX,qx.data.IListData)){var bW=y;}
else {try{var bW=qx.data.SingleValueBinding.__bg(bX,bL[j]);}
catch(e){break;}
;}
;bN[j]=bX.addListener(bW,bS[j]);}
;qx.data.SingleValueBinding.updateTarget(bI,bQ,bU,bM,bO);}
;bS.push(bP);bN[i]=bK.addListener(bR[i],bP);var bH=qx.lang.String.firstUp(bL[i]);if(bK[B+bH]==null){bK=null;}
else if(bJ[i]!==H){bK=bK[B+bH](bJ[i]);}
else {bK=bK[B+bH]();}
;if(!bK){break;}
;}
;return {listenerIds:bN,targets:bT};}
,updateTarget:function(ca,cd,cf,cb,ce){var cc=this.resolvePropertyChain(ca,cd);cc=qx.data.SingleValueBinding.__bo(cc,cf,cb,ce,ca);this.__bi(cf,cb,cc);}
,resolvePropertyChain:function(o,cj){var ci=this.__bj(o,cj);var ck;if(ci!=null){var cm=cj.substring(cj.lastIndexOf(N)+1,cj.length);if(cm.charAt(cm.length-1)==L){var cg=cm.substring(cm.lastIndexOf(M)+1,cm.length-1);var ch=cm.substring(0,cm.lastIndexOf(M));var cl=ci[B+qx.lang.String.firstUp(ch)]();if(cg==bb){cg=cl.length-1;}
;if(cl!=null){ck=cl.getItem(cg);}
;}
else {ck=ci[B+qx.lang.String.firstUp(cm)]();}
;}
;return ck;}
,__bg:function(co,cp){var cn=this.__bp(co,cp);if(cn==null){if(qx.Class.supportsEvent(co.constructor,cp)){cn=cp;}
else if(qx.Class.supportsEvent(co.constructor,y+qx.lang.String.firstUp(cp))){cn=y+qx.lang.String.firstUp(cp);}
else {throw new qx.core.AssertionError(w+cp+s+co+Y);}
;}
;return cn;}
,__bh:function(cs,cq){var cr=this.__bj(cs,cq);if(cr!=null){var ct=cq.substring(cq.lastIndexOf(N)+1,cq.length);if(ct.charAt(ct.length-1)==L){this.__bi(cs,cq,null);return;}
;if(cr[r+qx.lang.String.firstUp(ct)]!=undefined){cr[r+qx.lang.String.firstUp(ct)]();}
else {cr[f+qx.lang.String.firstUp(ct)](null);}
;}
;}
,__bi:function(cA,cw,cx){var cv=this.__bj(cA,cw);if(cv!=null){var cB=cw.substring(cw.lastIndexOf(N)+1,cw.length);if(cB.charAt(cB.length-1)==L){var cu=cB.substring(cB.lastIndexOf(M)+1,cB.length-1);var cy=cB.substring(0,cB.lastIndexOf(M));var cz=cA;if(!qx.Class.implementsInterface(cz,qx.data.IListData)){cz=cv[B+qx.lang.String.firstUp(cy)]();}
;if(cu==bb){cu=cz.length-1;}
;if(cz!=null){cz.setItem(cu,cx);}
;}
else {cv[f+qx.lang.String.firstUp(cB)](cx);}
;}
;}
,__bj:function(cH,cE){var cG=cE.split(N);var cD=cH;for(var i=0;i<cG.length-1;i++ ){try{var cF=cG[i];if(cF.indexOf(L)==cF.length-1){var cC=cF.substring(cF.indexOf(M)+1,cF.length-1);cF=cF.substring(0,cF.indexOf(M));}
;if(cF!=H){cD=cD[B+qx.lang.String.firstUp(cF)]();}
;if(cC!=null){if(cC==bb){cC=cD.length-1;}
;cD=cD.getItem(cC);cC=null;}
;}
catch(cI){return null;}
;}
;return cD;}
,__bk:function(cN,cJ,cL,cM,cK){cN=this.__bo(cN,cJ,cL,cM,cK);if(cN===undefined){this.__bh(cJ,cL);}
;if(cN!==undefined){try{this.__bi(cJ,cL,cN);if(cM&&cM.onUpdate){cM.onUpdate(cK,cJ,cN);}
;}
catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;}
;if(cM&&cM.onSetFail){cM.onSetFail(e);}
else {qx.log.Logger.warn(x+cN+Q+cJ+b+e);}
;}
;}
;}
,__bl:function(cO){var cP=[];for(var i=0;i<cO.length;i++ ){var name=cO[i];if(qx.lang.String.endsWith(name,L)){var cQ=name.substring(name.indexOf(M)+1,name.indexOf(L));if(name.indexOf(L)!=name.length-1){throw new Error(n+name+D);}
;if(cQ!==bb){if(cQ==H||isNaN(parseInt(cQ,10))){throw new Error(v+T+name+D);}
;}
;if(name.indexOf(M)!=0){cO[i]=name.substring(0,name.indexOf(M));cP[i]=H;cP[i+1]=cQ;cO.splice(i+1,0,l);i++ ;}
else {cP[i]=cQ;cO.splice(i,1,l);}
;}
else {cP[i]=H;}
;}
;return cP;}
,__bm:function(cR,cU,da,cX,cV,cT){if(qx.core.Environment.get(z)){var cS=qx.Class.getEventType(cR.constructor,cU);qx.core.Assert.assertEquals(t,cS,cU+U+cR+N);}
;var cW=function(dd,e){if(dd!==H){if(dd===bb){dd=cR.length-1;}
;var de=cR.getItem(dd);if(de===undefined){qx.data.SingleValueBinding.__bh(da,cX);}
;var dc=e.getData().start;var db=e.getData().end;if(dd<dc||dd>db){return;}
;}
else {var de=e.getData();}
;if(qx.core.Environment.get(a)){qx.log.Logger.debug(p+cR+W+cU+F+da+I+cX+h);qx.log.Logger.debug(K+de);}
;de=qx.data.SingleValueBinding.__bo(de,da,cX,cV,cR);if(qx.core.Environment.get(a)){qx.log.Logger.debug(d+de);}
;try{if(de!==undefined){qx.data.SingleValueBinding.__bi(da,cX,de);}
else {qx.data.SingleValueBinding.__bh(da,cX);}
;if(cV&&cV.onUpdate){cV.onUpdate(cR,da,de);}
;}
catch(df){if(!(df instanceof qx.core.ValidationError)){throw df;}
;if(cV&&cV.onSetFail){cV.onSetFail(df);}
else {qx.log.Logger.warn(x+de+Q+da+b+df);}
;}
;}
;if(!cT){cT=H;}
;cW=qx.lang.Function.bind(cW,cR,cT);var cY=cR.addListener(cU,cW);return cY;}
,__bn:function(dk,dg,dj,dh,di){if(this.__bd[dg.toHashCode()]===undefined){this.__bd[dg.toHashCode()]=[];}
;this.__bd[dg.toHashCode()].push([dk,dg,dj,dh,di]);}
,__bo:function(dp,du,dn,dq,dl){if(dq&&dq.converter){var dr;if(du.getModel){dr=du.getModel();}
;return dq.converter(dp,dr,dl,du);}
else {var dm=this.__bj(du,dn);var dv=dn.substring(dn.lastIndexOf(N)+1,dn.length);if(dm==null){return dp;}
;var ds=qx.Class.getPropertyDefinition(dm.constructor,dv);var dt=ds==null?H:ds.check;return this.__bq(dp,dt);}
;}
,__bp:function(dw,dy){var dx=qx.Class.getPropertyDefinition(dw.constructor,dy);if(dx==null){return null;}
;return dx.event;}
,__bq:function(dB,dA){var dz=qx.lang.Type.getClass(dB);if((dz==S||dz==E)&&(dA==q||dA==O)){dB=parseInt(dB,10);}
;if((dz==c||dz==S||dz==X)&&dA==E){dB=dB+H;}
;if((dz==S||dz==E)&&(dA==S||dA==J)){dB=parseFloat(dB);}
;return dB;}
,removeBindingFromObject:function(dC,dE){if(dE.type==g){for(var i=0;i<dE.sources.length;i++ ){if(dE.sources[i]){dE.sources[i].removeListenerById(dE.listenerIds[i]);}
;}
;for(var i=0;i<dE.targets.length;i++ ){if(dE.targets[i]){dE.targets[i].removeListenerById(dE.targetListenerIds[i]);}
;}
;}
else {dC.removeListenerById(dE);}
;var dD=this.__bd[dC.toHashCode()];if(dD!=undefined){for(var i=0;i<dD.length;i++ ){if(dD[i][0]==dE){qx.lang.Array.remove(dD,dD[i]);return;}
;}
;}
;throw new Error(A);}
,removeAllBindingsForObject:function(dG){if(qx.core.Environment.get(z)){qx.core.Assert.assertNotNull(dG,m);}
;var dF=this.__bd[dG.toHashCode()];if(dF!=undefined){for(var i=dF.length-1;i>=0;i-- ){this.removeBindingFromObject(dG,dF[i][0]);}
;}
;}
,getAllBindingsForObject:function(dH){if(this.__bd[dH.toHashCode()]===undefined){this.__bd[dH.toHashCode()]=[];}
;return this.__bd[dH.toHashCode()];}
,removeAllBindings:function(){for(var dJ in this.__bd){var dI=qx.core.ObjectRegistry.fromHashCode(dJ);if(dI==null){delete this.__bd[dJ];continue;}
;this.removeAllBindingsForObject(dI);}
;this.__bd={};}
,getAllBindings:function(){return this.__bd;}
,showBindingInLog:function(dL,dN){var dM;for(var i=0;i<this.__bd[dL.toHashCode()].length;i++ ){if(this.__bd[dL.toHashCode()][i][0]==dN){dM=this.__bd[dL.toHashCode()][i];break;}
;}
;if(dM===undefined){var dK=R;}
else {var dK=G+dM[1]+P+dM[2]+k+dM[3]+P+dM[4]+V;}
;qx.log.Logger.debug(dK);}
,showAllBindingsInLog:function(){for(var dP in this.__bd){var dO=qx.core.ObjectRegistry.fromHashCode(dP);for(var i=0;i<this.__bd[dP].length;i++ ){this.showBindingInLog(dO,this.__bd[dP][i][0]);}
;}
;}
}});}
)();
(function(){var a="-",b="]",c='\\u',d="undefined",e="",f='\\$1',g="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h="\\\\",j='-',k="g",l="\\\"",m="qx.lang.String",n="(^|[^",o="0",p="%",q='"',r=' ',s='\n',t="])[";qx.Bootstrap.define(m,{statics:{__br:g,__bs:null,__bt:{},camelCase:function(v){var u=this.__bt[v];if(!u){u=v.replace(/\-([a-z])/g,function(x,w){return w.toUpperCase();}
);if(v.indexOf(a)>=0){this.__bt[v]=u;}
;}
;return u;}
,hyphenate:function(z){var y=this.__bt[z];if(!y){y=z.replace(/[A-Z]/g,function(A){return (j+A.charAt(0).toLowerCase());}
);if(z.indexOf(a)==-1){this.__bt[z]=y;}
;}
;return y;}
,capitalize:function(C){if(this.__bs===null){var B=c;this.__bs=new RegExp(n+this.__br.replace(/[0-9A-F]{4}/g,function(D){return B+D;}
)+t+this.__br.replace(/[0-9A-F]{4}/g,function(E){return B+E;}
)+b,k);}
;return C.replace(this.__bs,function(F){return F.toUpperCase();}
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
,sum:function(Y){var ba=0;for(var i=0,l=Y.length;i<l;i++ ){ba+=Y[i];}
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
(function(){var a="qx.lang.Type",b="Error",c="RegExp",d="Date",e="Number",f="Boolean";qx.Bootstrap.define(a,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==c;}
,isNumber:function(h){return (h!==null&&(this.getClass(h)==e||h instanceof Number));}
,isBoolean:function(i){return (i!==null&&(this.getClass(i)==f||i instanceof Boolean));}
,isDate:function(j){return (j!==null&&(this.getClass(j)==d||j instanceof Date));}
,isError:function(k){return (k!==null&&(this.getClass(k)==b||k instanceof Error));}
}});}
)();
(function(){var a=" != ",b="qx.core.Object",c="Expected value to be an array but found ",d="' (rgb(",f=") was fired.",g="Expected value to be an integer >= 0 but found ",h="' to be not equal with '",j="' to '",k="Expected object '",m="Called assertTrue with '",n="Expected value to be a map but found ",o="The function did not raise an exception!",p="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",s="' to implement the interface '",t="Expected value to be null but found ",u="Invalid argument 'type'",v="Called assert with 'false'",w="Assertion error! ",x="'",y="null",z="' but found '",A="'undefined'",B=",",C="' must must be a key of the map '",D="Expected '",E="The String '",F="Expected value to be a string but found ",G="Event (",H="Expected value to be the CSS color '",I="!",J="Expected value not to be undefined but found undefined!",K="qx.util.ColorUtil",L=": ",M="The raised exception does not have the expected type! ",N=") not fired.",O="'!",P="qx.core.Assert",Q="",R="Expected value to be typeof object but found ",S="' but found ",T="' (identical) but found '",U="' must have any of the values defined in the array '",V="Expected value to be a number but found ",W="Called assertFalse with '",X="qx.ui.core.Widget",Y="]",bJ="Expected value to be a qooxdoo object but found ",bK="' arguments.",bL="Expected value '%1' to be in the range '%2'..'%3'!",bF="Array[",bG="' does not match the regular expression '",bH="' to be not identical with '",bI="Expected [",bP="' arguments but found '",bQ="', which cannot be converted to a CSS color!",bR=", ",cg="qx.core.AssertionError",bM="Expected value to be a boolean but found ",bN="Expected value not to be null but found null!",bO="))!",bD="Expected value to be a qooxdoo widget but found ",bU="The value '",bE="Expected value to be typeof '",bV="\n Stack trace: \n",bW="Expected value to be typeof function but found ",cb="Expected value to be an integer but found ",bS="Called fail().",cf="The parameter 're' must be a string or a regular expression.",bT=")), but found value '",bX="qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'",bY="Expected value to be a number >= 0 but found ",ca="Expected value to be instanceof '",cc="], but found [",cd="Wrong number of arguments given. Expected '",ce="object";qx.Class.define(P,{statics:{__bJ:true,__bK:function(ch,ci){var cm=Q;for(var i=1,l=arguments.length;i<l;i++ ){cm=cm+this.__bL(arguments[i]===undefined?A:arguments[i]);}
;var cl=Q;if(cm){cl=ch+L+cm;}
else {cl=ch;}
;var ck=w+cl;if(qx.Class.isDefined(cg)){var cj=new qx.core.AssertionError(ch,cm);if(this.__bJ){qx.Bootstrap.error(ck+bV+cj.getStackTrace());}
;throw cj;}
else {if(this.__bJ){qx.Bootstrap.error(ck);}
;throw new Error(ck);}
;}
,__bL:function(co){var cn;if(co===null){cn=y;}
else if(qx.lang.Type.isArray(co)&&co.length>10){cn=bF+co.length+Y;}
else if((co instanceof Object)&&(co.toString==null)){cn=qx.lang.Json.stringify(co,null,2);}
else {try{cn=co.toString();}
catch(e){cn=Q;}
;}
;return cn;}
,assert:function(cq,cp){cq==true||this.__bK(cp||Q,v);}
,fail:function(cr,cs){var ct=cs?Q:bS;this.__bK(cr||Q,ct);}
,assertTrue:function(cv,cu){(cv===true)||this.__bK(cu||Q,m,cv,x);}
,assertFalse:function(cx,cw){(cx===false)||this.__bK(cw||Q,W,cx,x);}
,assertEquals:function(cy,cz,cA){cy==cz||this.__bK(cA||Q,D,cy,z,cz,O);}
,assertNotEquals:function(cB,cC,cD){cB!=cC||this.__bK(cD||Q,D,cB,h,cC,O);}
,assertIdentical:function(cE,cF,cG){cE===cF||this.__bK(cG||Q,D,cE,T,cF,O);}
,assertNotIdentical:function(cH,cI,cJ){cH!==cI||this.__bK(cJ||Q,D,cH,bH,cI,O);}
,assertNotUndefined:function(cL,cK){cL!==undefined||this.__bK(cK||Q,J);}
,assertUndefined:function(cN,cM){cN===undefined||this.__bK(cM||Q,p,cN,I);}
,assertNotNull:function(cP,cO){cP!==null||this.__bK(cO||Q,bN);}
,assertNull:function(cR,cQ){cR===null||this.__bK(cQ||Q,t,cR,I);}
,assertJsonEquals:function(cS,cT,cU){this.assertEquals(qx.lang.Json.stringify(cS),qx.lang.Json.stringify(cT),cU);}
,assertMatch:function(cX,cW,cV){this.assertString(cX);this.assert(qx.lang.Type.isRegExp(cW)||qx.lang.Type.isString(cW),cf);cX.search(cW)>=0||this.__bK(cV||Q,E,cX,bG,cW.toString(),O);}
,assertArgumentsCount:function(db,dc,dd,cY){var da=db.length;(da>=dc&&da<=dd)||this.__bK(cY||Q,cd,dc,j,dd,bP,da,bK);}
,assertEventFired:function(de,event,dh,di,dj){var df=false;var dg=function(e){if(di){di.call(de,e);}
;df=true;}
;var dk;try{dk=de.addListener(event,dg,de);dh.call(de);}
catch(dl){throw dl;}
finally{try{de.removeListenerById(dk);}
catch(dm){}
;}
;df===true||this.__bK(dj||Q,G,event,N);}
,assertEventNotFired:function(dn,event,dr,ds){var dp=false;var dq=function(e){dp=true;}
;var dt=dn.addListener(event,dq,dn);dr.call();dp===false||this.__bK(ds||Q,G,event,f);dn.removeListenerById(dt);}
,assertException:function(dx,dw,dv,du){var dw=dw||Error;var dy;try{this.__bJ=false;dx();}
catch(dz){dy=dz;}
finally{this.__bJ=true;}
;if(dy==null){this.__bK(du||Q,o);}
;dy instanceof dw||this.__bK(du||Q,M,dw,a,dy);if(dv){this.assertMatch(dy.toString(),dv,du);}
;}
,assertInArray:function(dC,dB,dA){dB.indexOf(dC)!==-1||this.__bK(dA||Q,bU,dC,U,dB,x);}
,assertArrayEquals:function(dD,dE,dF){this.assertArray(dD,dF);this.assertArray(dE,dF);dF=dF||bI+dD.join(bR)+cc+dE.join(bR)+Y;if(dD.length!==dE.length){this.fail(dF,true);}
;for(var i=0;i<dD.length;i++ ){if(dD[i]!==dE[i]){this.fail(dF,true);}
;}
;}
,assertKeyInMap:function(dI,dH,dG){dH[dI]!==undefined||this.__bK(dG||Q,bU,dI,C,dH,x);}
,assertFunction:function(dK,dJ){qx.lang.Type.isFunction(dK)||this.__bK(dJ||Q,bW,dK,I);}
,assertString:function(dM,dL){qx.lang.Type.isString(dM)||this.__bK(dL||Q,F,dM,I);}
,assertBoolean:function(dO,dN){qx.lang.Type.isBoolean(dO)||this.__bK(dN||Q,bM,dO,I);}
,assertNumber:function(dQ,dP){(qx.lang.Type.isNumber(dQ)&&isFinite(dQ))||this.__bK(dP||Q,V,dQ,I);}
,assertPositiveNumber:function(dS,dR){(qx.lang.Type.isNumber(dS)&&isFinite(dS)&&dS>=0)||this.__bK(dR||Q,bY,dS,I);}
,assertInteger:function(dU,dT){(qx.lang.Type.isNumber(dU)&&isFinite(dU)&&dU%1===0)||this.__bK(dT||Q,cb,dU,I);}
,assertPositiveInteger:function(dX,dV){var dW=(qx.lang.Type.isNumber(dX)&&isFinite(dX)&&dX%1===0&&dX>=0);dW||this.__bK(dV||Q,g,dX,I);}
,assertInRange:function(eb,ec,ea,dY){(eb>=ec&&eb<=ea)||this.__bK(dY||Q,qx.lang.String.format(bL,[eb,ec,ea]));}
,assertObject:function(ee,ed){var ef=ee!==null&&(qx.lang.Type.isObject(ee)||typeof ee===ce);ef||this.__bK(ed||Q,R,(ee),I);}
,assertArray:function(eh,eg){qx.lang.Type.isArray(eh)||this.__bK(eg||Q,c,eh,I);}
,assertMap:function(ej,ei){qx.lang.Type.isObject(ej)||this.__bK(ei||Q,n,ej,I);}
,assertRegExp:function(el,ek){qx.lang.Type.isRegExp(el)||this.__bK(ek||Q,r,el,I);}
,assertType:function(eo,en,em){this.assertString(en,u);typeof (eo)===en||this.__bK(em||Q,bE,en,S,eo,I);}
,assertInstance:function(er,es,ep){var eq=es.classname||es+Q;er instanceof es||this.__bK(ep||Q,ca,eq,S,er,I);}
,assertInterface:function(ev,eu,et){qx.Class.implementsInterface(ev,eu)||this.__bK(et||Q,k,ev,s,eu,O);}
,assertCssColor:function(eC,ez,eB){var ew=qx.Class.getByName(K);if(!ew){throw new Error(bX);}
;var ey=ew.stringToRgb(eC);try{var eA=ew.stringToRgb(ez);}
catch(eE){this.__bK(eB||Q,H,eC,d,ey.join(B),bT,ez,bQ);}
;var eD=ey[0]==eA[0]&&ey[1]==eA[1]&&ey[2]==eA[2];eD||this.__bK(eB||Q,H,ey,d,ey.join(B),bT,ez,d,eA.join(B),bO);}
,assertElement:function(eG,eF){!!(eG&&eG.nodeType===1)||this.__bK(eF||Q,q,eG,O);}
,assertQxObject:function(eI,eH){this.__bM(eI,b)||this.__bK(eH||Q,bJ,eI,I);}
,assertQxWidget:function(eK,eJ){this.__bM(eK,X)||this.__bK(eJ||Q,bD,eK,I);}
,__bM:function(eM,eL){if(!eM){return false;}
;var eN=eM.constructor;while(eN){if(eN.classname===eL){return true;}
;eN=eN.superclass;}
;return false;}
}});}
)();
(function(){var a=": ",b="qx.type.BaseError",c="",d="error";qx.Class.define(b,{extend:Error,construct:function(e,f){var g=Error.call(this,f);if(g.stack){this.stack=g.stack;}
;if(g.stacktrace){this.stacktrace=g.stacktrace;}
;this.__bN=e||c;this.message=f||qx.type.BaseError.DEFAULTMESSAGE;}
,statics:{DEFAULTMESSAGE:d},members:{__bO:null,__bN:null,message:null,getComment:function(){return this.__bN;}
,toString:function(){return this.__bN+(this.message?a+this.message:c);}
}});}
)();
(function(){var a="qx.core.AssertionError";qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);this.__bP=qx.dev.StackTrace.getStackTrace();}
,members:{__bP:null,getStackTrace:function(){return this.__bP;}
}});}
)();
(function(){var a="?",b="anonymous",c="...",d="qx.dev.StackTrace",e="",f="\n",g="qx.debug",h="/source/class/",j="Error created at",k="FILENAME_TO_CLASSNAME must return a string!",l="ecmascript.error.stacktrace",m="Backtrace:",n="stack",o="FORMAT_STACKTRACE must return an array of strings!",p=":",q=".",r="function",s="prototype",t="stacktrace";qx.Bootstrap.define(d,{statics:{FILENAME_TO_CLASSNAME:null,FORMAT_STACKTRACE:null,getStackTrace:function(){var w=[];try{throw new Error();}
catch(J){if(qx.dev.StackTrace.hasEnvironmentCheck&&qx.core.Environment.get(l)){var B=qx.dev.StackTrace.getStackTraceFromError(J);var E=qx.dev.StackTrace.getStackTraceFromCaller(arguments);qx.lang.Array.removeAt(B,0);w=E.length>B.length?E:B;for(var i=0;i<Math.min(E.length,B.length);i++ ){var z=E[i];if(z.indexOf(b)>=0){continue;}
;var v=null;var F=z.split(q);var y=/(.*?)\(/.exec(F[F.length-1]);if(y&&y.length==2){v=y[1];F.pop();}
;if(F[F.length-1]==s){F.pop();}
;var H=F.join(q);var x=B[i];var I=x.split(p);var D=I[0];var C=I[1];var u;if(I[2]){u=I[2];}
;var A=null;if(qx.Class.getByName(D)){A=D;}
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
;U=/@(.+):(\d+)$/gm;while((V=U.exec(bg.stack))!=null){be=V[1];T=V[2];bd=this.__bQ(be);W.push(bd+p+T);}
;if(W.length>0){return this.__bS(W);}
;U=/at (.*)/gm;var bh=/\((.*?)(:[^\/].*)\)/;var bc=/(.*?)(:[^\/].*)/;while((V=U.exec(bg.stack))!=null){var bb=bh.exec(V[1]);if(!bb){bb=bc.exec(V[1]);}
;if(bb){bd=this.__bQ(bb[1]);W.push(bd+bb[2]);}
else {W.push(V[1]);}
;}
;}
else if(bf===t){var X=bg.stacktrace;if(!X){return W;}
;if(X.indexOf(j)>=0){X=X.split(j)[0];}
;U=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;while((V=U.exec(X))!=null){T=V[1];S=V[2];be=V[3];bd=this.__bQ(be);W.push(bd+p+T+p+S);}
;if(W.length>0){return this.__bS(W);}
;U=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;while((V=U.exec(X))!=null){T=V[1];be=V[2];bd=this.__bQ(be);W.push(bd+p+T);}
;}
else if(bg.message&&bg.message.indexOf(m)>=0){var ba=bg.message.split(m)[1].trim();var Y=ba.split(f);for(var i=0;i<Y.length;i++ ){var R=Y[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);if(R&&R.length>=2){T=R[1];bi=this.__bQ(R[2]);W.push(bi+p+T);}
;}
;}
else if(bg.sourceURL&&bg.line){W.push(this.__bQ(bg.sourceURL)+p+bg.line);}
;return this.__bS(W);}
,__bQ:function(bk){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==r){var bj=qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bk);if(qx.core.Environment.get(g)&&!qx.lang.Type.isString(bj)){throw new Error(k);}
;return bj;}
;return qx.dev.StackTrace.__bR(bk);}
,__bR:function(bn){var bo=h;var bl=bn.indexOf(bo);var bp=bn.indexOf(a);if(bp>=0){bn=bn.substring(0,bp);}
;var bm=(bl==-1)?bn:bn.substring(bl+bo.length).replace(/\//g,q).replace(/\.js$/,e);return bm;}
,__bS:function(bq){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==r){bq=qx.dev.StackTrace.FORMAT_STACKTRACE(bq);if(qx.core.Environment.get(g)&&!qx.lang.Type.isArray(bq)){throw new Error(o);}
;}
;return bq;}
},defer:function(br){br.hasEnvironmentCheck=qx.bom.client.EcmaScript&&qx.bom.client.EcmaScript.getStackTrace;}
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
(function(){var a="qx.globalErrorHandling",b="qx.event.GlobalError";qx.Bootstrap.define(b,{statics:{__bz:null,__bA:null,__bB:null,__bC:function(){if(qx.core&&qx.core.Environment){return qx.core.Environment.get(a);}
else {return !!qx.Bootstrap.getEnvironmentSetting(a);}
;}
,setErrorHandler:function(c,d){this.__bz=c||null;this.__bB=d||window;if(this.__bC()){if(c&&window.onerror){var e=qx.Bootstrap.bind(this.__bD,this);if(this.__bA==null){this.__bA=window.onerror;}
;var self=this;window.onerror=function(f,g,h){self.__bA(f,g,h);e(f,g,h);}
;}
;if(c&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__bD,this);}
;if(this.__bz==null){if(this.__bA!=null){window.onerror=this.__bA;this.__bA=null;}
else {window.onerror=null;}
;}
;}
;}
,__bD:function(i,j,k){if(this.__bz){this.handleError(new qx.core.WindowError(i,j,k));}
;}
,observeMethod:function(l){if(this.__bC()){var self=this;return function(){if(!self.__bz){return l.apply(this,arguments);}
;try{return l.apply(this,arguments);}
catch(m){self.handleError(new qx.core.GlobalError(m,arguments));}
;}
;}
else {return l;}
;}
,handleError:function(n){if(this.__bz){this.__bz.call(this.__bB,n);}
;}
},defer:function(o){if(qx.core&&qx.core.Environment){qx.core.Environment.add(a,true);}
else {qx.Bootstrap.setEnvironmentSetting(a,true);}
;o.setErrorHandler(null,null);}
});}
)();
(function(){var a="",b="qx.core.WindowError";qx.Bootstrap.define(b,{extend:Error,construct:function(c,e,f){var d=Error.call(this,c);if(d.stack){this.stack=d.stack;}
;if(d.stacktrace){this.stacktrace=d.stacktrace;}
;this.__bE=c;this.__bF=e||a;this.__bG=f===undefined?-1:f;}
,members:{__bE:null,__bF:null,__bG:null,toString:function(){return this.__bE;}
,getUri:function(){return this.__bF;}
,getLineNumber:function(){return this.__bG;}
}});}
)();
(function(){var a="GlobalError: ",b="qx.core.GlobalError";qx.Bootstrap.define(b,{extend:Error,construct:function(e,c){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(e);}
;this.__bE=a+(e&&e.message?e.message:e);var d=Error.call(this,this.__bE);if(d.stack){this.stack=d.stack;}
;if(d.stacktrace){this.stacktrace=d.stacktrace;}
;this.__bH=c;this.__bI=e;}
,members:{__bI:null,__bH:null,__bE:null,toString:function(){return this.__bE;}
,getArguments:function(){return this.__bH;}
,getSourceException:function(){return this.__bI;}
},destruct:function(){this.__bI=null;this.__bH=null;this.__bE=null;}
});}
)();
(function(){var c="-",d="qx.debug.dispose",e="",f="qx.core.ObjectRegistry",g="qx.debug",h="$$hash",j="-0",k="Invalid object: ",m="Could not dispose object ",n=" objects",o=": ",p="Disposed ";qx.Bootstrap.define(f,{statics:{inShutDown:false,__k:{},__bT:0,__bU:[],__bV:e,__bW:{},register:function(q){var t=this.__k;if(!t){return;}
;var s=q.$$hash;if(s==null){var r=this.__bU;if(r.length>0&&!qx.core.Environment.get(d)){s=r.pop();}
else {s=(this.__bT++ )+this.__bV;}
;q.$$hash=s;if(qx.core.Environment.get(d)){if(qx.dev&&qx.dev.Debug&&qx.dev.Debug.disposeProfilingActive){this.__bW[s]=qx.dev.StackTrace.getStackTrace();}
;}
;}
;if(qx.core.Environment.get(g)){if(!q.dispose){throw new Error(k+q);}
;}
;t[s]=q;}
,unregister:function(u){var v=u.$$hash;if(v==null){return;}
;var w=this.__k;if(w&&w[v]){delete w[v];this.__bU.push(v);}
;try{delete u.$$hash;}
catch(x){if(u.removeAttribute){u.removeAttribute(h);}
;}
;}
,toHashCode:function(A){if(qx.core.Environment.get(g)){if(A==null){throw new Error(k+A);}
;}
;var y=A.$$hash;if(y!=null){return y;}
;var z=this.__bU;if(z.length>0){y=z.pop();}
else {y=(this.__bT++ )+this.__bV;}
;return A.$$hash=y;}
,clearHashCode:function(C){if(qx.core.Environment.get(g)){if(C==null){throw new Error(k+C);}
;}
;var B=C.$$hash;if(B!=null){this.__bU.push(B);try{delete C.$$hash;}
catch(D){if(C.removeAttribute){C.removeAttribute(h);}
;}
;}
;}
,fromHashCode:function(E){return this.__k[E]||null;}
,shutdown:function(){this.inShutDown=true;var G=this.__k;var I=[];for(var F in G){I.push(F);}
;I.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);}
);var H,i=0,l=I.length;while(true){try{for(;i<l;i++ ){F=I[i];H=G[F];if(H&&H.dispose){H.dispose();}
;}
;}
catch(J){qx.Bootstrap.error(this,m+H.toString()+o+J,J);if(i!==l){i++ ;continue;}
;}
;break;}
;qx.Bootstrap.debug(this,p+l+n);delete this.__k;}
,getRegistry:function(){return this.__k;}
,getNextHash:function(){return this.__bT;}
,getPostId:function(){return this.__bV;}
,getStackTraces:function(){return this.__bW;}
},defer:function(K){if(window&&window.top){var frames=window.top.frames;for(var i=0;i<frames.length;i++ ){if(frames[i]===window){K.__bV=c+(i+1);return;}
;}
;}
;K.__bV=j;}
});}
)();
(function(){var b=': ',d='String',e='',f='Boolean',g='\\\\',h='object',l='\\f',m=']',o='\\t',p='function',q='{\n',r='[]',s="qx.lang.JsonImpl",t='Z',u=',',w='\\n',x='Object',y='{}',z='"',A='@',B='.',C='(',D='Array',E='T',F=':',G='\\r',H='{',I='JSON.parse',J=' ',K='\n',L='\\u',M=',\n',N='0000',O='null',P='string',Q="Cannot stringify a recursive object.",R='0',S='-',T='[',U='Number',V=')',W='[\n',X='\\"',Y='\\b',ba='}';qx.Bootstrap.define(s,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);this.parse=qx.lang.Function.bind(this.parse,this);}
,members:{__bX:null,__bY:null,__ca:null,__cb:null,stringify:function(bc,bb,bd){this.__bX=e;this.__bY=e;this.__cb=[];if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));for(var i=0;i<bd;i+=1){this.__bY+=J;}
;}
else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);}
;this.__bY=bd;}
;if(bb&&(qx.lang.Type.isFunction(bb)||qx.lang.Type.isArray(bb))){this.__ca=bb;}
else {this.__ca=null;}
;return this.__cc(e,{'':bc});}
,__cc:function(bi,bj){var bg=this.__bX,be,bh=bj[bi];if(bh&&qx.lang.Type.isFunction(bh.toJSON)){bh=bh.toJSON(bi);}
else if(qx.lang.Type.isDate(bh)){bh=this.dateToJSON(bh);}
;if(typeof this.__ca===p){bh=this.__ca.call(bj,bi,bh);}
;if(bh===null){return O;}
;if(bh===undefined){return undefined;}
;switch(qx.lang.Type.getClass(bh)){case d:return this.__cd(bh);case U:return isFinite(bh)?String(bh):O;case f:return String(bh);case D:this.__bX+=this.__bY;be=[];if(this.__cb.indexOf(bh)!==-1){throw new TypeError(Q);}
;this.__cb.push(bh);var length=bh.length;for(var i=0;i<length;i+=1){be[i]=this.__cc(i,bh)||O;}
;this.__cb.pop();if(be.length===0){var bf=r;}
else if(this.__bX){bf=W+this.__bX+be.join(M+this.__bX)+K+bg+m;}
else {bf=T+be.join(u)+m;}
;this.__bX=bg;return bf;case x:this.__bX+=this.__bY;be=[];if(this.__cb.indexOf(bh)!==-1){throw new TypeError(Q);}
;this.__cb.push(bh);if(this.__ca&&typeof this.__ca===h){var length=this.__ca.length;for(var i=0;i<length;i+=1){var k=this.__ca[i];if(typeof k===P){var v=this.__cc(k,bh);if(v){be.push(this.__cd(k)+(this.__bX?b:F)+v);}
;}
;}
;}
else {for(var k in bh){if(Object.hasOwnProperty.call(bh,k)){var v=this.__cc(k,bh);if(v){be.push(this.__cd(k)+(this.__bX?b:F)+v);}
;}
;}
;}
;this.__cb.pop();if(be.length===0){var bf=y;}
else if(this.__bX){bf=q+this.__bX+be.join(M+this.__bX)+K+bg+ba;}
else {bf=H+be.join(u)+ba;}
;this.__bX=bg;return bf;};}
,dateToJSON:function(bk){var bl=function(n){return n<10?R+n:n;}
;var bm=function(n){var bn=bl(n);return n<100?R+bn:bn;}
;return isFinite(bk.valueOf())?bk.getUTCFullYear()+S+bl(bk.getUTCMonth()+1)+S+bl(bk.getUTCDate())+E+bl(bk.getUTCHours())+F+bl(bk.getUTCMinutes())+F+bl(bk.getUTCSeconds())+B+bm(bk.getUTCMilliseconds())+t:null;}
,__cd:function(bp){var bo={'\b':Y,'\t':o,'\n':w,'\f':l,'\r':G,'"':X,'\\':g};var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;bq.lastIndex=0;if(bq.test(bp)){return z+bp.replace(bq,function(a){var c=bo[a];return typeof c===P?c:L+(N+a.charCodeAt(0).toString(16)).slice(-4);}
)+z;}
else {return z+bp+z;}
;}
,parse:function(text,reviver){var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return L+(N+a.charCodeAt(0).toString(16)).slice(-4);}
);}
;if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,A).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,m).replace(/(?:^|:|,)(?:\s*\[)+/g,e))){var j=eval(C+text+V);return typeof reviver===p?this.__ce({'':j},e,reviver):j;}
;throw new SyntaxError(I);}
,__ce:function(bu,bt,bs){var br=bu[bt];if(br&&typeof br===h){for(var k in br){if(Object.hasOwnProperty.call(br,k)){var v=this.__ce(br,k,bs);if(v!==undefined){br[k]=v;}
else {delete br[k];}
;}
;}
;}
;return bs.call(bu,bt,br);}
}});}
)();
(function(){var a="prop",b="qx.bom.client.Json",c="repl",d="JSON",e='{"x":1}',f="json",g="val";qx.Bootstrap.define(b,{statics:{getJson:function(){return (qx.Bootstrap.getClass(window.JSON)==d&&JSON.parse(e).x===1&&JSON.stringify({"prop":g},function(k,v){return k===a?c:v;}
).indexOf(c)>0);}
},defer:function(h){qx.core.Environment.add(f,h.getJson);}
});}
)();
(function(){var a="qx.lang.Json",b="json";qx.Bootstrap.define(a,{statics:{JSON:qx.core.Environment.get(b)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(c){c.stringify=c.JSON.stringify;c.parse=c.JSON.parse;}
});}
)();
(function(){var a="[object Opera]",b="function",c="[^\\.0-9]",d="4.0",e="gecko",f="1.9.0.0",g="Version/",h="9.0",i="8.0",j="Gecko",k="Maple",l="AppleWebKit/",m="Trident",n="Unsupported client: ",o="",p="opera",q="engine.version",r="! Assumed gecko version 1.9.0.0 (Firefox 3.0).",s="mshtml",t="engine.name",u="webkit",v="5.0",w=".",x="qx.bom.client.Engine";qx.Bootstrap.define(x,{statics:{getVersion:function(){var A=window.navigator.userAgent;var B=o;if(qx.bom.client.Engine.__bu()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(A)){if(A.indexOf(g)!=-1){var D=A.match(/Version\/(\d+)\.(\d+)/);B=D[1]+w+D[2].charAt(0)+w+D[2].substring(1,D[2].length);}
else {B=RegExp.$1+w+RegExp.$2;if(RegExp.$3!=o){B+=w+RegExp.$3;}
;}
;}
;}
else if(qx.bom.client.Engine.__bv()){if(/AppleWebKit\/([^ ]+)/.test(A)){B=RegExp.$1;var C=RegExp(c).exec(B);if(C){B=B.slice(0,C.index);}
;}
;}
else if(qx.bom.client.Engine.__bx()||qx.bom.client.Engine.__bw()){if(/rv\:([^\);]+)(\)|;)/.test(A)){B=RegExp.$1;}
;}
else if(qx.bom.client.Engine.__by()){var z=/Trident\/([^\);]+)(\)|;)/.test(A);if(/MSIE\s+([^\);]+)(\)|;)/.test(A)){B=RegExp.$1;if(B<8&&z){if(RegExp.$1==d){B=i;}
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
,getName:function(){var name;if(qx.bom.client.Engine.__bu()){name=p;}
else if(qx.bom.client.Engine.__bv()){name=u;}
else if(qx.bom.client.Engine.__bx()||qx.bom.client.Engine.__bw()){name=e;}
else if(qx.bom.client.Engine.__by()){name=s;}
else {var E=window.qxFail;if(E&&typeof E===b){name=E().NAME;}
else {name=e;qx.Bootstrap.warn(n+window.navigator.userAgent+r);}
;}
;return name;}
,__bu:function(){return window.opera&&Object.prototype.toString.call(window.opera)==a;}
,__bv:function(){return window.navigator.userAgent.indexOf(l)!=-1;}
,__bw:function(){return window.navigator.userAgent.indexOf(k)!=-1;}
,__bx:function(){return window.controllers&&window.navigator.product===j&&window.navigator.userAgent.indexOf(k)==-1&&window.navigator.userAgent.indexOf(m)==-1;}
,__by:function(){return window.navigator.cpuClass&&(/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent)||/Trident\/\d+?\.\d+?/.test(window.navigator.userAgent));}
},defer:function(F){qx.core.Environment.add(q,F.getVersion);qx.core.Environment.add(t,F.getName);}
});}
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
(function(){var a="qx.util.RingBuffer";qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);}
,members:{__cf:0,__cg:0,__ch:false,__ci:0,__cj:null,__ck:null,setMaxEntries:function(c){this.__ck=c;this.clear();}
,getMaxEntries:function(){return this.__ck;}
,addEntry:function(d){this.__cj[this.__cf]=d;this.__cf=this.__cl(this.__cf,1);var e=this.getMaxEntries();if(this.__cg<e){this.__cg++ ;}
;if(this.__ch&&(this.__ci<e)){this.__ci++ ;}
;}
,mark:function(){this.__ch=true;this.__ci=0;}
,clearMark:function(){this.__ch=false;}
,getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);}
,getEntries:function(f,j){if(f>this.__cg){f=this.__cg;}
;if(j&&this.__ch&&(f>this.__ci)){f=this.__ci;}
;if(f>0){var h=this.__cl(this.__cf,-1);var g=this.__cl(h,-f+1);var i;if(g<=h){i=this.__cj.slice(g,h+1);}
else {i=this.__cj.slice(g,this.__cg).concat(this.__cj.slice(0,h+1));}
;}
else {i=[];}
;return i;}
,clear:function(){this.__cj=new Array(this.getMaxEntries());this.__cg=0;this.__ci=0;this.__cf=0;}
,__cl:function(n,l){var k=this.getMaxEntries();var m=(n+l)%k;if(m<0){m+=k;}
;return m;}
}});}
)();
(function(){var a="qx.log.appender.RingBuffer";qx.Class.define(a,{extend:qx.util.RingBuffer,construct:function(b){this.setMaxMessages(b||50);}
,members:{setMaxMessages:function(c){this.setMaxEntries(c);}
,getMaxMessages:function(){return this.getMaxEntries();}
,process:function(d){this.addEntry(d);}
,getAllLogEvents:function(){return this.getAllEntries();}
,retrieveLogEvents:function(e,f){return this.getEntries(e,f);}
,clearHistory:function(){this.clear();}
}});}
)();
(function(){var a="qx.log.Logger",b="[",c="The mixin '",d="...(+",e="array",f="The method '",g=")",h="warn",j="node",k="The event '",m="instance",n="info",o="string",p="Please consult the API documentation of this method for alternatives.",q="null",r="error",s="qx.debug",t="Please consult the API documentation of this class for alternatives.",u="#",v="class",w="' is deprecated: ",x=": ",y="Please consult the API documentation for alternatives.",z="document",A="{...(",B="",C="number",D="' from class '",E="The class '",F="stringify",G="' overrides a deprecated method: ",H="date",I="unknown",J="function",K="text[",L="]",M="[...(",N="boolean",O="\n",P=")}",Q="debug",R=")]",S="map",T="The constant '",U="undefined",V="object";qx.Class.define(a,{statics:{__cm:Q,setLevel:function(W){this.__cm=W;}
,getLevel:function(){return this.__cm;}
,setTreshold:function(X){this.__cp.setMaxMessages(X);}
,getTreshold:function(){return this.__cp.getMaxMessages();}
,__cn:{},__co:0,register:function(bc){if(bc.$$id){return;}
;var Y=this.__co++ ;this.__cn[Y]=bc;bc.$$id=Y;var ba=this.__cq;var bb=this.__cp.getAllLogEvents();for(var i=0,l=bb.length;i<l;i++ ){if(ba[bb[i].level]>=ba[this.__cm]){bc.process(bb[i]);}
;}
;}
,unregister:function(bd){var be=bd.$$id;if(be==null){return;}
;delete this.__cn[be];delete bd.$$id;}
,debug:function(bg,bf){qx.log.Logger.__cr(Q,arguments);}
,info:function(bi,bh){qx.log.Logger.__cr(n,arguments);}
,warn:function(bk,bj){qx.log.Logger.__cr(h,arguments);}
,error:function(bm,bl){qx.log.Logger.__cr(r,arguments);}
,trace:function(bn){var bo=qx.dev.StackTrace.getStackTrace();qx.log.Logger.__cr(n,[(typeof bn!==U?[bn].concat(bo):bo).join(O)]);}
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
,clear:function(){this.__cp.clearHistory();}
,__cp:new qx.log.appender.RingBuffer(50),__cq:{debug:0,info:1,warn:2,error:3},__cr:function(bL,bN){var bQ=this.__cq;if(bQ[bL]<bQ[this.__cm]){return;}
;var bK=bN.length<2?null:bN[0];var bP=bK?1:0;var bM=[];for(var i=bP,l=bN.length;i<l;i++ ){bM.push(this.__ct(bN[i],true));}
;var bR=new Date;var bS={time:bR,offset:bR-qx.Bootstrap.LOADSTART,level:bL,items:bM,win:window};if(bK){if(bK.$$hash!==undefined){bS.object=bK.$$hash;}
else if(bK.$$type){bS.clazz=bK;}
;}
;this.__cp.process(bS);var bO=this.__cn;for(var bT in bO){bO[bT].process(bS);}
;}
,__cs:function(bV){if(bV===undefined){return U;}
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
,__ct:function(cc,cb){var cf=this.__cs(cc);var bY=I;var bX=[];switch(cf){case q:case U:bY=cf;break;case o:case C:case N:case H:bY=cc;break;case j:if(cc.nodeType===9){bY=z;}
else if(cc.nodeType===3){bY=K+cc.nodeValue+L;}
else if(cc.nodeType===1){bY=cc.nodeName.toLowerCase();if(cc.id){bY+=u+cc.id;}
;}
else {bY=j;}
;break;case J:bY=qx.lang.Function.getName(cc)||cf;break;case m:bY=cc.basename+b+cc.$$hash+L;break;case v:case F:bY=cc.toString();break;case r:bX=qx.dev.StackTrace.getStackTraceFromError(cc);bY=(cc.basename?cc.basename+x:B)+cc.toString();break;case e:if(cb){bY=[];for(var i=0,l=cc.length;i<l;i++ ){if(bY.length>20){bY.push(d+(l-i)+g);break;}
;bY.push(this.__ct(cc[i],false));}
;}
else {bY=M+cc.length+R;}
;break;case S:if(cb){var bW;var ce=[];for(var cd in cc){ce.push(cd);}
;ce.sort();bY=[];for(var i=0,l=ce.length;i<l;i++ ){if(bY.length>20){bY.push(d+(l-i)+g);break;}
;cd=ce[i];bW=this.__ct(cc[cd],false);bW.key=cd;bY.push(bW);}
;}
else {var ca=0;for(var cd in cc){ca++ ;}
;bY=A+ca+P;}
;break;};return {type:cf,text:bY,trace:bX};}
},defer:function(cg){var ch=qx.Bootstrap.$$logs;for(var i=0;i<ch.length;i++ ){cg.__cr(ch[i][0],ch[i][1]);}
;qx.Bootstrap.debug=cg.debug;qx.Bootstrap.info=cg.info;qx.Bootstrap.warn=cg.warn;qx.Bootstrap.error=cg.error;qx.Bootstrap.trace=cg.trace;}
});}
)();
(function(){var a="info",b="debug",c="warn",d="qx.core.MLogging",e="error";qx.Mixin.define(d,{members:{__cu:qx.log.Logger,debug:function(f){this.__cv(b,arguments);}
,info:function(g){this.__cv(a,arguments);}
,warn:function(h){this.__cv(c,arguments);}
,error:function(i){this.__cv(e,arguments);}
,trace:function(){this.__cu.trace(this);}
,__cv:function(j,l){var k=qx.lang.Array.fromArguments(l);k.unshift(this);this.__cu[j].apply(this.__cu,k);}
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
,isText:function(l){return !!(l&&l.nodeType===this.TEXT);}
,isWindow:function(m){return !!(m&&m.history&&m.location&&m.document);}
,isNodeName:function(n,o){if(!o||!n||!n.nodeName){return false;}
;return o.toLowerCase()==qx.dom.Node.getName(n);}
,getName:function(p){if(!p||!p.nodeName){return null;}
;return p.nodeName.toLowerCase();}
,getText:function(q){if(!q||!q.nodeType){return null;}
;switch(q.nodeType){case 1:var i,a=[],r=q.childNodes,length=r.length;for(i=0;i<length;i++ ){a[i]=this.getText(r[i]);}
;return a.join(c);case 2:case 3:case 4:return q.nodeValue;};return null;}
,isBlockNode:function(s){if(!qx.dom.Node.isElement(s)){return false;}
;s=qx.dom.Node.getName(s);return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(s);}
}});}
)();
(function(){var a="gecko",b="engine.name",c="",d="qx.bom.Event",f="qx.debug",g="function",h="mouseover",j="transitionend",k="No method available to remove native listener from ",m="No method available to add native listener to ",n="HTMLEvents",o="css.transition",p="on",q="undefined",r="return;",s="end-event";qx.Bootstrap.define(d,{statics:{addNativeListener:function(w,v,t,u){if(w.addEventListener){w.addEventListener(v,t,!!u);}
else if(w.attachEvent){w.attachEvent(p+v,t);}
else if(typeof w[p+v]!=q){w[p+v]=t;}
else {if(qx.core.Environment.get(f)){qx.log.Logger.warn(m+w);}
;}
;}
,removeNativeListener:function(A,z,x,y){if(A.removeEventListener){A.removeEventListener(z,x,!!y);}
else if(A.detachEvent){try{A.detachEvent(p+z,x);}
catch(e){if(e.number!==-2146828218){throw e;}
;}
;}
else if(typeof A[p+z]!=q){A[p+z]=null;}
else {if(qx.core.Environment.get(f)){qx.log.Logger.warn(k+A);}
;}
;}
,getTarget:function(e){return e.target||e.srcElement;}
,getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(b)==a)){try{e.relatedTarget&&e.relatedTarget.nodeType;}
catch(B){return null;}
;}
;return e.relatedTarget;}
else if(e.fromElement!==undefined&&e.type===h){return e.fromElement;}
else if(e.toElement!==undefined){return e.toElement;}
else {return null;}
;}
,preventDefault:function(e){if(e.preventDefault){e.preventDefault();}
else {try{e.keyCode=0;}
catch(C){}
;e.returnValue=false;}
;}
,stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();}
else {e.cancelBubble=true;}
;}
,fire:function(F,D){if(document.createEvent){var E=document.createEvent(n);E.initEvent(D,true,true);return !F.dispatchEvent(E);}
else {var E=document.createEventObject();return F.fireEvent(p+D,E);}
;}
,supportsEvent:function(K,J){if(K!=window&&J.toLowerCase().indexOf(j)!=-1){var I=qx.core.Environment.get(o);return (I&&I[s]==J);}
;var G=p+J.toLowerCase();var H=(G in K);if(!H){H=typeof K[G]==g;if(!H&&K.setAttribute){K.setAttribute(G,r);H=typeof K[G]==g;K.removeAttribute(G);}
;}
;return H;}
,getEventName:function(L,O){var M=[c].concat(qx.bom.Style.VENDOR_PREFIXES);for(var i=0,l=M.length;i<l;i++ ){var N=M[i].toLowerCase();if(qx.bom.Event.supportsEvent(L,N+O)){return N?N+qx.lang.String.firstUp(O):O;}
;}
;return null;}
}});}
)();
(function(){var a="-",b="qx.bom.Style",c="",d='-',e="Webkit",f="ms",g="Moz",h="O",j="string",k="Khtml";qx.Bootstrap.define(b,{statics:{VENDOR_PREFIXES:[e,g,h,f,k],__cw:{},getPropertyName:function(o){var m=document.documentElement.style;if(m[o]!==undefined){return o;}
;for(var i=0,l=this.VENDOR_PREFIXES.length;i<l;i++ ){var n=this.VENDOR_PREFIXES[i]+qx.lang.String.firstUp(o);if(m[n]!==undefined){return n;}
;}
;return null;}
,getCssName:function(p){var q=this.__cw[p];if(!q){q=p.replace(/[A-Z]/g,function(r){return (d+r.charAt(0).toLowerCase());}
);if((/^ms/.test(q))){q=a+q;}
;this.__cw[p]=q;}
;return q;}
,getAppliedStyle:function(w,u,v,t){var s=(t!==false)?[null].concat(this.VENDOR_PREFIXES):[null];for(var i=0,l=s.length;i<l;i++ ){var x=s[i]?a+s[i].toLowerCase()+a+v:v;try{w.style[u]=x;if(typeof w.style[u]==j&&w.style[u]!==c){return x;}
;}
catch(y){}
;}
;return null;}
}});}
)();
(function(){var a="qx.bom.client.CssTransition",b="E",c="transitionEnd",d="e",e="nd",f="transition",g="css.transition",h="Trans";qx.Bootstrap.define(a,{statics:{getTransitionName:function(){return qx.bom.Style.getPropertyName(f);}
,getSupport:function(){var name=qx.bom.client.CssTransition.getTransitionName();if(!name){return null;}
;var i=qx.bom.Event.getEventName(window,c);i=i==c?i.toLowerCase():i;if(!i){i=name+(name.indexOf(h)>0?b:d)+e;}
;return {name:name,"end-event":i};}
},defer:function(j){qx.core.Environment.add(g,j.getSupport);}
});}
)();
(function(){var a="Failed to remove event listener for id '",b="': ",c="Invalid context for callback.",d="Invalid capture flag.",e="Failed to add event listener for type '",f="__cB",g="UNKNOWN_",h="'",j="|bubble",k="Invalid event type.",m="There is no event handler for the event '",n=" from the target '",o="qx.debug",p="capture",q="|capture",r="Invalid callback function",s="qx.event.Manager",t="' on target '",u="'!",v="Could not dispatch event '",w="",x="_",y="DOM_",z="Invalid event target.",A="No dispatcher can handle event of type ",B="__cC",C="QX_",D=" to the target '",E="Failed to remove event listener for type '",F=" on ",G="Invalid id type.",H="c",I="|",J="unload",K="DOCUMENT_",L="Invalid object: ",M="Invalid Target.",N="WIN_",O="Invalid event object.";qx.Class.define(s,{extend:Object,construct:function(P,Q){this.__cx=P;this.__cy=qx.core.ObjectRegistry.toHashCode(P);this.__cz=Q;if(P.qx!==qx){var self=this;qx.bom.Event.addNativeListener(P,J,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(P,J,arguments.callee);self.dispose();}
));}
;this.__cA={};this.__cB={};this.__cC={};this.__cD={};}
,statics:{__cE:0,getNextUniqueId:function(){return (this.__cE++ )+w;}
},members:{__cz:null,__cA:null,__cC:null,__cF:null,__cB:null,__cD:null,__cx:null,__cy:null,getWindow:function(){return this.__cx;}
,getWindowId:function(){return this.__cy;}
,getHandler:function(S){var R=this.__cB[S.classname];if(R){return R;}
;return this.__cB[S.classname]=new S(this);}
,getDispatcher:function(U){var T=this.__cC[U.classname];if(T){return T;}
;return this.__cC[U.classname]=new U(this,this.__cz);}
,getListeners:function(W,bb,V){var Y=W.$$hash||qx.core.ObjectRegistry.toHashCode(W);var bc=this.__cA[Y];if(!bc){return null;}
;var ba=bb+(V?q:j);var X=bc[ba];return X?X.concat():null;}
,getAllListeners:function(){return this.__cA;}
,serializeListeners:function(be){var bi=be.$$hash||qx.core.ObjectRegistry.toHashCode(be);var bm=this.__cA[bi];var bh=[];if(bm){var bf,bl,bd,bg,bj;for(var bk in bm){bf=bk.indexOf(I);bl=bk.substring(0,bf);bd=bk.charAt(bf+1)==H;bg=bm[bk];for(var i=0,l=bg.length;i<l;i++ ){bj=bg[i];bh.push({self:bj.context,handler:bj.handler,type:bl,capture:bd});}
;}
;}
;return bh;}
,toggleAttachedEvents:function(bp,bo){var bs=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);var bv=this.__cA[bs];if(bv){var bq,bu,bn,br;for(var bt in bv){bq=bt.indexOf(I);bu=bt.substring(0,bq);bn=bt.charCodeAt(bq+1)===99;br=bv[bt];if(bo){this.__cG(bp,bu,bn);}
else {this.__cH(bp,bu,bn);}
;}
;}
;}
,hasListener:function(bx,bB,bw){if(qx.core.Environment.get(o)){if(bx==null){qx.log.Logger.trace(this);throw new Error(L+bx);}
;}
;var bz=bx.$$hash||qx.core.ObjectRegistry.toHashCode(bx);var bC=this.__cA[bz];if(!bC){return false;}
;var bA=bB+(bw?q:j);var by=bC[bA];return !!(by&&by.length>0);}
,importListeners:function(bD,bF){if(qx.core.Environment.get(o)){if(bD==null){qx.log.Logger.trace(this);throw new Error(L+bD);}
;}
;var bK=bD.$$hash||qx.core.ObjectRegistry.toHashCode(bD);var bL=this.__cA[bK]={};var bH=qx.event.Manager;for(var bE in bF){var bI=bF[bE];var bJ=bI.type+(bI.capture?q:j);var bG=bL[bJ];if(!bG){bG=bL[bJ]=[];this.__cG(bD,bI.type,bI.capture);}
;bG.push({handler:bI.listener,context:bI.self,unique:bI.unique||(bH.__cE++ )+w});}
;}
,addListener:function(bO,bV,bQ,self,bM){if(qx.core.Environment.get(o)){var bS=e+bV+h+D+bO.classname+b;qx.core.Assert.assertObject(bO,bS+M);qx.core.Assert.assertString(bV,bS+k);qx.core.Assert.assertFunction(bQ,bS+r);if(bM!==undefined){qx.core.Assert.assertBoolean(bM,d);}
;}
;var bN=bO.$$hash||qx.core.ObjectRegistry.toHashCode(bO);var bW=this.__cA[bN];if(!bW){bW=this.__cA[bN]={};}
;var bR=bV+(bM?q:j);var bP=bW[bR];if(!bP){bP=bW[bR]=[];}
;if(bP.length===0){this.__cG(bO,bV,bM);}
;var bU=(qx.event.Manager.__cE++ )+w;var bT={handler:bQ,context:self,unique:bU};bP.push(bT);return bR+I+bU;}
,findHandler:function(cc,cl){var cj=false,cb=false,cm=false,bX=false;var ci;if(cc.nodeType===1){cj=true;ci=y+cc.tagName.toLowerCase()+x+cl;}
else if(cc.nodeType===9){bX=true;ci=K+cl;}
else if(cc==this.__cx){cb=true;ci=N+cl;}
else if(cc.classname){cm=true;ci=C+cc.classname+x+cl;}
else {ci=g+cc+x+cl;}
;var ca=this.__cD;if(ca[ci]){return ca[ci];}
;var ch=this.__cz.getHandlers();var cd=qx.event.IEventHandler;var cf,cg,ce,bY;for(var i=0,l=ch.length;i<l;i++ ){cf=ch[i];ce=cf.SUPPORTED_TYPES;if(ce&&!ce[cl]){continue;}
;bY=cf.TARGET_CHECK;if(bY){var ck=false;if(cj&&((bY&cd.TARGET_DOMNODE)!=0)){ck=true;}
else if(cb&&((bY&cd.TARGET_WINDOW)!=0)){ck=true;}
else if(cm&&((bY&cd.TARGET_OBJECT)!=0)){ck=true;}
else if(bX&&((bY&cd.TARGET_DOCUMENT)!=0)){ck=true;}
;if(!ck){continue;}
;}
;cg=this.getHandler(ch[i]);if(cf.IGNORE_CAN_HANDLE||cg.canHandleEvent(cc,cl)){ca[ci]=cg;return cg;}
;}
;return null;}
,__cG:function(cq,cp,cn){var co=this.findHandler(cq,cp);if(co){co.registerEvent(cq,cp,cn);return;}
;if(qx.core.Environment.get(o)){qx.log.Logger.warn(this,m+cp+t+cq+u);}
;}
,removeListener:function(ct,cz,cv,self,cr){if(qx.core.Environment.get(o)){var cx=E+cz+h+n+ct.classname+b;qx.core.Assert.assertObject(ct,cx+M);qx.core.Assert.assertString(cz,cx+k);qx.core.Assert.assertFunction(cv,cx+r);if(self!==undefined){qx.core.Assert.assertObject(self,c);}
;if(cr!==undefined){qx.core.Assert.assertBoolean(cr,d);}
;}
;var cs=ct.$$hash||qx.core.ObjectRegistry.toHashCode(ct);var cA=this.__cA[cs];if(!cA){return false;}
;var cw=cz+(cr?q:j);var cu=cA[cw];if(!cu){return false;}
;var cy;for(var i=0,l=cu.length;i<l;i++ ){cy=cu[i];if(cy.handler===cv&&cy.context===self){qx.lang.Array.removeAt(cu,i);if(cu.length==0){this.__cH(ct,cz,cr);}
;return true;}
;}
;return false;}
,removeListenerById:function(cD,cL){if(qx.core.Environment.get(o)){var cH=a+cL+h+n+cD.classname+b;qx.core.Assert.assertObject(cD,cH+M);qx.core.Assert.assertString(cL,cH+G);}
;var cF=cL.split(I);var cK=cF[0];var cB=cF[1].charCodeAt(0)==99;var cJ=cF[2];var cC=cD.$$hash||qx.core.ObjectRegistry.toHashCode(cD);var cM=this.__cA[cC];if(!cM){return false;}
;var cG=cK+(cB?q:j);var cE=cM[cG];if(!cE){return false;}
;var cI;for(var i=0,l=cE.length;i<l;i++ ){cI=cE[i];if(cI.unique===cJ){qx.lang.Array.removeAt(cE,i);if(cE.length==0){this.__cH(cD,cK,cB);}
;return true;}
;}
;return false;}
,removeAllListeners:function(cO){var cQ=cO.$$hash||qx.core.ObjectRegistry.toHashCode(cO);var cT=this.__cA[cQ];if(!cT){return false;}
;var cP,cS,cN;for(var cR in cT){if(cT[cR].length>0){cP=cR.split(I);cS=cP[0];cN=cP[1]===p;this.__cH(cO,cS,cN);}
;}
;delete this.__cA[cQ];return true;}
,deleteAllListeners:function(cU){delete this.__cA[cU];}
,__cH:function(cY,cX,cV){var cW=this.findHandler(cY,cX);if(cW){cW.unregisterEvent(cY,cX,cV);return;}
;if(qx.core.Environment.get(o)){qx.log.Logger.warn(this,m+cX+t+cY+u);}
;}
,dispatchEvent:function(db,event){if(qx.core.Environment.get(o)){var df=v+event+t+db.classname+b;qx.core.Assert.assertNotUndefined(db,df+z);qx.core.Assert.assertNotNull(db,df+z);qx.core.Assert.assertInstance(event,qx.event.type.Event,df+O);}
;var dg=event.getType();if(!event.getBubbles()&&!this.hasListener(db,dg)){qx.event.Pool.getInstance().poolObject(event);return true;}
;if(!event.getTarget()){event.setTarget(db);}
;var de=this.__cz.getDispatchers();var dd;var da=false;for(var i=0,l=de.length;i<l;i++ ){dd=this.getDispatcher(de[i]);if(dd.canDispatchEvent(db,event,dg)){dd.dispatchEvent(db,event,dg);da=true;break;}
;}
;if(!da){if(qx.core.Environment.get(o)){qx.log.Logger.error(this,A+dg+F+db);}
;return true;}
;var dc=event.getDefaultPrevented();qx.event.Pool.getInstance().poolObject(event);return !dc;}
,dispose:function(){this.__cz.removeManager(this);qx.util.DisposeUtil.disposeMap(this,f);qx.util.DisposeUtil.disposeMap(this,B);this.__cA=this.__cx=this.__cF=null;this.__cz=this.__cD=null;}
}});}
)();
(function(){var a="qx.event.IEventHandler";qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(c,b){}
,registerEvent:function(f,e,d){}
,unregisterEvent:function(i,h,g){}
}});}
)();
(function(){var c="Create event of type ",d="Invalid event dispatcher!",e="': ",f="Invalid event handler.",g="qx.debug",h=" with undefined class. Please use null to explicit fallback to default event type!",i="' on target '",j="Invalid event target.",k="Could not fire event '",l="qx.event.Registration.getManager(null) was called!",m="undefined",n="qx.event.Registration";qx.Class.define(n,{statics:{__cI:{},getManager:function(q){if(q==null){if(qx.core.Environment.get(g)){qx.log.Logger.error(l);qx.log.Logger.trace(this);}
;q=window;}
else if(q.nodeType){q=qx.dom.Node.getWindow(q);}
else if(!qx.dom.Node.isWindow(q)){q=window;}
;var p=q.$$hash||qx.core.ObjectRegistry.toHashCode(q);var o=this.__cI[p];if(!o){o=new qx.event.Manager(q,this);this.__cI[p]=o;}
;return o;}
,removeManager:function(r){var s=r.getWindowId();delete this.__cI[s];}
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
,PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cB:[],addHandler:function(bc){if(qx.core.Environment.get(g)){qx.core.Assert.assertInterface(bc,qx.event.IEventHandler,f);}
;this.__cB.push(bc);this.__cB.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getHandlers:function(){return this.__cB;}
,__cC:[],addDispatcher:function(be,bd){if(qx.core.Environment.get(g)){qx.core.Assert.assertInterface(be,qx.event.IEventDispatcher,d);}
;this.__cC.push(be);this.__cC.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getDispatchers:function(){return this.__cC;}
}});}
)();
(function(){var a="qx.core.MEvent";qx.Mixin.define(a,{members:{__cJ:qx.event.Registration,addListener:function(d,b,self,c){if(!this.$$disposed){return this.__cJ.addListener(this,d,b,self,c);}
;return null;}
,addListenerOnce:function(h,f,self,g){var i=function(e){this.removeListener(h,f,this,g);f.call(self||this,e);}
;f.$$wrapped_callback=i;return this.addListener(h,i,this,g);}
,removeListener:function(l,j,self,k){if(!this.$$disposed){if(j.$$wrapped_callback){var m=j.$$wrapped_callback;delete j.$$wrapped_callback;j=m;}
;return this.__cJ.removeListener(this,l,j,self,k);}
;return false;}
,removeListenerById:function(n){if(!this.$$disposed){return this.__cJ.removeListenerById(this,n);}
;return false;}
,hasListener:function(p,o){return this.__cJ.hasListener(this,p,o);}
,dispatchEvent:function(q){if(!this.$$disposed){return this.__cJ.dispatchEvent(this,q);}
;return true;}
,fireEvent:function(s,t,r){if(!this.$$disposed){return this.__cJ.fireEvent(this,s,t,r);}
;return true;}
,fireNonBubblingEvent:function(v,w,u){if(!this.$$disposed){return this.__cJ.fireNonBubblingEvent(this,v,w,u);}
;return true;}
,fireDataEvent:function(z,A,x,y){if(!this.$$disposed){if(x===undefined){x=null;}
;return this.__cJ.fireNonBubblingEvent(this,z,qx.event.type.Data,[A,x,!!y]);}
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
,statics:{$$type:q},members:{__M:qx.core.Environment.get(e)?qx.core.Property:null,toHashCode:function(){return this.$$hash;}
,toString:function(){return this.classname+n+this.$$hash+j;}
,base:function(r,s){if(qx.core.Environment.get(f)){if(!qx.Bootstrap.isFunction(r.callee.base)){throw new Error(k+r.callee.displayName);}
;}
;if(arguments.length===1){return r.callee.base.call(this);}
else {return r.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}
;}
,self:function(t){return t.callee.self;}
,clone:function(){if(!qx.core.Environment.get(e)){throw new Error(b);}
;var v=this.constructor;var u=new v;var x=qx.Class.getProperties(v);var w=this.__M.$$store.user;var y=this.__M.$$method.set;var name;for(var i=0,l=x.length;i<l;i++ ){name=x[i];if(this.hasOwnProperty(w[name])){u[y[name]](this[w[name]]);}
;}
;return u;}
,__cK:null,setUserData:function(z,A){if(!this.__cK){this.__cK={};}
;this.__cK[z]=A;}
,getUserData:function(C){if(!this.__cK){return null;}
;var B=this.__cK[C];return B===undefined?null:B;}
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
;qx.core.ObjectRegistry.unregister(this);this.__cK=null;if(qx.core.Environment.get(e)){var N=this.constructor;var R;var S=this.__M.$$store;var P=S.user;var Q=S.theme;var L=S.inherit;var O=S.useinit;var M=S.init;while(N){R=N.$$properties;if(R){for(var name in R){if(R[name].dereference){this[P[name]]=this[Q[name]]=this[L[name]]=this[O[name]]=this[M[name]]=undefined;}
;}
;}
;N=N.superclass;}
;}
;}
});}
)();
(function(){var a="Container must be a instance of qx.ui.container.Composite or ",b=" is a singleton! Please use disposeSingleton instead.",c="undefined",d="qx.debug",e="qx.ui.container.SlideBar or qx.ui.container.Stack!",f="qx.util.DisposeUtil",g=" of object: ",h="!",j=" has non disposable entries: ",k="The map field: ",m="First argument must be a container widget!",n="qx.ui.container.Scroll or qx.ui.container.Resizer or ",o="The array field: ",p="The object stored in key ",q="Has no disposable object under key: ";qx.Class.define(f,{statics:{disposeObjects:function(s,r,t){var name;for(var i=0,l=r.length;i<l;i++ ){name=r[i];if(s[name]==null||!s.hasOwnProperty(name)){continue;}
;if(!qx.core.ObjectRegistry.inShutDown){if(s[name].dispose){if(!t&&s[name].constructor.$$instance){throw new Error(p+name+b);}
else {s[name].dispose();}
;}
else {throw new Error(q+name+h);}
;}
;s[name]=null;}
;}
,disposeArray:function(v,u){var w=v[u];if(!w){return;}
;if(qx.core.ObjectRegistry.inShutDown){v[u]=null;return;}
;try{var x;for(var i=w.length-1;i>=0;i-- ){x=w[i];if(x){x.dispose();}
;}
;}
catch(y){throw new Error(o+u+g+v+j+y);}
;w.length=0;v[u]=null;}
,disposeMap:function(A,z){var B=A[z];if(!B){return;}
;if(qx.core.ObjectRegistry.inShutDown){A[z]=null;return;}
;try{var D;for(var C in B){D=B[C];if(B.hasOwnProperty(C)&&D){D.dispose();}
;}
;}
catch(E){throw new Error(k+z+g+A+j+E);}
;A[z]=null;}
,disposeTriggeredBy:function(F,H){var G=H.dispose;H.dispose=function(){G.call(H);F.dispose();}
;}
,destroyContainer:function(J){if(qx.core.Environment.get(d)){qx.core.Assert.assertQxWidget(J,m);qx.core.Assert.assertTrue(this.__cL(J),a+n+e);}
;var I=[];this._collectContainerChildren(J,I);var K=I.length;for(var i=K-1;i>=0;i-- ){I[i].destroy();}
;J.destroy();}
,_collectContainerChildren:function(N,M){var O=N.getChildren();for(var i=0;i<O.length;i++ ){var L=O[i];M.push(L);if(this.__cL(L)){this._collectContainerChildren(L,M);}
;}
;}
,__cL:function(Q){var P=[qx.ui.container.Composite,qx.ui.container.Scroll,qx.ui.container.SlideBar,qx.ui.container.Stack];for(var i=0,l=P.length;i<l;i++ ){if(typeof P[i]!==c&&qx.Class.isSubClassOf(Q.constructor,P[i])){return true;}
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
(function(){var a="qx.util.ObjectPool",b="Class needs to be defined!",c="Object is already pooled: ",d="Integer";qx.Class.define(a,{extend:qx.core.Object,construct:function(e){qx.core.Object.call(this);this.__cM={};if(e!=null){this.setSize(e);}
;}
,properties:{size:{check:d,init:Infinity}},members:{__cM:null,getObject:function(h){if(this.$$disposed){return new h;}
;if(!h){throw new Error(b);}
;var f=null;var g=this.__cM[h.classname];if(g){f=g.pop();}
;if(f){f.$$pooled=false;}
else {f=new h;}
;return f;}
,poolObject:function(k){if(!this.__cM){return;}
;var j=k.classname;var m=this.__cM[j];if(k.$$pooled){throw new Error(c+k);}
;if(!m){this.__cM[j]=m=[];}
;if(m.length>this.getSize()){if(k.destroy){k.destroy();}
else {k.dispose();}
;return;}
;k.$$pooled=true;m.push(k);}
},destruct:function(){var p=this.__cM;var n,o,i,l;for(n in p){o=p[n];for(i=0,l=o.length;i<l;i++ ){o[i].dispose();}
;}
;delete this.__cM;}
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
(function(){var a="qx.event.type.Data";qx.Class.define(a,{extend:qx.event.type.Event,members:{__cN:null,__cO:null,init:function(c,d,b){qx.event.type.Event.prototype.init.call(this,false,b);this.__cN=c;this.__cO=d;return this;}
,clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);f.__cN=this.__cN;f.__cO=this.__cO;return f;}
,getData:function(){return this.__cN;}
,getOldData:function(){return this.__cO;}
},destruct:function(){this.__cN=this.__cO=null;}
});}
)();
(function(){var a="To enable localization please include qx.locale.Manager into your build!",b="qx.locale.MTranslation";qx.Mixin.define(b,{members:{tr:function(c,e){var d=qx.locale.Manager;if(d){return d.tr.apply(d,arguments);}
;throw new Error(a);}
,trn:function(g,j,f,h){var i=qx.locale.Manager;if(i){return i.trn.apply(i,arguments);}
;throw new Error(a);}
,trc:function(n,m,l){var k=qx.locale.Manager;if(k){return k.trc.apply(k,arguments);}
;throw new Error(a);}
,marktr:function(p){var o=qx.locale.Manager;if(o){return o.marktr.apply(o,arguments);}
;throw new Error(a);}
}});}
)();
(function(){var a="qx.application.IApplication";qx.Interface.define(a,{members:{main:function(){}
,finalize:function(){}
,close:function(){}
,terminate:function(){}
}});}
)();
(function(){var a="qx.core.BaseInit",b="engine.name",c="Main runtime: ",d="",f="qx.application",g="os.name",h="engine.version",i="Missing application class: ",j="Load runtime: ",k="ms",l="Could not detect engine!",m="Finalize runtime: ",n="Could not detect operating system!",o="Could not detect the version of the engine!";qx.Class.define(a,{statics:{__cP:null,getApplication:function(){return this.__cP||null;}
,ready:function(){if(this.__cP){return;}
;if(qx.core.Environment.get(b)==d){qx.log.Logger.warn(l);}
;if(qx.core.Environment.get(h)==d){qx.log.Logger.warn(o);}
;if(qx.core.Environment.get(g)==d){qx.log.Logger.warn(n);}
;qx.log.Logger.debug(this,j+(new Date-qx.Bootstrap.LOADSTART)+k);var q=qx.core.Environment.get(f);var r=qx.Class.getByName(q);if(r){this.__cP=new r;var p=new Date;this.__cP.main();qx.log.Logger.debug(this,c+(new Date-p)+k);var p=new Date;this.__cP.finalize();qx.log.Logger.debug(this,m+(new Date-p)+k);}
else {qx.log.Logger.warn(i+q);}
;}
,__cQ:function(e){var s=this.__cP;if(s){s.close();}
;}
,__cR:function(){var t=this.__cP;if(t){t.terminate();}
;qx.core.ObjectRegistry.shutdown();}
}});}
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
,__cS:{"Windows NT 6.3":K,"Windows NT 6.2":H,"Windows NT 6.1":m,"Windows NT 6.0":G,"Windows NT 5.2":g,"Windows NT 5.1":W,"Windows NT 5.0":J,"Windows 2000":J,"Windows NT 4.0":bn,"Win 9x 4.90":z,"Windows CE":l,"Windows 98":E,"Win98":E,"Windows 95":t,"Win95":t,"Mac OS X 10_9":q,"Mac OS X 10.9":q,"Mac OS X 10_8":v,"Mac OS X 10.8":v,"Mac OS X 10_7":f,"Mac OS X 10.7":f,"Mac OS X 10_6":P,"Mac OS X 10.6":P,"Mac OS X 10_5":o,"Mac OS X 10.5":o,"Mac OS X 10_4":S,"Mac OS X 10.4":S,"Mac OS X 10_3":d,"Mac OS X 10.3":d,"Mac OS X 10_2":A,"Mac OS X 10.2":A,"Mac OS X 10_1":b,"Mac OS X 10.1":b,"Mac OS X 10_0":R,"Mac OS X 10.0":R},getVersion:function(){var bw=qx.bom.client.OperatingSystem.__cT(navigator.userAgent);if(bw==null){bw=qx.bom.client.OperatingSystem.__cU(navigator.userAgent);}
;if(bw!=null){return bw;}
else {return M;}
;}
,__cT:function(bx){var bA=[];for(var bz in qx.bom.client.OperatingSystem.__cS){bA.push(bz);}
;var bB=new RegExp(L+bA.join(r).replace(/\./g,w)+h,bo);var by=bB.exec(bx);if(by&&by[1]){return qx.bom.client.OperatingSystem.__cS[by[1]];}
;return null;}
,__cU:function(bF){var bG=bF.indexOf(C)!=-1;var bC=bF.match(/(iPad|iPhone|iPod)/i)?true:false;if(bG){var bE=new RegExp(/ Android (\d+(?:\.\d+)+)/i);var bH=bE.exec(bF);if(bH&&bH[1]){return bH[1];}
;}
else if(bC){var bI=new RegExp(/(CPU|iPhone|iPod) OS (\d+)_(\d+)\s+/);var bD=bI.exec(bF);if(bD&&bD[2]&&bD[3]){return bD[2]+br+bD[3];}
;}
;return null;}
},defer:function(bJ){qx.core.Environment.add(p,bJ.getName);qx.core.Environment.add(e,bJ.getVersion);}
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
(function(){var a="ready",b="mshtml",c="engine.name",d="qx.event.handler.Application",f="complete",g="webkit",h="gecko",i="load",j="unload",k="opera",l="left",m="DOMContentLoaded",n="shutdown",o="browser.documentmode";qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(p){qx.core.Object.call(this);this._window=p.getWindow();this.__cV=false;this.__cW=false;this.__cX=false;this.__cY=false;this._initObserver();qx.event.handler.Application.$$instance=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var q=qx.event.handler.Application.$$instance;if(q){q.__da();}
;}
},members:{canHandleEvent:function(s,r){}
,registerEvent:function(v,u,t){}
,unregisterEvent:function(y,x,w){}
,__cX:null,__cV:null,__cW:null,__cY:null,__da:function(){if(!this.__cX&&this.__cV&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(c)==b)){if(qx.event.Registration.hasListener(this._window,a)){this.__cX=true;qx.event.Registration.fireEvent(this._window,a);}
;}
else {this.__cX=true;qx.event.Registration.fireEvent(this._window,a);}
;}
;}
,isApplicationReady:function(){return this.__cX;}
,_initObserver:function(){if(qx.$$domReady||document.readyState==f||document.readyState==a){this.__cV=true;this.__da();}
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
,_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__cV=true;this.__da();}
),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cY){this.__cY=true;try{qx.event.Registration.fireEvent(this._window,n);}
catch(e){throw e;}
finally{qx.core.ObjectRegistry.shutdown();}
;}
;}
)},destruct:function(){this._stopObserver();this._window=null;}
,defer:function(B){qx.event.Registration.addHandler(B);}
});}
)();
(function(){var a="CSS1Compat",b="msie",c="android",d="operamini",e="gecko",f="maple",g="browser.quirksmode",h="browser.name",i="trident",j="mobile chrome",k=")(/| )([0-9]+\.[0-9])",l="iemobile",m="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",n="IEMobile|Maxthon|MSIE|Trident",o="opera mobi",p="Mobile Safari",q="Maple",r="operamobile",s="ie",t="mobile safari",u="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|PhantomJS|Mobile Safari|Safari",v="qx.bom.client.Browser",w="(Maple )([0-9]+\.[0-9]+\.[0-9]*)",x="",y="opera mini",z="(",A="browser.version",B="opera",C="ce",D="mshtml",E="Opera Mini|Opera Mobi|Opera",F="webkit",G="browser.documentmode",H="5.0",I="Mobile/";qx.Bootstrap.define(v,{statics:{getName:function(){var L=navigator.userAgent;var M=new RegExp(z+qx.bom.client.Browser.__db+k);var K=L.match(M);if(!K){return x;}
;var name=K[1].toLowerCase();var J=qx.bom.client.Engine.getName();if(J===F){if(name===c){name=j;}
else if(L.indexOf(p)!==-1||L.indexOf(I)!==-1){name=t;}
;}
else if(J===D){if(name===b||name===i){name=s;if(qx.bom.client.OperatingSystem.getVersion()===C){name=l;}
;}
;}
else if(J===B){if(name===o){name=r;}
else if(name===y){name=d;}
;}
else if(J===e){if(L.indexOf(q)!==-1){name=f;}
;}
;return name;}
,getVersion:function(){var P=navigator.userAgent;var Q=new RegExp(z+qx.bom.client.Browser.__db+k);var N=P.match(Q);if(!N){return x;}
;var name=N[1].toLowerCase();var O=N[3];if(P.match(/Version(\/| )([0-9]+\.[0-9])/)){O=RegExp.$2;}
;if(qx.bom.client.Engine.getName()==D){O=qx.bom.client.Engine.getVersion();if(name===b&&qx.bom.client.OperatingSystem.getVersion()==C){O=H;}
;}
;if(qx.bom.client.Browser.getName()==f){Q=new RegExp(w);N=P.match(Q);if(!N){return x;}
;O=N[2];}
;return O;}
,getDocumentMode:function(){if(document.documentMode){return document.documentMode;}
;return 0;}
,getQuirksMode:function(){if(qx.bom.client.Engine.getName()==D&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;}
else {return document.compatMode!==a;}
;}
,__db:{"webkit":u,"gecko":m,"mshtml":n,"opera":E}[qx.bom.client.Engine.getName()]},defer:function(R){qx.core.Environment.add(h,R.getName),qx.core.Environment.add(A,R.getVersion),qx.core.Environment.add(G,R.getDocumentMode),qx.core.Environment.add(g,R.getQuirksMode);}
});}
)();
(function(){var a="ready",b="shutdown",c="beforeunload",d="qx.core.Init";qx.Class.define(d,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__cQ:function(e){var f=this.getApplication();if(f){e.setReturnValue(f.close());}
;}
,__cR:function(){var g=this.getApplication();if(g){g.terminate();}
;}
},defer:function(h){qx.event.Registration.addListener(window,a,h.ready,h);qx.event.Registration.addListener(window,b,h.__cR,h);qx.event.Registration.addListener(window,c,h.__cQ,h);}
});}
)();
(function(){var a="Abstract method call",b="abstract",c="qx.application.AbstractGui";qx.Class.define(c,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__a:null,_createRootWidget:function(){throw new Error(a);}
,getRoot:function(){return this.__a;}
,main:function(){qx.theme.manager.Meta.getInstance().initialize();qx.ui.tooltip.Manager.getInstance();this.__a=this._createRootWidget();}
,finalize:function(){this.render();}
,render:function(){qx.ui.core.queue.Manager.flush();}
,close:function(d){}
,terminate:function(){}
},destruct:function(){this.__a=null;}
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
(function(){var a="Could not parse color: ",b="_applyTheme",c="qx.theme.manager.Color",d="Theme",e="changeTheme",f="string",g="singleton";qx.Class.define(c,{type:g,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:e}},members:{_applyTheme:function(j){var h={};if(j){var i=j.colors;for(var name in i){h[name]=this.__dc(i,name);}
;}
;this._setDynamic(h);}
,__dc:function(l,name){var k=l[name];if(typeof k===f){if(!qx.util.ColorUtil.isCssString(k)){if(l[k]!=undefined){return this.__dc(l,k);}
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
else if(this.isRgbaString(y)){return this.__de(y);}
else if(this.isRgbString(y)){return this.__dd();}
else if(this.isHex3String(y)){return this.__df();}
else if(this.isHex6String(y)){return this.__dg();}
;throw new Error(a+y);}
,cssStringToRgb:function(z){if(this.isNamedColor(z)){return this.NAMED[z];}
else if(this.isSystemColor(z)){throw new Error(e+z);}
else if(this.isRgbString(z)){return this.__dd();}
else if(this.isRgbaString(z)){return this.__de();}
else if(this.isHex3String(z)){return this.__df();}
else if(this.isHex6String(z)){return this.__dg();}
;throw new Error(a+z);}
,stringToRgbString:function(A){return this.rgbToRgbString(this.stringToRgb(A));}
,rgbToRgbString:function(B){return s+(B[3]?l:c)+h+B.join(u)+j;}
,rgbToHexString:function(C){return (k+qx.lang.String.pad(C[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(C[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(C[2].toString(16).toUpperCase(),2));}
,isValidPropertyValue:function(D){return (this.isThemedColor(D)||this.isNamedColor(D)||this.isHex3String(D)||this.isHex6String(D)||this.isRgbString(D)||this.isRgbaString(D));}
,isCssString:function(E){return (this.isSystemColor(E)||this.isNamedColor(E)||this.isHex3String(E)||this.isHex6String(E)||this.isRgbString(E)||this.isRgbaString(E));}
,isHex3String:function(F){return this.REGEXP.hex3.test(F);}
,isHex6String:function(G){return this.REGEXP.hex6.test(G);}
,isRgbString:function(H){return this.REGEXP.rgb.test(H);}
,isRgbaString:function(I){return this.REGEXP.rgba.test(I);}
,__dd:function(){var L=parseInt(RegExp.$1,10);var K=parseInt(RegExp.$2,10);var J=parseInt(RegExp.$3,10);return [L,K,J];}
,__de:function(){var P=parseInt(RegExp.$1,10);var O=parseInt(RegExp.$2,10);var M=parseInt(RegExp.$3,10);var N=parseInt(RegExp.$4,10);if(P===0&&O===0&M===0&&N===0){return [-1,-1,-1];}
;return [P,O,M];}
,__df:function(){var S=parseInt(RegExp.$1,16)*17;var R=parseInt(RegExp.$2,16)*17;var Q=parseInt(RegExp.$3,16)*17;return [S,R,Q];}
,__dg:function(){var V=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);var U=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);var T=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);return [V,U,T];}
,hex3StringToRgb:function(W){if(this.isHex3String(W)){return this.__df(W);}
;throw new Error(m+W);}
,hex3StringToHex6String:function(X){if(this.isHex3String(X)){return this.rgbToHexString(this.hex3StringToRgb(X));}
;return X;}
,hex6StringToRgb:function(Y){if(this.isHex6String(Y)){return this.__dg(Y);}
;throw new Error(q+Y);}
,hexStringToRgb:function(ba){if(this.isHex3String(ba)){return this.__df(ba);}
;if(this.isHex6String(ba)){return this.__dg(ba);}
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
(function(){var a="mshtml",b="engine.name",c="_applyTheme",d="",e="'.",f="qx-",g="__dj",h="Unable to resolve decorator '",j="singleton",k=";",l="qx.theme.manager.Decoration",m=".",n="Theme",o="object",p="changeTheme",q="string",r="browser.documentmode",s=":";qx.Class.define(l,{type:j,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__dh=[];this.__di=(qx.core.Environment.get(b)==a&&qx.core.Environment.get(r)<9);}
,properties:{theme:{check:n,nullable:true,apply:c,event:p}},members:{__dj:null,__dh:null,__di:false,getCssClassName:function(t){if(qx.lang.Type.isString(t)){return f+t;}
else {return f+t.toHashCode();}
;}
,addCssClass:function(y){var v=qx.ui.style.Stylesheet.getInstance();var A=y;y=this.getCssClassName(y);var z=m+y;if(v.hasRule(z)){return y;}
;if(qx.lang.Type.isString(A)){A=this.resolve(A);}
;if(!A){throw new Error(h+y+e);}
;var F=d;var u=A.getStyles(true);for(var C in u){if(qx.Bootstrap.isObject(u[C])){var w=d;var E=u[C];var B=false;for(var x in E){B=true;w+=x+s+E[x]+k;}
;var D=this.__di?z:z+(B?s:d);this.__dh.push(D+C);v.addRule(D+C,w);continue;}
;F+=C+s+u[C]+k;}
;if(F){v.addRule(z,F);this.__dh.push(z);}
;return y;}
,resolve:function(J){if(!J){return null;}
;if(typeof J===o){return J;}
;var K=this.getTheme();if(!K){return null;}
;var H=this.__dj;if(!H){H=this.__dj={};}
;var G=H[J];if(G){return G;}
;var M=qx.lang.Object.clone(K.decorations[J],true);if(!M){return null;}
;if(!M.style){M.style={};}
;var I=M;while(I.include){I=K.decorations[I.include];if(!M.decorator&&I.decorator){M.decorator=qx.lang.Object.clone(I.decorator);}
;if(I.style){for(var L in I.style){if(M.style[L]==undefined){M.style[L]=qx.lang.Object.clone(I.style[L],true);}
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
,isCached:function(R){return !this.__dj?false:qx.lang.Object.contains(this.__dj,R);}
,_applyTheme:function(U,S){var T=qx.util.AliasManager.getInstance();for(var i=0;i<this.__dh.length;i++ ){var V=this.__dh[i];qx.ui.style.Stylesheet.getInstance().removeRule(V);}
;this.__dh=[];if(S){for(var W in S.aliases){T.remove(W);}
;}
;if(U){for(var W in U.aliases){T.add(W,U.aliases[W]);}
;}
;this._disposeMap(g);this.__dj={};}
},destruct:function(){this._disposeMap(g);}
});}
)();
(function(){var a="qx.ui.style.Stylesheet",b="singleton";qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__dk=qx.bom.Stylesheet.createElement();this.__dh=[];}
,members:{__dh:null,__dk:null,addRule:function(d,c){if(this.hasRule(d)){return;}
;qx.bom.Stylesheet.addRule(this.__dk,d,c);this.__dh.push(d);}
,hasRule:function(e){return this.__dh.indexOf(e)!=-1;}
,removeRule:function(f){delete this.__dh[this.__dh.indexOf(f)];qx.bom.Stylesheet.removeRule(this.__dk,f);}
},destruct:function(){qx.bom.Stylesheet.removeSheet(this.__dk);}
});}
)();
(function(){var a="stylesheet",b="qx.bom.Stylesheet.addRule: The rule '",c="head",d="' must not be enclosed in braces",e="html.stylesheet.insertrule",f='qx.debug',g="' for the selector '",h="}",j="html.stylesheet.createstylesheet",k='@import "',l="text/css",m="{",n='";',o="html.stylesheet.removeimport",p="html.stylesheet.deleterule",q="qx.bom.Stylesheet",r="html.stylesheet.addimport",s="link",t="style";qx.Bootstrap.define(q,{statics:{includeFile:function(w,u){if(!u){u=document;}
;var x=u.createElement(s);x.type=l;x.rel=a;x.href=w;var v=u.getElementsByTagName(c)[0];v.appendChild(x);}
,createElement:function(y){if(qx.core.Environment.get(j)){var z=document.createStyleSheet();if(y){z.cssText=y;}
;return z;}
else {var A=document.createElement(t);A.type=l;if(y){A.appendChild(document.createTextNode(y));}
;document.getElementsByTagName(c)[0].appendChild(A);return A.sheet;}
;}
,addRule:function(D,E,C){if(qx.core.Environment.get(f)){var B=b+C+g+E+d;qx.core.Assert.assertFalse(/^\s*?{.*?}\s*?$/.test(C),B);}
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
(function(){var a="engine.name",b="='",c="<",d="",f="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",h="qx.dom.Element",j="webkit",k="The tag name is missing!",m=" ",n="div",o=">",p="' ",q="></";qx.Bootstrap.define(h,{statics:{__dl:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},hasChild:function(parent,r){return r.parentNode===parent;}
,hasChildren:function(s){return !!s.firstChild;}
,hasChildElements:function(t){t=t.firstChild;while(t){if(t.nodeType===1){return true;}
;t=t.nextSibling;}
;return false;}
,getParentElement:function(u){return u.parentNode;}
,isInDom:function(x,v){if(!v){v=window;}
;var w=v.document.getElementsByTagName(x.nodeName);for(var i=0,l=w.length;i<l;i++ ){if(w[i]===x){return true;}
;}
;return false;}
,insertAt:function(y,parent,z){var A=parent.childNodes[z];if(A){parent.insertBefore(y,A);}
else {parent.appendChild(y);}
;return true;}
,insertBegin:function(B,parent){if(parent.firstChild){this.insertBefore(B,parent.firstChild);}
else {parent.appendChild(B);}
;return true;}
,insertEnd:function(C,parent){parent.appendChild(C);return true;}
,insertBefore:function(D,E){E.parentNode.insertBefore(D,E);return true;}
,insertAfter:function(F,G){var parent=G.parentNode;if(G==parent.lastChild){parent.appendChild(F);}
else {return this.insertBefore(F,G.nextSibling);}
;return true;}
,remove:function(H){if(!H.parentNode){return false;}
;H.parentNode.removeChild(H);return true;}
,removeChild:function(I,parent){if(I.parentNode!==parent){return false;}
;parent.removeChild(I);return true;}
,removeChildAt:function(J,parent){var K=parent.childNodes[J];if(!K){return false;}
;parent.removeChild(K);return true;}
,replaceChild:function(M,L){if(!L.parentNode){return false;}
;L.parentNode.replaceChild(M,L);return true;}
,replaceAt:function(O,P,parent){var N=parent.childNodes[P];if(!N){return false;}
;parent.replaceChild(O,N);return true;}
,__dm:{},__dn:{},_allowCreationWithMarkup:function(Q){if(!Q){Q=window;}
;var R=Q.location.href;if(qx.dom.Element.__dn[R]==undefined){try{Q.document.createElement(g);qx.dom.Element.__dn[R]=true;}
catch(e){qx.dom.Element.__dn[R]=false;}
;}
;return qx.dom.Element.__dn[R];}
,getHelperElement:function(S){if(!S){S=window;}
;var T=S.location.href;if(!qx.dom.Element.__dm[T]){var U=qx.dom.Element.__dm[T]=S.document.createElement(n);if(qx.core.Environment.get(a)==j){U.style.display=f;S.document.body.appendChild(U);}
;}
;return qx.dom.Element.__dm[T];}
,create:function(name,bc,W){if(!W){W=window;}
;if(!name){throw new Error(k);}
;var Y=this.__dl;var X=d;for(var bb in bc){if(Y[bb]){X+=bb+b+bc[bb]+p;}
;}
;var ba;if(X!=d){if(qx.dom.Element._allowCreationWithMarkup(W)){ba=W.document.createElement(c+name+m+X+o);}
else {var V=qx.dom.Element.getHelperElement(W);V.innerHTML=c+name+m+X+q+name+o;ba=V.firstChild;}
;}
else {ba=W.document.createElement(name);}
;for(var bb in bc){if(!Y[bb]){qx.bom.element.Attribute.set(ba,bb,bc[bb]);}
;}
;return ba;}
,empty:function(bd){return bd.innerHTML=d;}
}});}
)();
(function(){var b="function",c="html.video.h264",d="html.element.contains",f='video/ogg; codecs="theora, vorbis"',g="html.console",h="html.xul",i="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",j="html.video.ogg",k="http://www.w3.org/TR/SVG11/feature#BasicStructure",l="html.storage.local",m="div",n="qx.bom.client.Html",o="getSelection",p='audio',q='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',r="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",s="html.audio",t="video",u="url(#default#VML)",w="head",x="audio",y="audio/mpeg",z="org.w3c.dom.svg",A="html.classlist",B="html.svg",C="html.video",D="html.geolocation",E="DOMTokenList",F="html.storage.session",G="1.1",H="html.history.state",I="object",J="html.image.naturaldimensions",K="html.audio.aif",L="audio/x-wav",M='<v:shape id="vml_flag1" adj="1" />',N="html.canvas",O="audio/ogg",P="",Q="html.storage.userdata",R="number",S="html.element.compareDocumentPosition",T="audio/x-aiff",U="html.audio.au",V="img",W="html.selection",X="selection",Y="html.xpath",bA="qxtest",bB='video',bC="span",bw="html.element.textcontent",bx="geolocation",by="html.audio.mp3",bz="html.vml",bH="undefined",bI="html.audio.ogg",bN="none",bQ="label",bD='video/webm; codecs="vp8, vorbis"',bE="html.dataurl",bF="html.webworker",bG="html.dataset",bK="1.0",bR="html.audio.wav",bL="html.filereader",bM="audio/basic",bO="#default#userdata",bJ="html.video.webm",bP="display";qx.Bootstrap.define(n,{statics:{getWebWorker:function(){return window.Worker!=null;}
,getFileReader:function(){return window.FileReader!=null;}
,getGeoLocation:function(){return bx in navigator;}
,getAudio:function(){return !!document.createElement(p).canPlayType;}
,getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return P;}
;var a=document.createElement(x);return a.canPlayType(O);}
,getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return P;}
;var a=document.createElement(x);return a.canPlayType(y);}
,getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return P;}
;var a=document.createElement(x);return a.canPlayType(L);}
,getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return P;}
;var a=document.createElement(x);return a.canPlayType(bM);}
,getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return P;}
;var a=document.createElement(x);return a.canPlayType(T);}
,getVideo:function(){return !!document.createElement(bB).canPlayType;}
,getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return P;}
;var v=document.createElement(t);return v.canPlayType(f);}
,getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return P;}
;var v=document.createElement(t);return v.canPlayType(q);}
,getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return P;}
;var v=document.createElement(t);return v.canPlayType(bD);}
,getLocalStorage:function(){try{return window.localStorage!=null;}
catch(bS){return false;}
;}
,getSessionStorage:function(){try{return window.sessionStorage!=null;}
catch(bT){return false;}
;}
,getUserDataStorage:function(){var bU=document.createElement(m);bU.style[bP]=bN;document.getElementsByTagName(w)[0].appendChild(bU);var bV=false;try{bU.addBehavior(bO);bU.load(bA);bV=true;}
catch(e){}
;document.getElementsByTagName(w)[0].removeChild(bU);return bV;}
,getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===E);}
,getXPath:function(){return !!document.evaluate;}
,getXul:function(){try{document.createElementNS(i,bQ);return true;}
catch(e){return false;}
;}
,getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(z,bK)||document.implementation.hasFeature(k,G));}
,getVml:function(){var bW=document.createElement(m);document.body.appendChild(bW);bW.innerHTML=M;bW.firstChild.style.behavior=u;var bX=typeof bW.firstChild.adj==I;document.body.removeChild(bW);return bX;}
,getCanvas:function(){return !!window.CanvasRenderingContext2D;}
,getDataUrl:function(bY){var ca=new Image();ca.onload=ca.onerror=function(){window.setTimeout(function(){bY.call(null,(ca.width==1&&ca.height==1));}
,0);}
;ca.src=r;}
,getDataset:function(){return !!document.documentElement.dataset;}
,getContains:function(){return (typeof document.documentElement.contains!==bH);}
,getCompareDocumentPosition:function(){return (typeof document.documentElement.compareDocumentPosition===b);}
,getTextContent:function(){var cb=document.createElement(bC);return (typeof cb.textContent!==bH);}
,getConsole:function(){return typeof window.console!==bH;}
,getNaturalDimensions:function(){var cc=document.createElement(V);return typeof cc.naturalHeight===R&&typeof cc.naturalWidth===R;}
,getHistoryState:function(){return (typeof window.onpopstate!==bH&&typeof window.history.replaceState!==bH&&typeof window.history.pushState!==bH);}
,getSelection:function(){if(typeof window.getSelection===b){return o;}
;if(typeof document.selection===I){return X;}
;return null;}
},defer:function(cd){qx.core.Environment.add(bF,cd.getWebWorker);qx.core.Environment.add(bL,cd.getFileReader);qx.core.Environment.add(D,cd.getGeoLocation);qx.core.Environment.add(s,cd.getAudio);qx.core.Environment.add(bI,cd.getAudioOgg);qx.core.Environment.add(by,cd.getAudioMp3);qx.core.Environment.add(bR,cd.getAudioWav);qx.core.Environment.add(U,cd.getAudioAu);qx.core.Environment.add(K,cd.getAudioAif);qx.core.Environment.add(C,cd.getVideo);qx.core.Environment.add(j,cd.getVideoOgg);qx.core.Environment.add(c,cd.getVideoH264);qx.core.Environment.add(bJ,cd.getVideoWebm);qx.core.Environment.add(l,cd.getLocalStorage);qx.core.Environment.add(F,cd.getSessionStorage);qx.core.Environment.add(Q,cd.getUserDataStorage);qx.core.Environment.add(A,cd.getClassList);qx.core.Environment.add(Y,cd.getXPath);qx.core.Environment.add(h,cd.getXul);qx.core.Environment.add(N,cd.getCanvas);qx.core.Environment.add(B,cd.getSvg);qx.core.Environment.add(bz,cd.getVml);qx.core.Environment.add(bG,cd.getDataset);qx.core.Environment.addAsync(bE,cd.getDataUrl);qx.core.Environment.add(d,cd.getContains);qx.core.Environment.add(S,cd.getCompareDocumentPosition);qx.core.Environment.add(bw,cd.getTextContent);qx.core.Environment.add(g,cd.getConsole);qx.core.Environment.add(J,cd.getNaturalDimensions);qx.core.Environment.add(H,cd.getHistoryState);qx.core.Environment.add(W,cd.getSelection);}
});}
)();
(function(){var a="readOnly",b="accessKey",c="qx.bom.element.Attribute",d="rowSpan",e="vAlign",f="className",g="textContent",h="'",i="htmlFor",j="longDesc",k="cellSpacing",l="frameBorder",m="='",n="",o="useMap",p="innerText",q="innerHTML",r="tabIndex",s="dateTime",t="maxLength",u="html.element.textcontent",v="mshtml",w="engine.name",x="cellPadding",y="browser.documentmode",z="colSpan",A="undefined";qx.Bootstrap.define(c,{statics:{__do:{names:{"class":f,"for":i,html:q,text:qx.core.Environment.get(u)?g:p,colspan:z,rowspan:d,valign:e,datetime:s,accesskey:b,tabindex:r,maxlength:t,readonly:a,longdesc:j,cellpadding:x,cellspacing:k,frameborder:l,usemap:o},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:n,className:n,innerHTML:n,innerText:n,textContent:n,htmlFor:n,tabIndex:0,maxLength:qx.core.Environment.select(w,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(B){var C=[];var E=this.__do.runtime;for(var D in B){if(!E[D]){C.push(D,m,B[D],h);}
;}
;return C.join(n);}
,get:function(H,name){var F=this.__do;var G;name=F.names[name]||name;if(qx.core.Environment.get(w)==v&&parseInt(qx.core.Environment.get(y),10)<8&&F.original[name]){G=H.getAttribute(name,2);}
else if(F.property[name]){G=H[name];if(typeof F.propertyDefault[name]!==A&&G==F.propertyDefault[name]){if(typeof F.bools[name]===A){return null;}
else {return G;}
;}
;}
else {G=H.getAttribute(name);}
;if(F.bools[name]){return !!G;}
;return G;}
,set:function(K,name,J){if(typeof J===A){return;}
;var I=this.__do;name=I.names[name]||name;if(I.bools[name]){J=!!J;}
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
,toParameter:function(O,S){var R,Q=[];for(R in O){if(O.hasOwnProperty(R)){var P=O[R];if(P instanceof Array){for(var i=0;i<P.length;i++ ){this.__dp(R,P[i],Q,S);}
;}
else {this.__dp(R,P,Q,S);}
;}
;}
;return Q.join(y);}
,__dp:function(W,X,V,U){var T=window.encodeURIComponent;if(U){V.push(T(W).replace(/%20/g,b)+E+T(X).replace(/%20/g,b));}
else {V.push(T(W)+E+T(X));}
;}
,getAbsolute:function(ba){var Y=document.createElement(e);Y.innerHTML=B+ba+x;return Y.firstChild.href;}
}});}
)();
(function(){var a="qx.bom.client.Stylesheet",b="html.stylesheet.deleterule",c="html.stylesheet.insertrule",d="function",e="html.stylesheet.createstylesheet",f="html.stylesheet.addimport",g="html.stylesheet.removeimport",h="object";qx.Bootstrap.define(a,{statics:{__dq:function(){if(!qx.bom.client.Stylesheet.__dr){qx.bom.client.Stylesheet.__dr=qx.bom.Stylesheet.createElement();}
;return qx.bom.client.Stylesheet.__dr;}
,getCreateStyleSheet:function(){return typeof document.createStyleSheet===h;}
,getInsertRule:function(){return typeof qx.bom.client.Stylesheet.__dq().insertRule===d;}
,getDeleteRule:function(){return typeof qx.bom.client.Stylesheet.__dq().deleteRule===d;}
,getAddImport:function(){return (typeof qx.bom.client.Stylesheet.__dq().addImport===h);}
,getRemoveImport:function(){return (typeof qx.bom.client.Stylesheet.__dq().removeImport===h);}
},defer:function(i){qx.core.Environment.add(e,i.getCreateStyleSheet);qx.core.Environment.add(c,i.getInsertRule);qx.core.Environment.add(b,i.getDeleteRule);qx.core.Environment.add(f,i.getAddImport);qx.core.Environment.add(g,i.getRemoveImport);}
});}
)();
(function(){var a="function",b="Invalid argument 'array'",c="qx.debug",d="Invalid argument 'map'",e=" at array index ",f="Could not convert complex objects like ",g="qx.lang.Object",h="undefined",j=" to map syntax",k="object";qx.Bootstrap.define(g,{statics:{empty:function(m){if(qx.core.Environment.get(c)){qx.core.Assert&&qx.core.Assert.assertMap(m,d);}
;for(var n in m){if(m.hasOwnProperty(n)){delete m[n];}
;}
;}
,isEmpty:function(o){if(qx.core.Environment.get(c)){qx.core.Assert&&qx.core.Assert.assertMap(o,d);}
;for(var p in o){return false;}
;return true;}
,getLength:qx.Bootstrap.objectGetLength,getValues:function(r){if(qx.core.Environment.get(c)){qx.core.Assert&&qx.core.Assert.assertMap(r,d);}
;var s=[];var q=Object.keys(r);for(var i=0,l=q.length;i<l;i++ ){s.push(r[q[i]]);}
;return s;}
,mergeWith:qx.Bootstrap.objectMergeWith,clone:function(t,w){if(qx.lang.Type.isObject(t)){var u={};for(var v in t){if(w){u[v]=qx.lang.Object.clone(t[v],w);}
else {u[v]=t[v];}
;}
;return u;}
else if(qx.lang.Type.isArray(t)){var u=[];for(var i=0;i<t.length;i++ ){if(w){u[i]=qx.lang.Object.clone(t[i]);}
else {u[i]=t[i];}
;}
;return u;}
;return t;}
,invert:function(x){if(qx.core.Environment.get(c)){qx.core.Assert&&qx.core.Assert.assertMap(x,d);}
;var y={};for(var z in x){y[x[z].toString()]=z;}
;return y;}
,getKeyFromValue:function(A,B){if(qx.core.Environment.get(c)){qx.core.Assert&&qx.core.Assert.assertMap(A,d);}
;for(var C in A){if(A.hasOwnProperty(C)&&A[C]===B){return C;}
;}
;return null;}
,contains:function(D,E){if(qx.core.Environment.get(c)){qx.core.Assert&&qx.core.Assert.assertMap(D,d);}
;return this.getKeyFromValue(D,E)!==null;}
,fromArray:function(F){if(qx.core.Environment.get(c)){qx.core.Assert&&qx.core.Assert.assertArray(F,b);}
;var G={};for(var i=0,l=F.length;i<l;i++ ){if(qx.core.Environment.get(c)){switch(typeof F[i]){case k:case a:case h:throw new Error(f+F[i]+e+i+j);};}
;G[F[i].toString()]=true;}
;return G;}
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
(function(){var a="abstract",b="Abstract method called.",c="qx.ui.decoration.Abstract";qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:a,members:{__ds:null,_getDefaultInsets:function(){throw new Error(b);}
,_isInitialized:function(){throw new Error(b);}
,_resetInsets:function(){this.__ds=null;}
,getInsets:function(){if(this.__ds){return this.__ds;}
;return this._getDefaultInsets();}
},destruct:function(){this.__ds=null;}
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
(function(){var a="0",b="qx/static",c="http://",d="https://",e="file://",f="qx.util.AliasManager",g="singleton",h=".",i="/",j="static";qx.Class.define(f,{type:g,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);this.__dt={};this.add(j,b);}
,members:{__dt:null,_preprocess:function(n){var m=this._getDynamic();if(m[n]===false){return n;}
else if(m[n]===undefined){if(n.charAt(0)===i||n.charAt(0)===h||n.indexOf(c)===0||n.indexOf(d)===a||n.indexOf(e)===0){m[n]=false;return n;}
;if(this.__dt[n]){return this.__dt[n];}
;var l=n.substring(0,n.indexOf(i));var k=this.__dt[l];if(k!==undefined){m[n]=k+n.substring(l.length);}
;}
;return n;}
,add:function(o,q){this.__dt[o]=q;var p=this._getDynamic();for(var r in p){if(r.substring(0,r.indexOf(i))===o){p[r]=q+r.substring(o.length);}
;}
;}
,remove:function(s){delete this.__dt[s];}
,resolve:function(t){var u=this._getDynamic();if(t!=null){t=this._preprocess(t);}
;return u[t]||t;}
,getAliases:function(){var v={};for(var w in this.__dt){v[w]=this.__dt[w];}
;return v;}
},destruct:function(){this.__dt=null;}
});}
)();
(function(){var a="singleton",b="qx.util.LibraryManager";qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__du:qx.$$libraries||{}},members:{has:function(c){return !!this.self(arguments).__du[c];}
,get:function(d,e){return this.self(arguments).__du[d][e]?this.self(arguments).__du[d][e]:null;}
,set:function(f,g,h){this.self(arguments).__du[f][g]=h;}
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
,statics:{__k:qx.$$resources||{},__dv:{}},members:{has:function(r){return !!this.self(arguments).__k[r];}
,getData:function(s){return this.self(arguments).__k[s]||null;}
,getImageWidth:function(u){var t=this.self(arguments).__k[u];return t?t[0]:null;}
,getImageHeight:function(w){var v=this.self(arguments).__k[w];return v?v[1]:null;}
,getImageFormat:function(y){var x=this.self(arguments).__k[y];return x?x[2]:null;}
,getCombinedFormat:function(D){var A=e;var C=this.self(arguments).__k[D];var z=C&&C.length>4&&typeof (C[4])==i&&this.constructor.__k[C[4]];if(z){var E=C[4];var B=this.constructor.__k[E];A=B[2];}
;return A;}
,toUri:function(I){if(I==null){return I;}
;var F=this.self(arguments).__k[I];if(!F){return I;}
;if(typeof F===i){var H=F;}
else {var H=F[3];if(!H){return I;}
;}
;var G=e;if((qx.core.Environment.get(b)==a)&&qx.core.Environment.get(d)){G=this.self(arguments).__dv[H];}
;return G+qx.util.LibraryManager.getInstance().get(H,n)+m+I;}
,toDataUri:function(L){var K=this.constructor.__k[L];var N=this.constructor.__k[K[4]];var M;if(N){var J=N[4][L];M=k+J[j]+l+J[f]+q+J[h];}
else {M=this.toUri(L);}
;return M;}
},defer:function(P){if((qx.core.Environment.get(b)==a)){if(qx.core.Environment.get(d)){for(var Q in qx.$$libraries){var O;if(qx.util.LibraryManager.getInstance().get(Q,n)){O=qx.util.LibraryManager.getInstance().get(Q,n);}
else {P.__dv[Q]=e;continue;}
;if(O.match(/^\/\//)!=null){P.__dv[Q]=window.location.protocol;}
else if(O.match(/^\//)!=null){P.__dv[Q]=window.location.protocol+c+window.location.host;}
else if(O.match(/^\.\//)!=null){var S=document.URL;P.__dv[Q]=S.substring(0,S.lastIndexOf(m)+1);}
else if(O.match(/^http/)!=null){P.__dv[Q]=e;}
else {var R=window.location.href.indexOf(g);var T;if(R==-1){T=window.location.href;}
else {T=window.location.href.substring(0,R);}
;P.__dv[Q]=T.substring(0,T.lastIndexOf(m)+1);}
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
(function(){var a="innerWidthRight",b="innerColorBottom",c="css.borderradius",d="qx.theme",e="px ",f='""',g="_applyDoubleBorder",h="border-top",i="inset 0 -",j="css.boxsizing",k="innerWidthTop",l="100%",m="qx.debug",n="border-left",o="innerColorRight",p="css.boxshadow",q="innerColorTop",r="innerColorLeft",s="inset ",t="shorthand",u="inset -",v="Color",w="border-box",x="This decorator is already in-use. Modification is not possible anymore!",y="qx.ui.decoration.MDoubleBorder",z="border-bottom",A="innerOpacity is configured but the browser doesn't support RGBA colors.",B=":before",C="inset 0 ",D="px solid ",E="innerWidthBottom",F="css.rgba",G="inherit",H="Number",I="innerWidthLeft",J="px 0 ",K="inset 0 0 0 ",L="border-right",M=" ",N=",",O="absolute";qx.Mixin.define(y,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__dy;this._styleBorder=this.__dw;}
,properties:{innerWidthTop:{check:H,init:0,apply:g},innerWidthRight:{check:H,init:0,apply:g},innerWidthBottom:{check:H,init:0,apply:g},innerWidthLeft:{check:H,init:0,apply:g},innerWidth:{group:[k,a,E,I],mode:t},innerColorTop:{nullable:true,check:v,apply:g},innerColorRight:{nullable:true,check:v,apply:g},innerColorBottom:{nullable:true,check:v,apply:g},innerColorLeft:{nullable:true,check:v,apply:g},innerColor:{group:[q,o,b,r],mode:t},innerOpacity:{check:H,init:1,apply:g}},members:{__dw:function(P){var Y=qx.core.Environment.get(p);var S,bd,innerWidth;if(qx.core.Environment.get(d)){var X=qx.theme.manager.Color.getInstance();S={top:X.resolve(this.getColorTop()),right:X.resolve(this.getColorRight()),bottom:X.resolve(this.getColorBottom()),left:X.resolve(this.getColorLeft())};bd={top:X.resolve(this.getInnerColorTop()),right:X.resolve(this.getInnerColorRight()),bottom:X.resolve(this.getInnerColorBottom()),left:X.resolve(this.getInnerColorLeft())};}
else {S={top:this.getColorTop(),right:this.getColorRight(),bottom:this.getColorBottom(),left:this.getColorLeft()};bd={top:this.getInnerColorTop(),right:this.getInnerColorRight(),bottom:this.getInnerColorBottom(),left:this.getInnerColorLeft()};}
;innerWidth={top:this.getInnerWidthTop(),right:this.getInnerWidthRight(),bottom:this.getInnerWidthBottom(),left:this.getInnerWidthLeft()};var V=this.getWidthTop();if(V>0){P[h]=V+e+this.getStyleTop()+M+S.top;}
;V=this.getWidthRight();if(V>0){P[L]=V+e+this.getStyleRight()+M+S.right;}
;V=this.getWidthBottom();if(V>0){P[z]=V+e+this.getStyleBottom()+M+S.bottom;}
;V=this.getWidthLeft();if(V>0){P[n]=V+e+this.getStyleLeft()+M+S.left;}
;var bc=this.getInnerOpacity();if(bc<1){this.__dx(bd,bc);}
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
,__dx:function(bh,be){if(!qx.core.Environment.get(F)){if(qx.core.Environment.get(m)){qx.log.Logger.warn(A);}
;return;}
;for(var bi in bh){var bf=qx.util.ColorUtil.stringToRgb(bh[bi]);bf.push(be);var bg=qx.util.ColorUtil.rgbToRgbString(bf);bh[bi]=bg;}
;}
,_applyDoubleBorder:function(){if(qx.core.Environment.get(m)){if(this._isInitialized()){throw new Error(x);}
;}
;}
,__dy:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};}
}});}
)();
(function(){var a="css.float",b="foo",c="css.borderimage.standardsyntax",d="borderRadius",e="boxSizing",f="stretch",g='m11',h="content",j="css.inlineblock",k="css.gradient.filter",l="css.appearance",m="css.opacity",n="div",o="pointerEvents",p="css.gradient.radial",q="css.pointerevents",r="input",s="color",t="string",u="borderImage",v="userSelect",w="styleFloat",x="css.textShadow.filter",y="css.usermodify",z="css.boxsizing",A='url("foo.png") 4 4 4 4 fill stretch',B="css.boxmodel",C="qx.bom.client.Css",D="appearance",E="placeholder",F="-moz-none",G="backgroundImage",H="css.textShadow",I="DXImageTransform.Microsoft.Shadow",J="css.boxshadow",K="css.alphaimageloaderneeded",L="css.gradient.legacywebkit",M="css.borderradius",N="linear-gradient(0deg, #fff, #000)",O="textShadow",P="auto",Q="css.borderimage",R="foo.png",S="rgba(1, 2, 3, 0.5)",T="color=#666666,direction=45",U="radial-gradient(0px 0px, cover, red 50%, blue 100%)",V="rgba",W="(",X='url("foo.png") 4 4 4 4 stretch',Y="css.gradient.linear",bC="DXImageTransform.Microsoft.Gradient",bD="css.userselect",bE="span",by="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",bz="mshtml",bA="css.rgba",bB=");",bI="4 fill",bJ='WebKitCSSMatrix',bK="none",bR="startColorStr=#550000FF, endColorStr=#55FFFF00",bF="progid:",bG="css.placeholder",bH="css.userselect.none",bw="css.textoverflow",bM="inline-block",bx="-moz-inline-box",bN="textOverflow",bO="userModify",bP="boxShadow",bL="cssFloat",bQ="border";qx.Bootstrap.define(C,{statics:{__dz:null,getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==bz||!qx.bom.client.Browser.getQuirksMode();return content?h:bQ;}
,getTextOverflow:function(){return qx.bom.Style.getPropertyName(bN);}
,getPlaceholder:function(){var i=document.createElement(r);return E in i;}
,getAppearance:function(){return qx.bom.Style.getPropertyName(D);}
,getBorderRadius:function(){return qx.bom.Style.getPropertyName(d);}
,getBoxShadow:function(){return qx.bom.Style.getPropertyName(bP);}
,getBorderImage:function(){return qx.bom.Style.getPropertyName(u);}
,getBorderImageSyntax:function(){var bT=qx.bom.client.Css.getBorderImage();if(!bT){return null;}
;var bS=document.createElement(n);if(bT===u){bS.style[bT]=A;if(bS.style.borderImageSource.indexOf(R)>=0&&bS.style.borderImageSlice.indexOf(bI)>=0&&bS.style.borderImageRepeat.indexOf(f)>=0){return true;}
;}
else {bS.style[bT]=X;if(bS.style[bT].indexOf(R)>=0){return false;}
;}
;return null;}
,getUserSelect:function(){return qx.bom.Style.getPropertyName(v);}
,getUserSelectNone:function(){var bV=qx.bom.client.Css.getUserSelect();if(bV){var bU=document.createElement(bE);bU.style[bV]=F;return bU.style[bV]===F?F:bK;}
;return null;}
,getUserModify:function(){return qx.bom.Style.getPropertyName(bO);}
,getFloat:function(){var bW=document.documentElement.style;return bW.cssFloat!==undefined?bL:bW.styleFloat!==undefined?w:null;}
,getTranslate3d:function(){return bJ in window&&g in new WebKitCSSMatrix();}
,getLinearGradient:function(){qx.bom.client.Css.__dz=false;var cb=N;var bX=document.createElement(n);var bY=qx.bom.Style.getAppliedStyle(bX,G,cb);if(!bY){cb=by;var bY=qx.bom.Style.getAppliedStyle(bX,G,cb,false);if(bY){qx.bom.client.Css.__dz=true;}
;}
;if(!bY){return null;}
;var ca=/(.*?)\(/.exec(bY);return ca?ca[1]:null;}
,getFilterGradient:function(){return qx.bom.client.Css.__dA(bC,bR);}
,getRadialGradient:function(){var cf=U;var cc=document.createElement(n);var cd=qx.bom.Style.getAppliedStyle(cc,G,cf);if(!cd){return null;}
;var ce=/(.*?)\(/.exec(cd);return ce?ce[1]:null;}
,getLegacyWebkitGradient:function(){if(qx.bom.client.Css.__dz===null){qx.bom.client.Css.getLinearGradient();}
;return qx.bom.client.Css.__dz;}
,getRgba:function(){var cg;try{cg=document.createElement(n);}
catch(ch){cg=document.createElement();}
;try{cg.style[s]=S;if(cg.style[s].indexOf(V)!=-1){return true;}
;}
catch(ci){}
;return false;}
,getBoxSizing:function(){return qx.bom.Style.getPropertyName(e);}
,getInlineBlock:function(){var cj=document.createElement(bE);cj.style.display=bM;if(cj.style.display==bM){return bM;}
;cj.style.display=bx;if(cj.style.display!==bx){return bx;}
;return null;}
,getOpacity:function(){return (typeof document.documentElement.style.opacity==t);}
,getTextShadow:function(){return !!qx.bom.Style.getPropertyName(O);}
,getFilterTextShadow:function(){return qx.bom.client.Css.__dA(I,T);}
,__dA:function(cn,cl){var cm=false;var co=bF+cn+W+cl+bB;var ck=document.createElement(n);document.body.appendChild(ck);ck.style.filter=co;if(ck.filters&&ck.filters.length>0&&ck.filters.item(cn).enabled==true){cm=true;}
;document.body.removeChild(ck);return cm;}
,getAlphaImageLoaderNeeded:function(){return qx.bom.client.Engine.getName()==bz&&qx.bom.client.Browser.getDocumentMode()<9;}
,getPointerEvents:function(){var cp=document.documentElement;if(o in cp.style){var cr=cp.style.pointerEvents;cp.style.pointerEvents=P;cp.style.pointerEvents=b;var cq=cp.style.pointerEvents==P;cp.style.pointerEvents=cr;return cq;}
;return false;}
},defer:function(cs){qx.core.Environment.add(bw,cs.getTextOverflow);qx.core.Environment.add(bG,cs.getPlaceholder);qx.core.Environment.add(M,cs.getBorderRadius);qx.core.Environment.add(J,cs.getBoxShadow);qx.core.Environment.add(Y,cs.getLinearGradient);qx.core.Environment.add(k,cs.getFilterGradient);qx.core.Environment.add(p,cs.getRadialGradient);qx.core.Environment.add(L,cs.getLegacyWebkitGradient);qx.core.Environment.add(B,cs.getBoxModel);qx.core.Environment.add(bA,cs.getRgba);qx.core.Environment.add(Q,cs.getBorderImage);qx.core.Environment.add(c,cs.getBorderImageSyntax);qx.core.Environment.add(y,cs.getUserModify);qx.core.Environment.add(bD,cs.getUserSelect);qx.core.Environment.add(bH,cs.getUserSelectNone);qx.core.Environment.add(l,cs.getAppearance);qx.core.Environment.add(a,cs.getFloat);qx.core.Environment.add(z,cs.getBoxSizing);qx.core.Environment.add(j,cs.getInlineBlock);qx.core.Environment.add(m,cs.getOpacity);qx.core.Environment.add(H,cs.getTextShadow);qx.core.Environment.add(x,cs.getFilterTextShadow);qx.core.Environment.add(K,cs.getAlphaImageLoaderNeeded);qx.core.Environment.add(q,cs.getPointerEvents);}
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
;var V=qx.util.AliasManager.getInstance().resolve(this.getBorderImage());var W=this.__dB(V);return {top:this.getSliceTop()||W[0],right:this.getSliceRight()||W[1],bottom:this.getSliceBottom()||W[2],left:this.getSliceLeft()||W[3]};}
,_applyBorderImage:function(){if(qx.core.Environment.get(o)){if(this._isInitialized()){throw new Error(H);}
;}
;}
,__dB:function(be){var bd=this.getBorderImageMode();var bf=0;var bb=0;var bc=0;var bg=0;var bh=/(.*)(\.[a-z]+)$/.exec(be);var X=bh[1];var ba=bh[2];var Y=qx.util.ResourceManager.getInstance();if(bd==K||bd==w){bf=Y.getImageHeight(X+i+ba);bc=Y.getImageHeight(X+q+ba);}
;if(bd==K||bd==E){bb=Y.getImageWidth(X+m+ba);bg=Y.getImageWidth(X+e+ba);}
;return [bf,bb,bc,bg];}
}});}
)();
(function(){var a=" 0",b="</div>",c="),to(",d="px",e="css.borderradius",f="from(",g=")",h="background-image",i="background",j="<div style='width: 100%; height: 100%; position: absolute;",k="filter",l="background-size",m="', ",n="'></div>",o="0",p="_applyLinearBackgroundGradient",q="-webkit-gradient(linear,",r="startColorPosition",s="qx.debug",t="background-color",u="deg, ",v="url(",w="css.gradient.legacywebkit",x="EndColorStr='#FF",y="startColor",z="shorthand",A="qx.theme",B="100% 100%",C="Color",D="MBoxShadow",E="<div style=\"position: absolute; width: 100%; height: 100%; ",F="(GradientType=",G="vertical",H="",I="transparent",J="qx.ui.decoration.MLinearBackgroundGradient",K="(",L="endColorPosition",M="canvas",N="';)\">",O="css.gradient.linear",P="';)",Q="endColor",R=", ",S="css.gradient.filter",T="horizontal",U="Number",V="progid:DXImageTransform.Microsoft.Gradient",W="StartColorStr='#FF",X='2d',Y="%",bj=" ",bk="white",bl="This decorator is already in-use. Modification is not possible anymore!",bg="linear-gradient",bh="filter:progid:DXImageTransform.Microsoft.Gradient",bi=",";qx.Mixin.define(J,{properties:{startColor:{check:C,nullable:true,apply:p},endColor:{check:C,nullable:true,apply:p},orientation:{check:[T,G],init:G,apply:p},startColorPosition:{check:U,init:0,apply:p},endColorPosition:{check:U,init:100,apply:p},colorPositionUnit:{check:[d,Y],init:Y,apply:p},gradientStart:{group:[y,r],mode:z},gradientEnd:{group:[Q,L],mode:z}},members:{__dC:null,_styleLinearBackgroundGradient:function(bm){var bw=this.__dD();var bA=bw.start;var bu=bw.end;var bs;if(!bA||!bu){return;}
;var bD=this.getColorPositionUnit();if(qx.core.Environment.get(w)){bD=bD===d?H:bD;if(this.getOrientation()==T){var bz=this.getStartColorPosition()+bD+a+bD;var bx=this.getEndColorPosition()+bD+a+bD;}
else {var bz=o+bD+bj+this.getStartColorPosition()+bD;var bx=o+bD+bj+this.getEndColorPosition()+bD;}
;var bp=f+bA+c+bu+g;bs=q+bz+bi+bx+bi+bp+g;bm[i]=bs;}
else if(qx.core.Environment.get(S)&&!qx.core.Environment.get(O)&&qx.core.Environment.get(e)){if(!this.__dC){this.__dC=document.createElement(M);}
;var bq=this.getOrientation()==G;var bw=this.__dD();var bt=bq?200:1;var bv=bq?1:200;this.__dC.width=bv;this.__dC.height=bt;var br=this.__dC.getContext(X);if(bq){var bC=br.createLinearGradient(0,0,0,bt);}
else {var bC=br.createLinearGradient(0,0,bv,0);}
;bC.addColorStop(this.getStartColorPosition()/100,bw.start);bC.addColorStop(this.getEndColorPosition()/100,bw.end);br.fillStyle=bC;br.fillRect(0,0,bv,bt);var bs=v+this.__dC.toDataURL()+g;bm[h]=bs;bm[l]=B;}
else if(qx.core.Environment.get(S)&&!qx.core.Environment.get(O)){var bw=this.__dD();var bB=this.getOrientation()==T?1:0;var bA=bw.start;var bu=bw.end;if(!qx.util.ColorUtil.isHex6String(bA)){bA=qx.util.ColorUtil.stringToRgb(bA);bA=qx.util.ColorUtil.rgbToHexString(bA);}
;if(!qx.util.ColorUtil.isHex6String(bu)){bu=qx.util.ColorUtil.stringToRgb(bu);bu=qx.util.ColorUtil.rgbToHexString(bu);}
;bA=bA.substring(1,bA.length);bu=bu.substring(1,bu.length);bs=V+F+bB+R+W+bA+m+x+bu+P;if(bm[k]){bm[k]+=R+bs;}
else {bm[k]=bs;}
;if(!bm[t]||bm[t]==I){bm[t]=bk;}
;}
else {var bE=this.getOrientation()==T?0:270;var bo=bA+bj+this.getStartColorPosition()+bD;var bn=bu+bj+this.getEndColorPosition()+bD;var by=qx.core.Environment.get(O);if(by===bg){bE=this.getOrientation()==T?bE+90:bE-90;}
;bs=by+K+bE+u+bo+bi+bn+g;if(bm[h]){bm[h]+=R+bs;}
else {bm[h]=bs;}
;}
;}
,__dD:function(){if(qx.core.Environment.get(A)){var bF=qx.theme.manager.Color.getInstance();var bH=bF.resolve(this.getStartColor());var bG=bF.resolve(this.getEndColor());}
else {var bH=this.getStartColor();var bG=this.getEndColor();}
;return {start:bH,end:bG};}
,_getContent:function(){if(qx.core.Environment.get(S)&&!qx.core.Environment.get(O)){var bK=this.__dD();var bN=this.getOrientation()==T?1:0;var bM=qx.util.ColorUtil.hex3StringToHex6String(bK.start);var bJ=qx.util.ColorUtil.hex3StringToHex6String(bK.end);bM=bM.substring(1,bM.length);bJ=bJ.substring(1,bJ.length);var bL=H;if(this.classname.indexOf(D)!=-1){var bI={};this._styleBoxShadow(bI);bL=j+qx.bom.element.Style.compile(bI)+n;}
;return E+bh+F+bN+R+W+bM+m+x+bJ+N+bL+b;}
;return H;}
,_applyLinearBackgroundGradient:function(){if(qx.core.Environment.get(s)){if(this._isInitialized()){throw new Error(bl);}
;}
;}
}});}
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
(function(){var a="cursor:",b="engine.name",c="ns-resize",d="",e="mshtml",f="nw-resize",g="n-resize",h="engine.version",i="nesw-resize",j="opera",k="browser.documentmode",l=";",m="nwse-resize",n="ew-resize",o="qx.bom.element.Cursor",p="ne-resize",q="e-resize",r="browser.quirksmode",s="cursor";qx.Bootstrap.define(o,{statics:{__dG:{},compile:function(t){return a+(this.__dG[t]||t)+l;}
,get:function(v,u){return qx.bom.element.Style.get(v,s,u,false);}
,set:function(x,w){x.style.cursor=this.__dG[w]||w;}
,reset:function(y){y.style.cursor=d;}
},defer:function(z){if(qx.core.Environment.get(b)==e&&((parseFloat(qx.core.Environment.get(h))<9||qx.core.Environment.get(k)<9)&&!qx.core.Environment.get(r))){z.__dG[i]=p;z.__dG[m]=f;if(((parseFloat(qx.core.Environment.get(h))<8||qx.core.Environment.get(k)<8)&&!qx.core.Environment.get(r))){z.__dG[n]=q;z.__dG[c]=g;}
;}
else if(qx.core.Environment.get(b)==j&&parseInt(qx.core.Environment.get(h))<12){z.__dG[i]=p;z.__dG[m]=f;}
;}
});}
)();
(function(){var a="This client does not support the boxSizing value",b="border-box",c="qx.bom.element.BoxSizing",d="css.boxsizing",e="",f="This client does not support dynamic modification of the boxSizing property.",g="qx.debug",h="boxSizing",i="content-box",j=":",k=";";qx.Bootstrap.define(c,{statics:{__dE:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dF:function(m){var l=this.__dE;return l.tags[m.tagName.toLowerCase()]||l.types[m.type];}
,compile:function(n){if(qx.core.Environment.get(d)){var o=qx.bom.Style.getCssName(qx.core.Environment.get(d));return o+j+n+k;}
else {if(qx.core.Environment.get(g)){qx.log.Logger.warn(this,f);qx.log.Logger.trace();}
;}
;}
,get:function(p){if(qx.core.Environment.get(d)){return qx.bom.element.Style.get(p,h,null,false)||e;}
;if(qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(p))){if(!this.__dF(p)){return i;}
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
(function(){var a="css.float",b="px",c="Cascaded styles are not supported in this browser!",d="css.appearance",e="pixelRight",f="float",g="css.userselect",h="css.boxsizing",i="css.textoverflow",j="qx.debug",k="pixelHeight",l=":",m="pixelTop",n="browser.documentmode",o="css.borderimage",p="Invalid argument 'name'",q="pixelLeft",r="engine.name",s="css.usermodify",t="mshtml",u="qx.bom.element.Style",v="Invalid argument 'smart'",w="",x="pixelBottom",y="Invalid argument 'styles'",z="pixelWidth",A=";",B="Invalid argument 'element'",C="style";qx.Bootstrap.define(u,{statics:{__dH:null,__dI:null,__dJ:function(){var E={"appearance":qx.core.Environment.get(d),"userSelect":qx.core.Environment.get(g),"textOverflow":qx.core.Environment.get(i),"borderImage":qx.core.Environment.get(o),"float":qx.core.Environment.get(a),"userModify":qx.core.Environment.get(s),"boxSizing":qx.core.Environment.get(h)};this.__dI={};for(var D in qx.lang.Object.clone(E)){if(!E[D]){delete E[D];}
else {this.__dI[D]=D==f?f:qx.bom.Style.getCssName(E[D]);}
;}
;this.__dH=E;}
,__dK:function(name){var F=qx.bom.Style.getPropertyName(name);if(F){this.__dH[name]=F;}
;return F;}
,__dL:{width:z,height:k,left:q,right:e,top:m,bottom:x},__dM:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing},compile:function(G){var J=[];var K=this.__dM;var I=this.__dI;var name,H;for(name in G){H=G[name];if(H==null){continue;}
;name=this.__dH[name]||this.__dK(name)||name;if(K[name]){J.push(K[name].compile(H));}
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
,isPropertySupported:function(O){return (this.__dM[O]||this.__dH[O]||O in document.documentElement.style);}
,COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(R,name,Q,P){if(qx.core.Environment.get(j)){qx.core.Assert.assertElement(R,B);qx.core.Assert.assertString(name,p);if(P!==undefined){qx.core.Assert.assertBoolean(P,v);}
;}
;name=this.__dH[name]||this.__dK(name)||name;if(P!==false&&this.__dM[name]){this.__dM[name].set(R,Q);}
else {R.style[name]=Q!==null?Q:w;}
;}
,setStyles:function(Y,S,W){if(qx.core.Environment.get(j)){qx.core.Assert.assertElement(Y,B);qx.core.Assert.assertMap(S,y);if(W!==undefined){qx.core.Assert.assertBoolean(W,v);}
;}
;var V=this.__dH;var ba=this.__dM;var T=Y.style;for(var X in S){var U=S[X];var name=V[X]||this.__dK(X)||X;if(U===undefined){if(W!==false&&ba[name]){ba[name].reset(Y);}
else {T[name]=w;}
;}
else {if(W!==false&&ba[name]){ba[name].set(Y,U);}
else {T[name]=U!==null?U:w;}
;}
;}
;}
,reset:function(bc,name,bb){name=this.__dH[name]||this.__dK(name)||name;if(bb!==false&&this.__dM[name]){this.__dM[name].reset(bc);}
else {bc.style[name]=w;}
;}
,get:qx.core.Environment.select(r,{"mshtml":function(bf,name,bg,bj){name=this.__dH[name]||this.__dK(name)||name;if(bj!==false&&this.__dM[name]){return this.__dM[name].get(bf,bg);}
;if(!bf.currentStyle){return bf.style[name]||w;}
;switch(bg){case this.LOCAL_MODE:return bf.style[name]||w;case this.CASCADED_MODE:return bf.currentStyle[name]||w;default:var bh=bf.currentStyle[name]||bf.style[name]||w;if(/^-?[\.\d]+(px)?$/i.test(bh)){return bh;}
;var bi=this.__dL[name];if(bi){var be=bf.style[name];bf.style[name]=bh||0;var bd=bf.style[bi]+b;bf.style[name]=be;return bd;}
;return bh;};}
,"default":function(bm,name,bn,bo){name=this.__dH[name]||this.__dK(name)||name;if(bo!==false&&this.__dM[name]){return this.__dM[name].get(bm,bn);}
;switch(bn){case this.LOCAL_MODE:return bm.style[name]||w;case this.CASCADED_MODE:if(bm.currentStyle){return bm.currentStyle[name]||w;}
;throw new Error(c);default:var bl=qx.dom.Node.getDocument(bm);var bk=bl.defaultView.getComputedStyle(bm,null);if(bk&&bk[name]){return bk[name];}
;return bm.style[name]||w;};}
})},defer:function(bp){bp.__dJ();}
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
(function(){var a="undefined",b="qx.bom.Viewport";qx.Bootstrap.define(b,{statics:{getWidth:function(c){var c=c||window;var d=c.document;return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;}
,getHeight:function(e){var e=e||window;var f=e.document;return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;}
,getScrollLeft:function(g){var g=g?g:window;if(typeof g.pageXOffset!==a){return g.pageXOffset;}
;var h=g.document;return h.documentElement.scrollLeft||h.body.scrollLeft;}
,getScrollTop:function(i){var i=i?i:window;if(typeof i.pageYOffset!==a){return i.pageYOffset;}
;var j=i.document;return j.documentElement.scrollTop||j.body.scrollTop;}
,__dN:function(k){var m=this.getWidth(k)>this.getHeight(k)?90:0;var l=k.orientation;if(l==null||Math.abs(l%180)==m){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};}
else {return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};}
;}
,__dO:null,getOrientation:function(n){var n=n||window.top;var o=n.orientation;if(o==null){o=this.getWidth(n)>this.getHeight(n)?90:0;}
else {if(this.__dO==null){this.__dO=this.__dN(n);}
;o=this.__dO[o];}
;return o;}
,isLandscape:function(p){return this.getWidth(p)>=this.getHeight(p);}
,isPortrait:function(q){return this.getWidth(q)<this.getHeight(q);}
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
(function(){var a="qx.ui.decoration.Decorator",b="_style",c="_getDefaultInsetsFor",d="bottom",e="top",f="left",g="right";qx.Class.define(a,{extend:qx.ui.decoration.Abstract,implement:[qx.ui.decoration.IDecorator],include:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderImage],members:{__dP:false,getPadding:function(){var k=this.getInset();var h=this._getDefaultInsetsForBorderImage();var n=k.top-(h.top?h.top:this.getWidthTop());var m=k.right-(h.right?h.right:this.getWidthRight());var j=k.bottom-(h.bottom?h.bottom:this.getWidthBottom());var l=k.left-(h.left?h.left:this.getWidthLeft());return {top:k.top?n:this.getInnerWidthTop(),right:k.right?m:this.getInnerWidthRight(),bottom:k.bottom?j:this.getInnerWidthBottom(),left:k.left?l:this.getInnerWidthLeft()};}
,getStyles:function(r){if(r){return this._getStyles();}
;var q={};var p=this._getStyles();for(var o in p){q[qx.lang.String.camelCase(o)]=p[o];}
;return q;}
,_getStyles:function(){var s={};for(var name in this){if(name.indexOf(b)==0&&this[name] instanceof Function){this[name](s);}
;}
;this.__dP=true;return s;}
,_getDefaultInsets:function(){var w=[e,g,d,f];var u={};for(var name in this){if(name.indexOf(c)==0&&this[name] instanceof Function){var v=this[name]();for(var i=0;i<w.length;i++ ){var t=w[i];if(u[t]==undefined){u[t]=v[t];}
;if(v[t]>u[t]){u[t]=v[t];}
;}
;}
;}
;if(u[e]!=undefined){return u;}
;return {top:0,right:0,bottom:0,left:0};}
,_isInitialized:function(){return this.__dP;}
}});}
)();
(function(){var a="_applyTheme",b="qx.theme.manager.Font",c="_dynamic",d="Theme",e="changeTheme",f="singleton";qx.Class.define(b,{type:f,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:a,event:e}},members:{resolveDynamic:function(h){var g=this._dynamic;return h instanceof qx.bom.Font?h:g[h];}
,resolve:function(l){var k=this._dynamic;var i=k[l];if(i){return i;}
;var j=this.getTheme();if(j!==null&&j.fonts[l]){var m=this.__dR(j.fonts[l]);return k[l]=(new m).set(j.fonts[l]);}
;return l;}
,isDynamic:function(q){var p=this._dynamic;if(q&&(q instanceof qx.bom.Font||p[q]!==undefined)){return true;}
;var o=this.getTheme();if(o!==null&&q&&o.fonts[q]){var n=this.__dR(o.fonts[q]);p[q]=(new n).set(o.fonts[q]);return true;}
;return false;}
,__dQ:function(s,r){if(s[r].include){var t=s[s[r].include];s[r].include=null;delete s[r].include;s[r]=qx.lang.Object.mergeWith(s[r],t,false);this.__dQ(s,r);}
;}
,_applyTheme:function(y){var u=this._dynamic;for(var x in u){if(u[x].themed){u[x].dispose();delete u[x];}
;}
;if(y){var v=y.fonts;for(var x in v){if(v[x].include&&v[v[x].include]){this.__dQ(v,x);}
;var w=this.__dR(v[x]);u[x]=(new w).set(v[x]);u[x].themed=true;}
;}
;this._setDynamic(u);}
,__dR:function(z){if(z.sources){return qx.bom.webfonts.WebFont;}
;return qx.bom.Font;}
},destruct:function(){this._disposeMap(c);}
});}
)();
(function(){var a="Boolean",b="px",c="_applyItalic",d="_applyBold",e="underline",f="_applyTextShadow",g="Integer",h="_applyFamily",j="_applyLineHeight",k='"',m="Array",n="line-through",o="overline",p="Color",q="String",r="",s="italic",t="normal",u="qx.bom.Font",v="bold",w="Number",x="_applyDecoration",y=" ",z="_applySize",A=",",B="_applyColor";qx.Class.define(u,{extend:qx.core.Object,construct:function(D,C){qx.core.Object.call(this);this.__dS={fontFamily:r,fontSize:null,fontWeight:null,fontStyle:null,textDecoration:null,lineHeight:null,color:null,textShadow:null};if(D!==undefined){this.setSize(D);}
;if(C!==undefined){this.setFamily(C);}
;}
,statics:{fromString:function(H){var I=new qx.bom.Font();var F=H.split(/\s+/);var name=[];var G;for(var i=0;i<F.length;i++ ){switch(G=F[i]){case v:I.setBold(true);break;case s:I.setItalic(true);break;case e:I.setDecoration(e);break;default:var E=parseInt(G,10);if(E==G||qx.lang.String.contains(G,b)){I.setSize(E);}
else {name.push(G);}
;break;};}
;if(name.length>0){I.setFamily(name);}
;return I;}
,fromConfig:function(K){var J=new qx.bom.Font;J.set(K);return J;}
,__dT:{fontFamily:r,fontSize:r,fontWeight:r,fontStyle:r,textDecoration:r,lineHeight:1.2,color:r,textShadow:r},getDefaultStyles:function(){return this.__dT;}
},properties:{size:{check:g,nullable:true,apply:z},lineHeight:{check:w,nullable:true,apply:j},family:{check:m,nullable:true,apply:h},bold:{check:a,nullable:true,apply:d},italic:{check:a,nullable:true,apply:c},decoration:{check:[e,n,o],nullable:true,apply:x},color:{check:p,nullable:true,apply:B},textShadow:{nullable:true,check:q,apply:f}},members:{__dS:null,_applySize:function(M,L){this.__dS.fontSize=M===null?null:M+b;}
,_applyLineHeight:function(O,N){this.__dS.lineHeight=O===null?null:O;}
,_applyFamily:function(P,Q){var R=r;for(var i=0,l=P.length;i<l;i++ ){if(P[i].indexOf(y)>0){R+=k+P[i]+k;}
else {R+=P[i];}
;if(i!==l-1){R+=A;}
;}
;this.__dS.fontFamily=R;}
,_applyBold:function(T,S){this.__dS.fontWeight=T==null?null:T?v:t;}
,_applyItalic:function(V,U){this.__dS.fontStyle=V==null?null:V?s:t;}
,_applyDecoration:function(X,W){this.__dS.textDecoration=X==null?null:X;}
,_applyColor:function(ba,Y){this.__dS.color=null;if(ba){this.__dS.color=qx.theme.manager.Color.getInstance().resolve(ba);}
;}
,_applyTextShadow:function(bc,bb){this.__dS.textShadow=bc==null?null:bc;}
,getStyles:function(){return this.__dS;}
}});}
)();
(function(){var a="qx.bom.webfonts.WebFont",b="",c="qx.debug",d="changeStatus",e="_applySources",f="qx.event.type.Data",g=" was not applied, perhaps the source file could not be loaded.",h="WebFont ";qx.Class.define(a,{extend:qx.bom.Font,events:{"changeStatus":f},properties:{sources:{nullable:true,apply:e}},members:{__dU:null,_applySources:function(m,o){var j=[];for(var i=0,l=m.length;i<l;i++ ){var k=this._quoteFontFamily(m[i].family);j.push(k);var n=m[i].source;qx.bom.webfonts.Manager.getInstance().require(k,n,this._onWebFontChangeStatus,this);}
;this.setFamily(j.concat(this.getFamily()));}
,_onWebFontChangeStatus:function(p){var q=p.getData();this.fireDataEvent(d,q);if(qx.core.Environment.get(c)){if(q.valid===false){this.warn(h+q.family+g);}
;}
;}
,_quoteFontFamily:function(r){return r.replace(/["']/g,b);}
}});}
)();
(function(){var a="m",b="os.name",c=")",d="os.version",e="qx.bom.webfonts.Manager",f="svg",g="chrome",h="browser.name",k="singleton",n=",\n",o="src: ",p="mobileSafari",q="'eot)",r="');",s="qx.debug",t="interval",u="#",v="firefox",w="!",y="eot",z="ios",A="changeStatus",B="\.(",C="}\n",D="font-family: ",E="browser.documentmode",F="mobile safari",G="safari",H="@font-face.*?",I="",J="ttf",K=";\n",L="') format('svg')",M="') format('woff')",N="('embedded-opentype')",O="browser.version",P="opera",Q="engine.version",R="Couldn't create @font-face rule for WebFont ",S="mshtml",T="engine.name",U="url('",V="src: url('",W="('embedded-opentype)",X="\nfont-style: normal;\nfont-weight: normal;",Y="?#iefix') format('embedded-opentype')",bl="woff",bm="ie",bn=";",bh="'eot')",bi="Error while adding @font-face rule:",bj="@font-face {",bk="') format('truetype')";qx.Class.define(e,{extend:qx.core.Object,type:k,construct:function(){qx.core.Object.call(this);this.__dV=[];this.__dW={};this.__dX=[];this.__dY=this.getPreferredFormats();}
,statics:{FONT_FORMATS:[y,bl,J,f],VALIDATION_TIMEOUT:5000},members:{__dV:null,__ea:null,__dW:null,__dY:null,__dX:null,__eb:null,require:function(bq,br,bs,bu){var bp=[];for(var i=0,l=br.length;i<l;i++ ){var bt=br[i].split(u);var bo=qx.util.ResourceManager.getInstance().toUri(bt[0]);if(bt.length>1){bo=bo+u+bt[1];}
;bp.push(bo);}
;if(qx.core.Environment.get(T)==S&&(parseInt(qx.core.Environment.get(Q))<9)||qx.core.Environment.get(E)<9){if(!this.__eb){this.__eb=new qx.event.Timer(100);this.__eb.addListener(t,this.__ed,this);}
;if(!this.__eb.isEnabled()){this.__eb.start();}
;this.__dX.push([bq,bp,bs,bu]);}
else {this.__ec(bq,bp,bs,bu);}
;}
,remove:function(bw){var bv=null;for(var i=0,l=this.__dV.length;i<l;i++ ){if(this.__dV[i]==bw){bv=i;this.__ej(bw);break;}
;}
;if(bv){qx.lang.Array.removeAt(this.__dV,bv);}
;if(bw in this.__dW){this.__dW[bw].dispose();delete this.__dW[bw];}
;}
,getPreferredFormats:function(){var bx=[];var bB=qx.core.Environment.get(h);var by=qx.core.Environment.get(O);var bA=qx.core.Environment.get(b);var bz=qx.core.Environment.get(d);if((bB==bm&&qx.core.Environment.get(E)>=9)||(bB==v&&by>=3.6)||(bB==g&&by>=6)){bx.push(bl);}
;if((bB==P&&by>=10)||(bB==G&&by>=3.1)||(bB==v&&by>=3.5)||(bB==g&&by>=4)||(bB==F&&bA==z&&bz>=4.2)){bx.push(J);}
;if(bB==bm&&by>=4){bx.push(y);}
;if(bB==p&&bA==z&&bz>=4.1){bx.push(f);}
;return bx;}
,removeStyleSheet:function(){this.__dV=[];if(this.__ea){qx.bom.Stylesheet.removeSheet(this.__ea);}
;this.__ea=null;}
,__ec:function(bE,bG,bD,bH){if(!qx.lang.Array.contains(this.__dV,bE)){var bI=this.__ef(bG);var bF=this.__eg(bE,bI);if(!bF){throw new Error(R+bE+w);}
;if(!this.__ea){this.__ea=qx.bom.Stylesheet.createElement();}
;try{this.__ei(bF);}
catch(bJ){if(qx.core.Environment.get(s)){this.warn(bi,bJ.message);return;}
;}
;this.__dV.push(bE);}
;if(!this.__dW[bE]){this.__dW[bE]=new qx.bom.webfonts.Validator(bE);this.__dW[bE].setTimeout(qx.bom.webfonts.Manager.VALIDATION_TIMEOUT);this.__dW[bE].addListenerOnce(A,this.__ee,this);}
;if(bD){var bC=bH||window;this.__dW[bE].addListenerOnce(A,bD,bC);}
;this.__dW[bE].validate();}
,__ed:function(){if(this.__dX.length==0){this.__eb.stop();return;}
;var bK=this.__dX.shift();this.__ec.apply(this,bK);}
,__ee:function(bL){var bM=bL.getData();if(bM.valid===false){qx.event.Timer.once(function(){this.remove(bM.family);}
,this,250);}
;}
,__ef:function(bN){var bP=qx.bom.webfonts.Manager.FONT_FORMATS;var bO={};for(var i=0,l=bN.length;i<l;i++ ){var bQ=null;for(var x=0;x<bP.length;x++ ){var bR=new RegExp(B+bP[x]+c);var bS=bR.exec(bN[i]);if(bS){bQ=bS[1];}
;}
;if(bQ){bO[bQ]=bN[i];}
;}
;return bO;}
,__eg:function(bV,bY){var bX=[];var bT=this.__dY.length>0?this.__dY:qx.bom.webfonts.Manager.FONT_FORMATS;for(var i=0,l=bT.length;i<l;i++ ){var bU=bT[i];if(bY[bU]){bX.push(this.__eh(bU,bY[bU]));}
;}
;var bW=o+bX.join(n)+bn;bW=D+bV+K+bW;bW=bW+X;return bW;}
,__eh:function(cb,ca){switch(cb){case y:return U+ca+r+V+ca+Y;case bl:return U+ca+M;case J:return U+ca+bk;case f:return U+ca+L;default:return null;};}
,__ei:function(cd){var cc=bj+cd+C;if(qx.core.Environment.get(h)==bm&&qx.core.Environment.get(E)<9){var ce=this.__ek(this.__ea.cssText);ce+=cc;this.__ea.cssText=ce;}
else {this.__ea.insertRule(cc,this.__ea.cssRules.length);}
;}
,__ej:function(cf){var ci=new RegExp(H+cf,a);for(var i=0,l=document.styleSheets.length;i<l;i++ ){var cg=document.styleSheets[i];if(cg.cssText){var ch=cg.cssText.replace(/\n/g,I).replace(/\r/g,I);ch=this.__ek(ch);if(ci.exec(ch)){ch=ch.replace(ci,I);}
;cg.cssText=ch;}
else if(cg.cssRules){for(var j=0,m=cg.cssRules.length;j<m;j++ ){var ch=cg.cssRules[j].cssText.replace(/\n/g,I).replace(/\r/g,I);if(ci.exec(ch)){this.__ea.deleteRule(j);return;}
;}
;}
;}
;}
,__ek:function(cj){return cj.replace(q,bh).replace(W,N);}
},destruct:function(){delete this.__dV;this.removeStyleSheet();for(var ck in this.__dW){this.__dW[ck].dispose();}
;qx.bom.webfonts.Validator.removeDefaultHelperElements();}
});}
)();
(function(){var a="qx.event.Timer",b="_applyInterval",c="interval",d="func is not a function",f="Boolean",g="qx.debug",h="No timeout given",i="Integer",j="qx.event.type.Event",k="_applyEnabled";qx.Class.define(a,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);this.setEnabled(false);if(l!=null){this.setInterval(l);}
;var self=this;this.__el=function(){self._oninterval.call(self);}
;}
,events:{"interval":j},statics:{once:function(m,n,o){if(qx.core.Environment.get(g)){qx.core.Assert.assertFunction(m,d);qx.core.Assert.assertNotUndefined(o,h);}
;var p=new qx.event.Timer(o);p.__em=m;p.addListener(c,function(e){p.stop();m.call(n,e);p.dispose();n=null;}
,n);p.start();return p;}
},properties:{enabled:{init:true,check:f,apply:k},interval:{check:i,init:1000,apply:b}},members:{__en:null,__el:null,_applyInterval:function(r,q){if(this.getEnabled()){this.restart();}
;}
,_applyEnabled:function(t,s){if(s){window.clearInterval(this.__en);this.__en=null;}
else if(t){this.__en=window.setInterval(this.__el,this.getInterval());}
;}
,start:function(){this.setEnabled(true);}
,startWith:function(u){this.setInterval(u);this.start();}
,stop:function(){this.setEnabled(false);}
,restart:function(){this.stop();this.start();}
,restartWith:function(v){this.stop();this.startWith(v);}
,_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;}
;if(this.getEnabled()){this.fireEvent(c);}
;}
)},destruct:function(){if(this.__en){window.clearInterval(this.__en);}
;this.__en=this.__el=null;}
});}
)();
(function(){var a="sans-serif",b="changeStatus",c="Integer",d="auto",e="qx.event.type.Data",f="0",g="qx.bom.webfonts.Validator",h="interval",i="Georgia",j="WEei",k="Times New Roman",l="Arial",m="normal",n="Helvetica",o="350px",p="_applyFontFamily",q="__er",r="-1000px",s="hidden",t="serif",u="span",v="absolute",w=",";qx.Class.define(g,{extend:qx.core.Object,construct:function(x){qx.core.Object.call(this);if(x){this.setFontFamily(x);}
;this.__eo=this._getRequestedHelpers();}
,statics:{COMPARISON_FONTS:{sans:[l,n,a],serif:[k,i,t]},HELPER_CSS:{position:v,margin:f,padding:f,top:r,left:r,fontSize:o,width:d,height:d,lineHeight:m,fontVariant:m,visibility:s},COMPARISON_STRING:j,__ep:null,__eq:null,removeDefaultHelperElements:function(){var y=qx.bom.webfonts.Validator.__eq;if(y){for(var z in y){document.body.removeChild(y[z]);}
;}
;delete qx.bom.webfonts.Validator.__eq;}
},properties:{fontFamily:{nullable:true,init:null,apply:p},timeout:{check:c,init:5000}},events:{"changeStatus":e},members:{__eo:null,__er:null,__es:null,validate:function(){this.__es=new Date().getTime();if(this.__er){this.__er.restart();}
else {this.__er=new qx.event.Timer(100);this.__er.addListener(h,this.__eu,this);qx.event.Timer.once(function(){this.__er.start();}
,this,0);}
;}
,_reset:function(){if(this.__eo){for(var B in this.__eo){var A=this.__eo[B];document.body.removeChild(A);}
;this.__eo=null;}
;}
,_isFontValid:function(){if(!qx.bom.webfonts.Validator.__ep){this.__et();}
;if(!this.__eo){this.__eo=this._getRequestedHelpers();}
;var D=qx.bom.element.Dimension.getWidth(this.__eo.sans);var C=qx.bom.element.Dimension.getWidth(this.__eo.serif);var E=qx.bom.webfonts.Validator;if(D!==E.__ep.sans&&C!==E.__ep.serif){return true;}
;return false;}
,_getRequestedHelpers:function(){var F=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.sans);var G=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.serif);return {sans:this._getHelperElement(F),serif:this._getHelperElement(G)};}
,_getHelperElement:function(H){var I=qx.lang.Object.clone(qx.bom.webfonts.Validator.HELPER_CSS);if(H){if(I.fontFamily){I.fontFamily+=w+H.join(w);}
else {I.fontFamily=H.join(w);}
;}
;var J=document.createElement(u);J.innerHTML=qx.bom.webfonts.Validator.COMPARISON_STRING;qx.bom.element.Style.setStyles(J,I);document.body.appendChild(J);return J;}
,_applyFontFamily:function(L,K){if(L!==K){this._reset();}
;}
,__et:function(){var M=qx.bom.webfonts.Validator;if(!M.__eq){M.__eq={sans:this._getHelperElement(M.COMPARISON_FONTS.sans),serif:this._getHelperElement(M.COMPARISON_FONTS.serif)};}
;M.__ep={sans:qx.bom.element.Dimension.getWidth(M.__eq.sans),serif:qx.bom.element.Dimension.getWidth(M.__eq.serif)};}
,__eu:function(){if(this._isFontValid()){this.__er.stop();this._reset();this.fireDataEvent(b,{family:this.getFontFamily(),valid:true});}
else {var N=new Date().getTime();if(N-this.__es>=this.getTimeout()){this.__er.stop();this._reset();this.fireDataEvent(b,{family:this.getFontFamily(),valid:false});}
;}
;}
},destruct:function(){this._reset();this.__er.stop();this.__er.removeListener(h,this.__eu,this);this._disposeObjects(q);}
});}
)();
(function(){var a="mshtml",b="engine.name",c="qx.bom.element.Dimension",d="0px",e="paddingRight",f="engine.version",g="paddingLeft",h="opera",i="paddingBottom",j="paddingTop",k="overflowX",l="overflowY";qx.Bootstrap.define(c,{statics:{getWidth:function(n){var m=n.getBoundingClientRect();return Math.round(m.right)-Math.round(m.left);}
,getHeight:function(p){var o=p.getBoundingClientRect();return Math.round(o.bottom)-Math.round(o.top);}
,getSize:function(q){return {width:this.getWidth(q),height:this.getHeight(q)};}
,__ev:{visible:true,hidden:true},getContentWidth:function(u){var r=qx.bom.element.Style;var s=qx.bom.element.Style.get(u,k);var t=parseInt(r.get(u,g)||d,10);var x=parseInt(r.get(u,e)||d,10);if(this.__ev[s]){var w=u.clientWidth;if((qx.core.Environment.get(b)==h)||qx.dom.Node.isBlockNode(u)){w=w-t-x;}
;if(qx.core.Environment.get(b)==a){if(w===0&&u.offsetHeight===0){return u.offsetWidth;}
;}
;return w;}
else {if(u.clientWidth>=u.scrollWidth){return Math.max(u.clientWidth,u.scrollWidth)-t-x;}
else {var v=u.scrollWidth-t;if(qx.core.Environment.get(b)==a&&qx.core.Environment.get(f)>=6){v-=x;}
;return v;}
;}
;}
,getContentHeight:function(D){var y=qx.bom.element.Style;var A=qx.bom.element.Style.get(D,l);var B=parseInt(y.get(D,j)||d,10);var z=parseInt(y.get(D,i)||d,10);if(this.__ev[A]){return D.clientHeight-B-z;}
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
(function(){var a="'.",b="Missing appearance: ",c="_applyTheme",d="qx.debug",e="string",f="Cannot find a matching appearance for '",g="Hint: This may be an issue with nested child controls and a missing alias definition in the appearance theme.",h="qx.theme.manager.Appearance",j=":",k="Theme",l="undefined",m="changeTheme",n="/",o="singleton";qx.Class.define(h,{type:o,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__ew={};this.__ex={};}
,properties:{theme:{check:k,nullable:true,event:m,apply:c}},members:{__ey:{},__ew:null,__ex:null,_applyTheme:function(){this.__ex={};this.__ew={};}
,__ez:function(D,z,q,u){var w=z.appearances;var r=w[D];if(!r){var C=n;var s=[];var v=D.split(C);var B=qx.lang.Array.clone(v);var y;while(!r&&v.length>0){s.unshift(v.pop());var t=v.join(C);r=w[t];if(r){y=r.alias||r;if(typeof y===e){var A=y+C+s.join(C);return this.__ez(A,z,q,B);}
;}
;}
;for(var i=0;i<s.length-1;i++ ){s.shift();var x=s.join(C);var p=this.__ez(x,z,null,B);if(p){return p;}
;}
;if(q!=null){return this.__ez(q,z,null,B);}
;if(qx.core.Environment.get(d)){if(typeof u!==l){this.debug(f+u.join(n)+a);if(u.length>1){this.info(g);}
;}
;}
;return null;}
else if(typeof r===e){return this.__ez(r,z,q,B);}
else if(r.include&&!r.style){return this.__ez(r.include,z,q,B);}
;return D;}
,styleFrom:function(W,O,P,F){if(!P){P=this.getTheme();}
;var M=this.__ex;var E=M[W];if(!E){E=M[W]=this.__ez(W,P,F);}
;var T=P.appearances[E];if(!T){this.warn(b+W);return null;}
;if(!T.style){return null;}
;var U=E;if(O){var I=T.$$bits;if(!I){I=T.$$bits={};T.$$length=0;}
;var J=0;for(var L in O){if(!O[L]){continue;}
;if(I[L]==null){I[L]=1<<T.$$length++ ;}
;J+=I[L];}
;if(J>0){U+=j+J;}
;}
;var K=this.__ew;if(K[U]!==undefined){return K[U];}
;if(!O){O=this.__ey;}
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
},destruct:function(){this.__ew=this.__ex=null;}
});}
)();
(function(){var b="'!",c='Invalid include in theme "',d="fonts",e="appearances",f='The configuration key "',g="Mixin theme is not a valid theme!",h='" is not allowed!',j="icons",k="You can only define one theme category per file! Invalid theme: ",m="string",n="decorations",o="other",p="Found base flag in entry '",q="qx.debug",r='Invalid patch in theme "',s="widgets",t="[Theme ",u="borders",v="' are not compatible '",w="The mixins '",x='": ',y="' of theme '",z='" is invalid: ',A='Invalid extend in theme "',B='Invalid type of key "',C='The key "',D='"!',E="]",F='"! The value needs to be a map!',G='"! The type of the key must be "',H="undefined",I='The type of the key "',J="qx.Theme",K='The content of a meta theme must reference to other themes. The value for "',L='" inside the meta block is wrong.',M='" in theme "',N="colors",O='Invalid key "',P='"! The value is undefined/null!',Q="Theme",R="meta",S='" is not allowed inside a meta theme block.',T="'. Base flags are not allowed for themes without a valid super theme!",U="object";qx.Bootstrap.define(J,{statics:{define:function(name,W){if(!W){var W={};}
;W.include=this.__eA(W.include);W.patch=this.__eA(W.patch);if(qx.core.Environment.get(q)){this.__j(name,W);}
;var V={$$type:Q,name:name,title:W.title,toString:this.genericToString};if(W.extend){V.supertheme=W.extend;}
;V.basename=qx.Bootstrap.createNamespace(name,V);this.__eD(V,W);this.__eB(V,W);this.$$registry[name]=V;for(var i=0,a=W.include,l=a.length;i<l;i++ ){this.include(V,a[i]);}
;for(var i=0,a=W.patch,l=a.length;i<l;i++ ){this.patch(V,a[i]);}
;}
,__eA:function(X){if(!X){return [];}
;if(qx.Bootstrap.isArray(X)){return X;}
else {return [X];}
;}
,__eB:function(Y,ba){var bb=ba.aliases||{};if(ba.extend&&ba.extend.aliases){qx.Bootstrap.objectMergeWith(bb,ba.extend.aliases,false);}
;Y.aliases=bb;}
,getAll:function(){return this.$$registry;}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,genericToString:function(){return t+this.name+E;}
,__eC:function(bd){for(var i=0,bc=this.__eE,l=bc.length;i<l;i++ ){if(bd[bc[i]]){return bc[i];}
;}
;}
,__eD:function(bi,bj){var bf=this.__eC(bj);if(bj.extend&&!bf){bf=bj.extend.type;}
;bi.type=bf||o;var bg=function(){}
;if(bj.extend){bg.prototype=new bj.extend.$$clazz;}
;var be=bg.prototype;var bh=bj[bf];for(var bk in bh){be[bk]=bh[bk];if(be[bk].base){if(qx.core.Environment.get(q)){if(!bj.extend){throw new Error(p+bk+y+bj.name+T);}
;}
;be[bk].base=bj.extend;}
;}
;bi.$$clazz=bg;bi[bf]=new bg;}
,$$registry:{},__eE:[N,u,n,d,j,s,e,R],__i:qx.core.Environment.select(q,{"true":{"title":m,"aliases":U,"type":m,"extend":U,"colors":U,"borders":U,"decorations":U,"fonts":U,"icons":U,"widgets":U,"appearances":U,"meta":U,"include":U,"patch":U},"default":null}),__eF:qx.core.Environment.select(q,{"true":{"color":U,"border":U,"decoration":U,"font":U,"icon":U,"appearance":U,"widget":U},"default":null}),__j:qx.core.Environment.select(q,{"true":function(name,bq){var bp=this.__i;for(var bo in bq){if(bp[bo]===undefined){throw new Error(f+bo+M+name+h);}
;if(bq[bo]==null){throw new Error(O+bo+M+name+P);}
;if(bp[bo]!==null&&typeof bq[bo]!==bp[bo]){throw new Error(B+bo+M+name+G+bp[bo]+D);}
;}
;var bn=[N,u,n,d,j,s,e,R];for(var i=0,l=bn.length;i<l;i++ ){var bo=bn[i];if(bq[bo]!==undefined&&(bq[bo] instanceof Array||bq[bo] instanceof RegExp||bq[bo] instanceof Date||bq[bo].classname!==undefined)){throw new Error(O+bo+M+name+F);}
;}
;var bl=0;for(var i=0,l=bn.length;i<l;i++ ){var bo=bn[i];if(bq[bo]){bl++ ;}
;if(bl>1){throw new Error(k+name);}
;}
;if(bq.meta){var bm;for(var bo in bq.meta){bm=bq.meta[bo];if(this.__eF[bo]===undefined){throw new Error(C+bo+S);}
;if(typeof bm!==this.__eF[bo]){throw new Error(I+bo+L);}
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
}),patch:function(bu,bs){this.__eG(bs);var bw=this.__eC(bs);if(bw!==this.__eC(bu)){throw new Error(w+bu.name+v+bs.name+b);}
;var bt=bs[bw];var br=bu.$$clazz.prototype;for(var bv in bt){br[bv]=bt[bv];}
;}
,include:function(bA,by){this.__eG(by);var bC=by.type;if(bC!==bA.type){throw new Error(w+bA.name+v+by.name+b);}
;var bz=by[bC];var bx=bA.$$clazz.prototype;for(var bB in bz){if(bx[bB]!==undefined){continue;}
;bx[bB]=bz[bB];}
;}
,__eG:function(bD){if(typeof bD===H||bD==null){var bF=new Error(g);if(qx.core.Environment.get(q)){var bE=qx.dev.StackTrace.getStackTraceFromError(bF);qx.Bootstrap.error(this,bE);}
;throw bF;}
;}
}});}
)();
(function(){var a="widget",b="__eI",c="qx.ui.tooltip.ToolTip",d="Boolean",f="",g="interval",h="__eH",i="mouseover",j="_applyCurrent",k="mouseout",l="qx.ui.tooltip.Manager",m="mousemove",n="focusout",o="tooltip-error",p="__eK",q="singleton";qx.Class.define(l,{type:q,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);qx.event.Registration.addListener(document.body,i,this.__eP,this,true);this.__eH=new qx.event.Timer();this.__eH.addListener(g,this.__eM,this);this.__eI=new qx.event.Timer();this.__eI.addListener(g,this.__eN,this);this.__eJ={left:0,top:0};}
,properties:{current:{check:c,nullable:true,apply:j},showInvalidToolTips:{check:d,init:true},showToolTips:{check:d,init:true}},members:{__eJ:null,__eI:null,__eH:null,__eK:null,__eL:null,getSharedTooltip:function(){if(!this.__eK){this.__eK=new qx.ui.tooltip.ToolTip().set({rich:true});}
;return this.__eK;}
,getSharedErrorTooltip:function(){if(!this.__eL){this.__eL=new qx.ui.tooltip.ToolTip().set({appearance:o,rich:true});this.__eL.setLabel(f);this.__eL.syncAppearance();}
;return this.__eL;}
,_applyCurrent:function(t,s){if(s&&qx.ui.core.Widget.contains(s,t)){return;}
;if(s){if(!s.isDisposed()){s.exclude();}
;this.__eH.stop();this.__eI.stop();}
;var u=qx.event.Registration;var r=document.body;if(t){this.__eH.startWith(t.getShowTimeout());u.addListener(r,k,this.__eQ,this,true);u.addListener(r,n,this.__eR,this,true);u.addListener(r,m,this.__eO,this,true);}
else {u.removeListener(r,k,this.__eQ,this,true);u.removeListener(r,n,this.__eR,this,true);u.removeListener(r,m,this.__eO,this,true);}
;}
,__eM:function(e){var v=this.getCurrent();if(v&&!v.isDisposed()){this.__eI.startWith(v.getHideTimeout());if(v.getPlaceMethod()==a){v.placeToWidget(v.getOpener());}
else {v.placeToPoint(this.__eJ);}
;v.show();}
;this.__eH.stop();}
,__eN:function(e){var w=this.getCurrent();if(w&&!w.isDisposed()){w.exclude();}
;this.__eI.stop();this.resetCurrent();}
,__eO:function(e){var x=this.__eJ;x.left=Math.round(e.getDocumentLeft());x.top=Math.round(e.getDocumentTop());}
,__eP:function(e){var y=qx.ui.core.Widget.getWidgetByElement(e.getTarget());this.showToolTip(y);}
,showToolTip:function(B){if(!B){return;}
;var C,A,D,z;while(B!=null){C=B.getToolTip();A=B.getToolTipText()||null;D=B.getToolTipIcon()||null;if(qx.Class.hasInterface(B.constructor,qx.ui.form.IForm)&&!B.isValid()){z=B.getInvalidMessage();}
;if(C||A||D||z){break;}
;B=B.getLayoutParent();}
;if(!B||!B.getEnabled()||B.isBlockToolTip()||(!z&&!this.getShowToolTips())||(z&&!this.getShowInvalidToolTips())){return;}
;if(z){C=this.getSharedErrorTooltip().set({label:z});}
;if(!C){C=this.getSharedTooltip().set({label:A,icon:D});}
;this.setCurrent(C);C.setOpener(B);}
,__eQ:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());if(!E){return;}
;var F=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());if(!F){return;}
;var G=this.getCurrent();if(G&&(F==G||qx.ui.core.Widget.contains(G,F))){return;}
;if(F&&E&&qx.ui.core.Widget.contains(E,F)){return;}
;if(G&&!F){this.setCurrent(null);}
else {this.resetCurrent();}
;}
,__eR:function(e){var H=qx.ui.core.Widget.getWidgetByElement(e.getTarget());if(!H){return;}
;var I=this.getCurrent();if(I&&I==H.getToolTip()){this.setCurrent(null);}
;}
},destruct:function(){qx.event.Registration.removeListener(document.body,i,this.__eP,this,true);this._disposeObjects(h,b,p);this.__eJ=null;}
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
,"false":null}),__eS:null,__eT:null,__eU:null,__eV:null,__eW:null,__eX:null,__eY:null,getBounds:function(){return this.__eX||this.__eT||null;}
,clearSeparators:function(){}
,renderSeparator:function(M,N){}
,renderLayout:function(U,top,R,Q){if(qx.core.Environment.get(n)){var S=g+this.toString()+s;this.assertInteger(U,i+S);this.assertInteger(top,D+S);this.assertInteger(R,b+S);this.assertInteger(Q,E+S);}
;var P=null;if(this.getHeight()==null&&this._hasHeightForWidth()){var P=this._getHeightForWidth(R);}
;if(P!=null&&P!==this.__eS){this.__eS=P;qx.ui.core.queue.Layout.add(this);return null;}
;var O=this.__eT;if(!O){O=this.__eT={};}
;var T={};if(U!==O.left||top!==O.top){T.position=true;O.left=U;O.top=top;}
;if(R!==O.width||Q!==O.height){T.size=true;O.width=R;O.height=Q;}
;if(this.__eU){T.local=true;delete this.__eU;}
;if(this.__eW){T.margin=true;delete this.__eW;}
;return T;}
,isExcluded:function(){return false;}
,hasValidLayout:function(){return !this.__eU;}
,scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);}
,invalidateLayoutCache:function(){this.__eU=true;this.__eV=null;}
,getSizeHint:function(V){var W=this.__eV;if(W){return W;}
;if(V===false){return null;}
;W=this.__eV=this._computeSizeHint();if(this._hasHeightForWidth()&&this.__eS&&this.getHeight()==null){W.height=this.__eS;}
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
,_applyMargin:function(){this.__eW=true;var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}
;}
,_applyAlign:function(){var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}
;}
,_applyDimension:function(){qx.ui.core.queue.Layout.add(this);}
,_applyStretching:function(){qx.ui.core.queue.Layout.add(this);}
,hasUserBounds:function(){return !!this.__eX;}
,setUserBounds:function(bi,top,bh,bj){this.__eX={left:bi,top:top,width:bh,height:bj};qx.ui.core.queue.Layout.add(this);}
,resetUserBounds:function(){delete this.__eX;qx.ui.core.queue.Layout.add(this);}
,__fa:{},setLayoutProperties:function(bm){if(bm==null){return;}
;var bk=this.__eY;if(!bk){bk=this.__eY={};}
;var parent=this.getLayoutParent();if(parent){parent.updateLayoutProperties(bm);}
;for(var bl in bm){if(bm[bl]==null){delete bk[bl];}
else {bk[bl]=bm[bl];}
;}
;}
,getLayoutProperties:function(){return this.__eY||this.__fa;}
,clearLayoutProperties:function(){delete this.__eY;}
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
,clone:function(){var bq=qx.core.Object.prototype.clone.call(this);var br=this.__eY;if(br){bq.__eY=qx.lang.Object.clone(br);}
;return bq;}
},destruct:function(){if(qx.core.Environment.get(x)){qx.theme.manager.Appearance.getInstance().removeListener(k,this._onChangeTheme,this);qx.theme.manager.Color.getInstance().removeListener(k,this._onChangeTheme,this);}
;this.$$parent=this.$$subparent=this.__eY=this.__eT=this.__eX=this.__eV=null;}
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
(function(){var a="qx.ui.core.queue.Layout",b="layout";qx.Class.define(a,{statics:{__dX:{},__fb:{},remove:function(c){delete this.__dX[c.$$hash];}
,add:function(d){this.__dX[d.$$hash]=d;qx.ui.core.queue.Manager.scheduleFlush(b);}
,isScheduled:function(e){return !!this.__dX[e.$$hash];}
,flush:function(){var f=this.__fd();for(var i=f.length-1;i>=0;i-- ){var g=f[i];if(g.hasValidLayout()){continue;}
;if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();g.renderLayout(0,0,j.width,j.height);}
else {var h=g.getBounds();g.renderLayout(h.left,h.top,h.width,h.height);}
;}
;}
,getNestingLevel:function(l){var k=this.__fb;var n=0;var parent=l;while(true){if(k[parent.$$hash]!=null){n+=k[parent.$$hash];break;}
;if(!parent.$$parent){break;}
;parent=parent.$$parent;n+=1;}
;var m=n;while(l&&l!==parent){k[l.$$hash]=m-- ;l=l.$$parent;}
;return n;}
,__fc:function(){var t=qx.ui.core.queue.Visibility;this.__fb={};var s=[];var r=this.__dX;var o,q;for(var p in r){o=r[p];if(t.isVisible(o)){q=this.getNestingLevel(o);if(!s[q]){s[q]={};}
;s[q][p]=o;delete r[p];}
;}
;return s;}
,__fd:function(){var x=[];var z=this.__fc();for(var w=z.length-1;w>=0;w-- ){if(!z[w]){continue;}
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
(function(){var a="Method '",b="qxWeb",c="' already available as static method.",d="qx.debug",e="' already available.";qx.Bootstrap.define(b,{extend:qx.type.BaseArray,statics:{__et:[],$$qx:qx,$init:function(j){var h=[];for(var i=0;i<j.length;i++ ){var g=!!(j[i]&&(j[i].nodeType===1||j[i].nodeType===9));if(g){h.push(j[i]);continue;}
;var f=!!(j[i]&&j[i].history&&j[i].location&&j[i].document);if(f){h.push(j[i]);}
;}
;var k=qx.lang.Array.cast(h,qxWeb);for(var i=0;i<qxWeb.__et.length;i++ ){qxWeb.__et[i].call(k);}
;return k;}
,$attach:function(m){for(var name in m){if(qx.core.Environment.get(d)){if(qxWeb.prototype[name]!=undefined&&Array.prototype[name]==undefined){throw new Error(a+name+e);}
;}
;qxWeb.prototype[name]=m[name];}
;}
,$attachStatic:function(n){for(var name in n){if(qx.core.Environment.get(d)){if(qxWeb[name]!=undefined){throw new Error(a+name+c);}
;}
;qxWeb[name]=n[name];}
;}
,$attachInit:function(o){this.__et.push(o);}
,define:function(name,p){if(p==undefined){p=name;name=null;}
;return qx.Bootstrap.define.call(qx.Bootstrap,name,p);}
},construct:function(s,r){if(!s&&this instanceof qxWeb){return this;}
;if(qx.Bootstrap.isString(s)){if(r instanceof qxWeb){r=r[0];}
;s=qx.bom.Selector.query(s,r);}
else if(!(qx.Bootstrap.isArray(s))){s=[s];}
;return qxWeb.$init(s);}
,members:{filter:function(t){if(qx.lang.Type.isFunction(t)){return qxWeb.$init(Array.prototype.filter.call(this,t));}
;return qxWeb.$init(qx.bom.Selector.matches(t,this));}
,slice:function(u,v){if(v!==undefined){return qxWeb.$init(Array.prototype.slice.call(this,u,v));}
;return qxWeb.$init(Array.prototype.slice.call(this,u));}
,splice:function(w,x,y){return qxWeb.$init(Array.prototype.splice.apply(this,arguments));}
,map:function(z,A){return qxWeb.$init(Array.prototype.map.apply(this,arguments));}
,concat:function(C){var B=Array.prototype.slice.call(this,0);for(var i=0;i<arguments.length;i++ ){if(arguments[i] instanceof qxWeb){B=B.concat(Array.prototype.slice.call(arguments[i],0));}
else {B.push(arguments[i]);}
;}
;return qxWeb.$init(B);}
,_forEachElement:function(E,D){for(var i=0,l=this.length;i<l;i++ ){if(this[i]&&this[i].nodeType===1){E.apply(D||this,[this[i],i,this]);}
;}
;}
},defer:function(F){if(window.q==undefined){q=F;}
;}
});}
)();
(function(){var c="-",d="*(?:checked|disabled|ismap|multiple|readonly|selected|value)",f="(^|",g="'] ",h=":active",k=":disabled",l="div",n=")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:",o="[selected]",p="'></div>",q="[test!='']:sizzle",r="nth",s="*(?:",t="*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(",u="<a name='",v="option",w="image",x="*([\\x20\\t\\r\\n\\f>+~])",y="~=",z="previousSibling",A="*(even|odd|(([+-]|)(\\d*)n|)",B="only",C="*",D="+|((?:^|[^\\\\])(?:\\\\.)*)",E="i",F="='$1']",G="@",H="w#",I="^=",J="*\\)|)",K="+$",L="=",M=":focus",N="id",O="first",P="'></a><div name='",Q="$=",R="reset",S="string",T="[\\x20\\t\\r\\n\\f]",U="*(?:([+-]|)",V="*((?:-\\d)?\\d*)",W="#",X="input",Y="type",cH="parentNode",cI="(",cJ="w",cD="password",cE="even",cF="TAG",cG="*[>+~]|",cN="*\\]",cO="*(?:\"\"|'')",cT="*\\)|)(?=[^-]|$)",cP="unsupported pseudo: ",cK="w*",cL=" ",cM="*,",dx="text",ef="^",cU=")",cQ=":(",cR="[test^='']",ec="radio",cS="sizcache",cV="button",cW="0",cX="^(",dd="<input type='hidden'/>",de="odd",df="class",cY="*(\\d+)|))",da="<p test=''></p>",db="|=",dc="\\[",dk="<div class='hidden e'></div><div class='hidden'></div>",dl="g",dm="submit",dn="!=",dg="<select><option selected=''></option></select>",dh="e",di="checkbox",dj="*=",ds="|",dt=".",ee="<select></select>",du="object",dp="$1",dq="file",ed="eq",dr="qx.bom.Selector",dv="CHILD",dw="|$)",dI=",",dH=":(even|odd|eq|gt|lt|nth|first|last)(?:\\(",dG=")['\"]?\\]",dM="<a href='#'></a>",dL="empty",dK=":enabled",dJ="[id='",dB="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",dA="^#(",dz="[*^$]=",dy="^:(only|nth|first|last)-child(?:\\(",dF="*(",dE="^\\.(",dD="",dC="href",dT="multiple",dS=")|[^:]|\\\\.)*|.*))\\)|)",dR=")|)|)",dQ="POS",dX="boolean",dW="Syntax error, unrecognized expression: ",dV="([*^$|!~]?=)",dU="^\\[name=['\"]?(",dP="\\$&",dO=":checked",dN="undefined",eb="ID",ea="last",dY="HTML";qx.Bootstrap.define(dr,{statics:{query:null,matches:null}});(function(window,undefined){var ep,fg,eR,em,er,eA,fm,eF,es,eg,eK=true,eE=dN,fc=(cS+Math.random()).replace(dt,dD),eW=String,document=window.document,fv=document.documentElement,eJ=0,fs=0,eP=[].pop,fr=[].push,ev=[].slice,eQ=[].indexOf||function(fw){var i=0,fx=this.length;for(;i<fx;i++ ){if(this[i]===fw){return i;}
;}
;return -1;}
,fi=function(fy,fz){fy[fc]=fz==null||fz;return fy;}
,eo=function(){var fB={},fA=[];return fi(function(fC,fD){if(fA.push(fC)>eR.cacheLength){delete fB[fA.shift()];}
;return (fB[fC]=fD);}
,fB);}
,fj=eo(),fb=eo(),ft=eo(),ex=T,eT=dB,eN=eT.replace(cJ,H),ez=dV,eM=dc+ex+dF+eT+cU+ex+s+ez+ex+t+eN+dR+ex+cN,eS=cQ+eT+n+eM+dS,el=dH+ex+V+ex+cT,ek=new RegExp(ef+ex+D+ex+K,dl),fh=new RegExp(ef+ex+cM+ex+C),ey=new RegExp(ef+ex+x+ex+C),fd=new RegExp(eS),fp=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,ff=/^:not/,eO=/[\x20\t\r\n\f]*[+~]/,eu=/:not\($/,ej=/h\d/i,eY=/input|select|textarea|button/i,eq=/\\(?!\\)/g,fl={"ID":new RegExp(dA+eT+cU),"CLASS":new RegExp(dE+eT+cU),"NAME":new RegExp(dU+eT+dG),"TAG":new RegExp(cX+eT.replace(cJ,cK)+cU),"ATTR":new RegExp(ef+eM),"PSEUDO":new RegExp(ef+eS),"POS":new RegExp(el,E),"CHILD":new RegExp(dy+ex+A+ex+U+ex+cY+ex+J,E),"needsContext":new RegExp(ef+ex+cG+el,E)},eV=function(fF){var fE=document.createElement(l);try{return fF(fE);}
catch(e){return false;}
finally{fE=null;}
;}
,en=eV(function(fG){fG.appendChild(document.createComment(dD));return !fG.getElementsByTagName(C).length;}
),eI=eV(function(fH){fH.innerHTML=dM;return fH.firstChild&&typeof fH.firstChild.getAttribute!==eE&&fH.firstChild.getAttribute(dC)===W;}
),fk=eV(function(fI){fI.innerHTML=ee;var fJ=typeof fI.lastChild.getAttribute(dT);return fJ!==dX&&fJ!==S;}
),fq=eV(function(fK){fK.innerHTML=dk;if(!fK.getElementsByClassName||!fK.getElementsByClassName(dh).length){return false;}
;fK.lastChild.className=dh;return fK.getElementsByClassName(dh).length===2;}
),eh=eV(function(fL){fL.id=fc+0;fL.innerHTML=u+fc+P+fc+p;fv.insertBefore(fL,fv.firstChild);var fM=document.getElementsByName&&document.getElementsByName(fc).length===2+document.getElementsByName(fc+0).length;fg=!document.getElementById(fc);fv.removeChild(fL);return fM;}
);try{ev.call(fv.childNodes,0)[0].nodeType;}
catch(e){ev=function(i){var fN,fO=[];for(;(fN=this[i]);i++ ){fO.push(fN);}
;return fO;}
;}
;function eX(fV,fU,fS,fT){fS=fS||[];fU=fU||document;var fW,fR,fP,m,fQ=fU.nodeType;if(!fV||typeof fV!==S){return fS;}
;if(fQ!==1&&fQ!==9){return [];}
;fP=er(fU);if(!fP&&!fT){if((fW=fp.exec(fV))){if((m=fW[1])){if(fQ===9){fR=fU.getElementById(m);if(fR&&fR.parentNode){if(fR.id===m){fS.push(fR);return fS;}
;}
else {return fS;}
;}
else {if(fU.ownerDocument&&(fR=fU.ownerDocument.getElementById(m))&&eA(fU,fR)&&fR.id===m){fS.push(fR);return fS;}
;}
;}
else if(fW[2]){fr.apply(fS,ev.call(fU.getElementsByTagName(fV),0));return fS;}
else if((m=fW[3])&&fq&&fU.getElementsByClassName){fr.apply(fS,ev.call(fU.getElementsByClassName(m),0));return fS;}
;}
;}
;return et(fV.replace(ek,dp),fU,fS,fT,fP);}
;eX.matches=function(fX,fY){return eX(fX,null,null,fY);}
;eX.matchesSelector=function(gb,ga){return eX(ga,null,null,[gb]).length>0;}
;function fo(gc){return function(gd){var name=gd.nodeName.toLowerCase();return name===X&&gd.type===gc;}
;}
;function ei(ge){return function(gf){var name=gf.nodeName.toLowerCase();return (name===X||name===cV)&&gf.type===ge;}
;}
;function eU(gg){return fi(function(gh){gh=+gh;return fi(function(gk,gi){var j,gj=gg([],gk.length,gh),i=gj.length;while(i-- ){if(gk[(j=gj[i])]){gk[j]=!(gi[j]=gk[j]);}
;}
;}
);}
);}
;em=eX.getText=function(gn){var gl,go=dD,i=0,gm=gn.nodeType;if(gm){if(gm===1||gm===9||gm===11){if(typeof gn.textContent===S){return gn.textContent;}
else {for(gn=gn.firstChild;gn;gn=gn.nextSibling){go+=em(gn);}
;}
;}
else if(gm===3||gm===4){return gn.nodeValue;}
;}
else {for(;(gl=gn[i]);i++ ){go+=em(gl);}
;}
;return go;}
;er=eX.isXML=function(gp){var gq=gp&&(gp.ownerDocument||gp).documentElement;return gq?gq.nodeName!==dY:false;}
;eA=eX.contains=fv.contains?function(a,b){var gr=a.nodeType===9?a.documentElement:a,gs=b&&b.parentNode;return a===gs||!!(gs&&gs.nodeType===1&&gr.contains&&gr.contains(gs));}
:fv.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16);}
:function(a,b){while((b=b.parentNode)){if(b===a){return true;}
;}
;return false;}
;eX.attr=function(gu,name){var gv,gt=er(gu);if(!gt){name=name.toLowerCase();}
;if((gv=eR.attrHandle[name])){return gv(gu);}
;if(gt||fk){return gu.getAttribute(name);}
;gv=gu.getAttributeNode(name);return gv?typeof gu[name]===dX?gu[name]?name:null:gv.specified?gv.value:null:null;}
;eR=eX.selectors={cacheLength:50,createPseudo:fi,match:fl,attrHandle:eI?{}:{"href":function(gw){return gw.getAttribute(dC,2);}
,"type":function(gx){return gx.getAttribute(Y);}
},find:{"ID":fg?function(gz,gA,gy){if(typeof gA.getElementById!==eE&&!gy){var m=gA.getElementById(gz);return m&&m.parentNode?[m]:[];}
;}
:function(gC,gD,gB){if(typeof gD.getElementById!==eE&&!gB){var m=gD.getElementById(gC);return m?m.id===gC||typeof m.getAttributeNode!==eE&&m.getAttributeNode(N).value===gC?[m]:undefined:[];}
;}
,"TAG":en?function(gE,gF){if(typeof gF.getElementsByTagName!==eE){return gF.getElementsByTagName(gE);}
;}
:function(gJ,gK){var gH=gK.getElementsByTagName(gJ);if(gJ===C){var gI,gG=[],i=0;for(;(gI=gH[i]);i++ ){if(gI.nodeType===1){gG.push(gI);}
;}
;return gG;}
;return gH;}
,"NAME":eh&&function(gL,gM){if(typeof gM.getElementsByName!==eE){return gM.getElementsByName(name);}
;}
,"CLASS":fq&&function(gN,gP,gO){if(typeof gP.getElementsByClassName!==eE&&!gO){return gP.getElementsByClassName(gN);}
;}
},relative:{">":{dir:cH,first:true}," ":{dir:cH},"+":{dir:z,first:true},"~":{dir:z}},preFilter:{"ATTR":function(gQ){gQ[1]=gQ[1].replace(eq,dD);gQ[3]=(gQ[4]||gQ[5]||dD).replace(eq,dD);if(gQ[2]===y){gQ[3]=cL+gQ[3]+cL;}
;return gQ.slice(0,4);}
,"CHILD":function(gR){gR[1]=gR[1].toLowerCase();if(gR[1]===r){if(!gR[2]){eX.error(gR[0]);}
;gR[3]=+(gR[3]?gR[4]+(gR[5]||1):2*(gR[2]===cE||gR[2]===de));gR[4]=+((gR[6]+gR[7])||gR[2]===de);}
else if(gR[2]){eX.error(gR[0]);}
;return gR;}
,"PSEUDO":function(gT){var gS,gU;if(fl[dv].test(gT[0])){return null;}
;if(gT[3]){gT[2]=gT[3];}
else if((gS=gT[4])){if(fd.test(gS)&&(gU=eH(gS,true))&&(gU=gS.indexOf(cU,gS.length-gU)-gS.length)){gS=gS.slice(0,gU);gT[0]=gT[0].slice(0,gU);}
;gT[2]=gS;}
;return gT.slice(0,3);}
},filter:{"ID":fg?function(gV){gV=gV.replace(eq,dD);return function(gW){return gW.getAttribute(N)===gV;}
;}
:function(gX){gX=gX.replace(eq,dD);return function(ha){var gY=typeof ha.getAttributeNode!==eE&&ha.getAttributeNode(N);return gY&&gY.value===gX;}
;}
,"TAG":function(hb){if(hb===C){return function(){return true;}
;}
;hb=hb.replace(eq,dD).toLowerCase();return function(hc){return hc.nodeName&&hc.nodeName.toLowerCase()===hb;}
;}
,"CLASS":function(hd){var he=fj[fc][hd];if(!he){he=fj(hd,new RegExp(f+ex+cU+hd+cI+ex+dw));}
;return function(hf){return he.test(hf.className||(typeof hf.getAttribute!==eE&&hf.getAttribute(df))||dD);}
;}
,"ATTR":function(name,hg,hh){return function(hi,hj){var hk=eX.attr(hi,name);if(hk==null){return hg===dn;}
;if(!hg){return true;}
;hk+=dD;return hg===L?hk===hh:hg===dn?hk!==hh:hg===I?hh&&hk.indexOf(hh)===0:hg===dj?hh&&hk.indexOf(hh)>-1:hg===Q?hh&&hk.substr(hk.length-hh.length)===hh:hg===y?(cL+hk+cL).indexOf(hh)>-1:hg===db?hk===hh||hk.substr(0,hh.length+1)===hh+c:false;}
;}
,"CHILD":function(hl,hn,ho,hm){if(hl===r){return function(hr){var hp,hq,parent=hr.parentNode;if(ho===1&&hm===0){return true;}
;if(parent){hq=0;for(hp=parent.firstChild;hp;hp=hp.nextSibling){if(hp.nodeType===1){hq++ ;if(hr===hp){break;}
;}
;}
;}
;hq-=hm;return hq===ho||(hq%ho===0&&hq/ho>=0);}
;}
;return function(ht){var hs=ht;switch(hl){case B:case O:while((hs=hs.previousSibling)){if(hs.nodeType===1){return false;}
;}
;if(hl===O){return true;}
;hs=ht;case ea:while((hs=hs.nextSibling)){if(hs.nodeType===1){return false;}
;}
;return true;};}
;}
,"PSEUDO":function(hv,hw){var hu,hx=eR.pseudos[hv]||eR.setFilters[hv.toLowerCase()]||eX.error(cP+hv);if(hx[fc]){return hx(hw);}
;if(hx.length>1){hu=[hv,hv,dD,hw];return eR.setFilters.hasOwnProperty(hv.toLowerCase())?fi(function(hz,hy){var hA,hB=hx(hz,hw),i=hB.length;while(i-- ){hA=eQ.call(hz,hB[i]);hz[hA]=!(hy[hA]=hB[i]);}
;}
):function(hC){return hx(hC,0,hu);}
;}
;return hx;}
},pseudos:{"not":fi(function(hE){var hD=[],hF=[],hG=fm(hE.replace(ek,dp));return hG[fc]?fi(function(hL,hI,hM,hH){var hJ,hK=hG(hL,null,hH,[]),i=hL.length;while(i-- ){if((hJ=hK[i])){hL[i]=!(hI[i]=hJ);}
;}
;}
):function(hO,hP,hN){hD[0]=hO;hG(hD,null,hN,hF);return !hF.pop();}
;}
),"has":fi(function(hQ){return function(hR){return eX(hQ,hR).length>0;}
;}
),"contains":fi(function(hS){return function(hT){return (hT.textContent||hT.innerText||em(hT)).indexOf(hS)>-1;}
;}
),"enabled":function(hU){return hU.disabled===false;}
,"disabled":function(hV){return hV.disabled===true;}
,"checked":function(hW){var hX=hW.nodeName.toLowerCase();return (hX===X&&!!hW.checked)||(hX===v&&!!hW.selected);}
,"selected":function(hY){if(hY.parentNode){hY.parentNode.selectedIndex;}
;return hY.selected===true;}
,"parent":function(ia){return !eR.pseudos[dL](ia);}
,"empty":function(ic){var ib;ic=ic.firstChild;while(ic){if(ic.nodeName>G||(ib=ic.nodeType)===3||ib===4){return false;}
;ic=ic.nextSibling;}
;return true;}
,"header":function(ie){return ej.test(ie.nodeName);}
,"text":function(ih){var ig,ii;return ih.nodeName.toLowerCase()===X&&(ig=ih.type)===dx&&((ii=ih.getAttribute(Y))==null||ii.toLowerCase()===ig);}
,"radio":fo(ec),"checkbox":fo(di),"file":fo(dq),"password":fo(cD),"image":fo(w),"submit":ei(dm),"reset":ei(R),"button":function(ij){var name=ij.nodeName.toLowerCase();return name===X&&ij.type===cV||name===cV;}
,"input":function(ik){return eY.test(ik.nodeName);}
,"focus":function(im){var il=im.ownerDocument;return im===il.activeElement&&(!il.hasFocus||il.hasFocus())&&!!(im.type||im.href);}
,"active":function(io){return io===io.ownerDocument.activeElement;}
,"first":eU(function(ip,length,iq){return [0];}
),"last":eU(function(ir,length,is){return [length-1];}
),"eq":eU(function(it,length,iu){return [iu<0?iu+length:iu];}
),"even":eU(function(iv,length,iw){for(var i=0;i<length;i+=2){iv.push(i);}
;return iv;}
),"odd":eU(function(ix,length,iy){for(var i=1;i<length;i+=2){ix.push(i);}
;return ix;}
),"lt":eU(function(iz,length,iA){for(var i=iA<0?iA+length:iA; --i>=0;){iz.push(i);}
;return iz;}
),"gt":eU(function(iB,length,iC){for(var i=iC<0?iC+length:iC; ++i<length;){iB.push(i);}
;return iB;}
)}};function eL(a,b,iE){if(a===b){return iE;}
;var iD=a.nextSibling;while(iD){if(iD===b){return -1;}
;iD=iD.nextSibling;}
;return 1;}
;eF=fv.compareDocumentPosition?function(a,b){if(a===b){es=true;return 0;}
;return (!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1;}
:function(a,b){if(a===b){es=true;return 0;}
else if(a.sourceIndex&&b.sourceIndex){return a.sourceIndex-b.sourceIndex;}
;var iJ,iH,iG=[],iL=[],iK=a.parentNode,iI=b.parentNode,iF=iK;if(iK===iI){return eL(a,b);}
else if(!iK){return -1;}
else if(!iI){return 1;}
;while(iF){iG.unshift(iF);iF=iF.parentNode;}
;iF=iI;while(iF){iL.unshift(iF);iF=iF.parentNode;}
;iJ=iG.length;iH=iL.length;for(var i=0;i<iJ&&i<iH;i++ ){if(iG[i]!==iL[i]){return eL(iG[i],iL[i]);}
;}
;return i===iJ?eL(a,iL[i],-1):eL(iG[i],b,1);}
;[0,0].sort(eF);eK=!es;eX.uniqueSort=function(iM){var iN,i=1;es=eK;iM.sort(eF);if(es){for(;(iN=iM[i]);i++ ){if(iN===iM[i-1]){iM.splice(i-- ,1);}
;}
;}
;return iM;}
;eX.error=function(iO){throw new Error(dW+iO);}
;function eH(iS,iR){var iY,iX,iP,iW,iT,iV,iU,iQ=fb[fc][iS];if(iQ){return iR?0:iQ.slice(0);}
;iT=iS;iV=[];iU=eR.preFilter;while(iT){if(!iY||(iX=fh.exec(iT))){if(iX){iT=iT.slice(iX[0].length);}
;iV.push(iP=[]);}
;iY=false;if((iX=ey.exec(iT))){iP.push(iY=new eW(iX.shift()));iT=iT.slice(iY.length);iY.type=iX[0].replace(ek,cL);}
;for(iW in eR.filter){if((iX=fl[iW].exec(iT))&&(!iU[iW]||(iX=iU[iW](iX,document,true)))){iP.push(iY=new eW(iX.shift()));iT=iT.slice(iY.length);iY.type=iW;iY.matches=iX;}
;}
;if(!iY){break;}
;}
;return iR?iT.length:iT?eX.error(iS):fb(iS,iV).slice(0);}
;function eC(ja,jb,jc){var jd=jb.dir,jf=jc&&jb.dir===cH,je=fs++ ;return jb.first?function(jh,ji,jg){while((jh=jh[jd])){if(jf||jh.nodeType===1){return ja(jh,ji,jg);}
;}
;}
:function(jn,jo,jj){if(!jj){var jl,jm=eJ+cL+je+cL,jk=jm+ep;while((jn=jn[jd])){if(jf||jn.nodeType===1){if((jl=jn[fc])===jk){return jn.sizset;}
else if(typeof jl===S&&jl.indexOf(jm)===0){if(jn.sizset){return jn;}
;}
else {jn[fc]=jk;if(ja(jn,jo,jj)){jn.sizset=true;return jn;}
;jn.sizset=false;}
;}
;}
;}
else {while((jn=jn[jd])){if(jf||jn.nodeType===1){if(ja(jn,jo,jj)){return jn;}
;}
;}
;}
;}
;}
;function eD(jp){return jp.length>1?function(jr,js,jq){var i=jp.length;while(i-- ){if(!jp[i](jr,js,jq)){return false;}
;}
;return true;}
:jp[0];}
;function eB(jw,ju,jx,jz,jt){var jv,jB=[],i=0,jy=jw.length,jA=ju!=null;for(;i<jy;i++ ){if((jv=jw[i])){if(!jx||jx(jv,jz,jt)){jB.push(jv);if(jA){ju.push(i);}
;}
;}
;}
;return jB;}
;function ew(jG,jF,jE,jD,jC,jH){if(jD&&!jD[fc]){jD=ew(jD);}
;if(jC&&!jC[fc]){jC=ew(jC,jH);}
;return fi(function(jQ,jL,jR,jI){if(jQ&&jC){return;}
;var i,jN,jJ,jP=[],jT=[],jK=jL.length,jS=jQ||fe(jF||C,jR.nodeType?[jR]:jR,[],jQ),jM=jG&&(jQ||!jF)?eB(jS,jP,jG,jR,jI):jS,jO=jE?jC||(jQ?jG:jK||jD)?[]:jL:jM;if(jE){jE(jM,jO,jR,jI);}
;if(jD){jJ=eB(jO,jT);jD(jJ,[],jR,jI);i=jJ.length;while(i-- ){if((jN=jJ[i])){jO[jT[i]]=!(jM[jT[i]]=jN);}
;}
;}
;if(jQ){i=jG&&jO.length;while(i-- ){if((jN=jO[i])){jQ[jP[i]]=!(jL[jP[i]]=jN);}
;}
;}
else {jO=eB(jO===jL?jO.splice(jK,jO.length):jO);if(jC){jC(null,jL,jO,jI);}
else {fr.apply(jL,jO);}
;}
;}
);}
;function fa(ka){var jU,jW,j,jX=ka.length,jV=eR.relative[ka[0].type],kd=jV||eR.relative[cL],i=jV?1:0,kc=eC(function(ke){return ke===jU;}
,kd,true),jY=eC(function(kf){return eQ.call(jU,kf)>-1;}
,kd,true),kb=[function(kh,ki,kg){return (!jV&&(kg||ki!==eg))||((jU=ki).nodeType?kc(kh,ki,kg):jY(kh,ki,kg));}
];for(;i<jX;i++ ){if((jW=eR.relative[ka[i].type])){kb=[eC(eD(kb),jW)];}
else {jW=eR.filter[ka[i].type].apply(null,ka[i].matches);if(jW[fc]){j= ++i;for(;j<jX;j++ ){if(eR.relative[ka[j].type]){break;}
;}
;return ew(i>1&&eD(kb),i>1&&ka.slice(0,i-1).join(dD).replace(ek,dp),jW,i<j&&fa(ka.slice(i,j)),j<jX&&fa((ka=ka.slice(j))),j<jX&&ka.join(dD));}
;kb.push(jW);}
;}
;return eD(kb);}
;function eG(kn,kk){var kj=kk.length>0,kl=kn.length>0,km=function(kx,kz,ko,kt,kq){var kv,j,ks,kw=[],kp=0,i=cW,ku=kx&&[],kA=kq!=null,kr=eg,kB=kx||kl&&eR.find[cF](C,kq&&kz.parentNode||kz),ky=(eJ+=kr==null?1:Math.E);if(kA){eg=kz!==document&&kz;ep=km.el;}
;for(;(kv=kB[i])!=null;i++ ){if(kl&&kv){for(j=0;(ks=kn[j]);j++ ){if(ks(kv,kz,ko)){kt.push(kv);break;}
;}
;if(kA){eJ=ky;ep= ++km.el;}
;}
;if(kj){if((kv=!ks&&kv)){kp-- ;}
;if(kx){ku.push(kv);}
;}
;}
;kp+=i;if(kj&&i!==kp){for(j=0;(ks=kk[j]);j++ ){ks(ku,kw,kz,ko);}
;if(kx){if(kp>0){while(i-- ){if(!(ku[i]||kw[i])){kw[i]=eP.call(kt);}
;}
;}
;kw=eB(kw);}
;fr.apply(kt,kw);if(kA&&!kx&&kw.length>0&&(kp+kk.length)>1){eX.uniqueSort(kt);}
;}
;if(kA){eJ=ky;eg=kr;}
;return ku;}
;km.el=0;return kj?fi(km):km;}
;fm=eX.compile=function(kE,kC){var i,kG=[],kD=[],kF=ft[fc][kE];if(!kF){if(!kC){kC=eH(kE);}
;i=kC.length;while(i-- ){kF=fa(kC[i]);if(kF[fc]){kG.push(kF);}
else {kD.push(kF);}
;}
;kF=ft(kE,eG(kD,kG));}
;return kF;}
;function fe(kK,kH,kI,kL){var i=0,kJ=kH.length;for(;i<kJ;i++ ){eX(kK,kH[i],kI,kL);}
;return kI;}
;function et(kO,kS,kN,kR,kM){var i,kP,kQ,kT,find,kU=eH(kO),j=kU.length;if(!kR){if(kU.length===1){kP=kU[0]=kU[0].slice(0);if(kP.length>2&&(kQ=kP[0]).type===eb&&kS.nodeType===9&&!kM&&eR.relative[kP[1].type]){kS=eR.find[eb](kQ.matches[0].replace(eq,dD),kS,kM)[0];if(!kS){return kN;}
;kO=kO.slice(kP.shift().length);}
;for(i=fl[dQ].test(kO)?-1:kP.length-1;i>=0;i-- ){kQ=kP[i];if(eR.relative[(kT=kQ.type)]){break;}
;if((find=eR.find[kT])){if((kR=find(kQ.matches[0].replace(eq,dD),eO.test(kP[0].type)&&kS.parentNode||kS,kM))){kP.splice(i,1);kO=kR.length&&kP.join(dD);if(!kO){fr.apply(kN,ev.call(kR,0));return kN;}
;break;}
;}
;}
;}
;}
;fm(kO,kU)(kR,kS,kM,kN,eO.test(kO));return kN;}
;if(document.querySelectorAll){(function(){var kW,lc=et,lb=/'|\\/g,kY=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,kX=[M],kV=[h,M],la=fv.matchesSelector||fv.mozMatchesSelector||fv.webkitMatchesSelector||fv.oMatchesSelector||fv.msMatchesSelector;eV(function(ld){ld.innerHTML=dg;if(!ld.querySelectorAll(o).length){kX.push(dc+ex+d);}
;if(!ld.querySelectorAll(dO).length){kX.push(dO);}
;}
);eV(function(le){le.innerHTML=da;if(le.querySelectorAll(cR).length){kX.push(dz+ex+cO);}
;le.innerHTML=dd;if(!le.querySelectorAll(dK).length){kX.push(dK,k);}
;}
);kX=new RegExp(kX.join(ds));et=function(lk,ln,li,lm,lf){if(!lm&&!lf&&(!kX||!kX.test(lk))){var lh,i,lg=true,lj=fc,lo=ln,ll=ln.nodeType===9&&lk;if(ln.nodeType===1&&ln.nodeName.toLowerCase()!==du){lh=eH(lk);if((lg=ln.getAttribute(N))){lj=lg.replace(lb,dP);}
else {ln.setAttribute(N,lj);}
;lj=dJ+lj+g;i=lh.length;while(i-- ){lh[i]=lj+lh[i].join(dD);}
;lo=eO.test(lk)&&ln.parentNode||ln;ll=lh.join(dI);}
;if(ll){try{fr.apply(li,ev.call(lo.querySelectorAll(ll),0));return li;}
catch(lp){}
finally{if(!lg){ln.removeAttribute(N);}
;}
;}
;}
;return lc(lk,ln,li,lm,lf);}
;if(la){eV(function(lq){kW=la.call(lq,l);try{la.call(lq,q);kV.push(dn,eS);}
catch(e){}
;}
);kV=new RegExp(kV.join(ds));eX.matchesSelector=function(ls,lr){lr=lr.replace(kY,F);if(!er(ls)&&!kV.test(lr)&&(!kX||!kX.test(lr))){try{var lt=la.call(ls,lr);if(lt||kW||ls.document&&ls.document.nodeType!==11){return lt;}
;}
catch(e){}
;}
;return eX(lr,null,null,[ls]).length>0;}
;}
;}
)();}
;eR.pseudos[r]=eR.pseudos[ed];function fu(){}
;eR.filters=fu.prototype=eR.pseudos;eR.setFilters=new fu();qx.bom.Selector.query=function(lv,lu){return eX(lv,lu);}
;qx.bom.Selector.matches=function(lx,lw){return eX(lx,null,null,lw);}
;}
)(window);}
)();
(function(){var a="none",b="qx.module.Css",c="",d="display";qx.Bootstrap.define(b,{statics:{setStyle:function(name,e){if(/\w-\w/.test(name)){name=qx.lang.String.camelCase(name);}
;this._forEachElement(function(f){qx.bom.element.Style.set(f,name,e);}
);return this;}
,getStyle:function(name){if(this[0]&&qx.dom.Node.isElement(this[0])){if(/\w-\w/.test(name)){name=qx.lang.String.camelCase(name);}
;return qx.bom.element.Style.get(this[0],name);}
;return null;}
,setStyles:function(g){for(var name in g){this.setStyle(name,g[name]);}
;return this;}
,getStyles:function(j){var h={};for(var i=0;i<j.length;i++ ){h[j[i]]=this.getStyle(j[i]);}
;return h;}
,addClass:function(name){this._forEachElement(function(k){qx.bom.element.Class.add(k,name);}
);return this;}
,addClasses:function(m){this._forEachElement(function(n){qx.bom.element.Class.addClasses(n,m);}
);return this;}
,removeClass:function(name){this._forEachElement(function(o){qx.bom.element.Class.remove(o,name);}
);return this;}
,removeClasses:function(p){this._forEachElement(function(q){qx.bom.element.Class.removeClasses(q,p);}
);return this;}
,hasClass:function(name){if(!this[0]||!qx.dom.Node.isElement(this[0])){return false;}
;return qx.bom.element.Class.has(this[0],name);}
,getClass:function(){if(!this[0]||!qx.dom.Node.isElement(this[0])){return c;}
;return qx.bom.element.Class.get(this[0]);}
,toggleClass:function(name){var r=qx.bom.element.Class;this._forEachElement(function(s){r.has(s,name)?r.remove(s,name):r.add(s,name);}
);return this;}
,toggleClasses:function(t){for(var i=0,l=t.length;i<l;i++ ){this.toggleClass(t[i]);}
;return this;}
,replaceClass:function(v,u){this._forEachElement(function(w){qx.bom.element.Class.replace(w,v,u);}
);return this;}
,getHeight:function(){var x=this[0];if(x){if(qx.dom.Node.isElement(x)){return qx.bom.element.Dimension.getHeight(x);}
else if(qx.dom.Node.isDocument(x)){return qx.bom.Document.getHeight(qx.dom.Node.getWindow(x));}
else if(qx.dom.Node.isWindow(x)){return qx.bom.Viewport.getHeight(x);}
;}
;return null;}
,getWidth:function(){var y=this[0];if(y){if(qx.dom.Node.isElement(y)){return qx.bom.element.Dimension.getWidth(y);}
else if(qx.dom.Node.isDocument(y)){return qx.bom.Document.getWidth(qx.dom.Node.getWindow(y));}
else if(qx.dom.Node.isWindow(y)){return qx.bom.Viewport.getWidth(y);}
;}
;return null;}
,getOffset:function(){var z=this[0];if(z&&qx.dom.Node.isElement(z)){return qx.bom.element.Location.get(z);}
;return null;}
,getContentHeight:function(){var A=this[0];if(qx.dom.Node.isElement(A)){return qx.bom.element.Dimension.getContentHeight(A);}
;return null;}
,getContentWidth:function(){var B=this[0];if(qx.dom.Node.isElement(B)){return qx.bom.element.Dimension.getContentWidth(B);}
;return null;}
,getPosition:function(){var C=this[0];if(qx.dom.Node.isElement(C)){return qx.bom.element.Location.getPosition(C);}
;return null;}
,includeStylesheet:function(E,D){qx.bom.Stylesheet.includeFile(E,D);}
,hide:function(){this._forEachElement(function(F,H){var I=this.eq(H);var G=I.getStyle(d);if(G!==a){I[0].$$qPrevDisp=G;I.setStyle(d,a);}
;}
);return this;}
,show:function(){this._forEachElement(function(P,J){var K=this.eq(J);var N=K.getStyle(d);var M=K[0].$$qPrevDisp;var O;if(N==a){if(M&&M!=a){O=M;}
else {var L=qxWeb.getDocument(K[0]);O=qx.module.Css.__ff(K[0].tagName,L);}
;K.setStyle(d,O);K[0].$$qPrevDisp=a;}
;}
);return this;}
,__fe:{},__ff:function(T,Q){var S=qx.module.Css.__fe;if(!S[T]){var U=Q||document;var R=qxWeb(U.createElement(T)).appendTo(Q.body);S[T]=R.getStyle(d);R.remove();}
;return S[T]||c;}
},defer:function(V){qxWeb.$attach({"setStyle":V.setStyle,"getStyle":V.getStyle,"setStyles":V.setStyles,"getStyles":V.getStyles,"addClass":V.addClass,"addClasses":V.addClasses,"removeClass":V.removeClass,"removeClasses":V.removeClasses,"hasClass":V.hasClass,"getClass":V.getClass,"toggleClass":V.toggleClass,"toggleClasses":V.toggleClasses,"replaceClass":V.replaceClass,"getHeight":V.getHeight,"getWidth":V.getWidth,"getOffset":V.getOffset,"getContentHeight":V.getContentHeight,"getContentWidth":V.getContentWidth,"getPosition":V.getPosition,"hide":V.hide,"show":V.show});qxWeb.$attachStatic({"includeStylesheet":V.includeStylesheet});}
});}
)();
(function(){var a='',b="(^|\\s)",c=" is undefined",d='function',e="(\\s|$)",f="",g="\\b|\\b",h="qx.debug",j="qx.bom.element.Class",k=" cannot be determined",m='SVGAnimatedString',n="html.classlist",o="default",p=" ",q='object',r="className for element ",s="g",t="$2",u="native",v="\\b",w='undefined';qx.Bootstrap.define(j,{statics:{__fg:/\s+/g,__fh:/^\s+|\s+$/g,add:{"native":function(x,name){x.classList.add(name);return name;}
,"default":function(y,name){if(!this.has(y,name)){y.className+=(y.className?p:f)+name;}
;return name;}
}[qx.core.Environment.get(n)?u:o],addClasses:{"native":function(A,z){for(var i=0;i<z.length;i++ ){A.classList.add(z[i]);}
;return A.className;}
,"default":function(C,E){var D={};var F;var B=C.className;if(B){F=B.split(this.__fg);for(var i=0,l=F.length;i<l;i++ ){D[F[i]]=true;}
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
,"default":function(S,Q){var R=new RegExp(v+Q.join(g)+v,s);return S.className=S.className.replace(R,f).replace(this.__fh,f).replace(this.__fg,p);}
}[qx.core.Environment.get(n)?u:o],replace:function(V,U,T){if(!this.has(V,U)){return f;}
;this.remove(V,U);return this.add(V,T);}
,toggle:{"native":function(X,name,W){if(W===undefined){X.classList.toggle(name);}
else {W?this.add(X,name):this.remove(X,name);}
;return name;}
,"default":function(ba,name,Y){if(Y==null){Y=!this.has(ba,name);}
;Y?this.add(ba,name):this.remove(ba,name);return name;}
}[qx.core.Environment.get(n)?u:o]}});}
)();
(function(){var a="borderBottomWidth",b="scroll",c="qx.bom.element.Location",d="engine.version",e="paddingLeft",f="borderRightWidth",g="auto",h="static",i="borderTopWidth",j="borderLeftWidth",k="marginBottom",l="marginTop",m="overflowY",n="marginLeft",o="border-box",p="padding",q="paddingBottom",r="paddingTop",s="gecko",t="marginRight",u="browser.quirksmode",v="mshtml",w="engine.name",x="position",y="margin",z="paddingRight",A="BODY",B="overflowX",C="border",D="browser.documentmode";qx.Bootstrap.define(c,{statics:{__fi:function(F,E){return qx.bom.element.Style.get(F,E,qx.bom.element.Style.COMPUTED_MODE,false);}
,__fj:function(H,G){return parseInt(qx.bom.element.Style.get(H,G,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;}
,__fk:function(J){var K=0,top=0;var I=qx.dom.Node.getWindow(J);K-=qx.bom.Viewport.getScrollLeft(I);top-=qx.bom.Viewport.getScrollTop(I);return {left:K,top:top};}
,__fl:qx.core.Environment.select(w,{"mshtml":function(N){var M=qx.dom.Node.getDocument(N);var L=M.body;var O=0;var top=0;O-=L.clientLeft+M.documentElement.clientLeft;top-=L.clientTop+M.documentElement.clientTop;if(!qx.core.Environment.get(u)){O+=this.__fj(L,j);top+=this.__fj(L,i);}
;return {left:O,top:top};}
,"webkit":function(R){var Q=qx.dom.Node.getDocument(R);var P=Q.body;var S=P.offsetLeft;var top=P.offsetTop;if(parseFloat(qx.core.Environment.get(d))<530.17){S+=this.__fj(P,j);top+=this.__fj(P,i);}
;return {left:S,top:top};}
,"gecko":function(U){var T=qx.dom.Node.getDocument(U).body;var V=T.offsetLeft;var top=T.offsetTop;if(parseFloat(qx.core.Environment.get(d))<1.9){V+=this.__fj(T,n);top+=this.__fj(T,l);}
;if(qx.bom.element.BoxSizing.get(T)!==o){V+=this.__fj(T,j);top+=this.__fj(T,i);}
;return {left:V,top:top};}
,"default":function(X){var W=qx.dom.Node.getDocument(X).body;var Y=W.offsetLeft;var top=W.offsetTop;return {left:Y,top:top};}
}),__fm:function(ba){var bb=ba.getBoundingClientRect();return {left:Math.round(bb.left),top:Math.round(bb.top)};}
,get:function(bg,bh){if(bg.tagName==A){var location=this.__fn(bg);var bk=location.left;var top=location.top;}
else {var bc=this.__fl(bg);var bf=this.__fm(bg);var scroll=this.__fk(bg);var bk=bf.left+bc.left-scroll.left;var top=bf.top+bc.top-scroll.top;}
;var bd=bk+bg.offsetWidth;var be=top+bg.offsetHeight;if(bh){if(bh==p||bh==b){var bj=qx.bom.element.Style.get(bg,B);if(bj==b||bj==g){bd+=bg.scrollWidth-bg.offsetWidth+this.__fj(bg,j)+this.__fj(bg,f);}
;var bi=qx.bom.element.Style.get(bg,m);if(bi==b||bi==g){be+=bg.scrollHeight-bg.offsetHeight+this.__fj(bg,i)+this.__fj(bg,a);}
;}
;switch(bh){case p:bk+=this.__fj(bg,e);top+=this.__fj(bg,r);bd-=this.__fj(bg,z);be-=this.__fj(bg,q);case b:bk-=bg.scrollLeft;top-=bg.scrollTop;bd-=bg.scrollLeft;be-=bg.scrollTop;case C:bk+=this.__fj(bg,j);top+=this.__fj(bg,i);bd-=this.__fj(bg,f);be-=this.__fj(bg,a);break;case y:bk-=this.__fj(bg,n);top-=this.__fj(bg,l);bd+=this.__fj(bg,t);be+=this.__fj(bg,k);break;};}
;return {left:bk,top:top,right:bd,bottom:be};}
,__fn:function(bl){var top=bl.offsetTop;var bm=bl.offsetLeft;if(qx.core.Environment.get(w)!==v||!((parseFloat(qx.core.Environment.get(d))<8||qx.core.Environment.get(D)<8)&&!qx.core.Environment.get(u))){top+=this.__fj(bl,l);bm+=this.__fj(bl,n);}
;if(qx.core.Environment.get(w)===s){top+=this.__fj(bl,j);bm+=this.__fj(bl,i);}
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
(function(){var a="mshtml",b="engine.name",c="*",d="load",e="left",f="qx.module.Event",g="undefined",h="DOMContentLoaded",n="browser.documentmode",o="complete";qx.Bootstrap.define(f,{statics:{__fo:{},__fp:{on:{},off:{}},on:function(w,t,u){for(var i=0;i<this.length;i++ ){var p=this[i];var q=u||qxWeb(p);var v=qx.module.Event.__fp.on;var s=v[c]||[];if(v[w]){s=s.concat(v[w]);}
;for(var j=0,m=s.length;j<m;j++ ){s[j](p,w,t,u);}
;var r=function(event){var B=qx.module.Event.__fo;var A=B[c]||[];if(B[w]){A=A.concat(B[w]);}
;for(var x=0,y=A.length;x<y;x++ ){event=A[x](event,p,w);}
;t.apply(this,[event]);}
.bind(q);r.original=t;if(qx.bom.Event.supportsEvent(p,w)){qx.bom.Event.addNativeListener(p,w,r);}
;if(!p.__fq){p.__fq=new qx.event.Emitter();}
;var z=p.__fq.on(w,r,q);if(!p.__fr){p.__fr={};}
;if(!p.__fr[w]){p.__fr[w]={};}
;p.__fr[w][z]=r;if(!u){if(!p.__fs){p.__fs={};}
;p.__fs[z]=q;}
;}
;return this;}
,off:function(L,D,I){var H=(D===null&&I===null);for(var j=0;j<this.length;j++ ){var C=this[j];if(!C.__fr){continue;}
;var N=[];if(L!==null){N.push(L);}
else {for(var F in C.__fr){N.push(F);}
;}
;for(var i=0,l=N.length;i<l;i++ ){for(var G in C.__fr[N[i]]){var K=C.__fr[N[i]][G];if(H||K==D||K.original==D){var E=typeof C.__fs!==g&&C.__fs[G];var O;if(!I&&E){O=C.__fs[G];}
;C.__fq.off(N[i],K,O||I);if(H||K.original==D){qx.bom.Event.removeNativeListener(C,N[i],K);}
;delete C.__fr[N[i]][G];if(E){delete C.__fs[G];}
;}
;}
;var J=qx.module.Event.__fp.off;var M=J[c]||[];if(J[L]){M=M.concat(J[L]);}
;for(var k=0,m=M.length;k<m;k++ ){M[k](C,L,D,I);}
;}
;}
;return this;}
,allOff:function(P){return this.off(P||null,null,null);}
,emit:function(Q,R){for(var j=0;j<this.length;j++ ){var S=this[j];if(S.__fq){S.__fq.emit(Q,R);}
;}
;return this;}
,once:function(U,T,W){var self=this;var V=function(X){self.off(U,V,W);T.call(this,X);}
;this.on(U,V,W);return this;}
,hasListener:function(Y){if(!this[0]||!this[0].__fq||!this[0].__fq.getListeners()[Y]){return false;}
;return this[0].__fq.getListeners()[Y].length>0;}
,copyEventsTo:function(bg){var be=this.concat();var bf=bg.concat();for(var i=be.length-1;i>=0;i-- ){var bb=be[i].getElementsByTagName(c);for(var j=0;j<bb.length;j++ ){be.push(bb[j]);}
;}
;for(var i=bf.length-1;i>=0;i-- ){var bb=bf[i].getElementsByTagName(c);for(var j=0;j<bb.length;j++ ){bf.push(bb[j]);}
;}
;bf.forEach(function(bh){bh.__fq=null;}
);for(var i=0;i<be.length;i++ ){var ba=be[i];if(!ba.__fq){continue;}
;var bc=ba.__fq.getListeners();for(var name in bc){for(var j=bc[name].length-1;j>=0;j-- ){var bd=bc[name][j].listener;if(bd.original){bd=bd.original;}
;qxWeb(bf[i]).on(name,bd,bc[name][j].ctx);}
;}
;}
;}
,__cX:false,ready:function(bi){if(document.readyState===o){window.setTimeout(bi,1);return;}
;var bj=function(){qx.module.Event.__cX=true;bi();}
;qxWeb(window).on(d,bj);var bk=function(){qxWeb(window).off(d,bj);bi();}
;if(qxWeb.env.get(b)!==a||qxWeb.env.get(n)>8){qx.bom.Event.addNativeListener(document,h,bk);}
else {var bl=function(){if(qx.module.Event.__cX){return;}
;try{document.documentElement.doScroll(e);if(document.body){bk();}
;}
catch(bm){window.setTimeout(bl,100);}
;}
;bl();}
;}
,$registerNormalization:function(bq,bn){if(!qx.lang.Type.isArray(bq)){bq=[bq];}
;var bo=qx.module.Event.__fo;for(var i=0,l=bq.length;i<l;i++ ){var bp=bq[i];if(qx.lang.Type.isFunction(bn)){if(!bo[bp]){bo[bp]=[];}
;bo[bp].push(bn);}
;}
;}
,$unregisterNormalization:function(bu,br){if(!qx.lang.Type.isArray(bu)){bu=[bu];}
;var bs=qx.module.Event.__fo;for(var i=0,l=bu.length;i<l;i++ ){var bt=bu[i];if(bs[bt]){qx.lang.Array.remove(bs[bt],br);}
;}
;}
,$getRegistry:function(){return qx.module.Event.__fo;}
,$registerEventHook:function(bA,bx,bw){if(!qx.lang.Type.isArray(bA)){bA=[bA];}
;var by=qx.module.Event.__fp.on;for(var i=0,l=bA.length;i<l;i++ ){var bz=bA[i];if(qx.lang.Type.isFunction(bx)){if(!by[bz]){by[bz]=[];}
;by[bz].push(bx);}
;}
;if(!bw){return;}
;var bv=qx.module.Event.__fp.off;for(var i=0,l=bA.length;i<l;i++ ){var bz=bA[i];if(qx.lang.Type.isFunction(bw)){if(!bv[bz]){bv[bz]=[];}
;bv[bz].push(bw);}
;}
;}
,$unregisterEventHook:function(bG,bD,bC){if(!qx.lang.Type.isArray(bG)){bG=[bG];}
;var bE=qx.module.Event.__fp.on;for(var i=0,l=bG.length;i<l;i++ ){var bF=bG[i];if(bE[bF]){qx.lang.Array.remove(bE[bF],bD);}
;}
;if(!bC){return;}
;var bB=qx.module.Event.__fp.off;for(var i=0,l=bG.length;i<l;i++ ){var bF=bG[i];if(bB[bF]){qx.lang.Array.remove(bB[bF],bC);}
;}
;}
,$getHookRegistry:function(){return qx.module.Event.__fp;}
},defer:function(bH){qxWeb.$attach({"on":bH.on,"off":bH.off,"allOff":bH.allOff,"once":bH.once,"emit":bH.emit,"hasListener":bH.hasListener,"copyEventsTo":bH.copyEventsTo});qxWeb.$attachStatic({"ready":bH.ready,"$registerEventNormalization":bH.$registerNormalization,"$unregisterEventNormalization":bH.$unregisterNormalization,"$getEventNormalizationRegistry":bH.$getRegistry,"$registerEventHook":bH.$registerEventHook,"$unregisterEventHook":bH.$unregisterEventHook,"$getEventHookRegistry":bH.$getHookRegistry});}
});}
)();
(function(){var a="qx.event.Emitter",b="*";qx.Bootstrap.define(a,{extend:Object,statics:{__ft:[]},members:{__fr:null,__fu:null,on:function(name,c,d){var e=qx.event.Emitter.__ft.length;this.__fv(name).push({listener:c,ctx:d,id:e});qx.event.Emitter.__ft.push({name:name,listener:c,ctx:d});return e;}
,once:function(name,f,g){var h=qx.event.Emitter.__ft.length;this.__fv(name).push({listener:f,ctx:g,once:true,id:h});qx.event.Emitter.__ft.push({name:name,listener:f,ctx:g});return h;}
,off:function(name,l,j){var k=this.__fv(name);for(var i=k.length-1;i>=0;i-- ){var m=k[i];if(m.listener==l&&m.ctx==j){k.splice(i,1);qx.event.Emitter.__ft[m.id]=null;return m.id;}
;}
;return null;}
,offById:function(o){var n=qx.event.Emitter.__ft[o];if(n){this.off(n.name,n.listener,n.ctx);}
;return null;}
,addListener:function(name,p,q){return this.on(name,p,q);}
,addListenerOnce:function(name,r,s){return this.once(name,r,s);}
,removeListener:function(name,t,u){this.off(name,t,u);}
,removeListenerById:function(v){this.offById(v);}
,emit:function(name,y){var x=this.__fv(name);for(var i=0;i<x.length;i++ ){var w=x[i];w.listener.call(w.ctx,y);if(w.once){x.splice(i,1);i-- ;}
;}
;x=this.__fv(b);for(var i=x.length-1;i>=0;i-- ){var w=x[i];w.listener.call(w.ctx,y);}
;}
,getListeners:function(){return this.__fr;}
,__fv:function(name){if(this.__fr==null){this.__fr={};}
;if(this.__fr[name]==null){this.__fr[name]=[];}
;return this.__fr[name];}
}});}
)();
(function(){var a="start",b="animationEnd",c="",d="none",e="qx.module.Animation",f="animationIteration",g="end",h="animationStart",j="ease-in",k="iteration",l="ease-out",m="display";qx.Bootstrap.define(e,{events:{"animationStart":undefined,"animationIteration":undefined,"animationEnd":undefined},statics:{getAnimationHandles:function(){var n=[];for(var i=0;i<this.length;i++ ){n[i]=this[i].$$animation;}
;return n;}
,_fadeOut:{duration:700,timing:l,keep:100,keyFrames:{'0':{opacity:1},'100':{opacity:0,display:d}}},_fadeIn:{duration:700,timing:j,keep:100,keyFrames:{'0':{opacity:0},'100':{opacity:1}}},animate:function(p,o){qx.module.Animation._animate.bind(this)(p,o,false);return this;}
,animateReverse:function(r,q){qx.module.Animation._animate.bind(this)(r,q,true);return this;}
,_animate:function(u,s,t){this._forEachElement(function(v,i){if(v.$$animation){v.$$animation.stop();}
;var w;if(t){w=qx.bom.element.Animation.animateReverse(v,u,s);}
else {w=qx.bom.element.Animation.animate(v,u,s);}
;var self=this;if(i==0){w.on(a,function(){self.emit(h);}
,w);w.on(k,function(){self.emit(f);}
,w);}
;w.on(g,function(){for(var i=0;i<self.length;i++ ){if(self[i].$$animation){return;}
;}
;self.emit(b);}
,v);}
);}
,play:function(){for(var i=0;i<this.length;i++ ){var x=this[i].$$animation;if(x){x.play();}
;}
;return this;}
,pause:function(){for(var i=0;i<this.length;i++ ){var y=this[i].$$animation;if(y){y.pause();}
;}
;return this;}
,stop:function(){for(var i=0;i<this.length;i++ ){var z=this[i].$$animation;if(z){z.stop();}
;}
;return this;}
,isPlaying:function(){for(var i=0;i<this.length;i++ ){var A=this[i].$$animation;if(A&&A.isPlaying()){return true;}
;}
;return false;}
,isEnded:function(){for(var i=0;i<this.length;i++ ){var B=this[i].$$animation;if(B&&!B.isEnded()){return false;}
;}
;return true;}
,fadeIn:function(C){this.setStyle(m,c);return this.animate(qx.module.Animation._fadeIn,C);}
,fadeOut:function(D){return this.animate(qx.module.Animation._fadeOut,D);}
},defer:function(E){qxWeb.$attach({"animate":E.animate,"animateReverse":E.animateReverse,"fadeIn":E.fadeIn,"fadeOut":E.fadeOut,"play":E.play,"pause":E.pause,"stop":E.stop,"isEnded":E.isEnded,"isPlaying":E.isPlaying,"getAnimationHandles":E.getAnimationHandles});}
});}
)();
(function(){var a="css.animation",b="translate",c="rotate",d="skew",e="scale",f="qx.bom.element.Animation";qx.Bootstrap.define(f,{statics:{animate:function(h,k,g){var j=qx.bom.element.Animation.__fw(h,k.keyFrames);if(qx.core.Environment.get(a)&&j){return qx.bom.element.AnimationCss.animate(h,k,g);}
else {return qx.bom.element.AnimationJs.animate(h,k,g);}
;}
,animateReverse:function(m,o,l){var n=qx.bom.element.Animation.__fw(m,o.keyFrames);if(qx.core.Environment.get(a)&&n){return qx.bom.element.AnimationCss.animateReverse(m,o,l);}
else {return qx.bom.element.AnimationJs.animateReverse(m,o,l);}
;}
,__fw:function(p,t){var r=[];for(var v in t){var s=t[v];for(var u in s){if(r.indexOf(u)==-1){r.push(u);}
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
(function(){var a="fill-mode",b="No 'keyFrames' given > 0",c="repeat",d="timing",f="start",g="end",h="Anni",i="keyFrames",j="Keyframe position needs to be between 0 and 100",k="alternate",l="qx.debug",m="keep",n="duration",o=":",p="delay",q="} ",r="name",s="iteration-event",t="",u="origin",v="Unknown key '",w="forwards",x="' in the animation description.",y="start-event",z="iteration",A="end-event",B="css.animation",C="ms ",D="% {",E=" ",F="linear",G=";",H="qx.bom.element.AnimationCss",I="keyframes";qx.Bootstrap.define(H,{statics:{__dk:null,__fx:h,__co:0,__dh:{},__fy:{"scale":true,"rotate":true,"skew":true,"translate":true},__fz:qx.core.Environment.get(B),animateReverse:function(K,L,J){return this._animate(K,L,J,true);}
,animate:function(N,O,M){return this._animate(N,O,M,false);}
,_animate:function(P,W,V,R){this.__fE(W);if(qx.core.Environment.get(l)){this.__fF(W);}
;var T=W.keep;if(T!=null&&(R||(W.alternate&&W.repeat%2==0))){T=100-T;}
;if(!this.__dk){this.__dk=qx.bom.Stylesheet.createElement();}
;var S=W.keyFrames;if(V==undefined){V=W.duration;}
;if(this.__fz!=null){var name=this.__fG(S,R);var Q=name+E+V+C+W.repeat+E+W.timing+E+(W.delay?W.delay+C:t)+(W.alternate?k:t);qx.bom.Event.addNativeListener(P,this.__fz[y],this.__fA);qx.bom.Event.addNativeListener(P,this.__fz[s],this.__fB);qx.bom.Event.addNativeListener(P,this.__fz[A],this.__fC);P.style[qx.lang.String.camelCase(this.__fz[r])]=Q;if(T&&T==100&&this.__fz[a]){P.style[this.__fz[a]]=w;}
;}
;var U=new qx.bom.element.AnimationHandle();U.desc=W;U.el=P;U.keep=T;P.$$animation=U;if(W.origin!=null){qx.bom.element.Transform.setOrigin(P,W.origin);}
;if(this.__fz==null){window.setTimeout(function(){qx.bom.element.AnimationCss.__fC({target:P});}
,0);}
;return U;}
,__fA:function(e){e.target.$$animation.emit(f,e.target);}
,__fB:function(e){if(e.target!=null&&e.target.$$animation!=null){e.target.$$animation.emit(z,e.target);}
;}
,__fC:function(e){var X=e.target;var Y=X.$$animation;if(!Y){return;}
;var bb=Y.desc;if(qx.bom.element.AnimationCss.__fz!=null){var ba=qx.lang.String.camelCase(qx.bom.element.AnimationCss.__fz[r]);X.style[ba]=t;qx.bom.Event.removeNativeListener(X,qx.bom.element.AnimationCss.__fz[r],qx.bom.element.AnimationCss.__fC);}
;if(bb.origin!=null){qx.bom.element.Transform.setOrigin(X,t);}
;qx.bom.element.AnimationCss.__fD(X,bb.keyFrames[Y.keep]);X.$$animation=null;Y.el=null;Y.ended=true;Y.emit(g,X);}
,__fD:function(bc,bd){var bf;for(var be in bd){if(be in qx.bom.element.AnimationCss.__fy){if(!bf){bf={};}
;bf[be]=bd[be];}
else {bc.style[qx.lang.String.camelCase(be)]=bd[be];}
;}
;if(bf){qx.bom.element.Transform.transform(bc,bf);}
;}
,__fE:function(bg){if(!bg.hasOwnProperty(k)){bg.alternate=false;}
;if(!bg.hasOwnProperty(m)){bg.keep=null;}
;if(!bg.hasOwnProperty(c)){bg.repeat=1;}
;if(!bg.hasOwnProperty(d)){bg.timing=F;}
;if(!bg.hasOwnProperty(u)){bg.origin=null;}
;}
,__fF:qx.core.Environment.select(l,{"true":function(bi){var bh=[u,n,m,i,p,c,d,k];for(var name in bi){if(!(bh.indexOf(name)!=-1)){qx.Bootstrap.warn(v+name+x);}
;}
;if(bi.keyFrames==null){qx.Bootstrap.warn(b);}
else {for(var bj in bi.keyFrames){if(bj<0||bj>100){qx.Bootstrap.warn(j);}
;}
;}
;}
,"default":null}),__fG:function(frames,bl){var bo=t;for(var bs in frames){bo+=(bl?-(bs-100):bs)+D;var bn=frames[bs];var bq;for(var bk in bn){if(bk in this.__fy){if(!bq){bq={};}
;bq[bk]=bn[bk];}
else {var br=qx.bom.Style.getPropertyName(bk);var bm=(br!==null)?qx.bom.Style.getCssName(br):t;bo+=(bm||bk)+o+bn[bk]+G;}
;}
;if(bq){bo+=qx.bom.element.Transform.getCss(bq);}
;bo+=q;}
;if(this.__dh[bo]){return this.__dh[bo];}
;var name=this.__fx+this.__co++ ;var bp=this.__fz[I]+E+name;qx.bom.Stylesheet.addRule(this.__dk,bp,bo);this.__dh[bo]=name;return name;}
}});}
)();
(function(){var a="css.animation",b="Element",c="",d="qx.bom.element.AnimationHandle",e="play-state",f="paused",g="running";qx.Bootstrap.define(d,{extend:qx.event.Emitter,construct:function(){var h=qx.core.Environment.get(a);this.__fH=h&&h[e];this.__fI=true;}
,events:{"start":b,"end":b,"iteration":b},members:{__fH:null,__fI:false,__fJ:false,isPlaying:function(){return this.__fI;}
,isEnded:function(){return this.__fJ;}
,isPaused:function(){return this.el.style[this.__fH]==f;}
,pause:function(){if(this.el){this.el.style[this.__fH]=f;this.el.$$animation.__fI=false;if(this.animationId&&qx.bom.element.AnimationJs){qx.bom.element.AnimationJs.pause(this);}
;}
;}
,play:function(){if(this.el){this.el.style[this.__fH]=g;this.el.$$animation.__fI=true;if(this.i!=undefined&&qx.bom.element.AnimationJs){qx.bom.element.AnimationJs.play(this);}
;}
;}
,stop:function(){if(this.el&&qx.core.Environment.get(a)&&!this.jsAnimation){this.el.style[this.__fH]=c;this.el.style[qx.core.Environment.get(a).name]=c;this.el.$$animation.__fI=false;this.el.$$animation.__fJ=true;}
else if(this.jsAnimation){this.stopped=true;qx.bom.element.AnimationJs.stop(this);}
;}
}});}
)();
(function(){var c="cm",d="mm",e="0",f="pt",g="pc",h="",k="%",l="em",m="qx.bom.element.AnimationJs",n="infinite",o="#",p="in",q="px",r="start",s="end",t="ex",u="undefined",v="iteration",w="string";qx.Bootstrap.define(m,{statics:{__fK:30,__fL:[k,p,c,d,l,t,f,g,q],animate:function(y,z,x){return this._animate(y,z,x,false);}
,animateReverse:function(B,C,A){return this._animate(B,C,A,true);}
,_animate:function(D,N,M,F){if(D.$$animation){return D.$$animation;}
;N=qx.lang.Object.clone(N,true);if(M==undefined){M=N.duration;}
;var I=N.keyFrames;var G=this.__fR(I);var H=this.__fQ(M,G);var K=parseInt(M/H,10);this.__fM(I,D);var L=this.__fN(K,H,G,I,M,N.timing);var E=new qx.bom.element.AnimationHandle();E.jsAnimation=true;if(F){L.reverse();E.reverse=true;}
;E.desc=N;E.el=D;E.delta=L;E.stepTime=H;E.steps=K;D.$$animation=E;E.i=0;E.initValues={};E.repeatSteps=this.__fO(K,N.repeat);var J=N.delay||0;var self=this;E.delayId=window.setTimeout(function(){E.delayId=null;self.play(E);}
,J);return E;}
,__fM:function(S,O){var V={};for(var R in S){for(var name in S[R]){var P=qx.bom.Style.getPropertyName(name);if(P&&P!=name){var U=qx.bom.Style.getCssName(P);S[R][U]=S[R][name];delete S[R][name];name=U;}
;if(V[name]==undefined){var T=S[R][name];if(typeof T==w){V[name]=T.substring((parseInt(T,10)+h).length,T.length);}
else {V[name]=h;}
;}
;}
;}
;for(var R in S){var Q=S[R];for(var name in V){if(Q[name]==undefined){if(name in O.style){if(window.getComputedStyle){Q[name]=getComputedStyle(O,null)[name];}
else {Q[name]=O.style[name];}
;}
else {Q[name]=O[name];}
;if(Q[name]===h&&this.__fL.indexOf(V[name])!=-1){Q[name]=e+V[name];}
;}
;}
;}
;}
,__fN:function(bg,ba,Y,bc,bk,be){var bb=new Array(bg);var bm=1;bb[0]=bc[0];var X=bc[0];var bd=bc[Y[bm]];for(var i=1;i<bb.length;i++ ){if(i*ba/bk*100>Y[bm]){X=bd;bm++ ;bd=bc[Y[bm]];}
;bb[i]={};for(var name in bd){var bh=bd[name]+h;if(bh.charAt(0)==o){var bj=qx.util.ColorUtil.cssStringToRgb(X[name]);var bi=qx.util.ColorUtil.cssStringToRgb(bh);var W=[];for(var j=0;j<bj.length;j++ ){var bf=bj[j]-bi[j];W[j]=parseInt(bj[j]-bf*qx.bom.AnimationFrame.calculateTiming(be,i/bg),10);}
;bb[i][name]=qx.util.ColorUtil.rgbToHexString(W);}
else if(!isNaN(parseInt(bh,10))){var bl=bh.substring((parseInt(bh,10)+h).length,bh.length);var bf=parseFloat(bh)-parseFloat(X[name]);bb[i][name]=(parseFloat(X[name])+bf*qx.bom.AnimationFrame.calculateTiming(be,i/bg))+bl;}
else {bb[i][name]=X[name]+h;}
;}
;}
;bb[bb.length-1]=bc[100];return bb;}
,play:function(bn){bn.emit(r,bn.el);var bo=window.setInterval(function(){bn.repeatSteps-- ;var bp=bn.delta[bn.i%bn.steps];if(bn.i===0){for(var name in bp){if(bn.initValues[name]===undefined){if(bn.el[name]!==undefined){bn.initValues[name]=bn.el[name];}
else if(qx.bom.element.Style){bn.initValues[name]=qx.bom.element.Style.get(bn.el,qx.lang.String.camelCase(name));}
else {bn.initValues[name]=bn.el.style[qx.lang.String.camelCase(name)];}
;}
;}
;}
;qx.bom.element.AnimationJs.__fP(bn.el,bp);bn.i++ ;if(bn.i%bn.steps==0){bn.emit(v,bn.el);if(bn.desc.alternate){bn.delta.reverse();}
;}
;if(bn.repeatSteps<0){qx.bom.element.AnimationJs.stop(bn);}
;}
,bn.stepTime);bn.animationId=bo;return bn;}
,pause:function(bq){window.clearInterval(bq.animationId);bq.animationId=null;return bq;}
,stop:function(bu){var bt=bu.desc;var br=bu.el;var bs=bu.initValues;if(bu.animationId){window.clearInterval(bu.animationId);}
;if(bu.delayId){window.clearTimeout(bu.delayId);}
;if(br==undefined){return bu;}
;var bv=bt.keep;if(bv!=undefined&&!bu.stopped){if(bu.reverse||(bt.alternate&&bt.repeat&&bt.repeat%2==0)){bv=100-bv;}
;this.__fP(br,bt.keyFrames[bv]);}
else {this.__fP(br,bs);}
;br.$$animation=null;bu.el=null;bu.ended=true;bu.animationId=null;bu.emit(s,br);return bu;}
,__fO:function(bx,bw){if(bw==undefined){return bx;}
;if(bw==n){return Number.MAX_VALUE;}
;return bx*bw;}
,__fP:function(bz,by){for(var bA in by){if(by[bA]===undefined){continue;}
;if(typeof bz.style[bA]===u&&bA in bz){bz[bA]=by[bA];continue;}
;var name=qx.lang.String.camelCase(bA);if(qx.bom.element.Style){qx.bom.element.Style.set(bz,name,by[bA]);}
else {bz.style[name]=by[bA];}
;}
;}
,__fQ:function(bD,bB){var bE=100;for(var i=0;i<bB.length-1;i++ ){bE=Math.min(bE,bB[i+1]-bB[i]);}
;var bC=bD*bE/100;while(bC>this.__fK){bC=bC/2;}
;return Math.round(bC);}
,__fR:function(bG){var bF=Object.keys(bG);for(var i=0;i<bF.length;i++ ){bF[i]=parseInt(bF[i],10);}
;bF.sort(function(a,b){return a-b;}
);return bF;}
}});}
)();
(function(){var b="ease-in-out",c="Number",d="css.animation.requestframe",e="qx.bom.AnimationFrame",f="frame",g="end",h="linear",j="ease-in",k="ease-out";qx.Bootstrap.define(e,{extend:qx.event.Emitter,events:{"end":undefined,"frame":c},members:{__fS:false,startSequence:function(l){this.__fS=false;var m=+(new Date());var n=function(p){if(this.__fS){this.id=null;return;}
;if(p>=m+l){this.emit(g);this.id=null;}
else {var o=Math.max(p-m,0);this.emit(f,o);this.id=qx.bom.AnimationFrame.request(n,this);}
;}
;this.id=qx.bom.AnimationFrame.request(n,this);}
,cancelSequence:function(){this.__fS=true;}
},statics:{TIMEOUT:30,calculateTiming:function(q,x){if(q==j){var a=[3.1223e-7,0.0757,1.2646,-0.167,-0.4387,0.2654];}
else if(q==k){var a=[-7.0198e-8,1.652,-0.551,-0.0458,0.1255,-0.1807];}
else if(q==h){return x;}
else if(q==b){var a=[2.482e-7,-0.2289,3.3466,-1.0857,-1.7354,0.7034];}
else {var a=[-0.0021,0.2472,9.8054,-21.6869,17.7611,-5.1226];}
;var y=0;for(var i=0;i<a.length;i++ ){y+=a[i]*Math.pow(x,i);}
;return y;}
,request:function(r,t){var s=qx.core.Environment.get(d);var u=function(v){if(v<1e10){v=this.__fT+v;}
;v=v||+(new Date());r.call(t,v);}
;if(s){return window[s](u);}
else {return window.setTimeout(function(){u();}
,qx.bom.AnimationFrame.TIMEOUT);}
;}
},defer:function(w){w.__fT=window.performance&&performance.timing&&performance.timing.navigationStart;if(!w.__fT){w.__fT=Date.now();}
;}
});}
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
(function(){var a="backface-visibility",b="name",c="perspective",d="visible",e="",f="(",g="px",h="css.transform",j=" ",k="qx.bom.element.Transform",l="hidden",m="Z",n=";",o="perspective-origin",p=") ",q="X",r="Y",s="origin",t="style",u=":";qx.Bootstrap.define(k,{statics:{__fU:[q,r,m],__fV:qx.core.Environment.get(h),transform:function(v,x){var y=this.__fW(x);if(this.__fV!=null){var w=this.__fV[b];v.style[w]=y;}
;}
,translate:function(z,A){this.transform(z,{translate:A});}
,scale:function(B,C){this.transform(B,{scale:C});}
,rotate:function(D,E){this.transform(D,{rotate:E});}
,skew:function(F,G){this.transform(F,{skew:G});}
,getCss:function(I){var J=this.__fW(I);if(this.__fV!=null){var H=this.__fV[b];return qx.bom.Style.getCssName(H)+u+J+n;}
;return e;}
,setOrigin:function(K,L){if(this.__fV!=null){K.style[this.__fV[s]]=L;}
;}
,getOrigin:function(M){if(this.__fV!=null){return M.style[this.__fV[s]];}
;return e;}
,setStyle:function(N,O){if(this.__fV!=null){N.style[this.__fV[t]]=O;}
;}
,getStyle:function(P){if(this.__fV!=null){return P.style[this.__fV[t]];}
;return e;}
,setPerspective:function(Q,R){if(this.__fV!=null){Q.style[this.__fV[c]]=R+g;}
;}
,getPerspective:function(S){if(this.__fV!=null){return S.style[this.__fV[c]];}
;return e;}
,setPerspectiveOrigin:function(T,U){if(this.__fV!=null){T.style[this.__fV[o]]=U;}
;}
,getPerspectiveOrigin:function(V){if(this.__fV!=null){var W=V.style[this.__fV[o]];if(W!=e){return W;}
else {var Y=V.style[this.__fV[o]+q];var X=V.style[this.__fV[o]+r];if(Y!=e){return Y+j+X;}
;}
;}
;return e;}
,setBackfaceVisibility:function(ba,bb){if(this.__fV!=null){ba.style[this.__fV[a]]=bb?d:l;}
;}
,getBackfaceVisibility:function(bc){if(this.__fV!=null){return bc.style[this.__fV[a]]==d;}
;return true;}
,__fW:function(bf){var bg=e;for(var bd in bf){var be=bf[bd];if(qx.Bootstrap.isArray(be)){for(var i=0;i<be.length;i++ ){if(be[i]==undefined){continue;}
;bg+=bd+this.__fU[i]+f;bg+=be[i];bg+=p;}
;}
else {bg+=bd+f+bf[bd]+p;}
;}
;return bg;}
}});}
)();
(function(){var a="qx.util.DeferredCallManager",b="singleton";qx.Class.define(a,{extend:qx.core.Object,type:b,construct:function(){this.__fX={};this.__fY=qx.lang.Function.bind(this.__gd,this);this.__ga=false;}
,members:{__gb:null,__gc:null,__fX:null,__ga:null,__fY:null,schedule:function(d){if(this.__gb==null){this.__gb=window.setTimeout(this.__fY,0);}
;var c=d.toHashCode();if(this.__gc&&this.__gc[c]){return;}
;this.__fX[c]=d;this.__ga=true;}
,cancel:function(f){var e=f.toHashCode();if(this.__gc&&this.__gc[e]){this.__gc[e]=null;return;}
;delete this.__fX[e];if(qx.lang.Object.isEmpty(this.__fX)&&this.__gb!=null){window.clearTimeout(this.__gb);this.__gb=null;}
;}
,__gd:qx.event.GlobalError.observeMethod(function(){this.__gb=null;while(this.__ga){this.__gc=qx.lang.Object.clone(this.__fX);this.__fX={};this.__ga=false;for(var h in this.__gc){var g=this.__gc[h];if(g){this.__gc[h]=null;g.call();}
;}
;}
;this.__gc=null;}
)},destruct:function(){if(this.__gb!=null){window.clearTimeout(this.__gb);}
;this.__fY=this.__fX=null;}
});}
)();
(function(){var a="qx.util.DeferredCall",b="The context object '",c="qx.debug",d="'is already disposed.",e="' of the defered call '";qx.Class.define(a,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);this.__bz=f;this.__bB=g||null;this.__ge=qx.util.DeferredCallManager.getInstance();}
,members:{__bz:null,__bB:null,__ge:null,cancel:function(){this.__ge.cancel(this);}
,schedule:function(){this.__ge.schedule(this);}
,call:function(){if(qx.core.Environment.get(c)){var h=this.__bB;if(h&&h.isDisposed&&h.isDisposed()){this.warn(b+h+e+this+d);}
;}
;this.__bB?this.__bz.apply(this.__bB):this.__bz();}
},destruct:function(){this.cancel();this.__bB=this.__bz=this.__ge=null;}
});}
)();
(function(){var a="Child is already in: ",b="text",c="|bubble|",d="qx.html.Element",f="': ",g="|capture|",h="scroll",j="Invalid capture flag.",k="focus",m="Failed to add event listener for type '",n="Flushing elements...",o="class",p="blur",q="div",r="Flush: ",s="deactivate",t="'",u="css.userselect",v="animationEnd",w="Synced DOM with ",z=" from the target '",A="qx.debug",B="capture",C="visible",D="Root elements could not be inserted into other ones.",E="Has no children!",F="off",G="Invalid callback function",H="__gA",I="releaseCapture",J="Could not move to same index!",K="Invalid context for callback.",L="element",M="",N="Flush invisible element",O="Failed to remove event listener for type '",P="qxSelectable",Q="tabIndex",R="Has no child at this position!",S="Invalid event type.",T="qx.html.Iframe",U="activate",V="Has no parent to remove from.",W=" to the target '",X="mshtml",Y="engine.name",bp=" operations",bq="Flush rendered element",br="none",bl="Has no child: ",bm="css.userselect.none",bn=" ",bo="hidden",bs="on",bt="Switching visibility to: ",bu="id",bv="Could not overwrite existing element!";qx.Class.define(d,{extend:qx.core.Object,construct:function(by,bw,bx){qx.core.Object.call(this);this.__gf=by||q;this.__gg=bw||null;this.__gh=bx||null;}
,statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__gi:{},__gj:null,__gk:null,_scheduleFlush:function(bz){qx.html.Element.__gL.schedule();}
,flush:function(){var bL;if(qx.core.Environment.get(A)){if(this.DEBUG){qx.log.Logger.debug(this,n);}
;}
;var bD=this.__gl();var bB=bD.getFocus();if(bB&&this.__gn(bB)){bD.blur(bB);}
;var bS=bD.getActive();if(bS&&this.__gn(bS)){qx.bom.Element.deactivate(bS);}
;var bG=this.__gm();if(bG&&this.__gn(bG)){qx.bom.Element.releaseCapture(bG);}
;var bM=[];var bN=this._modified;for(var bK in bN){bL=bN[bK];if(bL.__gE()||bL.classname==T){if(bL.__go&&qx.dom.Hierarchy.isRendered(bL.__go)){bM.push(bL);}
else {if(qx.core.Environment.get(A)){if(this.DEBUG){bL.debug(N);}
;}
;bL.__gD();}
;delete bN[bK];}
;}
;for(var i=0,l=bM.length;i<l;i++ ){bL=bM[i];if(qx.core.Environment.get(A)){if(this.DEBUG){bL.debug(bq);}
;}
;bL.__gD();}
;var bI=this._visibility;for(var bK in bI){bL=bI[bK];var bO=bL.__go;if(!bO){delete bI[bK];continue;}
;if(qx.core.Environment.get(A)){if(this.DEBUG){qx.log.Logger.debug(this,bt+bL.__gq);}
;}
;if(!bL.$$disposed){bO.style.display=bL.__gq?M:br;if((qx.core.Environment.get(Y)==X)){if(!(document.documentMode>=8)){bO.style.visibility=bL.__gq?C:bo;}
;}
;}
;delete bI[bK];}
;var scroll=this._scroll;for(var bK in scroll){bL=scroll[bK];var bC=bL.__go;if(bC&&bC.offsetWidth){var bF=true;if(bL.__gt!=null){bL.__go.scrollLeft=bL.__gt;delete bL.__gt;}
;if(bL.__gu!=null){bL.__go.scrollTop=bL.__gu;delete bL.__gu;}
;var bP=bL.__gr;if(bP!=null){var bJ=bP.element.getDomElement();if(bJ&&bJ.offsetWidth){qx.bom.element.Scroll.intoViewX(bJ,bC,bP.align);delete bL.__gr;}
else {bF=false;}
;}
;var bQ=bL.__gs;if(bQ!=null){var bJ=bQ.element.getDomElement();if(bJ&&bJ.offsetWidth){qx.bom.element.Scroll.intoViewY(bJ,bC,bQ.align);delete bL.__gs;}
else {bF=false;}
;}
;if(bF){delete scroll[bK];}
;}
;}
;var bE={"releaseCapture":1,"blur":1,"deactivate":1};for(var i=0;i<this._actions.length;i++ ){var bR=this._actions[i];var bO=bR.element.__go;if(!bO||!bE[bR.type]&&!bR.element.__gE()){continue;}
;var bH=bR.args;bH.unshift(bO);qx.bom.Element[bR.type].apply(qx.bom.Element,bH);}
;this._actions=[];for(var bK in this.__gi){var bA=this.__gi[bK];var bC=bA.element.__go;if(bC){qx.bom.Selection.set(bC,bA.start,bA.end);delete this.__gi[bK];}
;}
;qx.event.handler.Appear.refresh();}
,__gl:function(){if(!this.__gj){var bT=qx.event.Registration.getManager(window);this.__gj=bT.getHandler(qx.event.handler.Focus);}
;return this.__gj;}
,__gm:function(){if(!this.__gk){var bU=qx.event.Registration.getManager(window);this.__gk=bU.getDispatcher(qx.event.dispatch.MouseCapture);}
;return this.__gk.getCaptureElement();}
,__gn:function(bV){var bW=qx.core.ObjectRegistry.fromHashCode(bV.$$element);return bW&&!bW.__gE();}
},members:{__gf:null,__go:null,__a:false,__gp:true,__gq:true,__gr:null,__gs:null,__gt:null,__gu:null,__gv:null,__gw:null,__gx:null,__gg:null,__gh:null,__gy:null,__gz:null,__gA:null,__gB:null,__gC:null,_scheduleChildrenUpdate:function(){if(this.__gB){return;}
;this.__gB=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
,_createDomElement:function(){return qx.dom.Element.create(this.__gf);}
,__gD:function(){if(qx.core.Environment.get(A)){if(this.DEBUG){this.debug(r+this.getAttribute(bu));}
;}
;var length;var bX=this.__gA;if(bX){length=bX.length;var bY;for(var i=0;i<length;i++ ){bY=bX[i];if(bY.__gq&&bY.__gp&&!bY.__go){bY.__gD();}
;}
;}
;if(!this.__go){this.__go=this._createDomElement();this.__go.$$element=this.$$hash;this._copyData(false);if(bX&&length>0){this._insertChildren();}
;}
else {this._syncData();if(this.__gB){this._syncChildren();}
;}
;delete this.__gB;}
,_insertChildren:function(){var ca=this.__gA;var length=ca.length;var cc;if(length>2){var cb=document.createDocumentFragment();for(var i=0;i<length;i++ ){cc=ca[i];if(cc.__go&&cc.__gp){cb.appendChild(cc.__go);}
;}
;this.__go.appendChild(cb);}
else {var cb=this.__go;for(var i=0;i<length;i++ ){cc=ca[i];if(cc.__go&&cc.__gp){cb.appendChild(cc.__go);}
;}
;}
;}
,_syncChildren:function(){var cm=qx.core.ObjectRegistry;var cd=this.__gA;var ck=cd.length;var ce;var ci;var cg=this.__go;var cl=cg.childNodes;var cf=0;var cj;if(qx.core.Environment.get(A)){var ch=0;}
;for(var i=cl.length-1;i>=0;i-- ){cj=cl[i];ci=cm.fromHashCode(cj.$$element);if(!ci||!ci.__gp||ci.__gC!==this){cg.removeChild(cj);if(qx.core.Environment.get(A)){ch++ ;}
;}
;}
;for(var i=0;i<ck;i++ ){ce=cd[i];if(ce.__gp){ci=ce.__go;cj=cl[cf];if(!ci){continue;}
;if(ci!=cj){if(cj){cg.insertBefore(ci,cj);}
else {cg.appendChild(ci);}
;if(qx.core.Environment.get(A)){ch++ ;}
;}
;cf++ ;}
;}
;if(qx.core.Environment.get(A)){if(qx.html.Element.DEBUG){this.debug(w+ch+bp);}
;}
;}
,_copyData:function(co){var cq=this.__go;var cs=this.__gh;if(cs){var cp=qx.bom.element.Attribute;for(var cr in cs){cp.set(cq,cr,cs[cr]);}
;}
;var cs=this.__gg;if(cs){var cn=qx.bom.element.Style;if(co){cn.setStyles(cq,cs);}
else {cn.setCss(cq,cn.compile(cs));}
;}
;var cs=this.__gy;if(cs){for(var cr in cs){this._applyProperty(cr,cs[cr]);}
;}
;var cs=this.__gz;if(cs){qx.event.Registration.getManager(cq).importListeners(cq,cs);delete this.__gz;}
;}
,_syncData:function(){var cx=this.__go;var cw=qx.bom.element.Attribute;var cu=qx.bom.element.Style;var cv=this.__gw;if(cv){var cA=this.__gh;if(cA){var cy;for(var cz in cv){cy=cA[cz];if(cy!==undefined){cw.set(cx,cz,cy);}
else {cw.reset(cx,cz);}
;}
;}
;this.__gw=null;}
;var cv=this.__gv;if(cv){var cA=this.__gg;if(cA){var ct={};for(var cz in cv){ct[cz]=cA[cz];}
;cu.setStyles(cx,ct);}
;this.__gv=null;}
;var cv=this.__gx;if(cv){var cA=this.__gy;if(cA){var cy;for(var cz in cv){this._applyProperty(cz,cA[cz]);}
;}
;this.__gx=null;}
;}
,__gE:function(){var cB=this;while(cB){if(cB.__a){return true;}
;if(!cB.__gp||!cB.__gq){return false;}
;cB=cB.__gC;}
;return false;}
,__gF:function(cC){if(cC.__gC===this){throw new Error(a+cC);}
;if(cC.__a){throw new Error(D);}
;if(cC.__gC){cC.__gC.remove(cC);}
;cC.__gC=this;if(!this.__gA){this.__gA=[];}
;if(this.__go){this._scheduleChildrenUpdate();}
;}
,__gG:function(cD){if(cD.__gC!==this){throw new Error(bl+cD);}
;if(this.__go){this._scheduleChildrenUpdate();}
;delete cD.__gC;}
,__gH:function(cE){if(cE.__gC!==this){throw new Error(bl+cE);}
;if(this.__go){this._scheduleChildrenUpdate();}
;}
,getChildren:function(){return this.__gA||null;}
,getChild:function(cF){var cG=this.__gA;return cG&&cG[cF]||null;}
,hasChildren:function(){var cH=this.__gA;return cH&&cH[0]!==undefined;}
,indexOf:function(cJ){var cI=this.__gA;return cI?cI.indexOf(cJ):-1;}
,hasChild:function(cL){var cK=this.__gA;return cK&&cK.indexOf(cL)!==-1;}
,add:function(cM){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++ ){this.__gF(arguments[i]);}
;this.__gA.push.apply(this.__gA,arguments);}
else {this.__gF(cM);this.__gA.push(cM);}
;return this;}
,addAt:function(cO,cN){this.__gF(cO);qx.lang.Array.insertAt(this.__gA,cO,cN);return this;}
,remove:function(cP){var cQ=this.__gA;if(!cQ){return this;}
;if(arguments[1]){var cR;for(var i=0,l=arguments.length;i<l;i++ ){cR=arguments[i];this.__gG(cR);qx.lang.Array.remove(cQ,cR);}
;}
else {this.__gG(cP);qx.lang.Array.remove(cQ,cP);}
;return this;}
,removeAt:function(cS){var cT=this.__gA;if(!cT){throw new Error(E);}
;var cU=cT[cS];if(!cU){throw new Error(R);}
;this.__gG(cU);qx.lang.Array.removeAt(this.__gA,cS);return this;}
,removeAll:function(){var cV=this.__gA;if(cV){for(var i=0,l=cV.length;i<l;i++ ){this.__gG(cV[i]);}
;cV.length=0;}
;return this;}
,getParent:function(){return this.__gC||null;}
,insertInto:function(parent,cW){parent.__gF(this);if(cW==null){parent.__gA.push(this);}
else {qx.lang.Array.insertAt(this.__gA,this,cW);}
;return this;}
,insertBefore:function(cX){var parent=cX.__gC;parent.__gF(this);qx.lang.Array.insertBefore(parent.__gA,this,cX);return this;}
,insertAfter:function(cY){var parent=cY.__gC;parent.__gF(this);qx.lang.Array.insertAfter(parent.__gA,this,cY);return this;}
,moveTo:function(da){var parent=this.__gC;parent.__gH(this);var dc=parent.__gA.indexOf(this);if(dc===da){throw new Error(J);}
else if(dc<da){da-- ;}
;qx.lang.Array.removeAt(parent.__gA,dc);qx.lang.Array.insertAt(parent.__gA,this,da);return this;}
,moveBefore:function(dd){var parent=this.__gC;return this.moveTo(parent.__gA.indexOf(dd));}
,moveAfter:function(de){var parent=this.__gC;return this.moveTo(parent.__gA.indexOf(de)+1);}
,free:function(){var parent=this.__gC;if(!parent){throw new Error(V);}
;if(!parent.__gA){return this;}
;parent.__gG(this);qx.lang.Array.remove(parent.__gA,this);return this;}
,getDomElement:function(){return this.__go||null;}
,getNodeName:function(){return this.__gf;}
,setNodeName:function(name){this.__gf=name;}
,setRoot:function(df){this.__a=df;}
,useMarkup:function(dg){if(this.__go){throw new Error(bv);}
;if(qx.core.Environment.get(Y)==X){var dh=document.createElement(q);}
else {var dh=qx.dom.Element.getHelperElement();}
;dh.innerHTML=dg;this.useElement(dh.firstChild);return this.__go;}
,useElement:function(di){if(this.__go){throw new Error(bv);}
;this.__go=di;this.__go.$$element=this.$$hash;this._copyData(true);}
,isFocusable:function(){var dk=this.getAttribute(Q);if(dk>=1){return true;}
;var dj=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;if(dk>=0&&dj[this.__gf]){return true;}
;return false;}
,setSelectable:function(dm){this.setAttribute(P,dm?bs:F);var dl=qx.core.Environment.get(u);if(dl){this.setStyle(dl,dm?b:qx.core.Environment.get(bm));}
;}
,isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__gf];}
,include:function(){if(this.__gp){return this;}
;delete this.__gp;if(this.__gC){this.__gC._scheduleChildrenUpdate();}
;return this;}
,exclude:function(){if(!this.__gp){return this;}
;this.__gp=false;if(this.__gC){this.__gC._scheduleChildrenUpdate();}
;return this;}
,isIncluded:function(){return this.__gp===true;}
,fadeIn:function(dn){var dp=qxWeb(this.__go);if(dp.isPlaying()){dp.stop();}
;if(!this.__go){this.__gD();dp.push(this.__go);}
;if(this.__go){dp.fadeIn(dn);return dp.getAnimationHandles()[0];}
;}
,fadeOut:function(dq){var dr=qxWeb(this.__go);if(dr.isPlaying()){dr.stop();}
;if(this.__go){dr.fadeOut(dq).once(v,function(){this.hide();qx.html.Element.flush();}
,this);return dr.getAnimationHandles()[0];}
;}
,show:function(){if(this.__gq){return this;}
;if(this.__go){qx.html.Element._visibility[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;if(this.__gC){this.__gC._scheduleChildrenUpdate();}
;delete this.__gq;return this;}
,hide:function(){if(!this.__gq){return this;}
;if(this.__go){qx.html.Element._visibility[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;this.__gq=false;return this;}
,isVisible:function(){return this.__gq===true;}
,scrollChildIntoViewX:function(dv,dt,dw){var ds=this.__go;var du=dv.getDomElement();if(dw!==false&&ds&&ds.offsetWidth&&du&&du.offsetWidth){qx.bom.element.Scroll.intoViewX(du,ds,dt);}
else {this.__gr={element:dv,align:dt};qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__gt;}
,scrollChildIntoViewY:function(dA,dy,dB){var dx=this.__go;var dz=dA.getDomElement();if(dB!==false&&dx&&dx.offsetWidth&&dz&&dz.offsetWidth){qx.bom.element.Scroll.intoViewY(dz,dx,dy);}
else {this.__gs={element:dA,align:dy};qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__gu;}
,scrollToX:function(x,dC){var dD=this.__go;if(dC!==true&&dD&&dD.offsetWidth){dD.scrollLeft=x;delete this.__gt;}
else {this.__gt=x;qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__gr;}
,getScrollX:function(){var dE=this.__go;if(dE){return dE.scrollLeft;}
;return this.__gt||0;}
,scrollToY:function(y,dG){var dF=this.__go;if(dG!==true&&dF&&dF.offsetWidth){dF.scrollTop=y;delete this.__gu;}
else {this.__gu=y;qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__gs;}
,getScrollY:function(){var dH=this.__go;if(dH){return dH.scrollTop;}
;return this.__gu||0;}
,disableScrolling:function(){this.enableScrolling();this.scrollToX(0);this.scrollToY(0);this.addListener(h,this.__gJ,this);}
,enableScrolling:function(){this.removeListener(h,this.__gJ,this);}
,__gI:null,__gJ:function(e){if(!this.__gI){this.__gI=true;this.__go.scrollTop=0;this.__go.scrollLeft=0;delete this.__gI;}
;}
,getTextSelection:function(){var dI=this.__go;if(dI){return qx.bom.Selection.get(dI);}
;return null;}
,getTextSelectionLength:function(){var dJ=this.__go;if(dJ){return qx.bom.Selection.getLength(dJ);}
;return null;}
,getTextSelectionStart:function(){var dK=this.__go;if(dK){return qx.bom.Selection.getStart(dK);}
;return null;}
,getTextSelectionEnd:function(){var dL=this.__go;if(dL){return qx.bom.Selection.getEnd(dL);}
;return null;}
,setTextSelection:function(dM,dN){var dO=this.__go;if(dO){qx.bom.Selection.set(dO,dM,dN);return;}
;qx.html.Element.__gi[this.toHashCode()]={element:this,start:dM,end:dN};qx.html.Element._scheduleFlush(L);}
,clearTextSelection:function(){var dP=this.__go;if(dP){qx.bom.Selection.clear(dP);}
;delete qx.html.Element.__gi[this.toHashCode()];}
,__gK:function(dQ,dR){var dS=qx.html.Element._actions;dS.push({type:dQ,element:this,args:dR||[]});qx.html.Element._scheduleFlush(L);}
,focus:function(){this.__gK(k);}
,blur:function(){this.__gK(p);}
,activate:function(){this.__gK(U);}
,deactivate:function(){this.__gK(s);}
,capture:function(dT){this.__gK(B,[dT!==false]);}
,releaseCapture:function(){this.__gK(I);}
,setStyle:function(dU,dV,dW){if(!this.__gg){this.__gg={};}
;if(this.__gg[dU]==dV){return this;}
;if(dV==null){delete this.__gg[dU];}
else {this.__gg[dU]=dV;}
;if(this.__go){if(dW){qx.bom.element.Style.set(this.__go,dU,dV);return this;}
;if(!this.__gv){this.__gv={};}
;this.__gv[dU]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;return this;}
,setStyles:function(dY,eb){var ea=qx.bom.element.Style;if(!this.__gg){this.__gg={};}
;if(this.__go){if(!this.__gv){this.__gv={};}
;for(var dX in dY){var ec=dY[dX];if(this.__gg[dX]==ec){continue;}
;if(ec==null){delete this.__gg[dX];}
else {this.__gg[dX]=ec;}
;if(eb){ea.set(this.__go,dX,ec);continue;}
;this.__gv[dX]=true;}
;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
else {for(var dX in dY){var ec=dY[dX];if(this.__gg[dX]==ec){continue;}
;if(ec==null){delete this.__gg[dX];}
else {this.__gg[dX]=ec;}
;}
;}
;return this;}
,removeStyle:function(ee,ed){this.setStyle(ee,null,ed);return this;}
,getStyle:function(ef){return this.__gg?this.__gg[ef]:null;}
,getAllStyles:function(){return this.__gg||null;}
,setAttribute:function(eg,eh,ei){if(!this.__gh){this.__gh={};}
;if(this.__gh[eg]==eh){return this;}
;if(eh==null){delete this.__gh[eg];}
else {this.__gh[eg]=eh;}
;if(this.__go){if(ei){qx.bom.element.Attribute.set(this.__go,eg,eh);return this;}
;if(!this.__gw){this.__gw={};}
;this.__gw[eg]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;return this;}
,setAttributes:function(ej,ek){for(var em in ej){this.setAttribute(em,ej[em],ek);}
;return this;}
,removeAttribute:function(eo,en){return this.setAttribute(eo,null,en);}
,getAttribute:function(ep){return this.__gh?this.__gh[ep]:null;}
,addClass:function(name){var eq=((this.getAttribute(o)||M)+bn+name).trim();this.setAttribute(o,eq);}
,removeClass:function(name){var er=this.getAttribute(o);if(er){this.setAttribute(o,(er.replace(name,M)).trim());}
;}
,_applyProperty:function(name,es){}
,_setProperty:function(et,eu,ev){if(!this.__gy){this.__gy={};}
;if(this.__gy[et]==eu){return this;}
;if(eu==null){delete this.__gy[et];}
else {this.__gy[et]=eu;}
;if(this.__go){if(ev){this._applyProperty(et,eu);return this;}
;if(!this.__gx){this.__gx={};}
;this.__gx[et]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;return this;}
,_removeProperty:function(ex,ew){return this._setProperty(ex,null,ew);}
,_getProperty:function(ez){var ey=this.__gy;if(!ey){return null;}
;var eA=ey[ez];return eA==null?null:eA;}
,addListener:function(eF,eC,self,eB){if(this.$$disposed){return null;}
;if(qx.core.Environment.get(A)){var eD=m+eF+t+W+this+f;this.assertString(eF,eD+S);this.assertFunction(eC,eD+G);if(self!==undefined){this.assertObject(self,K);}
;if(eB!==undefined){this.assertBoolean(eB,j);}
;}
;if(this.__go){return qx.event.Registration.addListener(this.__go,eF,eC,self,eB);}
;if(!this.__gz){this.__gz={};}
;if(eB==null){eB=false;}
;var eE=qx.event.Manager.getNextUniqueId();var eG=eF+(eB?g:c)+eE;this.__gz[eG]={type:eF,listener:eC,self:self,capture:eB,unique:eE};return eG;}
,removeListener:function(eN,eI,self,eH){if(this.$$disposed){return null;}
;if(qx.core.Environment.get(A)){var eL=O+eN+t+z+this+f;this.assertString(eN,eL+S);this.assertFunction(eI,eL+G);if(self!==undefined){this.assertObject(self,K);}
;if(eH!==undefined){this.assertBoolean(eH,j);}
;}
;if(this.__go){qx.event.Registration.removeListener(this.__go,eN,eI,self,eH);}
else {var eJ=this.__gz;var eM;if(eH==null){eH=false;}
;for(var eK in eJ){eM=eJ[eK];if(eM.listener===eI&&eM.self===self&&eM.capture===eH&&eM.type===eN){delete eJ[eK];break;}
;}
;}
;return this;}
,removeListenerById:function(eO){if(this.$$disposed){return null;}
;if(this.__go){qx.event.Registration.removeListenerById(this.__go,eO);}
else {delete this.__gz[eO];}
;return this;}
,hasListener:function(eQ,eP){if(this.$$disposed){return false;}
;if(this.__go){return qx.event.Registration.hasListener(this.__go,eQ,eP);}
;var eR=this.__gz;var eT;if(eP==null){eP=false;}
;for(var eS in eR){eT=eR[eS];if(eT.capture===eP&&eT.type===eQ){return true;}
;}
;return false;}
},defer:function(eU){eU.__gL=new qx.util.DeferredCall(eU.flush,eU);}
,destruct:function(){var eV=this.__go;if(eV){qx.event.Registration.getManager(eV).removeAllListeners(eV);eV.$$element=M;}
;if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__gC;if(parent&&!parent.$$disposed){parent.remove(this);}
;}
;this._disposeArray(H);this.__gh=this.__gg=this.__gz=this.__gy=this.__gw=this.__gv=this.__gx=this.__go=this.__gC=this.__gr=this.__gs=null;}
});}
)();
(function(){var a="qx.event.handler.Appear",b="disappear",c="appear";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);this.__ge=d;this.__gM={};qx.event.handler.Appear.__gN[this.$$hash]=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__gN:{},refresh:function(){var e=this.__gN;for(var f in e){e[f].refresh();}
;}
},members:{__ge:null,__gM:null,canHandleEvent:function(h,g){}
,registerEvent:function(l,m,j){var k=qx.core.ObjectRegistry.toHashCode(l)+m;var i=this.__gM;if(i&&!i[k]){i[k]=l;l.$$displayed=l.offsetWidth>0;}
;}
,unregisterEvent:function(q,r,o){var p=qx.core.ObjectRegistry.toHashCode(q)+r;var n=this.__gM;if(!n){return;}
;if(n[p]){delete n[p];}
;}
,refresh:function(){var w=this.__gM;var v;for(var u in w){v=w[u];var s=v.offsetWidth>0;if((!!v.$$displayed)!==s){v.$$displayed=s;var t=qx.event.Registration.createEvent(s?c:b);this.__ge.dispatchEvent(v,t);}
;}
;}
},destruct:function(){this.__ge=this.__gM=null;delete qx.event.handler.Appear.__gN[this.$$hash];}
,defer:function(x){qx.event.Registration.addHandler(x);}
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
(function(){var a="qx.event.handler.UserAction";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);this.__ge=b;this.__cx=b.getWindow();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__ge:null,__cx:null,canHandleEvent:function(d,c){}
,registerEvent:function(g,f,e){}
,unregisterEvent:function(j,i,h){}
},destruct:function(){this.__ge=this.__cx=null;}
,defer:function(k){qx.event.Registration.addHandler(k);}
});}
)();
(function(){var a="os.name",b="mousedown",c="mouseout",d="gecko",e="dblclick",f="useraction",g="mousewheel",h="event.touch",j="mousemove",k="ios",l="mouseover",m="qx.event.handler.Mouse",n="click",o="on",p="engine.version",q="engine.name",r="mouseup",s="contextmenu",t="qx.emulatemouse",u="webkit",v="DOMMouseScroll",w="device.touch",x="event.mspointer";qx.Class.define(m,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(y){qx.core.Object.call(this);this.__ge=y;this.__cx=y.getWindow();this.__a=this.__cx.document;if(!(qx.core.Environment.get(h)&&qx.event.handler.MouseEmulation.ON)){this._initButtonObserver();this._initMoveObserver();this._initWheelObserver();}
;if(qx.core.Environment.get(t)){qx.event.handler.MouseEmulation;}
;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__gO:null,__gP:null,__gQ:null,__gR:null,__gS:null,__ge:null,__cx:null,__a:null,__gT:null,canHandleEvent:function(A,z){}
,registerEvent:qx.core.Environment.get(a)===k?function(D,C,B){D[o+C]=(function(){return null;}
);}
:(function(){return null;}
),unregisterEvent:qx.core.Environment.get(a)===k?function(G,F,E){G[o+F]=undefined;}
:(function(){return null;}
),__gU:function(H,I,J){if(!J){J=qx.bom.Event.getTarget(H);}
;if(J&&J.nodeType){qx.event.Registration.fireEvent(J,I||H.type,I==g?qx.event.type.MouseWheel:qx.event.type.Mouse,[H,J,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cx,f,qx.event.type.Data,[I||H.type]);}
,__gV:function(){var M=[this.__cx,this.__a,this.__a.body];var L=this.__cx;var K=v;for(var i=0;i<M.length;i++ ){if(qx.bom.Event.supportsEvent(M[i],g)){K=g;L=M[i];break;}
;}
;return {type:K,target:L};}
,preventNextClick:function(){this.__gT=true;}
,_initButtonObserver:function(){this.__gO=qx.lang.Function.listener(this._onButtonEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__a,b,this.__gO);Event.addNativeListener(this.__a,r,this.__gO);if(!(qx.event.handler.MouseEmulation.ON&&qx.core.Environment.get(x)&&qx.core.Environment.get(w))){Event.addNativeListener(this.__a,n,this.__gO);}
;Event.addNativeListener(this.__a,e,this.__gO);Event.addNativeListener(this.__a,s,this.__gO);}
,_initMoveObserver:function(){this.__gP=qx.lang.Function.listener(this._onMoveEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__a,j,this.__gP);Event.addNativeListener(this.__a,l,this.__gP);Event.addNativeListener(this.__a,c,this.__gP);}
,_initWheelObserver:function(){this.__gQ=qx.lang.Function.listener(this._onWheelEvent,this);var N=this.__gV();qx.bom.Event.addNativeListener(N.target,N.type,this.__gQ);}
,_stopButtonObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__a,b,this.__gO);Event.removeNativeListener(this.__a,r,this.__gO);if(!(qx.event.handler.MouseEmulation.ON&&qx.core.Environment.get(x)&&qx.core.Environment.get(w))){Event.removeNativeListener(this.__a,n,this.__gO);}
;Event.removeNativeListener(this.__a,e,this.__gO);Event.removeNativeListener(this.__a,s,this.__gO);}
,_stopMoveObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__a,j,this.__gP);Event.removeNativeListener(this.__a,l,this.__gP);Event.removeNativeListener(this.__a,c,this.__gP);}
,_stopWheelObserver:function(){var O=this.__gV();qx.bom.Event.removeNativeListener(O.target,O.type,this.__gQ);}
,_onMoveEvent:qx.event.GlobalError.observeMethod(function(P){this.__gU(P);}
),_onButtonEvent:qx.event.GlobalError.observeMethod(function(S){var R=S.type;var T=qx.bom.Event.getTarget(S);if(R==n&&this.__gT){delete this.__gT;return;}
;if(qx.core.Environment.get(q)==d||qx.core.Environment.get(q)==u){if(T&&T.nodeType==3){T=T.parentNode;}
;}
;var Q=qx.event.handler.DragDrop&&this.__ge.getHandler(qx.event.handler.DragDrop).isSessionActive();if(Q&&R==n){return;}
;if(this.__gW){this.__gW(S,R,T);}
;if(this.__gY){this.__gY(S,R,T);}
;this.__gU(S,R,T);if(this.__gX){this.__gX(S,R,T);}
;if(this.__ha&&!Q){this.__ha(S,R,T);}
;this.__gR=R;}
),_onWheelEvent:qx.event.GlobalError.observeMethod(function(U){this.__gU(U,g);}
),__gW:qx.core.Environment.select(q,{"webkit":function(W,V,X){if(parseFloat(qx.core.Environment.get(p))<530){if(V==s){this.__gU(W,r,X);}
;}
;}
,"default":null}),__gX:qx.core.Environment.select(q,{"opera":function(Y,ba,bb){if(ba==r&&Y.button==2){this.__gU(Y,s,bb);}
;}
,"default":null}),__gY:qx.core.Environment.select(q,{"mshtml":function(bc,bd,be){if(bc.target!==undefined){return;}
;if(bd==r&&this.__gR==n){this.__gU(bc,b,be);}
else if(bd==e){this.__gU(bc,n,be);}
;}
,"default":null}),__ha:qx.core.Environment.select(q,{"mshtml":null,"default":function(bg,bf,bh){switch(bf){case b:this.__gS=bh;break;case r:if(bh!==this.__gS){var bi=qx.dom.Hierarchy.getCommonParent(bh,this.__gS);if(bi){this.__gU(bg,n,bi);}
;}
;};}
})},destruct:function(){if(!(qx.core.Environment.get(h)&&qx.event.handler.MouseEmulation.ON)){this._stopButtonObserver();this._stopMoveObserver();this._stopWheelObserver();}
;this.__ge=this.__cx=this.__a=this.__gS=null;}
,defer:function(bj){qx.event.Registration.addHandler(bj);}
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
(function(){var a="touchcancel",b="qx.event.type.Touch",c="touchend";qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);e.pageX=d.pageX;e.pageY=d.pageY;e.offsetX=d.offsetX;e.offsetY=d.offsetY;e.layerX=(d.offsetX||d.layerX);e.layerY=(d.offsetY||d.layerY);e.scale=d.scale;e.rotation=d.rotation;e.srcElement=d.srcElement;e.targetTouches=[];for(var i=0;i<d.targetTouches.length;i++ ){e.targetTouches[i]=d.targetTouches[i];}
;e.changedTouches=[];for(i=0;i<d.changedTouches.length;i++ ){e.changedTouches[i]=d.changedTouches[i];}
;e.touches=[];for(i=0;i<d.touches.length;i++ ){e.touches[i]=d.touches[i];}
;return e;}
,stop:function(){this.stopPropagation();}
,getAllTouches:function(){return this._native.touches;}
,getTargetTouches:function(){return this._native.targetTouches;}
,getChangedTargetTouches:function(){return this._native.changedTouches;}
,isMultiTouch:function(){return this.__hc().length>1;}
,getScale:function(){return this._native.scale;}
,getRotation:function(){return this._native.rotation;}
,getDocumentLeft:function(f){return this.__hb(f).pageX;}
,getDocumentTop:function(g){return this.__hb(g).pageY;}
,getScreenLeft:function(h){return this.__hb(h).screenX;}
,getScreenTop:function(j){return this.__hb(j).screenY;}
,getViewportLeft:function(k){return this.__hb(k).clientX;}
,getViewportTop:function(l){return this.__hb(l).clientY;}
,getIdentifier:function(m){return this.__hb(m).identifier;}
,__hb:function(n){n=n==null?0:n;return this.__hc()[n];}
,__hc:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());return o;}
,_isTouchEnd:function(){return (this.getType()==c||this.getType()==a);}
}});}
)();
(function(){var a="qx.event.type.Tap";qx.Class.define(a,{extend:qx.event.type.Touch,members:{_isTouchEnd:function(){return true;}
}});}
)();
(function(){var a="os.name",b="qx.mobile.nativescroll",c="osx",d="qx.nativeScrollBars",e="os.scrollBarOverlayed",f="browser.version",g="ios",h="qx.bom.client.Scroll";qx.Bootstrap.define(h,{statics:{scrollBarOverlayed:function(){var i=qx.bom.element.Scroll.getScrollbarWidth();var k=qx.bom.client.OperatingSystem.getName()===c;var j=qx.core.Environment.get(d);return i==0&&k&&j;}
,getNativeScroll:function(){return qx.core.Environment.get(a)==g&&parseInt(qx.core.Environment.get(f))>4;}
},defer:function(l){qx.core.Environment.add(e,l.scrollBarOverlayed);qx.core.Environment.add(b,l.getNativeScroll);}
});}
)();
(function(){var a="borderBottomWidth",b="visible",d="engine.name",e="borderTopWidth",f="top",g="borderLeftStyle",h="none",i="overflow",j="right",k="bottom",l="borderLeftWidth",m="100px",n="-moz-scrollbars-vertical",o="borderRightStyle",p="hidden",q="div",r="left",u="qx.bom.element.Scroll",v="borderRightWidth",w="scroll",x="overflowY";qx.Class.define(u,{statics:{__hh:null,getScrollbarWidth:function(){if(this.__hh!==null){return this.__hh;}
;var y=qx.bom.element.Style;var A=function(E,F){return parseInt(y.get(E,F),10)||0;}
;var B=function(G){return (y.get(G,o)==h?0:A(G,v));}
;var C=function(H){return (y.get(H,g)==h?0:A(H,l));}
;var D=qx.core.Environment.select(d,{"mshtml":function(I){if(y.get(I,x)==p||I.clientWidth==0){return B(I);}
;return Math.max(0,I.offsetWidth-I.clientLeft-I.clientWidth);}
,"default":function(J){if(J.clientWidth==0){var L=y.get(J,i);var K=(L==w||L==n?16:0);return Math.max(0,B(J)+K);}
;return Math.max(0,(J.offsetWidth-J.clientWidth-C(J)));}
});var z=function(M){return D(M)-B(M);}
;var t=document.createElement(q);var s=t.style;s.height=s.width=m;s.overflow=w;document.body.appendChild(t);var c=z(t);this.__hh=c;document.body.removeChild(t);return this.__hh;}
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
(function(){var a="qx.event.type.Swipe";qx.Class.define(a,{extend:qx.event.type.Touch,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Touch.prototype._cloneNativeEvent.call(this,b,c);c.swipe=b.swipe;return c;}
,_isTouchEnd:function(){return true;}
,getStartTime:function(){return this._native.swipe.startTime;}
,getDuration:function(){return this._native.swipe.duration;}
,getAxis:function(){return this._native.swipe.axis;}
,getDirection:function(){return this._native.swipe.direction;}
,getVelocity:function(){return this._native.swipe.velocity;}
,getDistance:function(){return this._native.swipe.distance;}
}});}
)();
(function(){var a="mshtml",b="onhashchange",c="event.help",d="event.mspointer",e="event.touch",f="msPointerEnabled",g="event.hashchange",h="onhelp",i="documentMode",j="qx.bom.client.Event",k="ontouchstart";qx.Bootstrap.define(j,{statics:{getTouch:function(){return (k in window);}
,getMsPointer:function(){if(f in window.navigator){return window.navigator.msPointerEnabled;}
;return false;}
,getHelp:function(){return (h in document);}
,getHashChange:function(){var l=qx.bom.client.Engine.getName();var m=b in window;return (l!==a&&m)||(l===a&&i in document&&document.documentMode>=8&&m);}
},defer:function(n){qx.core.Environment.add(e,n.getTouch);qx.core.Environment.add(d,n.getMsPointer);qx.core.Environment.add(c,n.getHelp);qx.core.Environment.add(g,n.getHashChange);}
});}
)();
(function(){var a="resize",b="os.name",c="qx.event.handler.Orientation",d="landscape",e="android",f="portrait",g="orientationchange";qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){qx.core.Object.call(this);this.__ge=h;this.__cx=h.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__ge:null,__cx:null,__hd:null,_currentOrientation:null,__he:null,canHandleEvent:function(j,i){}
,registerEvent:function(m,l,k){}
,unregisterEvent:function(p,o,n){}
,_initObserver:function(){this.__he=qx.lang.Function.listener(this._onNative,this);this.__hd=qx.bom.Event.supportsEvent(this.__cx,g)?g:a;var Event=qx.bom.Event;Event.addNativeListener(this.__cx,this.__hd,this.__he);}
,_stopObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__cx,this.__hd,this.__he);}
,_onNative:qx.event.GlobalError.observeMethod(function(q){var r=0;if(qx.core.Environment.get(b)==e){r=300;}
;qx.lang.Function.delay(this._onOrientationChange,r,this,q);}
),_onOrientationChange:function(s){var u=qx.bom.Viewport;var t=u.getOrientation(s.target);if(this._currentOrientation!=t){this._currentOrientation=t;var v=u.isLandscape(s.target)?d:f;qx.event.Registration.fireEvent(this.__cx,g,qx.event.type.Orientation,[t,v]);}
;}
},destruct:function(){this._stopObserver();this.__ge=this.__cx=null;}
,defer:function(w){qx.event.Registration.addHandler(w);}
});}
)();
(function(){var a="landscape",b="qx.event.type.Orientation",c="portrait";qx.Class.define(b,{extend:qx.event.type.Event,members:{__hf:null,__hg:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);this.__hf=d;this.__hg=e;return this;}
,clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);g.__hf=this.__hf;g.__hg=this.__hg;return g;}
,getOrientation:function(){return this.__hf;}
,isLandscape:function(){return this.__hg==a;}
,isPortrait:function(){return this.__hg==c;}
}});}
)();
(function(){var a="touchmove",b="os.name",c="MSPointerDown",d="swipe",e="android",f="qx.event.handler.TouchCore",g="event.mspointer",h="MSPointerCancel",j="y",k="pointer-events",l="longtap",m="touchend",n="MSPointerUp",o="right",p="engine.name",q="x",r="touchcancel",s="MSPointerMove",t="webkit",u="none",v="left",w="tap",z="down",A="undefined",B="up",C="touchstart";qx.Bootstrap.define(f,{extend:Object,statics:{TAP_MAX_DISTANCE:qx.core.Environment.get(b)!=e?10:40,SWIPE_DIRECTION:{x:[v,o],y:[B,z]},SWIPE_MIN_DISTANCE:qx.core.Environment.get(b)!=e?11:41,SWIPE_MIN_VELOCITY:0,LONGTAP_TIME:500},construct:function(D,E){this.__hi=D;this.__fq=E;this._initTouchObserver();}
,members:{__hi:null,__fq:null,__hj:null,__hk:null,__hl:null,__hm:null,__hn:null,__ho:null,__hp:null,__hq:null,__hr:null,__hs:null,__ht:null,_initTouchObserver:function(){this.__hj=qx.lang.Function.listener(this._onTouchEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__hi,C,this.__hj);Event.addNativeListener(this.__hi,a,this.__hj);Event.addNativeListener(this.__hi,m,this.__hj);Event.addNativeListener(this.__hi,r,this.__hj);if(qx.core.Environment.get(g)){Event.addNativeListener(this.__hi,c,this.__hj);Event.addNativeListener(this.__hi,s,this.__hj);Event.addNativeListener(this.__hi,n,this.__hj);Event.addNativeListener(this.__hi,h,this.__hj);}
;}
,_stopTouchObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__hi,C,this.__hj);Event.removeNativeListener(this.__hi,a,this.__hj);Event.removeNativeListener(this.__hi,m,this.__hj);Event.removeNativeListener(this.__hi,r,this.__hj);if(qx.core.Environment.get(g)){Event.removeNativeListener(this.__hi,c,this.__hj);Event.removeNativeListener(this.__hi,s,this.__hj);Event.removeNativeListener(this.__hi,n,this.__hj);Event.removeNativeListener(this.__hi,h,this.__hj);}
;}
,_onTouchEvent:function(F){this._commonTouchEventHandler(F);}
,_getScalingDistance:function(H,G){return (Math.sqrt(Math.pow(H.pageX-G.pageX,2)+Math.pow(H.pageY-G.pageY,2)));}
,_getRotationAngle:function(J,I){var x=J.pageX-I.pageX;var y=J.pageY-I.pageY;return (Math.atan2(y,x)*180/Math.PI);}
,_commonTouchEventHandler:function(M,K){var K=K||M.type;if(qx.core.Environment.get(g)){M.changedTouches=[M];M.targetTouches=[M];M.touches=[M];if(K==c){K=C;}
else if(K==n){K=m;}
else if(K==s){if(this.__hq==true){K=a;}
;}
else if(K==h){K=r;}
;}
;if(K==C){this.__hk=this._getTarget(M);this.__hp=true;if(M.touches&&M.touches.length>1){this.__hr=this._getScalingDistance(M.touches[0],M.touches[1]);this.__hs=this._getRotationAngle(M.touches[0],M.touches[1]);}
;}
;if(K==a){if(typeof M.scale==A&&M.targetTouches.length>1){var N=this._getScalingDistance(M.targetTouches[0],M.targetTouches[1]);M.scale=N/this.__hr;}
;if(typeof M.rotation==A&&M.targetTouches.length>1){var L=this._getRotationAngle(M.targetTouches[0],M.targetTouches[1]);M.rotation=L-this.__hs;}
;if(this.__hp){this.__hp=this._isBelowTapMaxDistance(M.changedTouches[0]);}
;}
;this._fireEvent(M,K);this.__hv(M,K);}
,_isBelowTapMaxDistance:function(O){var P={x:O.screenX-this.__hl,y:O.screenY-this.__hm};var Q=qx.event.handler.TouchCore;return (Math.abs(P.x)<=Q.TAP_MAX_DISTANCE&&Math.abs(P.y)<=Q.TAP_MAX_DISTANCE);}
,_getTarget:function(S){var T=qx.bom.Event.getTarget(S);if(qx.core.Environment.get(p)==t){if(T&&T.nodeType==3){T=T.parentNode;}
;}
else if(qx.core.Environment.get(g)){var R=this.__hu(S);if(R){T=R;}
;}
;return T;}
,__hu:function(W){if(W&&W.touches){var U=W.touches[0].clientX;var V=W.touches[0].clientY;}
;var Y=document.msElementsFromPoint(U,V);if(Y){for(var i=0;i<Y.length;i++ ){var ba=Y[i];var X=qx.bom.element.Style.get(ba,k,3);if(X!=u){return ba;}
;}
;}
;return null;}
,_fireEvent:function(bb,bc,bd){if(!bd){bd=this._getTarget(bb);}
;var bc=bc||bb.type;if(bd&&bd.nodeType&&this.__fq){this.__fq.emit(bc,bb);}
;}
,__hv:function(be,bf,bg){if(!bg){bg=this._getTarget(be);}
;var bf=bf||be.type;if(bf==C){this.__hw(be,bg);}
else if(bf==a){this.__hx(be,bg);}
else if(bf==m){this.__hy(be,bg);}
;}
,__hw:function(bi,bj){var bh=bi.changedTouches[0];this.__hq=true;this.__hl=bh.screenX;this.__hm=bh.screenY;this.__hn=new Date().getTime();this.__ho=bi.targetTouches.length===1;if(this.__ho){this.__ht=window.setTimeout(this.__hA.bind(this,bi,bj),qx.event.handler.TouchCore.LONGTAP_TIME);}
else {this.__hB();}
;}
,__hx:function(bk,bl){if(this.__ho&&bk.changedTouches.length>1){this.__ho=false;}
;if(!this._isBelowTapMaxDistance(bk.changedTouches[0])){this.__hB();}
;}
,__hy:function(bm,bn){this.__hq=false;this.__hB();if(this.__ho){var bq=bm.changedTouches[0];var br={x:bq.screenX-this.__hl,y:bq.screenY-this.__hm};var bo;if(this.__hk==bn&&this.__hp){if(qx.event&&qx.event.type&&qx.event.type.Tap){bo=qx.event.type.Tap;}
;this._fireEvent(bm,w,bn,bo);}
else {var bp=this.__hz(bm,bn,br);if(bp){if(qx.event&&qx.event.type&&qx.event.type.Swipe){bo=qx.event.type.Swipe;}
;bm.swipe=bp;this._fireEvent(bm,d,bn,bo);}
;}
;}
;}
,__hz:function(bu,bv,bA){var bx=qx.event.handler.TouchCore;var by=new Date().getTime()-this.__hn;var bB=(Math.abs(bA.x)>=Math.abs(bA.y))?q:j;var bs=bA[bB];var bt=bx.SWIPE_DIRECTION[bB][bs<0?0:1];var bz=(by!==0)?bs/by:0;var bw=null;if(Math.abs(bz)>=bx.SWIPE_MIN_VELOCITY&&Math.abs(bs)>=bx.SWIPE_MIN_DISTANCE){bw={startTime:this.__hn,duration:by,axis:bB,direction:bt,distance:bs,velocity:bz};}
;return bw;}
,__hA:function(bC,bD){this._fireEvent(bC,l,bD,qx.event.type.Tap);this.__ht=null;this.__hp=false;}
,__hB:function(){if(this.__ht){window.clearTimeout(this.__ht);this.__ht=null;}
;}
,dispose:function(){this._stopTouchObserver();this.__hk=this.__hi=this.__fq=this.__hr=this.__hs=null;this.__hB();}
}});}
)();
(function(){var a="touchmove",b="engine.name",c="mouseup",d="qx.event.handler.Touch",f="useraction",g="touchend",h="mshtml",i="event.mspointer",j="qx.mobile.nativescroll",k="dispose",l="qx.mobile.emulatetouch",m="event.touch",n="touchstart",o="mousedown",p="mousemove";qx.Class.define(d,{extend:qx.event.handler.TouchCore,implement:qx.event.IEventHandler,construct:function(q){this.__ge=q;this.__cx=q.getWindow();this.__a=this.__cx.document;qx.event.handler.TouchCore.apply(this,[this.__a]);if(!qx.core.Environment.get(i)){this._initMouseObserver();}
;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,longtap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":n,"mousemove":a,"mouseup":g}},members:{__hC:null,__ge:null,__cx:null,__a:null,__hD:false,canHandleEvent:function(s,r){}
,registerEvent:function(v,u,t){}
,unregisterEvent:function(y,x,w){}
,_fireEvent:function(A,z,B,C){if(!B){B=this._getTarget(A);}
;var z=z||A.type;if(B&&B.nodeType){qx.event.Registration.fireEvent(B,z,C||qx.event.type.Touch,[A,B,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cx,f,qx.event.type.Data,[z]);}
,__hE:qx.core.Environment.select(l,{"true":function(E){var D=E.type;var F=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;if(F[D]){D=F[D];if(D==n&&this.__hF(E)){this.__hD=true;}
else if(D==g){this.__hD=false;}
;var H=this.__hG(E);var G=(D==g?[]:[H]);E.touches=G;E.targetTouches=G;E.changedTouches=[H];}
;return D;}
,"default":(function(){}
)}),__hF:qx.core.Environment.select(l,{"true":function(J){if((qx.core.Environment.get(b)==h)){var I=1;}
else {var I=0;}
;return J.button==I;}
,"default":(function(){}
)}),__hG:qx.core.Environment.select(l,{"true":function(K){var L=this._getTarget(K);return {clientX:K.clientX,clientY:K.clientY,screenX:K.screenX,screenY:K.screenY,pageX:K.pageX,pageY:K.pageY,identifier:1,target:L};}
,"default":(function(){}
)}),_initMouseObserver:qx.core.Environment.select(l,{"true":function(){if(!qx.core.Environment.get(m)){this.__hC=qx.lang.Function.listener(this._onMouseEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__a,o,this.__hC);Event.addNativeListener(this.__a,p,this.__hC);Event.addNativeListener(this.__a,c,this.__hC);}
;}
,"default":(function(){}
)}),_stopMouseObserver:qx.core.Environment.select(l,{"true":function(){if(!qx.core.Environment.get(m)){var Event=qx.bom.Event;Event.removeNativeListener(this.__a,o,this.__hC);Event.removeNativeListener(this.__a,p,this.__hC);Event.removeNativeListener(this.__a,c,this.__hC);}
;}
,"default":(function(){}
)}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(M){this._commonTouchEventHandler(M);}
),_onMouseEvent:qx.core.Environment.select(l,{"true":qx.event.GlobalError.observeMethod(function(O){if(!qx.core.Environment.get(m)){if(O.type==p&&!this.__hD){return;}
;var N=this.__hE(O);this._commonTouchEventHandler(O,N);}
;}
),"default":(function(){}
)}),dispose:function(){this.__hH(k);this._stopMouseObserver();this.__ge=this.__cx=this.__a=null;}
,__hH:function(Q,P){qx.event.handler.TouchCore.prototype[Q].apply(this,P||[]);}
},defer:function(R){qx.event.Registration.addHandler(R);if(qx.core.Environment.get(m)){if(qx.core.Environment.get(j)==false){document.addEventListener(a,function(e){e.preventDefault();}
);}
;qx.event.Registration.getManager(document).getHandler(R);}
;}
});}
)();
(function(){var a="ipod",b="pc",c="ps3",d=")",e="iPhone",f="psp",g="wii",h="xbox",i="\.",j="ipad",k="ds",l="(",m="mobile",n="device.type",o="tablet",p="ontouchstart",q="g",r="|",s="qx.bom.client.Device",t="desktop",u="device.name",v="device.touch",w="undefined",x="device.pixelRatio";qx.Bootstrap.define(s,{statics:{__cS:{"iPod":a,"iPad":j,"iPhone":e,"PSP":f,"PLAYSTATION 3":c,"Nintendo Wii":g,"Nintendo DS":k,"XBOX":h,"Xbox":h},getName:function(){var A=[];for(var z in this.__cS){A.push(z);}
;var B=new RegExp(l+A.join(r).replace(/\./g,i)+d,q);var y=B.exec(navigator.userAgent);if(y&&y[1]){return qx.bom.client.Device.__cS[y[1]];}
;return b;}
,getType:function(){return qx.bom.client.Device.detectDeviceType(navigator.userAgent);}
,detectDeviceType:function(C){if(qx.bom.client.Device.detectTabletDevice(C)){return o;}
else if(qx.bom.client.Device.detectMobileDevice(C)){return m;}
;return t;}
,detectMobileDevice:function(D){return /android.+mobile|ip(hone|od)|bada\/|blackberry|BB10|maemo|opera m(ob|in)i|fennec|NetFront|phone|psp|symbian|IEMobile|windows (ce|phone)|xda/i.test(D);}
,detectTabletDevice:function(F){var G=(/MSIE 10/i.test(F))&&(/ARM/i.test(F))&&!(/windows phone/i.test(F));var E=(!(/Fennec|HTC.Magic|Nexus|android.+mobile|Tablet PC/i.test(F))&&(/Android|ipad|tablet|playbook|silk|kindle|psp/i.test(F)));return G||E;}
,getDevicePixelRatio:function(){if(typeof window.devicePixelRatio!==w){return window.devicePixelRatio;}
;return 1;}
,getTouch:function(){return (p in window)||window.navigator.msMaxTouchPoints>1;}
},defer:function(H){qx.core.Environment.add(u,H.getName);qx.core.Environment.add(v,H.getTouch);qx.core.Environment.add(n,H.getType);qx.core.Environment.add(x,H.getDevicePixelRatio);}
});}
)();
(function(){var a="touchmove",b="os.name",c="mouseup",d="mousedown",f="touchend",g="win",h="none",i="qx.event.handler.MouseEmulation",j="event.mspointer",k="qx.emulatemouse",l="longtap",m="click",n="event.touch",o="touchstart",p="contextmenu",q="tap",r="device.touch",s="mousewheel",t="mousemove";qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);this.__ge=u;this.__cx=u.getWindow();this.__a=this.__cx.document;if(qx.event.handler.MouseEmulation.ON){this._initObserver();document.documentElement.style.msTouchAction=h;}
;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousedown:1,mouseup:1,mousemove:1,click:1,contextmenu:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,ON:qx.core.Environment.get(k)&&((qx.core.Environment.get(j)&&qx.core.Environment.get(r))||(qx.core.Environment.get(n)&&qx.core.Environment.get(b)!==g))},members:{__ge:null,__cx:null,__a:null,__hI:null,__hJ:null,__hK:null,__hL:null,canHandleEvent:function(w,v){}
,registerEvent:function(z,y,x){}
,unregisterEvent:function(C,B,A){}
,__gU:function(D,E,F){var G=E==s?new qx.event.type.MouseWheel():new qx.event.type.Mouse();G.init(D,F,null,true,true);G.setType(E);return qx.event.Registration.getManager(F).dispatchEvent(F,G);}
,__hM:function(H,I,J,K){var L=this.__hV(K,J);L.wheelDelta=H;L.wheelDeltaY=I;L.wheelDeltaX=H;this.__gU(L,s,K);}
,__hN:function(N,O,Q,M,R){this.__hK=null;this.__hL=null;if(N==0&&O==0){return;}
;var S=parseInt((R||20)/10);if(N>0){N=Math.max(0,N-S);}
else {N=Math.min(0,N+S);}
;if(O>0){O=Math.max(0,O-S);}
else {O=Math.min(0,O+S);}
;var P=+(new Date());this.__hL=qx.bom.AnimationFrame.request(qx.lang.Function.bind(function(T,U,X,W,V){this.__hN(T,U,X,W,V-P);}
,this,N,O,Q,M));this.__hM(N,O,Q,M);}
,__hO:function(Y){var bb={x:Y.screenX,y:Y.screenY};var ba=false;var bc=20;if(Math.abs(bb.x-this.__hI.x)>bc){ba=true;}
;if(Math.abs(bb.y-this.__hI.y)>bc){ba=true;}
;return ba;}
,_initObserver:function(){qx.event.Registration.addListener(this.__a,o,this.__hQ,this);qx.event.Registration.addListener(this.__a,a,this.__hR,this);qx.event.Registration.addListener(this.__a,f,this.__hS,this);qx.event.Registration.addListener(this.__a,q,this.__hT,this);qx.event.Registration.addListener(this.__a,l,this.__hU,this);qx.bom.Event.addNativeListener(this.__cx,o,this.__hP);}
,_stopObserver:function(){qx.event.Registration.removeListener(this.__a,o,this.__hQ,this);qx.event.Registration.removeListener(this.__a,a,this.__hR,this);qx.event.Registration.removeListener(this.__a,f,this.__hS,this);qx.event.Registration.removeListener(this.__a,q,this.__hT,this);qx.event.Registration.removeListener(this.__a,l,this.__hU,this);qx.bom.Event.removeNativeListener(this.__cx,o,this.__hP);}
,__hP:function(e){e.preventDefault();}
,__hQ:function(e){var be=e.getTarget();var bd=this.__hV(be,e.getAllTouches()[0]);if(qx.core.Environment.get(n)){if(!this.__gU(bd,d,be)){e.preventDefault();}
;}
;this.__hJ={x:bd.screenX,y:bd.screenY};this.__hI={x:bd.screenX,y:bd.screenY};if(this.__hL&&window.cancelAnimationFrame){window.cancelAnimationFrame(this.__hL);this.__hL=null;}
;}
,__hR:function(e){var bf=e.getTarget();var bi=this.__hV(bf,e.getChangedTargetTouches()[0]);if(qx.core.Environment.get(n)){if(!this.__gU(bi,t,bf)){e.preventDefault();}
;}
;var bh=-parseInt(this.__hJ.y-bi.screenY);var bg=-parseInt(this.__hJ.x-bi.screenX);this.__hJ={x:bi.screenX,y:bi.screenY};if(e.getNativeEvent().pointerType!=4){var bj=e.getChangedTargetTouches()[0];this.__hM(bg,bh,bj,bf);if(this.__hK){clearTimeout(this.__hK);this.__hK=null;}
;this.__hK=setTimeout(qx.lang.Function.bind(function(bk,bl,bm,bn){this.__hN(bk,bl,bm,bn);}
,this,bg,bh,bj,bf),100);}
;}
,__hS:function(e){var bp=e.getTarget();var bo=this.__hV(bp,e.getChangedTargetTouches()[0]);if(qx.core.Environment.get(n)){if(!this.__gU(bo,c,bp)){e.preventDefault();}
;}
;}
,__hT:function(e){var br=e.getTarget();var bq=this.__hV(br,e.getChangedTargetTouches()[0]);if(!this.__hO(bq)){this.__gU(bq,m,br);}
;}
,__hU:function(e){var bt=e.getTarget();var bs=this.__hV(bt,e.getChangedTargetTouches()[0]);this.__gU(bs,p,bt);}
,__hV:function(bv,bw){var bu={};bu.button=0;bu.wheelDelta=0;bu.wheelDeltaX=0;bu.wheelDeltaY=0;bu.wheelX=0;bu.wheelY=0;bu.target=bv;bu.clientX=bw.clientX;bu.clientY=bw.clientY;bu.pageX=bw.pageX;bu.pageY=bw.pageY;bu.screenX=bw.screenX;bu.screenY=bw.screenY;bu.shiftKey=false;bu.ctrlKey=false;bu.altKey=false;bu.metaKey=false;return bu;}
},destruct:function(){if(qx.event.handler.MouseEmulation.ON){this._stopObserver();}
;this.__ge=this.__cx=this.__a=null;}
,defer:function(bx){if(bx.ON){qx.event.Registration.addHandler(bx);}
;}
});}
)();
(function(){var a="click",b="middle",c="none",d="contextmenu",e="qx.event.type.Mouse",f="browser.documentmode",g="left",h="right",i="browser.name",j="ie";qx.Class.define(e,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(k,l){var l=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,k,l);l.button=k.button;l.clientX=k.clientX;l.clientY=k.clientY;l.pageX=k.pageX;l.pageY=k.pageY;l.screenX=k.screenX;l.screenY=k.screenY;l.wheelDelta=k.wheelDelta;l.wheelDeltaX=k.wheelDeltaX;l.wheelDeltaY=k.wheelDeltaY;l.detail=k.detail;l.axis=k.axis;l.wheelX=k.wheelX;l.wheelY=k.wheelY;l.HORIZONTAL_AXIS=k.HORIZONTAL_AXIS;l.srcElement=k.srcElement;l.target=k.target;return l;}
,__hW:{'0':g,'2':h,'1':b},__hX:{'1':g,'2':h,'4':b},stop:function(){this.stopPropagation();}
,getButton:function(){switch(this._type){case d:return h;case a:if(qx.core.Environment.get(i)===j&&qx.core.Environment.get(f)<9){return g;}
;default:if(this._native.target!==undefined){return this.__hW[this._native.button]||c;}
else {return this.__hX[this._native.button]||c;}
;};}
,isLeftPressed:function(){return this.getButton()===g;}
,isMiddlePressed:function(){return this.getButton()===b;}
,isRightPressed:function(){return this.getButton()===h;}
,getRelatedTarget:function(){return this._relatedTarget;}
,getViewportLeft:function(){return this._native.clientX;}
,getViewportTop:function(){return this._native.clientY;}
,getDocumentLeft:function(){if(this._native.pageX!==undefined){return this._native.pageX;}
else {var m=qx.dom.Node.getWindow(this._native.srcElement);return this._native.clientX+qx.bom.Viewport.getScrollLeft(m);}
;}
,getDocumentTop:function(){if(this._native.pageY!==undefined){return this._native.pageY;}
else {var n=qx.dom.Node.getWindow(this._native.srcElement);return this._native.clientY+qx.bom.Viewport.getScrollTop(n);}
;}
,getScreenLeft:function(){return this._native.screenX;}
,getScreenTop:function(){return this._native.screenY;}
}});}
)();
(function(){var a="engine.name",b="x",c="osx",d="win",f="os.name",g="qx.dynamicmousewheel",h="engine.version",i="chrome",j="qx.event.type.MouseWheel",k="browser.name",l="y";qx.Class.define(j,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();this.preventDefault();}
,__hY:function(p){var m=Math.abs(p);if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>m){qx.event.type.MouseWheel.MINSCROLL=m;this.__ia();}
;if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<m){qx.event.type.MouseWheel.MAXSCROLL=m;this.__ia();}
;if(qx.event.type.MouseWheel.MAXSCROLL===m&&qx.event.type.MouseWheel.MINSCROLL===m){return 2*(p/m);}
;var n=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;var o=(p/n)*Math.log(n)*qx.event.type.MouseWheel.FACTOR;return o<0?Math.min(o,-1):Math.max(o,1);}
,__ia:function(){var q=qx.event.type.MouseWheel.MAXSCROLL||0;var t=qx.event.type.MouseWheel.MINSCROLL||q;if(q<=t){return;}
;var r=q-t;var s=(q/r)*Math.log(r);if(s==0){s=1;}
;qx.event.type.MouseWheel.FACTOR=6/s;}
,getWheelDelta:function(u){var e=this._native;if(u===undefined){if(v===undefined){var v=-e.wheelDelta;if(e.wheelDelta===undefined){v=e.detail;}
;}
;return this.__ib(v);}
;if(u===b){var x=0;if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__ib(-e.wheelDeltaX):0;}
;}
else {if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__ib(e.detail);}
;}
;return x;}
;if(u===l){var y=0;if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__ib(-e.wheelDeltaY):0;}
else {y=this.__ib(-e.wheelDelta);}
;}
else {if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__ib(e.detail);}
;}
;return y;}
;return 0;}
,__ib:function(z){if(qx.event.handler.MouseEmulation.ON){return z;}
else if(qx.core.Environment.get(g)){return this.__hY(z);}
else {var w=qx.core.Environment.select(a,{"default":function(){return z/40;}
,"gecko":function(){return z;}
,"webkit":function(){if(qx.core.Environment.get(k)==i){if(qx.core.Environment.get(f)==c){return z/60;}
else {return z/120;}
;}
else {if(qx.core.Environment.get(f)==d){var A=120;if(parseFloat(qx.core.Environment.get(h))==533.16){A=1200;}
;}
else {A=40;if(parseFloat(qx.core.Environment.get(h))==533.16||parseFloat(qx.core.Environment.get(h))==533.17||parseFloat(qx.core.Environment.get(h))==533.18){A=1200;}
;}
;return z/A;}
;}
});return w.call(this);}
;}
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
,isRendered:function(s){var r=s.ownerDocument||s.document;if(qx.core.Environment.get(c)){if(!s.parentNode||!s.offsetParent){return false;}
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
(function(){var a="mshtml",b="engine.name",c="keypress",d="useraction",e="win",f="text",g="keyinput",h="os.name",i="webkit",j="input",k="gecko",l="off",m="keydown",n="autoComplete",o="keyup",p="qx.event.handler.Keyboard";qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){qx.core.Object.call(this);this.__ge=q;this.__cx=q.getWindow();if((qx.core.Environment.get(b)==k)){this.__a=this.__cx;}
else {this.__a=this.__cx.document.documentElement;}
;this.__ic={};this._initKeyObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__id:null,__ge:null,__cx:null,__a:null,__ic:null,__ie:null,__if:null,__ig:null,canHandleEvent:function(s,r){}
,registerEvent:function(v,u,t){}
,unregisterEvent:function(y,x,w){}
,_fireInputEvent:function(A,z){var B=this.__ih();if(B&&B.offsetWidth!=0){var event=qx.event.Registration.createEvent(g,qx.event.type.KeyInput,[A,B,z]);this.__ge.dispatchEvent(B,event);}
;if(this.__cx){qx.event.Registration.fireEvent(this.__cx,d,qx.event.type.Data,[g]);}
;}
,_fireSequenceEvent:function(D,F,C){var E=this.__ih();var G=D.keyCode;var event=qx.event.Registration.createEvent(F,qx.event.type.KeySequence,[D,E,C]);this.__ge.dispatchEvent(E,event);if(qx.core.Environment.get(b)==a||qx.core.Environment.get(b)==i){if(F==m&&event.getDefaultPrevented()){if(!qx.event.util.Keyboard.isNonPrintableKeyCode(G)&&!this._emulateKeyPress[G]){this._fireSequenceEvent(D,c,C);}
;}
;}
;if(this.__cx){qx.event.Registration.fireEvent(this.__cx,d,qx.event.type.Data,[F]);}
;}
,__ih:function(){var H=this.__ge.getHandler(qx.event.handler.Focus);var I=H.getActive();if(!I||I.offsetWidth==0){I=H.getFocus();}
;if(!I||I.offsetWidth==0){I=this.__ge.getWindow().document.body;}
;return I;}
,_initKeyObserver:function(){this.__id=qx.lang.Function.listener(this.__ii,this);this.__ig=qx.lang.Function.listener(this.__ik,this);var Event=qx.bom.Event;Event.addNativeListener(this.__a,o,this.__id);Event.addNativeListener(this.__a,m,this.__id);Event.addNativeListener(this.__a,c,this.__ig);}
,_stopKeyObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__a,o,this.__id);Event.removeNativeListener(this.__a,m,this.__id);Event.removeNativeListener(this.__a,c,this.__ig);for(var K in (this.__if||{})){var J=this.__if[K];Event.removeNativeListener(J.target,c,J.callback);}
;delete (this.__if);}
,__ii:qx.event.GlobalError.observeMethod(qx.core.Environment.select(b,{"mshtml":function(N){N=window.event||N;var O=N.keyCode;var M=0;var L=N.type;if(!(this.__ic[O]==m&&L==m)){this._idealKeyHandler(O,M,L,N);}
;if(L==m){if(qx.event.util.Keyboard.isNonPrintableKeyCode(O)||this._emulateKeyPress[O]){this._idealKeyHandler(O,M,c,N);}
;}
;this.__ic[O]=L;}
,"gecko":function(Q){var S=0;var U=Q.keyCode;var T=Q.type;var R=qx.event.util.Keyboard;if(qx.core.Environment.get(h)==e){var P=U?R.keyCodeToIdentifier(U):R.charCodeToIdentifier(S);if(!(this.__ic[P]==m&&T==m)){this._idealKeyHandler(U,S,T,Q);}
;this.__ic[P]=T;}
else {this._idealKeyHandler(U,S,T,Q);}
;this.__ij(Q.target,T,U);}
,"webkit":function(X){var Y=0;var W=0;var V=X.type;Y=X.keyCode;this._idealKeyHandler(Y,W,V,X);if(V==m){if(qx.event.util.Keyboard.isNonPrintableKeyCode(Y)||this._emulateKeyPress[Y]){this._idealKeyHandler(Y,W,c,X);}
;}
;this.__ic[Y]=V;}
,"opera":function(ba){this.__ie=ba.keyCode;this._idealKeyHandler(ba.keyCode,0,ba.type,ba);}
})),__ij:qx.core.Environment.select(b,{"gecko":function(bc,be,bf){if(be===m&&(bf==33||bf==34||bf==38||bf==40)&&bc.type==f&&bc.tagName.toLowerCase()===j&&bc.getAttribute(n)!==l){if(!this.__if){this.__if={};}
;var bb=qx.core.ObjectRegistry.toHashCode(bc);if(this.__if[bb]){return;}
;var self=this;this.__if[bb]={target:bc,callback:function(bg){qx.bom.Event.stopPropagation(bg);self.__ik(bg);}
};var bd=qx.event.GlobalError.observeMethod(this.__if[bb].callback);qx.bom.Event.addNativeListener(bc,c,bd);}
;}
,"default":null}),__ik:qx.event.GlobalError.observeMethod(qx.core.Environment.select(b,{"mshtml":function(bh){bh=window.event||bh;if(this._charCode2KeyCode[bh.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bh.keyCode],0,bh.type,bh);}
else {this._idealKeyHandler(0,bh.keyCode,bh.type,bh);}
;}
,"gecko":function(bi){var bj=bi.charCode;var bk=bi.type;this._idealKeyHandler(bi.keyCode,bj,bk,bi);}
,"webkit":function(bl){if(this._charCode2KeyCode[bl.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bl.keyCode],0,bl.type,bl);}
else {this._idealKeyHandler(0,bl.keyCode,bl.type,bl);}
;}
,"opera":function(bm){var bo=bm.keyCode;var bn=bm.type;if(bo!=this.__ie){this._idealKeyHandler(0,this.__ie,bn,bm);}
else {if(qx.event.util.Keyboard.keyCodeToIdentifierMap[bm.keyCode]){this._idealKeyHandler(bm.keyCode,0,bm.type,bm);}
else {this._idealKeyHandler(0,bm.keyCode,bm.type,bm);}
;}
;}
})),_idealKeyHandler:function(bs,bq,bt,br){var bp;if(bs||(!bs&&!bq)){bp=qx.event.util.Keyboard.keyCodeToIdentifier(bs);this._fireSequenceEvent(br,bt,bp);}
else {bp=qx.event.util.Keyboard.charCodeToIdentifier(bq);this._fireSequenceEvent(br,c,bp);this._fireInputEvent(br,bq);}
;}
,_emulateKeyPress:qx.core.Environment.select(b,{"mshtml":{'8':true,'9':true},"webkit":{'8':true,'9':true,'27':true},"default":{}}),_identifierToKeyCode:function(bu){return qx.event.util.Keyboard.identifierToKeyCodeMap[bu]||bu.charCodeAt(0);}
},destruct:function(){this._stopKeyObserver();this.__ie=this.__ge=this.__cx=this.__a=this.__ic=null;}
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
(function(){var a="selectstart",b="blur",c="mousedown",d="focus",e="qx.event.handler.Focus",f="_applyFocus",g="DOMFocusIn",h="deactivate",i="textarea",j="touchend",k="_applyActive",l='character',m="input",n="event.touch",o="",p="qxSelectable",q="tabIndex",r="off",s="touchstart",t="activate",u="focusin",v="mshtml",w="engine.name",x="mouseup",y="DOMFocusOut",z="focusout",A="qxKeepFocus",B="on",C="qxKeepActive",D="draggesture";qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(E){qx.core.Object.call(this);this._manager=E;this._window=E.getWindow();this._document=this._window.document;this._root=this._document.documentElement;this._body=this._document.body;var F=qx.core.Environment.get(n)&&qx.event.handler.MouseEmulation.ON;this.__il=F?s:c;this.__im=F?j:x;this._initObserver();}
,properties:{active:{apply:k,nullable:true},focus:{apply:f,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select(w,{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__in:null,__io:null,__ip:null,__iq:null,__ir:null,__is:null,__it:null,__iu:null,__iv:null,__iw:null,__il:o,__im:o,canHandleEvent:function(H,G){}
,registerEvent:function(K,J,I){}
,unregisterEvent:function(N,M,L){}
,focus:function(O){if((qx.core.Environment.get(w)==v)){window.setTimeout(function(){try{O.focus();var P=qx.bom.Selection.get(O);if(P.length==0){var Q=O.createTextRange();Q.moveStart(l,O.value.length);Q.collapse();Q.select();}
;}
catch(R){}
;}
,0);}
else {try{O.focus();}
catch(S){}
;}
;this.setFocus(O);this.setActive(O);}
,activate:function(T){this.setActive(T);}
,blur:function(U){try{U.blur();}
catch(V){}
;if(this.getActive()===U){this.resetActive();}
;if(this.getFocus()===U){this.resetFocus();}
;}
,deactivate:function(W){if(this.getActive()===W){this.resetActive();}
;}
,tryActivate:function(Y){var X=this.__iK(Y);if(X){this.setActive(X);}
;}
,__gU:function(ba,bc,bf,be){var bd=qx.event.Registration;var bb=bd.createEvent(bf,qx.event.type.Focus,[ba,bc,be]);bd.dispatchEvent(ba,bb);}
,_windowFocused:true,__ix:function(){if(this._windowFocused){this._windowFocused=false;this.__gU(this._window,null,b,false);}
;}
,__iy:function(){if(!this._windowFocused){this._windowFocused=true;this.__gU(this._window,null,d,false);}
;}
,_initObserver:qx.core.Environment.select(w,{"gecko":function(){this.__in=qx.lang.Function.listener(this.__iE,this);this.__io=qx.lang.Function.listener(this.__iF,this);this.__ip=qx.lang.Function.listener(this.__iD,this);this.__iq=qx.lang.Function.listener(this.__iC,this);this.__ir=qx.lang.Function.listener(this.__iz,this);qx.bom.Event.addNativeListener(this._document,this.__il,this.__in,true);qx.bom.Event.addNativeListener(this._document,this.__im,this.__io,true);qx.bom.Event.addNativeListener(this._window,d,this.__ip,true);qx.bom.Event.addNativeListener(this._window,b,this.__iq,true);qx.bom.Event.addNativeListener(this._window,D,this.__ir,true);}
,"mshtml":function(){this.__in=qx.lang.Function.listener(this.__iE,this);this.__io=qx.lang.Function.listener(this.__iF,this);this.__it=qx.lang.Function.listener(this.__iA,this);this.__iu=qx.lang.Function.listener(this.__iB,this);this.__is=qx.lang.Function.listener(this.__iH,this);qx.bom.Event.addNativeListener(this._document,this.__il,this.__in);qx.bom.Event.addNativeListener(this._document,this.__im,this.__io);qx.bom.Event.addNativeListener(this._document,u,this.__it);qx.bom.Event.addNativeListener(this._document,z,this.__iu);qx.bom.Event.addNativeListener(this._document,a,this.__is);}
,"webkit":function(){this.__in=qx.lang.Function.listener(this.__iE,this);this.__io=qx.lang.Function.listener(this.__iF,this);this.__iu=qx.lang.Function.listener(this.__iB,this);this.__ip=qx.lang.Function.listener(this.__iD,this);this.__iq=qx.lang.Function.listener(this.__iC,this);this.__is=qx.lang.Function.listener(this.__iH,this);qx.bom.Event.addNativeListener(this._document,this.__il,this.__in,true);qx.bom.Event.addNativeListener(this._document,this.__im,this.__io,true);qx.bom.Event.addNativeListener(this._document,a,this.__is,false);qx.bom.Event.addNativeListener(this._window,y,this.__iu,true);qx.bom.Event.addNativeListener(this._window,d,this.__ip,true);qx.bom.Event.addNativeListener(this._window,b,this.__iq,true);}
,"opera":function(){this.__in=qx.lang.Function.listener(this.__iE,this);this.__io=qx.lang.Function.listener(this.__iF,this);this.__it=qx.lang.Function.listener(this.__iA,this);this.__iu=qx.lang.Function.listener(this.__iB,this);qx.bom.Event.addNativeListener(this._document,this.__il,this.__in,true);qx.bom.Event.addNativeListener(this._document,this.__im,this.__io,true);qx.bom.Event.addNativeListener(this._window,g,this.__it,true);qx.bom.Event.addNativeListener(this._window,y,this.__iu,true);}
}),_stopObserver:qx.core.Environment.select(w,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,this.__il,this.__in,true);qx.bom.Event.removeNativeListener(this._document,this.__im,this.__io,true);qx.bom.Event.removeNativeListener(this._window,d,this.__ip,true);qx.bom.Event.removeNativeListener(this._window,b,this.__iq,true);qx.bom.Event.removeNativeListener(this._window,D,this.__ir,true);}
,"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,this.__il,this.__in);qx.bom.Event.removeNativeListener(this._document,this.__im,this.__io);qx.bom.Event.removeNativeListener(this._document,u,this.__it);qx.bom.Event.removeNativeListener(this._document,z,this.__iu);qx.bom.Event.removeNativeListener(this._document,a,this.__is);}
,"webkit":function(){qx.bom.Event.removeNativeListener(this._document,this.__il,this.__in,true);qx.bom.Event.removeNativeListener(this._document,this.__im,this.__io,true);qx.bom.Event.removeNativeListener(this._document,a,this.__is,false);qx.bom.Event.removeNativeListener(this._window,y,this.__iu,true);qx.bom.Event.removeNativeListener(this._window,d,this.__ip,true);qx.bom.Event.removeNativeListener(this._window,b,this.__iq,true);}
,"opera":function(){qx.bom.Event.removeNativeListener(this._document,this.__il,this.__in,true);qx.bom.Event.removeNativeListener(this._document,this.__im,this.__io,true);qx.bom.Event.removeNativeListener(this._window,g,this.__it,true);qx.bom.Event.removeNativeListener(this._window,y,this.__iu,true);}
}),__iz:qx.event.GlobalError.observeMethod(qx.core.Environment.select(w,{"gecko":function(bg){var bh=qx.bom.Event.getTarget(bg);if(!this.__iL(bh)){qx.bom.Event.preventDefault(bg);}
;}
,"default":null})),__iA:qx.event.GlobalError.observeMethod(qx.core.Environment.select(w,{"mshtml":function(bj){this.__iy();var bk=qx.bom.Event.getTarget(bj);var bi=this.__iJ(bk);if(bi){this.setFocus(bi);}
;this.tryActivate(bk);}
,"opera":function(bl){var bm=qx.bom.Event.getTarget(bl);if(bm==this._document||bm==this._window){this.__iy();if(this.__iv){this.setFocus(this.__iv);delete this.__iv;}
;if(this.__iw){this.setActive(this.__iw);delete this.__iw;}
;}
else {this.setFocus(bm);this.tryActivate(bm);if(!this.__iL(bm)){bm.selectionStart=0;bm.selectionEnd=0;}
;}
;}
,"default":null})),__iB:qx.event.GlobalError.observeMethod(qx.core.Environment.select(w,{"mshtml":function(bn){var bo=qx.bom.Event.getRelatedTarget(bn);if(bo==null){this.__ix();this.resetFocus();this.resetActive();}
;}
,"webkit":function(bp){var bq=qx.bom.Event.getTarget(bp);if(bq===this.getFocus()){this.resetFocus();}
;if(bq===this.getActive()){this.resetActive();}
;}
,"opera":function(br){var bs=qx.bom.Event.getTarget(br);if(bs==this._document){this.__ix();this.__iv=this.getFocus();this.__iw=this.getActive();this.resetFocus();this.resetActive();}
else {if(bs===this.getFocus()){this.resetFocus();}
;if(bs===this.getActive()){this.resetActive();}
;}
;}
,"default":null})),__iC:qx.event.GlobalError.observeMethod(qx.core.Environment.select(w,{"gecko":function(bt){var bu=qx.bom.Event.getTarget(bt);if(bu===this._window||bu===this._document){this.__ix();this.resetActive();this.resetFocus();}
;}
,"webkit":function(bv){var bw=qx.bom.Event.getTarget(bv);if(bw===this._window||bw===this._document){this.__ix();this.__iv=this.getFocus();this.__iw=this.getActive();this.resetActive();this.resetFocus();}
;}
,"default":null})),__iD:qx.event.GlobalError.observeMethod(qx.core.Environment.select(w,{"gecko":function(bx){var by=qx.bom.Event.getTarget(bx);if(by===this._window||by===this._document){this.__iy();by=this._body;}
;this.setFocus(by);this.tryActivate(by);}
,"webkit":function(bz){var bA=qx.bom.Event.getTarget(bz);if(bA===this._window||bA===this._document){this.__iy();if(this.__iv){this.setFocus(this.__iv);delete this.__iv;}
;if(this.__iw){this.setActive(this.__iw);delete this.__iw;}
;}
else {this.setFocus(bA);this.tryActivate(bA);}
;}
,"default":null})),__iE:qx.event.GlobalError.observeMethod(qx.core.Environment.select(w,{"mshtml":function(bC){var bD=qx.bom.Event.getTarget(bC);var bB=this.__iJ(bD);if(bB){if(!this.__iL(bD)){bD.unselectable=B;try{document.selection.empty();}
catch(bE){}
;try{bB.focus();}
catch(bF){}
;}
;}
else {qx.bom.Event.preventDefault(bC);if(!this.__iL(bD)){bD.unselectable=B;}
;}
;}
,"webkit|gecko":function(bH){var bI=qx.bom.Event.getTarget(bH);var bG=this.__iJ(bI);if(bG){this.setFocus(bG);if(qx.core.Environment.get(n)&&qx.event.handler.MouseEmulation.ON){try{if(document.activeElement==bG){bG.blur();}
;bG.focus();}
catch(bJ){}
;}
;}
else {qx.bom.Event.preventDefault(bH);}
;}
,"opera":function(bM){var bN=qx.bom.Event.getTarget(bM);var bK=this.__iJ(bN);if(!this.__iL(bN)){qx.bom.Event.preventDefault(bM);if(bK){var bL=this.getFocus();if(bL&&bL.selectionEnd){bL.selectionStart=0;bL.selectionEnd=0;bL.blur();}
;if(bK){this.setFocus(bK);}
;}
;}
else if(bK){this.setFocus(bK);}
;}
,"default":null})),__iF:qx.event.GlobalError.observeMethod(qx.core.Environment.select(w,{"mshtml":function(bO){var bP=qx.bom.Event.getTarget(bO);if(bP.unselectable){bP.unselectable=r;}
;this.tryActivate(this.__iG(bP));}
,"gecko":function(bQ){var bR=qx.bom.Event.getTarget(bQ);while(bR&&bR.offsetWidth===undefined){bR=bR.parentNode;}
;if(bR){this.tryActivate(bR);}
;}
,"webkit|opera":function(bS){var bT=qx.bom.Event.getTarget(bS);this.tryActivate(this.__iG(bT));}
,"default":null})),__iG:qx.event.GlobalError.observeMethod(qx.core.Environment.select(w,{"mshtml|webkit":function(bU){var bV=this.getFocus();if(bV&&bU!=bV&&(bV.nodeName.toLowerCase()===m||bV.nodeName.toLowerCase()===i)){bU=bV;}
;return bU;}
,"default":function(bW){return bW;}
})),__iH:qx.event.GlobalError.observeMethod(qx.core.Environment.select(w,{"mshtml|webkit":function(bX){var bY=qx.bom.Event.getTarget(bX);if(!this.__iL(bY)){qx.bom.Event.preventDefault(bX);}
;}
,"default":null})),__iI:function(ca){var cb=qx.bom.element.Attribute.get(ca,q);if(cb>=1){return true;}
;var cc=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;if(cb>=0&&cc[ca.tagName]){return true;}
;return false;}
,__iJ:function(cd){while(cd&&cd.nodeType===1){if(cd.getAttribute(A)==B){return null;}
;if(this.__iI(cd)){return cd;}
;cd=cd.parentNode;}
;return this._body;}
,__iK:function(ce){var cf=ce;while(ce&&ce.nodeType===1){if(ce.getAttribute(C)==B){return null;}
;ce=ce.parentNode;}
;return cf;}
,__iL:function(cg){while(cg&&cg.nodeType===1){var ch=cg.getAttribute(p);if(ch!=null){return ch===B;}
;cg=cg.parentNode;}
;return true;}
,_applyActive:function(cj,ci){if(ci){this.__gU(ci,cj,h,true);}
;if(cj){this.__gU(cj,ci,t,true);}
;}
,_applyFocus:function(cl,ck){if(ck){this.__gU(ck,cl,z,true);}
;if(cl){this.__gU(cl,ck,u,true);}
;if(ck){this.__gU(ck,cl,b,false);}
;if(cl){this.__gU(cl,ck,d,false);}
;}
},destruct:function(){this._stopObserver();this._manager=this._window=this._document=this._root=this._body=this.__iM=null;}
,defer:function(cn){qx.event.Registration.addHandler(cn);var co=cn.FOCUSABLE_ELEMENTS;for(var cm in co){co[cm.toUpperCase()]=1;}
;}
});}
)();
(function(){var a="engine.name",b="qx.bom.Selection",c="character",d="button",e='character',f="#text",g="webkit",h="input",i="gecko",j="EndToEnd",k="opera",l="StartToStart",m="html.selection",n="textarea",o="body";qx.Class.define(b,{statics:{getSelectionObject:qx.core.Environment.select(m,{"selection":function(p){return p.selection;}
,"default":function(q){return qx.dom.Node.getWindow(q).getSelection();}
}),get:qx.core.Environment.select(m,{"selection":function(r){var s=qx.bom.Range.get(qx.dom.Node.getDocument(r));return s.text;}
,"default":function(t){if(this.__iN(t)){return t.value.substring(t.selectionStart,t.selectionEnd);}
else {return this.getSelectionObject(qx.dom.Node.getDocument(t)).toString();}
;}
}),getLength:qx.core.Environment.select(m,{"selection":function(u){var w=this.get(u);var v=qx.util.StringSplit.split(w,/\r\n/);return w.length-(v.length-1);}
,"default":function(x){if(qx.core.Environment.get(a)==k){var B,C,A;if(this.__iN(x)){var z=x.selectionStart;var y=x.selectionEnd;B=x.value.substring(z,y);C=y-z;}
else {B=qx.bom.Selection.get(x);C=B.length;}
;A=qx.util.StringSplit.split(B,/\r\n/);return C-(A.length-1);}
;if(this.__iN(x)){return x.selectionEnd-x.selectionStart;}
else {return this.get(x).length;}
;}
}),getStart:qx.core.Environment.select(m,{"selection":function(D){if(this.__iN(D)){var I=qx.bom.Range.get();if(!D.contains(I.parentElement())){return -1;}
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
,"default":function(N){if(qx.core.Environment.get(a)===i||qx.core.Environment.get(a)===g){if(this.__iN(N)){return N.selectionStart;}
else {var P=qx.dom.Node.getDocument(N);var O=this.getSelectionObject(P);if(O.anchorOffset<O.focusOffset){return O.anchorOffset;}
else {return O.focusOffset;}
;}
;}
;if(this.__iN(N)){return N.selectionStart;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;}
;}
}),getEnd:qx.core.Environment.select(m,{"selection":function(Q){if(this.__iN(Q)){var V=qx.bom.Range.get();if(!Q.contains(V.parentElement())){return -1;}
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
,"default":function(bb){if(qx.core.Environment.get(a)===i||qx.core.Environment.get(a)===g){if(this.__iN(bb)){return bb.selectionEnd;}
else {var bd=qx.dom.Node.getDocument(bb);var bc=this.getSelectionObject(bd);if(bc.focusOffset>bc.anchorOffset){return bc.focusOffset;}
else {return bc.anchorOffset;}
;}
;}
;if(this.__iN(bb)){return bb.selectionEnd;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bb)).focusOffset;}
;}
}),__iN:function(be){return qx.dom.Node.isElement(be)&&(be.nodeName.toLowerCase()==h||be.nodeName.toLowerCase()==n);}
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
,clear:qx.core.Environment.select(m,{"selection":function(bs){var bt=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bs));var bu=qx.bom.Range.get(bs);var parent=bu.parentElement();var bv=qx.bom.Range.get(qx.dom.Node.getDocument(bs));if(parent==bv.parentElement()&&parent==bs){bt.empty();}
;}
,"default":function(bw){var bB=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bw));var bx=bw.nodeName.toLowerCase();if(qx.dom.Node.isElement(bw)&&(bx==h||bx==n)){bw.setSelectionRange(0,0);qx.bom.Element.blur(bw);}
else if(qx.dom.Node.isDocument(bw)||bx==o){bB.collapse(bw.body?bw.body:bw,0);}
else {var by=qx.bom.Range.get(bw);if(!by.collapsed){var bz;var bA=by.commonAncestorContainer;if(qx.dom.Node.isElement(bw)&&qx.dom.Node.isText(bA)){bz=bA.parentNode;}
else {bz=bA;}
;if(bz==bw){bB.collapse(bw,0);}
;}
;}
;}
})}});}
)();
(function(){var a="qx.bom.Range",b="text",c="password",d="file",e="submit",f="reset",g="textarea",h="input",i="hidden",j="html.selection",k="button",l="body";qx.Class.define(a,{statics:{get:qx.core.Environment.select(j,{"selection":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case h:switch(m.type){case b:case c:case i:case k:case f:case d:case e:return m.createTextRange();break;default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();};break;case g:case l:case k:return m.createTextRange();break;default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();};}
else {if(m==null){m=window;}
;return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();}
;}
,"default":function(n){var o=qx.dom.Node.getDocument(n);var p=qx.bom.Selection.getSelectionObject(o);if(p.rangeCount>0){return p.getRangeAt(0);}
else {return o.createRange();}
;}
})}});}
)();
(function(){var a="m",b="g",c="^",d="",e="qx.util.StringSplit",f="i",g="$(?!\\s)",h="[object RegExp]",j="y";qx.Class.define(e,{statics:{split:function(k,p,o){if(Object.prototype.toString.call(p)!==h){return String.prototype.split.call(k,p,o);}
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
(function(){var a="text",b="blur",c="engine.version",d="keydown",f="radio",g="textarea",h="password",j="propertychange",k="select-multiple",m="change",n="input",p="value",q="select",r="browser.documentmode",s="browser.version",t="opera",u="keyup",v="mshtml",w="engine.name",x="keypress",y="checkbox",z="qx.event.handler.Input",A="checked";qx.Class.define(z,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);if((qx.core.Environment.get(w)==t)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);}
;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__iO:false,__iP:null,__iQ:null,__iR:null,canHandleEvent:function(D,C){var B=D.tagName.toLowerCase();if(C===n&&(B===n||B===g)){return true;}
;if(C===m&&(B===n||B===g||B===q)){return true;}
;return false;}
,registerEvent:function(I,H,F){if(qx.core.Environment.get(w)==v&&(qx.core.Environment.get(c)<9||(qx.core.Environment.get(c)>=9&&qx.core.Environment.get(r)<9))){if(!I.__iS){var G=I.tagName.toLowerCase();var E=I.type;if(E===a||E===h||G===g||E===y||E===f){qx.bom.Event.addNativeListener(I,j,this._onPropertyWrapper);}
;if(E!==y&&E!==f){qx.bom.Event.addNativeListener(I,m,this._onChangeValueWrapper);}
;if(E===a||E===h){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,I);qx.bom.Event.addNativeListener(I,x,this._onKeyPressWrapped);}
;I.__iS=true;}
;}
else {if(H===n){this.__iT(I);}
else if(H===m){if(I.type===f||I.type===y){qx.bom.Event.addNativeListener(I,m,this._onChangeCheckedWrapper);}
else {qx.bom.Event.addNativeListener(I,m,this._onChangeValueWrapper);}
;if((qx.core.Environment.get(w)==t)||(qx.core.Environment.get(w)==v)){if(I.type===a||I.type===h){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,I);qx.bom.Event.addNativeListener(I,x,this._onKeyPressWrapped);}
;}
;}
;}
;}
,__iT:qx.core.Environment.select(w,{"mshtml":function(J){if(qx.core.Environment.get(c)>=9&&qx.core.Environment.get(r)>=9){qx.bom.Event.addNativeListener(J,n,this._onInputWrapper);if(J.type===a||J.type===h||J.type===g){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,J);qx.bom.Event.addNativeListener(J,u,this._inputFixWrapper);}
;}
;}
,"webkit":function(L){var K=L.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(c))<532&&K==g){qx.bom.Event.addNativeListener(L,x,this._onInputWrapper);}
;qx.bom.Event.addNativeListener(L,n,this._onInputWrapper);}
,"opera":function(M){qx.bom.Event.addNativeListener(M,u,this._onKeyUpWrapper);qx.bom.Event.addNativeListener(M,d,this._onKeyDownWrapper);qx.bom.Event.addNativeListener(M,b,this._onBlurWrapper);qx.bom.Event.addNativeListener(M,n,this._onInputWrapper);}
,"default":function(N){qx.bom.Event.addNativeListener(N,n,this._onInputWrapper);}
}),unregisterEvent:function(R,Q){if(qx.core.Environment.get(w)==v&&qx.core.Environment.get(c)<9&&qx.core.Environment.get(r)<9){if(R.__iS){var P=R.tagName.toLowerCase();var O=R.type;if(O===a||O===h||P===g||O===y||O===f){qx.bom.Event.removeNativeListener(R,j,this._onPropertyWrapper);}
;if(O!==y&&O!==f){qx.bom.Event.removeNativeListener(R,m,this._onChangeValueWrapper);}
;if(O===a||O===h){qx.bom.Event.removeNativeListener(R,x,this._onKeyPressWrapped);}
;try{delete R.__iS;}
catch(S){R.__iS=null;}
;}
;}
else {if(Q===n){this.__iU(R);}
else if(Q===m){if(R.type===f||R.type===y){qx.bom.Event.removeNativeListener(R,m,this._onChangeCheckedWrapper);}
else {qx.bom.Event.removeNativeListener(R,m,this._onChangeValueWrapper);}
;}
;if((qx.core.Environment.get(w)==t)||(qx.core.Environment.get(w)==v)){if(R.type===a||R.type===h){qx.bom.Event.removeNativeListener(R,x,this._onKeyPressWrapped);}
;}
;}
;}
,__iU:qx.core.Environment.select(w,{"mshtml":function(T){if(qx.core.Environment.get(c)>=9&&qx.core.Environment.get(r)>=9){qx.bom.Event.removeNativeListener(T,n,this._onInputWrapper);if(T.type===a||T.type===h||T.type===g){qx.bom.Event.removeNativeListener(T,u,this._inputFixWrapper);}
;}
;}
,"webkit":function(V){var U=V.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(c))<532&&U==g){qx.bom.Event.removeNativeListener(V,x,this._onInputWrapper);}
;qx.bom.Event.removeNativeListener(V,n,this._onInputWrapper);}
,"opera":function(W){qx.bom.Event.removeNativeListener(W,u,this._onKeyUpWrapper);qx.bom.Event.removeNativeListener(W,d,this._onKeyDownWrapper);qx.bom.Event.removeNativeListener(W,b,this._onBlurWrapper);qx.bom.Event.removeNativeListener(W,n,this._onInputWrapper);}
,"default":function(X){qx.bom.Event.removeNativeListener(X,n,this._onInputWrapper);}
}),_onKeyPress:qx.core.Environment.select(w,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__iQ){this.__iQ=Y.value;qx.event.Registration.fireEvent(Y,m,qx.event.type.Data,[Y.value]);}
;}
;}
,"default":null}),_inputFix:qx.core.Environment.select(w,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__iR){this.__iR=ba.value;qx.event.Registration.fireEvent(ba,n,qx.event.type.Data,[ba.value]);}
;}
;}
,"default":null}),_onKeyDown:qx.core.Environment.select(w,{"opera":function(e){if(e.keyCode===13){this.__iO=true;}
;}
,"default":null}),_onKeyUp:qx.core.Environment.select(w,{"opera":function(e){if(e.keyCode===13){this.__iO=false;}
;}
,"default":null}),_onBlur:qx.core.Environment.select(w,{"opera":function(e){if(this.__iP&&qx.core.Environment.get(s)<10.6){window.clearTimeout(this.__iP);}
;}
,"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);var bb=bc.tagName.toLowerCase();if(!this.__iO||bb!==n){if((qx.core.Environment.get(w)==t)&&qx.core.Environment.get(s)<10.6){this.__iP=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,n,qx.event.type.Data,[bc.value]);}
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
(function(){var a="blur",b="mousedown",c="qxDraggable",d="mouseout",f="Escape",g="drag",h="keydown",i="Unsupported data type: ",j="drop",k="qxDroppable",l="qx.event.handler.DragDrop",m="This method must not be used outside the drop event listener!",n="Control",o="Shift",p="!",q="mousemove",r="move",s="droprequest",t="copy",u="dragstart",v="alias",w="mouseover",x="dragchange",y="Alt",z="keyup",A="mouseup",B="keypress",C="dragleave",D="dragend",E="dragover",F="left",G="Please use a droprequest listener to the drag source to fill the manager with data!",H="on";qx.Class.define(l,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(I){qx.core.Object.call(this);this.__ge=I;this.__a=I.getWindow().document.documentElement;this.__ge.addListener(this.__a,b,this._onMouseDown,this);this.__jg();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__ge:null,__a:null,__iV:null,__iW:null,__iX:null,__iY:null,__ja:null,__d:null,__jb:null,__jc:null,__jd:false,__je:0,__jf:0,canHandleEvent:function(K,J){}
,registerEvent:function(N,M,L){}
,unregisterEvent:function(Q,P,O){}
,addType:function(R){this.__iX[R]=true;}
,addAction:function(S){this.__iY[S]=true;}
,supportsType:function(T){return !!this.__iX[T];}
,supportsAction:function(U){return !!this.__iY[U];}
,getData:function(V){if(!this.__jm||!this.__iV){throw new Error(m);}
;if(!this.__iX[V]){throw new Error(i+V+p);}
;if(!this.__d[V]){this.__jb=V;this.__gU(s,this.__iW,this.__iV,false);}
;if(!this.__d[V]){throw new Error(G);}
;return this.__d[V]||null;}
,getCurrentAction:function(){return this.__jc;}
,addData:function(W,X){this.__d[W]=X;}
,getCurrentType:function(){return this.__jb;}
,isSessionActive:function(){return this.__jd;}
,__jg:function(){this.__iX={};this.__iY={};this.__ja={};this.__d={};}
,__jh:function(){if(this.__iW==null){return;}
;var bc=this.__iY;var Y=this.__ja;var ba=null;if(this.__jm){if(Y.Shift&&Y.Control&&bc.alias){ba=v;}
else if(Y.Shift&&Y.Alt&&bc.copy){ba=t;}
else if(Y.Shift&&bc.move){ba=r;}
else if(Y.Alt&&bc.alias){ba=v;}
else if(Y.Control&&bc.copy){ba=t;}
else if(bc.move){ba=r;}
else if(bc.copy){ba=t;}
else if(bc.alias){ba=v;}
;}
;var bb=this.__jc;if(ba!=bb){if(this.__iV){this.__jc=ba;this.__ji=this.__gU(x,this.__iV,this.__iW,true);if(!this.__ji){ba=null;}
;}
;if(ba!=bb){this.__jc=ba;this.__gU(x,this.__iW,this.__iV,false);}
;}
;}
,__gU:function(bi,be,bf,bg,bj){var bh=qx.event.Registration;var bd=bh.createEvent(bi,qx.event.type.Drag,[bg,bj]);if(be!==bf){bd.setRelatedTarget(bf);}
;return bh.dispatchEvent(be,bd);}
,__jj:function(bk){while(bk&&bk.nodeType==1){if(bk.getAttribute(c)==H){return bk;}
;bk=bk.parentNode;}
;return null;}
,__jk:function(bl){while(bl&&bl.nodeType==1){if(bl.getAttribute(k)==H){return bl;}
;bl=bl.parentNode;}
;return null;}
,__jl:function(){this.__iW=null;this.__ge.removeListener(this.__a,q,this._onMouseMove,this,true);this.__ge.removeListener(this.__a,A,this._onMouseUp,this,true);qx.event.Registration.removeListener(window,a,this._onWindowBlur,this);this.__jg();}
,clearSession:function(){if(this.__jd){this.__ge.removeListener(this.__a,w,this._onMouseOver,this,true);this.__ge.removeListener(this.__a,d,this._onMouseOut,this,true);this.__ge.removeListener(this.__a,h,this._onKeyDown,this,true);this.__ge.removeListener(this.__a,z,this._onKeyUp,this,true);this.__ge.removeListener(this.__a,B,this._onKeyPress,this,true);this.__gU(D,this.__iW,this.__iV,false);this.__jd=false;}
;this.__jm=false;this.__iV=null;this.__jl();}
,__jm:false,__ji:false,_onWindowBlur:function(e){this.clearSession();}
,_onKeyDown:function(e){var bm=e.getKeyIdentifier();switch(bm){case y:case n:case o:if(!this.__ja[bm]){this.__ja[bm]=true;this.__jh();}
;};}
,_onKeyUp:function(e){var bn=e.getKeyIdentifier();switch(bn){case y:case n:case o:if(this.__ja[bn]){this.__ja[bn]=false;this.__jh();}
;};}
,_onKeyPress:function(e){var bo=e.getKeyIdentifier();switch(bo){case f:this.clearSession();};}
,_onMouseDown:function(e){if(this.__jd||e.getButton()!==F){return;}
;var bp=this.__jj(e.getTarget());if(bp){this.__je=e.getDocumentLeft();this.__jf=e.getDocumentTop();this.__iW=bp;this.__ge.addListener(this.__a,q,this._onMouseMove,this,true);this.__ge.addListener(this.__a,A,this._onMouseUp,this,true);qx.event.Registration.addListener(window,a,this._onWindowBlur,this);}
;}
,_onMouseUp:function(e){if(this.__jm&&this.__ji){this.__gU(j,this.__iV,this.__iW,false,e);}
;if(this.__jd&&e.getTarget()==this.__iW){e.stopPropagation();this.__gT();}
;this.clearSession();}
,_onMouseMove:function(e){if(this.__jd){if(!this.__gU(g,this.__iW,this.__iV,true,e)){this.clearSession();}
;}
else {if(Math.abs(e.getDocumentLeft()-this.__je)>3||Math.abs(e.getDocumentTop()-this.__jf)>3){if(this.__gU(u,this.__iW,this.__iV,true,e)){this.__jd=true;this.__ge.addListener(this.__a,w,this._onMouseOver,this,true);this.__ge.addListener(this.__a,d,this._onMouseOut,this,true);this.__ge.addListener(this.__a,h,this._onKeyDown,this,true);this.__ge.addListener(this.__a,z,this._onKeyUp,this,true);this.__ge.addListener(this.__a,B,this._onKeyPress,this,true);var bq=this.__ja;bq.Control=e.isCtrlPressed();bq.Shift=e.isShiftPressed();bq.Alt=e.isAltPressed();this.__jh();}
else {this.__gU(D,this.__iW,this.__iV,false);this.__jl();}
;}
;}
;}
,_onMouseOver:function(e){var bt=e.getTarget();var br=qx.ui.core.DragDropCursor.getInstance();var bs=br.getContentElement().getDomElement();if(bt===bs){return;}
;var bu=this.__jk(bt);if(bu&&bu!=this.__iV){this.__jm=this.__gU(E,bu,this.__iW,true,e);this.__iV=bu;this.__jh();}
;}
,_onMouseOut:function(e){var bv=qx.ui.core.DragDropCursor.getInstance();var bw=bv.getContentElement().getDomElement();if(e.getTarget()===bw){return;}
;if(e.getRelatedTarget()===bw){return;}
;var by=this.__jk(e.getTarget());var bx=this.__jk(e.getRelatedTarget());if(by&&by!==bx&&by==this.__iV){this.__gU(C,this.__iV,bx,false,e);this.__iV=null;this.__jm=false;qx.event.Timer.once(this.__jh,this,0);}
;}
,__gT:function(){var bz=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Mouse);bz.preventNextClick();}
},destruct:function(){this.__iW=this.__iV=this.__ge=this.__a=this.__iX=this.__iY=this.__ja=this.__d=null;}
,defer:function(bA){if(!qx.event.handler.MouseEmulation.ON){qx.event.Registration.addHandler(bA);}
;}
});}
)();
(function(){var a="qx.event.type.Drag";qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c){qx.event.type.Event.prototype.init.call(this,true,b);if(c){this._native=c.getNativeEvent()||null;this._originalTarget=c.getTarget()||null;}
else {this._native=null;this._originalTarget=null;}
;return this;}
,clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);e._native=this._native;return e;}
,getDocumentLeft:function(){if(this._native==null){return 0;}
;if(this._native.pageX!==undefined){return this._native.pageX;}
else {var f=qx.dom.Node.getWindow(this._native.srcElement);return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);}
;}
,getDocumentTop:function(){if(this._native==null){return 0;}
;if(this._native.pageY!==undefined){return this._native.pageY;}
else {var g=qx.dom.Node.getWindow(this._native.srcElement);return this._native.clientY+qx.bom.Viewport.getScrollTop(g);}
;}
,getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);}
,addType:function(h){this.getManager().addType(h);}
,addAction:function(i){this.getManager().addAction(i);}
,supportsType:function(j){return this.getManager().supportsType(j);}
,supportsAction:function(k){return this.getManager().supportsAction(k);}
,addData:function(l,m){this.getManager().addData(l,m);}
,getData:function(n){return this.getManager().getData(n);}
,getCurrentType:function(){return this.getManager().getCurrentType();}
,getCurrentAction:function(){return this.getManager().getCurrentAction();}
,stopSession:function(){this.getManager().clearSession();}
}});}
)();
(function(){var a="best-fit",b="placementRight",c="Boolean",d="bottom-right",e="' ",f="widget",g="placementLeft",h="qx.ui.core.MPlacement",i="left-top",j="Integer",k="left-middle",l="right-middle",m="top-center",n="[qx.ui.core.MPlacement.setMoveDirection()], the value was '",o="offsetRight",p="mouse",q="interval",r="keep-align",s="bottom-left",t="direct",u="shorthand",v="Invalid value for the parameter 'direction' ",w="offsetLeft",x="top-left",y="appear",z="offsetBottom",A="top",B="top-right",C="offsetTop",D="but 'top' or 'left' are allowed.",E="right-bottom",F="disappear",G="right-top",H="bottom-center",I="left-bottom",J="left";qx.Mixin.define(h,{statics:{__gq:null,__jn:J,setVisibleElement:function(K){this.__gq=K;}
,getVisibleElement:function(){return this.__gq;}
,setMoveDirection:function(L){if(L===A||L===J){this.__jn=L;}
else {throw new Error(v+n+L+e+D);}
;}
,getMoveDirection:function(){return this.__jn;}
},properties:{position:{check:[x,m,B,s,H,d,i,k,I,G,l,E],init:s,themeable:true},placeMethod:{check:[f,p],init:p,themeable:true},domMove:{check:c,init:false},placementModeX:{check:[t,r,a],init:r,themeable:true},placementModeY:{check:[t,r,a],init:r,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[C,o,z,w],mode:u,themeable:true}},members:{__jo:null,__jp:null,__jq:null,getLayoutLocation:function(N){var P,O,R,top;O=N.getBounds();if(!O){return null;}
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
,placeToWidget:function(bc,ba){if(ba){this.__jr();this.__jo=qx.lang.Function.bind(this.placeToWidget,this,bc,false);qx.event.Idle.getInstance().addListener(q,this.__jo);this.__jq=function(){this.__jr();}
;this.addListener(F,this.__jq,this);}
;var bb=bc.getContentLocation()||this.getLayoutLocation(bc);if(bb!=null){this.__jt(bb);return true;}
else {return false;}
;}
,__jr:function(){if(this.__jo){qx.event.Idle.getInstance().removeListener(q,this.__jo);this.__jo=null;}
;if(this.__jq){this.removeListener(F,this.__jq,this);this.__jq=null;}
;}
,placeToMouse:function(event){var be=Math.round(event.getDocumentLeft());var top=Math.round(event.getDocumentTop());var bd={left:be,top:top,right:be,bottom:top};this.__jt(bd);}
,placeToElement:function(bh,bf){var location=qx.bom.element.Location.get(bh);var bg={left:location.left,top:location.top,right:location.left+bh.offsetWidth,bottom:location.top+bh.offsetHeight};if(bf){this.__jo=qx.lang.Function.bind(this.placeToElement,this,bh,false);qx.event.Idle.getInstance().addListener(q,this.__jo);this.addListener(F,function(){if(this.__jo){qx.event.Idle.getInstance().removeListener(q,this.__jo);this.__jo=null;}
;}
,this);}
;this.__jt(bg);}
,placeToPoint:function(bj){var bi={left:bj.left,top:bj.top,right:bj.left,bottom:bj.top};this.__jt(bi);}
,_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};}
,__js:function(bk){var bl=null;if(this._computePlacementSize){var bl=this._computePlacementSize();}
else if(this.isVisible()){var bl=this.getBounds();}
;if(bl==null){this.addListenerOnce(y,function(){this.__js(bk);}
,this);}
else {bk.call(this,bl);}
;}
,__jt:function(bm){this.__js(function(bo){var bn=qx.util.placement.Placement.compute(bo,this.getLayoutParent().getBounds(),bm,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());this.removeState(g);this.removeState(b);this.addState(bm.left<bn.left?b:g);this.moveTo(bn.left,bn.top);}
);}
},destruct:function(){this.__jr();}
});}
)();
(function(){var a="Number",b="interval",c="_applyTimeoutInterval",d="qx.event.type.Event",e="qx.event.Idle",f="singleton";qx.Class.define(e,{extend:qx.core.Object,type:f,construct:function(){qx.core.Object.call(this);var g=new qx.event.Timer(this.getTimeoutInterval());g.addListener(b,this._onInterval,this);g.start();this.__ju=g;}
,events:{"interval":d},properties:{timeoutInterval:{check:a,init:100,apply:c}},members:{__ju:null,_applyTimeoutInterval:function(h){this.__ju.setInterval(h);}
,_onInterval:function(){this.fireEvent(b);}
},destruct:function(){if(this.__ju){this.__ju.stop();}
;this.__ju=null;}
});}
)();
(function(){var a="-",b="best-fit",c="size",d="edge-start",e="target.bottom",f="offsets",g="size.width",h="bottom",i="offsets.bottom",j="qx.util.placement.Placement",k="Please use '",l="qx.debug",m="keep-align",n="center",o="target.right",p="direct",q="offsets.right",r="middle",s="target",t="align-start",u="Invalid 'mode' argument!'",v="left",w="align-end",x="Class",y="offsets.left",z="top",A="area",B="right",C="edge-end",D="target.top",E='__jv',F="area.height",G="target.left",H="align-center",I="area.width",J="' instead!",K="size.height",L="offsets.top";qx.Class.define(j,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__jv=qx.util.placement.DirectAxis;}
,properties:{axisX:{check:x},axisY:{check:x},edge:{check:[z,B,h,v],init:z},align:{check:[z,B,h,v,n,r],init:B}},statics:{__jw:null,compute:function(W,P,M,N,V,Q,R){this.__jw=this.__jw||new qx.util.placement.Placement();var T=V.split(a);var S=T[0];var O=T[1];if(qx.core.Environment.get(l)){if(O===n||O===r){var U=r;if(S===z||S===h){U=n;}
;qx.core.Assert.assertEquals(U,O,k+S+a+U+J);}
;}
;this.__jw.set({axisX:this.__jA(Q),axisY:this.__jA(R),edge:S,align:O});return this.__jw.compute(W,P,M,N);}
,__jx:null,__jy:null,__jz:null,__jA:function(X){switch(X){case p:this.__jx=this.__jx||qx.util.placement.DirectAxis;return this.__jx;case m:this.__jy=this.__jy||qx.util.placement.KeepAlignAxis;return this.__jy;case b:this.__jz=this.__jz||qx.util.placement.BestFitAxis;return this.__jz;default:throw new Error(u);};}
},members:{__jv:null,compute:function(be,bb,Y,ba){if(qx.core.Environment.get(l)){this.assertObject(be,c);this.assertNumber(be.width,g);this.assertNumber(be.height,K);this.assertObject(bb,A);this.assertNumber(bb.width,I);this.assertNumber(bb.height,F);this.assertObject(Y,s);this.assertNumber(Y.top,D);this.assertNumber(Y.right,o);this.assertNumber(Y.bottom,e);this.assertNumber(Y.left,G);this.assertObject(ba,f);this.assertNumber(ba.top,L);this.assertNumber(ba.right,q);this.assertNumber(ba.bottom,i);this.assertNumber(ba.left,y);}
;var bc=this.getAxisX()||this.__jv;var bf=bc.computeStart(be.width,{start:Y.left,end:Y.right},{start:ba.left,end:ba.right},bb.width,this.__jB());var bd=this.getAxisY()||this.__jv;var top=bd.computeStart(be.height,{start:Y.top,end:Y.bottom},{start:ba.top,end:ba.bottom},bb.height,this.__jC());return {left:bf,top:top};}
,__jB:function(){var bh=this.getEdge();var bg=this.getAlign();if(bh==v){return d;}
else if(bh==B){return C;}
else if(bg==v){return t;}
else if(bg==n){return H;}
else if(bg==B){return w;}
;}
,__jC:function(){var bj=this.getEdge();var bi=this.getAlign();if(bj==z){return d;}
else if(bj==h){return C;}
else if(bi==z){return t;}
else if(bi==r){return H;}
else if(bi==h){return w;}
;}
},destruct:function(){this._disposeObjects(E);}
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
(function(){var a="backgroundColor",b="drag",c="_applyNativeContextMenu",d="div",f="_applyBackgroundColor",g="qx.event.type.Data",h="object",j="_applyFocusable",k=" requires a layout, but no one was defined!",m="qx.event.type.KeyInput",n="focused",o="disabled",p="move",q="createChildControl",r="Unsupported control: ",s="dragstart",t="Invalid left decorator inset detected: ",u="Font",v="qx.dynlocale",w="dragchange",x="Invalid layout data: ",y="Could not add widget to itself: ",z="_applyEnabled",A="_applySelectable",B="Number",C="_applyKeepActive",D="dragend",E="_applyVisibility",F="The 'before' widget is not a child of this widget!",G="Child control '",H="qxDraggable",I="syncAppearance",J='" while styling ',K="paddingLeft",L="' of widget ",M="qx.event.type.Mouse",N="Wrong 'left' argument. ",O="__jK",P="_applyPadding",Q="#",R="'Child' must be an instance of qx.ui.core.LayoutItem!",S="Remove Error: ",T="visible",U="qx.event.type.Event",V="qx.event.type.MouseWheel",W="_applyCursor",X="changeVisibility",Y="_applyDraggable",cX="resize",cY="Decorator",da="At least one child in control ",cT="zIndex",cU="changeTextColor",cV="$$widget",cW="changeContextMenu",df="on",dg="paddingTop",dh="opacity",di="__jH",db="This widget has no children!",dc="The 'after' widget is not a child of this widget!",dd="changeSelectable",de="Invalid top decorator inset detected: ",dm="none",dO="outline",eO="hidden",dn="Please use 'getContentElement' instead.",dj="_applyAppearance",dk=" returned an invalid size hint!",eK="hovered",dl="_applyOpacity",dp="Boolean",dq="px",dr="qx.ui.core.Widget",dw="default",dx="minHeight is larger than maxHeight!",dy="TabIndex property must be between 1 and 32000",ds="_applyFont",dt="cursor",du="qxDroppable",dv="__jD",dC="' already created!",dD="changeZIndex",dE=": ",dF="Color",dz="changeEnabled",dA="Please use 'getContentLocation' instead.",eL="Abstract method call: _getContentHeightForWidth()!",dB="changeFont",dJ="qx.event.type.Focus",dK="_applyDecorator",eN="_applyZIndex",dL="_applyTextColor",dG=' has no themeable property "',dH="Widget is not focusable!",eM="qx.ui.menu.Menu",dI="engine.name",dM="__jI",dN="qx.event.type.Drag",ea="Invalid right decorator inset detected: ",dY="Invalid widget to add: ",dX="qx.event.type.KeySequence",ee="excluded",ed="DOM element is not yet created!",ec="_applyToolTipText",eb="The layout of the widget",dS="Exception while creating child control '",dR="_applyDroppable",dQ=" is not a child of this widget!",dP="widget",dW="Wrong 'top' argument. ",dV="qxClass",dU="changeDecorator",dT="qx.event.type.Tap",em="Integer",ek="changeBackgroundColor",ej="_applyTabIndex",ei="Invalid bottom decorator inset detected: ",eq="changeAppearance",ep="qx.debug",eo="shorthand",en="/",eh="String",eg="border-box",ef="",eB="_applyContextMenu",eA="changeToolTipText",ez="padding",eF="tabIndex",eE="paddingBottom",eD="beforeContextmenuOpen",eC="changeNativeContextMenu",eu="undefined",et="qx.ui.tooltip.ToolTip",es="contextmenu",er="_applyKeepFocus",ey="paddingRight",ex="minWidth is larger than maxWidth!",ew="changeLocale",ev="qxKeepFocus",eJ="opera",eI="qx.event.type.Touch",eH="qxKeepActive",eG="absolute";qx.Class.define(dr,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);this.__jD=this.__jJ();this.initFocusable();this.initSelectable();this.initNativeContextMenu();}
,events:{appear:U,disappear:U,createChildControl:g,resize:g,move:g,syncAppearance:g,mousemove:M,mouseover:M,mouseout:M,mousedown:M,mouseup:M,click:M,dblclick:M,contextmenu:M,beforeContextmenuOpen:g,mousewheel:V,touchstart:eI,touchend:eI,touchmove:eI,touchcancel:eI,tap:dT,longtap:dT,swipe:eI,keyup:dX,keydown:dX,keypress:dX,keyinput:m,focus:dJ,blur:dJ,focusin:dJ,focusout:dJ,activate:dJ,deactivate:dJ,capture:U,losecapture:U,drop:dN,dragleave:dN,dragover:dN,drag:dN,dragstart:dN,dragend:dN,dragchange:dN,droprequest:dN},properties:{paddingTop:{check:em,init:0,apply:P,themeable:true},paddingRight:{check:em,init:0,apply:P,themeable:true},paddingBottom:{check:em,init:0,apply:P,themeable:true},paddingLeft:{check:em,init:0,apply:P,themeable:true},padding:{group:[dg,ey,eE,K],mode:eo,themeable:true},zIndex:{nullable:true,init:10,apply:eN,event:dD,check:em,themeable:true},decorator:{nullable:true,init:null,apply:dK,event:dU,check:cY,themeable:true},backgroundColor:{nullable:true,check:dF,apply:f,event:ek,themeable:true},textColor:{nullable:true,check:dF,apply:dL,event:cU,themeable:true,inheritable:true},font:{nullable:true,apply:ds,check:u,event:dB,themeable:true,inheritable:true,dereference:true},opacity:{check:B,apply:dl,themeable:true,nullable:true,init:null},cursor:{check:eh,apply:W,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:et,nullable:true},toolTipText:{check:eh,nullable:true,event:eA,apply:ec},toolTipIcon:{check:eh,nullable:true,event:eA},blockToolTip:{check:dp,init:false},visibility:{check:[T,eO,ee],init:T,apply:E,event:X},enabled:{init:true,check:dp,inheritable:true,apply:z,event:dz},anonymous:{init:false,check:dp},tabIndex:{check:em,nullable:true,apply:ej},focusable:{check:dp,init:false,apply:j},keepFocus:{check:dp,init:false,apply:er},keepActive:{check:dp,init:false,apply:C},draggable:{check:dp,init:false,apply:Y},droppable:{check:dp,init:false,apply:dR},selectable:{check:dp,init:false,event:dd,apply:A},contextMenu:{check:eM,apply:eB,nullable:true,event:cW},nativeContextMenu:{check:dp,init:false,themeable:true,event:eC,apply:c},appearance:{check:eh,init:dP,apply:dj,event:eq}},statics:{DEBUG:false,getWidgetByElement:function(eS,eQ){while(eS){var eP=eS.$$widget;if(eP!=null){var eR=qx.core.ObjectRegistry.fromHashCode(eP);if(!eQ||!eR.getAnonymous()){return eR;}
;}
;try{eS=eS.parentNode;}
catch(e){return null;}
;}
;return null;}
,contains:function(parent,eT){while(eT){if(parent==eT){return true;}
;eT=eT.getLayoutParent();}
;return false;}
,__jE:new qx.util.ObjectPool()},members:{__jD:null,__jF:null,__jG:null,__jH:null,_getLayout:function(){return this.__jH;}
,_setLayout:function(eU){if(qx.core.Environment.get(ep)){if(eU){this.assertInstance(eU,qx.ui.layout.Abstract);}
;}
;if(this.__jH){this.__jH.connectToWidget(null);}
;if(eU){eU.connectToWidget(this);}
;this.__jH=eU;qx.ui.core.queue.Layout.add(this);}
,setLayoutParent:function(parent){if(this.$$parent===parent){return;}
;var content=this.getContentElement();if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(content);}
;this.$$parent=parent||null;if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(content);}
;this.$$refreshInheritables();qx.ui.core.queue.Visibility.add(this);}
,_updateInsets:null,renderLayout:function(fc,top,eY,eW){var fd=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,fc,top,eY,eW);if(!fd){return null;}
;if(qx.lang.Object.isEmpty(fd)&&!this._updateInsets){return null;}
;var content=this.getContentElement();var fg=fd.size||this._updateInsets;var fe=dq;var eV={};if(fd.position){eV.left=fc+fe;eV.top=top+fe;}
;if(fg||fd.margin){eV.width=eY+fe;eV.height=eW+fe;}
;if(Object.keys(eV).length>0){content.setStyles(eV);}
;if(fg||fd.local||fd.margin){if(this.__jH&&this.hasLayoutChildren()){var fb=this.getInsets();var innerWidth=eY-fb.left-fb.right;var innerHeight=eW-fb.top-fb.bottom;var ff=this.getDecorator();var fa={left:0,right:0,top:0,bottom:0};if(ff){ff=qx.theme.manager.Decoration.getInstance().resolve(ff);fa=ff.getPadding();}
;var eX={top:this.getPaddingTop()+fa.top,right:this.getPaddingRight()+fa.right,bottom:this.getPaddingBottom()+fa.bottom,left:this.getPaddingLeft()+fa.left};this.__jH.renderLayout(innerWidth,innerHeight,eX);}
else if(this.hasLayoutChildren()){throw new Error(da+this._findTopControl()+k);}
;}
;if(fd.position&&this.hasListener(p)){this.fireDataEvent(p,this.getBounds());}
;if(fd.size&&this.hasListener(cX)){this.fireDataEvent(cX,this.getBounds());}
;delete this._updateInsets;return fd;}
,__jI:null,clearSeparators:function(){var fi=this.__jI;if(!fi){return;}
;var fj=qx.ui.core.Widget.__jE;var content=this.getContentElement();var fh;for(var i=0,l=fi.length;i<l;i++ ){fh=fi[i];fj.poolObject(fh);content.remove(fh.getContentElement());}
;fi.length=0;}
,renderSeparator:function(fl,fm){var fk=qx.ui.core.Widget.__jE.getObject(qx.ui.core.Widget);fk.set({decorator:fl});var fo=fk.getContentElement();this.getContentElement().add(fo);var fn=fo.getDomElement();if(fn){fn.style.top=fm.top+dq;fn.style.left=fm.left+dq;fn.style.width=fm.width+dq;fn.style.height=fm.height+dq;}
else {fo.setStyles({left:fm.left+dq,top:fm.top+dq,width:fm.width+dq,height:fm.height+dq});}
;if(!this.__jI){this.__jI=[];}
;this.__jI.push(fk);}
,_computeSizeHint:function(){var fv=this.getWidth();var fp=this.getMinWidth();var fq=this.getMaxWidth();var ft=this.getHeight();var fr=this.getMinHeight();var fs=this.getMaxHeight();if(qx.core.Environment.get(ep)){if(fp!==null&&fq!==null){this.assert(fp<=fq,ex);}
;if(fr!==null&&fs!==null){this.assert(fr<=fs,dx);}
;}
;var fw=this._getContentHint();var fu=this.getInsets();var fy=fu.left+fu.right;var fx=fu.top+fu.bottom;if(fv==null){fv=fw.width+fy;}
;if(ft==null){ft=fw.height+fx;}
;if(fp==null){fp=fy;if(fw.minWidth!=null){fp+=fw.minWidth;if(fp>fq&&fq!=null){fp=fq;}
;}
;}
;if(fr==null){fr=fx;if(fw.minHeight!=null){fr+=fw.minHeight;if(fr>fs&&fs!=null){fr=fs;}
;}
;}
;if(fq==null){if(fw.maxWidth==null){fq=Infinity;}
else {fq=fw.maxWidth+fy;if(fq<fp&&fp!=null){fq=fp;}
;}
;}
;if(fs==null){if(fw.maxHeight==null){fs=Infinity;}
else {fs=fw.maxHeight+fx;if(fs<fr&&fr!=null){fs=fr;}
;}
;}
;return {width:fv,minWidth:fp,maxWidth:fq,height:ft,minHeight:fr,maxHeight:fs};}
,invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);if(this.__jH){this.__jH.invalidateLayoutCache();}
;}
,_getContentHint:function(){var fA=this.__jH;if(fA){if(this.hasLayoutChildren()){var fB=fA.getSizeHint();if(qx.core.Environment.get(ep)){var fz=eb+this.toString()+dk;this.assertInteger(fB.width,N+fz);this.assertInteger(fB.height,dW+fz);}
;return fB;}
else {return {width:0,height:0};}
;}
else {return {width:100,height:50};}
;}
,_getHeightForWidth:function(fG){var fF=this.getInsets();var fC=fF.left+fF.right;var fI=fF.top+fF.bottom;var fH=fG-fC;var fD=this._getLayout();if(fD&&fD.hasHeightForWidth()){var fJ=fD.getHeightForWidth(fG);}
else {fJ=this._getContentHeightForWidth(fH);}
;var fE=fJ+fI;return fE;}
,_getContentHeightForWidth:function(fK){throw new Error(eL);}
,getInsets:function(){var top=this.getPaddingTop();var fL=this.getPaddingRight();var fM=this.getPaddingBottom();var fP=this.getPaddingLeft();if(this.getDecorator()){var fO=qx.theme.manager.Decoration.getInstance().resolve(this.getDecorator());var fN=fO.getInsets();if(qx.core.Environment.get(ep)){this.assertNumber(fN.top,de+fN.top);this.assertNumber(fN.right,ea+fN.right);this.assertNumber(fN.bottom,ei+fN.bottom);this.assertNumber(fN.left,t+fN.left);}
;top+=fN.top;fL+=fN.right;fM+=fN.bottom;fP+=fN.left;}
;return {"top":top,"right":fL,"bottom":fM,"left":fP};}
,getInnerSize:function(){var fR=this.getBounds();if(!fR){return null;}
;var fQ=this.getInsets();return {width:fR.width-fQ.left-fQ.right,height:fR.height-fQ.top-fQ.bottom};}
,fadeOut:function(fS){return this.getContentElement().fadeOut(fS);}
,fadeIn:function(fT){return this.getContentElement().fadeIn(fT);}
,show:function(){this.setVisibility(T);}
,hide:function(){this.setVisibility(eO);}
,exclude:function(){this.setVisibility(ee);}
,isVisible:function(){return this.getVisibility()===T;}
,isHidden:function(){return this.getVisibility()!==T;}
,isExcluded:function(){return this.getVisibility()===ee;}
,isSeeable:function(){qx.ui.core.queue.Manager.flush();var fU=this.getContentElement().getDomElement();if(fU){return fU.offsetWidth>0;}
;return false;}
,__jJ:function(){var fW=this._createContentElement();fW.setAttribute(cV,this.toHashCode());if(qx.core.Environment.get(ep)){fW.setAttribute(dV,this.classname);}
;var fV={"zIndex":10,"boxSizing":eg};if(!qx.ui.root.Inline||!(this instanceof qx.ui.root.Inline)){fV.position=eG;}
;fW.setStyles(fV);return fW;}
,_createContentElement:function(){return new qx.html.Element(d,{overflowX:eO,overflowY:eO});}
,getContainerElement:function(){if(qx.core.Environment.get(ep)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,dn);}
;return this.__jD;}
,getContentElement:function(){return this.__jD;}
,__jK:null,getLayoutChildren:function(){var fY=this.__jK;if(!fY){return this.__jL;}
;var ga;for(var i=0,l=fY.length;i<l;i++ ){var fX=fY[i];if(fX.hasUserBounds()||fX.isExcluded()){if(ga==null){ga=fY.concat();}
;qx.lang.Array.remove(ga,fX);}
;}
;return ga||fY;}
,scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);}
,invalidateLayoutChildren:function(){var gb=this.__jH;if(gb){gb.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);}
,hasLayoutChildren:function(){var gd=this.__jK;if(!gd){return false;}
;var gc;for(var i=0,l=gd.length;i<l;i++ ){gc=gd[i];if(!gc.hasUserBounds()&&!gc.isExcluded()){return true;}
;}
;return false;}
,getChildrenContainer:function(){return this;}
,__jL:[],_getChildren:function(){return this.__jK||this.__jL;}
,_indexOf:function(gf){var ge=this.__jK;if(!ge){return -1;}
;return ge.indexOf(gf);}
,_hasChildren:function(){var gg=this.__jK;return gg!=null&&(!!gg[0]);}
,addChildrenToQueue:function(gh){var gi=this.__jK;if(!gi){return;}
;var gj;for(var i=0,l=gi.length;i<l;i++ ){gj=gi[i];gh.push(gj);gj.addChildrenToQueue(gh);}
;}
,_add:function(gl,gk){if(qx.core.Environment.get(ep)){this.assertInstance(gl,qx.ui.core.LayoutItem.constructor,R);}
;if(gl.getLayoutParent()==this){qx.lang.Array.remove(this.__jK,gl);}
;if(this.__jK){this.__jK.push(gl);}
else {this.__jK=[gl];}
;this.__jM(gl,gk);}
,_addAt:function(gp,gm,go){if(!this.__jK){this.__jK=[];}
;if(gp.getLayoutParent()==this){qx.lang.Array.remove(this.__jK,gp);}
;var gn=this.__jK[gm];if(gn===gp){gp.setLayoutProperties(go);}
;if(gn){qx.lang.Array.insertBefore(this.__jK,gp,gn);}
else {this.__jK.push(gp);}
;this.__jM(gp,go);}
,_addBefore:function(gq,gs,gr){if(qx.core.Environment.get(ep)){this.assertInArray(gs,this._getChildren(),F);}
;if(gq==gs){return;}
;if(!this.__jK){this.__jK=[];}
;if(gq.getLayoutParent()==this){qx.lang.Array.remove(this.__jK,gq);}
;qx.lang.Array.insertBefore(this.__jK,gq,gs);this.__jM(gq,gr);}
,_addAfter:function(gv,gt,gu){if(qx.core.Environment.get(ep)){this.assertInArray(gt,this._getChildren(),dc);}
;if(gv==gt){return;}
;if(!this.__jK){this.__jK=[];}
;if(gv.getLayoutParent()==this){qx.lang.Array.remove(this.__jK,gv);}
;qx.lang.Array.insertAfter(this.__jK,gv,gt);this.__jM(gv,gu);}
,_remove:function(gw){if(!this.__jK){throw new Error(db);}
;qx.lang.Array.remove(this.__jK,gw);this.__jN(gw);}
,_removeAt:function(gx){if(!this.__jK){throw new Error(db);}
;var gy=this.__jK[gx];qx.lang.Array.removeAt(this.__jK,gx);this.__jN(gy);return gy;}
,_removeAll:function(){if(!this.__jK){return [];}
;var gz=this.__jK.concat();this.__jK.length=0;for(var i=gz.length-1;i>=0;i-- ){this.__jN(gz[i]);}
;qx.ui.core.queue.Layout.add(this);return gz;}
,_afterAddChild:null,_afterRemoveChild:null,__jM:function(gB,gA){if(qx.core.Environment.get(ep)){this.assertInstance(gB,qx.ui.core.LayoutItem,dY+gB);this.assertNotIdentical(gB,this,y+gB);if(gA!=null){this.assertType(gA,h,x+gA);}
;}
;var parent=gB.getLayoutParent();if(parent&&parent!=this){parent._remove(gB);}
;gB.setLayoutParent(this);if(gA){gB.setLayoutProperties(gA);}
else {this.updateLayoutProperties();}
;if(this._afterAddChild){this._afterAddChild(gB);}
;}
,__jN:function(gC){if(qx.core.Environment.get(ep)){this.assertNotUndefined(gC);}
;if(gC.getLayoutParent()!==this){throw new Error(S+gC+dQ);}
;gC.setLayoutParent(null);if(this.__jH){this.__jH.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);if(this._afterRemoveChild){this._afterRemoveChild(gC);}
;}
,capture:function(gD){this.getContentElement().capture(gD);}
,releaseCapture:function(){this.getContentElement().releaseCapture();}
,_applyPadding:function(gF,gE,name){this._updateInsets=true;qx.ui.core.queue.Layout.add(this);this.__jO(name,gF);}
,__jO:function(gG,gJ){var content=this.getContentElement();var gH=this.getDecorator();gH=qx.theme.manager.Decoration.getInstance().resolve(gH);if(gH){var gI=qx.Bootstrap.firstLow(gG.replace(ez,ef));gJ+=gH.getPadding()[gI]||0;}
;content.setStyle(gG,gJ+dq);}
,_applyDecorator:function(gL,gK){var content=this.getContentElement();if(gK){gK=qx.theme.manager.Decoration.getInstance().getCssClassName(gK);content.removeClass(gK);}
;if(gL){gL=qx.theme.manager.Decoration.getInstance().addCssClass(gL);content.addClass(gL);}
;}
,_applyToolTipText:function(gO,gN){if(qx.core.Environment.get(v)){if(this.__jG){return;}
;var gM=qx.locale.Manager.getInstance();this.__jG=gM.addListener(ew,function(){var gP=this.getToolTipText();if(gP&&gP.translate){this.setToolTipText(gP.translate());}
;}
,this);}
;}
,_applyTextColor:function(gR,gQ){}
,_applyZIndex:function(gT,gS){this.getContentElement().setStyle(cT,gT==null?0:gT);}
,_applyVisibility:function(gV,gU){var content=this.getContentElement();if(gV===T){content.show();}
else {content.hide();}
;var parent=this.$$parent;if(parent&&(gU==null||gV==null||gU===ee||gV===ee)){parent.invalidateLayoutChildren();}
;qx.ui.core.queue.Visibility.add(this);}
,_applyOpacity:function(gX,gW){this.getContentElement().setStyle(dh,gX==1?null:gX);}
,_applyCursor:function(ha,gY){if(ha==null&&!this.isSelectable()){ha=dw;}
;this.getContentElement().setStyle(dt,ha,qx.core.Environment.get(dI)==eJ);}
,_applyBackgroundColor:function(he,hd){var hc=this.getBackgroundColor();var content=this.getContentElement();var hb=qx.theme.manager.Color.getInstance().resolve(hc);content.setStyle(a,hb);}
,_applyFont:function(hg,hf){}
,_onChangeTheme:function(){qx.ui.core.LayoutItem.prototype._onChangeTheme.call(this);this.updateAppearance();var hh=this.getDecorator();this._applyDecorator(null,hh);this._applyDecorator(hh);hh=this.getFont();if(qx.lang.Type.isString(hh)){this._applyFont(hh,hh);}
;hh=this.getTextColor();if(qx.lang.Type.isString(hh)){this._applyTextColor(hh,hh);}
;hh=this.getBackgroundColor();if(qx.lang.Type.isString(hh)){this._applyBackgroundColor(hh,hh);}
;}
,__jP:null,$$stateChanges:null,_forwardStates:null,hasState:function(hj){var hi=this.__jP;return !!hi&&!!hi[hj];}
,addState:function(hn){var hm=this.__jP;if(!hm){hm=this.__jP={};}
;if(hm[hn]){return;}
;this.__jP[hn]=true;if(hn===eK){this.syncAppearance();}
else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var hl=this.__jS;if(forward&&forward[hn]&&hl){var hk;for(var ho in hl){hk=hl[ho];if(hk instanceof qx.ui.core.Widget){hl[ho].addState(hn);}
;}
;}
;}
,removeState:function(hs){var hr=this.__jP;if(!hr||!hr[hs]){return;}
;delete this.__jP[hs];if(hs===eK){this.syncAppearance();}
else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var hq=this.__jS;if(forward&&forward[hs]&&hq){for(var ht in hq){var hp=hq[ht];if(hp instanceof qx.ui.core.Widget){hp.removeState(hs);}
;}
;}
;}
,replaceState:function(hv,hy){var hx=this.__jP;if(!hx){hx=this.__jP={};}
;if(!hx[hy]){hx[hy]=true;}
;if(hx[hv]){delete hx[hv];}
;if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var hw=this.__jS;if(forward&&forward[hy]&&hw){for(var hz in hw){var hu=hw[hz];if(hu instanceof qx.ui.core.Widget){hu.replaceState(hv,hy);}
;}
;}
;}
,__jQ:null,__jR:null,syncAppearance:function(){var hE=this.__jP;var hD=this.__jQ;var hF=qx.theme.manager.Appearance.getInstance();var hB=qx.core.Property.$$method.setThemed;var hJ=qx.core.Property.$$method.resetThemed;if(this.__jR){delete this.__jR;if(hD){var hA=hF.styleFrom(hD,hE,null,this.getAppearance());hD=null;}
;}
;if(!hD){var hC=this;var hG=[];do {hG.push(hC.$$subcontrol||hC.getAppearance());}
while(hC=hC.$$subparent);hD=hG.reverse().join(en).replace(/#[0-9]+/g,ef);this.__jQ=hD;}
;var hI=hF.styleFrom(hD,hE,null,this.getAppearance());if(hI){if(hA){for(var hH in hA){if(hI[hH]===undefined){this[hJ[hH]]();}
;}
;}
;if(qx.core.Environment.get(ep)){for(var hH in hI){if(!this[hB[hH]]){throw new Error(this.classname+dG+hH+J+hD);}
;}
;}
;for(var hH in hI){hI[hH]===undefined?this[hJ[hH]]():this[hB[hH]](hI[hH]);}
;}
else if(hA){for(var hH in hA){this[hJ[hH]]();}
;}
;this.fireDataEvent(I,this.__jP);}
,_applyAppearance:function(hL,hK){this.updateAppearance();}
,checkAppearanceNeeds:function(){if(!this.__jF){qx.ui.core.queue.Appearance.add(this);this.__jF=true;}
else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);delete this.$$stateChanges;}
;}
,updateAppearance:function(){this.__jR=true;qx.ui.core.queue.Appearance.add(this);var hO=this.__jS;if(hO){var hM;for(var hN in hO){hM=hO[hN];if(hM instanceof qx.ui.core.Widget){hM.updateAppearance();}
;}
;}
;}
,syncWidget:function(hP){}
,getEventTarget:function(){var hQ=this;while(hQ.getAnonymous()){hQ=hQ.getLayoutParent();if(!hQ){return null;}
;}
;return hQ;}
,getFocusTarget:function(){var hR=this;if(!hR.getEnabled()){return null;}
;while(hR.getAnonymous()||!hR.getFocusable()){hR=hR.getLayoutParent();if(!hR||!hR.getEnabled()){return null;}
;}
;return hR;}
,getFocusElement:function(){return this.getContentElement();}
,isTabable:function(){return (!!this.getContentElement().getDomElement())&&this.isFocusable();}
,_applyFocusable:function(hU,hS){var hT=this.getFocusElement();if(hU){var hV=this.getTabIndex();if(hV==null){hV=1;}
;hT.setAttribute(eF,hV);hT.setStyle(dO,dm);}
else {if(hT.isNativelyFocusable()){hT.setAttribute(eF,-1);}
else if(hS){hT.setAttribute(eF,null);}
;}
;}
,_applyKeepFocus:function(hX){var hW=this.getFocusElement();hW.setAttribute(ev,hX?df:null);}
,_applyKeepActive:function(ia){var hY=this.getContentElement();hY.setAttribute(eH,ia?df:null);}
,_applyTabIndex:function(ib){if(ib==null){ib=1;}
else if(ib<1||ib>32000){throw new Error(dy);}
;if(this.getFocusable()&&ib!=null){this.getFocusElement().setAttribute(eF,ib);}
;}
,_applySelectable:function(ie,ic){if(ic!==null){this._applyCursor(this.getCursor());}
;this.getContentElement().setSelectable(ie);}
,_applyEnabled:function(ih,ig){if(ih===false){this.addState(o);this.removeState(eK);if(this.isFocusable()){this.removeState(n);this._applyFocusable(false,true);}
;if(this.isDraggable()){this._applyDraggable(false,true);}
;if(this.isDroppable()){this._applyDroppable(false,true);}
;}
else {this.removeState(o);if(this.isFocusable()){this._applyFocusable(true,false);}
;if(this.isDraggable()){this._applyDraggable(true,false);}
;if(this.isDroppable()){this._applyDroppable(true,false);}
;}
;}
,_applyNativeContextMenu:function(ij,ii,name){}
,_applyContextMenu:function(il,ik){if(ik){ik.removeState(es);if(ik.getOpener()==this){ik.resetOpener();}
;if(!il){this.removeListener(es,this._onContextMenuOpen);ik.removeListener(X,this._onBeforeContextMenuOpen,this);}
;}
;if(il){il.setOpener(this);il.addState(es);if(!ik){this.addListener(es,this._onContextMenuOpen);il.addListener(X,this._onBeforeContextMenuOpen,this);}
;}
;}
,_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);e.stop();}
,_onBeforeContextMenuOpen:function(e){if(e.getData()==T&&this.hasListener(eD)){this.fireDataEvent(eD,e);}
;}
,_onStopEvent:function(e){e.stopPropagation();}
,_getDragDropCursor:function(){return qx.ui.core.DragDropCursor.getInstance();}
,_applyDraggable:function(io,im){if(qx.event.handler.MouseEmulation.ON){return;}
;if(!this.isEnabled()&&io===true){io=false;}
;this._getDragDropCursor();if(io){this.addListener(s,this._onDragStart);this.addListener(b,this._onDrag);this.addListener(D,this._onDragEnd);this.addListener(w,this._onDragChange);}
else {this.removeListener(s,this._onDragStart);this.removeListener(b,this._onDrag);this.removeListener(D,this._onDragEnd);this.removeListener(w,this._onDragChange);}
;this.getContentElement().setAttribute(H,io?df:null);}
,_applyDroppable:function(iq,ip){if(!this.isEnabled()&&iq===true){iq=false;}
;this.getContentElement().setAttribute(du,iq?df:null);}
,_onDragStart:function(e){this._getDragDropCursor().placeToMouse(e);this.getApplicationRoot().setGlobalCursor(dw);}
,_onDrag:function(e){this._getDragDropCursor().placeToMouse(e);}
,_onDragEnd:function(e){this._getDragDropCursor().moveTo(-1000,-1000);this.getApplicationRoot().resetGlobalCursor();}
,_onDragChange:function(e){var ir=this._getDragDropCursor();var is=e.getCurrentAction();is?ir.setAction(is):ir.resetAction();}
,visualizeFocus:function(){this.addState(n);}
,visualizeBlur:function(){this.removeState(n);}
,scrollChildIntoView:function(ix,iw,iv,iu){iu=typeof iu==eu?true:iu;var it=qx.ui.core.queue.Layout;var parent;if(iu){iu=!it.isScheduled(ix);parent=ix.getLayoutParent();if(iu&&parent){iu=!it.isScheduled(parent);if(iu){parent.getChildren().forEach(function(iy){iu=iu&&!it.isScheduled(iy);}
);}
;}
;}
;this.scrollChildIntoViewX(ix,iw,iu);this.scrollChildIntoViewY(ix,iv,iu);}
,scrollChildIntoViewX:function(iB,iz,iA){this.getContentElement().scrollChildIntoViewX(iB.getContentElement(),iz,iA);}
,scrollChildIntoViewY:function(iE,iC,iD){this.getContentElement().scrollChildIntoViewY(iE.getContentElement(),iC,iD);}
,focus:function(){if(this.isFocusable()){this.getFocusElement().focus();}
else {throw new Error(dH);}
;}
,blur:function(){if(this.isFocusable()){this.getFocusElement().blur();}
else {throw new Error(dH);}
;}
,activate:function(){this.getContentElement().activate();}
,deactivate:function(){this.getContentElement().deactivate();}
,tabFocus:function(){this.getFocusElement().focus();}
,hasChildControl:function(iF){if(!this.__jS){return false;}
;return !!this.__jS[iF];}
,__jS:null,_getCreatedChildControls:function(){return this.__jS;}
,getChildControl:function(iI,iH){if(!this.__jS){if(iH){return null;}
;this.__jS={};}
;var iG=this.__jS[iI];if(iG){return iG;}
;if(iH===true){return null;}
;return this._createChildControl(iI);}
,_showChildControl:function(iK){var iJ=this.getChildControl(iK);iJ.show();return iJ;}
,_excludeChildControl:function(iM){var iL=this.getChildControl(iM,true);if(iL){iL.exclude();}
;}
,_isChildControlVisible:function(iO){var iN=this.getChildControl(iO,true);if(iN){return iN.isVisible();}
;return false;}
,_releaseChildControl:function(iS){var iP=this.getChildControl(iS,false);if(!iP){throw new Error(r+iS);}
;delete iP.$$subcontrol;delete iP.$$subparent;var iQ=this.__jP;var forward=this._forwardStates;if(iQ&&forward&&iP instanceof qx.ui.core.Widget){for(var iR in iQ){if(forward[iR]){iP.removeState(iR);}
;}
;}
;delete this.__jS[iS];return iP;}
,_createChildControl:function(iX){if(!this.__jS){this.__jS={};}
else if(this.__jS[iX]){throw new Error(G+iX+dC);}
;var iU=iX.indexOf(Q);try{if(iU==-1){var iT=this._createChildControlImpl(iX);}
else {var iT=this._createChildControlImpl(iX.substring(0,iU),iX.substring(iU+1,iX.length));}
;}
catch(iY){iY.message=dS+iX+L+this.toString()+dE+iY.message;throw iY;}
;if(!iT){throw new Error(r+iX);}
;iT.$$subcontrol=iX;iT.$$subparent=this;var iV=this.__jP;var forward=this._forwardStates;if(iV&&forward&&iT instanceof qx.ui.core.Widget){for(var iW in iV){if(forward[iW]){iT.addState(iW);}
;}
;}
;this.fireDataEvent(q,iT);return this.__jS[iX]=iT;}
,_createChildControlImpl:function(jb,ja){return null;}
,_disposeChildControls:function(){var jf=this.__jS;if(!jf){return;}
;var jd=qx.ui.core.Widget;for(var je in jf){var jc=jf[je];if(!jd.contains(this,jc)){jc.destroy();}
else {jc.dispose();}
;}
;delete this.__jS;}
,_findTopControl:function(){var jg=this;while(jg){if(!jg.$$subparent){return jg;}
;jg=jg.$$subparent;}
;return null;}
,getContainerLocation:function(jh){if(qx.core.Environment.get(ep)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,dA);}
;return this.getContentLocation(jh);}
,getContentLocation:function(jj){var ji=this.getContentElement().getDomElement();return ji?qx.bom.element.Location.get(ji,jj):null;}
,setDomLeft:function(jl){var jk=this.getContentElement().getDomElement();if(jk){jk.style.left=jl+dq;}
else {throw new Error(ed);}
;}
,setDomTop:function(jn){var jm=this.getContentElement().getDomElement();if(jm){jm.style.top=jn+dq;}
else {throw new Error(ed);}
;}
,setDomPosition:function(jp,top){var jo=this.getContentElement().getDomElement();if(jo){jo.style.left=jp+dq;jo.style.top=top+dq;}
else {throw new Error(ed);}
;}
,destroy:function(){if(this.$$disposed){return;}
;var parent=this.$$parent;if(parent){parent._remove(this);}
;qx.ui.core.queue.Dispose.add(this);}
,clone:function(){var jq=qx.ui.core.LayoutItem.prototype.clone.call(this);if(this.getChildren){var jr=this.getChildren();for(var i=0,l=jr.length;i<l;i++ ){jq.add(jr[i].clone());}
;}
;return jq;}
},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(v)){if(this.__jG){qx.locale.Manager.getInstance().removeListenerById(this.__jG);}
;}
;var js=this.getContentElement();if(js){js.setAttribute(cV,null,true);}
;this._disposeChildControls();qx.ui.core.queue.Appearance.remove(this);qx.ui.core.queue.Layout.remove(this);qx.ui.core.queue.Visibility.remove(this);qx.ui.core.queue.Widget.remove(this);}
;if(this.getContextMenu()){this.setContextMenu(null);}
;if(!qx.core.ObjectRegistry.inShutDown){this.clearSeparators();this.__jI=null;}
else {this._disposeArray(dM);}
;this._disposeArray(O);this.__jP=this.__jS=null;this._disposeObjects(di,dv);}
});}
)();
(function(){var a="blur",b="activate",c="focus",d="qx.ui.core.EventHandler";qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);this.__ge=qx.event.Registration.getManager(window);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,longtap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__ge:null,__jT:{focusin:1,focusout:1,focus:1,blur:1},__jU:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(f,e){return f instanceof qx.ui.core.Widget;}
,_dispatchEvent:function(h){var n=h.getTarget();var m=qx.ui.core.Widget.getWidgetByElement(n);var o=false;while(m&&m.isAnonymous()){var o=true;m=m.getLayoutParent();}
;if(m&&o&&h.getType()==b){m.getContentElement().activate();}
;if(this.__jT[h.getType()]){m=m&&m.getFocusTarget();if(!m){return;}
;}
;if(h.getRelatedTarget){var v=h.getRelatedTarget();var u=qx.ui.core.Widget.getWidgetByElement(v);while(u&&u.isAnonymous()){u=u.getLayoutParent();}
;if(u){if(this.__jT[h.getType()]){u=u.getFocusTarget();}
;if(u===m){return;}
;}
;}
;var q=h.getCurrentTarget();var s=qx.ui.core.Widget.getWidgetByElement(q);if(!s||s.isAnonymous()){return;}
;if(this.__jT[h.getType()]){s=s.getFocusTarget();}
;var t=h.getType();if(!s||!(s.isEnabled()||this.__jU[t])){return;}
;var g=h.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;var p=this.__ge.getListeners(s,t,g);if(!p||p.length===0){return;}
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
},destruct:function(){this.__ge=null;}
,defer:function(F){qx.event.Registration.addHandler(F);}
});}
)();
(function(){var a="Missing renderLayout() implementation!",b="abstract",c="Missing getHeightForWidth() implementation!",d="qx.debug",e="It is not possible to manually set the connected widget.",f="qx.ui.layout.Abstract";qx.Class.define(f,{type:b,extend:qx.core.Object,members:{__eV:null,_invalidChildrenCache:null,__lo:null,invalidateLayoutCache:function(){this.__eV=null;}
,renderLayout:function(h,i,g){this.warn(a);}
,getSizeHint:function(){if(this.__eV){return this.__eV;}
;return this.__eV=this._computeSizeHint();}
,hasHeightForWidth:function(){return false;}
,getHeightForWidth:function(j){this.warn(c);return null;}
,_computeSizeHint:function(){return null;}
,invalidateChildrenCache:function(){this._invalidChildrenCache=true;}
,verifyLayoutProperty:qx.core.Environment.select(d,{"true":function(k,name,l){}
,"false":null}),_clearSeparators:function(){var m=this.__lo;if(m instanceof qx.ui.core.LayoutItem){m.clearSeparators();}
;}
,_renderSeparator:function(n,o){this.__lo.renderSeparator(n,o);}
,connectToWidget:function(p){if(p&&this.__lo){throw new Error(e);}
;this.__lo=p;this.invalidateChildrenCache();}
,_getWidget:function(){return this.__lo;}
,_applyLayoutChange:function(){if(this.__lo){this.__lo.scheduleLayoutUpdate();}
;}
,_getLayoutChildren:function(){return this.__lo.getLayoutChildren();}
},destruct:function(){this.__lo=this.__eV=null;}
});}
)();
(function(){var a="qx.ui.core.queue.Visibility",b="visibility";qx.Class.define(a,{statics:{__dX:[],__cN:{},remove:function(c){delete this.__cN[c.$$hash];qx.lang.Array.remove(this.__dX,c);}
,isVisible:function(d){return this.__cN[d.$$hash]||false;}
,__jV:function(f){var h=this.__cN;var g=f.$$hash;var e;if(f.isExcluded()){e=false;}
else {var parent=f.$$parent;if(parent){e=this.__jV(parent);}
else {e=f.isRootWidget();}
;}
;return h[g]=e;}
,add:function(k){var j=this.__dX;if(qx.lang.Array.contains(j,k)){return;}
;j.unshift(k);qx.ui.core.queue.Manager.scheduleFlush(b);}
,flush:function(){var o=this.__dX;var p=this.__cN;for(var i=o.length-1;i>=0;i-- ){var n=o[i].$$hash;if(p[n]!=null){o[i].addChildrenToQueue(o);}
;}
;var l={};for(var i=o.length-1;i>=0;i-- ){var n=o[i].$$hash;l[n]=p[n];p[n]=null;}
;for(var i=o.length-1;i>=0;i-- ){var m=o[i];var n=m.$$hash;o.splice(i,1);if(p[n]==null){this.__jV(m);}
;if(p[n]&&p[n]!=l[n]){m.checkAppearanceNeeds();}
;}
;this.__dX=[];}
}});}
)();
(function(){var a=" due to exceptions in user code. The application has to be reloaded!",b="Error in the 'Appearance' queue:",c="Error in the 'Widget' queue:",d="\n",f="Error in the 'Layout' queue:",g="Error in the 'Visibility' queue:",h="qx.debug",i="useraction",j="qx.debug.ui.queue",k="Error while layout flush: ",l="Error in the 'Dispose' queue:",m="Stack trace: \n",n="event.touch",o="qx.ui.core.queue.Manager",p=" times in a row",q="Fatal Error: Flush terminated ";qx.Class.define(o,{statics:{__jW:false,__fS:false,__jX:{},__jY:0,MAX_RETRIES:10,scheduleFlush:function(r){var self=qx.ui.core.queue.Manager;self.__jX[r]=true;if(!self.__jW){self.__fS=false;qx.bom.AnimationFrame.request(function(){if(self.__fS){self.__fS=false;return;}
;self.flush();}
,self);self.__jW=true;}
;}
,flush:function(){var self=qx.ui.core.queue.Manager;if(self.__ka){return;}
;self.__ka=true;self.__fS=true;var s=self.__jX;self.__kb(function(){while(s.visibility||s.widget||s.appearance||s.layout||s.element){if(s.widget){delete s.widget;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Widget.flush();}
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
,function(){self.__jW=false;}
);self.__kb(function(){if(s.dispose){delete s.dispose;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Dispose.flush();}
catch(e){qx.log.Logger.error(l+e);}
;}
else {qx.ui.core.queue.Dispose.flush();}
;}
;}
,function(){self.__ka=false;}
);self.__jY=0;}
,__kb:qx.core.Environment.select(h,{"true":function(t,u){t();u();}
,"false":function(v,w){var self=qx.ui.core.queue.Manager;try{v();}
catch(e){if(qx.core.Environment.get(h)){qx.log.Logger.error(k+e+d+m+qx.dev.StackTrace.getStackTraceFromError(e));}
;self.__jW=false;self.__ka=false;self.__jY+=1;if(self.__jY<=self.MAX_RETRIES){self.scheduleFlush();}
else {throw new Error(q+(self.__jY-1)+p+a);}
;throw e;}
finally{w();}
;}
}),__kc:function(e){qx.ui.core.queue.Manager.flush();}
},defer:function(x){qx.html.Element._scheduleFlush=x.scheduleFlush;qx.event.Registration.addListener(window,i,qx.core.Environment.get(n)?x.__kc:x.flush);}
});}
)();
(function(){var a="qx.ui.core.queue.Widget",b="widget",c="$$default";qx.Class.define(a,{statics:{__dX:[],__jX:{},remove:function(e,g){var d=this.__dX;if(!qx.lang.Array.contains(d,e)){return;}
;var f=e.$$hash;if(g==null){qx.lang.Array.remove(d,e);delete this.__jX[f];return;}
;if(this.__jX[f]){delete this.__jX[f][g];if(qx.lang.Object.getLength(this.__jX[f])==0){qx.lang.Array.remove(d,e);}
;}
;}
,add:function(j,l){var h=this.__dX;if(!qx.lang.Array.contains(h,j)){h.unshift(j);}
;if(l==null){l=c;}
;var k=j.$$hash;if(!this.__jX[k]){this.__jX[k]={};}
;this.__jX[k][l]=true;qx.ui.core.queue.Manager.scheduleFlush(b);}
,flush:function(){var m=this.__dX;var n,o;for(var i=m.length-1;i>=0;i-- ){n=m[i];o=this.__jX[n.$$hash];m.splice(i,1);n.syncWidget(o);}
;if(m.length!=0){return;}
;this.__dX=[];this.__jX={};}
}});}
)();
(function(){var a="appearance",b="qx.ui.core.queue.Appearance";qx.Class.define(b,{statics:{__dX:[],remove:function(c){qx.lang.Array.remove(this.__dX,c);}
,add:function(e){var d=this.__dX;if(qx.lang.Array.contains(d,e)){return;}
;d.unshift(e);qx.ui.core.queue.Manager.scheduleFlush(a);}
,has:function(f){return qx.lang.Array.contains(this.__dX,f);}
,flush:function(){var j=qx.ui.core.queue.Visibility;var g=this.__dX;var h;for(var i=g.length-1;i>=0;i-- ){h=g[i];g.splice(i,1);if(j.isVisible(h)){h.syncAppearance();}
else {h.$$stateChanges=true;}
;}
;}
}});}
)();
(function(){var a="dispose",b="qx.ui.core.queue.Dispose";qx.Class.define(b,{statics:{__dX:[],add:function(d){var c=this.__dX;if(qx.lang.Array.contains(c,d)){return;}
;c.unshift(d);qx.ui.core.queue.Manager.scheduleFlush(a);}
,isEmpty:function(){return this.__dX.length==0;}
,flush:function(){var e=this.__dX;for(var i=e.length-1;i>=0;i-- ){var f=e[i];e.splice(i,1);f.dispose();}
;if(e.length!=0){return;}
;this.__dX=[];}
}});}
)();
(function(){var a='indexOf',b='slice',c='concat',d='toLocaleLowerCase',e="qx.type.BaseString",f="",g='trim',h='match',j="qx.debug",k='search',m='replace',n='toLowerCase',o='charCodeAt',p='split',q='substring',r='lastIndexOf',s='substr',t='toLocaleUpperCase',u='toUpperCase',v='charAt';qx.Class.define(e,{extend:Object,construct:function(w){var w=w||f;this.__kd=w;this.length=w.length;}
,members:{$$isString:true,length:0,__kd:null,toString:function(){return this.__kd;}
,charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);}
,toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(y,x){return qx.core.Object.prototype.base.apply(this,arguments);}
},defer:function(z,A){if(qx.core.Environment.get(j)){qx.Class.include(z,qx.core.MAssert);}
;var B=[v,o,c,a,r,h,m,k,b,p,s,q,n,u,d,t,g];A.valueOf=A.toString;if(new z(f).valueOf()==null){delete A.valueOf;}
;for(var i=0,l=B.length;i<l;i++ ){A[B[i]]=String.prototype[B[i]];}
;}
});}
)();
(function(){var a="qx.locale.LocalizedString";qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,d,c){qx.type.BaseString.call(this,b);this.__ke=d;this.__kf=c;}
,members:{__ke:null,__kf:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__ke,this.__kf);}
}});}
)();
(function(){var a="locale",b="_applyLocale",c="",d="changeLocale",e="_",f="Locale: ",g="C",h="locale.variant",j="qx.dynlocale",k=" not available.",l="qx.locale.Manager",m="String",n="singleton",o="qx.debug";qx.Class.define(l,{type:n,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__kg=qx.$$translations||{};this.__kh=qx.$$locales||{};var p=qx.core.Environment.get(a);var q=qx.core.Environment.get(h);if(q!==c){p+=e+q;}
;this.__ki=p;this.setLocale(p||this.__kj);}
,statics:{tr:function(s,t){var r=qx.lang.Array.fromArguments(arguments);r.splice(0,1);return qx.locale.Manager.getInstance().translate(s,r);}
,trn:function(v,y,u,x){var w=qx.lang.Array.fromArguments(arguments);w.splice(0,3);if(u!=1){return qx.locale.Manager.getInstance().translate(y,w);}
else {return qx.locale.Manager.getInstance().translate(v,w);}
;}
,trc:function(C,A,B){var z=qx.lang.Array.fromArguments(arguments);z.splice(0,2);return qx.locale.Manager.getInstance().translate(A,z);}
,marktr:function(D){return D;}
},properties:{locale:{check:m,nullable:true,apply:b,event:d}},members:{__kj:g,__kk:null,__kl:null,__kg:null,__kh:null,__ki:null,getLanguage:function(){return this.__kl;}
,getTerritory:function(){return this.getLocale().split(e)[1]||c;}
,getAvailableLocales:function(F){var G=[];for(var E in this.__kh){if(E!=this.__kj){if(this.__kh[E]===null&&!F){continue;}
;G.push(E);}
;}
;return G;}
,__km:function(H){var J;if(H==null){return null;}
;var I=H.indexOf(e);if(I==-1){J=H;}
else {J=H.substring(0,I);}
;return J;}
,_applyLocale:function(L,K){if(qx.core.Environment.get(o)){if(!(L in this.__kh||L==this.__ki)){qx.log.Logger.warn(f+L+k);}
;}
;this.__kk=L;this.__kl=this.__km(L);}
,addTranslation:function(M,P){var N=this.__kg;if(N[M]){for(var O in P){N[M][O]=P[O];}
;}
else {N[M]=P;}
;}
,addLocale:function(T,R){var Q=this.__kh;if(Q[T]){for(var S in R){Q[T][S]=R[S];}
;}
else {Q[T]=R;}
;}
,translate:function(X,W,U){var V=this.__kg;return this.__kn(V,X,W,U);}
,localize:function(bc,bb,Y){var ba=this.__kh;return this.__kn(ba,bc,bb,Y);}
,__kn:function(bh,bi,bf,bg){if(qx.core.Environment.get(o)){this.assertObject(bh);this.assertString(bi);this.assertArray(bf);}
;var bd;if(!bh){return bi;}
;if(bg){var be=this.__km(bg);}
else {bg=this.__kk;be=this.__kl;}
;if(!bd&&bh[bg]){bd=bh[bg][bi];}
;if(!bd&&bh[be]){bd=bh[be][bi];}
;if(!bd&&bh[this.__kj]){bd=bh[this.__kj][bi];}
;if(!bd){bd=bi;}
;if(bf.length>0){var bj=[];for(var i=0;i<bf.length;i++ ){var bk=bf[i];if(bk&&bk.translate){bj[i]=bk.translate();}
else {bj[i]=bk;}
;}
;bd=qx.lang.String.format(bd,bj);}
;if(qx.core.Environment.get(j)){bd=new qx.locale.LocalizedString(bd,bi,bf);}
;return bd;}
},destruct:function(){this.__kg=this.__kh=null;}
});}
)();
(function(){var a="qx.bom.client.Locale",b="-",c="locale",d="",e="android",f="locale.variant";qx.Bootstrap.define(a,{statics:{getLocale:function(){var g=qx.bom.client.Locale.__ko();var h=g.indexOf(b);if(h!=-1){g=g.substr(0,h);}
;return g;}
,getVariant:function(){var i=qx.bom.client.Locale.__ko();var k=d;var j=i.indexOf(b);if(j!=-1){k=i.substr(j+1);}
;return k;}
,__ko:function(){var l=(navigator.userLanguage||navigator.language||d);if(qx.bom.client.OperatingSystem.getName()==e){var m=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);if(m){l=m[0];}
;}
;return l.toLowerCase();}
},defer:function(n){qx.core.Environment.add(c,n.getLocale);qx.core.Environment.add(f,n.getVariant);}
});}
)();
(function(){var a="Image could not be loaded: ",b="Boolean",c="px",d="http",e=".png",f="background-image",g="engine.version",h="scale",i="changeSource",j="div",k="__kp",l="nonScaled",m="qx.ui.basic.Image",n="loaded",o="0 0",p=", no-repeat",q="qx.debug",r="replacement",s="backgroundImage",t="backgroundRepeat",u="-disabled.$1",v="class",w="qx.event.type.Event",x="loadingFailed",y="css.alphaimageloaderneeded",z="String",A="browser.documentmode",B="backgroundPosition",C="border-box",D="left",E="_applySource",F="$$widget",G="data:image/",H="top",I="scaled",J=", ",K="image",L="mshtml",M="engine.name",N=", 0 0",O="_applyScale",P="try to load an unmanaged relative image: ",Q="position",R="img",S="no-repeat",T="background-position",U="hidden",V="alphaScaled",W=",",X="absolute";qx.Class.define(m,{extend:qx.ui.core.Widget,construct:function(Y){this.__kp={};qx.ui.core.Widget.call(this);if(Y){this.setSource(Y);}
;}
,properties:{source:{check:z,init:null,nullable:true,event:i,apply:E,themeable:true},scale:{check:b,init:false,themeable:true,apply:O},appearance:{refine:true,init:K},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:w,loaded:w},members:{__kq:null,__kr:null,__hg:null,__kp:null,__ks:null,__kt:null,_onChangeTheme:function(){qx.ui.core.Widget.prototype._onChangeTheme.call(this);this._styleSource();}
,getContentElement:function(){return this.__kx();}
,_createContentElement:function(){return this.__kx();}
,_getContentHint:function(){return {width:this.__kq||0,height:this.__kr||0};}
,_applyDecorator:function(bc,bb){qx.ui.core.Widget.prototype._applyDecorator.call(this,bc,bb);var bd=this.getSource();bd=qx.util.AliasManager.getInstance().resolve(bd);var ba=this.getContentElement();if(this.__kt){ba=ba.getChild(0);}
;this.__kD(ba,bd);}
,_applyPadding:function(bf,be,name){qx.ui.core.Widget.prototype._applyPadding.call(this,bf,be,name);var bg=this.getContentElement();if(this.__kt){bg.getChild(0).setStyles({top:this.getPaddingTop()||0,left:this.getPaddingLeft()||0});}
else {bg.setPadding(this.getPaddingLeft()||0,this.getPaddingTop()||0);}
;}
,renderLayout:function(bj,top,bh,bk){qx.ui.core.Widget.prototype.renderLayout.call(this,bj,top,bh,bk);var bi=this.getContentElement();if(this.__kt){bi.getChild(0).setStyles({width:bh-(this.getPaddingLeft()||0)-(this.getPaddingRight()||0),height:bk-(this.getPaddingTop()||0)-(this.getPaddingBottom()||0),top:this.getPaddingTop()||0,left:this.getPaddingLeft()||0});}
;}
,_applyEnabled:function(bm,bl){qx.ui.core.Widget.prototype._applyEnabled.call(this,bm,bl);if(this.getSource()){this._styleSource();}
;}
,_applySource:function(bn){this._styleSource();}
,_applyScale:function(bo){this._styleSource();}
,__ku:function(bp){this.__hg=bp;}
,__kv:function(){if(this.__hg==null){var br=this.getSource();var bq=false;if(br!=null){bq=qx.lang.String.endsWith(br,e);}
;if(this.getScale()&&bq&&qx.core.Environment.get(y)){this.__hg=V;}
else if(this.getScale()){this.__hg=I;}
else {this.__hg=l;}
;}
;return this.__hg;}
,__kw:function(bu){var bt;var bs;if(bu==V){bt=true;bs=j;}
else if(bu==l){bt=false;bs=j;}
else {bt=true;bs=R;}
;var bw=new qx.html.Image(bs);bw.setAttribute(F,this.toHashCode());bw.setScale(bt);bw.setStyles({"overflowX":U,"overflowY":U,"boxSizing":C});if(qx.core.Environment.get(y)){var bv=this.__kt=new qx.html.Element(j);bv.setAttribute(F,this.toHashCode());bv.setStyle(Q,X);bv.add(bw);return bv;}
;return bw;}
,__kx:function(){if(this.$$disposed){return null;}
;var bx=this.__kv();if(this.__kp[bx]==null){this.__kp[bx]=this.__kw(bx);}
;var by=this.__kp[bx];if(!this.__ks){this.__ks=by;}
;return by;}
,_styleSource:function(){var bz=qx.util.AliasManager.getInstance().resolve(this.getSource());var bC=this.getContentElement();if(this.__kt){bC=bC.getChild(0);}
;if(!bz){bC.resetSource();return;}
;this.__ky(bz);if((qx.core.Environment.get(M)==L)&&(parseInt(qx.core.Environment.get(g),10)<9||qx.core.Environment.get(A)<9)){var bA=this.getScale()?h:S;bC.tagNameHint=qx.bom.element.Decoration.getTagName(bA,bz);}
;var bB=this.__ks;if(this.__kt){bB=bB.getChild(0);}
;if(qx.util.ResourceManager.getInstance().has(bz)){this.__kA(bB,bz);}
else if(qx.io.ImageLoader.isLoaded(bz)){this.__kB(bB,bz);}
else {this.__kC(bB,bz);}
;}
,__ky:qx.core.Environment.select(M,{"mshtml":function(bE){var bF=qx.core.Environment.get(y);var bD=qx.lang.String.endsWith(bE,e);if(bF&&bD){if(this.getScale()&&this.__kv()!=V){this.__ku(V);}
else if(!this.getScale()&&this.__kv()!=l){this.__ku(l);}
;}
else {if(this.getScale()&&this.__kv()!=I){this.__ku(I);}
else if(!this.getScale()&&this.__kv()!=l){this.__ku(l);}
;}
;this.__kz(this.__kx());}
,"default":function(bG){if(this.getScale()&&this.__kv()!=I){this.__ku(I);}
else if(!this.getScale()&&this.__kv(l)){this.__ku(l);}
;this.__kz(this.__kx());}
}),__kz:function(bK){var bJ=this.__ks;if(bJ!=bK){if(bJ!=null){var bU=c;var bH={};var bP=this.getBounds();if(bP!=null){bH.width=bP.width+bU;bH.height=bP.height+bU;}
;var bQ=this.getInsets();bH.left=parseInt(bJ.getStyle(D)||bQ.left)+bU;bH.top=parseInt(bJ.getStyle(H)||bQ.top)+bU;bH.zIndex=10;var bN=this.__kt?bK.getChild(0):bK;bN.setStyles(bH,true);bN.setSelectable(this.getSelectable());var bR=bJ.getParent();if(bR){var bI=bR.getChildren().indexOf(bJ);bR.removeAt(bI);bR.addAt(bK,bI);}
;var bM=bN.getNodeName();bN.setSource(null);var bL=this.__kt?this.__ks.getChild(0):this.__ks;bN.tagNameHint=bM;bN.setAttribute(v,bL.getAttribute(v));qx.html.Element.flush();var bT=bL.getDomElement();var bS=bK.getDomElement();if(bT&&bS){var bO=bT.$$hash;bT.$$hash=bS.$$hash;bS.$$hash=bO;}
;this.__ks=bK;}
;}
;}
,__kA:function(bW,bY){var bX=qx.util.ResourceManager.getInstance();if(!this.getEnabled()){var bV=bY.replace(/\.([a-z]+)$/,u);if(bX.has(bV)){bY=bV;this.addState(r);}
else {this.removeState(r);}
;}
;if(bW.getSource()===bY){return;}
;this.__kD(bW,bY);this.__kF(bX.getImageWidth(bY),bX.getImageHeight(bY));}
,__kB:function(ca,ce){var cc=qx.io.ImageLoader;this.__kD(ca,ce);var cd=cc.getWidth(ce);var cb=cc.getHeight(ce);this.__kF(cd,cb);}
,__kC:function(cf,ci){var cj=qx.io.ImageLoader;if(qx.core.Environment.get(q)){var ch=ci.toLowerCase();var cg=qx.lang.String.startsWith;if(!cg(ch,d)&&!cg(ch,G)){var self=this.self(arguments);if(!self.__LD){self.__LD={};}
;if(!self.__LD[ci]){this.debug(P+ci);self.__LD[ci]=true;}
;}
;}
;if(!cj.isFailed(ci)){cj.load(ci,this.__kE,this);}
else {if(cf!=null){cf.resetSource();}
;}
;}
,__kD:function(ck,cp){if(ck.getNodeName()==j){var cs=qx.theme.manager.Decoration.getInstance().resolve(this.getDecorator());if(cs){var cq=(cs.getStartColor()&&cs.getEndColor());var co=cs.getBackgroundImage();if(cq||co){var cl=this.getScale()?h:S;var cm=qx.bom.element.Decoration.getAttributes(cp,cl);var cn=cs.getStyles(true);var cr={"backgroundImage":cm.style.backgroundImage,"backgroundPosition":(cm.style.backgroundPosition||o),"backgroundRepeat":(cm.style.backgroundRepeat||S)};if(co){cr[B]+=W+cn[T]||o;cr[t]+=J+cs.getBackgroundRepeat();}
;if(cq){cr[B]+=N;cr[t]+=p;}
;cr[s]+=W+cn[f];ck.setStyles(cr);return;}
;}
else {ck.setSource(null);}
;}
;ck.setSource(cp);}
,__kE:function(ct,cu){if(this.$$disposed===true){return;}
;if(ct!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;}
;if(cu.failed){this.warn(a+ct);this.fireEvent(x);}
else if(cu.aborted){return;}
else {this.fireEvent(n);}
;this._styleSource();}
,__kF:function(cv,cw){if(cv!==this.__kq||cw!==this.__kr){this.__kq=cv;this.__kr=cw;qx.ui.core.queue.Layout.add(this);}
;}
},destruct:function(){delete this.__ks;this._disposeMap(k);}
});}
)();
(function(){var a="source",b="engine.name",c="",d="mshtml",e="px",f="px ",g="no-repeat",h="backgroundImage",i="scale",j="webkit",k="div",l="qx.html.Image",m="qx/static/blank.gif",n="backgroundPosition";qx.Class.define(l,{extend:qx.html.Element,members:{__kG:null,__kH:null,tagNameHint:null,setPadding:function(o,p){this.__kH=o;this.__kG=p;if(this.getNodeName()==k){this.setStyle(n,o+f+p+e);}
;}
,_applyProperty:function(name,t){qx.html.Element.prototype._applyProperty.call(this,name,t);if(name===a){var s=this.getDomElement();var q=this.getAllStyles();if(this.getNodeName()==k&&this.getStyle(h)){q.backgroundRepeat=null;}
;var u=this._getProperty(a);var r=this._getProperty(i);var v=r?i:g;if(u!=null){u=u||null;q.paddingTop=this.__kG;q.paddingLeft=this.__kH;qx.bom.element.Decoration.update(s,u,v,q);}
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
(function(){var a="qx/icon",b="repeat",c="px",d=".png",f="crop",g="px ",h="background-image",i="scale",j="no-repeat",k="div",l="Potential clipped image candidate: ",m="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",n='<div style="',o="Please use 'qx.core.Environment.get(\"css.alphaimageloaderneeded\")' instead.",p="qx.debug",q="scale-x",r="css.alphaimageloaderneeded",s="repeat-y",t='<img src="',u="qx.bom.element.Decoration",v="Image modification not possible because elements could not be replaced at runtime anymore!",w="', sizingMethod='",x="'!",y="",z='"/>',A="png",B="ImageLoader: Not recognized format of external image '",C="')",D='"></div>',E="mshtml",F="engine.name",G='" style="',H="none",I="b64",J="img",K="webkit",L=" ",M="repeat-x",N="background-repeat",O="DXImageTransform.Microsoft.AlphaImageLoader",P="qx/static/blank.gif",Q="scale-y",R="absolute";qx.Class.define(u,{statics:{DEBUG:false,__kI:{},__kJ:qx.core.Environment.select(F,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__kK:{"scale-x":J,"scale-y":J,"scale":J,"repeat":k,"no-repeat":k,"repeat-x":k,"repeat-y":k},update:function(V,W,T,S){var X=this.getTagName(T,W);if(X!=V.tagName.toLowerCase()){throw new Error(v);}
;var U=this.getAttributes(W,T,S);if(X===J){V.src=U.src||qx.util.ResourceManager.getInstance().toUri(P);}
;if(V.style.backgroundPosition!=y&&U.style.backgroundPosition===undefined){U.style.backgroundPosition=null;}
;if(V.style.clip!=y&&U.style.clip===undefined){U.style.clip=null;}
;qx.bom.element.Style.setStyles(V,U.style);if(qx.core.Environment.get(r)){try{V.filters[O].apply();}
catch(e){}
;}
;}
,create:function(bc,ba,Y){var bd=this.getTagName(ba,bc);var bb=this.getAttributes(bc,ba,Y);var be=qx.bom.element.Style.compile(bb.style);if(bd===J){return t+bb.src+G+be+z;}
else {return n+be+D;}
;}
,getTagName:function(bh,bf){if(bf&&qx.core.Environment.get(r)&&this.__kJ[bh]&&qx.lang.String.endsWith(bf,d)){return k;}
;return this.__kK[bh];}
,getAttributes:function(bl,bj,bi){if(!bi){bi={};}
;if(!bi.position){bi.position=R;}
;if((qx.core.Environment.get(F)==E)){bi.fontSize=0;bi.lineHeight=0;}
else if((qx.core.Environment.get(F)==K)){bi.WebkitUserDrag=H;}
;var bk=qx.util.ResourceManager.getInstance().getImageFormat(bl)||qx.io.ImageLoader.getFormat(bl);if(qx.core.Environment.get(p)){if(bl!=null&&bk==null){qx.log.Logger.warn(B+bl+x);}
;}
;var bm;if(qx.core.Environment.get(r)&&this.__kJ[bj]&&bk===A){var bn=this.__kM(bl);this.__kL(bi,bn.width,bn.height);bm=this.processAlphaFix(bi,bj,bl);}
else {delete bi.clip;if(bj===i){bm=this.__kN(bi,bj,bl);}
else if(bj===q||bj===Q){bm=this.__kO(bi,bj,bl);}
else {bm=this.__kR(bi,bj,bl);}
;}
;return bm;}
,__kL:function(bp,bo,bq){if(bp.width==null&&bo!=null){bp.width=bo+c;}
;if(bp.height==null&&bq!=null){bp.height=bq+c;}
;}
,__kM:function(br){var bs=qx.util.ResourceManager.getInstance().getImageWidth(br)||qx.io.ImageLoader.getWidth(br);var bt=qx.util.ResourceManager.getInstance().getImageHeight(br)||qx.io.ImageLoader.getHeight(br);return {width:bs,height:bt};}
,processAlphaFix:function(bw,bx,bv){if(bx==b||bx==M||bx==s){return bw;}
;var by=bx==j?f:i;var bu=m+qx.util.ResourceManager.getInstance().toUri(bv)+w+by+C;bw.filter=bu;bw.backgroundImage=bw.backgroundRepeat=y;delete bw[h];delete bw[N];return {style:bw};}
,__kN:function(bA,bB,bz){var bC=qx.util.ResourceManager.getInstance().toUri(bz);var bD=this.__kM(bz);this.__kL(bA,bD.width,bD.height);return {src:bC,style:bA};}
,__kO:function(bE,bF,bH){var bG=qx.util.ResourceManager.getInstance();var bK=bG.getCombinedFormat(bH);var bM=this.__kM(bH);var bI;if(bK){var bL=bG.getData(bH);var bJ=bL[4];if(bK==I){bI=bG.toDataUri(bH);}
else {bI=bG.toUri(bJ);}
;if(bF===q){bE=this.__kP(bE,bL,bM.height);}
else {bE=this.__kQ(bE,bL,bM.width);}
;return {src:bI,style:bE};}
else {if(qx.core.Environment.get(p)){this.__kT(bH);}
;if(bF==q){bE.height=bM.height==null?null:bM.height+c;}
else if(bF==Q){bE.width=bM.width==null?null:bM.width+c;}
;bI=bG.toUri(bH);return {src:bI,style:bE};}
;}
,__kP:function(bN,bO,bQ){var bP=qx.util.ResourceManager.getInstance().getImageHeight(bO[4]);bN.clip={top:-bO[6],height:bQ};bN.height=bP+c;if(bN.top!=null){bN.top=(parseInt(bN.top,10)+bO[6])+c;}
else if(bN.bottom!=null){bN.bottom=(parseInt(bN.bottom,10)+bQ-bP-bO[6])+c;}
;return bN;}
,__kQ:function(bS,bT,bR){var bU=qx.util.ResourceManager.getInstance().getImageWidth(bT[4]);bS.clip={left:-bT[5],width:bR};bS.width=bU+c;if(bS.left!=null){bS.left=(parseInt(bS.left,10)+bT[5])+c;}
else if(bS.right!=null){bS.right=(parseInt(bS.right,10)+bR-bU-bT[5])+c;}
;return bS;}
,__kR:function(bV,bW,ca){var bY=qx.util.ResourceManager.getInstance();var bX=bY.getCombinedFormat(ca);var ci=this.__kM(ca);if(bX&&bW!==b){var ch=bY.getData(ca);var cf=ch[4];if(bX==I){var cc=bY.toDataUri(ca);var cb=0;var cd=0;}
else {var cc=bY.toUri(cf);var cb=ch[5];var cd=ch[6];if(bV.paddingTop||bV.paddingLeft||bV.paddingRight||bV.paddingBottom){var top=bV.paddingTop||0;var cj=bV.paddingLeft||0;cb+=bV.paddingLeft||0;cd+=bV.paddingTop||0;bV.clip={left:cj,top:top,width:ci.width,height:ci.height};}
;}
;var ce=qx.bom.element.Background.getStyles(cc,bW,cb,cd);for(var cg in ce){bV[cg]=ce[cg];}
;if(ci.width!=null&&bV.width==null&&(bW==s||bW===j)){bV.width=ci.width+c;}
;if(ci.height!=null&&bV.height==null&&(bW==M||bW===j)){bV.height=ci.height+c;}
;return {style:bV};}
else {var top=bV.paddingTop||0;var cj=bV.paddingLeft||0;bV.backgroundPosition=cj+g+top+c;if(qx.core.Environment.get(p)){if(bW!==b){this.__kT(ca);}
;}
;this.__kL(bV,ci.width,ci.height);this.__kS(bV,ca,bW);return {style:bV};}
;}
,__kS:function(ck,cn,cl){var top=null;var cq=null;if(ck.backgroundPosition){var cm=ck.backgroundPosition.split(L);cq=parseInt(cm[0],10);if(isNaN(cq)){cq=cm[0];}
;top=parseInt(cm[1],10);if(isNaN(top)){top=cm[1];}
;}
;var co=qx.bom.element.Background.getStyles(cn,cl,cq,top);for(var cp in co){ck[cp]=co[cp];}
;if(ck.filter){ck.filter=y;}
;}
,__kT:function(cr){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(cr)&&cr.indexOf(a)==-1){if(!this.__kI[cr]){qx.log.Logger.debug(l+cr);this.__kI[cr]=true;}
;}
;}
,isAlphaImageLoaderEnabled:function(){if(qx.core.Environment.get(p)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);}
;return qx.core.Environment.get(r);}
}});}
)();
(function(){var a="load",b="html.image.naturaldimensions",c="qx.io.ImageLoader";qx.Bootstrap.define(c,{statics:{__cN:{},__kU:{width:null,height:null},__kV:/\.(png|gif|jpg|jpeg|bmp)\b/i,__kW:/^data:image\/(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__cN[d];return !!(e&&e.loaded);}
,isFailed:function(f){var g=this.__cN[f];return !!(g&&g.failed);}
,isLoading:function(h){var j=this.__cN[h];return !!(j&&j.loading);}
,getFormat:function(o){var n=this.__cN[o];if(!n||!n.format){var k=this.__kW.exec(o);if(k!=null){var m=(n&&qx.lang.Type.isNumber(n.width)?n.width:this.__kU.width);var p=(n&&qx.lang.Type.isNumber(n.height)?n.height:this.__kU.height);n={loaded:true,format:k[1],width:m,height:p};}
;}
;return n?n.format:null;}
,getSize:function(q){var r=this.__cN[q];return r?{width:r.width,height:r.height}:this.__kU;}
,getWidth:function(s){var t=this.__cN[s];return t?t.width:null;}
,getHeight:function(u){var v=this.__cN[u];return v?v.height:null;}
,load:function(y,x,z){var A=this.__cN[y];if(!A){A=this.__cN[y]={};}
;if(x&&!z){z=window;}
;if(A.loaded||A.loading||A.failed){if(x){if(A.loading){A.callbacks.push(x,z);}
else {x.call(z,y,A);}
;}
;}
else {A.loading=true;A.callbacks=[];if(x){A.callbacks.push(x,z);}
;var w=new Image();var B=qx.lang.Function.listener(this.__kX,this,w,y);w.onload=B;w.onerror=B;w.src=y;A.element=w;}
;}
,abort:function(C){var F=this.__cN[C];if(F&&!F.loaded){F.aborted=true;var E=F.callbacks;var D=F.element;D.onload=D.onerror=null;delete F.callbacks;delete F.element;delete F.loading;for(var i=0,l=E.length;i<l;i+=2){E[i].call(E[i+1],C,F);}
;}
;this.__cN[C]=null;}
,__kX:qx.event.GlobalError.observeMethod(function(event,H,G){var L=this.__cN[G];var I=function(M){return (M&&M.height!==0);}
;if(event.type===a&&I(H)){L.loaded=true;L.width=this.__kY(H);L.height=this.__la(H);var J=this.__kV.exec(G);if(J!=null){L.format=J[1];}
;}
else {L.failed=true;}
;H.onload=H.onerror=null;var K=L.callbacks;delete L.loading;delete L.callbacks;delete L.element;for(var i=0,l=K.length;i<l;i+=2){K[i].call(K[i+1],G,L);}
;}
),__kY:function(N){return qx.core.Environment.get(b)?N.naturalWidth:N.width;}
,__la:function(O){return qx.core.Environment.get(b)?O.naturalHeight:O.height;}
,dispose:function(){this.__cN={};}
}});}
)();
(function(){var a="')",b="gecko",c="background-image:url(",d="0",e=");",f="",g="px",h="number",i=")",j="background-repeat:",k="engine.version",l="data:",m=" ",n="qx.bom.element.Background",o=";",p="url(",q="background-position:",r="base64",s="url('",t="engine.name",u="'";qx.Class.define(n,{statics:{__lb:[c,null,e,q,null,o,j,null,o],__lc:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ld:function(z,top){var v=qx.core.Environment.get(t);var x=qx.core.Environment.get(k);if(v==b&&x<1.9&&z==top&&typeof z==h){top+=0.01;}
;if(z){var y=(typeof z==h)?z+g:z;}
else {y=d;}
;if(top){var w=(typeof top==h)?top+g:top;}
else {w=d;}
;return y+m+w;}
,__le:function(A){var String=qx.lang.String;var B=A.substr(0,50);return String.startsWith(B,l)&&String.contains(B,r);}
,compile:function(F,D,H,top){var G=this.__ld(H,top);var E=qx.util.ResourceManager.getInstance().toUri(F);if(this.__le(E)){E=u+E+u;}
;var C=this.__lb;C[1]=E;C[4]=G;C[7]=D;return C.join(f);}
,getStyles:function(L,J,N,top){if(!L){return this.__lc;}
;var M=this.__ld(N,top);var K=qx.util.ResourceManager.getInstance().toUri(L);var O;if(this.__le(K)){O=s+K+a;}
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
(function(){var a="offline",b="qx.event.handler.Offline",c="online";qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);this.__ge=d;this.__cx=d.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{online:true,offline:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__ge:null,__cx:null,__he:null,canHandleEvent:function(f,e){}
,registerEvent:function(i,h,g){}
,unregisterEvent:function(l,k,j){}
,_initObserver:function(){this.__he=qx.lang.Function.listener(this._onNative,this);qx.bom.Event.addNativeListener(this.__cx,a,this.__he);qx.bom.Event.addNativeListener(this.__cx,c,this.__he);}
,_stopObserver:function(){qx.bom.Event.removeNativeListener(this.__cx,a,this.__he);qx.bom.Event.removeNativeListener(this.__cx,c,this.__he);}
,_onNative:qx.event.GlobalError.observeMethod(function(m){qx.event.Registration.fireEvent(this.__cx,m.type,qx.event.type.Event,[]);}
),isOnline:function(){return !!this.__cx.navigator.onLine;}
},destruct:function(){this.__ge=null;this._stopObserver();delete qx.event.handler.Appear.__instances[this.$$hash];}
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
(function(){var a="mshtml",b="engine.name",c="blur",d="losecapture",e="focus",f="click",g="qx.event.dispatch.MouseCapture",h="capture",i="scroll";qx.Class.define(g,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);this.__cx=j.getWindow();this.__cz=k;j.addListener(this.__cx,c,this.releaseCapture,this);j.addListener(this.__cx,e,this.releaseCapture,this);j.addListener(this.__cx,i,this.releaseCapture,this);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cz:null,__lf:null,__lg:true,__cx:null,_getParent:function(l){return l.parentNode;}
,canDispatchEvent:function(n,event,m){return !!(this.__lf&&this.__lh[m]);}
,dispatchEvent:function(p,event,o){if(!qx.event.handler.MouseEmulation.ON){if(o==f){event.stopPropagation();this.releaseCapture();return;}
;}
;if(this.__lg||!qx.dom.Hierarchy.contains(this.__lf,p)){p=this.__lf;}
;qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,p,event,o);}
,__lh:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(r,q){var q=q!==false;if(this.__lf===r&&this.__lg==q){return;}
;if(this.__lf){this.releaseCapture();}
;this.nativeSetCapture(r,q);if(this.hasNativeCapture){var self=this;qx.bom.Event.addNativeListener(r,d,function(){qx.bom.Event.removeNativeListener(r,d,arguments.callee);self.releaseCapture();}
);}
;this.__lg=q;this.__lf=r;this.__cz.fireEvent(r,h,qx.event.type.Event,[true,false]);}
,getCaptureElement:function(){return this.__lf;}
,releaseCapture:function(){var s=this.__lf;if(!s){return;}
;this.__lf=null;this.__cz.fireEvent(s,d,qx.event.type.Event,[true,false]);this.nativeReleaseCapture(s);}
,hasNativeCapture:qx.core.Environment.get(b)==a,nativeSetCapture:qx.core.Environment.select(b,{"mshtml":function(u,t){u.setCapture(t!==false);}
,"default":(function(){}
)}),nativeReleaseCapture:qx.core.Environment.select(b,{"mshtml":function(v){v.releaseCapture();}
,"default":(function(){}
)})},destruct:function(){this.__lf=this.__cx=this.__cz=null;}
,defer:function(w){qx.event.Registration.addDispatcher(w);}
});}
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
,__li:{quicktime:{plugin:[k],control:f},wmv:{plugin:[t],control:J},divx:{plugin:[C],control:O},silverlight:{plugin:[c],control:D},pdf:{plugin:[r,g],control:K}},getQuicktimeVersion:function(){var T=qx.bom.client.Plugin.__li[B];return qx.bom.client.Plugin.__lj(T.control,T.plugin);}
,getWindowsMediaVersion:function(){var U=qx.bom.client.Plugin.__li[n];return qx.bom.client.Plugin.__lj(U.control,U.plugin);}
,getDivXVersion:function(){var V=qx.bom.client.Plugin.__li[s];return qx.bom.client.Plugin.__lj(V.control,V.plugin);}
,getSilverlightVersion:function(){var W=qx.bom.client.Plugin.__li[F];return qx.bom.client.Plugin.__lj(W.control,W.plugin);}
,getPdfVersion:function(){var X=qx.bom.client.Plugin.__li[m];return qx.bom.client.Plugin.__lj(X.control,X.plugin);}
,getQuicktime:function(){var Y=qx.bom.client.Plugin.__li[B];return qx.bom.client.Plugin.__lk(Y.control,Y.plugin);}
,getWindowsMedia:function(){var ba=qx.bom.client.Plugin.__li[n];return qx.bom.client.Plugin.__lk(ba.control,ba.plugin);}
,getDivX:function(){var bb=qx.bom.client.Plugin.__li[s];return qx.bom.client.Plugin.__lk(bb.control,bb.plugin);}
,getSilverlight:function(){var bc=qx.bom.client.Plugin.__li[F];return qx.bom.client.Plugin.__lk(bc.control,bc.plugin);}
,getPdf:function(){var bd=qx.bom.client.Plugin.__li[m];return qx.bom.client.Plugin.__lk(bd.control,bd.plugin);}
,__lj:function(bl,bh){var be=qx.bom.client.Plugin.__lk(bl,bh);if(!be){return u;}
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
,__lk:function(bq,bo){if(qx.bom.client.Engine.getName()==v){var bn=window.ActiveXObject;if(!bn){return false;}
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
(function(){var a="qx.event.type.Focus";qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(d,b,c){qx.event.type.Event.prototype.init.call(this,c,false);this._target=d;this._relatedTarget=b;return this;}
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
(function(){var a="blur",b="mousedown",c="qx.debug",d="qx.ui.popup.Manager",f="__ll",g="Object is no popup: ",h="singleton";qx.Class.define(d,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__ll=[];qx.event.Registration.addListener(document.documentElement,b,this.__ln,this,true);qx.bom.Element.addListener(window,a,this.hideAll,this);}
,members:{__ll:null,add:function(j){if(qx.core.Environment.get(c)){if(!(j instanceof qx.ui.popup.Popup)){throw new Error(g+j);}
;}
;this.__ll.push(j);this.__lm();}
,remove:function(k){if(qx.core.Environment.get(c)){if(!(k instanceof qx.ui.popup.Popup)){throw new Error(g+k);}
;}
;qx.lang.Array.remove(this.__ll,k);this.__lm();}
,hideAll:function(){var l=this.__ll.length,m={};while(l-- ){m=this.__ll[l];if(m.getAutoHide()){m.exclude();}
;}
;}
,__lm:function(){var n=1e7;for(var i=0;i<this.__ll.length;i++ ){this.__ll[i].setZIndex(n++ );}
;}
,__ln:function(e){var p=qx.ui.core.Widget.getWidgetByElement(e.getTarget());var q=this.__ll;for(var i=0;i<q.length;i++ ){var o=q[i];if(!o.getAutoHide()||p==o||qx.ui.core.Widget.contains(o,p)){continue;}
;o.exclude();}
;}
},destruct:function(){qx.event.Registration.removeListener(document.documentElement,b,this.__ln,this,true);this._disposeArray(f);}
});}
)();
(function(){var a="_applyRich",b="qx.ui.tooltip.ToolTip",c="_applyIcon",d="tooltip",f="qx.ui.core.Widget",g="mouseover",h="Boolean",i="arrow",j="left",k="right",l="_applyLabel",m="Integer",n="_applyArrowPosition",o="String",p="atom";qx.Class.define(b,{extend:qx.ui.popup.Popup,construct:function(q,r){qx.ui.popup.Popup.call(this);this.setLayout(new qx.ui.layout.HBox());this._createChildControl(i);this._createChildControl(p);if(q!=null){this.setLabel(q);}
;if(r!=null){this.setIcon(r);}
;this.addListener(g,this._onMouseOver,this);}
,properties:{appearance:{refine:true,init:d},showTimeout:{check:m,init:700,themeable:true},hideTimeout:{check:m,init:4000,themeable:true},label:{check:o,nullable:true,apply:l},icon:{check:o,nullable:true,apply:c,themeable:true},rich:{check:h,init:false,apply:a},opener:{check:f,nullable:true},arrowPosition:{check:[j,k],init:j,themeable:true,apply:n}},members:{_forwardStates:{placementLeft:true},_createChildControlImpl:function(u,t){var s;switch(u){case p:s=new qx.ui.basic.Atom();this._add(s,{flex:1});break;case i:s=new qx.ui.basic.Image();this._add(s);};return s||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,u);}
,_onMouseOver:function(e){}
,_applyIcon:function(w,v){var x=this.getChildControl(p);w==null?x.resetIcon():x.setIcon(w);}
,_applyLabel:function(z,y){var A=this.getChildControl(p);z==null?A.resetLabel():A.setLabel(z);}
,_applyRich:function(C,B){var D=this.getChildControl(p);D.setRich(C);}
,_applyArrowPosition:function(F,E){this._getLayout().setReversed(F==j);}
}});}
)();
(function(){var a="Decorator",b="middle",c="_applyLayoutChange",d="width",e="_applyReversed",f="qx.debug",g="bottom",h="' is not supported by the HBox layout!",j="center",k="Boolean",m="flex",n="top",o="left",p="right",q="Integer",r="The property '",s="qx.ui.layout.HBox";qx.Class.define(s,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);if(t){this.setSpacing(t);}
;if(u){this.setAlignX(u);}
;if(v){this.setSeparator(v);}
;}
,properties:{alignX:{check:[o,j,p],init:o,apply:c},alignY:{check:[n,b,g],init:n,apply:c},spacing:{check:q,init:0,apply:c},separator:{check:a,nullable:true,apply:c},reversed:{check:k,init:false,apply:e}},members:{__lp:null,__lq:null,__lr:null,__gA:null,_applyReversed:function(){this._invalidChildrenCache=true;this._applyLayoutChange();}
,__ls:function(){var B=this._getLayoutChildren();var length=B.length;var y=false;var w=this.__lp&&this.__lp.length!=length&&this.__lq&&this.__lp;var z;var x=w?this.__lp:new Array(length);var A=w?this.__lq:new Array(length);if(this.getReversed()){B=B.concat().reverse();}
;for(var i=0;i<length;i++ ){z=B[i].getLayoutProperties();if(z.width!=null){x[i]=parseFloat(z.width)/100;}
;if(z.flex!=null){A[i]=z.flex;y=true;}
else {A[i]=0;}
;}
;if(!w){this.__lp=x;this.__lq=A;}
;this.__lr=y;this.__gA=B;delete this._invalidChildrenCache;}
,verifyLayoutProperty:qx.core.Environment.select(f,{"true":function(C,name,D){this.assert(name===m||name===d,r+name+h);if(name==d){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);}
else {this.assertNumber(D);this.assert(D>=0);}
;}
,"false":null}),renderLayout:function(U,O,T){if(this._invalidChildrenCache){this.__ls();}
;var K=this.__gA;var length=K.length;var W=qx.ui.layout.Util;var S=this.getSpacing();var Y=this.getSeparator();if(Y){var H=W.computeHorizontalSeparatorGaps(K,S,Y);}
else {var H=W.computeHorizontalGaps(K,S,true);}
;var i,V,Q,P;var X=[];var L=H;for(i=0;i<length;i+=1){P=this.__lp[i];Q=P!=null?Math.floor((U-H)*P):K[i].getSizeHint().width;X.push(Q);L+=Q;}
;if(this.__lr&&L!=U){var N={};var R,F;for(i=0;i<length;i+=1){R=this.__lq[i];if(R>0){M=K[i].getSizeHint();N[i]={min:M.minWidth,value:X[i],max:M.maxWidth,flex:R};}
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
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ls();}
;var bs=qx.ui.layout.Util;var bf=this.__gA;var bk=0,bl=0,be=0;var bi=0,bj=0;var bp,bg,br;for(var i=0,l=bf.length;i<l;i+=1){bp=bf[i];bg=bp.getSizeHint();bl+=bg.width;var bo=this.__lq[i];var bh=this.__lp[i];if(bo){bk+=bg.minWidth;}
else if(bh){be=Math.max(be,Math.round(bg.minWidth/bh));}
else {bk+=bg.width;}
;br=bp.getMarginTop()+bp.getMarginBottom();if((bg.height+br)>bj){bj=bg.height+br;}
;if((bg.minHeight+br)>bi){bi=bg.minHeight+br;}
;}
;bk+=be;var bn=this.getSpacing();var bq=this.getSeparator();if(bq){var bm=bs.computeHorizontalSeparatorGaps(bf,bn,bq);}
else {var bm=bs.computeHorizontalGaps(bf,bn,true);}
;return {minWidth:bk+bm,width:bl+bm,minHeight:bi,height:bj};}
},destruct:function(){this.__lp=this.__lq=this.__gA=null;}
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
(function(){var a="os.name",b="_applyTextAlign",c="Boolean",d="qx.ui.core.Widget",f="nowrap",g="changeStatus",h="changeTextAlign",i="_applyWrap",j="changeValue",k="color",l="qx.ui.basic.Label",m="osx",n="css.textoverflow",o="qx.debug",p="textAlign",q="html.xul",r="_applyValue",s="center",t="Only rich labels support wrap.",u="_applyBuddy",v="enabled",w="String",x="toggleValue",y="whiteSpace",z="Only rich labels are selectable in browsers with Gecko engine!",A="function",B="qx.dynlocale",C="engine.version",D="right",E="gecko",F="justify",G="changeRich",H="normal",I="_applyRich",J="engine.name",K="click",L="label",M="changeLocale",N="left",O="A";qx.Class.define(l,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(P){qx.ui.core.Widget.call(this);if(P!=null){this.setValue(P);}
;if(qx.core.Environment.get(B)){qx.locale.Manager.getInstance().addListener(M,this._onChangeLocale,this);}
;}
,properties:{rich:{check:c,init:false,event:G,apply:I},wrap:{check:c,init:true,apply:i},value:{check:w,apply:r,event:j,nullable:true},buddy:{check:d,apply:u,nullable:true,init:null,dereference:true},textAlign:{check:[N,s,D,F],nullable:true,themeable:true,apply:b,event:h},appearance:{refine:true,init:L},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__lt:null,__lu:null,__lv:null,__lw:null,__lx:null,_getContentHint:function(){if(this.__lu){this.__ly=this.__lz();delete this.__lu;}
;return {width:this.__ly.width,height:this.__ly.height};}
,_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();}
,_applySelectable:function(Q){if(!qx.core.Environment.get(n)&&qx.core.Environment.get(q)){if(Q&&!this.isRich()){if(qx.core.Environment.get(o)){this.warn(z);}
;return;}
;}
;qx.ui.core.Widget.prototype._applySelectable.call(this,Q);}
,_getContentHeightForWidth:function(R){if(!this.getRich()&&!this.getWrap()){return null;}
;return this.__lz(R).height;}
,_createContentElement:function(){return new qx.html.Label;}
,_applyTextAlign:function(T,S){this.getContentElement().setStyle(p,T);}
,_applyTextColor:function(V,U){if(V){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(V));}
else {this.getContentElement().removeStyle(k);}
;}
,__ly:{width:0,height:0},_applyFont:function(Y,X){if(X&&this.__lt&&this.__lx){this.__lt.removeListenerById(this.__lx);this.__lx=null;}
;var W;if(Y){this.__lt=qx.theme.manager.Font.getInstance().resolve(Y);if(this.__lt instanceof qx.bom.webfonts.WebFont){this.__lx=this.__lt.addListener(g,this._onWebFontStatusChange,this);}
;W=this.__lt.getStyles();}
else {this.__lt=null;W=qx.bom.Font.getDefaultStyles();}
;if(this.getTextColor()!=null){delete W[k];}
;this.getContentElement().setStyles(W);this.__lu=true;qx.ui.core.queue.Layout.add(this);}
,__lz:function(bc){var bb=qx.bom.Label;var be=this.getFont();var ba=be?this.__lt.getStyles():qx.bom.Font.getDefaultStyles();var content=this.getValue()||O;var bd=this.getRich();if(this.__lx){this.__lA();}
;return bd?bb.getHtmlSize(content,ba,bc):bb.getTextSize(content,ba);}
,__lA:function(){if(!this.getContentElement()){return;}
;if(qx.core.Environment.get(a)==m&&qx.core.Environment.get(J)==E&&parseInt(qx.core.Environment.get(C),10)<16&&parseInt(qx.core.Environment.get(C),10)>9){var bf=this.getContentElement().getDomElement();if(bf){bf.innerHTML=bf.innerHTML;}
;}
;}
,_applyBuddy:function(bh,bg){if(bg!=null){bg.removeBinding(this.__lv);this.__lv=null;this.removeListenerById(this.__lw);this.__lw=null;}
;if(bh!=null){this.__lv=bh.bind(v,this,v);this.__lw=this.addListener(K,function(){if(bh.isFocusable()){bh.focus.apply(bh);}
;if(x in bh&&typeof bh.toggleValue===A){bh.toggleValue();}
;}
,this);}
;}
,_applyRich:function(bi){this.getContentElement().setRich(bi);this.__lu=true;qx.ui.core.queue.Layout.add(this);}
,_applyWrap:function(bl,bj){if(bl&&!this.isRich()){if(qx.core.Environment.get(o)){this.warn(t);}
;}
;if(this.isRich()){var bk=bl?H:f;this.getContentElement().setStyle(y,bk);}
;}
,_onChangeLocale:qx.core.Environment.select(B,{"true":function(e){var content=this.getValue();if(content&&content.translate){this.setValue(content.translate());}
;}
,"false":null}),_onWebFontStatusChange:function(bm){if(bm.getData().valid===true){this.__lu=true;qx.ui.core.queue.Layout.add(this);}
;}
,_applyValue:function(bo,bn){this.getContentElement().setValue(bo);this.__lu=true;qx.ui.core.queue.Layout.add(this);}
},destruct:function(){if(qx.core.Environment.get(B)){qx.locale.Manager.getInstance().removeListener(M,this._onChangeLocale,this);}
;if(this.__lv!=null){var bp=this.getBuddy();if(bp!=null&&!bp.isDisposed()){bp.removeBinding(this.__lv);}
;}
;if(this.__lt&&this.__lx){this.__lt.removeListenerById(this.__lx);}
;this.__lt=this.__lv=null;}
});}
)();
(function(){var a="value",b="qx.html.Label",c="The label mode cannot be modified after initial creation";qx.Class.define(b,{extend:qx.html.Element,members:{__lB:null,_applyProperty:function(name,d){qx.html.Element.prototype._applyProperty.call(this,name,d);if(name==a){var e=this.getDomElement();qx.bom.Label.setValue(e,d);}
;}
,_createDomElement:function(){var g=this.__lB;var f=qx.bom.Label.create(this._content,g);return f;}
,_copyData:function(h){return qx.html.Element.prototype._copyData.call(this,true);}
,setRich:function(i){var j=this.getDomElement();if(j){throw new Error(c);}
;i=!!i;if(this.__lB==i){return this;}
;this.__lB=i;return this;}
,setValue:function(k){this._setProperty(a,k);return this;}
,getValue:function(){return this._getProperty(a);}
}});}
)();
(function(){var a="text",b="px",c="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",d="crop",e="nowrap",f="gecko",g="end",h="div",i="browser.name",j="100%",k="auto",l="0",m="css.textoverflow",n="html.xul",o="chrome",p="value",q="visible",r="qx.bom.Label",s="safari",t="",u="ellipsis",v="browser.version",w="engine.version",x="normal",y="mshtml",z="engine.name",A="inherit",B="block",C="label",D="-1000px",E="hidden",F="absolute";qx.Bootstrap.define(r,{statics:{__lC:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__lD:function(){var G=this.__lF(false);document.body.insertBefore(G,document.body.firstChild);return this._textElement=G;}
,__lE:function(){var H=this.__lF(true);document.body.insertBefore(H,document.body.firstChild);return this._htmlElement=H;}
,__lF:function(K){var I=qx.dom.Element.create(h);var J=I.style;J.width=J.height=k;J.left=J.top=D;J.visibility=E;J.position=F;J.overflow=q;J.display=B;if(K){J.whiteSpace=x;}
else {J.whiteSpace=e;if(!qx.core.Environment.get(m)&&qx.core.Environment.get(n)){var L=document.createElementNS(c,C);var J=L.style;J.padding=l;J.margin=l;J.width=k;for(var M in this.__lC){J[M]=A;}
;I.appendChild(L);}
;}
;return I;}
,__lG:function(O){var N={};if(O){N.whiteSpace=x;}
else if(!qx.core.Environment.get(m)&&qx.core.Environment.get(n)){N.display=B;}
else {N.overflow=E;N.whiteSpace=e;N[qx.core.Environment.get(m)]=u;}
;return N;}
,create:function(content,S,R){if(!R){R=window;}
;var P=R.document.createElement(h);if(S){P.useHtml=true;}
else if(!qx.core.Environment.get(m)&&qx.core.Environment.get(n)){var T=R.document.createElementNS(c,C);var Q=T.style;Q.cursor=A;Q.color=A;Q.overflow=E;Q.maxWidth=j;Q.padding=l;Q.margin=l;Q.width=k;for(var U in this.__lC){T.style[U]=A;}
;T.setAttribute(d,g);P.appendChild(T);}
else {qx.bom.element.Style.setStyles(P,this.__lG(S));}
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
,getHtmlSize:function(content,Y,ba){var bb=this._htmlElement||this.__lE();bb.style.width=ba!=undefined?ba+b:k;bb.innerHTML=content;return this.__lH(bb,Y);}
,getTextSize:function(bd,bc){var be=this._textElement||this.__lD();if(!qx.core.Environment.get(m)&&qx.core.Environment.get(n)){be.firstChild.setAttribute(p,bd);}
else {qx.bom.element.Attribute.set(be,a,bd);}
;return this.__lH(be,bc);}
,__lH:function(bj,bf){var bg=this.__lC;if(!bf){bf={};}
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
(function(){var a="_applyActiveWindow",b="changeModal",c="changeVisibility",d="__lI",f="__ge",g="changeActive",h="qx.ui.window.MDesktop",i="qx.ui.window.Window";qx.Mixin.define(h,{properties:{activeWindow:{check:i,apply:a,init:null,nullable:true}},members:{__lI:null,__ge:null,getWindowManager:function(){if(!this.__ge){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());}
;return this.__ge;}
,supportsMaximize:function(){return true;}
,setWindowManager:function(j){if(this.__ge){this.__ge.setDesktop(null);}
;j.setDesktop(this);this.__ge=j;}
,_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());}
else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);}
;}
,_applyActiveWindow:function(l,k){this.getWindowManager().changeActiveWindow(l,k);this.getWindowManager().updateStack();}
,_onChangeModal:function(e){this.getWindowManager().updateStack();}
,_onChangeVisibility:function(){this.getWindowManager().updateStack();}
,_afterAddChild:function(m){if(qx.Class.isDefined(i)&&m instanceof qx.ui.window.Window){this._addWindow(m);}
;}
,_addWindow:function(n){if(!qx.lang.Array.contains(this.getWindows(),n)){this.getWindows().push(n);n.addListener(g,this._onChangeActive,this);n.addListener(b,this._onChangeModal,this);n.addListener(c,this._onChangeVisibility,this);}
;if(n.getActive()){this.setActiveWindow(n);}
;this.getWindowManager().updateStack();}
,_afterRemoveChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._removeWindow(o);}
;}
,_removeWindow:function(p){qx.lang.Array.remove(this.getWindows(),p);p.removeListener(g,this._onChangeActive,this);p.removeListener(b,this._onChangeModal,this);p.removeListener(c,this._onChangeVisibility,this);this.getWindowManager().updateStack();}
,getWindows:function(){if(!this.__lI){this.__lI=[];}
;return this.__lI;}
},destruct:function(){this._disposeArray(d);this._disposeObjects(f);}
});}
)();
(function(){var a="indexOf",b="addAfter",c="add",d="addBefore",e="_",f="addAt",g="hasChildren",h="removeAt",i="removeAll",j="getChildren",k="remove",l="qx.ui.core.MRemoteChildrenHandling";qx.Mixin.define(l,{members:{__lK:function(q,m,o,n){var p=this.getChildrenContainer();if(p===this){q=e+q;}
;return (p[q])(m,o,n);}
,getChildren:function(){return this.__lK(j);}
,hasChildren:function(){return this.__lK(g);}
,add:function(s,r){return this.__lK(c,s,r);}
,remove:function(t){return this.__lK(k,t);}
,removeAll:function(){return this.__lK(i);}
,indexOf:function(u){return this.__lK(a,u);}
,addAt:function(x,v,w){this.__lK(f,x,v,w);}
,addBefore:function(y,A,z){this.__lK(d,y,A,z);}
,addAfter:function(D,B,C){this.__lK(b,D,B,C);}
,removeAt:function(E){return this.__lK(h,E);}
}});}
)();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";qx.Mixin.define(a,{members:{setLayout:function(b){this.getChildrenContainer().setLayout(b);}
,getLayout:function(){return this.getChildrenContainer().getLayout();}
}});}
)();
(function(){var a="qx.ui.window.IWindowManager";qx.Interface.define(a,{members:{setDesktop:function(b){this.assertInterface(b,qx.ui.window.IDesktop);}
,changeActiveWindow:function(c,d){}
,updateStack:function(){}
,bringToFront:function(e){this.assertInstance(e,qx.ui.window.Window);}
,sendToBack:function(f){this.assertInstance(f,qx.ui.window.Window);}
}});}
)();
(function(){var a="qx.ui.window.IDesktop";qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);}
,getWindows:function(){}
,supportsMaximize:function(){}
,blockContent:function(c){this.assertInteger(c);}
,unblock:function(){}
,isBlocked:function(){}
}});}
)();
(function(){var a="__lJ",b="qx.ui.window.Manager";qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__lJ:null,setDesktop:function(c){this.__lJ=c;this.updateStack();}
,getDesktop:function(){return this.__lJ;}
,changeActiveWindow:function(d,e){if(d){this.bringToFront(d);d.setActive(true);}
;if(e){e.resetActive();}
;}
,_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);}
,syncWidget:function(){this.__lJ.forceUnblock();var h=this.__lJ.getWindows();var g=this._minZIndex;var m=g+h.length*2;var j=g+h.length*4;var k=null;for(var i=0,l=h.length;i<l;i++ ){var f=h[i];if(!f.isVisible()){continue;}
;k=k||f;if(f.isModal()){f.setZIndex(j);this.__lJ.blockContent(j-1);j+=2;k=f;}
else if(f.isAlwaysOnTop()){f.setZIndex(m);m+=2;}
else {f.setZIndex(g);g+=2;}
;if(!k.isModal()&&f.isActive()||f.getZIndex()>k.getZIndex()){k=f;}
;}
;this.__lJ.setActiveWindow(k);}
,bringToFront:function(o){var n=this.__lJ.getWindows();var p=qx.lang.Array.remove(n,o);if(p){n.push(o);this.updateStack();}
;}
,sendToBack:function(r){var q=this.__lJ.getWindows();var s=qx.lang.Array.remove(q,r);if(s){q.unshift(r);this.updateStack();}
;}
},destruct:function(){this._disposeObjects(a);}
});}
)();
(function(){var a="mouseup",b="mousedown",c="Boolean",d="losecapture",f="mousewheel",g="qx.ui.core.MMovable",h="__lL",i="The move handle could not be redefined!",j="__lM",k="mousemove",l="move",m="maximized",n="move-frame";qx.Mixin.define(g,{properties:{movable:{check:c,init:true},useMoveFrame:{check:c,init:false}},members:{__lL:null,__lM:null,__lN:null,__lO:null,__lP:null,__lQ:null,__lR:null,__lS:false,__lT:null,__lU:0,_activateMoveHandle:function(o){if(this.__lL){throw new Error(i);}
;this.__lL=o;o.addListener(b,this._onMoveMouseDown,this);o.addListener(a,this._onMoveMouseUp,this);o.addListener(k,this._onMoveMouseMove,this);o.addListener(d,this.__lY,this);if(qx.event.handler.MouseEmulation.ON){o.addListener(f,function(e){e.stopPropagation();}
,this);}
;}
,__lV:function(){var p=this.__lM;if(!p){p=this.__lM=new qx.ui.core.Widget();p.setAppearance(n);p.exclude();qx.core.Init.getApplication().getRoot().add(p);}
;return p;}
,__lW:function(){var location=this.getContentLocation();var r=this.getBounds();var q=this.__lV();q.setUserBounds(location.left,location.top,r.width,r.height);q.show();q.setZIndex(this.getZIndex()+1);}
,__lX:function(e){var t=this.__lN;var w=Math.max(t.left,Math.min(t.right,e.getDocumentLeft()));var s=Math.max(t.top,Math.min(t.bottom,e.getDocumentTop()));var u=this.__lO+w;var v=this.__lP+s;return {viewportLeft:parseInt(u,10),viewportTop:parseInt(v,10),parentLeft:parseInt(u-this.__lQ,10),parentTop:parseInt(v-this.__lR,10)};}
,_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(m)){return;}
;var parent=this.getLayoutParent();var x=parent.getContentLocation();var z=parent.getBounds();if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isBlocked()){this.__lT=parent.getBlockerColor();this.__lU=parent.getBlockerOpacity();parent.setBlockerColor(null);parent.setBlockerOpacity(1);parent.blockContent(this.getZIndex()-1);this.__lS=true;}
;}
;this.__lN={left:x.left,top:x.top,right:x.left+z.width,bottom:x.top+z.height};var y=this.getContentLocation();this.__lQ=x.left;this.__lR=x.top;this.__lO=y.left-e.getDocumentLeft();this.__lP=y.top-e.getDocumentTop();this.addState(l);this.__lL.capture();if(this.getUseMoveFrame()){this.__lW();}
;e.stop();}
,_onMoveMouseMove:function(e){if(!this.hasState(l)){return;}
;var B=this.__lX(e);if(this.getUseMoveFrame()){this.__lV().setDomPosition(B.viewportLeft,B.viewportTop);}
else {var A=this.getLayoutParent().getInsets();this.setDomPosition(B.parentLeft-(A.left||0),B.parentTop-(A.top||0));}
;e.stopPropagation();}
,_onMoveMouseUp:function(e){if(!this.hasState(l)){return;}
;this.removeState(l);var parent=this.getLayoutParent();if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__lS){parent.unblock();parent.setBlockerColor(this.__lT);parent.setBlockerOpacity(this.__lU);this.__lT=null;this.__lU=0;this.__lS=false;}
;}
;this.__lL.releaseCapture();var D=this.__lX(e);var C=this.getLayoutParent().getInsets();this.setLayoutProperties({left:D.parentLeft-(C.left||0),top:D.parentTop-(C.top||0)});if(this.getUseMoveFrame()){this.__lV().exclude();}
;e.stopPropagation();}
,__lY:function(e){if(!this.hasState(l)){return;}
;this.removeState(l);if(this.getUseMoveFrame()){this.__lV().exclude();}
;}
},destruct:function(){this._disposeObjects(j,h);this.__lN=null;}
});}
)();
(function(){var a="resetPaddingRight",b="setPaddingTop",c="_applyContentPadding",d="setPaddingBottom",e="resetThemed",f="contentPaddingRight",g="Integer",h="contentPaddingLeft",i="setThemedPaddingLeft",j="resetPaddingTop",k="shorthand",l="setThemedPaddingRight",m="setThemed",n="setPaddingRight",o="contentPaddingBottom",p="resetPaddingBottom",q="qx.ui.core.MContentPadding",r="resetPaddingLeft",s="setThemedPaddingTop",t="setPaddingLeft",u="setThemedPaddingBottom",v="contentPaddingTop";qx.Mixin.define(q,{properties:{contentPaddingTop:{check:g,init:0,apply:c,themeable:true},contentPaddingRight:{check:g,init:0,apply:c,themeable:true},contentPaddingBottom:{check:g,init:0,apply:c,themeable:true},contentPaddingLeft:{check:g,init:0,apply:c,themeable:true},contentPadding:{group:[v,f,o,h],mode:k,themeable:true}},members:{__ma:{contentPaddingTop:b,contentPaddingRight:n,contentPaddingBottom:d,contentPaddingLeft:t},__mb:{contentPaddingTop:s,contentPaddingRight:l,contentPaddingBottom:u,contentPaddingLeft:i},__mc:{contentPaddingTop:j,contentPaddingRight:a,contentPaddingBottom:p,contentPaddingLeft:r},_applyContentPadding:function(z,w,name,y){var A=this._getContentPaddingTarget();if(z==null){var x=this.__mc[name];A[x]();}
else {if(y==m||y==e){var B=this.__mb[name];A[B](z);}
else {var B=this.__ma[name];A[B](z);}
;}
;}
}});}
)();
(function(){var a="mousedown",b="Boolean",c="w-resize",d="sw-resize",f="n-resize",g="resizableRight",h="ne-resize",i="se-resize",j="Integer",k="e-resize",l="resizableLeft",m="mousemove",n="move",o="shorthand",p="maximized",q="resize",r="nw-resize",s="mouseout",t="qx.ui.core.MResizable",u="mouseup",v="losecapture",w="resize-frame",x="resizableBottom",y="s-resize",z="resizableTop";qx.Mixin.define(t,{construct:function(){var content=this.getContentElement();content.addListener(a,this.__mp,this,true);content.addListener(u,this.__mq,this);content.addListener(m,this.__ms,this);content.addListener(s,this.__mt,this);content.addListener(v,this.__mr,this);var A=content.getDomElement();if(A==null){A=window;}
;this.__md=qx.event.Registration.getManager(A).getHandler(qx.event.handler.DragDrop);}
,properties:{resizableTop:{check:b,init:true},resizableRight:{check:b,init:true},resizableBottom:{check:b,init:true},resizableLeft:{check:b,init:true},resizable:{group:[z,g,x,l],mode:o},resizeSensitivity:{check:j,init:5},useResizeFrame:{check:b,init:true}},members:{__md:null,__me:null,__mf:null,__mg:null,__mh:null,__mi:null,__mj:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,_getResizeFrame:function(){var B=this.__me;if(!B){B=this.__me=new qx.ui.core.Widget();B.setAppearance(w);B.exclude();qx.core.Init.getApplication().getRoot().add(B);}
;return B;}
,__mk:function(){var location=this.getContentLocation();var C=this._getResizeFrame();C.setUserBounds(location.left,location.top,location.right-location.left,location.bottom-location.top);C.show();C.setZIndex(this.getZIndex()+1);}
,__ml:function(e){var E=this.__mf;var D=this.getSizeHint();var H=this.__mj;var G=this.__mi;var I=G.width;var F=G.height;var K=G.left;var top=G.top;var J;if((E&this.RESIZE_TOP)||(E&this.RESIZE_BOTTOM)){J=Math.max(H.top,Math.min(H.bottom,e.getDocumentTop()))-this.__mh;if(E&this.RESIZE_TOP){F-=J;}
else {F+=J;}
;if(F<D.minHeight){F=D.minHeight;}
else if(F>D.maxHeight){F=D.maxHeight;}
;if(E&this.RESIZE_TOP){top+=G.height-F;}
;}
;if((E&this.RESIZE_LEFT)||(E&this.RESIZE_RIGHT)){J=Math.max(H.left,Math.min(H.right,e.getDocumentLeft()))-this.__mg;if(E&this.RESIZE_LEFT){I-=J;}
else {I+=J;}
;if(I<D.minWidth){I=D.minWidth;}
else if(I>D.maxWidth){I=D.maxWidth;}
;if(E&this.RESIZE_LEFT){K+=G.width-I;}
;}
;return {viewportLeft:K,viewportTop:top,parentLeft:G.bounds.left+K-G.left,parentTop:G.bounds.top+top-G.top,width:I,height:F};}
,__mm:{'1':f,'2':y,'4':c,'8':k,'5':r,'6':d,'9':h,'10':i},__mn:function(e){var location=this.getContentLocation();var N=this.getResizeSensitivity();var O=e.getDocumentLeft();var M=e.getDocumentTop();var L=this.__mo(location,O,M,N);if(L>0){L=L|this.__mo(location,O,M,N*2);}
;this.__mf=L;}
,__mo:function(location,S,R,P){var Q=0;if(this.getResizableTop()&&Math.abs(location.top-R)<P&&S>location.left-P&&S<location.right+P){Q+=this.RESIZE_TOP;}
else if(this.getResizableBottom()&&Math.abs(location.bottom-R)<P&&S>location.left-P&&S<location.right+P){Q+=this.RESIZE_BOTTOM;}
;if(this.getResizableLeft()&&Math.abs(location.left-S)<P&&R>location.top-P&&R<location.bottom+P){Q+=this.RESIZE_LEFT;}
else if(this.getResizableRight()&&Math.abs(location.right-S)<P&&R>location.top-P&&R<location.bottom+P){Q+=this.RESIZE_RIGHT;}
;return Q;}
,__mp:function(e){if(!this.__mf||!this.getEnabled()){return;}
;this.addState(q);this.__mg=e.getDocumentLeft();this.__mh=e.getDocumentTop();var location=this.getContentLocation();var U=this.getBounds();this.__mi={top:location.top,left:location.left,width:location.right-location.left,height:location.bottom-location.top,bounds:qx.lang.Object.clone(U)};var parent=this.getLayoutParent();var V=parent.getContentLocation();var T=parent.getBounds();this.__mj={left:V.left,top:V.top,right:V.left+T.width,bottom:V.top+T.height};if(this.getUseResizeFrame()){this.__mk();}
;this.capture();e.stop();}
,__mq:function(e){if(!this.hasState(q)||!this.getEnabled()){return;}
;if(this.getUseResizeFrame()){this._getResizeFrame().exclude();}
;var W=this.__ml(e);this.setWidth(W.width);this.setHeight(W.height);if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:W.parentLeft,top:W.parentTop});}
;this.__mf=0;this.removeState(q);this.resetCursor();this.getApplicationRoot().resetGlobalCursor();this.releaseCapture();e.stopPropagation();}
,__mr:function(e){if(!this.__mf){return;}
;this.resetCursor();this.getApplicationRoot().resetGlobalCursor();this.removeState(n);if(this.getUseResizeFrame()){this._getResizeFrame().exclude();}
;}
,__ms:function(e){if(!this.getEnabled()){return;}
;if(this.hasState(q)){var Y=this.__ml(e);if(this.getUseResizeFrame()){var X=this._getResizeFrame();X.setUserBounds(Y.viewportLeft,Y.viewportTop,Y.width,Y.height);}
else {this.setWidth(Y.width);this.setHeight(Y.height);if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:Y.parentLeft,top:Y.parentTop});}
;}
;e.stopPropagation();}
else if(!this.hasState(p)&&!this.__md.isSessionActive()){this.__mn(e);var bc=this.__mf;var bb=this.getApplicationRoot();if(bc){var ba=this.__mm[bc];this.setCursor(ba);bb.setGlobalCursor(ba);}
else if(this.getCursor()){this.resetCursor();bb.resetGlobalCursor();}
;}
;}
,__mt:function(e){if(this.getCursor()&&!this.hasState(q)){this.resetCursor();this.getApplicationRoot().resetGlobalCursor();}
;}
},destruct:function(){if(this.__me!=null&&!qx.core.ObjectRegistry.inShutDown){this.__me.destroy();this.__me=null;}
;this.__md=null;}
});}
)();
(function(){var a="beforeClose",b="beforeMinimize",c="mousedown",d="Boolean",f="window-resize-frame",g="changeStatus",h="changeIcon",i="excluded",j="_applyModal",k="execute",l="dblclick",m="statusbar",n="qx.debug",o="_applyActive",p="active",q="minimize-button",r="qx.event.type.Event",s="close-button",t="beforeRestore",u="qx.ui.window.IDesktop. All root widgets implement this interface.",v="captionbar",w="String",x="minimize",y="modal",z="changeModal",A="title",B="icon",C="showStatusbar",D="changeAlwaysOnTop",E="_applyShowStatusbar",F="maximized",G="_applyStatus",H="mshtml",I="qx.ui.window.Window",J="normal",K="Windows can only be added to widgets, which implement the interface ",L="changeCaption",M="engine.name",N="statusbar-text",O="focusout",P="beforeMaximize",Q="maximize",R="maximize-button",S="restore",T="window",U="pane",V="close",W="changeActive",X="restore-button",Y="_applyCaptionBarChange",bc="Centering depends on parent bounds!",bd="minimized";qx.Class.define(I,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(be,bf){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.VBox());this._createChildControl(v);this._createChildControl(U);if(bf!=null){this.setIcon(bf);}
;if(be!=null){this.setCaption(be);}
;this._updateCaptionBar();this.addListener(c,this._onWindowMouseDown,this,true);this.addListener(O,this._onWindowFocusOut,this);qx.core.Init.getApplication().getRoot().add(this);this.initVisibility();qx.ui.core.FocusHandler.getInstance().addRoot(this);this._getResizeFrame().setAppearance(f);}
,statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":r,"close":r,"beforeMinimize":r,"minimize":r,"beforeMaximize":r,"maximize":r,"beforeRestore":r,"restore":r},properties:{appearance:{refine:true,init:T},visibility:{refine:true,init:i},focusable:{refine:true,init:true},active:{check:d,init:false,apply:o,event:W},alwaysOnTop:{check:d,init:false,event:D},modal:{check:d,init:false,event:z,apply:j},caption:{apply:Y,event:L,nullable:true},icon:{check:w,nullable:true,apply:Y,event:h,themeable:true},status:{check:w,nullable:true,apply:G,event:g},showClose:{check:d,init:true,apply:Y,themeable:true},showMaximize:{check:d,init:true,apply:Y,themeable:true},showMinimize:{check:d,init:true,apply:Y,themeable:true},allowClose:{check:d,init:true,apply:Y},allowMaximize:{check:d,init:true,apply:Y},allowMinimize:{check:d,init:true,apply:Y},showStatusbar:{check:d,init:false,apply:E}},members:{__mu:null,__mv:null,getChildrenContainer:function(){return this.getChildControl(U);}
,_forwardStates:{active:true,maximized:true,showStatusbar:true,modal:true},setLayoutParent:function(parent){if(qx.core.Environment.get(n)){parent&&this.assertInterface(parent,qx.ui.window.IDesktop,K+u);}
;qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);}
,_createChildControlImpl:function(bk,bj){var bg;switch(bk){case m:bg=new qx.ui.container.Composite(new qx.ui.layout.HBox());this._add(bg);bg.add(this.getChildControl(N));break;case N:bg=new qx.ui.basic.Label();bg.setValue(this.getStatus());break;case U:bg=new qx.ui.container.Composite();this._add(bg,{flex:1});break;case v:var bh=new qx.ui.layout.Grid();bh.setRowFlex(0,1);bh.setColumnFlex(1,1);bg=new qx.ui.container.Composite(bh);this._add(bg);bg.addListener(l,this._onCaptionMouseDblClick,this);this._activateMoveHandle(bg);break;case B:bg=new qx.ui.basic.Image(this.getIcon());this.getChildControl(v).add(bg,{row:0,column:0});break;case A:bg=new qx.ui.basic.Label(this.getCaption());bg.setWidth(0);bg.setAllowGrowX(true);var bi=this.getChildControl(v);bi.add(bg,{row:0,column:1});break;case q:bg=new qx.ui.form.Button();bg.setFocusable(false);bg.addListener(k,this._onMinimizeButtonClick,this);this.getChildControl(v).add(bg,{row:0,column:2});break;case X:bg=new qx.ui.form.Button();bg.setFocusable(false);bg.addListener(k,this._onRestoreButtonClick,this);this.getChildControl(v).add(bg,{row:0,column:3});break;case R:bg=new qx.ui.form.Button();bg.setFocusable(false);bg.addListener(k,this._onMaximizeButtonClick,this);this.getChildControl(v).add(bg,{row:0,column:4});break;case s:bg=new qx.ui.form.Button();bg.setFocusable(false);bg.addListener(k,this._onCloseButtonClick,this);this.getChildControl(v).add(bg,{row:0,column:6});break;};return bg||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bk);}
,_updateCaptionBar:function(){var bm;var bn=this.getIcon();if(bn){this.getChildControl(B).setSource(bn);this._showChildControl(B);}
else {this._excludeChildControl(B);}
;var bl=this.getCaption();if(bl){this.getChildControl(A).setValue(bl);this._showChildControl(A);}
else {this._excludeChildControl(A);}
;if(this.getShowMinimize()){this._showChildControl(q);bm=this.getChildControl(q);this.getAllowMinimize()?bm.resetEnabled():bm.setEnabled(false);}
else {this._excludeChildControl(q);}
;if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(X);this._excludeChildControl(R);}
else {this._showChildControl(R);this._excludeChildControl(X);}
;bm=this.getChildControl(R);this.getAllowMaximize()?bm.resetEnabled():bm.setEnabled(false);}
else {this._excludeChildControl(R);this._excludeChildControl(X);}
;if(this.getShowClose()){this._showChildControl(s);bm=this.getChildControl(s);this.getAllowClose()?bm.resetEnabled():bm.setEnabled(false);}
else {this._excludeChildControl(s);}
;}
,close:function(){if(!this.isVisible()){return;}
;if(this.fireNonBubblingEvent(a,qx.event.type.Event,[false,true])){this.hide();this.fireEvent(V);}
;}
,open:function(){this.show();this.setActive(true);this.focus();}
,center:function(){var parent=this.getLayoutParent();if(parent){var bp=parent.getBounds();if(bp){var bq=this.getSizeHint();var bo=Math.round((bp.width-bq.width)/2);var top=Math.round((bp.height-bq.height)/2);if(top<0){top=0;}
;this.moveTo(bo,top);return;}
;}
;if(qx.core.Environment.get(n)){this.warn(bc);}
;}
,maximize:function(){if(this.isMaximized()){return;}
;var parent=this.getLayoutParent();if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(P,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();}
;var br=this.getLayoutProperties();this.__mv=br.left===undefined?0:br.left;this.__mu=br.top===undefined?0:br.top;this.setLayoutProperties({left:null,top:null,edge:0});this.addState(F);this._updateCaptionBar();this.fireEvent(Q);}
;}
;}
,minimize:function(){if(!this.isVisible()){return;}
;if(this.fireNonBubblingEvent(b,qx.event.type.Event,[false,true])){var bs=this.getLayoutProperties();this.__mv=bs.left===undefined?0:bs.left;this.__mu=bs.top===undefined?0:bs.top;this.removeState(F);this.hide();this.fireEvent(x);}
;}
,restore:function(){if(this.getMode()===J){return;}
;if(this.fireNonBubblingEvent(t,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();}
;var bt=this.__mv;var top=this.__mu;this.setLayoutProperties({edge:null,left:bt,top:top});this.removeState(F);this._updateCaptionBar();this.fireEvent(S);}
;}
,moveTo:function(bu,top){if(this.isMaximized()){return;}
;this.setLayoutProperties({left:bu,top:top});}
,isMaximized:function(){return this.hasState(F);}
,getMode:function(){if(!this.isVisible()){return bd;}
else {if(this.isMaximized()){return F;}
else {return J;}
;}
;}
,_applyActive:function(bw,bv){if(bv){this.removeState(p);}
else {this.addState(p);}
;}
,_applyModal:function(by,bx){if(bx){this.removeState(y);}
else {this.addState(y);}
;}
,_getContentPaddingTarget:function(){return this.getChildControl(U);}
,_applyShowStatusbar:function(bB,bz){var bA=this._getResizeFrame();if(bB){this.addState(C);bA.addState(C);}
else {this.removeState(C);bA.removeState(C);}
;if(bB){this._showChildControl(m);}
else {this._excludeChildControl(m);}
;}
,_applyCaptionBarChange:function(bD,bC){this._updateCaptionBar();}
,_applyStatus:function(bF,bE){var bG=this.getChildControl(N,true);if(bG){bG.setValue(bF);}
;}
,_applyFocusable:function(bI,bH){if(qx.core.Environment.get(M)!==H){qx.ui.core.Widget.prototype._applyFocusable.call(this,bI,bH);}
;}
,_onWindowEventStop:function(e){e.stopPropagation();}
,_onWindowMouseDown:function(e){this.setActive(true);}
,_onWindowFocusOut:function(e){if(this.getModal()){return;}
;var bJ=e.getRelatedTarget();if(bJ!=null&&!qx.ui.core.Widget.contains(this,bJ)){this.setActive(false);}
;}
,_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();}
;}
,_onMinimizeButtonClick:function(e){this.minimize();this.getChildControl(q).reset();}
,_onRestoreButtonClick:function(e){this.restore();this.getChildControl(X).reset();}
,_onMaximizeButtonClick:function(e){this.maximize();this.getChildControl(R).reset();}
,_onCloseButtonClick:function(e){this.close();this.getChildControl(s).reset();}
}});}
)();
(function(){var a="Decorator",b="_applyLayoutChange",c="center",d="_applyReversed",e="qx.debug",f="bottom",g="' is not supported by the VBox layout!",h="qx.ui.layout.VBox",j="flex",k="top",m="left",n="height",o="middle",p="Integer",q="The property '",r="right",s="Boolean";qx.Class.define(h,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);if(t){this.setSpacing(t);}
;if(u){this.setAlignY(u);}
;if(v){this.setSeparator(v);}
;}
,properties:{alignY:{check:[k,o,f],init:k,apply:b},alignX:{check:[m,c,r],init:m,apply:b},spacing:{check:p,init:0,apply:b},separator:{check:a,nullable:true,apply:b},reversed:{check:s,init:false,apply:d}},members:{__mw:null,__lq:null,__lr:null,__gA:null,_applyReversed:function(){this._invalidChildrenCache=true;this._applyLayoutChange();}
,__ls:function(){var B=this._getLayoutChildren();var length=B.length;var x=false;var w=this.__mw&&this.__mw.length!=length&&this.__lq&&this.__mw;var z;var y=w?this.__mw:new Array(length);var A=w?this.__lq:new Array(length);if(this.getReversed()){B=B.concat().reverse();}
;for(var i=0;i<length;i++ ){z=B[i].getLayoutProperties();if(z.height!=null){y[i]=parseFloat(z.height)/100;}
;if(z.flex!=null){A[i]=z.flex;x=true;}
else {A[i]=0;}
;}
;if(!w){this.__mw=y;this.__lq=A;}
;this.__lr=x;this.__gA=B;delete this._invalidChildrenCache;}
,verifyLayoutProperty:qx.core.Environment.select(e,{"true":function(C,name,D){this.assert(name===j||name===n,q+name+g);if(name==n){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);}
else {this.assertNumber(D);this.assert(D>=0);}
;}
,"false":null}),renderLayout:function(V,N,Y){if(this._invalidChildrenCache){this.__ls();}
;var K=this.__gA;var length=K.length;var U=qx.ui.layout.Util;var T=this.getSpacing();var bb=this.getSeparator();if(bb){var H=U.computeVerticalSeparatorGaps(K,T,bb);}
else {var H=U.computeVerticalGaps(K,T,true);}
;var i,ba,G,O;var P=[];var W=H;for(i=0;i<length;i+=1){O=this.__mw[i];G=O!=null?Math.floor((N-H)*O):K[i].getSizeHint().height;P.push(G);W+=G;}
;if(this.__lr&&W!=N){var M={};var S,F;for(i=0;i<length;i+=1){S=this.__lq[i];if(S>0){L=K[i].getSizeHint();M[i]={min:L.minHeight,value:P[i],max:L.maxHeight,flex:S};}
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
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ls();}
;var be=qx.ui.layout.Util;var bs=this.__gA;var bh=0,bi=0,bq=0;var bj=0,bk=0;var bo,bf,br;for(var i=0,l=bs.length;i<l;i+=1){bo=bs[i];bf=bo.getSizeHint();bi+=bf.height;var bn=this.__lq[i];var bg=this.__mw[i];if(bn){bh+=bf.minHeight;}
else if(bg){bq=Math.max(bq,Math.round(bf.minHeight/bg));}
else {bh+=bf.height;}
;br=bo.getMarginLeft()+bo.getMarginRight();if((bf.width+br)>bk){bk=bf.width+br;}
;if((bf.minWidth+br)>bj){bj=bf.minWidth+br;}
;}
;bh+=bq;var bm=this.getSpacing();var bp=this.getSeparator();if(bp){var bl=be.computeVerticalSeparatorGaps(bs,bm,bp);}
else {var bl=be.computeVerticalGaps(bs,bm,true);}
;return {minHeight:bh+bl,height:bi+bl,minWidth:bj,width:bk};}
},destruct:function(){this.__mw=this.__lq=this.__gA=null;}
});}
)();
(function(){var a="keypress",b="__mx",c="focusout",d="activate",f="Tab",g="singleton",h="deactivate",j="focusin",k="qx.ui.core.FocusHandler";qx.Class.define(k,{extend:qx.core.Object,type:g,construct:function(){qx.core.Object.call(this);this.__mx={};}
,members:{__mx:null,__my:null,__mz:null,__mA:null,connectTo:function(m){m.addListener(a,this.__ik,this);m.addListener(j,this._onFocusIn,this,true);m.addListener(c,this._onFocusOut,this,true);m.addListener(d,this._onActivate,this,true);m.addListener(h,this._onDeactivate,this,true);}
,addRoot:function(n){this.__mx[n.$$hash]=n;}
,removeRoot:function(o){delete this.__mx[o.$$hash];}
,getActiveWidget:function(){return this.__my;}
,isActive:function(p){return this.__my==p;}
,getFocusedWidget:function(){return this.__mz;}
,isFocused:function(q){return this.__mz==q;}
,isFocusRoot:function(r){return !!this.__mx[r.$$hash];}
,_onActivate:function(e){var t=e.getTarget();this.__my=t;var s=this.__mB(t);if(s!=this.__mA){this.__mA=s;}
;}
,_onDeactivate:function(e){var u=e.getTarget();if(this.__my==u){this.__my=null;}
;}
,_onFocusIn:function(e){var v=e.getTarget();if(v!=this.__mz){this.__mz=v;v.visualizeFocus();}
;}
,_onFocusOut:function(e){var w=e.getTarget();if(w==this.__mz){this.__mz=null;w.visualizeBlur();}
;}
,__ik:function(e){if(e.getKeyIdentifier()!=f){return;}
;if(!this.__mA){return;}
;e.stopPropagation();e.preventDefault();var x=this.__mz;if(!e.isShiftPressed()){var y=x?this.__mF(x):this.__mD();}
else {var y=x?this.__mG(x):this.__mE();}
;if(y){y.tabFocus();}
;}
,__mB:function(z){var A=this.__mx;while(z){if(A[z.$$hash]){return z;}
;z=z.getLayoutParent();}
;return null;}
,__mC:function(I,H){if(I===H){return 0;}
;var C=I.getTabIndex()||0;var B=H.getTabIndex()||0;if(C!=B){return C-B;}
;var J=I.getContentElement().getDomElement();var G=H.getContentElement().getDomElement();var F=qx.bom.element.Location;var E=F.get(J);var D=F.get(G);if(E.top!=D.top){return E.top-D.top;}
;if(E.left!=D.left){return E.left-D.left;}
;var K=I.getZIndex();var L=H.getZIndex();if(K!=L){return K-L;}
;return 0;}
,__mD:function(){return this.__mJ(this.__mA,null);}
,__mE:function(){return this.__mK(this.__mA,null);}
,__mF:function(M){var N=this.__mA;if(N==M){return this.__mD();}
;while(M&&M.getAnonymous()){M=M.getLayoutParent();}
;if(M==null){return [];}
;var O=[];this.__mH(N,M,O);O.sort(this.__mC);var P=O.length;return P>0?O[0]:this.__mD();}
,__mG:function(Q){var R=this.__mA;if(R==Q){return this.__mE();}
;while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();}
;if(Q==null){return [];}
;var S=[];this.__mI(R,Q,S);S.sort(this.__mC);var T=S.length;return T>0?S[T-1]:this.__mE();}
,__mH:function(parent,U,V){var X=parent.getLayoutChildren();var W;for(var i=0,l=X.length;i<l;i++ ){W=X[i];if(!(W instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(W)&&W.isEnabled()&&W.isVisible()){if(W.isTabable()&&this.__mC(U,W)<0){V.push(W);}
;this.__mH(W,U,V);}
;}
;}
,__mI:function(parent,Y,ba){var bc=parent.getLayoutChildren();var bb;for(var i=0,l=bc.length;i<l;i++ ){bb=bc[i];if(!(bb instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(bb)&&bb.isEnabled()&&bb.isVisible()){if(bb.isTabable()&&this.__mC(Y,bb)>0){ba.push(bb);}
;this.__mI(bb,Y,ba);}
;}
;}
,__mJ:function(parent,bd){var bf=parent.getLayoutChildren();var be;for(var i=0,l=bf.length;i<l;i++ ){be=bf[i];if(!(be instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(be)&&be.isEnabled()&&be.isVisible()){if(be.isTabable()){if(bd==null||this.__mC(be,bd)<0){bd=be;}
;}
;bd=this.__mJ(be,bd);}
;}
;return bd;}
,__mK:function(parent,bg){var bi=parent.getLayoutChildren();var bh;for(var i=0,l=bi.length;i<l;i++ ){bh=bi[i];if(!(bh instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(bh)&&bh.isEnabled()&&bh.isVisible()){if(bh.isTabable()){if(bg==null||this.__mC(bh,bg)>0){bg=bh;}
;}
;bg=this.__mK(bh,bg);}
;}
;return bg;}
},destruct:function(){this._disposeMap(b);this.__mz=this.__my=this.__mA=null;}
});}
)();
(function(){var a="' must be defined!",b="height",c="vAlign",d="hAlign",e="' is not supported by the Grid layout!",f="bottom",g="Invalid parameter 'column'",h="Integer",m="The property '",n="'",o="_applyLayoutChange",p="qx.debug",q="Value must be positive",r="center",s="qx.ui.layout.Grid",t="middle",u="maxHeight",v="Cannot add widget '",w="width",z=") for '",A="'!. ",B="top",C="minHeight",D="right",E="' in this cell (",F=", ",G="The layout properties 'row' and 'column' of the child widget '",H="minWidth",I="flex",J="left",K="maxWidth",L="Invalid parameter 'row'",M="There is already a widget '";qx.Class.define(s,{extend:qx.ui.layout.Abstract,construct:function(O,N){qx.ui.layout.Abstract.call(this);this.__mL=[];this.__mM=[];if(O){this.setSpacingX(O);}
;if(N){this.setSpacingY(N);}
;}
,properties:{spacingX:{check:h,init:0,apply:o},spacingY:{check:h,init:0,apply:o}},members:{__mN:null,__mL:null,__mM:null,__mO:null,__mP:null,__mQ:null,__mR:null,__mS:null,__mT:null,verifyLayoutProperty:qx.core.Environment.select(p,{"true":function(P,name,Q){var R={"row":1,"column":1,"rowSpan":1,"colSpan":1};this.assert(R[name]==1,m+name+e);this.assertInteger(Q);this.assert(Q>=0,q);}
,"false":null}),__mU:function(){var Y=[];var T=[];var W=[];var V=-1;var S=-1;var X=this._getLayoutChildren();for(var i=0,l=X.length;i<l;i++ ){var ba=X[i];var bb=ba.getLayoutProperties();var bc=bb.row;var U=bb.column;bb.colSpan=bb.colSpan||1;bb.rowSpan=bb.rowSpan||1;if(bc==null||U==null){throw new Error(G+ba+a);}
;if(Y[bc]&&Y[bc][U]){throw new Error(v+ba+A+M+Y[bc][U]+E+bc+F+U+z+this+n);}
;for(var x=U;x<U+bb.colSpan;x++ ){for(var y=bc;y<bc+bb.rowSpan;y++ ){if(Y[y]==undefined){Y[y]=[];}
;Y[y][x]=ba;S=Math.max(S,x);V=Math.max(V,y);}
;}
;if(bb.rowSpan>1){W.push(ba);}
;if(bb.colSpan>1){T.push(ba);}
;}
;for(var y=0;y<=V;y++ ){if(Y[y]==undefined){Y[y]=[];}
;}
;this.__mN=Y;this.__mO=T;this.__mP=W;this.__mQ=V;this.__mR=S;this.__mS=null;this.__mT=null;delete this._invalidChildrenCache;}
,_setRowData:function(bg,be,bf){var bd=this.__mL[bg];if(!bd){this.__mL[bg]={};this.__mL[bg][be]=bf;}
else {bd[be]=bf;}
;}
,_setColumnData:function(bh,bj,bk){var bi=this.__mM[bh];if(!bi){this.__mM[bh]={};this.__mM[bh][bj]=bk;}
else {bi[bj]=bk;}
;}
,setSpacing:function(bl){this.setSpacingY(bl);this.setSpacingX(bl);return this;}
,setColumnAlign:function(bm,bn,bo){if(qx.core.Environment.get(p)){this.assertInteger(bm,g);this.assertInArray(bn,[J,r,D]);this.assertInArray(bo,[B,t,f]);}
;this._setColumnData(bm,d,bn);this._setColumnData(bm,c,bo);this._applyLayoutChange();return this;}
,getColumnAlign:function(bp){var bq=this.__mM[bp]||{};return {vAlign:bq.vAlign||B,hAlign:bq.hAlign||J};}
,setRowAlign:function(bs,br,bt){if(qx.core.Environment.get(p)){this.assertInteger(bs,L);this.assertInArray(br,[J,r,D]);this.assertInArray(bt,[B,t,f]);}
;this._setRowData(bs,d,br);this._setRowData(bs,c,bt);this._applyLayoutChange();return this;}
,getRowAlign:function(bv){var bu=this.__mL[bv]||{};return {vAlign:bu.vAlign||B,hAlign:bu.hAlign||J};}
,getCellWidget:function(bx,bw){if(this._invalidChildrenCache){this.__mU();}
;var bx=this.__mN[bx]||{};return bx[bw]||null;}
,getRowCount:function(){if(this._invalidChildrenCache){this.__mU();}
;return this.__mQ+1;}
,getColumnCount:function(){if(this._invalidChildrenCache){this.__mU();}
;return this.__mR+1;}
,getCellAlign:function(bF,bz){var bE=B;var bC=J;var bD=this.__mL[bF];var bA=this.__mM[bz];var by=this.__mN[bF][bz];if(by){var bB={vAlign:by.getAlignY(),hAlign:by.getAlignX()};}
else {bB={};}
;if(bB.vAlign){bE=bB.vAlign;}
else if(bD&&bD.vAlign){bE=bD.vAlign;}
else if(bA&&bA.vAlign){bE=bA.vAlign;}
;if(bB.hAlign){bC=bB.hAlign;}
else if(bA&&bA.hAlign){bC=bA.hAlign;}
else if(bD&&bD.hAlign){bC=bD.hAlign;}
;return {vAlign:bE,hAlign:bC};}
,setColumnFlex:function(bG,bH){this._setColumnData(bG,I,bH);this._applyLayoutChange();return this;}
,getColumnFlex:function(bI){var bJ=this.__mM[bI]||{};return bJ.flex!==undefined?bJ.flex:0;}
,setRowFlex:function(bL,bK){this._setRowData(bL,I,bK);this._applyLayoutChange();return this;}
,getRowFlex:function(bO){var bM=this.__mL[bO]||{};var bN=bM.flex!==undefined?bM.flex:0;return bN;}
,setColumnMaxWidth:function(bP,bQ){this._setColumnData(bP,K,bQ);this._applyLayoutChange();return this;}
,getColumnMaxWidth:function(bR){var bS=this.__mM[bR]||{};return bS.maxWidth!==undefined?bS.maxWidth:Infinity;}
,setColumnWidth:function(bT,bU){this._setColumnData(bT,w,bU);this._applyLayoutChange();return this;}
,getColumnWidth:function(bV){var bW=this.__mM[bV]||{};return bW.width!==undefined?bW.width:null;}
,setColumnMinWidth:function(bX,bY){this._setColumnData(bX,H,bY);this._applyLayoutChange();return this;}
,getColumnMinWidth:function(ca){var cb=this.__mM[ca]||{};return cb.minWidth||0;}
,setRowMaxHeight:function(cd,cc){this._setRowData(cd,u,cc);this._applyLayoutChange();return this;}
,getRowMaxHeight:function(cf){var ce=this.__mL[cf]||{};return ce.maxHeight||Infinity;}
,setRowHeight:function(cg,ch){this._setRowData(cg,b,ch);this._applyLayoutChange();return this;}
,getRowHeight:function(cj){var ci=this.__mL[cj]||{};return ci.height!==undefined?ci.height:null;}
,setRowMinHeight:function(cl,ck){this._setRowData(cl,C,ck);this._applyLayoutChange();return this;}
,getRowMinHeight:function(cn){var cm=this.__mL[cn]||{};return cm.minHeight||0;}
,__mV:function(cp){var co=cp.getSizeHint();var cr=cp.getMarginLeft()+cp.getMarginRight();var cq=cp.getMarginTop()+cp.getMarginBottom();var cs={height:co.height+cq,width:co.width+cr,minHeight:co.minHeight+cq,minWidth:co.minWidth+cr,maxHeight:co.maxHeight+cq,maxWidth:co.maxWidth+cr};return cs;}
,_fixHeightsRowSpan:function(cN){var cz=this.getSpacingY();for(var i=0,l=this.__mP.length;i<l;i++ ){var cF=this.__mP[i];var cC=this.__mV(cF);var cv=cF.getLayoutProperties();var cB=cv.row;var cK=cz*(cv.rowSpan-1);var ct=cK;var cw={};for(var j=0;j<cv.rowSpan;j++ ){var cA=cv.row+j;var cJ=cN[cA];var cL=this.getRowFlex(cA);if(cL>0){cw[cA]={min:cJ.minHeight,value:cJ.height,max:cJ.maxHeight,flex:cL};}
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
,_fixWidthsColSpan:function(cR){var cS=this.getSpacingX();for(var i=0,l=this.__mO.length;i<l;i++ ){var cO=this.__mO[i];var cQ=this.__mV(cO);var cU=cO.getLayoutProperties();var cP=cU.column;var db=cS*(cU.colSpan-1);var cT=db;var cV={};var cX;for(var j=0;j<cU.colSpan;j++ ){var cW=cU.column+j;var da=cR[cW];var cY=this.getColumnFlex(cW);if(cY>0){cV[cW]={min:da.minWidth,value:da.width,max:da.maxWidth,flex:cY};}
;db+=da.width;cT+=da.minWidth;}
;if(db<cQ.width){var dc=qx.ui.layout.Util.computeFlexOffsets(cV,cQ.width,db);for(var j=0;j<cU.colSpan;j++ ){cX=dc[cP+j]?dc[cP+j].offset:0;cR[cP+j].width+=cX;}
;}
;if(cT<cQ.minWidth){var dc=qx.ui.layout.Util.computeFlexOffsets(cV,cQ.minWidth,cT);for(var j=0;j<cU.colSpan;j++ ){cX=dc[cP+j]?dc[cP+j].offset:0;cR[cP+j].minWidth+=cX;}
;}
;}
;}
,_getRowHeights:function(){if(this.__mS!=null){return this.__mS;}
;var dm=[];var df=this.__mQ;var de=this.__mR;for(var dn=0;dn<=df;dn++ ){var dg=0;var di=0;var dh=0;for(var dl=0;dl<=de;dl++ ){var dd=this.__mN[dn][dl];if(!dd){continue;}
;var dj=dd.getLayoutProperties().rowSpan||0;if(dj>1){continue;}
;var dk=this.__mV(dd);if(this.getRowFlex(dn)>0){dg=Math.max(dg,dk.minHeight);}
else {dg=Math.max(dg,dk.height);}
;di=Math.max(di,dk.height);}
;var dg=Math.max(dg,this.getRowMinHeight(dn));var dh=this.getRowMaxHeight(dn);if(this.getRowHeight(dn)!==null){var di=this.getRowHeight(dn);}
else {var di=Math.max(dg,Math.min(di,dh));}
;dm[dn]={minHeight:dg,height:di,maxHeight:dh};}
;if(this.__mP.length>0){this._fixHeightsRowSpan(dm);}
;this.__mS=dm;return dm;}
,_getColWidths:function(){if(this.__mT!=null){return this.__mT;}
;var dt=[];var dq=this.__mR;var ds=this.__mQ;for(var dy=0;dy<=dq;dy++ ){var dw=0;var dv=0;var dr=Infinity;for(var dz=0;dz<=ds;dz++ ){var dp=this.__mN[dz][dy];if(!dp){continue;}
;var du=dp.getLayoutProperties().colSpan||0;if(du>1){continue;}
;var dx=this.__mV(dp);if(this.getColumnFlex(dy)>0){dv=Math.max(dv,dx.minWidth);}
else {dv=Math.max(dv,dx.width);}
;dw=Math.max(dw,dx.width);}
;dv=Math.max(dv,this.getColumnMinWidth(dy));dr=this.getColumnMaxWidth(dy);if(this.getColumnWidth(dy)!==null){var dw=this.getColumnWidth(dy);}
else {var dw=Math.max(dv,Math.min(dw,dr));}
;dt[dy]={minWidth:dv,width:dw,maxWidth:dr};}
;if(this.__mO.length>0){this._fixWidthsColSpan(dt);}
;this.__mT=dt;return dt;}
,_getColumnFlexOffsets:function(dD){var dA=this.getSizeHint();var dF=dD-dA.width;if(dF==0){return {};}
;var dC=this._getColWidths();var dB={};for(var i=0,l=dC.length;i<l;i++ ){var dG=dC[i];var dE=this.getColumnFlex(i);if((dE<=0)||(dG.width==dG.maxWidth&&dF>0)||(dG.width==dG.minWidth&&dF<0)){continue;}
;dB[i]={min:dG.minWidth,value:dG.width,max:dG.maxWidth,flex:dE};}
;return qx.ui.layout.Util.computeFlexOffsets(dB,dD,dA.width);}
,_getRowFlexOffsets:function(dJ){var dH=this.getSizeHint();var dL=dJ-dH.height;if(dL==0){return {};}
;var dK=this._getRowHeights();var dI={};for(var i=0,l=dK.length;i<l;i++ ){var dN=dK[i];var dM=this.getRowFlex(i);if((dM<=0)||(dN.height==dN.maxHeight&&dL>0)||(dN.height==dN.minHeight&&dL<0)){continue;}
;dI[i]={min:dN.minHeight,value:dN.height,max:dN.maxHeight,flex:dM};}
;return qx.ui.layout.Util.computeFlexOffsets(dI,dJ,dH.height);}
,renderLayout:function(ej,dO,ei){if(this._invalidChildrenCache){this.__mU();}
;var ed=qx.ui.layout.Util;var dQ=this.getSpacingX();var dW=this.getSpacingY();var eh=this._getColWidths();var ek=this._getColumnFlexOffsets(ej);var dR=[];var em=this.__mR;var dP=this.__mQ;var el;for(var en=0;en<=em;en++ ){el=ek[en]?ek[en].offset:0;dR[en]=eh[en].width+el;}
;var ea=this._getRowHeights();var ec=this._getRowFlexOffsets(dO);var et=[];for(var dX=0;dX<=dP;dX++ ){el=ec[dX]?ec[dX].offset:0;et[dX]=ea[dX].height+el;}
;var er=0;for(var en=0;en<=em;en++ ){var top=0;for(var dX=0;dX<=dP;dX++ ){var ef=this.__mN[dX][en];if(!ef){top+=et[dX]+dW;continue;}
;var dS=ef.getLayoutProperties();if(dS.row!==dX||dS.column!==en){top+=et[dX]+dW;continue;}
;var es=dQ*(dS.colSpan-1);for(var i=0;i<dS.colSpan;i++ ){es+=dR[en+i];}
;var eg=dW*(dS.rowSpan-1);for(var i=0;i<dS.rowSpan;i++ ){eg+=et[dX+i];}
;var dT=ef.getSizeHint();var eq=ef.getMarginTop();var ee=ef.getMarginLeft();var eb=ef.getMarginBottom();var dV=ef.getMarginRight();var dY=Math.max(dT.minWidth,Math.min(es-ee-dV,dT.maxWidth));var eu=Math.max(dT.minHeight,Math.min(eg-eq-eb,dT.maxHeight));var eo=this.getCellAlign(dX,en);var ep=er+ed.computeHorizontalAlignOffset(eo.hAlign,dY,es,ee,dV);var dU=top+ed.computeVerticalAlignOffset(eo.vAlign,eu,eg,eq,eb);ef.renderLayout(ep+ei.left,dU+ei.top,dY,eu);top+=et[dX]+dW;}
;er+=dR[en]+dQ;}
;}
,invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);this.__mT=null;this.__mS=null;}
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__mU();}
;var ex=this._getColWidths();var ev=0,eD=0;for(var i=0,l=ex.length;i<l;i++ ){var eC=ex[i];if(this.getColumnFlex(i)>0){ev+=eC.minWidth;}
else {ev+=eC.width;}
;eD+=eC.width;}
;var eE=this._getRowHeights();var ey=0,ez=0;for(var i=0,l=eE.length;i<l;i++ ){var eF=eE[i];if(this.getRowFlex(i)>0){ey+=eF.minHeight;}
else {ey+=eF.height;}
;ez+=eF.height;}
;var eB=this.getSpacingX()*(ex.length-1);var eA=this.getSpacingY()*(eE.length-1);var ew={minWidth:ev+eB,width:eD+eB,minHeight:ey+eA,height:ez+eA};return ew;}
},destruct:function(){this.__mN=this.__mL=this.__mM=this.__mO=this.__mP=this.__mT=this.__mS=null;}
});}
)();
(function(){var a="toolTipText",b="icon",c="label",d="qx.ui.core.MExecutable",f="value",g="qx.event.type.Event",h="execute",j="_applyCommand",k="enabled",l="menu",m="changeCommand",n="qx.ui.core.Command";qx.Mixin.define(d,{events:{"execute":g},properties:{command:{check:n,apply:j,event:m,nullable:true}},members:{__mW:null,__mX:false,__mY:null,_bindableProperties:[k,c,b,a,f,l],execute:function(){var o=this.getCommand();if(o){if(this.__mX){this.__mX=false;}
else {this.__mX=true;o.execute(this);}
;}
;this.fireEvent(h);}
,__na:function(e){if(this.__mX){this.__mX=false;return;}
;this.__mX=true;this.execute();}
,_applyCommand:function(r,p){if(p!=null){p.removeListenerById(this.__mY);}
;if(r!=null){this.__mY=r.addListener(h,this.__na,this);}
;var q=this.__mW;if(q==null){this.__mW=q={};}
;var u;for(var i=0;i<this._bindableProperties.length;i++ ){var t=this._bindableProperties[i];if(p!=null&&!p.isDisposed()&&q[t]!=null){p.removeBinding(q[t]);q[t]=null;}
;if(r!=null&&qx.Class.hasProperty(this.constructor,t)){var s=r.get(t);if(s==null){u=this.get(t);if(u==null){this.syncAppearance();u=qx.util.PropertyUtil.getThemeValue(this,t);}
;}
else {u=null;}
;q[t]=r.bind(t,this,t);if(u){this.set(t,u);}
;}
;}
;}
},destruct:function(){this._applyCommand(null,this.getCommand());this.__mW=null;}
});}
)();
(function(){var a="qx.ui.form.IExecutable",b="qx.event.type.Data";qx.Interface.define(a,{events:{"execute":b},members:{setCommand:function(c){return arguments.length==1;}
,getCommand:function(){}
,execute:function(){}
}});}
)();
(function(){var a="dblclick",b="qx.ui.form.Button",c="mouseup",d="mousedown",f="Enter",g="pressed",h="event.mspointer",i="hovered",j="mouseover",k="mouseout",l="click",m="mousemove",n="keydown",o="abandoned",p="button",q="keyup",r="Space";qx.Class.define(b,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(s,u,t){qx.ui.basic.Atom.call(this,s,u);if(t!=null){this.setCommand(t);}
;this.addListener(j,this._onMouseOver);this.addListener(k,this._onMouseOut);this.addListener(d,this._onMouseDown);this.addListener(c,this._onMouseUp);this.addListener(l,this._onClick);this.addListener(n,this._onKeyDown);this.addListener(q,this._onKeyUp);this.addListener(a,this._onStopEvent);if(qx.event.handler.MouseEmulation.ON&&!qx.core.Environment.get(h)){this.addListener(m,function(e){var y=this.getBounds();var v={left:e.getDocumentLeft(),top:e.getDocumentTop()};var w=v.left>y.left&&v.left<y.left+y.width;var x=v.top>y.top&&v.top<y.top+y.height;if(w&&x){this.addState(g);}
else {this.removeState(g);}
;}
);}
;}
,properties:{appearance:{refine:true,init:p},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(o)){return;}
;this.addState(g);}
,release:function(){if(this.hasState(g)){this.removeState(g);}
;}
,reset:function(){this.removeState(g);this.removeState(o);this.removeState(i);}
,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;if(this.hasState(o)){this.removeState(o);this.addState(g);}
;this.addState(i);}
,_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;this.removeState(i);if(this.hasState(g)){this.removeState(g);this.addState(o);}
;}
,_onMouseDown:function(e){if(!e.isLeftPressed()){return;}
;e.stopPropagation();this.capture();this.removeState(o);this.addState(g);}
,_onMouseUp:function(e){this.releaseCapture();var z=this.hasState(g);var A=this.hasState(o);if(z){this.removeState(g);}
;if(A){this.removeState(o);}
else {if(z){this.execute();}
;}
;e.stopPropagation();}
,_onClick:function(e){e.stopPropagation();}
,_onKeyDown:function(e){switch(e.getKeyIdentifier()){case f:case r:this.removeState(o);this.addState(g);e.stopPropagation();};}
,_onKeyUp:function(e){switch(e.getKeyIdentifier()){case f:case r:if(this.hasState(g)){this.removeState(o);this.removeState(g);this.execute();e.stopPropagation();}
;};}
}});}
)();
(function(){var a="_applyBlockerColor",b="Number",c="qx.debug",d="Please use 'isBlocked' instead.",e="__nb",f="Please use 'forceUnblock' instead.",g="qx.ui.core.MBlocker",h="_applyBlockerOpacity",i="Please use 'unblock' instead.",j="Color";qx.Mixin.define(g,{construct:function(){this.__nb=this._createBlocker();}
,properties:{blockerColor:{check:j,init:null,nullable:true,apply:a,themeable:true},blockerOpacity:{check:b,init:1,apply:h,themeable:true}},members:{__nb:null,_createBlocker:function(){return new qx.ui.core.Blocker(this);}
,_applyBlockerColor:function(l,k){this.__nb.setColor(l);}
,_applyBlockerOpacity:function(n,m){this.__nb.setOpacity(n);}
,block:function(){this.__nb.block();}
,isBlocked:function(){return this.__nb.isBlocked();}
,unblock:function(){this.__nb.unblock();}
,forceUnblock:function(){this.__nb.forceUnblock();}
,blockContent:function(o){this.__nb.blockContent(o);}
,isContentBlocked:function(){if(qx.core.Environment.get(c)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);}
;return this.__nb.isBlocked();}
,unblockContent:function(){if(qx.core.Environment.get(c)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);}
;this.__nb.unblock();}
,forceUnblockContent:function(){if(qx.core.Environment.get(c)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);}
;this.__nb.forceUnblock();}
,getBlocker:function(){return this.__nb;}
},destruct:function(){this._disposeObjects(e);}
});}
)();
(function(){var a="qx.dyntheme",b="backgroundColor",c="_applyOpacity",d="Boolean",f="px",g="keydown",h="deactivate",j="changeTheme",k="__ju",l="opacity",m="qx.debug",n="Please use 'isBlocked' instead.",o="Tab",p="qx.event.type.Event",q="move",r="Please use 'getBlockerElement' instead.",s="Please use 'unblock' instead.",t="Color",u="resize",v="zIndex",w="__nb",x="Please use 'forceUnblock' instead.",y="appear",z="qx.ui.root.Abstract",A="keyup",B="keypress",C="Number",D="unblocked",E="qx.ui.core.Blocker",F="disappear",G="blocked",H="_applyColor";qx.Class.define(E,{extend:qx.core.Object,events:{blocked:p,unblocked:p},construct:function(I){qx.core.Object.call(this);this._widget=I;I.addListener(u,this.__ng,this);I.addListener(q,this.__ng,this);I.addListener(F,this.__ni,this);if(qx.Class.isDefined(z)&&I instanceof qx.ui.root.Abstract){this._isRoot=true;this.setKeepBlockerActive(true);}
;if(qx.core.Environment.get(a)){qx.theme.manager.Color.getInstance().addListener(j,this._onChangeTheme,this);}
;this.__nc=[];this.__nd=[];}
,properties:{color:{check:t,init:null,nullable:true,apply:H,themeable:true},opacity:{check:C,init:1,apply:c,themeable:true},keepBlockerActive:{check:d,init:false}},members:{__nb:null,__ne:0,__nc:null,__nd:null,__ju:null,_widget:null,_isRoot:false,__nf:null,__ng:function(e){var J=e.getData();if(this.isBlocked()){this._updateBlockerBounds(J);}
;}
,__nh:function(){this._updateBlockerBounds(this._widget.getBounds());if(this._widget.isRootWidget()){this._widget.getContentElement().add(this.getBlockerElement());}
else {this._widget.getLayoutParent().getContentElement().add(this.getBlockerElement());}
;}
,__ni:function(){if(this.isBlocked()){this.getBlockerElement().getParent().remove(this.getBlockerElement());this._widget.addListenerOnce(y,this.__nh,this);}
;}
,_updateBlockerBounds:function(K){this.getBlockerElement().setStyles({width:K.width+f,height:K.height+f,left:K.left+f,top:K.top+f});}
,_applyColor:function(N,M){var L=qx.theme.manager.Color.getInstance().resolve(N);this.__nj(b,L);}
,_applyOpacity:function(P,O){this.__nj(l,P);}
,_onChangeTheme:qx.core.Environment.select(a,{"true":function(){this._applyColor(this.getColor());}
,"false":null}),__nj:function(R,S){var Q=[];this.__nb&&Q.push(this.__nb);for(var i=0;i<Q.length;i++ ){Q[i].setStyle(R,S);}
;}
,_backupActiveWidget:function(){var T=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);this.__nc.push(T.getActive());this.__nd.push(T.getFocus());if(this._widget.isFocusable()){this._widget.focus();}
;}
,_restoreActiveWidget:function(){var W=this.__nc.length;if(W>0){var V=this.__nc[W-1];if(V){qx.bom.Element.activate(V);}
;this.__nc.pop();}
;var U=this.__nd.length;if(U>0){var V=this.__nd[U-1];if(V){qx.bom.Element.focus(this.__nd[U-1]);}
;this.__nd.pop();}
;}
,__nk:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());}
,getBlockerElement:function(X){if(!this.__nb){this.__nb=this.__nk();this.__nb.setStyle(v,15);if(!X){if(this._isRoot){X=this._widget;}
else {X=this._widget.getLayoutParent();}
;}
;X.getContentElement().add(this.__nb);this.__nb.exclude();}
;return this.__nb;}
,block:function(){this._block();}
,_block:function(Y,bb){if(!this._isRoot&&!this._widget.getLayoutParent()){this.__nf=this._widget.addListenerOnce(y,this._block.bind(this,Y));return;}
;var parent;if(this._isRoot||bb){parent=this._widget;}
else {parent=this._widget.getLayoutParent();}
;var ba=this.getBlockerElement(parent);if(Y!=null){ba.setStyle(v,Y);}
;this.__ne++ ;if(this.__ne<2){this._backupActiveWidget();var bc=this._widget.getBounds();if(bc){this._updateBlockerBounds(bc);}
;ba.include();if(!bb){ba.activate();}
;ba.addListener(h,this.__nn,this);ba.addListener(B,this.__nm,this);ba.addListener(g,this.__nm,this);ba.addListener(A,this.__nm,this);this.fireEvent(G,qx.event.type.Event);}
;}
,isBlocked:function(){return this.__ne>0;}
,unblock:function(){if(this.__nf){this._widget.removeListenerById(this.__nf);}
;if(!this.isBlocked()){return;}
;this.__ne-- ;if(this.__ne<1){this.__nl();this.__ne=0;}
;}
,forceUnblock:function(){if(!this.isBlocked()){return;}
;this.__ne=0;this.__nl();}
,__nl:function(){this._restoreActiveWidget();var bd=this.getBlockerElement();bd.removeListener(h,this.__nn,this);bd.removeListener(B,this.__nm,this);bd.removeListener(g,this.__nm,this);bd.removeListener(A,this.__nm,this);bd.exclude();this.fireEvent(D,qx.event.type.Event);}
,getContentBlockerElement:function(){if(qx.core.Environment.get(m)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);}
;return this.getBlockerElement();}
,blockContent:function(be){this._block(be,true);}
,isContentBlocked:function(){if(qx.core.Environment.get(m)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);}
;return this.isBlocked();}
,unblockContent:function(){if(qx.core.Environment.get(m)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);}
;this.unblock();}
,forceUnblockContent:function(){if(qx.core.Environment.get(m)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,x);}
;this.forceUnblock();}
,__nm:function(e){if(e.getKeyIdentifier()==o){e.stop();}
;}
,__nn:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();}
;}
},destruct:function(){if(qx.core.Environment.get(a)){qx.theme.manager.Color.getInstance().removeListener(j,this._onChangeTheme,this);}
;this._widget.removeListener(u,this.__ng,this);this._widget.removeListener(q,this.__ng,this);this._widget.removeListener(y,this.__nh,this);this._widget.removeListener(F,this.__ni,this);if(this.__nf){this._widget.removeListenerById(this.__nf);}
;this._disposeObjects(w,k);this.__nc=this.__nd=this._widget=null;}
});}
)();
(function(){var a="dblclick",b="mshtml",c="engine.name",d="repeat",f="mousedown",g="disappear",h="appear",i="url(",j="mousewheel",k=")",l="mouseover",m="mouseout",n="qx.html.Blocker",o="mouseup",p="mousemove",q="div",r="contextmenu",s="click",t="qx/static/blank.gif",u="cursor",v="absolute";qx.Class.define(n,{extend:qx.html.Element,construct:function(y,w){var y=y?qx.theme.manager.Color.getInstance().resolve(y):null;var x={position:v,opacity:w||0,backgroundColor:y};if((qx.core.Environment.get(c)==b)){x.backgroundImage=i+qx.util.ResourceManager.getInstance().toUri(t)+k;x.backgroundRepeat=d;}
;qx.html.Element.call(this,q,x);this.addListener(f,this._stopPropagation,this);this.addListener(o,this._stopPropagation,this);this.addListener(s,this._stopPropagation,this);this.addListener(a,this._stopPropagation,this);this.addListener(p,this._stopPropagation,this);this.addListener(l,this._stopPropagation,this);this.addListener(m,this._stopPropagation,this);this.addListener(j,this._stopPropagation,this);this.addListener(r,this._stopPropagation,this);this.addListener(h,this.__no,this);this.addListener(g,this.__no,this);}
,members:{_stopPropagation:function(e){e.stopPropagation();}
,__no:function(){var z=this.getStyle(u);this.setStyle(u,null,true);this.setStyle(u,z,true);}
}});}
)();
(function(){var a="changeGlobalCursor",b="engine.name",c="keypress",d="Boolean",f="root",g="help",h="",i="contextmenu",j=" !important",k="input",l="_applyGlobalCursor",m="Space",n="_applyNativeHelp",o=";",p="event.help",q="qx.ui.root.Abstract",r="abstract",s="textarea",t="String",u="*";qx.Class.define(q,{type:r,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);qx.ui.core.FocusHandler.getInstance().addRoot(this);qx.ui.core.queue.Visibility.add(this);this.initNativeHelp();this.addListener(c,this.__nq,this);}
,properties:{appearance:{refine:true,init:f},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:t,nullable:true,themeable:true,apply:l,event:a},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:d,init:false,apply:n}},members:{__np:null,isRootWidget:function(){return true;}
,getLayout:function(){return this._getLayout();}
,_applyGlobalCursor:qx.core.Environment.select(b,{"mshtml":function(w,v){}
,"default":function(A,z){var y=qx.bom.Stylesheet;var x=this.__np;if(!x){this.__np=x=y.createElement();}
;y.removeAllRules(x);if(A){y.addRule(x,u,qx.bom.element.Cursor.compile(A).replace(o,h)+j);}
;}
}),_applyNativeContextMenu:function(C,B){if(C){this.removeListener(i,this._onNativeContextMenu,this,true);}
else {this.addListener(i,this._onNativeContextMenu,this,true);}
;}
,_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;}
;e.preventDefault();}
,__nq:function(e){if(e.getKeyIdentifier()!==m){return;}
;var E=e.getTarget();var D=qx.ui.core.FocusHandler.getInstance();if(!D.isFocused(E)){return;}
;var F=E.getContentElement().getNodeName();if(F===k||F===s){return;}
;e.preventDefault();}
,_applyNativeHelp:function(H,G){if(qx.core.Environment.get(p)){if(G===false){qx.bom.Event.removeNativeListener(document,g,(function(){return false;}
));}
;if(H===false){qx.bom.Event.addNativeListener(document,g,(function(){return false;}
));}
;}
;}
},destruct:function(){this.__np=null;}
,defer:function(I,J){qx.ui.core.MChildrenHandling.remap(J);}
});}
)();
(function(){var a="resize",b="rgba(0,0,0,0)",c="paddingLeft",d="WebkitTapHighlightColor",f="qx.emulatemouse",g="engine.name",h="webkit",i="0px",j="The application could not be started due to a missing body tag in the HTML file!",k="$$widget",l="qx.ui.root.Application",m="event.touch",n="div",o="paddingTop",p="hidden",q="The root widget does not support 'left', or 'top' paddings!",r="100%",s="absolute";qx.Class.define(l,{extend:qx.ui.root.Abstract,construct:function(t){this.__cx=qx.dom.Node.getWindow(t);this.__nr=t;if(qx.core.Environment.get(m)&&qx.core.Environment.get(f)){if(t.body){t.body.style[d]=b;}
;}
;qx.ui.root.Abstract.call(this);qx.event.Registration.addListener(this.__cx,a,this._onResize,this);this._setLayout(new qx.ui.layout.Canvas());qx.ui.core.queue.Layout.add(this);qx.ui.core.FocusHandler.getInstance().connectTo(this);this.getContentElement().disableScrolling();}
,members:{__cx:null,__nr:null,_createContentElement:function(){var u=this.__nr;if((qx.core.Environment.get(g)==h)){if(!u.body){alert(j);}
;}
;var y=u.documentElement.style;var v=u.body.style;y.overflow=v.overflow=p;y.padding=y.margin=v.padding=v.margin=i;y.width=y.height=v.width=v.height=r;var x=u.createElement(n);u.body.appendChild(x);var w=new qx.html.Root(x);w.setStyles({"position":s,"overflowX":p,"overflowY":p});w.setAttribute(k,this.toHashCode());return w;}
,_onResize:function(e){qx.ui.core.queue.Layout.add(this);if(qx.ui.popup&&qx.ui.popup.Manager){qx.ui.popup.Manager.getInstance().hideAll();}
;if(qx.ui.menu&&qx.ui.menu.Manager){qx.ui.menu.Manager.getInstance().hideAll();}
;}
,_computeSizeHint:function(){var z=qx.bom.Viewport.getWidth(this.__cx);var A=qx.bom.Viewport.getHeight(this.__cx);return {minWidth:z,width:z,maxWidth:z,minHeight:A,height:A,maxHeight:A};}
,_applyPadding:function(C,B,name){if(C&&(name==o||name==c)){throw new Error(q);}
;qx.ui.root.Abstract.prototype._applyPadding.call(this,C,B,name);}
},destruct:function(){this.__cx=this.__nr=null;}
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
(function(){var a="changeTheme",b="demobrowser.demo.ui.Decoration";qx.Class.define(b,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);var c=new qx.ui.layout.HBox();c.setSpacing(10);var e=new qx.ui.container.Scroll();this.getRoot().add(e,{edge:0});var d=new qx.ui.container.Composite(c);d.setPadding(20);e.add(d);d.add(this.getDecorations());qx.theme.manager.Decoration.getInstance().addListener(a,function(){d.getChildren()[0].destroy();qx.ui.core.queue.Dispose.flush();d.add(this.getDecorations());}
,this);}
,getDecorations:function(){var j=qx.theme.manager.Decoration.getInstance().getTheme();var g=new qx.ui.layout.Grid();g.setSpacing(10);var f=new qx.ui.container.Composite(g);var k=j.decorations;var l=8;var i=0;for(var h in k){f.add(new qx.ui.basic.Label(h).set({rich:true,wrap:true,decorator:h,padding:5,height:80,width:80}),{row:Math.floor(i/l),column:i%l});i+=1;}
;return f;}
}});}
)();
(function(){var a="qx.ui.core.scroll.MWheelHandling",b="x",c="y",d="scrollbar-x",f="scrollbar-y";qx.Mixin.define(a,{members:{_onMouseWheel:function(e){var j=this._isChildControlVisible(d);var l=this._isChildControlVisible(f);var q=l?this.getChildControl(f,true):null;var p=j?this.getChildControl(d,true):null;var m=e.getWheelDelta(c);var g=e.getWheelDelta(b);var i=!l;var o=!j;if(q){if(qx.event.handler.MouseEmulation.ON){q.scrollBy(parseInt(m));}
else {var k=parseInt(m);if(k!==0){q.scrollBySteps(k);}
;}
;var n=q.getPosition();var h=q.getMaximum();if(k<0&&n<=0||k>0&&n>=h){i=true;}
;}
;if(p){if(qx.event.handler.MouseEmulation.ON){p.scrollBySteps(g);}
else {var k=parseInt(g);if(k!==0){p.scrollBySteps(k);}
;}
;var n=p.getPosition();var h=p.getMaximum();if(k<0&&n<=0||k>0&&n>=h){o=true;}
;}
;if((!i&&g===0)||(!o&&m===0)||((!o||!i)&&g!==0&&m!==0)){e.stop();}
;}
}});}
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
(function(){var a="mousedown",b="qx.ui.core.scroll.NativeScrollBar",c="px",d="PositiveNumber",f="frame",g="end",h="box-sizing",i="Integer",j="__oX",k="mousemove",l="_applyMaximum",m="vertical",n="_applyOrientation",o="scrollAnimationEnd",p="appear",q="content-box",r="PositiveInteger",s='qx.event.type.Event',t="mshtml",u="engine.name",v="mouseup",w="horizontal",x="Number",y="_applyPosition",z="scrollbar",A="hidden",B="native",C="scroll";qx.Class.define(b,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(D){qx.ui.core.Widget.call(this);this.addState(B);this.getContentElement().addListener(C,this._onScroll,this);this.addListener(a,this._stopPropagation,this);this.addListener(v,this._stopPropagation,this);this.addListener(k,this._stopPropagation,this);this.addListener(p,this._onAppear,this);this.getContentElement().add(this._getScrollPaneElement());this.getContentElement().setStyle(h,q);if(D!=null){this.setOrientation(D);}
else {this.initOrientation();}
;}
,events:{scrollAnimationEnd:s},properties:{appearance:{refine:true,init:z},orientation:{check:[w,m],init:w,apply:n},maximum:{check:r,apply:l,init:100},position:{check:x,init:0,apply:y,event:C},singleStep:{check:i,init:20},knobFactor:{check:d,nullable:true}},members:{__nP:null,__oX:null,__oY:null,__pa:null,_getScrollPaneElement:function(){if(!this.__oX){this.__oX=new qx.html.Element();}
;return this.__oX;}
,renderLayout:function(F,top,E,H){var G=qx.ui.core.Widget.prototype.renderLayout.call(this,F,top,E,H);this._updateScrollBar();return G;}
,_getContentHint:function(){var I=qx.bom.element.Scroll.getScrollbarWidth();return {width:this.__nP?100:I,maxWidth:this.__nP?null:I,minWidth:this.__nP?null:I,height:this.__nP?I:100,maxHeight:this.__nP?I:null,minHeight:this.__nP?I:null};}
,_applyEnabled:function(K,J){qx.ui.core.Widget.prototype._applyEnabled.call(this,K,J);this._updateScrollBar();}
,_applyMaximum:function(L){this._updateScrollBar();}
,_applyPosition:function(M){var content=this.getContentElement();if(this.__nP){content.scrollToX(M);}
else {content.scrollToY(M);}
;}
,_applyOrientation:function(P,N){var O=this.__nP=P===w;this.set({allowGrowX:O,allowShrinkX:O,allowGrowY:!O,allowShrinkY:!O});if(O){this.replaceState(m,w);}
else {this.replaceState(w,m);}
;this.getContentElement().setStyles({overflowX:O?C:A,overflowY:O?A:C});qx.ui.core.queue.Layout.add(this);}
,_updateScrollBar:function(){var R=this.__nP;var S=this.getBounds();if(!S){return;}
;if(this.isEnabled()){var T=R?S.width:S.height;var Q=this.getMaximum()+T;}
else {Q=0;}
;if(qx.core.Environment.get(u)==t){var S=this.getBounds();this.getContentElement().setStyles({left:(R?S.left:(S.left-1))+c,top:(R?(S.top-1):S.top)+c,width:(R?S.width:S.width+1)+c,height:(R?S.height+1:S.height)+c});}
;this._getScrollPaneElement().setStyles({left:0,top:0,width:(R?Q:1)+c,height:(R?1:Q)+c});this.updatePosition(this.getPosition());}
,scrollTo:function(V,U){this.stopScrollAnimation();if(U){var W=this.getPosition();this.__pa=new qx.bom.AnimationFrame();this.__pa.on(f,function(Y){var X=parseInt(Y/U*(V-W)+W);this.updatePosition(X);}
,this);this.__pa.on(g,function(){this.setPosition(Math.max(0,Math.min(this.getMaximum(),V)));this.__pa=null;this.fireEvent(o);}
,this);this.__pa.startSequence(U);}
else {this.updatePosition(V);}
;}
,updatePosition:function(ba){this.setPosition(Math.max(0,Math.min(this.getMaximum(),ba)));}
,scrollBy:function(bc,bb){this.scrollTo(this.getPosition()+bc,bb);}
,scrollBySteps:function(be,bd){var bf=this.getSingleStep();this.scrollBy(be*bf,bd);}
,stopScrollAnimation:function(){if(this.__pa){this.__pa.cancelSequence();this.__pa=null;}
;}
,_onScroll:function(e){var bg=this.getContentElement();var bh=this.__nP?bg.getScrollX():bg.getScrollY();this.setPosition(bh);}
,_onAppear:function(e){this._applyPosition(this.getPosition());}
,_stopPropagation:function(e){e.stopPropagation();}
},destruct:function(){this._disposeObjects(j);}
});}
)();
(function(){var a="slider",b="slideAnimationEnd",c="PositiveNumber",d="changeValue",f="Integer",g="execute",h="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",i="_applyKnobFactor",j="visible",k="qx.event.type.Event",l="knob",m="button-begin",n="hidden",o="qx.ui.core.scroll.ScrollBar",p="resize",q="vertical",r="_applyOrientation",s="scrollAnimationEnd",t="_applyPageStep",u="right",v="PositiveInteger",w="horizontal",x="up",y="_applyPosition",z="scrollbar",A="_applyMaximum",B="left",C="button-end",D="down",E="scroll";qx.Class.define(o,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(F){qx.ui.core.Widget.call(this);this._createChildControl(m);this._createChildControl(a).addListener(p,this._onResizeSlider,this);this._createChildControl(C);if(F!=null){this.setOrientation(F);}
else {this.initOrientation();}
;}
,events:{"scrollAnimationEnd":k},properties:{appearance:{refine:true,init:z},orientation:{check:[w,q],init:w,apply:r},maximum:{check:v,apply:A,init:100},position:{check:h,init:0,apply:y,event:E},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:t},knobFactor:{check:c,apply:i,nullable:true}},members:{__wx:2,__wy:0,_computeSizeHint:function(){var G=qx.ui.core.Widget.prototype._computeSizeHint.call(this);if(this.getOrientation()===w){this.__wy=G.minWidth;G.minWidth=0;}
else {this.__wy=G.minHeight;G.minHeight=0;}
;return G;}
,renderLayout:function(L,top,I,H){var K=qx.ui.core.Widget.prototype.renderLayout.call(this,L,top,I,H);var J=this.getOrientation()===w;if(this.__wy>=(J?I:H)){this.getChildControl(m).setVisibility(n);this.getChildControl(C).setVisibility(n);}
else {this.getChildControl(m).setVisibility(j);this.getChildControl(C).setVisibility(j);}
;return K;}
,_createChildControlImpl:function(O,N){var M;switch(O){case a:M=new qx.ui.core.scroll.ScrollSlider();M.setPageStep(100);M.setFocusable(false);M.addListener(d,this._onChangeSliderValue,this);M.addListener(b,this._onSlideAnimationEnd,this);this._add(M,{flex:1});break;case m:M=new qx.ui.form.RepeatButton();M.setFocusable(false);M.addListener(g,this._onExecuteBegin,this);this._add(M);break;case C:M=new qx.ui.form.RepeatButton();M.setFocusable(false);M.addListener(g,this._onExecuteEnd,this);this._add(M);break;};return M||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,O);}
,_applyMaximum:function(P){this.getChildControl(a).setMaximum(P);}
,_applyPosition:function(Q){this.getChildControl(a).setValue(Q);}
,_applyKnobFactor:function(R){this.getChildControl(a).setKnobFactor(R);}
,_applyPageStep:function(S){this.getChildControl(a).setPageStep(S);}
,_applyOrientation:function(V,T){var U=this._getLayout();if(U){U.dispose();}
;if(V===w){this._setLayout(new qx.ui.layout.HBox());this.setAllowStretchX(true);this.setAllowStretchY(false);this.replaceState(q,w);this.getChildControl(m).replaceState(x,B);this.getChildControl(C).replaceState(D,u);}
else {this._setLayout(new qx.ui.layout.VBox());this.setAllowStretchX(false);this.setAllowStretchY(true);this.replaceState(w,q);this.getChildControl(m).replaceState(B,x);this.getChildControl(C).replaceState(u,D);}
;this.getChildControl(a).setOrientation(V);}
,scrollTo:function(X,W){this.getChildControl(a).slideTo(X,W);}
,scrollBy:function(ba,Y){this.getChildControl(a).slideBy(ba,Y);}
,scrollBySteps:function(bc,bb){var bd=this.getSingleStep();this.getChildControl(a).slideBy(bc*bd,bb);}
,updatePosition:function(be){this.getChildControl(a).updatePosition(be);}
,stopScrollAnimation:function(){this.getChildControl(a).stopSlideAnimation();}
,_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep(),50);}
,_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep(),50);}
,_onSlideAnimationEnd:function(){this.fireEvent(s);}
,_onChangeSliderValue:function(e){this.setPosition(e.getData());}
,_onResizeSlider:function(e){var bf=this.getChildControl(a).getChildControl(l);var bi=bf.getSizeHint();var bg=false;var bh=this.getChildControl(a).getInnerSize();if(this.getOrientation()==q){if(bh.height<bi.minHeight+this.__wx){bg=true;}
;}
else {if(bh.width<bi.minWidth+this.__wx){bg=true;}
;}
;if(bg){bf.exclude();}
else {bf.show();}
;}
}});}
)();
(function(){var a="",b="qx.ui.form.MForm",c="Boolean",d="_applyValid",f="changeLocale",g="changeRequired",h="changeValid",i="qx.dynlocale",j="changeInvalidMessage",k="String",l="invalid";qx.Mixin.define(b,{construct:function(){if(qx.core.Environment.get(i)){qx.locale.Manager.getInstance().addListener(f,this.__ou,this);}
;}
,properties:{valid:{check:c,init:true,apply:d,event:h},required:{check:c,init:false,event:g},invalidMessage:{check:k,init:a,event:j},requiredInvalidMessage:{check:k,nullable:true,event:j}},members:{_applyValid:function(n,m){n?this.removeState(l):this.addState(l);}
,__ou:qx.core.Environment.select(i,{"true":function(e){var o=this.getInvalidMessage();if(o&&o.translate){this.setInvalidMessage(o.translate());}
;var p=this.getRequiredInvalidMessage();if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());}
;}
,"false":null})},destruct:function(){if(qx.core.Environment.get(i)){qx.locale.Manager.getInstance().removeListener(f,this.__ou,this);}
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
(function(){var a="slider",b="hovered",c="mousedown",d="pressed",f="px",g="PageUp",h="changeValue",i="mouseout",j="frame",k="x",l="end",m='qx.event.type.Data',n="Left",o="Down",p="Integer",q="Up",r="dblclick",s="qx.ui.form.Slider",t="PageDown",u="mousewheel",v="interval",w="_applyValue",x="_applyKnobFactor",y="End",z="mousemove",A="height",B="y",C="resize",D="vertical",E="Right",F="width",G="_applyOrientation",H="left",I="Home",J="mouseover",K="floor",L="_applyMinimum",M="click",N="top",O="changeMaximum",P="keypress",Q="slideAnimationEnd",R="knob",S="ceil",T='qx.event.type.Event',U="mouseup",V="horizontal",W="losecapture",X="contextmenu",Y="_applyMaximum",bd="Number",be="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",bf="changeMinimum";qx.Class.define(s,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(bg){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.Canvas());this.addListener(P,this._onKeyPress);this.addListener(u,this._onMouseWheel);this.addListener(c,this._onMouseDown);this.addListener(U,this._onMouseUp);this.addListener(W,this._onMouseUp);this.addListener(C,this._onUpdate);this.addListener(X,this._onStopEvent);this.addListener(M,this._onStopEvent);this.addListener(r,this._onStopEvent);if(bg!=null){this.setOrientation(bg);}
else {this.initOrientation();}
;}
,events:{changeValue:m,slideAnimationEnd:T},properties:{appearance:{refine:true,init:a},focusable:{refine:true,init:true},orientation:{check:[V,D],init:V,apply:G},value:{check:be,init:0,apply:w,nullable:true},minimum:{check:p,init:0,apply:L,event:bf},maximum:{check:p,init:100,apply:Y,event:O},singleStep:{check:p,init:1},pageStep:{check:p,init:10},knobFactor:{check:bd,apply:x,nullable:true}},members:{__wz:null,__wA:null,__wB:null,__wC:null,__wD:null,__wE:null,__wF:null,__wG:null,__ju:null,__wH:null,__wI:null,__wJ:null,__pa:null,_forwardStates:{invalid:true},renderLayout:function(bi,top,bh,bj){qx.ui.core.Widget.prototype.renderLayout.call(this,bi,top,bh,bj);this._updateKnobPosition();}
,_createChildControlImpl:function(bm,bl){var bk;switch(bm){case R:bk=new qx.ui.core.Widget();bk.addListener(C,this._onUpdate,this);bk.addListener(J,this._onMouseOver);bk.addListener(i,this._onMouseOut);this._add(bk);break;};return bk||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bm);}
,_onMouseOver:function(e){this.addState(b);}
,_onMouseOut:function(e){this.removeState(b);}
,_onMouseWheel:function(e){var bo=this.getOrientation()===V?k:B;var bp=e.getWheelDelta(bo);if(qx.event.handler.MouseEmulation.ON){this.slideBy(bp);}
else {var bn=bp>0?1:bp<0?-1:0;this.slideBy(bn*this.getSingleStep());}
;e.stop();}
,_onKeyPress:function(e){var br=this.getOrientation()===V;var bq=br?n:q;var forward=br?E:o;switch(e.getKeyIdentifier()){case forward:this.slideForward();break;case bq:this.slideBack();break;case t:this.slidePageForward(100);break;case g:this.slidePageBack(100);break;case I:this.slideToBegin(200);break;case y:this.slideToEnd(200);break;default:return;};e.stop();}
,_onMouseDown:function(e){if(this.__wC){return;}
;var bu=this.__nP;var bs=this.getChildControl(R);var bt=bu?H:N;var by=bu?e.getDocumentLeft():e.getDocumentTop();var bA=this.getDecorator();bA=qx.theme.manager.Decoration.getInstance().resolve(bA);if(bu){var bx=bA?bA.getInsets().left:0;var bw=(this.getPaddingLeft()||0)+bx;}
else {var bx=bA?bA.getInsets().top:0;var bw=(this.getPaddingTop()||0)+bx;}
;var bz=this.__wz=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bt];bz+=bw;var bv=this.__wA=qx.bom.element.Location.get(bs.getContentElement().getDomElement())[bt];if(e.getTarget()===bs){this.__wC=true;if(!this.__wH){this.__wH=new qx.event.Timer(100);this.__wH.addListener(v,this._fireValue,this);}
;this.__wH.start();this.__wD=by+bz-bv;bs.addState(d);}
else {this.__wE=true;this.__wF=by<=bv?-1:1;this.__wL(e);this._onInterval();if(!this.__ju){this.__ju=new qx.event.Timer(100);this.__ju.addListener(v,this._onInterval,this);}
;this.__ju.start();}
;this.addListener(z,this._onMouseMove);this.capture();e.stopPropagation();}
,_onMouseUp:function(e){if(this.__wC){this.releaseCapture();delete this.__wC;this.__wH.stop();this._fireValue();delete this.__wD;this.getChildControl(R).removeState(d);if(e.getType()===U){var bC;var bD;var bB;if(this.__nP){bC=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__wz);bB=qx.bom.element.Location.get(this.getContentElement().getDomElement())[N];bD=e.getDocumentTop()-(bB+this.getChildControl(R).getBounds().top);}
else {bC=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__wz);bB=qx.bom.element.Location.get(this.getContentElement().getDomElement())[H];bD=e.getDocumentLeft()-(bB+this.getChildControl(R).getBounds().left);}
;if(bD<0||bD>this.__wB||bC<0||bC>this.__wB){this.getChildControl(R).removeState(b);}
;}
;}
else if(this.__wE){this.__ju.stop();this.releaseCapture();delete this.__wE;delete this.__wF;delete this.__wG;}
;this.removeListener(z,this._onMouseMove);if(e.getType()===U){e.stopPropagation();}
;}
,_onMouseMove:function(e){if(this.__wC){var bF=this.__nP?e.getDocumentLeft():e.getDocumentTop();var bE=bF-this.__wD;this.slideTo(this._positionToValue(bE));}
else if(this.__wE){this.__wL(e);}
;e.stopPropagation();}
,_onInterval:function(e){var bG=this.getValue()+(this.__wF*this.getPageStep());if(bG<this.getMinimum()){bG=this.getMinimum();}
else if(bG>this.getMaximum()){bG=this.getMaximum();}
;var bH=this.__wF==-1;if((bH&&bG<=this.__wG)||(!bH&&bG>=this.__wG)){bG=this.__wG;}
;this.slideTo(bG);}
,_onUpdate:function(e){var bJ=this.getInnerSize();var bK=this.getChildControl(R).getBounds();var bI=this.__nP?F:A;this._updateKnobSize();this.__wK=bJ[bI]-bK[bI];this.__wB=bK[bI];this._updateKnobPosition();}
,__nP:false,__wK:0,__wL:function(e){var bL=this.__nP;var bS=bL?e.getDocumentLeft():e.getDocumentTop();var bV=this.__wz;var bM=this.__wA;var bW=this.__wB;var bT=bS-bV;if(bS>=bM){bT-=bW;}
;var bP=this._positionToValue(bT);var bN=this.getMinimum();var bO=this.getMaximum();if(bP<bN){bP=bN;}
else if(bP>bO){bP=bO;}
else {var bU=this.getValue();var bR=this.getPageStep();var bQ=this.__wF<0?K:S;bP=bU+(Math[bQ]((bP-bU)/bR)*bR);}
;if(this.__wG==null||(this.__wF==-1&&bP<=this.__wG)||(this.__wF==1&&bP>=this.__wG)){this.__wG=bP;}
;}
,_positionToValue:function(bY){var bX=this.__wK;if(bX==null||bX==0){return 0;}
;var cb=bY/bX;if(cb<0){cb=0;}
else if(cb>1){cb=1;}
;var ca=this.getMaximum()-this.getMinimum();return this.getMinimum()+Math.round(ca*cb);}
,_valueToPosition:function(cf){var cc=this.__wK;if(cc==null){return 0;}
;var cd=this.getMaximum()-this.getMinimum();if(cd==0){return 0;}
;var cf=cf-this.getMinimum();var ce=cf/cd;if(ce<0){ce=0;}
else if(ce>1){ce=1;}
;return Math.round(cc*ce);}
,_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));}
,_setKnobPosition:function(ci){var cg=this.getChildControl(R);var ch=this.getDecorator();ch=qx.theme.manager.Decoration.getInstance().resolve(ch);var content=cg.getContentElement();if(this.__nP){if(ch&&ch.getPadding()){ci+=ch.getPadding().left;}
;ci+=this.getPaddingLeft()||0;content.setStyle(H,ci+f,true);}
else {if(ch&&ch.getPadding()){ci+=ch.getPadding().top;}
;ci+=this.getPaddingTop()||0;content.setStyle(N,ci+f,true);}
;}
,_updateKnobSize:function(){var ck=this.getKnobFactor();if(ck==null){return;}
;var cj=this.getInnerSize();if(cj==null){return;}
;if(this.__nP){this.getChildControl(R).setWidth(Math.round(ck*cj.width));}
else {this.getChildControl(R).setHeight(Math.round(ck*cj.height));}
;}
,slideToBegin:function(cl){this.slideTo(this.getMinimum(),cl);}
,slideToEnd:function(cm){this.slideTo(this.getMaximum(),cm);}
,slideForward:function(){this.slideBy(this.getSingleStep());}
,slideBack:function(){this.slideBy(-this.getSingleStep());}
,slidePageForward:function(cn){this.slideBy(this.getPageStep(),cn);}
,slidePageBack:function(co){this.slideBy(-this.getPageStep(),co);}
,slideBy:function(cq,cp){this.slideTo(this.getValue()+cq,cp);}
,slideTo:function(cs,cr){this.stopSlideAnimation();if(cr){this.__wN(cs,cr);}
else {this.updatePosition(cs);}
;}
,updatePosition:function(ct){this.setValue(this.__wM(ct));}
,stopSlideAnimation:function(){if(this.__pa){this.__pa.cancelSequence();this.__pa=null;}
;}
,__wM:function(cu){if(cu<this.getMinimum()){cu=this.getMinimum();}
else if(cu>this.getMaximum()){cu=this.getMaximum();}
else {cu=this.getMinimum()+Math.round((cu-this.getMinimum())/this.getSingleStep())*this.getSingleStep();}
;return cu;}
,__wN:function(cw,cv){cw=this.__wM(cw);var cx=this.getValue();this.__pa=new qx.bom.AnimationFrame();this.__pa.on(j,function(cy){this.setValue(parseInt(cy/cv*(cw-cx)+cx));}
,this);this.__pa.on(l,function(){this.setValue(cw);this.__pa=null;this.fireEvent(Q);}
,this);this.__pa.startSequence(cv);}
,_applyOrientation:function(cB,cA){var cz=this.getChildControl(R);this.__nP=cB===V;if(this.__nP){this.removeState(D);cz.removeState(D);this.addState(V);cz.addState(V);cz.setLayoutProperties({top:0,right:null,bottom:0});}
else {this.removeState(V);cz.removeState(V);this.addState(D);cz.addState(D);cz.setLayoutProperties({right:0,bottom:null,left:0});}
;this._updateKnobPosition();}
,_applyKnobFactor:function(cD,cC){if(cD!=null){this._updateKnobSize();}
else {if(this.__nP){this.getChildControl(R).resetWidth();}
else {this.getChildControl(R).resetHeight();}
;}
;}
,_applyValue:function(cF,cE){if(cF!=null){this._updateKnobPosition();if(this.__wC){this.__wJ=[cF,cE];}
else {this.fireEvent(h,qx.event.type.Data,[cF,cE]);}
;}
else {this.resetValue();}
;}
,_fireValue:function(){if(!this.__wJ){return;}
;var cG=this.__wJ;this.__wJ=null;this.fireEvent(h,qx.event.type.Data,cG);}
,_applyMinimum:function(cI,cH){if(this.getValue()<cI){this.setValue(cI);}
;this._updateKnobPosition();}
,_applyMaximum:function(cK,cJ){if(this.getValue()>cK){this.setValue(cK);}
;this._updateKnobPosition();}
}});}
)();
(function(){var a="horizontal",b="mousewheel",c="qx.ui.core.scroll.ScrollSlider",d="keypress";qx.Class.define(c,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);this.removeListener(d,this._onKeyPress);this.removeListener(b,this._onMouseWheel);}
,members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);if(this.getOrientation()===a){g.width=0;}
else {g.height=0;}
;return g;}
}});}
)();
(function(){var a="press",b="__ju",c="hovered",d="qx.ui.form.RepeatButton",f="release",g="Enter",h="pressed",i="interval",j="qx.event.type.Event",k="Space",l="abandoned",m="Integer",n="execute";qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);this.__ju=new qx.event.AcceleratingTimer();this.__ju.addListener(i,this._onInterval,this);}
,events:{"execute":j,"press":j,"release":j},properties:{interval:{check:m,init:100},firstInterval:{check:m,init:500},minTimer:{check:m,init:20},timerDecrease:{check:m,init:2}},members:{__sN:null,__ju:null,press:function(){if(this.isEnabled()){if(!this.hasState(h)){this.__sO();}
;this.removeState(l);this.addState(h);}
;}
,release:function(q){if(!this.isEnabled()){return;}
;if(this.hasState(h)){if(!this.__sN){this.execute();}
;}
;this.removeState(h);this.removeState(l);this.__sP();}
,_applyEnabled:function(s,r){qx.ui.form.Button.prototype._applyEnabled.call(this,s,r);if(!s){this.removeState(h);this.removeState(l);this.__sP();}
;}
,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;if(this.hasState(l)){this.removeState(l);this.addState(h);this.__ju.start();}
;this.addState(c);}
,_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;this.removeState(c);if(this.hasState(h)){this.removeState(h);this.addState(l);this.__ju.stop();}
;}
,_onMouseDown:function(e){if(!e.isLeftPressed()){return;}
;this.capture();this.__sO();e.stopPropagation();}
,_onMouseUp:function(e){this.releaseCapture();if(!this.hasState(l)){this.addState(c);if(this.hasState(h)&&!this.__sN){this.execute();}
;}
;this.__sP();e.stopPropagation();}
,_onKeyUp:function(e){switch(e.getKeyIdentifier()){case g:case k:if(this.hasState(h)){if(!this.__sN){this.execute();}
;this.removeState(h);this.removeState(l);e.stopPropagation();this.__sP();}
;};}
,_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:case k:this.removeState(l);this.addState(h);e.stopPropagation();this.__sO();};}
,_onInterval:function(e){this.__sN=true;this.fireEvent(n);}
,__sO:function(){this.fireEvent(a);this.__sN=false;this.__ju.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();this.removeState(l);this.addState(h);}
,__sP:function(){this.fireEvent(f);this.__ju.stop();this.removeState(l);this.removeState(h);}
},destruct:function(){this._disposeObjects(b);}
});}
)();
(function(){var a="Integer",b="__ju",c="interval",d="qx.event.type.Event",e="qx.event.AcceleratingTimer";qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__ju=new qx.event.Timer(this.getInterval());this.__ju.addListener(c,this._onInterval,this);}
,events:{"interval":d},properties:{interval:{check:a,init:100},firstInterval:{check:a,init:500},minimum:{check:a,init:20},decrease:{check:a,init:2}},members:{__ju:null,__sQ:null,start:function(){this.__ju.setInterval(this.getFirstInterval());this.__ju.start();}
,stop:function(){this.__ju.stop();this.__sQ=null;}
,_onInterval:function(){this.__ju.stop();if(this.__sQ==null){this.__sQ=this.getInterval();}
;this.__sQ=Math.max(this.getMinimum(),this.__sQ-this.getDecrease());this.__ju.setInterval(this.__sQ);this.__ju.start();this.fireEvent(c);}
},destruct:function(){this._disposeObjects(b);}
});}
)();
(function(){var a="touchmove",b="End",c="scrollY",d="_computeScrollbars",f="Left",g="X",h="auto",i="scrollAnimation",j="mousewheel",k="scrollbarX",l="scrollbar-y",m="getDocument",n="scrollbar-",o="event.touch",p="corner",q="os.scrollBarOverlayed",r="scrollarea",s="scrollAnimationEnd",t="vertical",u="scrollX",v="changeVisibility",w="off",x="touchstart",y="horizontal",z="scrollbar-x",A="Y",B='qx.event.type.Event',C="qx.ui.core.scroll.AbstractScrollArea",D="abstract",E="update",F="scrollbarY",G="pane",H="Top",I="on",J="x",K="scroll";qx.Class.define(C,{extend:qx.ui.core.Widget,include:[qx.ui.core.scroll.MScrollBarFactory,qx.ui.core.scroll.MWheelHandling],type:D,statics:{DEFAULT_SCROLLBAR_WIDTH:14},construct:function(){qx.ui.core.Widget.call(this);if(qx.core.Environment.get(q)){this._setLayout(new qx.ui.layout.Canvas());}
else {var L=new qx.ui.layout.Grid();L.setColumnFlex(0,1);L.setRowFlex(0,1);this._setLayout(L);}
;this.addListener(j,this._onMouseWheel,this);if(qx.core.Environment.get(o)){this.addListener(a,this._onTouchMove,this);this.addListener(x,function(){this.__cO={"x":0,"y":0};}
,this);this.__cO={};this.__hK={};}
;}
,events:{scrollAnimationXEnd:B,scrollAnimationYEnd:B},properties:{appearance:{refine:true,init:r},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[h,I,w],init:h,themeable:true,apply:d},scrollbarY:{check:[h,I,w],init:h,themeable:true,apply:d},scrollbar:{group:[k,F]}},members:{__cO:null,__hK:null,_createChildControlImpl:function(O,N){var M;switch(O){case G:M=new qx.ui.core.scroll.ScrollPane();M.addListener(E,this._computeScrollbars,this);M.addListener(u,this._onScrollPaneX,this);M.addListener(c,this._onScrollPaneY,this);if(qx.core.Environment.get(q)){this._add(M,{edge:0});}
else {this._add(M,{row:0,column:0});}
;break;case z:M=this._createScrollBar(y);M.setMinWidth(0);M.exclude();M.addListener(K,this._onScrollBarX,this);M.addListener(v,this._onChangeScrollbarXVisibility,this);M.addListener(s,this._onScrollAnimationEnd.bind(this,g));if(qx.core.Environment.get(q)){M.setMinHeight(qx.ui.core.scroll.AbstractScrollArea.DEFAULT_SCROLLBAR_WIDTH);this._add(M,{bottom:0,right:0,left:0});}
else {this._add(M,{row:1,column:0});}
;break;case l:M=this._createScrollBar(t);M.setMinHeight(0);M.exclude();M.addListener(K,this._onScrollBarY,this);M.addListener(v,this._onChangeScrollbarYVisibility,this);M.addListener(s,this._onScrollAnimationEnd.bind(this,A));if(qx.core.Environment.get(q)){M.setMinWidth(qx.ui.core.scroll.AbstractScrollArea.DEFAULT_SCROLLBAR_WIDTH);this._add(M,{right:0,bottom:0,top:0});}
else {this._add(M,{row:0,column:1});}
;break;case p:M=new qx.ui.core.Widget();M.setWidth(0);M.setHeight(0);M.exclude();if(!qx.core.Environment.get(q)){this._add(M,{row:1,column:1});}
;break;};return M||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,O);}
,getPaneSize:function(){return this.getChildControl(G).getInnerSize();}
,getItemTop:function(P){return this.getChildControl(G).getItemTop(P);}
,getItemBottom:function(Q){return this.getChildControl(G).getItemBottom(Q);}
,getItemLeft:function(R){return this.getChildControl(G).getItemLeft(R);}
,getItemRight:function(S){return this.getChildControl(G).getItemRight(S);}
,scrollToX:function(U,T){qx.ui.core.queue.Manager.flush();this.getChildControl(z).scrollTo(U,T);}
,scrollByX:function(W,V){qx.ui.core.queue.Manager.flush();this.getChildControl(z).scrollBy(W,V);}
,getScrollX:function(){var X=this.getChildControl(z,true);return X?X.getPosition():0;}
,scrollToY:function(ba,Y){qx.ui.core.queue.Manager.flush();this.getChildControl(l).scrollTo(ba,Y);}
,scrollByY:function(bc,bb){qx.ui.core.queue.Manager.flush();this.getChildControl(l).scrollBy(bc,bb);}
,getScrollY:function(){var bd=this.getChildControl(l,true);return bd?bd.getPosition():0;}
,stopScrollAnimationX:function(){var be=this.getChildControl(z,true);if(be){be.stopScrollAnimation();}
;}
,stopScrollAnimationY:function(){var bf=this.getChildControl(l,true);if(bf){bf.stopScrollAnimation();}
;}
,_onScrollAnimationEnd:function(bg){this.fireEvent(i+bg+b);}
,_onScrollBarX:function(e){this.getChildControl(G).scrollToX(e.getData());}
,_onScrollBarY:function(e){this.getChildControl(G).scrollToY(e.getData());}
,_onScrollPaneX:function(e){var bh=this.getChildControl(z);if(bh){bh.updatePosition(e.getData());}
;}
,_onScrollPaneY:function(e){var bi=this.getChildControl(l);if(bi){bi.updatePosition(e.getData());}
;}
,_onTouchMove:function(e){}
,_onTouchMoveDirectional:function(bn,e){var bj=(bn==J?f:H);var bl=this.getChildControl(n+bn,true);var bk=this._isChildControlVisible(n+bn);if(bk&&bl){if(this.__cO[bn]==0){var bm=0;}
else {var bm=-(e[m+bj]()-this.__cO[bn]);}
;this.__cO[bn]=e[m+bj]();bl.scrollBy(bm);if(this.__hK[bn]){clearTimeout(this.__hK[bn]);this.__hK[bn]=null;}
;this.__hK[bn]=setTimeout(qx.lang.Function.bind(function(bo){this.__hN(bo,bn);}
,this,bm),100);}
;}
,__hN:function(bp,br){this.__hK[br]=null;var bs=this._isChildControlVisible(n+br);if(bp==0||!bs){return;}
;if(bp>0){bp=Math.max(0,bp-3);}
else {bp=Math.min(0,bp+3);}
;this.__hK[br]=setTimeout(qx.lang.Function.bind(function(bu,bt){this.__hN(bu,bt);}
,this,bp,br),20);var bq=this.getChildControl(n+br,true);bq.scrollBy(bp);}
,_onChangeScrollbarXVisibility:function(e){var bv=this._isChildControlVisible(z);var bw=this._isChildControlVisible(l);if(!bv){this.scrollToX(0);}
;bv&&bw?this._showChildControl(p):this._excludeChildControl(p);}
,_onChangeScrollbarYVisibility:function(e){var bx=this._isChildControlVisible(z);var by=this._isChildControlVisible(l);if(!by){this.scrollToY(0);}
;bx&&by?this._showChildControl(p):this._excludeChildControl(p);}
,_computeScrollbars:function(){var bF=this.getChildControl(G);var content=bF.getChildren()[0];if(!content){this._excludeChildControl(z);this._excludeChildControl(l);return;}
;var bz=this.getInnerSize();var bE=bF.getInnerSize();var bC=bF.getScrollSize();if(!bE||!bC){return;}
;var bG=this.getScrollbarX();var bH=this.getScrollbarY();if(bG===h&&bH===h){var bD=bC.width>bz.width;var bI=bC.height>bz.height;if((bD||bI)&&!(bD&&bI)){if(bD){bI=bC.height>bE.height;}
else if(bI){bD=bC.width>bE.width;}
;}
;}
else {var bD=bG===I;var bI=bH===I;if(bC.width>(bD?bE.width:bz.width)&&bG===h){bD=true;}
;if(bC.height>(bD?bE.height:bz.height)&&bH===h){bI=true;}
;}
;if(bD){var bB=this.getChildControl(z);bB.show();bB.setMaximum(Math.max(0,bC.width-bE.width));bB.setKnobFactor((bC.width===0)?0:bE.width/bC.width);}
else {this._excludeChildControl(z);}
;if(bI){var bA=this.getChildControl(l);bA.show();bA.setMaximum(Math.max(0,bC.height-bE.height));bA.setKnobFactor((bC.height===0)?0:bE.height/bC.height);}
else {this._excludeChildControl(l);}
;}
}});}
)();
(function(){var a="resize",b="scrollY",c="scrollAnimationEnd",d="update",f="scrollX",g="_applyScrollX",h="_applyScrollY",i="frame",j="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",k="appear",l="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",m="qx.event.type.Event",n="qx.ui.core.scroll.ScrollPane",o="end",p="scroll";qx.Class.define(n,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);this.set({minWidth:0,minHeight:0});this._setLayout(new qx.ui.layout.Grow());this.addListener(a,this._onUpdate);var q=this.getContentElement();q.addListener(p,this._onScroll,this);q.addListener(k,this._onAppear,this);}
,events:{update:m,scrollAnimationEnd:m},properties:{scrollX:{check:j,apply:g,event:f,init:0},scrollY:{check:l,apply:h,event:b,init:0}},members:{__pb:null,add:function(r){var s=this._getChildren()[0];if(s){this._remove(s);s.removeListener(a,this._onUpdate,this);}
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
;this.stopScrollAnimation();if(L){var N=this.getScrollX();this.__pb=new qx.bom.AnimationFrame();this.__pb.on(o,function(){this.setScrollX(O);this.__pb=null;this.fireEvent(c);}
,this);this.__pb.on(i,function(Q){var P=parseInt(Q/L*(O-N)+N);this.setScrollX(P);}
,this);this.__pb.startSequence(L);}
else {this.setScrollX(O);}
;}
,scrollToY:function(U,R){var S=this.getScrollMaxY();if(U<0){U=0;}
else if(U>S){U=S;}
;this.stopScrollAnimation();if(R){var T=this.getScrollY();this.__pb=new qx.bom.AnimationFrame();this.__pb.on(o,function(){this.setScrollY(U);this.__pb=null;this.fireEvent(c);}
,this);this.__pb.on(i,function(W){var V=parseInt(W/R*(U-T)+T);this.setScrollY(V);}
,this);this.__pb.startSequence(R);}
else {this.setScrollY(U);}
;}
,scrollByX:function(x,X){this.scrollToX(this.getScrollX()+x,X);}
,scrollByY:function(y,Y){this.scrollToY(this.getScrollY()+y,Y);}
,stopScrollAnimation:function(){if(this.__pb){this.__pb.cancelSequence();this.__pb=null;}
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
},"tooltip":{include:gm,style:function(gM){return {backgroundColor:eB,textColor:fG,decorator:eB,padding:[1,3,2,3],offset:[15,5,5,5]};}
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
},"treevirtual-folder":{style:function(hj){return {icon:(hj.opened?ep:fn)};}
},"treevirtual-file":{include:ge,alias:ge,style:function(hk){return {icon:fk};}
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
},"cell-image":gE,"cell-boolean":gE,"cell-atom":gE,"cell-date":gE,"cell-html":gE,"htmlarea":{"include":eb,style:function(hX){return {backgroundColor:T};}
},"scrollbar":{},"scrollbar/slider":{},"scrollbar/slider/knob":{style:function(hY){var ia=Q;if(!hY.disabled){if(hY.hovered&&!hY.pressed&&!hY.checked){ia=gz;}
else if(hY.hovered&&(hY.pressed||hY.checked)){ia=ec;}
else if(hY.pressed||hY.checked){ia=eM;}
;}
;return {height:14,width:14,cursor:hY.disabled?undefined:ei,decorator:ia,minHeight:hY.horizontal?undefined:20,minWidth:hY.horizontal?20:undefined};}
},"scrollbar/button":{style:function(ib){var ic={};ic.padding=4;var id=eA;if(ib.left){id=gt;ic.marginRight=2;}
else if(ib.right){id+=gl;ic.marginLeft=2;}
else if(ib.up){id+=gy;ic.marginBottom=2;}
else {id+=V;ic.marginTop=2;}
;ic.icon=qx.theme.simple.Image.URLS[I+id];ic.cursor=ei;ic.decorator=L;return ic;}
},"scrollbar/button-begin":j,"scrollbar/button-end":j,"scrollarea/corner":{style:function(ie){return {backgroundColor:h};}
},"scrollarea":eb,"scrollarea/pane":eb,"scrollarea/scrollbar-x":fu,"scrollarea/scrollbar-y":fu,"textfield":{style:function(ig){var ii;if(ig.disabled){ii=P;}
else if(ig.showingPlaceholder){ii=fm;}
else {ii=undefined;}
;var ij;var ih;if(ig.disabled){ij=fL;ih=[2,3];}
else if(ig.invalid){ij=l;ih=[1,2];}
else if(ig.focused){ij=ej;ih=[1,2];}
else {ih=[2,3];ij=fL;}
;return {decorator:ij,padding:ih,textColor:ii,backgroundColor:ig.disabled?g:T};}
},"textarea":ey,"radiobutton/icon":{style:function(ik){var il=A;if(ik.focused&&!ik.invalid){il=ee;}
;il+=ik.invalid&&!ik.disabled?ed:eA;var im;if(ik.disabled&&ik.checked){im=eK;}
else if(ik.disabled){im=g;}
else if(ik.checked){im=gh;}
;return {decorator:il,width:12,height:12,backgroundColor:im};}
},"radiobutton":{style:function(io){return {icon:qx.theme.simple.Image.URLS[gn]};}
},"form-renderer-label":{include:eu,style:function(){return {paddingTop:3};}
},"checkbox":{alias:gx,style:function(ip){var iq;if(ip.checked){iq=qx.theme.simple.Image.URLS[gb];}
else if(ip.undetermined){iq=qx.theme.simple.Image.URLS[eU];}
else {iq=qx.theme.simple.Image.URLS[gn];}
;return {icon:iq,gap:6};}
},"checkbox/icon":{style:function(ir){var it=X;if(ir.focused&&!ir.invalid){it=fR;}
;it+=ir.invalid&&!ir.disabled?ed:eA;var is;if(ir.checked){is=2;}
else if(ir.undetermined){is=[4,2];}
;return {decorator:it,width:12,height:12,padding:is,backgroundColor:T};}
},"spinner":{style:function(iu){return {textColor:iu.disabled?P:undefined};}
},"spinner/textfield":ey,"spinner/upbutton":{alias:m,include:m,style:function(iv){var iw=n;if(iv.hovered&&!iv.pressed&&!iv.checked){iw=v;}
else if(iv.hovered&&(iv.pressed||iv.checked)){iw=gk;}
else if(iv.pressed||iv.checked){iw=b;}
;return {icon:qx.theme.simple.Image.URLS[fe],decorator:iw,width:17};}
},"spinner/downbutton":{alias:m,include:m,style:function(ix){var iy=fa;if(ix.hovered&&!ix.pressed&&!ix.checked){iy=q;}
else if(ix.hovered&&(ix.pressed||ix.checked)){iy=eF;}
else if(ix.pressed||ix.checked){iy=eJ;}
;return {icon:qx.theme.simple.Image.URLS[G],decorator:iy,width:17};}
},"selectbox":z,"selectbox/atom":gx,"selectbox/popup":gm,"selectbox/list":{alias:F,include:F,style:function(){return {decorator:undefined};}
},"selectbox/arrow":{include:gp,style:function(iz){return {source:qx.theme.simple.Image.URLS[H],paddingRight:4,paddingLeft:5};}
},"combobox":{},"combobox/button":{alias:z,include:z,style:function(iA){var iB=fX;if(iA.hovered&&!iA.pressed&&!iA.checked){iB=fY;}
else if(iA.hovered&&(iA.pressed||iA.checked)){iB=gq;}
else if(iA.pressed||iA.checked){iB=gs;}
;return {icon:qx.theme.simple.Image.URLS[H],decorator:iB,padding:[0,5],width:19};}
},"combobox/popup":gm,"combobox/list":{alias:F},"combobox/textfield":ey,"datefield":ey,"datefield/button":{alias:m,include:m,style:function(iC){return {icon:eV,padding:[0,0,0,3],backgroundColor:undefined,decorator:undefined,width:19};}
},"datefield/textfield":{alias:ey,include:ey,style:function(iD){return {decorator:undefined,padding:0};}
},"datefield/list":{alias:fT,include:fT,style:function(iE){return {decorator:undefined};}
},"list":{alias:fw,include:ey},"listitem":{alias:gx,style:function(iF){var iG=[3,5,3,5];if(iF.lead){iG=[2,4,2,4];}
;if(iF.dragover){iG[2]-=2;}
;var iH;if(iF.selected){iH=gh;if(iF.disabled){iH+=et;}
;}
;return {gap:4,padding:iG,backgroundColor:iH,textColor:iF.selected?fs:undefined,decorator:iF.lead?fW:iF.dragover?fv:undefined};}
},"slider":{style:function(iI){var iK;var iJ;if(iI.disabled){iK=fL;iJ=[2,3];}
else if(iI.invalid){iK=l;iJ=[1,2];}
else if(iI.focused){iK=ej;iJ=[1,2];}
else {iJ=[2,3];iK=fL;}
;return {decorator:iK,padding:iJ};}
},"slider/knob":ez,"button-frame":{alias:gx,style:function(iL){var iM=L;if(!iL.disabled){if(iL.hovered&&!iL.pressed&&!iL.checked){iM=em;}
else if(iL.hovered&&(iL.pressed||iL.checked)){iM=ew;}
else if(iL.pressed||iL.checked){iM=eD;}
;}
;if(iL.invalid&&!iL.disabled){iM+=ed;}
else if(iL.focused){iM+=gC;}
;return {decorator:iM,padding:[3,8],cursor:iL.disabled?undefined:ei,minWidth:5,minHeight:5};}
},"button-frame/label":{alias:Y,style:function(iN){return {textColor:iN.disabled?P:undefined};}
},"button":{alias:z,include:z,style:function(iO){return {center:true};}
},"hover-button":{alias:fC,include:fC,style:function(iP){return {decorator:iP.hovered?fO:undefined};}
},"menubutton":{include:fC,alias:fC,style:function(iQ){return {icon:qx.theme.simple.Image.URLS[H],iconPosition:gl};}
},"splitbutton":{},"splitbutton/button":{alias:gx,style:function(iR){var iS=L;if(!iR.disabled){if(iR.pressed||iR.checked){iS+=J;}
;if(iR.hovered){iS+=gf;}
;}
;if(iR.focused){iS+=gC;}
;iS+=eP;return {decorator:iS,padding:[3,8],cursor:iR.disabled?undefined:ei};}
},"splitbutton/arrow":{style:function(iT){var iU=L;if(!iT.disabled){if(iT.pressed||iT.checked){iU+=J;}
;if(iT.hovered){iU+=gf;}
;}
;if(iT.focused){iU+=gC;}
;iU+=y;return {icon:qx.theme.simple.Image.URLS[H],decorator:iU,cursor:iT.disabled?undefined:ei,padding:[3,4]};}
},"groupbox":{},"groupbox/legend":{alias:gx,style:function(iV){return {textColor:iV.invalid?fg:undefined,padding:5,margin:4,font:N};}
},"groupbox/frame":{style:function(iW){return {backgroundColor:h,padding:[6,9],margin:[18,2,2,2],decorator:gH};}
},"check-groupbox":eG,"check-groupbox/legend":{alias:X,include:X,style:function(iX){return {textColor:iX.invalid?fg:undefined,padding:5,margin:4,font:N};}
},"radio-groupbox":eG,"radio-groupbox/legend":{alias:A,include:A,style:function(iY){return {textColor:iY.invalid?fg:undefined,padding:5,margin:4,font:N};}
},"tree-folder/open":{include:gp,style:function(ja){return {source:ja.opened?qx.theme.simple.Image.URLS[R]:qx.theme.simple.Image.URLS[gB]};}
},"tree-folder":{style:function(jb){var jc;if(jb.selected){jc=gh;if(jb.disabled){jc+=et;}
;}
;return {padding:[2,8,2,5],icon:jb.opened?ep:fn,backgroundColor:jc,iconOpened:ep};}
},"tree-folder/icon":{include:gp,style:function(jd){return {padding:[0,4,0,0]};}
},"tree-folder/label":{style:function(je){return {padding:[1,2],textColor:je.selected&&!je.disabled?fs:undefined};}
},"tree-file":{include:fp,alias:fp,style:function(jf){return {icon:fk};}
},"tree":{include:F,alias:F,style:function(jg){return {contentPadding:jg.invalid&&!jg.disabled?[3,0]:[4,1],padding:jg.focused?0:1};}
},"window":{style:function(jh){return {contentPadding:[10,10,10,10],backgroundColor:h,decorator:jh.maximized?undefined:jh.active?gv:gg};}
},"window-resize-frame":O,"window/pane":{},"window/captionbar":{style:function(ji){return {backgroundColor:ji.active?dR:g,padding:8,font:N,decorator:t};}
},"window/icon":{style:function(jj){return {marginRight:4};}
},"window/title":{style:function(jk){return {cursor:fJ,font:N,marginRight:20,alignY:eS};}
},"window/minimize-button":{alias:fC,style:function(jl){return {icon:qx.theme.simple.Image.URLS[fP],padding:[1,2],cursor:jl.disabled?undefined:ei};}
},"window/restore-button":{alias:fC,style:function(jm){return {icon:qx.theme.simple.Image.URLS[M],padding:[1,2],cursor:jm.disabled?undefined:ei};}
},"window/maximize-button":{alias:fC,style:function(jn){return {icon:qx.theme.simple.Image.URLS[dU],padding:[1,2],cursor:jn.disabled?undefined:ei};}
},"window/close-button":{alias:fC,style:function(jo){return {marginLeft:2,icon:qx.theme.simple.Image.URLS[dW],padding:[1,2],cursor:jo.disabled?undefined:ei};}
},"window/statusbar":{style:function(jp){return {decorator:S,padding:[2,6]};}
},"window/statusbar-text":eu,"datechooser":{style:function(jq){return {decorator:gj,minWidth:220};}
},"datechooser/navigation-bar":{style:function(jr){return {backgroundColor:h,textColor:jr.disabled?P:jr.invalid?fg:undefined,padding:[2,10]};}
},"datechooser/last-year-button-tooltip":eB,"datechooser/last-month-button-tooltip":eB,"datechooser/next-year-button-tooltip":eB,"datechooser/next-month-button-tooltip":eB,"datechooser/last-year-button":fV,"datechooser/last-month-button":fV,"datechooser/next-year-button":fV,"datechooser/next-month-button":fV,"datechooser/button/icon":{},"datechooser/button":{style:function(js){var jt={width:17,show:eN,cursor:js.disabled?undefined:ei};if(js.lastYear){jt.icon=qx.theme.simple.Image.URLS[eO];}
else if(js.lastMonth){jt.icon=qx.theme.simple.Image.URLS[c];}
else if(js.nextYear){jt.icon=qx.theme.simple.Image.URLS[ek];}
else if(js.nextMonth){jt.icon=qx.theme.simple.Image.URLS[eW];}
;return jt;}
},"datechooser/month-year-label":{style:function(ju){return {font:N,textAlign:fE};}
},"datechooser/date-pane":{style:function(jv){return {decorator:dX,backgroundColor:h};}
},"datechooser/weekday":{style:function(jw){return {decorator:d,font:N,textAlign:fE,textColor:jw.disabled?P:jw.weekend?D:h,backgroundColor:jw.weekend?h:D,paddingTop:2};}
},"datechooser/day":{style:function(jx){return {textAlign:fE,decorator:jx.today?gj:undefined,textColor:jx.disabled?P:jx.selected?fs:jx.otherMonth?P:undefined,backgroundColor:jx.disabled?undefined:jx.selected?gh:undefined,padding:jx.today?[1,3]:[2,4]};}
},"datechooser/week":{style:function(jy){return {textAlign:fE,textColor:D,padding:[2,4],decorator:jy.header?ea:fb};}
},"progressbar":{style:function(jz){return {decorator:fA,padding:1,backgroundColor:T,width:200,height:20};}
},"progressbar/progress":{style:function(jA){return {backgroundColor:jA.disabled?eK:gh};}
},"toolbar":{style:function(jB){return {backgroundColor:dR,padding:0};}
},"toolbar/part":{style:function(jC){return {margin:[0,15]};}
},"toolbar/part/container":{},"toolbar/part/handle":{},"toolbar-separator":{style:function(jD){return {decorator:fd,margin:[7,0],width:4};}
},"toolbar-button":{alias:gx,style:function(jE){var jG=L;if(jE.disabled){jG=L;}
else if(jE.hovered&&!jE.pressed&&!jE.checked){jG=em;}
else if(jE.hovered&&(jE.pressed||jE.checked)){jG=ew;}
else if(jE.pressed||jE.checked){jG=eD;}
;if(jE.left){jG+=eP;}
else if(jE.right){jG+=y;}
else if(jE.middle){jG+=eT;}
;var jF=[7,10];if(jE.left||jE.middle||jE.right){jF=[7,0];}
;return {cursor:jE.disabled?undefined:ei,decorator:jG,margin:jF,padding:[3,5]};}
},"toolbar-menubutton":{alias:fS,include:fS,style:function(jH){return {showArrow:true};}
},"toolbar-menubutton/arrow":{alias:gp,include:gp,style:function(jI){return {source:qx.theme.simple.Image.URLS[H],cursor:jI.disabled?undefined:ei,padding:[0,5],marginLeft:2};}
},"toolbar-splitbutton":{},"toolbar-splitbutton/button":{alias:fS,include:fS,style:function(jJ){var jK=L;if(jJ.disabled){jK=L;}
else if(jJ.hovered&&!jJ.pressed&&!jJ.checked){jK=em;}
else if(jJ.hovered&&(jJ.pressed||jJ.checked)){jK=ew;}
else if(jJ.pressed||jJ.checked){jK=eD;}
;if(jJ.left){jK+=eP;}
else if(jJ.right){jK+=eT;}
else if(jJ.middle){jK+=eT;}
;return {icon:qx.theme.simple.Image.URLS[H],decorator:jK};}
},"toolbar-splitbutton/arrow":{alias:fS,include:fS,style:function(jL){var jM=L;if(jL.disabled){jM=L;}
else if(jL.hovered&&!jL.pressed&&!jL.checked){jM=em;}
else if(jL.hovered&&(jL.pressed||jL.checked)){jM=ew;}
else if(jL.pressed||jL.checked){jM=eD;}
;if(jL.left){jM+=eT;}
else if(jL.right){jM+=y;}
else if(jL.middle){jM+=eT;}
;return {icon:qx.theme.simple.Image.URLS[H],decorator:jM};}
},"tabview":{},"tabview/bar":{alias:o,style:function(jN){var jO=0,jR=0,jP=0,jQ=0;if(jN.barTop){jP-=1;}
else if(jN.barBottom){jO-=1;}
else if(jN.barRight){jQ-=1;}
else {jR-=1;}
;return {marginBottom:jP,marginTop:jO,marginLeft:jQ,marginRight:jR};}
},"tabview/bar/button-forward":{include:fj,alias:fj,style:function(jS){if(jS.barTop){return {marginTop:4,marginBottom:2,decorator:null};}
else if(jS.barBottom){return {marginTop:2,marginBottom:4,decorator:null};}
else if(jS.barLeft){return {marginLeft:4,marginRight:2,decorator:null};}
else {return {marginLeft:2,marginRight:4,decorator:null};}
;}
},"tabview/bar/button-backward":{include:eh,alias:eh,style:function(jT){if(jT.barTop){return {marginTop:4,marginBottom:2,decorator:null};}
else if(jT.barBottom){return {marginTop:2,marginBottom:4,decorator:null};}
else if(jT.barLeft){return {marginLeft:4,marginRight:2,decorator:null};}
else {return {marginLeft:2,marginRight:4,decorator:null};}
;}
},"tabview/pane":{style:function(jU){return {backgroundColor:h,decorator:gj,padding:10};}
},"tabview-page":eb,"tabview-page/button":{style:function(jV){var jX;if(jV.barTop||jV.barBottom){var jW=[8,16,8,13];}
else {var jW=[8,4,8,4];}
;if(jV.checked){if(jV.barTop){jX=fN;}
else if(jV.barBottom){jX=fM;}
else if(jV.barRight){jX=fI;}
else if(jV.barLeft){jX=fD;}
;}
else {for(var i=0;i<jW.length;i++ ){jW[i]+=1;}
;if(jV.barTop){jW[2]-=1;}
else if(jV.barBottom){jW[0]-=1;}
else if(jV.barRight){jW[3]-=1;}
else if(jV.barLeft){jW[1]-=1;}
;}
;return {zIndex:jV.checked?10:5,decorator:jX,textColor:jV.disabled?P:jV.checked?null:eo,padding:jW,cursor:ei};}
},"tabview-page/button/label":{alias:eu,style:function(jY){return {padding:[0,1,0,1]};}
},"tabview-page/button/icon":gp,"tabview-page/button/close-button":{alias:gx,style:function(ka){return {cursor:ka.disabled?undefined:ei,icon:qx.theme.simple.Image.URLS[U]};}
},"colorpopup":{alias:gm,include:gm,style:function(kb){return {padding:5};}
},"colorpopup/field":{style:function(kc){return {margin:2,width:14,height:14,backgroundColor:h,decorator:gw};}
},"colorpopup/selector-button":fC,"colorpopup/auto-button":fC,"colorpopup/preview-pane":eG,"colorpopup/current-preview":{style:function(kd){return {height:20,padding:4,marginLeft:4,decorator:gw,allowGrowX:true};}
},"colorpopup/selected-preview":{style:function(ke){return {height:20,padding:4,marginRight:4,decorator:gw,allowGrowX:true};}
},"colorpopup/colorselector-okbutton":{alias:fC,include:fC,style:function(kf){return {icon:k};}
},"colorpopup/colorselector-cancelbutton":{alias:fC,include:fC,style:function(kg){return {icon:eH};}
},"colorselector":eb,"colorselector/control-bar":eb,"colorselector/visual-pane":eG,"colorselector/control-pane":eb,"colorselector/preset-grid":eb,"colorselector/colorbucket":{style:function(kh){return {decorator:gw,width:16,height:16};}
},"colorselector/preset-field-set":eG,"colorselector/input-field-set":{include:eG,alias:eG,style:function(){return {paddingTop:12};}
},"colorselector/preview-field-set":{include:eG,alias:eG,style:function(){return {paddingTop:12};}
},"colorselector/hex-field-composite":eb,"colorselector/hex-field":ey,"colorselector/rgb-spinner-composite":eb,"colorselector/rgb-spinner-red":ev,"colorselector/rgb-spinner-green":ev,"colorselector/rgb-spinner-blue":ev,"colorselector/hsb-spinner-composite":eb,"colorselector/hsb-spinner-hue":ev,"colorselector/hsb-spinner-saturation":ev,"colorselector/hsb-spinner-brightness":ev,"colorselector/preview-content-old":{style:function(ki){return {decorator:gw,width:50,height:25};}
},"colorselector/preview-content-new":{style:function(kj){return {decorator:gw,backgroundColor:T,width:50,height:25};}
},"colorselector/hue-saturation-field":{style:function(kk){return {decorator:gw,margin:5};}
},"colorselector/brightness-field":{style:function(kl){return {decorator:gw,margin:[5,7]};}
},"colorselector/hue-saturation-pane":eb,"colorselector/hue-saturation-handle":eb,"colorselector/brightness-pane":eb,"colorselector/brightness-handle":eb,"app-header":{style:function(km){return {font:fz,textColor:fs,backgroundColor:D,padding:[8,12]};}
},"app-header-label":{style:function(kn){return {paddingTop:5};}
},"app-splitpane":{alias:fi,style:function(ko){return {padding:[0,10,10,10],backgroundColor:dR};}
}}});}
)();
(function(){var a="decoration/table/select-column-order.png",b="decoration/treevirtual/end.gif",c="decoration/checkbox/checked.png",d="decoration/arrows/right.gif",e="decoration/window/maximize.gif",f="decoration/treevirtual/only_plus.gif",g="qx.theme.simple.Image",h="decoration/cursors/move.gif",i="decoration/menu/checkbox.gif",j="decoration/table/ascending.png",k="decoration/arrows/down-small.gif",l="decoration/checkbox/undetermined.png",m="decoration/splitpane/knob-vertical.png",n="decoration/arrows/forward.gif",o="decoration/arrows/up-small.gif",p="decoration/arrows/up-invert.gif",q="decoration/treevirtual/cross_plus.gif",r="decoration/window/minimize.gif",s="decoration/tree/minus.gif",t="decoration/arrows/down-invert.gif",u="decoration/arrows/right-invert.gif",v="decoration/cursors/alias.gif",w="decoration/splitpane/knob-horizontal.png",x="decoration/treevirtual/only_minus.gif",y="decoration/treevirtual/start_plus.gif",z="decoration/cursors/nodrop.gif",A="decoration/cursors/copy.gif",B="decoration/arrows/down.gif",C="decoration/treevirtual/end_plus.gif",D="decoration/treevirtual/start_minus.gif",E="decoration/treevirtual/cross.gif",F="decoration/menu/radiobutton.gif",G="decoration/treevirtual/line.gif",H="decoration/arrows/up.gif",I="decoration/tabview/close.gif",J="decoration/tree/plus.gif",K="decoration/arrows/rewind.gif",L="decoration/window/restore.gif",M="decoration/table/descending.png",N="decoration/menu/checkbox-invert.gif",O="decoration/treevirtual/cross_minus.gif",P="decoration/treevirtual/end_minus.gif",Q="decoration/arrows/left.gif",R="decoration/menu/radiobutton-invert.gif",S="qx/static/blank.gif",T="decoration/window/close.gif";qx.Class.define(g,{extend:qx.core.Object,statics:{URLS:{"blank":S,"checkbox-checked":c,"checkbox-undetermined":l,"window-minimize":r,"window-maximize":e,"window-restore":L,"window-close":T,"cursor-copy":A,"cursor-move":h,"cursor-alias":v,"cursor-nodrop":z,"arrow-right":d,"arrow-left":Q,"arrow-up":H,"arrow-down":B,"arrow-forward":n,"arrow-rewind":K,"arrow-down-small":k,"arrow-up-small":o,"arrow-up-invert":p,"arrow-down-invert":t,"arrow-right-invert":u,"knob-horizontal":w,"knob-vertical":m,"tree-minus":s,"tree-plus":J,"select-column-order":a,"table-ascending":j,"table-descending":M,"treevirtual-line":G,"treevirtual-minus-only":x,"treevirtual-plus-only":f,"treevirtual-minus-start":D,"treevirtual-plus-start":y,"treevirtual-minus-end":P,"treevirtual-plus-end":C,"treevirtual-minus-cross":O,"treevirtual-plus-cross":q,"treevirtual-end":b,"treevirtual-cross":E,"menu-checkbox":i,"menu-checkbox-invert":N,"menu-radiobutton-invert":R,"menu-radiobutton":F,"tabview-close":I}}});}
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
(function(){var a="button-checked",b="window-resize-frame",c="decoration/window/maximize-active-hovered.png",d="radiobutton-hovered",e="decoration/arrows/right.png",f="background-application",g="keyboard-focus",h="group-item",i="scrollbar/button",j="decoration/cursors/",k="icon/16/actions/dialog-ok.png",l="border-invalid",m="combobox/button",n="icon/16/apps/office-calendar.png",o="slidebar",p="menu",q="table-scroller-focus-indicator",r="move-frame",s="nodrop",t="decoration/table/boolean-true.png",u="table-header-cell",v="app-header",w="row-layer",x="icon/16/places/folder.png",y="text-inactive",z="image",A="radiobutton",B="move",C="window-resize-frame-incl-statusbar",D="radiobutton-checked-focused",E="decoration/window/restore-active-hovered.png",F="window-captionbar-inactive",G="list",H="text-label",I="tree-folder",J="right.png",K="tabview-page-button-bottom-inactive",L="tooltip-error",M="decoration/tree/closed.png",N="window-statusbar",O="button-hovered",P="bold",Q="decoration/scrollbar/scrollbar-",R="background-tip",S="scrollbar-slider-horizontal-disabled",T="text-disabled",U="table-scroller-header",V="radiobutton-disabled",W="scrollbar-slider-horizontal",X="button-pressed",Y="table-pane",fD="decoration/window/close-active.png",fz="native",fE="checkbox-hovered",fA="decoration/window/minimize-active-hovered.png",fB="input-disabled",fw="virtual-list",fC="menubar",fJ="groupbox",fK="icon/16/actions/dialog-cancel.png",fL="tabview-page-button-top-inactive",fM="tabview-page-button-left-inactive",fF="menu-slidebar",fG="toolbar-button-checked",fH="decoration/arrows/left.png",fI="decoration/tree/open-selected.png",fQ="tree-item",gs="radiobutton-checked",fR="decoration/window/minimize-inactive.png",fS="menu-button",fN="button-focused",fO="input",ht="text-light",fP="menu-slidebar-button",fT="decoration/arrows/down.png",fU="middle",fV="group",gb="tree",gc="tabview-page-button-right-inactive",gd="decoration/window/minimize-active.png",fW="decoration/window/restore-inactive.png",fX="input-focused-invalid",fY="text-active",ga="splitpane",gh="text-input",gi="combobox/textfield",hy="decoration/window/close-active-hovered.png",gj="invalid",ge="qx/icon/Tango/16/actions/window-close.png",gf="combobox",hx="button-disabled",gg="tabview-page-button-left-active",gn="slidebar/button-forward",go="border-separator",hD="treevirtual-contract",gp="decoration/window/maximize-inactive.png",gk="scrollbar",gl="icon/22/places/folder-open.png",hB="right-top",gm="scrollarea",gq="background-splitpane",gr="datechooser/nav-button",gD="scrollbar-vertical",gC="decoration/toolbar/toolbar-handle-knob.gif",gB="icon/22/mimetypes/office-document.png",gH="text-selected",gG="cell",gF="button-checked-focused",gE="up.png",gw="best-fit",gv="decoration/tree/closed-selected.png",gu="text-hovered",gt="qx.theme.modern.Appearance",gA="decoration/tree/open.png",gz="default",gy="decoration/arrows/up-invert.png",gx="checkbox-disabled",gO="selected",gN="toolbar-button-hovered",gM="decoration/form/checked.png",gL="button",gS="progressive-table-header",gR="decoration/menu/radiobutton.gif",gQ="window-incl-statusbar",gP="decoration/arrows/down-small.png",gK="decoration/arrows/forward.png",gJ="decoration/table/descending.png",gI="decoration/form/undetermined.png",he="tree-file",hd="decoration/form/tooltip-error-arrow-right.png",hc="keep-align",hi="scrollbar-slider-vertical",hh="center",hg="toolbar",hf="alias",gW="decoration/window/restore-active.png",gV="datechooser",gU="toolbar-button",gT="decoration/table/boolean-false.png",hb="window-pane",ha="icon/32/mimetypes/office-document.png",gY="slidebar/button-backward",gX="radiobutton-checked-disabled",ho="tabview-pane",hn="decoration/arrows/rewind.png",hm="checkbox-focused",hl="selectbox",hs="background-light",hr="top",hq="right",hp="main",hk="button-frame",hj="progressbar-background",eB="radiobutton-checked-hovered",eA="popup",hE="treevirtual-folder",ey="checkbox",ez="table-header-cell-hovered",ex="window",hC="icon/16/mimetypes/office-document.png",ev="treevirtual-expand",ew="text-gray",eu="left",hz="decoration/menu/radiobutton-invert.gif",es="text-placeholder",et="atom",er="text-title",eK="slider",eL="background-medium",eI="decoration/table/select-column-order.png",eJ="down.png",eG="widget",eH="groupitem-text",eF="tabview-page-button-top-active",eq="icon/32/places/folder-open.png",eD="icon/22/places/folder.png",eE="decoration/window/maximize-active.png",eC="decoration/window/close-inactive.png",eY="toolbar-part",eW="decoration/splitpane/knob-vertical.png",eX="left.png",eU="decoration/menu/checkbox-invert.gif",eV="table",eT="decoration/arrows/up.png",hw="table-statusbar",eR="decoration/form/tooltip-error-arrow.png",eS="window-captionbar-active",eQ="copy",hA="radiobutton-focused",eO="decoration/arrows/down-invert.png",eP="decoration/menu/checkbox.gif",eM="",eN="window-caption-active-text",fh="decoration/splitpane/knob-horizontal.png",fi="textfield",ff="icon/32/places/folder.png",fg="toolbar-separator",fd="tabview-page-button-bottom-active",fe="decoration/arrows/up-small.png",fc="decoration/table/ascending.png",hv="small",fa="tabview-page-button-right-active",fb="spinner",fv="tooltip",hu="-disabled",fx="label",fs="scrollbar-horizontal",fr="-invalid",fu="progressbar",ft="progressive-table-header-cell",fo="menu-separator",fn="pane",fq="htmlarea-background",fp="decoration/arrows/right-invert.png",fk="icon/16/places/folder-open.png",fj="qx/static/blank.gif",fm=".gif",fl="icon/16/actions/view-refresh.png",fy="input-focused";qx.Theme.define(gt,{appearances:{"widget":{},"root":{style:function(hF){return {backgroundColor:f,textColor:H,font:gz};}
},"label":{style:function(hG){return {textColor:hG.disabled?T:undefined};}
},"move-frame":{style:function(hH){return {decorator:hp};}
},"resize-frame":r,"dragdrop-cursor":{style:function(hI){var hJ=s;if(hI.copy){hJ=eQ;}
else if(hI.move){hJ=B;}
else if(hI.alias){hJ=hf;}
;return {source:j+hJ+fm,position:hB,offset:[2,16,2,6]};}
},"image":{style:function(hK){return {opacity:!hK.replacement&&hK.disabled?0.3:1};}
},"atom":{},"atom/label":fx,"atom/icon":z,"popup":{style:function(hL){return {decorator:eA,backgroundColor:hs};}
},"button-frame":{alias:et,style:function(hM){var hP,hO;var hN=[3,9];if(hM.checked&&hM.focused&&!hM.inner){hP=gF;hO=undefined;hN=[1,7];}
else if(hM.disabled){hP=hx;hO=undefined;}
else if(hM.pressed){hP=X;hO=gu;}
else if(hM.checked){hP=a;hO=undefined;}
else if(hM.hovered){hP=O;hO=gu;}
else if(hM.focused&&!hM.inner){hP=fN;hO=undefined;hN=[1,7];}
else {hP=gL;hO=undefined;}
;if(hM.invalid&&!hM.disabled){hP+=fr;}
;return {decorator:hP,textColor:hO,padding:hN,margin:[1,0]};}
},"button-frame/image":{style:function(hQ){return {opacity:!hQ.replacement&&hQ.disabled?0.5:1};}
},"button":{alias:hk,include:hk,style:function(hR){return {center:true};}
},"hover-button":{alias:et,include:et,style:function(hS){var hT=hS.hovered?gO:undefined;return {decorator:hT,textColor:hS.hovered?gH:undefined};}
},"menubutton":{include:gL,alias:gL,style:function(hU){return {icon:fT,iconPosition:hq};}
},"splitbutton":{},"splitbutton/button":gL,"splitbutton/arrow":{alias:gL,include:gL,style:function(hV,hW){return {icon:fT,padding:[hW.padding[0],hW.padding[1]-6],marginLeft:1};}
},"form-renderer-label":{include:fx,style:function(){return {paddingTop:4};}
},"checkbox":{alias:et,style:function(hX){var hY;if(hX.checked){hY=gM;}
else if(hX.undetermined){hY=gI;}
else {hY=fj;}
;return {icon:hY,minWidth:14,gap:8,paddingLeft:2};}
},"checkbox/icon":{style:function(ia){var ic;if(ia.disabled){ic=gx;}
else if(ia.focused){ic=hm;}
else if(ia.hovered){ic=fE;}
else {ic=ey;}
;ic+=ia.invalid&&!ia.disabled?fr:eM;var ib=ia.undetermined?[3,1]:1;return {decorator:ic,padding:ib,width:10,height:10};}
},"radiobutton":{alias:et,style:function(id){return {icon:fj,gap:8,paddingLeft:2};}
},"radiobutton/icon":{style:function(ie){var ig;if(ie.disabled&&!ie.checked){ig=V;}
else if(ie.checked&&ie.focused){ig=D;}
else if(ie.checked&&ie.disabled){ig=gX;}
else if(ie.checked&&ie.hovered){ig=eB;}
else if(ie.checked){ig=gs;}
else if(ie.focused){ig=hA;}
else if(ie.hovered){ig=d;}
else {ig=A;}
;ig+=ie.invalid&&!ie.disabled?fr:eM;return {decorator:ig,width:10,height:10};}
},"textfield":{style:function(ih){var im;var ik=!!ih.focused;var ii=!!ih.invalid;var ij=!!ih.disabled;if(ik&&ii&&!ij){im=fX;}
else if(ik&&!ii&&!ij){im=fy;}
else if(ij){im=fB;}
else if(!ik&&ii&&!ij){im=l;}
else {im=fO;}
;var il;if(ih.disabled){il=T;}
else if(ih.showingPlaceholder){il=es;}
else {il=gh;}
;return {decorator:im,padding:[2,4,1],textColor:il};}
},"textarea":{include:fi,style:function(io){return {padding:4};}
},"spinner":{style:function(ip){var is;var ir=!!ip.focused;var it=!!ip.invalid;var iq=!!ip.disabled;if(ir&&it&&!iq){is=fX;}
else if(ir&&!it&&!iq){is=fy;}
else if(iq){is=fB;}
else if(!ir&&it&&!iq){is=l;}
else {is=fO;}
;return {decorator:is};}
},"spinner/textfield":{style:function(iu){return {marginRight:2,padding:[2,4,1],textColor:iu.disabled?T:gh};}
},"spinner/upbutton":{alias:hk,include:hk,style:function(iv,iw){return {icon:fe,padding:[iw.padding[0]-1,iw.padding[1]-5],margin:0};}
},"spinner/downbutton":{alias:hk,include:hk,style:function(ix,iy){return {icon:gP,padding:[iy.padding[0]-1,iy.padding[1]-5],margin:0};}
},"datefield":gf,"datefield/button":{alias:m,include:m,style:function(iz){return {icon:n,padding:[0,3],decorator:undefined};}
},"datefield/textfield":gi,"datefield/list":{alias:gV,include:gV,style:function(iA){return {decorator:undefined};}
},"groupbox":{style:function(iB){return {legendPosition:hr};}
},"groupbox/legend":{alias:et,style:function(iC){return {padding:[1,0,1,4],textColor:iC.invalid?gj:er,font:P};}
},"groupbox/frame":{style:function(iD){return {padding:10,margin:1,decorator:fV};}
},"check-groupbox":fJ,"check-groupbox/legend":{alias:ey,include:ey,style:function(iE){return {padding:[1,0,1,4],textColor:iE.invalid?gj:er,font:P};}
},"radio-groupbox":fJ,"radio-groupbox/legend":{alias:A,include:A,style:function(iF){return {padding:[1,0,1,4],textColor:iF.invalid?gj:er,font:P};}
},"scrollarea":{style:function(iG){return {minWidth:50,minHeight:50};}
},"scrollarea/corner":{style:function(iH){return {backgroundColor:f};}
},"scrollarea/pane":eG,"scrollarea/scrollbar-x":gk,"scrollarea/scrollbar-y":gk,"scrollbar":{style:function(iI){if(iI[fz]){return {};}
;return {width:iI.horizontal?undefined:16,height:iI.horizontal?16:undefined,decorator:(iI.horizontal?fs:gD),padding:1};}
},"scrollbar/slider":{alias:eK,style:function(iJ){return {padding:iJ.horizontal?[0,1,0,1]:[1,0,1,0]};}
},"scrollbar/slider/knob":{include:hk,style:function(iK){var iL=iK.horizontal?W:hi;if(iK.disabled){iL+=hu;}
;return {decorator:iL,minHeight:iK.horizontal?undefined:9,minWidth:iK.horizontal?9:undefined,padding:undefined,margin:0};}
},"scrollbar/button":{alias:hk,include:hk,style:function(iM){var iO=Q;if(iM.left){iO+=eX;}
else if(iM.right){iO+=J;}
else if(iM.up){iO+=gE;}
else {iO+=eJ;}
;if(iM.left||iM.right){var iN=iM.left?3:4;return {padding:[3,0,3,iN],icon:iO,width:15,height:14,margin:0};}
else {return {padding:3,icon:iO,width:14,height:15,margin:0};}
;}
},"scrollbar/button-begin":i,"scrollbar/button-end":i,"slider":{style:function(iP){var iS;var iR=!!iP.focused;var iT=!!iP.invalid;var iQ=!!iP.disabled;if(iR&&iT&&!iQ){iS=fX;}
else if(iR&&!iT&&!iQ){iS=fy;}
else if(iQ){iS=fB;}
else if(!iR&&iT&&!iQ){iS=l;}
else {iS=fO;}
;return {decorator:iS};}
},"slider/knob":{include:hk,style:function(iU){return {decorator:iU.disabled?S:W,height:14,width:14,padding:0,margin:0};}
},"list":{alias:gm,style:function(iV){var iY;var iX=!!iV.focused;var ja=!!iV.invalid;var iW=!!iV.disabled;if(iX&&ja&&!iW){iY=fX;}
else if(iX&&!ja&&!iW){iY=fy;}
else if(iW){iY=fB;}
else if(!iX&&ja&&!iW){iY=l;}
else {iY=fO;}
;return {backgroundColor:hs,decorator:iY};}
},"list/pane":eG,"listitem":{alias:et,style:function(jb){return {padding:jb.dragover?[4,4,2,4]:4,textColor:jb.selected?gH:undefined,decorator:jb.selected?gO:undefined};}
},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:hk,include:hk,style:function(jc){return {padding:5,center:true,icon:jc.vertical?fT:e};}
},"slidebar/button-backward":{alias:hk,include:hk,style:function(jd){return {padding:5,center:true,icon:jd.vertical?eT:fH};}
},"tabview":{style:function(je){return {contentPadding:16};}
},"tabview/bar":{alias:o,style:function(jf){var jg={marginBottom:jf.barTop?-1:0,marginTop:jf.barBottom?-4:0,marginLeft:jf.barRight?-3:0,marginRight:jf.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};if(jf.barTop||jf.barBottom){jg.paddingLeft=5;jg.paddingRight=7;}
else {jg.paddingTop=5;jg.paddingBottom=7;}
;return jg;}
},"tabview/bar/button-forward":{include:gn,alias:gn,style:function(jh){if(jh.barTop||jh.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/button-backward":{include:gY,alias:gY,style:function(ji){if(ji.barTop||ji.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(jj){return {decorator:ho,marginBottom:jj.barBottom?-1:0,marginTop:jj.barTop?-1:0,marginLeft:jj.barLeft?-1:0,marginRight:jj.barRight?-1:0};}
},"tabview-page":{alias:eG,include:eG,style:function(jk){return {padding:[4,3]};}
},"tabview-page/button":{alias:et,style:function(jl){var jr,jn=0;var jq=0,jm=0,jo=0,jp=0;if(jl.checked){if(jl.barTop){jr=eF;jn=[5,11];jo=jl.firstTab?0:-5;jp=jl.lastTab?0:-5;}
else if(jl.barBottom){jr=fd;jn=[5,11];jo=jl.firstTab?0:-5;jp=jl.lastTab?0:-5;jq=3;}
else if(jl.barRight){jr=fa;jn=[5,10];jq=jl.firstTab?0:-5;jm=jl.lastTab?0:-5;jo=2;}
else {jr=gg;jn=[5,10];jq=jl.firstTab?0:-5;jm=jl.lastTab?0:-5;}
;}
else {if(jl.barTop){jr=fL;jn=[3,9];jq=4;jo=jl.firstTab?5:1;jp=1;}
else if(jl.barBottom){jr=K;jn=[3,9];jm=4;jo=jl.firstTab?5:1;jp=1;jq=3;}
else if(jl.barRight){jr=gc;jn=[3,9];jp=5;jq=jl.firstTab?5:1;jm=1;jo=3;}
else {jr=fM;jn=[3,9];jo=5;jq=jl.firstTab?5:1;jm=1;jp=1;}
;}
;return {zIndex:jl.checked?10:5,decorator:jr,padding:jn,marginTop:jq,marginBottom:jm,marginLeft:jo,marginRight:jp,textColor:jl.disabled?T:jl.checked?fY:y};}
},"tabview-page/button/label":{alias:fx,style:function(js){return {padding:js.focused?[0,1,0,1]:[1,2,1,2],decorator:js.focused?g:undefined};}
},"tabview-page/button/close-button":{alias:et,style:function(jt){return {icon:ge};}
},"toolbar":{style:function(ju){return {decorator:hg,spacing:2};}
},"toolbar/part":{style:function(jv){return {decorator:eY,spacing:2};}
},"toolbar/part/container":{style:function(jw){return {paddingLeft:2,paddingRight:2};}
},"toolbar/part/handle":{style:function(jx){return {source:gC,marginLeft:3,marginRight:3};}
},"toolbar-button":{alias:et,style:function(jy){var jz;if(jy.pressed||(jy.checked&&!jy.hovered)||(jy.checked&&jy.disabled)){jz=fG;}
else if(jy.hovered&&!jy.disabled){jz=gN;}
;return {marginTop:2,marginBottom:2,padding:(jy.pressed||jy.checked||jy.hovered)&&!jy.disabled||(jy.disabled&&jy.checked)?3:5,decorator:jz};}
},"toolbar-menubutton":{alias:gU,include:gU,style:function(jA){return {showArrow:true};}
},"toolbar-menubutton/arrow":{alias:z,include:z,style:function(jB){return {source:gP};}
},"toolbar-splitbutton":{style:function(jC){return {marginTop:2,marginBottom:2};}
},"toolbar-splitbutton/button":{alias:gU,include:gU,style:function(jD){return {icon:fT,marginTop:undefined,marginBottom:undefined};}
},"toolbar-splitbutton/arrow":{alias:gU,include:gU,style:function(jE){if(jE.pressed||jE.checked||(jE.hovered&&!jE.disabled)){var jF=1;}
else {var jF=3;}
;return {padding:jF,icon:fT,marginTop:undefined,marginBottom:undefined};}
},"toolbar-separator":{style:function(jG){return {decorator:fg,margin:7};}
},"tree":G,"tree-item":{style:function(jH){var jI=jH.selected?gO:undefined;return {padding:[2,6],textColor:jH.selected?gH:undefined,decorator:jI};}
},"tree-item/icon":{include:z,style:function(jJ){return {paddingRight:5};}
},"tree-item/label":fx,"tree-item/open":{include:z,style:function(jK){var jL;if(jK.selected&&jK.opened){jL=fI;}
else if(jK.selected&&!jK.opened){jL=gv;}
else if(jK.opened){jL=gA;}
else {jL=M;}
;return {padding:[0,5,0,2],source:jL};}
},"tree-folder":{include:fQ,alias:fQ,style:function(jM){var jO,jN;if(jM.small){jO=jM.opened?fk:x;jN=fk;}
else if(jM.large){jO=jM.opened?eq:ff;jN=eq;}
else {jO=jM.opened?gl:eD;jN=gl;}
;return {icon:jO,iconOpened:jN};}
},"tree-file":{include:fQ,alias:fQ,style:function(jP){return {icon:jP.small?hC:jP.large?ha:gB};}
},"treevirtual":eV,"treevirtual-folder":{style:function(jQ){return {icon:jQ.opened?fk:x};}
},"treevirtual-file":{include:hE,alias:hE,style:function(jR){return {icon:hC};}
},"treevirtual-line":{style:function(jS){return {icon:fj};}
},"treevirtual-contract":{style:function(jT){return {icon:gA,paddingLeft:5,paddingTop:2};}
},"treevirtual-expand":{style:function(jU){return {icon:M,paddingLeft:5,paddingTop:2};}
},"treevirtual-only-contract":hD,"treevirtual-only-expand":ev,"treevirtual-start-contract":hD,"treevirtual-start-expand":ev,"treevirtual-end-contract":hD,"treevirtual-end-expand":ev,"treevirtual-cross-contract":hD,"treevirtual-cross-expand":ev,"treevirtual-end":{style:function(jV){return {icon:fj};}
},"treevirtual-cross":{style:function(jW){return {icon:fj};}
},"tooltip":{include:eA,style:function(jX){return {backgroundColor:R,padding:[1,3,2,3],offset:[15,5,5,5]};}
},"tooltip/atom":et,"tooltip-error":{style:function(jY){return {placeMethod:eG,offset:[-3,1,0,0],arrowPosition:jY.placementLeft?eu:hq,position:hB,showTimeout:100,hideTimeout:10000,padding:[0,4,4,0]};}
},"tooltip-error/arrow":{include:z,style:function(ka){var kb=ka.placementLeft?hd:eR;return {source:kb,padding:[6,0,0,0],zIndex:10000001};}
},"tooltip-error/atom":{include:eA,style:function(kc){return {textColor:gH,backgroundColor:undefined,decorator:L,font:P,padding:[3,4,4,4],margin:[1,0,0,0],maxWidth:333};}
},"window":{style:function(kd){return {decorator:kd.showStatusbar?gQ:ex,contentPadding:[10,10,10,10],margin:kd.maximized?0:[0,5,5,0]};}
},"window-resize-frame":{style:function(ke){return {decorator:ke.showStatusbar?C:b};}
},"window/pane":{style:function(kf){return {decorator:hb};}
},"window/captionbar":{style:function(kg){return {decorator:(kg.active?eS:F),textColor:kg.active?eN:ew,minHeight:26,paddingRight:2};}
},"window/icon":{style:function(kh){return {margin:[5,0,3,6]};}
},"window/title":{style:function(ki){return {alignY:fU,font:P,marginLeft:6,marginRight:12};}
},"window/minimize-button":{alias:et,style:function(kj){return {icon:kj.active?kj.hovered?fA:gd:fR,margin:[4,8,2,0]};}
},"window/restore-button":{alias:et,style:function(kk){return {icon:kk.active?kk.hovered?E:gW:fW,margin:[5,8,2,0]};}
},"window/maximize-button":{alias:et,style:function(kl){return {icon:kl.active?kl.hovered?c:eE:gp,margin:[4,8,2,0]};}
},"window/close-button":{alias:et,style:function(km){return {icon:km.active?km.hovered?hy:fD:eC,margin:[4,8,2,0]};}
},"window/statusbar":{style:function(kn){return {padding:[2,6],decorator:N,minHeight:18};}
},"window/statusbar-text":{style:function(ko){return {font:hv};}
},"iframe":{style:function(kp){return {decorator:hp};}
},"resizer":{style:function(kq){return {decorator:fn};}
},"splitpane":{style:function(kr){return {decorator:ga};}
},"splitpane/splitter":{style:function(ks){return {width:ks.horizontal?3:undefined,height:ks.vertical?3:undefined,backgroundColor:gq};}
},"splitpane/splitter/knob":{style:function(kt){return {source:kt.horizontal?fh:eW};}
},"splitpane/slider":{style:function(ku){return {width:ku.horizontal?3:undefined,height:ku.vertical?3:undefined,backgroundColor:gq};}
},"selectbox":hk,"selectbox/atom":et,"selectbox/popup":eA,"selectbox/list":{alias:G},"selectbox/arrow":{include:z,style:function(kv){return {source:fT,paddingLeft:5};}
},"datechooser":{style:function(kw){var kz;var ky=!!kw.focused;var kA=!!kw.invalid;var kx=!!kw.disabled;if(ky&&kA&&!kx){kz=fX;}
else if(ky&&!kA&&!kx){kz=fy;}
else if(kx){kz=fB;}
else if(!ky&&kA&&!kx){kz=l;}
else {kz=fO;}
;return {padding:2,decorator:kz,backgroundColor:hs};}
},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:hk,alias:hk,style:function(kB){var kC={padding:[2,4]};if(kB.lastYear){kC.icon=hn;kC.marginRight=1;}
else if(kB.lastMonth){kC.icon=fH;}
else if(kB.nextYear){kC.icon=gK;kC.marginLeft=1;}
else if(kB.nextMonth){kC.icon=e;}
;return kC;}
},"datechooser/last-year-button-tooltip":fv,"datechooser/last-month-button-tooltip":fv,"datechooser/next-year-button-tooltip":fv,"datechooser/next-month-button-tooltip":fv,"datechooser/last-year-button":gr,"datechooser/last-month-button":gr,"datechooser/next-month-button":gr,"datechooser/next-year-button":gr,"datechooser/month-year-label":{style:function(kD){return {font:P,textAlign:hh,textColor:kD.disabled?T:undefined};}
},"datechooser/date-pane":{style:function(kE){return {textColor:kE.disabled?T:undefined,marginTop:2};}
},"datechooser/weekday":{style:function(kF){return {textColor:kF.disabled?T:kF.weekend?ht:undefined,textAlign:hh,paddingTop:2,backgroundColor:eL};}
},"datechooser/week":{style:function(kG){return {textAlign:hh,padding:[2,4],backgroundColor:eL};}
},"datechooser/day":{style:function(kH){var kI=kH.disabled?undefined:kH.selected?gO:undefined;return {textAlign:hh,decorator:kI,textColor:kH.disabled?T:kH.selected?gH:kH.otherMonth?ht:undefined,font:kH.today?P:undefined,padding:[2,4]};}
},"combobox":{style:function(kJ){var kM;var kL=!!kJ.focused;var kN=!!kJ.invalid;var kK=!!kJ.disabled;if(kL&&kN&&!kK){kM=fX;}
else if(kL&&!kN&&!kK){kM=fy;}
else if(kK){kM=fB;}
else if(!kL&&kN&&!kK){kM=l;}
else {kM=fO;}
;return {decorator:kM};}
},"combobox/popup":eA,"combobox/list":{alias:G},"combobox/button":{include:hk,alias:hk,style:function(kO,kP){var kQ={icon:fT,padding:[kP.padding[0],kP.padding[1]-6],margin:undefined};if(kO.selected){kQ.decorator=fN;}
;return kQ;}
},"combobox/textfield":{include:fi,style:function(kR){return {decorator:undefined};}
},"menu":{style:function(kS){var kT={decorator:p,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:kS.submenu||kS.contextmenu?gw:hc};if(kS.submenu){kT.position=hB;kT.offset=[-2,-3];}
;return kT;}
},"menu/slidebar":fF,"menu-slidebar":eG,"menu-slidebar-button":{style:function(kU){var kV=kU.hovered?gO:undefined;return {decorator:kV,padding:7,center:true};}
},"menu-slidebar/button-backward":{include:fP,style:function(kW){return {icon:kW.hovered?gy:eT};}
},"menu-slidebar/button-forward":{include:fP,style:function(kX){return {icon:kX.hovered?eO:fT};}
},"menu-separator":{style:function(kY){return {height:0,decorator:fo,margin:[4,2]};}
},"menu-button":{alias:et,style:function(la){var lb=la.selected?gO:undefined;return {decorator:lb,textColor:la.selected?gH:undefined,padding:[4,6]};}
},"menu-button/icon":{include:z,style:function(lc){return {alignY:fU};}
},"menu-button/label":{include:fx,style:function(ld){return {alignY:fU,padding:1};}
},"menu-button/shortcut":{include:fx,style:function(le){return {alignY:fU,marginLeft:14,padding:1};}
},"menu-button/arrow":{include:z,style:function(lf){return {source:lf.selected?fp:e,alignY:fU};}
},"menu-checkbox":{alias:fS,include:fS,style:function(lg){return {icon:!lg.checked?undefined:lg.selected?eU:eP};}
},"menu-radiobutton":{alias:fS,include:fS,style:function(lh){return {icon:!lh.checked?undefined:lh.selected?hz:gR};}
},"menubar":{style:function(li){return {decorator:fC};}
},"menubar-button":{alias:et,style:function(lj){var lk=(lj.pressed||lj.hovered)&&!lj.disabled?gO:undefined;return {decorator:lk,textColor:lj.pressed||lj.hovered?gH:undefined,padding:[3,8]};}
},"colorselector":eG,"colorselector/control-bar":eG,"colorselector/control-pane":eG,"colorselector/visual-pane":fJ,"colorselector/preset-grid":eG,"colorselector/colorbucket":{style:function(ll){return {decorator:hp,width:16,height:16};}
},"colorselector/preset-field-set":fJ,"colorselector/input-field-set":{include:fJ,alias:fJ,style:function(){return {paddingTop:20};}
},"colorselector/preview-field-set":{include:fJ,alias:fJ,style:function(){return {paddingTop:20};}
},"colorselector/hex-field-composite":eG,"colorselector/hex-field":fi,"colorselector/rgb-spinner-composite":eG,"colorselector/rgb-spinner-red":fb,"colorselector/rgb-spinner-green":fb,"colorselector/rgb-spinner-blue":fb,"colorselector/hsb-spinner-composite":eG,"colorselector/hsb-spinner-hue":fb,"colorselector/hsb-spinner-saturation":fb,"colorselector/hsb-spinner-brightness":fb,"colorselector/preview-content-old":{style:function(lm){return {decorator:hp,width:50,height:10};}
},"colorselector/preview-content-new":{style:function(ln){return {decorator:hp,backgroundColor:hs,width:50,height:10};}
},"colorselector/hue-saturation-field":{style:function(lo){return {decorator:hp,margin:5};}
},"colorselector/brightness-field":{style:function(lp){return {decorator:hp,margin:[5,7]};}
},"colorselector/hue-saturation-pane":eG,"colorselector/hue-saturation-handle":eG,"colorselector/brightness-pane":eG,"colorselector/brightness-handle":eG,"colorpopup":{alias:eA,include:eA,style:function(lq){return {padding:5,backgroundColor:f};}
},"colorpopup/field":{style:function(lr){return {decorator:hp,margin:2,width:14,height:14,backgroundColor:hs};}
},"colorpopup/selector-button":gL,"colorpopup/auto-button":gL,"colorpopup/preview-pane":fJ,"colorpopup/current-preview":{style:function(ls){return {height:20,padding:4,marginLeft:4,decorator:hp,allowGrowX:true};}
},"colorpopup/selected-preview":{style:function(lt){return {height:20,padding:4,marginRight:4,decorator:hp,allowGrowX:true};}
},"colorpopup/colorselector-okbutton":{alias:gL,include:gL,style:function(lu){return {icon:k};}
},"colorpopup/colorselector-cancelbutton":{alias:gL,include:gL,style:function(lv){return {icon:fK};}
},"table":{alias:eG,style:function(lw){return {decorator:eV};}
},"table/statusbar":{style:function(lx){return {decorator:hw,padding:[0,2]};}
},"table/column-button":{alias:hk,style:function(ly){return {decorator:U,padding:3,icon:eI};}
},"table-column-reset-button":{include:fS,alias:fS,style:function(){return {icon:fl};}
},"table-scroller":eG,"table-scroller/scrollbar-x":gk,"table-scroller/scrollbar-y":gk,"table-scroller/header":{style:function(lz){return {decorator:U,textColor:lz.disabled?T:undefined};}
},"table-scroller/pane":{style:function(lA){return {backgroundColor:Y};}
},"table-scroller/focus-indicator":{style:function(lB){return {decorator:q};}
},"table-scroller/resize-line":{style:function(lC){return {backgroundColor:go,width:2};}
},"table-header-cell":{alias:et,style:function(lD){return {minWidth:13,minHeight:20,padding:lD.hovered?[3,4,2,4]:[3,4],decorator:lD.hovered?ez:u,sortIcon:lD.sorted?(lD.sortedAscending?fc:gJ):undefined};}
},"table-header-cell/label":{style:function(lE){return {minWidth:0,alignY:fU,paddingRight:5};}
},"table-header-cell/sort-icon":{style:function(lF){return {alignY:fU,alignX:hq,opacity:lF.disabled?0.3:1};}
},"table-header-cell/icon":{style:function(lG){return {minWidth:0,alignY:fU,paddingRight:5,opacity:lG.disabled?0.3:1};}
},"table-editor-textfield":{include:fi,style:function(lH){return {decorator:undefined,padding:[2,2],backgroundColor:hs};}
},"table-editor-selectbox":{include:hl,alias:hl,style:function(lI){return {padding:[0,2],backgroundColor:hs};}
},"table-editor-combobox":{include:gf,alias:gf,style:function(lJ){return {decorator:undefined,backgroundColor:hs};}
},"progressive-table-header":{alias:eG,style:function(lK){return {decorator:gS};}
},"progressive-table-header-cell":{alias:et,style:function(lL){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:ft};}
},"app-header":{style:function(lM){return {font:P,textColor:gH,padding:[8,12],decorator:v};}
},"app-header-label":fx,"app-splitpane":{alias:ga,style:function(lN){return {padding:0};}
},"virtual-list":G,"virtual-list/row-layer":w,"row-layer":eG,"group-item":{include:fx,alias:fx,style:function(lO){return {padding:4,decorator:h,textColor:eH,font:P};}
},"virtual-selectbox":hl,"virtual-selectbox/dropdown":eA,"virtual-selectbox/dropdown/list":{alias:fw},"virtual-combobox":gf,"virtual-combobox/dropdown":eA,"virtual-combobox/dropdown/list":{alias:fw},"virtual-tree":{include:gb,alias:gb,style:function(lP){return {itemHeight:26};}
},"virtual-tree-folder":I,"virtual-tree-file":he,"column-layer":eG,"cell":{style:function(lQ){return {textColor:lQ.selected?gH:H,padding:[3,6],font:gz};}
},"cell-string":gG,"cell-number":{include:gG,style:function(lR){return {textAlign:hq};}
},"cell-image":gG,"cell-boolean":{include:gG,style:function(lS){return {iconTrue:t,iconFalse:gT};}
},"cell-atom":gG,"cell-date":gG,"cell-html":gG,"htmlarea":{"include":eG,style:function(lT){return {backgroundColor:fq};}
},"progressbar":{style:function(lU){return {decorator:fu,padding:[1],backgroundColor:hj,width:200,height:20};}
},"progressbar/progress":{style:function(lV){return {decorator:(lV.disabled?h:gO)};}
}}});}
)();
(function(){var a="button-checked-focused",b="window-resize-frame",c="checkbox-disabled-border",d="group-background",e="menu-end",f="keyboard-focus",g="button-disabled-start",h="selected-end",i="table-header-hovered",j="border-invalid",k="decoration/toolbar/toolbar-part.gif",l="border-separator",m="window-border-caption",n="radiobutton-hovered",o="button-hovered-end",p="border-input",q="radiobutton",r="repeat-y",s="border-dragover",t="border-inner-input",u="radiobutton-checked-focused",v="groupitem-end",w="group-border",x="input-start",y="button-hovered-start",z="tooltip-error",A="button-hovered",B="selected-start",C="progressive-table-header-border-right",D="button-border-disabled",E="scrollbar-slider-horizontal",F="button-pressed",G="window-statusbar-background",H="tabview-end",I="radiobutton-hovered-invalid",J="checkbox-hovered",K="radiobutton-background",L="window-captionbar-active",M="checkbox-hovered-inner",N="toolbar-button-hovered",O="window-caption-active-end",P="solid",Q="button-start",R="dotted",S="radiobutton-disabled",T="radiobutton-checked",U="checkbox-disabled-end",V="window-caption-active-start",W="window-border",X="button-focused",Y="input",cv="tabview-inactive",cw="qx/decoration/Modern",cx="border-toolbar-separator-left",cr="invalid",cs="button-disabled",ct="horizontal",cu="table-header-start",cC="background-splitpane",cD="button-end",cE="button-checked",cF="border-toolbar-border-inner",cy="px",cz="input-border-disabled",cA="scrollbar-slider-vertical",cB="checkbox-inner",cJ="button",dk="button-disabled-end",dI="toolbar-end",cK="groupitem-start",cG="menu-start",cH="input-focused-start",dD="scrollbar-start",cI="scrollbar-slider-start",cL="radiobutton-checked-disabled",cM="checkbox-focused",cN="border-toolbar-button-outer",cS="background-light",cT="qx.theme.modern.Decoration",cU="checkbox-hovered-invalid",cO="radiobutton-checked-hovered",cP="tabview-page-button-top-inactive",cQ="#243B58",cR="checkbox",cY="checkbox-focus",da="window",dF="checkbox-disabled-inner",db="border-toolbar-separator-right",cV="tabview-inactive-start",cW="scrollbar-end",dE="table-header-end",cX="tabview-background",df="checkbox-end",dg="border-button",dH="tabview-inactive-end",dh="input-end",dc="tabview-page-button-top-active",dd="input-focused-inner-invalid",dG="menu-separator-top",de="shadow",di="window-caption-inactive-start",dj="scrollbar-slider-end",dw="background-pane",dv="pane-end",du="input-focused-end",dA="menubar-start",dz="toolbar-start",dy="radiobutton-focused",dx="pane-start",dp="table-focus-indicator",dn="menu-separator-bottom",dm="#1D2D45",dl="border-main",dt="scrollbar-horizontal",ds="window-caption-inactive-end",dr="checkbox-border",dq="tabview-start",dC="checkbox-hovered-inner-invalid",dB="input-focused";qx.Theme.define(cT,{aliases:{decoration:cw},decorations:{"main":{style:{width:1,color:dl}},"selected":{style:{startColorPosition:0,endColorPosition:100,startColor:B,endColor:h}},"dragover":{style:{bottom:[2,P,s]}},"pane":{style:{width:1,color:cX,radius:3,shadowColor:de,shadowBlurRadius:2,shadowLength:0,gradientStart:[dx,0],gradientEnd:[dv,100]}},"group":{style:{backgroundColor:d,radius:4,color:w,width:1}},"keyboard-focus":{style:{width:1,color:f,style:R}},"radiobutton":{style:{backgroundColor:K,radius:5,width:1,innerWidth:2,color:dr,innerColor:K,shadowLength:0,shadowBlurRadius:0,shadowColor:cY}},"radiobutton-checked":{include:q,style:{backgroundColor:T}},"radiobutton-checked-focused":{include:T,style:{shadowBlurRadius:4}},"radiobutton-checked-hovered":{include:T,style:{innerColor:J}},"radiobutton-focused":{include:q,style:{shadowBlurRadius:4}},"radiobutton-hovered":{include:q,style:{backgroundColor:J,innerColor:J}},"radiobutton-disabled":{include:q,style:{innerColor:S,backgroundColor:S,color:c}},"radiobutton-checked-disabled":{include:S,style:{backgroundColor:cL}},"radiobutton-invalid":{include:q,style:{color:cr}},"radiobutton-checked-invalid":{include:T,style:{color:cr}},"radiobutton-checked-focused-invalid":{include:u,style:{color:cr,shadowColor:cr}},"radiobutton-checked-hovered-invalid":{include:cO,style:{color:cr,innerColor:I}},"radiobutton-focused-invalid":{include:dy,style:{color:cr,shadowColor:cr}},"radiobutton-hovered-invalid":{include:n,style:{color:cr,innerColor:I,backgroundColor:I}},"separator-horizontal":{style:{widthLeft:1,colorLeft:l}},"separator-vertical":{style:{widthTop:1,colorTop:l}},"tooltip-error":{style:{backgroundColor:z,radius:4,shadowColor:de,shadowBlurRadius:2,shadowLength:1}},"popup":{style:{width:1,color:dl,shadowColor:de,shadowBlurRadius:3,shadowLength:1}},"scrollbar-horizontal":{style:{gradientStart:[dD,0],gradientEnd:[cW,100]}},"scrollbar-vertical":{include:dt,style:{orientation:ct}},"scrollbar-slider-horizontal":{style:{gradientStart:[cI,0],gradientEnd:[dj,100],color:dl,width:1,radius:3}},"scrollbar-slider-vertical":{include:E,style:{orientation:ct}},"scrollbar-slider-horizontal-disabled":{include:E,style:{color:D}},"scrollbar-slider-vertical-disabled":{include:cA,style:{color:D}},"button":{style:{radius:3,color:dg,width:1,startColor:Q,endColor:cD,startColorPosition:35,endColorPosition:100}},"button-disabled":{include:cJ,style:{color:D,startColor:g,endColor:dk}},"button-hovered":{include:cJ,style:{startColor:y,endColor:o}},"button-checked":{include:cJ,style:{endColor:Q,startColor:cD}},"button-pressed":{include:cJ,style:{endColor:y,startColor:o}},"button-focused":{style:{radius:3,color:dg,width:1,innerColor:X,innerWidth:2,startColor:Q,endColor:cD,startColorPosition:30,endColorPosition:100}},"button-checked-focused":{include:X,style:{endColor:Q,startColor:cD}},"button-invalid":{include:cJ,style:{color:j}},"button-disabled-invalid":{include:cs,style:{color:j}},"button-hovered-invalid":{include:A,style:{color:j}},"button-checked-invalid":{include:cE,style:{color:j}},"button-pressed-invalid":{include:F,style:{color:j}},"button-focused-invalid":{include:X,style:{color:j}},"button-checked-focused-invalid":{include:a,style:{color:j}},"checkbox":{style:{width:1,color:dr,innerWidth:1,innerColor:cB,backgroundColor:df,shadowLength:0,shadowBlurRadius:0,shadowColor:cY}},"checkbox-hovered":{include:cR,style:{innerColor:M,backgroundColor:J}},"checkbox-focused":{include:cR,style:{shadowBlurRadius:4}},"checkbox-disabled":{include:cR,style:{color:c,innerColor:dF,backgroundColor:U}},"checkbox-invalid":{include:cR,style:{color:cr}},"checkbox-hovered-invalid":{include:J,style:{color:cr,innerColor:dC,backgroundColor:cU}},"checkbox-focused-invalid":{include:cM,style:{color:cr,shadowColor:cr}},"input":{style:{color:p,innerColor:t,innerWidth:1,width:1,backgroundColor:cS,startColor:x,endColor:dh,startColorPosition:0,endColorPosition:12,colorPositionUnit:cy}},"border-invalid":{include:Y,style:{color:j}},"input-focused":{include:Y,style:{startColor:cH,innerColor:du,endColorPosition:4}},"input-focused-invalid":{include:dB,style:{innerColor:dd,color:j}},"input-disabled":{include:Y,style:{color:cz}},"toolbar":{style:{startColorPosition:40,endColorPosition:60,startColor:dz,endColor:dI}},"toolbar-button-hovered":{style:{color:cN,width:1,innerWidth:1,innerColor:cF,radius:2,gradientStart:[Q,30],gradientEnd:[cD,100]}},"toolbar-button-checked":{include:N,style:{gradientStart:[cD,30],gradientEnd:[Q,100]}},"toolbar-separator":{style:{widthLeft:1,widthRight:1,colorLeft:cx,colorRight:db,styleLeft:P,styleRight:P}},"toolbar-part":{style:{backgroundImage:k,backgroundRepeat:r}},"tabview-pane":{style:{width:1,color:W,radius:3,gradientStart:[dq,90],gradientEnd:[H,100]}},"tabview-page-button-top-active":{style:{radius:[3,3,0,0],width:[1,1,0,1],color:cX,backgroundColor:dq,shadowLength:1,shadowColor:de,shadowBlurRadius:2}},"tabview-page-button-top-inactive":{style:{radius:[3,3,0,0],color:cv,colorBottom:cX,width:1,gradientStart:[cV,0],gradientEnd:[dH,100]}},"tabview-page-button-bottom-active":{include:dc,style:{radius:[0,0,3,3],width:[0,1,1,1],backgroundColor:cV,shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-bottom-inactive":{include:cP,style:{radius:[0,0,3,3],width:[0,1,1,1],colorBottom:cv,colorTop:cX}},"tabview-page-button-left-active":{include:dc,style:{radius:[3,0,0,3],width:[1,0,1,1],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-left-inactive":{include:cP,style:{radius:[3,0,0,3],width:[1,0,1,1],colorBottom:cv,colorRight:cX}},"tabview-page-button-right-active":{include:dc,style:{radius:[0,3,3,0],width:[1,1,1,0],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-right-inactive":{include:cP,style:{radius:[0,3,3,0],width:[1,1,1,0],colorBottom:cv,colorLeft:cX}},"splitpane":{style:{backgroundColor:dw,width:3,color:cC,style:P}},"window":{style:{radius:[5,5,0,0],shadowBlurRadius:4,shadowLength:2,shadowColor:de}},"window-incl-statusbar":{include:da,style:{radius:[5,5,5,5]}},"window-resize-frame":{style:{radius:[5,5,0,0],width:1,color:dl}},"window-resize-frame-incl-statusbar":{include:b,style:{radius:[5,5,5,5]}},"window-captionbar-active":{style:{width:1,color:W,colorBottom:m,radius:[5,5,0,0],gradientStart:[V,30],gradientEnd:[O,70]}},"window-captionbar-inactive":{include:L,style:{gradientStart:[di,30],gradientEnd:[ds,70]}},"window-statusbar":{style:{backgroundColor:G,width:[0,1,1,1],color:W,radius:[0,0,5,5]}},"window-pane":{style:{backgroundColor:dw,width:1,color:W,widthTop:0}},"table":{style:{width:1,color:dl,style:P}},"table-statusbar":{style:{widthTop:1,colorTop:dl,style:P}},"table-scroller-header":{style:{gradientStart:[cu,10],gradientEnd:[dE,90],widthBottom:1,colorBottom:dl}},"table-header-cell":{style:{widthRight:1,colorRight:l,styleRight:P}},"table-header-cell-hovered":{style:{widthRight:1,colorRight:l,styleRight:P,widthBottom:1,colorBottom:i,styleBottom:P}},"table-scroller-focus-indicator":{style:{width:2,color:dp,style:P}},"progressive-table-header":{style:{width:1,color:dl,style:P}},"progressive-table-header-cell":{style:{gradientStart:[cu,10],gradientEnd:[dE,90],widthRight:1,colorRight:C}},"menu":{style:{gradientStart:[cG,0],gradientEnd:[e,100],shadowColor:de,shadowBlurRadius:2,shadowLength:1,width:1,color:dl}},"menu-separator":{style:{widthTop:1,colorTop:dG,widthBottom:1,colorBottom:dn}},"menubar":{style:{gradientStart:[dA,0],gradientEnd:[e,100],width:1,color:l}},"app-header":{style:{gradientStart:[cQ,0],gradientEnd:[dm,100]}},"progressbar":{style:{width:1,color:p}},"group-item":{style:{startColorPosition:0,endColorPosition:100,startColor:cK,endColor:v}}}});}
)();
(function(){var a="black",b="#EEEEEE",c="#1a1a1a",d="#ffffdd",e="#b6b6b6",f="#004DAD",g="#BABABA",h="#005BC3",i="#334866",j="#00204D",k="#CECECE",l="gray",m="#D9D9D9",n="#D8D8D8",o="#99C3FE",p="#001533",q="#B3B3B3",r="#F4F4F4",s="#D5D5D5",t="#fffefe",u="#C3C3C3",v="#E4E4E4",w="#DDDDDD",x="#FF9999",y="css.rgba",z="#E8E8E9",A="#084FAA",B="#AFAFAF",C="white",D="#C5C5C5",E="rgba(0, 0, 0, 0.4)",F="#DBDBDB",G="#4a4a4a",H="#83BAEA",I="#D7E7F4",J="#07125A",K="#084FAB",L="#FAF2F2",M="#87AFE7",N="#F7EAEA",O="#777D8D",P="#FBFBFB",Q="#CACACA",R="#909090",S="#9B9B9B",T="#F0F9FE",U="#314a6e",V="#B4B4B4",W="#787878",X="qx.theme.modern.Color",Y="#000000",cb="#26364D",cc="#A7A7A7",cd="#D1E4FF",bW="#5CB0FD",bX="#FCFCFC",bY="#EAEAEA",ca="#003B91",ci="#80B4EF",cj="#FF6B78",ck="#949494",cl="#808080",ce="#F3F3F3",cf="#930000",cg="#7B7B7B",ch="#F0F0F0",cp="#C82C2C",cM="#DFDFDF",cN="#B6B6B6",cq="#0880EF",cm="#4d4d4d",cn="#f4f4f4",cP="#7B7A7E",co="#D0D0D0",cr="#f8f8f8",cs="#404955",ct="#959595",cx="#AAAAAA",cQ="#F7E9E9",cy="#314A6E",cu="#C72B2B",cv="#FAFAFA",cO="#FBFCFB",cw="#B2D2FF",cC="#666666",cD="#CBC8CD",cE="#999999",cF="#8EB8D6",cz="#b8b8b8",cA="#727272",cR="#33508D",cB="#E8E8E8",cJ="#CCCCCC",cK="#CCC",cS="#EFEFEF",cL="#F2F2F2",cG="#F1F1F1",cH="#990000",cI="#00368A";qx.Theme.define(X,{colors:{"background-application":cM,"background-pane":ce,"background-light":bX,"background-medium":b,"background-splitpane":B,"background-tip":d,"background-tip-error":cu,"background-odd":v,"htmlarea-background":C,"progressbar-background":C,"text-light":R,"text-gray":G,"text-label":c,"text-title":U,"text-input":Y,"text-hovered":p,"text-disabled":cP,"text-selected":t,"text-active":cb,"text-inactive":cs,"text-placeholder":cD,"border-inner-scrollbar":C,"border-main":cm,"menu-separator-top":D,"menu-separator-bottom":cv,"border-separator":cl,"border-toolbar-button-outer":e,"border-toolbar-border-inner":cr,"border-toolbar-separator-right":cn,"border-toolbar-separator-left":cz,"border-input":i,"border-inner-input":C,"border-disabled":cN,"border-pane":j,"border-button":cC,"border-column":cJ,"border-focused":o,"invalid":cH,"border-focused-invalid":x,"border-dragover":cR,"keyboard-focus":a,"table-pane":ce,"table-focus-indicator":cq,"table-row-background-focused-selected":K,"table-row-background-focused":ci,"table-row-background-selected":K,"table-row-background-even":ce,"table-row-background-odd":v,"table-row-selected":t,"table-row":c,"table-row-line":cK,"table-column-line":cK,"table-header-hovered":C,"progressive-table-header":cx,"progressive-table-header-border-right":cL,"progressive-table-row-background-even":r,"progressive-table-row-background-odd":v,"progressive-progressbar-background":l,"progressive-progressbar-indicator-done":cJ,"progressive-progressbar-indicator-undone":C,"progressive-progressbar-percent-background":l,"progressive-progressbar-percent-text":C,"selected-start":f,"selected-end":cI,"background-selected":cI,"tabview-background":J,"shadow":qx.core.Environment.get(y)?E:cE,"pane-start":P,"pane-end":ch,"group-background":cB,"group-border":V,"radiobutton-background":cS,"checkbox-border":cy,"checkbox-focus":M,"checkbox-hovered":cw,"checkbox-hovered-inner":cd,"checkbox-inner":b,"checkbox-start":v,"checkbox-end":ce,"checkbox-disabled-border":W,"checkbox-disabled-inner":Q,"checkbox-disabled-start":co,"checkbox-disabled-end":n,"checkbox-hovered-inner-invalid":L,"checkbox-hovered-invalid":cQ,"radiobutton-checked":h,"radiobutton-disabled":s,"radiobutton-checked-disabled":cg,"radiobutton-hovered-invalid":N,"tooltip-error":cp,"scrollbar-start":cJ,"scrollbar-end":cG,"scrollbar-slider-start":b,"scrollbar-slider-end":u,"button-border-disabled":ct,"button-start":ch,"button-end":B,"button-disabled-start":r,"button-disabled-end":g,"button-hovered-start":T,"button-hovered-end":cF,"button-focused":H,"border-invalid":cf,"input-start":ch,"input-end":cO,"input-focused-start":I,"input-focused-end":bW,"input-focused-inner-invalid":cj,"input-border-disabled":S,"input-border-inner":C,"toolbar-start":cS,"toolbar-end":w,"window-border":j,"window-border-caption":cA,"window-caption-active-text":C,"window-caption-active-start":A,"window-caption-active-end":ca,"window-caption-inactive-start":cL,"window-caption-inactive-end":F,"window-statusbar-background":cS,"tabview-start":bX,"tabview-end":b,"tabview-inactive":O,"tabview-inactive-start":bY,"tabview-inactive-end":k,"table-header-start":cB,"table-header-end":q,"menu-start":z,"menu-end":m,"menubar-start":cB,"groupitem-start":cc,"groupitem-end":ck,"groupitem-text":C,"virtual-row-layer-background-even":C,"virtual-row-layer-background-odd":C}});}
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
},"listitem":{alias:gr,style:function(hf){return {gap:4,padding:hf.lead?[2,4]:[3,5],backgroundColor:hf.selected?gh:undefined,textColor:hf.selected?fp:undefined,decorator:hf.lead?fY:undefined};}
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
},"tree-folder":{style:function(iu){return {padding:[2,3,2,0],icon:iu.opened?ep:gz,iconOpened:ep};}
},"tree-folder/icon":{style:function(iv){return {padding:[0,4,0,0]};}
},"tree-folder/label":{style:function(iw){return {padding:[1,2],backgroundColor:iw.selected?gh:undefined,textColor:iw.selected?fp:undefined};}
},"tree-file":{include:fb,alias:fb,style:function(ix){return {icon:fj};}
},"tree":{include:z,alias:z,style:function(iy){return {contentPadding:[4,4,4,4]};}
},"treevirtual":{style:function(iz){return {decorator:gk};}
},"treevirtual-folder":{style:function(iA){return {icon:(iA.opened?ep:gz)};}
},"treevirtual-file":{include:gl,alias:gl,style:function(iB){return {icon:fj};}
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
},"cell-image":fc,"cell-boolean":fc,"cell-atom":fc,"cell-date":fc,"cell-html":fc,"htmlarea":{"include":ed,style:function(kn){return {backgroundColor:N};}
},"progressbar":{style:function(ko){return {decorator:fN,padding:[1],backgroundColor:N,width:200,height:20};}
},"progressbar/progress":{style:function(kp){return {backgroundColor:kp.disabled?g:gh};}
},"app-header":{style:function(kq){return {textColor:fp,backgroundColor:gh,padding:[8,12]};}
},"app-header-label":eB,"app-splitpane":{alias:eX,style:function(kr){return {padding:[0,10,10,10],backgroundColor:en};}
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
(function(){var a="Use qx.dev.StackTrace.FORMAT_STACKTRACE instead",b="function",c="<span class='object'>",d="]:",e="&gt;",f="<span class='object' title='Object instance with hash code: ",g="FORMAT_STACK",h="string",k="level-",l="0",m="&lt;",n="<span class='offset'>",o="</span> ",p="}",q=":",r="qx.log.appender.Util",s="&amp;",t="&#39;",u="DIV",v="",w="]",x="'>",y="<span>",z="[",A=", ",B="</span>",C="\n",D="&quot;",E="<span class='type-key'>",F="{",G="</span>:<span class='type-",H="</span>: ",I=" ",J="]</span>: ",K="map",L="?",M="<span class='type-";qx.Class.define(r,{statics:{toHtml:function(V){var X=[];var T,W,O,Q;X.push(n,this.formatOffset(V.offset,6),o);if(V.object){var N=V.win.qx.core.ObjectRegistry.fromHashCode(V.object);if(N){X.push(f+N.$$hash+x,N.classname,z,N.$$hash,J);}
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
,escapeHTML:function(bd){return String(bd).replace(/[<>&"']/g,this.__ze);}
,__ze:function(bf){var be={"<":m,">":e,"&":s,"'":t,'"':D};return be[bf]||L;}
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
(function(){var a="html.console",b="qx.log.appender.Native",c="log";qx.Class.define(b,{statics:{process:function(d){if(qx.core.Environment.get(a)){var f=console[d.level]?d.level:c;if(console[f]){var e=qx.log.appender.Util.toText(d);console[f](e);}
;}
;}
},defer:function(g){qx.log.Logger.register(g);}
});}
)();
(function(){var a='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',b="Enter",c="px",d='</div>',f='.qxconsole .messages .user-result{background:white}',g='.qxconsole .messages .level-error{background:#FFE2D5}',h="div",i="user-command",j='<div class="command">',k="Up",l='.qxconsole .command input:focus{outline:none;}',m='.qxconsole .messages .type-key{color:#565656;font-style:italic}',n="none",o='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',p='.qxconsole .messages div{padding:0px 4px;}',q='.qxconsole .messages .level-debug{background:white}',r='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',s="DIV",t='.qxconsole .messages .level-user{background:#E3EFE9}',u='<div class="qxconsole">',v="",w="D",x='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',y='.qxconsole .messages .type-string{color:black;font-weight:normal;}',z='.qxconsole .control a{text-decoration:none;color:black;}',A='<div class="messages">',B='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',C='<input type="text"/>',D="clear",E='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',F="keypress",G='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',H='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',I='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',J='.qxconsole .messages .user-command{color:blue}',K="F7",L="qx.log.appender.Console",M='.qxconsole .messages .level-info{background:#DEEDFA}',N="block",O='.qxconsole .messages .level-warn{background:#FFF7D5}',P='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',Q='.qxconsole .messages .user-error{background:#FFE2D5}',R='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',S='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',T=">>> ",U="Down",V='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';qx.Class.define(L,{statics:{__yX:null,__cr:null,__yY:null,__za:null,init:function(){var W=[H,R,z,a,p,J,f,Q,q,M,O,g,t,y,V,B,G,x,m,r,o,P,I,E,l];qx.bom.Stylesheet.createElement(W.join(v));var Y=[u,S,A,d,j,C,d,d];var ba=document.createElement(s);ba.innerHTML=Y.join(v);var X=ba.firstChild;document.body.appendChild(ba.firstChild);this.__yX=X;this.__cr=X.childNodes[1];this.__yY=X.childNodes[2].firstChild;this.__zd();qx.log.Logger.register(this);qx.core.ObjectRegistry.register(this);}
,dispose:function(){qx.event.Registration.removeListener(document.documentElement,F,this.__ik,this);qx.log.Logger.unregister(this);}
,clear:function(){this.__cr.innerHTML=v;}
,process:function(bb){this.__cr.appendChild(qx.log.appender.Util.toHtml(bb));this.__zb();}
,__zb:function(){this.__cr.scrollTop=this.__cr.scrollHeight;}
,__gq:true,toggle:function(){if(!this.__yX){this.init();}
else if(this.__yX.style.display==n){this.show();}
else {this.__yX.style.display=n;}
;}
,show:function(){if(!this.__yX){this.init();}
else {this.__yX.style.display=N;this.__cr.scrollTop=this.__cr.scrollHeight;}
;}
,__zc:[],execute:function(){var bd=this.__yY.value;if(bd==v){return;}
;if(bd==D){this.clear();return;}
;var bc=document.createElement(h);bc.innerHTML=qx.log.appender.Util.escapeHTML(T+bd);bc.className=i;this.__zc.push(bd);this.__za=this.__zc.length;this.__cr.appendChild(bc);this.__zb();try{var be=window.eval(bd);}
catch(bf){qx.log.Logger.error(bf);}
;if(be!==undefined){qx.log.Logger.debug(be);}
;}
,__zd:function(e){this.__cr.style.height=(this.__yX.clientHeight-this.__yX.firstChild.offsetHeight-this.__yX.lastChild.offsetHeight)+c;}
,__ik:function(e){var bh=e.getKeyIdentifier();if((bh==K)||(bh==w&&e.isCtrlPressed())){this.toggle();e.preventDefault();}
;if(!this.__yX){return;}
;if(!qx.dom.Hierarchy.contains(this.__yX,e.getTarget())){return;}
;if(bh==b&&this.__yY.value!=v){this.execute();this.__yY.value=v;}
;if(bh==k||bh==U){this.__za+=bh==k?-1:1;this.__za=Math.min(Math.max(0,this.__za),this.__zc.length);var bg=this.__zc[this.__za];this.__yY.value=bg||v;this.__yY.select();}
;}
},defer:function(bi){qx.event.Registration.addListener(document.documentElement,F,bi.__ik,bi);}
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

