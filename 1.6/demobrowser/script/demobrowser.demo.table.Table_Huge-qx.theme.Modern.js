(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"locale":"en","locale.variant":"US","qx.allowUrlSettings":true,"qx.allowUrlVariants":true,"qx.application":"demobrowser.demo.table.Table_Huge","qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.theme":"qx.theme.Modern"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"de":null,"de_DE":null,"en":null,"en_US":null,"fr":null,"fr_FR":null};
qx.$$locales = {"C":null,"de":null,"de_DE":null,"en":null,"en_US":null,"fr":null,"fr_FR":null};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:demobrowser.demo.table.Table_Huge-qx.theme.Modern.90520d91fb48.js"]}},
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

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"EEE d.","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"EEE, d.M.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMd":"d. MMM y","cldr_date_time_format_yMd":"d.M.y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Jun","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"Tag","dayperiod":"Tageshälfte","era":"Epoche","hour":"Stunde","minute":"Minute","month":"Monat","quotationEnd":"“","quotationStart":"„","second":"Sekunde","week":"Woche","weekday":"Wochentag","year":"Jahr","zone":"Zone"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"EEE d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"EEE d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d/M/yyyy","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_abbreviated_1":"janv.","cldr_month_stand-alone_abbreviated_10":"oct.","cldr_month_stand-alone_abbreviated_11":"nov.","cldr_month_stand-alone_abbreviated_12":"déc.","cldr_month_stand-alone_abbreviated_2":"févr.","cldr_month_stand-alone_abbreviated_3":"mars","cldr_month_stand-alone_abbreviated_4":"avr.","cldr_month_stand-alone_abbreviated_7":"juil.","cldr_month_stand-alone_abbreviated_9":"sept.","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"jour","dayperiod":"cadran","era":"ère","hour":"heure","minute":"minute","month":"mois","quotationEnd":"»","quotationStart":"«","second":"seconde","week":"semaine","weekday":"jour de la semaine","year":"année","zone":"fuseau horaire"},"fr_FR":{}},"resources":{"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser.demo"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Modern/form/checked.png":[6,6,"png","qx"],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/form/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Modern/form/undetermined.png":[6,2,"png","qx"],"qx/decoration/Modern/group-item.png":[110,20,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Oxygen/16/apps/office-spreadsheet.png":[16,16,"png","qx"],"qx/icon/Oxygen/32/status/dialog-information.png":[32,32,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-spreadsheet.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-44],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-22],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/icon/Tango/32/status/dialog-information.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{"C":{},"de":{"%1 of %2 rows":"%1 von %2 Zeilen","%1 rows":"%1 Zeilen","one of one row":"Eine von einer Zeile","one row":"Eine Zeile"},"de_DE":{},"en":{},"en_US":{},"fr":{"%1 of %2 rows":"ligne %1 de %2","%1 rows":"%1 lignes","one of one row":"ligne une de une","one row":"une ligne"},"fr_FR":{}}};
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
(function(){var t="object",s="qx.debug",r="function",q="Array",p="Mixin",o="qx.Mixin",n=".prototype",m="constructor",k="[Mixin ",j="]",d="RegExp",h="members",g="destruct",c="properties",b="Date",f="events",e="statics";
qx.Bootstrap.define(o,{statics:{define:function(name,u){if(u){if(u.include&&!(qx.Bootstrap.getClass(u.include)===q)){u.include=[u.include];
}if(qx.core.Environment.get(s)){this.__i(name,u);
}var w=u.statics?u.statics:{};
qx.Bootstrap.setDisplayNames(w,name);

for(var v in w){if(w[v] instanceof Function){w[v].$$mixin=w;
}}if(u.construct){w.$$constructor=u.construct;
qx.Bootstrap.setDisplayName(u.construct,name,m);
}
if(u.include){w.$$includes=u.include;
}
if(u.properties){w.$$properties=u.properties;
}
if(u.members){w.$$members=u.members;
qx.Bootstrap.setDisplayNames(u.members,name+n);
}
for(var v in w.$$members){if(w.$$members[v] instanceof Function){w.$$members[v].$$mixin=w;
}}
if(u.events){w.$$events=u.events;
}
if(u.destruct){w.$$destructor=u.destruct;
qx.Bootstrap.setDisplayName(u.destruct,name,g);
}}else{var w={};
}w.$$type=p;
w.name=name;
w.toString=this.genericToString;
w.basename=qx.Bootstrap.createNamespace(name,w);
this.$$registry[name]=w;
return w;
},checkCompatibility:function(x){var A=this.flatten(x);
var B=A.length;

if(B<2){return true;
}var E={};
var D={};
var C={};
var z;

for(var i=0;i<B;i++){z=A[i];

for(var y in z.events){if(C[y]){throw new Error('Conflict between mixin "'+z.name+'" and "'+C[y]+'" in member "'+y+'"!');
}C[y]=z.name;
}
for(var y in z.properties){if(E[y]){throw new Error('Conflict between mixin "'+z.name+'" and "'+E[y]+'" in property "'+y+'"!');
}E[y]=z.name;
}
for(var y in z.members){if(D[y]){throw new Error('Conflict between mixin "'+z.name+'" and "'+D[y]+'" in member "'+y+'"!');
}D[y]=z.name;
}}return true;
},isCompatible:function(F,G){var H=qx.util.OOUtil.getMixins(G);
H.push(F);
return qx.Mixin.checkCompatibility(H);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(I){if(!I){return [];
}var J=I.concat();

for(var i=0,l=I.length;i<l;i++){if(I[i].$$includes){J.push.apply(J,this.flatten(I[i].$$includes));
}}return J;
},genericToString:function(){return k+this.name+j;
},$$registry:{},__h:qx.core.Environment.select(s,{"true":{"include":t,"statics":t,"members":t,"properties":t,"events":t,"destruct":r,"construct":r},"default":null}),__i:qx.core.Environment.select(s,{"true":function(name,K){var N=this.__h;

for(var M in K){if(!N[M]){throw new Error('The configuration key "'+M+'" in mixin "'+name+'" is not allowed!');
}
if(K[M]==null){throw new Error('Invalid key "'+M+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(N[M]!==null&&typeof K[M]!==N[M]){throw new Error('Invalid type of key "'+M+'" in mixin "'+name+'"! The type of the key must be "'+N[M]+'"!');
}}var L=[e,h,c,f];

for(var i=0,l=L.length;i<l;i++){var M=L[i];

if(K[M]!==undefined&&([q,d,b].indexOf(qx.Bootstrap.getClass(K[M]))!=-1||K[M].classname!==undefined)){throw new Error('Invalid key "'+M+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(K.include){for(var i=0,a=K.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==p){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(K.include);
}},"default":function(){}})}});
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
(function(){var w="qx.debug",v="object",u="Array",t="Interface",s="string",r="number",q="function",p="Boolean",o="qx.Interface",n="events",e="[Interface ",m="]",h="members",d="properties",c="Date",g="RegExp",f="toggle",j="boolean",b="is",k="statics";
qx.Bootstrap.define(o,{statics:{define:function(name,x){if(x){if(x.extend&&!(qx.Bootstrap.getClass(x.extend)===u)){x.extend=[x.extend];
}if(qx.core.Environment.get(w)){this.__i(name,x);
}var y=x.statics?x.statics:{};
if(x.extend){y.$$extends=x.extend;
}
if(x.properties){y.$$properties=x.properties;
}
if(x.members){y.$$members=x.members;
}
if(x.events){y.$$events=x.events;
}}else{var y={};
}y.$$type=t;
y.name=name;
y.toString=this.genericToString;
y.basename=qx.Bootstrap.createNamespace(name,y);
qx.Interface.$$registry[name]=y;
return y;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(z){if(!z){return [];
}var A=z.concat();

for(var i=0,l=z.length;i<l;i++){if(z[i].$$extends){A.push.apply(A,this.flatten(z[i].$$extends));
}}return A;
},__k:function(B,C,D,E){var I=D.$$members;

if(I){for(var H in I){if(qx.Bootstrap.isFunction(I[H])){var G=this.__l(C,H);
var F=G||qx.Bootstrap.isFunction(B[H]);

if(!F){throw new Error('Implementation of method "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}var J=E===true&&!G&&!qx.util.OOUtil.hasInterface(C,D);

if(J){B[H]=this.__o(D,B[H],H,I[H]);
}}else{if(typeof B[H]===undefined){if(typeof B[H]!==q){throw new Error('Implementation of member "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}}}}}},__l:function(K,L){var P=L.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!P){return false;
}var M=qx.Bootstrap.firstLow(P[2]);
var N=qx.util.OOUtil.getPropertyDefinition(K,M);

if(!N){return false;
}var O=P[0]==b||P[0]==f;

if(O){return qx.util.OOUtil.getPropertyDefinition(K,M).check==p;
}return true;
},__m:function(Q,R){if(R.$$properties){for(var S in R.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(Q,S)){throw new Error('The property "'+S+'" is not supported by Class "'+Q.classname+'"!');
}}}},__n:function(T,U){if(U.$$events){for(var V in U.$$events){if(!qx.util.OOUtil.supportsEvent(T,V)){throw new Error('The event "'+V+'" is not supported by Class "'+T.classname+'"!');
}}}},assertObject:function(W,X){var ba=W.constructor;
this.__k(W,ba,X,false);
this.__m(ba,X);
this.__n(ba,X);
var Y=X.$$extends;

if(Y){for(var i=0,l=Y.length;i<l;i++){this.assertObject(W,Y[i]);
}}},assert:function(bb,bc,bd){this.__k(bb.prototype,bb,bc,bd);
this.__m(bb,bc);
this.__n(bb,bc);
var be=bc.$$extends;

if(be){for(var i=0,l=be.length;i<l;i++){this.assert(bb,be[i],bd);
}}},genericToString:function(){return e+this.name+m;
},$$registry:{},__o:qx.core.Environment.select(w,{"true":function(bf,bg,bh,bi){function bj(){bi.apply(this,arguments);
return bg.apply(this,arguments);
}bg.wrapper=bj;
return bj;
},"default":function(){}}),__h:qx.core.Environment.select(w,{"true":{"extend":v,"statics":v,"members":v,"properties":v,"events":v},"default":null}),__i:qx.core.Environment.select(w,{"true":function(name,bk){if(qx.core.Environment.get(w)){var bn=this.__h;

for(var bm in bk){if(bn[bm]===undefined){throw new Error('The configuration key "'+bm+'" in class "'+name+'" is not allowed!');
}
if(bk[bm]==null){throw new Error("Invalid key '"+bm+"' in interface '"+name+"'! The value is undefined/null!");
}
if(bn[bm]!==null&&typeof bk[bm]!==bn[bm]){throw new Error('Invalid type of key "'+bm+'" in interface "'+name+'"! The type of the key must be "'+bn[bm]+'"!');
}}var bl=[k,h,d,n];

for(var i=0,l=bl.length;i<l;i++){var bm=bl[i];

if(bk[bm]!==undefined&&([u,g,c].indexOf(qx.Bootstrap.getClass(bk[bm]))!=-1||bk[bm].classname!==undefined)){throw new Error('Invalid key "'+bm+'" in interface "'+name+'"! The value needs to be a map!');
}}if(bk.extend){for(var i=0,a=bk.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!==t){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(bk.statics){for(var bm in bk.statics){if(bm.toUpperCase()!==bm){throw new Error('Invalid key "'+bm+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof bk.statics[bm]){case j:case s:case r:break;
default:throw new Error('Invalid key "'+bm+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
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
(function(){var bD=';',bC='return this.',bB="string",bA="boolean",bz='!==undefined)',by="this.",bx="qx.debug",bw="",bv="set",bu="setThemed",bj="resetThemed",bi='else if(this.',bh="reset",bg="setRuntime",bf="init",be="();",bd='else ',bc='if(this.',bb="qx.propertyDebugLevel",ba="resetRuntime",bK="return this.",bL="get",bI=";",bJ="(a[",bG=' of an instance of ',bH="refresh",bE=' is not (yet) ready!");',bF="]);",bM='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bN='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bn='value !== null && value.nodeType === 9 && value.documentElement',bm='value !== null && value.$$type === "Mixin"',bp='return init;',bo='var init=this.',br='value !== null && value.nodeType === 1 && value.attributes',bq="var parent = this.getLayoutParent();",bt="Error in property ",bs='qx.core.Assert.assertInstance(value, Date, msg) || true',bl="if (!parent) return;",bk=" in method ",b='qx.core.Assert.assertInstance(value, Error, msg) || true',c='Undefined value is not allowed!',d="inherit",e='Is invalid!',f="MSIE 6.0",g="': ",h=" of class ",j='value !== null && value.nodeType !== undefined',k='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',m="module.events",bR='qx.core.Assert.assertPositiveInteger(value, msg) || true',bQ='if(init==qx.core.Property.$$inherit)init=null;',bP='value !== null && value.$$type === "Interface"',bO='var inherit=prop.$$inherit;',bV="var value = parent.",bU="$$useinit_",bT="(value);",bS="$$runtime_",bX='Requires exactly one argument!',bW="$$user_",J='qx.core.Assert.assertArray(value, msg) || true',K='qx.core.Assert.assertPositiveNumber(value, msg) || true',H="Boolean",I='return value;',N='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',O='Does not allow any arguments!',L="()",M="var a=arguments[0] instanceof Array?arguments[0]:arguments;",F='value !== null && value.$$type === "Theme"',G="())",u='return null;',t='qx.core.Assert.assertObject(value, msg) || true',w='qx.core.Assert.assertString(value, msg) || true',v="if (value===undefined) value = parent.",q='value !== null && value.$$type === "Class"',p='qx.core.Assert.assertFunction(value, msg) || true',s="object",r="$$init_",o="$$theme_",n='qx.core.Assert.assertMap(value, msg) || true',T='qx.core.Assert.assertNumber(value, msg) || true',U='Null value is not allowed!',V='qx.core.Assert.assertInteger(value, msg) || true',W="rv:1.8.1",P="shorthand",Q='qx.core.Assert.assertInstance(value, RegExp, msg) || true',R='value !== null && value.type !== undefined',S='value !== null && value.document',X='throw new Error("Property ',Y="(!this.",E='qx.core.Assert.assertBoolean(value, msg) || true',D="toggle",C="$$inherit_",B=" with incoming value '",A="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",z="qx.core.Property",y="is",x='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(z,{statics:{__p:function(){if(qx.core.Environment.get(m)){qx.event.type.Data;
qx.event.dispatch.Direct;
}},__q:{"Boolean":E,"String":w,"Number":T,"Integer":V,"PositiveNumber":K,"PositiveInteger":bR,"Error":b,"RegExp":Q,"Object":t,"Array":J,"Map":n,"Function":p,"Date":bs,"Node":j,"Element":br,"Document":bn,"Window":S,"Event":R,"Class":q,"Mixin":bm,"Interface":bP,"Theme":F,"Color":bM,"Decorator":k,"Font":bN},__r:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:d,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bB,dereference:bA,inheritable:bA,nullable:bA,themeable:bA,refine:bA,init:null,apply:bB,event:bB,check:null,transform:bB,deferredInit:bA,validate:null},$$allowedGroupKeys:{name:bB,group:s,mode:bB,themeable:bA},$$inheritable:{},__s:function(bY){var ca=this.__t(bY);

if(!ca.length){var cb=function(){};
}else{cb=this.__u(ca);
}bY.prototype.$$refreshInheritables=cb;
},__t:function(cc){var ce=[];

while(cc){var cd=cc.$$properties;

if(cd){for(var name in this.$$inheritable){if(cd[name]&&cd[name].inheritable){ce.push(name);
}}}cc=cc.superclass;
}return ce;
},__u:function(cf){var cj=this.$$store.inherit;
var ci=this.$$store.init;
var ch=this.$$method.refresh;
var cg=[bq,bl];

for(var i=0,l=cf.length;i<l;i++){var name=cf[i];
cg.push(bV,cj[name],bI,v,ci[name],bI,by,ch[name],bT);
}return new Function(cg.join(bw));
},attachRefreshInheritables:function(ck){ck.prototype.$$refreshInheritables=function(){qx.core.Property.__s(ck);
return this.$$refreshInheritables();
};
},attachMethods:function(cl,name,cm){cm.group?this.__v(cl,cm,name):this.__w(cl,cm,name);
},__v:function(cn,co,name){var cv=qx.Bootstrap.firstUp(name);
var cu=cn.prototype;
var cw=co.themeable===true;

if(qx.core.Environment.get(bx)){if(qx.core.Environment.get(bb)>1){qx.Bootstrap.debug("Generating property group: "+name);
}}var cx=[];
var cr=[];

if(cw){var cp=[];
var ct=[];
}var cs=M;
cx.push(cs);

if(cw){cp.push(cs);
}
if(co.mode==P){var cq=A;
cx.push(cq);

if(cw){cp.push(cq);
}}
for(var i=0,a=co.group,l=a.length;i<l;i++){if(qx.core.Environment.get(bx)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}cx.push(by,this.$$method.set[a[i]],bJ,i,bF);
cr.push(by,this.$$method.reset[a[i]],be);

if(cw){if(qx.core.Environment.get(bx)){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}cp.push(by,this.$$method.setThemed[a[i]],bJ,i,bF);
ct.push(by,this.$$method.resetThemed[a[i]],be);
}}this.$$method.set[name]=bv+cv;
cu[this.$$method.set[name]]=new Function(cx.join(bw));
this.$$method.reset[name]=bh+cv;
cu[this.$$method.reset[name]]=new Function(cr.join(bw));

if(cw){this.$$method.setThemed[name]=bu+cv;
cu[this.$$method.setThemed[name]]=new Function(cp.join(bw));
this.$$method.resetThemed[name]=bj+cv;
cu[this.$$method.resetThemed[name]]=new Function(ct.join(bw));
}},__w:function(cy,cz,name){var cB=qx.Bootstrap.firstUp(name);
var cD=cy.prototype;

if(qx.core.Environment.get(bx)){if(qx.core.Environment.get(bb)>1){qx.Bootstrap.debug("Generating property wrappers: "+name);
}}if(cz.dereference===undefined&&typeof cz.check===bB){cz.dereference=this.__x(cz.check);
}var cC=this.$$method;
var cA=this.$$store;
cA.runtime[name]=bS+name;
cA.user[name]=bW+name;
cA.theme[name]=o+name;
cA.init[name]=r+name;
cA.inherit[name]=C+name;
cA.useinit[name]=bU+name;
cC.get[name]=bL+cB;
cD[cC.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cy,name,bL);
};
cC.set[name]=bv+cB;
cD[cC.set[name]]=function(cE){return qx.core.Property.executeOptimizedSetter(this,cy,name,bv,arguments);
};
cC.reset[name]=bh+cB;
cD[cC.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cy,name,bh);
};

if(cz.inheritable||cz.apply||cz.event||cz.deferredInit){cC.init[name]=bf+cB;
cD[cC.init[name]]=function(cF){return qx.core.Property.executeOptimizedSetter(this,cy,name,bf,arguments);
};
}
if(cz.inheritable){cC.refresh[name]=bH+cB;
cD[cC.refresh[name]]=function(cG){return qx.core.Property.executeOptimizedSetter(this,cy,name,bH,arguments);
};
}cC.setRuntime[name]=bg+cB;
cD[cC.setRuntime[name]]=function(cH){return qx.core.Property.executeOptimizedSetter(this,cy,name,bg,arguments);
};
cC.resetRuntime[name]=ba+cB;
cD[cC.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cy,name,ba);
};

if(cz.themeable){cC.setThemed[name]=bu+cB;
cD[cC.setThemed[name]]=function(cI){return qx.core.Property.executeOptimizedSetter(this,cy,name,bu,arguments);
};
cC.resetThemed[name]=bj+cB;
cD[cC.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cy,name,bj);
};
}
if(cz.check===H){cD[D+cB]=new Function(bK+cC.set[name]+Y+cC.get[name]+G);
cD[y+cB]=new Function(bK+cC.get[name]+L);
}},__x:function(cJ){return !!this.__r[cJ];
},__y:function(cK){return this.__r[cK]||qx.util.OOUtil.classIsDefined(cK)||(qx.Interface&&qx.Interface.isDefined(cK));
},__z:{0:x,1:bX,2:c,3:O,4:U,5:e},error:function(cL,cM,cN,cO,cP){var cQ=cL.constructor.classname;
var cR=bt+cN+h+cQ+bk+this.$$method[cO][cN]+B+cP+g;
throw new Error(cR+(this.__z[cM]||"Unknown reason: "+cM));
},__A:function(cS,cT,name,cU,cV,cW){var cX=this.$$method[cU][name];
if(qx.core.Environment.get("qx.debug")){if(qx.core.Environment.get("qx.propertyDebugLevel")>1){qx.Bootstrap.debug("Code["+this.$$method[cU][name]+"]: "+cV.join(""));
}try{cT[cX]=new Function("value",cV.join(""));
}catch(cY){throw new Error("Malformed generated code to unwrap method: "+this.$$method[cU][name]+"\n"+cV.join(""));
}}else{cT[cX]=new Function("value",cV.join(""));
}if(qx.core.Environment.get("qx.aspects")){cT[cX]=qx.core.Aspect.wrap(cS.classname+"."+cX,cT[cX],"property");
}qx.Bootstrap.setDisplayName(cT[cX],cS.classname+".prototype",cX);
if(cW===undefined){return cS[cX]();
}else if(qx.core.Environment.get("qx.debug")){return cS[cX].apply(cS,cW);
}else{return cS[cX](cW[0]);
}},executeOptimizedGetter:function(da,db,name,dc){var de=db.$$properties[name];
var dg=db.prototype;
var dd=[];
var df=this.$$store;
dd.push(bc,df.runtime[name],bz);
dd.push(bC,df.runtime[name],bD);

if(de.inheritable){dd.push(bi,df.inherit[name],bz);
dd.push(bC,df.inherit[name],bD);
dd.push(bd);
}dd.push(bc,df.user[name],bz);
dd.push(bC,df.user[name],bD);

if(de.themeable){dd.push(bi,df.theme[name],bz);
dd.push(bC,df.theme[name],bD);
}
if(de.deferredInit&&de.init===undefined){dd.push(bi,df.init[name],bz);
dd.push(bC,df.init[name],bD);
}dd.push(bd);

if(de.init!==undefined){if(de.inheritable){dd.push(bo,df.init[name],bD);

if(de.nullable){dd.push(bQ);
}else if(de.init!==undefined){dd.push(bC,df.init[name],bD);
}else{dd.push(N,name,bG,db.classname,bE);
}dd.push(bp);
}else{dd.push(bC,df.init[name],bD);
}}else if(de.inheritable||de.nullable){dd.push(u);
}else{dd.push(X,name,bG,db.classname,bE);
}return this.__A(da,dg,name,dc,dd);
},executeOptimizedSetter:function(dh,di,name,dj,dk){var dq=di.$$properties[name];
var dp=di.prototype;
var dm=[];
var dl=dj===bv||dj===bu||dj===bg||(dj===bf&&dq.init===undefined);
var dn=dq.apply||dq.event||dq.inheritable;
var dr=this.__B(dj,name);
this.__C(dm,dq,name,dj,dl);

if(dl){this.__D(dm,di,dq,name);
}
if(dn){this.__E(dm,dl,dr,dj);
}
if(dq.inheritable){dm.push(bO);
}
if(qx.core.Environment.get(bx)){if(dl){this.__F(dm,dq,di,name,dj);
}}
if(!dn){this.__G(dm,name,dj,dl);
}else{this.__H(dm,dq,name,dj,dl);
}
if(dq.inheritable){this.__I(dm,dq,name,dj);
}else if(dn){this.__J(dm,dq,name,dj);
}
if(dn){this.__K(dm,dq,name);
if(dq.inheritable&&dp._getChildren){this.__L(dm,name);
}}if(dl){dm.push(I);
}return this.__A(dh,dp,name,dj,dm,dk);
},__B:function(ds,name){if(ds==="setRuntime"||ds==="resetRuntime"){var dt=this.$$store.runtime[name];
}else if(ds==="setThemed"||ds==="resetThemed"){dt=this.$$store.theme[name];
}else if(ds==="init"){dt=this.$$store.init[name];
}else{dt=this.$$store.user[name];
}return dt;
},__C:function(du,dv,name,dw,dx){if(qx.core.Environment.get("qx.debug")){du.push('var prop=qx.core.Property;');

if(dw==="init"){du.push('if(this.$$initialized)prop.error(this,0,"',name,'","',dw,'",value);');
}
if(dw==="refresh"){}else if(dx){du.push('if(arguments.length!==1)prop.error(this,1,"',name,'","',dw,'",value);');
du.push('if(value===undefined)prop.error(this,2,"',name,'","',dw,'",value);');
}else{du.push('if(arguments.length!==0)prop.error(this,3,"',name,'","',dw,'",value);');
}}else{if(!dv.nullable||dv.check||dv.inheritable){du.push('var prop=qx.core.Property;');
}if(dw==="set"){du.push('if(value===undefined)prop.error(this,2,"',name,'","',dw,'",value);');
}}},__D:function(dy,dz,dA,name){if(dA.transform){dy.push('value=this.',dA.transform,'(value);');
}if(dA.validate){if(typeof dA.validate==="string"){dy.push('this.',dA.validate,'(value);');
}else if(dA.validate instanceof Function){dy.push(dz.classname,'.$$properties.',name);
dy.push('.validate.call(this, value);');
}}},__E:function(dB,dC,dD,dE){var dF=(dE==="reset"||dE==="resetThemed"||dE==="resetRuntime");

if(dC){dB.push('if(this.',dD,'===value)return value;');
}else if(dF){dB.push('if(this.',dD,'===undefined)return;');
}},__F:qx.core.Environment.select("qx.debug",{"true":function(dG,dH,dI,name,dJ){if(!dH.nullable){dG.push('if(value===null)prop.error(this,4,"',name,'","',dJ,'",value);');
}if(dH.check!==undefined){dG.push('var msg = "Invalid incoming value for property \''+name+'\' of class \''+dI.classname+'\'";');
if(dH.nullable){dG.push('if(value!==null)');
}if(dH.inheritable){dG.push('if(value!==inherit)');
}dG.push('if(');

if(this.__q[dH.check]!==undefined){dG.push('!(',this.__q[dH.check],')');
}else if(qx.Class.isDefined(dH.check)){dG.push('qx.core.Assert.assertInstance(value, qx.Class.getByName("',dH.check,'"), msg)');
}else if(qx.Interface&&qx.Interface.isDefined(dH.check)){dG.push('qx.core.Assert.assertInterface(value, qx.Interface.getByName("',dH.check,'"), msg)');
}else if(typeof dH.check==="function"){dG.push('!',dI.classname,'.$$properties.',name);
dG.push('.check.call(this, value)');
}else if(typeof dH.check==="string"){dG.push('!(',dH.check,')');
}else if(dH.check instanceof Array){dG.push('qx.core.Assert.assertInArray(value, ',dI.classname,'.$$properties.',name,'.check, msg)');
}else{throw new Error("Could not add check to property "+name+" of class "+dI.classname);
}dG.push(')prop.error(this,5,"',name,'","',dJ,'",value);');
}},"false":undefined}),__G:function(dK,name,dL,dM){if(dL==="setRuntime"){dK.push('this.',this.$$store.runtime[name],'=value;');
}else if(dL==="resetRuntime"){dK.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dK.push('delete this.',this.$$store.runtime[name],';');
}else if(dL==="set"){dK.push('this.',this.$$store.user[name],'=value;');
}else if(dL==="reset"){dK.push('if(this.',this.$$store.user[name],'!==undefined)');
dK.push('delete this.',this.$$store.user[name],';');
}else if(dL==="setThemed"){dK.push('this.',this.$$store.theme[name],'=value;');
}else if(dL==="resetThemed"){dK.push('if(this.',this.$$store.theme[name],'!==undefined)');
dK.push('delete this.',this.$$store.theme[name],';');
}else if(dL==="init"&&dM){dK.push('this.',this.$$store.init[name],'=value;');
}},__H:function(dN,dO,name,dP,dQ){if(dO.inheritable){dN.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{dN.push('var computed, old;');
}dN.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(dP==="setRuntime"){dN.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dP==="resetRuntime"){dN.push('delete this.',this.$$store.runtime[name],';');
dN.push('if(this.',this.$$store.user[name],'!==undefined)');
dN.push('computed=this.',this.$$store.user[name],';');
dN.push('else if(this.',this.$$store.theme[name],'!==undefined)');
dN.push('computed=this.',this.$$store.theme[name],';');
dN.push('else if(this.',this.$$store.init[name],'!==undefined){');
dN.push('computed=this.',this.$$store.init[name],';');
dN.push('this.',this.$$store.useinit[name],'=true;');
dN.push('}');
}else{dN.push('old=computed=this.',this.$$store.runtime[name],';');
if(dP==="set"){dN.push('this.',this.$$store.user[name],'=value;');
}else if(dP==="reset"){dN.push('delete this.',this.$$store.user[name],';');
}else if(dP==="setThemed"){dN.push('this.',this.$$store.theme[name],'=value;');
}else if(dP==="resetThemed"){dN.push('delete this.',this.$$store.theme[name],';');
}else if(dP==="init"&&dQ){dN.push('this.',this.$$store.init[name],'=value;');
}}dN.push('}');
dN.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(dP==="set"){if(!dO.inheritable){dN.push('old=this.',this.$$store.user[name],';');
}dN.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dP==="reset"){if(!dO.inheritable){dN.push('old=this.',this.$$store.user[name],';');
}dN.push('delete this.',this.$$store.user[name],';');
dN.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dN.push('computed=this.',this.$$store.runtime[name],';');
dN.push('if(this.',this.$$store.theme[name],'!==undefined)');
dN.push('computed=this.',this.$$store.theme[name],';');
dN.push('else if(this.',this.$$store.init[name],'!==undefined){');
dN.push('computed=this.',this.$$store.init[name],';');
dN.push('this.',this.$$store.useinit[name],'=true;');
dN.push('}');
}else{if(dP==="setRuntime"){dN.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dO.inheritable){dN.push('computed=this.',this.$$store.user[name],';');
}else{dN.push('old=computed=this.',this.$$store.user[name],';');
}if(dP==="setThemed"){dN.push('this.',this.$$store.theme[name],'=value;');
}else if(dP==="resetThemed"){dN.push('delete this.',this.$$store.theme[name],';');
}else if(dP==="init"&&dQ){dN.push('this.',this.$$store.init[name],'=value;');
}}dN.push('}');
if(dO.themeable){dN.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!dO.inheritable){dN.push('old=this.',this.$$store.theme[name],';');
}
if(dP==="setRuntime"){dN.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dP==="set"){dN.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dP==="setThemed"){dN.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dP==="resetThemed"){dN.push('delete this.',this.$$store.theme[name],';');
dN.push('if(this.',this.$$store.init[name],'!==undefined){');
dN.push('computed=this.',this.$$store.init[name],';');
dN.push('this.',this.$$store.useinit[name],'=true;');
dN.push('}');
}else if(dP==="init"){if(dQ){dN.push('this.',this.$$store.init[name],'=value;');
}dN.push('computed=this.',this.$$store.theme[name],';');
}else if(dP==="refresh"){dN.push('computed=this.',this.$$store.theme[name],';');
}dN.push('}');
}dN.push('else if(this.',this.$$store.useinit[name],'){');

if(!dO.inheritable){dN.push('old=this.',this.$$store.init[name],';');
}
if(dP==="init"){if(dQ){dN.push('computed=this.',this.$$store.init[name],'=value;');
}else{dN.push('computed=this.',this.$$store.init[name],';');
}}else if(dP==="set"||dP==="setRuntime"||dP==="setThemed"||dP==="refresh"){dN.push('delete this.',this.$$store.useinit[name],';');

if(dP==="setRuntime"){dN.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dP==="set"){dN.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dP==="setThemed"){dN.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dP==="refresh"){dN.push('computed=this.',this.$$store.init[name],';');
}}dN.push('}');
if(dP==="set"||dP==="setRuntime"||dP==="setThemed"||dP==="init"){dN.push('else{');

if(dP==="setRuntime"){dN.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dP==="set"){dN.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dP==="setThemed"){dN.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dP==="init"){if(dQ){dN.push('computed=this.',this.$$store.init[name],'=value;');
}else{dN.push('computed=this.',this.$$store.init[name],';');
}dN.push('this.',this.$$store.useinit[name],'=true;');
}dN.push('}');
}},__I:function(dR,dS,name,dT){dR.push('if(computed===undefined||computed===inherit){');

if(dT==="refresh"){dR.push('computed=value;');
}else{dR.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}dR.push('if((computed===undefined||computed===inherit)&&');
dR.push('this.',this.$$store.init[name],'!==undefined&&');
dR.push('this.',this.$$store.init[name],'!==inherit){');
dR.push('computed=this.',this.$$store.init[name],';');
dR.push('this.',this.$$store.useinit[name],'=true;');
dR.push('}else{');
dR.push('delete this.',this.$$store.useinit[name],';}');
dR.push('}');
dR.push('if(old===computed)return value;');
dR.push('if(computed===inherit){');
dR.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
dR.push('}');
dR.push('else if(computed===undefined)');
dR.push('delete this.',this.$$store.inherit[name],';');
dR.push('else this.',this.$$store.inherit[name],'=computed;');
dR.push('var backup=computed;');
if(dS.init!==undefined&&dT!=="init"){dR.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dR.push('if(old===undefined)old=null;');
}dR.push('if(computed===undefined||computed==inherit)computed=null;');
},__J:function(dU,dV,name,dW){if(dW!=="set"&&dW!=="setRuntime"&&dW!=="setThemed"){dU.push('if(computed===undefined)computed=null;');
}dU.push('if(old===computed)return value;');
if(dV.init!==undefined&&dW!=="init"){dU.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dU.push('if(old===undefined)old=null;');
}},__K:function(dX,dY,name){if(dY.apply){dX.push('this.',dY.apply,'(computed, old, "',name,'");');
}if(dY.event){dX.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",dY.event,"')){","reg.fireEvent(this, '",dY.event,"', qx.event.type.Data, [computed, old]",")}");
}},__L:function(ea,name){ea.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
ea.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
ea.push('}');
}},defer:function(eb){var ed=navigator.userAgent.indexOf(f)!=-1;
var ec=navigator.userAgent.indexOf(W)!=-1;
if(ed||ec){eb.__x=eb.__y;
}}});
})();
(function(){var m="qx.debug",k=".",j="object",h="static",g="function",f="Array",e="singleton",d="qx.aspects",c="abstract",b="constructor",B="environment",A="extend",z="string",y="members",x="variants",w="properties",v="statics",u="events",t="]",s="Interface",q="qx.Class",r="Mixin",o="settings",p='Assumed static class because no "extend" key was found. ',n="[Class ";
qx.Bootstrap.define(q,{statics:{__M:qx.core.Environment.get("module.property")?qx.core.Property:null,define:function(name,C){if(!C){var C={};
}if(C.include&&!(qx.Bootstrap.getClass(C.include)===f)){C.include=[C.include];
}if(C.implement&&!(qx.Bootstrap.getClass(C.implement)===f)){C.implement=[C.implement];
}var D=false;

if(!C.hasOwnProperty(A)&&!C.type){C.type=h;
D=true;
}if(qx.core.Environment.get(m)){try{this.__i(name,C);
}catch(G){if(D){G.message=p+G.message;
}throw G;
}}var E=this.__P(name,C.type,C.extend,C.statics,C.construct,C.destruct,C.include);
if(C.extend){if(C.properties){this.__R(E,C.properties,true);
}if(C.members){this.__T(E,C.members,true,true,false);
}if(C.events){this.__Q(E,C.events,true);
}if(C.include){for(var i=0,l=C.include.length;i<l;i++){this.__X(E,C.include[i],false);
}}}if(C.environment){for(var F in C.environment){qx.core.Environment.add(F,C.environment[F]);
}}if(C.implement){for(var i=0,l=C.implement.length;i<l;i++){this.__V(E,C.implement[i]);
}}
if(qx.core.Environment.get(m)){this.__O(E);
}if(C.defer){C.defer.self=E;
C.defer(E,E.prototype,{add:function(name,H){var I={};
I[name]=H;
qx.Class.__R(E,I,true);
}});
}return E;
},undefine:function(name){delete this.$$registry[name];
var J=name.split(k);
var L=[window];

for(var i=0;i<J.length;i++){L.push(L[i][J[i]]);
}for(var i=L.length-1;i>=1;i--){var K=L[i];
var parent=L[i-1];

if(qx.Bootstrap.isFunction(K)||qx.Bootstrap.objectGetLength(K)===0){delete parent[J[i-1]];
}else{break;
}}},isDefined:qx.util.OOUtil.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(M,N){if(qx.core.Environment.get(m)){if(!N){throw new Error("The mixin to include into class '"+M.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(N,M);
}qx.Class.__X(M,N,false);
},patch:function(O,P){if(qx.core.Environment.get(m)){if(!P){throw new Error("The mixin to patch class '"+O.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(P,O);
}qx.Class.__X(O,P,true);
},isSubClassOf:function(Q,R){if(!Q){return false;
}
if(Q==R){return true;
}
if(Q.prototype instanceof R){return true;
}return false;
},getPropertyDefinition:qx.util.OOUtil.getPropertyDefinition,getProperties:function(S){var T=[];

while(S){if(S.$$properties){T.push.apply(T,qx.Bootstrap.getKeys(S.$$properties));
}S=S.superclass;
}return T;
},getByProperty:function(U,name){while(U){if(U.$$properties&&U.$$properties[name]){return U;
}U=U.superclass;
}return null;
},hasProperty:qx.util.OOUtil.hasProperty,getEventType:qx.util.OOUtil.getEventType,supportsEvent:qx.util.OOUtil.supportsEvent,hasOwnMixin:function(V,W){return V.$$includes&&V.$$includes.indexOf(W)!==-1;
},getByMixin:function(X,Y){var ba,i,l;

while(X){if(X.$$includes){ba=X.$$flatIncludes;

for(i=0,l=ba.length;i<l;i++){if(ba[i]===Y){return X;
}}}X=X.superclass;
}return null;
},getMixins:qx.util.OOUtil.getMixins,hasMixin:function(bb,bc){return !!this.getByMixin(bb,bc);
},hasOwnInterface:function(bd,be){return bd.$$implements&&bd.$$implements.indexOf(be)!==-1;
},getByInterface:qx.util.OOUtil.getByInterface,getInterfaces:function(bf){var bg=[];

while(bf){if(bf.$$implements){bg.push.apply(bg,bf.$$flatImplements);
}bf=bf.superclass;
}return bg;
},hasInterface:qx.util.OOUtil.hasInterface,implementsInterface:function(bh,bi){var bj=bh.constructor;

if(this.hasInterface(bj,bi)){return true;
}
try{qx.Interface.assertObject(bh,bi);
return true;
}catch(bk){}
try{qx.Interface.assert(bj,bi,false);
return true;
}catch(bl){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return n+this.classname+t;
},$$registry:qx.Bootstrap.$$registry,__h:qx.core.Environment.select(m,{"true":{"type":z,"extend":g,"implement":j,"include":j,"construct":g,"statics":j,"properties":j,"members":j,"environment":j,"events":j,"defer":g,"destruct":g},"default":null}),__N:qx.core.Environment.select("qx.debug",{"true":{"type":"string","statics":"object","environment":"object","defer":"function"},"default":null}),__i:qx.core.Environment.select(m,{"true":function(name,bm){if(bm.type&&!(bm.type===h||bm.type===c||bm.type===e)){throw new Error('Invalid type "'+bm.type+'" definition for class "'+name+'"!');
}if(bm.type&&bm.type!==h&&!bm.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var bp=bm.type===h?this.__N:this.__h;

for(var bo in bm){if(!bp[bo]){throw new Error('The configuration key "'+bo+'" in class "'+name+'" is not allowed!');
}
if(bm[bo]==null){throw new Error('Invalid key "'+bo+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof bm[bo]!==bp[bo]){throw new Error('Invalid type of key "'+bo+'" in class "'+name+'"! The type of the key must be "'+bp[bo]+'"!');
}}var bn=[v,w,y,B,o,x,u];

for(var i=0,l=bn.length;i<l;i++){var bo=bn[i];

if(bm[bo]!==undefined&&(bm[bo].$$hash!==undefined||!qx.Bootstrap.isObject(bm[bo]))){throw new Error('Invalid key "'+bo+'" in class "'+name+'"! The value needs to be a map!');
}}if(bm.include){if(qx.Bootstrap.getClass(bm.include)===f){for(var i=0,a=bm.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==r){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(bm.implement){if(qx.Bootstrap.getClass(bm.implement)===f){for(var i=0,a=bm.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==s){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(bm.include){try{qx.Mixin.checkCompatibility(bm.include);
}catch(bq){throw new Error('Error in include definition of class "'+name+'"! '+bq.message);
}}if(bm.environment){for(var bo in bm.environment){if(bo.substr(0,bo.indexOf(k))!=name.substr(0,name.indexOf(k))){throw new Error('Forbidden environment setting "'+bo+'" found in "'+name+'". It is forbidden to define a '+'environment setting for an external namespace!');
}}}if(bm.settings){for(var bo in bm.settings){if(bo.substr(0,bo.indexOf(k))!=name.substr(0,name.indexOf(k))){throw new Error('Forbidden setting "'+bo+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(bm.variants){for(var bo in bm.variants){if(bo.substr(0,bo.indexOf(k))!=name.substr(0,name.indexOf(k))){throw new Error('Forbidden variant "'+bo+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__O:qx.core.Environment.select("qx.debug",{"true":function(br){var bt=br.superclass;

while(bt){if(bt.$$classtype!=="abstract"){break;
}var bs=bt.$$implements;

if(bs){for(var i=0;i<bs.length;i++){qx.Interface.assert(br,bs[i],true);
}}bt=bt.superclass;
}},"default":function(){}}),__P:function(name,bu,bv,bw,bx,by,bz){var bC;

if(!bv&&qx.core.Environment.get("qx.aspects")==false){bC=bw||{};
qx.Bootstrap.setDisplayNames(bC,name);
}else{var bC={};

if(bv){if(!bx){bx=this.__Y();
}
if(this.__bb(bv,bz)){bC=this.__bc(bx,name,bu);
}else{bC=bx;
}if(bu==="singleton"){bC.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bx,name,"constructor");
}if(bw){qx.Bootstrap.setDisplayNames(bw,name);
var bD;

for(var i=0,a=qx.Bootstrap.getKeys(bw),l=a.length;i<l;i++){bD=a[i];
var bA=bw[bD];

if(qx.core.Environment.get("qx.aspects")){if(bA instanceof Function){bA=qx.core.Aspect.wrap(name+"."+bD,bA,"static");
}bC[bD]=bA;
}else{bC[bD]=bA;
}}}}var bB=qx.Bootstrap.createNamespace(name,bC);
bC.name=bC.classname=name;
bC.basename=bB;
bC.$$type="Class";

if(bu){bC.$$classtype=bu;
}if(!bC.hasOwnProperty("toString")){bC.toString=this.genericToString;
}
if(bv){qx.Bootstrap.extendClass(bC,bx,bv,name,bB);
if(by){if(qx.core.Environment.get("qx.aspects")){by=qx.core.Aspect.wrap(name,by,"destructor");
}bC.$$destructor=by;
qx.Bootstrap.setDisplayName(by,name,"destruct");
}}this.$$registry[name]=bC;
return bC;
},__Q:function(bE,bF,bG){if(qx.core.Environment.get("qx.debug")){if(typeof bF!=="object"||qx.Bootstrap.getClass(bF)==="Array"){throw new Error(bE.classname+": the events must be defined as map!");
}
for(var bH in bF){if(typeof bF[bH]!=="string"){throw new Error(bE.classname+"/"+bH+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(bE.$$events&&bG!==true){for(var bH in bF){if(bE.$$events[bH]!==undefined&&bE.$$events[bH]!==bF[bH]){throw new Error(bE.classname+"/"+bH+": the event value/type cannot be changed from "+bE.$$events[bH]+" to "+bF[bH]);
}}}}
if(bE.$$events){for(var bH in bF){bE.$$events[bH]=bF[bH];
}}else{bE.$$events=bF;
}},__R:function(bI,bJ,bK){if(!qx.core.Environment.get("module.property")){throw new Error("Property module disabled.");
}var bL;

if(bK===undefined){bK=false;
}var bM=bI.prototype;

for(var name in bJ){bL=bJ[name];
if(qx.core.Environment.get("qx.debug")){this.__S(bI,name,bL,bK);
}bL.name=name;
if(!bL.refine){if(bI.$$properties===undefined){bI.$$properties={};
}bI.$$properties[name]=bL;
}if(bL.init!==undefined){bI.prototype["$$init_"+name]=bL.init;
}if(bL.event!==undefined){if(!qx.core.Environment.get("module.events")){throw new Error("Events module not enabled.");
}var event={};
event[bL.event]="qx.event.type.Data";
this.__Q(bI,event,bK);
}if(bL.inheritable){this.__M.$$inheritable[name]=true;

if(!bM.$$refreshInheritables){this.__M.attachRefreshInheritables(bI);
}}
if(!bL.refine){this.__M.attachMethods(bI,name,bL);
}}},__S:qx.core.Environment.select("qx.debug",{"true":function(bN,name,bO,bP){if(!qx.core.Environment.get("module.property")){throw new Error("Property module disabled.");
}var bR=this.hasProperty(bN,name);

if(bR){var bQ=this.getPropertyDefinition(bN,name);

if(bO.refine&&bQ.init===undefined){throw new Error("Could not refine an init value if there was previously no init value defined. Property '"+name+"' of class '"+bN.classname+"'.");
}}
if(!bR&&bO.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+bN.classname+"'!");
}
if(bR&&!bP){throw new Error("Class "+bN.classname+" already has a property: "+name+"!");
}
if(bR&&bP){if(!bO.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+bN.classname+', original class: '+this.getByProperty(bN,name).classname+'.');
}
for(var bS in bO){if(bS!=="init"&&bS!=="refine"){throw new Error("Class "+bN.classname+" could not refine property: "+name+"! Key: "+bS+" could not be refined!");
}}}var bT=bO.group?this.__M.$$allowedGroupKeys:this.__M.$$allowedKeys;

for(var bS in bO){if(bT[bS]===undefined){throw new Error('The configuration key "'+bS+'" of property "'+name+'" in class "'+bN.classname+'" is not allowed!');
}
if(bO[bS]===undefined){throw new Error('Invalid key "'+bS+'" of property "'+name+'" in class "'+bN.classname+'"! The value is undefined: '+bO[bS]);
}
if(bT[bS]!==null&&typeof bO[bS]!==bT[bS]){throw new Error('Invalid type of key "'+bS+'" of property "'+name+'" in class "'+bN.classname+'"! The type of the key must be "'+bT[bS]+'"!');
}}
if(bO.transform!=null){if(!(typeof bO.transform=="string")){throw new Error('Invalid transform definition of property "'+name+'" in class "'+bN.classname+'"! Needs to be a String.');
}}
if(bO.check!=null){if(!qx.Bootstrap.isString(bO.check)&&!qx.Bootstrap.isArray(bO.check)&&!qx.Bootstrap.isFunction(bO.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+bN.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__T:function(bU,bV,bW,bX,bY){var ca=bU.prototype;
var cc,cb;
qx.Bootstrap.setDisplayNames(bV,bU.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bV),l=a.length;i<l;i++){cc=a[i];
cb=bV[cc];

if(qx.core.Environment.get("qx.debug")){if(ca[cc]!==undefined&&cc.charAt(0)=="_"&&cc.charAt(1)=="_"){throw new Error('Overwriting private member "'+cc+'" of Class "'+bU.classname+'" is not allowed!');
}
if(bW!==true&&ca.hasOwnProperty(cc)){throw new Error('Overwriting member "'+cc+'" of Class "'+bU.classname+'" is not allowed!');
}}if(bX!==false&&cb instanceof Function&&cb.$$type==null){if(bY==true){cb=this.__U(cb,ca[cc]);
}else{if(ca[cc]){cb.base=ca[cc];
}cb.self=bU;
}
if(qx.core.Environment.get("qx.aspects")){cb=qx.core.Aspect.wrap(bU.classname+"."+cc,cb,"member");
}}ca[cc]=cb;
}},__U:function(cd,ce){if(ce){return function(){var cg=cd.base;
cd.base=ce;
var cf=cd.apply(this,arguments);
cd.base=cg;
return cf;
};
}else{return cd;
}},__V:function(ch,ci){if(qx.core.Environment.get("qx.debug")){if(!ch||!ci){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(ch,ci)){throw new Error('Interface "'+ci.name+'" is already used by Class "'+ch.classname+'!');
}if(ch.$$classtype!=="abstract"){qx.Interface.assert(ch,ci,true);
}}var cj=qx.Interface.flatten([ci]);

if(ch.$$implements){ch.$$implements.push(ci);
ch.$$flatImplements.push.apply(ch.$$flatImplements,cj);
}else{ch.$$implements=[ci];
ch.$$flatImplements=cj;
}},__W:function(ck){var name=ck.classname;
var cl=this.__bc(ck,name,ck.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(ck),l=a.length;i<l;i++){cm=a[i];
cl[cm]=ck[cm];
}cl.prototype=ck.prototype;
var co=ck.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(co),l=a.length;i<l;i++){cm=a[i];
var cp=co[cm];
if(cp&&cp.self==ck){cp.self=cl;
}}for(var cm in this.$$registry){var cn=this.$$registry[cm];

if(!cn){continue;
}
if(cn.base==ck){cn.base=cl;
}
if(cn.superclass==ck){cn.superclass=cl;
}
if(cn.$$original){if(cn.$$original.base==ck){cn.$$original.base=cl;
}
if(cn.$$original.superclass==ck){cn.$$original.superclass=cl;
}}}qx.Bootstrap.createNamespace(name,cl);
this.$$registry[name]=cl;
return cl;
},__X:function(cq,cr,cs){if(qx.core.Environment.get("qx.debug")){if(!cq||!cr){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(cq,cr)){return;
}var cv=cq.$$original;

if(cr.$$constructor&&!cv){cq=this.__W(cq);
}var cu=qx.Mixin.flatten([cr]);
var ct;

for(var i=0,l=cu.length;i<l;i++){ct=cu[i];
if(ct.$$events){this.__Q(cq,ct.$$events,cs);
}if(ct.$$properties){this.__R(cq,ct.$$properties,cs);
}if(ct.$$members){this.__T(cq,ct.$$members,cs,cs,cs);
}}if(cq.$$includes){cq.$$includes.push(cr);
cq.$$flatIncludes.push.apply(cq.$$flatIncludes,cu);
}else{cq.$$includes=[cr];
cq.$$flatIncludes=cu;
}},__Y:function(){function cw(){cw.base.apply(this,arguments);
}return cw;
},__ba:function(){return function(){};
},__bb:function(cx,cy){if(qx.core.Environment.get(m)){return true;
}if(cx&&cx.$$includes){var cz=cx.$$flatIncludes;

for(var i=0,l=cz.length;i<l;i++){if(cz[i].$$constructor){return true;
}}}if(cy){var cA=qx.Mixin.flatten(cy);

for(var i=0,l=cA.length;i<l;i++){if(cA[i].$$constructor){return true;
}}}return false;
},__bc:function(cB,name,cC){var cE=function(){var cH=cE;

if(qx.core.Environment.get(m)){if(!(this instanceof cH)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(cC===c){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(cC===e){if(!cH.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}var cG=cH.$$original.apply(this,arguments);
if(cH.$$includes){var cF=cH.$$flatIncludes;

for(var i=0,l=cF.length;i<l;i++){if(cF[i].$$constructor){cF[i].$$constructor.apply(this,arguments);
}}}
if(qx.core.Environment.get(m)){if(this.classname===name){this.$$initialized=true;
}}return cG;
};

if(qx.core.Environment.get(d)){var cD=qx.core.Aspect.wrap(name,cE,b);
cE.$$original=cB;
cE.constructor=cD;
cE=cD;
}cE.$$original=cB;
cB.wrapper=cE;
return cE;
}},defer:function(){if(qx.core.Environment.get(d)){for(var cI in qx.Bootstrap.$$registry){var cJ=qx.Bootstrap.$$registry[cI];

for(var cK in cJ){if(cJ[cK] instanceof Function){cJ[cK]=qx.core.Aspect.wrap(cI+k+cK,cJ[cK],h);
}}}}}});
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
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var m="get",l="",k="[",h=".",g="last",f="change",d="]",c="Number",b="String",a="qx.debug.databinding",J="set",I="deepBinding",H="item",G="reset",F="qx.debug",E="' (",D="Boolean",C=") to the object '",B="Integer",A=" of object ",u="qx.event.type.Data",v="qx.data.SingleValueBinding",s="Binding property ",t="Can not remove the bindings for null object!",q="Binding from '",r="PositiveNumber",n="PositiveInteger",p="Binding does not exist!",w=" is not an data (qx.event.type.Data) event on ",x=").",z="Date",y=" not possible: No event available. ";
qx.Class.define(v,{statics:{__bg:{},bind:function(K,L,M,N,O){var ba=this.__bi(K,L,M,N,O);
var U=L.split(h);
var Q=this.__bo(U);
var Y=[];
var V=[];
var W=[];
var S=[];
var T=K;
try{for(var i=0;i<U.length;i++){if(Q[i]!==l){S.push(f);
}else{S.push(this.__bj(T,U[i]));
}Y[i]=T;
if(i==U.length-1){if(Q[i]!==l){var be=Q[i]===g?T.length-1:Q[i];
var P=T.getItem(be);
this.__bn(P,M,N,O,K);
W[i]=this.__bp(T,S[i],M,N,O,Q[i]);
}else{if(U[i]!=null&&T[m+qx.lang.String.firstUp(U[i])]!=null){var P=T[m+qx.lang.String.firstUp(U[i])]();
this.__bn(P,M,N,O,K);
}W[i]=this.__bp(T,S[i],M,N,O);
}}else{var bb={index:i,propertyNames:U,sources:Y,listenerIds:W,arrayIndexValues:Q,targetObject:M,targetPropertyChain:N,options:O,listeners:V};
var X=qx.lang.Function.bind(this.__bh,this,bb);
V.push(X);
W[i]=T.addListener(S[i],X);
}if(T[m+qx.lang.String.firstUp(U[i])]==null){T=null;
}else if(Q[i]!==l){T=T[m+qx.lang.String.firstUp(U[i])](Q[i]);
}else{T=T[m+qx.lang.String.firstUp(U[i])]();
}
if(!T){break;
}}}catch(bf){for(var i=0;i<Y.length;i++){if(Y[i]&&W[i]){Y[i].removeListenerById(W[i]);
}}var bd=ba.targets;
var R=ba.listenerIds[i];
for(var i=0;i<bd.length;i++){if(bd[i]&&R[i]){bd[i].removeListenerById(R[i]);
}}throw bf;
}var bc={type:I,listenerIds:W,sources:Y,targetListenerIds:ba.listenerIds,targets:ba.targets};
this.__bq(bc,K,L,M,N);
return bc;
},__bh:function(bg){if(bg.options&&bg.options.onUpdate){bg.options.onUpdate(bg.sources[bg.index],bg.targetObject);
}for(var j=bg.index+1;j<bg.propertyNames.length;j++){var bk=bg.sources[j];
bg.sources[j]=null;

if(!bk){continue;
}bk.removeListenerById(bg.listenerIds[j]);
}var bk=bg.sources[bg.index];
for(var j=bg.index+1;j<bg.propertyNames.length;j++){if(bg.arrayIndexValues[j-1]!==l){bk=bk[m+qx.lang.String.firstUp(bg.propertyNames[j-1])](bg.arrayIndexValues[j-1]);
}else{bk=bk[m+qx.lang.String.firstUp(bg.propertyNames[j-1])]();
}bg.sources[j]=bk;
if(!bk){this.__bk(bg.targetObject,bg.targetPropertyChain);
break;
}if(j==bg.propertyNames.length-1){if(qx.Class.implementsInterface(bk,qx.data.IListData)){var bl=bg.arrayIndexValues[j]===g?bk.length-1:bg.arrayIndexValues[j];
var bi=bk.getItem(bl);
this.__bn(bi,bg.targetObject,bg.targetPropertyChain,bg.options,bg.sources[bg.index]);
bg.listenerIds[j]=this.__bp(bk,f,bg.targetObject,bg.targetPropertyChain,bg.options,bg.arrayIndexValues[j]);
}else{if(bg.propertyNames[j]!=null&&bk[m+qx.lang.String.firstUp(bg.propertyNames[j])]!=null){var bi=bk[m+qx.lang.String.firstUp(bg.propertyNames[j])]();
this.__bn(bi,bg.targetObject,bg.targetPropertyChain,bg.options,bg.sources[bg.index]);
}var bj=this.__bj(bk,bg.propertyNames[j]);
bg.listenerIds[j]=this.__bp(bk,bj,bg.targetObject,bg.targetPropertyChain,bg.options);
}}else{if(bg.listeners[j]==null){var bh=qx.lang.Function.bind(this.__bh,this,bg);
bg.listeners.push(bh);
}if(qx.Class.implementsInterface(bk,qx.data.IListData)){var bj=f;
}else{var bj=this.__bj(bk,bg.propertyNames[j]);
}bg.listenerIds[j]=bk.addListener(bj,bg.listeners[j]);
}}},__bi:function(bm,bn,bo,bp,bq){var bu=bp.split(h);
var bs=this.__bo(bu);
var bz=[];
var by=[];
var bw=[];
var bv=[];
var bt=bo;
for(var i=0;i<bu.length-1;i++){if(bs[i]!==l){bv.push(f);
}else{try{bv.push(this.__bj(bt,bu[i]));
}catch(e){break;
}}bz[i]=bt;
var bx=function(){for(var j=i+1;j<bu.length-1;j++){var bC=bz[j];
bz[j]=null;

if(!bC){continue;
}bC.removeListenerById(bw[j]);
}var bC=bz[i];
for(var j=i+1;j<bu.length-1;j++){var bA=qx.lang.String.firstUp(bu[j-1]);
if(bs[j-1]!==l){var bD=bs[j-1]===g?bC.getLength()-1:bs[j-1];
bC=bC[m+bA](bD);
}else{bC=bC[m+bA]();
}bz[j]=bC;
if(by[j]==null){by.push(bx);
}if(qx.Class.implementsInterface(bC,qx.data.IListData)){var bB=f;
}else{try{var bB=qx.data.SingleValueBinding.__bj(bC,bu[j]);
}catch(e){break;
}}bw[j]=bC.addListener(bB,by[j]);
}qx.data.SingleValueBinding.updateTarget(bm,bn,bo,bp,bq);
};
by.push(bx);
bw[i]=bt.addListener(bv[i],bx);
var br=qx.lang.String.firstUp(bu[i]);
if(bt[m+br]==null){bt=null;
}else if(bs[i]!==l){bt=bt[m+br](bs[i]);
}else{bt=bt[m+br]();
}
if(!bt){break;
}}return {listenerIds:bw,targets:bz};
},updateTarget:function(bE,bF,bG,bH,bI){var bJ=this.getValueFromObject(bE,bF);
bJ=qx.data.SingleValueBinding.__br(bJ,bG,bH,bI,bE);
this.__bl(bG,bH,bJ);
},getValueFromObject:function(o,bK){var bO=this.__bm(o,bK);
var bM;

if(bO!=null){var bQ=bK.substring(bK.lastIndexOf(h)+1,bK.length);
if(bQ.charAt(bQ.length-1)==d){var bL=bQ.substring(bQ.lastIndexOf(k)+1,bQ.length-1);
var bN=bQ.substring(0,bQ.lastIndexOf(k));
var bP=bO[m+qx.lang.String.firstUp(bN)]();

if(bL==g){bL=bP.length-1;
}
if(bP!=null){bM=bP.getItem(bL);
}}else{bM=bO[m+qx.lang.String.firstUp(bQ)]();
}}return bM;
},__bj:function(bR,bS){var bT=this.__bs(bR,bS);
if(bT==null){if(qx.Class.supportsEvent(bR.constructor,bS)){bT=bS;
}else if(qx.Class.supportsEvent(bR.constructor,f+qx.lang.String.firstUp(bS))){bT=f+qx.lang.String.firstUp(bS);
}else{throw new qx.core.AssertionError(s+bS+A+bR+y);
}}return bT;
},__bk:function(bU,bV){var bW=this.__bm(bU,bV);

if(bW!=null){var bX=bV.substring(bV.lastIndexOf(h)+1,bV.length);
if(bX.charAt(bX.length-1)==d){this.__bl(bU,bV,null);
return;
}if(bW[G+qx.lang.String.firstUp(bX)]!=undefined){bW[G+qx.lang.String.firstUp(bX)]();
}else{bW[J+qx.lang.String.firstUp(bX)](null);
}}},__bl:function(bY,ca,cb){var cf=this.__bm(bY,ca);

if(cf!=null){var cg=ca.substring(ca.lastIndexOf(h)+1,ca.length);
if(cg.charAt(cg.length-1)==d){var cc=cg.substring(cg.lastIndexOf(k)+1,cg.length-1);
var ce=cg.substring(0,cg.lastIndexOf(k));
var cd=bY;

if(!qx.Class.implementsInterface(cd,qx.data.IListData)){cd=cf[m+qx.lang.String.firstUp(ce)]();
}
if(cc==g){cc=cd.length-1;
}
if(cd!=null){cd.setItem(cc,cb);
}}else{cf[J+qx.lang.String.firstUp(cg)](cb);
}}},__bm:function(ch,ci){var cl=ci.split(h);
var cm=ch;
for(var i=0;i<cl.length-1;i++){try{var ck=cl[i];
if(ck.indexOf(d)==ck.length-1){var cj=ck.substring(ck.indexOf(k)+1,ck.length-1);
ck=ck.substring(0,ck.indexOf(k));
}if(ck!=l){cm=cm[m+qx.lang.String.firstUp(ck)]();
}if(cj!=null){if(cj==g){cj=cm.length-1;
}cm=cm.getItem(cj);
cj=null;
}}catch(cn){return null;
}}return cm;
},__bn:function(co,cp,cq,cr,cs){co=this.__br(co,cp,cq,cr,cs);
if(co===undefined){this.__bk(cp,cq);
}if(co!==undefined){try{this.__bl(cp,cq,co);
if(cr&&cr.onUpdate){cr.onUpdate(cs,cp,co);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cr&&cr.onSetFail){cr.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+co+" on "+cp+". Error message: "+e);
}}}},__bo:function(ct){var cu=[];
for(var i=0;i<ct.length;i++){var name=ct[i];
if(qx.lang.String.endsWith(name,d)){var cv=name.substring(name.indexOf(k)+1,name.indexOf(d));
if(name.indexOf(d)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cv!==g){if(cv==l||isNaN(parseInt(cv,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){ct[i]=name.substring(0,name.indexOf(k));
cu[i]=l;
cu[i+1]=cv;
ct.splice(i+1,0,H);
i++;
}else{cu[i]=cv;
ct.splice(i,1,H);
}}else{cu[i]=l;
}}return cu;
},__bp:function(cw,cx,cy,cz,cA,cB){if(qx.core.Environment.get(F)){var cC=qx.Class.getEventType(cw.constructor,cx);
qx.core.Assert.assertEquals(u,cC,cx+w+cw+h);
}var cE=function(cF,e){if(cF!==l){if(cF===g){cF=cw.length-1;
}var cI=cw.getItem(cF);
if(cI===undefined){qx.data.SingleValueBinding.__bk(cy,cz);
}var cG=e.getData().start;
var cH=e.getData().end;

if(cF<cG||cF>cH){return;
}}else{var cI=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+cw+" by "+cx+" to "+cy+" ("+cz+")");
qx.log.Logger.debug("Data before conversion: "+cI);
}cI=qx.data.SingleValueBinding.__br(cI,cy,cz,cA,cw);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cI);
}try{if(cI!==undefined){qx.data.SingleValueBinding.__bl(cy,cz,cI);
}else{qx.data.SingleValueBinding.__bk(cy,cz);
}if(cA&&cA.onUpdate){cA.onUpdate(cw,cy,cI);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cA&&cA.onSetFail){cA.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cI+" on "+cy+". Error message: "+e);
}}};
if(!cB){cB=l;
}cE=qx.lang.Function.bind(cE,cw,cB);
var cD=cw.addListener(cx,cE);
return cD;
},__bq:function(cJ,cK,cL,cM,cN){if(this.__bg[cK.toHashCode()]===undefined){this.__bg[cK.toHashCode()]=[];
}this.__bg[cK.toHashCode()].push([cJ,cK,cL,cM,cN]);
},__br:function(cO,cP,cQ,cR,cS){if(cR&&cR.converter){var cU;

if(cP.getModel){cU=cP.getModel();
}return cR.converter(cO,cU,cS,cP);
}else{var cW=this.__bm(cP,cQ);
var cX=cQ.substring(cQ.lastIndexOf(h)+1,cQ.length);
if(cW==null){return cO;
}var cV=qx.Class.getPropertyDefinition(cW.constructor,cX);
var cT=cV==null?l:cV.check;
return this.__bt(cO,cT);
}},__bs:function(cY,da){var db=qx.Class.getPropertyDefinition(cY.constructor,da);

if(db==null){return null;
}return db.event;
},__bt:function(dc,dd){var de=qx.lang.Type.getClass(dc);
if((de==c||de==b)&&(dd==B||dd==n)){dc=parseInt(dc,10);
}if((de==D||de==c||de==z)&&dd==b){dc=dc+l;
}if((de==c||de==b)&&(dd==c||dd==r)){dc=parseFloat(dc);
}return dc;
},removeBindingFromObject:function(df,dg){if(dg.type==I){for(var i=0;i<dg.sources.length;i++){if(dg.sources[i]){dg.sources[i].removeListenerById(dg.listenerIds[i]);
}}for(var i=0;i<dg.targets.length;i++){if(dg.targets[i]){dg.targets[i].removeListenerById(dg.targetListenerIds[i]);
}}}else{df.removeListenerById(dg);
}var dh=this.__bg[df.toHashCode()];
if(dh!=undefined){for(var i=0;i<dh.length;i++){if(dh[i][0]==dg){qx.lang.Array.remove(dh,dh[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(di){if(qx.core.Environment.get(F)){qx.core.Assert.assertNotNull(di,t);
}var dj=this.__bg[di.toHashCode()];

if(dj!=undefined){for(var i=dj.length-1;i>=0;i--){this.removeBindingFromObject(di,dj[i][0]);
}}},getAllBindingsForObject:function(dk){if(this.__bg[dk.toHashCode()]===undefined){this.__bg[dk.toHashCode()]=[];
}return this.__bg[dk.toHashCode()];
},removeAllBindings:function(){for(var dm in this.__bg){var dl=qx.core.ObjectRegistry.fromHashCode(dm);
if(dl==null){delete this.__bg[dm];
continue;
}this.removeAllBindingsForObject(dl);
}this.__bg={};
},getAllBindings:function(){return this.__bg;
},showBindingInLog:function(dn,dp){var dr;
for(var i=0;i<this.__bg[dn.toHashCode()].length;i++){if(this.__bg[dn.toHashCode()][i][0]==dp){dr=this.__bg[dn.toHashCode()][i];
break;
}}
if(dr===undefined){var dq=p;
}else{var dq=q+dr[1]+E+dr[2]+C+dr[3]+E+dr[4]+x;
}qx.log.Logger.debug(dq);
},showAllBindingsInLog:function(){for(var dt in this.__bg){var ds=qx.core.ObjectRegistry.fromHashCode(dt);

for(var i=0;i<this.__bg[dt].length;i++){this.showBindingInLog(ds,this.__bg[dt][i][0]);
}}}}});
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
(function(){var m="qx.debug",k="The second parameter must be an array.",j="mshtml",h="engine.name",g="The first parameter must be an array.",f="Parameter must be an array.",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Bootstrap.define(d,{statics:{toArray:function(n,o){return this.cast(n,Array,o);
},cast:function(p,q,r){if(p.constructor===q){return p;
}
if(qx.data&&qx.data.IListData){if(qx.Class&&qx.Class.hasInterface(p,qx.data.IListData)){var p=p.toArray();
}}var s=new q;
if((qx.core.Environment.get(h)==j)){if(p.item){for(var i=r||0,l=p.length;i<l;i++){s.push(p[i]);
}return s;
}}if(Object.prototype.toString.call(p)===e&&r==null){s.push.apply(s,p);
}else{s.push.apply(s,Array.prototype.slice.call(p,r||0));
}return s;
},fromArguments:function(t,u){return Array.prototype.slice.call(t,u||0);
},fromCollection:function(v){if((qx.core.Environment.get(h)==j)){if(v.item){var w=[];

for(var i=0,l=v.length;i<l;i++){w[i]=v[i];
}return w;
}}return Array.prototype.slice.call(v,0);
},fromShortHand:function(x){var z=x.length;
var y=qx.lang.Array.clone(x);
switch(z){case 1:y[1]=y[2]=y[3]=y[0];
break;
case 2:y[2]=y[0];
case 3:y[3]=y[1];
}return y;
},clone:function(A){return A.concat();
},insertAt:function(B,C,i){B.splice(i,0,C);
return B;
},insertBefore:function(D,E,F){var i=D.indexOf(F);

if(i==-1){D.push(E);
}else{D.splice(i,0,E);
}return D;
},insertAfter:function(G,H,I){var i=G.indexOf(I);

if(i==-1||i==(G.length-1)){G.push(H);
}else{G.splice(i+1,0,H);
}return G;
},removeAt:function(J,i){return J.splice(i,1)[0];
},removeAll:function(K){K.length=0;
return this;
},append:function(L,M){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(L,g);
qx.core.Assert&&qx.core.Assert.assertArray(M,k);
}Array.prototype.push.apply(L,M);
return L;
},exclude:function(N,O){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(N,g);
qx.core.Assert&&qx.core.Assert.assertArray(O,k);
}
for(var i=0,Q=O.length,P;i<Q;i++){P=N.indexOf(O[i]);

if(P!=-1){N.splice(P,1);
}}return N;
},remove:function(R,S){var i=R.indexOf(S);

if(i!=-1){R.splice(i,1);
return S;
}},contains:function(T,U){return T.indexOf(U)!==-1;
},equals:function(V,W){var length=V.length;

if(length!==W.length){return false;
}
for(var i=0;i<length;i++){if(V[i]!==W[i]){return false;
}}return true;
},sum:function(X){var Y=0;

for(var i=0,l=X.length;i<l;i++){Y+=X[i];
}return Y;
},max:function(ba){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(ba,f);
}var i,bc=ba.length,bb=ba[0];

for(i=1;i<bc;i++){if(ba[i]>bb){bb=ba[i];
}}return bb===undefined?null:bb;
},min:function(bd){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(bd,f);
}var i,bf=bd.length,be=bd[0];

for(i=1;i<bf;i++){if(bd[i]<be){be=bd[i];
}}return be===undefined?null:be;
},unique:function(bg){var bq=[],bi={},bl={},bn={};
var bm,bh=0;
var br=c+qx.lang.Date.now();
var bj=false,bp=false,bs=false;
for(var i=0,bo=bg.length;i<bo;i++){bm=bg[i];
if(bm===null){if(!bj){bj=true;
bq.push(bm);
}}else if(bm===undefined){}else if(bm===false){if(!bp){bp=true;
bq.push(bm);
}}else if(bm===true){if(!bs){bs=true;
bq.push(bm);
}}else if(typeof bm===a){if(!bi[bm]){bi[bm]=1;
bq.push(bm);
}}else if(typeof bm===b){if(!bl[bm]){bl[bm]=1;
bq.push(bm);
}}else{var bk=bm[br];

if(bk==null){bk=bm[br]=bh++;
}
if(!bn[bk]){bn[bk]=bm;
bq.push(bm);
}}}for(var bk in bn){try{delete bn[bk][br];
}catch(bt){try{bn[bk][br]=null;
}catch(bu){throw new Error("Cannot clean-up map entry doneObjects["+bk+"]["+br+"]");
}}}return bq;
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
(function(){var j="()",i="qx.debug",h=".",g=".prototype.",f="Invalid parameter 'func'.",e='anonymous()',d="Trying to call a bound function with a disposed object as context: ",c=" :: ",b="qx.lang.Function",a=".constructor()";
qx.Bootstrap.define(b,{statics:{getCaller:function(k){return k.caller?k.caller.callee:k.callee.caller;
},getName:function(l){if(l.displayName){return l.displayName;
}
if(l.$$original||l.wrapper||l.classname){return l.classname+a;
}
if(l.$$mixin){for(var n in l.$$mixin.$$members){if(l.$$mixin.$$members[n]==l){return l.$$mixin.name+g+n+j;
}}for(var n in l.$$mixin){if(l.$$mixin[n]==l){return l.$$mixin.name+h+n+j;
}}}
if(l.self){var o=l.self.constructor;

if(o){for(var n in o.prototype){if(o.prototype[n]==l){return o.classname+g+n+j;
}}for(var n in o){if(o[n]==l){return o.classname+h+n+j;
}}}}var m=l.toString().match(/function\s*(\w*)\s*\(.*/);

if(m&&m.length>=1&&m[1]){return m[1]+j;
}return e;
},globalEval:function(p){if(window.execScript){return window.execScript(p);
}else{return eval.call(window,p);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(q,r){if(qx.core.Environment.get(i)){qx.core.Assert&&qx.core.Assert.assertFunction(q,f);
}if(!r){return q;
}if(!(r.self||r.args||r.delay!=null||r.periodical!=null||r.attempt)){return q;
}return function(event){if(qx.core.Environment.get(i)){if(qx.core&&qx.core.Object&&r.self instanceof qx.core.Object){qx.core.Assert&&qx.core.Assert.assertFalse(r.self.isDisposed(),d+r.self.toString()+c+qx.lang.Function.getName(q));
}}var t=qx.lang.Array.fromArguments(arguments);
if(r.args){t=r.args.concat(t);
}
if(r.delay||r.periodical){var s=qx.event.GlobalError.observeMethod(function(){return q.apply(r.self||this,t);
});

if(r.delay){return window.setTimeout(s,r.delay);
}
if(r.periodical){return window.setInterval(s,r.periodical);
}}else if(r.attempt){var u=false;

try{u=q.apply(r.self||this,t);
}catch(v){}return u;
}else{return q.apply(r.self||this,t);
}};
},bind:function(w,self,x){return this.create(w,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(y,z){return this.create(y,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(A,self,B){if(arguments.length<3){return function(event){return A.call(self||this,event||window.event);
};
}else{var C=qx.lang.Array.fromArguments(arguments,2);
return function(event){var D=[event||window.event];
D.push.apply(D,C);
A.apply(self||this,D);
};
}},attempt:function(E,self,F){return this.create(E,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(G,H,self,I){return this.create(G,{delay:H,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(J,K,self,L){return this.create(J,{periodical:K,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
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
(function(){var j="qx.debug",h="qx.debug.dispose",g="$$hash",f="-",e="",d="qx.core.ObjectRegistry",c="-0";
qx.Class.define(d,{statics:{inShutDown:false,__j:{},__bV:0,__bW:[],__bX:e,__bY:{},register:function(k){var o=this.__j;

if(!o){return;
}var n=k.$$hash;

if(n==null){var m=this.__bW;

if(m.length>0&&!qx.core.Environment.get(h)){n=m.pop();
}else{n=(this.__bV++)+this.__bX;
}k.$$hash=n;

if(qx.core.Environment.get(h)){if(qx.dev&&qx.dev.Debug&&qx.dev.Debug.disposeProfilingActive){this.__bY[n]=qx.dev.StackTrace.getStackTrace();
}}}
if(qx.core.Environment.get(j)){if(!k.dispose){throw new Error("Invalid object: "+k);
}}o[n]=k;
},unregister:function(p){var q=p.$$hash;

if(q==null){return;
}var r=this.__j;

if(r&&r[q]){delete r[q];
this.__bW.push(q);
}try{delete p.$$hash;
}catch(s){if(p.removeAttribute){p.removeAttribute(g);
}}},toHashCode:function(t){if(qx.core.Environment.get(j)){if(t==null){throw new Error("Invalid object: "+t);
}}var v=t.$$hash;

if(v!=null){return v;
}var u=this.__bW;

if(u.length>0){v=u.pop();
}else{v=(this.__bV++)+this.__bX;
}return t.$$hash=v;
},clearHashCode:function(w){if(qx.core.Environment.get(j)){if(w==null){throw new Error("Invalid object: "+w);
}}var x=w.$$hash;

if(x!=null){this.__bW.push(x);
try{delete w.$$hash;
}catch(y){if(w.removeAttribute){w.removeAttribute(g);
}}}},fromHashCode:function(z){return this.__j[z]||null;
},shutdown:function(){this.inShutDown=true;
var B=this.__j;
var D=[];

for(var C in B){D.push(C);
}D.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var A,i=0,l=D.length;

while(true){try{for(;i<l;i++){C=D[i];
A=B[C];

if(A&&A.dispose){A.dispose();
}}}catch(E){qx.Bootstrap.error(this,"Could not dispose object "+A.toString()+": "+E,E);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__j;
},getRegistry:function(){return this.__j;
},getNextHash:function(){return this.__bV;
},getPostId:function(){return this.__bX;
},getStackTraces:function(){return this.__bY;
}},defer:function(F){if(window&&window.top){var frames=window.top.frames;

for(var i=0;i<frames.length;i++){if(frames[i]===window){F.__bX=f+(i+1);
return;
}}}F.__bX=c;
}});
})();
(function(){var f="ecmascript.objectcount",d="stack",c="ecmascript.stacktrace",b="stacktrace",a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
},getStackTrace:function(){var e=new Error();
return e.stacktrace?b:e.stack?d:null;
}},defer:function(g){qx.core.Environment.add(f,g.getObjectCount);
qx.core.Environment.add(c,g.getStackTrace);
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
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
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
(function(){var k="qx.debug",j="unknown",h="node",g="error",f="...(+",e="array",d=")",c="info",b="instance",a="string",I="null",H="class",G="number",F="stringify",E="]",D="date",C="function",B="boolean",A="debug",z="map",s="undefined",t="qx.log.Logger",q="[",r="#",o="warn",p="document",m="{...(",n="text[",u="[...(",v="\n",x=")}",w=")]",y="object";
qx.Class.define(t,{statics:{__co:A,setLevel:function(J){this.__co=J;
},getLevel:function(){return this.__co;
},setTreshold:function(K){this.__cr.setMaxMessages(K);
},getTreshold:function(){return this.__cr.getMaxMessages();
},__cp:{},__cq:0,register:function(L){if(L.$$id){return;
}var N=this.__cq++;
this.__cp[N]=L;
L.$$id=N;
var M=this.__cs;
var O=this.__cr.getAllLogEvents();

for(var i=0,l=O.length;i<l;i++){if(M[O[i].level]>=M[this.__co]){L.process(O[i]);
}}},unregister:function(P){var Q=P.$$id;

if(Q==null){return;
}delete this.__cp[Q];
delete P.$$id;
},debug:function(R,S){qx.log.Logger.__ct(A,arguments);
},info:function(T,U){qx.log.Logger.__ct(c,arguments);
},warn:function(V,W){qx.log.Logger.__ct(o,arguments);
},error:function(X,Y){qx.log.Logger.__ct(g,arguments);
},trace:function(ba){qx.log.Logger.__ct(c,[ba,qx.dev.StackTrace.getStackTrace().join(v)]);
},deprecatedMethodWarning:function(bb,bc){if(qx.core.Environment.get(k)){var bd=qx.lang.Function.getName(bb);
this.warn("The method '"+bd+"' is deprecated: "+(bc||"Please consult the API documentation of this method for alternatives."));
this.trace();
}},deprecatedClassWarning:function(be,bf){if(qx.core.Environment.get(k)){var bg=be.classname||j;
this.warn("The class '"+bg+"' is deprecated: "+(bf||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedEventWarning:function(bh,event,bi){if(qx.core.Environment.get(k)){var bj=bh.self?bh.self.classname:j;
this.warn("The event '"+(event||"unknown")+"' from class '"+bj+"' is deprecated: "+(bi||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedMixinWarning:function(bk,bl){if(qx.core.Environment.get(k)){var bm=bk?bk.name:j;
this.warn("The mixin '"+bm+"' is deprecated: "+(bl||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedConstantWarning:function(bn,bo,bp){if(qx.core.Environment.get(k)){if(bn.__defineGetter__){var self=this;
var bq=bn[bo];
bn.__defineGetter__(bo,function(){self.warn("The constant '"+bo+"' is deprecated: "+(bp||"Please consult the API documentation for alternatives."));
self.trace();
return bq;
});
}}},deprecateMethodOverriding:function(br,bs,bt,bu){if(qx.core.Environment.get(k)){var bv=br.constructor;

while(bv.classname!==bs.classname){if(bv.prototype.hasOwnProperty(bt)){this.warn("The method '"+qx.lang.Function.getName(br[bt])+"' overrides a deprecated method: "+(bu||"Please consult the API documentation for alternatives."));
this.trace();
break;
}bv=bv.superclass;
}}},clear:function(){this.__cr.clearHistory();
},__cr:new qx.log.appender.RingBuffer(50),__cs:{debug:0,info:1,warn:2,error:3},__ct:function(bw,bx){var bC=this.__cs;

if(bC[bw]<bC[this.__co]){return;
}var bz=bx.length<2?null:bx[0];
var bB=bz?1:0;
var by=[];

for(var i=bB,l=bx.length;i<l;i++){by.push(this.__cv(bx[i],true));
}var bD=new Date;
var bE={time:bD,offset:bD-qx.Bootstrap.LOADSTART,level:bw,items:by,win:window};
if(bz){if(bz.$$hash!==undefined){bE.object=bz.$$hash;
}else if(bz.$$type){bE.clazz=bz;
}}this.__cr.process(bE);
var bF=this.__cp;

for(var bA in bF){bF[bA].process(bE);
}},__cu:function(bG){if(bG===undefined){return s;
}else if(bG===null){return I;
}
if(bG.$$type){return H;
}var bH=typeof bG;

if(bH===C||bH==a||bH===G||bH===B){return bH;
}else if(bH===y){if(bG.nodeType){return h;
}else if(bG.classname){return b;
}else if(bG instanceof Array){return e;
}else if(bG instanceof Error){return g;
}else if(bG instanceof Date){return D;
}else{return z;
}}
if(bG.toString){return F;
}return j;
},__cv:function(bI,bJ){var bQ=this.__cu(bI);
var bM=j;
var bL=[];

switch(bQ){case I:case s:bM=bQ;
break;
case a:case G:case B:case D:bM=bI;
break;
case h:if(bI.nodeType===9){bM=p;
}else if(bI.nodeType===3){bM=n+bI.nodeValue+E;
}else if(bI.nodeType===1){bM=bI.nodeName.toLowerCase();

if(bI.id){bM+=r+bI.id;
}}else{bM=h;
}break;
case C:bM=qx.lang.Function.getName(bI)||bQ;
break;
case b:bM=bI.basename+q+bI.$$hash+E;
break;
case H:case F:bM=bI.toString();
break;
case g:bL=qx.dev.StackTrace.getStackTraceFromError(bI);
bM=bI.toString();
break;
case e:if(bJ){bM=[];

for(var i=0,l=bI.length;i<l;i++){if(bM.length>20){bM.push(f+(l-i)+d);
break;
}bM.push(this.__cv(bI[i],false));
}}else{bM=u+bI.length+w;
}break;
case z:if(bJ){var bK;
var bP=[];

for(var bO in bI){bP.push(bO);
}bP.sort();
bM=[];

for(var i=0,l=bP.length;i<l;i++){if(bM.length>20){bM.push(f+(l-i)+d);
break;
}bO=bP[i];
bK=this.__cv(bI[bO],false);
bK.key=bO;
bM.push(bK);
}}else{var bN=0;

for(var bO in bI){bN++;
}bM=m+bN+x;
}break;
}return {type:bQ,text:bM,trace:bL};
}},defer:function(bR){var bS=qx.Bootstrap.$$logs;

for(var i=0;i<bS.length;i++){bR.__ct(bS[i][0],bS[i][1]);
}qx.Bootstrap.debug=bR.debug;
qx.Bootstrap.info=bR.info;
qx.Bootstrap.warn=bR.warn;
qx.Bootstrap.error=bR.error;
qx.Bootstrap.trace=bR.trace;
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
(function(){var m="on",l="engine.name",k="gecko",j="engine.version",i="qx.debug",h="function",g="undefined",f="mousedown",d="qx.bom.Event",c="mouseover",a="HTMLEvents",b="return;";
qx.Bootstrap.define(d,{statics:{addNativeListener:function(n,o,p,q){if(n.addEventListener){n.addEventListener(o,p,!!q);
}else if(n.attachEvent){n.attachEvent(m+o,p);
}else if(typeof n[m+o]!=g){n[m+o]=p;
}else{if(qx.core.Environment.get(i)){qx.log.Logger.warn("No method available to add native listener to "+n);
}}},removeNativeListener:function(r,s,t,u){if(r.removeEventListener){r.removeEventListener(s,t,!!u);
}else if(r.detachEvent){try{r.detachEvent(m+s,t);
}catch(e){if(e.number!==-2146828218){throw e;
}}}else if(typeof r[m+s]!=g){r[m+s]=null;
}else{if(qx.core.Environment.get(i)){qx.log.Logger.warn("No method available to remove native listener from "+r);
}}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(l)==k)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===c){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((qx.core.Environment.get(l)==k)&&parseFloat(qx.core.Environment.get(j))>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if((qx.core.Environment.get(l)==k)&&parseFloat(qx.core.Environment.get(j))<1.9){try{e.keyCode=0;
}catch(v){}}}else{try{e.keyCode=0;
}catch(w){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(x,y){if(document.createEvent){var z=document.createEvent(a);
z.initEvent(y,true,true);
return !x.dispatchEvent(z);
}else{var z=document.createEventObject();
return x.fireEvent(m+y,z);
}},supportsEvent:function(A,B){var C=m+B;
var D=(C in A);

if(!D){D=typeof A[C]==h;

if(!D&&A.setAttribute){A.setAttribute(C,b);
D=typeof A[C]==h;
A.removeAttribute(C);
}}return D;
}}});
})();
(function(){var k="qx.debug",j="|bubble",h="|capture",g="|",f="': ",e="'",d="",c="_",b="Invalid Target.",a="Invalid capture flag.",J="Invalid event type.",I=" from the target '",H="Invalid callback function",G="Invalid event target.",F="unload",E="Failed to remove event listener for id '",D="Invalid context for callback.",C="__cD",B="Failed to add event listener for type '",A="UNKNOWN_",s="capture",t="qx.event.Manager",q="' on target '",r="Could not dispatch event '",o="DOM_",p="__cC",m="QX_",n=" to the target '",u="Failed to remove event listener for type '",v="Invalid id type.",x="c",w="DOCUMENT_",z="WIN_",y="Invalid event object.";
qx.Class.define(t,{extend:Object,construct:function(K,L){this.__cy=K;
this.__cz=qx.core.ObjectRegistry.toHashCode(K);
this.__cA=L;
if(K.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(K,F,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(K,F,arguments.callee);
self.dispose();
}));
}this.__cB={};
this.__cC={};
this.__cD={};
this.__cE={};
},statics:{__cF:0,getNextUniqueId:function(){return (this.__cF++)+d;
}},members:{__cA:null,__cB:null,__cD:null,__cG:null,__cC:null,__cE:null,__cy:null,__cz:null,getWindow:function(){return this.__cy;
},getWindowId:function(){return this.__cz;
},getHandler:function(M){var N=this.__cC[M.classname];

if(N){return N;
}return this.__cC[M.classname]=new M(this);
},getDispatcher:function(O){var P=this.__cD[O.classname];

if(P){return P;
}return this.__cD[O.classname]=new O(this,this.__cA);
},getListeners:function(Q,R,S){var T=Q.$$hash||qx.core.ObjectRegistry.toHashCode(Q);
var V=this.__cB[T];

if(!V){return null;
}var W=R+(S?h:j);
var U=V[W];
return U?U.concat():null;
},getAllListeners:function(){return this.__cB;
},serializeListeners:function(X){var bf=X.$$hash||qx.core.ObjectRegistry.toHashCode(X);
var bh=this.__cB[bf];
var bd=[];

if(bh){var bb,bg,Y,bc,be;

for(var ba in bh){bb=ba.indexOf(g);
bg=ba.substring(0,bb);
Y=ba.charAt(bb+1)==x;
bc=bh[ba];

for(var i=0,l=bc.length;i<l;i++){be=bc[i];
bd.push({self:be.context,handler:be.handler,type:bg,capture:Y});
}}}return bd;
},toggleAttachedEvents:function(bi,bj){var bo=bi.$$hash||qx.core.ObjectRegistry.toHashCode(bi);
var bq=this.__cB[bo];

if(bq){var bl,bp,bk,bm;

for(var bn in bq){bl=bn.indexOf(g);
bp=bn.substring(0,bl);
bk=bn.charCodeAt(bl+1)===99;
bm=bq[bn];

if(bj){this.__cH(bi,bp,bk);
}else{this.__cI(bi,bp,bk);
}}}},hasListener:function(br,bs,bt){if(qx.core.Environment.get(k)){if(br==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+br);
}}var bu=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);
var bw=this.__cB[bu];

if(!bw){return false;
}var bx=bs+(bt?h:j);
var bv=bw[bx];
return !!(bv&&bv.length>0);
},importListeners:function(by,bz){if(qx.core.Environment.get(k)){if(by==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+by);
}}var bF=by.$$hash||qx.core.ObjectRegistry.toHashCode(by);
var bG=this.__cB[bF]={};
var bC=qx.event.Manager;

for(var bA in bz){var bD=bz[bA];
var bE=bD.type+(bD.capture?h:j);
var bB=bG[bE];

if(!bB){bB=bG[bE]=[];
this.__cH(by,bD.type,bD.capture);
}bB.push({handler:bD.listener,context:bD.self,unique:bD.unique||(bC.__cF++)+d});
}},addListener:function(bH,bI,bJ,self,bK){if(qx.core.Environment.get(k)){var bO=B+bI+e+n+bH.classname+f;
qx.core.Assert.assertObject(bH,bO+b);
qx.core.Assert.assertString(bI,bO+J);
qx.core.Assert.assertFunction(bJ,bO+H);

if(bK!==undefined){qx.core.Assert.assertBoolean(bK,a);
}}var bP=bH.$$hash||qx.core.ObjectRegistry.toHashCode(bH);
var bR=this.__cB[bP];

if(!bR){bR=this.__cB[bP]={};
}var bN=bI+(bK?h:j);
var bM=bR[bN];

if(!bM){bM=bR[bN]=[];
}if(bM.length===0){this.__cH(bH,bI,bK);
}var bQ=(qx.event.Manager.__cF++)+d;
var bL={handler:bJ,context:self,unique:bQ};
bM.push(bL);
return bN+g+bQ;
},findHandler:function(bS,bT){var cg=false,bX=false,ch=false,bU=false;
var ce;

if(bS.nodeType===1){cg=true;
ce=o+bS.tagName.toLowerCase()+c+bT;
}else if(bS.nodeType===9){bU=true;
ce=w+bT;
}else if(bS==this.__cy){bX=true;
ce=z+bT;
}else if(bS.classname){ch=true;
ce=m+bS.classname+c+bT;
}else{ce=A+bS+c+bT;
}var ca=this.__cE;

if(ca[ce]){return ca[ce];
}var cd=this.__cA.getHandlers();
var bY=qx.event.IEventHandler;
var cb,cc,bW,bV;

for(var i=0,l=cd.length;i<l;i++){cb=cd[i];
bW=cb.SUPPORTED_TYPES;

if(bW&&!bW[bT]){continue;
}bV=cb.TARGET_CHECK;

if(bV){var cf=false;

if(cg&&((bV&bY.TARGET_DOMNODE)!=0)){cf=true;
}else if(bX&&((bV&bY.TARGET_WINDOW)!=0)){cf=true;
}else if(ch&&((bV&bY.TARGET_OBJECT)!=0)){cf=true;
}else if(bU&&((bV&bY.TARGET_DOCUMENT)!=0)){cf=true;
}
if(!cf){continue;
}}cc=this.getHandler(cd[i]);

if(cb.IGNORE_CAN_HANDLE||cc.canHandleEvent(bS,bT)){ca[ce]=cc;
return cc;
}}return null;
},__cH:function(ci,cj,ck){var cl=this.findHandler(ci,cj);

if(cl){cl.registerEvent(ci,cj,ck);
return;
}
if(qx.core.Environment.get(k)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cj+"' on target '"+ci+"'!");
}},removeListener:function(cm,cn,co,self,cp){if(qx.core.Environment.get(k)){var ct=u+cn+e+I+cm.classname+f;
qx.core.Assert.assertObject(cm,ct+b);
qx.core.Assert.assertString(cn,ct+J);
qx.core.Assert.assertFunction(co,ct+H);

if(self!==undefined){qx.core.Assert.assertObject(self,D);
}
if(cp!==undefined){qx.core.Assert.assertBoolean(cp,a);
}}var cu=cm.$$hash||qx.core.ObjectRegistry.toHashCode(cm);
var cv=this.__cB[cu];

if(!cv){return false;
}var cq=cn+(cp?h:j);
var cr=cv[cq];

if(!cr){return false;
}var cs;

for(var i=0,l=cr.length;i<l;i++){cs=cr[i];

if(cs.handler===co&&cs.context===self){qx.lang.Array.removeAt(cr,i);

if(cr.length==0){this.__cI(cm,cn,cp);
}return true;
}}return false;
},removeListenerById:function(cw,cx){if(qx.core.Environment.get(k)){var cD=E+cx+e+I+cw.classname+f;
qx.core.Assert.assertObject(cw,cD+b);
qx.core.Assert.assertString(cx,cD+v);
}var cB=cx.split(g);
var cG=cB[0];
var cy=cB[1].charCodeAt(0)==99;
var cF=cB[2];
var cE=cw.$$hash||qx.core.ObjectRegistry.toHashCode(cw);
var cH=this.__cB[cE];

if(!cH){return false;
}var cC=cG+(cy?h:j);
var cA=cH[cC];

if(!cA){return false;
}var cz;

for(var i=0,l=cA.length;i<l;i++){cz=cA[i];

if(cz.unique===cF){qx.lang.Array.removeAt(cA,i);

if(cA.length==0){this.__cI(cw,cG,cy);
}return true;
}}return false;
},removeAllListeners:function(cI){var cM=cI.$$hash||qx.core.ObjectRegistry.toHashCode(cI);
var cO=this.__cB[cM];

if(!cO){return false;
}var cK,cN,cJ;

for(var cL in cO){if(cO[cL].length>0){cK=cL.split(g);
cN=cK[0];
cJ=cK[1]===s;
this.__cI(cI,cN,cJ);
}}delete this.__cB[cM];
return true;
},deleteAllListeners:function(cP){delete this.__cB[cP];
},__cI:function(cQ,cR,cS){var cT=this.findHandler(cQ,cR);

if(cT){cT.unregisterEvent(cQ,cR,cS);
return;
}
if(qx.core.Environment.get(k)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cR+"' on target '"+cQ+"'!");
}},dispatchEvent:function(cU,event){if(qx.core.Environment.get(k)){var da=r+event+q+cU.classname+f;
qx.core.Assert.assertNotUndefined(cU,da+G);
qx.core.Assert.assertNotNull(cU,da+G);
qx.core.Assert.assertInstance(event,qx.event.type.Event,da+y);
}var db=event.getType();

if(!event.getBubbles()&&!this.hasListener(cU,db)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cU);
}var cY=this.__cA.getDispatchers();
var cX;
var cW=false;

for(var i=0,l=cY.length;i<l;i++){cX=this.getDispatcher(cY[i]);
if(cX.canDispatchEvent(cU,event,db)){cX.dispatchEvent(cU,event,db);
cW=true;
break;
}}
if(!cW){if(qx.core.Environment.get(k)){qx.log.Logger.error(this,"No dispatcher can handle event of type "+db+" on "+cU);
}return true;
}var cV=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cV;
},dispose:function(){this.__cA.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,p);
qx.util.DisposeUtil.disposeMap(this,C);
this.__cB=this.__cy=this.__cG=null;
this.__cA=this.__cE=null;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var k="qx.debug",j="Invalid event target.",i="Invalid event dispatcher!",h="': ",g="Invalid event handler.",f="' on target '",e="Could not fire event '",d="undefined",c="qx.event.Registration";
qx.Class.define(c,{statics:{__cJ:{},getManager:function(l){if(l==null){if(qx.core.Environment.get(k)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}l=window;
}else if(l.nodeType){l=qx.dom.Node.getWindow(l);
}else if(!qx.dom.Node.isWindow(l)){l=window;
}var n=l.$$hash||qx.core.ObjectRegistry.toHashCode(l);
var m=this.__cJ[n];

if(!m){m=new qx.event.Manager(l,this);
this.__cJ[n]=m;
}return m;
},removeManager:function(o){var p=o.getWindowId();
delete this.__cJ[p];
},addListener:function(q,r,s,self,t){return this.getManager(q).addListener(q,r,s,self,t);
},removeListener:function(u,v,w,self,x){return this.getManager(u).removeListener(u,v,w,self,x);
},removeListenerById:function(y,z){return this.getManager(y).removeListenerById(y,z);
},removeAllListeners:function(A){return this.getManager(A).removeAllListeners(A);
},deleteAllListeners:function(B){var C=B.$$hash;

if(C){this.getManager(B).deleteAllListeners(C);
}},hasListener:function(D,E,F){return this.getManager(D).hasListener(D,E,F);
},serializeListeners:function(G){return this.getManager(G).serializeListeners(G);
},createEvent:function(H,I,J){if(qx.core.Environment.get(k)){if(arguments.length>1&&I===undefined){throw new Error("Create event of type "+H+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(I==null){I=qx.event.type.Event;
}var K=qx.event.Pool.getInstance().getObject(I);
J?K.init.apply(K,J):K.init();
if(H){K.setType(H);
}return K;
},dispatchEvent:function(L,event){return this.getManager(L).dispatchEvent(L,event);
},fireEvent:function(M,N,O,P){if(qx.core.Environment.get(k)){if(arguments.length>2&&O===undefined&&P!==undefined){throw new Error("Create event of type "+N+" with undefined class. Please use null to explicit fallback to default event type!");
}var Q=e+N+f+(M?M.classname:d)+h;
qx.core.Assert.assertNotUndefined(M,Q+j);
qx.core.Assert.assertNotNull(M,Q+j);
}var R=this.createEvent(N,O||null,P);
return this.getManager(M).dispatchEvent(M,R);
},fireNonBubblingEvent:function(S,T,U,V){if(qx.core.Environment.get(k)){if(arguments.length>2&&U===undefined&&V!==undefined){throw new Error("Create event of type "+T+" with undefined class. Please use null to explicit fallback to default event type!");
}}var W=this.getManager(S);

if(!W.hasListener(S,T,false)){return true;
}var X=this.createEvent(T,U||null,V);
return W.dispatchEvent(S,X);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cC:[],addHandler:function(Y){if(qx.core.Environment.get(k)){qx.core.Assert.assertInterface(Y,qx.event.IEventHandler,g);
}this.__cC.push(Y);
this.__cC.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__cC;
},__cD:[],addDispatcher:function(ba,bb){if(qx.core.Environment.get(k)){qx.core.Assert.assertInterface(ba,qx.event.IEventDispatcher,i);
}this.__cD.push(ba);
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
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var e="qx.debug",d="set",c="reset",b="get",a="qx.core.MProperty";
qx.Mixin.define(a,{members:{set:function(f,g){var i=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(f)){if(!this[i[f]]){if(this[d+qx.Bootstrap.firstUp(f)]!=undefined){this[d+qx.Bootstrap.firstUp(f)](g);
return this;
}
if(qx.core.Environment.get(e)){qx.Bootstrap.error(new Error("No such property: "+f));
return this;
}}return this[i[f]](g);
}else{for(var h in f){if(!this[i[h]]){if(this[d+qx.Bootstrap.firstUp(h)]!=undefined){this[d+qx.Bootstrap.firstUp(h)](f[h]);
continue;
}
if(qx.core.Environment.get(e)){qx.Bootstrap.error(new Error("No such property: "+h));
return this;
}}this[i[h]](f[h]);
}return this;
}},get:function(j){var k=qx.core.Property.$$method.get;

if(!this[k[j]]){if(this[b+qx.Bootstrap.firstUp(j)]!=undefined){return this[b+qx.Bootstrap.firstUp(j)]();
}
if(qx.core.Environment.get(e)){qx.Bootstrap.error(new Error("No such property: "+j));
return this;
}}return this[k[j]]();
},reset:function(l){var m=qx.core.Property.$$method.reset;

if(!this[m[l]]){if(this[c+qx.Bootstrap.firstUp(l)]!=undefined){this[c+qx.Bootstrap.firstUp(l)]();
return;
}
if(qx.core.Environment.get(e)){qx.Bootstrap.error(new Error("No such property: "+l));
return;
}}this[m[l]]();
}}});
})();
(function(){var a="qx.core.MAssert";
qx.Mixin.define(a,{members:{assert:function(b,c){qx.core.Assert.assert(b,c);
},fail:function(d,e){qx.core.Assert.fail(d,e);
},assertTrue:function(f,g){qx.core.Assert.assertTrue(f,g);
},assertFalse:function(h,i){qx.core.Assert.assertFalse(h,i);
},assertEquals:function(j,k,l){qx.core.Assert.assertEquals(j,k,l);
},assertNotEquals:function(m,n,o){qx.core.Assert.assertNotEquals(m,n,o);
},assertIdentical:function(p,q,r){qx.core.Assert.assertIdentical(p,q,r);
},assertNotIdentical:function(s,t,u){qx.core.Assert.assertNotIdentical(s,t,u);
},assertNotUndefined:function(v,w){qx.core.Assert.assertNotUndefined(v,w);
},assertUndefined:function(x,y){qx.core.Assert.assertUndefined(x,y);
},assertNotNull:function(z,A){qx.core.Assert.assertNotNull(z,A);
},assertNull:function(B,C){qx.core.Assert.assertNull(B,C);
},assertJsonEquals:function(D,E,F){qx.core.Assert.assertJsonEquals(D,E,F);
},assertMatch:function(G,H,I){qx.core.Assert.assertMatch(G,H,I);
},assertArgumentsCount:function(J,K,L,M){qx.core.Assert.assertArgumentsCount(J,K,L,M);
},assertEventFired:function(N,event,O,P,Q){qx.core.Assert.assertEventFired(N,event,O,P,Q);
},assertEventNotFired:function(R,event,S,T){qx.core.Assert.assertEventNotFired(R,event,S,T);
},assertException:function(U,V,W,X){qx.core.Assert.assertException(U,V,W,X);
},assertInArray:function(Y,ba,bb){qx.core.Assert.assertInArray(Y,ba,bb);
},assertArrayEquals:function(bc,bd,be){qx.core.Assert.assertArrayEquals(bc,bd,be);
},assertKeyInMap:function(bf,bg,bh){qx.core.Assert.assertKeyInMap(bf,bg,bh);
},assertFunction:function(bi,bj){qx.core.Assert.assertFunction(bi,bj);
},assertString:function(bk,bl){qx.core.Assert.assertString(bk,bl);
},assertBoolean:function(bm,bn){qx.core.Assert.assertBoolean(bm,bn);
},assertNumber:function(bo,bp){qx.core.Assert.assertNumber(bo,bp);
},assertPositiveNumber:function(bq,br){qx.core.Assert.assertPositiveNumber(bq,br);
},assertInteger:function(bs,bt){qx.core.Assert.assertInteger(bs,bt);
},assertPositiveInteger:function(bu,bv){qx.core.Assert.assertPositiveInteger(bu,bv);
},assertInRange:function(bw,bx,by,bz){qx.core.Assert.assertInRange(bw,bx,by,bz);
},assertObject:function(bA,bB){qx.core.Assert.assertObject(bA,bB);
},assertArray:function(bC,bD){qx.core.Assert.assertArray(bC,bD);
},assertMap:function(bE,bF){qx.core.Assert.assertMap(bE,bF);
},assertRegExp:function(bG,bH){qx.core.Assert.assertRegExp(bG,bH);
},assertType:function(bI,bJ,bK){qx.core.Assert.assertType(bI,bJ,bK);
},assertInstance:function(bL,bM,bN){qx.core.Assert.assertInstance(bL,bM,bN);
},assertInterface:function(bO,bP,bQ){qx.core.Assert.assertInterface(bO,bP,bQ);
},assertCssColor:function(bR,bS,bT){qx.core.Assert.assertCssColor(bR,bS,bT);
},assertElement:function(bU,bV){qx.core.Assert.assertElement(bU,bV);
},assertQxObject:function(bW,bX){qx.core.Assert.assertQxObject(bW,bX);
},assertQxWidget:function(bY,ca){qx.core.Assert.assertQxWidget(bY,ca);
}}});
})();
(function(){var n="qx.disposerDebugLevel",m="qx.debug",k="rv:1.8.1",j="module.property",h="MSIE 6.0",g="module.events",f="qx.core.Object",e="[",d="$$user_",c="]",a="object",b="Object";
qx.Class.define(f,{extend:Object,include:qx.core.Environment.filter({"module.databinding":qx.data.MBinding,"module.logger":qx.core.MLogging,"module.events":qx.core.MEvents,"module.property":qx.core.MProperty,"qx.debug":qx.core.MAssert}),construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:b},members:{__M:qx.core.Environment.get("module.property")?qx.core.Property:null,toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+e+this.$$hash+c;
},base:function(o,p){if(qx.core.Environment.get(m)){if(!qx.Bootstrap.isFunction(o.callee.base)){throw new Error("Cannot call super class. Method is not derived: "+o.callee.displayName);
}}
if(arguments.length===1){return o.callee.base.call(this);
}else{return o.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(q){return q.callee.self;
},clone:function(){if(!qx.core.Environment.get(j)){throw new Error("Cloning only possible with properties.");
}var s=this.constructor;
var r=new s;
var u=qx.Class.getProperties(s);
var t=this.__M.$$store.user;
var v=this.__M.$$method.set;
var name;
for(var i=0,l=u.length;i<l;i++){name=u[i];

if(this.hasOwnProperty(t[name])){r[v[name]](this[t[name]]);
}}return r;
},__cL:null,setUserData:function(w,x){if(!this.__cL){this.__cL={};
}this.__cL[w]=x;
},getUserData:function(y){if(!this.__cL){return null;
}var z=this.__cL[y];
return z===undefined?null:z;
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Environment.get(m)){if(qx.core.Environment.get(n)>2){qx.Bootstrap.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var C=this.constructor;
var A;

while(C.superclass){if(C.$$destructor){C.$$destructor.call(this);
}if(C.$$includes){A=C.$$flatIncludes;

for(var i=0,l=A.length;i<l;i++){if(A[i].$$destructor){A[i].$$destructor.call(this);
}}}C=C.superclass;
}if(this.__cM){this.__cM();
}if(qx.core.Environment.get(m)){if(qx.core.Environment.get(n)>0){var D,B;

for(D in this){B=this[D];
if(B!==null&&typeof B===a&&!(qx.Bootstrap.isString(B))){if(this.constructor.prototype[D]!=null){continue;
}var F=navigator.userAgent.indexOf(k)!=-1;
var E=navigator.userAgent.indexOf(h)!=-1;
if(F||E){if(B instanceof qx.core.Object||qx.core.Environment.get(n)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+D+"' in "+this.classname+"["+this.toHashCode()+"]: "+B);
delete this[D];
}}else{if(qx.core.Environment.get(n)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+D+"' in "+this.classname+"["+this.toHashCode()+"]: "+B);
delete this[D];
}}}}}}},__cM:null,__cN:function(){var G=qx.Class.getProperties(this.constructor);

for(var i=0,l=G.length;i<l;i++){delete this[d+G[i]];
}},_disposeObjects:function(H){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(I){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(J){qx.util.DisposeUtil.disposeArray(this,J);
},_disposeMap:function(K){qx.util.DisposeUtil.disposeMap(this,K);
}},environment:{"qx.disposerDebugLevel":0},defer:function(L,M){var O=navigator.userAgent.indexOf(h)!=-1;
var N=navigator.userAgent.indexOf(k)!=-1;
if(O||N){M.__cM=M.__cN;
}},destruct:function(){if(qx.core.Environment.get(g)){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}}qx.core.ObjectRegistry.unregister(this);
this.__cL=null;
if(qx.core.Environment.get(j)){var R=this.constructor;
var V;
var W=this.__M.$$store;
var T=W.user;
var U=W.theme;
var P=W.inherit;
var S=W.useinit;
var Q=W.init;

while(R){V=R.$$properties;

if(V){for(var name in V){if(V[name].dereference){this[T[name]]=this[U[name]]=this[P[name]]=this[S[name]]=this[Q[name]]=undefined;
}}}R=R.superclass;
}}}});
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
(function(){var f="qx.debug",e="Cannot stop propagation on a non bubbling event: ",d="Invalid argument value 'cancelable'.",c="Cannot prevent default action on a non cancelable event: ",b="Invalid argument value 'canBubble'.",a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(g,h){if(qx.core.Environment.get(f)){if(g!==undefined){qx.core.Assert.assertBoolean(g,b);
}
if(h!==undefined){qx.core.Assert.assertBoolean(h,d);
}}this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!g;
this._cancelable=!!h;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(i){if(i){var j=i;
}else{var j=qx.event.Pool.getInstance().getObject(this.constructor);
}j._type=this._type;
j._target=this._target;
j._currentTarget=this._currentTarget;
j._relatedTarget=this._relatedTarget;
j._originalTarget=this._originalTarget;
j._stopPropagation=this._stopPropagation;
j._bubbles=this._bubbles;
j._preventDefault=this._preventDefault;
j._cancelable=this._cancelable;
return j;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){if(qx.core.Environment.get(f)){this.assertTrue(this._bubbles,e+this.getType());
}this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){if(qx.core.Environment.get(f)){this.assertTrue(this._cancelable,c+this.getType());
}this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(k){this._type=k;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(l){this._eventPhase=l;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(m){this._target=m;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(n){this._currentTarget=n;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(o){this._relatedTarget=o;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(p){this._originalTarget=p;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(q){this._bubbles=q;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(r){this._cancelable=r;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
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
(function(){var b="qx.debug",a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(c){this._manager=c;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(d,event,e){return !event.getBubbles();
},dispatchEvent:function(f,event,g){if(qx.core.Environment.get(b)){if(f instanceof qx.core.Object){var k=qx.Class.getEventType(f.constructor,g);
var h=qx.Class.getByName(k);

if(!h){this.error("The event type '"+g+"' declared in the class '"+f.constructor+" is not an available class': "+k);
}else if(!(event instanceof h)){this.error("Expected event type to be instanceof '"+k+"' but found '"+event.classname+"'");
}}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
var m=this._manager.getListeners(f,g,false);

if(m){for(var i=0,l=m.length;i<l;i++){var j=m[i].context||f;

if(qx.core.Environment.get(b)){if(j&&j.isDisposed&&j.isDisposed()){this.warn("The context object '"+j+"' for the event '"+g+"' of '"+f+"'is already disposed.");
}}m[i].handler.call(j,event);
}}}},defer:function(n){qx.event.Registration.addDispatcher(n);
}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
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
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__zP:null,handleMouseDown:function(c,d){if(d.isLeftPressed()){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){this._handleSelectEvent(c,d);
this.__zP=true;
}else{this.__zP=false;
}}else if(d.isRightPressed()&&d.getModifiers()==0){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){e.setSelectionInterval(c,c);
}}},handleMouseUp:function(f,g){if(g.isLeftPressed()&&!this.__zP){this._handleSelectEvent(f,g);
}},handleClick:function(h,i){},handleSelectKeyDown:function(j,k){this._handleSelectEvent(j,k);
},handleMoveKeyDown:function(l,m){var o=this.getSelectionModel();

switch(m.getModifiers()){case 0:o.setSelectionInterval(l,l);
break;
case qx.event.type.Dom.SHIFT_MASK:var n=o.getAnchorSelectionIndex();

if(n==-1){o.setSelectionInterval(l,l);
}else{o.setSelectionInterval(n,l);
}break;
}},_handleSelectEvent:function(p,q){var t=this.getSelectionModel();
var r=t.getLeadSelectionIndex();
var s=t.getAnchorSelectionIndex();

if(q.isShiftPressed()){if(p!=r||t.isSelectionEmpty()){if(s==-1){s=p;
}
if(q.isCtrlOrCommandPressed()){t.addSelectionInterval(s,p);
}else{t.setSelectionInterval(s,p);
}}}else if(q.isCtrlOrCommandPressed()){if(t.isSelectedIndex(p)){t.removeSelectionInterval(p,p);
}else{t.addSelectionInterval(p,p);
}}else{t.setSelectionInterval(p,p);
}}}});
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
(function(){var j="px",h="Cell ",g="x",f="demobrowser.demo.table.MUtil",e="500px",d="Column #",c="#FFE",b="div",a="absolute";
qx.Mixin.define(f,{construct:function(){this._tableLeft=10;
},members:{getTableMock:function(){var n=this.getColumnModelMock();
var l=this.getModelMock();
var m=new qx.ui.table.selection.Model();
var o=new qx.ui.table.selection.Manager();
o.setSelectionModel(m);
var k={getTableModel:function(){return l;
},getTableColumnModel:function(){return n;
},getRowHeight:function(){return 20;
},getForceLineHeight:function(){return true;
},getSelectionModel:function(){return m;
},getDataRowRenderer:function(){return new qx.ui.table.rowrenderer.Default(k);
},updateContent:function(){},setFocusedCell:function(p,q){},getKeepFirstVisibleRowComplete:function(){return true;
},_updateScrollBarVisibility:function(){},getSelectionManager:function(){return o;
},getNewTablePaneHeader:function(r){return function(s){var t=new qx.ui.table.pane.Header(s);
return t;
};
},getNewTablePane:function(u){return function(v){return new qx.ui.table.pane.Pane(v);
};
},getEnabled:function(){return true;
}};
return k;
},getSelectionMock:function(){return {isSelectedIndex:function(w){return w==0;
},resetSelection:function(){}};
},getColumnModelMock:function(){return {getColumnCount:function(){return 4;
},getVisibleColumnCount:function(){return 4;
},getVisibleColumnAtX:function(x){return x;
},getColumnWidth:function(y){return 100;
},setColumnWidth:function(z,A){},getVisibleX:function(x){return x;
},getHeaderCellRenderer:function(B){return new qx.ui.table.headerrenderer.Default();
},getDataCellRenderer:function(){return new qx.ui.table.cellrenderer.Default();
},addListener:function(){},removeListener:function(){}};
},getPaneModelMock:function(){var C={getColumnAtX:function(x){return x;
},getColumnCount:function(){return 4;
},getX:function(D){return D;
},getColumnLeft:function(E){return E*100;
},getTotalWidth:function(){return 4*100;
}};
return C;
},getModelMock:function(){return {getSortColumnIndex:function(){return 0;
},isSortAscending:function(){return true;
},isColumnSortable:function(F){return true;
},getColumnName:function(G){return d+G;
},isColumnEditable:function(H){return false;
},sortByColumn:function(I,J){},getRowCount:function(){return 500;
},prefetchRows:function(){},getRowData:function(K){var L=[];

for(var i=0;i<4;i++){L.push(h+i+g+K);
}return L;
},getValue:function(M,N){return h+M+g+N;
}};
},getPaneMock:function(){return {getFirstVisibleRow:function(){return 0;
}};
},getScrollerMock:function(){var P=this.getTableMock();
var O=this.getPaneModelMock();
var Q=this.getPaneMock();
return {getTable:function(){return P;
},getTablePaneModel:function(){return O;
},getTablePane:function(){return Q;
},getShowCellFocusIndicator:function(){return true;
}};
},_getNewTableDiv:function(R){var S=qx.bom.Element.create(b);
qx.bom.element.Style.setStyles(S,{position:a,left:this._tableLeft+j,width:(R||150)+j,top:20+j,height:e,backgroundColor:c});
this._tableLeft+=(R||150)+20;
document.body.appendChild(S);
return S;
}}});
})();
(function(){var n="]",m="..",l="changeSelection",k=" [",h='ie',g="browser.version",f="qx.event.type.Event",d="Ranges:",c="qx.ui.table.selection.Model",b="browser.name",a="_applySelectionMode";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__zx=[];
this.__zy=-1;
this.__zz=-1;
this.hasBatchModeRefCount=0;
this.__zA=false;
},events:{"changeSelection":f},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:a}},members:{__zA:null,__zy:null,__zz:null,__zx:null,_applySelectionMode:function(o){this.resetSelection();
},setBatchMode:function(p){if(p){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__zA){this.__zA=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__zy;
},_setAnchorSelectionIndex:function(q){this.__zy=q;
},getLeadSelectionIndex:function(){return this.__zz;
},_setLeadSelectionIndex:function(r){this.__zz=r;
},_getSelectedRangeArr:function(){return this.__zx;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__zx.length==0;
},getSelectedCount:function(){var t=0;

for(var i=0;i<this.__zx.length;i++){var s=this.__zx[i];
t+=s.maxIndex-s.minIndex+1;
}return t;
},isSelectedIndex:function(u){for(var i=0;i<this.__zx.length;i++){var v=this.__zx[i];

if(u>=v.minIndex&&u<=v.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var w=[];

for(var i=0;i<this.__zx.length;i++){w.push({minIndex:this.__zx[i].minIndex,maxIndex:this.__zx[i].maxIndex});
}return w;
},iterateSelection:function(x,y){for(var i=0;i<this.__zx.length;i++){for(var j=this.__zx[i].minIndex;j<=this.__zx[i].maxIndex;j++){x.call(y,j);
}}},setSelectionInterval:function(z,A){var B=this.self(arguments);

switch(this.getSelectionMode()){case B.NO_SELECTION:return;
case B.SINGLE_SELECTION:if(this.isSelectedIndex(A)){return;
}z=A;
break;
case B.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=z;i<=A;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){if(qx.core.Environment.get(b)==h&&qx.core.Environment.get(g)<=7){this.setBatchMode(false);
}throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(z,A);
this._fireChangeSelection();
},addSelectionInterval:function(C,D){var E=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case E.NO_SELECTION:return;
case E.MULTIPLE_INTERVAL_SELECTION:case E.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(C,D);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(C,D);
break;
}},removeSelectionInterval:function(F,G){this.__zy=F;
this.__zz=G;
var H=Math.min(F,G);
var J=Math.max(F,G);
for(var i=0;i<this.__zx.length;i++){var L=this.__zx[i];

if(L.minIndex>J){break;
}else if(L.maxIndex>=H){var M=(L.minIndex>=H)&&(L.minIndex<=J);
var K=(L.maxIndex>=H)&&(L.maxIndex<=J);

if(M&&K){this.__zx.splice(i,1);
i--;
}else if(M){L.minIndex=J+1;
}else if(K){L.maxIndex=H-1;
}else{var I={minIndex:J+1,maxIndex:L.maxIndex};
this.__zx.splice(i+1,0,I);
L.maxIndex=H-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__zx=[];
this.__zy=-1;
this.__zz=-1;
},_addSelectionInterval:function(N,O){this.__zy=N;
this.__zz=O;
var P=Math.min(N,O);
var R=Math.max(N,O);
var Q=0;

for(;Q<this.__zx.length;Q++){var S=this.__zx[Q];

if(S.minIndex>P){break;
}}this.__zx.splice(Q,0,{minIndex:P,maxIndex:R});
var T=this.__zx[0];

for(var i=1;i<this.__zx.length;i++){var S=this.__zx[i];

if(T.maxIndex+1>=S.minIndex){T.maxIndex=Math.max(T.maxIndex,S.maxIndex);
this.__zx.splice(i,1);
i--;
}else{T=S;
}}},_dumpRanges:function(){var U=d;

for(var i=0;i<this.__zx.length;i++){var V=this.__zx[i];
U+=k+V.minIndex+m+V.maxIndex+n;
}this.debug(U);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__zA=true;
}else{this.fireEvent(l);
}}},destruct:function(){this.__zx=null;
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
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(b,c){},getRowHeightStyle:function(d){},createRowStyle:function(e){},getRowClass:function(f){}}});
})();
(function(){var j="",i="table-row-background-even",h="Boolean",g="content",f="default",e="height:",d="'",c="table-row",b="table-row-background-focused",a="css.boxmodel",v=';color:',u="table-row-background-odd",t="1px solid ",s="table-row-line",r="table-row-background-selected",q="background-color:",p=';border-bottom: 1px solid ',o="table-row-selected",n="table-row-background-focused-selected",m="px;",k="qx.ui.table.rowrenderer.Default",l=";";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__zM=j;
this.__zM={};
this._colors={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(f));
var w=qx.theme.manager.Color.getInstance();
this._colors.bgcolFocusedSelected=w.resolve(n);
this._colors.bgcolFocused=w.resolve(b);
this._colors.bgcolSelected=w.resolve(r);
this._colors.bgcolEven=w.resolve(i);
this._colors.bgcolOdd=w.resolve(u);
this._colors.colSelected=w.resolve(o);
this._colors.colNormal=w.resolve(c);
this._colors.horLine=w.resolve(s);
},properties:{highlightFocusRow:{check:h,init:true}},members:{_colors:null,__zN:null,__zM:null,_insetY:1,_renderFont:function(x){if(x){this.__zN=x.getStyles();
this.__zM=qx.bom.element.Style.compile(this.__zN);
this.__zM=this.__zM.replace(/"/g,d);
}else{this.__zM=j;
this.__zN=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(y,z){var B=this.__zN;
var A=z.style;
qx.bom.element.Style.setStyles(z,B);

if(y.focusedRow&&this.getHighlightFocusRow()){A.backgroundColor=y.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused;
}else{if(y.selected){A.backgroundColor=this._colors.bgcolSelected;
}else{A.backgroundColor=(y.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd;
}}A.color=y.selected?this._colors.colSelected:this._colors.colNormal;
A.borderBottom=t+this._colors.horLine;
},getRowHeightStyle:function(C){if(qx.core.Environment.get(a)==g){C-=this._insetY;
}return e+C+m;
},createRowStyle:function(D){var E=[];
E.push(l);
E.push(this.__zM);
E.push(q);

if(D.focusedRow&&this.getHighlightFocusRow()){E.push(D.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused);
}else{if(D.selected){E.push(this._colors.bgcolSelected);
}else{E.push((D.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd);
}}E.push(v);
E.push(D.selected?this._colors.colSelected:this._colors.colNormal);
E.push(p,this._colors.horLine);
return E.join(j);
},getRowClass:function(F){return j;
},getRowAttributes:function(G){return j;
}},destruct:function(){this._colors=this.__zN=this.__zM=null;
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
(function(){var o="qx.debug",n="Invalid argument 'map'",m="=",k="+",j="Invalid argument 'source'",h="Invalid argument 'target'",g="function",f="Invalid argument 'array'",e="Invalid argument 'minLength'",d="&",a="qx.lang.Object",c="undefined",b="object";
qx.Class.define(a,{statics:{empty:function(p){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(p,n);
}
for(var q in p){if(p.hasOwnProperty(q)){delete p[q];
}}},isEmpty:function(r){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(r,n);
}
for(var s in r){return false;
}return true;
},hasMinLength:function(t,u){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(t,n);
qx.core.Assert&&qx.core.Assert.assertInteger(u,e);
}
if(u<=0){return true;
}var length=0;

for(var v in t){if((++length)>=u){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(w){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(w,n);
}var y=[];
var x=this.getKeys(w);

for(var i=0,l=x.length;i<l;i++){y.push(w[x[i]]);
}return y;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(z,A){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(z,h);
qx.core.Assert&&qx.core.Assert.assertMap(A,j);
}return qx.lang.Object.mergeWith(z,A,false);
},merge:function(B,C){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(B,h);
}var D=arguments.length;

for(var i=1;i<D;i++){qx.lang.Object.mergeWith(B,arguments[i]);
}return B;
},clone:function(E){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(E,j);
}var F={};

for(var G in E){F[G]=E[G];
}return F;
},invert:function(H){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(H,n);
}var I={};

for(var J in H){I[H[J].toString()]=J;
}return I;
},getKeyFromValue:function(K,L){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(K,n);
}
for(var M in K){if(K.hasOwnProperty(M)&&K[M]===L){return M;
}}return null;
},contains:function(N,O){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(N,n);
}return this.getKeyFromValue(N,O)!==null;
},select:function(P,Q){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(Q,n);
}return Q[P];
},fromArray:function(R){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertArray(R,f);
}var S={};

for(var i=0,l=R.length;i<l;i++){if(qx.core.Environment.get(o)){switch(typeof R[i]){case b:case g:case c:throw new Error("Could not convert complex objects like "+R[i]+" at array index "+i+" to map syntax");
}}S[R[i].toString()]=true;
}return S;
},toUriParameter:function(T,U){var X,W=[],V=window.encodeURIComponent;

for(X in T){if(T.hasOwnProperty(X)){if(U){W.push(V(X).replace(/%20/g,k)+m+V(T[X]).replace(/%20/g,k));
}else{W.push(V(X)+m+V(T[X]));
}}}return W.join(d);
}}});
})();
(function(){var h="'",g="qx.bom.webfonts.WebFont",f="",e="qx.debug",d="changeStatus",c=" ",b="_applySources",a="qx.event.type.Data";
qx.Class.define(g,{extend:qx.bom.Font,events:{"changeStatus":a},properties:{sources:{nullable:true,apply:b}},members:{__lq:null,_applySources:function(j,k){var o=[];

for(var i=0,l=j.length;i<l;i++){var n=this._quoteFontFamily(j[i].family);
o.push(n);
var m=j[i].source;
qx.bom.webfonts.Manager.getInstance().require(n,m,this._onWebFontChangeStatus,this);
}this.setFamily(o.concat(this.getFamily()));
},_onWebFontChangeStatus:function(p){var q=p.getData();
this.fireDataEvent(d,q);

if(qx.core.Environment.get(e)){if(q.valid===false){this.warn("WebFont "+q.family+" was not applied, perhaps the source file could not be loaded.");
}}},_quoteFontFamily:function(r){r=r.replace(/["']/g,f);

if(r.indexOf(c)>0){r=h+r+h;
}return r;
}}});
})();
(function(){var n="",k="url('",h="ie",g="browser.name",f="changeStatus",e="svg",d="chrome",c="#",b="firefox",a="eot",U="ios",T="ttf",S="browser.version",R="woff",Q="m",P="os.name",O=")",N="qx.bom.webfonts.Manager",M="singleton",L=",\n",u="src: ",v="mobileSafari",s="'eot)",t="qx.debug",q="interval",r="}\n",o="font-family: ",p="mobile safari",w="safari",y="?#iefix') format('eot')",D=";\n",C="') format('woff')",F="opera",E="\.(",H="os.version",G="') format('svg')",A="'eot')",K="\nfont-style: normal;\nfont-weight: normal;",J="@font-face.*?",I=";",z="@font-face {",B="') format('truetype')";
qx.Class.define(N,{extend:qx.core.Object,type:M,construct:function(){qx.core.Object.call(this);
this.__iY=[];
this.__ja={};
this.__hK=[];
this.__jb=this.getPreferredFormats();
},statics:{FONT_FORMATS:["eot","woff","ttf","svg"],VALIDATION_TIMEOUT:5000},members:{__iY:null,__jc:null,__ja:null,__jb:null,__hK:null,__jd:null,require:function(V,W,X,Y){var ba=[];

for(var i=0,l=W.length;i<l;i++){var bc=W[i].split(c);
var bb=qx.util.ResourceManager.getInstance().toUri(bc[0]);

if(bc.length>1){bb=bb+c+bc[1];
}ba.push(bb);
}if(!(qx.core.Environment.get(g)==h&&qx.bom.client.Browser.getVersion()<9)){this.__je(V,ba,X,Y);
return;
}
if(!this.__jd){this.__jd=new qx.event.Timer(100);
this.__jd.addListener(q,this.__jf,this);
}
if(!this.__jd.isEnabled()){this.__jd.start();
}this.__hK.push([V,ba,X,Y]);
},remove:function(bd){var be=null;

for(var i=0,l=this.__iY.length;i<l;i++){if(this.__iY[i]==bd){be=i;
this.__jl(bd);
break;
}}
if(be){qx.lang.Array.removeAt(this.__iY,be);
}
if(bd in this.__ja){this.__ja[bd].dispose();
delete this.__ja[bd];
}},getPreferredFormats:function(){var bf=[];
var bj=qx.core.Environment.get(g);
var bg=qx.core.Environment.get(S);
var bi=qx.core.Environment.get(P);
var bh=qx.core.Environment.get(H);

if((bj==h&&bg>=9)||(bj==b&&bg>=3.6)||(bj==d&&bg>=6)){bf.push(R);
}
if((bj==F&&bg>=10)||(bj==w&&bg>=3.1)||(bj==b&&bg>=3.5)||(bj==d&&bg>=4)||(bj==p&&bi==U&&bh>=4.2)){bf.push(T);
}
if(bj==h&&bg>=4){bf.push(a);
}
if(bj==v&&bi==U&&bh>=4.1){bf.push(e);
}return bf;
},removeStyleSheet:function(){this.__iY=[];

if(this.__jc){var bk=this.__jc.ownerNode?this.__jc.ownerNode:this.__jc.owningElement;
qx.dom.Element.removeChild(bk,bk.parentNode);
}this.__jc=null;
},__je:function(bl,bm,bn,bo){if(!qx.lang.Array.contains(this.__iY,bl)){var br=this.__jh(bm);
var bq=this.__ji(bl,br);

if(!bq){throw new Error("Couldn't create @font-face rule for WebFont "+bl+"!");
}
if(!this.__jc){this.__jc=qx.bom.Stylesheet.createElement();
}
try{this.__jk(bq);
}catch(bs){if(qx.core.Environment.get(t)){this.warn("Error while adding @font-face rule:",bs.message);
return;
}}this.__iY.push(bl);
}
if(!this.__ja[bl]){this.__ja[bl]=new qx.bom.webfonts.Validator(bl);
this.__ja[bl].setTimeout(qx.bom.webfonts.Manager.VALIDATION_TIMEOUT);
this.__ja[bl].addListenerOnce(f,this.__jg,this);
}
if(bn){var bp=bo||window;
this.__ja[bl].addListenerOnce(f,bn,bp);
}this.__ja[bl].validate();
},__jf:function(){if(this.__hK.length==0){this.__jd.stop();
return;
}var bt=this.__hK.shift();
this.__je.apply(this,bt);
},__jg:function(bu){var bv=bu.getData();

if(bv.valid===false){qx.event.Timer.once(function(){this.remove(bv.family);
},this,250);
}},__jh:function(bw){var by=qx.bom.webfonts.Manager.FONT_FORMATS;
var bB={};

for(var i=0,l=bw.length;i<l;i++){var bz=null;

for(var x=0;x<by.length;x++){var bA=new RegExp(E+by[x]+O);
var bx=bA.exec(bw[i]);

if(bx){bz=bx[1];
}}
if(bz){bB[bz]=bw[i];
}}return bB;
},__ji:function(bC,bD){var bG=[];
var bE=this.__jb.length>0?this.__jb:qx.bom.webfonts.Manager.FONT_FORMATS;

for(var i=0,l=bE.length;i<l;i++){var bF=bE[i];

if(bD[bF]){bG.push(this.__jj(bF,bD[bF]));
}}var bH=u+bG.join(L)+I;
bH=o+bC+D+bH;
bH=bH+K;
return bH;
},__jj:function(bI,bJ){switch(bI){case a:return k+bJ+y;
case R:return k+bJ+C;
case T:return k+bJ+B;
case e:return k+bJ+G;
default:return null;
}},__jk:function(bK){var bM=z+bK+r;

if(qx.core.Environment.get(g)==h&&qx.core.Environment.get(S)<9){var bL=this.__jm(this.__jc.cssText);
bL+=bM;
this.__jc.cssText=bL;
}else{this.__jc.insertRule(bM,this.__jc.cssRules.length);
}},__jl:function(bN){var bQ=new RegExp(J+bN,Q);

for(var i=0,l=document.styleSheets.length;i<l;i++){var bO=document.styleSheets[i];

if(bO.cssText){var bP=bO.cssText.replace(/\n/g,n).replace(/\r/g,n);
bP=this.__jm(bP);

if(bQ.exec(bP)){bP=bP.replace(bQ,n);
}bO.cssText=bP;
}else if(bO.cssRules){for(var j=0,m=bO.cssRules.length;j<m;j++){var bP=bO.cssRules[j].cssText.replace(/\n/g,n).replace(/\r/g,n);

if(bQ.exec(bP)){this.__jc.deleteRule(j);
return;
}}}}},__jm:function(bR){return bR.replace(s,A);
}},destruct:function(){delete this.__iY;
this.removeStyleSheet();

for(var bS in this.__ja){this.__ja[bS].dispose();
}qx.bom.webfonts.Validator.removeDefaultHelperElements();
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
(function(){var k="interval",j="qx.event.Timer",i="_applyInterval",h="func is not a function",g="Boolean",f="qx.debug",d="No timeout given",c="Integer",b="qx.event.type.Event",a="_applyEnabled";
qx.Class.define(j,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);
this.setEnabled(false);

if(l!=null){this.setInterval(l);
}var self=this;
this.__dj=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(m,n,o){if(qx.core.Environment.get(f)){qx.core.Assert.assertFunction(m,h);
qx.core.Assert.assertNotUndefined(o,d);
}var p=new qx.event.Timer(o);
p.__dk=m;
p.addListener(k,function(e){p.stop();
m.call(n,e);
p.dispose();
n=null;
},n);
p.start();
return p;
}},properties:{enabled:{init:true,check:g,apply:a},interval:{check:c,init:1000,apply:i}},members:{__dl:null,__dj:null,_applyInterval:function(q,r){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(s,t){if(t){window.clearInterval(this.__dl);
this.__dl=null;
}else if(s){this.__dl=window.setInterval(this.__dj,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(u){this.setInterval(u);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(v){this.stop();
this.startWith(v);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(k);
}})},destruct:function(){if(this.__dl){window.clearInterval(this.__dl);
}this.__dl=this.__dj=null;
}});
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
(function(){var k="file",j="strict",h="anchor",g="div",f="query",e="source",d="password",c="host",b="protocol",a="qx.debug",B="user",A="directory",z="loose",y="relative",x="queryKey",w="qx.util.Uri",v="",u="path",t="authority",s='">0</a>',q="&",r="port",n='<a href="',p="userInfo",l="?";
qx.Class.define(w,{statics:{parseUri:function(C,D){var E={key:[e,b,t,p,B,d,c,r,y,u,A,k,f,h],q:{name:x,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};
var o=E,m=E.parser[D?j:z].exec(C),F={},i=14;

while(i--){F[o.key[i]]=m[i]||v;
}F[o.q.name]={};
F[o.key[12]].replace(o.q.parser,function(G,H,I){if(H){F[o.q.name][H]=I;
}});
return F;
},appendParamsToUrl:function(J,K){if(K===undefined){return J;
}
if(qx.core.Environment.get(a)){if(!(qx.lang.Type.isString(K)||qx.lang.Type.isObject(K))){throw new Error("params must be either string or object");
}}
if(qx.lang.Type.isObject(K)){K=qx.lang.Object.toUriParameter(K);
}
if(!K){return J;
}return J+=(/\?/).test(J)?q+K:l+K;
},getAbsolute:function(L){var M=document.createElement(g);
M.innerHTML=n+L+s;
return M.firstChild.href;
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
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__bd:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__bd[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__bd[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
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
(function(){var j="",i="engine.name",h="float",g="qx.debug",f="browser.documentmode",e="mshtml",d="Invalid argument 'smart'",c="Invalid argument 'element'",b="style",a="css.float",B="px",A="css.appearance",z="pixelRight",y="css.userselect",x="css.boxsizing",w="css.textoverflow",v="pixelHeight",u=":",t="pixelTop",s="css.borderimage",q="Invalid argument 'name'",r="pixelLeft",o="css.usermodify",p="qx.bom.element.Style",m="pixelBottom",n="Invalid argument 'styles'",k="pixelWidth",l=";";
qx.Class.define(p,{statics:{__iN:function(){var D={"appearance":qx.core.Environment.get(A),"userSelect":qx.core.Environment.get(y),"textOverflow":qx.core.Environment.get(w),"borderImage":qx.core.Environment.get(s),"float":qx.core.Environment.get(a),"userModify":qx.core.Environment.get(o),"boxSizing":qx.core.Environment.get(x)};
this.__iO={};

for(var C in qx.lang.Object.clone(D)){if(!D[C]){delete D[C];
}else{this.__iO[C]=C==h?h:qx.lang.String.hyphenate(D[C]);
}}this.__iP=D;
},__iQ:{width:k,height:v,left:r,right:z,top:t,bottom:m},__iR:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(E){var G=[];
var I=this.__iR;
var H=this.__iO;
var name,F;

for(name in E){F=E[name];

if(F==null){continue;
}name=H[name]||name;
if(I[name]){G.push(I[name].compile(F));
}else{G.push(qx.lang.String.hyphenate(name),u,F,l);
}}return G.join(j);
},setCss:function(J,K){if(qx.core.Environment.get(i)===e&&parseInt(qx.core.Environment.get(f),10)<8){J.style.cssText=K;
}else{J.setAttribute(b,K);
}},getCss:function(L){if(qx.core.Environment.get(i)===e&&parseInt(qx.core.Environment.get(f),10)<8){return L.style.cssText.toLowerCase();
}else{return L.getAttribute(b);
}},isPropertySupported:function(M){return (this.__iR[M]||this.__iP[M]||M in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(N,name,O,P){if(qx.core.Environment.get(g)){qx.core.Assert.assertElement(N,c);
qx.core.Assert.assertString(name,q);

if(P!==undefined){qx.core.Assert.assertBoolean(P,d);
}}name=this.__iP[name]||name;
if(P!==false&&this.__iR[name]){return this.__iR[name].set(N,O);
}else{N.style[name]=O!==null?O:j;
}},setStyles:function(Q,R,S){if(qx.core.Environment.get(g)){qx.core.Assert.assertElement(Q,c);
qx.core.Assert.assertMap(R,n);

if(S!==undefined){qx.core.Assert.assertBoolean(S,d);
}}var V=this.__iP;
var X=this.__iR;
var T=Q.style;

for(var W in R){var U=R[W];
var name=V[W]||W;

if(U===undefined){if(S!==false&&X[name]){X[name].reset(Q);
}else{T[name]=j;
}}else{if(S!==false&&X[name]){X[name].set(Q,U);
}else{T[name]=U!==null?U:j;
}}}},reset:function(Y,name,ba){name=this.__iP[name]||name;
if(ba!==false&&this.__iR[name]){return this.__iR[name].reset(Y);
}else{Y.style[name]=j;
}},get:qx.core.Environment.select(i,{"mshtml":function(bb,name,bc,bd){name=this.__iP[name]||name;
if(bd!==false&&this.__iR[name]){return this.__iR[name].get(bb,bc);
}if(!bb.currentStyle){return bb.style[name]||j;
}switch(bc){case this.LOCAL_MODE:return bb.style[name]||j;
case this.CASCADED_MODE:return bb.currentStyle[name]||j;
default:var bh=bb.currentStyle[name]||j;
if(/^-?[\.\d]+(px)?$/i.test(bh)){return bh;
}var bg=this.__iQ[name];

if(bg){var be=bb.style[name];
bb.style[name]=bh||0;
var bf=bb.style[bg]+B;
bb.style[name]=be;
return bf;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bh)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bh;
}},"default":function(bi,name,bj,bk){name=this.__iP[name]||name;
if(bk!==false&&this.__iR[name]){return this.__iR[name].get(bi,bj);
}switch(bj){case this.LOCAL_MODE:return bi.style[name]||j;
case this.CASCADED_MODE:if(bi.currentStyle){return bi.currentStyle[name]||j;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bl=qx.dom.Node.getDocument(bi);
var bm=bl.defaultView.getComputedStyle(bi,null);
return bm?bm[name]:j;
}}})},defer:function(bn){bn.__iN();
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
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="qx.debug",b="allowShrinkY",a="Wrong 'width' argument. ",E="Something went wrong with the layout of ",D="bottom",C="Wrong 'left' argument. ",B="baseline",A="marginBottom",z="qx.ui.core.LayoutItem",y="center",x="marginTop",w="!",v="allowGrowX",q="middle",r="marginLeft",o="allowShrinkX",p="top",m="right",n="marginRight",k="abstract",l="Wrong 'top' argument. ",s="Wrong 'height' argument. ",t="allowGrowY",u="left";
qx.Class.define(z,{type:k,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[v,o],mode:e,themeable:true},allowStretchY:{group:[t,b],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[x,n,A,r],mode:e,themeable:true},alignX:{check:[u,y,m],nullable:true,apply:d,themeable:true},alignY:{check:[p,q,D,B],nullable:true,apply:d,themeable:true}},members:{__hw:null,__hx:null,__hy:null,__hz:null,__hA:null,__hB:null,__hC:null,getBounds:function(){return this.__hB||this.__hx||null;
},clearSeparators:function(){},renderSeparator:function(F,G){},renderLayout:function(H,top,I,J){if(qx.core.Environment.get(c)){var K=E+this.toString()+w;
this.assertInteger(H,C+K);
this.assertInteger(top,l+K);
this.assertInteger(I,a+K);
this.assertInteger(J,s+K);
}var L=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var L=this._getHeightForWidth(I);
}
if(L!=null&&L!==this.__hw){this.__hw=L;
qx.ui.core.queue.Layout.add(this);
return null;
}var N=this.__hx;

if(!N){N=this.__hx={};
}var M={};

if(H!==N.left||top!==N.top){M.position=true;
N.left=H;
N.top=top;
}
if(I!==N.width||J!==N.height){M.size=true;
N.width=I;
N.height=J;
}if(this.__hy){M.local=true;
delete this.__hy;
}
if(this.__hA){M.margin=true;
delete this.__hA;
}return M;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__hy;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__hy=true;
this.__hz=null;
},getSizeHint:function(O){var P=this.__hz;

if(P){return P;
}
if(O===false){return null;
}P=this.__hz=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__hw&&this.getHeight()==null){P.height=this.__hw;
}if(P.minWidth>P.width){P.width=P.minWidth;
}
if(P.maxWidth<P.width){P.width=P.maxWidth;
}
if(!this.getAllowGrowX()){P.maxWidth=P.width;
}
if(!this.getAllowShrinkX()){P.minWidth=P.width;
}if(P.minHeight>P.height){P.height=P.minHeight;
}
if(P.maxHeight<P.height){P.height=P.maxHeight;
}
if(!this.getAllowGrowY()){P.maxHeight=P.height;
}
if(!this.getAllowShrinkY()){P.minHeight=P.height;
}return P;
},_computeSizeHint:function(){var U=this.getMinWidth()||0;
var R=this.getMinHeight()||0;
var V=this.getWidth()||U;
var T=this.getHeight()||R;
var Q=this.getMaxWidth()||Infinity;
var S=this.getMaxHeight()||Infinity;
return {minWidth:U,width:V,maxWidth:Q,minHeight:R,height:T,maxHeight:S};
},_hasHeightForWidth:function(){var W=this._getLayout();

if(W){return W.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(X){var Y=this._getLayout();

if(Y&&Y.hasHeightForWidth()){return Y.getHeightForWidth(X);
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
},setUserBounds:function(ba,top,bb,bc){this.__hB={left:ba,top:top,width:bb,height:bc};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__hB;
qx.ui.core.queue.Layout.add(this);
},__hD:{},setLayoutProperties:function(bd){if(bd==null){return;
}var be=this.__hC;

if(!be){be=this.__hC={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(bd);
}for(var bf in bd){if(bd[bf]==null){delete be[bf];
}else{be[bf]=bd[bf];
}}},getLayoutProperties:function(){return this.__hC||this.__hD;
},clearLayoutProperties:function(){delete this.__hC;
},updateLayoutProperties:function(bg){var bh=this._getLayout();

if(bh){if(qx.core.Environment.get(c)){if(bg){for(var bi in bg){if(bg[bi]!==null){bh.verifyLayoutProperty(this,bi,bg[bi]);
}}}}bh.invalidateChildrenCache();
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
},clone:function(){var bj=qx.core.Object.prototype.clone.call(this);
var bk=this.__hC;

if(bk){bj.__hC=qx.lang.Object.clone(bk);
}return bj;
}},destruct:function(){this.$$parent=this.$$subparent=this.__hC=this.__hx=this.__hB=this.__hz=null;
}});
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
(function(){var b="qx.util.DeferredCall",a="qx.debug";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c,d){qx.core.Object.call(this);
this.__bD=c;
this.__bE=d||null;
this.__dy=qx.util.DeferredCallManager.getInstance();
},members:{__bD:null,__bE:null,__dy:null,cancel:function(){this.__dy.cancel(this);
},schedule:function(){this.__dy.schedule(this);
},call:function(){if(qx.core.Environment.get(a)){var e=this.__bE;

if(e&&e.isDisposed&&e.isDisposed()){this.warn("The context object '"+e+"' of the defered call '"+this+"'is already disposed.");
}}this.__bE?this.__bD.apply(this.__bE):this.__bD();
}},destruct:function(){this.cancel();
this.__bE=this.__bD=this.__dy=null;
}});
})();
(function(){var m="element",k="qx.debug",j="': ",h="Invalid context for callback.",g="Invalid capture flag.",f="div",d="'",c="Invalid callback function",b="",a="Invalid event type.",Q="mshtml",P="engine.name",O="scroll",N="text",M="|bubble|",L="qx.html.Element",K="|capture|",J="activate",I="Failed to add event listener for type '",H="blur",t="deactivate",u="__kv",r="css.userselect",s=" from the target '",p="capture",q="visible",n="releaseCapture",o="Failed to remove event listener for type '",v="qxSelectable",w="tabIndex",B="off",A="qx.html.Iframe",D="focus",C=" to the target '",F="none",E="css.userselect.none",z="hidden",G="on";
qx.Class.define(L,{extend:qx.core.Object,construct:function(R,S,T){qx.core.Object.call(this);
this.__ka=R||f;
this.__kb=S||null;
this.__kc=T||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__kd:{},_scheduleFlush:function(U){qx.html.Element.__iE.schedule();
},flush:function(){var bg;

if(qx.core.Environment.get(k)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var X=this.__ke();
var W=X.getFocus();

if(W&&this.__ki(W)){X.blur(W);
}var bn=X.getActive();

if(bn&&this.__ki(bn)){qx.bom.Element.deactivate(bn);
}var bb=this.__kg();

if(bb&&this.__ki(bb)){qx.bom.Element.releaseCapture(bb);
}var bh=[];
var bi=this._modified;

for(var bf in bi){bg=bi[bf];
if(bg.__kz()||bg.classname==A){if(bg.__kj&&qx.dom.Hierarchy.isRendered(bg.__kj)){bh.push(bg);
}else{if(qx.core.Environment.get(k)){if(this.DEBUG){bg.debug("Flush invisible element");
}}bg.__ky();
}delete bi[bf];
}}
for(var i=0,l=bh.length;i<l;i++){bg=bh[i];

if(qx.core.Environment.get(k)){if(this.DEBUG){bg.debug("Flush rendered element");
}}bg.__ky();
}var bd=this._visibility;

for(var bf in bd){bg=bd[bf];
var bj=bg.__kj;

if(!bj){delete bd[bf];
continue;
}
if(qx.core.Environment.get(k)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+bg.__kl);
}}if(!bg.$$disposed){bj.style.display=bg.__kl?b:F;
if((qx.core.Environment.get(P)==Q)){if(!(document.documentMode>=8)){bj.style.visibility=bg.__kl?q:z;
}}}delete bd[bf];
}var scroll=this._scroll;

for(var bf in scroll){bg=scroll[bf];
var bo=bg.__kj;

if(bo&&bo.offsetWidth){var ba=true;
if(bg.__ko!=null){bg.__kj.scrollLeft=bg.__ko;
delete bg.__ko;
}if(bg.__kp!=null){bg.__kj.scrollTop=bg.__kp;
delete bg.__kp;
}var bk=bg.__km;

if(bk!=null){var be=bk.element.getDomElement();

if(be&&be.offsetWidth){qx.bom.element.Scroll.intoViewX(be,bo,bk.align);
delete bg.__km;
}else{ba=false;
}}var bl=bg.__kn;

if(bl!=null){var be=bl.element.getDomElement();

if(be&&be.offsetWidth){qx.bom.element.Scroll.intoViewY(be,bo,bl.align);
delete bg.__kn;
}else{ba=false;
}}if(ba){delete scroll[bf];
}}}var Y={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bm=this._actions[i];
var bj=bm.element.__kj;

if(!bj||!Y[bm.type]&&!bm.element.__kz()){continue;
}var bc=bm.args;
bc.unshift(bj);
qx.bom.Element[bm.type].apply(qx.bom.Element,bc);
}this._actions=[];
for(var bf in this.__kd){var V=this.__kd[bf];
var bo=V.element.__kj;

if(bo){qx.bom.Selection.set(bo,V.start,V.end);
delete this.__kd[bf];
}}qx.event.handler.Appear.refresh();
},__ke:function(){if(!this.__kf){var bp=qx.event.Registration.getManager(window);
this.__kf=bp.getHandler(qx.event.handler.Focus);
}return this.__kf;
},__kg:function(){if(!this.__kh){var bq=qx.event.Registration.getManager(window);
this.__kh=bq.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__kh.getCaptureElement();
},__ki:function(br){var bs=qx.core.ObjectRegistry.fromHashCode(br.$$element);
return bs&&!bs.__kz();
}},members:{__ka:null,__kj:null,__dB:false,__kk:true,__kl:true,__km:null,__kn:null,__ko:null,__kp:null,__kq:null,__kr:null,__ks:null,__kb:null,__kc:null,__kt:null,__ku:null,__kv:null,__kw:null,__kx:null,_scheduleChildrenUpdate:function(){if(this.__kw){return;
}this.__kw=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__ka);
},__ky:function(){if(qx.core.Environment.get(k)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var length;
var bt=this.__kv;

if(bt){length=bt.length;
var bu;

for(var i=0;i<length;i++){bu=bt[i];

if(bu.__kl&&bu.__kk&&!bu.__kj){bu.__ky();
}}}
if(!this.__kj){this.__kj=this._createDomElement();
this.__kj.$$element=this.$$hash;
this._copyData(false);

if(bt&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__kw){this._syncChildren();
}}delete this.__kw;
},_insertChildren:function(){var bv=this.__kv;
var length=bv.length;
var bx;

if(length>2){var bw=document.createDocumentFragment();

for(var i=0;i<length;i++){bx=bv[i];

if(bx.__kj&&bx.__kk){bw.appendChild(bx.__kj);
}}this.__kj.appendChild(bw);
}else{var bw=this.__kj;

for(var i=0;i<length;i++){bx=bv[i];

if(bx.__kj&&bx.__kk){bw.appendChild(bx.__kj);
}}}},_syncChildren:function(){var bH=qx.core.ObjectRegistry;
var by=this.__kv;
var bF=by.length;
var bz;
var bD;
var bB=this.__kj;
var bE=bB.childNodes;
var bA=0;
var bC;

if(qx.core.Environment.get(k)){var bG=0;
}for(var i=bE.length-1;i>=0;i--){bC=bE[i];
bD=bH.fromHashCode(bC.$$element);

if(!bD||!bD.__kk||bD.__kx!==this){bB.removeChild(bC);

if(qx.core.Environment.get(k)){bG++;
}}}for(var i=0;i<bF;i++){bz=by[i];
if(bz.__kk){bD=bz.__kj;
bC=bE[bA];

if(!bD){continue;
}if(bD!=bC){if(bC){bB.insertBefore(bD,bC);
}else{bB.appendChild(bD);
}
if(qx.core.Environment.get(k)){bG++;
}}bA++;
}}if(qx.core.Environment.get(k)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+bG+" operations");
}}},_copyData:function(bI){var bM=this.__kj;
var bL=this.__kc;

if(bL){var bJ=qx.bom.element.Attribute;

for(var bN in bL){bJ.set(bM,bN,bL[bN]);
}}var bL=this.__kb;

if(bL){var bK=qx.bom.element.Style;

if(bI){bK.setStyles(bM,bL);
}else{bK.setCss(bM,bK.compile(bL));
}}var bL=this.__kt;

if(bL){for(var bN in bL){this._applyProperty(bN,bL[bN]);
}}var bL=this.__ku;

if(bL){qx.event.Registration.getManager(bM).importListeners(bM,bL);
delete this.__ku;
}},_syncData:function(){var bS=this.__kj;
var bR=qx.bom.element.Attribute;
var bP=qx.bom.element.Style;
var bQ=this.__kr;

if(bQ){var bV=this.__kc;

if(bV){var bT;

for(var bU in bQ){bT=bV[bU];

if(bT!==undefined){bR.set(bS,bU,bT);
}else{bR.reset(bS,bU);
}}}this.__kr=null;
}var bQ=this.__kq;

if(bQ){var bV=this.__kb;

if(bV){var bO={};

for(var bU in bQ){bO[bU]=bV[bU];
}bP.setStyles(bS,bO);
}this.__kq=null;
}var bQ=this.__ks;

if(bQ){var bV=this.__kt;

if(bV){var bT;

for(var bU in bQ){this._applyProperty(bU,bV[bU]);
}}this.__ks=null;
}},__kz:function(){var bW=this;
while(bW){if(bW.__dB){return true;
}
if(!bW.__kk||!bW.__kl){return false;
}bW=bW.__kx;
}return false;
},__kA:function(bX){if(bX.__kx===this){throw new Error("Child is already in: "+bX);
}
if(bX.__dB){throw new Error("Root elements could not be inserted into other ones.");
}if(bX.__kx){bX.__kx.remove(bX);
}bX.__kx=this;
if(!this.__kv){this.__kv=[];
}if(this.__kj){this._scheduleChildrenUpdate();
}},__kB:function(bY){if(bY.__kx!==this){throw new Error("Has no child: "+bY);
}if(this.__kj){this._scheduleChildrenUpdate();
}delete bY.__kx;
},__kC:function(ca){if(ca.__kx!==this){throw new Error("Has no child: "+ca);
}if(this.__kj){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__kv||null;
},getChild:function(cb){var cc=this.__kv;
return cc&&cc[cb]||null;
},hasChildren:function(){var cd=this.__kv;
return cd&&cd[0]!==undefined;
},indexOf:function(ce){var cf=this.__kv;
return cf?cf.indexOf(ce):-1;
},hasChild:function(cg){var ch=this.__kv;
return ch&&ch.indexOf(cg)!==-1;
},add:function(ci){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__kA(arguments[i]);
}this.__kv.push.apply(this.__kv,arguments);
}else{this.__kA(ci);
this.__kv.push(ci);
}return this;
},addAt:function(cj,ck){this.__kA(cj);
qx.lang.Array.insertAt(this.__kv,cj,ck);
return this;
},remove:function(cl){var cm=this.__kv;

if(!cm){return;
}
if(arguments[1]){var cn;

for(var i=0,l=arguments.length;i<l;i++){cn=arguments[i];
this.__kB(cn);
qx.lang.Array.remove(cm,cn);
}}else{this.__kB(cl);
qx.lang.Array.remove(cm,cl);
}return this;
},removeAt:function(co){var cp=this.__kv;

if(!cp){throw new Error("Has no children!");
}var cq=cp[co];

if(!cq){throw new Error("Has no child at this position!");
}this.__kB(cq);
qx.lang.Array.removeAt(this.__kv,co);
return this;
},removeAll:function(){var cr=this.__kv;

if(cr){for(var i=0,l=cr.length;i<l;i++){this.__kB(cr[i]);
}cr.length=0;
}return this;
},getParent:function(){return this.__kx||null;
},insertInto:function(parent,cs){parent.__kA(this);

if(cs==null){parent.__kv.push(this);
}else{qx.lang.Array.insertAt(this.__kv,this,cs);
}return this;
},insertBefore:function(ct){var parent=ct.__kx;
parent.__kA(this);
qx.lang.Array.insertBefore(parent.__kv,this,ct);
return this;
},insertAfter:function(cu){var parent=cu.__kx;
parent.__kA(this);
qx.lang.Array.insertAfter(parent.__kv,this,cu);
return this;
},moveTo:function(cv){var parent=this.__kx;
parent.__kC(this);
var cw=parent.__kv.indexOf(this);

if(cw===cv){throw new Error("Could not move to same index!");
}else if(cw<cv){cv--;
}qx.lang.Array.removeAt(parent.__kv,cw);
qx.lang.Array.insertAt(parent.__kv,this,cv);
return this;
},moveBefore:function(cx){var parent=this.__kx;
return this.moveTo(parent.__kv.indexOf(cx));
},moveAfter:function(cy){var parent=this.__kx;
return this.moveTo(parent.__kv.indexOf(cy)+1);
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
},setRoot:function(cz){this.__dB=cz;
},useMarkup:function(cA){if(this.__kj){throw new Error("Could not overwrite existing element!");
}if((qx.core.Environment.get(P)==Q)){var cB=document.createElement(f);
}else{var cB=qx.bom.Element.getHelperElement();
}cB.innerHTML=cA;
this.useElement(cB.firstChild);
return this.__kj;
},useElement:function(cC){if(this.__kj){throw new Error("Could not overwrite existing element!");
}this.__kj=cC;
this.__kj.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var cE=this.getAttribute(w);

if(cE>=1){return true;
}var cD=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(cE>=0&&cD[this.__ka]){return true;
}return false;
},setSelectable:function(cF){this.setAttribute(v,cF?G:B);
var cG=qx.core.Environment.get(r);

if(cG){this.setStyle(cG,cF?N:qx.core.Environment.get(E));
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
},scrollChildIntoViewX:function(cH,cI,cJ){var cK=this.__kj;
var cL=cH.getDomElement();

if(cJ!==false&&cK&&cK.offsetWidth&&cL&&cL.offsetWidth){qx.bom.element.Scroll.intoViewX(cL,cK,cI);
}else{this.__km={element:cH,align:cI};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__ko;
},scrollChildIntoViewY:function(cM,cN,cO){var cP=this.__kj;
var cQ=cM.getDomElement();

if(cO!==false&&cP&&cP.offsetWidth&&cQ&&cQ.offsetWidth){qx.bom.element.Scroll.intoViewY(cQ,cP,cN);
}else{this.__kn={element:cM,align:cN};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__kp;
},scrollToX:function(x,cR){var cS=this.__kj;

if(cR!==true&&cS&&cS.offsetWidth){cS.scrollLeft=x;
delete this.__ko;
}else{this.__ko=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__km;
},getScrollX:function(){var cT=this.__kj;

if(cT){return cT.scrollLeft;
}return this.__ko||0;
},scrollToY:function(y,cU){var cV=this.__kj;

if(cU!==true&&cV&&cV.offsetWidth){cV.scrollTop=y;
delete this.__kp;
}else{this.__kp=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__kn;
},getScrollY:function(){var cW=this.__kj;

if(cW){return cW.scrollTop;
}return this.__kp||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(O,this.__kE,this);
},enableScrolling:function(){this.removeListener(O,this.__kE,this);
},__kD:null,__kE:function(e){if(!this.__kD){this.__kD=true;
this.__kj.scrollTop=0;
this.__kj.scrollLeft=0;
delete this.__kD;
}},getTextSelection:function(){var cX=this.__kj;

if(cX){return qx.bom.Selection.get(cX);
}return null;
},getTextSelectionLength:function(){var cY=this.__kj;

if(cY){return qx.bom.Selection.getLength(cY);
}return null;
},getTextSelectionStart:function(){var da=this.__kj;

if(da){return qx.bom.Selection.getStart(da);
}return null;
},getTextSelectionEnd:function(){var dc=this.__kj;

if(dc){return qx.bom.Selection.getEnd(dc);
}return null;
},setTextSelection:function(dd,de){var df=this.__kj;

if(df){qx.bom.Selection.set(df,dd,de);
return;
}qx.html.Element.__kd[this.toHashCode()]={element:this,start:dd,end:de};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var dg=this.__kj;

if(dg){qx.bom.Selection.clear(dg);
}delete qx.html.Element.__kd[this.toHashCode()];
},__kF:function(dh,di){var dj=qx.html.Element._actions;
dj.push({type:dh,element:this,args:di||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__kF(D);
},blur:function(){this.__kF(H);
},activate:function(){this.__kF(J);
},deactivate:function(){this.__kF(t);
},capture:function(dk){this.__kF(p,[dk!==false]);
},releaseCapture:function(){this.__kF(n);
},setStyle:function(dl,dm,dn){if(!this.__kb){this.__kb={};
}
if(this.__kb[dl]==dm){return;
}
if(dm==null){delete this.__kb[dl];
}else{this.__kb[dl]=dm;
}if(this.__kj){if(dn){qx.bom.element.Style.set(this.__kj,dl,dm);
return this;
}if(!this.__kq){this.__kq={};
}this.__kq[dl]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(dp,dq){var dr=qx.bom.element.Style;

if(!this.__kb){this.__kb={};
}
if(this.__kj){if(!this.__kq){this.__kq={};
}
for(var dt in dp){var ds=dp[dt];

if(this.__kb[dt]==ds){continue;
}
if(ds==null){delete this.__kb[dt];
}else{this.__kb[dt]=ds;
}if(dq){dr.set(this.__kj,dt,ds);
continue;
}this.__kq[dt]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var dt in dp){var ds=dp[dt];

if(this.__kb[dt]==ds){continue;
}
if(ds==null){delete this.__kb[dt];
}else{this.__kb[dt]=ds;
}}}return this;
},removeStyle:function(du,dv){this.setStyle(du,null,dv);
},getStyle:function(dw){return this.__kb?this.__kb[dw]:null;
},getAllStyles:function(){return this.__kb||null;
},setAttribute:function(dx,dy,dz){if(!this.__kc){this.__kc={};
}
if(this.__kc[dx]==dy){return;
}
if(dy==null){delete this.__kc[dx];
}else{this.__kc[dx]=dy;
}if(this.__kj){if(dz){qx.bom.element.Attribute.set(this.__kj,dx,dy);
return this;
}if(!this.__kr){this.__kr={};
}this.__kr[dx]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(dA,dB){for(var dC in dA){this.setAttribute(dC,dA[dC],dB);
}return this;
},removeAttribute:function(dD,dE){this.setAttribute(dD,null,dE);
},getAttribute:function(dF){return this.__kc?this.__kc[dF]:null;
},_applyProperty:function(name,dG){},_setProperty:function(dH,dI,dJ){if(!this.__kt){this.__kt={};
}
if(this.__kt[dH]==dI){return;
}
if(dI==null){delete this.__kt[dH];
}else{this.__kt[dH]=dI;
}if(this.__kj){if(dJ){this._applyProperty(dH,dI);
return this;
}if(!this.__ks){this.__ks={};
}this.__ks[dH]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(dK,dL){this._setProperty(dK,null,dL);
},_getProperty:function(dM){var dN=this.__kt;

if(!dN){return null;
}var dO=dN[dM];
return dO==null?null:dO;
},addListener:function(dP,dQ,self,dR){if(this.$$disposed){return null;
}
if(qx.core.Environment.get(k)){var dS=I+dP+d+C+this+j;
this.assertString(dP,dS+a);
this.assertFunction(dQ,dS+c);

if(self!==undefined){this.assertObject(self,h);
}
if(dR!==undefined){this.assertBoolean(dR,g);
}}
if(this.__kj){return qx.event.Registration.addListener(this.__kj,dP,dQ,self,dR);
}
if(!this.__ku){this.__ku={};
}
if(dR==null){dR=false;
}var dT=qx.event.Manager.getNextUniqueId();
var dU=dP+(dR?K:M)+dT;
this.__ku[dU]={type:dP,listener:dQ,self:self,capture:dR,unique:dT};
return dU;
},removeListener:function(dV,dW,self,dX){if(this.$$disposed){return null;
}
if(qx.core.Environment.get(k)){var dY=o+dV+d+s+this+j;
this.assertString(dV,dY+a);
this.assertFunction(dW,dY+c);

if(self!==undefined){this.assertObject(self,h);
}
if(dX!==undefined){this.assertBoolean(dX,g);
}}
if(this.__kj){qx.event.Registration.removeListener(this.__kj,dV,dW,self,dX);
}else{var eb=this.__ku;
var ea;

if(dX==null){dX=false;
}
for(var ec in eb){ea=eb[ec];
if(ea.listener===dW&&ea.self===self&&ea.capture===dX&&ea.type===dV){delete eb[ec];
break;
}}}return this;
},removeListenerById:function(ed){if(this.$$disposed){return null;
}
if(this.__kj){qx.event.Registration.removeListenerById(this.__kj,ed);
}else{delete this.__ku[ed];
}return this;
},hasListener:function(ee,ef){if(this.$$disposed){return false;
}
if(this.__kj){return qx.event.Registration.hasListener(this.__kj,ee,ef);
}var eh=this.__ku;
var eg;

if(ef==null){ef=false;
}
for(var ei in eh){eg=eh[ei];
if(eg.capture===ef&&eg.type===ee){return true;
}}return false;
}},defer:function(ej){ej.__iE=new qx.util.DeferredCall(ej.flush,ej);
},destruct:function(){var ek=this.__kj;

if(ek){qx.event.Registration.getManager(ek).removeAllListeners(ek);
ek.$$element=b;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__kx;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(u);
this.__kc=this.__kb=this.__ku=this.__kt=this.__kr=this.__kq=this.__ks=this.__kj=this.__kx=this.__km=this.__kn=null;
}});
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
(function(){var c="qx.debug",b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(d){this._manager=d;
},members:{_getParent:function(e){throw new Error("Missing implementation");
},canDispatchEvent:function(f,event,g){return event.getBubbles();
},dispatchEvent:function(h,event,k){var parent=h;
var t=this._manager;
var q,x;
var o;
var s,v;
var u;
var w=[];
q=t.getListeners(h,k,true);
x=t.getListeners(h,k,false);

if(q){w.push(q);
}
if(x){w.push(x);
}var parent=this._getParent(h);
var m=[];
var l=[];
var n=[];
var r=[];
while(parent!=null){q=t.getListeners(parent,k,true);

if(q){n.push(q);
r.push(parent);
}x=t.getListeners(parent,k,false);

if(x){m.push(x);
l.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=n.length-1;i>=0;i--){u=r[i];
event.setCurrentTarget(u);
o=n[i];

for(var j=0,p=o.length;j<p;j++){s=o[j];
v=s.context||u;

if(qx.core.Environment.get(c)){if(v&&v.isDisposed&&v.isDisposed()){this.warn("The context object '"+v+"' for the event '"+k+"' of '"+u+"'is already disposed.");
}}s.handler.call(v,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(h);

for(var i=0,y=w.length;i<y;i++){o=w[i];

for(var j=0,p=o.length;j<p;j++){s=o[j];
v=s.context||h;

if(qx.core.Environment.get(c)){if(v&&v.isDisposed&&v.isDisposed()){this.warn("The context object '"+v+"' for the event '"+k+"' of '"+h+"'is already disposed.");
}}s.handler.call(v,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,y=m.length;i<y;i++){u=l[i];
event.setCurrentTarget(u);
o=m[i];

for(var j=0,p=o.length;j<p;j++){s=o[j];
v=s.context||u;

if(qx.core.Environment.get(c)){if(v&&v.isDisposed&&v.isDisposed()){this.warn("The context object '"+v+"' for the event '"+k+"' of '"+u+"'is already disposed.");
}}s.handler.call(v,event);
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
(function(){var a="qx.event.type.Tap";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_isTouchEnd:function(){return true;
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
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
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
(function(){var i="qx.debug",h="useraction",g="touchend",f='ie',d="browser.version",c="event.touch",b="qx.ui.core.queue.Manager",a="browser.name";
qx.Class.define(b,{statics:{__ix:false,__iy:{},__iz:0,MAX_RETRIES:10,scheduleFlush:function(j){var self=qx.ui.core.queue.Manager;
self.__iy[j]=true;

if(!self.__ix){self.__iE.schedule();
self.__ix=true;
}},flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;
}var self=qx.ui.core.queue.Manager;
if(self.__iA){return;
}self.__iA=true;
self.__iE.cancel();
var k=self.__iy;
self.__iB(function(){while(k.visibility||k.widget||k.appearance||k.layout||k.element){if(k.widget){delete k.widget;

if(qx.core.Environment.get(i)){try{qx.ui.core.queue.Widget.flush();
}catch(e){qx.log.Logger.error("Error in the 'Widget' queue:"+e);
}}else{qx.ui.core.queue.Widget.flush();
}}
if(k.visibility){delete k.visibility;

if(qx.core.Environment.get(i)){try{qx.ui.core.queue.Visibility.flush();
}catch(e){qx.log.Logger.error("Error in the 'Visibility' queue:"+e);
}}else{qx.ui.core.queue.Visibility.flush();
}}
if(k.appearance){delete k.appearance;

if(qx.core.Environment.get(i)){try{qx.ui.core.queue.Appearance.flush();
}catch(e){qx.log.Logger.error("Error in the 'Appearance' queue:"+e);
}}else{qx.ui.core.queue.Appearance.flush();
}}if(k.widget||k.visibility||k.appearance){continue;
}
if(k.layout){delete k.layout;

if(qx.core.Environment.get(i)){try{qx.ui.core.queue.Layout.flush();
}catch(e){qx.log.Logger.error("Error in the 'Layout' queue:"+e);
}}else{qx.ui.core.queue.Layout.flush();
}}if(k.widget||k.visibility||k.appearance||k.layout){continue;
}
if(k.element){delete k.element;
qx.html.Element.flush();
}}},function(){self.__ix=false;
});
self.__iB(function(){if(k.dispose){delete k.dispose;

if(qx.core.Environment.get(i)){try{qx.ui.core.queue.Dispose.flush();
}catch(e){qx.log.Logger.error("Error in the 'Dispose' queue:"+e);
}}else{qx.ui.core.queue.Dispose.flush();
}}},function(){self.__iA=false;
});
self.__iz=0;
},__iB:qx.core.Environment.select(i,{"true":function(l,m){l();
m();
},"false":function(n,o){var self=qx.ui.core.queue.Manager;

try{n();
}catch(e){if(qx.core.Environment.get(i)){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__ix=false;
self.__iA=false;
self.__iz+=1;
if(qx.core.Environment.get(a)==f&&qx.core.Environment.get(d)<=7){o();
}
if(self.__iz<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__iz-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{o();
}}}),__iC:function(e){var p=qx.ui.core.queue.Manager;
if(e.getData()==g){p.PAUSE=true;

if(p.__iD){window.clearTimeout(p.__iD);
}p.__iD=window.setTimeout(function(){p.PAUSE=false;
p.__iD=null;
p.flush();
},500);
}else{p.flush();
}}},defer:function(q){q.__iE=new qx.util.DeferredCall(q.flush);
qx.html.Element._scheduleFlush=q.scheduleFlush;
qx.event.Registration.addListener(window,h,qx.core.Environment.get(c)?q.__iC:q.flush);
}});
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
(function(){var g="",f="qx.core.BaseInit",d="engine.name",c="qx.application",b="os.name",a="engine.version";
qx.Class.define(f,{statics:{getApplication:function(){return this.__cR||null;
},ready:function(){if(this.__cR){return;
}
if(qx.core.Environment.get(d)==g){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(a)==g){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==g){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Environment.get(c);
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
(function(){var j="qx.debug",i="decorator",h="qxType",g="",f="qx.ui.core.DecoratorFactory",e="qx.ui.core.DecoratorFactory[",d="$$nopool$$",c="] ",b="keys: ",a=", elements: ";
qx.Class.define(f,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cO={};
},statics:{MAX_SIZE:15,__hp:d},members:{__cO:null,getDecoratorElement:function(k){var p=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(k)){var n=k;
var m=qx.theme.manager.Decoration.getInstance().resolve(k);
}else{var n=p.__hp;
m=k;
}var o=this.__cO;

if(o[n]&&o[n].length>0){var l=o[n].pop();
}else{var l=this._createDecoratorElement(m,n);
}l.$$pooled=false;
return l;
},poolDecorator:function(q){if(!q||q.$$pooled||q.isDisposed()){return;
}var t=qx.ui.core.DecoratorFactory;
var r=q.getId();

if(r==t.__hp){q.dispose();
return;
}var s=this.__cO;

if(!s[r]){s[r]=[];
}
if(s[r].length>t.MAX_SIZE){q.dispose();
}else{q.$$pooled=true;
s[r].push(q);
}},_createDecoratorElement:function(u,v){var w=new qx.html.Decorator(u,v);

if(qx.core.Environment.get(j)){w.setAttribute(h,i);
}return w;
},toString:qx.core.Environment.select(j,{"true":function(){var x=0;
var y=0;

for(var z in this.__cO){x+=1;
y+=this.__cO[z].length;
}return [e,this.$$hash,c,b,x,a,y].join(g);
},"false":function(){return qx.core.Object.prototype.toString.call(this);
}})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var B=this.__cO;

for(var A in B){qx.util.DisposeUtil.disposeArray(B,A);
}}this.__cO=null;
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
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="qx.debug",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,d,a],mode:b}},members:{__lc:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__lc=null;
},getInsets:function(){if(this.__lc){return this.__lc;
}var k=this._getDefaultInsets();
return this.__lc={left:this.getInsetLeft()==null?k.left:this.getInsetLeft(),right:this.getInsetRight()==null?k.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?k.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?k.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Environment.get(e)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__lc=null;
}},destruct:function(){this.__lc=null;
}});
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
(function(){var cw="px",cv="qx.debug",cu="Boolean",ct="qx.event.type.Drag",cs="qx.event.type.Mouse",cr="visible",cq="qx.event.type.Focus",cp="Integer",co="qx.event.type.Touch",cn="qx.event.type.Data",bx="engine.name",bw="excluded",bv="_applyPadding",bu="qx.event.type.Event",bt="on",bs="mshtml",br="hidden",bq="contextmenu",bp="String",bo="tabIndex",cD="focused",cE="changeVisibility",cB="hovered",cC="qx.event.type.KeySequence",cz="absolute",cA="backgroundColor",cx="drag",cy="div",cF="object",cG="disabled",bV="move",bU="dragstart",bX="qx.dynlocale",bW="dragchange",ca="dragend",bY="resize",cc="Decorator",cb="zIndex",bT="opacity",bS="default",c="Color",d="qxType",f="changeToolTipText",g="beforeContextmenuOpen",h="_applyNativeContextMenu",j="content",k="__kG",m="engine.version",n="_applyBackgroundColor",o="event.pointer",cK="_applyFocusable",cJ="changeShadow",cI="qx.event.type.KeyInput",cH="createChildControl",cO="browser.documentmode",cN="Invalid left decorator inset detected: ",cM="Font",cL="_applyShadow",cQ="Invalid layout data: ",cP="Could not add widget to itself: ",N="_applyEnabled",O="_applySelectable",L="Number",M="_applyKeepActive",R="__kH",S="_applyVisibility",P="The 'after' widget is not a child of this widget!",Q="__kR",J="repeat",K="qxDraggable",w="syncAppearance",v="paddingLeft",y="__kK",x="_applyDroppable",s="Wrong 'left' argument. ",r="__kM",u="protector",t="#",q="qx.event.type.MouseWheel",p="_applyCursor",X="_applyDraggable",Y="changeTextColor",ba="$$widget",bb="changeContextMenu",T="paddingTop",U="changeSelectable",V="__kL",W="hideFocus",bc="Invalid top decorator inset detected: ",bd="none",G="outline",F="The 'before' widget is not a child of this widget!",E="_applyAppearance",D=" returned an invalid size hint!",C="_applyOpacity",B="url(",A=")",z="qx.ui.core.Widget",I="minHeight is larger than maxHeight!",H="_applyFont",be="cursor",bf="qxDroppable",bg="__kT",bh="changeZIndex",bi="changeEnabled",bj="changeFont",bk="_applyDecorator",bl="_applyZIndex",bm="_applyTextColor",bn="qx.ui.menu.Menu",bB="__kP",bA="Invalid right decorator inset detected: ",bz="Invalid widget to add: ",by="_applyToolTipText",bF="The layout of the widget",bE="true",bD="widget",bC="Wrong 'top' argument. ",bH="changeDecorator",bG="changeBackgroundColor",bO="_applyTabIndex",bP="Invalid bottom decorator inset detected: ",bM="changeAppearance",bN="shorthand",bK="/",bL="",bI="_applyContextMenu",bJ="container",bQ="paddingBottom",bR="changeNativeContextMenu",cg="undefined",cf="qx.ui.tooltip.ToolTip",ci="qxKeepActive",ch="_applyKeepFocus",ck="paddingRight",cj="minWidth is larger than maxWidth!",cm="changeLocale",cl="qxKeepFocus",ce="opera",cd="qx/static/blank.gif";
qx.Class.define(z,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__kG=this._createContainerElement();
this.__kH=this.__kS();
this.__kG.add(this.__kH);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bu,disappear:bu,createChildControl:cn,resize:cn,move:cn,syncAppearance:cn,mousemove:cs,mouseover:cs,mouseout:cs,mousedown:cs,mouseup:cs,click:cs,dblclick:cs,contextmenu:cs,beforeContextmenuOpen:cn,mousewheel:q,touchstart:co,touchend:co,touchmove:co,touchcancel:co,tap:co,swipe:co,keyup:cC,keydown:cC,keypress:cC,keyinput:cI,focus:cq,blur:cq,focusin:cq,focusout:cq,activate:cq,deactivate:cq,capture:bu,losecapture:bu,drop:ct,dragleave:ct,dragover:ct,drag:ct,dragstart:ct,dragend:ct,dragchange:ct,droprequest:ct},properties:{paddingTop:{check:cp,init:0,apply:bv,themeable:true},paddingRight:{check:cp,init:0,apply:bv,themeable:true},paddingBottom:{check:cp,init:0,apply:bv,themeable:true},paddingLeft:{check:cp,init:0,apply:bv,themeable:true},padding:{group:[T,ck,bQ,v],mode:bN,themeable:true},zIndex:{nullable:true,init:null,apply:bl,event:bh,check:cp,themeable:true},decorator:{nullable:true,init:null,apply:bk,event:bH,check:cc,themeable:true},shadow:{nullable:true,init:null,apply:cL,event:cJ,check:cc,themeable:true},backgroundColor:{nullable:true,check:c,apply:n,event:bG,themeable:true},textColor:{nullable:true,check:c,apply:bm,event:Y,themeable:true,inheritable:true},font:{nullable:true,apply:H,check:cM,event:bj,themeable:true,inheritable:true,dereference:true},opacity:{check:L,apply:C,themeable:true,nullable:true,init:null},cursor:{check:bp,apply:p,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:cf,nullable:true},toolTipText:{check:bp,nullable:true,event:f,apply:by},toolTipIcon:{check:bp,nullable:true,event:f},blockToolTip:{check:cu,init:false},visibility:{check:[cr,br,bw],init:cr,apply:S,event:cE},enabled:{init:true,check:cu,inheritable:true,apply:N,event:bi},anonymous:{init:false,check:cu},tabIndex:{check:cp,nullable:true,apply:bO},focusable:{check:cu,init:false,apply:cK},keepFocus:{check:cu,init:false,apply:ch},keepActive:{check:cu,init:false,apply:M},draggable:{check:cu,init:false,apply:X},droppable:{check:cu,init:false,apply:x},selectable:{check:cu,init:false,event:U,apply:O},contextMenu:{check:bn,apply:bI,nullable:true,event:bb},nativeContextMenu:{check:cu,init:false,themeable:true,event:bR,apply:h},appearance:{check:bp,init:bD,apply:E,event:bM}},statics:{DEBUG:false,getWidgetByElement:function(cR,cS){while(cR){var cT=cR.$$widget;
if(cT!=null){var cU=qx.core.ObjectRegistry.fromHashCode(cT);
if(!cS||!cU.getAnonymous()){return cU;
}}try{cR=cR.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cV){while(cV){if(parent==cV){return true;
}cV=cV.getLayoutParent();
}return false;
},__kI:new qx.ui.core.DecoratorFactory(),__kJ:new qx.ui.core.DecoratorFactory()},members:{__kG:null,__kH:null,__kK:null,__kL:null,__kM:null,__kN:null,__kO:null,__kP:null,_getLayout:function(){return this.__kP;
},_setLayout:function(cW){if(qx.core.Environment.get(cv)){if(cW){this.assertInstance(cW,qx.ui.layout.Abstract);
}}
if(this.__kP){this.__kP.connectToWidget(null);
}
if(cW){cW.connectToWidget(this);
}this.__kP=cW;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cX=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cX);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cX);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__kQ:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var cY=qx.theme.manager.Decoration.getInstance();
var db=cY.resolve(a).getInsets();
var da=cY.resolve(b).getInsets();

if(db.top!=da.top||db.right!=da.right||db.bottom!=da.bottom||db.left!=da.left){return true;
}return false;
},renderLayout:function(dc,top,dd,de){var dn=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,dc,top,dd,de);
if(!dn){return null;
}var dg=this.getContainerElement();
var content=this.getContentElement();
var dk=dn.size||this._updateInsets;
var dp=cw;
var dl={};
if(dn.position){dl.left=dc+dp;
dl.top=top+dp;
}if(dn.size){dl.width=dd+dp;
dl.height=de+dp;
}
if(dn.position||dn.size){dg.setStyles(dl);
}
if(dk||dn.local||dn.margin){var df=this.getInsets();
var innerWidth=dd-df.left-df.right;
var innerHeight=de-df.top-df.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var di={};

if(this._updateInsets){di.left=df.left+dp;
di.top=df.top+dp;
}
if(dk){di.width=innerWidth+dp;
di.height=innerHeight+dp;
}
if(dk||this._updateInsets){content.setStyles(di);
}
if(dn.size){var dm=this.__kM;

if(dm){dm.setStyles({width:dd+cw,height:de+cw});
}}
if(dn.size||this._updateInsets){if(this.__kK){this.__kK.resize(dd,de);
}}
if(dn.size){if(this.__kL){var df=this.__kL.getInsets();
var dj=dd+df.left+df.right;
var dh=de+df.top+df.bottom;
this.__kL.resize(dj,dh);
}}
if(dk||dn.local||dn.margin){if(this.__kP&&this.hasLayoutChildren()){this.__kP.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(dn.position&&this.hasListener(bV)){this.fireDataEvent(bV,this.getBounds());
}
if(dn.size&&this.hasListener(bY)){this.fireDataEvent(bY,this.getBounds());
}delete this._updateInsets;
return dn;
},__kR:null,clearSeparators:function(){var dr=this.__kR;

if(!dr){return;
}var ds=qx.ui.core.Widget.__kI;
var content=this.getContentElement();
var dq;

for(var i=0,l=dr.length;i<l;i++){dq=dr[i];
ds.poolDecorator(dq);
content.remove(dq);
}dr.length=0;
},renderSeparator:function(dt,du){var dv=qx.ui.core.Widget.__kI.getDecoratorElement(dt);
this.getContentElement().add(dv);
dv.resize(du.width,du.height);
dv.setStyles({left:du.left+cw,top:du.top+cw});
if(!this.__kR){this.__kR=[dv];
}else{this.__kR.push(dv);
}},_computeSizeHint:function(){var dC=this.getWidth();
var dB=this.getMinWidth();
var dx=this.getMaxWidth();
var dA=this.getHeight();
var dy=this.getMinHeight();
var dz=this.getMaxHeight();

if(qx.core.Environment.get(cv)){if(dB!==null&&dx!==null){this.assert(dB<=dx,cj);
}
if(dy!==null&&dz!==null){this.assert(dy<=dz,I);
}}var dD=this._getContentHint();
var dw=this.getInsets();
var dF=dw.left+dw.right;
var dE=dw.top+dw.bottom;

if(dC==null){dC=dD.width+dF;
}
if(dA==null){dA=dD.height+dE;
}
if(dB==null){dB=dF;

if(dD.minWidth!=null){dB+=dD.minWidth;
if(dB>dx&&dx!=null){dB=dx;
}}}
if(dy==null){dy=dE;

if(dD.minHeight!=null){dy+=dD.minHeight;
if(dy>dz&&dz!=null){dy=dz;
}}}
if(dx==null){if(dD.maxWidth==null){dx=Infinity;
}else{dx=dD.maxWidth+dF;
if(dx<dB&&dB!=null){dx=dB;
}}}
if(dz==null){if(dD.maxHeight==null){dz=Infinity;
}else{dz=dD.maxHeight+dE;
if(dz<dy&&dy!=null){dz=dy;
}}}return {width:dC,minWidth:dB,maxWidth:dx,height:dA,minHeight:dy,maxHeight:dz};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__kP){this.__kP.invalidateLayoutCache();
}},_getContentHint:function(){var dH=this.__kP;

if(dH){if(this.hasLayoutChildren()){var dI=dH.getSizeHint();

if(qx.core.Environment.get(cv)){var dG=bF+this.toString()+D;
this.assertInteger(dI.width,s+dG);
this.assertInteger(dI.height,bC+dG);
}return dI;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(dJ){var dN=this.getInsets();
var dQ=dN.left+dN.right;
var dP=dN.top+dN.bottom;
var dO=dJ-dQ;
var dL=this._getLayout();

if(dL&&dL.hasHeightForWidth()){var dK=dL.getHeightForWidth(dJ);
}else{dK=this._getContentHeightForWidth(dO);
}var dM=dK+dP;
return dM;
},_getContentHeightForWidth:function(dR){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var dT=this.getPaddingRight();
var dV=this.getPaddingBottom();
var dU=this.getPaddingLeft();

if(this.__kK){var dS=this.__kK.getInsets();

if(qx.core.Environment.get(cv)){this.assertNumber(dS.top,bc+dS.top);
this.assertNumber(dS.right,bA+dS.right);
this.assertNumber(dS.bottom,bP+dS.bottom);
this.assertNumber(dS.left,cN+dS.left);
}top+=dS.top;
dT+=dS.right;
dV+=dS.bottom;
dU+=dS.left;
}return {"top":top,"right":dT,"bottom":dV,"left":dU};
},getInnerSize:function(){var dX=this.getBounds();

if(!dX){return null;
}var dW=this.getInsets();
return {width:dX.width-dW.left-dW.right,height:dX.height-dW.top-dW.bottom};
},show:function(){this.setVisibility(cr);
},hide:function(){this.setVisibility(br);
},exclude:function(){this.setVisibility(bw);
},isVisible:function(){return this.getVisibility()===cr;
},isHidden:function(){return this.getVisibility()!==cr;
},isExcluded:function(){return this.getVisibility()===bw;
},isSeeable:function(){qx.ui.core.queue.Manager.flush();
var dY=this.getContainerElement().getDomElement();

if(dY){return dY.offsetWidth>0;
}return false;
},_createContainerElement:function(){var eb={"$$widget":this.toHashCode()};

if(qx.core.Environment.get(cv)){eb.qxType=bJ;
eb.qxClass=this.classname;
}var ea={zIndex:0,position:cz};
return new qx.html.Element(cy,ea,eb);
},__kS:function(){var ec=this._createContentElement();

if(qx.core.Environment.get(cv)){ec.setAttribute(d,j);
}ec.setStyles({"position":cz,"zIndex":10});
return ec;
},_createContentElement:function(){return new qx.html.Element(cy,{overflowX:br,overflowY:br});
},getContainerElement:function(){return this.__kG;
},getContentElement:function(){return this.__kH;
},getDecoratorElement:function(){return this.__kK||null;
},getShadowElement:function(){return this.__kL||null;
},__kT:null,getLayoutChildren:function(){var ee=this.__kT;

if(!ee){return this.__kU;
}var ef;

for(var i=0,l=ee.length;i<l;i++){var ed=ee[i];

if(ed.hasUserBounds()||ed.isExcluded()){if(ef==null){ef=ee.concat();
}qx.lang.Array.remove(ef,ed);
}}return ef||ee;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var eg=this.__kP;

if(eg){eg.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var eh=this.__kT;

if(!eh){return false;
}var ei;

for(var i=0,l=eh.length;i<l;i++){ei=eh[i];

if(!ei.hasUserBounds()&&!ei.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__kU:[],_getChildren:function(){return this.__kT||this.__kU;
},_indexOf:function(ej){var ek=this.__kT;

if(!ek){return -1;
}return ek.indexOf(ej);
},_hasChildren:function(){var em=this.__kT;
return em!=null&&(!!em[0]);
},addChildrenToQueue:function(en){var eo=this.__kT;

if(!eo){return;
}var ep;

for(var i=0,l=eo.length;i<l;i++){ep=eo[i];
en.push(ep);
ep.addChildrenToQueue(en);
}},_add:function(eq,er){if(eq.getLayoutParent()==this){qx.lang.Array.remove(this.__kT,eq);
}
if(this.__kT){this.__kT.push(eq);
}else{this.__kT=[eq];
}this.__kV(eq,er);
},_addAt:function(es,et,eu){if(!this.__kT){this.__kT=[];
}if(es.getLayoutParent()==this){qx.lang.Array.remove(this.__kT,es);
}var ev=this.__kT[et];

if(ev===es){es.setLayoutProperties(eu);
}
if(ev){qx.lang.Array.insertBefore(this.__kT,es,ev);
}else{this.__kT.push(es);
}this.__kV(es,eu);
},_addBefore:function(ew,ex,ey){if(qx.core.Environment.get(cv)){this.assertInArray(ex,this._getChildren(),F);
}
if(ew==ex){return;
}
if(!this.__kT){this.__kT=[];
}if(ew.getLayoutParent()==this){qx.lang.Array.remove(this.__kT,ew);
}qx.lang.Array.insertBefore(this.__kT,ew,ex);
this.__kV(ew,ey);
},_addAfter:function(ez,eA,eB){if(qx.core.Environment.get(cv)){this.assertInArray(eA,this._getChildren(),P);
}
if(ez==eA){return;
}
if(!this.__kT){this.__kT=[];
}if(ez.getLayoutParent()==this){qx.lang.Array.remove(this.__kT,ez);
}qx.lang.Array.insertAfter(this.__kT,ez,eA);
this.__kV(ez,eB);
},_remove:function(eC){if(!this.__kT){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__kT,eC);
this.__kW(eC);
},_removeAt:function(eD){if(!this.__kT){throw new Error("This widget has no children!");
}var eE=this.__kT[eD];
qx.lang.Array.removeAt(this.__kT,eD);
this.__kW(eE);
return eE;
},_removeAll:function(){if(!this.__kT){return [];
}var eF=this.__kT.concat();
this.__kT.length=0;

for(var i=eF.length-1;i>=0;i--){this.__kW(eF[i]);
}qx.ui.core.queue.Layout.add(this);
return eF;
},_afterAddChild:null,_afterRemoveChild:null,__kV:function(eG,eH){if(qx.core.Environment.get(cv)){this.assertInstance(eG,qx.ui.core.LayoutItem,bz+eG);
this.assertNotIdentical(eG,this,cP+eG);

if(eH!=null){this.assertType(eH,cF,cQ+eH);
}}var parent=eG.getLayoutParent();

if(parent&&parent!=this){parent._remove(eG);
}eG.setLayoutParent(this);
if(eH){eG.setLayoutProperties(eH);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(eG);
}},__kW:function(eI){if(qx.core.Environment.get(cv)){this.assertNotUndefined(eI);
}
if(eI.getLayoutParent()!==this){throw new Error("Remove Error: "+eI+" is not a child of this widget!");
}eI.setLayoutParent(null);
if(this.__kP){this.__kP.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(eI);
}},capture:function(eJ){this.getContainerElement().capture(eJ);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(eK,eL,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__kM){return;
}var eM=this.__kM=new qx.html.Element;

if(qx.core.Environment.get(cv)){eM.setAttribute(d,u);
}eM.setStyles({position:cz,top:0,left:0,zIndex:7});
var eN=this.getBounds();

if(eN){this.__kM.setStyles({width:eN.width+cw,height:eN.height+cw});
}if((qx.core.Environment.get(bx)==bs)){eM.setStyles({backgroundImage:B+qx.util.ResourceManager.getInstance().toUri(cd)+A,backgroundRepeat:J});
}this.getContainerElement().add(eM);
},_applyDecorator:function(eO,eP){if(qx.core.Environment.get(cv)){if(eO&&typeof eO===cF){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and "+"processing time. Often it is better to lay them out to a "+"theme file. Hash code of decorator object: "+eO);
}}}var eS=qx.ui.core.Widget.__kI;
var eQ=this.getContainerElement();
if(!this.__kM&&!qx.core.Environment.get(o)){this._createProtectorElement();
}if(eP){eQ.remove(this.__kK);
eS.poolDecorator(this.__kK);
}if(eO){var eR=this.__kK=eS.getDecoratorElement(eO);
eR.setStyle(cb,5);
eQ.add(eR);
}else{delete this.__kK;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__kQ(eP,eO)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(eO){var eT=this.getBounds();

if(eT){eR.resize(eT.width,eT.height);
this.__kM&&this.__kM.setStyles({width:eT.width+cw,height:eT.height+cw});
}}},_applyShadow:function(eU,eV){var fd=qx.ui.core.Widget.__kJ;
var eX=this.getContainerElement();
if(eV){eX.remove(this.__kL);
fd.poolDecorator(this.__kL);
}if(eU){var fa=this.__kL=fd.getDecoratorElement(eU);
eX.add(fa);
var fc=fa.getInsets();
fa.setStyles({left:(-fc.left)+cw,top:(-fc.top)+cw});
var fb=this.getBounds();

if(fb){var eY=fb.width+fc.left+fc.right;
var eW=fb.height+fc.top+fc.bottom;
fa.resize(eY,eW);
}fa.tint(null);
}else{delete this.__kL;
}},_applyToolTipText:function(fe,ff){if(qx.core.Environment.get(bX)){if(this.__kO){return;
}var fg=qx.locale.Manager.getInstance();
this.__kO=fg.addListener(cm,function(){var fh=this.getToolTipText();

if(fh&&fh.translate){this.setToolTipText(fh.translate());
}},this);
}},_applyTextColor:function(fi,fj){},_applyZIndex:function(fk,fl){this.getContainerElement().setStyle(cb,fk==null?0:fk);
},_applyVisibility:function(fm,fn){var fo=this.getContainerElement();

if(fm===cr){fo.show();
}else{fo.hide();
}var parent=this.$$parent;

if(parent&&(fn==null||fm==null||fn===bw||fm===bw)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(fp,fq){this.getContainerElement().setStyle(bT,fp==1?null:fp);
if((qx.core.Environment.get(bx)==bs)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var fr=(fp==1||fp==null)?null:0.99;
this.getContentElement().setStyle(bT,fr);
}}},_applyCursor:function(fs,ft){if(fs==null&&!this.isSelectable()){fs=bS;
}this.getContainerElement().setStyle(be,fs,qx.core.Environment.get(bx)==ce);
},_applyBackgroundColor:function(fu,fv){var fw=this.getBackgroundColor();
var fy=this.getContainerElement();

if(this.__kK){this.__kK.tint(fw);
fy.setStyle(cA,null);
}else{var fx=qx.theme.manager.Color.getInstance().resolve(fw);
fy.setStyle(cA,fx);
}},_applyFont:function(fz,fA){},__kX:null,$$stateChanges:null,_forwardStates:null,hasState:function(fB){var fC=this.__kX;
return !!fC&&!!fC[fB];
},addState:function(fD){var fE=this.__kX;

if(!fE){fE=this.__kX={};
}
if(fE[fD]){return;
}this.__kX[fD]=true;
if(fD===cB){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fH=this.__lb;

if(forward&&forward[fD]&&fH){var fF;

for(var fG in fH){fF=fH[fG];

if(fF instanceof qx.ui.core.Widget){fH[fG].addState(fD);
}}}},removeState:function(fI){var fJ=this.__kX;

if(!fJ||!fJ[fI]){return;
}delete this.__kX[fI];
if(fI===cB){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fM=this.__lb;

if(forward&&forward[fI]&&fM){for(var fL in fM){var fK=fM[fL];

if(fK instanceof qx.ui.core.Widget){fK.removeState(fI);
}}}},replaceState:function(fN,fO){var fP=this.__kX;

if(!fP){fP=this.__kX={};
}
if(!fP[fO]){fP[fO]=true;
}
if(fP[fN]){delete fP[fN];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fS=this.__lb;

if(forward&&forward[fO]&&fS){for(var fR in fS){var fQ=fS[fR];

if(fQ instanceof qx.ui.core.Widget){fQ.replaceState(fN,fO);
}}}},__kY:null,__la:null,syncAppearance:function(){var fX=this.__kX;
var fW=this.__kY;
var fY=qx.theme.manager.Appearance.getInstance();
var fU=qx.core.Property.$$method.setThemed;
var gd=qx.core.Property.$$method.resetThemed;
if(this.__la){delete this.__la;
if(fW){var fT=fY.styleFrom(fW,fX,null,this.getAppearance());
fW=null;
}}if(!fW){var fV=this;
var gc=[];

do{gc.push(fV.$$subcontrol||fV.getAppearance());
}while(fV=fV.$$subparent);
fW=gc.reverse().join(bK).replace(/#[0-9]+/g,bL);
this.__kY=fW;
}var ga=fY.styleFrom(fW,fX,null,this.getAppearance());

if(ga){if(fT){for(var gb in fT){if(ga[gb]===undefined){this[gd[gb]]();
}}}if(qx.core.Environment.get(cv)){for(var gb in ga){if(!this[fU[gb]]){throw new Error(this.classname+' has no themeable property "'+gb+'" while styling '+fW);
}}}for(var gb in ga){ga[gb]===undefined?this[gd[gb]]():this[fU[gb]](ga[gb]);
}}else if(fT){for(var gb in fT){this[gd[gb]]();
}}this.fireDataEvent(w,this.__kX);
},_applyAppearance:function(ge,gf){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__kN){qx.ui.core.queue.Appearance.add(this);
this.__kN=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__la=true;
qx.ui.core.queue.Appearance.add(this);
var gi=this.__lb;

if(gi){var gg;

for(var gh in gi){gg=gi[gh];

if(gg instanceof qx.ui.core.Widget){gg.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var gj=this;

while(gj.getAnonymous()){gj=gj.getLayoutParent();

if(!gj){return null;
}}return gj;
},getFocusTarget:function(){var gk=this;

if(!gk.getEnabled()){return null;
}
while(gk.getAnonymous()||!gk.getFocusable()){gk=gk.getLayoutParent();

if(!gk||!gk.getEnabled()){return null;
}}return gk;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(gl,gm){var gn=this.getFocusElement();
if(gl){var go=this.getTabIndex();

if(go==null){go=1;
}gn.setAttribute(bo,go);
if((qx.core.Environment.get(bx)==bs&&parseFloat(qx.core.Environment.get(m))<8)||(qx.core.Environment.get(bx)==bs&&qx.core.Environment.get(cO)<8)){gn.setAttribute(W,bE);
}else{gn.setStyle(G,bd);
}}else{if(gn.isNativelyFocusable()){gn.setAttribute(bo,-1);
}else if(gm){gn.setAttribute(bo,null);
}}},_applyKeepFocus:function(gp){var gq=this.getFocusElement();
gq.setAttribute(cl,gp?bt:null);
},_applyKeepActive:function(gr){var gs=this.getContainerElement();
gs.setAttribute(ci,gr?bt:null);
},_applyTabIndex:function(gt){if(gt==null){gt=1;
}else if(gt<1||gt>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&gt!=null){this.getFocusElement().setAttribute(bo,gt);
}},_applySelectable:function(gu,gv){if(gv!==null){this._applyCursor(this.getCursor());
}this.getContentElement().setSelectable(gu);
},_applyEnabled:function(gw,gx){if(gw===false){this.addState(cG);
this.removeState(cB);
if(this.isFocusable()){this.removeState(cD);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(cG);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gy,gz,name){},_applyContextMenu:function(gA,gB){if(gB){gB.removeState(bq);

if(gB.getOpener()==this){gB.resetOpener();
}
if(!gA){this.removeListener(bq,this._onContextMenuOpen);
gB.removeListener(cE,this._onBeforeContextMenuOpen,this);
}}
if(gA){gA.setOpener(this);
gA.addState(bq);

if(!gB){this.addListener(bq,this._onContextMenuOpen);
gA.addListener(cE,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==cr&&this.hasListener(g)){this.fireDataEvent(g,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gC,gD){if(!this.isEnabled()&&gC===true){gC=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gC){this.addListener(bU,this._onDragStart);
this.addListener(cx,this._onDrag);
this.addListener(ca,this._onDragEnd);
this.addListener(bW,this._onDragChange);
}else{this.removeListener(bU,this._onDragStart);
this.removeListener(cx,this._onDrag);
this.removeListener(ca,this._onDragEnd);
this.removeListener(bW,this._onDragChange);
}this.getContainerElement().setAttribute(K,gC?bt:null);
},_applyDroppable:function(gE,gF){if(!this.isEnabled()&&gE===true){gE=false;
}this.getContainerElement().setAttribute(bf,gE?bt:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bS);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gG=qx.ui.core.DragDropCursor.getInstance();
var gH=e.getCurrentAction();
gH?gG.setAction(gH):gG.resetAction();
},visualizeFocus:function(){this.addState(cD);
},visualizeBlur:function(){this.removeState(cD);
},scrollChildIntoView:function(gI,gJ,gK,gL){gL=typeof gL==cg?true:gL;
var gM=qx.ui.core.queue.Layout;
var parent;
if(gL){gL=!gM.isScheduled(gI);
parent=gI.getLayoutParent();
if(gL&&parent){gL=!gM.isScheduled(parent);
if(gL){parent.getChildren().forEach(function(gN){gL=gL&&!gM.isScheduled(gN);
});
}}}this.scrollChildIntoViewX(gI,gJ,gL);
this.scrollChildIntoViewY(gI,gK,gL);
},scrollChildIntoViewX:function(gO,gP,gQ){this.getContentElement().scrollChildIntoViewX(gO.getContainerElement(),gP,gQ);
},scrollChildIntoViewY:function(gR,gS,gT){this.getContentElement().scrollChildIntoViewY(gR.getContainerElement(),gS,gT);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(gU){if(!this.__lb){return false;
}return !!this.__lb[gU];
},__lb:null,_getCreatedChildControls:function(){return this.__lb;
},getChildControl:function(gV,gW){if(!this.__lb){if(gW){return null;
}this.__lb={};
}var gX=this.__lb[gV];

if(gX){return gX;
}
if(gW===true){return null;
}return this._createChildControl(gV);
},_showChildControl:function(gY){var ha=this.getChildControl(gY);
ha.show();
return ha;
},_excludeChildControl:function(hb){var hc=this.getChildControl(hb,true);

if(hc){hc.exclude();
}},_isChildControlVisible:function(hd){var he=this.getChildControl(hd,true);

if(he){return he.isVisible();
}return false;
},_createChildControl:function(hf){if(!this.__lb){this.__lb={};
}else if(this.__lb[hf]){throw new Error("Child control '"+hf+"' already created!");
}var hj=hf.indexOf(t);

if(hj==-1){var hg=this._createChildControlImpl(hf);
}else{var hg=this._createChildControlImpl(hf.substring(0,hj),hf.substring(hj+1,hf.length));
}
if(!hg){throw new Error("Unsupported control: "+hf);
}hg.$$subcontrol=hf;
hg.$$subparent=this;
var hh=this.__kX;
var forward=this._forwardStates;

if(hh&&forward&&hg instanceof qx.ui.core.Widget){for(var hi in hh){if(forward[hi]){hg.addState(hi);
}}}this.fireDataEvent(cH,hg);
return this.__lb[hf]=hg;
},_createChildControlImpl:function(hk,hl){return null;
},_disposeChildControls:function(){var hp=this.__lb;

if(!hp){return;
}var hn=qx.ui.core.Widget;

for(var ho in hp){var hm=hp[ho];

if(!hn.contains(this,hm)){hm.destroy();
}else{hm.dispose();
}}delete this.__lb;
},_findTopControl:function(){var hq=this;

while(hq){if(!hq.$$subparent){return hq;
}hq=hq.$$subparent;
}return null;
},getContainerLocation:function(hr){var hs=this.getContainerElement().getDomElement();
return hs?qx.bom.element.Location.get(hs,hr):null;
},getContentLocation:function(ht){var hu=this.getContentElement().getDomElement();
return hu?qx.bom.element.Location.get(hu,ht):null;
},setDomLeft:function(hv){var hw=this.getContainerElement().getDomElement();

if(hw){hw.style.left=hv+cw;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(hx){var hy=this.getContainerElement().getDomElement();

if(hy){hy.style.top=hx+cw;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(hz,top){var hA=this.getContainerElement().getDomElement();

if(hA){hA.style.left=hz+cw;
hA.style.top=top+cw;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var hB=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var hC=this.getChildren();

for(var i=0,l=hC.length;i<l;i++){hB.add(hC[i].clone());
}}return hB;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(bX)){if(this.__kO){qx.locale.Manager.getInstance().removeListenerById(this.__kO);
}}this.getContainerElement().setAttribute(ba,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}
if(this.getContextMenu()){this.setContextMenu(null);
}if(!qx.core.ObjectRegistry.inShutDown){var hE=qx.ui.core.Widget;
var hD=this.getContainerElement();

if(this.__kK){hD.remove(this.__kK);
hE.__kI.poolDecorator(this.__kK);
}
if(this.__kL){hD.remove(this.__kL);
hE.__kJ.poolDecorator(this.__kL);
}this.clearSeparators();
this.__kK=this.__kL=this.__kR=null;
}else{this._disposeArray(Q);
this._disposeObjects(y,V);
}this._disposeArray(bg);
this.__kX=this.__lb=null;
this._disposeObjects(bB,k,R,r);
}});
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
(function(){var c="abstract",b="qx.debug",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:c,extend:qx.core.Object,members:{__hz:null,_invalidChildrenCache:null,__hE:null,invalidateLayoutCache:function(){this.__hz=null;
},renderLayout:function(d,e){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__hz){return this.__hz;
}return this.__hz=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(f){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Environment.select(b,{"true":function(g,name,h){},"false":null}),_clearSeparators:function(){var i=this.__hE;

if(i instanceof qx.ui.core.LayoutItem){i.clearSeparators();
}},_renderSeparator:function(j,k){this.__hE.renderSeparator(j,k);
},connectToWidget:function(l){if(l&&this.__hE){throw new Error("It is not possible to manually set the connected widget.");
}this.__hE=l;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__hE;
},_applyLayoutChange:function(){if(this.__hE){this.__hE.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__hE.getLayoutChildren();
}},destruct:function(){this.__hE=this.__hz=null;
}});
})();
(function(){var u="",t='indexOf',s='slice',r='concat',q='toLocaleLowerCase',p="qx.type.BaseString",o='match',n="qx.debug",m='search',k='replace',d='toLowerCase',j='charCodeAt',g='split',c='substring',b='lastIndexOf',f='substr',e='toLocaleUpperCase',h='toUpperCase',a='charAt';
qx.Class.define(p,{extend:Object,construct:function(v){var v=v||u;
this.__hU=v;
this.length=v.length;
},members:{$$isString:true,length:0,__hU:null,toString:function(){return this.__hU;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(w,x){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(y,z){if(qx.core.Environment.get(n)){qx.Class.include(y,qx.core.MAssert);
}var A=[a,j,r,t,b,o,k,m,s,g,f,c,d,h,q,e];
z.valueOf=z.toString;

if(new y(u).valueOf()==null){delete z.valueOf;
}
for(var i=0,l=A.length;i<l;i++){z[A[i]]=String.prototype[A[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__jn=c;
this.__jo=d;
},members:{__jn:null,__jo:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__jn,this.__jo);
}}});
})();
(function(){var m="_",l="",k="locale",j="_applyLocale",h="changeLocale",g="C",f="locale.variant",e="qx.dynlocale",d="qx.locale.Manager",c="String",a="singleton",b="qx.debug";
qx.Class.define(d,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jD=qx.$$translations||{};
this.__jE=qx.$$locales||{};
var n=qx.core.Environment.get(k);
var o=qx.core.Environment.get(f);

if(o!==l){n+=m+o;
}this.__jF=n;
this.setLocale(n||this.__jG);
},statics:{tr:function(p,q){var r=qx.lang.Array.fromArguments(arguments);
r.splice(0,1);
return qx.locale.Manager.getInstance().translate(p,r);
},trn:function(s,t,u,v){var w=qx.lang.Array.fromArguments(arguments);
w.splice(0,3);
if(u!=1){return qx.locale.Manager.getInstance().translate(t,w);
}else{return qx.locale.Manager.getInstance().translate(s,w);
}},trc:function(x,y,z){var A=qx.lang.Array.fromArguments(arguments);
A.splice(0,2);
return qx.locale.Manager.getInstance().translate(y,A);
},marktr:function(B){return B;
}},properties:{locale:{check:c,nullable:true,apply:j,event:h}},members:{__jG:g,__jH:null,__jI:null,__jD:null,__jE:null,__jF:null,getLanguage:function(){return this.__jI;
},getTerritory:function(){return this.getLocale().split(m)[1]||l;
},getAvailableLocales:function(C){var E=[];

for(var D in this.__jE){if(D!=this.__jG){if(this.__jE[D]===null&&!C){continue;
}E.push(D);
}}return E;
},__jJ:function(F){var H;

if(F==null){return null;
}var G=F.indexOf(m);

if(G==-1){H=F;
}else{H=F.substring(0,G);
}return H;
},_applyLocale:function(I,J){if(qx.core.Environment.get(b)){if(!(I in this.__jE||I==this.__jF)){qx.log.Logger.warn("Locale: "+I+" not available.");
}}this.__jH=I;
this.__jI=this.__jJ(I);
},addTranslation:function(K,L){var M=this.__jD;

if(M[K]){for(var N in L){M[K][N]=L[N];
}}else{M[K]=L;
}},addLocale:function(O,P){var Q=this.__jE;

if(Q[O]){for(var R in P){Q[O][R]=P[R];
}}else{Q[O]=P;
}},translate:function(S,T,U){var V=this.__jD;
return this.__jK(V,S,T,U);
},localize:function(W,X,Y){var ba=this.__jE;
return this.__jK(ba,W,X,Y);
},__jK:function(bb,bc,bd,be){var bf;

if(!bb){return bc;
}
if(be){var bh=this.__jJ(be);
}else{be=this.__jH;
bh=this.__jI;
}if(!bf&&bb[be]){bf=bb[be][bc];
}if(!bf&&bb[bh]){bf=bb[bh][bc];
}if(!bf&&bb[this.__jG]){bf=bb[this.__jG][bc];
}
if(!bf){bf=bc;
}
if(bd.length>0){var bg=[];

for(var i=0;i<bd.length;i++){var bi=bd[i];

if(bi&&bi.translate){bg[i]=bi.translate();
}else{bg[i]=bi;
}}bf=qx.lang.String.format(bf,bg);
}
if(qx.core.Environment.get(e)){bf=new qx.locale.LocalizedString(bf,bc,bd);
}return bf;
}},destruct:function(){this.__jD=this.__jE=null;
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
(function(){var k="px",j="div",i="img",h="",g="engine.name",f="no-repeat",d="qx.debug",c="scale-x",b="repeat",a="scale",J="mshtml",I="b64",H="scale-y",G="qx/icon",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",r='<img src="',s="qx.bom.element.Decoration",p="', sizingMethod='",q='"/>',n="png",o="')",l='"></div>',m='" style="',t="none",u="webkit",w=" ",v="repeat-x",y="DXImageTransform.Microsoft.AlphaImageLoader",x="qx/static/blank.gif",z="absolute";
qx.Class.define(s,{statics:{DEBUG:false,__lS:{},__lT:(qx.core.Environment.get(g)==J)&&qx.core.Environment.get(D)<9,__lU:qx.core.Environment.select(g,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__lV:{"scale-x":i,"scale-y":i,"scale":i,"repeat":j,"no-repeat":j,"repeat-x":j,"repeat-y":j},update:function(K,L,M,N){var P=this.getTagName(M,L);

if(P!=K.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var Q=this.getAttributes(L,M,N);

if(P===i){K.src=Q.src||qx.util.ResourceManager.getInstance().toUri(x);
}if(K.style.backgroundPosition!=h&&Q.style.backgroundPosition===undefined){Q.style.backgroundPosition=null;
}if(K.style.clip!=h&&Q.style.clip===undefined){Q.style.clip=null;
}var O=qx.bom.element.Style;
O.setStyles(K,Q.style);
if(this.__lT){try{K.filters[y].apply();
}catch(e){}}},create:function(R,S,T){var U=this.getTagName(S,R);
var W=this.getAttributes(R,S,T);
var V=qx.bom.element.Style.compile(W.style);

if(U===i){return r+W.src+m+V+q;
}else{return B+V+l;
}},getTagName:function(X,Y){if(Y&&this.__lT&&this.__lU[X]&&qx.lang.String.endsWith(Y,F)){return j;
}return this.__lV[X];
},getAttributes:function(ba,bb,bc){if(!bc){bc={};
}
if(!bc.position){bc.position=z;
}
if((qx.core.Environment.get(g)==J)){bc.fontSize=0;
bc.lineHeight=0;
}else if((qx.core.Environment.get(g)==u)){bc.WebkitUserDrag=t;
}var be=qx.util.ResourceManager.getInstance().getImageFormat(ba)||qx.io.ImageLoader.getFormat(ba);

if(qx.core.Environment.get(d)){if(ba!=null&&be==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+ba+"'!");
}}var bd;
if(this.__lT&&this.__lU[bb]&&be===n){bd=this.__lY(bc,bb,ba);
}else{if(bb===a){bd=this.__ma(bc,bb,ba);
}else if(bb===c||bb===H){bd=this.__mb(bc,bb,ba);
}else{bd=this.__me(bc,bb,ba);
}}return bd;
},__lW:function(bf,bh,bi){if(bf.width==null&&bh!=null){bf.width=bh+k;
}
if(bf.height==null&&bi!=null){bf.height=bi+k;
}return bf;
},__lX:function(bj){var bk=qx.util.ResourceManager.getInstance().getImageWidth(bj)||qx.io.ImageLoader.getWidth(bj);
var bl=qx.util.ResourceManager.getInstance().getImageHeight(bj)||qx.io.ImageLoader.getHeight(bj);
return {width:bk,height:bl};
},__lY:function(bm,bn,bo){var br=this.__lX(bo);
bm=this.__lW(bm,br.width,br.height);
var bq=bn==f?E:a;
var bp=C+qx.util.ResourceManager.getInstance().toUri(bo)+p+bq+o;
bm.filter=bp;
bm.backgroundImage=bm.backgroundRepeat=h;
return {style:bm};
},__ma:function(bs,bt,bu){var bv=qx.util.ResourceManager.getInstance().toUri(bu);
var bw=this.__lX(bu);
bs=this.__lW(bs,bw.width,bw.height);
return {src:bv,style:bs};
},__mb:function(bx,by,bz){var bA=qx.util.ResourceManager.getInstance();
var bD=bA.getCombinedFormat(bz);
var bF=this.__lX(bz);
var bB;

if(bD){var bE=bA.getData(bz);
var bC=bE[4];

if(bD==I){bB=bA.toDataUri(bz);
}else{bB=bA.toUri(bC);
}
if(by===c){bx=this.__mc(bx,bE,bF.height);
}else{bx=this.__md(bx,bE,bF.width);
}return {src:bB,style:bx};
}else{if(qx.core.Environment.get(d)){this.__mg(bz);
}
if(by==c){bx.height=bF.height==null?null:bF.height+k;
}else if(by==H){bx.width=bF.width==null?null:bF.width+k;
}bB=bA.toUri(bz);
return {src:bB,style:bx};
}},__mc:function(bG,bH,bI){var bJ=qx.util.ResourceManager.getInstance().getImageHeight(bH[4]);
bG.clip={top:-bH[6],height:bI};
bG.height=bJ+k;
if(bG.top!=null){bG.top=(parseInt(bG.top,10)+bH[6])+k;
}else if(bG.bottom!=null){bG.bottom=(parseInt(bG.bottom,10)+bI-bJ-bH[6])+k;
}return bG;
},__md:function(bK,bL,bM){var bN=qx.util.ResourceManager.getInstance().getImageWidth(bL[4]);
bK.clip={left:-bL[5],width:bM};
bK.width=bN+k;
if(bK.left!=null){bK.left=(parseInt(bK.left,10)+bL[5])+k;
}else if(bK.right!=null){bK.right=(parseInt(bK.right,10)+bM-bN-bL[5])+k;
}return bK;
},__me:function(bO,bP,bQ){var bT=qx.util.ResourceManager.getInstance();
var bY=bT.getCombinedFormat(bQ);
var cb=this.__lX(bQ);
if(bY&&bP!==b){var ca=bT.getData(bQ);
var bX=ca[4];

if(bY==I){var bW=bT.toDataUri(bQ);
var bV=0;
var bU=0;
}else{var bW=bT.toUri(bX);
var bV=ca[5];
var bU=ca[6];
}var bR=qx.bom.element.Background.getStyles(bW,bP,bV,bU);

for(var bS in bR){bO[bS]=bR[bS];
}
if(cb.width!=null&&bO.width==null&&(bP==A||bP===f)){bO.width=cb.width+k;
}
if(cb.height!=null&&bO.height==null&&(bP==v||bP===f)){bO.height=cb.height+k;
}return {style:bO};
}else{if(qx.core.Environment.get(d)){if(bP!==b){this.__mg(bQ);
}}bO=this.__lW(bO,cb.width,cb.height);
bO=this.__mf(bO,bQ,bP);
return {style:bO};
}},__mf:function(cc,cd,ce){var top=null;
var ci=null;

if(cc.backgroundPosition){var cf=cc.backgroundPosition.split(w);
ci=parseInt(cf[0],10);

if(isNaN(ci)){ci=cf[0];
}top=parseInt(cf[1],10);

if(isNaN(top)){top=cf[1];
}}var ch=qx.bom.element.Background.getStyles(cd,ce,ci,top);

for(var cg in ch){cc[cg]=ch[cg];
}if(cc.filter){cc.filter=h;
}return cc;
},__mg:function(cj){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(cj)&&cj.indexOf(G)==-1){if(!this.__lS[cj]){qx.log.Logger.debug("Potential clipped image candidate: "+cj);
this.__lS[cj]=true;
}}},isAlphaImageLoaderEnabled:function(){return qx.bom.element.Decoration.__lT;
}}});
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
(function(){var j="top",i="right",h="bottom",g="left",f="edge-start",e="align-start",d="align-end",c="edge-end",b="qx.util.placement.AbstractAxis",a="-",F="best-fit",E="size",D="target.bottom",C="offsets",B="size.width",A="offsets.bottom",z="qx.util.placement.Placement",y="qx.debug",x="keep-align",w="target.right",q="direct",r="offsets.right",o="target",p="offsets.left",m="area",n="target.top",k='__il',l="area.height",s="target.left",t="area.width",v="size.height",u="offsets.top";
qx.Class.define(z,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__il=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:b},axisY:{check:b},edge:{check:[j,i,h,g],init:j},align:{check:[j,i,h,g],init:i}},statics:{__im:null,compute:function(G,H,I,J,K,L,M){this.__im=this.__im||new qx.util.placement.Placement();
var P=K.split(a);
var O=P[0];
var N=P[1];
this.__im.set({axisX:this.__iq(L),axisY:this.__iq(M),edge:O,align:N});
return this.__im.compute(G,H,I,J);
},__in:null,__io:null,__ip:null,__iq:function(Q){switch(Q){case q:this.__in=this.__in||new qx.util.placement.DirectAxis();
return this.__in;
case x:this.__io=this.__io||new qx.util.placement.KeepAlignAxis();
return this.__io;
case F:this.__ip=this.__ip||new qx.util.placement.BestFitAxis();
return this.__ip;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__il:null,compute:function(R,S,T,U){if(qx.core.Environment.get(y)){this.assertObject(R,E);
this.assertNumber(R.width,B);
this.assertNumber(R.height,v);
this.assertObject(S,m);
this.assertNumber(S.width,t);
this.assertNumber(S.height,l);
this.assertObject(T,o);
this.assertNumber(T.top,n);
this.assertNumber(T.right,w);
this.assertNumber(T.bottom,D);
this.assertNumber(T.left,s);
this.assertObject(U,C);
this.assertNumber(U.top,u);
this.assertNumber(U.right,r);
this.assertNumber(U.bottom,A);
this.assertNumber(U.left,p);
}var V=this.getAxisX()||this.__il;
var X=V.computeStart(R.width,{start:T.left,end:T.right},{start:U.left,end:U.right},S.width,this.__ir());
var W=this.getAxisY()||this.__il;
var top=W.computeStart(R.height,{start:T.top,end:T.bottom},{start:U.top,end:U.bottom},S.height,this.__is());
return {left:X,top:top};
},__ir:function(){var ba=this.getEdge();
var Y=this.getAlign();

if(ba==g){return f;
}else if(ba==i){return c;
}else if(Y==g){return e;
}else if(Y==i){return d;
}},__is:function(){var bc=this.getEdge();
var bb=this.getAlign();

if(bc==j){return f;
}else if(bc==h){return c;
}else if(bb==j){return e;
}else if(bb==h){return d;
}}},destruct:function(){this._disposeObjects(k);
}});
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
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
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
(function(){var j="nonScaled",i="scaled",h="alphaScaled",g=".png",f="div",e="replacement",d="qx.event.type.Event",c="engine.name",b="hidden",a="Boolean",B="px",A="http",z="engine.version",y="scale",x="changeSource",w="qx.ui.basic.Image",v="loaded",u="qx.debug",t="-disabled.$1",s="loadingFailed",q="String",r="_applySource",o="img",p="__lE",m="image",n="mshtml",k="_applyScale",l="no-repeat";
qx.Class.define(w,{extend:qx.ui.core.Widget,construct:function(C){this.__lE={};
qx.ui.core.Widget.call(this);

if(C){this.setSource(C);
}},properties:{source:{check:q,init:null,nullable:true,event:x,apply:r,themeable:true},scale:{check:a,init:false,themeable:true,apply:k},appearance:{refine:true,init:m},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:d,loaded:d},members:{__lF:null,__lG:null,__eK:null,__lE:null,getContentElement:function(){return this.__lK();
},_createContentElement:function(){return this.__lK();
},_getContentHint:function(){return {width:this.__lF||0,height:this.__lG||0};
},_applyEnabled:function(D,E){qx.ui.core.Widget.prototype._applyEnabled.call(this,D,E);

if(this.getSource()){this._styleSource();
}},_applySource:function(F){this._styleSource();
},_applyScale:function(G){this._styleSource();
},__lH:function(H){this.__eK=H;
},__lI:function(){if(this.__eK==null){var J=this.getSource();
var I=false;

if(J!=null){I=qx.lang.String.endsWith(J,g);
}
if(this.getScale()&&I&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__eK=h;
}else if(this.getScale()){this.__eK=i;
}else{this.__eK=j;
}}return this.__eK;
},__lJ:function(K){var L;
var M;

if(K==h){L=true;
M=f;
}else if(K==j){L=false;
M=f;
}else{L=true;
M=o;
}var N=new qx.html.Image(M);
N.setScale(L);
N.setStyles({"overflowX":b,"overflowY":b});
return N;
},__lK:function(){var O=this.__lI();

if(this.__lE[O]==null){this.__lE[O]=this.__lJ(O);
}return this.__lE[O];
},_styleSource:function(){var P=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!P){this.getContentElement().resetSource();
return;
}this.__lL(P);

if((qx.core.Environment.get(c)==n)&&parseInt(qx.core.Environment.get(z),10)<9){var Q=this.getScale()?y:l;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(Q,P);
}if(qx.util.ResourceManager.getInstance().has(P)){this.__lN(this.getContentElement(),P);
}else if(qx.io.ImageLoader.isLoaded(P)){this.__lO(this.getContentElement(),P);
}else{this.__lP(this.getContentElement(),P);
}},__lL:qx.core.Environment.select(c,{"mshtml":function(R){var T=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var S=qx.lang.String.endsWith(R,g);

if(T&&S){if(this.getScale()&&this.__lI()!=h){this.__lH(h);
}else if(!this.getScale()&&this.__lI()!=j){this.__lH(j);
}}else{if(this.getScale()&&this.__lI()!=i){this.__lH(i);
}else if(!this.getScale()&&this.__lI()!=j){this.__lH(j);
}}this.__lM(this.__lK());
},"default":function(U){if(this.getScale()&&this.__lI()!=i){this.__lH(i);
}else if(!this.getScale()&&this.__lI(j)){this.__lH(j);
}this.__lM(this.__lK());
}}),__lM:function(V){var Y=this.getContainerElement();
var ba=Y.getChild(0);

if(ba!=V){if(ba!=null){var bc=B;
var W={};
var X=this.getInnerSize();

if(X!=null){W.width=X.width+bc;
W.height=X.height+bc;
}var bb=this.getInsets();
W.left=bb.left+bc;
W.top=bb.top+bc;
W.zIndex=10;
V.setStyles(W,true);
V.setSelectable(this.getSelectable());
}Y.removeAt(0);
Y.addAt(V,0);
}},__lN:function(bd,be){var bg=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bf=be.replace(/\.([a-z]+)$/,t);

if(bg.has(bf)){be=bf;
this.addState(e);
}else{this.removeState(e);
}}if(bd.getSource()===be){return;
}bd.setSource(be);
this.__lR(bg.getImageWidth(be),bg.getImageHeight(be));
},__lO:function(bh,bi){var bk=qx.io.ImageLoader;
bh.setSource(bi);
var bj=bk.getWidth(bi);
var bl=bk.getHeight(bi);
this.__lR(bj,bl);
},__lP:function(bm,bn){var bo=qx.io.ImageLoader;

if(qx.core.Environment.get(u)){if(!qx.lang.String.startsWith(bn.toLowerCase(),A)){var self=this.self(arguments);

if(!self.__vN){self.__vN={};
}
if(!self.__vN[bn]){this.debug("try to load an unmanaged relative image: "+bn);
self.__vN[bn]=true;
}}}if(!bo.isFailed(bn)){bo.load(bn,this.__lQ,this);
}else{if(bm!=null){bm.resetSource();
}}},__lQ:function(bp,bq){if(this.$$disposed===true){return;
}if(bp!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bq.failed){this.warn("Image could not be loaded: "+bp);
this.fireEvent(s);
}else if(bq.aborted){return ;
}else{this.fireEvent(v);
}this._styleSource();
},__lR:function(br,bs){if(br!==this.__lF||bs!==this.__lG){this.__lF=br;
this.__lG=bs;
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
(function(){var e="first",d="last",c="hovered",b="__zY",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__na=new qx.ui.core.Blocker(this);
this.__zY=f;
},members:{__zY:null,__Ah:null,__Ai:null,__na:null,getPaneScroller:function(){return this.__zY;
},getTable:function(){return this.__zY.getTable();
},getBlocker:function(){return this.__na;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(g,h,i){var j=this.getHeaderWidgetAtColumn(g);

if(j!=null){j.setWidth(h);
}},setMouseOverColumn:function(k){if(k!=this.__Ai){if(this.__Ai!=null){var l=this.getHeaderWidgetAtColumn(this.__Ai);

if(l!=null){l.removeState(c);
}}
if(k!=null){this.getHeaderWidgetAtColumn(k).addState(c);
}this.__Ai=k;
}},getHeaderWidgetAtColumn:function(m){var n=this.getPaneScroller().getTablePaneModel().getX(m);
return this._getChildren()[n];
},showColumnMoveFeedback:function(o,x){var s=this.getContainerLocation();

if(this.__Ah==null){var y=this.getTable();
var p=this.getPaneScroller().getTablePaneModel().getX(o);
var r=this._getChildren()[p];
var t=y.getTableModel();
var v=y.getTableColumnModel();
var w={xPos:p,col:o,name:t.getColumnName(o),table:y};
var u=v.getHeaderCellRenderer(o);
var q=u.createHeaderCell(w);
var z=r.getBounds();
q.setWidth(z.width);
q.setHeight(z.height);
q.setZIndex(1000000);
q.setOpacity(0.8);
q.setLayoutProperties({top:s.top});
this.getApplicationRoot().add(q);
this.__Ah=q;
}this.__Ah.setLayoutProperties({left:s.left+x});
this.__Ah.show();
},hideColumnMoveFeedback:function(){if(this.__Ah!=null){this.__Ah.destroy();
this.__Ah=null;
}},isShowingColumnMoveFeedback:function(){return this.__Ah!=null;
},_updateContent:function(A){var K=this.getTable();
var E=K.getTableModel();
var H=K.getTableColumnModel();
var J=this.getPaneScroller().getTablePaneModel();
var M=this._getChildren();
var F=J.getColumnCount();
var I=E.getSortColumnIndex();
if(A){this._cleanUpCells();
}var B={};
B.sortedAscending=E.isSortAscending();

for(var x=0;x<F;x++){var D=J.getColumnAtX(x);

if(D===undefined){continue;
}var L=H.getColumnWidth(D);
var G=H.getHeaderCellRenderer(D);
B.xPos=x;
B.col=D;
B.name=E.getColumnName(D);
B.editable=E.isColumnEditable(D);
B.sorted=(D==I);
B.table=K;
var C=M[x];
if(C==null){C=G.createHeaderCell(B);
C.set({width:L});
this._add(C);
}else{G.updateHeaderCell(B,C);
}if(x===0){C.addState(e);
C.removeState(d);
}else if(x===F-1){C.removeState(e);
C.addState(d);
}else{C.removeState(e);
C.removeState(d);
}}},_cleanUpCells:function(){var O=this._getChildren();

for(var x=O.length-1;x>=0;x--){var N=O[x];
N.destroy();
}}},destruct:function(){this.__na.dispose();
this._disposeObjects(b);
}});
})();
(function(){var s="_applyLayoutChange",r="left",q="width",p="center",o="top",n="Decorator",m="middle",k="_applyReversed",j="qx.debug",h="bottom",c="' is not supported by the HBox layout!",g="Boolean",f="flex",b="right",a="Integer",e="The property '",d="qx.ui.layout.HBox";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);

if(t){this.setSpacing(t);
}
if(u){this.setAlignX(u);
}
if(v){this.setSeparator(v);
}},properties:{alignX:{check:[r,p,b],init:r,apply:s},alignY:{check:[o,m,h],init:o,apply:s},spacing:{check:a,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:g,init:false,apply:k}},members:{__mk:null,__le:null,__lf:null,__kv:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__lg:function(){var B=this._getLayoutChildren();
var length=B.length;
var y=false;
var w=this.__mk&&this.__mk.length!=length&&this.__le&&this.__mk;
var z;
var x=w?this.__mk:new Array(length);
var A=w?this.__le:new Array(length);
if(this.getReversed()){B=B.concat().reverse();
}for(var i=0;i<length;i++){z=B[i].getLayoutProperties();

if(z.width!=null){x[i]=parseFloat(z.width)/100;
}
if(z.flex!=null){A[i]=z.flex;
y=true;
}else{A[i]=0;
}}if(!w){this.__mk=x;
this.__le=A;
}this.__lf=y;
this.__kv=B;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Environment.select(j,{"true":function(C,name,D){this.assert(name===f||name===q,e+name+c);

if(name==q){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(D);
this.assert(D>=0);
}},"false":null}),renderLayout:function(E,F){if(this._invalidChildrenCache){this.__lg();
}var L=this.__kv;
var length=L.length;
var U=qx.ui.layout.Util;
var T=this.getSpacing();
var X=this.getSeparator();

if(X){var I=U.computeHorizontalSeparatorGaps(L,T,X);
}else{var I=U.computeHorizontalGaps(L,T,true);
}var i,G,R,Q;
var W=[];
var M=I;

for(i=0;i<length;i+=1){Q=this.__mk[i];
R=Q!=null?Math.floor((E-I)*Q):L[i].getSizeHint().width;
W.push(R);
M+=R;
}if(this.__lf&&M!=E){var O={};
var S,V;

for(i=0;i<length;i+=1){S=this.__le[i];

if(S>0){N=L[i].getSizeHint();
O[i]={min:N.minWidth,value:W[i],max:N.maxWidth,flex:S};
}}var J=U.computeFlexOffsets(O,E,M);

for(i in J){V=J[i].offset;
W[i]+=V;
M+=V;
}}var bc=L[0].getMarginLeft();
if(M<E&&this.getAlignX()!=r){bc=E-M;

if(this.getAlignX()===p){bc=Math.round(bc/2);
}}var N,top,H,R,K,ba,P;
var T=this.getSpacing();
this._clearSeparators();
if(X){var Y=qx.theme.manager.Decoration.getInstance().resolve(X).getInsets();
var bb=Y.left+Y.right;
}for(i=0;i<length;i+=1){G=L[i];
R=W[i];
N=G.getSizeHint();
ba=G.getMarginTop();
P=G.getMarginBottom();
H=Math.max(N.minHeight,Math.min(F-ba-P,N.maxHeight));
top=U.computeVerticalAlignOffset(G.getAlignY()||this.getAlignY(),H,F,ba,P);
if(i>0){if(X){bc+=K+T;
this._renderSeparator(X,{left:bc,top:0,width:bb,height:F});
bc+=bb+T+G.getMarginLeft();
}else{bc+=U.collapseMargins(T,K,G.getMarginLeft());
}}G.renderLayout(bc,top,R,H);
bc+=R;
K=G.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lg();
}var bj=qx.ui.layout.Util;
var br=this.__kv;
var bd=0,bk=0,bh=0;
var bg=0,bi=0;
var bo,be,bq;
for(var i=0,l=br.length;i<l;i+=1){bo=br[i];
be=bo.getSizeHint();
bk+=be.width;
var bn=this.__le[i];
var bf=this.__mk[i];

if(bn){bd+=be.minWidth;
}else if(bf){bh=Math.max(bh,Math.round(be.minWidth/bf));
}else{bd+=be.width;
}bq=bo.getMarginTop()+bo.getMarginBottom();
if((be.height+bq)>bi){bi=be.height+bq;
}if((be.minHeight+bq)>bg){bg=be.minHeight+bq;
}}bd+=bh;
var bm=this.getSpacing();
var bp=this.getSeparator();

if(bp){var bl=bj.computeHorizontalSeparatorGaps(br,bm,bp);
}else{var bl=bj.computeHorizontalGaps(br,bm,true);
}return {minWidth:bd+bl,width:bk+bl,minHeight:bg,height:bi};
}},destruct:function(){this.__mk=this.__le=this.__kv=null;
}});
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
(function(){var k="number",j="': ",h="width",g="qx.ui.layout.Canvas",f="qx.debug",e="height",d="Bad format of layout property '",c="' is not supported by the Canvas layout!",b=". The value must be either an integer or an percent string.",a="The property '";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Environment.select(f,{"true":function(m,name,n){var o={top:1,left:1,bottom:1,right:1,width:1,height:1,edge:1};
this.assert(o[name]==1,a+name+c);

if(name==h||name==e){this.assertMatch(n,qx.ui.layout.Util.PERCENT_VALUE);
}else{if(typeof n===k){this.assertInteger(n);
}else if(qx.lang.Type.isString(n)){this.assertMatch(n,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.fail(d+name+j+n+b);
}}},"false":null}),renderLayout:function(p,q){var B=this._getLayoutChildren();
var t,A,y;
var D,top,r,s,v,u;
var z,x,C,w;

for(var i=0,l=B.length;i<l;i++){t=B[i];
A=t.getSizeHint();
y=t.getLayoutProperties();
z=t.getMarginTop();
x=t.getMarginRight();
C=t.getMarginBottom();
w=t.getMarginLeft();
D=y.left!=null?y.left:y.edge;

if(qx.lang.Type.isString(D)){D=Math.round(parseFloat(D)*p/100);
}r=y.right!=null?y.right:y.edge;

if(qx.lang.Type.isString(r)){r=Math.round(parseFloat(r)*p/100);
}top=y.top!=null?y.top:y.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*q/100);
}s=y.bottom!=null?y.bottom:y.edge;

if(qx.lang.Type.isString(s)){s=Math.round(parseFloat(s)*q/100);
}if(D!=null&&r!=null){v=p-D-r-w-x;
if(v<A.minWidth){v=A.minWidth;
}else if(v>A.maxWidth){v=A.maxWidth;
}D+=w;
}else{v=y.width;

if(v==null){v=A.width;
}else{v=Math.round(parseFloat(v)*p/100);
if(v<A.minWidth){v=A.minWidth;
}else if(v>A.maxWidth){v=A.maxWidth;
}}
if(r!=null){D=p-v-r-x-w;
}else if(D==null){D=w;
}else{D+=w;
}}if(top!=null&&s!=null){u=q-top-s-z-C;
if(u<A.minHeight){u=A.minHeight;
}else if(u>A.maxHeight){u=A.maxHeight;
}top+=z;
}else{u=y.height;

if(u==null){u=A.height;
}else{u=Math.round(parseFloat(u)*q/100);
if(u<A.minHeight){u=A.minHeight;
}else if(u>A.maxHeight){u=A.maxHeight;
}}
if(s!=null){top=q-u-s-C-z;
}else if(top==null){top=z;
}else{top+=z;
}}t.renderLayout(D,top,v,u);
}},_computeSizeHint:function(){var T=0,S=0;
var Q=0,O=0;
var M,L;
var K,I;
var E=this._getLayoutChildren();
var H,R,G;
var U,top,F,J;

for(var i=0,l=E.length;i<l;i++){H=E[i];
R=H.getLayoutProperties();
G=H.getSizeHint();
var P=H.getMarginLeft()+H.getMarginRight();
var N=H.getMarginTop()+H.getMarginBottom();
M=G.width+P;
L=G.minWidth+P;
U=R.left!=null?R.left:R.edge;

if(U&&typeof U===k){M+=U;
L+=U;
}F=R.right!=null?R.right:R.edge;

if(F&&typeof F===k){M+=F;
L+=F;
}T=Math.max(T,M);
S=Math.max(S,L);
K=G.height+N;
I=G.minHeight+N;
top=R.top!=null?R.top:R.edge;

if(top&&typeof top===k){K+=top;
I+=top;
}J=R.bottom!=null?R.bottom:R.edge;

if(J&&typeof J===k){K+=J;
I+=J;
}Q=Math.max(Q,K);
O=Math.max(O,I);
}return {width:T,minWidth:S,height:Q,minHeight:O};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(b){qx.html.Element.call(this);

if(b!=null){this.useElement(b);
}},members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
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
(function(){var k="",j="Number",h='</div>',g='" ',f="paneUpdated",e='<div>',d="</div>",c="overflow: hidden;",b="qx.event.type.Data",a="paneReloadsData",E="div",D='style="',C="_applyMaxCacheLines",B="qx.ui.table.pane.Pane",A="width: 100%;",z="qx.event.type.Event",w="_applyVisibleRowCount",v='>',u="line-height: ",t="appear",r='class="',s="width:100%;",p="px;",q='<div ',n="'>",o="_applyFirstVisibleRow",l="<div style='",m=";position:relative;";
qx.Class.define(B,{extend:qx.ui.core.Widget,construct:function(F){qx.ui.core.Widget.call(this);
this.__zY=F;
this.__Aa=0;
this.__zH=0;
this.__Ab=[];
},events:{"paneReloadsData":b,"paneUpdated":z},properties:{firstVisibleRow:{check:j,init:0,apply:o},visibleRowCount:{check:j,init:0,apply:w},maxCacheLines:{check:j,init:1000,apply:C},allowShrinkX:{refine:true,init:false}},members:{__zH:null,__Aa:null,__zY:null,__Ac:null,__zE:null,__zD:null,__Ab:null,__Ad:0,_applyFirstVisibleRow:function(G,H){this.updateContent(false,G-H);
},_applyVisibleRowCount:function(I,J){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__zY;
},getTable:function(){return this.__zY.getTable();
},setFocusedCell:function(K,L,M){if(K!=this.__zD||L!=this.__zE){var N=this.__zE;
this.__zD=K;
this.__zE=L;
if(L!=N&&!M){if(N!==null){this.updateContent(false,null,N,true);
}
if(L!==null){this.updateContent(false,null,L,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(O,P){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(Q,R,S,T){this.__Ae();
var V=this.getFirstVisibleRow();
var U=this.getVisibleRowCount();

if(R==-1||R>=V&&Q<V+U){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(W,X){if(this.__Ad>=W&&W!==-1){this.__Ae();
}},__Ae:function(){this.__Ab=[];
this.__Ad=0;
},__Af:function(Y,ba,bb){if(!ba&&!bb&&this.__Ab[Y]){return this.__Ab[Y];
}else{return null;
}},__Ag:function(bc,bd,be,bf){var bg=this.getMaxCacheLines();

if(!be&&!bf&&!this.__Ab[bc]&&bg>0){this._applyMaxCacheLines(bg);
this.__Ab[bc]=bd;
this.__Ad+=1;
}},updateContent:function(bh,bi,bj,bk){if(bh){this.__Ae();
}if(bi&&Math.abs(bi)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(bi);
}else if(bk&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(bj);
}else{this._updateAllRows();
}},_updateRowStyles:function(bl){var bp=this.getContentElement().getDomElement();

if(!bp||!bp.firstChild){this._updateAllRows();
return;
}var bt=this.getTable();
var bn=bt.getSelectionModel();
var bq=bt.getTableModel();
var bu=bt.getDataRowRenderer();
var bo=bp.firstChild.childNodes;
var bs={table:bt};
var bv=this.getFirstVisibleRow();
var y=0;
var bm=bo.length;

if(bl!=null){var br=bl-bv;

if(br>=0&&br<bm){bv=bl;
y=br;
bm=br+1;
}else{return;
}}
for(;y<bm;y++,bv++){bs.row=bv;
bs.selected=bn.isSelectedIndex(bv);
bs.focusedRow=(this.__zE==bv);
bs.rowData=bq.getRowData(bv);
bu.updateDataRowElement(bs,bo[y]);
}},_getRowsHtml:function(bw,bx){var bD=this.getTable();
var bG=bD.getSelectionModel();
var bA=bD.getTableModel();
var bB=bD.getTableColumnModel();
var bV=this.getPaneScroller().getTablePaneModel();
var bL=bD.getDataRowRenderer();
bA.prefetchRows(bw,bw+bx-1);
var bS=bD.getRowHeight();
var bU=bV.getColumnCount();
var bC=0;
var bz=[];
for(var x=0;x<bU;x++){var bY=bV.getColumnAtX(x);
var bF=bB.getColumnWidth(bY);
bz.push({col:bY,xPos:x,editable:bA.isColumnEditable(bY),focusedCol:this.__zD==bY,styleLeft:bC,styleWidth:bF});
bC+=bF;
}var bX=[];
var ca=false;

for(var bE=bw;bE<bw+bx;bE++){var bH=bG.isSelectedIndex(bE);
var bK=(this.__zE==bE);
var bP=this.__Af(bE,bH,bK);

if(bP){bX.push(bP);
continue;
}var by=[];
var bR={table:bD};
bR.styleHeight=bS;
bR.row=bE;
bR.selected=bH;
bR.focusedRow=bK;
bR.rowData=bA.getRowData(bE);

if(!bR.rowData){ca=true;
}by.push(q);
var bO=bL.getRowAttributes(bR);

if(bO){by.push(bO);
}var bN=bL.getRowClass(bR);

if(bN){by.push(r,bN,g);
}var bM=bL.createRowStyle(bR);
bM+=m+bL.getRowHeightStyle(bS)+s;

if(bM){by.push(D,bM,g);
}by.push(v);
var bW=false;

for(x=0;x<bU&&!bW;x++){var bI=bz[x];

for(var bT in bI){bR[bT]=bI[bT];
}var bY=bR.col;
bR.value=bA.getValue(bY,bE);
var bJ=bB.getDataCellRenderer(bY);
bR.style=bJ.getDefaultCellStyle();
bW=bJ.createDataCellHtml(bR,by)||false;
}by.push(h);
var bQ=by.join(k);
this.__Ag(bE,bQ,bH,bK);
bX.push(bQ);
}this.fireDataEvent(a,ca);
return bX.join(k);
},_scrollContent:function(cb){var cc=this.getContentElement().getDomElement();

if(!(cc&&cc.firstChild)){this._updateAllRows();
return;
}var cl=cc.firstChild;
var cd=cl.childNodes;
var cj=this.getVisibleRowCount();
var ci=this.getFirstVisibleRow();
var cg=this.getTable().getTableModel();
var cm=0;
cm=cg.getRowCount();
if(ci+cj>cm){this._updateAllRows();
return;
}var cn=cb<0?cj+cb:0;
var ce=cb<0?0:cj-cb;

for(i=Math.abs(cb)-1;i>=0;i--){var ch=cd[cn];

try{cl.removeChild(ch);
}catch(co){break;
}}if(!this.__Ac){this.__Ac=document.createElement(E);
}var ck=e;
ck+=this._getRowsHtml(ci+ce,Math.abs(cb));
ck+=h;
this.__Ac.innerHTML=ck;
var cf=this.__Ac.firstChild.childNodes;
if(cb>0){for(var i=cf.length-1;i>=0;i--){var ch=cf[0];
cl.appendChild(ch);
}}else{for(var i=cf.length-1;i>=0;i--){var ch=cf[cf.length-1];
cl.insertBefore(ch,cl.firstChild);
}}if(this.__zE!==null){this._updateRowStyles(this.__zE-cb);
this._updateRowStyles(this.__zE);
}this.fireEvent(f);
},_updateAllRows:function(){var cs=this.getContentElement().getDomElement();

if(!cs){this.addListenerOnce(t,arguments.callee,this);
return;
}var cy=this.getTable();
var cv=cy.getTableModel();
var cx=this.getPaneScroller().getTablePaneModel();
var cw=cx.getColumnCount();
var cp=cy.getRowHeight();
var ct=this.getFirstVisibleRow();
var cq=this.getVisibleRowCount();
var cz=cv.getRowCount();

if(ct+cq>cz){cq=Math.max(0,cz-ct);
}var cr=cx.getTotalWidth();
var cu;
if(cq>0){cu=[l,A,(cy.getForceLineHeight()?u+cp+p:k),c,n,this._getRowsHtml(ct,cq),d];
}else{cu=[];
}var cA=cu.join(k);
cs.innerHTML=cA;
this.setWidth(cr);
this.__Aa=cw;
this.__zH=cq;
this.fireEvent(f);
}},destruct:function(){this.__Ac=this.__zY=this.__Ab=null;
}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(b){return true;
},updateHeaderCell:function(c,d){return true;
}}});
})();
(function(){var b="qx.ui.table.headerrenderer.Default",a="String";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.table.IHeaderRenderer,statics:{STATE_SORTED:"sorted",STATE_SORTED_ASCENDING:"sortedAscending"},properties:{toolTip:{check:a,init:null,nullable:true}},members:{createHeaderCell:function(c){var d=new qx.ui.table.headerrenderer.HeaderCell();
this.updateHeaderCell(c,d);
return d;
},updateHeaderCell:function(e,f){var g=qx.ui.table.headerrenderer.Default;
if(e.name&&e.name.translate){f.setLabel(e.name.translate());
}else{f.setLabel(e.name);
}var h=f.getToolTip();

if(this.getToolTip()!=null){if(h==null){h=new qx.ui.tooltip.ToolTip(this.getToolTip());
f.setToolTip(h);
qx.util.DisposeUtil.disposeTriggeredBy(h,f);
}else{h.setLabel(this.getToolTip());
}}e.sorted?f.addState(g.STATE_SORTED):f.removeState(g.STATE_SORTED);
e.sortedAscending?f.addState(g.STATE_SORTED_ASCENDING):f.removeState(g.STATE_SORTED_ASCENDING);
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
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
(function(){var i="icon",h="label",g="String",f="sort-icon",e="_applySortIcon",d="_applyIcon",c="table-header-cell",b="qx.ui.table.headerrenderer.HeaderCell",a="_applyLabel";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
var j=new qx.ui.layout.Grid();
j.setRowFlex(0,1);
j.setColumnFlex(1,1);
j.setColumnFlex(2,1);
this.setLayout(j);
},properties:{appearance:{refine:true,init:c},label:{check:g,init:null,nullable:true,apply:a},sortIcon:{check:g,init:null,nullable:true,apply:e,themeable:true},icon:{check:g,init:null,nullable:true,apply:d}},members:{_applyLabel:function(k,l){if(k){this._showChildControl(h).setValue(k);
}else{this._excludeChildControl(h);
}},_applySortIcon:function(m,n){if(m){this._showChildControl(f).setSource(m);
}else{this._excludeChildControl(f);
}},_applyIcon:function(o,p){if(o){this._showChildControl(i).setSource(o);
}else{this._excludeChildControl(i);
}},_createChildControlImpl:function(q,r){var s;

switch(q){case h:s=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(s,{row:0,column:1});
break;
case f:s=new qx.ui.basic.Image(this.getSortIcon());
s.setAnonymous(true);
this._add(s,{row:0,column:2});
break;
case i:s=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(s,{row:0,column:0});
break;
}return s||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,q);
}}});
})();
(function(){var n="top",m="left",h="qx.debug",g="bottom",f="hAlign",e="vAlign",d="Integer",c="_applyLayoutChange",b="center",a="middle",D="right",C="flex",B="height",A="' is not supported by the Grid layout!",z="Invalid parameter 'column'",w="The property '",v="Value must be positive",u="qx.ui.layout.Grid",t="maxHeight",s="width",q="minHeight",r="minWidth",o="maxWidth",p="Invalid parameter 'row'";
qx.Class.define(u,{extend:qx.ui.layout.Abstract,construct:function(E,F){qx.ui.layout.Abstract.call(this);
this.__js=[];
this.__jt=[];

if(E){this.setSpacingX(E);
}
if(F){this.setSpacingY(F);
}},properties:{spacingX:{check:d,init:0,apply:c},spacingY:{check:d,init:0,apply:c}},members:{__ju:null,__js:null,__jt:null,__jv:null,__jw:null,__jx:null,__jy:null,__jz:null,__jA:null,verifyLayoutProperty:qx.core.Environment.select(h,{"true":function(G,name,H){var I={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(I[name]==1,w+name+A);
this.assertInteger(H);
this.assert(H>=0,v);
},"false":null}),__jB:function(){var O=[];
var N=[];
var P=[];
var L=-1;
var K=-1;
var R=this._getLayoutChildren();

for(var i=0,l=R.length;i<l;i++){var M=R[i];
var Q=M.getLayoutProperties();
var S=Q.row;
var J=Q.column;
Q.colSpan=Q.colSpan||1;
Q.rowSpan=Q.rowSpan||1;
if(S==null||J==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+M+"' must be defined!");
}
if(O[S]&&O[S][J]){throw new Error("Cannot add widget '"+M+"'!. "+"There is already a widget '"+O[S][J]+"' in this cell ("+S+", "+J+") for '"+this+"'");
}
for(var x=J;x<J+Q.colSpan;x++){for(var y=S;y<S+Q.rowSpan;y++){if(O[y]==undefined){O[y]=[];
}O[y][x]=M;
K=Math.max(K,x);
L=Math.max(L,y);
}}
if(Q.rowSpan>1){P.push(M);
}
if(Q.colSpan>1){N.push(M);
}}for(var y=0;y<=L;y++){if(O[y]==undefined){O[y]=[];
}}this.__ju=O;
this.__jv=N;
this.__jw=P;
this.__jx=L;
this.__jy=K;
this.__jz=null;
this.__jA=null;
delete this._invalidChildrenCache;
},_setRowData:function(T,U,V){var W=this.__js[T];

if(!W){this.__js[T]={};
this.__js[T][U]=V;
}else{W[U]=V;
}},_setColumnData:function(X,Y,ba){var bb=this.__jt[X];

if(!bb){this.__jt[X]={};
this.__jt[X][Y]=ba;
}else{bb[Y]=ba;
}},setSpacing:function(bc){this.setSpacingY(bc);
this.setSpacingX(bc);
return this;
},setColumnAlign:function(bd,be,bf){if(qx.core.Environment.get(h)){this.assertInteger(bd,z);
this.assertInArray(be,[m,b,D]);
this.assertInArray(bf,[n,a,g]);
}this._setColumnData(bd,f,be);
this._setColumnData(bd,e,bf);
this._applyLayoutChange();
return this;
},getColumnAlign:function(bg){var bh=this.__jt[bg]||{};
return {vAlign:bh.vAlign||n,hAlign:bh.hAlign||m};
},setRowAlign:function(bi,bj,bk){if(qx.core.Environment.get(h)){this.assertInteger(bi,p);
this.assertInArray(bj,[m,b,D]);
this.assertInArray(bk,[n,a,g]);
}this._setRowData(bi,f,bj);
this._setRowData(bi,e,bk);
this._applyLayoutChange();
return this;
},getRowAlign:function(bl){var bm=this.__js[bl]||{};
return {vAlign:bm.vAlign||n,hAlign:bm.hAlign||m};
},getCellWidget:function(bn,bo){if(this._invalidChildrenCache){this.__jB();
}var bn=this.__ju[bn]||{};
return bn[bo]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__jB();
}return this.__jx+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__jB();
}return this.__jy+1;
},getCellAlign:function(bp,bq){var bw=n;
var bu=m;
var bv=this.__js[bp];
var bs=this.__jt[bq];
var br=this.__ju[bp][bq];

if(br){var bt={vAlign:br.getAlignY(),hAlign:br.getAlignX()};
}else{bt={};
}if(bt.vAlign){bw=bt.vAlign;
}else if(bv&&bv.vAlign){bw=bv.vAlign;
}else if(bs&&bs.vAlign){bw=bs.vAlign;
}if(bt.hAlign){bu=bt.hAlign;
}else if(bs&&bs.hAlign){bu=bs.hAlign;
}else if(bv&&bv.hAlign){bu=bv.hAlign;
}return {vAlign:bw,hAlign:bu};
},setColumnFlex:function(bx,by){this._setColumnData(bx,C,by);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bz){var bA=this.__jt[bz]||{};
return bA.flex!==undefined?bA.flex:0;
},setRowFlex:function(bB,bC){this._setRowData(bB,C,bC);
this._applyLayoutChange();
return this;
},getRowFlex:function(bD){var bE=this.__js[bD]||{};
var bF=bE.flex!==undefined?bE.flex:0;
return bF;
},setColumnMaxWidth:function(bG,bH){this._setColumnData(bG,o,bH);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bI){var bJ=this.__jt[bI]||{};
return bJ.maxWidth!==undefined?bJ.maxWidth:Infinity;
},setColumnWidth:function(bK,bL){this._setColumnData(bK,s,bL);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bM){var bN=this.__jt[bM]||{};
return bN.width!==undefined?bN.width:null;
},setColumnMinWidth:function(bO,bP){this._setColumnData(bO,r,bP);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bQ){var bR=this.__jt[bQ]||{};
return bR.minWidth||0;
},setRowMaxHeight:function(bS,bT){this._setRowData(bS,t,bT);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bU){var bV=this.__js[bU]||{};
return bV.maxHeight||Infinity;
},setRowHeight:function(bW,bX){this._setRowData(bW,B,bX);
this._applyLayoutChange();
return this;
},getRowHeight:function(bY){var ca=this.__js[bY]||{};
return ca.height!==undefined?ca.height:null;
},setRowMinHeight:function(cb,cc){this._setRowData(cb,q,cc);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(cd){var ce=this.__js[cd]||{};
return ce.minHeight||0;
},__jC:function(cf){var cj=cf.getSizeHint();
var ci=cf.getMarginLeft()+cf.getMarginRight();
var ch=cf.getMarginTop()+cf.getMarginBottom();
var cg={height:cj.height+ch,width:cj.width+ci,minHeight:cj.minHeight+ch,minWidth:cj.minWidth+ci,maxHeight:cj.maxHeight+ch,maxWidth:cj.maxWidth+ci};
return cg;
},_fixHeightsRowSpan:function(ck){var cr=this.getSpacingY();

for(var i=0,l=this.__jw.length;i<l;i++){var cy=this.__jw[i];
var cu=this.__jC(cy);
var cn=cy.getLayoutProperties();
var ct=cn.row;
var cD=cr*(cn.rowSpan-1);
var cl=cD;
var co={};

for(var j=0;j<cn.rowSpan;j++){var cs=cn.row+j;
var cC=ck[cs];
var cE=this.getRowFlex(cs);

if(cE>0){co[cs]={min:cC.minHeight,value:cC.height,max:cC.maxHeight,flex:cE};
}cD+=cC.height;
cl+=cC.minHeight;
}if(cD<cu.height){if(!qx.lang.Object.isEmpty(co)){var cp=qx.ui.layout.Util.computeFlexOffsets(co,cu.height,cD);

for(var k=0;k<cn.rowSpan;k++){var cA=cp[ct+k]?cp[ct+k].offset:0;
ck[ct+k].height+=cA;
}}else{var cx=cr*(cn.rowSpan-1);
var cv=cu.height-cx;
var cB=Math.floor(cv/cn.rowSpan);
var cz=0;
var cm=0;

for(var k=0;k<cn.rowSpan;k++){var cq=ck[ct+k].height;
cz+=cq;

if(cq<cB){cm++;
}}var cw=Math.floor((cv-cz)/cm);
for(var k=0;k<cn.rowSpan;k++){if(ck[ct+k].height<cB){ck[ct+k].height+=cw;
}}}}if(cl<cu.minHeight){var cp=qx.ui.layout.Util.computeFlexOffsets(co,cu.minHeight,cl);

for(var j=0;j<cn.rowSpan;j++){var cA=cp[ct+j]?cp[ct+j].offset:0;
ck[ct+j].minHeight+=cA;
}}}},_fixWidthsColSpan:function(cF){var cJ=this.getSpacingX();

for(var i=0,l=this.__jv.length;i<l;i++){var cG=this.__jv[i];
var cI=this.__jC(cG);
var cL=cG.getLayoutProperties();
var cH=cL.column;
var cR=cJ*(cL.colSpan-1);
var cK=cR;
var cM={};
var cO;

for(var j=0;j<cL.colSpan;j++){var cS=cL.column+j;
var cQ=cF[cS];
var cP=this.getColumnFlex(cS);
if(cP>0){cM[cS]={min:cQ.minWidth,value:cQ.width,max:cQ.maxWidth,flex:cP};
}cR+=cQ.width;
cK+=cQ.minWidth;
}if(cR<cI.width){var cN=qx.ui.layout.Util.computeFlexOffsets(cM,cI.width,cR);

for(var j=0;j<cL.colSpan;j++){cO=cN[cH+j]?cN[cH+j].offset:0;
cF[cH+j].width+=cO;
}}if(cK<cI.minWidth){var cN=qx.ui.layout.Util.computeFlexOffsets(cM,cI.minWidth,cK);

for(var j=0;j<cL.colSpan;j++){cO=cN[cH+j]?cN[cH+j].offset:0;
cF[cH+j].minWidth+=cO;
}}}},_getRowHeights:function(){if(this.__jz!=null){return this.__jz;
}var dd=[];
var cV=this.__jx;
var cU=this.__jy;

for(var de=0;de<=cV;de++){var cW=0;
var cY=0;
var cX=0;

for(var dc=0;dc<=cU;dc++){var cT=this.__ju[de][dc];

if(!cT){continue;
}var da=cT.getLayoutProperties().rowSpan||0;

if(da>1){continue;
}var db=this.__jC(cT);

if(this.getRowFlex(de)>0){cW=Math.max(cW,db.minHeight);
}else{cW=Math.max(cW,db.height);
}cY=Math.max(cY,db.height);
}var cW=Math.max(cW,this.getRowMinHeight(de));
var cX=this.getRowMaxHeight(de);

if(this.getRowHeight(de)!==null){var cY=this.getRowHeight(de);
}else{var cY=Math.max(cW,Math.min(cY,cX));
}dd[de]={minHeight:cW,height:cY,maxHeight:cX};
}
if(this.__jw.length>0){this._fixHeightsRowSpan(dd);
}this.__jz=dd;
return dd;
},_getColWidths:function(){if(this.__jA!=null){return this.__jA;
}var dj=[];
var dg=this.__jy;
var di=this.__jx;

for(var dp=0;dp<=dg;dp++){var dm=0;
var dl=0;
var dh=Infinity;

for(var dq=0;dq<=di;dq++){var df=this.__ju[dq][dp];

if(!df){continue;
}var dk=df.getLayoutProperties().colSpan||0;

if(dk>1){continue;
}var dn=this.__jC(df);

if(this.getColumnFlex(dp)>0){dl=Math.max(dl,dn.minWidth);
}else{dl=Math.max(dl,dn.width);
}dm=Math.max(dm,dn.width);
}dl=Math.max(dl,this.getColumnMinWidth(dp));
dh=this.getColumnMaxWidth(dp);

if(this.getColumnWidth(dp)!==null){var dm=this.getColumnWidth(dp);
}else{var dm=Math.max(dl,Math.min(dm,dh));
}dj[dp]={minWidth:dl,width:dm,maxWidth:dh};
}
if(this.__jv.length>0){this._fixWidthsColSpan(dj);
}this.__jA=dj;
return dj;
},_getColumnFlexOffsets:function(dr){var ds=this.getSizeHint();
var dw=dr-ds.width;

if(dw==0){return {};
}var du=this._getColWidths();
var dt={};

for(var i=0,l=du.length;i<l;i++){var dx=du[i];
var dv=this.getColumnFlex(i);

if((dv<=0)||(dx.width==dx.maxWidth&&dw>0)||(dx.width==dx.minWidth&&dw<0)){continue;
}dt[i]={min:dx.minWidth,value:dx.width,max:dx.maxWidth,flex:dv};
}return qx.ui.layout.Util.computeFlexOffsets(dt,dr,ds.width);
},_getRowFlexOffsets:function(dy){var dz=this.getSizeHint();
var dC=dy-dz.height;

if(dC==0){return {};
}var dD=this._getRowHeights();
var dA={};

for(var i=0,l=dD.length;i<l;i++){var dE=dD[i];
var dB=this.getRowFlex(i);

if((dB<=0)||(dE.height==dE.maxHeight&&dC>0)||(dE.height==dE.minHeight&&dC<0)){continue;
}dA[i]={min:dE.minHeight,value:dE.height,max:dE.maxHeight,flex:dB};
}return qx.ui.layout.Util.computeFlexOffsets(dA,dy,dz.height);
},renderLayout:function(dF,dG){if(this._invalidChildrenCache){this.__jB();
}var dU=qx.ui.layout.Util;
var dI=this.getSpacingX();
var dO=this.getSpacingY();
var ea=this._getColWidths();
var dY=this._getColumnFlexOffsets(dF);
var dJ=[];
var ec=this.__jy;
var dH=this.__jx;
var eb;

for(var ed=0;ed<=ec;ed++){eb=dY[ed]?dY[ed].offset:0;
dJ[ed]=ea[ed].width+eb;
}var dR=this._getRowHeights();
var dT=this._getRowFlexOffsets(dG);
var ej=[];

for(var dP=0;dP<=dH;dP++){eb=dT[dP]?dT[dP].offset:0;
ej[dP]=dR[dP].height+eb;
}var ek=0;

for(var ed=0;ed<=ec;ed++){var top=0;

for(var dP=0;dP<=dH;dP++){var dW=this.__ju[dP][ed];
if(!dW){top+=ej[dP]+dO;
continue;
}var dK=dW.getLayoutProperties();
if(dK.row!==dP||dK.column!==ed){top+=ej[dP]+dO;
continue;
}var ei=dI*(dK.colSpan-1);

for(var i=0;i<dK.colSpan;i++){ei+=dJ[ed+i];
}var dX=dO*(dK.rowSpan-1);

for(var i=0;i<dK.rowSpan;i++){dX+=ej[dP+i];
}var dL=dW.getSizeHint();
var eg=dW.getMarginTop();
var dV=dW.getMarginLeft();
var dS=dW.getMarginBottom();
var dN=dW.getMarginRight();
var dQ=Math.max(dL.minWidth,Math.min(ei-dV-dN,dL.maxWidth));
var eh=Math.max(dL.minHeight,Math.min(dX-eg-dS,dL.maxHeight));
var ee=this.getCellAlign(dP,ed);
var ef=ek+dU.computeHorizontalAlignOffset(ee.hAlign,dQ,ei,dV,dN);
var dM=top+dU.computeVerticalAlignOffset(ee.vAlign,eh,dX,eg,dS);
dW.renderLayout(ef,dM,dQ,eh);
top+=ej[dP]+dO;
}ek+=dJ[ed]+dI;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__jA=null;
this.__jz=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jB();
}var ep=this._getColWidths();
var er=0,es=0;

for(var i=0,l=ep.length;i<l;i++){var et=ep[i];

if(this.getColumnFlex(i)>0){er+=et.minWidth;
}else{er+=et.width;
}es+=et.width;
}var eu=this._getRowHeights();
var en=0,eq=0;

for(var i=0,l=eu.length;i<l;i++){var ev=eu[i];

if(this.getRowFlex(i)>0){en+=ev.minHeight;
}else{en+=ev.height;
}eq+=ev.height;
}var em=this.getSpacingX()*(ep.length-1);
var el=this.getSpacingY()*(eu.length-1);
var eo={minWidth:er+em,width:es+em,minHeight:en+el,height:eq+el};
return eo;
}},destruct:function(){this.__ju=this.__js=this.__jt=this.__jv=this.__jw=this.__jA=this.__jz=null;
}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="color",j="qx.dynlocale",i="Boolean",h="qx.debug",g="enabled",f="changeLocale",d="_applyTextAlign",c="qx.ui.core.Widget",b="nowrap",a="changeStatus",F="changeTextAlign",E="_applyWrap",D="changeValue",C="qx.ui.basic.Label",B="whiteSpace",A="css.textoverflow",z="html.xul",y="_applyValue",x="center",w="_applyBuddy",r="String",s="textAlign",p="right",q="justify",n="changeRich",o="normal",l="_applyRich",m="click",t="label",u="left",v="A";
qx.Class.define(C,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(G){qx.ui.core.Widget.call(this);

if(G!=null){this.setValue(G);
}
if(qx.core.Environment.get(j)){qx.locale.Manager.getInstance().addListener(f,this._onChangeLocale,this);
}},properties:{rich:{check:i,init:false,event:n,apply:l},wrap:{check:i,init:true,apply:E},value:{check:r,apply:y,event:D,nullable:true},buddy:{check:c,apply:w,nullable:true,init:null,dereference:true},textAlign:{check:[u,x,p,q],nullable:true,themeable:true,apply:d,event:F},appearance:{refine:true,init:t},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__gs:null,__li:null,__lj:null,__lk:null,__gt:null,_getContentHint:function(){if(this.__li){this.__ll=this.__lm();
delete this.__li;
}return {width:this.__ll.width,height:this.__ll.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(H){if(!qx.core.Environment.get(A)&&qx.core.Environment.get(z)){if(H&&!this.isRich()){if(qx.core.Environment.get(h)){this.warn("Only rich labels are selectable in browsers with Gecko engine!");
}return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,H);
},_getContentHeightForWidth:function(I){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__lm(I).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(J,K){this.getContentElement().setStyle(s,J);
},_applyTextColor:function(L,M){if(L){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(L));
}else{this.getContentElement().removeStyle(k);
}},__ll:{width:0,height:0},_applyFont:function(N,O){if(O&&this.__gs&&this.__gt){this.__gs.removeListenerById(this.__gt);
this.__gt=null;
}var P;

if(N){this.__gs=qx.theme.manager.Font.getInstance().resolve(N);

if(this.__gs instanceof qx.bom.webfonts.WebFont){this.__gt=this.__gs.addListener(a,this._onWebFontStatusChange,this);
}P=this.__gs.getStyles();
}else{this.__gs=null;
P=qx.bom.Font.getDefaultStyles();
}if(this.getTextColor()!=null){delete P[k];
}this.getContentElement().setStyles(P);
this.__li=true;
qx.ui.core.queue.Layout.add(this);
},__lm:function(Q){var U=qx.bom.Label;
var S=this.getFont();
var R=S?this.__gs.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||v;
var T=this.getRich();
return T?U.getHtmlSize(content,R,Q):U.getTextSize(content,R);
},_applyBuddy:function(V,W){if(W!=null){W.removeBinding(this.__lj);
this.__lj=null;
this.removeListenerById(this.__lk);
this.__lk=null;
}
if(V!=null){this.__lj=V.bind(g,this,g);
this.__lk=this.addListener(m,function(){if(V.isFocusable()){V.focus.apply(V);
}},this);
}},_applyRich:function(X){this.getContentElement().setRich(X);
this.__li=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(Y,ba){if(Y&&!this.isRich()){if(qx.core.Environment.get(h)){this.warn("Only rich labels support wrap.");
}}
if(this.isRich()){var bb=Y?o:b;
this.getContentElement().setStyle(B,bb);
}},_onChangeLocale:qx.core.Environment.select(j,{"true":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"false":null}),_onWebFontStatusChange:function(bc){if(bc.getData().valid===true){this.__li=true;
qx.ui.core.queue.Layout.add(this);
}},_applyValue:function(bd,be){this.getContentElement().setValue(bd);
this.__li=true;
qx.ui.core.queue.Layout.add(this);
}},destruct:function(){if(qx.core.Environment.get(j)){qx.locale.Manager.getInstance().removeListener(f,this._onChangeLocale,this);
}if(this.__lj!=null){var bf=this.getBuddy();

if(bf!=null&&!bf.isDisposed()){bf.removeBinding(this.__lj);
}}
if(this.__gs&&this.__gt){this.__gs.removeListenerById(this.__gt);
}this.__gs=this.__lj=null;
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
(function(){var g="mousedown",f="qx.debug",d="__nA",c="blur",b="qx.ui.popup.Manager",a="singleton";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nA=[];
qx.event.Registration.addListener(document.documentElement,g,this.__nC,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__nA:null,add:function(h){if(qx.core.Environment.get(f)){if(!(h instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+h);
}}this.__nA.push(h);
this.__nB();
},remove:function(j){if(qx.core.Environment.get(f)){if(!(j instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+j);
}}
if(this.__nA){qx.lang.Array.remove(this.__nA,j);
this.__nB();
}},hideAll:function(){var k;
var m=this.__nA;

if(m){for(var i=0,l=m.length;i<l;i++){var k=m[i];
k.getAutoHide()&&k.exclude();
}}},__nB:function(){var n=1e7;

for(var i=0;i<this.__nA.length;i++){this.__nA[i].setZIndex(n++);
}},__nC:function(e){var p=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var q=this.__nA;

for(var i=0;i<q.length;i++){var o=q[i];

if(!o.getAutoHide()||p==o||qx.ui.core.Widget.contains(o,p)){continue;
}o.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__nC,this,true);
this._disposeArray(d);
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
(function(){var d="' is not supported by the Grow layout!",c="qx.ui.layout.Grow",b="qx.debug",a="The property '";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Environment.select(b,{"true":function(e,name,f){this.assert(false,a+name+d);
},"false":null}),renderLayout:function(g,h){var n=this._getLayoutChildren();
var m,o,k,j;
for(var i=0,l=n.length;i<l;i++){m=n[i];
o=m.getSizeHint();
k=g;

if(k<o.minWidth){k=o.minWidth;
}else if(k>o.maxWidth){k=o.maxWidth;
}j=h;

if(j<o.minHeight){j=o.minHeight;
}else if(j>o.maxHeight){j=o.maxHeight;
}m.renderLayout(0,0,k,j);
}},_computeSizeHint:function(){var v=this._getLayoutChildren();
var t,x;
var w=0,u=0;
var s=0,q=0;
var p=Infinity,r=Infinity;
for(var i=0,l=v.length;i<l;i++){t=v[i];
x=t.getSizeHint();
w=Math.max(w,x.width);
u=Math.max(u,x.height);
s=Math.max(s,x.minWidth);
q=Math.max(q,x.minHeight);
p=Math.min(p,x.maxWidth);
r=Math.min(r,x.maxHeight);
}return {width:w,height:u,minWidth:s,minHeight:q,maxWidth:p,maxHeight:r};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",z="changeIcon",y="qx.ui.basic.Atom",x="changeLabel",w="Integer",v="_applyIconPosition",u="qx.debug",t="bottom-left",s="top-left",r="top",q="right",o="_applyRich",p="_applyIcon",m="_applyShow",n="_applyLabel",k="_applyGap",l="atom";
qx.Class.define(y,{extend:qx.ui.core.Widget,construct:function(A,B){if(qx.core.Environment.get(u)){this.assertArgumentsCount(arguments,0,2);
}qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(A!=null){this.setLabel(A);
}
if(B!=null){this.setIcon(B);
}},properties:{appearance:{refine:true,init:l},label:{apply:n,nullable:true,check:f,event:x},rich:{check:h,init:false,apply:o},icon:{check:f,apply:p,nullable:true,themeable:true,event:z},gap:{check:w,nullable:false,event:d,apply:k,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:m,event:c},iconPosition:{init:e,check:[r,q,b,e,s,t],themeable:true,apply:v},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(C,D){var E;

switch(C){case j:E=new qx.ui.basic.Label(this.getLabel());
E.setAnonymous(true);
E.setRich(this.getRich());
this._add(E);

if(this.getLabel()==null||this.getShow()===i){E.exclude();
}break;
case i:E=new qx.ui.basic.Image(this.getIcon());
E.setAnonymous(true);
this._addAt(E,0);

if(this.getIcon()==null||this.getShow()===j){E.exclude();
}break;
}return E||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,C);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(F,G){var H=this.getChildControl(j,true);

if(H){H.setValue(F);
}this._handleLabel();
},_applyRich:function(I,J){var K=this.getChildControl(j,true);

if(K){K.setRich(I);
}},_applyIcon:function(L,M){var N=this.getChildControl(i,true);

if(N){N.setSource(L);
}this._handleIcon();
},_applyGap:function(O,P){this._getLayout().setGap(O);
},_applyShow:function(Q,R){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(S,T){this._getLayout().setIconPosition(S);
},_applyCenter:function(U,V){this._getLayout().setCenter(U);
},_applySelectable:function(W,X){qx.ui.core.Widget.prototype._applySelectable.call(this,W,X);
var Y=this.getChildControl(j,true);

if(Y){this.getChildControl(j).setSelectable(W);
}}}});
})();
(function(){var p="bottom",o="top",n="_applyLayoutChange",m="top-left",l="bottom-left",k="left",j="right",h="middle",g="' is not supported by the Atom layout!",f="qx.debug",c="center",e="qx.ui.layout.Atom",d="Integer",b="The property '",a="Boolean";
qx.Class.define(e,{extend:qx.ui.layout.Abstract,properties:{gap:{check:d,init:4,apply:n},iconPosition:{check:[k,o,j,p,m,l],init:k,apply:n},center:{check:a,init:false,apply:n}},members:{verifyLayoutProperty:qx.core.Environment.select(f,{"true":function(q,name,r){this.assert(false,b+name+g);
},"false":null}),renderLayout:function(s,t){var C=qx.ui.layout.Util;
var v=this.getIconPosition();
var y=this._getLayoutChildren();
var length=y.length;
var N,top,M,w;
var H,B;
var F=this.getGap();
var K=this.getCenter();
if(v===p||v===j){var D=length-1;
var z=-1;
var x=-1;
}else{var D=0;
var z=length;
var x=1;
}if(v==o||v==p){if(K){var G=0;

for(var i=D;i!=z;i+=x){w=y[i].getSizeHint().height;

if(w>0){G+=w;

if(i!=D){G+=F;
}}}top=Math.round((t-G)/2);
}else{top=0;
}
for(var i=D;i!=z;i+=x){H=y[i];
B=H.getSizeHint();
M=Math.min(B.maxWidth,Math.max(s,B.minWidth));
w=B.height;
N=C.computeHorizontalAlignOffset(c,M,s);
H.renderLayout(N,top,M,w);
if(w>0){top+=w+F;
}}}else{var A=s;
var u=null;
var J=0;

for(var i=D;i!=z;i+=x){H=y[i];
M=H.getSizeHint().width;

if(M>0){if(!u&&H instanceof qx.ui.basic.Label){u=H;
}else{A-=M;
}J++;
}}
if(J>1){var I=(J-1)*F;
A-=I;
}
if(u){var B=u.getSizeHint();
var E=Math.max(B.minWidth,Math.min(A,B.maxWidth));
A-=E;
}
if(K&&A>0){N=Math.round(A/2);
}else{N=0;
}
for(var i=D;i!=z;i+=x){H=y[i];
B=H.getSizeHint();
w=Math.min(B.maxHeight,Math.max(t,B.minHeight));

if(H===u){M=E;
}else{M=B.width;
}var L=h;

if(v==m){L=o;
}else if(v==l){L=p;
}top=C.computeVerticalAlignOffset(L,B.height,t);
H.renderLayout(N,top,M,w);
if(M>0){N+=M+F;
}}}},_computeSizeHint:function(){var Y=this._getLayoutChildren();
var length=Y.length;
var Q,W;
if(length===1){var Q=Y[0].getSizeHint();
W={width:Q.width,height:Q.height,minWidth:Q.minWidth,minHeight:Q.minHeight};
}else{var U=0,V=0;
var R=0,T=0;
var S=this.getIconPosition();
var X=this.getGap();

if(S===o||S===p){var O=0;

for(var i=0;i<length;i++){Q=Y[i].getSizeHint();
V=Math.max(V,Q.width);
U=Math.max(U,Q.minWidth);
if(Q.height>0){T+=Q.height;
R+=Q.minHeight;
O++;
}}
if(O>1){var P=(O-1)*X;
T+=P;
R+=P;
}}else{var O=0;

for(var i=0;i<length;i++){Q=Y[i].getSizeHint();
T=Math.max(T,Q.height);
R=Math.max(R,Q.minHeight);
if(Q.width>0){V+=Q.width;
U+=Q.minWidth;
O++;
}}
if(O>1){var P=(O-1)*X;
V+=P;
U+=P;
}}W={minWidth:U,width:V,minHeight:R,height:T};
}return W;
}}});
})();
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f="content",e='</div>',d="nowrap",c="default",b="}",a="width:",I=".qooxdoo-table-cell-right { text-align:right } ",H="css.boxsizing",G="css.boxmodel",F="0px 6px",E='<div class="',D="0px",C="height:",B="1px solid ",A=".qooxdoo-table-cell-bold { font-weight:bold } ",z="String",q="} ",r='>',o='" ',p="ellipsis",m="content-box",n='left:',k="qx.ui.table.cellrenderer.Abstract",l='" style="',s="abstract",t="none",v="hidden",u="table-column-line",x='px;',w=".qooxdoo-table-cell-italic { font-style:italic} ",y="absolute";
qx.Class.define(k,{type:s,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var J=qx.ui.table.cellrenderer.Abstract;

if(!J.__zQ){var L=qx.theme.manager.Color.getInstance();
J.__zQ=this.self(arguments);
var K=h+qx.bom.element.Style.compile({position:y,top:D,overflow:v,whiteSpace:d,borderRight:B+L.resolve(u),padding:F,cursor:c,textOverflow:p,userSelect:t})+q+I+w+A;

if(qx.core.Environment.get(H)){K+=h+qx.bom.element.BoxSizing.compile(m)+b;
}J.__zQ.stylesheet=qx.bom.Stylesheet.createElement(K);
}},properties:{defaultCellStyle:{init:null,check:z,nullable:true}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(M){return g;
},_getCellStyle:function(N){return N.style||j;
},_getCellAttributes:function(O){return j;
},_getContentHtml:function(P){return P.value||j;
},_getCellSizeStyle:function(Q,R,S,T){var U=j;

if(qx.core.Environment.get(G)==f){Q-=S;
R-=T;
}U+=a+Math.max(Q,0)+i;
U+=C+Math.max(R,0)+i;
return U;
},createDataCellHtml:function(V,W){W.push(E,this._getCellClass(V),l,n,V.styleLeft,x,this._getCellSizeStyle(V.styleWidth,V.styleHeight,this._insetX,this._insetY),this._getCellStyle(V),o,this._getCellAttributes(V),r+this._getContentHtml(V),e);
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4,_numberFormat:null},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(i){if(this.getUseAutoAlign()){if(typeof i.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}return 0;
},_getCellClass:function(j){var k=qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this,j);

if(!k){return h;
}var l=this._getStyleFlags(j);

if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){k+=c;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){k+=d;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){k+=b;
}return k;
},_getContentHtml:function(m){return qx.bom.String.escape(this._formatValue(m));
},_formatValue:function(n){var p=n.value;
var o;

if(p==null){return h;
}
if(typeof p==a){return p;
}else if(typeof p==g){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}o=qx.ui.table.cellrenderer.Default._numberFormat.format(p);
}else if(p instanceof Date){o=qx.util.format.DateFormat.getDateInstance().format(p);
}else{o=p;
}return o;
}}});
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
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(b){},parse:function(c){}}});
})();
(function(){var t="",s="Number",r="-",q="0",p="String",o="changeNumberFormat",n='(',m="g",l="Boolean",k="$",d="NaN",j='([0-9]{1,3}(?:',g='{0,1}[0-9]{3}){0,})',c='\\d+){0,1}',b="qx.util.format.NumberFormat",f="Infinity",e="^",h=".",a="-Infinity",i='([-+]){0,1}';
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(u){qx.core.Object.call(this);
this.__jH=u;
},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__jH:null,format:function(v){switch(v){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var z=(v<0);

if(z){v=-v;
}
if(this.getMaximumFractionDigits()!=null){var G=Math.pow(10,this.getMaximumFractionDigits());
v=Math.round(v*G)/G;
}var F=String(Math.floor(v)).length;
var w=t+v;
var C=w.substring(0,F);

while(C.length<this.getMinimumIntegerDigits()){C=q+C;
}
if(this.getMaximumIntegerDigits()!=null&&C.length>this.getMaximumIntegerDigits()){C=C.substring(C.length-this.getMaximumIntegerDigits());
}var B=w.substring(F+1);

while(B.length<this.getMinimumFractionDigits()){B+=q;
}
if(this.getMaximumFractionDigits()!=null&&B.length>this.getMaximumFractionDigits()){B=B.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var y=C;
C=t;
var E;

for(E=y.length;E>3;E-=3){C=t+qx.locale.Number.getGroupSeparator(this.__jH)+y.substring(E-3,E)+C;
}C=y.substring(0,E)+C;
}var A=this.getPrefix()?this.getPrefix():t;
var x=this.getPostfix()?this.getPostfix():t;
var D=A+(z?r:t)+C;

if(B.length>0){D+=t+qx.locale.Number.getDecimalSeparator(this.__jH)+B;
}D+=x;
return D;
},parse:function(H){var M=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__jH)+t);
var K=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__jH)+t);
var I=new RegExp(e+qx.lang.String.escapeRegexpChars(this.getPrefix())+i+j+M+g+n+K+c+qx.lang.String.escapeRegexpChars(this.getPostfix())+k);
var L=I.exec(H);

if(L==null){throw new Error("Number string '"+H+"' does not match the number format");
}var N=(L[1]==r);
var P=L[2];
var O=L[3];
P=P.replace(new RegExp(M,m),t);
var J=(N?r:t)+P;

if(O!=null&&O.length!=0){O=O.replace(new RegExp(K),t);
J+=h+O;
}return parseFloat(J);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var cM=")",cL="(",cK="|",cJ="(\\d\\d?)",cI="format",cH="",cG="-",cF="stand-alone",cE="abbreviated",cD="wide",bN="(\\d\\d*?)",bM="narrow",bL="quarter",bK='A',bJ="default",bI="0",bH="literal",bG="wildcard",bF="'",bE="(\\d?)",cT="hour",cU="eeeee",cR="EEEE",cS='Anno Domini',cP="+",cQ="eee",cN="ccc",cO="EEEEE",cV="EE",cW="MMMM",cm='Q',cl="eeee",co="LLLLL",cn="LLLL",cq="ms",cp="(\\d\\d?\\d?)",cs="cccc",cr="dayOfYear",ck='AD',cj="ccccc",o="E",p="MMM",q="EEE",r="MMMMM",s="LLL",t='L',u='abbreviated',v="Y+",w=":",x='y',dl="quoted_literal",dk="weekOfYear",dj='a',di="day",dq="(-*",dp="locale",dn="GMT",dm="HH:mm:ss",ds='y+',dr="HHmmss",be="long",bf='Y',bc='z',bd='BC',bi='c',bj="d",bg="D",bh='e',ba='B',bb='',M='Before Christ',L='Z',O=" ",N="min",I='M',H="sec",K="\\d",J="+?",G='E',F='W',bo="qqqq",bp="h",bq="KK",br="Z",bk="GGGGG",bl="LL",bm="^",bn='4th quarter',bs="SSS",bt="qqq",W="K",V='q',U='G',T="a",S='2nd quarter',R="dd",Q="qx.util.format.DateFormat",P='weekDay',Y="ee",X="q",bu="QQQQ",bv="ww",bw="H",bx='Y+',by='wide',bz="(\\d\\d\\d?)",bA="(GMT[\\+\\-]\\d\\d:\\d\\d)",bB="_applyLocale",bC="Q",bD="c",bR="weekOfMonth",bQ="GGG",bP='-',bO="w",bV="mm",bU='h',bT="S",bS='s',bX="QQQ",bW="G",cf="GG",cg="kk",cd="ss",ce="([\\+\\-]\\d\\d\\d\\d)",cb='H',cc='S',bY='1st quarter',ca='Q1',ch='3rd quarter',ci="QQ",cw="HH",cv='k',cy="m",cx="DDD",cA='D',cz='K',cC="L",cB="hh",cu="e",ct="W",de="GGGG",df='Q2',dg="MM",dh="y+",da='narrow',db="yyyy-MM-dd HH:mm:ss",dc="short",dd='d',cX="unkown",cY="\\d?",n="k",m="qx.debug",h='m',g="String",f='Q3',e="z",d="DD",c='isoUtcDateTime',b="SS",a="s",A="M",B='w',y="$",z="?",D='Q4',E='month',C="qq";
qx.Class.define(Q,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(dt,du){qx.core.Object.call(this);

if(!du){this.__jH=qx.locale.Manager.getInstance().getLocale();
this.__yP=qx.locale.Manager.getInstance().bind(dp,this,dp);
}else{this.__jH=du;
this.setLocale(du);
}this.__yQ=this.__jH;

if(dt!=null){this.__yR=dt.toString();

if(this.__yR in qx.util.format.DateFormat.ISO_MASKS){if(this.__yR===c){this.__yS=true;
}this.__yR=qx.util.format.DateFormat.ISO_MASKS[this.__yR];
}}else{this.__yR=qx.locale.Date.getDateFormat(be,this.__jH)+O+qx.locale.Date.getDateTimeFormat(dr,dm,this.__jH);
}},properties:{locale:{apply:bB,nullable:true,check:g}},statics:{getDateTimeInstance:function(){var dw=qx.util.format.DateFormat;
var dv=qx.locale.Date.getDateFormat(be)+O+qx.locale.Date.getDateTimeFormat(dr,dm);

if(dw._dateInstance==null||dw._dateInstance.__yR!=dv){dw._dateTimeInstance=new dw();
}return dw._dateTimeInstance;
},getDateInstance:function(){var dy=qx.util.format.DateFormat;
var dx=qx.locale.Date.getDateFormat(dc)+cH;

if(dy._dateInstance==null||dy._dateInstance.__yR!=dx){dy._dateInstance=new dy(dx);
}return dy._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:db,ISO_MASKS:{isoDate:"yyyy-MM-dd",isoTime:"HH:mm:ss",isoDateTime:"yyyy-MM-dd'T'HH:mm:ss",isoUtcDateTime:"yyyy-MM-dd'T'HH:mm:ss'Z'"},AM_MARKER:"am",PM_MARKER:"pm"},members:{__yP:null,__jH:null,__yQ:null,__yR:null,__yT:null,__yU:null,__yV:null,__yS:null,__yW:function(dz,dA){var dB=cH+(dz<0?((-1)*dz):dz);

while(dB.length<dA){dB=bI+dB;
}return dz<0?cG+dB:dB;
},__yX:function(dC){var dD=new Date(dC.getTime());
var dE=dD.getDate();

while(dD.getMonth()!=0){dD.setDate(-1);
dE+=dD.getDate()+1;
}return dE;
},__yY:function(dF){return new Date(dF.getTime()+(3-((dF.getDay()+6)%7))*86400000);
},__za:function(dG){var dI=this.__yY(dG);
var dJ=dI.getFullYear();
var dH=this.__yY(new Date(dJ,0,4));
return Math.floor(1.5+(dI.getTime()-dH.getTime())/86400000/7);
},__zb:function(dK){var dM=this.__yY(dK);
var dL=this.__yY(new Date(dK.getFullYear(),dK.getMonth(),4));
return Math.floor(1.5+(dM.getTime()-dL.getTime())/86400000/7);
},__zc:function(dN){var dO=this.__yY(dN);
return dO.getFullYear();
},__zd:function(dP){var dQ=new Date(dP,2,1);
dQ.setDate(-1);
return dQ.getDate()+1===29;
},__ze:function(dR,dS){var dW=0;
var dX=0;
if(!dS){dS=1971;
}var dT=0;

for(var i=1;i<=12;i++){var dV=new Date(dS,i,1);
dV.setDate(-1);
var dU=dV.getDate()+1;
dT+=dU;

if(dT<dR){dW++;
dX+=dU;
}else{dX=dR-(dT-dU);
break;
}}return {month:dW,day:dX};
},__zf:function(dY,ea,eb){var ec;

switch(ea){case 11:ec=dY-1;

if(dY!=this.__zc(new Date(ec,ea,eb))){ec=dY;
}break;
case 0:ec=dY+1;

if(dY!=this.__zc(new Date(ec,ea,eb))){ec=dY;
}break;
default:ec=dY;
}return ec;
},_applyLocale:function(ed,ee){this.__jH=ed===null?this.setLocale(this.__yQ):ed;
},format:function(ef){if(ef==null){return null;
}
if(isNaN(ef.getTime())){if(qx.core.Environment.get(m)){qx.log.Logger.error("Provided date is invalid");
}return null;
}
if(this.__yS){ef=new Date(ef.getUTCFullYear(),ef.getUTCMonth(),ef.getUTCDate(),ef.getUTCHours(),ef.getUTCMinutes(),ef.getUTCSeconds(),ef.getUTCMilliseconds());
}var ei=this.__jH;
var en=ef.getFullYear();
var ej=ef.getMonth();
var em=ef.getDate();
var eq=ef.getDay();
var et=ef.getHours();
var ez=ef.getMinutes();
var er=ef.getSeconds();
var ex=ef.getMilliseconds();
var ep=ef.getTimezoneOffset();
var eu=ep>0?1:-1;
var eg=Math.floor(Math.abs(ep)/60);
var ew=Math.abs(ep)%60;
this.__zg();
var ey=cH;

for(var i=0;i<this.__yV.length;i++){var eo=this.__yV[i];

if(eo.type==bH){ey+=eo.text;
}else{var eh=eo.character;
var es=eo.size;
var eA=z;

switch(eh){case x:if(es==2){eA=this.__yW(en%100,2);
}else{var ek=Math.abs(en);
eA=ek+cH;

if(es>eA.length){for(var j=eA.length;j<es;j++){eA=bI+eA;
}}
if(en<0){eA=cG+eA;
}}break;
case bf:eA=this.__zc(ef)+cH;
var ek=eA.replace(bP,bb);

if(es>eA.length){for(var j=ek.length;j<es;j++){ek=bI+ek;
}}eA=eA.indexOf(cG)!=-1?cG+ek:ek;
break;
case U:if(es>=1&&es<=3){eA=en>0?ck:bd;
}else if(es==4){eA=en>0?cS:M;
}else if(es==5){eA=en>0?bK:ba;
}break;
case cm:if(es==1||es==2){eA=this.__yW(parseInt(ej/4)+1,es);
}
if(es==3){eA=cm+(parseInt(ej/4)+1);
}break;
case V:if(es==1||es==2){eA=this.__yW(parseInt(ej/4)+1,es);
}
if(es==3){eA=cm+(parseInt(ej/4)+1);
}break;
case cA:eA=this.__yW(this.__yX(ef),es);
break;
case dd:eA=this.__yW(em,es);
break;
case B:eA=this.__yW(this.__za(ef),es);
break;
case F:eA=this.__zb(ef);
break;
case G:if(es>=1&&es<=3){eA=qx.locale.Date.getDayName(cE,eq,ei,cI,true);
}else if(es==4){eA=qx.locale.Date.getDayName(cD,eq,ei,cI,true);
}else if(es==5){eA=qx.locale.Date.getDayName(bM,eq,ei,cI,true);
}break;
case bh:var el=qx.locale.Date.getWeekStart(ei);
var ev=1+((eq-el>=0)?(eq-el):7+(eq-el));

if(es>=1&&es<=2){eA=this.__yW(ev,es);
}else if(es==3){eA=qx.locale.Date.getDayName(cE,eq,ei,cI,true);
}else if(es==4){eA=qx.locale.Date.getDayName(cD,eq,ei,cI,true);
}else if(es==5){eA=qx.locale.Date.getDayName(bM,eq,ei,cI,true);
}break;
case bi:var el=qx.locale.Date.getWeekStart(ei);
var ev=1+((eq-el>=0)?(eq-el):7+(eq-el));

if(es==1){eA=bb+ev;
}else if(es==3){eA=qx.locale.Date.getDayName(cE,eq,ei,cF,true);
}else if(es==4){eA=qx.locale.Date.getDayName(cD,eq,ei,cF,true);
}else if(es==5){eA=qx.locale.Date.getDayName(bM,eq,ei,cF,true);
}break;
case I:if(es==1||es==2){eA=this.__yW(ej+1,es);
}else if(es==3){eA=qx.locale.Date.getMonthName(cE,ej,ei,cI,true);
}else if(es==4){eA=qx.locale.Date.getMonthName(cD,ej,ei,cI,true);
}else if(es==5){eA=qx.locale.Date.getMonthName(bM,ej,ei,cI,true);
}break;
case t:if(es==1||es==2){eA=this.__yW(ej+1,es);
}else if(es==3){eA=qx.locale.Date.getMonthName(cE,ej,ei,cF,true);
}else if(es==4){eA=qx.locale.Date.getMonthName(cD,ej,ei,cF,true);
}else if(es==5){eA=qx.locale.Date.getMonthName(bM,ej,ei,cF,true);
}break;
case dj:eA=(et<12)?qx.locale.Date.getAmMarker(ei):qx.locale.Date.getPmMarker(ei);
break;
case cb:eA=this.__yW(et,es);
break;
case cv:eA=this.__yW((et==0)?24:et,es);
break;
case cz:eA=this.__yW(et%12,es);
break;
case bU:eA=this.__yW(((et%12)==0)?12:(et%12),es);
break;
case h:eA=this.__yW(ez,es);
break;
case bS:eA=this.__yW(er,es);
break;
case cc:eA=ex+cH;

if(es<=eA.length){eA=eA.substr(0,es);
}else{for(var j=eA.length;j<es;j++){eA=eA+bI;
}}break;
case bc:if(es>=1&&es<=4){eA=dn+((eu>0)?cG:cP)+this.__yW(Math.abs(eg),2)+w+this.__yW(ew,2);
}break;
case L:if(es>=1&&es<=3){eA=((eu>0)?cG:cP)+this.__yW(Math.abs(eg),2)+this.__yW(ew,2);
}else{eA=dn+((eu>0)?cG:cP)+this.__yW(Math.abs(eg),2)+w+this.__yW(ew,2);
}break;
}ey+=eA;
}}return ey;
},parse:function(eB){this.__zh();
var eK=this.__yT.regex.exec(eB);

if(eK==null){throw new Error("Date string '"+eB+"' does not match the date format: "+this.__yR);
}var eC={era:1,year:1970,quarter:1,month:0,day:1,dayOfYear:1,hour:0,ispm:false,weekDay:4,weekYear:1970,weekOfMonth:1,weekOfYear:1,min:0,sec:0,ms:0};
var eE=1;
var eD=false;
var eF=false;

for(var i=0;i<this.__yT.usedRules.length;i++){var eG=this.__yT.usedRules[i];
var eH=eK[eE];

if(eG.field!=null){eC[eG.field]=parseInt(eH,10);
}else{eG.manipulator(eC,eH,eG.pattern);
}
if(eG.pattern==v){var eI=false;

for(var k=0;k<this.__yT.usedRules.length;k++){if(this.__yT.usedRules[k].pattern==ds){eI=true;
break;
}}
if(!eI){eD=true;
}}
if(eG.pattern.indexOf(bg)!=-1){var eM=false;

for(var k=0;k<this.__yT.usedRules.length;k++){if(this.__yT.usedRules[k].pattern.indexOf(bj)!=-1){eM=true;
break;
}}
if(!eM){eF=true;
}}eE+=(eG.groups==null)?1:eG.groups;
}
if(eD){eC.year=this.__zf(eC.weekYear,eC.month,eC.day);
}
if(eF){var eL=this.__ze(eC.dayOfYear,eC.year);
eC.month=eL.month;
eC.day=eL.day;
}
if(eC.era<0&&(eC.year*eC.era<0)){eC.year=eC.year*eC.era;
}var eJ=new Date(eC.year,eC.month,eC.day,(eC.ispm)?(eC.hour+12):eC.hour,eC.min,eC.sec,eC.ms);

if(this.__yS){eJ=new Date(eJ.getUTCFullYear(),eJ.getUTCMonth(),eJ.getUTCDate(),eJ.getUTCHours(),eJ.getUTCMinutes(),eJ.getUTCSeconds(),eJ.getUTCMilliseconds());
}
if(eC.month!=eJ.getMonth()||eC.year!=eJ.getFullYear()){throw new Error("Error parsing date '"+eB+"': the value for day or month is too large");
}return eJ;
},__zg:function(){if(this.__yV!=null){return;
}this.__yV=[];
var eR;
var eP=0;
var eT=cH;
var eN=this.__yR;
var eQ=bJ;
var i=0;

while(i<eN.length){var eS=eN.charAt(i);

switch(eQ){case dl:if(eS==bF){if(i+1>=eN.length){i++;
break;
}var eO=eN.charAt(i+1);

if(eO==bF){eT+=eS;
i++;
}else{i++;
eQ=cX;
}}else{eT+=eS;
i++;
}break;
case bG:if(eS==eR){eP++;
i++;
}else{this.__yV.push({type:bG,character:eR,size:eP});
eR=null;
eP=0;
eQ=bJ;
}break;
default:if((eS>=dj&&eS<=bc)||(eS>=bK&&eS<=L)){eR=eS;
eQ=bG;
}else if(eS==bF){if(i+1>=eN.length){eT+=eS;
i++;
break;
}var eO=eN.charAt(i+1);

if(eO==bF){eT+=eS;
i++;
}i++;
eQ=dl;
}else{eQ=bJ;
}
if(eQ!=bJ){if(eT.length>0){this.__yV.push({type:bH,text:eT});
eT=cH;
}}else{eT+=eS;
i++;
}break;
}}if(eR!=null){this.__yV.push({type:bG,character:eR,size:eP});
}else if(eT.length>0){this.__yV.push({type:bH,text:eT});
}},__zh:function(){if(this.__yT!=null){return ;
}var eX=this.__yR;
this.__zj();
this.__zg();
var fe=[];
var fa=bm;

for(var eV=0;eV<this.__yV.length;eV++){var ff=this.__yV[eV];

if(ff.type==bH){fa+=qx.lang.String.escapeRegexpChars(ff.text);
}else{var eW=ff.character;
var fb=ff.size;
var eY;

for(var fg=0;fg<this.__yU.length;fg++){var fc=this.__yU[fg];

if(this.__zi(fc,eW,fb)){eY=fc;
break;
}}if(eY==null){var fd=cH;

for(var i=0;i<fb;i++){fd+=eW;
}throw new Error("Malformed date format: "+eX+". Wildcard "+fd+" is not supported");
}else{fe.push(eY);
fa+=eY.regex;
}}}fa+=y;
var eU;

try{eU=new RegExp(fa);
}catch(fh){throw new Error("Malformed date format: "+eX);
}this.__yT={regex:eU,"usedRules":fe,pattern:fa};
},__zi:function(fi,fj,fk){if(fj===x&&fi.pattern===ds){fi.regex=fi.regexFunc(fk);
return true;
}else if(fj===bf&&fi.pattern===bx){fi.regex=fi.regexFunc(fk);
return true;
}else{return fj==fi.pattern.charAt(0)&&fk==fi.pattern.length;
}},__zj:function(){var fy=qx.util.format.DateFormat;
var fA=qx.lang.String;

if(this.__yU!=null){return ;
}var fz=this.__yU=[];
var fu=qx.locale.Date.getAmMarker(this.__jH).toString()||fy.AM_MARKER;
var fH=qx.locale.Date.getPmMarker(this.__jH).toString()||fy.PM_MARKER;
var fm=this.__jH;
var fr=function(fL,fM){fM=parseInt(fM,10);

if(fM>0){if(fM<fy.ASSUME_YEAR_2000_THRESHOLD){fM+=2000;
}else if(fM<100){fM+=1900;
}}fL.year=fM;
};
var fJ=function(fN,fO){fO=parseInt(fO,10);

if(fO>0){if(fO<fy.ASSUME_YEAR_2000_THRESHOLD){fO+=2000;
}else if(fO<100){fO+=1900;
}}fN.weekYear=fO;
};
var fK=function(fP,fQ){fP.month=parseInt(fQ,10)-1;
};
var fp=function(fR,fS){var fU=qx.locale.Date.getWeekStart(fm);
var fT=(parseInt(fS,10)-1+fU)<=6?parseInt(fS,10)-1+fU:(parseInt(fS,10)-1+fU)-7;
fR.weekDay=fT;
};
var fo=function(fV,fW){var fX=qx.locale.Date.getPmMarker(fm).toString()||fy.PM_MARKER;
fV.ispm=(fW==fX);
};
var ft=function(fY,ga){fY.hour=parseInt(ga,10)%24;
};
var fn=function(gb,gc){gb.hour=parseInt(gc,10)%12;
};
var fC=function(gd,ge){return;
};
var fD=[bK,ba];
var fE=function(gf,gg){gf.era=gg==bK?1:-1;
};
var fx=[ck,bd];
var fw=function(gh,gi){gh.era=gi==ck?1:-1;
};
var fG=[cS,M];
var fv=function(gj,gk){gj.era=gk==cS?1:-1;
};
var fI=[ca,df,f,D];
var fl=function(gl,gm){gl.quarter=fI.indexOf(gm);
};
var fF=[bY,S,ch,bn];
var fB=function(gn,go){gn.quarter=fF.indexOf(go);
};
var fs={};
var fq=function(gp){var gu=[t,I];
var gq=[bi,bh,G];
var gx=gp.charAt(0);
var gs=gu.indexOf(gx)>=0;
var gt=function(){var gz=gs?gu:gq;
var gA=gx===gz[0]?cF:cI;
var gB=gp.length;
var gy=u;

switch(gB){case 4:gy=by;
break;
case 5:gy=da;
break;
default:gy=u;
}return [gA,gy];
};

if(!fs[gp]){fs[gp]={};
var gw=gt();
var gr=gs?qx.locale.Date.getMonthNames:qx.locale.Date.getDayNames;
var gv=gr.call(qx.locale.Date,gw[1],fm,gw[0],true);

for(var i=0,l=gv.length;i<l;i++){gv[i]=fA.escapeRegexpChars(gv[i].toString());
}fs[gp].data=gv;
fs[gp].func=function(gC,gD){gD=fA.escapeRegexpChars(gD);
gC[gs?E:P]=gv.indexOf(gD);
};
}return fs[gp];
};
fz.push({pattern:dh,regexFunc:function(gE){var gF=dq;

for(var i=0;i<gE;i++){gF+=K;

if(i===gE-1&&i!==1){gF+=J;
}}gF+=cM;
return gF;
},manipulator:fr});
fz.push({pattern:v,regexFunc:function(gG){var gH=dq;

for(var i=0;i<gG;i++){gH+=K;

if(i===gG-1){gH+=J;
}}gH+=cM;
return gH;
},manipulator:fJ});
fz.push({pattern:bW,regex:cL+fx.join(cK)+cM,manipulator:fw});
fz.push({pattern:cf,regex:cL+fx.join(cK)+cM,manipulator:fw});
fz.push({pattern:bQ,regex:cL+fx.join(cK)+cM,manipulator:fw});
fz.push({pattern:de,regex:cL+fG.join(cK)+cM,manipulator:fv});
fz.push({pattern:bk,regex:cL+fD.join(cK)+cM,manipulator:fE});
fz.push({pattern:bC,regex:bN,field:bL});
fz.push({pattern:ci,regex:cJ,field:bL});
fz.push({pattern:bX,regex:cL+fI.join(cK)+cM,manipulator:fl});
fz.push({pattern:bu,regex:cL+fF.join(cK)+cM,manipulator:fB});
fz.push({pattern:X,regex:bN,field:bL});
fz.push({pattern:C,regex:cJ,field:bL});
fz.push({pattern:bt,regex:cL+fI.join(cK)+cM,manipulator:fl});
fz.push({pattern:bo,regex:cL+fF.join(cK)+cM,manipulator:fB});
fz.push({pattern:A,regex:bN,manipulator:fK});
fz.push({pattern:dg,regex:cJ,manipulator:fK});
fz.push({pattern:p,regex:cL+fq(p).data.join(cK)+cM,manipulator:fq(p).func});
fz.push({pattern:cW,regex:cL+fq(cW).data.join(cK)+cM,manipulator:fq(cW).func});
fz.push({pattern:r,regex:cL+fq(r).data.join(cK)+cM,manipulator:fq(r).func});
fz.push({pattern:cC,regex:bN,manipulator:fK});
fz.push({pattern:bl,regex:cJ,manipulator:fK});
fz.push({pattern:s,regex:cL+fq(s).data.join(cK)+cM,manipulator:fq(s).func});
fz.push({pattern:cn,regex:cL+fq(cn).data.join(cK)+cM,manipulator:fq(cn).func});
fz.push({pattern:co,regex:cL+fq(co).data.join(cK)+cM,manipulator:fq(co).func});
fz.push({pattern:R,regex:cJ,field:di});
fz.push({pattern:bj,regex:bN,field:di});
fz.push({pattern:bg,regex:bE,field:cr});
fz.push({pattern:d,regex:cJ,field:cr});
fz.push({pattern:cx,regex:bz,field:cr});
fz.push({pattern:o,regex:cL+fq(o).data.join(cK)+cM,manipulator:fq(o).func});
fz.push({pattern:cV,regex:cL+fq(cV).data.join(cK)+cM,manipulator:fq(cV).func});
fz.push({pattern:q,regex:cL+fq(q).data.join(cK)+cM,manipulator:fq(q).func});
fz.push({pattern:cR,regex:cL+fq(cR).data.join(cK)+cM,manipulator:fq(cR).func});
fz.push({pattern:cO,regex:cL+fq(cO).data.join(cK)+cM,manipulator:fq(cO).func});
fz.push({pattern:cu,regex:bE,manipulator:fp});
fz.push({pattern:Y,regex:cJ,manipulator:fp});
fz.push({pattern:cQ,regex:cL+fq(cQ).data.join(cK)+cM,manipulator:fq(cQ).func});
fz.push({pattern:cl,regex:cL+fq(cl).data.join(cK)+cM,manipulator:fq(cl).func});
fz.push({pattern:cU,regex:cL+fq(cU).data.join(cK)+cM,manipulator:fq(cU).func});
fz.push({pattern:bD,regex:cY,manipulator:fp});
fz.push({pattern:cN,regex:cL+fq(cN).data.join(cK)+cM,manipulator:fq(cN).func});
fz.push({pattern:cs,regex:cL+fq(cs).data.join(cK)+cM,manipulator:fq(cs).func});
fz.push({pattern:cj,regex:cL+fq(cj).data.join(cK)+cM,manipulator:fq(cj).func});
fz.push({pattern:T,regex:cL+fu+cK+fH+cM,manipulator:fo});
fz.push({pattern:ct,regex:bE,field:bR});
fz.push({pattern:bO,regex:bE,field:dk});
fz.push({pattern:bv,regex:cJ,field:dk});
fz.push({pattern:cw,regex:cJ,field:cT});
fz.push({pattern:bw,regex:cJ,field:cT});
fz.push({pattern:cg,regex:cJ,manipulator:ft});
fz.push({pattern:n,regex:cJ,manipulator:ft});
fz.push({pattern:bq,regex:cJ,field:cT});
fz.push({pattern:W,regex:cJ,field:cT});
fz.push({pattern:cB,regex:cJ,manipulator:fn});
fz.push({pattern:bp,regex:cJ,manipulator:fn});
fz.push({pattern:bV,regex:cJ,field:N});
fz.push({pattern:cy,regex:cJ,field:N});
fz.push({pattern:cd,regex:cJ,field:H});
fz.push({pattern:a,regex:cJ,field:H});
fz.push({pattern:bs,regex:cp,field:cq});
fz.push({pattern:b,regex:cp,field:cq});
fz.push({pattern:bT,regex:cp,field:cq});
fz.push({pattern:br,regex:ce,manipulator:fC});
fz.push({pattern:e,regex:bA,manipulator:fC});
}},destruct:function(){if(this.__yP!=null){qx.locale.Manager.getInstance().removeBinding(this.__yP);
}this.__yV=this.__yT=this.__yU=null;
}});
})();
(function(){var k="_",j='format',h="format",g="qx.debug",f='_',e="stand-alone",d="narrow",c="abbreviated",b="wide",a='stand-alone',J="short",I="full",H="long",G="medium",F="sat",E="cldr_day_",D="cldr_month_",C="wed",B="fri",A="tue",r="mon",s="sun",p="thu",q="HH:mm",n="HHmmsszz",o="cldr_date_format_",l="HHmm",m="HHmmss",t="cldr_time_format_",u="HH:mm:ss zz",w="cldr_pm",v="cldr_am",y="qx.locale.Date",x="cldr_date_time_format_",z="HH:mm:ss";
qx.Class.define(y,{statics:{__zk:qx.locale.Manager.getInstance(),getAmMarker:function(K){return this.__zk.localize(v,[],K);
},getPmMarker:function(L){return this.__zk.localize(w,[],L);
},getDayNames:function(length,M,N,O){var N=N?N:h;

if(qx.core.Environment.get(g)){qx.core.Assert.assertInArray(length,[c,d,b]);
qx.core.Assert.assertInArray(N,[h,e]);
}var Q=[s,r,A,C,p,B,F];
var R=[];

for(var i=0;i<Q.length;i++){var P=E+N+k+length+k+Q[i];
R.push(O?this.__zl(N,N===j?a:j,P,M):this.__zk.localize(P,[],M));
}return R;
},getDayName:function(length,S,T,U,V){var U=U?U:h;

if(qx.core.Environment.get(g)){qx.core.Assert.assertInArray(length,[c,d,b]);
qx.core.Assert.assertInteger(S);
qx.core.Assert.assertInRange(S,0,6);
qx.core.Assert.assertInArray(U,[h,e]);
}var X=[s,r,A,C,p,B,F];
var W=E+U+k+length+k+X[S];
return V?this.__zl(U,U===j?a:j,W,T):this.__zk.localize(W,[],T);
},getMonthNames:function(length,Y,ba,bb){var ba=ba?ba:h;

if(qx.core.Environment.get(g)){qx.core.Assert.assertInArray(length,[c,d,b]);
qx.core.Assert.assertInArray(ba,[h,e]);
}var bd=[];

for(var i=0;i<12;i++){var bc=D+ba+k+length+k+(i+1);
bd.push(bb?this.__zl(ba,ba===j?a:j,bc,Y):this.__zk.localize(bc,[],Y));
}return bd;
},getMonthName:function(length,be,bf,bg,bh){var bg=bg?bg:h;

if(qx.core.Environment.get(g)){qx.core.Assert.assertInArray(length,[c,d,b]);
qx.core.Assert.assertInArray(bg,[h,e]);
}var bi=D+bg+k+length+k+(be+1);
return bh?this.__zl(bg,bg===j?a:j,bi,bf):this.__zk.localize(bi,[],bf);
},getDateFormat:function(bj,bk){if(qx.core.Environment.get(g)){qx.core.Assert.assertInArray(bj,[J,G,H,I]);
}var bl=o+bj;
return this.__zk.localize(bl,[],bk);
},getDateTimeFormat:function(bm,bn,bo){var bq=x+bm;
var bp=this.__zk.localize(bq,[],bo);

if(bp==bq){bp=bn;
}return bp;
},getTimeFormat:function(br,bs){if(qx.core.Environment.get(g)){qx.core.Assert.assertInArray(br,[J,G,H,I]);
}var bu=t+br;
var bt=this.__zk.localize(bu,[],bs);

if(bt!=bu){return bt;
}
switch(br){case J:case G:return qx.locale.Date.getDateTimeFormat(l,q);
case H:return qx.locale.Date.getDateTimeFormat(m,z);
case I:return qx.locale.Date.getDateTimeFormat(n,u);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(bv){var bw={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var bx=qx.locale.Date._getTerritory(bv);
return bw[bx]!=null?bw[bx]:1;
},getWeekendStart:function(by){var bA={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var bz=qx.locale.Date._getTerritory(by);
return bA[bz]!=null?bA[bz]:6;
},getWeekendEnd:function(bB){var bC={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var bD=qx.locale.Date._getTerritory(bB);
return bC[bD]!=null?bC[bD]:0;
},isWeekend:function(bE,bF){var bH=qx.locale.Date.getWeekendStart(bF);
var bG=qx.locale.Date.getWeekendEnd(bF);

if(bG>bH){return ((bE>=bH)&&(bE<=bG));
}else{return ((bE>=bH)||(bE<=bG));
}},_getTerritory:function(bI){if(bI){var bJ=bI.split(k)[1]||bI;
}else{bJ=this.__zk.getTerritory()||this.__zk.getLanguage();
}return bJ.toUpperCase();
},__zl:function(bK,bL,bM,bN){var bP=this.__zk.localize(bM,[],bN);

if(bP==bM){var bO=bM.replace(f+bK+f,f+bL+f);
return this.__zk.localize(bO,[],bN);
}else{return bP;
}}}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
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
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var t="object",s="qx.debug",r="Theme",q="undefined",p="widgets",o="fonts",n="string",m="colors",k="decorations",j="meta",d="appearances",h="borders",g="icons",c="other",b="qx.Theme",f="]",e="[Theme ";
qx.Bootstrap.define(b,{statics:{define:function(name,u){if(!u){var u={};
}u.include=this.__ox(u.include);
u.patch=this.__ox(u.patch);
if(qx.core.Environment.get(s)){this.__i(name,u);
}var v={$$type:r,name:name,title:u.title,toString:this.genericToString};
if(u.extend){v.supertheme=u.extend;
}v.basename=qx.Bootstrap.createNamespace(name,v);
this.__oA(v,u);
this.__oy(v,u);
this.$$registry[name]=v;
for(var i=0,a=u.include,l=a.length;i<l;i++){this.include(v,a[i]);
}
for(var i=0,a=u.patch,l=a.length;i<l;i++){this.patch(v,a[i]);
}},__ox:function(w){if(!w){return [];
}
if(qx.Bootstrap.isArray(w)){return w;
}else{return [w];
}},__oy:function(x,y){var z=y.aliases||{};

if(y.extend&&y.extend.aliases){qx.Bootstrap.objectMergeWith(z,y.extend.aliases,false);
}x.aliases=z;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return e+this.name+f;
},__oz:function(A){for(var i=0,B=this.__oB,l=B.length;i<l;i++){if(A[B[i]]){return B[i];
}}},__oA:function(C,D){var G=this.__oz(D);
if(D.extend&&!G){G=D.extend.type;
}C.type=G||c;
var I=function(){};
if(D.extend){I.prototype=new D.extend.$$clazz;
}var H=I.prototype;
var F=D[G];
for(var E in F){H[E]=F[E];
if(H[E].base){if(qx.core.Environment.get(s)){if(!D.extend){throw new Error("Found base flag in entry '"+E+"' of theme '"+D.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}H[E].base=D.extend;
}}C.$$clazz=I;
C[G]=new I;
},$$registry:{},__oB:[m,h,k,o,g,p,d,j],__h:qx.core.Environment.select(s,{"true":{"title":n,"aliases":t,"type":n,"extend":t,"colors":t,"borders":t,"decorations":t,"fonts":t,"icons":t,"widgets":t,"appearances":t,"meta":t,"include":t,"patch":t},"default":null}),__oC:qx.core.Environment.select(s,{"true":{"color":t,"border":t,"decoration":t,"font":t,"icon":t,"appearance":t,"widget":t},"default":null}),__i:qx.core.Environment.select(s,{"true":function(name,J){var O=this.__h;

for(var N in J){if(O[N]===undefined){throw new Error('The configuration key "'+N+'" in theme "'+name+'" is not allowed!');
}
if(J[N]==null){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value is undefined/null!');
}
if(O[N]!==null&&typeof J[N]!==O[N]){throw new Error('Invalid type of key "'+N+'" in theme "'+name+'"! The type of the key must be "'+O[N]+'"!');
}}var M=[m,h,k,o,g,p,d,j];

for(var i=0,l=M.length;i<l;i++){var N=M[i];

if(J[N]!==undefined&&(J[N] instanceof Array||J[N] instanceof RegExp||J[N] instanceof Date||J[N].classname!==undefined)){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value needs to be a map!');
}}var K=0;

for(var i=0,l=M.length;i<l;i++){var N=M[i];

if(J[N]){K++;
}
if(K>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(J.meta){var L;

for(var N in J.meta){L=J.meta[N];

if(this.__oC[N]===undefined){throw new Error('The key "'+N+'" is not allowed inside a meta theme block.');
}
if(typeof L!==this.__oC[N]){throw new Error('The type of the key "'+N+'" inside the meta block is wrong.');
}
if(!(typeof L===t&&L!==null&&L.$$type===r)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+N+'" in theme "'+name+'" is invalid: '+L);
}}}if(J.extend&&J.extend.$$type!==r){throw new Error('Invalid extend in theme "'+name+'": '+J.extend);
}if(J.include){for(var i=0,l=J.include.length;i<l;i++){if(typeof (J.include[i])==q||J.include[i].$$type!==r){throw new Error('Invalid include in theme "'+name+'": '+J.include[i]);
}}}if(J.patch){for(var i=0,l=J.patch.length;i<l;i++){if(typeof (J.patch[i])==q||J.patch[i].$$type!==r){throw new Error('Invalid patch in theme "'+name+'": '+J.patch[i]);
}}}},"default":function(){}}),patch:function(P,Q){this.__oD(Q);
var S=this.__oz(Q);

if(S!==this.__oz(P)){throw new Error("The mixins '"+P.name+"' are not compatible '"+Q.name+"'!");
}var R=Q[S];
var T=P.$$clazz.prototype;

for(var U in R){T[U]=R[U];
}},include:function(V,W){this.__oD(W);
var Y=W.type;

if(Y!==V.type){throw new Error("The mixins '"+V.name+"' are not compatible '"+W.name+"'!");
}var X=W[Y];
var ba=V.$$clazz.prototype;

for(var bb in X){if(ba[bb]!==undefined){continue;
}ba[bb]=X[bb];
}},__oD:function(bc){if(typeof bc===q||bc==null){var bd=new Error("Mixin theme is not a valid theme!");

if(qx.core.Environment.get(s)){var be=qx.dev.StackTrace.getStackTraceFromError(bd);
qx.Bootstrap.error(this,be);
}throw bd;
}}}});
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
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(c){return arguments.length==1;
},getEnabled:function(){},setRequired:function(d){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(g){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var l="_controls",k="icon/32/status/dialog-information.png",j="",i="_table",h="center",g="en",f="icon/16/apps/office-spreadsheet.png",d="OK",c="demobrowser.demo.table.TableDemo",b="_container",a="execute";
qx.Class.define(c,{extend:qx.application.Standalone,include:demobrowser.demo.table.MUtil,members:{__Oc:null,main:function(){qx.application.Standalone.prototype.main.call(this);
qx.locale.Manager.getInstance().setLocale(g);
this._container=new qx.ui.window.Window(this.getCaption(),f).set({width:600,height:400,contentPadding:[0,0,0,0],showClose:false,showMinimize:false});
this._container.setLayout(new qx.ui.layout.VBox());
this._container.open();
this.getRoot().add(this._container,{left:50,top:10});
this._table=this.createTable();
this._controls=this.createControls();

if(this._controls){this._container.add(this._controls);
}this._container.add(this._table,{flex:1});
},nextId:0,createRandomRows:function(m){var p=[];
var o=new Date().getTime();
var q=400*24*60*60*1000;

for(var r=0;r<m;r++){var n=new Date(o+Math.random()*q-q/2);
p.push([this.nextId++,Math.random()*10000,n,(Math.random()>0.5)]);
}return p;
},getCaption:function(){return j;
},createTable:function(){throw new Error("abstract method call");
},createControls:function(){return null;
},showDialog:function(s){if(!this.__Oc){var v=this.__Oc=new qx.ui.window.Window().set({modal:true,showMinimize:false,showMaximize:false,width:180,contentPadding:[10,10,10,10]});
v.moveTo(315,100);
var t=new qx.ui.layout.Grid(15,15);
t.setRowFlex(0,1);
t.setColumnFlex(1,1);
v.setLayout(t);
v.add(new qx.ui.basic.Image(k),{row:0,column:0});
v.add(new qx.ui.basic.Label().set({rich:true,allowGrowY:true}),{row:0,column:1});
var u=new qx.ui.form.Button(d).set({alignX:h,allowGrowX:false,padding:[2,10]});
u.addListener(a,function(e){v.close();
},this);
v.add(u,{row:1,column:0,colSpan:2});
}this.__Oc.getChildren()[1].setValue(s);
this.__Oc.open();
this.__Oc.getChildren()[2].focus();
}},destruct:function(){this._disposeObjects(i,l,b);
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
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,{members:{setDesktop:function(b){this.assertInterface(b,qx.ui.window.IDesktop);
},changeActiveWindow:function(c,d){},updateStack:function(){},bringToFront:function(e){this.assertInstance(e,qx.ui.window.Window);
},sendToBack:function(f){this.assertInstance(f,qx.ui.window.Window);
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var b="__hk",a="qx.ui.window.Manager";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__hk:null,setDesktop:function(c){this.__hk=c;
this.updateStack();
},getDesktop:function(){return this.__hk;
},changeActiveWindow:function(d,e){if(d){this.bringToFront(d);
d.setActive(true);
}
if(e){e.resetActive();
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__hk.forceUnblockContent();
var f=this.__hk.getWindows();
var h=this._minZIndex;
var m=h+f.length*2;
var j=h+f.length*4;
var k=null;

for(var i=0,l=f.length;i<l;i++){var g=f[i];
if(!g.isVisible()){continue;
}k=k||g;
if(g.isModal()){g.setZIndex(j);
this.__hk.blockContent(j-1);
j+=2;
k=g;
}else if(g.isAlwaysOnTop()){g.setZIndex(m);
m+=2;
}else{g.setZIndex(h);
h+=2;
}if(!k.isModal()&&g.isActive()||g.getZIndex()>k.getZIndex()){k=g;
}}this.__hk.setActiveWindow(k);
},bringToFront:function(n){var o=this.__hk.getWindows();
var p=qx.lang.Array.remove(o,n);

if(p){o.push(n);
this.updateStack();
}},sendToBack:function(q){var r=this.__hk.getWindows();
var s=qx.lang.Array.remove(r,q);

if(s){r.unshift(q);
this.updateStack();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var l="move",k="Boolean",j="mouseup",i="mousedown",h="losecapture",g="qx.ui.core.MMovable",f="__gC",d="mousemove",c="maximized",b="__gB",a="move-frame";
qx.Mixin.define(g,{properties:{movable:{check:k,init:true},useMoveFrame:{check:k,init:false}},members:{__gB:null,__gC:null,__gD:null,__gE:null,__gF:null,__gG:null,__gH:null,__gI:false,__gJ:null,__gK:0,_activateMoveHandle:function(m){if(this.__gB){throw new Error("The move handle could not be redefined!");
}this.__gB=m;
m.addListener(i,this._onMoveMouseDown,this);
m.addListener(j,this._onMoveMouseUp,this);
m.addListener(d,this._onMoveMouseMove,this);
m.addListener(h,this.__gO,this);
},__gL:function(){var n=this.__gC;

if(!n){n=this.__gC=new qx.ui.core.Widget();
n.setAppearance(a);
n.exclude();
qx.core.Init.getApplication().getRoot().add(n);
}return n;
},__gM:function(){var location=this.getContainerLocation();
var p=this.getBounds();
var o=this.__gL();
o.setUserBounds(location.left,location.top,p.width,p.height);
o.show();
o.setZIndex(this.getZIndex()+1);
},__gN:function(e){var r=this.__gD;
var u=Math.max(r.left,Math.min(r.right,e.getDocumentLeft()));
var t=Math.max(r.top,Math.min(r.bottom,e.getDocumentTop()));
var q=this.__gE+u;
var s=this.__gF+t;
return {viewportLeft:q,viewportTop:s,parentLeft:q-this.__gG,parentTop:s-this.__gH};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(c)){return;
}var parent=this.getLayoutParent();
var w=parent.getContentLocation();
var x=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__gJ=parent.getBlockerColor();
this.__gK=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
this.__gI=true;
}}this.__gD={left:w.left,top:w.top,right:w.left+x.width,bottom:w.top+x.height};
var v=this.getContainerLocation();
this.__gG=w.left;
this.__gH=w.top;
this.__gE=v.left-e.getDocumentLeft();
this.__gF=v.top-e.getDocumentTop();
this.addState(l);
this.__gB.capture();
if(this.getUseMoveFrame()){this.__gM();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(l)){return;
}var y=this.__gN(e);

if(this.getUseMoveFrame()){this.__gL().setDomPosition(y.viewportLeft,y.viewportTop);
}else{this.setDomPosition(y.parentLeft,y.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__gI){parent.unblockContent();
parent.setBlockerColor(this.__gJ);
parent.setBlockerOpacity(this.__gK);
this.__gJ=null;
this.__gK=0;
this.__gI=false;
}}this.__gB.releaseCapture();
var z=this.__gN(e);
this.setLayoutProperties({left:z.parentLeft,top:z.parentTop});
if(this.getUseMoveFrame()){this.__gL().exclude();
}e.stopPropagation();
},__gO:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
if(this.getUseMoveFrame()){this.__gL().exclude();
}}},destruct:function(){this._disposeObjects(f,b);
this.__gD=null;
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__mh:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__mi:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__mi[name];
s[t]();
}else{var u=this.__mh[name];
s[u](q);
}}}});
})();
(function(){var k="Boolean",j="resize",i="mousedown",h="w-resize",g="sw-resize",f="n-resize",d="resizableRight",c="ne-resize",b="se-resize",a="Integer",z="e-resize",y="resizableLeft",x="mousemove",w="move",v="shorthand",u="maximized",t="nw-resize",s="mouseout",r="qx.ui.core.MResizable",q="mouseup",o="losecapture",p="resize-frame",m="resizableBottom",n="s-resize",l="resizableTop";
qx.Mixin.define(r,{construct:function(){var A=this.getContainerElement();
A.addListener(i,this.__hf,this,true);
A.addListener(q,this.__hg,this);
A.addListener(x,this.__hi,this);
A.addListener(s,this.__hj,this);
A.addListener(o,this.__hh,this);
var B=this.getContainerElement().getDomElement();

if(B==null){B=window;
}this.__gR=qx.event.Registration.getManager(B).getHandler(qx.event.handler.DragDrop);
},properties:{resizableTop:{check:k,init:true},resizableRight:{check:k,init:true},resizableBottom:{check:k,init:true},resizableLeft:{check:k,init:true},resizable:{group:[l,d,m,y],mode:v},resizeSensitivity:{check:a,init:5},useResizeFrame:{check:k,init:true}},members:{__gR:null,__gS:null,__gT:null,__gU:null,__gV:null,__gW:null,__gX:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,_getResizeFrame:function(){var C=this.__gS;

if(!C){C=this.__gS=new qx.ui.core.Widget();
C.setAppearance(p);
C.exclude();
qx.core.Init.getApplication().getRoot().add(C);
}return C;
},__gY:function(){var location=this.__hc();
var D=this._getResizeFrame();
D.setUserBounds(location.left,location.top,location.right-location.left,location.bottom-location.top);
D.show();
D.setZIndex(this.getZIndex()+1);
},__ha:function(e){var F=this.__gT;
var G=this.getSizeHint();
var K=this.__gX;
var J=this.__gW;
var E=J.width;
var I=J.height;
var H=J.containerWidth;
var M=J.containerHeight;
var N=J.left;
var top=J.top;
var L;

if((F&this.RESIZE_TOP)||(F&this.RESIZE_BOTTOM)){L=Math.max(K.top,Math.min(K.bottom,e.getDocumentTop()))-this.__gV;

if(F&this.RESIZE_TOP){I-=L;
M-=L;
}else{I+=L;
M+=L;
}
if(M<G.minHeight){I+=(G.minHeight-M);
M=G.minHeight;
}else if(M>G.maxHeight){I-=(M-G.maxHeight);
M=G.maxHeight;
}
if(F&this.RESIZE_TOP){top+=J.containerHeight-M;
}}
if((F&this.RESIZE_LEFT)||(F&this.RESIZE_RIGHT)){L=Math.max(K.left,Math.min(K.right,e.getDocumentLeft()))-this.__gU;

if(F&this.RESIZE_LEFT){E-=L;
H-=L;
}else{E+=L;
H+=L;
}
if(H<G.minWidth){E+=(G.minWidth-H);
H=G.minWidth;
}else if(E>G.maxWidth){E-=(H-G.maxWidth);
H=G.maxWidth;
}
if(F&this.RESIZE_LEFT){N+=J.containerWidth-H;
}}return {viewportLeft:N,viewportTop:top,parentLeft:J.bounds.left+N-J.left,parentTop:J.bounds.top+top-J.top,containerWidth:H,containerHeight:M,width:E,height:I};
},__hb:{1:f,2:n,4:h,8:z,5:t,6:g,9:c,10:b},__hc:function(){var O=this.getDecoratorElement();
if(O&&O.getDomElement()){return qx.bom.element.Location.get(O.getDomElement());
}else{return this.getContentLocation();
}},__hd:function(e){var location=this.__hc();
var P=this.getResizeSensitivity();
var S=e.getDocumentLeft();
var R=e.getDocumentTop();
var Q=this.__he(location,S,R,P);
if(Q>0){Q=Q|this.__he(location,S,R,P*2);
}this.__gT=Q;
},__he:function(location,T,U,V){var W=0;
if(this.getResizableTop()&&Math.abs(location.top-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(location.bottom-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_BOTTOM;
}if(this.getResizableLeft()&&Math.abs(location.left-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(location.right-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_RIGHT;
}return W;
},__hf:function(e){if(!this.__gT){return;
}this.addState(j);
this.__gU=e.getDocumentLeft();
this.__gV=e.getDocumentTop();
var bb=this.getContainerLocation();
var X=this.__hc();
var ba=this.getBounds();
this.__gW={top:X.top,left:X.left,containerWidth:bb.right-bb.left,containerHeight:bb.bottom-bb.top,width:X.right-X.left,height:X.bottom-X.top,bounds:qx.lang.Object.clone(ba)};
var parent=this.getLayoutParent();
var bc=parent.getContentLocation();
var Y=parent.getBounds();
this.__gX={left:bc.left,top:bc.top,right:bc.left+Y.width,bottom:bc.top+Y.height};
if(this.getUseResizeFrame()){this.__gY();
}this.capture();
e.stop();
},__hg:function(e){if(!this.hasState(j)){return;
}if(this.getUseResizeFrame()){this._getResizeFrame().exclude();
}var bd=this.__ha(e);
this.setWidth(bd.containerWidth);
this.setHeight(bd.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bd.parentLeft,top:bd.parentTop});
}this.__gT=0;
this.removeState(j);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__hh:function(e){if(!this.__gT){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(w);
if(this.getUseResizeFrame()){this._getResizeFrame().exclude();
}},__hi:function(e){if(this.hasState(j)){var bh=this.__ha(e);
if(this.getUseResizeFrame()){var bf=this._getResizeFrame();
bf.setUserBounds(bh.viewportLeft,bh.viewportTop,bh.width,bh.height);
}else{this.setWidth(bh.containerWidth);
this.setHeight(bh.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bh.parentLeft,top:bh.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(u)&&!this.__gR.isSessionActive()){this.__hd(e);
var bi=this.__gT;
var bg=this.getApplicationRoot();

if(bi){var be=this.__hb[bi];
this.setCursor(be);
bg.setGlobalCursor(be);
}else if(this.getCursor()){this.resetCursor();
bg.resetGlobalCursor();
}}},__hj:function(e){if(this.getCursor()&&!this.hasState(j)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__gS!=null&&!qx.core.ObjectRegistry.inShutDown){this.__gS.destroy();
this.__gS=null;
}this.__gR=null;
}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="captionbar",h="_applyCaptionBarChange",g="maximize-button",f="minimize-button",d="close-button",c="maximized",b="restore-button",a="execute",V="title",U="icon",T="showStatusbar",S="pane",R="statusbar",Q="statusbar-text",P="qx.debug",O="String",N="normal",M="active",r="beforeClose",s="beforeMinimize",p="mousedown",q="window-resize-frame",n="changeStatus",o="changeIcon",l="excluded",m="dblclick",t="_applyActive",u="beforeRestore",B="qx.ui.window.IDesktop. All root widgets implement this interface.",z="minimize",F="changeModal",D="changeAlwaysOnTop",I="_applyShowStatusbar",H="_applyStatus",w="qx.ui.window.Window",L="Windows can only be added to widgets, which implement the interface ",K="changeCaption",J="focusout",v="beforeMaximize",x="maximize",y="restore",A="window",C="close",E="changeActive",G="minimized";
qx.Class.define(w,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(W,X){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(i);
this._createChildControl(S);
if(X!=null){this.setIcon(X);
}
if(W!=null){this.setCaption(W);
}this._updateCaptionBar();
this.addListener(p,this._onWindowMouseDown,this,true);
this.addListener(J,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
this._getResizeFrame().setAppearance(q);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":j,"close":j,"beforeMinimize":j,"minimize":j,"beforeMaximize":j,"maximize":j,"beforeRestore":j,"restore":j},properties:{appearance:{refine:true,init:A},visibility:{refine:true,init:l},focusable:{refine:true,init:true},active:{check:k,init:false,apply:t,event:E},alwaysOnTop:{check:k,init:false,event:D},modal:{check:k,init:false,event:F},caption:{apply:h,event:K,nullable:true},icon:{check:O,nullable:true,apply:h,event:o,themeable:true},status:{check:O,nullable:true,apply:H,event:n},showClose:{check:k,init:true,apply:h,themeable:true},showMaximize:{check:k,init:true,apply:h,themeable:true},showMinimize:{check:k,init:true,apply:h,themeable:true},allowClose:{check:k,init:true,apply:h},allowMaximize:{check:k,init:true,apply:h},allowMinimize:{check:k,init:true,apply:h},showStatusbar:{check:k,init:false,apply:I}},members:{__gP:null,__gQ:null,getChildrenContainer:function(){return this.getChildControl(S);
},_forwardStates:{active:true,maximized:true,showStatusbar:true},setLayoutParent:function(parent){if(qx.core.Environment.get(P)){parent&&this.assertInterface(parent,qx.ui.window.IDesktop,L+B);
}qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);
},_createChildControlImpl:function(Y,ba){var bb;

switch(Y){case R:bb=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(bb);
bb.add(this.getChildControl(Q));
break;
case Q:bb=new qx.ui.basic.Label();
bb.setValue(this.getStatus());
break;
case S:bb=new qx.ui.container.Composite();
this._add(bb,{flex:1});
break;
case i:var bd=new qx.ui.layout.Grid();
bd.setRowFlex(0,1);
bd.setColumnFlex(1,1);
bb=new qx.ui.container.Composite(bd);
this._add(bb);
bb.addListener(m,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(bb);
break;
case U:bb=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(i).add(bb,{row:0,column:0});
break;
case V:bb=new qx.ui.basic.Label(this.getCaption());
bb.setWidth(0);
bb.setAllowGrowX(true);
var bc=this.getChildControl(i);
bc.add(bb,{row:0,column:1});
break;
case f:bb=new qx.ui.form.Button();
bb.setFocusable(false);
bb.addListener(a,this._onMinimizeButtonClick,this);
this.getChildControl(i).add(bb,{row:0,column:2});
break;
case b:bb=new qx.ui.form.Button();
bb.setFocusable(false);
bb.addListener(a,this._onRestoreButtonClick,this);
this.getChildControl(i).add(bb,{row:0,column:3});
break;
case g:bb=new qx.ui.form.Button();
bb.setFocusable(false);
bb.addListener(a,this._onMaximizeButtonClick,this);
this.getChildControl(i).add(bb,{row:0,column:4});
break;
case d:bb=new qx.ui.form.Button();
bb.setFocusable(false);
bb.addListener(a,this._onCloseButtonClick,this);
this.getChildControl(i).add(bb,{row:0,column:6});
break;
}return bb||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,Y);
},_updateCaptionBar:function(){var bf;
var bg=this.getIcon();

if(bg){this.getChildControl(U).setSource(bg);
this._showChildControl(U);
}else{this._excludeChildControl(U);
}var be=this.getCaption();

if(be){this.getChildControl(V).setValue(be);
this._showChildControl(V);
}else{this._excludeChildControl(V);
}
if(this.getShowMinimize()){this._showChildControl(f);
bf=this.getChildControl(f);
this.getAllowMinimize()?bf.resetEnabled():bf.setEnabled(false);
}else{this._excludeChildControl(f);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(b);
this._excludeChildControl(g);
}else{this._showChildControl(g);
this._excludeChildControl(b);
}bf=this.getChildControl(g);
this.getAllowMaximize()?bf.resetEnabled():bf.setEnabled(false);
}else{this._excludeChildControl(g);
this._excludeChildControl(b);
}
if(this.getShowClose()){this._showChildControl(d);
bf=this.getChildControl(d);
this.getAllowClose()?bf.resetEnabled():bf.setEnabled(false);
}else{this._excludeChildControl(d);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(r,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(C);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bi=parent.getBounds();

if(bi){var bj=this.getSizeHint();
var bh=Math.round((bi.width-bj.width)/2);
var top=Math.round((bi.height-bj.height)/2);

if(top<0){top=0;
}this.moveTo(bh,top);
return;
}}
if(qx.core.Environment.get(P)){this.warn("Centering depends on parent bounds!");
}},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(v,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bk=this.getLayoutProperties();
this.__gQ=bk.left===undefined?0:bk.left;
this.__gP=bk.top===undefined?0:bk.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(c);
this._updateCaptionBar();
this.fireEvent(x);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(s,qx.event.type.Event,[false,true])){var bl=this.getLayoutProperties();
this.__gQ=bl.left===undefined?0:bl.left;
this.__gP=bl.top===undefined?0:bl.top;
this.removeState(c);
this.hide();
this.fireEvent(z);
}},restore:function(){if(this.getMode()===N){return;
}
if(this.fireNonBubblingEvent(u,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bm=this.__gQ;
var top=this.__gP;
this.setLayoutProperties({edge:null,left:bm,top:top});
this.removeState(c);
this._updateCaptionBar();
this.fireEvent(y);
}},moveTo:function(bn,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bn,top:top});
},isMaximized:function(){return this.hasState(c);
},getMode:function(){if(!this.isVisible()){return G;
}else{if(this.isMaximized()){return c;
}else{return N;
}}},_applyActive:function(bo,bp){if(bp){this.removeState(M);
}else{this.addState(M);
}},_getContentPaddingTarget:function(){return this.getChildControl(S);
},_applyShowStatusbar:function(bq,br){var bs=this._getResizeFrame();

if(bq){this.addState(T);
bs.addState(T);
}else{this.removeState(T);
bs.removeState(T);
}
if(bq){this._showChildControl(R);
}else{this._excludeChildControl(R);
}},_applyCaptionBarChange:function(bt,bu){this._updateCaptionBar();
},_applyStatus:function(bv,bw){var bx=this.getChildControl(Q,true);

if(bx){bx.setValue(bv);
}},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var by=e.getRelatedTarget();

if(by!=null&&!qx.ui.core.Widget.contains(this,by)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(f).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(b).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(g).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(d).reset();
}}});
})();
(function(){var s="_applyLayoutChange",r="top",q="left",p="height",o="middle",n="Decorator",m="center",k="_applyReversed",j="qx.debug",h="bottom",c="' is not supported by the VBox layout!",g="qx.ui.layout.VBox",f="flex",b="Integer",a="The property '",e="right",d="Boolean";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);

if(t){this.setSpacing(t);
}
if(u){this.setAlignY(u);
}
if(v){this.setSeparator(v);
}},properties:{alignY:{check:[r,o,h],init:r,apply:s},alignX:{check:[q,m,e],init:q,apply:s},spacing:{check:b,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:d,init:false,apply:k}},members:{__ld:null,__le:null,__lf:null,__kv:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__lg:function(){var B=this._getLayoutChildren();
var length=B.length;
var x=false;
var w=this.__ld&&this.__ld.length!=length&&this.__le&&this.__ld;
var z;
var y=w?this.__ld:new Array(length);
var A=w?this.__le:new Array(length);
if(this.getReversed()){B=B.concat().reverse();
}for(var i=0;i<length;i++){z=B[i].getLayoutProperties();

if(z.height!=null){y[i]=parseFloat(z.height)/100;
}
if(z.flex!=null){A[i]=z.flex;
x=true;
}else{A[i]=0;
}}if(!w){this.__ld=y;
this.__le=A;
}this.__lf=x;
this.__kv=B;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Environment.select(j,{"true":function(C,name,D){this.assert(name===f||name===p,a+name+c);

if(name==p){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(D);
this.assert(D>=0);
}},"false":null}),renderLayout:function(E,F){if(this._invalidChildrenCache){this.__lg();
}var M=this.__kv;
var length=M.length;
var W=qx.ui.layout.Util;
var V=this.getSpacing();
var ba=this.getSeparator();

if(ba){var J=W.computeVerticalSeparatorGaps(M,V,ba);
}else{var J=W.computeVerticalGaps(M,V,true);
}var i,H,I,Q;
var R=[];
var X=J;

for(i=0;i<length;i+=1){Q=this.__ld[i];
I=Q!=null?Math.floor((F-J)*Q):M[i].getSizeHint().height;
R.push(I);
X+=I;
}if(this.__lf&&X!=F){var O={};
var U,Y;

for(i=0;i<length;i+=1){U=this.__le[i];

if(U>0){N=M[i].getSizeHint();
O[i]={min:N.minHeight,value:R[i],max:N.maxHeight,flex:U};
}}var K=W.computeFlexOffsets(O,F,X);

for(i in K){Y=K[i].offset;
R[i]+=Y;
X+=Y;
}}var top=M[0].getMarginTop();
if(X<F&&this.getAlignY()!=r){top=F-X;

if(this.getAlignY()===o){top=Math.round(top/2);
}}var N,bc,S,I,P,T,L;
this._clearSeparators();
if(ba){var bb=qx.theme.manager.Decoration.getInstance().resolve(ba).getInsets();
var G=bb.top+bb.bottom;
}for(i=0;i<length;i+=1){H=M[i];
I=R[i];
N=H.getSizeHint();
T=H.getMarginLeft();
L=H.getMarginRight();
S=Math.max(N.minWidth,Math.min(E-T-L,N.maxWidth));
bc=W.computeHorizontalAlignOffset(H.getAlignX()||this.getAlignX(),S,E,T,L);
if(i>0){if(ba){top+=P+V;
this._renderSeparator(ba,{top:top,left:0,height:G,width:E});
top+=G+V+H.getMarginTop();
}else{top+=W.collapseMargins(V,P,H.getMarginTop());
}}H.renderLayout(bc,top,S,I);
top+=I;
P=H.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lg();
}var bj=qx.ui.layout.Util;
var br=this.__kv;
var bf=0,bi=0,bh=0;
var bd=0,bk=0;
var bo,be,bq;
for(var i=0,l=br.length;i<l;i+=1){bo=br[i];
be=bo.getSizeHint();
bi+=be.height;
var bn=this.__le[i];
var bg=this.__ld[i];

if(bn){bf+=be.minHeight;
}else if(bg){bh=Math.max(bh,Math.round(be.minHeight/bg));
}else{bf+=be.height;
}bq=bo.getMarginLeft()+bo.getMarginRight();
if((be.width+bq)>bk){bk=be.width+bq;
}if((be.minWidth+bq)>bd){bd=be.minWidth+bq;
}}bf+=bh;
var bm=this.getSpacing();
var bp=this.getSeparator();

if(bp){var bl=bj.computeVerticalSeparatorGaps(br,bm,bp);
}else{var bl=bj.computeVerticalGaps(br,bm,true);
}return {minHeight:bf+bl,height:bi+bl,minWidth:bd,width:bk};
}},destruct:function(){this.__ld=this.__le=this.__kv=null;
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
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
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
(function(){var f="x",e="_tableModel",d="Cell ",c="Table",b="demobrowser.demo.table.Table_Huge",a="Column ";
qx.Class.define(b,{extend:demobrowser.demo.table.TableDemo,members:{getCaption:function(){return c;
},COL_COUNT:50,ROW_COUNT:10000,createRandomRows:function(g){var j=[];

for(var k=0;k<g;k++){var h=[];

for(var i=0;i<this.COL_COUNT;i++){h.push(d+i+f+k);
}j.push(h);
}return j;
},createTable:function(){var m=this.createRandomRows(this.ROW_COUNT);
var l=this._tableModel=new qx.ui.table.model.Simple();
var o=[];

for(var i=0;i<this.COL_COUNT;i++){o.push(a+i);
}l.setColumns(o);
l.setData(m);
var n=new qx.ui.table.Table(l);
return n;
}},destruct:function(){this._disposeObjects(e);
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.ui.table.ITableModel";
qx.Interface.define(a,{events:{"dataChanged":c,"metaDataChanged":b,"sorted":c},members:{getRowCount:function(){},getRowData:function(d){},getColumnCount:function(){},getColumnId:function(e){},getColumnIndexById:function(f){},getColumnName:function(g){},isColumnEditable:function(h){},isColumnSortable:function(i){},sortByColumn:function(j,k){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(l,m){},getValue:function(n,o){},getValueById:function(p,q){},setValue:function(r,s,t){},setValueById:function(u,v,w){}}});
})();
(function(){var e="metaDataChanged",d="qx.event.type.Data",c="qx.event.type.Event",b="abstract",a="qx.ui.table.model.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":d,"metaDataChanged":c,"sorted":d},construct:function(){qx.core.Object.call(this);
this.__zm=[];
this.__zn=[];
this.__zo={};
},members:{__zm:null,__zn:null,__zo:null,__zp:null,init:function(f){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(g){return null;
},isColumnEditable:function(h){return false;
},isColumnSortable:function(j){return false;
},sortByColumn:function(k,l){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(m,n){},getValue:function(o,p){throw new Error("getValue is abstract");
},getValueById:function(q,r){return this.getValue(this.getColumnIndexById(q),r);
},setValue:function(s,t,u){throw new Error("setValue is abstract");
},setValueById:function(v,w,x){this.setValue(this.getColumnIndexById(v),w,x);
},getColumnCount:function(){return this.__zm.length;
},getColumnIndexById:function(y){return this.__zo[y];
},getColumnId:function(z){return this.__zm[z];
},getColumnName:function(A){return this.__zn[A];
},setColumnIds:function(B){this.__zm=B;
this.__zo={};

for(var i=0;i<B.length;i++){this.__zo[B[i]]=i;
}this.__zn=new Array(B.length);
if(!this.__zp){this.fireEvent(e);
}},setColumnNamesByIndex:function(C){if(this.__zm.length!=C.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__zm.length+" != "+C.length);
}this.__zn=C;
this.fireEvent(e);
},setColumnNamesById:function(D){this.__zn=new Array(this.__zm.length);

for(var i=0;i<this.__zm.length;++i){this.__zn[i]=D[this.__zm[i]];
}},setColumns:function(E,F){var G=this.__zm.length==0||F;

if(F==null){if(this.__zm.length==0){F=E;
}else{F=this.__zm;
}}
if(F.length!=E.length){throw new Error("columnIdArr and columnNameArr have different length: "+F.length+" != "+E.length);
}
if(G){this.__zp=true;
this.setColumnIds(F);
this.__zp=false;
}this.setColumnNamesByIndex(E);
}},destruct:function(){this.__zm=this.__zn=this.__zo=null;
}});
})();
(function(){var e="dataChanged",d="metaDataChanged",c="qx.ui.table.model.Simple",b="Boolean",a="sorted";
qx.Class.define(c,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__AP=[];
this.__AQ=-1;
this.__AR=[];
this.__zq=null;
},properties:{caseSensitiveSorting:{check:b,init:true}},statics:{_defaultSortComparatorAscending:function(f,g){var h=f[arguments.callee.columnIndex];
var k=g[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(h)&&qx.lang.Type.isNumber(k)){var l=isNaN(h)?isNaN(k)?0:1:isNaN(k)?-1:null;

if(l!=null){return l;
}}return (h>k)?1:((h==k)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(m,n){var o=(m[arguments.callee.columnIndex].toLowerCase?m[arguments.callee.columnIndex].toLowerCase():m[arguments.callee.columnIndex]);
var p=(n[arguments.callee.columnIndex].toLowerCase?n[arguments.callee.columnIndex].toLowerCase():n[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(o)&&qx.lang.Type.isNumber(p)){var q=isNaN(o)?isNaN(p)?0:1:isNaN(p)?-1:null;

if(q!=null){return q;
}}return (o>p)?1:((o==p)?0:-1);
},_defaultSortComparatorDescending:function(r,s){var t=r[arguments.callee.columnIndex];
var u=s[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(t)&&qx.lang.Type.isNumber(u)){var v=isNaN(t)?isNaN(u)?0:1:isNaN(u)?-1:null;

if(v!=null){return v;
}}return (t<u)?1:((t==u)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(w,x){var y=(w[arguments.callee.columnIndex].toLowerCase?w[arguments.callee.columnIndex].toLowerCase():w[arguments.callee.columnIndex]);
var z=(x[arguments.callee.columnIndex].toLowerCase?x[arguments.callee.columnIndex].toLowerCase():x[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(y)&&qx.lang.Type.isNumber(z)){var A=isNaN(y)?isNaN(z)?0:1:isNaN(z)?-1:null;

if(A!=null){return A;
}}return (y<z)?1:((y==z)?0:-1);
}},members:{__AP:null,__zq:null,__AS:null,__AR:null,__AQ:null,__AT:null,getRowData:function(B){var C=this.__AP[B];

if(C==null||C.originalData==null){return C;
}else{return C.originalData;
}},getRowDataAsMap:function(D){var F=this.__AP[D];

if(F!=null){var E={};
for(var G=0;G<this.getColumnCount();G++){E[this.getColumnId(G)]=F[G];
}
if(F.originalData!=null){for(var H in F.originalData){if(E[H]==undefined){E[H]=F.originalData[H];
}}}return E;
}return (F&&F.originalData)?F.originalData:null;
},getDataAsMapArray:function(){var J=this.getRowCount();
var I=[];

for(var i=0;i<J;i++){I.push(this.getRowDataAsMap(i));
}return I;
},setEditable:function(K){this.__zq=[];

for(var L=0;L<this.getColumnCount();L++){this.__zq[L]=K;
}this.fireEvent(d);
},setColumnEditable:function(M,N){if(N!=this.isColumnEditable(M)){if(this.__zq==null){this.__zq=[];
}this.__zq[M]=N;
this.fireEvent(d);
}},isColumnEditable:function(O){return this.__zq?(this.__zq[O]==true):false;
},setColumnSortable:function(P,Q){if(Q!=this.isColumnSortable(P)){if(this.__AS==null){this.__AS=[];
}this.__AS[P]=Q;
this.fireEvent(d);
}},isColumnSortable:function(R){return (this.__AS?(this.__AS[R]!==false):true);
},sortByColumn:function(S,T){var W;
var V=this.__AR[S];

if(V){W=(T?V.ascending:V.descending);
}else{if(this.getCaseSensitiveSorting()){W=(T?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{W=(T?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}W.columnIndex=S;
this.__AP.sort(W);
this.__AQ=S;
this.__AT=T;
var U={columnIndex:S,ascending:T};
this.fireDataEvent(a,U);
this.fireEvent(d);
},setSortMethods:function(X,Y){var ba;

if(qx.lang.Type.isFunction(Y)){ba={ascending:Y,descending:function(bb,bc){return Y(bc,bb);
}};
}else{ba=Y;
}this.__AR[X]=ba;
},getSortMethods:function(bd){return this.__AR[bd];
},clearSorting:function(){if(this.__AQ!=-1){this.__AQ=-1;
this.__AT=true;
this.fireEvent(d);
}},getSortColumnIndex:function(){return this.__AQ;
},_setSortColumnIndex:function(be){this.__AQ=be;
},isSortAscending:function(){return this.__AT;
},_setSortAscending:function(bf){this.__AT=bf;
},getRowCount:function(){return this.__AP.length;
},getValue:function(bg,bh){if(bh<0||bh>=this.__AP.length){throw new Error("this.__rowArr out of bounds: "+bh+" (0.."+this.__AP.length+")");
}return this.__AP[bh][bg];
},setValue:function(bi,bj,bk){if(this.__AP[bj][bi]!=bk){this.__AP[bj][bi]=bk;
if(this.hasListener(e)){var bl={firstRow:bj,lastRow:bj,firstColumn:bi,lastColumn:bi};
this.fireDataEvent(e,bl);
}
if(bi==this.__AQ){this.clearSorting();
}}},setData:function(bm,bn){this.__AP=bm;
if(this.hasListener(e)){var bo={firstRow:0,lastRow:bm.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bo);
}
if(bn!==false){this.clearSorting();
}},getData:function(){return this.__AP;
},setDataAsMapArray:function(bp,bq,br){this.setData(this._mapArray2RowArr(bp,bq),br);
},addRows:function(bs,bt,bu){if(bt==null){bt=this.__AP.length;
}bs.splice(0,0,bt,0);
Array.prototype.splice.apply(this.__AP,bs);
var bv={firstRow:bt,lastRow:this.__AP.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bv);

if(bu!==false){this.clearSorting();
}},addRowsAsMapArray:function(bw,bx,by,bz){this.addRows(this._mapArray2RowArr(bw,by),bx,bz);
},setRows:function(bA,bB,bC){if(bB==null){bB=0;
}bA.splice(0,0,bB,bA.length);
Array.prototype.splice.apply(this.__AP,bA);
var bD={firstRow:bB,lastRow:this.__AP.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bD);

if(bC!==false){this.clearSorting();
}},setRowsAsMapArray:function(bE,bF,bG,bH){this.setRows(this._mapArray2RowArr(bE,bG),bF,bH);
},removeRows:function(bI,bJ,bK){this.__AP.splice(bI,bJ);
var bL={firstRow:bI,lastRow:this.__AP.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bI,removeCount:bJ};
this.fireDataEvent(e,bL);

if(bK!==false){this.clearSorting();
}},_mapArray2RowArr:function(bM,bN){var bR=bM.length;
var bO=this.getColumnCount();
var bQ=new Array(bR);
var bP;

for(var i=0;i<bR;++i){bP=[];

if(bN){bP.originalData=bM[i];
}
for(var j=0;j<bO;++j){bP[j]=bM[i][this.getColumnId(j)];
}bQ[i]=bP;
}return bQ;
}},destruct:function(){this.__AP=this.__zq=this.__AR=this.__AS=null;
}});
})();
(function(){var p="Boolean",o="column-button",n="Function",m="qx.event.type.Data",k="statusbar",h="qx.ui.table.pane.CellEvent",g="function",f="PageUp",e="dataChanged",d="changeLocale",bH="changeSelection",bG="appear",bF="qx.dynlocale",bE='"',bD="__zK",bC="Enter",bB="metaDataChanged",bA="_applyStatusBarVisible",bz="columnVisibilityMenuCreateStart",by="blur",w="qx.ui.table.Table",y="columnVisibilityMenuCreateEnd",u="changeVisible",v="_applyResetSelectionOnHeaderClick",s="_applyMetaColumnCounts",t="focus",q="changeDataRowRenderer",r="changeHeaderCellHeight",F="Escape",G="A",ba="changeSelectionModel",V="__zI",bi="Left",bd="Down",bu="Integer",bo="_applyHeaderCellHeight",O="visibilityChanged",bx="qx.ui.table.ITableModel",bw="orderChanged",bv="_applySelectionModel",M="menu-button",R="menu",T="_applyAdditionalStatusBarText",X="_applyFocusCellOnMouseMove",bb="table",be="_applyColumnVisibilityButtonVisible",bk="changeTableModel",bq="qx.event.type.Event",z="tableWidthChanged",A="_applyHeaderCellsVisible",Q="Object",bh="_applyShowCellFocusIndicator",bg="resize",bf="verticalScrollBarChanged",bm="changeScrollY",bl="_applyTableModel",bc="End",bj="__zJ",a="_applyKeepFirstVisibleRowComplete",bp="widthChanged",B="one of one row",C="Home",W="_applyRowHeight",b="F2",c="Up",L="%1 rows",D="qx.ui.table.selection.Model",E="one row",K="PageDown",Y="%1 of %2 rows",bs="keypress",br="changeRowHeight",S="Number",bt="__zB",N="header",bn="_applyContextMenuFromDataCellsOnly",H="__zC",J="qx.ui.table.IRowRenderer",P="Right",U="__lh",I="Space";
qx.Class.define(w,{extend:qx.ui.core.Widget,construct:function(bI,bJ){qx.ui.core.Widget.call(this);
if(!bJ){bJ={};
}
if(bJ.initiallyHiddenColumns){this.setInitiallyHiddenColumns(bJ.initiallyHiddenColumns);
}
if(bJ.selectionManager){this.setNewSelectionManager(bJ.selectionManager);
}
if(bJ.selectionModel){this.setNewSelectionModel(bJ.selectionModel);
}
if(bJ.tableColumnModel){this.setNewTableColumnModel(bJ.tableColumnModel);
}
if(bJ.tablePane){this.setNewTablePane(bJ.tablePane);
}
if(bJ.tablePaneHeader){this.setNewTablePaneHeader(bJ.tablePaneHeader);
}
if(bJ.tablePaneScroller){this.setNewTablePaneScroller(bJ.tablePaneScroller);
}
if(bJ.tablePaneModel){this.setNewTablePaneModel(bJ.tablePaneModel);
}
if(bJ.columnMenu){this.setNewColumnMenu(bJ.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__zB=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__zB,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__zC=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(bI||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(bs,this._onKeyPress);
this.addListener(t,this._onFocusChanged);
this.addListener(by,this._onFocusChanged);
var bK=new qx.ui.core.Widget().set({height:0});
this._add(bK);
bK.addListener(bg,this._onResize,this);
this.__zD=null;
this.__zE=null;
if(qx.core.Environment.get(bF)){qx.locale.Manager.getInstance().addListener(d,this._onChangeLocale,this);
}this.initStatusBarVisible();
bI=this.getTableModel();

if(bI.init&&typeof (bI.init)==g){bI.init(this);
}},events:{"columnVisibilityMenuCreateStart":m,"columnVisibilityMenuCreateEnd":m,"tableWidthChanged":bq,"verticalScrollBarChanged":m,"cellClick":h,"cellDblclick":h,"cellContextmenu":h,"dataEdited":m},statics:{__zF:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:bb},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},initiallyHiddenColumns:{init:null},selectable:{refine:true,init:false},selectionModel:{check:D,apply:bv,event:ba},tableModel:{check:bx,apply:bl,event:bk},rowHeight:{check:S,init:20,apply:W,event:br,themeable:true},forceLineHeight:{check:p,init:true},headerCellsVisible:{check:p,init:true,apply:A,themeable:true},headerCellHeight:{check:bu,init:16,apply:bo,event:r,nullable:true,themeable:true},statusBarVisible:{check:p,init:true,apply:bA},additionalStatusBarText:{nullable:true,init:null,apply:T},columnVisibilityButtonVisible:{check:p,init:true,apply:be,themeable:true},metaColumnCounts:{check:Q,apply:s},focusCellOnMouseMove:{check:p,init:false,apply:X},rowFocusChangeModifiesSelection:{check:p,init:true},showCellFocusIndicator:{check:p,init:true,apply:bh},contextMenuFromDataCellsOnly:{check:p,init:true,apply:bn},keepFirstVisibleRowComplete:{check:p,init:true,apply:a},alwaysUpdateCells:{check:p,init:false},resetSelectionOnHeaderClick:{check:p,init:true,apply:v},dataRowRenderer:{check:J,init:null,nullable:true,event:q},modalCellEditorPreOpenFunction:{check:n,init:null,nullable:true},newColumnMenu:{check:n,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:n,init:function(bL){return new qx.ui.table.selection.Manager(bL);
}},newSelectionModel:{check:n,init:function(bM){return new qx.ui.table.selection.Model(bM);
}},newTableColumnModel:{check:n,init:function(bN){return new qx.ui.table.columnmodel.Basic(bN);
}},newTablePane:{check:n,init:function(bO){return new qx.ui.table.pane.Pane(bO);
}},newTablePaneHeader:{check:n,init:function(bP){return new qx.ui.table.pane.Header(bP);
}},newTablePaneScroller:{check:n,init:function(bQ){return new qx.ui.table.pane.Scroller(bQ);
}},newTablePaneModel:{check:n,init:function(bR){return new qx.ui.table.pane.Model(bR);
}}},members:{__zD:null,__zE:null,__zB:null,__zC:null,__zG:null,__zH:null,__zp:null,__zI:null,__zJ:null,__zK:null,__zL:null,__lh:null,_createChildControlImpl:function(bS,bT){var bU;

switch(bS){case k:bU=new qx.ui.basic.Label();
bU.set({allowGrowX:true});
this._add(bU);
break;
case o:bU=this.getNewColumnMenu()();
bU.set({focusable:false});
var bV=bU.factory(R,{table:this});
bV.addListener(bG,this._initColumnMenu,this);
break;
}return bU||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bS);
},_applySelectionModel:function(bW,bX){this.__zC.setSelectionModel(bW);

if(bX!=null){bX.removeListener(bH,this._onSelectionChanged,this);
}bW.addListener(bH,this._onSelectionChanged,this);
},_applyRowHeight:function(bY,ca){var cb=this._getPaneScrollerArr();

for(var i=0;i<cb.length;i++){cb[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(cc,cd){var ce=this._getPaneScrollerArr();

for(var i=0;i<ce.length;i++){ce[i]._excludeChildControl(N);
}},_applyHeaderCellHeight:function(cf,cg){var ch=this._getPaneScrollerArr();

for(var i=0;i<ch.length;i++){ch[i].getHeader().setHeight(cf);
}},getEmptyTableModel:function(){if(!this.__zK){this.__zK=new qx.ui.table.model.Simple();
this.__zK.setColumns([]);
this.__zK.setData([]);
}return this.__zK;
},_applyTableModel:function(ci,cj){this.getTableColumnModel().init(ci.getColumnCount(),this);

if(cj!=null){cj.removeListener(bB,this._onTableModelMetaDataChanged,this);
cj.removeListener(e,this._onTableModelDataChanged,this);
}ci.addListener(bB,this._onTableModelMetaDataChanged,this);
ci.addListener(e,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,ci.getRowCount(),0,ci.getColumnCount());
this._onTableModelMetaDataChanged();
if(cj&&ci.init&&typeof (ci.init)==g){ci.init(this);
}},getTableColumnModel:function(){if(!this.__zJ){var cn=this.__zJ=this.getNewTableColumnModel()(this);
cn.addListener(O,this._onColVisibilityChanged,this);
cn.addListener(bp,this._onColWidthChanged,this);
cn.addListener(bw,this._onColOrderChanged,this);
var cm=this.getTableModel();
cn.init(cm.getColumnCount(),this);
var ck=this._getPaneScrollerArr();

for(var i=0;i<ck.length;i++){var cl=ck[i];
var co=cl.getTablePaneModel();
co.setTableColumnModel(cn);
}}return this.__zJ;
},_applyStatusBarVisible:function(cp,cq){if(cp){this._showChildControl(k);
}else{this._excludeChildControl(k);
}
if(cp){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(cr,cs){this.__zG=cr;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(ct,cu){if(ct){this._showChildControl(o);
}else{this._excludeChildControl(o);
}},_applyMetaColumnCounts:function(cv,cw){var cD=cv;
var cx=this._getPaneScrollerArr();
var cB={};

if(cv>cw){var cF=qx.event.Registration.getManager(cx[0]);

for(var cG in qx.ui.table.Table.__zF){cB[cG]={};
cB[cG].capture=cF.getListeners(cx[0],cG,true);
cB[cG].bubble=cF.getListeners(cx[0],cG,false);
}}this._cleanUpMetaColumns(cD.length);
var cC=0;

for(var i=0;i<cx.length;i++){var cH=cx[i];
var cE=cH.getTablePaneModel();
cE.setFirstColumnX(cC);
cE.setMaxColumnCount(cD[i]);
cC+=cD[i];
}if(cD.length>cx.length){var cA=this.getTableColumnModel();

for(var i=cx.length;i<cD.length;i++){var cE=this.getNewTablePaneModel()(cA);
cE.setFirstColumnX(cC);
cE.setMaxColumnCount(cD[i]);
cC+=cD[i];
var cH=this.getNewTablePaneScroller()(this);
cH.setTablePaneModel(cE);
cH.addListener(bm,this._onScrollY,this);
for(cG in qx.ui.table.Table.__zF){if(!cB[cG]){break;
}
if(cB[cG].capture&&cB[cG].capture.length>0){var cy=cB[cG].capture;

for(var j=0;j<cy.length;j++){var cz=cy[j].context;

if(!cz){cz=this;
}else if(cz==cx[0]){cz=cH;
}cH.addListener(cG,cy[j].handler,cz,true);
}}
if(cB[cG].bubble&&cB[cG].bubble.length>0){var cJ=cB[cG].bubble;

for(var j=0;j<cJ.length;j++){var cz=cJ[j].context;

if(!cz){cz=this;
}else if(cz==cx[0]){cz=cH;
}cH.addListener(cG,cJ[j].handler,cz,false);
}}}var cI=(i==cD.length-1)?1:0;
this.__zB.add(cH,{flex:cI});
cx=this._getPaneScrollerArr();
}}for(var i=0;i<cx.length;i++){var cH=cx[i];
var cK=(i==(cx.length-1));
cH.getHeader().setHeight(this.getHeaderCellHeight());
cH.setTopRightWidget(cK?this.getChildControl(o):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(o);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(cL,cM){var cN=this._getPaneScrollerArr();

for(var i=0;i<cN.length;i++){cN[i].setFocusCellOnMouseMove(cL);
}},_applyShowCellFocusIndicator:function(cO,cP){var cQ=this._getPaneScrollerArr();

for(var i=0;i<cQ.length;i++){cQ[i].setShowCellFocusIndicator(cO);
}},_applyContextMenuFromDataCellsOnly:function(cR,cS){var cT=this._getPaneScrollerArr();

for(var i=0;i<cT.length;i++){cT[i].setContextMenuFromDataCellsOnly(cR);
}},_applyKeepFirstVisibleRowComplete:function(cU,cV){var cW=this._getPaneScrollerArr();

for(var i=0;i<cW.length;i++){cW[i].onKeepFirstVisibleRowCompleteChanged();
}},_applyResetSelectionOnHeaderClick:function(cX,cY){var da=this._getPaneScrollerArr();

for(var i=0;i<da.length;i++){da[i].setResetSelectionOnHeaderClick(cX);
}},getSelectionManager:function(){return this.__zC;
},_getPaneScrollerArr:function(){return this.__zB.getChildren();
},getPaneScroller:function(db){return this._getPaneScrollerArr()[db];
},_cleanUpMetaColumns:function(dc){var dd=this._getPaneScrollerArr();

if(dd!=null){for(var i=dd.length-1;i>=dc;i--){dd[i].destroy();
}}},_onChangeLocale:function(de){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(df){var dg=this._getPaneScrollerArr();

for(var i=0;i<dg.length;i++){dg[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(dh){var di=this._getPaneScrollerArr();

for(var i=0;i<di.length;i++){di[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(dj){var dk=dj.getData();
this._updateTableData(dk.firstRow,dk.lastRow,dk.firstColumn,dk.lastColumn,dk.removeStart,dk.removeCount);
},_updateTableData:function(dl,dm,dn,dp,dq,dr){var ds=this._getPaneScrollerArr();
if(dr){this.getSelectionModel().removeSelectionInterval(dq,dq+dr);
if(this.__zE>=dq&&this.__zE<(dq+dr)){this.setFocusedCell();
}}
for(var i=0;i<ds.length;i++){ds[i].onTableModelDataChanged(dl,dm,dn,dp);
}var dt=this.getTableModel().getRowCount();

if(dt!=this.__zH){this.__zH=dt;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(du){if(!this.__zp){this.__zp=true;
var dv=this._getPaneScrollerArr();

for(var i=0;i<dv.length;i++){dv[i].setScrollY(du.getData());
}this.__zp=false;
}},_onKeyPress:function(dw){if(!this.getEnabled()){return;
}var dD=this.__zE;
var dA=true;
var dE=dw.getKeyIdentifier();

if(this.isEditing()){if(dw.getModifiers()==0){switch(dE){case bC:this.stopEditing();
var dD=this.__zE;
this.moveFocusedCell(0,1);

if(this.__zE!=dD){dA=this.startEditing();
}break;
case F:this.cancelEditing();
this.focus();
break;
default:dA=false;
break;
}}}else{if(dw.isCtrlPressed()){dA=true;

switch(dE){case G:var dB=this.getTableModel().getRowCount();

if(dB>0){this.getSelectionModel().setSelectionInterval(0,dB-1);
}break;
default:dA=false;
break;
}}else{switch(dE){case I:this.__zC.handleSelectKeyDown(this.__zE,dw);
break;
case b:case bC:this.startEditing();
dA=true;
break;
case C:this.setFocusedCell(this.__zD,0,true);
break;
case bc:var dB=this.getTableModel().getRowCount();
this.setFocusedCell(this.__zD,dB-1,true);
break;
case bi:this.moveFocusedCell(-1,0);
break;
case P:this.moveFocusedCell(1,0);
break;
case c:this.moveFocusedCell(0,-1);
break;
case bd:this.moveFocusedCell(0,1);
break;
case f:case K:var dz=this.getPaneScroller(0);
var dC=dz.getTablePane();
var dy=this.getRowHeight();
var dx=(dE==f)?-1:1;
dB=dC.getVisibleRowCount()-1;
dz.setScrollY(dz.getScrollY()+dx*dB*dy);
this.moveFocusedCell(0,dx*dB);
break;
default:dA=false;
}}}
if(dD!=this.__zE&&this.getRowFocusChangeModifiesSelection()){this.__zC.handleMoveKeyDown(this.__zE,dw);
}
if(dA){dw.preventDefault();
dw.stopPropagation();
}},_onFocusChanged:function(dF){var dG=this._getPaneScrollerArr();

for(var i=0;i<dG.length;i++){dG[i].onFocusChanged();
}},_onColVisibilityChanged:function(dH){var dI=this._getPaneScrollerArr();

for(var i=0;i<dI.length;i++){dI[i].onColVisibilityChanged();
}var dJ=dH.getData();

if(this.__zI!=null&&dJ.col!=null&&dJ.visible!=null){this.__zI[dJ.col].setVisible(dJ.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(dK){var dL=this._getPaneScrollerArr();

for(var i=0;i<dL.length;i++){var dM=dK.getData();
dL[i].setColumnWidth(dM.col,dM.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(dN){var dO=this._getPaneScrollerArr();

for(var i=0;i<dO.length;i++){dO[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(dP){var dQ=this._getMetaColumnAtPageX(dP);
return (dQ!=-1)?this.getPaneScroller(dQ):null;
},setFocusedCell:function(dR,dS,dT){if(!this.isEditing()&&(dR!=this.__zD||dS!=this.__zE)){if(dR===null){dR=0;
}this.__zD=dR;
this.__zE=dS;
var dU=this._getPaneScrollerArr();

for(var i=0;i<dU.length;i++){dU[i].setFocusedCell(dR,dS);
}
if(dR!==null&&dT){this.scrollCellVisible(dR,dS);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__zD;
},getFocusedRow:function(){return this.__zE;
},highlightFocusedRow:function(dV){this.getDataRowRenderer().setHighlightFocusRow(dV);
},clearFocusedRowHighlight:function(dW){if(dW){var dY=dW.getRelatedTarget();

if(dY instanceof qx.ui.table.pane.Pane||dY instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var dX=this._getPaneScrollerArr();

for(var i=0;i<dX.length;i++){dX[i].onFocusChanged();
}},moveFocusedCell:function(ea,eb){var ef=this.__zD;
var eg=this.__zE;
if(ef==null||eg==null){return;
}
if(ea!=0){var ee=this.getTableColumnModel();
var x=ee.getVisibleX(ef);
var ed=ee.getVisibleColumnCount();
x=qx.lang.Number.limit(x+ea,0,ed-1);
ef=ee.getVisibleColumnAtX(x);
}
if(eb!=0){var ec=this.getTableModel();
eg=qx.lang.Number.limit(eg+eb,0,ec.getRowCount()-1);
}this.setFocusedCell(ef,eg,true);
},scrollCellVisible:function(eh,ei){var ej=this.getContentElement().getDomElement();
if(!ej){this.addListenerOnce(bG,function(){this.scrollCellVisible(eh,ei);
},this);
}var ek=this.getTableColumnModel();
var x=ek.getVisibleX(eh);
var el=this._getMetaColumnAtColumnX(x);

if(el!=-1){this.getPaneScroller(el).scrollCellVisible(eh,ei);
}},isEditing:function(){if(this.__zD!=null){var x=this.getTableColumnModel().getVisibleX(this.__zD);
var em=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(em).isEditing();
}return false;
},startEditing:function(){if(this.__zD!=null){var x=this.getTableColumnModel().getVisibleX(this.__zD);
var eo=this._getMetaColumnAtColumnX(x);
var en=this.getPaneScroller(eo).startEditing();
return en;
}return false;
},stopEditing:function(){if(this.__zD!=null){var x=this.getTableColumnModel().getVisibleX(this.__zD);
var ep=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(ep).stopEditing();
}},cancelEditing:function(){if(this.__zD!=null){var x=this.getTableColumnModel().getVisibleX(this.__zD);
var eq=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(eq).cancelEditing();
}},updateContent:function(){var er=this._getPaneScrollerArr();

for(var i=0;i<er.length;i++){er[i].getTablePane().updateContent(true);
}},blockHeaderElements:function(){var es=this._getPaneScrollerArr();

for(var i=0;i<es.length;i++){es[i].getHeader().getBlocker().blockContent(20);
}this.getChildControl(o).getBlocker().blockContent(20);
},unblockHeaderElements:function(){var et=this._getPaneScrollerArr();

for(var i=0;i<et.length;i++){et[i].getHeader().getBlocker().unblockContent();
}this.getChildControl(o).getBlocker().unblockContent();
},_getMetaColumnAtPageX:function(eu){var ev=this._getPaneScrollerArr();

for(var i=0;i<ev.length;i++){var ew=ev[i].getContainerLocation();

if(eu>=ew.left&&eu<=ew.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(ex){var ez=this.getMetaColumnCounts();
var eA=0;

for(var i=0;i<ez.length;i++){var ey=ez[i];
eA+=ey;

if(ey==-1||ex<eA){return i;
}}return -1;
},_updateStatusBar:function(){var eB=this.getTableModel();

if(this.getStatusBarVisible()){var eC=this.getSelectionModel().getSelectedCount();
var eE=eB.getRowCount();
var eD;

if(eE>=0){if(eC==0){eD=this.trn(E,L,eE,eE);
}else{eD=this.trn(B,Y,eE,eC,eE);
}}
if(this.__zG){if(eD){eD+=this.__zG;
}else{eD=this.__zG;
}}
if(eD){this.getChildControl(k).setValue(eD);
}}},_updateScrollerWidths:function(){var eF=this._getPaneScrollerArr();

for(var i=0;i<eF.length;i++){var eH=(i==(eF.length-1));
var eI=eF[i].getTablePaneModel().getTotalWidth();
eF[i].setPaneWidth(eI);
var eG=eH?1:0;
eF[i].setLayoutProperties({flex:eG});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var eM=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var eO=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var eJ=this._getPaneScrollerArr();
var eL=false;
var eN=false;

for(var i=0;i<eJ.length;i++){var eP=(i==(eJ.length-1));
var eK=eJ[i].getNeededScrollBars(eL,!eP);

if(eK&eM){eL=true;
}
if(eP&&(eK&eO)){eN=true;
}}for(var i=0;i<eJ.length;i++){var eP=(i==(eJ.length-1));
eJ[i].setHorizontalScrollBarVisible(eL);
if(eP){if(this.__zL==null){this.__zL=eJ[i].getVerticalScrollBarVisible();
this.__lh=qx.event.Timer.once(function(){this.__zL=null;
this.__lh=null;
},this,0);
}}eJ[i].setVerticalScrollBarVisible(eP&&eN);
if(eP&&eN!=this.__zL){this.fireDataEvent(bf,eN);
}}},_initColumnMenu:function(){var eS=this.getTableModel();
var eT=this.getTableColumnModel();
var eU=this.getChildControl(o);
eU.empty();
var eR=eU.getMenu();
var eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(bz,eV);
this.__zI={};

for(var eW=0,l=eS.getColumnCount();eW<l;eW++){var eQ=eU.factory(M,{text:eS.getColumnName(eW),column:eW,bVisible:eT.isColumnVisible(eW)});
qx.core.Assert.assertInterface(eQ,qx.ui.table.IColumnMenuItem);
eQ.addListener(u,this._createColumnVisibilityCheckBoxHandler(eW),this);
this.__zI[eW]=eQ;
}eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(y,eV);
},_createColumnVisibilityCheckBoxHandler:function(eX){return function(eY){var fa=this.getTableColumnModel();
fa.setColumnVisible(eX,eY.getData());
};
},setColumnWidth:function(fb,fc){this.getTableColumnModel().setColumnWidth(fb,fc);
},_onResize:function(){this.fireEvent(z);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(fd,fe,self,ff){if(this.self(arguments).__zF[fd]){var fh=[fd];

for(var i=0,fg=this._getPaneScrollerArr();i<fg.length;i++){fh.push(fg[i].addListener.apply(fg[i],arguments));
}return fh.join(bE);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,fd,fe,self,ff);
}},removeListener:function(fi,fj,self,fk){if(this.self(arguments).__zF[fi]){for(var i=0,fl=this._getPaneScrollerArr();i<fl.length;i++){fl[i].removeListener.apply(fl[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,fi,fj,self,fk);
}},removeListenerById:function(fm){var fq=fm.split(bE);
var fp=fq.shift();

if(this.self(arguments).__zF[fp]){var fo=true;

for(var i=0,fn=this._getPaneScrollerArr();i<fn.length;i++){fo=fn[i].removeListenerById.call(fn[i],fq[i])&&fo;
}return fo;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,fm);
}},destroy:function(){this.getChildControl(o).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Environment.get(bF)){qx.locale.Manager.getInstance().removeListener(d,this._onChangeLocale,this);
}var fs=this.getSelectionModel();

if(fs){fs.dispose();
}var fr=this.getDataRowRenderer();

if(fr){fr.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(H,bt,bD,bD,bj,U);
this._disposeMap(V);
}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var n="pressed",m="hovered",l="changeVisibility",k="qx.ui.menu.Menu",j="submenu",i="Enter",h="abandoned",g="contextmenu",f="changeMenu",d="qx.ui.form.MenuButton",a="visible",c="left",b="_applyMenu";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(o,p,q){qx.ui.form.Button.call(this,o,p);
if(q!=null){this.setMenu(q);
}},properties:{menu:{check:k,nullable:true,apply:b,event:f}},members:{_applyVisibility:function(r,s){qx.ui.form.Button.prototype._applyVisibility.call(this,r,s);
var t=this.getMenu();

if(r!=a&&t){t.hide();
}},_applyMenu:function(u,v){if(v){v.removeListener(l,this._onMenuChange,this);
v.resetOpener();
}
if(u){u.addListener(l,this._onMenuChange,this);
u.setOpener(this);
u.removeState(j);
u.removeState(g);
}},open:function(w){var x=this.getMenu();

if(x){qx.ui.menu.Manager.getInstance().hideAll();
x.setOpener(this);
x.open();
if(w){var y=x.getSelectables()[0];

if(y){x.setSelectedButton(y);
}}}},_onMenuChange:function(e){var z=this.getMenu();

if(z.isVisible()){this.addState(n);
}else{this.removeState(n);
}},_onMouseDown:function(e){qx.ui.form.Button.prototype._onMouseDown.call(this,e);
if(e.getButton()!=c){return;
}var A=this.getMenu();

if(A){if(!A.isVisible()){this.open();
}else{A.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(m);
},_onMouseOut:function(e){this.removeState(m);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:this.removeState(h);
this.addState(n);
var B=this.getMenu();

if(B){if(!B.isVisible()){this.open();
}else{B.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}}});
})();
(function(){var v="keypress",u="qx.debug",t="interval",s="keydown",r="mousedown",q="keyup",p="__nA",o="blur",n="Enter",m="Up",d="__or",l="Escape",h="event.touch",c="qx.ui.menu.Manager",b="Left",g="Down",f="Right",j="__oq",a="singleton",k="Space";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nA=[];
var w=document.body;
var x=qx.event.Registration;
x.addListener(window.document.documentElement,r,this._onMouseDown,this,true);
x.addListener(w,s,this._onKeyUpDown,this,true);
x.addListener(w,q,this._onKeyUpDown,this,true);
x.addListener(w,v,this._onKeyPress,this,true);
if(!qx.core.Environment.get(h)){qx.bom.Element.addListener(window,o,this.hideAll,this);
}this.__oq=new qx.event.Timer;
this.__oq.addListener(t,this._onOpenInterval,this);
this.__or=new qx.event.Timer;
this.__or.addListener(t,this._onCloseInterval,this);
},members:{__os:null,__ot:null,__oq:null,__or:null,__nA:null,_getChild:function(y,z,A,B){var C=y.getChildren();
var length=C.length;
var D;

for(var i=z;i<length&&i>=0;i+=A){D=C[i];

if(D.isEnabled()&&!D.isAnonymous()&&D.isVisible()){return D;
}}
if(B){i=i==length?0:length-1;

for(;i!=z;i+=A){D=C[i];

if(D.isEnabled()&&!D.isAnonymous()&&D.isVisible()){return D;
}}}return null;
},_isInMenu:function(E){while(E){if(E instanceof qx.ui.menu.Menu){return true;
}E=E.getLayoutParent();
}return false;
},_getMenuButton:function(F){while(F){if(F instanceof qx.ui.menu.AbstractButton){return F;
}F=F.getLayoutParent();
}return null;
},add:function(G){if(qx.core.Environment.get(u)){if(!(G instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+G);
}}var H=this.__nA;
H.push(G);
G.setZIndex(1e6+H.length);
},remove:function(I){if(qx.core.Environment.get(u)){if(!(I instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+I);
}}var J=this.__nA;

if(J){qx.lang.Array.remove(J,I);
}},hideAll:function(){var K=this.__nA;

if(K){for(var i=K.length-1;i>=0;i--){K[i].exclude();
}}},getActiveMenu:function(){var L=this.__nA;
return L.length>0?L[L.length-1]:null;
},scheduleOpen:function(M){this.cancelClose(M);
if(M.isVisible()){if(this.__os){this.cancelOpen(this.__os);
}}else if(this.__os!=M){this.__os=M;
this.__oq.restartWith(M.getOpenInterval());
}},scheduleClose:function(N){this.cancelOpen(N);
if(!N.isVisible()){if(this.__ot){this.cancelClose(this.__ot);
}}else if(this.__ot!=N){this.__ot=N;
this.__or.restartWith(N.getCloseInterval());
}},cancelOpen:function(O){if(this.__os==O){this.__oq.stop();
this.__os=null;
}},cancelClose:function(P){if(this.__ot==P){this.__or.stop();
this.__ot=null;
}},_onOpenInterval:function(e){this.__oq.stop();
this.__os.open();
this.__os=null;
},_onCloseInterval:function(e){this.__or.stop();
this.__ot.exclude();
this.__ot=null;
},_onMouseDown:function(e){var Q=e.getTarget();
Q=qx.ui.core.Widget.getWidgetByElement(Q,true);
if(Q==null){this.hideAll();
return;
}if(Q.getMenu&&Q.getMenu()&&Q.getMenu().isVisible()){return;
}if(this.__nA.length>0&&!this._isInMenu(Q)){this.hideAll();
}},__ou:{"Enter":1,"Space":1},__ov:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var R=this.getActiveMenu();

if(!R){return;
}var S=e.getKeyIdentifier();

if(this.__ov[S]||(this.__ou[S]&&R.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var T=this.getActiveMenu();

if(!T){return;
}var U=e.getKeyIdentifier();
var W=this.__ov[U];
var V=this.__ou[U];

if(W){switch(U){case m:this._onKeyPressUp(T);
break;
case g:this._onKeyPressDown(T);
break;
case b:this._onKeyPressLeft(T);
break;
case f:this._onKeyPressRight(T);
break;
case l:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(V){var X=T.getSelectedButton();

if(X){switch(U){case n:this._onKeyPressEnter(T,X,e);
break;
case k:this._onKeyPressSpace(T,X,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(Y){var ba=Y.getSelectedButton();
var bb=Y.getChildren();
var bd=ba?Y.indexOf(ba)-1:bb.length-1;
var bc=this._getChild(Y,bd,-1,true);
if(bc){Y.setSelectedButton(bc);
}else{Y.resetSelectedButton();
}},_onKeyPressDown:function(be){var bf=be.getSelectedButton();
var bh=bf?be.indexOf(bf)+1:0;
var bg=this._getChild(be,bh,1,true);
if(bg){be.setSelectedButton(bg);
}else{be.resetSelectedButton();
}},_onKeyPressLeft:function(bi){var bn=bi.getOpener();

if(!bn){return;
}if(bn instanceof qx.ui.menu.AbstractButton){var bk=bn.getLayoutParent();
bk.resetOpenedButton();
bk.setSelectedButton(bn);
}else if(bn instanceof qx.ui.menubar.Button){var bm=bn.getMenuBar().getMenuButtons();
var bj=bm.indexOf(bn);
if(bj===-1){return;
}var bo=null;
var length=bm.length;

for(var i=1;i<=length;i++){var bl=bm[(bj-i+length)%length];

if(bl.isEnabled()&&bl.isVisible()){bo=bl;
break;
}}
if(bo&&bo!=bn){bo.open(true);
}}},_onKeyPressRight:function(bp){var br=bp.getSelectedButton();
if(br){var bq=br.getMenu();

if(bq){bp.setOpenedButton(br);
var bx=this._getChild(bq,0,1);

if(bx){bq.setSelectedButton(bx);
}return;
}}else if(!bp.getOpenedButton()){var bx=this._getChild(bp,0,1);

if(bx){bp.setSelectedButton(bx);

if(bx.getMenu()){bp.setOpenedButton(bx);
}return;
}}var bv=bp.getOpener();
if(bv instanceof qx.ui.menu.Button&&br){while(bv){bv=bv.getLayoutParent();

if(bv instanceof qx.ui.menu.Menu){bv=bv.getOpener();

if(bv instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bv){return;
}}if(bv instanceof qx.ui.menubar.Button){var bu=bv.getMenuBar().getMenuButtons();
var bs=bu.indexOf(bv);
if(bs===-1){return;
}var bw=null;
var length=bu.length;

for(var i=1;i<=length;i++){var bt=bu[(bs+i)%length];

if(bt.isEnabled()&&bt.isVisible()){bw=bt;
break;
}}
if(bw&&bw!=bv){bw.open(true);
}}},_onKeyPressEnter:function(by,bz,e){if(bz.hasListener(v)){var bA=e.clone();
bA.setBubbles(false);
bA.setTarget(bz);
bz.dispatchEvent(bA);
}this.hideAll();
},_onKeyPressSpace:function(bB,bC,e){if(bC.hasListener(v)){var bD=e.clone();
bD.setBubbles(false);
bD.setTarget(bC);
bC.dispatchEvent(bD);
}}},destruct:function(){var bF=qx.event.Registration;
var bE=document.body;
bF.removeListener(window.document.documentElement,r,this._onMouseDown,this,true);
bF.removeListener(bE,s,this._onKeyUpDown,this,true);
bF.removeListener(bE,q,this._onKeyUpDown,this,true);
bF.removeListener(bE,v,this._onKeyPress,this,true);
this._disposeObjects(j,d);
this._disposeArray(p);
}});
})();
(function(){var l="slidebar",k="Integer",j="resize",h="qx.ui.core.Widget",g="selected",f="visible",d="Boolean",c="mouseout",b="excluded",a="menu",A="_applySelectedButton",z="_applySpacingY",y="_blocker",x="_applyCloseInterval",w="_applyBlockerColor",v="_applyIconColumnWidth",u="mouseover",t="_applyArrowColumnWidth",s="qx.ui.menu.Menu",r="Color",p="Number",q="_applyOpenInterval",n="_applySpacingX",o="_applyBlockerOpacity",m="_applyOpenedButton";
qx.Class.define(s,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var B=this.getApplicationRoot();
B.add(this);
this.addListener(u,this._onMouseOver);
this.addListener(c,this._onMouseOut);
this.addListener(j,this._onResize,this);
B.addListener(j,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(B);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:a},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:b},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:k,apply:n,init:0,themeable:true},spacingY:{check:k,apply:z,init:0,themeable:true},iconColumnWidth:{check:k,init:0,themeable:true,apply:v},arrowColumnWidth:{check:k,init:0,themeable:true,apply:t},blockerColor:{check:r,init:null,nullable:true,apply:w,themeable:true},blockerOpacity:{check:p,init:1,apply:o,themeable:true},selectedButton:{check:h,nullable:true,apply:A},openedButton:{check:h,nullable:true,apply:m},opener:{check:h,nullable:true},openInterval:{check:k,themeable:true,init:250,apply:q},closeInterval:{check:k,themeable:true,init:250,apply:x},blockBackground:{check:d,themeable:true,init:false}},members:{__qz:null,__qA:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__qC();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__qC();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(C){this.placeToPoint(C);
this.__qC();
this.show();
this._placementTarget=C;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var D=[];
var E=this.getChildren();

for(var i=0;i<E.length;i++){if(E[i].isEnabled()){D.push(E[i]);
}}return D;
},_applyIconColumnWidth:function(F,G){this._getMenuLayout().setIconColumnWidth(F);
},_applyArrowColumnWidth:function(H,I){this._getMenuLayout().setArrowColumnWidth(H);
},_applySpacingX:function(J,K){this._getMenuLayout().setColumnSpacing(J);
},_applySpacingY:function(L,M){this._getMenuLayout().setSpacing(L);
},_applyVisibility:function(N,O){qx.ui.core.Widget.prototype._applyVisibility.call(this,N,O);
var P=qx.ui.menu.Manager.getInstance();

if(N===f){P.add(this);
var Q=this.getParentMenu();

if(Q){Q.setOpenedButton(this.getOpener());
}}else if(O===f){P.remove(this);
var Q=this.getParentMenu();

if(Q&&Q.getOpenedButton()==this.getOpener()){Q.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__qB();
},__qB:function(){if(this.isVisible()){if(this.getBlockBackground()){var R=this.getZIndex();
this._blocker.blockContent(R-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var S=this.getOpener();

if(!S||!(S instanceof qx.ui.menu.AbstractButton)){return null;
}
if(S&&S.getContextMenu()===this){return null;
}
while(S&&!(S instanceof qx.ui.menu.Menu)){S=S.getLayoutParent();
}return S;
},_applySelectedButton:function(T,U){if(U){U.removeState(g);
}
if(T){T.addState(g);
}},_applyOpenedButton:function(V,W){if(W&&W.getMenu()){W.getMenu().exclude();
}
if(V){V.getMenu().open();
}},_applyBlockerColor:function(X,Y){this._blocker.setColor(X);
},_applyBlockerOpacity:function(ba,bb){this._blocker.setOpacity(ba);
},getChildrenContainer:function(){return this.getChildControl(l,true)||this;
},_createChildControlImpl:function(bc,bd){var be;

switch(bc){case l:var be=new qx.ui.menu.MenuSlideBar();
var bg=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bf=be.getLayout();
be.setLayout(bg);
bf.dispose();
var bh=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bh.length;i++){be.add(bh[i]);
}this.removeListener(j,this._onResize,this);
be.getChildrenContainer().addListener(j,this._onResize,this);
this._add(be);
break;
}return be||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bc);
},_getMenuLayout:function(){if(this.hasChildControl(l)){return this.getChildControl(l).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(l)){return this.getChildControl(l).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__qC:function(){var bj=this._getMenuBounds();

if(!bj){this.addListenerOnce(j,this.__qC,this);
return;
}var bi=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var bk=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(bj.height+top);
this.moveTo(bk,0);
});
}else if(top+bj.height>bi){this._assertSlideBar(function(){this.setHeight(bi-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bl){if(this.hasChildControl(l)){return bl.call(this);
}this.__qA=bl;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(l);

if(this.__qA){this.__qA.call(this);
delete this.__qA;
}},_onResize:function(){if(this.isVisible()){var bm=this._placementTarget;

if(!bm){return;
}else if(bm instanceof qx.ui.core.Widget){this.placeToWidget(bm);
}else if(bm.top!==undefined){this.placeToPoint(bm);
}else{throw new Error("Unknown target: "+bm);
}this.__qC();
}},_onMouseOver:function(e){var bo=qx.ui.menu.Manager.getInstance();
bo.cancelClose(this);
var bp=e.getTarget();

if(bp.isEnabled()&&bp instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(bp);
var bn=bp.getMenu&&bp.getMenu();

if(bn){bn.setOpener(bp);
bo.scheduleOpen(bn);
this.__qz=bn;
}else{var bq=this.getOpenedButton();

if(bq){bo.scheduleClose(bq.getMenu());
}
if(this.__qz){bo.cancelOpen(this.__qz);
this.__qz=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var br=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bs=this.getOpenedButton();
bs?this.setSelectedButton(bs):this.resetSelectedButton();
if(bs){br.cancelClose(bs.getMenu());
}if(this.__qz){br.cancelOpen(this.__qz);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(j,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(y);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__pm:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__pm=[0,0,0,0];
var m=this.getColumnSpacing();
var k=0;
var f=0;
for(var i=0,l=q.length;i<l;i++){o=q[i];

if(o.isAnonymous()){continue;
}g=o.getChildrenSizes();

for(var n=0;n<g.length;n++){if(e!=null&&n==e&&g[e+1]==0){k=Math.max(k,g[n]);
}else{h[n]=Math.max(h[n],g[n]);
}}var d=q[i].getInsets();
f=Math.max(f,d.left+d.right);
}if(e!=null&&h[e]+m+h[e+1]<k){h[e]=k-h[e+1]-m;
}if(k==0){j=m*2;
}else{j=m*3;
}if(h[0]==0){h[0]=this.getIconColumnWidth();
}if(h[3]==0){h[3]=this.getArrowColumnWidth();
}var p=qx.ui.layout.VBox.prototype._computeSizeHint.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__pm||null;
}},destruct:function(){this.__pm=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="String",l="changeCommand",k="qx.ui.menu.Menu",d="",j="qx.ui.menu.AbstractButton",h="keypress",c="_applyIcon",b="_onMouseUp",g="click",f="abstract",i="_applyLabel",a="_applyMenu";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:f,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(g,this._onClick);
this.addListener(h,this._onKeyPress);
qx.log.Logger.deprecateMethodOverriding(this,qx.ui.menu.AbstractButton,b);
this.addListener(l,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:m,apply:i,nullable:true},menu:{check:k,apply:a,nullable:true,dereference:true},icon:{check:m,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(u,v){var w;

switch(u){case t:w=new qx.ui.basic.Image;
w.setAnonymous(true);
this._add(w,{column:0});
break;
case s:w=new qx.ui.basic.Label;
w.setAnonymous(true);
this._add(w,{column:1});
break;
case q:w=new qx.ui.basic.Label;
w.setAnonymous(true);
this._add(w,{column:2});
break;
case r:w=new qx.ui.basic.Image;
w.setAnonymous(true);
this._add(w,{column:3});
break;
}return w||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,u);
},_forwardStates:{selected:1},getChildrenSizes:function(){var x=0,y=0,z=0,D=0;

if(this._isChildControlVisible(t)){var E=this.getChildControl(t);
x=E.getMarginLeft()+E.getSizeHint().width+E.getMarginRight();
}
if(this._isChildControlVisible(s)){var B=this.getChildControl(s);
y=B.getMarginLeft()+B.getSizeHint().width+B.getMarginRight();
}
if(this._isChildControlVisible(q)){var A=this.getChildControl(q);
z=A.getMarginLeft()+A.getSizeHint().width+A.getMarginRight();
}
if(this._isChildControlVisible(r)){var C=this.getChildControl(r);
D=C.getMarginLeft()+C.getSizeHint().width+C.getMarginRight();
}return [x,y,z,D];
},_onMouseUp:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
},_onClick:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var H=e.getData();
if(H==null){return;
}
if(qx.core.Environment.get(o)){var F=e.getOldData();

if(!F){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!H){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var G=H!=null?H.toString():d;
this.getChildControl(q).setValue(G);
},_onChangeLocale:qx.core.Environment.select(o,{"true":function(e){var I=this.getCommand();

if(I!=null){this.getChildControl(q).setValue(I.toString());
}},"false":null}),_applyIcon:function(J,K){if(J){this._showChildControl(t).setSource(J);
}else{this._excludeChildControl(t);
}},_applyLabel:function(L,M){if(L){this._showChildControl(s).setValue(L);
}else{this._excludeChildControl(s);
}},_applyMenu:function(N,O){if(O){O.resetOpener();
O.removeState(n);
}
if(N){this._showChildControl(r);
N.setOpener(this);
N.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){this.removeListener(l,this._onChangeCommand,this);

if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Environment.get(o)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var g="qx.ui.menu.ButtonLayout",f="qx.debug",e="column",d="left",c="middle",b="' is not supported by the MenuButton layout!",a="The property '";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Environment.select(f,{"true":function(h,name,j){this.assert(name==e,a+name+b);
},"false":null}),renderLayout:function(k,m){var w=this._getLayoutChildren();
var v;
var o;
var p=[];

for(var i=0,l=w.length;i<l;i++){v=w[i];
o=v.getLayoutProperties().column;
p[o]=v;
}var u=this.__rh(w[0]);
var x=u.getColumnSizes();
var r=u.getSpacingX();
var q=qx.lang.Array.sum(x)+r*(x.length-1);

if(q<k){x[1]+=k-q;
}var y=0,top=0;
var s=qx.ui.layout.Util;

for(var i=0,l=x.length;i<l;i++){v=p[i];

if(v){var n=v.getSizeHint();
var top=s.computeVerticalAlignOffset(v.getAlignY()||c,n.height,m,0,0);
var t=s.computeHorizontalAlignOffset(v.getAlignX()||d,n.width,x[i],v.getMarginLeft(),v.getMarginRight());
v.renderLayout(y+t,top,n.width,n.height);
}y+=x[i]+r;
}},__rh:function(z){while(!(z instanceof qx.ui.menu.Menu)){z=z.getLayoutParent();
}return z;
},_computeSizeHint:function(){var C=this._getLayoutChildren();
var B=0;
var D=0;

for(var i=0,l=C.length;i<l;i++){var A=C[i].getSizeHint();
D+=A.width;
B=Math.max(B,A.height);
}return {width:D,height:B};
}}});
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
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){qx.ui.container.SlideBar.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g,h){var i;

switch(g){case c:i=new qx.ui.form.HoverButton();
i.addListener(f,this._onExecuteForward,this);
this._addAt(i,2);
break;
case e:i=new qx.ui.form.HoverButton();
i.addListener(f,this._onExecuteBackward,this);
this._addAt(i,0);
break;
}return i||qx.ui.container.SlideBar.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="interval",d="__lh",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__lh=new qx.event.AcceleratingTimer();
this.__lh.addListener(f,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__lh:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__lh.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__lh.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__lh.stop();
}}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var h="pressed",g="hovered",f="inherit",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(i,j,k){qx.ui.form.MenuButton.call(this,i,j,k);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(l){qx.ui.form.MenuButton.prototype.open.call(this,l);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var m=this.getMenu();
var menubar=this.getMenuBar();

if(m.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(m);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==m){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var n=this.getMenu();

if(n&&n.isVisible()&&!this.hasState(h)){this.addState(h);
}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var w="visible",v="excluded",u="resize",t="qx.event.type.Data",s="both",r="qx.ui.menu.Menu",q="_applySpacing",p="showItem",o="Boolean",n="icon",d="label",m="qx.ui.core.Widget",h="_applyOverflowIndicator",c="_applyOverflowHandling",b="changeShow",g="Integer",f="qx.ui.toolbar.ToolBar",j="hideItem",a="toolbar",k="changeOpenMenu";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__oE=[];
this.__oF=[];
},properties:{appearance:{refine:true,init:a},openMenu:{check:r,event:k,nullable:true},show:{init:s,check:[s,d,n],inheritable:true,event:b},spacing:{nullable:true,check:g,themeable:true,apply:q},overflowIndicator:{check:m,nullable:true,apply:h},overflowHandling:{init:false,check:o,apply:c}},events:{"hideItem":t,"showItem":t},members:{__oE:null,__oF:null,_computeSizeHint:function(){var z=qx.ui.core.Widget.prototype._computeSizeHint.call(this);

if(true&&this.getOverflowHandling()){var x=0;
var y=this.getOverflowIndicator();

if(y){x=y.getSizeHint().width+this.getSpacing();
}z.minWidth=x;
}return z;
},_onResize:function(e){this._recalculateOverflow(e.getData().width);
},_recalculateOverflow:function(A,B){if(!this.getOverflowHandling()){return;
}B=B||this.getSizeHint().width;
var C=this.getOverflowIndicator();
var I=0;

if(C){I=C.getSizeHint().width;
}
if(A==undefined&&this.getBounds()!=null){A=this.getBounds().width;
}if(A==undefined){return ;
}if(A<B){do{var J=this._getNextToHide();
if(!J){return;
}var L=J.getMarginLeft()+J.getMarginRight();
L=Math.max(L,this.getSpacing());
var G=J.getSizeHint().width+L;
this.__oH(J);
B-=G;
if(C&&C.getVisibility()!=w){C.setVisibility(w);
B+=I;
var E=C.getMarginLeft()+C.getMarginRight();
B+=Math.max(E,this.getSpacing());
}}while(B>A);
}else if(this.__oE.length>0){do{var M=this.__oE[0];
if(M){var L=M.getMarginLeft()+M.getMarginRight();
L=Math.max(L,this.getSpacing());
if(M.getDecoratorElement()==null){M.syncAppearance();
M.invalidateLayoutCache();
}var F=M.getSizeHint().width;
var K=false;
if(this.__oE.length==1&&I>0){var D=L-this.getSpacing();
var H=B-I+F+D;
K=A>H;
}if(A>B+F+L||K){this.__oG(M);
B+=F;
if(C&&this.__oE.length==0){C.setVisibility(v);
}}else{return;
}}}while(A>=B&&this.__oE.length>0);
}},__oG:function(N){N.setVisibility(w);
this.__oE.shift();
this.fireDataEvent(p,N);
},__oH:function(O){if(!O){return;
}this.__oE.unshift(O);
O.setVisibility(v);
this.fireDataEvent(j,O);
},_getNextToHide:function(){for(var i=this.__oF.length-1;i>=0;i--){var P=this.__oF[i];
if(P&&P.getVisibility&&P.getVisibility()==w){return P;
}}var Q=this._getChildren();

for(var i=Q.length-1;i>=0;i--){var R=Q[i];
if(R==this.getOverflowIndicator()){continue;
}if(R.getVisibility&&R.getVisibility()==w){return R;
}}},setRemovePriority:function(S,T,U){if(!U&&this.__oF[T]!=undefined){throw new Error("Priority already in use!");
}this.__oF[T]=S;
},_applyOverflowHandling:function(V,W){this.invalidateLayoutCache();
var parent=this.getLayoutParent();

if(parent){parent.invalidateLayoutCache();
}var Y=this.getBounds();

if(Y&&Y.width){this._recalculateOverflow(Y.width);
}if(V){this.addListener(u,this._onResize,this);
}else{this.removeListener(u,this._onResize,this);
var X=this.getOverflowIndicator();

if(X){X.setVisibility(v);
}for(var i=0;i<this.__oE.length;i++){this.__oE[i].setVisibility(w);
}this.__oE=[];
}},_applyOverflowIndicator:function(ba,bb){if(bb){this._remove(bb);
}
if(ba){if(this._indexOf(ba)==-1){throw new Error("Widget must be child of the toolbar.");
}ba.setVisibility(v);
}},__oI:false,_setAllowMenuOpenHover:function(bc){this.__oI=bc;
},_isAllowMenuOpenHover:function(){return this.__oI;
},_applySpacing:function(bd,be){var bf=this._getLayout();
bd==null?bf.resetSpacing():bf.setSpacing(bd);
},_add:function(bg,bh){qx.ui.core.Widget.prototype._add.call(this,bg,bh);
var bi=this.getSizeHint().width+bg.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bi);
},_addAt:function(bj,bk,bl){qx.ui.core.Widget.prototype._addAt.call(this,bj,bk,bl);
var bm=this.getSizeHint().width+bj.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bm);
},_addBefore:function(bn,bo,bp){qx.ui.core.Widget.prototype._addBefore.call(this,bn,bo,bp);
var bq=this.getSizeHint().width+bn.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bq);
},_addAfter:function(br,bs,bt){qx.ui.core.Widget.prototype._addAfter.call(this,br,bs,bt);
var bu=this.getSizeHint().width+br.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bu);
},_remove:function(bv){qx.ui.core.Widget.prototype._remove.call(this,bv);
var bw=this.getSizeHint().width-bv.getSizeHint().width-2*this.getSpacing();
this._recalculateOverflow(null,bw);
},_removeAt:function(bx){var bz=this._getChildren()[bx];
qx.ui.core.Widget.prototype._removeAt.call(this,bx);
var by=this.getSizeHint().width-bz.getSizeHint().width-2*this.getSpacing();
this._recalculateOverflow(null,by);
},_removeAll:function(){qx.ui.core.Widget.prototype._removeAll.call(this);
this._recalculateOverflow(null,0);
},addSpacer:function(){var bA=new qx.ui.core.Spacer;
this._add(bA,{flex:1});
return bA;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var bC=this.getChildren();
var bB=[];
var bD;

for(var i=0,l=bC.length;i<l;i++){bD=bC[i];

if(bD instanceof qx.ui.menubar.Button){bB.push(bD);
}else if(bD instanceof qx.ui.toolbar.Part){bB.push.apply(bB,bD.getMenuButtons());
}}return bB;
}},destruct:function(){if(this.hasListener(u)){this.removeListener(u,this._onResize,this);
}}});
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
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var p="middle",o="left",n="right",m="container",k="handle",j="both",h="Integer",g="qx.ui.toolbar.Part",f="icon",e="label",b="syncAppearance",d="changeShow",c="_applySpacing",a="toolbar/part";
qx.Class.define(g,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,e,f],inheritable:true,event:d},spacing:{nullable:true,check:h,themeable:true,apply:c}},members:{_createChildControlImpl:function(q,r){var s;

switch(q){case k:s=new qx.ui.basic.Image();
s.setAlignY(p);
this._add(s);
break;
case m:s=new qx.ui.toolbar.PartContainer();
s.addListener(b,this.__nf,this);
this._add(s);
break;
}return s||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,q);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(t,u){var v=this.getChildControl(m).getLayout();
t==null?v.resetSpacing():v.setSpacing(t);
},__nf:function(){var w=this.getChildrenContainer().getChildren();

for(var i=0;i<w.length;i++){if(i==0&&i!=w.length-1){w[i].addState(o);
w[i].removeState(n);
w[i].removeState(p);
}else if(i==w.length-1&&i!=0){w[i].addState(n);
w[i].removeState(o);
w[i].removeState(p);
}else if(i==0&&i==w.length-1){w[i].removeState(o);
w[i].removeState(p);
w[i].removeState(n);
}else{w[i].addState(p);
w[i].removeState(n);
w[i].removeState(o);
}}},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var y=this.getChildren();
var x=[];
var z;

for(var i=0,l=y.length;i<l;i++){z=y[i];

if(z instanceof qx.ui.menubar.Button){x.push(z);
}}return x;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){qx.ui.menu.AbstractButton.call(this);
if(c!=null){this.setLabel(c);
}
if(d!=null){this.setIcon(d);
}
if(f!=null){this.setCommand(f);
}
if(g!=null){this.setMenu(g);
}},properties:{appearance:{refine:true,init:a}},members:{_onClick:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__na=new qx.ui.core.Blocker(this);
},members:{__zI:null,__na:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
this.setMenu(j);
return j;
case f:var m=new qx.ui.table.columnmenu.MenuItem(h.text);
m.setVisible(h.bVisible);
this.getMenu().add(m);
return m;
case c:var k=new qx.ui.menu.Button(h.text);
k.set({appearance:e});
return k;
case d:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+g);
}},getBlocker:function(){return this.__na;
},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}},destruct:function(){this.__na.dispose();
}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var m="checked",l="menu-checkbox",k="Boolean",j="label",i="_applyValue",h="value",g="changeValue",f="toolTipText",d="enabled",c="qx.ui.menu.CheckBox",a="menu",b="execute";
qx.Class.define(c,{extend:qx.ui.menu.AbstractButton,implement:[qx.ui.form.IBooleanForm],construct:function(n,o){qx.ui.menu.AbstractButton.call(this);
if(n!=null){if(n.translate){this.setLabel(n.translate());
}else{this.setLabel(n);
}}
if(o!=null){this.setMenu(o);
}this.addListener(b,this._onExecute,this);
},properties:{appearance:{refine:true,init:l},value:{check:k,init:false,apply:i,event:g,nullable:true}},members:{_bindableProperties:[d,j,f,h,a],_applyValue:function(p,q){p?this.addState(m):this.removeState(m);
},_onExecute:function(e){this.toggleValue();
},_onClick:function(e){if(e.isLeftPressed()){this.execute();
}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__zO:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(b){return true;
},getCellEditorValue:function(c){return true;
}}});
})();
(function(){var f="",e="Function",d="abstract",c="number",b="appear",a="qx.ui.table.celleditor.AbstractField";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,type:d,properties:{validationFunction:{check:e,nullable:true,init:null}},members:{_createEditor:function(){throw new Error("Abstract method call!");
},createCellEditor:function(g){var h=this._createEditor();
h.originalValue=g.value;

if(g.value===null||g.value===undefined){g.value=f;
}h.setValue(f+g.value);
h.addListener(b,function(){h.selectAllText();
});
return h;
},getCellEditorValue:function(i){var k=i.getValue();
var j=this.getValidationFunction();

if(j){k=j(k,i.originalValue);
}
if(typeof i.originalValue==c){k=parseFloat(k);
}return k;
}}});
})();
(function(){var c="number",b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";
qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{getCellEditorValue:function(d){var f=d.getValue();
var e=this.getValidationFunction();

if(e){f=e(f,d.originalValue);
}
if(typeof d.originalValue==c){if(f!=null){f=parseFloat(f);
}}return f;
},_createEditor:function(){var g=new qx.ui.form.TextField();
g.setAppearance(a);
return g;
}}});
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
(function(){var k="showingPlaceholder",j="",i="none",h="color",g="qx.dynlocale",f="Boolean",d="A",c="qx.event.type.Data",b="readonly",a="placeholder",be="input",bd="focusin",bc="visibility",bb="engine.name",ba="focusout",Y="changeLocale",X="hidden",W="absolute",V="readOnly",U="text",r="_applyTextAlign",s="px",p="RegExp",q=")",n="syncAppearance",o="changeValue",l="engine.version",m="change",v="changeStatus",w="textAlign",E="focused",C="center",L="visible",G="disabled",Q="url(",O="String",y="resize",T="qx.ui.form.AbstractField",S="transparent",R="spellcheck",x="false",A="right",B="PositiveInteger",D="gecko",F="abstract",H="block",M="css.placeholder",P="_applyReadOnly",t="_applyPlaceholder",u="left",z="off",K="mshtml",J="qx/static/blank.gif",I="text-placeholder",N="changeReadOnly";
qx.Class.define(T,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:F,construct:function(bf){qx.ui.core.Widget.call(this);
this.__gp=!qx.core.Environment.get(M)||(qx.core.Environment.get(bb)==D&&parseFloat(qx.core.Environment.get(l))>=2);

if(bf!=null){this.setValue(bf);
}this.getContentElement().addListener(m,this._onChangeContent,this);
if(this.__gp){this.addListener(n,this._syncPlaceholder,this);
}if(qx.core.Environment.get(g)){qx.locale.Manager.getInstance().addListener(Y,this._onChangeLocale,this);
}},events:{"input":c,"changeValue":c},properties:{textAlign:{check:[u,C,A],nullable:true,themeable:true,apply:r},readOnly:{check:f,apply:P,event:N,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:B,init:Infinity},liveUpdate:{check:f,init:false},placeholder:{check:O,nullable:true,apply:t},filter:{check:p,nullable:true,init:null}},members:{__gq:true,__gr:null,__fM:null,__fN:null,__gp:true,__gs:null,__gt:null,getFocusElement:function(){var bg=this.getContentElement();

if(bg){return bg;
}},_createInputElement:function(){return new qx.html.Input(U);
},renderLayout:function(bh,top,bi,bj){var bk=this._updateInsets;
var bo=qx.ui.core.Widget.prototype.renderLayout.call(this,bh,top,bi,bj);
if(!bo){return;
}var bm=bo.size||bk;
var bp=s;

if(bm||bo.local||bo.margin){var bl=this.getInsets();
var innerWidth=bi-bl.left-bl.right;
var innerHeight=bj-bl.top-bl.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bn=this.getContentElement();
if(bk&&this.__gp){this.__gw().setStyles({"left":bl.left+bp,"top":bl.top+bp});
}
if(bm){if(this.__gp){this.__gw().setStyles({"width":innerWidth+bp,"height":innerHeight+bp});
}bn.setStyles({"width":innerWidth+bp,"height":innerHeight+bp});
this._renderContentElement(innerHeight,bn);
}},_renderContentElement:function(innerHeight,bq){},_createContentElement:function(){var br=this._createInputElement();
br.setStyles({"border":i,"padding":0,"margin":0,"display":H,"background":S,"outline":i,"appearance":i,"position":W,"autoComplete":z});
br.setSelectable(this.getSelectable());
br.setEnabled(this.getEnabled());
br.addListener(be,this._onHtmlInput,this);
br.setAttribute(R,x);
br.setStyle(y,i);
if((qx.core.Environment.get(bb)==K)){br.setStyles({backgroundImage:Q+qx.util.ResourceManager.getInstance().toUri(J)+q});
}return br;
},_applyEnabled:function(bs,bt){qx.ui.core.Widget.prototype._applyEnabled.call(this,bs,bt);
this.getContentElement().setEnabled(bs);

if(this.__gp){if(bs){this._showPlaceholder();
}else{this._removePlaceholder();
}}else{var bu=this.getContentElement();
bu.setAttribute(a,bs?this.getPlaceholder():j);
}},__gu:{width:16,height:16},_getContentHint:function(){return {width:this.__gu.width*10,height:this.__gu.height||16};
},_applyFont:function(bv,bw){if(bw&&this.__gs&&this.__gt){this.__gs.removeListenerById(this.__gt);
this.__gt=null;
}var bx;

if(bv){this.__gs=qx.theme.manager.Font.getInstance().resolve(bv);

if(this.__gs instanceof qx.bom.webfonts.WebFont){this.__gt=this.__gs.addListener(v,this._onWebFontStatusChange,this);
}bx=this.__gs.getStyles();
}else{bx=qx.bom.Font.getDefaultStyles();
}if(this.getTextColor()!=null){delete bx[h];
}this.getContentElement().setStyles(bx);
if(this.__gp){this.__gw().setStyles(bx);
}if(bv){this.__gu=qx.bom.Label.getTextSize(d,bx);
}else{delete this.__gu;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(by,bz){if(by){this.getContentElement().setStyle(h,qx.theme.manager.Color.getInstance().resolve(by));
}else{this.getContentElement().removeStyle(h);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__gu;
},_onHtmlInput:function(e){var bD=e.getData();
var bC=true;
this.__gq=false;
if(this.__fN&&this.__fN===bD){bC=false;
}if(this.getFilter()!=null){var bE=j;
var bA=bD.search(this.getFilter());
var bB=bD;

while(bA>=0){bE=bE+(bB.charAt(bA));
bB=bB.substring(bA+1,bB.length);
bA=bB.search(this.getFilter());
}
if(bE!=bD){bC=false;
bD=bE;
this.getContentElement().setValue(bD);
}}if(bD.length>this.getMaxLength()){bC=false;
this.getContentElement().setValue(bD.substr(0,this.getMaxLength()));
}if(bC){this.fireDataEvent(be,bD,this.__fN);
this.__fN=bD;
if(this.getLiveUpdate()){this.__gv(bD);
}}},_onWebFontStatusChange:function(bF){if(bF.getData().valid===true){var bG=this.__gs.getStyles();
this.__gu=qx.bom.Label.getTextSize(d,bG);
qx.ui.core.queue.Layout.add(this);
}},__gv:function(bH){var bI=this.__fM;
this.__fM=bH;

if(bI!=bH){this.fireNonBubblingEvent(o,qx.event.type.Data,[bH,bI]);
}},setValue:function(bJ){if(bJ===null){if(this.__gq){return bJ;
}bJ=j;
this.__gq=true;
}else{this.__gq=false;
if(this.__gp){this._removePlaceholder();
}}
if(qx.lang.Type.isString(bJ)){var bL=this.getContentElement();

if(bJ.length>this.getMaxLength()){bJ=bJ.substr(0,this.getMaxLength());
}
if(bL.getValue()!=bJ){var bM=bL.getValue();
bL.setValue(bJ);
var bK=this.__gq?null:bJ;
this.__fM=bM;
this.__gv(bK);
}if(this.__gp){this._showPlaceholder();
}return bJ;
}throw new Error("Invalid value type: "+bJ);
},getValue:function(){var bN=this.getContentElement().getValue();
return this.__gq?null:bN;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__gq=e.getData()===null;
this.__gv(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bO,bP){this.getContentElement().setTextSelection(bO,bP);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bR=this.getValue()||j;
var bQ=this.getPlaceholder();

if(bQ!=null&&bR==j&&!this.hasState(E)&&!this.hasState(G)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__gw().setStyle(bc,X);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__gw().setStyle(bc,L);
}},__gw:function(){if(this.__gr==null){this.__gr=new qx.html.Label();
var bS=qx.theme.manager.Color.getInstance();
this.__gr.setStyles({"visibility":X,"zIndex":6,"position":W,"color":bS.resolve(I)});
this.getContainerElement().add(this.__gr);
}return this.__gr;
},_onChangeLocale:qx.core.Environment.select(g,{"true":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"false":null}),_applyPlaceholder:function(bT,bU){if(this.__gp){this.__gw().setValue(bT);

if(bT!=null){this.addListener(bd,this._removePlaceholder,this);
this.addListener(ba,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bd,this._removePlaceholder,this);
this.removeListener(ba,this._showPlaceholder,this);
this._removePlaceholder();
}}else{if(this.getEnabled()){this.getContentElement().setAttribute(a,bT);
}}},_applyTextAlign:function(bV,bW){this.getContentElement().setStyle(w,bV);
},_applyReadOnly:function(bX,bY){var ca=this.getContentElement();
ca.setAttribute(V,bX);

if(bX){this.addState(b);
this.setFocusable(false);
}else{this.removeState(b);
this.setFocusable(true);
}}},destruct:function(){this.__gr=this.__gs=null;

if(qx.core.Environment.get(g)){qx.locale.Manager.getInstance().removeListener(Y,this._onChangeLocale,this);
}
if(this.__gs&&this.__gt){this.__gs.removeListenerById(this.__gt);
}}});
})();
(function(){var n="wrap",m="value",l="textarea",k="engine.name",j="none",i="",h="overflow",g="input",f="qx.html.Input",e="select",b="disabled",d="read-only",c="overflowX",a="overflowY";
qx.Class.define(f,{extend:qx.html.Element,construct:function(o,p,q){if(o===e||o===l){var r=o;
}else{r=g;
}qx.html.Element.call(this,r,p,q);
this.__gm=o;
},members:{__gm:null,__gn:null,__go:null,_createDomElement:function(){return qx.bom.Input.create(this.__gm);
},_applyProperty:function(name,s){qx.html.Element.prototype._applyProperty.call(this,name,s);
var t=this.getDomElement();

if(name===m){qx.bom.Input.setValue(t,s);
}else if(name===n){qx.bom.Input.setWrap(t,s);
this.setStyle(h,t.style.overflow,true);
this.setStyle(c,t.style.overflowX,true);
this.setStyle(a,t.style.overflowY,true);
}},setEnabled:qx.core.Environment.select(k,{"webkit":function(u){this.__go=u;

if(!u){this.setStyles({"userModify":d,"userSelect":j});
}else{this.setStyles({"userModify":null,"userSelect":this.__gn?null:j});
}},"default":function(v){this.setAttribute(b,v===false);
}}),setSelectable:qx.core.Environment.select(k,{"webkit":function(w){this.__gn=w;
qx.html.Element.prototype.setSelectable.call(this,this.__go&&w);
},"default":function(x){qx.html.Element.prototype.setSelectable.call(this,x);
}}),setValue:function(y){var z=this.getDomElement();

if(z){if(z.value!=y){qx.bom.Input.setValue(z,y);
}}else{this._setProperty(m,y);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(m)||i;
},setWrap:function(B,C){if(this.__gm===l){this._setProperty(n,B,C);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__gm===l){return this._getProperty(n);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var m="input",k="engine.name",j="change",h="text",g="textarea",f="password",d="engine.version",c="radio",b="checkbox",a="keypress",A="browser.documentmode",z="opera",y="keyup",x="mshtml",w="blur",v="keydown",u="propertychange",t="browser.version",s="select-multiple",r="value",p="select",q="qx.event.handler.Input",n="checked";
qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if((qx.core.Environment.get(k)==z)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__fK:false,__fL:null,__fM:null,__fN:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();

if(C===m&&(D===m||D===g)){return true;
}
if(C===j&&(D===m||D===g||D===p)){return true;
}return false;
},registerEvent:function(E,F,G){if(qx.core.Environment.get(k)==x&&(qx.core.Environment.get(d)<9||(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)<9))){if(!E.__fO){var H=E.tagName.toLowerCase();
var I=E.type;

if(I===h||I===f||H===g||I===b||I===c){qx.bom.Event.addNativeListener(E,u,this._onPropertyWrapper);
}
if(I!==b&&I!==c){qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}
if(I===h||I===f){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}E.__fO=true;
}}else{if(F===m){this.__fP(E);
}else if(F===j){if(E.type===c||E.type===b){qx.bom.Event.addNativeListener(E,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(E.type===h||E.type===f){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}}}}},__fP:qx.core.Environment.select(k,{"mshtml":function(J){if(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.addNativeListener(J,m,this._onInputWrapper);

if(J.type===h||J.type===f||J.type===g){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,J);
qx.bom.Event.addNativeListener(J,y,this._inputFixWrapper);
}}},"webkit":function(K){var L=K.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(d))<532&&L==g){qx.bom.Event.addNativeListener(K,a,this._onInputWrapper);
}qx.bom.Event.addNativeListener(K,m,this._onInputWrapper);
},"opera":function(M){qx.bom.Event.addNativeListener(M,y,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(M,v,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(M,w,this._onBlurWrapper);
qx.bom.Event.addNativeListener(M,m,this._onInputWrapper);
},"default":function(N){qx.bom.Event.addNativeListener(N,m,this._onInputWrapper);
}}),unregisterEvent:function(O,P){if(qx.core.Environment.get(k)==x&&qx.core.Environment.get(d)<9&&qx.core.Environment.get(A)<9){if(O.__fO){var Q=O.tagName.toLowerCase();
var R=O.type;

if(R===h||R===f||Q===g||R===b||R===c){qx.bom.Event.removeNativeListener(O,u,this._onPropertyWrapper);
}
if(R!==b&&R!==c){qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}
if(R===h||R===f){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}
try{delete O.__fO;
}catch(S){O.__fO=null;
}}}else{if(P===m){this.__fQ(O);
}else if(P===j){if(O.type===c||O.type===b){qx.bom.Event.removeNativeListener(O,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}}
if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(O.type===h||O.type===f){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}}}},__fQ:qx.core.Environment.select(k,{"mshtml":function(T){if(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.removeNativeListener(T,m,this._onInputWrapper);

if(T.type===h||T.type===f||T.type===g){qx.bom.Event.removeNativeListener(T,y,this._inputFixWrapper);
}}},"webkit":function(U){var V=U.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(d))<532&&V==g){qx.bom.Event.removeNativeListener(U,a,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(U,m,this._onInputWrapper);
},"opera":function(W){qx.bom.Event.removeNativeListener(W,y,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(W,v,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(W,w,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(W,m,this._onInputWrapper);
},"default":function(X){qx.bom.Event.removeNativeListener(X,m,this._onInputWrapper);
}}),_onKeyPress:qx.core.Environment.select(k,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__fM){this.__fM=Y.value;
qx.event.Registration.fireEvent(Y,j,qx.event.type.Data,[Y.value]);
}}},"default":null}),_inputFix:qx.core.Environment.select(k,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__fN){this.__fN=ba.value;
qx.event.Registration.fireEvent(ba,m,qx.event.type.Data,[ba.value]);
}}},"default":null}),_onKeyDown:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__fK=true;
}},"default":null}),_onKeyUp:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__fK=false;
}},"default":null}),_onBlur:qx.core.Environment.select(k,{"opera":function(e){if(this.__fL&&qx.core.Environment.get(t)<10.6){window.clearTimeout(this.__fL);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);
var bb=bc.tagName.toLowerCase();
if(!this.__fK||bb!==m){if((qx.core.Environment.get(k)==z)&&qx.core.Environment.get(t)<10.6){this.__fL=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
},0);
}else{qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var be=qx.bom.Event.getTarget(e);
var bd=be.value;

if(be.type===s){var bd=[];

for(var i=0,o=be.options,l=o.length;i<l;i++){if(o[i].selected){bd.push(o[i].value);
}}}qx.event.Registration.fireEvent(be,j,qx.event.type.Data,[bd]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bf=qx.bom.Event.getTarget(e);

if(bf.type===c){if(bf.checked){qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.value]);
}}else{qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.checked]);
}}),_onProperty:qx.core.Environment.select(k,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bg=qx.bom.Event.getTarget(e);
var bh=e.propertyName;

if(bh===r&&(bg.type===h||bg.type===f||bg.tagName.toLowerCase()===g)){if(!bg.$$inValueSet){qx.event.Registration.fireEvent(bg,m,qx.event.type.Data,[bg.value]);
}}else if(bh===n){if(bg.type===b){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.checked]);
}else if(bg.checked){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.value]);
}}}),"default":function(){}})},defer:function(bi){qx.event.Registration.addHandler(bi);
}});
})();
(function(){var k="",j="select",h="textarea",g="auto",f="soft",e="off",d="engine.name",c="text",b="Unsupported input type.",a="nowrap",x="radio",w="qx.debug",v="input",u="option",t="value",s="number",r="qx.bom.Input",q="normal",p="mshtml",o="wrap",m="checkbox",n="select-one";
qx.Class.define(r,{statics:{__fh:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(y,z,A){if(qx.core.Environment.get(w)){qx.core.Assert.assertKeyInMap(y,this.__fh,b);
}var z=z?qx.lang.Object.clone(z):{};
var B;

if(y===h||y===j){B=y;
}else{B=v;
z.type=y;
}return qx.bom.Element.create(B,z,A);
},setValue:function(C,D){var I=C.nodeName.toLowerCase();
var F=C.type;
var Array=qx.lang.Array;
var J=qx.lang.Type;

if(typeof D===s){D+=k;
}
if((F===m||F===x)){if(J.isArray(D)){C.checked=Array.contains(D,C.value);
}else{C.checked=C.value==D;
}}else if(I===j){var E=J.isArray(D);
var K=C.options;
var G,H;

for(var i=0,l=K.length;i<l;i++){G=K[i];
H=G.getAttribute(t);

if(H==null){H=G.text;
}G.selected=E?Array.contains(D,H):D==H;
}
if(E&&D.length==0){C.selectedIndex=-1;
}}else if((F===c||F===h)&&(qx.core.Environment.get(d)==p)){C.$$inValueSet=true;
C.value=D;
C.$$inValueSet=null;
}else{C.value=D;
}},getValue:function(L){var R=L.nodeName.toLowerCase();

if(R===u){return (L.attributes.value||{}).specified?L.value:L.text;
}
if(R===j){var M=L.selectedIndex;
if(M<0){return null;
}var S=[];
var U=L.options;
var T=L.type==n;
var Q=qx.bom.Input;
var P;
for(var i=T?M:0,O=T?M+1:U.length;i<O;i++){var N=U[i];

if(N.selected){P=Q.getValue(N);
if(T){return P;
}S.push(P);
}}return S;
}else{return (L.value||k).replace(/\r/g,k);
}},setWrap:qx.core.Environment.select(d,{"mshtml":function(V,W){var Y=W?f:e;
var X=W?g:k;
V.wrap=Y;
V.style.overflowY=X;
},"gecko|webkit":function(ba,bb){var bd=bb?f:e;
var bc=bb?k:g;
ba.setAttribute(o,bd);
ba.style.overflow=bc;
},"default":function(be,bf){be.style.whiteSpace=bf?q:a;
}})}});
})();
(function(){var g="mshtml",f="engine.name",e="qx.ui.form.TextField",d='px',c="textfield",b="engine.version",a="browser.documentmode";
qx.Class.define(e,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:c},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,h){if((qx.core.Environment.get(f)==g)&&(parseInt(qx.core.Environment.get(b),10)<9||qx.core.Environment.get(a)<9)){h.setStyles({"line-height":innerHeight+d});
}}}});
})();
(function(){var k="qx.debug",j="Invalid argument 'col'.",h="Column not found in table model",g="qx.event.type.Data",f="orderChanged",e="Invalid argument 'renderer'.",d="visibilityChanged",c="visibilityChangedPre",b="Invalid argument 'colCount'.",a="__zV",y="Invalid argument 'visible'.",w="__zX",v="Invalid argument 'factory'.",u="Invalid argument 'newPositions'.",t="Invalid argument 'width'.",s="Invalid argument 'visXPos'.",r="qx.ui.table.columnmodel.Basic",q="Invalid argument 'toOverXPos'.",p="__zW",o="headerCellRendererChanged",m="widthChanged",n="Invalid argument 'overXPos'.",l="Invalid argument 'fromOverXPos'.";
qx.Class.define(r,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__zR=[];
this.__zS=[];
},events:{"widthChanged":g,"visibilityChangedPre":g,"visibilityChanged":g,"orderChanged":g,"headerCellRendererChanged":g},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__zp:null,__zT:null,__zS:null,__zR:null,__zU:null,__zV:null,__zW:null,__zX:null,init:function(z,A){if(qx.core.Environment.get(k)){this.assertInteger(z,b);
}this.__zU=[];
var E=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var F=this.__zV||(this.__zV=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var C=this.__zW||(this.__zW=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var B=this.__zX||(this.__zX=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__zR=[];
this.__zS=[];
var H;
if(A){H=A.getInitiallyHiddenColumns();
}H=H||[];

for(var I=0;I<z;I++){this.__zU[I]={width:E,headerRenderer:F,dataRenderer:C,editorFactory:B};
this.__zR[I]=I;
this.__zS[I]=I;
}this.__zT=null;
this.__zp=true;

for(var G=0;G<H.length;G++){this.setColumnVisible(H[G],false);
}this.__zp=false;

for(I=0;I<z;I++){var D={col:I,visible:this.isColumnVisible(I)};
this.fireDataEvent(c,D);
this.fireDataEvent(d,D);
}},getVisibleColumns:function(){return this.__zS!=null?this.__zS:[];
},setColumnWidth:function(J,K,L){if(qx.core.Environment.get(k)){this.assertInteger(J,j);
this.assertInteger(K,t);
this.assertNotUndefined(this.__zU[J],h);
}var N=this.__zU[J].width;

if(N!=K){this.__zU[J].width=K;
var M={col:J,newWidth:K,oldWidth:N,isMouseAction:L||false};
this.fireDataEvent(m,M);
}},getColumnWidth:function(O){if(qx.core.Environment.get(k)){this.assertInteger(O,j);
this.assertNotUndefined(this.__zU[O],h);
}return this.__zU[O].width;
},setHeaderCellRenderer:function(P,Q){if(qx.core.Environment.get(k)){this.assertInteger(P,j);
this.assertInterface(Q,qx.ui.table.IHeaderRenderer,e);
this.assertNotUndefined(this.__zU[P],h);
}var R=this.__zU[P].headerRenderer;

if(R!==this.__zV){R.dispose();
}this.__zU[P].headerRenderer=Q;
this.fireDataEvent(o,{col:P});
},getHeaderCellRenderer:function(S){if(qx.core.Environment.get(k)){this.assertInteger(S,j);
this.assertNotUndefined(this.__zU[S],h);
}return this.__zU[S].headerRenderer;
},setDataCellRenderer:function(T,U){if(qx.core.Environment.get(k)){this.assertInteger(T,j);
this.assertInterface(U,qx.ui.table.ICellRenderer,e);
this.assertNotUndefined(this.__zU[T],h);
}this.__zU[T].dataRenderer=U;
var V=this.__zU[T].dataRenderer;

if(V!==this.__zW){return V;
}return null;
},getDataCellRenderer:function(W){if(qx.core.Environment.get(k)){this.assertInteger(W,j);
this.assertNotUndefined(this.__zU[W],h);
}return this.__zU[W].dataRenderer;
},setCellEditorFactory:function(X,Y){if(qx.core.Environment.get(k)){this.assertInteger(X,j);
this.assertInterface(Y,qx.ui.table.ICellEditorFactory,v);
this.assertNotUndefined(this.__zU[X],h);
}var ba=this.__zU[X].headerRenderer;

if(ba!==this.__zX){ba.dispose();
}this.__zU[X].editorFactory=Y;
},getCellEditorFactory:function(bb){if(qx.core.Environment.get(k)){this.assertInteger(bb,j);
this.assertNotUndefined(this.__zU[bb],h);
}return this.__zU[bb].editorFactory;
},_getColToXPosMap:function(){if(this.__zT==null){this.__zT={};

for(var be=0;be<this.__zR.length;be++){var bd=this.__zR[be];
this.__zT[bd]={overX:be};
}
for(var bc=0;bc<this.__zS.length;bc++){var bd=this.__zS[bc];
this.__zT[bd].visX=bc;
}}return this.__zT;
},getVisibleColumnCount:function(){return this.__zS!=null?this.__zS.length:0;
},getVisibleColumnAtX:function(bf){if(qx.core.Environment.get(k)){this.assertInteger(bf,s);
}return this.__zS[bf];
},getVisibleX:function(bg){if(qx.core.Environment.get(k)){this.assertInteger(bg,j);
}return this._getColToXPosMap()[bg].visX;
},getOverallColumnCount:function(){return this.__zR.length;
},getOverallColumnAtX:function(bh){if(qx.core.Environment.get(k)){this.assertInteger(bh,n);
}return this.__zR[bh];
},getOverallX:function(bi){if(qx.core.Environment.get(k)){this.assertInteger(bi,j);
}return this._getColToXPosMap()[bi].overX;
},isColumnVisible:function(bj){if(qx.core.Environment.get(k)){this.assertInteger(bj,j);
}return (this._getColToXPosMap()[bj].visX!=null);
},setColumnVisible:function(bk,bl){if(qx.core.Environment.get(k)){this.assertInteger(bk,j);
this.assertBoolean(bl,y);
}
if(bl!=this.isColumnVisible(bk)){if(bl){var br=this._getColToXPosMap();
var bo=br[bk].overX;

if(bo==null){throw new Error("Showing column failed: "+bk+". The column is not added to this TablePaneModel.");
}var bp;

for(var x=bo+1;x<this.__zR.length;x++){var bq=this.__zR[x];
var bm=br[bq].visX;

if(bm!=null){bp=bm;
break;
}}if(bp==null){bp=this.__zS.length;
}this.__zS.splice(bp,0,bk);
}else{var bn=this.getVisibleX(bk);
this.__zS.splice(bn,1);
}this.__zT=null;
if(!this.__zp){var bs={col:bk,visible:bl};
this.fireDataEvent(c,bs);
this.fireDataEvent(d,bs);
}}},moveColumn:function(bt,bu){if(qx.core.Environment.get(k)){this.assertInteger(bt,l);
this.assertInteger(bu,q);
}this.__zp=true;
var bx=this.__zR[bt];
var bv=this.isColumnVisible(bx);

if(bv){this.setColumnVisible(bx,false);
}this.__zR.splice(bt,1);
this.__zR.splice(bu,0,bx);
this.__zT=null;

if(bv){this.setColumnVisible(bx,true);
}this.__zp=false;
var bw={col:bx,fromOverXPos:bt,toOverXPos:bu};
this.fireDataEvent(f,bw);
},setColumnsOrder:function(by){if(qx.core.Environment.get(k)){this.assertArray(by,u);
}
if(by.length==this.__zR.length){this.__zp=true;
var bB=new Array(by.length);

for(var bz=0;bz<this.__zR.length;bz++){var bA=this.isColumnVisible(bz);
bB[bz]=bA;

if(bA){this.setColumnVisible(bz,false);
}}this.__zR=qx.lang.Array.clone(by);
this.__zT=null;
for(var bz=0;bz<this.__zR.length;bz++){if(bB[bz]){this.setColumnVisible(bz,true);
}}this.__zp=false;
this.fireDataEvent(f);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__zR.length+", got "+by.length);
}}},destruct:function(){for(var i=0;i<this.__zU.length;i++){this.__zU[i].headerRenderer.dispose();
this.__zU[i].dataRenderer.dispose();
this.__zU[i].editorFactory.dispose();
}this.__zR=this.__zS=this.__zU=this.__zT=null;
this._disposeObjects(a,p,w);
}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Environment.add(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Environment.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
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
(function(){var k="slider",j="horizontal",i="button-begin",h="vertical",g="button-end",f="Integer",d="execute",c="right",b="left",a="down",z="up",y="PositiveNumber",x="changeValue",w="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",v="_applyKnobFactor",u="knob",t="qx.ui.core.scroll.ScrollBar",s="resize",r="_applyOrientation",q="_applyPageStep",o="PositiveInteger",p="scroll",m="_applyPosition",n="scrollbar",l="_applyMaximum";
qx.Class.define(t,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this._createChildControl(i);
this._createChildControl(k).addListener(s,this._onResizeSlider,this);
this._createChildControl(g);
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[j,h],init:j,apply:r},maximum:{check:o,apply:l,init:100},position:{check:w,init:0,apply:m,event:p},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:q},knobFactor:{check:y,apply:v,nullable:true}},members:{__CM:2,_createChildControlImpl:function(B,C){var D;

switch(B){case k:D=new qx.ui.core.scroll.ScrollSlider();
D.setPageStep(100);
D.setFocusable(false);
D.addListener(x,this._onChangeSliderValue,this);
this._add(D,{flex:1});
break;
case i:D=new qx.ui.form.RepeatButton();
D.setFocusable(false);
D.addListener(d,this._onExecuteBegin,this);
this._add(D);
break;
case g:D=new qx.ui.form.RepeatButton();
D.setFocusable(false);
D.addListener(d,this._onExecuteEnd,this);
this._add(D);
break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_applyMaximum:function(E){this.getChildControl(k).setMaximum(E);
},_applyPosition:function(F){this.getChildControl(k).setValue(F);
},_applyKnobFactor:function(G){this.getChildControl(k).setKnobFactor(G);
},_applyPageStep:function(H){this.getChildControl(k).setPageStep(H);
},_applyOrientation:function(I,J){var K=this._getLayout();

if(K){K.dispose();
}if(I===j){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(h,j);
this.getChildControl(i).replaceState(z,b);
this.getChildControl(g).replaceState(a,c);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(j,h);
this.getChildControl(i).replaceState(b,z);
this.getChildControl(g).replaceState(c,a);
}this.getChildControl(k).setOrientation(I);
},scrollTo:function(L){this.getChildControl(k).slideTo(L);
},scrollBy:function(M){this.getChildControl(k).slideBy(M);
},scrollBySteps:function(N){var O=this.getSingleStep();
this.getChildControl(k).slideBy(N*O);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var P=this.getChildControl(k).getChildControl(u);
var S=P.getSizeHint();
var Q=false;
var R=this.getChildControl(k).getInnerSize();

if(this.getOrientation()==h){if(R.height<S.minHeight+this.__CM){Q=true;
}}else{if(R.width<S.minWidth+this.__CM){Q=true;
}}
if(Q){P.exclude();
}else{P.show();
}}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(b){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(c){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(e){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="knob",j="horizontal",i="vertical",h="Integer",g="hovered",f="left",d="top",c="mouseup",b="pressed",a="px",X="changeValue",W="interval",V="mousemove",U="resize",T="slider",S="mousedown",R="PageUp",Q="mouseout",P="x",O='qx.event.type.Data',r="Left",s="Down",p="Up",q="dblclick",n="qx.ui.form.Slider",o="PageDown",l="mousewheel",m="_applyValue",u="_applyKnobFactor",v="End",C="height",A="y",G="Right",E="width",K="_applyOrientation",I="Home",x="mouseover",N="floor",M="_applyMinimum",L="click",w="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",y="keypress",z="ceil",B="losecapture",D="contextmenu",F="_applyMaximum",H="Number",J="changeMaximum",t="changeMinimum";
qx.Class.define(n,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(Y){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(y,this._onKeyPress);
this.addListener(l,this._onMouseWheel);
this.addListener(S,this._onMouseDown);
this.addListener(c,this._onMouseUp);
this.addListener(B,this._onMouseUp);
this.addListener(U,this._onUpdate);
this.addListener(D,this._onStopEvent);
this.addListener(L,this._onStopEvent);
this.addListener(q,this._onStopEvent);
if(Y!=null){this.setOrientation(Y);
}else{this.initOrientation();
}},events:{changeValue:O},properties:{appearance:{refine:true,init:T},focusable:{refine:true,init:true},orientation:{check:[j,i],init:j,apply:K},value:{check:w,init:0,apply:m,nullable:true},minimum:{check:h,init:0,apply:M,event:t},maximum:{check:h,init:100,apply:F,event:J},singleStep:{check:h,init:1},pageStep:{check:h,init:10},knobFactor:{check:H,apply:u,nullable:true}},members:{__CN:null,__CO:null,__CP:null,__CQ:null,__CR:null,__CS:null,__CT:null,__CU:null,__lh:null,__CV:null,__CW:null,__CX:null,_forwardStates:{invalid:true},_createChildControlImpl:function(ba,bb){var bc;

switch(ba){case k:bc=new qx.ui.core.Widget();
bc.addListener(U,this._onUpdate,this);
bc.addListener(x,this._onMouseOver);
bc.addListener(Q,this._onMouseOut);
this._add(bc);
break;
}return bc||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,ba);
},_onMouseOver:function(e){this.addState(g);
},_onMouseOut:function(e){this.removeState(g);
},_onMouseWheel:function(e){var bf=this.getOrientation()===j?P:A;
var be=e.getWheelDelta(bf);
var bd=be>0?1:be<0?-1:0;
this.slideBy(bd*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bh=this.getOrientation()===j;
var bg=bh?r:p;
var forward=bh?G:s;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bg:this.slideBack();
break;
case o:this.slidePageForward();
break;
case R:this.slidePageBack();
break;
case I:this.slideToBegin();
break;
case v:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__CQ){return;
}var bk=this.__mW;
var bi=this.getChildControl(k);
var bj=bk?f:d;
var bm=bk?e.getDocumentLeft():e.getDocumentTop();
var bn=this.__CN=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bj];
var bl=this.__CO=qx.bom.element.Location.get(bi.getContainerElement().getDomElement())[bj];

if(e.getTarget()===bi){this.__CQ=true;

if(!this.__CV){this.__CV=new qx.event.Timer(100);
this.__CV.addListener(W,this._fireValue,this);
}this.__CV.start();
this.__CR=bm+bn-bl;
bi.addState(b);
}else{this.__CS=true;
this.__CT=bm<=bl?-1:1;
this.__Da(e);
this._onInterval();
if(!this.__lh){this.__lh=new qx.event.Timer(100);
this.__lh.addListener(W,this._onInterval,this);
}this.__lh.start();
}this.addListener(V,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__CQ){this.releaseCapture();
delete this.__CQ;
this.__CV.stop();
this._fireValue();
delete this.__CR;
this.getChildControl(k).removeState(b);
if(e.getType()===c){var bp;
var bq;
var bo;

if(this.__mW){bp=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__CN);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[d];
bq=e.getDocumentTop()-(bo+this.getChildControl(k).getBounds().top);
}else{bp=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__CN);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[f];
bq=e.getDocumentLeft()-(bo+this.getChildControl(k).getBounds().left);
}
if(bq<0||bq>this.__CP||bp<0||bp>this.__CP){this.getChildControl(k).removeState(g);
}}}else if(this.__CS){this.__lh.stop();
this.releaseCapture();
delete this.__CS;
delete this.__CT;
delete this.__CU;
}this.removeListener(V,this._onMouseMove);
if(e.getType()===c){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__CQ){var bs=this.__mW?e.getDocumentLeft():e.getDocumentTop();
var br=bs-this.__CR;
this.slideTo(this._positionToValue(br));
}else if(this.__CS){this.__Da(e);
}e.stopPropagation();
},_onInterval:function(e){var bt=this.getValue()+(this.__CT*this.getPageStep());
if(bt<this.getMinimum()){bt=this.getMinimum();
}else if(bt>this.getMaximum()){bt=this.getMaximum();
}var bu=this.__CT==-1;

if((bu&&bt<=this.__CU)||(!bu&&bt>=this.__CU)){bt=this.__CU;
}this.slideTo(bt);
},_onUpdate:function(e){var bw=this.getInnerSize();
var bx=this.getChildControl(k).getBounds();
var bv=this.__mW?E:C;
this._updateKnobSize();
this.__CY=bw[bv]-bx[bv];
this.__CP=bx[bv];
this._updateKnobPosition();
},__mW:false,__CY:0,__Da:function(e){var by=this.__mW;
var bF=by?e.getDocumentLeft():e.getDocumentTop();
var bH=this.__CN;
var bz=this.__CO;
var bJ=this.__CP;
var bG=bF-bH;

if(bF>=bz){bG-=bJ;
}var bD=this._positionToValue(bG);
var bA=this.getMinimum();
var bB=this.getMaximum();

if(bD<bA){bD=bA;
}else if(bD>bB){bD=bB;
}else{var bE=this.getValue();
var bC=this.getPageStep();
var bI=this.__CT<0?N:z;
bD=bE+(Math[bI]((bD-bE)/bC)*bC);
}if(this.__CU==null||(this.__CT==-1&&bD<=this.__CU)||(this.__CT==1&&bD>=this.__CU)){this.__CU=bD;
}},_positionToValue:function(bK){var bL=this.__CY;
if(bL==null||bL==0){return 0;
}var bN=bK/bL;

if(bN<0){bN=0;
}else if(bN>1){bN=1;
}var bM=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bM*bN);
},_valueToPosition:function(bO){var bP=this.__CY;

if(bP==null){return 0;
}var bQ=this.getMaximum()-this.getMinimum();
if(bQ==0){return 0;
}var bO=bO-this.getMinimum();
var bR=bO/bQ;

if(bR<0){bR=0;
}else if(bR>1){bR=1;
}return Math.round(bP*bR);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bS){var bT=this.getChildControl(k).getContainerElement();

if(this.__mW){bT.setStyle(f,bS+a,true);
}else{bT.setStyle(d,bS+a,true);
}},_updateKnobSize:function(){var bV=this.getKnobFactor();

if(bV==null){return;
}var bU=this.getInnerSize();

if(bU==null){return;
}if(this.__mW){this.getChildControl(k).setWidth(Math.round(bV*bU.width));
}else{this.getChildControl(k).setHeight(Math.round(bV*bU.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bW){this.slideTo(this.getValue()+bW);
},slideTo:function(bX){if(bX<this.getMinimum()){bX=this.getMinimum();
}else if(bX>this.getMaximum()){bX=this.getMaximum();
}else{bX=this.getMinimum()+Math.round((bX-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bX);
},_applyOrientation:function(bY,ca){var cb=this.getChildControl(k);
this.__mW=bY===j;
if(this.__mW){this.removeState(i);
cb.removeState(i);
this.addState(j);
cb.addState(j);
cb.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(j);
cb.removeState(j);
this.addState(i);
cb.addState(i);
cb.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(cc,cd){if(cc!=null){this._updateKnobSize();
}else{if(this.__mW){this.getChildControl(k).resetWidth();
}else{this.getChildControl(k).resetHeight();
}}},_applyValue:function(ce,cf){if(ce!=null){this._updateKnobPosition();

if(this.__CQ){this.__CX=[ce,cf];
}else{this.fireEvent(X,qx.event.type.Data,[ce,cf]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__CX){return;
}var cg=this.__CX;
this.__CX=null;
this.fireEvent(X,qx.event.type.Data,cg);
},_applyMinimum:function(ch,ci){if(this.getValue()<ch){this.setValue(ch);
}this._updateKnobPosition();
},_applyMaximum:function(cj,ck){if(this.getValue()>cj){this.setValue(cj);
}this._updateKnobPosition();
}}});
})();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
},members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);
if(this.getOrientation()===d){g.width=0;
}else{g.height=0;
}return g;
}}});
})();
(function(){var o="Boolean",n="resize-line",m="mousedown",l="qx.event.type.Data",k="mouseup",j="qx.ui.table.pane.CellEvent",i="scroll",h="focus-indicator",g="excluded",d="scrollbar-y",bq="table-scroller-focus-indicator",bp="visible",bo="mousemove",bn="header",bm="editing",bl="click",bk="modelChanged",bj="scrollbar-x",bi="cellClick",bh="pane",v="__pw",w="__Am",t="__Ao",u="mouseout",r="__Ak",s="__Ap",p="changeHorizontalScrollBarVisible",q="bottom",C="_applyScrollTimeout",D="changeScrollX",M="_applyTablePaneModel",J="Integer",U="dblclick",P="__vk",bd="dataEdited",ba="mousewheel",F="interval",bg="qx.ui.table.pane.Scroller",bf="_applyShowCellFocusIndicator",be="__Al",E="y",H="resize",I="vertical",L="__lh",N="changeScrollY",Q="appear",W="__Aq",bc="table-scroller",y="beforeSort",z="__An",G="cellDblclick",T="horizontal",S="losecapture",R="contextmenu",Y="col-resize",X="disappear",O="_applyVerticalScrollBarVisible",V="_applyHorizontalScrollBarVisible",a="os.scrollBarOverlayed",bb="cellContextmenu",A="close",B="changeTablePaneModel",K="x",b="qx.ui.table.pane.Model",c="changeVerticalScrollBarVisible";
qx.Class.define(bg,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(br){qx.ui.core.Widget.call(this);
this.__Aj=br;
var bs=new qx.ui.layout.Grid();
bs.setColumnFlex(0,1);
bs.setRowFlex(1,1);
this._setLayout(bs);
this.__pw=this._showChildControl(bn);
this.__Ak=this._showChildControl(bh);
this.__vk=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__vk,{row:0,column:0,colSpan:2});
this.__Al=new qx.ui.table.pane.Clipper();
this.__Al.add(this.__pw);
this.__Al.addListener(S,this._onChangeCaptureHeader,this);
this.__Al.addListener(bo,this._onMousemoveHeader,this);
this.__Al.addListener(m,this._onMousedownHeader,this);
this.__Al.addListener(k,this._onMouseupHeader,this);
this.__Al.addListener(bl,this._onClickHeader,this);
this.__vk.add(this.__Al,{flex:1});
this.__Am=new qx.ui.table.pane.Clipper();
this.__Am.add(this.__Ak);
this.__Am.addListener(ba,this._onMousewheel,this);
this.__Am.addListener(bo,this._onMousemovePane,this);
this.__Am.addListener(m,this._onMousedownPane,this);
this.__Am.addListener(k,this._onMouseupPane,this);
this.__Am.addListener(bl,this._onClickPane,this);
this.__Am.addListener(R,this._onContextMenu,this);
this.__Am.addListener(U,this._onDblclickPane,this);
this.__Am.addListener(H,this._onResizePane,this);
if(qx.core.Environment.get(a)){this.__An=new qx.ui.container.Composite();
this.__An.setLayout(new qx.ui.layout.Canvas());
this.__An.add(this.__Am,{edge:0});
this._add(this.__An,{row:1,column:0});
}else{this._add(this.__Am,{row:1,column:0});
}this.__Ao=this._showChildControl(bj);
this.__Ap=this._showChildControl(d);
this.__Aq=this.getChildControl(h);
this.initShowCellFocusIndicator();
this.getChildControl(n).hide();
this.addListener(u,this._onMouseout,this);
this.addListener(Q,this._onAppear,this);
this.addListener(X,this._onDisappear,this);
this.__lh=new qx.event.Timer();
this.__lh.addListener(F,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":l,"changeScrollX":l,"cellClick":j,"cellDblclick":j,"cellContextmenu":j,"beforeSort":l},properties:{horizontalScrollBarVisible:{check:o,init:false,apply:V,event:p},verticalScrollBarVisible:{check:o,init:false,apply:O,event:c},tablePaneModel:{check:b,apply:M,event:B},liveResize:{check:o,init:false},focusCellOnMouseMove:{check:o,init:false},selectBeforeFocus:{check:o,init:false},showCellFocusIndicator:{check:o,init:true,apply:bf},contextMenuFromDataCellsOnly:{check:o,init:true},resetSelectionOnHeaderClick:{check:o,init:true},scrollTimeout:{check:J,init:100,apply:C},appearance:{refine:true,init:bc}},members:{__zH:null,__Aj:null,__Ar:null,__As:null,__At:null,__Au:null,__Av:null,__Aw:null,__Ax:null,__Ay:null,__Az:null,__AA:null,__AB:null,__AC:null,__AD:false,__AE:null,__AF:null,__AG:null,__zD:null,__zE:null,__AH:null,__AI:null,__AJ:null,__Ao:null,__Ap:null,__pw:null,__Al:null,__Ak:null,__Am:null,__An:null,__Aq:null,__vk:null,__lh:null,getPaneInsetRight:function(){var bv=this.getTopRightWidget();
var bw=bv&&bv.isVisible()&&bv.getBounds()?bv.getBounds().width+bv.getMarginLeft()+bv.getMarginRight():0;
var bu=this.__Ap;
var bt=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth()+bu.getMarginLeft()+bu.getMarginRight():0;
return Math.max(bw,bt);
},setPaneWidth:function(bx){if(this.isVerticalScrollBarVisible()){bx+=this.getPaneInsetRight();
}this.setWidth(bx);
},_createChildControlImpl:function(by,bz){var bA;

switch(by){case bn:bA=(this.getTable().getNewTablePaneHeader())(this);
break;
case bh:bA=(this.getTable().getNewTablePane())(this);
break;
case h:bA=new qx.ui.table.pane.FocusIndicator(this);
bA.setUserBounds(0,0,0,0);
bA.setZIndex(1000);
bA.addListener(k,this._onMouseupFocusIndicator,this);
this.__Am.add(bA);
bA.show();
bA.setDecorator(null);
break;
case n:bA=new qx.ui.core.Widget();
bA.setUserBounds(0,0,0,0);
bA.setZIndex(1000);
this.__Am.add(bA);
break;
case bj:bA=this._createScrollBar(T).set({minWidth:0,alignY:q});
bA.addListener(i,this._onScrollX,this);

if(this.__An!=null){bA.setMinHeight(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);
this.__An.add(bA,{bottom:0,right:0,left:0});
}else{this._add(bA,{row:2,column:0});
}break;
case d:bA=this._createScrollBar(I);
bA.addListener(i,this._onScrollY,this);

if(this.__An!=null){bA.setMinWidth(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);
this.__An.add(bA,{right:0,bottom:0,top:0});
}else{this._add(bA,{row:1,column:1});
}break;
}return bA||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,by);
},_applyHorizontalScrollBarVisible:function(bB,bC){this.__Ao.setVisibility(bB?bp:g);
},_applyVerticalScrollBarVisible:function(bD,bE){this.__Ap.setVisibility(bD?bp:g);
},_applyTablePaneModel:function(bF,bG){if(bG!=null){bG.removeListener(bk,this._onPaneModelChanged,this);
}bF.addListener(bk,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(bH,bI){if(bH){this.__Aq.setDecorator(bq);
this._updateFocusIndicator();
}else{if(this.__Aq){this.__Aq.setDecorator(null);
}}},getScrollY:function(){return this.__Ap.getPosition();
},setScrollY:function(scrollY,bJ){this.__Ap.scrollTo(scrollY);

if(bJ){this._updateContent();
}},getScrollX:function(){return this.__Ao.getPosition();
},setScrollX:function(scrollX){this.__Ao.scrollTo(scrollX);
},getTable:function(){return this.__Aj;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bK,bL){this.__pw.setColumnWidth(bK,bL);
this.__Ak.setColumnWidth(bK,bL);
var bM=this.getTablePaneModel();
var x=bM.getX(bK);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__pw.onColOrderChanged();
this.__Ak.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bN,bO,bP,bQ){this.__Ak.onTableModelDataChanged(bN,bO,bP,bQ);
var bR=this.getTable().getTableModel().getRowCount();

if(bR!=this.__zH){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bR){if(bR==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bR-1);
}}this.__zH=bR;
}},onSelectionChanged:function(){this.__Ak.onSelectionChanged();
},onFocusChanged:function(){this.__Ak.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__pw.onTableModelMetaDataChanged();
this.__Ak.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__pw.onPaneModelChanged();
this.__Ak.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__pw._updateContent();
this.__Aj._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bV=this.__Am.getInnerSize();

if(!bV){return ;
}var bT=this.getTablePaneModel().getTotalWidth();
var bU=this.__Ao;

if(bV.width<bT){var bS=Math.max(0,bT-bV.width);
bU.setMaximum(bS);
bU.setKnobFactor(bV.width/bT);
var bW=bU.getPosition();
bU.setPosition(Math.min(bW,bS));
}else{bU.setMaximum(0);
bU.setKnobFactor(1);
bU.setPosition(0);
}},updateVerScrollBarMaximum:function(){var cf=this.__Am.getInnerSize();

if(!cf){return ;
}var cd=this.getTable().getTableModel();
var bY=cd.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){bY+=1;
}var bX=this.getTable().getRowHeight();
var cb=bY*bX;
var ce=this.__Ap;

if(cf.height<cb){var ca=Math.max(0,cb-cf.height);
ce.setMaximum(ca);
ce.setKnobFactor(cf.height/cb);
var cc=ce.getPosition();
ce.setPosition(Math.min(cc,ca));
}else{ce.setMaximum(0);
ce.setKnobFactor(1);
ce.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var cg=e.getData();
this.fireDataEvent(D,cg,e.getOldData());
this.__Al.scrollToX(cg);
this.__Am.scrollToX(cg);
},_onScrollY:function(e){this.fireDataEvent(N,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var ch=this.getTable();

if(!ch.getEnabled()){return;
}var ck=e.getWheelDelta(E);
if(ck>0&&ck<1){ck=1;
}else if(ck<0&&ck>-1){ck=-1;
}this.__Ap.scrollBySteps(ck);
ck=e.getWheelDelta(K);
if(ck>0&&ck<1){ck=1;
}else if(ck<0&&ck>-1){ck=-1;
}this.__Ao.scrollBySteps(ck);
if(this.__AF&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__AF,this.__AG);
}var cj=this.__Ap.getPosition();
var ci=this.__Ap.getMaximum();
if(ck<0&&cj<=0||ck>0&&cj>=ci){return;
}e.stop();
},__AK:function(cl){var cq=this.getTable();
var cr=this.__pw.getHeaderWidgetAtColumn(this.__Az);
var cm=cr.getSizeHint().minWidth;
var co=Math.max(cm,this.__AB+cl-this.__AA);

if(this.getLiveResize()){var cn=cq.getTableColumnModel();
cn.setColumnWidth(this.__Az,co,true);
}else{this.__pw.setColumnWidth(this.__Az,co,true);
var cp=this.getTablePaneModel();
this._showResizeLine(cp.getColumnLeft(this.__Az)+co);
}this.__AA+=co-this.__AB;
this.__AB=co;
},__AL:function(cs){var ct=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__pw.isShowingColumnMoveFeedback()||cs>this.__Ay+ct||cs<this.__Ay-ct){this.__Av+=cs-this.__Ay;
this.__pw.showColumnMoveFeedback(this.__Au,this.__Av);
var cu=this.__Aj.getTablePaneScrollerAtPageX(cs);

if(this.__Ax&&this.__Ax!=cu){this.__Ax.hideColumnMoveFeedback();
}
if(cu!=null){this.__Aw=cu.showColumnMoveFeedback(cs);
}else{this.__Aw=null;
}this.__Ax=cu;
this.__Ay=cs;
}},_onMousemoveHeader:function(e){var cB=this.getTable();

if(!cB.getEnabled()){return;
}var cC=false;
var cv=null;
var cz=e.getDocumentLeft();
var cA=e.getDocumentTop();
this.__AF=cz;
this.__AG=cA;

if(this.__Az!=null){this.__AK(cz);
cC=true;
e.stopPropagation();
}else if(this.__Au!=null){this.__AL(cz);
e.stopPropagation();
}else{var cw=this._getResizeColumnForPageX(cz);

if(cw!=-1){cC=true;
}else{var cy=cB.getTableModel();
var cD=this._getColumnForPageX(cz);

if(cD!=null&&cy.isColumnSortable(cD)){cv=cD;
}}}var cx=cC?Y:null;
this.getApplicationRoot().setGlobalCursor(cx);
this.setCursor(cx);
this.__pw.setMouseOverColumn(cv);
},_onMousemovePane:function(e){var cE=this.getTable();

if(!cE.getEnabled()){return;
}var cG=e.getDocumentLeft();
var cH=e.getDocumentTop();
this.__AF=cG;
this.__AG=cH;
var cF=this._getRowForPagePos(cG,cH);

if(cF!=null&&this._getColumnForPageX(cG)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cG,cH);
}}this.__pw.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var cJ=e.getDocumentLeft();
var cK=this._getResizeColumnForPageX(cJ);

if(cK!=-1){this._startResizeHeader(cK,cJ);
e.stop();
}else{var cI=this._getColumnForPageX(cJ);

if(cI!=null){this._startMoveHeader(cI,cJ);
e.stop();
}}},_startResizeHeader:function(cL,cM){var cN=this.getTable().getTableColumnModel();
this.__Az=cL;
this.__AA=cM;
this.__AB=cN.getColumnWidth(this.__Az);
this.__Al.capture();
},_startMoveHeader:function(cO,cP){this.__Au=cO;
this.__Ay=cP;
this.__Av=this.getTablePaneModel().getColumnLeft(cO);
this.__Al.capture();
},_onMousedownPane:function(e){var cT=this.getTable();

if(!cT.getEnabled()){return;
}
if(cT.isEditing()){cT.stopEditing();
}var cQ=e.getDocumentLeft();
var cS=e.getDocumentTop();
var cV=this._getRowForPagePos(cQ,cS);
var cU=this._getColumnForPageX(cQ);

if(cV!==null){this.__AC={row:cV,col:cU};
this.__AD=false;
var cR=this.getSelectBeforeFocus();

if(cR){cT.getSelectionManager().handleMouseDown(cV,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cQ,cS);
}
if(!cR){cT.getSelectionManager().handleMouseDown(cV,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__AC&&!this.__AD&&!this.isEditing()&&this.__Aq.getRow()==this.__AC.row&&this.__Aq.getColumn()==this.__AC.col){this.fireEvent(bi,qx.ui.table.pane.CellEvent,[this,e,this.__AC.row,this.__AC.col],true);
this.__AD=true;
}else if(!this.isEditing()){this._onMousedownPane(e);
}},_onChangeCaptureHeader:function(e){if(this.__Az!=null){this._stopResizeHeader();
}
if(this.__Au!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var cW=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
cW.setColumnWidth(this.__Az,this.__AB,true);
}this.__Az=null;
this.__Al.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var cX=this.__AH.getBounds().height;
this.__AH.setUserBounds(0,0,this.__AB,cX);
}},_stopMoveHeader:function(){var dd=this.getTable().getTableColumnModel();
var de=this.getTablePaneModel();
this.__pw.hideColumnMoveFeedback();

if(this.__Ax){this.__Ax.hideColumnMoveFeedback();
}
if(this.__Aw!=null){var dg=de.getFirstColumnX()+de.getX(this.__Au);
var dc=this.__Aw;

if(dc!=dg&&dc!=dg+1){var df=dd.getVisibleColumnAtX(dg);
var db=dd.getVisibleColumnAtX(dc);
var da=dd.getOverallX(df);
var cY=(db!=null)?dd.getOverallX(db):dd.getOverallColumnCount();

if(cY>da){cY--;
}dd.moveColumn(da,cY);
this._updateFocusIndicator();
}}this.__Au=null;
this.__Aw=null;
this.__Al.releaseCapture();
},_onMouseupPane:function(e){var dh=this.getTable();

if(!dh.getEnabled()){return;
}var di=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(di!=-1&&di!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){dh.getSelectionManager().handleMouseUp(di,e);
}},_onMouseupHeader:function(e){var dj=this.getTable();

if(!dj.getEnabled()){return;
}
if(this.__Az!=null){this._stopResizeHeader();
this.__AE=true;
e.stop();
}else if(this.__Au!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__AE){this.__AE=false;
return;
}var dp=this.getTable();

if(!dp.getEnabled()){return;
}var dm=dp.getTableModel();
var dn=e.getDocumentLeft();
var dl=this._getResizeColumnForPageX(dn);

if(dl==-1){var ds=this._getColumnForPageX(dn);

if(ds!=null&&dm.isColumnSortable(ds)){var dk=dm.getSortColumnIndex();
var dq=(ds!=dk)?true:!dm.isSortAscending();
var dr={column:ds,ascending:dq,clickEvent:e};

if(this.fireDataEvent(y,dr,null,true)){dm.sortByColumn(ds,dq);

if(this.getResetSelectionOnHeaderClick()){dp.getSelectionModel().resetSelection();
}}}}e.stop();
},_onClickPane:function(e){var dt=this.getTable();

if(!dt.getEnabled()){return;
}var dw=e.getDocumentLeft();
var dx=e.getDocumentTop();
var du=this._getRowForPagePos(dw,dx);
var dv=this._getColumnForPageX(dw);

if(du!=null&&dv!=null){dt.getSelectionManager().handleClick(du,e);

if(this.__Aq.isHidden()||(this.__AC&&!this.__AD&&!this.isEditing()&&du==this.__AC.row&&dv==this.__AC.col)){this.fireEvent(bi,qx.ui.table.pane.CellEvent,[this,e,du,dv],true);
this.__AD=true;
}}},_onContextMenu:function(e){var dB=e.getDocumentLeft();
var dC=e.getDocumentTop();
var dz=this._getRowForPagePos(dB,dC);
var dA=this._getColumnForPageX(dB);
if(dz===null&&this.getContextMenuFromDataCellsOnly()){return;
}
if(!this.getShowCellFocusIndicator()||dz===null||(this.__AC&&dz==this.__AC.row&&dA==this.__AC.col)){this.fireEvent(bb,qx.ui.table.pane.CellEvent,[this,e,dz,dA],true);
var dy=this.getTable().getContextMenu();

if(dy){if(dy.getChildren().length>0){dy.openAtMouse(e);
}else{dy.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var dE=e.getDocumentLeft();
var dF=e.getDocumentTop();
this._focusCellAtPagePos(dE,dF);
this.startEditing();
var dD=this._getRowForPagePos(dE,dF);

if(dD!=-1&&dD!=null){this.fireEvent(G,qx.ui.table.pane.CellEvent,[this,e,dD],true);
}},_onMouseout:function(e){var dG=this.getTable();

if(!dG.getEnabled()){return;
}if(this.__Az==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__pw.setMouseOverColumn(null);
if(this.getFocusCellOnMouseMove()){this.__Aj.setFocusedCell();
}},_showResizeLine:function(x){var dI=this._showChildControl(n);
var dH=dI.getWidth();
var dJ=this.__Am.getBounds();
dI.setUserBounds(x-Math.round(dH/2),0,dH,dJ.height);
},_hideResizeLine:function(){this._excludeChildControl(n);
},showColumnMoveFeedback:function(dK){var dT=this.getTablePaneModel();
var dS=this.getTable().getTableColumnModel();
var dN=this.__Ak.getContainerLocation().left;
var dR=dT.getColumnCount();
var dO=0;
var dM=0;
var dW=dN;

for(var dL=0;dL<dR;dL++){var dP=dT.getColumnAtX(dL);
var dU=dS.getColumnWidth(dP);

if(dK<dW+dU/2){break;
}dW+=dU;
dO=dL+1;
dM=dW-dN;
}var dQ=this.__Am.getContainerLocation().left;
var dV=this.__Am.getBounds().width;
var scrollX=dQ-dN;
dM=qx.lang.Number.limit(dM,scrollX+2,scrollX+dV-1);
this._showResizeLine(dM);
return dT.getFirstColumnX()+dO;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dX,dY){var eb=this._getRowForPagePos(dX,dY);

if(eb!=-1&&eb!=null){var ea=this._getColumnForPageX(dX);
this.__Aj.setFocusedCell(ea,eb);
}},setFocusedCell:function(ec,ed){if(!this.isEditing()){this.__Ak.setFocusedCell(ec,ed,this.__As);
this.__zD=ec;
this.__zE=ed;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__zD;
},getFocusedRow:function(){return this.__zE;
},scrollCellVisible:function(ee,ef){var ep=this.getTablePaneModel();
var eg=ep.getX(ee);

if(eg!=-1){var em=this.__Am.getInnerSize();

if(!em){return;
}var en=this.getTable().getTableColumnModel();
var ej=ep.getColumnLeft(ee);
var eq=en.getColumnWidth(ee);
var eh=this.getTable().getRowHeight();
var er=ef*eh;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var eo=Math.min(ej,ej+eq-em.width);
var el=ej;
this.setScrollX(Math.max(eo,Math.min(el,scrollX)));
var ei=er+eh-em.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){ei+=eh;
}var ek=er;
this.setScrollY(Math.max(ei,Math.min(ek,scrollY)),true);
}},isEditing:function(){return this.__AH!=null;
},startEditing:function(){var ew=this.getTable();
var eu=ew.getTableModel();
var ey=this.__zD;

if(!this.isEditing()&&(ey!=null)&&eu.isColumnEditable(ey)){var ez=this.__zE;
var es=this.getTablePaneModel().getX(ey);
var et=eu.getValue(ey,ez);
this.scrollCellVisible(es,ez);
this.__AI=ew.getTableColumnModel().getCellEditorFactory(ey);
var ev={col:ey,row:ez,xPos:es,value:et,table:ew};
this.__AH=this.__AI.createCellEditor(ev);
if(this.__AH===null){return false;
}else if(this.__AH instanceof qx.ui.window.Window){this.__AH.setModal(true);
this.__AH.setShowClose(false);
this.__AH.addListener(A,this._onCellEditorModalWindowClose,this);
var f=ew.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__AH,ev);
}this.__AH.open();
}else{var ex=this.__Aq.getInnerSize();
this.__AH.setUserBounds(0,0,ex.width,ex.height);
this.__Aq.addListener(m,function(e){this.__AC={row:this.__zE,col:this.__zD};
e.stopPropagation();
},this);
this.__Aq.add(this.__AH);
this.__Aq.addState(bm);
this.__Aq.setKeepActive(false);
this.__Aq.setDecorator(bq);
this.__AH.focus();
this.__AH.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__Aq.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var eB=this.__AI.getCellEditorValue(this.__AH);
var eA=this.getTable().getTableModel().getValue(this.__zD,this.__zE);
this.getTable().getTableModel().setValue(this.__zD,this.__zE,eB);
this.__Aj.focus();
this.__Aj.fireDataEvent(bd,{row:this.__zE,col:this.__zD,oldValue:eA,value:eB});
}},cancelEditing:function(){if(this.isEditing()&&!this.__AH.pendingDispose){if(this._cellEditorIsModalWindow){this.__AH.destroy();
this.__AH=null;
this.__AI=null;
this.__AH.pendingDispose=true;
}else{this.__Aq.removeState(bm);
this.__Aq.setKeepActive(true);
this.__AH.destroy();
this.__AH=null;
this.__AI=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(eC){var eF=this.getTable().getTableColumnModel();
var eG=this.getTablePaneModel();
var eE=eG.getColumnCount();
var eI=this.__Ak.getContentLocation().left;

for(var x=0;x<eE;x++){var eD=eG.getColumnAtX(x);
var eH=eF.getColumnWidth(eD);
eI+=eH;

if(eC<eI){return eD;
}}return null;
},_getResizeColumnForPageX:function(eJ){var eN=this.getTable().getTableColumnModel();
var eO=this.getTablePaneModel();
var eM=eO.getColumnCount();
var eQ=this.__pw.getContainerLocation().left;
var eK=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<eM;x++){var eL=eO.getColumnAtX(x);
var eP=eN.getColumnWidth(eL);
eQ+=eP;

if(eJ>=(eQ-eK)&&eJ<=(eQ+eK)){return eL;
}}return -1;
},_getRowForPagePos:function(eR,eS){var eT=this.__Ak.getContentLocation();

if(eR<eT.left||eR>eT.right){return null;
}
if(eS>=eT.top&&eS<=eT.bottom){var eU=this.getTable().getRowHeight();
var scrollY=this.__Ap.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eU)*eU;
}var eX=scrollY+eS-eT.top;
var fa=Math.floor(eX/eU);
var eY=this.getTable().getTableModel();
var eV=eY.getRowCount();
return (fa<eV)?fa:null;
}var eW=this.__pw.getContainerLocation();

if(eS>=eW.top&&eS<=eW.bottom&&eR<=eW.right){return -1;
}return null;
},setTopRightWidget:function(fb){var fc=this.__AJ;

if(fc!=null){this.__vk.remove(fc);
}
if(fb!=null){this.__vk.add(fb);
}this.__AJ=fb;
},getTopRightWidget:function(){return this.__AJ;
},getHeader:function(){return this.__pw;
},getTablePane:function(){return this.__Ak;
},getVerticalScrollBarWidth:function(){var fd=this.__Ap;
return fd.isVisible()?(fd.getSizeHint().width||0):0;
},getNeededScrollBars:function(fe,ff){var fo=this.__Ap;
var fs=fo.getSizeHint().width+fo.getMarginLeft()+fo.getMarginRight();
var fu=this.__Ao;
var ft=fu.getSizeHint().height+fu.getMarginTop()+fu.getMarginBottom();
var fm=this.__Am.getInnerSize();
var fg=fm?fm.width:0;

if(this.getVerticalScrollBarVisible()){fg+=fs;
}var fr=fm?fm.height:0;

if(this.getHorizontalScrollBarVisible()){fr+=ft;
}var fn=this.getTable().getTableModel();
var fk=fn.getRowCount();
var fh=this.getTablePaneModel().getTotalWidth();
var fp=this.getTable().getRowHeight()*fk;
var fj=false;
var fq=false;

if(fh>fg){fj=true;

if(fp>fr-ft){fq=true;
}}else if(fp>fr){fq=true;

if(!ff&&(fh>fg-fs)){fj=true;
}}var fl=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var fi=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((fe||fj)?fl:0)|((ff||!fq)?0:fi);
},getPaneClipper:function(){return this.__Am;
},_applyScrollTimeout:function(fv,fw){this._startInterval(fv);
},_startInterval:function(fx){this.__lh.setInterval(fx);
this.__lh.start();
},_stopInterval:function(){this.__lh.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__As&&!this.__Ak._layoutPending){this.__As=false;
this._updateContent();
}}),_updateContent:function(){var fC=this.__Am.getInnerSize();

if(!fC){return;
}var fF=fC.height;
var scrollX=this.__Ao.getPosition();
var scrollY=this.__Ap.getPosition();
var fz=this.getTable().getRowHeight();
var fA=Math.floor(scrollY/fz);
var fE=this.__Ak.getFirstVisibleRow();
this.__Ak.setFirstVisibleRow(fA);
var fB=Math.ceil(fF/fz);
var fy=0;
var fD=this.getTable().getKeepFirstVisibleRowComplete();

if(!fD){fB++;
fy=scrollY%fz;
}this.__Ak.setVisibleRowCount(fB);

if(fA!=fE){this._updateFocusIndicator();
}this.__Am.scrollToX(scrollX);
if(!fD){this.__Am.scrollToY(fy);
}},_updateFocusIndicator:function(){var fG=this.getTable();

if(!fG.getEnabled()){return;
}this.__Aq.moveToCell(this.__zD,this.__zE);
}},destruct:function(){this._stopInterval();
var fH=this.getTablePaneModel();

if(fH){fH.dispose();
}this.__AC=this.__AJ=this.__Aj=null;
this._disposeObjects(t,s,be,w,W,v,r,P,L,z);
}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(b){this.getContentElement().scrollToX(b,false);
},scrollToY:function(c){this.getContentElement().scrollToY(c,true);
}}});
})();
(function(){var d="qx.nativeScrollBars",c="os.scrollBarOverlayed",b="osx",a="qx.bom.client.Scroll";
qx.Bootstrap.define(a,{statics:{scrollBarOverlayed:function(){var e=qx.bom.element.Overflow.getScrollbarWidth();
var f=qx.bom.client.OperatingSystem.getName()===b;
var g=qx.core.Environment.get(d);
return e==0&&f&&g;
}},defer:function(h){qx.core.Environment.add(c,h.scrollBarOverlayed);
}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(h){qx.ui.container.Composite.call(this);
this.__AM=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__AM:null,_onKeyPress:function(e){var i=e.getKeyIdentifier();

if(i!==f&&i!==c){e.stopPropagation();
}},moveToCell:function(j,k){if(!this.__AM.getShowCellFocusIndicator()&&!this.__AM.getTable().getTableModel().isColumnEditable(j)){this.exclude();
return;
}else{this.show();
}
if(j==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var l=this.__AM.getTablePaneModel().getX(j);

if(l==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var q=this.__AM.getTable();
var o=q.getTableColumnModel();
var p=this.__AM.getTablePaneModel();
var n=this.__AM.getTablePane().getFirstVisibleRow();
var m=q.getRowHeight();
this.setUserBounds(p.getColumnLeft(j)-2,(k-n)*m-2,o.getColumnWidth(j)+3,m+3);
this.show();
this.setRow(k);
this.setColumn(j);
}}}},destruct:function(){this.__AM=null;
}});
})();
(function(){var b="Integer",a="qx.ui.table.pane.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);

if(e!=null){this.setRow(e);
}else{this.setRow(c._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(f!=null){this.setColumn(f);
}else{this.setColumn(c._getColumnForPageX(this.getDocumentLeft()));
}},clone:function(g){var h=qx.event.type.Mouse.prototype.clone.call(this,g);
h.set({row:this.getRow(),column:this.getColumn()});
return h;
}}});
})();
(function(){var a="qx.lang.Number";
qx.Class.define(a,{statics:{isInRange:function(b,c,d){return b>=c&&b<=d;
},isBetweenRange:function(e,f,g){return e>f&&e<g;
},limit:function(h,i,j){if(j!=null&&h>j){return j;
}else if(i!=null&&h<i){return i;
}else{return h;
}}}});
})();
(function(){var h="headerCellRendererChanged",g="visibilityChangedPre",f="Number",e="qx.event.type.Event",d="_applyFirstColumnX",c="Integer",b="qx.ui.table.pane.Model",a="_applyMaxColumnCount";
qx.Class.define(b,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setTableColumnModel(i);
},events:{"modelChanged":e},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:c,init:0,apply:d},maxColumnCount:{check:f,init:-1,apply:a}},members:{__AN:null,__AO:null,_applyFirstColumnX:function(j,k){this.__AN=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(l,m){this.__AN=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){if(this.__AO){this.__AO.removeListener(g,this._onColVisibilityChanged,this);
this.__AO.removeListener(h,this._onColVisibilityChanged,this);
}this.__AO=n;
this.__AO.addListener(g,this._onColVisibilityChanged,this);
this.__AO.addListener(h,this._onHeaderCellRendererChanged,this);
this.__AN=null;
},_onColVisibilityChanged:function(o){this.__AN=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_onHeaderCellRendererChanged:function(p){this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__AN==null){var q=this.getFirstColumnX();
var s=this.getMaxColumnCount();
var r=this.__AO.getVisibleColumnCount();

if(s==-1||(q+s)>r){this.__AN=r-q;
}else{this.__AN=s;
}}return this.__AN;
},getColumnAtX:function(t){var u=this.getFirstColumnX();
return this.__AO.getVisibleColumnAtX(u+t);
},getX:function(v){var w=this.getFirstColumnX();
var y=this.getMaxColumnCount();
var x=this.__AO.getVisibleX(v)-w;

if(x>=0&&(y==-1||x<y)){return x;
}else{return -1;
}},getColumnLeft:function(z){var C=0;
var B=this.getColumnCount();

for(var x=0;x<B;x++){var A=this.getColumnAtX(x);

if(A==z){return C;
}C+=this.__AO.getColumnWidth(A);
}return -1;
},getTotalWidth:function(){var D=0;
var E=this.getColumnCount();

for(var x=0;x<E;x++){var F=this.getColumnAtX(x);
D+=this.__AO.getColumnWidth(F);
}return D;
}},destruct:function(){if(this.__AO){this.__AO.removeListener(g,this._onColVisibilityChanged,this);
this.__AO.removeListener(h,this._onColVisibilityChanged,this);
}this.__AO=null;
}});
})();
(function(){var eq="css.gradient.linear",ep="widget",eo="atom",en="-css",em="button-frame",el="css.borderradius",ek="css.boxshadow",ej="main",ei="button",eh="bold",cC="text-selected",cB="label",cA="image",cz="text-disabled",cy="middle",cx="selected",cw="background-light",cv="groupbox",cu="decoration/arrows/down.png",ct="popup",ex="cell",ey="border-invalid",ev="input-disabled",ew="menu-button",et="input",eu="input-focused-invalid",er="toolbar-button",es="spinner",ez="input-focused",eA="tooltip",dI="qx/static/blank.gif",dH="radiobutton",dK="list",dJ="tree-item",dM="combobox",dL="treevirtual-contract",dO="scrollbar",dN="datechooser/nav-button",dF="center",dE="checkbox",v="treevirtual-expand",w="",x="textfield",y="-invalid",z="decoration/arrows/right.png",A="background-application",B="invalid",C="right-top",D="selectbox",E="text-title",eO="icon/16/places/folder-open.png",eN="radiobutton-hovered",eM="group-item",eL="scrollbar/button",eS="right",eR="combobox/button",eQ="virtual-list",eP="icon/16/places/folder.png",eU="radiobutton-checked-focused",eT="text-label",bz="decoration/tree/closed.png",bA="table-scroller-header",bx="scrollbar-slider-horizontal",by="checkbox-hovered",bD="checkbox-checked",bE="decoration/arrows/left.png",bB="radiobutton-checked",bC="button-focused",bv="text-light",bw="menu-slidebar-button",bb="tree",ba="checkbox-undetermined",bd="table-scroller-header-css",bc="text-input",W="slidebar/button-forward",V="background-splitpane",Y="text-hovered",X=".png",U="decoration/tree/open.png",T="default",bK="decoration/arrows/down-small.png",bL="datechooser",bM="slidebar/button-backward",bN="radiobutton-checked-disabled",bG="checkbox-focused",bH="radiobutton-checked-hovered",bI="treevirtual-folder",bJ="shadow-popup",bO="icon/16/mimetypes/office-document.png",bP="background-medium",bo="icon/32/places/folder-open.png",bn="icon/22/places/folder-open.png",bm="table",bl="decoration/arrows/up.png",bk="decoration/form/",bj="radiobutton-focused",bi="button-checked",bh="decoration/window/maximize-active-hovered.png",bs="keyboard-focus",br="menu-css",bQ="decoration/cursors/",bR="icon/16/apps/office-calendar.png",bS="slidebar",bT="tooltip-error-arrow",bU="table-scroller-focus-indicator",bV="popup-css",bW="move-frame",bX="nodrop",bY="decoration/table/boolean-true.png",ca="-invalid-css",cK="menu",cJ="app-header",cI="row-layer",cH="text-inactive",cO="move",cN="decoration/window/restore-active-hovered.png",cM="border-separator",cL="shadow-window",cS="tree-folder",cR="window-pane-css",ds="right.png",dt="checkbox-undetermined-hovered",dq="window-incl-statusbar-css",dr="tabview-page-button-bottom-inactive",dn="tooltip-error",dp="window-css",dl="window-statusbar",dm="button-hovered",dA="decoration/scrollbar/scrollbar-",dB="background-tip",dT="menubar-css",dS="scrollbar-slider-horizontal-disabled",dV="radiobutton-disabled",dU="window-resize-frame-css",dX="button-pressed",dW="table-pane",ea="decoration/window/close-active.png",dY="native",dQ="button-invalid-shadow",dP="decoration/window/minimize-active-hovered.png",eH="menubar",eI="icon/16/actions/dialog-cancel.png",eJ="tabview-page-button-top-inactive",eK="tabview-page-button-left-inactive",eD="menu-slidebar",eE="toolbar-button-checked",eF="decoration/tree/open-selected.png",eG="decoration/window/minimize-inactive.png",eB="group-item-css",eC="group",k="tabview-page-button-right-inactive",j="decoration/window/minimize-active.png",i="decoration/window/restore-inactive.png",h="checkbox-checked-focused",g="splitpane",f="combobox/textfield",e="decoration/window/close-active-hovered.png",d="qx/icon/Tango/16/actions/window-close.png",c="checkbox-pressed",b="button-disabled",J="selected-dragover",K="tooltip-error-css",H="decoration/window/maximize-inactive.png",I="dragover",N="scrollarea",O="scrollbar-vertical",L="decoration/menu/checkbox-invert.gif",M="decoration/toolbar/toolbar-handle-knob.gif",Q="icon/22/mimetypes/office-document.png",R="table-header-cell",cW="button-checked-focused",cQ="up.png",de="best-fit",da="pane-css",cF="decoration/tree/closed-selected.png",cD="qx.theme.modern.Appearance",bf="text-active",cG="checkbox-disabled",bq="toolbar-button-hovered",bp="window-resize-frame-incl-statusbar-css",ck="decoration/form/checked.png",cl="progressive-table-header",cm="decoration/table/select-column-order.png",cn="decoration/menu/radiobutton.gif",co="decoration/arrows/forward.png",cp="decoration/table/descending.png",cq="decoration/form/undetermined.png",cr="tree-file",ch="window-captionbar-active",ci="checkbox-checked-hovered",cE="scrollbar-slider-vertical",dd="toolbar",dc="alias",db="decoration/window/restore-active.png",di="decoration/table/boolean-false.png",dh="icon/32/mimetypes/office-document.png",dg="tabview-pane",df="decoration/arrows/rewind.png",cY="top",cX="icon/16/actions/dialog-ok.png",P="progressbar-background",bu="table-header-cell-hovered",bt="window-statusbar-css",cP="window",bF="text-gray",cV="decoration/menu/radiobutton-invert.gif",cU="text-placeholder",cT="slider",be="toolbar-css",dk="keep-align",S="down.png",bg="groupitem-text",cb="tabview-page-button-top-active",cc="icon/22/places/folder.png",cd="decoration/window/maximize-active.png",ce="checkbox-checked-pressed",cf="decoration/window/close-inactive.png",cg="tabview-page-button-left-active",dD="toolbar-part",cj="decoration/splitpane/knob-vertical.png",ec=".gif",eb="table-statusbar",ee="progressive-table-header-cell-css",ed="window-captionbar-inactive",eg="copy",ef="decoration/arrows/down-invert.png",cs="decoration/menu/checkbox.gif",dR="window-caption-active-text",dj="decoration/splitpane/knob-horizontal.png",dG="group-css",F="icon/32/places/folder.png",G="toolbar-separator",dy="tabview-page-button-bottom-active",dz="decoration/arrows/up-small.png",dw="decoration/table/ascending.png",dx="decoration/arrows/up-invert.png",du="small",dv="tabview-page-button-right-active",a="-disabled",dC="scrollbar-horizontal",s="progressbar",r="checkbox-undetermined-focused",q="progressive-table-header-cell",p="menu-separator",o="tabview-pane-css",n="pane",m="htmlarea-background",l="decoration/arrows/right-invert.png",u="left.png",t="icon/16/actions/view-refresh.png";
qx.Theme.define(cD,{appearances:{"widget":{},"root":{style:function(eV){return {backgroundColor:A,textColor:eT,font:T};
}},"label":{style:function(eW){return {textColor:eW.disabled?cz:undefined};
}},"move-frame":{style:function(eX){return {decorator:ej};
}},"resize-frame":bW,"dragdrop-cursor":{style:function(eY){var fa=bX;

if(eY.copy){fa=eg;
}else if(eY.move){fa=cO;
}else if(eY.alias){fa=dc;
}return {source:bQ+fa+ec,position:C,offset:[2,16,2,6]};
}},"image":{style:function(fb){return {opacity:!fb.replacement&&fb.disabled?0.3:1};
}},"atom":{},"atom/label":cB,"atom/icon":cA,"popup":{style:function(fc){var fd=qx.core.Environment.get(ek);
return {decorator:fd?bV:ej,backgroundColor:cw,shadow:fd?undefined:bJ};
}},"button-frame":{alias:eo,style:function(fe){var fi,fh;
var ff=[3,9];

if(fe.checked&&fe.focused&&!fe.inner){fi=cW;
fh=undefined;
ff=[1,7];
}else if(fe.disabled){fi=b;
fh=undefined;
}else if(fe.pressed){fi=dX;
fh=Y;
}else if(fe.checked){fi=bi;
fh=undefined;
}else if(fe.hovered){fi=dm;
fh=Y;
}else if(fe.focused&&!fe.inner){fi=bC;
fh=undefined;
ff=[1,7];
}else{fi=ei;
fh=undefined;
}var fg;
if(qx.core.Environment.get(el)&&qx.core.Environment.get(eq)){if(fe.invalid&&!fe.disabled){fi+=ca;
}else{fi+=en;
}}else{fg=fe.invalid&&!fe.disabled?dQ:undefined;
ff=[2,8];
}return {decorator:fi,textColor:fh,shadow:fg,padding:ff,margin:[1,0]};
}},"button-frame/image":{style:function(fj){return {opacity:!fj.replacement&&fj.disabled?0.5:1};
}},"button":{alias:em,include:em,style:function(fk){return {center:true};
}},"hover-button":{alias:eo,include:eo,style:function(fl){var fm=fl.hovered?cx:undefined;

if(fm&&qx.core.Environment.get(eq)){fm+=en;
}return {decorator:fm,textColor:fl.hovered?cC:undefined};
}},"splitbutton":{},"splitbutton/button":ei,"splitbutton/arrow":{alias:ei,include:ei,style:function(fn,fo){return {icon:cu,padding:[fo.padding[0],fo.padding[1]-6],marginLeft:1};
}},"form-renderer-label":{include:cB,style:function(){return {paddingTop:4};
}},"checkbox":{alias:eo,style:function(fp){var fq=qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var fs;

if(fq){if(fp.checked){fs=ck;
}else if(fp.undetermined){fs=cq;
}else{fs=dI;
}}else{if(fp.checked){if(fp.disabled){fs=bD;
}else if(fp.focused){fs=h;
}else if(fp.pressed){fs=ce;
}else if(fp.hovered){fs=ci;
}else{fs=bD;
}}else if(fp.undetermined){if(fp.disabled){fs=ba;
}else if(fp.focused){fs=r;
}else if(fp.hovered){fs=dt;
}else{fs=ba;
}}else if(!fp.disabled){if(fp.focused){fs=bG;
}else if(fp.pressed){fs=c;
}else if(fp.hovered){fs=by;
}}fs=fs||dE;
var fr=fp.invalid&&!fp.disabled?y:w;
fs=bk+fs+fr+X;
}return {icon:fs,minWidth:fq?14:undefined,gap:fq?8:6};
}},"checkbox/icon":{style:function(ft){var fv=qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);

if(!fv){return {opacity:!ft.replacement&&ft.disabled?0.3:1};
}var fw;

if(ft.disabled){fw=cG;
}else if(ft.focused){fw=bG;
}else if(ft.hovered){fw=by;
}else{fw=dE;
}fw+=ft.invalid&&!ft.disabled?y:w;
var fu;
if(ft.undetermined){fu=[2,0];
}return {decorator:fw,padding:fu,width:12,height:10};
}},"radiobutton":{alias:eo,style:function(fx){var fy=qx.core.Environment.get(el)&&qx.core.Environment.get(ek);
var fA;

if(fy){fA=dI;
}else{if(fx.checked&&fx.focused){fA=eU;
}else if(fx.checked&&fx.disabled){fA=bN;
}else if(fx.checked&&fx.hovered){fA=bH;
}else if(fx.checked){fA=bB;
}else if(fx.focused){fA=bj;
}else if(fx.hovered){fA=eN;
}else{fA=dH;
}var fz=fx.invalid&&!fx.disabled?y:w;
fA=bk+fA+fz+X;
}return {icon:fA,gap:fy?8:6};
}},"radiobutton/icon":{style:function(fB){var fC=qx.core.Environment.get(el)&&qx.core.Environment.get(ek);

if(!fC){return {opacity:!fB.replacement&&fB.disabled?0.3:1};
}var fD;

if(fB.disabled&&!fB.checked){fD=dV;
}else if(fB.checked&&fB.focused){fD=eU;
}else if(fB.checked&&fB.disabled){fD=bN;
}else if(fB.checked&&fB.hovered){fD=bH;
}else if(fB.checked){fD=bB;
}else if(fB.focused){fD=bj;
}else if(fB.hovered){fD=eN;
}else{fD=dH;
}fD+=fB.invalid&&!fB.disabled?y:w;
return {decorator:fD,width:12,height:10};
}},"textfield":{style:function(fE){var fJ;
var fH=!!fE.focused;
var fI=!!fE.invalid;
var fF=!!fE.disabled;

if(fH&&fI&&!fF){fJ=eu;
}else if(fH&&!fI&&!fF){fJ=ez;
}else if(fF){fJ=ev;
}else if(!fH&&fI&&!fF){fJ=ey;
}else{fJ=et;
}
if(qx.core.Environment.get(eq)){fJ+=en;
}var fG;

if(fE.disabled){fG=cz;
}else if(fE.showingPlaceholder){fG=cU;
}else{fG=bc;
}return {decorator:fJ,padding:[2,4,1],textColor:fG};
}},"textarea":{include:x,style:function(fK){return {padding:4};
}},"spinner":{style:function(fL){var fP;
var fN=!!fL.focused;
var fO=!!fL.invalid;
var fM=!!fL.disabled;

if(fN&&fO&&!fM){fP=eu;
}else if(fN&&!fO&&!fM){fP=ez;
}else if(fM){fP=ev;
}else if(!fN&&fO&&!fM){fP=ey;
}else{fP=et;
}
if(qx.core.Environment.get(eq)){fP+=en;
}return {decorator:fP};
}},"spinner/textfield":{style:function(fQ){return {marginRight:2,padding:[2,4,1],textColor:fQ.disabled?cz:bc};
}},"spinner/upbutton":{alias:em,include:em,style:function(fR,fS){return {icon:dz,padding:[fS.padding[0]-1,fS.padding[1]-5],shadow:undefined,margin:0};
}},"spinner/downbutton":{alias:em,include:em,style:function(fT,fU){return {icon:bK,padding:[fU.padding[0]-1,fU.padding[1]-5],shadow:undefined,margin:0};
}},"datefield":dM,"datefield/button":{alias:eR,include:eR,style:function(fV){return {icon:bR,padding:[0,3],decorator:undefined};
}},"datefield/textfield":f,"datefield/list":{alias:bL,include:bL,style:function(fW){return {decorator:undefined};
}},"groupbox":{style:function(fX){return {legendPosition:cY};
}},"groupbox/legend":{alias:eo,style:function(fY){return {padding:[1,0,1,4],textColor:fY.invalid?B:E,font:eh};
}},"groupbox/frame":{style:function(ga){var gb=qx.core.Environment.get(el);
return {padding:gb?10:12,margin:gb?1:undefined,decorator:gb?dG:eC};
}},"check-groupbox":cv,"check-groupbox/legend":{alias:dE,include:dE,style:function(gc){return {padding:[1,0,1,4],textColor:gc.invalid?B:E,font:eh};
}},"radio-groupbox":cv,"radio-groupbox/legend":{alias:dH,include:dH,style:function(gd){return {padding:[1,0,1,4],textColor:gd.invalid?B:E,font:eh};
}},"scrollarea":{style:function(ge){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(gf){return {backgroundColor:A};
}},"scrollarea/pane":ep,"scrollarea/scrollbar-x":dO,"scrollarea/scrollbar-y":dO,"scrollbar":{style:function(gg){if(gg[dY]){return {};
}var gh=qx.core.Environment.get(eq);
var gi=gg.horizontal?dC:O;

if(gh){gi+=en;
}return {width:gg.horizontal?undefined:16,height:gg.horizontal?16:undefined,decorator:gi,padding:1};
}},"scrollbar/slider":{alias:cT,style:function(gj){return {padding:gj.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:em,style:function(gk){var gl=qx.core.Environment.get(eq);
var gm=gk.horizontal?bx:cE;

if(gk.disabled){gm+=a;
}
if(gl){gm+=en;
}return {decorator:gm,minHeight:gk.horizontal?undefined:9,minWidth:gk.horizontal?9:undefined,padding:undefined,margin:0};
}},"scrollbar/button":{alias:em,include:em,style:function(gn){var gq=dA;

if(gn.left){gq+=u;
}else if(gn.right){gq+=ds;
}else if(gn.up){gq+=cQ;
}else{gq+=S;
}var gp=qx.core.Environment.get(eq);

if(gn.left||gn.right){var go=gn.left?3:4;
return {padding:gp?[3,0,3,go]:[2,0,2,go],icon:gq,width:15,height:14,margin:0};
}else{return {padding:gp?3:[3,2],icon:gq,width:14,height:15,margin:0};
}}},"scrollbar/button-begin":eL,"scrollbar/button-end":eL,"slider":{style:function(gr){var gv;
var gt=!!gr.focused;
var gu=!!gr.invalid;
var gs=!!gr.disabled;

if(gt&&gu&&!gs){gv=eu;
}else if(gt&&!gu&&!gs){gv=ez;
}else if(gs){gv=ev;
}else if(!gt&&gu&&!gs){gv=ey;
}else{gv=et;
}
if(qx.core.Environment.get(eq)){gv+=en;
}return {decorator:gv};
}},"slider/knob":{include:em,style:function(gw){return {decorator:gw.disabled?dS:bx,shadow:undefined,height:14,width:14,padding:0};
}},"list":{alias:N,style:function(gx){var gB;
var gz=!!gx.focused;
var gA=!!gx.invalid;
var gy=!!gx.disabled;

if(gz&&gA&&!gy){gB=eu;
}else if(gz&&!gA&&!gy){gB=ez;
}else if(gy){gB=ev;
}else if(!gz&&gA&&!gy){gB=ey;
}else{gB=et;
}
if(qx.core.Environment.get(eq)){gB+=en;
}return {backgroundColor:cw,decorator:gB};
}},"list/pane":ep,"listitem":{alias:eo,style:function(gC){var gD;

if(gC.dragover){gD=gC.selected?J:I;
}else{gD=gC.selected?cx:undefined;

if(gD&&qx.core.Environment.get(eq)){gD+=en;
}}return {padding:gC.dragover?[4,4,2,4]:4,textColor:gC.selected?cC:undefined,decorator:gD};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:em,include:em,style:function(gE){return {padding:5,center:true,icon:gE.vertical?cu:z};
}},"slidebar/button-backward":{alias:em,include:em,style:function(gF){return {padding:5,center:true,icon:gF.vertical?bl:bE};
}},"tabview":{style:function(gG){return {contentPadding:16};
}},"tabview/bar":{alias:bS,style:function(gH){var gI=qx.core.Environment.get(el)&&qx.core.Environment.get(ek)&&qx.core.Environment.get(eq);
var gJ={marginBottom:gH.barTop?-1:0,marginTop:gH.barBottom?gI?-4:-7:0,marginLeft:gH.barRight?gI?-3:-5:0,marginRight:gH.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(gH.barTop||gH.barBottom){gJ.paddingLeft=5;
gJ.paddingRight=7;
}else{gJ.paddingTop=5;
gJ.paddingBottom=7;
}return gJ;
}},"tabview/bar/button-forward":{include:W,alias:W,style:function(gK){if(gK.barTop||gK.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bM,alias:bM,style:function(gL){if(gL.barTop||gL.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gM){var gN=qx.core.Environment.get(eq)&&qx.core.Environment.get(el);
return {decorator:gN?o:dg,minHeight:100,marginBottom:gM.barBottom?-1:0,marginTop:gM.barTop?-1:0,marginLeft:gM.barLeft?-1:0,marginRight:gM.barRight?-1:0};
}},"tabview-page":{alias:ep,include:ep,style:function(gO){var gP=qx.core.Environment.get(eq)&&qx.core.Environment.get(el);
return {padding:gP?[4,3]:undefined};
}},"tabview-page/button":{alias:eo,style:function(gQ){var gX,gT=0;
var gW=0,gR=0,gU=0,gV=0;
var gS=qx.core.Environment.get(el)&&qx.core.Environment.get(ek)&&qx.core.Environment.get(eq);

if(gQ.checked){if(gQ.barTop){gX=cb;
gT=gS?[5,11]:[6,14];
gU=gQ.firstTab?0:-5;
gV=gQ.lastTab?0:-5;
}else if(gQ.barBottom){gX=dy;
gT=gS?[5,11]:[6,14];
gU=gQ.firstTab?0:-5;
gV=gQ.lastTab?0:-5;
gW=3;
}else if(gQ.barRight){gX=dv;
gT=gS?[5,10]:[6,13];
gW=gQ.firstTab?0:-5;
gR=gQ.lastTab?0:-5;
gU=2;
}else{gX=cg;
gT=gS?[5,10]:[6,13];
gW=gQ.firstTab?0:-5;
gR=gQ.lastTab?0:-5;
}}else{if(gQ.barTop){gX=eJ;
gT=gS?[3,9]:[4,10];
gW=4;
gU=gQ.firstTab?5:1;
gV=1;
}else if(gQ.barBottom){gX=dr;
gT=gS?[3,9]:[4,10];
gR=4;
gU=gQ.firstTab?5:1;
gV=1;
gW=3;
}else if(gQ.barRight){gX=k;
gT=gS?[3,9]:[4,10];
gV=5;
gW=gQ.firstTab?5:1;
gR=1;
gU=3;
}else{gX=eK;
gT=gS?[3,9]:[4,10];
gU=5;
gW=gQ.firstTab?5:1;
gR=1;
gV=1;
}}
if(gX&&gS){gX+=en;
}return {zIndex:gQ.checked?10:5,decorator:gX,padding:gT,marginTop:gW,marginBottom:gR,marginLeft:gU,marginRight:gV,textColor:gQ.disabled?cz:gQ.checked?bf:cH};
}},"tabview-page/button/label":{alias:cB,style:function(gY){return {padding:[0,1,0,1],margin:gY.focused?0:1,decorator:gY.focused?bs:undefined};
}},"tabview-page/button/close-button":{alias:eo,style:function(ha){return {icon:d};
}},"toolbar":{style:function(hb){var hc=qx.core.Environment.get(eq);
return {decorator:hc?be:dd,spacing:2};
}},"toolbar/part":{style:function(hd){return {decorator:dD,spacing:2};
}},"toolbar/part/container":{style:function(he){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(hf){return {source:M,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:eo,style:function(hg){var hi;

if(hg.pressed||(hg.checked&&!hg.hovered)||(hg.checked&&hg.disabled)){hi=eE;
}else if(hg.hovered&&!hg.disabled){hi=bq;
}var hh=qx.core.Environment.get(eq)&&qx.core.Environment.get(el);

if(hh&&hi){hi+=en;
}return {marginTop:2,marginBottom:2,padding:(hg.pressed||hg.checked||hg.hovered)&&!hg.disabled||(hg.disabled&&hg.checked)?3:5,decorator:hi};
}},"toolbar-menubutton":{alias:er,include:er,style:function(hj){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:cA,include:cA,style:function(hk){return {source:bK};
}},"toolbar-splitbutton":{style:function(hl){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:er,include:er,style:function(hm){return {icon:cu,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:er,include:er,style:function(hn){if(hn.pressed||hn.checked||(hn.hovered&&!hn.disabled)){var ho=1;
}else{var ho=3;
}return {padding:ho,icon:cu,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(hp){return {decorator:G,margin:7};
}},"tree":dK,"tree-item":{style:function(hq){var hr=hq.selected?cx:undefined;

if(hr&&qx.core.Environment.get(eq)){hr+=en;
}return {padding:[2,6],textColor:hq.selected?cC:undefined,decorator:hr};
}},"tree-item/icon":{include:cA,style:function(hs){return {paddingRight:5};
}},"tree-item/label":cB,"tree-item/open":{include:cA,style:function(ht){var hu;

if(ht.selected&&ht.opened){hu=eF;
}else if(ht.selected&&!ht.opened){hu=cF;
}else if(ht.opened){hu=U;
}else{hu=bz;
}return {padding:[0,5,0,2],source:hu};
}},"tree-folder":{include:dJ,alias:dJ,style:function(hv){var hx,hw;

if(hv.small){hx=hv.opened?eO:eP;
hw=eO;
}else if(hv.large){hx=hv.opened?bo:F;
hw=bo;
}else{hx=hv.opened?bn:cc;
hw=bn;
}return {icon:hx,iconOpened:hw};
}},"tree-file":{include:dJ,alias:dJ,style:function(hy){return {icon:hy.small?bO:hy.large?dh:Q};
}},"treevirtual":bm,"treevirtual-folder":{style:function(hz){return {icon:hz.opened?eO:eP};
}},"treevirtual-file":{include:bI,alias:bI,style:function(hA){return {icon:bO};
}},"treevirtual-line":{style:function(hB){return {icon:dI};
}},"treevirtual-contract":{style:function(hC){return {icon:U,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(hD){return {icon:bz,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":dL,"treevirtual-only-expand":v,"treevirtual-start-contract":dL,"treevirtual-start-expand":v,"treevirtual-end-contract":dL,"treevirtual-end-expand":v,"treevirtual-cross-contract":dL,"treevirtual-cross-expand":v,"treevirtual-end":{style:function(hE){return {icon:dI};
}},"treevirtual-cross":{style:function(hF){return {icon:dI};
}},"tooltip":{include:ct,style:function(hG){return {backgroundColor:dB,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":eo,"tooltip-error":{include:eA,style:function(hH){var hI=qx.core.Environment.get(el)&&qx.core.Environment.get(ek);
return {textColor:cC,backgroundColor:undefined,placeMethod:ep,offset:[0,0,0,14],marginTop:-2,position:C,showTimeout:100,hideTimeout:10000,decorator:hI?K:dn,shadow:bT,font:eh,padding:hI?3:undefined};
}},"tooltip-error/atom":eo,"window":{style:function(hJ){var hL=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var hM;
var hK;

if(hL){if(hJ.showStatusbar){hM=dq;
}else{hM=dp;
}}else{hK=cL;
}return {decorator:hM,shadow:hK,contentPadding:[10,10,10,10],margin:hJ.maximized?0:[0,5,5,0]};
}},"window-resize-frame":{style:function(hN){var hO=qx.core.Environment.get(el);
var hP;

if(hO){if(hN.showStatusbar){hP=bp;
}else{hP=dU;
}}else{hP=ej;
}return {decorator:hP};
}},"window/pane":{style:function(hQ){var hR=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
return {decorator:hR?cR:cP};
}},"window/captionbar":{style:function(hS){var hT=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var hU=hS.active?ch:ed;

if(hT){hU+=en;
}return {decorator:hU,textColor:hS.active?dR:bF,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(hV){return {margin:[5,0,3,6]};
}},"window/title":{style:function(hW){return {alignY:cy,font:eh,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:eo,style:function(hX){return {icon:hX.active?hX.hovered?dP:j:eG,margin:[4,8,2,0]};
}},"window/restore-button":{alias:eo,style:function(hY){return {icon:hY.active?hY.hovered?cN:db:i,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:eo,style:function(ia){return {icon:ia.active?ia.hovered?bh:cd:H,margin:[4,8,2,0]};
}},"window/close-button":{alias:eo,style:function(ib){return {icon:ib.active?ib.hovered?e:ea:cf,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(ic){var id=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
return {padding:[2,6],decorator:id?bt:dl,minHeight:18};
}},"window/statusbar-text":{style:function(ie){return {font:du};
}},"iframe":{style:function(ig){return {decorator:ej};
}},"resizer":{style:function(ih){var ii=qx.core.Environment.get(ek)&&qx.core.Environment.get(el)&&qx.core.Environment.get(eq);
return {decorator:ii?da:n};
}},"splitpane":{style:function(ij){return {decorator:g};
}},"splitpane/splitter":{style:function(ik){return {width:ik.horizontal?3:undefined,height:ik.vertical?3:undefined,backgroundColor:V};
}},"splitpane/splitter/knob":{style:function(il){return {source:il.horizontal?dj:cj};
}},"splitpane/slider":{style:function(im){return {width:im.horizontal?3:undefined,height:im.vertical?3:undefined,backgroundColor:V};
}},"selectbox":em,"selectbox/atom":eo,"selectbox/popup":ct,"selectbox/list":{alias:dK},"selectbox/arrow":{include:cA,style:function(io){return {source:cu,paddingLeft:5};
}},"datechooser":{style:function(ip){var it;
var ir=!!ip.focused;
var is=!!ip.invalid;
var iq=!!ip.disabled;

if(ir&&is&&!iq){it=eu;
}else if(ir&&!is&&!iq){it=ez;
}else if(iq){it=ev;
}else if(!ir&&is&&!iq){it=ey;
}else{it=et;
}
if(qx.core.Environment.get(eq)){it+=en;
}return {padding:2,decorator:it,backgroundColor:cw};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:em,alias:em,style:function(iu){var iv={padding:[2,4],shadow:undefined};

if(iu.lastYear){iv.icon=df;
iv.marginRight=1;
}else if(iu.lastMonth){iv.icon=bE;
}else if(iu.nextYear){iv.icon=co;
iv.marginLeft=1;
}else if(iu.nextMonth){iv.icon=z;
}return iv;
}},"datechooser/last-year-button-tooltip":eA,"datechooser/last-month-button-tooltip":eA,"datechooser/next-year-button-tooltip":eA,"datechooser/next-month-button-tooltip":eA,"datechooser/last-year-button":dN,"datechooser/last-month-button":dN,"datechooser/next-month-button":dN,"datechooser/next-year-button":dN,"datechooser/month-year-label":{style:function(iw){return {font:eh,textAlign:dF,textColor:iw.disabled?cz:undefined};
}},"datechooser/date-pane":{style:function(ix){return {textColor:ix.disabled?cz:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(iy){return {textColor:iy.disabled?cz:iy.weekend?bv:undefined,textAlign:dF,paddingTop:2,backgroundColor:bP};
}},"datechooser/week":{style:function(iz){return {textAlign:dF,padding:[2,4],backgroundColor:bP};
}},"datechooser/day":{style:function(iA){var iB=iA.disabled?undefined:iA.selected?cx:undefined;

if(iB&&qx.core.Environment.get(eq)){iB+=en;
}return {textAlign:dF,decorator:iB,textColor:iA.disabled?cz:iA.selected?cC:iA.otherMonth?bv:undefined,font:iA.today?eh:undefined,padding:[2,4]};
}},"combobox":{style:function(iC){var iG;
var iE=!!iC.focused;
var iF=!!iC.invalid;
var iD=!!iC.disabled;

if(iE&&iF&&!iD){iG=eu;
}else if(iE&&!iF&&!iD){iG=ez;
}else if(iD){iG=ev;
}else if(!iE&&iF&&!iD){iG=ey;
}else{iG=et;
}
if(qx.core.Environment.get(eq)){iG+=en;
}return {decorator:iG};
}},"combobox/popup":ct,"combobox/list":{alias:dK},"combobox/button":{include:em,alias:em,style:function(iH,iI){var iJ={icon:cu,padding:[iI.padding[0],iI.padding[1]-6],shadow:undefined,margin:undefined};

if(iH.selected){iJ.decorator=bC;
}return iJ;
}},"combobox/textfield":{include:x,style:function(iK){return {decorator:undefined};
}},"menu":{style:function(iL){var iM=qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var iN={decorator:iM?br:cK,shadow:iM?undefined:bJ,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:iL.submenu||iL.contextmenu?de:dk};

if(iL.submenu){iN.position=C;
iN.offset=[-2,-3];
}return iN;
}},"menu/slidebar":eD,"menu-slidebar":ep,"menu-slidebar-button":{style:function(iO){var iP=iO.hovered?cx:undefined;

if(iP&&qx.core.Environment.get(eq)){iP+=en;
}return {decorator:iP,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:bw,style:function(iQ){return {icon:iQ.hovered?dx:bl};
}},"menu-slidebar/button-forward":{include:bw,style:function(iR){return {icon:iR.hovered?ef:cu};
}},"menu-separator":{style:function(iS){return {height:0,decorator:p,margin:[4,2]};
}},"menu-button":{alias:eo,style:function(iT){var iU=iT.selected?cx:undefined;

if(iU&&qx.core.Environment.get(eq)){iU+=en;
}return {decorator:iU,textColor:iT.selected?cC:undefined,padding:[4,6]};
}},"menu-button/icon":{include:cA,style:function(iV){return {alignY:cy};
}},"menu-button/label":{include:cB,style:function(iW){return {alignY:cy,padding:1};
}},"menu-button/shortcut":{include:cB,style:function(iX){return {alignY:cy,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:cA,style:function(iY){return {source:iY.selected?l:z,alignY:cy};
}},"menu-checkbox":{alias:ew,include:ew,style:function(ja){return {icon:!ja.checked?undefined:ja.selected?L:cs};
}},"menu-radiobutton":{alias:ew,include:ew,style:function(jb){return {icon:!jb.checked?undefined:jb.selected?cV:cn};
}},"menubar":{style:function(jc){var jd=qx.core.Environment.get(eq);
return {decorator:jd?dT:eH};
}},"menubar-button":{alias:eo,style:function(je){var jf=(je.pressed||je.hovered)&&!je.disabled?cx:undefined;

if(jf&&qx.core.Environment.get(eq)){jf+=en;
}return {decorator:jf,textColor:je.pressed||je.hovered?cC:undefined,padding:[3,8]};
}},"colorselector":ep,"colorselector/control-bar":ep,"colorselector/control-pane":ep,"colorselector/visual-pane":cv,"colorselector/preset-grid":ep,"colorselector/colorbucket":{style:function(jg){return {decorator:ej,width:16,height:16};
}},"colorselector/preset-field-set":cv,"colorselector/input-field-set":cv,"colorselector/preview-field-set":cv,"colorselector/hex-field-composite":ep,"colorselector/hex-field":x,"colorselector/rgb-spinner-composite":ep,"colorselector/rgb-spinner-red":es,"colorselector/rgb-spinner-green":es,"colorselector/rgb-spinner-blue":es,"colorselector/hsb-spinner-composite":ep,"colorselector/hsb-spinner-hue":es,"colorselector/hsb-spinner-saturation":es,"colorselector/hsb-spinner-brightness":es,"colorselector/preview-content-old":{style:function(jh){return {decorator:ej,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(ji){return {decorator:ej,backgroundColor:cw,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(jj){return {decorator:ej,margin:5};
}},"colorselector/brightness-field":{style:function(jk){return {decorator:ej,margin:[5,7]};
}},"colorselector/hue-saturation-pane":ep,"colorselector/hue-saturation-handle":ep,"colorselector/brightness-pane":ep,"colorselector/brightness-handle":ep,"colorpopup":{alias:ct,include:ct,style:function(jl){return {padding:5,backgroundColor:A};
}},"colorpopup/field":{style:function(jm){return {decorator:ej,margin:2,width:14,height:14,backgroundColor:cw};
}},"colorpopup/selector-button":ei,"colorpopup/auto-button":ei,"colorpopup/preview-pane":cv,"colorpopup/current-preview":{style:function(jn){return {height:20,padding:4,marginLeft:4,decorator:ej,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(jo){return {height:20,padding:4,marginRight:4,decorator:ej,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:ei,include:ei,style:function(jp){return {icon:cX};
}},"colorpopup/colorselector-cancelbutton":{alias:ei,include:ei,style:function(jq){return {icon:eI};
}},"table":{alias:ep,style:function(jr){return {decorator:bm};
}},"table/statusbar":{style:function(js){return {decorator:eb,padding:[0,2]};
}},"table/column-button":{alias:em,style:function(jt){var ju=qx.core.Environment.get(eq);
return {decorator:ju?bd:bA,padding:3,icon:cm};
}},"table-column-reset-button":{include:ew,alias:ew,style:function(){return {icon:t};
}},"table-scroller":ep,"table-scroller/scrollbar-x":dO,"table-scroller/scrollbar-y":dO,"table-scroller/header":{style:function(jv){var jw=qx.core.Environment.get(eq);
return {decorator:jw?bd:bA};
}},"table-scroller/pane":{style:function(jx){return {backgroundColor:dW};
}},"table-scroller/focus-indicator":{style:function(jy){return {decorator:bU};
}},"table-scroller/resize-line":{style:function(jz){return {backgroundColor:cM,width:2};
}},"table-header-cell":{alias:eo,style:function(jA){return {minWidth:13,minHeight:20,padding:jA.hovered?[3,4,2,4]:[3,4],decorator:jA.hovered?bu:R,sortIcon:jA.sorted?(jA.sortedAscending?dw:cp):undefined};
}},"table-header-cell/label":{style:function(jB){return {minWidth:0,alignY:cy,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(jC){return {alignY:cy,alignX:eS};
}},"table-header-cell/icon":{style:function(jD){return {minWidth:0,alignY:cy,paddingRight:5};
}},"table-editor-textfield":{include:x,style:function(jE){return {decorator:undefined,padding:[2,2],backgroundColor:cw};
}},"table-editor-selectbox":{include:D,alias:D,style:function(jF){return {padding:[0,2],backgroundColor:cw};
}},"table-editor-combobox":{include:dM,alias:dM,style:function(jG){return {decorator:undefined,backgroundColor:cw};
}},"progressive-table-header":{alias:ep,style:function(jH){return {decorator:cl};
}},"progressive-table-header-cell":{alias:eo,style:function(jI){var jJ=qx.core.Environment.get(eq);
return {minWidth:40,minHeight:25,paddingLeft:6,decorator:jJ?ee:q};
}},"app-header":{style:function(jK){return {font:eh,textColor:cC,padding:[8,12],decorator:cJ};
}},"app-header-label":cB,"virtual-list":dK,"virtual-list/row-layer":cI,"row-layer":ep,"group-item":{include:cB,alias:cB,style:function(jL){return {padding:4,decorator:qx.core.Environment.get(eq)?eB:eM,textColor:bg,font:eh};
}},"virtual-selectbox":D,"virtual-selectbox/dropdown":ct,"virtual-selectbox/dropdown/list":{alias:eQ},"virtual-combobox":dM,"virtual-combobox/dropdown":ct,"virtual-combobox/dropdown/list":{alias:eQ},"virtual-tree":{include:bb,alias:bb,style:function(jM){return {itemHeight:26};
}},"virtual-tree-folder":cS,"virtual-tree-file":cr,"column-layer":ep,"cell":{style:function(jN){return {textColor:jN.selected?cC:eT,padding:[3,6],font:T};
}},"cell-string":ex,"cell-number":{include:ex,style:function(jO){return {textAlign:eS};
}},"cell-image":ex,"cell-boolean":{include:ex,style:function(jP){return {iconTrue:bY,iconFalse:di};
}},"cell-atom":ex,"cell-date":ex,"cell-html":ex,"htmlarea":{"include":ep,style:function(jQ){return {backgroundColor:m};
}},"progressbar":{style:function(jR){return {decorator:s,padding:[1],backgroundColor:P,width:200,height:20};
}},"progressbar/progress":{style:function(jS){var jT=jS.disabled?eM:cx;

if(qx.core.Environment.get(eq)){jT+=en;
}return {decorator:jT};
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b}});
})();
(function(){var j="Please verify the image '",i="_applyInsets",h="Number",g="' is present.",f="-l",e="-t",d="-r",c="-b",b="qx.debug.dispose",a="insetTop",w="set",v="insetBottom",u="The value of the property 'rightSlice' is null! ",t="qx.debug",s="_applyBaseImage",r="The value of the property 'bottomSlice' is null! ",q="shorthand",p="String",o="The value of the property 'leftSlice' is null! ",n="insetRight",l="The value of the property 'topSlice' is null! ",m="insetLeft",k="qx.ui.decoration.Grid";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(x,y){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__nv=new qx.ui.decoration.css3.BorderImage();

if(x){this.__nw(x);
}}else{this.__nv=new qx.ui.decoration.GridDiv(x);
}
if(y!=null){this.__nv.setInsets(y);
}if(qx.core.Environment.get(b)){this.__nv.$$ignoreDisposeWarning=true;
}},properties:{baseImage:{check:p,nullable:true,apply:s},insetLeft:{check:h,nullable:true,apply:i},insetRight:{check:h,nullable:true,apply:i},insetBottom:{check:h,nullable:true,apply:i},insetTop:{check:h,nullable:true,apply:i},insets:{group:[a,n,v,m],mode:q}},members:{__nv:null,getMarkup:function(){return this.__nv.getMarkup();
},resize:function(z,A,B){this.__nv.resize(z,A,B);
},tint:function(C,D){},getInsets:function(){return this.__nv.getInsets();
},_applyInsets:function(E,F,name){var G=w+qx.lang.String.firstUp(name);
this.__nv[G](E);
},_applyBaseImage:function(H,I){if(this.__nv instanceof qx.ui.decoration.GridDiv){this.__nv.setBaseImage(H);
}else{this.__nw(H);
}},__nw:function(J){this.__nv.setBorderImage(J);
var T=qx.util.AliasManager.getInstance().resolve(J);
var U=/(.*)(\.[a-z]+)$/.exec(T);
var P=U[1];
var S=U[2];
var M=qx.util.ResourceManager.getInstance();
var V=M.getImageHeight(P+e+S);
var K=M.getImageWidth(P+d+S);
var L=M.getImageHeight(P+c+S);
var W=M.getImageWidth(P+f+S);

if(qx.core.Environment.get(t)){var N=l+j+P+e+S+g;
var O=u+j+P+d+S+g;
var R=r+j+P+c+S+g;
var Q=o+j+P+f+S+g;
qx.core.Assert.assertNotNull(V,N);
qx.core.Assert.assertNotNull(K,O);
qx.core.Assert.assertNotNull(L,R);
qx.core.Assert.assertNotNull(W,Q);
}this.__nv.setSlice([V,K,L,W]);
}},destruct:function(){this.__nv.dispose();
this.__nv=null;
}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",z=";'></div>",y="<div style='",x="qx.debug",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",o='") ',p="sliceTop",m='url("',n="hidden",k="repeatY",l="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(A,B){qx.ui.decoration.Abstract.call(this);
if(A!=null){this.setBorderImage(A);
}
if(B!=null){this.setSlice(B);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[p,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,k],mode:c}},members:{__nx:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__nx;
},getMarkup:function(){if(this.__nx){return this.__nx;
}var C=this._resolveImageUrl(this.getBorderImage());
var D=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var E=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__nx=[y,qx.bom.element.Style.compile({"borderImage":m+C+o+D.join(f)+f+E,position:l,lineHeight:0,fontSize:0,overflow:n,boxSizing:r,borderWidth:D.join(b)+g}),z].join(q);
return this.__nx;
},resize:function(F,G,H){F.style.width=G+g;
F.style.height=H+g;
},tint:function(I,J){},_applyStyle:function(){if(qx.core.Environment.get(x)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},_resolveImageUrl:function(K){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(K));
}},destruct:function(){this.__nx=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="engine.version",e="scale-x",d="scale-y",c="-tr",b="-l",a='</div>',A="scale",z="-br",y="-t",x="browser.quirksmode",w="-tl",v="-r",u='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',t="qx.debug",s="_applyBaseImage",r="-b",p="String",q="",n="-bl",o="qx.ui.decoration.GridDiv",l="-c",m="mshtml",k="engine.name";
qx.Class.define(o,{extend:qx.ui.decoration.Abstract,construct:function(B,C){qx.ui.decoration.Abstract.call(this);
if(B!=null){this.setBaseImage(B);
}
if(C!=null){this.setInsets(C);
}},properties:{baseImage:{check:p,nullable:true,apply:s}},members:{_markup:null,_images:null,_edges:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this._markup;
},getMarkup:function(){if(this._markup){return this._markup;
}var D=qx.bom.element.Decoration;
var E=this._images;
var F=this._edges;
var G=[];
G.push(u);
G.push(D.create(E.tl,g,{top:0,left:0}));
G.push(D.create(E.t,e,{top:0,left:F.left+j}));
G.push(D.create(E.tr,g,{top:0,right:0}));
G.push(D.create(E.bl,g,{bottom:0,left:0}));
G.push(D.create(E.b,e,{bottom:0,left:F.left+j}));
G.push(D.create(E.br,g,{bottom:0,right:0}));
G.push(D.create(E.l,d,{top:F.top+j,left:0}));
G.push(D.create(E.c,A,{top:F.top+j,left:F.left+j}));
G.push(D.create(E.r,d,{top:F.top+j,right:0}));
G.push(a);
return this._markup=G.join(q);
},resize:function(H,I,J){var K=this._edges;
var innerWidth=I-K.left-K.right;
var innerHeight=J-K.top-K.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}H.style.width=I+j;
H.style.height=J+j;
H.childNodes[1].style.width=innerWidth+j;
H.childNodes[4].style.width=innerWidth+j;
H.childNodes[7].style.width=innerWidth+j;
H.childNodes[6].style.height=innerHeight+j;
H.childNodes[7].style.height=innerHeight+j;
H.childNodes[8].style.height=innerHeight+j;

if((qx.core.Environment.get(k)==m)){if(parseFloat(qx.core.Environment.get(f))<7||(qx.core.Environment.get(x)&&parseFloat(qx.core.Environment.get(f))<8)){if(I%2==1){H.childNodes[2].style.marginRight=h;
H.childNodes[5].style.marginRight=h;
H.childNodes[8].style.marginRight=h;
}else{H.childNodes[2].style.marginRight=i;
H.childNodes[5].style.marginRight=i;
H.childNodes[8].style.marginRight=i;
}
if(J%2==1){H.childNodes[3].style.marginBottom=h;
H.childNodes[4].style.marginBottom=h;
H.childNodes[5].style.marginBottom=h;
}else{H.childNodes[3].style.marginBottom=i;
H.childNodes[4].style.marginBottom=i;
H.childNodes[5].style.marginBottom=i;
}}}},tint:function(L,M){},_applyBaseImage:function(N,O){if(qx.core.Environment.get(t)){if(this._markup){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}
if(N){var S=this._resolveImageUrl(N);
var T=/(.*)(\.[a-z]+)$/.exec(S);
var R=T[1];
var Q=T[2];
var P=this._images={tl:R+w+Q,t:R+y+Q,tr:R+c+Q,bl:R+n+Q,b:R+r+Q,br:R+z+Q,l:R+b+Q,c:R+l+Q,r:R+v+Q};
this._edges=this._computeEdgeSizes(P);
}},_resolveImageUrl:function(U){return qx.util.AliasManager.getInstance().resolve(U);
},_computeEdgeSizes:function(V){var W=qx.util.ResourceManager.getInstance();
return {top:W.getImageHeight(V.t),bottom:W.getImageHeight(V.b),left:W.getImageWidth(V.l),right:W.getImageWidth(V.r)};
}},destruct:function(){this._markup=this._images=this._edges=null;
}});
})();
(function(){var j="px",i="Integer",h="_applyBorderRadius",g="radiusTopRight",f="radiusTopLeft",e="-webkit-border-bottom-left-radius",d="-webkit-background-clip",c="radiusBottomRight",b="-webkit-border-bottom-right-radius",a="border-top-left-radius",x="qx.debug",w="border-top-right-radius",v="border-bottom-left-radius",u="radiusBottomLeft",t="-webkit-border-top-left-radius",s="shorthand",r="-moz-border-radius-bottomright",q="padding-box",p="border-bottom-right-radius",o="qx.ui.decoration.MBorderRadius",m="-moz-border-radius-topright",n="-webkit-border-top-right-radius",k="-moz-border-radius-topleft",l="-moz-border-radius-bottomleft";
qx.Mixin.define(o,{properties:{radiusTopLeft:{nullable:true,check:i,apply:h},radiusTopRight:{nullable:true,check:i,apply:h},radiusBottomLeft:{nullable:true,check:i,apply:h},radiusBottomRight:{nullable:true,check:i,apply:h},radius:{group:[f,g,c,u],mode:s}},members:{_styleBorderRadius:function(y){y[d]=q;
var z=this.getRadiusTopLeft();

if(z>0){y[k]=z+j;
y[t]=z+j;
y[a]=z+j;
}z=this.getRadiusTopRight();

if(z>0){y[m]=z+j;
y[n]=z+j;
y[w]=z+j;
}z=this.getRadiusBottomLeft();

if(z>0){y[l]=z+j;
y[e]=z+j;
y[v]=z+j;
}z=this.getRadiusBottomRight();

if(z>0){y[r]=z+j;
y[b]=z+j;
y[p]=z+j;
}},_applyBorderRadius:function(){if(qx.core.Environment.get(x)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var f="",e="qx.debug",d="qx.theme",c="qx.ui.decoration.MBackgroundColor",b="Color",a="_applyBackgroundColor";
qx.Mixin.define(c,{properties:{backgroundColor:{check:b,nullable:true,apply:a}},members:{_tintBackgroundColor:function(g,h,i){if(h==null){h=this.getBackgroundColor();
}
if(qx.core.Environment.get(d)){h=qx.theme.manager.Color.getInstance().resolve(h);
}i.backgroundColor=h||f;
},_resizeBackgroundColor:function(j,k,l){var m=this.getInsets();
k-=m.left+m.right;
l-=m.top+m.bottom;
return {left:m.left,top:m.top,width:k,height:l};
},_applyBackgroundColor:function(){if(qx.core.Environment.get(e)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var u="_applyBackgroundImage",t="repeat",s="",r="mshtml",q="engine.name",p="backgroundPositionX",o='<div style="',n="backgroundPositionY",m="qx.debug",l='</div>',e="no-repeat",k="engine.version",h="scale",c='">',b=" ",g="repeat-x",f="repeat-y",i="hidden",a="qx.ui.decoration.MBackgroundImage",j="String",d="browser.quirksmode";
qx.Mixin.define(a,{properties:{backgroundImage:{check:j,nullable:true,apply:u},backgroundRepeat:{check:[t,g,f,e,h],init:t,apply:u},backgroundPositionX:{nullable:true,apply:u},backgroundPositionY:{nullable:true,apply:u},backgroundPosition:{group:[n,p]}},members:{_generateMarkup:this._generateBackgroundMarkup,_generateBackgroundMarkup:function(v,content){var z=s;
var y=this.getBackgroundImage();
var x=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var A=this.getBackgroundPositionX();

if(A==null){A=0;
}v.backgroundPosition=A+b+top;
if(y){var w=qx.util.AliasManager.getInstance().resolve(y);
z=qx.bom.element.Decoration.create(w,x,v);
}else{if((qx.core.Environment.get(q)==r)){if(parseFloat(qx.core.Environment.get(k))<7||qx.core.Environment.get(d)){v.overflow=i;
}}
if(!content){content=s;
}z=o+qx.bom.element.Style.compile(v)+c+content+l;
}return z;
},_applyBackgroundImage:function(){if(qx.core.Environment.get(m)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var j="solid",i="_applyStyle",h="double",g="px ",f="dotted",e="_applyWidth",d="Color",c="",b="dashed",a="Number",F=" ",E="shorthand",D="widthTop",C="styleRight",B="styleBottom",A="qx.debug",z="widthBottom",y="widthLeft",x="styleTop",w="colorBottom",q="styleLeft",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="qx.theme",k="border-top",l="border-left",s="border-right",t="qx.ui.decoration.MSingleBorder",v="border-bottom",u="absolute";
qx.Mixin.define(t,{properties:{widthTop:{check:a,init:0,apply:e},widthRight:{check:a,init:0,apply:e},widthBottom:{check:a,init:0,apply:e},widthLeft:{check:a,init:0,apply:e},styleTop:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleRight:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleBottom:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleLeft:{nullable:true,check:[j,f,b,h],init:j,apply:i},colorTop:{nullable:true,check:d,apply:i},colorRight:{nullable:true,check:d,apply:i},colorBottom:{nullable:true,check:d,apply:i},colorLeft:{nullable:true,check:d,apply:i},left:{group:[y,q,o]},right:{group:[r,C,p]},top:{group:[D,x,m]},bottom:{group:[z,B,w]},width:{group:[D,r,z,y],mode:E},style:{group:[x,C,B,q],mode:E},color:{group:[m,p,w,o],mode:E}},members:{_styleBorder:function(G){if(qx.core.Environment.get(n)){var I=qx.theme.manager.Color.getInstance();
var M=I.resolve(this.getColorTop());
var J=I.resolve(this.getColorRight());
var H=I.resolve(this.getColorBottom());
var L=I.resolve(this.getColorLeft());
}else{var M=this.getColorTop();
var J=this.getColorRight();
var H=this.getColorBottom();
var L=this.getColorLeft();
}var K=this.getWidthTop();

if(K>0){G[k]=K+g+this.getStyleTop()+F+(M||c);
}var K=this.getWidthRight();

if(K>0){G[s]=K+g+this.getStyleRight()+F+(J||c);
}var K=this.getWidthBottom();

if(K>0){G[v]=K+g+this.getStyleBottom()+F+(H||c);
}var K=this.getWidthLeft();

if(K>0){G[l]=K+g+this.getStyleLeft()+F+(L||c);
}if(qx.core.Environment.get(A)){if(G.length===0){throw new Error("Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}G.position=u;
G.top=0;
G.left=0;
},_resizeBorder:function(N,O,P){var Q=this.getInsets();
O-=Q.left+Q.right;
P-=Q.top+Q.bottom;
if(O<0){O=0;
}
if(P<0){P=0;
}return {left:Q.left-this.getWidthLeft(),top:Q.top-this.getWidthTop(),width:O,height:P};
},_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_applyWidth:function(){this._applyStyle();
this._resetInsets();
},_applyStyle:function(){if(qx.core.Environment.get(A)){if(this._markup){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
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
(function(){var c="px",b="qx.ui.decoration.Background",a="absolute";
qx.Class.define(b,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(d){qx.ui.decoration.Abstract.call(this);

if(d!=null){this.setBackgroundColor(d);
}},members:{__nx:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__nx;
},getMarkup:function(e){if(this.__nx){return this.__nx;
}var f={position:a,top:0,left:0};
var g=this._generateBackgroundMarkup(f);
return this.__nx=g;
},resize:function(h,i,j){var k=this.getInsets();
h.style.width=(i-k.left-k.right)+c;
h.style.height=(j-k.top-k.bottom)+c;
h.style.left=-k.left+c;
h.style.top=-k.top+c;
},tint:function(l,m){this._tintBackgroundColor(l,m,l.style);
}},destruct:function(){this.__nx=null;
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
(function(){var j='"></div>',i="_applyStyle",h="1px",g='<div style="',f='border:',e="1px solid ",d="Color",c=";",b="px",a='</div>',y="qx.ui.decoration.Beveled",x="css.boxmodel",w="qx.debug",v='<div style="position:absolute;top:1px;left:1px;',u='border-bottom:',t='border-right:',s="",r="content",q='border-left:',p='border-top:',n="Number",o='<div style="position:absolute;top:1px;left:0px;',l='position:absolute;top:0px;left:1px;',m='<div style="overflow:hidden;font-size:0;line-height:0;">',k="absolute";
qx.Class.define(y,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(z,A,B){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setOuterColor(z);
}
if(A!=null){this.setInnerColor(A);
}
if(B!=null){this.setInnerOpacity(B);
}},properties:{innerColor:{check:d,nullable:true,apply:i},innerOpacity:{check:n,init:1,apply:i},outerColor:{check:d,nullable:true,apply:i}},members:{__nx:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__nx;
},_applyStyle:function(){if(qx.core.Environment.get(w)){if(this.__nx){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__nx){return this.__nx;
}var C=qx.theme.manager.Color.getInstance();
var D=[];
var G=e+C.resolve(this.getOuterColor())+c;
var F=e+C.resolve(this.getInnerColor())+c;
D.push(m);
D.push(g);
D.push(f,G);
D.push(qx.bom.element.Opacity.compile(0.35));
D.push(j);
D.push(o);
D.push(q,G);
D.push(t,G);
D.push(qx.bom.element.Opacity.compile(1));
D.push(j);
D.push(g);
D.push(l);
D.push(p,G);
D.push(u,G);
D.push(qx.bom.element.Opacity.compile(1));
D.push(j);
var E={position:k,top:h,left:h,opacity:1};
D.push(this._generateBackgroundMarkup(E));
D.push(v);
D.push(f,F);
D.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
D.push(j);
D.push(a);
return this.__nx=D.join(s);
},resize:function(H,I,J){if(I<4){I=4;
}
if(J<4){J=4;
}if(qx.core.Environment.get(x)==r){var outerWidth=I-2;
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
}var R=b;
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
},tint:function(S,T){this._tintBackgroundColor(S,T,S.childNodes[3].style);
}},destruct:function(){this.__nx=null;
}});
})();
(function(){var j="_applyLinearBackgroundGradient",i=" ",h=")",g="horizontal",f=",",e=" 0",d="px",c="0",b="shorthand",a="Color",D="vertical",C="Number",B="%",A="),to(",z="from(",y="qx.theme",x="background-image",w="background",v="-webkit-gradient(linear,",u="startColorPosition",q="qx.debug",r="deg, ",o="css.gradient.legacywebkit",p="startColor",m="",n="qx.ui.decoration.MLinearBackgroundGradient",k="(",l="endColorPosition",s="css.gradient.linear",t="endColor";
qx.Mixin.define(n,{properties:{startColor:{check:a,nullable:true,apply:j},endColor:{check:a,nullable:true,apply:j},orientation:{check:[g,D],init:D,apply:j},startColorPosition:{check:C,init:0,apply:j},endColorPosition:{check:C,init:100,apply:j},colorPositionUnit:{check:[d,B],init:B,apply:j},gradientStart:{group:[p,u],mode:b},gradientEnd:{group:[t,l],mode:b}},members:{_styleLinearBackgroundGradient:function(E){if(qx.core.Environment.get(y)){var H=qx.theme.manager.Color.getInstance();
var O=H.resolve(this.getStartColor());
var J=H.resolve(this.getEndColor());
}else{var O=this.getStartColor();
var J=this.getEndColor();
}var P=this.getColorPositionUnit();
if(qx.core.Environment.get(o)){P=P===d?m:P;

if(this.getOrientation()==g){var N=this.getStartColorPosition()+P+e+P;
var L=this.getEndColorPosition()+P+e+P;
}else{var N=c+P+i+this.getStartColorPosition()+P;
var L=c+P+i+this.getEndColorPosition()+P;
}var K=z+O+A+J+h;
var I=v+N+f+L+f+K+h;
E[w]=I;
}else{var Q=this.getOrientation()==g?0:270;
var G=O+i+this.getStartColorPosition()+P;
var F=J+i+this.getEndColorPosition()+P;
var M=qx.core.Environment.get(s);
E[x]=M+k+Q+r+G+f+F+h;
}},_resizeLinearBackgroundGradient:function(R,S,T){var U=this.getInsets();
S-=U.left+U.right;
T-=U.top+U.bottom;
return {left:U.left,top:U.top,width:S,height:T};
},_applyLinearBackgroundGradient:function(){if(qx.core.Environment.get(q)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var j='',i="px ",h=" ",g="border-top",f="border-left",e="border-bottom",d="border-right",c="Color",b="Number",a="qx.theme",E="qx.debug",D="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",q="innerColorTop",r="relative",o="browser.documentmode",p="innerColorLeft",m="qx.ui.decoration.MDoubleBorder",n="left",k="engine.version",l="innerWidthBottom",s="innerWidthLeft",t="position",u="absolute";
qx.Mixin.define(m,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__rg;
this._resizeBorder=this.__rf;
this._styleBorder=this.__rd;
this._generateMarkup=this.__re;
},properties:{innerWidthTop:{check:b,init:0},innerWidthRight:{check:b,init:0},innerWidthBottom:{check:b,init:0},innerWidthLeft:{check:b,init:0},innerWidth:{group:[w,z,l,s],mode:D},innerColorTop:{nullable:true,check:c},innerColorRight:{nullable:true,check:c},innerColorBottom:{nullable:true,check:c},innerColorLeft:{nullable:true,check:c},innerColor:{group:[q,v,x,p],mode:D}},members:{__rc:null,__rd:function(F){if(qx.core.Environment.get(a)){var H=qx.theme.manager.Color.getInstance();
var I=H.resolve(this.getInnerColorTop());
var L=H.resolve(this.getInnerColorRight());
var J=H.resolve(this.getInnerColorBottom());
var K=H.resolve(this.getInnerColorLeft());
}else{var I=this.getInnerColorTop();
var L=this.getInnerColorRight();
var J=this.getInnerColorBottom();
var K=this.getInnerColorLeft();
}F.position=r;
var G=this.getInnerWidthTop();

if(G>0){F[g]=G+i+this.getStyleTop()+h+I;
}var G=this.getInnerWidthRight();

if(G>0){F[d]=G+i+this.getStyleRight()+h+L;
}var G=this.getInnerWidthBottom();

if(G>0){F[e]=G+i+this.getStyleBottom()+h+J;
}var G=this.getInnerWidthLeft();

if(G>0){F[f]=G+i+this.getStyleLeft()+h+K;
}
if(qx.core.Environment.get(E)){if(!F[g]&&!F[d]&&!F[e]&&!F[f]){throw new Error("Invalid Double decorator (zero inner border width). Use qx.ui.decoration.Single instead!");
}}},__re:function(M){var Q=this._generateBackgroundMarkup(M);

if(qx.core.Environment.get(a)){var O=qx.theme.manager.Color.getInstance();
var T=O.resolve(this.getColorTop());
var P=O.resolve(this.getColorRight());
var N=O.resolve(this.getColorBottom());
var S=O.resolve(this.getColorLeft());
}else{var T=this.getColorTop();
var P=this.getColorRight();
var N=this.getColorBottom();
var S=this.getColorLeft();
}M[g]=j;
M[d]=j;
M[e]=j;
M[f]=j;
M[C]=0;
if((qx.core.Environment.get(B)==A&&parseFloat(qx.core.Environment.get(k))<8)||(qx.core.Environment.get(B)==A&&qx.core.Environment.get(o)<8)){M[C]=j;
}var R=this.getWidthTop();

if(R>0){M[g]=R+i+this.getStyleTop()+h+T;
}var R=this.getWidthRight();

if(R>0){M[d]=R+i+this.getStyleRight()+h+P;
}var R=this.getWidthBottom();

if(R>0){M[e]=R+i+this.getStyleBottom()+h+N;
}var R=this.getWidthLeft();

if(R>0){M[f]=R+i+this.getStyleLeft()+h+S;
}
if(qx.core.Environment.get(E)){if(M[g]==j&&M[d]==j&&M[e]==j&&M[f]==j){throw new Error("Invalid Double decorator (zero outer border width). Use qx.ui.decoration.Single instead!");
}}M[t]=u;
M[y]=0;
M[n]=0;
return this.__rc=this._generateBackgroundMarkup(M,Q);
},__rf:function(U,V,W){var X=this.getInsets();
V-=X.left+X.right;
W-=X.top+X.bottom;
var Y=X.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=X.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:Y,top:top,width:V,height:W,elementToApplyDimensions:U.firstChild};
},__rg:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var m="_applyBoxShadow",l="px ",k="Integer",j="box-shadow",i="shadowHorizontalLength",h="-webkit-box-shadow",g="qx.debug",f="qx.theme",e="shadowVerticalLength",d="-moz-box-shadow",a="shorthand",c="qx.ui.decoration.MBoxShadow",b="Color";
qx.Mixin.define(c,{properties:{shadowHorizontalLength:{nullable:true,check:k,apply:m},shadowVerticalLength:{nullable:true,check:k,apply:m},shadowBlurRadius:{nullable:true,check:k,apply:m},shadowColor:{nullable:true,check:b,apply:m},shadowLength:{group:[i,e],mode:a}},members:{_styleBoxShadow:function(n){if(qx.core.Environment.get(f)){var o=qx.theme.manager.Color.getInstance();
var r=o.resolve(this.getShadowColor());
}else{var r=this.getShadowColor();
}
if(r!=null){var s=this.getShadowVerticalLength()||0;
var p=this.getShadowHorizontalLength()||0;
var blur=this.getShadowBlurRadius()||0;
var q=p+l+s+l+blur+l+r;
n[d]=q;
n[h]=q;
n[j]=q;
}},_applyBoxShadow:function(){if(qx.core.Environment.get(g)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var cJ="solid",cI="invalid",cH="scale",cG="border-main",cF="border-invalid",cE="shadow",cD="border-separator",cC="checkbox-hovered",cB="button-start",cA="button-end",bK="background-light",bJ="tabview-background",bI="repeat-x",bH="radiobutton",bG="button-css",bF="border-input",bE="border-inner-input",bD="border-inner-scrollbar",bC="radiobutton-checked",bB="window-border",cQ="tabview-inactive",cR="checkbox",cO="radiobutton-disabled",cP="radiobutton-hovered-invalid",cM="tabview-page-button-top-active-css",cN="button-border-disabled",cK="tabview-page-button-top-inactive-css",cL="decoration/form/input.png",cS="border-toolbar-border-inner",cT="input-css",cj="border-toolbar-button-outer",ci="border-disabled",cl="background-pane",ck="checkbox-disabled-border",cn="button-hovered-end",cm="repeat-y",cp="border-dragover",co="button-hovered-start",ch="progressive-table-header-border-right",cg="decoration/scrollbar/scrollbar-button-bg-vertical.png",k="radiobutton-background",l="checkbox-focus",m="scrollbar-slider-horizontal-css",n="menu-end",o="decoration/selection.png",p="horizontal",q="table-header-start",r="decoration/scrollbar/scrollbar-button-bg-horizontal.png",s="decoration/form/input-focused.png",t="checkbox-hovered-invalid",di="decoration/table/header-cell.png",dh="tabview-inactive-start",dg="table-header-end",df="border-button",dm="border-focused-invalid",dl="button-focused-css",dk="checkbox-border",dj="tabview-start",dp="checkbox-start",dn="decoration/tabview/tab-button-top-active.png",bb="group-background",bc="decoration/form/button-c.png",Y="keyboard-focus",ba="button-disabled-start",bf="selected-end",bg="table-header-hovered",bd="decoration/groupbox/groupbox.png",be="decoration/pane/pane.png",W="decoration/menu/background.png",X="tooltip-error",J="decoration/toolbar/toolbar-part.gif",I="input-focused-css",L="decoration/menu/bar-background.png",K="window-border-caption",F="radiobutton-hovered",E="decoration/tabview/tab-button-bottom-active.png",H="radiobutton-checked-focused",G="groupitem-end",D="button-disabled-css",C="group-border",bl="scrollbar-slider-vertical-css",bm="decoration/form/button-checked.png",bn="window-css",bo="selected-start",bh="window-resize-frame-css",bi="tabview-end",bj="window-statusbar-background",bk="decoration/scrollbar/scrollbar-bg-vertical.png",bp="button-pressed-css",bq="toolbar-button-hovered-css",T="window-caption-active-end",S="dotted",R="checkbox-disabled-end",Q="window-caption-active-start",P="button-focused",O="menu-start",N="decoration/form/tooltip-error.png",M="window-captionbar-active-css",V="qx/decoration/Modern",U="border-toolbar-separator-left",br="decoration/scrollbar/scrollbar-bg-horizontal.png",bs="decoration/tabview/tab-button-left-active.png",bt="decoration/tabview/tab-button-right-inactive.png",bu="decoration/tabview/tab-button-bottom-inactive.png",bv="decoration/form/button-disabled.png",bw="decoration/form/button-pressed.png",bx="background-splitpane",by="decoration/form/button-checked-focused.png",bz="px",bA="decoration/window/statusbar.png",bO="input-border-disabled",bN="checkbox-inner",bM="scrollbar-horizontal-css",bL="button-disabled-end",bS="center",bR="toolbar-end",bQ="groupitem-start",bP="decoration/form/button-hovered.png",bU="checkbox-hovered-inner",bT="input-focused-start",cc="scrollbar-start",cd="scrollbar-slider-start",ca="radiobutton-checked-disabled",cb="checkbox-focused",bX="qx.theme.modern.Decoration",bY="decoration/form/button.png",bV="decoration/app-header.png",bW="decoration/form/button-focused.png",ce="radiobutton-checked-hovered",cf="button-hovered-css",ct="checkbox-disabled-inner",cs="border-toolbar-separator-right",cv="border-focused",cu="decoration/shadow/shadow.png",cx="scrollbar-end",cw="decoration/group-item.png",cz="window-caption-inactive-end",cy="checkbox-end",cr="tabview-inactive-end",cq="input-end",db="button-checked-focused-css",dc="decoration/tabview/tab-button-left-inactive.png",dd="input-focused-inner-invalid",de="menu-separator-top",cW="window-caption-inactive-start",cX="scrollbar-slider-end",cY="decoration/window/captionbar-inactive.png",da="decoration/tabview/tab-button-top-inactive.png",cU="pane-end",cV="input-focused-end",j="decoration/form/tooltip-error-arrow.png",i="menubar-start",h="toolbar-start",g="checkbox-disabled-start",f="radiobutton-focused",e="pane-start",d="table-focus-indicator",c="button-checked-css",b="decoration/form/button-checked-c.png",a="menu-separator-bottom",w="decoration/shadow/shadow-small.png",x="input-start",u="decoration/tabview/tabview-pane.png",v="decoration/window/captionbar-active.png",A="decoration/tabview/tab-button-right-active.png",B="no-repeat",y="decoration/toolbar/toolbar-gradient.png",z="checkbox-hovered-inner-invalid";
qx.Theme.define(bX,{aliases:{decoration:V},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:cG}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:o,backgroundRepeat:cH}},"selected-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:bo,endColor:bf}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:o,backgroundRepeat:cH,bottom:[2,cJ,cp]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,cJ,cp]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:be,insets:[0,2,3,0]}},"pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:bJ,radius:3,shadowColor:cE,shadowBlurRadius:2,shadowLength:0,gradientStart:[e,0],gradientEnd:[cU,100]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd}},"group-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{backgroundColor:bb,radius:4,color:C,width:1}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cI,innerColor:bE,innerOpacity:0.5,backgroundImage:cL,backgroundRepeat:bI,backgroundColor:bK}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:Y,style:S}},"radiobutton":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:k,radius:5,width:1,innerWidth:2,color:dk,innerColor:k,shadowLength:0,shadowBlurRadius:0,shadowColor:l,insetLeft:5}},"radiobutton-checked":{include:bH,style:{backgroundColor:bC}},"radiobutton-checked-focused":{include:bC,style:{shadowBlurRadius:4}},"radiobutton-checked-hovered":{include:bC,style:{innerColor:cC}},"radiobutton-focused":{include:bH,style:{shadowBlurRadius:4}},"radiobutton-hovered":{include:bH,style:{backgroundColor:cC,innerColor:cC}},"radiobutton-disabled":{include:bH,style:{innerColor:cO,backgroundColor:cO,color:ck}},"radiobutton-checked-disabled":{include:cO,style:{backgroundColor:ca}},"radiobutton-invalid":{include:bH,style:{color:cI}},"radiobutton-checked-invalid":{include:bC,style:{color:cI}},"radiobutton-checked-focused-invalid":{include:H,style:{color:cI,shadowColor:cI}},"radiobutton-checked-hovered-invalid":{include:ce,style:{color:cI,innerColor:cP}},"radiobutton-focused-invalid":{include:f,style:{color:cI,shadowColor:cI}},"radiobutton-hovered-invalid":{include:F,style:{color:cI,innerColor:cP,backgroundColor:cP}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:cD}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:cD}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[2,5,5,2]}},"tooltip-error-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:X,radius:4,shadowColor:cE,shadowBlurRadius:2,shadowLength:1}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:j,backgroundPositionY:bS,backgroundRepeat:B,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:cu,insets:[4,8,8,4]}},"shadow-window-css":{decorator:[qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{shadowColor:cE,shadowBlurRadius:2,shadowLength:1}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"popup-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:cG,shadowColor:cE,shadowBlurRadius:3,shadowLength:1}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:br,backgroundRepeat:bI}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bk,backgroundRepeat:cm}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:r,backgroundRepeat:cH,outerColor:cG,innerColor:bD,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:r,backgroundRepeat:cH,outerColor:ci,innerColor:bD,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cg,backgroundRepeat:cH,outerColor:cG,innerColor:bD,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cg,backgroundRepeat:cH,outerColor:ci,innerColor:bD,innerOpacity:0.3}},"scrollbar-horizontal-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[cc,0],gradientEnd:[cx,100]}},"scrollbar-vertical-css":{include:bM,style:{orientation:p}},"scrollbar-slider-horizontal-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[cd,0],gradientEnd:[cX,100],color:cG,width:1}},"scrollbar-slider-vertical-css":{include:m,style:{orientation:p}},"scrollbar-slider-horizontal-disabled-css":{include:m,style:{color:cN}},"scrollbar-slider-vertical-disabled-css":{include:bl,style:{color:cN}},"button-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:df,width:1,startColor:cB,endColor:cA,startColorPosition:35,endColorPosition:100}},"button-disabled-css":{include:bG,style:{color:cN,startColor:ba,endColor:bL}},"button-hovered-css":{include:bG,style:{startColor:co,endColor:cn}},"button-checked-css":{include:bG,style:{endColor:cB,startColor:cA}},"button-pressed-css":{include:bG,style:{endColor:co,startColor:cn}},"button-focused-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:df,width:1,innerColor:P,innerWidth:2,startColor:cB,endColor:cA,startColorPosition:30,endColorPosition:100}},"button-checked-focused-css":{include:dl,style:{endColor:cB,startColor:cA}},"button-invalid-css":{include:bG,style:{color:cF}},"button-disabled-invalid-css":{include:D,style:{color:cF}},"button-hovered-invalid-css":{include:cf,style:{color:cF}},"button-checked-invalid-css":{include:c,style:{color:cF}},"button-pressed-invalid-css":{include:bp,style:{color:cF}},"button-focused-invalid-css":{include:dl,style:{color:cF}},"button-checked-focused-invalid-css":{include:db,style:{color:cF}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:bY,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:bv,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:bW,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bP,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bw,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:bm,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:by,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Single,style:{color:cI,width:1}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cI,innerColor:dm,insets:[0]}},"checkbox":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow],style:{width:1,color:dk,innerWidth:1,innerColor:bN,gradientStart:[dp,0],gradientEnd:[cy,100],shadowLength:0,shadowBlurRadius:0,shadowColor:l,insetLeft:4}},"checkbox-hovered":{include:cR,style:{innerColor:bU,gradientStart:[cC,0],gradientEnd:[cC,100]}},"checkbox-focused":{include:cR,style:{shadowBlurRadius:4}},"checkbox-disabled":{include:cR,style:{color:ck,innerColor:ct,gradientStart:[g,0],gradientEnd:[R,100]}},"checkbox-invalid":{include:cR,style:{color:cI}},"checkbox-hovered-invalid":{include:cC,style:{color:cI,innerColor:z,gradientStart:[t,0],gradientEnd:[t,100]}},"checkbox-focused-invalid":{include:cb,style:{color:cI,shadowColor:cI}},"input-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBackgroundColor],style:{color:bF,innerColor:bE,innerWidth:1,width:1,backgroundColor:bK,startColor:x,endColor:cq,startColorPosition:0,endColorPosition:12,colorPositionUnit:bz}},"border-invalid-css":{include:cT,style:{color:cF}},"input-focused-css":{include:cT,style:{startColor:bT,innerColor:cV,endColorPosition:4}},"input-focused-invalid-css":{include:I,style:{innerColor:dd,color:cF}},"input-disabled-css":{include:cT,style:{color:bO}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bF,innerColor:bE,innerOpacity:0.5,backgroundImage:cL,backgroundRepeat:bI,backgroundColor:bK}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bF,innerColor:cv,backgroundImage:s,backgroundRepeat:bI,backgroundColor:bK}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cI,innerColor:dm,backgroundImage:s,backgroundRepeat:bI,backgroundColor:bK,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:ci,innerColor:bE,innerOpacity:0.5,backgroundImage:cL,backgroundRepeat:bI,backgroundColor:bK}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:y,backgroundRepeat:cH}},"toolbar-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:40,endColorPosition:60,startColor:h,endColor:bR}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cj,innerColor:cS,backgroundImage:bc,backgroundRepeat:cH}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cj,innerColor:cS,backgroundImage:b,backgroundRepeat:cH}},"toolbar-button-hovered-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{color:cj,width:1,innerWidth:1,innerColor:cS,radius:2,gradientStart:[cB,30],gradientEnd:[cA,100]}},"toolbar-button-checked-css":{include:bq,style:{gradientStart:[cA,30],gradientEnd:[cB,100]}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:U,colorRight:cs,styleLeft:cJ,styleRight:cJ}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:J,backgroundRepeat:cm}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:u,insets:[4,6,7,4]}},"tabview-pane-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MSingleBorder],style:{width:1,color:bB,radius:3,gradientStart:[dj,90],gradientEnd:[bi,100]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:dn}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:da}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:E}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bu}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bs}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:dc}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:A}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bt}},"tabview-page-button-top-active-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{radius:[3,3,0,0],width:[1,1,0,1],color:bJ,backgroundColor:dj,shadowLength:1,shadowColor:cE,shadowBlurRadius:2}},"tabview-page-button-top-inactive-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{radius:[3,3,0,0],color:cQ,colorBottom:bJ,width:1,gradientStart:[dh,0],gradientEnd:[cr,100]}},"tabview-page-button-bottom-active-css":{include:cM,style:{radius:[0,0,3,3],width:[0,1,1,1],backgroundColor:dh}},"tabview-page-button-bottom-inactive-css":{include:cK,style:{radius:[0,0,3,3],width:[0,1,1,1],colorBottom:cQ,colorTop:bJ}},"tabview-page-button-left-active-css":{include:cM,style:{radius:[3,0,0,3],width:[1,0,1,1],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-left-inactive-css":{include:cK,style:{radius:[3,0,0,3],width:[1,0,1,1],colorBottom:cQ,colorRight:bJ}},"tabview-page-button-right-active-css":{include:cM,style:{radius:[0,3,3,0],width:[1,1,1,0],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-right-inactive-css":{include:cK,style:{radius:[0,3,3,0],width:[1,1,1,0],colorBottom:cQ,colorLeft:bJ}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:cl,width:3,color:bx,style:cJ}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:cl,width:1,color:cG,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:v}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:cY}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:bA}},"window-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{radius:[5,5,0,0],shadowBlurRadius:4,shadowLength:2,shadowColor:cE}},"window-incl-statusbar-css":{include:bn,style:{radius:[5,5,5,5]}},"window-resize-frame-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{radius:[5,5,0,0],width:1,color:cG}},"window-resize-frame-incl-statusbar-css":{include:bh,style:{radius:[5,5,5,5]}},"window-captionbar-active-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:bB,colorBottom:K,radius:[5,5,0,0],gradientStart:[Q,30],gradientEnd:[T,70]}},"window-captionbar-inactive-css":{include:M,style:{gradientStart:[cW,30],gradientEnd:[cz,70]}},"window-statusbar-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius],style:{backgroundColor:bj,width:[0,1,1,1],color:bB,radius:[0,0,5,5]}},"window-pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{backgroundColor:cl,width:1,color:bB,widthTop:0}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:cG,style:cJ}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:cG,style:cJ}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:di,backgroundRepeat:cH,widthBottom:1,colorBottom:cG,style:cJ}},"table-scroller-header-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[q,10],gradientEnd:[dg,90],widthBottom:1,colorBottom:cG}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:cD,styleRight:cJ}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:cD,styleRight:cJ,widthBottom:1,colorBottom:bg,styleBottom:cJ}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:d,style:cJ}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:cG,style:cJ}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:di,backgroundRepeat:cH,widthRight:1,colorRight:ch,style:cJ}},"progressive-table-header-cell-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[q,10],gradientEnd:[dg,90],widthRight:1,colorRight:ch}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:W,backgroundRepeat:cH,width:1,color:cG,style:cJ}},"menu-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{gradientStart:[O,0],gradientEnd:[n,100],shadowColor:cE,shadowBlurRadius:2,shadowLength:1,width:1,color:cG}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:de,widthBottom:1,colorBottom:a}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:L,backgroundRepeat:cH,width:1,color:cD,style:cJ}},"menubar-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[i,0],gradientEnd:[n,100],width:1,color:cD}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bV,backgroundRepeat:cH}},"progressbar":{decorator:qx.ui.decoration.Single,style:{width:1,color:bF}},"group-item":{decorator:qx.ui.decoration.Background,style:{backgroundImage:cw,backgroundRepeat:cH}},"group-item-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:bQ,endColor:G}}}});
})();
(function(){var bB="white",bA="#EEEEEE",bz="#E4E4E4",by="#F3F3F3",bx="#F0F0F0",bw="#E8E8E8",bv="#CCCCCC",bu="#EFEFEF",bt="#1a1a1a",bs="#00204D",bh="gray",bg="#F4F4F4",bf="#fffefe",be="#AFAFAF",bd="#084FAB",bc="#FCFCFC",bb="#CCC",ba="#F2F2F2",Y="black",X="#ffffdd",bI="#b6b6b6",bJ="#004DAD",bG="#BABABA",bH="#005BC3",bE="#334866",bF="#CECECE",bC="#D9D9D9",bD="#D8D8D8",bK="#99C3FE",bL="#001533",bl="#B3B3B3",bk="#D5D5D5",bn="#C3C3C3",bm="#DDDDDD",bp="#FF9999",bo="css.rgba",br="#E8E8E9",bq="#084FAA",bj="#C5C5C5",bi="rgba(0, 0, 0, 0.4)",a="#DBDBDB",b="#4a4a4a",c="#83BAEA",d="#D7E7F4",e="#07125A",f="#FAF2F2",g="#87AFE7",h="#F7EAEA",i="#777D8D",j="#FBFBFB",bP="#CACACA",bO="#909090",bN="#9B9B9B",bM="#F0F9FE",bT="#314a6e",bS="#B4B4B4",bR="#787878",bQ="qx.theme.modern.Color",bV="#000000",bU="#26364D",H="#A7A7A7",I="#D1E4FF",F="#5CB0FD",G="#EAEAEA",L="#003B91",M="#80B4EF",J="#FF6B78",K="#949494",D="#808080",E="#930000",r="#7B7B7B",q="#C82C2C",t="#DFDFDF",s="#B6B6B6",n="#0880EF",m="#4d4d4d",p="#f4f4f4",o="#7B7A7E",l="#D0D0D0",k="#f8f8f8",R="#404955",S="#959595",T="#AAAAAA",U="#F7E9E9",N="#314A6E",O="#C72B2B",P="#FAFAFA",Q="#FBFCFB",V="#B2D2FF",W="#666666",B="#CBC8CD",A="#999999",z="#8EB8D6",y="#b8b8b8",x="#727272",w="#33508D",v="#F1F1F1",u="#990000",C="#00368A";
qx.Theme.define(bQ,{colors:{"background-application":t,"background-pane":by,"background-light":bc,"background-medium":bA,"background-splitpane":be,"background-tip":X,"background-tip-error":O,"background-odd":bz,"htmlarea-background":bB,"progressbar-background":bB,"text-light":bO,"text-gray":b,"text-label":bt,"text-title":bT,"text-input":bV,"text-hovered":bL,"text-disabled":o,"text-selected":bf,"text-active":bU,"text-inactive":R,"text-placeholder":B,"border-inner-scrollbar":bB,"border-main":m,"menu-separator-top":bj,"menu-separator-bottom":P,"border-separator":D,"border-toolbar-button-outer":bI,"border-toolbar-border-inner":k,"border-toolbar-separator-right":p,"border-toolbar-separator-left":y,"border-input":bE,"border-inner-input":bB,"border-disabled":s,"border-pane":bs,"border-button":W,"border-column":bv,"border-focused":bK,"invalid":u,"border-focused-invalid":bp,"border-dragover":w,"keyboard-focus":Y,"table-pane":by,"table-focus-indicator":n,"table-row-background-focused-selected":bd,"table-row-background-focused":M,"table-row-background-selected":bd,"table-row-background-even":by,"table-row-background-odd":bz,"table-row-selected":bf,"table-row":bt,"table-row-line":bb,"table-column-line":bb,"table-header-hovered":bB,"progressive-table-header":T,"progressive-table-header-border-right":ba,"progressive-table-row-background-even":bg,"progressive-table-row-background-odd":bz,"progressive-progressbar-background":bh,"progressive-progressbar-indicator-done":bv,"progressive-progressbar-indicator-undone":bB,"progressive-progressbar-percent-background":bh,"progressive-progressbar-percent-text":bB,"selected-start":bJ,"selected-end":C,"tabview-background":e,"shadow":qx.core.Environment.get(bo)?bi:A,"pane-start":j,"pane-end":bx,"group-background":bw,"group-border":bS,"radiobutton-background":bu,"checkbox-border":N,"checkbox-focus":g,"checkbox-hovered":V,"checkbox-hovered-inner":I,"checkbox-inner":bA,"checkbox-start":bz,"checkbox-end":by,"checkbox-disabled-border":bR,"checkbox-disabled-inner":bP,"checkbox-disabled-start":l,"checkbox-disabled-end":bD,"checkbox-hovered-inner-invalid":f,"checkbox-hovered-invalid":U,"radiobutton-checked":bH,"radiobutton-disabled":bk,"radiobutton-checked-disabled":r,"radiobutton-hovered-invalid":h,"tooltip-error":q,"scrollbar-start":bv,"scrollbar-end":v,"scrollbar-slider-start":bA,"scrollbar-slider-end":bn,"button-border-disabled":S,"button-start":bx,"button-end":be,"button-disabled-start":bg,"button-disabled-end":bG,"button-hovered-start":bM,"button-hovered-end":z,"button-focused":c,"border-invalid":E,"input-start":bx,"input-end":Q,"input-focused-start":d,"input-focused-end":F,"input-focused-inner-invalid":J,"input-border-disabled":bN,"input-border-inner":bB,"toolbar-start":bu,"toolbar-end":bm,"window-border":bs,"window-border-caption":x,"window-caption-active-text":bB,"window-caption-active-start":bq,"window-caption-active-end":L,"window-caption-inactive-start":ba,"window-caption-inactive-end":a,"window-statusbar-background":bu,"tabview-start":bc,"tabview-end":bA,"tabview-inactive":i,"tabview-inactive-start":G,"tabview-inactive-end":bF,"table-header-start":bw,"table-header-end":bl,"menu-start":br,"menu-end":bC,"menubar-start":bw,"groupitem-start":H,"groupitem-end":K,"groupitem-text":bB,"virtual-row-layer-background-even":bB,"virtual-row-layer-background-odd":bB}});
})();
(function(){var t="os.version",s="os.name",r="win",q="7",p="vista",o="osx",n="Liberation Sans",m="Tahoma",l="sans-serif",k="Arial",d="Lucida Grande",j="Candara",g="Segoe UI",c="Consolas",b="monospace",f="Courier New",e="Lucida Console",h="Monaco",a="qx.theme.modern.Font",i="DejaVu Sans Mono";
qx.Theme.define(a,{fonts:{"default":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?12:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l]},"bold":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?12:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l],bold:true},"small":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?11:10,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l]},"monospace":{size:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[e,h]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[c]:[c,i,f,b]}}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var l="'>",k="[",h=", ",g="</span>",f="<span class='type-",e="</span> ",d="}",c="",b="]",a="\n",M="{",L="map",K="Use qx.dev.StackTrace.FORMAT_STACKTRACE instead",J="function",I="<span class='object'>",H="]:",G="&gt;",F="<span class='object' title='Object instance with hash code: ",E="FORMAT_STACK",D="string",s="level-",t="0",q="&lt;",r="<span class='offset'>",o=":",p="qx.log.appender.Util",m="&amp;",n="&#39;",u="DIV",v="<span>",y="&quot;",x="<span class='type-key'>",A="</span>:<span class='type-",z="</span>: ",C=" ",B="]</span>: ",w="?";
qx.Class.define(p,{statics:{toHtml:function(N){var X=[];
var U,W,P,R;
X.push(r,this.formatOffset(N.offset,6),e);

if(N.object){var O=N.win.qx.core.ObjectRegistry.fromHashCode(N.object);

if(O){X.push(F+O.$$hash+l,O.classname,k,O.$$hash,B);
}}else if(N.clazz){X.push(I+N.clazz.classname,z);
}var Q=N.items;

for(var i=0,V=Q.length;i<V;i++){U=Q[i];
W=U.text;

if(W instanceof Array){var R=[];

for(var j=0,T=W.length;j<T;j++){P=W[j];

if(typeof P===D){R.push(v+this.escapeHTML(P)+g);
}else if(P.key){R.push(x+P.key+A+P.type+l+this.escapeHTML(P.text)+g);
}else{R.push(f+P.type+l+this.escapeHTML(P.text)+g);
}}X.push(f+U.type+l);

if(U.type===L){X.push(M,R.join(h),d);
}else{X.push(k,R.join(h),b);
}X.push(g);
}else{X.push(f+U.type+l+this.escapeHTML(W)+e);
}}var S=document.createElement(u);
S.innerHTML=X.join(c);
S.className=s+N.level;
return S;
},formatOffset:function(Y,length){var bc=Y.toString();
var ba=(length||6)-bc.length;
var bb=c;

for(var i=0;i<ba;i++){bb+=t;
}return bb+bc;
},FORMAT_STACK:null,escapeHTML:function(bd){return String(bd).replace(/[<>&"']/g,this.__ye);
},__ye:function(be){var bf={"<":q,">":G,"&":m,"'":n,'"':y};
return bf[be]||w;
},toText:function(bg){return this.toTextArray(bg).join(C);
},toTextArray:function(bh){var bp=[];
bp.push(this.formatOffset(bh.offset,6));

if(bh.object){var bi=bh.win.qx.core.ObjectRegistry.fromHashCode(bh.object);

if(bi){bp.push(bi.classname+k+bi.$$hash+H);
}}else if(bh.clazz){bp.push(bh.clazz.classname+o);
}var bj=bh.items;
var bm,bo;

for(var i=0,bn=bj.length;i<bn;i++){bm=bj[i];
bo=bm.text;

if(bm.trace&&bm.trace.length>0){if(typeof (this.FORMAT_STACK)==J){qx.log.Logger.deprecatedConstantWarning(qx.log.appender.Util,E,K);
bo+=a+this.FORMAT_STACK(bm.trace);
}else{bo+=a+bm.trace;
}}
if(bo instanceof Array){var bk=[];

for(var j=0,bl=bo.length;j<bl;j++){bk.push(bo[j].text);
}
if(bm.type===L){bp.push(M,bk.join(h),d);
}else{bp.push(k,bk.join(h),b);
}}else{bp.push(bo);
}}return bp;
}}});
})();
(function(){var c="html.console",b="qx.log.appender.Native",a="log";
qx.Class.define(b,{statics:{process:function(d){if(qx.core.Environment.get(c)){var f=console[d.level]?d.level:a;

if(console[f]){var e=qx.log.appender.Util.toText(d);
console[f](e);
}}}},defer:function(g){qx.log.Logger.register(g);
}});
})();
(function(){var k="",j='</div>',i="Up",h="none",g="keypress",f='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',d="Enter",c="px",b='.qxconsole .messages .user-result{background:white}',a='.qxconsole .messages .level-error{background:#FFE2D5}',V="div",U="user-command",T='<div class="command">',S='.qxconsole .command input:focus{outline:none;}',R='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',P='.qxconsole .messages div{padding:0px 4px;}',O='.qxconsole .messages .level-debug{background:white}',N='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',M="DIV",r='.qxconsole .messages .level-user{background:#E3EFE9}',s='<div class="qxconsole">',p="D",q='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',n='.qxconsole .messages .type-string{color:black;font-weight:normal;}',o='.qxconsole .control a{text-decoration:none;color:black;}',l='<div class="messages">',m='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',t='<input type="text"/>',u="clear",B='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',z='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',F='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',D='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',I='.qxconsole .messages .user-command{color:blue}',H="F7",w="qx.log.appender.Console",L='.qxconsole .messages .level-info{background:#DEEDFA}',K="block",J='.qxconsole .messages .level-warn{background:#FFF7D5}',v='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',x='.qxconsole .messages .user-error{background:#FFE2D5}',y='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',A='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',C=">>> ",E="Down",G='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(w,{statics:{init:function(){var W=[F,y,o,f,P,I,b,x,O,L,J,a,r,n,G,m,z,q,R,N,Q,v,D,B,S];
qx.bom.Stylesheet.createElement(W.join(k));
var Y=[s,A,l,j,T,t,j,j];
var ba=document.createElement(M);
ba.innerHTML=Y.join(k);
var X=ba.firstChild;
document.body.appendChild(ba.firstChild);
this.__Ka=X;
this.__ct=X.childNodes[1];
this.__Kb=X.childNodes[2].firstChild;
this.__qq();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__ee,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__ct.innerHTML=k;
},process:function(bb){this.__ct.appendChild(qx.log.appender.Util.toHtml(bb));
this.__Kc();
},__Kc:function(){this.__ct.scrollTop=this.__ct.scrollHeight;
},__kl:true,toggle:function(){if(!this.__Ka){this.init();
}else if(this.__Ka.style.display==h){this.show();
}else{this.__Ka.style.display=h;
}},show:function(){if(!this.__Ka){this.init();
}else{this.__Ka.style.display=K;
this.__ct.scrollTop=this.__ct.scrollHeight;
}},__sb:[],execute:function(){var be=this.__Kb.value;

if(be==k){return;
}
if(be==u){return this.clear();
}var bc=document.createElement(V);
bc.innerHTML=qx.log.appender.Util.escapeHTML(C+be);
bc.className=U;
this.__sb.push(be);
this.__Kd=this.__sb.length;
this.__ct.appendChild(bc);
this.__Kc();

try{var bd=window.eval(be);
}catch(bf){qx.log.Logger.error(bf);
}
if(bd!==undefined){qx.log.Logger.debug(bd);
}},__qq:function(e){this.__ct.style.height=(this.__Ka.clientHeight-this.__Ka.firstChild.offsetHeight-this.__Ka.lastChild.offsetHeight)+c;
},__ee:function(e){var bh=e.getKeyIdentifier();
if((bh==H)||(bh==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__Ka){return;
}if(!qx.dom.Hierarchy.contains(this.__Ka,e.getTarget())){return;
}if(bh==d&&this.__Kb.value!=k){this.execute();
this.__Kb.value=k;
}if(bh==i||bh==E){this.__Kd+=bh==i?-1:1;
this.__Kd=Math.min(Math.max(0,this.__Kd),this.__sb.length);
var bg=this.__sb[this.__Kd];
this.__Kb.value=bg||k;
this.__Kb.select();
}}},defer:function(bi){qx.event.Registration.addListener(document.documentElement,g,bi.__ee,bi);
}});
})();
(function(){var l=": ",k="Summary: (",j="qx.dev.ObjectSummary",h="\n",g=" Objects)\n\n",f=")\r\n",e=" (",d=" Objects)\r\n\r\n",c=", ";
qx.Class.define(j,{statics:{getInfo:function(){var m={};
var t=0;
var n;
var p=qx.core.ObjectRegistry.getRegistry();

for(var q in p){n=p[q];

if(n&&n.isDisposed()===false){if(m[n.classname]==null){m[n.classname]=1;
}else{m[n.classname]++;
}t++;
}}var s=[];

for(var o in m){s.push({classname:o,number:m[o]});
}s.sort(function(a,b){return b.number-a.number;
});
var r=k+t+g;

for(var i=0;i<s.length;i++){r+=s[i].number+l+s[i].classname+h;
}return r;
},getNewObjects:function(){var v={};
var F=0;
var w;
var A=qx.core.ObjectRegistry.getRegistry();
var y={};
var E;

for(var B in A){w=A[B];

if(w&&w.__disposed===false){var z=w.classname;

if(v[z]==null){v[z]=1;
}else{v[z]++;
}E=y[z];

if(E==null){E=y[z]=new Array();
}E[E.length]=w.toHashCode();
F++;
}}
if(!this._m_dObjectList){this._m_dObjectList={};
}var u={};

for(var z in v){if(!(z in this._m_dObjectList)){this._m_dObjectList[z]=0;
}
if(this._m_dObjectList[z]>=0&&this._m_dObjectList[z]<v[z]){u[z]=v[z]-this._m_dObjectList[z];
}}this._m_dObjectList=v;
var D=[];

for(var x in u){D.push({classname:x,number:u[x],aHashCode:y[x]});
}D.sort(function(a,b){return b.number-a.number;
});
var C=k+F+d;

for(var i=0;i<D.length;i++){C+=D[i].number+l+D[i].classname+e+D[i].aHashCode.join(c)+f;
}return C;
}}});
})();


qx.$$loader.init();

