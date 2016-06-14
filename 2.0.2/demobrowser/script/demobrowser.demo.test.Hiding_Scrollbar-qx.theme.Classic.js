(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"locale":"en","locale.variant":"US","qx.allowUrlSettings":true,"qx.allowUrlVariants":true,"qx.application":"demobrowser.demo.test.Hiding_Scrollbar","qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.whitespace":true,"qx.theme":"qx.theme.Classic"};
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
  packages : {"0":{"uris":["__out__:demobrowser.demo.test.Hiding_Scrollbar-qx.theme.Classic.88ac958bc6b0.js"]}},
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

var readyStateValue = "complete";
if (document.documentMode && document.documentMode < 10 ||
    (typeof window.ActiveXObject !== "undefined" && !document.documentMode)) {
  readyStateValue = "loaded";
}

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || this.readyState == readyStateValue) {
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

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"E, d.M.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, d. MMM y","cldr_date_time_format_yMMMd":"d. MMM y","cldr_date_time_format_yMd":"d.M.y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Jun","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"Tag","dayperiod":"Tageshälfte","era":"Epoche","hour":"Stunde","minute":"Minute","month":"Monat","quotationEnd":"“","quotationStart":"„","second":"Sekunde","week":"Woche","weekday":"Wochentag","year":"Jahr","zone":"Zone"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"en_US":{},"fr":{"alternateQuotationEnd":"»","alternateQuotationStart":"«","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"E d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E d MMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d/M/yyyy","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEd":"E d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_abbreviated_1":"janv.","cldr_month_stand-alone_abbreviated_10":"oct.","cldr_month_stand-alone_abbreviated_11":"nov.","cldr_month_stand-alone_abbreviated_12":"déc.","cldr_month_stand-alone_abbreviated_2":"févr.","cldr_month_stand-alone_abbreviated_3":"mars","cldr_month_stand-alone_abbreviated_4":"avr.","cldr_month_stand-alone_abbreviated_7":"juil.","cldr_month_stand-alone_abbreviated_9":"sept.","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"jour","dayperiod":"cadran","era":"ère","hour":"heure","minute":"minute","month":"mois","quotationEnd":"”","quotationStart":"“","second":"seconde","week":"semaine","weekday":"jour de la semaine","year":"année","zone":"fuseau horaire"},"fr_FR":{}},"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{"C":{},"de":{"%1 of %2 rows":"%1 von %2 Zeilen","%1 rows":"%1 Zeilen","one of one row":"Eine von einer Zeile","one row":"Eine Zeile"},"de_DE":{},"en":{},"en_US":{},"fr":{"%1 of %2 rows":"ligne %1 de %2","%1 rows":"%1 lignes","one of one row":"ligne une de une","one row":"une ligne"},"fr_FR":{}}};
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
;if(!(f.stack||f.stacktrace)){this.__bC=qx.dev.StackTrace.getStackTraceFromCaller(arguments);}
;this.__bD=d||a;this.message=e||qx.type.BaseError.DEFAULTMESSAGE;}
,statics:{DEFAULTMESSAGE:"error"},members:{__bC:null,__bD:null,message:null,getComment:function(){return this.__bD;}
,getStackTrace:function(){if(this.stack||this.stacktrace){return qx.dev.StackTrace.getStackTraceFromError(this);}
else if(this.__bC){return this.__bC;}
;return [];}
,toString:function(){return this.__bD+(this.message?c+this.message:a);}
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
;var bh=/@(.+):(\d+)$/gm;var U;while((U=bh.exec(R.stack))!=null){var X=U[1];var bf=U[2];var bd=this.__bE(X);V.push(bd+a+bf);}
;if(V.length>0){return this.__bG(V);}
;var bh=/at (.*)/gm;var bg=/\((.*?)(:[^\/].*)\)/;var bc=/(.*?)(:[^\/].*)/;var U;while((U=bh.exec(R.stack))!=null){var bb=bg.exec(U[1]);if(!bb){bb=bc.exec(U[1]);}
;if(bb){var bd=this.__bE(bb[1]);V.push(bd+bb[2]);}
else {V.push(U[1]);}
;}
;}
else if(qx.core.Environment.get(e)===j){var T=R.stacktrace;if(!T){return V;}
;if(T.indexOf(c)>=0){T=T.split(c)[0];}
;var bh=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;var U;while((U=bh.exec(T))!=null){var bf=U[1];var W=U[2];var X=U[3];var bd=this.__bE(X);V.push(bd+a+bf+a+W);}
;if(V.length>0){return this.__bG(V);}
;var bh=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;var U;while((U=bh.exec(T))!=null){var bf=U[1];var X=U[2];var bd=this.__bE(X);V.push(bd+a+bf);}
;}
else if(R.message&&R.message.indexOf(b)>=0){var ba=qx.lang.String.trim(R.message.split(b)[1]);var Y=ba.split(o);for(var i=0;i<Y.length;i++){var S=Y[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);if(S&&S.length>=2){var bf=S[1];var be=this.__bE(S[2]);V.push(be+a+bf);}
;}
;}
else if(R.sourceURL&&R.line){V.push(this.__bE(R.sourceURL)+a+R.line);}
;;;return this.__bG(V);}
,__bE:function(bi){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==f){var bj=qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bi);if(qx.core.Environment.get(g)&&!qx.lang.Type.isString(bj)){throw new Error(m);}
;return bj;}
;return qx.dev.StackTrace.__bF(bi);}
,__bF:function(bk){var bo=n;var bl=bk.indexOf(bo);var bn=bk.indexOf(t);if(bn>=0){bk=bk.substring(0,bn);}
;var bm=(bl==-1)?bk:bk.substring(bl+bo.length).replace(/\//g,h).replace(/\.js$/,p);return bm;}
,__bG:function(bp){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==f){bp=qx.dev.StackTrace.FORMAT_STACKTRACE(bp);if(qx.core.Environment.get(g)&&!qx.lang.Type.isArray(bp)){throw new Error(k);}
;}
;return bp;}
}});}
)();
(function(){var g="mshtml",f="engine.name",d="stack",c="ecmascript.stacktrace",b="stacktrace",a="qx.bom.client.EcmaScript";qx.Bootstrap.define(a,{statics:{getStackTrace:function(){var e;if(qx.core.Environment.get(f)==g){try{throw new Error();}
catch(h){e=h;}
;}
else {e=new Error();}
;return e.stacktrace?b:e.stack?d:null;}
},defer:function(i){qx.core.Environment.add(c,i.getStackTrace);}
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
;return function(event){if(qx.core.Environment.get(d)){if(qx.core&&qx.core.Object&&s.self&&qx.Bootstrap.isObject(s.self)&&s.self instanceof qx.core.Object){qx.core.Assert&&qx.core.Assert.assertFalse(s.self.isDisposed(),i+s.self.toString()+g+qx.lang.Function.getName(r));}
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
(function(){var p="-",o="",n="qx.core.ObjectRegistry",m="-0",k="Could not dispose object ",j=" objects",h=": ",g="Disposed ",f="qx.debug.dispose",e="$$hash",c="qx.debug",d="Invalid object: ";qx.Class.define(n,{statics:{inShutDown:false,__bc:{},__bH:0,__bI:[],__bJ:o,__bK:{},register:function(q){var t=this.__bc;if(!t){return;}
;var s=q.$$hash;if(s==null){var r=this.__bI;if(r.length>0&&!qx.core.Environment.get(f)){s=r.pop();}
else {s=(this.__bH++)+this.__bJ;}
;q.$$hash=s;if(qx.core.Environment.get(f)){if(qx.dev&&qx.dev.Debug&&qx.dev.Debug.disposeProfilingActive){this.__bK[s]=qx.dev.StackTrace.getStackTrace();}
;}
;}
;if(qx.core.Environment.get(c)){if(!q.dispose){throw new Error(d+q);}
;}
;t[s]=q;}
,unregister:function(u){var v=u.$$hash;if(v==null){return;}
;var w=this.__bc;if(w&&w[v]){delete w[v];this.__bI.push(v);}
;try{delete u.$$hash;}
catch(x){if(u.removeAttribute){u.removeAttribute(e);}
;}
;}
,toHashCode:function(y){if(qx.core.Environment.get(c)){if(y==null){throw new Error(d+y);}
;}
;var A=y.$$hash;if(A!=null){return A;}
;var z=this.__bI;if(z.length>0){A=z.pop();}
else {A=(this.__bH++)+this.__bJ;}
;return y.$$hash=A;}
,clearHashCode:function(B){if(qx.core.Environment.get(c)){if(B==null){throw new Error(d+B);}
;}
;var C=B.$$hash;if(C!=null){this.__bI.push(C);try{delete B.$$hash;}
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
,getNextHash:function(){return this.__bH;}
,getPostId:function(){return this.__bJ;}
,getStackTraces:function(){return this.__bK;}
},defer:function(K){if(window&&window.top){var frames=window.top.frames;for(var i=0;i<frames.length;i++){if(frames[i]===window){K.__bJ=p+(i+1);return;}
;}
;}
;K.__bJ=m;}
});}
)();
(function(){var a="qx.core.AssertionError";qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);this.__bL=qx.dev.StackTrace.getStackTrace();}
,members:{__bL:null,getStackTrace:function(){return this.__bL;}
}});}
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
;return this.addListener(f,i,this,h);}
,removeListener:function(j,k,self,l){if(!this.$$disposed){return this.__cL.removeListener(this,j,k,self,l);}
;return false;}
,removeListenerById:function(m){if(!this.$$disposed){return this.__cL.removeListenerById(this,m);}
;return false;}
,hasListener:function(n,o){return this.__cL.hasListener(this,n,o);}
,dispatchEvent:function(p){if(!this.$$disposed){return this.__cL.dispatchEvent(this,p);}
;return true;}
,fireEvent:function(q,r,s){if(!this.$$disposed){return this.__cL.fireEvent(this,q,r,s);}
;return true;}
,fireNonBubblingEvent:function(t,u,v){if(!this.$$disposed){return this.__cL.fireNonBubblingEvent(this,t,u,v);}
;return true;}
,fireDataEvent:function(w,x,y,z){if(!this.$$disposed){if(y===undefined){y=null;}
;return this.__cL.fireNonBubblingEvent(this,w,qx.event.type.Data,[x,y,!!z]);}
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
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);}
,properties:{selectionModel:{check:b}},members:{__oE:null,handleMouseDown:function(c,d){if(d.isLeftPressed()){var e=this.getSelectionModel();if(!e.isSelectedIndex(c)){this._handleSelectEvent(c,d);this.__oE=true;}
else {this.__oE=false;}
;}
else if(d.isRightPressed()&&d.getModifiers()==0){var e=this.getSelectionModel();if(!e.isSelectedIndex(c)){e.setSelectionInterval(c,c);}
;}
;}
,handleMouseUp:function(f,g){if(g.isLeftPressed()&&!this.__oE){this._handleSelectEvent(f,g);}
;}
,handleClick:function(h,i){}
,handleSelectKeyDown:function(j,k){this._handleSelectEvent(j,k);}
,handleMoveKeyDown:function(l,m){var o=this.getSelectionModel();switch(m.getModifiers()){case 0:o.setSelectionInterval(l,l);break;case qx.event.type.Dom.SHIFT_MASK:var n=o.getAnchorSelectionIndex();if(n==-1){o.setSelectionInterval(l,l);}
else {o.setSelectionInterval(n,l);}
;break;};}
,_handleSelectEvent:function(p,q){var t=this.getSelectionModel();var r=t.getLeadSelectionIndex();var s=t.getAnchorSelectionIndex();if(q.isShiftPressed()){if(p!=r||t.isSelectionEmpty()){if(s==-1){s=p;}
;if(q.isCtrlOrCommandPressed()){t.addSelectionInterval(s,p);}
else {t.setSelectionInterval(s,p);}
;}
;}
else if(q.isCtrlOrCommandPressed()){if(t.isSelectedIndex(p)){t.removeSelectionInterval(p,p);}
else {t.addSelectionInterval(p,p);}
;}
else {t.setSelectionInterval(p,p);}
;}
}});}
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
(function(){var j="rim_tabletos",i="Darwin",h="os.version",g="2003",f=")",e="iPhone",d="android",c="unix",b="ce",a="7",bf="SymbianOS",be="os.name",bd="|",bc="MacPPC",bb="iPod",ba="\.",Y="Win64",X="linux",W="me",V="Macintosh",q="Android",r="Windows",o="ios",p="vista",m="8",n="blackberry",k="(",l="win",u="Linux",v="BSD",D="Mac OS X",B="iPad",L="X11",G="xp",R="symbian",P="qx.bom.client.OperatingSystem",x="g",U="Win32",T="osx",S="webOS",w="RIM Tablet OS",z="BlackBerry",A="nt4",C="MacIntel",E="webos",H="10.1",M="10.3",Q="10.7",s="10.5",t="95",y="10.2",K="98",J="2000",I="10.6",O="10.0",N="10.4",F="";qx.Bootstrap.define(P,{statics:{getName:function(){if(!navigator){return F;}
;var bg=navigator.platform||F;var bh=navigator.userAgent||F;if(bg.indexOf(r)!=-1||bg.indexOf(U)!=-1||bg.indexOf(Y)!=-1){return l;}
else if(bg.indexOf(V)!=-1||bg.indexOf(bc)!=-1||bg.indexOf(C)!=-1||bg.indexOf(D)!=-1){return T;}
else if(bh.indexOf(w)!=-1){return j;}
else if(bh.indexOf(S)!=-1){return E;}
else if(bg.indexOf(bb)!=-1||bg.indexOf(e)!=-1||bg.indexOf(B)!=-1){return o;}
else if(bh.indexOf(q)!=-1){return d;}
else if(bg.indexOf(u)!=-1){return X;}
else if(bg.indexOf(L)!=-1||bg.indexOf(v)!=-1||bg.indexOf(i)!=-1){return c;}
else if(bg.indexOf(bf)!=-1){return R;}
else if(bg.indexOf(z)!=-1){return n;}
;;;;;;;;;return F;}
,__dg:{"Windows NT 6.2":m,"Windows NT 6.1":a,"Windows NT 6.0":p,"Windows NT 5.2":g,"Windows NT 5.1":G,"Windows NT 5.0":J,"Windows 2000":J,"Windows NT 4.0":A,"Win 9x 4.90":W,"Windows CE":b,"Windows 98":K,"Win98":K,"Windows 95":t,"Win95":t,"Mac OS X 10_7":Q,"Mac OS X 10.7":Q,"Mac OS X 10_6":I,"Mac OS X 10.6":I,"Mac OS X 10_5":s,"Mac OS X 10.5":s,"Mac OS X 10_4":N,"Mac OS X 10.4":N,"Mac OS X 10_3":M,"Mac OS X 10.3":M,"Mac OS X 10_2":y,"Mac OS X 10.2":y,"Mac OS X 10_1":H,"Mac OS X 10.1":H,"Mac OS X 10_0":O,"Mac OS X 10.0":O},getVersion:function(){var bk=[];for(var bj in qx.bom.client.OperatingSystem.__dg){bk.push(bj);}
;var bl=new RegExp(k+bk.join(bd).replace(/\./g,ba)+f,x);var bi=bl.exec(navigator.userAgent);if(bi&&bi[1]){return qx.bom.client.OperatingSystem.__dg[bi[1]];}
;return F;}
},defer:function(bm){qx.core.Environment.add(be,bm.getName);qx.core.Environment.add(h,bm.getVersion);}
});}
)();
(function(){var j="demobrowser.demo.table.MUtil",h="500px",g="Column #",f="#FFE",e="div",d="absolute",c="Cell ",b="x",a="px";qx.Mixin.define(j,{construct:function(){this._tableLeft=10;}
,members:{getTableMock:function(){var n=this.getColumnModelMock();var l=this.getModelMock();var m=new qx.ui.table.selection.Model();var o=new qx.ui.table.selection.Manager();o.setSelectionModel(m);var k={getTableModel:function(){return l;}
,getTableColumnModel:function(){return n;}
,getRowHeight:function(){return 20;}
,getForceLineHeight:function(){return true;}
,getSelectionModel:function(){return m;}
,getDataRowRenderer:function(){return new qx.ui.table.rowrenderer.Default(k);}
,updateContent:function(){}
,setFocusedCell:function(p,q){}
,getKeepFirstVisibleRowComplete:function(){return true;}
,_updateScrollBarVisibility:function(){}
,getSelectionManager:function(){return o;}
,getNewTablePaneHeader:function(r){return function(s){var t=new qx.ui.table.pane.Header(s);return t;}
;}
,getNewTablePane:function(u){return function(v){return new qx.ui.table.pane.Pane(v);}
;}
,getEnabled:function(){return true;}
};return k;}
,getSelectionMock:function(){return {isSelectedIndex:function(w){return w==0;}
,resetSelection:function(){}
};}
,getColumnModelMock:function(){return {getColumnCount:function(){return 4;}
,getVisibleColumnCount:function(){return 4;}
,getVisibleColumnAtX:function(x){return x;}
,getColumnWidth:function(y){return 100;}
,setColumnWidth:function(z,A){}
,getVisibleX:function(x){return x;}
,getHeaderCellRenderer:function(B){return new qx.ui.table.headerrenderer.Default();}
,getDataCellRenderer:function(){return new qx.ui.table.cellrenderer.Default();}
,addListener:function(){}
,removeListener:function(){}
};}
,getPaneModelMock:function(){var C={getColumnAtX:function(x){return x;}
,getColumnCount:function(){return 4;}
,getX:function(D){return D;}
,getColumnLeft:function(E){return E*100;}
,getTotalWidth:function(){return 4*100;}
};return C;}
,getModelMock:function(){return {getSortColumnIndex:function(){return 0;}
,isSortAscending:function(){return true;}
,isColumnSortable:function(F){return true;}
,getColumnName:function(G){return g+G;}
,isColumnEditable:function(H){return false;}
,sortByColumn:function(I,J){}
,getRowCount:function(){return 500;}
,prefetchRows:function(){}
,getRowData:function(K){var L=[];for(var i=0;i<4;i++){L.push(c+i+b+K);}
;return L;}
,getValue:function(M,N){return c+M+b+N;}
};}
,getPaneMock:function(){return {getFirstVisibleRow:function(){return 0;}
};}
,getScrollerMock:function(){var P=this.getTableMock();var O=this.getPaneModelMock();var Q=this.getPaneMock();return {getTable:function(){return P;}
,getTablePaneModel:function(){return O;}
,getTablePane:function(){return Q;}
,getShowCellFocusIndicator:function(){return true;}
};}
,_getNewTableDiv:function(R){var S=qx.dom.Element.create(e);qx.bom.element.Style.setStyles(S,{position:d,left:this._tableLeft+a,width:(R||150)+a,top:20+a,height:h,backgroundColor:f});this._tableLeft+=(R||150)+20;document.body.appendChild(S);return S;}
}});}
)();
(function(){var o="]",n="..",m="changeSelection",l="Try to turn off batch mode althoug it was not turned on.",k=" [",h='ie',g="browser.version",f="qx.event.type.Event",d="Ranges:",c="qx.ui.table.selection.Model",a="browser.name",b="_applySelectionMode";qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__oF=[];this.__oG=-1;this.__oH=-1;this.hasBatchModeRefCount=0;this.__oI=false;}
,events:{"changeSelection":f},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:b}},members:{__oI:null,__oG:null,__oH:null,__oF:null,_applySelectionMode:function(p){this.resetSelection();}
,setBatchMode:function(q){if(q){this.hasBatchModeRefCount+=1;}
else {if(this.hasBatchModeRefCount==0){throw new Error(l);}
;this.hasBatchModeRefCount-=1;if(this.__oI){this.__oI=false;this._fireChangeSelection();}
;}
;return this.hasBatchMode();}
,hasBatchMode:function(){return this.hasBatchModeRefCount>0;}
,getAnchorSelectionIndex:function(){return this.__oG;}
,_setAnchorSelectionIndex:function(r){this.__oG=r;}
,getLeadSelectionIndex:function(){return this.__oH;}
,_setLeadSelectionIndex:function(s){this.__oH=s;}
,_getSelectedRangeArr:function(){return this.__oF;}
,resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();this._fireChangeSelection();}
;}
,isSelectionEmpty:function(){return this.__oF.length==0;}
,getSelectedCount:function(){var u=0;for(var i=0;i<this.__oF.length;i++){var t=this.__oF[i];u+=t.maxIndex-t.minIndex+1;}
;return u;}
,isSelectedIndex:function(v){for(var i=0;i<this.__oF.length;i++){var w=this.__oF[i];if(v>=w.minIndex&&v<=w.maxIndex){return true;}
;}
;return false;}
,getSelectedRanges:function(){var x=[];for(var i=0;i<this.__oF.length;i++){x.push({minIndex:this.__oF[i].minIndex,maxIndex:this.__oF[i].maxIndex});}
;return x;}
,iterateSelection:function(y,z){for(var i=0;i<this.__oF.length;i++){for(var j=this.__oF[i].minIndex;j<=this.__oF[i].maxIndex;j++){y.call(z,j);}
;}
;}
,setSelectionInterval:function(A,B){var C=this.self(arguments);switch(this.getSelectionMode()){case C.NO_SELECTION:return;case C.SINGLE_SELECTION:if(this.isSelectedIndex(B)){return;}
;A=B;break;case C.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);try{for(var i=A;i<=B;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);}
else {this.removeSelectionInterval(i,i);}
;}
;}
catch(e){if(qx.core.Environment.get(a)==h&&qx.core.Environment.get(g)<=7){this.setBatchMode(false);}
;throw e;}
finally{this.setBatchMode(false);}
;this._fireChangeSelection();return;};this._resetSelection();this._addSelectionInterval(A,B);this._fireChangeSelection();}
,addSelectionInterval:function(D,E){var F=qx.ui.table.selection.Model;switch(this.getSelectionMode()){case F.NO_SELECTION:return;case F.MULTIPLE_INTERVAL_SELECTION:case F.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(D,E);this._fireChangeSelection();break;default:this.setSelectionInterval(D,E);break;};}
,removeSelectionInterval:function(G,H){this.__oG=G;this.__oH=H;var I=Math.min(G,H);var K=Math.max(G,H);for(var i=0;i<this.__oF.length;i++){var M=this.__oF[i];if(M.minIndex>K){break;}
else if(M.maxIndex>=I){var N=(M.minIndex>=I)&&(M.minIndex<=K);var L=(M.maxIndex>=I)&&(M.maxIndex<=K);if(N&&L){this.__oF.splice(i,1);i--;}
else if(N){M.minIndex=K+1;}
else if(L){M.maxIndex=I-1;}
else {var J={minIndex:K+1,maxIndex:M.maxIndex};this.__oF.splice(i+1,0,J);M.maxIndex=I-1;break;}
;;}
;}
;this._fireChangeSelection();}
,_resetSelection:function(){this.__oF=[];this.__oG=-1;this.__oH=-1;}
,_addSelectionInterval:function(O,P){this.__oG=O;this.__oH=P;var Q=Math.min(O,P);var S=Math.max(O,P);var R=0;for(;R<this.__oF.length;R++){var T=this.__oF[R];if(T.minIndex>Q){break;}
;}
;this.__oF.splice(R,0,{minIndex:Q,maxIndex:S});var U=this.__oF[0];for(var i=1;i<this.__oF.length;i++){var T=this.__oF[i];if(U.maxIndex+1>=T.minIndex){U.maxIndex=Math.max(U.maxIndex,T.maxIndex);this.__oF.splice(i,1);i--;}
else {U=T;}
;}
;}
,_dumpRanges:function(){var V=d;for(var i=0;i<this.__oF.length;i++){var W=this.__oF[i];V+=k+W.minIndex+n+W.maxIndex+o;}
;this.debug(V);}
,_fireChangeSelection:function(){if(this.hasBatchMode()){this.__oI=true;}
else {this.fireEvent(m);}
;}
},destruct:function(){this.__oF=null;}
});}
)();
(function(){var j="CSS1Compat",i="android",h="operamini",g="gecko",f="browser.quirksmode",e="browser.name",d="mobile chrome",c="iemobile",b="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",a="opera mobi",H="Mobile Safari",G="Maple",F="operamobile",E="ie",D="mobile safari",C="IEMobile|Maxthon|MSIE",B="qx.bom.client.Browser",A="(Maple )([0-9]+\.[0-9]+\.[0-9]*)",z="opera mini",y="browser.version",q="opera",r="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",p="webkit",m="browser.documentmode",n="5.0",k="Mobile/",l="msie",s="maple",t=")(/| )([0-9]+\.[0-9])",v="(",u="ce",x="",w="mshtml";qx.Bootstrap.define(B,{statics:{getName:function(){var L=navigator.userAgent;var K=new RegExp(v+qx.bom.client.Browser.__dh+t);var J=L.match(K);if(!J){return x;}
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
,getVersion:function(){var P=navigator.userAgent;var O=new RegExp(v+qx.bom.client.Browser.__dh+t);var N=P.match(O);if(!N){return x;}
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
,__dh:{"webkit":o,"gecko":b,"mshtml":C,"opera":r}[qx.bom.client.Engine.getName()]},defer:function(Q){qx.core.Environment.add(e,Q.getName),qx.core.Environment.add(y,Q.getVersion),qx.core.Environment.add(m,Q.getDocumentMode),qx.core.Environment.add(f,Q.getQuirksMode);}
});}
)();
(function(){var a="qx.ui.table.IRowRenderer";qx.Interface.define(a,{members:{updateDataRowElement:function(b,c){}
,getRowHeightStyle:function(d){}
,createRowStyle:function(e){}
,getRowClass:function(f){}
}});}
)();
(function(){var j="table-row-background-even",i="Boolean",h="content",g="default",f="height:",e="'",d="table-row",c="table-row-background-focused",b="css.boxmodel",a=';color:',v="table-row-background-odd",u="1px solid ",t="table-row-line",s="table-row-background-selected",r="background-color:",q=';border-bottom: 1px solid ',p="table-row-selected",o="table-row-background-focused-selected",n="px;",m="qx.ui.table.rowrenderer.Default",k=";",l="";qx.Class.define(m,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);this.__of=l;this.__of={};this._colors={};this._renderFont(qx.theme.manager.Font.getInstance().resolve(g));var w=qx.theme.manager.Color.getInstance();this._colors.bgcolFocusedSelected=w.resolve(o);this._colors.bgcolFocused=w.resolve(c);this._colors.bgcolSelected=w.resolve(s);this._colors.bgcolEven=w.resolve(j);this._colors.bgcolOdd=w.resolve(v);this._colors.colSelected=w.resolve(p);this._colors.colNormal=w.resolve(d);this._colors.horLine=w.resolve(t);}
,properties:{highlightFocusRow:{check:i,init:true}},members:{_colors:null,__og:null,__of:null,_insetY:1,_renderFont:function(x){if(x){this.__og=x.getStyles();this.__of=qx.bom.element.Style.compile(this.__og);this.__of=this.__of.replace(/"/g,e);}
else {this.__of=l;this.__og=qx.bom.Font.getDefaultStyles();}
;}
,updateDataRowElement:function(y,z){var B=this.__og;var A=z.style;qx.bom.element.Style.setStyles(z,B);if(y.focusedRow&&this.getHighlightFocusRow()){A.backgroundColor=y.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused;}
else {if(y.selected){A.backgroundColor=this._colors.bgcolSelected;}
else {A.backgroundColor=(y.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd;}
;}
;A.color=y.selected?this._colors.colSelected:this._colors.colNormal;A.borderBottom=u+this._colors.horLine;}
,getRowHeightStyle:function(C){if(qx.core.Environment.get(b)==h){C-=this._insetY;}
;return f+C+n;}
,createRowStyle:function(D){var E=[];E.push(k);E.push(this.__of);E.push(r);if(D.focusedRow&&this.getHighlightFocusRow()){E.push(D.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused);}
else {if(D.selected){E.push(this._colors.bgcolSelected);}
else {E.push((D.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd);}
;}
;E.push(a);E.push(D.selected?this._colors.colSelected:this._colors.colNormal);E.push(q,this._colors.horLine);return E.join(l);}
,getRowClass:function(F){return l;}
,getRowAttributes:function(G){return l;}
},destruct:function(){this._colors=this.__og=this.__of=null;}
});}
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
(function(){var f="_applyTheme",e="qx.theme.manager.Font",d="_dynamic",c="Theme",b="changeTheme",a="singleton";qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:c,nullable:true,apply:f,event:b}},members:{resolveDynamic:function(g){var h=this._dynamic;return g instanceof qx.bom.Font?g:h[g];}
,resolve:function(i){var l=this._dynamic;var j=l[i];if(j){return j;}
;var k=this.getTheme();if(k!==null&&k.fonts[i]){var m=this.__jf(k.fonts[i]);return l[i]=(new m).set(k.fonts[i]);}
;return i;}
,isDynamic:function(n){var q=this._dynamic;if(n&&(n instanceof qx.bom.Font||q[n]!==undefined)){return true;}
;var p=this.getTheme();if(p!==null&&n&&p.fonts[n]){var o=this.__jf(p.fonts[n]);q[n]=(new o).set(p.fonts[n]);return true;}
;return false;}
,__je:function(r,s){if(r[s].include){var t=r[r[s].include];r[s].include=null;delete r[s].include;r[s]=qx.lang.Object.mergeWith(r[s],t,false);this.__je(r,s);}
;}
,_applyTheme:function(u){var v=this._getDynamic();for(var y in v){if(v[y].themed){v[y].dispose();delete v[y];}
;}
;if(u){var w=u.fonts;for(var y in w){if(w[y].include&&w[w[y].include]){this.__je(w,y);}
;var x=this.__jf(w[y]);v[y]=(new x).set(w[y]);v[y].themed=true;}
;}
;this._setDynamic(v);}
,__jf:function(z){if(z.sources){return qx.bom.webfonts.WebFont;}
;return qx.bom.Font;}
},destruct:function(){this._disposeMap(d);}
});}
)();
(function(){var k="_applyItalic",j="_applyBold",h="_applyTextShadow",g="Integer",f="_applyFamily",e="_applyLineHeight",d="Array",c="line-through",b="overline",a="Color",B="String",A="qx.bom.Font",z="Number",y="_applyDecoration",x=" ",w="_applySize",v=",",u="_applyColor",t="Boolean",s="px",q='"',r="italic",o="normal",p="bold",m="underline",n="";qx.Class.define(A,{extend:qx.core.Object,construct:function(C,D){qx.core.Object.call(this);this.__jg={fontFamily:n,fontSize:null,fontWeight:null,fontStyle:null,textDecoration:null,lineHeight:null,color:null,textShadow:null};if(C!==undefined){this.setSize(C);}
;if(D!==undefined){this.setFamily(D);}
;}
,statics:{fromString:function(E){var I=new qx.bom.Font();var G=E.split(/\s+/);var name=[];var H;for(var i=0;i<G.length;i++){switch(H=G[i]){case p:I.setBold(true);break;case r:I.setItalic(true);break;case m:I.setDecoration(m);break;default:var F=parseInt(H,10);if(F==H||qx.lang.String.contains(H,s)){I.setSize(F);}
else {name.push(H);}
;break;};}
;if(name.length>0){I.setFamily(name);}
;return I;}
,fromConfig:function(J){var K=new qx.bom.Font;K.set(J);return K;}
,__jh:{fontFamily:n,fontSize:n,fontWeight:n,fontStyle:n,textDecoration:n,lineHeight:1.2,color:n,textShadow:n},getDefaultStyles:function(){return this.__jh;}
},properties:{size:{check:g,nullable:true,apply:w},lineHeight:{check:z,nullable:true,apply:e},family:{check:d,nullable:true,apply:f},bold:{check:t,nullable:true,apply:j},italic:{check:t,nullable:true,apply:k},decoration:{check:[m,c,b],nullable:true,apply:y},color:{check:a,nullable:true,apply:u},textShadow:{nullable:true,check:B,apply:h}},members:{__jg:null,_applySize:function(L,M){this.__jg.fontSize=L===null?null:L+s;}
,_applyLineHeight:function(N,O){this.__jg.lineHeight=N===null?null:N;}
,_applyFamily:function(P,Q){var R=n;for(var i=0,l=P.length;i<l;i++){if(P[i].indexOf(x)>0){R+=q+P[i]+q;}
else {R+=P[i];}
;if(i!==l-1){R+=v;}
;}
;this.__jg.fontFamily=R;}
,_applyBold:function(S,T){this.__jg.fontWeight=S==null?null:S?p:o;}
,_applyItalic:function(U,V){this.__jg.fontStyle=U==null?null:U?r:o;}
,_applyDecoration:function(W,X){this.__jg.textDecoration=W==null?null:W;}
,_applyColor:function(Y,ba){this.__jg.color=null;if(Y){this.__jg.color=qx.theme.manager.Color.getInstance().resolve(Y);}
;}
,_applyTextShadow:function(bb,bc){this.__jg.textShadow=bb==null?null:bb;}
,getStyles:function(){return this.__jg;}
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
else if(this.isRgbString(w)){return this.__ir();}
else if(this.isHex3String(w)){return this.__it();}
else if(this.isHex6String(w)){return this.__iu();}
;;;;throw new Error(d+w);}
,cssStringToRgb:function(x){if(this.isNamedColor(x)){return this.NAMED[x];}
else if(this.isSystemColor(x)){throw new Error(c+x);}
else if(this.isRgbString(x)){return this.__ir();}
else if(this.isRgbaString(x)){return this.__is();}
else if(this.isHex3String(x)){return this.__it();}
else if(this.isHex6String(x)){return this.__iu();}
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
,__ir:function(){var J=parseInt(RegExp.$1,10);var I=parseInt(RegExp.$2,10);var H=parseInt(RegExp.$3,10);return [J,I,H];}
,__is:function(){var M=parseInt(RegExp.$1,10);var L=parseInt(RegExp.$2,10);var K=parseInt(RegExp.$3,10);return [M,L,K];}
,__it:function(){var P=parseInt(RegExp.$1,16)*17;var O=parseInt(RegExp.$2,16)*17;var N=parseInt(RegExp.$3,16)*17;return [P,O,N];}
,__iu:function(){var S=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);var R=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);var Q=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);return [S,R,Q];}
,hex3StringToRgb:function(T){if(this.isHex3String(T)){return this.__it(T);}
;throw new Error(k+T);}
,hex3StringToHex6String:function(U){if(this.isHex3String(U)){return this.rgbToHexString(this.hex3StringToRgb(U));}
;return U;}
,hex6StringToRgb:function(V){if(this.isHex6String(V)){return this.__iu(V);}
;throw new Error(e+V);}
,hexStringToRgb:function(W){if(this.isHex3String(W)){return this.__it(W);}
;if(this.isHex6String(W)){return this.__iu(W);}
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
,toUriParameter:function(X,Y){var bc,ba=[];for(bc in X){if(X.hasOwnProperty(bc)){var bb=X[bc];if(bb instanceof Array){for(var i=0;i<bb.length;i++){this.__di(bc,bb[i],ba,Y);}
;}
else {this.__di(bc,bb,ba,Y);}
;}
;}
;return ba.join(r);}
,__di:function(bd,be,bf,bg){var bh=window.encodeURIComponent;if(bg){bf.push(bh(bd).replace(/%20/g,f)+b+bh(be).replace(/%20/g,f));}
else {bf.push(bh(bd)+b+bh(be));}
;}
}});}
)();
(function(){var h="qx.bom.webfonts.WebFont",g="",f="qx.debug",e="changeStatus",d="_applySources",c="qx.event.type.Data",b=" was not applied, perhaps the source file could not be loaded.",a="WebFont ";qx.Class.define(h,{extend:qx.bom.Font,events:{"changeStatus":c},properties:{sources:{nullable:true,apply:d}},members:{__ji:null,_applySources:function(j,k){var o=[];for(var i=0,l=j.length;i<l;i++){var n=this._quoteFontFamily(j[i].family);o.push(n);var m=j[i].source;qx.bom.webfonts.Manager.getInstance().require(n,m,this._onWebFontChangeStatus,this);}
;this.setFamily(o.concat(this.getFamily()));}
,_onWebFontChangeStatus:function(p){var q=p.getData();this.fireDataEvent(e,q);if(qx.core.Environment.get(f)){if(q.valid===false){this.warn(a+q.family+b);}
;}
;}
,_quoteFontFamily:function(r){return r.replace(/["']/g,g);}
}});}
)();
(function(){var n="m",k="os.name",h=")",g="os.version",f="qx.bom.webfonts.Manager",e="singleton",d=",\n",c="src: ",b="mobileSafari",a="'eot)",bd="');",bc="qx.debug",bb="interval",ba="!",Y="'eot')",X="\.(",W="}\n",V="font-family: ",U="mobile safari",T="safari",u="@font-face.*?",v=";\n",s="') format('woff')",t="('embedded-opentype')",q="browser.version",r="opera",o="Couldn't create @font-face rule for WebFont ",p="') format('svg')",z="src: url('",A="('embedded-opentype)",H="\nfont-style: normal;\nfont-weight: normal;",F="?#iefix') format('embedded-opentype')",L=";",J="Error while adding @font-face rule:",P="@font-face {",N="') format('truetype')",C="svg",S="#",R="chrome",Q="firefox",B="eot",D="ios",E="ttf",G="changeStatus",I="woff",K="browser.documentmode",M="browser.name",O="ie",w="url('",y="";qx.Class.define(f,{extend:qx.core.Object,type:e,construct:function(){qx.core.Object.call(this);this.__jj=[];this.__jk={};this.__gM=[];this.__jl=this.getPreferredFormats();}
,statics:{FONT_FORMATS:["eot","woff","ttf","svg"],VALIDATION_TIMEOUT:5000},members:{__jj:null,__jm:null,__jk:null,__jl:null,__gM:null,__jn:null,require:function(be,bf,bg,bh){var bi=[];for(var i=0,l=bf.length;i<l;i++){var bk=bf[i].split(S);var bj=qx.util.ResourceManager.getInstance().toUri(bk[0]);if(bk.length>1){bj=bj+S+bk[1];}
;bi.push(bj);}
;if(!(qx.core.Environment.get(M)==O&&qx.bom.client.Browser.getVersion()<9)){this.__jo(be,bi,bg,bh);return;}
;if(!this.__jn){this.__jn=new qx.event.Timer(100);this.__jn.addListener(bb,this.__jp,this);}
;if(!this.__jn.isEnabled()){this.__jn.start();}
;this.__gM.push([be,bi,bg,bh]);}
,remove:function(bl){var bm=null;for(var i=0,l=this.__jj.length;i<l;i++){if(this.__jj[i]==bl){bm=i;this.__jv(bl);break;}
;}
;if(bm){qx.lang.Array.removeAt(this.__jj,bm);}
;if(bl in this.__jk){this.__jk[bl].dispose();delete this.__jk[bl];}
;}
,getPreferredFormats:function(){var bn=[];var br=qx.core.Environment.get(M);var bo=qx.core.Environment.get(q);var bq=qx.core.Environment.get(k);var bp=qx.core.Environment.get(g);if((br==O&&qx.core.Environment.get(K)>=9)||(br==Q&&bo>=3.6)||(br==R&&bo>=6)){bn.push(I);}
;if((br==r&&bo>=10)||(br==T&&bo>=3.1)||(br==Q&&bo>=3.5)||(br==R&&bo>=4)||(br==U&&bq==D&&bp>=4.2)){bn.push(E);}
;if(br==O&&bo>=4){bn.push(B);}
;if(br==b&&bq==D&&bp>=4.1){bn.push(C);}
;return bn;}
,removeStyleSheet:function(){this.__jj=[];if(this.__jm){var bs=this.__jm.ownerNode?this.__jm.ownerNode:this.__jm.owningElement;qx.dom.Element.removeChild(bs,bs.parentNode);}
;this.__jm=null;}
,__jo:function(bt,bu,bv,bw){if(!qx.lang.Array.contains(this.__jj,bt)){var bz=this.__jr(bu);var by=this.__js(bt,bz);if(!by){throw new Error(o+bt+ba);}
;if(!this.__jm){this.__jm=qx.bom.Stylesheet.createElement();}
;try{this.__ju(by);}
catch(bA){if(qx.core.Environment.get(bc)){this.warn(J,bA.message);return;}
;}
;this.__jj.push(bt);}
;if(!this.__jk[bt]){this.__jk[bt]=new qx.bom.webfonts.Validator(bt);this.__jk[bt].setTimeout(qx.bom.webfonts.Manager.VALIDATION_TIMEOUT);this.__jk[bt].addListenerOnce(G,this.__jq,this);}
;if(bv){var bx=bw||window;this.__jk[bt].addListenerOnce(G,bv,bx);}
;this.__jk[bt].validate();}
,__jp:function(){if(this.__gM.length==0){this.__jn.stop();return;}
;var bB=this.__gM.shift();this.__jo.apply(this,bB);}
,__jq:function(bC){var bD=bC.getData();if(bD.valid===false){qx.event.Timer.once(function(){this.remove(bD.family);}
,this,250);}
;}
,__jr:function(bE){var bG=qx.bom.webfonts.Manager.FONT_FORMATS;var bJ={};for(var i=0,l=bE.length;i<l;i++){var bH=null;for(var x=0;x<bG.length;x++){var bI=new RegExp(X+bG[x]+h);var bF=bI.exec(bE[i]);if(bF){bH=bF[1];}
;}
;if(bH){bJ[bH]=bE[i];}
;}
;return bJ;}
,__js:function(bK,bL){var bO=[];var bM=this.__jl.length>0?this.__jl:qx.bom.webfonts.Manager.FONT_FORMATS;for(var i=0,l=bM.length;i<l;i++){var bN=bM[i];if(bL[bN]){bO.push(this.__jt(bN,bL[bN]));}
;}
;var bP=c+bO.join(d)+L;bP=V+bK+v+bP;bP=bP+H;return bP;}
,__jt:function(bQ,bR){switch(bQ){case B:return w+bR+bd+z+bR+F;case I:return w+bR+s;case E:return w+bR+N;case C:return w+bR+p;default:return null;};}
,__ju:function(bS){var bU=P+bS+W;if(qx.core.Environment.get(M)==O&&qx.core.Environment.get(K)<9){var bT=this.__jw(this.__jm.cssText);bT+=bU;this.__jm.cssText=bT;}
else {this.__jm.insertRule(bU,this.__jm.cssRules.length);}
;}
,__jv:function(bV){var bY=new RegExp(u+bV,n);for(var i=0,l=document.styleSheets.length;i<l;i++){var bW=document.styleSheets[i];if(bW.cssText){var bX=bW.cssText.replace(/\n/g,y).replace(/\r/g,y);bX=this.__jw(bX);if(bY.exec(bX)){bX=bX.replace(bY,y);}
;bW.cssText=bX;}
else if(bW.cssRules){for(var j=0,m=bW.cssRules.length;j<m;j++){var bX=bW.cssRules[j].cssText.replace(/\n/g,y).replace(/\r/g,y);if(bY.exec(bX)){this.__jm.deleteRule(j);return;}
;}
;}
;}
;}
,__jw:function(ca){return ca.replace(a,Y).replace(A,t);}
},destruct:function(){delete this.__jj;this.removeStyleSheet();for(var cb in this.__jk){this.__jk[cb].dispose();}
;qx.bom.webfonts.Validator.removeDefaultHelperElements();}
});}
)();
(function(){var b="singleton",a="qx.util.LibraryManager";qx.Class.define(a,{extend:qx.core.Object,type:b,statics:{__hE:qx.$$libraries||{}},members:{has:function(c){return !!this.self(arguments).__hE[c];}
,get:function(d,e){return this.self(arguments).__hE[d][e]?this.self(arguments).__hE[d][e]:null;}
,set:function(f,g,h){this.self(arguments).__hE[f][g]=h;}
}});}
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
(function(){var q="//",p="encoding",o="?",n="data",m="type",l="data:image/",k=";",j="qx.util.ResourceManager",i="singleton",h=",",c="mshtml",g="engine.name",f="io.ssl",b="string",a="/",e="resourceUri",d="";qx.Class.define(j,{extend:qx.core.Object,type:i,construct:function(){qx.core.Object.call(this);}
,statics:{__bc:qx.$$resources||{},__hF:{}},members:{has:function(r){return !!this.self(arguments).__bc[r];}
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
;var H=d;if((qx.core.Environment.get(g)==c)&&qx.core.Environment.get(f)){H=this.self(arguments).__hF[I];}
;return H+qx.util.LibraryManager.getInstance().get(I,e)+a+F;}
,toDataUri:function(J){var L=this.constructor.__bc[J];var M=this.constructor.__bc[L[4]];var N;if(M){var K=M[4][J];N=l+K[m]+k+K[p]+h+K[n];}
else {N=this.toUri(J);}
;return N;}
},defer:function(O){if((qx.core.Environment.get(g)==c)){if(qx.core.Environment.get(f)){for(var S in qx.$$libraries){var Q;if(qx.util.LibraryManager.getInstance().get(S,e)){Q=qx.util.LibraryManager.getInstance().get(S,e);}
else {O.__hF[S]=d;continue;}
;if(Q.match(/^\/\//)!=null){O.__hF[S]=window.location.protocol;}
else if(Q.match(/^\//)!=null){O.__hF[S]=window.location.protocol+q+window.location.host;}
else if(Q.match(/^\.\//)!=null){var P=document.URL;O.__hF[S]=P.substring(0,P.lastIndexOf(a)+1);}
else if(Q.match(/^http/)!=null){O.__hF[S]=d;}
else {var T=window.location.href.indexOf(o);var R;if(T==-1){R=window.location.href;}
else {R=window.location.href.substring(0,T);}
;O.__hF[S]=R.substring(0,R.lastIndexOf(a)+1);}
;;;}
;}
;}
;}
});}
)();
(function(){var k="qx.event.Timer",j="_applyInterval",i="func is not a function",h="Boolean",g="qx.debug",f="No timeout given",d="Integer",c="qx.event.type.Event",b="_applyEnabled",a="interval";qx.Class.define(k,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);this.setEnabled(false);if(l!=null){this.setInterval(l);}
;var self=this;this.__gk=function(){self._oninterval.call(self);}
;}
,events:{"interval":c},statics:{once:function(m,n,o){if(qx.core.Environment.get(g)){qx.core.Assert.assertFunction(m,i);qx.core.Assert.assertNotUndefined(o,f);}
;var p=new qx.event.Timer(o);p.__gl=m;p.addListener(a,function(e){p.stop();m.call(n,e);p.dispose();n=null;}
,n);p.start();return p;}
},properties:{enabled:{init:true,check:h,apply:b},interval:{check:d,init:1000,apply:j}},members:{__gm:null,__gk:null,_applyInterval:function(q,r){if(this.getEnabled()){this.restart();}
;}
,_applyEnabled:function(s,t){if(t){window.clearInterval(this.__gm);this.__gm=null;}
else if(s){this.__gm=window.setInterval(this.__gk,this.getInterval());}
;}
,start:function(){this.setEnabled(true);}
,startWith:function(u){this.setInterval(u);this.start();}
,stop:function(){this.setEnabled(false);}
,restart:function(){this.stop();this.start();}
,restartWith:function(v){this.stop();this.startWith(v);}
,_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;}
;if(this.getEnabled()){this.fireEvent(a);}
;}
)},destruct:function(){if(this.__gm){window.clearInterval(this.__gm);}
;this.__gm=this.__gk=null;}
});}
)();
(function(){var q="engine.name",p="='",o="none",n="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",m="qx.dom.Element",k="webkit",j="The tag name is missing!",h="div",g="' ",f="></",b="<",d=" ",c=">",a="";qx.Bootstrap.define(m,{statics:{__gn:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},hasChild:function(parent,r){return r.parentNode===parent;}
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
,__go:{},__gp:{},_allowCreationWithMarkup:function(Q){if(!Q){Q=window;}
;var R=Q.location.href;if(qx.dom.Element.__gp[R]==undefined){try{Q.document.createElement(n);qx.dom.Element.__gp[R]=true;}
catch(e){qx.dom.Element.__gp[R]=false;}
;}
;return qx.dom.Element.__gp[R];}
,getHelperElement:function(S){if(!S){S=window;}
;var U=S.location.href;if(!qx.dom.Element.__go[U]){var T=qx.dom.Element.__go[U]=S.document.createElement(h);if(qx.core.Environment.get(q)==k){T.style.display=o;S.document.body.appendChild(T);}
;}
;return qx.dom.Element.__go[U];}
,create:function(name,V,W){if(!W){W=window;}
;if(!name){throw new Error(j);}
;var Y=this.__gn;var X=a;for(var bb in V){if(Y[bb]){X+=bb+p+V[bb]+g;}
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
(function(){var j="readOnly",i="accessKey",h="qx.bom.element.Attribute",g="rowSpan",f="vAlign",e="className",d="textContent",c="'",b="htmlFor",a="longDesc",A="cellSpacing",z="frameBorder",y="='",x="useMap",w="innerText",v="innerHTML",u="tabIndex",t="dateTime",s="maxLength",r="html.element.textcontent",p="mshtml",q="cellPadding",n="browser.documentmode",o="colSpan",l="engine.name",m="undefined",k="";qx.Bootstrap.define(h,{statics:{__gq:{names:{"class":e,"for":b,html:v,text:qx.core.Environment.get(r)?d:w,colspan:o,rowspan:g,valign:f,datetime:t,accesskey:i,tabindex:u,maxlength:s,readonly:j,longdesc:a,cellpadding:q,cellspacing:A,frameborder:z,usemap:x},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:k,className:k,innerHTML:k,innerText:k,textContent:k,htmlFor:k,tabIndex:0,maxLength:qx.core.Environment.select(l,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(B){var C=[];var E=this.__gq.runtime;for(var D in B){if(!E[D]){C.push(D,y,B[D],c);}
;}
;return C.join(k);}
,get:function(F,name){var H=this.__gq;var G;name=H.names[name]||name;if(qx.core.Environment.get(l)==p&&parseInt(qx.core.Environment.get(n),10)<8&&H.original[name]){G=F.getAttribute(name,2);}
else if(H.property[name]){G=F[name];if(typeof H.propertyDefault[name]!==m&&G==H.propertyDefault[name]){if(typeof H.bools[name]===m){return null;}
else {return G;}
;}
;}
else {G=F.getAttribute(name);}
;if(H.bools[name]){return !!G;}
;return G;}
,set:function(I,name,J){if(typeof J===m){return;}
;var K=this.__gq;name=K.names[name]||name;if(K.bools[name]){J=!!J;}
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
,removeAllRules:function(E){if(qx.core.Environment.get(a)){var F=E.cssRules;var G=F.length;for(var i=G-1;i>=0;i--){E.deleteRule(i);}
;}
else {var F=E.rules;var G=F.length;for(var i=G-1;i>=0;i--){E.removeRule(i);}
;}
;}
,addImport:function(H,I){if(qx.core.Environment.get(o)){H.addImport(I);}
else {H.insertRule(k+I+h,H.cssRules.length);}
;}
,removeImport:function(J,K){if(qx.core.Environment.get(b)){var L=J.imports;var N=L.length;for(var i=N-1;i>=0;i--){if(L[i].href==K||L[i].href==qx.util.Uri.getAbsolute(K)){J.removeImport(i);}
;}
;}
else {var M=J.cssRules;var N=M.length;for(var i=N-1;i>=0;i--){if(M[i].href==K){J.deleteRule(i);}
;}
;}
;}
,removeAllImports:function(O){if(qx.core.Environment.get(b)){var P=O.imports;var R=P.length;for(var i=R-1;i>=0;i--){O.removeImport(i);}
;}
else {var Q=O.cssRules;var R=Q.length;for(var i=R-1;i>=0;i--){if(Q[i].type==Q[i].IMPORT_RULE){O.deleteRule(i);}
;}
;}
;}
}});}
)();
(function(){var h="qx.bom.client.Stylesheet",g="html.stylesheet.deleterule",f="html.stylesheet.insertrule",e="html.stylesheet.createstylesheet",d="html.stylesheet.addimport",c="html.stylesheet.removeimport",b="function",a="object";qx.Bootstrap.define(h,{statics:{__jx:function(){if(!qx.bom.client.Stylesheet.__jy){qx.bom.client.Stylesheet.__jy=qx.bom.Stylesheet.createElement();}
;return qx.bom.client.Stylesheet.__jy;}
,getCreateStyleSheet:function(){return typeof document.createStyleSheet===a;}
,getInsertRule:function(){return typeof qx.bom.client.Stylesheet.__jx().insertRule===b;}
,getDeleteRule:function(){return typeof qx.bom.client.Stylesheet.__jx().deleteRule===b;}
,getAddImport:function(){return (typeof qx.bom.client.Stylesheet.__jx().addImport===a);}
,getRemoveImport:function(){return (typeof qx.bom.client.Stylesheet.__jx().removeImport===a);}
},defer:function(i){qx.core.Environment.add(e,i.getCreateStyleSheet);qx.core.Environment.add(f,i.getInsertRule);qx.core.Environment.add(g,i.getDeleteRule);qx.core.Environment.add(d,i.getAddImport);qx.core.Environment.add(c,i.getRemoveImport);}
});}
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
(function(){var i="qx.event.type.Data",h="qx.bom.webfonts.Validator",g="__jC",f="_applyFontFamily",e="span",d="Integer",c="interval",b="changeStatus",a=",";qx.Class.define(h,{extend:qx.core.Object,construct:function(j){qx.core.Object.call(this);if(j){this.setFontFamily(j);}
;this.__jz=this._getRequestedHelpers();}
,statics:{COMPARISON_FONTS:{sans:["Arial","Helvetica","sans-serif"],serif:["Times New Roman","Georgia","serif"]},HELPER_CSS:{position:"absolute",margin:"0",padding:"0",top:"-1000px",left:"-1000px",fontSize:"350px",width:"auto",height:"auto",lineHeight:"normal",fontVariant:"normal"},COMPARISON_STRING:"WEei",__jA:null,__jB:null,removeDefaultHelperElements:function(){var k=qx.bom.webfonts.Validator.__jB;if(k){for(var l in k){document.body.removeChild(k[l]);}
;}
;delete qx.bom.webfonts.Validator.__jB;}
},properties:{fontFamily:{nullable:true,init:null,apply:f},timeout:{check:d,init:5000}},events:{"changeStatus":i},members:{__jz:null,__jC:null,__jD:null,validate:function(){this.__jD=new Date().getTime();if(this.__jC){this.__jC.restart();}
else {this.__jC=new qx.event.Timer(100);this.__jC.addListener(c,this.__jE,this);qx.event.Timer.once(function(){this.__jC.start();}
,this,0);}
;}
,_reset:function(){if(this.__jz){for(var n in this.__jz){var m=this.__jz[n];document.body.removeChild(m);}
;this.__jz=null;}
;}
,_isFontValid:function(){if(!qx.bom.webfonts.Validator.__jA){this.__bf();}
;if(!this.__jz){this.__jz=this._getRequestedHelpers();}
;var p=qx.bom.element.Dimension.getWidth(this.__jz.sans);var o=qx.bom.element.Dimension.getWidth(this.__jz.serif);var q=qx.bom.webfonts.Validator;if(p!==q.__jA.sans&&o!==q.__jA.serif){return true;}
;return false;}
,_getRequestedHelpers:function(){var r=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.sans);var s=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.serif);return {sans:this._getHelperElement(r),serif:this._getHelperElement(s)};}
,_getHelperElement:function(t){var u=qx.lang.Object.clone(qx.bom.webfonts.Validator.HELPER_CSS);if(t){if(u.fontFamily){u.fontFamily+=a+t.join(a);}
else {u.fontFamily=t.join(a);}
;}
;var v=document.createElement(e);v.innerHTML=qx.bom.webfonts.Validator.COMPARISON_STRING;qx.bom.element.Style.setStyles(v,u);document.body.appendChild(v);return v;}
,_applyFontFamily:function(w,x){if(w!==x){this._reset();}
;}
,__bf:function(){var y=qx.bom.webfonts.Validator;if(!y.__jB){y.__jB={sans:this._getHelperElement(y.COMPARISON_FONTS.sans),serif:this._getHelperElement(y.COMPARISON_FONTS.serif)};}
;y.__jA={sans:qx.bom.element.Dimension.getWidth(y.__jB.sans),serif:qx.bom.element.Dimension.getWidth(y.__jB.serif)};}
,__jE:function(){if(this._isFontValid()){this.__jC.stop();this._reset();this.fireDataEvent(b,{family:this.getFontFamily(),valid:true});}
else {var z=new Date().getTime();if(z-this.__jD>=this.getTimeout()){this.__jC.stop();this._reset();this.fireDataEvent(b,{family:this.getFontFamily(),valid:false});}
;}
;}
},destruct:function(){this._reset();this.__jC.stop();this.__jC.removeListener(c,this.__jE,this);this._disposeObjects(g);}
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
,__jF:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;var t=qx.bom.element.Overflow.getX(r);var u=parseInt(s.get(r,h)||b,10);var x=parseInt(s.get(r,i)||b,10);if(this.__jF[t]){var w=r.clientWidth;if((qx.core.Environment.get(a)==g)||qx.dom.Node.isBlockNode(r)){w=w-u-x;}
;return w;}
else {if(r.clientWidth>=r.scrollWidth){return Math.max(r.clientWidth,r.scrollWidth)-u-x;}
else {var v=r.scrollWidth-u;if(qx.core.Environment.get(a)==d&&qx.core.Environment.get(c)>=6){v-=x;}
;return v;}
;}
;}
,getContentHeight:function(y){var z=qx.bom.element.Style;var C=qx.bom.element.Overflow.getY(y);var B=parseInt(z.get(y,e)||b,10);var A=parseInt(z.get(y,f)||b,10);if(this.__jF[C]){return y.clientHeight-B-A;}
else {if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-B-A;}
else {var D=y.scrollHeight-B;if(qx.core.Environment.get(a)==d&&qx.core.Environment.get(c)==6){D-=A;}
;return D;}
;}
;}
,getContentSize:function(E){return {width:this.getContentWidth(E),height:this.getContentHeight(E)};}
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
(function(){var k="borderLeftStyle",j="borderRightStyle",i="div",h="borderRightWidth",g="overflow-y",f="borderLeftWidth",e="-moz-scrollbars-vertical",d=":",b="100px",a="overflow:",B="qx.bom.element.Overflow",A="overflow-x",z="overflowX",y=";",x="overflowY",w="engine.version",v="none",u="scroll",r="gecko",q="overflow",o="",p="engine.name",m="-moz-scrollbars-none",n="hidden",l="css.overflowxy";qx.Bootstrap.define(B,{statics:{DEFAULT_SCROLLBAR_WIDTH:14,__dj:null,getScrollbarWidth:function(){if(this.__dj!==null){return this.__dj;}
;var C=qx.bom.element.Style;var E=function(I,J){return parseInt(C.get(I,J),10)||0;}
;var F=function(K){return (C.get(K,j)==v?0:E(K,h));}
;var D=function(L){return (C.get(L,k)==v?0:E(L,f));}
;var H=qx.core.Environment.select(p,{"mshtml":function(M){if(C.get(M,x)==n||M.clientWidth==0){return F(M);}
;return Math.max(0,M.offsetWidth-M.clientLeft-M.clientWidth);}
,"default":function(N){if(N.clientWidth==0){var O=C.get(N,q);var P=(O==u||O==e?16:0);return Math.max(0,F(N)+P);}
;return Math.max(0,(N.offsetWidth-N.clientWidth-D(N)));}
});var G=function(Q){return H(Q)-F(Q);}
;var t=document.createElement(i);var s=t.style;s.height=s.width=b;s.overflow=u;document.body.appendChild(t);var c=G(t);this.__dj=c;document.body.removeChild(t);return this.__dj;}
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
(function(){var j="css.float",i="px",h="Cascaded styles are not supported in this browser!",g="css.appearance",f="pixelRight",e="css.userselect",d="css.boxsizing",c="css.textoverflow",b="pixelHeight",a=":",E="pixelTop",D="css.borderimage",C="Invalid argument 'name'",B="pixelLeft",A="css.usermodify",z="qx.bom.element.Style",y=". Only pixel values work well across different clients.",x="pixelBottom",w="Invalid argument 'styles'",v="pixelWidth",q="Untranslated computed property value: ",r=";",o="float",p="qx.debug",m="browser.documentmode",n="mshtml",k="Invalid argument 'smart'",l="Invalid argument 'element'",s="style",t="engine.name",u="";qx.Bootstrap.define(z,{statics:{__dk:function(){var G={"appearance":qx.core.Environment.get(g),"userSelect":qx.core.Environment.get(e),"textOverflow":qx.core.Environment.get(c),"borderImage":qx.core.Environment.get(D),"float":qx.core.Environment.get(j),"userModify":qx.core.Environment.get(A),"boxSizing":qx.core.Environment.get(d)};this.__dl={};for(var F in qx.lang.Object.clone(G)){if(!G[F]){delete G[F];}
else {this.__dl[F]=F==o?o:qx.lang.String.hyphenate(G[F]);}
;}
;this.__dm=G;}
,__dn:function(name){var H=qx.bom.Style.getPropertyName(name);if(H){this.__dm[name]=H;}
;return H;}
,__do:{width:v,height:b,left:B,right:f,top:E,bottom:x},__dp:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(I){var K=[];var L=this.__dp;var M=this.__dl;var name,J;for(name in I){J=I[name];if(J==null){continue;}
;name=this.__dm[name]||this.__dn(name)||name;if(L[name]){K.push(L[name].compile(J));}
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
,isPropertySupported:function(Q){return (this.__dp[Q]||this.__dm[Q]||Q in document.documentElement.style);}
,COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(R,name,S,T){if(qx.core.Environment.get(p)){qx.core.Assert.assertElement(R,l);qx.core.Assert.assertString(name,C);if(T!==undefined){qx.core.Assert.assertBoolean(T,k);}
;}
;name=this.__dm[name]||this.__dn(name)||name;if(T!==false&&this.__dp[name]){return this.__dp[name].set(R,S);}
else {R.style[name]=S!==null?S:u;}
;}
,setStyles:function(U,V,W){if(qx.core.Environment.get(p)){qx.core.Assert.assertElement(U,l);qx.core.Assert.assertMap(V,w);if(W!==undefined){qx.core.Assert.assertBoolean(W,k);}
;}
;var ba=this.__dm;var bc=this.__dp;var X=U.style;for(var bb in V){var Y=V[bb];var name=ba[bb]||this.__dn(bb)||bb;if(Y===undefined){if(W!==false&&bc[name]){bc[name].reset(U);}
else {X[name]=u;}
;}
else {if(W!==false&&bc[name]){bc[name].set(U,Y);}
else {X[name]=Y!==null?Y:u;}
;}
;}
;}
,reset:function(bd,name,be){name=this.__dm[name]||this.__dn(name)||name;if(be!==false&&this.__dp[name]){return this.__dp[name].reset(bd);}
else {bd.style[name]=u;}
;}
,get:qx.core.Environment.select(t,{"mshtml":function(bf,name,bg,bh){name=this.__dm[name]||this.__dn(name)||name;if(bh!==false&&this.__dp[name]){return this.__dp[name].get(bf,bg);}
;if(!bf.currentStyle){return bf.style[name]||u;}
;switch(bg){case this.LOCAL_MODE:return bf.style[name]||u;case this.CASCADED_MODE:return bf.currentStyle[name]||u;default:var bl=bf.currentStyle[name]||u;if(/^-?[\.\d]+(px)?$/i.test(bl)){return bl;}
;var bk=this.__do[name];if(bk){var bi=bf.style[name];bf.style[name]=bl||0;var bj=bf.style[bk]+i;bf.style[name]=bi;return bj;}
;if(/^-?[\.\d]+(em|pt|%)?$/i.test(bl)){throw new Error(q+name+y);}
;return bl;};}
,"default":function(bm,name,bn,bo){name=this.__dm[name]||this.__dn(name)||name;if(bo!==false&&this.__dp[name]){return this.__dp[name].get(bm,bn);}
;switch(bn){case this.LOCAL_MODE:return bm.style[name]||u;case this.CASCADED_MODE:if(bm.currentStyle){return bm.currentStyle[name]||u;}
;throw new Error(h);default:var bp=qx.dom.Node.getDocument(bm);var bq=bp.defaultView.getComputedStyle(bm,null);return bq?bq[name]:u;};}
})},defer:function(br){br.__dk();}
});}
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
(function(){var b="qx.bom.Viewport",a="undefined";qx.Bootstrap.define(b,{statics:{getWidth:function(c){var c=c||window;var d=c.document;return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;}
,getHeight:function(e){var e=e||window;var f=e.document;return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;}
,getScrollLeft:function(g){var g=g?g:window;if(typeof g.pageXOffset!==a){return g.pageXOffset;}
;var h=g.document;return h.documentElement.scrollLeft||h.body.scrollLeft;}
,getScrollTop:function(i){var i=i?i:window;if(typeof i.pageYOffeset!==a){return i.pageYOffset;}
;var j=i.document;return j.documentElement.scrollTop||j.body.scrollTop;}
,__dq:function(k){var l=this.getWidth(k)>this.getHeight(k)?90:0;var m=k.orientation;if(m==null||Math.abs(m%180)==l){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};}
else {return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};}
;}
,__dr:null,getOrientation:function(n){var n=n||window.top;var o=n.orientation;if(o==null){o=this.getWidth(n)>this.getHeight(n)?90:0;}
else {if(this.__dr==null){this.__dr=this.__dq(n);}
;o=this.__dr[o];}
;return o;}
,isLandscape:function(p){return this.getWidth(p)>=this.getHeight(p);}
,isPortrait:function(q){return this.getWidth(q)<this.getHeight(q);}
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
(function(){var j="changeWidth",i="Wrong 'width' argument. ",h="allowShrinkY",g="Something went wrong with the layout of ",f="bottom",e="Wrong 'left' argument. ",d="baseline",c="marginBottom",b="qx.ui.core.LayoutItem",a="center",G="marginTop",F="!",E="allowGrowX",D="middle",C="marginLeft",B="allowShrinkX",A="top",z="right",y="marginRight",x="abstract",q="Wrong 'top' argument. ",r="Wrong 'height' argument. ",o="allowGrowY",p="left",m="changeHeight",n="_applyAlign",k="qx.debug",l="shorthand",s="Boolean",t="_applyStretching",v="_applyMargin",u="_applyDimension",w="Integer";qx.Class.define(b,{type:x,extend:qx.core.Object,properties:{minWidth:{check:w,nullable:true,apply:u,init:null,themeable:true},width:{check:w,event:j,nullable:true,apply:u,init:null,themeable:true},maxWidth:{check:w,nullable:true,apply:u,init:null,themeable:true},minHeight:{check:w,nullable:true,apply:u,init:null,themeable:true},height:{check:w,event:m,nullable:true,apply:u,init:null,themeable:true},maxHeight:{check:w,nullable:true,apply:u,init:null,themeable:true},allowGrowX:{check:s,apply:t,init:true,themeable:true},allowShrinkX:{check:s,apply:t,init:true,themeable:true},allowGrowY:{check:s,apply:t,init:true,themeable:true},allowShrinkY:{check:s,apply:t,init:true,themeable:true},allowStretchX:{group:[E,B],mode:l,themeable:true},allowStretchY:{group:[o,h],mode:l,themeable:true},marginTop:{check:w,init:0,apply:v,themeable:true},marginRight:{check:w,init:0,apply:v,themeable:true},marginBottom:{check:w,init:0,apply:v,themeable:true},marginLeft:{check:w,init:0,apply:v,themeable:true},margin:{group:[G,y,c,C],mode:l,themeable:true},alignX:{check:[p,a,z],nullable:true,apply:n,themeable:true},alignY:{check:[A,D,f,d],nullable:true,apply:n,themeable:true}},members:{__gE:null,__gF:null,__gG:null,__gH:null,__gI:null,__gJ:null,__gK:null,getBounds:function(){return this.__gJ||this.__gF||null;}
,clearSeparators:function(){}
,renderSeparator:function(H,I){}
,renderLayout:function(J,top,K,L){if(qx.core.Environment.get(k)){var M=g+this.toString()+F;this.assertInteger(J,e+M);this.assertInteger(top,q+M);this.assertInteger(K,i+M);this.assertInteger(L,r+M);}
;var N=null;if(this.getHeight()==null&&this._hasHeightForWidth()){var N=this._getHeightForWidth(K);}
;if(N!=null&&N!==this.__gE){this.__gE=N;qx.ui.core.queue.Layout.add(this);return null;}
;var P=this.__gF;if(!P){P=this.__gF={};}
;var O={};if(J!==P.left||top!==P.top){O.position=true;P.left=J;P.top=top;}
;if(K!==P.width||L!==P.height){O.size=true;P.width=K;P.height=L;}
;if(this.__gG){O.local=true;delete this.__gG;}
;if(this.__gI){O.margin=true;delete this.__gI;}
;return O;}
,isExcluded:function(){return false;}
,hasValidLayout:function(){return !this.__gG;}
,scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);}
,invalidateLayoutCache:function(){this.__gG=true;this.__gH=null;}
,getSizeHint:function(Q){var R=this.__gH;if(R){return R;}
;if(Q===false){return null;}
;R=this.__gH=this._computeSizeHint();if(this._hasHeightForWidth()&&this.__gE&&this.getHeight()==null){R.height=this.__gE;}
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
,_applyMargin:function(){this.__gI=true;var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}
;}
,_applyAlign:function(){var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}
;}
,_applyDimension:function(){qx.ui.core.queue.Layout.add(this);}
,_applyStretching:function(){qx.ui.core.queue.Layout.add(this);}
,hasUserBounds:function(){return !!this.__gJ;}
,setUserBounds:function(bc,top,bd,be){this.__gJ={left:bc,top:top,width:bd,height:be};qx.ui.core.queue.Layout.add(this);}
,resetUserBounds:function(){delete this.__gJ;qx.ui.core.queue.Layout.add(this);}
,__gL:{},setLayoutProperties:function(bf){if(bf==null){return;}
;var bg=this.__gK;if(!bg){bg=this.__gK={};}
;var parent=this.getLayoutParent();if(parent){parent.updateLayoutProperties(bf);}
;for(var bh in bf){if(bf[bh]==null){delete bg[bh];}
else {bg[bh]=bf[bh];}
;}
;}
,getLayoutProperties:function(){return this.__gK||this.__gL;}
,clearLayoutProperties:function(){delete this.__gK;}
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
,clone:function(){var bl=qx.core.Object.prototype.clone.call(this);var bm=this.__gK;if(bm){bl.__gK=qx.lang.Object.clone(bm);}
;return bl;}
},destruct:function(){this.$$parent=this.$$subparent=this.__gK=this.__gF=this.__gJ=this.__gH=null;}
});}
)();
(function(){var b="qx.ui.core.queue.Layout",a="layout";qx.Class.define(b,{statics:{__gM:{},remove:function(c){delete this.__gM[c.$$hash];}
,add:function(d){this.__gM[d.$$hash]=d;qx.ui.core.queue.Manager.scheduleFlush(a);}
,isScheduled:function(e){return !!this.__gM[e.$$hash];}
,flush:function(){var f=this.__gP();for(var i=f.length-1;i>=0;i--){var g=f[i];if(g.hasValidLayout()){continue;}
;if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();g.renderLayout(0,0,j.width,j.height);}
else {var h=g.getBounds();g.renderLayout(h.left,h.top,h.width,h.height);}
;}
;}
,getNestingLevel:function(k){var l=this.__gO;var n=0;var parent=k;while(true){if(l[parent.$$hash]!=null){n+=l[parent.$$hash];break;}
;if(!parent.$$parent){break;}
;parent=parent.$$parent;n+=1;}
;var m=n;while(k&&k!==parent){l[k.$$hash]=m--;k=k.$$parent;}
;return n;}
,__gN:function(){var t=qx.ui.core.queue.Visibility;this.__gO={};var s=[];var r=this.__gM;var o,q;for(var p in r){o=r[p];if(t.isVisible(o)){q=this.getNestingLevel(o);if(!s[q]){s[q]={};}
;s[q][p]=o;delete r[p];}
;}
;return s;}
,__gP:function(){var x=[];var z=this.__gN();for(var w=z.length-1;w>=0;w--){if(!z[w]){continue;}
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
(function(){var b="qx.util.DeferredCallManager",a="singleton";qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__dt={};this.__du=qx.lang.Function.bind(this.__dy,this);this.__dv=false;}
,members:{__dw:null,__dx:null,__dt:null,__dv:null,__du:null,schedule:function(c){if(this.__dw==null){this.__dw=window.setTimeout(this.__du,0);}
;var d=c.toHashCode();if(this.__dx&&this.__dx[d]){return;}
;this.__dt[d]=c;this.__dv=true;}
,cancel:function(e){var f=e.toHashCode();if(this.__dx&&this.__dx[f]){this.__dx[f]=null;return;}
;delete this.__dt[f];if(qx.lang.Object.isEmpty(this.__dt)&&this.__dw!=null){window.clearTimeout(this.__dw);this.__dw=null;}
;}
,__dy:qx.event.GlobalError.observeMethod(function(){this.__dw=null;while(this.__dv){this.__dx=qx.lang.Object.clone(this.__dt);this.__dt={};this.__dv=false;for(var h in this.__dx){var g=this.__dx[h];if(g){this.__dx[h]=null;g.call();}
;}
;}
;this.__dx=null;}
)},destruct:function(){if(this.__dw!=null){window.clearTimeout(this.__dw);}
;this.__du=this.__dt=null;}
});}
)();
(function(){var e="qx.util.DeferredCall",d="The context object '",c="qx.debug",b="'is already disposed.",a="' of the defered call '";qx.Class.define(e,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);this.__cq=f;this.__cr=g||null;this.__dz=qx.util.DeferredCallManager.getInstance();}
,members:{__cq:null,__cr:null,__dz:null,cancel:function(){this.__dz.cancel(this);}
,schedule:function(){this.__dz.schedule(this);}
,call:function(){if(qx.core.Environment.get(c)){var h=this.__cr;if(h&&h.isDisposed&&h.isDisposed()){this.warn(d+h+a+this+b);}
;}
;this.__cr?this.__cq.apply(this.__cr):this.__cq();}
},destruct:function(){this.cancel();this.__cr=this.__cq=this.__dz=null;}
});}
)();
(function(){var m="Child is already in: ",k="text",j="|bubble|",h="qx.html.Element",g="|capture|",f="focus",d="Failed to add event listener for type '",c="Flushing elements...",b="blur",a="__dW",bh="Flush: ",bg="deactivate",bf="css.userselect",be="Synced DOM with ",bd=" from the target '",bc="capture",bb="visible",ba="Root elements could not be inserted into other ones.",Y="Has no children!",X="off",t="releaseCapture",u="Could not move to same index!",r="Flush invisible element",s="Failed to remove event listener for type '",p="qxSelectable",q="tabIndex",n="Has no child at this position!",o="qx.html.Iframe",z="activate",A="Has no parent to remove from.",I=" to the target '",G=" operations",P="Flush rendered element",K="none",T="css.userselect.none",R="hidden",C="on",W="Switching visibility to: ",V="id",U="': ",B="scroll",E="Invalid capture flag.",F="div",H="'",J="Invalid callback function",L="Invalid context for callback.",Q="",S="Invalid event type.",v="mshtml",w="engine.name",D="Has no child: ",O="Could not overwrite existing element!",N="qx.debug",M="element";qx.Class.define(h,{extend:qx.core.Object,construct:function(bi,bj,bk){qx.core.Object.call(this);this.__dA=bi||F;this.__dB=bj||null;this.__dC=bk||null;}
,statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__dD:{},_scheduleFlush:function(bl){qx.html.Element.__ei.schedule();}
,flush:function(){var bw;if(qx.core.Environment.get(N)){if(this.DEBUG){qx.log.Logger.debug(this,c);}
;}
;var bo=this.__dE();var bn=bo.getFocus();if(bn&&this.__dI(bn)){bo.blur(bn);}
;var bD=bo.getActive();if(bD&&this.__dI(bD)){qx.bom.Element.deactivate(bD);}
;var br=this.__dG();if(br&&this.__dI(br)){qx.bom.Element.releaseCapture(br);}
;var bx=[];var by=this._modified;for(var bv in by){bw=by[bv];if(bw.__eb()||bw.classname==o){if(bw.__dJ&&qx.dom.Hierarchy.isRendered(bw.__dJ)){bx.push(bw);}
else {if(qx.core.Environment.get(N)){if(this.DEBUG){bw.debug(r);}
;}
;bw.__ea();}
;delete by[bv];}
;}
;for(var i=0,l=bx.length;i<l;i++){bw=bx[i];if(qx.core.Environment.get(N)){if(this.DEBUG){bw.debug(P);}
;}
;bw.__ea();}
;var bt=this._visibility;for(var bv in bt){bw=bt[bv];var bz=bw.__dJ;if(!bz){delete bt[bv];continue;}
;if(qx.core.Environment.get(N)){if(this.DEBUG){qx.log.Logger.debug(this,W+bw.__dM);}
;}
;if(!bw.$$disposed){bz.style.display=bw.__dM?Q:K;if((qx.core.Environment.get(w)==v)){if(!(document.documentMode>=8)){bz.style.visibility=bw.__dM?bb:R;}
;}
;}
;delete bt[bv];}
;var scroll=this._scroll;for(var bv in scroll){bw=scroll[bv];var bE=bw.__dJ;if(bE&&bE.offsetWidth){var bq=true;if(bw.__dP!=null){bw.__dJ.scrollLeft=bw.__dP;delete bw.__dP;}
;if(bw.__dQ!=null){bw.__dJ.scrollTop=bw.__dQ;delete bw.__dQ;}
;var bA=bw.__dN;if(bA!=null){var bu=bA.element.getDomElement();if(bu&&bu.offsetWidth){qx.bom.element.Scroll.intoViewX(bu,bE,bA.align);delete bw.__dN;}
else {bq=false;}
;}
;var bB=bw.__dO;if(bB!=null){var bu=bB.element.getDomElement();if(bu&&bu.offsetWidth){qx.bom.element.Scroll.intoViewY(bu,bE,bB.align);delete bw.__dO;}
else {bq=false;}
;}
;if(bq){delete scroll[bv];}
;}
;}
;var bp={"releaseCapture":1,"blur":1,"deactivate":1};for(var i=0;i<this._actions.length;i++){var bC=this._actions[i];var bz=bC.element.__dJ;if(!bz||!bp[bC.type]&&!bC.element.__eb()){continue;}
;var bs=bC.args;bs.unshift(bz);qx.bom.Element[bC.type].apply(qx.bom.Element,bs);}
;this._actions=[];for(var bv in this.__dD){var bm=this.__dD[bv];var bE=bm.element.__dJ;if(bE){qx.bom.Selection.set(bE,bm.start,bm.end);delete this.__dD[bv];}
;}
;qx.event.handler.Appear.refresh();}
,__dE:function(){if(!this.__dF){var bF=qx.event.Registration.getManager(window);this.__dF=bF.getHandler(qx.event.handler.Focus);}
;return this.__dF;}
,__dG:function(){if(!this.__dH){var bG=qx.event.Registration.getManager(window);this.__dH=bG.getDispatcher(qx.event.dispatch.MouseCapture);}
;return this.__dH.getCaptureElement();}
,__dI:function(bH){var bI=qx.core.ObjectRegistry.fromHashCode(bH.$$element);return bI&&!bI.__eb();}
},members:{__dA:null,__dJ:null,__dK:false,__dL:true,__dM:true,__dN:null,__dO:null,__dP:null,__dQ:null,__dR:null,__dS:null,__dT:null,__dB:null,__dC:null,__dU:null,__dV:null,__dW:null,__dX:null,__dY:null,_scheduleChildrenUpdate:function(){if(this.__dX){return;}
;this.__dX=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
,_createDomElement:function(){return qx.dom.Element.create(this.__dA);}
,__ea:function(){if(qx.core.Environment.get(N)){if(this.DEBUG){this.debug(bh+this.getAttribute(V));}
;}
;var length;var bJ=this.__dW;if(bJ){length=bJ.length;var bK;for(var i=0;i<length;i++){bK=bJ[i];if(bK.__dM&&bK.__dL&&!bK.__dJ){bK.__ea();}
;}
;}
;if(!this.__dJ){this.__dJ=this._createDomElement();this.__dJ.$$element=this.$$hash;this._copyData(false);if(bJ&&length>0){this._insertChildren();}
;}
else {this._syncData();if(this.__dX){this._syncChildren();}
;}
;delete this.__dX;}
,_insertChildren:function(){var bL=this.__dW;var length=bL.length;var bN;if(length>2){var bM=document.createDocumentFragment();for(var i=0;i<length;i++){bN=bL[i];if(bN.__dJ&&bN.__dL){bM.appendChild(bN.__dJ);}
;}
;this.__dJ.appendChild(bM);}
else {var bM=this.__dJ;for(var i=0;i<length;i++){bN=bL[i];if(bN.__dJ&&bN.__dL){bM.appendChild(bN.__dJ);}
;}
;}
;}
,_syncChildren:function(){var bX=qx.core.ObjectRegistry;var bO=this.__dW;var bV=bO.length;var bP;var bT;var bR=this.__dJ;var bU=bR.childNodes;var bQ=0;var bS;if(qx.core.Environment.get(N)){var bW=0;}
;for(var i=bU.length-1;i>=0;i--){bS=bU[i];bT=bX.fromHashCode(bS.$$element);if(!bT||!bT.__dL||bT.__dY!==this){bR.removeChild(bS);if(qx.core.Environment.get(N)){bW++;}
;}
;}
;for(var i=0;i<bV;i++){bP=bO[i];if(bP.__dL){bT=bP.__dJ;bS=bU[bQ];if(!bT){continue;}
;if(bT!=bS){if(bS){bR.insertBefore(bT,bS);}
else {bR.appendChild(bT);}
;if(qx.core.Environment.get(N)){bW++;}
;}
;bQ++;}
;}
;if(qx.core.Environment.get(N)){if(qx.html.Element.DEBUG){this.debug(be+bW+G);}
;}
;}
,_copyData:function(bY){var cd=this.__dJ;var cc=this.__dC;if(cc){var ca=qx.bom.element.Attribute;for(var ce in cc){ca.set(cd,ce,cc[ce]);}
;}
;var cc=this.__dB;if(cc){var cb=qx.bom.element.Style;if(bY){cb.setStyles(cd,cc);}
else {cb.setCss(cd,cb.compile(cc));}
;}
;var cc=this.__dU;if(cc){for(var ce in cc){this._applyProperty(ce,cc[ce]);}
;}
;var cc=this.__dV;if(cc){qx.event.Registration.getManager(cd).importListeners(cd,cc);delete this.__dV;}
;}
,_syncData:function(){var cj=this.__dJ;var ci=qx.bom.element.Attribute;var cg=qx.bom.element.Style;var ch=this.__dS;if(ch){var cm=this.__dC;if(cm){var ck;for(var cl in ch){ck=cm[cl];if(ck!==undefined){ci.set(cj,cl,ck);}
else {ci.reset(cj,cl);}
;}
;}
;this.__dS=null;}
;var ch=this.__dR;if(ch){var cm=this.__dB;if(cm){var cf={};for(var cl in ch){cf[cl]=cm[cl];}
;cg.setStyles(cj,cf);}
;this.__dR=null;}
;var ch=this.__dT;if(ch){var cm=this.__dU;if(cm){var ck;for(var cl in ch){this._applyProperty(cl,cm[cl]);}
;}
;this.__dT=null;}
;}
,__eb:function(){var cn=this;while(cn){if(cn.__dK){return true;}
;if(!cn.__dL||!cn.__dM){return false;}
;cn=cn.__dY;}
;return false;}
,__ec:function(co){if(co.__dY===this){throw new Error(m+co);}
;if(co.__dK){throw new Error(ba);}
;if(co.__dY){co.__dY.remove(co);}
;co.__dY=this;if(!this.__dW){this.__dW=[];}
;if(this.__dJ){this._scheduleChildrenUpdate();}
;}
,__ed:function(cp){if(cp.__dY!==this){throw new Error(D+cp);}
;if(this.__dJ){this._scheduleChildrenUpdate();}
;delete cp.__dY;}
,__ee:function(cq){if(cq.__dY!==this){throw new Error(D+cq);}
;if(this.__dJ){this._scheduleChildrenUpdate();}
;}
,getChildren:function(){return this.__dW||null;}
,getChild:function(cr){var cs=this.__dW;return cs&&cs[cr]||null;}
,hasChildren:function(){var ct=this.__dW;return ct&&ct[0]!==undefined;}
,indexOf:function(cu){var cv=this.__dW;return cv?cv.indexOf(cu):-1;}
,hasChild:function(cw){var cx=this.__dW;return cx&&cx.indexOf(cw)!==-1;}
,add:function(cy){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__ec(arguments[i]);}
;this.__dW.push.apply(this.__dW,arguments);}
else {this.__ec(cy);this.__dW.push(cy);}
;return this;}
,addAt:function(cz,cA){this.__ec(cz);qx.lang.Array.insertAt(this.__dW,cz,cA);return this;}
,remove:function(cB){var cC=this.__dW;if(!cC){return;}
;if(arguments[1]){var cD;for(var i=0,l=arguments.length;i<l;i++){cD=arguments[i];this.__ed(cD);qx.lang.Array.remove(cC,cD);}
;}
else {this.__ed(cB);qx.lang.Array.remove(cC,cB);}
;return this;}
,removeAt:function(cE){var cF=this.__dW;if(!cF){throw new Error(Y);}
;var cG=cF[cE];if(!cG){throw new Error(n);}
;this.__ed(cG);qx.lang.Array.removeAt(this.__dW,cE);return this;}
,removeAll:function(){var cH=this.__dW;if(cH){for(var i=0,l=cH.length;i<l;i++){this.__ed(cH[i]);}
;cH.length=0;}
;return this;}
,getParent:function(){return this.__dY||null;}
,insertInto:function(parent,cI){parent.__ec(this);if(cI==null){parent.__dW.push(this);}
else {qx.lang.Array.insertAt(this.__dW,this,cI);}
;return this;}
,insertBefore:function(cJ){var parent=cJ.__dY;parent.__ec(this);qx.lang.Array.insertBefore(parent.__dW,this,cJ);return this;}
,insertAfter:function(cK){var parent=cK.__dY;parent.__ec(this);qx.lang.Array.insertAfter(parent.__dW,this,cK);return this;}
,moveTo:function(cL){var parent=this.__dY;parent.__ee(this);var cM=parent.__dW.indexOf(this);if(cM===cL){throw new Error(u);}
else if(cM<cL){cL--;}
;qx.lang.Array.removeAt(parent.__dW,cM);qx.lang.Array.insertAt(parent.__dW,this,cL);return this;}
,moveBefore:function(cN){var parent=this.__dY;return this.moveTo(parent.__dW.indexOf(cN));}
,moveAfter:function(cO){var parent=this.__dY;return this.moveTo(parent.__dW.indexOf(cO)+1);}
,free:function(){var parent=this.__dY;if(!parent){throw new Error(A);}
;if(!parent.__dW){return;}
;parent.__ed(this);qx.lang.Array.remove(parent.__dW,this);return this;}
,getDomElement:function(){return this.__dJ||null;}
,getNodeName:function(){return this.__dA;}
,setNodeName:function(name){this.__dA=name;}
,setRoot:function(cP){this.__dK=cP;}
,useMarkup:function(cQ){if(this.__dJ){throw new Error(O);}
;if((qx.core.Environment.get(w)==v)){var cR=document.createElement(F);}
else {var cR=qx.dom.Element.getHelperElement();}
;cR.innerHTML=cQ;this.useElement(cR.firstChild);return this.__dJ;}
,useElement:function(cS){if(this.__dJ){throw new Error(O);}
;this.__dJ=cS;this.__dJ.$$element=this.$$hash;this._copyData(true);}
,isFocusable:function(){var cU=this.getAttribute(q);if(cU>=1){return true;}
;var cT=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;if(cU>=0&&cT[this.__dA]){return true;}
;return false;}
,setSelectable:function(cV){this.setAttribute(p,cV?C:X);var cW=qx.core.Environment.get(bf);if(cW){this.setStyle(cW,cV?k:qx.core.Environment.get(T));}
;}
,isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__dA];}
,include:function(){if(this.__dL){return;}
;delete this.__dL;if(this.__dY){this.__dY._scheduleChildrenUpdate();}
;return this;}
,exclude:function(){if(!this.__dL){return;}
;this.__dL=false;if(this.__dY){this.__dY._scheduleChildrenUpdate();}
;return this;}
,isIncluded:function(){return this.__dL===true;}
,show:function(){if(this.__dM){return;}
;if(this.__dJ){qx.html.Element._visibility[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;if(this.__dY){this.__dY._scheduleChildrenUpdate();}
;delete this.__dM;}
,hide:function(){if(!this.__dM){return;}
;if(this.__dJ){qx.html.Element._visibility[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;this.__dM=false;}
,isVisible:function(){return this.__dM===true;}
,scrollChildIntoViewX:function(cX,cY,da){var dc=this.__dJ;var dd=cX.getDomElement();if(da!==false&&dc&&dc.offsetWidth&&dd&&dd.offsetWidth){qx.bom.element.Scroll.intoViewX(dd,dc,cY);}
else {this.__dN={element:cX,align:cY};qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;delete this.__dP;}
,scrollChildIntoViewY:function(de,df,dg){var dh=this.__dJ;var di=de.getDomElement();if(dg!==false&&dh&&dh.offsetWidth&&di&&di.offsetWidth){qx.bom.element.Scroll.intoViewY(di,dh,df);}
else {this.__dO={element:de,align:df};qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;delete this.__dQ;}
,scrollToX:function(x,dj){var dk=this.__dJ;if(dj!==true&&dk&&dk.offsetWidth){dk.scrollLeft=x;delete this.__dP;}
else {this.__dP=x;qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;delete this.__dN;}
,getScrollX:function(){var dl=this.__dJ;if(dl){return dl.scrollLeft;}
;return this.__dP||0;}
,scrollToY:function(y,dm){var dn=this.__dJ;if(dm!==true&&dn&&dn.offsetWidth){dn.scrollTop=y;delete this.__dQ;}
else {this.__dQ=y;qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;delete this.__dO;}
,getScrollY:function(){var dp=this.__dJ;if(dp){return dp.scrollTop;}
;return this.__dQ||0;}
,disableScrolling:function(){this.enableScrolling();this.scrollToX(0);this.scrollToY(0);this.addListener(B,this.__eg,this);}
,enableScrolling:function(){this.removeListener(B,this.__eg,this);}
,__ef:null,__eg:function(e){if(!this.__ef){this.__ef=true;this.__dJ.scrollTop=0;this.__dJ.scrollLeft=0;delete this.__ef;}
;}
,getTextSelection:function(){var dq=this.__dJ;if(dq){return qx.bom.Selection.get(dq);}
;return null;}
,getTextSelectionLength:function(){var dr=this.__dJ;if(dr){return qx.bom.Selection.getLength(dr);}
;return null;}
,getTextSelectionStart:function(){var ds=this.__dJ;if(ds){return qx.bom.Selection.getStart(ds);}
;return null;}
,getTextSelectionEnd:function(){var dt=this.__dJ;if(dt){return qx.bom.Selection.getEnd(dt);}
;return null;}
,setTextSelection:function(du,dv){var dw=this.__dJ;if(dw){qx.bom.Selection.set(dw,du,dv);return;}
;qx.html.Element.__dD[this.toHashCode()]={element:this,start:du,end:dv};qx.html.Element._scheduleFlush(M);}
,clearTextSelection:function(){var dx=this.__dJ;if(dx){qx.bom.Selection.clear(dx);}
;delete qx.html.Element.__dD[this.toHashCode()];}
,__eh:function(dy,dz){var dA=qx.html.Element._actions;dA.push({type:dy,element:this,args:dz||[]});qx.html.Element._scheduleFlush(M);}
,focus:function(){this.__eh(f);}
,blur:function(){this.__eh(b);}
,activate:function(){this.__eh(z);}
,deactivate:function(){this.__eh(bg);}
,capture:function(dB){this.__eh(bc,[dB!==false]);}
,releaseCapture:function(){this.__eh(t);}
,setStyle:function(dC,dD,dE){if(!this.__dB){this.__dB={};}
;if(this.__dB[dC]==dD){return;}
;if(dD==null){delete this.__dB[dC];}
else {this.__dB[dC]=dD;}
;if(this.__dJ){if(dE){qx.bom.element.Style.set(this.__dJ,dC,dD);return this;}
;if(!this.__dR){this.__dR={};}
;this.__dR[dC]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;return this;}
,setStyles:function(dF,dG){var dH=qx.bom.element.Style;if(!this.__dB){this.__dB={};}
;if(this.__dJ){if(!this.__dR){this.__dR={};}
;for(var dJ in dF){var dI=dF[dJ];if(this.__dB[dJ]==dI){continue;}
;if(dI==null){delete this.__dB[dJ];}
else {this.__dB[dJ]=dI;}
;if(dG){dH.set(this.__dJ,dJ,dI);continue;}
;this.__dR[dJ]=true;}
;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
else {for(var dJ in dF){var dI=dF[dJ];if(this.__dB[dJ]==dI){continue;}
;if(dI==null){delete this.__dB[dJ];}
else {this.__dB[dJ]=dI;}
;}
;}
;return this;}
,removeStyle:function(dK,dL){this.setStyle(dK,null,dL);}
,getStyle:function(dM){return this.__dB?this.__dB[dM]:null;}
,getAllStyles:function(){return this.__dB||null;}
,setAttribute:function(dN,dO,dP){if(!this.__dC){this.__dC={};}
;if(this.__dC[dN]==dO){return;}
;if(dO==null){delete this.__dC[dN];}
else {this.__dC[dN]=dO;}
;if(this.__dJ){if(dP){qx.bom.element.Attribute.set(this.__dJ,dN,dO);return this;}
;if(!this.__dS){this.__dS={};}
;this.__dS[dN]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;return this;}
,setAttributes:function(dQ,dR){for(var dS in dQ){this.setAttribute(dS,dQ[dS],dR);}
;return this;}
,removeAttribute:function(dT,dU){this.setAttribute(dT,null,dU);}
,getAttribute:function(dV){return this.__dC?this.__dC[dV]:null;}
,_applyProperty:function(name,dW){}
,_setProperty:function(dX,dY,ea){if(!this.__dU){this.__dU={};}
;if(this.__dU[dX]==dY){return;}
;if(dY==null){delete this.__dU[dX];}
else {this.__dU[dX]=dY;}
;if(this.__dJ){if(ea){this._applyProperty(dX,dY);return this;}
;if(!this.__dT){this.__dT={};}
;this.__dT[dX]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(M);}
;return this;}
,_removeProperty:function(eb,ec){this._setProperty(eb,null,ec);}
,_getProperty:function(ed){var ee=this.__dU;if(!ee){return null;}
;var ef=ee[ed];return ef==null?null:ef;}
,addListener:function(eg,eh,self,ei){if(this.$$disposed){return null;}
;if(qx.core.Environment.get(N)){var ej=d+eg+H+I+this+U;this.assertString(eg,ej+S);this.assertFunction(eh,ej+J);if(self!==undefined){this.assertObject(self,L);}
;if(ei!==undefined){this.assertBoolean(ei,E);}
;}
;if(this.__dJ){return qx.event.Registration.addListener(this.__dJ,eg,eh,self,ei);}
;if(!this.__dV){this.__dV={};}
;if(ei==null){ei=false;}
;var ek=qx.event.Manager.getNextUniqueId();var em=eg+(ei?g:j)+ek;this.__dV[em]={type:eg,listener:eh,self:self,capture:ei,unique:ek};return em;}
,removeListener:function(en,eo,self,ep){if(this.$$disposed){return null;}
;if(qx.core.Environment.get(N)){var eq=s+en+H+bd+this+U;this.assertString(en,eq+S);this.assertFunction(eo,eq+J);if(self!==undefined){this.assertObject(self,L);}
;if(ep!==undefined){this.assertBoolean(ep,E);}
;}
;if(this.__dJ){qx.event.Registration.removeListener(this.__dJ,en,eo,self,ep);}
else {var es=this.__dV;var er;if(ep==null){ep=false;}
;for(var et in es){er=es[et];if(er.listener===eo&&er.self===self&&er.capture===ep&&er.type===en){delete es[et];break;}
;}
;}
;return this;}
,removeListenerById:function(eu){if(this.$$disposed){return null;}
;if(this.__dJ){qx.event.Registration.removeListenerById(this.__dJ,eu);}
else {delete this.__dV[eu];}
;return this;}
,hasListener:function(ev,ew){if(this.$$disposed){return false;}
;if(this.__dJ){return qx.event.Registration.hasListener(this.__dJ,ev,ew);}
;var ey=this.__dV;var ex;if(ew==null){ew=false;}
;for(var ez in ey){ex=ey[ez];if(ex.capture===ew&&ex.type===ev){return true;}
;}
;return false;}
},defer:function(eA){eA.__ei=new qx.util.DeferredCall(eA.flush,eA);}
,destruct:function(){var eB=this.__dJ;if(eB){qx.event.Registration.getManager(eB).removeAllListeners(eB);eB.$$element=Q;}
;if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dY;if(parent&&!parent.$$disposed){parent.remove(this);}
;}
;this._disposeArray(a);this.__dC=this.__dB=this.__dV=this.__dU=this.__dS=this.__dR=this.__dT=this.__dJ=this.__dY=this.__dN=this.__dO=null;}
});}
)();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);this.__dz=d;this.__ej={};qx.event.handler.Appear.__ek[this.$$hash]=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__ek:{},refresh:function(){var e=this.__ek;for(var f in e){e[f].refresh();}
;}
},members:{__dz:null,__ej:null,canHandleEvent:function(g,h){}
,registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;var m=this.__ej;if(m&&!m[l]){m[l]=i;i.$$displayed=i.offsetWidth>0;}
;}
,unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;var r=this.__ej;if(!r){return;}
;if(r[q]){delete r[q];}
;}
,refresh:function(){var v=this.__ej;var w;for(var u in v){w=v[u];var s=w.offsetWidth>0;if((!!w.$$displayed)!==s){w.$$displayed=s;var t=qx.event.Registration.createEvent(s?a:b);this.__dz.dispatchEvent(w,t);}
;}
;}
},destruct:function(){this.__dz=this.__ej=null;delete qx.event.handler.Appear.__ek[this.$$hash];}
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
(function(){var a="qx.event.handler.UserAction";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);this.__dz=b;this.__ce=b.getWindow();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dz:null,__ce:null,canHandleEvent:function(c,d){}
,registerEvent:function(e,f,g){}
,unregisterEvent:function(h,i,j){}
},destruct:function(){this.__dz=this.__ce=null;}
,defer:function(k){qx.event.Registration.addHandler(k);}
});}
)();
(function(){var t="engine.version",s="useraction",r="webkit",q="gecko",p="DOMMouseScroll",o="qx.event.handler.Mouse",n="os.name",m="mouseover",l="mouseout",k="ios",d="mousemove",j="on",g="dblclick",c="mousedown",b="contextmenu",f="mousewheel",e="click",h="mouseup",a="engine.name";qx.Class.define(o,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);this.__dz=u;this.__ce=u.getWindow();this.__dK=this.__ce.document;this._initButtonObserver();this._initMoveObserver();this._initWheelObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__el:null,__em:null,__en:null,__eo:null,__ep:null,__dz:null,__ce:null,__dK:null,canHandleEvent:function(v,w){}
,registerEvent:qx.core.Environment.get(n)===k?function(x,y,z){x[j+y]=qx.lang.Function.returnNull;}
:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(n)===k?function(A,B,C){A[j+B]=undefined;}
:qx.lang.Function.returnNull,__eq:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);}
;if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==f?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);}
;qx.event.Registration.fireEvent(this.__ce,s,qx.event.type.Data,[E||D.type]);}
,__er:function(){var H=[this.__ce,this.__dK,this.__dK.body];var I=this.__ce;var G=p;for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],f)){G=f;I=H[i];break;}
;}
;return {type:G,target:I};}
,_initButtonObserver:function(){this.__el=qx.lang.Function.listener(this._onButtonEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dK,c,this.__el);Event.addNativeListener(this.__dK,h,this.__el);Event.addNativeListener(this.__dK,e,this.__el);Event.addNativeListener(this.__dK,g,this.__el);Event.addNativeListener(this.__dK,b,this.__el);}
,_initMoveObserver:function(){this.__em=qx.lang.Function.listener(this._onMoveEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dK,d,this.__em);Event.addNativeListener(this.__dK,m,this.__em);Event.addNativeListener(this.__dK,l,this.__em);}
,_initWheelObserver:function(){this.__en=qx.lang.Function.listener(this._onWheelEvent,this);var J=this.__er();qx.bom.Event.addNativeListener(J.target,J.type,this.__en);}
,_stopButtonObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__dK,c,this.__el);Event.removeNativeListener(this.__dK,h,this.__el);Event.removeNativeListener(this.__dK,e,this.__el);Event.removeNativeListener(this.__dK,g,this.__el);Event.removeNativeListener(this.__dK,b,this.__el);}
,_stopMoveObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__dK,d,this.__em);Event.removeNativeListener(this.__dK,m,this.__em);Event.removeNativeListener(this.__dK,l,this.__em);}
,_stopWheelObserver:function(){var K=this.__er();qx.bom.Event.removeNativeListener(K.target,K.type,this.__en);}
,_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__eq(L);}
),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;var O=qx.bom.Event.getTarget(M);if(qx.core.Environment.get(a)==q||qx.core.Environment.get(a)==r){if(O&&O.nodeType==3){O=O.parentNode;}
;}
;if(this.__es){this.__es(M,N,O);}
;if(this.__eu){this.__eu(M,N,O);}
;this.__eq(M,N,O);if(this.__et){this.__et(M,N,O);}
;if(this.__ev){this.__ev(M,N,O);}
;this.__eo=N;}
),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__eq(P,f);}
),__es:qx.core.Environment.select(a,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(t))<530){if(R==b){this.__eq(Q,h,S);}
;}
;}
,"default":null}),__et:qx.core.Environment.select(a,{"opera":function(T,U,V){if(U==h&&T.button==2){this.__eq(T,b,V);}
;}
,"default":null}),__eu:qx.core.Environment.select(a,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;}
;if(X==h&&this.__eo==e){this.__eq(W,c,Y);}
else if(X==g){this.__eq(W,e,Y);}
;}
,"default":null}),__ev:qx.core.Environment.select(a,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case c:this.__ep=bc;break;case h:if(bc!==this.__ep){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__ep);this.__eq(ba,e,bd);}
;};}
})},destruct:function(){this._stopButtonObserver();this._stopMoveObserver();this._stopWheelObserver();this.__dz=this.__ce=this.__dK=this.__ep=null;}
,defer:function(be){qx.event.Registration.addHandler(be);}
});}
)();
(function(){var j="click",i="contextmenu",h="qx.event.type.Mouse",g="browser.documentmode",f="browser.name",e="ie",d="none",c="middle",b="left",a="right";qx.Class.define(h,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(k,l){var l=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,k,l);l.button=k.button;l.clientX=k.clientX;l.clientY=k.clientY;l.pageX=k.pageX;l.pageY=k.pageY;l.screenX=k.screenX;l.screenY=k.screenY;l.wheelDelta=k.wheelDelta;l.wheelDeltaX=k.wheelDeltaX;l.wheelDeltaY=k.wheelDeltaY;l.detail=k.detail;l.axis=k.axis;l.wheelX=k.wheelX;l.wheelY=k.wheelY;l.HORIZONTAL_AXIS=k.HORIZONTAL_AXIS;l.srcElement=k.srcElement;l.target=k.target;return l;}
,__ew:{'0':b,'2':a,'1':c},__ex:{'1':b,'2':a,'4':c},stop:function(){this.stopPropagation();}
,getButton:function(){switch(this._type){case i:return a;case j:if(qx.core.Environment.get(f)===e&&qx.core.Environment.get(g)<9){return b;}
;default:if(this._native.target!==undefined){return this.__ew[this._native.button]||d;}
else {return this.__ex[this._native.button]||d;}
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
(function(){var l="engine.name",k="x",j="osx",i="win",h="qx.dynamicmousewheel",g="chrome",f="qx.event.type.MouseWheel",d="browser.name",c="y",b="os.name",a="engine.version";qx.Class.define(f,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();this.preventDefault();}
,__ey:function(m){var n=Math.abs(m);if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>n){qx.event.type.MouseWheel.MINSCROLL=n;this.__ez();}
;if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<n){qx.event.type.MouseWheel.MAXSCROLL=n;this.__ez();}
;if(qx.event.type.MouseWheel.MAXSCROLL===n&&qx.event.type.MouseWheel.MINSCROLL===n){return 2*(m/n);}
;var o=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;var p=(m/o)*Math.log(o)*qx.event.type.MouseWheel.FACTOR;return p<0?Math.min(p,-1):Math.max(p,1);}
,__ez:function(){var q=qx.event.type.MouseWheel.MAXSCROLL||0;var t=qx.event.type.MouseWheel.MINSCROLL||q;if(q<=t){return;}
;var r=q-t;var s=(q/r)*Math.log(r);if(s==0){s=1;}
;qx.event.type.MouseWheel.FACTOR=6/s;}
,getWheelDelta:function(u){var e=this._native;if(u===undefined){if(v===undefined){var v=-e.wheelDelta;if(e.wheelDelta===undefined){v=e.detail;}
;}
;return this.__eA(v);}
;if(u===k){var x=0;if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__eA(-e.wheelDeltaX):0;}
;}
else {if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__eA(e.detail);}
;}
;return x;}
;if(u===c){var y=0;if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__eA(-e.wheelDeltaY):0;}
else {y=this.__eA(-e.wheelDelta);}
;}
else {if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__eA(e.detail);}
;}
;return y;}
;return 0;}
,__eA:function(w){if(qx.core.Environment.get(h)){return this.__ey(w);}
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
(function(){var j="text",i="os.name",h="F11",g="PrintScreen",f="PageUp",e="gecko",d="F1",c="Left",b="F5",a="Down",V="Up",U="F3",T="Use qx.event.util.Keyboard.isValidKeyIdentifier instead.",S="Use qx.event.util.Keyboard.keyCodeToIdentifier instead.",R="F6",Q="Insert",P="F8",O="input",N="End",M="Delete",q="qx.event.handler.Keyboard",r="win",o="Use qx.event.util.Keyboard.isNonPrintableKeyCode instead.",p="Home",m="F2",n="Use qx.event.util.Keyboard.charCodeToIdentifier instead.",k="Use qx.event.util.Keyboard.isPrintableKeyIdentifier instead.",l="Right",s="F12",t="F4",A="PageDown",y="F7",E="Use qx.event.util.Keyboard.isIdentifiableKeyCode instead.",C="F9",I="F10",G="off",v="autoComplete",L="Enter",K="NumLock",J="useraction",u="keyinput",w="mshtml",x="webkit",z="engine.version",B="keyup",D="keypress",F="engine.name",H="keydown";qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(W){qx.core.Object.call(this);this.__dz=W;this.__ce=W.getWindow();if((qx.core.Environment.get(F)==e)){this.__dK=this.__ce;}
else {this.__dK=this.__ce.document.documentElement;}
;this.__eB={};this._initKeyObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(X){qx.log.Logger.deprecatedMethodWarning(arguments.callee,T);return qx.event.util.Keyboard.isValidKeyIdentifier(X);}
,isPrintableKeyIdentifier:function(Y){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);return qx.event.util.Keyboard.isPrintableKeyIdentifier(Y);}
},members:{__eC:null,__dz:null,__ce:null,__dK:null,__eB:null,__eD:null,__eE:null,__eF:null,canHandleEvent:function(ba,bb){}
,registerEvent:function(bc,bd,be){}
,unregisterEvent:function(bf,bg,bh){}
,_fireInputEvent:function(bi,bj){var bk=this.__eG();if(bk&&bk.offsetWidth!=0){var event=qx.event.Registration.createEvent(u,qx.event.type.KeyInput,[bi,bk,bj]);this.__dz.dispatchEvent(bk,event);}
;if(this.__ce){qx.event.Registration.fireEvent(this.__ce,J,qx.event.type.Data,[u]);}
;}
,_fireSequenceEvent:function(bl,bm,bn){var bo=this.__eG();var bp=bl.keyCode;var event=qx.event.Registration.createEvent(bm,qx.event.type.KeySequence,[bl,bo,bn]);this.__dz.dispatchEvent(bo,event);if(qx.core.Environment.get(F)==w||qx.core.Environment.get(F)==x){if(bm==H&&event.getDefaultPrevented()){if(!qx.event.util.Keyboard.isNonPrintableKeyCode(bp)&&!this._emulateKeyPress[bp]){this._fireSequenceEvent(bl,D,bn);}
;}
;}
;if(this.__ce){qx.event.Registration.fireEvent(this.__ce,J,qx.event.type.Data,[bm]);}
;}
,__eG:function(){var bq=this.__dz.getHandler(qx.event.handler.Focus);var br=bq.getActive();if(!br||br.offsetWidth==0){br=bq.getFocus();}
;if(!br||br.offsetWidth==0){br=this.__dz.getWindow().document.body;}
;return br;}
,_initKeyObserver:function(){this.__eC=qx.lang.Function.listener(this.__eH,this);this.__eF=qx.lang.Function.listener(this.__eJ,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dK,B,this.__eC);Event.addNativeListener(this.__dK,H,this.__eC);Event.addNativeListener(this.__dK,D,this.__eF);}
,_stopKeyObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__dK,B,this.__eC);Event.removeNativeListener(this.__dK,H,this.__eC);Event.removeNativeListener(this.__dK,D,this.__eF);for(var bt in (this.__eE||{})){var bs=this.__eE[bt];Event.removeNativeListener(bs.target,D,bs.callback);}
;delete (this.__eE);}
,__eH:qx.event.GlobalError.observeMethod(qx.core.Environment.select(F,{"mshtml":function(bu){bu=window.event||bu;var bx=bu.keyCode;var bv=0;var bw=bu.type;if(!(this.__eB[bx]==H&&bw==H)){this._idealKeyHandler(bx,bv,bw,bu);}
;if(bw==H){if(qx.event.util.Keyboard.isNonPrintableKeyCode(bx)||this._emulateKeyPress[bx]){this._idealKeyHandler(bx,bv,D,bu);}
;}
;this.__eB[bx]=bw;}
,"gecko":function(by){var bA=0;var bC=by.keyCode;var bB=by.type;var bz=qx.event.util.Keyboard;if(qx.core.Environment.get(i)==r){var bD=bC?bz.keyCodeToIdentifier(bC):bz.charCodeToIdentifier(bA);if(!(this.__eB[bD]==H&&bB==H)){this._idealKeyHandler(bC,bA,bB,by);}
;this.__eB[bD]=bB;}
else {this._idealKeyHandler(bC,bA,bB,by);}
;this.__eI(by.target,bB,bC);}
,"webkit":function(bE){var bH=0;var bF=0;var bG=bE.type;if(parseFloat(qx.core.Environment.get(z))<525.13){if(bG==B||bG==H){bH=this._charCode2KeyCode[bE.charCode]||bE.keyCode;}
else {if(this._charCode2KeyCode[bE.charCode]){bH=this._charCode2KeyCode[bE.charCode];}
else {bF=bE.charCode;}
;}
;this._idealKeyHandler(bH,bF,bG,bE);}
else {bH=bE.keyCode;this._idealKeyHandler(bH,bF,bG,bE);if(bG==H){if(qx.event.util.Keyboard.isNonPrintableKeyCode(bH)||this._emulateKeyPress[bH]){this._idealKeyHandler(bH,bF,D,bE);}
;}
;this.__eB[bH]=bG;}
;}
,"opera":function(bI){this.__eD=bI.keyCode;this._idealKeyHandler(bI.keyCode,0,bI.type,bI);}
})),__eI:qx.core.Environment.select(F,{"gecko":function(bJ,bK,bL){if(bK===H&&(bL==33||bL==34||bL==38||bL==40)&&bJ.type==j&&bJ.tagName.toLowerCase()===O&&bJ.getAttribute(v)!==G){if(!this.__eE){this.__eE={};}
;var bN=qx.core.ObjectRegistry.toHashCode(bJ);if(this.__eE[bN]){return;}
;var self=this;this.__eE[bN]={target:bJ,callback:function(bO){qx.bom.Event.stopPropagation(bO);self.__eJ(bO);}
};var bM=qx.event.GlobalError.observeMethod(this.__eE[bN].callback);qx.bom.Event.addNativeListener(bJ,D,bM);}
;}
,"default":null}),__eJ:qx.event.GlobalError.observeMethod(qx.core.Environment.select(F,{"mshtml":function(bP){bP=window.event||bP;if(this._charCode2KeyCode[bP.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bP.keyCode],0,bP.type,bP);}
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
,"opera":function(bX){var ca=bX.keyCode;var bY=bX.type;if(ca!=this.__eD){this._idealKeyHandler(0,this.__eD,bY,bX);}
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
},destruct:function(){this._stopKeyObserver();this.__eD=this.__dz=this.__ce=this.__dK=this.__eB=null;}
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
,properties:{active:{apply:f,nullable:true},focus:{apply:i,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__eK:null,__eL:null,__eM:null,__eN:null,__eO:null,__eP:null,__eQ:null,__eR:null,__eS:null,__eT:null,canHandleEvent:function(B,C){}
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
,tryActivate:function(S){var T=this.__fi(S);if(T){this.setActive(T);}
;}
,__eq:function(U,V,W,X){var ba=qx.event.Registration;var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);ba.dispatchEvent(U,Y);}
,_windowFocused:true,__eU:function(){if(this._windowFocused){this._windowFocused=false;this.__eq(this._window,null,p,false);}
;}
,__eV:function(){if(!this._windowFocused){this._windowFocused=true;this.__eq(this._window,null,m,false);}
;}
,_initObserver:qx.core.Environment.select(l,{"gecko":function(){this.__eK=qx.lang.Function.listener(this.__fc,this);this.__eL=qx.lang.Function.listener(this.__fd,this);this.__eM=qx.lang.Function.listener(this.__fb,this);this.__eN=qx.lang.Function.listener(this.__fa,this);this.__eO=qx.lang.Function.listener(this.__eW,this);qx.bom.Event.addNativeListener(this._document,n,this.__eK,true);qx.bom.Event.addNativeListener(this._document,k,this.__eL,true);qx.bom.Event.addNativeListener(this._window,m,this.__eM,true);qx.bom.Event.addNativeListener(this._window,p,this.__eN,true);qx.bom.Event.addNativeListener(this._window,u,this.__eO,true);}
,"mshtml":function(){this.__eK=qx.lang.Function.listener(this.__fc,this);this.__eL=qx.lang.Function.listener(this.__fd,this);this.__eQ=qx.lang.Function.listener(this.__eX,this);this.__eR=qx.lang.Function.listener(this.__eY,this);this.__eP=qx.lang.Function.listener(this.__ff,this);qx.bom.Event.addNativeListener(this._document,n,this.__eK);qx.bom.Event.addNativeListener(this._document,k,this.__eL);qx.bom.Event.addNativeListener(this._document,t,this.__eQ);qx.bom.Event.addNativeListener(this._document,s,this.__eR);qx.bom.Event.addNativeListener(this._document,r,this.__eP);}
,"webkit":function(){this.__eK=qx.lang.Function.listener(this.__fc,this);this.__eL=qx.lang.Function.listener(this.__fd,this);this.__eR=qx.lang.Function.listener(this.__eY,this);this.__eM=qx.lang.Function.listener(this.__fb,this);this.__eN=qx.lang.Function.listener(this.__fa,this);this.__eP=qx.lang.Function.listener(this.__ff,this);qx.bom.Event.addNativeListener(this._document,n,this.__eK,true);qx.bom.Event.addNativeListener(this._document,k,this.__eL,true);qx.bom.Event.addNativeListener(this._document,r,this.__eP,false);qx.bom.Event.addNativeListener(this._window,q,this.__eR,true);qx.bom.Event.addNativeListener(this._window,m,this.__eM,true);qx.bom.Event.addNativeListener(this._window,p,this.__eN,true);}
,"opera":function(){this.__eK=qx.lang.Function.listener(this.__fc,this);this.__eL=qx.lang.Function.listener(this.__fd,this);this.__eQ=qx.lang.Function.listener(this.__eX,this);this.__eR=qx.lang.Function.listener(this.__eY,this);qx.bom.Event.addNativeListener(this._document,n,this.__eK,true);qx.bom.Event.addNativeListener(this._document,k,this.__eL,true);qx.bom.Event.addNativeListener(this._window,v,this.__eQ,true);qx.bom.Event.addNativeListener(this._window,q,this.__eR,true);}
}),_stopObserver:qx.core.Environment.select(l,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,n,this.__eK,true);qx.bom.Event.removeNativeListener(this._document,k,this.__eL,true);qx.bom.Event.removeNativeListener(this._window,m,this.__eM,true);qx.bom.Event.removeNativeListener(this._window,p,this.__eN,true);qx.bom.Event.removeNativeListener(this._window,u,this.__eO,true);}
,"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,n,this.__eK);qx.bom.Event.removeNativeListener(this._document,k,this.__eL);qx.bom.Event.removeNativeListener(this._document,t,this.__eQ);qx.bom.Event.removeNativeListener(this._document,s,this.__eR);qx.bom.Event.removeNativeListener(this._document,r,this.__eP);}
,"webkit":function(){qx.bom.Event.removeNativeListener(this._document,n,this.__eK,true);qx.bom.Event.removeNativeListener(this._document,k,this.__eL,true);qx.bom.Event.removeNativeListener(this._document,r,this.__eP,false);qx.bom.Event.removeNativeListener(this._window,q,this.__eR,true);qx.bom.Event.removeNativeListener(this._window,m,this.__eM,true);qx.bom.Event.removeNativeListener(this._window,p,this.__eN,true);}
,"opera":function(){qx.bom.Event.removeNativeListener(this._document,n,this.__eK,true);qx.bom.Event.removeNativeListener(this._document,k,this.__eL,true);qx.bom.Event.removeNativeListener(this._window,v,this.__eQ,true);qx.bom.Event.removeNativeListener(this._window,q,this.__eR,true);}
}),__eW:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);if(!this.__fj(bc)){qx.bom.Event.preventDefault(bb);}
;}
,"default":null})),__eX:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bd){this.__eV();var bf=qx.bom.Event.getTarget(bd);var be=this.__fh(bf);if(be){this.setFocus(be);}
;this.tryActivate(bf);}
,"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);if(bh==this._document||bh==this._window){this.__eV();if(this.__eS){this.setFocus(this.__eS);delete this.__eS;}
;if(this.__eT){this.setActive(this.__eT);delete this.__eT;}
;}
else {this.setFocus(bh);this.tryActivate(bh);if(!this.__fj(bh)){bh.selectionStart=0;bh.selectionEnd=0;}
;}
;}
,"default":null})),__eY:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);if(bj==null){this.__eU();this.resetFocus();this.resetActive();}
;}
,"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);if(bl===this.getFocus()){this.resetFocus();}
;if(bl===this.getActive()){this.resetActive();}
;}
,"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);if(bn==this._document){this.__eU();this.__eS=this.getFocus();this.__eT=this.getActive();this.resetFocus();this.resetActive();}
else {if(bn===this.getFocus()){this.resetFocus();}
;if(bn===this.getActive()){this.resetActive();}
;}
;}
,"default":null})),__fa:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);if(bp===this._window||bp===this._document){this.__eU();this.resetActive();this.resetFocus();}
;}
,"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);if(br===this._window||br===this._document){this.__eU();this.__eS=this.getFocus();this.__eT=this.getActive();this.resetActive();this.resetFocus();}
;}
,"default":null})),__fb:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);if(bt===this._window||bt===this._document){this.__eV();bt=this._body;}
;this.setFocus(bt);this.tryActivate(bt);}
,"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);if(bv===this._window||bv===this._document){this.__eV();if(this.__eS){this.setFocus(this.__eS);delete this.__eS;}
;if(this.__eT){this.setActive(this.__eT);delete this.__eT;}
;}
else {this.setFocus(bv);this.tryActivate(bv);}
;}
,"default":null})),__fc:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bw){var by=qx.bom.Event.getTarget(bw);var bx=this.__fh(by);if(bx){if(!this.__fj(by)){by.unselectable=o;try{document.selection.empty();}
catch(bz){}
;try{bx.focus();}
catch(bA){}
;}
;}
else {qx.bom.Event.preventDefault(bw);if(!this.__fj(by)){by.unselectable=o;}
;}
;}
,"webkit|gecko":function(bB){var bD=qx.bom.Event.getTarget(bB);var bC=this.__fh(bD);if(bC){this.setFocus(bC);}
else {qx.bom.Event.preventDefault(bB);}
;}
,"opera":function(bE){var bH=qx.bom.Event.getTarget(bE);var bF=this.__fh(bH);if(!this.__fj(bH)){qx.bom.Event.preventDefault(bE);if(bF){var bG=this.getFocus();if(bG&&bG.selectionEnd){bG.selectionStart=0;bG.selectionEnd=0;bG.blur();}
;if(bF){this.setFocus(bF);}
;}
;}
else if(bF){this.setFocus(bF);}
;}
,"default":null})),__fd:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bI){var bJ=qx.bom.Event.getTarget(bI);if(bJ.unselectable){bJ.unselectable=a;}
;this.tryActivate(this.__fe(bJ));}
,"gecko":function(bK){var bL=qx.bom.Event.getTarget(bK);while(bL&&bL.offsetWidth===undefined){bL=bL.parentNode;}
;if(bL){this.tryActivate(bL);}
;}
,"webkit|opera":function(bM){var bN=qx.bom.Event.getTarget(bM);this.tryActivate(this.__fe(bN));}
,"default":null})),__fe:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml|webkit":function(bO){var bP=this.getFocus();if(bP&&bO!=bP&&(bP.nodeName.toLowerCase()===d||bP.nodeName.toLowerCase()===g)){bO=bP;}
;return bO;}
,"default":function(bQ){return bQ;}
})),__ff:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml|webkit":function(bR){var bS=qx.bom.Event.getTarget(bR);if(!this.__fj(bS)){qx.bom.Event.preventDefault(bR);}
;}
,"default":null})),__fg:function(bT){var bU=qx.bom.element.Attribute.get(bT,b);if(bU>=1){return true;}
;var bV=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;if(bU>=0&&bV[bT.tagName]){return true;}
;return false;}
,__fh:function(bW){while(bW&&bW.nodeType===1){if(bW.getAttribute(x)==o){return null;}
;if(this.__fg(bW)){return bW;}
;bW=bW.parentNode;}
;return this._body;}
,__fi:function(bX){var bY=bX;while(bX&&bX.nodeType===1){if(bX.getAttribute(w)==o){return null;}
;bX=bX.parentNode;}
;return bY;}
,__fj:function(ca){while(ca&&ca.nodeType===1){var cb=ca.getAttribute(c);if(cb!=null){return cb===o;}
;ca=ca.parentNode;}
;return true;}
,_applyActive:function(cc,cd){if(cd){this.__eq(cd,cc,h,true);}
;if(cc){this.__eq(cc,cd,z,true);}
;}
,_applyFocus:function(ce,cf){if(cf){this.__eq(cf,ce,s,true);}
;if(ce){this.__eq(ce,cf,t,true);}
;if(cf){this.__eq(cf,ce,p,false);}
;if(ce){this.__eq(ce,cf,m,false);}
;}
},destruct:function(){this._stopObserver();this._manager=this._window=this._document=this._root=this._body=this.__fk=null;}
,defer:function(cg){qx.event.Registration.addHandler(cg);var ch=cg.FOCUSABLE_ELEMENTS;for(var ci in ch){ch[ci.toUpperCase()]=1;}
;}
});}
)();
(function(){var k="qx.bom.Selection",j="button",i="#text",h="body",g='character',f="input",e="StartToStart",d="textarea",c="EndToEnd",b="character",a="engine.name";qx.Class.define(k,{statics:{getSelectionObject:qx.core.Environment.select(a,{"mshtml":function(l){return l.selection;}
,"default":function(m){return qx.dom.Node.getWindow(m).getSelection();}
}),get:qx.core.Environment.select(a,{"mshtml":function(n){var o=qx.bom.Range.get(qx.dom.Node.getDocument(n));return o.text;}
,"default":function(p){if(this.__fl(p)){return p.value.substring(p.selectionStart,p.selectionEnd);}
else {return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();}
;}
}),getLength:qx.core.Environment.select(a,{"mshtml":function(q){var s=this.get(q);var r=qx.util.StringSplit.split(s,/\r\n/);return s.length-(r.length-1);}
,"opera":function(t){var y,w,u;if(this.__fl(t)){var x=t.selectionStart;var v=t.selectionEnd;y=t.value.substring(x,v);w=v-x;}
else {y=qx.bom.Selection.get(t);w=y.length;}
;u=qx.util.StringSplit.split(y,/\r\n/);return w-(u.length-1);}
,"default":function(z){if(this.__fl(z)){return z.selectionEnd-z.selectionStart;}
else {return this.get(z).length;}
;}
}),getStart:qx.core.Environment.select(a,{"mshtml":function(A){if(this.__fl(A)){var F=qx.bom.Range.get();if(!A.contains(F.parentElement())){return -1;}
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
,"gecko|webkit":function(K){if(this.__fl(K)){return K.selectionStart;}
else {var M=qx.dom.Node.getDocument(K);var L=this.getSelectionObject(M);if(L.anchorOffset<L.focusOffset){return L.anchorOffset;}
else {return L.focusOffset;}
;}
;}
,"default":function(N){if(this.__fl(N)){return N.selectionStart;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;}
;}
}),getEnd:qx.core.Environment.select(a,{"mshtml":function(O){if(this.__fl(O)){var T=qx.bom.Range.get();if(!O.contains(T.parentElement())){return -1;}
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
,"gecko|webkit":function(Y){if(this.__fl(Y)){return Y.selectionEnd;}
else {var bb=qx.dom.Node.getDocument(Y);var ba=this.getSelectionObject(bb);if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;}
else {return ba.anchorOffset;}
;}
;}
,"default":function(bc){if(this.__fl(bc)){return bc.selectionEnd;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;}
;}
}),__fl:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==f||bd.nodeName.toLowerCase()==d);}
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
(function(){var c="touchcancel",b="qx.event.type.Touch",a="touchend";qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);e.pageX=d.pageX;e.pageY=d.pageY;e.offsetX=d.offsetX;e.offsetY=d.offsetY;e.layerX=(d.offsetX||d.layerX);e.layerY=(d.offsetY||d.layerY);e.scale=d.scale;e.rotation=d.rotation;e.srcElement=d.srcElement;e.targetTouches=[];for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];}
;e.changedTouches=[];for(i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];}
;e.touches=[];for(i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];}
;return e;}
,stop:function(){this.stopPropagation();}
,getAllTouches:function(){return this._native.touches;}
,getTargetTouches:function(){return this._native.targetTouches;}
,getChangedTargetTouches:function(){return this._native.changedTouches;}
,isMultiTouch:function(){return this.__fn().length>1;}
,getScale:function(){return this._native.scale;}
,getRotation:function(){return this._native.rotation;}
,getDocumentLeft:function(f){return this.__fm(f).pageX;}
,getDocumentTop:function(g){return this.__fm(g).pageY;}
,getScreenLeft:function(h){return this.__fm(h).screenX;}
,getScreenTop:function(j){return this.__fm(j).screenY;}
,getViewportLeft:function(k){return this.__fm(k).clientX;}
,getViewportTop:function(l){return this.__fm(l).clientY;}
,getIdentifier:function(m){return this.__fm(m).identifier;}
,__fm:function(n){n=n==null?0:n;return this.__fn()[n];}
,__fn:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());return o;}
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
(function(){var e="resize",d="landscape",c="portrait",b="qx.event.handler.Orientation",a="orientationchange";qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);this.__dz=f;this.__ce=f.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dz:null,__ce:null,__fo:null,_currentOrientation:null,__fp:null,canHandleEvent:function(g,h){}
,registerEvent:function(i,j,k){}
,unregisterEvent:function(l,m,n){}
,_initObserver:function(){this.__fp=qx.lang.Function.listener(this._onNative,this);this.__fo=qx.bom.Event.supportsEvent(this.__ce,a)?a:e;var Event=qx.bom.Event;Event.addNativeListener(this.__ce,this.__fo,this.__fp);}
,_stopObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__ce,this.__fo,this.__fp);}
,_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;var p=q.getOrientation(o.target);if(this._currentOrientation!=p){this._currentOrientation=p;var r=q.isLandscape(o.target)?d:c;qx.event.Registration.fireEvent(this.__ce,a,qx.event.type.Orientation,[p,r]);}
;}
)},destruct:function(){this._stopObserver();this.__dz=this.__ce=null;}
,defer:function(s){qx.event.Registration.addHandler(s);}
});}
)();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";qx.Class.define(b,{extend:qx.event.type.Event,members:{__fq:null,__fr:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);this.__fq=d;this.__fr=e;return this;}
,clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);g.__fq=this.__fq;g.__fr=this.__fr;return g;}
,getOrientation:function(){return this.__fq;}
,isLandscape:function(){return this.__fr==c;}
,isPortrait:function(){return this.__fr==a;}
}});}
)();
(function(){var k="engine.name",j="swipe",i="webkit",h="tap",g="x",f="y",e="qx.event.handler.TouchCore",d="touchcancel",c="touchmove",b="touchend",a="touchstart";qx.Bootstrap.define(e,{extend:Object,statics:{TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},construct:function(l,m){this.__fs=l;this.__ft=m;this._initTouchObserver();}
,members:{__fs:null,__ft:null,__fu:null,__fv:null,__fw:null,__fx:null,__fy:null,__fz:null,_initTouchObserver:function(){this.__fu=qx.lang.Function.listener(this._onTouchEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__fs,a,this.__fu);Event.addNativeListener(this.__fs,c,this.__fu);Event.addNativeListener(this.__fs,b,this.__fu);Event.addNativeListener(this.__fs,d,this.__fu);}
,_stopTouchObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__fs,a,this.__fu);Event.removeNativeListener(this.__fs,c,this.__fu);Event.removeNativeListener(this.__fs,b,this.__fu);Event.removeNativeListener(this.__fs,d,this.__fu);}
,_onTouchEvent:function(n){this._commonTouchEventHandler(n);}
,_commonTouchEventHandler:function(o,p){var p=p||o.type;if(p==a){this.__fv=this._getTarget(o);}
;this._fireEvent(o,p);this.__fA(o,p);}
,_getTarget:function(q){var r=qx.bom.Event.getTarget(q);if((qx.core.Environment.get(k)==i)){if(r&&r.nodeType==3){r=r.parentNode;}
;}
;return r;}
,_fireEvent:function(s,t,u){if(!u){u=this._getTarget(s);}
;var t=t||s.type;if(u&&u.nodeType&&this.__ft){this.__ft.emit(t,s);}
;}
,__fA:function(v,w,x){if(!x){x=this._getTarget(v);}
;var w=w||v.type;if(w==a){this.__fB(v,x);}
else if(w==c){this.__fC(v,x);}
else if(w==b){this.__fD(v,x);}
;;}
,__fB:function(y,z){var A=y.changedTouches[0];this.__fw=A.screenX;this.__fx=A.screenY;this.__fy=new Date().getTime();this.__fz=y.changedTouches.length===1;}
,__fC:function(B,C){if(this.__fz&&B.changedTouches.length>1){this.__fz=false;}
;}
,__fD:function(D,E){if(this.__fz){var F=D.changedTouches[0];var I={x:F.screenX-this.__fw,y:F.screenY-this.__fx};var J=qx.event.handler.TouchCore;var G;if(this.__fv==E&&Math.abs(I.x)<=J.TAP_MAX_DISTANCE&&Math.abs(I.y)<=J.TAP_MAX_DISTANCE){if(qx.event&&qx.event.type&&qx.event.type.Tap){G=qx.event.type.Tap;}
;this._fireEvent(D,h,E,G);}
else {var H=this.__fE(D,E,I);if(H){if(qx.event&&qx.event.type&&qx.event.type.Swipe){G=qx.event.type.Swipe;}
;D.swipe=H;this._fireEvent(D,j,E,G);}
;}
;}
;}
,__fE:function(K,L,M){var Q=qx.event.handler.TouchCore;var R=new Date().getTime()-this.__fy;var T=(Math.abs(M.x)>=Math.abs(M.y))?g:f;var N=M[T];var O=Q.SWIPE_DIRECTION[T][N<0?0:1];var S=(R!==0)?N/R:0;var P=null;if(Math.abs(S)>=Q.SWIPE_MIN_VELOCITY&&Math.abs(N)>=Q.SWIPE_MIN_DISTANCE){P={startTime:this.__fy,duration:R,axis:T,direction:O,distance:N,velocity:S};}
;return P;}
,dispose:function(){this._stopTouchObserver();this.__fv=this.__fs=this.__ft=null;}
}});}
)();
(function(){var o="mshtml",n="engine.name",m="qx.event.handler.Touch",l="useraction",k="touchmove",j="qx.mobile.nativescroll",i="dispose",h="touchstart",g="mouseup",f="touchend",b="mousedown",d="mousemove",c="event.touch",a="qx.mobile.emulatetouch";qx.Class.define(m,{extend:qx.event.handler.TouchCore,implement:qx.event.IEventHandler,construct:function(p){this.__dz=p;this.__ce=p.getWindow();this.__dK=this.__ce.document;qx.event.handler.TouchCore.apply(this,[this.__dK]);this._initMouseObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"}},members:{__fF:null,__dz:null,__ce:null,__dK:null,__fG:false,canHandleEvent:function(q,r){}
,registerEvent:function(s,t,u){}
,unregisterEvent:function(v,w,x){}
,_fireEvent:function(y,z,A,B){if(!A){A=this._getTarget(y);}
;var z=z||y.type;if(A&&A.nodeType){qx.event.Registration.fireEvent(A,z,B||qx.event.type.Touch,[y,A,null,true,true]);}
;qx.event.Registration.fireEvent(this.__ce,l,qx.event.type.Data,[z]);}
,__fH:qx.core.Environment.select(a,{"true":function(C){var D=C.type;var F=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;if(F[D]){D=F[D];if(D==h&&this.__fI(C)){this.__fG=true;}
else if(D==f){this.__fG=false;}
;var G=this.__fJ(C);var E=(D==f?[]:[G]);C.touches=E;C.targetTouches=E;C.changedTouches=[G];}
;return D;}
,"default":qx.lang.Function.empty}),__fI:qx.core.Environment.select(a,{"true":function(H){if((qx.core.Environment.get(n)==o)){var I=1;}
else {var I=0;}
;return H.button==I;}
,"default":qx.lang.Function.empty}),__fJ:qx.core.Environment.select(a,{"true":function(J){var K=this._getTarget(J);return {clientX:J.clientX,clientY:J.clientY,screenX:J.screenX,screenY:J.screenY,pageX:J.pageX,pageY:J.pageY,identifier:1,target:K};}
,"default":qx.lang.Function.empty}),_initMouseObserver:qx.core.Environment.select(a,{"true":function(){if(!qx.core.Environment.get(c)){this.__fF=qx.lang.Function.listener(this._onMouseEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dK,b,this.__fF);Event.addNativeListener(this.__dK,d,this.__fF);Event.addNativeListener(this.__dK,g,this.__fF);}
;}
,"default":qx.lang.Function.empty}),_stopMouseObserver:qx.core.Environment.select(a,{"true":function(){if(!qx.core.Environment.get(c)){var Event=qx.bom.Event;Event.removeNativeListener(this.__dK,b,this.__fF);Event.removeNativeListener(this.__dK,d,this.__fF);Event.removeNativeListener(this.__dK,g,this.__fF);}
;}
,"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(L){this._commonTouchEventHandler(L);}
),_onMouseEvent:qx.core.Environment.select(a,{"true":qx.event.GlobalError.observeMethod(function(M){if(!qx.core.Environment.get(c)){if(M.type==d&&!this.__fG){return;}
;var N=this.__fH(M);this._commonTouchEventHandler(M,N);}
;}
),"default":qx.lang.Function.empty}),dispose:function(){this.__fK(i);this._stopMouseObserver();this.__dz=this.__ce=this.__dK=null;}
,__fK:function(O,P){qx.event.handler.TouchCore.prototype[O].apply(this,P||[]);}
},defer:function(Q){qx.event.Registration.addHandler(Q);if(qx.core.Environment.get(c)){if(qx.core.Environment.get(j)==false){document.addEventListener(k,function(e){e.preventDefault();}
);}
;qx.event.Registration.getManager(document).getHandler(Q);}
;}
});}
)();
(function(){var m="select-multiple",k="value",j="select",h="qx.event.handler.Input",g="checked",f="blur",d="keydown",c="propertychange",b="browser.version",a="browser.documentmode",A="opera",z="keyup",y="mshtml",x="keypress",w="engine.version",v="radio",u="checkbox",t="text",s="textarea",r="password",p="change",q="engine.name",n="input";qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);if((qx.core.Environment.get(q)==A)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);}
;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__fL:false,__fM:null,__fN:null,__fO:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();if(C===n&&(D===n||D===s)){return true;}
;if(C===p&&(D===n||D===s||D===j)){return true;}
;return false;}
,registerEvent:function(E,F,G){if(qx.core.Environment.get(q)==y&&(qx.core.Environment.get(w)<9||(qx.core.Environment.get(w)>=9&&qx.core.Environment.get(a)<9))){if(!E.__fP){var H=E.tagName.toLowerCase();var I=E.type;if(I===t||I===r||H===s||I===u||I===v){qx.bom.Event.addNativeListener(E,c,this._onPropertyWrapper);}
;if(I!==u&&I!==v){qx.bom.Event.addNativeListener(E,p,this._onChangeValueWrapper);}
;if(I===t||I===r){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);qx.bom.Event.addNativeListener(E,x,this._onKeyPressWrapped);}
;E.__fP=true;}
;}
else {if(F===n){this.__fQ(E);}
else if(F===p){if(E.type===v||E.type===u){qx.bom.Event.addNativeListener(E,p,this._onChangeCheckedWrapper);}
else {qx.bom.Event.addNativeListener(E,p,this._onChangeValueWrapper);}
;if((qx.core.Environment.get(q)==A)||(qx.core.Environment.get(q)==y)){if(E.type===t||E.type===r){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);qx.bom.Event.addNativeListener(E,x,this._onKeyPressWrapped);}
;}
;}
;}
;}
,__fQ:qx.core.Environment.select(q,{"mshtml":function(J){if(qx.core.Environment.get(w)>=9&&qx.core.Environment.get(a)>=9){qx.bom.Event.addNativeListener(J,n,this._onInputWrapper);if(J.type===t||J.type===r||J.type===s){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,J);qx.bom.Event.addNativeListener(J,z,this._inputFixWrapper);}
;}
;}
,"webkit":function(K){var L=K.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(w))<532&&L==s){qx.bom.Event.addNativeListener(K,x,this._onInputWrapper);}
;qx.bom.Event.addNativeListener(K,n,this._onInputWrapper);}
,"opera":function(M){qx.bom.Event.addNativeListener(M,z,this._onKeyUpWrapper);qx.bom.Event.addNativeListener(M,d,this._onKeyDownWrapper);qx.bom.Event.addNativeListener(M,f,this._onBlurWrapper);qx.bom.Event.addNativeListener(M,n,this._onInputWrapper);}
,"default":function(N){qx.bom.Event.addNativeListener(N,n,this._onInputWrapper);}
}),unregisterEvent:function(O,P){if(qx.core.Environment.get(q)==y&&qx.core.Environment.get(w)<9&&qx.core.Environment.get(a)<9){if(O.__fP){var Q=O.tagName.toLowerCase();var R=O.type;if(R===t||R===r||Q===s||R===u||R===v){qx.bom.Event.removeNativeListener(O,c,this._onPropertyWrapper);}
;if(R!==u&&R!==v){qx.bom.Event.removeNativeListener(O,p,this._onChangeValueWrapper);}
;if(R===t||R===r){qx.bom.Event.removeNativeListener(O,x,this._onKeyPressWrapped);}
;try{delete O.__fP;}
catch(S){O.__fP=null;}
;}
;}
else {if(P===n){this.__fR(O);}
else if(P===p){if(O.type===v||O.type===u){qx.bom.Event.removeNativeListener(O,p,this._onChangeCheckedWrapper);}
else {qx.bom.Event.removeNativeListener(O,p,this._onChangeValueWrapper);}
;}
;if((qx.core.Environment.get(q)==A)||(qx.core.Environment.get(q)==y)){if(O.type===t||O.type===r){qx.bom.Event.removeNativeListener(O,x,this._onKeyPressWrapped);}
;}
;}
;}
,__fR:qx.core.Environment.select(q,{"mshtml":function(T){if(qx.core.Environment.get(w)>=9&&qx.core.Environment.get(a)>=9){qx.bom.Event.removeNativeListener(T,n,this._onInputWrapper);if(T.type===t||T.type===r||T.type===s){qx.bom.Event.removeNativeListener(T,z,this._inputFixWrapper);}
;}
;}
,"webkit":function(U){var V=U.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(w))<532&&V==s){qx.bom.Event.removeNativeListener(U,x,this._onInputWrapper);}
;qx.bom.Event.removeNativeListener(U,n,this._onInputWrapper);}
,"opera":function(W){qx.bom.Event.removeNativeListener(W,z,this._onKeyUpWrapper);qx.bom.Event.removeNativeListener(W,d,this._onKeyDownWrapper);qx.bom.Event.removeNativeListener(W,f,this._onBlurWrapper);qx.bom.Event.removeNativeListener(W,n,this._onInputWrapper);}
,"default":function(X){qx.bom.Event.removeNativeListener(X,n,this._onInputWrapper);}
}),_onKeyPress:qx.core.Environment.select(q,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__fN){this.__fN=Y.value;qx.event.Registration.fireEvent(Y,p,qx.event.type.Data,[Y.value]);}
;}
;}
,"default":null}),_inputFix:qx.core.Environment.select(q,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__fO){this.__fO=ba.value;qx.event.Registration.fireEvent(ba,n,qx.event.type.Data,[ba.value]);}
;}
;}
,"default":null}),_onKeyDown:qx.core.Environment.select(q,{"opera":function(e){if(e.keyCode===13){this.__fL=true;}
;}
,"default":null}),_onKeyUp:qx.core.Environment.select(q,{"opera":function(e){if(e.keyCode===13){this.__fL=false;}
;}
,"default":null}),_onBlur:qx.core.Environment.select(q,{"opera":function(e){if(this.__fM&&qx.core.Environment.get(b)<10.6){window.clearTimeout(this.__fM);}
;}
,"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);var bb=bc.tagName.toLowerCase();if(!this.__fL||bb!==n){if((qx.core.Environment.get(q)==A)&&qx.core.Environment.get(b)<10.6){this.__fM=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,n,qx.event.type.Data,[bc.value]);}
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
(function(){var k="mousedown",j="qxDraggable",i="Escape",h="drag",g="Unsupported data type: ",f="drop",d="qxDroppable",c="qx.event.handler.DragDrop",b="This method must not be used outside the drop event listener!",a="!",H="droprequest",G="dragstart",F="dragchange",E="dragleave",D="dragover",C="left",B="Please use a droprequest listener to the drag source to fill the manager with data!",A="blur",z="mouseout",y="keydown",r="Control",s="Shift",p="mousemove",q="move",n="mouseover",o="Alt",l="keyup",m="mouseup",t="keypress",u="dragend",w="on",v="copy",x="alias";qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(I){qx.core.Object.call(this);this.__dz=I;this.__dK=I.getWindow().document.documentElement;this.__dz.addListener(this.__dK,k,this._onMouseDown,this);this.__gd();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__dz:null,__dK:null,__fS:null,__fT:null,__fU:null,__fV:null,__fW:null,__e:null,__fX:null,__fY:null,__ga:false,__gb:0,__gc:0,canHandleEvent:function(J,K){}
,registerEvent:function(L,M,N){}
,unregisterEvent:function(O,P,Q){}
,addType:function(R){this.__fU[R]=true;}
,addAction:function(S){this.__fV[S]=true;}
,supportsType:function(T){return !!this.__fU[T];}
,supportsAction:function(U){return !!this.__fV[U];}
,getData:function(V){if(!this.__gj||!this.__fS){throw new Error(b);}
;if(!this.__fU[V]){throw new Error(g+V+a);}
;if(!this.__e[V]){this.__fX=V;this.__eq(H,this.__fT,this.__fS,false);}
;if(!this.__e[V]){throw new Error(B);}
;return this.__e[V]||null;}
,getCurrentAction:function(){return this.__fY;}
,addData:function(W,X){this.__e[W]=X;}
,getCurrentType:function(){return this.__fX;}
,isSessionActive:function(){return this.__ga;}
,__gd:function(){this.__fU={};this.__fV={};this.__fW={};this.__e={};}
,__ge:function(){if(this.__fT==null){return;}
;var bb=this.__fV;var Y=this.__fW;var ba=null;if(this.__gj){if(Y.Shift&&Y.Control&&bb.alias){ba=x;}
else if(Y.Shift&&Y.Alt&&bb.copy){ba=v;}
else if(Y.Shift&&bb.move){ba=q;}
else if(Y.Alt&&bb.alias){ba=x;}
else if(Y.Control&&bb.copy){ba=v;}
else if(bb.move){ba=q;}
else if(bb.copy){ba=v;}
else if(bb.alias){ba=x;}
;;;;;;;}
;if(ba!=this.__fY){this.__fY=ba;this.__eq(F,this.__fT,this.__fS,false);}
;}
,__eq:function(bc,bd,be,bf,bg){var bi=qx.event.Registration;var bh=bi.createEvent(bc,qx.event.type.Drag,[bf,bg]);if(bd!==be){bh.setRelatedTarget(be);}
;return bi.dispatchEvent(bd,bh);}
,__gf:function(bj){while(bj&&bj.nodeType==1){if(bj.getAttribute(j)==w){return bj;}
;bj=bj.parentNode;}
;return null;}
,__gg:function(bk){while(bk&&bk.nodeType==1){if(bk.getAttribute(d)==w){return bk;}
;bk=bk.parentNode;}
;return null;}
,__gh:function(){this.__fT=null;this.__dz.removeListener(this.__dK,p,this._onMouseMove,this,true);this.__dz.removeListener(this.__dK,m,this._onMouseUp,this,true);qx.event.Registration.removeListener(window,A,this._onWindowBlur,this);this.__gd();}
,__gi:function(){if(this.__ga){this.__dz.removeListener(this.__dK,n,this._onMouseOver,this,true);this.__dz.removeListener(this.__dK,z,this._onMouseOut,this,true);this.__dz.removeListener(this.__dK,y,this._onKeyDown,this,true);this.__dz.removeListener(this.__dK,l,this._onKeyUp,this,true);this.__dz.removeListener(this.__dK,t,this._onKeyPress,this,true);this.__eq(u,this.__fT,this.__fS,false);this.__ga=false;}
;this.__gj=false;this.__fS=null;this.__gh();}
,__gj:false,_onWindowBlur:function(e){this.__gi();}
,_onKeyDown:function(e){var bl=e.getKeyIdentifier();switch(bl){case o:case r:case s:if(!this.__fW[bl]){this.__fW[bl]=true;this.__ge();}
;};}
,_onKeyUp:function(e){var bm=e.getKeyIdentifier();switch(bm){case o:case r:case s:if(this.__fW[bm]){this.__fW[bm]=false;this.__ge();}
;};}
,_onKeyPress:function(e){var bn=e.getKeyIdentifier();switch(bn){case i:this.__gi();};}
,_onMouseDown:function(e){if(this.__ga||e.getButton()!==C){return;}
;var bo=this.__gf(e.getTarget());if(bo){this.__gb=e.getDocumentLeft();this.__gc=e.getDocumentTop();this.__fT=bo;this.__dz.addListener(this.__dK,p,this._onMouseMove,this,true);this.__dz.addListener(this.__dK,m,this._onMouseUp,this,true);qx.event.Registration.addListener(window,A,this._onWindowBlur,this);}
;}
,_onMouseUp:function(e){if(this.__gj){this.__eq(f,this.__fS,this.__fT,false,e);}
;if(this.__ga){e.stopPropagation();}
;this.__gi();}
,_onMouseMove:function(e){if(this.__ga){if(!this.__eq(h,this.__fT,this.__fS,true,e)){this.__gi();}
;}
else {if(Math.abs(e.getDocumentLeft()-this.__gb)>3||Math.abs(e.getDocumentTop()-this.__gc)>3){if(this.__eq(G,this.__fT,this.__fS,true,e)){this.__ga=true;this.__dz.addListener(this.__dK,n,this._onMouseOver,this,true);this.__dz.addListener(this.__dK,z,this._onMouseOut,this,true);this.__dz.addListener(this.__dK,y,this._onKeyDown,this,true);this.__dz.addListener(this.__dK,l,this._onKeyUp,this,true);this.__dz.addListener(this.__dK,t,this._onKeyPress,this,true);var bp=this.__fW;bp.Control=e.isCtrlPressed();bp.Shift=e.isShiftPressed();bp.Alt=e.isAltPressed();this.__ge();}
else {this.__eq(u,this.__fT,this.__fS,false);this.__gh();}
;}
;}
;}
,_onMouseOver:function(e){var bq=e.getTarget();var br=this.__gg(bq);if(br&&br!=this.__fS){this.__gj=this.__eq(D,br,this.__fT,true,e);this.__fS=br;this.__ge();}
;}
,_onMouseOut:function(e){var bt=this.__gg(e.getTarget());var bs=this.__gg(e.getRelatedTarget());if(bt&&bt!==bs&&bt==this.__fS){this.__eq(E,this.__fS,bs,false,e);this.__fS=null;this.__gj=false;qx.event.Timer.once(this.__ge,this,0);}
;}
},destruct:function(){this.__fT=this.__fS=this.__dz=this.__dK=this.__fU=this.__fV=this.__fW=this.__e=null;}
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
(function(){var c="qx.event.handler.Offline",b="offline",a="online";qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);this.__dz=d;this.__ce=d.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{online:true,offline:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dz:null,__ce:null,__fp:null,canHandleEvent:function(e,f){}
,registerEvent:function(g,h,i){}
,unregisterEvent:function(j,k,l){}
,_initObserver:function(){this.__fp=qx.lang.Function.listener(this._onNative,this);qx.bom.Event.addNativeListener(this.__ce,b,this.__fp);qx.bom.Event.addNativeListener(this.__ce,a,this.__fp);}
,_stopObserver:function(){qx.bom.Event.removeNativeListener(this.__ce,b,this.__fp);qx.bom.Event.removeNativeListener(this.__ce,a,this.__fp);}
,_onNative:qx.event.GlobalError.observeMethod(function(m){qx.event.Registration.fireEvent(this.__ce,m.type,qx.event.type.Event,[]);}
),isOnline:function(){return !!this.__ce.navigator.onLine;}
},destruct:function(){this.__dz=null;this._stopObserver();delete qx.event.handler.Appear.__instances[this.$$hash];}
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
(function(){var i="mshtml",h="blur",g="focus",f="click",e="qx.event.dispatch.MouseCapture",d="capture",c="scroll",b="engine.name",a="losecapture";qx.Class.define(e,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);this.__ce=j.getWindow();this.__cg=k;j.addListener(this.__ce,h,this.releaseCapture,this);j.addListener(this.__ce,g,this.releaseCapture,this);j.addListener(this.__ce,c,this.releaseCapture,this);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cg:null,__gr:null,__gs:true,__ce:null,_getParent:function(l){return l.parentNode;}
,canDispatchEvent:function(m,event,n){return !!(this.__gr&&this.__gt[n]);}
,dispatchEvent:function(o,event,p){if(p==f){event.stopPropagation();this.releaseCapture();return;}
;if(this.__gs||!qx.dom.Hierarchy.contains(this.__gr,o)){o=this.__gr;}
;qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);}
,__gt:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;if(this.__gr===q&&this.__gs==r){return;}
;if(this.__gr){this.releaseCapture();}
;this.nativeSetCapture(q,r);if(this.hasNativeCapture){var self=this;qx.bom.Event.addNativeListener(q,a,function(){qx.bom.Event.removeNativeListener(q,a,arguments.callee);self.releaseCapture();}
);}
;this.__gs=r;this.__gr=q;this.__cg.fireEvent(q,d,qx.event.type.Event,[true,false]);}
,getCaptureElement:function(){return this.__gr;}
,releaseCapture:function(){var s=this.__gr;if(!s){return;}
;this.__gr=null;this.__cg.fireEvent(s,a,qx.event.type.Event,[true,false]);this.nativeReleaseCapture(s);}
,hasNativeCapture:qx.core.Environment.get(b)==i,nativeSetCapture:qx.core.Environment.select(b,{"mshtml":function(t,u){t.setCapture(u!==false);}
,"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(b,{"mshtml":function(v){v.releaseCapture();}
,"default":qx.lang.Function.empty})},destruct:function(){this.__gr=this.__ce=this.__cg=null;}
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
(function(){var l="Silverlight",k="plugin.silverlight.version",h="function",g="QuickTimeCheckObject.QuickTimeCheck.1",f="Adobe Acrobat",e="plugin.windowsmedia",d="QuickTime",c="plugin.silverlight",b="qx.bom.client.Plugin",a="plugin.divx",H="Chrome PDF Viewer",G="Windows Media",F="plugin.gears",E="plugin.quicktime",D="plugin.windowsmedia.version",C="DivX Web Player",B="AgControl.AgControl",A="plugin.pdf",z="plugin.pdf.version",y="plugin.divx.version",s="WMPlayer.OCX.7",t="AcroPDF.PDF",q="plugin.activex",r="plugin.quicktime.version",o="npdivx.DivXBrowserPlugin.1",p="pdf",m="wmv",n="divx",u="quicktime",v="mshtml",x="silverlight",w="";qx.Bootstrap.define(b,{statics:{getGears:function(){return !!(window.google&&window.google.gears);}
,getActiveX:function(){return (typeof window.ActiveXObject===h);}
,__gu:{quicktime:{plugin:[d],control:g},wmv:{plugin:[G],control:s},divx:{plugin:[C],control:o},silverlight:{plugin:[l],control:B},pdf:{plugin:[H,f],control:t}},getQuicktimeVersion:function(){var I=qx.bom.client.Plugin.__gu[u];return qx.bom.client.Plugin.__gv(I.control,I.plugin);}
,getWindowsMediaVersion:function(){var J=qx.bom.client.Plugin.__gu[m];return qx.bom.client.Plugin.__gv(J.control,J.plugin);}
,getDivXVersion:function(){var K=qx.bom.client.Plugin.__gu[n];return qx.bom.client.Plugin.__gv(K.control,K.plugin);}
,getSilverlightVersion:function(){var L=qx.bom.client.Plugin.__gu[x];return qx.bom.client.Plugin.__gv(L.control,L.plugin);}
,getPdfVersion:function(){var M=qx.bom.client.Plugin.__gu[p];return qx.bom.client.Plugin.__gv(M.control,M.plugin);}
,getQuicktime:function(){var N=qx.bom.client.Plugin.__gu[u];return qx.bom.client.Plugin.__gw(N.control,N.plugin);}
,getWindowsMedia:function(){var O=qx.bom.client.Plugin.__gu[m];return qx.bom.client.Plugin.__gw(O.control,O.plugin);}
,getDivX:function(){var P=qx.bom.client.Plugin.__gu[n];return qx.bom.client.Plugin.__gw(P.control,P.plugin);}
,getSilverlight:function(){var Q=qx.bom.client.Plugin.__gu[x];return qx.bom.client.Plugin.__gw(Q.control,Q.plugin);}
,getPdf:function(){var R=qx.bom.client.Plugin.__gu[p];return qx.bom.client.Plugin.__gw(R.control,R.plugin);}
,__gv:function(S,T){var U=qx.bom.client.Plugin.__gw(S,T);if(!U){return w;}
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
,__gw:function(bc,bd){if(qx.bom.client.Engine.getName()==v){var be=window.ActiveXObject;if(!be){return false;}
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
(function(){var j="qx.bom.element.Location",i="paddingLeft",h="static",g="marginBottom",f="visible",e="BODY",d="paddingBottom",c="paddingTop",b="gecko",a="marginRight",D="mshtml",C="position",B="margin",A="overflow",z="paddingRight",y="browser.documentmode",x="border",w="borderBottomWidth",v="borderRightWidth",u="auto",q="padding",r="browser.quirksmode",o="engine.version",p="marginTop",m="marginLeft",n="border-box",k="engine.name",l="scroll",s="borderTopWidth",t="borderLeftWidth";qx.Bootstrap.define(j,{statics:{__gx:function(E,F){return qx.bom.element.Style.get(E,F,qx.bom.element.Style.COMPUTED_MODE,false);}
,__gy:function(G,H){return parseInt(qx.bom.element.Style.get(G,H,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;}
,__gz:function(I){var K=0,top=0;var J=qx.dom.Node.getWindow(I);K-=qx.bom.Viewport.getScrollLeft(J);top-=qx.bom.Viewport.getScrollTop(J);return {left:K,top:top};}
,__gA:qx.core.Environment.select(k,{"mshtml":function(L){var N=qx.dom.Node.getDocument(L);var M=N.body;var O=0;var top=0;O-=M.clientLeft+N.documentElement.clientLeft;top-=M.clientTop+N.documentElement.clientTop;if(!qx.core.Environment.get(r)){O+=this.__gy(M,t);top+=this.__gy(M,s);}
;return {left:O,top:top};}
,"webkit":function(P){var R=qx.dom.Node.getDocument(P);var Q=R.body;var S=Q.offsetLeft;var top=Q.offsetTop;if(parseFloat(qx.core.Environment.get(o))<530.17){S+=this.__gy(Q,t);top+=this.__gy(Q,s);}
;return {left:S,top:top};}
,"gecko":function(T){var U=qx.dom.Node.getDocument(T).body;var V=U.offsetLeft;var top=U.offsetTop;if(parseFloat(qx.core.Environment.get(o))<1.9){V+=this.__gy(U,m);top+=this.__gy(U,p);}
;if(qx.bom.element.BoxSizing.get(U)!==n){V+=this.__gy(U,t);top+=this.__gy(U,s);}
;return {left:V,top:top};}
,"default":function(W){var X=qx.dom.Node.getDocument(W).body;var Y=X.offsetLeft;var top=X.offsetTop;return {left:Y,top:top};}
}),__gB:qx.core.Environment.select(k,{"gecko":function(ba){if(ba.getBoundingClientRect){var bd=ba.getBoundingClientRect();var be=Math.round(bd.left);var top=Math.round(bd.top);}
else {var be=0;var top=0;var bb=qx.dom.Node.getDocument(ba).body;var bc=qx.bom.element.BoxSizing;if(bc.get(ba)!==n){be-=this.__gy(ba,t);top-=this.__gy(ba,s);}
;while(ba&&ba!==bb){be+=ba.offsetLeft;top+=ba.offsetTop;if(bc.get(ba)!==n){be+=this.__gy(ba,t);top+=this.__gy(ba,s);}
;if(ba.parentNode&&this.__gx(ba.parentNode,A)!=f){be+=this.__gy(ba.parentNode,t);top+=this.__gy(ba.parentNode,s);}
;ba=ba.offsetParent;}
;}
;return {left:be,top:top};}
,"default":function(bf){var bh=qx.dom.Node.getDocument(bf);if(bf.getBoundingClientRect){var bi=bf.getBoundingClientRect();var bj=Math.round(bi.left);var top=Math.round(bi.top);}
else {var bj=bf.offsetLeft;var top=bf.offsetTop;bf=bf.offsetParent;var bg=bh.body;while(bf&&bf!=bg){bj+=bf.offsetLeft;top+=bf.offsetTop;bj+=this.__gy(bf,t);top+=this.__gy(bf,s);bf=bf.offsetParent;}
;}
;return {left:bj,top:top};}
}),get:function(bk,bl){if(bk.tagName==e){var location=this.__gC(bk);var bs=location.left;var top=location.top;}
else {var bm=this.__gA(bk);var br=this.__gB(bk);var scroll=this.__gz(bk);var bs=br.left+bm.left-scroll.left;var top=br.top+bm.top-scroll.top;}
;var bn=bs+bk.offsetWidth;var bo=top+bk.offsetHeight;if(bl){if(bl==q||bl==l){var bp=qx.bom.element.Overflow.getX(bk);if(bp==l||bp==u){bn+=bk.scrollWidth-bk.offsetWidth+this.__gy(bk,t)+this.__gy(bk,v);}
;var bq=qx.bom.element.Overflow.getY(bk);if(bq==l||bq==u){bo+=bk.scrollHeight-bk.offsetHeight+this.__gy(bk,s)+this.__gy(bk,w);}
;}
;switch(bl){case q:bs+=this.__gy(bk,i);top+=this.__gy(bk,c);bn-=this.__gy(bk,z);bo-=this.__gy(bk,d);case l:bs-=bk.scrollLeft;top-=bk.scrollTop;bn-=bk.scrollLeft;bo-=bk.scrollTop;case x:bs+=this.__gy(bk,t);top+=this.__gy(bk,s);bn-=this.__gy(bk,v);bo-=this.__gy(bk,w);break;case B:bs-=this.__gy(bk,m);top-=this.__gy(bk,p);bn+=this.__gy(bk,a);bo+=this.__gy(bk,g);break;};}
;return {left:bs,top:top,right:bn,bottom:bo};}
,__gC:function(bt){var top=bt.offsetTop;var bu=bt.offsetLeft;if(qx.core.Environment.get(k)!==D||!((parseFloat(qx.core.Environment.get(o))<8||qx.core.Environment.get(y)<8)&&!qx.core.Environment.get(r))){top+=this.__gy(bt,p);bu+=this.__gy(bt,m);}
;if(qx.core.Environment.get(k)===b){top+=this.__gy(bt,t);bu+=this.__gy(bt,s);}
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
(function(){var t="touchend",s=" due to exceptions in user code. The application has to be reloaded!",r="Error in the 'Appearance' queue:",q="Error in the 'Widget' queue:",p="\n",o="Error in the 'Layout' queue:",n="Error in the 'Visibility' queue:",m="useraction",l="Error while layout flush: ",k='ie',d="Error in the 'Dispose' queue:",j="Stack trace: \n",h="event.touch",c="browser.version",b=" times in a row",g="qx.ui.core.queue.Manager",f="browser.name",i="Fatal Error: Flush terminated ",a="qx.debug";qx.Class.define(g,{statics:{__gQ:false,__gR:{},__gS:0,MAX_RETRIES:10,scheduleFlush:function(u){var self=qx.ui.core.queue.Manager;self.__gR[u]=true;if(!self.__gQ){self.__ei.schedule();self.__gQ=true;}
;}
,flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;}
;var self=qx.ui.core.queue.Manager;if(self.__gT){return;}
;self.__gT=true;self.__ei.cancel();var v=self.__gR;self.__gU(function(){while(v.visibility||v.widget||v.appearance||v.layout||v.element){if(v.widget){delete v.widget;if(qx.core.Environment.get(a)){try{qx.ui.core.queue.Widget.flush();}
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
,function(){self.__gQ=false;}
);self.__gU(function(){if(v.dispose){delete v.dispose;if(qx.core.Environment.get(a)){try{qx.ui.core.queue.Dispose.flush();}
catch(e){qx.log.Logger.error(d+e);}
;}
else {qx.ui.core.queue.Dispose.flush();}
;}
;}
,function(){self.__gT=false;}
);self.__gS=0;}
,__gU:qx.core.Environment.select(a,{"true":function(w,x){w();x();}
,"false":function(y,z){var self=qx.ui.core.queue.Manager;try{y();}
catch(e){if(qx.core.Environment.get(a)){qx.log.Logger.error(l+e+p+j+qx.dev.StackTrace.getStackTraceFromError(e));}
;self.__gQ=false;self.__gT=false;self.__gS+=1;if(qx.core.Environment.get(f)==k&&qx.core.Environment.get(c)<=7){z();}
;if(self.__gS<=self.MAX_RETRIES){self.scheduleFlush();}
else {throw new Error(i+(self.__gS-1)+b+s);}
;throw e;}
finally{z();}
;}
}),__gV:function(e){var A=qx.ui.core.queue.Manager;if(e.getData()==t){A.PAUSE=true;if(A.__gW){window.clearTimeout(A.__gW);}
;A.__gW=window.setTimeout(function(){A.PAUSE=false;A.__gW=null;A.flush();}
,500);}
else {A.flush();}
;}
},defer:function(B){B.__ei=new qx.util.DeferredCall(B.flush);qx.html.Element._scheduleFlush=B.scheduleFlush;qx.event.Registration.addListener(window,m,qx.core.Environment.get(h)?B.__gV:B.flush);}
});}
)();
(function(){var c="qx.ui.core.queue.Widget",b="widget",a="$$default";qx.Class.define(c,{statics:{__gM:[],__gR:{},remove:function(d,e){var f=this.__gM;if(!qx.lang.Array.contains(f,d)){return;}
;var g=d.$$hash;if(e==null){qx.lang.Array.remove(f,d);delete this.__gR[g];return;}
;if(this.__gR[g]){delete this.__gR[g][e];if(qx.lang.Object.getLength(this.__gR[g])==0){qx.lang.Array.remove(f,d);}
;}
;}
,add:function(h,j){var k=this.__gM;if(!qx.lang.Array.contains(k,h)){k.unshift(h);}
;if(j==null){j=a;}
;var l=h.$$hash;if(!this.__gR[l]){this.__gR[l]={};}
;this.__gR[l][j]=true;qx.ui.core.queue.Manager.scheduleFlush(b);}
,flush:function(){var m=this.__gM;var o,n;for(var i=m.length-1;i>=0;i--){o=m[i];n=this.__gR[o.$$hash];m.splice(i,1);o.syncWidget(n);}
;if(m.length!=0){return;}
;this.__gM=[];this.__gR={};}
}});}
)();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";qx.Class.define(b,{statics:{__gM:[],__cR:{},remove:function(c){delete this.__cR[c.$$hash];qx.lang.Array.remove(this.__gM,c);}
,isVisible:function(d){return this.__cR[d.$$hash]||false;}
,__gX:function(e){var g=this.__cR;var f=e.$$hash;var h;if(e.isExcluded()){h=false;}
else {var parent=e.$$parent;if(parent){h=this.__gX(parent);}
else {h=e.isRootWidget();}
;}
;return g[f]=h;}
,add:function(j){var k=this.__gM;if(qx.lang.Array.contains(k,j)){return;}
;k.unshift(j);qx.ui.core.queue.Manager.scheduleFlush(a);}
,flush:function(){var o=this.__gM;var p=this.__cR;for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;if(p[n]!=null){o[i].addChildrenToQueue(o);}
;}
;var l={};for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;l[n]=p[n];p[n]=null;}
;for(var i=o.length-1;i>=0;i--){var m=o[i];var n=m.$$hash;o.splice(i,1);if(p[n]==null){this.__gX(m);}
;if(p[n]&&p[n]!=l[n]){m.checkAppearanceNeeds();}
;}
;this.__gM=[];}
}});}
)();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";qx.Class.define(a,{statics:{__gM:[],remove:function(c){qx.lang.Array.remove(this.__gM,c);}
,add:function(d){var e=this.__gM;if(qx.lang.Array.contains(e,d)){return;}
;e.unshift(d);qx.ui.core.queue.Manager.scheduleFlush(b);}
,has:function(f){return qx.lang.Array.contains(this.__gM,f);}
,flush:function(){var j=qx.ui.core.queue.Visibility;var g=this.__gM;var h;for(var i=g.length-1;i>=0;i--){h=g[i];g.splice(i,1);if(j.isVisible(h)){h.syncAppearance();}
else {h.$$stateChanges=true;}
;}
;}
}});}
)();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";qx.Class.define(a,{statics:{__gM:[],add:function(c){var d=this.__gM;if(qx.lang.Array.contains(d,c)){return;}
;d.unshift(c);qx.ui.core.queue.Manager.scheduleFlush(b);}
,isEmpty:function(){return this.__gM.length==0;}
,flush:function(){var e=this.__gM;for(var i=e.length-1;i>=0;i--){var f=e[i];e.splice(i,1);f.dispose();}
;if(e.length!=0){return;}
;this.__gM=[];}
}});}
)();
(function(){var o="qx.core.BaseInit",n="engine.name",m="Main runtime: ",l="qx.application",k="os.name",j="engine.version",i="Missing application class: ",h="Load runtime: ",g="Could not detect engine!",f="Finalize runtime: ",b="Could not detect operating system!",d="Could not detect the version of the engine!",c="",a="ms";qx.Class.define(o,{statics:{getApplication:function(){return this.__gY||null;}
,ready:function(){if(this.__gY){return;}
;if(qx.core.Environment.get(n)==c){qx.log.Logger.warn(g);}
;if(qx.core.Environment.get(j)==c){qx.log.Logger.warn(d);}
;if(qx.core.Environment.get(k)==c){qx.log.Logger.warn(b);}
;qx.log.Logger.debug(this,h+(new Date-qx.Bootstrap.LOADSTART)+a);var q=qx.core.Environment.get(l);var r=qx.Class.getByName(q);if(r){this.__gY=new r;var p=new Date;this.__gY.main();qx.log.Logger.debug(this,m+(new Date-p)+a);var p=new Date;this.__gY.finalize();qx.log.Logger.debug(this,f+(new Date-p)+a);}
else {qx.log.Logger.warn(i+q);}
;}
,__ha:function(e){var s=this.__gY;if(s){s.close();}
;}
,__hb:function(){var t=this.__gY;if(t){t.terminate();}
;qx.core.ObjectRegistry.shutdown();}
}});}
)();
(function(){var n="qx.event.handler.Application",m="complete",l="webkit",k="gecko",j="opera",i="left",h="DOMContentLoaded",g="shutdown",f="mshtml",d="load",a="unload",c="ready",b="engine.name";qx.Class.define(n,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);this._window=o.getWindow();this.__hc=false;this.__hd=false;this.__he=false;this.__hf=false;this._initObserver();qx.event.handler.Application.$$instance=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;if(p){p.__hg();}
;}
},members:{canHandleEvent:function(q,r){}
,registerEvent:function(s,t,u){}
,unregisterEvent:function(v,w,x){}
,__he:null,__hc:null,__hd:null,__hf:null,__hg:function(){if(!this.__he&&this.__hc&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(b)==f)){if(qx.event.Registration.hasListener(this._window,c)){this.__he=true;qx.event.Registration.fireEvent(this._window,c);}
;}
else {this.__he=true;qx.event.Registration.fireEvent(this._window,c);}
;}
;}
,isApplicationReady:function(){return this.__he;}
,_initObserver:function(){if(qx.$$domReady||document.readyState==m||document.readyState==c){this.__hc=true;this.__hg();}
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
,_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__hc=true;this.__hg();}
),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__hf){this.__hf=true;try{qx.event.Registration.fireEvent(this._window,g);}
catch(e){throw e;}
finally{qx.core.ObjectRegistry.shutdown();}
;}
;}
)},destruct:function(){this._stopObserver();this._window=null;}
,defer:function(A){qx.event.Registration.addHandler(A);}
});}
)();
(function(){var d="ready",c="shutdown",b="beforeunload",a="qx.core.Init";qx.Class.define(a,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__ha:function(e){var f=this.getApplication();if(f){e.setReturnValue(f.close());}
;}
,__hb:function(){var g=this.getApplication();if(g){g.terminate();}
;}
},defer:function(h){qx.event.Registration.addListener(window,d,h.ready,h);qx.event.Registration.addListener(window,c,h.__hb,h);qx.event.Registration.addListener(window,b,h.__ha,h);}
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
(function(){var j="0",i="qx/static",h="http://",g="https://",f="file://",e="qx.util.AliasManager",d="singleton",c=".",b="static",a="/";qx.Class.define(e,{type:d,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);this.__ds={};this.add(b,i);}
,members:{__ds:null,_preprocess:function(k){var n=this._getDynamic();if(n[k]===false){return k;}
else if(n[k]===undefined){if(k.charAt(0)===a||k.charAt(0)===c||k.indexOf(h)===0||k.indexOf(g)===j||k.indexOf(f)===0){n[k]=false;return k;}
;if(this.__ds[k]){return this.__ds[k];}
;var m=k.substring(0,k.indexOf(a));var l=this.__ds[m];if(l!==undefined){n[k]=l+k.substring(m.length);}
;}
;return k;}
,add:function(o,p){this.__ds[o]=p;var r=this._getDynamic();for(var q in r){if(q.substring(0,q.indexOf(a))===o){r[q]=p+q.substring(o.length);}
;}
;}
,remove:function(s){delete this.__ds[s];}
,resolve:function(t){var u=this._getDynamic();if(t!=null){t=this._preprocess(t);}
;return u[t]||t;}
,getAliases:function(){var v={};for(var w in this.__ds){v[w]=this.__ds[w];}
;return v;}
},destruct:function(){this.__ds=null;}
});}
)();
(function(){var d="event.pointer",c="none",b="qx.html.Decorator",a="absolute";qx.Class.define(b,{extend:qx.html.Element,construct:function(e,f){var g={position:a,top:0,left:0};if(qx.core.Environment.get(d)){g.pointerEvents=c;}
;qx.html.Element.call(this,null,g);this.__gD=e;this.__bV=f||e.toHashCode();this.useMarkup(e.getMarkup());}
,members:{__bV:null,__gD:null,getId:function(){return this.__bV;}
,getDecorator:function(){return this.__gD;}
,resize:function(h,i){this.__gD.resize(this.getDomElement(),h,i);}
,tint:function(j){this.__gD.tint(this.getDomElement(),j);}
,getInsets:function(){return this.__gD.getInsets();}
},destruct:function(){this.__gD=null;}
});}
)();
(function(){var cE="_applyNativeContextMenu",cD="Decorator instances may increase memory usage and ",cC="content",cB="engine.version",cA="_applyBackgroundColor",cz="event.pointer",cy="_applyFocusable",cx=" requires a layout, but no one was defined!",cw="changeShadow",cv="qx.event.type.KeyInput",bF="__hh",bE="createChildControl",bD="browser.documentmode",bC="Unsupported control: ",bB="Invalid left decorator inset detected: ",bA="Font",bz="_applyShadow",by="Invalid layout data: ",bx="Could not add widget to itself: ",bw="_applyEnabled",cL="_applySelectable",cM="Number",cJ="_applyKeepActive",cK="__hi",cH="_applyVisibility",cI="The 'before' widget is not a child of this widget!",cF="Child control '",cG="repeat",cN="qxDraggable",cO="syncAppearance",ce='" while styling ',cd="paddingLeft",cg="_applyDroppable",cf="Wrong 'left' argument. ",ci="protector",ch="#",ck="'Child' must be an instance of qx.ui.core.LayoutItem!",cj="Remove Error: ",cc="qx.event.type.MouseWheel",cb="_applyCursor",n="_applyDraggable",o="__hq",p="At least one child in control ",q="__hm",r="changeTextColor",s="$$widget",t="changeContextMenu",u="paddingTop",v="changeSelectable",w="hideFocus",dd="Invalid top decorator inset detected: ",dc="none",db="__hs",da="outline",dh="The 'after' widget is not a child of this widget!",dg="_applyAppearance",df=" returned an invalid size hint!",de="_applyOpacity",dj="url(",di=")",V="qx.ui.core.Widget",W="minHeight is larger than maxHeight!",T="TabIndex property must be between 1 and 32000",U="_applyFont",ba="cursor",bb="__hu",X="qxDroppable",Y="' already created!",R="__hl",S="changeZIndex",E="changeEnabled",D="Abstract method call: _getContentHeightForWidth()!",G="changeFont",F="_applyDecorator",A="_applyZIndex",z="_applyTextColor",C=' has no themeable property "',B="qx.ui.menu.Menu",y="Invalid right decorator inset detected: ",x="Invalid widget to add: ",bg="_applyToolTipText",bh="The layout of the widget",bi=" is not a child of this widget!",bj="true",bc="widget",bd="Wrong 'top' argument. ",be="changeDecorator",bf="changeBackgroundColor",bk="_applyTabIndex",bl="Invalid bottom decorator inset detected: ",O="changeAppearance",N="__hn",M="shorthand",L="/",K="processing time. Often it is better to lay them out to a ",J="",I="_applyContextMenu",H="container",Q="paddingBottom",P="changeNativeContextMenu",bm="undefined",bn="qx.ui.tooltip.ToolTip",bo="qxKeepActive",bp="_applyKeepFocus",bq="theme file. Hash code of decorator object: ",br="paddingRight",bs="minWidth is larger than maxWidth!",bt="changeLocale",bu="qxKeepFocus",bv="opera",bJ="qx/static/blank.gif",bI="backgroundColor",bH="drag",bG="div",bN="object",bM="disabled",bL="move",bK="dragstart",bP="qx.dynlocale",bO="dragchange",bW="dragend",bX="resize",bU="Decorator",bV="zIndex",bS="opacity",bT="This widget has no children!",bQ="default",bR="Color",bY="Widget is not focusable!",ca="qxType",co="changeToolTipText",cn="beforeContextmenuOpen",cq="focused",cp="changeVisibility",cs="hovered",cr="qx.event.type.KeySequence",cu="DOM element is not yet created!",ct="absolute",cm="_applyPadding",cl="qx.event.type.Event",cV="on",cW="mshtml",cX="hidden",cY="contextmenu",cR="String",cS="tabIndex",cT="qx.event.type.Data",cU="engine.name",cP="excluded",cQ="qx.event.type.Focus",m="Integer",k="qx.event.type.Touch",j="visible",h="qx.event.type.Drag",g="qx.event.type.Mouse",f="Boolean",d="qx.debug",c="px";qx.Class.define(V,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);this.__hh=this._createContainerElement();this.__hi=this.__ht();this.__hh.add(this.__hi);this.initFocusable();this.initSelectable();this.initNativeContextMenu();}
,events:{appear:cl,disappear:cl,createChildControl:cT,resize:cT,move:cT,syncAppearance:cT,mousemove:g,mouseover:g,mouseout:g,mousedown:g,mouseup:g,click:g,dblclick:g,contextmenu:g,beforeContextmenuOpen:cT,mousewheel:cc,touchstart:k,touchend:k,touchmove:k,touchcancel:k,tap:k,swipe:k,keyup:cr,keydown:cr,keypress:cr,keyinput:cv,focus:cQ,blur:cQ,focusin:cQ,focusout:cQ,activate:cQ,deactivate:cQ,capture:cl,losecapture:cl,drop:h,dragleave:h,dragover:h,drag:h,dragstart:h,dragend:h,dragchange:h,droprequest:h},properties:{paddingTop:{check:m,init:0,apply:cm,themeable:true},paddingRight:{check:m,init:0,apply:cm,themeable:true},paddingBottom:{check:m,init:0,apply:cm,themeable:true},paddingLeft:{check:m,init:0,apply:cm,themeable:true},padding:{group:[u,br,Q,cd],mode:M,themeable:true},zIndex:{nullable:true,init:null,apply:A,event:S,check:m,themeable:true},decorator:{nullable:true,init:null,apply:F,event:be,check:bU,themeable:true},shadow:{nullable:true,init:null,apply:bz,event:cw,check:bU,themeable:true},backgroundColor:{nullable:true,check:bR,apply:cA,event:bf,themeable:true},textColor:{nullable:true,check:bR,apply:z,event:r,themeable:true,inheritable:true},font:{nullable:true,apply:U,check:bA,event:G,themeable:true,inheritable:true,dereference:true},opacity:{check:cM,apply:de,themeable:true,nullable:true,init:null},cursor:{check:cR,apply:cb,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bn,nullable:true},toolTipText:{check:cR,nullable:true,event:co,apply:bg},toolTipIcon:{check:cR,nullable:true,event:co},blockToolTip:{check:f,init:false},visibility:{check:[j,cX,cP],init:j,apply:cH,event:cp},enabled:{init:true,check:f,inheritable:true,apply:bw,event:E},anonymous:{init:false,check:f},tabIndex:{check:m,nullable:true,apply:bk},focusable:{check:f,init:false,apply:cy},keepFocus:{check:f,init:false,apply:bp},keepActive:{check:f,init:false,apply:cJ},draggable:{check:f,init:false,apply:n},droppable:{check:f,init:false,apply:cg},selectable:{check:f,init:false,event:v,apply:cL},contextMenu:{check:B,apply:I,nullable:true,event:t},nativeContextMenu:{check:f,init:false,themeable:true,event:P,apply:cE},appearance:{check:cR,init:bc,apply:dg,event:O}},statics:{DEBUG:false,getWidgetByElement:function(dk,dl){while(dk){var dm=dk.$$widget;if(dm!=null){var dn=qx.core.ObjectRegistry.fromHashCode(dm);if(!dl||!dn.getAnonymous()){return dn;}
;}
;try{dk=dk.parentNode;}
catch(e){return null;}
;}
;return null;}
,contains:function(parent,dp){while(dp){if(parent==dp){return true;}
;dp=dp.getLayoutParent();}
;return false;}
,__hj:new qx.ui.core.DecoratorFactory(),__hk:new qx.ui.core.DecoratorFactory()},members:{__hh:null,__hi:null,__hl:null,__hm:null,__hn:null,__ho:null,__hp:null,__hq:null,_getLayout:function(){return this.__hq;}
,_setLayout:function(dq){if(qx.core.Environment.get(d)){if(dq){this.assertInstance(dq,qx.ui.layout.Abstract);}
;}
;if(this.__hq){this.__hq.connectToWidget(null);}
;if(dq){dq.connectToWidget(this);}
;this.__hq=dq;qx.ui.core.queue.Layout.add(this);}
,setLayoutParent:function(parent){if(this.$$parent===parent){return;}
;var dr=this.getContainerElement();if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(dr);}
;this.$$parent=parent||null;if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(dr);}
;this.$$refreshInheritables();qx.ui.core.queue.Visibility.add(this);}
,_updateInsets:null,__hr:function(a,b){if(a==b){return false;}
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
;if(dG.size){var dF=this.__hn;if(dF){dF.setStyles({width:dw+c,height:dx+c});}
;}
;if(dG.size||this._updateInsets){if(this.__hl){this.__hl.resize(dw,dx);}
;}
;if(dG.size){if(this.__hm){var dy=this.__hm.getInsets();var dC=dw+dy.left+dy.right;var dA=dx+dy.top+dy.bottom;this.__hm.resize(dC,dA);}
;}
;if(dD||dG.local||dG.margin){if(this.__hq&&this.hasLayoutChildren()){this.__hq.renderLayout(innerWidth,innerHeight);}
else if(this.hasLayoutChildren()){throw new Error(p+this._findTopControl()+cx);}
;}
;if(dG.position&&this.hasListener(bL)){this.fireDataEvent(bL,this.getBounds());}
;if(dG.size&&this.hasListener(bX)){this.fireDataEvent(bX,this.getBounds());}
;delete this._updateInsets;return dG;}
,__hs:null,clearSeparators:function(){var dJ=this.__hs;if(!dJ){return;}
;var dK=qx.ui.core.Widget.__hj;var content=this.getContentElement();var dI;for(var i=0,l=dJ.length;i<l;i++){dI=dJ[i];dK.poolDecorator(dI);content.remove(dI);}
;dJ.length=0;}
,renderSeparator:function(dL,dM){var dO=qx.ui.core.Widget.__hj.getDecoratorElement(dL);this.getContentElement().add(dO);dO.resize(dM.width,dM.height);var dN=dO.getDomElement();if(dN){dN.style.top=dM.top+c;dN.style.left=dM.left+c;}
else {dO.setStyles({left:dM.left+c,top:dM.top+c});}
;if(!this.__hs){this.__hs=[dO];}
else {this.__hs.push(dO);}
;}
,_computeSizeHint:function(){var dV=this.getWidth();var dU=this.getMinWidth();var dQ=this.getMaxWidth();var dT=this.getHeight();var dR=this.getMinHeight();var dS=this.getMaxHeight();if(qx.core.Environment.get(d)){if(dU!==null&&dQ!==null){this.assert(dU<=dQ,bs);}
;if(dR!==null&&dS!==null){this.assert(dR<=dS,W);}
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
,invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);if(this.__hq){this.__hq.invalidateLayoutCache();}
;}
,_getContentHint:function(){var eb=this.__hq;if(eb){if(this.hasLayoutChildren()){var ec=eb.getSizeHint();if(qx.core.Environment.get(d)){var ea=bh+this.toString()+df;this.assertInteger(ec.width,cf+ea);this.assertInteger(ec.height,bd+ea);}
;return ec;}
else {return {width:0,height:0};}
;}
else {return {width:100,height:50};}
;}
,_getHeightForWidth:function(ed){var eh=this.getInsets();var ek=eh.left+eh.right;var ej=eh.top+eh.bottom;var ei=ed-ek;var ef=this._getLayout();if(ef&&ef.hasHeightForWidth()){var ee=ef.getHeightForWidth(ed);}
else {ee=this._getContentHeightForWidth(ei);}
;var eg=ee+ej;return eg;}
,_getContentHeightForWidth:function(em){throw new Error(D);}
,getInsets:function(){var top=this.getPaddingTop();var eo=this.getPaddingRight();var eq=this.getPaddingBottom();var ep=this.getPaddingLeft();if(this.__hl){var en=this.__hl.getInsets();if(qx.core.Environment.get(d)){this.assertNumber(en.top,dd+en.top);this.assertNumber(en.right,y+en.right);this.assertNumber(en.bottom,bl+en.bottom);this.assertNumber(en.left,bB+en.left);}
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
,_createContainerElement:function(){var ev={"$$widget":this.toHashCode()};if(qx.core.Environment.get(d)){ev.qxType=H;ev.qxClass=this.classname;}
;var eu={zIndex:0,position:ct};return new qx.html.Element(bG,eu,ev);}
,__ht:function(){var ew=this._createContentElement();if(qx.core.Environment.get(d)){ew.setAttribute(ca,cC);}
;ew.setStyles({"position":ct,"zIndex":10});return ew;}
,_createContentElement:function(){return new qx.html.Element(bG,{overflowX:cX,overflowY:cX});}
,getContainerElement:function(){return this.__hh;}
,getContentElement:function(){return this.__hi;}
,getDecoratorElement:function(){return this.__hl||null;}
,getShadowElement:function(){return this.__hm||null;}
,__hu:null,getLayoutChildren:function(){var ey=this.__hu;if(!ey){return this.__hv;}
;var ez;for(var i=0,l=ey.length;i<l;i++){var ex=ey[i];if(ex.hasUserBounds()||ex.isExcluded()){if(ez==null){ez=ey.concat();}
;qx.lang.Array.remove(ez,ex);}
;}
;return ez||ey;}
,scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);}
,invalidateLayoutChildren:function(){var eA=this.__hq;if(eA){eA.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);}
,hasLayoutChildren:function(){var eB=this.__hu;if(!eB){return false;}
;var eC;for(var i=0,l=eB.length;i<l;i++){eC=eB[i];if(!eC.hasUserBounds()&&!eC.isExcluded()){return true;}
;}
;return false;}
,getChildrenContainer:function(){return this;}
,__hv:[],_getChildren:function(){return this.__hu||this.__hv;}
,_indexOf:function(eD){var eE=this.__hu;if(!eE){return -1;}
;return eE.indexOf(eD);}
,_hasChildren:function(){var eF=this.__hu;return eF!=null&&(!!eF[0]);}
,addChildrenToQueue:function(eG){var eH=this.__hu;if(!eH){return;}
;var eI;for(var i=0,l=eH.length;i<l;i++){eI=eH[i];eG.push(eI);eI.addChildrenToQueue(eG);}
;}
,_add:function(eJ,eK){if(qx.core.Environment.get(d)){this.assertInstance(eJ,qx.ui.core.LayoutItem.constructor,ck);}
;if(eJ.getLayoutParent()==this){qx.lang.Array.remove(this.__hu,eJ);}
;if(this.__hu){this.__hu.push(eJ);}
else {this.__hu=[eJ];}
;this.__hw(eJ,eK);}
,_addAt:function(eL,eM,eN){if(!this.__hu){this.__hu=[];}
;if(eL.getLayoutParent()==this){qx.lang.Array.remove(this.__hu,eL);}
;var eO=this.__hu[eM];if(eO===eL){eL.setLayoutProperties(eN);}
;if(eO){qx.lang.Array.insertBefore(this.__hu,eL,eO);}
else {this.__hu.push(eL);}
;this.__hw(eL,eN);}
,_addBefore:function(eP,eQ,eR){if(qx.core.Environment.get(d)){this.assertInArray(eQ,this._getChildren(),cI);}
;if(eP==eQ){return;}
;if(!this.__hu){this.__hu=[];}
;if(eP.getLayoutParent()==this){qx.lang.Array.remove(this.__hu,eP);}
;qx.lang.Array.insertBefore(this.__hu,eP,eQ);this.__hw(eP,eR);}
,_addAfter:function(eS,eT,eU){if(qx.core.Environment.get(d)){this.assertInArray(eT,this._getChildren(),dh);}
;if(eS==eT){return;}
;if(!this.__hu){this.__hu=[];}
;if(eS.getLayoutParent()==this){qx.lang.Array.remove(this.__hu,eS);}
;qx.lang.Array.insertAfter(this.__hu,eS,eT);this.__hw(eS,eU);}
,_remove:function(eV){if(!this.__hu){throw new Error(bT);}
;qx.lang.Array.remove(this.__hu,eV);this.__hx(eV);}
,_removeAt:function(eW){if(!this.__hu){throw new Error(bT);}
;var eX=this.__hu[eW];qx.lang.Array.removeAt(this.__hu,eW);this.__hx(eX);return eX;}
,_removeAll:function(){if(!this.__hu){return [];}
;var eY=this.__hu.concat();this.__hu.length=0;for(var i=eY.length-1;i>=0;i--){this.__hx(eY[i]);}
;qx.ui.core.queue.Layout.add(this);return eY;}
,_afterAddChild:null,_afterRemoveChild:null,__hw:function(fa,fb){if(qx.core.Environment.get(d)){this.assertInstance(fa,qx.ui.core.LayoutItem,x+fa);this.assertNotIdentical(fa,this,bx+fa);if(fb!=null){this.assertType(fb,bN,by+fb);}
;}
;var parent=fa.getLayoutParent();if(parent&&parent!=this){parent._remove(fa);}
;fa.setLayoutParent(this);if(fb){fa.setLayoutProperties(fb);}
else {this.updateLayoutProperties();}
;if(this._afterAddChild){this._afterAddChild(fa);}
;}
,__hx:function(fc){if(qx.core.Environment.get(d)){this.assertNotUndefined(fc);}
;if(fc.getLayoutParent()!==this){throw new Error(cj+fc+bi);}
;fc.setLayoutParent(null);if(this.__hq){this.__hq.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);if(this._afterRemoveChild){this._afterRemoveChild(fc);}
;}
,capture:function(fd){this.getContainerElement().capture(fd);}
,releaseCapture:function(){this.getContainerElement().releaseCapture();}
,_applyPadding:function(fe,ff,name){this._updateInsets=true;qx.ui.core.queue.Layout.add(this);}
,_createProtectorElement:function(){if(this.__hn){return;}
;var fg=this.__hn=new qx.html.Element;if(qx.core.Environment.get(d)){fg.setAttribute(ca,ci);}
;fg.setStyles({position:ct,top:0,left:0,zIndex:7});var fh=this.getBounds();if(fh){this.__hn.setStyles({width:fh.width+c,height:fh.height+c});}
;if((qx.core.Environment.get(cU)==cW)){fg.setStyles({backgroundImage:dj+qx.util.ResourceManager.getInstance().toUri(bJ)+di,backgroundRepeat:cG});}
;this.getContainerElement().add(fg);}
,_applyDecorator:function(fi,fj){if(qx.core.Environment.get(d)){if(fi&&typeof fi===bN){if(qx.ui.core.Widget.DEBUG){this.warn(cD+K+bq+fi);}
;}
;}
;var fm=qx.ui.core.Widget.__hj;var fk=this.getContainerElement();if(!this.__hn&&!qx.core.Environment.get(cz)){this._createProtectorElement();}
;if(fj){fk.remove(this.__hl);fm.poolDecorator(this.__hl);}
;if(fi){var fl=this.__hl=fm.getDecoratorElement(fi);fl.setStyle(bV,5);fk.add(fl);}
else {delete this.__hl;}
;this._applyBackgroundColor(this.getBackgroundColor());if(this.__hr(fj,fi)){this._updateInsets=true;qx.ui.core.queue.Layout.add(this);}
else if(fi){var fn=this.getBounds();if(fn){fl.resize(fn.width,fn.height);this.__hn&&this.__hn.setStyles({width:fn.width+c,height:fn.height+c});}
;}
;}
,_applyShadow:function(fo,fp){var fx=qx.ui.core.Widget.__hk;var fr=this.getContainerElement();if(fp){fr.remove(this.__hm);fx.poolDecorator(this.__hm);}
;if(fo){var ft=this.__hm=fx.getDecoratorElement(fo);fr.add(ft);var fv=ft.getInsets();ft.setStyles({left:fv.left+c,top:fv.top+c});var fu=this.getBounds();if(fu){var fs=fu.width+fv.left+fv.right;var fq=fu.height+fv.top+fv.bottom;if(fp){var fw=fx.getDecoratorElement(fp).getInsets();fs=fs-fw.left-fw.right;fq=fq-fw.top-fw.bottom;}
;ft.resize(fs,fq);}
;ft.tint(null);}
else {delete this.__hm;}
;}
,_applyToolTipText:function(fy,fz){if(qx.core.Environment.get(bP)){if(this.__hp){return;}
;var fA=qx.locale.Manager.getInstance();this.__hp=fA.addListener(bt,function(){var fB=this.getToolTipText();if(fB&&fB.translate){this.setToolTipText(fB.translate());}
;}
,this);}
;}
,_applyTextColor:function(fC,fD){}
,_applyZIndex:function(fE,fF){this.getContainerElement().setStyle(bV,fE==null?0:fE);}
,_applyVisibility:function(fG,fH){var fI=this.getContainerElement();if(fG===j){fI.show();}
else {fI.hide();}
;var parent=this.$$parent;if(parent&&(fH==null||fG==null||fH===cP||fG===cP)){parent.invalidateLayoutChildren();}
;qx.ui.core.queue.Visibility.add(this);}
,_applyOpacity:function(fJ,fK){this.getContainerElement().setStyle(bS,fJ==1?null:fJ);if((qx.core.Environment.get(cU)==cW)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var fL=(fJ==1||fJ==null)?null:0.99;this.getContentElement().setStyle(bS,fL);}
;}
;}
,_applyCursor:function(fM,fN){if(fM==null&&!this.isSelectable()){fM=bQ;}
;this.getContainerElement().setStyle(ba,fM,qx.core.Environment.get(cU)==bv);}
,_applyBackgroundColor:function(fO,fP){var fQ=this.getBackgroundColor();var fS=this.getContainerElement();if(this.__hl){this.__hl.tint(fQ);fS.setStyle(bI,null);}
else {var fR=qx.theme.manager.Color.getInstance().resolve(fQ);fS.setStyle(bI,fR);}
;}
,_applyFont:function(fT,fU){}
,__hy:null,$$stateChanges:null,_forwardStates:null,hasState:function(fV){var fW=this.__hy;return !!fW&&!!fW[fV];}
,addState:function(fX){var fY=this.__hy;if(!fY){fY=this.__hy={};}
;if(fY[fX]){return;}
;this.__hy[fX]=true;if(fX===cs){this.syncAppearance();}
else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var gc=this.__hB;if(forward&&forward[fX]&&gc){var ga;for(var gb in gc){ga=gc[gb];if(ga instanceof qx.ui.core.Widget){gc[gb].addState(fX);}
;}
;}
;}
,removeState:function(gd){var ge=this.__hy;if(!ge||!ge[gd]){return;}
;delete this.__hy[gd];if(gd===cs){this.syncAppearance();}
else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var gh=this.__hB;if(forward&&forward[gd]&&gh){for(var gg in gh){var gf=gh[gg];if(gf instanceof qx.ui.core.Widget){gf.removeState(gd);}
;}
;}
;}
,replaceState:function(gi,gj){var gk=this.__hy;if(!gk){gk=this.__hy={};}
;if(!gk[gj]){gk[gj]=true;}
;if(gk[gi]){delete gk[gi];}
;if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var gn=this.__hB;if(forward&&forward[gj]&&gn){for(var gm in gn){var gl=gn[gm];if(gl instanceof qx.ui.core.Widget){gl.replaceState(gi,gj);}
;}
;}
;}
,__hz:null,__hA:null,syncAppearance:function(){var gs=this.__hy;var gr=this.__hz;var gt=qx.theme.manager.Appearance.getInstance();var gp=qx.core.Property.$$method.setThemed;var gx=qx.core.Property.$$method.resetThemed;if(this.__hA){delete this.__hA;if(gr){var go=gt.styleFrom(gr,gs,null,this.getAppearance());gr=null;}
;}
;if(!gr){var gq=this;var gw=[];do {gw.push(gq.$$subcontrol||gq.getAppearance());}
while(gq=gq.$$subparent);gr=gw.reverse().join(L).replace(/#[0-9]+/g,J);this.__hz=gr;}
;var gu=gt.styleFrom(gr,gs,null,this.getAppearance());if(gu){if(go){for(var gv in go){if(gu[gv]===undefined){this[gx[gv]]();}
;}
;}
;if(qx.core.Environment.get(d)){for(var gv in gu){if(!this[gp[gv]]){throw new Error(this.classname+C+gv+ce+gr);}
;}
;}
;for(var gv in gu){gu[gv]===undefined?this[gx[gv]]():this[gp[gv]](gu[gv]);}
;}
else if(go){for(var gv in go){this[gx[gv]]();}
;}
;this.fireDataEvent(cO,this.__hy);}
,_applyAppearance:function(gy,gz){this.updateAppearance();}
,checkAppearanceNeeds:function(){if(!this.__ho){qx.ui.core.queue.Appearance.add(this);this.__ho=true;}
else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);delete this.$$stateChanges;}
;}
,updateAppearance:function(){this.__hA=true;qx.ui.core.queue.Appearance.add(this);var gC=this.__hB;if(gC){var gA;for(var gB in gC){gA=gC[gB];if(gA instanceof qx.ui.core.Widget){gA.updateAppearance();}
;}
;}
;}
,syncWidget:function(gD){}
,getEventTarget:function(){var gE=this;while(gE.getAnonymous()){gE=gE.getLayoutParent();if(!gE){return null;}
;}
;return gE;}
,getFocusTarget:function(){var gF=this;if(!gF.getEnabled()){return null;}
;while(gF.getAnonymous()||!gF.getFocusable()){gF=gF.getLayoutParent();if(!gF||!gF.getEnabled()){return null;}
;}
;return gF;}
,getFocusElement:function(){return this.getContainerElement();}
,isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();}
,_applyFocusable:function(gG,gH){var gI=this.getFocusElement();if(gG){var gJ=this.getTabIndex();if(gJ==null){gJ=1;}
;gI.setAttribute(cS,gJ);if((qx.core.Environment.get(cU)==cW&&parseFloat(qx.core.Environment.get(cB))<8)||(qx.core.Environment.get(cU)==cW&&qx.core.Environment.get(bD)<8)){gI.setAttribute(w,bj);}
else {gI.setStyle(da,dc);}
;}
else {if(gI.isNativelyFocusable()){gI.setAttribute(cS,-1);}
else if(gH){gI.setAttribute(cS,null);}
;}
;}
,_applyKeepFocus:function(gK){var gL=this.getFocusElement();gL.setAttribute(bu,gK?cV:null);}
,_applyKeepActive:function(gM){var gN=this.getContainerElement();gN.setAttribute(bo,gM?cV:null);}
,_applyTabIndex:function(gO){if(gO==null){gO=1;}
else if(gO<1||gO>32000){throw new Error(T);}
;if(this.getFocusable()&&gO!=null){this.getFocusElement().setAttribute(cS,gO);}
;}
,_applySelectable:function(gP,gQ){if(gQ!==null){this._applyCursor(this.getCursor());}
;this.getContentElement().setSelectable(gP);}
,_applyEnabled:function(gR,gS){if(gR===false){this.addState(bM);this.removeState(cs);if(this.isFocusable()){this.removeState(cq);this._applyFocusable(false,true);}
;if(this.isDraggable()){this._applyDraggable(false,true);}
;if(this.isDroppable()){this._applyDroppable(false,true);}
;}
else {this.removeState(bM);if(this.isFocusable()){this._applyFocusable(true,false);}
;if(this.isDraggable()){this._applyDraggable(true,false);}
;if(this.isDroppable()){this._applyDroppable(true,false);}
;}
;}
,_applyNativeContextMenu:function(gT,gU,name){}
,_applyContextMenu:function(gV,gW){if(gW){gW.removeState(cY);if(gW.getOpener()==this){gW.resetOpener();}
;if(!gV){this.removeListener(cY,this._onContextMenuOpen);gW.removeListener(cp,this._onBeforeContextMenuOpen,this);}
;}
;if(gV){gV.setOpener(this);gV.addState(cY);if(!gW){this.addListener(cY,this._onContextMenuOpen);gV.addListener(cp,this._onBeforeContextMenuOpen,this);}
;}
;}
,_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);e.stop();}
,_onBeforeContextMenuOpen:function(e){if(e.getData()==j&&this.hasListener(cn)){this.fireDataEvent(cn,e);}
;}
,_onStopEvent:function(e){e.stopPropagation();}
,_applyDraggable:function(gX,gY){if(!this.isEnabled()&&gX===true){gX=false;}
;qx.ui.core.DragDropCursor.getInstance();if(gX){this.addListener(bK,this._onDragStart);this.addListener(bH,this._onDrag);this.addListener(bW,this._onDragEnd);this.addListener(bO,this._onDragChange);}
else {this.removeListener(bK,this._onDragStart);this.removeListener(bH,this._onDrag);this.removeListener(bW,this._onDragEnd);this.removeListener(bO,this._onDragChange);}
;this.getContainerElement().setAttribute(cN,gX?cV:null);}
,_applyDroppable:function(ha,hb){if(!this.isEnabled()&&ha===true){ha=false;}
;this.getContainerElement().setAttribute(X,ha?cV:null);}
,_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);this.getApplicationRoot().setGlobalCursor(bQ);}
,_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);}
,_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);this.getApplicationRoot().resetGlobalCursor();}
,_onDragChange:function(e){var hc=qx.ui.core.DragDropCursor.getInstance();var hd=e.getCurrentAction();hd?hc.setAction(hd):hc.resetAction();}
,visualizeFocus:function(){this.addState(cq);}
,visualizeBlur:function(){this.removeState(cq);}
,scrollChildIntoView:function(he,hf,hg,hh){hh=typeof hh==bm?true:hh;var hi=qx.ui.core.queue.Layout;var parent;if(hh){hh=!hi.isScheduled(he);parent=he.getLayoutParent();if(hh&&parent){hh=!hi.isScheduled(parent);if(hh){parent.getChildren().forEach(function(hj){hh=hh&&!hi.isScheduled(hj);}
);}
;}
;}
;this.scrollChildIntoViewX(he,hf,hh);this.scrollChildIntoViewY(he,hg,hh);}
,scrollChildIntoViewX:function(hk,hl,hm){this.getContentElement().scrollChildIntoViewX(hk.getContainerElement(),hl,hm);}
,scrollChildIntoViewY:function(hn,ho,hp){this.getContentElement().scrollChildIntoViewY(hn.getContainerElement(),ho,hp);}
,focus:function(){if(this.isFocusable()){this.getFocusElement().focus();}
else {throw new Error(bY);}
;}
,blur:function(){if(this.isFocusable()){this.getFocusElement().blur();}
else {throw new Error(bY);}
;}
,activate:function(){this.getContainerElement().activate();}
,deactivate:function(){this.getContainerElement().deactivate();}
,tabFocus:function(){this.getFocusElement().focus();}
,hasChildControl:function(hq){if(!this.__hB){return false;}
;return !!this.__hB[hq];}
,__hB:null,_getCreatedChildControls:function(){return this.__hB;}
,getChildControl:function(hr,hs){if(!this.__hB){if(hs){return null;}
;this.__hB={};}
;var ht=this.__hB[hr];if(ht){return ht;}
;if(hs===true){return null;}
;return this._createChildControl(hr);}
,_showChildControl:function(hu){var hv=this.getChildControl(hu);hv.show();return hv;}
,_excludeChildControl:function(hw){var hx=this.getChildControl(hw,true);if(hx){hx.exclude();}
;}
,_isChildControlVisible:function(hy){var hz=this.getChildControl(hy,true);if(hz){return hz.isVisible();}
;return false;}
,_createChildControl:function(hA){if(!this.__hB){this.__hB={};}
else if(this.__hB[hA]){throw new Error(cF+hA+Y);}
;var hE=hA.indexOf(ch);if(hE==-1){var hB=this._createChildControlImpl(hA);}
else {var hB=this._createChildControlImpl(hA.substring(0,hE),hA.substring(hE+1,hA.length));}
;if(!hB){throw new Error(bC+hA);}
;hB.$$subcontrol=hA;hB.$$subparent=this;var hC=this.__hy;var forward=this._forwardStates;if(hC&&forward&&hB instanceof qx.ui.core.Widget){for(var hD in hC){if(forward[hD]){hB.addState(hD);}
;}
;}
;this.fireDataEvent(bE,hB);return this.__hB[hA]=hB;}
,_createChildControlImpl:function(hF,hG){return null;}
,_disposeChildControls:function(){var hK=this.__hB;if(!hK){return;}
;var hI=qx.ui.core.Widget;for(var hJ in hK){var hH=hK[hJ];if(!hI.contains(this,hH)){hH.destroy();}
else {hH.dispose();}
;}
;delete this.__hB;}
,_findTopControl:function(){var hL=this;while(hL){if(!hL.$$subparent){return hL;}
;hL=hL.$$subparent;}
;return null;}
,getContainerLocation:function(hM){var hN=this.getContainerElement().getDomElement();return hN?qx.bom.element.Location.get(hN,hM):null;}
,getContentLocation:function(hO){var hP=this.getContentElement().getDomElement();return hP?qx.bom.element.Location.get(hP,hO):null;}
,setDomLeft:function(hQ){var hR=this.getContainerElement().getDomElement();if(hR){hR.style.left=hQ+c;}
else {throw new Error(cu);}
;}
,setDomTop:function(hS){var hT=this.getContainerElement().getDomElement();if(hT){hT.style.top=hS+c;}
else {throw new Error(cu);}
;}
,setDomPosition:function(hU,top){var hV=this.getContainerElement().getDomElement();if(hV){hV.style.left=hU+c;hV.style.top=top+c;}
else {throw new Error(cu);}
;}
,destroy:function(){if(this.$$disposed){return;}
;var parent=this.$$parent;if(parent){parent._remove(this);}
;qx.ui.core.queue.Dispose.add(this);}
,clone:function(){var hW=qx.ui.core.LayoutItem.prototype.clone.call(this);if(this.getChildren){var hX=this.getChildren();for(var i=0,l=hX.length;i<l;i++){hW.add(hX[i].clone());}
;}
;return hW;}
},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(bP)){if(this.__hp){qx.locale.Manager.getInstance().removeListenerById(this.__hp);}
;}
;this.getContainerElement().setAttribute(s,null,true);this._disposeChildControls();qx.ui.core.queue.Appearance.remove(this);qx.ui.core.queue.Layout.remove(this);qx.ui.core.queue.Visibility.remove(this);qx.ui.core.queue.Widget.remove(this);}
;if(this.getContextMenu()){this.setContextMenu(null);}
;if(!qx.core.ObjectRegistry.inShutDown){var ia=qx.ui.core.Widget;var hY=this.getContainerElement();if(this.__hl){hY.remove(this.__hl);ia.__hj.poolDecorator(this.__hl);}
;if(this.__hm){hY.remove(this.__hm);ia.__hk.poolDecorator(this.__hm);}
;this.clearSeparators();this.__hl=this.__hm=this.__hs=null;}
else {this._disposeArray(db);this._disposeObjects(R,q);}
;this._disposeArray(bb);this.__hy=this.__hB=null;this._disposeObjects(o,bF,cK,N);}
});}
)();
(function(){var f="qx.ui.core.EventHandler",e="activate",d="blur",c="focus",b="input",a="load";qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);this.__dz=qx.event.Registration.getManager(window);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__dz:null,__hC:{focusin:1,focusout:1,focus:1,blur:1},__hD:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;}
,_dispatchEvent:function(j){var p=j.getTarget();var o=qx.ui.core.Widget.getWidgetByElement(p);var q=false;while(o&&o.isAnonymous()){var q=true;o=o.getLayoutParent();}
;if(o&&q&&j.getType()==e){o.getContainerElement().activate();}
;if(this.__hC[j.getType()]){o=o&&o.getFocusTarget();if(!o){return;}
;}
;if(j.getRelatedTarget){var x=j.getRelatedTarget();var w=qx.ui.core.Widget.getWidgetByElement(x);while(w&&w.isAnonymous()){w=w.getLayoutParent();}
;if(w){if(this.__hC[j.getType()]){w=w.getFocusTarget();}
;if(w===o){return;}
;}
;}
;var s=j.getCurrentTarget();var u=qx.ui.core.Widget.getWidgetByElement(s);if(!u||u.isAnonymous()){return;}
;if(this.__hC[j.getType()]){u=u.getFocusTarget();}
;var v=j.getType();if(!u||!(u.isEnabled()||this.__hD[v])){return;}
;var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;var r=this.__dz.getListeners(u,v,k);if(!r||r.length===0){return;}
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
},destruct:function(){this.__dz=null;}
,defer:function(H){qx.event.Registration.addHandler(H);}
});}
)();
(function(){var f="Missing renderLayout() implementation!",e="abstract",d="Missing getHeightForWidth() implementation!",c="qx.debug",b="It is not possible to manually set the connected widget.",a="qx.ui.layout.Abstract";qx.Class.define(a,{type:e,extend:qx.core.Object,members:{__gH:null,_invalidChildrenCache:null,__kq:null,invalidateLayoutCache:function(){this.__gH=null;}
,renderLayout:function(g,h){this.warn(f);}
,getSizeHint:function(){if(this.__gH){return this.__gH;}
;return this.__gH=this._computeSizeHint();}
,hasHeightForWidth:function(){return false;}
,getHeightForWidth:function(i){this.warn(d);return null;}
,_computeSizeHint:function(){return null;}
,invalidateChildrenCache:function(){this._invalidChildrenCache=true;}
,verifyLayoutProperty:qx.core.Environment.select(c,{"true":function(j,name,k){}
,"false":null}),_clearSeparators:function(){var l=this.__kq;if(l instanceof qx.ui.core.LayoutItem){l.clearSeparators();}
;}
,_renderSeparator:function(m,n){this.__kq.renderSeparator(m,n);}
,connectToWidget:function(o){if(o&&this.__kq){throw new Error(b);}
;this.__kq=o;this.invalidateChildrenCache();}
,_getWidget:function(){return this.__kq;}
,_applyLayoutChange:function(){if(this.__kq){this.__kq.scheduleLayoutUpdate();}
;}
,_getLayoutChildren:function(){return this.__kq.getLayoutChildren();}
},destruct:function(){this.__kq=this.__gH=null;}
});}
)();
(function(){var u='indexOf',t='slice',s='concat',r='toLocaleLowerCase',q="qx.type.BaseString",p='match',o="qx.debug",n='search',m='replace',k='toLowerCase',d='charCodeAt',j='split',g='substring',c='lastIndexOf',b='substr',f='toLocaleUpperCase',e='toUpperCase',h='charAt',a="";qx.Class.define(q,{extend:Object,construct:function(v){var v=v||a;this.__hG=v;this.length=v.length;}
,members:{$$isString:true,length:0,__hG:null,toString:function(){return this.__hG;}
,charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);}
,toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(w,x){return qx.core.Object.prototype.base.apply(this,arguments);}
},defer:function(y,z){if(qx.core.Environment.get(o)){qx.Class.include(y,qx.core.MAssert);}
;var A=[h,d,s,u,c,p,m,n,t,j,b,g,k,e,r,f];z.valueOf=z.toString;if(new y(a).valueOf()==null){delete z.valueOf;}
;for(var i=0,l=A.length;i<l;i++){z[A[i]]=String.prototype[A[i]];}
;}
});}
)();
(function(){var a="qx.locale.LocalizedString";qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);this.__hH=c;this.__hI=d;}
,members:{__hH:null,__hI:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hH,this.__hI);}
}});}
)();
(function(){var o="locale",n="_applyLocale",m="changeLocale",l="Locale: ",k="C",j="locale.variant",h="qx.dynlocale",g=" not available.",f="qx.locale.Manager",e="String",b="singleton",d="",c="qx.debug",a="_";qx.Class.define(f,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__hJ=qx.$$translations||{};this.__hK=qx.$$locales||{};var p=qx.core.Environment.get(o);var q=qx.core.Environment.get(j);if(q!==d){p+=a+q;}
;this.__hL=p;this.setLocale(p||this.__hM);}
,statics:{tr:function(r,s){var t=qx.lang.Array.fromArguments(arguments);t.splice(0,1);return qx.locale.Manager.getInstance().translate(r,t);}
,trn:function(u,v,w,x){var y=qx.lang.Array.fromArguments(arguments);y.splice(0,3);if(w!=1){return qx.locale.Manager.getInstance().translate(v,y);}
else {return qx.locale.Manager.getInstance().translate(u,y);}
;}
,trc:function(z,A,B){var C=qx.lang.Array.fromArguments(arguments);C.splice(0,2);return qx.locale.Manager.getInstance().translate(A,C);}
,marktr:function(D){return D;}
},properties:{locale:{check:e,nullable:true,apply:n,event:m}},members:{__hM:k,__hN:null,__hO:null,__hJ:null,__hK:null,__hL:null,getLanguage:function(){return this.__hO;}
,getTerritory:function(){return this.getLocale().split(a)[1]||d;}
,getAvailableLocales:function(E){var G=[];for(var F in this.__hK){if(F!=this.__hM){if(this.__hK[F]===null&&!E){continue;}
;G.push(F);}
;}
;return G;}
,__hP:function(H){var J;if(H==null){return null;}
;var I=H.indexOf(a);if(I==-1){J=H;}
else {J=H.substring(0,I);}
;return J;}
,_applyLocale:function(K,L){if(qx.core.Environment.get(c)){if(!(K in this.__hK||K==this.__hL)){qx.log.Logger.warn(l+K+g);}
;}
;this.__hN=K;this.__hO=this.__hP(K);}
,addTranslation:function(M,N){var O=this.__hJ;if(O[M]){for(var P in N){O[M][P]=N[P];}
;}
else {O[M]=N;}
;}
,addLocale:function(Q,R){var S=this.__hK;if(S[Q]){for(var T in R){S[Q][T]=R[T];}
;}
else {S[Q]=R;}
;}
,translate:function(U,V,W){var X=this.__hJ;return this.__hQ(X,U,V,W);}
,localize:function(Y,ba,bb){var bc=this.__hK;return this.__hQ(bc,Y,ba,bb);}
,__hQ:function(bd,be,bf,bg){if(qx.core.Environment.get(c)){this.assertObject(bd);this.assertString(be);this.assertArray(bf);}
;var bh;if(!bd){return be;}
;if(bg){var bj=this.__hP(bg);}
else {bg=this.__hN;bj=this.__hO;}
;if(!bh&&bd[bg]){bh=bd[bg][be];}
;if(!bh&&bd[bj]){bh=bd[bj][be];}
;if(!bh&&bd[this.__hM]){bh=bd[this.__hM][be];}
;if(!bh){bh=be;}
;if(bf.length>0){var bi=[];for(var i=0;i<bf.length;i++){var bk=bf[i];if(bk&&bk.translate){bi[i]=bk.translate();}
else {bi[i]=bk;}
;}
;bh=qx.lang.String.format(bh,bi);}
;if(qx.core.Environment.get(h)){bh=new qx.locale.LocalizedString(bh,be,bf);}
;return bh;}
},destruct:function(){this.__hJ=this.__hK=null;}
});}
)();
(function(){var f="qx.bom.client.Locale",e="locale",d="android",c="locale.variant",b="-",a="";qx.Bootstrap.define(f,{statics:{getLocale:function(){var g=qx.bom.client.Locale.__hR();var h=g.indexOf(b);if(h!=-1){g=g.substr(0,h);}
;return g;}
,getVariant:function(){var i=qx.bom.client.Locale.__hR();var k=a;var j=i.indexOf(b);if(j!=-1){k=i.substr(j+1);}
;return k;}
,__hR:function(){var l=(navigator.userLanguage||navigator.language||a);if(qx.bom.client.OperatingSystem.getName()==d){var m=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);if(m){l=m[0];}
;}
;return l.toLowerCase();}
},defer:function(n){qx.core.Environment.add(e,n.getLocale);qx.core.Environment.add(c,n.getVariant);}
});}
)();
(function(){var k="qx/icon",j=".png",i="crop",h="engine.version",g="Potential clipped image candidate: ",f="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",d='<div style="',c="repeat-y",b='<img src="',a="qx.bom.element.Decoration",N="Image modification not possible because elements could not be replaced at runtime anymore!",M="', sizingMethod='",L="'!",K='"/>',J="png",I="')",H='"></div>',G='" style="',F="none",E="ImageLoader: Not recognized format of external image '",r="webkit",s=" ",p="repeat-x",q="DXImageTransform.Microsoft.AlphaImageLoader",n="qx/static/blank.gif",o="absolute",l="repeat",m="scale",t="mshtml",u="b64",x="scale-y",w="no-repeat",z="qx.debug",y="scale-x",B="",A="engine.name",v="div",D="img",C="px";qx.Class.define(a,{statics:{DEBUG:false,__hS:{},__hT:(qx.core.Environment.get(A)==t)&&qx.core.Environment.get(h)<9,__hU:qx.core.Environment.select(A,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hV:{"scale-x":D,"scale-y":D,"scale":D,"repeat":v,"no-repeat":v,"repeat-x":v,"repeat-y":v},update:function(O,P,Q,R){var T=this.getTagName(Q,P);if(T!=O.tagName.toLowerCase()){throw new Error(N);}
;var U=this.getAttributes(P,Q,R);if(T===D){O.src=U.src||qx.util.ResourceManager.getInstance().toUri(n);}
;if(O.style.backgroundPosition!=B&&U.style.backgroundPosition===undefined){U.style.backgroundPosition=null;}
;if(O.style.clip!=B&&U.style.clip===undefined){U.style.clip=null;}
;var S=qx.bom.element.Style;S.setStyles(O,U.style);if(this.__hT){try{O.filters[q].apply();}
catch(e){}
;}
;}
,create:function(V,W,X){var Y=this.getTagName(W,V);var bb=this.getAttributes(V,W,X);var ba=qx.bom.element.Style.compile(bb.style);if(Y===D){return b+bb.src+G+ba+K;}
else {return d+ba+H;}
;}
,getTagName:function(bc,bd){if(bd&&this.__hT&&this.__hU[bc]&&qx.lang.String.endsWith(bd,j)){return v;}
;return this.__hV[bc];}
,getAttributes:function(be,bf,bh){if(!bh){bh={};}
;if(!bh.position){bh.position=o;}
;if((qx.core.Environment.get(A)==t)){bh.fontSize=0;bh.lineHeight=0;}
else if((qx.core.Environment.get(A)==r)){bh.WebkitUserDrag=F;}
;var bj=qx.util.ResourceManager.getInstance().getImageFormat(be)||qx.io.ImageLoader.getFormat(be);if(qx.core.Environment.get(z)){if(be!=null&&bj==null){qx.log.Logger.warn(E+be+L);}
;}
;var bi;if(this.__hT&&this.__hU[bf]&&bj===J){bi=this.__hY(bh,bf,be);}
else {if(bf===m){bi=this.__ia(bh,bf,be);}
else if(bf===y||bf===x){bi=this.__ib(bh,bf,be);}
else {bi=this.__ie(bh,bf,be);}
;}
;return bi;}
,__hW:function(bk,bl,bm){if(bk.width==null&&bl!=null){bk.width=bl+C;}
;if(bk.height==null&&bm!=null){bk.height=bm+C;}
;return bk;}
,__hX:function(bn){var bo=qx.util.ResourceManager.getInstance().getImageWidth(bn)||qx.io.ImageLoader.getWidth(bn);var bp=qx.util.ResourceManager.getInstance().getImageHeight(bn)||qx.io.ImageLoader.getHeight(bn);return {width:bo,height:bp};}
,__hY:function(bq,br,bs){var bv=this.__hX(bs);bq=this.__hW(bq,bv.width,bv.height);var bu=br==w?i:m;var bt=f+qx.util.ResourceManager.getInstance().toUri(bs)+M+bu+I;bq.filter=bt;bq.backgroundImage=bq.backgroundRepeat=B;return {style:bq};}
,__ia:function(bw,bx,by){var bz=qx.util.ResourceManager.getInstance().toUri(by);var bA=this.__hX(by);bw=this.__hW(bw,bA.width,bA.height);return {src:bz,style:bw};}
,__ib:function(bB,bC,bD){var bE=qx.util.ResourceManager.getInstance();var bH=bE.getCombinedFormat(bD);var bJ=this.__hX(bD);var bF;if(bH){var bI=bE.getData(bD);var bG=bI[4];if(bH==u){bF=bE.toDataUri(bD);}
else {bF=bE.toUri(bG);}
;if(bC===y){bB=this.__ic(bB,bI,bJ.height);}
else {bB=this.__id(bB,bI,bJ.width);}
;return {src:bF,style:bB};}
else {if(qx.core.Environment.get(z)){this.__ig(bD);}
;if(bC==y){bB.height=bJ.height==null?null:bJ.height+C;}
else if(bC==x){bB.width=bJ.width==null?null:bJ.width+C;}
;bF=bE.toUri(bD);return {src:bF,style:bB};}
;}
,__ic:function(bK,bL,bM){var bN=qx.util.ResourceManager.getInstance().getImageHeight(bL[4]);bK.clip={top:-bL[6],height:bM};bK.height=bN+C;if(bK.top!=null){bK.top=(parseInt(bK.top,10)+bL[6])+C;}
else if(bK.bottom!=null){bK.bottom=(parseInt(bK.bottom,10)+bM-bN-bL[6])+C;}
;return bK;}
,__id:function(bO,bP,bQ){var bR=qx.util.ResourceManager.getInstance().getImageWidth(bP[4]);bO.clip={left:-bP[5],width:bQ};bO.width=bR+C;if(bO.left!=null){bO.left=(parseInt(bO.left,10)+bP[5])+C;}
else if(bO.right!=null){bO.right=(parseInt(bO.right,10)+bQ-bR-bP[5])+C;}
;return bO;}
,__ie:function(bS,bT,bU){var bX=qx.util.ResourceManager.getInstance();var cd=bX.getCombinedFormat(bU);var cf=this.__hX(bU);if(cd&&bT!==l){var ce=bX.getData(bU);var cc=ce[4];if(cd==u){var cb=bX.toDataUri(bU);var ca=0;var bY=0;}
else {var cb=bX.toUri(cc);var ca=ce[5];var bY=ce[6];}
;var bV=qx.bom.element.Background.getStyles(cb,bT,ca,bY);for(var bW in bV){bS[bW]=bV[bW];}
;if(cf.width!=null&&bS.width==null&&(bT==c||bT===w)){bS.width=cf.width+C;}
;if(cf.height!=null&&bS.height==null&&(bT==p||bT===w)){bS.height=cf.height+C;}
;return {style:bS};}
else {if(qx.core.Environment.get(z)){if(bT!==l){this.__ig(bU);}
;}
;bS=this.__hW(bS,cf.width,cf.height);bS=this.__if(bS,bU,bT);return {style:bS};}
;}
,__if:function(cg,ch,ci){var top=null;var cm=null;if(cg.backgroundPosition){var cj=cg.backgroundPosition.split(s);cm=parseInt(cj[0],10);if(isNaN(cm)){cm=cj[0];}
;top=parseInt(cj[1],10);if(isNaN(top)){top=cj[1];}
;}
;var cl=qx.bom.element.Background.getStyles(ch,ci,cm,top);for(var ck in cl){cg[ck]=cl[ck];}
;if(cg.filter){cg.filter=B;}
;return cg;}
,__ig:function(cn){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(cn)&&cn.indexOf(k)==-1){if(!this.__hS[cn]){qx.log.Logger.debug(g+cn);this.__hS[cn]=true;}
;}
;}
,isAlphaImageLoaderEnabled:function(){return qx.bom.element.Decoration.__hT;}
}});}
)();
(function(){var c="load",b="qx.io.ImageLoader",a="html.image.naturaldimensions";qx.Bootstrap.define(b,{statics:{__cR:{},__ih:{width:null,height:null},__ii:/\.(png|gif|jpg|jpeg|bmp)\b/i,__ij:/^data:image\/(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__cR[d];return !!(e&&e.loaded);}
,isFailed:function(f){var g=this.__cR[f];return !!(g&&g.failed);}
,isLoading:function(h){var j=this.__cR[h];return !!(j&&j.loading);}
,getFormat:function(k){var m=this.__cR[k];if(!m||!m.format){var o=this.__ij.exec(k);if(o!=null){var p=(m&&qx.lang.Type.isNumber(m.width)?m.width:this.__ih.width);var n=(m&&qx.lang.Type.isNumber(m.height)?m.height:this.__ih.height);m={loaded:true,format:o[1],width:p,height:n};}
;}
;return m?m.format:null;}
,getSize:function(q){var r=this.__cR[q];return r?{width:r.width,height:r.height}:this.__ih;}
,getWidth:function(s){var t=this.__cR[s];return t?t.width:null;}
,getHeight:function(u){var v=this.__cR[u];return v?v.height:null;}
,load:function(w,x,y){var z=this.__cR[w];if(!z){z=this.__cR[w]={};}
;if(x&&!y){y=window;}
;if(z.loaded||z.loading||z.failed){if(x){if(z.loading){z.callbacks.push(x,y);}
else {x.call(y,w,z);}
;}
;}
else {z.loading=true;z.callbacks=[];if(x){z.callbacks.push(x,y);}
;var B=new Image();var A=qx.lang.Function.listener(this.__ik,this,B,w);B.onload=A;B.onerror=A;B.src=w;z.element=B;}
;}
,abort:function(C){var D=this.__cR[C];if(D&&!D.loaded){D.aborted=true;var F=D.callbacks;var E=D.element;E.onload=E.onerror=null;delete D.callbacks;delete D.element;delete D.loading;for(var i=0,l=F.length;i<l;i+=2){F[i].call(F[i+1],C,D);}
;}
;this.__cR[C]=null;}
,__ik:qx.event.GlobalError.observeMethod(function(event,G,H){var I=this.__cR[H];if(event.type===c){I.loaded=true;I.width=this.__il(G);I.height=this.__im(G);var J=this.__ii.exec(H);if(J!=null){I.format=J[1];}
;}
else {I.failed=true;}
;G.onload=G.onerror=null;var K=I.callbacks;delete I.loading;delete I.callbacks;delete I.element;for(var i=0,l=K.length;i<l;i+=2){K[i].call(K[i+1],H,I);}
;}
),__il:function(L){return qx.core.Environment.get(a)?L.naturalWidth:L.width;}
,__im:function(M){return qx.core.Environment.get(a)?M.naturalHeight:M.height;}
}});}
)();
(function(){var u="')",t="gecko",s="background-image:url(",r=");",q="",p=")",o="background-repeat:",n="engine.version",m="data:",l=" ",e="qx.bom.element.Background",k="url(",h="background-position:",c="base64",b="url('",g="engine.name",f="0",i="px",a=";",j="'",d="number";qx.Class.define(e,{statics:{__in:[s,null,r,h,null,a,o,null,a],__io:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ip:function(v,top){var w=qx.core.Environment.get(g);var x=qx.core.Environment.get(n);if(w==t&&x<1.9&&v==top&&typeof v==d){top+=0.01;}
;if(v){var z=(typeof v==d)?v+i:v;}
else {z=f;}
;if(top){var y=(typeof top==d)?top+i:top;}
else {y=f;}
;return z+l+y;}
,__iq:function(A){var String=qx.lang.String;var B=A.substr(0,50);return String.startsWith(B,m)&&String.contains(B,c);}
,compile:function(C,D,E,top){var F=this.__ip(E,top);var G=qx.util.ResourceManager.getInstance().toUri(C);if(this.__iq(G)){G=j+G+j;}
;var H=this.__in;H[1]=G;H[4]=F;H[7]=D;return H.join(q);}
,getStyles:function(I,J,K,top){if(!I){return this.__io;}
;var L=this.__ip(K,top);var N=qx.util.ResourceManager.getInstance().toUri(I);var O;if(this.__iq(N)){O=b+N+u;}
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
(function(){var j="Missing appearance: ",h="_applyTheme",g="qx.theme.manager.Appearance",f=":",e="Theme",d="changeTheme",c="/",b="singleton",a="string";qx.Class.define(g,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__iv={};this.__iw={};}
,properties:{theme:{check:e,nullable:true,event:d,apply:h}},members:{__ix:{},__iv:null,__iw:null,_applyTheme:function(k,l){this.__iw={};this.__iv={};}
,__iy:function(m,n,o){var t=n.appearances;var w=t[m];if(!w){var x=c;var q=[];var v=m.split(x);var u;while(!w&&v.length>0){q.unshift(v.pop());var r=v.join(x);w=t[r];if(w){u=w.alias||w;if(typeof u===a){var s=u+x+q.join(x);return this.__iy(s,n,o);}
;}
;}
;for(var i=0;i<q.length-1;i++){q.shift();var r=q.join(x);var p=this.__iy(r,n);if(p){return p;}
;}
;if(o!=null){return this.__iy(o,n);}
;return null;}
else if(typeof w===a){return this.__iy(w,n,o);}
else if(w.include&&!w.style){return this.__iy(w.include,n,o);}
;;return m;}
,styleFrom:function(y,z,A,B){if(!A){A=this.getTheme();}
;var G=this.__iw;var C=G[y];if(!C){C=G[y]=this.__iy(y,A,B);}
;var M=A.appearances[C];if(!M){this.warn(j+y);return null;}
;if(!M.style){return null;}
;var N=C;if(z){var O=M.$$bits;if(!O){O=M.$$bits={};M.$$length=0;}
;var E=0;for(var I in z){if(!z[I]){continue;}
;if(O[I]==null){O[I]=1<<M.$$length++;}
;E+=O[I];}
;if(E>0){N+=f+E;}
;}
;var F=this.__iv;if(F[N]!==undefined){return F[N];}
;if(!z){z=this.__ix;}
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
},destruct:function(){this.__iv=this.__iw=null;}
});}
)();
(function(){var j="Boolean",i="bottom-right",h="' ",g="widget",f="qx.ui.core.MPlacement",e="left-top",d="[qx.ui.core.MPlacement.setMoveDirection()], the value was '",c="offsetRight",b="shorthand",a="Invalid value for the parameter 'direction' ",F="offsetLeft",E="top-left",D="appear",C="offsetBottom",B="top",A="top-right",z="offsetTop",y="but 'top' or 'left' are allowed.",x="right-bottom",w="right-top",q="left-bottom",r="best-fit",o="placementRight",p="placementLeft",m="mouse",n="bottom-left",k="direct",l="disappear",s="left",t="Integer",v="interval",u="keep-align";qx.Mixin.define(f,{statics:{__dM:null,__iz:s,setVisibleElement:function(G){this.__dM=G;}
,getVisibleElement:function(){return this.__dM;}
,setMoveDirection:function(H){if(H===B||H===s){this.__iz=H;}
else {throw new Error(a+d+H+h+y);}
;}
,getMoveDirection:function(){return this.__iz;}
},properties:{position:{check:[E,A,n,i,e,q,w,x],init:n,themeable:true},placeMethod:{check:[g,m],init:m,themeable:true},domMove:{check:j,init:false},placementModeX:{check:[k,u,r],init:u,themeable:true},placementModeY:{check:[k,u,r],init:u,themeable:true},offsetLeft:{check:t,init:0,themeable:true},offsetTop:{check:t,init:0,themeable:true},offsetRight:{check:t,init:0,themeable:true},offsetBottom:{check:t,init:0,themeable:true},offset:{group:[z,c,C,F],mode:b,themeable:true}},members:{__iA:null,__iB:null,__iC:null,getLayoutLocation:function(I){var L,K,M,top;K=I.getBounds();M=K.left;top=K.top;var N=K;I=I.getLayoutParent();while(I&&!I.isRootWidget()){K=I.getBounds();M+=K.left;top+=K.top;L=I.getInsets();M+=L.left;top+=L.top;I=I.getLayoutParent();}
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
,placeToWidget:function(V,W){if(W){this.__iD();this.__iA=qx.lang.Function.bind(this.placeToWidget,this,V,false);qx.event.Idle.getInstance().addListener(v,this.__iA);this.__iC=function(){this.__iD();}
;this.addListener(l,this.__iC,this);}
;var X=V.getContainerLocation()||this.getLayoutLocation(V);this.__iF(X);}
,__iD:function(){if(this.__iA){qx.event.Idle.getInstance().removeListener(v,this.__iA);this.__iA=null;}
;if(this.__iC){this.removeListener(l,this.__iC,this);this.__iC=null;}
;}
,placeToMouse:function(event){var ba=event.getDocumentLeft();var top=event.getDocumentTop();var Y={left:ba,top:top,right:ba,bottom:top};this.__iF(Y);}
,placeToElement:function(bb,bc){var location=qx.bom.element.Location.get(bb);var bd={left:location.left,top:location.top,right:location.left+bb.offsetWidth,bottom:location.top+bb.offsetHeight};if(bc){this.__iA=qx.lang.Function.bind(this.placeToElement,this,bb,false);qx.event.Idle.getInstance().addListener(v,this.__iA);this.addListener(l,function(){if(this.__iA){qx.event.Idle.getInstance().removeListener(v,this.__iA);this.__iA=null;}
;}
,this);}
;this.__iF(bd);}
,placeToPoint:function(be){var bf={left:be.left,top:be.top,right:be.left,bottom:be.top};this.__iF(bf);}
,_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};}
,__iE:function(bg){var bh=null;if(this._computePlacementSize){var bh=this._computePlacementSize();}
else if(this.isVisible()){var bh=this.getBounds();}
;if(bh==null){this.addListenerOnce(D,function(){this.__iE(bg);}
,this);}
else {bg.call(this,bh);}
;}
,__iF:function(bi){this.__iE(function(bj){var bk=qx.util.placement.Placement.compute(bj,this.getLayoutParent().getBounds(),bi,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());this.removeState(p);this.removeState(o);this.addState(bi.left<bk.left?o:p);this.moveTo(bk.left,bk.top);}
);}
},destruct:function(){this.__iD();}
});}
)();
(function(){var f="Number",e="_applyTimeoutInterval",d="qx.event.type.Event",c="qx.event.Idle",b="singleton",a="interval";qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){qx.core.Object.call(this);var g=new qx.event.Timer(this.getTimeoutInterval());g.addListener(a,this._onInterval,this);g.start();this.__iG=g;}
,events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__iG:null,_applyTimeoutInterval:function(h){this.__iG.setInterval(h);}
,_onInterval:function(){this.fireEvent(a);}
},destruct:function(){if(this.__iG){this.__iG.stop();}
;this.__iG=null;}
});}
)();
(function(){var j="-",i="best-fit",h="size",g="target.bottom",f="offsets",e="size.width",d="offsets.bottom",c='__iH',b="qx.util.placement.Placement",a="qx.debug",G="keep-align",F="target.right",E="direct",D="offsets.right",C="target",B="Invalid 'mode' argument!'",A="offsets.left",z="area",y="target.top",x="area.height",q="target.left",r="area.width",o="size.height",p="offsets.top",m="edge-start",n="align-start",k="align-end",l="Class",s="edge-end",t="bottom",v="left",u="top",w="right";qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__iH=qx.util.placement.DirectAxis;}
,properties:{axisX:{check:l},axisY:{check:l},edge:{check:[u,w,t,v],init:u},align:{check:[u,w,t,v],init:w}},statics:{__iI:null,compute:function(H,I,J,K,L,M,N){this.__iI=this.__iI||new qx.util.placement.Placement();var Q=L.split(j);var P=Q[0];var O=Q[1];this.__iI.set({axisX:this.__iM(M),axisY:this.__iM(N),edge:P,align:O});return this.__iI.compute(H,I,J,K);}
,__iJ:null,__iK:null,__iL:null,__iM:function(R){switch(R){case E:this.__iJ=this.__iJ||qx.util.placement.DirectAxis;return this.__iJ;case G:this.__iK=this.__iK||qx.util.placement.KeepAlignAxis;return this.__iK;case i:this.__iL=this.__iL||qx.util.placement.BestFitAxis;return this.__iL;default:throw new Error(B);};}
},members:{__iH:null,compute:function(S,T,U,V){if(qx.core.Environment.get(a)){this.assertObject(S,h);this.assertNumber(S.width,e);this.assertNumber(S.height,o);this.assertObject(T,z);this.assertNumber(T.width,r);this.assertNumber(T.height,x);this.assertObject(U,C);this.assertNumber(U.top,y);this.assertNumber(U.right,F);this.assertNumber(U.bottom,g);this.assertNumber(U.left,q);this.assertObject(V,f);this.assertNumber(V.top,p);this.assertNumber(V.right,D);this.assertNumber(V.bottom,d);this.assertNumber(V.left,A);}
;var W=this.getAxisX()||this.__iH;var Y=W.computeStart(S.width,{start:U.left,end:U.right},{start:V.left,end:V.right},T.width,this.__iN());var X=this.getAxisY()||this.__iH;var top=X.computeStart(S.height,{start:U.top,end:U.bottom},{start:V.top,end:V.bottom},T.height,this.__iO());return {left:Y,top:top};}
,__iN:function(){var bb=this.getEdge();var ba=this.getAlign();if(bb==v){return m;}
else if(bb==w){return s;}
else if(ba==v){return n;}
else if(ba==w){return k;}
;;;}
,__iO:function(){var bd=this.getEdge();var bc=this.getAlign();if(bd==u){return m;}
else if(bd==t){return s;}
else if(bc==u){return n;}
else if(bc==t){return k;}
;;;}
},destruct:function(){this._disposeObjects(c);}
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
(function(){var j="Image could not be loaded: ",i="Boolean",h="px",g="__iP",f="http",e="engine.version",d="scale",c="changeSource",b="qx.ui.basic.Image",a="loaded",E="qx.debug",D="-disabled.$1",C="loadingFailed",B="String",A="_applySource",z="img",y="data:image/",x="image",w="mshtml",v="_applyScale",q="try to load an unmanaged relative image: ",r="no-repeat",o=".png",p="div",m="replacement",n="qx.event.type.Event",k="engine.name",l="hidden",s="alphaScaled",t="scaled",u="nonScaled";qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(F){this.__iP={};qx.ui.core.Widget.call(this);if(F){this.setSource(F);}
;}
,properties:{source:{check:B,init:null,nullable:true,event:c,apply:A,themeable:true},scale:{check:i,init:false,themeable:true,apply:v},appearance:{refine:true,init:x},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:n,loaded:n},members:{__iQ:null,__iR:null,__fr:null,__iP:null,getContentElement:function(){return this.__iV();}
,_createContentElement:function(){return this.__iV();}
,_getContentHint:function(){return {width:this.__iQ||0,height:this.__iR||0};}
,_applyEnabled:function(G,H){qx.ui.core.Widget.prototype._applyEnabled.call(this,G,H);if(this.getSource()){this._styleSource();}
;}
,_applySource:function(I){this._styleSource();}
,_applyScale:function(J){this._styleSource();}
,__iS:function(K){this.__fr=K;}
,__iT:function(){if(this.__fr==null){var M=this.getSource();var L=false;if(M!=null){L=qx.lang.String.endsWith(M,o);}
;if(this.getScale()&&L&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__fr=s;}
else if(this.getScale()){this.__fr=t;}
else {this.__fr=u;}
;}
;return this.__fr;}
,__iU:function(N){var O;var P;if(N==s){O=true;P=p;}
else if(N==u){O=false;P=p;}
else {O=true;P=z;}
;var Q=new qx.html.Image(P);Q.setScale(O);Q.setStyles({"overflowX":l,"overflowY":l});return Q;}
,__iV:function(){var R=this.__iT();if(this.__iP[R]==null){this.__iP[R]=this.__iU(R);}
;return this.__iP[R];}
,_styleSource:function(){var S=qx.util.AliasManager.getInstance().resolve(this.getSource());if(!S){this.getContentElement().resetSource();return;}
;this.__iW(S);if((qx.core.Environment.get(k)==w)&&parseInt(qx.core.Environment.get(e),10)<9){var T=this.getScale()?d:r;this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(T,S);}
;if(qx.util.ResourceManager.getInstance().has(S)){this.__iY(this.getContentElement(),S);}
else if(qx.io.ImageLoader.isLoaded(S)){this.__ja(this.getContentElement(),S);}
else {this.__jb(this.getContentElement(),S);}
;}
,__iW:qx.core.Environment.select(k,{"mshtml":function(U){var W=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();var V=qx.lang.String.endsWith(U,o);if(W&&V){if(this.getScale()&&this.__iT()!=s){this.__iS(s);}
else if(!this.getScale()&&this.__iT()!=u){this.__iS(u);}
;}
else {if(this.getScale()&&this.__iT()!=t){this.__iS(t);}
else if(!this.getScale()&&this.__iT()!=u){this.__iS(u);}
;}
;this.__iX(this.__iV());}
,"default":function(X){if(this.getScale()&&this.__iT()!=t){this.__iS(t);}
else if(!this.getScale()&&this.__iT(u)){this.__iS(u);}
;this.__iX(this.__iV());}
}),__iX:function(Y){var bc=this.getContainerElement();var bd=bc.getChild(0);if(bd!=Y){if(bd!=null){var bf=h;var ba={};var bb=this.getInnerSize();if(bb!=null){ba.width=bb.width+bf;ba.height=bb.height+bf;}
;var be=this.getInsets();ba.left=be.left+bf;ba.top=be.top+bf;ba.zIndex=10;Y.setStyles(ba,true);Y.setSelectable(this.getSelectable());bc.removeAt(0);bc.addAt(Y,0);}
;}
;}
,__iY:function(bg,bh){var bj=qx.util.ResourceManager.getInstance();if(!this.getEnabled()){var bi=bh.replace(/\.([a-z]+)$/,D);if(bj.has(bi)){bh=bi;this.addState(m);}
else {this.removeState(m);}
;}
;if(bg.getSource()===bh){return;}
;bg.setSource(bh);this.__jd(bj.getImageWidth(bh),bj.getImageHeight(bh));}
,__ja:function(bk,bl){var bn=qx.io.ImageLoader;bk.setSource(bl);var bm=bn.getWidth(bl);var bo=bn.getHeight(bl);this.__jd(bm,bo);}
,__jb:function(bp,bq){var bt=qx.io.ImageLoader;if(qx.core.Environment.get(E)){var br=bq.toLowerCase();var bs=qx.lang.String.startsWith;if(!bs(br,f)&&!bs(br,y)){var self=this.self(arguments);if(!self.__GC){self.__GC={};}
;if(!self.__GC[bq]){this.debug(q+bq);self.__GC[bq]=true;}
;}
;}
;if(!bt.isFailed(bq)){bt.load(bq,this.__jc,this);}
else {if(bp!=null){bp.resetSource();}
;}
;}
,__jc:function(bu,bv){if(this.$$disposed===true){return;}
;if(bu!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;}
;if(bv.failed){this.warn(j+bu);this.fireEvent(C);}
else if(bv.aborted){return;}
else {this.fireEvent(a);}
;this._styleSource();}
,__jd:function(bw,bx){if(bw!==this.__iQ||bx!==this.__iR){this.__iQ=bw;this.__iR=bx;qx.ui.core.queue.Layout.add(this);}
;}
},destruct:function(){this._disposeMap(g);}
});}
)();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){qx.ui.basic.Image.call(this);this.setZIndex(1e8);this.setDomMove(true);var h=this.getApplicationRoot();h.add(this,{left:-1000,top:-1000});}
,properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(i,j){if(j){this.removeState(j);}
;if(i){this.addState(i);}
;}
}});}
)();
(function(){var e="__oJ",d="qx.ui.table.pane.Header",c="hovered",b="first",a="last";qx.Class.define(d,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.HBox());this.__jI=new qx.ui.core.Blocker(this);this.__oJ=f;}
,members:{__oJ:null,__oR:null,__oS:null,__jI:null,getPaneScroller:function(){return this.__oJ;}
,getTable:function(){return this.__oJ.getTable();}
,getBlocker:function(){return this.__jI;}
,onColOrderChanged:function(){this._updateContent(true);}
,onPaneModelChanged:function(){this._updateContent(true);}
,onTableModelMetaDataChanged:function(){this._updateContent();}
,setColumnWidth:function(g,h,i){var j=this.getHeaderWidgetAtColumn(g);if(j!=null){j.setWidth(h);}
;}
,setMouseOverColumn:function(k){if(k!=this.__oS){if(this.__oS!=null){var l=this.getHeaderWidgetAtColumn(this.__oS);if(l!=null){l.removeState(c);}
;}
;if(k!=null){this.getHeaderWidgetAtColumn(k).addState(c);}
;this.__oS=k;}
;}
,getHeaderWidgetAtColumn:function(m){var n=this.getPaneScroller().getTablePaneModel().getX(m);return this._getChildren()[n];}
,showColumnMoveFeedback:function(o,x){var s=this.getContainerLocation();if(this.__oR==null){var y=this.getTable();var p=this.getPaneScroller().getTablePaneModel().getX(o);var r=this._getChildren()[p];var t=y.getTableModel();var v=y.getTableColumnModel();var w={xPos:p,col:o,name:t.getColumnName(o),table:y};var u=v.getHeaderCellRenderer(o);var q=u.createHeaderCell(w);var z=r.getBounds();q.setWidth(z.width);q.setHeight(z.height);q.setZIndex(1000000);q.setOpacity(0.8);q.setLayoutProperties({top:s.top});this.getApplicationRoot().add(q);this.__oR=q;}
;this.__oR.setLayoutProperties({left:s.left+x});this.__oR.show();}
,hideColumnMoveFeedback:function(){if(this.__oR!=null){this.__oR.destroy();this.__oR=null;}
;}
,isShowingColumnMoveFeedback:function(){return this.__oR!=null;}
,_updateContent:function(A){var K=this.getTable();var E=K.getTableModel();var H=K.getTableColumnModel();var J=this.getPaneScroller().getTablePaneModel();var M=this._getChildren();var F=J.getColumnCount();var I=E.getSortColumnIndex();if(A){this._cleanUpCells();}
;var B={};B.sortedAscending=E.isSortAscending();for(var x=0;x<F;x++){var D=J.getColumnAtX(x);if(D===undefined){continue;}
;var L=H.getColumnWidth(D);var G=H.getHeaderCellRenderer(D);B.xPos=x;B.col=D;B.name=E.getColumnName(D);B.editable=E.isColumnEditable(D);B.sorted=(D==I);B.table=K;var C=M[x];if(C==null){C=G.createHeaderCell(B);C.set({width:L});this._add(C);}
else {G.updateHeaderCell(B,C);}
;if(x===0){C.addState(b);C.removeState(a);}
else if(x===F-1){C.removeState(b);C.addState(a);}
else {C.removeState(b);C.removeState(a);}
;}
;}
,_cleanUpCells:function(){var O=this._getChildren();for(var x=O.length-1;x>=0;x--){var N=O[x];N.destroy();}
;}
},destruct:function(){this.__jI.dispose();this._disposeObjects(e);}
});}
)();
(function(){var s="Decorator",r="middle",q="_applyReversed",p="qx.debug",o="bottom",n="' is not supported by the HBox layout!",m="Boolean",k="flex",j="right",h="Integer",c="The property '",g="qx.ui.layout.HBox",f="width",b="center",a="top",e="left",d="_applyLayoutChange";qx.Class.define(g,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);if(t){this.setSpacing(t);}
;if(u){this.setAlignX(u);}
;if(v){this.setSeparator(v);}
;}
,properties:{alignX:{check:[e,b,j],init:e,apply:d},alignY:{check:[a,r,o],init:a,apply:d},spacing:{check:h,init:0,apply:d},separator:{check:s,nullable:true,apply:d},reversed:{check:m,init:false,apply:q}},members:{__lv:null,__kO:null,__kP:null,__dW:null,_applyReversed:function(){this._invalidChildrenCache=true;this._applyLayoutChange();}
,__kQ:function(){var B=this._getLayoutChildren();var length=B.length;var y=false;var w=this.__lv&&this.__lv.length!=length&&this.__kO&&this.__lv;var z;var x=w?this.__lv:new Array(length);var A=w?this.__kO:new Array(length);if(this.getReversed()){B=B.concat().reverse();}
;for(var i=0;i<length;i++){z=B[i].getLayoutProperties();if(z.width!=null){x[i]=parseFloat(z.width)/100;}
;if(z.flex!=null){A[i]=z.flex;y=true;}
else {A[i]=0;}
;}
;if(!w){this.__lv=x;this.__kO=A;}
;this.__kP=y;this.__dW=B;delete this._invalidChildrenCache;}
,verifyLayoutProperty:qx.core.Environment.select(p,{"true":function(C,name,D){this.assert(name===k||name===f,c+name+n);if(name==f){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);}
else {this.assertNumber(D);this.assert(D>=0);}
;}
,"false":null}),renderLayout:function(E,F){if(this._invalidChildrenCache){this.__kQ();}
;var L=this.__dW;var length=L.length;var U=qx.ui.layout.Util;var T=this.getSpacing();var X=this.getSeparator();if(X){var I=U.computeHorizontalSeparatorGaps(L,T,X);}
else {var I=U.computeHorizontalGaps(L,T,true);}
;var i,G,R,Q;var W=[];var M=I;for(i=0;i<length;i+=1){Q=this.__lv[i];R=Q!=null?Math.floor((E-I)*Q):L[i].getSizeHint().width;W.push(R);M+=R;}
;if(this.__kP&&M!=E){var O={};var S,V;for(i=0;i<length;i+=1){S=this.__kO[i];if(S>0){N=L[i].getSizeHint();O[i]={min:N.minWidth,value:W[i],max:N.maxWidth,flex:S};}
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
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kQ();}
;var bj=qx.ui.layout.Util;var br=this.__dW;var bd=0,bk=0,bh=0;var bg=0,bi=0;var bo,be,bq;for(var i=0,l=br.length;i<l;i+=1){bo=br[i];be=bo.getSizeHint();bk+=be.width;var bn=this.__kO[i];var bf=this.__lv[i];if(bn){bd+=be.minWidth;}
else if(bf){bh=Math.max(bh,Math.round(be.minWidth/bf));}
else {bd+=be.width;}
;bq=bo.getMarginTop()+bo.getMarginBottom();if((be.height+bq)>bi){bi=be.height+bq;}
;if((be.minHeight+bq)>bg){bg=be.minHeight+bq;}
;}
;bd+=bh;var bm=this.getSpacing();var bp=this.getSeparator();if(bp){var bl=bj.computeHorizontalSeparatorGaps(br,bm,bp);}
else {var bl=bj.computeHorizontalGaps(br,bm,true);}
;return {minWidth:bd+bl,width:bk+bl,minHeight:bg,height:bi};}
},destruct:function(){this.__lv=this.__kO=this.__dW=null;}
});}
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
(function(){var l="backgroundColor",k="_applyOpacity",j="Boolean",h="__jN",g="opacity",f="interval",d="__iG",c="Tab",b="Color",a="qx.ui.root.Page",A="__jI",z="Number",y="qx.ui.core.Blocker",x="qx.ui.root.Application",w="_applyColor",v="px",u="keydown",t="deactivate",s="qx.event.type.Event",r="resize",p="keyup",q="keypress",n="unblocked",o="blocked",m="zIndex";qx.Class.define(y,{extend:qx.core.Object,events:{blocked:s,unblocked:s},construct:function(B){qx.core.Object.call(this);this._widget=B;this._isPageRoot=(qx.Class.isDefined(a)&&B instanceof qx.ui.root.Page);if(this._isPageRoot){B.addListener(r,this.__jP,this);}
;if(qx.Class.isDefined(x)&&B instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);}
;this.__jJ=[];this.__jK=[];this.__jL=[];}
,properties:{color:{check:b,init:null,nullable:true,apply:w,themeable:true},opacity:{check:z,init:1,apply:k,themeable:true},keepBlockerActive:{check:j,init:false}},members:{__jI:null,__jM:0,__jN:null,__jL:null,__jJ:null,__jK:null,__jO:null,__iG:null,_isPageRoot:false,_widget:null,__jP:function(e){var C=e.getData();if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:C.width,height:C.height});}
;if(this.isBlocked()){this.getBlockerElement().setStyles({width:C.width,height:C.height});}
;}
,_applyColor:function(D,E){var F=qx.theme.manager.Color.getInstance().resolve(D);this.__jQ(l,F);}
,_applyOpacity:function(G,H){this.__jQ(g,G);}
,__jQ:function(I,J){var K=[];this.__jI&&K.push(this.__jI);this.__jN&&K.push(this.__jN);for(var i=0;i<K.length;i++){K[i].setStyle(I,J);}
;}
,_backupActiveWidget:function(){var L=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);this.__jJ.push(L.getActive());this.__jK.push(L.getFocus());if(this._widget.isFocusable()){this._widget.focus();}
;}
,_restoreActiveWidget:function(){var O=this.__jJ.length;if(O>0){var N=this.__jJ[O-1];if(N){qx.bom.Element.activate(N);}
;this.__jJ.pop();}
;var M=this.__jK.length;if(M>0){var N=this.__jK[M-1];if(N){qx.bom.Element.focus(this.__jK[M-1]);}
;this.__jK.pop();}
;}
,__jR:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());}
,getBlockerElement:function(){if(!this.__jI){this.__jI=this.__jR();this.__jI.setStyle(m,15);this._widget.getContainerElement().add(this.__jI);this.__jI.exclude();}
;return this.__jI;}
,block:function(){this.__jM++;if(this.__jM<2){this._backupActiveWidget();var P=this.getBlockerElement();P.include();P.activate();P.addListener(t,this.__jW,this);P.addListener(q,this.__jV,this);P.addListener(u,this.__jV,this);P.addListener(p,this.__jV,this);this.fireEvent(o,qx.event.type.Event);}
;}
,isBlocked:function(){return this.__jM>0;}
,unblock:function(){if(!this.isBlocked()){return;}
;this.__jM--;if(this.__jM<1){this.__jS();this.__jM=0;}
;}
,forceUnblock:function(){if(!this.isBlocked()){return;}
;this.__jM=0;this.__jS();}
,__jS:function(){this._restoreActiveWidget();var Q=this.getBlockerElement();Q.removeListener(t,this.__jW,this);Q.removeListener(q,this.__jV,this);Q.removeListener(u,this.__jV,this);Q.removeListener(p,this.__jV,this);Q.exclude();this.fireEvent(n,qx.event.type.Event);}
,getContentBlockerElement:function(){if(!this.__jN){this.__jN=this.__jR();this._widget.getContentElement().add(this.__jN);this.__jN.exclude();}
;return this.__jN;}
,blockContent:function(R){var S=this.getContentBlockerElement();S.setStyle(m,R);this.__jL.push(R);if(this.__jL.length<2){S.include();if(this._isPageRoot){if(!this.__iG){this.__iG=new qx.event.Timer(300);this.__iG.addListener(f,this.__jU,this);}
;this.__iG.start();this.__jU();}
;this.fireEvent(o,qx.event.type.Event);}
;}
,isContentBlocked:function(){return this.__jL.length>0;}
,unblockContent:function(){if(!this.isContentBlocked()){return;}
;this.__jL.pop();var T=this.__jL[this.__jL.length-1];var U=this.getContentBlockerElement();U.setStyle(m,T);if(this.__jL.length<1){this.__jT();this.__jL=[];}
;}
,forceUnblockContent:function(){if(!this.isContentBlocked()){return;}
;this.__jL=[];var V=this.getContentBlockerElement();V.setStyle(m,null);this.__jT();}
,__jT:function(){this.getContentBlockerElement().exclude();if(this._isPageRoot){this.__iG.stop();}
;this.fireEvent(n,qx.event.type.Event);}
,__jU:function(){var W=this._widget.getContainerElement().getDomElement();var X=qx.dom.Node.getDocument(W);this.getContentBlockerElement().setStyles({height:X.documentElement.scrollHeight+v,width:X.documentElement.scrollWidth+v});}
,__jV:function(e){if(e.getKeyIdentifier()==c){e.stop();}
;}
,__jW:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();}
;}
},destruct:function(){if(this._isPageRoot){this._widget.removeListener(r,this.__jP,this);}
;this._disposeObjects(h,A,d);this.__jO=this.__jJ=this.__jK=this._widget=this.__jL=null;}
});}
)();
(function(){var i="_applyActiveWindow",h="__dz",g="qx.ui.window.MDesktop",f="__jX",d="changeModal",c="changeVisibility",b="changeActive",a="qx.ui.window.Window";qx.Mixin.define(g,{properties:{activeWindow:{check:a,apply:i,init:null,nullable:true}},members:{__jX:null,__dz:null,getWindowManager:function(){if(!this.__dz){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());}
;return this.__dz;}
,supportsMaximize:function(){return true;}
,setWindowManager:function(j){if(this.__dz){this.__dz.setDesktop(null);}
;j.setDesktop(this);this.__dz=j;}
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
,getWindows:function(){if(!this.__jX){this.__jX=[];}
;return this.__jX;}
},destruct:function(){this._disposeArray(f);this._disposeObjects(h);}
});}
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
(function(){var f="__jI",e="_applyBlockerColor",d="Number",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";qx.Mixin.define(c,{construct:function(){this.__jI=this._createBlocker();}
,properties:{blockerColor:{check:a,init:null,nullable:true,apply:e,themeable:true},blockerOpacity:{check:d,init:1,apply:b,themeable:true}},members:{__jI:null,_createBlocker:function(){return new qx.ui.core.Blocker(this);}
,_applyBlockerColor:function(g,h){this.__jI.setColor(g);}
,_applyBlockerOpacity:function(i,j){this.__jI.setOpacity(i);}
,block:function(){this.__jI.block();}
,isBlocked:function(){return this.__jI.isBlocked();}
,unblock:function(){this.__jI.unblock();}
,forceUnblock:function(){this.__jI.forceUnblock();}
,blockContent:function(k){this.__jI.blockContent(k);}
,isContentBlocked:function(){return this.__jI.isContentBlocked();}
,unblockContent:function(){this.__jI.unblockContent();}
,forceUnblockContent:function(){this.__jI.forceUnblockContent();}
,getBlocker:function(){return this.__jI;}
},destruct:function(){this._disposeObjects(f);}
});}
)();
(function(){var u="changeGlobalCursor",t="engine.name",s="keypress",r="Boolean",q="root",p="",o=" !important",n="input",m="_applyGlobalCursor",l="Space",d="_applyNativeHelp",k=";",h="event.help",c="qx.ui.root.Abstract",b="abstract",g="textarea",f="String",i="*",a="help",j="contextmenu";qx.Class.define(c,{type:b,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);qx.ui.core.FocusHandler.getInstance().addRoot(this);qx.ui.core.queue.Visibility.add(this);this.initNativeHelp();this.addListener(s,this.__ka,this);}
,properties:{appearance:{refine:true,init:q},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:f,nullable:true,themeable:true,apply:m,event:u},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:r,init:false,apply:d}},members:{__jY:null,isRootWidget:function(){return true;}
,getLayout:function(){return this._getLayout();}
,_applyGlobalCursor:qx.core.Environment.select(t,{"mshtml":function(v,w){}
,"default":function(x,y){var z=qx.bom.Stylesheet;var A=this.__jY;if(!A){this.__jY=A=z.createElement();}
;z.removeAllRules(A);if(x){z.addRule(A,i,qx.bom.element.Cursor.compile(x).replace(k,p)+o);}
;}
}),_applyNativeContextMenu:function(B,C){if(B){this.removeListener(j,this._onNativeContextMenu,this,true);}
else {this.addListener(j,this._onNativeContextMenu,this,true);}
;}
,_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;}
;e.preventDefault();}
,__ka:function(e){if(e.getKeyIdentifier()!==l){return;}
;var E=e.getTarget();var D=qx.ui.core.FocusHandler.getInstance();if(!D.isFocused(E)){return;}
;var F=E.getContentElement().getNodeName();if(F===n||F===g){return;}
;e.preventDefault();}
,_applyNativeHelp:function(G,H){if(qx.core.Environment.get(h)){if(H===false){qx.bom.Event.removeNativeListener(document,a,qx.lang.Function.returnFalse);}
;if(G===false){qx.bom.Event.addNativeListener(document,a,qx.lang.Function.returnFalse);}
;}
;}
},destruct:function(){this.__jY=null;}
,defer:function(I,J){qx.ui.core.MChildrenHandling.remap(J);}
});}
)();
(function(){var k="keypress",j="focusout",h="activate",g="__kb",f="Tab",d="singleton",c="deactivate",b="focusin",a="qx.ui.core.FocusHandler";qx.Class.define(a,{extend:qx.core.Object,type:d,construct:function(){qx.core.Object.call(this);this.__kb={};}
,members:{__kb:null,__kc:null,__kd:null,__ke:null,connectTo:function(m){m.addListener(k,this.__eJ,this);m.addListener(b,this._onFocusIn,this,true);m.addListener(j,this._onFocusOut,this,true);m.addListener(h,this._onActivate,this,true);m.addListener(c,this._onDeactivate,this,true);}
,addRoot:function(n){this.__kb[n.$$hash]=n;}
,removeRoot:function(o){delete this.__kb[o.$$hash];}
,getActiveWidget:function(){return this.__kc;}
,isActive:function(p){return this.__kc==p;}
,getFocusedWidget:function(){return this.__kd;}
,isFocused:function(q){return this.__kd==q;}
,isFocusRoot:function(r){return !!this.__kb[r.$$hash];}
,_onActivate:function(e){var t=e.getTarget();this.__kc=t;var s=this.__kf(t);if(s!=this.__ke){this.__ke=s;}
;}
,_onDeactivate:function(e){var u=e.getTarget();if(this.__kc==u){this.__kc=null;}
;}
,_onFocusIn:function(e){var v=e.getTarget();if(v!=this.__kd){this.__kd=v;v.visualizeFocus();}
;}
,_onFocusOut:function(e){var w=e.getTarget();if(w==this.__kd){this.__kd=null;w.visualizeBlur();}
;}
,__eJ:function(e){if(e.getKeyIdentifier()!=f){return;}
;if(!this.__ke){return;}
;e.stopPropagation();e.preventDefault();var x=this.__kd;if(!e.isShiftPressed()){var y=x?this.__kj(x):this.__kh();}
else {var y=x?this.__kk(x):this.__ki();}
;if(y){y.tabFocus();}
;}
,__kf:function(z){var A=this.__kb;while(z){if(A[z.$$hash]){return z;}
;z=z.getLayoutParent();}
;return null;}
,__kg:function(B,C){if(B===C){return 0;}
;var E=B.getTabIndex()||0;var D=C.getTabIndex()||0;if(E!=D){return E-D;}
;var J=B.getContainerElement().getDomElement();var I=C.getContainerElement().getDomElement();var H=qx.bom.element.Location;var G=H.get(J);var F=H.get(I);if(G.top!=F.top){return G.top-F.top;}
;if(G.left!=F.left){return G.left-F.left;}
;var K=B.getZIndex();var L=C.getZIndex();if(K!=L){return K-L;}
;return 0;}
,__kh:function(){return this.__kn(this.__ke,null);}
,__ki:function(){return this.__ko(this.__ke,null);}
,__kj:function(M){var N=this.__ke;if(N==M){return this.__kh();}
;while(M&&M.getAnonymous()){M=M.getLayoutParent();}
;if(M==null){return [];}
;var O=[];this.__kl(N,M,O);O.sort(this.__kg);var P=O.length;return P>0?O[0]:this.__kh();}
,__kk:function(Q){var R=this.__ke;if(R==Q){return this.__ki();}
;while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();}
;if(Q==null){return [];}
;var S=[];this.__km(R,Q,S);S.sort(this.__kg);var T=S.length;return T>0?S[T-1]:this.__ki();}
,__kl:function(parent,U,V){var W=parent.getLayoutChildren();var X;for(var i=0,l=W.length;i<l;i++){X=W[i];if(!(X instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__kg(U,X)<0){V.push(X);}
;this.__kl(X,U,V);}
;}
;}
,__km:function(parent,Y,ba){var bb=parent.getLayoutChildren();var bc;for(var i=0,l=bb.length;i<l;i++){bc=bb[i];if(!(bc instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__kg(Y,bc)>0){ba.push(bc);}
;this.__km(bc,Y,ba);}
;}
;}
,__kn:function(parent,bd){var be=parent.getLayoutChildren();var bf;for(var i=0,l=be.length;i<l;i++){bf=be[i];if(!(bf instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__kg(bf,bd)<0){bd=bf;}
;}
;bd=this.__kn(bf,bd);}
;}
;return bd;}
,__ko:function(parent,bg){var bh=parent.getLayoutChildren();var bi;for(var i=0,l=bh.length;i<l;i++){bi=bh[i];if(!(bi instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__kg(bi,bg)>0){bg=bi;}
;}
;bg=this.__ko(bi,bg);}
;}
;return bg;}
},destruct:function(){this._disposeMap(g);this.__kd=this.__kc=this.__ke=null;}
});}
)();
(function(){var q="resize",p="engine.name",o="paddingLeft",n="position",m="The root widget does not support decorators with 'left', or 'top' insets!",l="0px",k="webkit",j="The application could not be started due to a missing body tag in the HTML file!",i="$$widget",h="qx.ui.root.Application",c="hidden",g="div",f="paddingTop",b="The root widget does not support 'left', or 'top' paddings!",a="100%",d="absolute";qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(r){this.__ce=qx.dom.Node.getWindow(r);this.__kp=r;qx.ui.root.Abstract.call(this);qx.event.Registration.addListener(this.__ce,q,this._onResize,this);this._setLayout(new qx.ui.layout.Canvas());qx.ui.core.queue.Layout.add(this);qx.ui.core.FocusHandler.getInstance().connectTo(this);this.getContentElement().disableScrolling();}
,members:{__ce:null,__kp:null,_createContainerElement:function(){var s=this.__kp;if((qx.core.Environment.get(p)==k)){if(!s.body){alert(j);}
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
},destruct:function(){this.__ce=this.__kp=null;}
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
;qx.html.Element.call(this,f,z);this.addListener(j,this._stopPropagation,this);this.addListener(r,this._stopPropagation,this);this.addListener(u,this._stopPropagation,this);this.addListener(d,this._stopPropagation,this);this.addListener(a,this._stopPropagation,this);this.addListener(w,this._stopPropagation,this);this.addListener(g,this._stopPropagation,this);this.addListener(c,this._stopPropagation,this);this.addListener(q,this._stopPropagation,this);this.addListener(v,this.__kr,this);this.addListener(p,this.__kr,this);}
,members:{_stopPropagation:function(e){e.stopPropagation();}
,__kr:function(){var A=this.getStyle(m);this.setStyle(m,null,true);this.setStyle(m,A,true);}
}});}
)();
(function(){var k='<div>',j="</div>",h="overflow: hidden;",g="qx.event.type.Data",f="paneReloadsData",e="div",d='style="',c="_applyMaxCacheLines",b="qx.ui.table.pane.Pane",a="width: 100%;",E="qx.event.type.Event",D="_applyVisibleRowCount",C='>',B="line-height: ",A="appear",z='class="',w="width:100%;",v="px;",u='<div ',t="'>",r="_applyFirstVisibleRow",s="<div style='",p=";position:relative;",q='</div>',n='" ',o="paneUpdated",l="Number",m="";qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(F){qx.ui.core.Widget.call(this);this.__oJ=F;this.__oK=0;this.__oa=0;this.__oL=[];}
,events:{"paneReloadsData":g,"paneUpdated":E},properties:{firstVisibleRow:{check:l,init:0,apply:r},visibleRowCount:{check:l,init:0,apply:D},maxCacheLines:{check:l,init:1000,apply:c},allowShrinkX:{refine:true,init:false}},members:{__oa:null,__oK:null,__oJ:null,__oM:null,__nW:null,__nV:null,__oL:null,__oN:0,_applyFirstVisibleRow:function(G,H){this.updateContent(false,G-H);}
,_applyVisibleRowCount:function(I,J){this.updateContent(true);}
,_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};}
,getPaneScroller:function(){return this.__oJ;}
,getTable:function(){return this.__oJ.getTable();}
,setFocusedCell:function(K,L,M){if(K!=this.__nV||L!=this.__nW){var N=this.__nW;this.__nV=K;this.__nW=L;if(L!=N&&!M){if(N!==null){this.updateContent(false,null,N,true);}
;if(L!==null){this.updateContent(false,null,L,true);}
;}
;}
;}
,onSelectionChanged:function(){this.updateContent(false,null,null,true);}
,onFocusChanged:function(){this.updateContent(false,null,null,true);}
,setColumnWidth:function(O,P){this.updateContent(true);}
,onColOrderChanged:function(){this.updateContent(true);}
,onPaneModelChanged:function(){this.updateContent(true);}
,onTableModelDataChanged:function(Q,R,S,T){this.__oO();var V=this.getFirstVisibleRow();var U=this.getVisibleRowCount();if(R==-1||R>=V&&Q<V+U){this.updateContent();}
;}
,onTableModelMetaDataChanged:function(){this.updateContent(true);}
,_applyMaxCacheLines:function(W,X){if(this.__oN>=W&&W!==-1){this.__oO();}
;}
,__oO:function(){this.__oL=[];this.__oN=0;}
,__oP:function(Y,ba,bb){if(!ba&&!bb&&this.__oL[Y]){return this.__oL[Y];}
else {return null;}
;}
,__oQ:function(bc,bd,be,bf){var bg=this.getMaxCacheLines();if(!be&&!bf&&!this.__oL[bc]&&bg>0){this._applyMaxCacheLines(bg);this.__oL[bc]=bd;this.__oN+=1;}
;}
,updateContent:function(bh,bi,bj,bk){if(bh){this.__oO();}
;if(bi&&Math.abs(bi)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(bi);}
else if(bk&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(bj);}
else {this._updateAllRows();}
;}
,_updateRowStyles:function(bl){var bp=this.getContentElement().getDomElement();if(!bp||!bp.firstChild){this._updateAllRows();return;}
;var bt=this.getTable();var bn=bt.getSelectionModel();var bq=bt.getTableModel();var bu=bt.getDataRowRenderer();var bo=bp.firstChild.childNodes;var bs={table:bt};var bv=this.getFirstVisibleRow();var y=0;var bm=bo.length;if(bl!=null){var br=bl-bv;if(br>=0&&br<bm){bv=bl;y=br;bm=br+1;}
else {return;}
;}
;for(;y<bm;y++,bv++){bs.row=bv;bs.selected=bn.isSelectedIndex(bv);bs.focusedRow=(this.__nW==bv);bs.rowData=bq.getRowData(bv);bu.updateDataRowElement(bs,bo[y]);}
;}
,_getRowsHtml:function(bw,bx){var bD=this.getTable();var bG=bD.getSelectionModel();var bA=bD.getTableModel();var bB=bD.getTableColumnModel();var bV=this.getPaneScroller().getTablePaneModel();var bL=bD.getDataRowRenderer();bA.prefetchRows(bw,bw+bx-1);var bS=bD.getRowHeight();var bU=bV.getColumnCount();var bC=0;var bz=[];for(var x=0;x<bU;x++){var bY=bV.getColumnAtX(x);var bF=bB.getColumnWidth(bY);bz.push({col:bY,xPos:x,editable:bA.isColumnEditable(bY),focusedCol:this.__nV==bY,styleLeft:bC,styleWidth:bF});bC+=bF;}
;var bX=[];var ca=false;for(var bE=bw;bE<bw+bx;bE++){var bH=bG.isSelectedIndex(bE);var bK=(this.__nW==bE);var bP=this.__oP(bE,bH,bK);if(bP){bX.push(bP);continue;}
;var by=[];var bR={table:bD};bR.styleHeight=bS;bR.row=bE;bR.selected=bH;bR.focusedRow=bK;bR.rowData=bA.getRowData(bE);if(!bR.rowData){ca=true;}
;by.push(u);var bO=bL.getRowAttributes(bR);if(bO){by.push(bO);}
;var bN=bL.getRowClass(bR);if(bN){by.push(z,bN,n);}
;var bM=bL.createRowStyle(bR);bM+=p+bL.getRowHeightStyle(bS)+w;if(bM){by.push(d,bM,n);}
;by.push(C);var bW=false;for(x=0;x<bU&&!bW;x++){var bI=bz[x];for(var bT in bI){bR[bT]=bI[bT];}
;var bY=bR.col;bR.value=bA.getValue(bY,bE);var bJ=bB.getDataCellRenderer(bY);bR.style=bJ.getDefaultCellStyle();bW=bJ.createDataCellHtml(bR,by)||false;}
;by.push(q);var bQ=by.join(m);this.__oQ(bE,bQ,bH,bK);bX.push(bQ);}
;this.fireDataEvent(f,ca);return bX.join(m);}
,_scrollContent:function(cb){var cc=this.getContentElement().getDomElement();if(!(cc&&cc.firstChild)){this._updateAllRows();return;}
;var cl=cc.firstChild;var cd=cl.childNodes;var cj=this.getVisibleRowCount();var ci=this.getFirstVisibleRow();var cg=this.getTable().getTableModel();var cm=0;cm=cg.getRowCount();if(ci+cj>cm){this._updateAllRows();return;}
;var cn=cb<0?cj+cb:0;var ce=cb<0?0:cj-cb;for(i=Math.abs(cb)-1;i>=0;i--){var ch=cd[cn];try{cl.removeChild(ch);}
catch(co){break;}
;}
;if(!this.__oM){this.__oM=document.createElement(e);}
;var ck=k;ck+=this._getRowsHtml(ci+ce,Math.abs(cb));ck+=q;this.__oM.innerHTML=ck;var cf=this.__oM.firstChild.childNodes;if(cb>0){for(var i=cf.length-1;i>=0;i--){var ch=cf[0];cl.appendChild(ch);}
;}
else {for(var i=cf.length-1;i>=0;i--){var ch=cf[cf.length-1];cl.insertBefore(ch,cl.firstChild);}
;}
;if(this.__nW!==null){this._updateRowStyles(this.__nW-cb);this._updateRowStyles(this.__nW);}
;this.fireEvent(o);}
,_updateAllRows:function(){var cs=this.getContentElement().getDomElement();if(!cs){this.addListenerOnce(A,arguments.callee,this);return;}
;var cy=this.getTable();var cv=cy.getTableModel();var cx=this.getPaneScroller().getTablePaneModel();var cw=cx.getColumnCount();var cp=cy.getRowHeight();var ct=this.getFirstVisibleRow();var cq=this.getVisibleRowCount();var cz=cv.getRowCount();if(ct+cq>cz){cq=Math.max(0,cz-ct);}
;var cr=cx.getTotalWidth();var cu;if(cq>0){cu=[s,a,(cy.getForceLineHeight()?B+cp+v:m),h,t,this._getRowsHtml(ct,cq),j];}
else {cu=[];}
;var cA=cu.join(m);cs.innerHTML=cA;this.setWidth(cr);this.__oK=cw;this.__oa=cq;this.fireEvent(o);}
},destruct:function(){this.__oM=this.__oJ=this.__oL=null;}
});}
)();
(function(){var a="qx.ui.table.IHeaderRenderer";qx.Interface.define(a,{members:{createHeaderCell:function(b){return true;}
,updateHeaderCell:function(c,d){return true;}
}});}
)();
(function(){var b="qx.ui.table.headerrenderer.Default",a="String";qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.table.IHeaderRenderer,statics:{STATE_SORTED:"sorted",STATE_SORTED_ASCENDING:"sortedAscending"},properties:{toolTip:{check:a,init:null,nullable:true}},members:{createHeaderCell:function(c){var d=new qx.ui.table.headerrenderer.HeaderCell();this.updateHeaderCell(c,d);return d;}
,updateHeaderCell:function(e,f){var g=qx.ui.table.headerrenderer.Default;if(e.name&&e.name.translate){f.setLabel(e.name.translate());}
else {f.setLabel(e.name);}
;var h=f.getToolTip();if(this.getToolTip()!=null){if(h==null){h=new qx.ui.tooltip.ToolTip(this.getToolTip());f.setToolTip(h);qx.util.DisposeUtil.disposeTriggeredBy(h,f);}
else {h.setLabel(this.getToolTip());}
;}
;e.sorted?f.addState(g.STATE_SORTED):f.removeState(g.STATE_SORTED);e.sortedAscending?f.addState(g.STATE_SORTED_ASCENDING):f.removeState(g.STATE_SORTED_ASCENDING);}
}});}
)();
(function(){var a="qx.ui.core.MLayoutHandling";qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);}
,getLayout:function(){return this._getLayout();}
},statics:{remap:function(c){c.getLayout=c._getLayout;c.setLayout=c._setLayout;}
}});}
)();
(function(){var d="qx.ui.container.Composite",c="addChildWidget",b="removeChildWidget",a="qx.event.type.Data";qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(e){qx.ui.core.Widget.call(this);if(e!=null){this._setLayout(e);}
;}
,events:{addChildWidget:a,removeChildWidget:a},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(c,qx.event.type.Data,[f]);}
,_afterRemoveChild:function(g){this.fireNonBubblingEvent(b,qx.event.type.Data,[g]);}
},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);qx.ui.core.MLayoutHandling.remap(i);}
});}
)();
(function(){var i="_applySortIcon",h="_applyIcon",g="table-header-cell",f="qx.ui.table.headerrenderer.HeaderCell",e="_applyLabel",d="icon",c="label",b="String",a="sort-icon";qx.Class.define(f,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);var j=new qx.ui.layout.Grid();j.setRowFlex(0,1);j.setColumnFlex(1,1);j.setColumnFlex(2,1);this.setLayout(j);}
,properties:{appearance:{refine:true,init:g},label:{check:b,init:null,nullable:true,apply:e},sortIcon:{check:b,init:null,nullable:true,apply:i,themeable:true},icon:{check:b,init:null,nullable:true,apply:h}},members:{_applyLabel:function(k,l){if(k){this._showChildControl(c).setValue(k);}
else {this._excludeChildControl(c);}
;}
,_applySortIcon:function(m,n){if(m){this._showChildControl(a).setSource(m);}
else {this._excludeChildControl(a);}
;}
,_applyIcon:function(o,p){if(o){this._showChildControl(d).setSource(o);}
else {this._excludeChildControl(d);}
;}
,_createChildControlImpl:function(q,r){var s;switch(q){case c:s=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});this._add(s,{row:0,column:1});break;case a:s=new qx.ui.basic.Image(this.getSortIcon());s.setAnonymous(true);this._add(s,{row:0,column:2});break;case d:s=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});this._add(s,{row:0,column:0});break;};return s||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,q);}
}});}
)();
(function(){var n="' must be defined!",m="height",h="' is not supported by the Grid layout!",g="Invalid parameter 'column'",f="The property '",e="'",d="Value must be positive",c="qx.ui.layout.Grid",b="maxHeight",a="Cannot add widget '",M="width",L=") for '",K="'!. ",J="minHeight",I="' in this cell (",H=", ",G="The layout properties 'row' and 'column' of the child widget '",F="minWidth",E="maxWidth",D="Invalid parameter 'row'",u="There is already a widget '",v="vAlign",s="hAlign",t="bottom",q="Integer",r="_applyLayoutChange",o="center",p="middle",w="right",z="flex",B="qx.debug",A="top",C="left";qx.Class.define(c,{extend:qx.ui.layout.Abstract,construct:function(N,O){qx.ui.layout.Abstract.call(this);this.__me=[];this.__mf=[];if(N){this.setSpacingX(N);}
;if(O){this.setSpacingY(O);}
;}
,properties:{spacingX:{check:q,init:0,apply:r},spacingY:{check:q,init:0,apply:r}},members:{__mg:null,__me:null,__mf:null,__mh:null,__mi:null,__mj:null,__mk:null,__ml:null,__mm:null,verifyLayoutProperty:qx.core.Environment.select(B,{"true":function(P,name,Q){var R={"row":1,"column":1,"rowSpan":1,"colSpan":1};this.assert(R[name]==1,f+name+h);this.assertInteger(Q);this.assert(Q>=0,d);}
,"false":null}),__mn:function(){var X=[];var W=[];var Y=[];var U=-1;var T=-1;var bb=this._getLayoutChildren();for(var i=0,l=bb.length;i<l;i++){var V=bb[i];var ba=V.getLayoutProperties();var bc=ba.row;var S=ba.column;ba.colSpan=ba.colSpan||1;ba.rowSpan=ba.rowSpan||1;if(bc==null||S==null){throw new Error(G+V+n);}
;if(X[bc]&&X[bc][S]){throw new Error(a+V+K+u+X[bc][S]+I+bc+H+S+L+this+e);}
;for(var x=S;x<S+ba.colSpan;x++){for(var y=bc;y<bc+ba.rowSpan;y++){if(X[y]==undefined){X[y]=[];}
;X[y][x]=V;T=Math.max(T,x);U=Math.max(U,y);}
;}
;if(ba.rowSpan>1){Y.push(V);}
;if(ba.colSpan>1){W.push(V);}
;}
;for(var y=0;y<=U;y++){if(X[y]==undefined){X[y]=[];}
;}
;this.__mg=X;this.__mh=W;this.__mi=Y;this.__mj=U;this.__mk=T;this.__ml=null;this.__mm=null;delete this._invalidChildrenCache;}
,_setRowData:function(bd,be,bf){var bg=this.__me[bd];if(!bg){this.__me[bd]={};this.__me[bd][be]=bf;}
else {bg[be]=bf;}
;}
,_setColumnData:function(bh,bi,bj){var bk=this.__mf[bh];if(!bk){this.__mf[bh]={};this.__mf[bh][bi]=bj;}
else {bk[bi]=bj;}
;}
,setSpacing:function(bl){this.setSpacingY(bl);this.setSpacingX(bl);return this;}
,setColumnAlign:function(bm,bn,bo){if(qx.core.Environment.get(B)){this.assertInteger(bm,g);this.assertInArray(bn,[C,o,w]);this.assertInArray(bo,[A,p,t]);}
;this._setColumnData(bm,s,bn);this._setColumnData(bm,v,bo);this._applyLayoutChange();return this;}
,getColumnAlign:function(bp){var bq=this.__mf[bp]||{};return {vAlign:bq.vAlign||A,hAlign:bq.hAlign||C};}
,setRowAlign:function(br,bs,bt){if(qx.core.Environment.get(B)){this.assertInteger(br,D);this.assertInArray(bs,[C,o,w]);this.assertInArray(bt,[A,p,t]);}
;this._setRowData(br,s,bs);this._setRowData(br,v,bt);this._applyLayoutChange();return this;}
,getRowAlign:function(bu){var bv=this.__me[bu]||{};return {vAlign:bv.vAlign||A,hAlign:bv.hAlign||C};}
,getCellWidget:function(bw,bx){if(this._invalidChildrenCache){this.__mn();}
;var bw=this.__mg[bw]||{};return bw[bx]||null;}
,getRowCount:function(){if(this._invalidChildrenCache){this.__mn();}
;return this.__mj+1;}
,getColumnCount:function(){if(this._invalidChildrenCache){this.__mn();}
;return this.__mk+1;}
,getCellAlign:function(by,bz){var bF=A;var bD=C;var bE=this.__me[by];var bB=this.__mf[bz];var bA=this.__mg[by][bz];if(bA){var bC={vAlign:bA.getAlignY(),hAlign:bA.getAlignX()};}
else {bC={};}
;if(bC.vAlign){bF=bC.vAlign;}
else if(bE&&bE.vAlign){bF=bE.vAlign;}
else if(bB&&bB.vAlign){bF=bB.vAlign;}
;;if(bC.hAlign){bD=bC.hAlign;}
else if(bB&&bB.hAlign){bD=bB.hAlign;}
else if(bE&&bE.hAlign){bD=bE.hAlign;}
;;return {vAlign:bF,hAlign:bD};}
,setColumnFlex:function(bG,bH){this._setColumnData(bG,z,bH);this._applyLayoutChange();return this;}
,getColumnFlex:function(bI){var bJ=this.__mf[bI]||{};return bJ.flex!==undefined?bJ.flex:0;}
,setRowFlex:function(bK,bL){this._setRowData(bK,z,bL);this._applyLayoutChange();return this;}
,getRowFlex:function(bM){var bN=this.__me[bM]||{};var bO=bN.flex!==undefined?bN.flex:0;return bO;}
,setColumnMaxWidth:function(bP,bQ){this._setColumnData(bP,E,bQ);this._applyLayoutChange();return this;}
,getColumnMaxWidth:function(bR){var bS=this.__mf[bR]||{};return bS.maxWidth!==undefined?bS.maxWidth:Infinity;}
,setColumnWidth:function(bT,bU){this._setColumnData(bT,M,bU);this._applyLayoutChange();return this;}
,getColumnWidth:function(bV){var bW=this.__mf[bV]||{};return bW.width!==undefined?bW.width:null;}
,setColumnMinWidth:function(bX,bY){this._setColumnData(bX,F,bY);this._applyLayoutChange();return this;}
,getColumnMinWidth:function(ca){var cb=this.__mf[ca]||{};return cb.minWidth||0;}
,setRowMaxHeight:function(cc,cd){this._setRowData(cc,b,cd);this._applyLayoutChange();return this;}
,getRowMaxHeight:function(ce){var cf=this.__me[ce]||{};return cf.maxHeight||Infinity;}
,setRowHeight:function(cg,ch){this._setRowData(cg,m,ch);this._applyLayoutChange();return this;}
,getRowHeight:function(ci){var cj=this.__me[ci]||{};return cj.height!==undefined?cj.height:null;}
,setRowMinHeight:function(ck,cl){this._setRowData(ck,J,cl);this._applyLayoutChange();return this;}
,getRowMinHeight:function(cm){var cn=this.__me[cm]||{};return cn.minHeight||0;}
,__mo:function(co){var cs=co.getSizeHint();var cr=co.getMarginLeft()+co.getMarginRight();var cq=co.getMarginTop()+co.getMarginBottom();var cp={height:cs.height+cq,width:cs.width+cr,minHeight:cs.minHeight+cq,minWidth:cs.minWidth+cr,maxHeight:cs.maxHeight+cq,maxWidth:cs.maxWidth+cr};return cp;}
,_fixHeightsRowSpan:function(ct){var cA=this.getSpacingY();for(var i=0,l=this.__mi.length;i<l;i++){var cH=this.__mi[i];var cD=this.__mo(cH);var cw=cH.getLayoutProperties();var cC=cw.row;var cM=cA*(cw.rowSpan-1);var cu=cM;var cx={};for(var j=0;j<cw.rowSpan;j++){var cB=cw.row+j;var cL=ct[cB];var cN=this.getRowFlex(cB);if(cN>0){cx[cB]={min:cL.minHeight,value:cL.height,max:cL.maxHeight,flex:cN};}
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
,_fixWidthsColSpan:function(cO){var cS=this.getSpacingX();for(var i=0,l=this.__mh.length;i<l;i++){var cP=this.__mh[i];var cR=this.__mo(cP);var cU=cP.getLayoutProperties();var cQ=cU.column;var db=cS*(cU.colSpan-1);var cT=db;var cV={};var cX;for(var j=0;j<cU.colSpan;j++){var dc=cU.column+j;var da=cO[dc];var cY=this.getColumnFlex(dc);if(cY>0){cV[dc]={min:da.minWidth,value:da.width,max:da.maxWidth,flex:cY};}
;db+=da.width;cT+=da.minWidth;}
;if(db<cR.width){var cW=qx.ui.layout.Util.computeFlexOffsets(cV,cR.width,db);for(var j=0;j<cU.colSpan;j++){cX=cW[cQ+j]?cW[cQ+j].offset:0;cO[cQ+j].width+=cX;}
;}
;if(cT<cR.minWidth){var cW=qx.ui.layout.Util.computeFlexOffsets(cV,cR.minWidth,cT);for(var j=0;j<cU.colSpan;j++){cX=cW[cQ+j]?cW[cQ+j].offset:0;cO[cQ+j].minWidth+=cX;}
;}
;}
;}
,_getRowHeights:function(){if(this.__ml!=null){return this.__ml;}
;var dm=[];var df=this.__mj;var de=this.__mk;for(var dn=0;dn<=df;dn++){var dg=0;var di=0;var dh=0;for(var dl=0;dl<=de;dl++){var dd=this.__mg[dn][dl];if(!dd){continue;}
;var dj=dd.getLayoutProperties().rowSpan||0;if(dj>1){continue;}
;var dk=this.__mo(dd);if(this.getRowFlex(dn)>0){dg=Math.max(dg,dk.minHeight);}
else {dg=Math.max(dg,dk.height);}
;di=Math.max(di,dk.height);}
;var dg=Math.max(dg,this.getRowMinHeight(dn));var dh=this.getRowMaxHeight(dn);if(this.getRowHeight(dn)!==null){var di=this.getRowHeight(dn);}
else {var di=Math.max(dg,Math.min(di,dh));}
;dm[dn]={minHeight:dg,height:di,maxHeight:dh};}
;if(this.__mi.length>0){this._fixHeightsRowSpan(dm);}
;this.__ml=dm;return dm;}
,_getColWidths:function(){if(this.__mm!=null){return this.__mm;}
;var dt=[];var dq=this.__mk;var ds=this.__mj;for(var dy=0;dy<=dq;dy++){var dw=0;var dv=0;var dr=Infinity;for(var dz=0;dz<=ds;dz++){var dp=this.__mg[dz][dy];if(!dp){continue;}
;var du=dp.getLayoutProperties().colSpan||0;if(du>1){continue;}
;var dx=this.__mo(dp);if(this.getColumnFlex(dy)>0){dv=Math.max(dv,dx.minWidth);}
else {dv=Math.max(dv,dx.width);}
;dw=Math.max(dw,dx.width);}
;dv=Math.max(dv,this.getColumnMinWidth(dy));dr=this.getColumnMaxWidth(dy);if(this.getColumnWidth(dy)!==null){var dw=this.getColumnWidth(dy);}
else {var dw=Math.max(dv,Math.min(dw,dr));}
;dt[dy]={minWidth:dv,width:dw,maxWidth:dr};}
;if(this.__mh.length>0){this._fixWidthsColSpan(dt);}
;this.__mm=dt;return dt;}
,_getColumnFlexOffsets:function(dA){var dB=this.getSizeHint();var dF=dA-dB.width;if(dF==0){return {};}
;var dD=this._getColWidths();var dC={};for(var i=0,l=dD.length;i<l;i++){var dG=dD[i];var dE=this.getColumnFlex(i);if((dE<=0)||(dG.width==dG.maxWidth&&dF>0)||(dG.width==dG.minWidth&&dF<0)){continue;}
;dC[i]={min:dG.minWidth,value:dG.width,max:dG.maxWidth,flex:dE};}
;return qx.ui.layout.Util.computeFlexOffsets(dC,dA,dB.width);}
,_getRowFlexOffsets:function(dH){var dI=this.getSizeHint();var dL=dH-dI.height;if(dL==0){return {};}
;var dM=this._getRowHeights();var dJ={};for(var i=0,l=dM.length;i<l;i++){var dN=dM[i];var dK=this.getRowFlex(i);if((dK<=0)||(dN.height==dN.maxHeight&&dL>0)||(dN.height==dN.minHeight&&dL<0)){continue;}
;dJ[i]={min:dN.minHeight,value:dN.height,max:dN.maxHeight,flex:dK};}
;return qx.ui.layout.Util.computeFlexOffsets(dJ,dH,dI.height);}
,renderLayout:function(dO,dP){if(this._invalidChildrenCache){this.__mn();}
;var ee=qx.ui.layout.Util;var dR=this.getSpacingX();var dX=this.getSpacingY();var ej=this._getColWidths();var ei=this._getColumnFlexOffsets(dO);var dS=[];var el=this.__mk;var dQ=this.__mj;var ek;for(var em=0;em<=el;em++){ek=ei[em]?ei[em].offset:0;dS[em]=ej[em].width+ek;}
;var eb=this._getRowHeights();var ed=this._getRowFlexOffsets(dP);var es=[];for(var dY=0;dY<=dQ;dY++){ek=ed[dY]?ed[dY].offset:0;es[dY]=eb[dY].height+ek;}
;var et=0;for(var em=0;em<=el;em++){var top=0;for(var dY=0;dY<=dQ;dY++){var eg=this.__mg[dY][em];if(!eg){top+=es[dY]+dX;continue;}
;var dT=eg.getLayoutProperties();if(dT.row!==dY||dT.column!==em){top+=es[dY]+dX;continue;}
;var er=dR*(dT.colSpan-1);for(var i=0;i<dT.colSpan;i++){er+=dS[em+i];}
;var eh=dX*(dT.rowSpan-1);for(var i=0;i<dT.rowSpan;i++){eh+=es[dY+i];}
;var dU=eg.getSizeHint();var ep=eg.getMarginTop();var ef=eg.getMarginLeft();var ec=eg.getMarginBottom();var dW=eg.getMarginRight();var ea=Math.max(dU.minWidth,Math.min(er-ef-dW,dU.maxWidth));var eq=Math.max(dU.minHeight,Math.min(eh-ep-ec,dU.maxHeight));var en=this.getCellAlign(dY,em);var eo=et+ee.computeHorizontalAlignOffset(en.hAlign,ea,er,ef,dW);var dV=top+ee.computeVerticalAlignOffset(en.vAlign,eq,eh,ep,ec);eg.renderLayout(eo,dV,ea,eq);top+=es[dY]+dX;}
;et+=dS[em]+dR;}
;}
,invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);this.__mm=null;this.__ml=null;}
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__mn();}
;var ey=this._getColWidths();var eA=0,eB=0;for(var i=0,l=ey.length;i<l;i++){var eC=ey[i];if(this.getColumnFlex(i)>0){eA+=eC.minWidth;}
else {eA+=eC.width;}
;eB+=eC.width;}
;var eD=this._getRowHeights();var ew=0,ez=0;for(var i=0,l=eD.length;i<l;i++){var eE=eD[i];if(this.getRowFlex(i)>0){ew+=eE.minHeight;}
else {ew+=eE.height;}
;ez+=eE.height;}
;var ev=this.getSpacingX()*(ey.length-1);var eu=this.getSpacingY()*(eD.length-1);var ex={minWidth:eA+ev,width:eB+ev,minHeight:ew+eu,height:ez+eu};return ex;}
},destruct:function(){this.__mg=this.__me=this.__mf=this.__mh=this.__mi=this.__mm=this.__ml=null;}
});}
)();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;}
,resetValue:function(){}
,getValue:function(){}
}});}
)();
(function(){var k="os.name",j="_applyTextAlign",i="qx.ui.core.Widget",h="nowrap",g="changeStatus",f="changeTextAlign",d="_applyWrap",c="changeValue",b="qx.ui.basic.Label",a="osx",M="css.textoverflow",L="textAlign",K="html.xul",J="_applyValue",I="center",H="Only rich labels support wrap.",G="_applyBuddy",F="String",E="whiteSpace",D="Only rich labels are selectable in browsers with Gecko engine!",r="engine.version",s="right",p="gecko",q="justify",n="changeRich",o="normal",l="_applyRich",m="engine.name",t="click",u="label",x="left",w="A",z="Boolean",y="qx.debug",B="enabled",A="changeLocale",v="color",C="qx.dynlocale";qx.Class.define(b,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(N){qx.ui.core.Widget.call(this);if(N!=null){this.setValue(N);}
;if(qx.core.Environment.get(C)){qx.locale.Manager.getInstance().addListener(A,this._onChangeLocale,this);}
;}
,properties:{rich:{check:z,init:false,event:n,apply:l},wrap:{check:z,init:true,apply:d},value:{check:F,apply:J,event:c,nullable:true},buddy:{check:i,apply:G,nullable:true,init:null,dereference:true},textAlign:{check:[x,I,s,q],nullable:true,themeable:true,apply:j,event:f},appearance:{refine:true,init:u},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__lw:null,__lx:null,__ly:null,__lz:null,__lA:null,_getContentHint:function(){if(this.__lx){this.__lB=this.__lC();delete this.__lx;}
;return {width:this.__lB.width,height:this.__lB.height};}
,_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();}
,_applySelectable:function(O){if(!qx.core.Environment.get(M)&&qx.core.Environment.get(K)){if(O&&!this.isRich()){if(qx.core.Environment.get(y)){this.warn(D);}
;return;}
;}
;qx.ui.core.Widget.prototype._applySelectable.call(this,O);}
,_getContentHeightForWidth:function(P){if(!this.getRich()&&!this.getWrap()){return null;}
;return this.__lC(P).height;}
,_createContentElement:function(){return new qx.html.Label;}
,_applyTextAlign:function(Q,R){this.getContentElement().setStyle(L,Q);}
,_applyTextColor:function(S,T){if(S){this.getContentElement().setStyle(v,qx.theme.manager.Color.getInstance().resolve(S));}
else {this.getContentElement().removeStyle(v);}
;}
,__lB:{width:0,height:0},_applyFont:function(U,V){if(V&&this.__lw&&this.__lA){this.__lw.removeListenerById(this.__lA);this.__lA=null;}
;var W;if(U){this.__lw=qx.theme.manager.Font.getInstance().resolve(U);if(this.__lw instanceof qx.bom.webfonts.WebFont){this.__lA=this.__lw.addListener(g,this._onWebFontStatusChange,this);}
;W=this.__lw.getStyles();}
else {this.__lw=null;W=qx.bom.Font.getDefaultStyles();}
;if(this.getTextColor()!=null){delete W[v];}
;this.getContentElement().setStyles(W);this.__lx=true;qx.ui.core.queue.Layout.add(this);}
,__lC:function(X){var bc=qx.bom.Label;var ba=this.getFont();var Y=ba?this.__lw.getStyles():qx.bom.Font.getDefaultStyles();var content=this.getValue()||w;var bb=this.getRich();if(this.__lA){this.__lD();}
;return bb?bc.getHtmlSize(content,Y,X):bc.getTextSize(content,Y);}
,__lD:function(){if(qx.core.Environment.get(k)==a&&qx.core.Environment.get(m)==p&&parseInt(qx.core.Environment.get(r),10)>9){if(!this.getContentElement()){return;}
;var bd=this.getContentElement().getDomElement();if(bd){bd.innerHTML=bd.innerHTML;}
;}
;}
,_applyBuddy:function(be,bf){if(bf!=null){bf.removeBinding(this.__ly);this.__ly=null;this.removeListenerById(this.__lz);this.__lz=null;}
;if(be!=null){this.__ly=be.bind(B,this,B);this.__lz=this.addListener(t,function(){if(be.isFocusable()){be.focus.apply(be);}
;}
,this);}
;}
,_applyRich:function(bg){this.getContentElement().setRich(bg);this.__lx=true;qx.ui.core.queue.Layout.add(this);}
,_applyWrap:function(bh,bi){if(bh&&!this.isRich()){if(qx.core.Environment.get(y)){this.warn(H);}
;}
;if(this.isRich()){var bj=bh?o:h;this.getContentElement().setStyle(E,bj);}
;}
,_onChangeLocale:qx.core.Environment.select(C,{"true":function(e){var content=this.getValue();if(content&&content.translate){this.setValue(content.translate());}
;}
,"false":null}),_onWebFontStatusChange:function(bk){if(bk.getData().valid===true){this.__lx=true;qx.ui.core.queue.Layout.add(this);}
;}
,_applyValue:function(bl,bm){this.getContentElement().setValue(bl);this.__lx=true;qx.ui.core.queue.Layout.add(this);}
},destruct:function(){if(qx.core.Environment.get(C)){qx.locale.Manager.getInstance().removeListener(A,this._onChangeLocale,this);}
;if(this.__ly!=null){var bn=this.getBuddy();if(bn!=null&&!bn.isDisposed()){bn.removeBinding(this.__ly);}
;}
;if(this.__lw&&this.__lA){this.__lw.removeListenerById(this.__lA);}
;this.__lw=this.__ly=null;}
});}
)();
(function(){var c="qx.html.Label",b="The label mode cannot be modified after initial creation",a="value";qx.Class.define(c,{extend:qx.html.Element,members:{__lE:null,_applyProperty:function(name,d){qx.html.Element.prototype._applyProperty.call(this,name,d);if(name==a){var e=this.getDomElement();qx.bom.Label.setValue(e,d);}
;}
,_createDomElement:function(){var g=this.__lE;var f=qx.bom.Label.create(this._content,g);return f;}
,_copyData:function(h){return qx.html.Element.prototype._copyData.call(this,true);}
,setRich:function(i){var j=this.getDomElement();if(j){throw new Error(b);}
;i=!!i;if(this.__lE==i){return;}
;this.__lE=i;return this;}
,setValue:function(k){this._setProperty(a,k);return this;}
,getValue:function(){return this._getProperty(a);}
}});}
)();
(function(){var j="px",i="crop",h="gecko",g="end",f="browser.name",e="100%",d="chrome",c="visible",b="qx.bom.Label",a="ellipsis",E="browser.version",D="engine.version",C="mshtml",B="-1000px",A="absolute",z="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",y="nowrap",x="div",w="normal",v="engine.name",q="block",r="label",o="text",p="value",m="",n="hidden",k="auto",l="0",s="inherit",t="html.xul",u="css.textoverflow";qx.Bootstrap.define(b,{statics:{__lF:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__lG:function(){var F=this.__lI(false);document.body.insertBefore(F,document.body.firstChild);return this._textElement=F;}
,__lH:function(){var G=this.__lI(true);document.body.insertBefore(G,document.body.firstChild);return this._htmlElement=G;}
,__lI:function(H){var I=qx.dom.Element.create(x);var J=I.style;J.width=J.height=k;J.left=J.top=B;J.visibility=n;J.position=A;J.overflow=c;J.display=q;if(H){J.whiteSpace=w;}
else {J.whiteSpace=y;if(!qx.core.Environment.get(u)&&qx.core.Environment.get(t)){var K=document.createElementNS(z,r);var J=K.style;J.padding=l;J.margin=l;J.width=k;for(var L in this.__lF){J[L]=s;}
;I.appendChild(K);}
;}
;return I;}
,__lJ:function(M){var N={};if(M){N.whiteSpace=w;}
else if(!qx.core.Environment.get(u)&&qx.core.Environment.get(t)){N.display=q;}
else {N.overflow=n;N.whiteSpace=y;N[qx.core.Environment.get(u)]=a;}
;return N;}
,create:function(content,O,P){if(!P){P=window;}
;var Q=P.document.createElement(x);if(O){Q.useHtml=true;}
else if(!qx.core.Environment.get(u)&&qx.core.Environment.get(t)){var S=P.document.createElementNS(z,r);var R=S.style;R.cursor=s;R.color=s;R.overflow=n;R.maxWidth=e;R.padding=l;R.margin=l;R.width=k;for(var T in this.__lF){S.style[T]=s;}
;S.setAttribute(i,g);Q.appendChild(S);}
else {qx.bom.element.Style.setStyles(Q,this.__lJ(O));}
;if(content){this.setValue(Q,content);}
;return Q;}
,setValue:function(U,V){V=V||m;if(U.useHtml){U.innerHTML=V;}
else if(!qx.core.Environment.get(u)&&qx.core.Environment.get(t)){U.firstChild.setAttribute(p,V);}
else {qx.bom.element.Attribute.set(U,o,V);}
;}
,getValue:function(W){if(W.useHtml){return W.innerHTML;}
else if(!qx.core.Environment.get(u)&&qx.core.Environment.get(t)){return W.firstChild.getAttribute(p)||m;}
else {return qx.bom.element.Attribute.get(W,o);}
;}
,getHtmlSize:function(content,X,Y){var ba=this._htmlElement||this.__lH();ba.style.width=Y!=undefined?Y+j:k;ba.innerHTML=content;return this.__lK(ba,X);}
,getTextSize:function(bb,bc){var bd=this._textElement||this.__lG();if(!qx.core.Environment.get(u)&&qx.core.Environment.get(t)){bd.firstChild.setAttribute(p,bb);}
else {qx.bom.element.Attribute.set(bd,o,bb);}
;return this.__lK(bd,bc);}
,__lK:function(be,bf){var bg=this.__lF;if(!bf){bf={};}
;for(var bh in bg){be.style[bh]=bf[bh]||m;}
;var bi=qx.bom.element.Dimension.getSize(be);if((qx.core.Environment.get(v)==h)){bi.width++;}
;if((qx.core.Environment.get(v)==C)&&parseFloat(qx.core.Environment.get(D))>=9){bi.width++;}
;if(qx.core.Environment.get(f)==d&&parseFloat(qx.core.Environment.get(E))>=22){bi.width++;}
;return bi;}
}});}
)();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);this.initVisibility();}
,properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{show:function(){if(this.getLayoutParent()==null){qx.core.Init.getApplication().getRoot().add(this);}
;qx.ui.container.Composite.prototype.show.call(this);}
,_applyVisibility:function(g,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,g,h);var i=qx.ui.popup.Manager.getInstance();g===d?i.add(this):i.remove(this);}
},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);}
});}
)();
(function(){var h="__nA",g="blur",f="qx.ui.popup.Manager",d="singleton",c="mousedown",b="qx.debug",a="Object is no popup: ";qx.Class.define(f,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__nA=[];qx.event.Registration.addListener(document.documentElement,c,this.__nC,this,true);qx.bom.Element.addListener(window,g,this.hideAll,this);}
,members:{__nA:null,add:function(j){if(qx.core.Environment.get(b)){if(!(j instanceof qx.ui.popup.Popup)){throw new Error(a+j);}
;}
;this.__nA.push(j);this.__nB();}
,remove:function(k){if(qx.core.Environment.get(b)){if(!(k instanceof qx.ui.popup.Popup)){throw new Error(a+k);}
;}
;if(this.__nA){qx.lang.Array.remove(this.__nA,k);this.__nB();}
;}
,hideAll:function(){var m;var n=this.__nA;if(n){for(var i=0,l=n.length;i<l;i++){var m=n[i];m.getAutoHide()&&m.exclude();}
;}
;}
,__nB:function(){var o=1e7;for(var i=0;i<this.__nA.length;i++){this.__nA[i].setZIndex(o++);}
;}
,__nC:function(e){var q=qx.ui.core.Widget.getWidgetByElement(e.getTarget());var r=this.__nA;for(var i=0;i<r.length;i++){var p=r[i];if(!p.getAutoHide()||q==p||qx.ui.core.Widget.contains(p,q)){continue;}
;p.exclude();}
;}
},destruct:function(){qx.event.Registration.removeListener(document.documentElement,c,this.__nC,this,true);this._disposeArray(h);}
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
(function(){var a="qx.ui.table.ICellRenderer";qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;}
}});}
)();
(function(){var j="qooxdoo-table-cell",i="content",h='</div>',g="nowrap",f="default",e="}",d="width:",c=".qooxdoo-table-cell-right { text-align:right } ",b="css.boxsizing",a="css.boxmodel",I="0px 6px",H='<div class="',G="0px",F="height:",E="1px solid ",D=".qooxdoo-table-cell-bold { font-weight:bold } ",C="String",B="} ",A='>',z='" ',q="ellipsis",r="content-box",o='left:',p="qx.ui.table.cellrenderer.Abstract",m='" style="',n="abstract",k="none",l="hidden",s="table-column-line",t='px;',v=".qooxdoo-table-cell-italic { font-style:italic} ",u="absolute",x="px;",w=".qooxdoo-table-cell {",y="";qx.Class.define(p,{type:n,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);var J=qx.ui.table.cellrenderer.Abstract;if(!J.__nd){var L=qx.theme.manager.Color.getInstance();J.__nd=this.self(arguments);var K=w+qx.bom.element.Style.compile({position:u,top:G,overflow:l,whiteSpace:g,borderRight:E+L.resolve(s),padding:I,cursor:f,textOverflow:q,userSelect:k})+B+c+v+D;if(qx.core.Environment.get(b)){K+=w+qx.bom.element.BoxSizing.compile(r)+e;}
;J.__nd.stylesheet=qx.bom.Stylesheet.createElement(K);}
;}
,properties:{defaultCellStyle:{init:null,check:C,nullable:true}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(M){return j;}
,_getCellStyle:function(N){return N.style||y;}
,_getCellAttributes:function(O){return y;}
,_getContentHtml:function(P){return P.value||y;}
,_getCellSizeStyle:function(Q,R,S,T){var U=y;if(qx.core.Environment.get(a)==i){Q-=S;R-=T;}
;U+=d+Math.max(Q,0)+x;U+=F+Math.max(R,0)+x;return U;}
,createDataCellHtml:function(V,W){W.push(H,this._getCellClass(V),m,o,V.styleLeft,t,this._getCellSizeStyle(V.styleWidth,V.styleHeight,this._insetX,this._insetY),this._getCellStyle(V),z,this._getCellAttributes(V),A+this._getContentHtml(V),h);}
}});}
)();
(function(){var h="Boolean",g="qx.ui.table.cellrenderer.Default",f=" qooxdoo-table-cell-bold",e=" qooxdoo-table-cell-right",d=" qooxdoo-table-cell-italic",c="string",b="",a="number";qx.Class.define(g,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4,_numberFormat:null},properties:{useAutoAlign:{check:h,init:true}},members:{_getStyleFlags:function(i){if(this.getUseAutoAlign()){if(typeof i.value==a){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;}
;}
;return 0;}
,_getCellClass:function(j){var k=qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this,j);if(!k){return b;}
;var l=this._getStyleFlags(j);if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){k+=e;}
;if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){k+=f;}
;if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){k+=d;}
;return k;}
,_getContentHtml:function(m){return qx.bom.String.escape(this._formatValue(m));}
,_formatValue:function(n){var p=n.value;var o;if(p==null){return b;}
;if(typeof p==c){return p;}
else if(typeof p==a){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);}
;o=qx.ui.table.cellrenderer.Default._numberFormat.format(p);}
else if(p instanceof Date){o=qx.util.format.DateFormat.getDateInstance().format(p);}
else {o=p.toString();}
;;return o;}
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
(function(){var a="qx.util.format.IFormat";qx.Interface.define(a,{members:{format:function(b){}
,parse:function(c){}
}});}
)();
(function(){var j="Boolean",i="^",h="Number string '",g="' does not match the number format",f="NaN",e='(',d="-Infinity",c='{0,1}[0-9]{3}){0,})',b='([0-9]{1,3}(?:',a="qx.util.format.NumberFormat",v='([-+]){0,1}',u="g",t="$",s='\\d+){0,1}',r=".",q="Infinity",p="0",o="String",n="changeNumberFormat",m="-",k="Number",l="";qx.Class.define(a,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(w){qx.core.Object.call(this);this.__hN=w;}
,properties:{minimumIntegerDigits:{check:k,init:0},maximumIntegerDigits:{check:k,nullable:true},minimumFractionDigits:{check:k,init:0},maximumFractionDigits:{check:k,nullable:true},groupingUsed:{check:j,init:true},prefix:{check:o,init:l,event:n},postfix:{check:o,init:l,event:n}},members:{__hN:null,format:function(x){switch(x){case Infinity:return q;case -Infinity:return d;case NaN:return f;};var B=(x<0);if(B){x=-x;}
;if(this.getMaximumFractionDigits()!=null){var I=Math.pow(10,this.getMaximumFractionDigits());x=Math.round(x*I)/I;}
;var H=String(Math.floor(x)).length;var y=l+x;var E=y.substring(0,H);while(E.length<this.getMinimumIntegerDigits()){E=p+E;}
;if(this.getMaximumIntegerDigits()!=null&&E.length>this.getMaximumIntegerDigits()){E=E.substring(E.length-this.getMaximumIntegerDigits());}
;var D=y.substring(H+1);while(D.length<this.getMinimumFractionDigits()){D+=p;}
;if(this.getMaximumFractionDigits()!=null&&D.length>this.getMaximumFractionDigits()){D=D.substring(0,this.getMaximumFractionDigits());}
;if(this.getGroupingUsed()){var A=E;E=l;var G;for(G=A.length;G>3;G-=3){E=l+qx.locale.Number.getGroupSeparator(this.__hN)+A.substring(G-3,G)+E;}
;E=A.substring(0,G)+E;}
;var C=this.getPrefix()?this.getPrefix():l;var z=this.getPostfix()?this.getPostfix():l;var F=C+(B?m:l)+E;if(D.length>0){F+=l+qx.locale.Number.getDecimalSeparator(this.__hN)+D;}
;F+=z;return F;}
,parse:function(J){var O=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__hN)+l);var M=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__hN)+l);var K=new RegExp(i+qx.lang.String.escapeRegexpChars(this.getPrefix())+v+b+O+c+e+M+s+qx.lang.String.escapeRegexpChars(this.getPostfix())+t);var N=K.exec(J);if(N==null){throw new Error(h+J+g);}
;var P=(N[1]==m);var R=N[2];var Q=N[3];R=R.replace(new RegExp(O,u),l);var L=(P?m:l)+R;if(Q!=null&&Q.length!=0){Q=Q.replace(new RegExp(M),l);L+=r+Q;}
;return parseFloat(L);}
}});}
)();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);}
,getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);}
,getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);}
}});}
)();
(function(){var cU='W',cT="qqqq",cS="h",cR="KK",cQ=" is not supported",cP="Z",cO="Date string '",cN="GGGGG",cM=". Wildcard ",cL="LL",bQ="^",bP='4th quarter',bO="SSS",bN="qqq",bM='3rd quarter',bL="K",bK='q',bJ="Provided date is invalid",bI="Error parsing date '",bH='G',dc="a",dd='2nd quarter',da="dd",db="qx.util.format.DateFormat",cX='weekDay',cY="ee",cV="q",cW="QQQQ",de="ww",df="H",cu='Y+',ct='wide',cw="(\\d\\d\\d?)",cv="(GMT[\\+\\-]\\d\\d:\\d\\d)",cy="_applyLocale",cx="Q",cA="c",cz="weekOfMonth",cs="GGG",cr='-',o="w",p="mm",q='h',r="S",s='s',t="QQQ",u="G",v="GG",w="kk",x="ss",du="([\\+\\-]\\d\\d\\d\\d)",dt='H',ds='S',dr='1st quarter',dy='Q1',dx="QQ",dw="HH",dv='k',dA="m",dz="DDD",bh='D',bi="': the value for day or month is too large",bf='K',bg="L",bl="hh",bm="e",bj="W",bk="GGGG",bd='Q2',be="MM",P="y+",O='narrow',R="yyyy-MM-dd HH:mm:ss",Q="' does not match the date format: ",L="short",K='d',N="unkown",M="\\d?",J="k",I="qx.debug",br='m',bs="z",bt="String",bu='Q3',bn='month',bo="DD",bp='isoUtcDateTime',bq="SS",bv="s",bw="M",ba='w',Y="$",X="?",W='Q4',V="qq",U='L',T='abbreviated',S="Y+",bc=":",bb='y',bx="quoted_literal",by="weekOfYear",bz='a',bA="day",bB="(-*",bC="GMT",bD="HH:mm:ss",bE='y+',bF="HHmmss",bG="long",bV="Malformed date format: ",bU='Y',bT='z',bS='BC',ca='c',bY="d",bX="D",bW='e',cd='B',cc='',cn='Before Christ',co='Z',cl=" ",cm="min",cj='M',ck="sec",ch="\\d",ci="+?",cp='E',cq="locale",cE="eeeee",cD="EEEE",cG='Anno Domini',cF="+",cI="eee",cH="ccc",cK="EEEEE",cJ="EE",cC="MMMM",cB='Q',dm="eeee",dn="LLLLL",dp="LLLL",dq="ms",di="(\\d\\d?\\d?)",dj="cccc",dk="dayOfYear",dl='AD',dg="ccccc",dh="E",n="MMM",m="EEE",h="MMMMM",g="LLL",f="quarter",e='A',d="default",c="0",b="literal",a="wildcard",A="'",B="(\\d?)",y="hour",z="abbreviated",E="wide",F="(\\d\\d*?)",C="narrow",D="-",G="stand-alone",H="",ce="format",cb="(\\d\\d?)",cg="(",cf="|",bR=")";qx.Class.define(db,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(dB,dC){qx.core.Object.call(this);if(!dC){this.__hN=qx.locale.Manager.getInstance().getLocale();this.__ne=qx.locale.Manager.getInstance().bind(cq,this,cq);}
else {this.__hN=dC;this.setLocale(dC);}
;this.__nf=this.__hN;if(dB!=null){this.__ng=dB.toString();if(this.__ng in qx.util.format.DateFormat.ISO_MASKS){if(this.__ng===bp){this.__nh=true;}
;this.__ng=qx.util.format.DateFormat.ISO_MASKS[this.__ng];}
;}
else {this.__ng=qx.locale.Date.getDateFormat(bG,this.__hN)+cl+qx.locale.Date.getDateTimeFormat(bF,bD,this.__hN);}
;}
,properties:{locale:{apply:cy,nullable:true,check:bt}},statics:{getDateTimeInstance:function(){var dE=qx.util.format.DateFormat;var dD=qx.locale.Date.getDateFormat(bG)+cl+qx.locale.Date.getDateTimeFormat(bF,bD);if(dE._dateInstance==null||dE._dateInstance.__ng!=dD){dE._dateTimeInstance=new dE();}
;return dE._dateTimeInstance;}
,getDateInstance:function(){var dG=qx.util.format.DateFormat;var dF=qx.locale.Date.getDateFormat(L)+H;if(dG._dateInstance==null||dG._dateInstance.__ng!=dF){dG._dateInstance=new dG(dF);}
;return dG._dateInstance;}
,ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:R,ISO_MASKS:{isoDate:"yyyy-MM-dd",isoTime:"HH:mm:ss",isoDateTime:"yyyy-MM-dd'T'HH:mm:ss",isoUtcDateTime:"yyyy-MM-dd'T'HH:mm:ss'Z'"},AM_MARKER:"am",PM_MARKER:"pm"},members:{__ne:null,__hN:null,__nf:null,__ng:null,__ni:null,__nj:null,__nk:null,__nh:null,__nl:function(dH,dI){var dJ=H+(dH<0?((-1)*dH):dH);while(dJ.length<dI){dJ=c+dJ;}
;return dH<0?D+dJ:dJ;}
,__nm:function(dK){var dL=new Date(dK.getTime());var dM=dL.getDate();while(dL.getMonth()!=0){dL.setDate(-1);dM+=dL.getDate()+1;}
;return dM;}
,__nn:function(dN){return new Date(dN.getTime()+(3-((dN.getDay()+6)%7))*86400000);}
,__no:function(dO){var dQ=this.__nn(dO);var dR=dQ.getFullYear();var dP=this.__nn(new Date(dR,0,4));return Math.floor(1.5+(dQ.getTime()-dP.getTime())/86400000/7);}
,__np:function(dS){var dU=this.__nn(dS);var dT=this.__nn(new Date(dS.getFullYear(),dS.getMonth(),4));return Math.floor(1.5+(dU.getTime()-dT.getTime())/86400000/7);}
,__nq:function(dV){var dW=this.__nn(dV);return dW.getFullYear();}
,__nr:function(dX){var dY=new Date(dX,2,1);dY.setDate(-1);return dY.getDate()+1===29;}
,__ns:function(ea,eb){var ef=0;var eg=0;if(!eb){eb=1971;}
;var ec=0;for(var i=1;i<=12;i++){var ee=new Date(eb,i,1);ee.setDate(-1);var ed=ee.getDate()+1;ec+=ed;if(ec<ea){ef++;eg+=ed;}
else {eg=ea-(ec-ed);break;}
;}
;return {month:ef,day:eg};}
,__nt:function(eh,ei,ej){var ek;switch(ei){case 11:ek=eh-1;if(eh!=this.__nq(new Date(ek,ei,ej))){ek=eh;}
;break;case 0:ek=eh+1;if(eh!=this.__nq(new Date(ek,ei,ej))){ek=eh;}
;break;default:ek=eh;};return ek;}
,_applyLocale:function(el,em){this.__hN=el===null?this.setLocale(this.__nf):el;}
,format:function(en){if(en==null){return null;}
;if(isNaN(en.getTime())){if(qx.core.Environment.get(I)){qx.log.Logger.error(bJ);}
;return null;}
;if(this.__nh){en=new Date(en.getUTCFullYear(),en.getUTCMonth(),en.getUTCDate(),en.getUTCHours(),en.getUTCMinutes(),en.getUTCSeconds(),en.getUTCMilliseconds());}
;var eq=this.__hN;var ev=en.getFullYear();var er=en.getMonth();var eu=en.getDate();var ey=en.getDay();var eB=en.getHours();var eH=en.getMinutes();var ez=en.getSeconds();var eF=en.getMilliseconds();var ex=en.getTimezoneOffset();var eC=ex>0?1:-1;var eo=Math.floor(Math.abs(ex)/60);var eE=Math.abs(ex)%60;this.__nu();var eG=H;for(var i=0;i<this.__nk.length;i++){var ew=this.__nk[i];if(ew.type==b){eG+=ew.text;}
else {var ep=ew.character;var eA=ew.size;var eI=X;switch(ep){case bb:if(eA==2){eI=this.__nl(ev%100,2);}
else {var es=Math.abs(ev);eI=es+H;if(eA>eI.length){for(var j=eI.length;j<eA;j++){eI=c+eI;}
;}
;if(ev<0){eI=D+eI;}
;}
;break;case bU:eI=this.__nq(en)+H;var es=eI.replace(cr,cc);if(eA>eI.length){for(var j=es.length;j<eA;j++){es=c+es;}
;}
;eI=eI.indexOf(D)!=-1?D+es:es;break;case bH:if(eA>=1&&eA<=3){eI=ev>0?dl:bS;}
else if(eA==4){eI=ev>0?cG:cn;}
else if(eA==5){eI=ev>0?e:cd;}
;;break;case cB:if(eA==1||eA==2){eI=this.__nl(parseInt(er/4)+1,eA);}
;if(eA==3){eI=cB+(parseInt(er/4)+1);}
;break;case bK:if(eA==1||eA==2){eI=this.__nl(parseInt(er/4)+1,eA);}
;if(eA==3){eI=cB+(parseInt(er/4)+1);}
;break;case bh:eI=this.__nl(this.__nm(en),eA);break;case K:eI=this.__nl(eu,eA);break;case ba:eI=this.__nl(this.__no(en),eA);break;case cU:eI=this.__np(en);break;case cp:if(eA>=1&&eA<=3){eI=qx.locale.Date.getDayName(z,ey,eq,ce,true);}
else if(eA==4){eI=qx.locale.Date.getDayName(E,ey,eq,ce,true);}
else if(eA==5){eI=qx.locale.Date.getDayName(C,ey,eq,ce,true);}
;;break;case bW:var et=qx.locale.Date.getWeekStart(eq);var eD=1+((ey-et>=0)?(ey-et):7+(ey-et));if(eA>=1&&eA<=2){eI=this.__nl(eD,eA);}
else if(eA==3){eI=qx.locale.Date.getDayName(z,ey,eq,ce,true);}
else if(eA==4){eI=qx.locale.Date.getDayName(E,ey,eq,ce,true);}
else if(eA==5){eI=qx.locale.Date.getDayName(C,ey,eq,ce,true);}
;;;break;case ca:var et=qx.locale.Date.getWeekStart(eq);var eD=1+((ey-et>=0)?(ey-et):7+(ey-et));if(eA==1){eI=cc+eD;}
else if(eA==3){eI=qx.locale.Date.getDayName(z,ey,eq,G,true);}
else if(eA==4){eI=qx.locale.Date.getDayName(E,ey,eq,G,true);}
else if(eA==5){eI=qx.locale.Date.getDayName(C,ey,eq,G,true);}
;;;break;case cj:if(eA==1||eA==2){eI=this.__nl(er+1,eA);}
else if(eA==3){eI=qx.locale.Date.getMonthName(z,er,eq,ce,true);}
else if(eA==4){eI=qx.locale.Date.getMonthName(E,er,eq,ce,true);}
else if(eA==5){eI=qx.locale.Date.getMonthName(C,er,eq,ce,true);}
;;;break;case U:if(eA==1||eA==2){eI=this.__nl(er+1,eA);}
else if(eA==3){eI=qx.locale.Date.getMonthName(z,er,eq,G,true);}
else if(eA==4){eI=qx.locale.Date.getMonthName(E,er,eq,G,true);}
else if(eA==5){eI=qx.locale.Date.getMonthName(C,er,eq,G,true);}
;;;break;case bz:eI=(eB<12)?qx.locale.Date.getAmMarker(eq):qx.locale.Date.getPmMarker(eq);break;case dt:eI=this.__nl(eB,eA);break;case dv:eI=this.__nl((eB==0)?24:eB,eA);break;case bf:eI=this.__nl(eB%12,eA);break;case q:eI=this.__nl(((eB%12)==0)?12:(eB%12),eA);break;case br:eI=this.__nl(eH,eA);break;case s:eI=this.__nl(ez,eA);break;case ds:eI=this.__nl(eF,3);if(eA<eI.length){eI=eI.substr(0,eA);}
else {while(eA>eI.length){eI+=c;}
;}
;break;case bT:if(eA>=1&&eA<=4){eI=bC+((eC>0)?D:cF)+this.__nl(Math.abs(eo),2)+bc+this.__nl(eE,2);}
;break;case co:if(eA>=1&&eA<=3){eI=((eC>0)?D:cF)+this.__nl(Math.abs(eo),2)+this.__nl(eE,2);}
else {eI=bC+((eC>0)?D:cF)+this.__nl(Math.abs(eo),2)+bc+this.__nl(eE,2);}
;break;};eG+=eI;}
;}
;return eG;}
,parse:function(eJ){this.__nv();var eS=this.__ni.regex.exec(eJ);if(eS==null){throw new Error(cO+eJ+Q+this.__ng);}
;var eK={era:1,year:1970,quarter:1,month:0,day:1,dayOfYear:1,hour:0,ispm:false,weekDay:4,weekYear:1970,weekOfMonth:1,weekOfYear:1,min:0,sec:0,ms:0};var eM=1;var eL=false;var eN=false;for(var i=0;i<this.__ni.usedRules.length;i++){var eO=this.__ni.usedRules[i];var eP=eS[eM];if(eO.field!=null){eK[eO.field]=parseInt(eP,10);}
else {eO.manipulator(eK,eP,eO.pattern);}
;if(eO.pattern==S){var eQ=false;for(var k=0;k<this.__ni.usedRules.length;k++){if(this.__ni.usedRules[k].pattern==bE){eQ=true;break;}
;}
;if(!eQ){eL=true;}
;}
;if(eO.pattern.indexOf(bX)!=-1){var eU=false;for(var k=0;k<this.__ni.usedRules.length;k++){if(this.__ni.usedRules[k].pattern.indexOf(bY)!=-1){eU=true;break;}
;}
;if(!eU){eN=true;}
;}
;eM+=(eO.groups==null)?1:eO.groups;}
;if(eL){eK.year=this.__nt(eK.weekYear,eK.month,eK.day);}
;if(eN){var eT=this.__ns(eK.dayOfYear,eK.year);eK.month=eT.month;eK.day=eT.day;}
;if(eK.era<0&&(eK.year*eK.era<0)){eK.year=eK.year*eK.era;}
;var eR=new Date(eK.year,eK.month,eK.day,(eK.ispm)?(eK.hour+12):eK.hour,eK.min,eK.sec,eK.ms);if(this.__nh){eR=new Date(eR.getUTCFullYear(),eR.getUTCMonth(),eR.getUTCDate(),eR.getUTCHours(),eR.getUTCMinutes(),eR.getUTCSeconds(),eR.getUTCMilliseconds());}
;if(eK.month!=eR.getMonth()||eK.year!=eR.getFullYear()){throw new Error(bI+eJ+bi);}
;return eR;}
,__nu:function(){if(this.__nk!=null){return;}
;this.__nk=[];var fa;var eX=0;var fc=H;var eV=this.__ng;var eY=d;var i=0;while(i<eV.length){var fb=eV.charAt(i);switch(eY){case bx:if(fb==A){if(i+1>=eV.length){i++;break;}
;var eW=eV.charAt(i+1);if(eW==A){fc+=fb;i++;}
else {i++;eY=N;}
;}
else {fc+=fb;i++;}
;break;case a:if(fb==fa){eX++;i++;}
else {this.__nk.push({type:a,character:fa,size:eX});fa=null;eX=0;eY=d;}
;break;default:if((fb>=bz&&fb<=bT)||(fb>=e&&fb<=co)){fa=fb;eY=a;}
else if(fb==A){if(i+1>=eV.length){fc+=fb;i++;break;}
;var eW=eV.charAt(i+1);if(eW==A){fc+=fb;i++;}
;i++;eY=bx;}
else {eY=d;}
;if(eY!=d){if(fc.length>0){this.__nk.push({type:b,text:fc});fc=H;}
;}
else {fc+=fb;i++;}
;break;};}
;if(fa!=null){this.__nk.push({type:a,character:fa,size:eX});}
else if(fc.length>0){this.__nk.push({type:b,text:fc});}
;}
,__nv:function(){if(this.__ni!=null){return;}
;var fg=this.__ng;this.__nx();this.__nu();var fm=[];var fi=bQ;for(var fe=0;fe<this.__nk.length;fe++){var fn=this.__nk[fe];if(fn.type==b){fi+=qx.lang.String.escapeRegexpChars(fn.text);}
else {var ff=fn.character;var fj=fn.size;var fh;for(var fo=0;fo<this.__nj.length;fo++){var fk=this.__nj[fo];if(this.__nw(fk,ff,fj)){fh=fk;break;}
;}
;if(fh==null){var fl=H;for(var i=0;i<fj;i++){fl+=ff;}
;throw new Error(bV+fg+cM+fl+cQ);}
else {fm.push(fh);fi+=fh.regex;}
;}
;}
;fi+=Y;var fd;try{fd=new RegExp(fi);}
catch(fp){throw new Error(bV+fg);}
;this.__ni={regex:fd,"usedRules":fm,pattern:fi};}
,__nw:function(fq,fr,fs){if(fr===bb&&fq.pattern===bE){fq.regex=fq.regexFunc(fs);return true;}
else if(fr===bU&&fq.pattern===cu){fq.regex=fq.regexFunc(fs);return true;}
else {return fr==fq.pattern.charAt(0)&&fs==fq.pattern.length;}
;}
,__nx:function(){var fG=qx.util.format.DateFormat;var fI=qx.lang.String;if(this.__nj!=null){return;}
;var fH=this.__nj=[];var fC=qx.locale.Date.getAmMarker(this.__hN).toString()||fG.AM_MARKER;var fP=qx.locale.Date.getPmMarker(this.__hN).toString()||fG.PM_MARKER;var fu=this.__hN;var fz=function(fT,fU){fU=parseInt(fU,10);if(fU>0){if(fU<fG.ASSUME_YEAR_2000_THRESHOLD){fU+=2000;}
else if(fU<100){fU+=1900;}
;}
;fT.year=fU;}
;var fR=function(fV,fW){fW=parseInt(fW,10);if(fW>0){if(fW<fG.ASSUME_YEAR_2000_THRESHOLD){fW+=2000;}
else if(fW<100){fW+=1900;}
;}
;fV.weekYear=fW;}
;var fS=function(fX,fY){fX.month=parseInt(fY,10)-1;}
;var fx=function(ga,gb){var gd=qx.locale.Date.getWeekStart(fu);var gc=(parseInt(gb,10)-1+gd)<=6?parseInt(gb,10)-1+gd:(parseInt(gb,10)-1+gd)-7;ga.weekDay=gc;}
;var fw=function(ge,gf){var gg=qx.locale.Date.getPmMarker(fu).toString()||fG.PM_MARKER;ge.ispm=(gf==gg);}
;var fB=function(gh,gi){gh.hour=parseInt(gi,10)%24;}
;var fv=function(gj,gk){gj.hour=parseInt(gk,10)%12;}
;var fK=function(gl,gm){return;}
;var fL=[e,cd];var fM=function(gn,go){gn.era=go==e?1:-1;}
;var fF=[dl,bS];var fE=function(gp,gq){gp.era=gq==dl?1:-1;}
;var fO=[cG,cn];var fD=function(gr,gs){gr.era=gs==cG?1:-1;}
;var fQ=[dy,bd,bu,W];var ft=function(gt,gu){gt.quarter=fQ.indexOf(gu);}
;var fN=[dr,dd,bM,bP];var fJ=function(gv,gw){gv.quarter=fN.indexOf(gw);}
;var fA={};var fy=function(gx){var gC=[U,cj];var gy=[ca,bW,cp];var gF=gx.charAt(0);var gA=gC.indexOf(gF)>=0;var gB=function(){var gH=gA?gC:gy;var gI=gF===gH[0]?G:ce;var gJ=gx.length;var gG=T;switch(gJ){case 4:gG=ct;break;case 5:gG=O;break;default:gG=T;};return [gI,gG];}
;if(!fA[gx]){fA[gx]={};var gE=gB();var gz=gA?qx.locale.Date.getMonthNames:qx.locale.Date.getDayNames;var gD=gz.call(qx.locale.Date,gE[1],fu,gE[0],true);for(var i=0,l=gD.length;i<l;i++){gD[i]=fI.escapeRegexpChars(gD[i].toString());}
;fA[gx].data=gD;fA[gx].func=function(gK,gL){gL=fI.escapeRegexpChars(gL);gK[gA?bn:cX]=gD.indexOf(gL);}
;}
;return fA[gx];}
;fH.push({pattern:P,regexFunc:function(gM){var gN=bB;for(var i=0;i<gM;i++){gN+=ch;if(i===gM-1&&i!==1){gN+=ci;}
;}
;gN+=bR;return gN;}
,manipulator:fz});fH.push({pattern:S,regexFunc:function(gO){var gP=bB;for(var i=0;i<gO;i++){gP+=ch;if(i===gO-1){gP+=ci;}
;}
;gP+=bR;return gP;}
,manipulator:fR});fH.push({pattern:u,regex:cg+fF.join(cf)+bR,manipulator:fE});fH.push({pattern:v,regex:cg+fF.join(cf)+bR,manipulator:fE});fH.push({pattern:cs,regex:cg+fF.join(cf)+bR,manipulator:fE});fH.push({pattern:bk,regex:cg+fO.join(cf)+bR,manipulator:fD});fH.push({pattern:cN,regex:cg+fL.join(cf)+bR,manipulator:fM});fH.push({pattern:cx,regex:F,field:f});fH.push({pattern:dx,regex:cb,field:f});fH.push({pattern:t,regex:cg+fQ.join(cf)+bR,manipulator:ft});fH.push({pattern:cW,regex:cg+fN.join(cf)+bR,manipulator:fJ});fH.push({pattern:cV,regex:F,field:f});fH.push({pattern:V,regex:cb,field:f});fH.push({pattern:bN,regex:cg+fQ.join(cf)+bR,manipulator:ft});fH.push({pattern:cT,regex:cg+fN.join(cf)+bR,manipulator:fJ});fH.push({pattern:bw,regex:F,manipulator:fS});fH.push({pattern:be,regex:cb,manipulator:fS});fH.push({pattern:n,regex:cg+fy(n).data.join(cf)+bR,manipulator:fy(n).func});fH.push({pattern:cC,regex:cg+fy(cC).data.join(cf)+bR,manipulator:fy(cC).func});fH.push({pattern:h,regex:cg+fy(h).data.join(cf)+bR,manipulator:fy(h).func});fH.push({pattern:bg,regex:F,manipulator:fS});fH.push({pattern:cL,regex:cb,manipulator:fS});fH.push({pattern:g,regex:cg+fy(g).data.join(cf)+bR,manipulator:fy(g).func});fH.push({pattern:dp,regex:cg+fy(dp).data.join(cf)+bR,manipulator:fy(dp).func});fH.push({pattern:dn,regex:cg+fy(dn).data.join(cf)+bR,manipulator:fy(dn).func});fH.push({pattern:da,regex:cb,field:bA});fH.push({pattern:bY,regex:F,field:bA});fH.push({pattern:bX,regex:B,field:dk});fH.push({pattern:bo,regex:cb,field:dk});fH.push({pattern:dz,regex:cw,field:dk});fH.push({pattern:dh,regex:cg+fy(dh).data.join(cf)+bR,manipulator:fy(dh).func});fH.push({pattern:cJ,regex:cg+fy(cJ).data.join(cf)+bR,manipulator:fy(cJ).func});fH.push({pattern:m,regex:cg+fy(m).data.join(cf)+bR,manipulator:fy(m).func});fH.push({pattern:cD,regex:cg+fy(cD).data.join(cf)+bR,manipulator:fy(cD).func});fH.push({pattern:cK,regex:cg+fy(cK).data.join(cf)+bR,manipulator:fy(cK).func});fH.push({pattern:bm,regex:B,manipulator:fx});fH.push({pattern:cY,regex:cb,manipulator:fx});fH.push({pattern:cI,regex:cg+fy(cI).data.join(cf)+bR,manipulator:fy(cI).func});fH.push({pattern:dm,regex:cg+fy(dm).data.join(cf)+bR,manipulator:fy(dm).func});fH.push({pattern:cE,regex:cg+fy(cE).data.join(cf)+bR,manipulator:fy(cE).func});fH.push({pattern:cA,regex:M,manipulator:fx});fH.push({pattern:cH,regex:cg+fy(cH).data.join(cf)+bR,manipulator:fy(cH).func});fH.push({pattern:dj,regex:cg+fy(dj).data.join(cf)+bR,manipulator:fy(dj).func});fH.push({pattern:dg,regex:cg+fy(dg).data.join(cf)+bR,manipulator:fy(dg).func});fH.push({pattern:dc,regex:cg+fC+cf+fP+bR,manipulator:fw});fH.push({pattern:bj,regex:B,field:cz});fH.push({pattern:o,regex:B,field:by});fH.push({pattern:de,regex:cb,field:by});fH.push({pattern:dw,regex:cb,field:y});fH.push({pattern:df,regex:cb,field:y});fH.push({pattern:w,regex:cb,manipulator:fB});fH.push({pattern:J,regex:cb,manipulator:fB});fH.push({pattern:cR,regex:cb,field:y});fH.push({pattern:bL,regex:cb,field:y});fH.push({pattern:bl,regex:cb,manipulator:fv});fH.push({pattern:cS,regex:cb,manipulator:fv});fH.push({pattern:p,regex:cb,field:cm});fH.push({pattern:dA,regex:cb,field:cm});fH.push({pattern:x,regex:cb,field:ck});fH.push({pattern:bv,regex:cb,field:ck});fH.push({pattern:bO,regex:di,field:dq});fH.push({pattern:bq,regex:di,field:dq});fH.push({pattern:r,regex:di,field:dq});fH.push({pattern:cP,regex:du,manipulator:fK});fH.push({pattern:bs,regex:cv,manipulator:fK});}
},destruct:function(){if(this.__ne!=null){qx.locale.Manager.getInstance().removeBinding(this.__ne);}
;this.__nk=this.__ni=this.__nj=null;}
});}
)();
(function(){var k="HH:mm",j="HHmmsszz",h="cldr_date_format_",g="HHmm",f="HHmmss",e="This case should never happen.",d="cldr_time_format_",c="HH:mm:ss zz",b="cldr_pm",a="cldr_am",K="qx.locale.Date",J="cldr_date_time_format_",I="HH:mm:ss",H="sat",G="cldr_day_",F="cldr_month_",E="wed",D="fri",C="tue",B="mon",r="sun",s="thu",p="short",q="full",n="long",o="medium",l='_',m="stand-alone",t="narrow",u="abbreviated",w="wide",v='stand-alone',y="qx.debug",x='format',A="format",z="_";qx.Class.define(K,{statics:{__ny:qx.locale.Manager.getInstance(),getAmMarker:function(L){return this.__ny.localize(a,[],L);}
,getPmMarker:function(M){return this.__ny.localize(b,[],M);}
,getDayNames:function(length,N,O,P){var O=O?O:A;if(qx.core.Environment.get(y)){qx.core.Assert.assertInArray(length,[u,t,w]);qx.core.Assert.assertInArray(O,[A,m]);}
;var R=[r,B,C,E,s,D,H];var S=[];for(var i=0;i<R.length;i++){var Q=G+O+z+length+z+R[i];S.push(P?this.__nz(O,O===x?v:x,Q,N):this.__ny.localize(Q,[],N));}
;return S;}
,getDayName:function(length,T,U,V,W){var V=V?V:A;if(qx.core.Environment.get(y)){qx.core.Assert.assertInArray(length,[u,t,w]);qx.core.Assert.assertInteger(T);qx.core.Assert.assertInRange(T,0,6);qx.core.Assert.assertInArray(V,[A,m]);}
;var Y=[r,B,C,E,s,D,H];var X=G+V+z+length+z+Y[T];return W?this.__nz(V,V===x?v:x,X,U):this.__ny.localize(X,[],U);}
,getMonthNames:function(length,ba,bb,bc){var bb=bb?bb:A;if(qx.core.Environment.get(y)){qx.core.Assert.assertInArray(length,[u,t,w]);qx.core.Assert.assertInArray(bb,[A,m]);}
;var be=[];for(var i=0;i<12;i++){var bd=F+bb+z+length+z+(i+1);be.push(bc?this.__nz(bb,bb===x?v:x,bd,ba):this.__ny.localize(bd,[],ba));}
;return be;}
,getMonthName:function(length,bf,bg,bh,bi){var bh=bh?bh:A;if(qx.core.Environment.get(y)){qx.core.Assert.assertInArray(length,[u,t,w]);qx.core.Assert.assertInArray(bh,[A,m]);}
;var bj=F+bh+z+length+z+(bf+1);return bi?this.__nz(bh,bh===x?v:x,bj,bg):this.__ny.localize(bj,[],bg);}
,getDateFormat:function(bk,bl){if(qx.core.Environment.get(y)){qx.core.Assert.assertInArray(bk,[p,o,n,q]);}
;var bm=h+bk;return this.__ny.localize(bm,[],bl);}
,getDateTimeFormat:function(bn,bo,bp){var br=J+bn;var bq=this.__ny.localize(br,[],bp);if(bq==br){bq=bo;}
;return bq;}
,getTimeFormat:function(bs,bt){if(qx.core.Environment.get(y)){qx.core.Assert.assertInArray(bs,[p,o,n,q]);}
;var bv=d+bs;var bu=this.__ny.localize(bv,[],bt);if(bu!=bv){return bu;}
;switch(bs){case p:case o:return qx.locale.Date.getDateTimeFormat(g,k);case n:return qx.locale.Date.getDateTimeFormat(f,I);case q:return qx.locale.Date.getDateTimeFormat(j,c);default:throw new Error(e);};}
,getWeekStart:function(bw){var bx={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};var by=qx.locale.Date._getTerritory(bw);return bx[by]!=null?bx[by]:1;}
,getWeekendStart:function(bz){var bB={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};var bA=qx.locale.Date._getTerritory(bz);return bB[bA]!=null?bB[bA]:6;}
,getWeekendEnd:function(bC){var bD={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};var bE=qx.locale.Date._getTerritory(bC);return bD[bE]!=null?bD[bE]:0;}
,isWeekend:function(bF,bG){var bI=qx.locale.Date.getWeekendStart(bG);var bH=qx.locale.Date.getWeekendEnd(bG);if(bH>bI){return ((bF>=bI)&&(bF<=bH));}
else {return ((bF>=bI)||(bF<=bH));}
;}
,_getTerritory:function(bJ){if(bJ){var bK=bJ.split(z)[1]||bJ;}
else {bK=this.__ny.getTerritory()||this.__ny.getLanguage();}
;return bK.toUpperCase();}
,__nz:function(bL,bM,bN,bO){var bQ=this.__ny.localize(bN,[],bO);if(bQ==bN){var bP=bN.replace(l+bL+l,l+bM+l);return this.__ny.localize(bP,[],bO);}
else {return bQ;}
;}
}});}
)();
(function(){var a="qx.application.IApplication";qx.Interface.define(a,{members:{main:function(){}
,finalize:function(){}
,close:function(){}
,terminate:function(){}
}});}
)();
(function(){var c="Abstract method call",b="abstract",a="qx.application.AbstractGui";qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__dK:null,_createRootWidget:function(){throw new Error(c);}
,getRoot:function(){return this.__dK;}
,main:function(){qx.theme.manager.Meta.getInstance().initialize();qx.ui.tooltip.Manager.getInstance();this.__dK=this._createRootWidget();}
,finalize:function(){this.render();}
,render:function(){qx.ui.core.queue.Manager.flush();}
,close:function(d){}
,terminate:function(){}
},destruct:function(){this.__dK=null;}
});}
)();
(function(){var g="The theme to use is not available: ",f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(h,i){var l=null;var o=null;var r=null;var s=null;var n=null;if(h){l=h.meta.color||null;o=h.meta.decoration||null;r=h.meta.font||null;s=h.meta.icon||null;n=h.meta.appearance||null;}
;var p=qx.theme.manager.Color.getInstance();var q=qx.theme.manager.Decoration.getInstance();var j=qx.theme.manager.Font.getInstance();var m=qx.theme.manager.Icon.getInstance();var k=qx.theme.manager.Appearance.getInstance();p.setTheme(l);q.setTheme(o);j.setTheme(r);m.setTheme(s);k.setTheme(n);}
,initialize:function(){var v=qx.core.Environment;var t,u;t=v.get(e);if(t){u=qx.Theme.getByName(t);if(!u){throw new Error(g+t);}
;this.setTheme(u);}
;}
},environment:{"qx.theme":c}});}
)();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();if(g){for(var h in g.aliases){i.remove(h);}
;}
;if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);}
;}
;}
}});}
)();
(function(){var m='Invalid include in theme "',k='The configuration key "',j="Mixin theme is not a valid theme!",h='" is not allowed!',g="You can only define one theme category per file! Invalid theme: ",f="other",e="Found base flag in entry '",d='Invalid patch in theme "',c="[Theme ",b="' of theme '",U='" is invalid: ',T='Invalid extend in theme "',S='Invalid type of key "',R='The key "',Q='"!',P="]",O='"! The value needs to be a map!',N='"! The type of the key must be "',M='The type of the key "',L="qx.Theme",t='The content of a meta theme must reference to other themes. The value for "',u='" inside the meta block is wrong.',r='"! The value is undefined/null!',s='" is not allowed inside a meta theme block.',p="'. Base flags are not allowed for themes without a valid super theme!",q="'!",n="fonts",o="appearances",v="icons",w="string",D="decorations",B="widgets",F="borders",E="' are not compatible '",H="The mixins '",G="colors",y='Invalid key "',K="meta",J='": ',I="undefined",x='" in theme "',z="Theme",A="qx.debug",C="object";qx.Bootstrap.define(L,{statics:{define:function(name,V){if(!V){var V={};}
;V.include=this.__rd(V.include);V.patch=this.__rd(V.patch);if(qx.core.Environment.get(A)){this.__d(name,V);}
;var W={$$type:z,name:name,title:V.title,toString:this.genericToString};if(V.extend){W.supertheme=V.extend;}
;W.basename=qx.Bootstrap.createNamespace(name,W);this.__rg(W,V);this.__re(W,V);this.$$registry[name]=W;for(var i=0,a=V.include,l=a.length;i<l;i++){this.include(W,a[i]);}
;for(var i=0,a=V.patch,l=a.length;i<l;i++){this.patch(W,a[i]);}
;}
,__rd:function(X){if(!X){return [];}
;if(qx.Bootstrap.isArray(X)){return X;}
else {return [X];}
;}
,__re:function(Y,ba){var bb=ba.aliases||{};if(ba.extend&&ba.extend.aliases){qx.Bootstrap.objectMergeWith(bb,ba.extend.aliases,false);}
;Y.aliases=bb;}
,getAll:function(){return this.$$registry;}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,genericToString:function(){return c+this.name+P;}
,__rf:function(bc){for(var i=0,bd=this.__rh,l=bd.length;i<l;i++){if(bc[bd[i]]){return bd[i];}
;}
;}
,__rg:function(be,bf){var bi=this.__rf(bf);if(bf.extend&&!bi){bi=bf.extend.type;}
;be.type=bi||f;var bk=function(){}
;if(bf.extend){bk.prototype=new bf.extend.$$clazz;}
;var bj=bk.prototype;var bh=bf[bi];for(var bg in bh){bj[bg]=bh[bg];if(bj[bg].base){if(qx.core.Environment.get(A)){if(!bf.extend){throw new Error(e+bg+b+bf.name+p);}
;}
;bj[bg].base=bf.extend;}
;}
;be.$$clazz=bk;be[bi]=new bk;}
,$$registry:{},__rh:[G,F,D,n,v,B,o,K],__c:qx.core.Environment.select(A,{"true":{"title":w,"aliases":C,"type":w,"extend":C,"colors":C,"borders":C,"decorations":C,"fonts":C,"icons":C,"widgets":C,"appearances":C,"meta":C,"include":C,"patch":C},"default":null}),__ri:qx.core.Environment.select(A,{"true":{"color":C,"border":C,"decoration":C,"font":C,"icon":C,"appearance":C,"widget":C},"default":null}),__d:qx.core.Environment.select(A,{"true":function(name,bl){var bq=this.__c;for(var bp in bl){if(bq[bp]===undefined){throw new Error(k+bp+x+name+h);}
;if(bl[bp]==null){throw new Error(y+bp+x+name+r);}
;if(bq[bp]!==null&&typeof bl[bp]!==bq[bp]){throw new Error(S+bp+x+name+N+bq[bp]+Q);}
;}
;var bo=[G,F,D,n,v,B,o,K];for(var i=0,l=bo.length;i<l;i++){var bp=bo[i];if(bl[bp]!==undefined&&(bl[bp] instanceof Array||bl[bp] instanceof RegExp||bl[bp] instanceof Date||bl[bp].classname!==undefined)){throw new Error(y+bp+x+name+O);}
;}
;var bm=0;for(var i=0,l=bo.length;i<l;i++){var bp=bo[i];if(bl[bp]){bm++;}
;if(bm>1){throw new Error(g+name);}
;}
;if(bl.meta){var bn;for(var bp in bl.meta){bn=bl.meta[bp];if(this.__ri[bp]===undefined){throw new Error(R+bp+s);}
;if(typeof bn!==this.__ri[bp]){throw new Error(M+bp+u);}
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
}),patch:function(br,bs){this.__rj(bs);var bu=this.__rf(bs);if(bu!==this.__rf(br)){throw new Error(H+br.name+E+bs.name+q);}
;var bt=bs[bu];var bv=br.$$clazz.prototype;for(var bw in bt){bv[bw]=bt[bw];}
;}
,include:function(bx,by){this.__rj(by);var bA=by.type;if(bA!==bx.type){throw new Error(H+bx.name+E+by.name+q);}
;var bz=by[bA];var bB=bx.$$clazz.prototype;for(var bC in bz){if(bB[bC]!==undefined){continue;}
;bB[bC]=bz[bC];}
;}
,__rj:function(bD){if(typeof bD===I||bD==null){var bE=new Error(j);if(qx.core.Environment.get(A)){var bF=qx.dev.StackTrace.getStackTraceFromError(bE);qx.Bootstrap.error(this,bF);}
;throw bE;}
;}
}});}
)();
(function(){var q="widget",p="qx.ui.tooltip.ToolTip",o="",n="__rn",m="__rp",l="_applyCurrent",k="__rm",j="qx.ui.tooltip.Manager",i="tooltip-error",h="singleton",c="Boolean",g="interval",f="mouseover",b="mouseout",a="mousemove",d="focusout";qx.Class.define(j,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);qx.event.Registration.addListener(document.body,f,this.__ru,this,true);this.__rm=new qx.event.Timer();this.__rm.addListener(g,this.__rr,this);this.__rn=new qx.event.Timer();this.__rn.addListener(g,this.__rs,this);this.__ro={left:0,top:0};}
,properties:{current:{check:p,nullable:true,apply:l},showInvalidToolTips:{check:c,init:true},showToolTips:{check:c,init:true}},members:{__ro:null,__rn:null,__rm:null,__rp:null,__rq:null,getSharedTooltip:function(){if(!this.__rp){this.__rp=new qx.ui.tooltip.ToolTip().set({rich:true});}
;return this.__rp;}
,getSharedErrorTooltip:function(){if(!this.__rq){this.__rq=new qx.ui.tooltip.ToolTip().set({appearance:i,rich:true});this.__rq.setLabel(o);this.__rq.syncAppearance();}
;return this.__rq;}
,_applyCurrent:function(r,s){if(s&&qx.ui.core.Widget.contains(s,r)){return;}
;if(s){if(!s.isDisposed()){s.exclude();}
;this.__rm.stop();this.__rn.stop();}
;var u=qx.event.Registration;var t=document.body;if(r){this.__rm.startWith(r.getShowTimeout());u.addListener(t,b,this.__rv,this,true);u.addListener(t,d,this.__rw,this,true);u.addListener(t,a,this.__rt,this,true);}
else {u.removeListener(t,b,this.__rv,this,true);u.removeListener(t,d,this.__rw,this,true);u.removeListener(t,a,this.__rt,this,true);}
;}
,__rr:function(e){var v=this.getCurrent();if(v&&!v.isDisposed()){this.__rn.startWith(v.getHideTimeout());if(v.getPlaceMethod()==q){v.placeToWidget(v.getOpener());}
else {v.placeToPoint(this.__ro);}
;v.show();}
;this.__rm.stop();}
,__rs:function(e){var w=this.getCurrent();if(w&&!w.isDisposed()){w.exclude();}
;this.__rn.stop();this.resetCurrent();}
,__rt:function(e){var x=this.__ro;x.left=e.getDocumentLeft();x.top=e.getDocumentTop();}
,__ru:function(e){var y=qx.ui.core.Widget.getWidgetByElement(e.getTarget());this.showToolTip(y);}
,showToolTip:function(z){if(!z){return;}
;var C,D,B,A;while(z!=null){C=z.getToolTip();D=z.getToolTipText()||null;B=z.getToolTipIcon()||null;if(qx.Class.hasInterface(z.constructor,qx.ui.form.IForm)&&!z.isValid()){A=z.getInvalidMessage();}
;if(C||D||B||A){break;}
;z=z.getLayoutParent();}
;if(!z||!z.getEnabled()||z.isBlockToolTip()||(!A&&!this.getShowToolTips())||(A&&!this.getShowInvalidToolTips())){return;}
;if(A){C=this.getSharedErrorTooltip().set({label:A});}
;if(!C){C=this.getSharedTooltip().set({label:D,icon:B});}
;this.setCurrent(C);C.setOpener(z);}
,__rv:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());if(!E){return;}
;var F=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());if(!F){return;}
;var G=this.getCurrent();if(G&&(F==G||qx.ui.core.Widget.contains(G,F))){return;}
;if(F&&E&&qx.ui.core.Widget.contains(E,F)){return;}
;if(G&&!F){this.setCurrent(null);}
else {this.resetCurrent();}
;}
,__rw:function(e){var H=qx.ui.core.Widget.getWidgetByElement(e.getTarget());if(!H){return;}
;var I=this.getCurrent();if(I&&I==H.getToolTip()){this.setCurrent(null);}
;}
},destruct:function(){qx.event.Registration.removeListener(document.body,f,this.__ru,this,true);this._disposeObjects(k,n,m);this.__ro=null;}
});}
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
(function(){var l="demobrowser.demo.test.Hiding_Scrollbar",k="vertical",j="d",i="e",h="width",g="height",f="b",e="c",d="a",c="horizontal",a="ID",b="value";qx.Class.define(l,{extend:qx.application.Standalone,include:[demobrowser.demo.table.MUtil],members:{main:function(){qx.application.Standalone.prototype.main.call(this);var n=new qx.ui.table.Table();n.setStatusBarVisible(false);var q=new qx.ui.table.model.Simple();q.setColumns([a]);n.setTableModel(q);var p=[[d],[f],[e],[j],[i]];q.setData(p);n.setHeight(50);n.setWidth(150);this.getRoot().add(n,{left:30,top:30});var m=new qx.ui.form.Slider(k);m.set({height:100,minimum:40,maximum:130,value:50});m.bind(b,n,g);this.getRoot().add(m,{top:20});var o=new qx.ui.form.Slider(c);o.set({width:100,minimum:30,maximum:150,value:150});o.bind(b,n,h);this.getRoot().add(o,{left:20});}
}});}
)();
(function(){var q="_applyStatusBarVisible",p="columnVisibilityMenuCreateStart",o="blur",n="qx.ui.table.Table",m="columnVisibilityMenuCreateEnd",k="changeVisible",h="_applyResetSelectionOnHeaderClick",g="_applyMetaColumnCounts",f="focus",e="changeDataRowRenderer",bH="changeHeaderCellHeight",bG="Escape",bF="A",bE="changeSelectionModel",bD="Left",bC="__nT",bB="Down",bA="Integer",bz="_applyHeaderCellHeight",by="visibilityChanged",y="qx.ui.table.ITableModel",z="orderChanged",v="_applySelectionModel",w="menu-button",t="menu",u="_applyAdditionalStatusBarText",r="_applyFocusCellOnMouseMove",s="table",G="_applyColumnVisibilityButtonVisible",H="changeTableModel",ba="qx.event.type.Event",V="tableWidthChanged",bi="_applyHeaderCellsVisible",bd="Object",bu="_applyShowCellFocusIndicator",bo="resize",O="verticalScrollBarChanged",bx="__oc",bw="changeScrollY",bv="_applyTableModel",M="End",R="_applyKeepFirstVisibleRowComplete",T="widthChanged",X="one of one row",bb="Home",be="_applyRowHeight",bk="F2",bq="Up",A="%1 rows",B="qx.ui.table.selection.Model",Q="one row",bh="PageDown",bg="%1 of %2 rows",bf="__iG",bm="keypress",bl="changeRowHeight",bc="Number",bj="__nU",a="__ob",bp="_applyContextMenuFromDataCellsOnly",C="qx.ui.table.IRowRenderer",D="Right",W="Space",b="function",d="PageUp",L="dataChanged",E="changeLocale",F="changeSelection",J="appear",Y="qx.dynlocale",bs='"',br="Enter",S="metaDataChanged",bt="header",N="__od",bn="qx.ui.table.pane.CellEvent",I="qx.event.type.Data",K="statusbar",c="column-button",U="Function",P="Boolean";qx.Class.define(n,{extend:qx.ui.core.Widget,construct:function(bI,bJ){qx.ui.core.Widget.call(this);if(!bJ){bJ={};}
;if(bJ.initiallyHiddenColumns){this.setInitiallyHiddenColumns(bJ.initiallyHiddenColumns);}
;if(bJ.selectionManager){this.setNewSelectionManager(bJ.selectionManager);}
;if(bJ.selectionModel){this.setNewSelectionModel(bJ.selectionModel);}
;if(bJ.tableColumnModel){this.setNewTableColumnModel(bJ.tableColumnModel);}
;if(bJ.tablePane){this.setNewTablePane(bJ.tablePane);}
;if(bJ.tablePaneHeader){this.setNewTablePaneHeader(bJ.tablePaneHeader);}
;if(bJ.tablePaneScroller){this.setNewTablePaneScroller(bJ.tablePaneScroller);}
;if(bJ.tablePaneModel){this.setNewTablePaneModel(bJ.tablePaneModel);}
;if(bJ.columnMenu){this.setNewColumnMenu(bJ.columnMenu);}
;this._setLayout(new qx.ui.layout.VBox());this.__nT=new qx.ui.container.Composite(new qx.ui.layout.HBox());this._add(this.__nT,{flex:1});this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));this.__nU=this.getNewSelectionManager()(this);this.setSelectionModel(this.getNewSelectionModel()(this));this.setTableModel(bI||this.getEmptyTableModel());this.setMetaColumnCounts([-1]);this.setTabIndex(1);this.addListener(bm,this._onKeyPress);this.addListener(f,this._onFocusChanged);this.addListener(o,this._onFocusChanged);var bK=new qx.ui.core.Widget().set({height:0});this._add(bK);bK.addListener(bo,this._onResize,this);this.__nV=null;this.__nW=null;if(qx.core.Environment.get(Y)){qx.locale.Manager.getInstance().addListener(E,this._onChangeLocale,this);}
;this.initStatusBarVisible();bI=this.getTableModel();if(bI.init&&typeof (bI.init)==b){bI.init(this);}
;}
,events:{"columnVisibilityMenuCreateStart":I,"columnVisibilityMenuCreateEnd":I,"tableWidthChanged":ba,"verticalScrollBarChanged":I,"cellClick":bn,"cellDblclick":bn,"cellContextmenu":bn,"dataEdited":I},statics:{__nX:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:s},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},initiallyHiddenColumns:{init:null},selectable:{refine:true,init:false},selectionModel:{check:B,apply:v,event:bE},tableModel:{check:y,apply:bv,event:H},rowHeight:{check:bc,init:20,apply:be,event:bl,themeable:true},forceLineHeight:{check:P,init:true},headerCellsVisible:{check:P,init:true,apply:bi,themeable:true},headerCellHeight:{check:bA,init:16,apply:bz,event:bH,nullable:true,themeable:true},statusBarVisible:{check:P,init:true,apply:q},additionalStatusBarText:{nullable:true,init:null,apply:u},columnVisibilityButtonVisible:{check:P,init:true,apply:G,themeable:true},metaColumnCounts:{check:bd,apply:g},focusCellOnMouseMove:{check:P,init:false,apply:r},rowFocusChangeModifiesSelection:{check:P,init:true},showCellFocusIndicator:{check:P,init:true,apply:bu},contextMenuFromDataCellsOnly:{check:P,init:true,apply:bp},keepFirstVisibleRowComplete:{check:P,init:true,apply:R},alwaysUpdateCells:{check:P,init:false},resetSelectionOnHeaderClick:{check:P,init:true,apply:h},dataRowRenderer:{check:C,init:null,nullable:true,event:e},modalCellEditorPreOpenFunction:{check:U,init:null,nullable:true},newColumnMenu:{check:U,init:function(){return new qx.ui.table.columnmenu.Button();}
},newSelectionManager:{check:U,init:function(bL){return new qx.ui.table.selection.Manager(bL);}
},newSelectionModel:{check:U,init:function(bM){return new qx.ui.table.selection.Model(bM);}
},newTableColumnModel:{check:U,init:function(bN){return new qx.ui.table.columnmodel.Basic(bN);}
},newTablePane:{check:U,init:function(bO){return new qx.ui.table.pane.Pane(bO);}
},newTablePaneHeader:{check:U,init:function(bP){return new qx.ui.table.pane.Header(bP);}
},newTablePaneScroller:{check:U,init:function(bQ){return new qx.ui.table.pane.Scroller(bQ);}
},newTablePaneModel:{check:U,init:function(bR){return new qx.ui.table.pane.Model(bR);}
}},members:{__nV:null,__nW:null,__nT:null,__nU:null,__nY:null,__oa:null,__mV:null,__ob:null,__oc:null,__od:null,__oe:null,__iG:null,_createChildControlImpl:function(bS,bT){var bU;switch(bS){case K:bU=new qx.ui.basic.Label();bU.set({allowGrowX:true});this._add(bU);break;case c:bU=this.getNewColumnMenu()();bU.set({focusable:false});var bV=bU.factory(t,{table:this});bV.addListener(J,this._initColumnMenu,this);break;};return bU||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bS);}
,_applySelectionModel:function(bW,bX){this.__nU.setSelectionModel(bW);if(bX!=null){bX.removeListener(F,this._onSelectionChanged,this);}
;bW.addListener(F,this._onSelectionChanged,this);}
,_applyRowHeight:function(bY,ca){var cb=this._getPaneScrollerArr();for(var i=0;i<cb.length;i++){cb[i].updateVerScrollBarMaximum();}
;}
,_applyHeaderCellsVisible:function(cc,cd){var ce=this._getPaneScrollerArr();for(var i=0;i<ce.length;i++){if(cc){ce[i]._showChildControl(bt);}
else {ce[i]._excludeChildControl(bt);}
;}
;if(this.getColumnVisibilityButtonVisible()){this._applyColumnVisibilityButtonVisible(cc);}
;}
,_applyHeaderCellHeight:function(cf,cg){var ch=this._getPaneScrollerArr();for(var i=0;i<ch.length;i++){ch[i].getHeader().setHeight(cf);}
;}
,getEmptyTableModel:function(){if(!this.__od){this.__od=new qx.ui.table.model.Simple();this.__od.setColumns([]);this.__od.setData([]);}
;return this.__od;}
,_applyTableModel:function(ci,cj){this.getTableColumnModel().init(ci.getColumnCount(),this);if(cj!=null){cj.removeListener(S,this._onTableModelMetaDataChanged,this);cj.removeListener(L,this._onTableModelDataChanged,this);}
;ci.addListener(S,this._onTableModelMetaDataChanged,this);ci.addListener(L,this._onTableModelDataChanged,this);this._updateStatusBar();this._updateTableData(0,ci.getRowCount(),0,ci.getColumnCount());this._onTableModelMetaDataChanged();if(cj&&ci.init&&typeof (ci.init)==b){ci.init(this);}
;}
,getTableColumnModel:function(){if(!this.__oc){var cm=this.__oc=this.getNewTableColumnModel()(this);cm.addListener(by,this._onColVisibilityChanged,this);cm.addListener(T,this._onColWidthChanged,this);cm.addListener(z,this._onColOrderChanged,this);var cl=this.getTableModel();cm.init(cl.getColumnCount(),this);var ck=this._getPaneScrollerArr();for(var i=0;i<ck.length;i++){var cn=ck[i];var co=cn.getTablePaneModel();co.setTableColumnModel(cm);}
;}
;return this.__oc;}
,_applyStatusBarVisible:function(cp,cq){if(cp){this._showChildControl(K);}
else {this._excludeChildControl(K);}
;if(cp){this._updateStatusBar();}
;}
,_applyAdditionalStatusBarText:function(cr,cs){this.__nY=cr;this._updateStatusBar();}
,_applyColumnVisibilityButtonVisible:function(ct,cu){if(ct){this._showChildControl(c);}
else {this._excludeChildControl(c);}
;}
,_applyMetaColumnCounts:function(cv,cw){var cD=cv;var cx=this._getPaneScrollerArr();var cB={};if(cv>cw){var cF=qx.event.Registration.getManager(cx[0]);for(var cG in qx.ui.table.Table.__nX){cB[cG]={};cB[cG].capture=cF.getListeners(cx[0],cG,true);cB[cG].bubble=cF.getListeners(cx[0],cG,false);}
;}
;this._cleanUpMetaColumns(cD.length);var cC=0;for(var i=0;i<cx.length;i++){var cH=cx[i];var cE=cH.getTablePaneModel();cE.setFirstColumnX(cC);cE.setMaxColumnCount(cD[i]);cC+=cD[i];}
;if(cD.length>cx.length){var cA=this.getTableColumnModel();for(var i=cx.length;i<cD.length;i++){var cE=this.getNewTablePaneModel()(cA);cE.setFirstColumnX(cC);cE.setMaxColumnCount(cD[i]);cC+=cD[i];var cH=this.getNewTablePaneScroller()(this);cH.setTablePaneModel(cE);cH.addListener(bw,this._onScrollY,this);for(cG in qx.ui.table.Table.__nX){if(!cB[cG]){break;}
;if(cB[cG].capture&&cB[cG].capture.length>0){var cy=cB[cG].capture;for(var j=0;j<cy.length;j++){var cz=cy[j].context;if(!cz){cz=this;}
else if(cz==cx[0]){cz=cH;}
;cH.addListener(cG,cy[j].handler,cz,true);}
;}
;if(cB[cG].bubble&&cB[cG].bubble.length>0){var cJ=cB[cG].bubble;for(var j=0;j<cJ.length;j++){var cz=cJ[j].context;if(!cz){cz=this;}
else if(cz==cx[0]){cz=cH;}
;cH.addListener(cG,cJ[j].handler,cz,false);}
;}
;}
;var cI=(i==cD.length-1)?1:0;this.__nT.add(cH,{flex:cI});cx=this._getPaneScrollerArr();}
;}
;for(var i=0;i<cx.length;i++){var cH=cx[i];var cK=(i==(cx.length-1));cH.getHeader().setHeight(this.getHeaderCellHeight());cH.setTopRightWidget(cK?this.getChildControl(c):null);}
;if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(c);}
;this._updateScrollerWidths();this._updateScrollBarVisibility();}
,_applyFocusCellOnMouseMove:function(cL,cM){var cN=this._getPaneScrollerArr();for(var i=0;i<cN.length;i++){cN[i].setFocusCellOnMouseMove(cL);}
;}
,_applyShowCellFocusIndicator:function(cO,cP){var cQ=this._getPaneScrollerArr();for(var i=0;i<cQ.length;i++){cQ[i].setShowCellFocusIndicator(cO);}
;}
,_applyContextMenuFromDataCellsOnly:function(cR,cS){var cT=this._getPaneScrollerArr();for(var i=0;i<cT.length;i++){cT[i].setContextMenuFromDataCellsOnly(cR);}
;}
,_applyKeepFirstVisibleRowComplete:function(cU,cV){var cW=this._getPaneScrollerArr();for(var i=0;i<cW.length;i++){cW[i].onKeepFirstVisibleRowCompleteChanged();}
;}
,_applyResetSelectionOnHeaderClick:function(cX,cY){var da=this._getPaneScrollerArr();for(var i=0;i<da.length;i++){da[i].setResetSelectionOnHeaderClick(cX);}
;}
,getSelectionManager:function(){return this.__nU;}
,_getPaneScrollerArr:function(){return this.__nT.getChildren();}
,getPaneScroller:function(db){return this._getPaneScrollerArr()[db];}
,_cleanUpMetaColumns:function(dc){var dd=this._getPaneScrollerArr();if(dd!=null){for(var i=dd.length-1;i>=dc;i--){dd[i].destroy();}
;}
;}
,_onChangeLocale:function(de){this.updateContent();this._updateStatusBar();}
,_onSelectionChanged:function(df){var dg=this._getPaneScrollerArr();for(var i=0;i<dg.length;i++){dg[i].onSelectionChanged();}
;this._updateStatusBar();}
,_onTableModelMetaDataChanged:function(dh){var di=this._getPaneScrollerArr();for(var i=0;i<di.length;i++){di[i].onTableModelMetaDataChanged();}
;this._updateStatusBar();}
,_onTableModelDataChanged:function(dj){var dk=dj.getData();this._updateTableData(dk.firstRow,dk.lastRow,dk.firstColumn,dk.lastColumn,dk.removeStart,dk.removeCount);}
,_updateTableData:function(dl,dm,dn,dp,dq,dr){var ds=this._getPaneScrollerArr();if(dr){this.getSelectionModel().removeSelectionInterval(dq,dq+dr);if(this.__nW>=dq&&this.__nW<(dq+dr)){this.setFocusedCell();}
;}
;for(var i=0;i<ds.length;i++){ds[i].onTableModelDataChanged(dl,dm,dn,dp);}
;var dt=this.getTableModel().getRowCount();if(dt!=this.__oa){this.__oa=dt;this._updateScrollBarVisibility();this._updateStatusBar();}
;}
,_onScrollY:function(du){if(!this.__mV){this.__mV=true;var dv=this._getPaneScrollerArr();for(var i=0;i<dv.length;i++){dv[i].setScrollY(du.getData());}
;this.__mV=false;}
;}
,_onKeyPress:function(dw){if(!this.getEnabled()){return;}
;var dD=this.__nW;var dA=true;var dE=dw.getKeyIdentifier();if(this.isEditing()){if(dw.getModifiers()==0){switch(dE){case br:this.stopEditing();var dD=this.__nW;this.moveFocusedCell(0,1);if(this.__nW!=dD){dA=this.startEditing();}
;break;case bG:this.cancelEditing();this.focus();break;default:dA=false;break;};}
;}
else {if(dw.isCtrlPressed()){dA=true;switch(dE){case bF:var dB=this.getTableModel().getRowCount();if(dB>0){this.getSelectionModel().setSelectionInterval(0,dB-1);}
;break;default:dA=false;break;};}
else {switch(dE){case W:this.__nU.handleSelectKeyDown(this.__nW,dw);break;case bk:case br:this.startEditing();dA=true;break;case bb:this.setFocusedCell(this.__nV,0,true);break;case M:var dB=this.getTableModel().getRowCount();this.setFocusedCell(this.__nV,dB-1,true);break;case bD:this.moveFocusedCell(-1,0);break;case D:this.moveFocusedCell(1,0);break;case bq:this.moveFocusedCell(0,-1);break;case bB:this.moveFocusedCell(0,1);break;case d:case bh:var dz=this.getPaneScroller(0);var dC=dz.getTablePane();var dy=this.getRowHeight();var dx=(dE==d)?-1:1;dB=dC.getVisibleRowCount()-1;dz.setScrollY(dz.getScrollY()+dx*dB*dy);this.moveFocusedCell(0,dx*dB);break;default:dA=false;};}
;}
;if(dD!=this.__nW&&this.getRowFocusChangeModifiesSelection()){this.__nU.handleMoveKeyDown(this.__nW,dw);}
;if(dA){dw.preventDefault();dw.stopPropagation();}
;}
,_onFocusChanged:function(dF){var dG=this._getPaneScrollerArr();for(var i=0;i<dG.length;i++){dG[i].onFocusChanged();}
;}
,_onColVisibilityChanged:function(dH){var dI=this._getPaneScrollerArr();for(var i=0;i<dI.length;i++){dI[i].onColVisibilityChanged();}
;var dJ=dH.getData();if(this.__ob!=null&&dJ.col!=null&&dJ.visible!=null){this.__ob[dJ.col].setVisible(dJ.visible);}
;this._updateScrollerWidths();this._updateScrollBarVisibility();}
,_onColWidthChanged:function(dK){var dL=this._getPaneScrollerArr();for(var i=0;i<dL.length;i++){var dM=dK.getData();dL[i].setColumnWidth(dM.col,dM.newWidth);}
;this._updateScrollerWidths();this._updateScrollBarVisibility();}
,_onColOrderChanged:function(dN){var dO=this._getPaneScrollerArr();for(var i=0;i<dO.length;i++){dO[i].onColOrderChanged();}
;this._updateScrollerWidths();this._updateScrollBarVisibility();}
,getTablePaneScrollerAtPageX:function(dP){var dQ=this._getMetaColumnAtPageX(dP);return (dQ!=-1)?this.getPaneScroller(dQ):null;}
,setFocusedCell:function(dR,dS,dT){if(!this.isEditing()&&(dR!=this.__nV||dS!=this.__nW)){if(dR===null){dR=0;}
;this.__nV=dR;this.__nW=dS;var dU=this._getPaneScrollerArr();for(var i=0;i<dU.length;i++){dU[i].setFocusedCell(dR,dS);}
;if(dR!==null&&dT){this.scrollCellVisible(dR,dS);}
;}
;}
,resetSelection:function(){this.getSelectionModel().resetSelection();}
,resetCellFocus:function(){this.setFocusedCell(null,null,false);}
,getFocusedColumn:function(){return this.__nV;}
,getFocusedRow:function(){return this.__nW;}
,highlightFocusedRow:function(dV){this.getDataRowRenderer().setHighlightFocusRow(dV);}
,clearFocusedRowHighlight:function(dW){if(dW){var dY=dW.getRelatedTarget();if(dY instanceof qx.ui.table.pane.Pane||dY instanceof qx.ui.table.pane.FocusIndicator){return;}
;}
;this.resetCellFocus();var dX=this._getPaneScrollerArr();for(var i=0;i<dX.length;i++){dX[i].onFocusChanged();}
;}
,moveFocusedCell:function(ea,eb){var ef=this.__nV;var eg=this.__nW;if(ef==null||eg==null){return;}
;if(ea!=0){var ee=this.getTableColumnModel();var x=ee.getVisibleX(ef);var ed=ee.getVisibleColumnCount();x=qx.lang.Number.limit(x+ea,0,ed-1);ef=ee.getVisibleColumnAtX(x);}
;if(eb!=0){var ec=this.getTableModel();eg=qx.lang.Number.limit(eg+eb,0,ec.getRowCount()-1);}
;this.setFocusedCell(ef,eg,true);}
,scrollCellVisible:function(eh,ei){var ej=this.getContentElement().getDomElement();if(!ej){this.addListenerOnce(J,function(){this.scrollCellVisible(eh,ei);}
,this);}
;var ek=this.getTableColumnModel();var x=ek.getVisibleX(eh);var el=this._getMetaColumnAtColumnX(x);if(el!=-1){this.getPaneScroller(el).scrollCellVisible(eh,ei);}
;}
,isEditing:function(){if(this.__nV!=null){var x=this.getTableColumnModel().getVisibleX(this.__nV);var em=this._getMetaColumnAtColumnX(x);return this.getPaneScroller(em).isEditing();}
;return false;}
,startEditing:function(){if(this.__nV!=null){var x=this.getTableColumnModel().getVisibleX(this.__nV);var eo=this._getMetaColumnAtColumnX(x);var en=this.getPaneScroller(eo).startEditing();return en;}
;return false;}
,stopEditing:function(){if(this.__nV!=null){var x=this.getTableColumnModel().getVisibleX(this.__nV);var ep=this._getMetaColumnAtColumnX(x);this.getPaneScroller(ep).stopEditing();}
;}
,cancelEditing:function(){if(this.__nV!=null){var x=this.getTableColumnModel().getVisibleX(this.__nV);var eq=this._getMetaColumnAtColumnX(x);this.getPaneScroller(eq).cancelEditing();}
;}
,updateContent:function(){var er=this._getPaneScrollerArr();for(var i=0;i<er.length;i++){er[i].getTablePane().updateContent(true);}
;}
,blockHeaderElements:function(){var es=this._getPaneScrollerArr();for(var i=0;i<es.length;i++){es[i].getHeader().getBlocker().blockContent(20);}
;this.getChildControl(c).getBlocker().blockContent(20);}
,unblockHeaderElements:function(){var et=this._getPaneScrollerArr();for(var i=0;i<et.length;i++){et[i].getHeader().getBlocker().unblockContent();}
;this.getChildControl(c).getBlocker().unblockContent();}
,_getMetaColumnAtPageX:function(eu){var ev=this._getPaneScrollerArr();for(var i=0;i<ev.length;i++){var ew=ev[i].getContainerLocation();if(eu>=ew.left&&eu<=ew.right){return i;}
;}
;return -1;}
,_getMetaColumnAtColumnX:function(ex){var ez=this.getMetaColumnCounts();var eA=0;for(var i=0;i<ez.length;i++){var ey=ez[i];eA+=ey;if(ey==-1||ex<eA){return i;}
;}
;return -1;}
,_updateStatusBar:function(){var eB=this.getTableModel();if(this.getStatusBarVisible()){var eC=this.getSelectionModel().getSelectedCount();var eE=eB.getRowCount();var eD;if(eE>=0){if(eC==0){eD=this.trn(Q,A,eE,eE);}
else {eD=this.trn(X,bg,eE,eC,eE);}
;}
;if(this.__nY){if(eD){eD+=this.__nY;}
else {eD=this.__nY;}
;}
;if(eD){this.getChildControl(K).setValue(eD);}
;}
;}
,_updateScrollerWidths:function(){var eF=this._getPaneScrollerArr();for(var i=0;i<eF.length;i++){var eH=(i==(eF.length-1));var eI=eF[i].getTablePaneModel().getTotalWidth();eF[i].setPaneWidth(eI);var eG=eH?1:0;eF[i].setLayoutProperties({flex:eG});}
;}
,_updateScrollBarVisibility:function(){if(!this.getBounds()){return;}
;var eM=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;var eO=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;var eJ=this._getPaneScrollerArr();var eL=false;var eN=false;for(var i=0;i<eJ.length;i++){var eP=(i==(eJ.length-1));var eK=eJ[i].getNeededScrollBars(eL,!eP);if(eK&eM){eL=true;}
;if(eP&&(eK&eO)){eN=true;}
;}
;for(var i=0;i<eJ.length;i++){var eP=(i==(eJ.length-1));eJ[i].setHorizontalScrollBarVisible(eL);if(eP){if(this.__oe==null){this.__oe=eJ[i].getVerticalScrollBarVisible();this.__iG=qx.event.Timer.once(function(){this.__oe=null;this.__iG=null;}
,this,0);}
;}
;eJ[i].setVerticalScrollBarVisible(eP&&eN);if(eP&&eN!=this.__oe){this.fireDataEvent(O,eN);}
;}
;}
,_initColumnMenu:function(){var eS=this.getTableModel();var eT=this.getTableColumnModel();var eU=this.getChildControl(c);eU.empty();var eR=eU.getMenu();var eV={table:this,menu:eR,columnButton:eU};this.fireDataEvent(p,eV);this.__ob={};for(var eW=0,l=eS.getColumnCount();eW<l;eW++){var eQ=eU.factory(w,{text:eS.getColumnName(eW),column:eW,bVisible:eT.isColumnVisible(eW)});qx.core.Assert.assertInterface(eQ,qx.ui.table.IColumnMenuItem);eQ.addListener(k,this._createColumnVisibilityCheckBoxHandler(eW),this);this.__ob[eW]=eQ;}
;eV={table:this,menu:eR,columnButton:eU};this.fireDataEvent(m,eV);}
,_createColumnVisibilityCheckBoxHandler:function(eX){return function(eY){var fa=this.getTableColumnModel();fa.setColumnVisible(eX,eY.getData());}
;}
,setColumnWidth:function(fb,fc){this.getTableColumnModel().setColumnWidth(fb,fc);}
,_onResize:function(){this.fireEvent(V);this._updateScrollerWidths();this._updateScrollBarVisibility();}
,addListener:function(fd,fe,self,ff){if(this.self(arguments).__nX[fd]){var fh=[fd];for(var i=0,fg=this._getPaneScrollerArr();i<fg.length;i++){fh.push(fg[i].addListener.apply(fg[i],arguments));}
;return fh.join(bs);}
else {return qx.ui.core.Widget.prototype.addListener.call(this,fd,fe,self,ff);}
;}
,removeListener:function(fi,fj,self,fk){if(this.self(arguments).__nX[fi]){for(var i=0,fl=this._getPaneScrollerArr();i<fl.length;i++){fl[i].removeListener.apply(fl[i],arguments);}
;}
else {qx.ui.core.Widget.prototype.removeListener.call(this,fi,fj,self,fk);}
;}
,removeListenerById:function(fm){var fq=fm.split(bs);var fp=fq.shift();if(this.self(arguments).__nX[fp]){var fo=true;for(var i=0,fn=this._getPaneScrollerArr();i<fn.length;i++){fo=fn[i].removeListenerById.call(fn[i],fq[i])&&fo;}
;return fo;}
else {return qx.ui.core.Widget.prototype.removeListenerById.call(this,fm);}
;}
,destroy:function(){this.getChildControl(c).getMenu().destroy();qx.ui.core.Widget.prototype.destroy.call(this);}
},destruct:function(){if(qx.core.Environment.get(Y)){qx.locale.Manager.getInstance().removeListener(E,this._onChangeLocale,this);}
;var fs=this.getSelectionModel();if(fs){fs.dispose();}
;var fr=this.getDataRowRenderer();if(fr){fr.dispose();}
;this._cleanUpMetaColumns(0);this.getTableColumnModel().dispose();this._disposeObjects(bj,bC,N,N,bx,bf);this._disposeMap(a);}
});}
)();
(function(){var s="Decorator",r="center",q="_applyReversed",p="qx.debug",o="bottom",n="' is not supported by the VBox layout!",m="qx.ui.layout.VBox",k="flex",j="Integer",h="The property '",c="right",g="Boolean",f="left",b="height",a="middle",e="top",d="_applyLayoutChange";qx.Class.define(m,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);if(t){this.setSpacing(t);}
;if(u){this.setAlignY(u);}
;if(v){this.setSeparator(v);}
;}
,properties:{alignY:{check:[e,a,o],init:e,apply:d},alignX:{check:[f,r,c],init:f,apply:d},spacing:{check:j,init:0,apply:d},separator:{check:s,nullable:true,apply:d},reversed:{check:g,init:false,apply:q}},members:{__kN:null,__kO:null,__kP:null,__dW:null,_applyReversed:function(){this._invalidChildrenCache=true;this._applyLayoutChange();}
,__kQ:function(){var B=this._getLayoutChildren();var length=B.length;var x=false;var w=this.__kN&&this.__kN.length!=length&&this.__kO&&this.__kN;var z;var y=w?this.__kN:new Array(length);var A=w?this.__kO:new Array(length);if(this.getReversed()){B=B.concat().reverse();}
;for(var i=0;i<length;i++){z=B[i].getLayoutProperties();if(z.height!=null){y[i]=parseFloat(z.height)/100;}
;if(z.flex!=null){A[i]=z.flex;x=true;}
else {A[i]=0;}
;}
;if(!w){this.__kN=y;this.__kO=A;}
;this.__kP=x;this.__dW=B;delete this._invalidChildrenCache;}
,verifyLayoutProperty:qx.core.Environment.select(p,{"true":function(C,name,D){this.assert(name===k||name===b,h+name+n);if(name==b){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);}
else {this.assertNumber(D);this.assert(D>=0);}
;}
,"false":null}),renderLayout:function(E,F){if(this._invalidChildrenCache){this.__kQ();}
;var M=this.__dW;var length=M.length;var W=qx.ui.layout.Util;var V=this.getSpacing();var ba=this.getSeparator();if(ba){var J=W.computeVerticalSeparatorGaps(M,V,ba);}
else {var J=W.computeVerticalGaps(M,V,true);}
;var i,H,I,Q;var R=[];var X=J;for(i=0;i<length;i+=1){Q=this.__kN[i];I=Q!=null?Math.floor((F-J)*Q):M[i].getSizeHint().height;R.push(I);X+=I;}
;if(this.__kP&&X!=F){var O={};var U,Y;for(i=0;i<length;i+=1){U=this.__kO[i];if(U>0){N=M[i].getSizeHint();O[i]={min:N.minHeight,value:R[i],max:N.maxHeight,flex:U};}
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
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kQ();}
;var bj=qx.ui.layout.Util;var br=this.__dW;var bf=0,bi=0,bh=0;var bd=0,bk=0;var bo,be,bq;for(var i=0,l=br.length;i<l;i+=1){bo=br[i];be=bo.getSizeHint();bi+=be.height;var bn=this.__kO[i];var bg=this.__kN[i];if(bn){bf+=be.minHeight;}
else if(bg){bh=Math.max(bh,Math.round(be.minHeight/bg));}
else {bf+=be.height;}
;bq=bo.getMarginLeft()+bo.getMarginRight();if((be.width+bq)>bk){bk=be.width+bq;}
;if((be.minWidth+bq)>bd){bd=be.minWidth+bq;}
;}
;bf+=bh;var bm=this.getSpacing();var bp=this.getSeparator();if(bp){var bl=bj.computeVerticalSeparatorGaps(br,bm,bp);}
else {var bl=bj.computeVerticalGaps(br,bm,true);}
;return {minHeight:bf+bl,height:bi+bl,minWidth:bd,width:bk};}
},destruct:function(){this.__kN=this.__kO=this.__dW=null;}
});}
)();
(function(){var a="qx.ui.table.IColumnMenuButton";qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;}
,empty:function(){return true;}
}});}
)();
(function(){var n="toolTipText",m="icon",l="label",k="qx.ui.core.MExecutable",j="value",h="qx.event.type.Event",g="_applyCommand",f="enabled",d="menu",c="changeCommand",a="qx.ui.core.Command",b="execute";qx.Mixin.define(k,{events:{"execute":h},properties:{command:{check:a,apply:g,event:c,nullable:true}},members:{__lL:null,__lM:false,__lN:null,_bindableProperties:[f,l,m,n,j,d],execute:function(){var o=this.getCommand();if(o){if(this.__lM){this.__lM=false;}
else {this.__lM=true;o.execute(this);}
;}
;this.fireEvent(b);}
,__lO:function(e){if(this.__lM){this.__lM=false;return;}
;this.__lM=true;this.execute();}
,_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__lN);}
;if(p!=null){this.__lN=p.addListener(b,this.__lO,this);}
;var t=this.__lL;if(t==null){this.__lL=t={};}
;var u;for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];if(q!=null&&!q.isDisposed()&&t[s]!=null){q.removeBinding(t[s]);t[s]=null;}
;if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);if(r==null){u=this.get(s);if(u==null){this.syncAppearance();u=qx.util.PropertyUtil.getThemeValue(this,s);}
;}
else {u=null;}
;t[s]=p.bind(s,this,s);if(u){this.set(s,u);}
;}
;}
;}
},destruct:function(){this._applyCommand(null,this.getCommand());this.__lL=null;}
});}
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
(function(){var n="qx.ui.menu.Menu",m="submenu",l="Enter",k="abandoned",j="contextmenu",i="changeMenu",h="qx.ui.form.MenuButton",g="visible",f="left",d="_applyMenu",a="hovered",c="changeVisibility",b="pressed";qx.Class.define(h,{extend:qx.ui.form.Button,construct:function(o,p,q){qx.ui.form.Button.call(this,o,p);if(q!=null){this.setMenu(q);}
;}
,properties:{menu:{check:n,nullable:true,apply:d,event:i}},members:{_applyVisibility:function(r,s){qx.ui.form.Button.prototype._applyVisibility.call(this,r,s);var t=this.getMenu();if(r!=g&&t){t.hide();}
;}
,_applyMenu:function(u,v){if(v){v.removeListener(c,this._onMenuChange,this);v.resetOpener();}
;if(u){u.addListener(c,this._onMenuChange,this);u.setOpener(this);u.removeState(m);u.removeState(j);}
;}
,open:function(w){var x=this.getMenu();if(x){qx.ui.menu.Manager.getInstance().hideAll();x.setOpener(this);x.open();if(w){var y=x.getSelectables()[0];if(y){x.setSelectedButton(y);}
;}
;}
;}
,_onMenuChange:function(e){var z=this.getMenu();if(z.isVisible()){this.addState(b);}
else {this.removeState(b);}
;}
,_onMouseDown:function(e){qx.ui.form.Button.prototype._onMouseDown.call(this,e);if(e.getButton()!=f){return;}
;var A=this.getMenu();if(A){if(!A.isVisible()){this.open();}
else {A.exclude();}
;e.stopPropagation();}
;}
,_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);e.stopPropagation();}
,_onMouseOver:function(e){this.addState(a);}
,_onMouseOut:function(e){this.removeState(a);}
,_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:this.removeState(k);this.addState(b);var B=this.getMenu();if(B){if(!B.isVisible()){this.open();}
else {B.exclude();}
;}
;e.stopPropagation();};}
,_onKeyUp:function(e){}
}});}
)();
(function(){var w="__nA",v="blur",u="Enter",t="__oh",s="__oi",r="Up",q="Escape",p="event.touch",o="qx.ui.menu.Manager",n="Left",f="Down",m="Right",j="singleton",c="Space",b="Object is no menu: ",h="qx.debug",g="interval",k="keydown",a="mousedown",l="keyup",d="keypress";qx.Class.define(o,{type:j,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__nA=[];var x=document.body;var y=qx.event.Registration;y.addListener(window.document.documentElement,a,this._onMouseDown,this,true);y.addListener(x,k,this._onKeyUpDown,this,true);y.addListener(x,l,this._onKeyUpDown,this,true);y.addListener(x,d,this._onKeyPress,this,true);if(!qx.core.Environment.get(p)){qx.bom.Element.addListener(window,v,this.hideAll,this);}
;this.__oh=new qx.event.Timer;this.__oh.addListener(g,this._onOpenInterval,this);this.__oi=new qx.event.Timer;this.__oi.addListener(g,this._onCloseInterval,this);}
,members:{__oj:null,__ok:null,__oh:null,__oi:null,__nA:null,_getChild:function(z,A,B,C){var D=z.getChildren();var length=D.length;var E;for(var i=A;i<length&&i>=0;i+=B){E=D[i];if(E.isEnabled()&&!E.isAnonymous()&&E.isVisible()){return E;}
;}
;if(C){i=i==length?0:length-1;for(;i!=A;i+=B){E=D[i];if(E.isEnabled()&&!E.isAnonymous()&&E.isVisible()){return E;}
;}
;}
;return null;}
,_isInMenu:function(F){while(F){if(F instanceof qx.ui.menu.Menu){return true;}
;F=F.getLayoutParent();}
;return false;}
,_getMenuButton:function(G){while(G){if(G instanceof qx.ui.menu.AbstractButton){return G;}
;G=G.getLayoutParent();}
;return null;}
,add:function(H){if(qx.core.Environment.get(h)){if(!(H instanceof qx.ui.menu.Menu)){throw new Error(b+H);}
;}
;var I=this.__nA;I.push(H);H.setZIndex(1e6+I.length);}
,remove:function(J){if(qx.core.Environment.get(h)){if(!(J instanceof qx.ui.menu.Menu)){throw new Error(b+J);}
;}
;var K=this.__nA;if(K){qx.lang.Array.remove(K,J);}
;}
,hideAll:function(){var L=this.__nA;if(L){for(var i=L.length-1;i>=0;i--){L[i].exclude();}
;}
;}
,getActiveMenu:function(){var M=this.__nA;return M.length>0?M[M.length-1]:null;}
,scheduleOpen:function(N){this.cancelClose(N);if(N.isVisible()){if(this.__oj){this.cancelOpen(this.__oj);}
;}
else if(this.__oj!=N){this.__oj=N;this.__oh.restartWith(N.getOpenInterval());}
;}
,scheduleClose:function(O){this.cancelOpen(O);if(!O.isVisible()){if(this.__ok){this.cancelClose(this.__ok);}
;}
else if(this.__ok!=O){this.__ok=O;this.__oi.restartWith(O.getCloseInterval());}
;}
,cancelOpen:function(P){if(this.__oj==P){this.__oh.stop();this.__oj=null;}
;}
,cancelClose:function(Q){if(this.__ok==Q){this.__oi.stop();this.__ok=null;}
;}
,_onOpenInterval:function(e){this.__oh.stop();this.__oj.open();this.__oj=null;}
,_onCloseInterval:function(e){this.__oi.stop();this.__ok.exclude();this.__ok=null;}
,_onMouseDown:function(e){var R=e.getTarget();R=qx.ui.core.Widget.getWidgetByElement(R,true);if(R==null){this.hideAll();return;}
;if(R.getMenu&&R.getMenu()&&R.getMenu().isVisible()){return;}
;if(this.__nA.length>0&&!this._isInMenu(R)){this.hideAll();}
;}
,__ol:{"Enter":1,"Space":1},__ln:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var S=this.getActiveMenu();if(!S){return;}
;var T=e.getKeyIdentifier();if(this.__ln[T]||(this.__ol[T]&&S.getSelectedButton())){e.stopPropagation();}
;}
,_onKeyPress:function(e){var U=this.getActiveMenu();if(!U){return;}
;var V=e.getKeyIdentifier();var X=this.__ln[V];var W=this.__ol[V];if(X){switch(V){case r:this._onKeyPressUp(U);break;case f:this._onKeyPressDown(U);break;case n:this._onKeyPressLeft(U);break;case m:this._onKeyPressRight(U);break;case q:this.hideAll();break;};e.stopPropagation();e.preventDefault();}
else if(W){var Y=U.getSelectedButton();if(Y){switch(V){case u:this._onKeyPressEnter(U,Y,e);break;case c:this._onKeyPressSpace(U,Y,e);break;};e.stopPropagation();e.preventDefault();}
;}
;}
,_onKeyPressUp:function(ba){var bb=ba.getSelectedButton();var bc=ba.getChildren();var be=bb?ba.indexOf(bb)-1:bc.length-1;var bd=this._getChild(ba,be,-1,true);if(bd){ba.setSelectedButton(bd);}
else {ba.resetSelectedButton();}
;}
,_onKeyPressDown:function(bf){var bg=bf.getSelectedButton();var bi=bg?bf.indexOf(bg)+1:0;var bh=this._getChild(bf,bi,1,true);if(bh){bf.setSelectedButton(bh);}
else {bf.resetSelectedButton();}
;}
,_onKeyPressLeft:function(bj){var bo=bj.getOpener();if(!bo){return;}
;if(bo instanceof qx.ui.menu.AbstractButton){var bl=bo.getLayoutParent();bl.resetOpenedButton();bl.setSelectedButton(bo);}
else if(bo instanceof qx.ui.menubar.Button){var bn=bo.getMenuBar().getMenuButtons();var bk=bn.indexOf(bo);if(bk===-1){return;}
;var bp=null;var length=bn.length;for(var i=1;i<=length;i++){var bm=bn[(bk-i+length)%length];if(bm.isEnabled()&&bm.isVisible()){bp=bm;break;}
;}
;if(bp&&bp!=bo){bp.open(true);}
;}
;}
,_onKeyPressRight:function(bq){var bs=bq.getSelectedButton();if(bs){var br=bs.getMenu();if(br){bq.setOpenedButton(bs);var by=this._getChild(br,0,1);if(by){br.setSelectedButton(by);}
;return;}
;}
else if(!bq.getOpenedButton()){var by=this._getChild(bq,0,1);if(by){bq.setSelectedButton(by);if(by.getMenu()){bq.setOpenedButton(by);}
;return;}
;}
;var bw=bq.getOpener();if(bw instanceof qx.ui.menu.Button&&bs){while(bw){bw=bw.getLayoutParent();if(bw instanceof qx.ui.menu.Menu){bw=bw.getOpener();if(bw instanceof qx.ui.menubar.Button){break;}
;}
else {break;}
;}
;if(!bw){return;}
;}
;if(bw instanceof qx.ui.menubar.Button){var bv=bw.getMenuBar().getMenuButtons();var bt=bv.indexOf(bw);if(bt===-1){return;}
;var bx=null;var length=bv.length;for(var i=1;i<=length;i++){var bu=bv[(bt+i)%length];if(bu.isEnabled()&&bu.isVisible()){bx=bu;break;}
;}
;if(bx&&bx!=bw){bx.open(true);}
;}
;}
,_onKeyPressEnter:function(bz,bA,e){if(bA.hasListener(d)){var bB=e.clone();bB.setBubbles(false);bB.setTarget(bA);bA.dispatchEvent(bB);}
;this.hideAll();}
,_onKeyPressSpace:function(bC,bD,e){if(bD.hasListener(d)){var bE=e.clone();bE.setBubbles(false);bE.setTarget(bD);bD.dispatchEvent(bE);}
;}
},destruct:function(){var bG=qx.event.Registration;var bF=document.body;bG.removeListener(window.document.documentElement,a,this._onMouseDown,this,true);bG.removeListener(bF,k,this._onKeyUpDown,this,true);bG.removeListener(bF,l,this._onKeyUpDown,this,true);bG.removeListener(bF,d,this._onKeyPress,this,true);this._disposeObjects(t,s);this._disposeArray(w);}
});}
)();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";qx.Mixin.define(b,{members:{__om:function(m,n,o,p){var q=this.getChildrenContainer();if(q===this){m=h+m;}
;return (q[m])(n,o,p);}
,getChildren:function(){return this.__om(c);}
,hasChildren:function(){return this.__om(f);}
,add:function(r,s){return this.__om(j,r,s);}
,remove:function(t){return this.__om(a,t);}
,removeAll:function(){return this.__om(d);}
,indexOf:function(u){return this.__om(l,u);}
,addAt:function(v,w,x){this.__om(g,v,w,x);}
,addBefore:function(y,z,A){this.__om(i,y,z,A);}
,addAfter:function(B,C,D){this.__om(k,B,C,D);}
,removeAt:function(E){return this.__om(e,E);}
}});}
)();
(function(){var l="Boolean",k="mouseout",j="excluded",h="menu",g="_applySelectedButton",f="_applyOpenInterval",d="_applySpacingY",c="_blocker",b="_applyCloseInterval",a="_applyBlockerColor",C="The menu instance needs a configured 'opener' widget!",B="_applyIconColumnWidth",A="mouseover",z="qx.ui.menu.Menu",y="Color",x="Number",w="_applyOpenedButton",v="Unknown target: ",u="_applySpacingX",t="_applyBlockerOpacity",r="_applyArrowColumnWidth",s="selected",p="visible",q="qx.ui.core.Widget",n="Integer",o="resize",m="slidebar";qx.Class.define(z,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.menu.Layout);var D=this.getApplicationRoot();D.add(this);this.addListener(A,this._onMouseOver);this.addListener(k,this._onMouseOut);this.addListener(o,this._onResize,this);D.addListener(o,this._onResize,this);this._blocker=new qx.ui.core.Blocker(D);this.initVisibility();this.initKeepFocus();this.initKeepActive();}
,properties:{appearance:{refine:true,init:h},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:j},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:n,apply:u,init:0,themeable:true},spacingY:{check:n,apply:d,init:0,themeable:true},iconColumnWidth:{check:n,init:0,themeable:true,apply:B},arrowColumnWidth:{check:n,init:0,themeable:true,apply:r},blockerColor:{check:y,init:null,nullable:true,apply:a,themeable:true},blockerOpacity:{check:x,init:1,apply:t,themeable:true},selectedButton:{check:q,nullable:true,apply:g},openedButton:{check:q,nullable:true,apply:w},opener:{check:q,nullable:true},openInterval:{check:n,themeable:true,init:250,apply:f},closeInterval:{check:n,themeable:true,init:250,apply:b},blockBackground:{check:l,themeable:true,init:false}},members:{__on:null,__oo:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());this.__oq();this.show();this._placementTarget=this.getOpener();}
else {this.warn(C);}
;}
,openAtMouse:function(e){this.placeToMouse(e);this.__oq();this.show();this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};}
,openAtPoint:function(E){this.placeToPoint(E);this.__oq();this.show();this._placementTarget=E;}
,addSeparator:function(){this.add(new qx.ui.menu.Separator);}
,getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();}
,getSelectables:function(){var F=[];var G=this.getChildren();for(var i=0;i<G.length;i++){if(G[i].isEnabled()){F.push(G[i]);}
;}
;return F;}
,_applyIconColumnWidth:function(H,I){this._getMenuLayout().setIconColumnWidth(H);}
,_applyArrowColumnWidth:function(J,K){this._getMenuLayout().setArrowColumnWidth(J);}
,_applySpacingX:function(L,M){this._getMenuLayout().setColumnSpacing(L);}
,_applySpacingY:function(N,O){this._getMenuLayout().setSpacing(N);}
,_applyVisibility:function(P,Q){qx.ui.core.Widget.prototype._applyVisibility.call(this,P,Q);var R=qx.ui.menu.Manager.getInstance();if(P===p){R.add(this);var S=this.getParentMenu();if(S){S.setOpenedButton(this.getOpener());}
;}
else if(Q===p){R.remove(this);var S=this.getParentMenu();if(S&&S.getOpenedButton()==this.getOpener()){S.resetOpenedButton();}
;this.resetOpenedButton();this.resetSelectedButton();}
;this.__op();}
,__op:function(){if(this.isVisible()){if(this.getBlockBackground()){var T=this.getZIndex();this._blocker.blockContent(T-1);}
;}
else {if(this._blocker.isContentBlocked()){this._blocker.unblockContent();}
;}
;}
,getParentMenu:function(){var U=this.getOpener();if(!U||!(U instanceof qx.ui.menu.AbstractButton)){return null;}
;if(U&&U.getContextMenu()===this){return null;}
;while(U&&!(U instanceof qx.ui.menu.Menu)){U=U.getLayoutParent();}
;return U;}
,_applySelectedButton:function(V,W){if(W){W.removeState(s);}
;if(V){V.addState(s);}
;}
,_applyOpenedButton:function(X,Y){if(Y&&Y.getMenu()){Y.getMenu().exclude();}
;if(X){X.getMenu().open();}
;}
,_applyBlockerColor:function(ba,bb){this._blocker.setColor(ba);}
,_applyBlockerOpacity:function(bc,bd){this._blocker.setOpacity(bc);}
,getChildrenContainer:function(){return this.getChildControl(m,true)||this;}
,_createChildControlImpl:function(be,bf){var bg;switch(be){case m:var bg=new qx.ui.menu.MenuSlideBar();var bi=this._getLayout();this._setLayout(new qx.ui.layout.Grow());var bh=bg.getLayout();bg.setLayout(bi);bh.dispose();var bj=qx.lang.Array.clone(this.getChildren());for(var i=0;i<bj.length;i++){bg.add(bj[i]);}
;this.removeListener(o,this._onResize,this);bg.getChildrenContainer().addListener(o,this._onResize,this);this._add(bg);break;};return bg||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,be);}
,_getMenuLayout:function(){if(this.hasChildControl(m)){return this.getChildControl(m).getChildrenContainer().getLayout();}
else {return this._getLayout();}
;}
,_getMenuBounds:function(){if(this.hasChildControl(m)){return this.getChildControl(m).getChildrenContainer().getBounds();}
else {return this.getBounds();}
;}
,_computePlacementSize:function(){return this._getMenuBounds();}
,__oq:function(){var bl=this._getMenuBounds();if(!bl){this.addListenerOnce(o,this.__oq,this);return;}
;var bk=this.getLayoutParent().getBounds().height;var top=this.getLayoutProperties().top;var bm=this.getLayoutProperties().left;if(top<0){this._assertSlideBar(function(){this.setHeight(bl.height+top);this.moveTo(bm,0);}
);}
else if(top+bl.height>bk){this._assertSlideBar(function(){this.setHeight(bk-top);}
);}
else {this.setHeight(null);}
;}
,_assertSlideBar:function(bn){if(this.hasChildControl(m)){return bn.call(this);}
;this.__oo=bn;qx.ui.core.queue.Widget.add(this);}
,syncWidget:function(bo){this.getChildControl(m);if(this.__oo){this.__oo.call(this);delete this.__oo;}
;}
,_onResize:function(){if(this.isVisible()){var bp=this._placementTarget;if(!bp){return;}
else if(bp instanceof qx.ui.core.Widget){this.placeToWidget(bp);}
else if(bp.top!==undefined){this.placeToPoint(bp);}
else {throw new Error(v+bp);}
;;this.__oq();}
;}
,_onMouseOver:function(e){var br=qx.ui.menu.Manager.getInstance();br.cancelClose(this);var bs=e.getTarget();if(bs.isEnabled()&&bs instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(bs);var bq=bs.getMenu&&bs.getMenu();if(bq){bq.setOpener(bs);br.scheduleOpen(bq);this.__on=bq;}
else {var bt=this.getOpenedButton();if(bt){br.scheduleClose(bt.getMenu());}
;if(this.__on){br.cancelOpen(this.__on);this.__on=null;}
;}
;}
else if(!this.getOpenedButton()){this.resetSelectedButton();}
;}
,_onMouseOut:function(e){var bu=qx.ui.menu.Manager.getInstance();if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bv=this.getOpenedButton();bv?this.setSelectedButton(bv):this.resetSelectedButton();if(bv){bu.cancelClose(bv.getMenu());}
;if(this.__on){bu.cancelOpen(this.__on);}
;}
;}
},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);}
;this.getApplicationRoot().removeListener(o,this._onResize,this);this._placementTarget=null;this._disposeObjects(c);}
});}
)();
(function(){var c="qx.ui.menu.Layout",b="Integer",a="_applyLayoutChange";qx.Class.define(c,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:b,init:0,apply:a},spanColumn:{check:b,init:1,nullable:true,apply:a},iconColumnWidth:{check:b,init:0,themeable:true,apply:a},arrowColumnWidth:{check:b,init:0,themeable:true,apply:a}},members:{__or:null,_computeSizeHint:function(){var q=this._getLayoutChildren();var o,g,j;var e=this.getSpanColumn();var h=this.__or=[0,0,0,0];var m=this.getColumnSpacing();var k=0;var f=0;for(var i=0,l=q.length;i<l;i++){o=q[i];if(o.isAnonymous()){continue;}
;g=o.getChildrenSizes();for(var n=0;n<g.length;n++){if(e!=null&&n==e&&g[e+1]==0){k=Math.max(k,g[n]);}
else {h[n]=Math.max(h[n],g[n]);}
;}
;var d=q[i].getInsets();f=Math.max(f,d.left+d.right);}
;if(e!=null&&h[e]+m+h[e+1]<k){h[e]=k-h[e+1]-m;}
;if(k==0){j=m*2;}
else {j=m*3;}
;if(h[0]==0){h[0]=this.getIconColumnWidth();}
;if(h[3]==0){h[3]=this.getArrowColumnWidth();}
;var p=qx.ui.layout.VBox.prototype._computeSizeHint.call(this).height;return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};}
,getColumnSizes:function(){return this.__or||null;}
},destruct:function(){this.__or=null;}
});}
)();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});}
)();
(function(){var v="qx.ui.menu.Menu",u="qx.ui.menu.AbstractButton",t="keypress",s="",r="_applyIcon",q="changeMenu",p="changeIcon",o="click",n="changeLabel",m="abstract",f="_applyLabel",l="_applyMenu",i="submenu",c="String",b="changeCommand",h="changeLocale",g="qx.dynlocale",j="icon",a="label",k="arrow",d="shortcut";qx.Class.define(u,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:m,construct:function(){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.menu.ButtonLayout);this.addListener(o,this._onClick);this.addListener(t,this._onKeyPress);this.addListener(b,this._onChangeCommand,this);}
,properties:{blockToolTip:{refine:true,init:true},label:{check:c,apply:f,nullable:true,event:n},menu:{check:v,apply:l,nullable:true,dereference:true,event:q},icon:{check:c,apply:r,themeable:true,nullable:true,event:p}},members:{_createChildControlImpl:function(w,x){var y;switch(w){case j:y=new qx.ui.basic.Image;y.setAnonymous(true);this._add(y,{column:0});break;case a:y=new qx.ui.basic.Label;y.setAnonymous(true);this._add(y,{column:1});break;case d:y=new qx.ui.basic.Label;y.setAnonymous(true);this._add(y,{column:2});break;case k:y=new qx.ui.basic.Image;y.setAnonymous(true);this._add(y,{column:3});break;};return y||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,w);}
,_forwardStates:{selected:1},getChildrenSizes:function(){var z=0,A=0,B=0,F=0;if(this._isChildControlVisible(j)){var G=this.getChildControl(j);z=G.getMarginLeft()+G.getSizeHint().width+G.getMarginRight();}
;if(this._isChildControlVisible(a)){var D=this.getChildControl(a);A=D.getMarginLeft()+D.getSizeHint().width+D.getMarginRight();}
;if(this._isChildControlVisible(d)){var C=this.getChildControl(d);B=C.getMarginLeft()+C.getSizeHint().width+C.getMarginRight();}
;if(this._isChildControlVisible(k)){var E=this.getChildControl(k);F=E.getMarginLeft()+E.getSizeHint().width+E.getMarginRight();}
;return [z,A,B,F];}
,_onClick:function(e){}
,_onKeyPress:function(e){}
,_onChangeCommand:function(e){var J=e.getData();if(J==null){return;}
;if(qx.core.Environment.get(g)){var H=e.getOldData();if(!H){qx.locale.Manager.getInstance().addListener(h,this._onChangeLocale,this);}
;if(!J){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);}
;}
;var I=J!=null?J.toString():s;this.getChildControl(d).setValue(I);}
,_onChangeLocale:qx.core.Environment.select(g,{"true":function(e){var K=this.getCommand();if(K!=null){this.getChildControl(d).setValue(K.toString());}
;}
,"false":null}),_applyIcon:function(L,M){if(L){this._showChildControl(j).setSource(L);}
else {this._excludeChildControl(j);}
;}
,_applyLabel:function(N,O){if(N){this._showChildControl(a).setValue(N);}
else {this._excludeChildControl(a);}
;}
,_applyMenu:function(P,Q){if(Q){Q.resetOpener();Q.removeState(i);}
;if(P){this._showChildControl(k);P.setOpener(this);P.addState(i);}
else {this._excludeChildControl(k);}
;}
},destruct:function(){this.removeListener(b,this._onChangeCommand,this);if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();}
;}
;if(qx.core.Environment.get(g)){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);}
;}
});}
)();
(function(){var g="qx.ui.menu.ButtonLayout",f="qx.debug",e="column",d="left",c="middle",b="' is not supported by the MenuButton layout!",a="The property '";qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Environment.select(f,{"true":function(h,name,j){this.assert(name==e,a+name+b);}
,"false":null}),renderLayout:function(k,m){var w=this._getLayoutChildren();var v;var o;var p=[];for(var i=0,l=w.length;i<l;i++){v=w[i];o=v.getLayoutProperties().column;p[o]=v;}
;var u=this.__os(w[0]);var x=u.getColumnSizes();var r=u.getSpacingX();var q=qx.lang.Array.sum(x)+r*(x.length-1);if(q<k){x[1]+=k-q;}
;var y=0,top=0;var s=qx.ui.layout.Util;for(var i=0,l=x.length;i<l;i++){v=p[i];if(v){var n=v.getSizeHint();var top=s.computeVerticalAlignOffset(v.getAlignY()||c,n.height,m,0,0);var t=s.computeHorizontalAlignOffset(v.getAlignX()||d,n.width,x[i],v.getMarginLeft(),v.getMarginRight());v.renderLayout(y+t,top,n.width,n.height);}
;if(x[i]>0){y+=x[i]+r;}
;}
;}
,__os:function(z){while(!(z instanceof qx.ui.menu.Menu)){z=z.getLayoutParent();}
;return z;}
,_computeSizeHint:function(){var C=this._getLayoutChildren();var B=0;var D=0;for(var i=0,l=C.length;i<l;i++){var A=C[i].getSizeHint();D+=A.width;B=Math.max(B,A.height);}
;return {width:D,height:B};}
}});}
)();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);}
,getLayout:function(){return this.getChildrenContainer().getLayout();}
}});}
)();
(function(){var v="qx.ui.container.SlideBar",u="engine.version",t="engine.name",s="removeChildWidget",r="scrollX",q="scrollY",p="_applyOrientation",o="mousewheel",n="gecko",m="x",f="y",l="Integer",i="slidebar",c="update",b="content",h="execute",g="button-backward",j="button-forward",a="vertical",k="scrollpane",d="horizontal";qx.Class.define(v,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(w){qx.ui.core.Widget.call(this);var x=this.getChildControl(k);this._add(x,{flex:1});if(w!=null){this.setOrientation(w);}
else {this.initOrientation();}
;this.addListener(o,this._onMouseWheel,this);}
,properties:{appearance:{refine:true,init:i},orientation:{check:[d,a],init:d,apply:p},scrollStep:{check:l,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(b);}
,_createChildControlImpl:function(y,z){var A;switch(y){case j:A=new qx.ui.form.RepeatButton;A.addListener(h,this._onExecuteForward,this);A.setFocusable(false);this._addAt(A,2);break;case g:A=new qx.ui.form.RepeatButton;A.addListener(h,this._onExecuteBackward,this);A.setFocusable(false);this._addAt(A,0);break;case b:A=new qx.ui.container.Composite();if(qx.core.Environment.get(t)==n&&parseInt(qx.core.Environment.get(u))<2){A.addListener(s,this._onRemoveChild,this);}
;this.getChildControl(k).add(A);break;case k:A=new qx.ui.core.scroll.ScrollPane();A.addListener(c,this._onResize,this);A.addListener(r,this._onScroll,this);A.addListener(q,this._onScroll,this);break;};return A||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,y);}
,_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(B){var C=this.getChildControl(k);if(this.getOrientation()===d){C.scrollByX(B);}
else {C.scrollByY(B);}
;}
,scrollTo:function(D){var E=this.getChildControl(k);if(this.getOrientation()===d){E.scrollToX(D);}
else {E.scrollToY(D);}
;}
,_applyEnabled:function(F,G,name){qx.ui.core.Widget.prototype._applyEnabled.call(this,F,G,name);this._updateArrowsEnabled();}
,_applyOrientation:function(H,I){var L=[this.getLayout(),this._getLayout()];var K=this.getChildControl(j);var J=this.getChildControl(g);if(I==a){K.removeState(a);J.removeState(a);K.addState(d);J.addState(d);}
else if(I==d){K.removeState(d);J.removeState(d);K.addState(a);J.addState(a);}
;if(H==d){this._setLayout(new qx.ui.layout.HBox());this.setLayout(new qx.ui.layout.HBox());}
else {this._setLayout(new qx.ui.layout.VBox());this.setLayout(new qx.ui.layout.VBox());}
;if(L[0]){L[0].dispose();}
;if(L[1]){L[1].dispose();}
;}
,_onMouseWheel:function(e){var Q=0;var P=this.getChildControl(k);if(this.getOrientation()===d){Q=e.getWheelDelta(m);var M=P.getScrollX();var N=P.getScrollMaxX();var O=parseInt(Q);if(!(O<0&&M<=0||O>0&&M>=N||Q==0)){e.stop();}
;}
else {Q=e.getWheelDelta(f);var M=P.getScrollY();var N=P.getScrollMaxY();var O=parseInt(Q);if(!(O<0&&M<=0||O>0&&M>=N||Q==0)){e.stop();}
;}
;this.scrollBy(Q*this.getScrollStep());}
,_onScroll:function(){this._updateArrowsEnabled();}
,_onResize:function(e){var content=this.getChildControl(k).getChildren()[0];if(!content){return;}
;var R=this.getInnerSize();var T=content.getBounds();var S=(this.getOrientation()===d)?T.width>R.width:T.height>R.height;if(S){this._showArrows();this._updateArrowsEnabled();}
else {this._hideArrows();}
;}
,_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());}
,_onExecuteForward:function(){this.scrollBy(this.getScrollStep());}
,_onRemoveChild:function(){qx.event.Timer.once(function(){var U=this.getChildControl(k);if(!U.isDisposed()){this.scrollBy(U.getScrollX());}
;}
,this,50);}
,_updateArrowsEnabled:function(){if(!this.getEnabled()){this.getChildControl(g).setEnabled(false);this.getChildControl(j).setEnabled(false);return;}
;var W=this.getChildControl(k);if(this.getOrientation()===d){var V=W.getScrollX();var X=W.getScrollMaxX();}
else {var V=W.getScrollY();var X=W.getScrollMaxY();}
;this.getChildControl(g).setEnabled(V>0);this.getChildControl(j).setEnabled(V<X);}
,_showArrows:function(){this._showChildControl(j);this._showChildControl(g);}
,_hideArrows:function(){this._excludeChildControl(j);this._excludeChildControl(g);this.scrollTo(0);}
}});}
)();
(function(){var n="press",m="qx.ui.form.RepeatButton",l="release",k="interval",j="__iG",i="execute",h="Enter",g="Space",f="hovered",d="qx.event.type.Event",a="Integer",c="abandoned",b="pressed";qx.Class.define(m,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);this.__iG=new qx.event.AcceleratingTimer();this.__iG.addListener(k,this._onInterval,this);}
,events:{"execute":d,"press":d,"release":d},properties:{interval:{check:a,init:100},firstInterval:{check:a,init:500},minTimer:{check:a,init:20},timerDecrease:{check:a,init:2}},members:{__ot:null,__iG:null,press:function(){if(this.isEnabled()){if(!this.hasState(b)){this.__ou();}
;this.removeState(c);this.addState(b);}
;}
,release:function(q){if(!this.isEnabled()){return;}
;if(this.hasState(b)){if(!this.__ot){this.execute();}
;}
;this.removeState(b);this.removeState(c);this.__ov();}
,_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);if(!r){this.removeState(b);this.removeState(c);this.__ov();}
;}
,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;if(this.hasState(c)){this.removeState(c);this.addState(b);this.__iG.start();}
;this.addState(f);}
,_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;this.removeState(f);if(this.hasState(b)){this.removeState(b);this.addState(c);this.__iG.stop();}
;}
,_onMouseDown:function(e){if(!e.isLeftPressed()){return;}
;this.capture();this.__ou();e.stopPropagation();}
,_onMouseUp:function(e){this.releaseCapture();if(!this.hasState(c)){this.addState(f);if(this.hasState(b)&&!this.__ot){this.execute();}
;}
;this.__ov();e.stopPropagation();}
,_onKeyUp:function(e){switch(e.getKeyIdentifier()){case h:case g:if(this.hasState(b)){if(!this.__ot){this.execute();}
;this.removeState(b);this.removeState(c);e.stopPropagation();this.__ov();}
;};}
,_onKeyDown:function(e){switch(e.getKeyIdentifier()){case h:case g:this.removeState(c);this.addState(b);e.stopPropagation();this.__ou();};}
,_onInterval:function(e){this.__ot=true;this.fireEvent(i);}
,__ou:function(){this.fireEvent(n);this.__ot=false;this.__iG.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();this.removeState(c);this.addState(b);}
,__ov:function(){this.fireEvent(l);this.__iG.stop();this.removeState(c);this.removeState(b);}
},destruct:function(){this._disposeObjects(j);}
});}
)();
(function(){var e="__iG",d="qx.event.type.Event",c="qx.event.AcceleratingTimer",b="interval",a="Integer";qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__iG=new qx.event.Timer(this.getInterval());this.__iG.addListener(b,this._onInterval,this);}
,events:{"interval":d},properties:{interval:{check:a,init:100},firstInterval:{check:a,init:500},minimum:{check:a,init:20},decrease:{check:a,init:2}},members:{__iG:null,__ow:null,start:function(){this.__iG.setInterval(this.getFirstInterval());this.__iG.start();}
,stop:function(){this.__iG.stop();this.__ow=null;}
,_onInterval:function(){this.__iG.stop();if(this.__ow==null){this.__ow=this.getInterval();}
;this.__ow=Math.max(this.getMinimum(),this.__ow-this.getDecrease());this.__iG.setInterval(this.__ow);this.__iG.start();this.fireEvent(b);}
},destruct:function(){this._disposeObjects(e);}
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
(function(){var f="button-backward",e="vertical",d="button-forward",c="menu-slidebar",b="qx.ui.menu.MenuSlideBar",a="execute";qx.Class.define(b,{extend:qx.ui.container.SlideBar,construct:function(){qx.ui.container.SlideBar.call(this,e);}
,properties:{appearance:{refine:true,init:c}},members:{_createChildControlImpl:function(g,h){var i;switch(g){case d:i=new qx.ui.form.HoverButton();i.addListener(a,this._onExecuteForward,this);this._addAt(i,2);break;case f:i=new qx.ui.form.HoverButton();i.addListener(a,this._onExecuteBackward,this);this._addAt(i,0);break;};return i||qx.ui.container.SlideBar.prototype._createChildControlImpl.call(this,g);}
}});}
)();
(function(){var i="hover-button",h="interval",g="__iG",f="mouseover",d="mouseout",c="qx.ui.form.HoverButton",b="hovered",a="Integer";qx.Class.define(c,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);this.addListener(f,this._onMouseOver,this);this.addListener(d,this._onMouseOut,this);this.__iG=new qx.event.AcceleratingTimer();this.__iG.addListener(h,this._onInterval,this);}
,properties:{appearance:{refine:true,init:i},interval:{check:a,init:80},firstInterval:{check:a,init:200},minTimer:{check:a,init:20},timerDecrease:{check:a,init:2}},members:{__iG:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;this.__iG.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();this.addState(b);}
,_onMouseOut:function(e){this.__iG.stop();this.removeState(b);if(!this.isEnabled()||e.getTarget()!==this){return;}
;}
,_onInterval:function(){if(this.isEnabled()){this.execute();}
else {this.__iG.stop();}
;}
},destruct:function(){this._disposeObjects(g);}
});}
)();
(function(){var h="hovered",g="inherit",f="qx.ui.menubar.Button",d="keydown",c="menubar-button",b="keyup",a="pressed";qx.Class.define(f,{extend:qx.ui.form.MenuButton,construct:function(i,j,k){qx.ui.form.MenuButton.call(this,i,j,k);this.removeListener(d,this._onKeyDown);this.removeListener(b,this._onKeyUp);}
,properties:{appearance:{refine:true,init:c},show:{refine:true,init:g},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;}
;parent=parent.getLayoutParent();}
;return null;}
,open:function(l){qx.ui.form.MenuButton.prototype.open.call(this,l);var menubar=this.getMenuBar();menubar._setAllowMenuOpenHover(true);}
,_onMenuChange:function(e){var m=this.getMenu();var menubar=this.getMenuBar();if(m.isVisible()){this.addState(a);if(menubar){menubar.setOpenMenu(m);}
;}
else {this.removeState(a);if(menubar&&menubar.getOpenMenu()==m){menubar.resetOpenMenu();menubar._setAllowMenuOpenHover(false);}
;}
;}
,_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);var n=this.getMenu();if(n&&n.isVisible()&&!this.hasState(a)){this.addState(a);}
;}
,_onMouseOver:function(e){this.addState(h);if(this.getMenu()){var menubar=this.getMenuBar();if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();menubar._setAllowMenuOpenHover(true);if(this.isEnabled()){this.open();}
;}
;}
;}
}});}
)();
(function(){var m="Boolean",k="changeShow",j="qx.ui.core.Widget",h="_applyOverflowHandling",g="_applySpacing",f="qx.ui.toolbar.ToolBar",d="Integer",c="showItem",b="Widget must be child of the toolbar.",a="changeOpenMenu",z="icon",y="_applyOverflowIndicator",x="toolbar",w="qx.ui.menu.Menu",v="Priority already in use!",u="label",t="_applyShow",s="hideItem",r="both",q="qx.event.type.Data",o="resize",p="excluded",n="visible";qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.HBox());this.__ox=[];this.__oy=[];}
,properties:{appearance:{refine:true,init:x},openMenu:{check:w,event:a,nullable:true},show:{init:r,check:[r,u,z],inheritable:true,apply:t,event:k},spacing:{nullable:true,check:d,themeable:true,apply:g},overflowIndicator:{check:j,nullable:true,apply:y},overflowHandling:{init:false,check:m,apply:h}},events:{"hideItem":q,"showItem":q},members:{__ox:null,__oy:null,_computeSizeHint:function(){var C=qx.ui.core.Widget.prototype._computeSizeHint.call(this);if(true&&this.getOverflowHandling()){var A=0;var B=this.getOverflowIndicator();if(B){A=B.getSizeHint().width+this.getSpacing();}
;C.minWidth=A;}
;return C;}
,_onResize:function(e){this._recalculateOverflow(e.getData().width);}
,_recalculateOverflow:function(D,E){if(!this.getOverflowHandling()){return;}
;E=E||this.getSizeHint().width;var F=this.getOverflowIndicator();var L=0;if(F){L=F.getSizeHint().width;}
;if(D==undefined&&this.getBounds()!=null){D=this.getBounds().width;}
;if(D==undefined){return;}
;if(D<E){do {var M=this._getNextToHide();if(!M){return;}
;var O=M.getMarginLeft()+M.getMarginRight();O=Math.max(O,this.getSpacing());var J=M.getSizeHint().width+O;this.__oA(M);E-=J;if(F&&F.getVisibility()!=n){F.setVisibility(n);E+=L;var H=F.getMarginLeft()+F.getMarginRight();E+=Math.max(H,this.getSpacing());}
;}
while(E>D);}
else if(this.__ox.length>0){do {var P=this.__ox[0];if(P){var O=P.getMarginLeft()+P.getMarginRight();O=Math.max(O,this.getSpacing());if(P.getDecoratorElement()==null){P.syncAppearance();P.invalidateLayoutCache();}
;var I=P.getSizeHint().width;var N=false;if(this.__ox.length==1&&L>0){var G=O-this.getSpacing();var K=E-L+I+G;N=D>K;}
;if(D>E+I+O||N){this.__oz(P);E+=I;if(F&&this.__ox.length==0){F.setVisibility(p);}
;}
else {return;}
;}
;}
while(D>=E&&this.__ox.length>0);}
;}
,__oz:function(Q){Q.setVisibility(n);this.__ox.shift();this.fireDataEvent(c,Q);}
,__oA:function(R){if(!R){return;}
;this.__ox.unshift(R);R.setVisibility(p);this.fireDataEvent(s,R);}
,_getNextToHide:function(){for(var i=this.__oy.length-1;i>=0;i--){var S=this.__oy[i];if(S&&S.getVisibility&&S.getVisibility()==n){return S;}
;}
;var T=this._getChildren();for(var i=T.length-1;i>=0;i--){var U=T[i];if(U==this.getOverflowIndicator()){continue;}
;if(U.getVisibility&&U.getVisibility()==n){return U;}
;}
;}
,setRemovePriority:function(V,W,X){if(!X&&this.__oy[W]!=undefined){throw new Error(v);}
;this.__oy[W]=V;}
,_applyOverflowHandling:function(Y,ba){this.invalidateLayoutCache();var parent=this.getLayoutParent();if(parent){parent.invalidateLayoutCache();}
;var bc=this.getBounds();if(bc&&bc.width){this._recalculateOverflow(bc.width);}
;if(Y){this.addListener(o,this._onResize,this);}
else {this.removeListener(o,this._onResize,this);var bb=this.getOverflowIndicator();if(bb){bb.setVisibility(p);}
;for(var i=0;i<this.__ox.length;i++){this.__ox[i].setVisibility(n);}
;this.__ox=[];}
;}
,_applyOverflowIndicator:function(bd,be){if(be){this._remove(be);}
;if(bd){if(this._indexOf(bd)==-1){throw new Error(b);}
;bd.setVisibility(p);}
;}
,__oB:false,_setAllowMenuOpenHover:function(bf){this.__oB=bf;}
,_isAllowMenuOpenHover:function(){return this.__oB;}
,_applySpacing:function(bg,bh){var bi=this._getLayout();bg==null?bi.resetSpacing():bi.setSpacing(bg);}
,_applyShow:function(bj){var bk=this._getChildren();for(var i=0;i<bk.length;i++){if(bk[i].setShow){bk[i].setShow(bj);}
;}
;}
,_add:function(bl,bm){qx.ui.core.Widget.prototype._add.call(this,bl,bm);if(bl.setShow){bl.setShow(this.getShow());}
;var bn=this.getSizeHint().width+bl.getSizeHint().width+2*this.getSpacing();this._recalculateOverflow(null,bn);}
,_addAt:function(bo,bp,bq){qx.ui.core.Widget.prototype._addAt.call(this,bo,bp,bq);if(bo.setShow){bo.setShow(this.getShow());}
;var br=this.getSizeHint().width+bo.getSizeHint().width+2*this.getSpacing();this._recalculateOverflow(null,br);}
,_addBefore:function(bs,bt,bu){qx.ui.core.Widget.prototype._addBefore.call(this,bs,bt,bu);if(bs.setShow){bs.setShow(this.getShow());}
;var bv=this.getSizeHint().width+bs.getSizeHint().width+2*this.getSpacing();this._recalculateOverflow(null,bv);}
,_addAfter:function(bw,bx,by){qx.ui.core.Widget.prototype._addAfter.call(this,bw,bx,by);if(bw.setShow){bw.setShow(this.getShow());}
;var bz=this.getSizeHint().width+bw.getSizeHint().width+2*this.getSpacing();this._recalculateOverflow(null,bz);}
,_remove:function(bA){qx.ui.core.Widget.prototype._remove.call(this,bA);var bB=this.getSizeHint().width-bA.getSizeHint().width-2*this.getSpacing();this._recalculateOverflow(null,bB);}
,_removeAt:function(bC){var bE=this._getChildren()[bC];qx.ui.core.Widget.prototype._removeAt.call(this,bC);var bD=this.getSizeHint().width-bE.getSizeHint().width-2*this.getSpacing();this._recalculateOverflow(null,bD);}
,_removeAll:function(){qx.ui.core.Widget.prototype._removeAll.call(this);this._recalculateOverflow(null,0);}
,addSpacer:function(){var bF=new qx.ui.core.Spacer;this._add(bF,{flex:1});return bF;}
,addSeparator:function(){this.add(new qx.ui.toolbar.Separator);}
,getMenuButtons:function(){var bH=this.getChildren();var bG=[];var bI;for(var i=0,l=bH.length;i<l;i++){bI=bH[i];if(bI instanceof qx.ui.menubar.Button){bG.push(bI);}
else if(bI instanceof qx.ui.toolbar.Part){bG.push.apply(bG,bI.getMenuButtons());}
;}
;return bG;}
},destruct:function(){if(this.hasListener(o)){this.removeListener(o,this._onResize,this);}
;}
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
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});}
)();
(function(){var q="Integer",p="qx.ui.toolbar.Part",o="icon",n="label",m="syncAppearance",k="visible",j="changeShow",h="_applySpacing",g="toolbar/part",f="handle",c="both",e="container",d="left",b="right",a="middle";qx.Class.define(p,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.HBox);this._createChildControl(f);}
,properties:{appearance:{refine:true,init:g},show:{init:c,check:[c,n,o],inheritable:true,event:j},spacing:{nullable:true,check:q,themeable:true,apply:h}},members:{_createChildControlImpl:function(r,s){var t;switch(r){case f:t=new qx.ui.basic.Image();t.setAlignY(a);this._add(t);break;case e:t=new qx.ui.toolbar.PartContainer();t.addListener(m,this.__oC,this);this._add(t);break;};return t||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,r);}
,getChildrenContainer:function(){return this.getChildControl(e);}
,_applySpacing:function(u,v){var w=this.getChildControl(e).getLayout();u==null?w.resetSpacing():w.setSpacing(u);}
,__oC:function(){var x=this.getChildrenContainer().getChildren();x=x.filter(function(y){return y.getVisibility()==k;}
);for(var i=0;i<x.length;i++){if(i==0&&i!=x.length-1){x[i].addState(d);x[i].removeState(b);x[i].removeState(a);}
else if(i==x.length-1&&i!=0){x[i].addState(b);x[i].removeState(d);x[i].removeState(a);}
else if(i==0&&i==x.length-1){x[i].removeState(d);x[i].removeState(a);x[i].removeState(b);}
else {x[i].addState(a);x[i].removeState(b);x[i].removeState(d);}
;;}
;}
,addSeparator:function(){this.add(new qx.ui.toolbar.Separator);}
,getMenuButtons:function(){var A=this.getChildren();var z=[];var B;for(var i=0,l=A.length;i<l;i++){B=A[i];if(B instanceof qx.ui.menubar.Button){z.push(B);}
;}
;return z;}
}});}
)();
(function(){var f="toolbar/part/container",e="icon",d="changeShow",c="qx.ui.toolbar.PartContainer",b="label",a="both";qx.Class.define(c,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);this._setLayout(new qx.ui.layout.HBox);}
,properties:{appearance:{refine:true,init:f},show:{init:a,check:[a,b,e],inheritable:true,event:d}}});}
)();
(function(){var b="qx.ui.menu.Button",a="menu-button";qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){qx.ui.menu.AbstractButton.call(this);if(c!=null){this.setLabel(c);}
;if(d!=null){this.setIcon(d);}
;if(f!=null){this.setCommand(f);}
;if(g!=null){this.setMenu(g);}
;}
,properties:{appearance:{refine:true,init:a}},members:{_onClick:function(e){if(e.isLeftPressed()){this.execute();if(this.getMenu()){return;}
;}
else {if(this.getContextMenu()){return;}
;}
;qx.ui.menu.Manager.getInstance().hideAll();}
,_onKeyPress:function(e){this.execute();}
}});}
)();
(function(){var g="Unrecognized factory request: ",f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);this.__jI=new qx.ui.core.Blocker(this);}
,members:{__ob:null,__jI:null,factory:function(h,j){switch(h){case a:var k=new qx.ui.menu.Menu();this.setMenu(k);return k;case f:var n=new qx.ui.table.columnmenu.MenuItem(j.text);n.setVisible(j.bVisible);this.getMenu().add(n);return n;case c:var m=new qx.ui.menu.Button(j.text);m.set({appearance:e});return m;case d:return new qx.ui.menu.Separator();default:throw new Error(g+h);};}
,getBlocker:function(){return this.__jI;}
,empty:function(){var o=this.getMenu();var p=o.getChildren();for(var i=0,l=p.length;i<l;i++){p[0].destroy();}
;}
},destruct:function(){this.__jI.dispose();}
});}
)();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});}
)();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;}
,resetValue:function(){}
,getValue:function(){}
}});}
)();
(function(){var m="menu-checkbox",l="Boolean",k="label",j="_applyValue",i="value",h="changeValue",g="toolTipText",f="enabled",d="qx.ui.menu.CheckBox",c="menu",a="execute",b="checked";qx.Class.define(d,{extend:qx.ui.menu.AbstractButton,implement:[qx.ui.form.IBooleanForm],construct:function(n,o){qx.ui.menu.AbstractButton.call(this);if(n!=null){if(n.translate){this.setLabel(n.translate());}
else {this.setLabel(n);}
;}
;if(o!=null){this.setMenu(o);}
;this.addListener(a,this._onExecute,this);}
,properties:{appearance:{refine:true,init:m},value:{check:l,init:false,apply:j,event:h,nullable:true}},members:{_bindableProperties:[f,k,g,i,c],_applyValue:function(p,q){p?this.addState(b):this.removeState(b);}
,_onExecute:function(e){this.toggleValue();}
,_onClick:function(e){if(e.isLeftPressed()){this.execute();}
else {if(this.getContextMenu()){return;}
;}
;qx.ui.menu.Manager.getInstance().hideAll();}
,_onKeyPress:function(e){this.execute();}
}});}
)();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);this.addListener(a,function(e){this.bInListener=true;this.setVisible(e.getData());this.bInListener=false;}
);}
,members:{__oD:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);}
;}
}});}
)();
(function(){var a="qx.ui.table.ICellEditorFactory";qx.Interface.define(a,{members:{createCellEditor:function(b){return true;}
,getCellEditorValue:function(c){return true;}
}});}
)();
(function(){var g="Function",f="abstract",e="number",d="appear",c="Abstract method call!",b="qx.ui.table.celleditor.AbstractField",a="";qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,type:f,properties:{validationFunction:{check:g,nullable:true,init:null}},members:{_createEditor:function(){throw new Error(c);}
,createCellEditor:function(h){var i=this._createEditor();i.originalValue=h.value;if(h.value===null||h.value===undefined){h.value=a;}
;i.setValue(a+h.value);i.addListener(d,function(){i.selectAllText();}
);return i;}
,getCellEditorValue:function(j){var l=j.getValue();var k=this.getValidationFunction();if(k){l=k(l,j.originalValue);}
;if(typeof j.originalValue==e){l=parseFloat(l);}
;return l;}
}});}
)();
(function(){var c="number",b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{getCellEditorValue:function(d){var f=d.getValue();var e=this.getValidationFunction();if(e){f=e(f,d.originalValue);}
;if(typeof d.originalValue==c){if(f!=null){f=parseFloat(f);}
;}
;return f;}
,_createEditor:function(){var g=new qx.ui.form.TextField();g.setAppearance(a);return g;}
}});}
)();
(function(){var l="",k="qx.ui.form.MForm",j="_applyValid",i="changeRequired",h="changeValid",g="Boolean",f="changeLocale",d="changeInvalidMessage",c="String",b="invalid",a="qx.dynlocale";qx.Mixin.define(k,{construct:function(){if(qx.core.Environment.get(a)){qx.locale.Manager.getInstance().addListener(f,this.__kR,this);}
;}
,properties:{valid:{check:g,init:true,apply:j,event:h},required:{check:g,init:false,event:i},invalidMessage:{check:c,init:l,event:d},requiredInvalidMessage:{check:c,nullable:true,event:d}},members:{_applyValid:function(m,n){m?this.removeState(b):this.addState(b);}
,__kR:qx.core.Environment.select(a,{"true":function(e){var o=this.getInvalidMessage();if(o&&o.translate){this.setInvalidMessage(o.translate());}
;var p=this.getRequiredInvalidMessage();if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());}
;}
,"false":null})},destruct:function(){if(qx.core.Environment.get(a)){qx.locale.Manager.getInstance().removeListener(f,this.__kR,this);}
;}
});}
)();
(function(){var k="readOnly",j="text",i="_applyTextAlign",h="text-placeholder",g="px",f="RegExp",d=")",c="syncAppearance",b="changeValue",a="engine.version",bf="change",be="changeStatus",bd="textAlign",bc="focused",bb="center",ba="visible",Y="disabled",X="url(",W="String",V="resize",r="qx.ui.form.AbstractField",s="transparent",p="spellcheck",q="false",n="right",o="PositiveInteger",l="gecko",m="abstract",v="block",w="css.placeholder",E="_applyReadOnly",C="_applyPlaceholder",L="left",G="off",R="mshtml",P="qx/static/blank.gif",y="Invalid value type: ",U="changeReadOnly",T="Boolean",S="A",x="qx.event.type.Data",A="readonly",B="placeholder",D="input",F="focusin",H="visibility",M="engine.name",Q="focusout",t="changeLocale",u="hidden",z="absolute",K="qx.dynlocale",J="color",I="none",O="showingPlaceholder",N="";qx.Class.define(r,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:m,construct:function(bg){qx.ui.core.Widget.call(this);this.__mB=!qx.core.Environment.get(w)||(qx.core.Environment.get(M)==l&&parseFloat(qx.core.Environment.get(a))>=2);if(bg!=null){this.setValue(bg);}
;this.getContentElement().addListener(bf,this._onChangeContent,this);if(this.__mB){this.addListener(c,this._syncPlaceholder,this);}
;if(qx.core.Environment.get(K)){qx.locale.Manager.getInstance().addListener(t,this._onChangeLocale,this);}
;}
,events:{"input":x,"changeValue":x},properties:{textAlign:{check:[L,bb,n],nullable:true,themeable:true,apply:i},readOnly:{check:T,apply:E,event:U,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:o,init:Infinity},liveUpdate:{check:T,init:false},placeholder:{check:W,nullable:true,apply:C},filter:{check:f,nullable:true,init:null}},members:{__mC:true,__mD:null,__fN:null,__fO:null,__mB:true,__lw:null,__lA:null,getFocusElement:function(){var bh=this.getContentElement();if(bh){return bh;}
;}
,_createInputElement:function(){return new qx.html.Input(j);}
,renderLayout:function(bi,top,bj,bk){var bl=this._updateInsets;var bp=qx.ui.core.Widget.prototype.renderLayout.call(this,bi,top,bj,bk);if(!bp){return;}
;var bn=bp.size||bl;var bq=g;if(bn||bp.local||bp.margin){var bm=this.getInsets();var innerWidth=bj-bm.left-bm.right;var innerHeight=bk-bm.top-bm.bottom;innerWidth=innerWidth<0?0:innerWidth;innerHeight=innerHeight<0?0:innerHeight;}
;var bo=this.getContentElement();if(bl&&this.__mB){this.__mG().setStyles({"left":bm.left+bq,"top":bm.top+bq});}
;if(bn){if(this.__mB){this.__mG().setStyles({"width":innerWidth+bq,"height":innerHeight+bq});}
;bo.setStyles({"width":innerWidth+bq,"height":innerHeight+bq});this._renderContentElement(innerHeight,bo);}
;}
,_renderContentElement:function(innerHeight,br){}
,_createContentElement:function(){var bs=this._createInputElement();bs.setStyles({"border":I,"padding":0,"margin":0,"display":v,"background":s,"outline":I,"appearance":I,"position":z,"autoComplete":G});bs.setSelectable(this.getSelectable());bs.setEnabled(this.getEnabled());bs.addListener(D,this._onHtmlInput,this);bs.setAttribute(p,q);bs.setStyle(V,I);if((qx.core.Environment.get(M)==R)){bs.setStyles({backgroundImage:X+qx.util.ResourceManager.getInstance().toUri(P)+d});}
;return bs;}
,_applyEnabled:function(bt,bu){qx.ui.core.Widget.prototype._applyEnabled.call(this,bt,bu);this.getContentElement().setEnabled(bt);if(this.__mB){if(bt){this._showPlaceholder();}
else {this._removePlaceholder();}
;}
else {var bv=this.getContentElement();bv.setAttribute(B,bt?this.getPlaceholder():N);}
;}
,__mE:{width:16,height:16},_getContentHint:function(){return {width:this.__mE.width*10,height:this.__mE.height||16};}
,_applyFont:function(bw,bx){if(bx&&this.__lw&&this.__lA){this.__lw.removeListenerById(this.__lA);this.__lA=null;}
;var by;if(bw){this.__lw=qx.theme.manager.Font.getInstance().resolve(bw);if(this.__lw instanceof qx.bom.webfonts.WebFont){this.__lA=this.__lw.addListener(be,this._onWebFontStatusChange,this);}
;by=this.__lw.getStyles();}
else {by=qx.bom.Font.getDefaultStyles();}
;if(this.getTextColor()!=null){delete by[J];}
;this.getContentElement().setStyles(by);if(this.__mB){delete by[J];this.__mG().setStyles(by);}
;if(bw){this.__mE=qx.bom.Label.getTextSize(S,by);}
else {delete this.__mE;}
;qx.ui.core.queue.Layout.add(this);}
,_applyTextColor:function(bz,bA){if(bz){this.getContentElement().setStyle(J,qx.theme.manager.Color.getInstance().resolve(bz));}
else {this.getContentElement().removeStyle(J);}
;}
,tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);this.selectAllText();}
,_getTextSize:function(){return this.__mE;}
,_onHtmlInput:function(e){var bE=e.getData();var bD=true;this.__mC=false;if(this.__fO&&this.__fO===bE){bD=false;}
;if(this.getFilter()!=null){var bF=N;var bB=bE.search(this.getFilter());var bC=bE;while(bB>=0){bF=bF+(bC.charAt(bB));bC=bC.substring(bB+1,bC.length);bB=bC.search(this.getFilter());}
;if(bF!=bE){bD=false;bE=bF;this.getContentElement().setValue(bE);}
;}
;if(bE.length>this.getMaxLength()){bD=false;this.getContentElement().setValue(bE.substr(0,this.getMaxLength()));}
;if(bD){this.fireDataEvent(D,bE,this.__fO);this.__fO=bE;if(this.getLiveUpdate()){this.__mF(bE);}
;}
;}
,_onWebFontStatusChange:function(bG){if(bG.getData().valid===true){var bH=this.__lw.getStyles();this.__mE=qx.bom.Label.getTextSize(S,bH);qx.ui.core.queue.Layout.add(this);}
;}
,__mF:function(bI){var bJ=this.__fN;this.__fN=bI;if(bJ!=bI){this.fireNonBubblingEvent(b,qx.event.type.Data,[bI,bJ]);}
;}
,setValue:function(bK){if(bK===null){if(this.__mC){return bK;}
;bK=N;this.__mC=true;}
else {this.__mC=false;if(this.__mB){this._removePlaceholder();}
;}
;if(qx.lang.Type.isString(bK)){var bM=this.getContentElement();if(bK.length>this.getMaxLength()){bK=bK.substr(0,this.getMaxLength());}
;if(bM.getValue()!=bK){var bN=bM.getValue();bM.setValue(bK);var bL=this.__mC?null:bK;this.__fN=bN;this.__mF(bL);}
;if(this.__mB){this._showPlaceholder();}
;return bK;}
;throw new Error(y+bK);}
,getValue:function(){var bO=this.getContentElement().getValue();return this.__mC?null:bO;}
,resetValue:function(){this.setValue(null);}
,_onChangeContent:function(e){this.__mC=e.getData()===null;this.__mF(e.getData());}
,getTextSelection:function(){return this.getContentElement().getTextSelection();}
,getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();}
,getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();}
,getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();}
,setTextSelection:function(bP,bQ){this.getContentElement().setTextSelection(bP,bQ);}
,clearTextSelection:function(){this.getContentElement().clearTextSelection();}
,selectAllText:function(){this.setTextSelection(0);}
,_showPlaceholder:function(){var bS=this.getValue()||N;var bR=this.getPlaceholder();if(bR!=null&&bS==N&&!this.hasState(bc)&&!this.hasState(Y)){if(this.hasState(O)){this._syncPlaceholder();}
else {this.addState(O);}
;}
;}
,_removePlaceholder:function(){if(this.hasState(O)){this.__mG().setStyle(H,u);this.removeState(O);}
;}
,_syncPlaceholder:function(){if(this.hasState(O)){this.__mG().setStyle(H,ba);}
;}
,__mG:function(){if(this.__mD==null){this.__mD=new qx.html.Label();var bT=qx.theme.manager.Color.getInstance();this.__mD.setStyles({"visibility":u,"zIndex":6,"position":z,"color":bT.resolve(h)});this.getContainerElement().add(this.__mD);}
;return this.__mD;}
,_onChangeLocale:qx.core.Environment.select(K,{"true":function(e){var content=this.getPlaceholder();if(content&&content.translate){this.setPlaceholder(content.translate());}
;}
,"false":null}),_applyPlaceholder:function(bU,bV){if(this.__mB){this.__mG().setValue(bU);if(bU!=null){this.addListener(F,this._removePlaceholder,this);this.addListener(Q,this._showPlaceholder,this);this._showPlaceholder();}
else {this.removeListener(F,this._removePlaceholder,this);this.removeListener(Q,this._showPlaceholder,this);this._removePlaceholder();}
;}
else {if(this.getEnabled()){this.getContentElement().setAttribute(B,bU);}
;}
;}
,_applyTextAlign:function(bW,bX){this.getContentElement().setStyle(bd,bW);}
,_applyReadOnly:function(bY,ca){var cb=this.getContentElement();cb.setAttribute(k,bY);if(bY){this.addState(A);this.setFocusable(false);}
else {this.removeState(A);this.setFocusable(true);}
;}
},destruct:function(){this.__mD=this.__lw=null;if(qx.core.Environment.get(K)){qx.locale.Manager.getInstance().removeListener(t,this._onChangeLocale,this);}
;if(this.__lw&&this.__lA){this.__lw.removeListenerById(this.__lA);}
;}
});}
)();
(function(){var o="",n="overflow",m="input",l="qx.html.Input",k="select",j="disabled",i="read-only",h="overflowX",g="overflowY",f="engine.name",c="none",e="Text wrapping is only support by textareas!",d="wrap",b="value",a="textarea";qx.Class.define(l,{extend:qx.html.Element,construct:function(p,q,r){if(p===k||p===a){var s=p;}
else {s=m;}
;qx.html.Element.call(this,s,q,r);this.__mH=p;}
,members:{__mH:null,__mI:null,__mJ:null,_createDomElement:function(){return qx.bom.Input.create(this.__mH);}
,_applyProperty:function(name,t){qx.html.Element.prototype._applyProperty.call(this,name,t);var u=this.getDomElement();if(name===b){qx.bom.Input.setValue(u,t);}
else if(name===d){qx.bom.Input.setWrap(u,t);this.setStyle(n,u.style.overflow,true);this.setStyle(h,u.style.overflowX,true);this.setStyle(g,u.style.overflowY,true);}
;}
,setEnabled:qx.core.Environment.select(f,{"webkit":function(v){this.__mJ=v;if(!v){this.setStyles({"userModify":i,"userSelect":c});}
else {this.setStyles({"userModify":null,"userSelect":this.__mI?null:c});}
;}
,"default":function(w){this.setAttribute(j,w===false);}
}),setSelectable:qx.core.Environment.select(f,{"webkit":function(x){this.__mI=x;qx.html.Element.prototype.setSelectable.call(this,this.__mJ&&x);}
,"default":function(y){qx.html.Element.prototype.setSelectable.call(this,y);}
}),setValue:function(z){var A=this.getDomElement();if(A){if(A.value!=z){qx.bom.Input.setValue(A,z);}
;}
else {this._setProperty(b,z);}
;return this;}
,getValue:function(){var B=this.getDomElement();if(B){return qx.bom.Input.getValue(B);}
;return this._getProperty(b)||o;}
,setWrap:function(C,D){if(this.__mH===a){this._setProperty(d,C,D);}
else {throw new Error(e);}
;return this;}
,getWrap:function(){if(this.__mH===a){return this._getProperty(d);}
else {throw new Error(e);}
;}
}});}
)();
(function(){var k="text",j="Unsupported input type.",h="nowrap",g="radio",f="qx.debug",e="input",d="option",c="value",b="number",a="qx.bom.Input",x="normal",w="mshtml",v="wrap",u="checkbox",t="select-one",s="textarea",r="auto",q="soft",p="off",o="engine.name",m="select",n="";qx.Bootstrap.define(a,{statics:{__fU:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(y,z,A){if(qx.core.Environment.get(f)){qx.core.Assert.assertKeyInMap(y,this.__fU,j);}
;var z=z?qx.lang.Object.clone(z):{};var B;if(y===s||y===m){B=y;}
else {B=e;z.type=y;}
;return qx.dom.Element.create(B,z,A);}
,setValue:function(C,D){var I=C.nodeName.toLowerCase();var F=C.type;var Array=qx.lang.Array;var J=qx.lang.Type;if(typeof D===b){D+=n;}
;if((F===u||F===g)){if(J.isArray(D)){C.checked=Array.contains(D,C.value);}
else {C.checked=C.value==D;}
;}
else if(I===m){var E=J.isArray(D);var K=C.options;var G,H;for(var i=0,l=K.length;i<l;i++){G=K[i];H=G.getAttribute(c);if(H==null){H=G.text;}
;G.selected=E?Array.contains(D,H):D==H;}
;if(E&&D.length==0){C.selectedIndex=-1;}
;}
else if((F===k||F===s)&&(qx.core.Environment.get(o)==w)){C.$$inValueSet=true;C.value=D;C.$$inValueSet=null;}
else {C.value=D;}
;;}
,getValue:function(L){var R=L.nodeName.toLowerCase();if(R===d){return (L.attributes.value||{}).specified?L.value:L.text;}
;if(R===m){var M=L.selectedIndex;if(M<0){return null;}
;var S=[];var U=L.options;var T=L.type==t;var Q=qx.bom.Input;var P;for(var i=T?M:0,O=T?M+1:U.length;i<O;i++){var N=U[i];if(N.selected){P=Q.getValue(N);if(T){return P;}
;S.push(P);}
;}
;return S;}
else {return (L.value||n).replace(/\r/g,n);}
;}
,setWrap:qx.core.Environment.select(o,{"mshtml":function(V,W){var Y=W?q:p;var X=W?r:n;V.wrap=Y;V.style.overflowY=X;}
,"gecko|webkit":function(ba,bb){var bd=bb?q:p;var bc=bb?n:r;ba.setAttribute(v,bd);ba.style.overflow=bc;}
,"default":function(be,bf){be.style.whiteSpace=bf?x:h;}
})}});}
)();
(function(){var g="mshtml",f="engine.name",e="qx.ui.form.TextField",d='px',c="textfield",b="engine.version",a="browser.documentmode";qx.Class.define(e,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:c},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,h){if((qx.core.Environment.get(f)==g)&&(parseInt(qx.core.Environment.get(b),10)<9||qx.core.Environment.get(a)<9)){h.setStyles({"line-height":innerHeight+d});}
;}
}});}
)();
(function(){var k="Invalid argument 'colCount'.",j="Invalid argument 'visible'.",h="Invalid argument 'factory'.",g="Invalid argument 'newPositions'.",f="Invalid argument 'width'.",e="__nI",d="Invalid argument 'visXPos'.",c="Invalid argument 'toOverXPos'.",b="qx.ui.table.columnmodel.Basic",a="headerCellRendererChanged",C=". The column is not added to this TablePaneModel.",B="setColumnsOrder: Invalid number of column positions given, expected ",A="widthChanged",z="Invalid argument 'overXPos'.",y="__nJ",w=", got ",v="Invalid argument 'fromOverXPos'.",u="Showing column failed: ",t="__nH",s="orderChanged",q="Invalid argument 'renderer'.",r="visibilityChanged",o="visibilityChangedPre",p="qx.event.type.Data",m="Column not found in table model",n="Invalid argument 'col'.",l="qx.debug";qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__nD=[];this.__nE=[];}
,events:{"widthChanged":p,"visibilityChangedPre":p,"visibilityChanged":p,"orderChanged":p,"headerCellRendererChanged":p},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__mV:null,__nF:null,__nE:null,__nD:null,__nG:null,__nH:null,__nI:null,__nJ:null,init:function(D,E){if(qx.core.Environment.get(l)){this.assertInteger(D,k);}
;this.__nG=[];var I=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;var J=this.__nH||(this.__nH=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());var G=this.__nI||(this.__nI=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());var F=this.__nJ||(this.__nJ=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());this.__nD=[];this.__nE=[];var L;if(E){L=E.getInitiallyHiddenColumns();}
;L=L||[];for(var M=0;M<D;M++){this.__nG[M]={width:I,headerRenderer:J,dataRenderer:G,editorFactory:F};this.__nD[M]=M;this.__nE[M]=M;}
;this.__nF=null;this.__mV=true;for(var K=0;K<L.length;K++){this.setColumnVisible(L[K],false);}
;this.__mV=false;for(M=0;M<D;M++){var H={col:M,visible:this.isColumnVisible(M)};this.fireDataEvent(o,H);this.fireDataEvent(r,H);}
;}
,getVisibleColumns:function(){return this.__nE!=null?this.__nE:[];}
,setColumnWidth:function(N,O,P){if(qx.core.Environment.get(l)){this.assertInteger(N,n);this.assertInteger(O,f);this.assertNotUndefined(this.__nG[N],m);}
;var R=this.__nG[N].width;if(R!=O){this.__nG[N].width=O;var Q={col:N,newWidth:O,oldWidth:R,isMouseAction:P||false};this.fireDataEvent(A,Q);}
;}
,getColumnWidth:function(S){if(qx.core.Environment.get(l)){this.assertInteger(S,n);this.assertNotUndefined(this.__nG[S],m);}
;return this.__nG[S].width;}
,setHeaderCellRenderer:function(T,U){if(qx.core.Environment.get(l)){this.assertInteger(T,n);this.assertInterface(U,qx.ui.table.IHeaderRenderer,q);this.assertNotUndefined(this.__nG[T],m);}
;var V=this.__nG[T].headerRenderer;if(V!==this.__nH){V.dispose();}
;this.__nG[T].headerRenderer=U;this.fireDataEvent(a,{col:T});}
,getHeaderCellRenderer:function(W){if(qx.core.Environment.get(l)){this.assertInteger(W,n);this.assertNotUndefined(this.__nG[W],m);}
;return this.__nG[W].headerRenderer;}
,setDataCellRenderer:function(X,Y){if(qx.core.Environment.get(l)){this.assertInteger(X,n);this.assertInterface(Y,qx.ui.table.ICellRenderer,q);this.assertNotUndefined(this.__nG[X],m);}
;this.__nG[X].dataRenderer=Y;var ba=this.__nG[X].dataRenderer;if(ba!==this.__nI){return ba;}
;return null;}
,getDataCellRenderer:function(bb){if(qx.core.Environment.get(l)){this.assertInteger(bb,n);this.assertNotUndefined(this.__nG[bb],m);}
;return this.__nG[bb].dataRenderer;}
,setCellEditorFactory:function(bc,bd){if(qx.core.Environment.get(l)){this.assertInteger(bc,n);this.assertInterface(bd,qx.ui.table.ICellEditorFactory,h);this.assertNotUndefined(this.__nG[bc],m);}
;var be=this.__nG[bc].editorFactory;if(be!==this.__nJ){be.dispose();}
;this.__nG[bc].editorFactory=bd;}
,getCellEditorFactory:function(bf){if(qx.core.Environment.get(l)){this.assertInteger(bf,n);this.assertNotUndefined(this.__nG[bf],m);}
;return this.__nG[bf].editorFactory;}
,_getColToXPosMap:function(){if(this.__nF==null){this.__nF={};for(var bi=0;bi<this.__nD.length;bi++){var bh=this.__nD[bi];this.__nF[bh]={overX:bi};}
;for(var bg=0;bg<this.__nE.length;bg++){var bh=this.__nE[bg];this.__nF[bh].visX=bg;}
;}
;return this.__nF;}
,getVisibleColumnCount:function(){return this.__nE!=null?this.__nE.length:0;}
,getVisibleColumnAtX:function(bj){if(qx.core.Environment.get(l)){this.assertInteger(bj,d);}
;return this.__nE[bj];}
,getVisibleX:function(bk){if(qx.core.Environment.get(l)){this.assertInteger(bk,n);}
;return this._getColToXPosMap()[bk].visX;}
,getOverallColumnCount:function(){return this.__nD.length;}
,getOverallColumnAtX:function(bl){if(qx.core.Environment.get(l)){this.assertInteger(bl,z);}
;return this.__nD[bl];}
,getOverallX:function(bm){if(qx.core.Environment.get(l)){this.assertInteger(bm,n);}
;return this._getColToXPosMap()[bm].overX;}
,isColumnVisible:function(bn){if(qx.core.Environment.get(l)){this.assertInteger(bn,n);}
;return (this._getColToXPosMap()[bn].visX!=null);}
,setColumnVisible:function(bo,bp){if(qx.core.Environment.get(l)){this.assertInteger(bo,n);this.assertBoolean(bp,j);}
;if(bp!=this.isColumnVisible(bo)){if(bp){var bv=this._getColToXPosMap();var bs=bv[bo].overX;if(bs==null){throw new Error(u+bo+C);}
;var bt;for(var x=bs+1;x<this.__nD.length;x++){var bu=this.__nD[x];var bq=bv[bu].visX;if(bq!=null){bt=bq;break;}
;}
;if(bt==null){bt=this.__nE.length;}
;this.__nE.splice(bt,0,bo);}
else {var br=this.getVisibleX(bo);this.__nE.splice(br,1);}
;this.__nF=null;if(!this.__mV){var bw={col:bo,visible:bp};this.fireDataEvent(o,bw);this.fireDataEvent(r,bw);}
;}
;}
,moveColumn:function(bx,by){if(qx.core.Environment.get(l)){this.assertInteger(bx,v);this.assertInteger(by,c);}
;this.__mV=true;var bB=this.__nD[bx];var bz=this.isColumnVisible(bB);if(bz){this.setColumnVisible(bB,false);}
;this.__nD.splice(bx,1);this.__nD.splice(by,0,bB);this.__nF=null;if(bz){this.setColumnVisible(bB,true);}
;this.__mV=false;var bA={col:bB,fromOverXPos:bx,toOverXPos:by};this.fireDataEvent(s,bA);}
,setColumnsOrder:function(bC){if(qx.core.Environment.get(l)){this.assertArray(bC,g);}
;if(bC.length==this.__nD.length){this.__mV=true;var bF=new Array(bC.length);for(var bD=0;bD<this.__nD.length;bD++){var bE=this.isColumnVisible(bD);bF[bD]=bE;if(bE){this.setColumnVisible(bD,false);}
;}
;this.__nD=qx.lang.Array.clone(bC);this.__nF=null;for(var bD=0;bD<this.__nD.length;bD++){if(bF[bD]){this.setColumnVisible(bD,true);}
;}
;this.__mV=false;this.fireDataEvent(s);}
else {throw new Error(B+this.__nD.length+w+bC.length);}
;}
},destruct:function(){for(var i=0;i<this.__nG.length;i++){this.__nG[i].headerRenderer.dispose();this.__nG[i].dataRenderer.dispose();this.__nG[i].editorFactory.dispose();}
;this.__nD=this.__nE=this.__nG=this.__nF=null;this._disposeObjects(t,e,y);}
});}
)();
(function(){var k="touchmove",j="qx.ui.core.scroll.MTouchScroll",i="touchend",h="touchstart",g="Top",f="Left",d="y",c="getDocument",b="x",a="scrollbar-";qx.Mixin.define(j,{construct:function(){this.addListener(k,this._onTouchMove,this);this.addListener(h,this._onTouchStart,this);this.addListener(i,this._onTouchEnd,this,true);this.__cS={};this.__mc={};}
,members:{__oT:false,__oU:false,__mc:null,__cS:null,inTouchMomentum:function(){return this.__oT;}
,_onTouchStart:function(e){if(this.__mc){clearTimeout(this.__mc.x);clearTimeout(this.__mc.y);}
;this.__cS={"x":0,"y":0};if(this.__oT){this.__oU=true;this.__oT=false;}
;}
,_onTouchEnd:function(e){if(this.__oU){this.__oU=false;e.stop();}
;}
,_onTouchMove:function(e){this._onTouchMoveDirectional(b,e);this._onTouchMoveDirectional(d,e);this.__oT=true;e.stop();}
,_onTouchMoveDirectional:function(l,e){var m=(l==b?f:g);var o=this.getChildControl(a+l,true);var p=this._isChildControlVisible(a+l);if(p&&o){var n=null;if(this.__cS[l]==0){n=0;}
else {n=-(e[c+m]()-this.__cS[l]);}
;this.__cS[l]=e[c+m]();o.scrollBy(n);if(this.__mc[l]){clearTimeout(this.__mc[l]);this.__mc[l]=null;}
;this.__mc[l]=setTimeout(qx.lang.Function.bind(function(q){this.__md(q,l);}
,this,n),100);}
;}
,__md:function(r,s){this.__mc[s]=null;var u=this._isChildControlVisible(a+s);if(r==0||!u){this.__oT=false;return;}
;if(r>0){r=Math.max(0,r-3);}
else {r=Math.min(0,r+3);}
;this.__mc[s]=setTimeout(qx.lang.Function.bind(function(v,w){this.__md(v,w);}
,this,r,s),10);var t=this.getChildControl(a+s,true);t.scrollBy(r);}
},destruct:function(){clearTimeout(this.__mc.x);clearTimeout(this.__mc.y);this.__mc=this.__cS=this.__oT=null;}
});}
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
(function(){var k="mousedown",j="qx.ui.core.scroll.NativeScrollBar",i="PositiveNumber",h="Integer",g="mousemove",f="__mb",d="_applyMaximum",c="_applyOrientation",b="appear",a="PositiveInteger",y="mshtml",x="engine.name",w="mouseup",v="Number",u="_applyPosition",t="scrollbar",s="native",r="-1px",q="0",p="hidden",n="vertical",o="px",l="scroll",m="horizontal";qx.Class.define(j,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(z){qx.ui.core.Widget.call(this);this.addState(s);this.getContentElement().addListener(l,this._onScroll,this);this.addListener(k,this._stopPropagation,this);this.addListener(w,this._stopPropagation,this);this.addListener(g,this._stopPropagation,this);this.addListener(b,this._onAppear,this);this.getContentElement().add(this._getScrollPaneElement());if(z!=null){this.setOrientation(z);}
else {this.initOrientation();}
;}
,properties:{appearance:{refine:true,init:t},orientation:{check:[m,n],init:m,apply:c},maximum:{check:a,apply:d,init:100},position:{check:v,init:0,apply:u,event:l},singleStep:{check:h,init:20},knobFactor:{check:i,nullable:true}},members:{__ma:null,__mb:null,_getScrollPaneElement:function(){if(!this.__mb){this.__mb=new qx.html.Element();}
;return this.__mb;}
,renderLayout:function(A,top,B,C){var D=qx.ui.core.Widget.prototype.renderLayout.call(this,A,top,B,C);this._updateScrollBar();return D;}
,_getContentHint:function(){var E=qx.bom.element.Overflow.getScrollbarWidth();return {width:this.__ma?100:E,maxWidth:this.__ma?null:E,minWidth:this.__ma?null:E,height:this.__ma?E:100,maxHeight:this.__ma?E:null,minHeight:this.__ma?E:null};}
,_applyEnabled:function(F,G){qx.ui.core.Widget.prototype._applyEnabled.call(this,F,G);this._updateScrollBar();}
,_applyMaximum:function(H){this._updateScrollBar();}
,_applyPosition:function(I){var content=this.getContentElement();if(this.__ma){content.scrollToX(I);}
else {content.scrollToY(I);}
;}
,_applyOrientation:function(J,K){var L=this.__ma=J===m;this.set({allowGrowX:L,allowShrinkX:L,allowGrowY:!L,allowShrinkY:!L});if(L){this.replaceState(n,m);}
else {this.replaceState(m,n);}
;this.getContentElement().setStyles({overflowX:L?l:p,overflowY:L?p:l});qx.ui.core.queue.Layout.add(this);}
,_updateScrollBar:function(){var N=this.__ma;var O=this.getBounds();if(!O){return;}
;if(this.isEnabled()){var P=N?O.width:O.height;var M=this.getMaximum()+P;}
else {M=0;}
;if((qx.core.Environment.get(x)==y)){var O=this.getBounds();this.getContentElement().setStyles({left:N?q:r,top:N?r:q,width:(N?O.width:O.width+1)+o,height:(N?O.height+1:O.height)+o});}
;this._getScrollPaneElement().setStyles({left:0,top:0,width:(N?M:1)+o,height:(N?1:M)+o});this.scrollTo(this.getPosition());}
,scrollTo:function(Q){this.setPosition(Math.max(0,Math.min(this.getMaximum(),Q)));}
,scrollBy:function(R){this.scrollTo(this.getPosition()+R);}
,scrollBySteps:function(S){var T=this.getSingleStep();this.scrollBy(S*T);}
,_onScroll:function(e){var V=this.getContentElement();var U=this.__ma?V.getScrollX():V.getScrollY();this.setPosition(U);}
,_onAppear:function(e){this._applyPosition(this.getPosition());}
,_stopPropagation:function(e){e.stopPropagation();}
},destruct:function(){this._disposeObjects(f);}
});}
)();
(function(){var k="PositiveNumber",j="changeValue",i="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",h="_applyKnobFactor",g="knob",f="_applyMaximum",d="qx.ui.core.scroll.ScrollBar",c="resize",b="_applyOrientation",a="_applyPageStep",B="PositiveInteger",A="_applyPosition",z="scrollbar",y="scroll",x="Integer",w="execute",v="visible",u="right",t="up",s="hidden",q="left",r="down",o="vertical",p="button-begin",m="button-end",n="horizontal",l="slider";qx.Class.define(d,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(C){qx.ui.core.Widget.call(this);this._createChildControl(p);this._createChildControl(l).addListener(c,this._onResizeSlider,this);this._createChildControl(m);if(C!=null){this.setOrientation(C);}
else {this.initOrientation();}
;}
,properties:{appearance:{refine:true,init:z},orientation:{check:[n,o],init:n,apply:b},maximum:{check:B,apply:f,init:100},position:{check:i,init:0,apply:A,event:y},singleStep:{check:x,init:20},pageStep:{check:x,init:10,apply:a},knobFactor:{check:k,apply:h,nullable:true}},members:{__AN:2,__AO:0,_computeSizeHint:function(){var D=qx.ui.core.Widget.prototype._computeSizeHint.call(this);if(this.getOrientation()===n){this.__AO=D.minWidth;D.minWidth=0;}
else {this.__AO=D.minHeight;D.minHeight=0;}
;return D;}
,renderLayout:function(E,top,F,G){var I=qx.ui.core.Widget.prototype.renderLayout.call(this,E,top,F,G);var H=this.getOrientation()===n;if(this.__AO>=(H?F:G)){this.getChildControl(p).setVisibility(s);this.getChildControl(m).setVisibility(s);}
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
,_onResizeSlider:function(e){var X=this.getChildControl(l).getChildControl(g);var bb=X.getSizeHint();var Y=false;var ba=this.getChildControl(l).getInnerSize();if(this.getOrientation()==o){if(ba.height<bb.minHeight+this.__AN){Y=true;}
;}
else {if(ba.width<bb.minWidth+this.__AN){Y=true;}
;}
;if(Y){X.exclude();}
else {X.show();}
;}
}});}
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
,events:{changeValue:f},properties:{appearance:{refine:true,init:k},focusable:{refine:true,init:true},orientation:{check:[J,H],init:J,apply:r},value:{check:l,init:0,apply:U,nullable:true},minimum:{check:F,init:0,apply:n,event:K},maximum:{check:F,init:100,apply:A,event:E},singleStep:{check:F,init:1},pageStep:{check:F,init:10},knobFactor:{check:G,apply:T,nullable:true}},members:{__AP:null,__AQ:null,__AR:null,__AS:null,__AT:null,__AU:null,__AV:null,__AW:null,__iG:null,__AX:null,__AY:null,__Ba:null,_forwardStates:{invalid:true},_createChildControlImpl:function(ba,bb){var bc;switch(ba){case t:bc=new qx.ui.core.Widget();bc.addListener(w,this._onUpdate,this);bc.addListener(p,this._onMouseOver);bc.addListener(h,this._onMouseOut);this._add(bc);break;};return bc||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,ba);}
,_onMouseOver:function(e){this.addState(y);}
,_onMouseOut:function(e){this.removeState(y);}
,_onMouseWheel:function(e){var bf=this.getOrientation()===J?g:Q;var be=e.getWheelDelta(bf);var bd=be>0?1:be<0?-1:0;this.slideBy(bd*this.getSingleStep());e.stop();}
,_onKeyPress:function(e){var bh=this.getOrientation()===J;var bg=bh?d:b;var forward=bh?P:c;switch(e.getKeyIdentifier()){case forward:this.slideForward();break;case bg:this.slideBack();break;case W:this.slidePageForward();break;case i:this.slidePageBack();break;case s:this.slideToBegin();break;case S:this.slideToEnd();break;default:return;};e.stop();}
,_onMouseDown:function(e){if(this.__AS){return;}
;var bk=this.__ma;var bi=this.getChildControl(t);var bj=bk?z:B;var bm=bk?e.getDocumentLeft():e.getDocumentTop();var bn=this.__AP=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bj];var bl=this.__AQ=qx.bom.element.Location.get(bi.getContainerElement().getDomElement())[bj];if(e.getTarget()===bi){this.__AS=true;if(!this.__AX){this.__AX=new qx.event.Timer(100);this.__AX.addListener(M,this._fireValue,this);}
;this.__AX.start();this.__AT=bm+bn-bl;bi.addState(I);}
else {this.__AU=true;this.__AV=bm<=bl?-1:1;this.__Bc(e);this._onInterval();if(!this.__iG){this.__iG=new qx.event.Timer(100);this.__iG.addListener(M,this._onInterval,this);}
;this.__iG.start();}
;this.addListener(L,this._onMouseMove);this.capture();e.stopPropagation();}
,_onMouseUp:function(e){if(this.__AS){this.releaseCapture();delete this.__AS;this.__AX.stop();this._fireValue();delete this.__AT;this.getChildControl(t).removeState(I);if(e.getType()===D){var bp;var bq;var bo;if(this.__ma){bp=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__AP);bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[B];bq=e.getDocumentTop()-(bo+this.getChildControl(t).getBounds().top);}
else {bp=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__AP);bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[z];bq=e.getDocumentLeft()-(bo+this.getChildControl(t).getBounds().left);}
;if(bq<0||bq>this.__AR||bp<0||bp>this.__AR){this.getChildControl(t).removeState(y);}
;}
;}
else if(this.__AU){this.__iG.stop();this.releaseCapture();delete this.__AU;delete this.__AV;delete this.__AW;}
;this.removeListener(L,this._onMouseMove);if(e.getType()===D){e.stopPropagation();}
;}
,_onMouseMove:function(e){if(this.__AS){var bs=this.__ma?e.getDocumentLeft():e.getDocumentTop();var br=bs-this.__AT;this.slideTo(this._positionToValue(br));}
else if(this.__AU){this.__Bc(e);}
;e.stopPropagation();}
,_onInterval:function(e){var bt=this.getValue()+(this.__AV*this.getPageStep());if(bt<this.getMinimum()){bt=this.getMinimum();}
else if(bt>this.getMaximum()){bt=this.getMaximum();}
;var bu=this.__AV==-1;if((bu&&bt<=this.__AW)||(!bu&&bt>=this.__AW)){bt=this.__AW;}
;this.slideTo(bt);}
,_onUpdate:function(e){var bw=this.getInnerSize();var bx=this.getChildControl(t).getBounds();var bv=this.__ma?O:R;this._updateKnobSize();this.__Bb=bw[bv]-bx[bv];this.__AR=bx[bv];this._updateKnobPosition();}
,__ma:false,__Bb:0,__Bc:function(e){var by=this.__ma;var bF=by?e.getDocumentLeft():e.getDocumentTop();var bH=this.__AP;var bz=this.__AQ;var bJ=this.__AR;var bG=bF-bH;if(bF>=bz){bG-=bJ;}
;var bD=this._positionToValue(bG);var bA=this.getMinimum();var bB=this.getMaximum();if(bD<bA){bD=bA;}
else if(bD>bB){bD=bB;}
else {var bE=this.getValue();var bC=this.getPageStep();var bI=this.__AV<0?q:u;bD=bE+(Math[bI]((bD-bE)/bC)*bC);}
;if(this.__AW==null||(this.__AV==-1&&bD<=this.__AW)||(this.__AV==1&&bD>=this.__AW)){this.__AW=bD;}
;}
,_positionToValue:function(bK){var bL=this.__Bb;if(bL==null||bL==0){return 0;}
;var bN=bK/bL;if(bN<0){bN=0;}
else if(bN>1){bN=1;}
;var bM=this.getMaximum()-this.getMinimum();return this.getMinimum()+Math.round(bM*bN);}
,_valueToPosition:function(bO){var bP=this.__Bb;if(bP==null){return 0;}
;var bQ=this.getMaximum()-this.getMinimum();if(bQ==0){return 0;}
;var bO=bO-this.getMinimum();var bR=bO/bQ;if(bR<0){bR=0;}
else if(bR>1){bR=1;}
;return Math.round(bP*bR);}
,_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));}
,_setKnobPosition:function(bS){var bT=this.getChildControl(t).getContainerElement();if(this.__ma){bT.setStyle(z,bS+x,true);}
else {bT.setStyle(B,bS+x,true);}
;}
,_updateKnobSize:function(){var bV=this.getKnobFactor();if(bV==null){return;}
;var bU=this.getInnerSize();if(bU==null){return;}
;if(this.__ma){this.getChildControl(t).setWidth(Math.round(bV*bU.width));}
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
,_applyOrientation:function(bY,ca){var cb=this.getChildControl(t);this.__ma=bY===J;if(this.__ma){this.removeState(H);cb.removeState(H);this.addState(J);cb.addState(J);cb.setLayoutProperties({top:0,right:null,bottom:0});}
else {this.removeState(J);cb.removeState(J);this.addState(H);cb.addState(H);cb.setLayoutProperties({right:0,bottom:null,left:0});}
;this._updateKnobPosition();}
,_applyKnobFactor:function(cc,cd){if(cc!=null){this._updateKnobSize();}
else {if(this.__ma){this.getChildControl(t).resetWidth();}
else {this.getChildControl(t).resetHeight();}
;}
;}
,_applyValue:function(ce,cf){if(ce!=null){this._updateKnobPosition();if(this.__AS){this.__Ba=[ce,cf];}
else {this.fireEvent(N,qx.event.type.Data,[ce,cf]);}
;}
else {this.resetValue();}
;}
,_fireValue:function(){if(!this.__Ba){return;}
;var cg=this.__Ba;this.__Ba=null;this.fireEvent(N,qx.event.type.Data,cg);}
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
(function(){var o="__pe",n="__oV",m="mouseout",l="__pc",k="changeHorizontalScrollBarVisible",j="bottom",i="_applyScrollTimeout",h="changeScrollX",g="_applyTablePaneModel",d="Integer",bq="dblclick",bp="__pd",bo="dataEdited",bn="__oX",bm="mousewheel",bl="interval",bk="__iG",bj="qx.ui.table.pane.Scroller",bi="_applyShowCellFocusIndicator",bh="y",v="resize",w="__pa",t="vertical",u="changeScrollY",r="__oW",s="appear",p="__pb",q="table-scroller",C="beforeSort",D="__oY",M="cellDblclick",J="horizontal",U="losecapture",P="contextmenu",bd="col-resize",ba="disappear",F="_applyVerticalScrollBarVisible",bg="_applyHorizontalScrollBarVisible",bf="os.scrollBarOverlayed",be="cellContextmenu",E="close",H="changeTablePaneModel",I="x",L="qx.ui.table.pane.Model",N="changeVerticalScrollBarVisible",Q="scroll",W="focus-indicator",bc="excluded",y="scrollbar-y",z="table-scroller-focus-indicator",G="visible",T="mousemove",S="header",R="editing",Y="click",X="modelChanged",O="scrollbar-x",V="cellClick",a="pane",bb="mousedown",A="qx.event.type.Data",B="mouseup",K="qx.ui.table.pane.CellEvent",b="resize-line",c="Boolean";qx.Class.define(bj,{extend:qx.ui.core.Widget,include:qx.core.Environment.filter({"true":qx.ui.core.scroll.MScrollBarFactory,"event.touch":qx.ui.core.scroll.MTouchScroll}),construct:function(br){qx.ui.core.Widget.call(this);this.__mw=br;var bs=new qx.ui.layout.Grid();bs.setColumnFlex(0,1);bs.setRowFlex(1,1);this._setLayout(bs);this.__oV=this._showChildControl(S);this.__oW=this._showChildControl(a);this.__oX=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});this._add(this.__oX,{row:0,column:0,colSpan:2});this.__oY=new qx.ui.table.pane.Clipper();this.__oY.add(this.__oV);this.__oY.addListener(U,this._onChangeCaptureHeader,this);this.__oY.addListener(T,this._onMousemoveHeader,this);this.__oY.addListener(bb,this._onMousedownHeader,this);this.__oY.addListener(B,this._onMouseupHeader,this);this.__oY.addListener(Y,this._onClickHeader,this);this.__oX.add(this.__oY,{flex:1});this.__pa=new qx.ui.table.pane.Clipper();this.__pa.add(this.__oW);this.__pa.addListener(bm,this._onMousewheel,this);this.__pa.addListener(T,this._onMousemovePane,this);this.__pa.addListener(bb,this._onMousedownPane,this);this.__pa.addListener(B,this._onMouseupPane,this);this.__pa.addListener(Y,this._onClickPane,this);this.__pa.addListener(P,this._onContextMenu,this);this.__pa.addListener(bq,this._onDblclickPane,this);this.__pa.addListener(v,this._onResizePane,this);if(qx.core.Environment.get(bf)){this.__pb=new qx.ui.container.Composite();this.__pb.setLayout(new qx.ui.layout.Canvas());this.__pb.add(this.__pa,{edge:0});this._add(this.__pb,{row:1,column:0});}
else {this._add(this.__pa,{row:1,column:0});}
;this.__pc=this._showChildControl(O);this.__pd=this._showChildControl(y);this.__pe=this.getChildControl(W);this.initShowCellFocusIndicator();this.getChildControl(b).hide();this.addListener(m,this._onMouseout,this);this.addListener(s,this._onAppear,this);this.addListener(ba,this._onDisappear,this);this.__iG=new qx.event.Timer();this.__iG.addListener(bl,this._oninterval,this);this.initScrollTimeout();}
,statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":A,"changeScrollX":A,"cellClick":K,"cellDblclick":K,"cellContextmenu":K,"beforeSort":A},properties:{horizontalScrollBarVisible:{check:c,init:false,apply:bg,event:k},verticalScrollBarVisible:{check:c,init:false,apply:F,event:N},tablePaneModel:{check:L,apply:g,event:H},liveResize:{check:c,init:false},focusCellOnMouseMove:{check:c,init:false},selectBeforeFocus:{check:c,init:false},showCellFocusIndicator:{check:c,init:true,apply:bi},contextMenuFromDataCellsOnly:{check:c,init:true},resetSelectionOnHeaderClick:{check:c,init:true},scrollTimeout:{check:d,init:100,apply:i},appearance:{refine:true,init:q}},members:{__oa:null,__mw:null,__pf:null,__pg:null,__ph:null,__pi:null,__pj:null,__pk:null,__pl:null,__pm:null,__pn:null,__po:null,__pp:null,__pq:null,__pr:false,__ps:null,__pt:null,__pu:null,__nV:null,__nW:null,__pv:null,__pw:null,__px:null,__pc:null,__pd:null,__oV:null,__oY:null,__oW:null,__pa:null,__pb:null,__pe:null,__oX:null,__iG:null,getPaneInsetRight:function(){var bv=this.getTopRightWidget();var bw=bv&&bv.isVisible()&&bv.getBounds()?bv.getBounds().width+bv.getMarginLeft()+bv.getMarginRight():0;var bu=this.__pd;var bt=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth()+bu.getMarginLeft()+bu.getMarginRight():0;return Math.max(bw,bt);}
,setPaneWidth:function(bx){if(this.isVerticalScrollBarVisible()){bx+=this.getPaneInsetRight();}
;this.setWidth(bx);}
,_createChildControlImpl:function(by,bz){var bA;switch(by){case S:bA=(this.getTable().getNewTablePaneHeader())(this);break;case a:bA=(this.getTable().getNewTablePane())(this);break;case W:bA=new qx.ui.table.pane.FocusIndicator(this);bA.setUserBounds(0,0,0,0);bA.setZIndex(1000);bA.addListener(B,this._onMouseupFocusIndicator,this);this.__pa.add(bA);bA.show();bA.setDecorator(null);break;case b:bA=new qx.ui.core.Widget();bA.setUserBounds(0,0,0,0);bA.setZIndex(1000);this.__pa.add(bA);break;case O:bA=this._createScrollBar(J).set({alignY:j});bA.addListener(Q,this._onScrollX,this);if(this.__pb!=null){bA.setMinHeight(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);this.__pb.add(bA,{bottom:0,right:0,left:0});}
else {this._add(bA,{row:2,column:0});}
;break;case y:bA=this._createScrollBar(t);bA.addListener(Q,this._onScrollY,this);if(this.__pb!=null){this.__pb.add(bA,{right:0,bottom:0,top:0});}
else {this._add(bA,{row:1,column:1});}
;break;};return bA||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,by);}
,_applyHorizontalScrollBarVisible:function(bB,bC){this.__pc.setVisibility(bB?G:bc);}
,_applyVerticalScrollBarVisible:function(bD,bE){this.__pd.setVisibility(bD?G:bc);}
,_applyTablePaneModel:function(bF,bG){if(bG!=null){bG.removeListener(X,this._onPaneModelChanged,this);}
;bF.addListener(X,this._onPaneModelChanged,this);}
,_applyShowCellFocusIndicator:function(bH,bI){if(bH){this.__pe.setDecorator(z);this._updateFocusIndicator();}
else {if(this.__pe){this.__pe.setDecorator(null);}
;}
;}
,getScrollY:function(){return this.__pd.getPosition();}
,setScrollY:function(scrollY,bJ){this.__pd.scrollTo(scrollY);if(bJ){this._updateContent();}
;}
,getScrollX:function(){return this.__pc.getPosition();}
,setScrollX:function(scrollX){this.__pc.scrollTo(scrollX);}
,getTable:function(){return this.__mw;}
,onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();this._updateFocusIndicator();}
,setColumnWidth:function(bK,bL){this.__oV.setColumnWidth(bK,bL);this.__oW.setColumnWidth(bK,bL);var bM=this.getTablePaneModel();var x=bM.getX(bK);if(x!=-1){this.updateHorScrollBarMaximum();this._updateFocusIndicator();}
;}
,onColOrderChanged:function(){this.__oV.onColOrderChanged();this.__oW.onColOrderChanged();this.updateHorScrollBarMaximum();}
,onTableModelDataChanged:function(bN,bO,bP,bQ){this.__oW.onTableModelDataChanged(bN,bO,bP,bQ);var bR=this.getTable().getTableModel().getRowCount();if(bR!=this.__oa){this.updateVerScrollBarMaximum();if(this.getFocusedRow()>=bR){if(bR==0){this.setFocusedCell(null,null);}
else {this.setFocusedCell(this.getFocusedColumn(),bR-1);}
;}
;this.__oa=bR;}
;}
,onSelectionChanged:function(){this.__oW.onSelectionChanged();}
,onFocusChanged:function(){this.__oW.onFocusChanged();}
,onTableModelMetaDataChanged:function(){this.__oV.onTableModelMetaDataChanged();this.__oW.onTableModelMetaDataChanged();}
,_onPaneModelChanged:function(){this.__oV.onPaneModelChanged();this.__oW.onPaneModelChanged();}
,_onResizePane:function(){this.updateHorScrollBarMaximum();this.updateVerScrollBarMaximum();this._updateContent();this.__oV._updateContent();this.__mw._updateScrollBarVisibility();}
,updateHorScrollBarMaximum:function(){var bV=this.__pa.getInnerSize();if(!bV){return;}
;var bT=this.getTablePaneModel().getTotalWidth();var bU=this.__pc;if(bV.width<bT){var bS=Math.max(0,bT-bV.width);bU.setMaximum(bS);bU.setKnobFactor(bV.width/bT);var bW=bU.getPosition();bU.setPosition(Math.min(bW,bS));}
else {bU.setMaximum(0);bU.setKnobFactor(1);bU.setPosition(0);}
;}
,updateVerScrollBarMaximum:function(){var cf=this.__pa.getInnerSize();if(!cf){return;}
;var cd=this.getTable().getTableModel();var bY=cd.getRowCount();if(this.getTable().getKeepFirstVisibleRowComplete()){bY+=1;}
;var bX=this.getTable().getRowHeight();var cb=bY*bX;var ce=this.__pd;if(cf.height<cb){var ca=Math.max(0,cb-cf.height);ce.setMaximum(ca);ce.setKnobFactor(cf.height/cb);var cc=ce.getPosition();ce.setPosition(Math.min(cc,ca));}
else {ce.setMaximum(0);ce.setKnobFactor(1);ce.setPosition(0);}
;}
,onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();this._updateContent();}
,_onAppear:function(){this._startInterval(this.getScrollTimeout());}
,_onDisappear:function(){this._stopInterval();}
,_onScrollX:function(e){var cg=e.getData();this.fireDataEvent(h,cg,e.getOldData());this.__oY.scrollToX(cg);this.__pa.scrollToX(cg);}
,_onScrollY:function(e){this.fireDataEvent(u,e.getData(),e.getOldData());this._postponedUpdateContent();}
,_onMousewheel:function(e){var ch=this.getTable();if(!ch.getEnabled()){return;}
;var ck=e.getWheelDelta(bh);if(ck>0&&ck<1){ck=1;}
else if(ck<0&&ck>-1){ck=-1;}
;this.__pd.scrollBySteps(ck);ck=e.getWheelDelta(I);if(ck>0&&ck<1){ck=1;}
else if(ck<0&&ck>-1){ck=-1;}
;this.__pc.scrollBySteps(ck);if(this.__pt&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__pt,this.__pu);}
;var cj=this.__pd.getPosition();var ci=this.__pd.getMaximum();if(ck<0&&cj<=0||ck>0&&cj>=ci){return;}
;e.stop();}
,__py:function(cl){var cq=this.getTable();var cr=this.__oV.getHeaderWidgetAtColumn(this.__pn);var cm=cr.getSizeHint().minWidth;var co=Math.max(cm,this.__pp+cl-this.__po);if(this.getLiveResize()){var cn=cq.getTableColumnModel();cn.setColumnWidth(this.__pn,co,true);}
else {this.__oV.setColumnWidth(this.__pn,co,true);var cp=this.getTablePaneModel();this._showResizeLine(cp.getColumnLeft(this.__pn)+co);}
;this.__po+=co-this.__pp;this.__pp=co;}
,__pz:function(cs){var ct=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;if(this.__oV.isShowingColumnMoveFeedback()||cs>this.__pm+ct||cs<this.__pm-ct){this.__pj+=cs-this.__pm;this.__oV.showColumnMoveFeedback(this.__pi,this.__pj);var cu=this.__mw.getTablePaneScrollerAtPageX(cs);if(this.__pl&&this.__pl!=cu){this.__pl.hideColumnMoveFeedback();}
;if(cu!=null){this.__pk=cu.showColumnMoveFeedback(cs);}
else {this.__pk=null;}
;this.__pl=cu;this.__pm=cs;}
;}
,_onMousemoveHeader:function(e){var cB=this.getTable();if(!cB.getEnabled()){return;}
;var cC=false;var cv=null;var cz=e.getDocumentLeft();var cA=e.getDocumentTop();this.__pt=cz;this.__pu=cA;if(this.__pn!=null){this.__py(cz);cC=true;e.stopPropagation();}
else if(this.__pi!=null){this.__pz(cz);e.stopPropagation();}
else {var cw=this._getResizeColumnForPageX(cz);if(cw!=-1){cC=true;}
else {var cy=cB.getTableModel();var cD=this._getColumnForPageX(cz);if(cD!=null&&cy.isColumnSortable(cD)){cv=cD;}
;}
;}
;var cx=cC?bd:null;this.getApplicationRoot().setGlobalCursor(cx);this.setCursor(cx);this.__oV.setMouseOverColumn(cv);}
,_onMousemovePane:function(e){var cE=this.getTable();if(!cE.getEnabled()){return;}
;var cG=e.getDocumentLeft();var cH=e.getDocumentTop();this.__pt=cG;this.__pu=cH;var cF=this._getRowForPagePos(cG,cH);if(cF!=null&&this._getColumnForPageX(cG)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cG,cH);}
;}
;this.__oV.setMouseOverColumn(null);}
,_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;}
;var cJ=e.getDocumentLeft();var cK=this._getResizeColumnForPageX(cJ);if(cK!=-1){this._startResizeHeader(cK,cJ);e.stop();}
else {var cI=this._getColumnForPageX(cJ);if(cI!=null){this._startMoveHeader(cI,cJ);e.stop();}
;}
;}
,_startResizeHeader:function(cL,cM){var cN=this.getTable().getTableColumnModel();this.__pn=cL;this.__po=cM;this.__pp=cN.getColumnWidth(this.__pn);this.__oY.capture();}
,_startMoveHeader:function(cO,cP){this.__pi=cO;this.__pm=cP;this.__pj=this.getTablePaneModel().getColumnLeft(cO);this.__oY.capture();}
,_onMousedownPane:function(e){var cT=this.getTable();if(!cT.getEnabled()){return;}
;if(cT.isEditing()){cT.stopEditing();}
;var cQ=e.getDocumentLeft();var cS=e.getDocumentTop();var cV=this._getRowForPagePos(cQ,cS);var cU=this._getColumnForPageX(cQ);if(cV!==null){this.__pq={row:cV,col:cU};this.__pr=false;var cR=this.getSelectBeforeFocus();if(cR){cT.getSelectionManager().handleMouseDown(cV,e);}
;if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cQ,cS);}
;if(!cR){cT.getSelectionManager().handleMouseDown(cV,e);}
;}
;}
,_onMouseupFocusIndicator:function(e){if(this.__pq&&!this.__pr&&!this.isEditing()&&this.__pe.getRow()==this.__pq.row&&this.__pe.getColumn()==this.__pq.col){this.fireEvent(V,qx.ui.table.pane.CellEvent,[this,e,this.__pq.row,this.__pq.col],true);this.__pr=true;}
else if(!this.isEditing()){this._onMousedownPane(e);}
;}
,_onChangeCaptureHeader:function(e){if(this.__pn!=null){this._stopResizeHeader();}
;if(this.__pi!=null){this._stopMoveHeader();}
;}
,_stopResizeHeader:function(){var cW=this.getTable().getTableColumnModel();if(!this.getLiveResize()){this._hideResizeLine();cW.setColumnWidth(this.__pn,this.__pp,true);}
;this.__pn=null;this.__oY.releaseCapture();this.getApplicationRoot().setGlobalCursor(null);this.setCursor(null);if(this.isEditing()){var cX=this.__pv.getBounds().height;this.__pv.setUserBounds(0,0,this.__pp,cX);}
;}
,_stopMoveHeader:function(){var dd=this.getTable().getTableColumnModel();var de=this.getTablePaneModel();this.__oV.hideColumnMoveFeedback();if(this.__pl){this.__pl.hideColumnMoveFeedback();}
;if(this.__pk!=null){var dg=de.getFirstColumnX()+de.getX(this.__pi);var dc=this.__pk;if(dc!=dg&&dc!=dg+1){var df=dd.getVisibleColumnAtX(dg);var db=dd.getVisibleColumnAtX(dc);var da=dd.getOverallX(df);var cY=(db!=null)?dd.getOverallX(db):dd.getOverallColumnCount();if(cY>da){cY--;}
;dd.moveColumn(da,cY);this._updateFocusIndicator();}
;}
;this.__pi=null;this.__pk=null;this.__oY.releaseCapture();}
,_onMouseupPane:function(e){var dh=this.getTable();if(!dh.getEnabled()){return;}
;var di=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());if(di!=-1&&di!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){dh.getSelectionManager().handleMouseUp(di,e);}
;}
,_onMouseupHeader:function(e){var dj=this.getTable();if(!dj.getEnabled()){return;}
;if(this.__pn!=null){this._stopResizeHeader();this.__ps=true;e.stop();}
else if(this.__pi!=null){this._stopMoveHeader();e.stop();}
;}
,_onClickHeader:function(e){if(this.__ps){this.__ps=false;return;}
;var dp=this.getTable();if(!dp.getEnabled()){return;}
;var dm=dp.getTableModel();var dn=e.getDocumentLeft();var dl=this._getResizeColumnForPageX(dn);if(dl==-1){var ds=this._getColumnForPageX(dn);if(ds!=null&&dm.isColumnSortable(ds)){var dk=dm.getSortColumnIndex();var dq=(ds!=dk)?true:!dm.isSortAscending();var dr={column:ds,ascending:dq,clickEvent:e};if(this.fireDataEvent(C,dr,null,true)){if(dp.isEditing()){dp.stopEditing();}
;dm.sortByColumn(ds,dq);if(this.getResetSelectionOnHeaderClick()){dp.getSelectionModel().resetSelection();}
;}
;}
;}
;e.stop();}
,_onClickPane:function(e){var dt=this.getTable();if(!dt.getEnabled()){return;}
;var dw=e.getDocumentLeft();var dx=e.getDocumentTop();var du=this._getRowForPagePos(dw,dx);var dv=this._getColumnForPageX(dw);if(du!=null&&dv!=null){dt.getSelectionManager().handleClick(du,e);if(this.__pe.isHidden()||(this.__pq&&!this.__pr&&!this.isEditing()&&du==this.__pq.row&&dv==this.__pq.col)){this.fireEvent(V,qx.ui.table.pane.CellEvent,[this,e,du,dv],true);this.__pr=true;}
;}
;}
,_onContextMenu:function(e){var dB=e.getDocumentLeft();var dC=e.getDocumentTop();var dz=this._getRowForPagePos(dB,dC);var dA=this._getColumnForPageX(dB);if(dz===null&&this.getContextMenuFromDataCellsOnly()){return;}
;if(!this.getShowCellFocusIndicator()||dz===null||(this.__pq&&dz==this.__pq.row&&dA==this.__pq.col)){this.fireEvent(be,qx.ui.table.pane.CellEvent,[this,e,dz,dA],true);var dy=this.getTable().getContextMenu();if(dy){if(dy.getChildren().length>0){dy.openAtMouse(e);}
else {dy.exclude();}
;e.preventDefault();}
;}
;}
,_onContextMenuOpen:function(e){}
,_onDblclickPane:function(e){var dE=e.getDocumentLeft();var dF=e.getDocumentTop();this._focusCellAtPagePos(dE,dF);this.startEditing();var dD=this._getRowForPagePos(dE,dF);if(dD!=-1&&dD!=null){this.fireEvent(M,qx.ui.table.pane.CellEvent,[this,e,dD],true);}
;}
,_onMouseout:function(e){var dG=this.getTable();if(!dG.getEnabled()){return;}
;if(this.__pn==null){this.setCursor(null);this.getApplicationRoot().setGlobalCursor(null);}
;this.__oV.setMouseOverColumn(null);if(this.getFocusCellOnMouseMove()){this.__mw.setFocusedCell();}
;}
,_showResizeLine:function(x){var dI=this._showChildControl(b);var dH=dI.getWidth();var dJ=this.__pa.getBounds();dI.setUserBounds(x-Math.round(dH/2),0,dH,dJ.height);}
,_hideResizeLine:function(){this._excludeChildControl(b);}
,showColumnMoveFeedback:function(dK){var dT=this.getTablePaneModel();var dS=this.getTable().getTableColumnModel();var dN=this.__oW.getContainerLocation().left;var dR=dT.getColumnCount();var dO=0;var dM=0;var dW=dN;for(var dL=0;dL<dR;dL++){var dP=dT.getColumnAtX(dL);var dU=dS.getColumnWidth(dP);if(dK<dW+dU/2){break;}
;dW+=dU;dO=dL+1;dM=dW-dN;}
;var dQ=this.__pa.getContainerLocation().left;var dV=this.__pa.getBounds().width;var scrollX=dQ-dN;dM=qx.lang.Number.limit(dM,scrollX+2,scrollX+dV-1);this._showResizeLine(dM);return dT.getFirstColumnX()+dO;}
,hideColumnMoveFeedback:function(){this._hideResizeLine();}
,_focusCellAtPagePos:function(dX,dY){var eb=this._getRowForPagePos(dX,dY);if(eb!=-1&&eb!=null){var ea=this._getColumnForPageX(dX);this.__mw.setFocusedCell(ea,eb);}
;}
,setFocusedCell:function(ec,ed){if(!this.isEditing()){this.__oW.setFocusedCell(ec,ed,this.__pg);this.__nV=ec;this.__nW=ed;this._updateFocusIndicator();}
;}
,getFocusedColumn:function(){return this.__nV;}
,getFocusedRow:function(){return this.__nW;}
,scrollCellVisible:function(ee,ef){var ep=this.getTablePaneModel();var eg=ep.getX(ee);if(eg!=-1){var em=this.__pa.getInnerSize();if(!em){return;}
;var en=this.getTable().getTableColumnModel();var ej=ep.getColumnLeft(ee);var eq=en.getColumnWidth(ee);var eh=this.getTable().getRowHeight();var er=ef*eh;var scrollX=this.getScrollX();var scrollY=this.getScrollY();var eo=Math.min(ej,ej+eq-em.width);var el=ej;this.setScrollX(Math.max(eo,Math.min(el,scrollX)));var ei=er+eh-em.height;if(this.getTable().getKeepFirstVisibleRowComplete()){ei+=eh;}
;var ek=er;this.setScrollY(Math.max(ei,Math.min(ek,scrollY)),true);}
;}
,isEditing:function(){return this.__pv!=null;}
,startEditing:function(){var ew=this.getTable();var eu=ew.getTableModel();var ey=this.__nV;if(!this.isEditing()&&(ey!=null)&&eu.isColumnEditable(ey)){var ez=this.__nW;var es=this.getTablePaneModel().getX(ey);var et=eu.getValue(ey,ez);this.scrollCellVisible(es,ez);this.__pw=ew.getTableColumnModel().getCellEditorFactory(ey);var ev={col:ey,row:ez,xPos:es,value:et,table:ew};this.__pv=this.__pw.createCellEditor(ev);if(this.__pv===null){return false;}
else if(this.__pv instanceof qx.ui.window.Window){this.__pv.setModal(true);this.__pv.setShowClose(false);this.__pv.addListener(E,this._onCellEditorModalWindowClose,this);var f=ew.getModalCellEditorPreOpenFunction();if(f!=null){f(this.__pv,ev);}
;this.__pv.open();}
else {var ex=this.__pe.getInnerSize();this.__pv.setUserBounds(0,0,ex.width,ex.height);this.__pe.addListener(bb,function(e){this.__pq={row:this.__nW,col:this.__nV};e.stopPropagation();}
,this);this.__pe.add(this.__pv);this.__pe.addState(R);this.__pe.setKeepActive(false);this.__pe.setDecorator(z);this.__pv.focus();this.__pv.activate();}
;return true;}
;return false;}
,stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__pe.setDecorator(null);}
;this.flushEditor();this.cancelEditing();}
,flushEditor:function(){if(this.isEditing()){var eB=this.__pw.getCellEditorValue(this.__pv);var eA=this.getTable().getTableModel().getValue(this.__nV,this.__nW);this.getTable().getTableModel().setValue(this.__nV,this.__nW,eB);this.__mw.focus();this.__mw.fireDataEvent(bo,{row:this.__nW,col:this.__nV,oldValue:eA,value:eB});}
;}
,cancelEditing:function(){if(this.isEditing()&&!this.__pv.pendingDispose){if(this._cellEditorIsModalWindow){this.__pv.destroy();this.__pv=null;this.__pw=null;this.__pv.pendingDispose=true;}
else {this.__pe.removeState(R);this.__pe.setKeepActive(true);this.__pv.destroy();this.__pv=null;this.__pw=null;}
;}
;}
,_onCellEditorModalWindowClose:function(e){this.stopEditing();}
,_getColumnForPageX:function(eC){var eF=this.getTable().getTableColumnModel();var eG=this.getTablePaneModel();var eE=eG.getColumnCount();var eI=this.__oW.getContentLocation().left;for(var x=0;x<eE;x++){var eD=eG.getColumnAtX(x);var eH=eF.getColumnWidth(eD);eI+=eH;if(eC<eI){return eD;}
;}
;return null;}
,_getResizeColumnForPageX:function(eJ){var eN=this.getTable().getTableColumnModel();var eO=this.getTablePaneModel();var eM=eO.getColumnCount();var eQ=this.__oV.getContainerLocation().left;var eK=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;for(var x=0;x<eM;x++){var eL=eO.getColumnAtX(x);var eP=eN.getColumnWidth(eL);eQ+=eP;if(eJ>=(eQ-eK)&&eJ<=(eQ+eK)){return eL;}
;}
;return -1;}
,_getRowForPagePos:function(eR,eS){var eT=this.__oW.getContentLocation();if(eR<eT.left||eR>eT.right){return null;}
;if(eS>=eT.top&&eS<=eT.bottom){var eU=this.getTable().getRowHeight();var scrollY=this.__pd.getPosition();if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eU)*eU;}
;var eX=scrollY+eS-eT.top;var fa=Math.floor(eX/eU);var eY=this.getTable().getTableModel();var eV=eY.getRowCount();return (fa<eV)?fa:null;}
;var eW=this.__oV.getContainerLocation();if(eS>=eW.top&&eS<=eW.bottom&&eR<=eW.right){return -1;}
;return null;}
,setTopRightWidget:function(fb){var fc=this.__px;if(fc!=null){this.__oX.remove(fc);}
;if(fb!=null){this.__oX.add(fb);}
;this.__px=fb;}
,getTopRightWidget:function(){return this.__px;}
,getHeader:function(){return this.__oV;}
,getTablePane:function(){return this.__oW;}
,getVerticalScrollBarWidth:function(){var fd=this.__pd;return fd.isVisible()?(fd.getSizeHint().width||0):0;}
,getNeededScrollBars:function(fe,ff){var fo=this.__pd;var fs=fo.getSizeHint().width+fo.getMarginLeft()+fo.getMarginRight();var fu=this.__pc;var ft=fu.getSizeHint().height+fu.getMarginTop()+fu.getMarginBottom();var fm=this.__pa.getInnerSize();var fg=fm?fm.width:0;if(this.getVerticalScrollBarVisible()){fg+=fs;}
;var fr=fm?fm.height:0;if(this.getHorizontalScrollBarVisible()){fr+=ft;}
;var fn=this.getTable().getTableModel();var fk=fn.getRowCount();var fh=this.getTablePaneModel().getTotalWidth();var fp=this.getTable().getRowHeight()*fk;var fj=false;var fq=false;if(fh>fg){fj=true;if(fp>fr-ft){fq=true;}
;}
else if(fp>fr){fq=true;if(!ff&&(fh>fg-fs)){fj=true;}
;}
;var fl=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;var fi=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;return ((fe||fj)?fl:0)|((ff||!fq)?0:fi);}
,getPaneClipper:function(){return this.__pa;}
,_applyScrollTimeout:function(fv,fw){this._startInterval(fv);}
,_startInterval:function(fx){this.__iG.setInterval(fx);this.__iG.start();}
,_stopInterval:function(){this.__iG.stop();}
,_postponedUpdateContent:function(){this._updateContent();}
,_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__pg&&!this.__oW._layoutPending){this.__pg=false;this._updateContent();}
;}
),_updateContent:function(){var fC=this.__pa.getInnerSize();if(!fC){return;}
;var fF=fC.height;var scrollX=this.__pc.getPosition();var scrollY=this.__pd.getPosition();var fz=this.getTable().getRowHeight();var fA=Math.floor(scrollY/fz);var fE=this.__oW.getFirstVisibleRow();this.__oW.setFirstVisibleRow(fA);var fB=Math.ceil(fF/fz);var fy=0;var fD=this.getTable().getKeepFirstVisibleRowComplete();if(!fD){fB++;fy=scrollY%fz;}
;this.__oW.setVisibleRowCount(fB);if(fA!=fE){this._updateFocusIndicator();}
;this.__pa.scrollToX(scrollX);if(!fD){this.__pa.scrollToY(fy);}
;}
,_updateFocusIndicator:function(){var fG=this.getTable();if(!fG.getEnabled()){return;}
;this.__pe.moveToCell(this.__nV,this.__nW);}
},destruct:function(){this._stopInterval();var fH=this.getTablePaneModel();if(fH){fH.dispose();}
;this.__pq=this.__px=this.__mw=null;this._disposeObjects(l,bp,D,w,o,n,r,bn,bk,p);}
});}
)();
(function(){var a="qx.ui.table.pane.Clipper";qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.Grow());this.setMinWidth(0);}
,members:{scrollToX:function(b){this.getContentElement().scrollToX(b,false);}
,scrollToY:function(c){this.getContentElement().scrollToY(c,true);}
}});}
)();
(function(){var d="qx.nativeScrollBars",c="os.scrollBarOverlayed",b="osx",a="qx.bom.client.Scroll";qx.Bootstrap.define(a,{statics:{scrollBarOverlayed:function(){var e=qx.bom.element.Overflow.getScrollbarWidth();var f=qx.bom.client.OperatingSystem.getName()===b;var g=qx.core.Environment.get(d);return e==0&&f&&g;}
},defer:function(h){qx.core.Environment.add(c,h.scrollBarOverlayed);}
});}
)();
(function(){var g="Escape",f="keypress",d="Enter",c="excluded",b="qx.ui.table.pane.FocusIndicator",a="Integer";qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(h){qx.ui.container.Composite.call(this);this.__pA=h;this.setKeepActive(true);this.addListener(f,this._onKeyPress,this);}
,properties:{visibility:{refine:true,init:c},row:{check:a,nullable:true},column:{check:a,nullable:true}},members:{__pA:null,_onKeyPress:function(e){var i=e.getKeyIdentifier();if(i!==g&&i!==d){e.stopPropagation();}
;}
,moveToCell:function(j,k){if(!this.__pA.getShowCellFocusIndicator()&&!this.__pA.getTable().getTableModel().isColumnEditable(j)){this.exclude();return;}
else {this.show();}
;if(j==null){this.hide();this.setRow(null);this.setColumn(null);}
else {var l=this.__pA.getTablePaneModel().getX(j);if(l==-1){this.hide();this.setRow(null);this.setColumn(null);}
else {var q=this.__pA.getTable();var o=q.getTableColumnModel();var p=this.__pA.getTablePaneModel();var n=this.__pA.getTablePane().getFirstVisibleRow();var m=q.getRowHeight();this.setUserBounds(p.getColumnLeft(j)-2,(k-n)*m-2,o.getColumnWidth(j)+3,m+3);this.show();this.setRow(k);this.setColumn(j);}
;}
;}
},destruct:function(){this.__pA=null;}
});}
)();
(function(){var b="qx.ui.table.pane.CellEvent",a="Integer";qx.Class.define(b,{extend:qx.event.type.Mouse,properties:{row:{check:a,nullable:true},column:{check:a,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);this.setBubbles(false);if(e!=null){this.setRow(e);}
else {this.setRow(c._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));}
;if(f!=null){this.setColumn(f);}
else {this.setColumn(c._getColumnForPageX(this.getDocumentLeft()));}
;}
,clone:function(g){var h=qx.event.type.Mouse.prototype.clone.call(this,g);h.set({row:this.getRow(),column:this.getColumn()});return h;}
}});}
)();
(function(){var a="qx.lang.Number";qx.Class.define(a,{statics:{isInRange:function(b,c,d){return b>=c&&b<=d;}
,isBetweenRange:function(e,f,g){return e>f&&e<g;}
,limit:function(h,i,j){if(j!=null&&h>j){return j;}
else if(i!=null&&h<i){return i;}
else {return h;}
;}
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
,unblockContent:function(){}
,isContentBlocked:function(){}
}});}
)();
(function(){var b="qx.ui.window.Manager",a="__pB";qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__pB:null,setDesktop:function(c){this.__pB=c;this.updateStack();}
,getDesktop:function(){return this.__pB;}
,changeActiveWindow:function(d,e){if(d){this.bringToFront(d);d.setActive(true);}
;if(e){e.resetActive();}
;}
,_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);}
,syncWidget:function(){this.__pB.forceUnblockContent();var f=this.__pB.getWindows();var h=this._minZIndex;var m=h+f.length*2;var j=h+f.length*4;var k=null;for(var i=0,l=f.length;i<l;i++){var g=f[i];if(!g.isVisible()){continue;}
;k=k||g;if(g.isModal()){g.setZIndex(j);this.__pB.blockContent(j-1);j+=2;k=g;}
else if(g.isAlwaysOnTop()){g.setZIndex(m);m+=2;}
else {g.setZIndex(h);h+=2;}
;if(!k.isModal()&&g.isActive()||g.getZIndex()>k.getZIndex()){k=g;}
;}
;this.__pB.setActiveWindow(k);}
,bringToFront:function(n){var o=this.__pB.getWindows();var p=qx.lang.Array.remove(o,n);if(p){o.push(n);this.updateStack();}
;}
,sendToBack:function(q){var r=this.__pB.getWindows();var s=qx.lang.Array.remove(r,q);if(s){r.unshift(q);this.updateStack();}
;}
},destruct:function(){this._disposeObjects(a);}
});}
)();
(function(){var m="mouseup",l="mousedown",k="__pC",j="losecapture",i="qx.ui.core.MMovable",h="The move handle could not be redefined!",g="__pD",f="mousemove",d="maximized",c="move-frame",a="Boolean",b="move";qx.Mixin.define(i,{properties:{movable:{check:a,init:true},useMoveFrame:{check:a,init:false}},members:{__pC:null,__pD:null,__pE:null,__pF:null,__pG:null,__pH:null,__pI:null,__pJ:false,__pK:null,__pL:0,_activateMoveHandle:function(n){if(this.__pC){throw new Error(h);}
;this.__pC=n;n.addListener(l,this._onMoveMouseDown,this);n.addListener(m,this._onMoveMouseUp,this);n.addListener(f,this._onMoveMouseMove,this);n.addListener(j,this.__pP,this);}
,__pM:function(){var o=this.__pD;if(!o){o=this.__pD=new qx.ui.core.Widget();o.setAppearance(c);o.exclude();qx.core.Init.getApplication().getRoot().add(o);}
;return o;}
,__pN:function(){var location=this.getContainerLocation();var q=this.getBounds();var p=this.__pM();p.setUserBounds(location.left,location.top,q.width,q.height);p.show();p.setZIndex(this.getZIndex()+1);}
,__pO:function(e){var s=this.__pE;var v=Math.max(s.left,Math.min(s.right,e.getDocumentLeft()));var u=Math.max(s.top,Math.min(s.bottom,e.getDocumentTop()));var r=this.__pF+v;var t=this.__pG+u;return {viewportLeft:r,viewportTop:t,parentLeft:r-this.__pH,parentTop:t-this.__pI};}
,_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(d)){return;}
;var parent=this.getLayoutParent();var x=parent.getContentLocation();var y=parent.getBounds();if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__pK=parent.getBlockerColor();this.__pL=parent.getBlockerOpacity();parent.setBlockerColor(null);parent.setBlockerOpacity(1);parent.blockContent(this.getZIndex()-1);this.__pJ=true;}
;}
;this.__pE={left:x.left,top:x.top,right:x.left+y.width,bottom:x.top+y.height};var w=this.getContainerLocation();this.__pH=x.left;this.__pI=x.top;this.__pF=w.left-e.getDocumentLeft();this.__pG=w.top-e.getDocumentTop();this.addState(b);this.__pC.capture();if(this.getUseMoveFrame()){this.__pN();}
;e.stop();}
,_onMoveMouseMove:function(e){if(!this.hasState(b)){return;}
;var z=this.__pO(e);if(this.getUseMoveFrame()){this.__pM().setDomPosition(z.viewportLeft,z.viewportTop);}
else {this.setDomPosition(z.parentLeft,z.parentTop);}
;e.stopPropagation();}
,_onMoveMouseUp:function(e){if(!this.hasState(b)){return;}
;this.removeState(b);var parent=this.getLayoutParent();if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__pJ){parent.unblockContent();parent.setBlockerColor(this.__pK);parent.setBlockerOpacity(this.__pL);this.__pK=null;this.__pL=0;this.__pJ=false;}
;}
;this.__pC.releaseCapture();var A=this.__pO(e);this.setLayoutProperties({left:A.parentLeft,top:A.parentTop});if(this.getUseMoveFrame()){this.__pM().exclude();}
;e.stopPropagation();}
,__pP:function(e){if(!this.hasState(b)){return;}
;this.removeState(b);if(this.getUseMoveFrame()){this.__pM().exclude();}
;}
},destruct:function(){this._disposeObjects(g,k);this.__pE=null;}
});}
)();
(function(){var p="resetPaddingRight",o="setPaddingBottom",n="resetPaddingTop",m="qx.ui.core.MContentPadding",l="resetPaddingLeft",k="setPaddingTop",j="setPaddingRight",i="resetPaddingBottom",h="contentPaddingLeft",g="setPaddingLeft",c="contentPaddingTop",f="shorthand",e="contentPaddingRight",b="contentPaddingBottom",a="Integer",d="_applyContentPadding";qx.Mixin.define(m,{properties:{contentPaddingTop:{check:a,init:0,apply:d,themeable:true},contentPaddingRight:{check:a,init:0,apply:d,themeable:true},contentPaddingBottom:{check:a,init:0,apply:d,themeable:true},contentPaddingLeft:{check:a,init:0,apply:d,themeable:true},contentPadding:{group:[c,e,b,h],mode:f,themeable:true}},members:{__mp:{contentPaddingTop:k,contentPaddingRight:j,contentPaddingBottom:o,contentPaddingLeft:g},__mq:{contentPaddingTop:n,contentPaddingRight:p,contentPaddingBottom:i,contentPaddingLeft:l},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();if(q==null){var t=this.__mq[name];s[t]();}
else {var u=this.__mp[name];s[u](q);}
;}
}});}
)();
(function(){var k="mousedown",j="w-resize",i="sw-resize",h="n-resize",g="resizableRight",f="ne-resize",d="se-resize",c="Integer",b="e-resize",a="resizableLeft",z="mousemove",y="move",x="shorthand",w="maximized",v="nw-resize",u="mouseout",t="qx.ui.core.MResizable",s="mouseup",r="losecapture",q="resize-frame",o="resizableBottom",p="s-resize",m="resizableTop",n="Boolean",l="resize";qx.Mixin.define(t,{construct:function(){var A=this.getContainerElement();A.addListener(k,this.__qe,this,true);A.addListener(s,this.__qf,this);A.addListener(z,this.__qh,this);A.addListener(u,this.__qi,this);A.addListener(r,this.__qg,this);var B=this.getContainerElement().getDomElement();if(B==null){B=window;}
;this.__pQ=qx.event.Registration.getManager(B).getHandler(qx.event.handler.DragDrop);}
,properties:{resizableTop:{check:n,init:true},resizableRight:{check:n,init:true},resizableBottom:{check:n,init:true},resizableLeft:{check:n,init:true},resizable:{group:[m,g,o,a],mode:x},resizeSensitivity:{check:c,init:5},useResizeFrame:{check:n,init:true}},members:{__pQ:null,__pR:null,__pS:null,__pT:null,__pU:null,__pV:null,__pW:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,_getResizeFrame:function(){var C=this.__pR;if(!C){C=this.__pR=new qx.ui.core.Widget();C.setAppearance(q);C.exclude();qx.core.Init.getApplication().getRoot().add(C);}
;return C;}
,__pX:function(){var location=this.__qb();var D=this._getResizeFrame();D.setUserBounds(location.left,location.top,location.right-location.left,location.bottom-location.top);D.show();D.setZIndex(this.getZIndex()+1);}
,__pY:function(e){var F=this.__pS;var G=this.getSizeHint();var K=this.__pW;var J=this.__pV;var E=J.width;var I=J.height;var H=J.containerWidth;var M=J.containerHeight;var N=J.left;var top=J.top;var L;if((F&this.RESIZE_TOP)||(F&this.RESIZE_BOTTOM)){L=Math.max(K.top,Math.min(K.bottom,e.getDocumentTop()))-this.__pU;if(F&this.RESIZE_TOP){I-=L;M-=L;}
else {I+=L;M+=L;}
;if(M<G.minHeight){I+=(G.minHeight-M);M=G.minHeight;}
else if(M>G.maxHeight){I-=(M-G.maxHeight);M=G.maxHeight;}
;if(F&this.RESIZE_TOP){top+=J.containerHeight-M;}
;}
;if((F&this.RESIZE_LEFT)||(F&this.RESIZE_RIGHT)){L=Math.max(K.left,Math.min(K.right,e.getDocumentLeft()))-this.__pT;if(F&this.RESIZE_LEFT){E-=L;H-=L;}
else {E+=L;H+=L;}
;if(H<G.minWidth){E+=(G.minWidth-H);H=G.minWidth;}
else if(E>G.maxWidth){E-=(H-G.maxWidth);H=G.maxWidth;}
;if(F&this.RESIZE_LEFT){N+=J.containerWidth-H;}
;}
;return {viewportLeft:N,viewportTop:top,parentLeft:J.bounds.left+N-J.left,parentTop:J.bounds.top+top-J.top,containerWidth:H,containerHeight:M,width:E,height:I};}
,__qa:{'1':h,'2':p,'4':j,'8':b,'5':v,'6':i,'9':f,'10':d},__qb:function(){var O=this.getDecoratorElement();if(O&&O.getDomElement()){return qx.bom.element.Location.get(O.getDomElement());}
else {return this.getContentLocation();}
;}
,__qc:function(e){var location=this.__qb();var P=this.getResizeSensitivity();var S=e.getDocumentLeft();var R=e.getDocumentTop();var Q=this.__qd(location,S,R,P);if(Q>0){Q=Q|this.__qd(location,S,R,P*2);}
;this.__pS=Q;}
,__qd:function(location,T,U,V){var W=0;if(this.getResizableTop()&&Math.abs(location.top-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_TOP;}
else if(this.getResizableBottom()&&Math.abs(location.bottom-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_BOTTOM;}
;if(this.getResizableLeft()&&Math.abs(location.left-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_LEFT;}
else if(this.getResizableRight()&&Math.abs(location.right-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_RIGHT;}
;return W;}
,__qe:function(e){if(!this.__pS||!this.getEnabled()){return;}
;this.addState(l);this.__pT=e.getDocumentLeft();this.__pU=e.getDocumentTop();var bb=this.getContainerLocation();var X=this.__qb();var ba=this.getBounds();this.__pV={top:X.top,left:X.left,containerWidth:bb.right-bb.left,containerHeight:bb.bottom-bb.top,width:X.right-X.left,height:X.bottom-X.top,bounds:qx.lang.Object.clone(ba)};var parent=this.getLayoutParent();var bc=parent.getContentLocation();var Y=parent.getBounds();this.__pW={left:bc.left,top:bc.top,right:bc.left+Y.width,bottom:bc.top+Y.height};if(this.getUseResizeFrame()){this.__pX();}
;this.capture();e.stop();}
,__qf:function(e){if(!this.hasState(l)||!this.getEnabled()){return;}
;if(this.getUseResizeFrame()){this._getResizeFrame().exclude();}
;var bd=this.__pY(e);this.setWidth(bd.containerWidth);this.setHeight(bd.containerHeight);if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bd.parentLeft,top:bd.parentTop});}
;this.__pS=0;this.removeState(l);this.resetCursor();this.getApplicationRoot().resetGlobalCursor();this.releaseCapture();e.stopPropagation();}
,__qg:function(e){if(!this.__pS){return;}
;this.resetCursor();this.getApplicationRoot().resetGlobalCursor();this.removeState(y);if(this.getUseResizeFrame()){this._getResizeFrame().exclude();}
;}
,__qh:function(e){if(!this.getEnabled()){return;}
;if(this.hasState(l)){var bh=this.__pY(e);if(this.getUseResizeFrame()){var bf=this._getResizeFrame();bf.setUserBounds(bh.viewportLeft,bh.viewportTop,bh.width,bh.height);}
else {this.setWidth(bh.containerWidth);this.setHeight(bh.containerHeight);if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bh.parentLeft,top:bh.parentTop});}
;}
;e.stopPropagation();}
else if(!this.hasState(w)&&!this.__pQ.isSessionActive()){this.__qc(e);var bi=this.__pS;var bg=this.getApplicationRoot();if(bi){var be=this.__qa[bi];this.setCursor(be);bg.setGlobalCursor(be);}
else if(this.getCursor()){this.resetCursor();bg.resetGlobalCursor();}
;}
;}
,__qi:function(e){if(this.getCursor()&&!this.hasState(l)){this.resetCursor();this.getApplicationRoot().resetGlobalCursor();}
;}
},destruct:function(){if(this.__pR!=null&&!qx.core.ObjectRegistry.inShutDown){this.__pR.destroy();this.__pR=null;}
;this.__pQ=null;}
});}
)();
(function(){var k="beforeClose",j="beforeMinimize",i="mousedown",h="window-resize-frame",g="changeStatus",f="changeIcon",d="excluded",c="_applyModal",b="dblclick",a="_applyActive",Y="beforeRestore",X="qx.ui.window.IDesktop. All root widgets implement this interface.",W="minimize",V="changeModal",U="changeAlwaysOnTop",T="_applyShowStatusbar",S="_applyStatus",R="qx.ui.window.Window",Q="Windows can only be added to widgets, which implement the interface ",P="changeCaption",r="focusout",s="beforeMaximize",p="maximize",q="restore",n="window",o="close",l="changeActive",m="Centering depends on parent bounds!",v="minimized",w="qx.debug",D="active",B="String",H="modal",F="normal",L="statusbar",J="statusbar-text",y="execute",O="title",N="icon",M="showStatusbar",x="pane",z="minimize-button",A="close-button",C="maximized",E="restore-button",G="maximize-button",I="qx.event.type.Event",K="captionbar",t="_applyCaptionBarChange",u="Boolean";qx.Class.define(R,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(ba,bb){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.VBox());this._createChildControl(K);this._createChildControl(x);if(bb!=null){this.setIcon(bb);}
;if(ba!=null){this.setCaption(ba);}
;this._updateCaptionBar();this.addListener(i,this._onWindowMouseDown,this,true);this.addListener(r,this._onWindowFocusOut,this);qx.core.Init.getApplication().getRoot().add(this);this.initVisibility();qx.ui.core.FocusHandler.getInstance().addRoot(this);this._getResizeFrame().setAppearance(h);}
,statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":I,"close":I,"beforeMinimize":I,"minimize":I,"beforeMaximize":I,"maximize":I,"beforeRestore":I,"restore":I},properties:{appearance:{refine:true,init:n},visibility:{refine:true,init:d},focusable:{refine:true,init:true},active:{check:u,init:false,apply:a,event:l},alwaysOnTop:{check:u,init:false,event:U},modal:{check:u,init:false,event:V,apply:c},caption:{apply:t,event:P,nullable:true},icon:{check:B,nullable:true,apply:t,event:f,themeable:true},status:{check:B,nullable:true,apply:S,event:g},showClose:{check:u,init:true,apply:t,themeable:true},showMaximize:{check:u,init:true,apply:t,themeable:true},showMinimize:{check:u,init:true,apply:t,themeable:true},allowClose:{check:u,init:true,apply:t},allowMaximize:{check:u,init:true,apply:t},allowMinimize:{check:u,init:true,apply:t},showStatusbar:{check:u,init:false,apply:T}},members:{__qj:null,__qk:null,getChildrenContainer:function(){return this.getChildControl(x);}
,_forwardStates:{active:true,maximized:true,showStatusbar:true,modal:true},setLayoutParent:function(parent){if(qx.core.Environment.get(w)){parent&&this.assertInterface(parent,qx.ui.window.IDesktop,Q+X);}
;qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);}
,_createChildControlImpl:function(bc,bd){var be;switch(bc){case L:be=new qx.ui.container.Composite(new qx.ui.layout.HBox());this._add(be);be.add(this.getChildControl(J));break;case J:be=new qx.ui.basic.Label();be.setValue(this.getStatus());break;case x:be=new qx.ui.container.Composite();this._add(be,{flex:1});break;case K:var bg=new qx.ui.layout.Grid();bg.setRowFlex(0,1);bg.setColumnFlex(1,1);be=new qx.ui.container.Composite(bg);this._add(be);be.addListener(b,this._onCaptionMouseDblClick,this);this._activateMoveHandle(be);break;case N:be=new qx.ui.basic.Image(this.getIcon());this.getChildControl(K).add(be,{row:0,column:0});break;case O:be=new qx.ui.basic.Label(this.getCaption());be.setWidth(0);be.setAllowGrowX(true);var bf=this.getChildControl(K);bf.add(be,{row:0,column:1});break;case z:be=new qx.ui.form.Button();be.setFocusable(false);be.addListener(y,this._onMinimizeButtonClick,this);this.getChildControl(K).add(be,{row:0,column:2});break;case E:be=new qx.ui.form.Button();be.setFocusable(false);be.addListener(y,this._onRestoreButtonClick,this);this.getChildControl(K).add(be,{row:0,column:3});break;case G:be=new qx.ui.form.Button();be.setFocusable(false);be.addListener(y,this._onMaximizeButtonClick,this);this.getChildControl(K).add(be,{row:0,column:4});break;case A:be=new qx.ui.form.Button();be.setFocusable(false);be.addListener(y,this._onCloseButtonClick,this);this.getChildControl(K).add(be,{row:0,column:6});break;};return be||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bc);}
,_updateCaptionBar:function(){var bi;var bj=this.getIcon();if(bj){this.getChildControl(N).setSource(bj);this._showChildControl(N);}
else {this._excludeChildControl(N);}
;var bh=this.getCaption();if(bh){this.getChildControl(O).setValue(bh);this._showChildControl(O);}
else {this._excludeChildControl(O);}
;if(this.getShowMinimize()){this._showChildControl(z);bi=this.getChildControl(z);this.getAllowMinimize()?bi.resetEnabled():bi.setEnabled(false);}
else {this._excludeChildControl(z);}
;if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(E);this._excludeChildControl(G);}
else {this._showChildControl(G);this._excludeChildControl(E);}
;bi=this.getChildControl(G);this.getAllowMaximize()?bi.resetEnabled():bi.setEnabled(false);}
else {this._excludeChildControl(G);this._excludeChildControl(E);}
;if(this.getShowClose()){this._showChildControl(A);bi=this.getChildControl(A);this.getAllowClose()?bi.resetEnabled():bi.setEnabled(false);}
else {this._excludeChildControl(A);}
;}
,close:function(){if(!this.isVisible()){return;}
;if(this.fireNonBubblingEvent(k,qx.event.type.Event,[false,true])){this.hide();this.fireEvent(o);}
;}
,open:function(){this.show();this.setActive(true);this.focus();}
,center:function(){var parent=this.getLayoutParent();if(parent){var bl=parent.getBounds();if(bl){var bm=this.getSizeHint();var bk=Math.round((bl.width-bm.width)/2);var top=Math.round((bl.height-bm.height)/2);if(top<0){top=0;}
;this.moveTo(bk,top);return;}
;}
;if(qx.core.Environment.get(w)){this.warn(m);}
;}
,maximize:function(){if(this.isMaximized()){return;}
;var parent=this.getLayoutParent();if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(s,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();}
;var bn=this.getLayoutProperties();this.__qk=bn.left===undefined?0:bn.left;this.__qj=bn.top===undefined?0:bn.top;this.setLayoutProperties({left:null,top:null,edge:0});this.addState(C);this._updateCaptionBar();this.fireEvent(p);}
;}
;}
,minimize:function(){if(!this.isVisible()){return;}
;if(this.fireNonBubblingEvent(j,qx.event.type.Event,[false,true])){var bo=this.getLayoutProperties();this.__qk=bo.left===undefined?0:bo.left;this.__qj=bo.top===undefined?0:bo.top;this.removeState(C);this.hide();this.fireEvent(W);}
;}
,restore:function(){if(this.getMode()===F){return;}
;if(this.fireNonBubblingEvent(Y,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();}
;var bp=this.__qk;var top=this.__qj;this.setLayoutProperties({edge:null,left:bp,top:top});this.removeState(C);this._updateCaptionBar();this.fireEvent(q);}
;}
,moveTo:function(bq,top){if(this.isMaximized()){return;}
;this.setLayoutProperties({left:bq,top:top});}
,isMaximized:function(){return this.hasState(C);}
,getMode:function(){if(!this.isVisible()){return v;}
else {if(this.isMaximized()){return C;}
else {return F;}
;}
;}
,_applyActive:function(br,bs){if(bs){this.removeState(D);}
else {this.addState(D);}
;}
,_applyModal:function(bt,bu){if(bu){this.removeState(H);}
else {this.addState(H);}
;}
,_getContentPaddingTarget:function(){return this.getChildControl(x);}
,_applyShowStatusbar:function(bv,bw){var bx=this._getResizeFrame();if(bv){this.addState(M);bx.addState(M);}
else {this.removeState(M);bx.removeState(M);}
;if(bv){this._showChildControl(L);}
else {this._excludeChildControl(L);}
;}
,_applyCaptionBarChange:function(by,bz){this._updateCaptionBar();}
,_applyStatus:function(bA,bB){var bC=this.getChildControl(J,true);if(bC){bC.setValue(bA);}
;}
,_onWindowEventStop:function(e){e.stopPropagation();}
,_onWindowMouseDown:function(e){this.setActive(true);}
,_onWindowFocusOut:function(e){if(this.getModal()){return;}
;var bD=e.getRelatedTarget();if(bD!=null&&!qx.ui.core.Widget.contains(this,bD)){this.setActive(false);}
;}
,_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();}
;}
,_onMinimizeButtonClick:function(e){this.minimize();this.getChildControl(z).reset();}
,_onRestoreButtonClick:function(e){this.restore();this.getChildControl(E).reset();}
,_onMaximizeButtonClick:function(e){this.maximize();this.getChildControl(G).reset();}
,_onCloseButtonClick:function(e){this.close();this.getChildControl(A).reset();}
}});}
)();
(function(){var h="Number",g="qx.event.type.Event",f="_applyFirstColumnX",e="Integer",d="qx.ui.table.pane.Model",c="_applyMaxColumnCount",b="headerCellRendererChanged",a="visibilityChangedPre";qx.Class.define(d,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);this.setTableColumnModel(i);}
,events:{"modelChanged":g},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:e,init:0,apply:f},maxColumnCount:{check:h,init:-1,apply:c}},members:{__ql:null,__qm:null,_applyFirstColumnX:function(j,k){this.__ql=null;this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);}
,_applyMaxColumnCount:function(l,m){this.__ql=null;this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);}
,setTableColumnModel:function(n){if(this.__qm){this.__qm.removeListener(a,this._onColVisibilityChanged,this);this.__qm.removeListener(b,this._onColVisibilityChanged,this);}
;this.__qm=n;this.__qm.addListener(a,this._onColVisibilityChanged,this);this.__qm.addListener(b,this._onHeaderCellRendererChanged,this);this.__ql=null;}
,_onColVisibilityChanged:function(o){this.__ql=null;this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);}
,_onHeaderCellRendererChanged:function(p){this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);}
,getColumnCount:function(){if(this.__ql==null){var q=this.getFirstColumnX();var s=this.getMaxColumnCount();var r=this.__qm.getVisibleColumnCount();if(s==-1||(q+s)>r){this.__ql=r-q;}
else {this.__ql=s;}
;}
;return this.__ql;}
,getColumnAtX:function(t){var u=this.getFirstColumnX();return this.__qm.getVisibleColumnAtX(u+t);}
,getX:function(v){var w=this.getFirstColumnX();var y=this.getMaxColumnCount();var x=this.__qm.getVisibleX(v)-w;if(x>=0&&(y==-1||x<y)){return x;}
else {return -1;}
;}
,getColumnLeft:function(z){var C=0;var B=this.getColumnCount();for(var x=0;x<B;x++){var A=this.getColumnAtX(x);if(A==z){return C;}
;C+=this.__qm.getColumnWidth(A);}
;return -1;}
,getTotalWidth:function(){var D=0;var E=this.getColumnCount();for(var x=0;x<E;x++){var F=this.getColumnAtX(x);D+=this.__qm.getColumnWidth(F);}
;return D;}
},destruct:function(){if(this.__qm){this.__qm.removeListener(a,this._onColVisibilityChanged,this);this.__qm.removeListener(b,this._onColVisibilityChanged,this);}
;this.__qm=null;}
});}
)();
(function(){var c="qx.event.type.Event",b="qx.ui.table.ITableModel",a="qx.event.type.Data";qx.Interface.define(b,{events:{"dataChanged":a,"metaDataChanged":c,"sorted":a},members:{getRowCount:function(){}
,getRowData:function(d){}
,getColumnCount:function(){}
,getColumnId:function(e){}
,getColumnIndexById:function(f){}
,getColumnName:function(g){}
,isColumnEditable:function(h){}
,isColumnSortable:function(i){}
,sortByColumn:function(j,k){}
,getSortColumnIndex:function(){}
,isSortAscending:function(){}
,prefetchRows:function(l,m){}
,getValue:function(n,o){}
,getValueById:function(p,q){}
,setValue:function(r,s,t){}
,setValueById:function(u,v,w){}
}});}
)();
(function(){var l="abstract",k="columnIdArr and columnNameArr have different length: ",j="getValue is abstract",h="qx.ui.table.model.Abstract",g="qx.event.type.Event",f="this.__columnIdArr and columnNameArr have different length: ",e="setValue is abstract",d="getRowCount is abstract",c=" != ",b="metaDataChanged",a="qx.event.type.Data";qx.Class.define(h,{type:l,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":a,"metaDataChanged":g,"sorted":a},construct:function(){qx.core.Object.call(this);this.__mS=[];this.__mT=[];this.__mU={};}
,members:{__mS:null,__mT:null,__mU:null,__mV:null,init:function(m){}
,getRowCount:function(){throw new Error(d);}
,getRowData:function(n){return null;}
,isColumnEditable:function(o){return false;}
,isColumnSortable:function(p){return false;}
,sortByColumn:function(q,r){}
,getSortColumnIndex:function(){return -1;}
,isSortAscending:function(){return true;}
,prefetchRows:function(s,t){}
,getValue:function(u,v){throw new Error(j);}
,getValueById:function(w,x){return this.getValue(this.getColumnIndexById(w),x);}
,setValue:function(y,z,A){throw new Error(e);}
,setValueById:function(B,C,D){this.setValue(this.getColumnIndexById(B),C,D);}
,getColumnCount:function(){return this.__mS.length;}
,getColumnIndexById:function(E){return this.__mU[E];}
,getColumnId:function(F){return this.__mS[F];}
,getColumnName:function(G){return this.__mT[G];}
,setColumnIds:function(H){this.__mS=H;this.__mU={};for(var i=0;i<H.length;i++){this.__mU[H[i]]=i;}
;this.__mT=new Array(H.length);if(!this.__mV){this.fireEvent(b);}
;}
,setColumnNamesByIndex:function(I){if(this.__mS.length!=I.length){throw new Error(f+this.__mS.length+c+I.length);}
;this.__mT=I;this.fireEvent(b);}
,setColumnNamesById:function(J){this.__mT=new Array(this.__mS.length);for(var i=0;i<this.__mS.length;++i){this.__mT[i]=J[this.__mS[i]];}
;}
,setColumns:function(K,L){var M=this.__mS.length==0||L;if(L==null){if(this.__mS.length==0){L=K;}
else {L=this.__mS;}
;}
;if(L.length!=K.length){throw new Error(k+L.length+c+K.length);}
;if(M){this.__mV=true;this.setColumnIds(L);this.__mV=false;}
;this.setColumnNamesByIndex(K);}
},destruct:function(){this.__mS=this.__mT=this.__mU=null;}
});}
)();
(function(){var h="qx.ui.table.model.Simple",g="Boolean",f="this.__rowArr out of bounds: ",e=")",d=" (0..",c="sorted",b="metaDataChanged",a="dataChanged";qx.Class.define(h,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);this.__mW=[];this.__mX=-1;this.__mY=[];this.__na=null;}
,properties:{caseSensitiveSorting:{check:g,init:true}},statics:{_defaultSortComparatorAscending:function(k,l){var m=k[arguments.callee.columnIndex];var n=l[arguments.callee.columnIndex];if(qx.lang.Type.isNumber(m)&&qx.lang.Type.isNumber(n)){var o=isNaN(m)?isNaN(n)?0:1:isNaN(n)?-1:null;if(o!=null){return o;}
;}
;return (m>n)?1:((m==n)?0:-1);}
,_defaultSortComparatorInsensitiveAscending:function(p,q){var r=(p[arguments.callee.columnIndex].toLowerCase?p[arguments.callee.columnIndex].toLowerCase():p[arguments.callee.columnIndex]);var s=(q[arguments.callee.columnIndex].toLowerCase?q[arguments.callee.columnIndex].toLowerCase():q[arguments.callee.columnIndex]);if(qx.lang.Type.isNumber(r)&&qx.lang.Type.isNumber(s)){var t=isNaN(r)?isNaN(s)?0:1:isNaN(s)?-1:null;if(t!=null){return t;}
;}
;return (r>s)?1:((r==s)?0:-1);}
,_defaultSortComparatorDescending:function(u,v){var w=u[arguments.callee.columnIndex];var x=v[arguments.callee.columnIndex];if(qx.lang.Type.isNumber(w)&&qx.lang.Type.isNumber(x)){var y=isNaN(w)?isNaN(x)?0:1:isNaN(x)?-1:null;if(y!=null){return y;}
;}
;return (w<x)?1:((w==x)?0:-1);}
,_defaultSortComparatorInsensitiveDescending:function(z,A){var B=(z[arguments.callee.columnIndex].toLowerCase?z[arguments.callee.columnIndex].toLowerCase():z[arguments.callee.columnIndex]);var C=(A[arguments.callee.columnIndex].toLowerCase?A[arguments.callee.columnIndex].toLowerCase():A[arguments.callee.columnIndex]);if(qx.lang.Type.isNumber(B)&&qx.lang.Type.isNumber(C)){var D=isNaN(B)?isNaN(C)?0:1:isNaN(C)?-1:null;if(D!=null){return D;}
;}
;return (B<C)?1:((B==C)?0:-1);}
},members:{__mW:null,__na:null,__nb:null,__mY:null,__mX:null,__nc:null,getRowData:function(E){var F=this.__mW[E];if(F==null||F.originalData==null){return F;}
else {return F.originalData;}
;}
,getRowDataAsMap:function(G){var I=this.__mW[G];if(I!=null){var H={};for(var J=0;J<this.getColumnCount();J++){H[this.getColumnId(J)]=I[J];}
;if(I.originalData!=null){for(var K in I.originalData){if(H[K]==undefined){H[K]=I.originalData[K];}
;}
;}
;return H;}
;return (I&&I.originalData)?I.originalData:null;}
,getDataAsMapArray:function(){var M=this.getRowCount();var L=[];for(var i=0;i<M;i++){L.push(this.getRowDataAsMap(i));}
;return L;}
,setEditable:function(N){this.__na=[];for(var O=0;O<this.getColumnCount();O++){this.__na[O]=N;}
;this.fireEvent(b);}
,setColumnEditable:function(P,Q){if(Q!=this.isColumnEditable(P)){if(this.__na==null){this.__na=[];}
;this.__na[P]=Q;this.fireEvent(b);}
;}
,isColumnEditable:function(R){return this.__na?(this.__na[R]==true):false;}
,setColumnSortable:function(S,T){if(T!=this.isColumnSortable(S)){if(this.__nb==null){this.__nb=[];}
;this.__nb[S]=T;this.fireEvent(b);}
;}
,isColumnSortable:function(U){return (this.__nb?(this.__nb[U]!==false):true);}
,sortByColumn:function(V,W){var ba;var Y=this.__mY[V];if(Y){ba=(W?Y.ascending:Y.descending);}
else {if(this.getCaseSensitiveSorting()){ba=(W?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);}
else {ba=(W?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);}
;}
;ba.columnIndex=V;this.__mW.sort(ba);this.__mX=V;this.__nc=W;var X={columnIndex:V,ascending:W};this.fireDataEvent(c,X);this.fireEvent(b);}
,setSortMethods:function(bb,bc){var bd;if(qx.lang.Type.isFunction(bc)){bd={ascending:bc,descending:function(be,bf){return bc(bf,be);}
};}
else {bd=bc;}
;this.__mY[bb]=bd;}
,getSortMethods:function(bg){return this.__mY[bg];}
,clearSorting:function(){if(this.__mX!=-1){this.__mX=-1;this.__nc=true;this.fireEvent(b);}
;}
,getSortColumnIndex:function(){return this.__mX;}
,_setSortColumnIndex:function(bh){this.__mX=bh;}
,isSortAscending:function(){return this.__nc;}
,_setSortAscending:function(bi){this.__nc=bi;}
,getRowCount:function(){return this.__mW.length;}
,getValue:function(bj,bk){if(bk<0||bk>=this.__mW.length){throw new Error(f+bk+d+this.__mW.length+e);}
;return this.__mW[bk][bj];}
,setValue:function(bl,bm,bn){if(this.__mW[bm][bl]!=bn){this.__mW[bm][bl]=bn;if(this.hasListener(a)){var bo={firstRow:bm,lastRow:bm,firstColumn:bl,lastColumn:bl};this.fireDataEvent(a,bo);}
;if(bl==this.__mX){this.clearSorting();}
;}
;}
,setData:function(bp,bq){this.__mW=bp;if(this.hasListener(a)){var br={firstRow:0,lastRow:bp.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};this.fireDataEvent(a,br);}
;if(bq!==false){this.clearSorting();}
;}
,getData:function(){return this.__mW;}
,setDataAsMapArray:function(bs,bt,bu){this.setData(this._mapArray2RowArr(bs,bt),bu);}
,addRows:function(bv,bw,bx){if(bw==null){bw=this.__mW.length;}
;bv.splice(0,0,bw,0);Array.prototype.splice.apply(this.__mW,bv);var by={firstRow:bw,lastRow:this.__mW.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};this.fireDataEvent(a,by);if(bx!==false){this.clearSorting();}
;}
,addRowsAsMapArray:function(bz,bA,bB,bC){this.addRows(this._mapArray2RowArr(bz,bB),bA,bC);}
,setRows:function(bD,bE,bF){if(bE==null){bE=0;}
;bD.splice(0,0,bE,bD.length);Array.prototype.splice.apply(this.__mW,bD);var bG={firstRow:bE,lastRow:this.__mW.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};this.fireDataEvent(a,bG);if(bF!==false){this.clearSorting();}
;}
,setRowsAsMapArray:function(bH,bI,bJ,bK){this.setRows(this._mapArray2RowArr(bH,bJ),bI,bK);}
,removeRows:function(bL,bM,bN){this.__mW.splice(bL,bM);var bO={firstRow:bL,lastRow:this.__mW.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bL,removeCount:bM};this.fireDataEvent(a,bO);if(bN!==false){this.clearSorting();}
;}
,_mapArray2RowArr:function(bP,bQ){var bU=bP.length;var bR=this.getColumnCount();var bT=new Array(bU);var bS;for(var i=0;i<bU;++i){bS=[];if(bQ){bS.originalData=bP[i];}
;for(var j=0;j<bR;++j){bS[j]=bP[i][this.getColumnId(j)];}
;bT[i]=bS;}
;return bT;}
},destruct:function(){this.__mW=this.__na=this.__mY=this.__nb=null;}
});}
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
(function(){var j="backgroundPositionX",i='</div>',h="engine.version",g="scale",f="browser.quirksmode",e='<div style="',d="qx.debug",c="repeat-y",b="hidden",a="qx.ui.decoration.MBackgroundImage",v="String",u="backgroundPositionY",t='">',s="mshtml",r="engine.name",q="This decorator is already in-use. Modification is not possible anymore!",p="no-repeat",o=" ",n="repeat-x",m="repeat",k="",l="_applyBackgroundImage";qx.Mixin.define(a,{properties:{backgroundImage:{check:v,nullable:true,apply:l},backgroundRepeat:{check:[m,n,c,p,g],init:m,apply:l},backgroundPositionX:{nullable:true,apply:l},backgroundPositionY:{nullable:true,apply:l},backgroundPosition:{group:[u,j]}},members:{_generateMarkup:this._generateBackgroundMarkup,_generateBackgroundMarkup:function(w,content){var A=k;var z=this.getBackgroundImage();var y=this.getBackgroundRepeat();var top=this.getBackgroundPositionY();if(top==null){top=0;}
;var B=this.getBackgroundPositionX();if(B==null){B=0;}
;w.backgroundPosition=B+o+top;if(z){var x=qx.util.AliasManager.getInstance().resolve(z);A=qx.bom.element.Decoration.create(x,y,w);}
else {if((qx.core.Environment.get(r)==s)){if(parseFloat(qx.core.Environment.get(h))<7||qx.core.Environment.get(f)){w.overflow=b;}
;}
;if(!content){content=k;}
;A=e+qx.bom.element.Style.compile(w)+t+content+i;}
;return A;}
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
(function(){var j="innerWidthRight",i="top",h="innerColorBottom",g="innerWidthTop",f="innerColorRight",e="innerColorTop",d="relative",c="browser.documentmode",b="innerColorLeft",a="",H="qx.ui.decoration.MDoubleBorder",G="left",F="Invalid Double decorator (zero inner border width). Use qx.ui.decoration.Single instead!",E="engine.version",D="innerWidthBottom",C="innerWidthLeft",B="position",A="Invalid Double decorator (zero outer border width). Use qx.ui.decoration.Single instead!",z="absolute",y="qx.theme",q="qx.debug",r="shorthand",o="line-height",p="engine.name",m="mshtml",n="Color",k="Number",l="border-top",s="border-left",t="border-bottom",v="border-right",u="px ",x=" ",w='';qx.Mixin.define(H,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__sh;this._resizeBorder=this.__sg;this._styleBorder=this.__se;this._generateMarkup=this.__sf;}
,properties:{innerWidthTop:{check:k,init:0},innerWidthRight:{check:k,init:0},innerWidthBottom:{check:k,init:0},innerWidthLeft:{check:k,init:0},innerWidth:{group:[g,j,D,C],mode:r},innerColorTop:{nullable:true,check:n},innerColorRight:{nullable:true,check:n},innerColorBottom:{nullable:true,check:n},innerColorLeft:{nullable:true,check:n},innerColor:{group:[e,f,h,b],mode:r}},members:{__sd:null,__se:function(I){if(qx.core.Environment.get(y)){var K=qx.theme.manager.Color.getInstance();var L=K.resolve(this.getInnerColorTop());var O=K.resolve(this.getInnerColorRight());var M=K.resolve(this.getInnerColorBottom());var N=K.resolve(this.getInnerColorLeft());}
else {var L=this.getInnerColorTop();var O=this.getInnerColorRight();var M=this.getInnerColorBottom();var N=this.getInnerColorLeft();}
;I.position=d;var J=this.getInnerWidthTop();if(J>0){I[l]=J+u+this.getStyleTop()+x+L;}
;var J=this.getInnerWidthRight();if(J>0){I[v]=J+u+this.getStyleRight()+x+O;}
;var J=this.getInnerWidthBottom();if(J>0){I[t]=J+u+this.getStyleBottom()+x+M;}
;var J=this.getInnerWidthLeft();if(J>0){I[s]=J+u+this.getStyleLeft()+x+N;}
;if(qx.core.Environment.get(q)){if(!I[l]&&!I[v]&&!I[t]&&!I[s]){throw new Error(F);}
;}
;}
,__sf:function(P){var T=this._generateBackgroundMarkup(P,this._getContent?this._getContent():a);if(qx.core.Environment.get(y)){var R=qx.theme.manager.Color.getInstance();var W=R.resolve(this.getColorTop());var S=R.resolve(this.getColorRight());var Q=R.resolve(this.getColorBottom());var V=R.resolve(this.getColorLeft());}
else {var W=this.getColorTop();var S=this.getColorRight();var Q=this.getColorBottom();var V=this.getColorLeft();}
;P[l]=w;P[v]=w;P[t]=w;P[s]=w;P[o]=0;if((qx.core.Environment.get(p)==m&&parseFloat(qx.core.Environment.get(E))<8)||(qx.core.Environment.get(p)==m&&qx.core.Environment.get(c)<8)){P[o]=w;}
;var U=this.getWidthTop();if(U>0){P[l]=U+u+this.getStyleTop()+x+W;}
;var U=this.getWidthRight();if(U>0){P[v]=U+u+this.getStyleRight()+x+S;}
;var U=this.getWidthBottom();if(U>0){P[t]=U+u+this.getStyleBottom()+x+Q;}
;var U=this.getWidthLeft();if(U>0){P[s]=U+u+this.getStyleLeft()+x+V;}
;if(qx.core.Environment.get(q)){if(P[l]==w&&P[v]==w&&P[t]==w&&P[s]==w){throw new Error(A);}
;}
;P[B]=z;P[i]=0;P[G]=0;return this.__sd=this._generateBackgroundMarkup(P,T);}
,__sg:function(X,Y,ba){var bb=this.getInsets();Y-=bb.left+bb.right;ba-=bb.top+bb.bottom;var bc=bb.left-this.getWidthLeft()-this.getInnerWidthLeft();var top=bb.top-this.getWidthTop()-this.getInnerWidthTop();return {left:bc,top:top,width:Y,height:ba,elementToApplyDimensions:X.firstChild};}
,__sh:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};}
}});}
)();
(function(){var e="qx.ui.decoration.Double",d="css.boxmodel",c="content",b="scale",a="px";qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MDoubleBorder],construct:function(f,g,h,innerWidth,i){qx.ui.decoration.Abstract.call(this);if(f!=null){this.setWidth(f);}
;if(g!=null){this.setStyle(g);}
;if(h!=null){this.setColor(h);}
;if(innerWidth!=null){this.setInnerWidth(innerWidth);}
;if(i!=null){this.setInnerColor(i);}
;}
,members:{__BI:null,_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();}
,_isInitialized:function(){return !!this.__BI;}
,getMarkup:function(){if(this.__BI){return this.__BI;}
;var j={};this._styleBorder(j);return this.__BI=this._generateMarkup(j);}
,resize:function(k,l,m){var r=this.getBackgroundImage()&&this.getBackgroundRepeat()==b;var p=this.getInsets();if(r||qx.core.Environment.get(d)==c){var innerWidth=l-p.left-p.right;var innerHeight=m-p.top-p.bottom;}
else {var n=p.top-this.getInnerWidthTop();var s=p.bottom-this.getInnerWidthBottom();var o=p.left-this.getInnerWidthLeft();var q=p.right-this.getInnerWidthRight();var innerWidth=l-o-q;var innerHeight=m-n-s;}
;if(innerWidth<0){innerWidth=0;}
;if(innerHeight<0){innerHeight=0;}
;if(k.firstChild){k.firstChild.style.width=innerWidth+a;k.firstChild.style.height=innerHeight+a;}
;k.style.left=(p.left-this.getWidthLeft()-this.getInnerWidthLeft())+a;k.style.top=(p.top-this.getWidthTop()-this.getInnerWidthTop())+a;}
,tint:function(t,u){this._tintBackgroundColor(t,u,t.style);}
},destruct:function(){this.__BI=null;}
});}
)();
(function(){var a="qx.ui.decoration.Uniform";qx.Class.define(a,{extend:qx.ui.decoration.Single,construct:function(b,c,d){qx.ui.decoration.Single.call(this);if(b!=null){this.setWidth(b);}
;if(c!=null){this.setStyle(c);}
;if(d!=null){this.setColor(d);}
;}
});}
)();
(function(){var r="sliceBottom",q="qx.debug.dispose",p="insetTop",o="sliceLeft",n="_applyBaseImage",m="insetBottom",l="sliceRight",k="_applyFill",j="sliceTop",i="insetLeft",c="String",h="qx.ui.decoration.Grid",f="insetRight",b="set",a="shorthand",e="_applyInsets",d="_applySlices",g="Number";qx.Class.define(h,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(s,t){qx.core.Object.call(this);if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__BF=new qx.ui.decoration.css3.BorderImage();if(s){this.__BG(s);}
;}
else {this.__BF=new qx.ui.decoration.GridDiv(s);}
;if(t!=null){this.__BF.setInsets(t);}
;if(qx.core.Environment.get(q)){this.__BF.$$ignoreDisposeWarning=true;}
;}
,properties:{baseImage:{check:c,nullable:true,apply:n},insetLeft:{check:g,nullable:true,apply:e},insetRight:{check:g,nullable:true,apply:e},insetBottom:{check:g,nullable:true,apply:e},insetTop:{check:g,nullable:true,apply:e},insets:{group:[p,f,m,i],mode:a},sliceLeft:{check:g,nullable:true,apply:d},sliceRight:{check:g,nullable:true,apply:d},sliceBottom:{check:g,nullable:true,apply:d},sliceTop:{check:g,nullable:true,apply:d},slices:{group:[j,l,r,o],mode:a},fill:{apply:k}},members:{__BF:null,getMarkup:function(){return this.__BF.getMarkup();}
,resize:function(u,v,w){this.__BF.resize(u,v,w);}
,tint:function(x,y){}
,getInsets:function(){return this.__BF.getInsets();}
,_applyInsets:function(z,A,name){var B=b+qx.lang.String.firstUp(name);this.__BF[B](z);}
,_applySlices:function(C,D,name){var E=b+qx.lang.String.firstUp(name);if(this.__BF[E]){this.__BF[E](C);}
;}
,_applyFill:function(F,G,name){if(this.__BF.setFill){this.__BF.setFill(F);}
;}
,_applyBaseImage:function(H,I){if(this.__BF instanceof qx.ui.decoration.GridDiv){this.__BF.setBaseImage(H);}
else {this.__BG(H);}
;}
,__BG:function(J){this.__BF.setBorderImage(J);var T=qx.util.AliasManager.getInstance().resolve(J);var U=/(.*)(\.[a-z]+)$/.exec(T);var P=U[1];var S=U[2];var M=qx.util.ResourceManager.getInstance();var V=M.getImageHeight(P+"-t"+S);var K=M.getImageWidth(P+"-r"+S);var L=M.getImageHeight(P+"-b"+S);var W=M.getImageWidth(P+"-l"+S);if(qx.core.Environment.get("qx.debug")&&!this.__BF instanceof qx.ui.decoration.css3.BorderImage){var N="The value of the property 'topSlice' is null! "+"Please verify the image '"+P+"-t"+S+"' is present.";var O="The value of the property 'rightSlice' is null! "+"Please verify the image '"+P+"-r"+S+"' is present.";var R="The value of the property 'bottomSlice' is null! "+"Please verify the image '"+P+"-b"+S+"' is present.";var Q="The value of the property 'leftSlice' is null! "+"Please verify the image '"+P+"-l"+S+"' is present.";qx.core.Assert.assertNotNull(V,N);qx.core.Assert.assertNotNull(K,O);qx.core.Assert.assertNotNull(L,R);qx.core.Assert.assertNotNull(W,Q);}
;if(V&&K&&L&&W){this.__BF.setSlice([V,K,L,W]);}
;}
},destruct:function(){this.__BF.dispose();this.__BF=null;}
});}
)();
(function(){var j="css.borderimage.standardsyntax",i="Boolean",h="px ",g="sliceBottom",f="solid",e=";'></div>",d="<div style='",c="qx.debug",b="sliceLeft",a="sliceRight",F="repeatX",E=" fill",D="String",C="qx.ui.decoration.css3.BorderImage",B="border-box",A="transparent",z='") ',y="sliceTop",x="This decorator is already in-use. Modification is not possible anymore!",w='url("',q="hidden",r="repeatY",o="absolute",p="repeat",m="",n="round",k="shorthand",l="px",s=" ",t="stretch",v="Integer",u="_applyStyle";qx.Class.define(C,{extend:qx.ui.decoration.Abstract,construct:function(G,H){qx.ui.decoration.Abstract.call(this);if(G!=null){this.setBorderImage(G);}
;if(H!=null){this.setSlice(H);}
;}
,statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:D,nullable:true,apply:u},sliceTop:{check:v,init:0,apply:u},sliceRight:{check:v,init:0,apply:u},sliceBottom:{check:v,init:0,apply:u},sliceLeft:{check:v,init:0,apply:u},slice:{group:[y,a,g,b],mode:k},repeatX:{check:[t,p,n],init:t,apply:u},repeatY:{check:[t,p,n],init:t,apply:u},repeat:{group:[F,r],mode:k},fill:{check:i,init:true}},members:{__BI:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};}
,_isInitialized:function(){return !!this.__BI;}
,getMarkup:function(){if(this.__BI){return this.__BI;}
;var I=this._resolveImageUrl(this.getBorderImage());var J=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];var K=[this.getRepeatX(),this.getRepeatY()].join(s);var L=this.getFill()&&qx.core.Environment.get(j)?E:m;this.__BI=[d,qx.bom.element.Style.compile({"borderImage":w+I+z+J.join(s)+L+s+K,"borderStyle":f,"borderColor":A,position:o,lineHeight:0,fontSize:0,overflow:q,boxSizing:B,borderWidth:J.join(h)+l}),e].join(m);return this.__BI;}
,resize:function(M,N,O){M.style.width=N+l;M.style.height=O+l;}
,tint:function(P,Q){}
,_applyStyle:function(R,S,name){if(qx.core.Environment.get(c)){if(this._isInitialized()){throw new Error(x);}
;}
;}
,_resolveImageUrl:function(T){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(T));}
},destruct:function(){this.__BI=null;}
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
(function(){var j="px",i='</div>',h="qx.ui.decoration.Beveled",g="css.boxmodel",f="qx.debug",e='<div style="position:absolute;top:1px;left:1px;',d='border-bottom:',c='border-right:',b="",a="content",z="Number",y='border-left:',x='border-top:',w="This decorator is already in-use. Modification is not possible anymore!",v='<div style="position:absolute;top:1px;left:0px;',u='position:absolute;top:0px;left:1px;',t='<div style="overflow:hidden;font-size:0;line-height:0;">',s="absolute",r="1px",q='<div style="',o='border:',p="1px solid ",m="Color",n=";",k="_applyStyle",l='"></div>';qx.Class.define(h,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(A,B,C){qx.ui.decoration.Abstract.call(this);if(A!=null){this.setOuterColor(A);}
;if(B!=null){this.setInnerColor(B);}
;if(C!=null){this.setInnerOpacity(C);}
;}
,properties:{innerColor:{check:m,nullable:true,apply:k},innerOpacity:{check:z,init:1,apply:k},outerColor:{check:m,nullable:true,apply:k}},members:{__BI:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};}
,_isInitialized:function(){return !!this.__BI;}
,_applyStyle:function(){if(qx.core.Environment.get(f)){if(this.__BI){throw new Error(w);}
;}
;}
,getMarkup:function(){if(this.__BI){return this.__BI;}
;var D=qx.theme.manager.Color.getInstance();var E=[];var H=p+D.resolve(this.getOuterColor())+n;var G=p+D.resolve(this.getInnerColor())+n;E.push(t);E.push(q);E.push(o,H);E.push(qx.bom.element.Opacity.compile(0.35));E.push(l);E.push(v);E.push(y,H);E.push(c,H);E.push(qx.bom.element.Opacity.compile(1));E.push(l);E.push(q);E.push(u);E.push(x,H);E.push(d,H);E.push(qx.bom.element.Opacity.compile(1));E.push(l);var F={position:s,top:r,left:r,opacity:1};E.push(this._generateBackgroundMarkup(F));E.push(e);E.push(o,G);E.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));E.push(l);E.push(i);return this.__BI=E.join(b);}
,resize:function(I,J,K){if(J<4){J=4;}
;if(K<4){K=4;}
;if(qx.core.Environment.get(g)==a){var outerWidth=J-2;var outerHeight=K-2;var Q=outerWidth;var P=outerHeight;var innerWidth=J-4;var innerHeight=K-4;}
else {var outerWidth=J;var outerHeight=K;var Q=J-2;var P=K-2;var innerWidth=Q;var innerHeight=P;}
;var S=j;var O=I.childNodes[0].style;O.width=outerWidth+S;O.height=outerHeight+S;var N=I.childNodes[1].style;N.width=outerWidth+S;N.height=P+S;var M=I.childNodes[2].style;M.width=Q+S;M.height=outerHeight+S;var L=I.childNodes[3].style;L.width=Q+S;L.height=P+S;var R=I.childNodes[4].style;R.width=innerWidth+S;R.height=innerHeight+S;}
,tint:function(T,U){this._tintBackgroundColor(T,U,T.childNodes[3].style);}
},destruct:function(){this.__BI=null;}
});}
)();
(function(){var j="black",i="#FFF",h="effect",g="table-focus-indicator",f="border-focused-invalid",e="qx/decoration/Classic",d="border-lead",c="decoration/shadow/shadow-small.png",b="qx.theme.classic.Decoration",a="dotted",z="tooltip-text",y="invalid",x="white",w="decoration/shadow/shadow.png",v="border-separator",u="table-header-border",t="border-focused-light",s="border-focused-dark",r="border-focused-light-shadow",q="border-focused-dark-shadow",o="gray",p="solid",m="border-light-shadow",n="border-dark",k="border-light",l="border-dark-shadow";qx.Theme.define(b,{aliases:{decoration:e},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:n}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:j,style:a}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[l,k,k,l],innerColor:[n,m,m,n]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[m,n,n,m],innerColor:[k,l,l,k]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[l,k,k,l],innerColor:[k,l,l,k]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[k,l,l,k],innerColor:[l,k,k,l]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[l,k,k,l]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[k,l,l,k]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[q,t,t,q],innerColor:[s,r,r,s]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[r,s,s,r],innerColor:[t,q,q,t]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[l,k,k,l],innerColor:y}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:v}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:v}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[4,8,8,4]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:y,innerColor:f,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:a,color:d}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:z}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:z}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:l}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:p,colorTop:x,colorLeft:x,colorRight:l,colorBottom:l}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:n,colorBottom:k}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:o,style:p}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:o,style:p}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:o,style:p}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:o,widthRight:1,colorRight:o,style:p}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[m,n,n,m],innerWidth:1,innerColor:[k,l,l,k],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[m,n,n,m],innerWidth:1,innerColor:[k,l,l,k],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[m,n,n,m],innerWidth:1,innerColor:[k,l,l,k],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[m,n,n,m],innerWidth:1,innerColor:[k,l,l,k],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:l,styleTop:p}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:u,styleBottom:p}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:g,style:p}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:u,styleRight:p}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:u,styleRight:p,widthBottom:2,colorBottom:h,styleBottom:p}},"progressbar":{decorator:qx.ui.decoration.Single,style:{backgroundColor:i,width:1,color:v}}}});}
)();
(function(){var dh="table-row-background-even",dg="decoration/treevirtual/cross_minus.gif",df="radiobutton-hovered",de="keyboard-focus",dd="decoration/treevirtual/start_plus.gif",dc="decoration/cursors/",db="icon/16/actions/dialog-ok.png",da="slidebar",cY="#BABABA",cX="table-scroller-focus-indicator",ca="move-frame",bY="nodrop",bX="date-chooser-selected",bW="tabview-page-button-left",bV="decoration/arrows/up-small.gif",bU="move",bT="radiobutton-checked-focused",bS="qx.theme.classic.Appearance",bR="decoration/menu/checkbox.gif",bQ="tooltip-error",dp="right",dq="resize-frame",dm="decoration/arrows/rewind.gif",dn="table-scroller-header",dk="table-pane",dl="table-header-cell-hover",di="focused-outset",dj="checkbox-hovered",dr="icon/16/actions/dialog-cancel.png",ds="menu-slidebar",cG="datechooser-date-pane",cF="background-pane",cI="decoration/treevirtual/cross_plus.gif",cH="qx/icon/Oxygen/16/actions/window-close.png",cK="datechooser-week",cJ="icon/16/apps/office-calendar.png",cM="datechooser-weekday",cL="table-header-border",cE="window-active-caption-text",cD="window-active-caption",k="icon",l="checkbox-checked-focused",m="toolbar-separator",n="groove",o="checkbox-pressed",p="tooltip-invalid",q="decoration/window/restore.gif",r="decoration/menu/checkbox-invert.gif",s="scrollarea",t="window-inactive-caption-text",dG="best-fit",dF="up.gif",dE="checkbox-undetermined-hovered",dD="keep-align",dK="tabview-page-button-right",dJ="tabview-page-button-top",dI="tabview-page-button-bottom",dH="row-layer",dM="decoration/menu/radiobutton.gif",dL="decoration/arrows/",bg="decoration/table/descending.png",bh="progressbar",be="tree-file",bf="tooltip-text",bk="checkbox-checked-hovered",bl="left.gif",bi="decoration/arrows/up-invert.gif",bj="alias",bc="decoration/arrows/right-invert.gif",bd="radiobutton-checked-disabled",L="lead-item",K="checkbox-focused",N="border-dark",M="decoration/treevirtual/end_plus.gif",H="decoration/treevirtual/start_minus.gif",G="radiobutton-checked-hovered",J="decoration/window/minimize.gif",I="table-header-cell-hovered",F="down.gif",E="decoration/treevirtual/end.gif",bq="decoration/treevirtual/end_minus.gif",br="window-inactive-caption",bs="decoration/menu/radiobutton-invert.gif",bt="text-placeholder",bm="slider",bn="decoration/table/select-column-order.png",bo="decoration/arrows/next.gif",bp="table-header",bu="decoration/treevirtual/only_minus.gif",bv="datechooser-week-header",W="decoration/window/maximize.gif",V="decoration/treevirtual/only_plus.gif",U="checkbox-checked-pressed",T="decoration/arrows/down-invert.gif",S="menu-separator",R="decoration/splitpane/knob-vertical.png",Q=".gif",P="decoration/arrows/forward.gif",bb="radiobutton-checked-pressed",ba="table-statusbar",bw="radiobutton-pressed",bx="copy",by="table-row-background-selected",bz="radiobutton-focused",bA="decoration/splitpane/knob-horizontal.png",bB="right.gif",bC="radiobutton-checked",bD="decoration/treevirtual/cross.gif",bE="decoration/table/ascending.png",bF="decoration/treevirtual/line.gif",ci="checkbox-undetermined-focused",ch="toolbar-part-handle",cg="decoration/window/close.gif",cf="icon/16/actions/view-refresh.png",cm="menu-slidebar-button",cl="scrollbar/button",ck="combobox/button",cj="decoration/arrows/right.gif",cp="decoration/arrows/up.gif",co="text",cz="virtual-list",cA="decoration/arrows/down-small.gif",cx="tree",cy="checkbox-undetermined",cv="icon/16/places/folder.png",cw="slidebar/button-forward",ct="icon/16/mimetypes/text-plain.png",cu="right-top",cB="table-header-cell",cC="button-checked",cQ=".png",cP="datechooser",cS="slidebar/button-backward",cR="treevirtual-folder",cU="checkbox-checked",cT="decoration/form/",cW="decoration/tree/minus.gif",cV="",cO="decoration/tree/plus.gif",cN="-invalid",dz="decoration/arrows/left.gif",dA="date-chooser-title",dB="radiobutton",dC="default",dv="tree-folder",dw="background-focused",dx="selectbox",dy="background-light",dt="background-field",du="outset-thin",j="icon/16/places/folder-open.png",i="shadow-small",h="invalid",g="combobox",f="scrollbar",e="center",d="datechooser/button",c="button-abandoned",b="main",a="date-chooser",w="background-disabled",x="list",u="button-hovered",v="bold",A="checkbox",B="toolbar-button",y="button-frame",z="textfield",C="background-invalid",D="white",cq="menu-button",cn="middle",cs="decoration/arrows/down.gif",cr="spinner",cd="image",cb="cell",O="popup",ce="focused-inset",Y="tooltip",X="inset",bI="background-selected",bJ="text-disabled",bK="groupbox",bL="text-selected",bM="outset",bN="label",bO="inset-thin",bP="atom",bG="background",bH="widget",cc="button";qx.Theme.define(bS,{appearances:{"widget":{},"label":{style:function(dN){return {textColor:dN.disabled?bJ:undefined};}
},"image":{style:function(dO){return {opacity:!dO.replacement&&dO.disabled?0.3:undefined};}
},"atom":{},"atom/label":bN,"atom/icon":cd,"root":{style:function(dP){return {backgroundColor:bG,textColor:co,font:dC};}
},"popup":{style:function(dQ){return {decorator:b,backgroundColor:cF,shadow:i};}
},"tooltip":{include:O,style:function(dR){return {backgroundColor:Y,textColor:bf,decorator:Y,shadow:i,padding:[1,3,2,3],offset:[15,5,5,5]};}
},"tooltip/atom":bP,"tooltip-error":{include:Y,style:function(dS){return {textColor:bL,showTimeout:100,hideTimeout:10000,decorator:bQ,font:v,backgroundColor:p};}
},"tooltip-error/atom":bP,"iframe":{style:function(dT){return {backgroundColor:D,decorator:X};}
},"move-frame":{style:function(dU){return {decorator:b};}
},"resize-frame":ca,"dragdrop-cursor":{style:function(dV){var dW=bY;if(dV.copy){dW=bx;}
else if(dV.move){dW=bU;}
else if(dV.alias){dW=bj;}
;;return {source:dc+dW+Q,position:cu,offset:[2,16,2,6]};}
},"button-frame":{alias:bP,style:function(dX){if(dX.pressed||dX.abandoned||dX.checked){var ea=!dX.inner&&dX.focused?ce:X;var dY=[4,3,2,5];}
else {var ea=!dX.inner&&dX.focused?di:bM;var dY=[3,4];}
;return {backgroundColor:dX.abandoned?c:dX.hovered?u:dX.checked?cC:cc,decorator:ea,padding:dY};}
},"button":{alias:y,include:y,style:function(eb){return {center:true};}
},"hover-button":{alias:bP,include:bP,style:function(ec){return {backgroundColor:ec.hovered?bI:undefined,textColor:ec.hovered?bL:undefined};}
},"splitbutton":{},"splitbutton/button":cc,"splitbutton/arrow":{alias:cc,include:cc,style:function(ed){return {icon:cs};}
},"scrollarea/corner":{style:function(){return {backgroundColor:bG};}
},"scrollarea":bH,"scrollarea/pane":bH,"scrollarea/scrollbar-x":f,"scrollarea/scrollbar-y":f,"list":{alias:s,style:function(ee){var ei;var eg=!!ee.focused;var eh=!!ee.invalid;var ef=!!ee.disabled;if(eh&&!ef){ei=C;}
else if(eg&&!eh&&!ef){ei=dw;}
else if(ef){ei=w;}
else {ei=D;}
;;return {decorator:ee.focused?ce:X,backgroundColor:ei};}
},"listitem":{alias:bP,style:function(ej){return {gap:4,padding:ej.lead?[2,4]:[3,5],backgroundColor:ej.selected?bI:undefined,textColor:ej.selected?bL:undefined,decorator:ej.lead?L:undefined};}
},"form-renderer-label":{include:bN,style:function(){return {paddingTop:4};}
},"textfield":{style:function(ek){var ep;var en=!!ek.focused;var eo=!!ek.invalid;var el=!!ek.disabled;if(eo&&!el){ep=C;}
else if(en&&!eo&&!el){ep=dw;}
else if(el){ep=w;}
else {ep=dt;}
;;var em;if(ek.disabled){em=bJ;}
else if(ek.showingPlaceholder){em=bt;}
else {em=undefined;}
;return {decorator:ek.focused?ce:X,padding:[2,3],textColor:em,backgroundColor:ep};}
},"textarea":z,"checkbox":{alias:bP,style:function(eq){var es;if(eq.checked){if(eq.disabled){es=cU;}
else if(eq.focused){es=l;}
else if(eq.pressed){es=U;}
else if(eq.hovered){es=bk;}
else {es=cU;}
;;;}
else if(eq.undetermined){if(eq.disabled){es=cy;}
else if(eq.focused){es=ci;}
else if(eq.hovered){es=dE;}
else {es=cy;}
;;}
else if(!eq.disabled){if(eq.focused){es=K;}
else if(eq.pressed){es=o;}
else if(eq.hovered){es=dj;}
;;}
;;es=es||A;var er=eq.invalid&&!eq.disabled?cN:cV;return {icon:cT+es+er+cQ,gap:6};}
},"radiobutton":{alias:A,include:A,style:function(et){var ev;if(et.checked&&et.focused){ev=bT;}
else if(et.checked&&et.disabled){ev=bd;}
else if(et.checked&&et.pressed){ev=bb;}
else if(et.checked&&et.hovered){ev=G;}
else if(et.checked){ev=bC;}
else if(et.focused){ev=bz;}
else if(et.pressed){ev=bw;}
else if(et.hovered){ev=df;}
else {ev=dB;}
;;;;;;;var eu=et.invalid&&!et.disabled?cN:cV;return {icon:cT+ev+eu+cQ,shadow:undefined};}
},"spinner":{style:function(ew){return {decorator:ew.focused?ce:X,textColor:ew.disabled?bJ:undefined};}
},"spinner/textfield":{include:z,style:function(ex){return {decorator:undefined,padding:[2,3]};}
},"spinner/upbutton":{alias:cc,include:cc,style:function(ey){return {icon:bV,padding:ey.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:ey.hovered?u:cc};}
},"spinner/downbutton":{alias:cc,include:cc,style:function(ez){return {icon:cA,padding:ez.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:ez.hovered?u:cc};}
},"datefield":g,"datefield/button":{alias:ck,include:ck,style:function(eA){return {icon:cJ,padding:[0,3],backgroundColor:undefined,decorator:undefined};}
},"datefield/list":{alias:cP,include:cP,style:function(eB){return {decorator:eB.focused?ce:X};}
},"groupbox":{style:function(eC){return {backgroundColor:bG};}
},"groupbox/legend":{alias:bP,style:function(eD){return {backgroundColor:bG,textColor:eD.invalid?h:undefined,padding:[1,0,1,4]};}
},"groupbox/frame":{style:function(eE){return {padding:[12,9],marginTop:10,decorator:n};}
},"check-groupbox":bK,"check-groupbox/legend":{alias:A,include:A,style:function(eF){return {backgroundColor:bG,textColor:eF.invalid?h:undefined,padding:[1,0,1,4]};}
},"radio-groupbox":bK,"radio-groupbox/legend":{alias:dB,include:dB,style:function(eG){return {backgroundColor:bG,textColor:eG.invalid?h:undefined,padding:[1,0,1,4]};}
},"toolbar":{style:function(eH){return {backgroundColor:bG};}
},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(eI){return {decorator:ch,backgroundColor:bG,padding:[0,1],margin:[3,2],allowGrowY:true};}
},"toolbar-separator":{style:function(eJ){return {margin:[3,2],decorator:m};}
},"toolbar-button":{alias:bP,style:function(eK){if(eK.pressed||eK.checked||eK.abandoned){var eM=bO;var eL=[3,2,1,4];}
else if(eK.hovered&&!eK.disabled){var eM=du;var eL=[2,3];}
else {var eM=undefined;var eL=[3,4];}
;return {cursor:dC,decorator:eM,padding:eL,backgroundColor:eK.abandoned?c:eK.checked?dy:cc};}
},"toolbar-menubutton":{alias:B,include:B,style:function(eN){return {showArrow:true};}
},"toolbar-menubutton/arrow":{alias:cd,include:cd,style:function(eO){return {source:cA};}
},"toolbar-splitbutton":{},"toolbar-splitbutton/button":B,"toolbar-splitbutton/arrow":{alias:B,include:B,style:function(eP){return {icon:cs};}
},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:cc,include:cc,style:function(eQ){return {icon:eQ.vertical?cs:bo};}
},"slidebar/button-backward":{alias:cc,include:cc,style:function(eR){return {icon:eR.vertical?cp:dz};}
},"tabview":{},"tabview/bar":{alias:da,style:function(eS){var eT=0,eW=0,eU=0,eV=0;if(eS.barTop){eU=-2;}
else if(eS.barBottom){eT=-2;}
else if(eS.barRight){eV=-2;}
else {eW=-2;}
;;return {marginBottom:eU,marginTop:eT,marginLeft:eV,marginRight:eW};}
},"tabview/bar/button-forward":{include:cw,alias:cw,style:function(eX){if(eX.barTop||eX.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/button-backward":{include:cS,alias:cS,style:function(eY){if(eY.barTop||eY.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/pane":{style:function(fa){return {backgroundColor:bG,decorator:bM,padding:10};}
},"tabview-page":bH,"tabview-page/button":{style:function(fb){var fk;var fi=0,fg=0,fd=0,ff=0;if(fb.barTop||fb.barBottom){var fe=2,fc=2,fh=6,fj=6;}
else {var fe=6,fc=6,fh=6,fj=6;}
;if(fb.barTop){fk=dJ;}
else if(fb.barRight){fk=dK;}
else if(fb.barBottom){fk=dI;}
else {fk=bW;}
;;if(fb.checked){if(fb.barTop||fb.barBottom){fh+=2;fj+=2;}
else {fe+=2;fc+=2;}
;}
else {if(fb.barTop||fb.barBottom){fd+=2;fi+=2;}
else if(fb.barLeft||fb.barRight){fg+=2;ff+=2;}
;}
;if(fb.checked){if(!fb.firstTab){if(fb.barTop||fb.barBottom){ff=-4;}
else {fi=-4;}
;}
;if(!fb.lastTab){if(fb.barTop||fb.barBottom){fg=-4;}
else {fd=-4;}
;}
;}
;return {zIndex:fb.checked?10:5,decorator:fk,backgroundColor:bG,padding:[fe,fj,fc,fh],margin:[fi,fg,fd,ff],textColor:fb.disabled?bJ:undefined};}
},"tabview-page/button/label":{alias:bN,style:function(fl){return {padding:[0,1,0,1],margin:fl.focused?0:1,decorator:fl.focused?de:undefined};}
},"tabview-page/button/icon":cd,"tabview-page/button/close-button":{alias:bP,style:function(fm){return {icon:cH};}
},"scrollbar":{},"scrollbar/slider":{alias:bm,style:function(fn){return {backgroundColor:dy};}
},"scrollbar/slider/knob":{include:y,style:function(fo){return {height:14,width:14,minHeight:fo.horizontal?undefined:9,minWidth:fo.horizontal?9:undefined};}
},"scrollbar/button":{alias:cc,include:cc,style:function(fp){var fq;if(fp.up||fp.down){if(fp.pressed||fp.abandoned||fp.checked){fq=[5,2,3,4];}
else {fq=[4,3];}
;}
else {if(fp.pressed||fp.abandoned||fp.checked){fq=[4,3,2,5];}
else {fq=[3,4];}
;}
;var fr=dL;if(fp.left){fr+=bl;}
else if(fp.right){fr+=bB;}
else if(fp.up){fr+=dF;}
else {fr+=F;}
;;return {padding:fq,icon:fr};}
},"scrollbar/button-begin":cl,"scrollbar/button-end":cl,"slider":{style:function(fs){var ft;if(fs.disabled){ft=w;}
else if(fs.invalid){ft=C;}
else if(fs.focused){ft=dy;}
else {ft=dt;}
;;return {backgroundColor:ft,decorator:fs.focused?ce:X};}
},"slider/knob":{include:y,style:function(fu){return {width:14,height:14,decorator:bM};}
},"tree-folder/open":{style:function(fv){return {source:fv.opened?cW:cO};}
},"tree-folder":{style:function(fw){return {padding:[2,3,2,0],icon:fw.opened?j:cv,iconOpened:j};}
},"tree-folder/icon":{style:function(fx){return {padding:[0,4,0,0]};}
},"tree-folder/label":{style:function(fy){return {padding:[1,2],backgroundColor:fy.selected?bI:undefined,textColor:fy.selected?bL:undefined};}
},"tree-file":{include:dv,alias:dv,style:function(fz){return {icon:ct};}
},"tree":{include:x,alias:x,style:function(fA){return {contentPadding:[4,4,4,4]};}
},"treevirtual":{style:function(fB){return {decorator:b};}
},"treevirtual-folder":{style:function(fC){return {icon:(fC.opened?j:cv)};}
},"treevirtual-file":{include:cR,alias:cR,style:function(fD){return {icon:ct};}
},"treevirtual-line":{style:function(fE){return {icon:bF};}
},"treevirtual-contract":{style:function(fF){return {icon:cW};}
},"treevirtual-expand":{style:function(fG){return {icon:cO};}
},"treevirtual-only-contract":{style:function(fH){return {icon:bu};}
},"treevirtual-only-expand":{style:function(fI){return {icon:V};}
},"treevirtual-start-contract":{style:function(fJ){return {icon:H};}
},"treevirtual-start-expand":{style:function(fK){return {icon:dd};}
},"treevirtual-end-contract":{style:function(fL){return {icon:bq};}
},"treevirtual-end-expand":{style:function(fM){return {icon:M};}
},"treevirtual-cross-contract":{style:function(fN){return {icon:dg};}
},"treevirtual-cross-expand":{style:function(fO){return {icon:cI};}
},"treevirtual-end":{style:function(fP){return {icon:E};}
},"treevirtual-cross":{style:function(fQ){return {icon:bD};}
},"window":{style:function(fR){return {contentPadding:[10,10,10,10],backgroundColor:bG,decorator:fR.maximized?undefined:bM,shadow:fR.maximized?undefined:i};}
},"window-resize-frame":dq,"window/pane":{},"window/captionbar":{style:function(fS){return {padding:1,backgroundColor:fS.active?cD:br,textColor:fS.active?cE:t};}
},"window/icon":{style:function(fT){return {marginRight:4};}
},"window/title":{style:function(fU){return {cursor:dC,font:v,marginRight:20,alignY:cn};}
},"window/minimize-button":{include:cc,alias:cc,style:function(fV){return {icon:J,padding:fV.pressed||fV.abandoned?[2,1,0,3]:[1,2]};}
},"window/restore-button":{include:cc,alias:cc,style:function(fW){return {icon:q,padding:fW.pressed||fW.abandoned?[2,1,0,3]:[1,2]};}
},"window/maximize-button":{include:cc,alias:cc,style:function(fX){return {icon:W,padding:fX.pressed||fX.abandoned?[2,1,0,3]:[1,2]};}
},"window/close-button":{include:cc,alias:cc,style:function(fY){return {marginLeft:2,icon:cg,padding:fY.pressed||fY.abandoned?[2,1,0,3]:[1,2]};}
},"window/statusbar":{style:function(ga){return {decorator:bO,padding:[2,6]};}
},"window/statusbar-text":bN,"resizer":{style:function(gb){return {decorator:bM};}
},"splitpane":{},"splitpane/splitter":{style:function(gc){return {backgroundColor:bG};}
},"splitpane/splitter/knob":{style:function(gd){return {source:gd.horizontal?bA:R,padding:2};}
},"splitpane/slider":{style:function(ge){return {backgroundColor:N,opacity:0.3};}
},"selectbox":{include:y,style:function(gf){var gg=cc;if(gf.invalid&&!gf.disabled){gg=C;}
else if(gf.abandoned){gg=c;}
else if(!gf.abandoned&&gf.hovered){gg=u;}
else if(!gf.abandoned&&!gf.hovered&&gf.checked){gg=cC;}
;;;return {backgroundColor:gg};}
},"selectbox/atom":bP,"selectbox/popup":O,"selectbox/list":x,"selectbox/arrow":{include:cd,style:function(gh){return {source:cs,paddingRight:4,paddingLeft:5};}
},"datechooser":{style:function(gi){return {decorator:bM};}
},"datechooser/navigation-bar":{style:function(gj){return {backgroundColor:a,textColor:gj.disabled?bJ:gj.invalid?h:undefined,padding:[2,10]};}
},"datechooser/last-year-button-tooltip":Y,"datechooser/last-month-button-tooltip":Y,"datechooser/next-year-button-tooltip":Y,"datechooser/next-month-button-tooltip":Y,"datechooser/last-year-button":d,"datechooser/last-month-button":d,"datechooser/next-year-button":d,"datechooser/next-month-button":d,"datechooser/button/icon":{},"datechooser/button":{style:function(gk){var gl={width:17,show:k};if(gk.lastYear){gl.icon=dm;}
else if(gk.lastMonth){gl.icon=dz;}
else if(gk.nextYear){gl.icon=P;}
else if(gk.nextMonth){gl.icon=cj;}
;;;if(gk.pressed||gk.checked||gk.abandoned){gl.decorator=bO;}
else if(gk.hovered){gl.decorator=du;}
else {gl.decorator=undefined;}
;if(gk.pressed||gk.checked||gk.abandoned){gl.padding=[2,0,0,2];}
else if(gk.hovered){gl.padding=1;}
else {gl.padding=2;}
;return gl;}
},"datechooser/month-year-label":{style:function(gm){return {font:v,textAlign:e};}
},"datechooser/date-pane":{style:function(gn){return {decorator:cG,backgroundColor:a};}
},"datechooser/weekday":{style:function(go){return {decorator:cM,font:v,textAlign:e,textColor:go.disabled?bJ:go.weekend?dA:a,backgroundColor:go.weekend?a:dA};}
},"datechooser/day":{style:function(gp){return {textAlign:e,decorator:gp.today?b:undefined,textColor:gp.disabled?bJ:gp.selected?bL:gp.otherMonth?bJ:undefined,backgroundColor:gp.disabled?undefined:gp.selected?bX:undefined,padding:[2,4]};}
},"datechooser/week":{style:function(gq){return {textAlign:e,textColor:dA,padding:[2,4],decorator:gq.header?bv:cK};}
},"combobox":{style:function(gr){var gs;if(gr.disabled){gs=w;}
else if(gr.invalid){gs=C;}
else if(gr.focused){gs=dw;}
else {gs=dt;}
;;return {decorator:gr.focused?ce:X,textColor:gr.disabled?bJ:undefined,backgroundColor:gs};}
},"combobox/button":{alias:cc,include:cc,style:function(gt){return {icon:cs,backgroundColor:gt.hovered?u:cc};}
},"combobox/popup":O,"combobox/list":x,"combobox/textfield":{include:z,style:function(gu){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};}
},"menu":{style:function(gv){var gw={backgroundColor:bG,shadow:i,decorator:bM,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:gv.submenu||gv.contextmenu?dG:dD};if(gv.submenu){gw.position=cu;gw.offset=[-2,-3];}
;if(gv.contextmenu){gw.offset=4;}
;return gw;}
},"menu/slidebar":ds,"menu-slidebar":bH,"menu-slidebar-button":{style:function(gx){return {backgroundColor:gx.hovered?bI:undefined,padding:6,center:true};}
},"menu-slidebar/button-backward":{include:cm,style:function(gy){return {icon:gy.hovered?bi:cp};}
},"menu-slidebar/button-forward":{include:cm,style:function(gz){return {icon:gz.hovered?T:cs};}
},"menu-separator":{style:function(gA){return {height:0,decorator:S,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};}
},"menu-button":{alias:bP,style:function(gB){return {backgroundColor:gB.selected?bI:undefined,textColor:gB.selected?bL:undefined,padding:[2,6]};}
},"menu-button/icon":{include:cd,style:function(gC){return {alignY:cn};}
},"menu-button/label":{include:bN,style:function(gD){return {alignY:cn,padding:1};}
},"menu-button/shortcut":{include:bN,style:function(gE){return {alignY:cn,marginLeft:14,padding:1};}
},"menu-button/arrow":{include:cd,style:function(gF){return {source:gF.selected?bc:cj,alignY:cn};}
},"menu-checkbox":{alias:cq,include:cq,style:function(gG){return {icon:!gG.checked?undefined:gG.selected?r:bR};}
},"menu-radiobutton":{alias:cq,include:cq,style:function(gH){return {icon:!gH.checked?undefined:gH.selected?bs:dM};}
},"menubar":{style:function(gI){return {backgroundColor:bG,decorator:bM};}
},"menubar-button":{alias:bP,style:function(gJ){return {padding:[2,6],backgroundColor:gJ.pressed||gJ.hovered?bI:undefined,textColor:gJ.pressed||gJ.hovered?bL:undefined};}
},"colorselector":bH,"colorselector/control-bar":bH,"colorselector/visual-pane":bK,"colorselector/control-pane":bH,"colorselector/preset-grid":bH,"colorselector/colorbucket":{style:function(gK){return {decorator:bO,width:16,height:16};}
},"colorselector/preset-field-set":bK,"colorselector/input-field-set":{include:bK,alias:bK,style:function(){return {paddingTop:12};}
},"colorselector/preview-field-set":{include:bK,alias:bK,style:function(){return {paddingTop:12};}
},"colorselector/hex-field-composite":bH,"colorselector/hex-field":z,"colorselector/rgb-spinner-composite":bH,"colorselector/rgb-spinner-red":cr,"colorselector/rgb-spinner-green":cr,"colorselector/rgb-spinner-blue":cr,"colorselector/hsb-spinner-composite":bH,"colorselector/hsb-spinner-hue":cr,"colorselector/hsb-spinner-saturation":cr,"colorselector/hsb-spinner-brightness":cr,"colorselector/preview-content-old":{style:function(gL){return {decorator:bO,width:50,height:10};}
},"colorselector/preview-content-new":{style:function(gM){return {decorator:bO,backgroundColor:D,width:50,height:10};}
},"colorselector/hue-saturation-field":{style:function(gN){return {decorator:bO,margin:5};}
},"colorselector/brightness-field":{style:function(gO){return {decorator:bO,margin:[5,7]};}
},"colorselector/hue-saturation-pane":bH,"colorselector/hue-saturation-handle":bH,"colorselector/brightness-pane":bH,"colorselector/brightness-handle":bH,"table":bH,"table/statusbar":{style:function(gP){return {decorator:ba,paddingLeft:2,paddingRight:2};}
},"table/column-button":{alias:cc,style:function(gQ){var gS,gR;if(gQ.pressed||gQ.checked||gQ.abandoned){gS=bO;gR=[3,2,1,4];}
else if(gQ.hovered){gS=du;gR=[2,3];}
else {gS=undefined;gR=[3,4];}
;return {decorator:gS,padding:gR,backgroundColor:gQ.abandoned?c:cc,icon:bn};}
},"table-column-reset-button":{extend:cq,alias:cq,style:function(){return {icon:cf};}
},"table-scroller/scrollbar-x":f,"table-scroller/scrollbar-y":f,"table-scroller":bH,"table-scroller/header":{style:function(gT){return {decorator:dn,backgroundColor:bp};}
},"table-scroller/pane":{style:function(gU){return {backgroundColor:dk};}
},"table-scroller/focus-indicator":{style:function(gV){return {decorator:cX};}
},"table-scroller/resize-line":{style:function(gW){return {backgroundColor:cL,width:3};}
},"table-header-cell":{alias:bP,style:function(gX){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:gX.hovered?0:2,decorator:gX.hovered?I:cB,backgroundColor:gX.hovered?dl:cB,sortIcon:gX.sorted?(gX.sortedAscending?bE:bg):undefined};}
},"table-header-cell/icon":{style:function(gY){return {marginRight:4,opacity:gY.disabled?0.3:1};}
},"table-header-cell/sort-icon":{style:function(ha){return {alignY:cn,opacity:ha.disabled?0.3:1};}
},"table-editor-textfield":{include:z,style:function(hb){return {decorator:undefined,padding:[2,2]};}
},"table-editor-selectbox":{include:dx,alias:dx,style:function(hc){return {padding:[0,2]};}
},"table-editor-combobox":{include:g,alias:g,style:function(hd){return {decorator:undefined};}
},"colorpopup":{alias:O,include:O,style:function(he){return {decorator:bM,padding:5,backgroundColor:bG};}
},"colorpopup/field":{style:function(hf){return {decorator:bO,margin:2,width:14,height:14,backgroundColor:bG};}
},"colorpopup/selector-button":cc,"colorpopup/auto-button":cc,"colorpopup/preview-pane":bK,"colorpopup/current-preview":{style:function(hg){return {height:20,padding:4,marginLeft:4,decorator:bO,allowGrowX:true};}
},"colorpopup/selected-preview":{style:function(hh){return {height:20,padding:4,marginRight:4,decorator:bO,allowGrowX:true};}
},"colorpopup/colorselector-okbutton":{alias:cc,include:cc,style:function(hi){return {icon:db};}
},"colorpopup/colorselector-cancelbutton":{alias:cc,include:cc,style:function(hj){return {icon:dr};}
},"virtual-list":x,"virtual-list/row-layer":dH,"row-layer":bH,"column-layer":bH,"group-item":{include:bN,alias:bN,style:function(hk){return {padding:4,backgroundColor:cY,textColor:D,font:v};}
},"virtual-selectbox":dx,"virtual-selectbox/dropdown":O,"virtual-selectbox/dropdown/list":{alias:cz},"virtual-combobox":g,"virtual-combobox/dropdown":O,"virtual-combobox/dropdown/list":{alias:cz},"virtual-tree":{include:cx,alias:cx,style:function(hl){return {itemHeight:21};}
},"virtual-tree-folder":dv,"virtual-tree-file":be,"cell":{style:function(hm){return {backgroundColor:hm.selected?by:dh,textColor:hm.selected?bL:co,padding:[3,6]};}
},"cell-string":cb,"cell-number":{include:cb,style:function(hn){return {textAlign:dp};}
},"cell-image":cb,"cell-boolean":cb,"cell-atom":cb,"cell-date":cb,"cell-html":cb,"htmlarea":{"include":bH,style:function(ho){return {backgroundColor:D};}
},"progressbar":{style:function(hp){return {decorator:bh,padding:[1],backgroundColor:D,width:200,height:20};}
},"progressbar/progress":{style:function(hq){return {backgroundColor:hq.disabled?w:bI};}
},"app-header":{style:function(hr){return {textColor:bL,backgroundColor:bI,padding:[8,12]};}
},"app-header-label":bN}});}
)();
(function(){var i="monospace",h="qx.theme.classic.Font",g="Courier New",f="DejaVu Sans Mono",e="Liberation Sans",d="Verdana",c="Bitstream Vera Sans",b="Lucida Grande",a="Tahoma";qx.Theme.define(h,{fonts:{"default":{size:11,lineHeight:1.4,family:[b,a,d,c,e]},"bold":{size:11,lineHeight:1.4,family:[b,a,d,c,e],bold:true},"small":{size:10,lineHeight:1.4,family:[b,a,d,c,e]},"monospace":{size:11,lineHeight:1.4,family:[f,g,i]}}});}
)();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";qx.Theme.define(b,{title:c,aliases:{"icon":a}});}
)();
(function(){var j="#888888",i="#3E5B97",h="#FFFFE1",g="#F3F8FD",f="#CBC8CD",e="#FFE0E0",d="#F4F4F4",c="#808080",b="#CCCCCC",a="#C82C2C",E="#DBEAF9",D="#BCCEE5",C="#A5BDDE",B="#7CA0CF",A="#F6F5F7",z="#FF9999",y="qx.theme.classic.Color",x="#990000",w="#F9F8E9",v="#DCDFE4",q="#FAFBFE",r="#AAAAAA",o="black",p="#3E6CA8",m="#EBE9ED",n="#A7A6AA",k="#EEE",l="#F3F0F5",s="gray",t="#85878C",u="white";qx.Theme.define(y,{colors:{"background":m,"background-light":l,"background-focused":g,"background-focused-inner":E,"background-disabled":d,"background-selected":p,"background-field":u,"background-pane":q,"background-invalid":e,"border-lead":j,"border-light":u,"border-light-shadow":v,"border-dark-shadow":n,"border-dark":t,"border-main":t,"border-focused-light":D,"border-focused-light-shadow":C,"border-focused-dark-shadow":B,"border-focused-dark":p,"border-separator":c,"invalid":x,"border-focused-invalid":z,"text":o,"text-disabled":n,"text-selected":u,"text-focused":i,"text-placeholder":f,"tooltip":h,"tooltip-text":o,"tooltip-invalid":a,"button":m,"button-hovered":A,"button-abandoned":w,"button-checked":l,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":u,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":u,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":k,"table-column-line":k,"progressive-table-header":r,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":s,"progressive-progressbar-indicator-done":b,"progressive-progressbar-indicator-undone":u,"progressive-progressbar-percent-background":s,"progressive-progressbar-percent-text":u}});}
)();
(function(){var b="Classic Windows",a="qx.theme.Classic";qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});}
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
,escapeHTML:function(W){return String(W).replace(/[<>&"']/g,this.__HK);}
,__HK:function(X){var Y={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&#39;",'"':"&quot;"};return Y[X]||"?";}
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
(function(){var k='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',j="Enter",i="px",h='.qxconsole .messages .user-result{background:white}',g='.qxconsole .messages .level-error{background:#FFE2D5}',f="div",d="user-command",c='<div class="command">',b='.qxconsole .command input:focus{outline:none;}',a='.qxconsole .messages .type-key{color:#565656;font-style:italic}',V='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',U='.qxconsole .messages div{padding:0px 4px;}',T='.qxconsole .messages .level-debug{background:white}',S='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',R="DIV",Q='.qxconsole .messages .level-user{background:#E3EFE9}',P='<div class="qxconsole">',O="D",N='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',M='.qxconsole .messages .type-string{color:black;font-weight:normal;}',r='.qxconsole .control a{text-decoration:none;color:black;}',s='<div class="messages">',p='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',q='<input type="text"/>',n="clear",o='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',l='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',m='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',t='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',u='.qxconsole .messages .user-command{color:blue}',B="F7",z="qx.log.appender.Console",F='.qxconsole .messages .level-info{background:#DEEDFA}',D="block",I='.qxconsole .messages .level-warn{background:#FFF7D5}',H='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',w='.qxconsole .messages .user-error{background:#FFE2D5}',L='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',K='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',J=">>> ",v="Down",x='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}',y="Up",A="none",C="keypress",E='</div>',G="";qx.Class.define(z,{statics:{init:function(){var W=[m,L,r,k,U,u,h,w,T,F,I,g,Q,M,x,p,l,N,a,S,V,H,t,o,b];qx.bom.Stylesheet.createElement(W.join(G));var Y=[P,K,s,E,c,q,E,E];var ba=document.createElement(R);ba.innerHTML=Y.join(G);var X=ba.firstChild;document.body.appendChild(ba.firstChild);this.__Jd=X;this.__bY=X.childNodes[1];this.__Je=X.childNodes[2].firstChild;this.__jP();qx.log.Logger.register(this);qx.core.ObjectRegistry.register(this);}
,dispose:function(){qx.event.Registration.removeListener(document.documentElement,C,this.__eJ,this);qx.log.Logger.unregister(this);}
,clear:function(){this.__bY.innerHTML=G;}
,process:function(bb){this.__bY.appendChild(qx.log.appender.Util.toHtml(bb));this.__Jf();}
,__Jf:function(){this.__bY.scrollTop=this.__bY.scrollHeight;}
,__dM:true,toggle:function(){if(!this.__Jd){this.init();}
else if(this.__Jd.style.display==A){this.show();}
else {this.__Jd.style.display=A;}
;}
,show:function(){if(!this.__Jd){this.init();}
else {this.__Jd.style.display=D;this.__bY.scrollTop=this.__bY.scrollHeight;}
;}
,__GM:[],execute:function(){var be=this.__Je.value;if(be==G){return;}
;if(be==n){return this.clear();}
;var bc=document.createElement(f);bc.innerHTML=qx.log.appender.Util.escapeHTML(J+be);bc.className=d;this.__GM.push(be);this.__Jg=this.__GM.length;this.__bY.appendChild(bc);this.__Jf();try{var bd=window.eval(be);}
catch(bf){qx.log.Logger.error(bf);}
;if(bd!==undefined){qx.log.Logger.debug(bd);}
;}
,__jP:function(e){this.__bY.style.height=(this.__Jd.clientHeight-this.__Jd.firstChild.offsetHeight-this.__Jd.lastChild.offsetHeight)+i;}
,__eJ:function(e){var bh=e.getKeyIdentifier();if((bh==B)||(bh==O&&e.isCtrlPressed())){this.toggle();e.preventDefault();}
;if(!this.__Jd){return;}
;if(!qx.dom.Hierarchy.contains(this.__Jd,e.getTarget())){return;}
;if(bh==j&&this.__Je.value!=G){this.execute();this.__Je.value=G;}
;if(bh==y||bh==v){this.__Jg+=bh==y?-1:1;this.__Jg=Math.min(Math.max(0,this.__Jg),this.__GM.length);var bg=this.__GM[this.__Jg];this.__Je.value=bg||G;this.__Je.select();}
;}
},defer:function(bi){qx.event.Registration.addListener(document.documentElement,C,bi.__eJ,bi);}
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

