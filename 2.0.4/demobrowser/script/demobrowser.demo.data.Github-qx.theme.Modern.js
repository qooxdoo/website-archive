(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"locale":"en","locale.variant":"US","qx.allowUrlSettings":true,"qx.allowUrlVariants":true,"qx.application":"demobrowser.demo.data.Github","qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.whitespace":true,"qx.theme":"qx.theme.Modern"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","sourceViewUri":"https://github.com/qooxdoo/qooxdoo/blob/%{qxGitBranch}/framework/source/class/%{classFilePath}#L%{lineNumber}"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"de":null,"de_DE":null,"en":null,"en_US":null,"fr":null,"fr_FR":null};
qx.$$locales = {"C":null,"de":null,"de_DE":null,"en":null,"en_US":null,"fr":null,"fr_FR":null};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:demobrowser.demo.data.Github-qx.theme.Modern.18f77ffa20f2.js"]}},
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

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"E, d.M.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, d. MMM y","cldr_date_time_format_yMMMd":"d. MMM y","cldr_date_time_format_yMd":"d.M.y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Jun","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"Tag","dayperiod":"Tageshälfte","era":"Epoche","hour":"Stunde","minute":"Minute","month":"Monat","quotationEnd":"“","quotationStart":"„","second":"Sekunde","week":"Woche","weekday":"Wochentag","year":"Jahr","zone":"Zone"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"en_US":{},"fr":{"alternateQuotationEnd":"»","alternateQuotationStart":"«","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"E d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E d MMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d/M/yyyy","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEd":"E d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_abbreviated_1":"janv.","cldr_month_stand-alone_abbreviated_10":"oct.","cldr_month_stand-alone_abbreviated_11":"nov.","cldr_month_stand-alone_abbreviated_12":"déc.","cldr_month_stand-alone_abbreviated_2":"févr.","cldr_month_stand-alone_abbreviated_3":"mars","cldr_month_stand-alone_abbreviated_4":"avr.","cldr_month_stand-alone_abbreviated_7":"juil.","cldr_month_stand-alone_abbreviated_9":"sept.","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"jour","dayperiod":"cadran","era":"ère","hour":"heure","minute":"minute","month":"mois","quotationEnd":"”","quotationStart":"“","second":"seconde","week":"semaine","weekday":"jour de la semaine","year":"année","zone":"fuseau horaire"},"fr_FR":{}},"resources":{"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser.demo"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Modern/form/checked.png":[6,6,"png","qx"],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow-right.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/form/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Modern/form/undetermined.png":[6,2,"png","qx"],"qx/decoration/Modern/group-item.png":[110,20,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-44],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-22],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{"C":{},"de":{},"de_DE":{},"en":{},"en_US":{},"fr":{},"fr_FR":{}}};
(function(){var m=".prototype",k="function",j="Boolean",h="Error",g="constructor",f="warn",e="default",d="hasOwnProperty",c="string",b="toLocaleString",K="RegExp",J='\", "',I="info",H="BROKEN_IE",G="isPrototypeOf",F="Date",E="qx.Bootstrap",D="]",C="Class",B="error",t="[Class ",u="valueOf",r="Number",s="debug",p="ES5",q="Object",n='"',o="",v="Array",w="()",y="String",x="Function",A="toString",z=".";if(!window.qx){window.qx={};}
;qx.Bootstrap={genericToString:function(){return t+this.classname+D;}
,createNamespace:function(name,L){var N=name.split(z);var parent=window;var M=N[0];for(var i=0,O=N.length-1;i<O;i++,M=N[i]){if(!parent[M]){parent=parent[M]={};}
else {parent=parent[M];}
;}
;parent[M]=L;return M;}
,setDisplayName:function(P,Q,name){P.displayName=Q+z+name+w;}
,setDisplayNames:function(R,S){for(var name in R){var T=R[name];if(T instanceof Function){T.displayName=S+z+name+w;}
;}
;}
,define:function(name,U){if(!U){var U={statics:{}};}
;var ba;var X=null;qx.Bootstrap.setDisplayNames(U.statics,name);if(U.members||U.extend){qx.Bootstrap.setDisplayNames(U.members,name+m);ba=U.construct||new Function;if(U.extend){this.extendClass(ba,ba,U.extend,name,Y);}
;var V=U.statics||{};for(var i=0,bb=qx.Bootstrap.getKeys(V),l=bb.length;i<l;i++){var bc=bb[i];ba[bc]=V[bc];}
;X=ba.prototype;var W=U.members||{};for(var i=0,bb=qx.Bootstrap.getKeys(W),l=bb.length;i<l;i++){var bc=bb[i];X[bc]=W[bc];}
;}
else {ba=U.statics||{};}
;var Y=name?this.createNamespace(name,ba):o;ba.name=ba.classname=name;ba.basename=Y;ba.$$type=C;if(!ba.hasOwnProperty(A)){ba.toString=this.genericToString;}
;if(U.defer){U.defer(ba,X);}
;qx.Bootstrap.$$registry[name]=ba;return ba;}
};qx.Bootstrap.define(E,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var bd=true;if(qx.$$environment&&qx.$$environment["qx.debug"]===false){bd=false;}
;return bd;}
)(),getEnvironmentSetting:function(be){if(qx.$$environment){return qx.$$environment[be];}
;}
,setEnvironmentSetting:function(bf,bg){if(!qx.$$environment){qx.$$environment={};}
;if(qx.$$environment[bf]===undefined){qx.$$environment[bf]=bg;}
;}
,createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bh,bi,bj,name,bk){var bn=bj.prototype;var bm=new Function;bm.prototype=bn;var bl=new bm;bh.prototype=bl;bl.name=bl.classname=name;bl.basename=bk;bi.base=bh.superclass=bj;bi.self=bh.constructor=bl.constructor=bh;}
,getByName:function(name){return qx.Bootstrap.$$registry[name];}
,$$registry:{},objectGetLength:function(bo){var length=0;for(var bp in bo){length++;}
;return length;}
,objectMergeWith:function(bq,br,bs){if(bs===undefined){bs=true;}
;for(var bt in br){if(bs||bq[bt]===undefined){bq[bt]=br[bt];}
;}
;return bq;}
,__a:[G,d,b,A,u,g],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bu){var bv=[];var bx=Object.prototype.hasOwnProperty;for(var by in bu){if(bx.call(bu,by)){bv.push(by);}
;}
;var bw=qx.Bootstrap.__a;for(var i=0,a=bw,l=a.length;i<l;i++){if(bx.call(bu,a[i])){bv.push(a[i]);}
;}
;return bv;}
,"default":function(bz){var bA=[];var bB=Object.prototype.hasOwnProperty;for(var bC in bz){if(bB.call(bz,bC)){bA.push(bC);}
;}
;return bA;}
})[typeof (Object.keys)==k?p:(function(){for(var bD in {toString:1}){return bD;}
;}
)()!==A?H:e],getKeysAsString:function(bE){var bF=qx.Bootstrap.getKeys(bE);if(bF.length==0){return o;}
;return n+bF.join(J)+n;}
,__b:{"[object String]":y,"[object Array]":v,"[object Object]":q,"[object RegExp]":K,"[object Number]":r,"[object Boolean]":j,"[object Date]":F,"[object Function]":x,"[object Error]":h},bind:function(bG,self,bH){var bI=Array.prototype.slice.call(arguments,2,arguments.length);return function(){var bJ=Array.prototype.slice.call(arguments,0,arguments.length);return bG.apply(self,bI.concat(bJ));}
;}
,firstUp:function(bK){return bK.charAt(0).toUpperCase()+bK.substr(1);}
,firstLow:function(bL){return bL.charAt(0).toLowerCase()+bL.substr(1);}
,getClass:function(bM){var bN=Object.prototype.toString.call(bM);return (qx.Bootstrap.__b[bN]||bN.slice(8,-1));}
,isString:function(bO){return (bO!==null&&(typeof bO===c||qx.Bootstrap.getClass(bO)==y||bO instanceof String||(!!bO&&!!bO.$$isString)));}
,isArray:function(bP){return (bP!==null&&(bP instanceof Array||(bP&&qx.data&&qx.data.IListData&&qx.util.OOUtil.hasInterface(bP.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bP)==v||(!!bP&&!!bP.$$isArray)));}
,isObject:function(bQ){return (bQ!==undefined&&bQ!==null&&qx.Bootstrap.getClass(bQ)==q);}
,isFunction:function(bR){return qx.Bootstrap.getClass(bR)==x;}
,$$logs:[],debug:function(bS,bT){qx.Bootstrap.$$logs.push([s,arguments]);}
,info:function(bU,bV){qx.Bootstrap.$$logs.push([I,arguments]);}
,warn:function(bW,bX){qx.Bootstrap.$$logs.push([f,arguments]);}
,error:function(bY,ca){qx.Bootstrap.$$logs.push([B,arguments]);}
,trace:function(cb){}
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
,getByInterface:function(f,g){var h,i,l;while(f){if(f.$$implements){h=f.$$flatImplements;for(i=0,l=h.length;i<l;i++){if(h[i]===g){return f;}
;}
;}
;f=f.superclass;}
;return null;}
,hasInterface:function(j,k){return !!qx.util.OOUtil.getByInterface(j,k);}
,getMixins:function(m){var n=[];while(m){if(m.$$includes){n.push.apply(n,m.$$flatIncludes);}
;m=m.superclass;}
;return n;}
}});}
)();
(function(){var cs="qx.blankpage",cr="qx.bom.client.Stylesheet.getInsertRule",cq="qx.bom.client.Html.getDataset",cp="qx.bom.client.PhoneGap.getPhoneGap",co='] found, and no default ("default") given',cn="qx.bom.client.Html.getAudioAif",cm="qx.bom.client.CssTransform.get3D",cl=' type)',ck="qx.bom.client.Xml.getAttributeNS",cj="qx.bom.client.Stylesheet.getRemoveImport",bt="qx.bom.client.Css.getUserModify",bs="qx.bom.client.Css.getFilterGradient",br="qx.bom.client.Event.getHashChange",bq="qx.bom.client.Plugin.getWindowsMedia",bp="qx.bom.client.Html.getVideo",bo="qx.bom.client.Device.getName",bn="qx.bom.client.Event.getTouch",bm="qx.optimization.strings",bl="qx.debug.property.level",bk="qx.optimization.variables",cz="qx.bom.client.EcmaScript.getStackTrace",cA="qx.bom.client.Xml.getSelectSingleNode",cx="qx.bom.client.Xml.getImplementation",cy="qx.bom.client.Html.getConsole",cv="qx.bom.client.Engine.getVersion",cw="qx.bom.client.Plugin.getQuicktime",ct="qx.bom.client.Html.getNaturalDimensions",cu="qx.bom.client.Xml.getSelectNodes",cB="qx.bom.client.Xml.getElementsByTagNameNS",cC="qx.bom.client.Html.getDataUrl",bR="qx.bom.client.Flash.isAvailable",bQ="qx.bom.client.Html.getCanvas",bT="qx.bom.client.Css.getBoxModel",bS="qx.bom.client.Plugin.getSilverlight",bV="qx/static/blank.html",bU="qx.bom.client.Css.getUserSelect",bX="qx.bom.client.Css.getRadialGradient",bW="module.property",bP="qx.bom.client.Plugin.getWindowsMediaVersion",bO="qx.bom.client.Stylesheet.getCreateStyleSheet",a='No match for variant "',b="qx.bom.client.Locale.getLocale",c="module.events",d="module.databinding",e="qx.bom.client.Html.getFileReader",f="qx.bom.client.Css.getBorderImage",g="qx.bom.client.Stylesheet.getDeleteRule",h="qx.bom.client.Plugin.getDivXVersion",j="qx.bom.client.Scroll.scrollBarOverlayed",k="qx.bom.client.Plugin.getPdfVersion",cQ=":",cP="qx.bom.client.Css.getLinearGradient",cO="qx.bom.client.Transport.getXmlHttpRequest",cN="qx.bom.client.Css.getBorderImageSyntax",cU="qx.bom.client.Html.getClassList",cT="qx.bom.client.Event.getHelp",cS="qx.optimization.comments",cR="qx.bom.client.Locale.getVariant",cW="qx.bom.client.Css.getBoxSizing",cV="qx.bom.client.OperatingSystem.getName",J="module.logger",K="qx.bom.client.Css.getOverflowXY",H="qx.mobile.emulatetouch",I="qx.bom.client.Html.getAudioWav",N="qx.bom.client.Browser.getName",O="qx.bom.client.Css.getInlineBlock",L="qx.bom.client.Plugin.getPdf",M="qx.dynlocale",F='" (',G="qx.bom.client.Html.getAudio",s="qx.core.Environment",r="qx.bom.client.CssTransform.getSupport",u="qx.bom.client.Html.getTextContent",t="qx.bom.client.Css.getPlaceholder",o="qx.bom.client.Css.getFloat",n=' in variants [',q="false",p="qx.bom.client.Css.getBoxShadow",m="qx.bom.client.Html.getXul",l="qx.bom.client.Xml.getCreateNode",T="qxenv",U="qx.bom.client.Html.getSessionStorage",V="qx.bom.client.Html.getAudioAu",W="qx.bom.client.Css.getOpacity",P="qx.bom.client.Css.getFilterTextShadow",Q="qx.bom.client.Html.getVml",R="qx.bom.client.Css.getRgba",S="qx.bom.client.Transport.getMaxConcurrentRequestCount",X="qx.bom.client.Css.getBorderRadius",Y="qx.bom.client.Event.getPointer",C="qx.bom.client.Transport.getSsl",B="qx.bom.client.Html.getWebWorker",A="qx.bom.client.Json.getJson",z="qx.bom.client.Browser.getQuirksMode",y="qx.debug.dispose",x="qx.bom.client.Css.getTextOverflow",w="qx.bom.client.Xml.getQualifiedItem",v="qx.bom.client.Html.getVideoOgg",E="&",D="qx.bom.client.Device.getType",ba="qx.bom.client.Browser.getDocumentMode",bb="qx.allowUrlVariants",bc="qx.bom.client.Html.getContains",bd="qx.bom.client.Plugin.getActiveX",be=".",bf="qx.bom.client.Xml.getDomProperties",bg="qx.bom.client.CssAnimation.getSupport",bh="qx.debug.databinding",bi="qx.optimization.basecalls",bj="qx.bom.client.Browser.getVersion",bx="qx.bom.client.Css.getUserSelectNone",bw="qx.bom.client.Html.getSvg",bv="qx.optimization.privates",bu="qx.bom.client.Plugin.getDivX",bB="qx.bom.client.Runtime.getName",bA="qx.bom.client.Html.getLocalStorage",bz="qx.bom.client.Flash.getStrictSecurityModel",by="qx.aspects",bD="qx.debug",bC="qx.dynamicmousewheel",bK="qx.bom.client.Html.getAudioMp3",bL="qx.bom.client.Engine.getName",bI="qx.bom.client.Html.getUserDataStorage",bJ="qx.bom.client.Plugin.getGears",bG="qx.bom.client.Plugin.getQuicktimeVersion",bH="qx.bom.client.Html.getAudioOgg",bE="qx.bom.client.Css.getTextShadow",bF="qx.bom.client.Plugin.getSilverlightVersion",bM="qx.bom.client.Html.getCompareDocumentPosition",bN="qx.bom.client.Flash.getExpressInstall",cc="qx.bom.client.OperatingSystem.getVersion",cb="qx.bom.client.Html.getXPath",ce="qx.bom.client.Html.getGeoLocation",cd="qx.bom.client.Css.getAppearance",cg="qx.mobile.nativescroll",cf="qx.bom.client.Xml.getDomParser",ci="qx.bom.client.Stylesheet.getAddImport",ch="qx.optimization.variants",ca="qx.bom.client.Html.getVideoWebm",bY="qx.bom.client.Flash.getVersion",cJ="qx.bom.client.Css.getLegacyWebkitGradient",cK="qx.bom.client.PhoneGap.getNotification",cL="qx.bom.client.Html.getVideoH264",cM="qx.bom.client.Xml.getCreateElementNS",cF="qx.core.Environment for a list of predefined keys.",cG=" is not a valid key. Please see the API-doc of ",cH="default",cI="|",cD="true",cE="qx.allowUrlSettings";qx.Bootstrap.define(s,{statics:{_checks:{},_asyncChecks:{},__e:{},_checksMap:{"engine.version":cv,"engine.name":bL,"browser.name":N,"browser.version":bj,"browser.documentmode":ba,"browser.quirksmode":z,"runtime.name":bB,"device.name":bo,"device.type":D,"locale":b,"locale.variant":cR,"os.name":cV,"os.version":cc,"os.scrollBarOverlayed":j,"plugin.gears":bJ,"plugin.activex":bd,"plugin.quicktime":cw,"plugin.quicktime.version":bG,"plugin.windowsmedia":bq,"plugin.windowsmedia.version":bP,"plugin.divx":bu,"plugin.divx.version":h,"plugin.silverlight":bS,"plugin.silverlight.version":bF,"plugin.flash":bR,"plugin.flash.version":bY,"plugin.flash.express":bN,"plugin.flash.strictsecurity":bz,"plugin.pdf":L,"plugin.pdf.version":k,"io.maxrequests":S,"io.ssl":C,"io.xhr":cO,"event.touch":bn,"event.pointer":Y,"event.help":cT,"event.hashchange":br,"ecmascript.stacktrace":cz,"html.webworker":B,"html.filereader":e,"html.geolocation":ce,"html.audio":G,"html.audio.ogg":bH,"html.audio.mp3":bK,"html.audio.wav":I,"html.audio.au":V,"html.audio.aif":cn,"html.video":bp,"html.video.ogg":v,"html.video.h264":cL,"html.video.webm":ca,"html.storage.local":bA,"html.storage.session":U,"html.storage.userdata":bI,"html.classlist":cU,"html.xpath":cb,"html.xul":m,"html.canvas":bQ,"html.svg":bw,"html.vml":Q,"html.dataset":cq,"html.dataurl":cC,"html.console":cy,"html.stylesheet.createstylesheet":bO,"html.stylesheet.insertrule":cr,"html.stylesheet.deleterule":g,"html.stylesheet.addimport":ci,"html.stylesheet.removeimport":cj,"html.element.contains":bc,"html.element.compareDocumentPosition":bM,"html.element.textcontent":u,"html.image.naturaldimensions":ct,"json":A,"css.textoverflow":x,"css.placeholder":t,"css.borderradius":X,"css.borderimage":f,"css.borderimage.standardsyntax":cN,"css.boxshadow":p,"css.gradient.linear":cP,"css.gradient.filter":bs,"css.gradient.radial":bX,"css.gradient.legacywebkit":cJ,"css.boxmodel":bT,"css.rgba":R,"css.userselect":bU,"css.userselect.none":bx,"css.usermodify":bt,"css.appearance":cd,"css.float":o,"css.boxsizing":cW,"css.animation":bg,"css.transform":r,"css.transform.3d":cm,"css.inlineblock":O,"css.opacity":W,"css.overflowxy":K,"css.textShadow":bE,"css.textShadow.filter":P,"phonegap":cp,"phonegap.notification":cK,"xml.implementation":cx,"xml.domparser":cf,"xml.selectsinglenode":cA,"xml.selectnodes":cu,"xml.getelementsbytagnamens":cB,"xml.domproperties":bf,"xml.attributens":ck,"xml.createnode":l,"xml.getqualifieditem":w,"xml.createelementns":cM},get:function(cX){if(this.__e[cX]!=undefined){return this.__e[cX];}
;var db=this._checks[cX];if(db){var dc=db();this.__e[cX]=dc;return dc;}
;var da=this._getClassNameFromEnvKey(cX);if(da[0]!=undefined){var dd=da[0];var cY=da[1];var dc=dd[cY]();this.__e[cX]=dc;return dc;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(cX+cG+cF);qx.Bootstrap.trace(this);}
;}
,_getClassNameFromEnvKey:function(de){var dk=this._checksMap;if(dk[de]!=undefined){var dg=dk[de];var dj=dg.lastIndexOf(be);if(dj>-1){var di=dg.slice(0,dj);var df=dg.slice(dj+1);var dh=qx.Bootstrap.getByName(di);if(dh!=undefined){return [dh,df];}
;}
;}
;return [undefined,undefined];}
,getAsync:function(dl,dm,self){var dr=this;if(this.__e[dl]!=undefined){window.setTimeout(function(){dm.call(self,dr.__e[dl]);}
,0);return;}
;var dq=this._asyncChecks[dl];if(dq){dq(function(dt){dr.__e[dl]=dt;dm.call(self,dt);}
);return;}
;var dp=this._getClassNameFromEnvKey(dl);if(dp[0]!=undefined){var ds=dp[0];var dn=dp[1];ds[dn](function(du){dr.__e[dl]=du;dm.call(self,du);}
);return;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(dl+cG+cF);qx.Bootstrap.trace(this);}
;}
,select:function(dv,dw){return this.__f(this.get(dv),dw);}
,selectAsync:function(dx,dy,self){this.getAsync(dx,function(dz){var dA=this.__f(dx,dy);dA.call(self,dz);}
,this);}
,__f:function(dB,dC){var dE=dC[dB];if(dC.hasOwnProperty(dB)){return dE;}
;for(var dD in dC){if(dD.indexOf(cI)!=-1){var dF=dD.split(cI);for(var i=0;i<dF.length;i++){if(dF[i]==dB){return dC[dD];}
;}
;}
;}
;if(dC[cH]!==undefined){return dC[cH];}
;if(qx.Bootstrap.DEBUG){throw new Error(a+dB+F+(typeof dB)+cl+n+qx.Bootstrap.getKeysAsString(dC)+co);}
;}
,filter:function(dG){var dI=[];for(var dH in dG){if(this.get(dH)){dI.push(dG[dH]);}
;}
;return dI;}
,invalidateCacheKey:function(dJ){delete this.__e[dJ];}
,add:function(dK,dL){if(this._checks[dK]==undefined){if(dL instanceof Function){this._checks[dK]=dL;}
else {this._checks[dK]=this.__i(dL);}
;}
;}
,addAsync:function(dM,dN){if(this._checks[dM]==undefined){this._asyncChecks[dM]=dN;}
;}
,getChecks:function(){return this._checks;}
,getAsyncChecks:function(){return this._asyncChecks;}
,_initDefaultQxValues:function(){this.add(cD,function(){return true;}
);this.add(cE,function(){return false;}
);this.add(bb,function(){return false;}
);this.add(bl,function(){return 0;}
);this.add(bD,function(){return true;}
);this.add(by,function(){return false;}
);this.add(M,function(){return true;}
);this.add(H,function(){return false;}
);this.add(cg,function(){return false;}
);this.add(cs,function(){return bV;}
);this.add(bC,function(){return true;}
);this.add(bh,function(){return false;}
);this.add(y,function(){return false;}
);this.add(bi,function(){return false;}
);this.add(cS,function(){return false;}
);this.add(bv,function(){return false;}
);this.add(bm,function(){return false;}
);this.add(bk,function(){return false;}
);this.add(ch,function(){return false;}
);this.add(d,function(){return true;}
);this.add(J,function(){return true;}
);this.add(bW,function(){return true;}
);this.add(c,function(){return true;}
);}
,__g:function(){if(qx&&qx.$$environment){for(var dP in qx.$$environment){var dO=qx.$$environment[dP];this._checks[dP]=this.__i(dO);}
;}
;}
,__h:function(){if(window.document&&window.document.location){var dQ=window.document.location.search.slice(1).split(E);for(var i=0;i<dQ.length;i++){var dS=dQ[i].split(cQ);if(dS.length!=3||dS[0]!=T){continue;}
;var dT=dS[1];var dR=decodeURIComponent(dS[2]);if(dR==cD){dR=true;}
else if(dR==q){dR=false;}
else if(/^(\d|\.)+$/.test(dR)){dR=parseFloat(dR);}
;;this._checks[dT]=this.__i(dR);}
;}
;}
,__i:function(dU){return qx.Bootstrap.bind(function(dV){return dV;}
,null,dU);}
},defer:function(dW){dW._initDefaultQxValues();dW.__g();if(dW.get(cE)===true){dW.__h();}
;}
});}
)();
(function(){var m=".prototype",k="'is undefined/null!",j="constructor",h='The configuration key "',g='" is not allowed!',f='"! The type of the key must be "',e="RegExp",d="members",c='" in property "',b="properties",K="statics",J="qx.Mixin",I="events",H="'is not a mixin!",G='Invalid type of key "',F="]",E='"! The value needs to be a map!',D="[Mixin ",C="destruct",B="Date",t='"! The value is undefined/null!',u="function",r="' in mixin '",s='" in member "',p="Array",q="Mixin",n="Includes of mixins must be mixins. The include number '",o='Invalid key "',v='Conflict between mixin "',w='" and "',y="qx.debug",x='"!',A='" in mixin "',z="object";qx.Bootstrap.define(J,{statics:{define:function(name,L){if(L){if(L.include&&!(qx.Bootstrap.getClass(L.include)===p)){L.include=[L.include];}
;if(qx.core.Environment.get(y)){this.__d(name,L);}
;var N=L.statics?L.statics:{};qx.Bootstrap.setDisplayNames(N,name);for(var M in N){if(N[M] instanceof Function){N[M].$$mixin=N;}
;}
;if(L.construct){N.$$constructor=L.construct;qx.Bootstrap.setDisplayName(L.construct,name,j);}
;if(L.include){N.$$includes=L.include;}
;if(L.properties){N.$$properties=L.properties;}
;if(L.members){N.$$members=L.members;qx.Bootstrap.setDisplayNames(L.members,name+m);}
;for(var M in N.$$members){if(N.$$members[M] instanceof Function){N.$$members[M].$$mixin=N;}
;}
;if(L.events){N.$$events=L.events;}
;if(L.destruct){N.$$destructor=L.destruct;qx.Bootstrap.setDisplayName(L.destruct,name,C);}
;}
else {var N={};}
;N.$$type=q;N.name=name;N.toString=this.genericToString;N.basename=qx.Bootstrap.createNamespace(name,N);this.$$registry[name]=N;return N;}
,checkCompatibility:function(O){var R=this.flatten(O);var S=R.length;if(S<2){return true;}
;var V={};var U={};var T={};var Q;for(var i=0;i<S;i++){Q=R[i];for(var P in Q.events){if(T[P]){throw new Error(v+Q.name+w+T[P]+s+P+x);}
;T[P]=Q.name;}
;for(var P in Q.properties){if(V[P]){throw new Error(v+Q.name+w+V[P]+c+P+x);}
;V[P]=Q.name;}
;for(var P in Q.members){if(U[P]){throw new Error(v+Q.name+w+U[P]+s+P+x);}
;U[P]=Q.name;}
;}
;return true;}
,isCompatible:function(W,X){var Y=qx.util.OOUtil.getMixins(X);Y.push(W);return qx.Mixin.checkCompatibility(Y);}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,flatten:function(ba){if(!ba){return [];}
;var bb=ba.concat();for(var i=0,l=ba.length;i<l;i++){if(ba[i].$$includes){bb.push.apply(bb,this.flatten(ba[i].$$includes));}
;}
;return bb;}
,genericToString:function(){return D+this.name+F;}
,$$registry:{},__c:qx.core.Environment.select(y,{"true":{"include":z,"statics":z,"members":z,"properties":z,"events":z,"destruct":u,"construct":u},"default":null}),__d:qx.core.Environment.select(y,{"true":function(name,bc){var bf=this.__c;for(var be in bc){if(!bf[be]){throw new Error(h+be+A+name+g);}
;if(bc[be]==null){throw new Error(o+be+A+name+t);}
;if(bf[be]!==null&&typeof bc[be]!==bf[be]){throw new Error(G+be+A+name+f+bf[be]+x);}
;}
;var bd=[K,d,b,I];for(var i=0,l=bd.length;i<l;i++){var be=bd[i];if(bc[be]!==undefined&&([p,e,B].indexOf(qx.Bootstrap.getClass(bc[be]))!=-1||bc[be].classname!==undefined)){throw new Error(o+be+A+name+E);}
;}
;if(bc.include){for(var i=0,a=bc.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error(n+(i+1)+r+name+k);}
;if(a[i].$$type!==q){throw new Error(n+(i+1)+r+name+H);}
;}
;this.checkCompatibility(bc.include);}
;}
,"default":function(){}
})}});}
)();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";qx.Bootstrap.define(d,{statics:{__bc:[],wrap:function(e,f,g){var m=[];var h=[];var l=this.__bc;var k;for(var i=0;i<l.length;i++){k=l[i];if((k.type==null||g==k.type||k.type==b)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);}
;}
;if(m.length===0&&h.length===0){return f;}
;var j=function(){for(var i=0;i<m.length;i++){m[i].call(this,e,f,g,arguments);}
;var n=f.apply(this,arguments);for(var i=0;i<h.length;i++){h[i].call(this,e,f,g,arguments,n);}
;return n;}
;if(g!==a){j.self=f.self;j.base=f.base;}
;f.wrapper=j;j.original=f;return j;}
,addAdvice:function(o,p,q,name){this.__bc.push({fcn:o,pos:p===c?-1:1,type:q,name:name});}
}});}
)();
(function(){var m="function",k="Boolean",j="'! The value is undefined/null!",h="RegExp",g='The configuration key "',f='The property "',e='" is not allowed!',d="string",c='Implementation of method "',b="members",V="number",U="properties",T="statics",S="Invalid key '",R='The event "',Q="events",P='Invalid type of key "',O="]",N='" in class "',M='"! The value needs to be a map!',t="' is undefined/null!",u='"! The type of the key must be "',r='Implementation of member "',s="' is not an interface!",p="qx.Interface",q="Date",n='"! Static constants must be all uppercase.',o="toggle",v="boolean",w="is",D="[Interface ",B='"! Static constants must be all of a primitive type.',G='"',F="Array",I='" is missing in class "',H="Interface",y="Extends of interfaces must be interfaces. The extend number '",L='" is not supported by Class "',K='" required by interface "',J="' in interface '",x='"!',z='Invalid key "',A='" in interface "',C="qx.debug",E="object";qx.Bootstrap.define(p,{statics:{define:function(name,W){if(W){if(W.extend&&!(qx.Bootstrap.getClass(W.extend)===F)){W.extend=[W.extend];}
;if(qx.core.Environment.get(C)){this.__d(name,W);}
;var X=W.statics?W.statics:{};if(W.extend){X.$$extends=W.extend;}
;if(W.properties){X.$$properties=W.properties;}
;if(W.members){X.$$members=W.members;}
;if(W.events){X.$$events=W.events;}
;}
else {var X={};}
;X.$$type=H;X.name=name;X.toString=this.genericToString;X.basename=qx.Bootstrap.createNamespace(name,X);qx.Interface.$$registry[name]=X;return X;}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,flatten:function(Y){if(!Y){return [];}
;var ba=Y.concat();for(var i=0,l=Y.length;i<l;i++){if(Y[i].$$extends){ba.push.apply(ba,this.flatten(Y[i].$$extends));}
;}
;return ba;}
,__j:function(bb,bc,bd,be){var bi=bd.$$members;if(bi){for(var bh in bi){if(qx.Bootstrap.isFunction(bi[bh])){var bg=this.__k(bc,bh);var bf=bg||qx.Bootstrap.isFunction(bb[bh]);if(!bf){throw new Error(c+bh+I+bc.classname+K+bd.name+G);}
;var bj=be===true&&!bg&&!qx.util.OOUtil.hasInterface(bc,bd);if(bj){bb[bh]=this.__n(bd,bb[bh],bh,bi[bh]);}
;}
else {if(typeof bb[bh]===undefined){if(typeof bb[bh]!==m){throw new Error(r+bh+I+bc.classname+K+bd.name+G);}
;}
;}
;}
;}
;}
,__k:function(bk,bl){var bp=bl.match(/^(is|toggle|get|set|reset)(.*)$/);if(!bp){return false;}
;var bm=qx.Bootstrap.firstLow(bp[2]);var bn=qx.util.OOUtil.getPropertyDefinition(bk,bm);if(!bn){return false;}
;var bo=bp[0]==w||bp[0]==o;if(bo){return qx.util.OOUtil.getPropertyDefinition(bk,bm).check==k;}
;return true;}
,__l:function(bq,br){if(br.$$properties){for(var bs in br.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(bq,bs)){throw new Error(f+bs+L+bq.classname+x);}
;}
;}
;}
,__m:function(bt,bu){if(bu.$$events){for(var bv in bu.$$events){if(!qx.util.OOUtil.supportsEvent(bt,bv)){throw new Error(R+bv+L+bt.classname+x);}
;}
;}
;}
,assertObject:function(bw,bx){var bz=bw.constructor;this.__j(bw,bz,bx,false);this.__l(bz,bx);this.__m(bz,bx);var by=bx.$$extends;if(by){for(var i=0,l=by.length;i<l;i++){this.assertObject(bw,by[i]);}
;}
;}
,assert:function(bA,bB,bC){this.__j(bA.prototype,bA,bB,bC);this.__l(bA,bB);this.__m(bA,bB);var bD=bB.$$extends;if(bD){for(var i=0,l=bD.length;i<l;i++){this.assert(bA,bD[i],bC);}
;}
;}
,genericToString:function(){return D+this.name+O;}
,$$registry:{},__n:qx.core.Environment.select(C,{"true":function(bE,bF,bG,bH){function bI(){bH.apply(this,arguments);return bF.apply(this,arguments);}
;bF.wrapper=bI;return bI;}
,"default":function(){}
}),__c:qx.core.Environment.select(C,{"true":{"extend":E,"statics":E,"members":E,"properties":E,"events":E},"default":null}),__d:qx.core.Environment.select(C,{"true":function(name,bJ){if(qx.core.Environment.get(C)){var bM=this.__c;for(var bL in bJ){if(bM[bL]===undefined){throw new Error(g+bL+N+name+e);}
;if(bJ[bL]==null){throw new Error(S+bL+J+name+j);}
;if(bM[bL]!==null&&typeof bJ[bL]!==bM[bL]){throw new Error(P+bL+A+name+u+bM[bL]+x);}
;}
;var bK=[T,b,U,Q];for(var i=0,l=bK.length;i<l;i++){var bL=bK[i];if(bJ[bL]!==undefined&&([F,h,q].indexOf(qx.Bootstrap.getClass(bJ[bL]))!=-1||bJ[bL].classname!==undefined)){throw new Error(z+bL+A+name+M);}
;}
;if(bJ.extend){for(var i=0,a=bJ.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error(y+i+1+J+name+t);}
;if(a[i].$$type!==H){throw new Error(y+i+1+J+name+s);}
;}
;}
;if(bJ.statics){for(var bL in bJ.statics){if(bL.toUpperCase()!==bL){throw new Error(z+bL+A+name+n);}
;switch(typeof bJ.statics[bL]){case v:case d:case V:break;default:throw new Error(z+bL+A+name+B);};}
;}
;}
;}
,"default":function(){}
})}});}
)();
(function(){var g="qx.lang.Core",f="\\\\",e="\\\"",d='"',c="[object Error]",b="emulated",a="native";qx.Bootstrap.define(g,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;}
}[(!Error.prototype.toString||Error.prototype.toString()==c)?b:a],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;}
else if(j<0){j=Math.max(0,this.length+j);}
;for(var i=j;i<this.length;i++){if(this[i]===h){return i;}
;}
;return -1;}
}[Array.prototype.indexOf?a:b],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(k,m){if(m==null){m=this.length-1;}
else if(m<0){m=Math.max(0,this.length+m);}
;for(var i=m;i>=0;i--){if(this[i]===k){return i;}
;}
;return -1;}
}[Array.prototype.lastIndexOf?a:b],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(n,o){var l=this.length;for(var i=0;i<l;i++){var p=this[i];if(p!==undefined){n.call(o||window,p,i,this);}
;}
;}
}[Array.prototype.forEach?a:b],arrayFilter:{"native":Array.prototype.filter,"emulated":function(q,r){var s=[];var l=this.length;for(var i=0;i<l;i++){var t=this[i];if(t!==undefined){if(q.call(r||window,t,i,this)){s.push(this[i]);}
;}
;}
;return s;}
}[Array.prototype.filter?a:b],arrayMap:{"native":Array.prototype.map,"emulated":function(u,v){var w=[];var l=this.length;for(var i=0;i<l;i++){var x=this[i];if(x!==undefined){w[i]=u.call(v||window,x,i,this);}
;}
;return w;}
}[Array.prototype.map?a:b],arraySome:{"native":Array.prototype.some,"emulated":function(y,z){var l=this.length;for(var i=0;i<l;i++){var A=this[i];if(A!==undefined){if(y.call(z||window,A,i,this)){return true;}
;}
;}
;return false;}
}[Array.prototype.some?a:b],arrayEvery:{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;for(var i=0;i<l;i++){var D=this[i];if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;}
;}
;}
;return true;}
}[Array.prototype.every?a:b],stringQuote:{"native":String.prototype.quote,"emulated":function(){return d+this.replace(/\\/g,f).replace(/\"/g,e)+d;}
}[String.prototype.quote?a:b]}});if(!Error.prototype.toString||Error.prototype.toString()==c){Error.prototype.toString=qx.lang.Core.errorToString;}
;if(!Array.prototype.indexOf){Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;}
;if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;}
;if(!Array.prototype.forEach){Array.prototype.forEach=qx.lang.Core.arrayForEach;}
;if(!Array.prototype.filter){Array.prototype.filter=qx.lang.Core.arrayFilter;}
;if(!Array.prototype.map){Array.prototype.map=qx.lang.Core.arrayMap;}
;if(!Array.prototype.some){Array.prototype.some=qx.lang.Core.arraySome;}
;if(!Array.prototype.every){Array.prototype.every=qx.lang.Core.arrayEvery;}
;if(!String.prototype.quote){String.prototype.quote=qx.lang.Core.stringQuote;}
;}
)();
(function(){var bV='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bU='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bT='value !== null && value.nodeType === 9 && value.documentElement',bS='value !== null && value.$$type === "Mixin"',bR='return init;',bQ='var init=this.',bP='value !== null && value.nodeType === 1 && value.attributes',bO="var parent = this.getLayoutParent();",bN="Error in property ",bM="property",bv='qx.core.Assert.assertInstance(value, Date, msg) || true',bu="Cannot add the non themable property '",bt="if (!parent) return;",bs=" in method ",br='qx.core.Assert.assertInstance(value, Error, msg) || true',bq='Undefined value is not allowed!',bp="' to the themable property group '",bo="]: ",bn="inherit",bm='Is invalid!',cd="MSIE 6.0",ce="Malformed generated code to unwrap method: ",cb="': ",cc=" of class ",bY='value !== null && value.nodeType !== undefined',ca='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bW="module.events",bX='qx.core.Assert.assertPositiveInteger(value, msg) || true',cf="Code[",cg="Cannot create property group '",bF='if(init==qx.core.Property.$$inherit)init=null;',bE='value !== null && value.$$type === "Interface"',bH='var inherit=prop.$$inherit;',bG="var value = parent.",bJ="$$useinit_",bI="(value);",bL='Requires exactly one argument!',bK="$$runtime_",bD="$$user_",bC='qx.core.Assert.assertArray(value, msg) || true',b='qx.core.Assert.assertPositiveNumber(value, msg) || true',c=".prototype",d="' including non-existing property '",e="Boolean",f='return value;',g='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',h='Does not allow any arguments!',j="()",k="var a=arguments[0] instanceof Array?arguments[0]:arguments;",m='value !== null && value.$$type === "Theme"',ck="'!",cj="())",ci='return null;',ch='qx.core.Assert.assertObject(value, msg) || true',co='qx.core.Assert.assertString(value, msg) || true',cn="\n",cm="if (value===undefined) value = parent.",cl='value !== null && value.$$type === "Class"',cq='qx.core.Assert.assertFunction(value, msg) || true',cp=".",L="object",M="$$init_",J="$$theme_",K="Unknown reason: ",P='qx.core.Assert.assertMap(value, msg) || true',Q="Generating property wrappers: ",N="'",O='qx.core.Assert.assertNumber(value, msg) || true',H='Null value is not allowed!',I='qx.core.Assert.assertInteger(value, msg) || true',u="rv:1.8.1",t="shorthand",w="Generating property group: ",v='qx.core.Assert.assertInstance(value, RegExp, msg) || true',q='value !== null && value.type !== undefined',p='value !== null && value.document',s='throw new Error("Property ',r="(!this.",o='qx.core.Assert.assertBoolean(value, msg) || true',n="qx.aspects",V="toggle",W="$$inherit_",X=" with incoming value '",Y="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",R="qx.core.Property",S="is",T='Could not change or apply init value after constructing phase!',U="();",ba='else ',bb='if(this.',E="resetRuntime",D="return this.",C="get",B=";",A="(a[",z="value",y=' of an instance of ',x="refresh",G=' is not (yet) ready!");',F="]);",bc="resetThemed",bd='else if(this.',be="reset",bf="setRuntime",bg="qx.debug.property.level",bh="init",bi="set",bj="setThemed",bk='!==undefined)',bl="this.",bz='return this.',by="string",bx="qx.debug",bw="boolean",bB=';',bA="";qx.Bootstrap.define(R,{statics:{__o:function(){if(qx.core.Environment.get(bW)){qx.event.type.Data;qx.event.dispatch.Direct;}
;}
,__p:{"Boolean":o,"String":co,"Number":O,"Integer":I,"PositiveNumber":b,"PositiveInteger":bX,"Error":br,"RegExp":v,"Object":ch,"Array":bC,"Map":P,"Function":cq,"Date":bv,"Node":bY,"Element":bP,"Document":bT,"Window":p,"Event":q,"Class":cl,"Mixin":bS,"Interface":bE,"Theme":m,"Color":bV,"Decorator":ca,"Font":bU},__q:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bn,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:by,dereference:bw,inheritable:bw,nullable:bw,themeable:bw,refine:bw,init:null,apply:by,event:by,check:null,transform:by,deferredInit:bw,validate:null},$$allowedGroupKeys:{name:by,group:L,mode:by,themeable:bw},$$inheritable:{},__r:function(cr){var cs=this.__s(cr);if(!cs.length){var ct=function(){}
;}
else {ct=this.__t(cs);}
;cr.prototype.$$refreshInheritables=ct;}
,__s:function(cu){var cw=[];while(cu){var cv=cu.$$properties;if(cv){for(var name in this.$$inheritable){if(cv[name]&&cv[name].inheritable){cw.push(name);}
;}
;}
;cu=cu.superclass;}
;return cw;}
,__t:function(cx){var cB=this.$$store.inherit;var cA=this.$$store.init;var cz=this.$$method.refresh;var cy=[bO,bt];for(var i=0,l=cx.length;i<l;i++){var name=cx[i];cy.push(bG,cB[name],B,cm,cA[name],B,bl,cz[name],bI);}
;return new Function(cy.join(bA));}
,attachRefreshInheritables:function(cC){cC.prototype.$$refreshInheritables=function(){qx.core.Property.__r(cC);return this.$$refreshInheritables();}
;}
,attachMethods:function(cD,name,cE){cE.group?this.__u(cD,cE,name):this.__v(cD,cE,name);}
,__u:function(cF,cG,name){var cN=qx.Bootstrap.firstUp(name);var cM=cF.prototype;var cO=cG.themeable===true;if(qx.core.Environment.get(bx)){if(qx.core.Environment.get(bg)>1){qx.Bootstrap.debug(w+name);}
;}
;var cP=[];var cJ=[];if(cO){var cH=[];var cL=[];}
;var cK=k;cP.push(cK);if(cO){cH.push(cK);}
;if(cG.mode==t){var cI=Y;cP.push(cI);if(cO){cH.push(cI);}
;}
;for(var i=0,a=cG.group,l=a.length;i<l;i++){if(qx.core.Environment.get(bx)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error(cg+name+d+a[i]+ck);}
;}
;cP.push(bl,this.$$method.set[a[i]],A,i,F);cJ.push(bl,this.$$method.reset[a[i]],U);if(cO){if(qx.core.Environment.get(bx)){if(!this.$$method.setThemed[a[i]]){throw new Error(bu+a[i]+bp+name+N);}
;}
;cH.push(bl,this.$$method.setThemed[a[i]],A,i,F);cL.push(bl,this.$$method.resetThemed[a[i]],U);}
;}
;this.$$method.set[name]=bi+cN;cM[this.$$method.set[name]]=new Function(cP.join(bA));this.$$method.reset[name]=be+cN;cM[this.$$method.reset[name]]=new Function(cJ.join(bA));if(cO){this.$$method.setThemed[name]=bj+cN;cM[this.$$method.setThemed[name]]=new Function(cH.join(bA));this.$$method.resetThemed[name]=bc+cN;cM[this.$$method.resetThemed[name]]=new Function(cL.join(bA));}
;}
,__v:function(cQ,cR,name){var cT=qx.Bootstrap.firstUp(name);var cV=cQ.prototype;if(qx.core.Environment.get(bx)){if(qx.core.Environment.get(bg)>1){qx.Bootstrap.debug(Q+name);}
;}
;if(cR.dereference===undefined&&typeof cR.check===by){cR.dereference=this.__w(cR.check);}
;var cU=this.$$method;var cS=this.$$store;cS.runtime[name]=bK+name;cS.user[name]=bD+name;cS.theme[name]=J+name;cS.init[name]=M+name;cS.inherit[name]=W+name;cS.useinit[name]=bJ+name;cU.get[name]=C+cT;cV[cU.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cQ,name,C);}
;cU.set[name]=bi+cT;cV[cU.set[name]]=function(cW){return qx.core.Property.executeOptimizedSetter(this,cQ,name,bi,arguments);}
;cU.reset[name]=be+cT;cV[cU.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cQ,name,be);}
;if(cR.inheritable||cR.apply||cR.event||cR.deferredInit){cU.init[name]=bh+cT;cV[cU.init[name]]=function(cX){return qx.core.Property.executeOptimizedSetter(this,cQ,name,bh,arguments);}
;}
;if(cR.inheritable){cU.refresh[name]=x+cT;cV[cU.refresh[name]]=function(cY){return qx.core.Property.executeOptimizedSetter(this,cQ,name,x,arguments);}
;}
;cU.setRuntime[name]=bf+cT;cV[cU.setRuntime[name]]=function(da){return qx.core.Property.executeOptimizedSetter(this,cQ,name,bf,arguments);}
;cU.resetRuntime[name]=E+cT;cV[cU.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cQ,name,E);}
;if(cR.themeable){cU.setThemed[name]=bj+cT;cV[cU.setThemed[name]]=function(db){return qx.core.Property.executeOptimizedSetter(this,cQ,name,bj,arguments);}
;cU.resetThemed[name]=bc+cT;cV[cU.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cQ,name,bc);}
;}
;if(cR.check===e){cV[V+cT]=new Function(D+cU.set[name]+r+cU.get[name]+cj);cV[S+cT]=new Function(D+cU.get[name]+j);}
;}
,__w:function(dc){return !!this.__q[dc];}
,__x:function(dd){return this.__q[dd]||qx.util.OOUtil.classIsDefined(dd)||(qx.Interface&&qx.Interface.isDefined(dd));}
,__y:{'0':T,'1':bL,'2':bq,'3':h,'4':H,'5':bm},error:function(de,df,dg,dh,di){var dj=de.constructor.classname;var dk=bN+dg+cc+dj+bs+this.$$method[dh][dg]+X+di+cb;throw new Error(dk+(this.__y[df]||K+df));}
,__z:function(dl,dm,name,dn,dp,dq){var dr=this.$$method[dn][name];if(qx.core.Environment.get(bx)){if(qx.core.Environment.get(bg)>1){qx.Bootstrap.debug(cf+this.$$method[dn][name]+bo+dp.join(bA));}
;try{dm[dr]=new Function(z,dp.join(bA));}
catch(ds){throw new Error(ce+this.$$method[dn][name]+cn+dp.join(bA));}
;}
else {dm[dr]=new Function(z,dp.join(bA));}
;if(qx.core.Environment.get(n)){dm[dr]=qx.core.Aspect.wrap(dl.classname+cp+dr,dm[dr],bM);}
;qx.Bootstrap.setDisplayName(dm[dr],dl.classname+c,dr);if(dq===undefined){return dl[dr]();}
else if(qx.core.Environment.get(bx)){return dl[dr].apply(dl,dq);}
else {return dl[dr](dq[0]);}
;}
,executeOptimizedGetter:function(dt,du,name,dv){var dx=du.$$properties[name];var dz=du.prototype;var dw=[];var dy=this.$$store;dw.push(bb,dy.runtime[name],bk);dw.push(bz,dy.runtime[name],bB);if(dx.inheritable){dw.push(bd,dy.inherit[name],bk);dw.push(bz,dy.inherit[name],bB);dw.push(ba);}
;dw.push(bb,dy.user[name],bk);dw.push(bz,dy.user[name],bB);if(dx.themeable){dw.push(bd,dy.theme[name],bk);dw.push(bz,dy.theme[name],bB);}
;if(dx.deferredInit&&dx.init===undefined){dw.push(bd,dy.init[name],bk);dw.push(bz,dy.init[name],bB);}
;dw.push(ba);if(dx.init!==undefined){if(dx.inheritable){dw.push(bQ,dy.init[name],bB);if(dx.nullable){dw.push(bF);}
else if(dx.init!==undefined){dw.push(bz,dy.init[name],bB);}
else {dw.push(g,name,y,du.classname,G);}
;dw.push(bR);}
else {dw.push(bz,dy.init[name],bB);}
;}
else if(dx.inheritable||dx.nullable){dw.push(ci);}
else {dw.push(s,name,y,du.classname,G);}
;return this.__z(dt,dz,name,dv,dw);}
,executeOptimizedSetter:function(dA,dB,name,dC,dD){var dI=dB.$$properties[name];var dH=dB.prototype;var dF=[];var dE=dC===bi||dC===bj||dC===bf||(dC===bh&&dI.init===undefined);var dG=dI.apply||dI.event||dI.inheritable;var dJ=this.__A(dC,name);this.__B(dF,dI,name,dC,dE);if(dE){this.__C(dF,dB,dI,name);}
;if(dG){this.__D(dF,dE,dJ,dC);}
;if(dI.inheritable){dF.push(bH);}
;if(qx.core.Environment.get(bx)){if(dE){this.__E(dF,dI,dB,name,dC);}
;}
;if(!dG){this.__F(dF,name,dC,dE);}
else {this.__G(dF,dI,name,dC,dE);}
;if(dI.inheritable){this.__H(dF,dI,name,dC);}
else if(dG){this.__I(dF,dI,name,dC);}
;if(dG){this.__J(dF,dI,name);if(dI.inheritable&&dH._getChildren){this.__K(dF,name);}
;}
;if(dE){dF.push(f);}
;return this.__z(dA,dH,name,dC,dF,dD);}
,__A:function(dK,name){if(dK==="setRuntime"||dK==="resetRuntime"){var dL=this.$$store.runtime[name];}
else if(dK==="setThemed"||dK==="resetThemed"){dL=this.$$store.theme[name];}
else if(dK==="init"){dL=this.$$store.init[name];}
else {dL=this.$$store.user[name];}
;;return dL;}
,__B:function(dM,dN,name,dO,dP){if(qx.core.Environment.get("qx.debug")){dM.push('var prop=qx.core.Property;');if(dO==="init"){dM.push('if(this.$$initialized)prop.error(this,0,"',name,'","',dO,'",value);');}
;if(dO==="refresh"){}
else if(dP){dM.push('if(arguments.length!==1)prop.error(this,1,"',name,'","',dO,'",value);');dM.push('if(value===undefined)prop.error(this,2,"',name,'","',dO,'",value);');}
else {dM.push('if(arguments.length!==0)prop.error(this,3,"',name,'","',dO,'",value);');}
;}
else {if(!dN.nullable||dN.check||dN.inheritable){dM.push('var prop=qx.core.Property;');}
;if(dO==="set"){dM.push('if(value===undefined)prop.error(this,2,"',name,'","',dO,'",value);');}
;}
;}
,__C:function(dQ,dR,dS,name){if(dS.transform){dQ.push('value=this.',dS.transform,'(value);');}
;if(dS.validate){if(typeof dS.validate==="string"){dQ.push('this.',dS.validate,'(value);');}
else if(dS.validate instanceof Function){dQ.push(dR.classname,'.$$properties.',name);dQ.push('.validate.call(this, value);');}
;}
;}
,__D:function(dT,dU,dV,dW){var dX=(dW==="reset"||dW==="resetThemed"||dW==="resetRuntime");if(dU){dT.push('if(this.',dV,'===value)return value;');}
else if(dX){dT.push('if(this.',dV,'===undefined)return;');}
;}
,__E:qx.core.Environment.select("qx.debug",{"true":function(dY,ea,eb,name,ec){if(!ea.nullable){dY.push('if(value===null)prop.error(this,4,"',name,'","',ec,'",value);');}
;if(ea.check!==undefined){dY.push('var msg = "Invalid incoming value for property \''+name+'\' of class \''+eb.classname+'\'";');if(ea.nullable){dY.push('if(value!==null)');}
;if(ea.inheritable){dY.push('if(value!==inherit)');}
;dY.push('if(');if(this.__p[ea.check]!==undefined){dY.push('!(',this.__p[ea.check],')');}
else if(qx.Class.isDefined(ea.check)){dY.push('qx.core.Assert.assertInstance(value, qx.Class.getByName("',ea.check,'"), msg)');}
else if(qx.Interface&&qx.Interface.isDefined(ea.check)){dY.push('qx.core.Assert.assertInterface(value, qx.Interface.getByName("',ea.check,'"), msg)');}
else if(typeof ea.check==="function"){dY.push('!',eb.classname,'.$$properties.',name);dY.push('.check.call(this, value)');}
else if(typeof ea.check==="string"){dY.push('!(',ea.check,')');}
else if(ea.check instanceof Array){dY.push('qx.core.Assert.assertInArray(value, ',eb.classname,'.$$properties.',name,'.check, msg)');}
else {throw new Error("Could not add check to property "+name+" of class "+eb.classname);}
;;;;;dY.push(')prop.error(this,5,"',name,'","',ec,'",value);');}
;}
,"false":undefined}),__F:function(ed,name,ee,ef){if(ee==="setRuntime"){ed.push('this.',this.$$store.runtime[name],'=value;');}
else if(ee==="resetRuntime"){ed.push('if(this.',this.$$store.runtime[name],'!==undefined)');ed.push('delete this.',this.$$store.runtime[name],';');}
else if(ee==="set"){ed.push('this.',this.$$store.user[name],'=value;');}
else if(ee==="reset"){ed.push('if(this.',this.$$store.user[name],'!==undefined)');ed.push('delete this.',this.$$store.user[name],';');}
else if(ee==="setThemed"){ed.push('this.',this.$$store.theme[name],'=value;');}
else if(ee==="resetThemed"){ed.push('if(this.',this.$$store.theme[name],'!==undefined)');ed.push('delete this.',this.$$store.theme[name],';');}
else if(ee==="init"&&ef){ed.push('this.',this.$$store.init[name],'=value;');}
;;;;;;}
,__G:function(eg,eh,name,ei,ej){if(eh.inheritable){eg.push('var computed, old=this.',this.$$store.inherit[name],';');}
else {eg.push('var computed, old;');}
;eg.push('if(this.',this.$$store.runtime[name],'!==undefined){');if(ei==="setRuntime"){eg.push('computed=this.',this.$$store.runtime[name],'=value;');}
else if(ei==="resetRuntime"){eg.push('delete this.',this.$$store.runtime[name],';');eg.push('if(this.',this.$$store.user[name],'!==undefined)');eg.push('computed=this.',this.$$store.user[name],';');eg.push('else if(this.',this.$$store.theme[name],'!==undefined)');eg.push('computed=this.',this.$$store.theme[name],';');eg.push('else if(this.',this.$$store.init[name],'!==undefined){');eg.push('computed=this.',this.$$store.init[name],';');eg.push('this.',this.$$store.useinit[name],'=true;');eg.push('}');}
else {eg.push('old=computed=this.',this.$$store.runtime[name],';');if(ei==="set"){eg.push('this.',this.$$store.user[name],'=value;');}
else if(ei==="reset"){eg.push('delete this.',this.$$store.user[name],';');}
else if(ei==="setThemed"){eg.push('this.',this.$$store.theme[name],'=value;');}
else if(ei==="resetThemed"){eg.push('delete this.',this.$$store.theme[name],';');}
else if(ei==="init"&&ej){eg.push('this.',this.$$store.init[name],'=value;');}
;;;;}
;eg.push('}');eg.push('else if(this.',this.$$store.user[name],'!==undefined){');if(ei==="set"){if(!eh.inheritable){eg.push('old=this.',this.$$store.user[name],';');}
;eg.push('computed=this.',this.$$store.user[name],'=value;');}
else if(ei==="reset"){if(!eh.inheritable){eg.push('old=this.',this.$$store.user[name],';');}
;eg.push('delete this.',this.$$store.user[name],';');eg.push('if(this.',this.$$store.runtime[name],'!==undefined)');eg.push('computed=this.',this.$$store.runtime[name],';');eg.push('if(this.',this.$$store.theme[name],'!==undefined)');eg.push('computed=this.',this.$$store.theme[name],';');eg.push('else if(this.',this.$$store.init[name],'!==undefined){');eg.push('computed=this.',this.$$store.init[name],';');eg.push('this.',this.$$store.useinit[name],'=true;');eg.push('}');}
else {if(ei==="setRuntime"){eg.push('computed=this.',this.$$store.runtime[name],'=value;');}
else if(eh.inheritable){eg.push('computed=this.',this.$$store.user[name],';');}
else {eg.push('old=computed=this.',this.$$store.user[name],';');}
;if(ei==="setThemed"){eg.push('this.',this.$$store.theme[name],'=value;');}
else if(ei==="resetThemed"){eg.push('delete this.',this.$$store.theme[name],';');}
else if(ei==="init"&&ej){eg.push('this.',this.$$store.init[name],'=value;');}
;;}
;eg.push('}');if(eh.themeable){eg.push('else if(this.',this.$$store.theme[name],'!==undefined){');if(!eh.inheritable){eg.push('old=this.',this.$$store.theme[name],';');}
;if(ei==="setRuntime"){eg.push('computed=this.',this.$$store.runtime[name],'=value;');}
else if(ei==="set"){eg.push('computed=this.',this.$$store.user[name],'=value;');}
else if(ei==="setThemed"){eg.push('computed=this.',this.$$store.theme[name],'=value;');}
else if(ei==="resetThemed"){eg.push('delete this.',this.$$store.theme[name],';');eg.push('if(this.',this.$$store.init[name],'!==undefined){');eg.push('computed=this.',this.$$store.init[name],';');eg.push('this.',this.$$store.useinit[name],'=true;');eg.push('}');}
else if(ei==="init"){if(ej){eg.push('this.',this.$$store.init[name],'=value;');}
;eg.push('computed=this.',this.$$store.theme[name],';');}
else if(ei==="refresh"){eg.push('computed=this.',this.$$store.theme[name],';');}
;;;;;eg.push('}');}
;eg.push('else if(this.',this.$$store.useinit[name],'){');if(!eh.inheritable){eg.push('old=this.',this.$$store.init[name],';');}
;if(ei==="init"){if(ej){eg.push('computed=this.',this.$$store.init[name],'=value;');}
else {eg.push('computed=this.',this.$$store.init[name],';');}
;}
else if(ei==="set"||ei==="setRuntime"||ei==="setThemed"||ei==="refresh"){eg.push('delete this.',this.$$store.useinit[name],';');if(ei==="setRuntime"){eg.push('computed=this.',this.$$store.runtime[name],'=value;');}
else if(ei==="set"){eg.push('computed=this.',this.$$store.user[name],'=value;');}
else if(ei==="setThemed"){eg.push('computed=this.',this.$$store.theme[name],'=value;');}
else if(ei==="refresh"){eg.push('computed=this.',this.$$store.init[name],';');}
;;;}
;eg.push('}');if(ei==="set"||ei==="setRuntime"||ei==="setThemed"||ei==="init"){eg.push('else{');if(ei==="setRuntime"){eg.push('computed=this.',this.$$store.runtime[name],'=value;');}
else if(ei==="set"){eg.push('computed=this.',this.$$store.user[name],'=value;');}
else if(ei==="setThemed"){eg.push('computed=this.',this.$$store.theme[name],'=value;');}
else if(ei==="init"){if(ej){eg.push('computed=this.',this.$$store.init[name],'=value;');}
else {eg.push('computed=this.',this.$$store.init[name],';');}
;eg.push('this.',this.$$store.useinit[name],'=true;');}
;;;eg.push('}');}
;}
,__H:function(ek,el,name,em){ek.push('if(computed===undefined||computed===inherit){');if(em==="refresh"){ek.push('computed=value;');}
else {ek.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');}
;ek.push('if((computed===undefined||computed===inherit)&&');ek.push('this.',this.$$store.init[name],'!==undefined&&');ek.push('this.',this.$$store.init[name],'!==inherit){');ek.push('computed=this.',this.$$store.init[name],';');ek.push('this.',this.$$store.useinit[name],'=true;');ek.push('}else{');ek.push('delete this.',this.$$store.useinit[name],';}');ek.push('}');ek.push('if(old===computed)return value;');ek.push('if(computed===inherit){');ek.push('computed=undefined;delete this.',this.$$store.inherit[name],';');ek.push('}');ek.push('else if(computed===undefined)');ek.push('delete this.',this.$$store.inherit[name],';');ek.push('else this.',this.$$store.inherit[name],'=computed;');ek.push('var backup=computed;');if(el.init!==undefined&&em!=="init"){ek.push('if(old===undefined)old=this.',this.$$store.init[name],";");}
else {ek.push('if(old===undefined)old=null;');}
;ek.push('if(computed===undefined||computed==inherit)computed=null;');}
,__I:function(en,eo,name,ep){if(ep!=="set"&&ep!=="setRuntime"&&ep!=="setThemed"){en.push('if(computed===undefined)computed=null;');}
;en.push('if(old===computed)return value;');if(eo.init!==undefined&&ep!=="init"){en.push('if(old===undefined)old=this.',this.$$store.init[name],";");}
else {en.push('if(old===undefined)old=null;');}
;}
,__J:function(eq,er,name){if(er.apply){eq.push('this.',er.apply,'(computed, old, "',name,'");');}
;if(er.event){eq.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",er.event,"')){","reg.fireEvent(this, '",er.event,"', qx.event.type.Data, [computed, old]",")}");}
;}
,__K:function(es,name){es.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');es.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');es.push('}');}
},defer:function(et){var ev=navigator.userAgent.indexOf(cd)!=-1;var eu=navigator.userAgent.indexOf(u)!=-1;if(ev||eu){et.__w=et.__x;}
;}
});}
)();
(function(){var p="Mixin",o='" contains an invalid mixin at position ',n="The mixin to include into class '",m="constructor",k="' is abstract! It is not possible to instantiate it.",j="environment",h='The configuration key "',g="extend",f='" is not allowed!',e='"! Every non-static class has to extend at least the "qx.core.Object" class.',br='"! Only mixins and arrays of mixins are allowed!',bq="string",bp="' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.",bo="settings",bn='"! ',bm='" contains an invalid interface at position ',bl='" definition for class "',bk='The implement definition in class "',bj='Forbidden environment setting "',bi='". It is forbidden to define a default setting for an external namespace!',w="members",x="variants",u="events",v='Invalid type "',s='Invalid include definition in class "',t="properties",q="statics",r='Invalid config in class "',C="The class '",D='"! The value needs to be a map!',N='Invalid type of key "',K='". It is forbidden to define a ',V='Invalid implement definition in class "',Q="The mixin to patch class '",be="]",bb="Interface",G="qx.Class",bh='Forbidden variant "',bg="Please initialize '",bf="' objects using the new keyword!",F='"! The type of the key must be "',I='Assumed static class because no "extend" key was found. ',J="[Class ",M='"! Only interfaces and arrays of interfaces are allowed!',O='The include definition in class "',R='environment setting for an external namespace!',X='Error in include definition of class "',bd="The class ',",y='"! The value is undefined/null!',z='". It is forbidden to define a variant for an external namespace!',H='Forbidden setting "',U=': ',T="singleton",S="qx.aspects",ba='"!',Y="' is undefined/null!",P="abstract",W='Invalid key "',b='" found in "',bc="function",A="Array",B='" in class "',L="static",c="object",d=".",E="qx.debug";qx.Bootstrap.define(G,{statics:{__L:qx.core.Environment.get("module.property")?qx.core.Property:null,define:function(name,bs){if(!bs){var bs={};}
;if(bs.include&&!(qx.Bootstrap.getClass(bs.include)===A)){bs.include=[bs.include];}
;if(bs.implement&&!(qx.Bootstrap.getClass(bs.implement)===A)){bs.implement=[bs.implement];}
;var bt=false;if(!bs.hasOwnProperty(g)&&!bs.type){bs.type=L;bt=true;}
;if(qx.core.Environment.get(E)){try{this.__d(name,bs);}
catch(bw){if(bt){bw.message=I+bw.message;}
;throw bw;}
;}
;var bu=this.__O(name,bs.type,bs.extend,bs.statics,bs.construct,bs.destruct,bs.include);if(bs.extend){if(bs.properties){this.__Q(bu,bs.properties,true);}
;if(bs.members){this.__S(bu,bs.members,true,true,false);}
;if(bs.events){this.__P(bu,bs.events,true);}
;if(bs.include){for(var i=0,l=bs.include.length;i<l;i++){this.__W(bu,bs.include[i],false);}
;}
;}
;if(bs.environment){for(var bv in bs.environment){qx.core.Environment.add(bv,bs.environment[bv]);}
;}
;if(bs.implement){for(var i=0,l=bs.implement.length;i<l;i++){this.__U(bu,bs.implement[i]);}
;}
;if(qx.core.Environment.get(E)){this.__N(bu);}
;if(bs.defer){bs.defer.self=bu;bs.defer(bu,bu.prototype,{add:function(name,bx){var by={};by[name]=bx;qx.Class.__Q(bu,by,true);}
});}
;return bu;}
,undefine:function(name){delete this.$$registry[name];var bz=name.split(d);var bB=[window];for(var i=0;i<bz.length;i++){bB.push(bB[i][bz[i]]);}
;for(var i=bB.length-1;i>=1;i--){var bA=bB[i];var parent=bB[i-1];if(qx.Bootstrap.isFunction(bA)||qx.Bootstrap.objectGetLength(bA)===0){delete parent[bz[i-1]];}
else {break;}
;}
;}
,isDefined:qx.util.OOUtil.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,getByName:qx.Bootstrap.getByName,include:function(bC,bD){if(qx.core.Environment.get(E)){if(!bD){throw new Error(n+bC.classname+Y);}
;qx.Mixin.isCompatible(bD,bC);}
;qx.Class.__W(bC,bD,false);}
,patch:function(bE,bF){if(qx.core.Environment.get(E)){if(!bF){throw new Error(Q+bE.classname+Y);}
;qx.Mixin.isCompatible(bF,bE);}
;qx.Class.__W(bE,bF,true);}
,isSubClassOf:function(bG,bH){if(!bG){return false;}
;if(bG==bH){return true;}
;if(bG.prototype instanceof bH){return true;}
;return false;}
,getPropertyDefinition:qx.util.OOUtil.getPropertyDefinition,getProperties:function(bI){var bJ=[];while(bI){if(bI.$$properties){bJ.push.apply(bJ,qx.Bootstrap.getKeys(bI.$$properties));}
;bI=bI.superclass;}
;return bJ;}
,getByProperty:function(bK,name){while(bK){if(bK.$$properties&&bK.$$properties[name]){return bK;}
;bK=bK.superclass;}
;return null;}
,hasProperty:qx.util.OOUtil.hasProperty,getEventType:qx.util.OOUtil.getEventType,supportsEvent:qx.util.OOUtil.supportsEvent,hasOwnMixin:function(bL,bM){return bL.$$includes&&bL.$$includes.indexOf(bM)!==-1;}
,getByMixin:function(bN,bO){var bP,i,l;while(bN){if(bN.$$includes){bP=bN.$$flatIncludes;for(i=0,l=bP.length;i<l;i++){if(bP[i]===bO){return bN;}
;}
;}
;bN=bN.superclass;}
;return null;}
,getMixins:qx.util.OOUtil.getMixins,hasMixin:function(bQ,bR){return !!this.getByMixin(bQ,bR);}
,hasOwnInterface:function(bS,bT){return bS.$$implements&&bS.$$implements.indexOf(bT)!==-1;}
,getByInterface:qx.util.OOUtil.getByInterface,getInterfaces:function(bU){var bV=[];while(bU){if(bU.$$implements){bV.push.apply(bV,bU.$$flatImplements);}
;bU=bU.superclass;}
;return bV;}
,hasInterface:qx.util.OOUtil.hasInterface,implementsInterface:function(bW,bX){var bY=bW.constructor;if(this.hasInterface(bY,bX)){return true;}
;try{qx.Interface.assertObject(bW,bX);return true;}
catch(ca){}
;try{qx.Interface.assert(bY,bX,false);return true;}
catch(cb){}
;return false;}
,getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;this.$$instance=new this;delete this.$$allowconstruct;}
;return this.$$instance;}
,genericToString:function(){return J+this.classname+be;}
,$$registry:qx.Bootstrap.$$registry,__c:qx.core.Environment.select(E,{"true":{"type":bq,"extend":bc,"implement":c,"include":c,"construct":bc,"statics":c,"properties":c,"members":c,"environment":c,"events":c,"defer":bc,"destruct":bc},"default":null}),__M:qx.core.Environment.select("qx.debug",{"true":{"type":"string","statics":"object","environment":"object","defer":"function"},"default":null}),__d:qx.core.Environment.select(E,{"true":function(name,cc){if(cc.type&&!(cc.type===L||cc.type===P||cc.type===T)){throw new Error(v+cc.type+bl+name+ba);}
;if(cc.type&&cc.type!==L&&!cc.extend){throw new Error(r+name+e);}
;var cf=cc.type===L?this.__M:this.__c;for(var ce in cc){if(!cf[ce]){throw new Error(h+ce+B+name+f);}
;if(cc[ce]==null){throw new Error(W+ce+B+name+y);}
;if(typeof cc[ce]!==cf[ce]){throw new Error(N+ce+B+name+F+cf[ce]+ba);}
;}
;var cd=[q,t,w,j,bo,x,u];for(var i=0,l=cd.length;i<l;i++){var ce=cd[i];if(cc[ce]!==undefined&&(cc[ce].$$hash!==undefined||!qx.Bootstrap.isObject(cc[ce]))){throw new Error(W+ce+B+name+D);}
;}
;if(cc.include){if(qx.Bootstrap.getClass(cc.include)===A){for(var i=0,a=cc.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==p){throw new Error(O+name+o+i+U+a[i]);}
;}
;}
else {throw new Error(s+name+br);}
;}
;if(cc.implement){if(qx.Bootstrap.getClass(cc.implement)===A){for(var i=0,a=cc.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==bb){throw new Error(bk+name+bm+i+U+a[i]);}
;}
;}
else {throw new Error(V+name+M);}
;}
;if(cc.include){try{qx.Mixin.checkCompatibility(cc.include);}
catch(cg){throw new Error(X+name+bn+cg.message);}
;}
;if(cc.environment){for(var ce in cc.environment){if(ce.substr(0,ce.indexOf(d))!=name.substr(0,name.indexOf(d))){throw new Error(bj+ce+b+name+K+R);}
;}
;}
;if(cc.settings){for(var ce in cc.settings){if(ce.substr(0,ce.indexOf(d))!=name.substr(0,name.indexOf(d))){throw new Error(H+ce+b+name+bi);}
;}
;}
;if(cc.variants){for(var ce in cc.variants){if(ce.substr(0,ce.indexOf(d))!=name.substr(0,name.indexOf(d))){throw new Error(bh+ce+b+name+z);}
;}
;}
;}
,"default":function(){}
}),__N:qx.core.Environment.select("qx.debug",{"true":function(ch){var cj=ch.superclass;while(cj){if(cj.$$classtype!=="abstract"){break;}
;var ci=cj.$$implements;if(ci){for(var i=0;i<ci.length;i++){qx.Interface.assert(ch,ci[i],true);}
;}
;cj=cj.superclass;}
;}
,"default":function(){}
}),__O:function(name,ck,cl,cm,cn,co,cp){var cs;if(!cl&&qx.core.Environment.get("qx.aspects")==false){cs=cm||{};qx.Bootstrap.setDisplayNames(cs,name);}
else {var cs={};if(cl){if(!cn){cn=this.__X();}
;if(this.__ba(cl,cp)){cs=this.__bb(cn,name,ck);}
else {cs=cn;}
;if(ck==="singleton"){cs.getInstance=this.getInstance;}
;qx.Bootstrap.setDisplayName(cn,name,"constructor");}
;if(cm){qx.Bootstrap.setDisplayNames(cm,name);var ct;for(var i=0,a=qx.Bootstrap.getKeys(cm),l=a.length;i<l;i++){ct=a[i];var cq=cm[ct];if(qx.core.Environment.get("qx.aspects")){if(cq instanceof Function){cq=qx.core.Aspect.wrap(name+"."+ct,cq,"static");}
;cs[ct]=cq;}
else {cs[ct]=cq;}
;}
;}
;}
;var cr=name?qx.Bootstrap.createNamespace(name,cs):"";cs.name=cs.classname=name;cs.basename=cr;cs.$$type="Class";if(ck){cs.$$classtype=ck;}
;if(!cs.hasOwnProperty("toString")){cs.toString=this.genericToString;}
;if(cl){qx.Bootstrap.extendClass(cs,cn,cl,name,cr);if(co){if(qx.core.Environment.get("qx.aspects")){co=qx.core.Aspect.wrap(name,co,"destructor");}
;cs.$$destructor=co;qx.Bootstrap.setDisplayName(co,name,"destruct");}
;}
;this.$$registry[name]=cs;return cs;}
,__P:function(cu,cv,cw){if(qx.core.Environment.get("qx.debug")){if(typeof cv!=="object"||qx.Bootstrap.getClass(cv)==="Array"){throw new Error(cu.classname+": the events must be defined as map!");}
;for(var cx in cv){if(typeof cv[cx]!=="string"){throw new Error(cu.classname+"/"+cx+": the event value needs to be a string with the class name of the event object which will be fired.");}
;}
;if(cu.$$events&&cw!==true){for(var cx in cv){if(cu.$$events[cx]!==undefined&&cu.$$events[cx]!==cv[cx]){throw new Error(cu.classname+"/"+cx+": the event value/type cannot be changed from "+cu.$$events[cx]+" to "+cv[cx]);}
;}
;}
;}
;if(cu.$$events){for(var cx in cv){cu.$$events[cx]=cv[cx];}
;}
else {cu.$$events=cv;}
;}
,__Q:function(cy,cz,cA){if(!qx.core.Environment.get("module.property")){throw new Error("Property module disabled.");}
;var cB;if(cA===undefined){cA=false;}
;var cC=cy.prototype;for(var name in cz){cB=cz[name];if(qx.core.Environment.get("qx.debug")){this.__R(cy,name,cB,cA);}
;cB.name=name;if(!cB.refine){if(cy.$$properties===undefined){cy.$$properties={};}
;cy.$$properties[name]=cB;}
;if(cB.init!==undefined){cy.prototype["$$init_"+name]=cB.init;}
;if(cB.event!==undefined){if(!qx.core.Environment.get("module.events")){throw new Error("Events module not enabled.");}
;var event={};event[cB.event]="qx.event.type.Data";this.__P(cy,event,cA);}
;if(cB.inheritable){this.__L.$$inheritable[name]=true;if(!cC.$$refreshInheritables){this.__L.attachRefreshInheritables(cy);}
;}
;if(!cB.refine){this.__L.attachMethods(cy,name,cB);}
;}
;}
,__R:qx.core.Environment.select("qx.debug",{"true":function(cD,name,cE,cF){if(!qx.core.Environment.get("module.property")){throw new Error("Property module disabled.");}
;var cH=this.hasProperty(cD,name);if(cH){var cG=this.getPropertyDefinition(cD,name);if(cE.refine&&cG.init===undefined){throw new Error("Could not refine an init value if there was previously no init value defined. Property '"+name+"' of class '"+cD.classname+"'.");}
;}
;if(!cH&&cE.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+cD.classname+"'!");}
;if(cH&&!cF){throw new Error("Class "+cD.classname+" already has a property: "+name+"!");}
;if(cH&&cF){if(!cE.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+cD.classname+', original class: '+this.getByProperty(cD,name).classname+'.');}
;for(var cI in cE){if(cI!=="init"&&cI!=="refine"){throw new Error("Class "+cD.classname+" could not refine property: "+name+"! Key: "+cI+" could not be refined!");}
;}
;}
;var cJ=cE.group?this.__L.$$allowedGroupKeys:this.__L.$$allowedKeys;for(var cI in cE){if(cJ[cI]===undefined){throw new Error('The configuration key "'+cI+'" of property "'+name+'" in class "'+cD.classname+'" is not allowed!');}
;if(cE[cI]===undefined){throw new Error('Invalid key "'+cI+'" of property "'+name+'" in class "'+cD.classname+'"! The value is undefined: '+cE[cI]);}
;if(cJ[cI]!==null&&typeof cE[cI]!==cJ[cI]){throw new Error('Invalid type of key "'+cI+'" of property "'+name+'" in class "'+cD.classname+'"! The type of the key must be "'+cJ[cI]+'"!');}
;}
;if(cE.transform!=null){if(!(typeof cE.transform=="string")){throw new Error('Invalid transform definition of property "'+name+'" in class "'+cD.classname+'"! Needs to be a String.');}
;}
;if(cE.check!=null){if(!qx.Bootstrap.isString(cE.check)&&!qx.Bootstrap.isArray(cE.check)&&!qx.Bootstrap.isFunction(cE.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+cD.classname+'"! Needs to be a String, Array or Function.');}
;}
;}
,"default":null}),__S:function(cK,cL,cM,cN,cO){var cP=cK.prototype;var cR,cQ;qx.Bootstrap.setDisplayNames(cL,cK.classname+".prototype");for(var i=0,a=qx.Bootstrap.getKeys(cL),l=a.length;i<l;i++){cR=a[i];cQ=cL[cR];if(qx.core.Environment.get("qx.debug")){if(cP[cR]!==undefined&&cR.charAt(0)=="_"&&cR.charAt(1)=="_"){throw new Error('Overwriting private member "'+cR+'" of Class "'+cK.classname+'" is not allowed!');}
;if(cM!==true&&cP.hasOwnProperty(cR)){throw new Error('Overwriting member "'+cR+'" of Class "'+cK.classname+'" is not allowed!');}
;}
;if(cN!==false&&cQ instanceof Function&&cQ.$$type==null){if(cO==true){cQ=this.__T(cQ,cP[cR]);}
else {if(cP[cR]){cQ.base=cP[cR];}
;cQ.self=cK;}
;if(qx.core.Environment.get("qx.aspects")){cQ=qx.core.Aspect.wrap(cK.classname+"."+cR,cQ,"member");}
;}
;cP[cR]=cQ;}
;}
,__T:function(cS,cT){if(cT){return function(){var cV=cS.base;cS.base=cT;var cU=cS.apply(this,arguments);cS.base=cV;return cU;}
;}
else {return cS;}
;}
,__U:function(cW,cX){if(qx.core.Environment.get("qx.debug")){if(!cW||!cX){throw new Error("Incomplete parameters!");}
;if(this.hasOwnInterface(cW,cX)){throw new Error('Interface "'+cX.name+'" is already used by Class "'+cW.classname+'!');}
;if(cW.$$classtype!=="abstract"){qx.Interface.assert(cW,cX,true);}
;}
;var cY=qx.Interface.flatten([cX]);if(cW.$$implements){cW.$$implements.push(cX);cW.$$flatImplements.push.apply(cW.$$flatImplements,cY);}
else {cW.$$implements=[cX];cW.$$flatImplements=cY;}
;}
,__V:function(da){var name=da.classname;var db=this.__bb(da,name,da.$$classtype);for(var i=0,a=qx.Bootstrap.getKeys(da),l=a.length;i<l;i++){dc=a[i];db[dc]=da[dc];}
;db.prototype=da.prototype;var de=da.prototype;for(var i=0,a=qx.Bootstrap.getKeys(de),l=a.length;i<l;i++){dc=a[i];var df=de[dc];if(df&&df.self==da){df.self=db;}
;}
;for(var dc in this.$$registry){var dd=this.$$registry[dc];if(!dd){continue;}
;if(dd.base==da){dd.base=db;}
;if(dd.superclass==da){dd.superclass=db;}
;if(dd.$$original){if(dd.$$original.base==da){dd.$$original.base=db;}
;if(dd.$$original.superclass==da){dd.$$original.superclass=db;}
;}
;}
;qx.Bootstrap.createNamespace(name,db);this.$$registry[name]=db;return db;}
,__W:function(dg,dh,di){if(qx.core.Environment.get("qx.debug")){if(!dg||!dh){throw new Error("Incomplete parameters!");}
;}
;if(this.hasMixin(dg,dh)){return;}
;var dl=dg.$$original;if(dh.$$constructor&&!dl){dg=this.__V(dg);}
;var dk=qx.Mixin.flatten([dh]);var dj;for(var i=0,l=dk.length;i<l;i++){dj=dk[i];if(dj.$$events){this.__P(dg,dj.$$events,di);}
;if(dj.$$properties){this.__Q(dg,dj.$$properties,di);}
;if(dj.$$members){this.__S(dg,dj.$$members,di,di,di);}
;}
;if(dg.$$includes){dg.$$includes.push(dh);dg.$$flatIncludes.push.apply(dg.$$flatIncludes,dk);}
else {dg.$$includes=[dh];dg.$$flatIncludes=dk;}
;}
,__X:function(){function dm(){dm.base.apply(this,arguments);}
;return dm;}
,__Y:function(){return function(){}
;}
,__ba:function(dn,dp){if(qx.core.Environment.get(E)){return true;}
;if(dn&&dn.$$includes){var dq=dn.$$flatIncludes;for(var i=0,l=dq.length;i<l;i++){if(dq[i].$$constructor){return true;}
;}
;}
;if(dp){var dr=qx.Mixin.flatten(dp);for(var i=0,l=dr.length;i<l;i++){if(dr[i].$$constructor){return true;}
;}
;}
;return false;}
,__bb:function(ds,name,dt){var dv=function(){var dy=dv;if(qx.core.Environment.get(E)){if(!(this instanceof dy)){throw new Error(bg+name+bf);}
;if(dt===P){if(this.classname===name){throw new Error(bd+name+k);}
;}
else if(dt===T){if(!dy.$$allowconstruct){throw new Error(C+name+bp);}
;}
;}
;var dx=dy.$$original.apply(this,arguments);if(dy.$$includes){var dw=dy.$$flatIncludes;for(var i=0,l=dw.length;i<l;i++){if(dw[i].$$constructor){dw[i].$$constructor.apply(this,arguments);}
;}
;}
;if(qx.core.Environment.get(E)){if(this.classname===name){this.$$initialized=true;}
;}
;return dx;}
;if(qx.core.Environment.get(S)){var du=qx.core.Aspect.wrap(name,dv,m);dv.$$original=ds;dv.constructor=du;dv=du;}
;dv.$$original=ds;ds.wrapper=dv;return dv;}
},defer:function(){if(qx.core.Environment.get(S)){for(var dz in qx.Bootstrap.$$registry){var dA=qx.Bootstrap.$$registry[dz];for(var dB in dA){if(dA[dB] instanceof Function){dA[dB]=qx.core.Aspect.wrap(dz+d+dB,dA[dB],L);}
;}
;}
;}
;}
});}
)();
(function(){var k="join",j="toLocaleUpperCase",h="shift",g="substr",f="filter",e="unshift",d="match",c="quote",b="qx.lang.Generics",a="localeCompare",I="sort",H="some",G="charAt",F="split",E="substring",D="pop",C="toUpperCase",B="replace",A="push",z="charCodeAt",t="every",u="reverse",q="search",r="forEach",o="map",p="toLowerCase",m="splice",n="toLocaleLowerCase",v="indexOf",w="lastIndexOf",y="slice",x="concat";qx.Class.define(b,{statics:{__bd:{"Array":[k,u,I,A,D,h,e,m,x,y,v,w,r,o,f,H,t],"String":[c,E,p,C,G,z,v,w,n,j,a,d,q,B,F,g,x,y]},__be:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));}
;}
,__bf:function(){var L=qx.lang.Generics.__bd;for(var P in L){var N=window[P];var M=L[P];for(var i=0,l=M.length;i<l;i++){var O=M[i];if(!N[O]){N[O]=qx.lang.Generics.__be(N,O);}
;}
;}
;}
},defer:function(Q){Q.__bf();}
});}
)();
(function(){var a="qx.data.MBinding";qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);}
,removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);}
,removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);}
,getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);}
}});}
)();
(function(){var m="Boolean",l="Data after conversion: ",k=")",h=") to the object '",g="Can not remove the bindings for null object!",f="Please use only one array at a time: ",d="Binding executed from ",c="Integer",b=" of object ",a="qx.event.type.Data",Y="qx.data.SingleValueBinding",X="No number or 'last' value hast been given",W="Binding property ",V="Binding could not be found!",U=" to ",T="Binding from '",S=" (",R="PositiveNumber",Q="Data before conversion: ",P="PositiveInteger",u="Binding does not exist!",v=" in an array binding: ",s=" is not an data (qx.event.type.Data) event on ",t=").",q=" by ",r="Date",n=" not possible: No event available. ",p="qx.debug.databinding",w=". Error message: ",x="set",E="deepBinding",C="item",I="reset",G="Failed so set value ",L="qx.debug",K=" does not work.",z="' (",O=" on ",N="String",M="Number",y="change",A="]",B=".",D="last",F="[",H="",J="get";qx.Class.define(Y,{statics:{__bg:{},bind:function(ba,bb,bc,bd,be){var bp=this.__bi(ba,bb,bc,bd,be);var bk=bb.split(B);var bg=this.__bo(bk);var bo=[];var bl=[];var bm=[];var bi=[];var bj=ba;try{for(var i=0;i<bk.length;i++){if(bg[i]!==H){bi.push(y);}
else {bi.push(this.__bj(bj,bk[i]));}
;bo[i]=bj;if(i==bk.length-1){if(bg[i]!==H){var bt=bg[i]===D?bj.length-1:bg[i];var bf=bj.getItem(bt);this.__bn(bf,bc,bd,be,ba);bm[i]=this.__bp(bj,bi[i],bc,bd,be,bg[i]);}
else {if(bk[i]!=null&&bj[J+qx.lang.String.firstUp(bk[i])]!=null){var bf=bj[J+qx.lang.String.firstUp(bk[i])]();this.__bn(bf,bc,bd,be,ba);}
;bm[i]=this.__bp(bj,bi[i],bc,bd,be);}
;}
else {var bq={index:i,propertyNames:bk,sources:bo,listenerIds:bm,arrayIndexValues:bg,targetObject:bc,targetPropertyChain:bd,options:be,listeners:bl};var bn=qx.lang.Function.bind(this.__bh,this,bq);bl.push(bn);bm[i]=bj.addListener(bi[i],bn);}
;if(bj[J+qx.lang.String.firstUp(bk[i])]==null){bj=null;}
else if(bg[i]!==H){bj=bj[J+qx.lang.String.firstUp(bk[i])](bg[i]);}
else {bj=bj[J+qx.lang.String.firstUp(bk[i])]();}
;if(!bj){break;}
;}
;}
catch(bu){for(var i=0;i<bo.length;i++){if(bo[i]&&bm[i]){bo[i].removeListenerById(bm[i]);}
;}
;var bs=bp.targets;var bh=bp.listenerIds[i];for(var i=0;i<bs.length;i++){if(bs[i]&&bh[i]){bs[i].removeListenerById(bh[i]);}
;}
;throw bu;}
;var br={type:E,listenerIds:bm,sources:bo,targetListenerIds:bp.listenerIds,targets:bp.targets};this.__bq(br,ba,bb,bc,bd);return br;}
,__bh:function(bv){if(bv.options&&bv.options.onUpdate){bv.options.onUpdate(bv.sources[bv.index],bv.targetObject);}
;for(var j=bv.index+1;j<bv.propertyNames.length;j++){var bz=bv.sources[j];bv.sources[j]=null;if(!bz){continue;}
;bz.removeListenerById(bv.listenerIds[j]);}
;var bz=bv.sources[bv.index];for(var j=bv.index+1;j<bv.propertyNames.length;j++){if(bv.arrayIndexValues[j-1]!==H){bz=bz[J+qx.lang.String.firstUp(bv.propertyNames[j-1])](bv.arrayIndexValues[j-1]);}
else {bz=bz[J+qx.lang.String.firstUp(bv.propertyNames[j-1])]();}
;bv.sources[j]=bz;if(!bz){this.__bk(bv.targetObject,bv.targetPropertyChain);break;}
;if(j==bv.propertyNames.length-1){if(qx.Class.implementsInterface(bz,qx.data.IListData)){var bA=bv.arrayIndexValues[j]===D?bz.length-1:bv.arrayIndexValues[j];var bx=bz.getItem(bA);this.__bn(bx,bv.targetObject,bv.targetPropertyChain,bv.options,bv.sources[bv.index]);bv.listenerIds[j]=this.__bp(bz,y,bv.targetObject,bv.targetPropertyChain,bv.options,bv.arrayIndexValues[j]);}
else {if(bv.propertyNames[j]!=null&&bz[J+qx.lang.String.firstUp(bv.propertyNames[j])]!=null){var bx=bz[J+qx.lang.String.firstUp(bv.propertyNames[j])]();this.__bn(bx,bv.targetObject,bv.targetPropertyChain,bv.options,bv.sources[bv.index]);}
;var by=this.__bj(bz,bv.propertyNames[j]);bv.listenerIds[j]=this.__bp(bz,by,bv.targetObject,bv.targetPropertyChain,bv.options);}
;}
else {if(bv.listeners[j]==null){var bw=qx.lang.Function.bind(this.__bh,this,bv);bv.listeners.push(bw);}
;if(qx.Class.implementsInterface(bz,qx.data.IListData)){var by=y;}
else {var by=this.__bj(bz,bv.propertyNames[j]);}
;bv.listenerIds[j]=bz.addListener(by,bv.listeners[j]);}
;}
;}
,__bi:function(bB,bC,bD,bE,bF){var bJ=bE.split(B);var bH=this.__bo(bJ);var bO=[];var bN=[];var bL=[];var bK=[];var bI=bD;for(var i=0;i<bJ.length-1;i++){if(bH[i]!==H){bK.push(y);}
else {try{bK.push(this.__bj(bI,bJ[i]));}
catch(e){break;}
;}
;bO[i]=bI;var bM=function(){for(var j=i+1;j<bJ.length-1;j++){var bR=bO[j];bO[j]=null;if(!bR){continue;}
;bR.removeListenerById(bL[j]);}
;var bR=bO[i];for(var j=i+1;j<bJ.length-1;j++){var bP=qx.lang.String.firstUp(bJ[j-1]);if(bH[j-1]!==H){var bS=bH[j-1]===D?bR.getLength()-1:bH[j-1];bR=bR[J+bP](bS);}
else {bR=bR[J+bP]();}
;bO[j]=bR;if(bN[j]==null){bN.push(bM);}
;if(qx.Class.implementsInterface(bR,qx.data.IListData)){var bQ=y;}
else {try{var bQ=qx.data.SingleValueBinding.__bj(bR,bJ[j]);}
catch(e){break;}
;}
;bL[j]=bR.addListener(bQ,bN[j]);}
;qx.data.SingleValueBinding.updateTarget(bB,bC,bD,bE,bF);}
;bN.push(bM);bL[i]=bI.addListener(bK[i],bM);var bG=qx.lang.String.firstUp(bJ[i]);if(bI[J+bG]==null){bI=null;}
else if(bH[i]!==H){bI=bI[J+bG](bH[i]);}
else {bI=bI[J+bG]();}
;if(!bI){break;}
;}
;return {listenerIds:bL,targets:bO};}
,updateTarget:function(bT,bU,bV,bW,bX){var bY=this.getValueFromObject(bT,bU);bY=qx.data.SingleValueBinding.__br(bY,bV,bW,bX,bT);this.__bl(bV,bW,bY);}
,getValueFromObject:function(o,ca){var ce=this.__bm(o,ca);var cc;if(ce!=null){var cg=ca.substring(ca.lastIndexOf(B)+1,ca.length);if(cg.charAt(cg.length-1)==A){var cb=cg.substring(cg.lastIndexOf(F)+1,cg.length-1);var cd=cg.substring(0,cg.lastIndexOf(F));var cf=ce[J+qx.lang.String.firstUp(cd)]();if(cb==D){cb=cf.length-1;}
;if(cf!=null){cc=cf.getItem(cb);}
;}
else {cc=ce[J+qx.lang.String.firstUp(cg)]();}
;}
;return cc;}
,__bj:function(ch,ci){var cj=this.__bs(ch,ci);if(cj==null){if(qx.Class.supportsEvent(ch.constructor,ci)){cj=ci;}
else if(qx.Class.supportsEvent(ch.constructor,y+qx.lang.String.firstUp(ci))){cj=y+qx.lang.String.firstUp(ci);}
else {throw new qx.core.AssertionError(W+ci+b+ch+n);}
;}
;return cj;}
,__bk:function(ck,cl){var cm=this.__bm(ck,cl);if(cm!=null){var cn=cl.substring(cl.lastIndexOf(B)+1,cl.length);if(cn.charAt(cn.length-1)==A){this.__bl(ck,cl,null);return;}
;if(cm[I+qx.lang.String.firstUp(cn)]!=undefined){cm[I+qx.lang.String.firstUp(cn)]();}
else {cm[x+qx.lang.String.firstUp(cn)](null);}
;}
;}
,__bl:function(co,cp,cq){var cu=this.__bm(co,cp);if(cu!=null){var cv=cp.substring(cp.lastIndexOf(B)+1,cp.length);if(cv.charAt(cv.length-1)==A){var cr=cv.substring(cv.lastIndexOf(F)+1,cv.length-1);var ct=cv.substring(0,cv.lastIndexOf(F));var cs=co;if(!qx.Class.implementsInterface(cs,qx.data.IListData)){cs=cu[J+qx.lang.String.firstUp(ct)]();}
;if(cr==D){cr=cs.length-1;}
;if(cs!=null){cs.setItem(cr,cq);}
;}
else {cu[x+qx.lang.String.firstUp(cv)](cq);}
;}
;}
,__bm:function(cw,cx){var cA=cx.split(B);var cB=cw;for(var i=0;i<cA.length-1;i++){try{var cz=cA[i];if(cz.indexOf(A)==cz.length-1){var cy=cz.substring(cz.indexOf(F)+1,cz.length-1);cz=cz.substring(0,cz.indexOf(F));}
;if(cz!=H){cB=cB[J+qx.lang.String.firstUp(cz)]();}
;if(cy!=null){if(cy==D){cy=cB.length-1;}
;cB=cB.getItem(cy);cy=null;}
;}
catch(cC){return null;}
;}
;return cB;}
,__bn:function(cD,cE,cF,cG,cH){cD=this.__br(cD,cE,cF,cG,cH);if(cD===undefined){this.__bk(cE,cF);}
;if(cD!==undefined){try{this.__bl(cE,cF,cD);if(cG&&cG.onUpdate){cG.onUpdate(cH,cE,cD);}
;}
catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;}
;if(cG&&cG.onSetFail){cG.onSetFail(e);}
else {qx.log.Logger.warn(G+cD+O+cE+w+e);}
;}
;}
;}
,__bo:function(cI){var cJ=[];for(var i=0;i<cI.length;i++){var name=cI[i];if(qx.lang.String.endsWith(name,A)){var cK=name.substring(name.indexOf(F)+1,name.indexOf(A));if(name.indexOf(A)!=name.length-1){throw new Error(f+name+K);}
;if(cK!==D){if(cK==H||isNaN(parseInt(cK,10))){throw new Error(X+v+name+K);}
;}
;if(name.indexOf(F)!=0){cI[i]=name.substring(0,name.indexOf(F));cJ[i]=H;cJ[i+1]=cK;cI.splice(i+1,0,C);i++;}
else {cJ[i]=cK;cI.splice(i,1,C);}
;}
else {cJ[i]=H;}
;}
;return cJ;}
,__bp:function(cL,cM,cN,cO,cP,cQ){if(qx.core.Environment.get(L)){var cR=qx.Class.getEventType(cL.constructor,cM);qx.core.Assert.assertEquals(a,cR,cM+s+cL+B);}
;var cT=function(cU,e){if(cU!==H){if(cU===D){cU=cL.length-1;}
;var cX=cL.getItem(cU);if(cX===undefined){qx.data.SingleValueBinding.__bk(cN,cO);}
;var cV=e.getData().start;var cW=e.getData().end;if(cU<cV||cU>cW){return;}
;}
else {var cX=e.getData();}
;if(qx.core.Environment.get(p)){qx.log.Logger.debug(d+cL+q+cM+U+cN+S+cO+k);qx.log.Logger.debug(Q+cX);}
;cX=qx.data.SingleValueBinding.__br(cX,cN,cO,cP,cL);if(qx.core.Environment.get(p)){qx.log.Logger.debug(l+cX);}
;try{if(cX!==undefined){qx.data.SingleValueBinding.__bl(cN,cO,cX);}
else {qx.data.SingleValueBinding.__bk(cN,cO);}
;if(cP&&cP.onUpdate){cP.onUpdate(cL,cN,cX);}
;}
catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;}
;if(cP&&cP.onSetFail){cP.onSetFail(e);}
else {qx.log.Logger.warn(G+cX+O+cN+w+e);}
;}
;}
;if(!cQ){cQ=H;}
;cT=qx.lang.Function.bind(cT,cL,cQ);var cS=cL.addListener(cM,cT);return cS;}
,__bq:function(cY,da,db,dc,dd){if(this.__bg[da.toHashCode()]===undefined){this.__bg[da.toHashCode()]=[];}
;this.__bg[da.toHashCode()].push([cY,da,db,dc,dd]);}
,__br:function(de,df,dg,dh,di){if(dh&&dh.converter){var dk;if(df.getModel){dk=df.getModel();}
;return dh.converter(de,dk,di,df);}
else {var dm=this.__bm(df,dg);var dn=dg.substring(dg.lastIndexOf(B)+1,dg.length);if(dm==null){return de;}
;var dl=qx.Class.getPropertyDefinition(dm.constructor,dn);var dj=dl==null?H:dl.check;return this.__bt(de,dj);}
;}
,__bs:function(dp,dq){var dr=qx.Class.getPropertyDefinition(dp.constructor,dq);if(dr==null){return null;}
;return dr.event;}
,__bt:function(ds,dt){var du=qx.lang.Type.getClass(ds);if((du==M||du==N)&&(dt==c||dt==P)){ds=parseInt(ds,10);}
;if((du==m||du==M||du==r)&&dt==N){ds=ds+H;}
;if((du==M||du==N)&&(dt==M||dt==R)){ds=parseFloat(ds);}
;return ds;}
,removeBindingFromObject:function(dv,dw){if(dw.type==E){for(var i=0;i<dw.sources.length;i++){if(dw.sources[i]){dw.sources[i].removeListenerById(dw.listenerIds[i]);}
;}
;for(var i=0;i<dw.targets.length;i++){if(dw.targets[i]){dw.targets[i].removeListenerById(dw.targetListenerIds[i]);}
;}
;}
else {dv.removeListenerById(dw);}
;var dx=this.__bg[dv.toHashCode()];if(dx!=undefined){for(var i=0;i<dx.length;i++){if(dx[i][0]==dw){qx.lang.Array.remove(dx,dx[i]);return;}
;}
;}
;throw new Error(V);}
,removeAllBindingsForObject:function(dy){if(qx.core.Environment.get(L)){qx.core.Assert.assertNotNull(dy,g);}
;var dz=this.__bg[dy.toHashCode()];if(dz!=undefined){for(var i=dz.length-1;i>=0;i--){this.removeBindingFromObject(dy,dz[i][0]);}
;}
;}
,getAllBindingsForObject:function(dA){if(this.__bg[dA.toHashCode()]===undefined){this.__bg[dA.toHashCode()]=[];}
;return this.__bg[dA.toHashCode()];}
,removeAllBindings:function(){for(var dC in this.__bg){var dB=qx.core.ObjectRegistry.fromHashCode(dC);if(dB==null){delete this.__bg[dC];continue;}
;this.removeAllBindingsForObject(dB);}
;this.__bg={};}
,getAllBindings:function(){return this.__bg;}
,showBindingInLog:function(dD,dE){var dG;for(var i=0;i<this.__bg[dD.toHashCode()].length;i++){if(this.__bg[dD.toHashCode()][i][0]==dE){dG=this.__bg[dD.toHashCode()][i];break;}
;}
;if(dG===undefined){var dF=u;}
else {var dF=T+dG[1]+z+dG[2]+h+dG[3]+z+dG[4]+t;}
;qx.log.Logger.debug(dF);}
,showAllBindingsInLog:function(){for(var dI in this.__bg){var dH=qx.core.ObjectRegistry.fromHashCode(dI);for(var i=0;i<this.__bg[dI].length;i++){this.showBindingInLog(dH,this.__bg[dI][i][0]);}
;}
;}
}});}
)();
(function(){var p="]",o='\\u',n="undefined",m='\\$1',l="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",k='-',j="qx.lang.String",h="(^|[^",g="0",f="%",c=' ',e='\n',d="])[",b="g",a="";qx.Bootstrap.define(j,{statics:{__bu:l,__bv:null,__bw:{},camelCase:function(q){var r=this.__bw[q];if(!r){r=q.replace(/\-([a-z])/g,function(s,t){return t.toUpperCase();}
);this.__bw[q]=r;}
;return r;}
,hyphenate:function(u){var v=this.__bw[u];if(!v){v=u.replace(/[A-Z]/g,function(w){return (k+w.charAt(0).toLowerCase());}
);this.__bw[u]=v;}
;return v;}
,capitalize:function(x){if(this.__bv===null){var y=o;this.__bv=new RegExp(h+this.__bu.replace(/[0-9A-F]{4}/g,function(z){return y+z;}
)+d+this.__bu.replace(/[0-9A-F]{4}/g,function(A){return y+A;}
)+p,b);}
;return x.replace(this.__bv,function(B){return B.toUpperCase();}
);}
,clean:function(C){return this.trim(C.replace(/\s+/g,c));}
,trimLeft:function(D){return D.replace(/^\s+/,a);}
,trimRight:function(E){return E.replace(/\s+$/,a);}
,trim:function(F){return F.replace(/^\s+|\s+$/g,a);}
,startsWith:function(G,H){return G.indexOf(H)===0;}
,endsWith:function(I,J){return I.substring(I.length-J.length,I.length)===J;}
,repeat:function(K,L){return K.length>0?new Array(L+1).join(K):a;}
,pad:function(M,length,N){var O=length-M.length;if(O>0){if(typeof N===n){N=g;}
;return this.repeat(N,O)+M;}
else {return M;}
;}
,firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(P,Q){return P.indexOf(Q)!=-1;}
,format:function(R,S){var T=R;var i=S.length;while(i--){T=T.replace(new RegExp(f+(i+1),b),S[i]+a);}
;return T;}
,escapeRegexpChars:function(U){return U.replace(/([.*+?^${}()|[\]\/\\])/g,m);}
,toArray:function(V){return V.split(/\B|\b/g);}
,stripTags:function(W){return W.replace(/<\/?[^>]+>/gi,a);}
,stripScripts:function(X,Y){var bb=a;var ba=X.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){bb+=arguments[1]+e;return a;}
);if(Y===true){qx.lang.Function.globalEval(bb);}
;return ba;}
}});}
)();
(function(){var p="[object Array]",o="qx.lang.Array",n="]",m="qx",k="number",j="][",h="string",g="Cannot clean-up map entry doneObjects[",f="The second parameter must be an array.",e="mshtml",b="engine.name",d="The first parameter must be an array.",c="Parameter must be an array.",a="qx.debug";qx.Bootstrap.define(o,{statics:{toArray:function(q,r){return this.cast(q,Array,r);}
,cast:function(s,t,u){if(s.constructor===t){return s;}
;if(qx.data&&qx.data.IListData){if(qx.Class&&qx.Class.hasInterface(s,qx.data.IListData)){var s=s.toArray();}
;}
;var v=new t;if((qx.core.Environment.get(b)==e)){if(s.item){for(var i=u||0,l=s.length;i<l;i++){v.push(s[i]);}
;return v;}
;}
;if(Object.prototype.toString.call(s)===p&&u==null){v.push.apply(v,s);}
else {v.push.apply(v,Array.prototype.slice.call(s,u||0));}
;return v;}
,fromArguments:function(w,x){return Array.prototype.slice.call(w,x||0);}
,fromCollection:function(y){if((qx.core.Environment.get(b)==e)){if(y.item){var z=[];for(var i=0,l=y.length;i<l;i++){z[i]=y[i];}
;return z;}
;}
;return Array.prototype.slice.call(y,0);}
,fromShortHand:function(A){var C=A.length;var B=qx.lang.Array.clone(A);switch(C){case 1:B[1]=B[2]=B[3]=B[0];break;case 2:B[2]=B[0];case 3:B[3]=B[1];};return B;}
,clone:function(D){return D.concat();}
,insertAt:function(E,F,i){E.splice(i,0,F);return E;}
,insertBefore:function(G,H,I){var i=G.indexOf(I);if(i==-1){G.push(H);}
else {G.splice(i,0,H);}
;return G;}
,insertAfter:function(J,K,L){var i=J.indexOf(L);if(i==-1||i==(J.length-1)){J.push(K);}
else {J.splice(i+1,0,K);}
;return J;}
,removeAt:function(M,i){return M.splice(i,1)[0];}
,removeAll:function(N){N.length=0;return this;}
,append:function(O,P){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertArray(O,d);qx.core.Assert&&qx.core.Assert.assertArray(P,f);}
;Array.prototype.push.apply(O,P);return O;}
,exclude:function(Q,R){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertArray(Q,d);qx.core.Assert&&qx.core.Assert.assertArray(R,f);}
;for(var i=0,T=R.length,S;i<T;i++){S=Q.indexOf(R[i]);if(S!=-1){Q.splice(S,1);}
;}
;return Q;}
,remove:function(U,V){var i=U.indexOf(V);if(i!=-1){U.splice(i,1);return V;}
;}
,contains:function(W,X){return W.indexOf(X)!==-1;}
,equals:function(Y,ba){var length=Y.length;if(length!==ba.length){return false;}
;for(var i=0;i<length;i++){if(Y[i]!==ba[i]){return false;}
;}
;return true;}
,sum:function(bb){var bc=0;for(var i=0,l=bb.length;i<l;i++){bc+=bb[i];}
;return bc;}
,max:function(bd){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertArray(bd,c);}
;var i,bf=bd.length,be=bd[0];for(i=1;i<bf;i++){if(bd[i]>be){be=bd[i];}
;}
;return be===undefined?null:be;}
,min:function(bg){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertArray(bg,c);}
;var i,bi=bg.length,bh=bg[0];for(i=1;i<bi;i++){if(bg[i]<bh){bh=bg[i];}
;}
;return bh===undefined?null:bh;}
,unique:function(bj){var bt=[],bl={},bo={},bq={};var bp,bk=0;var bu=m+qx.lang.Date.now();var bm=false,bs=false,bv=false;for(var i=0,br=bj.length;i<br;i++){bp=bj[i];if(bp===null){if(!bm){bm=true;bt.push(bp);}
;}
else if(bp===undefined){}
else if(bp===false){if(!bs){bs=true;bt.push(bp);}
;}
else if(bp===true){if(!bv){bv=true;bt.push(bp);}
;}
else if(typeof bp===h){if(!bl[bp]){bl[bp]=1;bt.push(bp);}
;}
else if(typeof bp===k){if(!bo[bp]){bo[bp]=1;bt.push(bp);}
;}
else {var bn=bp[bu];if(bn==null){bn=bp[bu]=bk++;}
;if(!bq[bn]){bq[bn]=bp;bt.push(bp);}
;}
;;;;;}
;for(var bn in bq){try{delete bq[bn][bu];}
catch(bw){try{bq[bn][bu]=null;}
catch(bx){throw new Error(g+bn+j+bu+n);}
;}
;}
;return bt;}
}});}
)();
(function(){var j="[object Opera]",i="[^\\.0-9]",h="4.0",g="1.9.0.0",f="Version/",e="9.0",d="8.0",c="Gecko",b="AppleWebKit/",a="opera",w="engine.version",v="mshtml",u="engine.name",t="webkit",s="5.0",r="qx.bom.client.Engine",q="function",p="gecko",o="Maple",n="Unsupported client: ",l="",m="! Assumed gecko version 1.9.0.0 (Firefox 3.0).",k=".";qx.Bootstrap.define(r,{statics:{getVersion:function(){var A=window.navigator.userAgent;var y=l;if(qx.bom.client.Engine.__bx()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(A)){if(A.indexOf(f)!=-1){var z=A.match(/Version\/(\d+)\.(\d+)/);y=z[1]+k+z[2].charAt(0)+k+z[2].substring(1,z[2].length);}
else {y=RegExp.$1+k+RegExp.$2;if(RegExp.$3!=l){y+=k+RegExp.$3;}
;}
;}
;}
else if(qx.bom.client.Engine.__by()){if(/AppleWebKit\/([^ ]+)/.test(A)){y=RegExp.$1;var B=RegExp(i).exec(y);if(B){y=y.slice(0,B.index);}
;}
;}
else if(qx.bom.client.Engine.__bA()||qx.bom.client.Engine.__bz()){if(/rv\:([^\);]+)(\)|;)/.test(A)){y=RegExp.$1;}
;}
else if(qx.bom.client.Engine.__bB()){if(/MSIE\s+([^\);]+)(\)|;)/.test(A)){y=RegExp.$1;if(y<8&&/Trident\/([^\);]+)(\)|;)/.test(A)){if(RegExp.$1==h){y=d;}
else if(RegExp.$1==s){y=e;}
;}
;}
;}
else {var x=window.qxFail;if(x&&typeof x===q){y=x().FULLVERSION;}
else {y=g;qx.Bootstrap.warn(n+A+m);}
;}
;;;return y;}
,getName:function(){var name;if(qx.bom.client.Engine.__bx()){name=a;}
else if(qx.bom.client.Engine.__by()){name=t;}
else if(qx.bom.client.Engine.__bA()||qx.bom.client.Engine.__bz()){name=p;}
else if(qx.bom.client.Engine.__bB()){name=v;}
else {var C=window.qxFail;if(C&&typeof C===q){name=C().NAME;}
else {name=p;qx.Bootstrap.warn(n+window.navigator.userAgent+m);}
;}
;;;return name;}
,__bx:function(){return window.opera&&Object.prototype.toString.call(window.opera)==j;}
,__by:function(){return window.navigator.userAgent.indexOf(b)!=-1;}
,__bz:function(){return window.navigator.userAgent.indexOf(o)!=-1;}
,__bA:function(){return window.controllers&&window.navigator.product===c&&window.navigator.userAgent.indexOf(o)==-1;}
,__bB:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);}
},defer:function(D){qx.core.Environment.add(w,D.getVersion);qx.core.Environment.add(u,D.getName);}
});}
)();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";qx.Bootstrap.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;}
,isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));}
,isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));}
,isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));}
,isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));}
}});}
)();
(function(){var p=" != ",o="qx.core.Object",n="Expected value to be an array but found ",m=") was fired.",k="Expected value to be an integer >= 0 but found ",j="' to be not equal with '",h="' to '",g="Expected object '",f="Called assertTrue with '",d="Expected value to be a map but found ",bC="The function did not raise an exception!",bB="Expected value to be undefined but found ",bA="Expected value to be a DOM element but found  '",bz="Expected value to be a regular expression but found ",by="' to implement the interface '",bx="Expected value to be null but found ",bw="Invalid argument 'type'",bv="Called assert with 'false'",bu="Assertion error! ",bt="null",w="' but found '",x="'undefined'",u="' must must be a key of the map '",v="The String '",s="Expected value to be a string but found ",t="Expected value not to be undefined but found undefined!",q="qx.util.ColorUtil",r=": ",E="The raised exception does not have the expected type! ",F=") not fired.",U="qx.core.Assert",Q="Expected value to be typeof object but found ",bd="' (identical) but found '",X="' must have any of the values defined in the array '",bp="Expected value to be a number but found ",bj="Called assertFalse with '",L="qx.ui.core.Widget",bs="Expected value to be a qooxdoo object but found ",br="' arguments.",bq="Expected value '%1' to be in the range '%2'..'%3'!",J="Array[",N="' does not match the regular expression '",P="' to be not identical with '",S="Expected [",V="' arguments but found '",Y="', which cannot be converted to a CSS color!",bf="qx.core.AssertionError",bl="Expected value to be a boolean but found ",y="Expected value not to be null but found null!",z="))!",M="Expected value to be a qooxdoo widget but found ",bc="Expected value to be typeof '",bb="\n Stack trace: \n",ba="Expected value to be typeof function but found ",bh="Expected value to be an integer but found ",bg="Called fail().",W="The parameter 're' must be a string or a regular expression.",be="qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'",a="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",A="], but found [",B="Wrong number of arguments given. Expected '",R="object",b="Event (",c="Expected value to be the CSS color '",I="' but found ",C="]",D=", ",H="The value '",T=")), but found value '",bn="' (rgb(",bm=",",O="'",bo="Expected '",K="'!",bi="!",G="";qx.Class.define(U,{statics:{__cz:true,__cA:function(bD,bE){var bI=G;for(var i=1,l=arguments.length;i<l;i++){bI=bI+this.__cB(arguments[i]===undefined?x:arguments[i]);}
;var bH=G;if(bI){bH=bD+r+bI;}
else {bH=bD;}
;var bG=bu+bH;if(qx.Class.isDefined(bf)){var bF=new qx.core.AssertionError(bD,bI);if(this.__cz){qx.Bootstrap.error(bG+bb+bF.getStackTrace());}
;throw bF;}
else {if(this.__cz){qx.Bootstrap.error(bG);}
;throw new Error(bG);}
;}
,__cB:function(bJ){var bK;if(bJ===null){bK=bt;}
else if(qx.lang.Type.isArray(bJ)&&bJ.length>10){bK=J+bJ.length+C;}
else if((bJ instanceof Object)&&(bJ.toString==null)){bK=qx.lang.Json.stringify(bJ,null,2);}
else {try{bK=bJ.toString();}
catch(e){bK=G;}
;}
;;return bK;}
,assert:function(bL,bM){bL==true||this.__cA(bM||G,bv);}
,fail:function(bN,bO){var bP=bO?G:bg;this.__cA(bN||G,bP);}
,assertTrue:function(bQ,bR){(bQ===true)||this.__cA(bR||G,f,bQ,O);}
,assertFalse:function(bS,bT){(bS===false)||this.__cA(bT||G,bj,bS,O);}
,assertEquals:function(bU,bV,bW){bU==bV||this.__cA(bW||G,bo,bU,w,bV,K);}
,assertNotEquals:function(bX,bY,ca){bX!=bY||this.__cA(ca||G,bo,bX,j,bY,K);}
,assertIdentical:function(cb,cc,cd){cb===cc||this.__cA(cd||G,bo,cb,bd,cc,K);}
,assertNotIdentical:function(ce,cf,cg){ce!==cf||this.__cA(cg||G,bo,ce,P,cf,K);}
,assertNotUndefined:function(ch,ci){ch!==undefined||this.__cA(ci||G,t);}
,assertUndefined:function(cj,ck){cj===undefined||this.__cA(ck||G,bB,cj,bi);}
,assertNotNull:function(cl,cm){cl!==null||this.__cA(cm||G,y);}
,assertNull:function(cn,co){cn===null||this.__cA(co||G,bx,cn,bi);}
,assertJsonEquals:function(cp,cq,cr){this.assertEquals(qx.lang.Json.stringify(cp),qx.lang.Json.stringify(cq),cr);}
,assertMatch:function(cs,ct,cu){this.assertString(cs);this.assert(qx.lang.Type.isRegExp(ct)||qx.lang.Type.isString(ct),W);cs.search(ct)>=0||this.__cA(cu||G,v,cs,N,ct.toString(),K);}
,assertArgumentsCount:function(cv,cw,cx,cy){var cz=cv.length;(cz>=cw&&cz<=cx)||this.__cA(cy||G,B,cw,h,cx,V,cz,br);}
,assertEventFired:function(cA,event,cB,cC,cD){var cF=false;var cE=function(e){if(cC){cC.call(cA,e);}
;cF=true;}
;var cG;try{cG=cA.addListener(event,cE,cA);cB.call(cA);}
catch(cH){throw cH;}
finally{try{cA.removeListenerById(cG);}
catch(cI){}
;}
;cF===true||this.__cA(cD||G,b,event,F);}
,assertEventNotFired:function(cJ,event,cK,cL){var cN=false;var cM=function(e){cN=true;}
;var cO=cJ.addListener(event,cM,cJ);cK.call();cN===false||this.__cA(cL||G,b,event,m);cJ.removeListenerById(cO);}
,assertException:function(cP,cQ,cR,cS){var cQ=cQ||Error;var cT;try{this.__cz=false;cP();}
catch(cU){cT=cU;}
finally{this.__cz=true;}
;if(cT==null){this.__cA(cS||G,bC);}
;cT instanceof cQ||this.__cA(cS||G,E,cQ,p,cT);if(cR){this.assertMatch(cT.toString(),cR,cS);}
;}
,assertInArray:function(cV,cW,cX){cW.indexOf(cV)!==-1||this.__cA(cX||G,H,cV,X,cW,O);}
,assertArrayEquals:function(cY,da,db){this.assertArray(cY,db);this.assertArray(da,db);db=db||S+cY.join(D)+A+da.join(D)+C;if(cY.length!==da.length){this.fail(db,true);}
;for(var i=0;i<cY.length;i++){if(cY[i]!==da[i]){this.fail(db,true);}
;}
;}
,assertKeyInMap:function(dc,dd,de){dd[dc]!==undefined||this.__cA(de||G,H,dc,u,dd,O);}
,assertFunction:function(df,dg){qx.lang.Type.isFunction(df)||this.__cA(dg||G,ba,df,bi);}
,assertString:function(dh,di){qx.lang.Type.isString(dh)||this.__cA(di||G,s,dh,bi);}
,assertBoolean:function(dj,dk){qx.lang.Type.isBoolean(dj)||this.__cA(dk||G,bl,dj,bi);}
,assertNumber:function(dl,dm){(qx.lang.Type.isNumber(dl)&&isFinite(dl))||this.__cA(dm||G,bp,dl,bi);}
,assertPositiveNumber:function(dn,dp){(qx.lang.Type.isNumber(dn)&&isFinite(dn)&&dn>=0)||this.__cA(dp||G,a,dn,bi);}
,assertInteger:function(dq,dr){(qx.lang.Type.isNumber(dq)&&isFinite(dq)&&dq%1===0)||this.__cA(dr||G,bh,dq,bi);}
,assertPositiveInteger:function(ds,dt){var du=(qx.lang.Type.isNumber(ds)&&isFinite(ds)&&ds%1===0&&ds>=0);du||this.__cA(dt||G,k,ds,bi);}
,assertInRange:function(dv,dw,dx,dy){(dv>=dw&&dv<=dx)||this.__cA(dy||G,qx.lang.String.format(bq,[dv,dw,dx]));}
,assertObject:function(dz,dA){var dB=dz!==null&&(qx.lang.Type.isObject(dz)||typeof dz===R);dB||this.__cA(dA||G,Q,(dz),bi);}
,assertArray:function(dC,dD){qx.lang.Type.isArray(dC)||this.__cA(dD||G,n,dC,bi);}
,assertMap:function(dE,dF){qx.lang.Type.isObject(dE)||this.__cA(dF||G,d,dE,bi);}
,assertRegExp:function(dG,dH){qx.lang.Type.isRegExp(dG)||this.__cA(dH||G,bz,dG,bi);}
,assertType:function(dI,dJ,dK){this.assertString(dJ,bw);typeof (dI)===dJ||this.__cA(dK||G,bc,dJ,I,dI,bi);}
,assertInstance:function(dL,dM,dN){var dO=dM.classname||dM+G;dL instanceof dM||this.__cA(dN||G,bk,dO,I,dL,bi);}
,assertInterface:function(dP,dQ,dR){qx.Class.implementsInterface(dP,dQ)||this.__cA(dR||G,g,dP,by,dQ,K);}
,assertCssColor:function(dS,dT,dU){var dV=qx.Class.getByName(q);if(!dV){throw new Error(be);}
;var dX=dV.stringToRgb(dS);try{var dW=dV.stringToRgb(dT);}
catch(ea){this.__cA(dU||G,c,dS,bn,dX.join(bm),T,dT,Y);}
;var dY=dX[0]==dW[0]&&dX[1]==dW[1]&&dX[2]==dW[2];dY||this.__cA(dU||G,c,dX,bn,dX.join(bm),T,dT,bn,dW.join(bm),z);}
,assertElement:function(eb,ec){!!(eb&&eb.nodeType===1)||this.__cA(ec||G,bA,eb,K);}
,assertQxObject:function(ed,ee){this.__cC(ed,o)||this.__cA(ee||G,bs,ed,bi);}
,assertQxWidget:function(ef,eg){this.__cC(ef,L)||this.__cA(eg||G,M,ef,bi);}
,__cC:function(eh,ei){if(!eh){return false;}
;var ej=eh.constructor;while(ej){if(ej.classname===ei){return true;}
;ej=ej.superclass;}
;return false;}
}});}
)();
(function(){var c=": ",b="qx.type.BaseError",a="";qx.Class.define(b,{extend:Error,construct:function(d,e){var f=Error.call(this,e);if(f.stack){this.stack=f.stack;}
;if(f.stacktrace){this.stacktrace=f.stacktrace;}
;this.__bC=d||a;this.message=e||qx.type.BaseError.DEFAULTMESSAGE;}
,statics:{DEFAULTMESSAGE:"error"},members:{__bD:null,__bC:null,message:null,getComment:function(){return this.__bC;}
,toString:function(){return this.__bC+(this.message?c+this.message:a);}
}});}
)();
(function(){var a="qx.core.AssertionError";qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);this.__bE=qx.dev.StackTrace.getStackTrace();}
,members:{__bE:null,getStackTrace:function(){return this.__bE;}
}});}
)();
(function(){var t="?",s="anonymous",r="...",q="qx.dev.StackTrace",p="",o="\n",n="/source/class/",m="FILENAME_TO_CLASSNAME must return a string!",l="stack",k="FORMAT_STACKTRACE must return an array of strings!",d="prototype",j="stacktrace",g="qx.debug",c="Error created at",b="Backtrace:",f="function",e="ecmascript.stacktrace",h=".",a=":";qx.Bootstrap.define(q,{statics:{FILENAME_TO_CLASSNAME:null,FORMAT_STACKTRACE:null,getStackTrace:function(){var y=[];try{throw new Error();}
catch(J){if(qx.core.Environment.get(e)){var D=qx.dev.StackTrace.getStackTraceFromError(J);var B=qx.dev.StackTrace.getStackTraceFromCaller(arguments);qx.lang.Array.removeAt(D,0);y=B.length>D.length?B:D;for(var i=0;i<Math.min(B.length,D.length);i++){var z=B[i];if(z.indexOf(s)>=0){continue;}
;var x=null;var H=z.split(h);var A=/(.*?)\(/.exec(H[H.length-1]);if(A&&A.length==2){x=A[1];H.pop();}
;if(H[H.length-1]==d){H.pop();}
;var F=H.join(h);var w=D[i];var I=w.split(a);var E=I[0];var u=I[1];var v;if(I[2]){v=I[2];}
;var C=null;if(qx.Class.getByName(E)){C=E;}
else {C=F;}
;var G=C;if(x){G+=h+x;}
;G+=a+u;if(v){G+=a+v;}
;y[i]=G;}
;}
else {y=this.getStackTraceFromCaller(arguments);}
;}
;return y;}
,getStackTraceFromCaller:function(K){var P=[];var O=qx.lang.Function.getCaller(K);var L={};while(O){var M=qx.lang.Function.getName(O);P.push(M);try{O=O.caller;}
catch(Q){break;}
;if(!O){break;}
;var N=qx.core.ObjectRegistry.toHashCode(O);if(L[N]){P.push(r);break;}
;L[N]=O;}
;return P;}
,getStackTraceFromError:function(R){var V=[];if(qx.core.Environment.get(e)===l){if(!R.stack){return V;}
;var bh=/@(.+):(\d+)$/gm;var U;while((U=bh.exec(R.stack))!=null){var X=U[1];var bf=U[2];var bd=this.__bF(X);V.push(bd+a+bf);}
;if(V.length>0){return this.__bH(V);}
;var bh=/at (.*)/gm;var bg=/\((.*?)(:[^\/].*)\)/;var bc=/(.*?)(:[^\/].*)/;var U;while((U=bh.exec(R.stack))!=null){var bb=bg.exec(U[1]);if(!bb){bb=bc.exec(U[1]);}
;if(bb){var bd=this.__bF(bb[1]);V.push(bd+bb[2]);}
else {V.push(U[1]);}
;}
;}
else if(qx.core.Environment.get(e)===j){var T=R.stacktrace;if(!T){return V;}
;if(T.indexOf(c)>=0){T=T.split(c)[0];}
;var bh=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;var U;while((U=bh.exec(T))!=null){var bf=U[1];var W=U[2];var X=U[3];var bd=this.__bF(X);V.push(bd+a+bf+a+W);}
;if(V.length>0){return this.__bH(V);}
;var bh=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;var U;while((U=bh.exec(T))!=null){var bf=U[1];var X=U[2];var bd=this.__bF(X);V.push(bd+a+bf);}
;}
else if(R.message&&R.message.indexOf(b)>=0){var ba=qx.lang.String.trim(R.message.split(b)[1]);var Y=ba.split(o);for(var i=0;i<Y.length;i++){var S=Y[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);if(S&&S.length>=2){var bf=S[1];var be=this.__bF(S[2]);V.push(be+a+bf);}
;}
;}
else if(R.sourceURL&&R.line){V.push(this.__bF(R.sourceURL)+a+R.line);}
;;;return this.__bH(V);}
,__bF:function(bi){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==f){var bj=qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bi);if(qx.core.Environment.get(g)&&!qx.lang.Type.isString(bj)){throw new Error(m);}
;return bj;}
;return qx.dev.StackTrace.__bG(bi);}
,__bG:function(bk){var bo=n;var bl=bk.indexOf(bo);var bn=bk.indexOf(t);if(bn>=0){bk=bk.substring(0,bn);}
;var bm=(bl==-1)?bk:bk.substring(bl+bo.length).replace(/\//g,h).replace(/\.js$/,p);return bm;}
,__bH:function(bp){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==f){bp=qx.dev.StackTrace.FORMAT_STACKTRACE(bp);if(qx.core.Environment.get(g)&&!qx.lang.Type.isArray(bp)){throw new Error(k);}
;}
;return bp;}
}});}
)();
(function(){var f="e",d="ecmascript.stacktrace",c="qx.bom.client.EcmaScript",b="stack",a="stacktrace";qx.Bootstrap.define(c,{statics:{getStackTrace:function(){var g;var e=new Error(f);g=e.stack?b:e.stacktrace?a:null;if(!g){try{throw e;}
catch(h){e=h;}
;}
;return e.stacktrace?a:e.stack?b:null;}
},defer:function(i){qx.core.Environment.add(d,i.getStackTrace);}
});}
)();
(function(){var k="Invalid parameter 'func'.",j='anonymous()',i="Trying to call a bound function with a disposed object as context: ",h="qx.globalErrorHandling",g=" :: ",f="qx.lang.Function",e=".constructor()",d="qx.debug",c=".",b=".prototype.",a="()";qx.Bootstrap.define(f,{statics:{getCaller:function(l){return l.caller?l.caller.callee:l.callee.caller;}
,getName:function(m){if(m.displayName){return m.displayName;}
;if(m.$$original||m.wrapper||m.classname){return m.classname+e;}
;if(m.$$mixin){for(var o in m.$$mixin.$$members){if(m.$$mixin.$$members[o]==m){return m.$$mixin.name+b+o+a;}
;}
;for(var o in m.$$mixin){if(m.$$mixin[o]==m){return m.$$mixin.name+c+o+a;}
;}
;}
;if(m.self){var p=m.self.constructor;if(p){for(var o in p.prototype){if(p.prototype[o]==m){return p.classname+b+o+a;}
;}
;for(var o in p){if(p[o]==m){return p.classname+c+o+a;}
;}
;}
;}
;var n=m.toString().match(/function\s*(\w*)\s*\(.*/);if(n&&n.length>=1&&n[1]){return n[1]+a;}
;return j;}
,globalEval:function(q){if(window.execScript){return window.execScript(q);}
else {return eval.call(window,q);}
;}
,empty:function(){}
,returnTrue:function(){return true;}
,returnFalse:function(){return false;}
,returnNull:function(){return null;}
,returnThis:function(){return this;}
,returnZero:function(){return 0;}
,create:function(r,s){if(qx.core.Environment.get(d)){qx.core.Assert&&qx.core.Assert.assertFunction(r,k);}
;if(!s){return r;}
;if(!(s.self||s.args||s.delay!=null||s.periodical!=null||s.attempt)){return r;}
;return function(event){if(qx.core.Environment.get(d)){if(qx.core&&qx.core.Object&&s.self&&qx.Bootstrap.isObject(s.self)&&s.self.isDisposed&&qx.Bootstrap.isFunction(s.self.isDisposed)){qx.core.Assert&&qx.core.Assert.assertFalse(s.self.isDisposed(),i+s.self.toString()+g+qx.lang.Function.getName(r));}
;}
;var u=qx.lang.Array.fromArguments(arguments);if(s.args){u=s.args.concat(u);}
;if(s.delay||s.periodical){var t=function(){return r.apply(s.self||this,u);}
;if(qx.core.Environment.get(h)){t=qx.event.GlobalError.observeMethod(t);}
;if(s.delay){return window.setTimeout(t,s.delay);}
;if(s.periodical){return window.setInterval(t,s.periodical);}
;}
else if(s.attempt){var v=false;try{v=r.apply(s.self||this,u);}
catch(w){}
;return v;}
else {return r.apply(s.self||this,u);}
;}
;}
,bind:function(x,self,y){return this.create(x,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});}
,curry:function(z,A){return this.create(z,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});}
,listener:function(B,self,C){if(arguments.length<3){return function(event){return B.call(self||this,event||window.event);}
;}
else {var D=qx.lang.Array.fromArguments(arguments,2);return function(event){var E=[event||window.event];E.push.apply(E,D);B.apply(self||this,E);}
;}
;}
,attempt:function(F,self,G){return this.create(F,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();}
,delay:function(H,I,self,J){return this.create(H,{delay:I,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();}
,periodical:function(K,L,self,M){return this.create(K,{periodical:L,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();}
}});}
)();
(function(){var p="-",o="",n="qx.core.ObjectRegistry",m="-0",k="Could not dispose object ",j=" objects",h=": ",g="Disposed ",f="qx.debug.dispose",e="$$hash",c="qx.debug",d="Invalid object: ";qx.Class.define(n,{statics:{inShutDown:false,__bc:{},__bI:0,__bJ:[],__bK:o,__bL:{},register:function(q){var t=this.__bc;if(!t){return;}
;var s=q.$$hash;if(s==null){var r=this.__bJ;if(r.length>0&&!qx.core.Environment.get(f)){s=r.pop();}
else {s=(this.__bI++)+this.__bK;}
;q.$$hash=s;if(qx.core.Environment.get(f)){if(qx.dev&&qx.dev.Debug&&qx.dev.Debug.disposeProfilingActive){this.__bL[s]=qx.dev.StackTrace.getStackTrace();}
;}
;}
;if(qx.core.Environment.get(c)){if(!q.dispose){throw new Error(d+q);}
;}
;t[s]=q;}
,unregister:function(u){var v=u.$$hash;if(v==null){return;}
;var w=this.__bc;if(w&&w[v]){delete w[v];this.__bJ.push(v);}
;try{delete u.$$hash;}
catch(x){if(u.removeAttribute){u.removeAttribute(e);}
;}
;}
,toHashCode:function(y){if(qx.core.Environment.get(c)){if(y==null){throw new Error(d+y);}
;}
;var A=y.$$hash;if(A!=null){return A;}
;var z=this.__bJ;if(z.length>0){A=z.pop();}
else {A=(this.__bI++)+this.__bK;}
;return y.$$hash=A;}
,clearHashCode:function(B){if(qx.core.Environment.get(c)){if(B==null){throw new Error(d+B);}
;}
;var C=B.$$hash;if(C!=null){this.__bJ.push(C);try{delete B.$$hash;}
catch(D){if(B.removeAttribute){B.removeAttribute(e);}
;}
;}
;}
,fromHashCode:function(E){return this.__bc[E]||null;}
,shutdown:function(){this.inShutDown=true;var G=this.__bc;var I=[];for(var H in G){I.push(H);}
;I.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);}
);var F,i=0,l=I.length;while(true){try{for(;i<l;i++){H=I[i];F=G[H];if(F&&F.dispose){F.dispose();}
;}
;}
catch(J){qx.Bootstrap.error(this,k+F.toString()+h+J,J);if(i!==l){i++;continue;}
;}
;break;}
;qx.Bootstrap.debug(this,g+l+j);delete this.__bc;}
,getRegistry:function(){return this.__bc;}
,getNextHash:function(){return this.__bI;}
,getPostId:function(){return this.__bK;}
,getStackTraces:function(){return this.__bL;}
},defer:function(K){if(window&&window.top){var frames=window.top.frames;for(var i=0;i<frames.length;i++){if(frames[i]===window){K.__bK=p+(i+1);return;}
;}
;}
;K.__bK=m;}
});}
)();
(function(){var g="prop",f="qx.bom.client.Json",e="JSON",d='{"x":1}',c="json",b="val",a="repl";qx.Bootstrap.define(f,{statics:{getJson:function(){return (qx.Bootstrap.getClass(window.JSON)==e&&JSON.parse(d).x===1&&JSON.stringify({"prop":b},function(k,v){return k===g?a:v;}
).indexOf(a)>0);}
},defer:function(h){qx.core.Environment.add(c,h.getJson);}
});}
)();
(function(){var p='String',o='Boolean',m='\\\\',l='\\f',h='\\t',g='{\n',f='[]',e="qx.lang.JsonImpl",d='Z',b='\\n',ba='Object',Y='{}',X='@',W='.',V='(',U='Array',T='T',S='\\r',R='{',Q='JSON.parse',x=' ',y='[',u='Number',w=')',s='[\n',t='\\"',q='\\b',r=': ',z='object',A='function',H=',',F='\n',K='\\u',J=',\n',M='0000',L='string',C="Cannot stringify a recursive object.",P='0',O='-',N='}',B=']',D='null',E='"',G=':',I='';qx.Bootstrap.define(e,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);this.parse=qx.lang.Function.bind(this.parse,this);}
,members:{__cD:null,__cE:null,__cF:null,__cG:null,stringify:function(bb,bc,bd){this.__cD=I;this.__cE=I;this.__cG=[];if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));for(var i=0;i<bd;i+=1){this.__cE+=x;}
;}
else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);}
;this.__cE=bd;}
;if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__cF=bc;}
else {this.__cF=null;}
;return this.__cH(I,{'':bb});}
,__cH:function(be,bf){var bi=this.__cD,bg,bj=bf[be];if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);}
else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);}
;if(typeof this.__cF===A){bj=this.__cF.call(bf,be,bj);}
;if(bj===null){return D;}
;if(bj===undefined){return undefined;}
;switch(qx.lang.Type.getClass(bj)){case p:return this.__cI(bj);case u:return isFinite(bj)?String(bj):D;case o:return String(bj);case U:this.__cD+=this.__cE;bg=[];if(this.__cG.indexOf(bj)!==-1){throw new TypeError(C);}
;this.__cG.push(bj);var length=bj.length;for(var i=0;i<length;i+=1){bg[i]=this.__cH(i,bj)||D;}
;this.__cG.pop();if(bg.length===0){var bh=f;}
else if(this.__cD){bh=s+this.__cD+bg.join(J+this.__cD)+F+bi+B;}
else {bh=y+bg.join(H)+B;}
;this.__cD=bi;return bh;case ba:this.__cD+=this.__cE;bg=[];if(this.__cG.indexOf(bj)!==-1){throw new TypeError(C);}
;this.__cG.push(bj);if(this.__cF&&typeof this.__cF===z){var length=this.__cF.length;for(var i=0;i<length;i+=1){var k=this.__cF[i];if(typeof k===L){var v=this.__cH(k,bj);if(v){bg.push(this.__cI(k)+(this.__cD?r:G)+v);}
;}
;}
;}
else {for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__cH(k,bj);if(v){bg.push(this.__cI(k)+(this.__cD?r:G)+v);}
;}
;}
;}
;this.__cG.pop();if(bg.length===0){var bh=Y;}
else if(this.__cD){bh=g+this.__cD+bg.join(J+this.__cD)+F+bi+N;}
else {bh=R+bg.join(H)+N;}
;this.__cD=bi;return bh;};}
,dateToJSON:function(bk){var bl=function(n){return n<10?P+n:n;}
;var bm=function(n){var bn=bl(n);return n<100?P+bn:bn;}
;return isFinite(bk.valueOf())?bk.getUTCFullYear()+O+bl(bk.getUTCMonth()+1)+O+bl(bk.getUTCDate())+T+bl(bk.getUTCHours())+G+bl(bk.getUTCMinutes())+G+bl(bk.getUTCSeconds())+W+bm(bk.getUTCMilliseconds())+d:null;}
,__cI:function(bo){var bp={'\b':q,'\t':h,'\n':b,'\f':l,'\r':S,'"':t,'\\':m};var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;bq.lastIndex=0;if(bq.test(bo)){return E+bo.replace(bq,function(a){var c=bp[a];return typeof c===L?c:K+(M+a.charCodeAt(0).toString(16)).slice(-4);}
)+E;}
else {return E+bo+E;}
;}
,parse:function(br,bs){var bt=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;bt.lastIndex=0;if(bt.test(br)){br=br.replace(bt,function(a){return K+(M+a.charCodeAt(0).toString(16)).slice(-4);}
);}
;if(/^[\],:{}\s]*$/.test(br.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,X).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,B).replace(/(?:^|:|,)(?:\s*\[)+/g,I))){var j=eval(V+br+w);return typeof bs===A?this.__cJ({'':j},I,bs):j;}
;throw new SyntaxError(Q);}
,__cJ:function(bu,bv,bw){var bx=bu[bv];if(bx&&typeof bx===z){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__cJ(bx,k,bw);if(v!==undefined){bx[k]=v;}
else {delete bx[k];}
;}
;}
;}
;return bw.call(bu,bv,bx);}
}});}
)();
(function(){var a="qx.lang.Json";qx.Bootstrap.define(a,{statics:{JSON:qx.core.Environment.get("json")?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;b.parse=b.JSON.parse;}
});}
)();
(function(){var a="qx.lang.Date";qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;}
}});}
)();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){}
,setItem:function(e,f){}
,splice:function(g,h,i){}
,contains:function(j){}
,getLength:function(){}
,toArray:function(){}
}});}
)();
(function(){var a="qx.core.ValidationError";qx.Class.define(a,{extend:qx.type.BaseError});}
)();
(function(){var a="qx.lang.RingBuffer";qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);}
,members:{__bM:0,__bN:0,__bO:false,__bP:0,__bQ:null,__bR:null,setMaxEntries:function(c){this.__bR=c;this.clear();}
,getMaxEntries:function(){return this.__bR;}
,addEntry:function(d){this.__bQ[this.__bM]=d;this.__bM=this.__bS(this.__bM,1);var e=this.getMaxEntries();if(this.__bN<e){this.__bN++;}
;if(this.__bO&&(this.__bP<e)){this.__bP++;}
;}
,mark:function(){this.__bO=true;this.__bP=0;}
,clearMark:function(){this.__bO=false;}
,getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);}
,getEntries:function(f,g){if(f>this.__bN){f=this.__bN;}
;if(g&&this.__bO&&(f>this.__bP)){f=this.__bP;}
;if(f>0){var i=this.__bS(this.__bM,-1);var h=this.__bS(i,-f+1);var j;if(h<=i){j=this.__bQ.slice(h,i+1);}
else {j=this.__bQ.slice(h,this.__bN).concat(this.__bQ.slice(0,i+1));}
;}
else {j=[];}
;return j;}
,clear:function(){this.__bQ=new Array(this.getMaxEntries());this.__bN=0;this.__bP=0;this.__bM=0;}
,__bS:function(k,l){var m=this.getMaxEntries();var n=(k+l)%m;if(n<0){n+=m;}
;return n;}
}});}
)();
(function(){var a="qx.log.appender.RingBuffer";qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(b){this.setMaxMessages(b||50);}
,members:{setMaxMessages:function(c){this.setMaxEntries(c);}
,getMaxMessages:function(){return this.getMaxEntries();}
,process:function(d){this.addEntry(d);}
,getAllLogEvents:function(){return this.getAllEntries();}
,retrieveLogEvents:function(e,f){return this.getEntries(e,f);}
,clearHistory:function(){this.clear();}
}});}
)();
(function(){var k="qx.log.Logger",j="[",h="The mixin '",g="warn",f="The event '",e="Please consult the API documentation of this method for alternatives.",d="#",c="document",b="{...(",a="' from class '",T="The class '",S="' overrides a deprecated method: ",R="text[",Q="[...(",P="\n",O=")}",N=")]",M="The constant '",L="object",K="...(+",s="array",t="The method '",q=")",r="instance",o="info",p="string",m="null",n="class",u="Please consult the API documentation for alternatives.",v="number",C="stringify",A="date",E="function",D="]",G="boolean",F="debug",x="map",J="node",I="error",H="Please consult the API documentation of this class for alternatives.",w="undefined",y="' is deprecated: ",z="qx.debug",B="unknown";qx.Class.define(k,{statics:{__bT:F,setLevel:function(U){this.__bT=U;}
,getLevel:function(){return this.__bT;}
,setTreshold:function(V){this.__bW.setMaxMessages(V);}
,getTreshold:function(){return this.__bW.getMaxMessages();}
,__bU:{},__bV:0,register:function(W){if(W.$$id){return;}
;var Y=this.__bV++;this.__bU[Y]=W;W.$$id=Y;var X=this.__bX;var ba=this.__bW.getAllLogEvents();for(var i=0,l=ba.length;i<l;i++){if(X[ba[i].level]>=X[this.__bT]){W.process(ba[i]);}
;}
;}
,unregister:function(bb){var bc=bb.$$id;if(bc==null){return;}
;delete this.__bU[bc];delete bb.$$id;}
,debug:function(bd,be){qx.log.Logger.__bY(F,arguments);}
,info:function(bf,bg){qx.log.Logger.__bY(o,arguments);}
,warn:function(bh,bi){qx.log.Logger.__bY(g,arguments);}
,error:function(bj,bk){qx.log.Logger.__bY(I,arguments);}
,trace:function(bl){var bm=qx.dev.StackTrace.getStackTrace();qx.log.Logger.__bY(o,[(typeof bl!==w?[bl].concat(bm):bm).join(P)]);}
,deprecatedMethodWarning:function(bn,bo){if(qx.core.Environment.get(z)){var bp=qx.lang.Function.getName(bn);this.warn(t+bp+y+(bo||e));this.trace();}
;}
,deprecatedClassWarning:function(bq,br){if(qx.core.Environment.get(z)){var bs=bq.classname||B;this.warn(T+bs+y+(br||H));this.trace();}
;}
,deprecatedEventWarning:function(bt,event,bu){if(qx.core.Environment.get(z)){var bv=bt.self?bt.self.classname:B;this.warn(f+(event||B)+a+bv+y+(bu||H));this.trace();}
;}
,deprecatedMixinWarning:function(bw,bx){if(qx.core.Environment.get(z)){var by=bw?bw.name:B;this.warn(h+by+y+(bx||H));this.trace();}
;}
,deprecatedConstantWarning:function(bz,bA,bB){if(qx.core.Environment.get(z)){if(bz.__defineGetter__){var self=this;var bC=bz[bA];bz.__defineGetter__(bA,function(){self.warn(M+bA+y+(bB||u));self.trace();return bC;}
);}
;}
;}
,deprecateMethodOverriding:function(bD,bE,bF,bG){if(qx.core.Environment.get(z)){var bH=bD.constructor;while(bH.classname!==bE.classname){if(bH.prototype.hasOwnProperty(bF)){this.warn(t+qx.lang.Function.getName(bD[bF])+S+(bG||u));this.trace();break;}
;bH=bH.superclass;}
;}
;}
,clear:function(){this.__bW.clearHistory();}
,__bW:new qx.log.appender.RingBuffer(50),__bX:{debug:0,info:1,warn:2,error:3},__bY:function(bI,bJ){var bO=this.__bX;if(bO[bI]<bO[this.__bT]){return;}
;var bL=bJ.length<2?null:bJ[0];var bN=bL?1:0;var bK=[];for(var i=bN,l=bJ.length;i<l;i++){bK.push(this.__cb(bJ[i],true));}
;var bP=new Date;var bQ={time:bP,offset:bP-qx.Bootstrap.LOADSTART,level:bI,items:bK,win:window};if(bL){if(bL.$$hash!==undefined){bQ.object=bL.$$hash;}
else if(bL.$$type){bQ.clazz=bL;}
;}
;this.__bW.process(bQ);var bR=this.__bU;for(var bM in bR){bR[bM].process(bQ);}
;}
,__ca:function(bS){if(bS===undefined){return w;}
else if(bS===null){return m;}
;if(bS.$$type){return n;}
;var bT=typeof bS;if(bT===E||bT==p||bT===v||bT===G){return bT;}
else if(bT===L){if(bS.nodeType){return J;}
else if(bS.classname){return r;}
else if(bS instanceof Array){return s;}
else if(bS instanceof Error){return I;}
else if(bS instanceof Date){return A;}
else {return x;}
;;;;}
;if(bS.toString){return C;}
;return B;}
,__cb:function(bU,bV){var cd=this.__ca(bU);var bY=B;var bX=[];switch(cd){case m:case w:bY=cd;break;case p:case v:case G:case A:bY=bU;break;case J:if(bU.nodeType===9){bY=c;}
else if(bU.nodeType===3){bY=R+bU.nodeValue+D;}
else if(bU.nodeType===1){bY=bU.nodeName.toLowerCase();if(bU.id){bY+=d+bU.id;}
;}
else {bY=J;}
;;break;case E:bY=qx.lang.Function.getName(bU)||cd;break;case r:bY=bU.basename+j+bU.$$hash+D;break;case n:case C:bY=bU.toString();break;case I:bX=qx.dev.StackTrace.getStackTraceFromError(bU);bY=bU.toString();break;case s:if(bV){bY=[];for(var i=0,l=bU.length;i<l;i++){if(bY.length>20){bY.push(K+(l-i)+q);break;}
;bY.push(this.__cb(bU[i],false));}
;}
else {bY=Q+bU.length+N;}
;break;case x:if(bV){var bW;var cc=[];for(var cb in bU){cc.push(cb);}
;cc.sort();bY=[];for(var i=0,l=cc.length;i<l;i++){if(bY.length>20){bY.push(K+(l-i)+q);break;}
;cb=cc[i];bW=this.__cb(bU[cb],false);bW.key=cb;bY.push(bW);}
;}
else {var ca=0;for(var cb in bU){ca++;}
;bY=b+ca+O;}
;break;};return {type:cd,text:bY,trace:bX};}
},defer:function(ce){var cf=qx.Bootstrap.$$logs;for(var i=0;i<cf.length;i++){ce.__bY(cf[i][0],cf[i][1]);}
;qx.Bootstrap.debug=ce.debug;qx.Bootstrap.info=ce.info;qx.Bootstrap.warn=ce.warn;qx.Bootstrap.error=ce.error;qx.Bootstrap.trace=ce.trace;}
});}
)();
(function(){var e="info",d="debug",c="warn",b="qx.core.MLogging",a="error";qx.Mixin.define(b,{members:{__cc:qx.log.Logger,debug:function(f){this.__cd(d,arguments);}
,info:function(g){this.__cd(e,arguments);}
,warn:function(h){this.__cd(c,arguments);}
,error:function(i){this.__cd(a,arguments);}
,trace:function(){this.__cc.trace(this);}
,__cd:function(j,k){var l=qx.lang.Array.fromArguments(k);l.unshift(this);this.__cc[j].apply(this.__cc,l);}
}});}
)();
(function(){var c="qx.dom.Node",b="";qx.Bootstrap.define(c,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(d){return d.nodeType===this.DOCUMENT?d:d.ownerDocument||d.document;}
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
;switch(q.nodeType){case 1:var i,a=[],r=q.childNodes,length=r.length;for(i=0;i<length;i++){a[i]=this.getText(r[i]);}
;return a.join(b);case 2:case 3:case 4:return q.nodeValue;};return null;}
,isBlockNode:function(s){if(!qx.dom.Node.isElement(s)){return false;}
;s=qx.dom.Node.getName(s);return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(s);}
}});}
)();
(function(){var m="gecko",l="engine.name",k="qx.bom.Event",j="mouseover",i="No method available to remove native listener from ",h="No method available to add native listener to ",g="HTMLEvents",f="return;",d="qx.debug",c="function",a="undefined",b="on";qx.Bootstrap.define(k,{statics:{addNativeListener:function(n,o,p,q){if(n.addEventListener){n.addEventListener(o,p,!!q);}
else if(n.attachEvent){n.attachEvent(b+o,p);}
else if(typeof n[b+o]!=a){n[b+o]=p;}
else {if(qx.core.Environment.get(d)){qx.log.Logger.warn(h+n);}
;}
;;}
,removeNativeListener:function(r,s,t,u){if(r.removeEventListener){r.removeEventListener(s,t,!!u);}
else if(r.detachEvent){try{r.detachEvent(b+s,t);}
catch(e){if(e.number!==-2146828218){throw e;}
;}
;}
else if(typeof r[b+s]!=a){r[b+s]=null;}
else {if(qx.core.Environment.get(d)){qx.log.Logger.warn(i+r);}
;}
;;}
,getTarget:function(e){return e.target||e.srcElement;}
,getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(l)==m)){try{e.relatedTarget&&e.relatedTarget.nodeType;}
catch(e){return null;}
;}
;return e.relatedTarget;}
else if(e.fromElement!==undefined&&e.type===j){return e.fromElement;}
else if(e.toElement!==undefined){return e.toElement;}
else {return null;}
;;}
,preventDefault:function(e){if(e.preventDefault){e.preventDefault();}
else {try{e.keyCode=0;}
catch(v){}
;e.returnValue=false;}
;}
,stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();}
else {e.cancelBubble=true;}
;}
,fire:function(w,x){if(document.createEvent){var y=document.createEvent(g);y.initEvent(x,true,true);return !w.dispatchEvent(y);}
else {var y=document.createEventObject();return w.fireEvent(b+x,y);}
;}
,supportsEvent:function(z,A){var B=b+A;var C=(B in z);if(!C){C=typeof z[B]==c;if(!C&&z.setAttribute){z.setAttribute(B,f);C=typeof z[B]==c;z.removeAttribute(B);}
;}
;return C;}
}});}
)();
(function(){var k="Failed to remove event listener for id '",j="Invalid context for callback.",h="Failed to add event listener for type '",g="__ci",f="UNKNOWN_",e="capture",d="qx.event.Manager",c="Could not dispatch event '",b="DOM_",a="No dispatcher can handle event of type ",O="QX_",N=" to the target '",M="__cj",L="Failed to remove event listener for type '",K=" on ",J="Invalid id type.",I="c",H="DOCUMENT_",G="WIN_",F="Invalid event object.",s="Invalid capture flag.",t="Invalid event type.",q="There is no event handler for the event '",r=" from the target '",o="Invalid callback function",p="'!",m="Invalid event target.",n="unload",u="Invalid object: ",v="'",y="' on target '",x="",A="_",z="Invalid Target.",C="': ",B="|",w="|bubble",E="|capture",D="qx.debug";qx.Class.define(d,{extend:Object,construct:function(P,Q){this.__ce=P;this.__cf=qx.core.ObjectRegistry.toHashCode(P);this.__cg=Q;if(P.qx!==qx){var self=this;qx.bom.Event.addNativeListener(P,n,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(P,n,arguments.callee);self.dispose();}
));}
;this.__ch={};this.__ci={};this.__cj={};this.__ck={};}
,statics:{__cl:0,getNextUniqueId:function(){return (this.__cl++)+x;}
},members:{__cg:null,__ch:null,__cj:null,__cm:null,__ci:null,__ck:null,__ce:null,__cf:null,getWindow:function(){return this.__ce;}
,getWindowId:function(){return this.__cf;}
,getHandler:function(R){var S=this.__ci[R.classname];if(S){return S;}
;return this.__ci[R.classname]=new R(this);}
,getDispatcher:function(T){var U=this.__cj[T.classname];if(U){return U;}
;return this.__cj[T.classname]=new T(this,this.__cg);}
,getListeners:function(V,W,X){var Y=V.$$hash||qx.core.ObjectRegistry.toHashCode(V);var bb=this.__ch[Y];if(!bb){return null;}
;var bc=W+(X?E:w);var ba=bb[bc];return ba?ba.concat():null;}
,getAllListeners:function(){return this.__ch;}
,serializeListeners:function(bd){var bk=bd.$$hash||qx.core.ObjectRegistry.toHashCode(bd);var bm=this.__ch[bk];var bi=[];if(bm){var bg,bl,be,bh,bj;for(var bf in bm){bg=bf.indexOf(B);bl=bf.substring(0,bg);be=bf.charAt(bg+1)==I;bh=bm[bf];for(var i=0,l=bh.length;i<l;i++){bj=bh[i];bi.push({self:bj.context,handler:bj.handler,type:bl,capture:be});}
;}
;}
;return bi;}
,toggleAttachedEvents:function(bn,bo){var bt=bn.$$hash||qx.core.ObjectRegistry.toHashCode(bn);var bv=this.__ch[bt];if(bv){var bq,bu,bp,br;for(var bs in bv){bq=bs.indexOf(B);bu=bs.substring(0,bq);bp=bs.charCodeAt(bq+1)===99;br=bv[bs];if(bo){this.__cn(bn,bu,bp);}
else {this.__co(bn,bu,bp);}
;}
;}
;}
,hasListener:function(bw,bx,by){if(qx.core.Environment.get(D)){if(bw==null){qx.log.Logger.trace(this);throw new Error(u+bw);}
;}
;var bz=bw.$$hash||qx.core.ObjectRegistry.toHashCode(bw);var bB=this.__ch[bz];if(!bB){return false;}
;var bC=bx+(by?E:w);var bA=bB[bC];return !!(bA&&bA.length>0);}
,importListeners:function(bD,bE){if(qx.core.Environment.get(D)){if(bD==null){qx.log.Logger.trace(this);throw new Error(u+bD);}
;}
;var bK=bD.$$hash||qx.core.ObjectRegistry.toHashCode(bD);var bL=this.__ch[bK]={};var bH=qx.event.Manager;for(var bF in bE){var bI=bE[bF];var bJ=bI.type+(bI.capture?E:w);var bG=bL[bJ];if(!bG){bG=bL[bJ]=[];this.__cn(bD,bI.type,bI.capture);}
;bG.push({handler:bI.listener,context:bI.self,unique:bI.unique||(bH.__cl++)+x});}
;}
,addListener:function(bM,bN,bO,self,bP){if(qx.core.Environment.get(D)){var bT=h+bN+v+N+bM.classname+C;qx.core.Assert.assertObject(bM,bT+z);qx.core.Assert.assertString(bN,bT+t);qx.core.Assert.assertFunction(bO,bT+o);if(bP!==undefined){qx.core.Assert.assertBoolean(bP,s);}
;}
;var bU=bM.$$hash||qx.core.ObjectRegistry.toHashCode(bM);var bW=this.__ch[bU];if(!bW){bW=this.__ch[bU]={};}
;var bS=bN+(bP?E:w);var bR=bW[bS];if(!bR){bR=bW[bS]=[];}
;if(bR.length===0){this.__cn(bM,bN,bP);}
;var bV=(qx.event.Manager.__cl++)+x;var bQ={handler:bO,context:self,unique:bV};bR.push(bQ);return bS+B+bV;}
,findHandler:function(bX,bY){var cl=false,cd=false,cm=false,ca=false;var cj;if(bX.nodeType===1){cl=true;cj=b+bX.tagName.toLowerCase()+A+bY;}
else if(bX.nodeType===9){ca=true;cj=H+bY;}
else if(bX==this.__ce){cd=true;cj=G+bY;}
else if(bX.classname){cm=true;cj=O+bX.classname+A+bY;}
else {cj=f+bX+A+bY;}
;;;var cf=this.__ck;if(cf[cj]){return cf[cj];}
;var ci=this.__cg.getHandlers();var ce=qx.event.IEventHandler;var cg,ch,cc,cb;for(var i=0,l=ci.length;i<l;i++){cg=ci[i];cc=cg.SUPPORTED_TYPES;if(cc&&!cc[bY]){continue;}
;cb=cg.TARGET_CHECK;if(cb){var ck=false;if(cl&&((cb&ce.TARGET_DOMNODE)!=0)){ck=true;}
else if(cd&&((cb&ce.TARGET_WINDOW)!=0)){ck=true;}
else if(cm&&((cb&ce.TARGET_OBJECT)!=0)){ck=true;}
else if(ca&&((cb&ce.TARGET_DOCUMENT)!=0)){ck=true;}
;;;if(!ck){continue;}
;}
;ch=this.getHandler(ci[i]);if(cg.IGNORE_CAN_HANDLE||ch.canHandleEvent(bX,bY)){cf[cj]=ch;return ch;}
;}
;return null;}
,__cn:function(cn,co,cp){var cq=this.findHandler(cn,co);if(cq){cq.registerEvent(cn,co,cp);return;}
;if(qx.core.Environment.get(D)){qx.log.Logger.warn(this,q+co+y+cn+p);}
;}
,removeListener:function(cr,cs,ct,self,cu){if(qx.core.Environment.get(D)){var cy=L+cs+v+r+cr.classname+C;qx.core.Assert.assertObject(cr,cy+z);qx.core.Assert.assertString(cs,cy+t);qx.core.Assert.assertFunction(ct,cy+o);if(self!==undefined){qx.core.Assert.assertObject(self,j);}
;if(cu!==undefined){qx.core.Assert.assertBoolean(cu,s);}
;}
;var cz=cr.$$hash||qx.core.ObjectRegistry.toHashCode(cr);var cA=this.__ch[cz];if(!cA){return false;}
;var cv=cs+(cu?E:w);var cw=cA[cv];if(!cw){return false;}
;var cx;for(var i=0,l=cw.length;i<l;i++){cx=cw[i];if(cx.handler===ct&&cx.context===self){qx.lang.Array.removeAt(cw,i);if(cw.length==0){this.__co(cr,cs,cu);}
;return true;}
;}
;return false;}
,removeListenerById:function(cB,cC){if(qx.core.Environment.get(D)){var cI=k+cC+v+r+cB.classname+C;qx.core.Assert.assertObject(cB,cI+z);qx.core.Assert.assertString(cC,cI+J);}
;var cG=cC.split(B);var cL=cG[0];var cD=cG[1].charCodeAt(0)==99;var cK=cG[2];var cJ=cB.$$hash||qx.core.ObjectRegistry.toHashCode(cB);var cM=this.__ch[cJ];if(!cM){return false;}
;var cH=cL+(cD?E:w);var cF=cM[cH];if(!cF){return false;}
;var cE;for(var i=0,l=cF.length;i<l;i++){cE=cF[i];if(cE.unique===cK){qx.lang.Array.removeAt(cF,i);if(cF.length==0){this.__co(cB,cL,cD);}
;return true;}
;}
;return false;}
,removeAllListeners:function(cN){var cR=cN.$$hash||qx.core.ObjectRegistry.toHashCode(cN);var cT=this.__ch[cR];if(!cT){return false;}
;var cP,cS,cO;for(var cQ in cT){if(cT[cQ].length>0){cP=cQ.split(B);cS=cP[0];cO=cP[1]===e;this.__co(cN,cS,cO);}
;}
;delete this.__ch[cR];return true;}
,deleteAllListeners:function(cU){delete this.__ch[cU];}
,__co:function(cV,cW,cX){var cY=this.findHandler(cV,cW);if(cY){cY.unregisterEvent(cV,cW,cX);return;}
;if(qx.core.Environment.get(D)){qx.log.Logger.warn(this,q+cW+y+cV+p);}
;}
,dispatchEvent:function(da,event){if(qx.core.Environment.get(D)){var df=c+event+y+da.classname+C;qx.core.Assert.assertNotUndefined(da,df+m);qx.core.Assert.assertNotNull(da,df+m);qx.core.Assert.assertInstance(event,qx.event.type.Event,df+F);}
;var dg=event.getType();if(!event.getBubbles()&&!this.hasListener(da,dg)){qx.event.Pool.getInstance().poolObject(event);return true;}
;if(!event.getTarget()){event.setTarget(da);}
;var de=this.__cg.getDispatchers();var dd;var dc=false;for(var i=0,l=de.length;i<l;i++){dd=this.getDispatcher(de[i]);if(dd.canDispatchEvent(da,event,dg)){dd.dispatchEvent(da,event,dg);dc=true;break;}
;}
;if(!dc){if(qx.core.Environment.get(D)){qx.log.Logger.error(this,a+dg+K+da);}
;return true;}
;var db=event.getDefaultPrevented();qx.event.Pool.getInstance().poolObject(event);return !db;}
,dispose:function(){this.__cg.removeManager(this);qx.util.DisposeUtil.disposeMap(this,g);qx.util.DisposeUtil.disposeMap(this,M);this.__ch=this.__ce=this.__cm=null;this.__cg=this.__ck=null;}
}});}
)();
(function(){var b="qx.event.GlobalError",a="qx.globalErrorHandling";qx.Bootstrap.define(b,{statics:{__cp:function(){if(qx.core&&qx.core.Environment){return qx.core.Environment.get(a);}
else {return !!qx.Bootstrap.getEnvironmentSetting(a);}
;}
,setErrorHandler:function(c,d){this.__cq=c||null;this.__cr=d||window;if(this.__cp()){if(c&&window.onerror){var e=qx.Bootstrap.bind(this.__ct,this);if(this.__cs==null){this.__cs=window.onerror;}
;var self=this;window.onerror=function(f,g,h){self.__cs(f,g,h);e(f,g,h);}
;}
;if(c&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__ct,this);}
;if(this.__cq==null){if(this.__cs!=null){window.onerror=this.__cs;this.__cs=null;}
else {window.onerror=null;}
;}
;}
;}
,__ct:function(i,j,k){if(this.__cq){this.handleError(new qx.core.WindowError(i,j,k));return true;}
;}
,observeMethod:function(l){if(this.__cp()){var self=this;return function(){if(!self.__cq){return l.apply(this,arguments);}
;try{return l.apply(this,arguments);}
catch(m){self.handleError(new qx.core.GlobalError(m,arguments));}
;}
;}
else {return l;}
;}
,handleError:function(n){if(this.__cq){this.__cq.call(this.__cr,n);}
;}
},defer:function(o){if(qx.core&&qx.core.Environment){qx.core.Environment.add(a,true);}
else {qx.Bootstrap.setEnvironmentSetting(a,true);}
;o.setErrorHandler(null,null);}
});}
)();
(function(){var b="",a="qx.core.WindowError";qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){var f=Error.call(this,c);if(f.stack){this.stack=f.stack;}
;if(f.stacktrace){this.stacktrace=f.stacktrace;}
;this.__cu=c;this.__cv=d||b;this.__cw=e===undefined?-1:e;}
,members:{__cu:null,__cv:null,__cw:null,toString:function(){return this.__cu;}
,getUri:function(){return this.__cv;}
,getLineNumber:function(){return this.__cw;}
}});}
)();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(c);}
;this.__cu=b+(c&&c.message?c.message:c);var e=Error.call(this,this.__cu);if(e.stack){this.stack=e.stack;}
;if(e.stacktrace){this.stacktrace=e.stacktrace;}
;this.__cx=d;this.__cy=c;}
,members:{__cy:null,__cx:null,__cu:null,toString:function(){return this.__cu;}
,getArguments:function(){return this.__cx;}
,getSourceException:function(){return this.__cy;}
},destruct:function(){this.__cy=null;this.__cx=null;this.__cu=null;}
});}
)();
(function(){var a="qx.event.IEventHandler";qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){}
,registerEvent:function(d,e,f){}
,unregisterEvent:function(g,h,i){}
}});}
)();
(function(){var n="Invalid event dispatcher!",m="': ",l="Invalid event handler.",k="' on target '",j="Could not fire event '",i="qx.event.Registration.getManager(null) was called!",h="undefined",g="qx.event.Registration",f="Invalid event target.",e="Create event of type ",c=" with undefined class. Please use null to explicit fallback to default event type!",d="qx.debug";qx.Class.define(g,{statics:{__cK:{},getManager:function(o){if(o==null){if(qx.core.Environment.get(d)){qx.log.Logger.error(i);qx.log.Logger.trace(this);}
;o=window;}
else if(o.nodeType){o=qx.dom.Node.getWindow(o);}
else if(!qx.dom.Node.isWindow(o)){o=window;}
;;var q=o.$$hash||qx.core.ObjectRegistry.toHashCode(o);var p=this.__cK[q];if(!p){p=new qx.event.Manager(o,this);this.__cK[q]=p;}
;return p;}
,removeManager:function(r){var s=r.getWindowId();delete this.__cK[s];}
,addListener:function(t,u,v,self,w){return this.getManager(t).addListener(t,u,v,self,w);}
,removeListener:function(x,y,z,self,A){return this.getManager(x).removeListener(x,y,z,self,A);}
,removeListenerById:function(B,C){return this.getManager(B).removeListenerById(B,C);}
,removeAllListeners:function(D){return this.getManager(D).removeAllListeners(D);}
,deleteAllListeners:function(E){var F=E.$$hash;if(F){this.getManager(E).deleteAllListeners(F);}
;}
,hasListener:function(G,H,I){return this.getManager(G).hasListener(G,H,I);}
,serializeListeners:function(J){return this.getManager(J).serializeListeners(J);}
,createEvent:function(K,L,M){if(qx.core.Environment.get(d)){if(arguments.length>1&&L===undefined){throw new Error(e+K+c);}
;}
;if(L==null){L=qx.event.type.Event;}
;var N=qx.event.Pool.getInstance().getObject(L);M?N.init.apply(N,M):N.init();if(K){N.setType(K);}
;return N;}
,dispatchEvent:function(O,event){return this.getManager(O).dispatchEvent(O,event);}
,fireEvent:function(P,Q,R,S){if(qx.core.Environment.get(d)){if(arguments.length>2&&R===undefined&&S!==undefined){throw new Error(e+Q+c);}
;var T=j+Q+k+(P?P.classname:h)+m;qx.core.Assert.assertNotUndefined(P,T+f);qx.core.Assert.assertNotNull(P,T+f);}
;var U=this.createEvent(Q,R||null,S);return this.getManager(P).dispatchEvent(P,U);}
,fireNonBubblingEvent:function(V,W,X,Y){if(qx.core.Environment.get(d)){if(arguments.length>2&&X===undefined&&Y!==undefined){throw new Error(e+W+c);}
;}
;var ba=this.getManager(V);if(!ba.hasListener(V,W,false)){return true;}
;var bb=this.createEvent(W,X||null,Y);return ba.dispatchEvent(V,bb);}
,PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__ci:[],addHandler:function(bc){if(qx.core.Environment.get(d)){qx.core.Assert.assertInterface(bc,qx.event.IEventHandler,l);}
;this.__ci.push(bc);this.__ci.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getHandlers:function(){return this.__ci;}
,__cj:[],addDispatcher:function(bd,be){if(qx.core.Environment.get(d)){qx.core.Assert.assertInterface(bd,qx.event.IEventDispatcher,n);}
;this.__cj.push(bd);this.__cj.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getDispatchers:function(){return this.__cj;}
}});}
)();
(function(){var a="qx.core.MEvents";qx.Mixin.define(a,{members:{__cL:qx.event.Registration,addListener:function(b,c,self,d){if(!this.$$disposed){return this.__cL.addListener(this,b,c,self,d);}
;return null;}
,addListenerOnce:function(f,g,self,h){var i=function(e){this.removeListener(f,i,this,h);g.call(self||this,e);}
;g.$$wrapped_callback=i;return this.addListener(f,i,this,h);}
,removeListener:function(j,k,self,l){if(!this.$$disposed){if(k.$$wrapped_callback){var m=k.$$wrapped_callback;delete k.$$wrapped_callback;k=m;}
;return this.__cL.removeListener(this,j,k,self,l);}
;return false;}
,removeListenerById:function(n){if(!this.$$disposed){return this.__cL.removeListenerById(this,n);}
;return false;}
,hasListener:function(o,p){return this.__cL.hasListener(this,o,p);}
,dispatchEvent:function(q){if(!this.$$disposed){return this.__cL.dispatchEvent(this,q);}
;return true;}
,fireEvent:function(r,s,t){if(!this.$$disposed){return this.__cL.fireEvent(this,r,s,t);}
;return true;}
,fireNonBubblingEvent:function(u,v,w){if(!this.$$disposed){return this.__cL.fireNonBubblingEvent(this,u,v,w);}
;return true;}
,fireDataEvent:function(x,y,z,A){if(!this.$$disposed){if(z===undefined){z=null;}
;return this.__cL.fireNonBubblingEvent(this,x,qx.event.type.Data,[y,z,!!A]);}
;return true;}
}});}
)();
(function(){var a="qx.event.IEventDispatcher";qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);this.assertString(c);}
,dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);this.assertString(e);}
}});}
)();
(function(){var e="qx.core.MProperty",d="get",c="reset",b="No such property: ",a="set";qx.Mixin.define(e,{members:{set:function(f,g){var i=qx.core.Property.$$method.set;if(qx.Bootstrap.isString(f)){if(!this[i[f]]){if(this[a+qx.Bootstrap.firstUp(f)]!=undefined){this[a+qx.Bootstrap.firstUp(f)](g);return this;}
;throw new Error(b+f);}
;return this[i[f]](g);}
else {for(var h in f){if(!this[i[h]]){if(this[a+qx.Bootstrap.firstUp(h)]!=undefined){this[a+qx.Bootstrap.firstUp(h)](f[h]);continue;}
;throw new Error(b+h);}
;this[i[h]](f[h]);}
;return this;}
;}
,get:function(j){var k=qx.core.Property.$$method.get;if(!this[k[j]]){if(this[d+qx.Bootstrap.firstUp(j)]!=undefined){return this[d+qx.Bootstrap.firstUp(j)]();}
;throw new Error(b+j);}
;return this[k[j]]();}
,reset:function(l){var m=qx.core.Property.$$method.reset;if(!this[m[l]]){if(this[c+qx.Bootstrap.firstUp(l)]!=undefined){this[c+qx.Bootstrap.firstUp(l)]();return;}
;throw new Error(b+l);}
;this[m[l]]();}
}});}
)();
(function(){var a="qx.core.MAssert";qx.Mixin.define(a,{members:{assert:function(b,c){qx.core.Assert.assert(b,c);}
,fail:function(d,e){qx.core.Assert.fail(d,e);}
,assertTrue:function(f,g){qx.core.Assert.assertTrue(f,g);}
,assertFalse:function(h,i){qx.core.Assert.assertFalse(h,i);}
,assertEquals:function(j,k,l){qx.core.Assert.assertEquals(j,k,l);}
,assertNotEquals:function(m,n,o){qx.core.Assert.assertNotEquals(m,n,o);}
,assertIdentical:function(p,q,r){qx.core.Assert.assertIdentical(p,q,r);}
,assertNotIdentical:function(s,t,u){qx.core.Assert.assertNotIdentical(s,t,u);}
,assertNotUndefined:function(v,w){qx.core.Assert.assertNotUndefined(v,w);}
,assertUndefined:function(x,y){qx.core.Assert.assertUndefined(x,y);}
,assertNotNull:function(z,A){qx.core.Assert.assertNotNull(z,A);}
,assertNull:function(B,C){qx.core.Assert.assertNull(B,C);}
,assertJsonEquals:function(D,E,F){qx.core.Assert.assertJsonEquals(D,E,F);}
,assertMatch:function(G,H,I){qx.core.Assert.assertMatch(G,H,I);}
,assertArgumentsCount:function(J,K,L,M){qx.core.Assert.assertArgumentsCount(J,K,L,M);}
,assertEventFired:function(N,event,O,P,Q){qx.core.Assert.assertEventFired(N,event,O,P,Q);}
,assertEventNotFired:function(R,event,S,T){qx.core.Assert.assertEventNotFired(R,event,S,T);}
,assertException:function(U,V,W,X){qx.core.Assert.assertException(U,V,W,X);}
,assertInArray:function(Y,ba,bb){qx.core.Assert.assertInArray(Y,ba,bb);}
,assertArrayEquals:function(bc,bd,be){qx.core.Assert.assertArrayEquals(bc,bd,be);}
,assertKeyInMap:function(bf,bg,bh){qx.core.Assert.assertKeyInMap(bf,bg,bh);}
,assertFunction:function(bi,bj){qx.core.Assert.assertFunction(bi,bj);}
,assertString:function(bk,bl){qx.core.Assert.assertString(bk,bl);}
,assertBoolean:function(bm,bn){qx.core.Assert.assertBoolean(bm,bn);}
,assertNumber:function(bo,bp){qx.core.Assert.assertNumber(bo,bp);}
,assertPositiveNumber:function(bq,br){qx.core.Assert.assertPositiveNumber(bq,br);}
,assertInteger:function(bs,bt){qx.core.Assert.assertInteger(bs,bt);}
,assertPositiveInteger:function(bu,bv){qx.core.Assert.assertPositiveInteger(bu,bv);}
,assertInRange:function(bw,bx,by,bz){qx.core.Assert.assertInRange(bw,bx,by,bz);}
,assertObject:function(bA,bB){qx.core.Assert.assertObject(bA,bB);}
,assertArray:function(bC,bD){qx.core.Assert.assertArray(bC,bD);}
,assertMap:function(bE,bF){qx.core.Assert.assertMap(bE,bF);}
,assertRegExp:function(bG,bH){qx.core.Assert.assertRegExp(bG,bH);}
,assertType:function(bI,bJ,bK){qx.core.Assert.assertType(bI,bJ,bK);}
,assertInstance:function(bL,bM,bN){qx.core.Assert.assertInstance(bL,bM,bN);}
,assertInterface:function(bO,bP,bQ){qx.core.Assert.assertInterface(bO,bP,bQ);}
,assertCssColor:function(bR,bS,bT){qx.core.Assert.assertCssColor(bR,bS,bT);}
,assertElement:function(bU,bV){qx.core.Assert.assertElement(bU,bV);}
,assertQxObject:function(bW,bX){qx.core.Assert.assertQxObject(bW,bX);}
,assertQxWidget:function(bY,ca){qx.core.Assert.assertQxWidget(bY,ca);}
}});}
)();
(function(){var t="module.events",s="Cloning only possible with properties.",r="qx.core.Object",q="$$user_",p="Disposing ",o="Cannot call super class. Method is not derived: ",n="object",m="Object",k="]: ",j="module.property",c="]",h="rv:1.8.1",f="' in ",b="Missing destruct definition for '",a="MSIE 6.0",e="qx.debug",d="qx.debug.dispose.level",g="[";qx.Class.define(r,{extend:Object,include:qx.core.Environment.filter({"module.databinding":qx.data.MBinding,"module.logger":qx.core.MLogging,"module.events":qx.core.MEvents,"module.property":qx.core.MProperty,"qx.debug":qx.core.MAssert}),construct:function(){qx.core.ObjectRegistry.register(this);}
,statics:{$$type:m},members:{__L:qx.core.Environment.get("module.property")?qx.core.Property:null,toHashCode:function(){return this.$$hash;}
,toString:function(){return this.classname+g+this.$$hash+c;}
,base:function(u,v){if(qx.core.Environment.get(e)){if(!qx.Bootstrap.isFunction(u.callee.base)){throw new Error(o+u.callee.displayName);}
;}
;if(arguments.length===1){return u.callee.base.call(this);}
else {return u.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}
;}
,self:function(w){return w.callee.self;}
,clone:function(){if(!qx.core.Environment.get(j)){throw new Error(s);}
;var y=this.constructor;var x=new y;var A=qx.Class.getProperties(y);var z=this.__L.$$store.user;var B=this.__L.$$method.set;var name;for(var i=0,l=A.length;i<l;i++){name=A[i];if(this.hasOwnProperty(z[name])){x[B[name]](this[z[name]]);}
;}
;return x;}
,__cM:null,setUserData:function(C,D){if(!this.__cM){this.__cM={};}
;this.__cM[C]=D;}
,getUserData:function(E){if(!this.__cM){return null;}
;var F=this.__cM[E];return F===undefined?null:F;}
,isDisposed:function(){return this.$$disposed||false;}
,dispose:function(){if(this.$$disposed){return;}
;this.$$disposed=true;this.$$instance=null;this.$$allowconstruct=null;if(qx.core.Environment.get(e)){if(qx.core.Environment.get(d)>2){qx.Bootstrap.debug(this,p+this.classname+g+this.toHashCode()+c);}
;}
;var I=this.constructor;var G;while(I.superclass){if(I.$$destructor){I.$$destructor.call(this);}
;if(I.$$includes){G=I.$$flatIncludes;for(var i=0,l=G.length;i<l;i++){if(G[i].$$destructor){G[i].$$destructor.call(this);}
;}
;}
;I=I.superclass;}
;if(this.__cN){this.__cN();}
;if(qx.core.Environment.get(e)){if(qx.core.Environment.get(d)>0){var J,H;for(J in this){H=this[J];if(H!==null&&typeof H===n&&!(qx.Bootstrap.isString(H))){if(this.constructor.prototype[J]!=null){continue;}
;var L=navigator.userAgent.indexOf(h)!=-1;var K=navigator.userAgent.indexOf(a)!=-1;if(L||K){if(H instanceof qx.core.Object||qx.core.Environment.get(d)>1){qx.Bootstrap.warn(this,b+J+f+this.classname+g+this.toHashCode()+k+H);delete this[J];}
;}
else {if(qx.core.Environment.get(d)>1){qx.Bootstrap.warn(this,b+J+f+this.classname+g+this.toHashCode()+k+H);delete this[J];}
;}
;}
;}
;}
;}
;}
,__cN:null,__cO:function(){var M=qx.Class.getProperties(this.constructor);for(var i=0,l=M.length;i<l;i++){delete this[q+M[i]];}
;}
,_disposeObjects:function(N){qx.util.DisposeUtil.disposeObjects(this,arguments);}
,_disposeSingletonObjects:function(O){qx.util.DisposeUtil.disposeObjects(this,arguments,true);}
,_disposeArray:function(P){qx.util.DisposeUtil.disposeArray(this,P);}
,_disposeMap:function(Q){qx.util.DisposeUtil.disposeMap(this,Q);}
},environment:{"qx.debug.dispose.level":0},defer:function(R,S){var U=navigator.userAgent.indexOf(a)!=-1;var T=navigator.userAgent.indexOf(h)!=-1;if(U||T){S.__cN=S.__cO;}
;}
,destruct:function(){if(qx.core.Environment.get(t)){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);}
else {qx.event.Registration.deleteAllListeners(this);}
;}
;qx.core.ObjectRegistry.unregister(this);this.__cM=null;if(qx.core.Environment.get(j)){var X=this.constructor;var bc;var bd=this.__L.$$store;var ba=bd.user;var bb=bd.theme;var V=bd.inherit;var Y=bd.useinit;var W=bd.init;while(X){bc=X.$$properties;if(bc){for(var name in bc){if(bc[name].dereference){this[ba[name]]=this[bb[name]]=this[V[name]]=this[Y[name]]=this[W[name]]=undefined;}
;}
;}
;X=X.superclass;}
;}
;}
});}
)();
(function(){var q="Container must be a instance of qx.ui.container.Composite or ",p=" is a singleton! Please use disposeSingleton instead.",o="undefined",n="qx.debug",m="qx.ui.container.SlideBar or qx.ui.container.Stack!",k="qx.util.DisposeUtil",j="!",h="The map field: ",g="First argument must be a container widget!",f="qx.ui.container.Scroll or qx.ui.container.Resizer or ",c="The array field: ",e="The object stored in key ",d="Has no disposable object under key: ",b=" of object: ",a=" has non disposable entries: ";qx.Class.define(k,{statics:{disposeObjects:function(r,s,t){var name;for(var i=0,l=s.length;i<l;i++){name=s[i];if(r[name]==null||!r.hasOwnProperty(name)){continue;}
;if(!qx.core.ObjectRegistry.inShutDown){if(r[name].dispose){if(!t&&r[name].constructor.$$instance){throw new Error(e+name+p);}
else {r[name].dispose();}
;}
else {throw new Error(d+name+j);}
;}
;r[name]=null;}
;}
,disposeArray:function(u,v){var x=u[v];if(!x){return;}
;if(qx.core.ObjectRegistry.inShutDown){u[v]=null;return;}
;try{var w;for(var i=x.length-1;i>=0;i--){w=x[i];if(w){w.dispose();}
;}
;}
catch(y){throw new Error(c+v+b+u+a+y);}
;x.length=0;u[v]=null;}
,disposeMap:function(z,A){var C=z[A];if(!C){return;}
;if(qx.core.ObjectRegistry.inShutDown){z[A]=null;return;}
;try{var B;for(var D in C){B=C[D];if(C.hasOwnProperty(D)&&B){B.dispose();}
;}
;}
catch(E){throw new Error(h+A+b+z+a+E);}
;z[A]=null;}
,disposeTriggeredBy:function(F,G){var H=G.dispose;G.dispose=function(){H.call(G);F.dispose();}
;}
,destroyContainer:function(I){if(qx.core.Environment.get(n)){qx.core.Assert.assertQxWidget(I,g);qx.core.Assert.assertTrue(this.__cP(I),q+f+m);}
;var J=[];this._collectContainerChildren(I,J);var K=J.length;for(var i=K-1;i>=0;i--){J[i].destroy();}
;I.destroy();}
,_collectContainerChildren:function(L,M){var O=L.getChildren();for(var i=0;i<O.length;i++){var N=O[i];M.push(N);if(this.__cP(N)){this._collectContainerChildren(N,M);}
;}
;}
,__cP:function(P){var Q=[qx.ui.container.Composite,qx.ui.container.Scroll,qx.ui.container.SlideBar,qx.ui.container.Stack];for(var i=0,l=Q.length;i<l;i++){if(typeof Q[i]!==o&&qx.Class.isSubClassOf(P.constructor,Q[i])){return true;}
;}
;return false;}
}});}
)();
(function(){var f="Cannot stop propagation on a non bubbling event: ",e="Invalid argument value 'cancelable'.",d="Cannot prevent default action on a non cancelable event: ",c="Invalid argument value 'canBubble'.",b="qx.event.type.Event",a="qx.debug";qx.Class.define(b,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(g,h){if(qx.core.Environment.get(a)){if(g!==undefined){qx.core.Assert.assertBoolean(g,c);}
;if(h!==undefined){qx.core.Assert.assertBoolean(h,e);}
;}
;this._type=null;this._target=null;this._currentTarget=null;this._relatedTarget=null;this._originalTarget=null;this._stopPropagation=false;this._preventDefault=false;this._bubbles=!!g;this._cancelable=!!h;this._timeStamp=(new Date()).getTime();this._eventPhase=null;return this;}
,clone:function(i){if(i){var j=i;}
else {var j=qx.event.Pool.getInstance().getObject(this.constructor);}
;j._type=this._type;j._target=this._target;j._currentTarget=this._currentTarget;j._relatedTarget=this._relatedTarget;j._originalTarget=this._originalTarget;j._stopPropagation=this._stopPropagation;j._bubbles=this._bubbles;j._preventDefault=this._preventDefault;j._cancelable=this._cancelable;return j;}
,stop:function(){if(this._bubbles){this.stopPropagation();}
;if(this._cancelable){this.preventDefault();}
;}
,stopPropagation:function(){if(qx.core.Environment.get(a)){this.assertTrue(this._bubbles,f+this.getType());}
;this._stopPropagation=true;}
,getPropagationStopped:function(){return !!this._stopPropagation;}
,preventDefault:function(){if(qx.core.Environment.get(a)){this.assertTrue(this._cancelable,d+this.getType());}
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
(function(){var d="qx.util.ObjectPool",c="Class needs to be defined!",b="Object is already pooled: ",a="Integer";qx.Class.define(d,{extend:qx.core.Object,construct:function(e){qx.core.Object.call(this);this.__cQ={};if(e!=null){this.setSize(e);}
;}
,properties:{size:{check:a,init:Infinity}},members:{__cQ:null,getObject:function(f){if(this.$$disposed){return new f;}
;if(!f){throw new Error(c);}
;var g=null;var h=this.__cQ[f.classname];if(h){g=h.pop();}
;if(g){g.$$pooled=false;}
else {g=new f;}
;return g;}
,poolObject:function(j){if(!this.__cQ){return;}
;var k=j.classname;var m=this.__cQ[k];if(j.$$pooled){throw new Error(b+j);}
;if(!m){this.__cQ[k]=m=[];}
;if(m.length>this.getSize()){if(j.destroy){j.destroy();}
else {j.dispose();}
;return;}
;j.$$pooled=true;m.push(j);}
},destruct:function(){var p=this.__cQ;var n,o,i,l;for(n in p){o=p[n];for(i=0,l=o.length;i<l;i++){o[i].dispose();}
;}
;delete this.__cQ;}
});}
)();
(function(){var b="singleton",a="qx.event.Pool";qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);}
});}
)();
(function(){var n="' declared in the class '",m="'",k="' but found '",j="The context object '",h=" is not an available class': ",g="Expected event type to be instanceof '",f="' for the event '",e="' of '",d="The event type '",c="'is already disposed.",a="qx.event.dispatch.Direct",b="qx.debug";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(o){this._manager=o;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(p,event,q){return !event.getBubbles();}
,dispatchEvent:function(r,event,s){if(qx.core.Environment.get(b)){if(r instanceof qx.core.Object){var v=qx.Class.getEventType(r.constructor,s);var t=qx.Class.getByName(v);if(!t){this.error(d+s+n+r.constructor+h+v);}
else if(!(event instanceof t)){this.error(g+v+k+event.classname+m);}
;}
;}
;event.setEventPhase(qx.event.type.Event.AT_TARGET);var w=this._manager.getListeners(r,s,false);if(w){for(var i=0,l=w.length;i<l;i++){var u=w[i].context||r;if(qx.core.Environment.get(b)){if(u&&u.isDisposed&&u.isDisposed()){this.warn(j+u+f+s+e+r+c);}
;}
;w[i].handler.call(u,event);}
;}
;}
},defer:function(x){qx.event.Registration.addDispatcher(x);}
});}
)();
(function(){var a="qx.event.handler.Object";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);}
,registerEvent:function(d,e,f){}
,unregisterEvent:function(g,h,i){}
},defer:function(j){qx.event.Registration.addHandler(j);}
});}
)();
(function(){var a="qx.event.type.Data";qx.Class.define(a,{extend:qx.event.type.Event,members:{__cR:null,__cS:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);this.__cR=b;this.__cS=c;return this;}
,clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);f.__cR=this.__cR;f.__cS=this.__cS;return f;}
,getData:function(){return this.__cR;}
,getOldData:function(){return this.__cS;}
},destruct:function(){this.__cR=this.__cS=null;}
});}
)();
(function(){var k="function",j="Received successful response more than ",i="=?(\\w+)?}",h="' is invalid",g=" ms. Throttling.",f="loadEnd",d="qx.io.rest.Resource",c=" times subsequently, each within ",b="fail",a="Parameter '",E="No route for action ",D="URL must be string for route '",C="Method with name of action (",B="error",A="interval",z="get",y="{",x=") already exists",w="",v="Missing parameter '",r="Method must be string for route '",s="Content-Type",p="Check must be object with params as keys",q="success",n="Error",o="'",l="Success",m="qx.event.type.Rest",t="qx.debug",u="undefined";qx.Class.define(d,{extend:qx.core.Object,construct:function(F){qx.core.Object.call(this);this.__Mk={};this.__Kd={};this.__Ml={};this.__Mm={};try{if(typeof F!==u){if(qx.core.Environment.get(t)){qx.core.Assert.assertMap(F);}
;this.__Ms(F);}
;}
catch(e){this.dispose();throw e;}
;}
,events:{"success":m,"actionSuccess":m,"error":m,"actionError":m},statics:{POLL_THROTTLE_LIMIT:100,POLL_THROTTLE_COUNT:30,REQUIRED:true,placeholdersFromUrl:function(G){var I=/\{(\w+)(=\w+)?\}/g,J,H=[];while((J=I.exec(G))){H.push(J[1]);}
;return H;}
},members:{__Mk:null,__Kd:null,__Mn:null,__Ml:null,__Mm:null,__Mo:null,configureRequest:function(K){this.__Mo=K;}
,_getRequest:function(){return new qx.io.request.Xhr();}
,__Mp:function(L){var M=this._getRequest();if(!qx.lang.Type.isArray(this.__Mk[L])){this.__Mk[L]=[];}
;this.__Mk[L].push(M);return M;}
,map:function(N,O,P,Q){this.__Kd[N]=[O,P,Q];this.__Mk[N]=[];if(N==z){this[N]=undefined;}
;if(typeof this[N]!==u&&this[N].action!==true){if(this[N]!==qx.lang.Function.empty){throw new Error(C+N+x);}
;}
;this.__Mt(N+l);this.__Mt(N+n);this[N]=qx.lang.Function.bind(function(){Array.prototype.unshift.call(arguments,N);return this.invoke.apply(this,arguments);}
,this);this[N].action=true;}
,invoke:function(R,S,T){var V=this.__Mp(R),S=S==null?{}:S,Y=this._getRequestConfig(R,S);this.__Kd[R].params=S;this.__Mq(S,Y.check);this.__Jt(V,Y,T);if(this.__Mo){this.__Mo.call(this,V,R,S,T);}
;this.__Mr(V,Y,T);V.addListenerOnce(q,function X(){var ba=[V.getResponse(),null,false,V,R,V.getPhase()];this.fireEvent(R+l,qx.event.type.Rest,ba);this.fireEvent(q,qx.event.type.Rest,ba);}
,this);V.addListenerOnce(b,function W(){var bb=[V.getResponse(),null,false,V,R,V.getPhase()];this.fireEvent(R+n,qx.event.type.Rest,bb);this.fireEvent(B,qx.event.type.Rest,bb);}
,this);V.addListenerOnce(f,function U(){V.dispose();}
,this);V.send();return parseInt(V.toHashCode(),10);}
,setBaseUrl:function(bc){this.__Mn=bc;}
,__Mq:function(bd,be){if(typeof be!==u){if(qx.core.Environment.get(t)){qx.core.Assert.assertObject(be,p);}
;qx.lang.Object.getKeys(be).forEach(function(bf){if(qx.core.Environment.get(t)){if(be[bf]!==true){if(qx.core.Environment.get(t)){qx.core.Assert.assertRegExp(be[bf]);}
;}
;}
;if(be[bf]===qx.io.rest.Resource.REQUIRED&&typeof bd[bf]===u){throw new Error(v+bf+o);}
;if(!(be[bf]&&typeof be[bf].test==k)){return;}
;if(!be[bf].test(bd[bf])){throw new Error(a+bf+h);}
;}
);}
;}
,__Jt:function(bg,bh,bi){bg.set({method:bh.method,url:bh.url});if(bi){bg.setRequestData(bi);}
;}
,__Mr:function(bj,bk,bl){if(bl){var bm=bj.getRequestHeader(s);if(qx.util.Request.methodAllowsRequestBody(bj.getMethod())){if((/application\/.*\+?json/).test(bm)){bl=qx.lang.Json.stringify(bl);bj.setRequestData(bl);}
;}
;}
;}
,abort:function(bn){if(qx.lang.Type.isNumber(bn)){var br=bn;var bp=qx.core.ObjectRegistry.getPostId();var bq=qx.core.ObjectRegistry.fromHashCode(br+bp);if(bq){bq.abort();}
;}
else {var bo=bn;var bs=this.__Mk[bo];if(this.__Mk[bo]){bs.forEach(function(bt){bt.abort();}
);}
;}
;}
,refresh:function(bu){this.invoke(bu,this.__Kd[bu].params);}
,poll:function(bv,bw,bx){if(this.__Ml[bv]){this.__Ml[bv].dispose();}
;if(typeof bx==u){bx=this.__Kd[bv].params;}
;this.invoke(bv,bx);var by=this.__Ml[bv]=new qx.event.Timer(bw);by.addListener(A,function bz(){var bA=this.__Mk[bv][0];if(bA.isDone()||bA.isDisposed()){this.refresh(bv);}
;}
,this);by.start();return by;}
,longPoll:function(bB){var bD=this,bF=true,bG,bH=0;function bC(){var bJ=bG&&((new Date())-bG)<bD._getThrottleLimit();if(bJ){bH+=1;if(bH>bD._getThrottleCount()){if(qx.core.Environment.get(t)){bD.debug(j+bD._getThrottleCount()+c+bD._getThrottleLimit()+g);}
;return true;}
;}
;if(!bJ){bH=0;}
;return false;}
;var bE=this.__Mm[bB]=this.addListener(bB+l,function bI(){if(bD.isDisposed()){return;}
;if(!bC()){bG=new Date();bD.refresh(bB);}
;}
,bF);this.invoke(bB);return bE;}
,_getRequestConfig:function(bK,bL){var bN=this.__Kd[bK];var bL=qx.lang.Object.clone(bL);if(!qx.lang.Type.isArray(bN)){throw new Error(E+bK);}
;var bQ=bN[0],bM=this.__Mn!==null?this.__Mn+bN[1]:bN[1],bO=bN[2],bP=qx.io.rest.Resource.placeholdersFromUrl(bM);bL=bL||{};bP.forEach(function(bR){var bS=new RegExp(y+bR+i),bT=bM.match(bS)[1];if(typeof bL[bR]===u){if(bT){bL[bR]=bT;}
else {bL[bR]=w;}
;}
;bM=bM.replace(bS,bL[bR]);}
);return {method:bQ,url:bM,check:bO};}
,_getThrottleLimit:function(){return qx.io.rest.Resource.POLL_THROTTLE_LIMIT;}
,_getThrottleCount:function(){return qx.io.rest.Resource.POLL_THROTTLE_COUNT;}
,__Ms:function(bU){qx.lang.Object.getKeys(bU).forEach(function(bV){var bX=bU[bV],bY=bX.method,bW=bX.url,ca=bX.check;if(qx.core.Environment.get(t)){qx.core.Assert.assertString(bY,r+bV+o);qx.core.Assert.assertString(bW,D+bV+o);}
;this.map(bV,bY,bW,ca);}
,this);}
,__Mt:function(cb){if(!this.constructor.$$events){this.constructor.$$events={};}
;if(!this.constructor.$$events[cb]){this.constructor.$$events[cb]=m;}
;}
},destruct:function(){var cc;for(cc in this.__Mk){if(this.__Mk[cc]){this.__Mk[cc].forEach(function(cf){cf.dispose();}
);}
;}
;if(this.__Ml){for(cc in this.__Ml){var ce=this.__Ml[cc];ce.stop();ce.dispose();}
;}
;if(this.__Mm){for(cc in this.__Mm){var cd=this.__Mm[cc];this.removeListenerById(cd);}
;}
;this.__Mk=this.__Kd=this.__Ml=null;}
});}
)();
(function(){var l="Silverlight",k="plugin.silverlight.version",h="function",g="QuickTimeCheckObject.QuickTimeCheck.1",f="Adobe Acrobat",e="plugin.windowsmedia",d="QuickTime",c="plugin.silverlight",b="qx.bom.client.Plugin",a="plugin.divx",H="Chrome PDF Viewer",G="Windows Media",F="plugin.gears",E="plugin.quicktime",D="plugin.windowsmedia.version",C="DivX Web Player",B="AgControl.AgControl",A="plugin.pdf",z="plugin.pdf.version",y="plugin.divx.version",s="WMPlayer.OCX.7",t="AcroPDF.PDF",q="plugin.activex",r="plugin.quicktime.version",o="npdivx.DivXBrowserPlugin.1",p="pdf",m="wmv",n="divx",u="quicktime",v="mshtml",x="silverlight",w="";qx.Bootstrap.define(b,{statics:{getGears:function(){return !!(window.google&&window.google.gears);}
,getActiveX:function(){return (typeof window.ActiveXObject===h);}
,__gw:{quicktime:{plugin:[d],control:g},wmv:{plugin:[G],control:s},divx:{plugin:[C],control:o},silverlight:{plugin:[l],control:B},pdf:{plugin:[H,f],control:t}},getQuicktimeVersion:function(){var I=qx.bom.client.Plugin.__gw[u];return qx.bom.client.Plugin.__gx(I.control,I.plugin);}
,getWindowsMediaVersion:function(){var J=qx.bom.client.Plugin.__gw[m];return qx.bom.client.Plugin.__gx(J.control,J.plugin);}
,getDivXVersion:function(){var K=qx.bom.client.Plugin.__gw[n];return qx.bom.client.Plugin.__gx(K.control,K.plugin);}
,getSilverlightVersion:function(){var L=qx.bom.client.Plugin.__gw[x];return qx.bom.client.Plugin.__gx(L.control,L.plugin);}
,getPdfVersion:function(){var M=qx.bom.client.Plugin.__gw[p];return qx.bom.client.Plugin.__gx(M.control,M.plugin);}
,getQuicktime:function(){var N=qx.bom.client.Plugin.__gw[u];return qx.bom.client.Plugin.__gy(N.control,N.plugin);}
,getWindowsMedia:function(){var O=qx.bom.client.Plugin.__gw[m];return qx.bom.client.Plugin.__gy(O.control,O.plugin);}
,getDivX:function(){var P=qx.bom.client.Plugin.__gw[n];return qx.bom.client.Plugin.__gy(P.control,P.plugin);}
,getSilverlight:function(){var Q=qx.bom.client.Plugin.__gw[x];return qx.bom.client.Plugin.__gy(Q.control,Q.plugin);}
,getPdf:function(){var R=qx.bom.client.Plugin.__gw[p];return qx.bom.client.Plugin.__gy(R.control,R.plugin);}
,__gx:function(S,T){var U=qx.bom.client.Plugin.__gy(S,T);if(!U){return w;}
;if(qx.bom.client.Engine.getName()==v){var V=new ActiveXObject(S);try{var Y=V.versionInfo;if(Y!=undefined){return Y;}
;Y=V.version;if(Y!=undefined){return Y;}
;Y=V.settings.version;if(Y!=undefined){return Y;}
;}
catch(bb){return w;}
;return w;}
else {var ba=navigator.plugins;var X=/([0-9]\.[0-9])/g;for(var i=0;i<ba.length;i++){var W=ba[i];for(var j=0;j<T.length;j++){if(W.name.indexOf(T[j])!==-1){if(X.test(W.name)||X.test(W.description)){return RegExp.$1;}
;}
;}
;}
;return w;}
;}
,__gy:function(bc,bd){if(qx.bom.client.Engine.getName()==v){var be=window.ActiveXObject;if(!be){return false;}
;try{new ActiveXObject(bc);}
catch(bg){return false;}
;return true;}
else {var bf=navigator.plugins;if(!bf){return false;}
;var name;for(var i=0;i<bf.length;i++){name=bf[i].name;for(var j=0;j<bd.length;j++){if(name.indexOf(bd[j])!==-1){return true;}
;}
;}
;return false;}
;}
},defer:function(bh){qx.core.Environment.add(F,bh.getGears);qx.core.Environment.add(E,bh.getQuicktime);qx.core.Environment.add(r,bh.getQuicktimeVersion);qx.core.Environment.add(e,bh.getWindowsMedia);qx.core.Environment.add(D,bh.getWindowsMediaVersion);qx.core.Environment.add(a,bh.getDivX);qx.core.Environment.add(y,bh.getDivXVersion);qx.core.Environment.add(c,bh.getSilverlight);qx.core.Environment.add(k,bh.getSilverlightVersion);qx.core.Environment.add(A,bh.getPdf);qx.core.Environment.add(z,bh.getPdfVersion);qx.core.Environment.add(q,bh.getActiveX);}
});}
)();
(function(){var t='<\?xml version="1.0" encoding="utf-8"?>\n<',s="qx.xml.Document",r=" />",q="xml.domparser",p="SelectionLanguage",o="'",n="MSXML2.XMLHTTP.3.0",m="MSXML2.XMLHTTP.6.0",k="xml.implementation",j=" xmlns='",c="text/xml",h="XPath",f="MSXML2.DOMDocument.6.0",b="HTML",a="MSXML2.DOMDocument.3.0",e="",d="No XML implementation available!",g="plugin.activex";qx.Class.define(s,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(u){if(u.nodeType===9){return u.documentElement.nodeName!==b;}
else if(u.ownerDocument){return this.isXmlDocument(u.ownerDocument);}
else {return false;}
;}
,create:function(v,w){if(qx.core.Environment.get(g)){var x=new ActiveXObject(this.DOMDOC);if(this.DOMDOC==a){x.setProperty(p,h);}
;if(w){var y=t;y+=w;if(v){y+=j+v+o;}
;y+=r;x.loadXML(y);}
;return x;}
;if(qx.core.Environment.get(k)){return document.implementation.createDocument(v||e,w||e,null);}
;throw new Error(d);}
,fromString:function(z){if(qx.core.Environment.get(g)){var B=qx.xml.Document.create();B.loadXML(z);return B;}
;if(qx.core.Environment.get(q)){var A=new DOMParser();return A.parseFromString(z,c);}
;throw new Error(d);}
},defer:function(C){if(qx.core.Environment.get(g)){var D=[f,a];var E=[m,n];for(var i=0,l=D.length;i<l;i++){try{new ActiveXObject(D[i]);new ActiveXObject(E[i]);}
catch(F){continue;}
;C.DOMDOC=D[i];C.XMLHTTP=E[i];break;}
;}
;}
});}
)();
(function(){var s="xml.implementation",r="xml.attributens",q="xml.selectnodes",p="xml.getqualifieditem",o="SelectionLanguage",n="xml.getelementsbytagnamens",m="qx.bom.client.Xml",l="xml.domproperties",k="xml.selectsinglenode",j="1.0",d="xml.createnode",i="xml.domparser",g="getProperty",c="XML",b="string",f="xml.createelementns",e="<a></a>",h="function",a="undefined";qx.Bootstrap.define(m,{statics:{getImplementation:function(){return document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature(c,j);}
,getDomParser:function(){return typeof window.DOMParser!==a;}
,getSelectSingleNode:function(){return typeof qx.xml.Document.create().selectSingleNode!==a;}
,getSelectNodes:function(){return typeof qx.xml.Document.create().selectNodes!==a;}
,getElementsByTagNameNS:function(){return typeof qx.xml.Document.create().getElementsByTagNameNS!==a;}
,getDomProperties:function(){var t=qx.xml.Document.create();return (g in t&&typeof t.getProperty(o)===b);}
,getAttributeNS:function(){var u=qx.xml.Document.fromString(e).documentElement;return typeof u.getAttributeNS===h&&typeof u.setAttributeNS===h;}
,getCreateElementNS:function(){return typeof qx.xml.Document.create().createElementNS===h;}
,getCreateNode:function(){return typeof qx.xml.Document.create().createNode!==a;}
,getQualifiedItem:function(){var v=qx.xml.Document.fromString(e).documentElement;return typeof v.attributes.getQualifiedItem!==a;}
},defer:function(w){qx.core.Environment.add(s,w.getImplementation);qx.core.Environment.add(i,w.getDomParser);qx.core.Environment.add(k,w.getSelectSingleNode);qx.core.Environment.add(q,w.getSelectNodes);qx.core.Environment.add(n,w.getElementsByTagNameNS);qx.core.Environment.add(l,w.getDomProperties);qx.core.Environment.add(r,w.getAttributeNS);qx.core.Environment.add(f,w.getCreateElementNS);qx.core.Environment.add(d,w.getCreateNode);qx.core.Environment.add(p,w.getQualifiedItem);}
});}
)();
(function(){var j="loadEnd",i="qx.io.request.AbstractRequest",h="changePhase",g="Open low-level request with method: ",f="sent",e="Abort request",d="'",c="qx.io.request.authentication.IAuthentication",b="error",a="Send low-level request",M="loading",L=", url: ",K="String",J="",I="opened",H="Response is of type: '",G="POST",F="success",E="Request completed with HTTP status: ",D="Fire readyState: ",q="statusError",r="readyStateChange",o="abstract",p="unsent",m="changeResponse",n="Number",k="Content-Type",l="timeout",s="undefined",t=", async: ",w="qx.event.type.Data",v="qx.debug",y="load",x="abort",A="Abstract method call",z="GET",u="fail",C="qx.debug.io",B="qx.event.type.Event";qx.Class.define(i,{type:o,extend:qx.core.Object,construct:function(N){qx.core.Object.call(this);if(N!==undefined){this.setUrl(N);}
;this.__qw={};var O=this._transport=this._createTransport();this._setPhase(p);this.__ur=qx.lang.Function.bind(this._onReadyStateChange,this);this.__us=qx.lang.Function.bind(this._onLoad,this);this.__ut=qx.lang.Function.bind(this._onLoadEnd,this);this.__uu=qx.lang.Function.bind(this._onAbort,this);this.__tj=qx.lang.Function.bind(this._onTimeout,this);this.__uv=qx.lang.Function.bind(this._onError,this);O.onreadystatechange=this.__ur;O.onload=this.__us;O.onloadend=this.__ut;O.onabort=this.__uu;O.ontimeout=this.__tj;O.onerror=this.__uv;}
,events:{"readyStateChange":B,"success":B,"load":B,"loadEnd":B,"abort":B,"timeout":B,"error":B,"statusError":B,"fail":B,"changeResponse":w,"changePhase":w},properties:{url:{check:K},timeout:{check:n,nullable:true,init:0},requestData:{check:function(P){return qx.lang.Type.isString(P)||qx.Class.isSubClassOf(P.constructor,qx.core.Object)||qx.lang.Type.isObject(P);}
,nullable:true},authentication:{check:c,nullable:true}},members:{__ur:null,__us:null,__ut:null,__uu:null,__tj:null,__uv:null,__uw:null,__tl:null,__ux:null,__qw:null,__uy:null,_transport:null,_createTransport:function(){throw new Error(A);}
,_getConfiguredUrl:function(){}
,_getConfiguredRequestHeaders:function(){}
,_getParsedResponse:function(){throw new Error(A);}
,_getMethod:function(){return z;}
,_isAsync:function(){return true;}
,send:function(){var U=this._transport,Q,T,R,S;Q=this._getConfiguredUrl();if(/\#/.test(Q)){Q=Q.replace(/\#.*/,J);}
;U.timeout=this.getTimeout();T=this._getMethod();R=this._isAsync();if(qx.core.Environment.get(C)){this.debug(g+T+L+Q+t+R);}
;U.open(T,Q,R);this._setPhase(I);S=this._serializeData(this.getRequestData());this._setRequestHeaders();if(qx.core.Environment.get(C)){this.debug(a);}
;T==z?U.send():U.send(S);this._setPhase(f);}
,abort:function(){if(qx.core.Environment.get(C)){this.debug(e);}
;this.__tl=true;this.__ux=x;this._transport.abort();}
,_setRequestHeaders:function(){var X=this._transport,V=this._getAllRequestHeaders();for(var W in V){X.setRequestHeader(W,V[W]);}
;}
,_getAllRequestHeaders:function(){var Y=qx.lang.Object.merge({},this._getConfiguredRequestHeaders(),this.__uz(),this.__uy,this.__qw);return Y;}
,__uz:function(){var bb=this.getAuthentication(),ba={};if(bb){bb.getAuthHeaders().forEach(function(bc){ba[bc.key]=bc.value;}
);return ba;}
;}
,setRequestHeader:function(bd,be){this.__qw[bd]=be;}
,getRequestHeader:function(bf){return this.__qw[bf];}
,removeRequestHeader:function(bg){if(this.__qw[bg]){delete this.__qw[bg];}
;}
,getTransport:function(){return this._transport;}
,getReadyState:function(){return this._transport.readyState;}
,getPhase:function(){return this.__ux;}
,getStatus:function(){return this._transport.status;}
,getStatusText:function(){return this._transport.statusText;}
,getResponseText:function(){return this._transport.responseText;}
,getAllResponseHeaders:function(){return this._transport.getAllResponseHeaders();}
,getResponseHeader:function(bh){return this._transport.getResponseHeader(bh);}
,getResponseContentType:function(){return this.getResponseHeader(k);}
,isDone:function(){return this.getReadyState()===4;}
,getResponse:function(){return this.__uw;}
,_setResponse:function(bi){var bj=bi;if(this.__uw!==bi){this.__uw=bi;this.fireEvent(m,qx.event.type.Data,[this.__uw,bj]);}
;}
,_onReadyStateChange:function(){var bk=this.getReadyState();if(qx.core.Environment.get(C)){this.debug(D+bk);}
;this.fireEvent(r);if(this.__tl){return;}
;if(bk===3){this._setPhase(M);}
;if(this.isDone()){this.__uA();}
;}
,__uA:function(){var bl;if(qx.core.Environment.get(C)){this.debug(E+this.getStatus());}
;this._setPhase(y);if(qx.util.Request.isSuccessful(this.getStatus())){if(qx.core.Environment.get(C)){this.debug(H+this.getResponseContentType()+d);}
;bl=this._getParsedResponse();this._setResponse(bl);this._fireStatefulEvent(F);}
else {if(this.getStatus()!==0){this._fireStatefulEvent(q);this.fireEvent(u);}
;}
;}
,_onLoad:function(){this.fireEvent(y);}
,_onLoadEnd:function(){this.fireEvent(j);}
,_onAbort:function(){this._fireStatefulEvent(x);}
,_onTimeout:function(){this._fireStatefulEvent(l);this.fireEvent(u);}
,_onError:function(){this.fireEvent(b);this.fireEvent(u);}
,_fireStatefulEvent:function(bm){if(qx.core.Environment.get(v)){qx.core.Assert.assertString(bm);}
;this._setPhase(bm);this.fireEvent(bm);}
,_setPhase:function(bn){var bo=this.__ux;if(qx.core.Environment.get(v)){qx.core.Assert.assertString(bn);qx.core.Assert.assertMatch(bn,/^(unsent)|(opened)|(sent)|(loading)|(load)|(success)|(abort)|(timeout)|(statusError)$/);}
;this.__ux=bn;this.fireDataEvent(h,bn,bo);}
,_serializeData:function(bp){var bq=typeof this.getMethod!==s&&this.getMethod()==G;if(!bp){return;}
;if(qx.lang.Type.isString(bp)){return bp;}
;if(qx.Class.isSubClassOf(bp.constructor,qx.core.Object)){return qx.util.Serializer.toUriParameter(bp);}
;if(qx.lang.Type.isObject(bp)){return qx.lang.Object.toUriParameter(bp,bq);}
;}
},environment:{"qx.debug.io":false},destruct:function(){var bs=this._transport,br=function(){}
;if(this._transport){bs.onreadystatechange=bs.onload=bs.onloadend=bs.onabort=bs.ontimeout=bs.onerror=br;bs.dispose();}
;}
});}
)();
(function(){var r="&",q="function",p="Invalid argument 'array'",o="Invalid argument 'minLength'",n="Invalid argument 'source'",m=" at array index ",k="Could not convert complex objects like ",j="qx.lang.Object",h="undefined",g=" to map syntax",c="object",f="+",e="Invalid argument 'target'",b="=",a="Invalid argument 'map'",d="qx.debug";qx.Bootstrap.define(j,{statics:{empty:function(s){if(qx.core.Environment.get(d)){qx.core.Assert&&qx.core.Assert.assertMap(s,a);}
;for(var t in s){if(s.hasOwnProperty(t)){delete s[t];}
;}
;}
,isEmpty:function(u){if(qx.core.Environment.get(d)){qx.core.Assert&&qx.core.Assert.assertMap(u,a);}
;for(var v in u){return false;}
;return true;}
,hasMinLength:function(w,x){if(qx.core.Environment.get(d)){qx.core.Assert&&qx.core.Assert.assertMap(w,a);qx.core.Assert&&qx.core.Assert.assertInteger(x,o);}
;if(x<=0){return true;}
;var length=0;for(var y in w){if((++length)>=x){return true;}
;}
;return false;}
,getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(z){if(qx.core.Environment.get(d)){qx.core.Assert&&qx.core.Assert.assertMap(z,a);}
;var B=[];var A=this.getKeys(z);for(var i=0,l=A.length;i<l;i++){B.push(z[A[i]]);}
;return B;}
,mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(C,D){if(qx.core.Environment.get(d)){qx.core.Assert&&qx.core.Assert.assertMap(C,e);qx.core.Assert&&qx.core.Assert.assertMap(D,n);}
;return qx.lang.Object.mergeWith(C,D,false);}
,merge:function(E,F){if(qx.core.Environment.get(d)){qx.core.Assert&&qx.core.Assert.assertMap(E,e);}
;var G=arguments.length;for(var i=1;i<G;i++){qx.lang.Object.mergeWith(E,arguments[i]);}
;return E;}
,clone:function(H,I){if(qx.lang.Type.isObject(H)){var J={};for(var K in H){if(I){J[K]=qx.lang.Object.clone(H[K],I);}
else {J[K]=H[K];}
;}
;return J;}
else if(qx.lang.Type.isArray(H)){var J=[];for(var i=0;i<H.length;i++){if(I){J[i]=qx.lang.Object.clone(H[i]);}
else {J[i]=H[i];}
;}
;return J;}
;return H;}
,invert:function(L){if(qx.core.Environment.get(d)){qx.core.Assert&&qx.core.Assert.assertMap(L,a);}
;var M={};for(var N in L){M[L[N].toString()]=N;}
;return M;}
,getKeyFromValue:function(O,P){if(qx.core.Environment.get(d)){qx.core.Assert&&qx.core.Assert.assertMap(O,a);}
;for(var Q in O){if(O.hasOwnProperty(Q)&&O[Q]===P){return Q;}
;}
;return null;}
,contains:function(R,S){if(qx.core.Environment.get(d)){qx.core.Assert&&qx.core.Assert.assertMap(R,a);}
;return this.getKeyFromValue(R,S)!==null;}
,select:function(T,U){if(qx.core.Environment.get(d)){qx.core.Assert&&qx.core.Assert.assertMap(U,a);}
;return U[T];}
,fromArray:function(V){if(qx.core.Environment.get(d)){qx.core.Assert&&qx.core.Assert.assertArray(V,p);}
;var W={};for(var i=0,l=V.length;i<l;i++){if(qx.core.Environment.get(d)){switch(typeof V[i]){case c:case q:case h:throw new Error(k+V[i]+m+i+g);};}
;W[V[i].toString()]=true;}
;return W;}
,toUriParameter:function(X,Y){var bc,ba=[];for(bc in X){if(X.hasOwnProperty(bc)){var bb=X[bc];if(bb instanceof Array){for(var i=0;i<bb.length;i++){this.__dk(bc,bb[i],ba,Y);}
;}
else {this.__dk(bc,bb,ba,Y);}
;}
;}
;return ba.join(r);}
,__dk:function(bd,be,bf,bg){var bh=window.encodeURIComponent;if(bg){bf.push(bh(bd).replace(/%20/g,f)+b+bh(be).replace(/%20/g,f));}
else {bf.push(bh(bd)+b+bh(be));}
;}
}});}
)();
(function(){var b="//",a="qx.util.Request";qx.Bootstrap.define(a,{statics:{isCrossDomain:function(c){var e=qx.util.Uri.parseUri(c),location=window.location;if(!location){return false;}
;var d=location.protocol;if(!(c.indexOf(b)!==-1)){return false;}
;if(d.substr(0,d.length-1)==e.protocol&&location.host===e.host&&location.port===e.port){return false;}
;return true;}
,isSuccessful:function(status){return (status>=200&&status<300||status===304);}
,methodAllowsRequestBody:function(f){return !((/^(GET)|(HEAD)$/).test(f));}
}});}
)();
(function(){var k="file",j="strict",h="anchor",g="div",f="query",e="source",d="password",c="host",b="protocol",a="qx.debug",C="user",B="directory",A="loose",z="relative",y="queryKey",x="qx.util.Uri",w="",v="path",u="authority",t='">0</a>',r="&",s="port",p="params must be either string or object",q='<a href="',l="userInfo",n="?";qx.Bootstrap.define(x,{statics:{parseUri:function(D,E){var F={key:[e,b,u,l,C,d,c,s,z,v,B,k,f,h],q:{name:y,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var o=F,m=F.parser[E?j:A].exec(D),G={},i=14;while(i--){G[o.key[i]]=m[i]||w;}
;G[o.q.name]={};G[o.key[12]].replace(o.q.parser,function(H,I,J){if(I){G[o.q.name][I]=J;}
;}
);return G;}
,appendParamsToUrl:function(K,L){if(L===undefined){return K;}
;if(qx.core.Environment.get(a)){if(!(qx.lang.Type.isString(L)||qx.lang.Type.isObject(L))){throw new Error(p);}
;}
;if(qx.lang.Type.isObject(L)){L=qx.lang.Object.toUriParameter(L);}
;if(!L){return K;}
;return K+=(/\?/).test(K)?r+L:n+L;}
,getAbsolute:function(M){var N=document.createElement(g);N.innerHTML=q+M+t;return N.firstChild.href;}
}});}
)();
(function(){var u="&",t="null",s='\\t',r='\\"',q='\\n',p='\\b',o="=",n="qx.util.Serializer",m='\\r',l='\\\\',d='\\f',k="}",g="]",c='":',b="",f="get",e="{",h="[",a=",",j='"';qx.Class.define(n,{statics:{toUriParameter:function(v,w,x){var B=b;var C=qx.util.PropertyUtil.getAllProperties(v.constructor);for(var name in C){if(C[name].group!=undefined){continue;}
;var y=v[f+qx.lang.String.firstUp(name)]();if(qx.lang.Type.isArray(y)){var A=qx.data&&qx.data.IListData&&qx.Class.hasInterface(y&&y.constructor,qx.data.IListData);for(var i=0;i<y.length;i++){var z=A?y.getItem(i):y[i];B+=this.__dk(name,z,w);}
;}
else if(qx.lang.Type.isDate(y)&&x!=null){B+=this.__dk(name,x.format(y),w);}
else {B+=this.__dk(name,y,w);}
;}
;return B.substring(0,B.length-1);}
,__dk:function(name,D,E){if(D instanceof qx.core.Object&&E!=null){var F=encodeURIComponent(E(D));if(F===undefined){var F=encodeURIComponent(D);}
;}
else {var F=encodeURIComponent(D);}
;return encodeURIComponent(name)+o+F+u;}
,toNativeObject:function(G,H,I){var L;if(G==null){return null;}
;if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(G.constructor,qx.data.IListData)){L=[];for(var i=0;i<G.getLength();i++){L.push(qx.util.Serializer.toNativeObject(G.getItem(i),H,I));}
;return L;}
;if(qx.lang.Type.isArray(G)){L=[];for(var i=0;i<G.length;i++){L.push(qx.util.Serializer.toNativeObject(G[i],H,I));}
;return L;}
;if(G instanceof qx.core.Object){if(H!=null){var M=H(G);if(M!=undefined){return M;}
;}
;L={};var N=qx.util.PropertyUtil.getAllProperties(G.constructor);for(var name in N){if(N[name].group!=undefined){continue;}
;var K=G[f+qx.lang.String.firstUp(name)]();L[name]=qx.util.Serializer.toNativeObject(K,H,I);}
;return L;}
;if(qx.lang.Type.isDate(G)&&I!=null){return I.format(G);}
;if(qx.locale&&qx.locale.LocalizedString&&G instanceof qx.locale.LocalizedString){return G.toString();}
;if(qx.lang.Type.isObject(G)){L={};for(var J in G){L[J]=qx.util.Serializer.toNativeObject(G[J],H,I);}
;return L;}
;return G;}
,toJson:function(O,P,Q){var T=b;if(O==null){return t;}
;if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(O.constructor,qx.data.IListData)){T+=h;for(var i=0;i<O.getLength();i++){T+=qx.util.Serializer.toJson(O.getItem(i),P,Q)+a;}
;if(T!=h){T=T.substring(0,T.length-1);}
;return T+g;}
;if(qx.lang.Type.isArray(O)){T+=h;for(var i=0;i<O.length;i++){T+=qx.util.Serializer.toJson(O[i],P,Q)+a;}
;if(T!=h){T=T.substring(0,T.length-1);}
;return T+g;}
;if(O instanceof qx.core.Object){if(P!=null){var U=P(O);if(U!=undefined){return j+U+j;}
;}
;T+=e;var V=qx.util.PropertyUtil.getAllProperties(O.constructor);for(var name in V){if(V[name].group!=undefined){continue;}
;var S=O[f+qx.lang.String.firstUp(name)]();T+=j+name+c+qx.util.Serializer.toJson(S,P,Q)+a;}
;if(T!=e){T=T.substring(0,T.length-1);}
;return T+k;}
;if(O instanceof qx.locale.LocalizedString){O=O.toString();}
;if(qx.lang.Type.isDate(O)&&Q!=null){return j+Q.format(O)+j;}
;if(qx.lang.Type.isObject(O)){T+=e;for(var R in O){T+=j+R+c+qx.util.Serializer.toJson(O[R],P,Q)+a;}
;if(T!=e){T=T.substring(0,T.length-1);}
;return T+k;}
;if(qx.lang.Type.isString(O)){O=O.replace(/([\\])/g,l);O=O.replace(/(["])/g,r);O=O.replace(/([\r])/g,m);O=O.replace(/([\f])/g,d);O=O.replace(/([\n])/g,q);O=O.replace(/([\t])/g,s);O=O.replace(/([\b])/g,p);return j+O+j;}
;if(qx.lang.Type.isDate(O)||qx.lang.Type.isRegExp(O)){return j+O+j;}
;return O+b;}
}});}
)();
(function(){var d="qx.util.PropertyUtil",c="$$theme_",b="$$user_",a="$$init_";qx.Class.define(d,{statics:{getProperties:function(e){return e.$$properties;}
,getAllProperties:function(f){var i={};var j=f;while(j!=qx.core.Object){var h=this.getProperties(j);for(var g in h){i[g]=h[g];}
;j=j.superclass;}
;return i;}
,getUserValue:function(k,l){return k[b+l];}
,setUserValue:function(m,n,o){m[b+n]=o;}
,deleteUserValue:function(p,q){delete (p[b+q]);}
,getInitValue:function(r,s){return r[a+s];}
,setInitValue:function(t,u,v){t[a+u]=v;}
,deleteInitValue:function(w,x){delete (w[a+x]);}
,getThemeValue:function(y,z){return y[c+z];}
,setThemeValue:function(A,B,C){A[c+B]=C;}
,deleteThemeValue:function(D,E){delete (D[c+E]);}
,setThemed:function(F,G,H){var I=qx.core.Property.$$method.setThemed;F[I[G]](H);}
,resetThemed:function(J,K){var L=qx.core.Property.$$method.resetThemed;J[L[K]]();}
}});}
)();
(function(){var t="'",s="null",r="XMLHttpRequest",q="Boolean",p="X-Requested-With",o="qx.debug",n="Accepting: '",m="application/x-www-form-urlencoded",l="Cache-Control",k="Content-Type",d="json",j="qx.debug.io",g="qx.io.request.Xhr",c="Accept",b="String",f="xml",e="GET",h="function",a="",i="qx.event.type.Event";qx.Class.define(g,{extend:qx.io.request.AbstractRequest,construct:function(u,v){if(v!==undefined){this.setMethod(v);}
;qx.io.request.AbstractRequest.call(this,u);}
,events:{"readyStateChange":i,"success":i,"load":i,"statusError":i},statics:{PARSER:{json:qx.lang.Json.parse,xml:qx.xml.Document.fromString}},properties:{method:{init:e},async:{check:q,init:true},accept:{check:b,nullable:true},cache:{check:function(w){return qx.lang.Type.isBoolean(w)||qx.lang.Type.isString(w);}
,init:true}},members:{__uB:null,_createTransport:function(){return new qx.bom.request.Xhr();}
,_getConfiguredUrl:function(){var x=this.getUrl(),y;if(this.getMethod()===e&&this.getRequestData()){y=this._serializeData(this.getRequestData());x=qx.util.Uri.appendParamsToUrl(x,y);}
;if(this.getCache()===false){x=qx.util.Uri.appendParamsToUrl(x,{nocache:new Date().valueOf()});}
;return x;}
,_getConfiguredRequestHeaders:function(){var z={},A=qx.util.Request.methodAllowsRequestBody(this.getMethod());if(!qx.util.Request.isCrossDomain(this.getUrl())){z[p]=r;}
;if(qx.lang.Type.isString(this.getCache())){z[l]=this.getCache();}
;if(this.getRequestData()!==s&&A){z[k]=m;}
;if(this.getAccept()){if(qx.core.Environment.get(j)){this.debug(n+this.getAccept()+t);}
;z[c]=this.getAccept();}
;return z;}
,_getMethod:function(){return this.getMethod();}
,_isAsync:function(){return this.isAsync();}
,_getParsedResponse:function(){var C=this._transport.responseText,B=this._getParser();if(typeof B===h){if(C!==a){return B.call(this,C);}
;}
;return C;}
,setParser:function(D){var E=qx.io.request.Xhr;if(typeof E.PARSER[D]===h){return this.__uB=E.PARSER[D];}
;if(qx.core.Environment.get(o)){qx.core.Assert.assertFunction(D);}
;return this.__uB=D;}
,_getParser:function(){var F=this.__uB,G;if(F){return F;}
;if(!this.isDone()){return;}
;G=this.getResponseContentType()||a;G=G.replace(/;.*$/,a);if((/^application\/(\w|\.)*\+?json$/).test(G)){F=qx.io.request.Xhr.PARSER[d];}
;if((/^application\/xml$/).test(G)){F=qx.io.request.Xhr.PARSER[f];}
;if((/[^\/]+\/[^\+]+\+xml$/).test(this.getResponseContentType())){F=qx.io.request.Xhr.PARSER[f];}
;return F;}
}});}
)();
(function(){var k="Retry open native request with method: ",j="activex",i="No XHR support available.",h="If-None-Match",g="xhr",f="engine.version",d="GET",c="-1",b="Open native request with method: ",a="load",P="Received native readyState: ",O="abort",N="Microsoft.XMLHTTP",M="Already disposed",L="browser.version",K="on",J="If-Match",I="Microsoft.XMLDOM",H="Send native request",G="If-Range",r="Content-Type",s="io.xhr",p="Not enough arguments",q="timeout",n="If-Modified-Since",o="onunload",l=", url: ",m="browser.documentmode",t=", async: ",u="loadend",y="opera",x="gecko",A="file:",z="error",C="mshtml",B="undefined",w="qx.debug.io",F="",E="readystatechange",D="qx.bom.request.Xhr",v="engine.name";qx.Bootstrap.define(D,{construct:function(){this.__th=qx.Bootstrap.bind(this.__tw,this);this.__ti=qx.Bootstrap.bind(this.__tv,this);this.__tj=qx.Bootstrap.bind(this.__tA,this);this.__tu();this._emitter=new qx.event.Emitter();if(window.attachEvent){this.__tk=qx.Bootstrap.bind(this.__tD,this);window.attachEvent(o,this.__tk);}
;}
,statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},events:{"readystatechange":D,"error":D,"loadend":D,"timeout":D,"abort":D,"load":D},members:{readyState:0,responseText:F,responseXML:null,status:0,statusText:F,timeout:0,open:function(Q,R,S,T,U){this.__tF();if(typeof R===B){throw new Error(p);}
else if(typeof Q===B){Q=d;}
;this.__tl=false;this.__tm=false;this.__tn=false;this.__to=R;if(typeof S==B){S=true;}
;this.__tp=S;if(!this.__tE()&&this.readyState>qx.bom.request.Xhr.UNSENT){this.dispose();this.__tu();}
;this.__tr.onreadystatechange=this.__th;try{if(qx.core.Environment.get(w)){qx.Bootstrap.debug(qx.bom.request.Xhr,b+Q+l+R+t+S);}
;this.__tr.open(Q,R,S,T,U);}
catch(V){if(!qx.util.Request.isCrossDomain(R)){throw V;}
;if(!this.__tp){this.__tq=V;}
;if(this.__tp){if(window.XDomainRequest){this.readyState=4;this.__tr=new XDomainRequest();this.__tr.onerror=qx.Bootstrap.bind(function(){this._emit(E);this._emit(z);this._emit(u);}
,this);if(qx.core.Environment.get(w)){qx.Bootstrap.debug(qx.bom.request.Xhr,k+Q+l+R+t+S);}
;this.__tr.open(Q,R,S,T,U);return;}
;window.setTimeout(qx.Bootstrap.bind(function(){if(this.__tt){return;}
;this.readyState=4;this._emit(E);this._emit(z);this._emit(u);}
,this));}
;}
;if(qx.core.Environment.get(v)===C&&qx.core.Environment.get(m)<9&&this.__tr.readyState>0){this.__tr.setRequestHeader(n,c);}
;if(qx.core.Environment.get(v)===x&&parseInt(qx.core.Environment.get(f),10)<2&&!this.__tp){this.readyState=qx.bom.request.Xhr.OPENED;this._emit(E);}
;}
,setRequestHeader:function(W,X){this.__tF();if(W==J||W==n||W==h||W==G){this.__tn=true;}
;this.__tr.setRequestHeader(W,X);return this;}
,send:function(Y){this.__tF();if(!this.__tp&&this.__tq){throw this.__tq;}
;if(qx.core.Environment.get(v)===y&&this.timeout===0){this.timeout=10000;}
;if(this.timeout>0){this.__ts=window.setTimeout(this.__tj,this.timeout);}
;Y=typeof Y==B?null:Y;try{if(qx.core.Environment.get(w)){qx.Bootstrap.debug(qx.bom.request.Xhr,H);}
;this.__tr.send(Y);}
catch(bb){if(!this.__tp){throw bb;}
;if(this._getProtocol()===A){this.readyState=2;this.__tx();var ba=this;window.setTimeout(function(){if(ba.__tt){return;}
;ba.readyState=3;ba.__tx();ba.readyState=4;ba.__tx();}
);}
;}
;if(qx.core.Environment.get(v)===x&&!this.__tp){this.__tw();}
;this.__tm=true;return this;}
,abort:function(){this.__tF();this.__tl=true;this.__tr.abort();if(this.__tr){this.readyState=this.__tr.readyState;}
;return this;}
,_emit:function(event){this[K+event]();this._emitter.emit(event,this);}
,onreadystatechange:function(){}
,onload:function(){}
,onloadend:function(){}
,onerror:function(){}
,onabort:function(){}
,ontimeout:function(){}
,on:function(name,bc,bd){this._emitter.on(name,bc,bd);return this;}
,getResponseHeader:function(be){this.__tF();return this.__tr.getResponseHeader(be);}
,getAllResponseHeaders:function(){this.__tF();return this.__tr.getAllResponseHeaders();}
,getRequest:function(){return this.__tr;}
,dispose:function(){if(this.__tt){return false;}
;window.clearTimeout(this.__ts);if(window.detachEvent){window.detachEvent(o,this.__tk);}
;try{this.__tr.onreadystatechange;}
catch(bg){return;}
;var bf=function(){}
;this.__tr.onreadystatechange=bf;this.__tr.onload=bf;this.__tr.onerror=bf;this.abort();this.__tr=null;this.__tt=true;return true;}
,_createNativeXhr:function(){var bh=qx.core.Environment.get(s);if(bh===g){return new XMLHttpRequest();}
;if(bh==j){return new window.ActiveXObject(N);}
;qx.Bootstrap.error(this,i);}
,_getProtocol:function(){var bi=this.__to;var bj=/^(\w+:)\/\//;if(bi!==null&&bi.match){var bk=bi.match(bj);if(bk&&bk[1]){return bk[1];}
;}
;return window.location.protocol;}
,__tr:null,__tp:null,__th:null,__ti:null,__tk:null,__tj:null,__tm:null,__to:null,__tl:null,__dA:null,__tt:null,__ts:null,__tq:null,__tn:null,__tu:function(){this.__tr=this._createNativeXhr();this.__tr.onreadystatechange=this.__th;if(this.__tr.onabort){this.__tr.onabort=this.__ti;}
;this.__tt=this.__tm=this.__tl=false;}
,__tv:function(){if(!this.__tl){this.abort();}
;}
,__tw:function(){var bl=this.__tr,bm=true;if(qx.core.Environment.get(w)){qx.Bootstrap.debug(qx.bom.request.Xhr,P+bl.readyState);}
;if(this.readyState==bl.readyState){return;}
;this.readyState=bl.readyState;if(this.readyState===qx.bom.request.Xhr.DONE&&this.__tl&&!this.__tm){return;}
;if(!this.__tp&&(bl.readyState==2||bl.readyState==3)){return;}
;this.status=0;this.statusText=this.responseText=F;this.responseXML=null;if(this.readyState>=qx.bom.request.Xhr.HEADERS_RECEIVED){try{this.status=bl.status;this.statusText=bl.statusText;this.responseText=bl.responseText;this.responseXML=bl.responseXML;}
catch(bn){bm=false;}
;if(bm){this.__tB();this.__tC();}
;}
;this.__tx();if(this.readyState==qx.bom.request.Xhr.DONE){if(bl){bl.onreadystatechange=function(){}
;}
;}
;}
,__tx:function(){var bo=this;if(this.readyState===qx.bom.request.Xhr.DONE){window.clearTimeout(this.__ts);}
;if(qx.core.Environment.get(v)==C&&qx.core.Environment.get(m)<8){if(this.__tp&&!this.__tm&&this.readyState>=qx.bom.request.Xhr.LOADING){if(this.readyState==qx.bom.request.Xhr.LOADING){return;}
;if(this.readyState==qx.bom.request.Xhr.DONE){window.setTimeout(function(){if(bo.__tt){return;}
;bo.readyState=3;bo._emit(E);bo.readyState=4;bo._emit(E);bo.__ty();}
);return;}
;}
;}
;this._emit(E);if(this.readyState===qx.bom.request.Xhr.DONE){this.__ty();}
;}
,__ty:function(){if(this.__dA){this._emit(q);if(qx.core.Environment.get(v)===y){this._emit(z);}
;this.__dA=false;}
else {if(this.__tl){this._emit(O);}
else {if(this.__tz()){this._emit(z);}
else {this._emit(a);}
;}
;}
;this._emit(u);}
,__tz:function(){var bp;if(this._getProtocol()===A){bp=!this.responseText;}
else {bp=!this.statusText;}
;return bp;}
,__tA:function(){var bq=this.__tr;this.readyState=qx.bom.request.Xhr.DONE;this.__dA=true;bq.abort();this.responseText=F;this.responseXML=null;this.__tx();}
,__tB:function(){var br=this.readyState===qx.bom.request.Xhr.DONE;if(this._getProtocol()===A&&this.status===0&&br){if(!this.__tz()){this.status=200;}
;}
;if(this.status===1223){this.status=204;}
;if(qx.core.Environment.get(v)===y){if(br&&this.__tn&&!this.__tl&&this.status===0){this.status=304;}
;}
;}
,__tC:function(){if(qx.core.Environment.get(v)==C&&(this.getResponseHeader(r)||F).match(/[^\/]+\/[^\+]+\+xml/)&&this.responseXML&&!this.responseXML.documentElement){var bs=new window.ActiveXObject(I);bs.async=false;bs.validateOnParse=false;bs.loadXML(this.responseText);this.responseXML=bs;}
;}
,__tD:function(){try{if(this){this.dispose();}
;}
catch(e){}
;}
,__tE:function(){var name=qx.core.Environment.get(v);var bt=qx.core.Environment.get(L);return !(name==C&&bt<9||name==x&&bt<3.5);}
,__tF:function(){if(this.__tt){throw new Error(M);}
;}
},defer:function(){qx.core.Environment.add(w,false);}
});}
)();
(function(){var b="qx.event.Emitter",a="*";qx.Bootstrap.define(b,{extend:Object,statics:{__sq:[]},members:{__so:null,__sr:null,on:function(name,c,d){var e=qx.event.Emitter.__sq.length;this.__ss(name).push({listener:c,ctx:d,id:e});qx.event.Emitter.__sq.push({name:name,listener:c,ctx:d});return e;}
,once:function(name,f,g){var h=qx.event.Emitter.__sq.length;this.__ss(name).push({listener:f,ctx:g,once:true,id:h});qx.event.Emitter.__sq.push({name:name,listener:f,ctx:g});return h;}
,off:function(name,j,k){var m=this.__ss(name);for(var i=m.length-1;i>=0;i--){var l=m[i];if(l.listener==j&&l.ctx==k){m.splice(i,1);qx.event.Emitter.__sq[l.id]=null;return l.id;}
;}
;return null;}
,offById:function(n){var o=qx.event.Emitter.__sq[n];this.off(o.name,o.listener,o.ctx);}
,addListener:function(name,p,q){return this.on(name,p,q);}
,addListenerOnce:function(name,r,s){return this.once(name,r,s);}
,removeListener:function(name,t,u){this.off(name,t,u);}
,removeListenerById:function(v){this.offById(v);}
,emit:function(name,w){var y=this.__ss(name);for(var i=y.length-1;i>=0;i--){var x=y[i];x.listener.call(x.ctx,w);if(x.once){y.splice(i,1);}
;}
;y=this.__ss(a);for(var i=y.length-1;i>=0;i--){var x=y[i];x.listener.call(x.ctx,w);}
;}
,getListeners:function(){return this.__so;}
,__ss:function(name){if(this.__so==null){this.__so={};}
;if(this.__so[name]==null){this.__so[name]=[];}
;return this.__so[name];}
}});}
)();
(function(){var j="rim_tabletos",i="Darwin",h="os.version",g="2003",f=")",e="iPhone",d="android",c="unix",b="ce",a="7",bg="SymbianOS",bf="os.name",be="|",bd="MacPPC",bc="iPod",bb="\.",ba="Win64",Y="linux",X="me",W="Macintosh",q="Windows",r="ios",o="vista",p="8",m="blackberry",n="(",k="win",l="Linux",u="BSD",v="Mac OS X",D="iPad",B="X11",L="xp",G="symbian",S="qx.bom.client.OperatingSystem",Q="g",x="Win32",V="osx",U="webOS",T="RIM Tablet OS",w="BlackBerry",z="nt4",A=".",C="MacIntel",E="webos",H="10.1",N="10.3",R="10.7",s="10.5",t="95",y="10.2",K="Android",J="98",I="2000",P="10.6",O="10.0",F="10.4",M="";qx.Bootstrap.define(S,{statics:{getName:function(){if(!navigator){return M;}
;var bh=navigator.platform||M;var bi=navigator.userAgent||M;if(bh.indexOf(q)!=-1||bh.indexOf(x)!=-1||bh.indexOf(ba)!=-1){return k;}
else if(bh.indexOf(W)!=-1||bh.indexOf(bd)!=-1||bh.indexOf(C)!=-1||bh.indexOf(v)!=-1){return V;}
else if(bi.indexOf(T)!=-1){return j;}
else if(bi.indexOf(U)!=-1){return E;}
else if(bh.indexOf(bc)!=-1||bh.indexOf(e)!=-1||bh.indexOf(D)!=-1){return r;}
else if(bi.indexOf(K)!=-1){return d;}
else if(bh.indexOf(l)!=-1){return Y;}
else if(bh.indexOf(B)!=-1||bh.indexOf(u)!=-1||bh.indexOf(i)!=-1){return c;}
else if(bh.indexOf(bg)!=-1){return G;}
else if(bh.indexOf(w)!=-1){return m;}
;;;;;;;;;return M;}
,__dg:{"Windows NT 6.2":p,"Windows NT 6.1":a,"Windows NT 6.0":o,"Windows NT 5.2":g,"Windows NT 5.1":L,"Windows NT 5.0":I,"Windows 2000":I,"Windows NT 4.0":z,"Win 9x 4.90":X,"Windows CE":b,"Windows 98":J,"Win98":J,"Windows 95":t,"Win95":t,"Mac OS X 10_7":R,"Mac OS X 10.7":R,"Mac OS X 10_6":P,"Mac OS X 10.6":P,"Mac OS X 10_5":s,"Mac OS X 10.5":s,"Mac OS X 10_4":F,"Mac OS X 10.4":F,"Mac OS X 10_3":N,"Mac OS X 10.3":N,"Mac OS X 10_2":y,"Mac OS X 10.2":y,"Mac OS X 10_1":H,"Mac OS X 10.1":H,"Mac OS X 10_0":O,"Mac OS X 10.0":O},getVersion:function(){var bj=qx.bom.client.OperatingSystem.__dh(navigator.userAgent);if(bj==null){bj=qx.bom.client.OperatingSystem.__di(navigator.userAgent);}
;if(bj!=null){return bj;}
else {return M;}
;}
,__dh:function(bk){var bn=[];for(var bm in qx.bom.client.OperatingSystem.__dg){bn.push(bm);}
;var bo=new RegExp(n+bn.join(be).replace(/\./g,bb)+f,Q);var bl=bo.exec(bk);if(bl&&bl[1]){return qx.bom.client.OperatingSystem.__dg[bl[1]];}
;return null;}
,__di:function(bp){var bt=bp.indexOf(K)!=-1;var bq=bp.match(/(iPad|iPhone|iPod)/i)?true:false;if(bt){var bs=new RegExp(/ Android (\d+(?:\.\d+)+)/i);var bu=bs.exec(bp);if(bu&&bu[1]){return bu[1];}
;}
else if(bq){var bv=new RegExp(/(CPU|iPhone|iPod) OS (\d+)_(\d+)\s+/);var br=bv.exec(bp);if(br&&br[2]&&br[3]){return br[2]+A+br[3];}
;}
;return null;}
},defer:function(bw){qx.core.Environment.add(bf,bw.getName);qx.core.Environment.add(h,bw.getVersion);}
});}
)();
(function(){var j="CSS1Compat",i="android",h="operamini",g="gecko",f="browser.quirksmode",e="browser.name",d="mobile chrome",c="iemobile",b="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",a="opera mobi",H="Mobile Safari",G="Maple",F="operamobile",E="ie",D="mobile safari",C="IEMobile|Maxthon|MSIE",B="qx.bom.client.Browser",A="(Maple )([0-9]+\.[0-9]+\.[0-9]*)",z="opera mini",y="browser.version",q="opera",r="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",p="webkit",m="browser.documentmode",n="5.0",k="Mobile/",l="msie",s="maple",t=")(/| )([0-9]+\.[0-9])",v="(",u="ce",x="",w="mshtml";qx.Bootstrap.define(B,{statics:{getName:function(){var L=navigator.userAgent;var K=new RegExp(v+qx.bom.client.Browser.__dj+t);var J=L.match(K);if(!J){return x;}
;var name=J[1].toLowerCase();var I=qx.bom.client.Engine.getName();if(I===p){if(name===i){name=d;}
else if(L.indexOf(H)!==-1||L.indexOf(k)!==-1){name=D;}
;}
else if(I===w){if(name===l){name=E;if(qx.bom.client.OperatingSystem.getVersion()===u){name=c;}
;}
;}
else if(I===q){if(name===a){name=F;}
else if(name===z){name=h;}
;}
else if(I===g){if(L.indexOf(G)!==-1){name=s;}
;}
;;;return name;}
,getVersion:function(){var P=navigator.userAgent;var O=new RegExp(v+qx.bom.client.Browser.__dj+t);var N=P.match(O);if(!N){return x;}
;var name=N[1].toLowerCase();var M=N[3];if(P.match(/Version(\/| )([0-9]+\.[0-9])/)){M=RegExp.$2;}
;if(qx.bom.client.Engine.getName()==w){M=qx.bom.client.Engine.getVersion();if(name===l&&qx.bom.client.OperatingSystem.getVersion()==u){M=n;}
;}
;if(qx.bom.client.Browser.getName()==s){O=new RegExp(A);N=P.match(O);if(!N){return x;}
;M=N[2];}
;return M;}
,getDocumentMode:function(){if(document.documentMode){return document.documentMode;}
;return 0;}
,getQuirksMode:function(){if(qx.bom.client.Engine.getName()==w&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;}
else {return document.compatMode!==j;}
;}
,__dj:{"webkit":o,"gecko":b,"mshtml":C,"opera":r}[qx.bom.client.Engine.getName()]},defer:function(Q){qx.core.Environment.add(e,Q.getName),qx.core.Environment.add(y,Q.getVersion),qx.core.Environment.add(m,Q.getDocumentMode),qx.core.Environment.add(f,Q.getQuirksMode);}
});}
)();
(function(){var n="Microsoft.XMLHTTP",m="io.ssl",l="io.xhr",k="",j="file:",i="https:",h="webkit",g="gecko",f="activex",e="opera",b=".",d="io.maxrequests",c="qx.bom.client.Transport",a="xhr";qx.Bootstrap.define(c,{statics:{getMaxConcurrentRequestCount:function(){var o;var r=qx.bom.client.Engine.getVersion().split(b);var p=0;var s=0;var q=0;if(r[0]){p=r[0];}
;if(r[1]){s=r[1];}
;if(r[2]){q=r[2];}
;if(window.maxConnectionsPerServer){o=window.maxConnectionsPerServer;}
else if(qx.bom.client.Engine.getName()==e){o=8;}
else if(qx.bom.client.Engine.getName()==h){o=4;}
else if(qx.bom.client.Engine.getName()==g&&((p>1)||((p==1)&&(s>9))||((p==1)&&(s==9)&&(q>=1)))){o=6;}
else {o=2;}
;;;return o;}
,getSsl:function(){return window.location.protocol===i;}
,getXmlHttpRequest:function(){var t=window.ActiveXObject?(function(){if(window.location.protocol!==j){try{new window.XMLHttpRequest();return a;}
catch(u){}
;}
;try{new window.ActiveXObject(n);return f;}
catch(v){}
;}
)():(function(){try{new window.XMLHttpRequest();return a;}
catch(w){}
;}
)();return t||k;}
},defer:function(x){qx.core.Environment.add(d,x.getMaxConcurrentRequestCount);qx.core.Environment.add(m,x.getSsl);qx.core.Environment.add(l,x.getXmlHttpRequest);}
});}
)();
(function(){var d="Number",c="qx.io.request.AbstractRequest",b="qx.event.type.Rest",a="String";qx.Class.define(b,{extend:qx.event.type.Data,properties:{request:{check:c},action:{check:a},phase:{check:a},id:{check:d}},members:{init:function(e,f,g,h,i,j){qx.event.type.Data.prototype.init.call(this,e,f,g);this.setRequest(h);this.setAction(i);this.setPhase(j);this.setId(parseInt(h.toHashCode(),10));}
,clone:function(k){var l=qx.event.type.Data.prototype.clone.call(this,k);l.setAction(this.getAction());l.setPhase(this.getPhase());l.setRequest(this.getRequest());return l;}
}});}
)();
(function(){var k="qx.event.Timer",j="_applyInterval",i="func is not a function",h="Boolean",g="qx.debug",f="No timeout given",d="Integer",c="qx.event.type.Event",b="_applyEnabled",a="interval";qx.Class.define(k,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);this.setEnabled(false);if(l!=null){this.setInterval(l);}
;var self=this;this.__gm=function(){self._oninterval.call(self);}
;}
,events:{"interval":c},statics:{once:function(m,n,o){if(qx.core.Environment.get(g)){qx.core.Assert.assertFunction(m,i);qx.core.Assert.assertNotUndefined(o,f);}
;var p=new qx.event.Timer(o);p.__gn=m;p.addListener(a,function(e){p.stop();m.call(n,e);p.dispose();n=null;}
,n);p.start();return p;}
},properties:{enabled:{init:true,check:h,apply:b},interval:{check:d,init:1000,apply:j}},members:{__go:null,__gm:null,_applyInterval:function(q,r){if(this.getEnabled()){this.restart();}
;}
,_applyEnabled:function(s,t){if(t){window.clearInterval(this.__go);this.__go=null;}
else if(s){this.__go=window.setInterval(this.__gm,this.getInterval());}
;}
,start:function(){this.setEnabled(true);}
,startWith:function(u){this.setInterval(u);this.start();}
,stop:function(){this.setEnabled(false);}
,restart:function(){this.stop();this.start();}
,restartWith:function(v){this.stop();this.startWith(v);}
,_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;}
;if(this.getEnabled()){this.fireEvent(a);}
;}
)},destruct:function(){if(this.__go){window.clearInterval(this.__go);}
;this.__go=this.__gm=null;}
});}
)();
(function(){var a="qx.ui.core.MLayoutHandling";qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);}
,getLayout:function(){return this._getLayout();}
},statics:{remap:function(c){c.getLayout=c._getLayout;c.setLayout=c._setLayout;}
}});}
)();
(function(){var b="qx.locale.MTranslation",a="To enable localization please include qx.locale.Manager into your build!";qx.Mixin.define(b,{members:{tr:function(c,d){var e=qx.locale.Manager;if(e){return e.tr.apply(e,arguments);}
;throw new Error(a);}
,trn:function(f,g,h,i){var j=qx.locale.Manager;if(j){return j.trn.apply(j,arguments);}
;throw new Error(a);}
,trc:function(k,l,m){var n=qx.locale.Manager;if(n){return n.trc.apply(n,arguments);}
;throw new Error(a);}
,marktr:function(o){var p=qx.locale.Manager;if(p){return p.marktr.apply(p,arguments);}
;throw new Error(a);}
}});}
)();
(function(){var j="changeWidth",i="Wrong 'width' argument. ",h="allowShrinkY",g="Something went wrong with the layout of ",f="bottom",e="Wrong 'left' argument. ",d="baseline",c="marginBottom",b="qx.ui.core.LayoutItem",a="center",G="marginTop",F="!",E="allowGrowX",D="middle",C="marginLeft",B="allowShrinkX",A="top",z="right",y="marginRight",x="abstract",q="Wrong 'top' argument. ",r="Wrong 'height' argument. ",o="allowGrowY",p="left",m="changeHeight",n="_applyAlign",k="qx.debug",l="shorthand",s="Boolean",t="_applyStretching",v="_applyMargin",u="_applyDimension",w="Integer";qx.Class.define(b,{type:x,extend:qx.core.Object,properties:{minWidth:{check:w,nullable:true,apply:u,init:null,themeable:true},width:{check:w,event:j,nullable:true,apply:u,init:null,themeable:true},maxWidth:{check:w,nullable:true,apply:u,init:null,themeable:true},minHeight:{check:w,nullable:true,apply:u,init:null,themeable:true},height:{check:w,event:m,nullable:true,apply:u,init:null,themeable:true},maxHeight:{check:w,nullable:true,apply:u,init:null,themeable:true},allowGrowX:{check:s,apply:t,init:true,themeable:true},allowShrinkX:{check:s,apply:t,init:true,themeable:true},allowGrowY:{check:s,apply:t,init:true,themeable:true},allowShrinkY:{check:s,apply:t,init:true,themeable:true},allowStretchX:{group:[E,B],mode:l,themeable:true},allowStretchY:{group:[o,h],mode:l,themeable:true},marginTop:{check:w,init:0,apply:v,themeable:true},marginRight:{check:w,init:0,apply:v,themeable:true},marginBottom:{check:w,init:0,apply:v,themeable:true},marginLeft:{check:w,init:0,apply:v,themeable:true},margin:{group:[G,y,c,C],mode:l,themeable:true},alignX:{check:[p,a,z],nullable:true,apply:n,themeable:true},alignY:{check:[A,D,f,d],nullable:true,apply:n,themeable:true}},members:{__gG:null,__gH:null,__gI:null,__gJ:null,__gK:null,__gL:null,__gM:null,getBounds:function(){return this.__gL||this.__gH||null;}
,clearSeparators:function(){}
,renderSeparator:function(H,I){}
,renderLayout:function(J,top,K,L){if(qx.core.Environment.get(k)){var M=g+this.toString()+F;this.assertInteger(J,e+M);this.assertInteger(top,q+M);this.assertInteger(K,i+M);this.assertInteger(L,r+M);}
;var N=null;if(this.getHeight()==null&&this._hasHeightForWidth()){var N=this._getHeightForWidth(K);}
;if(N!=null&&N!==this.__gG){this.__gG=N;qx.ui.core.queue.Layout.add(this);return null;}
;var P=this.__gH;if(!P){P=this.__gH={};}
;var O={};if(J!==P.left||top!==P.top){O.position=true;P.left=J;P.top=top;}
;if(K!==P.width||L!==P.height){O.size=true;P.width=K;P.height=L;}
;if(this.__gI){O.local=true;delete this.__gI;}
;if(this.__gK){O.margin=true;delete this.__gK;}
;return O;}
,isExcluded:function(){return false;}
,hasValidLayout:function(){return !this.__gI;}
,scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);}
,invalidateLayoutCache:function(){this.__gI=true;this.__gJ=null;}
,getSizeHint:function(Q){var R=this.__gJ;if(R){return R;}
;if(Q===false){return null;}
;R=this.__gJ=this._computeSizeHint();if(this._hasHeightForWidth()&&this.__gG&&this.getHeight()==null){R.height=this.__gG;}
;if(R.minWidth>R.width){R.width=R.minWidth;}
;if(R.maxWidth<R.width){R.width=R.maxWidth;}
;if(!this.getAllowGrowX()){R.maxWidth=R.width;}
;if(!this.getAllowShrinkX()){R.minWidth=R.width;}
;if(R.minHeight>R.height){R.height=R.minHeight;}
;if(R.maxHeight<R.height){R.height=R.maxHeight;}
;if(!this.getAllowGrowY()){R.maxHeight=R.height;}
;if(!this.getAllowShrinkY()){R.minHeight=R.height;}
;return R;}
,_computeSizeHint:function(){var W=this.getMinWidth()||0;var T=this.getMinHeight()||0;var X=this.getWidth()||W;var V=this.getHeight()||T;var S=this.getMaxWidth()||Infinity;var U=this.getMaxHeight()||Infinity;return {minWidth:W,width:X,maxWidth:S,minHeight:T,height:V,maxHeight:U};}
,_hasHeightForWidth:function(){var Y=this._getLayout();if(Y){return Y.hasHeightForWidth();}
;return false;}
,_getHeightForWidth:function(ba){var bb=this._getLayout();if(bb&&bb.hasHeightForWidth()){return bb.getHeightForWidth(ba);}
;return null;}
,_getLayout:function(){return null;}
,_applyMargin:function(){this.__gK=true;var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}
;}
,_applyAlign:function(){var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}
;}
,_applyDimension:function(){qx.ui.core.queue.Layout.add(this);}
,_applyStretching:function(){qx.ui.core.queue.Layout.add(this);}
,hasUserBounds:function(){return !!this.__gL;}
,setUserBounds:function(bc,top,bd,be){this.__gL={left:bc,top:top,width:bd,height:be};qx.ui.core.queue.Layout.add(this);}
,resetUserBounds:function(){delete this.__gL;qx.ui.core.queue.Layout.add(this);}
,__gN:{},setLayoutProperties:function(bf){if(bf==null){return;}
;var bg=this.__gM;if(!bg){bg=this.__gM={};}
;var parent=this.getLayoutParent();if(parent){parent.updateLayoutProperties(bf);}
;for(var bh in bf){if(bf[bh]==null){delete bg[bh];}
else {bg[bh]=bf[bh];}
;}
;}
,getLayoutProperties:function(){return this.__gM||this.__gN;}
,clearLayoutProperties:function(){delete this.__gM;}
,updateLayoutProperties:function(bi){var bj=this._getLayout();if(bj){if(qx.core.Environment.get(k)){if(bi){for(var bk in bi){if(bi[bk]!==null){bj.verifyLayoutProperty(this,bk,bi[bk]);}
;}
;}
;}
;bj.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);}
,getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();}
,getLayoutParent:function(){return this.$$parent||null;}
,setLayoutParent:function(parent){if(this.$$parent===parent){return;}
;this.$$parent=parent||null;qx.ui.core.queue.Visibility.add(this);}
,isRootWidget:function(){return false;}
,_getRoot:function(){var parent=this;while(parent){if(parent.isRootWidget()){return parent;}
;parent=parent.$$parent;}
;return null;}
,clone:function(){var bl=qx.core.Object.prototype.clone.call(this);var bm=this.__gM;if(bm){bl.__gM=qx.lang.Object.clone(bm);}
;return bl;}
},destruct:function(){this.$$parent=this.$$subparent=this.__gM=this.__gH=this.__gL=this.__gJ=null;}
});}
)();
(function(){var b="qx.ui.core.queue.Layout",a="layout";qx.Class.define(b,{statics:{__gO:{},remove:function(c){delete this.__gO[c.$$hash];}
,add:function(d){this.__gO[d.$$hash]=d;qx.ui.core.queue.Manager.scheduleFlush(a);}
,isScheduled:function(e){return !!this.__gO[e.$$hash];}
,flush:function(){var f=this.__gR();for(var i=f.length-1;i>=0;i--){var g=f[i];if(g.hasValidLayout()){continue;}
;if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();g.renderLayout(0,0,j.width,j.height);}
else {var h=g.getBounds();g.renderLayout(h.left,h.top,h.width,h.height);}
;}
;}
,getNestingLevel:function(k){var l=this.__gQ;var n=0;var parent=k;while(true){if(l[parent.$$hash]!=null){n+=l[parent.$$hash];break;}
;if(!parent.$$parent){break;}
;parent=parent.$$parent;n+=1;}
;var m=n;while(k&&k!==parent){l[k.$$hash]=m--;k=k.$$parent;}
;return n;}
,__gP:function(){var t=qx.ui.core.queue.Visibility;this.__gQ={};var s=[];var r=this.__gO;var o,q;for(var p in r){o=r[p];if(t.isVisible(o)){q=this.getNestingLevel(o);if(!s[q]){s[q]={};}
;s[q][p]=o;delete r[p];}
;}
;return s;}
,__gR:function(){var x=[];var z=this.__gP();for(var w=z.length-1;w>=0;w--){if(!z[w]){continue;}
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
(function(){var b="qx.util.DeferredCallManager",a="singleton";qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__dv={};this.__dw=qx.lang.Function.bind(this.__dA,this);this.__dx=false;}
,members:{__dy:null,__dz:null,__dv:null,__dx:null,__dw:null,schedule:function(c){if(this.__dy==null){this.__dy=window.setTimeout(this.__dw,0);}
;var d=c.toHashCode();if(this.__dz&&this.__dz[d]){return;}
;this.__dv[d]=c;this.__dx=true;}
,cancel:function(e){var f=e.toHashCode();if(this.__dz&&this.__dz[f]){this.__dz[f]=null;return;}
;delete this.__dv[f];if(qx.lang.Object.isEmpty(this.__dv)&&this.__dy!=null){window.clearTimeout(this.__dy);this.__dy=null;}
;}
,__dA:qx.event.GlobalError.observeMethod(function(){this.__dy=null;while(this.__dx){this.__dz=qx.lang.Object.clone(this.__dv);this.__dv={};this.__dx=false;for(var h in this.__dz){var g=this.__dz[h];if(g){this.__dz[h]=null;g.call();}
;}
;}
;this.__dz=null;}
)},destruct:function(){if(this.__dy!=null){window.clearTimeout(this.__dy);}
;this.__dw=this.__dv=null;}
});}
)();
(function(){var e="qx.util.DeferredCall",d="The context object '",c="qx.debug",b="'is already disposed.",a="' of the defered call '";qx.Class.define(e,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);this.__cq=f;this.__cr=g||null;this.__dB=qx.util.DeferredCallManager.getInstance();}
,members:{__cq:null,__cr:null,__dB:null,cancel:function(){this.__dB.cancel(this);}
,schedule:function(){this.__dB.schedule(this);}
,call:function(){if(qx.core.Environment.get(c)){var h=this.__cr;if(h&&h.isDisposed&&h.isDisposed()){this.warn(d+h+a+this+b);}
;}
;this.__cr?this.__cq.apply(this.__cr):this.__cq();}
},destruct:function(){this.cancel();this.__cr=this.__cq=this.__dB=null;}
});}
)();
(function(){var m="Child is already in: ",k="text",j="|bubble|",h="qx.html.Element",g="|capture|",f="focus",d="Failed to add event listener for type '",c="Flushing elements...",b="blur",a="Flush: ",bh="deactivate",bg="css.userselect",bf="Synced DOM with ",be=" from the target '",bd="capture",bc="visible",bb="Root elements could not be inserted into other ones.",ba="Has no children!",Y="off",X="releaseCapture",t="Could not move to same index!",u="Flush invisible element",r="Failed to remove event listener for type '",s="qxSelectable",p="tabIndex",q="Has no child at this position!",n="qx.html.Iframe",o="activate",z="Has no parent to remove from.",A=" to the target '",I=" operations",G="Flush rendered element",P="none",K="css.userselect.none",T="hidden",R="__dY",C="on",W="Switching visibility to: ",V="id",U="': ",B="scroll",E="Invalid capture flag.",F="div",H="'",J="Invalid callback function",L="Invalid context for callback.",Q="",S="Invalid event type.",v="mshtml",w="engine.name",D="Has no child: ",O="Could not overwrite existing element!",N="qx.debug",M="element";qx.Class.define(h,{extend:qx.core.Object,construct:function(bi,bj,bk){qx.core.Object.call(this);this.__dC=bi||F;this.__dD=bj||null;this.__dE=bk||null;}
,statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__dF:{},_scheduleFlush:function(bl){qx.html.Element.__ek.schedule();}
,flush:function(){var bw;if(qx.core.Environment.get(N)){if(this.DEBUG){qx.log.Logger.debug(this,c);}
;}
;var bo=this.__dG();var bn=bo.getFocus();if(bn&&this.__dK(bn)){bo.blur(bn);}
;var bD=bo.getActive();if(bD&&this.__dK(bD)){qx.bom.Element.deactivate(bD);}
;var br=this.__dI();if(br&&this.__dK(br)){qx.bom.Element.releaseCapture(br);}
;var bx=[];var by=this._modified;for(var bv in by){bw=by[bv];if(bw.__ed()||bw.classname==n){if(bw.__dL&&qx.dom.Hierarchy.isRendered(bw.__dL)){bx.push(bw);}
else {if(qx.core.Environment.get(N)){if(this.DEBUG){bw.debug(u);}
;}
;bw.__ec();}
;delete by[bv];}
;}
;for(var i=0,l=bx.length;i<l;i++){bw=bx[i];if(qx.core.Environment.get(N)){if(this.DEBUG){bw.debug(G);}
;}
;bw.__ec();}
;var bt=this._visibility;for(var bv in bt){bw=bt[bv];var bz=bw.__dL;if(!bz){delete bt[bv];continue;}
;if(qx.core.Environment.get(N)){if(this.DEBUG){qx.log.Logger.debug(this,W+bw.__dO);}
;}
;if(!bw.$$disposed){bz.style.display=bw.__dO?Q:P;if((qx.core.Environment.get(w)==v)){if(!(document.documentMode>=8)){bz.style.visibility=bw.__dO?bc:T;}
;}
;}
;delete bt[bv];}
;var scroll=this._scroll;for(var bv in scroll){bw=scroll[bv];var bE=bw.__dL;if(bE&&bE.offsetWidth){var bq=true;if(bw.__dR!=null){bw.__dL.scrollLeft=bw.__dR;delete bw.__dR;}
;if(bw.__dS!=null){bw.__dL.scrollTop=bw.__dS;delete bw.__dS;}
;var bA=bw.__dP;if(bA!=null){var bu=bA.element.getDomElement();if(bu&&bu.offsetWidth){qx.bom.element.Scroll.intoViewX(bu,bE,bA.align);delete bw.__dP;}
else {bq=false;}
;}
;var bB=bw.__dQ;if(bB!=null){var bu=bB.element.getDomElement();if(bu&&bu.offsetWidth){qx.bom.element.Scroll.intoViewY(bu,bE,bB.align);delete bw.__dQ;}
else {bq=false;}
;}
;if(bq){delete scroll[bv];}
;}
;}
;var bp={"releaseCapture":1,"blur":1,"deactivate":1};for(var i=0;i<this._actions.length;i++){var bC=this._actions[i];var bz=bC.element.__dL;if(!bz||!bp[bC.type]&&!bC.element.__ed()){continue;}
;var bs=bC.args;bs.unshift(bz);qx.bom.Element[bC.type].apply(qx.bom.Element,bs);}
;this._actions=[];for(var bv in this.__dF){var bm=this.__dF[bv];var bE=bm.element.__dL;if(bE){qx.bom.Selection.set(bE,bm.start,bm.end);delete this.__dF[bv];}
;}
;qx.event.handler.Appear.refresh();}
,__dG:function(){if(!this.__dH){var bF=qx.event.Registration.getManager(window);this.__dH=bF.getHandler(qx.event.handler.Focus);}
;return this.__dH;}
,__dI:function(){if(!this.__dJ){var bG=qx.event.Registration.getManager(window);this.__dJ=bG.getDispatcher(qx.event.dispatch.MouseCapture);}
;return this.__dJ.getCaptureElement();}
,__dK:function(bH){var bI=qx.core.ObjectRegistry.fromHashCode(bH.$$element);return bI&&!bI.__ed();}
},members:{__dC:null,__dL:null,__dM:false,__dN:true,__dO:true,__dP:null,__dQ:null,__dR:null,__dS:null,__dT:null,__dU:null,__dV:null,__dD:null,__dE:null,__dW:null,__dX:null,__dY:null,__ea:null,__eb:null,_scheduleChildrenUpdate:function(){if(this.__ea){return;}
;this.__ea=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
,_createDomElement:function(){return qx.dom.Element.create(this.__dC);}
,__ec:function(){if(qx.core.Environment.get(N)){if(this.DEBUG){this.debug(a+this.getAttribute(V));}
;}
;var length;var bJ=this.__dY;if(bJ){length=bJ.length;var bK;for(var i=0;i<length;i++){bK=bJ[i];if(bK.__dO&&bK.__dN&&!bK.__dL){bK.__ec();}
;}
;}
;if(!this.__dL){this.__dL=this._createDomElement();this.__dL.$$element=this.$$hash;this._copyData(false);if(bJ&&length>0){this._insertChildren();}
;}
else {this._syncData();if(this.__ea){this._syncChildren();}
;}
;delete this.__ea;}
,_insertChildren:function(){var bL=this.__dY;var length=bL.length;var bN;if(length>2){var bM=document.createDocumentFragment();for(var i=0;i<length;i++){bN=bL[i];if(bN.__dL&&bN.__dN){bM.appendChild(bN.__dL);}
;}
;this.__dL.appendChild(bM);}
else {var bM=this.__dL;for(var i=0;i<length;i++){bN=bL[i];if(bN.__dL&&bN.__dN){bM.appendChild(bN.__dL);}
;}
;}
;}
,_syncChildren:function(){var bX=qx.core.ObjectRegistry;var bO=this.__dY;var bV=bO.length;var bP;var bT;var bR=this.__dL;var bU=bR.childNodes;var bQ=0;var bS;if(qx.core.Environment.get(N)){var bW=0;}
;for(var i=bU.length-1;i>=0;i--){bS=bU[i];bT=bX.fromHashCode(bS.$$element);if(!bT||!bT.__dN||bT.__eb!==this){bR.removeChild(bS);if(qx.core.Environment.get(N)){bW++;}
;}
;}
;for(var i=0;i<bV;i++){bP=bO[i];if(bP.__dN){bT=bP.__dL;bS=bU[bQ];if(!bT){continue;}
;if(bT!=bS){if(bS){bR.insertBefore(bT,bS);}
else {bR.appendChild(bT);}
;if(qx.core.Environment.get(N)){bW++;}
;}
;bQ++;}
;}
;if(qx.core.Environment.get(N)){if(qx.html.Element.DEBUG){this.debug(bf+bW+I);}
;}
;}
,_copyData:function(bY){var cd=this.__dL;var cc=this.__dE;if(cc){var ca=qx.bom.element.Attribute;for(var ce in cc){ca.set(cd,ce,cc[ce]);}
;}
;var cc=this.__dD;if(cc){var cb=qx.bom.element.Style;if(bY){cb.setStyles(cd,cc);}
else {cb.setCss(cd,cb.compile(cc));}
;}
;var cc=this.__dW;if(cc){for(var ce in cc){this._applyProperty(ce,cc[ce]);}
;}
;var cc=this.__dX;if(cc){qx.event.Registration.getManager(cd).importListeners(cd,cc);delete this.__dX;}
;}
,_syncData:function(){var cj=this.__dL;var ci=qx.bom.element.Attribute;var cg=qx.bom.element.Style;var ch=this.__dU;if(ch){var cm=this.__dE;if(cm){var ck;for(var cl in ch){ck=cm[cl];if(ck!==undefined){ci.set(cj,cl,ck);}
else {ci.reset(cj,cl);}
;}
;}
;this.__dU=null;}
;var ch=this.__dT;if(ch){var cm=this.__dD;if(cm){var cf={};for(var cl in ch){cf[cl]=cm[cl];}
;cg.setStyles(cj,cf);}
;this.__dT=null;}
;var ch=this.__dV;if(ch){var cm=this.__dW;if(cm){var ck;for(var cl in ch){this._applyProperty(cl,cm[cl]);}
;}
;this.__dV=null;}
;}
,__ed:function(){var cn=this;while(cn){if(cn.__dM){return true;}
;if(!cn.__dN||!cn.__dO){return false;}
;cn=cn.__eb;}
;return false;}
,__ee:function(co){if(co.__eb===this){throw new Error(m+co);}
;if(co.__dM){throw new Error(bb);}
;if(co.__eb){co.__eb.remove(co);}
;co.__eb=this;if(!this.__dY){this.__dY=[];}
;if(this.__dL){this._scheduleChildrenUpdate();}
;}
,__ef:function(cp){if(cp.__eb!==this){throw new Error(D+cp);}
;if(this.__dL){this._scheduleChildrenUpdate();}
;delete cp.__eb;}
,__eg:function(cq){if(cq.__eb!==this){throw new Error(D+cq);}
;if(this.__dL){this._scheduleChildrenUpdate();}
;}
,getChildren:function(){return this.__dY||null;}
,getChild:function(cr){var cs=this.__dY;return cs&&cs[cr]||null;}
,hasChildren:function(){var ct=this.__dY;return ct&&ct[0]!==undefined;}
,indexOf:function(cu){var cv=this.__dY;return cv?cv.indexOf(cu):-1;}
,hasChild:function(cw){var cx=this.__dY;return cx&&cx.indexOf(cw)!==-1;}
,add:function(cy){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__ee(arguments[i]);}
;this.__dY.push.apply(this.__dY,arguments);}
else {this.__ee(cy);this.__dY.push(cy);}
;return this;}
,addAt:function(cz,cA){this.__ee(cz);qx.lang.Array.insertAt(this.__dY,cz,cA);return this;}
,remove:function(cB){var cC=this.__dY;if(!cC){return;}
;if(arguments[1]){var cD;for(var i=0,l=arguments.length;i<l;i++){cD=arguments[i];this.__ef(cD);qx.lang.Array.remove(cC,cD);}
;}
else {this.__ef(cB);qx.lang.Array.remove(cC,cB);}
;return this;}
,removeAt:function(cE){var cF=this.__dY;if(!cF){throw new Error(ba);}
;var cG=cF[cE];if(!cG){throw new Error(q);}
;this.__ef(cG);qx.lang.Array.removeAt(this.__dY,cE);return this;}
,removeAll:function(){var cH=this.__dY;if(cH){for(var i=0,l=cH.length;i<l;i++){this.__ef(cH[i]);}
;cH.length=0;}
;return this;}
,getParent:function(){return this.__eb||null;}
,insertInto:function(parent,cI){parent.__ee(this);if(cI==null){parent.__dY.push(this);}
else {qx.lang.Array.insertAt(this.__dY,this,cI);}
;return this;}
,insertBefore:function(cJ){var parent=cJ.__eb;parent.__ee(this);qx.lang.Array.insertBefore(parent.__dY,this,cJ);return this;}
,insertAfter:function(cK){var parent=cK.__eb;parent.__ee(this);qx.lang.Array.insertAfter(parent.__dY,this,cK);return this;}
,moveTo:function(cL){var parent=this.__eb;parent.__eg(this);var cM=parent.__dY.indexOf(this);if(cM===cL){throw new Error(t);}
else if(cM<cL){cL--;}
;qx.lang.Array.removeAt(parent.__dY,cM);qx.lang.Array.insertAt(parent.__dY,this,cL);return this;}
,moveBefore:function(cN){var parent=this.__eb;return this.moveTo(parent.__dY.indexOf(cN));}
,moveAfter:function(cO){var parent=this.__eb;return this.moveTo(parent.__dY.indexOf(cO)+1);}
,free:function(){var parent=this.__eb;if(!parent){throw new Error(z);}
;if(!parent.__dY){return;}
;parent.__ef(this);qx.lang.Array.remove(parent.__dY,this);return this;}
,getDomElement:function(){return this.__dL||null;}
,getNodeName:function(){return this.__dC;}
,setNodeName:function(name){this.__dC=name;}
,setRoot:function(cP){this.__dM=cP;}
,useMarkup:function(cQ){if(this.__dL){throw new Error(O);}
;if((qx.core.Environment.get(w)==v)){var cR=document.createElement(F);}
else {var cR=qx.dom.Element.getHelperElement();}
;cR.innerHTML=cQ;this.useElement(cR.firstChild);return this.__dL;}
,useElement:function(cS){if(this.__dL){throw new Error(O);}
;this.__dL=cS;this.__dL.$$element=this.$$hash;this._copyData(true);}
,isFocusable:function(){var cU=this.getAttribute(p);if(cU>=1){return true;}
;var cT=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;if(cU>=0&&cT[this.__dC]){return true;}
;return false;}
,setSelectable:function(cV){this.setAttribute(s,cV?C:Y);var cW=qx.core.Environment.get(bg);if(cW){this.setStyle(cW,cV?k:qx.core.Environment.get(K));}
;}
,isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__dC];}
,include:function(){if(this.__dN){return;}
;delete this.__dN;if(this.__eb){this.__eb._scheduleChildrenUpdate();}
;return this;}
,exclude:function(){if(!this.__dN){return;}
;this.__dN=false;if(this.__eb){this.__eb._scheduleChildrenUpdate();}
;return this;}
,isIncluded:function(){return this.__dN===true;}
,show:function(){if(this.__dO){return;}
;if(this.__dL){qx.html.Element._visibility[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;if(this.__eb){this.__eb._scheduleChildrenUpdate();}
;delete this.__dO;}
,hide:function(){if(!this.__dO){return;}
;if(this.__dL){qx.html.Element._visibility[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;this.__dO=false;}
,isVisible:function(){return this.__dO===true;}
,scrollChildIntoViewX:function(cX,cY,da){var dc=this.__dL;var dd=cX.getDomElement();if(da!==false&&dc&&dc.offsetWidth&&dd&&dd.offsetWidth){qx.bom.element.Scroll.intoViewX(dd,dc,cY);}
else {this.__dP={element:cX,align:cY};qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;delete this.__dR;}
,scrollChildIntoViewY:function(de,df,dg){var dh=this.__dL;var di=de.getDomElement();if(dg!==false&&dh&&dh.offsetWidth&&di&&di.offsetWidth){qx.bom.element.Scroll.intoViewY(di,dh,df);}
else {this.__dQ={element:de,align:df};qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;delete this.__dS;}
,scrollToX:function(x,dj){var dk=this.__dL;if(dj!==true&&dk&&dk.offsetWidth){dk.scrollLeft=x;delete this.__dR;}
else {this.__dR=x;qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;delete this.__dP;}
,getScrollX:function(){var dl=this.__dL;if(dl){return dl.scrollLeft;}
;return this.__dR||0;}
,scrollToY:function(y,dm){var dn=this.__dL;if(dm!==true&&dn&&dn.offsetWidth){dn.scrollTop=y;delete this.__dS;}
else {this.__dS=y;qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;delete this.__dQ;}
,getScrollY:function(){var dp=this.__dL;if(dp){return dp.scrollTop;}
;return this.__dS||0;}
,disableScrolling:function(){this.enableScrolling();this.scrollToX(0);this.scrollToY(0);this.addListener(B,this.__ei,this);}
,enableScrolling:function(){this.removeListener(B,this.__ei,this);}
,__eh:null,__ei:function(e){if(!this.__eh){this.__eh=true;this.__dL.scrollTop=0;this.__dL.scrollLeft=0;delete this.__eh;}
;}
,getTextSelection:function(){var dq=this.__dL;if(dq){return qx.bom.Selection.get(dq);}
;return null;}
,getTextSelectionLength:function(){var dr=this.__dL;if(dr){return qx.bom.Selection.getLength(dr);}
;return null;}
,getTextSelectionStart:function(){var ds=this.__dL;if(ds){return qx.bom.Selection.getStart(ds);}
;return null;}
,getTextSelectionEnd:function(){var dt=this.__dL;if(dt){return qx.bom.Selection.getEnd(dt);}
;return null;}
,setTextSelection:function(du,dv){var dw=this.__dL;if(dw){qx.bom.Selection.set(dw,du,dv);return;}
;qx.html.Element.__dF[this.toHashCode()]={element:this,start:du,end:dv};qx.html.Element._scheduleFlush(M);}
,clearTextSelection:function(){var dx=this.__dL;if(dx){qx.bom.Selection.clear(dx);}
;delete qx.html.Element.__dF[this.toHashCode()];}
,__ej:function(dy,dz){var dA=qx.html.Element._actions;dA.push({type:dy,element:this,args:dz||[]});qx.html.Element._scheduleFlush(M);}
,focus:function(){this.__ej(f);}
,blur:function(){this.__ej(b);}
,activate:function(){this.__ej(o);}
,deactivate:function(){this.__ej(bh);}
,capture:function(dB){this.__ej(bd,[dB!==false]);}
,releaseCapture:function(){this.__ej(X);}
,setStyle:function(dC,dD,dE){if(!this.__dD){this.__dD={};}
;if(this.__dD[dC]==dD){return;}
;if(dD==null){delete this.__dD[dC];}
else {this.__dD[dC]=dD;}
;if(this.__dL){if(dE){qx.bom.element.Style.set(this.__dL,dC,dD);return this;}
;if(!this.__dT){this.__dT={};}
;this.__dT[dC]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;return this;}
,setStyles:function(dF,dG){var dH=qx.bom.element.Style;if(!this.__dD){this.__dD={};}
;if(this.__dL){if(!this.__dT){this.__dT={};}
;for(var dJ in dF){var dI=dF[dJ];if(this.__dD[dJ]==dI){continue;}
;if(dI==null){delete this.__dD[dJ];}
else {this.__dD[dJ]=dI;}
;if(dG){dH.set(this.__dL,dJ,dI);continue;}
;this.__dT[dJ]=true;}
;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
else {for(var dJ in dF){var dI=dF[dJ];if(this.__dD[dJ]==dI){continue;}
;if(dI==null){delete this.__dD[dJ];}
else {this.__dD[dJ]=dI;}
;}
;}
;return this;}
,removeStyle:function(dK,dL){this.setStyle(dK,null,dL);}
,getStyle:function(dM){return this.__dD?this.__dD[dM]:null;}
,getAllStyles:function(){return this.__dD||null;}
,setAttribute:function(dN,dO,dP){if(!this.__dE){this.__dE={};}
;if(this.__dE[dN]==dO){return;}
;if(dO==null){delete this.__dE[dN];}
else {this.__dE[dN]=dO;}
;if(this.__dL){if(dP){qx.bom.element.Attribute.set(this.__dL,dN,dO);return this;}
;if(!this.__dU){this.__dU={};}
;this.__dU[dN]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;return this;}
,setAttributes:function(dQ,dR){for(var dS in dQ){this.setAttribute(dS,dQ[dS],dR);}
;return this;}
,removeAttribute:function(dT,dU){this.setAttribute(dT,null,dU);}
,getAttribute:function(dV){return this.__dE?this.__dE[dV]:null;}
,_applyProperty:function(name,dW){}
,_setProperty:function(dX,dY,ea){if(!this.__dW){this.__dW={};}
;if(this.__dW[dX]==dY){return;}
;if(dY==null){delete this.__dW[dX];}
else {this.__dW[dX]=dY;}
;if(this.__dL){if(ea){this._applyProperty(dX,dY);return this;}
;if(!this.__dV){this.__dV={};}
;this.__dV[dX]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;return this;}
,_removeProperty:function(eb,ec){this._setProperty(eb,null,ec);}
,_getProperty:function(ed){var ee=this.__dW;if(!ee){return null;}
;var ef=ee[ed];return ef==null?null:ef;}
,addListener:function(eg,eh,self,ei){if(this.$$disposed){return null;}
;if(qx.core.Environment.get(N)){var ej=d+eg+H+A+this+U;this.assertString(eg,ej+S);this.assertFunction(eh,ej+J);if(self!==undefined){this.assertObject(self,L);}
;if(ei!==undefined){this.assertBoolean(ei,E);}
;}
;if(this.__dL){return qx.event.Registration.addListener(this.__dL,eg,eh,self,ei);}
;if(!this.__dX){this.__dX={};}
;if(ei==null){ei=false;}
;var ek=qx.event.Manager.getNextUniqueId();var em=eg+(ei?g:j)+ek;this.__dX[em]={type:eg,listener:eh,self:self,capture:ei,unique:ek};return em;}
,removeListener:function(en,eo,self,ep){if(this.$$disposed){return null;}
;if(qx.core.Environment.get(N)){var eq=r+en+H+be+this+U;this.assertString(en,eq+S);this.assertFunction(eo,eq+J);if(self!==undefined){this.assertObject(self,L);}
;if(ep!==undefined){this.assertBoolean(ep,E);}
;}
;if(this.__dL){qx.event.Registration.removeListener(this.__dL,en,eo,self,ep);}
else {var es=this.__dX;var er;if(ep==null){ep=false;}
;for(var et in es){er=es[et];if(er.listener===eo&&er.self===self&&er.capture===ep&&er.type===en){delete es[et];break;}
;}
;}
;return this;}
,removeListenerById:function(eu){if(this.$$disposed){return null;}
;if(this.__dL){qx.event.Registration.removeListenerById(this.__dL,eu);}
else {delete this.__dX[eu];}
;return this;}
,hasListener:function(ev,ew){if(this.$$disposed){return false;}
;if(this.__dL){return qx.event.Registration.hasListener(this.__dL,ev,ew);}
;var ey=this.__dX;var ex;if(ew==null){ew=false;}
;for(var ez in ey){ex=ey[ez];if(ex.capture===ew&&ex.type===ev){return true;}
;}
;return false;}
},defer:function(eA){eA.__ek=new qx.util.DeferredCall(eA.flush,eA);}
,destruct:function(){var eB=this.__dL;if(eB){qx.event.Registration.getManager(eB).removeAllListeners(eB);eB.$$element=Q;}
;if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__eb;if(parent&&!parent.$$disposed){parent.remove(this);}
;}
;this._disposeArray(R);this.__dE=this.__dD=this.__dX=this.__dW=this.__dU=this.__dT=this.__dV=this.__dL=this.__eb=this.__dP=this.__dQ=null;}
});}
)();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);this.__dB=d;this.__el={};qx.event.handler.Appear.__em[this.$$hash]=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__em:{},refresh:function(){var e=this.__em;for(var f in e){e[f].refresh();}
;}
},members:{__dB:null,__el:null,canHandleEvent:function(g,h){}
,registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;var m=this.__el;if(m&&!m[l]){m[l]=i;i.$$displayed=i.offsetWidth>0;}
;}
,unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;var r=this.__el;if(!r){return;}
;if(r[q]){delete r[q];}
;}
,refresh:function(){var v=this.__el;var w;for(var u in v){w=v[u];var s=w.offsetWidth>0;if((!!w.$$displayed)!==s){w.$$displayed=s;var t=qx.event.Registration.createEvent(s?a:b);this.__dB.dispatchEvent(w,t);}
;}
;}
},destruct:function(){this.__dB=this.__el=null;delete qx.event.handler.Appear.__em[this.$$hash];}
,defer:function(x){qx.event.Registration.addHandler(x);}
});}
)();
(function(){var h="abstract",g="qx.event.dispatch.AbstractBubbling",f="Missing implementation",e="The context object '",d="qx.debug",c="' for the event '",b="' of '",a="'is already disposed.";qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:h,construct:function(k){this._manager=k;}
,members:{_getParent:function(l){throw new Error(f);}
,canDispatchEvent:function(m,event,n){return event.getBubbles();}
,dispatchEvent:function(o,event,p){var parent=o;var y=this._manager;var v,C;var t;var x,A;var z;var B=[];v=y.getListeners(o,p,true);C=y.getListeners(o,p,false);if(v){B.push(v);}
;if(C){B.push(C);}
;var parent=this._getParent(o);var r=[];var q=[];var s=[];var w=[];while(parent!=null){v=y.getListeners(parent,p,true);if(v){s.push(v);w.push(parent);}
;C=y.getListeners(parent,p,false);if(C){r.push(C);q.push(parent);}
;parent=this._getParent(parent);}
;event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);for(var i=s.length-1;i>=0;i--){z=w[i];event.setCurrentTarget(z);t=s[i];for(var j=0,u=t.length;j<u;j++){x=t[j];A=x.context||z;if(qx.core.Environment.get(d)){if(A&&A.isDisposed&&A.isDisposed()){this.warn(e+A+c+p+b+z+a);}
;}
;x.handler.call(A,event);}
;if(event.getPropagationStopped()){return;}
;}
;event.setEventPhase(qx.event.type.Event.AT_TARGET);event.setCurrentTarget(o);for(var i=0,D=B.length;i<D;i++){t=B[i];for(var j=0,u=t.length;j<u;j++){x=t[j];A=x.context||o;if(qx.core.Environment.get(d)){if(A&&A.isDisposed&&A.isDisposed()){this.warn(e+A+c+p+b+o+a);}
;}
;x.handler.call(A,event);}
;if(event.getPropagationStopped()){return;}
;}
;event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);for(var i=0,D=r.length;i<D;i++){z=q[i];event.setCurrentTarget(z);t=r[i];for(var j=0,u=t.length;j<u;j++){x=t[j];A=x.context||z;if(qx.core.Environment.get(d)){if(A&&A.isDisposed&&A.isDisposed()){this.warn(e+A+c+p+b+z+a);}
;}
;x.handler.call(A,event);}
;if(event.getPropagationStopped()){return;}
;}
;}
}});}
)();
(function(){var a="qx.event.dispatch.DomBubbling";qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;}
,canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();}
},defer:function(e){qx.event.Registration.addDispatcher(e);}
});}
)();
(function(){var d="qx.event.handler.Element",c="load",b="iframe",a="-";qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(e){qx.core.Object.call(this);this._manager=e;this._registeredEvents={};}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,load:true,scroll:true,select:true,reset:true,submit:true},CANCELABLE:{selectstart:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){if(g===c){return f.tagName.toLowerCase()!==b;}
else {return true;}
;}
,registerEvent:function(h,i,j){var m=qx.core.ObjectRegistry.toHashCode(h);var k=m+a+i;var l=qx.lang.Function.listener(this._onNative,this,k);qx.bom.Event.addNativeListener(h,i,l);this._registeredEvents[k]={element:h,type:i,listener:l};}
,unregisterEvent:function(n,o,p){var s=this._registeredEvents;if(!s){return;}
;var t=qx.core.ObjectRegistry.toHashCode(n);var q=t+a+o;var r=this._registeredEvents[q];if(r){qx.bom.Event.removeNativeListener(n,o,r.listener);}
;delete this._registeredEvents[q];}
,_onNative:qx.event.GlobalError.observeMethod(function(u,v){var x=this._registeredEvents;if(!x){return;}
;var w=x[v];var y=this.constructor.CANCELABLE[w.type];qx.event.Registration.fireNonBubblingEvent(w.element,w.type,qx.event.type.Native,[u,undefined,undefined,undefined,y]);}
)},destruct:function(){var z;var A=this._registeredEvents;for(var B in A){z=A[B];qx.bom.Event.removeNativeListener(z.element,z.type,z.listener);}
;this._manager=this._registeredEvents=null;}
,defer:function(C){qx.event.Registration.addHandler(C);}
});}
)();
(function(){var a="qx.event.type.Native";qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d,e,f){qx.event.type.Event.prototype.init.call(this,e,f);this._target=c||qx.bom.Event.getTarget(b);this._relatedTarget=d||qx.bom.Event.getRelatedTarget(b);if(b.timeStamp){this._timeStamp=b.timeStamp;}
;this._native=b;this._returnValue=null;return this;}
,clone:function(g){var h=qx.event.type.Event.prototype.clone.call(this,g);var i={};h._native=this._cloneNativeEvent(this._native,i);h._returnValue=this._returnValue;return h;}
,_cloneNativeEvent:function(j,k){k.preventDefault=qx.lang.Function.empty;return k;}
,preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);qx.bom.Event.preventDefault(this._native);}
,getNativeEvent:function(){return this._native;}
,setReturnValue:function(l){this._returnValue=l;}
,getReturnValue:function(){return this._returnValue;}
},destruct:function(){this._native=this._returnValue=null;}
});}
)();
(function(){var a="qx.event.handler.UserAction";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);this.__dB=b;this.__ce=b.getWindow();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dB:null,__ce:null,canHandleEvent:function(c,d){}
,registerEvent:function(e,f,g){}
,unregisterEvent:function(h,i,j){}
},destruct:function(){this.__dB=this.__ce=null;}
,defer:function(k){qx.event.Registration.addHandler(k);}
});}
)();
(function(){var t="engine.version",s="useraction",r="webkit",q="gecko",p="DOMMouseScroll",o="qx.event.handler.Mouse",n="os.name",m="mouseover",l="mouseout",k="ios",d="mousemove",j="on",g="dblclick",c="mousedown",b="contextmenu",f="mousewheel",e="mouseup",h="engine.name",a="click";qx.Class.define(o,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);this.__dB=u;this.__ce=u.getWindow();this.__dM=this.__ce.document;this._initButtonObserver();this._initMoveObserver();this._initWheelObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__en:null,__eo:null,__ep:null,__eq:null,__er:null,__dB:null,__ce:null,__dM:null,canHandleEvent:function(v,w){}
,registerEvent:qx.core.Environment.get(n)===k?function(x,y,z){x[j+y]=qx.lang.Function.returnNull;}
:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(n)===k?function(A,B,C){A[j+B]=undefined;}
:qx.lang.Function.returnNull,__es:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);}
;if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==f?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);}
;qx.event.Registration.fireEvent(this.__ce,s,qx.event.type.Data,[E||D.type]);}
,__et:function(){var H=[this.__ce,this.__dM,this.__dM.body];var I=this.__ce;var G=p;for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],f)){G=f;I=H[i];break;}
;}
;return {type:G,target:I};}
,_initButtonObserver:function(){this.__en=qx.lang.Function.listener(this._onButtonEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dM,c,this.__en);Event.addNativeListener(this.__dM,e,this.__en);Event.addNativeListener(this.__dM,a,this.__en);Event.addNativeListener(this.__dM,g,this.__en);Event.addNativeListener(this.__dM,b,this.__en);}
,_initMoveObserver:function(){this.__eo=qx.lang.Function.listener(this._onMoveEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dM,d,this.__eo);Event.addNativeListener(this.__dM,m,this.__eo);Event.addNativeListener(this.__dM,l,this.__eo);}
,_initWheelObserver:function(){this.__ep=qx.lang.Function.listener(this._onWheelEvent,this);var J=this.__et();qx.bom.Event.addNativeListener(J.target,J.type,this.__ep);}
,_stopButtonObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__dM,c,this.__en);Event.removeNativeListener(this.__dM,e,this.__en);Event.removeNativeListener(this.__dM,a,this.__en);Event.removeNativeListener(this.__dM,g,this.__en);Event.removeNativeListener(this.__dM,b,this.__en);}
,_stopMoveObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__dM,d,this.__eo);Event.removeNativeListener(this.__dM,m,this.__eo);Event.removeNativeListener(this.__dM,l,this.__eo);}
,_stopWheelObserver:function(){var K=this.__et();qx.bom.Event.removeNativeListener(K.target,K.type,this.__ep);}
,_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__es(L);}
),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var O=M.type;var P=qx.bom.Event.getTarget(M);if(qx.core.Environment.get(h)==q||qx.core.Environment.get(h)==r){if(P&&P.nodeType==3){P=P.parentNode;}
;}
;var N=qx.event.handler.DragDrop&&this.__dB.getHandler(qx.event.handler.DragDrop).isSessionActive();if(N&&O==a){return;}
;if(this.__eu){this.__eu(M,O,P);}
;if(this.__ew){this.__ew(M,O,P);}
;this.__es(M,O,P);if(this.__ev){this.__ev(M,O,P);}
;if(this.__ex&&!N){this.__ex(M,O,P);}
;this.__eq=O;}
),_onWheelEvent:qx.event.GlobalError.observeMethod(function(Q){this.__es(Q,f);}
),__eu:qx.core.Environment.select(h,{"webkit":function(R,S,T){if(parseFloat(qx.core.Environment.get(t))<530){if(S==b){this.__es(R,e,T);}
;}
;}
,"default":null}),__ev:qx.core.Environment.select(h,{"opera":function(U,V,W){if(V==e&&U.button==2){this.__es(U,b,W);}
;}
,"default":null}),__ew:qx.core.Environment.select(h,{"mshtml":function(X,Y,ba){if(X.target!==undefined){return;}
;if(Y==e&&this.__eq==a){this.__es(X,c,ba);}
else if(Y==g){this.__es(X,a,ba);}
;}
,"default":null}),__ex:qx.core.Environment.select(h,{"mshtml":null,"default":function(bb,bc,bd){switch(bc){case c:this.__er=bd;break;case e:if(bd!==this.__er){var be=qx.dom.Hierarchy.getCommonParent(bd,this.__er);if(be){this.__es(bb,a,be);}
;}
;};}
})},destruct:function(){this._stopButtonObserver();this._stopMoveObserver();this._stopWheelObserver();this.__dB=this.__ce=this.__dM=this.__er=null;}
,defer:function(bf){qx.event.Registration.addHandler(bf);}
});}
)();
(function(){var e="os.name",d="opera",c="engine.name",b="qx.event.type.Dom",a="osx";qx.Class.define(b,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(f,g){var g=qx.event.type.Native.prototype._cloneNativeEvent.call(this,f,g);g.shiftKey=f.shiftKey;g.ctrlKey=f.ctrlKey;g.altKey=f.altKey;g.metaKey=f.metaKey;return g;}
,getModifiers:function(){var i=0;var h=this._native;if(h.shiftKey){i|=qx.event.type.Dom.SHIFT_MASK;}
;if(h.ctrlKey){i|=qx.event.type.Dom.CTRL_MASK;}
;if(h.altKey){i|=qx.event.type.Dom.ALT_MASK;}
;if(h.metaKey){i|=qx.event.type.Dom.META_MASK;}
;return i;}
,isCtrlPressed:function(){return this._native.ctrlKey;}
,isShiftPressed:function(){return this._native.shiftKey;}
,isAltPressed:function(){return this._native.altKey;}
,isMetaPressed:function(){return this._native.metaKey;}
,isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(e)==a&&qx.core.Environment.get(c)!=d){return this._native.metaKey;}
else {return this._native.ctrlKey;}
;}
}});}
)();
(function(){var j="click",i="contextmenu",h="qx.event.type.Mouse",g="browser.documentmode",f="browser.name",e="ie",d="none",c="middle",b="left",a="right";qx.Class.define(h,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(k,l){var l=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,k,l);l.button=k.button;l.clientX=k.clientX;l.clientY=k.clientY;l.pageX=k.pageX;l.pageY=k.pageY;l.screenX=k.screenX;l.screenY=k.screenY;l.wheelDelta=k.wheelDelta;l.wheelDeltaX=k.wheelDeltaX;l.wheelDeltaY=k.wheelDeltaY;l.detail=k.detail;l.axis=k.axis;l.wheelX=k.wheelX;l.wheelY=k.wheelY;l.HORIZONTAL_AXIS=k.HORIZONTAL_AXIS;l.srcElement=k.srcElement;l.target=k.target;return l;}
,__ey:{'0':b,'2':a,'1':c},__ez:{'1':b,'2':a,'4':c},stop:function(){this.stopPropagation();}
,getButton:function(){switch(this._type){case i:return a;case j:if(qx.core.Environment.get(f)===e&&qx.core.Environment.get(g)<9){return b;}
;default:if(this._native.target!==undefined){return this.__ey[this._native.button]||d;}
else {return this.__ez[this._native.button]||d;}
;};}
,isLeftPressed:function(){return this.getButton()===b;}
,isMiddlePressed:function(){return this.getButton()===c;}
,isRightPressed:function(){return this.getButton()===a;}
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
(function(){var b="qx.bom.Viewport",a="undefined";qx.Bootstrap.define(b,{statics:{getWidth:function(c){var c=c||window;var d=c.document;return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;}
,getHeight:function(e){var e=e||window;var f=e.document;return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;}
,getScrollLeft:function(g){var g=g?g:window;if(typeof g.pageXOffset!==a){return g.pageXOffset;}
;var h=g.document;return h.documentElement.scrollLeft||h.body.scrollLeft;}
,getScrollTop:function(i){var i=i?i:window;if(typeof i.pageYOffeset!==a){return i.pageYOffset;}
;var j=i.document;return j.documentElement.scrollTop||j.body.scrollTop;}
,__ds:function(k){var l=this.getWidth(k)>this.getHeight(k)?90:0;var m=k.orientation;if(m==null||Math.abs(m%180)==l){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};}
else {return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};}
;}
,__dt:null,getOrientation:function(n){var n=n||window.top;var o=n.orientation;if(o==null){o=this.getWidth(n)>this.getHeight(n)?90:0;}
else {if(this.__dt==null){this.__dt=this.__ds(n);}
;o=this.__dt[o];}
;return o;}
,isLandscape:function(p){return this.getWidth(p)>=this.getHeight(p);}
,isPortrait:function(q){return this.getWidth(q)<this.getHeight(q);}
}});}
)();
(function(){var g="engine.name",f="position:absolute;width:0;height:0;width:1",e="engine.version",d="qx.bom.Document",c="1px",b="div",a="CSS1Compat";qx.Bootstrap.define(d,{statics:{isQuirksMode:qx.core.Environment.select(g,{"mshtml":function(h){if(qx.core.Environment.get(e)>=8){return (h||window).document.documentMode===5;}
else {return (h||window).document.compatMode!==a;}
;}
,"webkit":function(i){if(document.compatMode===undefined){var j=(i||window).document.createElement(b);j.style.cssText=f;return j.style.width===c?true:false;}
else {return (i||window).document.compatMode!==a;}
;}
,"default":function(k){return (k||window).document.compatMode!==a;}
}),isStandardMode:function(l){return !this.isQuirksMode(l);}
,getWidth:function(m){var n=(m||window).document;var o=qx.bom.Viewport.getWidth(m);var scroll=this.isStandardMode(m)?n.documentElement.scrollWidth:n.body.scrollWidth;return Math.max(scroll,o);}
,getHeight:function(p){var q=(p||window).document;var r=qx.bom.Viewport.getHeight(p);var scroll=this.isStandardMode(p)?q.documentElement.scrollHeight:q.body.scrollHeight;return Math.max(scroll,r);}
}});}
)();
(function(){var l="engine.name",k="x",j="osx",i="win",h="qx.dynamicmousewheel",g="chrome",f="qx.event.type.MouseWheel",d="browser.name",c="y",b="os.name",a="engine.version";qx.Class.define(f,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();this.preventDefault();}
,__eA:function(m){var n=Math.abs(m);if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>n){qx.event.type.MouseWheel.MINSCROLL=n;this.__eB();}
;if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<n){qx.event.type.MouseWheel.MAXSCROLL=n;this.__eB();}
;if(qx.event.type.MouseWheel.MAXSCROLL===n&&qx.event.type.MouseWheel.MINSCROLL===n){return 2*(m/n);}
;var o=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;var p=(m/o)*Math.log(o)*qx.event.type.MouseWheel.FACTOR;return p<0?Math.min(p,-1):Math.max(p,1);}
,__eB:function(){var q=qx.event.type.MouseWheel.MAXSCROLL||0;var t=qx.event.type.MouseWheel.MINSCROLL||q;if(q<=t){return;}
;var r=q-t;var s=(q/r)*Math.log(r);if(s==0){s=1;}
;qx.event.type.MouseWheel.FACTOR=6/s;}
,getWheelDelta:function(u){var e=this._native;if(u===undefined){if(v===undefined){var v=-e.wheelDelta;if(e.wheelDelta===undefined){v=e.detail;}
;}
;return this.__eC(v);}
;if(u===k){var x=0;if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__eC(-e.wheelDeltaX):0;}
;}
else {if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__eC(e.detail);}
;}
;return x;}
;if(u===c){var y=0;if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__eC(-e.wheelDeltaY):0;}
else {y=this.__eC(-e.wheelDelta);}
;}
else {if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__eC(e.detail);}
;}
;return y;}
;return 0;}
,__eC:function(w){if(qx.core.Environment.get(h)){return this.__eA(w);}
else {var z=qx.core.Environment.select(l,{"default":function(){return w/40;}
,"gecko":function(){return w;}
,"webkit":function(){if(qx.core.Environment.get(d)==g){if(qx.core.Environment.get(b)==j){return w/60;}
else {return w/120;}
;}
else {if(qx.core.Environment.get(b)==i){var A=120;if(parseFloat(qx.core.Environment.get(a))==533.16){A=1200;}
;}
else {A=40;if(parseFloat(qx.core.Environment.get(a))==533.16||parseFloat(qx.core.Environment.get(a))==533.17||parseFloat(qx.core.Environment.get(a))==533.18){A=1200;}
;}
;return w/A;}
;}
});return z.call(this);}
;}
}});}
)();
(function(){var g="qx.dom.Hierarchy",f="previousSibling",e="nextSibling",d="parentNode",c="*",b="html.element.compareDocumentPosition",a="html.element.contains";qx.Bootstrap.define(g,{statics:{getNodeIndex:function(h){var i=0;while(h&&(h=h.previousSibling)){i++;}
;return i;}
,getElementIndex:function(j){var k=0;var l=qx.dom.Node.ELEMENT;while(j&&(j=j.previousSibling)){if(j.nodeType==l){k++;}
;}
;return k;}
,getNextElementSibling:function(m){while(m&&(m=m.nextSibling)&&!qx.dom.Node.isElement(m)){continue;}
;return m||null;}
,getPreviousElementSibling:function(n){while(n&&(n=n.previousSibling)&&!qx.dom.Node.isElement(n)){continue;}
;return n||null;}
,contains:function(o,p){if(qx.core.Environment.get(a)){if(qx.dom.Node.isDocument(o)){var q=qx.dom.Node.getDocument(p);return o&&q==o;}
else if(qx.dom.Node.isDocument(p)){return false;}
else {return o.contains(p);}
;}
else if(qx.core.Environment.get(b)){return !!(o.compareDocumentPosition(p)&16);}
else {while(p){if(o==p){return true;}
;p=p.parentNode;}
;return false;}
;}
,isRendered:function(r){var s=r.ownerDocument||r.document;if(qx.core.Environment.get(a)){if(!r.parentNode||!r.offsetParent){return false;}
;return s.body.contains(r);}
else if(qx.core.Environment.get(b)){return !!(s.compareDocumentPosition(r)&16);}
else {while(r){if(r==s.body){return true;}
;r=r.parentNode;}
;return false;}
;}
,isDescendantOf:function(t,u){return this.contains(u,t);}
,getCommonParent:function(v,w){if(v===w){return v;}
;if(qx.core.Environment.get(a)){while(v&&qx.dom.Node.isElement(v)){if(v.contains(w)){return v;}
;v=v.parentNode;}
;return null;}
else {var x=[];while(v||w){if(v){if(qx.lang.Array.contains(x,v)){return v;}
;x.push(v);v=v.parentNode;}
;if(w){if(qx.lang.Array.contains(x,w)){return w;}
;x.push(w);w=w.parentNode;}
;}
;return null;}
;}
,getAncestors:function(y){return this._recursivelyCollect(y,d);}
,getChildElements:function(z){z=z.firstChild;if(!z){return [];}
;var A=this.getNextSiblings(z);if(z.nodeType===1){A.unshift(z);}
;return A;}
,getDescendants:function(B){return qx.lang.Array.fromCollection(B.getElementsByTagName(c));}
,getFirstDescendant:function(C){C=C.firstChild;while(C&&C.nodeType!=1){C=C.nextSibling;}
;return C;}
,getLastDescendant:function(D){D=D.lastChild;while(D&&D.nodeType!=1){D=D.previousSibling;}
;return D;}
,getPreviousSiblings:function(E){return this._recursivelyCollect(E,f);}
,getNextSiblings:function(F){return this._recursivelyCollect(F,e);}
,_recursivelyCollect:function(G,H){var I=[];while(G=G[H]){if(G.nodeType==1){I.push(G);}
;}
;return I;}
,getSiblings:function(J){return this.getPreviousSiblings(J).reverse().concat(this.getNextSiblings(J));}
,isEmpty:function(K){K=K.firstChild;while(K){if(K.nodeType===qx.dom.Node.ELEMENT||K.nodeType===qx.dom.Node.TEXT){return false;}
;K=K.nextSibling;}
;return true;}
,cleanWhitespace:function(L){var M=L.firstChild;while(M){var N=M.nextSibling;if(M.nodeType==3&&!/\S/.test(M.nodeValue)){L.removeChild(M);}
;M=N;}
;}
}});}
)();
(function(){var o="function",n="html.video.h264",m="html.element.contains",l='video/ogg; codecs="theora, vorbis"',k="html.console",j="html.xul",i="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",h="html.video.ogg",g="http://www.w3.org/TR/SVG11/feature#BasicStructure",f="html.storage.local",bq="qx.bom.client.Html",bp='audio',bo='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',bn="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",bm="html.audio",bl="url(#default#VML)",bk="audio/mpeg",bj="org.w3c.dom.svg",bi="html.classlist",bh="html.svg",w="html.video",x="html.geolocation",t="DOMTokenList",u="html.storage.session",r="1.1",s="object",p="html.image.naturaldimensions",q="html.audio.aif",C="audio/x-wav",D='<v:shape id="vml_flag1" adj="1" />',M="html.canvas",J="audio/ogg",U="html.storage.userdata",P="html.element.compareDocumentPosition",bd="audio/x-aiff",ba="html.audio.au",F="img",bg="html.xpath",bf="qxtest",be='video',E="span",H="html.element.textcontent",I="html.audio.mp3",L="html.vml",N="html.audio.ogg",Q="none",W="label",bc='video/webm; codecs="vp8, vorbis"',y="html.dataurl",z="html.webworker",G="html.dataset",T="1.0",S="html.audio.wav",R="html.filereader",Y="audio/basic",X="#default#userdata",O="html.video.webm",V="display",b="div",bb="head",A="number",B="video",K="undefined",c="audio",d="";qx.Bootstrap.define(bq,{statics:{getWebWorker:function(){return window.Worker!=null;}
,getFileReader:function(){return window.FileReader!=null;}
,getGeoLocation:function(){return navigator.geolocation!=null;}
,getAudio:function(){return !!document.createElement(bp).canPlayType;}
,getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return d;}
;var a=document.createElement(c);return a.canPlayType(J);}
,getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return d;}
;var a=document.createElement(c);return a.canPlayType(bk);}
,getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return d;}
;var a=document.createElement(c);return a.canPlayType(C);}
,getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return d;}
;var a=document.createElement(c);return a.canPlayType(Y);}
,getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return d;}
;var a=document.createElement(c);return a.canPlayType(bd);}
,getVideo:function(){return !!document.createElement(be).canPlayType;}
,getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return d;}
;var v=document.createElement(B);return v.canPlayType(l);}
,getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return d;}
;var v=document.createElement(B);return v.canPlayType(bo);}
,getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return d;}
;var v=document.createElement(B);return v.canPlayType(bc);}
,getLocalStorage:function(){try{return window.localStorage!=null;}
catch(br){return false;}
;}
,getSessionStorage:function(){try{return window.sessionStorage!=null;}
catch(bs){return false;}
;}
,getUserDataStorage:function(){var bt=document.createElement(b);bt.style[V]=Q;document.getElementsByTagName(bb)[0].appendChild(bt);var bu=false;try{bt.addBehavior(X);bt.load(bf);bu=true;}
catch(e){}
;document.getElementsByTagName(bb)[0].removeChild(bt);return bu;}
,getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===t);}
,getXPath:function(){return !!document.evaluate;}
,getXul:function(){try{document.createElementNS(i,W);return true;}
catch(e){return false;}
;}
,getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(bj,T)||document.implementation.hasFeature(g,r));}
,getVml:function(){var bv=document.createElement(b);document.body.appendChild(bv);bv.innerHTML=D;bv.firstChild.style.behavior=bl;var bw=typeof bv.firstChild.adj==s;document.body.removeChild(bv);return bw;}
,getCanvas:function(){return !!window.CanvasRenderingContext2D;}
,getDataUrl:function(bx){var by=new Image();by.onload=by.onerror=function(){window.setTimeout(function(){bx.call(null,(by.width==1&&by.height==1));}
,0);}
;by.src=bn;}
,getDataset:function(){return !!document.documentElement.dataset;}
,getContains:function(){return (typeof document.documentElement.contains!==K);}
,getCompareDocumentPosition:function(){return (typeof document.documentElement.compareDocumentPosition===o);}
,getTextContent:function(){var bz=document.createElement(E);return (typeof bz.textContent!==K);}
,getConsole:function(){return typeof window.console!==K;}
,getNaturalDimensions:function(){var bA=document.createElement(F);return typeof bA.naturalHeight===A&&typeof bA.naturalWidth===A;}
},defer:function(bB){qx.core.Environment.add(z,bB.getWebWorker);qx.core.Environment.add(R,bB.getFileReader);qx.core.Environment.add(x,bB.getGeoLocation);qx.core.Environment.add(bm,bB.getAudio);qx.core.Environment.add(N,bB.getAudioOgg);qx.core.Environment.add(I,bB.getAudioMp3);qx.core.Environment.add(S,bB.getAudioWav);qx.core.Environment.add(ba,bB.getAudioAu);qx.core.Environment.add(q,bB.getAudioAif);qx.core.Environment.add(w,bB.getVideo);qx.core.Environment.add(h,bB.getVideoOgg);qx.core.Environment.add(n,bB.getVideoH264);qx.core.Environment.add(O,bB.getVideoWebm);qx.core.Environment.add(f,bB.getLocalStorage);qx.core.Environment.add(u,bB.getSessionStorage);qx.core.Environment.add(U,bB.getUserDataStorage);qx.core.Environment.add(bi,bB.getClassList);qx.core.Environment.add(bg,bB.getXPath);qx.core.Environment.add(j,bB.getXul);qx.core.Environment.add(M,bB.getCanvas);qx.core.Environment.add(bh,bB.getSvg);qx.core.Environment.add(L,bB.getVml);qx.core.Environment.add(G,bB.getDataset);qx.core.Environment.addAsync(y,bB.getDataUrl);qx.core.Environment.add(m,bB.getContains);qx.core.Environment.add(P,bB.getCompareDocumentPosition);qx.core.Environment.add(H,bB.getTextContent);qx.core.Environment.add(k,bB.getConsole);qx.core.Environment.add(p,bB.getNaturalDimensions);}
});}
)();
(function(){var k="PageUp",j="Escape",i="Enter",h="PrintScreen",g="7",f="Left",e="5",d="F5",c="Down",b="Up",bi="3",bh="Meta",bg="F11",bf="F6",be="PageDown",bd="CapsLock",bc="Insert",bb="F8",ba="Scroll",Y="Control",r="Tab",s="Shift",p="End",q="Pause",n="Unidentified",o="8",l="F1",m="F4",v="Home",w="qx.event.util.Keyboard",E="F2",C="6",M="F7",H="Apps",U="4",R="F12",y="Alt",X="2",W="NumLock",V="Delete",x="1",A="Backspace",B="F9",D="F10",F="Right",I="F3",O=",",T="-",t="+",u="os.name",z="A",L="Space",K="osx",J="/",Q="Z",P="*",G="cmd",N="Win",a="0",S="9";qx.Bootstrap.define(w,{statics:{specialCharCodeMap:{'8':A,'9':r,'13':i,'27':j,'32':L},numpadToCharCode:{'96':a.charCodeAt(0),'97':x.charCodeAt(0),'98':X.charCodeAt(0),'99':bi.charCodeAt(0),'100':U.charCodeAt(0),'101':e.charCodeAt(0),'102':C.charCodeAt(0),'103':g.charCodeAt(0),'104':o.charCodeAt(0),'105':S.charCodeAt(0),'106':P.charCodeAt(0),'107':t.charCodeAt(0),'109':T.charCodeAt(0),'110':O.charCodeAt(0),'111':J.charCodeAt(0)},keyCodeToIdentifierMap:{'16':s,'17':Y,'18':y,'20':bd,'224':bh,'37':f,'38':b,'39':F,'40':c,'33':k,'34':be,'35':p,'36':v,'45':bc,'46':V,'112':l,'113':E,'114':I,'115':m,'116':d,'117':bf,'118':M,'119':bb,'120':B,'121':D,'122':bg,'123':R,'144':W,'44':h,'145':ba,'19':q,'91':qx.core.Environment.get(u)==K?G:N,'92':N,'93':qx.core.Environment.get(u)==K?G:H},charCodeA:z.charCodeAt(0),charCodeZ:Q.charCodeAt(0),charCode0:a.charCodeAt(0),charCode9:S.charCodeAt(0),keyCodeToIdentifier:function(bj){if(this.isIdentifiableKeyCode(bj)){var bk=this.numpadToCharCode[bj];if(bk){return String.fromCharCode(bk);}
;return (this.keyCodeToIdentifierMap[bj]||this.specialCharCodeMap[bj]||String.fromCharCode(bj));}
else {return n;}
;}
,charCodeToIdentifier:function(bl){return this.specialCharCodeMap[bl]||String.fromCharCode(bl).toUpperCase();}
,isIdentifiableKeyCode:function(bm){if(bm>=this.charCodeA&&bm<=this.charCodeZ){return true;}
;if(bm>=this.charCode0&&bm<=this.charCode9){return true;}
;if(this.specialCharCodeMap[bm]){return true;}
;if(this.numpadToCharCode[bm]){return true;}
;if(this.isNonPrintableKeyCode(bm)){return true;}
;return false;}
,isNonPrintableKeyCode:function(bn){return this.keyCodeToIdentifierMap[bn]?true:false;}
,isValidKeyIdentifier:function(bo){if(this.identifierToKeyCodeMap[bo]){return true;}
;if(bo.length!=1){return false;}
;if(bo>=a&&bo<=S){return true;}
;if(bo>=z&&bo<=Q){return true;}
;switch(bo){case t:case T:case P:case J:return true;default:return false;};}
,isPrintableKeyIdentifier:function(bp){if(bp===L){return true;}
else {return this.identifierToKeyCodeMap[bp]?false:true;}
;}
},defer:function(bq,br){if(!bq.identifierToKeyCodeMap){bq.identifierToKeyCodeMap={};for(var bs in bq.keyCodeToIdentifierMap){bq.identifierToKeyCodeMap[bq.keyCodeToIdentifierMap[bs]]=parseInt(bs,10);}
;for(var bs in bq.specialCharCodeMap){bq.identifierToKeyCodeMap[bq.specialCharCodeMap[bs]]=parseInt(bs,10);}
;}
;}
});}
)();
(function(){var j="text",i="os.name",h="F11",g="PrintScreen",f="PageUp",e="gecko",d="F1",c="Left",b="F5",a="Down",V="Up",U="F3",T="Use qx.event.util.Keyboard.isValidKeyIdentifier instead.",S="Use qx.event.util.Keyboard.keyCodeToIdentifier instead.",R="F6",Q="Insert",P="F8",O="input",N="End",M="Delete",q="qx.event.handler.Keyboard",r="win",o="Use qx.event.util.Keyboard.isNonPrintableKeyCode instead.",p="Home",m="F2",n="Use qx.event.util.Keyboard.charCodeToIdentifier instead.",k="Use qx.event.util.Keyboard.isPrintableKeyIdentifier instead.",l="Right",s="F12",t="F4",A="PageDown",y="F7",E="Use qx.event.util.Keyboard.isIdentifiableKeyCode instead.",C="F9",I="F10",G="off",v="autoComplete",L="Enter",K="NumLock",J="useraction",u="keyinput",w="mshtml",x="webkit",z="engine.version",B="keyup",D="keypress",F="engine.name",H="keydown";qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(W){qx.core.Object.call(this);this.__dB=W;this.__ce=W.getWindow();if((qx.core.Environment.get(F)==e)){this.__dM=this.__ce;}
else {this.__dM=this.__ce.document.documentElement;}
;this.__eD={};this._initKeyObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(X){qx.log.Logger.deprecatedMethodWarning(arguments.callee,T);return qx.event.util.Keyboard.isValidKeyIdentifier(X);}
,isPrintableKeyIdentifier:function(Y){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);return qx.event.util.Keyboard.isPrintableKeyIdentifier(Y);}
},members:{__eE:null,__dB:null,__ce:null,__dM:null,__eD:null,__eF:null,__eG:null,__eH:null,canHandleEvent:function(ba,bb){}
,registerEvent:function(bc,bd,be){}
,unregisterEvent:function(bf,bg,bh){}
,_fireInputEvent:function(bi,bj){var bk=this.__eI();if(bk&&bk.offsetWidth!=0){var event=qx.event.Registration.createEvent(u,qx.event.type.KeyInput,[bi,bk,bj]);this.__dB.dispatchEvent(bk,event);}
;if(this.__ce){qx.event.Registration.fireEvent(this.__ce,J,qx.event.type.Data,[u]);}
;}
,_fireSequenceEvent:function(bl,bm,bn){var bo=this.__eI();var bp=bl.keyCode;var event=qx.event.Registration.createEvent(bm,qx.event.type.KeySequence,[bl,bo,bn]);this.__dB.dispatchEvent(bo,event);if(qx.core.Environment.get(F)==w||qx.core.Environment.get(F)==x){if(bm==H&&event.getDefaultPrevented()){if(!qx.event.util.Keyboard.isNonPrintableKeyCode(bp)&&!this._emulateKeyPress[bp]){this._fireSequenceEvent(bl,D,bn);}
;}
;}
;if(this.__ce){qx.event.Registration.fireEvent(this.__ce,J,qx.event.type.Data,[bm]);}
;}
,__eI:function(){var bq=this.__dB.getHandler(qx.event.handler.Focus);var br=bq.getActive();if(!br||br.offsetWidth==0){br=bq.getFocus();}
;if(!br||br.offsetWidth==0){br=this.__dB.getWindow().document.body;}
;return br;}
,_initKeyObserver:function(){this.__eE=qx.lang.Function.listener(this.__eJ,this);this.__eH=qx.lang.Function.listener(this.__eL,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dM,B,this.__eE);Event.addNativeListener(this.__dM,H,this.__eE);Event.addNativeListener(this.__dM,D,this.__eH);}
,_stopKeyObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__dM,B,this.__eE);Event.removeNativeListener(this.__dM,H,this.__eE);Event.removeNativeListener(this.__dM,D,this.__eH);for(var bt in (this.__eG||{})){var bs=this.__eG[bt];Event.removeNativeListener(bs.target,D,bs.callback);}
;delete (this.__eG);}
,__eJ:qx.event.GlobalError.observeMethod(qx.core.Environment.select(F,{"mshtml":function(bu){bu=window.event||bu;var bx=bu.keyCode;var bv=0;var bw=bu.type;if(!(this.__eD[bx]==H&&bw==H)){this._idealKeyHandler(bx,bv,bw,bu);}
;if(bw==H){if(qx.event.util.Keyboard.isNonPrintableKeyCode(bx)||this._emulateKeyPress[bx]){this._idealKeyHandler(bx,bv,D,bu);}
;}
;this.__eD[bx]=bw;}
,"gecko":function(by){var bA=0;var bC=by.keyCode;var bB=by.type;var bz=qx.event.util.Keyboard;if(qx.core.Environment.get(i)==r){var bD=bC?bz.keyCodeToIdentifier(bC):bz.charCodeToIdentifier(bA);if(!(this.__eD[bD]==H&&bB==H)){this._idealKeyHandler(bC,bA,bB,by);}
;this.__eD[bD]=bB;}
else {this._idealKeyHandler(bC,bA,bB,by);}
;this.__eK(by.target,bB,bC);}
,"webkit":function(bE){var bH=0;var bF=0;var bG=bE.type;if(parseFloat(qx.core.Environment.get(z))<525.13){if(bG==B||bG==H){bH=this._charCode2KeyCode[bE.charCode]||bE.keyCode;}
else {if(this._charCode2KeyCode[bE.charCode]){bH=this._charCode2KeyCode[bE.charCode];}
else {bF=bE.charCode;}
;}
;this._idealKeyHandler(bH,bF,bG,bE);}
else {bH=bE.keyCode;this._idealKeyHandler(bH,bF,bG,bE);if(bG==H){if(qx.event.util.Keyboard.isNonPrintableKeyCode(bH)||this._emulateKeyPress[bH]){this._idealKeyHandler(bH,bF,D,bE);}
;}
;this.__eD[bH]=bG;}
;}
,"opera":function(bI){this.__eF=bI.keyCode;this._idealKeyHandler(bI.keyCode,0,bI.type,bI);}
})),__eK:qx.core.Environment.select(F,{"gecko":function(bJ,bK,bL){if(bK===H&&(bL==33||bL==34||bL==38||bL==40)&&bJ.type==j&&bJ.tagName.toLowerCase()===O&&bJ.getAttribute(v)!==G){if(!this.__eG){this.__eG={};}
;var bN=qx.core.ObjectRegistry.toHashCode(bJ);if(this.__eG[bN]){return;}
;var self=this;this.__eG[bN]={target:bJ,callback:function(bO){qx.bom.Event.stopPropagation(bO);self.__eL(bO);}
};var bM=qx.event.GlobalError.observeMethod(this.__eG[bN].callback);qx.bom.Event.addNativeListener(bJ,D,bM);}
;}
,"default":null}),__eL:qx.event.GlobalError.observeMethod(qx.core.Environment.select(F,{"mshtml":function(bP){bP=window.event||bP;if(this._charCode2KeyCode[bP.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bP.keyCode],0,bP.type,bP);}
else {this._idealKeyHandler(0,bP.keyCode,bP.type,bP);}
;}
,"gecko":function(bQ){var bR=bQ.charCode;var bS=bQ.type;this._idealKeyHandler(bQ.keyCode,bR,bS,bQ);}
,"webkit":function(bT){if(parseFloat(qx.core.Environment.get(z))<525.13){var bW=0;var bU=0;var bV=bT.type;if(bV==B||bV==H){bW=this._charCode2KeyCode[bT.charCode]||bT.keyCode;}
else {if(this._charCode2KeyCode[bT.charCode]){bW=this._charCode2KeyCode[bT.charCode];}
else {bU=bT.charCode;}
;}
;this._idealKeyHandler(bW,bU,bV,bT);}
else {if(this._charCode2KeyCode[bT.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bT.keyCode],0,bT.type,bT);}
else {this._idealKeyHandler(0,bT.keyCode,bT.type,bT);}
;}
;}
,"opera":function(bX){var ca=bX.keyCode;var bY=bX.type;if(ca!=this.__eF){this._idealKeyHandler(0,this.__eF,bY,bX);}
else {if(qx.event.util.Keyboard.keyCodeToIdentifierMap[bX.keyCode]){this._idealKeyHandler(bX.keyCode,0,bX.type,bX);}
else {this._idealKeyHandler(0,bX.keyCode,bX.type,bX);}
;}
;}
})),_idealKeyHandler:function(cb,cc,cd,ce){var cf;if(cb||(!cb&&!cc)){cf=qx.event.util.Keyboard.keyCodeToIdentifier(cb);this._fireSequenceEvent(ce,cd,cf);}
else {cf=qx.event.util.Keyboard.charCodeToIdentifier(cc);this._fireSequenceEvent(ce,D,cf);this._fireInputEvent(ce,cc);}
;}
,_emulateKeyPress:qx.core.Environment.select(F,{"mshtml":{'8':true,'9':true},"webkit":{'8':true,'9':true,'27':true},"default":{}}),_isNonPrintableKeyCode:function(cg){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);return qx.event.util.Keyboard.isNonPrintableKeyCode(cg);}
,_isIdentifiableKeyCode:function(ch){qx.log.Logger.deprecatedMethodWarning(arguments.callee,E);return qx.event.util.Keyboard.isIdentifiableKeyCode(ch);}
,_keyCodeToIdentifier:function(ci){qx.log.Logger.deprecatedMethodWarning(arguments.callee,S);return qx.event.util.Keyboard.keyCodeToIdentifier(ci);}
,_charCodeToIdentifier:function(cj){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);return qx.event.util.Keyboard.charCodeToIdentifier(cj);}
,_identifierToKeyCode:function(ck){return qx.event.util.Keyboard.identifierToKeyCodeMap[ck]||ck.charCodeAt(0);}
},destruct:function(){this._stopKeyObserver();this.__eF=this.__dB=this.__ce=this.__dM=this.__eD=null;}
,defer:function(cl,cm){qx.event.Registration.addHandler(cl);if((qx.core.Environment.get(F)==w)){cm._charCode2KeyCode={'13':13,'27':27};}
else if((qx.core.Environment.get(F)==x)){if(parseFloat(qx.core.Environment.get(z))<525.13){cm._charCode2KeyCode={'63289':cm._identifierToKeyCode(K),'63276':cm._identifierToKeyCode(f),'63277':cm._identifierToKeyCode(A),'63275':cm._identifierToKeyCode(N),'63273':cm._identifierToKeyCode(p),'63234':cm._identifierToKeyCode(c),'63232':cm._identifierToKeyCode(V),'63235':cm._identifierToKeyCode(l),'63233':cm._identifierToKeyCode(a),'63272':cm._identifierToKeyCode(M),'63302':cm._identifierToKeyCode(Q),'63236':cm._identifierToKeyCode(d),'63237':cm._identifierToKeyCode(m),'63238':cm._identifierToKeyCode(U),'63239':cm._identifierToKeyCode(t),'63240':cm._identifierToKeyCode(b),'63241':cm._identifierToKeyCode(R),'63242':cm._identifierToKeyCode(y),'63243':cm._identifierToKeyCode(P),'63244':cm._identifierToKeyCode(C),'63245':cm._identifierToKeyCode(I),'63246':cm._identifierToKeyCode(h),'63247':cm._identifierToKeyCode(s),'63248':cm._identifierToKeyCode(g),'3':cm._identifierToKeyCode(L),'12':cm._identifierToKeyCode(K),'13':cm._identifierToKeyCode(L)};}
else {cm._charCode2KeyCode={'13':13,'27':27};}
;}
;}
});}
)();
(function(){var a="qx.event.type.KeyInput";qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);this._charCode=d;return this;}
,clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);f._charCode=this._charCode;return f;}
,getCharCode:function(){return this._charCode;}
,getChar:function(){return String.fromCharCode(this._charCode);}
}});}
)();
(function(){var a="qx.event.type.KeySequence";qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);this._keyCode=b.keyCode;this._identifier=d;return this;}
,clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);f._keyCode=this._keyCode;f._identifier=this._identifier;return f;}
,getKeyIdentifier:function(){return this._identifier;}
,getKeyCode:function(){return this._keyCode;}
,isPrintable:function(){return qx.event.util.Keyboard.isPrintableKeyIdentifier(this._identifier);}
}});}
)();
(function(){var j="qx.event.handler.Focus",i="_applyFocus",h="deactivate",g="textarea",f="_applyActive",e='character',d="input",c="qxSelectable",b="tabIndex",a="off",z="activate",y="mshtml",x="qxKeepFocus",w="qxKeepActive",v="DOMFocusIn",u="draggesture",t="focusin",s="focusout",r="selectstart",q="DOMFocusOut",o="on",p="blur",m="focus",n="mousedown",k="mouseup",l="engine.name";qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(A){qx.core.Object.call(this);this._manager=A;this._window=A.getWindow();this._document=this._window.document;this._root=this._document.documentElement;this._body=this._document.body;this._initObserver();}
,properties:{active:{apply:f,nullable:true},focus:{apply:i,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__eM:null,__eN:null,__eO:null,__eP:null,__eQ:null,__eR:null,__eS:null,__eT:null,__eU:null,__eV:null,canHandleEvent:function(B,C){}
,registerEvent:function(D,E,F){}
,unregisterEvent:function(G,H,I){}
,focus:function(J){if((qx.core.Environment.get(l)==y)){window.setTimeout(function(){try{J.focus();var K=qx.bom.Selection.get(J);if(K.length==0){var L=J.createTextRange();L.moveStart(e,J.value.length);L.collapse();L.select();}
;}
catch(M){}
;}
,0);}
else {try{J.focus();}
catch(N){}
;}
;this.setFocus(J);this.setActive(J);}
,activate:function(O){this.setActive(O);}
,blur:function(P){try{P.blur();}
catch(Q){}
;if(this.getActive()===P){this.resetActive();}
;if(this.getFocus()===P){this.resetFocus();}
;}
,deactivate:function(R){if(this.getActive()===R){this.resetActive();}
;}
,tryActivate:function(S){var T=this.__fk(S);if(T){this.setActive(T);}
;}
,__es:function(U,V,W,X){var ba=qx.event.Registration;var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);ba.dispatchEvent(U,Y);}
,_windowFocused:true,__eW:function(){if(this._windowFocused){this._windowFocused=false;this.__es(this._window,null,p,false);}
;}
,__eX:function(){if(!this._windowFocused){this._windowFocused=true;this.__es(this._window,null,m,false);}
;}
,_initObserver:qx.core.Environment.select(l,{"gecko":function(){this.__eM=qx.lang.Function.listener(this.__fe,this);this.__eN=qx.lang.Function.listener(this.__ff,this);this.__eO=qx.lang.Function.listener(this.__fd,this);this.__eP=qx.lang.Function.listener(this.__fc,this);this.__eQ=qx.lang.Function.listener(this.__eY,this);qx.bom.Event.addNativeListener(this._document,n,this.__eM,true);qx.bom.Event.addNativeListener(this._document,k,this.__eN,true);qx.bom.Event.addNativeListener(this._window,m,this.__eO,true);qx.bom.Event.addNativeListener(this._window,p,this.__eP,true);qx.bom.Event.addNativeListener(this._window,u,this.__eQ,true);}
,"mshtml":function(){this.__eM=qx.lang.Function.listener(this.__fe,this);this.__eN=qx.lang.Function.listener(this.__ff,this);this.__eS=qx.lang.Function.listener(this.__fa,this);this.__eT=qx.lang.Function.listener(this.__fb,this);this.__eR=qx.lang.Function.listener(this.__fh,this);qx.bom.Event.addNativeListener(this._document,n,this.__eM);qx.bom.Event.addNativeListener(this._document,k,this.__eN);qx.bom.Event.addNativeListener(this._document,t,this.__eS);qx.bom.Event.addNativeListener(this._document,s,this.__eT);qx.bom.Event.addNativeListener(this._document,r,this.__eR);}
,"webkit":function(){this.__eM=qx.lang.Function.listener(this.__fe,this);this.__eN=qx.lang.Function.listener(this.__ff,this);this.__eT=qx.lang.Function.listener(this.__fb,this);this.__eO=qx.lang.Function.listener(this.__fd,this);this.__eP=qx.lang.Function.listener(this.__fc,this);this.__eR=qx.lang.Function.listener(this.__fh,this);qx.bom.Event.addNativeListener(this._document,n,this.__eM,true);qx.bom.Event.addNativeListener(this._document,k,this.__eN,true);qx.bom.Event.addNativeListener(this._document,r,this.__eR,false);qx.bom.Event.addNativeListener(this._window,q,this.__eT,true);qx.bom.Event.addNativeListener(this._window,m,this.__eO,true);qx.bom.Event.addNativeListener(this._window,p,this.__eP,true);}
,"opera":function(){this.__eM=qx.lang.Function.listener(this.__fe,this);this.__eN=qx.lang.Function.listener(this.__ff,this);this.__eS=qx.lang.Function.listener(this.__fa,this);this.__eT=qx.lang.Function.listener(this.__fb,this);qx.bom.Event.addNativeListener(this._document,n,this.__eM,true);qx.bom.Event.addNativeListener(this._document,k,this.__eN,true);qx.bom.Event.addNativeListener(this._window,v,this.__eS,true);qx.bom.Event.addNativeListener(this._window,q,this.__eT,true);}
}),_stopObserver:qx.core.Environment.select(l,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,n,this.__eM,true);qx.bom.Event.removeNativeListener(this._document,k,this.__eN,true);qx.bom.Event.removeNativeListener(this._window,m,this.__eO,true);qx.bom.Event.removeNativeListener(this._window,p,this.__eP,true);qx.bom.Event.removeNativeListener(this._window,u,this.__eQ,true);}
,"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,n,this.__eM);qx.bom.Event.removeNativeListener(this._document,k,this.__eN);qx.bom.Event.removeNativeListener(this._document,t,this.__eS);qx.bom.Event.removeNativeListener(this._document,s,this.__eT);qx.bom.Event.removeNativeListener(this._document,r,this.__eR);}
,"webkit":function(){qx.bom.Event.removeNativeListener(this._document,n,this.__eM,true);qx.bom.Event.removeNativeListener(this._document,k,this.__eN,true);qx.bom.Event.removeNativeListener(this._document,r,this.__eR,false);qx.bom.Event.removeNativeListener(this._window,q,this.__eT,true);qx.bom.Event.removeNativeListener(this._window,m,this.__eO,true);qx.bom.Event.removeNativeListener(this._window,p,this.__eP,true);}
,"opera":function(){qx.bom.Event.removeNativeListener(this._document,n,this.__eM,true);qx.bom.Event.removeNativeListener(this._document,k,this.__eN,true);qx.bom.Event.removeNativeListener(this._window,v,this.__eS,true);qx.bom.Event.removeNativeListener(this._window,q,this.__eT,true);}
}),__eY:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);if(!this.__fl(bc)){qx.bom.Event.preventDefault(bb);}
;}
,"default":null})),__fa:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bd){this.__eX();var bf=qx.bom.Event.getTarget(bd);var be=this.__fj(bf);if(be){this.setFocus(be);}
;this.tryActivate(bf);}
,"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);if(bh==this._document||bh==this._window){this.__eX();if(this.__eU){this.setFocus(this.__eU);delete this.__eU;}
;if(this.__eV){this.setActive(this.__eV);delete this.__eV;}
;}
else {this.setFocus(bh);this.tryActivate(bh);if(!this.__fl(bh)){bh.selectionStart=0;bh.selectionEnd=0;}
;}
;}
,"default":null})),__fb:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);if(bj==null){this.__eW();this.resetFocus();this.resetActive();}
;}
,"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);if(bl===this.getFocus()){this.resetFocus();}
;if(bl===this.getActive()){this.resetActive();}
;}
,"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);if(bn==this._document){this.__eW();this.__eU=this.getFocus();this.__eV=this.getActive();this.resetFocus();this.resetActive();}
else {if(bn===this.getFocus()){this.resetFocus();}
;if(bn===this.getActive()){this.resetActive();}
;}
;}
,"default":null})),__fc:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);if(bp===this._window||bp===this._document){this.__eW();this.resetActive();this.resetFocus();}
;}
,"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);if(br===this._window||br===this._document){this.__eW();this.__eU=this.getFocus();this.__eV=this.getActive();this.resetActive();this.resetFocus();}
;}
,"default":null})),__fd:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);if(bt===this._window||bt===this._document){this.__eX();bt=this._body;}
;this.setFocus(bt);this.tryActivate(bt);}
,"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);if(bv===this._window||bv===this._document){this.__eX();if(this.__eU){this.setFocus(this.__eU);delete this.__eU;}
;if(this.__eV){this.setActive(this.__eV);delete this.__eV;}
;}
else {this.setFocus(bv);this.tryActivate(bv);}
;}
,"default":null})),__fe:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bw){var by=qx.bom.Event.getTarget(bw);var bx=this.__fj(by);if(bx){if(!this.__fl(by)){by.unselectable=o;try{document.selection.empty();}
catch(bz){}
;try{bx.focus();}
catch(bA){}
;}
;}
else {qx.bom.Event.preventDefault(bw);if(!this.__fl(by)){by.unselectable=o;}
;}
;}
,"webkit|gecko":function(bB){var bD=qx.bom.Event.getTarget(bB);var bC=this.__fj(bD);if(bC){this.setFocus(bC);}
else {qx.bom.Event.preventDefault(bB);}
;}
,"opera":function(bE){var bH=qx.bom.Event.getTarget(bE);var bF=this.__fj(bH);if(!this.__fl(bH)){qx.bom.Event.preventDefault(bE);if(bF){var bG=this.getFocus();if(bG&&bG.selectionEnd){bG.selectionStart=0;bG.selectionEnd=0;bG.blur();}
;if(bF){this.setFocus(bF);}
;}
;}
else if(bF){this.setFocus(bF);}
;}
,"default":null})),__ff:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bI){var bJ=qx.bom.Event.getTarget(bI);if(bJ.unselectable){bJ.unselectable=a;}
;this.tryActivate(this.__fg(bJ));}
,"gecko":function(bK){var bL=qx.bom.Event.getTarget(bK);while(bL&&bL.offsetWidth===undefined){bL=bL.parentNode;}
;if(bL){this.tryActivate(bL);}
;}
,"webkit|opera":function(bM){var bN=qx.bom.Event.getTarget(bM);this.tryActivate(this.__fg(bN));}
,"default":null})),__fg:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml|webkit":function(bO){var bP=this.getFocus();if(bP&&bO!=bP&&(bP.nodeName.toLowerCase()===d||bP.nodeName.toLowerCase()===g)){bO=bP;}
;return bO;}
,"default":function(bQ){return bQ;}
})),__fh:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml|webkit":function(bR){var bS=qx.bom.Event.getTarget(bR);if(!this.__fl(bS)){qx.bom.Event.preventDefault(bR);}
;}
,"default":null})),__fi:function(bT){var bU=qx.bom.element.Attribute.get(bT,b);if(bU>=1){return true;}
;var bV=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;if(bU>=0&&bV[bT.tagName]){return true;}
;return false;}
,__fj:function(bW){while(bW&&bW.nodeType===1){if(bW.getAttribute(x)==o){return null;}
;if(this.__fi(bW)){return bW;}
;bW=bW.parentNode;}
;return this._body;}
,__fk:function(bX){var bY=bX;while(bX&&bX.nodeType===1){if(bX.getAttribute(w)==o){return null;}
;bX=bX.parentNode;}
;return bY;}
,__fl:function(ca){while(ca&&ca.nodeType===1){var cb=ca.getAttribute(c);if(cb!=null){return cb===o;}
;ca=ca.parentNode;}
;return true;}
,_applyActive:function(cc,cd){if(cd){this.__es(cd,cc,h,true);}
;if(cc){this.__es(cc,cd,z,true);}
;}
,_applyFocus:function(ce,cf){if(cf){this.__es(cf,ce,s,true);}
;if(ce){this.__es(ce,cf,t,true);}
;if(cf){this.__es(cf,ce,p,false);}
;if(ce){this.__es(ce,cf,m,false);}
;}
},destruct:function(){this._stopObserver();this._manager=this._window=this._document=this._root=this._body=this.__fm=null;}
,defer:function(cg){qx.event.Registration.addHandler(cg);var ch=cg.FOCUSABLE_ELEMENTS;for(var ci in ch){ch[ci.toUpperCase()]=1;}
;}
});}
)();
(function(){var k="qx.bom.Selection",j="button",i="#text",h="body",g='character',f="input",e="StartToStart",d="textarea",c="EndToEnd",b="character",a="engine.name";qx.Class.define(k,{statics:{getSelectionObject:qx.core.Environment.select(a,{"mshtml":function(l){return l.selection;}
,"default":function(m){return qx.dom.Node.getWindow(m).getSelection();}
}),get:qx.core.Environment.select(a,{"mshtml":function(n){var o=qx.bom.Range.get(qx.dom.Node.getDocument(n));return o.text;}
,"default":function(p){if(this.__fn(p)){return p.value.substring(p.selectionStart,p.selectionEnd);}
else {return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();}
;}
}),getLength:qx.core.Environment.select(a,{"mshtml":function(q){var s=this.get(q);var r=qx.util.StringSplit.split(s,/\r\n/);return s.length-(r.length-1);}
,"opera":function(t){var y,w,u;if(this.__fn(t)){var x=t.selectionStart;var v=t.selectionEnd;y=t.value.substring(x,v);w=v-x;}
else {y=qx.bom.Selection.get(t);w=y.length;}
;u=qx.util.StringSplit.split(y,/\r\n/);return w-(u.length-1);}
,"default":function(z){if(this.__fn(z)){return z.selectionEnd-z.selectionStart;}
else {return this.get(z).length;}
;}
}),getStart:qx.core.Environment.select(a,{"mshtml":function(A){if(this.__fn(A)){var F=qx.bom.Range.get();if(!A.contains(F.parentElement())){return -1;}
;var G=qx.bom.Range.get(A);var E=A.value.length;G.moveToBookmark(F.getBookmark());G.moveEnd(g,E);return E-G.text.length;}
else {var G=qx.bom.Range.get(A);var C=G.parentElement();var H=qx.bom.Range.get();try{H.moveToElementText(C);}
catch(J){return 0;}
;var B=qx.bom.Range.get(qx.dom.Node.getBodyElement(A));B.setEndPoint(e,G);B.setEndPoint(c,H);if(H.compareEndPoints(e,B)==0){return 0;}
;var D;var I=0;while(true){D=B.moveStart(b,-1);if(H.compareEndPoints(e,B)==0){break;}
;if(D==0){break;}
else {I++;}
;}
;return ++I;}
;}
,"gecko|webkit":function(K){if(this.__fn(K)){return K.selectionStart;}
else {var M=qx.dom.Node.getDocument(K);var L=this.getSelectionObject(M);if(L.anchorOffset<L.focusOffset){return L.anchorOffset;}
else {return L.focusOffset;}
;}
;}
,"default":function(N){if(this.__fn(N)){return N.selectionStart;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;}
;}
}),getEnd:qx.core.Environment.select(a,{"mshtml":function(O){if(this.__fn(O)){var T=qx.bom.Range.get();if(!O.contains(T.parentElement())){return -1;}
;var U=qx.bom.Range.get(O);var S=O.value.length;U.moveToBookmark(T.getBookmark());U.moveStart(g,-S);return U.text.length;}
else {var U=qx.bom.Range.get(O);var Q=U.parentElement();var V=qx.bom.Range.get();try{V.moveToElementText(Q);}
catch(X){return 0;}
;var S=V.text.length;var P=qx.bom.Range.get(qx.dom.Node.getBodyElement(O));P.setEndPoint(c,U);P.setEndPoint(e,V);if(V.compareEndPoints(c,P)==0){return S-1;}
;var R;var W=0;while(true){R=P.moveEnd(b,1);if(V.compareEndPoints(c,P)==0){break;}
;if(R==0){break;}
else {W++;}
;}
;return S-(++W);}
;}
,"gecko|webkit":function(Y){if(this.__fn(Y)){return Y.selectionEnd;}
else {var bb=qx.dom.Node.getDocument(Y);var ba=this.getSelectionObject(bb);if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;}
else {return ba.anchorOffset;}
;}
;}
,"default":function(bc){if(this.__fn(bc)){return bc.selectionEnd;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;}
;}
}),__fn:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==f||bd.nodeName.toLowerCase()==d);}
,set:qx.core.Environment.select(a,{"mshtml":function(be,bf,bg){var bh;if(qx.dom.Node.isDocument(be)){be=be.body;}
;if(qx.dom.Node.isElement(be)||qx.dom.Node.isText(be)){switch(be.nodeName.toLowerCase()){case f:case d:case j:if(bg===undefined){bg=be.value.length;}
;if(bf>=0&&bf<=be.value.length&&bg>=0&&bg<=be.value.length){bh=qx.bom.Range.get(be);bh.collapse(true);bh.moveStart(b,bf);bh.moveEnd(b,bg-bf);bh.select();return true;}
;break;case i:if(bg===undefined){bg=be.nodeValue.length;}
;if(bf>=0&&bf<=be.nodeValue.length&&bg>=0&&bg<=be.nodeValue.length){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));bh.moveToElementText(be.parentNode);bh.collapse(true);bh.moveStart(b,bf);bh.moveEnd(b,bg-bf);bh.select();return true;}
;break;default:if(bg===undefined){bg=be.childNodes.length-1;}
;if(be.childNodes[bf]&&be.childNodes[bg]){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));bh.moveToElementText(be.childNodes[bf]);bh.collapse(true);var bi=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));bi.moveToElementText(be.childNodes[bg]);bh.setEndPoint(c,bi);bh.select();return true;}
;};}
;return false;}
,"default":function(bj,bk,bl){var bp=bj.nodeName.toLowerCase();if(qx.dom.Node.isElement(bj)&&(bp==f||bp==d)){if(bl===undefined){bl=bj.value.length;}
;if(bk>=0&&bk<=bj.value.length&&bl>=0&&bl<=bj.value.length){bj.focus();bj.select();bj.setSelectionRange(bk,bl);return true;}
;}
else {var bn=false;var bo=qx.dom.Node.getWindow(bj).getSelection();var bm=qx.bom.Range.get(bj);if(qx.dom.Node.isText(bj)){if(bl===undefined){bl=bj.length;}
;if(bk>=0&&bk<bj.length&&bl>=0&&bl<=bj.length){bn=true;}
;}
else if(qx.dom.Node.isElement(bj)){if(bl===undefined){bl=bj.childNodes.length-1;}
;if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;}
;}
else if(qx.dom.Node.isDocument(bj)){bj=bj.body;if(bl===undefined){bl=bj.childNodes.length-1;}
;if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;}
;}
;;if(bn){if(!bo.isCollapsed){bo.collapseToStart();}
;bm.setStart(bj,bk);if(qx.dom.Node.isText(bj)){bm.setEnd(bj,bl);}
else {bm.setEndAfter(bj.childNodes[bl]);}
;if(bo.rangeCount>0){bo.removeAllRanges();}
;bo.addRange(bm);return true;}
;}
;return false;}
}),setAll:function(bq){return qx.bom.Selection.set(bq,0);}
,clear:qx.core.Environment.select(a,{"mshtml":function(br){var bs=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(br));var bt=qx.bom.Range.get(br);var parent=bt.parentElement();var bu=qx.bom.Range.get(qx.dom.Node.getDocument(br));if(parent==bu.parentElement()&&parent==br){bs.empty();}
;}
,"default":function(bv){var bx=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bv));var bz=bv.nodeName.toLowerCase();if(qx.dom.Node.isElement(bv)&&(bz==f||bz==d)){bv.setSelectionRange(0,0);qx.bom.Element.blur(bv);}
else if(qx.dom.Node.isDocument(bv)||bz==h){bx.collapse(bv.body?bv.body:bv,0);}
else {var by=qx.bom.Range.get(bv);if(!by.collapsed){var bA;var bw=by.commonAncestorContainer;if(qx.dom.Node.isElement(bv)&&qx.dom.Node.isText(bw)){bA=bw.parentNode;}
else {bA=bw;}
;if(bA==bv){bx.collapse(bv,0);}
;}
;}
;}
})}});}
)();
(function(){var l="qx.bom.Range",k="text",j="engine.name",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="body",b="button";qx.Class.define(l,{statics:{get:qx.core.Environment.select(j,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case d:switch(m.type){case k:case i:case c:case b:case f:case h:case g:return m.createTextRange();break;default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();};break;case e:case a:case b:return m.createTextRange();break;default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();};}
else {if(m==null){m=window;}
;return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();}
;}
,"default":function(n){var o=qx.dom.Node.getDocument(n);var p=qx.bom.Selection.getSelectionObject(o);if(p.rangeCount>0){return p.getRangeAt(0);}
else {return o.createRange();}
;}
})}});}
)();
(function(){var j="m",h="g",g="^",f="qx.util.StringSplit",e="i",d="$(?!\\s)",c="[object RegExp]",b="y",a="";qx.Class.define(f,{statics:{split:function(k,l,m){if(Object.prototype.toString.call(l)!==c){return String.prototype.split.call(k,l,m);}
;var t=[],n=0,r=(l.ignoreCase?e:a)+(l.multiline?j:a)+(l.sticky?b:a),l=RegExp(l.source,r+h),q,u,o,p,s=/()??/.exec(a)[1]===undefined;k=k+a;if(!s){q=RegExp(g+l.source+d,r);}
;if(m===undefined||+m<0){m=Infinity;}
else {m=Math.floor(+m);if(!m){return [];}
;}
;while(u=l.exec(k)){o=u.index+u[0].length;if(o>n){t.push(k.slice(n,u.index));if(!s&&u.length>1){u[0].replace(q,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undefined){u[i]=undefined;}
;}
;}
);}
;if(u.length>1&&u.index<k.length){Array.prototype.push.apply(t,u.slice(1));}
;p=u[0].length;n=o;if(t.length>=m){break;}
;}
;if(l.lastIndex===u.index){l.lastIndex++;}
;}
;if(n===k.length){if(p||!l.test(a)){t.push(a);}
;}
else {t.push(k.slice(n));}
;return t.length>m?t.slice(0,m):t;}
}});}
)();
(function(){var k="engine.name",j="swipe",i="webkit",h="tap",g="x",f="y",e="qx.event.handler.TouchCore",d="touchcancel",c="touchmove",b="touchend",a="touchstart";qx.Bootstrap.define(e,{extend:Object,statics:{TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},construct:function(l,m){this.__fo=l;this.__fp=m;this._initTouchObserver();}
,members:{__fo:null,__fp:null,__fq:null,__fr:null,__fs:null,__ft:null,__fu:null,__fv:null,_initTouchObserver:function(){this.__fq=qx.lang.Function.listener(this._onTouchEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__fo,a,this.__fq);Event.addNativeListener(this.__fo,c,this.__fq);Event.addNativeListener(this.__fo,b,this.__fq);Event.addNativeListener(this.__fo,d,this.__fq);}
,_stopTouchObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__fo,a,this.__fq);Event.removeNativeListener(this.__fo,c,this.__fq);Event.removeNativeListener(this.__fo,b,this.__fq);Event.removeNativeListener(this.__fo,d,this.__fq);}
,_onTouchEvent:function(n){this._commonTouchEventHandler(n);}
,_commonTouchEventHandler:function(o,p){var p=p||o.type;if(p==a){this.__fr=this._getTarget(o);}
;this._fireEvent(o,p);this.__fw(o,p);}
,_getTarget:function(q){var r=qx.bom.Event.getTarget(q);if((qx.core.Environment.get(k)==i)){if(r&&r.nodeType==3){r=r.parentNode;}
;}
;return r;}
,_fireEvent:function(s,t,u){if(!u){u=this._getTarget(s);}
;var t=t||s.type;if(u&&u.nodeType&&this.__fp){this.__fp.emit(t,s);}
;}
,__fw:function(v,w,x){if(!x){x=this._getTarget(v);}
;var w=w||v.type;if(w==a){this.__fx(v,x);}
else if(w==c){this.__fy(v,x);}
else if(w==b){this.__fz(v,x);}
;;}
,__fx:function(y,z){var A=y.changedTouches[0];this.__fs=A.screenX;this.__ft=A.screenY;this.__fu=new Date().getTime();this.__fv=y.changedTouches.length===1;}
,__fy:function(B,C){if(this.__fv&&B.changedTouches.length>1){this.__fv=false;}
;}
,__fz:function(D,E){if(this.__fv){var F=D.changedTouches[0];var I={x:F.screenX-this.__fs,y:F.screenY-this.__ft};var J=qx.event.handler.TouchCore;var G;if(this.__fr==E&&Math.abs(I.x)<=J.TAP_MAX_DISTANCE&&Math.abs(I.y)<=J.TAP_MAX_DISTANCE){if(qx.event&&qx.event.type&&qx.event.type.Tap){G=qx.event.type.Tap;}
;this._fireEvent(D,h,E,G);}
else {var H=this.__fA(D,E,I);if(H){if(qx.event&&qx.event.type&&qx.event.type.Swipe){G=qx.event.type.Swipe;}
;D.swipe=H;this._fireEvent(D,j,E,G);}
;}
;}
;}
,__fA:function(K,L,M){var Q=qx.event.handler.TouchCore;var R=new Date().getTime()-this.__fu;var T=(Math.abs(M.x)>=Math.abs(M.y))?g:f;var N=M[T];var O=Q.SWIPE_DIRECTION[T][N<0?0:1];var S=(R!==0)?N/R:0;var P=null;if(Math.abs(S)>=Q.SWIPE_MIN_VELOCITY&&Math.abs(N)>=Q.SWIPE_MIN_DISTANCE){P={startTime:this.__fu,duration:R,axis:T,direction:O,distance:N,velocity:S};}
;return P;}
,dispose:function(){this._stopTouchObserver();this.__fr=this.__fo=this.__fp=null;}
}});}
)();
(function(){var c="touchcancel",b="qx.event.type.Touch",a="touchend";qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);e.pageX=d.pageX;e.pageY=d.pageY;e.offsetX=d.offsetX;e.offsetY=d.offsetY;e.layerX=(d.offsetX||d.layerX);e.layerY=(d.offsetY||d.layerY);e.scale=d.scale;e.rotation=d.rotation;e.srcElement=d.srcElement;e.targetTouches=[];for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];}
;e.changedTouches=[];for(i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];}
;e.touches=[];for(i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];}
;return e;}
,stop:function(){this.stopPropagation();}
,getAllTouches:function(){return this._native.touches;}
,getTargetTouches:function(){return this._native.targetTouches;}
,getChangedTargetTouches:function(){return this._native.changedTouches;}
,isMultiTouch:function(){return this.__fC().length>1;}
,getScale:function(){return this._native.scale;}
,getRotation:function(){return this._native.rotation;}
,getDocumentLeft:function(f){return this.__fB(f).pageX;}
,getDocumentTop:function(g){return this.__fB(g).pageY;}
,getScreenLeft:function(h){return this.__fB(h).screenX;}
,getScreenTop:function(j){return this.__fB(j).screenY;}
,getViewportLeft:function(k){return this.__fB(k).clientX;}
,getViewportTop:function(l){return this.__fB(l).clientY;}
,getIdentifier:function(m){return this.__fB(m).identifier;}
,__fB:function(n){n=n==null?0:n;return this.__fC()[n];}
,__fC:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());return o;}
,_isTouchEnd:function(){return (this.getType()==a||this.getType()==c);}
}});}
)();
(function(){var a="qx.event.type.Tap";qx.Class.define(a,{extend:qx.event.type.Touch,members:{_isTouchEnd:function(){return true;}
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
(function(){var l="event.pointer",k="onhashchange",j="event.help",i="event.touch",h="opera",g="event.hashchange",f="onhelp",e="pointerEvents",d="documentMode",c="qx.bom.client.Event",a="ontouchstart",b="mshtml";qx.Bootstrap.define(c,{statics:{getTouch:function(){return (a in window);}
,getPointer:function(){if(e in document.documentElement.style){var m=qx.bom.client.Engine.getName();return m!=h&&m!=b;}
;return false;}
,getHelp:function(){return (f in document);}
,getHashChange:function(){var n=qx.bom.client.Engine.getName();var o=k in window;return (n!==b&&o)||(n===b&&d in document&&document.documentMode>=8&&o);}
},defer:function(p){qx.core.Environment.add(i,p.getTouch);qx.core.Environment.add(l,p.getPointer);qx.core.Environment.add(j,p.getHelp);qx.core.Environment.add(g,p.getHashChange);}
});}
)();
(function(){var e="resize",d="landscape",c="portrait",b="qx.event.handler.Orientation",a="orientationchange";qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);this.__dB=f;this.__ce=f.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dB:null,__ce:null,__fD:null,_currentOrientation:null,__fE:null,canHandleEvent:function(g,h){}
,registerEvent:function(i,j,k){}
,unregisterEvent:function(l,m,n){}
,_initObserver:function(){this.__fE=qx.lang.Function.listener(this._onNative,this);this.__fD=qx.bom.Event.supportsEvent(this.__ce,a)?a:e;var Event=qx.bom.Event;Event.addNativeListener(this.__ce,this.__fD,this.__fE);}
,_stopObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__ce,this.__fD,this.__fE);}
,_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;var p=q.getOrientation(o.target);if(this._currentOrientation!=p){this._currentOrientation=p;var r=q.isLandscape(o.target)?d:c;qx.event.Registration.fireEvent(this.__ce,a,qx.event.type.Orientation,[p,r]);}
;}
)},destruct:function(){this._stopObserver();this.__dB=this.__ce=null;}
,defer:function(s){qx.event.Registration.addHandler(s);}
});}
)();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";qx.Class.define(b,{extend:qx.event.type.Event,members:{__fF:null,__fG:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);this.__fF=d;this.__fG=e;return this;}
,clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);g.__fF=this.__fF;g.__fG=this.__fG;return g;}
,getOrientation:function(){return this.__fF;}
,isLandscape:function(){return this.__fG==c;}
,isPortrait:function(){return this.__fG==a;}
}});}
)();
(function(){var o="mshtml",n="engine.name",m="qx.event.handler.Touch",l="useraction",k="touchmove",j="qx.mobile.nativescroll",i="dispose",h="touchstart",g="mouseup",f="touchend",b="mousedown",d="mousemove",c="event.touch",a="qx.mobile.emulatetouch";qx.Class.define(m,{extend:qx.event.handler.TouchCore,implement:qx.event.IEventHandler,construct:function(p){this.__dB=p;this.__ce=p.getWindow();this.__dM=this.__ce.document;qx.event.handler.TouchCore.apply(this,[this.__dM]);this._initMouseObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"}},members:{__fH:null,__dB:null,__ce:null,__dM:null,__fI:false,canHandleEvent:function(q,r){}
,registerEvent:function(s,t,u){}
,unregisterEvent:function(v,w,x){}
,_fireEvent:function(y,z,A,B){if(!A){A=this._getTarget(y);}
;var z=z||y.type;if(A&&A.nodeType){qx.event.Registration.fireEvent(A,z,B||qx.event.type.Touch,[y,A,null,true,true]);}
;qx.event.Registration.fireEvent(this.__ce,l,qx.event.type.Data,[z]);}
,__fJ:qx.core.Environment.select(a,{"true":function(C){var D=C.type;var F=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;if(F[D]){D=F[D];if(D==h&&this.__fK(C)){this.__fI=true;}
else if(D==f){this.__fI=false;}
;var G=this.__fL(C);var E=(D==f?[]:[G]);C.touches=E;C.targetTouches=E;C.changedTouches=[G];}
;return D;}
,"default":qx.lang.Function.empty}),__fK:qx.core.Environment.select(a,{"true":function(H){if((qx.core.Environment.get(n)==o)){var I=1;}
else {var I=0;}
;return H.button==I;}
,"default":qx.lang.Function.empty}),__fL:qx.core.Environment.select(a,{"true":function(J){var K=this._getTarget(J);return {clientX:J.clientX,clientY:J.clientY,screenX:J.screenX,screenY:J.screenY,pageX:J.pageX,pageY:J.pageY,identifier:1,target:K};}
,"default":qx.lang.Function.empty}),_initMouseObserver:qx.core.Environment.select(a,{"true":function(){if(!qx.core.Environment.get(c)){this.__fH=qx.lang.Function.listener(this._onMouseEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dM,b,this.__fH);Event.addNativeListener(this.__dM,d,this.__fH);Event.addNativeListener(this.__dM,g,this.__fH);}
;}
,"default":qx.lang.Function.empty}),_stopMouseObserver:qx.core.Environment.select(a,{"true":function(){if(!qx.core.Environment.get(c)){var Event=qx.bom.Event;Event.removeNativeListener(this.__dM,b,this.__fH);Event.removeNativeListener(this.__dM,d,this.__fH);Event.removeNativeListener(this.__dM,g,this.__fH);}
;}
,"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(L){this._commonTouchEventHandler(L);}
),_onMouseEvent:qx.core.Environment.select(a,{"true":qx.event.GlobalError.observeMethod(function(M){if(!qx.core.Environment.get(c)){if(M.type==d&&!this.__fI){return;}
;var N=this.__fJ(M);this._commonTouchEventHandler(M,N);}
;}
),"default":qx.lang.Function.empty}),dispose:function(){this.__fM(i);this._stopMouseObserver();this.__dB=this.__ce=this.__dM=null;}
,__fM:function(O,P){qx.event.handler.TouchCore.prototype[O].apply(this,P||[]);}
},defer:function(Q){qx.event.Registration.addHandler(Q);if(qx.core.Environment.get(c)){if(qx.core.Environment.get(j)==false){document.addEventListener(k,function(e){e.preventDefault();}
);}
;qx.event.Registration.getManager(document).getHandler(Q);}
;}
});}
)();
(function(){var m="select-multiple",k="value",j="select",h="qx.event.handler.Input",g="checked",f="blur",d="keydown",c="propertychange",b="browser.version",a="browser.documentmode",A="opera",z="keyup",y="mshtml",x="keypress",w="engine.version",v="radio",u="checkbox",t="text",s="textarea",r="password",p="change",q="engine.name",n="input";qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);if((qx.core.Environment.get(q)==A)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);}
;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__fN:false,__fO:null,__fP:null,__fQ:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();if(C===n&&(D===n||D===s)){return true;}
;if(C===p&&(D===n||D===s||D===j)){return true;}
;return false;}
,registerEvent:function(E,F,G){if(qx.core.Environment.get(q)==y&&(qx.core.Environment.get(w)<9||(qx.core.Environment.get(w)>=9&&qx.core.Environment.get(a)<9))){if(!E.__fR){var H=E.tagName.toLowerCase();var I=E.type;if(I===t||I===r||H===s||I===u||I===v){qx.bom.Event.addNativeListener(E,c,this._onPropertyWrapper);}
;if(I!==u&&I!==v){qx.bom.Event.addNativeListener(E,p,this._onChangeValueWrapper);}
;if(I===t||I===r){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);qx.bom.Event.addNativeListener(E,x,this._onKeyPressWrapped);}
;E.__fR=true;}
;}
else {if(F===n){this.__fS(E);}
else if(F===p){if(E.type===v||E.type===u){qx.bom.Event.addNativeListener(E,p,this._onChangeCheckedWrapper);}
else {qx.bom.Event.addNativeListener(E,p,this._onChangeValueWrapper);}
;if((qx.core.Environment.get(q)==A)||(qx.core.Environment.get(q)==y)){if(E.type===t||E.type===r){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);qx.bom.Event.addNativeListener(E,x,this._onKeyPressWrapped);}
;}
;}
;}
;}
,__fS:qx.core.Environment.select(q,{"mshtml":function(J){if(qx.core.Environment.get(w)>=9&&qx.core.Environment.get(a)>=9){qx.bom.Event.addNativeListener(J,n,this._onInputWrapper);if(J.type===t||J.type===r||J.type===s){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,J);qx.bom.Event.addNativeListener(J,z,this._inputFixWrapper);}
;}
;}
,"webkit":function(K){var L=K.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(w))<532&&L==s){qx.bom.Event.addNativeListener(K,x,this._onInputWrapper);}
;qx.bom.Event.addNativeListener(K,n,this._onInputWrapper);}
,"opera":function(M){qx.bom.Event.addNativeListener(M,z,this._onKeyUpWrapper);qx.bom.Event.addNativeListener(M,d,this._onKeyDownWrapper);qx.bom.Event.addNativeListener(M,f,this._onBlurWrapper);qx.bom.Event.addNativeListener(M,n,this._onInputWrapper);}
,"default":function(N){qx.bom.Event.addNativeListener(N,n,this._onInputWrapper);}
}),unregisterEvent:function(O,P){if(qx.core.Environment.get(q)==y&&qx.core.Environment.get(w)<9&&qx.core.Environment.get(a)<9){if(O.__fR){var Q=O.tagName.toLowerCase();var R=O.type;if(R===t||R===r||Q===s||R===u||R===v){qx.bom.Event.removeNativeListener(O,c,this._onPropertyWrapper);}
;if(R!==u&&R!==v){qx.bom.Event.removeNativeListener(O,p,this._onChangeValueWrapper);}
;if(R===t||R===r){qx.bom.Event.removeNativeListener(O,x,this._onKeyPressWrapped);}
;try{delete O.__fR;}
catch(S){O.__fR=null;}
;}
;}
else {if(P===n){this.__fT(O);}
else if(P===p){if(O.type===v||O.type===u){qx.bom.Event.removeNativeListener(O,p,this._onChangeCheckedWrapper);}
else {qx.bom.Event.removeNativeListener(O,p,this._onChangeValueWrapper);}
;}
;if((qx.core.Environment.get(q)==A)||(qx.core.Environment.get(q)==y)){if(O.type===t||O.type===r){qx.bom.Event.removeNativeListener(O,x,this._onKeyPressWrapped);}
;}
;}
;}
,__fT:qx.core.Environment.select(q,{"mshtml":function(T){if(qx.core.Environment.get(w)>=9&&qx.core.Environment.get(a)>=9){qx.bom.Event.removeNativeListener(T,n,this._onInputWrapper);if(T.type===t||T.type===r||T.type===s){qx.bom.Event.removeNativeListener(T,z,this._inputFixWrapper);}
;}
;}
,"webkit":function(U){var V=U.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(w))<532&&V==s){qx.bom.Event.removeNativeListener(U,x,this._onInputWrapper);}
;qx.bom.Event.removeNativeListener(U,n,this._onInputWrapper);}
,"opera":function(W){qx.bom.Event.removeNativeListener(W,z,this._onKeyUpWrapper);qx.bom.Event.removeNativeListener(W,d,this._onKeyDownWrapper);qx.bom.Event.removeNativeListener(W,f,this._onBlurWrapper);qx.bom.Event.removeNativeListener(W,n,this._onInputWrapper);}
,"default":function(X){qx.bom.Event.removeNativeListener(X,n,this._onInputWrapper);}
}),_onKeyPress:qx.core.Environment.select(q,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__fP){this.__fP=Y.value;qx.event.Registration.fireEvent(Y,p,qx.event.type.Data,[Y.value]);}
;}
;}
,"default":null}),_inputFix:qx.core.Environment.select(q,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__fQ){this.__fQ=ba.value;qx.event.Registration.fireEvent(ba,n,qx.event.type.Data,[ba.value]);}
;}
;}
,"default":null}),_onKeyDown:qx.core.Environment.select(q,{"opera":function(e){if(e.keyCode===13){this.__fN=true;}
;}
,"default":null}),_onKeyUp:qx.core.Environment.select(q,{"opera":function(e){if(e.keyCode===13){this.__fN=false;}
;}
,"default":null}),_onBlur:qx.core.Environment.select(q,{"opera":function(e){if(this.__fO&&qx.core.Environment.get(b)<10.6){window.clearTimeout(this.__fO);}
;}
,"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);var bb=bc.tagName.toLowerCase();if(!this.__fN||bb!==n){if((qx.core.Environment.get(q)==A)&&qx.core.Environment.get(b)<10.6){this.__fO=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,n,qx.event.type.Data,[bc.value]);}
,0);}
else {qx.event.Registration.fireEvent(bc,n,qx.event.type.Data,[bc.value]);}
;}
;}
),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var be=qx.bom.Event.getTarget(e);var bd=be.value;if(be.type===m){var bd=[];for(var i=0,o=be.options,l=o.length;i<l;i++){if(o[i].selected){bd.push(o[i].value);}
;}
;}
;qx.event.Registration.fireEvent(be,p,qx.event.type.Data,[bd]);}
),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bf=qx.bom.Event.getTarget(e);if(bf.type===v){if(bf.checked){qx.event.Registration.fireEvent(bf,p,qx.event.type.Data,[bf.value]);}
;}
else {qx.event.Registration.fireEvent(bf,p,qx.event.type.Data,[bf.checked]);}
;}
),_onProperty:qx.core.Environment.select(q,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bg=qx.bom.Event.getTarget(e);var bh=e.propertyName;if(bh===k&&(bg.type===t||bg.type===r||bg.tagName.toLowerCase()===s)){if(!bg.$$inValueSet){qx.event.Registration.fireEvent(bg,n,qx.event.type.Data,[bg.value]);}
;}
else if(bh===g){if(bg.type===u){qx.event.Registration.fireEvent(bg,p,qx.event.type.Data,[bg.checked]);}
else if(bg.checked){qx.event.Registration.fireEvent(bg,p,qx.event.type.Data,[bg.value]);}
;}
;}
),"default":function(){}
})},defer:function(bi){qx.event.Registration.addHandler(bi);}
});}
)();
(function(){var a="qx.event.handler.Capture";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){}
,registerEvent:function(d,e,f){}
,unregisterEvent:function(g,h,i){}
},defer:function(j){qx.event.Registration.addHandler(j);}
});}
)();
(function(){var k="mousedown",j="qxDraggable",i="Escape",h="drag",g="Unsupported data type: ",f="drop",d="qxDroppable",c="qx.event.handler.DragDrop",b="This method must not be used outside the drop event listener!",a="!",H="droprequest",G="dragstart",F="dragchange",E="dragleave",D="dragover",C="left",B="Please use a droprequest listener to the drag source to fill the manager with data!",A="blur",z="mouseout",y="keydown",r="Control",s="Shift",p="mousemove",q="move",n="mouseover",o="Alt",l="keyup",m="mouseup",t="keypress",u="dragend",w="on",v="copy",x="alias";qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(I){qx.core.Object.call(this);this.__dB=I;this.__dM=I.getWindow().document.documentElement;this.__dB.addListener(this.__dM,k,this._onMouseDown,this);this.__gf();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__dB:null,__dM:null,__fU:null,__fV:null,__fW:null,__fX:null,__fY:null,__e:null,__ga:null,__gb:null,__gc:false,__gd:0,__ge:0,canHandleEvent:function(J,K){}
,registerEvent:function(L,M,N){}
,unregisterEvent:function(O,P,Q){}
,addType:function(R){this.__fW[R]=true;}
,addAction:function(S){this.__fX[S]=true;}
,supportsType:function(T){return !!this.__fW[T];}
,supportsAction:function(U){return !!this.__fX[U];}
,getData:function(V){if(!this.__gl||!this.__fU){throw new Error(b);}
;if(!this.__fW[V]){throw new Error(g+V+a);}
;if(!this.__e[V]){this.__ga=V;this.__es(H,this.__fV,this.__fU,false);}
;if(!this.__e[V]){throw new Error(B);}
;return this.__e[V]||null;}
,getCurrentAction:function(){return this.__gb;}
,addData:function(W,X){this.__e[W]=X;}
,getCurrentType:function(){return this.__ga;}
,isSessionActive:function(){return this.__gc;}
,__gf:function(){this.__fW={};this.__fX={};this.__fY={};this.__e={};}
,__gg:function(){if(this.__fV==null){return;}
;var bb=this.__fX;var Y=this.__fY;var ba=null;if(this.__gl){if(Y.Shift&&Y.Control&&bb.alias){ba=x;}
else if(Y.Shift&&Y.Alt&&bb.copy){ba=v;}
else if(Y.Shift&&bb.move){ba=q;}
else if(Y.Alt&&bb.alias){ba=x;}
else if(Y.Control&&bb.copy){ba=v;}
else if(bb.move){ba=q;}
else if(bb.copy){ba=v;}
else if(bb.alias){ba=x;}
;;;;;;;}
;if(ba!=this.__gb){this.__gb=ba;this.__es(F,this.__fV,this.__fU,false);}
;}
,__es:function(bc,bd,be,bf,bg){var bi=qx.event.Registration;var bh=bi.createEvent(bc,qx.event.type.Drag,[bf,bg]);if(bd!==be){bh.setRelatedTarget(be);}
;return bi.dispatchEvent(bd,bh);}
,__gh:function(bj){while(bj&&bj.nodeType==1){if(bj.getAttribute(j)==w){return bj;}
;bj=bj.parentNode;}
;return null;}
,__gi:function(bk){while(bk&&bk.nodeType==1){if(bk.getAttribute(d)==w){return bk;}
;bk=bk.parentNode;}
;return null;}
,__gj:function(){this.__fV=null;this.__dB.removeListener(this.__dM,p,this._onMouseMove,this,true);this.__dB.removeListener(this.__dM,m,this._onMouseUp,this,true);qx.event.Registration.removeListener(window,A,this._onWindowBlur,this);this.__gf();}
,__gk:function(){if(this.__gc){this.__dB.removeListener(this.__dM,n,this._onMouseOver,this,true);this.__dB.removeListener(this.__dM,z,this._onMouseOut,this,true);this.__dB.removeListener(this.__dM,y,this._onKeyDown,this,true);this.__dB.removeListener(this.__dM,l,this._onKeyUp,this,true);this.__dB.removeListener(this.__dM,t,this._onKeyPress,this,true);this.__es(u,this.__fV,this.__fU,false);this.__gc=false;}
;this.__gl=false;this.__fU=null;this.__gj();}
,__gl:false,_onWindowBlur:function(e){this.__gk();}
,_onKeyDown:function(e){var bl=e.getKeyIdentifier();switch(bl){case o:case r:case s:if(!this.__fY[bl]){this.__fY[bl]=true;this.__gg();}
;};}
,_onKeyUp:function(e){var bm=e.getKeyIdentifier();switch(bm){case o:case r:case s:if(this.__fY[bm]){this.__fY[bm]=false;this.__gg();}
;};}
,_onKeyPress:function(e){var bn=e.getKeyIdentifier();switch(bn){case i:this.__gk();};}
,_onMouseDown:function(e){if(this.__gc||e.getButton()!==C){return;}
;var bo=this.__gh(e.getTarget());if(bo){this.__gd=e.getDocumentLeft();this.__ge=e.getDocumentTop();this.__fV=bo;this.__dB.addListener(this.__dM,p,this._onMouseMove,this,true);this.__dB.addListener(this.__dM,m,this._onMouseUp,this,true);qx.event.Registration.addListener(window,A,this._onWindowBlur,this);}
;}
,_onMouseUp:function(e){if(this.__gl){this.__es(f,this.__fU,this.__fV,false,e);}
;if(this.__gc){e.stopPropagation();}
;this.__gk();}
,_onMouseMove:function(e){if(this.__gc){if(!this.__es(h,this.__fV,this.__fU,true,e)){this.__gk();}
;}
else {if(Math.abs(e.getDocumentLeft()-this.__gd)>3||Math.abs(e.getDocumentTop()-this.__ge)>3){if(this.__es(G,this.__fV,this.__fU,true,e)){this.__gc=true;this.__dB.addListener(this.__dM,n,this._onMouseOver,this,true);this.__dB.addListener(this.__dM,z,this._onMouseOut,this,true);this.__dB.addListener(this.__dM,y,this._onKeyDown,this,true);this.__dB.addListener(this.__dM,l,this._onKeyUp,this,true);this.__dB.addListener(this.__dM,t,this._onKeyPress,this,true);var bp=this.__fY;bp.Control=e.isCtrlPressed();bp.Shift=e.isShiftPressed();bp.Alt=e.isAltPressed();this.__gg();}
else {this.__es(u,this.__fV,this.__fU,false);this.__gj();}
;}
;}
;}
,_onMouseOver:function(e){var bq=e.getTarget();var br=this.__gi(bq);if(br&&br!=this.__fU){this.__gl=this.__es(D,br,this.__fV,true,e);this.__fU=br;this.__gg();}
;}
,_onMouseOut:function(e){var bt=this.__gi(e.getTarget());var bs=this.__gi(e.getRelatedTarget());if(bt&&bt!==bs&&bt==this.__fU){this.__es(E,this.__fU,bs,false,e);this.__fU=null;this.__gl=false;qx.event.Timer.once(this.__gg,this,0);}
;}
},destruct:function(){this.__fV=this.__fU=this.__dB=this.__dM=this.__fW=this.__fX=this.__fY=this.__e=null;}
,defer:function(bu){qx.event.Registration.addHandler(bu);}
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
}});}
)();
(function(){var c="qx.event.handler.Offline",b="offline",a="online";qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);this.__dB=d;this.__ce=d.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{online:true,offline:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dB:null,__ce:null,__fE:null,canHandleEvent:function(e,f){}
,registerEvent:function(g,h,i){}
,unregisterEvent:function(j,k,l){}
,_initObserver:function(){this.__fE=qx.lang.Function.listener(this._onNative,this);qx.bom.Event.addNativeListener(this.__ce,b,this.__fE);qx.bom.Event.addNativeListener(this.__ce,a,this.__fE);}
,_stopObserver:function(){qx.bom.Event.removeNativeListener(this.__ce,b,this.__fE);qx.bom.Event.removeNativeListener(this.__ce,a,this.__fE);}
,_onNative:qx.event.GlobalError.observeMethod(function(m){qx.event.Registration.fireEvent(this.__ce,m.type,qx.event.type.Event,[]);}
),isOnline:function(){return !!this.__ce.navigator.onLine;}
},destruct:function(){this.__dB=null;this._stopObserver();delete qx.event.handler.Appear.__instances[this.$$hash];}
,defer:function(n){qx.event.Registration.addHandler(n);}
});}
)();
(function(){var f="Use qx.dom.Element.create instead",e="Use qx.dom.Element.getHelperElement instead",d="qx.bom.Element",c="Use qx.dom.Element.empty instead",b="mshtml",a="engine.name";qx.Class.define(d,{statics:{allowCreationWithMarkup:function(g){qx.log.Logger.deprecatedMethodWarning(arguments.callee);return qx.dom.Element._allowCreationWithMarkup(g);}
,getHelperElement:function(h){qx.log.Logger.deprecatedMethodWarning(arguments.callee,e);return qx.dom.Element.getHelperElement(h);}
,create:function(name,k,m){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);return qx.dom.Element.create(name,k,m);}
,empty:function(n){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);return qx.dom.Element.empty(n);}
,addListener:function(o,p,q,self,r){return qx.event.Registration.addListener(o,p,q,self,r);}
,removeListener:function(s,t,u,self,v){return qx.event.Registration.removeListener(s,t,u,self,v);}
,removeListenerById:function(w,x){return qx.event.Registration.removeListenerById(w,x);}
,hasListener:function(y,z,A){return qx.event.Registration.hasListener(y,z,A);}
,focus:function(B){qx.event.Registration.getManager(B).getHandler(qx.event.handler.Focus).focus(B);}
,blur:function(C){qx.event.Registration.getManager(C).getHandler(qx.event.handler.Focus).blur(C);}
,activate:function(D){qx.event.Registration.getManager(D).getHandler(qx.event.handler.Focus).activate(D);}
,deactivate:function(E){qx.event.Registration.getManager(E).getHandler(qx.event.handler.Focus).deactivate(E);}
,capture:function(F,G){qx.event.Registration.getManager(F).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(F,G);}
,releaseCapture:function(H){qx.event.Registration.getManager(H).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(H);}
,matchesSelector:function(I,J){if(J){return qx.bom.Selector.query(J,I.parentNode).length>0;}
else {return false;}
;}
,clone:function(K,L){var O;if(L||((qx.core.Environment.get(a)==b)&&!qx.xml.Document.isXmlDocument(K))){var S=qx.event.Registration.getManager(K);var M=qx.dom.Hierarchy.getDescendants(K);M.push(K);}
;if((qx.core.Environment.get(a)==b)){for(var i=0,l=M.length;i<l;i++){S.toggleAttachedEvents(M[i],false);}
;}
;var O=K.cloneNode(true);if((qx.core.Environment.get(a)==b)){for(var i=0,l=M.length;i<l;i++){S.toggleAttachedEvents(M[i],true);}
;}
;if(L===true){var V=qx.dom.Hierarchy.getDescendants(O);V.push(O);var N,Q,U,P;for(var i=0,T=M.length;i<T;i++){U=M[i];N=S.serializeListeners(U);if(N.length>0){Q=V[i];for(var j=0,R=N.length;j<R;j++){P=N[j];S.addListener(Q,P.type,P.handler,P.self,P.capture);}
;}
;}
;}
;return O;}
}});}
)();
(function(){var q="engine.name",p="='",o="none",n="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",m="qx.dom.Element",k="webkit",j="The tag name is missing!",h="div",g="' ",f="></",b="<",d=" ",c=">",a="";qx.Bootstrap.define(m,{statics:{__gp:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},hasChild:function(parent,r){return r.parentNode===parent;}
,hasChildren:function(s){return !!s.firstChild;}
,hasChildElements:function(t){t=t.firstChild;while(t){if(t.nodeType===1){return true;}
;t=t.nextSibling;}
;return false;}
,getParentElement:function(u){return u.parentNode;}
,isInDom:function(v,w){if(!w){w=window;}
;var x=w.document.getElementsByTagName(v.nodeName);for(var i=0,l=x.length;i<l;i++){if(x[i]===v){return true;}
;}
;return false;}
,insertAt:function(y,parent,z){var A=parent.childNodes[z];if(A){parent.insertBefore(y,A);}
else {parent.appendChild(y);}
;return true;}
,insertBegin:function(B,parent){if(parent.firstChild){this.insertBefore(B,parent.firstChild);}
else {parent.appendChild(B);}
;}
,insertEnd:function(C,parent){parent.appendChild(C);}
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
,replaceChild:function(L,M){if(!M.parentNode){return false;}
;M.parentNode.replaceChild(L,M);return true;}
,replaceAt:function(N,O,parent){var P=parent.childNodes[O];if(!P){return false;}
;parent.replaceChild(N,P);return true;}
,__gq:{},__gr:{},_allowCreationWithMarkup:function(Q){if(!Q){Q=window;}
;var R=Q.location.href;if(qx.dom.Element.__gr[R]==undefined){try{Q.document.createElement(n);qx.dom.Element.__gr[R]=true;}
catch(e){qx.dom.Element.__gr[R]=false;}
;}
;return qx.dom.Element.__gr[R];}
,getHelperElement:function(S){if(!S){S=window;}
;var U=S.location.href;if(!qx.dom.Element.__gq[U]){var T=qx.dom.Element.__gq[U]=S.document.createElement(h);if(qx.core.Environment.get(q)==k){T.style.display=o;S.document.body.appendChild(T);}
;}
;return qx.dom.Element.__gq[U];}
,create:function(name,V,W){if(!W){W=window;}
;if(!name){throw new Error(j);}
;var Y=this.__gp;var X=a;for(var bb in V){if(Y[bb]){X+=bb+p+V[bb]+g;}
;}
;var bc;if(X!=a){if(qx.dom.Element._allowCreationWithMarkup(W)){bc=W.document.createElement(b+name+d+X+c);}
else {var ba=qx.dom.Element.getHelperElement(W);ba.innerHTML=b+name+d+X+f+name+c;bc=ba.firstChild;}
;}
else {bc=W.document.createElement(name);}
;for(var bb in V){if(!Y[bb]){qx.bom.element.Attribute.set(bc,bb,V[bb]);}
;}
;return bc;}
,empty:function(bd){return bd.innerHTML=a;}
}});}
)();
(function(){var j="readOnly",i="accessKey",h="qx.bom.element.Attribute",g="rowSpan",f="vAlign",e="className",d="textContent",c="'",b="htmlFor",a="longDesc",A="cellSpacing",z="frameBorder",y="='",x="useMap",w="innerText",v="innerHTML",u="tabIndex",t="dateTime",s="maxLength",r="html.element.textcontent",p="mshtml",q="cellPadding",n="browser.documentmode",o="colSpan",l="engine.name",m="undefined",k="";qx.Bootstrap.define(h,{statics:{__gs:{names:{"class":e,"for":b,html:v,text:qx.core.Environment.get(r)?d:w,colspan:o,rowspan:g,valign:f,datetime:t,accesskey:i,tabindex:u,maxlength:s,readonly:j,longdesc:a,cellpadding:q,cellspacing:A,frameborder:z,usemap:x},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:k,className:k,innerHTML:k,innerText:k,textContent:k,htmlFor:k,tabIndex:0,maxLength:qx.core.Environment.select(l,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(B){var C=[];var E=this.__gs.runtime;for(var D in B){if(!E[D]){C.push(D,y,B[D],c);}
;}
;return C.join(k);}
,get:function(F,name){var H=this.__gs;var G;name=H.names[name]||name;if(qx.core.Environment.get(l)==p&&parseInt(qx.core.Environment.get(n),10)<8&&H.original[name]){G=F.getAttribute(name,2);}
else if(H.property[name]){G=F[name];if(typeof H.propertyDefault[name]!==m&&G==H.propertyDefault[name]){if(typeof H.bools[name]===m){return null;}
else {return G;}
;}
;}
else {G=F.getAttribute(name);}
;if(H.bools[name]){return !!G;}
;return G;}
,set:function(I,name,J){if(typeof J===m){return;}
;var K=this.__gs;name=K.names[name]||name;if(K.bools[name]){J=!!J;}
;if(K.property[name]&&(!(I[name]===undefined)||K.qxProperties[name])){if(J==null){if(K.removeableProperties[name]){I.removeAttribute(name);return;}
else if(typeof K.propertyDefault[name]!==m){J=K.propertyDefault[name];}
;}
;I[name]=J;}
else {if(J===true){I.setAttribute(name,name);}
else if(J===false||J===null){I.removeAttribute(name);}
else {I.setAttribute(name,J);}
;}
;}
,reset:function(L,name){this.set(L,name,null);}
}});}
)();
(function(){var i="mshtml",h="blur",g="focus",f="click",e="qx.event.dispatch.MouseCapture",d="capture",c="scroll",b="engine.name",a="losecapture";qx.Class.define(e,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);this.__ce=j.getWindow();this.__cg=k;j.addListener(this.__ce,h,this.releaseCapture,this);j.addListener(this.__ce,g,this.releaseCapture,this);j.addListener(this.__ce,c,this.releaseCapture,this);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cg:null,__gt:null,__gu:true,__ce:null,_getParent:function(l){return l.parentNode;}
,canDispatchEvent:function(m,event,n){return !!(this.__gt&&this.__gv[n]);}
,dispatchEvent:function(o,event,p){if(p==f){event.stopPropagation();this.releaseCapture();return;}
;if(this.__gu||!qx.dom.Hierarchy.contains(this.__gt,o)){o=this.__gt;}
;qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);}
,__gv:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;if(this.__gt===q&&this.__gu==r){return;}
;if(this.__gt){this.releaseCapture();}
;this.nativeSetCapture(q,r);if(this.hasNativeCapture){var self=this;qx.bom.Event.addNativeListener(q,a,function(){qx.bom.Event.removeNativeListener(q,a,arguments.callee);self.releaseCapture();}
);}
;this.__gu=r;this.__gt=q;this.__cg.fireEvent(q,d,qx.event.type.Event,[true,false]);}
,getCaptureElement:function(){return this.__gt;}
,releaseCapture:function(){var s=this.__gt;if(!s){return;}
;this.__gt=null;this.__cg.fireEvent(s,a,qx.event.type.Event,[true,false]);this.nativeReleaseCapture(s);}
,hasNativeCapture:qx.core.Environment.get(b)==i,nativeSetCapture:qx.core.Environment.select(b,{"mshtml":function(t,u){t.setCapture(u!==false);}
,"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(b,{"mshtml":function(v){v.releaseCapture();}
,"default":qx.lang.Function.empty})},destruct:function(){this.__gt=this.__ce=this.__cg=null;}
,defer:function(w){qx.event.Registration.addDispatcher(w);}
});}
)();
(function(){var a="qx.event.handler.Window";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);this._manager=b;this._window=b.getWindow();this._initWindowObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,d){}
,registerEvent:function(f,g,h){}
,unregisterEvent:function(i,j,k){}
,_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);var m=qx.event.handler.Window.SUPPORTED_TYPES;for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);}
;}
,_stopWindowObserver:function(){var o=qx.event.handler.Window.SUPPORTED_TYPES;for(var n in o){qx.bom.Event.removeNativeListener(this._window,n,this._onNativeWrapper);}
;}
,_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;}
;var q=this._window;try{var t=q.document;}
catch(e){return;}
;var r=t.documentElement;var p=qx.bom.Event.getTarget(e);if(p==null||p===q||p===t||p===r){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,q]);qx.event.Registration.dispatchEvent(q,event);var s=event.getReturnValue();if(s!=null){e.returnValue=s;return s;}
;}
;}
)},destruct:function(){this._stopWindowObserver();this._manager=this._window=null;}
,defer:function(u){qx.event.Registration.addHandler(u);}
});}
)();
(function(){var q="text",p="file",o="+",n="'/>",k="CLASS",h="HTML",g="radio",f="script",d="className",c="TAG",bh="[test!='']:sizzle",bg="password",bf="htmlFor",be="submit",bd="<a href='#'></a>",bc="<a name='",bb="#",ba="qx.bom.Selector",Y="type",X="'] ",x="\\$&",y="parentNode",v="previousSibling",w="NAME",t="number",u="='$1']",r="reset",s='type',B="image",C=".TEST",K="<div class='test e'></div><div class='test'></div>",I="Syntax error, unrecognized expression: ",P="~",M="checkbox",T="[id='",R="hidden",E="__sizzle__",W="<p class='TEST'></p>",V="ID",U="body",D="object",G="button",H="[object Array]",J="href",L="e",N="\\",Q="div",S="*",z="id",A="string",F="undefined",O="";qx.Bootstrap.define(ba,{statics:{query:null,matches:null}});(function(){var bq=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,bx=0,bz=Object.prototype.toString,br=false,bB=true,bv=/\\/g,bk=/\W/;[0,0].sort(function(){bB=false;return 0;}
);var bu=function(bD,bE,bF,bG){bF=bF||[];bE=bE||document;var bP=bE;if(bE.nodeType!==1&&bE.nodeType!==9){return [];}
;if(!bD||typeof bD!==A){return bF;}
;var m,bJ,bH,bL,bN,bK,bQ,i,bR=true,bI=bu.isXML(bE),bM=[],bO=bD;do {bq.exec(O);m=bq.exec(bO);if(m){bO=m[3];bM.push(m[1]);if(m[2]){bL=m[3];break;}
;}
;}
while(m);if(bM.length>1&&bs.exec(bD)){if(bM.length===2&&bn.relative[bM[0]]){bJ=bm(bM[0]+bM[1],bE);}
else {bJ=bn.relative[bM[0]]?[bE]:bu(bM.shift(),bE);while(bM.length){bD=bM.shift();if(bn.relative[bD]){bD+=bM.shift();}
;bJ=bm(bD,bJ);}
;}
;}
else {if(!bG&&bM.length>1&&bE.nodeType===9&&!bI&&bn.match.ID.test(bM[0])&&!bn.match.ID.test(bM[bM.length-1])){bN=bu.find(bM.shift(),bE,bI);bE=bN.expr?bu.filter(bN.expr,bN.set)[0]:bN.set[0];}
;if(bE){bN=bG?{expr:bM.pop(),set:bj(bG)}:bu.find(bM.pop(),bM.length===1&&(bM[0]===P||bM[0]===o)&&bE.parentNode?bE.parentNode:bE,bI);bJ=bN.expr?bu.filter(bN.expr,bN.set):bN.set;if(bM.length>0){bH=bj(bJ);}
else {bR=false;}
;while(bM.length){bK=bM.pop();bQ=bK;if(!bn.relative[bK]){bK=O;}
else {bQ=bM.pop();}
;if(bQ==null){bQ=bE;}
;bn.relative[bK](bH,bQ,bI);}
;}
else {bH=bM=[];}
;}
;if(!bH){bH=bJ;}
;if(!bH){bu.error(bK||bD);}
;if(bz.call(bH)===H){if(!bR){bF.push.apply(bF,bH);}
else if(bE&&bE.nodeType===1){for(i=0;bH[i]!=null;i++){if(bH[i]&&(bH[i]===true||bH[i].nodeType===1&&bu.contains(bE,bH[i]))){bF.push(bJ[i]);}
;}
;}
else {for(i=0;bH[i]!=null;i++){if(bH[i]&&bH[i].nodeType===1){bF.push(bJ[i]);}
;}
;}
;}
else {bj(bH,bF);}
;if(bL){bu(bL,bP,bF,bG);bu.uniqueSort(bF);}
;return bF;}
;bu.uniqueSort=function(bS){if(bw){br=bB;bS.sort(bw);if(br){for(var i=1;i<bS.length;i++){if(bS[i]===bS[i-1]){bS.splice(i--,1);}
;}
;}
;}
;return bS;}
;bu.matches=function(bT,bU){return bu(bT,null,null,bU);}
;bu.matchesSelector=function(bV,bW){return bu(bW,null,null,[bV]).length>0;}
;bu.find=function(bX,bY,ca){var cb;if(!bX){return [];}
;for(var i=0,l=bn.order.length;i<l;i++){var cd,cc=bn.order[i];if((cd=bn.leftMatch[cc].exec(bX))){var ce=cd[1];cd.splice(1,1);if(ce.substr(ce.length-1)!==N){cd[1]=(cd[1]||O).replace(bv,O);cb=bn.find[cc](cd,bY,ca);if(cb!=null){bX=bX.replace(bn.match[cc],O);break;}
;}
;}
;}
;if(!cb){cb=typeof bY.getElementsByTagName!==F?bY.getElementsByTagName(S):[];}
;return {set:cb,expr:bX};}
;bu.filter=function(cf,cg,ch,ci){var ct,cs,cj=cf,co=[],ck=cg,cl=cg&&cg[0]&&bu.isXML(cg[0]);while(cf&&cg.length){for(var cr in bn.filter){if((ct=bn.leftMatch[cr].exec(cf))!=null&&ct[2]){var cq,cn,cm=bn.filter[cr],cu=ct[1];cs=false;ct.splice(1,1);if(cu.substr(cu.length-1)===N){continue;}
;if(ck===co){co=[];}
;if(bn.preFilter[cr]){ct=bn.preFilter[cr](ct,ck,ch,co,ci,cl);if(!ct){cs=cq=true;}
else if(ct===true){continue;}
;}
;if(ct){for(var i=0;(cn=ck[i])!=null;i++){if(cn){cq=cm(cn,ct,i,ck);var cp=ci^!!cq;if(ch&&cq!=null){if(cp){cs=true;}
else {ck[i]=false;}
;}
else if(cp){co.push(cn);cs=true;}
;}
;}
;}
;if(cq!==undefined){if(!ch){ck=co;}
;cf=cf.replace(bn.match[cr],O);if(!cs){return [];}
;break;}
;}
;}
;if(cf===cj){if(cs==null){bu.error(cf);}
else {break;}
;}
;cj=cf;}
;return ck;}
;bu.error=function(cv){throw I+cv;}
;var bn=bu.selectors={order:[V,w,c],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":d,"for":bf},attrHandle:{href:function(cw){return cw.getAttribute(J);}
,type:function(cx){return cx.getAttribute(Y);}
},relative:{"+":function(cy,cz){var cA=typeof cz===A,cC=cA&&!bk.test(cz),cD=cA&&!cC;if(cC){cz=cz.toLowerCase();}
;for(var i=0,l=cy.length,cB;i<l;i++){if((cB=cy[i])){while((cB=cB.previousSibling)&&cB.nodeType!==1){}
;cy[i]=cD||cB&&cB.nodeName.toLowerCase()===cz?cB||false:cB===cz;}
;}
;if(cD){bu.filter(cz,cy,true);}
;}
,">":function(cE,cF){var cH,cG=typeof cF===A,i=0,l=cE.length;if(cG&&!bk.test(cF)){cF=cF.toLowerCase();for(;i<l;i++){cH=cE[i];if(cH){var parent=cH.parentNode;cE[i]=parent.nodeName.toLowerCase()===cF?parent:false;}
;}
;}
else {for(;i<l;i++){cH=cE[i];if(cH){cE[i]=cG?cH.parentNode:cH.parentNode===cF;}
;}
;if(cG){bu.filter(cF,cE,true);}
;}
;}
,"":function(cI,cJ,cK){var cN,cL=bx++,cM=bA;if(typeof cJ===A&&!bk.test(cJ)){cJ=cJ.toLowerCase();cN=cJ;cM=bC;}
;cM(y,cJ,cL,cI,cN,cK);}
,"~":function(cO,cP,cQ){var cT,cR=bx++,cS=bA;if(typeof cP===A&&!bk.test(cP)){cP=cP.toLowerCase();cT=cP;cS=bC;}
;cS(v,cP,cR,cO,cT,cQ);}
},find:{ID:function(cU,cV,cW){if(typeof cV.getElementById!=="undefined"&&!cW){var m=cV.getElementById(cU[1]);return m&&m.parentNode?[m]:[];}
;}
,NAME:function(cX,cY){if(typeof cY.getElementsByName!=="undefined"){var db=[],da=cY.getElementsByName(cX[1]);for(var i=0,l=da.length;i<l;i++){if(da[i].getAttribute("name")===cX[1]){db.push(da[i]);}
;}
;return db.length===0?null:db;}
;}
,TAG:function(dc,dd){if(typeof dd.getElementsByTagName!=="undefined"){return dd.getElementsByTagName(dc[1]);}
;}
},preFilter:{CLASS:function(de,df,dg,dh,di,dj){de=" "+de[1].replace(bv,"")+" ";if(dj){return de;}
;for(var i=0,dk;(dk=df[i])!=null;i++){if(dk){if(di^(dk.className&&(" "+dk.className+" ").replace(/[\t\n\r]/g," ").indexOf(de)>=0)){if(!dg){dh.push(dk);}
;}
else if(dg){df[i]=false;}
;}
;}
;return false;}
,ID:function(dl){return dl[1].replace(bv,"");}
,TAG:function(dm,dn){return dm[1].replace(bv,"").toLowerCase();}
,CHILD:function(dp){if(dp[1]==="nth"){if(!dp[2]){bu.error(dp[0]);}
;dp[2]=dp[2].replace(/^\+|\s*/g,'');var dq=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(dp[2]==="even"&&"2n"||dp[2]==="odd"&&"2n+1"||!/\D/.test(dp[2])&&"0n+"+dp[2]||dp[2]);dp[2]=(dq[1]+(dq[2]||1))-0;dp[3]=dq[3]-0;}
else if(dp[2]){bu.error(dp[0]);}
;dp[0]=bx++;return dp;}
,ATTR:function(dr,ds,dt,du,dv,dw){var name=dr[1]=dr[1].replace(bv,"");if(!dw&&bn.attrMap[name]){dr[1]=bn.attrMap[name];}
;dr[4]=(dr[4]||dr[5]||"").replace(bv,"");if(dr[2]==="~="){dr[4]=" "+dr[4]+" ";}
;return dr;}
,PSEUDO:function(dx,dy,dz,dA,dB){if(dx[1]==="not"){if((bq.exec(dx[3])||"").length>1||/^\w/.test(dx[3])){dx[3]=bu(dx[3],null,null,dy);}
else {var dC=bu.filter(dx[3],dy,dz,true^dB);if(!dz){dA.push.apply(dA,dC);}
;return false;}
;}
else if(bn.match.POS.test(dx[0])||bn.match.CHILD.test(dx[0])){return true;}
;return dx;}
,POS:function(dD){dD.unshift(true);return dD;}
},filters:{enabled:function(dE){return dE.disabled===false&&dE.type!==R;}
,disabled:function(dF){return dF.disabled===true;}
,checked:function(dG){return dG.checked===true;}
,selected:function(dH){if(dH.parentNode){dH.parentNode.selectedIndex;}
;return dH.selected===true;}
,parent:function(dI){return !!dI.firstChild;}
,empty:function(dJ){return !dJ.firstChild;}
,has:function(dK,i,dL){return !!bu(dL[3],dK).length;}
,header:function(dM){return (/h\d/i).test(dM.nodeName);}
,text:function(dN){return q===dN.getAttribute(s);}
,radio:function(dO){return g===dO.type;}
,checkbox:function(dP){return M===dP.type;}
,file:function(dQ){return p===dQ.type;}
,password:function(dR){return bg===dR.type;}
,submit:function(dS){return be===dS.type;}
,image:function(dT){return B===dT.type;}
,reset:function(dU){return r===dU.type;}
,button:function(dV){return G===dV.type||dV.nodeName.toLowerCase()===G;}
,input:function(dW){return (/input|select|textarea|button/i).test(dW.nodeName);}
},setFilters:{first:function(dX,i){return i===0;}
,last:function(dY,i,ea,eb){return i===eb.length-1;}
,even:function(ec,i){return i%2===0;}
,odd:function(ed,i){return i%2===1;}
,lt:function(ee,i,ef){return i<ef[3]-0;}
,gt:function(eg,i,eh){return i>eh[3]-0;}
,nth:function(ei,i,ej){return ej[3]-0===i;}
,eq:function(ek,i,el){return el[3]-0===i;}
},filter:{PSEUDO:function(em,en,i,eo){var name=en[1],ep=bn.filters[name];if(ep){return ep(em,i,en,eo);}
else if(name==="contains"){return (em.textContent||em.innerText||bu.getText([em])||"").indexOf(en[3])>=0;}
else if(name==="not"){var eq=en[3];for(var j=0,l=eq.length;j<l;j++){if(eq[j]===em){return false;}
;}
;return true;}
else {bu.error(name);}
;;}
,CHILD:function(er,es){var ey=es[1],et=er;switch(ey){case "only":case "first":while((et=et.previousSibling)){if(et.nodeType===1){return false;}
;}
;if(ey==="first"){return true;}
;et=er;case "last":while((et=et.nextSibling)){if(et.nodeType===1){return false;}
;}
;return true;case "nth":var ez=es[2],ev=es[3];if(ez===1&&ev===0){return true;}
;var ex=es[0],parent=er.parentNode;if(parent&&(parent.sizcache!==ex||!er.nodeIndex)){var eu=0;for(et=parent.firstChild;et;et=et.nextSibling){if(et.nodeType===1){et.nodeIndex=++eu;}
;}
;parent.sizcache=ex;}
;var ew=er.nodeIndex-ev;if(ez===0){return ew===0;}
else {return (ew%ez===0&&ew/ez>=0);}
;};}
,ID:function(eA,eB){return eA.nodeType===1&&eA.getAttribute("id")===eB;}
,TAG:function(eC,eD){return (eD==="*"&&eC.nodeType===1)||eC.nodeName.toLowerCase()===eD;}
,CLASS:function(eE,eF){return (" "+(eE.className||eE.getAttribute("class"))+" ").indexOf(eF)>-1;}
,ATTR:function(eG,eH){var name=eH[1],eL=bn.attrHandle[name]?bn.attrHandle[name](eG):eG[name]!=null?eG[name]:eG.getAttribute(name),eK=eL+"",eJ=eH[2],eI=eH[4];return eL==null?eJ==="!=":eJ==="="?eK===eI:eJ==="*="?eK.indexOf(eI)>=0:eJ==="~="?(" "+eK+" ").indexOf(eI)>=0:!eI?eK&&eL!==false:eJ==="!="?eK!==eI:eJ==="^="?eK.indexOf(eI)===0:eJ==="$="?eK.substr(eK.length-eI.length)===eI:eJ==="|="?eK===eI||eK.substr(0,eI.length+1)===eI+"-":false;}
,POS:function(eM,eN,i,eO){var name=eN[2],eP=bn.setFilters[name];if(eP){return eP(eM,i,eN,eO);}
;}
}};var bs=bn.match.POS,bi=function(eQ,eR){return N+(eR-0+1);}
;for(var by in bn.match){bn.match[by]=new RegExp(bn.match[by].source+(/(?![^\[]*\])(?![^\(]*\))/.source));bn.leftMatch[by]=new RegExp(/(^(?:.|\r|\n)*?)/.source+bn.match[by].source.replace(/\\(\d+)/g,bi));}
;var bj=function(eS,eT){eS=Array.prototype.slice.call(eS,0);if(eT){eT.push.apply(eT,eS);return eT;}
;return eS;}
;try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;}
catch(e){bj=function(eU,eV){var i=0,eW=eV||[];if(bz.call(eU)===H){Array.prototype.push.apply(eW,eU);}
else {if(typeof eU.length===t){for(var l=eU.length;i<l;i++){eW.push(eU[i]);}
;}
else {for(;eU[i];i++){eW.push(eU[i]);}
;}
;}
;return eW;}
;}
;var bw,bo;if(document.documentElement.compareDocumentPosition){bw=function(a,b){if(a===b){br=true;return 0;}
;if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;}
;return a.compareDocumentPosition(b)&4?-1:1;}
;}
else {bw=function(a,b){var fc,fa,fd=[],fe=[],eY=a.parentNode,fb=b.parentNode,eX=eY;if(a===b){br=true;return 0;}
else if(eY===fb){return bo(a,b);}
else if(!eY){return -1;}
else if(!fb){return 1;}
;;;while(eX){fd.unshift(eX);eX=eX.parentNode;}
;eX=fb;while(eX){fe.unshift(eX);eX=eX.parentNode;}
;fc=fd.length;fa=fe.length;for(var i=0;i<fc&&i<fa;i++){if(fd[i]!==fe[i]){return bo(fd[i],fe[i]);}
;}
;return i===fc?bo(a,fe[i],-1):bo(fd[i],b,1);}
;bo=function(a,b,ff){if(a===b){return ff;}
;var fg=a.nextSibling;while(fg){if(fg===b){return -1;}
;fg=fg.nextSibling;}
;return 1;}
;}
;bu.getText=function(fh){var fj=O,fi;for(var i=0;fh[i];i++){fi=fh[i];if(fi.nodeType===3||fi.nodeType===4){fj+=fi.nodeValue;}
else if(fi.nodeType!==8){fj+=bu.getText(fi.childNodes);}
;}
;return fj;}
;(function(){var fm=document.createElement(Q),fl=f+(new Date()).getTime(),fk=document.documentElement;fm.innerHTML=bc+fl+n;fk.insertBefore(fm,fk.firstChild);if(document.getElementById(fl)){bn.find.ID=function(fn,fo,fp){if(typeof fo.getElementById!==F&&!fp){var m=fo.getElementById(fn[1]);return m?m.id===fn[1]||typeof m.getAttributeNode!==F&&m.getAttributeNode(z).nodeValue===fn[1]?[m]:undefined:[];}
;}
;bn.filter.ID=function(fq,fr){var fs=typeof fq.getAttributeNode!==F&&fq.getAttributeNode(z);return fq.nodeType===1&&fs&&fs.nodeValue===fr;}
;}
;fk.removeChild(fm);fk=fm=null;}
)();(function(){var ft=document.createElement(Q);ft.appendChild(document.createComment(O));if(ft.getElementsByTagName(S).length>0){bn.find.TAG=function(fu,fv){var fx=fv.getElementsByTagName(fu[1]);if(fu[1]===S){var fw=[];for(var i=0;fx[i];i++){if(fx[i].nodeType===1){fw.push(fx[i]);}
;}
;fx=fw;}
;return fx;}
;}
;ft.innerHTML=bd;if(ft.firstChild&&typeof ft.firstChild.getAttribute!==F&&ft.firstChild.getAttribute(J)!==bb){bn.attrHandle.href=function(fy){return fy.getAttribute(J,2);}
;}
;ft=null;}
)();if(document.querySelectorAll){(function(){var fA=bu,fz=document.createElement(Q),fB=E;fz.innerHTML=W;if(fz.querySelectorAll&&fz.querySelectorAll(C).length===0){return;}
;bu=function(fD,fE,fF,fG){fE=fE||document;if(!fG&&!bu.isXML(fE)){var fL=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(fD);if(fL&&(fE.nodeType===1||fE.nodeType===9)){if(fL[1]){return bj(fE.getElementsByTagName(fD),fF);}
else if(fL[2]&&bn.find.CLASS&&fE.getElementsByClassName){return bj(fE.getElementsByClassName(fL[2]),fF);}
;}
;if(fE.nodeType===9){if(fD===U&&fE.body){return bj([fE.body],fF);}
else if(fL&&fL[3]){var fJ=fE.getElementById(fL[3]);if(fJ&&fJ.parentNode){if(fJ.id===fL[3]){return bj([fJ],fF);}
;}
else {return bj([],fF);}
;}
;try{return bj(fE.querySelectorAll(fD),fF);}
catch(fO){}
;}
else if(fE.nodeType===1&&fE.nodeName.toLowerCase()!==D){var fN=fE,fI=fE.getAttribute(z),fK=fI||fB,fH=fE.parentNode,fM=/^\s*[+~]/.test(fD);if(!fI){fE.setAttribute(z,fK);}
else {fK=fK.replace(/'/g,x);}
;if(fM&&fH){fE=fE.parentNode;}
;try{if(!fM||fH){return bj(fE.querySelectorAll(T+fK+X+fD),fF);}
;}
catch(fP){}
finally{if(!fI){fN.removeAttribute(z);}
;}
;}
;}
;return fA(fD,fE,fF,fG);}
;for(var fC in fA){bu[fC]=fA[fC];}
;fz=null;}
)();}
;(function(){var fS=document.documentElement,fQ=fS.matchesSelector||fS.mozMatchesSelector||fS.webkitMatchesSelector||fS.msMatchesSelector,fR=false;try{fQ.call(document.documentElement,bh);}
catch(fT){fR=true;}
;if(fQ){bu.matchesSelector=function(fU,fV){fV=fV.replace(/\=\s*([^'"\]]*)\s*\]/g,u);if(!bu.isXML(fU)){try{if(fR||!bn.match.PSEUDO.test(fV)&&!/!=/.test(fV)){return fQ.call(fU,fV);}
;}
catch(e){}
;}
;return bu(fV,null,null,[fU]).length>0;}
;}
;}
)();(function(){var fW=document.createElement(Q);fW.innerHTML=K;if(!fW.getElementsByClassName||fW.getElementsByClassName(L).length===0){return;}
;fW.lastChild.className=L;if(fW.getElementsByClassName(L).length===1){return;}
;bn.order.splice(1,0,k);bn.find.CLASS=function(fX,fY,ga){if(typeof fY.getElementsByClassName!==F&&!ga){return fY.getElementsByClassName(fX[1]);}
;}
;fW=null;}
)();function bC(gb,gc,gd,ge,gf,gg){for(var i=0,l=ge.length;i<l;i++){var gi=ge[i];if(gi){var gh=false;gi=gi[gb];while(gi){if(gi.sizcache===gd){gh=ge[gi.sizset];break;}
;if(gi.nodeType===1&&!gg){gi.sizcache=gd;gi.sizset=i;}
;if(gi.nodeName.toLowerCase()===gc){gh=gi;break;}
;gi=gi[gb];}
;ge[i]=gh;}
;}
;}
;function bA(gj,gk,gl,gm,gn,go){for(var i=0,l=gm.length;i<l;i++){var gq=gm[i];if(gq){var gp=false;gq=gq[gj];while(gq){if(gq.sizcache===gl){gp=gm[gq.sizset];break;}
;if(gq.nodeType===1){if(!go){gq.sizcache=gl;gq.sizset=i;}
;if(typeof gk!==A){if(gq===gk){gp=true;break;}
;}
else if(bu.filter(gk,[gq]).length>0){gp=gq;break;}
;}
;gq=gq[gj];}
;gm[i]=gp;}
;}
;}
;if(document.documentElement.contains){bu.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);}
;}
else if(document.documentElement.compareDocumentPosition){bu.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16);}
;}
else {bu.contains=function(){return false;}
;}
;bu.isXML=function(gr){var gs=(gr?gr.ownerDocument||gr:0).documentElement;return gs?gs.nodeName!==h:false;}
;var bm=function(gt,gu){var gy,gw=[],gv=O,gx=gu.nodeType?[gu]:gu;while((gy=bn.match.PSEUDO.exec(gt))){gv+=gy[0];gt=gt.replace(bn.match.PSEUDO,O);}
;gt=bn.relative[gt]?gt+S:gt;for(var i=0,l=gx.length;i<l;i++){bu(gt,gx[i],gw);}
;return bu.filter(gv,gw);}
;var bt=qx.bom.Selector;bt.query=function(gz,gA){return bu(gz,gA);}
;bt.matches=function(gB,gC){return bu(gB,null,null,gC);}
;}
)();}
)();
(function(){var a="qx.event.type.Focus";qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);this._target=b;this._relatedTarget=c;return this;}
}});}
)();
(function(){var k="borderBottomWidth",j="borderTopWidth",i="left",h="borderLeftWidth",g="bottom",f="top",e="right",d="qx.bom.element.Scroll",c="borderRightWidth",b="visible",a="scroll";qx.Class.define(d,{statics:{intoViewX:function(l,stop,m){var parent=l.parentNode;var r=qx.dom.Node.getDocument(l);var n=r.body;var z,x,u;var B,s,C;var v,D,G;var E,p,y,o;var t,F,w;var q=m===i;var A=m===e;stop=stop?stop.parentNode:r;while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===n||qx.bom.element.Overflow.getY(parent)!=b)){if(parent===n){x=parent.scrollLeft;u=x+qx.bom.Viewport.getWidth();B=qx.bom.Viewport.getWidth();s=parent.clientWidth;C=parent.scrollWidth;v=0;D=0;G=0;}
else {z=qx.bom.element.Location.get(parent);x=z.left;u=z.right;B=parent.offsetWidth;s=parent.clientWidth;C=parent.scrollWidth;v=parseInt(qx.bom.element.Style.get(parent,h),10)||0;D=parseInt(qx.bom.element.Style.get(parent,c),10)||0;G=B-s-v-D;}
;E=qx.bom.element.Location.get(l);p=E.left;y=E.right;o=l.offsetWidth;t=p-x-v;F=y-u+D;w=0;if(q){w=t;}
else if(A){w=F+G;}
else if(t<0||o>s){w=t;}
else if(F>0){w=F+G;}
;;;parent.scrollLeft+=w;qx.event.Registration.fireNonBubblingEvent(parent,a);}
;if(parent===n){break;}
;parent=parent.parentNode;}
;}
,intoViewY:function(H,stop,I){var parent=H.parentNode;var O=qx.dom.Node.getDocument(H);var J=O.body;var W,K,S;var Y,V,Q;var M,N,L;var bb,bc,X,R;var U,P,bd;var ba=I===f;var T=I===g;stop=stop?stop.parentNode:O;while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===J||qx.bom.element.Overflow.getY(parent)!=b)){if(parent===J){K=parent.scrollTop;S=K+qx.bom.Viewport.getHeight();Y=qx.bom.Viewport.getHeight();V=parent.clientHeight;Q=parent.scrollHeight;M=0;N=0;L=0;}
else {W=qx.bom.element.Location.get(parent);K=W.top;S=W.bottom;Y=parent.offsetHeight;V=parent.clientHeight;Q=parent.scrollHeight;M=parseInt(qx.bom.element.Style.get(parent,j),10)||0;N=parseInt(qx.bom.element.Style.get(parent,k),10)||0;L=Y-V-M-N;}
;bb=qx.bom.element.Location.get(H);bc=bb.top;X=bb.bottom;R=H.offsetHeight;U=bc-K-M;P=X-S+N;bd=0;if(ba){bd=U;}
else if(T){bd=P+L;}
else if(U<0||R>V){bd=U;}
else if(P>0){bd=P+L;}
;;;parent.scrollTop+=bd;qx.event.Registration.fireNonBubblingEvent(parent,a);}
;if(parent===J){break;}
;parent=parent.parentNode;}
;}
,intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);this.intoViewY(be,stop,bg);}
}});}
)();
(function(){var k="borderLeftStyle",j="borderRightStyle",i="div",h="borderRightWidth",g="overflow-y",f="borderLeftWidth",e="-moz-scrollbars-vertical",d=":",b="100px",a="overflow:",B="qx.bom.element.Overflow",A="overflow-x",z="overflowX",y=";",x="overflowY",w="engine.version",v="none",u="scroll",r="gecko",q="overflow",o="",p="engine.name",m="-moz-scrollbars-none",n="hidden",l="css.overflowxy";qx.Bootstrap.define(B,{statics:{DEFAULT_SCROLLBAR_WIDTH:14,__dl:null,getScrollbarWidth:function(){if(this.__dl!==null){return this.__dl;}
;var C=qx.bom.element.Style;var E=function(I,J){return parseInt(C.get(I,J),10)||0;}
;var F=function(K){return (C.get(K,j)==v?0:E(K,h));}
;var D=function(L){return (C.get(L,k)==v?0:E(L,f));}
;var H=qx.core.Environment.select(p,{"mshtml":function(M){if(C.get(M,x)==n||M.clientWidth==0){return F(M);}
;return Math.max(0,M.offsetWidth-M.clientLeft-M.clientWidth);}
,"default":function(N){if(N.clientWidth==0){var O=C.get(N,q);var P=(O==u||O==e?16:0);return Math.max(0,F(N)+P);}
;return Math.max(0,(N.offsetWidth-N.clientWidth-D(N)));}
});var G=function(Q){return H(Q)-F(Q);}
;var t=document.createElement(i);var s=t.style;s.height=s.width=b;s.overflow=u;document.body.appendChild(t);var c=G(t);this.__dl=c;document.body.removeChild(t);return this.__dl;}
,_compile:function(R,S){if(!qx.core.Environment.get(l)){R=a;if(qx.core.Environment.get(p)===r&&S==n){S=m;}
;}
;return R+d+S+y;}
,compileX:function(T){return this._compile(A,T);}
,compileY:function(U){return this._compile(g,U);}
,getX:function(V,W){if(qx.core.Environment.get(l)){return qx.bom.element.Style.get(V,z,W,false);}
;var X=qx.bom.element.Style.get(V,q,W,false);if(X===m){X=n;}
;return X;}
,setX:function(Y,ba){if(qx.core.Environment.get(l)){Y.style.overflowX=ba;}
else {if(ba===n&&qx.core.Environment.get(p)===r&&parseFloat(qx.core.Environment.get(w))<1.8){ba=m;}
;Y.style.overflow=ba;}
;}
,resetX:function(bb){if(qx.core.Environment.get(l)){bb.style.overflowX=o;}
else {bb.style.overflow=o;}
;}
,getY:function(bc,bd){if(qx.core.Environment.get(l)){return qx.bom.element.Style.get(bc,x,bd,false);}
;var be=qx.bom.element.Style.get(bc,q,bd,false);if(be===m){be=n;}
;return be;}
,setY:function(bf,bg){if(qx.core.Environment.get(l)){bf.style.overflowY=bg;}
else {if(bg===n&&qx.core.Environment.get(p)===r&&parseFloat(qx.core.Environment.get(w))<1.8){bg=m;}
;bf.style.overflow=bg;}
;}
,resetY:function(bh){if(qx.core.Environment.get(l)){bh.style.overflowY=o;}
else {bh.style.overflow=o;}
;}
}});}
)();
(function(){var p="clip:auto;",o="rect(",n=")",m=");",l="",k="Could not parse clip string: ",j="qx.bom.element.Clip",i="string",h="clip:rect(",g=" ",c="clip",f="rect(auto,auto,auto,auto)",e="rect(auto, auto, auto, auto)",b=",",a="px",d="auto";qx.Bootstrap.define(j,{statics:{compile:function(q){if(!q){return p;}
;var v=q.left;var top=q.top;var u=q.width;var t=q.height;var r,s;if(v==null){r=(u==null?d:u+a);v=d;}
else {r=(u==null?d:v+u+a);v=v+a;}
;if(top==null){s=(t==null?d:t+a);top=d;}
else {s=(t==null?d:top+t+a);top=top+a;}
;return h+top+b+r+b+s+b+v+m;}
,get:function(w,x){var z=qx.bom.element.Style.get(w,c,x,false);var F,top,D,C;var y,A;if(typeof z===i&&z!==d&&z!==l){z=qx.lang.String.trim(z);if(/\((.*)\)/.test(z)){var E=RegExp.$1;if(/,/.test(E)){var B=E.split(b);}
else {var B=E.split(g);}
;top=qx.lang.String.trim(B[0]);y=qx.lang.String.trim(B[1]);A=qx.lang.String.trim(B[2]);F=qx.lang.String.trim(B[3]);if(F===d){F=null;}
;if(top===d){top=null;}
;if(y===d){y=null;}
;if(A===d){A=null;}
;if(top!=null){top=parseInt(top,10);}
;if(y!=null){y=parseInt(y,10);}
;if(A!=null){A=parseInt(A,10);}
;if(F!=null){F=parseInt(F,10);}
;if(y!=null&&F!=null){D=y-F;}
else if(y!=null){D=y;}
;if(A!=null&&top!=null){C=A-top;}
else if(A!=null){C=A;}
;}
else {throw new Error(k+z);}
;}
;return {left:F||null,top:top||null,width:D||null,height:C||null};}
,set:function(G,H){if(!H){G.style.clip=f;return;}
;var M=H.left;var top=H.top;var L=H.width;var K=H.height;var I,J;if(M==null){I=(L==null?d:L+a);M=d;}
else {I=(L==null?d:M+L+a);M=M+a;}
;if(top==null){J=(K==null?d:K+a);top=d;}
else {J=(K==null?d:top+K+a);top=top+a;}
;G.style.clip=o+top+b+I+b+J+b+M+n;}
,reset:function(N){N.style.clip=e;}
}});}
)();
(function(){var d="qx.bom.Style",c="string",b="",a="-";qx.Bootstrap.define(d,{statics:{VENDOR_PREFIXES:["Webkit","Moz","O","ms","Khtml"],getPropertyName:function(e){var f=document.documentElement.style;if(f[e]!==undefined){return e;}
;for(var i=0,l=this.VENDOR_PREFIXES.length;i<l;i++){var g=this.VENDOR_PREFIXES[i]+qx.lang.String.firstUp(e);if(f[g]!==undefined){return g;}
;}
;return null;}
,getAppliedStyle:function(h,j,k,m){var n=(m!==false)?[null].concat(this.VENDOR_PREFIXES):[null];for(var i=0,l=n.length;i<l;i++){var o=n[i]?a+n[i].toLowerCase()+a+k:k;try{h.style[j]=o;if(typeof h.style[j]==c&&h.style[j]!==b){return o;}
;}
catch(p){}
;}
;return null;}
}});}
)();
(function(){var k="This client does not support the boxSizing value",j="border-box",i="qx.bom.element.BoxSizing",h="boxSizing",g="content-box",f=":",e=";",d="",c="This client does not support dynamic modification of the boxSizing property.",b="qx.debug",a="css.boxsizing";qx.Bootstrap.define(i,{statics:{__dc:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dd:function(l){var m=this.__dc;return m.tags[l.tagName.toLowerCase()]||m.types[l.type];}
,compile:function(n){if(qx.core.Environment.get(a)){var o=qx.lang.String.hyphenate(qx.core.Environment.get(a));return o+f+n+e;}
else {if(qx.core.Environment.get(b)){qx.log.Logger.warn(this,c);qx.log.Logger.trace();}
;}
;}
,get:function(p){if(qx.core.Environment.get(a)){return qx.bom.element.Style.get(p,h,null,false)||d;}
;if(qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(p))){if(!this.__dd(p)){return g;}
;}
;return j;}
,set:function(q,r){if(qx.core.Environment.get(a)){try{q.style[qx.core.Environment.get(a)]=r;}
catch(s){if(qx.core.Environment.get(b)){qx.log.Logger.warn(this,k,r);}
;}
;}
else {if(qx.core.Environment.get(b)){qx.log.Logger.warn(this,c);}
;}
;}
,reset:function(t){this.set(t,d);}
}});}
)();
(function(){var n="css.float",m="css.borderimage.standardsyntax",l="borderRadius",k="boxSizing",j="stretch",h='m11',g="content",f="css.inlineblock",e="css.gradient.filter",d="css.appearance",bs="css.opacity",br="css.gradient.radial",bq="input",bp="userSelect",bo="css.overflowxy",bn="styleFloat",bm="css.textShadow.filter",bl="css.usermodify",bk="css.boxsizing",bj='url("foo.png") 4 4 4 4 fill stretch',u="css.boxmodel",v="qx.bom.client.Css",s="appearance",t="placeholder",q="css.textShadow",r="DXImageTransform.Microsoft.Shadow",o="css.boxshadow",p="css.gradient.legacywebkit",C="css.borderradius",D="linear-gradient(0deg, #fff, #000)",O="textShadow",L="css.borderimage",W="rgba(1, 2, 3, 0.5)",R="color=#666666,direction=45",bf="radial-gradient(0px 0px, cover, red 50%, blue 100%)",bc="rgba",H="(",bi='url("foo.png") 4 4 4 4 stretch',bh="css.gradient.linear",bg="DXImageTransform.Microsoft.Gradient",G="css.userselect",J="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",K="mshtml",N="css.rgba",P=");",S="4 fill",Y='WebKitCSSMatrix',be="red 1px 1px 3px",w="none",x="startColorStr=#550000FF, endColorStr=#55FFFF00",I="progid:",V="css.placeholder",U="css.userselect.none",T="css.textoverflow",bb="textOverflow",ba="userModify",Q="boxShadow",X="cssFloat",a="border",bd="color",y="borderImage",z="foo.png",M="span",b="string",c="-moz-none",F="backgroundImage",A="inline-block",B="-moz-inline-box",E="div";qx.Bootstrap.define(v,{statics:{__de:null,getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==K||!qx.bom.client.Browser.getQuirksMode();return content?g:a;}
,getTextOverflow:function(){return qx.bom.Style.getPropertyName(bb);}
,getPlaceholder:function(){var i=document.createElement(bq);return t in i;}
,getAppearance:function(){return qx.bom.Style.getPropertyName(s);}
,getBorderRadius:function(){return qx.bom.Style.getPropertyName(l);}
,getBoxShadow:function(){return qx.bom.Style.getPropertyName(Q);}
,getBorderImage:function(){return qx.bom.Style.getPropertyName(y);}
,getBorderImageSyntax:function(){var bu=qx.bom.client.Css.getBorderImage();if(!bu){return null;}
;var bt=document.createElement(E);if(bu===y){bt.style[bu]=bj;if(bt.style.borderImageSource.indexOf(z)>=0&&bt.style.borderImageSlice.indexOf(S)>=0&&bt.style.borderImageRepeat.indexOf(j)>=0){return true;}
;}
else {bt.style[bu]=bi;if(bt.style[bu].indexOf(z)>=0){return false;}
;}
;return null;}
,getUserSelect:function(){return qx.bom.Style.getPropertyName(bp);}
,getUserSelectNone:function(){var bw=qx.bom.client.Css.getUserSelect();if(bw){var bv=document.createElement(M);bv.style[bw]=c;return bv.style[bw]===c?c:w;}
;return null;}
,getUserModify:function(){return qx.bom.Style.getPropertyName(ba);}
,getFloat:function(){var bx=document.documentElement.style;return bx.cssFloat!==undefined?X:bx.styleFloat!==undefined?bn:null;}
,getTranslate3d:function(){return Y in window&&h in new WebKitCSSMatrix();}
,getLinearGradient:function(){qx.bom.client.Css.__de=false;var bB=D;var by=document.createElement(E);var bz=qx.bom.Style.getAppliedStyle(by,F,bB);if(!bz){bB=J;var bz=qx.bom.Style.getAppliedStyle(by,F,bB,false);if(bz){qx.bom.client.Css.__de=true;}
;}
;if(!bz){return null;}
;var bA=/(.*?)\(/.exec(bz);return bA?bA[1]:null;}
,getFilterGradient:function(){return qx.bom.client.Css.__df(bg,x);}
,getRadialGradient:function(){var bF=bf;var bC=document.createElement(E);var bD=qx.bom.Style.getAppliedStyle(bC,F,bF);if(!bD){return null;}
;var bE=/(.*?)\(/.exec(bD);return bE?bE[1]:null;}
,getLegacyWebkitGradient:function(){if(qx.bom.client.Css.__de===null){qx.bom.client.Css.getLinearGradient();}
;return qx.bom.client.Css.__de;}
,getRgba:function(){var bG;try{bG=document.createElement(E);}
catch(bH){bG=document.createElement();}
;try{bG.style[bd]=W;if(bG.style[bd].indexOf(bc)!=-1){return true;}
;}
catch(bI){}
;return false;}
,getBoxSizing:function(){return qx.bom.Style.getPropertyName(k);}
,getInlineBlock:function(){var bJ=document.createElement(M);bJ.style.display=A;if(bJ.style.display==A){return A;}
;bJ.style.display=B;if(bJ.style.display!==B){return B;}
;return null;}
,getOpacity:function(){return (typeof document.documentElement.style.opacity==b);}
,getOverflowXY:function(){return (typeof document.documentElement.style.overflowX==b)&&(typeof document.documentElement.style.overflowY==b);}
,getTextShadow:function(){var bM=be;var bK=document.createElement(E);var bL=qx.bom.Style.getAppliedStyle(bK,O,bM);return !bL;}
,getFilterTextShadow:function(){return qx.bom.client.Css.__df(r,R);}
,__df:function(bN,bO){var bQ=false;var bR=I+bN+H+bO+P;var bP=document.createElement(E);document.body.appendChild(bP);bP.style.filter=bR;if(bP.filters&&bP.filters.length>0&&bP.filters.item(bN).enabled==true){bQ=true;}
;document.body.removeChild(bP);return bQ;}
},defer:function(bS){qx.core.Environment.add(T,bS.getTextOverflow);qx.core.Environment.add(V,bS.getPlaceholder);qx.core.Environment.add(C,bS.getBorderRadius);qx.core.Environment.add(o,bS.getBoxShadow);qx.core.Environment.add(bh,bS.getLinearGradient);qx.core.Environment.add(e,bS.getFilterGradient);qx.core.Environment.add(br,bS.getRadialGradient);qx.core.Environment.add(p,bS.getLegacyWebkitGradient);qx.core.Environment.add(u,bS.getBoxModel);qx.core.Environment.add(N,bS.getRgba);qx.core.Environment.add(L,bS.getBorderImage);qx.core.Environment.add(m,bS.getBorderImageSyntax);qx.core.Environment.add(bl,bS.getUserModify);qx.core.Environment.add(G,bS.getUserSelect);qx.core.Environment.add(U,bS.getUserSelectNone);qx.core.Environment.add(d,bS.getAppearance);qx.core.Environment.add(n,bS.getFloat);qx.core.Environment.add(bk,bS.getBoxSizing);qx.core.Environment.add(f,bS.getInlineBlock);qx.core.Environment.add(bs,bS.getOpacity);qx.core.Environment.add(bo,bS.getOverflowXY);qx.core.Environment.add(q,bS.getTextShadow);qx.core.Environment.add(bm,bS.getFilterTextShadow);}
});}
)();
(function(){var k="engine.name",j="",i="cursor:",h=";",g="qx.bom.element.Cursor",f="cursor",e="hand",d="nw-resize",c="ne-resize",b="n-resize",a="e-resize";qx.Bootstrap.define(g,{statics:{__bd:qx.core.Environment.select(k,{"mshtml":{"cursor":e,"ew-resize":a,"ns-resize":b,"nesw-resize":c,"nwse-resize":d},"opera":{"col-resize":a,"row-resize":b,"ew-resize":a,"ns-resize":b,"nesw-resize":c,"nwse-resize":d},"default":{}}),compile:function(l){return i+(this.__bd[l]||l)+h;}
,get:function(m,n){return qx.bom.element.Style.get(m,f,n,false);}
,set:function(o,p){o.style.cursor=this.__bd[p]||p;}
,reset:function(q){q.style.cursor=j;}
}});}
)();
(function(){var m="MozOpacity",l=");",k=")",j="zoom:1;filter:alpha(opacity=",i="qx.bom.element.Opacity",h="css.opacity",g="alpha(opacity=",f=";",e="opacity:",d="opacity",a="filter",c="engine.name",b="";qx.Bootstrap.define(i,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Environment.select(c,{"mshtml":function(n){if(n>=1){n=1;}
;if(n<0.00001){n=0;}
;if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return e+n+f;}
else {return j+(n*100)+l;}
;}
,"gecko":function(o){if(o>=1){o=0.999999;}
;return e+o+f;}
,"default":function(p){if(p>=1){return b;}
;return e+p+f;}
}),set:qx.core.Environment.select(c,{"mshtml":function(q,r){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(r>=1){r=b;}
;q.style.opacity=r;}
else {var s=qx.bom.element.Style.get(q,a,qx.bom.element.Style.COMPUTED_MODE,false);if(r>=1){r=1;}
;if(r<0.00001){r=0;}
;if(!q.currentStyle||!q.currentStyle.hasLayout){q.style.zoom=1;}
;q.style.filter=s.replace(/alpha\([^\)]*\)/gi,b)+g+r*100+k;}
;}
,"gecko":function(t,u){if(u>=1){u=0.999999;}
;if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){t.style.MozOpacity=u;}
else {t.style.opacity=u;}
;}
,"default":function(v,w){if(w>=1){w=b;}
;v.style.opacity=w;}
}),reset:qx.core.Environment.select(c,{"mshtml":function(x){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){x.style.opacity=b;}
else {var y=qx.bom.element.Style.get(x,a,qx.bom.element.Style.COMPUTED_MODE,false);x.style.filter=y.replace(/alpha\([^\)]*\)/gi,b);}
;}
,"gecko":function(z){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){z.style.MozOpacity=b;}
else {z.style.opacity=b;}
;}
,"default":function(A){A.style.opacity=b;}
}),get:qx.core.Environment.select(c,{"mshtml":function(B,C){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var D=qx.bom.element.Style.get(B,d,C,false);if(D!=null){return parseFloat(D);}
;return 1.0;}
else {var E=qx.bom.element.Style.get(B,a,C,false);if(E){var D=E.match(/alpha\(opacity=(.*)\)/);if(D&&D[1]){return parseFloat(D[1])/100;}
;}
;return 1.0;}
;}
,"gecko":function(F,G){var H=qx.bom.element.Style.get(F,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?m:d,G,false);if(H==0.999999){H=1.0;}
;if(H!=null){return parseFloat(H);}
;return 1.0;}
,"default":function(I,J){var K=qx.bom.element.Style.get(I,d,J,false);if(K!=null){return parseFloat(K);}
;return 1.0;}
})},defer:function(L){L.SUPPORT_CSS3_OPACITY=qx.core.Environment.get(h);}
});}
)();
(function(){var j="css.float",i="px",h="Cascaded styles are not supported in this browser!",g="css.appearance",f="pixelRight",e="css.userselect",d="css.boxsizing",c="css.textoverflow",b="pixelHeight",a=":",E="pixelTop",D="css.borderimage",C="Invalid argument 'name'",B="pixelLeft",A="css.usermodify",z="qx.bom.element.Style",y=". Only pixel values work well across different clients.",x="pixelBottom",w="Invalid argument 'styles'",v="pixelWidth",q="Untranslated computed property value: ",r=";",o="float",p="qx.debug",m="browser.documentmode",n="mshtml",k="Invalid argument 'smart'",l="Invalid argument 'element'",s="style",t="engine.name",u="";qx.Bootstrap.define(z,{statics:{__dm:function(){var G={"appearance":qx.core.Environment.get(g),"userSelect":qx.core.Environment.get(e),"textOverflow":qx.core.Environment.get(c),"borderImage":qx.core.Environment.get(D),"float":qx.core.Environment.get(j),"userModify":qx.core.Environment.get(A),"boxSizing":qx.core.Environment.get(d)};this.__dn={};for(var F in qx.lang.Object.clone(G)){if(!G[F]){delete G[F];}
else {this.__dn[F]=F==o?o:qx.lang.String.hyphenate(G[F]);}
;}
;this.__do=G;}
,__dp:function(name){var H=qx.bom.Style.getPropertyName(name);if(H){this.__do[name]=H;}
;return H;}
,__dq:{width:v,height:b,left:B,right:f,top:E,bottom:x},__dr:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(I){var K=[];var L=this.__dr;var M=this.__dn;var name,J;for(name in I){J=I[name];if(J==null){continue;}
;name=this.__do[name]||this.__dp(name)||name;if(L[name]){K.push(L[name].compile(J));}
else {if(!M[name]){M[name]=qx.lang.String.hyphenate(name);}
;K.push(M[name],a,J,r);}
;}
;return K.join(u);}
,setCss:function(N,O){if(qx.core.Environment.get(t)===n&&parseInt(qx.core.Environment.get(m),10)<8){N.style.cssText=O;}
else {N.setAttribute(s,O);}
;}
,getCss:function(P){if(qx.core.Environment.get(t)===n&&parseInt(qx.core.Environment.get(m),10)<8){return P.style.cssText.toLowerCase();}
else {return P.getAttribute(s);}
;}
,isPropertySupported:function(Q){return (this.__dr[Q]||this.__do[Q]||Q in document.documentElement.style);}
,COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(R,name,S,T){if(qx.core.Environment.get(p)){qx.core.Assert.assertElement(R,l);qx.core.Assert.assertString(name,C);if(T!==undefined){qx.core.Assert.assertBoolean(T,k);}
;}
;name=this.__do[name]||this.__dp(name)||name;if(T!==false&&this.__dr[name]){return this.__dr[name].set(R,S);}
else {R.style[name]=S!==null?S:u;}
;}
,setStyles:function(U,V,W){if(qx.core.Environment.get(p)){qx.core.Assert.assertElement(U,l);qx.core.Assert.assertMap(V,w);if(W!==undefined){qx.core.Assert.assertBoolean(W,k);}
;}
;var ba=this.__do;var bc=this.__dr;var X=U.style;for(var bb in V){var Y=V[bb];var name=ba[bb]||this.__dp(bb)||bb;if(Y===undefined){if(W!==false&&bc[name]){bc[name].reset(U);}
else {X[name]=u;}
;}
else {if(W!==false&&bc[name]){bc[name].set(U,Y);}
else {X[name]=Y!==null?Y:u;}
;}
;}
;}
,reset:function(bd,name,be){name=this.__do[name]||this.__dp(name)||name;if(be!==false&&this.__dr[name]){return this.__dr[name].reset(bd);}
else {bd.style[name]=u;}
;}
,get:qx.core.Environment.select(t,{"mshtml":function(bf,name,bg,bh){name=this.__do[name]||this.__dp(name)||name;if(bh!==false&&this.__dr[name]){return this.__dr[name].get(bf,bg);}
;if(!bf.currentStyle){return bf.style[name]||u;}
;switch(bg){case this.LOCAL_MODE:return bf.style[name]||u;case this.CASCADED_MODE:return bf.currentStyle[name]||u;default:var bl=bf.currentStyle[name]||u;if(/^-?[\.\d]+(px)?$/i.test(bl)){return bl;}
;var bk=this.__dq[name];if(bk){var bi=bf.style[name];bf.style[name]=bl||0;var bj=bf.style[bk]+i;bf.style[name]=bi;return bj;}
;if(/^-?[\.\d]+(em|pt|%)?$/i.test(bl)){throw new Error(q+name+y);}
;return bl;};}
,"default":function(bm,name,bn,bo){name=this.__do[name]||this.__dp(name)||name;if(bo!==false&&this.__dr[name]){return this.__dr[name].get(bm,bn);}
;switch(bn){case this.LOCAL_MODE:return bm.style[name]||u;case this.CASCADED_MODE:if(bm.currentStyle){return bm.currentStyle[name]||u;}
;throw new Error(h);default:var bp=qx.dom.Node.getDocument(bm);var bq=bp.defaultView.getComputedStyle(bm,null);return bq?bq[name]:u;};}
})},defer:function(br){br.__dm();}
});}
)();
(function(){var j="qx.bom.element.Location",i="paddingLeft",h="static",g="marginBottom",f="visible",e="BODY",d="paddingBottom",c="paddingTop",b="gecko",a="marginRight",D="mshtml",C="position",B="margin",A="overflow",z="paddingRight",y="browser.documentmode",x="border",w="borderBottomWidth",v="borderRightWidth",u="auto",q="padding",r="browser.quirksmode",o="engine.version",p="marginTop",m="marginLeft",n="border-box",k="engine.name",l="scroll",s="borderTopWidth",t="borderLeftWidth";qx.Bootstrap.define(j,{statics:{__gz:function(E,F){return qx.bom.element.Style.get(E,F,qx.bom.element.Style.COMPUTED_MODE,false);}
,__gA:function(G,H){return parseInt(qx.bom.element.Style.get(G,H,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;}
,__gB:function(I){var K=0,top=0;var J=qx.dom.Node.getWindow(I);K-=qx.bom.Viewport.getScrollLeft(J);top-=qx.bom.Viewport.getScrollTop(J);return {left:K,top:top};}
,__gC:qx.core.Environment.select(k,{"mshtml":function(L){var N=qx.dom.Node.getDocument(L);var M=N.body;var O=0;var top=0;O-=M.clientLeft+N.documentElement.clientLeft;top-=M.clientTop+N.documentElement.clientTop;if(!qx.core.Environment.get(r)){O+=this.__gA(M,t);top+=this.__gA(M,s);}
;return {left:O,top:top};}
,"webkit":function(P){var R=qx.dom.Node.getDocument(P);var Q=R.body;var S=Q.offsetLeft;var top=Q.offsetTop;if(parseFloat(qx.core.Environment.get(o))<530.17){S+=this.__gA(Q,t);top+=this.__gA(Q,s);}
;return {left:S,top:top};}
,"gecko":function(T){var U=qx.dom.Node.getDocument(T).body;var V=U.offsetLeft;var top=U.offsetTop;if(parseFloat(qx.core.Environment.get(o))<1.9){V+=this.__gA(U,m);top+=this.__gA(U,p);}
;if(qx.bom.element.BoxSizing.get(U)!==n){V+=this.__gA(U,t);top+=this.__gA(U,s);}
;return {left:V,top:top};}
,"default":function(W){var X=qx.dom.Node.getDocument(W).body;var Y=X.offsetLeft;var top=X.offsetTop;return {left:Y,top:top};}
}),__gD:qx.core.Environment.select(k,{"gecko":function(ba){if(ba.getBoundingClientRect){var bd=ba.getBoundingClientRect();var be=Math.round(bd.left);var top=Math.round(bd.top);}
else {var be=0;var top=0;var bb=qx.dom.Node.getDocument(ba).body;var bc=qx.bom.element.BoxSizing;if(bc.get(ba)!==n){be-=this.__gA(ba,t);top-=this.__gA(ba,s);}
;while(ba&&ba!==bb){be+=ba.offsetLeft;top+=ba.offsetTop;if(bc.get(ba)!==n){be+=this.__gA(ba,t);top+=this.__gA(ba,s);}
;if(ba.parentNode&&this.__gz(ba.parentNode,A)!=f){be+=this.__gA(ba.parentNode,t);top+=this.__gA(ba.parentNode,s);}
;ba=ba.offsetParent;}
;}
;return {left:be,top:top};}
,"default":function(bf){var bh=qx.dom.Node.getDocument(bf);if(bf.getBoundingClientRect){var bi=bf.getBoundingClientRect();var bj=Math.round(bi.left);var top=Math.round(bi.top);}
else {var bj=bf.offsetLeft;var top=bf.offsetTop;bf=bf.offsetParent;var bg=bh.body;while(bf&&bf!=bg){bj+=bf.offsetLeft;top+=bf.offsetTop;bj+=this.__gA(bf,t);top+=this.__gA(bf,s);bf=bf.offsetParent;}
;}
;return {left:bj,top:top};}
}),get:function(bk,bl){if(bk.tagName==e){var location=this.__gE(bk);var bs=location.left;var top=location.top;}
else {var bm=this.__gC(bk);var br=this.__gD(bk);var scroll=this.__gB(bk);var bs=br.left+bm.left-scroll.left;var top=br.top+bm.top-scroll.top;}
;var bn=bs+bk.offsetWidth;var bo=top+bk.offsetHeight;if(bl){if(bl==q||bl==l){var bp=qx.bom.element.Overflow.getX(bk);if(bp==l||bp==u){bn+=bk.scrollWidth-bk.offsetWidth+this.__gA(bk,t)+this.__gA(bk,v);}
;var bq=qx.bom.element.Overflow.getY(bk);if(bq==l||bq==u){bo+=bk.scrollHeight-bk.offsetHeight+this.__gA(bk,s)+this.__gA(bk,w);}
;}
;switch(bl){case q:bs+=this.__gA(bk,i);top+=this.__gA(bk,c);bn-=this.__gA(bk,z);bo-=this.__gA(bk,d);case l:bs-=bk.scrollLeft;top-=bk.scrollTop;bn-=bk.scrollLeft;bo-=bk.scrollTop;case x:bs+=this.__gA(bk,t);top+=this.__gA(bk,s);bn-=this.__gA(bk,v);bo-=this.__gA(bk,w);break;case B:bs-=this.__gA(bk,m);top-=this.__gA(bk,p);bn+=this.__gA(bk,a);bo+=this.__gA(bk,g);break;};}
;return {left:bs,top:top,right:bn,bottom:bo};}
,__gE:function(bt){var top=bt.offsetTop;var bu=bt.offsetLeft;if(qx.core.Environment.get(k)!==D||!((parseFloat(qx.core.Environment.get(o))<8||qx.core.Environment.get(y)<8)&&!qx.core.Environment.get(r))){top+=this.__gA(bt,p);bu+=this.__gA(bt,m);}
;if(qx.core.Environment.get(k)===b){top+=this.__gA(bt,t);bu+=this.__gA(bt,s);}
;return {left:bu,top:top};}
,getLeft:function(bv,bw){return this.get(bv,bw).left;}
,getTop:function(bx,by){return this.get(bx,by).top;}
,getRight:function(bz,bA){return this.get(bz,bA).right;}
,getBottom:function(bB,bC){return this.get(bB,bC).bottom;}
,getRelative:function(bD,bE,bF,bG){var bI=this.get(bD,bF);var bH=this.get(bE,bG);return {left:bI.left-bH.left,top:bI.top-bH.top,right:bI.right-bH.right,bottom:bI.bottom-bH.bottom};}
,getPosition:function(bJ){return this.getRelative(bJ,this.getOffsetParent(bJ));}
,getOffsetParent:function(bK){var bM=bK.offsetParent||document.body;var bL=qx.bom.element.Style;while(bM&&(!/^body|html$/i.test(bM.tagName)&&bL.get(bM,C)===h)){bM=bM.offsetParent;}
;return bM;}
}});}
)();
(function(){var t="touchend",s=" due to exceptions in user code. The application has to be reloaded!",r="Error in the 'Appearance' queue:",q="Error in the 'Widget' queue:",p="\n",o="Error in the 'Layout' queue:",n="Error in the 'Visibility' queue:",m="useraction",l="Error while layout flush: ",k='ie',d="Error in the 'Dispose' queue:",j="Stack trace: \n",h="event.touch",c="browser.version",b=" times in a row",g="qx.ui.core.queue.Manager",f="browser.name",i="Fatal Error: Flush terminated ",a="qx.debug";qx.Class.define(g,{statics:{__gS:false,__gT:{},__gU:0,MAX_RETRIES:10,scheduleFlush:function(u){var self=qx.ui.core.queue.Manager;self.__gT[u]=true;if(!self.__gS){self.__ek.schedule();self.__gS=true;}
;}
,flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;}
;var self=qx.ui.core.queue.Manager;if(self.__gV){return;}
;self.__gV=true;self.__ek.cancel();var v=self.__gT;self.__gW(function(){while(v.visibility||v.widget||v.appearance||v.layout||v.element){if(v.widget){delete v.widget;if(qx.core.Environment.get(a)){try{qx.ui.core.queue.Widget.flush();}
catch(e){qx.log.Logger.error(q+e);}
;}
else {qx.ui.core.queue.Widget.flush();}
;}
;if(v.visibility){delete v.visibility;if(qx.core.Environment.get(a)){try{qx.ui.core.queue.Visibility.flush();}
catch(e){qx.log.Logger.error(n+e);}
;}
else {qx.ui.core.queue.Visibility.flush();}
;}
;if(v.appearance){delete v.appearance;if(qx.core.Environment.get(a)){try{qx.ui.core.queue.Appearance.flush();}
catch(e){qx.log.Logger.error(r+e);}
;}
else {qx.ui.core.queue.Appearance.flush();}
;}
;if(v.widget||v.visibility||v.appearance){continue;}
;if(v.layout){delete v.layout;if(qx.core.Environment.get(a)){try{qx.ui.core.queue.Layout.flush();}
catch(e){qx.log.Logger.error(o+e);}
;}
else {qx.ui.core.queue.Layout.flush();}
;}
;if(v.widget||v.visibility||v.appearance||v.layout){continue;}
;if(v.element){delete v.element;qx.html.Element.flush();}
;}
;}
,function(){self.__gS=false;}
);self.__gW(function(){if(v.dispose){delete v.dispose;if(qx.core.Environment.get(a)){try{qx.ui.core.queue.Dispose.flush();}
catch(e){qx.log.Logger.error(d+e);}
;}
else {qx.ui.core.queue.Dispose.flush();}
;}
;}
,function(){self.__gV=false;}
);self.__gU=0;}
,__gW:qx.core.Environment.select(a,{"true":function(w,x){w();x();}
,"false":function(y,z){var self=qx.ui.core.queue.Manager;try{y();}
catch(e){if(qx.core.Environment.get(a)){qx.log.Logger.error(l+e+p+j+qx.dev.StackTrace.getStackTraceFromError(e));}
;self.__gS=false;self.__gV=false;self.__gU+=1;if(qx.core.Environment.get(f)==k&&qx.core.Environment.get(c)<=7){z();}
;if(self.__gU<=self.MAX_RETRIES){self.scheduleFlush();}
else {throw new Error(i+(self.__gU-1)+b+s);}
;throw e;}
finally{z();}
;}
}),__gX:function(e){var A=qx.ui.core.queue.Manager;if(e.getData()==t){A.PAUSE=true;if(A.__gY){window.clearTimeout(A.__gY);}
;A.__gY=window.setTimeout(function(){A.PAUSE=false;A.__gY=null;A.flush();}
,500);}
else {A.flush();}
;}
},defer:function(B){B.__ek=new qx.util.DeferredCall(B.flush);qx.html.Element._scheduleFlush=B.scheduleFlush;qx.event.Registration.addListener(window,m,qx.core.Environment.get(h)?B.__gX:B.flush);}
});}
)();
(function(){var c="qx.ui.core.queue.Widget",b="widget",a="$$default";qx.Class.define(c,{statics:{__gO:[],__gT:{},remove:function(d,e){var f=this.__gO;if(!qx.lang.Array.contains(f,d)){return;}
;var g=d.$$hash;if(e==null){qx.lang.Array.remove(f,d);delete this.__gT[g];return;}
;if(this.__gT[g]){delete this.__gT[g][e];if(qx.lang.Object.getLength(this.__gT[g])==0){qx.lang.Array.remove(f,d);}
;}
;}
,add:function(h,j){var k=this.__gO;if(!qx.lang.Array.contains(k,h)){k.unshift(h);}
;if(j==null){j=a;}
;var l=h.$$hash;if(!this.__gT[l]){this.__gT[l]={};}
;this.__gT[l][j]=true;qx.ui.core.queue.Manager.scheduleFlush(b);}
,flush:function(){var m=this.__gO;var o,n;for(var i=m.length-1;i>=0;i--){o=m[i];n=this.__gT[o.$$hash];m.splice(i,1);o.syncWidget(n);}
;if(m.length!=0){return;}
;this.__gO=[];this.__gT={};}
}});}
)();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";qx.Class.define(b,{statics:{__gO:[],__cR:{},remove:function(c){delete this.__cR[c.$$hash];qx.lang.Array.remove(this.__gO,c);}
,isVisible:function(d){return this.__cR[d.$$hash]||false;}
,__ha:function(e){var g=this.__cR;var f=e.$$hash;var h;if(e.isExcluded()){h=false;}
else {var parent=e.$$parent;if(parent){h=this.__ha(parent);}
else {h=e.isRootWidget();}
;}
;return g[f]=h;}
,add:function(j){var k=this.__gO;if(qx.lang.Array.contains(k,j)){return;}
;k.unshift(j);qx.ui.core.queue.Manager.scheduleFlush(a);}
,flush:function(){var o=this.__gO;var p=this.__cR;for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;if(p[n]!=null){o[i].addChildrenToQueue(o);}
;}
;var l={};for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;l[n]=p[n];p[n]=null;}
;for(var i=o.length-1;i>=0;i--){var m=o[i];var n=m.$$hash;o.splice(i,1);if(p[n]==null){this.__ha(m);}
;if(p[n]&&p[n]!=l[n]){m.checkAppearanceNeeds();}
;}
;this.__gO=[];}
}});}
)();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";qx.Class.define(a,{statics:{__gO:[],remove:function(c){qx.lang.Array.remove(this.__gO,c);}
,add:function(d){var e=this.__gO;if(qx.lang.Array.contains(e,d)){return;}
;e.unshift(d);qx.ui.core.queue.Manager.scheduleFlush(b);}
,has:function(f){return qx.lang.Array.contains(this.__gO,f);}
,flush:function(){var j=qx.ui.core.queue.Visibility;var g=this.__gO;var h;for(var i=g.length-1;i>=0;i--){h=g[i];g.splice(i,1);if(j.isVisible(h)){h.syncAppearance();}
else {h.$$stateChanges=true;}
;}
;}
}});}
)();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";qx.Class.define(a,{statics:{__gO:[],add:function(c){var d=this.__gO;if(qx.lang.Array.contains(d,c)){return;}
;d.unshift(c);qx.ui.core.queue.Manager.scheduleFlush(b);}
,isEmpty:function(){return this.__gO.length==0;}
,flush:function(){var e=this.__gO;for(var i=e.length-1;i>=0;i--){var f=e[i];e.splice(i,1);f.dispose();}
;if(e.length!=0){return;}
;this.__gO=[];}
}});}
)();
(function(){var o="qx.core.BaseInit",n="engine.name",m="Main runtime: ",l="qx.application",k="os.name",j="engine.version",i="Missing application class: ",h="Load runtime: ",g="Could not detect engine!",f="Finalize runtime: ",b="Could not detect operating system!",d="Could not detect the version of the engine!",c="",a="ms";qx.Class.define(o,{statics:{getApplication:function(){return this.__hb||null;}
,ready:function(){if(this.__hb){return;}
;if(qx.core.Environment.get(n)==c){qx.log.Logger.warn(g);}
;if(qx.core.Environment.get(j)==c){qx.log.Logger.warn(d);}
;if(qx.core.Environment.get(k)==c){qx.log.Logger.warn(b);}
;qx.log.Logger.debug(this,h+(new Date-qx.Bootstrap.LOADSTART)+a);var q=qx.core.Environment.get(l);var r=qx.Class.getByName(q);if(r){this.__hb=new r;var p=new Date;this.__hb.main();qx.log.Logger.debug(this,m+(new Date-p)+a);var p=new Date;this.__hb.finalize();qx.log.Logger.debug(this,f+(new Date-p)+a);}
else {qx.log.Logger.warn(i+q);}
;}
,__hc:function(e){var s=this.__hb;if(s){s.close();}
;}
,__hd:function(){var t=this.__hb;if(t){t.terminate();}
;qx.core.ObjectRegistry.shutdown();}
}});}
)();
(function(){var n="qx.event.handler.Application",m="complete",l="webkit",k="gecko",j="opera",i="left",h="DOMContentLoaded",g="shutdown",f="mshtml",d="load",a="unload",c="ready",b="engine.name";qx.Class.define(n,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);this._window=o.getWindow();this.__he=false;this.__hf=false;this.__hg=false;this.__hh=false;this._initObserver();qx.event.handler.Application.$$instance=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;if(p){p.__hi();}
;}
},members:{canHandleEvent:function(q,r){}
,registerEvent:function(s,t,u){}
,unregisterEvent:function(v,w,x){}
,__hg:null,__he:null,__hf:null,__hh:null,__hi:function(){if(!this.__hg&&this.__he&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(b)==f)){if(qx.event.Registration.hasListener(this._window,c)){this.__hg=true;qx.event.Registration.fireEvent(this._window,c);}
;}
else {this.__hg=true;qx.event.Registration.fireEvent(this._window,c);}
;}
;}
,isApplicationReady:function(){return this.__hg;}
,_initObserver:function(){if(qx.$$domReady||document.readyState==m||document.readyState==c){this.__he=true;this.__hi();}
else {this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);if(qx.core.Environment.get(b)==k||qx.core.Environment.get(b)==j||qx.core.Environment.get(b)==l){qx.bom.Event.addNativeListener(this._window,h,this._onNativeLoadWrapped);}
else if((qx.core.Environment.get(b)==f)){var self=this;var y=function(){try{document.documentElement.doScroll(i);if(document.body){self._onNativeLoadWrapped();}
;}
catch(z){window.setTimeout(y,100);}
;}
;y();}
;qx.bom.Event.addNativeListener(this._window,d,this._onNativeLoadWrapped);}
;this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);qx.bom.Event.addNativeListener(this._window,a,this._onNativeUnloadWrapped);}
,_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,d,this._onNativeLoadWrapped);}
;qx.bom.Event.removeNativeListener(this._window,a,this._onNativeUnloadWrapped);this._onNativeLoadWrapped=null;this._onNativeUnloadWrapped=null;}
,_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__he=true;this.__hi();}
),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__hh){this.__hh=true;try{qx.event.Registration.fireEvent(this._window,g);}
catch(e){throw e;}
finally{qx.core.ObjectRegistry.shutdown();}
;}
;}
)},destruct:function(){this._stopObserver();this._window=null;}
,defer:function(A){qx.event.Registration.addHandler(A);}
});}
)();
(function(){var d="ready",c="shutdown",b="beforeunload",a="qx.core.Init";qx.Class.define(a,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__hc:function(e){var f=this.getApplication();if(f){e.setReturnValue(f.close());}
;}
,__hd:function(){var g=this.getApplication();if(g){g.terminate();}
;}
},defer:function(h){qx.event.Registration.addListener(window,d,h.ready,h);qx.event.Registration.addListener(window,c,h.__hd,h);qx.event.Registration.addListener(window,b,h.__hc,h);}
});}
)();
(function(){var j="decorator",i="qxType",h="",g="qx.ui.core.DecoratorFactory",f="qx.ui.core.DecoratorFactory[",e="$$nopool$$",d="] ",c="keys: ",b=", elements: ",a="qx.debug";qx.Class.define(g,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__cQ={};}
,statics:{MAX_SIZE:15,__cY:e},members:{__cQ:null,getDecoratorElement:function(k){var p=qx.ui.core.DecoratorFactory;if(qx.lang.Type.isString(k)){var n=k;var m=qx.theme.manager.Decoration.getInstance().resolve(k);}
else {var n=p.__cY;m=k;}
;var o=this.__cQ;if(o[n]&&o[n].length>0){var l=o[n].pop();}
else {var l=this._createDecoratorElement(m,n);}
;l.$$pooled=false;return l;}
,poolDecorator:function(q){if(!q||q.$$pooled||q.isDisposed()){return;}
;var t=qx.ui.core.DecoratorFactory;var r=q.getId();if(r==t.__cY){q.dispose();return;}
;var s=this.__cQ;if(!s[r]){s[r]=[];}
;if(s[r].length>t.MAX_SIZE){q.dispose();}
else {q.$$pooled=true;s[r].push(q);}
;}
,_createDecoratorElement:function(u,v){var w=new qx.html.Decorator(u,v);if(qx.core.Environment.get(a)){w.setAttribute(i,j);}
;return w;}
,toString:qx.core.Environment.select(a,{"true":function(){var x=0;var y=0;for(var z in this.__cQ){x+=1;y+=this.__cQ[z].length;}
;return [f,this.$$hash,d,c,x,b,y].join(h);}
,"false":function(){return qx.core.Object.prototype.toString.call(this);}
})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var B=this.__cQ;for(var A in B){qx.util.DisposeUtil.disposeArray(B,A);}
;}
;this.__cQ=null;}
});}
)();
(function(){var o="_applyTheme",n="",m="_",l="Missing definition of which decorator to use in entry: ",k="!",j="qx.ui.decoration.",h="qx.theme.manager.Decoration",g=".",f="Theme",e="__da",b="changeTheme",d="string",c="singleton",a="object";qx.Class.define(h,{type:c,extend:qx.core.Object,properties:{theme:{check:f,nullable:true,apply:o,event:b}},members:{__da:null,resolve:function(p){if(!p){return null;}
;if(typeof p===a){return p;}
;var u=this.getTheme();if(!u){return null;}
;var r=this.__da;if(!r){r=this.__da={};}
;var q=r[p];if(q){return q;}
;var x=u.decorations[p];if(!x){return null;}
;if(!x.style){x.style={};}
;var s=x;while(s.include){s=u.decorations[s.include];if(!x.decorator&&s.decorator){x.decorator=s.decorator;}
;if(s.style){for(var w in s.style){if(x.style[w]==undefined){x.style[w]=s.style[w];}
;}
;}
;}
;var t=x.decorator;if(t==null){throw new Error(l+p+k);}
;if(t instanceof Array){var v=t.concat([]);for(var i=0;i<v.length;i++){v[i]=v[i].basename.replace(g,n);}
;var name=j+v.join(m);if(!qx.Class.getByName(name)){qx.Class.define(name,{extend:qx.ui.decoration.DynamicDecorator,include:t});}
;t=qx.Class.getByName(name);}
;return r[p]=(new t).set(x.style);}
,isValidPropertyValue:function(y){if(typeof y===d){return this.isDynamic(y);}
else if(typeof y===a){var z=y.constructor;return qx.Class.hasInterface(z,qx.ui.decoration.IDecorator);}
;return false;}
,isDynamic:function(A){if(!A){return false;}
;var B=this.getTheme();if(!B){return false;}
;return !!B.decorations[A];}
,isCached:function(C){return !this.__da?false:qx.lang.Object.contains(this.__da,C);}
,_applyTheme:function(D,E){var G=qx.util.AliasManager.getInstance();if(E){for(var F in E.aliases){G.remove(F);}
;}
;if(D){for(var F in D.aliases){G.add(F,D.aliases[F]);}
;}
;if(!D){this.__da={};}
;}
},destruct:function(){this._disposeMap(e);}
});}
)();
(function(){var a="qx.ui.decoration.IDecorator";qx.Interface.define(a,{members:{getMarkup:function(){}
,resize:function(b,c,d){}
,tint:function(e,f){}
,getInsets:function(){}
}});}
)();
(function(){var l="abstract",k="insetRight",j="insetTop",i="qx.debug",h="insetBottom",g="qx.ui.decoration.Abstract",f="This decorator is already in-use. Modification is not possible anymore!",e="shorthand",d="insetLeft",c="Abstract method called.",a="Number",b="_applyInsets";qx.Class.define(g,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:l,properties:{insetLeft:{check:a,nullable:true,apply:b},insetRight:{check:a,nullable:true,apply:b},insetBottom:{check:a,nullable:true,apply:b},insetTop:{check:a,nullable:true,apply:b},insets:{group:[j,k,h,d],mode:e}},members:{__db:null,_getDefaultInsets:function(){throw new Error(c);}
,_isInitialized:function(){throw new Error(c);}
,_resetInsets:function(){this.__db=null;}
,getInsets:function(){if(this.__db){return this.__db;}
;var m=this._getDefaultInsets();return this.__db={left:this.getInsetLeft()==null?m.left:this.getInsetLeft(),right:this.getInsetRight()==null?m.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?m.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?m.top:this.getInsetTop()};}
,_applyInsets:function(){if(qx.core.Environment.get(i)){if(this._isInitialized()){throw new Error(f);}
;}
;this.__db=null;}
},destruct:function(){this.__db=null;}
});}
)();
(function(){var p="_tint",o="abstract",n='<div style="',m="_style",l="_getDefaultInsetsFor",k="",j="left",h='</div>',g="qx.ui.decoration.DynamicDecorator",f='">',c="bottom",e="_resize",d="right",b="top",a="px";qx.Class.define(g,{extend:qx.ui.decoration.Abstract,type:o,members:{getStyles:function(){var s={};var r=this._getStyles();for(var q in r){s[qx.lang.String.camelCase(q)]=r[q];}
;return s;}
,_getStyles:function(){var t={};for(var name in this){if(name.indexOf(m)==0&&this[name] instanceof Function){this[name](t);}
;}
;return t;}
,getMarkup:function(){if(this._markup){return this._markup;}
;var u=this._getStyles();if(!this._generateMarkup){var v=[n];v.push(qx.bom.element.Style.compile(u));v.push(f);if(this._getContent){v.push(this._getContent());}
;v.push(h);v=v.join(k);}
else {var v=this._generateMarkup(u);}
;return this._markup=v;}
,resize:function(w,x,y){var A={};for(var name in this){if(name.indexOf(e)==0&&this[name] instanceof Function){var z=this[name](w,x,y);if(A.left==undefined){A.left=z.left;A.top=z.top;}
;if(A.width==undefined){A.width=z.width;A.height=z.height;}
;if(z.elementToApplyDimensions){A.elementToApplyDimensions=z.elementToApplyDimensions;}
;A.left=z.left<A.left?z.left:A.left;A.top=z.top<A.top?z.top:A.top;A.width=z.width>A.width?z.width:A.width;A.height=z.height>A.height?z.height:A.height;}
;}
;if(A.left!=undefined){w.style.left=A.left+a;w.style.top=A.top+a;}
;if(A.width!=undefined){if(A.width<0){A.width=0;}
;if(A.height<0){A.height=0;}
;if(A.elementToApplyDimensions){w=A.elementToApplyDimensions;}
;w.style.width=A.width+a;w.style.height=A.height+a;}
;}
,tint:function(B,C){for(var name in this){if(name.indexOf(p)==0&&this[name] instanceof Function){this[name](B,C,B.style);}
;}
;}
,_isInitialized:function(){return !!this._markup;}
,_getDefaultInsets:function(){var G=[b,d,c,j];var E={};for(var name in this){if(name.indexOf(l)==0&&this[name] instanceof Function){var F=this[name]();for(var i=0;i<G.length;i++){var D=G[i];if(E[D]==undefined){E[D]=F[D];}
;if(F[D]<E[D]){E[D]=F[D];}
;}
;}
;}
;if(E[b]!=undefined){return E;}
;return {top:0,right:0,bottom:0,left:0};}
}});}
)();
(function(){var b="qx.util.ValueManager",a="abstract";qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this._dynamic={};}
,members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];}
,isDynamic:function(d){return !!this._dynamic[d];}
,resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];}
;return e;}
,_setDynamic:function(f){this._dynamic=f;}
,_getDynamic:function(){return this._dynamic;}
},destruct:function(){this._dynamic=null;}
});}
)();
(function(){var j="0",i="qx/static",h="http://",g="https://",f="file://",e="qx.util.AliasManager",d="singleton",c=".",b="static",a="/";qx.Class.define(e,{type:d,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);this.__du={};this.add(b,i);}
,members:{__du:null,_preprocess:function(k){var n=this._getDynamic();if(n[k]===false){return k;}
else if(n[k]===undefined){if(k.charAt(0)===a||k.charAt(0)===c||k.indexOf(h)===0||k.indexOf(g)===j||k.indexOf(f)===0){n[k]=false;return k;}
;if(this.__du[k]){return this.__du[k];}
;var m=k.substring(0,k.indexOf(a));var l=this.__du[m];if(l!==undefined){n[k]=l+k.substring(m.length);}
;}
;return k;}
,add:function(o,p){this.__du[o]=p;var r=this._getDynamic();for(var q in r){if(q.substring(0,q.indexOf(a))===o){r[q]=p+q.substring(o.length);}
;}
;}
,remove:function(s){delete this.__du[s];}
,resolve:function(t){var u=this._getDynamic();if(t!=null){t=this._preprocess(t);}
;return u[t]||t;}
,getAliases:function(){var v={};for(var w in this.__du){v[w]=this.__du[w];}
;return v;}
},destruct:function(){this.__du=null;}
});}
)();
(function(){var d="event.pointer",c="none",b="qx.html.Decorator",a="absolute";qx.Class.define(b,{extend:qx.html.Element,construct:function(e,f){var g={position:a,top:0,left:0};if(qx.core.Environment.get(d)){g.pointerEvents=c;}
;qx.html.Element.call(this,null,g);this.__gF=e;this.__bV=f||e.toHashCode();this.useMarkup(e.getMarkup());}
,members:{__bV:null,__gF:null,getId:function(){return this.__bV;}
,getDecorator:function(){return this.__gF;}
,resize:function(h,i){this.__gF.resize(this.getDomElement(),h,i);this.getAllStyles().left=this.getDomElement().style.left;this.getAllStyles().top=this.getDomElement().style.top;}
,tint:function(j){this.__gF.tint(this.getDomElement(),j);}
,getInsets:function(){return this.__gF.getInsets();}
},destruct:function(){this.__gF=null;}
});}
)();
(function(){var cE="_applyNativeContextMenu",cD="Decorator instances may increase memory usage and ",cC="content",cB="engine.version",cA="_applyBackgroundColor",cz="event.pointer",cy="_applyFocusable",cx=" requires a layout, but no one was defined!",cw="changeShadow",cv="qx.event.type.KeyInput",bF="createChildControl",bE="browser.documentmode",bD="Unsupported control: ",bC="Invalid left decorator inset detected: ",bB="Font",bA="_applyShadow",bz="Invalid layout data: ",by="Could not add widget to itself: ",bx="_applyEnabled",bw="_applySelectable",cL="Number",cM="_applyKeepActive",cJ="__hp",cK="_applyVisibility",cH="The 'before' widget is not a child of this widget!",cI="Child control '",cF="repeat",cG="qxDraggable",cN="__hj",cO="syncAppearance",ce='" while styling ',cd="paddingLeft",cg="_applyDroppable",cf="Wrong 'left' argument. ",ci="protector",ch="#",ck="'Child' must be an instance of qx.ui.core.LayoutItem!",cj="Remove Error: ",cc="qx.event.type.MouseWheel",cb="_applyCursor",n="_applyDraggable",o="__hk",p="At least one child in control ",q="changeTextColor",r="$$widget",s="changeContextMenu",t="paddingTop",u="changeSelectable",v="hideFocus",w="Invalid top decorator inset detected: ",dd="none",dc="__hs",db="outline",da="The 'after' widget is not a child of this widget!",dh="_applyAppearance",dg=" returned an invalid size hint!",df="_applyOpacity",de="url(",dj=")",di="qx.ui.core.Widget",V="minHeight is larger than maxHeight!",W="TabIndex property must be between 1 and 32000",T="_applyFont",U="cursor",ba="__hu",bb="qxDroppable",X="' already created!",Y="changeZIndex",R="changeEnabled",S="Abstract method call: _getContentHeightForWidth()!",E="changeFont",D="_applyDecorator",G="_applyZIndex",F="_applyTextColor",A=' has no themeable property "',z="qx.ui.menu.Menu",C="Invalid right decorator inset detected: ",B="Invalid widget to add: ",y="_applyToolTipText",x="The layout of the widget",bg=" is not a child of this widget!",bh="true",bi="widget",bj="Wrong 'top' argument. ",bc="changeDecorator",bd="changeBackgroundColor",be="_applyTabIndex",bf="Invalid bottom decorator inset detected: ",bk="changeAppearance",bl="__hn",O="shorthand",N="/",M="processing time. Often it is better to lay them out to a ",L="",K="_applyContextMenu",J="container",I="paddingBottom",H="changeNativeContextMenu",Q="undefined",P="qx.ui.tooltip.ToolTip",bm="__hw",bn="qxKeepActive",bo="_applyKeepFocus",bp="theme file. Hash code of decorator object: ",bq="paddingRight",br="minWidth is larger than maxWidth!",bs="changeLocale",bt="qxKeepFocus",bu="opera",bv="qx/static/blank.gif",bJ="__ho",bI="backgroundColor",bH="drag",bG="div",bN="object",bM="disabled",bL="move",bK="dragstart",bP="qx.dynlocale",bO="dragchange",bW="dragend",bX="resize",bU="Decorator",bV="zIndex",bS="opacity",bT="This widget has no children!",bQ="default",bR="Color",bY="Widget is not focusable!",ca="qxType",co="changeToolTipText",cn="beforeContextmenuOpen",cq="focused",cp="changeVisibility",cs="hovered",cr="qx.event.type.KeySequence",cu="DOM element is not yet created!",ct="absolute",cm="_applyPadding",cl="qx.event.type.Event",cV="on",cW="mshtml",cX="hidden",cY="contextmenu",cR="String",cS="tabIndex",cT="qx.event.type.Data",cU="engine.name",cP="excluded",cQ="qx.event.type.Focus",m="Integer",k="qx.event.type.Touch",j="visible",h="qx.event.type.Drag",g="qx.event.type.Mouse",f="Boolean",d="qx.debug",c="px";qx.Class.define(di,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);this.__hj=this._createContainerElement();this.__hk=this.__hv();this.__hj.add(this.__hk);this.initFocusable();this.initSelectable();this.initNativeContextMenu();}
,events:{appear:cl,disappear:cl,createChildControl:cT,resize:cT,move:cT,syncAppearance:cT,mousemove:g,mouseover:g,mouseout:g,mousedown:g,mouseup:g,click:g,dblclick:g,contextmenu:g,beforeContextmenuOpen:cT,mousewheel:cc,touchstart:k,touchend:k,touchmove:k,touchcancel:k,tap:k,swipe:k,keyup:cr,keydown:cr,keypress:cr,keyinput:cv,focus:cQ,blur:cQ,focusin:cQ,focusout:cQ,activate:cQ,deactivate:cQ,capture:cl,losecapture:cl,drop:h,dragleave:h,dragover:h,drag:h,dragstart:h,dragend:h,dragchange:h,droprequest:h},properties:{paddingTop:{check:m,init:0,apply:cm,themeable:true},paddingRight:{check:m,init:0,apply:cm,themeable:true},paddingBottom:{check:m,init:0,apply:cm,themeable:true},paddingLeft:{check:m,init:0,apply:cm,themeable:true},padding:{group:[t,bq,I,cd],mode:O,themeable:true},zIndex:{nullable:true,init:null,apply:G,event:Y,check:m,themeable:true},decorator:{nullable:true,init:null,apply:D,event:bc,check:bU,themeable:true},shadow:{nullable:true,init:null,apply:bA,event:cw,check:bU,themeable:true},backgroundColor:{nullable:true,check:bR,apply:cA,event:bd,themeable:true},textColor:{nullable:true,check:bR,apply:F,event:q,themeable:true,inheritable:true},font:{nullable:true,apply:T,check:bB,event:E,themeable:true,inheritable:true,dereference:true},opacity:{check:cL,apply:df,themeable:true,nullable:true,init:null},cursor:{check:cR,apply:cb,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:P,nullable:true},toolTipText:{check:cR,nullable:true,event:co,apply:y},toolTipIcon:{check:cR,nullable:true,event:co},blockToolTip:{check:f,init:false},visibility:{check:[j,cX,cP],init:j,apply:cK,event:cp},enabled:{init:true,check:f,inheritable:true,apply:bx,event:R},anonymous:{init:false,check:f},tabIndex:{check:m,nullable:true,apply:be},focusable:{check:f,init:false,apply:cy},keepFocus:{check:f,init:false,apply:bo},keepActive:{check:f,init:false,apply:cM},draggable:{check:f,init:false,apply:n},droppable:{check:f,init:false,apply:cg},selectable:{check:f,init:false,event:u,apply:bw},contextMenu:{check:z,apply:K,nullable:true,event:s},nativeContextMenu:{check:f,init:false,themeable:true,event:H,apply:cE},appearance:{check:cR,init:bi,apply:dh,event:bk}},statics:{DEBUG:false,getWidgetByElement:function(dk,dl){while(dk){var dm=dk.$$widget;if(dm!=null){var dn=qx.core.ObjectRegistry.fromHashCode(dm);if(!dl||!dn.getAnonymous()){return dn;}
;}
;try{dk=dk.parentNode;}
catch(e){return null;}
;}
;return null;}
,contains:function(parent,dp){while(dp){if(parent==dp){return true;}
;dp=dp.getLayoutParent();}
;return false;}
,__hl:new qx.ui.core.DecoratorFactory(),__hm:new qx.ui.core.DecoratorFactory()},members:{__hj:null,__hk:null,__hn:null,__ho:null,__hp:null,__hq:null,__hr:null,__hs:null,_getLayout:function(){return this.__hs;}
,_setLayout:function(dq){if(qx.core.Environment.get(d)){if(dq){this.assertInstance(dq,qx.ui.layout.Abstract);}
;}
;if(this.__hs){this.__hs.connectToWidget(null);}
;if(dq){dq.connectToWidget(this);}
;this.__hs=dq;qx.ui.core.queue.Layout.add(this);}
,setLayoutParent:function(parent){if(this.$$parent===parent){return;}
;var dr=this.getContainerElement();if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(dr);}
;this.$$parent=parent||null;if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(dr);}
;this.$$refreshInheritables();qx.ui.core.queue.Visibility.add(this);}
,_updateInsets:null,__ht:function(a,b){if(a==b){return false;}
;if(a==null||b==null){return true;}
;var ds=qx.theme.manager.Decoration.getInstance();var du=ds.resolve(a).getInsets();var dt=ds.resolve(b).getInsets();if(du.top!=dt.top||du.right!=dt.right||du.bottom!=dt.bottom||du.left!=dt.left){return true;}
;return false;}
,renderLayout:function(dv,top,dw,dx){var dG=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,dv,top,dw,dx);if(!dG){return null;}
;if(qx.lang.Object.isEmpty(dG)&&!this._updateInsets){return null;}
;var dz=this.getContainerElement();var content=this.getContentElement();var dD=dG.size||this._updateInsets;var dH=c;var dE={};if(dG.position){dE.left=dv+dH;dE.top=top+dH;}
;if(dG.size){dE.width=dw+dH;dE.height=dx+dH;}
;if(dG.position||dG.size){dz.setStyles(dE);}
;if(dD||dG.local||dG.margin){var dy=this.getInsets();var innerWidth=dw-dy.left-dy.right;var innerHeight=dx-dy.top-dy.bottom;innerWidth=innerWidth<0?0:innerWidth;innerHeight=innerHeight<0?0:innerHeight;}
;var dB={};if(this._updateInsets){dB.left=dy.left+dH;dB.top=dy.top+dH;}
;if(dD){dB.width=innerWidth+dH;dB.height=innerHeight+dH;}
;if(dD||this._updateInsets){content.setStyles(dB);}
;if(dG.size){var dF=this.__hp;if(dF){dF.setStyles({width:dw+c,height:dx+c});}
;}
;if(dG.size||this._updateInsets){if(this.__hn){this.__hn.resize(dw,dx);}
;}
;if(dG.size){if(this.__ho){var dy=this.__ho.getInsets();var dC=dw+dy.left+dy.right;var dA=dx+dy.top+dy.bottom;this.__ho.resize(dC,dA);this.__ho.setStyles({left:-dy.left+c,top:-dy.top+c},true);}
;}
;if(dD||dG.local||dG.margin){if(this.__hs&&this.hasLayoutChildren()){this.__hs.renderLayout(innerWidth,innerHeight);}
else if(this.hasLayoutChildren()){throw new Error(p+this._findTopControl()+cx);}
;}
;if(dG.position&&this.hasListener(bL)){this.fireDataEvent(bL,this.getBounds());}
;if(dG.size&&this.hasListener(bX)){this.fireDataEvent(bX,this.getBounds());}
;delete this._updateInsets;return dG;}
,__hu:null,clearSeparators:function(){var dJ=this.__hu;if(!dJ){return;}
;var dK=qx.ui.core.Widget.__hl;var content=this.getContentElement();var dI;for(var i=0,l=dJ.length;i<l;i++){dI=dJ[i];dK.poolDecorator(dI);content.remove(dI);}
;dJ.length=0;}
,renderSeparator:function(dL,dM){var dO=qx.ui.core.Widget.__hl.getDecoratorElement(dL);this.getContentElement().add(dO);dO.resize(dM.width,dM.height);var dN=dO.getDomElement();if(dN){dN.style.top=dM.top+c;dN.style.left=dM.left+c;}
else {dO.setStyles({left:dM.left+c,top:dM.top+c});}
;if(!this.__hu){this.__hu=[dO];}
else {this.__hu.push(dO);}
;}
,_computeSizeHint:function(){var dV=this.getWidth();var dU=this.getMinWidth();var dQ=this.getMaxWidth();var dT=this.getHeight();var dR=this.getMinHeight();var dS=this.getMaxHeight();if(qx.core.Environment.get(d)){if(dU!==null&&dQ!==null){this.assert(dU<=dQ,br);}
;if(dR!==null&&dS!==null){this.assert(dR<=dS,V);}
;}
;var dW=this._getContentHint();var dP=this.getInsets();var dY=dP.left+dP.right;var dX=dP.top+dP.bottom;if(dV==null){dV=dW.width+dY;}
;if(dT==null){dT=dW.height+dX;}
;if(dU==null){dU=dY;if(dW.minWidth!=null){dU+=dW.minWidth;if(dU>dQ&&dQ!=null){dU=dQ;}
;}
;}
;if(dR==null){dR=dX;if(dW.minHeight!=null){dR+=dW.minHeight;if(dR>dS&&dS!=null){dR=dS;}
;}
;}
;if(dQ==null){if(dW.maxWidth==null){dQ=Infinity;}
else {dQ=dW.maxWidth+dY;if(dQ<dU&&dU!=null){dQ=dU;}
;}
;}
;if(dS==null){if(dW.maxHeight==null){dS=Infinity;}
else {dS=dW.maxHeight+dX;if(dS<dR&&dR!=null){dS=dR;}
;}
;}
;return {width:dV,minWidth:dU,maxWidth:dQ,height:dT,minHeight:dR,maxHeight:dS};}
,invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);if(this.__hs){this.__hs.invalidateLayoutCache();}
;}
,_getContentHint:function(){var eb=this.__hs;if(eb){if(this.hasLayoutChildren()){var ec=eb.getSizeHint();if(qx.core.Environment.get(d)){var ea=x+this.toString()+dg;this.assertInteger(ec.width,cf+ea);this.assertInteger(ec.height,bj+ea);}
;return ec;}
else {return {width:0,height:0};}
;}
else {return {width:100,height:50};}
;}
,_getHeightForWidth:function(ed){var eh=this.getInsets();var ek=eh.left+eh.right;var ej=eh.top+eh.bottom;var ei=ed-ek;var ef=this._getLayout();if(ef&&ef.hasHeightForWidth()){var ee=ef.getHeightForWidth(ed);}
else {ee=this._getContentHeightForWidth(ei);}
;var eg=ee+ej;return eg;}
,_getContentHeightForWidth:function(em){throw new Error(S);}
,getInsets:function(){var top=this.getPaddingTop();var eo=this.getPaddingRight();var eq=this.getPaddingBottom();var ep=this.getPaddingLeft();if(this.__hn){var en=this.__hn.getInsets();if(qx.core.Environment.get(d)){this.assertNumber(en.top,w+en.top);this.assertNumber(en.right,C+en.right);this.assertNumber(en.bottom,bf+en.bottom);this.assertNumber(en.left,bC+en.left);}
;top+=en.top;eo+=en.right;eq+=en.bottom;ep+=en.left;}
;return {"top":top,"right":eo,"bottom":eq,"left":ep};}
,getInnerSize:function(){var es=this.getBounds();if(!es){return null;}
;var er=this.getInsets();return {width:es.width-er.left-er.right,height:es.height-er.top-er.bottom};}
,show:function(){this.setVisibility(j);}
,hide:function(){this.setVisibility(cX);}
,exclude:function(){this.setVisibility(cP);}
,isVisible:function(){return this.getVisibility()===j;}
,isHidden:function(){return this.getVisibility()!==j;}
,isExcluded:function(){return this.getVisibility()===cP;}
,isSeeable:function(){qx.ui.core.queue.Manager.flush();var et=this.getContainerElement().getDomElement();if(et){return et.offsetWidth>0;}
;return false;}
,_createContainerElement:function(){var ev={"$$widget":this.toHashCode()};if(qx.core.Environment.get(d)){ev.qxType=J;ev.qxClass=this.classname;}
;var eu={zIndex:0,position:ct};return new qx.html.Element(bG,eu,ev);}
,__hv:function(){var ew=this._createContentElement();if(qx.core.Environment.get(d)){ew.setAttribute(ca,cC);}
;ew.setStyles({"position":ct,"zIndex":10});return ew;}
,_createContentElement:function(){return new qx.html.Element(bG,{overflowX:cX,overflowY:cX});}
,getContainerElement:function(){return this.__hj;}
,getContentElement:function(){return this.__hk;}
,getDecoratorElement:function(){return this.__hn||null;}
,getShadowElement:function(){return this.__ho||null;}
,__hw:null,getLayoutChildren:function(){var ey=this.__hw;if(!ey){return this.__hx;}
;var ez;for(var i=0,l=ey.length;i<l;i++){var ex=ey[i];if(ex.hasUserBounds()||ex.isExcluded()){if(ez==null){ez=ey.concat();}
;qx.lang.Array.remove(ez,ex);}
;}
;return ez||ey;}
,scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);}
,invalidateLayoutChildren:function(){var eA=this.__hs;if(eA){eA.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);}
,hasLayoutChildren:function(){var eB=this.__hw;if(!eB){return false;}
;var eC;for(var i=0,l=eB.length;i<l;i++){eC=eB[i];if(!eC.hasUserBounds()&&!eC.isExcluded()){return true;}
;}
;return false;}
,getChildrenContainer:function(){return this;}
,__hx:[],_getChildren:function(){return this.__hw||this.__hx;}
,_indexOf:function(eD){var eE=this.__hw;if(!eE){return -1;}
;return eE.indexOf(eD);}
,_hasChildren:function(){var eF=this.__hw;return eF!=null&&(!!eF[0]);}
,addChildrenToQueue:function(eG){var eH=this.__hw;if(!eH){return;}
;var eI;for(var i=0,l=eH.length;i<l;i++){eI=eH[i];eG.push(eI);eI.addChildrenToQueue(eG);}
;}
,_add:function(eJ,eK){if(qx.core.Environment.get(d)){this.assertInstance(eJ,qx.ui.core.LayoutItem.constructor,ck);}
;if(eJ.getLayoutParent()==this){qx.lang.Array.remove(this.__hw,eJ);}
;if(this.__hw){this.__hw.push(eJ);}
else {this.__hw=[eJ];}
;this.__hy(eJ,eK);}
,_addAt:function(eL,eM,eN){if(!this.__hw){this.__hw=[];}
;if(eL.getLayoutParent()==this){qx.lang.Array.remove(this.__hw,eL);}
;var eO=this.__hw[eM];if(eO===eL){eL.setLayoutProperties(eN);}
;if(eO){qx.lang.Array.insertBefore(this.__hw,eL,eO);}
else {this.__hw.push(eL);}
;this.__hy(eL,eN);}
,_addBefore:function(eP,eQ,eR){if(qx.core.Environment.get(d)){this.assertInArray(eQ,this._getChildren(),cH);}
;if(eP==eQ){return;}
;if(!this.__hw){this.__hw=[];}
;if(eP.getLayoutParent()==this){qx.lang.Array.remove(this.__hw,eP);}
;qx.lang.Array.insertBefore(this.__hw,eP,eQ);this.__hy(eP,eR);}
,_addAfter:function(eS,eT,eU){if(qx.core.Environment.get(d)){this.assertInArray(eT,this._getChildren(),da);}
;if(eS==eT){return;}
;if(!this.__hw){this.__hw=[];}
;if(eS.getLayoutParent()==this){qx.lang.Array.remove(this.__hw,eS);}
;qx.lang.Array.insertAfter(this.__hw,eS,eT);this.__hy(eS,eU);}
,_remove:function(eV){if(!this.__hw){throw new Error(bT);}
;qx.lang.Array.remove(this.__hw,eV);this.__hz(eV);}
,_removeAt:function(eW){if(!this.__hw){throw new Error(bT);}
;var eX=this.__hw[eW];qx.lang.Array.removeAt(this.__hw,eW);this.__hz(eX);return eX;}
,_removeAll:function(){if(!this.__hw){return [];}
;var eY=this.__hw.concat();this.__hw.length=0;for(var i=eY.length-1;i>=0;i--){this.__hz(eY[i]);}
;qx.ui.core.queue.Layout.add(this);return eY;}
,_afterAddChild:null,_afterRemoveChild:null,__hy:function(fa,fb){if(qx.core.Environment.get(d)){this.assertInstance(fa,qx.ui.core.LayoutItem,B+fa);this.assertNotIdentical(fa,this,by+fa);if(fb!=null){this.assertType(fb,bN,bz+fb);}
;}
;var parent=fa.getLayoutParent();if(parent&&parent!=this){parent._remove(fa);}
;fa.setLayoutParent(this);if(fb){fa.setLayoutProperties(fb);}
else {this.updateLayoutProperties();}
;if(this._afterAddChild){this._afterAddChild(fa);}
;}
,__hz:function(fc){if(qx.core.Environment.get(d)){this.assertNotUndefined(fc);}
;if(fc.getLayoutParent()!==this){throw new Error(cj+fc+bg);}
;fc.setLayoutParent(null);if(this.__hs){this.__hs.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);if(this._afterRemoveChild){this._afterRemoveChild(fc);}
;}
,capture:function(fd){this.getContainerElement().capture(fd);}
,releaseCapture:function(){this.getContainerElement().releaseCapture();}
,_applyPadding:function(fe,ff,name){this._updateInsets=true;qx.ui.core.queue.Layout.add(this);}
,_createProtectorElement:function(){if(this.__hp){return;}
;var fg=this.__hp=new qx.html.Element;if(qx.core.Environment.get(d)){fg.setAttribute(ca,ci);}
;fg.setStyles({position:ct,top:0,left:0,zIndex:7});var fh=this.getBounds();if(fh){this.__hp.setStyles({width:fh.width+c,height:fh.height+c});}
;if((qx.core.Environment.get(cU)==cW)){fg.setStyles({backgroundImage:de+qx.util.ResourceManager.getInstance().toUri(bv)+dj,backgroundRepeat:cF});}
;this.getContainerElement().add(fg);}
,_applyDecorator:function(fi,fj){if(qx.core.Environment.get(d)){if(fi&&typeof fi===bN){if(qx.ui.core.Widget.DEBUG){this.warn(cD+M+bp+fi);}
;}
;}
;var fm=qx.ui.core.Widget.__hl;var fk=this.getContainerElement();if(!this.__hp&&!qx.core.Environment.get(cz)){this._createProtectorElement();}
;if(fj){fk.remove(this.__hn);fm.poolDecorator(this.__hn);}
;if(fi){var fl=this.__hn=fm.getDecoratorElement(fi);fl.setStyle(bV,5);fk.add(fl);}
else {delete this.__hn;}
;this._applyBackgroundColor(this.getBackgroundColor());if(this.__ht(fj,fi)){this._updateInsets=true;qx.ui.core.queue.Layout.add(this);}
else if(fi){var fn=this.getBounds();if(fn){fl.resize(fn.width,fn.height);this.__hp&&this.__hp.setStyles({width:fn.width+c,height:fn.height+c});}
;}
;}
,_applyShadow:function(fo,fp){var fw=qx.ui.core.Widget.__hm;var fr=this.getContainerElement();if(fp){fr.remove(this.__ho);fw.poolDecorator(this.__ho);}
;if(fo){var ft=this.__ho=fw.getDecoratorElement(fo);fr.add(ft);var fv=ft.getInsets();var fu=this.getBounds();if(fu){var fs=fu.width+fv.left+fv.right;var fq=fu.height+fv.top+fv.bottom;ft.resize(fs,fq);ft.setStyles({left:-fv.left+c,top:-fv.top+c},true);}
;ft.tint(null);}
else {delete this.__ho;}
;}
,_applyToolTipText:function(fx,fy){if(qx.core.Environment.get(bP)){if(this.__hr){return;}
;var fz=qx.locale.Manager.getInstance();this.__hr=fz.addListener(bs,function(){var fA=this.getToolTipText();if(fA&&fA.translate){this.setToolTipText(fA.translate());}
;}
,this);}
;}
,_applyTextColor:function(fB,fC){}
,_applyZIndex:function(fD,fE){this.getContainerElement().setStyle(bV,fD==null?0:fD);}
,_applyVisibility:function(fF,fG){var fH=this.getContainerElement();if(fF===j){fH.show();}
else {fH.hide();}
;var parent=this.$$parent;if(parent&&(fG==null||fF==null||fG===cP||fF===cP)){parent.invalidateLayoutChildren();}
;qx.ui.core.queue.Visibility.add(this);}
,_applyOpacity:function(fI,fJ){this.getContainerElement().setStyle(bS,fI==1?null:fI);if((qx.core.Environment.get(cU)==cW)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var fK=(fI==1||fI==null)?null:0.99;this.getContentElement().setStyle(bS,fK);}
;}
;}
,_applyCursor:function(fL,fM){if(fL==null&&!this.isSelectable()){fL=bQ;}
;this.getContainerElement().setStyle(U,fL,qx.core.Environment.get(cU)==bu);}
,_applyBackgroundColor:function(fN,fO){var fP=this.getBackgroundColor();var fR=this.getContainerElement();if(this.__hn){this.__hn.tint(fP);fR.setStyle(bI,null);}
else {var fQ=qx.theme.manager.Color.getInstance().resolve(fP);fR.setStyle(bI,fQ);}
;}
,_applyFont:function(fS,fT){}
,__hA:null,$$stateChanges:null,_forwardStates:null,hasState:function(fU){var fV=this.__hA;return !!fV&&!!fV[fU];}
,addState:function(fW){var fX=this.__hA;if(!fX){fX=this.__hA={};}
;if(fX[fW]){return;}
;this.__hA[fW]=true;if(fW===cs){this.syncAppearance();}
else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var gb=this.__hD;if(forward&&forward[fW]&&gb){var fY;for(var ga in gb){fY=gb[ga];if(fY instanceof qx.ui.core.Widget){gb[ga].addState(fW);}
;}
;}
;}
,removeState:function(gc){var gd=this.__hA;if(!gd||!gd[gc]){return;}
;delete this.__hA[gc];if(gc===cs){this.syncAppearance();}
else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var gg=this.__hD;if(forward&&forward[gc]&&gg){for(var gf in gg){var ge=gg[gf];if(ge instanceof qx.ui.core.Widget){ge.removeState(gc);}
;}
;}
;}
,replaceState:function(gh,gi){var gj=this.__hA;if(!gj){gj=this.__hA={};}
;if(!gj[gi]){gj[gi]=true;}
;if(gj[gh]){delete gj[gh];}
;if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var gm=this.__hD;if(forward&&forward[gi]&&gm){for(var gl in gm){var gk=gm[gl];if(gk instanceof qx.ui.core.Widget){gk.replaceState(gh,gi);}
;}
;}
;}
,__hB:null,__hC:null,syncAppearance:function(){var gr=this.__hA;var gq=this.__hB;var gs=qx.theme.manager.Appearance.getInstance();var go=qx.core.Property.$$method.setThemed;var gw=qx.core.Property.$$method.resetThemed;if(this.__hC){delete this.__hC;if(gq){var gn=gs.styleFrom(gq,gr,null,this.getAppearance());gq=null;}
;}
;if(!gq){var gp=this;var gv=[];do {gv.push(gp.$$subcontrol||gp.getAppearance());}
while(gp=gp.$$subparent);gq=gv.reverse().join(N).replace(/#[0-9]+/g,L);this.__hB=gq;}
;var gt=gs.styleFrom(gq,gr,null,this.getAppearance());if(gt){if(gn){for(var gu in gn){if(gt[gu]===undefined){this[gw[gu]]();}
;}
;}
;if(qx.core.Environment.get(d)){for(var gu in gt){if(!this[go[gu]]){throw new Error(this.classname+A+gu+ce+gq);}
;}
;}
;for(var gu in gt){gt[gu]===undefined?this[gw[gu]]():this[go[gu]](gt[gu]);}
;}
else if(gn){for(var gu in gn){this[gw[gu]]();}
;}
;this.fireDataEvent(cO,this.__hA);}
,_applyAppearance:function(gx,gy){this.updateAppearance();}
,checkAppearanceNeeds:function(){if(!this.__hq){qx.ui.core.queue.Appearance.add(this);this.__hq=true;}
else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);delete this.$$stateChanges;}
;}
,updateAppearance:function(){this.__hC=true;qx.ui.core.queue.Appearance.add(this);var gB=this.__hD;if(gB){var gz;for(var gA in gB){gz=gB[gA];if(gz instanceof qx.ui.core.Widget){gz.updateAppearance();}
;}
;}
;}
,syncWidget:function(gC){}
,getEventTarget:function(){var gD=this;while(gD.getAnonymous()){gD=gD.getLayoutParent();if(!gD){return null;}
;}
;return gD;}
,getFocusTarget:function(){var gE=this;if(!gE.getEnabled()){return null;}
;while(gE.getAnonymous()||!gE.getFocusable()){gE=gE.getLayoutParent();if(!gE||!gE.getEnabled()){return null;}
;}
;return gE;}
,getFocusElement:function(){return this.getContainerElement();}
,isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();}
,_applyFocusable:function(gF,gG){var gH=this.getFocusElement();if(gF){var gI=this.getTabIndex();if(gI==null){gI=1;}
;gH.setAttribute(cS,gI);if((qx.core.Environment.get(cU)==cW&&parseFloat(qx.core.Environment.get(cB))<8)||(qx.core.Environment.get(cU)==cW&&qx.core.Environment.get(bE)<8)){gH.setAttribute(v,bh);}
else {gH.setStyle(db,dd);}
;}
else {if(gH.isNativelyFocusable()){gH.setAttribute(cS,-1);}
else if(gG){gH.setAttribute(cS,null);}
;}
;}
,_applyKeepFocus:function(gJ){var gK=this.getFocusElement();gK.setAttribute(bt,gJ?cV:null);}
,_applyKeepActive:function(gL){var gM=this.getContainerElement();gM.setAttribute(bn,gL?cV:null);}
,_applyTabIndex:function(gN){if(gN==null){gN=1;}
else if(gN<1||gN>32000){throw new Error(W);}
;if(this.getFocusable()&&gN!=null){this.getFocusElement().setAttribute(cS,gN);}
;}
,_applySelectable:function(gO,gP){if(gP!==null){this._applyCursor(this.getCursor());}
;this.getContentElement().setSelectable(gO);}
,_applyEnabled:function(gQ,gR){if(gQ===false){this.addState(bM);this.removeState(cs);if(this.isFocusable()){this.removeState(cq);this._applyFocusable(false,true);}
;if(this.isDraggable()){this._applyDraggable(false,true);}
;if(this.isDroppable()){this._applyDroppable(false,true);}
;}
else {this.removeState(bM);if(this.isFocusable()){this._applyFocusable(true,false);}
;if(this.isDraggable()){this._applyDraggable(true,false);}
;if(this.isDroppable()){this._applyDroppable(true,false);}
;}
;}
,_applyNativeContextMenu:function(gS,gT,name){}
,_applyContextMenu:function(gU,gV){if(gV){gV.removeState(cY);if(gV.getOpener()==this){gV.resetOpener();}
;if(!gU){this.removeListener(cY,this._onContextMenuOpen);gV.removeListener(cp,this._onBeforeContextMenuOpen,this);}
;}
;if(gU){gU.setOpener(this);gU.addState(cY);if(!gV){this.addListener(cY,this._onContextMenuOpen);gU.addListener(cp,this._onBeforeContextMenuOpen,this);}
;}
;}
,_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);e.stop();}
,_onBeforeContextMenuOpen:function(e){if(e.getData()==j&&this.hasListener(cn)){this.fireDataEvent(cn,e);}
;}
,_onStopEvent:function(e){e.stopPropagation();}
,_applyDraggable:function(gW,gX){if(!this.isEnabled()&&gW===true){gW=false;}
;qx.ui.core.DragDropCursor.getInstance();if(gW){this.addListener(bK,this._onDragStart);this.addListener(bH,this._onDrag);this.addListener(bW,this._onDragEnd);this.addListener(bO,this._onDragChange);}
else {this.removeListener(bK,this._onDragStart);this.removeListener(bH,this._onDrag);this.removeListener(bW,this._onDragEnd);this.removeListener(bO,this._onDragChange);}
;this.getContainerElement().setAttribute(cG,gW?cV:null);}
,_applyDroppable:function(gY,ha){if(!this.isEnabled()&&gY===true){gY=false;}
;this.getContainerElement().setAttribute(bb,gY?cV:null);}
,_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);this.getApplicationRoot().setGlobalCursor(bQ);}
,_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);}
,_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);this.getApplicationRoot().resetGlobalCursor();}
,_onDragChange:function(e){var hb=qx.ui.core.DragDropCursor.getInstance();var hc=e.getCurrentAction();hc?hb.setAction(hc):hb.resetAction();}
,visualizeFocus:function(){this.addState(cq);}
,visualizeBlur:function(){this.removeState(cq);}
,scrollChildIntoView:function(hd,he,hf,hg){hg=typeof hg==Q?true:hg;var hh=qx.ui.core.queue.Layout;var parent;if(hg){hg=!hh.isScheduled(hd);parent=hd.getLayoutParent();if(hg&&parent){hg=!hh.isScheduled(parent);if(hg){parent.getChildren().forEach(function(hi){hg=hg&&!hh.isScheduled(hi);}
);}
;}
;}
;this.scrollChildIntoViewX(hd,he,hg);this.scrollChildIntoViewY(hd,hf,hg);}
,scrollChildIntoViewX:function(hj,hk,hl){this.getContentElement().scrollChildIntoViewX(hj.getContainerElement(),hk,hl);}
,scrollChildIntoViewY:function(hm,hn,ho){this.getContentElement().scrollChildIntoViewY(hm.getContainerElement(),hn,ho);}
,focus:function(){if(this.isFocusable()){this.getFocusElement().focus();}
else {throw new Error(bY);}
;}
,blur:function(){if(this.isFocusable()){this.getFocusElement().blur();}
else {throw new Error(bY);}
;}
,activate:function(){this.getContainerElement().activate();}
,deactivate:function(){this.getContainerElement().deactivate();}
,tabFocus:function(){this.getFocusElement().focus();}
,hasChildControl:function(hp){if(!this.__hD){return false;}
;return !!this.__hD[hp];}
,__hD:null,_getCreatedChildControls:function(){return this.__hD;}
,getChildControl:function(hq,hr){if(!this.__hD){if(hr){return null;}
;this.__hD={};}
;var hs=this.__hD[hq];if(hs){return hs;}
;if(hr===true){return null;}
;return this._createChildControl(hq);}
,_showChildControl:function(ht){var hu=this.getChildControl(ht);hu.show();return hu;}
,_excludeChildControl:function(hv){var hw=this.getChildControl(hv,true);if(hw){hw.exclude();}
;}
,_isChildControlVisible:function(hx){var hy=this.getChildControl(hx,true);if(hy){return hy.isVisible();}
;return false;}
,_createChildControl:function(hz){if(!this.__hD){this.__hD={};}
else if(this.__hD[hz]){throw new Error(cI+hz+X);}
;var hD=hz.indexOf(ch);if(hD==-1){var hA=this._createChildControlImpl(hz);}
else {var hA=this._createChildControlImpl(hz.substring(0,hD),hz.substring(hD+1,hz.length));}
;if(!hA){throw new Error(bD+hz);}
;hA.$$subcontrol=hz;hA.$$subparent=this;var hB=this.__hA;var forward=this._forwardStates;if(hB&&forward&&hA instanceof qx.ui.core.Widget){for(var hC in hB){if(forward[hC]){hA.addState(hC);}
;}
;}
;this.fireDataEvent(bF,hA);return this.__hD[hz]=hA;}
,_createChildControlImpl:function(hE,hF){return null;}
,_disposeChildControls:function(){var hJ=this.__hD;if(!hJ){return;}
;var hH=qx.ui.core.Widget;for(var hI in hJ){var hG=hJ[hI];if(!hH.contains(this,hG)){hG.destroy();}
else {hG.dispose();}
;}
;delete this.__hD;}
,_findTopControl:function(){var hK=this;while(hK){if(!hK.$$subparent){return hK;}
;hK=hK.$$subparent;}
;return null;}
,getContainerLocation:function(hL){var hM=this.getContainerElement().getDomElement();return hM?qx.bom.element.Location.get(hM,hL):null;}
,getContentLocation:function(hN){var hO=this.getContentElement().getDomElement();return hO?qx.bom.element.Location.get(hO,hN):null;}
,setDomLeft:function(hP){var hQ=this.getContainerElement().getDomElement();if(hQ){hQ.style.left=hP+c;}
else {throw new Error(cu);}
;}
,setDomTop:function(hR){var hS=this.getContainerElement().getDomElement();if(hS){hS.style.top=hR+c;}
else {throw new Error(cu);}
;}
,setDomPosition:function(hT,top){var hU=this.getContainerElement().getDomElement();if(hU){hU.style.left=hT+c;hU.style.top=top+c;}
else {throw new Error(cu);}
;}
,destroy:function(){if(this.$$disposed){return;}
;var parent=this.$$parent;if(parent){parent._remove(this);}
;qx.ui.core.queue.Dispose.add(this);}
,clone:function(){var hV=qx.ui.core.LayoutItem.prototype.clone.call(this);if(this.getChildren){var hW=this.getChildren();for(var i=0,l=hW.length;i<l;i++){hV.add(hW[i].clone());}
;}
;return hV;}
},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(bP)){if(this.__hr){qx.locale.Manager.getInstance().removeListenerById(this.__hr);}
;}
;this.getContainerElement().setAttribute(r,null,true);this._disposeChildControls();qx.ui.core.queue.Appearance.remove(this);qx.ui.core.queue.Layout.remove(this);qx.ui.core.queue.Visibility.remove(this);qx.ui.core.queue.Widget.remove(this);}
;if(this.getContextMenu()){this.setContextMenu(null);}
;if(!qx.core.ObjectRegistry.inShutDown){var hY=qx.ui.core.Widget;var hX=this.getContainerElement();if(this.__hn){hX.remove(this.__hn);hY.__hl.poolDecorator(this.__hn);}
;if(this.__ho){hX.remove(this.__ho);hY.__hm.poolDecorator(this.__ho);}
;this.clearSeparators();this.__hn=this.__ho=this.__hu=null;}
else {this._disposeArray(ba);this._disposeObjects(bl,bJ);}
;this._disposeArray(bm);this.__hA=this.__hD=null;this._disposeObjects(dc,cN,o,cJ);}
});}
)();
(function(){var f="qx.ui.core.EventHandler",e="activate",d="blur",c="focus",b="input",a="load";qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);this.__dB=qx.event.Registration.getManager(window);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__dB:null,__hE:{focusin:1,focusout:1,focus:1,blur:1},__hF:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;}
,_dispatchEvent:function(j){var p=j.getTarget();var o=qx.ui.core.Widget.getWidgetByElement(p);var q=false;while(o&&o.isAnonymous()){var q=true;o=o.getLayoutParent();}
;if(o&&q&&j.getType()==e){o.getContainerElement().activate();}
;if(this.__hE[j.getType()]){o=o&&o.getFocusTarget();if(!o){return;}
;}
;if(j.getRelatedTarget){var x=j.getRelatedTarget();var w=qx.ui.core.Widget.getWidgetByElement(x);while(w&&w.isAnonymous()){w=w.getLayoutParent();}
;if(w){if(this.__hE[j.getType()]){w=w.getFocusTarget();}
;if(w===o){return;}
;}
;}
;var s=j.getCurrentTarget();var u=qx.ui.core.Widget.getWidgetByElement(s);if(!u||u.isAnonymous()){return;}
;if(this.__hE[j.getType()]){u=u.getFocusTarget();}
;var v=j.getType();if(!u||!(u.isEnabled()||this.__hF[v])){return;}
;var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;var r=this.__dB.getListeners(u,v,k);if(!r||r.length===0){return;}
;var m=qx.event.Pool.getInstance().getObject(j.constructor);j.clone(m);m.setTarget(o);m.setRelatedTarget(w||null);m.setCurrentTarget(u);var y=j.getOriginalTarget();if(y){var n=qx.ui.core.Widget.getWidgetByElement(y);while(n&&n.isAnonymous()){n=n.getLayoutParent();}
;m.setOriginalTarget(n);}
else {m.setOriginalTarget(p);}
;for(var i=0,l=r.length;i<l;i++){var t=r[i].context||u;r[i].handler.call(t,m);}
;if(m.getPropagationStopped()){j.stopPropagation();}
;if(m.getDefaultPrevented()){j.preventDefault();}
;qx.event.Pool.getInstance().poolObject(m);}
,registerEvent:function(z,A,B){var C;if(A===c||A===d){C=z.getFocusElement();}
else if(A===a||A===b){C=z.getContentElement();}
else {C=z.getContainerElement();}
;if(C){C.addListener(A,this._dispatchEvent,this,B);}
;}
,unregisterEvent:function(D,E,F){var G;if(E===c||E===d){G=D.getFocusElement();}
else if(E===a||E===b){G=D.getContentElement();}
else {G=D.getContainerElement();}
;if(G){G.removeListener(E,this._dispatchEvent,this,F);}
;}
},destruct:function(){this.__dB=null;}
,defer:function(H){qx.event.Registration.addHandler(H);}
});}
)();
(function(){var f="Missing renderLayout() implementation!",e="abstract",d="Missing getHeightForWidth() implementation!",c="qx.debug",b="It is not possible to manually set the connected widget.",a="qx.ui.layout.Abstract";qx.Class.define(a,{type:e,extend:qx.core.Object,members:{__gJ:null,_invalidChildrenCache:null,__ks:null,invalidateLayoutCache:function(){this.__gJ=null;}
,renderLayout:function(g,h){this.warn(f);}
,getSizeHint:function(){if(this.__gJ){return this.__gJ;}
;return this.__gJ=this._computeSizeHint();}
,hasHeightForWidth:function(){return false;}
,getHeightForWidth:function(i){this.warn(d);return null;}
,_computeSizeHint:function(){return null;}
,invalidateChildrenCache:function(){this._invalidChildrenCache=true;}
,verifyLayoutProperty:qx.core.Environment.select(c,{"true":function(j,name,k){}
,"false":null}),_clearSeparators:function(){var l=this.__ks;if(l instanceof qx.ui.core.LayoutItem){l.clearSeparators();}
;}
,_renderSeparator:function(m,n){this.__ks.renderSeparator(m,n);}
,connectToWidget:function(o){if(o&&this.__ks){throw new Error(b);}
;this.__ks=o;this.invalidateChildrenCache();}
,_getWidget:function(){return this.__ks;}
,_applyLayoutChange:function(){if(this.__ks){this.__ks.scheduleLayoutUpdate();}
;}
,_getLayoutChildren:function(){return this.__ks.getLayoutChildren();}
},destruct:function(){this.__ks=this.__gJ=null;}
});}
)();
(function(){var b="singleton",a="qx.util.LibraryManager";qx.Class.define(a,{extend:qx.core.Object,type:b,statics:{__hG:qx.$$libraries||{}},members:{has:function(c){return !!this.self(arguments).__hG[c];}
,get:function(d,e){return this.self(arguments).__hG[d][e]?this.self(arguments).__hG[d][e]:null;}
,set:function(f,g,h){this.self(arguments).__hG[f][g]=h;}
}});}
)();
(function(){var q="//",p="encoding",o="?",n="data",m="type",l="data:image/",k=";",j="qx.util.ResourceManager",i="singleton",h=",",c="mshtml",g="engine.name",f="io.ssl",b="string",a="/",e="resourceUri",d="";qx.Class.define(j,{extend:qx.core.Object,type:i,construct:function(){qx.core.Object.call(this);}
,statics:{__bc:qx.$$resources||{},__hH:{}},members:{has:function(r){return !!this.self(arguments).__bc[r];}
,getData:function(s){return this.self(arguments).__bc[s]||null;}
,getImageWidth:function(t){var u=this.self(arguments).__bc[t];return u?u[0]:null;}
,getImageHeight:function(v){var w=this.self(arguments).__bc[v];return w?w[1]:null;}
,getImageFormat:function(x){var y=this.self(arguments).__bc[x];return y?y[2]:null;}
,getCombinedFormat:function(z){var C=d;var B=this.self(arguments).__bc[z];var A=B&&B.length>4&&typeof (B[4])==b&&this.constructor.__bc[B[4]];if(A){var E=B[4];var D=this.constructor.__bc[E];C=D[2];}
;return C;}
,toUri:function(F){if(F==null){return F;}
;var G=this.self(arguments).__bc[F];if(!G){return F;}
;if(typeof G===b){var I=G;}
else {var I=G[3];if(!I){return F;}
;}
;var H=d;if((qx.core.Environment.get(g)==c)&&qx.core.Environment.get(f)){H=this.self(arguments).__hH[I];}
;return H+qx.util.LibraryManager.getInstance().get(I,e)+a+F;}
,toDataUri:function(J){var L=this.constructor.__bc[J];var M=this.constructor.__bc[L[4]];var N;if(M){var K=M[4][J];N=l+K[m]+k+K[p]+h+K[n];}
else {N=this.toUri(J);}
;return N;}
},defer:function(O){if((qx.core.Environment.get(g)==c)){if(qx.core.Environment.get(f)){for(var S in qx.$$libraries){var Q;if(qx.util.LibraryManager.getInstance().get(S,e)){Q=qx.util.LibraryManager.getInstance().get(S,e);}
else {O.__hH[S]=d;continue;}
;if(Q.match(/^\/\//)!=null){O.__hH[S]=window.location.protocol;}
else if(Q.match(/^\//)!=null){O.__hH[S]=window.location.protocol+q+window.location.host;}
else if(Q.match(/^\.\//)!=null){var P=document.URL;O.__hH[S]=P.substring(0,P.lastIndexOf(a)+1);}
else if(Q.match(/^http/)!=null){O.__hH[S]=d;}
else {var T=window.location.href.indexOf(o);var R;if(T==-1){R=window.location.href;}
else {R=window.location.href.substring(0,T);}
;O.__hH[S]=R.substring(0,R.lastIndexOf(a)+1);}
;;;}
;}
;}
;}
});}
)();
(function(){var u='indexOf',t='slice',s='concat',r='toLocaleLowerCase',q="qx.type.BaseString",p='match',o="qx.debug",n='search',m='replace',k='toLowerCase',d='charCodeAt',j='split',g='substring',c='lastIndexOf',b='substr',f='toLocaleUpperCase',e='toUpperCase',h='charAt',a="";qx.Class.define(q,{extend:Object,construct:function(v){var v=v||a;this.__hI=v;this.length=v.length;}
,members:{$$isString:true,length:0,__hI:null,toString:function(){return this.__hI;}
,charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);}
,toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(w,x){return qx.core.Object.prototype.base.apply(this,arguments);}
},defer:function(y,z){if(qx.core.Environment.get(o)){qx.Class.include(y,qx.core.MAssert);}
;var A=[h,d,s,u,c,p,m,n,t,j,b,g,k,e,r,f];z.valueOf=z.toString;if(new y(a).valueOf()==null){delete z.valueOf;}
;for(var i=0,l=A.length;i<l;i++){z[A[i]]=String.prototype[A[i]];}
;}
});}
)();
(function(){var a="qx.locale.LocalizedString";qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);this.__hJ=c;this.__hK=d;}
,members:{__hJ:null,__hK:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hJ,this.__hK);}
}});}
)();
(function(){var o="locale",n="_applyLocale",m="changeLocale",l="Locale: ",k="C",j="locale.variant",h="qx.dynlocale",g=" not available.",f="qx.locale.Manager",e="String",b="singleton",d="",c="qx.debug",a="_";qx.Class.define(f,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__hL=qx.$$translations||{};this.__hM=qx.$$locales||{};var p=qx.core.Environment.get(o);var q=qx.core.Environment.get(j);if(q!==d){p+=a+q;}
;this.__hN=p;this.setLocale(p||this.__hO);}
,statics:{tr:function(r,s){var t=qx.lang.Array.fromArguments(arguments);t.splice(0,1);return qx.locale.Manager.getInstance().translate(r,t);}
,trn:function(u,v,w,x){var y=qx.lang.Array.fromArguments(arguments);y.splice(0,3);if(w!=1){return qx.locale.Manager.getInstance().translate(v,y);}
else {return qx.locale.Manager.getInstance().translate(u,y);}
;}
,trc:function(z,A,B){var C=qx.lang.Array.fromArguments(arguments);C.splice(0,2);return qx.locale.Manager.getInstance().translate(A,C);}
,marktr:function(D){return D;}
},properties:{locale:{check:e,nullable:true,apply:n,event:m}},members:{__hO:k,__hP:null,__hQ:null,__hL:null,__hM:null,__hN:null,getLanguage:function(){return this.__hQ;}
,getTerritory:function(){return this.getLocale().split(a)[1]||d;}
,getAvailableLocales:function(E){var G=[];for(var F in this.__hM){if(F!=this.__hO){if(this.__hM[F]===null&&!E){continue;}
;G.push(F);}
;}
;return G;}
,__hR:function(H){var J;if(H==null){return null;}
;var I=H.indexOf(a);if(I==-1){J=H;}
else {J=H.substring(0,I);}
;return J;}
,_applyLocale:function(K,L){if(qx.core.Environment.get(c)){if(!(K in this.__hM||K==this.__hN)){qx.log.Logger.warn(l+K+g);}
;}
;this.__hP=K;this.__hQ=this.__hR(K);}
,addTranslation:function(M,N){var O=this.__hL;if(O[M]){for(var P in N){O[M][P]=N[P];}
;}
else {O[M]=N;}
;}
,addLocale:function(Q,R){var S=this.__hM;if(S[Q]){for(var T in R){S[Q][T]=R[T];}
;}
else {S[Q]=R;}
;}
,translate:function(U,V,W){var X=this.__hL;return this.__hS(X,U,V,W);}
,localize:function(Y,ba,bb){var bc=this.__hM;return this.__hS(bc,Y,ba,bb);}
,__hS:function(bd,be,bf,bg){if(qx.core.Environment.get(c)){this.assertObject(bd);this.assertString(be);this.assertArray(bf);}
;var bh;if(!bd){return be;}
;if(bg){var bj=this.__hR(bg);}
else {bg=this.__hP;bj=this.__hQ;}
;if(!bh&&bd[bg]){bh=bd[bg][be];}
;if(!bh&&bd[bj]){bh=bd[bj][be];}
;if(!bh&&bd[this.__hO]){bh=bd[this.__hO][be];}
;if(!bh){bh=be;}
;if(bf.length>0){var bi=[];for(var i=0;i<bf.length;i++){var bk=bf[i];if(bk&&bk.translate){bi[i]=bk.translate();}
else {bi[i]=bk;}
;}
;bh=qx.lang.String.format(bh,bi);}
;if(qx.core.Environment.get(h)){bh=new qx.locale.LocalizedString(bh,be,bf);}
;return bh;}
},destruct:function(){this.__hL=this.__hM=null;}
});}
)();
(function(){var f="qx.bom.client.Locale",e="locale",d="android",c="locale.variant",b="-",a="";qx.Bootstrap.define(f,{statics:{getLocale:function(){var g=qx.bom.client.Locale.__hT();var h=g.indexOf(b);if(h!=-1){g=g.substr(0,h);}
;return g;}
,getVariant:function(){var i=qx.bom.client.Locale.__hT();var k=a;var j=i.indexOf(b);if(j!=-1){k=i.substr(j+1);}
;return k;}
,__hT:function(){var l=(navigator.userLanguage||navigator.language||a);if(qx.bom.client.OperatingSystem.getName()==d){var m=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);if(m){l=m[0];}
;}
;return l.toLowerCase();}
},defer:function(n){qx.core.Environment.add(e,n.getLocale);qx.core.Environment.add(c,n.getVariant);}
});}
)();
(function(){var k="qx/icon",j=".png",i="crop",h="engine.version",g="Potential clipped image candidate: ",f="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",d='<div style="',c="repeat-y",b='<img src="',a="qx.bom.element.Decoration",N="Image modification not possible because elements could not be replaced at runtime anymore!",M="', sizingMethod='",L="'!",K='"/>',J="png",I="')",H='"></div>',G='" style="',F="none",E="ImageLoader: Not recognized format of external image '",r="webkit",s=" ",p="repeat-x",q="DXImageTransform.Microsoft.AlphaImageLoader",n="qx/static/blank.gif",o="absolute",l="repeat",m="scale",t="mshtml",u="b64",x="scale-y",w="no-repeat",z="qx.debug",y="scale-x",B="",A="engine.name",v="div",D="img",C="px";qx.Class.define(a,{statics:{DEBUG:false,__hU:{},__hV:(qx.core.Environment.get(A)==t)&&qx.core.Environment.get(h)<9,__hW:qx.core.Environment.select(A,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hX:{"scale-x":D,"scale-y":D,"scale":D,"repeat":v,"no-repeat":v,"repeat-x":v,"repeat-y":v},update:function(O,P,Q,R){var T=this.getTagName(Q,P);if(T!=O.tagName.toLowerCase()){throw new Error(N);}
;var U=this.getAttributes(P,Q,R);if(T===D){O.src=U.src||qx.util.ResourceManager.getInstance().toUri(n);}
;if(O.style.backgroundPosition!=B&&U.style.backgroundPosition===undefined){U.style.backgroundPosition=null;}
;if(O.style.clip!=B&&U.style.clip===undefined){U.style.clip=null;}
;var S=qx.bom.element.Style;S.setStyles(O,U.style);if(this.__hV){try{O.filters[q].apply();}
catch(e){}
;}
;}
,create:function(V,W,X){var Y=this.getTagName(W,V);var bb=this.getAttributes(V,W,X);var ba=qx.bom.element.Style.compile(bb.style);if(Y===D){return b+bb.src+G+ba+K;}
else {return d+ba+H;}
;}
,getTagName:function(bc,bd){if(bd&&this.__hV&&this.__hW[bc]&&qx.lang.String.endsWith(bd,j)){return v;}
;return this.__hX[bc];}
,getAttributes:function(be,bf,bh){if(!bh){bh={};}
;if(!bh.position){bh.position=o;}
;if((qx.core.Environment.get(A)==t)){bh.fontSize=0;bh.lineHeight=0;}
else if((qx.core.Environment.get(A)==r)){bh.WebkitUserDrag=F;}
;var bj=qx.util.ResourceManager.getInstance().getImageFormat(be)||qx.io.ImageLoader.getFormat(be);if(qx.core.Environment.get(z)){if(be!=null&&bj==null){qx.log.Logger.warn(E+be+L);}
;}
;var bi;if(this.__hV&&this.__hW[bf]&&bj===J){bi=this.__ib(bh,bf,be);}
else {if(bf===m){bi=this.__ic(bh,bf,be);}
else if(bf===y||bf===x){bi=this.__id(bh,bf,be);}
else {bi=this.__ig(bh,bf,be);}
;}
;return bi;}
,__hY:function(bk,bl,bm){if(bk.width==null&&bl!=null){bk.width=bl+C;}
;if(bk.height==null&&bm!=null){bk.height=bm+C;}
;return bk;}
,__ia:function(bn){var bo=qx.util.ResourceManager.getInstance().getImageWidth(bn)||qx.io.ImageLoader.getWidth(bn);var bp=qx.util.ResourceManager.getInstance().getImageHeight(bn)||qx.io.ImageLoader.getHeight(bn);return {width:bo,height:bp};}
,__ib:function(bq,br,bs){var bv=this.__ia(bs);bq=this.__hY(bq,bv.width,bv.height);var bu=br==w?i:m;var bt=f+qx.util.ResourceManager.getInstance().toUri(bs)+M+bu+I;bq.filter=bt;bq.backgroundImage=bq.backgroundRepeat=B;return {style:bq};}
,__ic:function(bw,bx,by){var bz=qx.util.ResourceManager.getInstance().toUri(by);var bA=this.__ia(by);bw=this.__hY(bw,bA.width,bA.height);return {src:bz,style:bw};}
,__id:function(bB,bC,bD){var bE=qx.util.ResourceManager.getInstance();var bH=bE.getCombinedFormat(bD);var bJ=this.__ia(bD);var bF;if(bH){var bI=bE.getData(bD);var bG=bI[4];if(bH==u){bF=bE.toDataUri(bD);}
else {bF=bE.toUri(bG);}
;if(bC===y){bB=this.__ie(bB,bI,bJ.height);}
else {bB=this.__if(bB,bI,bJ.width);}
;return {src:bF,style:bB};}
else {if(qx.core.Environment.get(z)){this.__ii(bD);}
;if(bC==y){bB.height=bJ.height==null?null:bJ.height+C;}
else if(bC==x){bB.width=bJ.width==null?null:bJ.width+C;}
;bF=bE.toUri(bD);return {src:bF,style:bB};}
;}
,__ie:function(bK,bL,bM){var bN=qx.util.ResourceManager.getInstance().getImageHeight(bL[4]);bK.clip={top:-bL[6],height:bM};bK.height=bN+C;if(bK.top!=null){bK.top=(parseInt(bK.top,10)+bL[6])+C;}
else if(bK.bottom!=null){bK.bottom=(parseInt(bK.bottom,10)+bM-bN-bL[6])+C;}
;return bK;}
,__if:function(bO,bP,bQ){var bR=qx.util.ResourceManager.getInstance().getImageWidth(bP[4]);bO.clip={left:-bP[5],width:bQ};bO.width=bR+C;if(bO.left!=null){bO.left=(parseInt(bO.left,10)+bP[5])+C;}
else if(bO.right!=null){bO.right=(parseInt(bO.right,10)+bQ-bR-bP[5])+C;}
;return bO;}
,__ig:function(bS,bT,bU){var bX=qx.util.ResourceManager.getInstance();var cd=bX.getCombinedFormat(bU);var cf=this.__ia(bU);if(cd&&bT!==l){var ce=bX.getData(bU);var cc=ce[4];if(cd==u){var cb=bX.toDataUri(bU);var ca=0;var bY=0;}
else {var cb=bX.toUri(cc);var ca=ce[5];var bY=ce[6];}
;var bV=qx.bom.element.Background.getStyles(cb,bT,ca,bY);for(var bW in bV){bS[bW]=bV[bW];}
;if(cf.width!=null&&bS.width==null&&(bT==c||bT===w)){bS.width=cf.width+C;}
;if(cf.height!=null&&bS.height==null&&(bT==p||bT===w)){bS.height=cf.height+C;}
;return {style:bS};}
else {if(qx.core.Environment.get(z)){if(bT!==l){this.__ii(bU);}
;}
;bS=this.__hY(bS,cf.width,cf.height);bS=this.__ih(bS,bU,bT);return {style:bS};}
;}
,__ih:function(cg,ch,ci){var top=null;var cm=null;if(cg.backgroundPosition){var cj=cg.backgroundPosition.split(s);cm=parseInt(cj[0],10);if(isNaN(cm)){cm=cj[0];}
;top=parseInt(cj[1],10);if(isNaN(top)){top=cj[1];}
;}
;var cl=qx.bom.element.Background.getStyles(ch,ci,cm,top);for(var ck in cl){cg[ck]=cl[ck];}
;if(cg.filter){cg.filter=B;}
;return cg;}
,__ii:function(cn){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(cn)&&cn.indexOf(k)==-1){if(!this.__hU[cn]){qx.log.Logger.debug(g+cn);this.__hU[cn]=true;}
;}
;}
,isAlphaImageLoaderEnabled:function(){return qx.bom.element.Decoration.__hV;}
}});}
)();
(function(){var c="load",b="qx.io.ImageLoader",a="html.image.naturaldimensions";qx.Bootstrap.define(b,{statics:{__cR:{},__ij:{width:null,height:null},__ik:/\.(png|gif|jpg|jpeg|bmp)\b/i,__il:/^data:image\/(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__cR[d];return !!(e&&e.loaded);}
,isFailed:function(f){var g=this.__cR[f];return !!(g&&g.failed);}
,isLoading:function(h){var j=this.__cR[h];return !!(j&&j.loading);}
,getFormat:function(k){var m=this.__cR[k];if(!m||!m.format){var o=this.__il.exec(k);if(o!=null){var p=(m&&qx.lang.Type.isNumber(m.width)?m.width:this.__ij.width);var n=(m&&qx.lang.Type.isNumber(m.height)?m.height:this.__ij.height);m={loaded:true,format:o[1],width:p,height:n};}
;}
;return m?m.format:null;}
,getSize:function(q){var r=this.__cR[q];return r?{width:r.width,height:r.height}:this.__ij;}
,getWidth:function(s){var t=this.__cR[s];return t?t.width:null;}
,getHeight:function(u){var v=this.__cR[u];return v?v.height:null;}
,load:function(w,x,y){var z=this.__cR[w];if(!z){z=this.__cR[w]={};}
;if(x&&!y){y=window;}
;if(z.loaded||z.loading||z.failed){if(x){if(z.loading){z.callbacks.push(x,y);}
else {x.call(y,w,z);}
;}
;}
else {z.loading=true;z.callbacks=[];if(x){z.callbacks.push(x,y);}
;var B=new Image();var A=qx.lang.Function.listener(this.__im,this,B,w);B.onload=A;B.onerror=A;B.src=w;z.element=B;}
;}
,abort:function(C){var D=this.__cR[C];if(D&&!D.loaded){D.aborted=true;var F=D.callbacks;var E=D.element;E.onload=E.onerror=null;delete D.callbacks;delete D.element;delete D.loading;for(var i=0,l=F.length;i<l;i+=2){F[i].call(F[i+1],C,D);}
;}
;this.__cR[C]=null;}
,__im:qx.event.GlobalError.observeMethod(function(event,G,H){var I=this.__cR[H];if(event.type===c){I.loaded=true;I.width=this.__in(G);I.height=this.__io(G);var J=this.__ik.exec(H);if(J!=null){I.format=J[1];}
;}
else {I.failed=true;}
;G.onload=G.onerror=null;var K=I.callbacks;delete I.loading;delete I.callbacks;delete I.element;for(var i=0,l=K.length;i<l;i+=2){K[i].call(K[i+1],H,I);}
;}
),__in:function(L){return qx.core.Environment.get(a)?L.naturalWidth:L.width;}
,__io:function(M){return qx.core.Environment.get(a)?M.naturalHeight:M.height;}
}});}
)();
(function(){var u="')",t="gecko",s="background-image:url(",r=");",q="",p=")",o="background-repeat:",n="engine.version",m="data:",l=" ",e="qx.bom.element.Background",k="url(",h="background-position:",c="base64",b="url('",g="engine.name",f="0",i="px",a=";",j="'",d="number";qx.Class.define(e,{statics:{__ip:[s,null,r,h,null,a,o,null,a],__iq:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ir:function(v,top){var w=qx.core.Environment.get(g);var x=qx.core.Environment.get(n);if(w==t&&x<1.9&&v==top&&typeof v==d){top+=0.01;}
;if(v){var z=(typeof v==d)?v+i:v;}
else {z=f;}
;if(top){var y=(typeof top==d)?top+i:top;}
else {y=f;}
;return z+l+y;}
,__is:function(A){var String=qx.lang.String;var B=A.substr(0,50);return String.startsWith(B,m)&&String.contains(B,c);}
,compile:function(C,D,E,top){var F=this.__ir(E,top);var G=qx.util.ResourceManager.getInstance().toUri(C);if(this.__is(G)){G=j+G+j;}
;var H=this.__ip;H[1]=G;H[4]=F;H[7]=D;return H.join(q);}
,getStyles:function(I,J,K,top){if(!I){return this.__iq;}
;var L=this.__ir(K,top);var N=qx.util.ResourceManager.getInstance().toUri(I);var O;if(this.__is(N)){O=b+N+u;}
else {O=k+N+p;}
;var M={backgroundPosition:L,backgroundImage:O};if(J!=null){M.backgroundRepeat=J;}
;return M;}
,set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);for(var U in T){P.style[U]=T[U];}
;}
}});}
)();
(function(){var k="",j="mshtml",i="backgroundImage",h="webkit",g="div",f="qx.html.Image",e="qx/static/blank.gif",d="engine.name",c="no-repeat",b="scale",a="source";qx.Class.define(f,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,l){qx.html.Element.prototype._applyProperty.call(this,name,l);if(name===a){var p=this.getDomElement();var m=this.getAllStyles();if(this.getNodeName()==g&&this.getStyle(i)){m.backgroundPosition=null;m.backgroundRepeat=null;}
;var n=this._getProperty(a);var o=this._getProperty(b);var q=o?b:c;if(n!=null){n=n||null;qx.bom.element.Decoration.update(p,n,q,m);}
;}
;}
,_removeProperty:function(r,s){if(r==a){this._setProperty(r,k,s);}
else {this._setProperty(r,null,s);}
;}
,_createDomElement:function(){var u=this._getProperty(b);var v=u?b:c;if((qx.core.Environment.get(d)==j)){var t=this._getProperty(a);if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);}
else {this.setNodeName(qx.bom.element.Decoration.getTagName(v,t));}
;}
else {this.setNodeName(qx.bom.element.Decoration.getTagName(v));}
;return qx.html.Element.prototype._createDomElement.call(this);}
,_copyData:function(w){return qx.html.Element.prototype._copyData.call(this,true);}
,setSource:function(x){this._setProperty(a,x);return this;}
,getSource:function(){return this._getProperty(a);}
,resetSource:function(){if((qx.core.Environment.get(d)==h)){this._setProperty(a,e);}
else {this._removeProperty(a,true);}
;return this;}
,setScale:function(y){this._setProperty(b,y);return this;}
,getScale:function(){return this._getProperty(b);}
}});}
)();
(function(){var g="_applyTheme",f="qx.theme.manager.Color",e="Theme",d="changeTheme",c="string",b="singleton",a="Could not parse color: ";qx.Class.define(f,{type:b,extend:qx.util.ValueManager,properties:{theme:{check:e,nullable:true,apply:g,event:d}},members:{_applyTheme:function(h){var i={};if(h){var j=h.colors;var k=qx.util.ColorUtil;var l;for(var m in j){l=j[m];if(typeof l===c){if(!k.isCssString(l)){throw new Error(a+l);}
;}
else if(l instanceof Array){l=k.rgbToRgbString(l);}
else {throw new Error(a+l);}
;i[m]=l;}
;}
;this._setDynamic(i);}
,resolve:function(n){var q=this._dynamic;var o=q[n];if(o){return o;}
;var p=this.getTheme();if(p!==null&&p.colors[n]){return q[n]=p.colors[n];}
;return n;}
,isDynamic:function(r){var t=this._dynamic;if(r&&(t[r]!==undefined)){return true;}
;var s=this.getTheme();if(s!==null&&r&&(s.colors[r]!==undefined)){t[r]=s.colors[r];return true;}
;return false;}
}});}
)();
(function(){var o="Invalid hex value: ",n="qx.util.ColorUtil",m=")",l="#",k="Invalid hex3 value: ",j="qx.theme.manager.Color",h="rgb(",e="Invalid hex6 value: ",d="Could not parse color: ",c="Could not convert system colors to RGB: ",a=",";qx.Bootstrap.define(n,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(s){return this.NAMED[s]!==undefined;}
,isSystemColor:function(u){return this.SYSTEM[u]!==undefined;}
,supportsThemes:function(){if(qx.Class){return qx.Class.isDefined(j);}
;return false;}
,isThemedColor:function(v){if(!this.supportsThemes()){return false;}
;if(qx.theme&&qx.theme.manager&&qx.theme.manager.Color){return qx.theme.manager.Color.getInstance().isDynamic(v);}
;return false;}
,stringToRgb:function(w){if(this.supportsThemes()&&this.isThemedColor(w)){var w=qx.theme.manager.Color.getInstance().resolveDynamic(w);}
;if(this.isNamedColor(w)){return this.NAMED[w];}
else if(this.isSystemColor(w)){throw new Error(c+w);}
else if(this.isRgbString(w)){return this.__it();}
else if(this.isHex3String(w)){return this.__iv();}
else if(this.isHex6String(w)){return this.__iw();}
;;;;throw new Error(d+w);}
,cssStringToRgb:function(x){if(this.isNamedColor(x)){return this.NAMED[x];}
else if(this.isSystemColor(x)){throw new Error(c+x);}
else if(this.isRgbString(x)){return this.__it();}
else if(this.isRgbaString(x)){return this.__iu();}
else if(this.isHex3String(x)){return this.__iv();}
else if(this.isHex6String(x)){return this.__iw();}
;;;;;throw new Error(d+x);}
,stringToRgbString:function(y){return this.rgbToRgbString(this.stringToRgb(y));}
,rgbToRgbString:function(z){return h+z[0]+a+z[1]+a+z[2]+m;}
,rgbToHexString:function(A){return (l+qx.lang.String.pad(A[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(A[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(A[2].toString(16).toUpperCase(),2));}
,isValidPropertyValue:function(B){return (this.isThemedColor(B)||this.isNamedColor(B)||this.isHex3String(B)||this.isHex6String(B)||this.isRgbString(B)||this.isRgbaString(B));}
,isCssString:function(C){return (this.isSystemColor(C)||this.isNamedColor(C)||this.isHex3String(C)||this.isHex6String(C)||this.isRgbString(C)||this.isRgbaString(C));}
,isHex3String:function(D){return this.REGEXP.hex3.test(D);}
,isHex6String:function(E){return this.REGEXP.hex6.test(E);}
,isRgbString:function(F){return this.REGEXP.rgb.test(F);}
,isRgbaString:function(G){return this.REGEXP.rgba.test(G);}
,__it:function(){var J=parseInt(RegExp.$1,10);var I=parseInt(RegExp.$2,10);var H=parseInt(RegExp.$3,10);return [J,I,H];}
,__iu:function(){var M=parseInt(RegExp.$1,10);var L=parseInt(RegExp.$2,10);var K=parseInt(RegExp.$3,10);return [M,L,K];}
,__iv:function(){var P=parseInt(RegExp.$1,16)*17;var O=parseInt(RegExp.$2,16)*17;var N=parseInt(RegExp.$3,16)*17;return [P,O,N];}
,__iw:function(){var S=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);var R=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);var Q=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);return [S,R,Q];}
,hex3StringToRgb:function(T){if(this.isHex3String(T)){return this.__iv(T);}
;throw new Error(k+T);}
,hex3StringToHex6String:function(U){if(this.isHex3String(U)){return this.rgbToHexString(this.hex3StringToRgb(U));}
;return U;}
,hex6StringToRgb:function(V){if(this.isHex6String(V)){return this.__iw(V);}
;throw new Error(e+V);}
,hexStringToRgb:function(W){if(this.isHex3String(W)){return this.__iv(W);}
;if(this.isHex6String(W)){return this.__iw(W);}
;throw new Error(o+W);}
,rgbToHsb:function(X){var ba,bb,bd;var bj=X[0];var bg=X[1];var Y=X[2];var bi=(bj>bg)?bj:bg;if(Y>bi){bi=Y;}
;var bc=(bj<bg)?bj:bg;if(Y<bc){bc=Y;}
;bd=bi/255.0;if(bi!=0){bb=(bi-bc)/bi;}
else {bb=0;}
;if(bb==0){ba=0;}
else {var bf=(bi-bj)/(bi-bc);var bh=(bi-bg)/(bi-bc);var be=(bi-Y)/(bi-bc);if(bj==bi){ba=be-bh;}
else if(bg==bi){ba=2.0+bf-be;}
else {ba=4.0+bh-bf;}
;ba=ba/6.0;if(ba<0){ba=ba+1.0;}
;}
;return [Math.round(ba*360),Math.round(bb*100),Math.round(bd*100)];}
,hsbToRgb:function(bk){var i,f,p,q,t;var bl=bk[0]/360;var bm=bk[1]/100;var bn=bk[2]/100;if(bl>=1.0){bl%=1.0;}
;if(bm>1.0){bm=1.0;}
;if(bn>1.0){bn=1.0;}
;var bo=Math.floor(255*bn);var bp={};if(bm==0.0){bp.red=bp.green=bp.blue=bo;}
else {bl*=6.0;i=Math.floor(bl);f=bl-i;p=Math.floor(bo*(1.0-bm));q=Math.floor(bo*(1.0-(bm*f)));t=Math.floor(bo*(1.0-(bm*(1.0-f))));switch(i){case 0:bp.red=bo;bp.green=t;bp.blue=p;break;case 1:bp.red=q;bp.green=bo;bp.blue=p;break;case 2:bp.red=p;bp.green=bo;bp.blue=t;break;case 3:bp.red=p;bp.green=q;bp.blue=bo;break;case 4:bp.red=t;bp.green=p;bp.blue=bo;break;case 5:bp.red=bo;bp.green=p;bp.blue=q;break;};}
;return [bp.red,bp.green,bp.blue];}
,randomColor:function(){var r=Math.round(Math.random()*255);var g=Math.round(Math.random()*255);var b=Math.round(Math.random()*255);return this.rgbToRgbString([r,g,b]);}
}});}
)();
(function(){var j="Missing appearance: ",h="_applyTheme",g="qx.theme.manager.Appearance",f=":",e="Theme",d="changeTheme",c="/",b="singleton",a="string";qx.Class.define(g,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__ix={};this.__iy={};}
,properties:{theme:{check:e,nullable:true,event:d,apply:h}},members:{__iz:{},__ix:null,__iy:null,_applyTheme:function(k,l){this.__iy={};this.__ix={};}
,__iA:function(m,n,o){var t=n.appearances;var w=t[m];if(!w){var x=c;var q=[];var v=m.split(x);var u;while(!w&&v.length>0){q.unshift(v.pop());var r=v.join(x);w=t[r];if(w){u=w.alias||w;if(typeof u===a){var s=u+x+q.join(x);return this.__iA(s,n,o);}
;}
;}
;for(var i=0;i<q.length-1;i++){q.shift();var r=q.join(x);var p=this.__iA(r,n);if(p){return p;}
;}
;if(o!=null){return this.__iA(o,n);}
;return null;}
else if(typeof w===a){return this.__iA(w,n,o);}
else if(w.include&&!w.style){return this.__iA(w.include,n,o);}
;;return m;}
,styleFrom:function(y,z,A,B){if(!A){A=this.getTheme();}
;var G=this.__iy;var C=G[y];if(!C){C=G[y]=this.__iA(y,A,B);}
;var M=A.appearances[C];if(!M){this.warn(j+y);return null;}
;if(!M.style){return null;}
;var N=C;if(z){var O=M.$$bits;if(!O){O=M.$$bits={};M.$$length=0;}
;var E=0;for(var I in z){if(!z[I]){continue;}
;if(O[I]==null){O[I]=1<<M.$$length++;}
;E+=O[I];}
;if(E>0){N+=f+E;}
;}
;var F=this.__ix;if(F[N]!==undefined){return F[N];}
;if(!z){z=this.__iz;}
;var K;if(M.include||M.base){var D;if(M.include){D=this.styleFrom(M.include,z,A,B);}
;var H=M.style(z,D);K={};if(M.base){var J=this.styleFrom(C,z,M.base,B);if(M.include){for(var L in J){if(!D.hasOwnProperty(L)&&!H.hasOwnProperty(L)){K[L]=J[L];}
;}
;}
else {for(var L in J){if(!H.hasOwnProperty(L)){K[L]=J[L];}
;}
;}
;}
;if(M.include){for(var L in D){if(!H.hasOwnProperty(L)){K[L]=D[L];}
;}
;}
;for(var L in H){K[L]=H[L];}
;}
else {K=M.style(z);}
;return F[N]=K||null;}
},destruct:function(){this.__ix=this.__iy=null;}
});}
)();
(function(){var j="Boolean",i="bottom-right",h="' ",g="widget",f="qx.ui.core.MPlacement",e="left-top",d="[qx.ui.core.MPlacement.setMoveDirection()], the value was '",c="offsetRight",b="shorthand",a="Invalid value for the parameter 'direction' ",F="offsetLeft",E="top-left",D="appear",C="offsetBottom",B="top",A="top-right",z="offsetTop",y="but 'top' or 'left' are allowed.",x="right-bottom",w="right-top",q="left-bottom",r="best-fit",o="placementRight",p="placementLeft",m="mouse",n="bottom-left",k="direct",l="disappear",s="left",t="Integer",v="interval",u="keep-align";qx.Mixin.define(f,{statics:{__dO:null,__iB:s,setVisibleElement:function(G){this.__dO=G;}
,getVisibleElement:function(){return this.__dO;}
,setMoveDirection:function(H){if(H===B||H===s){this.__iB=H;}
else {throw new Error(a+d+H+h+y);}
;}
,getMoveDirection:function(){return this.__iB;}
},properties:{position:{check:[E,A,n,i,e,q,w,x],init:n,themeable:true},placeMethod:{check:[g,m],init:m,themeable:true},domMove:{check:j,init:false},placementModeX:{check:[k,u,r],init:u,themeable:true},placementModeY:{check:[k,u,r],init:u,themeable:true},offsetLeft:{check:t,init:0,themeable:true},offsetTop:{check:t,init:0,themeable:true},offsetRight:{check:t,init:0,themeable:true},offsetBottom:{check:t,init:0,themeable:true},offset:{group:[z,c,C,F],mode:b,themeable:true}},members:{__iC:null,__iD:null,__iE:null,getLayoutLocation:function(I){var L,K,M,top;K=I.getBounds();if(!K){return null;}
;M=K.left;top=K.top;var N=K;I=I.getLayoutParent();while(I&&!I.isRootWidget()){K=I.getBounds();M+=K.left;top+=K.top;L=I.getInsets();M+=L.left;top+=L.top;I=I.getLayoutParent();}
;if(I.isRootWidget()){var J=I.getContainerLocation();if(J){M+=J.left;top+=J.top;}
;}
;return {left:M,top:top,right:M+N.width,bottom:top+N.height};}
,moveTo:function(O,top){var U=qx.ui.core.MPlacement.getVisibleElement();if(U){var T=this.getBounds();var S=U.getContentLocation();if(T&&S){var R=top+T.height;var Q=O+T.width;if((Q>S.left&&O<S.right)&&(R>S.top&&top<S.bottom)){var P=qx.ui.core.MPlacement.getMoveDirection();if(P===s){O=Math.max(S.left-T.width,0);}
else {top=Math.max(S.top-T.height,0);}
;}
;}
;}
;if(this.getDomMove()){this.setDomPosition(O,top);}
else {this.setLayoutProperties({left:O,top:top});}
;}
,placeToWidget:function(V,W){if(W){this.__iF();this.__iC=qx.lang.Function.bind(this.placeToWidget,this,V,false);qx.event.Idle.getInstance().addListener(v,this.__iC);this.__iE=function(){this.__iF();}
;this.addListener(l,this.__iE,this);}
;var X=V.getContainerLocation()||this.getLayoutLocation(V);if(X!=null){this.__iH(X);return true;}
else {return false;}
;}
,__iF:function(){if(this.__iC){qx.event.Idle.getInstance().removeListener(v,this.__iC);this.__iC=null;}
;if(this.__iE){this.removeListener(l,this.__iE,this);this.__iE=null;}
;}
,placeToMouse:function(event){var ba=event.getDocumentLeft();var top=event.getDocumentTop();var Y={left:ba,top:top,right:ba,bottom:top};this.__iH(Y);}
,placeToElement:function(bb,bc){var location=qx.bom.element.Location.get(bb);var bd={left:location.left,top:location.top,right:location.left+bb.offsetWidth,bottom:location.top+bb.offsetHeight};if(bc){this.__iC=qx.lang.Function.bind(this.placeToElement,this,bb,false);qx.event.Idle.getInstance().addListener(v,this.__iC);this.addListener(l,function(){if(this.__iC){qx.event.Idle.getInstance().removeListener(v,this.__iC);this.__iC=null;}
;}
,this);}
;this.__iH(bd);}
,placeToPoint:function(be){var bf={left:be.left,top:be.top,right:be.left,bottom:be.top};this.__iH(bf);}
,_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};}
,__iG:function(bg){var bh=null;if(this._computePlacementSize){var bh=this._computePlacementSize();}
else if(this.isVisible()){var bh=this.getBounds();}
;if(bh==null){this.addListenerOnce(D,function(){this.__iG(bg);}
,this);}
else {bg.call(this,bh);}
;}
,__iH:function(bi){this.__iG(function(bj){var bk=qx.util.placement.Placement.compute(bj,this.getLayoutParent().getBounds(),bi,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());this.removeState(p);this.removeState(o);this.addState(bi.left<bk.left?o:p);this.moveTo(bk.left,bk.top);}
);}
},destruct:function(){this.__iF();}
});}
)();
(function(){var f="Number",e="_applyTimeoutInterval",d="qx.event.type.Event",c="qx.event.Idle",b="singleton",a="interval";qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){qx.core.Object.call(this);var g=new qx.event.Timer(this.getTimeoutInterval());g.addListener(a,this._onInterval,this);g.start();this.__iI=g;}
,events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__iI:null,_applyTimeoutInterval:function(h){this.__iI.setInterval(h);}
,_onInterval:function(){this.fireEvent(a);}
},destruct:function(){if(this.__iI){this.__iI.stop();}
;this.__iI=null;}
});}
)();
(function(){var j="-",i="best-fit",h="size",g="target.bottom",f="offsets",e="size.width",d="offsets.bottom",c="qx.util.placement.Placement",b="qx.debug",a="keep-align",G="target.right",F="direct",E="offsets.right",D="target",C="Invalid 'mode' argument!'",B="offsets.left",A="area",z="target.top",y='__iJ',x="area.height",q="target.left",r="area.width",o="size.height",p="offsets.top",m="edge-start",n="align-start",k="align-end",l="Class",s="edge-end",t="bottom",v="left",u="top",w="right";qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__iJ=qx.util.placement.DirectAxis;}
,properties:{axisX:{check:l},axisY:{check:l},edge:{check:[u,w,t,v],init:u},align:{check:[u,w,t,v],init:w}},statics:{__iK:null,compute:function(H,I,J,K,L,M,N){this.__iK=this.__iK||new qx.util.placement.Placement();var Q=L.split(j);var P=Q[0];var O=Q[1];this.__iK.set({axisX:this.__iO(M),axisY:this.__iO(N),edge:P,align:O});return this.__iK.compute(H,I,J,K);}
,__iL:null,__iM:null,__iN:null,__iO:function(R){switch(R){case F:this.__iL=this.__iL||qx.util.placement.DirectAxis;return this.__iL;case a:this.__iM=this.__iM||qx.util.placement.KeepAlignAxis;return this.__iM;case i:this.__iN=this.__iN||qx.util.placement.BestFitAxis;return this.__iN;default:throw new Error(C);};}
},members:{__iJ:null,compute:function(S,T,U,V){if(qx.core.Environment.get(b)){this.assertObject(S,h);this.assertNumber(S.width,e);this.assertNumber(S.height,o);this.assertObject(T,A);this.assertNumber(T.width,r);this.assertNumber(T.height,x);this.assertObject(U,D);this.assertNumber(U.top,z);this.assertNumber(U.right,G);this.assertNumber(U.bottom,g);this.assertNumber(U.left,q);this.assertObject(V,f);this.assertNumber(V.top,p);this.assertNumber(V.right,E);this.assertNumber(V.bottom,d);this.assertNumber(V.left,B);}
;var W=this.getAxisX()||this.__iJ;var Y=W.computeStart(S.width,{start:U.left,end:U.right},{start:V.left,end:V.right},T.width,this.__iP());var X=this.getAxisY()||this.__iJ;var top=X.computeStart(S.height,{start:U.top,end:U.bottom},{start:V.top,end:V.bottom},T.height,this.__iQ());return {left:Y,top:top};}
,__iP:function(){var bb=this.getEdge();var ba=this.getAlign();if(bb==v){return m;}
else if(bb==w){return s;}
else if(ba==v){return n;}
else if(ba==w){return k;}
;;;}
,__iQ:function(){var bd=this.getEdge();var bc=this.getAlign();if(bd==u){return m;}
else if(bd==t){return s;}
else if(bc==u){return n;}
else if(bc==t){return k;}
;;;}
},destruct:function(){this._disposeObjects(y);}
});}
)();
(function(){var f="align-start",e="align-end",d="qx.util.placement.AbstractAxis",c="edge-start",b="abstract method call!",a="edge-end";qx.Bootstrap.define(d,{extend:Object,statics:{computeStart:function(g,h,i,j,k){throw new Error(b);}
,_moveToEdgeAndAlign:function(l,m,n,o){switch(o){case c:return m.start-n.end-l;case a:return m.end+n.start;case f:return m.start+n.start;case e:return m.end-n.end-l;};}
,_isInRange:function(p,q,r){return p>=0&&p+q<=r;}
}});}
)();
(function(){var a="qx.util.placement.DirectAxis";qx.Bootstrap.define(a,{statics:{_moveToEdgeAndAlign:qx.util.placement.AbstractAxis._moveToEdgeAndAlign,computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);}
}});}
)();
(function(){var c="qx.util.placement.KeepAlignAxis",b="edge-start",a="edge-end";qx.Bootstrap.define(c,{statics:{_moveToEdgeAndAlign:qx.util.placement.AbstractAxis._moveToEdgeAndAlign,_isInRange:qx.util.placement.AbstractAxis._isInRange,computeStart:function(d,e,f,g,h){var i=this._moveToEdgeAndAlign(d,e,f,h);var j,k;if(this._isInRange(i,d,g)){return i;}
;if(h==b||h==a){j=e.start-f.end;k=e.end+f.start;}
else {j=e.end-f.end;k=e.start+f.start;}
;if(j>g-k){i=j-d;}
else {i=k;}
;return i;}
}});}
)();
(function(){var a="qx.util.placement.BestFitAxis";qx.Bootstrap.define(a,{statics:{_isInRange:qx.util.placement.AbstractAxis._isInRange,_moveToEdgeAndAlign:qx.util.placement.AbstractAxis._moveToEdgeAndAlign,computeStart:function(b,c,d,e,f){var g=this._moveToEdgeAndAlign(b,c,d,f);if(this._isInRange(g,b,e)){return g;}
;if(g<0){g=Math.min(0,e-b);}
;if(g+b>e){g=Math.max(0,e-b);}
;return g;}
}});}
)();
(function(){var j="__iR",i="Image could not be loaded: ",h="Boolean",g="px",f="http",e="engine.version",d="scale",c="changeSource",b="qx.ui.basic.Image",a="loaded",E="qx.debug",D="-disabled.$1",C="loadingFailed",B="String",A="_applySource",z="img",y="data:image/",x="image",w="mshtml",v="_applyScale",q="try to load an unmanaged relative image: ",r="no-repeat",o=".png",p="div",m="replacement",n="qx.event.type.Event",k="engine.name",l="hidden",s="alphaScaled",t="scaled",u="nonScaled";qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(F){this.__iR={};qx.ui.core.Widget.call(this);if(F){this.setSource(F);}
;}
,properties:{source:{check:B,init:null,nullable:true,event:c,apply:A,themeable:true},scale:{check:h,init:false,themeable:true,apply:v},appearance:{refine:true,init:x},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:n,loaded:n},members:{__iS:null,__iT:null,__fG:null,__iR:null,getContentElement:function(){return this.__iX();}
,_createContentElement:function(){return this.__iX();}
,_getContentHint:function(){return {width:this.__iS||0,height:this.__iT||0};}
,_applyEnabled:function(G,H){qx.ui.core.Widget.prototype._applyEnabled.call(this,G,H);if(this.getSource()){this._styleSource();}
;}
,_applySource:function(I){this._styleSource();}
,_applyScale:function(J){this._styleSource();}
,__iU:function(K){this.__fG=K;}
,__iV:function(){if(this.__fG==null){var M=this.getSource();var L=false;if(M!=null){L=qx.lang.String.endsWith(M,o);}
;if(this.getScale()&&L&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__fG=s;}
else if(this.getScale()){this.__fG=t;}
else {this.__fG=u;}
;}
;return this.__fG;}
,__iW:function(N){var O;var P;if(N==s){O=true;P=p;}
else if(N==u){O=false;P=p;}
else {O=true;P=z;}
;var Q=new qx.html.Image(P);Q.setScale(O);Q.setStyles({"overflowX":l,"overflowY":l});return Q;}
,__iX:function(){var R=this.__iV();if(this.__iR[R]==null){this.__iR[R]=this.__iW(R);}
;return this.__iR[R];}
,_styleSource:function(){var S=qx.util.AliasManager.getInstance().resolve(this.getSource());if(!S){this.getContentElement().resetSource();return;}
;this.__iY(S);if((qx.core.Environment.get(k)==w)&&parseInt(qx.core.Environment.get(e),10)<9){var T=this.getScale()?d:r;this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(T,S);}
;if(qx.util.ResourceManager.getInstance().has(S)){this.__jb(this.getContentElement(),S);}
else if(qx.io.ImageLoader.isLoaded(S)){this.__jc(this.getContentElement(),S);}
else {this.__jd(this.getContentElement(),S);}
;}
,__iY:qx.core.Environment.select(k,{"mshtml":function(U){var W=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();var V=qx.lang.String.endsWith(U,o);if(W&&V){if(this.getScale()&&this.__iV()!=s){this.__iU(s);}
else if(!this.getScale()&&this.__iV()!=u){this.__iU(u);}
;}
else {if(this.getScale()&&this.__iV()!=t){this.__iU(t);}
else if(!this.getScale()&&this.__iV()!=u){this.__iU(u);}
;}
;this.__ja(this.__iX());}
,"default":function(X){if(this.getScale()&&this.__iV()!=t){this.__iU(t);}
else if(!this.getScale()&&this.__iV(u)){this.__iU(u);}
;this.__ja(this.__iX());}
}),__ja:function(Y){var bc=this.getContainerElement();var bd=bc.getChild(0);if(bd!=Y){if(bd!=null){var bf=g;var ba={};var bb=this.getInnerSize();if(bb!=null){ba.width=bb.width+bf;ba.height=bb.height+bf;}
;var be=this.getInsets();ba.left=be.left+bf;ba.top=be.top+bf;ba.zIndex=10;Y.setStyles(ba,true);Y.setSelectable(this.getSelectable());bc.removeAt(0);bc.addAt(Y,0);}
;}
;}
,__jb:function(bg,bh){var bj=qx.util.ResourceManager.getInstance();if(!this.getEnabled()){var bi=bh.replace(/\.([a-z]+)$/,D);if(bj.has(bi)){bh=bi;this.addState(m);}
else {this.removeState(m);}
;}
;if(bg.getSource()===bh){return;}
;bg.setSource(bh);this.__jf(bj.getImageWidth(bh),bj.getImageHeight(bh));}
,__jc:function(bk,bl){var bn=qx.io.ImageLoader;bk.setSource(bl);var bm=bn.getWidth(bl);var bo=bn.getHeight(bl);this.__jf(bm,bo);}
,__jd:function(bp,bq){var bt=qx.io.ImageLoader;if(qx.core.Environment.get(E)){var br=bq.toLowerCase();var bs=qx.lang.String.startsWith;if(!bs(br,f)&&!bs(br,y)){var self=this.self(arguments);if(!self.__GH){self.__GH={};}
;if(!self.__GH[bq]){this.debug(q+bq);self.__GH[bq]=true;}
;}
;}
;if(!bt.isFailed(bq)){bt.load(bq,this.__je,this);}
else {if(bp!=null){bp.resetSource();}
;}
;}
,__je:function(bu,bv){if(this.$$disposed===true){return;}
;if(bu!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;}
;if(bv.failed){this.warn(i+bu);this.fireEvent(C);}
else if(bv.aborted){return;}
else {this.fireEvent(a);}
;this._styleSource();}
,__jf:function(bw,bx){if(bw!==this.__iS||bx!==this.__iT){this.__iS=bw;this.__iT=bx;qx.ui.core.queue.Layout.add(this);}
;}
},destruct:function(){this._disposeMap(j);}
});}
)();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){qx.ui.basic.Image.call(this);this.setZIndex(1e8);this.setDomMove(true);var h=this.getApplicationRoot();h.add(this,{left:-1000,top:-1000});}
,properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(i,j){if(j){this.removeState(j);}
;if(i){this.addState(i);}
;}
}});}
)();
(function(){var a="qx.ui.core.MChildrenHandling";qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();}
,hasChildren:function(){return this._hasChildren();}
,indexOf:function(b){return this._indexOf(b);}
,add:function(c,d){this._add(c,d);}
,addAt:function(e,f,g){this._addAt(e,f,g);}
,addBefore:function(h,i,j){this._addBefore(h,i,j);}
,addAfter:function(k,l,m){this._addAfter(k,l,m);}
,remove:function(n){this._remove(n);}
,removeAt:function(o){return this._removeAt(o);}
,removeAll:function(){return this._removeAll();}
},statics:{remap:function(p){p.getChildren=p._getChildren;p.hasChildren=p._hasChildren;p.indexOf=p._indexOf;p.add=p._add;p.addAt=p._addAt;p.addBefore=p._addBefore;p.addAfter=p._addAfter;p.remove=p._remove;p.removeAt=p._removeAt;p.removeAll=p._removeAll;}
}});}
)();
(function(){var d="qx.ui.container.Composite",c="addChildWidget",b="removeChildWidget",a="qx.event.type.Data";qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(e){qx.ui.core.Widget.call(this);if(e!=null){this._setLayout(e);}
;}
,events:{addChildWidget:a,removeChildWidget:a},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(c,qx.event.type.Data,[f]);}
,_afterRemoveChild:function(g){this.fireNonBubblingEvent(b,qx.event.type.Data,[g]);}
},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);qx.ui.core.MLayoutHandling.remap(i);}
});}
)();
(function(){var a="qx.application.IApplication";qx.Interface.define(a,{members:{main:function(){}
,finalize:function(){}
,close:function(){}
,terminate:function(){}
}});}
)();
(function(){var c="Abstract method call",b="abstract",a="qx.application.AbstractGui";qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__dM:null,_createRootWidget:function(){throw new Error(c);}
,getRoot:function(){return this.__dM;}
,main:function(){qx.theme.manager.Meta.getInstance().initialize();qx.ui.tooltip.Manager.getInstance();this.__dM=this._createRootWidget();}
,finalize:function(){this.render();}
,render:function(){qx.ui.core.queue.Manager.flush();}
,close:function(d){}
,terminate:function(){}
},destruct:function(){this.__dM=null;}
});}
)();
(function(){var g="The theme to use is not available: ",f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(h,i){var l=null;var o=null;var r=null;var s=null;var n=null;if(h){l=h.meta.color||null;o=h.meta.decoration||null;r=h.meta.font||null;s=h.meta.icon||null;n=h.meta.appearance||null;}
;var p=qx.theme.manager.Color.getInstance();var q=qx.theme.manager.Decoration.getInstance();var j=qx.theme.manager.Font.getInstance();var m=qx.theme.manager.Icon.getInstance();var k=qx.theme.manager.Appearance.getInstance();p.setTheme(l);q.setTheme(o);j.setTheme(r);m.setTheme(s);k.setTheme(n);}
,initialize:function(){var v=qx.core.Environment;var t,u;t=v.get(e);if(t){u=qx.Theme.getByName(t);if(!u){throw new Error(g+t);}
;this.setTheme(u);}
;}
},environment:{"qx.theme":c}});}
)();
(function(){var f="_applyTheme",e="qx.theme.manager.Font",d="_dynamic",c="Theme",b="changeTheme",a="singleton";qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:c,nullable:true,apply:f,event:b}},members:{resolveDynamic:function(g){var h=this._dynamic;return g instanceof qx.bom.Font?g:h[g];}
,resolve:function(i){var l=this._dynamic;var j=l[i];if(j){return j;}
;var k=this.getTheme();if(k!==null&&k.fonts[i]){var m=this.__jh(k.fonts[i]);return l[i]=(new m).set(k.fonts[i]);}
;return i;}
,isDynamic:function(n){var q=this._dynamic;if(n&&(n instanceof qx.bom.Font||q[n]!==undefined)){return true;}
;var p=this.getTheme();if(p!==null&&n&&p.fonts[n]){var o=this.__jh(p.fonts[n]);q[n]=(new o).set(p.fonts[n]);return true;}
;return false;}
,__jg:function(r,s){if(r[s].include){var t=r[r[s].include];r[s].include=null;delete r[s].include;r[s]=qx.lang.Object.mergeWith(r[s],t,false);this.__jg(r,s);}
;}
,_applyTheme:function(u){var v=this._getDynamic();for(var y in v){if(v[y].themed){v[y].dispose();delete v[y];}
;}
;if(u){var w=u.fonts;for(var y in w){if(w[y].include&&w[w[y].include]){this.__jg(w,y);}
;var x=this.__jh(w[y]);v[y]=(new x).set(w[y]);v[y].themed=true;}
;}
;this._setDynamic(v);}
,__jh:function(z){if(z.sources){return qx.bom.webfonts.WebFont;}
;return qx.bom.Font;}
},destruct:function(){this._disposeMap(d);}
});}
)();
(function(){var k="_applyItalic",j="_applyBold",h="_applyTextShadow",g="Integer",f="_applyFamily",e="_applyLineHeight",d="Array",c="line-through",b="overline",a="Color",B="String",A="qx.bom.Font",z="Number",y="_applyDecoration",x=" ",w="_applySize",v=",",u="_applyColor",t="Boolean",s="px",q='"',r="italic",o="normal",p="bold",m="underline",n="";qx.Class.define(A,{extend:qx.core.Object,construct:function(C,D){qx.core.Object.call(this);this.__ji={fontFamily:n,fontSize:null,fontWeight:null,fontStyle:null,textDecoration:null,lineHeight:null,color:null,textShadow:null};if(C!==undefined){this.setSize(C);}
;if(D!==undefined){this.setFamily(D);}
;}
,statics:{fromString:function(E){var I=new qx.bom.Font();var G=E.split(/\s+/);var name=[];var H;for(var i=0;i<G.length;i++){switch(H=G[i]){case p:I.setBold(true);break;case r:I.setItalic(true);break;case m:I.setDecoration(m);break;default:var F=parseInt(H,10);if(F==H||qx.lang.String.contains(H,s)){I.setSize(F);}
else {name.push(H);}
;break;};}
;if(name.length>0){I.setFamily(name);}
;return I;}
,fromConfig:function(J){var K=new qx.bom.Font;K.set(J);return K;}
,__jj:{fontFamily:n,fontSize:n,fontWeight:n,fontStyle:n,textDecoration:n,lineHeight:1.2,color:n,textShadow:n},getDefaultStyles:function(){return this.__jj;}
},properties:{size:{check:g,nullable:true,apply:w},lineHeight:{check:z,nullable:true,apply:e},family:{check:d,nullable:true,apply:f},bold:{check:t,nullable:true,apply:j},italic:{check:t,nullable:true,apply:k},decoration:{check:[m,c,b],nullable:true,apply:y},color:{check:a,nullable:true,apply:u},textShadow:{nullable:true,check:B,apply:h}},members:{__ji:null,_applySize:function(L,M){this.__ji.fontSize=L===null?null:L+s;}
,_applyLineHeight:function(N,O){this.__ji.lineHeight=N===null?null:N;}
,_applyFamily:function(P,Q){var R=n;for(var i=0,l=P.length;i<l;i++){if(P[i].indexOf(x)>0){R+=q+P[i]+q;}
else {R+=P[i];}
;if(i!==l-1){R+=v;}
;}
;this.__ji.fontFamily=R;}
,_applyBold:function(S,T){this.__ji.fontWeight=S==null?null:S?p:o;}
,_applyItalic:function(U,V){this.__ji.fontStyle=U==null?null:U?r:o;}
,_applyDecoration:function(W,X){this.__ji.textDecoration=W==null?null:W;}
,_applyColor:function(Y,ba){this.__ji.color=null;if(Y){this.__ji.color=qx.theme.manager.Color.getInstance().resolve(Y);}
;}
,_applyTextShadow:function(bb,bc){this.__ji.textShadow=bb==null?null:bb;}
,getStyles:function(){return this.__ji;}
}});}
)();
(function(){var h="qx.bom.webfonts.WebFont",g="",f="qx.debug",e="changeStatus",d="_applySources",c="qx.event.type.Data",b=" was not applied, perhaps the source file could not be loaded.",a="WebFont ";qx.Class.define(h,{extend:qx.bom.Font,events:{"changeStatus":c},properties:{sources:{nullable:true,apply:d}},members:{__jk:null,_applySources:function(j,k){var o=[];for(var i=0,l=j.length;i<l;i++){var n=this._quoteFontFamily(j[i].family);o.push(n);var m=j[i].source;qx.bom.webfonts.Manager.getInstance().require(n,m,this._onWebFontChangeStatus,this);}
;this.setFamily(o.concat(this.getFamily()));}
,_onWebFontChangeStatus:function(p){var q=p.getData();this.fireDataEvent(e,q);if(qx.core.Environment.get(f)){if(q.valid===false){this.warn(a+q.family+b);}
;}
;}
,_quoteFontFamily:function(r){return r.replace(/["']/g,g);}
}});}
)();
(function(){var n="m",k="os.name",h=")",g="os.version",f="qx.bom.webfonts.Manager",e="singleton",d=",\n",c="src: ",b="mobileSafari",a="'eot)",bd="');",bc="qx.debug",bb="interval",ba="!",Y="'eot')",X="\.(",W="}\n",V="font-family: ",U="mobile safari",T="safari",u="@font-face.*?",v=";\n",s="') format('woff')",t="('embedded-opentype')",q="browser.version",r="opera",o="Couldn't create @font-face rule for WebFont ",p="') format('svg')",z="src: url('",A="('embedded-opentype)",H="\nfont-style: normal;\nfont-weight: normal;",F="?#iefix') format('embedded-opentype')",L=";",J="Error while adding @font-face rule:",P="@font-face {",N="') format('truetype')",C="svg",S="#",R="chrome",Q="firefox",B="eot",D="ios",E="ttf",G="changeStatus",I="woff",K="browser.documentmode",M="browser.name",O="ie",w="url('",y="";qx.Class.define(f,{extend:qx.core.Object,type:e,construct:function(){qx.core.Object.call(this);this.__jl=[];this.__jm={};this.__gO=[];this.__jn=this.getPreferredFormats();}
,statics:{FONT_FORMATS:["eot","woff","ttf","svg"],VALIDATION_TIMEOUT:5000},members:{__jl:null,__jo:null,__jm:null,__jn:null,__gO:null,__jp:null,require:function(be,bf,bg,bh){var bi=[];for(var i=0,l=bf.length;i<l;i++){var bk=bf[i].split(S);var bj=qx.util.ResourceManager.getInstance().toUri(bk[0]);if(bk.length>1){bj=bj+S+bk[1];}
;bi.push(bj);}
;if(!(qx.core.Environment.get(M)==O&&qx.bom.client.Browser.getVersion()<9)){this.__jq(be,bi,bg,bh);return;}
;if(!this.__jp){this.__jp=new qx.event.Timer(100);this.__jp.addListener(bb,this.__jr,this);}
;if(!this.__jp.isEnabled()){this.__jp.start();}
;this.__gO.push([be,bi,bg,bh]);}
,remove:function(bl){var bm=null;for(var i=0,l=this.__jl.length;i<l;i++){if(this.__jl[i]==bl){bm=i;this.__jx(bl);break;}
;}
;if(bm){qx.lang.Array.removeAt(this.__jl,bm);}
;if(bl in this.__jm){this.__jm[bl].dispose();delete this.__jm[bl];}
;}
,getPreferredFormats:function(){var bn=[];var br=qx.core.Environment.get(M);var bo=qx.core.Environment.get(q);var bq=qx.core.Environment.get(k);var bp=qx.core.Environment.get(g);if((br==O&&qx.core.Environment.get(K)>=9)||(br==Q&&bo>=3.6)||(br==R&&bo>=6)){bn.push(I);}
;if((br==r&&bo>=10)||(br==T&&bo>=3.1)||(br==Q&&bo>=3.5)||(br==R&&bo>=4)||(br==U&&bq==D&&bp>=4.2)){bn.push(E);}
;if(br==O&&bo>=4){bn.push(B);}
;if(br==b&&bq==D&&bp>=4.1){bn.push(C);}
;return bn;}
,removeStyleSheet:function(){this.__jl=[];if(this.__jo){qx.bom.Stylesheet.removeSheet(this.__jo);}
;this.__jo=null;}
,__jq:function(bs,bt,bu,bv){if(!qx.lang.Array.contains(this.__jl,bs)){var by=this.__jt(bt);var bx=this.__ju(bs,by);if(!bx){throw new Error(o+bs+ba);}
;if(!this.__jo){this.__jo=qx.bom.Stylesheet.createElement();}
;try{this.__jw(bx);}
catch(bz){if(qx.core.Environment.get(bc)){this.warn(J,bz.message);return;}
;}
;this.__jl.push(bs);}
;if(!this.__jm[bs]){this.__jm[bs]=new qx.bom.webfonts.Validator(bs);this.__jm[bs].setTimeout(qx.bom.webfonts.Manager.VALIDATION_TIMEOUT);this.__jm[bs].addListenerOnce(G,this.__js,this);}
;if(bu){var bw=bv||window;this.__jm[bs].addListenerOnce(G,bu,bw);}
;this.__jm[bs].validate();}
,__jr:function(){if(this.__gO.length==0){this.__jp.stop();return;}
;var bA=this.__gO.shift();this.__jq.apply(this,bA);}
,__js:function(bB){var bC=bB.getData();if(bC.valid===false){qx.event.Timer.once(function(){this.remove(bC.family);}
,this,250);}
;}
,__jt:function(bD){var bF=qx.bom.webfonts.Manager.FONT_FORMATS;var bI={};for(var i=0,l=bD.length;i<l;i++){var bG=null;for(var x=0;x<bF.length;x++){var bH=new RegExp(X+bF[x]+h);var bE=bH.exec(bD[i]);if(bE){bG=bE[1];}
;}
;if(bG){bI[bG]=bD[i];}
;}
;return bI;}
,__ju:function(bJ,bK){var bN=[];var bL=this.__jn.length>0?this.__jn:qx.bom.webfonts.Manager.FONT_FORMATS;for(var i=0,l=bL.length;i<l;i++){var bM=bL[i];if(bK[bM]){bN.push(this.__jv(bM,bK[bM]));}
;}
;var bO=c+bN.join(d)+L;bO=V+bJ+v+bO;bO=bO+H;return bO;}
,__jv:function(bP,bQ){switch(bP){case B:return w+bQ+bd+z+bQ+F;case I:return w+bQ+s;case E:return w+bQ+N;case C:return w+bQ+p;default:return null;};}
,__jw:function(bR){var bT=P+bR+W;if(qx.core.Environment.get(M)==O&&qx.core.Environment.get(K)<9){var bS=this.__jy(this.__jo.cssText);bS+=bT;this.__jo.cssText=bS;}
else {this.__jo.insertRule(bT,this.__jo.cssRules.length);}
;}
,__jx:function(bU){var bX=new RegExp(u+bU,n);for(var i=0,l=document.styleSheets.length;i<l;i++){var bV=document.styleSheets[i];if(bV.cssText){var bW=bV.cssText.replace(/\n/g,y).replace(/\r/g,y);bW=this.__jy(bW);if(bX.exec(bW)){bW=bW.replace(bX,y);}
;bV.cssText=bW;}
else if(bV.cssRules){for(var j=0,m=bV.cssRules.length;j<m;j++){var bW=bV.cssRules[j].cssText.replace(/\n/g,y).replace(/\r/g,y);if(bX.exec(bW)){this.__jo.deleteRule(j);return;}
;}
;}
;}
;}
,__jy:function(bY){return bY.replace(a,Y).replace(A,t);}
},destruct:function(){delete this.__jl;this.removeStyleSheet();for(var ca in this.__jm){this.__jm[ca].dispose();}
;qx.bom.webfonts.Validator.removeDefaultHelperElements();}
});}
)();
(function(){var p="stylesheet",o="html.stylesheet.addimport",n="html.stylesheet.insertrule",m="}",l="html.stylesheet.createstylesheet",k='@import "',j="{",h='";',g="qx.bom.Stylesheet",f="link",c="style",e="head",d="text/css",b="html.stylesheet.removeimport",a="html.stylesheet.deleterule";qx.Bootstrap.define(g,{statics:{includeFile:function(q,r){if(!r){r=document;}
;var s=r.createElement(f);s.type=d;s.rel=p;s.href=q;var t=r.getElementsByTagName(e)[0];t.appendChild(s);}
,createElement:function(u){if(qx.core.Environment.get(l)){var v=document.createStyleSheet();if(u){v.cssText=u;}
;return v;}
else {var w=document.createElement(c);w.type=d;if(u){w.appendChild(document.createTextNode(u));}
;document.getElementsByTagName(e)[0].appendChild(w);return w.sheet;}
;}
,addRule:function(x,y,z){if(qx.core.Environment.get(n)){x.insertRule(y+j+z+m,x.cssRules.length);}
else {x.addRule(y,z);}
;}
,removeRule:function(A,B){if(qx.core.Environment.get(a)){var C=A.cssRules;var D=C.length;for(var i=D-1;i>=0;--i){if(C[i].selectorText==B){A.deleteRule(i);}
;}
;}
else {var C=A.rules;var D=C.length;for(var i=D-1;i>=0;--i){if(C[i].selectorText==B){A.removeRule(i);}
;}
;}
;}
,removeSheet:function(E){var F=E.ownerNode?E.ownerNode:E.owningElement;qx.dom.Element.removeChild(F,F.parentNode);}
,removeAllRules:function(G){if(qx.core.Environment.get(a)){var H=G.cssRules;var I=H.length;for(var i=I-1;i>=0;i--){G.deleteRule(i);}
;}
else {var H=G.rules;var I=H.length;for(var i=I-1;i>=0;i--){G.removeRule(i);}
;}
;}
,addImport:function(J,K){if(qx.core.Environment.get(o)){J.addImport(K);}
else {J.insertRule(k+K+h,J.cssRules.length);}
;}
,removeImport:function(L,M){if(qx.core.Environment.get(b)){var N=L.imports;var P=N.length;for(var i=P-1;i>=0;i--){if(N[i].href==M||N[i].href==qx.util.Uri.getAbsolute(M)){L.removeImport(i);}
;}
;}
else {var O=L.cssRules;var P=O.length;for(var i=P-1;i>=0;i--){if(O[i].href==M){L.deleteRule(i);}
;}
;}
;}
,removeAllImports:function(Q){if(qx.core.Environment.get(b)){var R=Q.imports;var T=R.length;for(var i=T-1;i>=0;i--){Q.removeImport(i);}
;}
else {var S=Q.cssRules;var T=S.length;for(var i=T-1;i>=0;i--){if(S[i].type==S[i].IMPORT_RULE){Q.deleteRule(i);}
;}
;}
;}
}});}
)();
(function(){var h="qx.bom.client.Stylesheet",g="html.stylesheet.deleterule",f="html.stylesheet.insertrule",e="html.stylesheet.createstylesheet",d="html.stylesheet.addimport",c="html.stylesheet.removeimport",b="function",a="object";qx.Bootstrap.define(h,{statics:{__jz:function(){if(!qx.bom.client.Stylesheet.__jA){qx.bom.client.Stylesheet.__jA=qx.bom.Stylesheet.createElement();}
;return qx.bom.client.Stylesheet.__jA;}
,getCreateStyleSheet:function(){return typeof document.createStyleSheet===a;}
,getInsertRule:function(){return typeof qx.bom.client.Stylesheet.__jz().insertRule===b;}
,getDeleteRule:function(){return typeof qx.bom.client.Stylesheet.__jz().deleteRule===b;}
,getAddImport:function(){return (typeof qx.bom.client.Stylesheet.__jz().addImport===a);}
,getRemoveImport:function(){return (typeof qx.bom.client.Stylesheet.__jz().removeImport===a);}
},defer:function(i){qx.core.Environment.add(e,i.getCreateStyleSheet);qx.core.Environment.add(f,i.getInsertRule);qx.core.Environment.add(g,i.getDeleteRule);qx.core.Environment.add(d,i.getAddImport);qx.core.Environment.add(c,i.getRemoveImport);}
});}
)();
(function(){var i="qx.event.type.Data",h="qx.bom.webfonts.Validator",g="_applyFontFamily",f="__jE",e="span",d="Integer",c="interval",b="changeStatus",a=",";qx.Class.define(h,{extend:qx.core.Object,construct:function(j){qx.core.Object.call(this);if(j){this.setFontFamily(j);}
;this.__jB=this._getRequestedHelpers();}
,statics:{COMPARISON_FONTS:{sans:["Arial","Helvetica","sans-serif"],serif:["Times New Roman","Georgia","serif"]},HELPER_CSS:{position:"absolute",margin:"0",padding:"0",top:"-1000px",left:"-1000px",fontSize:"350px",width:"auto",height:"auto",lineHeight:"normal",fontVariant:"normal"},COMPARISON_STRING:"WEei",__jC:null,__jD:null,removeDefaultHelperElements:function(){var k=qx.bom.webfonts.Validator.__jD;if(k){for(var l in k){document.body.removeChild(k[l]);}
;}
;delete qx.bom.webfonts.Validator.__jD;}
},properties:{fontFamily:{nullable:true,init:null,apply:g},timeout:{check:d,init:5000}},events:{"changeStatus":i},members:{__jB:null,__jE:null,__jF:null,validate:function(){this.__jF=new Date().getTime();if(this.__jE){this.__jE.restart();}
else {this.__jE=new qx.event.Timer(100);this.__jE.addListener(c,this.__jG,this);qx.event.Timer.once(function(){this.__jE.start();}
,this,0);}
;}
,_reset:function(){if(this.__jB){for(var n in this.__jB){var m=this.__jB[n];document.body.removeChild(m);}
;this.__jB=null;}
;}
,_isFontValid:function(){if(!qx.bom.webfonts.Validator.__jC){this.__bf();}
;if(!this.__jB){this.__jB=this._getRequestedHelpers();}
;var p=qx.bom.element.Dimension.getWidth(this.__jB.sans);var o=qx.bom.element.Dimension.getWidth(this.__jB.serif);var q=qx.bom.webfonts.Validator;if(p!==q.__jC.sans&&o!==q.__jC.serif){return true;}
;return false;}
,_getRequestedHelpers:function(){var r=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.sans);var s=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.serif);return {sans:this._getHelperElement(r),serif:this._getHelperElement(s)};}
,_getHelperElement:function(t){var u=qx.lang.Object.clone(qx.bom.webfonts.Validator.HELPER_CSS);if(t){if(u.fontFamily){u.fontFamily+=a+t.join(a);}
else {u.fontFamily=t.join(a);}
;}
;var v=document.createElement(e);v.innerHTML=qx.bom.webfonts.Validator.COMPARISON_STRING;qx.bom.element.Style.setStyles(v,u);document.body.appendChild(v);return v;}
,_applyFontFamily:function(w,x){if(w!==x){this._reset();}
;}
,__bf:function(){var y=qx.bom.webfonts.Validator;if(!y.__jD){y.__jD={sans:this._getHelperElement(y.COMPARISON_FONTS.sans),serif:this._getHelperElement(y.COMPARISON_FONTS.serif)};}
;y.__jC={sans:qx.bom.element.Dimension.getWidth(y.__jD.sans),serif:qx.bom.element.Dimension.getWidth(y.__jD.serif)};}
,__jG:function(){if(this._isFontValid()){this.__jE.stop();this._reset();this.fireDataEvent(b,{family:this.getFontFamily(),valid:true});}
else {var z=new Date().getTime();if(z-this.__jF>=this.getTimeout()){this.__jE.stop();this._reset();this.fireDataEvent(b,{family:this.getFontFamily(),valid:false});}
;}
;}
},destruct:function(){this._reset();this.__jE.stop();this.__jE.removeListener(c,this.__jG,this);this._disposeObjects(f);}
});}
)();
(function(){var j="qx.bom.element.Dimension",i="paddingRight",h="paddingLeft",g="opera",f="paddingBottom",e="paddingTop",d="mshtml",c="engine.version",b="0px",a="engine.name";qx.Bootstrap.define(j,{statics:{getWidth:qx.core.Environment.select(a,{"gecko":function(k){if(k.getBoundingClientRect){var l=k.getBoundingClientRect();return Math.round(l.right)-Math.round(l.left);}
else {return k.offsetWidth;}
;}
,"default":function(m){return m.offsetWidth;}
}),getHeight:qx.core.Environment.select(a,{"gecko":function(n){if(n.getBoundingClientRect){var o=n.getBoundingClientRect();return Math.round(o.bottom)-Math.round(o.top);}
else {return n.offsetHeight;}
;}
,"default":function(p){return p.offsetHeight;}
}),getSize:function(q){return {width:this.getWidth(q),height:this.getHeight(q)};}
,__jH:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;var t=qx.bom.element.Overflow.getX(r);var u=parseInt(s.get(r,h)||b,10);var x=parseInt(s.get(r,i)||b,10);if(this.__jH[t]){var w=r.clientWidth;if((qx.core.Environment.get(a)==g)||qx.dom.Node.isBlockNode(r)){w=w-u-x;}
;return w;}
else {if(r.clientWidth>=r.scrollWidth){return Math.max(r.clientWidth,r.scrollWidth)-u-x;}
else {var v=r.scrollWidth-u;if(qx.core.Environment.get(a)==d&&qx.core.Environment.get(c)>=6){v-=x;}
;return v;}
;}
;}
,getContentHeight:function(y){var z=qx.bom.element.Style;var C=qx.bom.element.Overflow.getY(y);var B=parseInt(z.get(y,e)||b,10);var A=parseInt(z.get(y,f)||b,10);if(this.__jH[C]){return y.clientHeight-B-A;}
else {if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-B-A;}
else {var D=y.scrollHeight-B;if(qx.core.Environment.get(a)==d&&qx.core.Environment.get(c)==6){D-=A;}
;return D;}
;}
;}
,getContentSize:function(E){return {width:this.getContentWidth(E),height:this.getContentHeight(E)};}
}});}
)();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();if(g){for(var h in g.aliases){i.remove(h);}
;}
;if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);}
;}
;}
}});}
)();
(function(){var m='Invalid include in theme "',k='The configuration key "',j="Mixin theme is not a valid theme!",h='" is not allowed!',g="You can only define one theme category per file! Invalid theme: ",f="other",e="Found base flag in entry '",d='Invalid patch in theme "',c="[Theme ",b="' of theme '",U='" is invalid: ',T='Invalid extend in theme "',S='Invalid type of key "',R='The key "',Q='"!',P="]",O='"! The value needs to be a map!',N='"! The type of the key must be "',M='The type of the key "',L="qx.Theme",t='The content of a meta theme must reference to other themes. The value for "',u='" inside the meta block is wrong.',r='"! The value is undefined/null!',s='" is not allowed inside a meta theme block.',p="'. Base flags are not allowed for themes without a valid super theme!",q="'!",n="fonts",o="appearances",v="icons",w="string",D="decorations",B="widgets",F="borders",E="' are not compatible '",H="The mixins '",G="colors",y='Invalid key "',K="meta",J='": ',I="undefined",x='" in theme "',z="Theme",A="qx.debug",C="object";qx.Bootstrap.define(L,{statics:{define:function(name,V){if(!V){var V={};}
;V.include=this.__rf(V.include);V.patch=this.__rf(V.patch);if(qx.core.Environment.get(A)){this.__d(name,V);}
;var W={$$type:z,name:name,title:V.title,toString:this.genericToString};if(V.extend){W.supertheme=V.extend;}
;W.basename=qx.Bootstrap.createNamespace(name,W);this.__ri(W,V);this.__rg(W,V);this.$$registry[name]=W;for(var i=0,a=V.include,l=a.length;i<l;i++){this.include(W,a[i]);}
;for(var i=0,a=V.patch,l=a.length;i<l;i++){this.patch(W,a[i]);}
;}
,__rf:function(X){if(!X){return [];}
;if(qx.Bootstrap.isArray(X)){return X;}
else {return [X];}
;}
,__rg:function(Y,ba){var bb=ba.aliases||{};if(ba.extend&&ba.extend.aliases){qx.Bootstrap.objectMergeWith(bb,ba.extend.aliases,false);}
;Y.aliases=bb;}
,getAll:function(){return this.$$registry;}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,genericToString:function(){return c+this.name+P;}
,__rh:function(bc){for(var i=0,bd=this.__rj,l=bd.length;i<l;i++){if(bc[bd[i]]){return bd[i];}
;}
;}
,__ri:function(be,bf){var bi=this.__rh(bf);if(bf.extend&&!bi){bi=bf.extend.type;}
;be.type=bi||f;var bk=function(){}
;if(bf.extend){bk.prototype=new bf.extend.$$clazz;}
;var bj=bk.prototype;var bh=bf[bi];for(var bg in bh){bj[bg]=bh[bg];if(bj[bg].base){if(qx.core.Environment.get(A)){if(!bf.extend){throw new Error(e+bg+b+bf.name+p);}
;}
;bj[bg].base=bf.extend;}
;}
;be.$$clazz=bk;be[bi]=new bk;}
,$$registry:{},__rj:[G,F,D,n,v,B,o,K],__c:qx.core.Environment.select(A,{"true":{"title":w,"aliases":C,"type":w,"extend":C,"colors":C,"borders":C,"decorations":C,"fonts":C,"icons":C,"widgets":C,"appearances":C,"meta":C,"include":C,"patch":C},"default":null}),__rk:qx.core.Environment.select(A,{"true":{"color":C,"border":C,"decoration":C,"font":C,"icon":C,"appearance":C,"widget":C},"default":null}),__d:qx.core.Environment.select(A,{"true":function(name,bl){var bq=this.__c;for(var bp in bl){if(bq[bp]===undefined){throw new Error(k+bp+x+name+h);}
;if(bl[bp]==null){throw new Error(y+bp+x+name+r);}
;if(bq[bp]!==null&&typeof bl[bp]!==bq[bp]){throw new Error(S+bp+x+name+N+bq[bp]+Q);}
;}
;var bo=[G,F,D,n,v,B,o,K];for(var i=0,l=bo.length;i<l;i++){var bp=bo[i];if(bl[bp]!==undefined&&(bl[bp] instanceof Array||bl[bp] instanceof RegExp||bl[bp] instanceof Date||bl[bp].classname!==undefined)){throw new Error(y+bp+x+name+O);}
;}
;var bm=0;for(var i=0,l=bo.length;i<l;i++){var bp=bo[i];if(bl[bp]){bm++;}
;if(bm>1){throw new Error(g+name);}
;}
;if(bl.meta){var bn;for(var bp in bl.meta){bn=bl.meta[bp];if(this.__rk[bp]===undefined){throw new Error(R+bp+s);}
;if(typeof bn!==this.__rk[bp]){throw new Error(M+bp+u);}
;if(!(typeof bn===C&&bn!==null&&bn.$$type===z)){throw new Error(t+bp+x+name+U+bn);}
;}
;}
;if(bl.extend&&bl.extend.$$type!==z){throw new Error(T+name+J+bl.extend);}
;if(bl.include){for(var i=0,l=bl.include.length;i<l;i++){if(typeof (bl.include[i])==I||bl.include[i].$$type!==z){throw new Error(m+name+J+bl.include[i]);}
;}
;}
;if(bl.patch){for(var i=0,l=bl.patch.length;i<l;i++){if(typeof (bl.patch[i])==I||bl.patch[i].$$type!==z){throw new Error(d+name+J+bl.patch[i]);}
;}
;}
;}
,"default":function(){}
}),patch:function(br,bs){this.__rl(bs);var bu=this.__rh(bs);if(bu!==this.__rh(br)){throw new Error(H+br.name+E+bs.name+q);}
;var bt=bs[bu];var bv=br.$$clazz.prototype;for(var bw in bt){bv[bw]=bt[bw];}
;}
,include:function(bx,by){this.__rl(by);var bA=by.type;if(bA!==bx.type){throw new Error(H+bx.name+E+by.name+q);}
;var bz=by[bA];var bB=bx.$$clazz.prototype;for(var bC in bz){if(bB[bC]!==undefined){continue;}
;bB[bC]=bz[bC];}
;}
,__rl:function(bD){if(typeof bD===I||bD==null){var bE=new Error(j);if(qx.core.Environment.get(A)){var bF=qx.dev.StackTrace.getStackTraceFromError(bE);qx.Bootstrap.error(this,bF);}
;throw bE;}
;}
}});}
)();
(function(){var q="widget",p="__ro",o="qx.ui.tooltip.ToolTip",n="",m="__rp",l="__rr",k="_applyCurrent",j="qx.ui.tooltip.Manager",i="tooltip-error",h="singleton",c="Boolean",g="interval",f="mouseover",b="mouseout",a="mousemove",d="focusout";qx.Class.define(j,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);qx.event.Registration.addListener(document.body,f,this.__rw,this,true);this.__ro=new qx.event.Timer();this.__ro.addListener(g,this.__rt,this);this.__rp=new qx.event.Timer();this.__rp.addListener(g,this.__ru,this);this.__rq={left:0,top:0};}
,properties:{current:{check:o,nullable:true,apply:k},showInvalidToolTips:{check:c,init:true},showToolTips:{check:c,init:true}},members:{__rq:null,__rp:null,__ro:null,__rr:null,__rs:null,getSharedTooltip:function(){if(!this.__rr){this.__rr=new qx.ui.tooltip.ToolTip().set({rich:true});}
;return this.__rr;}
,getSharedErrorTooltip:function(){if(!this.__rs){this.__rs=new qx.ui.tooltip.ToolTip().set({appearance:i,rich:true});this.__rs.setLabel(n);this.__rs.syncAppearance();}
;return this.__rs;}
,_applyCurrent:function(r,s){if(s&&qx.ui.core.Widget.contains(s,r)){return;}
;if(s){if(!s.isDisposed()){s.exclude();}
;this.__ro.stop();this.__rp.stop();}
;var u=qx.event.Registration;var t=document.body;if(r){this.__ro.startWith(r.getShowTimeout());u.addListener(t,b,this.__rx,this,true);u.addListener(t,d,this.__ry,this,true);u.addListener(t,a,this.__rv,this,true);}
else {u.removeListener(t,b,this.__rx,this,true);u.removeListener(t,d,this.__ry,this,true);u.removeListener(t,a,this.__rv,this,true);}
;}
,__rt:function(e){var v=this.getCurrent();if(v&&!v.isDisposed()){this.__rp.startWith(v.getHideTimeout());if(v.getPlaceMethod()==q){v.placeToWidget(v.getOpener());}
else {v.placeToPoint(this.__rq);}
;v.show();}
;this.__ro.stop();}
,__ru:function(e){var w=this.getCurrent();if(w&&!w.isDisposed()){w.exclude();}
;this.__rp.stop();this.resetCurrent();}
,__rv:function(e){var x=this.__rq;x.left=e.getDocumentLeft();x.top=e.getDocumentTop();}
,__rw:function(e){var y=qx.ui.core.Widget.getWidgetByElement(e.getTarget());this.showToolTip(y);}
,showToolTip:function(z){if(!z){return;}
;var C,D,B,A;while(z!=null){C=z.getToolTip();D=z.getToolTipText()||null;B=z.getToolTipIcon()||null;if(qx.Class.hasInterface(z.constructor,qx.ui.form.IForm)&&!z.isValid()){A=z.getInvalidMessage();}
;if(C||D||B||A){break;}
;z=z.getLayoutParent();}
;if(!z||!z.getEnabled()||z.isBlockToolTip()||(!A&&!this.getShowToolTips())||(A&&!this.getShowInvalidToolTips())){return;}
;if(A){C=this.getSharedErrorTooltip().set({label:A});}
;if(!C){C=this.getSharedTooltip().set({label:D,icon:B});}
;this.setCurrent(C);C.setOpener(z);}
,__rx:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());if(!E){return;}
;var F=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());if(!F){return;}
;var G=this.getCurrent();if(G&&(F==G||qx.ui.core.Widget.contains(G,F))){return;}
;if(F&&E&&qx.ui.core.Widget.contains(E,F)){return;}
;if(G&&!F){this.setCurrent(null);}
else {this.resetCurrent();}
;}
,__ry:function(e){var H=qx.ui.core.Widget.getWidgetByElement(e.getTarget());if(!H){return;}
;var I=this.getCurrent();if(I&&I==H.getToolTip()){this.setCurrent(null);}
;}
},destruct:function(){qx.event.Registration.removeListener(document.body,f,this.__rw,this,true);this._disposeObjects(p,m,l);this.__rq=null;}
});}
)();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);this.initVisibility();}
,properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{show:function(){if(this.getLayoutParent()==null){qx.core.Init.getApplication().getRoot().add(this);}
;qx.ui.container.Composite.prototype.show.call(this);}
,_applyVisibility:function(g,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,g,h);var i=qx.ui.popup.Manager.getInstance();g===d?i.add(this):i.remove(this);}
},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);}
});}
)();
(function(){var h="blur",g="qx.ui.popup.Manager",f="__nC",d="singleton",c="mousedown",b="qx.debug",a="Object is no popup: ";qx.Class.define(g,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__nC=[];qx.event.Registration.addListener(document.documentElement,c,this.__nE,this,true);qx.bom.Element.addListener(window,h,this.hideAll,this);}
,members:{__nC:null,add:function(j){if(qx.core.Environment.get(b)){if(!(j instanceof qx.ui.popup.Popup)){throw new Error(a+j);}
;}
;this.__nC.push(j);this.__nD();}
,remove:function(k){if(qx.core.Environment.get(b)){if(!(k instanceof qx.ui.popup.Popup)){throw new Error(a+k);}
;}
;if(this.__nC){qx.lang.Array.remove(this.__nC,k);this.__nD();}
;}
,hideAll:function(){var m;var n=this.__nC;if(n){for(var i=0,l=n.length;i<l;i++){var m=n[i];m.getAutoHide()&&m.exclude();}
;}
;}
,__nD:function(){var o=1e7;for(var i=0;i<this.__nC.length;i++){this.__nC[i].setZIndex(o++);}
;}
,__nE:function(e){var q=qx.ui.core.Widget.getWidgetByElement(e.getTarget());var r=this.__nC;for(var i=0;i<r.length;i++){var p=r[i];if(!p.getAutoHide()||q==p||qx.ui.core.Widget.contains(p,q)){continue;}
;p.exclude();}
;}
},destruct:function(){qx.event.Registration.removeListener(document.documentElement,c,this.__nE,this,true);this._disposeArray(f);}
});}
)();
(function(){var l="_applyRich",k="qx.ui.tooltip.ToolTip",j="_applyIcon",i="tooltip",h="qx.ui.core.Widget",g="mouseover",f="Boolean",d="_applyLabel",c="Integer",b="String",a="atom";qx.Class.define(k,{extend:qx.ui.popup.Popup,construct:function(m,n){qx.ui.popup.Popup.call(this);this.setLayout(new qx.ui.layout.Grow);this._createChildControl(a);if(m!=null){this.setLabel(m);}
;if(n!=null){this.setIcon(n);}
;this.addListener(g,this._onMouseOver,this);}
,properties:{appearance:{refine:true,init:i},showTimeout:{check:c,init:700,themeable:true},hideTimeout:{check:c,init:4000,themeable:true},label:{check:b,nullable:true,apply:d},icon:{check:b,nullable:true,apply:j,themeable:true},rich:{check:f,init:false,apply:l},opener:{check:h,nullable:true}},members:{_createChildControlImpl:function(o,p){var q;switch(o){case a:q=new qx.ui.basic.Atom;this._add(q);break;};return q||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,o);}
,_onMouseOver:function(e){this.hide();}
,_applyIcon:function(r,s){var t=this.getChildControl(a);r==null?t.resetIcon():t.setIcon(r);}
,_applyLabel:function(u,v){var w=this.getChildControl(a);u==null?w.resetLabel():w.setLabel(u);}
,_applyRich:function(x,y){var z=this.getChildControl(a);z.setRich(x);}
}});}
)();
(function(){var d="' is not supported by the Grow layout!",c="qx.ui.layout.Grow",b="qx.debug",a="The property '";qx.Class.define(c,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Environment.select(b,{"true":function(e,name,f){this.assert(false,a+name+d);}
,"false":null}),renderLayout:function(g,h){var n=this._getLayoutChildren();var m,o,k,j;for(var i=0,l=n.length;i<l;i++){m=n[i];o=m.getSizeHint();k=g;if(k<o.minWidth){k=o.minWidth;}
else if(k>o.maxWidth){k=o.maxWidth;}
;j=h;if(j<o.minHeight){j=o.minHeight;}
else if(j>o.maxHeight){j=o.maxHeight;}
;m.renderLayout(0,0,k,j);}
;}
,_computeSizeHint:function(){var v=this._getLayoutChildren();var t,x;var w=0,u=0;var s=0,q=0;var p=Infinity,r=Infinity;for(var i=0,l=v.length;i<l;i++){t=v[i];x=t.getSizeHint();w=Math.max(w,x.width);u=Math.max(u,x.height);s=Math.max(s,x.minWidth);q=Math.max(q,x.minHeight);p=Math.min(p,x.maxWidth);r=Math.min(r,x.maxHeight);}
;return {width:w,height:u,minWidth:s,minHeight:q,maxWidth:p,maxHeight:r};}
}});}
)();
(function(){var j="changeGap",i="changeShow",h="bottom",g="_applyCenter",f="changeIcon",e="qx.ui.basic.Atom",d="changeLabel",c="Integer",b="_applyIconPosition",a="qx.debug",z="bottom-left",y="top-left",x="top",w="right",v="_applyRich",u="_applyIcon",t="_applyShow",s="_applyLabel",r="_applyGap",q="atom",o="Boolean",p="both",m="String",n="left",k="icon",l="label";qx.Class.define(e,{extend:qx.ui.core.Widget,construct:function(A,B){if(qx.core.Environment.get(a)){this.assertArgumentsCount(arguments,0,2);}
;qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.Atom());if(A!=null){this.setLabel(A);}
;if(B!=null){this.setIcon(B);}
;}
,properties:{appearance:{refine:true,init:q},label:{apply:s,nullable:true,check:m,event:d},rich:{check:o,init:false,apply:v},icon:{check:m,apply:u,nullable:true,themeable:true,event:f},gap:{check:c,nullable:false,event:j,apply:r,themeable:true,init:4},show:{init:p,check:[p,l,k],themeable:true,inheritable:true,apply:t,event:i},iconPosition:{init:n,check:[x,w,h,n,y,z],themeable:true,apply:b},center:{init:false,check:o,themeable:true,apply:g}},members:{_createChildControlImpl:function(C,D){var E;switch(C){case l:E=new qx.ui.basic.Label(this.getLabel());E.setAnonymous(true);E.setRich(this.getRich());this._add(E);if(this.getLabel()==null||this.getShow()===k){E.exclude();}
;break;case k:E=new qx.ui.basic.Image(this.getIcon());E.setAnonymous(true);this._addAt(E,0);if(this.getIcon()==null||this.getShow()===l){E.exclude();}
;break;};return E||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,C);}
,_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===k){this._excludeChildControl(l);}
else {this._showChildControl(l);}
;}
,_handleIcon:function(){if(this.getIcon()==null||this.getShow()===l){this._excludeChildControl(k);}
else {this._showChildControl(k);}
;}
,_applyLabel:function(F,G){var H=this.getChildControl(l,true);if(H){H.setValue(F);}
;this._handleLabel();}
,_applyRich:function(I,J){var K=this.getChildControl(l,true);if(K){K.setRich(I);}
;}
,_applyIcon:function(L,M){var N=this.getChildControl(k,true);if(N){N.setSource(L);}
;this._handleIcon();}
,_applyGap:function(O,P){this._getLayout().setGap(O);}
,_applyShow:function(Q,R){this._handleLabel();this._handleIcon();}
,_applyIconPosition:function(S,T){this._getLayout().setIconPosition(S);}
,_applyCenter:function(U,V){this._getLayout().setCenter(U);}
,_applySelectable:function(W,X){qx.ui.core.Widget.prototype._applySelectable.call(this,W,X);var Y=this.getChildControl(l,true);if(Y){this.getChildControl(l).setSelectable(W);}
;}
}});}
)();
(function(){var p="middle",o="' is not supported by the Atom layout!",n="qx.debug",m="center",l="qx.ui.layout.Atom",k="Integer",j="The property '",h="Boolean",g="top-left",f="bottom-left",c="left",e="right",d="_applyLayoutChange",b="top",a="bottom";qx.Class.define(l,{extend:qx.ui.layout.Abstract,properties:{gap:{check:k,init:4,apply:d},iconPosition:{check:[c,b,e,a,g,f],init:c,apply:d},center:{check:h,init:false,apply:d}},members:{verifyLayoutProperty:qx.core.Environment.select(n,{"true":function(q,name,r){this.assert(false,j+name+o);}
,"false":null}),renderLayout:function(s,t){var C=qx.ui.layout.Util;var v=this.getIconPosition();var y=this._getLayoutChildren();var length=y.length;var N,top,D,w;var I,B;var G=this.getGap();var L=this.getCenter();if(v===a||v===e){var E=length-1;var z=-1;var x=-1;}
else {var E=0;var z=length;var x=1;}
;if(v==b||v==a){if(L){var H=0;for(var i=E;i!=z;i+=x){w=y[i].getSizeHint().height;if(w>0){H+=w;if(i!=E){H+=G;}
;}
;}
;top=Math.round((t-H)/2);}
else {top=0;}
;for(var i=E;i!=z;i+=x){I=y[i];B=I.getSizeHint();D=Math.min(B.maxWidth,Math.max(s,B.minWidth));w=B.height;N=C.computeHorizontalAlignOffset(m,D,s);I.renderLayout(N,top,D,w);if(w>0){top+=w+G;}
;}
;}
else {var A=s;var u=null;var K=0;for(var i=E;i!=z;i+=x){I=y[i];D=I.getSizeHint().width;if(D>0){if(!u&&I instanceof qx.ui.basic.Label){u=I;}
else {A-=D;}
;K++;}
;}
;if(K>1){var J=(K-1)*G;A-=J;}
;if(u){var B=u.getSizeHint();var F=Math.max(B.minWidth,Math.min(A,B.maxWidth));A-=F;}
;if(L&&A>0){N=Math.round(A/2);}
else {N=0;}
;for(var i=E;i!=z;i+=x){I=y[i];B=I.getSizeHint();w=Math.min(B.maxHeight,Math.max(t,B.minHeight));if(I===u){D=F;}
else {D=B.width;}
;var M=p;if(v==g){M=b;}
else if(v==f){M=a;}
;top=C.computeVerticalAlignOffset(M,B.height,t);I.renderLayout(N,top,D,w);if(D>0){N+=D+G;}
;}
;}
;}
,_computeSizeHint:function(){var Y=this._getLayoutChildren();var length=Y.length;var Q,W;if(length===1){var Q=Y[0].getSizeHint();W={width:Q.width,height:Q.height,minWidth:Q.minWidth,minHeight:Q.minHeight};}
else {var U=0,V=0;var R=0,T=0;var S=this.getIconPosition();var X=this.getGap();if(S===b||S===a){var O=0;for(var i=0;i<length;i++){Q=Y[i].getSizeHint();V=Math.max(V,Q.width);U=Math.max(U,Q.minWidth);if(Q.height>0){T+=Q.height;R+=Q.minHeight;O++;}
;}
;if(O>1){var P=(O-1)*X;T+=P;R+=P;}
;}
else {var O=0;for(var i=0;i<length;i++){Q=Y[i].getSizeHint();T=Math.max(T,Q.height);R=Math.max(R,Q.minHeight);if(Q.width>0){V+=Q.width;U+=Q.minWidth;O++;}
;}
;if(O>1){var P=(O-1)*X;V+=P;U+=P;}
;}
;W={minWidth:U,width:V,minHeight:R,height:T};}
;return W;}
}});}
)();
(function(){var g="middle",f="qx.ui.layout.Util",e="left",d="center",c="top",b="bottom",a="right";qx.Class.define(f,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(h,j,k){var n,r,m,s;var o=j>k;var t=Math.abs(j-k);var u,p;var q={};for(r in h){n=h[r];q[r]={potential:o?n.max-n.value:n.value-n.min,flex:o?n.flex:1/n.flex,offset:0};}
;while(t!=0){s=Infinity;m=0;for(r in q){n=q[r];if(n.potential>0){m+=n.flex;s=Math.min(s,n.potential/n.flex);}
;}
;if(m==0){break;}
;s=Math.min(t,s*m)/m;u=0;for(r in q){n=q[r];if(n.potential>0){p=Math.min(t,n.potential,Math.ceil(s*n.flex));u+=p-s*n.flex;if(u>=1){u-=1;p-=1;}
;n.potential-=p;if(o){n.offset+=p;}
else {n.offset-=p;}
;t-=p;}
;}
;}
;return q;}
,computeHorizontalAlignOffset:function(v,w,x,y,z){if(y==null){y=0;}
;if(z==null){z=0;}
;var A=0;switch(v){case e:A=y;break;case a:A=x-w-z;break;case d:A=Math.round((x-w)/2);if(A<y){A=y;}
else if(A<z){A=Math.max(y,x-w-z);}
;break;};return A;}
,computeVerticalAlignOffset:function(B,C,D,E,F){if(E==null){E=0;}
;if(F==null){F=0;}
;var G=0;switch(B){case c:G=E;break;case b:G=D-C-F;break;case g:G=Math.round((D-C)/2);if(G<E){G=E;}
else if(G<F){G=Math.max(E,D-C-F);}
;break;};return G;}
,collapseMargins:function(H){var I=0,K=0;for(var i=0,l=arguments.length;i<l;i++){var J=arguments[i];if(J<0){K=Math.min(K,J);}
else if(J>0){I=Math.max(I,J);}
;}
;return I+K;}
,computeHorizontalGaps:function(L,M,N){if(M==null){M=0;}
;var O=0;if(N){O+=L[0].getMarginLeft();for(var i=1,l=L.length;i<l;i+=1){O+=this.collapseMargins(M,L[i-1].getMarginRight(),L[i].getMarginLeft());}
;O+=L[l-1].getMarginRight();}
else {for(var i=1,l=L.length;i<l;i+=1){O+=L[i].getMarginLeft()+L[i].getMarginRight();}
;O+=(M*(l-1));}
;return O;}
,computeVerticalGaps:function(P,Q,R){if(Q==null){Q=0;}
;var S=0;if(R){S+=P[0].getMarginTop();for(var i=1,l=P.length;i<l;i+=1){S+=this.collapseMargins(Q,P[i-1].getMarginBottom(),P[i].getMarginTop());}
;S+=P[l-1].getMarginBottom();}
else {for(var i=1,l=P.length;i<l;i+=1){S+=P[i].getMarginTop()+P[i].getMarginBottom();}
;S+=(Q*(l-1));}
;return S;}
,computeHorizontalSeparatorGaps:function(T,U,V){var Y=qx.theme.manager.Decoration.getInstance().resolve(V);var X=Y.getInsets();var W=X.left+X.right;var ba=0;for(var i=0,l=T.length;i<l;i++){var bb=T[i];ba+=bb.getMarginLeft()+bb.getMarginRight();}
;ba+=(U+W+U)*(l-1);return ba;}
,computeVerticalSeparatorGaps:function(bc,bd,be){var bh=qx.theme.manager.Decoration.getInstance().resolve(be);var bg=bh.getInsets();var bf=bg.top+bg.bottom;var bi=0;for(var i=0,l=bc.length;i<l;i++){var bj=bc[i];bi+=bj.getMarginTop()+bj.getMarginBottom();}
;bi+=(bd+bf+bd)*(l-1);return bi;}
,arrangeIdeals:function(bk,bl,bm,bn,bo,bp){if(bl<bk||bo<bn){if(bl<bk&&bo<bn){bl=bk;bo=bn;}
else if(bl<bk){bo-=(bk-bl);bl=bk;if(bo<bn){bo=bn;}
;}
else if(bo<bn){bl-=(bn-bo);bo=bn;if(bl<bk){bl=bk;}
;}
;;}
;if(bl>bm||bo>bp){if(bl>bm&&bo>bp){bl=bm;bo=bp;}
else if(bl>bm){bo+=(bl-bm);bl=bm;if(bo>bp){bo=bp;}
;}
else if(bo>bp){bl+=(bo-bp);bo=bp;if(bl>bm){bl=bm;}
;}
;;}
;return {begin:bl,end:bo};}
}});}
)();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;}
,resetValue:function(){}
,getValue:function(){}
}});}
)();
(function(){var k="os.name",j="_applyTextAlign",i="qx.ui.core.Widget",h="nowrap",g="changeStatus",f="changeTextAlign",d="_applyWrap",c="changeValue",b="qx.ui.basic.Label",a="osx",M="css.textoverflow",L="textAlign",K="html.xul",J="_applyValue",I="center",H="Only rich labels support wrap.",G="_applyBuddy",F="String",E="whiteSpace",D="Only rich labels are selectable in browsers with Gecko engine!",r="right",s="gecko",p="justify",q="changeRich",n="normal",o="_applyRich",l="engine.name",m="click",t="label",u="left",x="A",w="Boolean",z="qx.debug",y="enabled",B="engine.version",A="changeLocale",v="color",C="qx.dynlocale";qx.Class.define(b,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(N){qx.ui.core.Widget.call(this);if(N!=null){this.setValue(N);}
;if(qx.core.Environment.get(C)){qx.locale.Manager.getInstance().addListener(A,this._onChangeLocale,this);}
;}
,properties:{rich:{check:w,init:false,event:q,apply:o},wrap:{check:w,init:true,apply:d},value:{check:F,apply:J,event:c,nullable:true},buddy:{check:i,apply:G,nullable:true,init:null,dereference:true},textAlign:{check:[u,I,r,p],nullable:true,themeable:true,apply:j,event:f},appearance:{refine:true,init:t},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__ly:null,__lz:null,__lA:null,__lB:null,__lC:null,_getContentHint:function(){if(this.__lz){this.__lD=this.__lE();delete this.__lz;}
;return {width:this.__lD.width,height:this.__lD.height};}
,_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();}
,_applySelectable:function(O){if(!qx.core.Environment.get(M)&&qx.core.Environment.get(K)){if(O&&!this.isRich()){if(qx.core.Environment.get(z)){this.warn(D);}
;return;}
;}
;qx.ui.core.Widget.prototype._applySelectable.call(this,O);}
,_getContentHeightForWidth:function(P){if(!this.getRich()&&!this.getWrap()){return null;}
;return this.__lE(P).height;}
,_createContentElement:function(){return new qx.html.Label;}
,_applyTextAlign:function(Q,R){this.getContentElement().setStyle(L,Q);}
,_applyTextColor:function(S,T){if(S){this.getContentElement().setStyle(v,qx.theme.manager.Color.getInstance().resolve(S));}
else {this.getContentElement().removeStyle(v);}
;}
,__lD:{width:0,height:0},_applyFont:function(U,V){if(V&&this.__ly&&this.__lC){this.__ly.removeListenerById(this.__lC);this.__lC=null;}
;var W;if(U){this.__ly=qx.theme.manager.Font.getInstance().resolve(U);if(this.__ly instanceof qx.bom.webfonts.WebFont){this.__lC=this.__ly.addListener(g,this._onWebFontStatusChange,this);}
;W=this.__ly.getStyles();}
else {this.__ly=null;W=qx.bom.Font.getDefaultStyles();}
;if(this.getTextColor()!=null){delete W[v];}
;this.getContentElement().setStyles(W);this.__lz=true;qx.ui.core.queue.Layout.add(this);}
,__lE:function(X){var bc=qx.bom.Label;var ba=this.getFont();var Y=ba?this.__ly.getStyles():qx.bom.Font.getDefaultStyles();var content=this.getValue()||x;var bb=this.getRich();if(this.__lC){this.__lF();}
;return bb?bc.getHtmlSize(content,Y,X):bc.getTextSize(content,Y);}
,__lF:function(){if(!this.getContentElement()){return;}
;if(qx.core.Environment.get(k)==a&&qx.core.Environment.get(l)==s&&parseInt(qx.core.Environment.get(B),10)<16&&parseInt(qx.core.Environment.get(B),10)>9){var bd=this.getContentElement().getDomElement();if(bd){bd.innerHTML=bd.innerHTML;}
;}
;}
,_applyBuddy:function(be,bf){if(bf!=null){bf.removeBinding(this.__lA);this.__lA=null;this.removeListenerById(this.__lB);this.__lB=null;}
;if(be!=null){this.__lA=be.bind(y,this,y);this.__lB=this.addListener(m,function(){if(be.isFocusable()){be.focus.apply(be);}
;}
,this);}
;}
,_applyRich:function(bg){this.getContentElement().setRich(bg);this.__lz=true;qx.ui.core.queue.Layout.add(this);}
,_applyWrap:function(bh,bi){if(bh&&!this.isRich()){if(qx.core.Environment.get(z)){this.warn(H);}
;}
;if(this.isRich()){var bj=bh?n:h;this.getContentElement().setStyle(E,bj);}
;}
,_onChangeLocale:qx.core.Environment.select(C,{"true":function(e){var content=this.getValue();if(content&&content.translate){this.setValue(content.translate());}
;}
,"false":null}),_onWebFontStatusChange:function(bk){if(bk.getData().valid===true){this.__lz=true;qx.ui.core.queue.Layout.add(this);}
;}
,_applyValue:function(bl,bm){this.getContentElement().setValue(bl);this.__lz=true;qx.ui.core.queue.Layout.add(this);}
},destruct:function(){if(qx.core.Environment.get(C)){qx.locale.Manager.getInstance().removeListener(A,this._onChangeLocale,this);}
;if(this.__lA!=null){var bn=this.getBuddy();if(bn!=null&&!bn.isDisposed()){bn.removeBinding(this.__lA);}
;}
;if(this.__ly&&this.__lC){this.__ly.removeListenerById(this.__lC);}
;this.__ly=this.__lA=null;}
});}
)();
(function(){var c="qx.html.Label",b="The label mode cannot be modified after initial creation",a="value";qx.Class.define(c,{extend:qx.html.Element,members:{__lG:null,_applyProperty:function(name,d){qx.html.Element.prototype._applyProperty.call(this,name,d);if(name==a){var e=this.getDomElement();qx.bom.Label.setValue(e,d);}
;}
,_createDomElement:function(){var g=this.__lG;var f=qx.bom.Label.create(this._content,g);return f;}
,_copyData:function(h){return qx.html.Element.prototype._copyData.call(this,true);}
,setRich:function(i){var j=this.getDomElement();if(j){throw new Error(b);}
;i=!!i;if(this.__lG==i){return;}
;this.__lG=i;return this;}
,setValue:function(k){this._setProperty(a,k);return this;}
,getValue:function(){return this._getProperty(a);}
}});}
)();
(function(){var j="px",i="crop",h="gecko",g="end",f="100%",e="chrome",d="visible",c="qx.bom.Label",b="safari",a="ellipsis",F="engine.version",E="mshtml",D="-1000px",C="absolute",B="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",A="nowrap",z="div",y="browser.name",x="browser.version",w="normal",q="engine.name",r="block",o="label",p="text",m="value",n="",k="hidden",l="auto",s="0",t="inherit",v="html.xul",u="css.textoverflow";qx.Bootstrap.define(c,{statics:{__lH:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__lI:function(){var G=this.__lK(false);document.body.insertBefore(G,document.body.firstChild);return this._textElement=G;}
,__lJ:function(){var H=this.__lK(true);document.body.insertBefore(H,document.body.firstChild);return this._htmlElement=H;}
,__lK:function(I){var J=qx.dom.Element.create(z);var K=J.style;K.width=K.height=l;K.left=K.top=D;K.visibility=k;K.position=C;K.overflow=d;K.display=r;if(I){K.whiteSpace=w;}
else {K.whiteSpace=A;if(!qx.core.Environment.get(u)&&qx.core.Environment.get(v)){var L=document.createElementNS(B,o);var K=L.style;K.padding=s;K.margin=s;K.width=l;for(var M in this.__lH){K[M]=t;}
;J.appendChild(L);}
;}
;return J;}
,__lL:function(N){var O={};if(N){O.whiteSpace=w;}
else if(!qx.core.Environment.get(u)&&qx.core.Environment.get(v)){O.display=r;}
else {O.overflow=k;O.whiteSpace=A;O[qx.core.Environment.get(u)]=a;}
;return O;}
,create:function(content,P,Q){if(!Q){Q=window;}
;var R=Q.document.createElement(z);if(P){R.useHtml=true;}
else if(!qx.core.Environment.get(u)&&qx.core.Environment.get(v)){var T=Q.document.createElementNS(B,o);var S=T.style;S.cursor=t;S.color=t;S.overflow=k;S.maxWidth=f;S.padding=s;S.margin=s;S.width=l;for(var U in this.__lH){T.style[U]=t;}
;T.setAttribute(i,g);R.appendChild(T);}
else {qx.bom.element.Style.setStyles(R,this.__lL(P));}
;if(content){this.setValue(R,content);}
;return R;}
,setValue:function(V,W){W=W||n;if(V.useHtml){V.innerHTML=W;}
else if(!qx.core.Environment.get(u)&&qx.core.Environment.get(v)){V.firstChild.setAttribute(m,W);}
else {qx.bom.element.Attribute.set(V,p,W);}
;}
,getValue:function(X){if(X.useHtml){return X.innerHTML;}
else if(!qx.core.Environment.get(u)&&qx.core.Environment.get(v)){return X.firstChild.getAttribute(m)||n;}
else {return qx.bom.element.Attribute.get(X,p);}
;}
,getHtmlSize:function(content,Y,ba){var bb=this._htmlElement||this.__lJ();bb.style.width=ba!=undefined?ba+j:l;bb.innerHTML=content;return this.__lM(bb,Y);}
,getTextSize:function(bc,bd){var be=this._textElement||this.__lI();if(!qx.core.Environment.get(u)&&qx.core.Environment.get(v)){be.firstChild.setAttribute(m,bc);}
else {qx.bom.element.Attribute.set(be,p,bc);}
;return this.__lM(be,bd);}
,__lM:function(bf,bg){var bh=this.__lH;if(!bg){bg={};}
;for(var bi in bh){bf.style[bi]=bg[bi]||n;}
;var bj=qx.bom.element.Dimension.getSize(bf);if((qx.core.Environment.get(q)==h)){bj.width++;}
;if((qx.core.Environment.get(q)==E)&&parseFloat(qx.core.Environment.get(F))>=9){bj.width++;}
;if(qx.core.Environment.get(y)==e&&parseFloat(qx.core.Environment.get(x))>=22){bj.width++;}
;if(qx.core.Environment.get(y)==b&&parseFloat(qx.core.Environment.get(x))>=6){bj.width++;}
;return bj;}
}});}
)();
(function(){var b="qx.ui.form.IForm",a="qx.event.type.Data";qx.Interface.define(b,{events:{"changeEnabled":a,"changeValid":a,"changeInvalidMessage":a,"changeRequired":a},members:{setEnabled:function(c){return arguments.length==1;}
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
(function(){var i="_applyActiveWindow",h="__ka",g="qx.ui.window.MDesktop",f="__dB",d="changeModal",c="changeVisibility",b="changeActive",a="qx.ui.window.Window";qx.Mixin.define(g,{properties:{activeWindow:{check:a,apply:i,init:null,nullable:true}},members:{__ka:null,__dB:null,getWindowManager:function(){if(!this.__dB){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());}
;return this.__dB;}
,supportsMaximize:function(){return true;}
,setWindowManager:function(j){if(this.__dB){this.__dB.setDesktop(null);}
;j.setDesktop(this);this.__dB=j;}
,_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());}
else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);}
;}
,_applyActiveWindow:function(k,l){this.getWindowManager().changeActiveWindow(k,l);this.getWindowManager().updateStack();}
,_onChangeModal:function(e){this.getWindowManager().updateStack();}
,_onChangeVisibility:function(){this.getWindowManager().updateStack();}
,_afterAddChild:function(m){if(qx.Class.isDefined(a)&&m instanceof qx.ui.window.Window){this._addWindow(m);}
;}
,_addWindow:function(n){if(!qx.lang.Array.contains(this.getWindows(),n)){this.getWindows().push(n);n.addListener(b,this._onChangeActive,this);n.addListener(d,this._onChangeModal,this);n.addListener(c,this._onChangeVisibility,this);}
;if(n.getActive()){this.setActiveWindow(n);}
;this.getWindowManager().updateStack();}
,_afterRemoveChild:function(o){if(qx.Class.isDefined(a)&&o instanceof qx.ui.window.Window){this._removeWindow(o);}
;}
,_removeWindow:function(p){qx.lang.Array.remove(this.getWindows(),p);p.removeListener(b,this._onChangeActive,this);p.removeListener(d,this._onChangeModal,this);p.removeListener(c,this._onChangeVisibility,this);this.getWindowManager().updateStack();}
,getWindows:function(){if(!this.__ka){this.__ka=[];}
;return this.__ka;}
},destruct:function(){this._disposeArray(h);this._disposeObjects(f);}
});}
)();
(function(){var f="_applyBlockerColor",e="Number",d="qx.ui.core.MBlocker",c="_applyBlockerOpacity",b="Color",a="__jK";qx.Mixin.define(d,{construct:function(){this.__jK=this._createBlocker();}
,properties:{blockerColor:{check:b,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:c,themeable:true}},members:{__jK:null,_createBlocker:function(){return new qx.ui.core.Blocker(this);}
,_applyBlockerColor:function(g,h){this.__jK.setColor(g);}
,_applyBlockerOpacity:function(i,j){this.__jK.setOpacity(i);}
,block:function(){this.__jK.block();}
,isBlocked:function(){return this.__jK.isBlocked();}
,unblock:function(){this.__jK.unblock();}
,forceUnblock:function(){this.__jK.forceUnblock();}
,blockContent:function(k){this.__jK.blockContent(k);}
,isContentBlocked:function(){return this.__jK.isContentBlocked();}
,unblockContent:function(){this.__jK.unblockContent();}
,forceUnblockContent:function(){this.__jK.forceUnblockContent();}
,getBlocker:function(){return this.__jK;}
},destruct:function(){this._disposeObjects(a);}
});}
)();
(function(){var l="backgroundColor",k="_applyOpacity",j="Boolean",h="__jK",g="opacity",f="__iI",d="interval",c="__jP",b="Tab",a="Color",A="qx.ui.root.Page",z="Number",y="qx.ui.core.Blocker",x="qx.ui.root.Application",w="_applyColor",v="px",u="keydown",t="deactivate",s="qx.event.type.Event",r="resize",p="keyup",q="keypress",n="unblocked",o="blocked",m="zIndex";qx.Class.define(y,{extend:qx.core.Object,events:{blocked:s,unblocked:s},construct:function(B){qx.core.Object.call(this);this._widget=B;this._isPageRoot=(qx.Class.isDefined(A)&&B instanceof qx.ui.root.Page);if(this._isPageRoot){B.addListener(r,this.__jR,this);}
;if(qx.Class.isDefined(x)&&B instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);}
;this.__jL=[];this.__jM=[];this.__jN=[];}
,properties:{color:{check:a,init:null,nullable:true,apply:w,themeable:true},opacity:{check:z,init:1,apply:k,themeable:true},keepBlockerActive:{check:j,init:false}},members:{__jK:null,__jO:0,__jP:null,__jN:null,__jL:null,__jM:null,__jQ:null,__iI:null,_isPageRoot:false,_widget:null,__jR:function(e){var C=e.getData();if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:C.width,height:C.height});}
;if(this.isBlocked()){this.getBlockerElement().setStyles({width:C.width,height:C.height});}
;}
,_applyColor:function(D,E){var F=qx.theme.manager.Color.getInstance().resolve(D);this.__jS(l,F);}
,_applyOpacity:function(G,H){this.__jS(g,G);}
,__jS:function(I,J){var K=[];this.__jK&&K.push(this.__jK);this.__jP&&K.push(this.__jP);for(var i=0;i<K.length;i++){K[i].setStyle(I,J);}
;}
,_backupActiveWidget:function(){var L=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);this.__jL.push(L.getActive());this.__jM.push(L.getFocus());if(this._widget.isFocusable()){this._widget.focus();}
;}
,_restoreActiveWidget:function(){var O=this.__jL.length;if(O>0){var N=this.__jL[O-1];if(N){qx.bom.Element.activate(N);}
;this.__jL.pop();}
;var M=this.__jM.length;if(M>0){var N=this.__jM[M-1];if(N){qx.bom.Element.focus(this.__jM[M-1]);}
;this.__jM.pop();}
;}
,__jT:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());}
,getBlockerElement:function(){if(!this.__jK){this.__jK=this.__jT();this.__jK.setStyle(m,15);this._widget.getContainerElement().add(this.__jK);this.__jK.exclude();}
;return this.__jK;}
,block:function(){this.__jO++;if(this.__jO<2){this._backupActiveWidget();var P=this.getBlockerElement();P.include();P.activate();P.addListener(t,this.__jY,this);P.addListener(q,this.__jX,this);P.addListener(u,this.__jX,this);P.addListener(p,this.__jX,this);this.fireEvent(o,qx.event.type.Event);}
;}
,isBlocked:function(){return this.__jO>0;}
,unblock:function(){if(!this.isBlocked()){return;}
;this.__jO--;if(this.__jO<1){this.__jU();this.__jO=0;}
;}
,forceUnblock:function(){if(!this.isBlocked()){return;}
;this.__jO=0;this.__jU();}
,__jU:function(){this._restoreActiveWidget();var Q=this.getBlockerElement();Q.removeListener(t,this.__jY,this);Q.removeListener(q,this.__jX,this);Q.removeListener(u,this.__jX,this);Q.removeListener(p,this.__jX,this);Q.exclude();this.fireEvent(n,qx.event.type.Event);}
,getContentBlockerElement:function(){if(!this.__jP){this.__jP=this.__jT();this._widget.getContentElement().add(this.__jP);this.__jP.exclude();}
;return this.__jP;}
,blockContent:function(R){var S=this.getContentBlockerElement();S.setStyle(m,R);this.__jN.push(R);if(this.__jN.length<2){S.include();if(this._isPageRoot){if(!this.__iI){this.__iI=new qx.event.Timer(300);this.__iI.addListener(d,this.__jW,this);}
;this.__iI.start();this.__jW();}
;this.fireEvent(o,qx.event.type.Event);}
;}
,isContentBlocked:function(){return this.__jN.length>0;}
,unblockContent:function(){if(!this.isContentBlocked()){return;}
;this.__jN.pop();var T=this.__jN[this.__jN.length-1];var U=this.getContentBlockerElement();U.setStyle(m,T);if(this.__jN.length<1){this.__jV();this.__jN=[];}
;}
,forceUnblockContent:function(){if(!this.isContentBlocked()){return;}
;this.__jN=[];var V=this.getContentBlockerElement();V.setStyle(m,null);this.__jV();}
,__jV:function(){this.getContentBlockerElement().exclude();if(this._isPageRoot){this.__iI.stop();}
;this.fireEvent(n,qx.event.type.Event);}
,__jW:function(){var W=this._widget.getContainerElement().getDomElement();var X=qx.dom.Node.getDocument(W);this.getContentBlockerElement().setStyles({height:X.documentElement.scrollHeight+v,width:X.documentElement.scrollWidth+v});}
,__jX:function(e){if(e.getKeyIdentifier()==b){e.stop();}
;}
,__jY:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();}
;}
},destruct:function(){if(this._isPageRoot){this._widget.removeListener(r,this.__jR,this);}
;this._disposeObjects(c,h,f);this.__jQ=this.__jL=this.__jM=this._widget=this.__jN=null;}
});}
)();
(function(){var u="changeGlobalCursor",t="engine.name",s="keypress",r="Boolean",q="root",p="",o=" !important",n="input",m="_applyGlobalCursor",l="Space",d="_applyNativeHelp",k=";",h="event.help",c="qx.ui.root.Abstract",b="abstract",g="textarea",f="String",i="*",a="help",j="contextmenu";qx.Class.define(c,{type:b,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);qx.ui.core.FocusHandler.getInstance().addRoot(this);qx.ui.core.queue.Visibility.add(this);this.initNativeHelp();this.addListener(s,this.__kc,this);}
,properties:{appearance:{refine:true,init:q},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:f,nullable:true,themeable:true,apply:m,event:u},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:r,init:false,apply:d}},members:{__kb:null,isRootWidget:function(){return true;}
,getLayout:function(){return this._getLayout();}
,_applyGlobalCursor:qx.core.Environment.select(t,{"mshtml":function(v,w){}
,"default":function(x,y){var z=qx.bom.Stylesheet;var A=this.__kb;if(!A){this.__kb=A=z.createElement();}
;z.removeAllRules(A);if(x){z.addRule(A,i,qx.bom.element.Cursor.compile(x).replace(k,p)+o);}
;}
}),_applyNativeContextMenu:function(B,C){if(B){this.removeListener(j,this._onNativeContextMenu,this,true);}
else {this.addListener(j,this._onNativeContextMenu,this,true);}
;}
,_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;}
;e.preventDefault();}
,__kc:function(e){if(e.getKeyIdentifier()!==l){return;}
;var E=e.getTarget();var D=qx.ui.core.FocusHandler.getInstance();if(!D.isFocused(E)){return;}
;var F=E.getContentElement().getNodeName();if(F===n||F===g){return;}
;e.preventDefault();}
,_applyNativeHelp:function(G,H){if(qx.core.Environment.get(h)){if(H===false){qx.bom.Event.removeNativeListener(document,a,qx.lang.Function.returnFalse);}
;if(G===false){qx.bom.Event.addNativeListener(document,a,qx.lang.Function.returnFalse);}
;}
;}
},destruct:function(){this.__kb=null;}
,defer:function(I,J){qx.ui.core.MChildrenHandling.remap(J);}
});}
)();
(function(){var k="keypress",j="focusout",h="__kd",g="activate",f="Tab",d="singleton",c="deactivate",b="focusin",a="qx.ui.core.FocusHandler";qx.Class.define(a,{extend:qx.core.Object,type:d,construct:function(){qx.core.Object.call(this);this.__kd={};}
,members:{__kd:null,__ke:null,__kf:null,__kg:null,connectTo:function(m){m.addListener(k,this.__eL,this);m.addListener(b,this._onFocusIn,this,true);m.addListener(j,this._onFocusOut,this,true);m.addListener(g,this._onActivate,this,true);m.addListener(c,this._onDeactivate,this,true);}
,addRoot:function(n){this.__kd[n.$$hash]=n;}
,removeRoot:function(o){delete this.__kd[o.$$hash];}
,getActiveWidget:function(){return this.__ke;}
,isActive:function(p){return this.__ke==p;}
,getFocusedWidget:function(){return this.__kf;}
,isFocused:function(q){return this.__kf==q;}
,isFocusRoot:function(r){return !!this.__kd[r.$$hash];}
,_onActivate:function(e){var t=e.getTarget();this.__ke=t;var s=this.__kh(t);if(s!=this.__kg){this.__kg=s;}
;}
,_onDeactivate:function(e){var u=e.getTarget();if(this.__ke==u){this.__ke=null;}
;}
,_onFocusIn:function(e){var v=e.getTarget();if(v!=this.__kf){this.__kf=v;v.visualizeFocus();}
;}
,_onFocusOut:function(e){var w=e.getTarget();if(w==this.__kf){this.__kf=null;w.visualizeBlur();}
;}
,__eL:function(e){if(e.getKeyIdentifier()!=f){return;}
;if(!this.__kg){return;}
;e.stopPropagation();e.preventDefault();var x=this.__kf;if(!e.isShiftPressed()){var y=x?this.__kl(x):this.__kj();}
else {var y=x?this.__km(x):this.__kk();}
;if(y){y.tabFocus();}
;}
,__kh:function(z){var A=this.__kd;while(z){if(A[z.$$hash]){return z;}
;z=z.getLayoutParent();}
;return null;}
,__ki:function(B,C){if(B===C){return 0;}
;var E=B.getTabIndex()||0;var D=C.getTabIndex()||0;if(E!=D){return E-D;}
;var J=B.getContainerElement().getDomElement();var I=C.getContainerElement().getDomElement();var H=qx.bom.element.Location;var G=H.get(J);var F=H.get(I);if(G.top!=F.top){return G.top-F.top;}
;if(G.left!=F.left){return G.left-F.left;}
;var K=B.getZIndex();var L=C.getZIndex();if(K!=L){return K-L;}
;return 0;}
,__kj:function(){return this.__kp(this.__kg,null);}
,__kk:function(){return this.__kq(this.__kg,null);}
,__kl:function(M){var N=this.__kg;if(N==M){return this.__kj();}
;while(M&&M.getAnonymous()){M=M.getLayoutParent();}
;if(M==null){return [];}
;var O=[];this.__kn(N,M,O);O.sort(this.__ki);var P=O.length;return P>0?O[0]:this.__kj();}
,__km:function(Q){var R=this.__kg;if(R==Q){return this.__kk();}
;while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();}
;if(Q==null){return [];}
;var S=[];this.__ko(R,Q,S);S.sort(this.__ki);var T=S.length;return T>0?S[T-1]:this.__kk();}
,__kn:function(parent,U,V){var W=parent.getLayoutChildren();var X;for(var i=0,l=W.length;i<l;i++){X=W[i];if(!(X instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__ki(U,X)<0){V.push(X);}
;this.__kn(X,U,V);}
;}
;}
,__ko:function(parent,Y,ba){var bb=parent.getLayoutChildren();var bc;for(var i=0,l=bb.length;i<l;i++){bc=bb[i];if(!(bc instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__ki(Y,bc)>0){ba.push(bc);}
;this.__ko(bc,Y,ba);}
;}
;}
,__kp:function(parent,bd){var be=parent.getLayoutChildren();var bf;for(var i=0,l=be.length;i<l;i++){bf=be[i];if(!(bf instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__ki(bf,bd)<0){bd=bf;}
;}
;bd=this.__kp(bf,bd);}
;}
;return bd;}
,__kq:function(parent,bg){var bh=parent.getLayoutChildren();var bi;for(var i=0,l=bh.length;i<l;i++){bi=bh[i];if(!(bi instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__ki(bi,bg)>0){bg=bi;}
;}
;bg=this.__kq(bi,bg);}
;}
;return bg;}
},destruct:function(){this._disposeMap(h);this.__kf=this.__ke=this.__kg=null;}
});}
)();
(function(){var q="resize",p="engine.name",o="paddingLeft",n="position",m="The root widget does not support decorators with 'left', or 'top' insets!",l="0px",k="webkit",j="The application could not be started due to a missing body tag in the HTML file!",i="$$widget",h="qx.ui.root.Application",c="hidden",g="div",f="paddingTop",b="The root widget does not support 'left', or 'top' paddings!",a="100%",d="absolute";qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(r){this.__ce=qx.dom.Node.getWindow(r);this.__kr=r;qx.ui.root.Abstract.call(this);qx.event.Registration.addListener(this.__ce,q,this._onResize,this);this._setLayout(new qx.ui.layout.Canvas());qx.ui.core.queue.Layout.add(this);qx.ui.core.FocusHandler.getInstance().connectTo(this);this.getContentElement().disableScrolling();}
,members:{__ce:null,__kr:null,_createContainerElement:function(){var s=this.__kr;if((qx.core.Environment.get(p)==k)){if(!s.body){alert(j);}
;}
;var w=s.documentElement.style;var t=s.body.style;w.overflow=t.overflow=c;w.padding=w.margin=t.padding=t.margin=l;w.width=w.height=t.width=t.height=a;var v=s.createElement(g);s.body.appendChild(v);var u=new qx.html.Root(v);u.setStyle(n,d);u.setAttribute(i,this.toHashCode());return u;}
,_onResize:function(e){qx.ui.core.queue.Layout.add(this);if(qx.ui.popup&&qx.ui.popup.Manager){qx.ui.popup.Manager.getInstance().hideAll();}
;if(qx.ui.menu&&qx.ui.menu.Manager){qx.ui.menu.Manager.getInstance().hideAll();}
;}
,_computeSizeHint:function(){var x=qx.bom.Viewport.getWidth(this.__ce);var y=qx.bom.Viewport.getHeight(this.__ce);return {minWidth:x,width:x,maxWidth:x,minHeight:y,height:y,maxHeight:y};}
,_applyPadding:function(z,A,name){if(z&&(name==f||name==o)){throw new Error(b);}
;qx.ui.root.Abstract.prototype._applyPadding.call(this,z,A,name);}
,_applyDecorator:function(B,C){qx.ui.root.Abstract.prototype._applyDecorator.call(this,B,C);if(!B){return;}
;var D=this.getDecoratorElement().getInsets();if(D.left||D.top){throw new Error(m);}
;}
},destruct:function(){this.__ce=this.__kr=null;}
});}
)();
(function(){var k="': ",j="width",h="qx.ui.layout.Canvas",g="qx.debug",f="height",e="Bad format of layout property '",d="' is not supported by the Canvas layout!",c=". The value must be either an integer or an percent string.",b="The property '",a="number";qx.Class.define(h,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Environment.select(g,{"true":function(m,name,n){var o={top:1,left:1,bottom:1,right:1,width:1,height:1,edge:1};this.assert(o[name]==1,b+name+d);if(name==j||name==f){this.assertMatch(n,qx.ui.layout.Util.PERCENT_VALUE);}
else {if(typeof n===a){this.assertInteger(n);}
else if(qx.lang.Type.isString(n)){this.assertMatch(n,qx.ui.layout.Util.PERCENT_VALUE);}
else {this.fail(e+name+k+n+c);}
;}
;}
,"false":null}),renderLayout:function(p,q){var B=this._getLayoutChildren();var t,A,y;var D,top,r,s,v,u;var z,x,C,w;for(var i=0,l=B.length;i<l;i++){t=B[i];A=t.getSizeHint();y=t.getLayoutProperties();z=t.getMarginTop();x=t.getMarginRight();C=t.getMarginBottom();w=t.getMarginLeft();D=y.left!=null?y.left:y.edge;if(qx.lang.Type.isString(D)){D=Math.round(parseFloat(D)*p/100);}
;r=y.right!=null?y.right:y.edge;if(qx.lang.Type.isString(r)){r=Math.round(parseFloat(r)*p/100);}
;top=y.top!=null?y.top:y.edge;if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*q/100);}
;s=y.bottom!=null?y.bottom:y.edge;if(qx.lang.Type.isString(s)){s=Math.round(parseFloat(s)*q/100);}
;if(D!=null&&r!=null){v=p-D-r-w-x;if(v<A.minWidth){v=A.minWidth;}
else if(v>A.maxWidth){v=A.maxWidth;}
;D+=w;}
else {v=y.width;if(v==null){v=A.width;}
else {v=Math.round(parseFloat(v)*p/100);if(v<A.minWidth){v=A.minWidth;}
else if(v>A.maxWidth){v=A.maxWidth;}
;}
;if(r!=null){D=p-v-r-x-w;}
else if(D==null){D=w;}
else {D+=w;}
;}
;if(top!=null&&s!=null){u=q-top-s-z-C;if(u<A.minHeight){u=A.minHeight;}
else if(u>A.maxHeight){u=A.maxHeight;}
;top+=z;}
else {u=y.height;if(u==null){u=A.height;}
else {u=Math.round(parseFloat(u)*q/100);if(u<A.minHeight){u=A.minHeight;}
else if(u>A.maxHeight){u=A.maxHeight;}
;}
;if(s!=null){top=q-u-s-C-z;}
else if(top==null){top=z;}
else {top+=z;}
;}
;t.renderLayout(D,top,v,u);}
;}
,_computeSizeHint:function(){var T=0,S=0;var Q=0,O=0;var M,L;var K,I;var E=this._getLayoutChildren();var H,R,G;var U,top,F,J;for(var i=0,l=E.length;i<l;i++){H=E[i];R=H.getLayoutProperties();G=H.getSizeHint();var P=H.getMarginLeft()+H.getMarginRight();var N=H.getMarginTop()+H.getMarginBottom();M=G.width+P;L=G.minWidth+P;U=R.left!=null?R.left:R.edge;if(U&&typeof U===a){M+=U;L+=U;}
;F=R.right!=null?R.right:R.edge;if(F&&typeof F===a){M+=F;L+=F;}
;T=Math.max(T,M);S=Math.max(S,L);K=G.height+N;I=G.minHeight+N;top=R.top!=null?R.top:R.edge;if(top&&typeof top===a){K+=top;I+=top;}
;J=R.bottom!=null?R.bottom:R.edge;if(J&&typeof J===a){K+=J;I+=J;}
;Q=Math.max(Q,K);O=Math.max(O,I);}
;return {width:T,minWidth:S,height:Q,minHeight:O};}
}});}
)();
(function(){var a="qx.html.Root";qx.Class.define(a,{extend:qx.html.Element,construct:function(b){qx.html.Element.call(this);if(b!=null){this.useElement(b);}
;}
,members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);this.setRoot(true);qx.html.Element._modified[this.$$hash]=this;}
}});}
)();
(function(){var k="repeat",j="mousedown",i="url(",h=")",g="mouseout",f="div",d="dblclick",c="mousewheel",b="qx.html.Blocker",a="mousemove",w="mouseover",v="appear",u="click",t="mshtml",s="engine.name",r="mouseup",q="contextmenu",p="disappear",o="qx/static/blank.gif",n="absolute",l="100%",m="cursor";qx.Class.define(b,{extend:qx.html.Element,construct:function(x,y){var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;var z={position:n,width:l,height:l,opacity:y||0,backgroundColor:x};if((qx.core.Environment.get(s)==t)){z.backgroundImage=i+qx.util.ResourceManager.getInstance().toUri(o)+h;z.backgroundRepeat=k;}
;qx.html.Element.call(this,f,z);this.addListener(j,this._stopPropagation,this);this.addListener(r,this._stopPropagation,this);this.addListener(u,this._stopPropagation,this);this.addListener(d,this._stopPropagation,this);this.addListener(a,this._stopPropagation,this);this.addListener(w,this._stopPropagation,this);this.addListener(g,this._stopPropagation,this);this.addListener(c,this._stopPropagation,this);this.addListener(q,this._stopPropagation,this);this.addListener(v,this.__kt,this);this.addListener(p,this.__kt,this);}
,members:{_stopPropagation:function(e){e.stopPropagation();}
,__kt:function(){var A=this.getStyle(m);this.setStyle(m,null,true);this.setStyle(m,A,true);}
}});}
)();
(function(){var j="changeModel",i="model.user.avatar_url",h="application/json",g="github.view.Gist",f="model.description",e="west",d="/gists/{id}",c="Description",b="https://api.github.com",a="demobrowser.demo.data.Github",H="source",G="/gists",F="change",E="Content",D="center",C="#fff",B="Authorization",A="html",z="model.user.login",y="model.files",q="north",r="Gists",o="Accept",p="token ",m="github.rest.Resource",n="description",k="undefined",l="</pre>",s="<pre>",t="GET",v="value",u="get",x="model",w="bold";qx.Class.define(a,{extend:qx.application.Standalone,members:{__Qc:null,__Qd:null,__Qe:null,__Qf:null,__Dm:null,__Qg:null,main:function(){if(typeof GITHUB==k){return;}
;qx.application.Standalone.prototype.main.call(this);this._setUpResources();this._setUpStores();this._createGui();this._setUpBinding();this.__Qc.get();this.__Dm.addListener(j,function(I){var J=I.getData();this.__Dm.getSelection().push(J.getItem(0));}
,this);this.__Dm.getSelection().addListener(F,function(K){var L=this.__Dm.getSelection().getItem(0).getId();this.__Qd.get({id:L});}
,this);}
,_setUpResources:function(){this.__Qc=new github.rest.Resource({"get":{method:t,url:G}});this.__Qd=new github.rest.Resource({"get":{method:t,url:d}});}
,_setUpStores:function(){this.__Qe=new qx.data.store.Rest(this.__Qc,u);this.__Qf=new qx.data.store.Rest(this.__Qd,u);}
,_createGui:function(){var M=new qx.ui.container.Composite(new qx.ui.layout.Dock());M.setPadding(10);var N=new qx.ui.basic.Label(r);N.setFont(w);N.setPaddingBottom(10);M.add(N,{edge:q});this.__Dm=new qx.ui.list.List();this.__Dm.setWidth(200);this.__Qg=new github.view.Gist();M.add(this.__Dm,{edge:e});M.add(this.__Qg,{edge:D});this.getRoot().add(M,{edge:0});}
,_setUpBinding:function(){var P=this.__Dm,O=this.__Qe,Q=this.__Qf;P.setLabelPath(n);P.setLabelOptions({converter:function(S,T,U,V){if(S===null||!S.length){return T.getId();}
;return S;}
});O.bind(x,P,x);var R=this.__Qg;Q.bind(f,R.getDescription(),v);Q.bind(z,R.getUsername(),v);Q.bind(i,R.getGravatar(),H);Q.bind(y,R.getContent(),A,{converter:function(W){var X=qx.Class.getProperties(W.constructor);var content=W.get(X[0]).getContent();content=qx.bom.String.escape(content);return s+content+l;}
});}
}});qx.Class.define(m,{extend:qx.io.rest.Resource,construct:function(Y){qx.io.rest.Resource.call(this,Y);this.configureRequest(function(ba){ba.setRequestHeader(o,h);ba.setRequestHeader(B,p+GITHUB.access_token);}
);this.setBaseUrl(b);}
});qx.Class.define(g,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);var bb=new qx.ui.layout.Grid(5,5);bb.setColumnFlex(0,1);bb.setRowFlex(2,1);this.setLayout(bb);this.setPadding(0,10);var be;var bc=new qx.ui.container.Composite(new qx.ui.layout.VBox(5));be=new qx.ui.basic.Label(c);be.setFont(w);this.__Cs=new qx.ui.basic.Label();bc.add(be);bc.add(this.__Cs);this.add(bc,{row:0,column:0});var bd=new qx.ui.container.Composite(new qx.ui.layout.VBox(5));this.__Qh=new qx.ui.basic.Image();this.__Qh.set({width:40,height:40,scale:true,backgroundColor:C});this.__Qi=new qx.ui.basic.Label();bd.add(this.__Qh);bd.add(this.__Qi);this.add(bd,{row:0,column:1});be=new qx.ui.basic.Label(E);be.setFont(w);var scroll=new qx.ui.container.Scroll();this.__mt=new qx.ui.embed.Html();this.__mt.setMinHeight(1000);scroll.add(this.__mt);this.add(be,{row:1,column:0});this.add(scroll,{row:2,column:0,colSpan:2});}
,members:{getDescription:function(){return this.__Cs;}
,getGravatar:function(){return this.__Qh;}
,getUsername:function(){return this.__Qi;}
,getContent:function(){return this.__mt;}
}});}
)();
(function(){var g="changeModel",f="function",d="qx.io.rest.Resource",c="Success",b="String",a="qx.data.store.Rest";qx.Class.define(a,{extend:qx.core.Object,construct:function(h,i,j){qx.core.Object.call(this);try{this.setResource(h);this.setActionName(i);}
catch(e){this.dispose();throw e;}
;this._delegate=j;this._marshaler=new qx.data.marshal.Json(j);if(j&&qx.lang.Type.isFunction(j.configureRequest)){this.__Jt();}
;this.__Js=qx.lang.Function.bind(this.__Ju,this);this.__xG();}
,properties:{resource:{check:d},actionName:{check:b},model:{nullable:true,event:g}},members:{_marshaler:null,_delegate:null,__Js:null,__Jt:function(){var k=this.getResource(),l=this._delegate;k.configureRequest(l.configureRequest);}
,__xG:function(){var n=this.getResource(),m=this.getActionName();if(n&&m){n.addListener(this.getActionName()+c,this.__Js);}
;}
,__Ju:function(e){var p=e.getData(),o=this._marshaler,q,r=this.getModel(),s=this._delegate;if(p){if(s&&s.manipulateData){p=s.manipulateData(p);}
;o.toClass(p,true);q=o.toModel(p);if(q){this.setModel(q);}
;}
;if(r&&r.dispose){r.dispose();}
;}
},destruct:function(){var t=this.getModel();if(t&&typeof t.dispose===f){t.dispose();}
;this._marshaler&&this._marshaler.dispose();}
});}
)();
(function(){var a="qx.data.marshal.IMarshaler";qx.Interface.define(a,{members:{toClass:function(b,c){}
,toModel:function(d){}
}});}
)();
(function(){var r='"',q="The model contained an illegal name: '",p="qx.debug.databinding",o="change",n="qx.data.marshal.Json",m="Unsupported type!",l="'.",k="'. Replaced it with '",j="set",h="' is not a valid JavaScript identifier.",c="_applyEventPropagation",g="The key '",f="",b="Array",a="_validate",e="qx.debug",d="qx.data.model.";qx.Class.define(n,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(s){qx.core.Object.call(this);this.__ub=s;}
,statics:{$$instance:null,createModel:function(t,u){if(this.$$instance===null){this.$$instance=new qx.data.marshal.Json();}
;this.$$instance.toClass(t,u);return this.$$instance.toModel(t);}
},members:{__ub:null,__uc:function(v){return qx.Bootstrap.getKeys(v).sort().join(r);}
,toClass:function(w,x){if(!qx.lang.Type.isObject(w)||!!w.$$isString||w instanceof qx.core.Object){if(w instanceof Array||qx.Bootstrap.getClass(w)==b){for(var i=0;i<w.length;i++){this.toClass(w[i],x);}
;}
;return;}
;var z=this.__uc(w);for(var A in w){this.toClass(w[A],x);}
;if(qx.Class.isDefined(d+z)){return;}
;if(this.__ub&&this.__ub.getModelClass&&this.__ub.getModelClass(z)!=null){return;}
;var G={};var F={__ud:this.__ud};for(var A in w){if(this.__ub&&this.__ub.getPropertyMapping){A=this.__ub.getPropertyMapping(A,z);}
;A=A.replace(/-|\.|\s+/g,f);if(qx.core.Environment.get(e)){this.assertTrue((/^[$0-9A-Za-z_]*$/).test(A),g+A+h);}
;G[A]={};G[A].nullable=true;G[A].event=o+qx.lang.String.firstUp(A);if(x){G[A].apply=c;}
;if(this.__ub&&this.__ub.getValidationRule){var C=this.__ub.getValidationRule(z,A);if(C){G[A].validate=a+A;F[a+A]=C;}
;}
;}
;if(this.__ub&&this.__ub.getModelSuperClass){var E=this.__ub.getModelSuperClass(z)||qx.core.Object;}
else {var E=qx.core.Object;}
;var B=[];if(this.__ub&&this.__ub.getModelMixins){var D=this.__ub.getModelMixins(z);if(!qx.lang.Type.isArray(D)){if(D!=null){B=[D];}
;}
else {B=D;}
;}
;if(x){B.push(qx.data.marshal.MEventBubbling);}
;var y={extend:E,include:B,properties:G,members:F,destruct:this.__ue};qx.Class.define(d+z,y);}
,__ue:function(){var H=qx.util.PropertyUtil.getAllProperties(this.constructor);for(var I in H){this.__ud(this.get(H[I].name));}
;}
,__ud:function(J){if(!(J instanceof qx.core.Object)){return;}
;if(J.isDisposed()){return;}
;J.dispose();}
,__uf:function(K){var L;if(this.__ub&&this.__ub.getModelClass){L=this.__ub.getModelClass(K);}
;if(L!=null){return (new L());}
else {var M=qx.Class.getByName(d+K);return (new M());}
;}
,toModel:function(N){var S=qx.lang.Type.isObject(N);var O=N instanceof Array||qx.Bootstrap.getClass(N)==b;if((!S&&!O)||!!N.$$isString||N instanceof qx.core.Object){return N;}
else if(O){var U=new qx.data.Array();U.setAutoDisposeItems(true);for(var i=0;i<N.length;i++){U.push(this.toModel(N[i]));}
;return U;}
else if(S){var P=this.__uc(N);var V=this.__uf(P);for(var T in N){var Q=T;if(this.__ub&&this.__ub.getPropertyMapping){Q=this.__ub.getPropertyMapping(T,P);}
;var W=Q.replace(/-|\.|\s+/g,f);if((qx.core.Environment.get(e))&&qx.core.Environment.get(p)){if(W!=Q){this.warn(q+T+k+Q+l);}
;}
;Q=W;var R=j+qx.lang.String.firstUp(Q);if(V[R]){V[R](this.toModel(N[T]));}
;}
;return V;}
;;throw new Error(m);}
},destruct:function(){this.__ub=null;}
});}
)();
(function(){var j="qx.data.marshal.MEventBubbling",h="",g="qx.event.type.Data",f="changeBubble",d=".",c="]",b="idBubble-",a="[";qx.Mixin.define(j,{events:{"changeBubble":g},members:{_applyEventPropagation:function(k,l,name){this.fireDataEvent(f,{value:k,name:name,old:l,item:this});this._registerEventChaining(k,l,name);}
,_registerEventChaining:function(m,n,name){if(n!=null&&n.getUserData&&n.getUserData(b+this.$$hash)!=null){var p=n.getUserData(b+this.$$hash);for(var i=0;i<p.length;i++){n.removeListenerById(p[i]);}
;n.setUserData(b+this.$$hash,null);}
;if((m instanceof qx.core.Object)&&qx.Class.hasMixin(m.constructor,qx.data.marshal.MEventBubbling)){var o=qx.lang.Function.bind(this.__lX,this,name);var q=m.addListener(f,o,this);var p=m.getUserData(b+this.$$hash);if(p==null){p=[];m.setUserData(b+this.$$hash,p);}
;p.push(q);}
;}
,__lX:function(name,e){var y=e.getData();var u=y.value;var s=y.old;if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(y.name.indexOf){var x=y.name.indexOf(d)!=-1?y.name.indexOf(d):y.name.length;var v=y.name.indexOf(a)!=-1?y.name.indexOf(a):y.name.length;if(v==0){var t=name+y.name;}
else if(x<v){var r=y.name.substring(0,x);var w=y.name.substring(x+1,y.name.length);if(w[0]!=a){w=d+w;}
;var t=name+a+r+c+w;}
else if(v<x){var r=y.name.substring(0,v);var w=y.name.substring(v,y.name.length);var t=name+a+r+c+w;}
else {var t=name+a+y.name+c;}
;;}
else {var t=name+a+y.name+c;}
;}
else {if(parseInt(name)==name&&name!==h){name=a+name+c;}
;var t=name+d+y.name;}
;this.fireDataEvent(f,{value:u,name:t,old:s,item:y.item||e.getTarget()});}
}});}
)();
(function(){var s="Boolean",r="Please use 'toArray()' to see the content.",q="qx.data.Array",p="Type of the parameter not supported!",o="The parameter must be an array.",n="number",m="changeLength",l="-",k="qx.debug",j="0",c="qx.event.type.Data",h="order",f="0-",b="remove",a="add",e="",d="change",g="changeBubble";qx.Class.define(q,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(t){qx.core.Object.call(this);if(t==undefined){this.__lY=[];}
else if(arguments.length>1){this.__lY=[];for(var i=0;i<arguments.length;i++){this.__lY.push(arguments[i]);}
;}
else if(typeof t==n){this.__lY=new Array(t);}
else if(t instanceof Array){this.__lY=qx.lang.Array.clone(t);}
else {this.__lY=[];this.dispose();throw new Error(p);}
;;;for(var i=0;i<this.__lY.length;i++){this._applyEventPropagation(this.__lY[i],null,i);}
;this.__ma();if(qx.core.Environment.get(k)){this[0]=r;}
;}
,properties:{autoDisposeItems:{check:s,init:false}},events:{"change":c,"changeLength":c},members:{__lY:null,concat:function(u){if(u){var v=this.__lY.concat(u);}
else {var v=this.__lY.concat();}
;return new qx.data.Array(v);}
,join:function(w){return this.__lY.join(w);}
,pop:function(){var x=this.__lY.pop();this.__ma();this._registerEventChaining(null,x,this.length-1);this.fireDataEvent(g,{value:[],name:this.length+e,old:[x],item:this});this.fireDataEvent(d,{start:this.length-1,end:this.length-1,type:b,items:[x]},null);return x;}
,push:function(y){for(var i=0;i<arguments.length;i++){this.__lY.push(arguments[i]);this.__ma();this._registerEventChaining(arguments[i],null,this.length-1);this.fireDataEvent(g,{value:[arguments[i]],name:(this.length-1)+e,old:[],item:this});this.fireDataEvent(d,{start:this.length-1,end:this.length-1,type:a,items:[arguments[i]]},null);}
;return this.length;}
,reverse:function(){if(this.length==0){return;}
;var z=this.__lY.concat();this.__lY.reverse();this.__mb(0,this.length);this.fireDataEvent(d,{start:0,end:this.length-1,type:h,items:null},null);this.fireDataEvent(g,{value:this.__lY,name:f+(this.__lY.length-1),old:z,item:this});}
,shift:function(){if(this.length==0){return;}
;var A=this.__lY.shift();this.__ma();this._registerEventChaining(null,A,this.length-1);this.__mb(0,this.length);this.fireDataEvent(g,{value:[],name:j,old:[A],item:this});this.fireDataEvent(d,{start:0,end:this.length-1,type:b,items:[A]},null);return A;}
,slice:function(B,C){return new qx.data.Array(this.__lY.slice(B,C));}
,splice:function(D,E,F){var N=this.__lY.length;var J=this.__lY.splice.apply(this.__lY,arguments);if(this.__lY.length!=N){this.__ma();}
;var L=E>0;var H=arguments.length>2;var I=null;if(L||H){if(this.__lY.length>N){var M=a;I=qx.lang.Array.fromArguments(arguments,2);}
else if(this.__lY.length<N){var M=b;I=J;}
else {var M=h;}
;this.fireDataEvent(d,{start:D,end:this.length-1,type:M,items:I},null);}
;for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,D+i);}
;this.__mb(D+arguments.length-2,this.length);var K=[];for(var i=2;i<arguments.length;i++){K[i-2]=arguments[i];}
;var G=(D+Math.max(arguments.length-3,E-1));var name=D==G?G:D+l+G;this.fireDataEvent(g,{value:K,name:name+e,old:J,item:this});for(var i=0;i<J.length;i++){this._registerEventChaining(null,J[i],i);}
;return (new qx.data.Array(J));}
,sort:function(O){if(this.length==0){return;}
;var P=this.__lY.concat();this.__lY.sort.apply(this.__lY,arguments);if(qx.lang.Array.equals(this.__lY,P)===true){return;}
;this.__mb(0,this.length);this.fireDataEvent(d,{start:0,end:this.length-1,type:h,items:null},null);this.fireDataEvent(g,{value:this.__lY,name:f+(this.length-1),old:P,item:this});}
,unshift:function(Q){for(var i=arguments.length-1;i>=0;i--){this.__lY.unshift(arguments[i]);this.__ma();this.__mb(0,this.length);this.fireDataEvent(g,{value:[this.__lY[0]],name:j,old:[this.__lY[1]],item:this});this.fireDataEvent(d,{start:0,end:this.length-1,type:a,items:[arguments[i]]},null);}
;return this.length;}
,toArray:function(){return this.__lY;}
,getItem:function(R){return this.__lY[R];}
,setItem:function(S,T){var U=this.__lY[S];if(U===T){return;}
;this.__lY[S]=T;this._registerEventChaining(T,U,S);if(this.length!=this.__lY.length){this.__ma();}
;this.fireDataEvent(g,{value:[T],name:S+e,old:[U],item:this});this.fireDataEvent(d,{start:S,end:S,type:a,items:[T]},null);}
,getLength:function(){return this.length;}
,indexOf:function(V){return this.__lY.indexOf(V);}
,toString:function(){if(this.__lY!=null){return this.__lY.toString();}
;return e;}
,contains:function(W){return this.__lY.indexOf(W)!==-1;}
,copy:function(){return this.concat();}
,insertAt:function(X,Y){this.splice(X,0,Y).dispose();}
,insertBefore:function(ba,bb){var bc=this.indexOf(ba);if(bc==-1){this.push(bb);}
else {this.splice(bc,0,bb).dispose();}
;}
,insertAfter:function(bd,be){var bf=this.indexOf(bd);if(bf==-1||bf==(this.length-1)){this.push(be);}
else {this.splice(bf+1,0,be).dispose();}
;}
,removeAt:function(bg){var bi=this.splice(bg,1);var bh=bi.getItem(0);bi.dispose();return bh;}
,removeAll:function(){for(var i=0;i<this.__lY.length;i++){this._registerEventChaining(null,this.__lY[i],i);}
;if(this.getLength()==0){return;}
;var bk=this.getLength();var bj=this.__lY.concat();this.__lY.length=0;this.__ma();this.fireDataEvent(g,{value:[],name:f+(bk-1),old:bj,item:this});this.fireDataEvent(d,{start:0,end:bk-1,type:b,items:bj},null);return bj;}
,append:function(bl){if(bl instanceof qx.data.Array){bl=bl.toArray();}
;if(qx.core.Environment.get(k)){qx.core.Assert.assertArray(bl,o);}
;Array.prototype.push.apply(this.__lY,bl);for(var i=0;i<bl.length;i++){this._registerEventChaining(bl[i],null,this.__lY.length+i);}
;var bm=this.length;this.__ma();var name=bm==(this.length-1)?bm:bm+l+(this.length-1);this.fireDataEvent(g,{value:bl,name:name+e,old:[],item:this});this.fireDataEvent(d,{start:bm,end:this.length-1,type:a,items:bl},null);}
,remove:function(bn){var bo=this.indexOf(bn);if(bo!=-1){this.splice(bo,1).dispose();return bn;}
;}
,equals:function(bp){if(this.length!==bp.length){return false;}
;for(var i=0;i<this.length;i++){if(this.getItem(i)!==bp.getItem(i)){return false;}
;}
;return true;}
,sum:function(){var bq=0;for(var i=0;i<this.length;i++){bq+=this.getItem(i);}
;return bq;}
,max:function(){var br=this.getItem(0);for(var i=1;i<this.length;i++){if(this.getItem(i)>br){br=this.getItem(i);}
;}
;return br===undefined?null:br;}
,min:function(){var bs=this.getItem(0);for(var i=1;i<this.length;i++){if(this.getItem(i)<bs){bs=this.getItem(i);}
;}
;return bs===undefined?null:bs;}
,forEach:function(bt,bu){for(var i=0;i<this.__lY.length;i++){bt.call(bu,this.__lY[i],i,this);}
;}
,__ma:function(){var bv=this.length;this.length=this.__lY.length;this.fireDataEvent(m,this.length,bv);}
,__mb:function(bw,bx){for(var i=bw;i<bx;i++){this._registerEventChaining(this.__lY[i],this.__lY[i],i);}
;}
},destruct:function(){for(var i=0;i<this.__lY.length;i++){var by=this.__lY[i];this._applyEventPropagation(null,by,i);if(this.isAutoDisposeItems()&&by&&by instanceof qx.core.Object){by.dispose();}
;}
;this.__lY=null;}
});}
)();
(function(){var k="Boolean",j="It is not allowed to have more than one child aligned to 'center'!",h="height",g="The property '",f="qx.debug",e="width",d="' is not supported by the Dock layout!",c="qx.ui.layout.Dock",b="_applySort",a="west",y="Integer",x="auto",w="center",v="y",u="Decorator",t="north",s="top",r="east",q="edge",p="south",n="flex",o="left",l="x",m="_applyLayoutChange";qx.Class.define(c,{extend:qx.ui.layout.Abstract,construct:function(z,A,B,C){qx.ui.layout.Abstract.call(this);if(z){this.setSpacingX(z);}
;if(A){this.setSpacingY(A);}
;if(B){this.setSeparatorX(B);}
;if(C){this.setSeparatorY(C);}
;}
,properties:{sort:{check:[x,v,l],init:x,apply:b},separatorX:{check:u,nullable:true,apply:m},separatorY:{check:u,nullable:true,apply:m},connectSeparators:{check:k,init:false,apply:m},spacingX:{check:y,init:0,apply:m},spacingY:{check:y,init:0,apply:m}},members:{__dY:null,__BW:null,verifyLayoutProperty:qx.core.Environment.select(f,{"true":function(D,name,E){this.assertInArray(name,[n,q,h,e],g+name+d);if(name===q){this.assertInArray(E,[t,p,a,r,w]);}
else if(name===n){this.assertNumber(E);this.assert(E>=0);}
else {this.assertMatch(E,qx.ui.layout.Util.PERCENT_VALUE);}
;}
,"false":null}),_applySort:function(){this._invalidChildrenCache=true;this._applyLayoutChange();}
,__CR:{north:1,south:2,west:3,east:4,center:5},__CS:{'1':"top",'2':"bottom",'3':"left",'4':"right"},__kS:function(){var F=this._getLayoutChildren();var N,H;var length=F.length;var J=[];var M=[];var K=[];var G=this.getSort()===v;var L=this.getSort()===l;for(var i=0;i<length;i++){N=F[i];K=N.getLayoutProperties().edge;if(K===w){if(H){throw new Error(j);}
;H=N;}
else if(L||G){if(K===t||K===p){G?J.push(N):M.push(N);}
else if(K===a||K===r){G?M.push(N):J.push(N);}
;}
else {J.push(N);}
;}
;var O=J.concat(M);if(H){O.push(H);}
;this.__dY=O;var I=[];for(var i=0;i<length;i++){K=O[i].getLayoutProperties().edge;I[i]=this.__CR[K]||5;}
;this.__BW=I;delete this._invalidChildrenCache;}
,renderLayout:function(P,Q){if(this._invalidChildrenCache){this.__kS();}
;var bk=qx.ui.layout.Util;var W=this.__dY;var bl=this.__BW;var length=W.length;var ba,S,Y,bf,bg,bq,bd,T,bn;var bu=[];var bc=[];var bt=this._getSeparatorWidths();var by=this.getSpacingX();var bx=this.getSpacingY();var X=-by;var bm=-bx;if(bt.x){X-=bt.x+by;}
;if(bt.y){bm-=bt.y+bx;}
;for(var i=0;i<length;i++){S=W[i];bf=S.getLayoutProperties();Y=S.getSizeHint();bd=Y.width;T=Y.height;if(bf.width!=null){bd=Math.floor(P*parseFloat(bf.width)/100);if(bd<Y.minWidth){bd=Y.minWidth;}
else if(bd>Y.maxWidth){bd=Y.maxWidth;}
;}
;if(bf.height!=null){T=Math.floor(Q*parseFloat(bf.height)/100);if(T<Y.minHeight){T=Y.minHeight;}
else if(T>Y.maxHeight){T=Y.maxHeight;}
;}
;bu[i]=bd;bc[i]=T;switch(bl[i]){case 1:case 2:bm+=T+S.getMarginTop()+S.getMarginBottom()+bx;if(bt.y){bm+=bt.y+bx;}
;break;case 3:case 4:X+=bd+S.getMarginLeft()+S.getMarginRight()+by;if(bt.x){X+=bt.x+by;}
;break;default:X+=bd+S.getMarginLeft()+S.getMarginRight()+by;bm+=T+S.getMarginTop()+S.getMarginBottom()+bx;if(bt.x){X+=bt.x+by;}
;if(bt.y){bm+=bt.y+bx;}
;};}
;if(X!=P){ba={};bq=X<P;for(var i=0;i<length;i++){S=W[i];switch(bl[i]){case 3:case 4:case 5:bg=S.getLayoutProperties().flex;if(bg==null&&bl[i]==5){bg=1;}
;if(bg>0){Y=S.getSizeHint();ba[i]={min:Y.minWidth,value:bu[i],max:Y.maxWidth,flex:bg};}
;};}
;var U=bk.computeFlexOffsets(ba,P,X);for(var i in U){bn=U[i].offset;bu[i]+=bn;X+=bn;}
;}
;if(bm!=Q){ba={};bq=bm<Q;for(var i=0;i<length;i++){S=W[i];switch(bl[i]){case 1:case 2:case 5:bg=S.getLayoutProperties().flex;if(bg==null&&bl[i]==5){bg=1;}
;if(bg>0){Y=S.getSizeHint();ba[i]={min:Y.minHeight,value:bc[i],max:Y.maxHeight,flex:bg};}
;};}
;var U=bk.computeFlexOffsets(ba,Q,bm);for(var i in U){bn=U[i].offset;bc[i]+=bn;bm+=bn;}
;}
;this._clearSeparators();var br=this.getSeparatorX(),bs=this.getSeparatorY();var bv=this.getConnectSeparators();var bi=0,bp=0;var bC,top,bd,T,bh,bz;var bj,bw,bB,R;var bA,bb,be,V;var bo=this.__CS;for(var i=0;i<length;i++){S=W[i];bz=bl[i];Y=S.getSizeHint();bA=S.getMarginTop();bb=S.getMarginBottom();be=S.getMarginLeft();V=S.getMarginRight();switch(bz){case 1:case 2:bd=P-be-V;if(bd<Y.minWidth){bd=Y.minWidth;}
else if(bd>Y.maxWidth){bd=Y.maxWidth;}
;T=bc[i];top=bi+bk.computeVerticalAlignOffset(bo[bz],T,Q,bA,bb);bC=bp+bk.computeHorizontalAlignOffset(S.getAlignX()||o,bd,P,be,V);if(bt.y){if(bz==1){bw=bi+T+bA+bx+bb;}
else {bw=bi+Q-T-bA-bx-bb-bt.y;}
;bj=bC;bB=P;if(bv&&bj>0){bj-=by+be;bB+=(by)*2;}
else {bj-=be;}
;this._renderSeparator(bs,{left:bj,top:bw,width:bB,height:bt.y});}
;bh=T+bA+bb+bx;if(bt.y){bh+=bt.y+bx;}
;Q-=bh;if(bz==1){bi+=bh;}
;break;case 3:case 4:T=Q-bA-bb;if(T<Y.minHeight){T=Y.minHeight;}
else if(T>Y.maxHeight){T=Y.maxHeight;}
;bd=bu[i];bC=bp+bk.computeHorizontalAlignOffset(bo[bz],bd,P,be,V);top=bi+bk.computeVerticalAlignOffset(S.getAlignY()||s,T,Q,bA,bb);if(bt.x){if(bz==3){bj=bp+bd+be+by+V;}
else {bj=bp+P-bd-be-by-V-bt.x;}
;bw=top;R=Q;if(bv&&bw>0){bw-=bx+bA;R+=(bx)*2;}
else {bw-=bA;}
;this._renderSeparator(br,{left:bj,top:bw,width:bt.x,height:R});}
;bh=bd+be+V+by;if(bt.x){bh+=bt.x+by;}
;P-=bh;if(bz==3){bp+=bh;}
;break;default:bd=P-be-V;T=Q-bA-bb;if(bd<Y.minWidth){bd=Y.minWidth;}
else if(bd>Y.maxWidth){bd=Y.maxWidth;}
;if(T<Y.minHeight){T=Y.minHeight;}
else if(T>Y.maxHeight){T=Y.maxHeight;}
;bC=bp+bk.computeHorizontalAlignOffset(S.getAlignX()||o,bd,P,be,V);top=bi+bk.computeVerticalAlignOffset(S.getAlignY()||s,T,Q,bA,bb);};S.renderLayout(bC,top,bd,T);}
;}
,_getSeparatorWidths:function(){var bE=this.getSeparatorX(),bD=this.getSeparatorY();if(bE||bD){var bJ=qx.theme.manager.Decoration.getInstance();}
;if(bE){var bK=bJ.resolve(bE);var bG=bK.getInsets();var bH=bG.left+bG.right;}
;if(bD){var bL=bJ.resolve(bD);var bF=bL.getInsets();var bI=bF.top+bF.bottom;}
;return {x:bH||0,y:bI||0};}
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kS();}
;var bP=this.__dY;var ca=this.__BW;var length=bP.length;var bT,cb;var bV,bU;var bW=0,ci=0;var bM=0,cd=0;var bX=0,ch=0;var bN=0,cc=0;var ce=this._getSeparatorWidths();var cg=this.getSpacingX(),cf=this.getSpacingY();var bR=-cg,bQ=-cf;if(ce.x){bR-=ce.x+cg;}
;if(ce.y){bQ-=ce.y+cf;}
;for(var i=0;i<length;i++){cb=bP[i];bT=cb.getSizeHint();bV=cb.getMarginLeft()+cb.getMarginRight();bU=cb.getMarginTop()+cb.getMarginBottom();switch(ca[i]){case 1:case 2:bX=Math.max(bX,bT.width+bW+bV);ch=Math.max(ch,bT.minWidth+ci+bV);bN+=bT.height+bU;cc+=bT.minHeight+bU;bQ+=cf;if(ce.y){bQ+=ce.y+cf;}
;break;case 3:case 4:bM=Math.max(bM,bT.height+bN+bU);cd=Math.max(cd,bT.minHeight+cc+bU);bW+=bT.width+bV;ci+=bT.minWidth+bV;bR+=cg;if(ce.x){bR+=ce.x+cg;}
;break;default:bW+=bT.width+bV;ci+=bT.minWidth+bV;bN+=bT.height+bU;cc+=bT.minHeight+bU;bR+=cg;if(ce.x){bR+=ce.x+cg;}
;bQ+=cf;if(ce.y){bQ+=ce.y+cf;}
;};}
;var bS=Math.max(ci,ch)+bR;var cj=Math.max(bW,bX)+bR;var bY=Math.max(cd,cc)+bQ;var bO=Math.max(bM,bN)+bQ;return {minWidth:bS,width:cj,minHeight:bY,height:bO};}
},destruct:function(){this.__BW=this.__dY=null;}
});}
)();
(function(){var f="qx.ui.core.scroll.MWheelHandling",d="x",c="y",b="scrollbar-x",a="scrollbar-y";qx.Mixin.define(f,{members:{_onMouseWheel:function(e){var l=this._isChildControlVisible(b);var m=this._isChildControlVisible(a);var q=m?this.getChildControl(a,true):null;var p=l?this.getChildControl(b,true):null;var j=e.getWheelDelta(c);var i=e.getWheelDelta(d);var k=!m;var n=!l;if(q){var o=parseInt(j);if(o!==0){q.scrollBySteps(o);}
;var h=q.getPosition();var g=q.getMaximum();if(o<0&&h<=0||o>0&&h>=g){k=true;}
;}
;if(p){var o=parseInt(i);if(o!==0){p.scrollBySteps(o);}
;var h=p.getPosition();var g=p.getMaximum();if(o<0&&h<=0||o>0&&h>=g){n=true;}
;}
;if(!k||!n){e.stop();}
;}
}});}
)();
(function(){var b="qx.ui.core.scroll.MScrollBarFactory",a="qx.nativeScrollBars";qx.core.Environment.add(a,false);qx.Mixin.define(b,{members:{_createScrollBar:function(c){if(qx.core.Environment.get(a)){return new qx.ui.core.scroll.NativeScrollBar(c);}
else {return new qx.ui.core.scroll.ScrollBar(c);}
;}
}});}
)();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);}
,scrollBy:function(d){this.assertNumber(d);}
,scrollBySteps:function(e){this.assertNumber(e);}
}});}
)();
(function(){var k="__md",j="mousedown",i="qx.ui.core.scroll.NativeScrollBar",h="PositiveNumber",g="Integer",f="mousemove",d="_applyMaximum",c="_applyOrientation",b="appear",a="PositiveInteger",y="mshtml",x="engine.name",w="mouseup",v="Number",u="_applyPosition",t="scrollbar",s="native",r="-1px",q="0",p="hidden",n="vertical",o="px",l="scroll",m="horizontal";qx.Class.define(i,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(z){qx.ui.core.Widget.call(this);this.addState(s);this.getContentElement().addListener(l,this._onScroll,this);this.addListener(j,this._stopPropagation,this);this.addListener(w,this._stopPropagation,this);this.addListener(f,this._stopPropagation,this);this.addListener(b,this._onAppear,this);this.getContentElement().add(this._getScrollPaneElement());if(z!=null){this.setOrientation(z);}
else {this.initOrientation();}
;}
,properties:{appearance:{refine:true,init:t},orientation:{check:[m,n],init:m,apply:c},maximum:{check:a,apply:d,init:100},position:{check:v,init:0,apply:u,event:l},singleStep:{check:g,init:20},knobFactor:{check:h,nullable:true}},members:{__mc:null,__md:null,_getScrollPaneElement:function(){if(!this.__md){this.__md=new qx.html.Element();}
;return this.__md;}
,renderLayout:function(A,top,B,C){var D=qx.ui.core.Widget.prototype.renderLayout.call(this,A,top,B,C);this._updateScrollBar();return D;}
,_getContentHint:function(){var E=qx.bom.element.Overflow.getScrollbarWidth();return {width:this.__mc?100:E,maxWidth:this.__mc?null:E,minWidth:this.__mc?null:E,height:this.__mc?E:100,maxHeight:this.__mc?E:null,minHeight:this.__mc?E:null};}
,_applyEnabled:function(F,G){qx.ui.core.Widget.prototype._applyEnabled.call(this,F,G);this._updateScrollBar();}
,_applyMaximum:function(H){this._updateScrollBar();}
,_applyPosition:function(I){var content=this.getContentElement();if(this.__mc){content.scrollToX(I);}
else {content.scrollToY(I);}
;}
,_applyOrientation:function(J,K){var L=this.__mc=J===m;this.set({allowGrowX:L,allowShrinkX:L,allowGrowY:!L,allowShrinkY:!L});if(L){this.replaceState(n,m);}
else {this.replaceState(m,n);}
;this.getContentElement().setStyles({overflowX:L?l:p,overflowY:L?p:l});qx.ui.core.queue.Layout.add(this);}
,_updateScrollBar:function(){var N=this.__mc;var O=this.getBounds();if(!O){return;}
;if(this.isEnabled()){var P=N?O.width:O.height;var M=this.getMaximum()+P;}
else {M=0;}
;if((qx.core.Environment.get(x)==y)){var O=this.getBounds();this.getContentElement().setStyles({left:N?q:r,top:N?r:q,width:(N?O.width:O.width+1)+o,height:(N?O.height+1:O.height)+o});}
;this._getScrollPaneElement().setStyles({left:0,top:0,width:(N?M:1)+o,height:(N?1:M)+o});this.scrollTo(this.getPosition());}
,scrollTo:function(Q){this.setPosition(Math.max(0,Math.min(this.getMaximum(),Q)));}
,scrollBy:function(R){this.scrollTo(this.getPosition()+R);}
,scrollBySteps:function(S){var T=this.getSingleStep();this.scrollBy(S*T);}
,_onScroll:function(e){var V=this.getContentElement();var U=this.__mc?V.getScrollX():V.getScrollY();this.setPosition(U);}
,_onAppear:function(e){this._applyPosition(this.getPosition());}
,_stopPropagation:function(e){e.stopPropagation();}
},destruct:function(){this._disposeObjects(k);}
});}
)();
(function(){var k="PositiveNumber",j="changeValue",i="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",h="_applyKnobFactor",g="knob",f="_applyMaximum",d="qx.ui.core.scroll.ScrollBar",c="resize",b="_applyOrientation",a="_applyPageStep",B="PositiveInteger",A="_applyPosition",z="scrollbar",y="scroll",x="Integer",w="execute",v="visible",u="right",t="up",s="hidden",q="left",r="down",o="vertical",p="button-begin",m="button-end",n="horizontal",l="slider";qx.Class.define(d,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(C){qx.ui.core.Widget.call(this);this._createChildControl(p);this._createChildControl(l).addListener(c,this._onResizeSlider,this);this._createChildControl(m);if(C!=null){this.setOrientation(C);}
else {this.initOrientation();}
;}
,properties:{appearance:{refine:true,init:z},orientation:{check:[n,o],init:n,apply:b},maximum:{check:B,apply:f,init:100},position:{check:i,init:0,apply:A,event:y},singleStep:{check:x,init:20},pageStep:{check:x,init:10,apply:a},knobFactor:{check:k,apply:h,nullable:true}},members:{__AR:2,__AS:0,_computeSizeHint:function(){var D=qx.ui.core.Widget.prototype._computeSizeHint.call(this);if(this.getOrientation()===n){this.__AS=D.minWidth;D.minWidth=0;}
else {this.__AS=D.minHeight;D.minHeight=0;}
;return D;}
,renderLayout:function(E,top,F,G){var I=qx.ui.core.Widget.prototype.renderLayout.call(this,E,top,F,G);var H=this.getOrientation()===n;if(this.__AS>=(H?F:G)){this.getChildControl(p).setVisibility(s);this.getChildControl(m).setVisibility(s);}
else {this.getChildControl(p).setVisibility(v);this.getChildControl(m).setVisibility(v);}
;return I;}
,_createChildControlImpl:function(J,K){var L;switch(J){case l:L=new qx.ui.core.scroll.ScrollSlider();L.setPageStep(100);L.setFocusable(false);L.addListener(j,this._onChangeSliderValue,this);this._add(L,{flex:1});break;case p:L=new qx.ui.form.RepeatButton();L.setFocusable(false);L.addListener(w,this._onExecuteBegin,this);this._add(L);break;case m:L=new qx.ui.form.RepeatButton();L.setFocusable(false);L.addListener(w,this._onExecuteEnd,this);this._add(L);break;};return L||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,J);}
,_applyMaximum:function(M){this.getChildControl(l).setMaximum(M);}
,_applyPosition:function(N){this.getChildControl(l).setValue(N);}
,_applyKnobFactor:function(O){this.getChildControl(l).setKnobFactor(O);}
,_applyPageStep:function(P){this.getChildControl(l).setPageStep(P);}
,_applyOrientation:function(Q,R){var S=this._getLayout();if(S){S.dispose();}
;if(Q===n){this._setLayout(new qx.ui.layout.HBox());this.setAllowStretchX(true);this.setAllowStretchY(false);this.replaceState(o,n);this.getChildControl(p).replaceState(t,q);this.getChildControl(m).replaceState(r,u);}
else {this._setLayout(new qx.ui.layout.VBox());this.setAllowStretchX(false);this.setAllowStretchY(true);this.replaceState(n,o);this.getChildControl(p).replaceState(q,t);this.getChildControl(m).replaceState(u,r);}
;this.getChildControl(l).setOrientation(Q);}
,scrollTo:function(T){this.getChildControl(l).slideTo(T);}
,scrollBy:function(U){this.getChildControl(l).slideBy(U);}
,scrollBySteps:function(V){var W=this.getSingleStep();this.getChildControl(l).slideBy(V*W);}
,_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());}
,_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());}
,_onChangeSliderValue:function(e){this.setPosition(e.getData());}
,_onResizeSlider:function(e){var X=this.getChildControl(l).getChildControl(g);var bb=X.getSizeHint();var Y=false;var ba=this.getChildControl(l).getInnerSize();if(this.getOrientation()==o){if(ba.height<bb.minHeight+this.__AR){Y=true;}
;}
else {if(ba.width<bb.minWidth+this.__AR){Y=true;}
;}
;if(Y){X.exclude();}
else {X.show();}
;}
}});}
)();
(function(){var l="",k="qx.ui.form.MForm",j="_applyValid",i="changeRequired",h="changeValid",g="Boolean",f="changeLocale",d="changeInvalidMessage",c="String",b="invalid",a="qx.dynlocale";qx.Mixin.define(k,{construct:function(){if(qx.core.Environment.get(a)){qx.locale.Manager.getInstance().addListener(f,this.__kT,this);}
;}
,properties:{valid:{check:g,init:true,apply:j,event:h},required:{check:g,init:false,event:i},invalidMessage:{check:c,init:l,event:d},requiredInvalidMessage:{check:c,nullable:true,event:d}},members:{_applyValid:function(m,n){m?this.removeState(b):this.addState(b);}
,__kT:qx.core.Environment.select(a,{"true":function(e){var o=this.getInvalidMessage();if(o&&o.translate){this.setInvalidMessage(o.translate());}
;var p=this.getRequiredInvalidMessage();if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());}
;}
,"false":null})},destruct:function(){if(qx.core.Environment.get(a)){qx.locale.Manager.getInstance().removeListener(f,this.__kT,this);}
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
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;}
,resetValue:function(){}
,getValue:function(){}
}});}
)();
(function(){var k="slider",j="mousedown",i="PageUp",h="mouseout",g="x",f='qx.event.type.Data',d="Left",c="Down",b="Up",a="dblclick",X="qx.ui.form.Slider",W="PageDown",V="mousewheel",U="_applyValue",T="_applyKnobFactor",S="End",R="height",Q="y",P="Right",O="width",r="_applyOrientation",s="Home",p="mouseover",q="floor",n="_applyMinimum",o="click",l="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",m="keypress",u="ceil",v="losecapture",C="contextmenu",A="_applyMaximum",G="Number",E="changeMaximum",K="changeMinimum",I="pressed",x="px",N="changeValue",M="interval",L="mousemove",w="resize",y="hovered",z="left",B="top",D="mouseup",F="Integer",H="vertical",J="horizontal",t="knob";qx.Class.define(X,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(Y){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.Canvas());this.addListener(m,this._onKeyPress);this.addListener(V,this._onMouseWheel);this.addListener(j,this._onMouseDown);this.addListener(D,this._onMouseUp);this.addListener(v,this._onMouseUp);this.addListener(w,this._onUpdate);this.addListener(C,this._onStopEvent);this.addListener(o,this._onStopEvent);this.addListener(a,this._onStopEvent);if(Y!=null){this.setOrientation(Y);}
else {this.initOrientation();}
;}
,events:{changeValue:f},properties:{appearance:{refine:true,init:k},focusable:{refine:true,init:true},orientation:{check:[J,H],init:J,apply:r},value:{check:l,init:0,apply:U,nullable:true},minimum:{check:F,init:0,apply:n,event:K},maximum:{check:F,init:100,apply:A,event:E},singleStep:{check:F,init:1},pageStep:{check:F,init:10},knobFactor:{check:G,apply:T,nullable:true}},members:{__AT:null,__AU:null,__AV:null,__AW:null,__AX:null,__AY:null,__Ba:null,__Bb:null,__iI:null,__Bc:null,__Bd:null,__Be:null,_forwardStates:{invalid:true},_createChildControlImpl:function(ba,bb){var bc;switch(ba){case t:bc=new qx.ui.core.Widget();bc.addListener(w,this._onUpdate,this);bc.addListener(p,this._onMouseOver);bc.addListener(h,this._onMouseOut);this._add(bc);break;};return bc||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,ba);}
,_onMouseOver:function(e){this.addState(y);}
,_onMouseOut:function(e){this.removeState(y);}
,_onMouseWheel:function(e){var bf=this.getOrientation()===J?g:Q;var be=e.getWheelDelta(bf);var bd=be>0?1:be<0?-1:0;this.slideBy(bd*this.getSingleStep());e.stop();}
,_onKeyPress:function(e){var bh=this.getOrientation()===J;var bg=bh?d:b;var forward=bh?P:c;switch(e.getKeyIdentifier()){case forward:this.slideForward();break;case bg:this.slideBack();break;case W:this.slidePageForward();break;case i:this.slidePageBack();break;case s:this.slideToBegin();break;case S:this.slideToEnd();break;default:return;};e.stop();}
,_onMouseDown:function(e){if(this.__AW){return;}
;var bk=this.__mc;var bi=this.getChildControl(t);var bj=bk?z:B;var bm=bk?e.getDocumentLeft():e.getDocumentTop();var bn=this.__AT=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bj];var bl=this.__AU=qx.bom.element.Location.get(bi.getContainerElement().getDomElement())[bj];if(e.getTarget()===bi){this.__AW=true;if(!this.__Bc){this.__Bc=new qx.event.Timer(100);this.__Bc.addListener(M,this._fireValue,this);}
;this.__Bc.start();this.__AX=bm+bn-bl;bi.addState(I);}
else {this.__AY=true;this.__Ba=bm<=bl?-1:1;this.__Bg(e);this._onInterval();if(!this.__iI){this.__iI=new qx.event.Timer(100);this.__iI.addListener(M,this._onInterval,this);}
;this.__iI.start();}
;this.addListener(L,this._onMouseMove);this.capture();e.stopPropagation();}
,_onMouseUp:function(e){if(this.__AW){this.releaseCapture();delete this.__AW;this.__Bc.stop();this._fireValue();delete this.__AX;this.getChildControl(t).removeState(I);if(e.getType()===D){var bp;var bq;var bo;if(this.__mc){bp=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__AT);bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[B];bq=e.getDocumentTop()-(bo+this.getChildControl(t).getBounds().top);}
else {bp=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__AT);bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[z];bq=e.getDocumentLeft()-(bo+this.getChildControl(t).getBounds().left);}
;if(bq<0||bq>this.__AV||bp<0||bp>this.__AV){this.getChildControl(t).removeState(y);}
;}
;}
else if(this.__AY){this.__iI.stop();this.releaseCapture();delete this.__AY;delete this.__Ba;delete this.__Bb;}
;this.removeListener(L,this._onMouseMove);if(e.getType()===D){e.stopPropagation();}
;}
,_onMouseMove:function(e){if(this.__AW){var bs=this.__mc?e.getDocumentLeft():e.getDocumentTop();var br=bs-this.__AX;this.slideTo(this._positionToValue(br));}
else if(this.__AY){this.__Bg(e);}
;e.stopPropagation();}
,_onInterval:function(e){var bt=this.getValue()+(this.__Ba*this.getPageStep());if(bt<this.getMinimum()){bt=this.getMinimum();}
else if(bt>this.getMaximum()){bt=this.getMaximum();}
;var bu=this.__Ba==-1;if((bu&&bt<=this.__Bb)||(!bu&&bt>=this.__Bb)){bt=this.__Bb;}
;this.slideTo(bt);}
,_onUpdate:function(e){var bw=this.getInnerSize();var bx=this.getChildControl(t).getBounds();var bv=this.__mc?O:R;this._updateKnobSize();this.__Bf=bw[bv]-bx[bv];this.__AV=bx[bv];this._updateKnobPosition();}
,__mc:false,__Bf:0,__Bg:function(e){var by=this.__mc;var bF=by?e.getDocumentLeft():e.getDocumentTop();var bH=this.__AT;var bz=this.__AU;var bJ=this.__AV;var bG=bF-bH;if(bF>=bz){bG-=bJ;}
;var bD=this._positionToValue(bG);var bA=this.getMinimum();var bB=this.getMaximum();if(bD<bA){bD=bA;}
else if(bD>bB){bD=bB;}
else {var bE=this.getValue();var bC=this.getPageStep();var bI=this.__Ba<0?q:u;bD=bE+(Math[bI]((bD-bE)/bC)*bC);}
;if(this.__Bb==null||(this.__Ba==-1&&bD<=this.__Bb)||(this.__Ba==1&&bD>=this.__Bb)){this.__Bb=bD;}
;}
,_positionToValue:function(bK){var bL=this.__Bf;if(bL==null||bL==0){return 0;}
;var bN=bK/bL;if(bN<0){bN=0;}
else if(bN>1){bN=1;}
;var bM=this.getMaximum()-this.getMinimum();return this.getMinimum()+Math.round(bM*bN);}
,_valueToPosition:function(bO){var bP=this.__Bf;if(bP==null){return 0;}
;var bQ=this.getMaximum()-this.getMinimum();if(bQ==0){return 0;}
;var bO=bO-this.getMinimum();var bR=bO/bQ;if(bR<0){bR=0;}
else if(bR>1){bR=1;}
;return Math.round(bP*bR);}
,_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));}
,_setKnobPosition:function(bS){var bT=this.getChildControl(t).getContainerElement();if(this.__mc){bT.setStyle(z,bS+x,true);}
else {bT.setStyle(B,bS+x,true);}
;}
,_updateKnobSize:function(){var bV=this.getKnobFactor();if(bV==null){return;}
;var bU=this.getInnerSize();if(bU==null){return;}
;if(this.__mc){this.getChildControl(t).setWidth(Math.round(bV*bU.width));}
else {this.getChildControl(t).setHeight(Math.round(bV*bU.height));}
;}
,slideToBegin:function(){this.slideTo(this.getMinimum());}
,slideToEnd:function(){this.slideTo(this.getMaximum());}
,slideForward:function(){this.slideBy(this.getSingleStep());}
,slideBack:function(){this.slideBy(-this.getSingleStep());}
,slidePageForward:function(){this.slideBy(this.getPageStep());}
,slidePageBack:function(){this.slideBy(-this.getPageStep());}
,slideBy:function(bW){this.slideTo(this.getValue()+bW);}
,slideTo:function(bX){if(bX<this.getMinimum()){bX=this.getMinimum();}
else if(bX>this.getMaximum()){bX=this.getMaximum();}
else {bX=this.getMinimum()+Math.round((bX-this.getMinimum())/this.getSingleStep())*this.getSingleStep();}
;this.setValue(bX);}
,_applyOrientation:function(bY,ca){var cb=this.getChildControl(t);this.__mc=bY===J;if(this.__mc){this.removeState(H);cb.removeState(H);this.addState(J);cb.addState(J);cb.setLayoutProperties({top:0,right:null,bottom:0});}
else {this.removeState(J);cb.removeState(J);this.addState(H);cb.addState(H);cb.setLayoutProperties({right:0,bottom:null,left:0});}
;this._updateKnobPosition();}
,_applyKnobFactor:function(cc,cd){if(cc!=null){this._updateKnobSize();}
else {if(this.__mc){this.getChildControl(t).resetWidth();}
else {this.getChildControl(t).resetHeight();}
;}
;}
,_applyValue:function(ce,cf){if(ce!=null){this._updateKnobPosition();if(this.__AW){this.__Be=[ce,cf];}
else {this.fireEvent(N,qx.event.type.Data,[ce,cf]);}
;}
else {this.resetValue();}
;}
,_fireValue:function(){if(!this.__Be){return;}
;var cg=this.__Be;this.__Be=null;this.fireEvent(N,qx.event.type.Data,cg);}
,_applyMinimum:function(ch,ci){if(this.getValue()<ch){this.setValue(ch);}
;this._updateKnobPosition();}
,_applyMaximum:function(cj,ck){if(this.getValue()>cj){this.setValue(cj);}
;this._updateKnobPosition();}
}});}
)();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);this.removeListener(a,this._onKeyPress);this.removeListener(c,this._onMouseWheel);}
,members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);if(this.getOrientation()===d){g.width=0;}
else {g.height=0;}
;return g;}
}});}
)();
(function(){var n="toolTipText",m="icon",l="label",k="qx.ui.core.MExecutable",j="value",h="qx.event.type.Event",g="_applyCommand",f="enabled",d="menu",c="changeCommand",a="qx.ui.core.Command",b="execute";qx.Mixin.define(k,{events:{"execute":h},properties:{command:{check:a,apply:g,event:c,nullable:true}},members:{__lN:null,__lO:false,__lP:null,_bindableProperties:[f,l,m,n,j,d],execute:function(){var o=this.getCommand();if(o){if(this.__lO){this.__lO=false;}
else {this.__lO=true;o.execute(this);}
;}
;this.fireEvent(b);}
,__lQ:function(e){if(this.__lO){this.__lO=false;return;}
;this.__lO=true;this.execute();}
,_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__lP);}
;if(p!=null){this.__lP=p.addListener(b,this.__lQ,this);}
;var t=this.__lN;if(t==null){this.__lN=t={};}
;var u;for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];if(q!=null&&!q.isDisposed()&&t[s]!=null){q.removeBinding(t[s]);t[s]=null;}
;if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);if(r==null){u=this.get(s);if(u==null){this.syncAppearance();u=qx.util.PropertyUtil.getThemeValue(this,s);}
;}
else {u=null;}
;t[s]=p.bind(s,this,s);if(u){this.set(s,u);}
;}
;}
;}
},destruct:function(){this._applyCommand(null,this.getCommand());this.__lN=null;}
});}
)();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;}
,getCommand:function(){}
,execute:function(){}
}});}
)();
(function(){var o="dblclick",n="qx.ui.form.Button",m="mouseup",l="mousedown",k="mouseover",j="mouseout",i="keydown",h="button",g="keyup",f="Enter",b="Space",d="hovered",c="abandoned",a="pressed";qx.Class.define(n,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(p,q,r){qx.ui.basic.Atom.call(this,p,q);if(r!=null){this.setCommand(r);}
;this.addListener(k,this._onMouseOver);this.addListener(j,this._onMouseOut);this.addListener(l,this._onMouseDown);this.addListener(m,this._onMouseUp);this.addListener(i,this._onKeyDown);this.addListener(g,this._onKeyUp);this.addListener(o,this._onStopEvent);}
,properties:{appearance:{refine:true,init:h},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(c)){return;}
;this.addState(a);}
,release:function(){if(this.hasState(a)){this.removeState(a);}
;}
,reset:function(){this.removeState(a);this.removeState(c);this.removeState(d);}
,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;if(this.hasState(c)){this.removeState(c);this.addState(a);}
;this.addState(d);}
,_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;this.removeState(d);if(this.hasState(a)){this.removeState(a);this.addState(c);}
;}
,_onMouseDown:function(e){if(!e.isLeftPressed()){return;}
;e.stopPropagation();this.capture();this.removeState(c);this.addState(a);}
,_onMouseUp:function(e){this.releaseCapture();var s=this.hasState(a);var t=this.hasState(c);if(s){this.removeState(a);}
;if(t){this.removeState(c);}
else {this.addState(d);if(s){this.execute();}
;}
;e.stopPropagation();}
,_onKeyDown:function(e){switch(e.getKeyIdentifier()){case f:case b:this.removeState(c);this.addState(a);e.stopPropagation();};}
,_onKeyUp:function(e){switch(e.getKeyIdentifier()){case f:case b:if(this.hasState(a)){this.removeState(c);this.removeState(a);this.execute();e.stopPropagation();}
;};}
}});}
)();
(function(){var n="press",m="qx.ui.form.RepeatButton",l="release",k="__iI",j="interval",i="execute",h="Enter",g="Space",f="hovered",d="qx.event.type.Event",a="Integer",c="abandoned",b="pressed";qx.Class.define(m,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);this.__iI=new qx.event.AcceleratingTimer();this.__iI.addListener(j,this._onInterval,this);}
,events:{"execute":d,"press":d,"release":d},properties:{interval:{check:a,init:100},firstInterval:{check:a,init:500},minTimer:{check:a,init:20},timerDecrease:{check:a,init:2}},members:{__ov:null,__iI:null,press:function(){if(this.isEnabled()){if(!this.hasState(b)){this.__ow();}
;this.removeState(c);this.addState(b);}
;}
,release:function(q){if(!this.isEnabled()){return;}
;if(this.hasState(b)){if(!this.__ov){this.execute();}
;}
;this.removeState(b);this.removeState(c);this.__ox();}
,_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);if(!r){this.removeState(b);this.removeState(c);this.__ox();}
;}
,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;if(this.hasState(c)){this.removeState(c);this.addState(b);this.__iI.start();}
;this.addState(f);}
,_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;this.removeState(f);if(this.hasState(b)){this.removeState(b);this.addState(c);this.__iI.stop();}
;}
,_onMouseDown:function(e){if(!e.isLeftPressed()){return;}
;this.capture();this.__ow();e.stopPropagation();}
,_onMouseUp:function(e){this.releaseCapture();if(!this.hasState(c)){this.addState(f);if(this.hasState(b)&&!this.__ov){this.execute();}
;}
;this.__ox();e.stopPropagation();}
,_onKeyUp:function(e){switch(e.getKeyIdentifier()){case h:case g:if(this.hasState(b)){if(!this.__ov){this.execute();}
;this.removeState(b);this.removeState(c);e.stopPropagation();this.__ox();}
;};}
,_onKeyDown:function(e){switch(e.getKeyIdentifier()){case h:case g:this.removeState(c);this.addState(b);e.stopPropagation();this.__ow();};}
,_onInterval:function(e){this.__ov=true;this.fireEvent(i);}
,__ow:function(){this.fireEvent(n);this.__ov=false;this.__iI.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();this.removeState(c);this.addState(b);}
,__ox:function(){this.fireEvent(l);this.__iI.stop();this.removeState(c);this.removeState(b);}
},destruct:function(){this._disposeObjects(k);}
});}
)();
(function(){var e="qx.event.type.Event",d="__iI",c="qx.event.AcceleratingTimer",b="interval",a="Integer";qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__iI=new qx.event.Timer(this.getInterval());this.__iI.addListener(b,this._onInterval,this);}
,events:{"interval":e},properties:{interval:{check:a,init:100},firstInterval:{check:a,init:500},minimum:{check:a,init:20},decrease:{check:a,init:2}},members:{__iI:null,__oy:null,start:function(){this.__iI.setInterval(this.getFirstInterval());this.__iI.start();}
,stop:function(){this.__iI.stop();this.__oy=null;}
,_onInterval:function(){this.__iI.stop();if(this.__oy==null){this.__oy=this.getInterval();}
;this.__oy=Math.max(this.getMinimum(),this.__oy-this.getDecrease());this.__iI.setInterval(this.__oy);this.__iI.start();this.fireEvent(b);}
},destruct:function(){this._disposeObjects(d);}
});}
)();
(function(){var s="Decorator",r="middle",q="_applyReversed",p="qx.debug",o="bottom",n="' is not supported by the HBox layout!",m="Boolean",k="flex",j="right",h="Integer",c="The property '",g="qx.ui.layout.HBox",f="width",b="center",a="top",e="left",d="_applyLayoutChange";qx.Class.define(g,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);if(t){this.setSpacing(t);}
;if(u){this.setAlignX(u);}
;if(v){this.setSeparator(v);}
;}
,properties:{alignX:{check:[e,b,j],init:e,apply:d},alignY:{check:[a,r,o],init:a,apply:d},spacing:{check:h,init:0,apply:d},separator:{check:s,nullable:true,apply:d},reversed:{check:m,init:false,apply:q}},members:{__lx:null,__kQ:null,__kR:null,__dY:null,_applyReversed:function(){this._invalidChildrenCache=true;this._applyLayoutChange();}
,__kS:function(){var B=this._getLayoutChildren();var length=B.length;var y=false;var w=this.__lx&&this.__lx.length!=length&&this.__kQ&&this.__lx;var z;var x=w?this.__lx:new Array(length);var A=w?this.__kQ:new Array(length);if(this.getReversed()){B=B.concat().reverse();}
;for(var i=0;i<length;i++){z=B[i].getLayoutProperties();if(z.width!=null){x[i]=parseFloat(z.width)/100;}
;if(z.flex!=null){A[i]=z.flex;y=true;}
else {A[i]=0;}
;}
;if(!w){this.__lx=x;this.__kQ=A;}
;this.__kR=y;this.__dY=B;delete this._invalidChildrenCache;}
,verifyLayoutProperty:qx.core.Environment.select(p,{"true":function(C,name,D){this.assert(name===k||name===f,c+name+n);if(name==f){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);}
else {this.assertNumber(D);this.assert(D>=0);}
;}
,"false":null}),renderLayout:function(E,F){if(this._invalidChildrenCache){this.__kS();}
;var L=this.__dY;var length=L.length;var U=qx.ui.layout.Util;var T=this.getSpacing();var X=this.getSeparator();if(X){var I=U.computeHorizontalSeparatorGaps(L,T,X);}
else {var I=U.computeHorizontalGaps(L,T,true);}
;var i,G,R,Q;var W=[];var M=I;for(i=0;i<length;i+=1){Q=this.__lx[i];R=Q!=null?Math.floor((E-I)*Q):L[i].getSizeHint().width;W.push(R);M+=R;}
;if(this.__kR&&M!=E){var O={};var S,V;for(i=0;i<length;i+=1){S=this.__kQ[i];if(S>0){N=L[i].getSizeHint();O[i]={min:N.minWidth,value:W[i],max:N.maxWidth,flex:S};}
;}
;var J=U.computeFlexOffsets(O,E,M);for(i in J){V=J[i].offset;W[i]+=V;M+=V;}
;}
;var bc=L[0].getMarginLeft();if(M<E&&this.getAlignX()!=e){bc=E-M;if(this.getAlignX()===b){bc=Math.round(bc/2);}
;}
;var N,top,H,R,K,ba,P;var T=this.getSpacing();this._clearSeparators();if(X){var Y=qx.theme.manager.Decoration.getInstance().resolve(X).getInsets();var bb=Y.left+Y.right;}
;for(i=0;i<length;i+=1){G=L[i];R=W[i];N=G.getSizeHint();ba=G.getMarginTop();P=G.getMarginBottom();H=Math.max(N.minHeight,Math.min(F-ba-P,N.maxHeight));top=U.computeVerticalAlignOffset(G.getAlignY()||this.getAlignY(),H,F,ba,P);if(i>0){if(X){bc+=K+T;this._renderSeparator(X,{left:bc,top:0,width:bb,height:F});bc+=bb+T+G.getMarginLeft();}
else {bc+=U.collapseMargins(T,K,G.getMarginLeft());}
;}
;G.renderLayout(bc,top,R,H);bc+=R;K=G.getMarginRight();}
;}
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kS();}
;var bj=qx.ui.layout.Util;var br=this.__dY;var bd=0,bk=0,bh=0;var bg=0,bi=0;var bo,be,bq;for(var i=0,l=br.length;i<l;i+=1){bo=br[i];be=bo.getSizeHint();bk+=be.width;var bn=this.__kQ[i];var bf=this.__lx[i];if(bn){bd+=be.minWidth;}
else if(bf){bh=Math.max(bh,Math.round(be.minWidth/bf));}
else {bd+=be.width;}
;bq=bo.getMarginTop()+bo.getMarginBottom();if((be.height+bq)>bi){bi=be.height+bq;}
;if((be.minHeight+bq)>bg){bg=be.minHeight+bq;}
;}
;bd+=bh;var bm=this.getSpacing();var bp=this.getSeparator();if(bp){var bl=bj.computeHorizontalSeparatorGaps(br,bm,bp);}
else {var bl=bj.computeHorizontalGaps(br,bm,true);}
;return {minWidth:bd+bl,width:bk+bl,minHeight:bg,height:bi};}
},destruct:function(){this.__lx=this.__kQ=this.__dY=null;}
});}
)();
(function(){var s="Decorator",r="center",q="_applyReversed",p="qx.debug",o="bottom",n="' is not supported by the VBox layout!",m="qx.ui.layout.VBox",k="flex",j="Integer",h="The property '",c="right",g="Boolean",f="left",b="height",a="middle",e="top",d="_applyLayoutChange";qx.Class.define(m,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);if(t){this.setSpacing(t);}
;if(u){this.setAlignY(u);}
;if(v){this.setSeparator(v);}
;}
,properties:{alignY:{check:[e,a,o],init:e,apply:d},alignX:{check:[f,r,c],init:f,apply:d},spacing:{check:j,init:0,apply:d},separator:{check:s,nullable:true,apply:d},reversed:{check:g,init:false,apply:q}},members:{__kP:null,__kQ:null,__kR:null,__dY:null,_applyReversed:function(){this._invalidChildrenCache=true;this._applyLayoutChange();}
,__kS:function(){var B=this._getLayoutChildren();var length=B.length;var x=false;var w=this.__kP&&this.__kP.length!=length&&this.__kQ&&this.__kP;var z;var y=w?this.__kP:new Array(length);var A=w?this.__kQ:new Array(length);if(this.getReversed()){B=B.concat().reverse();}
;for(var i=0;i<length;i++){z=B[i].getLayoutProperties();if(z.height!=null){y[i]=parseFloat(z.height)/100;}
;if(z.flex!=null){A[i]=z.flex;x=true;}
else {A[i]=0;}
;}
;if(!w){this.__kP=y;this.__kQ=A;}
;this.__kR=x;this.__dY=B;delete this._invalidChildrenCache;}
,verifyLayoutProperty:qx.core.Environment.select(p,{"true":function(C,name,D){this.assert(name===k||name===b,h+name+n);if(name==b){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);}
else {this.assertNumber(D);this.assert(D>=0);}
;}
,"false":null}),renderLayout:function(E,F){if(this._invalidChildrenCache){this.__kS();}
;var M=this.__dY;var length=M.length;var W=qx.ui.layout.Util;var V=this.getSpacing();var ba=this.getSeparator();if(ba){var J=W.computeVerticalSeparatorGaps(M,V,ba);}
else {var J=W.computeVerticalGaps(M,V,true);}
;var i,H,I,Q;var R=[];var X=J;for(i=0;i<length;i+=1){Q=this.__kP[i];I=Q!=null?Math.floor((F-J)*Q):M[i].getSizeHint().height;R.push(I);X+=I;}
;if(this.__kR&&X!=F){var O={};var U,Y;for(i=0;i<length;i+=1){U=this.__kQ[i];if(U>0){N=M[i].getSizeHint();O[i]={min:N.minHeight,value:R[i],max:N.maxHeight,flex:U};}
;}
;var K=W.computeFlexOffsets(O,F,X);for(i in K){Y=K[i].offset;R[i]+=Y;X+=Y;}
;}
;var top=M[0].getMarginTop();if(X<F&&this.getAlignY()!=e){top=F-X;if(this.getAlignY()===a){top=Math.round(top/2);}
;}
;var N,bc,S,I,P,T,L;this._clearSeparators();if(ba){var bb=qx.theme.manager.Decoration.getInstance().resolve(ba).getInsets();var G=bb.top+bb.bottom;}
;for(i=0;i<length;i+=1){H=M[i];I=R[i];N=H.getSizeHint();T=H.getMarginLeft();L=H.getMarginRight();S=Math.max(N.minWidth,Math.min(E-T-L,N.maxWidth));bc=W.computeHorizontalAlignOffset(H.getAlignX()||this.getAlignX(),S,E,T,L);if(i>0){if(ba){top+=P+V;this._renderSeparator(ba,{top:top,left:0,height:G,width:E});top+=G+V+H.getMarginTop();}
else {top+=W.collapseMargins(V,P,H.getMarginTop());}
;}
;H.renderLayout(bc,top,S,I);top+=I;P=H.getMarginBottom();}
;}
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kS();}
;var bj=qx.ui.layout.Util;var br=this.__dY;var bf=0,bi=0,bh=0;var bd=0,bk=0;var bo,be,bq;for(var i=0,l=br.length;i<l;i+=1){bo=br[i];be=bo.getSizeHint();bi+=be.height;var bn=this.__kQ[i];var bg=this.__kP[i];if(bn){bf+=be.minHeight;}
else if(bg){bh=Math.max(bh,Math.round(be.minHeight/bg));}
else {bf+=be.height;}
;bq=bo.getMarginLeft()+bo.getMarginRight();if((be.width+bq)>bk){bk=be.width+bq;}
;if((be.minWidth+bq)>bd){bd=be.minWidth+bq;}
;}
;bf+=bh;var bm=this.getSpacing();var bp=this.getSeparator();if(bp){var bl=bj.computeVerticalSeparatorGaps(br,bm,bp);}
else {var bl=bj.computeVerticalGaps(br,bm,true);}
;return {minHeight:bf+bl,height:bi+bl,minWidth:bd,width:bk};}
},destruct:function(){this.__kP=this.__kQ=this.__dY=null;}
});}
)();
(function(){var k="touchmove",j="scrollY",i="Left",h="mousewheel",g="scrollbarX",f="event.touch",d="scrollarea",c="y",b="vertical",a="scrollX",F="touchstart",E="horizontal",D="qx.ui.core.scroll.AbstractScrollArea",C="abstract",B="update",A="scrollbarY",z="Top",y="_computeScrollbars",x="getDocument",w="changeVisibility",r="off",s="x",p="scroll",q="scrollbar-",n="on",o="corner",l="os.scrollBarOverlayed",m="auto",t="scrollbar-y",u="scrollbar-x",v="pane";qx.Class.define(D,{extend:qx.ui.core.Widget,include:[qx.ui.core.scroll.MScrollBarFactory,qx.ui.core.scroll.MWheelHandling],type:C,construct:function(){qx.ui.core.Widget.call(this);if(qx.core.Environment.get(l)){this._setLayout(new qx.ui.layout.Canvas());}
else {var G=new qx.ui.layout.Grid();G.setColumnFlex(0,1);G.setRowFlex(0,1);this._setLayout(G);}
;this.addListener(h,this._onMouseWheel,this);if(qx.core.Environment.get(f)){this.addListener(k,this._onTouchMove,this);this.addListener(F,function(){this.__cS={"x":0,"y":0};}
,this);this.__cS={};this.__me={};}
;}
,properties:{appearance:{refine:true,init:d},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[m,n,r],init:m,themeable:true,apply:y},scrollbarY:{check:[m,n,r],init:m,themeable:true,apply:y},scrollbar:{group:[g,A]}},members:{__cS:null,__me:null,_createChildControlImpl:function(H,I){var J;switch(H){case v:J=new qx.ui.core.scroll.ScrollPane();J.addListener(B,this._computeScrollbars,this);J.addListener(a,this._onScrollPaneX,this);J.addListener(j,this._onScrollPaneY,this);if(qx.core.Environment.get(l)){this._add(J,{edge:0});}
else {this._add(J,{row:0,column:0});}
;break;case u:J=this._createScrollBar(E);J.setMinWidth(0);J.exclude();J.addListener(p,this._onScrollBarX,this);J.addListener(w,this._onChangeScrollbarXVisibility,this);if(qx.core.Environment.get(l)){J.setMinHeight(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);this._add(J,{bottom:0,right:0,left:0});}
else {this._add(J,{row:1,column:0});}
;break;case t:J=this._createScrollBar(b);J.setMinHeight(0);J.exclude();J.addListener(p,this._onScrollBarY,this);J.addListener(w,this._onChangeScrollbarYVisibility,this);if(qx.core.Environment.get(l)){J.setMinWidth(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);this._add(J,{right:0,bottom:0,top:0});}
else {this._add(J,{row:0,column:1});}
;break;case o:J=new qx.ui.core.Widget();J.setWidth(0);J.setHeight(0);J.exclude();if(!qx.core.Environment.get(l)){this._add(J,{row:1,column:1});}
;break;};return J||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,H);}
,getPaneSize:function(){return this.getChildControl(v).getInnerSize();}
,getItemTop:function(K){return this.getChildControl(v).getItemTop(K);}
,getItemBottom:function(L){return this.getChildControl(v).getItemBottom(L);}
,getItemLeft:function(M){return this.getChildControl(v).getItemLeft(M);}
,getItemRight:function(N){return this.getChildControl(v).getItemRight(N);}
,scrollToX:function(O){qx.ui.core.queue.Manager.flush();this.getChildControl(u).scrollTo(O);}
,scrollByX:function(P){qx.ui.core.queue.Manager.flush();this.getChildControl(u).scrollBy(P);}
,getScrollX:function(){var Q=this.getChildControl(u,true);return Q?Q.getPosition():0;}
,scrollToY:function(R){qx.ui.core.queue.Manager.flush();this.getChildControl(t).scrollTo(R);}
,scrollByY:function(S){qx.ui.core.queue.Manager.flush();this.getChildControl(t).scrollBy(S);}
,getScrollY:function(){var T=this.getChildControl(t,true);return T?T.getPosition():0;}
,_onScrollBarX:function(e){this.getChildControl(v).scrollToX(e.getData());}
,_onScrollBarY:function(e){this.getChildControl(v).scrollToY(e.getData());}
,_onScrollPaneX:function(e){this.scrollToX(e.getData());}
,_onScrollPaneY:function(e){this.scrollToY(e.getData());}
,_onTouchMove:function(e){this._onTouchMoveDirectional(s,e);this._onTouchMoveDirectional(c,e);e.stop();}
,_onTouchMoveDirectional:function(U,e){var V=(U==s?i:z);var X=this.getChildControl(q+U,true);var Y=this._isChildControlVisible(q+U);if(Y&&X){if(this.__cS[U]==0){var W=0;}
else {var W=-(e[x+V]()-this.__cS[U]);}
;this.__cS[U]=e[x+V]();X.scrollBy(W);if(this.__me[U]){clearTimeout(this.__me[U]);this.__me[U]=null;}
;this.__me[U]=setTimeout(qx.lang.Function.bind(function(ba){this.__mf(ba,U);}
,this,W),100);}
;}
,__mf:function(bb,bc){this.__me[bc]=null;var be=this._isChildControlVisible(q+bc);if(bb==0||!be){return;}
;if(bb>0){bb=Math.max(0,bb-3);}
else {bb=Math.min(0,bb+3);}
;this.__me[bc]=setTimeout(qx.lang.Function.bind(function(bf,bg){this.__mf(bf,bg);}
,this,bb,bc),20);var bd=this.getChildControl(q+bc,true);bd.scrollBy(bb);}
,_onChangeScrollbarXVisibility:function(e){var bh=this._isChildControlVisible(u);var bi=this._isChildControlVisible(t);if(!bh){this.scrollToX(0);}
;bh&&bi?this._showChildControl(o):this._excludeChildControl(o);}
,_onChangeScrollbarYVisibility:function(e){var bj=this._isChildControlVisible(u);var bk=this._isChildControlVisible(t);if(!bk){this.scrollToY(0);}
;bj&&bk?this._showChildControl(o):this._excludeChildControl(o);}
,_computeScrollbars:function(){var br=this.getChildControl(v);var content=br.getChildren()[0];if(!content){this._excludeChildControl(u);this._excludeChildControl(t);return;}
;var bl=this.getInnerSize();var bq=br.getInnerSize();var bo=br.getScrollSize();if(!bq||!bo){return;}
;var bs=this.getScrollbarX();var bt=this.getScrollbarY();if(bs===m&&bt===m){var bp=bo.width>bl.width;var bu=bo.height>bl.height;if((bp||bu)&&!(bp&&bu)){if(bp){bu=bo.height>bq.height;}
else if(bu){bp=bo.width>bq.width;}
;}
;}
else {var bp=bs===n;var bu=bt===n;if(bo.width>(bp?bq.width:bl.width)&&bs===m){bp=true;}
;if(bo.height>(bp?bq.height:bl.height)&&bt===m){bu=true;}
;}
;if(bp){var bn=this.getChildControl(u);bn.show();bn.setMaximum(Math.max(0,bo.width-bq.width));bn.setKnobFactor((bo.width===0)?0:bq.width/bo.width);}
else {this._excludeChildControl(u);}
;if(bu){var bm=this.getChildControl(t);bm.show();bm.setMaximum(Math.max(0,bo.height-bq.height));bm.setKnobFactor((bo.height===0)?0:bq.height/bo.height);}
else {this._excludeChildControl(t);}
;}
}});}
)();
(function(){var d="qx.nativeScrollBars",c="os.scrollBarOverlayed",b="osx",a="qx.bom.client.Scroll";qx.Bootstrap.define(a,{statics:{scrollBarOverlayed:function(){var e=qx.bom.element.Overflow.getScrollbarWidth();var f=qx.bom.client.OperatingSystem.getName()===b;var g=qx.core.Environment.get(d);return e==0&&f&&g;}
},defer:function(h){qx.core.Environment.add(c,h.scrollBarOverlayed);}
});}
)();
(function(){var n="' must be defined!",m="height",h="' is not supported by the Grid layout!",g="Invalid parameter 'column'",f="The property '",e="'",d="Value must be positive",c="qx.ui.layout.Grid",b="maxHeight",a="Cannot add widget '",M="width",L=") for '",K="'!. ",J="minHeight",I="' in this cell (",H=", ",G="The layout properties 'row' and 'column' of the child widget '",F="minWidth",E="maxWidth",D="Invalid parameter 'row'",u="There is already a widget '",v="vAlign",s="hAlign",t="bottom",q="Integer",r="_applyLayoutChange",o="center",p="middle",w="right",z="flex",B="qx.debug",A="top",C="left";qx.Class.define(c,{extend:qx.ui.layout.Abstract,construct:function(N,O){qx.ui.layout.Abstract.call(this);this.__mg=[];this.__mh=[];if(N){this.setSpacingX(N);}
;if(O){this.setSpacingY(O);}
;}
,properties:{spacingX:{check:q,init:0,apply:r},spacingY:{check:q,init:0,apply:r}},members:{__mi:null,__mg:null,__mh:null,__mj:null,__mk:null,__ml:null,__mm:null,__mn:null,__mo:null,verifyLayoutProperty:qx.core.Environment.select(B,{"true":function(P,name,Q){var R={"row":1,"column":1,"rowSpan":1,"colSpan":1};this.assert(R[name]==1,f+name+h);this.assertInteger(Q);this.assert(Q>=0,d);}
,"false":null}),__mp:function(){var X=[];var W=[];var Y=[];var U=-1;var T=-1;var bb=this._getLayoutChildren();for(var i=0,l=bb.length;i<l;i++){var V=bb[i];var ba=V.getLayoutProperties();var bc=ba.row;var S=ba.column;ba.colSpan=ba.colSpan||1;ba.rowSpan=ba.rowSpan||1;if(bc==null||S==null){throw new Error(G+V+n);}
;if(X[bc]&&X[bc][S]){throw new Error(a+V+K+u+X[bc][S]+I+bc+H+S+L+this+e);}
;for(var x=S;x<S+ba.colSpan;x++){for(var y=bc;y<bc+ba.rowSpan;y++){if(X[y]==undefined){X[y]=[];}
;X[y][x]=V;T=Math.max(T,x);U=Math.max(U,y);}
;}
;if(ba.rowSpan>1){Y.push(V);}
;if(ba.colSpan>1){W.push(V);}
;}
;for(var y=0;y<=U;y++){if(X[y]==undefined){X[y]=[];}
;}
;this.__mi=X;this.__mj=W;this.__mk=Y;this.__ml=U;this.__mm=T;this.__mn=null;this.__mo=null;delete this._invalidChildrenCache;}
,_setRowData:function(bd,be,bf){var bg=this.__mg[bd];if(!bg){this.__mg[bd]={};this.__mg[bd][be]=bf;}
else {bg[be]=bf;}
;}
,_setColumnData:function(bh,bi,bj){var bk=this.__mh[bh];if(!bk){this.__mh[bh]={};this.__mh[bh][bi]=bj;}
else {bk[bi]=bj;}
;}
,setSpacing:function(bl){this.setSpacingY(bl);this.setSpacingX(bl);return this;}
,setColumnAlign:function(bm,bn,bo){if(qx.core.Environment.get(B)){this.assertInteger(bm,g);this.assertInArray(bn,[C,o,w]);this.assertInArray(bo,[A,p,t]);}
;this._setColumnData(bm,s,bn);this._setColumnData(bm,v,bo);this._applyLayoutChange();return this;}
,getColumnAlign:function(bp){var bq=this.__mh[bp]||{};return {vAlign:bq.vAlign||A,hAlign:bq.hAlign||C};}
,setRowAlign:function(br,bs,bt){if(qx.core.Environment.get(B)){this.assertInteger(br,D);this.assertInArray(bs,[C,o,w]);this.assertInArray(bt,[A,p,t]);}
;this._setRowData(br,s,bs);this._setRowData(br,v,bt);this._applyLayoutChange();return this;}
,getRowAlign:function(bu){var bv=this.__mg[bu]||{};return {vAlign:bv.vAlign||A,hAlign:bv.hAlign||C};}
,getCellWidget:function(bw,bx){if(this._invalidChildrenCache){this.__mp();}
;var bw=this.__mi[bw]||{};return bw[bx]||null;}
,getRowCount:function(){if(this._invalidChildrenCache){this.__mp();}
;return this.__ml+1;}
,getColumnCount:function(){if(this._invalidChildrenCache){this.__mp();}
;return this.__mm+1;}
,getCellAlign:function(by,bz){var bF=A;var bD=C;var bE=this.__mg[by];var bB=this.__mh[bz];var bA=this.__mi[by][bz];if(bA){var bC={vAlign:bA.getAlignY(),hAlign:bA.getAlignX()};}
else {bC={};}
;if(bC.vAlign){bF=bC.vAlign;}
else if(bE&&bE.vAlign){bF=bE.vAlign;}
else if(bB&&bB.vAlign){bF=bB.vAlign;}
;;if(bC.hAlign){bD=bC.hAlign;}
else if(bB&&bB.hAlign){bD=bB.hAlign;}
else if(bE&&bE.hAlign){bD=bE.hAlign;}
;;return {vAlign:bF,hAlign:bD};}
,setColumnFlex:function(bG,bH){this._setColumnData(bG,z,bH);this._applyLayoutChange();return this;}
,getColumnFlex:function(bI){var bJ=this.__mh[bI]||{};return bJ.flex!==undefined?bJ.flex:0;}
,setRowFlex:function(bK,bL){this._setRowData(bK,z,bL);this._applyLayoutChange();return this;}
,getRowFlex:function(bM){var bN=this.__mg[bM]||{};var bO=bN.flex!==undefined?bN.flex:0;return bO;}
,setColumnMaxWidth:function(bP,bQ){this._setColumnData(bP,E,bQ);this._applyLayoutChange();return this;}
,getColumnMaxWidth:function(bR){var bS=this.__mh[bR]||{};return bS.maxWidth!==undefined?bS.maxWidth:Infinity;}
,setColumnWidth:function(bT,bU){this._setColumnData(bT,M,bU);this._applyLayoutChange();return this;}
,getColumnWidth:function(bV){var bW=this.__mh[bV]||{};return bW.width!==undefined?bW.width:null;}
,setColumnMinWidth:function(bX,bY){this._setColumnData(bX,F,bY);this._applyLayoutChange();return this;}
,getColumnMinWidth:function(ca){var cb=this.__mh[ca]||{};return cb.minWidth||0;}
,setRowMaxHeight:function(cc,cd){this._setRowData(cc,b,cd);this._applyLayoutChange();return this;}
,getRowMaxHeight:function(ce){var cf=this.__mg[ce]||{};return cf.maxHeight||Infinity;}
,setRowHeight:function(cg,ch){this._setRowData(cg,m,ch);this._applyLayoutChange();return this;}
,getRowHeight:function(ci){var cj=this.__mg[ci]||{};return cj.height!==undefined?cj.height:null;}
,setRowMinHeight:function(ck,cl){this._setRowData(ck,J,cl);this._applyLayoutChange();return this;}
,getRowMinHeight:function(cm){var cn=this.__mg[cm]||{};return cn.minHeight||0;}
,__mq:function(co){var cs=co.getSizeHint();var cr=co.getMarginLeft()+co.getMarginRight();var cq=co.getMarginTop()+co.getMarginBottom();var cp={height:cs.height+cq,width:cs.width+cr,minHeight:cs.minHeight+cq,minWidth:cs.minWidth+cr,maxHeight:cs.maxHeight+cq,maxWidth:cs.maxWidth+cr};return cp;}
,_fixHeightsRowSpan:function(ct){var cA=this.getSpacingY();for(var i=0,l=this.__mk.length;i<l;i++){var cH=this.__mk[i];var cD=this.__mq(cH);var cw=cH.getLayoutProperties();var cC=cw.row;var cM=cA*(cw.rowSpan-1);var cu=cM;var cx={};for(var j=0;j<cw.rowSpan;j++){var cB=cw.row+j;var cL=ct[cB];var cN=this.getRowFlex(cB);if(cN>0){cx[cB]={min:cL.minHeight,value:cL.height,max:cL.maxHeight,flex:cN};}
;cM+=cL.height;cu+=cL.minHeight;}
;if(cM<cD.height){if(!qx.lang.Object.isEmpty(cx)){var cy=qx.ui.layout.Util.computeFlexOffsets(cx,cD.height,cM);for(var k=0;k<cw.rowSpan;k++){var cJ=cy[cC+k]?cy[cC+k].offset:0;ct[cC+k].height+=cJ;}
;}
else {var cG=cA*(cw.rowSpan-1);var cE=cD.height-cG;var cK=Math.floor(cE/cw.rowSpan);var cI=0;var cv=0;for(var k=0;k<cw.rowSpan;k++){var cz=ct[cC+k].height;cI+=cz;if(cz<cK){cv++;}
;}
;var cF=Math.floor((cE-cI)/cv);for(var k=0;k<cw.rowSpan;k++){if(ct[cC+k].height<cK){ct[cC+k].height+=cF;}
;}
;}
;}
;if(cu<cD.minHeight){var cy=qx.ui.layout.Util.computeFlexOffsets(cx,cD.minHeight,cu);for(var j=0;j<cw.rowSpan;j++){var cJ=cy[cC+j]?cy[cC+j].offset:0;ct[cC+j].minHeight+=cJ;}
;}
;}
;}
,_fixWidthsColSpan:function(cO){var cS=this.getSpacingX();for(var i=0,l=this.__mj.length;i<l;i++){var cP=this.__mj[i];var cR=this.__mq(cP);var cU=cP.getLayoutProperties();var cQ=cU.column;var db=cS*(cU.colSpan-1);var cT=db;var cV={};var cX;for(var j=0;j<cU.colSpan;j++){var dc=cU.column+j;var da=cO[dc];var cY=this.getColumnFlex(dc);if(cY>0){cV[dc]={min:da.minWidth,value:da.width,max:da.maxWidth,flex:cY};}
;db+=da.width;cT+=da.minWidth;}
;if(db<cR.width){var cW=qx.ui.layout.Util.computeFlexOffsets(cV,cR.width,db);for(var j=0;j<cU.colSpan;j++){cX=cW[cQ+j]?cW[cQ+j].offset:0;cO[cQ+j].width+=cX;}
;}
;if(cT<cR.minWidth){var cW=qx.ui.layout.Util.computeFlexOffsets(cV,cR.minWidth,cT);for(var j=0;j<cU.colSpan;j++){cX=cW[cQ+j]?cW[cQ+j].offset:0;cO[cQ+j].minWidth+=cX;}
;}
;}
;}
,_getRowHeights:function(){if(this.__mn!=null){return this.__mn;}
;var dm=[];var df=this.__ml;var de=this.__mm;for(var dn=0;dn<=df;dn++){var dg=0;var di=0;var dh=0;for(var dl=0;dl<=de;dl++){var dd=this.__mi[dn][dl];if(!dd){continue;}
;var dj=dd.getLayoutProperties().rowSpan||0;if(dj>1){continue;}
;var dk=this.__mq(dd);if(this.getRowFlex(dn)>0){dg=Math.max(dg,dk.minHeight);}
else {dg=Math.max(dg,dk.height);}
;di=Math.max(di,dk.height);}
;var dg=Math.max(dg,this.getRowMinHeight(dn));var dh=this.getRowMaxHeight(dn);if(this.getRowHeight(dn)!==null){var di=this.getRowHeight(dn);}
else {var di=Math.max(dg,Math.min(di,dh));}
;dm[dn]={minHeight:dg,height:di,maxHeight:dh};}
;if(this.__mk.length>0){this._fixHeightsRowSpan(dm);}
;this.__mn=dm;return dm;}
,_getColWidths:function(){if(this.__mo!=null){return this.__mo;}
;var dt=[];var dq=this.__mm;var ds=this.__ml;for(var dy=0;dy<=dq;dy++){var dw=0;var dv=0;var dr=Infinity;for(var dz=0;dz<=ds;dz++){var dp=this.__mi[dz][dy];if(!dp){continue;}
;var du=dp.getLayoutProperties().colSpan||0;if(du>1){continue;}
;var dx=this.__mq(dp);if(this.getColumnFlex(dy)>0){dv=Math.max(dv,dx.minWidth);}
else {dv=Math.max(dv,dx.width);}
;dw=Math.max(dw,dx.width);}
;dv=Math.max(dv,this.getColumnMinWidth(dy));dr=this.getColumnMaxWidth(dy);if(this.getColumnWidth(dy)!==null){var dw=this.getColumnWidth(dy);}
else {var dw=Math.max(dv,Math.min(dw,dr));}
;dt[dy]={minWidth:dv,width:dw,maxWidth:dr};}
;if(this.__mj.length>0){this._fixWidthsColSpan(dt);}
;this.__mo=dt;return dt;}
,_getColumnFlexOffsets:function(dA){var dB=this.getSizeHint();var dF=dA-dB.width;if(dF==0){return {};}
;var dD=this._getColWidths();var dC={};for(var i=0,l=dD.length;i<l;i++){var dG=dD[i];var dE=this.getColumnFlex(i);if((dE<=0)||(dG.width==dG.maxWidth&&dF>0)||(dG.width==dG.minWidth&&dF<0)){continue;}
;dC[i]={min:dG.minWidth,value:dG.width,max:dG.maxWidth,flex:dE};}
;return qx.ui.layout.Util.computeFlexOffsets(dC,dA,dB.width);}
,_getRowFlexOffsets:function(dH){var dI=this.getSizeHint();var dL=dH-dI.height;if(dL==0){return {};}
;var dM=this._getRowHeights();var dJ={};for(var i=0,l=dM.length;i<l;i++){var dN=dM[i];var dK=this.getRowFlex(i);if((dK<=0)||(dN.height==dN.maxHeight&&dL>0)||(dN.height==dN.minHeight&&dL<0)){continue;}
;dJ[i]={min:dN.minHeight,value:dN.height,max:dN.maxHeight,flex:dK};}
;return qx.ui.layout.Util.computeFlexOffsets(dJ,dH,dI.height);}
,renderLayout:function(dO,dP){if(this._invalidChildrenCache){this.__mp();}
;var ee=qx.ui.layout.Util;var dR=this.getSpacingX();var dX=this.getSpacingY();var ej=this._getColWidths();var ei=this._getColumnFlexOffsets(dO);var dS=[];var el=this.__mm;var dQ=this.__ml;var ek;for(var em=0;em<=el;em++){ek=ei[em]?ei[em].offset:0;dS[em]=ej[em].width+ek;}
;var eb=this._getRowHeights();var ed=this._getRowFlexOffsets(dP);var es=[];for(var dY=0;dY<=dQ;dY++){ek=ed[dY]?ed[dY].offset:0;es[dY]=eb[dY].height+ek;}
;var et=0;for(var em=0;em<=el;em++){var top=0;for(var dY=0;dY<=dQ;dY++){var eg=this.__mi[dY][em];if(!eg){top+=es[dY]+dX;continue;}
;var dT=eg.getLayoutProperties();if(dT.row!==dY||dT.column!==em){top+=es[dY]+dX;continue;}
;var er=dR*(dT.colSpan-1);for(var i=0;i<dT.colSpan;i++){er+=dS[em+i];}
;var eh=dX*(dT.rowSpan-1);for(var i=0;i<dT.rowSpan;i++){eh+=es[dY+i];}
;var dU=eg.getSizeHint();var ep=eg.getMarginTop();var ef=eg.getMarginLeft();var ec=eg.getMarginBottom();var dW=eg.getMarginRight();var ea=Math.max(dU.minWidth,Math.min(er-ef-dW,dU.maxWidth));var eq=Math.max(dU.minHeight,Math.min(eh-ep-ec,dU.maxHeight));var en=this.getCellAlign(dY,em);var eo=et+ee.computeHorizontalAlignOffset(en.hAlign,ea,er,ef,dW);var dV=top+ee.computeVerticalAlignOffset(en.vAlign,eq,eh,ep,ec);eg.renderLayout(eo,dV,ea,eq);top+=es[dY]+dX;}
;et+=dS[em]+dR;}
;}
,invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);this.__mo=null;this.__mn=null;}
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__mp();}
;var ey=this._getColWidths();var eA=0,eB=0;for(var i=0,l=ey.length;i<l;i++){var eC=ey[i];if(this.getColumnFlex(i)>0){eA+=eC.minWidth;}
else {eA+=eC.width;}
;eB+=eC.width;}
;var eD=this._getRowHeights();var ew=0,ez=0;for(var i=0,l=eD.length;i<l;i++){var eE=eD[i];if(this.getRowFlex(i)>0){ew+=eE.minHeight;}
else {ew+=eE.height;}
;ez+=eE.height;}
;var ev=this.getSpacingX()*(ey.length-1);var eu=this.getSpacingY()*(eD.length-1);var ex={minWidth:eA+ev,width:eB+ev,minHeight:ew+eu,height:ez+eu};return ex;}
},destruct:function(){this.__mi=this.__mg=this.__mh=this.__mj=this.__mk=this.__mo=this.__mn=null;}
});}
)();
(function(){var m="scrollY",l="update",k="scrollX",j="_applyScrollX",i="_applyScrollY",h="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",g="appear",f="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",d="qx.event.type.Event",c="qx.ui.core.scroll.ScrollPane",a="scroll",b="resize";qx.Class.define(c,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);this.set({minWidth:0,minHeight:0});this._setLayout(new qx.ui.layout.Grow());this.addListener(b,this._onUpdate);var n=this.getContentElement();n.addListener(a,this._onScroll,this);n.addListener(g,this._onAppear,this);}
,events:{update:d},properties:{scrollX:{check:h,apply:j,event:k,init:0},scrollY:{check:f,apply:i,event:m,init:0}},members:{add:function(o){var p=this._getChildren()[0];if(p){this._remove(p);p.removeListener(b,this._onUpdate,this);}
;if(o){this._add(o);o.addListener(b,this._onUpdate,this);}
;}
,remove:function(q){if(q){this._remove(q);q.removeListener(b,this._onUpdate,this);}
;}
,getChildren:function(){return this._getChildren();}
,_onUpdate:function(e){this.fireEvent(l);}
,_onScroll:function(e){var r=this.getContentElement();this.setScrollX(r.getScrollX());this.setScrollY(r.getScrollY());}
,_onAppear:function(e){var v=this.getContentElement();var s=this.getScrollX();var t=v.getScrollX();if(s!=t){v.scrollToX(s);}
;var w=this.getScrollY();var u=v.getScrollY();if(w!=u){v.scrollToY(w);}
;}
,getItemTop:function(z){var top=0;do {top+=z.getBounds().top;z=z.getLayoutParent();}
while(z&&z!==this);return top;}
,getItemBottom:function(A){return this.getItemTop(A)+A.getBounds().height;}
,getItemLeft:function(B){var C=0;var parent;do {C+=B.getBounds().left;parent=B.getLayoutParent();if(parent){C+=parent.getInsets().left;}
;B=parent;}
while(B&&B!==this);return C;}
,getItemRight:function(D){return this.getItemLeft(D)+D.getBounds().width;}
,getScrollSize:function(){return this.getChildren()[0].getBounds();}
,getScrollMaxX:function(){var F=this.getInnerSize();var E=this.getScrollSize();if(F&&E){return Math.max(0,E.width-F.width);}
;return 0;}
,getScrollMaxY:function(){var H=this.getInnerSize();var G=this.getScrollSize();if(H&&G){return Math.max(0,G.height-H.height);}
;return 0;}
,scrollToX:function(I){var J=this.getScrollMaxX();if(I<0){I=0;}
else if(I>J){I=J;}
;this.setScrollX(I);}
,scrollToY:function(K){var L=this.getScrollMaxY();if(K<0){K=0;}
else if(K>L){K=L;}
;this.setScrollY(K);}
,scrollByX:function(x){this.scrollToX(this.getScrollX()+x);}
,scrollByY:function(y){this.scrollToY(this.getScrollY()+y);}
,_applyScrollX:function(M){this.getContentElement().scrollToX(M);}
,_applyScrollY:function(N){this.getContentElement().scrollToY(N);}
}});}
)();
(function(){var k="scrollY",j="The method 'getItemRight' is not implemented!",i="update",h="scrollX",g="The method 'getItemLeft' is not implemented!",f="The method 'getItemBottom' is not implemented!",d="The method 'getItemTop' is not implemented!",c="pane",b="os.scrollBarOverlayed",a="qx.ui.virtual.core.Scroller";qx.Class.define(a,{extend:qx.ui.core.scroll.AbstractScrollArea,construct:function(l,m,n,o){qx.ui.core.scroll.AbstractScrollArea.call(this);this.__AK=new qx.ui.virtual.core.Pane(l,m,n,o);this.__AK.addListener(i,this._computeScrollbars,this);this.__AK.addListener(h,this._onScrollPaneX,this);this.__AK.addListener(k,this._onScrollPaneY,this);if(qx.core.Environment.get(b)){this._add(this.__AK,{edge:0});}
else {this._add(this.__AK,{row:0,column:0});}
;}
,properties:{width:{refine:true,init:null},height:{refine:true,init:null}},members:{__AK:null,getPane:function(){return this.__AK;}
,_createChildControlImpl:function(p,q){if(p==c){return this.__AK;}
else {return qx.ui.core.scroll.AbstractScrollArea.prototype._createChildControlImpl.call(this,p);}
;}
,getItemTop:function(r){throw new Error(d);}
,getItemBottom:function(s){throw new Error(f);}
,getItemLeft:function(t){throw new Error(g);}
,getItemRight:function(u){throw new Error(j);}
,_onScrollBarX:function(e){this.__AK.setScrollX(e.getData());}
,_onScrollBarY:function(e){this.__AK.setScrollY(e.getData());}
},destruct:function(){this.__AK.dispose();this.__AK=null;}
});}
)();
(function(){var l="scrollY",k="mousedown",j="__zX",h="dblclick",g="qx.debug",f="__Ae",d="qx.event.type.Event",c="cellContextmenu",b="resize",a="scrollX",x="__zW",w="cellDblclick",v="qx.ui.virtual.core.Pane",u="click",t="cellClick",s="contextmenu",r="__Af",q="qx.event.type.Data",p="change",o="update",m="qx.ui.virtual.core.CellEvent",n="appear";qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(y,z,A,B){qx.ui.core.Widget.call(this);this.__zW=new qx.ui.virtual.core.Axis(A,y);this.__zX=new qx.ui.virtual.core.Axis(B,z);this.__zY=0;this.__Aa=0;this.__Ab=0;this.__Ac=0;this.__Ad={};this.__gT={};this.__Ae=new qx.ui.container.Composite();this.__Ae.setUserBounds(0,0,0,0);this._add(this.__Ae);this.__Af=[];this.__zW.addListener(p,this.fullUpdate,this);this.__zX.addListener(p,this.fullUpdate,this);this.addListener(b,this._onResize,this);this.addListenerOnce(n,this._onAppear,this);this.addListener(k,this._onMouseDown,this);this.addListener(u,this._onClick,this);this.addListener(h,this._onDblclick,this);this.addListener(s,this._onContextmenu,this);}
,events:{cellClick:m,cellContextmenu:m,cellDblclick:m,update:d,scrollX:q,scrollY:q},properties:{width:{refine:true,init:400},height:{refine:true,init:300}},members:{__zW:null,__zX:null,__zY:null,__Aa:null,__Ab:null,__Ac:null,__Ad:null,__gT:null,__Ae:null,__Af:null,__Ag:null,__ot:null,__zV:null,__Ah:null,getRowConfig:function(){return this.__zW;}
,getColumnConfig:function(){return this.__zX;}
,getChildren:function(){return [this.__Ae];}
,addLayer:function(C){if(qx.core.Environment.get(g)){this.assertInterface(C,qx.ui.virtual.core.ILayer);}
;this.__Af.push(C);C.setUserBounds(0,0,0,0);this.__Ae.add(C);}
,getLayers:function(){return this.__Af;}
,getVisibleLayers:function(){var D=[];for(var i=0;i<this.__Af.length;i++){var E=this.__Af[i];if(E.isVisible()){D.push(E);}
;}
;return D;}
,getScrollMaxX:function(){var F=this.getInnerSize();if(F){return Math.max(0,this.__zX.getTotalSize()-F.width);}
;return 0;}
,getScrollMaxY:function(){var G=this.getInnerSize();if(G){return Math.max(0,this.__zW.getTotalSize()-G.height);}
;return 0;}
,setScrollY:function(H){var I=this.getScrollMaxY();if(H<0){H=0;}
else if(H>I){H=I;}
;if(this.__zY!==H){var J=this.__zY;this.__zY=H;this._deferredUpdateScrollPosition();this.fireDataEvent(l,H,J);}
;}
,getScrollY:function(){return this.__zY;}
,setScrollX:function(K){var L=this.getScrollMaxX();if(K<0){K=0;}
else if(K>L){K=L;}
;if(K!==this.__Aa){var M=this.__Aa;this.__Aa=K;this._deferredUpdateScrollPosition();this.fireDataEvent(a,K,M);}
;}
,getScrollX:function(){return this.__Aa;}
,getScrollSize:function(){return {width:this.__zX.getTotalSize(),height:this.__zW.getTotalSize()};}
,scrollRowIntoView:function(N){var Q=this.getBounds();if(!Q){this.addListenerOnce(n,function(){qx.event.Timer.once(function(){this.scrollRowIntoView(N);}
,this,0);}
,this);return;}
;var R=this.__zW.getItemPosition(N);var P=R+this.__zW.getItemSize(N);var O=this.getScrollY();if(R<O){this.setScrollY(R);}
else if(P>O+Q.height){this.setScrollY(P-Q.height);}
;}
,scrollColumnIntoView:function(S){var V=this.getBounds();if(!V){this.addListenerOnce(n,function(){qx.event.Timer.once(function(){this.scrollColumnIntoView(S);}
,this,0);}
,this);return;}
;var U=this.__zX.getItemPosition(S);var T=U+this.__zX.getItemSize(S);var W=this.getScrollX();if(U<W){this.setScrollX(U);}
else if(T>W+V.width){this.setScrollX(T-V.width);}
;}
,scrollCellIntoView:function(X,Y){var ba=this.getBounds();if(!ba){this.addListenerOnce(n,function(){qx.event.Timer.once(function(){this.scrollCellIntoView(X,Y);}
,this,0);}
,this);return;}
;this.scrollColumnIntoView(X);this.scrollRowIntoView(Y);}
,getCellAtPosition:function(bb,bc){var bd,be;var bf=this.getContentLocation();if(!bf||bc<bf.top||bc>=bf.bottom||bb<bf.left||bb>=bf.right){return null;}
;bd=this.__zW.getItemAtPosition(this.getScrollY()+bc-bf.top);be=this.__zX.getItemAtPosition(this.getScrollX()+bb-bf.left);if(!bd||!be){return null;}
;return {row:bd.index,column:be.index};}
,prefetchX:function(bg,bh,bi,bj){var bk=this.getVisibleLayers();if(bk.length==0){return;}
;var bm=this.getBounds();if(!bm){return;}
;var bn=this.__Aa+bm.width;var bo=this.__Ac-bn;if(this.__Aa-this.__Ad.left<Math.min(this.__Aa,bg)||this.__Ad.right-bn<Math.min(bo,bi)){var bp=Math.min(this.__Aa,bh);var bl=Math.min(bo,bj);this._setLayerWindow(bk,this.__Aa-bp,this.__zY,bm.width+bp+bl,bm.height,false);}
;}
,prefetchY:function(bq,br,bs,bt){var bu=this.getVisibleLayers();if(bu.length==0){return;}
;var bx=this.getBounds();if(!bx){return;}
;var bv=this.__zY+bx.height;var bw=this.__Ab-bv;if(this.__zY-this.__Ad.top<Math.min(this.__zY,bq)||this.__Ad.bottom-bv<Math.min(bw,bs)){var bz=Math.min(this.__zY,br);var by=Math.min(bw,bt);this._setLayerWindow(bu,this.__Aa,this.__zY-bz,bx.width,bx.height+bz+by,false);}
;}
,_onResize:function(){if(this.getContainerElement().getDomElement()){this.__Ag=true;this._updateScrollPosition();this.__Ag=null;this.fireEvent(o);}
;}
,_onAppear:function(){this.fullUpdate();}
,_onMouseDown:function(e){this.__Ah=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());}
,_onClick:function(e){this.__Ai(e,t);}
,_onContextmenu:function(e){this.__Ai(e,c);}
,_onDblclick:function(e){this.__Ai(e,w);}
,__Ai:function(e,bA){var bC=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());if(!bC){return;}
;var bB=this.__Ah;if(bB==null||bB.row!==bC.row||bB.column!==bC.column){return;}
;this.fireNonBubblingEvent(bA,qx.ui.virtual.core.CellEvent,[this,e,bC.row,bC.column]);}
,syncWidget:function(bD){if(this.__gT._fullUpdate){this._fullUpdate();}
else if(this.__gT._updateScrollPosition){this._updateScrollPosition();}
;this.__gT={};}
,_setLayerWindow:function(bE,bF,top,bG,bH,bI){var bN=this.__zW.getItemAtPosition(top);if(bN){var bP=bN.index;var bT=this.__zW.getItemSizes(bP,bH+bN.offset);var bO=qx.lang.Array.sum(bT);var bV=top-bN.offset;var bS=top-bN.offset+bO;}
else {var bP=0;var bT=[];var bO=0;var bV=0;var bS=0;}
;var bR=this.__zX.getItemAtPosition(bF);if(bR){var bL=bR.index;var bK=this.__zX.getItemSizes(bL,bG+bR.offset);var bQ=qx.lang.Array.sum(bK);var bU=bF-bR.offset;var bM=bF-bR.offset+bQ;}
else {var bL=0;var bK=[];var bQ=0;var bU=0;var bM=0;}
;this.__Ad={top:bV,bottom:bS,left:bU,right:bM};this.__Ae.setUserBounds(this.__Ad.left-this.__Aa,this.__Ad.top-this.__zY,bQ,bO);this.__ot=bK;this.__zV=bT;for(var i=0;i<this.__Af.length;i++){var bJ=this.__Af[i];bJ.setUserBounds(0,0,bQ,bO);if(bI){bJ.fullUpdate(bP,bL,bT,bK);}
else {bJ.updateLayerWindow(bP,bL,bT,bK);}
;}
;}
,__Aj:function(){if(this.__Ag){return;}
;var bW=this.getScrollSize();if(this.__Ab!==bW.height||this.__Ac!==bW.width){this.__Ab=bW.height;this.__Ac=bW.width;this.fireEvent(o);}
;}
,fullUpdate:function(){this.__gT._fullUpdate=1;qx.ui.core.queue.Widget.add(this);}
,isUpdatePending:function(){return !!this.__gT._fullUpdate;}
,_fullUpdate:function(){var bX=this.getVisibleLayers();if(bX.length==0){this.__Aj();return;}
;var bY=this.getBounds();if(!bY){return;}
;this._setLayerWindow(bX,this.__Aa,this.__zY,bY.width,bY.height,true);this.__Aj();}
,_deferredUpdateScrollPosition:function(){this.__gT._updateScrollPosition=1;qx.ui.core.queue.Widget.add(this);}
,_updateScrollPosition:function(){var ca=this.getVisibleLayers();if(ca.length==0){this.__Aj();return;}
;var cc=this.getBounds();if(!cc){return;}
;var cb={top:this.__zY,bottom:this.__zY+cc.height,left:this.__Aa,right:this.__Aa+cc.width};if(this.__Ad.top<=cb.top&&this.__Ad.bottom>=cb.bottom&&this.__Ad.left<=cb.left&&this.__Ad.right>=cb.right){this.__Ae.setUserBounds(this.__Ad.left-cb.left,this.__Ad.top-cb.top,this.__Ad.right-this.__Ad.left,this.__Ad.bottom-this.__Ad.top);}
else {this._setLayerWindow(ca,this.__Aa,this.__zY,cc.width,cc.height,false);}
;this.__Aj();}
},destruct:function(){this._disposeArray(r);this._disposeObjects(x,j,f);this.__Ad=this.__gT=this.__ot=this.__zV=null;}
});}
)();
(function(){var g="qx.debug",f="qx.event.type.Event",e="'size' must be 'null' or an integer larger than 0.",d="qx.ui.virtual.core.Axis",c="change";qx.Class.define(d,{extend:qx.core.Object,construct:function(h,j){qx.core.Object.call(this);this.itemCount=j;this.defaultItemSize=h;this.customSizes={};}
,events:{"change":f},members:{__AG:null,getDefaultItemSize:function(){return this.defaultItemSize;}
,setDefaultItemSize:function(k){if(this.defaultItemSize!==k){this.defaultItemSize=k;this.__AG=null;this.fireNonBubblingEvent(c);}
;}
,getItemCount:function(){return this.itemCount;}
,setItemCount:function(l){if(this.itemCount!==l){this.itemCount=l;this.__AG=null;this.fireNonBubblingEvent(c);}
;}
,setItemSize:function(m,n){if(qx.core.Environment.get(g)){this.assertArgumentsCount(arguments,2,2);this.assert(n>0||n===null,e);}
;if(this.customSizes[m]==n){return;}
;if(n===null){delete this.customSizes[m];}
else {this.customSizes[m]=n;}
;this.__AG=null;this.fireNonBubblingEvent(c);}
,getItemSize:function(o){return this.customSizes[o]||this.defaultItemSize;}
,resetItemSizes:function(){this.customSizes={};this.__AG=null;this.fireNonBubblingEvent(c);}
,__AH:function(){if(this.__AG){return this.__AG;}
;var r=this.defaultItemSize;var y=this.itemCount;var t=[];for(var v in this.customSizes){var p=parseInt(v,10);if(p<y){t.push(p);}
;}
;if(t.length==0){var u=[{startIndex:0,endIndex:y-1,firstItemSize:r,rangeStart:0,rangeEnd:y*r-1}];this.__AG=u;return u;}
;t.sort(function(a,b){return a>b?1:-1;}
);var u=[];var q=0;for(var i=0;i<t.length;i++){var p=t[i];if(p>=y){break;}
;var x=this.customSizes[p];var s=p*r+q;q+=x-r;u[i]={startIndex:p,firstItemSize:x,rangeStart:s};if(i>0){u[i-1].rangeEnd=s-1;u[i-1].endIndex=p-1;}
;}
;if(u[0].rangeStart>0){u.unshift({startIndex:0,endIndex:u[0].startIndex-1,firstItemSize:r,rangeStart:0,rangeEnd:u[0].rangeStart-1});}
;var z=u[u.length-1];var w=(y-z.startIndex-1)*r;z.rangeEnd=z.rangeStart+z.firstItemSize+w-1;z.endIndex=y-1;this.__AG=u;return u;}
,__AI:function(A){var B=this.__AG||this.__AH();var C=0;var E=B.length-1;while(true){var F=C+((E-C)>>1);var D=B[F];if(D.rangeEnd<A){C=F+1;}
else if(D.rangeStart>A){E=F-1;}
else {return D;}
;}
;}
,getItemAtPosition:function(G){if(G<0||G>=this.getTotalSize()){return null;}
;var I=this.__AI(G);var K=I.rangeStart;var H=I.startIndex;var L=I.firstItemSize;if(K+L>G){return {index:H,offset:G-K};}
else {var J=this.defaultItemSize;return {index:H+1+Math.floor((G-K-L)/J),offset:(G-K-L)%J};}
;}
,__AJ:function(M){var N=this.__AG||this.__AH();var O=0;var Q=N.length-1;while(true){var R=O+((Q-O)>>1);var P=N[R];if(P.endIndex<M){O=R+1;}
else if(P.startIndex>M){Q=R-1;}
else {return P;}
;}
;}
,getItemPosition:function(S){if(S<0||S>=this.itemCount){return null;}
;var T=this.__AJ(S);if(T.startIndex==S){return T.rangeStart;}
else {return T.rangeStart+T.firstItemSize+(S-T.startIndex-1)*this.defaultItemSize;}
;}
,getTotalSize:function(){var U=this.__AG||this.__AH();return U[U.length-1].rangeEnd+1;}
,getItemSizes:function(V,W){var X=this.customSizes;var bb=this.defaultItemSize;var ba=0;var Y=[];var i=0;while(ba<W){var bc=X[V++]||bb;ba+=bc;Y[i++]=bc;if(V>=this.itemCount){break;}
;}
;return Y;}
},destruct:function(){this.customSizes=this.__AG=null;}
});}
)();
(function(){var a="qx.ui.virtual.core.ILayer";qx.Interface.define(a,{members:{fullUpdate:function(b,c,d,e){this.assertArgumentsCount(arguments,6,6);this.assertPositiveInteger(b);this.assertPositiveInteger(c);this.assertArray(d);this.assertArray(e);}
,updateLayerWindow:function(f,g,h,i){this.assertArgumentsCount(arguments,6,6);this.assertPositiveInteger(f);this.assertPositiveInteger(g);this.assertArray(h);this.assertArray(i);}
,updateLayerData:function(){}
}});}
)();
(function(){var b="qx.ui.virtual.core.CellEvent",a="Integer";qx.Class.define(b,{extend:qx.event.type.Mouse,properties:{row:{check:a,nullable:true},column:{check:a,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);this.setBubbles(false);this.setRow(e);this.setColumn(f);}
}});}
)();
(function(){var p="one",o="qx.ui.virtual.selection.MModel",n="qx.data.Array",m="multi",l="selected",k="_applySelection",j="_applyDragSelection",h="_applyQuickSelection",g="_applySelectionMode",f="additive",b="Boolean",d="change",c="single",a="changeSelection";qx.Mixin.define(o,{construct:function(){this._initSelectionManager();this.__Am=new qx.data.Array();this.initSelection(this.__Am);}
,properties:{selection:{check:n,event:a,apply:k,nullable:false,deferredInit:true},selectionMode:{check:[c,m,f,p],init:c,apply:g},dragSelection:{check:b,init:false,apply:j},quickSelection:{check:b,init:false,apply:h}},members:{_manager:null,__AD:false,__AL:false,__Am:null,_initSelectionManager:function(){var self=this;var q={isItemSelectable:function(r){return self._provider.isSelectable(r);}
,styleSelectable:function(s,t,u){if(t!=l){return;}
;if(u){self._provider.styleSelectabled(s);}
else {self._provider.styleUnselectabled(s);}
;}
};this._manager=new qx.ui.virtual.selection.Row(this.getPane(),q);this._manager.attachMouseEvents(this.getPane());this._manager.attachKeyEvents(this);this._manager.addListener(a,this._onManagerChangeSelection,this);}
,_updateSelection:function(){if(this._manager==null){return;}
;this._onChangeSelection();}
,_applySelection:function(v,w){v.addListener(d,this._onChangeSelection,this);if(w!=null){w.removeListener(d,this._onChangeSelection,this);}
;this._onChangeSelection();}
,_applySelectionMode:function(x,y){this._manager.setMode(x);}
,_applyDragSelection:function(z,A){this._manager.setDrag(z);}
,_applyQuickSelection:function(B,C){this._manager.setQuick(B);}
,_onChangeSelection:function(e){if(this.__AL==true){return;}
;this.__AD=true;var E=this.getSelection();var G=[];for(var i=0;i<E.getLength();i++){var F=E.getItem(i);var H=this._getSelectables();var D=-1;if(H!=null){D=H.indexOf(F);}
;var I=this._reverseLookup(D);if(I>=0){G.push(I);}
;}
;if(this._beforeApplySelection!=null&&qx.lang.Type.isFunction(this._beforeApplySelection)){this._beforeApplySelection(G);}
;try{this._manager.replaceSelection(G);}
catch(e){this._manager.selectItem(G[G.length-1]);}
;this.__Ar();if(this._afterApplySelection!=null&&qx.lang.Type.isFunction(this._afterApplySelection)){this._afterApplySelection();}
;this.__AD=false;}
,_onManagerChangeSelection:function(e){if(this.__AD==true){return;}
;this.__AL=true;this.__Ar();this.__AL=false;}
,__Ar:function(){if(this.__AN()){return;}
;var J=this._manager.getSelection();var K=[];for(var i=0;i<J.length;i++){var L=this._getDataFromRow(J[i]);if(L!=null){K.push(L);}
;}
;this.__AM(K);}
,__AM:function(M){var N=this.getSelection();if(M.length>0){var P=[0,N.getLength()];P=P.concat(M);var O=N.splice.apply(N,P);O.dispose();}
else {N.removeAll();}
;}
,__AN:function(){var R=this.getSelection();var T=this._manager.getSelection();if(R.getLength()!==T.length){return false;}
;for(var i=0;i<R.getLength();i++){var S=R.getItem(i);var U=this._getSelectables();var Q=-1;if(U!=null){Q=U.indexOf(S);}
;var V=this._reverseLookup(Q);if(V!==T[i]){return false;}
;}
;return true;}
,_applyDefaultSelection:function(){if(this._manager!=null){this._manager._applyDefaultSelection();}
;}
},destruct:function(){this._manager.dispose();this._manager=null;if(this.__Am){this.__Am.dispose();}
;}
});}
)();
(function(){var p="Abstract method call: _getLastSelectable()",o="Could not select more than one items in mode: ",n="Abstract method call: _getLocation()",m="Abstract method call: _scrollBy()",k="The method getSelectedItem() is only supported in 'single' and 'one' selection mode!",j="Abstract method call: _scrollItemIntoView()",h="Escape",g="Abstract method call: _isSelectable()",f="Space",d="Abstract method call: _getPage()",bn="Abstract method call: _getFirstSelectable()",bm="qx.event.type.Data",bl="A",bk="_applyMode",bj="Can not select multiple items in selection mode: ",bi="interval",bh="Abstract method call: _styleSelectable()",bg="Abstract method call: _capture()",bf="Abstract method call: _getDimension()",be="The method invertSelection() is only supported in 'multi' and 'additive' selection mode!",w="!",x="Abstract method call: _getScroll()",u="Abstract method call: _getRelatedSelectable()",v="quick",s="key",t="Abstract method call: _getSelectableLocationX()",q="Abstract method call: _selectableToHashCode()",r="Can not select all items in selection mode: ",A="__kW",B="Abstract method call: getSelectables()",J="Abstract method call: _getSelectableLocationY()",H="abstract",R="changeSelection",M="Abstract method call: _getSelectableRange()",ba="drag",W="qx.ui.core.selection.Abstract",D="Abstract method call: _releaseCapture()",bd="Boolean",bc="Left",bb="right",C="lead",F="Down",G="Up",I="PageDown",K="anchor",N="End",T="left",Y="Home",y="Right",z="click",E="above",Q="under",P="PageUp",O="os.name",V="osx",U="multi",L="selected",S="additive",c="single",X="one";qx.Class.define(W,{type:H,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__dF={};}
,events:{"changeSelection":bm},properties:{mode:{check:[c,U,S,X],init:c,apply:bk},drag:{check:bd,init:false},quick:{check:bd,init:false}},members:{__kU:0,__kV:0,__kW:null,__kX:null,__kY:null,__la:null,__lb:null,__lc:null,__ld:null,__le:null,__lf:null,__lg:null,__lh:null,__li:null,__lj:null,__lk:null,__ll:null,__dF:null,__lm:null,__ln:null,_userInteraction:false,__lo:null,getSelectionContext:function(){return this.__lk;}
,selectAll:function(){var bo=this.getMode();if(bo==c||bo==X){throw new Error(r+bo);}
;this._selectAllItems();this._fireChange();}
,selectItem:function(bp){this._setSelectedItem(bp);var bq=this.getMode();if(bq!==c&&bq!==X){this._setLeadItem(bp);this._setAnchorItem(bp);}
;this._scrollItemIntoView(bp);this._fireChange();}
,addItem:function(br){var bs=this.getMode();if(bs===c||bs===X){this._setSelectedItem(br);}
else {if(this._getAnchorItem()==null){this._setAnchorItem(br);}
;this._setLeadItem(br);this._addToSelection(br);}
;this._scrollItemIntoView(br);this._fireChange();}
,removeItem:function(bt){this._removeFromSelection(bt);if(this.getMode()===X&&this.isSelectionEmpty()){var bu=this._applyDefaultSelection();if(bu==bt){return;}
;}
;if(this.getLeadItem()==bt){this._setLeadItem(null);}
;if(this._getAnchorItem()==bt){this._setAnchorItem(null);}
;this._fireChange();}
,selectItemRange:function(bv,bw){var bx=this.getMode();if(bx==c||bx==X){throw new Error(bj+bx);}
;this._selectItemRange(bv,bw);this._setAnchorItem(bv);this._setLeadItem(bw);this._scrollItemIntoView(bw);this._fireChange();}
,clearSelection:function(){if(this.getMode()==X){var by=this._applyDefaultSelection(true);if(by!=null){return;}
;}
;this._clearSelection();this._setLeadItem(null);this._setAnchorItem(null);this._fireChange();}
,replaceSelection:function(bz){var bA=this.getMode();if(bA==X||bA===c){if(bz.length>1){throw new Error(o+bA+w);}
;if(bz.length==1){this.selectItem(bz[0]);}
else {this.clearSelection();}
;return;}
else {this._replaceMultiSelection(bz);}
;}
,getSelectedItem:function(){var bB=this.getMode();if(bB===c||bB===X){var bC=this._getSelectedItem();return bC!=undefined?bC:null;}
;throw new Error(k);}
,getSelection:function(){return qx.lang.Object.getValues(this.__dF);}
,getSortedSelection:function(){var bE=this.getSelectables();var bD=qx.lang.Object.getValues(this.__dF);bD.sort(function(a,b){return bE.indexOf(a)-bE.indexOf(b);}
);return bD;}
,isItemSelected:function(bF){var bG=this._selectableToHashCode(bF);return this.__dF[bG]!==undefined;}
,isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__dF);}
,invertSelection:function(){var bI=this.getMode();if(bI===c||bI===X){throw new Error(be);}
;var bH=this.getSelectables();for(var i=0;i<bH.length;i++){this._toggleInSelection(bH[i]);}
;this._fireChange();}
,_setLeadItem:function(bJ){var bK=this.__ll;if(bK!==null){this._styleSelectable(bK,C,false);}
;if(bJ!==null){this._styleSelectable(bJ,C,true);}
;this.__ll=bJ;}
,getLeadItem:function(){return this.__ll!==null?this.__ll:null;}
,_setAnchorItem:function(bL){var bM=this.__lm;if(bM!=null){this._styleSelectable(bM,K,false);}
;if(bL!=null){this._styleSelectable(bL,K,true);}
;this.__lm=bL;}
,_getAnchorItem:function(){return this.__lm!==null?this.__lm:null;}
,_isSelectable:function(bN){throw new Error(g);}
,_getSelectableFromMouseEvent:function(event){var bO=event.getTarget();if(bO&&this._isSelectable(bO)){return bO;}
;return null;}
,_selectableToHashCode:function(bP){throw new Error(q);}
,_styleSelectable:function(bQ,bR,bS){throw new Error(bh);}
,_capture:function(){throw new Error(bg);}
,_releaseCapture:function(){throw new Error(D);}
,_getLocation:function(){throw new Error(n);}
,_getDimension:function(){throw new Error(bf);}
,_getSelectableLocationX:function(bT){throw new Error(t);}
,_getSelectableLocationY:function(bU){throw new Error(J);}
,_getScroll:function(){throw new Error(x);}
,_scrollBy:function(bV,bW){throw new Error(m);}
,_scrollItemIntoView:function(bX){throw new Error(j);}
,getSelectables:function(bY){throw new Error(B);}
,_getSelectableRange:function(ca,cb){throw new Error(M);}
,_getFirstSelectable:function(){throw new Error(bn);}
,_getLastSelectable:function(){throw new Error(p);}
,_getRelatedSelectable:function(cc,cd){throw new Error(u);}
,_getPage:function(ce,cf){throw new Error(d);}
,_applyMode:function(cg,ch){this._setLeadItem(null);this._setAnchorItem(null);this._clearSelection();if(cg===X){this._applyDefaultSelection(true);}
;this._fireChange();}
,handleMouseOver:function(event){if(this.__lo!=null&&this.__lo!=this._getScroll().top){this.__lo=null;return;}
;this._userInteraction=true;if(!this.getQuick()){this._userInteraction=false;return;}
;var cj=this.getMode();if(cj!==X&&cj!==c){this._userInteraction=false;return;}
;var ci=this._getSelectableFromMouseEvent(event);if(ci===null){this._userInteraction=false;return;}
;this._setSelectedItem(ci);this._fireChange(v);this._userInteraction=false;}
,handleMouseDown:function(event){this._userInteraction=true;var cl=this._getSelectableFromMouseEvent(event);if(cl===null){this._userInteraction=false;return;}
;var cn=event.isCtrlPressed()||(qx.core.Environment.get(O)==V&&event.isMetaPressed());var ck=event.isShiftPressed();if(this.isItemSelected(cl)&&!ck&&!cn&&!this.getDrag()){this.__ln=cl;this._userInteraction=false;return;}
else {this.__ln=null;}
;this._scrollItemIntoView(cl);switch(this.getMode()){case c:case X:this._setSelectedItem(cl);break;case S:this._setLeadItem(cl);this._setAnchorItem(cl);this._toggleInSelection(cl);break;case U:this._setLeadItem(cl);if(ck){var cm=this._getAnchorItem();if(cm===null){cm=this._getFirstSelectable();this._setAnchorItem(cm);}
;this._selectItemRange(cm,cl,cn);}
else if(cn){this._setAnchorItem(cl);this._toggleInSelection(cl);}
else {this._setAnchorItem(cl);this._setSelectedItem(cl);}
;break;};var co=this.getMode();if(this.getDrag()&&co!==c&&co!==X&&!ck&&!cn){this.__lb=this._getLocation();this.__kX=this._getScroll();this.__lc=event.getDocumentLeft()+this.__kX.left;this.__ld=event.getDocumentTop()+this.__kX.top;this.__le=true;this._capture();}
;this._fireChange(z);this._userInteraction=false;}
,handleMouseUp:function(event){this._userInteraction=true;var cs=event.isCtrlPressed()||(qx.core.Environment.get(O)==V&&event.isMetaPressed());var cp=event.isShiftPressed();if(!cs&&!cp&&this.__ln!=null){var cq=this._getSelectableFromMouseEvent(event);if(cq===null||!this.isItemSelected(cq)){this._userInteraction=false;return;}
;var cr=this.getMode();if(cr===S){this._removeFromSelection(cq);}
else {this._setSelectedItem(cq);if(this.getMode()===U){this._setLeadItem(cq);this._setAnchorItem(cq);}
;}
;this._userInteraction=false;}
;this._cleanup();}
,handleLoseCapture:function(event){this._cleanup();}
,handleMouseMove:function(event){if(!this.__le){return;}
;this.__lf=event.getDocumentLeft();this.__lg=event.getDocumentTop();this._userInteraction=true;var cu=this.__lf+this.__kX.left;if(cu>this.__lc){this.__lh=1;}
else if(cu<this.__lc){this.__lh=-1;}
else {this.__lh=0;}
;var ct=this.__lg+this.__kX.top;if(ct>this.__ld){this.__li=1;}
else if(ct<this.__ld){this.__li=-1;}
else {this.__li=0;}
;var location=this.__lb;if(this.__lf<location.left){this.__kU=this.__lf-location.left;}
else if(this.__lf>location.right){this.__kU=this.__lf-location.right;}
else {this.__kU=0;}
;if(this.__lg<location.top){this.__kV=this.__lg-location.top;}
else if(this.__lg>location.bottom){this.__kV=this.__lg-location.bottom;}
else {this.__kV=0;}
;if(!this.__kW){this.__kW=new qx.event.Timer(100);this.__kW.addListener(bi,this._onInterval,this);}
;this.__kW.start();this._autoSelect();event.stopPropagation();this._userInteraction=false;}
,handleAddItem:function(e){var cv=e.getData();if(this.getMode()===X&&this.isSelectionEmpty()){this.addItem(cv);}
;}
,handleRemoveItem:function(e){this.removeItem(e.getData());}
,_cleanup:function(){if(!this.getDrag()&&this.__le){return;}
;if(this.__lj){this._fireChange(z);}
;delete this.__le;delete this.__kY;delete this.__la;this._releaseCapture();if(this.__kW){this.__kW.stop();}
;}
,_onInterval:function(e){this._scrollBy(this.__kU,this.__kV);this.__kX=this._getScroll();this._autoSelect();}
,_autoSelect:function(){var cE=this._getDimension();var cx=Math.max(0,Math.min(this.__lf-this.__lb.left,cE.width))+this.__kX.left;var cw=Math.max(0,Math.min(this.__lg-this.__lb.top,cE.height))+this.__kX.top;if(this.__kY===cx&&this.__la===cw){return;}
;this.__kY=cx;this.__la=cw;var cG=this._getAnchorItem();var cz=cG;var cC=this.__lh;var cF,cy;while(cC!==0){cF=cC>0?this._getRelatedSelectable(cz,bb):this._getRelatedSelectable(cz,T);if(cF!==null){cy=this._getSelectableLocationX(cF);if((cC>0&&cy.left<=cx)||(cC<0&&cy.right>=cx)){cz=cF;continue;}
;}
;break;}
;var cD=this.__li;var cB,cA;while(cD!==0){cB=cD>0?this._getRelatedSelectable(cz,Q):this._getRelatedSelectable(cz,E);if(cB!==null){cA=this._getSelectableLocationY(cB);if((cD>0&&cA.top<=cw)||(cD<0&&cA.bottom>=cw)){cz=cB;continue;}
;}
;break;}
;var cH=this.getMode();if(cH===U){this._selectItemRange(cG,cz);}
else if(cH===S){if(this.isItemSelected(cG)){this._selectItemRange(cG,cz,true);}
else {this._deselectItemRange(cG,cz);}
;this._setAnchorItem(cz);}
;this._fireChange(ba);}
,__lp:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;var cN,cM;var cP=event.getKeyIdentifier();var cO=this.getMode();var cJ=event.isCtrlPressed()||(qx.core.Environment.get(O)==V&&event.isMetaPressed());var cK=event.isShiftPressed();var cL=false;if(cP===bl&&cJ){if(cO!==c&&cO!==X){this._selectAllItems();cL=true;}
;}
else if(cP===h){if(cO!==c&&cO!==X){this._clearSelection();cL=true;}
;}
else if(cP===f){var cI=this.getLeadItem();if(cI!=null&&!cK){if(cJ||cO===S){this._toggleInSelection(cI);}
else {this._setSelectedItem(cI);}
;cL=true;}
;}
else if(this.__lp[cP]){cL=true;if(cO===c||cO==X){cN=this._getSelectedItem();}
else {cN=this.getLeadItem();}
;if(cN!==null){switch(cP){case Y:cM=this._getFirstSelectable();break;case N:cM=this._getLastSelectable();break;case G:cM=this._getRelatedSelectable(cN,E);break;case F:cM=this._getRelatedSelectable(cN,Q);break;case bc:cM=this._getRelatedSelectable(cN,T);break;case y:cM=this._getRelatedSelectable(cN,bb);break;case P:cM=this._getPage(cN,true);break;case I:cM=this._getPage(cN,false);break;};}
else {switch(cP){case Y:case F:case y:case I:cM=this._getFirstSelectable();break;case N:case G:case bc:case P:cM=this._getLastSelectable();break;};}
;if(cM!==null){switch(cO){case c:case X:this._setSelectedItem(cM);break;case S:this._setLeadItem(cM);break;case U:if(cK){var cQ=this._getAnchorItem();if(cQ===null){this._setAnchorItem(cQ=this._getFirstSelectable());}
;this._setLeadItem(cM);this._selectItemRange(cQ,cM,cJ);}
else {this._setAnchorItem(cM);this._setLeadItem(cM);if(!cJ){this._setSelectedItem(cM);}
;}
;break;};this.__lo=this._getScroll().top;this._scrollItemIntoView(cM);}
;}
;;;if(cL){event.stop();this._fireChange(s);}
;this._userInteraction=false;}
,_selectAllItems:function(){var cR=this.getSelectables();for(var i=0,l=cR.length;i<l;i++){this._addToSelection(cR[i]);}
;}
,_clearSelection:function(){var cS=this.__dF;for(var cT in cS){this._removeFromSelection(cS[cT]);}
;this.__dF={};}
,_selectItemRange:function(cU,cV,cW){var da=this._getSelectableRange(cU,cV);if(!cW){var cY=this.__dF;var db=this.__lq(da);for(var cX in cY){if(!db[cX]){this._removeFromSelection(cY[cX]);}
;}
;}
;for(var i=0,l=da.length;i<l;i++){this._addToSelection(da[i]);}
;}
,_deselectItemRange:function(dc,dd){var de=this._getSelectableRange(dc,dd);for(var i=0,l=de.length;i<l;i++){this._removeFromSelection(de[i]);}
;}
,__lq:function(df){var dh={};var dg;for(var i=0,l=df.length;i<l;i++){dg=df[i];dh[this._selectableToHashCode(dg)]=dg;}
;return dh;}
,_getSelectedItem:function(){for(var di in this.__dF){return this.__dF[di];}
;return null;}
,_setSelectedItem:function(dj){if(this._isSelectable(dj)){var dk=this.__dF;var dl=this._selectableToHashCode(dj);if(!dk[dl]||qx.lang.Object.hasMinLength(dk,2)){this._clearSelection();this._addToSelection(dj);}
;}
;}
,_addToSelection:function(dm){var dn=this._selectableToHashCode(dm);if(this.__dF[dn]==null&&this._isSelectable(dm)){this.__dF[dn]=dm;this._styleSelectable(dm,L,true);this.__lj=true;}
;}
,_toggleInSelection:function(dp){var dq=this._selectableToHashCode(dp);if(this.__dF[dq]==null){this.__dF[dq]=dp;this._styleSelectable(dp,L,true);}
else {delete this.__dF[dq];this._styleSelectable(dp,L,false);}
;this.__lj=true;}
,_removeFromSelection:function(dr){var ds=this._selectableToHashCode(dr);if(this.__dF[ds]!=null){delete this.__dF[ds];this._styleSelectable(dr,L,false);this.__lj=true;}
;}
,_replaceMultiSelection:function(dt){var dw=false;var dz,dy;var du={};for(var i=0,l=dt.length;i<l;i++){dz=dt[i];if(this._isSelectable(dz)){dy=this._selectableToHashCode(dz);du[dy]=dz;}
;}
;var dA=dt[0];var dv=dz;var dx=this.__dF;for(var dy in dx){if(du[dy]){delete du[dy];}
else {dz=dx[dy];delete dx[dy];this._styleSelectable(dz,L,false);dw=true;}
;}
;for(var dy in du){dz=dx[dy]=du[dy];this._styleSelectable(dz,L,true);dw=true;}
;if(!dw){return false;}
;this._scrollItemIntoView(dv);this._setLeadItem(dA);this._setAnchorItem(dA);this.__lj=true;this._fireChange();}
,_fireChange:function(dB){if(this.__lj){this.__lk=dB||null;this.fireDataEvent(R,this.getSelection());delete this.__lj;}
;}
,_applyDefaultSelection:function(dC){if(dC===true||this.getMode()===X&&this.isSelectionEmpty()){var dD=this._getFirstSelectable();if(dD!=null){this.selectItem(dD);}
;return dD;}
;return null;}
},destruct:function(){this._disposeObjects(A);this.__dF=this.__ln=this.__lm=null;this.__ll=null;}
});}
)();
(function(){var j="qx.ui.virtual.selection.Abstract",i="qx.debug",h="mouseup",g="mousedown",f="losecapture",e="mouseover",d="mousemove",c="removeItem",b="keypress",a="addItem";qx.Class.define(j,{extend:qx.ui.core.selection.Abstract,construct:function(k,l){qx.ui.core.selection.Abstract.call(this);if(qx.core.Environment.get(i)){this.assertInstance(k,qx.ui.virtual.core.Pane);}
;this._pane=k;this._delegate=l||{};}
,members:{_isSelectable:function(m){return this._delegate.isItemSelectable?this._delegate.isItemSelectable(m):true;}
,_styleSelectable:function(n,o,p){if(this._delegate.styleSelectable){this._delegate.styleSelectable(n,o,p);}
;}
,attachMouseEvents:function(){var q=this._pane.getContainerElement();q.addListener(g,this.handleMouseDown,this);q.addListener(h,this.handleMouseUp,this);q.addListener(e,this.handleMouseOver,this);q.addListener(d,this.handleMouseMove,this);q.addListener(f,this.handleLoseCapture,this);}
,detatchMouseEvents:function(){var r=this._pane.getContainerElement();r.removeListener(g,this.handleMouseDown,this);r.removeListener(h,this.handleMouseUp,this);r.removeListener(e,this.handleMouseOver,this);r.removeListener(d,this.handleMouseMove,this);r.removeListener(f,this.handleLoseCapture,this);}
,attachKeyEvents:function(s){s.addListener(b,this.handleKeyPress,this);}
,detachKeyEvents:function(t){t.removeListener(b,this.handleKeyPress,this);}
,attachListEvents:function(u){u.addListener(a,this.handleAddItem,this);u.addListener(c,this.handleRemoveItem,this);}
,detachListEvents:function(v){v.removeListener(a,this.handleAddItem,this);v.removeListener(c,this.handleRemoveItem,this);}
,_capture:function(){this._pane.capture();}
,_releaseCapture:function(){this._pane.releaseCapture();}
,_getScroll:function(){return {left:this._pane.getScrollX(),top:this._pane.getScrollY()};}
,_scrollBy:function(w,x){this._pane.setScrollX(this._pane.getScrollX()+w);this._pane.setScrollY(this._pane.getScrollY()+x);}
,_getLocation:function(){var y=this._pane.getContentElement().getDomElement();return y?qx.bom.element.Location.get(y):null;}
,_getDimension:function(){return this._pane.getInnerSize();}
},destruct:function(){this._pane=this._delegate=null;}
});}
)();
(function(){var c="qx.ui.virtual.selection.Row",b="above",a="under";qx.Class.define(c,{extend:qx.ui.virtual.selection.Abstract,members:{_getItemCount:function(){return this._pane.getRowConfig().getItemCount();}
,_getSelectableFromMouseEvent:function(event){var d=this._pane.getCellAtPosition(event.getDocumentLeft(),event.getDocumentTop());if(!d){return null;}
;return this._isSelectable(d.row)?d.row:null;}
,getSelectables:function(e){var f=[];for(var i=0,l=this._getItemCount();i<l;i++){if(this._isSelectable(i)){f.push(i);}
;}
;return f;}
,_getSelectableRange:function(g,h){var j=[];var m=Math.min(g,h);var k=Math.max(g,h);for(var i=m;i<=k;i++){if(this._isSelectable(i)){j.push(i);}
;}
;return j;}
,_getFirstSelectable:function(){var n=this._getItemCount();for(var i=0;i<n;i++){if(this._isSelectable(i)){return i;}
;}
;return null;}
,_getLastSelectable:function(){var o=this._getItemCount();for(var i=o-1;i>=0;i--){if(this._isSelectable(i)){return i;}
;}
;return null;}
,_getRelatedSelectable:function(p,q){if(q==b){var s=p-1;var r=0;var t=-1;}
else if(q==a){var s=p+1;var r=this._getItemCount()-1;var t=1;}
else {return null;}
;for(var i=s;i!==r+t;i+=t){if(this._isSelectable(i)){return i;}
;}
;return null;}
,_getPage:function(u,v){if(v){return this._getFirstSelectable();}
else {return this._getLastSelectable();}
;}
,_selectableToHashCode:function(w){return w;}
,_scrollItemIntoView:function(x){this._pane.scrollRowIntoView(x);}
,_getSelectableLocationX:function(y){return {left:0,right:this._pane.getColumnConfig().getTotalSize()-1};}
,_getSelectableLocationY:function(z){var C=this._pane.getRowConfig();var B=C.getItemPosition(z);var A=B+C.getItemSize(z)-1;return {top:B,bottom:A};}
}});}
)();
(function(){var a="qx.data.controller.ISelection";qx.Interface.define(a,{members:{setSelection:function(b){}
,getSelection:function(){}
,resetSelection:function(){}
}});}
)();
(function(){var p="changeModel",o="_applyLabelOptions",n="_applyLabelPath",m="_applyGroupLabelOptions",j="Integer",h="_applyModel",g="filter",f="changeGroups",d="Boolean",c="GroupingTypeError: You can't mix 'Objects' and 'Strings' as",G="sorter",F="_applyIconPath",E="_applyDelegate",D="changeDelegate",C=" group identifier!",B="???",A="_applyRowHeight",z="virtual-list",y="_applyGroupLabelPath",x="_applyIconOptions",v="qx.ui.list.List",w="resize",t="qx.data.Array",u="row-layer",r="group",s="changeLength",q="String";qx.Class.define(v,{extend:qx.ui.virtual.core.Scroller,include:[qx.ui.virtual.selection.MModel],implement:qx.data.controller.ISelection,construct:function(H){qx.ui.virtual.core.Scroller.call(this,0,1,20,100);this._init();this.__zC=new qx.data.Array();this.initGroups(this.__zC);if(H!=null){this.initModel(H);}
;this.initItemHeight();}
,properties:{appearance:{refine:true,init:z},focusable:{refine:true,init:true},width:{refine:true,init:100},height:{refine:true,init:200},model:{check:t,apply:h,event:p,nullable:true,deferredInit:true},itemHeight:{check:j,init:25,apply:A,themeable:true},labelPath:{check:q,apply:n,nullable:true},iconPath:{check:q,apply:F,nullable:true},groupLabelPath:{check:q,apply:y,nullable:true},labelOptions:{apply:o,nullable:true},iconOptions:{apply:x,nullable:true},groupLabelOptions:{apply:m,nullable:true},delegate:{apply:E,event:D,init:null,nullable:true},autoGrouping:{check:d,init:true},groups:{check:t,event:f,nullable:false,deferredInit:true}},members:{_background:null,_provider:null,_layer:null,__zD:null,__zE:null,__zF:null,__zG:false,__zH:false,__zI:false,__zC:null,refresh:function(){this.__zK();}
,_createChildControlImpl:function(I,J){var K;switch(I){case u:K=new qx.ui.virtual.layer.Row(null,null);break;};return K||qx.ui.virtual.core.Scroller.prototype._createChildControlImpl.call(this,I);}
,_init:function(){this._provider=new qx.ui.list.provider.WidgetProvider(this);this.__zD=[];this.__zE=[];this.__zF={};this.__zG=false;this.__zH=false;this.__zI=false;this.getPane().addListener(w,this._onResize,this);this._initBackground();this._initLayer();}
,_initBackground:function(){this._background=this.getChildControl(u);this.getPane().addLayer(this._background);}
,_initLayer:function(){this._layer=this._provider.createLayer();this.getPane().addLayer(this._layer);}
,_getDataFromRow:function(L){var N=null;var M=this.getModel();if(M==null){return null;}
;if(this._isGroup(L)){N=this.getGroups().getItem(this._lookupGroup(L));}
else {N=M.getItem(this._lookup(L));}
;if(N!=null){return N;}
else {return null;}
;}
,_getLookupTable:function(){return this.__zD;}
,_lookup:function(O){return this.__zD[O];}
,_lookupGroup:function(P){return this.__zE.indexOf(P);}
,_reverseLookup:function(Q){if(Q<0){return -1;}
;return this.__zD.indexOf(Q);}
,_isGroup:function(R){return this._lookup(R)==-1;}
,_getSelectables:function(){return this.getModel();}
,_applyModel:function(S,T){if(S!=null){S.addListener(s,this._onModelChange,this);}
;if(T!=null){T.removeListener(s,this._onModelChange,this);}
;this._provider.removeBindings();this._onModelChange();}
,_applyRowHeight:function(U,V){this.getPane().getRowConfig().setDefaultItemSize(U);}
,_applyLabelPath:function(W,X){this._provider.setLabelPath(W);}
,_applyIconPath:function(Y,ba){this._provider.setIconPath(Y);}
,_applyGroupLabelPath:function(bb,bc){this._provider.setGroupLabelPath(bb);}
,_applyLabelOptions:function(bd,be){this._provider.setLabelOptions(bd);}
,_applyIconOptions:function(bf,bg){this._provider.setIconOptions(bf);}
,_applyGroupLabelOptions:function(bh,bi){this._provider.setGroupLabelOptions(bh);}
,_applyDelegate:function(bj,bk){this._provider.setDelegate(bj);this.__zK();}
,_onResize:function(e){this.getPane().getColumnConfig().setItemSize(0,e.getData().width);}
,_onModelChange:function(e){this.__zK();this._applyDefaultSelection();}
,__zJ:function(){this.getPane().getRowConfig().setItemCount(this.__zD.length);this.getPane().fullUpdate();}
,__zK:function(){this.__zD=[];this.__zE=[];this.__zF={};if(this.isAutoGrouping()){this.getGroups().removeAll();}
;var bl=this.getModel();if(bl!=null){this._runDelegateFilter(bl);this._runDelegateSorter(bl);this._runDelegateGroup(bl);}
;this._updateSelection();this.__zJ();}
,_runDelegateFilter:function(bm){var bn=qx.util.Delegate.getMethod(this.getDelegate(),g);for(var i=0,l=bm.length;i<l;++i){if(bn==null||bn(bm.getItem(i))){this.__zD.push(i);}
;}
;}
,_runDelegateSorter:function(bo){if(this.__zD.length==0){return;}
;var bp=qx.util.Delegate.getMethod(this.getDelegate(),G);if(bp!=null){this.__zD.sort(function(a,b){return bp(bo.getItem(a),bo.getItem(b));}
);}
;}
,_runDelegateGroup:function(bq){var bu=qx.util.Delegate.getMethod(this.getDelegate(),r);if(bu!=null){for(var i=0,l=this.__zD.length;i<l;++i){var br=this.__zD[i];var bt=this.getModel().getItem(br);var bs=bu(bt);this.__zL(bs,br);}
;this.__zD=this.__zM();}
;}
,__zL:function(bv,bw){if(bv==null){this.__zI=true;bv=B;}
;var name=this.__zN(bv);if(this.__zF[name]==null){this.__zF[name]=[];if(this.isAutoGrouping()){this.getGroups().push(bv);}
;}
;this.__zF[name].push(bw);}
,__zM:function(){this.__zO();var bA=[];var bC=0;var by=this.getGroups();for(var i=0;i<by.getLength();i++){var bx=by.getItem(i);bA.push(-1);this.__zE.push(bC);bC++;var bB=this.__zN(bx);var bz=this.__zF[bB];if(bz!=null){for(var k=0;k<bz.length;k++){bA.push(bz[k]);bC++;}
;}
;}
;return bA;}
,__zN:function(bD){var name=null;if(!qx.lang.Type.isString(bD)){var bE=this.getGroups().indexOf(bD);this.__zH=true;name=r;if(bE==-1){name+=this.getGroups().getLength();}
else {name+=bE;}
;}
else {this.__zG=true;var name=bD;}
;return name;}
,__zO:function(){if(this.__zH&&this.__zI||this.__zH&&this.__zG){throw new Error(c+C);}
;}
},destruct:function(){var bF=this.getModel();if(bF!=null){bF.removeListener(s,this._onModelChange,this);}
;var bG=this.getPane();if(bG!=null){bG.removeListener(w,this._onResize,this);}
;this._background.dispose();this._provider.dispose();this._layer.dispose();this._background=this._provider=this._layer=this.__zD=this.__zE=this.__zF=null;if(this.__zC){this.__zC.dispose();}
;}
});}
)();
(function(){var c="qx.ui.virtual.layer.Abstract",b="abstract",a="Abstract method '_fullUpdate' called!";qx.Class.define(c,{extend:qx.ui.core.Widget,type:b,implement:[qx.ui.virtual.core.ILayer],construct:function(){qx.ui.core.Widget.call(this);this.__gT={};}
,properties:{anonymous:{refine:true,init:true}},members:{__gT:null,__cx:null,__zT:null,__zU:null,__zV:null,__ot:null,getFirstRow:function(){return this.__zT;}
,getFirstColumn:function(){return this.__zU;}
,getRowSizes:function(){return this.__zV||[];}
,getColumnSizes:function(){return this.__ot||[];}
,syncWidget:function(d){if(!this.getContentElement().getDomElement()){return;}
;if(this.__gT.fullUpdate||this.__gT.updateLayerWindow&&this.__gT.updateLayerData){this._fullUpdate.apply(this,this.__cx);}
else if(this.__gT.updateLayerWindow){this._updateLayerWindow.apply(this,this.__cx);}
else if(this.__gT.updateLayerData&&this.__zV){this._updateLayerData();}
;;if(this.__gT.fullUpdate||this.__gT.updateLayerWindow){var e=this.__cx;this.__zT=e[0];this.__zU=e[1];this.__zV=e[2];this.__ot=e[3];}
;this.__gT={};}
,_updateLayerData:function(){this._fullUpdate(this.__zT,this.__zU,this.__zV,this.__ot);}
,_fullUpdate:function(f,g,h,i){throw new Error(a);}
,_updateLayerWindow:function(j,k,l,m){this._fullUpdate(j,k,l,m);}
,updateLayerData:function(){this.__gT.updateLayerData=true;qx.ui.core.queue.Widget.add(this);}
,fullUpdate:function(n,o,p,q){this.__cx=arguments;this.__gT.fullUpdate=true;qx.ui.core.queue.Widget.add(this);}
,updateLayerWindow:function(r,s,t,u){this.__cx=arguments;this.__gT.updateLayerWindow=true;qx.ui.core.queue.Widget.add(this);}
},destruct:function(){this.__gT=this.__cx=this.__zV=this.__ot=null;}
});}
)();
(function(){var d="_applyColorOdd",c="_applyColorEven",b="qx.ui.virtual.layer.AbstractBackground",a="Color";qx.Class.define(b,{extend:qx.ui.virtual.layer.Abstract,construct:function(e,f){qx.ui.virtual.layer.Abstract.call(this);if(e){this.setColorEven(e);}
;if(f){this.setColorOdd(f);}
;this.__Aw={};this.__Ax={};}
,properties:{colorEven:{nullable:true,check:a,apply:c,themeable:true},colorOdd:{nullable:true,check:a,apply:d,themeable:true}},members:{__Ay:null,__Az:null,__Aw:null,__Ax:null,setColor:function(g,h){if(h){this.__Aw[g]=qx.theme.manager.Color.getInstance().resolve(h);}
else {delete (this.__Aw[g]);}
;}
,clearCustomColors:function(){this.__Aw={};this.updateLayerData();}
,getColor:function(i){var j=this.__Aw[i];if(j){return j;}
else {return i%2==0?this.__Ay:this.__Az;}
;}
,_applyColorEven:function(k,l){if(k){this.__Ay=qx.theme.manager.Color.getInstance().resolve(k);}
else {this.__Ay=null;}
;this.updateLayerData();}
,_applyColorOdd:function(m,n){if(m){this.__Az=qx.theme.manager.Color.getInstance().resolve(m);}
else {this.__Az=null;}
;this.updateLayerData();}
,setBackground:function(o,p){if(p){this.__Ax[o]=qx.theme.manager.Decoration.getInstance().resolve(p);}
else {delete (this.__Ax[o]);}
;this.updateLayerData();}
,getBackground:function(q){return this.__Ax[q];}
},destruct:function(){this.__Aw=this.__Ax=null;}
});}
)();
(function(){var q="background-color:",p="",o="qx.ui.virtual.layer.Row",n="block",m="width:",k="height:",j="row-layer",h="none",g="left: 0;",f="</div>",c="top:",e="position: absolute;",d="<div style='",b="'>",a="px;";qx.Class.define(o,{extend:qx.ui.virtual.layer.AbstractBackground,properties:{appearance:{refine:true,init:j}},members:{_fullUpdate:function(r,s,t,u){var B=[];var A=qx.lang.Array.sum(u);var C=[];var top=0;var E=r;var x=0;for(var y=0;y<t.length;y++){var D=this.getBackground(E);if(D){C.push({childIndex:x,decorator:D,width:A,height:t[y]});B.push(d,e,g,c,top,a,b,D.getMarkup(),f);x++;}
else {var z=this.getColor(E);if(z){B.push(d,e,g,c,top,a,k,t[y],a,m,A,a,q,z,b,f);x++;}
;}
;top+=t[y];E+=1;}
;var v=this.getContentElement().getDomElement();v.style.display=h;v.innerHTML=B.join(p);for(var i=0,l=C.length;i<l;i++){var w=C[i];w.decorator.resize(v.childNodes[w.childIndex].firstChild,w.width,w.height);}
;v.style.display=n;this._width=A;}
,_updateLayerWindow:function(F,G,H,I){if(F!==this.getFirstRow()||H.length!==this.getRowSizes().length||this._width<qx.lang.Array.sum(I)){this._fullUpdate(F,G,H,I);}
;}
,setColor:function(J,K){qx.ui.virtual.layer.AbstractBackground.prototype.setColor.call(this,J,K);if(this.__AO(J)){this.updateLayerData();}
;}
,setBackground:function(L,M){qx.ui.virtual.layer.AbstractBackground.prototype.setBackground.call(this,L,M);if(this.__AO(L)){this.updateLayerData();}
;}
,__AO:function(N){var P=this.getFirstRow();var O=P+this.getRowSizes().length-1;return N>=P&&N<=O;}
}});}
)();
(function(){var a="qx.ui.list.provider.IListProvider";qx.Interface.define(a,{members:{createLayer:function(){}
,createItemRenderer:function(){}
,createGroupRenderer:function(){}
,styleSelectabled:function(b){}
,styleUnselectabled:function(c){}
,isSelectable:function(d){}
,setLabelPath:function(e){}
,setIconPath:function(f){}
,setLabelOptions:function(g){}
,setIconOptions:function(h){}
,setDelegate:function(i){}
,removeBindings:function(){}
}});}
)();
(function(){var a="qx.ui.virtual.core.IWidgetCellProvider";qx.Interface.define(a,{members:{getCellWidget:function(b,c){}
,poolCellWidget:function(d){}
}});}
)();
(function(){var p="model[",o="groups[",n="model",m="changeDelegate",l="label",k="qx.ui.list.core.MWidgetController",j="icon",i="value",h=".",g="",c="]",f="BindingIds",d="group",b="cell.type",a="String";qx.Mixin.define(k,{construct:function(){this.__zP=[];}
,properties:{labelPath:{check:a,nullable:true},iconPath:{check:a,nullable:true},groupLabelPath:{check:a,nullable:true},labelOptions:{nullable:true},iconOptions:{nullable:true},groupLabelOptions:{nullable:true},delegate:{event:m,init:null,nullable:true}},members:{__zP:null,bindDefaultProperties:function(q,r){if(q.getUserData(b)!=d){this.bindProperty(g,n,null,q,r);this.bindProperty(this.getLabelPath(),l,this.getLabelOptions(),q,r);if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),j,this.getIconOptions(),q,r);}
;}
else {this.bindProperty(this.getGroupLabelPath(),i,this.getGroupLabelOptions(),q,r);}
;}
,bindProperty:function(s,t,u,v,w){var y=v.getUserData(b);var x=this.__zQ(w,s,y);var z=this._list.bind(x,v,t,u);this.__zR(v,z);}
,bindPropertyReverse:function(A,B,C,D,E){var G=D.getUserData(b);var F=this.__zQ(E,A,G);var H=D.bind(B,this._list,F,C);this.__zR(D,H);}
,removeBindings:function(){while(this.__zP.length>0){var I=this.__zP.pop();this._removeBindingsFrom(I);}
;}
,_configureItem:function(J){var K=this.getDelegate();if(K!=null&&K.configureItem!=null){K.configureItem(J);}
;}
,_configureGroupItem:function(L){var M=this.getDelegate();if(M!=null&&M.configureGroupItem!=null){M.configureGroupItem(L);}
;}
,_bindItem:function(N,O){var P=this.getDelegate();if(P!=null&&P.bindItem!=null){P.bindItem(this,N,O);}
else {this.bindDefaultProperties(N,O);}
;}
,_bindGroupItem:function(Q,R){var S=this.getDelegate();if(S!=null&&S.bindGroupItem!=null){S.bindGroupItem(this,Q,R);}
else {this.bindDefaultProperties(Q,R);}
;}
,_removeBindingsFrom:function(T){var U=this.__zS(T);while(U.length>0){var V=U.pop();try{this._list.removeBinding(V);}
catch(e){T.removeBinding(V);}
;}
;if(qx.lang.Array.contains(this.__zP,T)){qx.lang.Array.remove(this.__zP,T);}
;}
,__zQ:function(W,X,Y){var ba=p+W+c;if(Y==d){ba=o+W+c;}
;if(X!=null&&X!=g){ba+=h+X;}
;return ba;}
,__zR:function(bb,bc){var bd=this.__zS(bb);if(!qx.lang.Array.contains(bd,bc)){bd.push(bc);}
;if(!qx.lang.Array.contains(this.__zP,bb)){this.__zP.push(bb);}
;}
,__zS:function(be){var bf=be.getUserData(f);if(bf==null){bf=[];be.setUserData(f,bf);}
;return bf;}
},destruct:function(){this.__zP=null;}
});}
)();
(function(){var j="changeDelegate",i="qx.ui.list.provider.WidgetProvider",h="createItem",g="group-item",f="onPool",e="createGroupItem",d="item",c="group",b="cell.type",a="created";qx.Class.define(i,{extend:qx.core.Object,implement:[qx.ui.virtual.core.IWidgetCellProvider,qx.ui.list.provider.IListProvider],include:[qx.ui.list.core.MWidgetController],construct:function(k){qx.core.Object.call(this);this._list=k;this._itemRenderer=this.createItemRenderer();this._groupRenderer=this.createGroupRenderer();this._itemRenderer.addListener(a,this._onItemCreated,this);this._groupRenderer.addListener(a,this._onGroupItemCreated,this);this._list.addListener(j,this._onChangeDelegate,this);}
,members:{_itemRenderer:null,_groupRenderer:null,getCellWidget:function(l,m){var n=null;if(!this._list._isGroup(l)){n=this._itemRenderer.getCellWidget();n.setUserData(b,d);this._bindItem(n,this._list._lookup(l));if(this._list._manager.isItemSelected(l)){this._styleSelectabled(n);}
else {this._styleUnselectabled(n);}
;}
else {n=this._groupRenderer.getCellWidget();n.setUserData(b,c);this._bindGroupItem(n,this._list._lookupGroup(l));}
;return n;}
,poolCellWidget:function(o){this._removeBindingsFrom(o);if(o.getUserData(b)==d){this._itemRenderer.pool(o);}
else if(o.getUserData(b)==c){this._groupRenderer.pool(o);}
;this._onPool(o);}
,createLayer:function(){return new qx.ui.virtual.layer.WidgetCell(this);}
,createItemRenderer:function(){var p=qx.util.Delegate.getMethod(this.getDelegate(),h);if(p==null){p=function(){return new qx.ui.form.ListItem();}
;}
;var q=new qx.ui.virtual.cell.WidgetCell();q.setDelegate({createWidget:p});return q;}
,createGroupRenderer:function(){var r=qx.util.Delegate.getMethod(this.getDelegate(),e);if(r==null){r=function(){var t=new qx.ui.basic.Label();t.setAppearance(g);return t;}
;}
;var s=new qx.ui.virtual.cell.WidgetCell();s.setDelegate({createWidget:r});return s;}
,styleSelectabled:function(u){var v=this.__zA(u);this._styleSelectabled(v);}
,styleUnselectabled:function(w){var x=this.__zA(w);this._styleUnselectabled(x);}
,isSelectable:function(y){if(this._list._isGroup(y)){return false;}
;var z=this._list._layer.getRenderedCellWidget(y,0);if(z!=null){return z.isEnabled();}
else {return true;}
;}
,_styleSelectabled:function(A){this.__zB(A,{selected:1});}
,_styleUnselectabled:function(B){this.__zB(B,{});}
,_onPool:function(C){var D=qx.util.Delegate.getMethod(this.getDelegate(),f);if(D!=null){D(C);}
;}
,_onItemCreated:function(event){var E=event.getData();this._configureItem(E);}
,_onGroupItemCreated:function(event){var F=event.getData();this._configureGroupItem(F);}
,_onChangeDelegate:function(event){this._itemRenderer.dispose();this._itemRenderer=this.createItemRenderer();this._itemRenderer.addListener(a,this._onItemCreated,this);this._groupRenderer.dispose();this._groupRenderer=this.createGroupRenderer();this._groupRenderer.addListener(a,this._onGroupItemCreated,this);this.removeBindings();this._list.getPane().fullUpdate();}
,__zA:function(G){return this._list._layer.getRenderedCellWidget(G,0);}
,__zB:function(H,I){if(H==null){return;}
;this._itemRenderer.updateStates(H,I);}
},destruct:function(){this._itemRenderer.dispose();this._groupRenderer.dispose();this._itemRenderer=this._groupRenderer=null;}
});}
)();
(function(){var g="qx.event.type.Event",f="qx.ui.virtual.layer.WidgetCell",e="cell.column",d="qx.debug",c="cell.row",b="updated",a="cell.empty";qx.Class.define(f,{extend:qx.ui.virtual.layer.Abstract,include:[qx.ui.core.MChildrenHandling],construct:function(h){qx.ui.virtual.layer.Abstract.call(this);this.setZIndex(2);if(qx.core.Environment.get(d)){this.assertInterface(h,qx.ui.virtual.core.IWidgetCellProvider);}
;this._cellProvider=h;this.__Al=[];}
,properties:{anonymous:{refine:true,init:false}},events:{updated:g},members:{__Al:null,getRenderedCellWidget:function(j,k){var l=this.getColumnSizes().length;var q=this.getRowSizes().length;var p=this.getFirstRow();var o=this.getFirstColumn();if(j<p||j>=p+q||k<o||k>=o+l){return null;}
;var n=(k-o)+(j-p)*l;var m=this._getChildren()[n];if(m.getUserData(a)){return null;}
else {return m;}
;}
,_getSpacer:function(){var r=this.__Al.pop();if(!r){r=new qx.ui.core.Spacer();r.setUserData(a,1);}
;return r;}
,_activateNotEmptyChild:function(s){var t=qx.ui.core.FocusHandler.getInstance().getActiveWidget();if(t==s||qx.ui.core.Widget.contains(s,t)){var u=this._getChildren();for(var i=u.length-1;i>=0;i--){if(!u[i].getUserData(a)){u[i].activate();break;}
;}
;}
;}
,_fullUpdate:function(v,w,z,A){var C=this._cellProvider;var G=this._getChildren();for(var i=0;i<G.length;i++){var E=G[i];if(E.getUserData(a)){this.__Al.push(E);}
else {this._activateNotEmptyChild(E);C.poolCellWidget(E);}
;}
;this._removeAll();var top=0;var H=0;for(var y=0;y<z.length;y++){for(var x=0;x<A.length;x++){var F=v+y;var D=w+x;var B=C.getCellWidget(F,D)||this._getSpacer();B.setUserBounds(H,top,A[x],z[y]);B.setUserData(c,F);B.setUserData(e,D);this._add(B);H+=A[x];}
;top+=z[y];H=0;}
;this.fireEvent(b);}
,_updateLayerWindow:function(I,J,K,L){if(qx.core.Environment.get(d)){this.assertPositiveInteger(I);this.assertPositiveInteger(J);this.assertArray(K);this.assertArray(L);}
;var X=I+K.length-1;var O=J+L.length-1;var T={firstRow:Math.max(I,this.getFirstRow()),lastRow:Math.min(X,this._lastRow),firstColumn:Math.max(J,this.getFirstColumn()),lastColumn:Math.min(O,this._lastColumn)};this._lastColumn=O;this._lastRow=X;if(T.firstRow>T.lastRow||T.firstColumn>T.lastColumn){return this._fullUpdate(I,J,K,L);}
;var Y=this._getChildren();var M=this.getColumnSizes().length;var V=[];var S={};for(var ba=I;ba<=X;ba++){V[ba]=[];for(var R=J;R<=O;R++){if(ba>=T.firstRow&&ba<=T.lastRow&&R>=T.firstColumn&&R<=T.lastColumn){var x=R-this.getFirstColumn();var y=ba-this.getFirstRow();var N=y*M+x;V[ba][R]=Y[N];S[N]=true;}
;}
;}
;var U=this._cellProvider;var Y=this._getChildren();for(var i=0;i<Y.length;i++){if(!S[i]){var W=Y[i];if(W.getUserData(a)){this.__Al.push(W);}
else {this._activateNotEmptyChild(W);U.poolCellWidget(W);}
;}
;}
;this._removeAll();var top=0;var P=0;for(var y=0;y<K.length;y++){for(var x=0;x<L.length;x++){var ba=I+y;var R=J+x;var Q=V[ba][R]||U.getCellWidget(ba,R)||this._getSpacer();Q.setUserBounds(P,top,L[x],K[y]);Q.setUserData(c,ba);Q.setUserData(e,R);this._add(Q);P+=L[x];}
;top+=K[y];P=0;}
;this.fireEvent(b);}
},destruct:function(){var bb=this._getChildren();for(var i=0;i<bb.length;i++){bb[i].dispose();}
;this._cellProvider=this.__Al=null;}
});}
)();
(function(){var a="qx.ui.core.Spacer";qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(b,c){qx.ui.core.LayoutItem.call(this);this.setWidth(b!=null?b:0);this.setHeight(c!=null?c:0);}
,members:{checkAppearanceNeeds:function(){}
,addChildrenToQueue:function(d){}
,destroy:function(){if(this.$$disposed){return;}
;var parent=this.$$parent;if(parent){parent._remove(this);}
;qx.ui.core.queue.Dispose.add(this);}
}});}
)();
(function(){var a="qx.util.Delegate";qx.Class.define(a,{statics:{getMethod:function(b,c){if(qx.util.Delegate.containsMethod(b,c)){return qx.lang.Function.bind(b[c],b);}
;return null;}
,containsMethod:function(d,e){var f=qx.lang.Type;if(f.isObject(d)){return f.isFunction(d[e]);}
;return false;}
}});}
)();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";qx.Mixin.define(a,{properties:{model:{nullable:true,event:b,dereference:true}}});}
)();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){}
,getModel:function(){}
,resetModel:function(){}
}});}
)();
(function(){var f="listitem",e="qx.ui.form.ListItem",d="qx.event.type.Event",c="hovered",b="mouseover",a="mouseout";qx.Class.define(e,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(g,h,i){qx.ui.basic.Atom.call(this,g,h);if(i!=null){this.setModel(i);}
;this.addListener(b,this._onMouseOver,this);this.addListener(a,this._onMouseOut,this);}
,events:{"action":d},properties:{appearance:{refine:true,init:f}},members:{_forwardStates:{focused:true,hovered:true,selected:true,dragover:true},_onMouseOver:function(){this.addState(c);}
,_onMouseOut:function(){this.removeState(c);}
},destruct:function(){this.removeListener(b,this._onMouseOver,this);this.removeListener(a,this._onMouseOut,this);}
});}
)();
(function(){var a="qx.ui.virtual.cell.IWidgetCell";qx.Interface.define(a,{members:{getCellWidget:function(b,c){}
,pool:function(d){}
,updateStates:function(e,f){}
,updateData:function(g,h){}
}});}
)();
(function(){var d="qx.ui.virtual.cell.AbstractWidget",c="qx.event.type.Data",b="cell.states",a="abstract method call";qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.virtual.cell.IWidgetCell],construct:function(){qx.core.Object.call(this);this.__cQ=[];}
,events:{"created":c},members:{__cQ:null,_createWidget:function(){throw new Error(a);}
,updateData:function(e,f){throw new Error(a);}
,updateStates:function(g,h){var k=g.getUserData(b);if(k){var i=h||{};for(var j in k){if(!i[j]){g.removeState(j);}
;}
;}
else {k={};}
;if(h){for(var j in h){if(!k.state){g.addState(j);}
;}
;}
;g.setUserData(b,h);}
,getCellWidget:function(l,m){var n=this.__AA();this.updateStates(n,m);this.updateData(n,l);return n;}
,pool:function(o){this.__cQ.push(o);}
,_cleanupPool:function(){var p=this.__cQ.pop();while(p){p.destroy();p=this.__cQ.pop();}
;}
,__AA:function(){var q=this.__cQ.pop();if(q==null){q=this._createWidget();this.fireDataEvent("created",q);}
;return q;}
},destruct:function(){this._cleanupPool();this.__cQ=null;}
});}
)();
(function(){var d="_applyDelegate",c="qx.ui.virtual.cell.WidgetCell",b="Can't update data! The key '",a="' is not a Property!";qx.Class.define(c,{extend:qx.ui.virtual.cell.AbstractWidget,properties:{delegate:{apply:d,init:null,nullable:true}},members:{_applyDelegate:function(e,f){this._cleanupPool();}
,_createWidget:function(){var g=this.getDelegate();if(g!=null&&g.createWidget!=null){return g.createWidget();}
else {return new qx.ui.core.Widget();}
;}
,updateData:function(h,i){for(var j in i){if(qx.Class.hasProperty(h.constructor,j)){qx.util.PropertyUtil.setUserValue(h,j,i[j]);}
else {throw new Error(b+j+a);}
;}
;}
}});}
)();
(function(){var g="<br",f=" &nbsp;",e="<br>",d=" ",c="\n",b="qx.bom.String",a="";qx.Class.define(b,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(h){return qx.util.StringEscape.escape(h,qx.bom.String.FROM_CHARCODE);}
,unescape:function(i){return qx.util.StringEscape.unescape(i,qx.bom.String.TO_CHARCODE);}
,fromText:function(j){return qx.bom.String.escape(j).replace(/(  |\n)/g,function(k){var l={"  ":f,"\n":e};return l[k]||k;}
);}
,toText:function(m){return qx.bom.String.unescape(m.replace(/\s+|<([^>])+>/gi,function(n){if(n.indexOf(g)===0){return c;}
else if(n.length>0&&n.replace(/^\s*/,a).replace(/\s*$/,a)==a){return d;}
else {return a;}
;}
));}
},defer:function(o){o.FROM_CHARCODE=qx.lang.Object.invert(o.TO_CHARCODE);}
});}
)();
(function(){var g="&",f='X',e="",d='#',c="&#",b="qx.util.StringEscape",a=";";qx.Class.define(b,{statics:{escape:function(h,j){var m,o=e;for(var i=0,l=h.length;i<l;i++){var n=h.charAt(i);var k=n.charCodeAt(0);if(j[k]){m=g+j[k]+a;}
else {if(k>0x7F){m=c+k+a;}
else {m=n;}
;}
;o+=m;}
;return o;}
,unescape:function(p,q){return p.replace(/&[#\w]+;/gi,function(r){var s=r;var r=r.substring(1,r.length-1);var t=q[r];if(t){s=String.fromCharCode(t);}
else {if(r.charAt(0)==d){if(r.charAt(1).toUpperCase()==f){t=r.substring(2);if(t.match(/^[0-9A-Fa-f]+$/gi)){s=String.fromCharCode(parseInt(t,16));}
;}
else {t=r.substring(1);if(t.match(/^\d+$/gi)){s=String.fromCharCode(parseInt(t,10));}
;}
;}
;}
;return s;}
);}
}});}
)();
(function(){var p="resetPaddingRight",o="setPaddingBottom",n="resetPaddingTop",m="qx.ui.core.MContentPadding",l="resetPaddingLeft",k="setPaddingTop",j="setPaddingRight",i="resetPaddingBottom",h="contentPaddingLeft",g="setPaddingLeft",c="contentPaddingTop",f="shorthand",e="contentPaddingRight",b="contentPaddingBottom",a="Integer",d="_applyContentPadding";qx.Mixin.define(m,{properties:{contentPaddingTop:{check:a,init:0,apply:d,themeable:true},contentPaddingRight:{check:a,init:0,apply:d,themeable:true},contentPaddingBottom:{check:a,init:0,apply:d,themeable:true},contentPaddingLeft:{check:a,init:0,apply:d,themeable:true},contentPadding:{group:[c,e,b,h],mode:f,themeable:true}},members:{__mr:{contentPaddingTop:k,contentPaddingRight:j,contentPaddingBottom:o,contentPaddingLeft:g},__ms:{contentPaddingTop:n,contentPaddingRight:p,contentPaddingBottom:i,contentPaddingLeft:l},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();if(q==null){var t=this.__ms[name];s[t]();}
else {var u=this.__mr[name];s[u](q);}
;}
}});}
)();
(function(){var b="qx.ui.container.Scroll",a="pane";qx.Class.define(b,{extend:qx.ui.core.scroll.AbstractScrollArea,include:[qx.ui.core.MContentPadding],construct:function(content){qx.ui.core.scroll.AbstractScrollArea.call(this);if(content){this.add(content);}
;}
,members:{add:function(c){this.getChildControl(a).add(c);}
,remove:function(d){this.getChildControl(a).remove(d);}
,getChildren:function(){return this.getChildControl(a).getChildren();}
,_getContentPaddingTarget:function(){return this.getChildControl(a);}
}});}
)();
(function(){var i="_applyOverflowX",h="_applyOverflowY",g="qx.ui.core.MNativeOverflow",f="auto",e="overflowX",d="visible",c="hidden",b="scroll",a="overflowY";qx.Mixin.define(g,{properties:{overflowX:{check:[c,d,b,f],nullable:true,apply:i},overflowY:{check:[c,d,b,f],nullable:true,apply:h},overflow:{group:[e,a]}},members:{_applyOverflowX:function(j){this.getContentElement().setStyle(e,j);}
,_applyOverflowY:function(k){this.getContentElement().setStyle(a,k);}
}});}
)();
(function(){var o="text",n="engine.name",m="0px",l="webkit",k="changeHtml",j="_applyCssClass",i="class",h="qx.ui.embed.Html",g="_applyHtml",f="userSelect",c="html",e="",d="none",b="String",a="color";qx.Class.define(h,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(p){qx.ui.core.Widget.call(this);if(p!=null){this.setHtml(p);}
;}
,properties:{html:{check:b,apply:g,event:k,nullable:true},cssClass:{check:b,init:e,apply:j},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();}
,_applyHtml:function(q,r){var s=this.getContentElement();s.setAttribute(c,q||e);s.setStyles({"padding":m,"border":d});}
,_applyCssClass:function(t,u){this.getContentElement().setAttribute(i,t);}
,_applySelectable:function(v){qx.ui.core.Widget.prototype._applySelectable.call(this,v);if((qx.core.Environment.get(n)==l)){this.getContainerElement().setStyle(f,v?o:d);}
;}
,_applyFont:function(w,x){var y=w?qx.theme.manager.Font.getInstance().resolve(w).getStyles():qx.bom.Font.getDefaultStyles();if(this.getTextColor()!=null){delete y[a];}
;this.getContentElement().setStyles(y);}
,_applyTextColor:function(z,A){if(z){this.getContentElement().setStyle(a,qx.theme.manager.Color.getInstance().resolve(z));}
else {this.getContentElement().removeStyle(a);}
;}
}});}
)();
(function(){var eq="button-checked",ep="decoration/window/maximize-active-hovered.png",eo="keyboard-focus",en="menu-css",em="decoration/cursors/",el="slidebar",ek="tooltip-error-arrow",ej="table-scroller-focus-indicator",ei="popup-css",eh="move-frame",cC="nodrop",cB="decoration/table/boolean-true.png",cA="-invalid-css",cz="menu",cy="app-header",cx="row-layer",cw="text-inactive",cv="move",cu="decoration/window/restore-active-hovered.png",ct="shadow-window",ex="tree-folder",ey="window-pane-css",ev="right.png",ew="checkbox-undetermined-hovered",et="window-incl-statusbar-css",eu="tabview-page-button-bottom-inactive",er="tooltip-error",es="window-css",ez="window-statusbar",eA="button-hovered",dI="decoration/scrollbar/scrollbar-",dH="background-tip",dK="menubar-css",dJ="scrollbar-slider-horizontal-disabled",dM="radiobutton-disabled",dL="window-resize-frame-css",dO="button-pressed",dN="table-pane",dF="decoration/window/close-active.png",dE="native",v="button-invalid-shadow",w="decoration/window/minimize-active-hovered.png",x="menubar",y="icon/16/actions/dialog-cancel.png",z="tabview-page-button-top-inactive",A="tabview-page-button-left-inactive",B="menu-slidebar",C="toolbar-button-checked",D="-left",E="decoration/tree/open-selected.png",eS="decoration/window/minimize-inactive.png",eR="icon/16/apps/office-calendar.png",eQ="group-item-css",eP="group",eW="tabview-page-button-right-inactive",eV="decoration/window/minimize-active.png",eU="decoration/window/restore-inactive.png",eT="checkbox-checked-focused",eY="splitpane",eX="combobox/textfield",bz="decoration/window/close-active-hovered.png",bA="qx/icon/Tango/16/actions/window-close.png",bx="checkbox-pressed",by="button-disabled",bD="selected-dragover",bE="border-separator",bB="decoration/window/maximize-inactive.png",bC="dragover",bv="scrollarea",bw="scrollbar-vertical",bb="decoration/menu/checkbox-invert.gif",ba="decoration/toolbar/toolbar-handle-knob.gif",bd="icon/22/mimetypes/office-document.png",bc="table-header-cell",W="button-checked-focused",V="up.png",Y="best-fit",X="pane-css",U="decoration/tree/closed-selected.png",T="tooltip-error-arrow-left",bK="qx.theme.modern.Appearance",bL="text-active",bM="checkbox-disabled",bN="toolbar-button-hovered",bG="window-resize-frame-incl-statusbar-css",bH="decoration/form/checked.png",bI="progressive-table-header",bJ="decoration/table/select-column-order.png",bO="decoration/menu/radiobutton.gif",bP="decoration/arrows/forward.png",bo="decoration/table/descending.png",bn="decoration/form/undetermined.png",bm="tree-file",bl="window-captionbar-active",bk="checkbox-checked-hovered",bj="scrollbar-slider-vertical",bi="toolbar",bh="alias",bs="decoration/window/restore-active.png",br="decoration/table/boolean-false.png",bQ="icon/32/mimetypes/office-document.png",bR="text-gray",bS="mshtml",bT="tabview-pane",bU="decoration/arrows/rewind.png",bV="top",bW="icon/16/actions/dialog-ok.png",bX="progressbar-background",bY="engine.name",ca="table-header-cell-hovered",cK="window-statusbar-css",cJ="window",cI="browser.documentmode",cH="decoration/menu/radiobutton-invert.gif",cO="text-placeholder",cN="slider",cM="toolbar-css",cL="keep-align",cS="down.png",cR="groupitem-text",ds="tabview-page-button-top-active",dt="icon/22/places/folder.png",dq="decoration/window/maximize-active.png",dr="checkbox-checked-pressed",dn="decoration/window/close-inactive.png",dp="tabview-page-button-left-active",dl="toolbar-part",dm="decoration/splitpane/knob-vertical.png",dA=".gif",dB="table-statusbar",dT="progressive-table-header-cell-css",dS="window-captionbar-inactive",dV="copy",dU="decoration/arrows/down-invert.png",dX="decoration/menu/checkbox.gif",dW="window-caption-active-text",ea="decoration/splitpane/knob-horizontal.png",dY="group-css",dQ="icon/32/places/folder.png",dP="toolbar-separator",eH="tabview-page-button-bottom-active",eI="decoration/arrows/up-small.png",eJ="decoration/table/ascending.png",eK="decoration/arrows/up-invert.png",eD="small",eE="tabview-page-button-right-active",eF="-disabled",eG="scrollbar-horizontal",eB="progressbar",eC="checkbox-undetermined-focused",k="progressive-table-header-cell",j="menu-separator",i="tabview-pane-css",h="pane",g="htmlarea-background",f="decoration/arrows/right-invert.png",e="left.png",d="icon/16/actions/view-refresh.png",c="radiobutton-hovered",b="group-item",J="scrollbar/button",K="right",H="combobox/button",I="virtual-list",N="icon/16/places/folder.png",O="radiobutton-checked-focused",L="text-label",M="decoration/tree/closed.png",Q="table-scroller-header",R="scrollbar-slider-horizontal",cW="checkbox-hovered",cQ="checkbox-checked",de="decoration/arrows/left.png",da="radiobutton-checked",cF="button-focused",cD="text-light",bf="menu-slidebar-button",cG="tree",bq="checkbox-undetermined",bp="table-scroller-header-css",ck="text-input",cl="slidebar/button-forward",cm="background-splitpane",cn="text-hovered",co=".png",cp="decoration/tree/open.png",cq="default",cr="decoration/arrows/down-small.png",ch="datechooser",ci="slidebar/button-backward",cE="radiobutton-checked-disabled",dd="checkbox-focused",dc="radiobutton-checked-hovered",db="treevirtual-folder",di="shadow-popup",dh="icon/16/mimetypes/office-document.png",dg="background-medium",df="icon/32/places/folder-open.png",cY="icon/22/places/folder-open.png",cX="table",P="decoration/arrows/up.png",bu="decoration/form/",bt="radiobutton-focused",cP="decoration/arrows/right.png",bF="background-application",cV="invalid",cU="right-top",cT="selectbox",be="text-title",dk="icon/16/places/folder-open.png",S="radiobutton",bg="list",cb="tree-item",cc="combobox",cd="treevirtual-contract",ce="scrollbar",cf="datechooser/nav-button",cg="center",dD="checkbox",cj="treevirtual-expand",ec="",eb="textfield",ee="-invalid",ed="tooltip",eg="qx/static/blank.gif",ef="border-invalid",cs="input",dR="input-disabled",dj="menu-button",dG="input-focused-invalid",F="toolbar-button",G="spinner",dy="input-focused",dz="decoration/arrows/down.png",dw="popup",dx="cell",du="image",dv="middle",a="selected",dC="background-light",s="bold",r="text-disabled",q="groupbox",p="text-selected",o="label",n="button",m="main",l="css.boxshadow",u="css.borderradius",t="button-frame",eL="atom",eM="-css",eN="widget",eO="css.gradient.linear";qx.Theme.define(bK,{appearances:{"widget":{},"root":{style:function(fa){return {backgroundColor:bF,textColor:L,font:cq};}
},"label":{style:function(fb){return {textColor:fb.disabled?r:undefined};}
},"move-frame":{style:function(fc){return {decorator:m};}
},"resize-frame":eh,"dragdrop-cursor":{style:function(fd){var fe=cC;if(fd.copy){fe=dV;}
else if(fd.move){fe=cv;}
else if(fd.alias){fe=bh;}
;;return {source:em+fe+dA,position:cU,offset:[2,16,2,6]};}
},"image":{style:function(ff){return {opacity:!ff.replacement&&ff.disabled?0.3:1};}
},"atom":{},"atom/label":o,"atom/icon":du,"popup":{style:function(fg){var fh=qx.core.Environment.get(l);return {decorator:fh?ei:m,backgroundColor:dC,shadow:fh?undefined:di};}
},"button-frame":{alias:eL,style:function(fi){var fm,fl;var fj=[3,9];if(fi.checked&&fi.focused&&!fi.inner){fm=W;fl=undefined;fj=[1,7];}
else if(fi.disabled){fm=by;fl=undefined;}
else if(fi.pressed){fm=dO;fl=cn;}
else if(fi.checked){fm=eq;fl=undefined;}
else if(fi.hovered){fm=eA;fl=cn;}
else if(fi.focused&&!fi.inner){fm=cF;fl=undefined;fj=[1,7];}
else {fm=n;fl=undefined;}
;;;;;var fk;if(qx.core.Environment.get(u)&&qx.core.Environment.get(eO)){if(fi.invalid&&!fi.disabled){fm+=cA;}
else {fm+=eM;}
;}
else {fk=fi.invalid&&!fi.disabled?v:undefined;fj=[2,8];}
;return {decorator:fm,textColor:fl,shadow:fk,padding:fj,margin:[1,0]};}
},"button-frame/image":{style:function(fn){return {opacity:!fn.replacement&&fn.disabled?0.5:1};}
},"button":{alias:t,include:t,style:function(fo){return {center:true};}
},"hover-button":{alias:eL,include:eL,style:function(fp){var fq=fp.hovered?a:undefined;if(fq&&qx.core.Environment.get(eO)){fq+=eM;}
;return {decorator:fq,textColor:fp.hovered?p:undefined};}
},"splitbutton":{},"splitbutton/button":n,"splitbutton/arrow":{alias:n,include:n,style:function(fr,fs){return {icon:dz,padding:[fs.padding[0],fs.padding[1]-6],marginLeft:1};}
},"form-renderer-label":{include:o,style:function(){return {paddingTop:4};}
},"checkbox":{alias:eL,style:function(ft){var fu=qx.core.Environment.get(eO)&&qx.core.Environment.get(l);var fw;if(fu){if(ft.checked){fw=bH;}
else if(ft.undetermined){fw=bn;}
else {fw=eg;}
;}
else {if(ft.checked){if(ft.disabled){fw=cQ;}
else if(ft.focused){fw=eT;}
else if(ft.pressed){fw=dr;}
else if(ft.hovered){fw=bk;}
else {fw=cQ;}
;;;}
else if(ft.undetermined){if(ft.disabled){fw=bq;}
else if(ft.focused){fw=eC;}
else if(ft.hovered){fw=ew;}
else {fw=bq;}
;;}
else if(!ft.disabled){if(ft.focused){fw=dd;}
else if(ft.pressed){fw=bx;}
else if(ft.hovered){fw=cW;}
;;}
;;fw=fw||dD;var fv=ft.invalid&&!ft.disabled?ee:ec;fw=bu+fw+fv+co;}
;return {icon:fw,minWidth:fu?14:undefined,gap:fu?8:6};}
},"checkbox/icon":{style:function(fx){var fz=qx.core.Environment.get(eO)&&qx.core.Environment.get(l);if(!fz){return {opacity:!fx.replacement&&fx.disabled?0.3:1};}
;var fA;if(fx.disabled){fA=bM;}
else if(fx.focused){fA=dd;}
else if(fx.hovered){fA=cW;}
else {fA=dD;}
;;fA+=fx.invalid&&!fx.disabled?ee:ec;var fy;if(fx.undetermined){fy=[2,0];}
;return {decorator:fA,padding:fy,width:12,height:10};}
},"radiobutton":{alias:eL,style:function(fB){var fC=qx.core.Environment.get(u)&&qx.core.Environment.get(l);var fE;if(fC){fE=eg;}
else {if(fB.checked&&fB.focused){fE=O;}
else if(fB.checked&&fB.disabled){fE=cE;}
else if(fB.checked&&fB.hovered){fE=dc;}
else if(fB.checked){fE=da;}
else if(fB.focused){fE=bt;}
else if(fB.hovered){fE=c;}
else {fE=S;}
;;;;;var fD=fB.invalid&&!fB.disabled?ee:ec;fE=bu+fE+fD+co;}
;return {icon:fE,gap:fC?8:6};}
},"radiobutton/icon":{style:function(fF){var fG=qx.core.Environment.get(u)&&qx.core.Environment.get(l);if(!fG){return {opacity:!fF.replacement&&fF.disabled?0.3:1};}
;var fH;if(fF.disabled&&!fF.checked){fH=dM;}
else if(fF.checked&&fF.focused){fH=O;}
else if(fF.checked&&fF.disabled){fH=cE;}
else if(fF.checked&&fF.hovered){fH=dc;}
else if(fF.checked){fH=da;}
else if(fF.focused){fH=bt;}
else if(fF.hovered){fH=c;}
else {fH=S;}
;;;;;;fH+=fF.invalid&&!fF.disabled?ee:ec;return {decorator:fH,width:12,height:10};}
},"textfield":{style:function(fI){var fN;var fL=!!fI.focused;var fM=!!fI.invalid;var fJ=!!fI.disabled;if(fL&&fM&&!fJ){fN=dG;}
else if(fL&&!fM&&!fJ){fN=dy;}
else if(fJ){fN=dR;}
else if(!fL&&fM&&!fJ){fN=ef;}
else {fN=cs;}
;;;if(qx.core.Environment.get(eO)){fN+=eM;}
;var fK;if(fI.disabled){fK=r;}
else if(fI.showingPlaceholder){fK=cO;}
else {fK=ck;}
;return {decorator:fN,padding:[2,4,1],textColor:fK};}
},"textarea":{include:eb,style:function(fO){return {padding:4};}
},"spinner":{style:function(fP){var fT;var fR=!!fP.focused;var fS=!!fP.invalid;var fQ=!!fP.disabled;if(fR&&fS&&!fQ){fT=dG;}
else if(fR&&!fS&&!fQ){fT=dy;}
else if(fQ){fT=dR;}
else if(!fR&&fS&&!fQ){fT=ef;}
else {fT=cs;}
;;;if(qx.core.Environment.get(eO)){fT+=eM;}
;return {decorator:fT};}
},"spinner/textfield":{style:function(fU){return {marginRight:2,padding:[2,4,1],textColor:fU.disabled?r:ck};}
},"spinner/upbutton":{alias:t,include:t,style:function(fV,fW){return {icon:eI,padding:[fW.padding[0]-1,fW.padding[1]-5],shadow:undefined,margin:0};}
},"spinner/downbutton":{alias:t,include:t,style:function(fX,fY){return {icon:cr,padding:[fY.padding[0]-1,fY.padding[1]-5],shadow:undefined,margin:0};}
},"datefield":cc,"datefield/button":{alias:H,include:H,style:function(ga){return {icon:eR,padding:[0,3],decorator:undefined};}
},"datefield/textfield":eX,"datefield/list":{alias:ch,include:ch,style:function(gb){return {decorator:undefined};}
},"groupbox":{style:function(gc){return {legendPosition:bV};}
},"groupbox/legend":{alias:eL,style:function(gd){return {padding:[1,0,1,4],textColor:gd.invalid?cV:be,font:s};}
},"groupbox/frame":{style:function(ge){var gf=qx.core.Environment.get(u);return {padding:gf?10:12,margin:gf?1:undefined,decorator:gf?dY:eP};}
},"check-groupbox":q,"check-groupbox/legend":{alias:dD,include:dD,style:function(gg){return {padding:[1,0,1,4],textColor:gg.invalid?cV:be,font:s};}
},"radio-groupbox":q,"radio-groupbox/legend":{alias:S,include:S,style:function(gh){return {padding:[1,0,1,4],textColor:gh.invalid?cV:be,font:s};}
},"scrollarea":{style:function(gi){return {minWidth:50,minHeight:50};}
},"scrollarea/corner":{style:function(gj){return {backgroundColor:bF};}
},"scrollarea/pane":eN,"scrollarea/scrollbar-x":ce,"scrollarea/scrollbar-y":ce,"scrollbar":{style:function(gk){if(gk[dE]){return {};}
;var gl=qx.core.Environment.get(eO);var gm=gk.horizontal?eG:bw;if(gl){gm+=eM;}
;return {width:gk.horizontal?undefined:16,height:gk.horizontal?16:undefined,decorator:gm,padding:1};}
},"scrollbar/slider":{alias:cN,style:function(gn){return {padding:gn.horizontal?[0,1,0,1]:[1,0,1,0]};}
},"scrollbar/slider/knob":{include:t,style:function(go){var gp=qx.core.Environment.get(eO);var gq=go.horizontal?R:bj;if(go.disabled){gq+=eF;}
;if(gp){gq+=eM;}
;return {decorator:gq,minHeight:go.horizontal?undefined:9,minWidth:go.horizontal?9:undefined,padding:undefined,margin:0};}
},"scrollbar/button":{alias:t,include:t,style:function(gr){var gu=dI;if(gr.left){gu+=e;}
else if(gr.right){gu+=ev;}
else if(gr.up){gu+=V;}
else {gu+=cS;}
;;var gt=qx.core.Environment.get(eO);if(gr.left||gr.right){var gs=gr.left?3:4;return {padding:gt?[3,0,3,gs]:[2,0,2,gs],icon:gu,width:15,height:14,margin:0};}
else {return {padding:gt?3:[3,2],icon:gu,width:14,height:15,margin:0};}
;}
},"scrollbar/button-begin":J,"scrollbar/button-end":J,"slider":{style:function(gv){var gz;var gx=!!gv.focused;var gy=!!gv.invalid;var gw=!!gv.disabled;if(gx&&gy&&!gw){gz=dG;}
else if(gx&&!gy&&!gw){gz=dy;}
else if(gw){gz=dR;}
else if(!gx&&gy&&!gw){gz=ef;}
else {gz=cs;}
;;;if(qx.core.Environment.get(eO)){gz+=eM;}
;return {decorator:gz};}
},"slider/knob":{include:t,style:function(gA){return {decorator:gA.disabled?dJ:R,shadow:undefined,height:14,width:14,padding:0};}
},"list":{alias:bv,style:function(gB){var gF;var gD=!!gB.focused;var gE=!!gB.invalid;var gC=!!gB.disabled;if(gD&&gE&&!gC){gF=dG;}
else if(gD&&!gE&&!gC){gF=dy;}
else if(gC){gF=dR;}
else if(!gD&&gE&&!gC){gF=ef;}
else {gF=cs;}
;;;if(qx.core.Environment.get(eO)){gF+=eM;}
;return {backgroundColor:dC,decorator:gF};}
},"list/pane":eN,"listitem":{alias:eL,style:function(gG){var gH;if(gG.dragover){gH=gG.selected?bD:bC;}
else {gH=gG.selected?a:undefined;if(gH&&qx.core.Environment.get(eO)){gH+=eM;}
;}
;return {padding:gG.dragover?[4,4,2,4]:4,textColor:gG.selected?p:undefined,decorator:gH};}
},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:t,include:t,style:function(gI){return {padding:5,center:true,icon:gI.vertical?dz:cP};}
},"slidebar/button-backward":{alias:t,include:t,style:function(gJ){return {padding:5,center:true,icon:gJ.vertical?P:de};}
},"tabview":{style:function(gK){return {contentPadding:16};}
},"tabview/bar":{alias:el,style:function(gL){var gM=qx.core.Environment.get(u)&&qx.core.Environment.get(l)&&qx.core.Environment.get(eO);var gN={marginBottom:gL.barTop?-1:0,marginTop:gL.barBottom?gM?-4:-7:0,marginLeft:gL.barRight?gM?-3:-5:0,marginRight:gL.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};if(gL.barTop||gL.barBottom){gN.paddingLeft=5;gN.paddingRight=7;}
else {gN.paddingTop=5;gN.paddingBottom=7;}
;return gN;}
},"tabview/bar/button-forward":{include:cl,alias:cl,style:function(gO){if(gO.barTop||gO.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/button-backward":{include:ci,alias:ci,style:function(gP){if(gP.barTop||gP.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gQ){var gR=qx.core.Environment.get(eO)&&qx.core.Environment.get(u);return {decorator:gR?i:bT,minHeight:100,marginBottom:gQ.barBottom?-1:0,marginTop:gQ.barTop?-1:0,marginLeft:gQ.barLeft?-1:0,marginRight:gQ.barRight?-1:0};}
},"tabview-page":{alias:eN,include:eN,style:function(gS){var gT=qx.core.Environment.get(eO)&&qx.core.Environment.get(u);return {padding:gT?[4,3]:undefined};}
},"tabview-page/button":{alias:eL,style:function(gU){var hc,gX=0;var hb=0,gV=0,gY=0,ha=0;var gW=qx.core.Environment.get(u)&&qx.core.Environment.get(l)&&qx.core.Environment.get(eO);if(gU.checked){if(gU.barTop){hc=ds;gX=gW?[5,11]:[6,14];gY=gU.firstTab?0:-5;ha=gU.lastTab?0:-5;}
else if(gU.barBottom){hc=eH;gX=gW?[5,11]:[6,14];gY=gU.firstTab?0:-5;ha=gU.lastTab?0:-5;hb=3;}
else if(gU.barRight){hc=eE;gX=gW?[5,10]:[6,13];hb=gU.firstTab?0:-5;gV=gU.lastTab?0:-5;gY=2;}
else {hc=dp;gX=gW?[5,10]:[6,13];hb=gU.firstTab?0:-5;gV=gU.lastTab?0:-5;}
;;}
else {if(gU.barTop){hc=z;gX=gW?[3,9]:[4,10];hb=4;gY=gU.firstTab?5:1;ha=1;}
else if(gU.barBottom){hc=eu;gX=gW?[3,9]:[4,10];gV=4;gY=gU.firstTab?5:1;ha=1;hb=3;}
else if(gU.barRight){hc=eW;gX=gW?[3,9]:[4,10];ha=5;hb=gU.firstTab?5:1;gV=1;gY=3;}
else {hc=A;gX=gW?[3,9]:[4,10];gY=5;hb=gU.firstTab?5:1;gV=1;ha=1;}
;;}
;if(hc&&gW){hc+=eM;}
;return {zIndex:gU.checked?10:5,decorator:hc,padding:gX,marginTop:hb,marginBottom:gV,marginLeft:gY,marginRight:ha,textColor:gU.disabled?r:gU.checked?bL:cw};}
},"tabview-page/button/label":{alias:o,style:function(hd){return {padding:[0,1,0,1],margin:hd.focused?0:1,decorator:hd.focused?eo:undefined};}
},"tabview-page/button/close-button":{alias:eL,style:function(he){return {icon:bA};}
},"toolbar":{style:function(hf){var hg=qx.core.Environment.get(eO);return {decorator:hg?cM:bi,spacing:2};}
},"toolbar/part":{style:function(hh){return {decorator:dl,spacing:2};}
},"toolbar/part/container":{style:function(hi){return {paddingLeft:2,paddingRight:2};}
},"toolbar/part/handle":{style:function(hj){return {source:ba,marginLeft:3,marginRight:3};}
},"toolbar-button":{alias:eL,style:function(hk){var hm;if(hk.pressed||(hk.checked&&!hk.hovered)||(hk.checked&&hk.disabled)){hm=C;}
else if(hk.hovered&&!hk.disabled){hm=bN;}
;var hl=qx.core.Environment.get(eO)&&qx.core.Environment.get(u);if(hl&&hm){hm+=eM;}
;return {marginTop:2,marginBottom:2,padding:(hk.pressed||hk.checked||hk.hovered)&&!hk.disabled||(hk.disabled&&hk.checked)?3:5,decorator:hm};}
},"toolbar-menubutton":{alias:F,include:F,style:function(hn){return {showArrow:true};}
},"toolbar-menubutton/arrow":{alias:du,include:du,style:function(ho){return {source:cr};}
},"toolbar-splitbutton":{style:function(hp){return {marginTop:2,marginBottom:2};}
},"toolbar-splitbutton/button":{alias:F,include:F,style:function(hq){return {icon:dz,marginTop:undefined,marginBottom:undefined};}
},"toolbar-splitbutton/arrow":{alias:F,include:F,style:function(hr){if(hr.pressed||hr.checked||(hr.hovered&&!hr.disabled)){var hs=1;}
else {var hs=3;}
;return {padding:hs,icon:dz,marginTop:undefined,marginBottom:undefined};}
},"toolbar-separator":{style:function(ht){return {decorator:dP,margin:7};}
},"tree":bg,"tree-item":{style:function(hu){var hv=hu.selected?a:undefined;if(hv&&qx.core.Environment.get(eO)){hv+=eM;}
;return {padding:[2,6],textColor:hu.selected?p:undefined,decorator:hv};}
},"tree-item/icon":{include:du,style:function(hw){return {paddingRight:5};}
},"tree-item/label":o,"tree-item/open":{include:du,style:function(hx){var hy;if(hx.selected&&hx.opened){hy=E;}
else if(hx.selected&&!hx.opened){hy=U;}
else if(hx.opened){hy=cp;}
else {hy=M;}
;;return {padding:[0,5,0,2],source:hy};}
},"tree-folder":{include:cb,alias:cb,style:function(hz){var hB,hA;if(hz.small){hB=hz.opened?dk:N;hA=dk;}
else if(hz.large){hB=hz.opened?df:dQ;hA=df;}
else {hB=hz.opened?cY:dt;hA=cY;}
;return {icon:hB,iconOpened:hA};}
},"tree-file":{include:cb,alias:cb,style:function(hC){return {icon:hC.small?dh:hC.large?bQ:bd};}
},"treevirtual":cX,"treevirtual-folder":{style:function(hD){return {icon:hD.opened?dk:N};}
},"treevirtual-file":{include:db,alias:db,style:function(hE){return {icon:dh};}
},"treevirtual-line":{style:function(hF){return {icon:eg};}
},"treevirtual-contract":{style:function(hG){return {icon:cp,paddingLeft:5,paddingTop:2};}
},"treevirtual-expand":{style:function(hH){return {icon:M,paddingLeft:5,paddingTop:2};}
},"treevirtual-only-contract":cd,"treevirtual-only-expand":cj,"treevirtual-start-contract":cd,"treevirtual-start-expand":cj,"treevirtual-end-contract":cd,"treevirtual-end-expand":cj,"treevirtual-cross-contract":cd,"treevirtual-cross-expand":cj,"treevirtual-end":{style:function(hI){return {icon:eg};}
},"treevirtual-cross":{style:function(hJ){return {icon:eg};}
},"tooltip":{include:dw,style:function(hK){return {backgroundColor:dH,padding:[1,3,2,3],offset:[15,5,5,5]};}
},"tooltip/atom":eL,"tooltip-error":{include:ed,style:function(hL){var hO=qx.core.Environment.get(u)&&qx.core.Environment.get(l);var hN=er;if(hO){hN+=eM;}
;if(hL.placementLeft){hN+=D;}
;var hP=ek;if(hL.placementLeft){hP=T;if(hO){hP+=eM;}
;}
;if(hO){if(hL.placementLeft){var hM=[9,20,3,6];}
else {var hM=[6,6,7,-8];}
;}
else {if(hL.placementLeft){var hM=[6,20,3,4];}
else {var hM=[6,10,6,-10];}
;}
;if(!hO&&hL.placementLeft&&qx.core.Environment.get(bY)==bS&&qx.core.Environment.get(cI)<9){hP=undefined;hM=[5,10];}
;return {textColor:p,backgroundColor:undefined,placeMethod:eN,offset:[0,14,0,14],marginTop:-2,position:cU,showTimeout:100,hideTimeout:10000,shadow:hN,decorator:hP,font:s,padding:hM,maxWidth:333};}
},"tooltip-error/atom":eL,"window":{style:function(hQ){var hS=qx.core.Environment.get(u)&&qx.core.Environment.get(eO)&&qx.core.Environment.get(l);var hT;var hR;if(hS){if(hQ.showStatusbar){hT=et;}
else {hT=es;}
;}
else {hR=ct;}
;return {decorator:hT,shadow:hR,contentPadding:[10,10,10,10],margin:hQ.maximized?0:[0,5,5,0]};}
},"window-resize-frame":{style:function(hU){var hV=qx.core.Environment.get(u);var hW;if(hV){if(hU.showStatusbar){hW=bG;}
else {hW=dL;}
;}
else {hW=m;}
;return {decorator:hW};}
},"window/pane":{style:function(hX){var hY=qx.core.Environment.get(u)&&qx.core.Environment.get(eO)&&qx.core.Environment.get(l);return {decorator:hY?ey:cJ};}
},"window/captionbar":{style:function(ia){var ib=qx.core.Environment.get(u)&&qx.core.Environment.get(eO)&&qx.core.Environment.get(l);var ic=ia.active?bl:dS;if(ib){ic+=eM;}
;return {decorator:ic,textColor:ia.active?dW:bR,minHeight:26,paddingRight:2};}
},"window/icon":{style:function(id){return {margin:[5,0,3,6]};}
},"window/title":{style:function(ie){return {alignY:dv,font:s,marginLeft:6,marginRight:12};}
},"window/minimize-button":{alias:eL,style:function(ig){return {icon:ig.active?ig.hovered?w:eV:eS,margin:[4,8,2,0]};}
},"window/restore-button":{alias:eL,style:function(ih){return {icon:ih.active?ih.hovered?cu:bs:eU,margin:[5,8,2,0]};}
},"window/maximize-button":{alias:eL,style:function(ii){return {icon:ii.active?ii.hovered?ep:dq:bB,margin:[4,8,2,0]};}
},"window/close-button":{alias:eL,style:function(ij){return {icon:ij.active?ij.hovered?bz:dF:dn,margin:[4,8,2,0]};}
},"window/statusbar":{style:function(ik){var il=qx.core.Environment.get(u)&&qx.core.Environment.get(eO)&&qx.core.Environment.get(l);return {padding:[2,6],decorator:il?cK:ez,minHeight:18};}
},"window/statusbar-text":{style:function(im){return {font:eD};}
},"iframe":{style:function(io){return {decorator:m};}
},"resizer":{style:function(ip){var iq=qx.core.Environment.get(l)&&qx.core.Environment.get(u)&&qx.core.Environment.get(eO);return {decorator:iq?X:h};}
},"splitpane":{style:function(ir){return {decorator:eY};}
},"splitpane/splitter":{style:function(is){return {width:is.horizontal?3:undefined,height:is.vertical?3:undefined,backgroundColor:cm};}
},"splitpane/splitter/knob":{style:function(it){return {source:it.horizontal?ea:dm};}
},"splitpane/slider":{style:function(iu){return {width:iu.horizontal?3:undefined,height:iu.vertical?3:undefined,backgroundColor:cm};}
},"selectbox":t,"selectbox/atom":eL,"selectbox/popup":dw,"selectbox/list":{alias:bg},"selectbox/arrow":{include:du,style:function(iv){return {source:dz,paddingLeft:5};}
},"datechooser":{style:function(iw){var iA;var iy=!!iw.focused;var iz=!!iw.invalid;var ix=!!iw.disabled;if(iy&&iz&&!ix){iA=dG;}
else if(iy&&!iz&&!ix){iA=dy;}
else if(ix){iA=dR;}
else if(!iy&&iz&&!ix){iA=ef;}
else {iA=cs;}
;;;if(qx.core.Environment.get(eO)){iA+=eM;}
;return {padding:2,decorator:iA,backgroundColor:dC};}
},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:t,alias:t,style:function(iB){var iC={padding:[2,4],shadow:undefined};if(iB.lastYear){iC.icon=bU;iC.marginRight=1;}
else if(iB.lastMonth){iC.icon=de;}
else if(iB.nextYear){iC.icon=bP;iC.marginLeft=1;}
else if(iB.nextMonth){iC.icon=cP;}
;;;return iC;}
},"datechooser/last-year-button-tooltip":ed,"datechooser/last-month-button-tooltip":ed,"datechooser/next-year-button-tooltip":ed,"datechooser/next-month-button-tooltip":ed,"datechooser/last-year-button":cf,"datechooser/last-month-button":cf,"datechooser/next-month-button":cf,"datechooser/next-year-button":cf,"datechooser/month-year-label":{style:function(iD){return {font:s,textAlign:cg,textColor:iD.disabled?r:undefined};}
},"datechooser/date-pane":{style:function(iE){return {textColor:iE.disabled?r:undefined,marginTop:2};}
},"datechooser/weekday":{style:function(iF){return {textColor:iF.disabled?r:iF.weekend?cD:undefined,textAlign:cg,paddingTop:2,backgroundColor:dg};}
},"datechooser/week":{style:function(iG){return {textAlign:cg,padding:[2,4],backgroundColor:dg};}
},"datechooser/day":{style:function(iH){var iI=iH.disabled?undefined:iH.selected?a:undefined;if(iI&&qx.core.Environment.get(eO)){iI+=eM;}
;return {textAlign:cg,decorator:iI,textColor:iH.disabled?r:iH.selected?p:iH.otherMonth?cD:undefined,font:iH.today?s:undefined,padding:[2,4]};}
},"combobox":{style:function(iJ){var iN;var iL=!!iJ.focused;var iM=!!iJ.invalid;var iK=!!iJ.disabled;if(iL&&iM&&!iK){iN=dG;}
else if(iL&&!iM&&!iK){iN=dy;}
else if(iK){iN=dR;}
else if(!iL&&iM&&!iK){iN=ef;}
else {iN=cs;}
;;;if(qx.core.Environment.get(eO)){iN+=eM;}
;return {decorator:iN};}
},"combobox/popup":dw,"combobox/list":{alias:bg},"combobox/button":{include:t,alias:t,style:function(iO,iP){var iQ={icon:dz,padding:[iP.padding[0],iP.padding[1]-6],shadow:undefined,margin:undefined};if(iO.selected){iQ.decorator=cF;}
;return iQ;}
},"combobox/textfield":{include:eb,style:function(iR){return {decorator:undefined};}
},"menu":{style:function(iS){var iT=qx.core.Environment.get(eO)&&qx.core.Environment.get(l);var iU={decorator:iT?en:cz,shadow:iT?undefined:di,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:iS.submenu||iS.contextmenu?Y:cL};if(iS.submenu){iU.position=cU;iU.offset=[-2,-3];}
;return iU;}
},"menu/slidebar":B,"menu-slidebar":eN,"menu-slidebar-button":{style:function(iV){var iW=iV.hovered?a:undefined;if(iW&&qx.core.Environment.get(eO)){iW+=eM;}
;return {decorator:iW,padding:7,center:true};}
},"menu-slidebar/button-backward":{include:bf,style:function(iX){return {icon:iX.hovered?eK:P};}
},"menu-slidebar/button-forward":{include:bf,style:function(iY){return {icon:iY.hovered?dU:dz};}
},"menu-separator":{style:function(ja){return {height:0,decorator:j,margin:[4,2]};}
},"menu-button":{alias:eL,style:function(jb){var jc=jb.selected?a:undefined;if(jc&&qx.core.Environment.get(eO)){jc+=eM;}
;return {decorator:jc,textColor:jb.selected?p:undefined,padding:[4,6]};}
},"menu-button/icon":{include:du,style:function(jd){return {alignY:dv};}
},"menu-button/label":{include:o,style:function(je){return {alignY:dv,padding:1};}
},"menu-button/shortcut":{include:o,style:function(jf){return {alignY:dv,marginLeft:14,padding:1};}
},"menu-button/arrow":{include:du,style:function(jg){return {source:jg.selected?f:cP,alignY:dv};}
},"menu-checkbox":{alias:dj,include:dj,style:function(jh){return {icon:!jh.checked?undefined:jh.selected?bb:dX};}
},"menu-radiobutton":{alias:dj,include:dj,style:function(ji){return {icon:!ji.checked?undefined:ji.selected?cH:bO};}
},"menubar":{style:function(jj){var jk=qx.core.Environment.get(eO);return {decorator:jk?dK:x};}
},"menubar-button":{alias:eL,style:function(jl){var jm=(jl.pressed||jl.hovered)&&!jl.disabled?a:undefined;if(jm&&qx.core.Environment.get(eO)){jm+=eM;}
;return {decorator:jm,textColor:jl.pressed||jl.hovered?p:undefined,padding:[3,8]};}
},"colorselector":eN,"colorselector/control-bar":eN,"colorselector/control-pane":eN,"colorselector/visual-pane":q,"colorselector/preset-grid":eN,"colorselector/colorbucket":{style:function(jn){return {decorator:m,width:16,height:16};}
},"colorselector/preset-field-set":q,"colorselector/input-field-set":{include:q,alias:q,style:function(){return {paddingTop:20};}
},"colorselector/preview-field-set":{include:q,alias:q,style:function(){return {paddingTop:20};}
},"colorselector/hex-field-composite":eN,"colorselector/hex-field":eb,"colorselector/rgb-spinner-composite":eN,"colorselector/rgb-spinner-red":G,"colorselector/rgb-spinner-green":G,"colorselector/rgb-spinner-blue":G,"colorselector/hsb-spinner-composite":eN,"colorselector/hsb-spinner-hue":G,"colorselector/hsb-spinner-saturation":G,"colorselector/hsb-spinner-brightness":G,"colorselector/preview-content-old":{style:function(jo){return {decorator:m,width:50,height:10};}
},"colorselector/preview-content-new":{style:function(jp){return {decorator:m,backgroundColor:dC,width:50,height:10};}
},"colorselector/hue-saturation-field":{style:function(jq){return {decorator:m,margin:5};}
},"colorselector/brightness-field":{style:function(jr){return {decorator:m,margin:[5,7]};}
},"colorselector/hue-saturation-pane":eN,"colorselector/hue-saturation-handle":eN,"colorselector/brightness-pane":eN,"colorselector/brightness-handle":eN,"colorpopup":{alias:dw,include:dw,style:function(js){return {padding:5,backgroundColor:bF};}
},"colorpopup/field":{style:function(jt){return {decorator:m,margin:2,width:14,height:14,backgroundColor:dC};}
},"colorpopup/selector-button":n,"colorpopup/auto-button":n,"colorpopup/preview-pane":q,"colorpopup/current-preview":{style:function(ju){return {height:20,padding:4,marginLeft:4,decorator:m,allowGrowX:true};}
},"colorpopup/selected-preview":{style:function(jv){return {height:20,padding:4,marginRight:4,decorator:m,allowGrowX:true};}
},"colorpopup/colorselector-okbutton":{alias:n,include:n,style:function(jw){return {icon:bW};}
},"colorpopup/colorselector-cancelbutton":{alias:n,include:n,style:function(jx){return {icon:y};}
},"table":{alias:eN,style:function(jy){return {decorator:cX};}
},"table/statusbar":{style:function(jz){return {decorator:dB,padding:[0,2]};}
},"table/column-button":{alias:t,style:function(jA){var jB=qx.core.Environment.get(eO);return {decorator:jB?bp:Q,padding:3,icon:bJ};}
},"table-column-reset-button":{include:dj,alias:dj,style:function(){return {icon:d};}
},"table-scroller":eN,"table-scroller/scrollbar-x":ce,"table-scroller/scrollbar-y":ce,"table-scroller/header":{style:function(jC){var jD=qx.core.Environment.get(eO);return {decorator:jD?bp:Q,textColor:jC.disabled?r:undefined};}
},"table-scroller/pane":{style:function(jE){return {backgroundColor:dN};}
},"table-scroller/focus-indicator":{style:function(jF){return {decorator:ej};}
},"table-scroller/resize-line":{style:function(jG){return {backgroundColor:bE,width:2};}
},"table-header-cell":{alias:eL,style:function(jH){return {minWidth:13,minHeight:20,padding:jH.hovered?[3,4,2,4]:[3,4],decorator:jH.hovered?ca:bc,sortIcon:jH.sorted?(jH.sortedAscending?eJ:bo):undefined};}
},"table-header-cell/label":{style:function(jI){return {minWidth:0,alignY:dv,paddingRight:5};}
},"table-header-cell/sort-icon":{style:function(jJ){return {alignY:dv,alignX:K,opacity:jJ.disabled?0.3:1};}
},"table-header-cell/icon":{style:function(jK){return {minWidth:0,alignY:dv,paddingRight:5,opacity:jK.disabled?0.3:1};}
},"table-editor-textfield":{include:eb,style:function(jL){return {decorator:undefined,padding:[2,2],backgroundColor:dC};}
},"table-editor-selectbox":{include:cT,alias:cT,style:function(jM){return {padding:[0,2],backgroundColor:dC};}
},"table-editor-combobox":{include:cc,alias:cc,style:function(jN){return {decorator:undefined,backgroundColor:dC};}
},"progressive-table-header":{alias:eN,style:function(jO){return {decorator:bI};}
},"progressive-table-header-cell":{alias:eL,style:function(jP){var jQ=qx.core.Environment.get(eO);return {minWidth:40,minHeight:25,paddingLeft:6,decorator:jQ?dT:k};}
},"app-header":{style:function(jR){return {font:s,textColor:p,padding:[8,12],decorator:cy};}
},"app-header-label":o,"virtual-list":bg,"virtual-list/row-layer":cx,"row-layer":eN,"group-item":{include:o,alias:o,style:function(jS){return {padding:4,decorator:qx.core.Environment.get(eO)?eQ:b,textColor:cR,font:s};}
},"virtual-selectbox":cT,"virtual-selectbox/dropdown":dw,"virtual-selectbox/dropdown/list":{alias:I},"virtual-combobox":cc,"virtual-combobox/dropdown":dw,"virtual-combobox/dropdown/list":{alias:I},"virtual-tree":{include:cG,alias:cG,style:function(jT){return {itemHeight:26};}
},"virtual-tree-folder":ex,"virtual-tree-file":bm,"column-layer":eN,"cell":{style:function(jU){return {textColor:jU.selected?p:L,padding:[3,6],font:cq};}
},"cell-string":dx,"cell-number":{include:dx,style:function(jV){return {textAlign:K};}
},"cell-image":dx,"cell-boolean":{include:dx,style:function(jW){return {iconTrue:cB,iconFalse:br};}
},"cell-atom":dx,"cell-date":dx,"cell-html":dx,"htmlarea":{"include":eN,style:function(jX){return {backgroundColor:g};}
},"progressbar":{style:function(jY){return {decorator:eB,padding:[1],backgroundColor:bX,width:200,height:20};}
},"progressbar/progress":{style:function(ka){var kb=ka.disabled?b:a;if(qx.core.Environment.get(eO)){kb+=eM;}
;return {decorator:kb};}
}}});}
)();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";qx.Theme.define(a,{title:c,aliases:{"icon":b}});}
)();
(function(){var g="",f="This decorator is already in-use. Modification is not possible anymore!",e="qx.debug",d="qx.theme",c="qx.ui.decoration.MBackgroundColor",b="Color",a="_applyBackgroundColor";qx.Mixin.define(c,{properties:{backgroundColor:{check:b,nullable:true,apply:a}},members:{_tintBackgroundColor:function(h,i,j){if(i==null){i=this.getBackgroundColor();}
;if(qx.core.Environment.get(d)){i=qx.theme.manager.Color.getInstance().resolve(i);}
;j.backgroundColor=i||g;}
,_resizeBackgroundColor:function(k,l,m){var n=this.getInsets();l-=n.left+n.right;m-=n.top+n.bottom;return {left:n.left,top:n.top,width:l,height:m};}
,_applyBackgroundColor:function(){if(qx.core.Environment.get(e)){if(this._isInitialized()){throw new Error(f);}
;}
;}
}});}
)();
(function(){var j="backgroundPositionX",i='</div>',h="engine.version",g="scale",f="browser.quirksmode",e='<div style="',d="qx.debug",c="repeat-y",b="hidden",a="qx.ui.decoration.MBackgroundImage",v="String",u="backgroundPositionY",t='">',s="mshtml",r="engine.name",q="This decorator is already in-use. Modification is not possible anymore!",p="no-repeat",o=" ",n="repeat-x",m="repeat",k="",l="_applyBackgroundImage";qx.Mixin.define(a,{properties:{backgroundImage:{check:v,nullable:true,apply:l},backgroundRepeat:{check:[m,n,c,p,g],init:m,apply:l},backgroundPositionX:{nullable:true,apply:l},backgroundPositionY:{nullable:true,apply:l},backgroundPosition:{group:[u,j]}},members:{_generateMarkup:function(w,content){return this._generateBackgroundMarkup(w,content);}
,_generateBackgroundMarkup:function(x,content){var B=k;var A=this.getBackgroundImage();var z=this.getBackgroundRepeat();var top=this.getBackgroundPositionY();if(top==null){top=0;}
;var C=this.getBackgroundPositionX();if(C==null){C=0;}
;x.backgroundPosition=C+o+top;if(A){var y=qx.util.AliasManager.getInstance().resolve(A);B=qx.bom.element.Decoration.create(y,z,x);}
else {if((qx.core.Environment.get(r)==s)){if(parseFloat(qx.core.Environment.get(h))<7||qx.core.Environment.get(f)){x.overflow=b;}
;}
;if(!content){content=k;}
;B=e+qx.bom.element.Style.compile(x)+t+content+i;}
;return B;}
,_applyBackgroundImage:function(){if(qx.core.Environment.get(d)){if(this._isInitialized()){throw new Error(q);}
;}
;}
}});}
)();
(function(){var j="qx.theme",i="border-top",h="border-left",g="border-right",f="qx.ui.decoration.MSingleBorder",e="border-bottom",d="This decorator is already in-use. Modification is not possible anymore!",c="Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!",b="absolute",a="widthTop",H="styleRight",G="styleBottom",F="qx.debug",E="widthBottom",D="widthLeft",C="styleTop",B="colorBottom",A="styleLeft",z="widthRight",y="colorLeft",q="colorRight",r="colorTop",o="shorthand",p="double",m="px ",n="dotted",k="_applyWidth",l="Color",s="",t="dashed",v="Number",u=" ",x="solid",w="_applyStyle";qx.Mixin.define(f,{properties:{widthTop:{check:v,init:0,apply:k},widthRight:{check:v,init:0,apply:k},widthBottom:{check:v,init:0,apply:k},widthLeft:{check:v,init:0,apply:k},styleTop:{nullable:true,check:[x,n,t,p],init:x,apply:w},styleRight:{nullable:true,check:[x,n,t,p],init:x,apply:w},styleBottom:{nullable:true,check:[x,n,t,p],init:x,apply:w},styleLeft:{nullable:true,check:[x,n,t,p],init:x,apply:w},colorTop:{nullable:true,check:l,apply:w},colorRight:{nullable:true,check:l,apply:w},colorBottom:{nullable:true,check:l,apply:w},colorLeft:{nullable:true,check:l,apply:w},left:{group:[D,A,y]},right:{group:[z,H,q]},top:{group:[a,C,r]},bottom:{group:[E,G,B]},width:{group:[a,z,E,D],mode:o},style:{group:[C,H,G,A],mode:o},color:{group:[r,q,B,y],mode:o}},members:{_styleBorder:function(I){if(qx.core.Environment.get(j)){var K=qx.theme.manager.Color.getInstance();var O=K.resolve(this.getColorTop());var L=K.resolve(this.getColorRight());var J=K.resolve(this.getColorBottom());var N=K.resolve(this.getColorLeft());}
else {var O=this.getColorTop();var L=this.getColorRight();var J=this.getColorBottom();var N=this.getColorLeft();}
;var M=this.getWidthTop();if(M>0){I[i]=M+m+this.getStyleTop()+u+(O||s);}
;var M=this.getWidthRight();if(M>0){I[g]=M+m+this.getStyleRight()+u+(L||s);}
;var M=this.getWidthBottom();if(M>0){I[e]=M+m+this.getStyleBottom()+u+(J||s);}
;var M=this.getWidthLeft();if(M>0){I[h]=M+m+this.getStyleLeft()+u+(N||s);}
;if(qx.core.Environment.get(F)){if(I.length===0){throw new Error(c);}
;}
;I.position=b;I.top=0;I.left=0;}
,_resizeBorder:function(P,Q,R){var S=this.getInsets();Q-=S.left+S.right;R-=S.top+S.bottom;if(Q<0){Q=0;}
;if(R<0){R=0;}
;return {left:S.left-this.getWidthLeft(),top:S.top-this.getWidthTop(),width:Q,height:R};}
,_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};}
,_applyWidth:function(){this._applyStyle();this._resetInsets();}
,_applyStyle:function(){if(qx.core.Environment.get(F)){if(this._markup){throw new Error(d);}
;}
;}
}});}
)();
(function(){var b="qx.ui.decoration.Single",a="px";qx.Class.define(b,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder],construct:function(c,d,e){qx.ui.decoration.Abstract.call(this);if(c!=null){this.setWidth(c);}
;if(d!=null){this.setStyle(d);}
;if(e!=null){this.setColor(e);}
;}
,members:{_markup:null,getMarkup:function(){if(this._markup){return this._markup;}
;var f={};this._styleBorder(f);var g=this._generateBackgroundMarkup(f);return this._markup=g;}
,resize:function(h,i,j){var k=this._resizeBorder(h,i,j);h.style.width=k.width+a;h.style.height=k.height+a;h.style.left=k.left+a;h.style.top=k.top+a;}
,tint:function(l,m){this._tintBackgroundColor(l,m,l.style);}
,_isInitialized:function(){return !!this._markup;}
,_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();}
},destruct:function(){this._markup=null;}
});}
)();
(function(){var j="radiusTopRight",i="radiusTopLeft",h="-webkit-border-bottom-left-radius",g="-webkit-background-clip",f="radiusBottomRight",e="-webkit-border-bottom-right-radius",d="border-top-left-radius",c="qx.debug",b="border-top-right-radius",a="border-bottom-left-radius",y="radiusBottomLeft",x="-webkit-border-top-left-radius",w="shorthand",v="-moz-border-radius-bottomright",u="padding-box",t="border-bottom-right-radius",s="qx.ui.decoration.MBorderRadius",r="-moz-border-radius-topright",q="This decorator is already in-use. Modification is not possible anymore!",p="-webkit-border-top-right-radius",n="-moz-border-radius-topleft",o="-moz-border-radius-bottomleft",l="Integer",m="_applyBorderRadius",k="px";qx.Mixin.define(s,{properties:{radiusTopLeft:{nullable:true,check:l,apply:m},radiusTopRight:{nullable:true,check:l,apply:m},radiusBottomLeft:{nullable:true,check:l,apply:m},radiusBottomRight:{nullable:true,check:l,apply:m},radius:{group:[i,j,f,y],mode:w}},members:{_styleBorderRadius:function(z){z[g]=u;var A=this.getRadiusTopLeft();if(A>0){z[n]=A+k;z[x]=A+k;z[d]=A+k;}
;A=this.getRadiusTopRight();if(A>0){z[r]=A+k;z[p]=A+k;z[b]=A+k;}
;A=this.getRadiusBottomLeft();if(A>0){z[o]=A+k;z[h]=A+k;z[a]=A+k;}
;A=this.getRadiusBottomRight();if(A>0){z[v]=A+k;z[e]=A+k;z[t]=A+k;}
;}
,_applyBorderRadius:function(){if(qx.core.Environment.get(c)){if(this._isInitialized()){throw new Error(q);}
;}
;}
}});}
)();
(function(){var c="qx.ui.decoration.Background",b="absolute",a="px";qx.Class.define(c,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(d){qx.ui.decoration.Abstract.call(this);if(d!=null){this.setBackgroundColor(d);}
;}
,members:{__BM:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};}
,_isInitialized:function(){return !!this.__BM;}
,getMarkup:function(){if(this.__BM){return this.__BM;}
;var e={position:b,top:0,left:0};var f=this._generateBackgroundMarkup(e);return this.__BM=f;}
,resize:function(g,h,i){var j=this.getInsets();g.style.width=(h-j.left-j.right)+a;g.style.height=(i-j.top-j.bottom)+a;g.style.left=-j.left+a;g.style.top=-j.top+a;}
,tint:function(k,l){this._tintBackgroundColor(k,l,k.style);}
},destruct:function(){this.__BM=null;}
});}
)();
(function(){var j="px",i='</div>',h="qx.ui.decoration.Beveled",g="css.boxmodel",f="qx.debug",e='<div style="position:absolute;top:1px;left:1px;',d='border-bottom:',c='border-right:',b="",a="content",z="Number",y='border-left:',x='border-top:',w="This decorator is already in-use. Modification is not possible anymore!",v='<div style="position:absolute;top:1px;left:0px;',u='position:absolute;top:0px;left:1px;',t='<div style="overflow:hidden;font-size:0;line-height:0;">',s="absolute",r="1px",q='<div style="',o='border:',p="1px solid ",m="Color",n=";",k="_applyStyle",l='"></div>';qx.Class.define(h,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(A,B,C){qx.ui.decoration.Abstract.call(this);if(A!=null){this.setOuterColor(A);}
;if(B!=null){this.setInnerColor(B);}
;if(C!=null){this.setInnerOpacity(C);}
;}
,properties:{innerColor:{check:m,nullable:true,apply:k},innerOpacity:{check:z,init:1,apply:k},outerColor:{check:m,nullable:true,apply:k}},members:{__BM:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};}
,_isInitialized:function(){return !!this.__BM;}
,_applyStyle:function(){if(qx.core.Environment.get(f)){if(this.__BM){throw new Error(w);}
;}
;}
,getMarkup:function(){if(this.__BM){return this.__BM;}
;var D=qx.theme.manager.Color.getInstance();var E=[];var H=p+D.resolve(this.getOuterColor())+n;var G=p+D.resolve(this.getInnerColor())+n;E.push(t);E.push(q);E.push(o,H);E.push(qx.bom.element.Opacity.compile(0.35));E.push(l);E.push(v);E.push(y,H);E.push(c,H);E.push(qx.bom.element.Opacity.compile(1));E.push(l);E.push(q);E.push(u);E.push(x,H);E.push(d,H);E.push(qx.bom.element.Opacity.compile(1));E.push(l);var F={position:s,top:r,left:r,opacity:1};E.push(this._generateBackgroundMarkup(F));E.push(e);E.push(o,G);E.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));E.push(l);E.push(i);return this.__BM=E.join(b);}
,resize:function(I,J,K){if(J<4){J=4;}
;if(K<4){K=4;}
;if(qx.core.Environment.get(g)==a){var outerWidth=J-2;var outerHeight=K-2;var Q=outerWidth;var P=outerHeight;var innerWidth=J-4;var innerHeight=K-4;}
else {var outerWidth=J;var outerHeight=K;var Q=J-2;var P=K-2;var innerWidth=Q;var innerHeight=P;}
;var S=j;var O=I.childNodes[0].style;O.width=outerWidth+S;O.height=outerHeight+S;var N=I.childNodes[1].style;N.width=outerWidth+S;N.height=P+S;var M=I.childNodes[2].style;M.width=Q+S;M.height=outerHeight+S;var L=I.childNodes[3].style;L.width=Q+S;L.height=P+S;var R=I.childNodes[4].style;R.width=innerWidth+S;R.height=innerHeight+S;}
,tint:function(T,U){this._tintBackgroundColor(T,U,T.childNodes[3].style);}
},destruct:function(){this.__BM=null;}
});}
)();
(function(){var j="</div>",i="),to(",h="from(",g="background-image",f="background",e="<div style='width: 100%; height: 100%; position: absolute;",d="StartColorStr='#FF",c="', ",b="'></div>",a="-webkit-gradient(linear,",U="startColorPosition",T="qx.debug",S="deg, ",R="css.gradient.legacywebkit",Q="EndColorStr='#FF",P="startColor",O="qx.theme",N="MBoxShadow",M="<div style=\"position: absolute; width: 100%; height: 100%; ",L="(GradientType=",q="qx.ui.decoration.MLinearBackgroundGradient",r="(",o="endColorPosition",p="';)\">",m="endColor",n=", ",k="overflow",l="hidden",s="This decorator is already in-use. Modification is not possible anymore!",t="linear-gradient",A="filter:progid:DXImageTransform.Microsoft.Gradient",y=" 0",E="px",C="0",H="shorthand",G="Color",v="vertical",K="css.gradient.filter",J="Number",I="%",u=")",w="",x="css.gradient.linear",z=",",B=" ",D="horizontal",F="_applyLinearBackgroundGradient";qx.Mixin.define(q,{properties:{startColor:{check:G,nullable:true,apply:F},endColor:{check:G,nullable:true,apply:F},orientation:{check:[D,v],init:v,apply:F},startColorPosition:{check:J,init:0,apply:F},endColorPosition:{check:J,init:100,apply:F},colorPositionUnit:{check:[E,I],init:I,apply:F},gradientStart:{group:[P,U],mode:H},gradientEnd:{group:[m,o],mode:H}},members:{_styleLinearBackgroundGradient:function(V){var bc=this.__sf();var bg=bc.start;var ba=bc.end;var bh=this.getColorPositionUnit();if(qx.core.Environment.get(R)){bh=bh===E?w:bh;if(this.getOrientation()==D){var bf=this.getStartColorPosition()+bh+y+bh;var bd=this.getEndColorPosition()+bh+y+bh;}
else {var bf=C+bh+B+this.getStartColorPosition()+bh;var bd=C+bh+B+this.getEndColorPosition()+bh;}
;var X=h+bg+i+ba+u;var Y=a+bf+z+bd+z+X+u;V[f]=Y;}
else if(qx.core.Environment.get(K)&&!qx.core.Environment.get(x)){V[k]=l;}
else {var bi=this.getOrientation()==D?0:270;var bb=bg+B+this.getStartColorPosition()+bh;var W=ba+B+this.getEndColorPosition()+bh;var be=qx.core.Environment.get(x);if(be===t){bi=this.getOrientation()==D?bi+90:bi-90;}
;V[g]=be+r+bi+S+bb+z+W+u;}
;}
,__sf:function(){if(qx.core.Environment.get(O)){var bj=qx.theme.manager.Color.getInstance();var bl=bj.resolve(this.getStartColor());var bk=bj.resolve(this.getEndColor());}
else {var bl=this.getStartColor();var bk=this.getEndColor();}
;return {start:bl,end:bk};}
,_getContent:function(){if(qx.core.Environment.get(K)&&!qx.core.Environment.get(x)){var bo=this.__sf();var br=this.getOrientation()==D?1:0;var bq=qx.util.ColorUtil.hex3StringToHex6String(bo.start);var bn=qx.util.ColorUtil.hex3StringToHex6String(bo.end);bq=bq.substring(1,bq.length);bn=bn.substring(1,bn.length);var bp=w;if(this.classname.indexOf(N)!=-1){var bm={};this._styleBoxShadow(bm);bp=e+qx.bom.element.Style.compile(bm)+b;}
;return M+A+L+br+n+d+bq+c+Q+bn+p+bp+j;}
;return w;}
,_resizeLinearBackgroundGradient:function(bs,bt,bu){var bv=this.getInsets();bt-=bv.left+bv.right;bu-=bv.top+bv.bottom;return {left:bv.left,top:bv.top,width:bt,height:bu};}
,_applyLinearBackgroundGradient:function(){if(qx.core.Environment.get(T)){if(this._isInitialized()){throw new Error(s);}
;}
;}
}});}
)();
(function(){var r="sliceBottom",q="qx.debug.dispose",p="insetTop",o="sliceLeft",n="_applyBaseImage",m="insetBottom",l="sliceRight",k="_applyFill",j="sliceTop",i="insetLeft",c="String",h="qx.ui.decoration.Grid",f="insetRight",b="set",a="shorthand",e="_applyInsets",d="_applySlices",g="Number";qx.Class.define(h,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(s,t){qx.core.Object.call(this);if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__BJ=new qx.ui.decoration.css3.BorderImage();if(s){this.__BK(s);}
;}
else {this.__BJ=new qx.ui.decoration.GridDiv(s);}
;if(t!=null){this.__BJ.setInsets(t);}
;if(qx.core.Environment.get(q)){this.__BJ.$$ignoreDisposeWarning=true;}
;}
,properties:{baseImage:{check:c,nullable:true,apply:n},insetLeft:{check:g,nullable:true,apply:e},insetRight:{check:g,nullable:true,apply:e},insetBottom:{check:g,nullable:true,apply:e},insetTop:{check:g,nullable:true,apply:e},insets:{group:[p,f,m,i],mode:a},sliceLeft:{check:g,nullable:true,apply:d},sliceRight:{check:g,nullable:true,apply:d},sliceBottom:{check:g,nullable:true,apply:d},sliceTop:{check:g,nullable:true,apply:d},slices:{group:[j,l,r,o],mode:a},fill:{apply:k}},members:{__BJ:null,getMarkup:function(){return this.__BJ.getMarkup();}
,resize:function(u,v,w){this.__BJ.resize(u,v,w);}
,tint:function(x,y){}
,getInsets:function(){return this.__BJ.getInsets();}
,_applyInsets:function(z,A,name){var B=b+qx.lang.String.firstUp(name);this.__BJ[B](z);}
,_applySlices:function(C,D,name){var E=b+qx.lang.String.firstUp(name);if(this.__BJ[E]){this.__BJ[E](C);}
;}
,_applyFill:function(F,G,name){if(this.__BJ.setFill){this.__BJ.setFill(F);}
;}
,_applyBaseImage:function(H,I){if(this.__BJ instanceof qx.ui.decoration.GridDiv){this.__BJ.setBaseImage(H);}
else {this.__BK(H);}
;}
,__BK:function(J){this.__BJ.setBorderImage(J);var T=qx.util.AliasManager.getInstance().resolve(J);var U=/(.*)(\.[a-z]+)$/.exec(T);var P=U[1];var S=U[2];var M=qx.util.ResourceManager.getInstance();var V=M.getImageHeight(P+"-t"+S);var K=M.getImageWidth(P+"-r"+S);var L=M.getImageHeight(P+"-b"+S);var W=M.getImageWidth(P+"-l"+S);if(qx.core.Environment.get("qx.debug")&&!this.__BJ instanceof qx.ui.decoration.css3.BorderImage){var N="The value of the property 'topSlice' is null! "+"Please verify the image '"+P+"-t"+S+"' is present.";var O="The value of the property 'rightSlice' is null! "+"Please verify the image '"+P+"-r"+S+"' is present.";var R="The value of the property 'bottomSlice' is null! "+"Please verify the image '"+P+"-b"+S+"' is present.";var Q="The value of the property 'leftSlice' is null! "+"Please verify the image '"+P+"-l"+S+"' is present.";qx.core.Assert.assertNotNull(V,N);qx.core.Assert.assertNotNull(K,O);qx.core.Assert.assertNotNull(L,R);qx.core.Assert.assertNotNull(W,Q);}
;if(V&&K&&L&&W){this.__BJ.setSlice([V,K,L,W]);}
;}
},destruct:function(){this.__BJ.dispose();this.__BJ=null;}
});}
)();
(function(){var j="css.borderimage.standardsyntax",i="Boolean",h="px ",g="sliceBottom",f="solid",e=";'></div>",d="<div style='",c="qx.debug",b="sliceLeft",a="sliceRight",F="repeatX",E=" fill",D="String",C="qx.ui.decoration.css3.BorderImage",B="border-box",A="transparent",z='") ',y="sliceTop",x="This decorator is already in-use. Modification is not possible anymore!",w='url("',q="hidden",r="repeatY",o="absolute",p="repeat",m="",n="round",k="shorthand",l="px",s=" ",t="stretch",v="Integer",u="_applyStyle";qx.Class.define(C,{extend:qx.ui.decoration.Abstract,construct:function(G,H){qx.ui.decoration.Abstract.call(this);if(G!=null){this.setBorderImage(G);}
;if(H!=null){this.setSlice(H);}
;}
,statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:D,nullable:true,apply:u},sliceTop:{check:v,init:0,apply:u},sliceRight:{check:v,init:0,apply:u},sliceBottom:{check:v,init:0,apply:u},sliceLeft:{check:v,init:0,apply:u},slice:{group:[y,a,g,b],mode:k},repeatX:{check:[t,p,n],init:t,apply:u},repeatY:{check:[t,p,n],init:t,apply:u},repeat:{group:[F,r],mode:k},fill:{check:i,init:true}},members:{__BM:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};}
,_isInitialized:function(){return !!this.__BM;}
,getMarkup:function(){if(this.__BM){return this.__BM;}
;var I=this._resolveImageUrl(this.getBorderImage());var J=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];var K=[this.getRepeatX(),this.getRepeatY()].join(s);var L=this.getFill()&&qx.core.Environment.get(j)?E:m;this.__BM=[d,qx.bom.element.Style.compile({"borderImage":w+I+z+J.join(s)+L+s+K,"borderStyle":f,"borderColor":A,position:o,lineHeight:0,fontSize:0,overflow:q,boxSizing:B,borderWidth:J.join(h)+l}),e].join(m);return this.__BM;}
,resize:function(M,N,O){M.style.width=N+l;M.style.height=O+l;}
,tint:function(P,Q){}
,_applyStyle:function(R,S,name){if(qx.core.Environment.get(c)){if(this._isInitialized()){throw new Error(x);}
;}
;}
,_resolveImageUrl:function(T){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(T));}
},destruct:function(){this.__BM=null;}
});}
)();
(function(){var j="-tr",i="-l",h='</div>',g="scale",f="-br",e="-t",d="browser.quirksmode",c="-tl",b="-r",a='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',B="qx.debug",A="_applyBaseImage",z="-b",y="String",x="",w="-bl",v="qx.ui.decoration.GridDiv",u="-c",t="mshtml",s="engine.name",q="This decorator is already in-use. Modification is not possible anymore!",r="engine.version",o="scale-x",p="scale-y",m="no-repeat",n="0px",k="-1px",l="px";qx.Class.define(v,{extend:qx.ui.decoration.Abstract,construct:function(C,D){qx.ui.decoration.Abstract.call(this);if(C!=null){this.setBaseImage(C);}
;if(D!=null){this.setInsets(D);}
;}
,properties:{baseImage:{check:y,nullable:true,apply:A}},members:{_markup:null,_images:null,_edges:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};}
,_isInitialized:function(){return !!this._markup;}
,getMarkup:function(){if(this._markup){return this._markup;}
;var E=qx.bom.element.Decoration;var F=this._images;var G=this._edges;var H=[];H.push(a);H.push(E.create(F.tl,m,{top:0,left:0}));H.push(E.create(F.t,o,{top:0,left:G.left+l}));H.push(E.create(F.tr,m,{top:0,right:0}));H.push(E.create(F.bl,m,{bottom:0,left:0}));H.push(E.create(F.b,o,{bottom:0,left:G.left+l}));H.push(E.create(F.br,m,{bottom:0,right:0}));H.push(E.create(F.l,p,{top:G.top+l,left:0}));H.push(E.create(F.c,g,{top:G.top+l,left:G.left+l}));H.push(E.create(F.r,p,{top:G.top+l,right:0}));H.push(h);return this._markup=H.join(x);}
,resize:function(I,J,K){var L=this._edges;var innerWidth=J-L.left-L.right;var innerHeight=K-L.top-L.bottom;if(innerWidth<0){innerWidth=0;}
;if(innerHeight<0){innerHeight=0;}
;I.style.width=J+l;I.style.height=K+l;I.childNodes[1].style.width=innerWidth+l;I.childNodes[4].style.width=innerWidth+l;I.childNodes[7].style.width=innerWidth+l;I.childNodes[6].style.height=innerHeight+l;I.childNodes[7].style.height=innerHeight+l;I.childNodes[8].style.height=innerHeight+l;if((qx.core.Environment.get(s)==t)){if(parseFloat(qx.core.Environment.get(r))<7||(qx.core.Environment.get(d)&&parseFloat(qx.core.Environment.get(r))<8)){if(J%2==1){I.childNodes[2].style.marginRight=k;I.childNodes[5].style.marginRight=k;I.childNodes[8].style.marginRight=k;}
else {I.childNodes[2].style.marginRight=n;I.childNodes[5].style.marginRight=n;I.childNodes[8].style.marginRight=n;}
;if(K%2==1){I.childNodes[3].style.marginBottom=k;I.childNodes[4].style.marginBottom=k;I.childNodes[5].style.marginBottom=k;}
else {I.childNodes[3].style.marginBottom=n;I.childNodes[4].style.marginBottom=n;I.childNodes[5].style.marginBottom=n;}
;}
;}
;}
,tint:function(M,N){}
,_applyBaseImage:function(O,P){if(qx.core.Environment.get(B)){if(this._markup){throw new Error(q);}
;}
;if(O){var T=this._resolveImageUrl(O);var U=/(.*)(\.[a-z]+)$/.exec(T);var S=U[1];var R=U[2];var Q=this._images={tl:S+c+R,t:S+e+R,tr:S+j+R,bl:S+w+R,b:S+z+R,br:S+f+R,l:S+i+R,c:S+u+R,r:S+b+R};this._edges=this._computeEdgeSizes(Q);}
;}
,_resolveImageUrl:function(V){return qx.util.AliasManager.getInstance().resolve(V);}
,_computeEdgeSizes:function(W){var X=qx.util.ResourceManager.getInstance();return {top:X.getImageHeight(W.t),bottom:X.getImageHeight(W.b),left:X.getImageWidth(W.l),right:X.getImageWidth(W.r)};}
},destruct:function(){this._markup=this._images=this._edges=null;}
});}
)();
(function(){var a="qx.ui.decoration.Uniform";qx.Class.define(a,{extend:qx.ui.decoration.Single,construct:function(b,c,d){qx.ui.decoration.Single.call(this);if(b!=null){this.setWidth(b);}
;if(c!=null){this.setStyle(c);}
;if(d!=null){this.setColor(d);}
;}
});}
)();
(function(){var j="innerWidthRight",i="top",h="innerColorBottom",g="innerWidthTop",f="innerColorRight",e="innerColorTop",d="relative",c="browser.documentmode",b="innerColorLeft",a="",H="qx.ui.decoration.MDoubleBorder",G="left",F="Invalid Double decorator (zero inner border width). Use qx.ui.decoration.Single instead!",E="engine.version",D="innerWidthBottom",C="innerWidthLeft",B="position",A="Invalid Double decorator (zero outer border width). Use qx.ui.decoration.Single instead!",z="absolute",y="qx.theme",q="qx.debug",r="shorthand",o="line-height",p="engine.name",m="mshtml",n="Color",k="Number",l="border-top",s="border-left",t="border-bottom",v="border-right",u="px ",x=" ",w='';qx.Mixin.define(H,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__sk;this._resizeBorder=this.__sj;this._styleBorder=this.__sh;this._generateMarkup=this.__si;}
,properties:{innerWidthTop:{check:k,init:0},innerWidthRight:{check:k,init:0},innerWidthBottom:{check:k,init:0},innerWidthLeft:{check:k,init:0},innerWidth:{group:[g,j,D,C],mode:r},innerColorTop:{nullable:true,check:n},innerColorRight:{nullable:true,check:n},innerColorBottom:{nullable:true,check:n},innerColorLeft:{nullable:true,check:n},innerColor:{group:[e,f,h,b],mode:r}},members:{__sg:null,__sh:function(I){if(qx.core.Environment.get(y)){var K=qx.theme.manager.Color.getInstance();var L=K.resolve(this.getInnerColorTop());var O=K.resolve(this.getInnerColorRight());var M=K.resolve(this.getInnerColorBottom());var N=K.resolve(this.getInnerColorLeft());}
else {var L=this.getInnerColorTop();var O=this.getInnerColorRight();var M=this.getInnerColorBottom();var N=this.getInnerColorLeft();}
;I.position=d;var J=this.getInnerWidthTop();if(J>0){I[l]=J+u+this.getStyleTop()+x+L;}
;var J=this.getInnerWidthRight();if(J>0){I[v]=J+u+this.getStyleRight()+x+O;}
;var J=this.getInnerWidthBottom();if(J>0){I[t]=J+u+this.getStyleBottom()+x+M;}
;var J=this.getInnerWidthLeft();if(J>0){I[s]=J+u+this.getStyleLeft()+x+N;}
;if(qx.core.Environment.get(q)){if(!I[l]&&!I[v]&&!I[t]&&!I[s]){throw new Error(F);}
;}
;}
,__si:function(P){var T=this._generateBackgroundMarkup(P,this._getContent?this._getContent():a);if(qx.core.Environment.get(y)){var R=qx.theme.manager.Color.getInstance();var W=R.resolve(this.getColorTop());var S=R.resolve(this.getColorRight());var Q=R.resolve(this.getColorBottom());var V=R.resolve(this.getColorLeft());}
else {var W=this.getColorTop();var S=this.getColorRight();var Q=this.getColorBottom();var V=this.getColorLeft();}
;P[l]=w;P[v]=w;P[t]=w;P[s]=w;P[o]=0;if((qx.core.Environment.get(p)==m&&parseFloat(qx.core.Environment.get(E))<8)||(qx.core.Environment.get(p)==m&&qx.core.Environment.get(c)<8)){P[o]=w;}
;var U=this.getWidthTop();if(U>0){P[l]=U+u+this.getStyleTop()+x+W;}
;var U=this.getWidthRight();if(U>0){P[v]=U+u+this.getStyleRight()+x+S;}
;var U=this.getWidthBottom();if(U>0){P[t]=U+u+this.getStyleBottom()+x+Q;}
;var U=this.getWidthLeft();if(U>0){P[s]=U+u+this.getStyleLeft()+x+V;}
;if(qx.core.Environment.get(q)){if(P[l]==w&&P[v]==w&&P[t]==w&&P[s]==w){throw new Error(A);}
;}
;P[B]=z;P[i]=0;P[G]=0;return this.__sg=this._generateBackgroundMarkup(P,T);}
,__sj:function(X,Y,ba){var bb=this.getInsets();Y-=bb.left+bb.right;ba-=bb.top+bb.bottom;var bc=bb.left-this.getWidthLeft()-this.getInnerWidthLeft();var top=bb.top-this.getWidthTop()-this.getInnerWidthTop();return {left:bc,top:top,width:Y,height:ba,elementToApplyDimensions:X.firstChild};}
,__sk:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};}
}});}
)();
(function(){var q="box-shadow",p="This decorator is already in-use. Modification is not possible anymore!",o="shadowHorizontalLength",n="Boolean",m="",l="-webkit-box-shadow",k="qx.debug",j="-moz-box-shadow",i="qx.theme",h="shadowVerticalLength",c="inset ",g="shorthand",f="qx.ui.decoration.MBoxShadow",b="Color",a="px ",e="Integer",d="_applyBoxShadow";qx.Mixin.define(f,{properties:{shadowHorizontalLength:{nullable:true,check:e,apply:d},shadowVerticalLength:{nullable:true,check:e,apply:d},shadowBlurRadius:{nullable:true,check:e,apply:d},shadowSpreadRadius:{nullable:true,check:e,apply:d},shadowColor:{nullable:true,check:b,apply:d},inset:{init:false,check:n,apply:d},shadowLength:{group:[o,h],mode:g}},members:{_styleBoxShadow:function(r){if(qx.core.Environment.get(i)){var s=qx.theme.manager.Color.getInstance();var v=s.resolve(this.getShadowColor());}
else {var v=this.getShadowColor();}
;if(v!=null){var y=this.getShadowVerticalLength()||0;var t=this.getShadowHorizontalLength()||0;var blur=this.getShadowBlurRadius()||0;var x=this.getShadowSpreadRadius()||0;var w=this.getInset()?c:m;var u=w+t+a+y+a+blur+a+x+a+v;r[j]=u;r[l]=u;r[q]=u;}
;}
,_applyBoxShadow:function(){if(qx.core.Environment.get(k)){if(this._isInitialized()){throw new Error(p);}
;}
;}
}});}
)();
(function(){var cM="checkbox-start",cL="decoration/tabview/tab-button-top-active.png",cK="group-background",cJ="decoration/form/button-c.png",cI="keyboard-focus",cH="button-disabled-start",cG="selected-end",cF="table-header-hovered",cE="decoration/groupbox/groupbox.png",cD="decoration/pane/pane.png",bM="decoration/menu/background.png",bL="decoration/tabview/tabview-pane.png",bK="decoration/toolbar/toolbar-part.gif",bJ="input-focused-css",bI="decoration/menu/bar-background.png",bH="window-border-caption",bG="radiobutton-hovered",bF="tooltip-error-css",bE="radiobutton-checked-focused",bD="groupitem-end",cT="button-disabled-css",cU="group-border",cR="scrollbar-slider-vertical-css",cS="window-css",cP="selected-start",cQ="window-resize-frame-css",cN="tabview-end",cO="window-statusbar-background",cV="decoration/scrollbar/scrollbar-bg-vertical.png",cW="button-pressed-css",cm="toolbar-button-hovered-css",cl="window-caption-active-end",co="dotted",cn="checkbox-disabled-end",cq="window-caption-active-start",cp="button-focused",cs="menu-start",cr="decoration/form/tooltip-error.png",ck="window-captionbar-active-css",cj="qx/decoration/Modern",k="decoration/tabview/tab-button-right-inactive.png",l="border-toolbar-separator-left",m="decoration/form/button-checked.png",n="decoration/scrollbar/scrollbar-bg-horizontal.png",o="decoration/tabview/tab-button-left-active.png",p="decoration/tabview/tab-button-bottom-active.png",q="decoration/tabview/tab-button-bottom-inactive.png",r="decoration/form/button-disabled.png",s="decoration/form/button-pressed.png",t="background-splitpane",dl="decoration/form/button-checked-focused.png",dk="px",dj="decoration/window/statusbar.png",di="input-border-disabled",dq="checkbox-inner",dp="scrollbar-horizontal-css",dn="button-disabled-end",dm="toolbar-end",ds="groupitem-start",dr="decoration/form/button-hovered.png",bd="checkbox-hovered-inner",be="input-focused-start",bb="scrollbar-start",bc="scrollbar-slider-start",bh="radiobutton-checked-disabled",bi="checkbox-focused",bf="qx.theme.modern.Decoration",bg="decoration/form/button.png",Y="decoration/app-header.png",ba="decoration/form/button-focused.png",L="radiobutton-checked-hovered",K="button-hovered-css",N="checkbox-disabled-inner",M="border-toolbar-separator-right",H="border-focused",G="decoration/shadow/shadow.png",J="scrollbar-end",I="decoration/group-item.png",F="window-caption-inactive-end",E="checkbox-end",bn="tabview-inactive-end",bo="input-end",bp="button-checked-focused-css",bq="decoration/tabview/tab-button-left-inactive.png",bj="input-focused-inner-invalid",bk="menu-separator-top",bl="window-caption-inactive-start",bm="scrollbar-slider-end",br="decoration/window/captionbar-inactive.png",bs="decoration/tabview/tab-button-top-inactive.png",V="pane-end",U="input-focused-end",T="decoration/form/tooltip-error-arrow.png",S="menubar-start",R="toolbar-start",Q="checkbox-disabled-start",P="radiobutton-focused",O="pane-start",X="table-focus-indicator",W="button-checked-css",bt="decoration/form/button-checked-c.png",bu="menu-separator-bottom",bv="decoration/shadow/shadow-small.png",bw="input-start",bx="decoration/window/captionbar-active.png",by="decoration/tabview/tab-button-right-active.png",bz="decoration/toolbar/toolbar-gradient.png",bA="checkbox-hovered-inner-invalid",bB="checkbox-disabled-border",bC="button-hovered-end",bQ="repeat-y",bP="border-dragover",bO="button-hovered-start",bN="tooltip-error",bU="progressive-table-header-border-right",bT="decoration/scrollbar/scrollbar-button-bg-vertical.png",bS="radiobutton-background",bR="decoration/form/tooltip-error-arrow-right.png",bW="checkbox-focus",bV="scrollbar-slider-horizontal-css",cf="menu-end",cg="decoration/selection.png",cd="horizontal",ce="table-header-start",cb="decoration/scrollbar/scrollbar-button-bg-horizontal.png",cc="decoration/form/input-focused.png",bY="right",ca="checkbox-hovered-invalid",ch="decoration/table/header-cell.png",ci="tabview-inactive-start",cw="table-header-end",cv="border-button",cy="border-focused-invalid",cx="button-focused-css",cA="checkbox-border",cz="tabview-start",cC="radiobutton-disabled",cB="radiobutton-hovered-invalid",cu="tabview-page-button-top-active-css",ct="button-border-disabled",de="tabview-page-button-top-inactive-css",df="decoration/form/input.png",dg="border-toolbar-border-inner",dh="input-css",da="border-toolbar-button-outer",db="top",dc="border-disabled",dd="background-pane",cX="no-repeat",cY="border-input",j="border-inner-input",i="border-inner-scrollbar",h="radiobutton-checked",g="window-border",f="tabview-inactive",e="checkbox",d="radiobutton",c="button-css",b="border-separator",a="checkbox-hovered",w="button-start",x="button-end",u="background-light",v="tabview-background",A="repeat-x",B="shadow",y="border-invalid",z="border-main",C="scale",D="solid",bX="invalid";qx.Theme.define(bf,{aliases:{decoration:cj},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:z}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:cg,backgroundRepeat:C}},"selected-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:cP,endColor:cG}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:cg,backgroundRepeat:C,bottom:[2,D,bP]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,D,bP]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:cD,insets:[0,2,3,0]}},"pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:v,radius:3,shadowColor:B,shadowBlurRadius:2,shadowLength:0,gradientStart:[O,0],gradientEnd:[V,100]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:cE}},"group-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{backgroundColor:cK,radius:4,color:cU,width:1}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bX,innerColor:j,innerOpacity:0.5,backgroundImage:df,backgroundRepeat:A,backgroundColor:u}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:cI,style:co}},"radiobutton":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:bS,radius:5,width:1,innerWidth:2,color:cA,innerColor:bS,shadowLength:0,shadowBlurRadius:0,shadowColor:bW,insetLeft:5}},"radiobutton-checked":{include:d,style:{backgroundColor:h}},"radiobutton-checked-focused":{include:h,style:{shadowBlurRadius:4}},"radiobutton-checked-hovered":{include:h,style:{innerColor:a}},"radiobutton-focused":{include:d,style:{shadowBlurRadius:4}},"radiobutton-hovered":{include:d,style:{backgroundColor:a,innerColor:a}},"radiobutton-disabled":{include:d,style:{innerColor:cC,backgroundColor:cC,color:bB}},"radiobutton-checked-disabled":{include:cC,style:{backgroundColor:bh}},"radiobutton-invalid":{include:d,style:{color:bX}},"radiobutton-checked-invalid":{include:h,style:{color:bX}},"radiobutton-checked-focused-invalid":{include:bE,style:{color:bX,shadowColor:bX}},"radiobutton-checked-hovered-invalid":{include:L,style:{color:bX,innerColor:cB}},"radiobutton-focused-invalid":{include:P,style:{color:bX,shadowColor:bX}},"radiobutton-hovered-invalid":{include:bG,style:{color:bX,innerColor:cB,backgroundColor:cB}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:b}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:cr,insets:[2,0,2,2]}},"tooltip-error-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:bN,radius:4,shadowColor:B,shadowBlurRadius:2,shadowLength:1,insets:[2,0,0,2]}},"tooltip-error-left":{include:bN,style:{insets:[2,5,5,2]}},"tooltip-error-css-left":{include:bF,style:{insets:[-1,0,0,-2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:T,backgroundPositionY:db,backgroundRepeat:cX,insets:[-4,0,0,13]}},"tooltip-error-arrow-left":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bR,backgroundPositionY:db,backgroundPositionX:bY,backgroundRepeat:cX,insets:[-4,-13,0,0]}},"tooltip-error-arrow-left-css":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bR,backgroundPositionY:db,backgroundPositionX:bY,backgroundRepeat:cX,insets:[-6,-13,0,0]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:G,insets:[0,8,8,0]}},"shadow-window-css":{decorator:[qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{shadowColor:B,shadowBlurRadius:2,shadowLength:1}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:bv,insets:[0,3,3,0]}},"popup-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:z,shadowColor:B,shadowBlurRadius:3,shadowLength:1}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:n,backgroundRepeat:A}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:cV,backgroundRepeat:bQ}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cb,backgroundRepeat:C,outerColor:z,innerColor:i,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cb,backgroundRepeat:C,outerColor:dc,innerColor:i,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bT,backgroundRepeat:C,outerColor:z,innerColor:i,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bT,backgroundRepeat:C,outerColor:dc,innerColor:i,innerOpacity:0.3}},"scrollbar-horizontal-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[bb,0],gradientEnd:[J,100]}},"scrollbar-vertical-css":{include:dp,style:{orientation:cd}},"scrollbar-slider-horizontal-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[bc,0],gradientEnd:[bm,100],color:z,width:1}},"scrollbar-slider-vertical-css":{include:bV,style:{orientation:cd}},"scrollbar-slider-horizontal-disabled-css":{include:bV,style:{color:ct}},"scrollbar-slider-vertical-disabled-css":{include:cR,style:{color:ct}},"button-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:cv,width:1,startColor:w,endColor:x,startColorPosition:35,endColorPosition:100}},"button-disabled-css":{include:c,style:{color:ct,startColor:cH,endColor:dn}},"button-hovered-css":{include:c,style:{startColor:bO,endColor:bC}},"button-checked-css":{include:c,style:{endColor:w,startColor:x}},"button-pressed-css":{include:c,style:{endColor:bO,startColor:bC}},"button-focused-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:cv,width:1,innerColor:cp,innerWidth:2,startColor:w,endColor:x,startColorPosition:30,endColorPosition:100}},"button-checked-focused-css":{include:cx,style:{endColor:w,startColor:x}},"button-invalid-css":{include:c,style:{color:y}},"button-disabled-invalid-css":{include:cT,style:{color:y}},"button-hovered-invalid-css":{include:K,style:{color:y}},"button-checked-invalid-css":{include:W,style:{color:y}},"button-pressed-invalid-css":{include:cW,style:{color:y}},"button-focused-invalid-css":{include:cx,style:{color:y}},"button-checked-focused-invalid-css":{include:bp,style:{color:y}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:r,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:dr,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:m,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:dl,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Single,style:{color:bX,width:1,insets:0}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bX,innerColor:cy,insets:[0]}},"checkbox":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow],style:{width:1,color:cA,innerWidth:1,innerColor:dq,gradientStart:[cM,0],gradientEnd:[E,100],shadowLength:0,shadowBlurRadius:0,shadowColor:bW,insetLeft:4}},"checkbox-hovered":{include:e,style:{innerColor:bd,gradientStart:[a,0],gradientEnd:[a,100]}},"checkbox-focused":{include:e,style:{shadowBlurRadius:4}},"checkbox-disabled":{include:e,style:{color:bB,innerColor:N,gradientStart:[Q,0],gradientEnd:[cn,100]}},"checkbox-invalid":{include:e,style:{color:bX}},"checkbox-hovered-invalid":{include:a,style:{color:bX,innerColor:bA,gradientStart:[ca,0],gradientEnd:[ca,100]}},"checkbox-focused-invalid":{include:bi,style:{color:bX,shadowColor:bX}},"input-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBackgroundColor],style:{color:cY,innerColor:j,innerWidth:1,width:1,backgroundColor:u,startColor:bw,endColor:bo,startColorPosition:0,endColorPosition:12,colorPositionUnit:dk}},"border-invalid-css":{include:dh,style:{color:y}},"input-focused-css":{include:dh,style:{startColor:be,innerColor:U,endColorPosition:4}},"input-focused-invalid-css":{include:bJ,style:{innerColor:bj,color:y}},"input-disabled-css":{include:dh,style:{color:di}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cY,innerColor:j,innerOpacity:0.5,backgroundImage:df,backgroundRepeat:A,backgroundColor:u}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cY,innerColor:H,backgroundImage:cc,backgroundRepeat:A,backgroundColor:u}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bX,innerColor:cy,backgroundImage:cc,backgroundRepeat:A,backgroundColor:u,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:dc,innerColor:j,innerOpacity:0.5,backgroundImage:df,backgroundRepeat:A,backgroundColor:u}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bz,backgroundRepeat:C}},"toolbar-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:40,endColorPosition:60,startColor:R,endColor:dm}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:da,innerColor:dg,backgroundImage:cJ,backgroundRepeat:C}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:da,innerColor:dg,backgroundImage:bt,backgroundRepeat:C}},"toolbar-button-hovered-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{color:da,width:1,innerWidth:1,innerColor:dg,radius:2,gradientStart:[w,30],gradientEnd:[x,100]}},"toolbar-button-checked-css":{include:cm,style:{gradientStart:[x,30],gradientEnd:[w,100]}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:l,colorRight:M,styleLeft:D,styleRight:D}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bK,backgroundRepeat:bQ}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:bL,insets:[4,6,7,4]}},"tabview-pane-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MSingleBorder],style:{width:1,color:g,radius:3,gradientStart:[cz,90],gradientEnd:[cN,100]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:cL}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bs}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:p}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bq}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:by}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:k}},"tabview-page-button-top-active-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{radius:[3,3,0,0],width:[1,1,0,1],color:v,backgroundColor:cz,shadowLength:1,shadowColor:B,shadowBlurRadius:2}},"tabview-page-button-top-inactive-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{radius:[3,3,0,0],color:f,colorBottom:v,width:1,gradientStart:[ci,0],gradientEnd:[bn,100]}},"tabview-page-button-bottom-active-css":{include:cu,style:{radius:[0,0,3,3],width:[0,1,1,1],backgroundColor:ci}},"tabview-page-button-bottom-inactive-css":{include:de,style:{radius:[0,0,3,3],width:[0,1,1,1],colorBottom:f,colorTop:v}},"tabview-page-button-left-active-css":{include:cu,style:{radius:[3,0,0,3],width:[1,0,1,1],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-left-inactive-css":{include:de,style:{radius:[3,0,0,3],width:[1,0,1,1],colorBottom:f,colorRight:v}},"tabview-page-button-right-active-css":{include:cu,style:{radius:[0,3,3,0],width:[1,1,1,0],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-right-inactive-css":{include:de,style:{radius:[0,3,3,0],width:[1,1,1,0],colorBottom:f,colorLeft:v}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:dd,width:3,color:t,style:D}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:dd,width:1,color:z,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bx}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:br}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:dj}},"window-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{radius:[5,5,0,0],shadowBlurRadius:4,shadowLength:2,shadowColor:B}},"window-incl-statusbar-css":{include:cS,style:{radius:[5,5,5,5]}},"window-resize-frame-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{radius:[5,5,0,0],width:1,color:z}},"window-resize-frame-incl-statusbar-css":{include:cQ,style:{radius:[5,5,5,5]}},"window-captionbar-active-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:g,colorBottom:bH,radius:[5,5,0,0],gradientStart:[cq,30],gradientEnd:[cl,70]}},"window-captionbar-inactive-css":{include:ck,style:{gradientStart:[bl,30],gradientEnd:[F,70]}},"window-statusbar-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius],style:{backgroundColor:cO,width:[0,1,1,1],color:g,radius:[0,0,5,5]}},"window-pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{backgroundColor:dd,width:1,color:g,widthTop:0}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:z,style:D}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:z,style:D}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:ch,backgroundRepeat:C,widthBottom:1,colorBottom:z,style:D}},"table-scroller-header-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[ce,10],gradientEnd:[cw,90],widthBottom:1,colorBottom:z}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:b,styleRight:D}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:b,styleRight:D,widthBottom:1,colorBottom:cF,styleBottom:D}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:X,style:D}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:z,style:D}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:ch,backgroundRepeat:C,widthRight:1,colorRight:bU,style:D}},"progressive-table-header-cell-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[ce,10],gradientEnd:[cw,90],widthRight:1,colorRight:bU}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bM,backgroundRepeat:C,width:1,color:z,style:D}},"menu-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{gradientStart:[cs,0],gradientEnd:[cf,100],shadowColor:B,shadowBlurRadius:2,shadowLength:1,width:1,color:z}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:bk,widthBottom:1,colorBottom:bu}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bI,backgroundRepeat:C,width:1,color:b,style:D}},"menubar-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[S,0],gradientEnd:[cf,100],width:1,color:b}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:Y,backgroundRepeat:C}},"progressbar":{decorator:qx.ui.decoration.Single,style:{width:1,color:cY}},"group-item":{decorator:qx.ui.decoration.Background,style:{backgroundImage:I,backgroundRepeat:C}},"group-item-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:ds,endColor:bD}}}});}
)();
(function(){var bB="black",bA="#ffffdd",bz="#b6b6b6",by="#004DAD",bx="#BABABA",bw="#005BC3",bv="#334866",bu="#CECECE",bt="#D9D9D9",bs="#D8D8D8",bh="#99C3FE",bg="#001533",bf="#B3B3B3",be="#D5D5D5",bd="#C3C3C3",bc="#DDDDDD",bb="#FF9999",ba="css.rgba",Y="#E8E8E9",X="#084FAA",bI="#C5C5C5",bJ="rgba(0, 0, 0, 0.4)",bG="#DBDBDB",bH="#4a4a4a",bE="#83BAEA",bF="#D7E7F4",bC="#07125A",bD="#FAF2F2",bK="#87AFE7",bL="#F7EAEA",bl="#777D8D",bk="#FBFBFB",bn="#CACACA",bm="#909090",bp="#9B9B9B",bo="#F0F9FE",br="#314a6e",bq="#B4B4B4",bj="#787878",bi="qx.theme.modern.Color",a="#000000",b="#26364D",c="#A7A7A7",d="#D1E4FF",e="#5CB0FD",f="#EAEAEA",g="#003B91",h="#80B4EF",i="#FF6B78",j="#949494",bP="#808080",bO="#930000",bN="#7B7B7B",bM="#C82C2C",bT="#DFDFDF",bS="#B6B6B6",bR="#0880EF",bQ="#4d4d4d",bV="#f4f4f4",bU="#7B7A7E",H="#D0D0D0",I="#f8f8f8",F="#404955",G="#959595",L="#AAAAAA",M="#F7E9E9",J="#314A6E",K="#C72B2B",D="#FAFAFA",E="#FBFCFB",r="#B2D2FF",q="#666666",t="#CBC8CD",s="#999999",n="#8EB8D6",m="#b8b8b8",p="#727272",o="#33508D",l="#F1F1F1",k="#990000",R="#00368A",S="#1a1a1a",T="#00204D",U="gray",N="#F4F4F4",O="#fffefe",P="#AFAFAF",Q="#084FAB",V="#FCFCFC",W="#CCC",B="#F2F2F2",A="#F0F0F0",z="#E8E8E8",y="#CCCCCC",x="#EFEFEF",w="#EEEEEE",v="#E4E4E4",u="#F3F3F3",C="white";qx.Theme.define(bi,{colors:{"background-application":bT,"background-pane":u,"background-light":V,"background-medium":w,"background-splitpane":P,"background-tip":bA,"background-tip-error":K,"background-odd":v,"htmlarea-background":C,"progressbar-background":C,"text-light":bm,"text-gray":bH,"text-label":S,"text-title":br,"text-input":a,"text-hovered":bg,"text-disabled":bU,"text-selected":O,"text-active":b,"text-inactive":F,"text-placeholder":t,"border-inner-scrollbar":C,"border-main":bQ,"menu-separator-top":bI,"menu-separator-bottom":D,"border-separator":bP,"border-toolbar-button-outer":bz,"border-toolbar-border-inner":I,"border-toolbar-separator-right":bV,"border-toolbar-separator-left":m,"border-input":bv,"border-inner-input":C,"border-disabled":bS,"border-pane":T,"border-button":q,"border-column":y,"border-focused":bh,"invalid":k,"border-focused-invalid":bb,"border-dragover":o,"keyboard-focus":bB,"table-pane":u,"table-focus-indicator":bR,"table-row-background-focused-selected":Q,"table-row-background-focused":h,"table-row-background-selected":Q,"table-row-background-even":u,"table-row-background-odd":v,"table-row-selected":O,"table-row":S,"table-row-line":W,"table-column-line":W,"table-header-hovered":C,"progressive-table-header":L,"progressive-table-header-border-right":B,"progressive-table-row-background-even":N,"progressive-table-row-background-odd":v,"progressive-progressbar-background":U,"progressive-progressbar-indicator-done":y,"progressive-progressbar-indicator-undone":C,"progressive-progressbar-percent-background":U,"progressive-progressbar-percent-text":C,"selected-start":by,"selected-end":R,"tabview-background":bC,"shadow":qx.core.Environment.get(ba)?bJ:s,"pane-start":bk,"pane-end":A,"group-background":z,"group-border":bq,"radiobutton-background":x,"checkbox-border":J,"checkbox-focus":bK,"checkbox-hovered":r,"checkbox-hovered-inner":d,"checkbox-inner":w,"checkbox-start":v,"checkbox-end":u,"checkbox-disabled-border":bj,"checkbox-disabled-inner":bn,"checkbox-disabled-start":H,"checkbox-disabled-end":bs,"checkbox-hovered-inner-invalid":bD,"checkbox-hovered-invalid":M,"radiobutton-checked":bw,"radiobutton-disabled":be,"radiobutton-checked-disabled":bN,"radiobutton-hovered-invalid":bL,"tooltip-error":bM,"scrollbar-start":y,"scrollbar-end":l,"scrollbar-slider-start":w,"scrollbar-slider-end":bd,"button-border-disabled":G,"button-start":A,"button-end":P,"button-disabled-start":N,"button-disabled-end":bx,"button-hovered-start":bo,"button-hovered-end":n,"button-focused":bE,"border-invalid":bO,"input-start":A,"input-end":E,"input-focused-start":bF,"input-focused-end":e,"input-focused-inner-invalid":i,"input-border-disabled":bp,"input-border-inner":C,"toolbar-start":x,"toolbar-end":bc,"window-border":T,"window-border-caption":p,"window-caption-active-text":C,"window-caption-active-start":X,"window-caption-active-end":g,"window-caption-inactive-start":B,"window-caption-inactive-end":bG,"window-statusbar-background":x,"tabview-start":V,"tabview-end":w,"tabview-inactive":bl,"tabview-inactive-start":f,"tabview-inactive-end":bu,"table-header-start":z,"table-header-end":bf,"menu-start":Y,"menu-end":bt,"menubar-start":z,"groupitem-start":c,"groupitem-end":j,"groupitem-text":C,"virtual-row-layer-background-even":C,"virtual-row-layer-background-odd":C}});}
)();
(function(){var t="monospace",s="Courier New",r="Lucida Console",q="Monaco",p="qx.theme.modern.Font",o="DejaVu Sans Mono",n="Consolas",m="Liberation Sans",l="Tahoma",k="sans-serif",d="Arial",j="Lucida Grande",g="Candara",c="Segoe UI",b="osx",f="win",e="7",h="vista",a="os.name",i="os.version";qx.Theme.define(p,{fonts:{"default":{size:(qx.core.Environment.get(a)==f&&(qx.core.Environment.get(i)==e||qx.core.Environment.get(i)==h))?12:11,lineHeight:1.4,family:qx.core.Environment.get(a)==b?[j]:((qx.core.Environment.get(a)==f&&(qx.core.Environment.get(i)==e||qx.core.Environment.get(i)==h)))?[c,g]:[l,m,d,k]},"bold":{size:(qx.core.Environment.get(a)==f&&(qx.core.Environment.get(i)==e||qx.core.Environment.get(i)==h))?12:11,lineHeight:1.4,family:qx.core.Environment.get(a)==b?[j]:((qx.core.Environment.get(a)==f&&(qx.core.Environment.get(i)==e||qx.core.Environment.get(i)==h)))?[c,g]:[l,m,d,k],bold:true},"small":{size:(qx.core.Environment.get(a)==f&&(qx.core.Environment.get(i)==e||qx.core.Environment.get(i)==h))?11:10,lineHeight:1.4,family:qx.core.Environment.get(a)==b?[j]:((qx.core.Environment.get(a)==f&&(qx.core.Environment.get(i)==e||qx.core.Environment.get(i)==h)))?[c,g]:[l,m,d,k]},"monospace":{size:11,lineHeight:1.4,family:qx.core.Environment.get(a)==b?[r,q]:((qx.core.Environment.get(a)==f&&(qx.core.Environment.get(i)==e||qx.core.Environment.get(i)==h)))?[n]:[n,o,s,t]}}});}
)();
(function(){var b="qx.theme.Modern",a="Modern";qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});}
)();
(function(){var l="Use qx.dev.StackTrace.FORMAT_STACKTRACE instead",k="function",h="<span class='object'>",g="]:",f="<span class='object' title='Object instance with hash code: ",e="FORMAT_STACK",d="string",c="level-",b="0",a="<span class='offset'>",G=":",F="qx.log.appender.Util",E="DIV",D="<span>",C="<span class='type-key'>",B="</span>:<span class='type-",A="</span>: ",z=" ",y="]</span>: ",x="</span> ",s="}",t="",q="]",r="\n",o="{",p="map",m="<span class='type-",n="[",u=", ",v="</span>",w="'>";qx.Class.define(F,{statics:{toHtml:function(H){var R=[];var O,Q,J,L;R.push(a,this.formatOffset(H.offset,6),x);if(H.object){var I=H.win.qx.core.ObjectRegistry.fromHashCode(H.object);if(I){R.push(f+I.$$hash+w,I.classname,n,I.$$hash,y);}
;}
else if(H.clazz){R.push(h+H.clazz.classname,A);}
;var K=H.items;for(var i=0,P=K.length;i<P;i++){O=K[i];Q=O.text;if(Q instanceof Array){var L=[];for(var j=0,N=Q.length;j<N;j++){J=Q[j];if(typeof J===d){L.push(D+this.escapeHTML(J)+v);}
else if(J.key){L.push(C+J.key+B+J.type+w+this.escapeHTML(J.text)+v);}
else {L.push(m+J.type+w+this.escapeHTML(J.text)+v);}
;}
;R.push(m+O.type+w);if(O.type===p){R.push(o,L.join(u),s);}
else {R.push(n,L.join(u),q);}
;R.push(v);}
else {R.push(m+O.type+w+this.escapeHTML(Q)+x);}
;}
;var M=document.createElement(E);M.innerHTML=R.join(t);M.className=c+H.level;return M;}
,formatOffset:function(S,length){var V=S.toString();var T=(length||6)-V.length;var U=t;for(var i=0;i<T;i++){U+=b;}
;return U+V;}
,escapeHTML:function(W){return String(W).replace(/[<>&"']/g,this.__HP);}
,__HP:function(X){var Y={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&#39;",'"':"&quot;"};return Y[X]||"?";}
,toText:function(ba){return this.toTextArray(ba).join(z);}
,toTextArray:function(bb){var bj=[];bj.push(this.formatOffset(bb.offset,6));if(bb.object){var bc=bb.win.qx.core.ObjectRegistry.fromHashCode(bb.object);if(bc){bj.push(bc.classname+n+bc.$$hash+g);}
;}
else if(bb.clazz){bj.push(bb.clazz.classname+G);}
;var bd=bb.items;var bg,bi;for(var i=0,bh=bd.length;i<bh;i++){bg=bd[i];bi=bg.text;if(bg.trace&&bg.trace.length>0){if(typeof (this.FORMAT_STACK)==k){qx.log.Logger.deprecatedConstantWarning(qx.log.appender.Util,e,l);bi+=r+this.FORMAT_STACK(bg.trace);}
else {bi+=r+bg.trace;}
;}
;if(bi instanceof Array){var be=[];for(var j=0,bf=bi.length;j<bf;j++){be.push(bi[j].text);}
;if(bg.type===p){bj.push(o,be.join(u),s);}
else {bj.push(n,be.join(u),q);}
;}
else {bj.push(bi);}
;}
;return bj;}
}});}
)();
(function(){var c="html.console",b="qx.log.appender.Native",a="log";qx.Class.define(b,{statics:{process:function(d){if(qx.core.Environment.get(c)){var f=console[d.level]?d.level:a;if(console[f]){var e=qx.log.appender.Util.toText(d);console[f](e);}
;}
;}
},defer:function(g){qx.log.Logger.register(g);}
});}
)();
(function(){var k='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',j="Enter",i="px",h='.qxconsole .messages .user-result{background:white}',g='.qxconsole .messages .level-error{background:#FFE2D5}',f="div",d="user-command",c='<div class="command">',b='.qxconsole .command input:focus{outline:none;}',a='.qxconsole .messages .type-key{color:#565656;font-style:italic}',V='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',U='.qxconsole .messages div{padding:0px 4px;}',T='.qxconsole .messages .level-debug{background:white}',S='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',R="DIV",Q='.qxconsole .messages .level-user{background:#E3EFE9}',P='<div class="qxconsole">',O="D",N='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',M='.qxconsole .messages .type-string{color:black;font-weight:normal;}',r='.qxconsole .control a{text-decoration:none;color:black;}',s='<div class="messages">',p='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',q='<input type="text"/>',n="clear",o='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',l='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',m='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',t='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',u='.qxconsole .messages .user-command{color:blue}',B="F7",z="qx.log.appender.Console",F='.qxconsole .messages .level-info{background:#DEEDFA}',D="block",I='.qxconsole .messages .level-warn{background:#FFF7D5}',H='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',w='.qxconsole .messages .user-error{background:#FFE2D5}',L='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',K='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',J=">>> ",v="Down",x='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}',y="Up",A="none",C="keypress",E='</div>',G="";qx.Class.define(z,{statics:{init:function(){var W=[m,L,r,k,U,u,h,w,T,F,I,g,Q,M,x,p,l,N,a,S,V,H,t,o,b];qx.bom.Stylesheet.createElement(W.join(G));var Y=[P,K,s,E,c,q,E,E];var ba=document.createElement(R);ba.innerHTML=Y.join(G);var X=ba.firstChild;document.body.appendChild(ba.firstChild);this.__Ji=X;this.__bY=X.childNodes[1];this.__Jj=X.childNodes[2].firstChild;this.__jR();qx.log.Logger.register(this);qx.core.ObjectRegistry.register(this);}
,dispose:function(){qx.event.Registration.removeListener(document.documentElement,C,this.__eL,this);qx.log.Logger.unregister(this);}
,clear:function(){this.__bY.innerHTML=G;}
,process:function(bb){this.__bY.appendChild(qx.log.appender.Util.toHtml(bb));this.__Jk();}
,__Jk:function(){this.__bY.scrollTop=this.__bY.scrollHeight;}
,__dO:true,toggle:function(){if(!this.__Ji){this.init();}
else if(this.__Ji.style.display==A){this.show();}
else {this.__Ji.style.display=A;}
;}
,show:function(){if(!this.__Ji){this.init();}
else {this.__Ji.style.display=D;this.__bY.scrollTop=this.__bY.scrollHeight;}
;}
,__GR:[],execute:function(){var be=this.__Jj.value;if(be==G){return;}
;if(be==n){return this.clear();}
;var bc=document.createElement(f);bc.innerHTML=qx.log.appender.Util.escapeHTML(J+be);bc.className=d;this.__GR.push(be);this.__Jl=this.__GR.length;this.__bY.appendChild(bc);this.__Jk();try{var bd=window.eval(be);}
catch(bf){qx.log.Logger.error(bf);}
;if(bd!==undefined){qx.log.Logger.debug(bd);}
;}
,__jR:function(e){this.__bY.style.height=(this.__Ji.clientHeight-this.__Ji.firstChild.offsetHeight-this.__Ji.lastChild.offsetHeight)+i;}
,__eL:function(e){var bh=e.getKeyIdentifier();if((bh==B)||(bh==O&&e.isCtrlPressed())){this.toggle();e.preventDefault();}
;if(!this.__Ji){return;}
;if(!qx.dom.Hierarchy.contains(this.__Ji,e.getTarget())){return;}
;if(bh==j&&this.__Jj.value!=G){this.execute();this.__Jj.value=G;}
;if(bh==y||bh==v){this.__Jl+=bh==y?-1:1;this.__Jl=Math.min(Math.max(0,this.__Jl),this.__GR.length);var bg=this.__GR[this.__Jl];this.__Jj.value=bg||G;this.__Jj.select();}
;}
},defer:function(bi){qx.event.Registration.addListener(document.documentElement,C,bi.__eL,bi);}
});}
)();
(function(){var l="qx.dev.ObjectSummary",k="\n",j=" Objects)\n\n",h=")\r\n",g=" (",f=" Objects)\r\n\r\n",e=", ",d=": ",c="Summary: (";qx.Class.define(l,{statics:{getInfo:function(){var m={};var t=0;var n;var p=qx.core.ObjectRegistry.getRegistry();for(var q in p){n=p[q];if(n&&n.isDisposed()===false){if(m[n.classname]==null){m[n.classname]=1;}
else {m[n.classname]++;}
;t++;}
;}
;var s=[];for(var o in m){s.push({classname:o,number:m[o]});}
;s.sort(function(a,b){return b.number-a.number;}
);var r=c+t+j;for(var i=0;i<s.length;i++){r+=s[i].number+d+s[i].classname+k;}
;return r;}
,getNewObjects:function(){var v={};var F=0;var w;var A=qx.core.ObjectRegistry.getRegistry();var y={};var E;for(var B in A){w=A[B];if(w&&w.__disposed===false){var z=w.classname;if(v[z]==null){v[z]=1;}
else {v[z]++;}
;E=y[z];if(E==null){E=y[z]=new Array();}
;E[E.length]=w.toHashCode();F++;}
;}
;if(!this._m_dObjectList){this._m_dObjectList={};}
;var u={};for(var z in v){if(!(z in this._m_dObjectList)){this._m_dObjectList[z]=0;}
;if(this._m_dObjectList[z]>=0&&this._m_dObjectList[z]<v[z]){u[z]=v[z]-this._m_dObjectList[z];}
;}
;this._m_dObjectList=v;var D=[];for(var x in u){D.push({classname:x,number:u[x],aHashCode:y[x]});}
;D.sort(function(a,b){return b.number-a.number;}
);var C=c+F+f;for(var i=0;i<D.length;i++){C+=D[i].number+d+D[i].classname+g+D[i].aHashCode.join(e)+h;}
;return C;}
}});}
)();


qx.$$loader.init();

