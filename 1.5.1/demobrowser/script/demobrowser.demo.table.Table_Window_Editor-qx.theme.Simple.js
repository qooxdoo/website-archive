(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"locale":"en","locale.variant":"US","qx.allowUrlSettings":true,"qx.allowUrlVariants":true,"qx.application":"demobrowser.demo.table.Table_Window_Editor","qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.theme":"qx.theme.Simple"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.5.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:demobrowser.demo.table.Table_Window_Editor-qx.theme.Simple.5d4241a084f1.js"]}},
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

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"EEE d.","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"EEE, d.M.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMd":"d. MMM y","cldr_date_time_format_yMd":"d.M.y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Jun","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"Tag","dayperiod":"Tageshälfte","era":"Epoche","hour":"Stunde","minute":"Minute","month":"Monat","quotationEnd":"“","quotationStart":"„","second":"Sekunde","week":"Woche","weekday":"Wochentag","year":"Jahr","zone":"Zone"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"EEE d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"EEE d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d/M/yyyy","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_abbreviated_1":"janv.","cldr_month_stand-alone_abbreviated_10":"oct.","cldr_month_stand-alone_abbreviated_11":"nov.","cldr_month_stand-alone_abbreviated_12":"déc.","cldr_month_stand-alone_abbreviated_2":"févr.","cldr_month_stand-alone_abbreviated_3":"mars","cldr_month_stand-alone_abbreviated_4":"avr.","cldr_month_stand-alone_abbreviated_7":"juil.","cldr_month_stand-alone_abbreviated_9":"sept.","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"jour","dayperiod":"cadran","era":"ère","hour":"heure","minute":"minute","month":"mois","quotationEnd":"»","quotationStart":"«","second":"seconde","week":"semaine","weekday":"jour de la semaine","year":"année","zone":"fuseau horaire"},"fr_FR":{}},"resources":{"qx/decoration/Simple/arrows/down-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/down-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/down.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/forward.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/left-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/left.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/rewind.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/right-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/right.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/up-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/up-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/up.gif":[7,4,"gif","qx"],"qx/decoration/Simple/checkbox/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/checked.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Simple/checkbox/undetermined.png":[6,2,"png","qx"],"qx/decoration/Simple/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Simple/colorselector/brightness-handle.gif":[35,11,"gif","qx"],"qx/decoration/Simple/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Simple/colorselector/huesaturation-handle.gif":[11,11,"gif","qx"],"qx/decoration/Simple/cursors/alias.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/copy.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/move.gif":[13,9,"gif","qx"],"qx/decoration/Simple/cursors/nodrop.gif":[20,20,"gif","qx"],"qx/decoration/Simple/menu/checkbox-invert.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/checkbox.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/radiobutton-invert.gif":[16,5,"gif","qx"],"qx/decoration/Simple/menu/radiobutton.gif":[16,5,"gif","qx"],"qx/decoration/Simple/splitpane/knob-horizontal.png":[1,8,"png","qx"],"qx/decoration/Simple/splitpane/knob-vertical.png":[8,1,"png","qx"],"qx/decoration/Simple/table/ascending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/ascending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/boolean-false.png":[11,11,"png","qx"],"qx/decoration/Simple/table/boolean-true.png":[11,11,"png","qx"],"qx/decoration/Simple/table/descending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/descending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/select-column-order.png":[10,9,"png","qx"],"qx/decoration/Simple/tabview/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/window/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/maximize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/restore.gif":[8,9,"gif","qx"],"qx/icon/Oxygen/16/apps/office-spreadsheet.png":[16,16,"png","qx"],"qx/icon/Oxygen/32/status/dialog-information.png":[32,32,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-spreadsheet.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/32/status/dialog-information.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{"C":{},"de":{"%1 of %2 rows":"%1 von %2 Zeilen","%1 rows":"%1 Zeilen","Reset column widths":"Spaltenbreite zurücksetzen","key_full_Alt":"Alt","key_full_Apps":"Kontextmenü","key_full_Backspace":"Rücktaste","key_full_CapsLock":"Feststelltaste","key_full_Control":"Steuerung","key_full_Delete":"Entfernen","key_full_Down":"Pfeil runter","key_full_End":"Ende","key_full_Enter":"Enter","key_full_Escape":"Escape","key_full_Home":"Position 1","key_full_Insert":"Einfügen","key_full_Left":"Pfeil links","key_full_Meta":"Meta","key_full_NumLock":"NumLock","key_full_PageDown":"Bild runter","key_full_PageUp":"Bild hoch","key_full_Pause":"Pause","key_full_PrintScreen":"Drucken","key_full_Right":"Pfeil rechts","key_full_Scroll":"Rollen","key_full_Shift":"Umschalttaste","key_full_Space":"Leertaste","key_full_Tab":"Tabulator","key_full_Up":"Pfeil hoch","key_full_Win":"Windowstaste","key_short_Alt":"Alt","key_short_Apps":"Kontext","key_short_Backspace":"Rück","key_short_CapsLock":"Feststell","key_short_Control":"Strg","key_short_Delete":"Entf","key_short_Down":"Runter","key_short_End":"Ende","key_short_Enter":"Enter","key_short_Escape":"Esc","key_short_Home":"Pos1","key_short_Insert":"Einfg","key_short_Left":"Links","key_short_Meta":"Meta","key_short_NumLock":"Num","key_short_PageDown":"Bild runter","key_short_PageUp":"Bild hoch","key_short_Pause":"Pause","key_short_PrintScreen":"Druck","key_short_Right":"Rechts","key_short_Scroll":"Rollen","key_short_Shift":"Umschalt","key_short_Space":"Leer","key_short_Tab":"Tab","key_short_Up":"Hoch","key_short_Win":"Win","one of one row":"Eine von einer Zeile","one row":"Eine Zeile"},"de_DE":{},"en":{},"en_US":{},"fr":{"%1 of %2 rows":"ligne %1 de %2","%1 rows":"%1 lignes","Reset column widths":"Réinitialiser la largeur des colonnes","key_full_Alt":"Alternative","key_full_Apps":"Application","key_full_Backspace":"Effacement arrière","key_full_CapsLock":"Verrouillage des Majuscule","key_full_Control":"Contrôle","key_full_Delete":"Suppression","key_full_Down":"Bas","key_full_End":"Fin","key_full_Enter":"Entrée","key_full_Escape":"Échappement","key_full_Home":"Origine","key_full_Insert":"Insertion","key_full_Left":"Gauche","key_full_Meta":"Meta","key_full_NumLock":"Verouillage Numérique","key_full_PageDown":"Page Suivante","key_full_PageUp":"Page Précédente","key_full_Pause":"Pause","key_full_PrintScreen":"Impression de l'écran","key_full_Right":"Droite","key_full_Scroll":"Arrêt défilement","key_full_Shift":"Majuscules","key_full_Space":"Espace","key_full_Tab":"Tabulation","key_full_Up":"Haut","key_full_Win":"Windows","key_short_Alt":"Alt","key_short_Apps":"App.","key_short_Backspace":"Effacement Arrière","key_short_CapsLock":"Verr. Maj.","key_short_Control":"Ctrl","key_short_Delete":"Supp.","key_short_Down":"Bas","key_short_End":"Fin","key_short_Enter":"Entrée","key_short_Escape":"Echap.","key_short_Home":"Orig.","key_short_Insert":"Ins.","key_short_Left":"Gauche","key_short_Meta":"Meta","key_short_NumLock":"Verr. Num.","key_short_PageDown":"Pg Suiv.","key_short_PageUp":"Pg Préc.","key_short_Pause":"Pause","key_short_PrintScreen":"Imp. Écran","key_short_Right":"Droite","key_short_Scroll":"Arrêt Défil","key_short_Shift":"Maj","key_short_Space":"Espace","key_short_Tab":"Tab","key_short_Up":"Haut","key_short_Win":"Win","one of one row":"ligne une de une","one row":"une ligne"},"fr_FR":{}}};
(function(){var m="toString",k=".",j="default",h="Object",g='"',f="Array",e="()",d="String",c="Function",b=".prototype",L="function",K="Boolean",J="Error",I="constructor",H="warn",G="hasOwnProperty",F="string",E="toLocaleString",D="RegExp",C='\", "',t="info",u="BROKEN_IE",r="isPrototypeOf",s="Date",p="",q="qx.Bootstrap",n="]",o="Class",v="error",w="[Class ",y="valueOf",x="Number",A="count",z="debug",B="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return w+this.classname+n;
},createNamespace:function(name,M){var O=name.split(k);
var parent=window;
var N=O[0];

for(var i=0,P=O.length-1;i<P;i++,N=O[i]){if(!parent[N]){parent=parent[N]={};
}else{parent=parent[N];
}}parent[N]=M;
return N;
},setDisplayName:function(Q,R,name){Q.displayName=R+k+name+e;
},setDisplayNames:function(S,T){for(var name in S){var U=S[name];

if(U instanceof Function){U.displayName=T+k+name+e;
}}},define:function(name,V){if(!V){var V={statics:{}};
}var bb;
var Y=null;
qx.Bootstrap.setDisplayNames(V.statics,name);

if(V.members||V.extend){qx.Bootstrap.setDisplayNames(V.members,name+b);
bb=V.construct||new Function;

if(V.extend){this.extendClass(bb,bb,V.extend,name,ba);
}var W=V.statics||{};
for(var i=0,bc=qx.Bootstrap.getKeys(W),l=bc.length;i<l;i++){var bd=bc[i];
bb[bd]=W[bd];
}Y=bb.prototype;
var X=V.members||{};
for(var i=0,bc=qx.Bootstrap.getKeys(X),l=bc.length;i<l;i++){var bd=bc[i];
Y[bd]=X[bd];
}}else{bb=V.statics||{};
}var ba=this.createNamespace(name,bb);
bb.name=bb.classname=name;
bb.basename=ba;
bb.$$type=o;
if(!bb.hasOwnProperty(m)){bb.toString=this.genericToString;
}if(V.defer){V.defer(bb,Y);
}qx.Bootstrap.$$registry[name]=V.statics;
return bb;
}};
qx.Bootstrap.define(q,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var be=true;

if(qx.$$environment&&qx.$$environment["qx.debug"]===false){be=false;
}return be;
})(),getEnvironmentSetting:function(bf){if(qx.$$environment){return qx.$$environment[bf];
}},setEnvironmentSetting:function(bg,bh){if(!qx.$$environment){qx.$$environment={};
}
if(qx.$$environment[bg]===undefined){qx.$$environment[bg]=bh;
}},createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bi,bj,bk,name,bl){var bo=bk.prototype;
var bn=new Function;
bn.prototype=bo;
var bm=new bn;
bi.prototype=bm;
bm.name=bm.classname=name;
bm.basename=bl;
bj.base=bi.superclass=bk;
bj.self=bi.constructor=bm.constructor=bi;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bp){return bp.__count__;
},"default":function(bq){var length=0;

for(var br in bq){length++;
}return length;
}})[(({}).__count__==0)?A:j],objectMergeWith:function(bs,bt,bu){if(bu===undefined){bu=true;
}
for(var bv in bt){if(bu||bs[bv]===undefined){bs[bv]=bt[bv];
}}return bs;
},__a:[r,G,E,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bw){var bx=[];
var bz=Object.prototype.hasOwnProperty;

for(var bA in bw){if(bz.call(bw,bA)){bx.push(bA);
}}var by=qx.Bootstrap.__a;

for(var i=0,a=by,l=a.length;i<l;i++){if(bz.call(bw,a[i])){bx.push(a[i]);
}}return bx;
},"default":function(bB){var bC=[];
var bD=Object.prototype.hasOwnProperty;

for(var bE in bB){if(bD.call(bB,bE)){bC.push(bE);
}}return bC;
}})[typeof (Object.keys)==L?B:(function(){for(var bF in {toString:1}){return bF;
}})()!==m?u:j],getKeysAsString:function(bG){var bH=qx.Bootstrap.getKeys(bG);

if(bH.length==0){return p;
}return g+bH.join(C)+g;
},__b:{"[object String]":d,"[object Array]":f,"[object Object]":h,"[object RegExp]":D,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":c,"[object Error]":J},bind:function(bI,self,bJ){var bK=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bL=Array.prototype.slice.call(arguments,0,arguments.length);
return bI.apply(self,bK.concat(bL));
};
},firstUp:function(bM){return bM.charAt(0).toUpperCase()+bM.substr(1);
},firstLow:function(bN){return bN.charAt(0).toLowerCase()+bN.substr(1);
},getClass:function(bO){var bP=Object.prototype.toString.call(bO);
return (qx.Bootstrap.__b[bP]||bP.slice(8,-1));
},isString:function(bQ){return (bQ!==null&&(typeof bQ===F||qx.Bootstrap.getClass(bQ)==d||bQ instanceof String||(!!bQ&&!!bQ.$$isString)));
},isArray:function(bR){return (bR!==null&&(bR instanceof Array||(bR&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bR.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bR)==f||(!!bR&&!!bR.$$isArray)));
},isObject:function(bS){return (bS!==undefined&&bS!==null&&qx.Bootstrap.getClass(bS)==h);
},isFunction:function(bT){return qx.Bootstrap.getClass(bT)==c;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bU,name){while(bU){if(bU.$$properties&&bU.$$properties[name]){return bU.$$properties[name];
}bU=bU.superclass;
}return null;
},hasProperty:function(bV,name){return !!qx.Bootstrap.getPropertyDefinition(bV,name);
},getEventType:function(bW,name){var bW=bW.constructor;

while(bW.superclass){if(bW.$$events&&bW.$$events[name]!==undefined){return bW.$$events[name];
}bW=bW.superclass;
}return null;
},supportsEvent:function(bX,name){return !!qx.Bootstrap.getEventType(bX,name);
},getByInterface:function(bY,ca){var cb,i,l;

while(bY){if(bY.$$implements){cb=bY.$$flatImplements;

for(i=0,l=cb.length;i<l;i++){if(cb[i]===ca){return bY;
}}}bY=bY.superclass;
}return null;
},hasInterface:function(cc,cd){return !!qx.Bootstrap.getByInterface(cc,cd);
},getMixins:function(ce){var cf=[];

while(ce){if(ce.$$includes){cf.push.apply(cf,ce.$$flatIncludes);
}ce=ce.superclass;
}return cf;
},$$logs:[],debug:function(cg,ch){qx.Bootstrap.$$logs.push([z,arguments]);
},info:function(ci,cj){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(ck,cl){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(cm,cn){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(co){}}});
})();
(function(){var d="-",c="",b="qx.bom.client.Locale",a="android";
qx.Bootstrap.define(b,{statics:{getLocale:function(){var e=qx.bom.client.Locale.__i();
var f=e.indexOf(d);

if(f!=-1){e=e.substr(0,f);
}return e;
},getVariant:function(){var g=qx.bom.client.Locale.__i();
var i=c;
var h=g.indexOf(d);

if(h!=-1){i=g.substr(h+1);
}return i;
},__i:function(){var j=(navigator.userLanguage||navigator.language||c);
if(qx.bom.client.OperatingSystem.getName()==a){var k=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(k){j=k[0];
}}return j.toLowerCase();
}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",bb="10.0",ba="10.4",Y="rim_tabletos",X="Darwin",W="2003",V=")",U="iPhone",T="android",S="unix",R="ce",q="7",r="SymbianOS",o="|",p="MacPPC",m="iPod",n="\.",k="Win64",l="linux",u="me",v="Macintosh",D="Android",B="Windows",J="ios",F="vista",N="blackberry",L="(",x="win",Q="Linux",P="BSD",O="iPad",w="X11",z="xp",A="symbian",C="qx.bom.client.OperatingSystem",E="g",G="Win32",K="osx",M="webOS",s="RIM Tablet OS",t="BlackBerry",y="nt4",I="MacIntel",H="webos";
qx.Bootstrap.define(C,{statics:{getName:function(){if(!navigator){return j;
}var bc=navigator.platform||j;
var bd=navigator.userAgent||j;

if(bc.indexOf(B)!=-1||bc.indexOf(G)!=-1||bc.indexOf(k)!=-1){return x;
}else if(bc.indexOf(v)!=-1||bc.indexOf(p)!=-1||bc.indexOf(I)!=-1){return K;
}else if(bd.indexOf(s)!=-1){return Y;
}else if(bd.indexOf(M)!=-1){return H;
}else if(bc.indexOf(m)!=-1||bc.indexOf(U)!=-1||bc.indexOf(O)!=-1){return J;
}else if(bc.indexOf(Q)!=-1){return l;
}else if(bc.indexOf(w)!=-1||bc.indexOf(P)!=-1||bc.indexOf(X)!=-1){return S;
}else if(bc.indexOf(D)!=-1){return T;
}else if(bc.indexOf(r)!=-1){return A;
}else if(bc.indexOf(t)!=-1){return N;
}return j;
},__g:{"Windows NT 6.1":q,"Windows NT 6.0":F,"Windows NT 5.2":W,"Windows NT 5.1":z,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":y,"Win 9x 4.90":u,"Windows CE":R,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":ba,"Mac OS X 10.4":ba,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":bb,"Mac OS X 10.0":bb},getVersion:function(){var bg=[];

for(var bf in qx.bom.client.OperatingSystem.__g){bg.push(bf);
}var bh=new RegExp(L+bg.join(o).replace(/\./g,n)+V,E);
var be=bh.exec(navigator.userAgent);

if(be&&be[1]){return qx.bom.client.OperatingSystem.__g[be[1]];
}return j;
}}});
})();
(function(){var l="",k="audio",j="video",i='video/ogg; codecs="theora, vorbis"',h="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",g="http://www.w3.org/TR/SVG11/feature#BasicStructure",f='audio',d='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",b="audio/mpeg",z="org.w3c.dom.svg",y="DOMTokenList",x="1.1",w="audio/x-wav",u="audio/ogg",t="audio/x-aiff",s="qx.bom.client.Html",r='video',q="mshtml",p="label",n='video/webm; codecs="vp8, vorbis"',o="1.0",m="audio/basic";
qx.Bootstrap.define(s,{statics:{getWebWorker:function(){return window.Worker!=null;
},getFileReader:function(){return window.FileReader!=null;
},getGeoLocation:function(){return navigator.geolocation!=null;
},getAudio:function(){return !!document.createElement(f).canPlayType;
},getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(u);
},getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(b);
},getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(w);
},getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(m);
},getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(t);
},getVideo:function(){return !!document.createElement(r).canPlayType;
},getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(i);
},getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(d);
},getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(n);
},getLocalStorage:function(){try{return window.localStorage!=null;
}catch(A){return false;
}},getSessionStorage:function(){try{return window.sessionStorage!=null;
}catch(B){return false;
}},getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===y);
},getXPath:function(){return !!document.evaluate;
},getXul:function(){try{document.createElementNS(h,p);
return true;
}catch(e){return false;
}},getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(z,o)||document.implementation.hasFeature(g,x));
},getVml:function(){return qx.bom.client.Engine.getName()==q;
},getCanvas:function(){return !!window.CanvasRenderingContext2D;
},getDataUrl:function(C){var D=new Image();
D.onload=D.onerror=function(){window.setTimeout(function(){C.call(null,(D.width==1&&D.height==1));
},0);
};
D.src=c;
},getDataset:function(){return !!document.documentElement.dataset;
}}});
})();
(function(){var r=".",q="function",p="",o="gecko",n="[object Opera]",m="mshtml",l="8.0",k="AppleWebKit/",j="9.0",i="[^\\.0-9]",c="webkit",h="4.0",f="1.9.0.0",b="opera",a="Version/",e="5.0",d="qx.bom.client.Engine",g="Gecko";
qx.Bootstrap.define(d,{statics:{getVersion:function(){var v=window.navigator.userAgent;
var t=p;

if(qx.bom.client.Engine.__c()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(v)){if(v.indexOf(a)!=-1){var u=v.match(/Version\/(\d+)\.(\d+)/);
t=u[1]+r+u[2].charAt(0)+r+u[2].substring(1,u[2].length);
}else{t=RegExp.$1+r+RegExp.$2;

if(RegExp.$3!=p){t+=r+RegExp.$3;
}}}}else if(qx.bom.client.Engine.__d()){if(/AppleWebKit\/([^ ]+)/.test(v)){t=RegExp.$1;
var w=RegExp(i).exec(t);

if(w){t=t.slice(0,w.index);
}}}else if(qx.bom.client.Engine.__e()){if(/rv\:([^\);]+)(\)|;)/.test(v)){t=RegExp.$1;
}}else if(qx.bom.client.Engine.__f()){if(/MSIE\s+([^\);]+)(\)|;)/.test(v)){t=RegExp.$1;
if(t<8&&/Trident\/([^\);]+)(\)|;)/.test(v)){if(RegExp.$1==h){t=l;
}else if(RegExp.$1==e){t=j;
}}}}else{var s=window.qxFail;

if(s&&typeof s===q){t=s().FULLVERSION;
}else{t=f;
qx.Bootstrap.warn("Unsupported client: "+v+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return t;
},getName:function(){var name;

if(qx.bom.client.Engine.__c()){name=b;
}else if(qx.bom.client.Engine.__d()){name=c;
}else if(qx.bom.client.Engine.__e()){name=o;
}else if(qx.bom.client.Engine.__f()){name=m;
}else{var x=window.qxFail;

if(x&&typeof x===q){name=x().NAME;
}else{name=o;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__c:function(){return window.opera&&Object.prototype.toString.call(window.opera)==n;
},__d:function(){return window.navigator.userAgent.indexOf(k)!=-1;
},__e:function(){return window.controllers&&window.navigator.product===g;
},__f:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}}});
})();
(function(){var k="xhr",j="Microsoft.XMLHTTP",i="",h="file:",g="https:",f="webkit",e="gecko",d="activex",c="opera",b=".",a="qx.bom.client.Transport";
qx.Bootstrap.define(a,{statics:{getMaxConcurrentRequestCount:function(){var l;
var o=qx.bom.client.Engine.getVersion().split(b);
var m=0;
var p=0;
var n=0;
if(o[0]){m=o[0];
}if(o[1]){p=o[1];
}if(o[2]){n=o[2];
}if(window.maxConnectionsPerServer){l=window.maxConnectionsPerServer;
}else if(qx.bom.client.Engine.getName()==c){l=8;
}else if(qx.bom.client.Engine.getName()==f){l=4;
}else if(qx.bom.client.Engine.getName()==e&&((m>1)||((m==1)&&(p>9))||((m==1)&&(p==9)&&(n>=1)))){l=6;
}else{l=2;
}return l;
},getSsl:function(){return window.location.protocol===g;
},getXmlHttpRequest:function(){var q=window.ActiveXObject?(function(){if(window.location.protocol!==h){try{new window.XMLHttpRequest();
return k;
}catch(r){}}
try{new window.ActiveXObject(j);
return d;
}catch(s){}})():(function(){try{new window.XMLHttpRequest();
return k;
}catch(t){}})();
return q||i;
}}});
})();
(function(){var u="",t="silverlight",s="wmv",r="mshtml",q="pdf",p="quicktime",o="divx",n="Windows Media",m="qx.bom.client.Plugin",l="WMPlayer.OCX.7",d="Silverlight",k="AcroPDF.PDF",g="Chrome PDF Viewer",c="QuickTimeCheckObject.QuickTimeCheck.1",b="Adobe Acrobat",f="QuickTime",e="npdivx.DivXBrowserPlugin.1",h="DivX Web Player",a="AgControl.AgControl";
qx.Bootstrap.define(m,{statics:{getGears:function(){return !!(window.google&&window.google.gears);
},__kJ:{quicktime:{plugin:[f],control:c},wmv:{plugin:[n],control:l},divx:{plugin:[h],control:e},silverlight:{plugin:[d],control:a},pdf:{plugin:[g,b],control:k}},getQuicktimeVersion:function(){var v=qx.bom.client.Plugin.__kJ[p];
return qx.bom.client.Plugin.__kK(v.control,v.plugin);
},getWindowsMediaVersion:function(){var w=qx.bom.client.Plugin.__kJ[s];
return qx.bom.client.Plugin.__kK(w.control,w.plugin);
},getDivXVersion:function(){var x=qx.bom.client.Plugin.__kJ[o];
return qx.bom.client.Plugin.__kK(x.control,x.plugin);
},getSilverlightVersion:function(){var y=qx.bom.client.Plugin.__kJ[t];
return qx.bom.client.Plugin.__kK(y.control,y.plugin);
},getPdfVersion:function(){var z=qx.bom.client.Plugin.__kJ[q];
return qx.bom.client.Plugin.__kK(z.control,z.plugin);
},getQuicktime:function(){var A=qx.bom.client.Plugin.__kJ[p];
return qx.bom.client.Plugin.__kL(A.control,A.plugin);
},getWindowsMedia:function(){var B=qx.bom.client.Plugin.__kJ[s];
return qx.bom.client.Plugin.__kL(B.control,B.plugin);
},getDivX:function(){var C=qx.bom.client.Plugin.__kJ[o];
return qx.bom.client.Plugin.__kL(C.control,C.plugin);
},getSilverlight:function(){var D=qx.bom.client.Plugin.__kJ[t];
return qx.bom.client.Plugin.__kL(D.control,D.plugin);
},getPdf:function(){var E=qx.bom.client.Plugin.__kJ[q];
return qx.bom.client.Plugin.__kL(E.control,E.plugin);
},__kK:function(F,G){var H=qx.bom.client.Plugin.__kL(F,G);
if(!H){return u;
}if(qx.bom.client.Engine.getName()==r){var I=new ActiveXObject(F);

try{var L=I.versionInfo;

if(L!=undefined){return L;
}L=I.version;

if(L!=undefined){return L;
}L=I.settings.version;

if(L!=undefined){return L;
}}catch(N){return u;
}return u;
}else{var M=navigator.plugins;
var K=/([0-9]\.[0-9])/g;

for(var i=0;i<M.length;i++){var J=M[i];

for(var j=0;j<G.length;j++){if(J.name.indexOf(G[j])!==-1){if(K.test(J.name)||K.test(J.description)){return RegExp.$1;
}}}}return u;
}},__kL:function(O,P){if(qx.bom.client.Engine.getName()==r){var Q=window.ActiveXObject;

if(!Q){return false;
}
try{new ActiveXObject(O);
}catch(S){return false;
}return true;
}else{var R=navigator.plugins;

if(!R){return false;
}var name;

for(var i=0;i<R.length;i++){name=R[i].name;

for(var j=0;j<P.length;j++){if(name.indexOf(P[j])!==-1){return true;
}}}return false;
}}}});
})();
(function(){var j="mshtml",i="msie",h=")(/| )([0-9]+\.[0-9])",g="",f="(",e="ce",d="CSS1Compat",c="android",b="operamini",a="mobile chrome",z="iemobile",y="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",x="opera mobi",w="Mobile Safari",v="operamobile",u="ie",t="mobile safari",s="IEMobile|Maxthon|MSIE",r="qx.bom.client.Browser",q="opera mini",o="opera",p="Opera Mini|Opera Mobi|Opera",m="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",k="5.0",l="Mobile/";
qx.Bootstrap.define(r,{statics:{getName:function(){var D=navigator.userAgent;
var C=new RegExp(f+qx.bom.client.Browser.__h+h);
var B=D.match(C);

if(!B){return g;
}var name=B[1].toLowerCase();
var A=qx.bom.client.Engine.getName();

if(A===n){if(name===c){name=a;
}else if(D.indexOf(w)!==-1||D.indexOf(l)!==-1){name=t;
}}else if(A===j){if(name===i){name=u;
if(qx.bom.client.OperatingSystem.getVersion()===e){name=z;
}}}else if(A===o){if(name===x){name=v;
}else if(name===q){name=b;
}}return name;
},getVersion:function(){var H=navigator.userAgent;
var G=new RegExp(f+qx.bom.client.Browser.__h+h);
var F=H.match(G);

if(!F){return g;
}var name=F[1].toLowerCase();
var E=F[3];
if(H.match(/Version(\/| )([0-9]+\.[0-9])/)){E=RegExp.$2;
}
if(qx.bom.client.Engine.getName()==j){E=qx.bom.client.Engine.getVersion();

if(name===i&&qx.bom.client.OperatingSystem.getVersion()==e){E=k;
}}return E;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==j&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==d;
}},__h:{"webkit":m,"gecko":y,"mshtml":s,"opera":p}[qx.bom.client.Engine.getName()]}});
})();
(function(){var k="background",j="div",h="color",g="linear-gradient(0deg, white 0%, red 100%)",f="placeholder",e="content",d="OTextOverflow",c="MozBorderRadius",b="qx.bom.client.Css",a='m11',C="input",B="-ms-linear-gradient(0deg, white 0%, red 100%)",A="-moz-linear-gradient(0deg, white 0%, red 100%)",z="gradient",y="-webkit-linear-gradient(left, white, black)",x="MozBoxShadow",w="rgba(1, 2, 3, 0.5)",v="rgba",u="-o-linear-gradient(0deg, white 0%, red 100%)",t="borderRadius",r='WebKitCSSMatrix',s="WebkitBorderRadius",p="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",q="mshtml",n="WebkitBoxShadow",o="textOverflow",l="boxShadow",m="border";
qx.Bootstrap.define(b,{statics:{getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==q||!qx.bom.client.Browser.getQuirksMode();
return content?e:m;
},getTextOverflow:function(){return o in document.documentElement.style||d in document.documentElement.style;
},getPlaceholder:function(){var i=document.createElement(C);
return f in i;
},getBorderRadius:function(){return t in document.documentElement.style||c in document.documentElement.style||s in document.documentElement.style;
},getBoxShadow:function(){return l in document.documentElement.style||x in document.documentElement.style||n in document.documentElement.style;
},getTranslate3d:function(){return r in window&&a in new WebKitCSSMatrix();
},getGradients:function(){var D;

try{D=document.createElement(j);
}catch(F){D=document.createElement();
}var E=[p,y,A,u,B,g];

for(var i=0;i<E.length;i++){try{D.style[k]=E[i];

if(D.style[k].indexOf(z)!=-1){return true;
}}catch(G){}}return false;
},getRgba:function(){var H;

try{H=document.createElement(j);
}catch(I){H=document.createElement();
}try{H.style[h]=w;

if(H.style[h].indexOf(v)!=-1){return true;
}}catch(J){}return false;
}}});
})();
(function(){var c="notification",b="PhoneGap",a="qx.bom.client.PhoneGap";
qx.Bootstrap.define(a,{statics:{getPhoneGap:function(){return b in window;
},getNotification:function(){return c in navigator;
}}});
})();
(function(){var c="qx.nativeScrollBars",b="osx",a="qx.bom.client.Scroll";
qx.Bootstrap.define(a,{statics:{scrollBarOverlayed:function(){var d=qx.bom.element.Overflow.getScrollbarWidth();
var e=qx.bom.client.OperatingSystem.getName()===b;
var f=qx.core.Environment.get(c);
return d==0&&e&&f;
}}});
})();
(function(){var e="undefined",d="node.js",c="rhino",b="",a="qx.bom.client.Runtime";
qx.Bootstrap.define(a,{statics:{getName:function(){var name=b;
if(typeof environment!==e){name=c;
}else if(typeof process!==e){name=d;
}else{name=qx.bom.client.Browser.getName();
}return name;
}}});
})();
(function(){var t=".",s="$1",r="",q="Shockwave Flash",p="undefined",o="object",n="mshtml",m=",",l="$version",k="always",d="win",j="ShockwaveFlash.ShockwaveFlash.6",g="qx.bom.client.Flash",c="9.0.151",b="10.0.12",f="ShockwaveFlash.ShockwaveFlash.7",e="ShockwaveFlash.ShockwaveFlash",h="osx",a="6.0.65";
qx.Bootstrap.define(g,{statics:{isAvailable:function(){return parseFloat(qx.bom.client.Flash.getVersion())>0;
},getVersion:function(){if(qx.bom.client.Engine.getName()==n){if(!window.ActiveXObject){return r;
}var w=[0,0,0];
var v=false;

try{var x=new ActiveXObject(f);
}catch(z){try{var x=new ActiveXObject(j);
w=[6,0,21];
x.AllowScriptAccess=k;
}catch(A){if(w[0]==6){v=true;
}}
if(!v){try{x=new ActiveXObject(e);
}catch(B){}}}
if(!v&&typeof x==o){var u=x.GetVariable(l);

if(typeof u!=p){u=u.split(" ")[1].split(m);
w[0]=parseInt(u[0],10);
w[1]=parseInt(u[1],10);
w[2]=parseInt(u[2],10);
}}return w.join(t);
}else{if(!navigator.plugins||typeof navigator.plugins[q]!==o){return r;
}var w=[0,0,0];
var y=navigator.plugins[q].description;

if(typeof y!=p){y=y.replace(/^.*\s+(\S+\s+\S+$)/,s);
w[0]=parseInt(y.replace(/^(.*)\..*$/,s),10);
w[1]=parseInt(y.replace(/^.*\.(.*)\s.*$/,s),10);
w[2]=/r/.test(y)?parseInt(y.replace(/^.*r(.*)$/,s),10):0;
}return w.join(t);
}},getExpressInstall:function(){var D=qx.bom.client.Flash.getVersion();

if(D==r){return false;
}var C=qx.bom.client.OperatingSystem.getName();
return (C==d||C==h)&&qx.bom.client.Flash.__kM(a,D);
},getStrictSecurityModel:function(){var E=qx.bom.client.Flash.getVersion();

if(E==r){return false;
}var F=E.split(t);

if(F[0]<10){return qx.bom.client.Flash.__kM(c,E);
}else{return qx.bom.client.Flash.__kM(b,E);
}},_cachedSupportsVersion:{},__kM:function(G,H){var K=G.split(t);
var J=H||qx.bom.client.Flash.getVersion();
J=J.split(t);

for(var i=0;i<K.length;i++){var I=parseInt(J[i],10)-parseInt(K[i],10);

if(I>0){return true;
}else if(I<0){return false;
}}return true;
}}});
})();
(function(){var a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
}}});
})();
(function(){var m="ipod",l="g",k="xbox",j="pc",i="\.",h="(",g=")",f="iPhone",e="|",d="qx.bom.client.Device",a="wii",c="ipad",b="ds";
qx.Bootstrap.define(d,{statics:{__g:{"iPod":m,"iPad":c,"iPhone":f,"PSP":"psp","PLAYSTATION 3":"ps3","Nintendo Wii":a,"Nintendo DS":b,"XBOX":"xbox","Xbox":k},getName:function(){var p=[];

for(var o in this.__g){p.push(o);
}var q=new RegExp(h+p.join(e).replace(/\./g,i)+g,l);
var n=q.exec(navigator.userAgent);

if(n&&n[1]){return qx.bom.client.Device.__g[n[1]];
}return j;
}}});
})();
(function(){var e="qx.bom.client.Event",d="ontouchstart",c="mshtml",b="opera",a="pointerEvents";
qx.Bootstrap.define(e,{statics:{getTouch:function(){return (d in window);
},getPointer:function(){if(a in document.documentElement.style){var f=qx.bom.client.Engine.getName();
return f!=b&&f!=c;
}return false;
}}});
})();
(function(){var bv="html.video.ogg",bu="os.version",bt="phonegap.notification",bs="browser.name",br="event.pointer",bq="plugin.gears",bp="io.ssl",bo="css.boxmodel",bn="html.xul",bm="html.classlist",bb="event.touch",ba="io.maxrequests",Y="css.gradients",X="browser.documentmode",W="ecmascript.objectcount",V="plugin.flash.strictsecurity",U="html.audio.mp3",T="locale",S="css.rgba",R="plugin.divx.version",bC="locale.variant",bD="device.name",bA="html.filereader",bB="html.video.webm",by="os.name",bz="html.storage.local",bw="css.borderradius",bx="plugin.silverlight",bE="html.webworker",bF="plugin.flash",bf="html.audio.aif",be="css.translate3d",bh="html.canvas",bg="html.audio",bj="html.xpath",bi="html.audio.ogg",bl="plugin.pdf.version",bk="css.placeholder",bd="html.dataset",bc="browser.version",a="io.xhr",b="plugin.silverlight.version",c="html.video",d="default",e="plugin.windowsmedia",f="plugin.flash.version",g="html.geolocation",h="html.storage.session",j="html.audio.au",k="plugin.quicktime",bJ="plugin.windowsmedia.version",bI="engine.name",bH="|",bG="html.video.h264",bN="runtime.name",bM="css.boxshadow",bL="html.audio.wav",bK="plugin.flash.express",bP="browser.quirksmode",bO="phonegap",B="qx.allowUrlSettings",C="css.textoverflow",z="plugin.divx",A="os.scrollBarOverlayed",F="plugin.quicktime.version",G="engine.version",D="html.vml",E="plugin.pdf",x="html.dataurl",y="html.svg",s="qx.optimization.strings",r="qx.dynlocale",u="qx.propertyDebugLevel",t=":",o="qx.optimization.comments",n="qx.mobile.emulatetouch",q="qx.core.Environment",p="qx.debug.dispose",m="qx.optimization.variables",l="qxenv",L="qx.optimization.variants",M="&",N="qx.allowUrlVariants",O="qx.debug.databinding",H="qx.optimization.basecalls",I="true",J="qx.optimization.privates",K="qx.aspects",P="qx.debug",Q="qx.dynamicmousewheel",w="false",v="qx.mobile.nativescroll";
qx.Bootstrap.define(q,{statics:{_checks:{},_asyncChecks:{},__j:{},get:function(bQ){if(this.__j[bQ]!=undefined){return this.__j[bQ];
}var bR=this._checks[bQ];

if(bR){var bS=bR();
this.__j[bQ]=bS;
return bS;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bQ+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},getAsync:function(bT,bU,self){var bW=this;

if(this.__j[bT]!=undefined){window.setTimeout(function(){bU.call(self,bW.__j[bT]);
},0);
return;
}var bV=this._asyncChecks[bT];

if(bV){bV(function(bX){bW.__j[bT]=bX;
bU.call(self,bX);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bT+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(bY,ca){return this.__k(this.get(bY),ca);
},selectAsync:function(cb,cc,self){this.getAsync(cb,function(cd){var ce=this.__k(cb,cc);
ce.call(self,cd);
},this);
},__k:function(cf,cg){var ci=cg[cf];

if(cg.hasOwnProperty(cf)){return ci;
}for(var ch in cg){if(ch.indexOf(bH)!=-1){var cj=ch.split(bH);

for(var i=0;i<cj.length;i++){if(cj[i]==cf){return cg[ch];
}}}}
if(cg[d]!==undefined){return cg[d];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+cf+'" ('+(typeof cf)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(cg)+'] found, and no default ("default") given');
}},invalidateCacheKey:function(ck){delete this.__j[ck];
},add:function(cl,cm){if(this._checks[cl]==undefined){if(cm instanceof Function){this._checks[cl]=cm;
}else{this._checks[cl]=this.__n(cm);
}}},addAsync:function(cn,co){if(this._checks[cn]==undefined){this._asyncChecks[cn]=co;
}},getChecks:function(){return this._checks;
},getAsyncChecks:function(){return this._asyncChecks;
},_initDefaultQxValues:function(){this.add(B,function(){return false;
});
this.add(N,function(){return false;
});
this.add(u,function(){return 0;
});
this.add(P,function(){return true;
});
this.add(K,function(){return false;
});
this.add(r,function(){return true;
});
this.add(n,function(){return false;
});
this.add(v,function(){return false;
});
this.add(Q,function(){return true;
});
this.add(O,function(){return false;
});
this.add(p,function(){return false;
});
this.add(H,function(){return false;
});
this.add(o,function(){return false;
});
this.add(J,function(){return false;
});
this.add(s,function(){return false;
});
this.add(m,function(){return false;
});
this.add(L,function(){return false;
});
},__l:function(){if(qx&&qx.$$environment){for(var cq in qx.$$environment){var cp=qx.$$environment[cq];
this._checks[cq]=this.__n(cp);
}}},__m:function(){if(window.document&&window.document.location){var cr=window.document.location.search.slice(1).split(M);

for(var i=0;i<cr.length;i++){var ct=cr[i].split(t);

if(ct.length!=3||ct[0]!=l){continue;
}var cu=ct[1];
var cs=decodeURIComponent(ct[2]);
if(cs==I){cs=true;
}else if(cs==w){cs=false;
}else if(/^(\d|\.)+$/.test(cs)){cs=parseFloat(cs);
}this._checks[cu]=this.__n(cs);
}}},__n:function(cv){return qx.Bootstrap.bind(function(cw){return cw;
},null,cv);
},useCheck:function(cx){return true;
},_initChecksMap:function(){if(this.useCheck(G)){this._checks[G]=qx.bom.client.Engine.getVersion;
}
if(this.useCheck(bI)){this._checks[bI]=qx.bom.client.Engine.getName;
}if(this.useCheck(bs)){this._checks[bs]=qx.bom.client.Browser.getName;
}
if(this.useCheck(bc)){this._checks[bc]=qx.bom.client.Browser.getVersion;
}
if(this.useCheck(X)){this._checks[X]=qx.bom.client.Browser.getDocumentMode;
}
if(this.useCheck(bP)){this._checks[bP]=qx.bom.client.Browser.getQuirksMode;
}if(this.useCheck(bN)){this._checks[bN]=qx.bom.client.Runtime.getName;
}if(this.useCheck(bD)){this._checks[bD]=qx.bom.client.Device.getName;
}if(this.useCheck(T)){this._checks[T]=qx.bom.client.Locale.getLocale;
}
if(this.useCheck(bC)){this._checks[bC]=qx.bom.client.Locale.getVariant;
}if(this.useCheck(by)){this._checks[by]=qx.bom.client.OperatingSystem.getName;
}
if(this.useCheck(bu)){this._checks[bu]=qx.bom.client.OperatingSystem.getVersion;
}
if(this.useCheck(A)){this._checks[A]=qx.bom.client.Scroll.scrollBarOverlayed;
}if(this.useCheck(bq)){this._checks[bq]=qx.bom.client.Plugin.getGears;
}
if(this.useCheck(k)){this._checks[k]=qx.bom.client.Plugin.getQuicktime;
}
if(this.useCheck(F)){this._checks[F]=qx.bom.client.Plugin.getQuicktimeVersion;
}
if(this.useCheck(e)){this._checks[e]=qx.bom.client.Plugin.getWindowsMedia;
}
if(this.useCheck(bJ)){this._checks[bJ]=qx.bom.client.Plugin.getWindowsMediaVersion;
}
if(this.useCheck(z)){this._checks[z]=qx.bom.client.Plugin.getDivX;
}
if(this.useCheck(R)){this._checks[R]=qx.bom.client.Plugin.getDivXVersion;
}
if(this.useCheck(bx)){this._checks[bx]=qx.bom.client.Plugin.getSilverlight;
}
if(this.useCheck(b)){this._checks[b]=qx.bom.client.Plugin.getSilverlightVersion;
}
if(this.useCheck(bF)){this._checks[bF]=qx.bom.client.Flash.isAvailable;
}
if(this.useCheck(f)){this._checks[f]=qx.bom.client.Flash.getVersion;
}
if(this.useCheck(bK)){this._checks[bK]=qx.bom.client.Flash.getExpressInstall;
}
if(this.useCheck(V)){this._checks[V]=qx.bom.client.Flash.getStrictSecurityModel;
}
if(this.useCheck(E)){this._checks[E]=qx.bom.client.Plugin.getPdf;
}
if(this.useCheck(bl)){this._checks[bl]=qx.bom.client.Plugin.getPdfVersion;
}if(this.useCheck(ba)){this._checks[ba]=qx.bom.client.Transport.getMaxConcurrentRequestCount;
}
if(this.useCheck(bp)){this._checks[bp]=qx.bom.client.Transport.getSsl;
}
if(this.useCheck(a)){this._checks[a]=qx.bom.client.Transport.getXmlHttpRequest;
}if(this.useCheck(bb)){this._checks[bb]=qx.bom.client.Event.getTouch;
}
if(this.useCheck(br)){this._checks[br]=qx.bom.client.Event.getPointer;
}if(this.useCheck(W)){this._checks[W]=qx.bom.client.EcmaScript.getObjectCount;
}if(this.useCheck(bE)){this._checks[bE]=qx.bom.client.Html.getWebWorker;
}
if(this.useCheck(bA)){this._checks[bA]=qx.bom.client.Html.getFileReader;
}
if(this.useCheck(g)){this._checks[g]=qx.bom.client.Html.getGeoLocation;
}
if(this.useCheck(bg)){this._checks[bg]=qx.bom.client.Html.getAudio;
}
if(this.useCheck(bi)){this._checks[bi]=qx.bom.client.Html.getAudioOgg;
}
if(this.useCheck(U)){this._checks[U]=qx.bom.client.Html.getAudioMp3;
}
if(this.useCheck(bL)){this._checks[bL]=qx.bom.client.Html.getAudioWav;
}
if(this.useCheck(j)){this._checks[j]=qx.bom.client.Html.getAudioAu;
}
if(this.useCheck(bf)){this._checks[bf]=qx.bom.client.Html.getAudioAif;
}
if(this.useCheck(c)){this._checks[c]=qx.bom.client.Html.getVideo;
}
if(this.useCheck(bv)){this._checks[bv]=qx.bom.client.Html.getVideoOgg;
}
if(this.useCheck(bG)){this._checks[bG]=qx.bom.client.Html.getVideoH264;
}
if(this.useCheck(bB)){this._checks[bB]=qx.bom.client.Html.getVideoWebm;
}
if(this.useCheck(bz)){this._checks[bz]=qx.bom.client.Html.getLocalStorage;
}
if(this.useCheck(h)){this._checks[h]=qx.bom.client.Html.getSessionStorage;
}
if(this.useCheck(bm)){this._checks[bm]=qx.bom.client.Html.getClassList;
}
if(this.useCheck(bj)){this._checks[bj]=qx.bom.client.Html.getXPath;
}
if(this.useCheck(bn)){this._checks[bn]=qx.bom.client.Html.getXul;
}
if(this.useCheck(bh)){this._checks[bh]=qx.bom.client.Html.getCanvas;
}
if(this.useCheck(y)){this._checks[y]=qx.bom.client.Html.getSvg;
}
if(this.useCheck(D)){this._checks[D]=qx.bom.client.Html.getVml;
}
if(this.useCheck(x)){this._asyncChecks[x]=qx.bom.client.Html.getDataUrl;
}
if(this.useCheck(bd)){this._checks[bd]=qx.bom.client.Html.getDataset;
}if(this.useCheck(C)){this._checks[C]=qx.bom.client.Css.getTextOverflow;
}
if(this.useCheck(bk)){this._checks[bk]=qx.bom.client.Css.getPlaceholder;
}
if(this.useCheck(bw)){this._checks[bw]=qx.bom.client.Css.getBorderRadius;
}
if(this.useCheck(bM)){this._checks[bM]=qx.bom.client.Css.getBoxShadow;
}
if(this.useCheck(Y)){this._checks[Y]=qx.bom.client.Css.getGradients;
}
if(this.useCheck(bo)){this._checks[bo]=qx.bom.client.Css.getBoxModel;
}
if(this.useCheck(be)){this._checks[be]=qx.bom.client.Css.getTranslate3d;
}
if(this.useCheck(S)){this._checks[S]=qx.bom.client.Css.getRgba;
}if(this.useCheck(bO)){this._checks[bO]=qx.bom.client.PhoneGap.getPhoneGap;
}
if(this.useCheck(bt)){this._checks[bt]=qx.bom.client.PhoneGap.getNotification;
}}},defer:function(cy){cy._initDefaultQxValues();
cy._initChecksMap();
cy.__l();
if(cy.get(B)===true){cy.__m();
}}});
})();
(function(){var t="object",s="qx.debug",r="function",q="Array",p="Mixin",o="qx.Mixin",n=".prototype",m="constructor",k="[Mixin ",j="]",d="RegExp",h="members",g="destruct",c="properties",b="Date",f="events",e="statics";
qx.Bootstrap.define(o,{statics:{define:function(name,u){if(u){if(u.include&&!(qx.Bootstrap.getClass(u.include)===q)){u.include=[u.include];
}if(qx.core.Environment.get(s)){this.__p(name,u);
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
},isCompatible:function(F,G){var H=qx.Bootstrap.getMixins(G);
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
},$$registry:{},__o:qx.core.Environment.select(s,{"true":{"include":t,"statics":t,"members":t,"properties":t,"events":t,"destruct":r,"construct":r},"default":null}),__p:qx.core.Environment.select(s,{"true":function(name,K){var N=this.__o;

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
qx.Bootstrap.define(d,{statics:{__v:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__v;
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
},addAdvice:function(o,p,q,name){this.__v.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var w="qx.debug",v="object",u="Array",t="Interface",s="string",r="number",q="function",p="Boolean",o="qx.Interface",n="events",e="[Interface ",m="]",h="members",d="properties",c="Date",g="RegExp",f="toggle",j="boolean",b="is",k="statics";
qx.Bootstrap.define(o,{statics:{define:function(name,x){if(x){if(x.extend&&!(qx.Bootstrap.getClass(x.extend)===u)){x.extend=[x.extend];
}if(qx.core.Environment.get(w)){this.__p(name,x);
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
},__q:function(B,C,D,E){var I=D.$$members;

if(I){for(var H in I){if(qx.Bootstrap.isFunction(I[H])){var G=this.__r(C,H);
var F=G||qx.Bootstrap.isFunction(B[H]);

if(!F){throw new Error('Implementation of method "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}var J=E===true&&!G&&!qx.Bootstrap.hasInterface(C,D);

if(J){B[H]=this.__u(D,B[H],H,I[H]);
}}else{if(typeof B[H]===undefined){if(typeof B[H]!==q){throw new Error('Implementation of member "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}}}}}},__r:function(K,L){var P=L.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!P){return false;
}var M=qx.Bootstrap.firstLow(P[2]);
var N=qx.Bootstrap.getPropertyDefinition(K,M);

if(!N){return false;
}var O=P[0]==b||P[0]==f;

if(O){return qx.Bootstrap.getPropertyDefinition(K,M).check==p;
}return true;
},__s:function(Q,R){if(R.$$properties){for(var S in R.$$properties){if(!qx.Bootstrap.getPropertyDefinition(Q,S)){throw new Error('The property "'+S+'" is not supported by Class "'+Q.classname+'"!');
}}}},__t:function(T,U){if(U.$$events){for(var V in U.$$events){if(!qx.Bootstrap.supportsEvent(T,V)){throw new Error('The event "'+V+'" is not supported by Class "'+T.classname+'"!');
}}}},assertObject:function(W,X){var ba=W.constructor;
this.__q(W,ba,X,false);
this.__s(ba,X);
this.__t(ba,X);
var Y=X.$$extends;

if(Y){for(var i=0,l=Y.length;i<l;i++){this.assertObject(W,Y[i]);
}}},assert:function(bb,bc,bd){this.__q(bb.prototype,bb,bc,bd);
this.__s(bb,bc);
this.__t(bb,bc);
var be=bc.$$extends;

if(be){for(var i=0,l=be.length;i<l;i++){this.assert(bb,be[i],bd);
}}},genericToString:function(){return e+this.name+m;
},$$registry:{},__u:qx.core.Environment.select(w,{"true":function(bf,bg,bh,bi){function bj(){bi.apply(this,arguments);
return bg.apply(this,arguments);
}bg.wrapper=bj;
return bj;
},"default":function(){}}),__o:qx.core.Environment.select(w,{"true":{"extend":v,"statics":v,"members":v,"properties":v,"events":v},"default":null}),__p:qx.core.Environment.select(w,{"true":function(name,bk){if(qx.core.Environment.get(w)){var bn=this.__o;

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
(function(){var m=';',k='return this.',j="boolean",h="string",g='!==undefined)',f='else if(this.',e='if(this.',d='else ',c=' of an instance of ',b=' is not (yet) ready!");',bj="init",bi='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bh='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bg=" of class ",bf='qx.core.Assert.assertInstance(value, Date, msg) || true',be='value !== null && value.nodeType !== undefined',bd='var inherit=prop.$$inherit;',bc='value !== null && value.nodeType === 9 && value.documentElement',bb='return init;',ba='value !== null && value.$$type === "Mixin"',t='qx.core.Assert.assertMap(value, msg) || true',u='var init=this.',r='return value;',s='qx.core.Assert.assertNumber(value, msg) || true',p='qx.core.Assert.assertPositiveInteger(value, msg) || true',q="': ",n="Error in property ",o="qx.debug",x='if(init==qx.core.Property.$$inherit)init=null;',y='qx.core.Assert.assertInteger(value, msg) || true',G="rv:1.8.1",E='value !== null && value.$$type === "Interface"',O="set",J='value !== null && value.$$type === "Theme"',V='qx.core.Assert.assertInstance(value, RegExp, msg) || true',T='value !== null && value.type !== undefined',A='value !== null && value.document',Y=" in method ",X='qx.core.Assert.assertInstance(value, Error, msg) || true',W='throw new Error("Property ',z='qx.core.Assert.assertBoolean(value, msg) || true',C='return null;',D='qx.core.Assert.assertObject(value, msg) || true',F="setRuntime",H='value !== null && value.nodeType === 1 && value.attributes',K=" with incoming value '",Q="setThemed",U='qx.core.Assert.assertString(value, msg) || true',v="inherit",w='value !== null && value.$$type === "Class"',B='qx.core.Assert.assertFunction(value, msg) || true',N='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',M='qx.core.Assert.assertArray(value, msg) || true',L='qx.core.Assert.assertPositiveNumber(value, msg) || true',S="object",R="MSIE 6.0",I='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',P="qx.core.Property";
qx.Bootstrap.define(P,{statics:{__w:{"Boolean":z,"String":U,"Number":s,"Integer":y,"PositiveNumber":L,"PositiveInteger":p,"Error":X,"RegExp":V,"Object":D,"Array":M,"Map":t,"Function":B,"Date":bf,"Node":be,"Element":H,"Document":bc,"Window":A,"Event":T,"Class":w,"Mixin":ba,"Interface":E,"Theme":J,"Color":bi,"Decorator":N,"Font":bh},__x:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:v,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:h,dereference:j,inheritable:j,nullable:j,themeable:j,refine:j,init:null,apply:h,event:h,check:null,transform:h,deferredInit:j,validate:null},$$allowedGroupKeys:{name:h,group:S,mode:h,themeable:j},$$inheritable:{},__y:function(bk){var bl=this.__z(bk);

if(!bl.length){var bm=function(){};
}else{bm=this.__A(bl);
}bk.prototype.$$refreshInheritables=bm;
},__z:function(bn){var bp=[];

while(bn){var bo=bn.$$properties;

if(bo){for(var name in this.$$inheritable){if(bo[name]&&bo[name].inheritable){bp.push(name);
}}}bn=bn.superclass;
}return bp;
},__A:function(bq){var bu=this.$$store.inherit;
var bt=this.$$store.init;
var bs=this.$$method.refresh;
var br=["var parent = this.getLayoutParent();","if (!parent) return;"];

for(var i=0,l=bq.length;i<l;i++){var name=bq[i];
br.push("var value = parent.",bu[name],";","if (value===undefined) value = parent.",bt[name],";","this.",bs[name],"(value);");
}return new Function(br.join(""));
},attachRefreshInheritables:function(bv){bv.prototype.$$refreshInheritables=function(){qx.core.Property.__y(bv);
return this.$$refreshInheritables();
};
},attachMethods:function(bw,name,bx){bx.group?this.__B(bw,bx,name):this.__C(bw,bx,name);
},__B:function(by,bz,name){var bG=qx.Bootstrap.firstUp(name);
var bF=by.prototype;
var bH=bz.themeable===true;

if(qx.core.Environment.get("qx.debug")){if(qx.core.Environment.get("qx.propertyDebugLevel")>1){qx.Bootstrap.debug("Generating property group: "+name);
}}var bI=[];
var bC=[];

if(bH){var bA=[];
var bE=[];
}var bD="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
bI.push(bD);

if(bH){bA.push(bD);
}
if(bz.mode=="shorthand"){var bB="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
bI.push(bB);

if(bH){bA.push(bB);
}}
for(var i=0,a=bz.group,l=a.length;i<l;i++){if(qx.core.Environment.get("qx.debug")){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}bI.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
bC.push("this.",this.$$method.reset[a[i]],"();");

if(bH){if(qx.core.Environment.get("qx.debug")){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}bA.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
bE.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+bG;
bF[this.$$method.set[name]]=new Function(bI.join(""));
this.$$method.reset[name]="reset"+bG;
bF[this.$$method.reset[name]]=new Function(bC.join(""));

if(bH){this.$$method.setThemed[name]="setThemed"+bG;
bF[this.$$method.setThemed[name]]=new Function(bA.join(""));
this.$$method.resetThemed[name]="resetThemed"+bG;
bF[this.$$method.resetThemed[name]]=new Function(bE.join(""));
}},__C:function(bJ,bK,name){var bM=qx.Bootstrap.firstUp(name);
var bO=bJ.prototype;

if(qx.core.Environment.get("qx.debug")){if(qx.core.Environment.get("qx.propertyDebugLevel")>1){qx.Bootstrap.debug("Generating property wrappers: "+name);
}}if(bK.dereference===undefined&&typeof bK.check==="string"){bK.dereference=this.__D(bK.check);
}var bN=this.$$method;
var bL=this.$$store;
bL.runtime[name]="$$runtime_"+name;
bL.user[name]="$$user_"+name;
bL.theme[name]="$$theme_"+name;
bL.init[name]="$$init_"+name;
bL.inherit[name]="$$inherit_"+name;
bL.useinit[name]="$$useinit_"+name;
bN.get[name]="get"+bM;
bO[bN.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,bJ,name,"get");
};
bN.set[name]="set"+bM;
bO[bN.set[name]]=function(bP){return qx.core.Property.executeOptimizedSetter(this,bJ,name,"set",arguments);
};
bN.reset[name]="reset"+bM;
bO[bN.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bJ,name,"reset");
};

if(bK.inheritable||bK.apply||bK.event||bK.deferredInit){bN.init[name]="init"+bM;
bO[bN.init[name]]=function(bQ){return qx.core.Property.executeOptimizedSetter(this,bJ,name,"init",arguments);
};
}
if(bK.inheritable){bN.refresh[name]="refresh"+bM;
bO[bN.refresh[name]]=function(bR){return qx.core.Property.executeOptimizedSetter(this,bJ,name,"refresh",arguments);
};
}bN.setRuntime[name]="setRuntime"+bM;
bO[bN.setRuntime[name]]=function(bS){return qx.core.Property.executeOptimizedSetter(this,bJ,name,"setRuntime",arguments);
};
bN.resetRuntime[name]="resetRuntime"+bM;
bO[bN.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bJ,name,"resetRuntime");
};

if(bK.themeable){bN.setThemed[name]="setThemed"+bM;
bO[bN.setThemed[name]]=function(bT){return qx.core.Property.executeOptimizedSetter(this,bJ,name,"setThemed",arguments);
};
bN.resetThemed[name]="resetThemed"+bM;
bO[bN.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bJ,name,"resetThemed");
};
}
if(bK.check==="Boolean"){bO["toggle"+bM]=new Function("return this."+bN.set[name]+"(!this."+bN.get[name]+"())");
bO["is"+bM]=new Function("return this."+bN.get[name]+"()");
}},__D:function(bU){return !!this.__x[bU];
},__E:function(bV){return this.__x[bV]||qx.Bootstrap.classIsDefined(bV)||(qx.Interface&&qx.Interface.isDefined(bV));
},__F:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(bW,bX,bY,ca,cb){var cc=bW.constructor.classname;
var cd=n+bY+bg+cc+Y+this.$$method[ca][bY]+K+cb+q;
throw new Error(cd+(this.__F[bX]||"Unknown reason: "+bX));
},__G:function(ce,cf,name,cg,ch,ci){var cj=this.$$method[cg][name];
if(qx.core.Environment.get("qx.debug")){if(qx.core.Environment.get("qx.propertyDebugLevel")>1){qx.Bootstrap.debug("Code["+this.$$method[cg][name]+"]: "+ch.join(""));
}try{cf[cj]=new Function("value",ch.join(""));
}catch(ck){throw new Error("Malformed generated code to unwrap method: "+this.$$method[cg][name]+"\n"+ch.join(""));
}}else{cf[cj]=new Function("value",ch.join(""));
}if(qx.core.Environment.get("qx.aspects")){cf[cj]=qx.core.Aspect.wrap(ce.classname+"."+cj,cf[cj],"property");
}qx.Bootstrap.setDisplayName(cf[cj],ce.classname+".prototype",cj);
if(ci===undefined){return ce[cj]();
}else if(qx.core.Environment.get("qx.debug")){return ce[cj].apply(ce,ci);
}else{return ce[cj](ci[0]);
}},executeOptimizedGetter:function(cl,cm,name,cn){var cp=cm.$$properties[name];
var cr=cm.prototype;
var co=[];
var cq=this.$$store;
co.push(e,cq.runtime[name],g);
co.push(k,cq.runtime[name],m);

if(cp.inheritable){co.push(f,cq.inherit[name],g);
co.push(k,cq.inherit[name],m);
co.push(d);
}co.push(e,cq.user[name],g);
co.push(k,cq.user[name],m);

if(cp.themeable){co.push(f,cq.theme[name],g);
co.push(k,cq.theme[name],m);
}
if(cp.deferredInit&&cp.init===undefined){co.push(f,cq.init[name],g);
co.push(k,cq.init[name],m);
}co.push(d);

if(cp.init!==undefined){if(cp.inheritable){co.push(u,cq.init[name],m);

if(cp.nullable){co.push(x);
}else if(cp.init!==undefined){co.push(k,cq.init[name],m);
}else{co.push(I,name,c,cm.classname,b);
}co.push(bb);
}else{co.push(k,cq.init[name],m);
}}else if(cp.inheritable||cp.nullable){co.push(C);
}else{co.push(W,name,c,cm.classname,b);
}return this.__G(cl,cr,name,cn,co);
},executeOptimizedSetter:function(cs,ct,name,cu,cv){var cA=ct.$$properties[name];
var cz=ct.prototype;
var cx=[];
var cw=cu===O||cu===Q||cu===F||(cu===bj&&cA.init===undefined);
var cy=cA.apply||cA.event||cA.inheritable;
var cB=this.__H(cu,name);
this.__I(cx,cA,name,cu,cw);

if(cw){this.__J(cx,ct,cA,name);
}
if(cy){this.__K(cx,cw,cB,cu);
}
if(cA.inheritable){cx.push(bd);
}
if(qx.core.Environment.get(o)){if(cw){this.__L(cx,cA,ct,name,cu);
}}
if(!cy){this.__M(cx,name,cu,cw);
}else{this.__N(cx,cA,name,cu,cw);
}
if(cA.inheritable){this.__O(cx,cA,name,cu);
}else if(cy){this.__P(cx,cA,name,cu);
}
if(cy){this.__Q(cx,cA,name);
if(cA.inheritable&&cz._getChildren){this.__R(cx,name);
}}if(cw){cx.push(r);
}return this.__G(cs,cz,name,cu,cx,cv);
},__H:function(cC,name){if(cC==="setRuntime"||cC==="resetRuntime"){var cD=this.$$store.runtime[name];
}else if(cC==="setThemed"||cC==="resetThemed"){cD=this.$$store.theme[name];
}else if(cC==="init"){cD=this.$$store.init[name];
}else{cD=this.$$store.user[name];
}return cD;
},__I:function(cE,cF,name,cG,cH){if(qx.core.Environment.get("qx.debug")){cE.push('var prop=qx.core.Property;');

if(cG==="init"){cE.push('if(this.$$initialized)prop.error(this,0,"',name,'","',cG,'",value);');
}
if(cG==="refresh"){}else if(cH){cE.push('if(arguments.length!==1)prop.error(this,1,"',name,'","',cG,'",value);');
cE.push('if(value===undefined)prop.error(this,2,"',name,'","',cG,'",value);');
}else{cE.push('if(arguments.length!==0)prop.error(this,3,"',name,'","',cG,'",value);');
}}else{if(!cF.nullable||cF.check||cF.inheritable){cE.push('var prop=qx.core.Property;');
}if(cG==="set"){cE.push('if(value===undefined)prop.error(this,2,"',name,'","',cG,'",value);');
}}},__J:function(cI,cJ,cK,name){if(cK.transform){cI.push('value=this.',cK.transform,'(value);');
}if(cK.validate){if(typeof cK.validate==="string"){cI.push('this.',cK.validate,'(value);');
}else if(cK.validate instanceof Function){cI.push(cJ.classname,'.$$properties.',name);
cI.push('.validate.call(this, value);');
}}},__K:function(cL,cM,cN,cO){var cP=(cO==="reset"||cO==="resetThemed"||cO==="resetRuntime");

if(cM){cL.push('if(this.',cN,'===value)return value;');
}else if(cP){cL.push('if(this.',cN,'===undefined)return;');
}},__L:qx.core.Environment.select("qx.debug",{"true":function(cQ,cR,cS,name,cT){if(!cR.nullable){cQ.push('if(value===null)prop.error(this,4,"',name,'","',cT,'",value);');
}if(cR.check!==undefined){cQ.push('var msg = "Invalid incoming value for property \''+name+'\' of class \''+cS.classname+'\'";');
if(cR.nullable){cQ.push('if(value!==null)');
}if(cR.inheritable){cQ.push('if(value!==inherit)');
}cQ.push('if(');

if(this.__w[cR.check]!==undefined){cQ.push('!(',this.__w[cR.check],')');
}else if(qx.Class.isDefined(cR.check)){cQ.push('qx.core.Assert.assertInstance(value, qx.Class.getByName("',cR.check,'"), msg)');
}else if(qx.Interface&&qx.Interface.isDefined(cR.check)){cQ.push('qx.core.Assert.assertInterface(value, qx.Interface.getByName("',cR.check,'"), msg)');
}else if(typeof cR.check==="function"){cQ.push('!',cS.classname,'.$$properties.',name);
cQ.push('.check.call(this, value)');
}else if(typeof cR.check==="string"){cQ.push('!(',cR.check,')');
}else if(cR.check instanceof Array){cQ.push('qx.core.Assert.assertInArray(value, ',cS.classname,'.$$properties.',name,'.check, msg)');
}else{throw new Error("Could not add check to property "+name+" of class "+cS.classname);
}cQ.push(')prop.error(this,5,"',name,'","',cT,'",value);');
}},"false":undefined}),__M:function(cU,name,cV,cW){if(cV==="setRuntime"){cU.push('this.',this.$$store.runtime[name],'=value;');
}else if(cV==="resetRuntime"){cU.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cU.push('delete this.',this.$$store.runtime[name],';');
}else if(cV==="set"){cU.push('this.',this.$$store.user[name],'=value;');
}else if(cV==="reset"){cU.push('if(this.',this.$$store.user[name],'!==undefined)');
cU.push('delete this.',this.$$store.user[name],';');
}else if(cV==="setThemed"){cU.push('this.',this.$$store.theme[name],'=value;');
}else if(cV==="resetThemed"){cU.push('if(this.',this.$$store.theme[name],'!==undefined)');
cU.push('delete this.',this.$$store.theme[name],';');
}else if(cV==="init"&&cW){cU.push('this.',this.$$store.init[name],'=value;');
}},__N:function(cX,cY,name,da,db){if(cY.inheritable){cX.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{cX.push('var computed, old;');
}cX.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(da==="setRuntime"){cX.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(da==="resetRuntime"){cX.push('delete this.',this.$$store.runtime[name],';');
cX.push('if(this.',this.$$store.user[name],'!==undefined)');
cX.push('computed=this.',this.$$store.user[name],';');
cX.push('else if(this.',this.$$store.theme[name],'!==undefined)');
cX.push('computed=this.',this.$$store.theme[name],';');
cX.push('else if(this.',this.$$store.init[name],'!==undefined){');
cX.push('computed=this.',this.$$store.init[name],';');
cX.push('this.',this.$$store.useinit[name],'=true;');
cX.push('}');
}else{cX.push('old=computed=this.',this.$$store.runtime[name],';');
if(da==="set"){cX.push('this.',this.$$store.user[name],'=value;');
}else if(da==="reset"){cX.push('delete this.',this.$$store.user[name],';');
}else if(da==="setThemed"){cX.push('this.',this.$$store.theme[name],'=value;');
}else if(da==="resetThemed"){cX.push('delete this.',this.$$store.theme[name],';');
}else if(da==="init"&&db){cX.push('this.',this.$$store.init[name],'=value;');
}}cX.push('}');
cX.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(da==="set"){if(!cY.inheritable){cX.push('old=this.',this.$$store.user[name],';');
}cX.push('computed=this.',this.$$store.user[name],'=value;');
}else if(da==="reset"){if(!cY.inheritable){cX.push('old=this.',this.$$store.user[name],';');
}cX.push('delete this.',this.$$store.user[name],';');
cX.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cX.push('computed=this.',this.$$store.runtime[name],';');
cX.push('if(this.',this.$$store.theme[name],'!==undefined)');
cX.push('computed=this.',this.$$store.theme[name],';');
cX.push('else if(this.',this.$$store.init[name],'!==undefined){');
cX.push('computed=this.',this.$$store.init[name],';');
cX.push('this.',this.$$store.useinit[name],'=true;');
cX.push('}');
}else{if(da==="setRuntime"){cX.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cY.inheritable){cX.push('computed=this.',this.$$store.user[name],';');
}else{cX.push('old=computed=this.',this.$$store.user[name],';');
}if(da==="setThemed"){cX.push('this.',this.$$store.theme[name],'=value;');
}else if(da==="resetThemed"){cX.push('delete this.',this.$$store.theme[name],';');
}else if(da==="init"&&db){cX.push('this.',this.$$store.init[name],'=value;');
}}cX.push('}');
if(cY.themeable){cX.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!cY.inheritable){cX.push('old=this.',this.$$store.theme[name],';');
}
if(da==="setRuntime"){cX.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(da==="set"){cX.push('computed=this.',this.$$store.user[name],'=value;');
}else if(da==="setThemed"){cX.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(da==="resetThemed"){cX.push('delete this.',this.$$store.theme[name],';');
cX.push('if(this.',this.$$store.init[name],'!==undefined){');
cX.push('computed=this.',this.$$store.init[name],';');
cX.push('this.',this.$$store.useinit[name],'=true;');
cX.push('}');
}else if(da==="init"){if(db){cX.push('this.',this.$$store.init[name],'=value;');
}cX.push('computed=this.',this.$$store.theme[name],';');
}else if(da==="refresh"){cX.push('computed=this.',this.$$store.theme[name],';');
}cX.push('}');
}cX.push('else if(this.',this.$$store.useinit[name],'){');

if(!cY.inheritable){cX.push('old=this.',this.$$store.init[name],';');
}
if(da==="init"){if(db){cX.push('computed=this.',this.$$store.init[name],'=value;');
}else{cX.push('computed=this.',this.$$store.init[name],';');
}}else if(da==="set"||da==="setRuntime"||da==="setThemed"||da==="refresh"){cX.push('delete this.',this.$$store.useinit[name],';');

if(da==="setRuntime"){cX.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(da==="set"){cX.push('computed=this.',this.$$store.user[name],'=value;');
}else if(da==="setThemed"){cX.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(da==="refresh"){cX.push('computed=this.',this.$$store.init[name],';');
}}cX.push('}');
if(da==="set"||da==="setRuntime"||da==="setThemed"||da==="init"){cX.push('else{');

if(da==="setRuntime"){cX.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(da==="set"){cX.push('computed=this.',this.$$store.user[name],'=value;');
}else if(da==="setThemed"){cX.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(da==="init"){if(db){cX.push('computed=this.',this.$$store.init[name],'=value;');
}else{cX.push('computed=this.',this.$$store.init[name],';');
}cX.push('this.',this.$$store.useinit[name],'=true;');
}cX.push('}');
}},__O:function(dc,dd,name,de){dc.push('if(computed===undefined||computed===inherit){');

if(de==="refresh"){dc.push('computed=value;');
}else{dc.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}dc.push('if((computed===undefined||computed===inherit)&&');
dc.push('this.',this.$$store.init[name],'!==undefined&&');
dc.push('this.',this.$$store.init[name],'!==inherit){');
dc.push('computed=this.',this.$$store.init[name],';');
dc.push('this.',this.$$store.useinit[name],'=true;');
dc.push('}else{');
dc.push('delete this.',this.$$store.useinit[name],';}');
dc.push('}');
dc.push('if(old===computed)return value;');
dc.push('if(computed===inherit){');
dc.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
dc.push('}');
dc.push('else if(computed===undefined)');
dc.push('delete this.',this.$$store.inherit[name],';');
dc.push('else this.',this.$$store.inherit[name],'=computed;');
dc.push('var backup=computed;');
if(dd.init!==undefined&&de!=="init"){dc.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dc.push('if(old===undefined)old=null;');
}dc.push('if(computed===undefined||computed==inherit)computed=null;');
},__P:function(df,dg,name,dh){if(dh!=="set"&&dh!=="setRuntime"&&dh!=="setThemed"){df.push('if(computed===undefined)computed=null;');
}df.push('if(old===computed)return value;');
if(dg.init!==undefined&&dh!=="init"){df.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{df.push('if(old===undefined)old=null;');
}},__Q:function(di,dj,name){if(dj.apply){di.push('this.',dj.apply,'(computed, old, "',name,'");');
}if(dj.event){di.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",dj.event,"')){","reg.fireEvent(this, '",dj.event,"', qx.event.type.Data, [computed, old]",")}");
}},__R:function(dk,name){dk.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
dk.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
dk.push('}');
}},defer:function(dl){var dn=navigator.userAgent.indexOf(R)!=-1;
var dm=navigator.userAgent.indexOf(G)!=-1;
if(dn||dm){dl.__D=dl.__E;
}}});
})();
(function(){var m="qx.debug",k=".",j="object",h="static",g="function",f="Array",e="abstract",d="singleton",c="qx.aspects",b="constructor",B="environment",A="extend",z="string",y="members",x="variants",w="properties",v="statics",u="events",t="]",s="Interface",q="qx.Class",r="Mixin",o="settings",p='Assumed static class because no "extend" key was found. ',n="[Class ";
qx.Bootstrap.define(q,{statics:{define:function(name,C){if(!C){var C={};
}if(C.include&&!(qx.Bootstrap.getClass(C.include)===f)){C.include=[C.include];
}if(C.implement&&!(qx.Bootstrap.getClass(C.implement)===f)){C.implement=[C.implement];
}var D=false;

if(!C.hasOwnProperty(A)&&!C.type){C.type=h;
D=true;
}if(qx.core.Environment.get(m)){try{this.__p(name,C);
}catch(G){if(D){G.message=p+G.message;
}throw G;
}}var E=this.__U(name,C.type,C.extend,C.statics,C.construct,C.destruct,C.include);
if(C.extend){if(C.properties){this.__W(E,C.properties,true);
}if(C.members){this.__Y(E,C.members,true,true,false);
}if(C.events){this.__V(E,C.events,true);
}if(C.include){for(var i=0,l=C.include.length;i<l;i++){this.__bd(E,C.include[i],false);
}}}if(C.environment){for(var F in C.environment){qx.core.Environment.add(F,C.environment[F]);
}}if(C.implement){for(var i=0,l=C.implement.length;i<l;i++){this.__bb(E,C.implement[i]);
}}
if(qx.core.Environment.get(m)){this.__T(E);
}if(C.defer){C.defer.self=E;
C.defer(E,E.prototype,{add:function(name,H){var I={};
I[name]=H;
qx.Class.__W(E,I,true);
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
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(M,N){if(qx.core.Environment.get(m)){if(!N){throw new Error("The mixin to include into class '"+M.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(N,M);
}qx.Class.__bd(M,N,false);
},patch:function(O,P){if(qx.core.Environment.get(m)){if(!P){throw new Error("The mixin to patch class '"+O.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(P,O);
}qx.Class.__bd(O,P,true);
},isSubClassOf:function(Q,R){if(!Q){return false;
}
if(Q==R){return true;
}
if(Q.prototype instanceof R){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(S){var T=[];

while(S){if(S.$$properties){T.push.apply(T,qx.Bootstrap.getKeys(S.$$properties));
}S=S.superclass;
}return T;
},getByProperty:function(U,name){while(U){if(U.$$properties&&U.$$properties[name]){return U;
}U=U.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(V,W){return V.$$includes&&V.$$includes.indexOf(W)!==-1;
},getByMixin:function(X,Y){var ba,i,l;

while(X){if(X.$$includes){ba=X.$$flatIncludes;

for(i=0,l=ba.length;i<l;i++){if(ba[i]===Y){return X;
}}}X=X.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bb,bc){return !!this.getByMixin(bb,bc);
},hasOwnInterface:function(bd,be){return bd.$$implements&&bd.$$implements.indexOf(be)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bf){var bg=[];

while(bf){if(bf.$$implements){bg.push.apply(bg,bf.$$flatImplements);
}bf=bf.superclass;
}return bg;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bh,bi){var bj=bh.constructor;

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
},$$registry:qx.Bootstrap.$$registry,__o:qx.core.Environment.select(m,{"true":{"type":z,"extend":g,"implement":j,"include":j,"construct":g,"statics":j,"properties":j,"members":j,"environment":j,"events":j,"defer":g,"destruct":g},"default":null}),__S:qx.core.Environment.select("qx.debug",{"true":{"type":"string","statics":"object","environment":"object","defer":"function"},"default":null}),__p:qx.core.Environment.select(m,{"true":function(name,bm){if(bm.type&&!(bm.type===h||bm.type===e||bm.type===d)){throw new Error('Invalid type "'+bm.type+'" definition for class "'+name+'"!');
}if(bm.type&&bm.type!==h&&!bm.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var bp=bm.type===h?this.__S:this.__o;

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
}}}},"default":function(){}}),__T:qx.core.Environment.select("qx.debug",{"true":function(br){var bt=br.superclass;

while(bt){if(bt.$$classtype!=="abstract"){break;
}var bs=bt.$$implements;

if(bs){for(var i=0;i<bs.length;i++){qx.Interface.assert(br,bs[i],true);
}}bt=bt.superclass;
}},"default":function(){}}),__U:function(name,bu,bv,bw,bx,by,bz){var bC;

if(!bv&&qx.core.Environment.get("qx.aspects")==false){bC=bw||{};
qx.Bootstrap.setDisplayNames(bC,name);
}else{var bC={};

if(bv){if(!bx){bx=this.__be();
}
if(this.__bg(bv,bz)){bC=this.__bh(bx,name,bu);
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
},__V:function(bE,bF,bG){if(qx.core.Environment.get("qx.debug")){if(typeof bF!=="object"||qx.Bootstrap.getClass(bF)==="Array"){throw new Error(bE.classname+": the events must be defined as map!");
}
for(var bH in bF){if(typeof bF[bH]!=="string"){throw new Error(bE.classname+"/"+bH+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(bE.$$events&&bG!==true){for(var bH in bF){if(bE.$$events[bH]!==undefined&&bE.$$events[bH]!==bF[bH]){throw new Error(bE.classname+"/"+bH+": the event value/type cannot be changed from "+bE.$$events[bH]+" to "+bF[bH]);
}}}}
if(bE.$$events){for(var bH in bF){bE.$$events[bH]=bF[bH];
}}else{bE.$$events=bF;
}},__W:function(bI,bJ,bK){var bL;

if(bK===undefined){bK=false;
}var bM=bI.prototype;

for(var name in bJ){bL=bJ[name];
if(qx.core.Environment.get("qx.debug")){this.__X(bI,name,bL,bK);
}bL.name=name;
if(!bL.refine){if(bI.$$properties===undefined){bI.$$properties={};
}bI.$$properties[name]=bL;
}if(bL.init!==undefined){bI.prototype["$$init_"+name]=bL.init;
}if(bL.event!==undefined){var event={};
event[bL.event]="qx.event.type.Data";
this.__V(bI,event,bK);
}if(bL.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bM.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bI);
}}
if(!bL.refine){qx.core.Property.attachMethods(bI,name,bL);
}}},__X:qx.core.Environment.select("qx.debug",{"true":function(bN,name,bO,bP){var bR=this.hasProperty(bN,name);

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
}}}var bT=bO.group?qx.core.Property.$$allowedGroupKeys:qx.core.Property.$$allowedKeys;

for(var bS in bO){if(bT[bS]===undefined){throw new Error('The configuration key "'+bS+'" of property "'+name+'" in class "'+bN.classname+'" is not allowed!');
}
if(bO[bS]===undefined){throw new Error('Invalid key "'+bS+'" of property "'+name+'" in class "'+bN.classname+'"! The value is undefined: '+bO[bS]);
}
if(bT[bS]!==null&&typeof bO[bS]!==bT[bS]){throw new Error('Invalid type of key "'+bS+'" of property "'+name+'" in class "'+bN.classname+'"! The type of the key must be "'+bT[bS]+'"!');
}}
if(bO.transform!=null){if(!(typeof bO.transform=="string")){throw new Error('Invalid transform definition of property "'+name+'" in class "'+bN.classname+'"! Needs to be a String.');
}}
if(bO.check!=null){if(!qx.Bootstrap.isString(bO.check)&&!qx.Bootstrap.isArray(bO.check)&&!qx.Bootstrap.isFunction(bO.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+bN.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__Y:function(bU,bV,bW,bX,bY){var ca=bU.prototype;
var cc,cb;
qx.Bootstrap.setDisplayNames(bV,bU.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bV),l=a.length;i<l;i++){cc=a[i];
cb=bV[cc];

if(qx.core.Environment.get("qx.debug")){if(ca[cc]!==undefined&&cc.charAt(0)=="_"&&cc.charAt(1)=="_"){throw new Error('Overwriting private member "'+cc+'" of Class "'+bU.classname+'" is not allowed!');
}
if(bW!==true&&ca.hasOwnProperty(cc)){throw new Error('Overwriting member "'+cc+'" of Class "'+bU.classname+'" is not allowed!');
}}if(bX!==false&&cb instanceof Function&&cb.$$type==null){if(bY==true){cb=this.__ba(cb,ca[cc]);
}else{if(ca[cc]){cb.base=ca[cc];
}cb.self=bU;
}
if(qx.core.Environment.get("qx.aspects")){cb=qx.core.Aspect.wrap(bU.classname+"."+cc,cb,"member");
}}ca[cc]=cb;
}},__ba:function(cd,ce){if(ce){return function(){var cg=cd.base;
cd.base=ce;
var cf=cd.apply(this,arguments);
cd.base=cg;
return cf;
};
}else{return cd;
}},__bb:function(ch,ci){if(qx.core.Environment.get(m)){if(!ch||!ci){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(ch,ci)){throw new Error('Interface "'+ci.name+'" is already used by Class "'+ch.classname+'!');
}if(ch.$$classtype!==e){qx.Interface.assert(ch,ci,true);
}}var cj=qx.Interface.flatten([ci]);

if(ch.$$implements){ch.$$implements.push(ci);
ch.$$flatImplements.push.apply(ch.$$flatImplements,cj);
}else{ch.$$implements=[ci];
ch.$$flatImplements=cj;
}},__bc:function(ck){var name=ck.classname;
var cl=this.__bh(ck,name,ck.$$classtype);
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
},__bd:function(cq,cr,cs){if(qx.core.Environment.get(m)){if(!cq||!cr){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(cq,cr)){return;
}var cv=cq.$$original;

if(cr.$$constructor&&!cv){cq=this.__bc(cq);
}var cu=qx.Mixin.flatten([cr]);
var ct;

for(var i=0,l=cu.length;i<l;i++){ct=cu[i];
if(ct.$$events){this.__V(cq,ct.$$events,cs);
}if(ct.$$properties){this.__W(cq,ct.$$properties,cs);
}if(ct.$$members){this.__Y(cq,ct.$$members,cs,cs,cs);
}}if(cq.$$includes){cq.$$includes.push(cr);
cq.$$flatIncludes.push.apply(cq.$$flatIncludes,cu);
}else{cq.$$includes=[cr];
cq.$$flatIncludes=cu;
}},__be:function(){function cw(){cw.base.apply(this,arguments);
}return cw;
},__bf:function(){return function(){};
},__bg:function(cx,cy){if(qx.core.Environment.get(m)){return true;
}if(cx&&cx.$$includes){var cz=cx.$$flatIncludes;

for(var i=0,l=cz.length;i<l;i++){if(cz[i].$$constructor){return true;
}}}if(cy){var cA=qx.Mixin.flatten(cy);

for(var i=0,l=cA.length;i<l;i++){if(cA[i].$$constructor){return true;
}}}return false;
},__bh:function(cB,name,cC){var cE=function(){var cH=cE;

if(qx.core.Environment.get(m)){if(!(this instanceof cH)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(cC===e){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(cC===d){if(!cH.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}var cG=cH.$$original.apply(this,arguments);
if(cH.$$includes){var cF=cH.$$flatIncludes;

for(var i=0,l=cF.length;i<l;i++){if(cF[i].$$constructor){cF[i].$$constructor.apply(this,arguments);
}}}
if(qx.core.Environment.get(m)){if(this.classname===name){this.$$initialized=true;
}}return cG;
};

if(qx.core.Environment.get(c)){var cD=qx.core.Aspect.wrap(name,cE,b);
cE.$$original=cB;
cE.constructor=cD;
cE=cD;
}cE.$$original=cB;
cB.wrapper=cE;
return cE;
}},defer:function(){if(qx.core.Environment.get(c)){for(var cI in qx.Bootstrap.$$registry){var cJ=qx.Bootstrap.$$registry[cI];

for(var cK in cJ){if(cJ[cK] instanceof Function){cJ[cK]=qx.core.Aspect.wrap(cI+k+cK,cJ[cK],h);
}}}}}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__bi:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__bj:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bk:function(){var L=qx.lang.Generics.__bi;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__bj(N,O);
}}}}},defer:function(Q){Q.__bk();
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var m="get",l="",k="[",h=".",g="last",f="change",d="]",c="Number",b="String",a="qx.debug.databinding",J="set",I="deepBinding",H="item",G="reset",F="qx.debug",E="' (",D="Boolean",C=") to the object '",B="Integer",A=" of object ",u="qx.event.type.Data",v="qx.data.SingleValueBinding",s="Binding property ",t="Can not remove the bindings for null object!",q="Binding from '",r="PositiveNumber",n="PositiveInteger",p="Binding does not exist!",w=" is not an data (qx.event.type.Data) event on ",x=").",z="Date",y=" not possible: No event available. ";
qx.Class.define(v,{statics:{__bl:{},bind:function(K,L,M,N,O){var ba=this.__bn(K,L,M,N,O);
var U=L.split(h);
var Q=this.__bt(U);
var Y=[];
var V=[];
var W=[];
var S=[];
var T=K;
try{for(var i=0;i<U.length;i++){if(Q[i]!==l){S.push(f);
}else{S.push(this.__bo(T,U[i]));
}Y[i]=T;
if(i==U.length-1){if(Q[i]!==l){var be=Q[i]===g?T.length-1:Q[i];
var P=T.getItem(be);
this.__bs(P,M,N,O,K);
W[i]=this.__bu(T,S[i],M,N,O,Q[i]);
}else{if(U[i]!=null&&T[m+qx.lang.String.firstUp(U[i])]!=null){var P=T[m+qx.lang.String.firstUp(U[i])]();
this.__bs(P,M,N,O,K);
}W[i]=this.__bu(T,S[i],M,N,O);
}}else{var bb={index:i,propertyNames:U,sources:Y,listenerIds:W,arrayIndexValues:Q,targetObject:M,targetPropertyChain:N,options:O,listeners:V};
var X=qx.lang.Function.bind(this.__bm,this,bb);
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
this.__bv(bc,K,L,M,N);
return bc;
},__bm:function(bg){if(bg.options&&bg.options.onUpdate){bg.options.onUpdate(bg.sources[bg.index],bg.targetObject);
}for(var j=bg.index+1;j<bg.propertyNames.length;j++){var bk=bg.sources[j];
bg.sources[j]=null;

if(!bk){continue;
}bk.removeListenerById(bg.listenerIds[j]);
}var bk=bg.sources[bg.index];
for(var j=bg.index+1;j<bg.propertyNames.length;j++){if(bg.arrayIndexValues[j-1]!==l){bk=bk[m+qx.lang.String.firstUp(bg.propertyNames[j-1])](bg.arrayIndexValues[j-1]);
}else{bk=bk[m+qx.lang.String.firstUp(bg.propertyNames[j-1])]();
}bg.sources[j]=bk;
if(!bk){this.__bp(bg.targetObject,bg.targetPropertyChain);
break;
}if(j==bg.propertyNames.length-1){if(qx.Class.implementsInterface(bk,qx.data.IListData)){var bl=bg.arrayIndexValues[j]===g?bk.length-1:bg.arrayIndexValues[j];
var bi=bk.getItem(bl);
this.__bs(bi,bg.targetObject,bg.targetPropertyChain,bg.options,bg.sources[bg.index]);
bg.listenerIds[j]=this.__bu(bk,f,bg.targetObject,bg.targetPropertyChain,bg.options,bg.arrayIndexValues[j]);
}else{if(bg.propertyNames[j]!=null&&bk[m+qx.lang.String.firstUp(bg.propertyNames[j])]!=null){var bi=bk[m+qx.lang.String.firstUp(bg.propertyNames[j])]();
this.__bs(bi,bg.targetObject,bg.targetPropertyChain,bg.options,bg.sources[bg.index]);
}var bj=this.__bo(bk,bg.propertyNames[j]);
bg.listenerIds[j]=this.__bu(bk,bj,bg.targetObject,bg.targetPropertyChain,bg.options);
}}else{if(bg.listeners[j]==null){var bh=qx.lang.Function.bind(this.__bm,this,bg);
bg.listeners.push(bh);
}if(qx.Class.implementsInterface(bk,qx.data.IListData)){var bj=f;
}else{var bj=this.__bo(bk,bg.propertyNames[j]);
}bg.listenerIds[j]=bk.addListener(bj,bg.listeners[j]);
}}},__bn:function(bm,bn,bo,bp,bq){var bu=bp.split(h);
var bs=this.__bt(bu);
var bz=[];
var by=[];
var bw=[];
var bv=[];
var bt=bo;
for(var i=0;i<bu.length-1;i++){if(bs[i]!==l){bv.push(f);
}else{try{bv.push(this.__bo(bt,bu[i]));
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
}else{try{var bB=qx.data.SingleValueBinding.__bo(bC,bu[j]);
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
bJ=qx.data.SingleValueBinding.__bw(bJ,bG,bH,bI,bE);
this.__bq(bG,bH,bJ);
},getValueFromObject:function(o,bK){var bO=this.__br(o,bK);
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
},__bo:function(bR,bS){var bT=this.__bx(bR,bS);
if(bT==null){if(qx.Class.supportsEvent(bR.constructor,bS)){bT=bS;
}else if(qx.Class.supportsEvent(bR.constructor,f+qx.lang.String.firstUp(bS))){bT=f+qx.lang.String.firstUp(bS);
}else{throw new qx.core.AssertionError(s+bS+A+bR+y);
}}return bT;
},__bp:function(bU,bV){var bW=this.__br(bU,bV);

if(bW!=null){var bX=bV.substring(bV.lastIndexOf(h)+1,bV.length);
if(bX.charAt(bX.length-1)==d){this.__bq(bU,bV,null);
return;
}if(bW[G+qx.lang.String.firstUp(bX)]!=undefined){bW[G+qx.lang.String.firstUp(bX)]();
}else{bW[J+qx.lang.String.firstUp(bX)](null);
}}},__bq:function(bY,ca,cb){var cf=this.__br(bY,ca);

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
}}},__br:function(ch,ci){var cl=ci.split(h);
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
},__bs:function(co,cp,cq,cr,cs){co=this.__bw(co,cp,cq,cr,cs);
if(co===undefined){this.__bp(cp,cq);
}if(co!==undefined){try{this.__bq(cp,cq,co);
if(cr&&cr.onUpdate){cr.onUpdate(cs,cp,co);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cr&&cr.onSetFail){cr.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+co+" on "+cp+". Error message: "+e);
}}}},__bt:function(ct){var cu=[];
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
},__bu:function(cw,cx,cy,cz,cA,cB){if(qx.core.Environment.get(F)){var cC=qx.Class.getEventType(cw.constructor,cx);
qx.core.Assert.assertEquals(u,cC,cx+w+cw+h);
}var cE=function(cF,e){if(cF!==l){if(cF===g){cF=cw.length-1;
}var cI=cw.getItem(cF);
if(cI===undefined){qx.data.SingleValueBinding.__bp(cy,cz);
}var cG=e.getData().start;
var cH=e.getData().end;

if(cF<cG||cF>cH){return;
}}else{var cI=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+cw+" by "+cx+" to "+cy+" ("+cz+")");
qx.log.Logger.debug("Data before conversion: "+cI);
}cI=qx.data.SingleValueBinding.__bw(cI,cy,cz,cA,cw);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cI);
}try{if(cI!==undefined){qx.data.SingleValueBinding.__bq(cy,cz,cI);
}else{qx.data.SingleValueBinding.__bp(cy,cz);
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
},__bv:function(cJ,cK,cL,cM,cN){if(this.__bl[cK.toHashCode()]===undefined){this.__bl[cK.toHashCode()]=[];
}this.__bl[cK.toHashCode()].push([cJ,cK,cL,cM,cN]);
},__bw:function(cO,cP,cQ,cR,cS){if(cR&&cR.converter){var cU;

if(cP.getModel){cU=cP.getModel();
}return cR.converter(cO,cU,cS,cP);
}else{var cW=this.__br(cP,cQ);
var cX=cQ.substring(cQ.lastIndexOf(h)+1,cQ.length);
if(cW==null){return cO;
}var cV=qx.Class.getPropertyDefinition(cW.constructor,cX);
var cT=cV==null?l:cV.check;
return this.__by(cO,cT);
}},__bx:function(cY,da){var db=qx.Class.getPropertyDefinition(cY.constructor,da);

if(db==null){return null;
}return db.event;
},__by:function(dc,dd){var de=qx.lang.Type.getClass(dc);
if((de==c||de==b)&&(dd==B||dd==n)){dc=parseInt(dc,10);
}if((de==D||de==c||de==z)&&dd==b){dc=dc+l;
}if((de==c||de==b)&&(dd==c||dd==r)){dc=parseFloat(dc);
}return dc;
},removeBindingFromObject:function(df,dg){if(dg.type==I){for(var i=0;i<dg.sources.length;i++){if(dg.sources[i]){dg.sources[i].removeListenerById(dg.listenerIds[i]);
}}for(var i=0;i<dg.targets.length;i++){if(dg.targets[i]){dg.targets[i].removeListenerById(dg.targetListenerIds[i]);
}}}else{df.removeListenerById(dg);
}var dh=this.__bl[df.toHashCode()];
if(dh!=undefined){for(var i=0;i<dh.length;i++){if(dh[i][0]==dg){qx.lang.Array.remove(dh,dh[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(di){if(qx.core.Environment.get(F)){qx.core.Assert.assertNotNull(di,t);
}var dj=this.__bl[di.toHashCode()];

if(dj!=undefined){for(var i=dj.length-1;i>=0;i--){this.removeBindingFromObject(di,dj[i][0]);
}}},getAllBindingsForObject:function(dk){if(this.__bl[dk.toHashCode()]===undefined){this.__bl[dk.toHashCode()]=[];
}return this.__bl[dk.toHashCode()];
},removeAllBindings:function(){for(var dm in this.__bl){var dl=qx.core.ObjectRegistry.fromHashCode(dm);
if(dl==null){delete this.__bl[dm];
continue;
}this.removeAllBindingsForObject(dl);
}this.__bl={};
},getAllBindings:function(){return this.__bl;
},showBindingInLog:function(dn,dp){var dr;
for(var i=0;i<this.__bl[dn.toHashCode()].length;i++){if(this.__bl[dn.toHashCode()][i][0]==dp){dr=this.__bl[dn.toHashCode()][i];
break;
}}
if(dr===undefined){var dq=p;
}else{var dq=q+dr[1]+E+dr[2]+C+dr[3]+E+dr[4]+x;
}qx.log.Logger.debug(dq);
},showAllBindingsInLog:function(){for(var dt in this.__bl){var ds=qx.core.ObjectRegistry.fromHashCode(dt);

for(var i=0;i<this.__bl[dt].length;i++){this.showBindingInLog(ds,this.__bl[dt][i][0]);
}}}}});
})();
(function(){var p="",o="g",n="]",m='\\u',l="undefined",k='\\$1',j="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h='-',g="qx.lang.String",f="(^|[^",c="0",e="%",d=' ',b='\n',a="])[";
qx.Class.define(g,{statics:{__bz:j,__bA:null,__bB:{},camelCase:function(q){var r=this.__bB[q];

if(!r){r=q.replace(/\-([a-z])/g,function(s,t){return t.toUpperCase();
});
}return r;
},hyphenate:function(u){var v=this.__bB[u];

if(!v){v=u.replace(/[A-Z]/g,function(w){return (h+w.charAt(0).toLowerCase());
});
}return v;
},capitalize:function(x){if(this.__bA===null){var y=m;
this.__bA=new RegExp(f+this.__bz.replace(/[0-9A-F]{4}/g,function(z){return y+z;
})+a+this.__bz.replace(/[0-9A-F]{4}/g,function(A){return y+A;
})+n,o);
}return x.replace(this.__bA,function(B){return B.toUpperCase();
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
qx.Class.define(d,{statics:{toArray:function(n,o){return this.cast(n,Array,o);
},cast:function(p,q,r){if(p.constructor===q){return p;
}
if(qx.Class.hasInterface(p,qx.data.IListData)){var p=p.toArray();
}var s=new q;
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
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
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
(function(){var m=":",l="engine.name",k="Error created at",j="...",h="qx.dev.StackTrace",g="",f="\n",e="?",d="/source/class/",c="anonymous",a="of linked script",b=".";
qx.Bootstrap.define(h,{statics:{getStackTrace:qx.core.Environment.select(l,{"gecko":function(){try{throw new Error();
}catch(A){var u=this.getStackTraceFromError(A);
qx.lang.Array.removeAt(u,0);
var s=this.getStackTraceFromCaller(arguments);
var q=s.length>u.length?s:u;

for(var i=0;i<Math.min(s.length,u.length);i++){var r=s[i];

if(r.indexOf(c)>=0){continue;
}var y=r.split(m);

if(y.length!=2){continue;
}var w=y[0];
var p=y[1];
var o=u[i];
var z=o.split(m);
var v=z[0];
var n=z[1];

if(qx.Class.getByName(v)){var t=v;
}else{t=w;
}var x=t+m;

if(p){x+=p+m;
}x+=n;
q[i]=x;
}return q;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var B;

try{B.bar();
}catch(D){var C=this.getStackTraceFromError(D);
qx.lang.Array.removeAt(C,0);
return C;
}return [];
}}),getStackTraceFromCaller:qx.core.Environment.select(l,{"opera":function(E){return [];
},"default":function(F){var K=[];
var J=qx.lang.Function.getCaller(F);
var G={};

while(J){var H=qx.lang.Function.getName(J);
K.push(H);

try{J=J.caller;
}catch(L){break;
}
if(!J){break;
}var I=qx.core.ObjectRegistry.toHashCode(J);

if(G[I]){K.push(j);
break;
}G[I]=J;
}return K;
}}),getStackTraceFromError:qx.core.Environment.select(l,{"gecko":function(M){if(!M.stack){return [];
}var S=/@(.+):(\d+)$/gm;
var N;
var O=[];

while((N=S.exec(M.stack))!=null){var P=N[1];
var R=N[2];
var Q=this.__bS(P);
O.push(Q+m+R);
}return O;
},"webkit":function(T){if(T.stack){var bb=/at (.*)/gm;
var ba=/\((.*?)(:[^\/].*)\)/;
var X=/(.*?)(:[^\/].*)/;
var U;
var V=[];

while((U=bb.exec(T.stack))!=null){var W=ba.exec(U[1]);

if(!W){W=X.exec(U[1]);
}
if(W){var Y=this.__bS(W[1]);
V.push(Y+W[2]);
}else{V.push(U[1]);
}}return V;
}else if(T.sourceURL&&T.line){return [this.__bS(T.sourceURL)+m+T.line];
}else{return [];
}},"opera":function(bc){if(bc.stacktrace){var be=bc.stacktrace;

if(be.indexOf(k)>=0){be=be.split(k)[0];
}if(be.indexOf(a)>=0){var bo=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bi=bf[2];
var bm=this.__bS(bi);
bg.push(bm+m+bn);
}}else{var bo=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bh=bf[2];
var bi=bf[3];
var bm=this.__bS(bi);
bg.push(bm+m+bn+m+bh);
}}return bg;
}else if(bc.message&&bc.message.indexOf("Backtrace:")>=0){var bg=[];
var bj=qx.lang.String.trim(bc.message.split("Backtrace:")[1]);
var bk=bj.split(f);

for(var i=0;i<bk.length;i++){var bd=bk[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(bd&&bd.length>=2){var bn=bd[1];
var bl=this.__bS(bd[2]);
bg.push(bl+m+bn);
}}return bg;
}else{return [];
}},"default":function(){return [];
}}),__bS:function(bp){var bt=d;
var bq=bp.indexOf(bt);
var bs=bp.indexOf(e);

if(bs>=0){bp=bp.substring(0,bs);
}var br=(bq==-1)?bp:bp.substring(bq+bt.length).replace(/\//g,b).replace(/\.js$/,g);
return br;
}}});
})();
(function(){var j="()",i="qx.debug",h=".",g=".prototype.",f="Invalid parameter 'func'.",e='anonymous()',d="Trying to call a bound function with a disposed object as context: ",c=" :: ",b="qx.lang.Function",a=".constructor()";
qx.Class.define(b,{statics:{getCaller:function(k){return k.caller?k.caller.callee:k.callee.caller;
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
}return function(event){if(qx.core.Environment.get(i)){if(r.self instanceof qx.core.Object){qx.core.Assert&&qx.core.Assert.assertFalse(r.self.isDisposed(),d+r.self.toString()+c+qx.lang.Function.getName(q));
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
(function(){var d="qx.dom.Node",c="engine.name",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(e){return e.nodeType===this.DOCUMENT?e:e.ownerDocument||e.document;
},getWindow:qx.core.Environment.select(c,{"mshtml":function(f){if(f.nodeType==null){return f;
}if(f.nodeType!==this.DOCUMENT){f=f.ownerDocument;
}return f.parentWindow;
},"default":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.defaultView;
}}),getDocumentElement:function(h){return this.getDocument(h).documentElement;
},getBodyElement:function(j){return this.getDocument(j).body;
},isNode:function(k){return !!(k&&k.nodeType!=null);
},isElement:function(l){return !!(l&&l.nodeType===this.ELEMENT);
},isDocument:function(m){return !!(m&&m.nodeType===this.DOCUMENT);
},isText:function(n){return !!(n&&n.nodeType===this.TEXT);
},isWindow:function(o){return !!(o&&o.history&&o.location&&o.document);
},isNodeName:function(p,q){if(!q||!p||!p.nodeName){return false;
}return q.toLowerCase()==qx.dom.Node.getName(p);
},getName:function(r){if(!r||!r.nodeName){return null;
}return r.nodeName.toLowerCase();
},getText:function(s){if(!s||!s.nodeType){return null;
}
switch(s.nodeType){case 1:var i,a=[],t=s.childNodes,length=t.length;

for(i=0;i<length;i++){a[i]=this.getText(t[i]);
}return a.join(b);
case 2:case 3:case 4:return s.nodeValue;
}return null;
},isBlockNode:function(u){if(!qx.dom.Node.isElement(u)){return false;
}u=qx.dom.Node.getName(u);
return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(u);
}}});
})();
(function(){var m="on",l="engine.name",k="gecko",j="engine.version",i="qx.debug",h="function",g="undefined",f="mousedown",d="qx.bom.Event",c="mouseover",a="HTMLEvents",b="return;";
qx.Class.define(d,{statics:{addNativeListener:function(n,o,p,q){if(n.addEventListener){n.addEventListener(o,p,!!q);
}else if(n.attachEvent){n.attachEvent(m+o,p);
}else if(typeof n[m+o]!=g){n[m+o]=p;
}else{if(qx.core.Environment.get(i)){this.warn("No method available to add native listener to "+n);
}}},removeNativeListener:function(r,s,t,u){if(r.removeEventListener){r.removeEventListener(s,t,!!u);
}else if(r.detachEvent){try{r.detachEvent(m+s,t);
}catch(e){if(e.number!==-2146828218){throw e;
}}}else if(typeof r[m+s]!=g){r[m+s]=null;
}else{if(qx.core.Environment.get(i)){this.warn("No method available to remove native listener from "+r);
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
}},supportsEvent:qx.core.Environment.select(l,{"webkit":function(A,B){return A.hasOwnProperty(m+B);
},"default":function(C,D){var E=m+D;
var F=(E in C);

if(!F){F=typeof C[E]==h;

if(!F&&C.setAttribute){C.setAttribute(E,b);
F=typeof C[E]==h;
C.removeAttribute(E);
}}return F;
}})}});
})();
(function(){var k="qx.debug",j="|bubble",h="|capture",g="|",f="': ",e="'",d="",c="_",b="Invalid Target.",a="Invalid capture flag.",J="Invalid event type.",I=" from the target '",H="Invalid callback function",G="Invalid event target.",F="unload",E="Failed to remove event listener for id '",D="Invalid context for callback.",C="Failed to add event listener for type '",B="UNKNOWN_",A="capture",s="__cz",t="qx.event.Manager",q="' on target '",r="Could not dispatch event '",o="DOM_",p="QX_",m=" to the target '",n="Failed to remove event listener for type '",u="Invalid id type.",v="c",x="__cy",w="DOCUMENT_",z="WIN_",y="Invalid event object.";
qx.Class.define(t,{extend:Object,construct:function(K,L){this.__cu=K;
this.__cv=qx.core.ObjectRegistry.toHashCode(K);
this.__cw=L;
if(K.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(K,F,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(K,F,arguments.callee);
self.dispose();
}));
}this.__cx={};
this.__cy={};
this.__cz={};
this.__cA={};
},statics:{__cB:0,getNextUniqueId:function(){return (this.__cB++)+d;
}},members:{__cw:null,__cx:null,__cz:null,__cC:null,__cy:null,__cA:null,__cu:null,__cv:null,getWindow:function(){return this.__cu;
},getWindowId:function(){return this.__cv;
},getHandler:function(M){var N=this.__cy[M.classname];

if(N){return N;
}return this.__cy[M.classname]=new M(this);
},getDispatcher:function(O){var P=this.__cz[O.classname];

if(P){return P;
}return this.__cz[O.classname]=new O(this,this.__cw);
},getListeners:function(Q,R,S){var T=Q.$$hash||qx.core.ObjectRegistry.toHashCode(Q);
var V=this.__cx[T];

if(!V){return null;
}var W=R+(S?h:j);
var U=V[W];
return U?U.concat():null;
},getAllListeners:function(){return this.__cx;
},serializeListeners:function(X){var bf=X.$$hash||qx.core.ObjectRegistry.toHashCode(X);
var bh=this.__cx[bf];
var bd=[];

if(bh){var bb,bg,Y,bc,be;

for(var ba in bh){bb=ba.indexOf(g);
bg=ba.substring(0,bb);
Y=ba.charAt(bb+1)==v;
bc=bh[ba];

for(var i=0,l=bc.length;i<l;i++){be=bc[i];
bd.push({self:be.context,handler:be.handler,type:bg,capture:Y});
}}}return bd;
},toggleAttachedEvents:function(bi,bj){var bo=bi.$$hash||qx.core.ObjectRegistry.toHashCode(bi);
var bq=this.__cx[bo];

if(bq){var bl,bp,bk,bm;

for(var bn in bq){bl=bn.indexOf(g);
bp=bn.substring(0,bl);
bk=bn.charCodeAt(bl+1)===99;
bm=bq[bn];

if(bj){this.__cD(bi,bp,bk);
}else{this.__cE(bi,bp,bk);
}}}},hasListener:function(br,bs,bt){if(qx.core.Environment.get(k)){if(br==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+br);
}}var bu=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);
var bw=this.__cx[bu];

if(!bw){return false;
}var bx=bs+(bt?h:j);
var bv=bw[bx];
return !!(bv&&bv.length>0);
},importListeners:function(by,bz){if(qx.core.Environment.get(k)){if(by==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+by);
}}var bF=by.$$hash||qx.core.ObjectRegistry.toHashCode(by);
var bG=this.__cx[bF]={};
var bC=qx.event.Manager;

for(var bA in bz){var bD=bz[bA];
var bE=bD.type+(bD.capture?h:j);
var bB=bG[bE];

if(!bB){bB=bG[bE]=[];
this.__cD(by,bD.type,bD.capture);
}bB.push({handler:bD.listener,context:bD.self,unique:bD.unique||(bC.__cB++)+d});
}},addListener:function(bH,bI,bJ,self,bK){if(qx.core.Environment.get(k)){var bO=C+bI+e+m+bH.classname+f;
qx.core.Assert.assertObject(bH,bO+b);
qx.core.Assert.assertString(bI,bO+J);
qx.core.Assert.assertFunction(bJ,bO+H);

if(bK!==undefined){qx.core.Assert.assertBoolean(bK,a);
}}var bP=bH.$$hash||qx.core.ObjectRegistry.toHashCode(bH);
var bR=this.__cx[bP];

if(!bR){bR=this.__cx[bP]={};
}var bN=bI+(bK?h:j);
var bM=bR[bN];

if(!bM){bM=bR[bN]=[];
}if(bM.length===0){this.__cD(bH,bI,bK);
}var bQ=(qx.event.Manager.__cB++)+d;
var bL={handler:bJ,context:self,unique:bQ};
bM.push(bL);
return bN+g+bQ;
},findHandler:function(bS,bT){var cg=false,bX=false,ch=false,bU=false;
var ce;

if(bS.nodeType===1){cg=true;
ce=o+bS.tagName.toLowerCase()+c+bT;
}else if(bS.nodeType===9){bU=true;
ce=w+bT;
}else if(bS==this.__cu){bX=true;
ce=z+bT;
}else if(bS.classname){ch=true;
ce=p+bS.classname+c+bT;
}else{ce=B+bS+c+bT;
}var ca=this.__cA;

if(ca[ce]){return ca[ce];
}var cd=this.__cw.getHandlers();
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
},__cD:function(ci,cj,ck){var cl=this.findHandler(ci,cj);

if(cl){cl.registerEvent(ci,cj,ck);
return;
}
if(qx.core.Environment.get(k)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cj+"' on target '"+ci+"'!");
}},removeListener:function(cm,cn,co,self,cp){if(qx.core.Environment.get(k)){var ct=n+cn+e+I+cm.classname+f;
qx.core.Assert.assertObject(cm,ct+b);
qx.core.Assert.assertString(cn,ct+J);
qx.core.Assert.assertFunction(co,ct+H);

if(self!==undefined){qx.core.Assert.assertObject(self,D);
}
if(cp!==undefined){qx.core.Assert.assertBoolean(cp,a);
}}var cu=cm.$$hash||qx.core.ObjectRegistry.toHashCode(cm);
var cv=this.__cx[cu];

if(!cv){return false;
}var cq=cn+(cp?h:j);
var cr=cv[cq];

if(!cr){return false;
}var cs;

for(var i=0,l=cr.length;i<l;i++){cs=cr[i];

if(cs.handler===co&&cs.context===self){qx.lang.Array.removeAt(cr,i);

if(cr.length==0){this.__cE(cm,cn,cp);
}return true;
}}return false;
},removeListenerById:function(cw,cx){if(qx.core.Environment.get(k)){var cD=E+cx+e+I+cw.classname+f;
qx.core.Assert.assertObject(cw,cD+b);
qx.core.Assert.assertString(cx,cD+u);
}var cB=cx.split(g);
var cG=cB[0];
var cy=cB[1].charCodeAt(0)==99;
var cF=cB[2];
var cE=cw.$$hash||qx.core.ObjectRegistry.toHashCode(cw);
var cH=this.__cx[cE];

if(!cH){return false;
}var cC=cG+(cy?h:j);
var cA=cH[cC];

if(!cA){return false;
}var cz;

for(var i=0,l=cA.length;i<l;i++){cz=cA[i];

if(cz.unique===cF){qx.lang.Array.removeAt(cA,i);

if(cA.length==0){this.__cE(cw,cG,cy);
}return true;
}}return false;
},removeAllListeners:function(cI){var cM=cI.$$hash||qx.core.ObjectRegistry.toHashCode(cI);
var cO=this.__cx[cM];

if(!cO){return false;
}var cK,cN,cJ;

for(var cL in cO){if(cO[cL].length>0){cK=cL.split(g);
cN=cK[0];
cJ=cK[1]===A;
this.__cE(cI,cN,cJ);
}}delete this.__cx[cM];
return true;
},deleteAllListeners:function(cP){delete this.__cx[cP];
},__cE:function(cQ,cR,cS){var cT=this.findHandler(cQ,cR);

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
}var cY=this.__cw.getDispatchers();
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
},dispose:function(){this.__cw.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,x);
qx.util.DisposeUtil.disposeMap(this,s);
this.__cx=this.__cu=this.__cC=null;
this.__cw=this.__cA=null;
}}});
})();
(function(){var j="qx.debug",h="qx.debug.dispose",g="$$hash",f="-",e="",d="qx.core.ObjectRegistry",c="-0";
qx.Class.define(d,{statics:{inShutDown:false,__v:{},__bT:0,__bU:[],__bV:e,__bW:{},register:function(k){var o=this.__v;

if(!o){return;
}var n=k.$$hash;

if(n==null){var m=this.__bU;

if(m.length>0&&!qx.core.Environment.get(h)){n=m.pop();
}else{n=(this.__bT++)+this.__bV;
}k.$$hash=n;

if(qx.core.Environment.get(h)&&qx.dev&&qx.dev.Debug&&qx.dev.Debug.disposeProfilingActive){this.__bW[n]=qx.dev.StackTrace.getStackTrace();
}}
if(qx.core.Environment.get(j)){if(!k.dispose){throw new Error("Invalid object: "+k);
}}o[n]=k;
},unregister:function(p){var q=p.$$hash;

if(q==null){return;
}var r=this.__v;

if(r&&r[q]){delete r[q];
this.__bU.push(q);
}try{delete p.$$hash;
}catch(s){if(p.removeAttribute){p.removeAttribute(g);
}}},toHashCode:function(t){if(qx.core.Environment.get(j)){if(t==null){throw new Error("Invalid object: "+t);
}}var v=t.$$hash;

if(v!=null){return v;
}var u=this.__bU;

if(u.length>0){v=u.pop();
}else{v=(this.__bT++)+this.__bV;
}return t.$$hash=v;
},clearHashCode:function(w){if(qx.core.Environment.get(j)){if(w==null){throw new Error("Invalid object: "+w);
}}var x=w.$$hash;

if(x!=null){this.__bU.push(x);
try{delete w.$$hash;
}catch(y){if(w.removeAttribute){w.removeAttribute(g);
}}}},fromHashCode:function(z){return this.__v[z]||null;
},shutdown:function(){this.inShutDown=true;
var B=this.__v;
var D=[];

for(var C in B){D.push(C);
}D.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var A,i=0,l=D.length;

while(true){try{for(;i<l;i++){C=D[i];
A=B[C];

if(A&&A.dispose){A.dispose();
}}}catch(E){qx.Bootstrap.error(this,"Could not dispose object "+A.toString()+": "+E);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__v;
},getRegistry:function(){return this.__v;
},getNextHash:function(){return this.__bT;
},getPostId:function(){return this.__bV;
},getStackTraces:function(){return this.__bW;
}},defer:function(F){if(window&&window.top){var frames=window.top.frames;

for(var i=0;i<frames.length;i++){if(frames[i]===window){F.__bV=f+(i+1);
return;
}}}F.__bV=c;
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
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__cf:0,__cg:0,__ch:false,__ci:0,__cj:null,__ck:null,setMaxEntries:function(c){this.__ck=c;
this.clear();
},getMaxEntries:function(){return this.__ck;
},addEntry:function(d){this.__cj[this.__cf]=d;
this.__cf=this.__cl(this.__cf,1);
var e=this.getMaxEntries();

if(this.__cg<e){this.__cg++;
}if(this.__ch&&(this.__ci<e)){this.__ci++;
}},mark:function(){this.__ch=true;
this.__ci=0;
},clearMark:function(){this.__ch=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__cg){f=this.__cg;
}if(g&&this.__ch&&(f>this.__ci)){f=this.__ci;
}
if(f>0){var i=this.__cl(this.__cf,-1);
var h=this.__cl(i,-f+1);
var j;

if(h<=i){j=this.__cj.slice(h,i+1);
}else{j=this.__cj.slice(h,this.__cg).concat(this.__cj.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__cj=new Array(this.getMaxEntries());
this.__cg=0;
this.__ci=0;
this.__cf=0;
},__cl:function(k,l){var m=this.getMaxEntries();
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
qx.Class.define(t,{statics:{__cm:A,setLevel:function(J){this.__cm=J;
},getLevel:function(){return this.__cm;
},setTreshold:function(K){this.__cp.setMaxMessages(K);
},getTreshold:function(){return this.__cp.getMaxMessages();
},__cn:{},__co:0,register:function(L){if(L.$$id){return;
}var N=this.__co++;
this.__cn[N]=L;
L.$$id=N;
var M=this.__cq;
var O=this.__cp.getAllLogEvents();

for(var i=0,l=O.length;i<l;i++){if(M[O[i].level]>=M[this.__cm]){L.process(O[i]);
}}},unregister:function(P){var Q=P.$$id;

if(Q==null){return;
}delete this.__cn[Q];
delete P.$$id;
},debug:function(R,S){qx.log.Logger.__cr(A,arguments);
},info:function(T,U){qx.log.Logger.__cr(c,arguments);
},warn:function(V,W){qx.log.Logger.__cr(o,arguments);
},error:function(X,Y){qx.log.Logger.__cr(g,arguments);
},trace:function(ba){qx.log.Logger.__cr(c,[ba,qx.dev.StackTrace.getStackTrace().join(v)]);
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
}}},clear:function(){this.__cp.clearHistory();
},__cp:new qx.log.appender.RingBuffer(50),__cq:{debug:0,info:1,warn:2,error:3},__cr:function(bw,bx){var bC=this.__cq;

if(bC[bw]<bC[this.__cm]){return;
}var bz=bx.length<2?null:bx[0];
var bB=bz?1:0;
var by=[];

for(var i=bB,l=bx.length;i<l;i++){by.push(this.__ct(bx[i],true));
}var bD=new Date;
var bE={time:bD,offset:bD-qx.Bootstrap.LOADSTART,level:bw,items:by,win:window};
if(bz){if(bz.$$hash!==undefined){bE.object=bz.$$hash;
}else if(bz.$$type){bE.clazz=bz;
}}this.__cp.process(bE);
var bF=this.__cn;

for(var bA in bF){bF[bA].process(bE);
}},__cs:function(bG){if(bG===undefined){return s;
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
},__ct:function(bI,bJ){var bQ=this.__cs(bI);
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
}bM.push(this.__ct(bI[i],false));
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
bK=this.__ct(bI[bO],false);
bK.key=bO;
bM.push(bK);
}}else{var bN=0;

for(var bO in bI){bN++;
}bM=m+bN+x;
}break;
}return {type:bQ,text:bM,trace:bL};
}},defer:function(bR){var bS=qx.Bootstrap.$$logs;

for(var i=0;i<bS.length;i++){bR.__cr(bS[i][0],bS[i][1]);
}qx.Bootstrap.debug=bR.debug;
qx.Bootstrap.info=bR.info;
qx.Bootstrap.warn=bR.warn;
qx.Bootstrap.error=bR.error;
qx.Bootstrap.trace=bR.trace;
}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var k="qx.debug",j="Invalid event target.",i="Invalid event dispatcher!",h="': ",g="Invalid event handler.",f="' on target '",e="Could not fire event '",d="undefined",c="qx.event.Registration";
qx.Class.define(c,{statics:{__cF:{},getManager:function(l){if(l==null){if(qx.core.Environment.get(k)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}l=window;
}else if(l.nodeType){l=qx.dom.Node.getWindow(l);
}else if(!qx.dom.Node.isWindow(l)){l=window;
}var n=l.$$hash||qx.core.ObjectRegistry.toHashCode(l);
var m=this.__cF[n];

if(!m){m=new qx.event.Manager(l,this);
this.__cF[n]=m;
}return m;
},removeManager:function(o){var p=o.getWindowId();
delete this.__cF[p];
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
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cy:[],addHandler:function(Y){if(qx.core.Environment.get(k)){qx.core.Assert.assertInterface(Y,qx.event.IEventHandler,g);
}this.__cy.push(Y);
this.__cy.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__cy;
},__cz:[],addDispatcher:function(ba,bb){if(qx.core.Environment.get(k)){qx.core.Assert.assertInterface(ba,qx.event.IEventDispatcher,i);
}this.__cz.push(ba);
this.__cz.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__cz;
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
(function(){var t="qx.debug",s="qx.disposerDebugLevel",r="set",q="MSIE 6.0",p="get",o="rv:1.8.1",n="reset",m="info",k="qx.core.Object",j="error",c="warn",h="]",g="debug",b="[",a="$$user_",f="object",d="Object";
qx.Class.define(k,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:d},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+b+this.$$hash+h;
},base:function(u,v){if(qx.core.Environment.get(t)){if(!qx.Bootstrap.isFunction(u.callee.base)){throw new Error("Cannot call super class. Method is not derived: "+u.callee.displayName);
}}
if(arguments.length===1){return u.callee.base.call(this);
}else{return u.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(w){return w.callee.self;
},clone:function(){var y=this.constructor;
var x=new y;
var A=qx.Class.getProperties(y);
var z=qx.core.Property.$$store.user;
var B=qx.core.Property.$$method.set;
var name;
for(var i=0,l=A.length;i<l;i++){name=A[i];

if(this.hasOwnProperty(z[name])){x[B[name]](this[z[name]]);
}}return x;
},set:function(C,D){var F=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(C)){if(!this[F[C]]){if(this[r+qx.Bootstrap.firstUp(C)]!=undefined){this[r+qx.Bootstrap.firstUp(C)](D);
return this;
}
if(qx.core.Environment.get(t)){qx.Bootstrap.error(new Error("No such property: "+C));
return this;
}}return this[F[C]](D);
}else{for(var E in C){if(!this[F[E]]){if(this[r+qx.Bootstrap.firstUp(E)]!=undefined){this[r+qx.Bootstrap.firstUp(E)](C[E]);
continue;
}
if(qx.core.Environment.get(t)){qx.Bootstrap.error(new Error("No such property: "+E));
return this;
}}this[F[E]](C[E]);
}return this;
}},get:function(G){var H=qx.core.Property.$$method.get;

if(!this[H[G]]){if(this[p+qx.Bootstrap.firstUp(G)]!=undefined){return this[p+qx.Bootstrap.firstUp(G)]();
}
if(qx.core.Environment.get(t)){qx.Bootstrap.error(new Error("No such property: "+G));
return this;
}}return this[H[G]]();
},reset:function(I){var J=qx.core.Property.$$method.reset;

if(!this[J[I]]){if(this[n+qx.Bootstrap.firstUp(I)]!=undefined){this[n+qx.Bootstrap.firstUp(I)]();
return;
}
if(qx.core.Environment.get(t)){qx.Bootstrap.error(new Error("No such property: "+I));
return;
}}this[J[I]]();
},__cG:qx.event.Registration,addListener:function(K,L,self,M){if(!this.$$disposed){return this.__cG.addListener(this,K,L,self,M);
}return null;
},addListenerOnce:function(N,O,self,P){var Q=function(e){this.removeListener(N,Q,this,P);
O.call(self||this,e);
};
return this.addListener(N,Q,this,P);
},removeListener:function(R,S,self,T){if(!this.$$disposed){return this.__cG.removeListener(this,R,S,self,T);
}return false;
},removeListenerById:function(U){if(!this.$$disposed){return this.__cG.removeListenerById(this,U);
}return false;
},hasListener:function(V,W){return this.__cG.hasListener(this,V,W);
},dispatchEvent:function(X){if(!this.$$disposed){return this.__cG.dispatchEvent(this,X);
}return true;
},fireEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__cG.fireEvent(this,Y,ba,bb);
}return true;
},fireNonBubblingEvent:function(bc,bd,be){if(!this.$$disposed){return this.__cG.fireNonBubblingEvent(this,bc,bd,be);
}return true;
},fireDataEvent:function(bf,bg,bh,bi){if(!this.$$disposed){if(bh===undefined){bh=null;
}return this.__cG.fireNonBubblingEvent(this,bf,qx.event.type.Data,[bg,bh,!!bi]);
}return true;
},__cH:null,setUserData:function(bj,bk){if(!this.__cH){this.__cH={};
}this.__cH[bj]=bk;
},getUserData:function(bl){if(!this.__cH){return null;
}var bm=this.__cH[bl];
return bm===undefined?null:bm;
},__cI:qx.log.Logger,debug:function(bn){this.__cJ(g,arguments);
},info:function(bo){this.__cJ(m,arguments);
},warn:function(bp){this.__cJ(c,arguments);
},error:function(bq){this.__cJ(j,arguments);
},trace:function(){this.__cI.trace(this);
},__cJ:function(br,bs){var bt=qx.lang.Array.fromArguments(bs);
bt.unshift(this);
this.__cI[br].apply(this.__cI,bt);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Environment.get(t)){if(qx.core.Environment.get(s)>2){qx.Bootstrap.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var bw=this.constructor;
var bu;

while(bw.superclass){if(bw.$$destructor){bw.$$destructor.call(this);
}if(bw.$$includes){bu=bw.$$flatIncludes;

for(var i=0,l=bu.length;i<l;i++){if(bu[i].$$destructor){bu[i].$$destructor.call(this);
}}}bw=bw.superclass;
}if(this.__cK){this.__cK();
}if(qx.core.Environment.get(t)){if(qx.core.Environment.get(s)>0){var bx,bv;

for(bx in this){bv=this[bx];
if(bv!==null&&typeof bv===f&&!(qx.Bootstrap.isString(bv))){if(this.constructor.prototype[bx]!=null){continue;
}var bz=navigator.userAgent.indexOf(o)!=-1;
var by=navigator.userAgent.indexOf(q)!=-1;
if(bz||by){if(bv instanceof qx.core.Object||qx.core.Environment.get(s)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+bx+"' in "+this.classname+"["+this.toHashCode()+"]: "+bv);
delete this[bx];
}}else{if(qx.core.Environment.get(s)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+bx+"' in "+this.classname+"["+this.toHashCode()+"]: "+bv);
delete this[bx];
}}}}}}},__cK:null,__cL:function(){var bA=qx.Class.getProperties(this.constructor);

for(var i=0,l=bA.length;i<l;i++){delete this[a+bA[i]];
}},_disposeObjects:function(bB){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bC){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bD){qx.util.DisposeUtil.disposeArray(this,bD);
},_disposeMap:function(bE){qx.util.DisposeUtil.disposeMap(this,bE);
}},environment:{"qx.disposerDebugLevel":0},defer:function(bF,bG){if(qx.core.Environment.get(t)){qx.Class.include(bF,qx.core.MAssert);
}var bI=navigator.userAgent.indexOf(q)!=-1;
var bH=navigator.userAgent.indexOf(o)!=-1;
if(bI||bH){bG.__cK=bG.__cL;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__cH=null;
var bL=this.constructor;
var bP;
var bQ=qx.core.Property.$$store;
var bN=bQ.user;
var bO=bQ.theme;
var bJ=bQ.inherit;
var bM=bQ.useinit;
var bK=bQ.init;

while(bL){bP=bL.$$properties;

if(bP){for(var name in bP){if(bP[name].dereference){this[bN[name]]=this[bO[name]]=this[bJ[name]]=this[bM[name]]=this[bK[name]]=undefined;
}}}bL=bL.superclass;
}}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__bX:null,__bY:null,__ca:null,__cb:null,stringify:function(bb,bc,bd){this.__bX=p;
this.__bY=p;
this.__cb=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__bY+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__bY=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__ca=bc;
}else{this.__ca=null;
}return this.__cc(p,{'':bb});
},__cc:function(be,bf){var bi=this.__bX,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__ca===e){bj=this.__ca.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__cd(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__bX+=this.__bY;
bg=[];

if(this.__cb.indexOf(bj)!==-1){throw new TypeError(V);
}this.__cb.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__cc(i,bj)||h;
}this.__cb.pop();
if(bg.length===0){var bh=s;
}else if(this.__bX){bh=E+this.__bX+bg.join(Y+this.__bX)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__bX=bi;
return bh;
case z:this.__bX+=this.__bY;
bg=[];

if(this.__cb.indexOf(bj)!==-1){throw new TypeError(V);
}this.__cb.push(bj);
if(this.__ca&&typeof this.__ca===f){var length=this.__ca.length;

for(var i=0;i<length;i+=1){var k=this.__ca[i];

if(typeof k===W){var v=this.__cc(k,bj);

if(v){bg.push(this.__cd(k)+(this.__bX?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__cc(k,bj);

if(v){bg.push(this.__cd(k)+(this.__bX?g:m)+v);
}}}}this.__cb.pop();
if(bg.length===0){var bh=A;
}else if(this.__bX){bh=w+this.__bX+bg.join(Y+this.__bX)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__bX=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__cd:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
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
return typeof bs===e?this.__ce({'':j},p,bs):j;
}throw new SyntaxError(P);
},__ce:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__ce(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1&&JSON.stringify({"prop":"val"},function(k,v){return k==="prop"?"repl":v;
}).indexOf("repl")>0)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
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
this.__cM={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__cM:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__cM[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__cM){return;
}var h=g.classname;
var j=this.__cM[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__cM[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__cM;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__cM;
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
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cN:null,__cO:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__cN=b;
this.__cO=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__cN=this.__cN;
f.__cO=this.__cO;
return f;
},getData:function(){return this.__cN;
},getOldData:function(){return this.__cO;
}},destruct:function(){this.__cN=this.__cO=null;
}});
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
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var k="engine.version",j="",i="engine.name",h="hidden",g="-moz-scrollbars-none",f="overflow",e=";",d="overflowY",b=":",a="overflowX",z="overflow:",y="none",x="scroll",w="borderLeftStyle",v="borderRightStyle",u="div",r="borderRightWidth",q="overflow-y",p="borderLeftWidth",o="-moz-scrollbars-vertical",m="100px",n="qx.bom.element.Overflow",l="overflow-x";
qx.Class.define(n,{statics:{DEFAULT_SCROLLBAR_WIDTH:14,__df:null,getScrollbarWidth:function(){if(this.__df!==null){return this.__df;
}var A=qx.bom.element.Style;
var C=function(G,H){return parseInt(A.get(G,H),10)||0;
};
var D=function(I){return (A.get(I,v)==y?0:C(I,r));
};
var B=function(J){return (A.get(J,w)==y?0:C(J,p));
};
var F=qx.core.Environment.select(i,{"mshtml":function(K){if(A.get(K,d)==h||K.clientWidth==0){return D(K);
}return Math.max(0,K.offsetWidth-K.clientLeft-K.clientWidth);
},"default":function(L){if(L.clientWidth==0){var M=A.get(L,f);
var N=(M==x||M==o?16:0);
return Math.max(0,D(L)+N);
}return Math.max(0,(L.offsetWidth-L.clientWidth-B(L)));
}});
var E=function(O){return F(O)-D(O);
};
var t=document.createElement(u);
var s=t.style;
s.height=s.width=m;
s.overflow=x;
document.body.appendChild(t);
var c=E(t);
this.__df=c;
document.body.removeChild(t);
return this.__df;
},_compile:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(P,Q){if(Q==h){Q=g;
}return z+Q+e;
}:function(R,S){return R+b+S+e;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(T,U){return z+U+e;
}:function(V,W){return V+b+W+e;
},"default":function(X,Y){return X+b+Y+e;
}}),compileX:function(ba){return this._compile(l,ba);
},compileY:function(bb){return this._compile(q,bb);
},getX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bc,bd){var be=qx.bom.element.Style.get(bc,f,bd,false);

if(be===g){be=h;
}return be;
}:function(bf,bg){return qx.bom.element.Style.get(bf,a,bg,false);
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bh,bi){return qx.bom.element.Style.get(bh,f,bi,false);
}:function(bj,bk){return qx.bom.element.Style.get(bj,a,bk,false);
},"default":function(bl,bm){return qx.bom.element.Style.get(bl,a,bm,false);
}}),setX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bn,bo){if(bo==h){bo=g;
}bn.style.overflow=bo;
}:function(bp,bq){bp.style.overflowX=bq;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(br,bs){br.style.overflow=bs;
}:function(bt,bu){bt.style.overflowX=bu;
},"default":function(bv,bw){bv.style.overflowX=bw;
}}),resetX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bx){bx.style.overflow=j;
}:function(by){by.style.overflowX=j;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bz,bA){bz.style.overflow=j;
}:function(bB,bC){bB.style.overflowX=j;
},"default":function(bD){bD.style.overflowX=j;
}}),getY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bE,bF){var bG=qx.bom.element.Style.get(bE,f,bF,false);

if(bG===g){bG=h;
}return bG;
}:function(bH,bI){return qx.bom.element.Style.get(bH,d,bI,false);
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bJ,bK){return qx.bom.element.Style.get(bJ,f,bK,false);
}:function(bL,bM){return qx.bom.element.Style.get(bL,d,bM,false);
},"default":function(bN,bO){return qx.bom.element.Style.get(bN,d,bO,false);
}}),setY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bP,bQ){if(bQ===h){bQ=g;
}bP.style.overflow=bQ;
}:function(bR,bS){bR.style.overflowY=bS;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bT,bU){bT.style.overflow=bU;
}:function(bV,bW){bV.style.overflowY=bW;
},"default":function(bX,bY){bX.style.overflowY=bY;
}}),resetY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(ca){ca.style.overflow=j;
}:function(cb){cb.style.overflowY=j;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(cc,cd){cc.style.overflow=j;
}:function(ce,cf){ce.style.overflowY=j;
},"default":function(cg){cg.style.overflowY=j;
}})}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__bi:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__bi[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__bi[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var r="engine.name",q="",p="qx.debug",o="boxSizing",n="box-sizing",m="qx.bom.element.BoxSizing",k="KhtmlBoxSizing",j="border-box",h="-moz-box-sizing",g="WebkitBoxSizing",c=":",f=";",e="-khtml-box-sizing",b="content-box",a="-webkit-box-sizing",d="MozBoxSizing";
qx.Class.define(m,{statics:{__dg:qx.core.Environment.select(r,{"mshtml":null,"webkit":[o,k,g],"gecko":[d],"opera":[o]}),__dh:qx.core.Environment.select(r,{"mshtml":null,"webkit":[n,e,a],"gecko":[h],"opera":[n]}),__di:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dj:function(s){var t=this.__di;
return t.tags[s.tagName.toLowerCase()]||t.types[s.type];
},compile:qx.core.Environment.select(r,{"mshtml":function(u){if(qx.core.Environment.get(p)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(v){var x=this.__dh;
var w=q;

if(x){for(var i=0,l=x.length;i<l;i++){w+=x[i]+c+v+f;
}}return w;
}}),get:qx.core.Environment.select(r,{"mshtml":function(y){if(qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(y))){if(!this.__dj(y)){return b;
}}return j;
},"default":function(z){var B=this.__dg;
var A;

if(B){for(var i=0,l=B.length;i<l;i++){A=qx.bom.element.Style.get(z,B[i],null,false);

if(A!=null&&A!==q){return A;
}}}return q;
}}),set:qx.core.Environment.select(r,{"mshtml":function(C,D){if(qx.core.Environment.get(p)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(E,F){var G=this.__dg;

if(G){for(var i=0,l=G.length;i<l;i++){E.style[G[i]]=F;
}}}}),reset:function(H){this.set(H,q);
}}});
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
}}),getScrollLeft:qx.core.Environment.select(b,{"mshtml":function(p){var q=(p||window).document;
return q.documentElement.scrollLeft||q.body.scrollLeft;
},"default":function(r){return (r||window).pageXOffset;
}}),getScrollTop:qx.core.Environment.select(b,{"mshtml":function(s){var t=(s||window).document;
return t.documentElement.scrollTop||t.body.scrollTop;
},"default":function(u){return (u||window).pageYOffset;
}}),__dk:function(){var v=this.getWidth()>this.getHeight()?90:0;
var w=window.orientation;

if(w==null||Math.abs(w%180)==v){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};
}else{return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};
}},__dl:null,getOrientation:function(x){var y=(x||window).orientation;

if(y==null){y=this.getWidth(x)>this.getHeight(x)?90:0;
}else{y=this.__dl[y];
}return y;
},isLandscape:function(z){return Math.abs(this.getOrientation(z))==90;
},isPortrait:function(A){return Math.abs(this.getOrientation(A))!==90;
}},defer:function(B){B.__dl=B.__dk();
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
(function(){var m="",l="engine.name",k=";",j="opacity:",i="opacity",h="filter",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Environment.select(l,{"mshtml":function(n){if(n>=1){n=1;
}
if(n<0.00001){n=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return j+n+k;
}else{return d+(n*100)+f;
}},"gecko":function(o){if(o>=1){o=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return b+o+k;
}else{return j+o+k;
}},"default":function(p){if(p>=1){return m;
}return j+p+k;
}}),set:qx.core.Environment.select(l,{"mshtml":function(q,r){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(r>=1){r=m;
}q.style.opacity=r;
}else{var s=qx.bom.element.Style.get(q,h,qx.bom.element.Style.COMPUTED_MODE,false);

if(r>=1){r=1;
}
if(r<0.00001){r=0;
}if(!q.currentStyle||!q.currentStyle.hasLayout){q.style.zoom=1;
}q.style.filter=s.replace(/alpha\([^\)]*\)/gi,m)+c+r*100+e;
}},"gecko":function(t,u){if(u>=1){u=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){t.style.MozOpacity=u;
}else{t.style.opacity=u;
}},"default":function(v,w){if(w>=1){w=m;
}v.style.opacity=w;
}}),reset:qx.core.Environment.select(l,{"mshtml":function(x){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){x.style.opacity=m;
}else{var y=qx.bom.element.Style.get(x,h,qx.bom.element.Style.COMPUTED_MODE,false);
x.style.filter=y.replace(/alpha\([^\)]*\)/gi,m);
}},"gecko":function(z){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){z.style.MozOpacity=m;
}else{z.style.opacity=m;
}},"default":function(A){A.style.opacity=m;
}}),get:qx.core.Environment.select(l,{"mshtml":function(B,C){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var D=qx.bom.element.Style.get(B,i,C,false);

if(D!=null){return parseFloat(D);
}return 1.0;
}else{var E=qx.bom.element.Style.get(B,h,C,false);

if(E){var D=E.match(/alpha\(opacity=(.*)\)/);

if(D&&D[1]){return parseFloat(D[1])/100;
}}return 1.0;
}},"gecko":function(F,G){var H=qx.bom.element.Style.get(F,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?g:i,G,false);

if(H==0.999999){H=1.0;
}
if(H!=null){return parseFloat(H);
}return 1.0;
},"default":function(I,J){var K=qx.bom.element.Style.get(I,i,J,false);

if(K!=null){return parseFloat(K);
}return 1.0;
}})},defer:function(L){L.SUPPORT_CSS3_OPACITY=(typeof document.documentElement.style.opacity=="string");
}});
})();
(function(){var m="",k="engine.name",h="userSelect",g="qx.debug",f="Invalid argument 'smart'",e="style",d="Invalid argument 'element'",c="MozUserModify",b="px",a="pixelBottom",K="float",J="borderImage",I="styleFloat",H="appearance",G="pixelHeight",F='Ms',E=":",D="cssFloat",C="pixelTop",B="Invalid argument 'name'",t="pixelLeft",u='O',r="Invalid argument 'styles'",s="qx.bom.element.Style",p='Khtml',q='string',n="pixelRight",o='Moz',v="pixelWidth",w=";",y="textOverflow",x="userModify",A='Webkit',z="WebkitUserModify";
qx.Class.define(s,{statics:{__dm:function(){var L=[H,h,y,J];
var P={};
var M=document.documentElement.style;
var Q=[o,A,p,u,F];

for(var i=0,l=L.length;i<l;i++){var R=L[i];
var N=R;

if(M[R]){P[N]=R;
continue;
}R=qx.lang.String.firstUp(R);

for(var j=0,S=Q.length;j<S;j++){var O=Q[j]+R;

if(typeof M[O]==q){P[N]=O;
break;
}}}this.__dn=P;
this.__dn[x]=qx.core.Environment.select(k,{"gecko":c,"webkit":z,"default":h});
this.__do={};

for(var N in P){this.__do[N]=qx.lang.String.hyphenate(P[N]);
}this.__dn[K]=qx.core.Environment.select(k,{"mshtml":I,"default":D});
},__dp:{width:v,height:G,left:t,right:n,top:C,bottom:a},__dq:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(T){var V=[];
var X=this.__dq;
var W=this.__do;
var name,U;

for(name in T){U=T[name];

if(U==null){continue;
}name=W[name]||name;
if(X[name]){V.push(X[name].compile(U));
}else{V.push(qx.lang.String.hyphenate(name),E,U,w);
}}return V.join(m);
},setCss:qx.core.Environment.select(k,{"mshtml":function(Y,ba){Y.style.cssText=ba;
},"default":function(bb,bc){bb.setAttribute(e,bc);
}}),getCss:qx.core.Environment.select(k,{"mshtml":function(bd){return bd.style.cssText.toLowerCase();
},"default":function(be){return be.getAttribute(e);
}}),isPropertySupported:function(bf){return (this.__dq[bf]||this.__dn[bf]||bf in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bg,name,bh,bi){if(qx.core.Environment.get(g)){qx.core.Assert.assertElement(bg,d);
qx.core.Assert.assertString(name,B);

if(bi!==undefined){qx.core.Assert.assertBoolean(bi,f);
}}name=this.__dn[name]||name;
if(bi!==false&&this.__dq[name]){return this.__dq[name].set(bg,bh);
}else{bg.style[name]=bh!==null?bh:m;
}},setStyles:function(bj,bk,bl){if(qx.core.Environment.get(g)){qx.core.Assert.assertElement(bj,d);
qx.core.Assert.assertMap(bk,r);

if(bl!==undefined){qx.core.Assert.assertBoolean(bl,f);
}}var bo=this.__dn;
var bq=this.__dq;
var bm=bj.style;

for(var bp in bk){var bn=bk[bp];
var name=bo[bp]||bp;

if(bn===undefined){if(bl!==false&&bq[name]){bq[name].reset(bj);
}else{bm[name]=m;
}}else{if(bl!==false&&bq[name]){bq[name].set(bj,bn);
}else{bm[name]=bn!==null?bn:m;
}}}},reset:function(br,name,bs){name=this.__dn[name]||name;
if(bs!==false&&this.__dq[name]){return this.__dq[name].reset(br);
}else{br.style[name]=m;
}},get:qx.core.Environment.select(k,{"mshtml":function(bt,name,bu,bv){name=this.__dn[name]||name;
if(bv!==false&&this.__dq[name]){return this.__dq[name].get(bt,bu);
}if(!bt.currentStyle){return bt.style[name]||m;
}switch(bu){case this.LOCAL_MODE:return bt.style[name]||m;
case this.CASCADED_MODE:return bt.currentStyle[name]||m;
default:var bz=bt.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bz)){return bz;
}var by=this.__dp[name];

if(by){var bw=bt.style[name];
bt.style[name]=bz||0;
var bx=bt.style[by]+b;
bt.style[name]=bw;
return bx;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bz)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bz;
}},"default":function(bA,name,bB,bC){name=this.__dn[name]||name;
if(bC!==false&&this.__dq[name]){return this.__dq[name].get(bA,bB);
}switch(bB){case this.LOCAL_MODE:return bA.style[name]||m;
case this.CASCADED_MODE:if(bA.currentStyle){return bA.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bD=qx.dom.Node.getDocument(bA);
var bE=bD.defaultView.getComputedStyle(bA,null);
return bE?bE[name]:m;
}}})},defer:function(bF){bF.__dm();
}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(b){return true;
},getCellEditorValue:function(c){return true;
}}});
})();
(function(){var n="engine.name",m="ready",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="webkit",f="gecko",d="opera",a="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._window=o.getWindow();
this.__cP=false;
this.__cQ=false;
this.__cR=false;
this.__cS=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__cT();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__cR:null,__cP:null,__cQ:null,__cS:null,__cT:function(){if(!this.__cR&&this.__cP&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__cR=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__cR=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__cR;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__cP=true;
this.__cT();
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
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__cP=true;
this.__cT();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cS){this.__cS=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var g="",f="qx.core.BaseInit",d="engine.name",c="os.name",b="engine.version",a="demobrowser.demo.table.Table_Window_Editor";
qx.Class.define(f,{statics:{getApplication:function(){return this.__cU||null;
},ready:function(){if(this.__cU){return;
}
if(qx.core.Environment.get(d)==g){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(b)==g){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(c)==g){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=a;
var j=qx.Class.getByName(i);

if(j){this.__cU=new j;
var h=new Date;
this.__cU.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__cU.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__cV:function(e){var k=this.__cU;

if(k){k.close();
}},__cW:function(){var l=this.__cU;

if(l){l.terminate();
}qx.core.ObjectRegistry.shutdown();
}}});
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
(function(){var d="ready",c="shutdown",b="beforeunload",a="qx.core.Init";
qx.Class.define(a,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__cV:function(e){var f=this.getApplication();

if(f){e.setReturnValue(f.close());
}},__cW:function(){var g=this.getApplication();

if(g){g.terminate();
}}},defer:function(h){qx.event.Registration.addListener(window,d,h.ready,h);
qx.event.Registration.addListener(window,c,h.__cW,h);
qx.event.Registration.addListener(window,b,h.__cV,h);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
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
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__cX:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__cX;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__cX=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__cX=null;
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
}else if(this.isRgbString(m)){return this.__cY();
}else if(this.isHex3String(m)){return this.__db();
}else if(this.isHex6String(m)){return this.__dc();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__cY();
}else if(this.isRgbaString(n)){return this.__da();
}else if(this.isHex3String(n)){return this.__db();
}else if(this.isHex6String(n)){return this.__dc();
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
},__cY:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__da:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__db:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__dc:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__db(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__dc(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__db(P);
}
if(this.isHex6String(P)){return this.__dc(P);
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
(function(){var m="object",l="__dd",k="_applyTheme",j="",h="_",g="qx.ui.decoration.",f="qx.theme.manager.Decoration",e=".",d="Theme",c="changeTheme",a="string",b="singleton";
qx.Class.define(f,{type:b,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:k,event:c}},members:{__dd:null,resolve:function(n){if(!n){return null;
}
if(typeof n===m){return n;
}var s=this.getTheme();

if(!s){return null;
}var p=this.__dd;

if(!p){p=this.__dd={};
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

for(var i=0;i<t.length;i++){t[i]=t[i].basename.replace(e,j);
}var name=g+t.join(h);

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
},isCached:function(A){return qx.lang.Object.contains(this.__dd,A);
},_applyTheme:function(B,C){var E=qx.util.AliasManager.getInstance();

if(C){for(var D in C.aliases){E.remove(D);
}}
if(B){for(var D in B.aliases){E.add(D,B.aliases[D]);
}}
if(!B){this.__dd={};
}}},destruct:function(){this._disposeMap(l);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="qx.debug",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,d,a],mode:b}},members:{__de:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__de=null;
},getInsets:function(){if(this.__de){return this.__de;
}var k=this._getDefaultInsets();
return this.__de={left:this.getInsetLeft()==null?k.left:this.getInsetLeft(),right:this.getInsetRight()==null?k.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?k.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?k.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Environment.get(e)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__de=null;
}},destruct:function(){this.__de=null;
}});
})();
(function(){var o="px",n="top",m="_tint",l="abstract",k='<div style="',j="",h="_getDefaultInsetsFor",g="bottom",f="qx.ui.decoration.DynamicDecorator",e="left",b="right",d="_resize",c="_style",a='"></div>';
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,type:l,members:{getMarkup:function(){if(this._markup){return this._markup;
}var p={};

for(var name in this){if(name.indexOf(c)==0&&this[name] instanceof Function){this[name](p);
}}if(!this._generateMarkup){var q=[k];
q.push(qx.bom.element.Style.compile(p));
q.push(a);
q=q.join(j);
}else{var q=this._generateMarkup(p);
}return this._markup=q;
},resize:function(r,s,t){var v={};

for(var name in this){if(name.indexOf(d)==0&&this[name] instanceof Function){var u=this[name](r,s,t);

if(v.left==undefined){v.left=u.left;
v.top=u.top;
}
if(v.width==undefined){v.width=u.width;
v.height=u.height;
}
if(u.elementToApplyDimensions){v.elementToApplyDimensions=u.elementToApplyDimensions;
}v.left=u.left<v.left?u.left:v.left;
v.top=u.top<v.top?u.top:v.top;
v.width=u.width>v.width?u.width:v.width;
v.height=u.height>v.height?u.height:v.height;
}}if(v.left!=undefined){r.style.left=v.left+o;
r.style.top=v.top+o;
}if(v.width!=undefined){if(v.width<0){v.width=0;
}
if(v.height<0){v.height=0;
}
if(v.elementToApplyDimensions){r=v.elementToApplyDimensions;
}r.style.width=v.width+o;
r.style.height=v.height+o;
}},tint:function(w,x){for(var name in this){if(name.indexOf(m)==0&&this[name] instanceof Function){this[name](w,x,w.style);
}}},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){var B=[n,b,g,e];
var z={};

for(var name in this){if(name.indexOf(h)==0&&this[name] instanceof Function){var A=this[name]();

for(var i=0;i<B.length;i++){var y=B[i];
if(z[y]==undefined){z[y]=A[y];
}if(A[y]<z[y]){z[y]=A[y];
}}}}if(z[n]!=undefined){return z;
}return {top:0,right:0,bottom:0,left:0};
}}});
})();
(function(){var p="qx.debug",o="Invalid argument 'map'",n="=",m="+",k="Invalid argument 'minLength'",j="ecmascript.objectcount",h="Invalid argument 'source'",g="Invalid argument 'target'",f="function",e="Invalid argument 'array'",b="&",d="qx.lang.Object",c="undefined",a="object";
qx.Class.define(d,{statics:{empty:function(q){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(q,o);
}
for(var r in q){if(q.hasOwnProperty(r)){delete q[r];
}}},isEmpty:(qx.core.Environment.get(j))?function(s){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(s,o);
}return s.__count__===0;
}:function(t){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(t,o);
}
for(var u in t){return false;
}return true;
},hasMinLength:(qx.core.Environment.get(j))?function(v,w){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(v,o);
qx.core.Assert&&qx.core.Assert.assertInteger(w,k);
}return v.__count__>=w;
}:function(x,y){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(x,o);
qx.core.Assert&&qx.core.Assert.assertInteger(y,k);
}
if(y<=0){return true;
}var length=0;

for(var z in x){if((++length)>=y){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(A){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(A,o);
}var C=[];
var B=this.getKeys(A);

for(var i=0,l=B.length;i<l;i++){C.push(A[B[i]]);
}return C;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(D,E){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(D,g);
qx.core.Assert&&qx.core.Assert.assertMap(E,h);
}return qx.lang.Object.mergeWith(D,E,false);
},merge:function(F,G){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(F,g);
}var H=arguments.length;

for(var i=1;i<H;i++){qx.lang.Object.mergeWith(F,arguments[i]);
}return F;
},clone:function(I){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(I,h);
}var J={};

for(var K in I){J[K]=I[K];
}return J;
},invert:function(L){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(L,o);
}var M={};

for(var N in L){M[L[N].toString()]=N;
}return M;
},getKeyFromValue:function(O,P){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(O,o);
}
for(var Q in O){if(O.hasOwnProperty(Q)&&O[Q]===P){return Q;
}}return null;
},contains:function(R,S){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(R,o);
}return this.getKeyFromValue(R,S)!==null;
},select:function(T,U){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(U,o);
}return U[T];
},fromArray:function(V){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertArray(V,e);
}var W={};

for(var i=0,l=V.length;i<l;i++){if(qx.core.Environment.get(p)){switch(typeof V[i]){case a:case f:case c:throw new Error("Could not convert complex objects like "+V[i]+" at array index "+i+" to map syntax");
}}W[V[i].toString()]=true;
}return W;
},toUriParameter:function(X,Y){var bc,bb=[],ba=window.encodeURIComponent;

for(bc in X){if(X.hasOwnProperty(bc)){if(Y){bb.push(ba(bc).replace(/%20/g,m)+n+ba(X[bc]).replace(/%20/g,m));
}else{bb.push(ba(bc)+n+ba(X[bc]));
}}}return bb.join(b);
}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__dr={};
this.add(a,h);
},members:{__dr:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__dr[k]){return this.__dr[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__dr[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__dr[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__dr[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__dr){v[w]=this.__dr[w];
}return v;
}},destruct:function(){this.__dr=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Font",d="_dynamic",c="Theme",b="changeTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:c,nullable:true,apply:f,event:b}},members:{resolveDynamic:function(g){var h=this._dynamic;
return g instanceof qx.bom.Font?g:h[g];
},resolve:function(i){var l=this._dynamic;
var j=l[i];

if(j){return j;
}var k=this.getTheme();

if(k!==null&&k.fonts[i]){var m=this.__dt(k.fonts[i]);
return l[i]=(new m).set(k.fonts[i]);
}return i;
},isDynamic:function(n){var q=this._dynamic;

if(n&&(n instanceof qx.bom.Font||q[n]!==undefined)){return true;
}var p=this.getTheme();

if(p!==null&&n&&p.fonts[n]){var o=this.__dt(p.fonts[n]);
q[n]=(new o).set(p.fonts[n]);
return true;
}return false;
},__ds:function(r,s){if(r[s].include){var t=r[r[s].include];
r[s].include=null;
delete r[s].include;
r[s]=qx.lang.Object.mergeWith(r[s],t,false);
this.__ds(r,s);
}},_applyTheme:function(u){var v=this._getDynamic();

for(var y in v){if(v[y].themed){v[y].dispose();
delete v[y];
}}
if(u){var w=u.fonts;

for(var y in w){if(w[y].include&&w[w[y].include]){this.__ds(w,y);
}var x=this.__dt(w[y]);
v[y]=(new x).set(w[y]);
v[y].themed=true;
}}this._setDynamic(v);
},__dt:function(z){if(z.sources){return qx.bom.webfonts.WebFont;
}return qx.bom.Font;
}},destruct:function(){this._disposeMap(d);
}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",z="Integer",y="_applyFamily",x="_applyLineHeight",w="Array",v="line-through",u="overline",t="Color",s="qx.bom.Font",r="Number",q="_applyDecoration",o=" ",p="_applySize",m=",",n="_applyColor";
qx.Class.define(s,{extend:qx.core.Object,construct:function(A,B){qx.core.Object.call(this);
this.__du={fontFamily:k,fontSize:null,fontWeight:null,fontStyle:null,textDecoration:null,lineHeight:null,color:null};

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
},__dv:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2,color:k},getDefaultStyles:function(){return this.__dv;
}},properties:{size:{check:z,nullable:true,apply:p},lineHeight:{check:r,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,v,u],nullable:true,apply:q},color:{check:t,nullable:true,apply:n}},members:{__du:null,_applySize:function(J,K){this.__du.fontSize=J===null?null:J+g;
},_applyLineHeight:function(L,M){this.__du.lineHeight=L===null?null:L;
},_applyFamily:function(N,O){var P=k;

for(var i=0,l=N.length;i<l;i++){if(N[i].indexOf(o)>0){P+=f+N[i]+f;
}else{P+=N[i];
}
if(i!==l-1){P+=m;
}}this.__du.fontFamily=P;
},_applyBold:function(Q,R){this.__du.fontWeight=Q===null?null:Q?c:d;
},_applyItalic:function(S,T){this.__du.fontStyle=S===null?null:S?e:d;
},_applyDecoration:function(U,V){this.__du.textDecoration=U===null?null:U;
},_applyColor:function(W,X){this.__du.color=W===null?null:W;
},getStyles:function(){return this.__du;
}}});
})();
(function(){var h="'",g="qx.bom.webfonts.WebFont",f="",e="qx.debug",d="changeStatus",c=" ",b="_applySources",a="qx.event.type.Data";
qx.Class.define(g,{extend:qx.bom.Font,events:{"changeStatus":a},properties:{sources:{nullable:true,apply:b}},members:{__dw:null,_applySources:function(j,k){var o=[];

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
this.__dx=[];
this.__dy={};
this.__dz=[];
this.__dA=this.getPreferredFormats();
},statics:{FONT_FORMATS:["eot","woff","ttf","svg"],VALIDATION_TIMEOUT:5000},members:{__dx:null,__dB:null,__dy:null,__dA:null,__dz:null,__dC:null,require:function(V,W,X,Y){var ba=[];

for(var i=0,l=W.length;i<l;i++){var bc=W[i].split(c);
var bb=qx.util.ResourceManager.getInstance().toUri(bc[0]);

if(bc.length>1){bb=bb+c+bc[1];
}ba.push(bb);
}if(!(qx.core.Environment.get(g)==h&&qx.bom.client.Browser.getVersion()<9)){this.__dD(V,ba,X,Y);
return;
}
if(!this.__dC){this.__dC=new qx.event.Timer(100);
this.__dC.addListener(q,this.__dE,this);
}
if(!this.__dC.isEnabled()){this.__dC.start();
}this.__dz.push([V,ba,X,Y]);
},remove:function(bd){var be=null;

for(var i=0,l=this.__dx.length;i<l;i++){if(this.__dx[i]==bd){be=i;
this.__dK(bd);
break;
}}
if(be){qx.lang.Array.removeAt(this.__dx,be);
}
if(bd in this.__dy){this.__dy[bd].dispose();
delete this.__dy[bd];
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
},removeStyleSheet:function(){this.__dx=[];

if(this.__dB){var bk=this.__dB.ownerNode?this.__dB.ownerNode:this.__dB.owningElement;
qx.dom.Element.removeChild(bk,bk.parentNode);
}this.__dB=null;
},__dD:function(bl,bm,bn,bo){if(!qx.lang.Array.contains(this.__dx,bl)){var br=this.__dG(bm);
var bq=this.__dH(bl,br);

if(!bq){throw new Error("Couldn't create @font-face rule for WebFont "+bl+"!");
}
if(!this.__dB){this.__dB=qx.bom.Stylesheet.createElement();
}
try{this.__dJ(bq);
}catch(bs){if(qx.core.Environment.get(t)){this.warn("Error while adding @font-face rule:",bs.message);
return;
}}this.__dx.push(bl);
}
if(!this.__dy[bl]){this.__dy[bl]=new qx.bom.webfonts.Validator(bl);
this.__dy[bl].setTimeout(qx.bom.webfonts.Manager.VALIDATION_TIMEOUT);
this.__dy[bl].addListenerOnce(f,this.__dF,this);
}
if(bn){var bp=bo||window;
this.__dy[bl].addListenerOnce(f,bn,bp);
}this.__dy[bl].validate();
},__dE:function(){if(this.__dz.length==0){this.__dC.stop();
return;
}var bt=this.__dz.shift();
this.__dD.apply(this,bt);
},__dF:function(bu){var bv=bu.getData();

if(bv.valid===false){qx.event.Timer.once(function(){this.remove(bv.family);
},this,250);
}},__dG:function(bw){var by=qx.bom.webfonts.Manager.FONT_FORMATS;
var bB={};

for(var i=0,l=bw.length;i<l;i++){var bz=null;

for(var x=0;x<by.length;x++){var bA=new RegExp(E+by[x]+O);
var bx=bA.exec(bw[i]);

if(bx){bz=bx[1];
}}
if(bz){bB[bz]=bw[i];
}}return bB;
},__dH:function(bC,bD){var bG=[];
var bE=this.__dA.length>0?this.__dA:qx.bom.webfonts.Manager.FONT_FORMATS;

for(var i=0,l=bE.length;i<l;i++){var bF=bE[i];

if(bD[bF]){bG.push(this.__dI(bF,bD[bF]));
}}var bH=u+bG.join(L)+I;
bH=o+bC+D+bH;
bH=bH+K;
return bH;
},__dI:function(bI,bJ){switch(bI){case a:return k+bJ+y;
case R:return k+bJ+C;
case T:return k+bJ+B;
case e:return k+bJ+G;
default:return null;
}},__dJ:function(bK){var bM=z+bK+r;

if(qx.core.Environment.get(g)==h&&qx.core.Environment.get(S)<9){var bL=this.__dL(this.__dB.cssText);
bL+=bM;
this.__dB.cssText=bL;
}else{this.__dB.insertRule(bM,this.__dB.cssRules.length);
}},__dK:function(bN){var bQ=new RegExp(J+bN,Q);

for(var i=0,l=document.styleSheets.length;i<l;i++){var bO=document.styleSheets[i];

if(bO.cssText){var bP=bO.cssText.replace(/\n/g,n).replace(/\r/g,n);
bP=this.__dL(bP);

if(bQ.exec(bP)){bP=bP.replace(bQ,n);
}bO.cssText=bP;
}else if(bO.cssRules){for(var j=0,m=bO.cssRules.length;j<m;j++){var bP=bO.cssRules[j].cssText.replace(/\n/g,n).replace(/\r/g,n);

if(bQ.exec(bP)){this.__dB.deleteRule(j);
return;
}}}}},__dL:function(bR){return bR.replace(s,A);
}},destruct:function(){delete this.__dx;
this.removeStyleSheet();

for(var bS in this.__dy){this.__dy[bS].dispose();
}qx.bom.webfonts.Validator.removeDefaultHelperElements();
}});
})();
(function(){var p="",o="/",n="mshtml",m="engine.name",l="io.ssl",k="string",j="//",i="?",h="data",g="type",c="data:image/",f=";",e="encoding",b="qx.util.ResourceManager",a="singleton",d=",";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
},statics:{__v:qx.$$resources||{},__dM:{}},members:{has:function(q){return !!this.self(arguments).__v[q];
},getData:function(r){return this.self(arguments).__v[r]||null;
},getImageWidth:function(s){var t=this.self(arguments).__v[s];
return t?t[0]:null;
},getImageHeight:function(u){var v=this.self(arguments).__v[u];
return v?v[1]:null;
},getImageFormat:function(w){var x=this.self(arguments).__v[w];
return x?x[2]:null;
},getCombinedFormat:function(y){var B=p;
var A=this.self(arguments).__v[y];
var z=A&&A.length>4&&typeof (A[4])==k&&this.constructor.__v[A[4]];

if(z){var D=A[4];
var C=this.constructor.__v[D];
B=C[2];
}return B;
},toUri:function(E){if(E==null){return E;
}var F=this.self(arguments).__v[E];

if(!F){return E;
}
if(typeof F===k){var H=F;
}else{var H=F[3];
if(!H){return E;
}}var G=p;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){G=this.self(arguments).__dM[H];
}return G+qx.$$libraries[H].resourceUri+o+E;
},toDataUri:function(I){var K=this.constructor.__v[I];
var L=this.constructor.__v[K[4]];
var M;

if(L){var J=L[4][I];
M=c+J[g]+f+J[e]+d+J[h];
}else{M=this.toUri(I);
}return M;
}},defer:function(N){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var R in qx.$$libraries){var P;

if(qx.$$libraries[R].resourceUri){P=qx.$$libraries[R].resourceUri;
}else{N.__dM[R]=p;
continue;
}if(P.match(/^\/\//)!=null){N.__dM[R]=window.location.protocol;
}else if(P.match(/^\//)!=null){N.__dM[R]=window.location.protocol+j+window.location.host;
}else if(P.match(/^\.\//)!=null){var O=document.URL;
N.__dM[R]=O.substring(0,O.lastIndexOf(o)+1);
}else if(P.match(/^http/)!=null){N.__dM[R]=p;
}else{var S=window.location.href.indexOf(i);
var Q;

if(S==-1){Q=window.location.href;
}else{Q=window.location.href.substring(0,S);
}N.__dM[R]=Q.substring(0,Q.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var k="interval",j="qx.event.Timer",i="_applyInterval",h="func is not a function",g="Boolean",f="qx.debug",d="No timeout given",c="Integer",b="qx.event.type.Event",a="_applyEnabled";
qx.Class.define(j,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);
this.setEnabled(false);

if(l!=null){this.setInterval(l);
}var self=this;
this.__dN=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(m,n,o){if(qx.core.Environment.get(f)){qx.core.Assert.assertFunction(m,h);
qx.core.Assert.assertNotUndefined(o,d);
}var p=new qx.event.Timer(o);
p.__dO=m;
p.addListener(k,function(e){p.stop();
m.call(n,e);
p.dispose();
n=null;
},n);
p.start();
return p;
}},properties:{enabled:{init:true,check:g,apply:a},interval:{check:c,init:1000,apply:i}},members:{__dP:null,__dN:null,_applyInterval:function(q,r){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(s,t){if(t){window.clearInterval(this.__dP);
this.__dP=null;
}else if(s){this.__dP=window.setInterval(this.__dN,this.getInterval());
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
}})},destruct:function(){if(this.__dP){window.clearInterval(this.__dP);
}this.__dP=this.__dN=null;
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
(function(){var l="engine.name",k="head",j="text/css",h="stylesheet",g="}",f='@import "',e="{",d='";',c="qx.bom.Stylesheet",b="link",a="style";
qx.Class.define(c,{statics:{includeFile:function(m,n){if(!n){n=document;
}var o=n.createElement(b);
o.type=j;
o.rel=h;
o.href=qx.util.ResourceManager.getInstance().toUri(m);
var p=n.getElementsByTagName(k)[0];
p.appendChild(o);
},createElement:qx.core.Environment.select(l,{"mshtml":function(q){var r=document.createStyleSheet();

if(q){r.cssText=q;
}return r;
},"default":function(s){var t=document.createElement(a);
t.type=j;

if(s){t.appendChild(document.createTextNode(s));
}document.getElementsByTagName(k)[0].appendChild(t);
return t.sheet;
}}),addRule:qx.core.Environment.select(l,{"mshtml":function(u,v,w){u.addRule(v,w);
},"default":function(x,y,z){x.insertRule(y+e+z+g,x.cssRules.length);
}}),removeRule:qx.core.Environment.select(l,{"mshtml":function(A,B){var C=A.rules;
var D=C.length;

for(var i=D-1;i>=0;--i){if(C[i].selectorText==B){A.removeRule(i);
}}},"default":function(E,F){var G=E.cssRules;
var H=G.length;

for(var i=H-1;i>=0;--i){if(G[i].selectorText==F){E.deleteRule(i);
}}}}),removeAllRules:qx.core.Environment.select(l,{"mshtml":function(I){var J=I.rules;
var K=J.length;

for(var i=K-1;i>=0;i--){I.removeRule(i);
}},"default":function(L){var M=L.cssRules;
var N=M.length;

for(var i=N-1;i>=0;i--){L.deleteRule(i);
}}}),addImport:qx.core.Environment.select(l,{"mshtml":function(O,P){O.addImport(P);
},"default":function(Q,R){Q.insertRule(f+R+d,Q.cssRules.length);
}}),removeImport:qx.core.Environment.select(l,{"mshtml":function(S,T){var U=S.imports;
var V=U.length;

for(var i=V-1;i>=0;i--){if(U[i].href==T){S.removeImport(i);
}}},"default":function(W,X){var Y=W.cssRules;
var ba=Y.length;

for(var i=ba-1;i>=0;i--){if(Y[i].href==X){W.deleteRule(i);
}}}}),removeAllImports:qx.core.Environment.select(l,{"mshtml":function(bb){var bc=bb.imports;
var bd=bc.length;

for(var i=bd-1;i>=0;i--){bb.removeImport(i);
}},"default":function(be){var bf=be.cssRules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].type==bf[i].IMPORT_RULE){be.deleteRule(i);
}}}})}});
})();
(function(){var h=",",g="interval",f="changeStatus",e="qx.event.type.Data",d="qx.bom.webfonts.Validator",c="_applyFontFamily",b="span",a="Integer";
qx.Class.define(d,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);

if(i){this.setFontFamily(i);
}this.__dQ=this._getRequestedHelpers();
},statics:{COMPARISON_FONTS:{sans:["Arial","Helvetica","sans-serif"],serif:["Times New Roman","Georgia","serif"]},HELPER_CSS:{position:"absolute",margin:"0",padding:"0",top:"-1000px",left:"-1000px",fontSize:"350px",width:"auto",height:"auto",lineHeight:"normal",fontVariant:"normal"},COMPARISON_STRING:"WEei",__dR:null,__dS:null,removeDefaultHelperElements:function(){var j=qx.bom.webfonts.Validator.__dS;

if(j){for(var k in j){document.body.removeChild(j[k]);
}}delete qx.bom.webfonts.Validator.__dS;
}},properties:{fontFamily:{nullable:true,init:null,apply:c},timeout:{check:a,init:5000}},events:{"changeStatus":e},members:{__dQ:null,__dT:null,__dU:null,validate:function(){this.__dU=new Date().getTime();

if(this.__dT){this.__dT.restart();
}else{this.__dT=new qx.event.Timer(100);
this.__dT.addListener(g,this.__dV,this);
qx.event.Timer.once(function(){this.__dT.start();
},this,0);
}},_reset:function(){if(this.__dQ){for(var m in this.__dQ){var l=this.__dQ[m];
document.body.removeChild(l);
}this.__dQ=null;
}},_isFontValid:function(){if(!qx.bom.webfonts.Validator.__dR){this.__bk();
}
if(!this.__dQ){this.__dQ=this._getRequestedHelpers();
}var o=qx.bom.element.Dimension.getWidth(this.__dQ.sans);
var n=qx.bom.element.Dimension.getWidth(this.__dQ.serif);
var p=qx.bom.webfonts.Validator;

if(o!==p.__dR.sans&&n!==p.__dR.serif){return true;
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
}},__bk:function(){var x=qx.bom.webfonts.Validator;

if(!x.__dS){x.__dS={sans:this._getHelperElement(x.COMPARISON_FONTS.sans),serif:this._getHelperElement(x.COMPARISON_FONTS.serif)};
}x.__dR={sans:qx.bom.element.Dimension.getWidth(x.__dS.sans),serif:qx.bom.element.Dimension.getWidth(x.__dS.serif)};
},__dV:function(){if(this._isFontValid()){this.__dT.stop();
this._reset();
this.fireDataEvent(f,{family:this.getFontFamily(),valid:true});
}else{var y=new Date().getTime();

if(y-this.__dU>=this.getTimeout()){this.__dT.stop();
this._reset();
this.fireDataEvent(f,{family:this.getFontFamily(),valid:false});
}}}},destruct:function(){this._reset();
this.__dT.stop();
this.__dT.removeListener(g,this.__dV,this);
this._disposeObjects(this.__dT);
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
},__dW:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(r);
var u=parseInt(s.get(r,d)||i,10);
var x=parseInt(s.get(r,e)||i,10);

if(this.__dW[t]){var w=r.clientWidth;

if((qx.core.Environment.get(j)==c)){w=w-u-x;
}else{if(qx.dom.Node.isBlockNode(r)){w=w-u-x;
}}return w;
}else{if(r.clientWidth>=r.scrollWidth){return Math.max(r.clientWidth,r.scrollWidth)-u-x;
}else{var v=r.scrollWidth-u;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)>=6){v-=x;
}return v;
}}},getContentHeight:function(y){var z=qx.bom.element.Style;
var C=qx.bom.element.Overflow.getY(y);
var B=parseInt(z.get(y,a)||i,10);
var A=parseInt(z.get(y,b)||i,10);

if(this.__dW[C]){return y.clientHeight-B-A;
}else{if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-B-A;
}else{var D=y.scrollHeight-B;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)==6){D-=A;
}return D;
}}},getContentSize:function(E){return {width:this.getContentWidth(E),height:this.getContentHeight(E)};
}}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__dX={};
this.__dY={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__ea:{},__dX:null,__dY:null,_applyTheme:function(j,k){this.__dY={};
this.__dX={};
},__eb:function(l,m,n){var s=m.appearances;
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
return this.__eb(r,m,n);
}}}for(var i=0;i<p.length-1;i++){p.shift();
var q=p.join(w);
var o=this.__eb(q,m);

if(o){return o;
}}if(n!=null){return this.__eb(n,m);
}return null;
}else if(typeof v===h){return this.__eb(v,m,n);
}else if(v.include&&!v.style){return this.__eb(v.include,m,n);
}return l;
},styleFrom:function(x,y,z,A){if(!z){z=this.getTheme();
}var F=this.__dY;
var B=F[x];

if(!B){B=F[x]=this.__eb(x,z,A);
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
}}var E=this.__dX;

if(E[M]!==undefined){return E[M];
}if(!y){y=this.__ea;
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
}},destruct:function(){this.__dX=this.__dY=null;
}});
})();
(function(){var t="object",s="qx.debug",r="Theme",q="undefined",p="icons",o="widgets",n="fonts",m="string",k="colors",j="decorations",d="meta",h="appearances",g="borders",c="other",b="qx.Theme",f="]",e="[Theme ";
qx.Bootstrap.define(b,{statics:{define:function(name,u){if(!u){var u={};
}u.include=this.__ec(u.include);
u.patch=this.__ec(u.patch);
if(qx.core.Environment.get(s)){this.__p(name,u);
}var v={$$type:r,name:name,title:u.title,toString:this.genericToString};
if(u.extend){v.supertheme=u.extend;
}v.basename=qx.Bootstrap.createNamespace(name,v);
this.__ef(v,u);
this.__ed(v,u);
this.$$registry[name]=v;
for(var i=0,a=u.include,l=a.length;i<l;i++){this.include(v,a[i]);
}
for(var i=0,a=u.patch,l=a.length;i<l;i++){this.patch(v,a[i]);
}},__ec:function(w){if(!w){return [];
}
if(qx.Bootstrap.isArray(w)){return w;
}else{return [w];
}},__ed:function(x,y){var z=y.aliases||{};

if(y.extend&&y.extend.aliases){qx.Bootstrap.objectMergeWith(z,y.extend.aliases,false);
}x.aliases=z;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return e+this.name+f;
},__ee:function(A){for(var i=0,B=this.__eg,l=B.length;i<l;i++){if(A[B[i]]){return B[i];
}}},__ef:function(C,D){var G=this.__ee(D);
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
},$$registry:{},__eg:[k,g,j,n,p,o,h,d],__o:qx.core.Environment.select(s,{"true":{"title":m,"aliases":t,"type":m,"extend":t,"colors":t,"borders":t,"decorations":t,"fonts":t,"icons":t,"widgets":t,"appearances":t,"meta":t,"include":t,"patch":t},"default":null}),__eh:qx.core.Environment.select(s,{"true":{"color":t,"border":t,"decoration":t,"font":t,"icon":t,"appearance":t,"widget":t},"default":null}),__p:qx.core.Environment.select(s,{"true":function(name,J){var O=this.__o;

for(var N in J){if(O[N]===undefined){throw new Error('The configuration key "'+N+'" in theme "'+name+'" is not allowed!');
}
if(J[N]==null){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value is undefined/null!');
}
if(O[N]!==null&&typeof J[N]!==O[N]){throw new Error('Invalid type of key "'+N+'" in theme "'+name+'"! The type of the key must be "'+O[N]+'"!');
}}var M=[k,g,j,n,p,o,h,d];

for(var i=0,l=M.length;i<l;i++){var N=M[i];
if(J[N]!==undefined&&N===p){qx.Bootstrap.warn("The key 'icons' is deprecated, please check your configuration: "+name);
}
if(J[N]!==undefined&&(J[N] instanceof Array||J[N] instanceof RegExp||J[N] instanceof Date||J[N].classname!==undefined)){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value needs to be a map!');
}}var K=0;

for(var i=0,l=M.length;i<l;i++){var N=M[i];

if(J[N]){K++;
}
if(K>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(J.meta){var L;

for(var N in J.meta){L=J.meta[N];

if(this.__eh[N]===undefined){throw new Error('The key "'+N+'" is not allowed inside a meta theme block.');
}
if(typeof L!==this.__eh[N]){throw new Error('The type of the key "'+N+'" inside the meta block is wrong.');
}
if(!(typeof L===t&&L!==null&&L.$$type===r)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+N+'" in theme "'+name+'" is invalid: '+L);
}}}if(J.extend&&J.extend.$$type!==r){throw new Error('Invalid extend in theme "'+name+'": '+J.extend);
}if(J.include){for(var i=0,l=J.include.length;i<l;i++){if(typeof (J.include[i])==q||J.include[i].$$type!==r){throw new Error('Invalid include in theme "'+name+'": '+J.include[i]);
}}}if(J.patch){for(var i=0,l=J.patch.length;i<l;i++){if(typeof (J.patch[i])==q||J.patch[i].$$type!==r){throw new Error('Invalid patch in theme "'+name+'": '+J.patch[i]);
}}}},"default":function(){}}),patch:function(P,Q){this.__ei(Q);
var S=this.__ee(Q);

if(S!==this.__ee(P)){throw new Error("The mixins '"+P.name+"' are not compatible '"+Q.name+"'!");
}var R=Q[S];
var T=P.$$clazz.prototype;

for(var U in R){T[U]=R[U];
}},include:function(V,W){this.__ei(W);
var Y=W.type;

if(Y!==V.type){throw new Error("The mixins '"+V.name+"' are not compatible '"+W.name+"'!");
}var X=W[Y];
var ba=V.$$clazz.prototype;

for(var bb in X){if(ba[bb]!==undefined){continue;
}ba[bb]=X[bb];
}},__ei:function(bc){if(typeof bc===q||bc==null){var bd=new Error("Mixin theme is not a valid theme!");

if(qx.core.Environment.get(s)){var be=qx.dev.StackTrace.getStackTraceFromError(bd);
qx.Bootstrap.error(this,be);
}throw bd;
}}}});
})();
(function(){var p="Boolean",o="focusout",n="interval",m="mouseover",l="mouseout",k="mousemove",j="widget",i="qx.ui.tooltip.ToolTip",h="__ej",g="_applyCurrent",c="qx.ui.tooltip.Manager",f="__em",d="__ek",b="tooltip-error",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,m,this.__et,this,true);
this.__ej=new qx.event.Timer();
this.__ej.addListener(n,this.__eq,this);
this.__ek=new qx.event.Timer();
this.__ek.addListener(n,this.__er,this);
this.__el={left:0,top:0};
},properties:{current:{check:i,nullable:true,apply:g},showInvalidToolTips:{check:p,init:true},showToolTips:{check:p,init:true}},members:{__el:null,__ek:null,__ej:null,__em:null,__en:null,__eo:function(){if(!this.__em){this.__em=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__em;
},__ep:function(){if(!this.__en){this.__en=new qx.ui.tooltip.ToolTip().set({appearance:b});
this.__en.syncAppearance();
}return this.__en;
},_applyCurrent:function(q,r){if(r&&qx.ui.core.Widget.contains(r,q)){return;
}if(r){if(!r.isDisposed()){r.exclude();
}this.__ej.stop();
this.__ek.stop();
}var t=qx.event.Registration;
var s=document.body;
if(q){this.__ej.startWith(q.getShowTimeout());
t.addListener(s,l,this.__eu,this,true);
t.addListener(s,o,this.__ev,this,true);
t.addListener(s,k,this.__es,this,true);
}else{t.removeListener(s,l,this.__eu,this,true);
t.removeListener(s,o,this.__ev,this,true);
t.removeListener(s,k,this.__es,this,true);
}},__eq:function(e){var u=this.getCurrent();

if(u&&!u.isDisposed()){this.__ek.startWith(u.getHideTimeout());

if(u.getPlaceMethod()==j){u.placeToWidget(u.getOpener());
}else{u.placeToPoint(this.__el);
}u.show();
}this.__ej.stop();
},__er:function(e){var v=this.getCurrent();

if(v&&!v.isDisposed()){v.exclude();
}this.__ek.stop();
this.resetCurrent();
},__es:function(e){var w=this.__el;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__et:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

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
if(x){A=this.__ep().set({label:x});
}
if(!A){A=this.__eo().set({label:B,icon:y});
}this.setCurrent(A);
A.setOpener(z);
},__eu:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!D){return;
}var E=this.getCurrent();
if(E&&(D==E||qx.ui.core.Widget.contains(E,D))){return;
}if(D&&C&&qx.ui.core.Widget.contains(C,D)){return;
}if(E&&!D){this.setCurrent(null);
}else{this.resetCurrent();
}},__ev:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&G==F.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,m,this.__et,this,true);
this._disposeObjects(h,d,f);
this.__el=null;
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
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var j="qx.debug",i="decorator",h="qxType",g="",f="qx.ui.core.DecoratorFactory",e="qx.ui.core.DecoratorFactory[",d="$$nopool$$",c="] ",b="keys: ",a=", elements: ";
qx.Class.define(f,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cM={};
},statics:{MAX_SIZE:15,__ew:d},members:{__cM:null,getDecoratorElement:function(k){var p=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(k)){var n=k;
var m=qx.theme.manager.Decoration.getInstance().resolve(k);
}else{var n=p.__ew;
m=k;
}var o=this.__cM;

if(o[n]&&o[n].length>0){var l=o[n].pop();
}else{var l=this._createDecoratorElement(m,n);
}l.$$pooled=false;
return l;
},poolDecorator:function(q){if(!q||q.$$pooled||q.isDisposed()){return;
}var t=qx.ui.core.DecoratorFactory;
var r=q.getId();

if(r==t.__ew){q.dispose();
return;
}var s=this.__cM;

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

for(var z in this.__cM){x+=1;
y+=this.__cM[z].length;
}return [e,this.$$hash,c,b,x,a,y].join(g);
},"false":function(){return qx.core.Object.prototype.toString.call(this);
}})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var B=this.__cM;

for(var A in B){qx.util.DisposeUtil.disposeArray(B,A);
}}this.__cM=null;
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__ex={};
this.__ey=qx.lang.Function.bind(this.__eC,this);
this.__ez=false;
},members:{__eA:null,__eB:null,__ex:null,__ez:null,__ey:null,schedule:function(c){if(this.__eA==null){this.__eA=window.setTimeout(this.__ey,0);
}var d=c.toHashCode();
if(this.__eB&&this.__eB[d]){return;
}this.__ex[d]=c;
this.__ez=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__eB&&this.__eB[f]){this.__eB[f]=null;
return;
}delete this.__ex[f];
if(qx.lang.Object.isEmpty(this.__ex)&&this.__eA!=null){window.clearTimeout(this.__eA);
this.__eA=null;
}},__eC:qx.event.GlobalError.observeMethod(function(){this.__eA=null;
while(this.__ez){this.__eB=qx.lang.Object.clone(this.__ex);
this.__ex={};
this.__ez=false;

for(var h in this.__eB){var g=this.__eB[h];

if(g){this.__eB[h]=null;
g.call();
}}}this.__eB=null;
})},destruct:function(){if(this.__eA!=null){window.clearTimeout(this.__eA);
}this.__ey=this.__ex=null;
}});
})();
(function(){var b="qx.util.DeferredCall",a="qx.debug";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c,d){qx.core.Object.call(this);
this.__bD=c;
this.__bE=d||null;
this.__eD=qx.util.DeferredCallManager.getInstance();
},members:{__bD:null,__bE:null,__eD:null,cancel:function(){this.__eD.cancel(this);
},schedule:function(){this.__eD.schedule(this);
},call:function(){if(qx.core.Environment.get(a)){var e=this.__bE;

if(e&&e.isDisposed&&e.isDisposed()){this.warn("The context object '"+e+"' of the defered call '"+this+"'is already disposed.");
}}this.__bE?this.__bD.apply(this.__bE):this.__bD();
}},destruct:function(){this.cancel();
this.__bE=this.__bD=this.__eD=null;
}});
})();
(function(){var m="element",k="qx.debug",j="qxSelectable",h="off",g="engine.name",f="on",d="text",c="': ",b="Invalid context for callback.",a="Invalid capture flag.",R="div",Q="'",P="Invalid event type.",O="Invalid callback function",N="",M="mshtml",L="none",K="scroll",J="|bubble|",I="qx.html.Element",t="|capture|",u="focus",r="Failed to add event listener for type '",s="blur",p="deactivate",q="capture",n="userSelect",o=" from the target '",v="-moz-none",w="visible",B="releaseCapture",A="__fa",D="Failed to remove event listener for type '",C="tabIndex",F="qx.html.Iframe",E="activate",z="MozUserSelect",H=" to the target '",G="hidden";
qx.Class.define(I,{extend:qx.core.Object,construct:function(S,T,U){qx.core.Object.call(this);
this.__eE=S||R;
this.__eF=T||null;
this.__eG=U||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__eH:{},_scheduleFlush:function(V){qx.html.Element.__fl.schedule();
},flush:function(){var bh;

if(qx.core.Environment.get(k)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var Y=this.__eI();
var X=Y.getFocus();

if(X&&this.__eM(X)){Y.blur(X);
}var bo=Y.getActive();

if(bo&&this.__eM(bo)){qx.bom.Element.deactivate(bo);
}var bc=this.__eK();

if(bc&&this.__eM(bc)){qx.bom.Element.releaseCapture(bc);
}var bi=[];
var bj=this._modified;

for(var bg in bj){bh=bj[bg];
if(bh.__fe()||bh.classname==F){if(bh.__eN&&qx.dom.Hierarchy.isRendered(bh.__eN)){bi.push(bh);
}else{if(qx.core.Environment.get(k)){if(this.DEBUG){bh.debug("Flush invisible element");
}}bh.__fd();
}delete bj[bg];
}}
for(var i=0,l=bi.length;i<l;i++){bh=bi[i];

if(qx.core.Environment.get(k)){if(this.DEBUG){bh.debug("Flush rendered element");
}}bh.__fd();
}var be=this._visibility;

for(var bg in be){bh=be[bg];
var bk=bh.__eN;

if(!bk){delete be[bg];
continue;
}
if(qx.core.Environment.get(k)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+bh.__eP);
}}if(!bh.$$disposed){bk.style.display=bh.__eP?N:L;
if((qx.core.Environment.get(g)==M)){if(!(document.documentMode>=8)){bk.style.visibility=bh.__eP?w:G;
}}}delete be[bg];
}var scroll=this._scroll;

for(var bg in scroll){bh=scroll[bg];
var bp=bh.__eN;

if(bp&&bp.offsetWidth){var bb=true;
if(bh.__eS!=null){bh.__eN.scrollLeft=bh.__eS;
delete bh.__eS;
}if(bh.__eT!=null){bh.__eN.scrollTop=bh.__eT;
delete bh.__eT;
}var bl=bh.__eQ;

if(bl!=null){var bf=bl.element.getDomElement();

if(bf&&bf.offsetWidth){qx.bom.element.Scroll.intoViewX(bf,bp,bl.align);
delete bh.__eQ;
}else{bb=false;
}}var bm=bh.__eR;

if(bm!=null){var bf=bm.element.getDomElement();

if(bf&&bf.offsetWidth){qx.bom.element.Scroll.intoViewY(bf,bp,bm.align);
delete bh.__eR;
}else{bb=false;
}}if(bb){delete scroll[bg];
}}}var ba={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bn=this._actions[i];
var bk=bn.element.__eN;

if(!bk||!ba[bn.type]&&!bn.element.__fe()){continue;
}var bd=bn.args;
bd.unshift(bk);
qx.bom.Element[bn.type].apply(qx.bom.Element,bd);
}this._actions=[];
for(var bg in this.__eH){var W=this.__eH[bg];
var bp=W.element.__eN;

if(bp){qx.bom.Selection.set(bp,W.start,W.end);
delete this.__eH[bg];
}}qx.event.handler.Appear.refresh();
},__eI:function(){if(!this.__eJ){var bq=qx.event.Registration.getManager(window);
this.__eJ=bq.getHandler(qx.event.handler.Focus);
}return this.__eJ;
},__eK:function(){if(!this.__eL){var br=qx.event.Registration.getManager(window);
this.__eL=br.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__eL.getCaptureElement();
},__eM:function(bs){var bt=qx.core.ObjectRegistry.fromHashCode(bs.$$element);
return bt&&!bt.__fe();
}},members:{__eE:null,__eN:null,__cX:false,__eO:true,__eP:true,__eQ:null,__eR:null,__eS:null,__eT:null,__eU:null,__eV:null,__eW:null,__eF:null,__eG:null,__eX:null,__eY:null,__fa:null,__fb:null,__fc:null,_scheduleChildrenUpdate:function(){if(this.__fb){return;
}this.__fb=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__eE);
},__fd:function(){if(qx.core.Environment.get(k)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var length;
var bu=this.__fa;

if(bu){length=bu.length;
var bv;

for(var i=0;i<length;i++){bv=bu[i];

if(bv.__eP&&bv.__eO&&!bv.__eN){bv.__fd();
}}}
if(!this.__eN){this.__eN=this._createDomElement();
this.__eN.$$element=this.$$hash;
this._copyData(false);

if(bu&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__fb){this._syncChildren();
}}delete this.__fb;
},_insertChildren:function(){var bw=this.__fa;
var length=bw.length;
var by;

if(length>2){var bx=document.createDocumentFragment();

for(var i=0;i<length;i++){by=bw[i];

if(by.__eN&&by.__eO){bx.appendChild(by.__eN);
}}this.__eN.appendChild(bx);
}else{var bx=this.__eN;

for(var i=0;i<length;i++){by=bw[i];

if(by.__eN&&by.__eO){bx.appendChild(by.__eN);
}}}},_syncChildren:function(){var bI=qx.core.ObjectRegistry;
var bz=this.__fa;
var bG=bz.length;
var bA;
var bE;
var bC=this.__eN;
var bF=bC.childNodes;
var bB=0;
var bD;

if(qx.core.Environment.get(k)){var bH=0;
}for(var i=bF.length-1;i>=0;i--){bD=bF[i];
bE=bI.fromHashCode(bD.$$element);

if(!bE||!bE.__eO||bE.__fc!==this){bC.removeChild(bD);

if(qx.core.Environment.get(k)){bH++;
}}}for(var i=0;i<bG;i++){bA=bz[i];
if(bA.__eO){bE=bA.__eN;
bD=bF[bB];

if(!bE){continue;
}if(bE!=bD){if(bD){bC.insertBefore(bE,bD);
}else{bC.appendChild(bE);
}
if(qx.core.Environment.get(k)){bH++;
}}bB++;
}}if(qx.core.Environment.get(k)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+bH+" operations");
}}},_copyData:function(bJ){var bN=this.__eN;
var bM=this.__eG;

if(bM){var bK=qx.bom.element.Attribute;

for(var bO in bM){bK.set(bN,bO,bM[bO]);
}}var bM=this.__eF;

if(bM){var bL=qx.bom.element.Style;

if(bJ){bL.setStyles(bN,bM);
}else{bL.setCss(bN,bL.compile(bM));
}}var bM=this.__eX;

if(bM){for(var bO in bM){this._applyProperty(bO,bM[bO]);
}}var bM=this.__eY;

if(bM){qx.event.Registration.getManager(bN).importListeners(bN,bM);
delete this.__eY;
}},_syncData:function(){var bT=this.__eN;
var bS=qx.bom.element.Attribute;
var bQ=qx.bom.element.Style;
var bR=this.__eV;

if(bR){var bW=this.__eG;

if(bW){var bU;

for(var bV in bR){bU=bW[bV];

if(bU!==undefined){bS.set(bT,bV,bU);
}else{bS.reset(bT,bV);
}}}this.__eV=null;
}var bR=this.__eU;

if(bR){var bW=this.__eF;

if(bW){var bP={};

for(var bV in bR){bP[bV]=bW[bV];
}bQ.setStyles(bT,bP);
}this.__eU=null;
}var bR=this.__eW;

if(bR){var bW=this.__eX;

if(bW){var bU;

for(var bV in bR){this._applyProperty(bV,bW[bV]);
}}this.__eW=null;
}},__fe:function(){var bX=this;
while(bX){if(bX.__cX){return true;
}
if(!bX.__eO||!bX.__eP){return false;
}bX=bX.__fc;
}return false;
},__ff:function(bY){if(bY.__fc===this){throw new Error("Child is already in: "+bY);
}
if(bY.__cX){throw new Error("Root elements could not be inserted into other ones.");
}if(bY.__fc){bY.__fc.remove(bY);
}bY.__fc=this;
if(!this.__fa){this.__fa=[];
}if(this.__eN){this._scheduleChildrenUpdate();
}},__fg:function(ca){if(ca.__fc!==this){throw new Error("Has no child: "+ca);
}if(this.__eN){this._scheduleChildrenUpdate();
}delete ca.__fc;
},__fh:function(cb){if(cb.__fc!==this){throw new Error("Has no child: "+cb);
}if(this.__eN){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__fa||null;
},getChild:function(cc){var cd=this.__fa;
return cd&&cd[cc]||null;
},hasChildren:function(){var ce=this.__fa;
return ce&&ce[0]!==undefined;
},indexOf:function(cf){var cg=this.__fa;
return cg?cg.indexOf(cf):-1;
},hasChild:function(ch){var ci=this.__fa;
return ci&&ci.indexOf(ch)!==-1;
},add:function(cj){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__ff(arguments[i]);
}this.__fa.push.apply(this.__fa,arguments);
}else{this.__ff(cj);
this.__fa.push(cj);
}return this;
},addAt:function(ck,cl){this.__ff(ck);
qx.lang.Array.insertAt(this.__fa,ck,cl);
return this;
},remove:function(cm){var cn=this.__fa;

if(!cn){return;
}
if(arguments[1]){var co;

for(var i=0,l=arguments.length;i<l;i++){co=arguments[i];
this.__fg(co);
qx.lang.Array.remove(cn,co);
}}else{this.__fg(cm);
qx.lang.Array.remove(cn,cm);
}return this;
},removeAt:function(cp){var cq=this.__fa;

if(!cq){throw new Error("Has no children!");
}var cr=cq[cp];

if(!cr){throw new Error("Has no child at this position!");
}this.__fg(cr);
qx.lang.Array.removeAt(this.__fa,cp);
return this;
},removeAll:function(){var cs=this.__fa;

if(cs){for(var i=0,l=cs.length;i<l;i++){this.__fg(cs[i]);
}cs.length=0;
}return this;
},getParent:function(){return this.__fc||null;
},insertInto:function(parent,ct){parent.__ff(this);

if(ct==null){parent.__fa.push(this);
}else{qx.lang.Array.insertAt(this.__fa,this,ct);
}return this;
},insertBefore:function(cu){var parent=cu.__fc;
parent.__ff(this);
qx.lang.Array.insertBefore(parent.__fa,this,cu);
return this;
},insertAfter:function(cv){var parent=cv.__fc;
parent.__ff(this);
qx.lang.Array.insertAfter(parent.__fa,this,cv);
return this;
},moveTo:function(cw){var parent=this.__fc;
parent.__fh(this);
var cx=parent.__fa.indexOf(this);

if(cx===cw){throw new Error("Could not move to same index!");
}else if(cx<cw){cw--;
}qx.lang.Array.removeAt(parent.__fa,cx);
qx.lang.Array.insertAt(parent.__fa,this,cw);
return this;
},moveBefore:function(cy){var parent=this.__fc;
return this.moveTo(parent.__fa.indexOf(cy));
},moveAfter:function(cz){var parent=this.__fc;
return this.moveTo(parent.__fa.indexOf(cz)+1);
},free:function(){var parent=this.__fc;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__fa){return;
}parent.__fg(this);
qx.lang.Array.remove(parent.__fa,this);
return this;
},getDomElement:function(){return this.__eN||null;
},getNodeName:function(){return this.__eE;
},setNodeName:function(name){this.__eE=name;
},setRoot:function(cA){this.__cX=cA;
},useMarkup:function(cB){if(this.__eN){throw new Error("Could not overwrite existing element!");
}if((qx.core.Environment.get(g)==M)){var cC=document.createElement(R);
}else{var cC=qx.bom.Element.getHelperElement();
}cC.innerHTML=cB;
this.useElement(cC.firstChild);
return this.__eN;
},useElement:function(cD){if(this.__eN){throw new Error("Could not overwrite existing element!");
}this.__eN=cD;
this.__eN.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var cF=this.getAttribute(C);

if(cF>=1){return true;
}var cE=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(cF>=0&&cE[this.__eE]){return true;
}return false;
},setSelectable:qx.core.Environment.select(g,{"webkit":function(cG){this.setAttribute(j,cG?f:h);
this.setStyle(n,cG?d:L);
},"gecko":function(cH){this.setAttribute(j,cH?f:h);
this.setStyle(z,cH?d:v);
},"default":function(cI){this.setAttribute(j,cI?f:h);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__eE];
},include:function(){if(this.__eO){return;
}delete this.__eO;

if(this.__fc){this.__fc._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__eO){return;
}this.__eO=false;

if(this.__fc){this.__fc._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__eO===true;
},show:function(){if(this.__eP){return;
}
if(this.__eN){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}if(this.__fc){this.__fc._scheduleChildrenUpdate();
}delete this.__eP;
},hide:function(){if(!this.__eP){return;
}
if(this.__eN){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}this.__eP=false;
},isVisible:function(){return this.__eP===true;
},scrollChildIntoViewX:function(cJ,cK,cL){var cM=this.__eN;
var cN=cJ.getDomElement();

if(cL!==false&&cM&&cM.offsetWidth&&cN&&cN.offsetWidth){qx.bom.element.Scroll.intoViewX(cN,cM,cK);
}else{this.__eQ={element:cJ,align:cK};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eS;
},scrollChildIntoViewY:function(cO,cP,cQ){var cR=this.__eN;
var cS=cO.getDomElement();

if(cQ!==false&&cR&&cR.offsetWidth&&cS&&cS.offsetWidth){qx.bom.element.Scroll.intoViewY(cS,cR,cP);
}else{this.__eR={element:cO,align:cP};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eT;
},scrollToX:function(x,cT){var cU=this.__eN;

if(cT!==true&&cU&&cU.offsetWidth){cU.scrollLeft=x;
delete this.__eS;
}else{this.__eS=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eQ;
},getScrollX:function(){var cV=this.__eN;

if(cV){return cV.scrollLeft;
}return this.__eS||0;
},scrollToY:function(y,cW){var cX=this.__eN;

if(cW!==true&&cX&&cX.offsetWidth){cX.scrollTop=y;
delete this.__eT;
}else{this.__eT=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eR;
},getScrollY:function(){var cY=this.__eN;

if(cY){return cY.scrollTop;
}return this.__eT||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(K,this.__fj,this);
},enableScrolling:function(){this.removeListener(K,this.__fj,this);
},__fi:null,__fj:function(e){if(!this.__fi){this.__fi=true;
this.__eN.scrollTop=0;
this.__eN.scrollLeft=0;
delete this.__fi;
}},getTextSelection:function(){var da=this.__eN;

if(da){return qx.bom.Selection.get(da);
}return null;
},getTextSelectionLength:function(){var dc=this.__eN;

if(dc){return qx.bom.Selection.getLength(dc);
}return null;
},getTextSelectionStart:function(){var dd=this.__eN;

if(dd){return qx.bom.Selection.getStart(dd);
}return null;
},getTextSelectionEnd:function(){var de=this.__eN;

if(de){return qx.bom.Selection.getEnd(de);
}return null;
},setTextSelection:function(df,dg){var dh=this.__eN;

if(dh){qx.bom.Selection.set(dh,df,dg);
return;
}qx.html.Element.__eH[this.toHashCode()]={element:this,start:df,end:dg};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var di=this.__eN;

if(di){qx.bom.Selection.clear(di);
}delete qx.html.Element.__eH[this.toHashCode()];
},__fk:function(dj,dk){var dl=qx.html.Element._actions;
dl.push({type:dj,element:this,args:dk||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__fk(u);
},blur:function(){this.__fk(s);
},activate:function(){this.__fk(E);
},deactivate:function(){this.__fk(p);
},capture:function(dm){this.__fk(q,[dm!==false]);
},releaseCapture:function(){this.__fk(B);
},setStyle:function(dn,dp,dq){if(!this.__eF){this.__eF={};
}
if(this.__eF[dn]==dp){return;
}
if(dp==null){delete this.__eF[dn];
}else{this.__eF[dn]=dp;
}if(this.__eN){if(dq){qx.bom.element.Style.set(this.__eN,dn,dp);
return this;
}if(!this.__eU){this.__eU={};
}this.__eU[dn]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(dr,ds){var dt=qx.bom.element.Style;

if(!this.__eF){this.__eF={};
}
if(this.__eN){if(!this.__eU){this.__eU={};
}
for(var dv in dr){var du=dr[dv];

if(this.__eF[dv]==du){continue;
}
if(du==null){delete this.__eF[dv];
}else{this.__eF[dv]=du;
}if(ds){dt.set(this.__eN,dv,du);
continue;
}this.__eU[dv]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var dv in dr){var du=dr[dv];

if(this.__eF[dv]==du){continue;
}
if(du==null){delete this.__eF[dv];
}else{this.__eF[dv]=du;
}}}return this;
},removeStyle:function(dw,dx){this.setStyle(dw,null,dx);
},getStyle:function(dy){return this.__eF?this.__eF[dy]:null;
},getAllStyles:function(){return this.__eF||null;
},setAttribute:function(dz,dA,dB){if(!this.__eG){this.__eG={};
}
if(this.__eG[dz]==dA){return;
}
if(dA==null){delete this.__eG[dz];
}else{this.__eG[dz]=dA;
}if(this.__eN){if(dB){qx.bom.element.Attribute.set(this.__eN,dz,dA);
return this;
}if(!this.__eV){this.__eV={};
}this.__eV[dz]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(dC,dD){for(var dE in dC){this.setAttribute(dE,dC[dE],dD);
}return this;
},removeAttribute:function(dF,dG){this.setAttribute(dF,null,dG);
},getAttribute:function(dH){return this.__eG?this.__eG[dH]:null;
},_applyProperty:function(name,dI){},_setProperty:function(dJ,dK,dL){if(!this.__eX){this.__eX={};
}
if(this.__eX[dJ]==dK){return;
}
if(dK==null){delete this.__eX[dJ];
}else{this.__eX[dJ]=dK;
}if(this.__eN){if(dL){this._applyProperty(dJ,dK);
return this;
}if(!this.__eW){this.__eW={};
}this.__eW[dJ]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(dM,dN){this._setProperty(dM,null,dN);
},_getProperty:function(dO){var dP=this.__eX;

if(!dP){return null;
}var dQ=dP[dO];
return dQ==null?null:dQ;
},addListener:function(dR,dS,self,dT){if(this.$$disposed){return null;
}
if(qx.core.Environment.get(k)){var dU=r+dR+Q+H+this+c;
this.assertString(dR,dU+P);
this.assertFunction(dS,dU+O);

if(self!==undefined){this.assertObject(self,b);
}
if(dT!==undefined){this.assertBoolean(dT,a);
}}
if(this.__eN){return qx.event.Registration.addListener(this.__eN,dR,dS,self,dT);
}
if(!this.__eY){this.__eY={};
}
if(dT==null){dT=false;
}var dV=qx.event.Manager.getNextUniqueId();
var dW=dR+(dT?t:J)+dV;
this.__eY[dW]={type:dR,listener:dS,self:self,capture:dT,unique:dV};
return dW;
},removeListener:function(dX,dY,self,ea){if(this.$$disposed){return null;
}
if(qx.core.Environment.get(k)){var eb=D+dX+Q+o+this+c;
this.assertString(dX,eb+P);
this.assertFunction(dY,eb+O);

if(self!==undefined){this.assertObject(self,b);
}
if(ea!==undefined){this.assertBoolean(ea,a);
}}
if(this.__eN){qx.event.Registration.removeListener(this.__eN,dX,dY,self,ea);
}else{var ed=this.__eY;
var ec;

if(ea==null){ea=false;
}
for(var ee in ed){ec=ed[ee];
if(ec.listener===dY&&ec.self===self&&ec.capture===ea&&ec.type===dX){delete ed[ee];
break;
}}}return this;
},removeListenerById:function(ef){if(this.$$disposed){return null;
}
if(this.__eN){qx.event.Registration.removeListenerById(this.__eN,ef);
}else{delete this.__eY[ef];
}return this;
},hasListener:function(eg,eh){if(this.$$disposed){return false;
}
if(this.__eN){return qx.event.Registration.hasListener(this.__eN,eg,eh);
}var ej=this.__eY;
var ei;

if(eh==null){eh=false;
}
for(var ek in ej){ei=ej[ek];
if(ei.capture===eh&&ei.type===eg){return true;
}}return false;
}},defer:function(em){em.__fl=new qx.util.DeferredCall(em.flush,em);
},destruct:function(){var en=this.__eN;

if(en){qx.event.Registration.getManager(en).removeAllListeners(en);
en.$$element=N;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__fc;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(A);
this.__eG=this.__eF=this.__eY=this.__eX=this.__eV=this.__eU=this.__eW=this.__eN=this.__fc=this.__eQ=this.__eR=null;
}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__eD=f;
this.__cu=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eD:null,__cu:null,__fm:null,__fn:null,__fo:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__fo=qx.lang.Function.listener(this._onNative,this);
this.__fm=qx.bom.Event.supportsEvent(this.__cu,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__cu,this.__fm,this.__fo);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cu,this.__fm,this.__fo);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__fn!=p){this.__fn=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__cu,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__eD=this.__cu=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__fp:null,__fq:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__fp=d;
this.__fq=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__fp=this.__fp;
g.__fq=this.__fq;
return g;
},getOrientation:function(){return this.__fp;
},isLandscape:function(){return this.__fq==c;
},isPortrait:function(){return this.__fq==a;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__eD=b;
this.__cu=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eD:null,__cu:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__eD=this.__cu=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",d="mshtml",j="qx.event.handler.Touch",h="useraction",c="swipe",b="qx.mobile.nativescroll",g="webkit",f="tap",i="x",a="y";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__eD=u;
this.__cu=u.getWindow();
this.__cX=this.__cu.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__fr:null,__fs:null,__eD:null,__cu:null,__cX:null,__ft:null,__fu:null,__fv:null,__fw:null,__fx:false,__fy:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__fz:function(D){var E=qx.bom.Event.getTarget(D);
if((qx.core.Environment.get(n)==g)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__fA:function(F,G,H,I){if(!H){H=this.__fz(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__cu,h,qx.event.type.Data,[G]);
},__fB:function(J,K,L){if(!L){L=this.__fz(J);
}var K=K||J.type;

if(K==r){this.__fC(J,L);
}else if(K==q){this.__fD(J,L);
}else if(K==s){this.__fE(J,L);
}},__fC:function(M,N){var O=M.changedTouches[0];
this.__ft=O.screenX;
this.__fu=O.screenY;
this.__fv=new Date().getTime();
this.__fw=M.changedTouches.length===1;
},__fD:function(P,Q){if(this.__fw&&P.changedTouches.length>1){this.__fw=false;
}},__fE:function(R,S){if(this.__fw){var T=R.changedTouches[0];
var V={x:T.screenX-this.__ft,y:T.screenY-this.__fu};
var W=qx.event.handler.Touch;

if(this.__fy==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__fA(R,f,S,qx.event.type.Tap);
}else{var U=this.__fF(R,S,V);

if(U){R.swipe=U;
this.__fA(R,c,S,qx.event.type.Swipe);
}}}},__fF:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__fv;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__fv,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__fG:qx.core.Environment.select(t,{"true":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__fH(bi)){this.__fx=true;
}else if(bj==s){this.__fx=false;
}var bm=this.__fI(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__fH:qx.core.Environment.select(t,{"true":function(bn){if((qx.core.Environment.get(n)==d)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__fI:qx.core.Environment.select(t,{"true":function(bp){var bq=this.__fz(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__fr=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cX,r,this.__fr);
Event.addNativeListener(this.__cX,q,this.__fr);
Event.addNativeListener(this.__cX,s,this.__fr);
Event.addNativeListener(this.__cX,m,this.__fr);
},_initMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){this.__fs=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cX,k,this.__fs);
Event.addNativeListener(this.__cX,o,this.__fs);
Event.addNativeListener(this.__cX,l,this.__fs);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cX,r,this.__fr);
Event.removeNativeListener(this.__cX,q,this.__fr);
Event.removeNativeListener(this.__cX,s,this.__fr);
Event.removeNativeListener(this.__cX,m,this.__fr);
},_stopMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cX,k,this.__fs);
Event.removeNativeListener(this.__cX,o,this.__fs);
Event.removeNativeListener(this.__cX,l,this.__fs);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Environment.select(t,{"true":qx.event.GlobalError.observeMethod(function(bs){if(!qx.core.Environment.get(p)){if(bs.type==o&&!this.__fx){return;
}var bt=this.__fG(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__fy=this.__fz(bu);
}this.__fA(bu,bv);
this.__fB(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__eD=this.__cu=this.__cX=this.__fy=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.core.Environment.get(p)){if(qx.core.Environment.get(b)==false){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
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
},isMultiTouch:function(){return this.__fK().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__fJ(f).pageX;
},getDocumentTop:function(g){return this.__fJ(g).pageY;
},getScreenLeft:function(h){return this.__fJ(h).screenX;
},getScreenTop:function(j){return this.__fJ(j).screenY;
},getViewportLeft:function(k){return this.__fJ(k).clientX;
},getViewportTop:function(l){return this.__fJ(l).clientY;
},getIdentifier:function(m){return this.__fJ(m).identifier;
},__fJ:function(n){n=n==null?0:n;
return this.__fK()[n];
},__fK:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
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
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__eD=d;
this.__fL={};
qx.event.handler.Appear.__fM[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fM:{},refresh:function(){var e=this.__fM;

for(var f in e){e[f].refresh();
}}},members:{__eD:null,__fL:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__fL;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__fL;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__fL;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__eD.dispatchEvent(w,t);
}}}},destruct:function(){this.__eD=this.__fL=null;
delete qx.event.handler.Appear.__fM[this.$$hash];
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
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var t="mouseup",s="engine.name",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="os.name",l="mouseover",k="mouseout",d="ios",j="mousemove",g="on",c="engine.version",b="useraction",f="webkit",e="gecko",h="DOMMouseScroll",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__eD=u;
this.__cu=u.getWindow();
this.__cX=this.__cu.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fN:null,__fO:null,__fP:null,__fQ:null,__fR:null,__eD:null,__cu:null,__cX:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===d?function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===d?function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__fA:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__cu,b,qx.event.type.Data,[E||D.type]);
},__fS:function(){var H=[this.__cu,this.__cX,this.__cX.body];
var I=this.__cu;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__fN=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cX,q,this.__fN);
Event.addNativeListener(this.__cX,t,this.__fN);
Event.addNativeListener(this.__cX,r,this.__fN);
Event.addNativeListener(this.__cX,n,this.__fN);
Event.addNativeListener(this.__cX,p,this.__fN);
},_initMoveObserver:function(){this.__fO=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cX,j,this.__fO);
Event.addNativeListener(this.__cX,l,this.__fO);
Event.addNativeListener(this.__cX,k,this.__fO);
},_initWheelObserver:function(){this.__fP=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__fS();
qx.bom.Event.addNativeListener(J.target,J.type,this.__fP);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cX,q,this.__fN);
Event.removeNativeListener(this.__cX,t,this.__fN);
Event.removeNativeListener(this.__cX,r,this.__fN);
Event.removeNativeListener(this.__cX,n,this.__fN);
Event.removeNativeListener(this.__cX,p,this.__fN);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cX,j,this.__fO);
Event.removeNativeListener(this.__cX,l,this.__fO);
Event.removeNativeListener(this.__cX,k,this.__fO);
},_stopWheelObserver:function(){var K=this.__fS();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__fP);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__fA(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__fT){this.__fT(M,N,O);
}
if(this.__fV){this.__fV(M,N,O);
}this.__fA(M,N,O);

if(this.__fU){this.__fU(M,N,O);
}
if(this.__fW){this.__fW(M,N,O);
}this.__fQ=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__fA(P,o);
}),__fT:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__fA(Q,t,S);
}}},"default":null}),__fU:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__fA(T,p,V);
}},"default":null}),__fV:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__fQ==r){this.__fA(W,q,Y);
}else if(X==n){this.__fA(W,r,Y);
}},"default":null}),__fW:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__fR=bc;
break;
case t:if(bc!==this.__fR){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__fR);
this.__fA(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__eD=this.__cu=this.__cX=this.__fR=null;
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
},__fX:{0:j,2:i,1:h},__fY:{1:j,2:i,4:h},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:return i;
case f:if(qx.core.Environment.get(b)===a&&qx.core.Environment.get(c)<9){return j;
}default:if(this._native.target!==undefined){return this.__fX[this._native.button]||g;
}else{return this.__fY[this._native.button]||g;
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
},__ga:function(m){var n=Math.abs(m);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>n){qx.event.type.MouseWheel.MINSCROLL=n;
this.__gb();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<n){qx.event.type.MouseWheel.MAXSCROLL=n;
this.__gb();
}if(qx.event.type.MouseWheel.MAXSCROLL===n&&qx.event.type.MouseWheel.MINSCROLL===n){return 2*(m/n);
}var o=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var p=(m/o)*Math.log(o)*qx.event.type.MouseWheel.FACTOR;
return p<0?Math.min(p,-1):Math.max(p,1);
},__gb:function(){var q=qx.event.type.MouseWheel.MAXSCROLL||0;
var t=qx.event.type.MouseWheel.MINSCROLL||q;

if(q<=t){return;
}var r=q-t;
var s=(q/r)*Math.log(r);

if(s==0){s=1;
}qx.event.type.MouseWheel.FACTOR=6/s;
},getWheelDelta:function(u){var e=this._native;
if(u===undefined){if(v===undefined){var v=-e.wheelDelta;

if(e.wheelDelta===undefined){v=e.detail;
}}return this.__gc(v);
}if(u===i){var x=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__gc(-e.wheelDeltaX):0;
}}else{if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__gc(e.detail);
}}return x;
}if(u===a){var y=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__gc(-e.wheelDeltaY):0;
}else{y=this.__gc(-e.wheelDelta);
}}else{if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__gc(e.detail);
}}return y;
}return 0;
},__gc:function(w){if(qx.core.Environment.get(f)){return this.__ga(w);
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
(function(){var f="engine.name",e="qx.dom.Hierarchy",d="previousSibling",c="*",b="nextSibling",a="parentNode";
qx.Class.define(e,{statics:{getNodeIndex:function(g){var h=0;

while(g&&(g=g.previousSibling)){h++;
}return h;
},getElementIndex:function(i){var j=0;
var k=qx.dom.Node.ELEMENT;

while(i&&(i=i.previousSibling)){if(i.nodeType==k){j++;
}}return j;
},getNextElementSibling:function(l){while(l&&(l=l.nextSibling)&&!qx.dom.Node.isElement(l)){continue;
}return l||null;
},getPreviousElementSibling:function(m){while(m&&(m=m.previousSibling)&&!qx.dom.Node.isElement(m)){continue;
}return m||null;
},contains:qx.core.Environment.select(f,{"webkit|mshtml|opera":function(n,o){if(qx.dom.Node.isDocument(n)){var p=qx.dom.Node.getDocument(o);
return n&&p==n;
}else if(qx.dom.Node.isDocument(o)){return false;
}else{return n.contains(o);
}},"gecko":function(q,r){return !!(q.compareDocumentPosition(r)&16);
},"default":function(s,t){while(t){if(s==t){return true;
}t=t.parentNode;
}return false;
}}),isRendered:qx.core.Environment.select(f,{"mshtml":function(u){if(!u.parentNode||!u.offsetParent){return false;
}var v=u.ownerDocument||u.document;
return v.body.contains(u);
},"gecko":function(w){var x=w.ownerDocument||w.document;
return !!(x.compareDocumentPosition(w)&16);
},"default":function(y){if(!y.parentNode||!y.offsetParent){return false;
}var z=y.ownerDocument||y.document;
return z.body.contains(y);
}}),isDescendantOf:function(A,B){return this.contains(B,A);
},getCommonParent:qx.core.Environment.select(f,{"mshtml|opera":function(C,D){if(C===D){return C;
}
while(C&&qx.dom.Node.isElement(C)){if(C.contains(D)){return C;
}C=C.parentNode;
}return null;
},"default":function(E,F){if(E===F){return E;
}var G={};
var J=qx.core.ObjectRegistry;
var I,H;

while(E||F){if(E){I=J.toHashCode(E);

if(G[I]){return G[I];
}G[I]=E;
E=E.parentNode;
}
if(F){H=J.toHashCode(F);

if(G[H]){return G[H];
}G[H]=F;
F=F.parentNode;
}}return null;
}}),getAncestors:function(K){return this._recursivelyCollect(K,a);
},getChildElements:function(L){L=L.firstChild;

if(!L){return [];
}var M=this.getNextSiblings(L);

if(L.nodeType===1){M.unshift(L);
}return M;
},getDescendants:function(N){return qx.lang.Array.fromCollection(N.getElementsByTagName(c));
},getFirstDescendant:function(O){O=O.firstChild;

while(O&&O.nodeType!=1){O=O.nextSibling;
}return O;
},getLastDescendant:function(P){P=P.lastChild;

while(P&&P.nodeType!=1){P=P.previousSibling;
}return P;
},getPreviousSiblings:function(Q){return this._recursivelyCollect(Q,d);
},getNextSiblings:function(R){return this._recursivelyCollect(R,b);
},_recursivelyCollect:function(S,T){var U=[];

while(S=S[T]){if(S.nodeType==1){U.push(S);
}}return U;
},getSiblings:function(V){return this.getPreviousSiblings(V).reverse().concat(this.getNextSiblings(V));
},isEmpty:function(W){W=W.firstChild;

while(W){if(W.nodeType===qx.dom.Node.ELEMENT||W.nodeType===qx.dom.Node.TEXT){return false;
}W=W.nextSibling;
}return true;
},cleanWhitespace:function(X){var Y=X.firstChild;

while(Y){var ba=Y.nextSibling;

if(Y.nodeType==3&&!/\S/.test(Y.nodeValue)){X.removeChild(Y);
}Y=ba;
}}}});
})();
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="1",c="win",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__eD=by;
this.__cu=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__cX=this.__cu;
}else{this.__cX=this.__cu.document.documentElement;
}this.__gd={};
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
}}},members:{__ge:null,__eD:null,__cu:null,__cX:null,__gd:null,__gf:null,__gg:null,__gh:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__gi();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__eD.dispatchEvent(bL,event);
}if(this.__cu){qx.event.Registration.fireEvent(this.__cu,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__gi();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__eD.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__cu){qx.event.Registration.fireEvent(this.__cu,s,qx.event.type.Data,[bN]);
}},__gi:function(){var bR=this.__eD.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__eD.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__ge=qx.lang.Function.listener(this.__gj,this);
this.__gh=qx.lang.Function.listener(this.__gl,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cX,i,this.__ge);
Event.addNativeListener(this.__cX,m,this.__ge);
Event.addNativeListener(this.__cX,k,this.__gh);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cX,i,this.__ge);
Event.removeNativeListener(this.__cX,m,this.__ge);
Event.removeNativeListener(this.__cX,k,this.__gh);

for(var bU in (this.__gg||{})){var bT=this.__gg[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__gg);
},__gj:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__gd[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__gd[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==c){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__gd[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__gd[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__gk(ca.target,cd,ce);
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
}}this.__gd[ci]=ch;
}},"opera":function(cj){this.__gf=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__gk:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__gg){this.__gg={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__gg[co]){return;
}var self=this;
this.__gg[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__gl(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__gg[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__gl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

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
if(cB!=this.__gf){this._idealKeyHandler(0,this.__gf,cA,cz);
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
this.__gf=this.__eD=this.__cu=this.__cX=this.__gd=null;
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
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gm:null,__gn:null,__go:null,__gp:null,__gq:null,__gr:null,__gs:null,__gt:null,__gu:null,__gv:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
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
}},tryActivate:function(S){var T=this.__gJ(S);

if(T){this.setActive(T);
}},__fA:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__gw:function(){if(this._windowFocused){this._windowFocused=false;
this.__fA(this._window,null,g,false);
}},__gx:function(){if(!this._windowFocused){this._windowFocused=true;
this.__fA(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__gm=qx.lang.Function.listener(this.__gD,this);
this.__gn=qx.lang.Function.listener(this.__gE,this);
this.__go=qx.lang.Function.listener(this.__gC,this);
this.__gp=qx.lang.Function.listener(this.__gB,this);
this.__gq=qx.lang.Function.listener(this.__gy,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gm,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gn,true);
qx.bom.Event.addNativeListener(this._window,f,this.__go,true);
qx.bom.Event.addNativeListener(this._window,g,this.__gp,true);
qx.bom.Event.addNativeListener(this._window,y,this.__gq,true);
},"mshtml":function(){this.__gm=qx.lang.Function.listener(this.__gD,this);
this.__gn=qx.lang.Function.listener(this.__gE,this);
this.__gs=qx.lang.Function.listener(this.__gz,this);
this.__gt=qx.lang.Function.listener(this.__gA,this);
this.__gr=qx.lang.Function.listener(this.__gG,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gm);
qx.bom.Event.addNativeListener(this._document,h,this.__gn);
qx.bom.Event.addNativeListener(this._document,b,this.__gs);
qx.bom.Event.addNativeListener(this._document,a,this.__gt);
qx.bom.Event.addNativeListener(this._document,d,this.__gr);
},"webkit":function(){this.__gm=qx.lang.Function.listener(this.__gD,this);
this.__gn=qx.lang.Function.listener(this.__gE,this);
this.__gt=qx.lang.Function.listener(this.__gA,this);
this.__go=qx.lang.Function.listener(this.__gC,this);
this.__gp=qx.lang.Function.listener(this.__gB,this);
this.__gr=qx.lang.Function.listener(this.__gG,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gm,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gn,true);
qx.bom.Event.addNativeListener(this._document,d,this.__gr,false);
qx.bom.Event.addNativeListener(this._window,c,this.__gt,true);
qx.bom.Event.addNativeListener(this._window,f,this.__go,true);
qx.bom.Event.addNativeListener(this._window,g,this.__gp,true);
},"opera":function(){this.__gm=qx.lang.Function.listener(this.__gD,this);
this.__gn=qx.lang.Function.listener(this.__gE,this);
this.__gs=qx.lang.Function.listener(this.__gz,this);
this.__gt=qx.lang.Function.listener(this.__gA,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gm,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gn,true);
qx.bom.Event.addNativeListener(this._window,z,this.__gs,true);
qx.bom.Event.addNativeListener(this._window,c,this.__gt,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gm,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gn,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__go,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__gp,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__gq,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gm);
qx.bom.Event.removeNativeListener(this._document,h,this.__gn);
qx.bom.Event.removeNativeListener(this._document,b,this.__gs);
qx.bom.Event.removeNativeListener(this._document,a,this.__gt);
qx.bom.Event.removeNativeListener(this._document,d,this.__gr);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gm,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gn,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__gr,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__gt,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__go,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__gp,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gm,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gn,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__gs,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__gt,true);
}}),__gy:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__gK(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__gz:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__gx();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__gI(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__gx();

if(this.__gu){this.setFocus(this.__gu);
delete this.__gu;
}
if(this.__gv){this.setActive(this.__gv);
delete this.__gv;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__gK(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__gA:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__gw();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__gw();
this.__gu=this.getFocus();
this.__gv=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__gB:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__gw();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__gw();
this.__gu=this.getFocus();
this.__gv=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__gC:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__gx();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__gx();

if(this.__gu){this.setFocus(this.__gu);
delete this.__gu;
}
if(this.__gv){this.setActive(this.__gv);
delete this.__gv;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__gD:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__gI(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__gI(bB);

if(bA){if(!this.__gK(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__gK(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__gI(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__gI(bK);

if(!this.__gK(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__gE:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__gF(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__gF(bQ));
},"default":null})),__gF:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__gG:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__gK(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__gH:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__gI:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__gH(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__gJ:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__gK:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__fA(cg,cf,v,true);
}
if(cf){this.__fA(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__fA(ci,ch,a,true);
}
if(ch){this.__fA(ch,ci,b,true);
}if(ci){this.__fA(ci,ch,g,false);
}
if(ch){this.__fA(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__gL=null;
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
},"default":function(p){if(this.__gM(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__gM(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__gM(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__gM(A)){var F=qx.bom.Range.get();
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
}},"gecko|webkit":function(K){if(this.__gM(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__gM(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__gM(O)){var T=qx.bom.Range.get();
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
}},"gecko|webkit":function(Y){if(this.__gM(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__gM(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__gM:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
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
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Control",d="Shift",c="mousemove",b="move",a="mouseover",D="Alt",C="keyup",B="mouseup",A="keypress",z="dragend",y="on",x="mousedown",w="qxDraggable",v="Escape",u="drag",r="drop",s="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover",t="left";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(E){qx.core.Object.call(this);
this.__eD=E;
this.__cX=E.getWindow().document.documentElement;
this.__eD.addListener(this.__cX,x,this._onMouseDown,this);
this.__gX();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__eD:null,__cX:null,__gN:null,__gO:null,__gP:null,__gQ:null,__gR:null,__j:null,__gS:null,__gT:null,__gU:false,__gV:0,__gW:0,canHandleEvent:function(F,G){},registerEvent:function(H,I,J){},unregisterEvent:function(K,L,M){},addType:function(N){this.__gP[N]=true;
},addAction:function(O){this.__gQ[O]=true;
},supportsType:function(P){return !!this.__gP[P];
},supportsAction:function(Q){return !!this.__gQ[Q];
},getData:function(R){if(!this.__he||!this.__gN){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__gP[R]){throw new Error("Unsupported data type: "+R+"!");
}
if(!this.__j[R]){this.__gS=R;
this.__fA(q,this.__gO,this.__gN,false);
}
if(!this.__j[R]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__j[R]||null;
},getCurrentAction:function(){return this.__gT;
},addData:function(S,T){this.__j[S]=T;
},getCurrentType:function(){return this.__gS;
},isSessionActive:function(){return this.__gU;
},__gX:function(){this.__gP={};
this.__gQ={};
this.__gR={};
this.__j={};
},__gY:function(){if(this.__gO==null){return;
}var W=this.__gQ;
var U=this.__gR;
var V=null;

if(this.__he){if(U.Shift&&U.Control&&W.alias){V=k;
}else if(U.Shift&&U.Alt&&W.copy){V=j;
}else if(U.Shift&&W.move){V=b;
}else if(U.Alt&&W.alias){V=k;
}else if(U.Control&&W.copy){V=j;
}else if(W.move){V=b;
}else if(W.copy){V=j;
}else if(W.alias){V=k;
}}
if(V!=this.__gT){this.__gT=V;
this.__fA(o,this.__gO,this.__gN,false);
}},__fA:function(X,Y,ba,bb,bc){var be=qx.event.Registration;
var bd=be.createEvent(X,qx.event.type.Drag,[bb,bc]);

if(Y!==ba){bd.setRelatedTarget(ba);
}return be.dispatchEvent(Y,bd);
},__ha:function(bf){while(bf&&bf.nodeType==1){if(bf.getAttribute(w)==y){return bf;
}bf=bf.parentNode;
}return null;
},__hb:function(bg){while(bg&&bg.nodeType==1){if(bg.getAttribute(s)==y){return bg;
}bg=bg.parentNode;
}return null;
},__hc:function(){this.__gO=null;
this.__eD.removeListener(this.__cX,c,this._onMouseMove,this,true);
this.__eD.removeListener(this.__cX,B,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__gX();
},__hd:function(){if(this.__gU){this.__eD.removeListener(this.__cX,a,this._onMouseOver,this,true);
this.__eD.removeListener(this.__cX,h,this._onMouseOut,this,true);
this.__eD.removeListener(this.__cX,g,this._onKeyDown,this,true);
this.__eD.removeListener(this.__cX,C,this._onKeyUp,this,true);
this.__eD.removeListener(this.__cX,A,this._onKeyPress,this,true);
this.__fA(z,this.__gO,this.__gN,false);
this.__gU=false;
}this.__he=false;
this.__gN=null;
this.__hc();
},__he:false,_onWindowBlur:function(e){this.__hd();
},_onKeyDown:function(e){var bh=e.getKeyIdentifier();

switch(bh){case D:case f:case d:if(!this.__gR[bh]){this.__gR[bh]=true;
this.__gY();
}}},_onKeyUp:function(e){var bi=e.getKeyIdentifier();

switch(bi){case D:case f:case d:if(this.__gR[bi]){this.__gR[bi]=false;
this.__gY();
}}},_onKeyPress:function(e){var bj=e.getKeyIdentifier();

switch(bj){case v:this.__hd();
}},_onMouseDown:function(e){if(this.__gU||e.getButton()!==t){return;
}var bk=this.__ha(e.getTarget());

if(bk){this.__gV=e.getDocumentLeft();
this.__gW=e.getDocumentTop();
this.__gO=bk;
this.__eD.addListener(this.__cX,c,this._onMouseMove,this,true);
this.__eD.addListener(this.__cX,B,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__he){this.__fA(r,this.__gN,this.__gO,false,e);
}if(this.__gU){e.stopPropagation();
}this.__hd();
},_onMouseMove:function(e){if(this.__gU){if(!this.__fA(u,this.__gO,this.__gN,true,e)){this.__hd();
}}else{if(Math.abs(e.getDocumentLeft()-this.__gV)>3||Math.abs(e.getDocumentTop()-this.__gW)>3){if(this.__fA(n,this.__gO,this.__gN,true,e)){this.__gU=true;
this.__eD.addListener(this.__cX,a,this._onMouseOver,this,true);
this.__eD.addListener(this.__cX,h,this._onMouseOut,this,true);
this.__eD.addListener(this.__cX,g,this._onKeyDown,this,true);
this.__eD.addListener(this.__cX,C,this._onKeyUp,this,true);
this.__eD.addListener(this.__cX,A,this._onKeyPress,this,true);
var bl=this.__gR;
bl.Control=e.isCtrlPressed();
bl.Shift=e.isShiftPressed();
bl.Alt=e.isAltPressed();
this.__gY();
}else{this.__fA(z,this.__gO,this.__gN,false);
this.__hc();
}}}},_onMouseOver:function(e){var bm=e.getTarget();
var bn=this.__hb(bm);

if(bn&&bn!=this.__gN){this.__he=this.__fA(m,bn,this.__gO,true,e);
this.__gN=bn;
this.__gY();
}},_onMouseOut:function(e){var bp=this.__hb(e.getTarget());
var bo=this.__hb(e.getRelatedTarget());

if(bp&&bp!==bo&&bp==this.__gN){this.__fA(l,this.__gN,bo,false,e);
this.__gN=null;
this.__he=false;
qx.event.Timer.once(this.__gY,this,0);
}}},destruct:function(){this.__gO=this.__gN=this.__eD=this.__cX=this.__gP=this.__gQ=this.__gR=this.__j=null;
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
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__hf:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__hg:{},__hh:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__hh[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__hh[t]=true;
}catch(e){qx.bom.Element.__hh[t]=false;
}}return qx.bom.Element.__hh[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__hg[w]){var v=qx.bom.Element.__hg[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__hg[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__hf;
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
(function(){var j="",i="undefined",h="engine.name",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__hi:{names:{"class":b,"for":x,html:q,text:(qx.core.Environment.get(h)==l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__hi.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Environment.select(h,{"mshtml":function(D,name){var F=this.__hi;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__hi;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(J,name,K){if(typeof K===i){return;
}var L=this.__hi;
name=L.names[name]||name;
if(L.bools[name]){K=!!K;
}if(L.property[name]&&(!(J[name]===undefined)||L.qxProperties[name])){if(K==null){if(L.removeableProperties[name]){J.removeAttribute(name);
return;
}else if(typeof L.propertyDefault[name]!==i){K=L.propertyDefault[name];
}}J[name]=K;
}else{if(K===true){J.setAttribute(name,name);
}else if(K===false||K===null){J.removeAttribute(name);
}else{J.setAttribute(name,K);
}}},reset:function(M,name){this.set(M,name,null);
}}});
})();
(function(){var i="engine.name",h="losecapture",g="mshtml",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);
this.__cu=j.getWindow();
this.__cw=k;
j.addListener(this.__cu,f,this.releaseCapture,this);
j.addListener(this.__cu,e,this.releaseCapture,this);
j.addListener(this.__cu,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cw:null,__hj:null,__hk:true,__cu:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__hj&&this.__hl[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__hk||!qx.dom.Hierarchy.contains(this.__hj,o)){o=this.__hj;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__hl:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__hj===q&&this.__hk==r){return;
}
if(this.__hj){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__hk=r;
this.__hj=q;
this.__cw.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__hj;
},releaseCapture:function(){var s=this.__hj;

if(!s){return;
}this.__hj=null;
this.__cw.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__hj=this.__cu=this.__cw=null;
},defer:function(w){qx.event.Registration.addDispatcher(w);
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
(function(){var r="engine.name",q="",p="MSXML2.DOMDocument.3.0",o="mshtml",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="'",h="MSXML2.XMLHTTP.3.0",g="MSXML2.XMLHTTP.6.0",c=" xmlns='",f='<\?xml version="1.0" encoding="utf-8"?>\n<',e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(s){if(s.nodeType===9){return s.documentElement.nodeName!==d;
}else if(s.ownerDocument){return this.isXmlDocument(s.ownerDocument);
}else{return false;
}},create:qx.core.Environment.select(r,{"mshtml":function(t,u){var v=new ActiveXObject(this.DOMDOC);
if(this.DOMDOC==p){v.setProperty(n,b);
}
if(u){var w=f;
w+=u;

if(t){w+=c+t+j;
}w+=k;
v.loadXML(w);
}return v;
},"default":function(x,y){return document.implementation.createDocument(x||q,y||q,null);
}}),fromString:qx.core.Environment.select(r,{"mshtml":function(z){var A=qx.xml.Document.create();
A.loadXML(z);
return A;
},"default":function(B){var C=new DOMParser();
return C.parseFromString(B,e);
}})},defer:function(D){if((qx.core.Environment.get(r)==o)){var E=[a,p];
var F=[g,h];

for(var i=0,l=E.length;i<l;i++){try{new ActiveXObject(E[i]);
new ActiveXObject(F[i]);
}catch(G){continue;
}D.DOMDOC=E[i];
D.XMLHTTP=F[i];
break;
}}}});
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
(function(){var j="borderTopWidth",i="borderLeftWidth",h="marginTop",g="marginLeft",f="engine.name",e="scroll",d="engine.version",c="border-box",b="borderBottomWidth",a="borderRightWidth",C="auto",B="padding",A="browser.quirksmode",z="qx.bom.element.Location",y="paddingLeft",x="static",w="marginBottom",v="visible",u="BODY",t="opera",q="paddingBottom",r="paddingTop",o="marginRight",p="position",m="margin",n="overflow",k="paddingRight",l="browser.documentmode",s="border";
qx.Class.define(z,{statics:{__hm:function(D,E){return qx.bom.element.Style.get(D,E,qx.bom.element.Style.COMPUTED_MODE,false);
},__hn:function(F,G){return parseInt(qx.bom.element.Style.get(F,G,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ho:function(H){var K=0,top=0;
if(H.getBoundingClientRect&&qx.core.Environment.get(f)!=t){var J=qx.dom.Node.getWindow(H);
K-=qx.bom.Viewport.getScrollLeft(J);
top-=qx.bom.Viewport.getScrollTop(J);
}else{var I=qx.dom.Node.getDocument(H).body;
H=H.parentNode;
while(H&&H!=I){K+=H.scrollLeft;
top+=H.scrollTop;
H=H.parentNode;
}}return {left:K,top:top};
},__hp:qx.core.Environment.select(f,{"mshtml":function(L){var N=qx.dom.Node.getDocument(L);
var M=N.body;
var O=0;
var top=0;
O-=M.clientLeft+N.documentElement.clientLeft;
top-=M.clientTop+N.documentElement.clientTop;

if(!qx.core.Environment.get(A)){O+=this.__hn(M,i);
top+=this.__hn(M,j);
}return {left:O,top:top};
},"webkit":function(P){var R=qx.dom.Node.getDocument(P);
var Q=R.body;
var S=Q.offsetLeft;
var top=Q.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<530.17){S+=this.__hn(Q,i);
top+=this.__hn(Q,j);
}return {left:S,top:top};
},"gecko":function(T){var U=qx.dom.Node.getDocument(T).body;
var V=U.offsetLeft;
var top=U.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<1.9){V+=this.__hn(U,g);
top+=this.__hn(U,h);
}if(qx.bom.element.BoxSizing.get(U)!==c){V+=this.__hn(U,i);
top+=this.__hn(U,j);
}return {left:V,top:top};
},"default":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
return {left:Y,top:top};
}}),__hq:qx.core.Environment.select(f,{"mshtml|webkit":function(ba){var bc=qx.dom.Node.getDocument(ba);
if(ba.getBoundingClientRect){var bd=ba.getBoundingClientRect();
var be=bd.left;
var top=bd.top;
}else{var be=ba.offsetLeft;
var top=ba.offsetTop;
ba=ba.offsetParent;
var bb=bc.body;
while(ba&&ba!=bb){be+=ba.offsetLeft;
top+=ba.offsetTop;
be+=this.__hn(ba,i);
top+=this.__hn(ba,j);
ba=ba.offsetParent;
}}return {left:be,top:top};
},"gecko":function(bf){if(bf.getBoundingClientRect){var bi=bf.getBoundingClientRect();
var bj=Math.round(bi.left);
var top=Math.round(bi.top);
}else{var bj=0;
var top=0;
var bg=qx.dom.Node.getDocument(bf).body;
var bh=qx.bom.element.BoxSizing;

if(bh.get(bf)!==c){bj-=this.__hn(bf,i);
top-=this.__hn(bf,j);
}
while(bf&&bf!==bg){bj+=bf.offsetLeft;
top+=bf.offsetTop;
if(bh.get(bf)!==c){bj+=this.__hn(bf,i);
top+=this.__hn(bf,j);
}if(bf.parentNode&&this.__hm(bf.parentNode,n)!=v){bj+=this.__hn(bf.parentNode,i);
top+=this.__hn(bf.parentNode,j);
}bf=bf.offsetParent;
}}return {left:bj,top:top};
},"default":function(bk){var bm=0;
var top=0;
var bl=qx.dom.Node.getDocument(bk).body;
while(bk&&bk!==bl){bm+=bk.offsetLeft;
top+=bk.offsetTop;
bk=bk.offsetParent;
}return {left:bm,top:top};
}}),get:function(bn,bo){if(bn.tagName==u){var location=this.__hr(bn);
var bv=location.left;
var top=location.top;
}else{var bp=this.__hp(bn);
var bu=this.__hq(bn);
var scroll=this.__ho(bn);
var bv=bu.left+bp.left-scroll.left;
var top=bu.top+bp.top-scroll.top;
}var bq=bv+bn.offsetWidth;
var br=top+bn.offsetHeight;

if(bo){if(bo==B||bo==e){var bs=qx.bom.element.Overflow.getX(bn);

if(bs==e||bs==C){bq+=bn.scrollWidth-bn.offsetWidth+this.__hn(bn,i)+this.__hn(bn,a);
}var bt=qx.bom.element.Overflow.getY(bn);

if(bt==e||bt==C){br+=bn.scrollHeight-bn.offsetHeight+this.__hn(bn,j)+this.__hn(bn,b);
}}
switch(bo){case B:bv+=this.__hn(bn,y);
top+=this.__hn(bn,r);
bq-=this.__hn(bn,k);
br-=this.__hn(bn,q);
case e:bv-=bn.scrollLeft;
top-=bn.scrollTop;
bq-=bn.scrollLeft;
br-=bn.scrollTop;
case s:bv+=this.__hn(bn,i);
top+=this.__hn(bn,j);
bq-=this.__hn(bn,a);
br-=this.__hn(bn,b);
break;
case m:bv-=this.__hn(bn,g);
top-=this.__hn(bn,h);
bq+=this.__hn(bn,o);
br+=this.__hn(bn,w);
break;
}}return {left:bv,top:top,right:bq,bottom:br};
},__hr:qx.core.Environment.select(f,{"default":function(bw){var top=bw.offsetTop+this.__hn(bw,h);
var bx=bw.offsetLeft+this.__hn(bw,g);
return {left:bx,top:top};
},"mshtml":function(by){var top=by.offsetTop;
var bz=by.offsetLeft;

if(!((parseFloat(qx.core.Environment.get(d))<8||qx.core.Environment.get(l)<8)&&!qx.core.Environment.get(A))){top+=this.__hn(by,h);
bz+=this.__hn(by,g);
}return {left:bz,top:top};
},"gecko":function(bA){var top=bA.offsetTop+this.__hn(bA,h)+this.__hn(bA,i);
var bB=bA.offsetLeft+this.__hn(bA,g)+this.__hn(bA,j);
return {left:bB,top:top};
}}),getLeft:function(bC,bD){return this.get(bC,bD).left;
},getTop:function(bE,bF){return this.get(bE,bF).top;
},getRight:function(bG,bH){return this.get(bG,bH).right;
},getBottom:function(bI,bJ){return this.get(bI,bJ).bottom;
},getRelative:function(bK,bL,bM,bN){var bP=this.get(bK,bM);
var bO=this.get(bL,bN);
return {left:bP.left-bO.left,top:bP.top-bO.top,right:bP.right-bO.right,bottom:bP.bottom-bO.bottom};
},getPosition:function(bQ){return this.getRelative(bQ,this.getOffsetParent(bQ));
},getOffsetParent:function(bR){var bT=bR.offsetParent||document.body;
var bS=qx.bom.element.Style;

while(bT&&(!/^body|html$/i.test(bT.tagName)&&bS.get(bT,p)===x)){bT=bT.offsetParent;
}return bT;
}}});
})();
(function(){var d="event.pointer",c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(e,f){var g={position:a,top:0,left:0};

if(qx.core.Environment.get(d)){g.pointerEvents=c;
}qx.html.Element.call(this,null,g);
this.__hs=e;
this.__co=f||e.toHashCode();
this.useMarkup(e.getMarkup());
},members:{__co:null,__hs:null,getId:function(){return this.__co;
},getDecorator:function(){return this.__hs;
},resize:function(h,i){this.__hs.resize(this.getDomElement(),h,i);
},tint:function(j){this.__hs.tint(this.getDomElement(),j);
},getInsets:function(){return this.__hs.getInsets();
}},destruct:function(){this.__hs=null;
}});
})();
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="qx.debug",b="allowShrinkY",a="Wrong 'width' argument. ",E="Something went wrong with the layout of ",D="bottom",C="Wrong 'left' argument. ",B="baseline",A="marginBottom",z="qx.ui.core.LayoutItem",y="center",x="marginTop",w="!",v="allowGrowX",q="middle",r="marginLeft",o="allowShrinkX",p="top",m="right",n="marginRight",k="abstract",l="Wrong 'top' argument. ",s="Wrong 'height' argument. ",t="allowGrowY",u="left";
qx.Class.define(z,{type:k,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[v,o],mode:e,themeable:true},allowStretchY:{group:[t,b],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[x,n,A,r],mode:e,themeable:true},alignX:{check:[u,y,m],nullable:true,apply:d,themeable:true},alignY:{check:[p,q,D,B],nullable:true,apply:d,themeable:true}},members:{__ht:null,__hu:null,__hv:null,__hw:null,__hx:null,__hy:null,__hz:null,getBounds:function(){return this.__hy||this.__hu||null;
},clearSeparators:function(){},renderSeparator:function(F,G){},renderLayout:function(H,top,I,J){if(qx.core.Environment.get(c)){var K=E+this.toString()+w;
this.assertInteger(H,C+K);
this.assertInteger(top,l+K);
this.assertInteger(I,a+K);
this.assertInteger(J,s+K);
}var L=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var L=this._getHeightForWidth(I);
}
if(L!=null&&L!==this.__ht){this.__ht=L;
qx.ui.core.queue.Layout.add(this);
return null;
}var N=this.__hu;

if(!N){N=this.__hu={};
}var M={};

if(H!==N.left||top!==N.top){M.position=true;
N.left=H;
N.top=top;
}
if(I!==N.width||J!==N.height){M.size=true;
N.width=I;
N.height=J;
}if(this.__hv){M.local=true;
delete this.__hv;
}
if(this.__hx){M.margin=true;
delete this.__hx;
}return M;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__hv;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__hv=true;
this.__hw=null;
},getSizeHint:function(O){var P=this.__hw;

if(P){return P;
}
if(O===false){return null;
}P=this.__hw=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__ht&&this.getHeight()==null){P.height=this.__ht;
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
},_applyMargin:function(){this.__hx=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__hy;
},setUserBounds:function(ba,top,bb,bc){this.__hy={left:ba,top:top,width:bb,height:bc};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__hy;
qx.ui.core.queue.Layout.add(this);
},__hA:{},setLayoutProperties:function(bd){if(bd==null){return;
}var be=this.__hz;

if(!be){be=this.__hz={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(bd);
}for(var bf in bd){if(bd[bf]==null){delete be[bf];
}else{be[bf]=bd[bf];
}}},getLayoutProperties:function(){return this.__hz||this.__hA;
},clearLayoutProperties:function(){delete this.__hz;
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
var bk=this.__hz;

if(bk){bj.__hz=qx.lang.Object.clone(bk);
}return bj;
}},destruct:function(){this.$$parent=this.$$subparent=this.__hz=this.__hu=this.__hy=this.__hw=null;
}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__dz:{},remove:function(c){delete this.__dz[c.$$hash];
},add:function(d){this.__dz[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},isScheduled:function(e){return !!this.__dz[e.$$hash];
},flush:function(){var f=this.__hD();
for(var i=f.length-1;i>=0;i--){var g=f[i];
if(g.hasValidLayout()){continue;
}if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();
g.renderLayout(0,0,j.width,j.height);
}else{var h=g.getBounds();
g.renderLayout(h.left,h.top,h.width,h.height);
}}},getNestingLevel:function(k){var l=this.__hC;
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
},__hB:function(){var t=qx.ui.core.queue.Visibility;
this.__hC={};
var s=[];
var r=this.__dz;
var o,q;

for(var p in r){o=r[p];

if(t.isVisible(o)){q=this.getNestingLevel(o);
if(!s[q]){s[q]={};
}s[q][p]=o;
delete r[p];
}}return s;
},__hD:function(){var x=[];
var z=this.__hB();

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
(function(){var i="qx.debug",h="useraction",g="touchend",f='ie',d="browser.version",c="event.touch",b="qx.ui.core.queue.Manager",a="browser.name";
qx.Class.define(b,{statics:{__hE:false,__hF:{},__hG:0,MAX_RETRIES:10,scheduleFlush:function(j){var self=qx.ui.core.queue.Manager;
self.__hF[j]=true;

if(!self.__hE){self.__fl.schedule();
self.__hE=true;
}},flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;
}var self=qx.ui.core.queue.Manager;
if(self.__hH){return;
}self.__hH=true;
self.__fl.cancel();
var k=self.__hF;
self.__hI(function(){while(k.visibility||k.widget||k.appearance||k.layout||k.element){if(k.widget){delete k.widget;
qx.ui.core.queue.Widget.flush();
}
if(k.visibility){delete k.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(k.appearance){delete k.appearance;
qx.ui.core.queue.Appearance.flush();
}if(k.widget||k.visibility||k.appearance){continue;
}
if(k.layout){delete k.layout;
qx.ui.core.queue.Layout.flush();
}if(k.widget||k.visibility||k.appearance||k.layout){continue;
}
if(k.element){delete k.element;
qx.html.Element.flush();
}}},function(){self.__hE=false;
});
self.__hI(function(){if(k.dispose){delete k.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__hH=false;
});
self.__hG=0;
},__hI:qx.core.Environment.select(i,{"true":function(l,m){l();
m();
},"false":function(n,o){var self=qx.ui.core.queue.Manager;

try{n();
}catch(e){if(qx.core.Environment.get(i)){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__hE=false;
self.__hH=false;
self.__hG+=1;
if(qx.core.Environment.get(a)==f&&qx.core.Environment.get(d)<=7){o();
}
if(self.__hG<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__hG-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{o();
}}}),__hJ:function(e){var p=qx.ui.core.queue.Manager;
if(e.getData()==g){p.PAUSE=true;

if(p.__hK){window.clearTimeout(p.__hK);
}p.__hK=window.setTimeout(function(){p.PAUSE=false;
p.__hK=null;
p.flush();
},500);
}else{p.flush();
}}},defer:function(q){q.__fl=new qx.util.DeferredCall(q.flush);
qx.html.Element._scheduleFlush=q.scheduleFlush;
qx.event.Registration.addListener(window,h,qx.core.Environment.get(c)?q.__hJ:q.flush);
}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__dz:[],remove:function(c){qx.lang.Array.remove(this.__dz,c);
},add:function(d){var e=this.__dz;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__dz;
var g;

for(var i=f.length-1;i>=0;i--){g=f[i];
f.splice(i,1);
g.syncWidget();
}if(f.length!=0){return;
}this.__dz=[];
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__dz:[],__cN:{},remove:function(c){delete this.__cN[c.$$hash];
qx.lang.Array.remove(this.__dz,c);
},isVisible:function(d){return this.__cN[d.$$hash]||false;
},__hL:function(e){var g=this.__cN;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__hL(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(j){var k=this.__dz;

if(qx.lang.Array.contains(k,j)){return;
}k.unshift(j);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var o=this.__dz;
var p=this.__cN;
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
}}this.__dz=[];
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__dz:[],remove:function(c){qx.lang.Array.remove(this.__dz,c);
},add:function(d){var e=this.__dz;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(f){return qx.lang.Array.contains(this.__dz,f);
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__dz;
var h;

for(var i=g.length-1;i>=0;i--){h=g[i];
g.splice(i,1);
if(j.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__dz:[],add:function(c){var d=this.__dz;

if(qx.lang.Array.contains(d,c)){return;
}d.unshift(c);
qx.ui.core.queue.Manager.scheduleFlush(b);
},isEmpty:function(){return this.__dz.length==0;
},flush:function(){var e=this.__dz;

for(var i=e.length-1;i>=0;i--){var f=e[i];
e.splice(i,1);
f.dispose();
}if(e.length!=0){return;
}this.__dz=[];
}}});
})();
(function(){var cu="px",ct="qx.debug",cs="Boolean",cr="qx.event.type.Drag",cq="qx.event.type.Mouse",cp="visible",co="qx.event.type.Focus",cn="Integer",cm="qx.event.type.Touch",cl="qx.event.type.Data",bx="excluded",bw="_applyPadding",bv="qx.event.type.Event",bu="on",bt="hidden",bs="engine.name",br="contextmenu",bq="String",bp="tabIndex",bo="focused",cB="changeVisibility",cC="mshtml",cz="hovered",cA="qx.event.type.KeySequence",cx="absolute",cy="backgroundColor",cv="drag",cw="div",cD="object",cE="disabled",bV="move",bU="dragstart",bX="qx.dynlocale",bW="dragchange",ca="dragend",bY="resize",cc="Decorator",cb="zIndex",bT="opacity",bS="default",c="Color",d="qxType",f="changeToolTipText",g="beforeContextmenuOpen",h="_applyNativeContextMenu",j="content",k="__hR",m="_applyBackgroundColor",n="event.pointer",o="_applyFocusable",cI="changeShadow",cH="qx.event.type.KeyInput",cG="createChildControl",cF="__hS",cM="Invalid left decorator inset detected: ",cL="Font",cK="_applyShadow",cJ="Invalid layout data: ",cO="Could not add widget to itself: ",cN="_applyEnabled",N="_applySelectable",O="Number",L="_applyKeepActive",M="_applyVisibility",R="The 'after' widget is not a child of this widget!",S="repeat",P="qxDraggable",Q="syncAppearance",J="paddingLeft",K="_applyDroppable",w="Wrong 'left' argument. ",v="protector",y="#",x="qx.event.type.MouseWheel",s="_applyCursor",r="_applyDraggable",u="changeTextColor",t="$$widget",q="changeContextMenu",p="paddingTop",X="changeSelectable",Y="hideFocus",ba="Invalid top decorator inset detected: ",bb="none",T="outline",U="The 'before' widget is not a child of this widget!",V="_applyAppearance",W=" returned an invalid size hint!",bc="_applyOpacity",bd="url(",G="__hM",F=")",E="qx.ui.core.Widget",D="__hN",C="minHeight is larger than maxHeight!",B="_applyFont",A="cursor",z="qxDroppable",I="__ia",H="changeZIndex",be="__hV",bf="changeEnabled",bg="changeFont",bh="_applyDecorator",bi="_applyZIndex",bj="_applyTextColor",bk="qx.ui.menu.Menu",bl="Invalid right decorator inset detected: ",bm="Invalid widget to add: ",bn="_applyToolTipText",bB="The layout of the widget",bA="true",bz="widget",by="Wrong 'top' argument. ",bF="changeDecorator",bE="changeBackgroundColor",bD="_applyTabIndex",bC="Invalid bottom decorator inset detected: ",bH="changeAppearance",bG="shorthand",bO="/",bP="__hQ",bM="",bN="_applyContextMenu",bK="container",bL="paddingBottom",bI="changeNativeContextMenu",bJ="undefined",bQ="qx.ui.tooltip.ToolTip",bR="qxKeepActive",ce="_applyKeepFocus",cd="paddingRight",cg="minWidth is larger than maxWidth!",cf="changeLocale",ci="__hX",ch="qxKeepFocus",ck="opera",cj="qx/static/blank.gif";
qx.Class.define(E,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__hM=this._createContainerElement();
this.__hN=this.__hY();
this.__hM.add(this.__hN);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bv,disappear:bv,createChildControl:cl,resize:cl,move:cl,syncAppearance:cl,mousemove:cq,mouseover:cq,mouseout:cq,mousedown:cq,mouseup:cq,click:cq,dblclick:cq,contextmenu:cq,beforeContextmenuOpen:cl,mousewheel:x,touchstart:cm,touchend:cm,touchmove:cm,touchcancel:cm,tap:cm,swipe:cm,keyup:cA,keydown:cA,keypress:cA,keyinput:cH,focus:co,blur:co,focusin:co,focusout:co,activate:co,deactivate:co,capture:bv,losecapture:bv,drop:cr,dragleave:cr,dragover:cr,drag:cr,dragstart:cr,dragend:cr,dragchange:cr,droprequest:cr},properties:{paddingTop:{check:cn,init:0,apply:bw,themeable:true},paddingRight:{check:cn,init:0,apply:bw,themeable:true},paddingBottom:{check:cn,init:0,apply:bw,themeable:true},paddingLeft:{check:cn,init:0,apply:bw,themeable:true},padding:{group:[p,cd,bL,J],mode:bG,themeable:true},zIndex:{nullable:true,init:null,apply:bi,event:H,check:cn,themeable:true},decorator:{nullable:true,init:null,apply:bh,event:bF,check:cc,themeable:true},shadow:{nullable:true,init:null,apply:cK,event:cI,check:cc,themeable:true},backgroundColor:{nullable:true,check:c,apply:m,event:bE,themeable:true},textColor:{nullable:true,check:c,apply:bj,event:u,themeable:true,inheritable:true},font:{nullable:true,apply:B,check:cL,event:bg,themeable:true,inheritable:true,dereference:true},opacity:{check:O,apply:bc,themeable:true,nullable:true,init:null},cursor:{check:bq,apply:s,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bQ,nullable:true},toolTipText:{check:bq,nullable:true,event:f,apply:bn},toolTipIcon:{check:bq,nullable:true,event:f},blockToolTip:{check:cs,init:false},visibility:{check:[cp,bt,bx],init:cp,apply:M,event:cB},enabled:{init:true,check:cs,inheritable:true,apply:cN,event:bf},anonymous:{init:false,check:cs},tabIndex:{check:cn,nullable:true,apply:bD},focusable:{check:cs,init:false,apply:o},keepFocus:{check:cs,init:false,apply:ce},keepActive:{check:cs,init:false,apply:L},draggable:{check:cs,init:false,apply:r},droppable:{check:cs,init:false,apply:K},selectable:{check:cs,init:false,event:X,apply:N},contextMenu:{check:bk,apply:bN,nullable:true,event:q},nativeContextMenu:{check:cs,init:false,themeable:true,event:bI,apply:h},appearance:{check:bq,init:bz,apply:V,event:bH}},statics:{DEBUG:false,getWidgetByElement:function(cP,cQ){while(cP){var cR=cP.$$widget;
if(cR!=null){var cS=qx.core.ObjectRegistry.fromHashCode(cR);
if(!cQ||!cS.getAnonymous()){return cS;
}}try{cP=cP.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cT){while(cT){if(parent==cT){return true;
}cT=cT.getLayoutParent();
}return false;
},__hO:new qx.ui.core.DecoratorFactory(),__hP:new qx.ui.core.DecoratorFactory()},members:{__hM:null,__hN:null,__hQ:null,__hR:null,__hS:null,__hT:null,__hU:null,__hV:null,_getLayout:function(){return this.__hV;
},_setLayout:function(cU){if(qx.core.Environment.get(ct)){if(cU){this.assertInstance(cU,qx.ui.layout.Abstract);
}}
if(this.__hV){this.__hV.connectToWidget(null);
}
if(cU){cU.connectToWidget(this);
}this.__hV=cU;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cV=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cV);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cV);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__hW:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var cW=qx.theme.manager.Decoration.getInstance();
var cY=cW.resolve(a).getInsets();
var cX=cW.resolve(b).getInsets();

if(cY.top!=cX.top||cY.right!=cX.right||cY.bottom!=cX.bottom||cY.left!=cX.left){return true;
}return false;
},renderLayout:function(da,top,db,dc){var dl=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,da,top,db,dc);
if(!dl){return null;
}var de=this.getContainerElement();
var content=this.getContentElement();
var di=dl.size||this._updateInsets;
var dm=cu;
var dj={};
if(dl.position){dj.left=da+dm;
dj.top=top+dm;
}if(dl.size){dj.width=db+dm;
dj.height=dc+dm;
}
if(dl.position||dl.size){de.setStyles(dj);
}
if(di||dl.local||dl.margin){var dd=this.getInsets();
var innerWidth=db-dd.left-dd.right;
var innerHeight=dc-dd.top-dd.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var dg={};

if(this._updateInsets){dg.left=dd.left+dm;
dg.top=dd.top+dm;
}
if(di){dg.width=innerWidth+dm;
dg.height=innerHeight+dm;
}
if(di||this._updateInsets){content.setStyles(dg);
}
if(dl.size){var dk=this.__hS;

if(dk){dk.setStyles({width:db+cu,height:dc+cu});
}}
if(dl.size||this._updateInsets){if(this.__hQ){this.__hQ.resize(db,dc);
}}
if(dl.size){if(this.__hR){var dd=this.__hR.getInsets();
var dh=db+dd.left+dd.right;
var df=dc+dd.top+dd.bottom;
this.__hR.resize(dh,df);
}}
if(di||dl.local||dl.margin){if(this.__hV&&this.hasLayoutChildren()){this.__hV.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(dl.position&&this.hasListener(bV)){this.fireDataEvent(bV,this.getBounds());
}
if(dl.size&&this.hasListener(bY)){this.fireDataEvent(bY,this.getBounds());
}delete this._updateInsets;
return dl;
},__hX:null,clearSeparators:function(){var dp=this.__hX;

if(!dp){return;
}var dq=qx.ui.core.Widget.__hO;
var content=this.getContentElement();
var dn;

for(var i=0,l=dp.length;i<l;i++){dn=dp[i];
dq.poolDecorator(dn);
content.remove(dn);
}dp.length=0;
},renderSeparator:function(dr,ds){var dt=qx.ui.core.Widget.__hO.getDecoratorElement(dr);
this.getContentElement().add(dt);
dt.resize(ds.width,ds.height);
dt.setStyles({left:ds.left+cu,top:ds.top+cu});
if(!this.__hX){this.__hX=[dt];
}else{this.__hX.push(dt);
}},_computeSizeHint:function(){var dA=this.getWidth();
var dz=this.getMinWidth();
var dv=this.getMaxWidth();
var dy=this.getHeight();
var dw=this.getMinHeight();
var dx=this.getMaxHeight();

if(qx.core.Environment.get(ct)){if(dz!==null&&dv!==null){this.assert(dz<=dv,cg);
}
if(dw!==null&&dx!==null){this.assert(dw<=dx,C);
}}var dB=this._getContentHint();
var du=this.getInsets();
var dD=du.left+du.right;
var dC=du.top+du.bottom;

if(dA==null){dA=dB.width+dD;
}
if(dy==null){dy=dB.height+dC;
}
if(dz==null){dz=dD;

if(dB.minWidth!=null){dz+=dB.minWidth;
if(dz>dv&&dv!=null){dz=dv;
}}}
if(dw==null){dw=dC;

if(dB.minHeight!=null){dw+=dB.minHeight;
if(dw>dx&&dx!=null){dw=dx;
}}}
if(dv==null){if(dB.maxWidth==null){dv=Infinity;
}else{dv=dB.maxWidth+dD;
if(dv<dz&&dz!=null){dv=dz;
}}}
if(dx==null){if(dB.maxHeight==null){dx=Infinity;
}else{dx=dB.maxHeight+dC;
if(dx<dw&&dw!=null){dx=dw;
}}}return {width:dA,minWidth:dz,maxWidth:dv,height:dy,minHeight:dw,maxHeight:dx};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__hV){this.__hV.invalidateLayoutCache();
}},_getContentHint:function(){var dF=this.__hV;

if(dF){if(this.hasLayoutChildren()){var dG=dF.getSizeHint();

if(qx.core.Environment.get(ct)){var dE=bB+this.toString()+W;
this.assertInteger(dG.width,w+dE);
this.assertInteger(dG.height,by+dE);
}return dG;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(dH){var dL=this.getInsets();
var dO=dL.left+dL.right;
var dN=dL.top+dL.bottom;
var dM=dH-dO;
var dJ=this._getLayout();

if(dJ&&dJ.hasHeightForWidth()){var dI=dJ.getHeightForWidth(dH);
}else{dI=this._getContentHeightForWidth(dM);
}var dK=dI+dN;
return dK;
},_getContentHeightForWidth:function(dP){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var dR=this.getPaddingRight();
var dT=this.getPaddingBottom();
var dS=this.getPaddingLeft();

if(this.__hQ){var dQ=this.__hQ.getInsets();

if(qx.core.Environment.get(ct)){this.assertNumber(dQ.top,ba+dQ.top);
this.assertNumber(dQ.right,bl+dQ.right);
this.assertNumber(dQ.bottom,bC+dQ.bottom);
this.assertNumber(dQ.left,cM+dQ.left);
}top+=dQ.top;
dR+=dQ.right;
dT+=dQ.bottom;
dS+=dQ.left;
}return {"top":top,"right":dR,"bottom":dT,"left":dS};
},getInnerSize:function(){var dV=this.getBounds();

if(!dV){return null;
}var dU=this.getInsets();
return {width:dV.width-dU.left-dU.right,height:dV.height-dU.top-dU.bottom};
},show:function(){this.setVisibility(cp);
},hide:function(){this.setVisibility(bt);
},exclude:function(){this.setVisibility(bx);
},isVisible:function(){return this.getVisibility()===cp;
},isHidden:function(){return this.getVisibility()!==cp;
},isExcluded:function(){return this.getVisibility()===bx;
},isSeeable:function(){qx.ui.core.queue.Manager.flush();
var dW=this.getContainerElement().getDomElement();

if(dW){return dW.offsetWidth>0;
}return false;
},_createContainerElement:function(){var dY={"$$widget":this.toHashCode()};

if(qx.core.Environment.get(ct)){dY.qxType=bK;
dY.qxClass=this.classname;
}var dX={zIndex:0,position:cx};
return new qx.html.Element(cw,dX,dY);
},__hY:function(){var ea=this._createContentElement();

if(qx.core.Environment.get(ct)){ea.setAttribute(d,j);
}ea.setStyles({"position":cx,"zIndex":10});
return ea;
},_createContentElement:function(){return new qx.html.Element(cw,{overflowX:bt,overflowY:bt});
},getContainerElement:function(){return this.__hM;
},getContentElement:function(){return this.__hN;
},getDecoratorElement:function(){return this.__hQ||null;
},getShadowElement:function(){return this.__hR||null;
},__ia:null,getLayoutChildren:function(){var ec=this.__ia;

if(!ec){return this.__ib;
}var ed;

for(var i=0,l=ec.length;i<l;i++){var eb=ec[i];

if(eb.hasUserBounds()||eb.isExcluded()){if(ed==null){ed=ec.concat();
}qx.lang.Array.remove(ed,eb);
}}return ed||ec;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var ee=this.__hV;

if(ee){ee.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var ef=this.__ia;

if(!ef){return false;
}var eg;

for(var i=0,l=ef.length;i<l;i++){eg=ef[i];

if(!eg.hasUserBounds()&&!eg.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__ib:[],_getChildren:function(){return this.__ia||this.__ib;
},_indexOf:function(eh){var ei=this.__ia;

if(!ei){return -1;
}return ei.indexOf(eh);
},_hasChildren:function(){var ej=this.__ia;
return ej!=null&&(!!ej[0]);
},addChildrenToQueue:function(ek){var em=this.__ia;

if(!em){return;
}var en;

for(var i=0,l=em.length;i<l;i++){en=em[i];
ek.push(en);
en.addChildrenToQueue(ek);
}},_add:function(eo,ep){if(eo.getLayoutParent()==this){qx.lang.Array.remove(this.__ia,eo);
}
if(this.__ia){this.__ia.push(eo);
}else{this.__ia=[eo];
}this.__ic(eo,ep);
},_addAt:function(eq,er,es){if(!this.__ia){this.__ia=[];
}if(eq.getLayoutParent()==this){qx.lang.Array.remove(this.__ia,eq);
}var et=this.__ia[er];

if(et===eq){eq.setLayoutProperties(es);
}
if(et){qx.lang.Array.insertBefore(this.__ia,eq,et);
}else{this.__ia.push(eq);
}this.__ic(eq,es);
},_addBefore:function(eu,ev,ew){if(qx.core.Environment.get(ct)){this.assertInArray(ev,this._getChildren(),U);
}
if(eu==ev){return;
}
if(!this.__ia){this.__ia=[];
}if(eu.getLayoutParent()==this){qx.lang.Array.remove(this.__ia,eu);
}qx.lang.Array.insertBefore(this.__ia,eu,ev);
this.__ic(eu,ew);
},_addAfter:function(ex,ey,ez){if(qx.core.Environment.get(ct)){this.assertInArray(ey,this._getChildren(),R);
}
if(ex==ey){return;
}
if(!this.__ia){this.__ia=[];
}if(ex.getLayoutParent()==this){qx.lang.Array.remove(this.__ia,ex);
}qx.lang.Array.insertAfter(this.__ia,ex,ey);
this.__ic(ex,ez);
},_remove:function(eA){if(!this.__ia){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__ia,eA);
this.__id(eA);
},_removeAt:function(eB){if(!this.__ia){throw new Error("This widget has no children!");
}var eC=this.__ia[eB];
qx.lang.Array.removeAt(this.__ia,eB);
this.__id(eC);
return eC;
},_removeAll:function(){if(!this.__ia){return [];
}var eD=this.__ia.concat();
this.__ia.length=0;

for(var i=eD.length-1;i>=0;i--){this.__id(eD[i]);
}qx.ui.core.queue.Layout.add(this);
return eD;
},_afterAddChild:null,_afterRemoveChild:null,__ic:function(eE,eF){if(qx.core.Environment.get(ct)){this.assertInstance(eE,qx.ui.core.LayoutItem,bm+eE);
this.assertNotIdentical(eE,this,cO+eE);

if(eF!=null){this.assertType(eF,cD,cJ+eF);
}}var parent=eE.getLayoutParent();

if(parent&&parent!=this){parent._remove(eE);
}eE.setLayoutParent(this);
if(eF){eE.setLayoutProperties(eF);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(eE);
}},__id:function(eG){if(qx.core.Environment.get(ct)){this.assertNotUndefined(eG);
}
if(eG.getLayoutParent()!==this){throw new Error("Remove Error: "+eG+" is not a child of this widget!");
}eG.setLayoutParent(null);
if(this.__hV){this.__hV.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(eG);
}},capture:function(eH){this.getContainerElement().capture(eH);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(eI,eJ,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__hS){return;
}var eK=this.__hS=new qx.html.Element;

if(qx.core.Environment.get(ct)){eK.setAttribute(d,v);
}eK.setStyles({position:cx,top:0,left:0,zIndex:7});
var eL=this.getBounds();

if(eL){this.__hS.setStyles({width:eL.width+cu,height:eL.height+cu});
}if((qx.core.Environment.get(bs)==cC)){eK.setStyles({backgroundImage:bd+qx.util.ResourceManager.getInstance().toUri(cj)+F,backgroundRepeat:S});
}this.getContainerElement().add(eK);
},_applyDecorator:function(eM,eN){if(qx.core.Environment.get(ct)){if(eM&&typeof eM===cD){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and "+"processing time. Often it is better to lay them out to a "+"theme file. Hash code of decorator object: "+eM);
}}}var eQ=qx.ui.core.Widget.__hO;
var eO=this.getContainerElement();
if(!this.__hS&&!qx.core.Environment.get(n)){this._createProtectorElement();
}if(eN){eO.remove(this.__hQ);
eQ.poolDecorator(this.__hQ);
}if(eM){var eP=this.__hQ=eQ.getDecoratorElement(eM);
eP.setStyle(cb,5);
eO.add(eP);
}else{delete this.__hQ;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__hW(eN,eM)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(eM){var eR=this.getBounds();

if(eR){eP.resize(eR.width,eR.height);
this.__hS&&this.__hS.setStyles({width:eR.width+cu,height:eR.height+cu});
}}},_applyShadow:function(eS,eT){var fb=qx.ui.core.Widget.__hP;
var eV=this.getContainerElement();
if(eT){eV.remove(this.__hR);
fb.poolDecorator(this.__hR);
}if(eS){var eX=this.__hR=fb.getDecoratorElement(eS);
eV.add(eX);
var fa=eX.getInsets();
eX.setStyles({left:(-fa.left)+cu,top:(-fa.top)+cu});
var eY=this.getBounds();

if(eY){var eW=eY.width+fa.left+fa.right;
var eU=eY.height+fa.top+fa.bottom;
eX.resize(eW,eU);
}eX.tint(null);
}else{delete this.__hR;
}},_applyToolTipText:function(fc,fd){if(qx.core.Environment.get(bX)){if(this.__hU){return;
}var fe=qx.locale.Manager.getInstance();
this.__hU=fe.addListener(cf,function(){var ff=this.getToolTipText();

if(ff&&ff.translate){this.setToolTipText(ff.translate());
}},this);
}},_applyTextColor:function(fg,fh){},_applyZIndex:function(fi,fj){this.getContainerElement().setStyle(cb,fi==null?0:fi);
},_applyVisibility:function(fk,fl){var fm=this.getContainerElement();

if(fk===cp){fm.show();
}else{fm.hide();
}var parent=this.$$parent;

if(parent&&(fl==null||fk==null||fl===bx||fk===bx)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(fn,fo){this.getContainerElement().setStyle(bT,fn==1?null:fn);
if((qx.core.Environment.get(bs)==cC)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var fp=(fn==1||fn==null)?null:0.99;
this.getContentElement().setStyle(bT,fp);
}}},_applyCursor:function(fq,fr){if(fq==null&&!this.isSelectable()){fq=bS;
}this.getContainerElement().setStyle(A,fq,qx.core.Environment.get(bs)==ck);
},_applyBackgroundColor:function(fs,ft){var fu=this.getBackgroundColor();
var fw=this.getContainerElement();

if(this.__hQ){this.__hQ.tint(fu);
fw.setStyle(cy,null);
}else{var fv=qx.theme.manager.Color.getInstance().resolve(fu);
fw.setStyle(cy,fv);
}},_applyFont:function(fx,fy){},__ie:null,$$stateChanges:null,_forwardStates:null,hasState:function(fz){var fA=this.__ie;
return !!fA&&!!fA[fz];
},addState:function(fB){var fC=this.__ie;

if(!fC){fC=this.__ie={};
}
if(fC[fB]){return;
}this.__ie[fB]=true;
if(fB===cz){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fF=this.__ih;

if(forward&&forward[fB]&&fF){var fD;

for(var fE in fF){fD=fF[fE];

if(fD instanceof qx.ui.core.Widget){fF[fE].addState(fB);
}}}},removeState:function(fG){var fH=this.__ie;

if(!fH||!fH[fG]){return;
}delete this.__ie[fG];
if(fG===cz){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fK=this.__ih;

if(forward&&forward[fG]&&fK){for(var fJ in fK){var fI=fK[fJ];

if(fI instanceof qx.ui.core.Widget){fI.removeState(fG);
}}}},replaceState:function(fL,fM){var fN=this.__ie;

if(!fN){fN=this.__ie={};
}
if(!fN[fM]){fN[fM]=true;
}
if(fN[fL]){delete fN[fL];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fQ=this.__ih;

if(forward&&forward[fM]&&fQ){for(var fP in fQ){var fO=fQ[fP];

if(fO instanceof qx.ui.core.Widget){fO.replaceState(fL,fM);
}}}},__if:null,__ig:null,syncAppearance:function(){var fV=this.__ie;
var fU=this.__if;
var fW=qx.theme.manager.Appearance.getInstance();
var fS=qx.core.Property.$$method.setThemed;
var gb=qx.core.Property.$$method.resetThemed;
if(this.__ig){delete this.__ig;
if(fU){var fR=fW.styleFrom(fU,fV,null,this.getAppearance());
fU=null;
}}if(!fU){var fT=this;
var ga=[];

do{ga.push(fT.$$subcontrol||fT.getAppearance());
}while(fT=fT.$$subparent);
fU=ga.reverse().join(bO).replace(/#[0-9]+/g,bM);
this.__if=fU;
}var fX=fW.styleFrom(fU,fV,null,this.getAppearance());

if(fX){if(fR){for(var fY in fR){if(fX[fY]===undefined){this[gb[fY]]();
}}}if(qx.core.Environment.get(ct)){for(var fY in fX){if(!this[fS[fY]]){throw new Error(this.classname+' has no themeable property "'+fY+'" while styling '+fU);
}}}for(var fY in fX){fX[fY]===undefined?this[gb[fY]]():this[fS[fY]](fX[fY]);
}}else if(fR){for(var fY in fR){this[gb[fY]]();
}}this.fireDataEvent(Q,this.__ie);
},_applyAppearance:function(gc,gd){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__hT){qx.ui.core.queue.Appearance.add(this);
this.__hT=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__ig=true;
qx.ui.core.queue.Appearance.add(this);
var gg=this.__ih;

if(gg){var ge;

for(var gf in gg){ge=gg[gf];

if(ge instanceof qx.ui.core.Widget){ge.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var gh=this;

while(gh.getAnonymous()){gh=gh.getLayoutParent();

if(!gh){return null;
}}return gh;
},getFocusTarget:function(){var gi=this;

if(!gi.getEnabled()){return null;
}
while(gi.getAnonymous()||!gi.getFocusable()){gi=gi.getLayoutParent();

if(!gi||!gi.getEnabled()){return null;
}}return gi;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(gj,gk){var gl=this.getFocusElement();
if(gj){var gm=this.getTabIndex();

if(gm==null){gm=1;
}gl.setAttribute(bp,gm);
if((qx.core.Environment.get(bs)==cC)){gl.setAttribute(Y,bA);
}else{gl.setStyle(T,bb);
}}else{if(gl.isNativelyFocusable()){gl.setAttribute(bp,-1);
}else if(gk){gl.setAttribute(bp,null);
}}},_applyKeepFocus:function(gn){var go=this.getFocusElement();
go.setAttribute(ch,gn?bu:null);
},_applyKeepActive:function(gp){var gq=this.getContainerElement();
gq.setAttribute(bR,gp?bu:null);
},_applyTabIndex:function(gr){if(gr==null){gr=1;
}else if(gr<1||gr>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&gr!=null){this.getFocusElement().setAttribute(bp,gr);
}},_applySelectable:function(gs,gt){if(gt!==null){this._applyCursor(this.getCursor());
}this.getContentElement().setSelectable(gs);
},_applyEnabled:function(gu,gv){if(gu===false){this.addState(cE);
this.removeState(cz);
if(this.isFocusable()){this.removeState(bo);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(cE);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gw,gx,name){},_applyContextMenu:function(gy,gz){if(gz){gz.removeState(br);

if(gz.getOpener()==this){gz.resetOpener();
}
if(!gy){this.removeListener(br,this._onContextMenuOpen);
gz.removeListener(cB,this._onBeforeContextMenuOpen,this);
}}
if(gy){gy.setOpener(this);
gy.addState(br);

if(!gz){this.addListener(br,this._onContextMenuOpen);
gy.addListener(cB,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==cp&&this.hasListener(g)){this.fireDataEvent(g,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gA,gB){if(!this.isEnabled()&&gA===true){gA=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gA){this.addListener(bU,this._onDragStart);
this.addListener(cv,this._onDrag);
this.addListener(ca,this._onDragEnd);
this.addListener(bW,this._onDragChange);
}else{this.removeListener(bU,this._onDragStart);
this.removeListener(cv,this._onDrag);
this.removeListener(ca,this._onDragEnd);
this.removeListener(bW,this._onDragChange);
}this.getContainerElement().setAttribute(P,gA?bu:null);
},_applyDroppable:function(gC,gD){if(!this.isEnabled()&&gC===true){gC=false;
}this.getContainerElement().setAttribute(z,gC?bu:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bS);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gE=qx.ui.core.DragDropCursor.getInstance();
var gF=e.getCurrentAction();
gF?gE.setAction(gF):gE.resetAction();
},visualizeFocus:function(){this.addState(bo);
},visualizeBlur:function(){this.removeState(bo);
},scrollChildIntoView:function(gG,gH,gI,gJ){gJ=typeof gJ==bJ?true:gJ;
var gK=qx.ui.core.queue.Layout;
var parent;
if(gJ){gJ=!gK.isScheduled(gG);
parent=gG.getLayoutParent();
if(gJ&&parent){gJ=!gK.isScheduled(parent);
if(gJ){parent.getChildren().forEach(function(gL){gJ=gJ&&!gK.isScheduled(gL);
});
}}}this.scrollChildIntoViewX(gG,gH,gJ);
this.scrollChildIntoViewY(gG,gI,gJ);
},scrollChildIntoViewX:function(gM,gN,gO){this.getContentElement().scrollChildIntoViewX(gM.getContainerElement(),gN,gO);
},scrollChildIntoViewY:function(gP,gQ,gR){this.getContentElement().scrollChildIntoViewY(gP.getContainerElement(),gQ,gR);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(gS){if(!this.__ih){return false;
}return !!this.__ih[gS];
},__ih:null,_getCreatedChildControls:function(){return this.__ih;
},getChildControl:function(gT,gU){if(!this.__ih){if(gU){return null;
}this.__ih={};
}var gV=this.__ih[gT];

if(gV){return gV;
}
if(gU===true){return null;
}return this._createChildControl(gT);
},_showChildControl:function(gW){var gX=this.getChildControl(gW);
gX.show();
return gX;
},_excludeChildControl:function(gY){var ha=this.getChildControl(gY,true);

if(ha){ha.exclude();
}},_isChildControlVisible:function(hb){var hc=this.getChildControl(hb,true);

if(hc){return hc.isVisible();
}return false;
},_createChildControl:function(hd){if(!this.__ih){this.__ih={};
}else if(this.__ih[hd]){throw new Error("Child control '"+hd+"' already created!");
}var hh=hd.indexOf(y);

if(hh==-1){var he=this._createChildControlImpl(hd);
}else{var he=this._createChildControlImpl(hd.substring(0,hh),hd.substring(hh+1,hd.length));
}
if(!he){throw new Error("Unsupported control: "+hd);
}he.$$subcontrol=hd;
he.$$subparent=this;
var hf=this.__ie;
var forward=this._forwardStates;

if(hf&&forward&&he instanceof qx.ui.core.Widget){for(var hg in hf){if(forward[hg]){he.addState(hg);
}}}this.fireDataEvent(cG,he);
return this.__ih[hd]=he;
},_createChildControlImpl:function(hi,hj){return null;
},_disposeChildControls:function(){var hn=this.__ih;

if(!hn){return;
}var hl=qx.ui.core.Widget;

for(var hm in hn){var hk=hn[hm];

if(!hl.contains(this,hk)){hk.destroy();
}else{hk.dispose();
}}delete this.__ih;
},_findTopControl:function(){var ho=this;

while(ho){if(!ho.$$subparent){return ho;
}ho=ho.$$subparent;
}return null;
},getContainerLocation:function(hp){var hq=this.getContainerElement().getDomElement();
return hq?qx.bom.element.Location.get(hq,hp):null;
},getContentLocation:function(hr){var hs=this.getContentElement().getDomElement();
return hs?qx.bom.element.Location.get(hs,hr):null;
},setDomLeft:function(ht){var hu=this.getContainerElement().getDomElement();

if(hu){hu.style.left=ht+cu;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(hv){var hw=this.getContainerElement().getDomElement();

if(hw){hw.style.top=hv+cu;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(hx,top){var hy=this.getContainerElement().getDomElement();

if(hy){hy.style.left=hx+cu;
hy.style.top=top+cu;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var hz=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var hA=this.getChildren();

for(var i=0,l=hA.length;i<l;i++){hz.add(hA[i].clone());
}}return hz;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(bX)){if(this.__hU){qx.locale.Manager.getInstance().removeListenerById(this.__hU);
}}this.getContainerElement().setAttribute(t,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}
if(this.getContextMenu()){this.setContextMenu(null);
}if(!qx.core.ObjectRegistry.inShutDown){var hC=qx.ui.core.Widget;
var hB=this.getContainerElement();

if(this.__hQ){hB.remove(this.__hQ);
hC.__hO.poolDecorator(this.__hQ);
}
if(this.__hR){hB.remove(this.__hR);
hC.__hP.poolDecorator(this.__hR);
}this.clearSeparators();
this.__hQ=this.__hR=this.__hX=null;
}else{this._disposeArray(ci);
this._disposeObjects(bP,k);
}this._disposeArray(I);
this.__ie=this.__ih=null;
this._disposeObjects(be,G,D,cF);
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__eD=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__eD:null,__ii:{focusin:1,focusout:1,focus:1,blur:1},__ij:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;
},_dispatchEvent:function(j){var p=j.getTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);
var q=false;

while(o&&o.isAnonymous()){var q=true;
o=o.getLayoutParent();
}if(o&&q&&j.getType()==a){o.getContainerElement().activate();
}if(this.__ii[j.getType()]){o=o&&o.getFocusTarget();
if(!o){return;
}}if(j.getRelatedTarget){var x=j.getRelatedTarget();
var w=qx.ui.core.Widget.getWidgetByElement(x);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}
if(w){if(this.__ii[j.getType()]){w=w.getFocusTarget();
}if(w===o){return;
}}}var s=j.getCurrentTarget();
var u=qx.ui.core.Widget.getWidgetByElement(s);

if(!u||u.isAnonymous()){return;
}if(this.__ii[j.getType()]){u=u.getFocusTarget();
}var v=j.getType();

if(!u||!(u.isEnabled()||this.__ij[v])){return;
}var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var r=this.__eD.getListeners(u,v,k);

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
}}},destruct:function(){this.__eD=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var c="abstract",b="qx.debug",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:c,extend:qx.core.Object,members:{__hw:null,_invalidChildrenCache:null,__jz:null,invalidateLayoutCache:function(){this.__hw=null;
},renderLayout:function(d,e){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__hw){return this.__hw;
}return this.__hw=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(f){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Environment.select(b,{"true":function(g,name,h){},"false":null}),_clearSeparators:function(){var i=this.__jz;

if(i instanceof qx.ui.core.LayoutItem){i.clearSeparators();
}},_renderSeparator:function(j,k){this.__jz.renderSeparator(j,k);
},connectToWidget:function(l){if(l&&this.__jz){throw new Error("It is not possible to manually set the connected widget.");
}this.__jz=l;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__jz;
},_applyLayoutChange:function(){if(this.__jz){this.__jz.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__jz.getLayoutChildren();
}},destruct:function(){this.__jz=this.__hw=null;
}});
})();
(function(){var u="",t='indexOf',s='slice',r='concat',q='toLocaleLowerCase',p="qx.type.BaseString",o='match',n="qx.debug",m='search',k='replace',d='toLowerCase',j='charCodeAt',g='split',c='substring',b='lastIndexOf',f='substr',e='toLocaleUpperCase',h='toUpperCase',a='charAt';
qx.Class.define(p,{extend:Object,construct:function(v){var v=v||u;
this.__ik=v;
this.length=v.length;
},members:{$$isString:true,length:0,__ik:null,toString:function(){return this.__ik;
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
this.__il=c;
this.__im=d;
},members:{__il:null,__im:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__il,this.__im);
}}});
})();
(function(){var m="_",l="",k="_applyLocale",j="changeLocale",h="C",g="en",f="qx.dynlocale",e="US",d="qx.locale.Manager",c="String",a="singleton",b="qx.debug";
qx.Class.define(d,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__in=qx.$$translations||{};
this.__io=qx.$$locales||{};
var n=g;
var o=e;

if(o!==l){n+=m+o;
}this.__ip=n;
this.setLocale(n||this.__iq);
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
}},properties:{locale:{check:c,nullable:true,apply:k,event:j}},members:{__iq:h,__ir:null,__is:null,__in:null,__io:null,__ip:null,getLanguage:function(){return this.__is;
},getTerritory:function(){return this.getLocale().split(m)[1]||l;
},getAvailableLocales:function(){var D=[];

for(var C in this.__io){if(C!=this.__iq){D.push(C);
}}return D;
},__it:function(E){var G;

if(E==null){return null;
}var F=E.indexOf(m);

if(F==-1){G=E;
}else{G=E.substring(0,F);
}return G;
},_applyLocale:function(H,I){if(qx.core.Environment.get(b)){if(!(H in this.__io||H==this.__ip)){qx.log.Logger.warn("Locale: "+H+" not available.");
}}this.__ir=H;
this.__is=this.__it(H);
},addTranslation:function(J,K){var L=this.__in;

if(L[J]){for(var M in K){L[J][M]=K[M];
}}else{L[J]=K;
}},addLocale:function(N,O){var P=this.__io;

if(P[N]){for(var Q in O){P[N][Q]=O[Q];
}}else{P[N]=O;
}},translate:function(R,S,T){var U=this.__in;
return this.__iu(U,R,S,T);
},localize:function(V,W,X){var Y=this.__io;
return this.__iu(Y,V,W,X);
},__iu:function(ba,bb,bc,bd){var be;

if(!ba){return bb;
}
if(bd){var bg=this.__it(bd);
}else{bd=this.__ir;
bg=this.__is;
}if(!be&&ba[bd]){be=ba[bd][bb];
}if(!be&&ba[bg]){be=ba[bg][bb];
}if(!be&&ba[this.__iq]){be=ba[this.__iq][bb];
}
if(!be){be=bb;
}
if(bc.length>0){var bf=[];

for(var i=0;i<bc.length;i++){var bh=bc[i];

if(bh&&bh.translate){bf[i]=bh.translate();
}else{bf[i]=bh;
}}be=qx.lang.String.format(be,bf);
}
if(qx.core.Environment.get(f)){be=new qx.locale.LocalizedString(be,bb,bc);
}return be;
}},destruct:function(){this.__in=this.__io=null;
}});
})();
(function(){var k="px",j="engine.name",i="div",h="img",g="",f="no-repeat",d="qx.debug",c="scale-x",b="mshtml",a="repeat",J="scale",I="b64",H="scale-y",G="qx/icon",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",r='<img src="',s="qx.bom.element.Decoration",p="', sizingMethod='",q='"/>',n="png",o="')",l='"></div>',m='" style="',t="none",u="webkit",w=" ",v="repeat-x",y="DXImageTransform.Microsoft.AlphaImageLoader",x="qx/static/blank.gif",z="absolute";
qx.Class.define(s,{statics:{DEBUG:false,__iv:{},__iw:(qx.core.Environment.get(j)==b)&&qx.core.Environment.get(D)<9,__ix:qx.core.Environment.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__iy:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(K,L,M,N){var P=this.getTagName(M,L);

if(P!=K.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var Q=this.getAttributes(L,M,N);

if(P===h){K.src=Q.src||qx.util.ResourceManager.getInstance().toUri(x);
}if(K.style.backgroundPosition!=g&&Q.style.backgroundPosition===undefined){Q.style.backgroundPosition=null;
}if(K.style.clip!=g&&Q.style.clip===undefined){Q.style.clip=null;
}var O=qx.bom.element.Style;
O.setStyles(K,Q.style);
if(this.__iw){try{K.filters[y].apply();
}catch(e){}}},create:function(R,S,T){var U=this.getTagName(S,R);
var W=this.getAttributes(R,S,T);
var V=qx.bom.element.Style.compile(W.style);

if(U===h){return r+W.src+m+V+q;
}else{return B+V+l;
}},getTagName:function(X,Y){if((qx.core.Environment.get(j)==b)){if(Y&&this.__iw&&this.__ix[X]&&qx.lang.String.endsWith(Y,F)){return i;
}}return this.__iy[X];
},getAttributes:function(ba,bb,bc){if(!bc){bc={};
}
if(!bc.position){bc.position=z;
}
if((qx.core.Environment.get(j)==b)){bc.fontSize=0;
bc.lineHeight=0;
}else if((qx.core.Environment.get(j)==u)){bc.WebkitUserDrag=t;
}var be=qx.util.ResourceManager.getInstance().getImageFormat(ba)||qx.io.ImageLoader.getFormat(ba);

if(qx.core.Environment.get(d)){if(ba!=null&&be==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+ba+"'!");
}}var bd;
if(this.__iw&&this.__ix[bb]&&be===n){bd=this.__iB(bc,bb,ba);
}else{if(bb===J){bd=this.__iC(bc,bb,ba);
}else if(bb===c||bb===H){bd=this.__iD(bc,bb,ba);
}else{bd=this.__iG(bc,bb,ba);
}}return bd;
},__iz:function(bf,bh,bi){if(bf.width==null&&bh!=null){bf.width=bh+k;
}
if(bf.height==null&&bi!=null){bf.height=bi+k;
}return bf;
},__iA:function(bj){var bk=qx.util.ResourceManager.getInstance().getImageWidth(bj)||qx.io.ImageLoader.getWidth(bj);
var bl=qx.util.ResourceManager.getInstance().getImageHeight(bj)||qx.io.ImageLoader.getHeight(bj);
return {width:bk,height:bl};
},__iB:function(bm,bn,bo){var br=this.__iA(bo);
bm=this.__iz(bm,br.width,br.height);
var bq=bn==f?E:J;
var bp=C+qx.util.ResourceManager.getInstance().toUri(bo)+p+bq+o;
bm.filter=bp;
bm.backgroundImage=bm.backgroundRepeat=g;
return {style:bm};
},__iC:function(bs,bt,bu){var bv=qx.util.ResourceManager.getInstance().toUri(bu);
var bw=this.__iA(bu);
bs=this.__iz(bs,bw.width,bw.height);
return {src:bv,style:bs};
},__iD:function(bx,by,bz){var bA=qx.util.ResourceManager.getInstance();
var bD=bA.getCombinedFormat(bz);
var bF=this.__iA(bz);
var bB;

if(bD){var bE=bA.getData(bz);
var bC=bE[4];

if(bD==I){bB=bA.toDataUri(bz);
}else{bB=bA.toUri(bC);
}
if(by===c){bx=this.__iE(bx,bE,bF.height);
}else{bx=this.__iF(bx,bE,bF.width);
}return {src:bB,style:bx};
}else{if(qx.core.Environment.get(d)){this.__iI(bz);
}
if(by==c){bx.height=bF.height==null?null:bF.height+k;
}else if(by==H){bx.width=bF.width==null?null:bF.width+k;
}bB=bA.toUri(bz);
return {src:bB,style:bx};
}},__iE:function(bG,bH,bI){var bJ=qx.util.ResourceManager.getInstance().getImageHeight(bH[4]);
bG.clip={top:-bH[6],height:bI};
bG.height=bJ+k;
if(bG.top!=null){bG.top=(parseInt(bG.top,10)+bH[6])+k;
}else if(bG.bottom!=null){bG.bottom=(parseInt(bG.bottom,10)+bI-bJ-bH[6])+k;
}return bG;
},__iF:function(bK,bL,bM){var bN=qx.util.ResourceManager.getInstance().getImageWidth(bL[4]);
bK.clip={left:-bL[5],width:bM};
bK.width=bN+k;
if(bK.left!=null){bK.left=(parseInt(bK.left,10)+bL[5])+k;
}else if(bK.right!=null){bK.right=(parseInt(bK.right,10)+bM-bN-bL[5])+k;
}return bK;
},__iG:function(bO,bP,bQ){var bT=qx.util.ResourceManager.getInstance();
var bY=bT.getCombinedFormat(bQ);
var cb=this.__iA(bQ);
if(bY&&bP!==a){var ca=bT.getData(bQ);
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
}else{if(qx.core.Environment.get(d)){if(bP!==a){this.__iI(bQ);
}}bO=this.__iz(bO,cb.width,cb.height);
bO=this.__iH(bO,bQ,bP);
return {style:bO};
}},__iH:function(cc,cd,ce){var top=null;
var ci=null;

if(cc.backgroundPosition){var cf=cc.backgroundPosition.split(w);
ci=parseInt(cf[0],10);

if(isNaN(ci)){ci=cf[0];
}top=parseInt(cf[1],10);

if(isNaN(top)){top=cf[1];
}}var ch=qx.bom.element.Background.getStyles(cd,ce,ci,top);

for(var cg in ch){cc[cg]=ch[cg];
}if(cc.filter){cc.filter=g;
}return cc;
},__iI:function(cj){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(cj)&&cj.indexOf(G)==-1){if(!this.__iv[cj]){qx.log.Logger.debug("Potential clipped image candidate: "+cj);
this.__iv[cj]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Environment.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__iw;
},"default":function(){return false;
}})}});
})();
(function(){var c="engine.name",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__cN:{},__iJ:{width:null,height:null},__iK:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__cN[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__cN[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__cN[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__cN[k];
return m?m.format:null;
},getSize:function(n){var o=this.__cN[n];
return o?{width:o.width,height:o.height}:this.__iJ;
},getWidth:function(p){var q=this.__cN[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__cN[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__cN[t];

if(!w){w=this.__cN[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__iL,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__cN[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__cN[z]=null;
},__iL:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__cN[E];
if(event.type===b){F.loaded=true;
F.width=this.__iM(D);
F.height=this.__iN(D);
var G=this.__iK.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__iM:qx.core.Environment.select(c,{"gecko":function(I){return I.naturalWidth;
},"default":function(J){return J.width;
}}),__iN:qx.core.Environment.select(c,{"gecko":function(K){return K.naturalHeight;
},"default":function(L){return L.height;
}})}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__iO:[n,null,m,i,null,r,k,null,r],__iP:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__iQ:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__iR:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__iQ(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__iR(G)){G=q+G+q;
}var H=this.__iO;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__iP;
}var L=this.__iQ(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__iR(N)){O=j+N+p;
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
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{statics:{__eP:null,setVisibleElement:function(y){this.__eP=y;
},getVisibleElement:function(){return this.__eP;
}},properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__iS:null,__iT:null,__iU:null,getLayoutLocation:function(z){var C,B,D,top;
B=z.getBounds();
D=B.left;
top=B.top;
var E=B;
z=z.getLayoutParent();

while(z&&!z.isRootWidget()){B=z.getBounds();
D+=B.left;
top+=B.top;
C=z.getInsets();
D+=C.left;
top+=C.top;
z=z.getLayoutParent();
}if(z.isRootWidget()){var A=z.getContainerLocation();

if(A){D+=A.left;
top+=A.top;
}}return {left:D,top:top,right:D+E.width,bottom:top+E.height};
},moveTo:function(F,top){var H=qx.ui.core.MPlacement.getVisibleElement();
if(H){var J=this.getBounds();
var G=H.getContentLocation();
if(J&&G){var K=top+J.height;
var I=F+J.width;
if((I>G.left&&F<G.right)&&(K>G.top&&top<G.bottom)){F=Math.max(G.left-J.width,0);
}}}
if(this.getDomMove()){this.setDomPosition(F,top);
}else{this.setLayoutProperties({left:F,top:top});
}},placeToWidget:function(L,M){if(M){this.__iV();
this.__iS=qx.lang.Function.bind(this.placeToWidget,this,L,false);
qx.event.Idle.getInstance().addListener(i,this.__iS);
this.__iU=function(){this.__iV();
};
this.addListener(g,this.__iU,this);
}var N=L.getContainerLocation()||this.getLayoutLocation(L);
this.__iX(N);
},__iV:function(){if(this.__iS){qx.event.Idle.getInstance().removeListener(i,this.__iS);
this.__iS=null;
}
if(this.__iU){this.removeListener(g,this.__iU,this);
this.__iU=null;
}},placeToMouse:function(event){var P=event.getDocumentLeft();
var top=event.getDocumentTop();
var O={left:P,top:top,right:P,bottom:top};
this.__iX(O);
},placeToElement:function(Q,R){var location=qx.bom.element.Location.get(Q);
var S={left:location.left,top:location.top,right:location.left+Q.offsetWidth,bottom:location.top+Q.offsetHeight};
if(R){this.__iS=qx.lang.Function.bind(this.placeToElement,this,Q,false);
qx.event.Idle.getInstance().addListener(i,this.__iS);
this.addListener(g,function(){if(this.__iS){qx.event.Idle.getInstance().removeListener(i,this.__iS);
this.__iS=null;
}},this);
}this.__iX(S);
},placeToPoint:function(T){var U={left:T.left,top:T.top,right:T.left,bottom:T.top};
this.__iX(U);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__iW:function(V){var W=null;

if(this._computePlacementSize){var W=this._computePlacementSize();
}else if(this.isVisible()){var W=this.getBounds();
}
if(W==null){this.addListenerOnce(q,function(){this.__iW(V);
},this);
}else{V.call(this,W);
}},__iX:function(X){this.__iW(function(Y){var ba=qx.util.placement.Placement.compute(Y,this.getLayoutParent().getBounds(),X,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(ba.left,ba.top);
});
}},destruct:function(){this.__iV();
}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__iY=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__iY:null,_applyTimeoutInterval:function(h){this.__iY.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__iY){this.__iY.stop();
}this.__iY=null;
}});
})();
(function(){var j="top",i="right",h="bottom",g="left",f="edge-start",e="align-start",d="align-end",c="edge-end",b="qx.util.placement.AbstractAxis",a="-",F="best-fit",E="size",D="target.bottom",C="offsets",B='__ja',A="size.width",z="offsets.bottom",y="qx.util.placement.Placement",x="qx.debug",w="keep-align",q="target.right",r="direct",o="offsets.right",p="target",m="offsets.left",n="area",k="target.top",l="area.height",s="target.left",t="area.width",v="size.height",u="offsets.top";
qx.Class.define(y,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ja=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:b},axisY:{check:b},edge:{check:[j,i,h,g],init:j},align:{check:[j,i,h,g],init:i}},statics:{__jb:null,compute:function(G,H,I,J,K,L,M){this.__jb=this.__jb||new qx.util.placement.Placement();
var P=K.split(a);
var O=P[0];
var N=P[1];
this.__jb.set({axisX:this.__jf(L),axisY:this.__jf(M),edge:O,align:N});
return this.__jb.compute(G,H,I,J);
},__jc:null,__jd:null,__je:null,__jf:function(Q){switch(Q){case r:this.__jc=this.__jc||new qx.util.placement.DirectAxis();
return this.__jc;
case w:this.__jd=this.__jd||new qx.util.placement.KeepAlignAxis();
return this.__jd;
case F:this.__je=this.__je||new qx.util.placement.BestFitAxis();
return this.__je;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__ja:null,compute:function(R,S,T,U){if(qx.core.Environment.get(x)){this.assertObject(R,E);
this.assertNumber(R.width,A);
this.assertNumber(R.height,v);
this.assertObject(S,n);
this.assertNumber(S.width,t);
this.assertNumber(S.height,l);
this.assertObject(T,p);
this.assertNumber(T.top,k);
this.assertNumber(T.right,q);
this.assertNumber(T.bottom,D);
this.assertNumber(T.left,s);
this.assertObject(U,C);
this.assertNumber(U.top,u);
this.assertNumber(U.right,o);
this.assertNumber(U.bottom,z);
this.assertNumber(U.left,m);
}var V=this.getAxisX()||this.__ja;
var X=V.computeStart(R.width,{start:T.left,end:T.right},{start:U.left,end:U.right},S.width,this.__jg());
var W=this.getAxisY()||this.__ja;
var top=W.computeStart(R.height,{start:T.top,end:T.bottom},{start:U.top,end:U.bottom},S.height,this.__jh());
return {left:X,top:top};
},__jg:function(){var ba=this.getEdge();
var Y=this.getAlign();

if(ba==g){return f;
}else if(ba==i){return c;
}else if(Y==g){return e;
}else if(Y==i){return d;
}},__jh:function(){var bc=this.getEdge();
var bb=this.getAlign();

if(bc==j){return f;
}else if(bc==h){return c;
}else if(bb==j){return e;
}else if(bb==h){return d;
}}},destruct:function(){this._disposeObjects(B);
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
(function(){var j="nonScaled",i="scaled",h="alphaScaled",g=".png",f="div",e="replacement",d="qx.event.type.Event",c="engine.name",b="hidden",a="Boolean",B="px",A="http",z="engine.version",y="scale",x="changeSource",w="qx.ui.basic.Image",v="loaded",u="qx.debug",t="-disabled.$1",s="loadingFailed",q="String",r="__ji",o="_applySource",p="img",m="image",n="mshtml",k="_applyScale",l="no-repeat";
qx.Class.define(w,{extend:qx.ui.core.Widget,construct:function(C){this.__ji={};
qx.ui.core.Widget.call(this);

if(C){this.setSource(C);
}},properties:{source:{check:q,init:null,nullable:true,event:x,apply:o,themeable:true},scale:{check:a,init:false,themeable:true,apply:k},appearance:{refine:true,init:m},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:d,loaded:d},members:{__jj:null,__jk:null,__fq:null,__ji:null,getContentElement:function(){return this.__jo();
},_createContentElement:function(){return this.__jo();
},_getContentHint:function(){return {width:this.__jj||0,height:this.__jk||0};
},_applyEnabled:function(D,E){qx.ui.core.Widget.prototype._applyEnabled.call(this,D,E);

if(this.getSource()){this._styleSource();
}},_applySource:function(F){this._styleSource();
},_applyScale:function(G){this._styleSource();
},__jl:function(H){this.__fq=H;
},__jm:function(){if(this.__fq==null){var J=this.getSource();
var I=false;

if(J!=null){I=qx.lang.String.endsWith(J,g);
}
if(this.getScale()&&I&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__fq=h;
}else if(this.getScale()){this.__fq=i;
}else{this.__fq=j;
}}return this.__fq;
},__jn:function(K){var L;
var M;

if(K==h){L=true;
M=f;
}else if(K==j){L=false;
M=f;
}else{L=true;
M=p;
}var N=new qx.html.Image(M);
N.setScale(L);
N.setStyles({"overflowX":b,"overflowY":b});
return N;
},__jo:function(){var O=this.__jm();

if(this.__ji[O]==null){this.__ji[O]=this.__jn(O);
}return this.__ji[O];
},_styleSource:function(){var P=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!P){this.getContentElement().resetSource();
return;
}this.__jp(P);

if((qx.core.Environment.get(c)==n)&&parseInt(qx.core.Environment.get(z),10)<9){var Q=this.getScale()?y:l;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(Q,P);
}if(qx.util.ResourceManager.getInstance().has(P)){this.__jr(this.getContentElement(),P);
}else if(qx.io.ImageLoader.isLoaded(P)){this.__js(this.getContentElement(),P);
}else{this.__jt(this.getContentElement(),P);
}},__jp:qx.core.Environment.select(c,{"mshtml":function(R){var T=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var S=qx.lang.String.endsWith(R,g);

if(T&&S){if(this.getScale()&&this.__jm()!=h){this.__jl(h);
}else if(!this.getScale()&&this.__jm()!=j){this.__jl(j);
}}else{if(this.getScale()&&this.__jm()!=i){this.__jl(i);
}else if(!this.getScale()&&this.__jm()!=j){this.__jl(j);
}}this.__jq(this.__jo());
},"default":function(U){if(this.getScale()&&this.__jm()!=i){this.__jl(i);
}else if(!this.getScale()&&this.__jm(j)){this.__jl(j);
}this.__jq(this.__jo());
}}),__jq:function(V){var Y=this.getContainerElement();
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
}},__jr:function(bd,be){var bg=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bf=be.replace(/\.([a-z]+)$/,t);

if(bg.has(bf)){be=bf;
this.addState(e);
}else{this.removeState(e);
}}if(bd.getSource()===be){return;
}bd.setSource(be);
this.__jv(bg.getImageWidth(be),bg.getImageHeight(be));
},__js:function(bh,bi){var bk=qx.io.ImageLoader;
bh.setSource(bi);
var bj=bk.getWidth(bi);
var bl=bk.getHeight(bi);
this.__jv(bj,bl);
},__jt:function(bm,bn){var bo=qx.io.ImageLoader;

if(qx.core.Environment.get(u)){if(!qx.lang.String.startsWith(bn.toLowerCase(),A)){var self=this.self(arguments);

if(!self.__EW){self.__EW={};
}
if(!self.__EW[bn]){this.debug("try to load an unmanaged relative image: "+bn);
self.__EW[bn]=true;
}}}if(!bo.isFailed(bn)){bo.load(bn,this.__ju,this);
}else{if(bm!=null){bm.resetSource();
}}},__ju:function(bp,bq){if(this.$$disposed===true){return;
}if(bp!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bq.failed){this.warn("Image could not be loaded: "+bp);
this.fireEvent(s);
}else if(bq.aborted){return ;
}else{this.fireEvent(v);
}this._styleSource();
},__jv:function(br,bs){if(br!==this.__jj||bs!==this.__jk){this.__jj=br;
this.__jk=bs;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(r);
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
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(e){qx.ui.core.Widget.call(this);

if(e!=null){this._setLayout(e);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
},_afterRemoveChild:function(g){this.fireNonBubblingEvent(a,qx.event.type.Data,[g]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
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
(function(){var g="mousedown",f="qx.debug",d="blur",c="qx.ui.popup.Manager",b="__jw",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jw=[];
qx.event.Registration.addListener(document.documentElement,g,this.__jy,this,true);
qx.bom.Element.addListener(window,d,this.hideAll,this);
},members:{__jw:null,add:function(h){if(qx.core.Environment.get(f)){if(!(h instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+h);
}}this.__jw.push(h);
this.__jx();
},remove:function(j){if(qx.core.Environment.get(f)){if(!(j instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+j);
}}
if(this.__jw){qx.lang.Array.remove(this.__jw,j);
this.__jx();
}},hideAll:function(){var k;
var m=this.__jw;

if(m){for(var i=0,l=m.length;i<l;i++){var k=m[i];
k.getAutoHide()&&k.exclude();
}}},__jx:function(){var n=1e7;

for(var i=0;i<this.__jw.length;i++){this.__jw[i].setZIndex(n++);
}},__jy:function(e){var p=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var q=this.__jw;

for(var i=0;i<q.length;i++){var o=q[i];

if(!o.getAutoHide()||p==o||qx.ui.core.Widget.contains(o,p)){continue;
}o.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__jy,this,true);
this._disposeArray(b);
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
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="color",j="qx.dynlocale",i="Boolean",h="qx.debug",g="enabled",f="changeLocale",d="_applyTextAlign",c="qx.ui.core.Widget",b="nowrap",a="changeStatus",F="changeTextAlign",E="_applyWrap",D="changeValue",C="qx.ui.basic.Label",B="whiteSpace",A="css.textoverflow",z="html.xul",y="_applyValue",x="center",w="_applyBuddy",r="String",s="textAlign",p="right",q="justify",n="changeRich",o="normal",l="_applyRich",m="click",t="label",u="left",v="A";
qx.Class.define(C,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(G){qx.ui.core.Widget.call(this);

if(G!=null){this.setValue(G);
}
if(qx.core.Environment.get(j)){qx.locale.Manager.getInstance().addListener(f,this._onChangeLocale,this);
}},properties:{rich:{check:i,init:false,event:n,apply:l},wrap:{check:i,init:true,apply:E},value:{check:r,apply:y,event:D,nullable:true},buddy:{check:c,apply:w,nullable:true,init:null,dereference:true},textAlign:{check:[u,x,p,q],nullable:true,themeable:true,apply:d,event:F},appearance:{refine:true,init:t},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__jA:null,__jB:null,__jC:null,__jD:null,__jE:null,_getContentHint:function(){if(this.__jB){this.__jF=this.__jG();
delete this.__jB;
}return {width:this.__jF.width,height:this.__jF.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(H){if(!qx.core.Environment.get(A)&&qx.core.Environment.get(z)){if(H&&!this.isRich()){if(qx.core.Environment.get(h)){this.warn("Only rich labels are selectable in browsers with Gecko engine!");
}return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,H);
},_getContentHeightForWidth:function(I){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__jG(I).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(J,K){this.getContentElement().setStyle(s,J);
},_applyTextColor:function(L,M){if(L){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(L));
}else{this.getContentElement().removeStyle(k);
}},__jF:{width:0,height:0},_applyFont:function(N,O){if(O&&this.__jA&&this.__jE){this.__jA.removeListenerById(this.__jE);
this.__jE=null;
}var P;

if(N){this.__jA=qx.theme.manager.Font.getInstance().resolve(N);

if(this.__jA instanceof qx.bom.webfonts.WebFont){this.__jE=this.__jA.addListener(a,this._onWebFontStatusChange,this);
}P=this.__jA.getStyles();
}else{this.__jA=null;
P=qx.bom.Font.getDefaultStyles();
}if(this.getTextColor()!=null){delete P[k];
}this.getContentElement().setStyles(P);
this.__jB=true;
qx.ui.core.queue.Layout.add(this);
},__jG:function(Q){var U=qx.bom.Label;
var S=this.getFont();
var R=S?this.__jA.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||v;
var T=this.getRich();
return T?U.getHtmlSize(content,R,Q):U.getTextSize(content,R);
},_applyBuddy:function(V,W){if(W!=null){W.removeBinding(this.__jC);
this.__jC=null;
this.removeListenerById(this.__jD);
this.__jD=null;
}
if(V!=null){this.__jC=V.bind(g,this,g);
this.__jD=this.addListener(m,function(){if(V.isFocusable()){V.focus.apply(V);
}},this);
}},_applyRich:function(X){this.getContentElement().setRich(X);
this.__jB=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(Y,ba){if(Y&&!this.isRich()){if(qx.core.Environment.get(h)){this.warn("Only rich labels support wrap.");
}}
if(this.isRich()){var bb=Y?o:b;
this.getContentElement().setStyle(B,bb);
}},_onChangeLocale:qx.core.Environment.select(j,{"true":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"false":null}),_onWebFontStatusChange:function(bc){if(bc.getData().valid===true){this.__jB=true;
qx.ui.core.queue.Layout.add(this);
}},_applyValue:function(bd,be){this.getContentElement().setValue(bd);
this.__jB=true;
qx.ui.core.queue.Layout.add(this);
}},destruct:function(){if(qx.core.Environment.get(j)){qx.locale.Manager.getInstance().removeListener(f,this._onChangeLocale,this);
}if(this.__jC!=null){var bf=this.getBuddy();

if(bf!=null&&!bf.isDisposed()){bf.removeBinding(this.__jC);
}}
if(this.__jA&&this.__jE){this.__jA.removeListenerById(this.__jE);
}this.__jA=this.__jC=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__jH:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__jH;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(g){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__jH==h){return;
}this.__jH=h;
return this;
},setValue:function(j){this._setProperty(b,j);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var j="css.textoverflow",i="html.xul",h="div",g="auto",f="0",e="inherit",d="text",c="value",b="",a="engine.name",C="hidden",B="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",A="nowrap",z="ellipsis",y="normal",x="block",w="label",v="px",u="crop",t="gecko",q="end",r="100%",o="visible",p="qx.bom.Label",m="opera",n="engine.version",k="mshtml",l="-1000px",s="absolute";
qx.Class.define(p,{statics:{__jI:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jJ:function(){var D=this.__jL(false);
document.body.insertBefore(D,document.body.firstChild);
return this._textElement=D;
},__jK:function(){var E=this.__jL(true);
document.body.insertBefore(E,document.body.firstChild);
return this._htmlElement=E;
},__jL:function(F){var G=qx.bom.Element.create(h);
var H=G.style;
H.width=H.height=g;
H.left=H.top=l;
H.visibility=C;
H.position=s;
H.overflow=o;
H.display=x;

if(F){H.whiteSpace=y;
}else{H.whiteSpace=A;

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var I=document.createElementNS(B,w);
var H=I.style;
H.padding=f;
H.margin=f;
H.width=g;

for(var J in this.__jI){H[J]=e;
}G.appendChild(I);
}}return G;
},__jM:function(K){var L={};

if(K){L.whiteSpace=y;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){L.display=x;
}else{L.overflow=C;
L.whiteSpace=A;
L.textOverflow=z;
if((qx.core.Environment.get(a)==m)){L.OTextOverflow=z;
}}return L;
},create:function(content,M,N){if(!N){N=window;
}
if(M){var O=N.document.createElement(h);
O.useHtml=true;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var O=N.document.createElement(h);
var Q=N.document.createElementNS(B,w);
var P=Q.style;
P.cursor=e;
P.color=e;
P.overflow=C;
P.maxWidth=r;
P.padding=f;
P.margin=f;
P.width=g;
for(var R in this.__jI){Q.style[R]=e;
}Q.setAttribute(u,q);
O.appendChild(Q);
}else{var O=N.document.createElement(h);
qx.bom.element.Style.setStyles(O,this.__jM(M));
}
if(content){this.setValue(O,content);
}return O;
},setValue:function(S,T){T=T||b;

if(S.useHtml){S.innerHTML=T;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){S.firstChild.setAttribute(c,T);
}else{qx.bom.element.Attribute.set(S,d,T);
}},getValue:function(U){if(U.useHtml){return U.innerHTML;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){return U.firstChild.getAttribute(c)||b;
}else{return qx.bom.element.Attribute.get(U,d);
}},getHtmlSize:function(content,V,W){var X=this._htmlElement||this.__jK();
X.style.width=W!=undefined?W+v:g;
X.innerHTML=content;
return this.__jN(X,V);
},getTextSize:function(Y,ba){var bb=this._textElement||this.__jJ();

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){bb.firstChild.setAttribute(c,Y);
}else{qx.bom.element.Attribute.set(bb,d,Y);
}return this.__jN(bb,ba);
},__jN:function(bc,bd){var be=this.__jI;

if(!bd){bd={};
}
for(var bf in be){bc.style[bf]=bd[bf]||b;
}var bg=qx.bom.element.Dimension.getSize(bc);
if((qx.core.Environment.get(a)==t)){bg.width++;
}if((qx.core.Environment.get(a)==k)&&parseFloat(qx.core.Environment.get(n))>=9){bg.width++;
}return bg;
}}});
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
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__jO",b="__eD",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__jO:null,__eD:null,getWindowManager:function(){if(!this.__eD){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__eD;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__eD){this.__eD.setDesktop(null);
}j.setDesktop(this);
this.__eD=j;
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
},getWindows:function(){if(!this.__jO){this.__jO=[];
}return this.__jO;
}},destruct:function(){this._disposeArray(c);
this._disposeObjects(b);
}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__jP",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__jP=this._createBlocker();
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__jP:null,_createBlocker:function(){return new qx.ui.core.Blocker(this);
},_applyBlockerColor:function(g,h){this.__jP.setColor(g);
},_applyBlockerOpacity:function(i,j){this.__jP.setOpacity(i);
},block:function(){this.__jP.block();
},isBlocked:function(){return this.__jP.isBlocked();
},unblock:function(){this.__jP.unblock();
},forceUnblock:function(){this.__jP.forceUnblock();
},blockContent:function(k){this.__jP.blockContent(k);
},isContentBlocked:function(){return this.__jP.isContentBlocked();
},unblockContent:function(){this.__jP.unblockContent();
},forceUnblockContent:function(){this.__jP.forceUnblockContent();
},getBlocker:function(){return this.__jP;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="resize",f="keyup",d="keypress",c="backgroundColor",b="_applyOpacity",a="Boolean",x="__jU",w="opacity",v="interval",u="Tab",t="__jP",s="Color",r="qx.ui.root.Page",q="Number",p="qx.ui.core.Blocker",o="qx.ui.root.Application",m="__iY",n="_applyColor";
qx.Class.define(p,{extend:qx.core.Object,construct:function(y){qx.core.Object.call(this);
this._widget=y;
this._isPageRoot=(qx.Class.isDefined(r)&&y instanceof qx.ui.root.Page);

if(this._isPageRoot){y.addListener(g,this.__jW,this);
}
if(qx.Class.isDefined(o)&&y instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__jQ=[];
this.__jR=[];
this.__jS=[];
},properties:{color:{check:s,init:null,nullable:true,apply:n,themeable:true},opacity:{check:q,init:1,apply:b,themeable:true},keepBlockerActive:{check:a,init:false}},members:{__jP:null,__jT:0,__jU:null,__jS:null,__jQ:null,__jR:null,__jV:null,__iY:null,_isPageRoot:false,_widget:null,__jW:function(e){var z=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:z.width,height:z.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:z.width,height:z.height});
}},_applyColor:function(A,B){var C=qx.theme.manager.Color.getInstance().resolve(A);
this.__jX(c,C);
},_applyOpacity:function(D,E){this.__jX(w,D);
},__jX:function(F,G){var H=[];
this.__jP&&H.push(this.__jP);
this.__jU&&H.push(this.__jU);

for(var i=0;i<H.length;i++){H[i].setStyle(F,G);
}},_backupActiveWidget:function(){var I=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__jQ.push(I.getActive());
this.__jR.push(I.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var L=this.__jQ.length;

if(L>0){var K=this.__jQ[L-1];

if(K){qx.bom.Element.activate(K);
}this.__jQ.pop();
}var J=this.__jR.length;

if(J>0){var K=this.__jR[J-1];

if(K){qx.bom.Element.focus(this.__jR[J-1]);
}this.__jR.pop();
}},__jY:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__jP){this.__jP=this.__jY();
this.__jP.setStyle(l,15);
this._widget.getContainerElement().add(this.__jP);
this.__jP.exclude();
}return this.__jP;
},block:function(){this.__jT++;

if(this.__jT<2){this._backupActiveWidget();
var M=this.getBlockerElement();
M.include();
M.activate();
M.addListener(h,this.__ke,this);
M.addListener(d,this.__kd,this);
M.addListener(j,this.__kd,this);
M.addListener(f,this.__kd,this);
}},isBlocked:function(){return this.__jT>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__jT--;

if(this.__jT<1){this.__ka();
this.__jT=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__jT=0;
this.__ka();
},__ka:function(){this._restoreActiveWidget();
var N=this.getBlockerElement();
N.removeListener(h,this.__ke,this);
N.removeListener(d,this.__kd,this);
N.removeListener(j,this.__kd,this);
N.removeListener(f,this.__kd,this);
N.exclude();
},getContentBlockerElement:function(){if(!this.__jU){this.__jU=this.__jY();
this._widget.getContentElement().add(this.__jU);
this.__jU.exclude();
}return this.__jU;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(l,O);
this.__jS.push(O);

if(this.__jS.length<2){P.include();

if(this._isPageRoot){if(!this.__iY){this.__iY=new qx.event.Timer(300);
this.__iY.addListener(v,this.__kc,this);
}this.__iY.start();
this.__kc();
}}},isContentBlocked:function(){return this.__jS.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jS.pop();
var Q=this.__jS[this.__jS.length-1];
var R=this.getContentBlockerElement();
R.setStyle(l,Q);

if(this.__jS.length<1){this.__kb();
this.__jS=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jS=[];
var S=this.getContentBlockerElement();
S.setStyle(l,null);
this.__kb();
},__kb:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__iY.stop();
}},__kc:function(){var T=this._widget.getContainerElement().getDomElement();
var U=qx.dom.Node.getDocument(T);
this.getContentBlockerElement().setStyles({height:U.documentElement.scrollHeight+k,width:U.documentElement.scrollWidth+k});
},__kd:function(e){if(e.getKeyIdentifier()==u){e.stop();
}},__ke:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(g,this.__jW,this);
}this._disposeObjects(x,t,m);
this.__jV=this.__jQ=this.__jR=this._widget=this.__jS=null;
}});
})();
(function(){var t="engine.name",s="help",r="contextmenu",q="changeGlobalCursor",p="keypress",o="Boolean",n="root",m="",l=" !important",k="input",d="_applyGlobalCursor",j="Space",h="_applyNativeHelp",c=";",b="qx.ui.root.Abstract",g="abstract",f="textarea",i="String",a="*";
qx.Class.define(b,{type:g,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
this.addListener(p,this.__kg,this);
},properties:{appearance:{refine:true,init:n},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:i,nullable:true,themeable:true,apply:d,event:q},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:o,init:false,apply:h}},members:{__kf:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Environment.select(t,{"mshtml":function(u,v){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__kf;

if(!z){this.__kf=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,a,qx.bom.element.Cursor.compile(w).replace(c,m)+l);
}}}),_applyNativeContextMenu:function(A,B){if(A){this.removeListener(r,this._onNativeContextMenu,this,true);
}else{this.addListener(r,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},__kg:function(e){if(e.getKeyIdentifier()!==j){return;
}var D=e.getTarget();
var C=qx.ui.core.FocusHandler.getInstance();

if(!C.isFocused(D)){return;
}var E=D.getContentElement().getNodeName();

if(E===k||E===f){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Environment.select(t,{"mshtml":function(F,G){if(G===false){qx.bom.Event.removeNativeListener(document,s,qx.lang.Function.returnFalse);
}
if(F===false){qx.bom.Event.addNativeListener(document,s,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__kf=null;
},defer:function(H,I){qx.ui.core.MChildrenHandling.remap(I);
}});
})();
(function(){var k="__kh",j="keypress",h="focusout",g="activate",f="Tab",d="singleton",c="deactivate",b="focusin",a="qx.ui.core.FocusHandler";
qx.Class.define(a,{extend:qx.core.Object,type:d,construct:function(){qx.core.Object.call(this);
this.__kh={};
},members:{__kh:null,__ki:null,__kj:null,__kk:null,connectTo:function(m){m.addListener(j,this.__gl,this);
m.addListener(b,this._onFocusIn,this,true);
m.addListener(h,this._onFocusOut,this,true);
m.addListener(g,this._onActivate,this,true);
m.addListener(c,this._onDeactivate,this,true);
},addRoot:function(n){this.__kh[n.$$hash]=n;
},removeRoot:function(o){delete this.__kh[o.$$hash];
},getActiveWidget:function(){return this.__ki;
},isActive:function(p){return this.__ki==p;
},getFocusedWidget:function(){return this.__kj;
},isFocused:function(q){return this.__kj==q;
},isFocusRoot:function(r){return !!this.__kh[r.$$hash];
},_onActivate:function(e){var t=e.getTarget();
this.__ki=t;
var s=this.__kl(t);

if(s!=this.__kk){this.__kk=s;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__ki==u){this.__ki=null;
}},_onFocusIn:function(e){var v=e.getTarget();

if(v!=this.__kj){this.__kj=v;
v.visualizeFocus();
}},_onFocusOut:function(e){var w=e.getTarget();

if(w==this.__kj){this.__kj=null;
w.visualizeBlur();
}},__gl:function(e){if(e.getKeyIdentifier()!=f){return;
}
if(!this.__kk){return;
}e.stopPropagation();
e.preventDefault();
var x=this.__kj;

if(!e.isShiftPressed()){var y=x?this.__kp(x):this.__kn();
}else{var y=x?this.__kq(x):this.__ko();
}if(y){y.tabFocus();
}},__kl:function(z){var A=this.__kh;

while(z){if(A[z.$$hash]){return z;
}z=z.getLayoutParent();
}return null;
},__km:function(B,C){if(B===C){return 0;
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
},__kn:function(){return this.__kt(this.__kk,null);
},__ko:function(){return this.__ku(this.__kk,null);
},__kp:function(M){var N=this.__kk;

if(N==M){return this.__kn();
}
while(M&&M.getAnonymous()){M=M.getLayoutParent();
}
if(M==null){return [];
}var O=[];
this.__kr(N,M,O);
O.sort(this.__km);
var P=O.length;
return P>0?O[0]:this.__kn();
},__kq:function(Q){var R=this.__kk;

if(R==Q){return this.__ko();
}
while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();
}
if(Q==null){return [];
}var S=[];
this.__ks(R,Q,S);
S.sort(this.__km);
var T=S.length;
return T>0?S[T-1]:this.__ko();
},__kr:function(parent,U,V){var W=parent.getLayoutChildren();
var X;

for(var i=0,l=W.length;i<l;i++){X=W[i];
if(!(X instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__km(U,X)<0){V.push(X);
}this.__kr(X,U,V);
}}},__ks:function(parent,Y,ba){var bb=parent.getLayoutChildren();
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
if(!(bc instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__km(Y,bc)>0){ba.push(bc);
}this.__ks(bc,Y,ba);
}}},__kt:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__km(bf,bd)<0){bd=bf;
}}bd=this.__kt(bf,bd);
}}return bd;
},__ku:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__km(bi,bg)>0){bg=bi;
}}bg=this.__ku(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(k);
this.__kj=this.__ki=this.__kk=null;
}});
})();
(function(){var n="resize",m="engine.name",l="position",k="0px",j="webkit",i="paddingLeft",h="$$widget",g="qx.ui.root.Application",f="hidden",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(g,{extend:qx.ui.root.Abstract,construct:function(o){this.__cu=qx.dom.Node.getWindow(o);
this.__kv=o;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__cu,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__cu:null,__kv:null,_createContainerElement:function(){var p=this.__kv;
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
}},_computeSizeHint:function(){var u=qx.bom.Viewport.getWidth(this.__cu);
var v=qx.bom.Viewport.getHeight(this.__cu);
return {minWidth:u,width:u,maxWidth:u,minHeight:v,height:v,maxHeight:v};
},_applyPadding:function(w,x,name){if(w&&(name==a||name==i)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,w,x,name);
},_applyDecorator:function(y,z){qx.ui.root.Abstract.prototype._applyDecorator.call(this,y,z);

if(!y){return;
}var A=this.getDecoratorElement().getInsets();

if(A.left||A.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__cu=this.__kv=null;
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
this.addListener(t,this.__kw,this);
this.addListener(n,this.__kw,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__kw:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__pr:null,handleMouseDown:function(c,d){if(d.isLeftPressed()){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){this._handleSelectEvent(c,d);
this.__pr=true;
}else{this.__pr=false;
}}else if(d.isRightPressed()&&d.getModifiers()==0){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){e.setSelectionInterval(c,c);
}}},handleMouseUp:function(f,g){if(g.isLeftPressed()&&!this.__pr){this._handleSelectEvent(f,g);
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
this.__ps=[];
this.__pt=-1;
this.__pu=-1;
this.hasBatchModeRefCount=0;
this.__pv=false;
},events:{"changeSelection":f},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:a}},members:{__pv:null,__pt:null,__pu:null,__ps:null,_applySelectionMode:function(o){this.resetSelection();
},setBatchMode:function(p){if(p){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__pv){this.__pv=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__pt;
},_setAnchorSelectionIndex:function(q){this.__pt=q;
},getLeadSelectionIndex:function(){return this.__pu;
},_setLeadSelectionIndex:function(r){this.__pu=r;
},_getSelectedRangeArr:function(){return this.__ps;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__ps.length==0;
},getSelectedCount:function(){var t=0;

for(var i=0;i<this.__ps.length;i++){var s=this.__ps[i];
t+=s.maxIndex-s.minIndex+1;
}return t;
},isSelectedIndex:function(u){for(var i=0;i<this.__ps.length;i++){var v=this.__ps[i];

if(u>=v.minIndex&&u<=v.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var w=[];

for(var i=0;i<this.__ps.length;i++){w.push({minIndex:this.__ps[i].minIndex,maxIndex:this.__ps[i].maxIndex});
}return w;
},iterateSelection:function(x,y){for(var i=0;i<this.__ps.length;i++){for(var j=this.__ps[i].minIndex;j<=this.__ps[i].maxIndex;j++){x.call(y,j);
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
}},removeSelectionInterval:function(F,G){this.__pt=F;
this.__pu=G;
var H=Math.min(F,G);
var J=Math.max(F,G);
for(var i=0;i<this.__ps.length;i++){var L=this.__ps[i];

if(L.minIndex>J){break;
}else if(L.maxIndex>=H){var M=(L.minIndex>=H)&&(L.minIndex<=J);
var K=(L.maxIndex>=H)&&(L.maxIndex<=J);

if(M&&K){this.__ps.splice(i,1);
i--;
}else if(M){L.minIndex=J+1;
}else if(K){L.maxIndex=H-1;
}else{var I={minIndex:J+1,maxIndex:L.maxIndex};
this.__ps.splice(i+1,0,I);
L.maxIndex=H-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__ps=[];
this.__pt=-1;
this.__pu=-1;
},_addSelectionInterval:function(N,O){this.__pt=N;
this.__pu=O;
var P=Math.min(N,O);
var R=Math.max(N,O);
var Q=0;

for(;Q<this.__ps.length;Q++){var S=this.__ps[Q];

if(S.minIndex>P){break;
}}this.__ps.splice(Q,0,{minIndex:P,maxIndex:R});
var T=this.__ps[0];

for(var i=1;i<this.__ps.length;i++){var S=this.__ps[i];

if(T.maxIndex+1>=S.minIndex){T.maxIndex=Math.max(T.maxIndex,S.maxIndex);
this.__ps.splice(i,1);
i--;
}else{T=S;
}}},_dumpRanges:function(){var U=d;

for(var i=0;i<this.__ps.length;i++){var V=this.__ps[i];
U+=k+V.minIndex+m+V.maxIndex+n;
}this.debug(U);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__pv=true;
}else{this.fireEvent(l);
}}},destruct:function(){this.__ps=null;
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(b,c){},getRowHeightStyle:function(d){},createRowStyle:function(e){},getRowClass:function(f){}}});
})();
(function(){var j="",i="table-row-background-even",h="Boolean",g="content",f="default",e="height:",d="'",c="table-row",b="table-row-background-focused",a="css.boxmodel",v=';color:',u="table-row-background-odd",t="1px solid ",s="table-row-line",r="table-row-background-selected",q="background-color:",p=';border-bottom: 1px solid ',o="table-row-selected",n="table-row-background-focused-selected",m="px;",k="qx.ui.table.rowrenderer.Default",l=";";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__oR=j;
this.__oR={};
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
},properties:{highlightFocusRow:{check:h,init:true}},members:{_colors:null,__oS:null,__oR:null,_insetY:1,_renderFont:function(x){if(x){this.__oS=x.getStyles();
this.__oR=qx.bom.element.Style.compile(this.__oS);
this.__oR=this.__oR.replace(/"/g,d);
}else{this.__oR=j;
this.__oS=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(y,z){var B=this.__oS;
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
E.push(this.__oR);
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
}},destruct:function(){this._colors=this.__oS=this.__oR=null;
}});
})();
(function(){var e="first",d="last",c="hovered",b="__pw",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__jP=new qx.ui.core.Blocker(this);
this.__pw=f;
},members:{__pw:null,__pE:null,__pF:null,__jP:null,getPaneScroller:function(){return this.__pw;
},getTable:function(){return this.__pw.getTable();
},getBlocker:function(){return this.__jP;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(g,h,i){var j=this.getHeaderWidgetAtColumn(g);

if(j!=null){j.setWidth(h);
}},setMouseOverColumn:function(k){if(k!=this.__pF){if(this.__pF!=null){var l=this.getHeaderWidgetAtColumn(this.__pF);

if(l!=null){l.removeState(c);
}}
if(k!=null){this.getHeaderWidgetAtColumn(k).addState(c);
}this.__pF=k;
}},getHeaderWidgetAtColumn:function(m){var n=this.getPaneScroller().getTablePaneModel().getX(m);
return this._getChildren()[n];
},showColumnMoveFeedback:function(o,x){var s=this.getContainerLocation();

if(this.__pE==null){var y=this.getTable();
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
this.__pE=q;
}this.__pE.setLayoutProperties({left:s.left+x});
this.__pE.show();
},hideColumnMoveFeedback:function(){if(this.__pE!=null){this.__pE.destroy();
this.__pE=null;
}},isShowingColumnMoveFeedback:function(){return this.__pE!=null;
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
}}},destruct:function(){this.__jP.dispose();
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
}},properties:{alignX:{check:[r,p,b],init:r,apply:s},alignY:{check:[o,m,h],init:o,apply:s},spacing:{check:a,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:g,init:false,apply:k}},members:{__ld:null,__la:null,__lb:null,__fa:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__lc:function(){var B=this._getLayoutChildren();
var length=B.length;
var y=false;
var w=this.__ld&&this.__ld.length!=length&&this.__la&&this.__ld;
var z;
var x=w?this.__ld:new Array(length);
var A=w?this.__la:new Array(length);
if(this.getReversed()){B=B.concat().reverse();
}for(var i=0;i<length;i++){z=B[i].getLayoutProperties();

if(z.width!=null){x[i]=parseFloat(z.width)/100;
}
if(z.flex!=null){A[i]=z.flex;
y=true;
}else{A[i]=0;
}}if(!w){this.__ld=x;
this.__la=A;
}this.__lb=y;
this.__fa=B;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Environment.select(j,{"true":function(C,name,D){this.assert(name===f||name===q,e+name+c);

if(name==q){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(D);
this.assert(D>=0);
}},"false":null}),renderLayout:function(E,F){if(this._invalidChildrenCache){this.__lc();
}var L=this.__fa;
var length=L.length;
var U=qx.ui.layout.Util;
var T=this.getSpacing();
var X=this.getSeparator();

if(X){var I=U.computeHorizontalSeparatorGaps(L,T,X);
}else{var I=U.computeHorizontalGaps(L,T,true);
}var i,G,R,Q;
var W=[];
var M=I;

for(i=0;i<length;i+=1){Q=this.__ld[i];
R=Q!=null?Math.floor((E-I)*Q):L[i].getSizeHint().width;
W.push(R);
M+=R;
}if(this.__lb&&M!=E){var O={};
var S,V;

for(i=0;i<length;i+=1){S=this.__la[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lc();
}var bj=qx.ui.layout.Util;
var br=this.__fa;
var bd=0,bk=0,bh=0;
var bg=0,bi=0;
var bo,be,bq;
for(var i=0,l=br.length;i<l;i+=1){bo=br[i];
be=bo.getSizeHint();
bk+=be.width;
var bn=this.__la[i];
var bf=this.__ld[i];

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
}},destruct:function(){this.__ld=this.__la=this.__fa=null;
}});
})();
(function(){var k="",j="Number",h='</div>',g='" ',f="paneUpdated",e='<div>',d="</div>",c="overflow: hidden;",b="qx.event.type.Data",a="paneReloadsData",E="div",D='style="',C="_applyMaxCacheLines",B="qx.ui.table.pane.Pane",A="width: 100%;",z="qx.event.type.Event",w="_applyVisibleRowCount",v='>',u="line-height: ",t="appear",r='class="',s="width:100%;",p="px;",q='<div ',n="'>",o="_applyFirstVisibleRow",l="<div style='",m=";position:relative;";
qx.Class.define(B,{extend:qx.ui.core.Widget,construct:function(F){qx.ui.core.Widget.call(this);
this.__pw=F;
this.__px=0;
this.__oM=0;
this.__py=[];
},events:{"paneReloadsData":b,"paneUpdated":z},properties:{firstVisibleRow:{check:j,init:0,apply:o},visibleRowCount:{check:j,init:0,apply:w},maxCacheLines:{check:j,init:1000,apply:C},allowShrinkX:{refine:true,init:false}},members:{__oM:null,__px:null,__pw:null,__pz:null,__oJ:null,__oI:null,__py:null,__pA:0,_applyFirstVisibleRow:function(G,H){this.updateContent(false,G-H);
},_applyVisibleRowCount:function(I,J){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__pw;
},getTable:function(){return this.__pw.getTable();
},setFocusedCell:function(K,L,M){if(K!=this.__oI||L!=this.__oJ){var N=this.__oJ;
this.__oI=K;
this.__oJ=L;
if(L!=N&&!M){if(N!==null){this.updateContent(false,null,N,true);
}
if(L!==null){this.updateContent(false,null,L,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(O,P){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(Q,R,S,T){this.__pB();
var V=this.getFirstVisibleRow();
var U=this.getVisibleRowCount();

if(R==-1||R>=V&&Q<V+U){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(W,X){if(this.__pA>=W&&W!==-1){this.__pB();
}},__pB:function(){this.__py=[];
this.__pA=0;
},__pC:function(Y,ba,bb){if(!ba&&!bb&&this.__py[Y]){return this.__py[Y];
}else{return null;
}},__pD:function(bc,bd,be,bf){var bg=this.getMaxCacheLines();

if(!be&&!bf&&!this.__py[bc]&&bg>0){this._applyMaxCacheLines(bg);
this.__py[bc]=bd;
this.__pA+=1;
}},updateContent:function(bh,bi,bj,bk){if(bh){this.__pB();
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
bs.focusedRow=(this.__oJ==bv);
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
bz.push({col:bY,xPos:x,editable:bA.isColumnEditable(bY),focusedCol:this.__oI==bY,styleLeft:bC,styleWidth:bF});
bC+=bF;
}var bX=[];
var ca=false;

for(var bE=bw;bE<bw+bx;bE++){var bH=bG.isSelectedIndex(bE);
var bK=(this.__oJ==bE);
var bP=this.__pC(bE,bH,bK);

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
this.__pD(bE,bQ,bH,bK);
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
}}if(!this.__pz){this.__pz=document.createElement(E);
}var ck=e;
ck+=this._getRowsHtml(ci+ce,Math.abs(cb));
ck+=h;
this.__pz.innerHTML=ck;
var cf=this.__pz.firstChild.childNodes;
if(cb>0){for(var i=cf.length-1;i>=0;i--){var ch=cf[0];
cl.appendChild(ch);
}}else{for(var i=cf.length-1;i>=0;i--){var ch=cf[cf.length-1];
cl.insertBefore(ch,cl.firstChild);
}}if(this.__oJ!==null){this._updateRowStyles(this.__oJ-cb);
this._updateRowStyles(this.__oJ);
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
this.__px=cw;
this.__oM=cq;
this.fireEvent(f);
}},destruct:function(){this.__pz=this.__pw=this.__py=null;
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
this.__lj=[];
this.__lk=[];

if(E){this.setSpacingX(E);
}
if(F){this.setSpacingY(F);
}},properties:{spacingX:{check:d,init:0,apply:c},spacingY:{check:d,init:0,apply:c}},members:{__ll:null,__lj:null,__lk:null,__lm:null,__ln:null,__lo:null,__lp:null,__lq:null,__lr:null,verifyLayoutProperty:qx.core.Environment.select(h,{"true":function(G,name,H){var I={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(I[name]==1,w+name+A);
this.assertInteger(H);
this.assert(H>=0,v);
},"false":null}),__ls:function(){var O=[];
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
if(O[S]&&O[S][J]){throw new Error("Cannot add widget '"+M+"'!. "+"There is already a widget '"+O[S][J]+"' in this cell ("+S+", "+J+")");
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
}}this.__ll=O;
this.__lm=N;
this.__ln=P;
this.__lo=L;
this.__lp=K;
this.__lq=null;
this.__lr=null;
delete this._invalidChildrenCache;
},_setRowData:function(T,U,V){var W=this.__lj[T];

if(!W){this.__lj[T]={};
this.__lj[T][U]=V;
}else{W[U]=V;
}},_setColumnData:function(X,Y,ba){var bb=this.__lk[X];

if(!bb){this.__lk[X]={};
this.__lk[X][Y]=ba;
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
},getColumnAlign:function(bg){var bh=this.__lk[bg]||{};
return {vAlign:bh.vAlign||n,hAlign:bh.hAlign||m};
},setRowAlign:function(bi,bj,bk){if(qx.core.Environment.get(h)){this.assertInteger(bi,p);
this.assertInArray(bj,[m,b,D]);
this.assertInArray(bk,[n,a,g]);
}this._setRowData(bi,f,bj);
this._setRowData(bi,e,bk);
this._applyLayoutChange();
return this;
},getRowAlign:function(bl){var bm=this.__lj[bl]||{};
return {vAlign:bm.vAlign||n,hAlign:bm.hAlign||m};
},getCellWidget:function(bn,bo){if(this._invalidChildrenCache){this.__ls();
}var bn=this.__ll[bn]||{};
return bn[bo]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__ls();
}return this.__lo+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__ls();
}return this.__lp+1;
},getCellAlign:function(bp,bq){var bw=n;
var bu=m;
var bv=this.__lj[bp];
var bs=this.__lk[bq];
var br=this.__ll[bp][bq];

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
},getColumnFlex:function(bz){var bA=this.__lk[bz]||{};
return bA.flex!==undefined?bA.flex:0;
},setRowFlex:function(bB,bC){this._setRowData(bB,C,bC);
this._applyLayoutChange();
return this;
},getRowFlex:function(bD){var bE=this.__lj[bD]||{};
var bF=bE.flex!==undefined?bE.flex:0;
return bF;
},setColumnMaxWidth:function(bG,bH){this._setColumnData(bG,o,bH);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bI){var bJ=this.__lk[bI]||{};
return bJ.maxWidth!==undefined?bJ.maxWidth:Infinity;
},setColumnWidth:function(bK,bL){this._setColumnData(bK,s,bL);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bM){var bN=this.__lk[bM]||{};
return bN.width!==undefined?bN.width:null;
},setColumnMinWidth:function(bO,bP){this._setColumnData(bO,r,bP);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bQ){var bR=this.__lk[bQ]||{};
return bR.minWidth||0;
},setRowMaxHeight:function(bS,bT){this._setRowData(bS,t,bT);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bU){var bV=this.__lj[bU]||{};
return bV.maxHeight||Infinity;
},setRowHeight:function(bW,bX){this._setRowData(bW,B,bX);
this._applyLayoutChange();
return this;
},getRowHeight:function(bY){var ca=this.__lj[bY]||{};
return ca.height!==undefined?ca.height:null;
},setRowMinHeight:function(cb,cc){this._setRowData(cb,q,cc);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(cd){var ce=this.__lj[cd]||{};
return ce.minHeight||0;
},__lt:function(cf){var cj=cf.getSizeHint();
var ci=cf.getMarginLeft()+cf.getMarginRight();
var ch=cf.getMarginTop()+cf.getMarginBottom();
var cg={height:cj.height+ch,width:cj.width+ci,minHeight:cj.minHeight+ch,minWidth:cj.minWidth+ci,maxHeight:cj.maxHeight+ch,maxWidth:cj.maxWidth+ci};
return cg;
},_fixHeightsRowSpan:function(ck){var cr=this.getSpacingY();

for(var i=0,l=this.__ln.length;i<l;i++){var cy=this.__ln[i];
var cu=this.__lt(cy);
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

for(var i=0,l=this.__lm.length;i<l;i++){var cG=this.__lm[i];
var cI=this.__lt(cG);
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
}}}},_getRowHeights:function(){if(this.__lq!=null){return this.__lq;
}var dd=[];
var cV=this.__lo;
var cU=this.__lp;

for(var de=0;de<=cV;de++){var cW=0;
var cY=0;
var cX=0;

for(var dc=0;dc<=cU;dc++){var cT=this.__ll[de][dc];

if(!cT){continue;
}var da=cT.getLayoutProperties().rowSpan||0;

if(da>1){continue;
}var db=this.__lt(cT);

if(this.getRowFlex(de)>0){cW=Math.max(cW,db.minHeight);
}else{cW=Math.max(cW,db.height);
}cY=Math.max(cY,db.height);
}var cW=Math.max(cW,this.getRowMinHeight(de));
var cX=this.getRowMaxHeight(de);

if(this.getRowHeight(de)!==null){var cY=this.getRowHeight(de);
}else{var cY=Math.max(cW,Math.min(cY,cX));
}dd[de]={minHeight:cW,height:cY,maxHeight:cX};
}
if(this.__ln.length>0){this._fixHeightsRowSpan(dd);
}this.__lq=dd;
return dd;
},_getColWidths:function(){if(this.__lr!=null){return this.__lr;
}var dj=[];
var dg=this.__lp;
var di=this.__lo;

for(var dp=0;dp<=dg;dp++){var dm=0;
var dl=0;
var dh=Infinity;

for(var dq=0;dq<=di;dq++){var df=this.__ll[dq][dp];

if(!df){continue;
}var dk=df.getLayoutProperties().colSpan||0;

if(dk>1){continue;
}var dn=this.__lt(df);

if(this.getColumnFlex(dp)>0){dl=Math.max(dl,dn.minWidth);
}else{dl=Math.max(dl,dn.width);
}dm=Math.max(dm,dn.width);
}dl=Math.max(dl,this.getColumnMinWidth(dp));
dh=this.getColumnMaxWidth(dp);

if(this.getColumnWidth(dp)!==null){var dm=this.getColumnWidth(dp);
}else{var dm=Math.max(dl,Math.min(dm,dh));
}dj[dp]={minWidth:dl,width:dm,maxWidth:dh};
}
if(this.__lm.length>0){this._fixWidthsColSpan(dj);
}this.__lr=dj;
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
},renderLayout:function(dF,dG){if(this._invalidChildrenCache){this.__ls();
}var dU=qx.ui.layout.Util;
var dI=this.getSpacingX();
var dO=this.getSpacingY();
var ea=this._getColWidths();
var dY=this._getColumnFlexOffsets(dF);
var dJ=[];
var ec=this.__lp;
var dH=this.__lo;
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

for(var dP=0;dP<=dH;dP++){var dW=this.__ll[dP][ed];
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
this.__lr=null;
this.__lq=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ls();
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
}},destruct:function(){this.__ll=this.__lj=this.__lk=this.__lm=this.__ln=this.__lr=this.__lq=null;
}});
})();
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f="content",e='</div>',d="nowrap",c="default",b="}",a="width:",J=".qooxdoo-table-cell-right { text-align:right } ",I="css.boxmodel",H="0px 6px",G='<div class="',F="0px",E="height:",D="1px solid ",C=".qooxdoo-table-cell-bold { font-weight:bold } ",B="String",A="} ",q='>',r="mshtml",o='" ',p="ellipsis",m="content-box",n='left:',k="qx.ui.table.cellrenderer.Abstract",l="engine.name",s='" style="',t="abstract",v="none",u="hidden",x="table-column-line",w='px;',z=".qooxdoo-table-cell-italic { font-style:italic} ",y="absolute";
qx.Class.define(k,{type:t,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var K=qx.ui.table.cellrenderer.Abstract;

if(!K.__op){var M=qx.theme.manager.Color.getInstance();
K.__op=this.self(arguments);
var L=h+qx.bom.element.Style.compile({position:y,top:F,overflow:u,whiteSpace:d,borderRight:D+M.resolve(x),padding:H,cursor:c,textOverflow:p,userSelect:v})+A+J+z+C;

if(!(qx.core.Environment.get(l)==r)){L+=h+qx.bom.element.BoxSizing.compile(m)+b;
}K.__op.stylesheet=qx.bom.Stylesheet.createElement(L);
}},properties:{defaultCellStyle:{init:null,check:B,nullable:true}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(N){return g;
},_getCellStyle:function(O){return O.style||j;
},_getCellAttributes:function(P){return j;
},_getContentHtml:function(Q){return Q.value||j;
},_getCellSizeStyle:function(R,S,T,U){var V=j;

if(qx.core.Environment.get(I)==f){R-=T;
S-=U;
}V+=a+Math.max(R,0)+i;
V+=E+Math.max(S,0)+i;
return V;
},createDataCellHtml:function(W,X){X.push(G,this._getCellClass(W),s,n,W.styleLeft,w,this._getCellSizeStyle(W.styleWidth,W.styleHeight,this._insetX,this._insetY),this._getCellStyle(W),o,this._getCellAttributes(W),q+this._getContentHtml(W),e);
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
this.__ir=u;
},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__ir:null,format:function(v){switch(v){case Infinity:return f;
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

for(E=y.length;E>3;E-=3){C=t+qx.locale.Number.getGroupSeparator(this.__ir)+y.substring(E-3,E)+C;
}C=y.substring(0,E)+C;
}var A=this.getPrefix()?this.getPrefix():t;
var x=this.getPostfix()?this.getPostfix():t;
var D=A+(z?r:t)+C;

if(B.length>0){D+=t+qx.locale.Number.getDecimalSeparator(this.__ir)+B;
}D+=x;
return D;
},parse:function(H){var M=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__ir)+t);
var K=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__ir)+t);
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
(function(){var cG=")",cF="(",cE="|",cD="(\\d\\d?)",cC="format",cB="",cA="-",cz="abbreviated",cy="wide",cx="stand-alone",bH="narrow",bG="(\\d\\d*?)",bF="quarter",bE='A',bD="default",bC="0",bB="literal",bA="wildcard",bz="'",by="(\\d?)",cN="hour",cO='Anno Domini',cL="+",cM='Q',cJ="ms",cK="(\\d\\d?\\d?)",cH="dayOfYear",cI='AD',cP="Y+",cQ=":",cg='y',cf="quoted_literal",ci="weekOfYear",ch='a',ck="day",cj="(-*",cm="locale",cl="GMT",ce="HH:mm:ss",cd='y+',n="HHmmss",o="long",p='Y',q='z',r='BC',s="d",t="D",u='B',v='',w='Before Christ',df='Z',de=" ",dd="min",dc="sec",dj="\\d",di="+?",dh="eeeee",dg='W',dl="qqqq",dk="h",X="KK",Y='L',V="Z",W="GGGGG",bc="LL",bd="EEEE",ba="^",bb='4th quarter',T="SSS",U="qqq",G="K",F='q',I='G',H="a",C='2nd quarter',B="dd",E="qx.util.format.DateFormat",D="eee",A="ee",z="q",bi="QQQQ",bj="ww",bk="H",bl='Y+',be="(\\d\\d\\d?)",bf="(GMT[\\+\\-]\\d\\d:\\d\\d)",bg="_applyLocale",bh="Q",bm="c",bn="weekOfMonth",Q="ccc",P="EEEEE",O="EE",N="GGG",M='-',L="w",K="mm",J='h',S="S",R='s',bo="QQQ",bp="G",bq="GG",br="kk",bs="ss",bt="([\\+\\-]\\d\\d\\d\\d)",bu='H',bv='S',bw='1st quarter',bx="MMMM",bL='c',bK='Q1',bJ='3rd quarter',bI="eeee",bP="QQ",bO="LLLLL",bN="HH",bM='k',bR="m",bQ="DDD",bY='D',ca="LLLL",bW='e',bX='K',bU="L",bV="hh",bS="cccc",bT="e",cb="W",cc="GGGG",cq='Q2',cp="MM",cs="y+",cr="ccccc",cu="E",ct="yyyy-MM-dd HH:mm:ss",cw="short",cv='d',co="unkown",cn="\\d?",cX="k",cY="qx.debug",da='m',db="String",cT='Q3',cU="DD",cV='M',cW='isoUtcDateTime',cR="SS",cS="MMM",m="s",l="M",h='w',g="EEE",f="$",e="?",d='Q4',c="MMMMM",b='E',a="z",x="LLL",y="qq";
qx.Class.define(E,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(dm,dn){qx.core.Object.call(this);

if(!dn){this.__ir=qx.locale.Manager.getInstance().getLocale();
this.__lu=qx.locale.Manager.getInstance().bind(cm,this,cm);
}else{this.__ir=dn;
this.setLocale(dn);
}this.__lv=this.__ir;

if(dm!=null){this.__lw=dm.toString();

if(this.__lw in qx.util.format.DateFormat.ISO_MASKS){if(this.__lw===cW){this.__lx=true;
}this.__lw=qx.util.format.DateFormat.ISO_MASKS[this.__lw];
}}else{this.__lw=qx.locale.Date.getDateFormat(o,this.__ir)+de+qx.locale.Date.getDateTimeFormat(n,ce,this.__ir);
}},properties:{locale:{apply:bg,nullable:true,check:db}},statics:{getDateTimeInstance:function(){var dq=qx.util.format.DateFormat;
var dp=qx.locale.Date.getDateFormat(o)+de+qx.locale.Date.getDateTimeFormat(n,ce);

if(dq._dateInstance==null||dq._dateInstance.__lw!=dp){dq._dateTimeInstance=new dq();
}return dq._dateTimeInstance;
},getDateInstance:function(){var ds=qx.util.format.DateFormat;
var dr=qx.locale.Date.getDateFormat(cw)+cB;

if(ds._dateInstance==null||ds._dateInstance.__lw!=dr){ds._dateInstance=new ds(dr);
}return ds._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:ct,ISO_MASKS:{isoDate:"yyyy-MM-dd",isoTime:"HH:mm:ss",isoDateTime:"yyyy-MM-dd'T'HH:mm:ss",isoUtcDateTime:"yyyy-MM-dd'T'HH:mm:ss'Z'"},AM_MARKER:"am",PM_MARKER:"pm"},members:{__lu:null,__ir:null,__lv:null,__lw:null,__ly:null,__lz:null,__lA:null,__lx:null,__lB:function(dt,du){var dv=cB+(dt<0?((-1)*dt):dt);

while(dv.length<du){dv=bC+dv;
}return dt<0?cA+dv:dv;
},__lC:function(dw){var dx=new Date(dw.getTime());
var dy=dx.getDate();

while(dx.getMonth()!=0){dx.setDate(-1);
dy+=dx.getDate()+1;
}return dy;
},__lD:function(dz){return new Date(dz.getTime()+(3-((dz.getDay()+6)%7))*86400000);
},__lE:function(dA){var dC=this.__lD(dA);
var dD=dC.getFullYear();
var dB=this.__lD(new Date(dD,0,4));
return Math.floor(1.5+(dC.getTime()-dB.getTime())/86400000/7);
},__lF:function(dE){var dG=this.__lD(dE);
var dF=this.__lD(new Date(dE.getFullYear(),dE.getMonth(),4));
return Math.floor(1.5+(dG.getTime()-dF.getTime())/86400000/7);
},__lG:function(dH){var dI=this.__lD(dH);
return dI.getFullYear();
},__lH:function(dJ){var dK=new Date(dJ,2,1);
dK.setDate(-1);
return dK.getDate()+1===29;
},__lI:function(dL,dM){var dQ=0;
var dR=0;
if(!dM){dM=1971;
}var dN=0;

for(var i=1;i<=12;i++){var dP=new Date(dM,i,1);
dP.setDate(-1);
var dO=dP.getDate()+1;
dN+=dO;

if(dN<dL){dQ++;
dR+=dO;
}else{dR=dL-(dN-dO);
break;
}}return {month:dQ,day:dR};
},__lJ:function(dS,dT,dU){var dV;

switch(dT){case 11:dV=dS-1;

if(dS!=this.__lG(new Date(dV,dT,dU))){dV=dS;
}break;
case 0:dV=dS+1;

if(dS!=this.__lG(new Date(dV,dT,dU))){dV=dS;
}break;
default:dV=dS;
}return dV;
},_applyLocale:function(dW,dX){this.__ir=dW===null?this.setLocale(this.__lv):dW;
},format:function(dY){if(dY==null){return null;
}
if(isNaN(dY.getTime())){if(qx.core.Environment.get(cY)){throw new Error("Provided date is invalid");
}return null;
}
if(this.__lx){dY=new Date(dY.getUTCFullYear(),dY.getUTCMonth(),dY.getUTCDate(),dY.getUTCHours(),dY.getUTCMinutes(),dY.getUTCSeconds(),dY.getUTCMilliseconds());
}var ec=this.__ir;
var eh=dY.getFullYear();
var ed=dY.getMonth();
var eg=dY.getDate();
var ek=dY.getDay();
var en=dY.getHours();
var et=dY.getMinutes();
var el=dY.getSeconds();
var er=dY.getMilliseconds();
var ej=dY.getTimezoneOffset();
var eo=ej>0?1:-1;
var ea=Math.floor(Math.abs(ej)/60);
var eq=Math.abs(ej)%60;
this.__lK();
var es=cB;

for(var i=0;i<this.__lA.length;i++){var ei=this.__lA[i];

if(ei.type==bB){es+=ei.text;
}else{var eb=ei.character;
var em=ei.size;
var eu=e;

switch(eb){case cg:if(em==2){eu=this.__lB(eh%100,2);
}else{var ee=Math.abs(eh);
eu=ee+cB;

if(em>eu.length){for(var j=eu.length;j<em;j++){eu=bC+eu;
}}
if(eh<0){eu=cA+eu;
}}break;
case p:eu=this.__lG(dY)+cB;
var ee=eu.replace(M,v);

if(em>eu.length){for(var j=ee.length;j<em;j++){ee=bC+ee;
}}eu=eu.indexOf(cA)!=-1?cA+ee:ee;
break;
case I:if(em>=1&&em<=3){eu=eh>0?cI:r;
}else if(em==4){eu=eh>0?cO:w;
}else if(em==5){eu=eh>0?bE:u;
}break;
case cM:if(em==1||em==2){eu=this.__lB(parseInt(ed/4)+1,em);
}
if(em==3){eu=cM+(parseInt(ed/4)+1);
}break;
case F:if(em==1||em==2){eu=this.__lB(parseInt(ed/4)+1,em);
}
if(em==3){eu=cM+(parseInt(ed/4)+1);
}break;
case bY:eu=this.__lB(this.__lC(dY),em);
break;
case cv:eu=this.__lB(eg,em);
break;
case h:eu=this.__lB(this.__lE(dY),em);
break;
case dg:eu=this.__lF(dY);
break;
case b:if(em>=1&&em<=3){eu=qx.locale.Date.getDayName(cz,ek,ec,cC);
}else if(em==4){eu=qx.locale.Date.getDayName(cy,ek,ec,cC);
}else if(em==5){eu=qx.locale.Date.getDayName(bH,ek,ec,cx);
}break;
case bW:var ef=qx.locale.Date.getWeekStart(ec);
var ep=1+((ek-ef>=0)?(ek-ef):7+(ek-ef));

if(em>=1&&em<=2){eu=this.__lB(ep,em);
}else if(em==3){eu=qx.locale.Date.getDayName(cz,ek,ec,cC);
}else if(em==4){eu=qx.locale.Date.getDayName(cy,ek,ec,cC);
}else if(em==5){eu=qx.locale.Date.getDayName(bH,ek,ec,cx);
}break;
case bL:var ef=qx.locale.Date.getWeekStart(ec);
var ep=1+((ek-ef>=0)?(ek-ef):7+(ek-ef));

if(em==1){eu=v+ep;
}else if(em==3){eu=qx.locale.Date.getDayName(cz,ek,ec,cC);
}else if(em==4){eu=qx.locale.Date.getDayName(cy,ek,ec,cC);
}else if(em==5){eu=qx.locale.Date.getDayName(bH,ek,ec,cx);
}break;
case cV:if(em==1||em==2){eu=this.__lB(ed+1,em);
}else if(em==3){eu=qx.locale.Date.getMonthName(cz,ed,ec,cC);
}else if(em==4){eu=qx.locale.Date.getMonthName(cy,ed,ec,cC);
}else if(em==5){eu=qx.locale.Date.getMonthName(bH,ed,ec,cx);
}break;
case Y:if(em==1||em==2){eu=this.__lB(ed+1,em);
}else if(em==3){eu=qx.locale.Date.getMonthName(cz,ed,ec,cC);
}else if(em==4){eu=qx.locale.Date.getMonthName(cy,ed,ec,cC);
}else if(em==5){eu=qx.locale.Date.getMonthName(bH,ed,ec,cx);
}break;
case ch:eu=(en<12)?qx.locale.Date.getAmMarker(ec):qx.locale.Date.getPmMarker(ec);
break;
case bu:eu=this.__lB(en,em);
break;
case bM:eu=this.__lB((en==0)?24:en,em);
break;
case bX:eu=this.__lB(en%12,em);
break;
case J:eu=this.__lB(((en%12)==0)?12:(en%12),em);
break;
case da:eu=this.__lB(et,em);
break;
case R:eu=this.__lB(el,em);
break;
case bv:eu=er+cB;

if(em<=eu.length){eu=eu.substr(0,em);
}else{for(var j=eu.length;j<em;j++){eu=eu+bC;
}}break;
case q:if(em>=1&&em<=4){eu=cl+((eo>0)?cA:cL)+this.__lB(Math.abs(ea),2)+cQ+this.__lB(eq,2);
}break;
case df:if(em>=1&&em<=3){eu=((eo>0)?cA:cL)+this.__lB(Math.abs(ea),2)+this.__lB(eq,2);
}else{eu=cl+((eo>0)?cA:cL)+this.__lB(Math.abs(ea),2)+cQ+this.__lB(eq,2);
}break;
}es+=eu;
}}return es;
},parse:function(ev){this.__lL();
var eE=this.__ly.regex.exec(ev);

if(eE==null){throw new Error("Date string '"+ev+"' does not match the date format: "+this.__lw);
}var ew={era:1,year:1970,quarter:1,month:0,day:1,dayOfYear:1,hour:0,ispm:false,weekDay:4,weekYear:1970,weekOfMonth:1,weekOfYear:1,min:0,sec:0,ms:0};
var ey=1;
var ex=false;
var ez=false;

for(var i=0;i<this.__ly.usedRules.length;i++){var eA=this.__ly.usedRules[i];
var eB=eE[ey];

if(eA.field!=null){ew[eA.field]=parseInt(eB,10);
}else{eA.manipulator(ew,eB);
}
if(eA.pattern==cP){var eC=false;

for(var k=0;k<this.__ly.usedRules.length;k++){if(this.__ly.usedRules[k].pattern==cd){eC=true;
break;
}}
if(!eC){ex=true;
}}
if(eA.pattern.indexOf(t)!=-1){var eG=false;

for(var k=0;k<this.__ly.usedRules.length;k++){if(this.__ly.usedRules[k].pattern.indexOf(s)!=-1){eG=true;
break;
}}
if(!eG){ez=true;
}}ey+=(eA.groups==null)?1:eA.groups;
}
if(ex){ew.year=this.__lJ(ew.weekYear,ew.month,ew.day);
}
if(ez){var eF=this.__lI(ew.dayOfYear,ew.year);
ew.month=eF.month;
ew.day=eF.day;
}
if(ew.era<0&&(ew.year*ew.era<0)){ew.year=ew.year*ew.era;
}var eD=new Date(ew.year,ew.month,ew.day,(ew.ispm)?(ew.hour+12):ew.hour,ew.min,ew.sec,ew.ms);

if(this.__lx){eD=new Date(eD.getUTCFullYear(),eD.getUTCMonth(),eD.getUTCDate(),eD.getUTCHours(),eD.getUTCMinutes(),eD.getUTCSeconds(),eD.getUTCMilliseconds());
}
if(ew.month!=eD.getMonth()||ew.year!=eD.getFullYear()){throw new Error("Error parsing date '"+ev+"': the value for day or month is too large");
}return eD;
},__lK:function(){if(this.__lA!=null){return;
}this.__lA=[];
var eL;
var eJ=0;
var eN=cB;
var eH=this.__lw;
var eK=bD;
var i=0;

while(i<eH.length){var eM=eH.charAt(i);

switch(eK){case cf:if(eM==bz){if(i+1>=eH.length){i++;
break;
}var eI=eH.charAt(i+1);

if(eI==bz){eN+=eM;
i++;
}else{i++;
eK=co;
}}else{eN+=eM;
i++;
}break;
case bA:if(eM==eL){eJ++;
i++;
}else{this.__lA.push({type:bA,character:eL,size:eJ});
eL=null;
eJ=0;
eK=bD;
}break;
default:if((eM>=ch&&eM<=q)||(eM>=bE&&eM<=df)){eL=eM;
eK=bA;
}else if(eM==bz){if(i+1>=eH.length){eN+=eM;
i++;
break;
}var eI=eH.charAt(i+1);

if(eI==bz){eN+=eM;
i++;
}i++;
eK=cf;
}else{eK=bD;
}
if(eK!=bD){if(eN.length>0){this.__lA.push({type:bB,text:eN});
eN=cB;
}}else{eN+=eM;
i++;
}break;
}}if(eL!=null){this.__lA.push({type:bA,character:eL,size:eJ});
}else if(eN.length>0){this.__lA.push({type:bB,text:eN});
}},__lL:function(){if(this.__ly!=null){return ;
}var eR=this.__lw;
this.__lN();
this.__lK();
var eX=[];
var eT=ba;

for(var eP=0;eP<this.__lA.length;eP++){var eY=this.__lA[eP];

if(eY.type==bB){eT+=qx.lang.String.escapeRegexpChars(eY.text);
}else{var eQ=eY.character;
var eU=eY.size;
var eS;

for(var fa=0;fa<this.__lz.length;fa++){var eV=this.__lz[fa];

if(this.__lM(eV,eQ,eU)){eS=eV;
break;
}}if(eS==null){var eW=cB;

for(var i=0;i<eU;i++){eW+=eQ;
}throw new Error("Malformed date format: "+eR+". Wildcard "+eW+" is not supported");
}else{eX.push(eS);
eT+=eS.regex;
}}}eT+=f;
var eO;

try{eO=new RegExp(eT);
}catch(fb){throw new Error("Malformed date format: "+eR);
}this.__ly={regex:eO,"usedRules":eX,pattern:eT};
},__lM:function(fc,fd,fe){if(fd===cg&&fc.pattern===cd){fc.regex=fc.regexFunc(fe);
return true;
}else if(fd===p&&fc.pattern===bl){fc.regex=fc.regexFunc(fe);
return true;
}else{return fd==fc.pattern.charAt(0)&&fe==fc.pattern.length;
}},__lN:function(){var fv=qx.util.format.DateFormat;
var fy=qx.lang.String;

if(this.__lz!=null){return ;
}var fw=this.__lz=[];
var fq=qx.locale.Date.getAmMarker(this.__ir).toString()||fv.AM_MARKER;
var fI=qx.locale.Date.getPmMarker(this.__ir).toString()||fv.PM_MARKER;
var fh=this.__ir;
var fn=function(fP,fQ){fQ=parseInt(fQ,10);

if(fQ>0){if(fQ<fv.ASSUME_YEAR_2000_THRESHOLD){fQ+=2000;
}else if(fQ<100){fQ+=1900;
}}fP.year=fQ;
};
var fM=function(fR,fS){fS=parseInt(fS,10);

if(fS>0){if(fS<fv.ASSUME_YEAR_2000_THRESHOLD){fS+=2000;
}else if(fS<100){fS+=1900;
}}fR.weekYear=fS;
};
var fO=function(fT,fU){fT.month=parseInt(fU,10)-1;
};
var fl=function(fV,fW){var fY=qx.locale.Date.getWeekStart(fh);
var fX=(parseInt(fW,10)-1+fY)<=6?parseInt(fW,10)-1+fY:(parseInt(fW,10)-1+fY)-7;
fV.weekDay=fX;
};
var fj=function(ga,gb){var gc=qx.locale.Date.getPmMarker(fh).toString()||fv.PM_MARKER;
ga.ispm=(gb==gc);
};
var fp=function(gd,ge){gd.hour=parseInt(ge,10)%24;
};
var fi=function(gf,gg){gf.hour=parseInt(gg,10)%12;
};
var fB=function(gh,gi){return;
};
var fC=[bE,u];
var fF=function(gj,gk){gj.era=gk==bE?1:-1;
};
var ft=[cI,r];
var fs=function(gl,gm){gl.era=gm==cI?1:-1;
};
var fH=[cO,w];
var fr=function(gn,go){gn.era=go==cO?1:-1;
};
var fK=[bK,cq,cT,d];
var ff=function(gp,gq){gp.quarter=fK.indexOf(gq);
};
var fG=[bw,C,bJ,bb];
var fA=function(gr,gs){gr.quarter=fG.indexOf(gs);
};
var fL=qx.locale.Date.getMonthNames(cz,fh,cC);

for(var i=0;i<fL.length;i++){fL[i]=fy.escapeRegexpChars(fL[i].toString());
}var fm=function(gt,gu){gu=fy.escapeRegexpChars(gu);
gt.month=fL.indexOf(gu);
};
var fx=qx.locale.Date.getMonthNames(cy,fh,cC);

for(var i=0;i<fx.length;i++){fx[i]=fy.escapeRegexpChars(fx[i].toString());
}var fD=function(gv,gw){gw=fy.escapeRegexpChars(gw);
gv.month=fx.indexOf(gw);
};
var fN=qx.locale.Date.getMonthNames(bH,fh,cx);

for(var i=0;i<fN.length;i++){fN[i]=fy.escapeRegexpChars(fN[i].toString());
}var fk=function(gx,gy){gy=fy.escapeRegexpChars(gy);
gx.month=fN.indexOf(gy);
};
var fg=qx.locale.Date.getDayNames(bH,fh,cx);

for(var i=0;i<fg.length;i++){fg[i]=fy.escapeRegexpChars(fg[i].toString());
}var fJ=function(gz,gA){gA=fy.escapeRegexpChars(gA);
gz.weekDay=fg.indexOf(gA);
};
var fE=qx.locale.Date.getDayNames(cz,fh,cC);

for(var i=0;i<fE.length;i++){fE[i]=fy.escapeRegexpChars(fE[i].toString());
}var fo=function(gB,gC){gC=fy.escapeRegexpChars(gC);
gB.weekDay=fE.indexOf(gC);
};
var fz=qx.locale.Date.getDayNames(cy,fh,cC);

for(var i=0;i<fz.length;i++){fz[i]=fy.escapeRegexpChars(fz[i].toString());
}var fu=function(gD,gE){gE=fy.escapeRegexpChars(gE);
gD.weekDay=fz.indexOf(gE);
};
fw.push({pattern:cs,regexFunc:function(gF){var gG=cj;

for(var i=0;i<gF;i++){gG+=dj;

if(i===gF-1&&i!==1){gG+=di;
}}gG+=cG;
return gG;
},manipulator:fn});
fw.push({pattern:cP,regexFunc:function(gH){var gI=cj;

for(var i=0;i<gH;i++){gI+=dj;

if(i===gH-1){gI+=di;
}}gI+=cG;
return gI;
},manipulator:fM});
fw.push({pattern:bp,regex:cF+ft.join(cE)+cG,manipulator:fs});
fw.push({pattern:bq,regex:cF+ft.join(cE)+cG,manipulator:fs});
fw.push({pattern:N,regex:cF+ft.join(cE)+cG,manipulator:fs});
fw.push({pattern:cc,regex:cF+fH.join(cE)+cG,manipulator:fr});
fw.push({pattern:W,regex:cF+fC.join(cE)+cG,manipulator:fF});
fw.push({pattern:bh,regex:bG,field:bF});
fw.push({pattern:bP,regex:cD,field:bF});
fw.push({pattern:bo,regex:cF+fK.join(cE)+cG,manipulator:ff});
fw.push({pattern:bi,regex:cF+fG.join(cE)+cG,manipulator:fA});
fw.push({pattern:z,regex:bG,field:bF});
fw.push({pattern:y,regex:cD,field:bF});
fw.push({pattern:U,regex:cF+fK.join(cE)+cG,manipulator:ff});
fw.push({pattern:dl,regex:cF+fG.join(cE)+cG,manipulator:fA});
fw.push({pattern:l,regex:bG,manipulator:fO});
fw.push({pattern:cp,regex:cD,manipulator:fO});
fw.push({pattern:cS,regex:cF+fL.join(cE)+cG,manipulator:fm});
fw.push({pattern:bx,regex:cF+fx.join(cE)+cG,manipulator:fD});
fw.push({pattern:c,regex:cF+fN.join(cE)+cG,manipulator:fk});
fw.push({pattern:bU,regex:bG,manipulator:fO});
fw.push({pattern:bc,regex:cD,manipulator:fO});
fw.push({pattern:x,regex:cF+fL.join(cE)+cG,manipulator:fm});
fw.push({pattern:ca,regex:cF+fx.join(cE)+cG,manipulator:fD});
fw.push({pattern:bO,regex:cF+fN.join(cE)+cG,manipulator:fk});
fw.push({pattern:B,regex:cD,field:ck});
fw.push({pattern:s,regex:bG,field:ck});
fw.push({pattern:t,regex:by,field:cH});
fw.push({pattern:cU,regex:cD,field:cH});
fw.push({pattern:bQ,regex:be,field:cH});
fw.push({pattern:cu,regex:cF+fE.join(cE)+cG,manipulator:fo});
fw.push({pattern:O,regex:cF+fE.join(cE)+cG,manipulator:fo});
fw.push({pattern:g,regex:cF+fE.join(cE)+cG,manipulator:fo});
fw.push({pattern:bd,regex:cF+fz.join(cE)+cG,manipulator:fu});
fw.push({pattern:P,regex:cF+fg.join(cE)+cG,manipulator:fJ});
fw.push({pattern:bT,regex:by,manipulator:fl});
fw.push({pattern:A,regex:cD,manipulator:fl});
fw.push({pattern:D,regex:cF+fE.join(cE)+cG,manipulator:fo});
fw.push({pattern:bI,regex:cF+fz.join(cE)+cG,manipulator:fu});
fw.push({pattern:dh,regex:cF+fg.join(cE)+cG,manipulator:fJ});
fw.push({pattern:bm,regex:cn,manipulator:fl});
fw.push({pattern:Q,regex:cF+fE.join(cE)+cG,manipulator:fo});
fw.push({pattern:bS,regex:cF+fz.join(cE)+cG,manipulator:fu});
fw.push({pattern:cr,regex:cF+fg.join(cE)+cG,manipulator:fJ});
fw.push({pattern:H,regex:cF+fq+cE+fI+cG,manipulator:fj});
fw.push({pattern:cb,regex:by,field:bn});
fw.push({pattern:L,regex:by,field:ci});
fw.push({pattern:bj,regex:cD,field:ci});
fw.push({pattern:bN,regex:cD,field:cN});
fw.push({pattern:bk,regex:cD,field:cN});
fw.push({pattern:br,regex:cD,manipulator:fp});
fw.push({pattern:cX,regex:cD,manipulator:fp});
fw.push({pattern:X,regex:cD,field:cN});
fw.push({pattern:G,regex:cD,field:cN});
fw.push({pattern:bV,regex:cD,manipulator:fi});
fw.push({pattern:dk,regex:cD,manipulator:fi});
fw.push({pattern:K,regex:cD,field:dd});
fw.push({pattern:bR,regex:cD,field:dd});
fw.push({pattern:bs,regex:cD,field:dc});
fw.push({pattern:m,regex:cD,field:dc});
fw.push({pattern:T,regex:cK,field:cJ});
fw.push({pattern:cR,regex:cK,field:cJ});
fw.push({pattern:S,regex:cK,field:cJ});
fw.push({pattern:V,regex:bt,manipulator:fB});
fw.push({pattern:a,regex:bf,manipulator:fB});
}},destruct:function(){if(this.__lu!=null){qx.locale.Manager.getInstance().removeBinding(this.__lu);
}this.__lA=this.__ly=this.__lz=null;
}});
})();
(function(){var k="_",j="format",h="qx.debug",g="stand-alone",f="narrow",e="abbreviated",d="wide",c="short",b="full",a="long",G="medium",F="sat",E="cldr_day_",D="cldr_month_",C="wed",B="fri",A="tue",z="mon",y="sun",x="thu",r="HH:mm",s="HHmmsszz",p="cldr_date_format_",q="HHmm",n="HHmmss",o="HH:mm:ss zz",l="cldr_pm",m="cldr_am",t="qx.locale.Date",u="cldr_date_time_format_",w="cldr_time_format_",v="HH:mm:ss";
qx.Class.define(t,{statics:{__le:qx.locale.Manager.getInstance(),getAmMarker:function(H){return this.__le.localize(m,[],H);
},getPmMarker:function(I){return this.__le.localize(l,[],I);
},getDayNames:function(length,J,K){var K=K?K:j;

if(qx.core.Environment.get(h)){qx.core.Assert.assertInArray(length,[e,f,d]);
qx.core.Assert.assertInArray(K,[j,g]);
}var M=[y,z,A,C,x,B,F];
var N=[];

for(var i=0;i<M.length;i++){var L=E+K+k+length+k+M[i];
N.push(this.__le.localize(L,[],J));
}return N;
},getDayName:function(length,O,P,Q){var Q=Q?Q:j;

if(qx.core.Environment.get(h)){qx.core.Assert.assertInArray(length,[e,f,d]);
qx.core.Assert.assertInteger(O);
qx.core.Assert.assertInRange(O,0,6);
qx.core.Assert.assertInArray(Q,[j,g]);
}var S=[y,z,A,C,x,B,F];
var R=E+Q+k+length+k+S[O];
return this.__le.localize(R,[],P);
},getMonthNames:function(length,T,U){var U=U?U:j;

if(qx.core.Environment.get(h)){qx.core.Assert.assertInArray(length,[e,f,d]);
qx.core.Assert.assertInArray(U,[j,g]);
}var W=[];

for(var i=0;i<12;i++){var V=D+U+k+length+k+(i+1);
W.push(this.__le.localize(V,[],T));
}return W;
},getMonthName:function(length,X,Y,ba){var ba=ba?ba:j;

if(qx.core.Environment.get(h)){qx.core.Assert.assertInArray(length,[e,f,d]);
qx.core.Assert.assertInArray(ba,[j,g]);
}var bb=D+ba+k+length+k+(X+1);
return this.__le.localize(bb,[],Y);
},getDateFormat:function(bc,bd){if(qx.core.Environment.get(h)){qx.core.Assert.assertInArray(bc,[c,G,a,b]);
}var be=p+bc;
return this.__le.localize(be,[],bd);
},getDateTimeFormat:function(bf,bg,bh){var bj=u+bf;
var bi=this.__le.localize(bj,[],bh);

if(bi==bj){bi=bg;
}return bi;
},getTimeFormat:function(bk,bl){if(qx.core.Environment.get(h)){qx.core.Assert.assertInArray(bk,[c,G,a,b]);
}var bn=w+bk;
var bm=this.__le.localize(bn,[],bl);

if(bm!=bn){return bm;
}
switch(bk){case c:case G:return qx.locale.Date.getDateTimeFormat(q,r);
case a:return qx.locale.Date.getDateTimeFormat(n,v);
case b:return qx.locale.Date.getDateTimeFormat(s,o);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(bo){var bp={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var bq=qx.locale.Date._getTerritory(bo);
return bp[bq]!=null?bp[bq]:1;
},getWeekendStart:function(br){var bt={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var bs=qx.locale.Date._getTerritory(br);
return bt[bs]!=null?bt[bs]:6;
},getWeekendEnd:function(bu){var bv={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var bw=qx.locale.Date._getTerritory(bu);
return bv[bw]!=null?bv[bw]:0;
},isWeekend:function(bx,by){var bA=qx.locale.Date.getWeekendStart(by);
var bz=qx.locale.Date.getWeekendEnd(by);

if(bz>bA){return ((bx>=bA)&&(bx<=bz));
}else{return ((bx>=bA)||(bx<=bz));
}},_getTerritory:function(bB){if(bB){var bC=bB.split(k)[1]||bB;
}else{bC=this.__le.getTerritory()||this.__le.getLanguage();
}return bC.toUpperCase();
}}});
})();
(function(){var l="_controls",k="icon/32/status/dialog-information.png",j="",i="_table",h="center",g="en",f="icon/16/apps/office-spreadsheet.png",d="OK",c="demobrowser.demo.table.TableDemo",b="_container",a="execute";
qx.Class.define(c,{extend:qx.application.Standalone,include:demobrowser.demo.table.MUtil,members:{__NH:null,main:function(){qx.application.Standalone.prototype.main.call(this);
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
},showDialog:function(s){if(!this.__NH){var v=this.__NH=new qx.ui.window.Window().set({modal:true,showMinimize:false,showMaximize:false,width:180,contentPadding:[10,10,10,10]});
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
}this.__NH.getChildren()[1].setValue(s);
this.__NH.open();
this.__NH.getChildren()[2].focus();
}},destruct:function(){this._disposeObjects(i,l,b);
}});
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
(function(){var b="__qm",a="qx.ui.window.Manager";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__qm:null,setDesktop:function(c){this.__qm=c;
this.updateStack();
},getDesktop:function(){return this.__qm;
},changeActiveWindow:function(d,e){if(d){this.bringToFront(d);
d.setActive(true);
}
if(e){e.resetActive();
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__qm.forceUnblockContent();
var f=this.__qm.getWindows();
var h=this._minZIndex;
var m=h+f.length*2;
var j=h+f.length*4;
var k=null;

for(var i=0,l=f.length;i<l;i++){var g=f[i];
if(!g.isVisible()){continue;
}k=k||g;
if(g.isModal()){g.setZIndex(j);
this.__qm.blockContent(j-1);
j+=2;
k=g;
}else if(g.isAlwaysOnTop()){g.setZIndex(m);
m+=2;
}else{g.setZIndex(h);
h+=2;
}if(!k.isModal()&&g.isActive()||g.getZIndex()>k.getZIndex()){k=g;
}}this.__qm.setActiveWindow(k);
},bringToFront:function(n){var o=this.__qm.getWindows();
var p=qx.lang.Array.remove(o,n);

if(p){o.push(n);
this.updateStack();
}},sendToBack:function(q){var r=this.__qm.getWindows();
var s=qx.lang.Array.remove(r,q);

if(s){r.unshift(q);
this.updateStack();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__oY:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__oY(c);
},hasChildren:function(){return this.__oY(f);
},add:function(r,s){return this.__oY(j,r,s);
},remove:function(t){return this.__oY(a,t);
},removeAll:function(){return this.__oY(d);
},indexOf:function(u){return this.__oY(l,u);
},addAt:function(v,w,x){this.__oY(g,v,w,x);
},addBefore:function(y,z,A){this.__oY(i,y,z,A);
},addAfter:function(B,C,D){this.__oY(k,B,C,D);
},removeAt:function(E){return this.__oY(e,E);
}}});
})();
(function(){var l="move",k="Boolean",j="mouseup",i="mousedown",h="losecapture",g="qx.ui.core.MMovable",f="mousemove",d="maximized",c="__qn",b="__qo",a="move-frame";
qx.Mixin.define(g,{properties:{movable:{check:k,init:true},useMoveFrame:{check:k,init:false}},members:{__qn:null,__qo:null,__qp:null,__qq:null,__qr:null,__qs:null,__qt:null,__qu:false,__qv:null,__qw:0,_activateMoveHandle:function(m){if(this.__qn){throw new Error("The move handle could not be redefined!");
}this.__qn=m;
m.addListener(i,this._onMoveMouseDown,this);
m.addListener(j,this._onMoveMouseUp,this);
m.addListener(f,this._onMoveMouseMove,this);
m.addListener(h,this.__qA,this);
},__qx:function(){var n=this.__qo;

if(!n){n=this.__qo=new qx.ui.core.Widget();
n.setAppearance(a);
n.exclude();
qx.core.Init.getApplication().getRoot().add(n);
}return n;
},__qy:function(){var location=this.getContainerLocation();
var p=this.getBounds();
var o=this.__qx();
o.setUserBounds(location.left,location.top,p.width,p.height);
o.show();
o.setZIndex(this.getZIndex()+1);
},__qz:function(e){var r=this.__qp;
var u=Math.max(r.left,Math.min(r.right,e.getDocumentLeft()));
var t=Math.max(r.top,Math.min(r.bottom,e.getDocumentTop()));
var q=this.__qq+u;
var s=this.__qr+t;
return {viewportLeft:q,viewportTop:s,parentLeft:q-this.__qs,parentTop:s-this.__qt};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(d)){return;
}var parent=this.getLayoutParent();
var w=parent.getContentLocation();
var x=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__qv=parent.getBlockerColor();
this.__qw=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
this.__qu=true;
}}this.__qp={left:w.left,top:w.top,right:w.left+x.width,bottom:w.top+x.height};
var v=this.getContainerLocation();
this.__qs=w.left;
this.__qt=w.top;
this.__qq=v.left-e.getDocumentLeft();
this.__qr=v.top-e.getDocumentTop();
this.addState(l);
this.__qn.capture();
if(this.getUseMoveFrame()){this.__qy();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(l)){return;
}var y=this.__qz(e);

if(this.getUseMoveFrame()){this.__qx().setDomPosition(y.viewportLeft,y.viewportTop);
}else{this.setDomPosition(y.parentLeft,y.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__qu){parent.unblockContent();
parent.setBlockerColor(this.__qv);
parent.setBlockerOpacity(this.__qw);
this.__qv=null;
this.__qw=0;
this.__qu=false;
}}this.__qn.releaseCapture();
var z=this.__qz(e);
this.setLayoutProperties({left:z.parentLeft,top:z.parentTop});
if(this.getUseMoveFrame()){this.__qx().exclude();
}e.stopPropagation();
},__qA:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
if(this.getUseMoveFrame()){this.__qx().exclude();
}}},destruct:function(){this._disposeObjects(b,c);
this.__qp=null;
}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__nu:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__nv:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__nv[name];
s[t]();
}else{var u=this.__nu[name];
s[u](q);
}}}});
})();
(function(){var k="Boolean",j="resize",i="mousedown",h="w-resize",g="sw-resize",f="n-resize",d="resizableRight",c="ne-resize",b="se-resize",a="Integer",z="e-resize",y="resizableLeft",x="mousemove",w="move",v="shorthand",u="maximized",t="nw-resize",s="mouseout",r="qx.ui.core.MResizable",q="mouseup",o="losecapture",p="resize-frame",m="resizableBottom",n="s-resize",l="resizableTop";
qx.Mixin.define(r,{construct:function(){var A=this.getContainerElement();
A.addListener(i,this.__qO,this,true);
A.addListener(q,this.__qP,this);
A.addListener(x,this.__qR,this);
A.addListener(s,this.__qS,this);
A.addListener(o,this.__qQ,this);
var B=this.getContainerElement().getDomElement();

if(B==null){B=window;
}this.__qB=qx.event.Registration.getManager(B).getHandler(qx.event.handler.DragDrop);
},properties:{resizableTop:{check:k,init:true},resizableRight:{check:k,init:true},resizableBottom:{check:k,init:true},resizableLeft:{check:k,init:true},resizable:{group:[l,d,m,y],mode:v},resizeSensitivity:{check:a,init:5},useResizeFrame:{check:k,init:true}},members:{__qB:null,__qC:null,__qD:null,__qE:null,__qF:null,__qG:null,__qH:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,_getResizeFrame:function(){var C=this.__qC;

if(!C){C=this.__qC=new qx.ui.core.Widget();
C.setAppearance(p);
C.exclude();
qx.core.Init.getApplication().getRoot().add(C);
}return C;
},__qI:function(){var location=this.__qL();
var D=this._getResizeFrame();
D.setUserBounds(location.left,location.top,location.right-location.left,location.bottom-location.top);
D.show();
D.setZIndex(this.getZIndex()+1);
},__qJ:function(e){var F=this.__qD;
var G=this.getSizeHint();
var K=this.__qH;
var J=this.__qG;
var E=J.width;
var I=J.height;
var H=J.containerWidth;
var M=J.containerHeight;
var N=J.left;
var top=J.top;
var L;

if((F&this.RESIZE_TOP)||(F&this.RESIZE_BOTTOM)){L=Math.max(K.top,Math.min(K.bottom,e.getDocumentTop()))-this.__qF;

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
if((F&this.RESIZE_LEFT)||(F&this.RESIZE_RIGHT)){L=Math.max(K.left,Math.min(K.right,e.getDocumentLeft()))-this.__qE;

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
},__qK:{1:f,2:n,4:h,8:z,5:t,6:g,9:c,10:b},__qL:function(){var O=this.getDecoratorElement();
if(O&&O.getDomElement()){return qx.bom.element.Location.get(O.getDomElement());
}else{return this.getContentLocation();
}},__qM:function(e){var location=this.__qL();
var P=this.getResizeSensitivity();
var S=e.getDocumentLeft();
var R=e.getDocumentTop();
var Q=this.__qN(location,S,R,P);
if(Q>0){Q=Q|this.__qN(location,S,R,P*2);
}this.__qD=Q;
},__qN:function(location,T,U,V){var W=0;
if(this.getResizableTop()&&Math.abs(location.top-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(location.bottom-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_BOTTOM;
}if(this.getResizableLeft()&&Math.abs(location.left-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(location.right-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_RIGHT;
}return W;
},__qO:function(e){if(!this.__qD){return;
}this.addState(j);
this.__qE=e.getDocumentLeft();
this.__qF=e.getDocumentTop();
var bb=this.getContainerLocation();
var X=this.__qL();
var ba=this.getBounds();
this.__qG={top:X.top,left:X.left,containerWidth:bb.right-bb.left,containerHeight:bb.bottom-bb.top,width:X.right-X.left,height:X.bottom-X.top,bounds:qx.lang.Object.clone(ba)};
var parent=this.getLayoutParent();
var bc=parent.getContentLocation();
var Y=parent.getBounds();
this.__qH={left:bc.left,top:bc.top,right:bc.left+Y.width,bottom:bc.top+Y.height};
if(this.getUseResizeFrame()){this.__qI();
}this.capture();
e.stop();
},__qP:function(e){if(!this.hasState(j)){return;
}if(this.getUseResizeFrame()){this._getResizeFrame().exclude();
}var bd=this.__qJ(e);
this.setWidth(bd.containerWidth);
this.setHeight(bd.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bd.parentLeft,top:bd.parentTop});
}this.__qD=0;
this.removeState(j);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__qQ:function(e){if(!this.__qD){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(w);
if(this.getUseResizeFrame()){this._getResizeFrame().exclude();
}},__qR:function(e){if(this.hasState(j)){var bh=this.__qJ(e);
if(this.getUseResizeFrame()){var bf=this._getResizeFrame();
bf.setUserBounds(bh.viewportLeft,bh.viewportTop,bh.width,bh.height);
}else{this.setWidth(bh.containerWidth);
this.setHeight(bh.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bh.parentLeft,top:bh.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(u)&&!this.__qB.isSessionActive()){this.__qM(e);
var bi=this.__qD;
var bg=this.getApplicationRoot();

if(bi){var be=this.__qK[bi];
this.setCursor(be);
bg.setGlobalCursor(be);
}else if(this.getCursor()){this.resetCursor();
bg.resetGlobalCursor();
}}},__qS:function(e){if(this.getCursor()&&!this.hasState(j)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__qC!=null&&!qx.core.ObjectRegistry.inShutDown){this.__qC.destroy();
this.__qC=null;
}this.__qB=null;
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
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":j,"close":j,"beforeMinimize":j,"minimize":j,"beforeMaximize":j,"maximize":j,"beforeRestore":j,"restore":j},properties:{appearance:{refine:true,init:A},visibility:{refine:true,init:l},focusable:{refine:true,init:true},active:{check:k,init:false,apply:t,event:E},alwaysOnTop:{check:k,init:false,event:D},modal:{check:k,init:false,event:F},caption:{apply:h,event:K,nullable:true},icon:{check:O,nullable:true,apply:h,event:o,themeable:true},status:{check:O,nullable:true,apply:H,event:n},showClose:{check:k,init:true,apply:h,themeable:true},showMaximize:{check:k,init:true,apply:h,themeable:true},showMinimize:{check:k,init:true,apply:h,themeable:true},allowClose:{check:k,init:true,apply:h},allowMaximize:{check:k,init:true,apply:h},allowMinimize:{check:k,init:true,apply:h},showStatusbar:{check:k,init:false,apply:I}},members:{__qT:null,__qU:null,getChildrenContainer:function(){return this.getChildControl(S);
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
this.__qU=bk.left===undefined?0:bk.left;
this.__qT=bk.top===undefined?0:bk.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(c);
this._updateCaptionBar();
this.fireEvent(x);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(s,qx.event.type.Event,[false,true])){var bl=this.getLayoutProperties();
this.__qU=bl.left===undefined?0:bl.left;
this.__qT=bl.top===undefined?0:bl.top;
this.removeState(c);
this.hide();
this.fireEvent(z);
}},restore:function(){if(this.getMode()===N){return;
}
if(this.fireNonBubblingEvent(u,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bm=this.__qU;
var top=this.__qT;
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
}},properties:{alignY:{check:[r,o,h],init:r,apply:s},alignX:{check:[q,m,e],init:q,apply:s},spacing:{check:b,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:d,init:false,apply:k}},members:{__kY:null,__la:null,__lb:null,__fa:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__lc:function(){var B=this._getLayoutChildren();
var length=B.length;
var x=false;
var w=this.__kY&&this.__kY.length!=length&&this.__la&&this.__kY;
var z;
var y=w?this.__kY:new Array(length);
var A=w?this.__la:new Array(length);
if(this.getReversed()){B=B.concat().reverse();
}for(var i=0;i<length;i++){z=B[i].getLayoutProperties();

if(z.height!=null){y[i]=parseFloat(z.height)/100;
}
if(z.flex!=null){A[i]=z.flex;
x=true;
}else{A[i]=0;
}}if(!w){this.__kY=y;
this.__la=A;
}this.__lb=x;
this.__fa=B;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Environment.select(j,{"true":function(C,name,D){this.assert(name===f||name===p,a+name+c);

if(name==p){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(D);
this.assert(D>=0);
}},"false":null}),renderLayout:function(E,F){if(this._invalidChildrenCache){this.__lc();
}var M=this.__fa;
var length=M.length;
var W=qx.ui.layout.Util;
var V=this.getSpacing();
var ba=this.getSeparator();

if(ba){var J=W.computeVerticalSeparatorGaps(M,V,ba);
}else{var J=W.computeVerticalGaps(M,V,true);
}var i,H,I,Q;
var R=[];
var X=J;

for(i=0;i<length;i+=1){Q=this.__kY[i];
I=Q!=null?Math.floor((F-J)*Q):M[i].getSizeHint().height;
R.push(I);
X+=I;
}if(this.__lb&&X!=F){var O={};
var U,Y;

for(i=0;i<length;i+=1){U=this.__la[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lc();
}var bj=qx.ui.layout.Util;
var br=this.__fa;
var bf=0,bi=0,bh=0;
var bd=0,bk=0;
var bo,be,bq;
for(var i=0,l=br.length;i<l;i+=1){bo=br[i];
be=bo.getSizeHint();
bi+=be.height;
var bn=this.__la[i];
var bg=this.__kY[i];

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
}},destruct:function(){this.__kY=this.__la=this.__fa=null;
}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__kx:null,__ky:false,__kz:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__ky){this.__ky=false;
}else{this.__ky=true;
o.execute(this);
}}this.fireEvent(n);
},__kA:function(e){if(this.__ky){this.__ky=false;
return;
}this.__ky=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__kz);
}
if(p!=null){this.__kz=p.addListener(n,this.__kA,this);
}var t=this.__kx;

if(t==null){this.__kx=t={};
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
this.__kx=null;
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
(function(){var p="execute",o="Enter",n="A boolean",m="A number",l="Table with window cell editor",k="A date",j="",i="1*",h="50%",g="demobrowser.demo.table.Table_Window_Editor",c="appear",f="demobrowser.demo.table.ModalCellEditorFactory",d="Cell Editor",b="ID",a="Save";
qx.Class.define(g,{extend:demobrowser.demo.table.TableDemo,members:{getCaption:function(){return l;
},createTable:function(){var u=this.createRandomRows(50);
var s=new qx.ui.table.model.Simple();
s.setColumns([b,m,k,n]);
s.setData(u);
s.setColumnEditable(1,true);
var r={tableColumnModel:function(w){return new qx.ui.table.columnmodel.Resize(w);
}};
var v=new qx.ui.table.Table(s,r);
v.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
var t=v.getTableColumnModel();
var q=t.getBehavior();
q.set(0,{width:i,minWidth:40,maxWidth:80});
q.setWidth(1,h);
q.setMinWidth(1,100);
q.setMaxWidth(1,320);
q.set(3,{width:100});
t.setDataCellRenderer(3,new qx.ui.table.cellrenderer.Boolean());
v.setShowCellFocusIndicator(false);
t.setCellEditorFactory(1,new demobrowser.demo.table.ModalCellEditorFactory());
return v;
}}});
qx.Class.define(f,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,members:{createCellEditor:function(x){var A=new qx.ui.window.Window(d);
A.setLayout(new qx.ui.layout.HBox(4));
A.set({padding:3,modal:true,showClose:false,showMaximize:false,showMinimize:false});
A.moveTo(300,250);
A.addListener(c,function(e){A.__qg.focus();
A.__qg.setTextSelection(0,A.__qg.getValue().length);
});
A.__qg=new qx.ui.form.TextField(x.value+j).set({allowGrowY:true});
A.add(A.__qg);
var y=new qx.ui.form.Button(a);
y.addListener(p,function(e){A.close();
});
A.add(y);
var z=new qx.ui.core.Command(o);
z.addListener(p,function(e){y.execute();
z.dispose();
z=null;
});
return A;
},getCellEditorValue:function(B){return parseFloat(B.__qg.getValue());
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.ui.table.ITableModel";
qx.Interface.define(a,{events:{"dataChanged":c,"metaDataChanged":b,"sorted":c},members:{getRowCount:function(){},getRowData:function(d){},getColumnCount:function(){},getColumnId:function(e){},getColumnIndexById:function(f){},getColumnName:function(g){},isColumnEditable:function(h){},isColumnSortable:function(i){},sortByColumn:function(j,k){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(l,m){},getValue:function(n,o){},getValueById:function(p,q){},setValue:function(r,s,t){},setValueById:function(u,v,w){}}});
})();
(function(){var e="metaDataChanged",d="qx.event.type.Data",c="qx.event.type.Event",b="abstract",a="qx.ui.table.model.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":d,"metaDataChanged":c,"sorted":d},construct:function(){qx.core.Object.call(this);
this.__of=[];
this.__og=[];
this.__oh={};
},members:{__of:null,__og:null,__oh:null,__oi:null,init:function(f){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(g){return null;
},isColumnEditable:function(h){return false;
},isColumnSortable:function(j){return false;
},sortByColumn:function(k,l){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(m,n){},getValue:function(o,p){throw new Error("getValue is abstract");
},getValueById:function(q,r){return this.getValue(this.getColumnIndexById(q),r);
},setValue:function(s,t,u){throw new Error("setValue is abstract");
},setValueById:function(v,w,x){this.setValue(this.getColumnIndexById(v),w,x);
},getColumnCount:function(){return this.__of.length;
},getColumnIndexById:function(y){return this.__oh[y];
},getColumnId:function(z){return this.__of[z];
},getColumnName:function(A){return this.__og[A];
},setColumnIds:function(B){this.__of=B;
this.__oh={};

for(var i=0;i<B.length;i++){this.__oh[B[i]]=i;
}this.__og=new Array(B.length);
if(!this.__oi){this.fireEvent(e);
}},setColumnNamesByIndex:function(C){if(this.__of.length!=C.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__of.length+" != "+C.length);
}this.__og=C;
this.fireEvent(e);
},setColumnNamesById:function(D){this.__og=new Array(this.__of.length);

for(var i=0;i<this.__of.length;++i){this.__og[i]=D[this.__of[i]];
}},setColumns:function(E,F){var G=this.__of.length==0||F;

if(F==null){if(this.__of.length==0){F=E;
}else{F=this.__of;
}}
if(F.length!=E.length){throw new Error("columnIdArr and columnNameArr have different length: "+F.length+" != "+E.length);
}
if(G){this.__oi=true;
this.setColumnIds(F);
this.__oi=false;
}this.setColumnNamesByIndex(E);
}},destruct:function(){this.__of=this.__og=this.__oh=null;
}});
})();
(function(){var e="dataChanged",d="metaDataChanged",c="qx.ui.table.model.Simple",b="Boolean",a="sorted";
qx.Class.define(c,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__oj=[];
this.__ok=-1;
this.__ol=[];
this.__om=null;
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
}},members:{__oj:null,__om:null,__on:null,__ol:null,__ok:null,__oo:null,getRowData:function(B){var C=this.__oj[B];

if(C==null||C.originalData==null){return C;
}else{return C.originalData;
}},getRowDataAsMap:function(D){var F=this.__oj[D];

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
},setEditable:function(K){this.__om=[];

for(var L=0;L<this.getColumnCount();L++){this.__om[L]=K;
}this.fireEvent(d);
},setColumnEditable:function(M,N){if(N!=this.isColumnEditable(M)){if(this.__om==null){this.__om=[];
}this.__om[M]=N;
this.fireEvent(d);
}},isColumnEditable:function(O){return this.__om?(this.__om[O]==true):false;
},setColumnSortable:function(P,Q){if(Q!=this.isColumnSortable(P)){if(this.__on==null){this.__on=[];
}this.__on[P]=Q;
this.fireEvent(d);
}},isColumnSortable:function(R){return (this.__on?(this.__on[R]!==false):true);
},sortByColumn:function(S,T){var W;
var V=this.__ol[S];

if(V){W=(T?V.ascending:V.descending);
}else{if(this.getCaseSensitiveSorting()){W=(T?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{W=(T?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}W.columnIndex=S;
this.__oj.sort(W);
this.__ok=S;
this.__oo=T;
var U={columnIndex:S,ascending:T};
this.fireDataEvent(a,U);
this.fireEvent(d);
},setSortMethods:function(X,Y){var ba;

if(qx.lang.Type.isFunction(Y)){ba={ascending:Y,descending:function(bb,bc){return Y(bc,bb);
}};
}else{ba=Y;
}this.__ol[X]=ba;
},getSortMethods:function(bd){return this.__ol[bd];
},clearSorting:function(){if(this.__ok!=-1){this.__ok=-1;
this.__oo=true;
this.fireEvent(d);
}},getSortColumnIndex:function(){return this.__ok;
},_setSortColumnIndex:function(be){this.__ok=be;
},isSortAscending:function(){return this.__oo;
},_setSortAscending:function(bf){this.__oo=bf;
},getRowCount:function(){return this.__oj.length;
},getValue:function(bg,bh){if(bh<0||bh>=this.__oj.length){throw new Error("this.__rowArr out of bounds: "+bh+" (0.."+this.__oj.length+")");
}return this.__oj[bh][bg];
},setValue:function(bi,bj,bk){if(this.__oj[bj][bi]!=bk){this.__oj[bj][bi]=bk;
if(this.hasListener(e)){var bl={firstRow:bj,lastRow:bj,firstColumn:bi,lastColumn:bi};
this.fireDataEvent(e,bl);
}
if(bi==this.__ok){this.clearSorting();
}}},setData:function(bm,bn){this.__oj=bm;
if(this.hasListener(e)){var bo={firstRow:0,lastRow:bm.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bo);
}
if(bn!==false){this.clearSorting();
}},getData:function(){return this.__oj;
},setDataAsMapArray:function(bp,bq,br){this.setData(this._mapArray2RowArr(bp,bq),br);
},addRows:function(bs,bt,bu){if(bt==null){bt=this.__oj.length;
}bs.splice(0,0,bt,0);
Array.prototype.splice.apply(this.__oj,bs);
var bv={firstRow:bt,lastRow:this.__oj.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bv);

if(bu!==false){this.clearSorting();
}},addRowsAsMapArray:function(bw,bx,by,bz){this.addRows(this._mapArray2RowArr(bw,by),bx,bz);
},setRows:function(bA,bB,bC){if(bB==null){bB=0;
}bA.splice(0,0,bB,bA.length);
Array.prototype.splice.apply(this.__oj,bA);
var bD={firstRow:bB,lastRow:this.__oj.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bD);

if(bC!==false){this.clearSorting();
}},setRowsAsMapArray:function(bE,bF,bG,bH){this.setRows(this._mapArray2RowArr(bE,bG),bF,bH);
},removeRows:function(bI,bJ,bK){this.__oj.splice(bI,bJ);
var bL={firstRow:bI,lastRow:this.__oj.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bI,removeCount:bJ};
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
}},destruct:function(){this.__oj=this.__om=this.__ol=this.__on=null;
}});
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
qx.Mixin.define(d,{construct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().addListener(j,this.__lf,this);
}},properties:{valid:{check:k,init:true,apply:c,event:a},required:{check:k,init:false,event:b},invalidMessage:{check:h,init:f,event:i},requiredInvalidMessage:{check:h,nullable:true,event:i}},members:{_applyValid:function(m,n){m?this.removeState(g):this.addState(g);
},__lf:qx.core.Environment.select(l,{"true":function(e){var o=this.getInvalidMessage();

if(o&&o.translate){this.setInvalidMessage(o.translate());
}var p=this.getRequiredInvalidMessage();

if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());
}},"false":null})},destruct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().removeListener(j,this.__lf,this);
}}});
})();
(function(){var k="showingPlaceholder",j="",i="engine.name",h="none",g="color",f="qx.dynlocale",d="Boolean",c="A",b="qx.event.type.Data",a="readonly",bf="placeholder",be="input",bd="focusin",bc="visibility",bb="gecko",ba="focusout",Y="changeLocale",X="hidden",W="absolute",V="readOnly",r="text",s="_applyTextAlign",p="px",q="RegExp",n=")",o="syncAppearance",l="changeValue",m="engine.version",v="change",w="changeStatus",E="textAlign",C="focused",L="center",G="visible",R="disabled",P="url(",y="String",U="resize",T="qx.ui.form.AbstractField",S="transparent",x="spellcheck",A="false",B="right",D="PositiveInteger",F="abstract",H="block",M="css.placeholder",Q="webkit",t="_applyReadOnly",u="_applyPlaceholder",z="left",K="off",J="mshtml",I="qx/static/blank.gif",O="text-placeholder",N="changeReadOnly";
qx.Class.define(T,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:F,construct:function(bg){qx.ui.core.Widget.call(this);
this.__nG=!qx.core.Environment.get(M)||(qx.core.Environment.get(i)==bb&&parseFloat(qx.core.Environment.get(m))>=2);

if(bg!=null){this.setValue(bg);
}this.getContentElement().addListener(v,this._onChangeContent,this);
if(this.__nG){this.addListener(o,this._syncPlaceholder,this);
}if(qx.core.Environment.get(f)){qx.locale.Manager.getInstance().addListener(Y,this._onChangeLocale,this);
}},events:{"input":b,"changeValue":b},properties:{textAlign:{check:[z,L,B],nullable:true,themeable:true,apply:s},readOnly:{check:d,apply:t,event:N,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:D,init:Infinity},liveUpdate:{check:d,init:false},placeholder:{check:y,nullable:true,apply:u},filter:{check:q,nullable:true,init:null}},members:{__nH:true,__nI:null,__nJ:null,__nK:null,__nG:true,__jA:null,__jE:null,getFocusElement:function(){var bh=this.getContentElement();

if(bh){return bh;
}},_createInputElement:function(){return new qx.html.Input(r);
},renderLayout:function(bi,top,bj,bk){var bl=this._updateInsets;
var bp=qx.ui.core.Widget.prototype.renderLayout.call(this,bi,top,bj,bk);
if(!bp){return;
}var bn=bp.size||bl;
var bq=p;

if(bn||bp.local||bp.margin){var bm=this.getInsets();
var innerWidth=bj-bm.left-bm.right;
var innerHeight=bk-bm.top-bm.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bo=this.getContentElement();
if(bl&&this.__nG){this.__nN().setStyles({"left":bm.left+bq,"top":bm.top+bq});
}
if(bn){if(this.__nG){this.__nN().setStyles({"width":innerWidth+bq,"height":innerHeight+bq});
}bo.setStyles({"width":innerWidth+bq,"height":innerHeight+bq});
this._renderContentElement(innerHeight,bo);
}},_renderContentElement:function(innerHeight,br){},_createContentElement:function(){var bs=this._createInputElement();
bs.setStyles({"border":h,"padding":0,"margin":0,"display":H,"background":S,"outline":h,"appearance":h,"position":W,"autoComplete":K});
bs.setSelectable(this.getSelectable());
bs.setEnabled(this.getEnabled());
bs.addListener(be,this._onHtmlInput,this);
bs.setAttribute(x,A);
if(qx.core.Environment.get(i)==Q||qx.core.Environment.get(i)==bb){bs.setStyle(U,h);
}if((qx.core.Environment.get(i)==J)){bs.setStyles({backgroundImage:P+qx.util.ResourceManager.getInstance().toUri(I)+n});
}return bs;
},_applyEnabled:function(bt,bu){qx.ui.core.Widget.prototype._applyEnabled.call(this,bt,bu);
this.getContentElement().setEnabled(bt);

if(this.__nG){if(bt){this._showPlaceholder();
}else{this._removePlaceholder();
}}else{var bv=this.getContentElement();
bv.setAttribute(bf,bt?this.getPlaceholder():j);
}},__nL:{width:16,height:16},_getContentHint:function(){return {width:this.__nL.width*10,height:this.__nL.height||16};
},_applyFont:function(bw,bx){if(bx&&this.__jA&&this.__jE){this.__jA.removeListenerById(this.__jE);
this.__jE=null;
}var by;

if(bw){this.__jA=qx.theme.manager.Font.getInstance().resolve(bw);

if(this.__jA instanceof qx.bom.webfonts.WebFont){this.__jE=this.__jA.addListener(w,this._onWebFontStatusChange,this);
}by=this.__jA.getStyles();
}else{by=qx.bom.Font.getDefaultStyles();
}if(this.getTextColor()!=null){delete by[g];
}this.getContentElement().setStyles(by);
if(this.__nG){this.__nN().setStyles(by);
}if(bw){this.__nL=qx.bom.Label.getTextSize(c,by);
}else{delete this.__nL;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bz,bA){if(bz){this.getContentElement().setStyle(g,qx.theme.manager.Color.getInstance().resolve(bz));
}else{this.getContentElement().removeStyle(g);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__nL;
},_onHtmlInput:function(e){var bE=e.getData();
var bD=true;
this.__nH=false;
if(this.__nK&&this.__nK===bE){bD=false;
}if(this.getFilter()!=null){var bF=j;
var bB=bE.search(this.getFilter());
var bC=bE;

while(bB>=0){bF=bF+(bC.charAt(bB));
bC=bC.substring(bB+1,bC.length);
bB=bC.search(this.getFilter());
}
if(bF!=bE){bD=false;
bE=bF;
this.getContentElement().setValue(bE);
}}if(bE.length>this.getMaxLength()){bD=false;
this.getContentElement().setValue(bE.substr(0,this.getMaxLength()));
}if(bD){this.fireDataEvent(be,bE,this.__nK);
this.__nK=bE;
if(this.getLiveUpdate()){this.__nM(bE);
}}},_onWebFontStatusChange:function(bG){if(bG.getData().valid===true){var bH=this.__jA.getStyles();
this.__nL=qx.bom.Label.getTextSize(c,bH);
qx.ui.core.queue.Layout.add(this);
}},__nM:function(bI){var bJ=this.__nJ;
this.__nJ=bI;

if(bJ!=bI){this.fireNonBubblingEvent(l,qx.event.type.Data,[bI,bJ]);
}},setValue:function(bK){if(bK===null){if(this.__nH){return bK;
}bK=j;
this.__nH=true;
}else{this.__nH=false;
if(this.__nG){this._removePlaceholder();
}}
if(qx.lang.Type.isString(bK)){var bM=this.getContentElement();

if(bK.length>this.getMaxLength()){bK=bK.substr(0,this.getMaxLength());
}
if(bM.getValue()!=bK){var bN=bM.getValue();
bM.setValue(bK);
var bL=this.__nH?null:bK;
this.__nJ=bN;
this.__nM(bL);
}if(this.__nG){this._showPlaceholder();
}return bK;
}throw new Error("Invalid value type: "+bK);
},getValue:function(){var bO=this.getContentElement().getValue();
return this.__nH?null:bO;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__nH=e.getData()===null;
this.__nM(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bP,bQ){this.getContentElement().setTextSelection(bP,bQ);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bS=this.getValue()||j;
var bR=this.getPlaceholder();

if(bR!=null&&bS==j&&!this.hasState(C)&&!this.hasState(R)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__nN().setStyle(bc,X);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__nN().setStyle(bc,G);
}},__nN:function(){if(this.__nI==null){this.__nI=new qx.html.Label();
var bT=qx.theme.manager.Color.getInstance();
this.__nI.setStyles({"visibility":X,"zIndex":6,"position":W,"color":bT.resolve(O)});
this.getContainerElement().add(this.__nI);
}return this.__nI;
},_onChangeLocale:qx.core.Environment.select(f,{"true":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"false":null}),_applyPlaceholder:function(bU,bV){if(this.__nG){this.__nN().setValue(bU);

if(bU!=null){this.addListener(bd,this._removePlaceholder,this);
this.addListener(ba,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bd,this._removePlaceholder,this);
this.removeListener(ba,this._showPlaceholder,this);
this._removePlaceholder();
}}else{if(this.getEnabled()){this.getContentElement().setAttribute(bf,bU);
}}},_applyTextAlign:function(bW,bX){this.getContentElement().setStyle(E,bW);
},_applyReadOnly:function(bY,ca){var cb=this.getContentElement();
cb.setAttribute(V,bY);

if(bY){this.addState(a);
this.setFocusable(false);
}else{this.removeState(a);
this.setFocusable(true);
}}},destruct:function(){this.__nI=this.__jA=null;

if(qx.core.Environment.get(f)){qx.locale.Manager.getInstance().removeListener(Y,this._onChangeLocale,this);
}
if(this.__jA&&this.__jE){this.__jA.removeListenerById(this.__jE);
}}});
})();
(function(){var n="wrap",m="value",l="textarea",k="engine.name",j="none",i="",h="overflow",g="input",f="qx.html.Input",e="select",b="disabled",d="read-only",c="overflowX",a="overflowY";
qx.Class.define(f,{extend:qx.html.Element,construct:function(o,p,q){if(o===e||o===l){var r=o;
}else{r=g;
}qx.html.Element.call(this,r,p,q);
this.__nO=o;
},members:{__nO:null,__nP:null,__nQ:null,_createDomElement:function(){return qx.bom.Input.create(this.__nO);
},_applyProperty:function(name,s){qx.html.Element.prototype._applyProperty.call(this,name,s);
var t=this.getDomElement();

if(name===m){qx.bom.Input.setValue(t,s);
}else if(name===n){qx.bom.Input.setWrap(t,s);
this.setStyle(h,t.style.overflow,true);
this.setStyle(c,t.style.overflowX,true);
this.setStyle(a,t.style.overflowY,true);
}},setEnabled:qx.core.Environment.select(k,{"webkit":function(u){this.__nQ=u;

if(!u){this.setStyles({"userModify":d,"userSelect":j});
}else{this.setStyles({"userModify":null,"userSelect":this.__nP?null:j});
}},"default":function(v){this.setAttribute(b,v===false);
}}),setSelectable:qx.core.Environment.select(k,{"webkit":function(w){this.__nP=w;
qx.html.Element.prototype.setSelectable.call(this,this.__nQ&&w);
},"default":function(x){qx.html.Element.prototype.setSelectable.call(this,x);
}}),setValue:function(y){var z=this.getDomElement();

if(z){if(z.value!=y){qx.bom.Input.setValue(z,y);
}}else{this._setProperty(m,y);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(m)||i;
},setWrap:function(B,C){if(this.__nO===l){this._setProperty(n,B,C);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__nO===l){return this._getProperty(n);
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
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__nR:false,__nS:null,__nJ:null,__nK:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();

if(C===m&&(D===m||D===g)){return true;
}
if(C===j&&(D===m||D===g||D===p)){return true;
}return false;
},registerEvent:function(E,F,G){if(qx.core.Environment.get(k)==x&&(qx.core.Environment.get(d)<9||(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)<9))){if(!E.__nT){var H=E.tagName.toLowerCase();
var I=E.type;

if(I===h||I===f||H===g||I===b||I===c){qx.bom.Event.addNativeListener(E,u,this._onPropertyWrapper);
}
if(I!==b&&I!==c){qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}
if(I===h||I===f){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}E.__nT=true;
}}else{if(F===m){this.__nU(E);
}else if(F===j){if(E.type===c||E.type===b){qx.bom.Event.addNativeListener(E,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(E.type===h||E.type===f){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}}}}},__nU:qx.core.Environment.select(k,{"mshtml":function(J){if(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.addNativeListener(J,m,this._onInputWrapper);

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
}}),unregisterEvent:function(O,P){if(qx.core.Environment.get(k)==x&&qx.core.Environment.get(d)<9&&qx.core.Environment.get(A)<9){if(O.__nT){var Q=O.tagName.toLowerCase();
var R=O.type;

if(R===h||R===f||Q===g||R===b||R===c){qx.bom.Event.removeNativeListener(O,u,this._onPropertyWrapper);
}
if(R!==b&&R!==c){qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}
if(R===h||R===f){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}
try{delete O.__nT;
}catch(S){O.__nT=null;
}}}else{if(P===m){this.__nV(O);
}else if(P===j){if(O.type===c||O.type===b){qx.bom.Event.removeNativeListener(O,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}}
if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(O.type===h||O.type===f){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}}}},__nV:qx.core.Environment.select(k,{"mshtml":function(T){if(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.removeNativeListener(T,m,this._onInputWrapper);

if(T.type===h||T.type===f||T.type===g){qx.bom.Event.removeNativeListener(T,y,this._inputFixWrapper);
}}},"webkit":function(U){var V=U.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(d))<532&&V==g){qx.bom.Event.removeNativeListener(U,a,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(U,m,this._onInputWrapper);
},"opera":function(W){qx.bom.Event.removeNativeListener(W,y,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(W,v,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(W,w,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(W,m,this._onInputWrapper);
},"default":function(X){qx.bom.Event.removeNativeListener(X,m,this._onInputWrapper);
}}),_onKeyPress:qx.core.Environment.select(k,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__nJ){this.__nJ=Y.value;
qx.event.Registration.fireEvent(Y,j,qx.event.type.Data,[Y.value]);
}}},"default":null}),_inputFix:qx.core.Environment.select(k,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__nK){this.__nK=ba.value;
qx.event.Registration.fireEvent(ba,m,qx.event.type.Data,[ba.value]);
}}},"default":null}),_onKeyDown:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__nR=true;
}},"default":null}),_onKeyUp:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__nR=false;
}},"default":null}),_onBlur:qx.core.Environment.select(k,{"opera":function(e){if(this.__nS&&qx.core.Environment.get(t)<10.6){window.clearTimeout(this.__nS);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);
var bb=bc.tagName.toLowerCase();
if(!this.__nR||bb!==m){if((qx.core.Environment.get(k)==z)&&qx.core.Environment.get(t)<10.6){this.__nS=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
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
qx.Class.define(r,{statics:{__gP:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(y,z,A){if(qx.core.Environment.get(w)){qx.core.Assert.assertKeyInMap(y,this.__gP,b);
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
(function(){var f="mshtml",e="engine.name",d="qx.ui.form.TextField",c='px',b="textfield",a="engine.version";
qx.Class.define(d,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:b},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,g){if((qx.core.Environment.get(e)==f)&&qx.core.Environment.get(a)<9){g.setStyles({"line-height":innerHeight+c});
}}}});
})();
(function(){var k="qx.debug",j="Invalid argument 'col'.",h="Column not found in table model",g="qx.event.type.Data",f="orderChanged",e="Invalid argument 'renderer'.",d="visibilityChanged",c="visibilityChangedPre",b="Invalid argument 'colCount'.",a="Invalid argument 'visible'.",y="__ov",w="Invalid argument 'factory'.",v="Invalid argument 'newPositions'.",u="Invalid argument 'width'.",t="Invalid argument 'visXPos'.",s="Invalid argument 'toOverXPos'.",r="qx.ui.table.columnmodel.Basic",q="headerCellRendererChanged",p="__ou",o="widthChanged",m="Invalid argument 'overXPos'.",n="__ow",l="Invalid argument 'fromOverXPos'.";
qx.Class.define(r,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oq=[];
this.__or=[];
},events:{"widthChanged":g,"visibilityChangedPre":g,"visibilityChanged":g,"orderChanged":g,"headerCellRendererChanged":g},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__oi:null,__os:null,__or:null,__oq:null,__ot:null,__ou:null,__ov:null,__ow:null,init:function(z,A){if(qx.core.Environment.get(k)){this.assertInteger(z,b);
}this.__ot=[];
var E=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var F=this.__ou||(this.__ou=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var C=this.__ov||(this.__ov=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var B=this.__ow||(this.__ow=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__oq=[];
this.__or=[];
var H;
if(A){H=A.getInitiallyHiddenColumns();
}H=H||[];

for(var I=0;I<z;I++){this.__ot[I]={width:E,headerRenderer:F,dataRenderer:C,editorFactory:B};
this.__oq[I]=I;
this.__or[I]=I;
}this.__os=null;
this.__oi=true;

for(var G=0;G<H.length;G++){this.setColumnVisible(H[G],false);
}this.__oi=false;

for(I=0;I<z;I++){var D={col:I,visible:this.isColumnVisible(I)};
this.fireDataEvent(c,D);
this.fireDataEvent(d,D);
}},getVisibleColumns:function(){return this.__or!=null?this.__or:[];
},setColumnWidth:function(J,K,L){if(qx.core.Environment.get(k)){this.assertInteger(J,j);
this.assertInteger(K,u);
this.assertNotUndefined(this.__ot[J],h);
}var N=this.__ot[J].width;

if(N!=K){this.__ot[J].width=K;
var M={col:J,newWidth:K,oldWidth:N,isMouseAction:L||false};
this.fireDataEvent(o,M);
}},getColumnWidth:function(O){if(qx.core.Environment.get(k)){this.assertInteger(O,j);
this.assertNotUndefined(this.__ot[O],h);
}return this.__ot[O].width;
},setHeaderCellRenderer:function(P,Q){if(qx.core.Environment.get(k)){this.assertInteger(P,j);
this.assertInterface(Q,qx.ui.table.IHeaderRenderer,e);
this.assertNotUndefined(this.__ot[P],h);
}var R=this.__ot[P].headerRenderer;

if(R!==this.__ou){R.dispose();
}this.__ot[P].headerRenderer=Q;
this.fireDataEvent(q,{col:P});
},getHeaderCellRenderer:function(S){if(qx.core.Environment.get(k)){this.assertInteger(S,j);
this.assertNotUndefined(this.__ot[S],h);
}return this.__ot[S].headerRenderer;
},setDataCellRenderer:function(T,U){if(qx.core.Environment.get(k)){this.assertInteger(T,j);
this.assertInterface(U,qx.ui.table.ICellRenderer,e);
this.assertNotUndefined(this.__ot[T],h);
}this.__ot[T].dataRenderer=U;
var V=this.__ot[T].dataRenderer;

if(V!==this.__ov){return V;
}return null;
},getDataCellRenderer:function(W){if(qx.core.Environment.get(k)){this.assertInteger(W,j);
this.assertNotUndefined(this.__ot[W],h);
}return this.__ot[W].dataRenderer;
},setCellEditorFactory:function(X,Y){if(qx.core.Environment.get(k)){this.assertInteger(X,j);
this.assertInterface(Y,qx.ui.table.ICellEditorFactory,w);
this.assertNotUndefined(this.__ot[X],h);
}var ba=this.__ot[X].headerRenderer;

if(ba!==this.__ow){ba.dispose();
}this.__ot[X].editorFactory=Y;
},getCellEditorFactory:function(bb){if(qx.core.Environment.get(k)){this.assertInteger(bb,j);
this.assertNotUndefined(this.__ot[bb],h);
}return this.__ot[bb].editorFactory;
},_getColToXPosMap:function(){if(this.__os==null){this.__os={};

for(var be=0;be<this.__oq.length;be++){var bd=this.__oq[be];
this.__os[bd]={overX:be};
}
for(var bc=0;bc<this.__or.length;bc++){var bd=this.__or[bc];
this.__os[bd].visX=bc;
}}return this.__os;
},getVisibleColumnCount:function(){return this.__or!=null?this.__or.length:0;
},getVisibleColumnAtX:function(bf){if(qx.core.Environment.get(k)){this.assertInteger(bf,t);
}return this.__or[bf];
},getVisibleX:function(bg){if(qx.core.Environment.get(k)){this.assertInteger(bg,j);
}return this._getColToXPosMap()[bg].visX;
},getOverallColumnCount:function(){return this.__oq.length;
},getOverallColumnAtX:function(bh){if(qx.core.Environment.get(k)){this.assertInteger(bh,m);
}return this.__oq[bh];
},getOverallX:function(bi){if(qx.core.Environment.get(k)){this.assertInteger(bi,j);
}return this._getColToXPosMap()[bi].overX;
},isColumnVisible:function(bj){if(qx.core.Environment.get(k)){this.assertInteger(bj,j);
}return (this._getColToXPosMap()[bj].visX!=null);
},setColumnVisible:function(bk,bl){if(qx.core.Environment.get(k)){this.assertInteger(bk,j);
this.assertBoolean(bl,a);
}
if(bl!=this.isColumnVisible(bk)){if(bl){var br=this._getColToXPosMap();
var bo=br[bk].overX;

if(bo==null){throw new Error("Showing column failed: "+bk+". The column is not added to this TablePaneModel.");
}var bp;

for(var x=bo+1;x<this.__oq.length;x++){var bq=this.__oq[x];
var bm=br[bq].visX;

if(bm!=null){bp=bm;
break;
}}if(bp==null){bp=this.__or.length;
}this.__or.splice(bp,0,bk);
}else{var bn=this.getVisibleX(bk);
this.__or.splice(bn,1);
}this.__os=null;
if(!this.__oi){var bs={col:bk,visible:bl};
this.fireDataEvent(c,bs);
this.fireDataEvent(d,bs);
}}},moveColumn:function(bt,bu){if(qx.core.Environment.get(k)){this.assertInteger(bt,l);
this.assertInteger(bu,s);
}this.__oi=true;
var bx=this.__oq[bt];
var bv=this.isColumnVisible(bx);

if(bv){this.setColumnVisible(bx,false);
}this.__oq.splice(bt,1);
this.__oq.splice(bu,0,bx);
this.__os=null;

if(bv){this.setColumnVisible(bx,true);
}this.__oi=false;
var bw={col:bx,fromOverXPos:bt,toOverXPos:bu};
this.fireDataEvent(f,bw);
},setColumnsOrder:function(by){if(qx.core.Environment.get(k)){this.assertArray(by,v);
}
if(by.length==this.__oq.length){this.__oi=true;
var bB=new Array(by.length);

for(var bz=0;bz<this.__oq.length;bz++){var bA=this.isColumnVisible(bz);
bB[bz]=bA;

if(bA){this.setColumnVisible(bz,false);
}}this.__oq=qx.lang.Array.clone(by);
this.__os=null;
for(var bz=0;bz<this.__oq.length;bz++){if(bB[bz]){this.setColumnVisible(bz,true);
}}this.__oi=false;
this.fireDataEvent(f);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__oq.length+", got "+by.length);
}}},destruct:function(){for(var i=0;i<this.__ot.length;i++){this.__ot[i].headerRenderer.dispose();
this.__ot[i].dataRenderer.dispose();
this.__ot[i].editorFactory.dispose();
}this.__oq=this.__or=this.__ot=this.__os=null;
this._disposeObjects(p,y,n);
}});
})();
(function(){var q="qx.tableResizeDebug",p="qx.debug",n="appear",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",c="visibilityChanged",f="Reset column widths",e="changeBehavior",b="user-button",a="widthChanged",d="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){qx.ui.table.columnmodel.Basic.call(this);
this.__ox=false;
this.__oy=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:e}},members:{__oy:null,__ox:null,__nB:null,_applyBehavior:function(r,s){if(s!=null){s.dispose();
s=null;
}r._setNumColumns(this.getOverallColumnCount());
r.setTableColumnModel(this);
},init:function(t,u){qx.ui.table.columnmodel.Basic.prototype.init.call(this,t,u);

if(this.__nB==null){this.__nB=u;
u.addListener(n,this._onappear,this);
u.addListener(l,this._onTableWidthChanged,this);
u.addListener(k,this._onverticalscrollbarchanged,this);
u.addListener(m,this._addResetColumnWidthButton,this);
this.addListener(a,this._oncolumnwidthchanged,this);
this.addListener(c,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(t);
},getTable:function(){return this.__nB;
},_addResetColumnWidthButton:function(event){var x=event.getData();
var w=x.columnButton;
var v=x.menu;
var o;
o=w.factory(g);
v.add(o);
o=w.factory(b,{text:this.tr(f)});
v.add(o);
o.addListener(d,this._onappear,this);
},_onappear:function(event){if(this.__ox){return ;
}this.__ox=true;

if(qx.core.Environment.get(p)){if(qx.core.Environment.get(q)){this.debug("onappear");
}}this.getBehavior().onAppear(event,event.getType()!==n);
this.__nB._updateScrollerWidths();
this.__nB._updateScrollBarVisibility();
this.__ox=false;
this.__oy=true;
},_onTableWidthChanged:function(event){if(this.__ox||!this.__oy){return ;
}this.__ox=true;

if(qx.core.Environment.get(p)){if(qx.core.Environment.get(q)){this.debug("ontablewidthchanged");
}}this.getBehavior().onTableWidthChanged(event);
this.__ox=false;
},_onverticalscrollbarchanged:function(event){if(this.__ox||!this.__oy){return ;
}this.__ox=true;

if(qx.core.Environment.get(p)){if(qx.core.Environment.get(q)){this.debug("onverticalscrollbarchanged");
}}this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__nB&&!this.__nB.isDisposed()){this.__nB._updateScrollerWidths();
this.__nB._updateScrollBarVisibility();
}},this,0);
this.__ox=false;
},_oncolumnwidthchanged:function(event){if(this.__ox||!this.__oy){return ;
}this.__ox=true;

if(qx.core.Environment.get(p)){if(qx.core.Environment.get(q)){this.debug("oncolumnwidthchanged");
}}this.getBehavior().onColumnWidthChanged(event);
this.__ox=false;
},_onvisibilitychanged:function(event){if(this.__ox||!this.__oy){return ;
}this.__ox=true;

if(qx.core.Environment.get(p)){if(qx.core.Environment.get(q)){this.debug("onvisibilitychanged");
}}this.getBehavior().onVisibilityChanged(event);
this.__ox=false;
}},destruct:function(){this.__nB=null;
}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){qx.ui.core.LayoutItem.call(this);
this.setColumnWidth(e);
},members:{__oz:null,renderLayout:function(f,top,g,h){this.__oz=g;
},getComputedWidth:function(){return this.__oz;
},getFlex:function(){return this.getLayoutProperties().flex||0;
},setColumnWidth:function(i,j){var j=j||0;
var k=null;

if(typeof i==c){this.setWidth(i);
}else if(typeof i==d){if(i==e){j=1;
}else{var l=i.match(/^[0-9]+(?:\.[0-9]+)?([%\*])$/);

if(l){if(l[1]==b){j=parseFloat(i);
}else{k=i;
}}}}this.setLayoutProperties({flex:j,width:k});
}},environment:{"qx.tableResizeDebug":false}});
})();
(function(){var b="qx.ui.table.columnmodel.resizebehavior.Abstract",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,members:{_setNumColumns:function(c){throw new Error("_setNumColumns is abstract");
},onAppear:function(event,d){throw new Error("onAppear is abstract");
},onTableWidthChanged:function(event){throw new Error("onTableWidthChanged is abstract");
},onVerticalScrollBarChanged:function(event){throw new Error("onVerticalScrollBarChanged is abstract");
},onColumnWidthChanged:function(event){throw new Error("onColumnWidthChanged is abstract");
},onVisibilityChanged:function(event){throw new Error("onVisibilityChanged is abstract");
},_getAvailableWidth:function(){var f=this.getTableColumnModel();
var i=f.getTable();
var e=i._getPaneScrollerArr();

if(!e[0]||!e[0].getLayoutParent().getBounds()){return null;
}var h=e[0].getLayoutParent().getBounds().width;
var g=e[e.length-1];
h-=g.getPaneInsetRight();
return h;
}}});
})();
(function(){var j="Function",h="Boolean",g="minWidth",f="width",e="qx.ui.table.columnmodel.Resize",d="qx.ui.table.columnmodel.resizebehavior.Default",c="__oB",b="maxWidth",a="__oC";
qx.Class.define(d,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){qx.ui.table.columnmodel.resizebehavior.Abstract.call(this);
this.__oA=[];
this.__oB=new qx.ui.layout.HBox();
this.__oB.connectToWidget(this);
this.__oC=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:j,init:function(k){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:h,init:false},tableColumnModel:{check:e}},members:{__oB:null,__oD:null,__oA:null,__oC:null,__oE:false,setWidth:function(m,n,o){if(m>=this.__oA.length){throw new Error("Column number out of range");
}this.__oA[m].setColumnWidth(n,o);
this.__oC.schedule();
},setMinWidth:function(p,q){if(p>=this.__oA.length){throw new Error("Column number out of range");
}this.__oA[p].setMinWidth(q);
this.__oC.schedule();
},setMaxWidth:function(r,s){if(r>=this.__oA.length){throw new Error("Column number out of range");
}this.__oA[r].setMaxWidth(s);
this.__oC.schedule();
},set:function(t,u){for(var v in u){switch(v){case f:this.setWidth(t,u[v]);
break;
case g:this.setMinWidth(t,u[v]);
break;
case b:this.setMaxWidth(t,u[v]);
break;
default:throw new Error("Unknown property: "+v);
}}},onAppear:function(event,w){if(w===true||!this.__oE||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__oE=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var x=event.getData();
if(x.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(y){var z=this.__oA;
if(y<=z.length){z.splice(y,z.length);
return;
}for(var i=z.length;i<y;i++){z[i]=this.getNewResizeBehaviorColumnData()();
z[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__oD;
},_computeColumnsFlexWidth:function(){this.__oC.cancel();
var E=this._getAvailableWidth();

if(E===null){return;
}var A=this.getTableColumnModel();
var C=A.getVisibleColumns();
var D=C.length;
var B=this.__oA;
var i,l;

if(D===0){return;
}var G=[];

for(i=0;i<D;i++){G.push(B[C[i]]);
}this.__oD=G;
this.__oF();
this.__oB.renderLayout(E,100);
for(i=0,l=G.length;i<l;i++){var F=G[i].getComputedWidth();
A.setColumnWidth(C[i],F);
}},__oF:function(){this.__oB.invalidateChildrenCache();
var H=this.__oD;

for(var i=0,l=H.length;i<l;i++){H[i].invalidateLayoutCache();
}},_extendNextColumn:function(event){var M=this.getTableColumnModel();
var P=event.getData();
var K=M.getVisibleColumns();
var J=this._getAvailableWidth();
var I=K.length;
if(P.newWidth>P.oldWidth){return ;
}var i;
var L;
var O=0;

for(i=0;i<I;i++){O+=M.getColumnWidth(K[i]);
}if(O<J){for(i=0;i<K.length;i++){if(K[i]==P.col){L=K[i+1];
break;
}}
if(L){var N=(J-(O-M.getColumnWidth(L)));
M.setColumnWidth(L,N);
}}},_extendLastColumn:function(event){var T=this.getTableColumnModel();
var X=event.getData();
if(X.visible){return;
}var S=T.getVisibleColumns();
if(S.length==0){return;
}var R=this._getAvailableWidth(T);
var Q=S.length;
var i;
var V;
var W=0;

for(i=0;i<Q;i++){W+=T.getColumnWidth(S[i]);
}if(W<R){V=S[S.length-1];
var U=(R-(W-T.getColumnWidth(V)));
T.setColumnWidth(V,U);
}},_getResizeColumnData:function(){return this.__oA;
}},destruct:function(){this.__oA=this.__oD=null;
this._disposeObjects(c,a);
}});
})();
(function(){var p="Boolean",o="column-button",n="Function",m="qx.event.type.Data",k="statusbar",h="qx.ui.table.pane.CellEvent",g="function",f="PageUp",e="dataChanged",d="changeLocale",bH="changeSelection",bG="__oP",bF="appear",bE="qx.dynlocale",bD='"',bC="Enter",bB="metaDataChanged",bA="_applyStatusBarVisible",bz="columnVisibilityMenuCreateStart",by="blur",w="qx.ui.table.Table",y="columnVisibilityMenuCreateEnd",u="changeVisible",v="_applyResetSelectionOnHeaderClick",s="_applyMetaColumnCounts",t="__oO",q="focus",r="changeDataRowRenderer",F="changeHeaderCellHeight",G="Escape",ba="A",V="changeSelectionModel",bi="Left",bd="Down",bu="Integer",bo="_applyHeaderCellHeight",O="visibilityChanged",bx="qx.ui.table.ITableModel",bw="orderChanged",bv="_applySelectionModel",M="menu-button",R="menu",T="_applyAdditionalStatusBarText",X="_applyFocusCellOnMouseMove",bb="table",be="_applyColumnVisibilityButtonVisible",bk="changeTableModel",bq="qx.event.type.Event",z="tableWidthChanged",A="_applyHeaderCellsVisible",Q="Object",bh="_applyShowCellFocusIndicator",bg="__oG",bf="resize",bm="verticalScrollBarChanged",bl="changeScrollY",bc="_applyTableModel",bj="End",a="_applyKeepFirstVisibleRowComplete",bp="widthChanged",B="one of one row",C="Home",W="_applyRowHeight",b="F2",c="Up",L="%1 rows",D="qx.ui.table.selection.Model",E="one row",K="__oH",Y="PageDown",bs="%1 of %2 rows",br="__oN",S="keypress",bt="changeRowHeight",N="Number",bn="header",H="_applyContextMenuFromDataCellsOnly",J="__iY",P="qx.ui.table.IRowRenderer",U="Right",I="Space";
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
this.__oG=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__oG,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__oH=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(bI||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(S,this._onKeyPress);
this.addListener(q,this._onFocusChanged);
this.addListener(by,this._onFocusChanged);
var bK=new qx.ui.core.Widget().set({height:0});
this._add(bK);
bK.addListener(bf,this._onResize,this);
this.__oI=null;
this.__oJ=null;
if(qx.core.Environment.get(bE)){qx.locale.Manager.getInstance().addListener(d,this._onChangeLocale,this);
}this.initStatusBarVisible();
bI=this.getTableModel();

if(bI.init&&typeof (bI.init)==g){bI.init(this);
}},events:{"columnVisibilityMenuCreateStart":m,"columnVisibilityMenuCreateEnd":m,"tableWidthChanged":bq,"verticalScrollBarChanged":m,"cellClick":h,"cellDblclick":h,"cellContextmenu":h,"dataEdited":m},statics:{__oK:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:bb},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},initiallyHiddenColumns:{init:null},selectable:{refine:true,init:false},selectionModel:{check:D,apply:bv,event:V},tableModel:{check:bx,apply:bc,event:bk},rowHeight:{check:N,init:20,apply:W,event:bt,themeable:true},forceLineHeight:{check:p,init:true},headerCellsVisible:{check:p,init:true,apply:A,themeable:true},headerCellHeight:{check:bu,init:16,apply:bo,event:F,nullable:true,themeable:true},statusBarVisible:{check:p,init:true,apply:bA},additionalStatusBarText:{nullable:true,init:null,apply:T},columnVisibilityButtonVisible:{check:p,init:true,apply:be,themeable:true},metaColumnCounts:{check:Q,apply:s},focusCellOnMouseMove:{check:p,init:false,apply:X},rowFocusChangeModifiesSelection:{check:p,init:true},showCellFocusIndicator:{check:p,init:true,apply:bh},contextMenuFromDataCellsOnly:{check:p,init:true,apply:H},keepFirstVisibleRowComplete:{check:p,init:true,apply:a},alwaysUpdateCells:{check:p,init:false},resetSelectionOnHeaderClick:{check:p,init:true,apply:v},dataRowRenderer:{check:P,init:null,nullable:true,event:r},modalCellEditorPreOpenFunction:{check:n,init:null,nullable:true},newColumnMenu:{check:n,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:n,init:function(bL){return new qx.ui.table.selection.Manager(bL);
}},newSelectionModel:{check:n,init:function(bM){return new qx.ui.table.selection.Model(bM);
}},newTableColumnModel:{check:n,init:function(bN){return new qx.ui.table.columnmodel.Basic(bN);
}},newTablePane:{check:n,init:function(bO){return new qx.ui.table.pane.Pane(bO);
}},newTablePaneHeader:{check:n,init:function(bP){return new qx.ui.table.pane.Header(bP);
}},newTablePaneScroller:{check:n,init:function(bQ){return new qx.ui.table.pane.Scroller(bQ);
}},newTablePaneModel:{check:n,init:function(bR){return new qx.ui.table.pane.Model(bR);
}}},members:{__oI:null,__oJ:null,__oG:null,__oH:null,__oL:null,__oM:null,__oi:null,__oN:null,__oO:null,__oP:null,__oQ:null,__iY:null,_createChildControlImpl:function(bS,bT){var bU;

switch(bS){case k:bU=new qx.ui.basic.Label();
bU.set({allowGrowX:true});
this._add(bU);
break;
case o:bU=this.getNewColumnMenu()();
bU.set({focusable:false});
var bV=bU.factory(R,{table:this});
bV.addListener(bF,this._initColumnMenu,this);
break;
}return bU||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bS);
},_applySelectionModel:function(bW,bX){this.__oH.setSelectionModel(bW);

if(bX!=null){bX.removeListener(bH,this._onSelectionChanged,this);
}bW.addListener(bH,this._onSelectionChanged,this);
},_applyRowHeight:function(bY,ca){var cb=this._getPaneScrollerArr();

for(var i=0;i<cb.length;i++){cb[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(cc,cd){var ce=this._getPaneScrollerArr();

for(var i=0;i<ce.length;i++){ce[i]._excludeChildControl(bn);
}},_applyHeaderCellHeight:function(cf,cg){var ch=this._getPaneScrollerArr();

for(var i=0;i<ch.length;i++){ch[i].getHeader().setHeight(cf);
}},getEmptyTableModel:function(){if(!this.__oP){this.__oP=new qx.ui.table.model.Simple();
this.__oP.setColumns([]);
this.__oP.setData([]);
}return this.__oP;
},_applyTableModel:function(ci,cj){this.getTableColumnModel().init(ci.getColumnCount(),this);

if(cj!=null){cj.removeListener(bB,this._onTableModelMetaDataChanged,this);
cj.removeListener(e,this._onTableModelDataChanged,this);
}ci.addListener(bB,this._onTableModelMetaDataChanged,this);
ci.addListener(e,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,ci.getRowCount(),0,ci.getColumnCount());
this._onTableModelMetaDataChanged();
if(cj&&ci.init&&typeof (ci.init)==g){ci.init(this);
}},getTableColumnModel:function(){if(!this.__oO){var cn=this.__oO=this.getNewTableColumnModel()(this);
cn.addListener(O,this._onColVisibilityChanged,this);
cn.addListener(bp,this._onColWidthChanged,this);
cn.addListener(bw,this._onColOrderChanged,this);
var cm=this.getTableModel();
cn.init(cm.getColumnCount(),this);
var ck=this._getPaneScrollerArr();

for(var i=0;i<ck.length;i++){var cl=ck[i];
var co=cl.getTablePaneModel();
co.setTableColumnModel(cn);
}}return this.__oO;
},_applyStatusBarVisible:function(cp,cq){if(cp){this._showChildControl(k);
}else{this._excludeChildControl(k);
}
if(cp){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(cr,cs){this.__oL=cr;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(ct,cu){if(ct){this._showChildControl(o);
}else{this._excludeChildControl(o);
}},_applyMetaColumnCounts:function(cv,cw){var cD=cv;
var cx=this._getPaneScrollerArr();
var cB={};

if(cv>cw){var cF=qx.event.Registration.getManager(cx[0]);

for(var cG in qx.ui.table.Table.__oK){cB[cG]={};
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
cH.addListener(bl,this._onScrollY,this);
for(cG in qx.ui.table.Table.__oK){if(!cB[cG]){break;
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
this.__oG.add(cH,{flex:cI});
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
}},getSelectionManager:function(){return this.__oH;
},_getPaneScrollerArr:function(){return this.__oG.getChildren();
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
if(this.__oJ>=dq&&this.__oJ<(dq+dr)){this.setFocusedCell();
}}
for(var i=0;i<ds.length;i++){ds[i].onTableModelDataChanged(dl,dm,dn,dp);
}var dt=this.getTableModel().getRowCount();

if(dt!=this.__oM){this.__oM=dt;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(du){if(!this.__oi){this.__oi=true;
var dv=this._getPaneScrollerArr();

for(var i=0;i<dv.length;i++){dv[i].setScrollY(du.getData());
}this.__oi=false;
}},_onKeyPress:function(dw){if(!this.getEnabled()){return;
}var dD=this.__oJ;
var dA=true;
var dE=dw.getKeyIdentifier();

if(this.isEditing()){if(dw.getModifiers()==0){switch(dE){case bC:this.stopEditing();
var dD=this.__oJ;
this.moveFocusedCell(0,1);

if(this.__oJ!=dD){dA=this.startEditing();
}break;
case G:this.cancelEditing();
this.focus();
break;
default:dA=false;
break;
}}}else{if(dw.isCtrlPressed()){dA=true;

switch(dE){case ba:var dB=this.getTableModel().getRowCount();

if(dB>0){this.getSelectionModel().setSelectionInterval(0,dB-1);
}break;
default:dA=false;
break;
}}else{switch(dE){case I:this.__oH.handleSelectKeyDown(this.__oJ,dw);
break;
case b:case bC:this.startEditing();
dA=true;
break;
case C:this.setFocusedCell(this.__oI,0,true);
break;
case bj:var dB=this.getTableModel().getRowCount();
this.setFocusedCell(this.__oI,dB-1,true);
break;
case bi:this.moveFocusedCell(-1,0);
break;
case U:this.moveFocusedCell(1,0);
break;
case c:this.moveFocusedCell(0,-1);
break;
case bd:this.moveFocusedCell(0,1);
break;
case f:case Y:var dz=this.getPaneScroller(0);
var dC=dz.getTablePane();
var dy=this.getRowHeight();
var dx=(dE==f)?-1:1;
dB=dC.getVisibleRowCount()-1;
dz.setScrollY(dz.getScrollY()+dx*dB*dy);
this.moveFocusedCell(0,dx*dB);
break;
default:dA=false;
}}}
if(dD!=this.__oJ&&this.getRowFocusChangeModifiesSelection()){this.__oH.handleMoveKeyDown(this.__oJ,dw);
}
if(dA){dw.preventDefault();
dw.stopPropagation();
}},_onFocusChanged:function(dF){var dG=this._getPaneScrollerArr();

for(var i=0;i<dG.length;i++){dG[i].onFocusChanged();
}},_onColVisibilityChanged:function(dH){var dI=this._getPaneScrollerArr();

for(var i=0;i<dI.length;i++){dI[i].onColVisibilityChanged();
}var dJ=dH.getData();

if(this.__oN!=null&&dJ.col!=null&&dJ.visible!=null){this.__oN[dJ.col].setVisible(dJ.visible);
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
},setFocusedCell:function(dR,dS,dT){if(!this.isEditing()&&(dR!=this.__oI||dS!=this.__oJ)){if(dR===null){dR=0;
}this.__oI=dR;
this.__oJ=dS;
var dU=this._getPaneScrollerArr();

for(var i=0;i<dU.length;i++){dU[i].setFocusedCell(dR,dS);
}
if(dR!==null&&dT){this.scrollCellVisible(dR,dS);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__oI;
},getFocusedRow:function(){return this.__oJ;
},highlightFocusedRow:function(dV){this.getDataRowRenderer().setHighlightFocusRow(dV);
},clearFocusedRowHighlight:function(dW){if(dW){var dY=dW.getRelatedTarget();

if(dY instanceof qx.ui.table.pane.Pane||dY instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var dX=this._getPaneScrollerArr();

for(var i=0;i<dX.length;i++){dX[i].onFocusChanged();
}},moveFocusedCell:function(ea,eb){var ef=this.__oI;
var eg=this.__oJ;
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
if(!ej){this.addListenerOnce(bF,function(){this.scrollCellVisible(eh,ei);
},this);
}var ek=this.getTableColumnModel();
var x=ek.getVisibleX(eh);
var el=this._getMetaColumnAtColumnX(x);

if(el!=-1){this.getPaneScroller(el).scrollCellVisible(eh,ei);
}},isEditing:function(){if(this.__oI!=null){var x=this.getTableColumnModel().getVisibleX(this.__oI);
var em=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(em).isEditing();
}return false;
},startEditing:function(){if(this.__oI!=null){var x=this.getTableColumnModel().getVisibleX(this.__oI);
var eo=this._getMetaColumnAtColumnX(x);
var en=this.getPaneScroller(eo).startEditing();
return en;
}return false;
},stopEditing:function(){if(this.__oI!=null){var x=this.getTableColumnModel().getVisibleX(this.__oI);
var ep=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(ep).stopEditing();
}},cancelEditing:function(){if(this.__oI!=null){var x=this.getTableColumnModel().getVisibleX(this.__oI);
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
}else{eD=this.trn(B,bs,eE,eC,eE);
}}
if(this.__oL){if(eD){eD+=this.__oL;
}else{eD=this.__oL;
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
if(eP){if(this.__oQ==null){this.__oQ=eJ[i].getVerticalScrollBarVisible();
this.__iY=qx.event.Timer.once(function(){this.__oQ=null;
this.__iY=null;
},this,0);
}}eJ[i].setVerticalScrollBarVisible(eP&&eN);
if(eP&&eN!=this.__oQ){this.fireDataEvent(bm,eN);
}}},_initColumnMenu:function(){var eS=this.getTableModel();
var eT=this.getTableColumnModel();
var eU=this.getChildControl(o);
eU.empty();
var eR=eU.getMenu();
var eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(bz,eV);
this.__oN={};

for(var eW=0,l=eS.getColumnCount();eW<l;eW++){var eQ=eU.factory(M,{text:eS.getColumnName(eW),column:eW,bVisible:eT.isColumnVisible(eW)});
qx.core.Assert.assertInterface(eQ,qx.ui.table.IColumnMenuItem);
eQ.addListener(u,this._createColumnVisibilityCheckBoxHandler(eW),this);
this.__oN[eW]=eQ;
}eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(y,eV);
},_createColumnVisibilityCheckBoxHandler:function(eX){return function(eY){var fa=this.getTableColumnModel();
fa.setColumnVisible(eX,eY.getData());
};
},setColumnWidth:function(fb,fc){this.getTableColumnModel().setColumnWidth(fb,fc);
},_onResize:function(){this.fireEvent(z);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(fd,fe,self,ff){if(this.self(arguments).__oK[fd]){var fh=[fd];

for(var i=0,fg=this._getPaneScrollerArr();i<fg.length;i++){fh.push(fg[i].addListener.apply(fg[i],arguments));
}return fh.join(bD);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,fd,fe,self,ff);
}},removeListener:function(fi,fj,self,fk){if(this.self(arguments).__oK[fi]){for(var i=0,fl=this._getPaneScrollerArr();i<fl.length;i++){fl[i].removeListener.apply(fl[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,fi,fj,self,fk);
}},removeListenerById:function(fm){var fq=fm.split(bD);
var fp=fq.shift();

if(this.self(arguments).__oK[fp]){var fo=true;

for(var i=0,fn=this._getPaneScrollerArr();i<fn.length;i++){fo=fn[i].removeListenerById.call(fn[i],fq[i])&&fo;
}return fo;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,fm);
}},destroy:function(){this.getChildControl(o).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Environment.get(bE)){qx.locale.Manager.getInstance().removeListener(d,this._onChangeLocale,this);
}var fs=this.getSelectionModel();

if(fs){fs.dispose();
}var fr=this.getDataRowRenderer();

if(fr){fr.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(K,bg,bG,bG,t,J);
this._disposeMap(br);
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
(function(){var v="keypress",u="qx.debug",t="interval",s="keydown",r="mousedown",q="keyup",p="__oU",o="blur",n="Enter",m="__jw",d="Up",l="__oT",h="Escape",c="event.touch",b="qx.ui.menu.Manager",g="Left",f="Down",j="Right",a="singleton",k="Space";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jw=[];
var w=document.body;
var x=qx.event.Registration;
x.addListener(window.document.documentElement,r,this._onMouseDown,this,true);
x.addListener(w,s,this._onKeyUpDown,this,true);
x.addListener(w,q,this._onKeyUpDown,this,true);
x.addListener(w,v,this._onKeyPress,this,true);
if(!qx.core.Environment.get(c)){qx.bom.Element.addListener(window,o,this.hideAll,this);
}this.__oT=new qx.event.Timer;
this.__oT.addListener(t,this._onOpenInterval,this);
this.__oU=new qx.event.Timer;
this.__oU.addListener(t,this._onCloseInterval,this);
},members:{__oV:null,__oW:null,__oT:null,__oU:null,__jw:null,_getChild:function(y,z,A,B){var C=y.getChildren();
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
}}var H=this.__jw;
H.push(G);
G.setZIndex(1e6+H.length);
},remove:function(I){if(qx.core.Environment.get(u)){if(!(I instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+I);
}}var J=this.__jw;

if(J){qx.lang.Array.remove(J,I);
}},hideAll:function(){var K=this.__jw;

if(K){for(var i=K.length-1;i>=0;i--){K[i].exclude();
}}},getActiveMenu:function(){var L=this.__jw;
return L.length>0?L[L.length-1]:null;
},scheduleOpen:function(M){this.cancelClose(M);
if(M.isVisible()){if(this.__oV){this.cancelOpen(this.__oV);
}}else if(this.__oV!=M){this.__oV=M;
this.__oT.restartWith(M.getOpenInterval());
}},scheduleClose:function(N){this.cancelOpen(N);
if(!N.isVisible()){if(this.__oW){this.cancelClose(this.__oW);
}}else if(this.__oW!=N){this.__oW=N;
this.__oU.restartWith(N.getCloseInterval());
}},cancelOpen:function(O){if(this.__oV==O){this.__oT.stop();
this.__oV=null;
}},cancelClose:function(P){if(this.__oW==P){this.__oU.stop();
this.__oW=null;
}},_onOpenInterval:function(e){this.__oT.stop();
this.__oV.open();
this.__oV=null;
},_onCloseInterval:function(e){this.__oU.stop();
this.__oW.exclude();
this.__oW=null;
},_onMouseDown:function(e){var Q=e.getTarget();
Q=qx.ui.core.Widget.getWidgetByElement(Q,true);
if(Q==null){this.hideAll();
return;
}if(Q.getMenu&&Q.getMenu()&&Q.getMenu().isVisible()){return;
}if(this.__jw.length>0&&!this._isInMenu(Q)){this.hideAll();
}},__oX:{"Enter":1,"Space":1},__mY:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var R=this.getActiveMenu();

if(!R){return;
}var S=e.getKeyIdentifier();

if(this.__mY[S]||(this.__oX[S]&&R.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var T=this.getActiveMenu();

if(!T){return;
}var U=e.getKeyIdentifier();
var W=this.__mY[U];
var V=this.__oX[U];

if(W){switch(U){case d:this._onKeyPressUp(T);
break;
case f:this._onKeyPressDown(T);
break;
case g:this._onKeyPressLeft(T);
break;
case j:this._onKeyPressRight(T);
break;
case h:this.hideAll();
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
this._disposeObjects(l,p);
this._disposeArray(m);
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
},properties:{appearance:{refine:true,init:a},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:b},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:k,apply:n,init:0,themeable:true},spacingY:{check:k,apply:z,init:0,themeable:true},iconColumnWidth:{check:k,init:0,themeable:true,apply:v},arrowColumnWidth:{check:k,init:0,themeable:true,apply:t},blockerColor:{check:r,init:null,nullable:true,apply:w,themeable:true},blockerOpacity:{check:p,init:1,apply:o,themeable:true},selectedButton:{check:h,nullable:true,apply:A},openedButton:{check:h,nullable:true,apply:m},opener:{check:h,nullable:true},openInterval:{check:k,themeable:true,init:250,apply:q},closeInterval:{check:k,themeable:true,init:250,apply:x},blockBackground:{check:d,themeable:true,init:false}},members:{__pa:null,__pb:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__pd();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__pd();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(C){this.placeToPoint(C);
this.__pd();
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
}this.__pc();
},__pc:function(){if(this.isVisible()){if(this.getBlockBackground()){var R=this.getZIndex();
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
},__pd:function(){var bj=this._getMenuBounds();

if(!bj){this.addListenerOnce(j,this.__pd,this);
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
}this.__pb=bl;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(l);

if(this.__pb){this.__pb.call(this);
delete this.__pb;
}},_onResize:function(){if(this.isVisible()){var bm=this._placementTarget;

if(!bm){return;
}else if(bm instanceof qx.ui.core.Widget){this.placeToWidget(bm);
}else if(bm.top!==undefined){this.placeToPoint(bm);
}else{throw new Error("Unknown target: "+bm);
}this.__pd();
}},_onMouseOver:function(e){var bo=qx.ui.menu.Manager.getInstance();
bo.cancelClose(this);
var bp=e.getTarget();

if(bp.isEnabled()&&bp instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(bp);
var bn=bp.getMenu&&bp.getMenu();

if(bn){bn.setOpener(bp);
bo.scheduleOpen(bn);
this.__pa=bn;
}else{var bq=this.getOpenedButton();

if(bq){bo.scheduleClose(bq.getMenu());
}
if(this.__pa){bo.cancelOpen(this.__pa);
this.__pa=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var br=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bs=this.getOpenedButton();
bs?this.setSelectedButton(bs):this.resetSelectedButton();
if(bs){br.cancelClose(bs.getMenu());
}if(this.__pa){br.cancelOpen(this.__pa);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(j,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(y);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__pe:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__pe=[0,0,0,0];
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
},getColumnSizes:function(){return this.__pe||null;
}},destruct:function(){this.__pe=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="String",l="changeCommand",k="qx.ui.menu.Menu",d="qx.ui.menu.AbstractButton",j="keypress",h="",c="_applyIcon",b="mouseup",g="abstract",f="_applyLabel",i="click",a="_applyMenu";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:g,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(i,this._onClick);
this.addListener(j,this._onKeyPress);
this.addListener(b,this._onMouseUp);
this.addListener(l,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:m,apply:f,nullable:true},menu:{check:k,apply:a,nullable:true,dereference:true},icon:{check:m,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(u,v){var w;

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
},_onMouseUp:function(e){},_onClick:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var H=e.getData();
if(H==null){return;
}
if(qx.core.Environment.get(o)){var F=e.getOldData();

if(!F){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!H){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var G=H!=null?H.toString():h;
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
}var u=this.__pf(w[0]);
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
}},__pf:function(z){while(!(z instanceof qx.ui.menu.Menu)){z=z.getLayoutParent();
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__iY",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__iY=new qx.event.AcceleratingTimer();
this.__iY.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__pg:null,__iY:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__ph();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__pg){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__pi();
},_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);

if(!r){this.removeState(n);
this.removeState(m);
this.__pi();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__iY.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__iY.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__ph();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__pg){this.execute();
}}this.__pi();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__pg){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__pi();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__ph();
}},_onInterval:function(e){this.__pg=true;
this.fireEvent(b);
},__ph:function(){this.fireEvent(g);
this.__pg=false;
this.__iY.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__pi:function(){this.fireEvent(d);
this.__iY.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="qx.event.type.Event",b="__iY",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__iY=new qx.event.Timer(this.getInterval());
this.__iY.addListener(d,this._onInterval,this);
},events:{"interval":c},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__iY:null,__pj:null,start:function(){this.__iY.setInterval(this.getFirstInterval());
this.__iY.start();
},stop:function(){this.__iY.stop();
this.__pj=null;
},_onInterval:function(){this.__iY.stop();

if(this.__pj==null){this.__pj=this.getInterval();
}this.__pj=Math.max(this.getMinimum(),this.__pj-this.getDecrease());
this.__iY.setInterval(this.__pj);
this.__iY.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(b);
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
(function(){var i="Integer",h="hovered",g="hover-button",f="interval",d="mouseover",c="mouseout",b="__iY",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(d,this._onMouseOver,this);
this.addListener(c,this._onMouseOut,this);
this.__iY=new qx.event.AcceleratingTimer();
this.__iY.addListener(f,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__iY:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__iY.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__iY.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__iY.stop();
}}},destruct:function(){this._disposeObjects(b);
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
this.__pk=[];
this.__pl=[];
},properties:{appearance:{refine:true,init:a},openMenu:{check:r,event:k,nullable:true},show:{init:s,check:[s,d,n],inheritable:true,event:b},spacing:{nullable:true,check:g,themeable:true,apply:q},overflowIndicator:{check:m,nullable:true,apply:h},overflowHandling:{init:false,check:o,apply:c}},events:{"hideItem":t,"showItem":t},members:{__pk:null,__pl:null,_computeSizeHint:function(){var z=qx.ui.core.Widget.prototype._computeSizeHint.call(this);

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
this.__pn(J);
B-=G;
if(C&&C.getVisibility()!=w){C.setVisibility(w);
B+=I;
var E=C.getMarginLeft()+C.getMarginRight();
B+=Math.max(E,this.getSpacing());
}}while(B>A);
}else if(this.__pk.length>0){do{var M=this.__pk[0];
if(M){var L=M.getMarginLeft()+M.getMarginRight();
L=Math.max(L,this.getSpacing());
if(M.getDecoratorElement()==null){M.syncAppearance();
M.invalidateLayoutCache();
}var F=M.getSizeHint().width;
var K=false;
if(this.__pk.length==1&&I>0){var D=L-this.getSpacing();
var H=B-I+F+D;
K=A>H;
}if(A>B+F+L||K){this.__pm(M);
B+=F;
if(C&&this.__pk.length==0){C.setVisibility(v);
}}else{return;
}}}while(A>=B&&this.__pk.length>0);
}},__pm:function(N){N.setVisibility(w);
this.__pk.shift();
this.fireDataEvent(p,N);
},__pn:function(O){if(!O){return;
}this.__pk.unshift(O);
O.setVisibility(v);
this.fireDataEvent(j,O);
},_getNextToHide:function(){for(var i=this.__pl.length-1;i>=0;i--){var P=this.__pl[i];
if(P&&P.getVisibility&&P.getVisibility()==w){return P;
}}var Q=this._getChildren();

for(var i=Q.length-1;i>=0;i--){var R=Q[i];
if(R==this.getOverflowIndicator()){continue;
}if(R.getVisibility&&R.getVisibility()==w){return R;
}}},setRemovePriority:function(S,T,U){if(!U&&this.__pl[T]!=undefined){throw new Error("Priority already in use!");
}this.__pl[T]=S;
},_applyOverflowHandling:function(V,W){this.invalidateLayoutCache();
var parent=this.getLayoutParent();

if(parent){parent.invalidateLayoutCache();
}var Y=this.getBounds();

if(Y&&Y.width){this._recalculateOverflow(Y.width);
}if(V){this.addListener(u,this._onResize,this);
}else{this.removeListener(u,this._onResize,this);
var X=this.getOverflowIndicator();

if(X){X.setVisibility(v);
}for(var i=0;i<this.__pk.length;i++){this.__pk[i].setVisibility(w);
}this.__pk=[];
}},_applyOverflowIndicator:function(ba,bb){if(bb){this._remove(bb);
}
if(ba){if(this._indexOf(ba)==-1){throw new Error("Widget must be child of the toolbar.");
}ba.setVisibility(v);
}},__po:false,_setAllowMenuOpenHover:function(bc){this.__po=bc;
},_isAllowMenuOpenHover:function(){return this.__po;
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
s.addListener(b,this.__pp,this);
this._add(s);
break;
}return s||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,q);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(t,u){var v=this.getChildControl(m).getLayout();
t==null?v.resetSpacing():v.setSpacing(t);
},__pp:function(){var w=this.getChildrenContainer().getChildren();

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
this.__jP=new qx.ui.core.Blocker(this);
},members:{__oN:null,__jP:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
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
}},getBlocker:function(){return this.__jP;
},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}},destruct:function(){this.__jP.dispose();
}});
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
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__pq:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
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
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="0",d="engine.name",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",A="PositiveNumber",z="engine.version",y="Integer",x="__nr",w="mousemove",v="_applyMaximum",u="_applyOrientation",t="appear",s="opera",r="PositiveInteger",p="mshtml",q="mouseup",n="Number",o="_applyPosition",l="scrollbar",m="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(B){qx.ui.core.Widget.call(this);
this.addState(m);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(q,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);

if((qx.core.Environment.get(d)==s)&&parseFloat(qx.core.Environment.get(z))<11.5){this.addListener(t,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(B!=null){this.setOrientation(B);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:l},orientation:{check:[k,h],init:k,apply:u},maximum:{check:r,apply:v,init:100},position:{check:n,init:0,apply:o,event:i},singleStep:{check:y,init:20},knobFactor:{check:A,nullable:true}},members:{__nq:null,__nr:null,_getScrollPaneElement:function(){if(!this.__nr){this.__nr=new qx.html.Element();
}return this.__nr;
},renderLayout:function(C,top,D,E){var F=qx.ui.core.Widget.prototype.renderLayout.call(this,C,top,D,E);
this._updateScrollBar();
return F;
},_getContentHint:function(){var G=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__nq?100:G,maxWidth:this.__nq?null:G,minWidth:this.__nq?null:G,height:this.__nq?G:100,maxHeight:this.__nq?G:null,minHeight:this.__nq?G:null};
},_applyEnabled:function(H,I){qx.ui.core.Widget.prototype._applyEnabled.call(this,H,I);
this._updateScrollBar();
},_applyMaximum:function(J){this._updateScrollBar();
},_applyPosition:function(K){var content=this.getContentElement();

if(this.__nq){content.scrollToX(K);
}else{content.scrollToY(K);
}},_applyOrientation:function(L,M){var N=this.__nq=L===k;
this.set({allowGrowX:N,allowShrinkX:N,allowGrowY:!N,allowShrinkY:!N});

if(N){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:N?i:c,overflowY:N?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var P=this.__nq;
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
var W=this.__nq?X.getScrollX():X.getScrollY();
this.setPosition(W);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(x);
}});
})();
(function(){var k="slider",j="horizontal",i="button-begin",h="vertical",g="button-end",f="Integer",d="execute",c="right",b="left",a="down",z="up",y="PositiveNumber",x="changeValue",w="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",v="_applyKnobFactor",u="knob",t="qx.ui.core.scroll.ScrollBar",s="resize",r="_applyOrientation",q="_applyPageStep",o="PositiveInteger",p="scroll",m="_applyPosition",n="scrollbar",l="_applyMaximum";
qx.Class.define(t,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this._createChildControl(i);
this._createChildControl(k).addListener(s,this._onResizeSlider,this);
this._createChildControl(g);
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[j,h],init:j,apply:r},maximum:{check:o,apply:l,init:100},position:{check:w,init:0,apply:m,event:p},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:q},knobFactor:{check:y,apply:v,nullable:true}},members:{__zF:2,_createChildControlImpl:function(B,C){var D;

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

if(this.getOrientation()==h){if(R.height<S.minHeight+this.__zF){Q=true;
}}else{if(R.width<S.minWidth+this.__zF){Q=true;
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
}},events:{changeValue:O},properties:{appearance:{refine:true,init:T},focusable:{refine:true,init:true},orientation:{check:[j,i],init:j,apply:K},value:{check:w,init:0,apply:m,nullable:true},minimum:{check:h,init:0,apply:M,event:t},maximum:{check:h,init:100,apply:F,event:J},singleStep:{check:h,init:1},pageStep:{check:h,init:10},knobFactor:{check:H,apply:u,nullable:true}},members:{__zG:null,__zH:null,__zI:null,__zJ:null,__zK:null,__zL:null,__zM:null,__zN:null,__iY:null,__zO:null,__zP:null,__zQ:null,_forwardStates:{invalid:true},_createChildControlImpl:function(ba,bb){var bc;

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
},_onMouseDown:function(e){if(this.__zJ){return;
}var bk=this.__nq;
var bi=this.getChildControl(k);
var bj=bk?f:d;
var bm=bk?e.getDocumentLeft():e.getDocumentTop();
var bn=this.__zG=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bj];
var bl=this.__zH=qx.bom.element.Location.get(bi.getContainerElement().getDomElement())[bj];

if(e.getTarget()===bi){this.__zJ=true;

if(!this.__zO){this.__zO=new qx.event.Timer(100);
this.__zO.addListener(W,this._fireValue,this);
}this.__zO.start();
this.__zK=bm+bn-bl;
bi.addState(b);
}else{this.__zL=true;
this.__zM=bm<=bl?-1:1;
this.__zS(e);
this._onInterval();
if(!this.__iY){this.__iY=new qx.event.Timer(100);
this.__iY.addListener(W,this._onInterval,this);
}this.__iY.start();
}this.addListener(V,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__zJ){this.releaseCapture();
delete this.__zJ;
this.__zO.stop();
this._fireValue();
delete this.__zK;
this.getChildControl(k).removeState(b);
if(e.getType()===c){var bp;
var bq;
var bo;

if(this.__nq){bp=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__zG);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[d];
bq=e.getDocumentTop()-(bo+this.getChildControl(k).getBounds().top);
}else{bp=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__zG);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[f];
bq=e.getDocumentLeft()-(bo+this.getChildControl(k).getBounds().left);
}
if(bq<0||bq>this.__zI||bp<0||bp>this.__zI){this.getChildControl(k).removeState(g);
}}}else if(this.__zL){this.__iY.stop();
this.releaseCapture();
delete this.__zL;
delete this.__zM;
delete this.__zN;
}this.removeListener(V,this._onMouseMove);
if(e.getType()===c){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__zJ){var bs=this.__nq?e.getDocumentLeft():e.getDocumentTop();
var br=bs-this.__zK;
this.slideTo(this._positionToValue(br));
}else if(this.__zL){this.__zS(e);
}e.stopPropagation();
},_onInterval:function(e){var bt=this.getValue()+(this.__zM*this.getPageStep());
if(bt<this.getMinimum()){bt=this.getMinimum();
}else if(bt>this.getMaximum()){bt=this.getMaximum();
}var bu=this.__zM==-1;

if((bu&&bt<=this.__zN)||(!bu&&bt>=this.__zN)){bt=this.__zN;
}this.slideTo(bt);
},_onUpdate:function(e){var bw=this.getInnerSize();
var bx=this.getChildControl(k).getBounds();
var bv=this.__nq?E:C;
this._updateKnobSize();
this.__zR=bw[bv]-bx[bv];
this.__zI=bx[bv];
this._updateKnobPosition();
},__nq:false,__zR:0,__zS:function(e){var by=this.__nq;
var bF=by?e.getDocumentLeft():e.getDocumentTop();
var bH=this.__zG;
var bz=this.__zH;
var bJ=this.__zI;
var bG=bF-bH;

if(bF>=bz){bG-=bJ;
}var bD=this._positionToValue(bG);
var bA=this.getMinimum();
var bB=this.getMaximum();

if(bD<bA){bD=bA;
}else if(bD>bB){bD=bB;
}else{var bE=this.getValue();
var bC=this.getPageStep();
var bI=this.__zM<0?N:z;
bD=bE+(Math[bI]((bD-bE)/bC)*bC);
}if(this.__zN==null||(this.__zM==-1&&bD<=this.__zN)||(this.__zM==1&&bD>=this.__zN)){this.__zN=bD;
}},_positionToValue:function(bK){var bL=this.__zR;
if(bL==null||bL==0){return 0;
}var bN=bK/bL;

if(bN<0){bN=0;
}else if(bN>1){bN=1;
}var bM=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bM*bN);
},_valueToPosition:function(bO){var bP=this.__zR;

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

if(this.__nq){bT.setStyle(f,bS+a,true);
}else{bT.setStyle(d,bS+a,true);
}},_updateKnobSize:function(){var bV=this.getKnobFactor();

if(bV==null){return;
}var bU=this.getInnerSize();

if(bU==null){return;
}if(this.__nq){this.getChildControl(k).setWidth(Math.round(bV*bU.width));
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
this.__nq=bY===j;
if(this.__nq){this.removeState(i);
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
}else{if(this.__nq){this.getChildControl(k).resetWidth();
}else{this.getChildControl(k).resetHeight();
}}},_applyValue:function(ce,cf){if(ce!=null){this._updateKnobPosition();

if(this.__zJ){this.__zQ=[ce,cf];
}else{this.fireEvent(X,qx.event.type.Data,[ce,cf]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__zQ){return;
}var cg=this.__zQ;
this.__zQ=null;
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
(function(){var o="Boolean",n="resize-line",m="mousedown",l="qx.event.type.Data",k="mouseup",j="qx.ui.table.pane.CellEvent",i="scroll",h="focus-indicator",g="excluded",d="scrollbar-y",bq="table-scroller-focus-indicator",bp="visible",bo="mousemove",bn="header",bm="editing",bl="click",bk="modelChanged",bj="scrollbar-x",bi="cellClick",bh="pane",v="__pH",w="__pJ",t="mouseout",u="changeHorizontalScrollBarVisible",r="bottom",s="_applyScrollTimeout",p="changeScrollX",q="_applyTablePaneModel",C="Integer",D="dblclick",M="__pM",J="dataEdited",U="mousewheel",P="interval",bd="qx.ui.table.pane.Scroller",ba="__pL",F="_applyShowCellFocusIndicator",bg="__pN",bf="y",be="resize",E="__pI",H="vertical",I="__pO",L="__pG",N="__pK",Q="changeScrollY",W="appear",bc="table-scroller",y="beforeSort",z="cellDblclick",G="horizontal",T="losecapture",S="contextmenu",R="col-resize",Y="disappear",X="_applyVerticalScrollBarVisible",O="_applyHorizontalScrollBarVisible",V="os.scrollBarOverlayed",a="cellContextmenu",bb="__iY",A="close",B="changeTablePaneModel",K="x",b="qx.ui.table.pane.Model",c="changeVerticalScrollBarVisible";
qx.Class.define(bd,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(br){qx.ui.core.Widget.call(this);
this.__nB=br;
var bs=new qx.ui.layout.Grid();
bs.setColumnFlex(0,1);
bs.setRowFlex(1,1);
this._setLayout(bs);
this.__pG=this._showChildControl(bn);
this.__pH=this._showChildControl(bh);
this.__pI=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__pI,{row:0,column:0,colSpan:2});
this.__pJ=new qx.ui.table.pane.Clipper();
this.__pJ.add(this.__pG);
this.__pJ.addListener(T,this._onChangeCaptureHeader,this);
this.__pJ.addListener(bo,this._onMousemoveHeader,this);
this.__pJ.addListener(m,this._onMousedownHeader,this);
this.__pJ.addListener(k,this._onMouseupHeader,this);
this.__pJ.addListener(bl,this._onClickHeader,this);
this.__pI.add(this.__pJ,{flex:1});
this.__pK=new qx.ui.table.pane.Clipper();
this.__pK.add(this.__pH);
this.__pK.addListener(U,this._onMousewheel,this);
this.__pK.addListener(bo,this._onMousemovePane,this);
this.__pK.addListener(m,this._onMousedownPane,this);
this.__pK.addListener(k,this._onMouseupPane,this);
this.__pK.addListener(bl,this._onClickPane,this);
this.__pK.addListener(S,this._onContextMenu,this);
this.__pK.addListener(D,this._onDblclickPane,this);
this.__pK.addListener(be,this._onResizePane,this);
if(qx.core.Environment.get(V)){this.__pL=new qx.ui.container.Composite();
this.__pL.setLayout(new qx.ui.layout.Canvas());
this.__pL.add(this.__pK,{edge:0});
this._add(this.__pL,{row:1,column:0});
}else{this._add(this.__pK,{row:1,column:0});
}this.__pM=this._showChildControl(bj);
this.__pN=this._showChildControl(d);
this.__pO=this.getChildControl(h);
this.initShowCellFocusIndicator();
this.getChildControl(n).hide();
this.addListener(t,this._onMouseout,this);
this.addListener(W,this._onAppear,this);
this.addListener(Y,this._onDisappear,this);
this.__iY=new qx.event.Timer();
this.__iY.addListener(P,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":l,"changeScrollX":l,"cellClick":j,"cellDblclick":j,"cellContextmenu":j,"beforeSort":l},properties:{horizontalScrollBarVisible:{check:o,init:false,apply:O,event:u},verticalScrollBarVisible:{check:o,init:false,apply:X,event:c},tablePaneModel:{check:b,apply:q,event:B},liveResize:{check:o,init:false},focusCellOnMouseMove:{check:o,init:false},selectBeforeFocus:{check:o,init:false},showCellFocusIndicator:{check:o,init:true,apply:F},contextMenuFromDataCellsOnly:{check:o,init:true},resetSelectionOnHeaderClick:{check:o,init:true},scrollTimeout:{check:C,init:100,apply:s},appearance:{refine:true,init:bc}},members:{__oM:null,__nB:null,__pP:null,__pQ:null,__pR:null,__pS:null,__pT:null,__pU:null,__pV:null,__pW:null,__pX:null,__pY:null,__qa:null,__qb:null,__qc:false,__qd:null,__qe:null,__qf:null,__oI:null,__oJ:null,__qg:null,__qh:null,__qi:null,__pM:null,__pN:null,__pG:null,__pJ:null,__pH:null,__pK:null,__pL:null,__pO:null,__pI:null,__iY:null,getPaneInsetRight:function(){var bv=this.getTopRightWidget();
var bw=bv&&bv.isVisible()&&bv.getBounds()?bv.getBounds().width+bv.getMarginLeft()+bv.getMarginRight():0;
var bu=this.__pN;
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
this.__pK.add(bA);
bA.show();
bA.setDecorator(null);
break;
case n:bA=new qx.ui.core.Widget();
bA.setUserBounds(0,0,0,0);
bA.setZIndex(1000);
this.__pK.add(bA);
break;
case bj:bA=this._createScrollBar(G).set({minWidth:0,alignY:r});
bA.addListener(i,this._onScrollX,this);

if(this.__pL!=null){bA.setMinHeight(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);
this.__pL.add(bA,{bottom:0,right:0,left:0});
}else{this._add(bA,{row:2,column:0});
}break;
case d:bA=this._createScrollBar(H);
bA.addListener(i,this._onScrollY,this);

if(this.__pL!=null){bA.setMinWidth(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);
this.__pL.add(bA,{right:0,bottom:0,top:0});
}else{this._add(bA,{row:1,column:1});
}break;
}return bA||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,by);
},_applyHorizontalScrollBarVisible:function(bB,bC){this.__pM.setVisibility(bB?bp:g);
},_applyVerticalScrollBarVisible:function(bD,bE){this.__pN.setVisibility(bD?bp:g);
},_applyTablePaneModel:function(bF,bG){if(bG!=null){bG.removeListener(bk,this._onPaneModelChanged,this);
}bF.addListener(bk,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(bH,bI){if(bH){this.__pO.setDecorator(bq);
this._updateFocusIndicator();
}else{if(this.__pO){this.__pO.setDecorator(null);
}}},getScrollY:function(){return this.__pN.getPosition();
},setScrollY:function(scrollY,bJ){this.__pN.scrollTo(scrollY);

if(bJ){this._updateContent();
}},getScrollX:function(){return this.__pM.getPosition();
},setScrollX:function(scrollX){this.__pM.scrollTo(scrollX);
},getTable:function(){return this.__nB;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bK,bL){this.__pG.setColumnWidth(bK,bL);
this.__pH.setColumnWidth(bK,bL);
var bM=this.getTablePaneModel();
var x=bM.getX(bK);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__pG.onColOrderChanged();
this.__pH.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bN,bO,bP,bQ){this.__pH.onTableModelDataChanged(bN,bO,bP,bQ);
var bR=this.getTable().getTableModel().getRowCount();

if(bR!=this.__oM){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bR){if(bR==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bR-1);
}}this.__oM=bR;
}},onSelectionChanged:function(){this.__pH.onSelectionChanged();
},onFocusChanged:function(){this.__pH.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__pG.onTableModelMetaDataChanged();
this.__pH.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__pG.onPaneModelChanged();
this.__pH.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__pG._updateContent();
this.__nB._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bV=this.__pK.getInnerSize();

if(!bV){return ;
}var bT=this.getTablePaneModel().getTotalWidth();
var bU=this.__pM;

if(bV.width<bT){var bS=Math.max(0,bT-bV.width);
bU.setMaximum(bS);
bU.setKnobFactor(bV.width/bT);
var bW=bU.getPosition();
bU.setPosition(Math.min(bW,bS));
}else{bU.setMaximum(0);
bU.setKnobFactor(1);
bU.setPosition(0);
}},updateVerScrollBarMaximum:function(){var cf=this.__pK.getInnerSize();

if(!cf){return ;
}var cd=this.getTable().getTableModel();
var bY=cd.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){bY+=1;
}var bX=this.getTable().getRowHeight();
var cb=bY*bX;
var ce=this.__pN;

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
this.fireDataEvent(p,cg,e.getOldData());
this.__pJ.scrollToX(cg);
this.__pK.scrollToX(cg);
},_onScrollY:function(e){this.fireDataEvent(Q,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var ch=this.getTable();

if(!ch.getEnabled()){return;
}var ck=e.getWheelDelta(bf);
if(ck>0&&ck<1){ck=1;
}else if(ck<0&&ck>-1){ck=-1;
}this.__pN.scrollBySteps(ck);
ck=e.getWheelDelta(K);
if(ck>0&&ck<1){ck=1;
}else if(ck<0&&ck>-1){ck=-1;
}this.__pM.scrollBySteps(ck);
if(this.__qe&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__qe,this.__qf);
}var cj=this.__pN.getPosition();
var ci=this.__pN.getMaximum();
if(ck<0&&cj<=0||ck>0&&cj>=ci){return;
}e.stop();
},__qj:function(cl){var cq=this.getTable();
var cr=this.__pG.getHeaderWidgetAtColumn(this.__pX);
var cm=cr.getSizeHint().minWidth;
var co=Math.max(cm,this.__qa+cl-this.__pY);

if(this.getLiveResize()){var cn=cq.getTableColumnModel();
cn.setColumnWidth(this.__pX,co,true);
}else{this.__pG.setColumnWidth(this.__pX,co,true);
var cp=this.getTablePaneModel();
this._showResizeLine(cp.getColumnLeft(this.__pX)+co);
}this.__pY+=co-this.__qa;
this.__qa=co;
},__qk:function(cs){var ct=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__pG.isShowingColumnMoveFeedback()||cs>this.__pW+ct||cs<this.__pW-ct){this.__pT+=cs-this.__pW;
this.__pG.showColumnMoveFeedback(this.__pS,this.__pT);
var cu=this.__nB.getTablePaneScrollerAtPageX(cs);

if(this.__pV&&this.__pV!=cu){this.__pV.hideColumnMoveFeedback();
}
if(cu!=null){this.__pU=cu.showColumnMoveFeedback(cs);
}else{this.__pU=null;
}this.__pV=cu;
this.__pW=cs;
}},_onMousemoveHeader:function(e){var cB=this.getTable();

if(!cB.getEnabled()){return;
}var cC=false;
var cv=null;
var cz=e.getDocumentLeft();
var cA=e.getDocumentTop();
this.__qe=cz;
this.__qf=cA;

if(this.__pX!=null){this.__qj(cz);
cC=true;
e.stopPropagation();
}else if(this.__pS!=null){this.__qk(cz);
e.stopPropagation();
}else{var cw=this._getResizeColumnForPageX(cz);

if(cw!=-1){cC=true;
}else{var cy=cB.getTableModel();
var cD=this._getColumnForPageX(cz);

if(cD!=null&&cy.isColumnSortable(cD)){cv=cD;
}}}var cx=cC?R:null;
this.getApplicationRoot().setGlobalCursor(cx);
this.setCursor(cx);
this.__pG.setMouseOverColumn(cv);
},_onMousemovePane:function(e){var cE=this.getTable();

if(!cE.getEnabled()){return;
}var cG=e.getDocumentLeft();
var cH=e.getDocumentTop();
this.__qe=cG;
this.__qf=cH;
var cF=this._getRowForPagePos(cG,cH);

if(cF!=null&&this._getColumnForPageX(cG)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cG,cH);
}}this.__pG.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var cJ=e.getDocumentLeft();
var cK=this._getResizeColumnForPageX(cJ);

if(cK!=-1){this._startResizeHeader(cK,cJ);
e.stop();
}else{var cI=this._getColumnForPageX(cJ);

if(cI!=null){this._startMoveHeader(cI,cJ);
e.stop();
}}},_startResizeHeader:function(cL,cM){var cN=this.getTable().getTableColumnModel();
this.__pX=cL;
this.__pY=cM;
this.__qa=cN.getColumnWidth(this.__pX);
this.__pJ.capture();
},_startMoveHeader:function(cO,cP){this.__pS=cO;
this.__pW=cP;
this.__pT=this.getTablePaneModel().getColumnLeft(cO);
this.__pJ.capture();
},_onMousedownPane:function(e){var cT=this.getTable();

if(!cT.getEnabled()){return;
}
if(cT.isEditing()){cT.stopEditing();
}var cQ=e.getDocumentLeft();
var cS=e.getDocumentTop();
var cV=this._getRowForPagePos(cQ,cS);
var cU=this._getColumnForPageX(cQ);

if(cV!==null){this.__qb={row:cV,col:cU};
this.__qc=false;
var cR=this.getSelectBeforeFocus();

if(cR){cT.getSelectionManager().handleMouseDown(cV,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cQ,cS);
}
if(!cR){cT.getSelectionManager().handleMouseDown(cV,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__qb&&!this.__qc&&!this.isEditing()&&this.__pO.getRow()==this.__qb.row&&this.__pO.getColumn()==this.__qb.col){this.fireEvent(bi,qx.ui.table.pane.CellEvent,[this,e,this.__qb.row,this.__qb.col],true);
this.__qc=true;
}else if(!this.isEditing()){this._onMousedownPane(e);
}},_onChangeCaptureHeader:function(e){if(this.__pX!=null){this._stopResizeHeader();
}
if(this.__pS!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var cW=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
cW.setColumnWidth(this.__pX,this.__qa,true);
}this.__pX=null;
this.__pJ.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var cX=this.__qg.getBounds().height;
this.__qg.setUserBounds(0,0,this.__qa,cX);
}},_stopMoveHeader:function(){var dd=this.getTable().getTableColumnModel();
var de=this.getTablePaneModel();
this.__pG.hideColumnMoveFeedback();

if(this.__pV){this.__pV.hideColumnMoveFeedback();
}
if(this.__pU!=null){var dg=de.getFirstColumnX()+de.getX(this.__pS);
var dc=this.__pU;

if(dc!=dg&&dc!=dg+1){var df=dd.getVisibleColumnAtX(dg);
var db=dd.getVisibleColumnAtX(dc);
var da=dd.getOverallX(df);
var cY=(db!=null)?dd.getOverallX(db):dd.getOverallColumnCount();

if(cY>da){cY--;
}dd.moveColumn(da,cY);
this._updateFocusIndicator();
}}this.__pS=null;
this.__pU=null;
this.__pJ.releaseCapture();
},_onMouseupPane:function(e){var dh=this.getTable();

if(!dh.getEnabled()){return;
}var di=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(di!=-1&&di!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){dh.getSelectionManager().handleMouseUp(di,e);
}},_onMouseupHeader:function(e){var dj=this.getTable();

if(!dj.getEnabled()){return;
}
if(this.__pX!=null){this._stopResizeHeader();
this.__qd=true;
e.stop();
}else if(this.__pS!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__qd){this.__qd=false;
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

if(this.__pO.isHidden()||(this.__qb&&!this.__qc&&!this.isEditing()&&du==this.__qb.row&&dv==this.__qb.col)){this.fireEvent(bi,qx.ui.table.pane.CellEvent,[this,e,du,dv],true);
this.__qc=true;
}}},_onContextMenu:function(e){var dB=e.getDocumentLeft();
var dC=e.getDocumentTop();
var dz=this._getRowForPagePos(dB,dC);
var dA=this._getColumnForPageX(dB);
if(dz===null&&this.getContextMenuFromDataCellsOnly()){return;
}
if(!this.getShowCellFocusIndicator()||dz===null||(this.__qb&&dz==this.__qb.row&&dA==this.__qb.col)){this.fireEvent(a,qx.ui.table.pane.CellEvent,[this,e,dz,dA],true);
var dy=this.getTable().getContextMenu();

if(dy){if(dy.getChildren().length>0){dy.openAtMouse(e);
}else{dy.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var dE=e.getDocumentLeft();
var dF=e.getDocumentTop();
this._focusCellAtPagePos(dE,dF);
this.startEditing();
var dD=this._getRowForPagePos(dE,dF);

if(dD!=-1&&dD!=null){this.fireEvent(z,qx.ui.table.pane.CellEvent,[this,e,dD],true);
}},_onMouseout:function(e){var dG=this.getTable();

if(!dG.getEnabled()){return;
}if(this.__pX==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__pG.setMouseOverColumn(null);
if(this.getFocusCellOnMouseMove()){this.__nB.setFocusedCell();
}},_showResizeLine:function(x){var dI=this._showChildControl(n);
var dH=dI.getWidth();
var dJ=this.__pK.getBounds();
dI.setUserBounds(x-Math.round(dH/2),0,dH,dJ.height);
},_hideResizeLine:function(){this._excludeChildControl(n);
},showColumnMoveFeedback:function(dK){var dT=this.getTablePaneModel();
var dS=this.getTable().getTableColumnModel();
var dN=this.__pH.getContainerLocation().left;
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
}var dQ=this.__pK.getContainerLocation().left;
var dV=this.__pK.getBounds().width;
var scrollX=dQ-dN;
dM=qx.lang.Number.limit(dM,scrollX+2,scrollX+dV-1);
this._showResizeLine(dM);
return dT.getFirstColumnX()+dO;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dX,dY){var eb=this._getRowForPagePos(dX,dY);

if(eb!=-1&&eb!=null){var ea=this._getColumnForPageX(dX);
this.__nB.setFocusedCell(ea,eb);
}},setFocusedCell:function(ec,ed){if(!this.isEditing()){this.__pH.setFocusedCell(ec,ed,this.__pQ);
this.__oI=ec;
this.__oJ=ed;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__oI;
},getFocusedRow:function(){return this.__oJ;
},scrollCellVisible:function(ee,ef){var ep=this.getTablePaneModel();
var eg=ep.getX(ee);

if(eg!=-1){var em=this.__pK.getInnerSize();

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
}},isEditing:function(){return this.__qg!=null;
},startEditing:function(){var ew=this.getTable();
var eu=ew.getTableModel();
var ey=this.__oI;

if(!this.isEditing()&&(ey!=null)&&eu.isColumnEditable(ey)){var ez=this.__oJ;
var es=this.getTablePaneModel().getX(ey);
var et=eu.getValue(ey,ez);
this.scrollCellVisible(es,ez);
this.__qh=ew.getTableColumnModel().getCellEditorFactory(ey);
var ev={col:ey,row:ez,xPos:es,value:et,table:ew};
this.__qg=this.__qh.createCellEditor(ev);
if(this.__qg===null){return false;
}else if(this.__qg instanceof qx.ui.window.Window){this.__qg.setModal(true);
this.__qg.setShowClose(false);
this.__qg.addListener(A,this._onCellEditorModalWindowClose,this);
var f=ew.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__qg,ev);
}this.__qg.open();
}else{var ex=this.__pO.getInnerSize();
this.__qg.setUserBounds(0,0,ex.width,ex.height);
this.__pO.addListener(m,function(e){this.__qb={row:this.__oJ,col:this.__oI};
e.stopPropagation();
},this);
this.__pO.add(this.__qg);
this.__pO.addState(bm);
this.__pO.setKeepActive(false);
this.__pO.setDecorator(bq);
this.__qg.focus();
this.__qg.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__pO.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var eB=this.__qh.getCellEditorValue(this.__qg);
var eA=this.getTable().getTableModel().getValue(this.__oI,this.__oJ);
this.getTable().getTableModel().setValue(this.__oI,this.__oJ,eB);
this.__nB.focus();
this.__nB.fireDataEvent(J,{row:this.__oJ,col:this.__oI,oldValue:eA,value:eB});
}},cancelEditing:function(){if(this.isEditing()&&!this.__qg.pendingDispose){if(this._cellEditorIsModalWindow){this.__qg.destroy();
this.__qg=null;
this.__qh=null;
this.__qg.pendingDispose=true;
}else{this.__pO.removeState(bm);
this.__pO.setKeepActive(true);
this.__qg.destroy();
this.__qg=null;
this.__qh=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(eC){var eF=this.getTable().getTableColumnModel();
var eG=this.getTablePaneModel();
var eE=eG.getColumnCount();
var eI=this.__pH.getContentLocation().left;

for(var x=0;x<eE;x++){var eD=eG.getColumnAtX(x);
var eH=eF.getColumnWidth(eD);
eI+=eH;

if(eC<eI){return eD;
}}return null;
},_getResizeColumnForPageX:function(eJ){var eN=this.getTable().getTableColumnModel();
var eO=this.getTablePaneModel();
var eM=eO.getColumnCount();
var eQ=this.__pG.getContainerLocation().left;
var eK=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<eM;x++){var eL=eO.getColumnAtX(x);
var eP=eN.getColumnWidth(eL);
eQ+=eP;

if(eJ>=(eQ-eK)&&eJ<=(eQ+eK)){return eL;
}}return -1;
},_getRowForPagePos:function(eR,eS){var eT=this.__pH.getContentLocation();

if(eR<eT.left||eR>eT.right){return null;
}
if(eS>=eT.top&&eS<=eT.bottom){var eU=this.getTable().getRowHeight();
var scrollY=this.__pN.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eU)*eU;
}var eX=scrollY+eS-eT.top;
var fa=Math.floor(eX/eU);
var eY=this.getTable().getTableModel();
var eV=eY.getRowCount();
return (fa<eV)?fa:null;
}var eW=this.__pG.getContainerLocation();

if(eS>=eW.top&&eS<=eW.bottom&&eR<=eW.right){return -1;
}return null;
},setTopRightWidget:function(fb){var fc=this.__qi;

if(fc!=null){this.__pI.remove(fc);
}
if(fb!=null){this.__pI.add(fb);
}this.__qi=fb;
},getTopRightWidget:function(){return this.__qi;
},getHeader:function(){return this.__pG;
},getTablePane:function(){return this.__pH;
},getVerticalScrollBarWidth:function(){var fd=this.__pN;
return fd.isVisible()?(fd.getSizeHint().width||0):0;
},getNeededScrollBars:function(fe,ff){var fo=this.__pN;
var fs=fo.getSizeHint().width+fo.getMarginLeft()+fo.getMarginRight();
var fu=this.__pM;
var ft=fu.getSizeHint().height+fu.getMarginTop()+fu.getMarginBottom();
var fm=this.__pK.getInnerSize();
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
},getPaneClipper:function(){return this.__pK;
},_applyScrollTimeout:function(fv,fw){this._startInterval(fv);
},_startInterval:function(fx){this.__iY.setInterval(fx);
this.__iY.start();
},_stopInterval:function(){this.__iY.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__pQ&&!this.__pH._layoutPending){this.__pQ=false;
this._updateContent();
}}),_updateContent:function(){var fC=this.__pK.getInnerSize();

if(!fC){return;
}var fF=fC.height;
var scrollX=this.__pM.getPosition();
var scrollY=this.__pN.getPosition();
var fz=this.getTable().getRowHeight();
var fA=Math.floor(scrollY/fz);
var fE=this.__pH.getFirstVisibleRow();
this.__pH.setFirstVisibleRow(fA);
var fB=Math.ceil(fF/fz);
var fy=0;
var fD=this.getTable().getKeepFirstVisibleRowComplete();

if(!fD){fB++;
fy=scrollY%fz;
}this.__pH.setVisibleRowCount(fB);

if(fA!=fE){this._updateFocusIndicator();
}this.__pK.scrollToX(scrollX);
if(!fD){this.__pK.scrollToY(fy);
}},_updateFocusIndicator:function(){var fG=this.getTable();

if(!fG.getEnabled()){return;
}this.__pO.moveToCell(this.__oI,this.__oJ);
}},destruct:function(){this._stopInterval();
var fH=this.getTablePaneModel();

if(fH){fH.dispose();
}this.__qb=this.__qi=this.__nB=null;
this._disposeObjects(M,bg,w,N,I,L,v,E,bb,ba);
}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(b){this.getContentElement().scrollToX(b,false);
},scrollToY:function(c){this.getContentElement().scrollToY(c,true);
}}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(h){qx.ui.container.Composite.call(this);
this.__ql=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__ql:null,_onKeyPress:function(e){var i=e.getKeyIdentifier();

if(i!==f&&i!==c){e.stopPropagation();
}},moveToCell:function(j,k){if(!this.__ql.getShowCellFocusIndicator()&&!this.__ql.getTable().getTableModel().isColumnEditable(j)){this.exclude();
return;
}else{this.show();
}
if(j==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var l=this.__ql.getTablePaneModel().getX(j);

if(l==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var q=this.__ql.getTable();
var o=q.getTableColumnModel();
var p=this.__ql.getTablePaneModel();
var n=this.__ql.getTablePane().getFirstVisibleRow();
var m=q.getRowHeight();
this.setUserBounds(p.getColumnLeft(j)-2,(k-n)*m-2,o.getColumnWidth(j)+3,m+3);
this.show();
this.setRow(k);
this.setColumn(j);
}}}},destruct:function(){this.__ql=null;
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
},events:{"modelChanged":e},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:c,init:0,apply:d},maxColumnCount:{check:f,init:-1,apply:a}},members:{__qV:null,__qW:null,_applyFirstColumnX:function(j,k){this.__qV=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(l,m){this.__qV=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){if(this.__qW){this.__qW.removeListener(g,this._onColVisibilityChanged,this);
this.__qW.removeListener(h,this._onColVisibilityChanged,this);
}this.__qW=n;
this.__qW.addListener(g,this._onColVisibilityChanged,this);
this.__qW.addListener(h,this._onHeaderCellRendererChanged,this);
this.__qV=null;
},_onColVisibilityChanged:function(o){this.__qV=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_onHeaderCellRendererChanged:function(p){this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__qV==null){var q=this.getFirstColumnX();
var s=this.getMaxColumnCount();
var r=this.__qW.getVisibleColumnCount();

if(s==-1||(q+s)>r){this.__qV=r-q;
}else{this.__qV=s;
}}return this.__qV;
},getColumnAtX:function(t){var u=this.getFirstColumnX();
return this.__qW.getVisibleColumnAtX(u+t);
},getX:function(v){var w=this.getFirstColumnX();
var y=this.getMaxColumnCount();
var x=this.__qW.getVisibleX(v)-w;

if(x>=0&&(y==-1||x<y)){return x;
}else{return -1;
}},getColumnLeft:function(z){var C=0;
var B=this.getColumnCount();

for(var x=0;x<B;x++){var A=this.getColumnAtX(x);

if(A==z){return C;
}C+=this.__qW.getColumnWidth(A);
}return -1;
},getTotalWidth:function(){var D=0;
var E=this.getColumnCount();

for(var x=0;x<E;x++){var F=this.getColumnAtX(x);
D+=this.__qW.getColumnWidth(F);
}return D;
}},destruct:function(){if(this.__qW){this.__qW.removeListener(g,this._onColVisibilityChanged,this);
this.__qW.removeListener(h,this._onColVisibilityChanged,this);
}this.__qW=null;
}});
})();
(function(){var j="px",i="no-repeat",h="repeat",g="gecko",f="scale",e="string",d="static",c="'",b="qx.ui.table.cellrenderer.AbstractImage",a="}",A="  text-align:center;",z="scale-x",y="repeat-y",x=".qooxdoo-table-cell-icon {",w="",v="<div></div>",u="top",t="engine.version",s="engine.name",r="abstract",p=" qooxdoo-table-cell-icon",q="inline-block",n="repeat-x",o="  padding-top:1px;",l="title='",m="scale-y",k="-moz-inline-box";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.Abstract,type:r,construct:function(){qx.ui.table.cellrenderer.Abstract.call(this);
var B=this.self(arguments);

if(!B.stylesheet){B.stylesheet=qx.bom.Stylesheet.createElement(x+A+o+a);
}},properties:{repeat:{check:function(C){var D=[f,z,m,h,n,y,i];
return qx.lang.Array.contains(D,C);
},init:i}},members:{__qX:16,__qY:16,__ra:null,_insetY:2,_identifyImage:function(E){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(F){var G=this._identifyImage(F);
if(G==null||typeof G==e){G={url:G,tooltip:null};
}if(!G.imageWidth||!G.imageHeight){var H=this.__rb(G.url);
G.imageWidth=H.width;
G.imageHeight=H.height;
}G.width=G.imageWidth;
G.height=G.imageHeight;
return G;
},__rb:function(I){var L=qx.util.ResourceManager.getInstance();
var K=qx.io.ImageLoader;
var J,M;
if(L.has(I)){J=L.getImageWidth(I);
M=L.getImageHeight(I);
}else if(K.isLoaded(I)){J=K.getWidth(I);
M=K.getHeight(I);
}else{J=this.__qX;
M=this.__qY;
}return {width:J,height:M};
},createDataCellHtml:function(N,O){this.__ra=this._getImageInfos(N);
return qx.ui.table.cellrenderer.Abstract.prototype.createDataCellHtml.call(this,N,O);
},_getCellClass:function(P){return qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this)+p;
},_getContentHtml:function(Q){var content=v;
if(this.__ra.url){content=qx.bom.element.Decoration.create(this.__ra.url,this.getRepeat(),{width:this.__ra.width+j,height:this.__ra.height+j,display:qx.core.Environment.get(s)==g&&qx.core.Environment.get(t)<1.9?k:q,verticalAlign:u,position:d});
}return content;
},_getCellAttributes:function(R){var S=this.__ra.tooltip;

if(S){return l+S+c;
}else{return w;
}}},destruct:function(){this.__ra=null;
}});
})();
(function(){var g="String",f="_applyIconTrue",e="decoration/table/boolean-true.png",d="qx.ui.table.cellrenderer.Boolean",c=";padding-top:4px;",b="decoration/table/boolean-false.png",a="_applyIconFalse";
qx.Class.define(d,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){qx.ui.table.cellrenderer.AbstractImage.call(this);
this.__xW=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:g,init:e,apply:f},iconFalse:{check:g,init:b,apply:a}},members:{__xX:null,__xY:false,__xW:null,_applyIconTrue:function(h){this.__xX=this.__xW.resolve(h);
},_applyIconFalse:function(i){this.__xY=this.__xW.resolve(i);
},_insetY:5,_getCellStyle:function(j){return qx.ui.table.cellrenderer.AbstractImage.prototype._getCellStyle.call(this,j)+c;
},_identifyImage:function(k){var l={imageWidth:11,imageHeight:11};

switch(k.value){case true:l.url=this.__xX;
break;
case false:l.url=this.__xY;
break;
default:l.url=null;
break;
}return l;
}},destruct:function(){this.__xW=null;
}});
})();
(function(){var o="String",n="execute",m="qx.ui.menu.Menu",l="_shortcut",k="changeEnabled",j="changeToolTipText",i="Boolean",h="qx.ui.core.Command",g="changeLabel",f="changeMenu",c="changeIcon",e="changeValue",d="_applyShortcut",b="_applyEnabled",a="qx.event.type.Data";
qx.Class.define(h,{extend:qx.core.Object,construct:function(p){qx.core.Object.call(this);
this._shortcut=new qx.bom.Shortcut(p);
this._shortcut.addListener(n,this.execute,this);
},events:{"execute":a},properties:{enabled:{init:true,check:i,event:k,apply:b},shortcut:{check:o,apply:d,nullable:true},label:{check:o,nullable:true,event:g},icon:{check:o,nullable:true,event:c},toolTipText:{check:o,nullable:true,event:j},value:{nullable:true,event:e},menu:{check:m,nullable:true,event:f}},members:{_shortcut:null,_applyEnabled:function(q){this._shortcut.setEnabled(q);
},_applyShortcut:function(r){this._shortcut.setShortcut(r);
},execute:function(s){this.fireDataEvent(n,s);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(l);
this.removeListener(n,this.execute,this);
}});
})();
(function(){var m="Unidentified",l="Boolean",k="+",j="short",h="keydown",g="",f="Control",d="keypress",c="-",b="PageUp",S="Escape",R="qx.event.type.Data",Q="_applyShortcut",P="PrintScreen",O="NumLock",N="5",M="8",L="execute",K="Meta",J="0",t="2",u="Shift",r="You can only specify one non modifier key!",s="3",p="/",q="Delete",n="String",o="changeEnabled",v="*",w="qx.bom.Shortcut",B="6",A="4",D="1",C="Alt",F="Not a valid key name for a shortcut: ",E="PageDown",y="Whitespaces are not allowed within shortcuts",I="_applyEnabled",H="7",G="a",x="z",z="9";
qx.Class.define(w,{extend:qx.core.Object,construct:function(T){qx.core.Object.call(this);
this.__zn={};
this.__zo=null;

if(T!=null){this.setShortcut(T);
}this.initEnabled();
},events:{"execute":R},properties:{enabled:{init:true,check:l,event:o,apply:I},shortcut:{check:n,apply:Q,nullable:true},autoRepeat:{check:l,init:false}},members:{__zn:g,__zo:g,execute:function(U){this.fireDataEvent(L,U);
},__zp:function(event){if(this.getEnabled()&&this.__zq(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__gl:function(event){if(this.getEnabled()&&this.__zq(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(V,W){if(V){qx.event.Registration.addListener(document.documentElement,h,this.__zp,this);
qx.event.Registration.addListener(document.documentElement,d,this.__gl,this);
}else{qx.event.Registration.removeListener(document.documentElement,h,this.__zp,this);
qx.event.Registration.removeListener(document.documentElement,d,this.__gl,this);
}},_applyShortcut:function(X,Y){if(X){if(X.search(/[\s]+/)!=-1){var bc=y;
this.error(bc);
throw new Error(bc);
}this.__zn={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__zo=null;
var ba;
var a=[];

while(X.length>0&&ba!=-1){ba=X.search(/[-+]+/);
a.push((X.length==1||ba==-1)?X:X.substring(0,ba));
X=X.substring(ba+1);
}var bb=a.length;

for(var i=0;i<bb;i++){var bd=this.__zs(a[i]);

switch(bd){case f:case u:case K:case C:this.__zn[bd]=true;
break;
case m:var bc=F+a[i];
this.error(bc);
throw bc;
default:if(this.__zo){var bc=r;
this.error(bc);
throw bc;
}this.__zo=bd;
}}}return true;
},__zq:function(e){var be=this.__zo;

if(!be){return ;
}if((!this.__zn.Shift&&e.isShiftPressed())||(this.__zn.Shift&&!e.isShiftPressed())||(!this.__zn.Control&&e.isCtrlPressed())||(this.__zn.Control&&!e.isCtrlPressed())||(!this.__zn.Meta&&e.isMetaPressed())||(this.__zn.Meta&&!e.isMetaPressed())||(!this.__zn.Alt&&e.isAltPressed())||(this.__zn.Alt&&!e.isAltPressed())){return false;
}
if(be==e.getKeyIdentifier()){return true;
}return false;
},__zr:{esc:S,ctrl:f,print:P,del:q,pageup:b,pagedown:E,numlock:O,numpad_0:J,numpad_1:D,numpad_2:t,numpad_3:s,numpad_4:A,numpad_5:N,numpad_6:B,numpad_7:H,numpad_8:M,numpad_9:z,numpad_divide:p,numpad_multiply:v,numpad_minus:c,numpad_plus:k},__zs:function(bf){var bg=qx.event.handler.Keyboard;
var bh=m;

if(bg.isValidKeyIdentifier(bf)){return bf;
}
if(bf.length==1&&bf>=G&&bf<=x){return bf.toUpperCase();
}bf=bf.toLowerCase();
var bh=this.__zr[bf]||qx.lang.String.firstUp(bf);

if(bg.isValidKeyIdentifier(bh)){return bh;
}else{return m;
}},toString:function(){var bk=this.__zo;
var bj=[];

for(var bi in this.__zn){if(this.__zn[bi]){bj.push(qx.locale.Key.getKeyName(j,bi));
}}
if(bk){bj.push(qx.locale.Key.getKeyName(j,bk));
}return bj.join(k);
}},destruct:function(){this.setEnabled(false);
this.__zn=this.__zo=null;
}});
})();
(function(){var bB="Control",bA="End",bz="Left",by="Meta",bx="Pause",bw="Scroll",bv="Ctrl",bu="Home",bt="Apps",bs="Win",bh="Right",bg="Backspace",bf="Space",be="Down",bd="Up",bc="Shift",bb="Enter",ba="Alt",Y="key_full_Meta",X="PrintScreen",bI="NumLock",bJ="Escape",bG="key_short_Alt",bH="key_short_Control_Mac",bE="key_short_Insert",bF="Del",bC="Num",bD="key_full_Enter",bK="key_full_Control",bL="qx.locale.Key",bl="Tabulator",bk="key_full_Space",bn="key_short_Meta",bm="key_short_PageUp",bp="key_short_Pause",bo="key_full_Down",br="key_short_Apps",bq="key_short_Win",bj="key_full_Right",bi="os.name",a="key_short_Up",b="key_full_PageDown",c="key_full_Alt",d="PgDn",e="key_full_Escape",f="key_full_Insert",g="osx",h="key_short_Space",i="key_full_Home",j="key_short_Backspace",bP="key_short_Home",bO="full",bN="key_short_Down",bM="PgUp",bT="_Mac",bS="key_short_CapsLock",bR="PageUp",bQ="key_full_Up",bV="key_full_Backspace",bU="PageDown",H="CapsLock",I="Ins",F="key_short_PrintScreen",G="Tab",L="key_full_Apps",M="key_short_Tab",J="key_short_End",K="_",D="Caps",E="key_short_NumLock",r="key_full_Scroll",q="key_short_Left",t="key_short_Scroll",s="key_full_Control_Mac",n="key_",m="key_full_Pause",p="key_short_Right",o="key_full_PrintScreen",l="key_full_Win",k="short",R="key_short_Shift",S="key_short_PageDown",T="key_short_Enter",U="key_short_Control",N="qx.debug",O="Insert",P="key_short_Escape",Q="key_full_Tab",V="Print",W="Delete",B="key_full_CapsLock",A="Esc",z="key_short_Delete",y="key_full_PageUp",x="key_full_Shift",w="key_full_NumLock",v="key_full_Delete",u="key_full_End",C="key_full_Left";
qx.Class.define(bL,{statics:{getKeyName:function(bW,bX,bY){if(qx.core.Environment.get(N)){qx.core.Assert.assertInArray(bW,[k,bO]);
}var cb=n+bW+K+bX;
if(qx.core.Environment.get(bi)==g&&bX==bB){cb+=bT;
}var ca=qx.locale.Manager.getInstance().translate(cb,[],bY);

if(ca==cb){return qx.locale.Key._keyNames[cb]||bX;
}else{return ca;
}}},defer:function(cc){var ce={};
var cd=qx.locale.Manager;
ce[cd.marktr(j)]=bg;
ce[cd.marktr(M)]=G;
ce[cd.marktr(h)]=bf;
ce[cd.marktr(T)]=bb;
ce[cd.marktr(R)]=bc;
ce[cd.marktr(U)]=bv;
ce[cd.marktr(bH)]=bv;
ce[cd.marktr(bG)]=ba;
ce[cd.marktr(bS)]=D;
ce[cd.marktr(bn)]=by;
ce[cd.marktr(P)]=A;
ce[cd.marktr(q)]=bz;
ce[cd.marktr(a)]=bd;
ce[cd.marktr(p)]=bh;
ce[cd.marktr(bN)]=be;
ce[cd.marktr(bm)]=bM;
ce[cd.marktr(S)]=d;
ce[cd.marktr(J)]=bA;
ce[cd.marktr(bP)]=bu;
ce[cd.marktr(bE)]=I;
ce[cd.marktr(z)]=bF;
ce[cd.marktr(E)]=bC;
ce[cd.marktr(F)]=V;
ce[cd.marktr(t)]=bw;
ce[cd.marktr(bp)]=bx;
ce[cd.marktr(bq)]=bs;
ce[cd.marktr(br)]=bt;
ce[cd.marktr(bV)]=bg;
ce[cd.marktr(Q)]=bl;
ce[cd.marktr(bk)]=bf;
ce[cd.marktr(bD)]=bb;
ce[cd.marktr(x)]=bc;
ce[cd.marktr(bK)]=bB;
ce[cd.marktr(s)]=bB;
ce[cd.marktr(c)]=ba;
ce[cd.marktr(B)]=H;
ce[cd.marktr(Y)]=by;
ce[cd.marktr(e)]=bJ;
ce[cd.marktr(C)]=bz;
ce[cd.marktr(bQ)]=bd;
ce[cd.marktr(bj)]=bh;
ce[cd.marktr(bo)]=be;
ce[cd.marktr(y)]=bR;
ce[cd.marktr(b)]=bU;
ce[cd.marktr(u)]=bA;
ce[cd.marktr(i)]=bu;
ce[cd.marktr(f)]=O;
ce[cd.marktr(v)]=W;
ce[cd.marktr(w)]=bI;
ce[cd.marktr(o)]=X;
ce[cd.marktr(r)]=bw;
ce[cd.marktr(m)]=bx;
ce[cd.marktr(l)]=bs;
ce[cd.marktr(L)]=bt;
cc._keyNames=ce;
}});
})();
(function(){var dl="widget",dk="button",dj="pointer",di="button-box",dh="atom",dg="background",df="main-dark",de="bold",dd="text-disabled",dc="image",ca="white",bY="background-selected",bX="popup",bW="button-box-hovered",bV="",bU="button-box-pressed-hovered",bT="label",bS="button-box-pressed",bR="arrow-down",bQ="groupbox",dt="text-selected",du="cell",dr="tooltip",ds="combobox/button",dp="list",dq="middle",dm="menu-button",dn="toolbar-button",dv="textfield",dw="spinner",cK="button-frame",cJ="-middle",cM="light-background",cL="-invert",cO="background-selected-dark",cN="invalid",cQ="combobox",cP="scrollbar",cI="inset",cH="center",k="datechooser/button",l="right",m="main",n="background-disabled",o="-right",p="radiobutton",q="arrow-",r="checkbox",s="-left",t="tree-folder",dK="selectbox",dJ="-invalid",dI="icon/16/places/folder-open.png",dH="menu-slidebar-button",dO="scrollbar/button",dN="border-invalid",dM="tree-minus",dL="statusbar",dQ="down",dP="text",bg="background-disabled-checked",bh="tree",be="slidebar/button-forward",bf="icon/16/places/folder.png",bk="icon/16/mimetypes/text-plain.png",bl="tree-plus",bi="default",bj="-top-left",bc="datechooser",bd="button-box-focused",L="blank",K="treevirtual-folder",N="-bottom-right",M="virtual-list",H="-top-right",G="arrow-right",J="left",I="up",F="right-top",E="focused-inset",bq="slidebar/button-backward",br="-bottom-left",bs="table-row-background-even",bt="button-box-pressed-top-right",bm="arrow-left",bn="datechooser-weekday",bo="arrow-up",bp="icon/16/actions/dialog-ok.png",bu="button-box-top-right",bv="slidebar",W="#BABABA",V="button-box-hovered-bottom-right",U="tabview-page-button-top-bottom",T="move-frame",S="nodrop",R="window-caption",Q="table-header-cell",P="button-box-hovered-top-right",bb="row-layer",ba="treevirtual-plus-only",bw="move",bx="treevirtual-plus-end",by="-last",bz="vertical",bA="arrow-down-small",bB="tooltip-error",bC="window-restore",bD="resize-frame",bE="scroll-knob",bF="tabview-close",ci="atom/label",ch="button-box-pressed-bottom-right",cg="button-box-pressed-hovered-bottom-right",cf="icon/16/actions/dialog-cancel.png",cm="qx.theme.simple.Appearance",cl="menu-slidebar",ck="treevirtual-minus-cross",cj="background-pane",cp="table-",co="scroll-knob-pressed",cD="icon",cE="arrow-rewind",cB="icon/16/apps/office-calendar.png",cC="headline",cz="treevirtual-plus-start",cA="treevirtual-minus-end",cx="checkbox-undetermined",cy="button-box-bottom-right",cF="datechooser-week",cG="descending",cU="toolbar-separator",cT="arrow-up-small",cW="horizontal",cV="border-light-shadow",cY="text-placeholder",cX="treevirtual-plus-cross",db="scrollarea",da="treevirtual-line",cS="tabview-page-button-right-left",cR="menu-checkbox",dD="best-fit",dE="button-border",dF="treevirtual-cross",dG="button-hover",dz="menubar-button-pressed",dA="progressbar",dB="tree-file",dC="tooltip-text",dx="keep-align",dy="-first",j="alias",i="ascending",h="button-box-hovered-right-borderless",g="button-box-right-borderless",f="lead-item",e="checkbox-focused",d="border-blue",c="window-minimize",b="button-box-pressed-hovered-top-right",a="knob-",w="treevirtual-minus-only",x="treevirtual-minus-start",u="checkbox-checked",v="window",A="window-active",B="table-header-cell-first",y="button-box-pressed-right-borderless",z="scroll-knob-hovered",C="tabview-label-active-disabled",D="select-column-order",cq="button-box-pressed-hovered-right-borderless",cn="scroll-knob-pressed-hovered",cv="white-box",cr="datechooser-week-header",cd="menubar-button-hovered",cb="table-header-column-button",O="window-close",ce="datechooser-date-pane",Y="tabview-unselected",X="cursor-",bI="-focused",bJ="menu-radiobutton",bK="window-maximize",bL="treevirtual-end",bM="table",bN="arrow-forward",bO="copy",bP="table-row-background-selected",bG="radiobutton-focused",bH="scrollbar/slider/knob",cc="atom/icon",cu="table-header",ct="menu-separator",cs="link",cw="icon/16/actions/view-refresh.png";
qx.Theme.define(cm,{appearances:{"widget":{},"label":{style:function(dR){return {textColor:dR.disabled?dd:undefined};
}},"image":{style:function(dS){return {opacity:!dS.replacement&&dS.disabled?0.3:undefined};
}},"atom":{},"atom/label":bT,"atom/icon":dc,"root":{style:function(dT){return {backgroundColor:dg,textColor:dP,font:bi};
}},"popup":{style:function(dU){return {decorator:bX,backgroundColor:cj};
}},"tooltip":{include:bX,style:function(dV){return {backgroundColor:dr,textColor:dC,decorator:dr,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":dh,"tooltip-error":{include:dr,style:function(dW){return {textColor:dt,showTimeout:100,hideTimeout:10000,decorator:bB,font:de,backgroundColor:undefined};
}},"tooltip-error/atom":dh,"iframe":{style:function(dX){return {backgroundColor:ca,decorator:df};
}},"move-frame":{style:function(dY){return {decorator:df};
}},"resize-frame":T,"dragdrop-cursor":{style:function(ea){var eb=S;

if(ea.copy){eb=bO;
}else if(ea.move){eb=bw;
}else if(ea.alias){eb=j;
}return {source:qx.theme.simple.Image.URLS[X+eb],position:F,offset:[2,16,2,6]};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dk,include:dk,style:function(ec){return {icon:qx.theme.simple.Image.URLS[q+(ec.vertical?dQ:l)]};
}},"slidebar/button-backward":{alias:dk,include:dk,style:function(ed){return {icon:qx.theme.simple.Image.URLS[q+(ed.vertical?I:J)]};
}},"table":dl,"table/statusbar":{style:function(ee){return {decorator:dL,padding:[2,5],backgroundColor:cM};
}},"table/column-button":{alias:dk,style:function(ef){return {decorator:cb,padding:3,icon:qx.theme.simple.Image.URLS[D]};
}},"table-column-reset-button":{include:dm,alias:dm,style:function(){return {icon:cw};
}},"table-scroller/scrollbar-x":cP,"table-scroller/scrollbar-y":cP,"table-scroller":dl,"table-scroller/header":{style:function(){return {decorator:cu};
}},"table-scroller/pane":{},"table-scroller/focus-indicator":{style:function(eg){return {decorator:m};
}},"table-scroller/resize-line":{style:function(eh){return {backgroundColor:dE,width:3};
}},"table-header-cell":{alias:dh,style:function(ei){return {decorator:ei.first?B:Q,minWidth:13,font:de,paddingTop:3,paddingLeft:5,cursor:ei.disabled?undefined:dj,sortIcon:ei.sorted?(qx.theme.simple.Image.URLS[cp+(ei.sortedAscending?i:cG)]):undefined};
}},"table-header-cell/icon":{include:cc,style:function(ej){return {paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(ek){return {alignY:dq,alignX:l,paddingRight:5};
}},"table-editor-textfield":{include:dv,style:function(el){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:dK,alias:dK,style:function(em){return {padding:[0,2]};
}},"table-editor-combobox":{include:cQ,alias:cQ,style:function(en){return {decorator:undefined};
}},"treevirtual":bM,"treevirtual-folder":{style:function(eo){return {icon:(eo.opened?dI:bf)};
}},"treevirtual-file":{include:K,alias:K,style:function(ep){return {icon:bk};
}},"treevirtual-line":{style:function(eq){return {icon:qx.theme.simple.Image.URLS[da]};
}},"treevirtual-contract":{style:function(er){return {icon:qx.theme.simple.Image.URLS[dM]};
}},"treevirtual-expand":{style:function(es){return {icon:qx.theme.simple.Image.URLS[bl]};
}},"treevirtual-only-contract":{style:function(et){return {icon:qx.theme.simple.Image.URLS[w]};
}},"treevirtual-only-expand":{style:function(eu){return {icon:qx.theme.simple.Image.URLS[ba]};
}},"treevirtual-start-contract":{style:function(ev){return {icon:qx.theme.simple.Image.URLS[x]};
}},"treevirtual-start-expand":{style:function(ew){return {icon:qx.theme.simple.Image.URLS[cz]};
}},"treevirtual-end-contract":{style:function(ex){return {icon:qx.theme.simple.Image.URLS[cA]};
}},"treevirtual-end-expand":{style:function(ey){return {icon:qx.theme.simple.Image.URLS[bx]};
}},"treevirtual-cross-contract":{style:function(ez){return {icon:qx.theme.simple.Image.URLS[ck]};
}},"treevirtual-cross-expand":{style:function(eA){return {icon:qx.theme.simple.Image.URLS[cX]};
}},"treevirtual-end":{style:function(eB){return {icon:qx.theme.simple.Image.URLS[bL]};
}},"treevirtual-cross":{style:function(eC){return {icon:qx.theme.simple.Image.URLS[dF]};
}},"resizer":{style:function(eD){return {decorator:df};
}},"splitpane":{},"splitpane/splitter":{style:function(eE){return {backgroundColor:cM};
}},"splitpane/splitter/knob":{style:function(eF){return {source:qx.theme.simple.Image.URLS[a+(eF.horizontal?cW:bz)],padding:2};
}},"splitpane/slider":{style:function(eG){return {backgroundColor:cV,opacity:0.3};
}},"menu":{style:function(eH){var eI={backgroundColor:dg,decorator:m,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:eH.submenu||eH.contextmenu?dD:dx};

if(eH.submenu){eI.position=F;
eI.offset=[-2,-3];
}
if(eH.contextmenu){eI.offset=4;
}return eI;
}},"menu/slidebar":cl,"menu-slidebar":dl,"menu-slidebar-button":{style:function(eJ){return {backgroundColor:eJ.hovered?bY:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:dH,style:function(eK){return {icon:qx.theme.simple.Image.URLS[bo+(eK.hovered?cL:bV)]};
}},"menu-slidebar/button-forward":{include:dH,style:function(eL){return {icon:qx.theme.simple.Image.URLS[bR+(eL.hovered?cL:bV)]};
}},"menu-separator":{style:function(eM){return {height:0,decorator:ct,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:dh,style:function(eN){return {backgroundColor:eN.selected?bY:undefined,textColor:eN.selected?dt:undefined,padding:[2,6]};
}},"menu-button/icon":{include:dc,style:function(eO){return {alignY:dq};
}},"menu-button/label":{include:bT,style:function(eP){return {alignY:dq,padding:1};
}},"menu-button/shortcut":{include:bT,style:function(eQ){return {alignY:dq,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:dc,style:function(eR){return {source:qx.theme.simple.Image.URLS[G+(eR.selected?cL:bV)],alignY:dq};
}},"menu-checkbox":{alias:dm,include:dm,style:function(eS){return {icon:!eS.checked?undefined:qx.theme.simple.Image.URLS[cR+(eS.selected?cL:bV)]};
}},"menu-radiobutton":{alias:dm,include:dm,style:function(eT){return {icon:!eT.checked?undefined:qx.theme.simple.Image.URLS[bJ+(eT.selected?cL:bV)]};
}},"menubar":{style:function(eU){return {backgroundColor:cM,padding:[4,2]};
}},"menubar-button":{style:function(eV){var eX;
var eW=[2,6];

if(!eV.disabled){if(eV.pressed){eX=dz;
eW=[1,5,2,5];
}else if(eV.hovered){eX=cd;
eW=[1,5];
}}return {padding:eW,cursor:eV.disabled?undefined:dj,textColor:cs,decorator:eX};
}},"virtual-list":dp,"virtual-list/row-layer":bb,"row-layer":dl,"column-layer":dl,"group-item":{include:bT,alias:bT,style:function(eY){return {padding:4,backgroundColor:W,textColor:ca,font:de};
}},"virtual-selectbox":dK,"virtual-selectbox/dropdown":bX,"virtual-selectbox/dropdown/list":{alias:M},"virtual-combobox":cQ,"virtual-combobox/dropdown":bX,"virtual-combobox/dropdown/list":{alias:M},"virtual-tree":{include:bh,alias:bh,style:function(fa){return {itemHeight:21};
}},"virtual-tree-folder":t,"virtual-tree-file":dB,"cell":{style:function(fb){return {backgroundColor:fb.selected?bP:bs,textColor:fb.selected?dt:dP,padding:[3,6]};
}},"cell-string":du,"cell-number":{include:du,style:function(fc){return {textAlign:l};
}},"cell-image":du,"cell-boolean":du,"cell-atom":du,"cell-date":du,"cell-html":du,"htmlarea":{"include":dl,style:function(fd){return {backgroundColor:ca};
}},"scrollbar":{},"scrollbar/slider":{},"scrollbar/slider/knob":{style:function(fe){var ff=bE;

if(!fe.disabled){if(fe.hovered&&!fe.pressed&&!fe.checked){ff=z;
}else if(fe.hovered&&(fe.pressed||fe.checked)){ff=cn;
}else if(fe.pressed||fe.checked){ff=co;
}}return {height:14,width:14,cursor:fe.disabled?undefined:dj,decorator:ff,minHeight:fe.horizontal?undefined:20,minWidth:fe.horizontal?20:undefined};
}},"scrollbar/button":{style:function(fg){var fh={};
fh.padding=4;
var fi=bV;

if(fg.left){fi=J;
fh.marginRight=2;
}else if(fg.right){fi+=l;
fh.marginLeft=2;
}else if(fg.up){fi+=I;
fh.marginBottom=2;
}else{fi+=dQ;
fh.marginTop=2;
}fh.icon=qx.theme.simple.Image.URLS[q+fi];
fh.cursor=dj;
fh.decorator=di;
return fh;
}},"scrollbar/button-begin":dO,"scrollbar/button-end":dO,"scrollarea/corner":{style:function(fj){return {backgroundColor:dg};
}},"scrollarea":dl,"scrollarea/pane":dl,"scrollarea/scrollbar-x":cP,"scrollarea/scrollbar-y":cP,"textfield":{style:function(fk){var fm;

if(fk.disabled){fm=dd;
}else if(fk.showingPlaceholder){fm=cY;
}else{fm=undefined;
}var fn;
var fl;

if(fk.disabled){fn=cI;
fl=[2,3];
}else if(fk.invalid){fn=dN;
fl=[1,2];
}else if(fk.focused){fn=E;
fl=[1,2];
}else{fl=[2,3];
fn=cI;
}return {decorator:fn,padding:fl,textColor:fm,backgroundColor:fk.disabled?n:ca};
}},"textarea":dv,"radiobutton/icon":{style:function(fo){var fq=p;

if(fo.focused&&!fo.invalid){fq=bG;
}fq+=fo.invalid&&!fo.disabled?dJ:bV;
var fp;

if(fo.disabled&&fo.checked){fp=bg;
}else if(fo.disabled){fp=n;
}else if(fo.checked){fp=bY;
}return {decorator:fq,width:12,height:12,backgroundColor:fp};
}},"radiobutton":{style:function(fr){return {icon:qx.theme.simple.Image.URLS[L]};
}},"form-renderer-label":{include:bT,style:function(){return {paddingTop:3};
}},"checkbox":{alias:dh,style:function(fs){var ft;
if(fs.checked){ft=qx.theme.simple.Image.URLS[u];
}else if(fs.undetermined){ft=qx.theme.simple.Image.URLS[cx];
}else{ft=qx.theme.simple.Image.URLS[L];
}return {icon:ft,gap:6};
}},"checkbox/icon":{style:function(fu){var fw=r;

if(fu.focused&&!fu.invalid){fw=e;
}fw+=fu.invalid&&!fu.disabled?dJ:bV;
var fv;
if(fu.checked){fv=2;
}else if(fu.undetermined){fv=[4,2];
}return {decorator:fw,width:12,height:12,padding:fv,backgroundColor:ca};
}},"spinner":{style:function(fx){return {textColor:fx.disabled?dd:undefined};
}},"spinner/textfield":dv,"spinner/upbutton":{alias:ds,include:ds,style:function(fy){var fz=bu;

if(fy.hovered&&!fy.pressed&&!fy.checked){fz=P;
}else if(fy.hovered&&(fy.pressed||fy.checked)){fz=b;
}else if(fy.pressed||fy.checked){fz=bt;
}return {icon:qx.theme.simple.Image.URLS[cT],decorator:fz,width:17};
}},"spinner/downbutton":{alias:ds,include:ds,style:function(fA){var fB=cy;

if(fA.hovered&&!fA.pressed&&!fA.checked){fB=V;
}else if(fA.hovered&&(fA.pressed||fA.checked)){fB=cg;
}else if(fA.pressed||fA.checked){fB=ch;
}return {icon:qx.theme.simple.Image.URLS[bA],decorator:fB,width:17};
}},"selectbox":cK,"selectbox/atom":dh,"selectbox/popup":bX,"selectbox/list":{alias:dp,include:dp,style:function(){return {decorator:undefined};
}},"selectbox/arrow":{include:dc,style:function(fC){return {source:qx.theme.simple.Image.URLS[bR],paddingRight:4,paddingLeft:5};
}},"combobox":{},"combobox/button":{alias:cK,include:cK,style:function(fD){var fE=g;

if(fD.hovered&&!fD.pressed&&!fD.checked){fE=h;
}else if(fD.hovered&&(fD.pressed||fD.checked)){fE=cq;
}else if(fD.pressed||fD.checked){fE=y;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:fE,padding:[0,5],width:19};
}},"combobox/popup":bX,"combobox/list":{alias:dp},"combobox/textfield":dv,"datefield":cQ,"datefield/button":{alias:ds,include:ds,style:function(fF){return {icon:cB,padding:[0,0,0,3],backgroundColor:undefined,decorator:undefined,width:19};
}},"datefield/list":{alias:bc,include:bc,style:function(fG){return {decorator:undefined};
}},"list":{alias:db,include:dv},"listitem":{alias:dh,style:function(fH){return {gap:4,padding:fH.lead?[2,4]:[3,5],backgroundColor:fH.selected?bY:undefined,textColor:fH.selected?dt:undefined,decorator:fH.lead?f:undefined};
}},"slider":{style:function(fI){var fK;
var fJ;

if(fI.disabled){fK=cI;
fJ=[2,3];
}else if(fI.invalid){fK=dN;
fJ=[1,2];
}else if(fI.focused){fK=E;
fJ=[1,2];
}else{fJ=[2,3];
fK=cI;
}return {decorator:fK,padding:fJ};
}},"slider/knob":bH,"button-frame":{alias:dh,style:function(fL){var fM=di;

if(!fL.disabled){if(fL.hovered&&!fL.pressed&&!fL.checked){fM=bW;
}else if(fL.hovered&&(fL.pressed||fL.checked)){fM=bU;
}else if(fL.pressed||fL.checked){fM=bS;
}}
if(fL.invalid&&!fL.disabled){fM+=dJ;
}else if(fL.focused){fM+=bI;
}return {decorator:fM,padding:[3,8],cursor:fL.disabled?undefined:dj,minWidth:5,minHeight:5};
}},"button-frame/label":{alias:ci,style:function(fN){return {textColor:fN.disabled?dd:undefined};
}},"button":{alias:cK,include:cK,style:function(fO){return {center:true};
}},"hover-button":{alias:dk,include:dk,style:function(fP){return {decorator:fP.hovered?dG:undefined};
}},"splitbutton":{},"splitbutton/button":{alias:dh,style:function(fQ){var fR=di;

if(fQ.disabled){fR=di;
}else if(fQ.focused){fR=bd;
}else if(fQ.hovered&&!fQ.pressed&&!fQ.checked){fR=bW;
}else if(fQ.hovered&&(fQ.pressed||fQ.checked)){fR=bU;
}else if(fQ.pressed||fQ.checked){fR=bS;
}fR+=s;
return {decorator:fR,padding:[3,8],cursor:fQ.disabled?undefined:dj};
}},"splitbutton/arrow":{style:function(fS){var fT=di;

if(fS.disabled){fT=di;
}else if(fS.focused){fT=bd;
}else if(fS.hovered&&!fS.pressed&&!fS.checked){fT=bW;
}else if(fS.hovered&&(fS.pressed||fS.checked)){fT=bU;
}else if(fS.pressed||fS.checked){fT=bS;
}fT+=o;
return {icon:qx.theme.simple.Image.URLS[bR],decorator:fT,cursor:fS.disabled?undefined:dj,padding:[3,4]};
}},"groupbox":{},"groupbox/legend":{alias:dh,style:function(fU){return {textColor:fU.invalid?cN:undefined,padding:5,margin:4,font:de};
}},"groupbox/frame":{style:function(fV){return {backgroundColor:dg,padding:[6,9],margin:[18,2,2,2],decorator:cv};
}},"check-groupbox":bQ,"check-groupbox/legend":{alias:r,include:r,style:function(fW){return {textColor:fW.invalid?cN:undefined,padding:5,margin:4,font:de};
}},"radio-groupbox":bQ,"radio-groupbox/legend":{alias:p,include:p,style:function(fX){return {textColor:fX.invalid?cN:undefined,padding:5,margin:4,font:de};
}},"tree-folder/open":{include:dc,style:function(fY){return {source:fY.opened?qx.theme.simple.Image.URLS[dM]:qx.theme.simple.Image.URLS[bl]};
}},"tree-folder":{style:function(ga){return {padding:[2,8,2,5],icon:ga.opened?dI:bf,backgroundColor:ga.selected?bY:undefined,iconOpened:dI};
}},"tree-folder/icon":{include:dc,style:function(gb){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(gc){return {padding:[1,2],textColor:gc.selected?dt:undefined};
}},"tree-file":{include:t,alias:t,style:function(gd){return {icon:bk};
}},"tree":{include:dp,alias:dp,style:function(ge){return {contentPadding:ge.invalid&&!ge.disabled?[3,0]:[4,1],padding:ge.focused?0:1};
}},"window":{style:function(gf){return {contentPadding:[10,10,10,10],backgroundColor:dg,decorator:gf.maximized?undefined:gf.active?A:v};
}},"window-resize-frame":bD,"window/pane":{},"window/captionbar":{style:function(gg){return {backgroundColor:gg.active?cM:n,padding:8,font:de,decorator:R};
}},"window/icon":{style:function(gh){return {marginRight:4};
}},"window/title":{style:function(gi){return {cursor:bi,font:de,marginRight:20,alignY:dq};
}},"window/minimize-button":{alias:dk,style:function(gj){return {icon:qx.theme.simple.Image.URLS[c],padding:[1,2],cursor:gj.disabled?undefined:dj};
}},"window/restore-button":{alias:dk,style:function(gk){return {icon:qx.theme.simple.Image.URLS[bC],padding:[1,2],cursor:gk.disabled?undefined:dj};
}},"window/maximize-button":{alias:dk,style:function(gl){return {icon:qx.theme.simple.Image.URLS[bK],padding:[1,2],cursor:gl.disabled?undefined:dj};
}},"window/close-button":{alias:dk,style:function(gm){return {marginLeft:2,icon:qx.theme.simple.Image.URLS[O],padding:[1,2],cursor:gm.disabled?undefined:dj};
}},"window/statusbar":{style:function(gn){return {decorator:dL,padding:[2,6]};
}},"window/statusbar-text":bT,"datechooser":{style:function(go){return {decorator:m};
}},"datechooser/navigation-bar":{style:function(gp){return {backgroundColor:dg,textColor:gp.disabled?dd:gp.invalid?cN:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":dr,"datechooser/last-month-button-tooltip":dr,"datechooser/next-year-button-tooltip":dr,"datechooser/next-month-button-tooltip":dr,"datechooser/last-year-button":k,"datechooser/last-month-button":k,"datechooser/next-year-button":k,"datechooser/next-month-button":k,"datechooser/button/icon":{},"datechooser/button":{style:function(gq){var gr={width:17,show:cD,cursor:gq.disabled?undefined:dj};

if(gq.lastYear){gr.icon=qx.theme.simple.Image.URLS[cE];
}else if(gq.lastMonth){gr.icon=qx.theme.simple.Image.URLS[bm];
}else if(gq.nextYear){gr.icon=qx.theme.simple.Image.URLS[bN];
}else if(gq.nextMonth){gr.icon=qx.theme.simple.Image.URLS[G];
}return gr;
}},"datechooser/month-year-label":{style:function(gs){return {font:de,textAlign:cH};
}},"datechooser/date-pane":{style:function(gt){return {decorator:ce,backgroundColor:dg};
}},"datechooser/weekday":{style:function(gu){return {decorator:bn,font:de,textAlign:cH,textColor:gu.disabled?dd:gu.weekend?cO:dg,backgroundColor:gu.weekend?dg:cO,paddingTop:2};
}},"datechooser/day":{style:function(gv){return {textAlign:cH,decorator:gv.today?m:undefined,textColor:gv.disabled?dd:gv.selected?dt:gv.otherMonth?dd:undefined,backgroundColor:gv.disabled?undefined:gv.selected?bY:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(gw){return {textAlign:cH,textColor:cO,padding:[2,4],decorator:gw.header?cr:cF};
}},"progressbar":{style:function(gx){return {decorator:dA,padding:1,backgroundColor:ca,width:200,height:20};
}},"progressbar/progress":{style:function(gy){return {backgroundColor:gy.disabled?bg:bY};
}},"toolbar":{style:function(gz){return {backgroundColor:cM,padding:0};
}},"toolbar/part":{style:function(gA){return {margin:[0,15]};
}},"toolbar/part/container":{},"toolbar/part/handle":{},"toolbar-separator":{style:function(gB){return {decorator:cU,margin:[7,0],width:4};
}},"toolbar-button":{alias:dh,style:function(gC){var gE=di;

if(gC.disabled){gE=di;
}else if(gC.hovered&&!gC.pressed&&!gC.checked){gE=bW;
}else if(gC.hovered&&(gC.pressed||gC.checked)){gE=bU;
}else if(gC.pressed||gC.checked){gE=bS;
}if(gC.left){gE+=s;
}else if(gC.right){gE+=o;
}else if(gC.middle){gE+=cJ;
}var gD=[7,10];

if(gC.left||gC.middle||gC.right){gD=[7,0];
}return {cursor:gC.disabled?undefined:dj,decorator:gE,margin:gD,padding:[3,5]};
}},"toolbar-menubutton":{alias:dn,include:dn,style:function(gF){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:dc,include:dc,style:function(gG){return {source:qx.theme.simple.Image.URLS[bR],cursor:gG.disabled?undefined:dj,padding:[0,5],marginLeft:2};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":{alias:dn,include:dn,style:function(gH){var gI=di;

if(gH.disabled){gI=di;
}else if(gH.hovered&&!gH.pressed&&!gH.checked){gI=bW;
}else if(gH.hovered&&(gH.pressed||gH.checked)){gI=bU;
}else if(gH.pressed||gH.checked){gI=bS;
}if(gH.left){gI+=s;
}else if(gH.right){gI+=cJ;
}else if(gH.middle){gI+=cJ;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:gI};
}},"toolbar-splitbutton/arrow":{alias:dn,include:dn,style:function(gJ){var gK=di;

if(gJ.disabled){gK=di;
}else if(gJ.hovered&&!gJ.pressed&&!gJ.checked){gK=bW;
}else if(gJ.hovered&&(gJ.pressed||gJ.checked)){gK=bU;
}else if(gJ.pressed||gJ.checked){gK=bS;
}if(gJ.left){gK+=cJ;
}else if(gJ.right){gK+=o;
}else if(gJ.middle){gK+=cJ;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:gK};
}},"tabview":{},"tabview/bar":{alias:bv,style:function(gL){var gM=0,gP=0,gN=0,gO=0;

if(gL.barTop){gN-=2;
}else if(gL.barBottom){gM-=2;
}else if(gL.barRight){gO-=2;
}else{gP-=2;
}return {marginBottom:gN,marginTop:gM,marginLeft:gO,marginRight:gP};
}},"tabview/bar/button-forward":{include:be,alias:be,style:function(gQ){var gR=di;

if(gQ.hovered&&!gQ.pressed&&!gQ.checked){gR=bW;
}else if(gQ.hovered&&(gQ.pressed||gQ.checked)){gR=bU;
}else if(gQ.pressed||gQ.checked){gR=bS;
}
if(gQ.barTop){return {marginTop:4,marginBottom:2,decorator:gR+H};
}else if(gQ.barBottom){return {marginTop:2,marginBottom:4,decorator:gR+N};
}else if(gQ.barLeft){return {marginLeft:4,marginRight:2,decorator:gR+br};
}else{return {marginLeft:2,marginRight:4,decorator:gR+N};
}}},"tabview/bar/button-backward":{include:bq,alias:bq,style:function(gS){var gT=di;

if(gS.hovered&&!gS.pressed&&!gS.checked){gT=bW;
}else if(gS.hovered&&(gS.pressed||gS.checked)){gT=bU;
}else if(gS.pressed||gS.checked){gT=bS;
}
if(gS.barTop){return {marginTop:4,marginBottom:2,decorator:gT+bj};
}else if(gS.barBottom){return {marginTop:2,marginBottom:4,decorator:gT+br};
}else if(gS.barLeft){return {marginLeft:4,marginRight:2,decorator:gT+bj};
}else{return {marginLeft:2,marginRight:4,decorator:gT+H};
}}},"tabview/pane":{style:function(gU){return {backgroundColor:dg,decorator:d,padding:10};
}},"tabview-page":dl,"tabview-page/button":{style:function(gV){var hf;
var hd=0,hb=0,gX=0,ha=0;
if(gV.barTop||gV.barBottom){var gY=5,gW=5,hc=9,he=9;
}else{var gY=8,gW=8,hc=4,he=4;
}if(gV.barTop||gV.barBottom){hf=U;
}else if(gV.barRight||gV.barLeft){hf=cS;
}if(gV.checked){if(gV.barTop){hc+=1;
he+=1;
gY+=4;
}else if(gV.barBottom){hc+=1;
he+=1;
gY+=2;
}else if(gV.barLeft){gY+=1;
gW+=1;
hc+=4;
he+=2;
}else if(gV.barRight){gY+=1;
gW+=1;
hc+=2;
he+=4;
}}else{if(gV.barTop){gX+=2;
hd+=4;
}else if(gV.barBottom){gX+=4;
hd+=2;
}else if(gV.barLeft){hb+=2;
ha+=4;
}else if(gV.barRight){hb+=4;
ha+=2;
}}
if(gV.firstTab&&!gV.checked){hf+=dy;
}else if(gV.lastTab&&!gV.checked){hf+=by;
}return {zIndex:gV.checked?10:5,decorator:gV.checked?undefined:hf,backgroundColor:gV.checked?bY:Y,textColor:gV.disabled?gV.checked?C:dd:ca,padding:[gY,he,gW,hc],margin:[hd,hb,gX,ha]};
}},"tabview-page/button/label":{alias:bT,style:function(hg){return {padding:[0,1,0,1]};
}},"tabview-page/button/icon":dc,"tabview-page/button/close-button":{alias:dh,style:function(hh){return {cursor:hh.disabled?undefined:dj,icon:qx.theme.simple.Image.URLS[bF]};
}},"colorpopup":{alias:bX,include:bX,style:function(hi){return {padding:5};
}},"colorpopup/field":{style:function(hj){return {margin:2,width:14,height:14,backgroundColor:dg,decorator:df};
}},"colorpopup/selector-button":dk,"colorpopup/auto-button":dk,"colorpopup/preview-pane":bQ,"colorpopup/current-preview":{style:function(hk){return {height:20,padding:4,marginLeft:4,decorator:df,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hl){return {height:20,padding:4,marginRight:4,decorator:df,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dk,include:dk,style:function(hm){return {icon:bp};
}},"colorpopup/colorselector-cancelbutton":{alias:dk,include:dk,style:function(hn){return {icon:cf};
}},"colorselector":dl,"colorselector/control-bar":dl,"colorselector/visual-pane":bQ,"colorselector/control-pane":dl,"colorselector/preset-grid":dl,"colorselector/colorbucket":{style:function(ho){return {decorator:df,width:16,height:16};
}},"colorselector/preset-field-set":bQ,"colorselector/input-field-set":bQ,"colorselector/preview-field-set":bQ,"colorselector/hex-field-composite":dl,"colorselector/hex-field":dv,"colorselector/rgb-spinner-composite":dl,"colorselector/rgb-spinner-red":dw,"colorselector/rgb-spinner-green":dw,"colorselector/rgb-spinner-blue":dw,"colorselector/hsb-spinner-composite":dl,"colorselector/hsb-spinner-hue":dw,"colorselector/hsb-spinner-saturation":dw,"colorselector/hsb-spinner-brightness":dw,"colorselector/preview-content-old":{style:function(hp){return {decorator:df,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(hq){return {decorator:df,backgroundColor:ca,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(hr){return {decorator:df,margin:5};
}},"colorselector/brightness-field":{style:function(hs){return {decorator:df,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dl,"colorselector/hue-saturation-handle":dl,"colorselector/brightness-pane":dl,"colorselector/brightness-handle":dl,"app-header":{style:function(ht){return {font:cC,textColor:dt,backgroundColor:cO,padding:[8,12]};
}},"app-header-label":{style:function(hu){return {paddingTop:5};
}}}});
})();
(function(){var a="qx.theme.simple.Image";
qx.Class.define(a,{extend:qx.core.Object,statics:{URLS:{"blank":"qx/static/blank.gif","checkbox-checked":"decoration/checkbox/checked.png","checkbox-undetermined":"decoration/checkbox/undetermined.png","window-minimize":"decoration/window/minimize.gif","window-maximize":"decoration/window/maximize.gif","window-restore":"decoration/window/restore.gif","window-close":"decoration/window/close.gif","cursor-copy":"decoration/cursors/copy.gif","cursor-move":"decoration/cursors/move.gif","cursor-alias":"decoration/cursors/alias.gif","cursor-nodrop":"decoration/cursors/nodrop.gif","arrow-right":"decoration/arrows/right.gif","arrow-left":"decoration/arrows/left.gif","arrow-up":"decoration/arrows/up.gif","arrow-down":"decoration/arrows/down.gif","arrow-forward":"decoration/arrows/forward.gif","arrow-rewind":"decoration/arrows/rewind.gif","arrow-down-small":"decoration/arrows/down-small.gif","arrow-up-small":"decoration/arrows/up-small.gif","arrow-up-invert":"decoration/arrows/up-invert.gif","arrow-down-invert":"decoration/arrows/down-invert.gif","arrow-right-invert":"decoration/arrows/right-invert.gif","knob-horizontal":"decoration/splitpane/knob-horizontal.png","knob-vertical":"decoration/splitpane/knob-vertical.png","tree-minus":"decoration/tree/minus.gif","tree-plus":"decoration/tree/plus.gif","select-column-order":"decoration/table/select-column-order.png","table-ascending":"decoration/table/ascending.png","table-descending":"decoration/table/descending.png","treevirtual-line":"decoration/treevirtual/line.gif","treevirtual-minus-only":"decoration/treevirtual/only_minus.gif","treevirtual-plus-only":"decoration/treevirtual/only_plus.gif","treevirtual-minus-start":"decoration/treevirtual/start_minus.gif","treevirtual-plus-start":"decoration/treevirtual/start_plus.gif","treevirtual-minus-end":"decoration/treevirtual/end_minus.gif","treevirtual-plus-end":"decoration/treevirtual/end_plus.gif","treevirtual-minus-cross":"decoration/treevirtual/cross_minus.gif","treevirtual-plus-cross":"decoration/treevirtual/cross_plus.gif","treevirtual-end":"decoration/treevirtual/end.gif","treevirtual-cross":"decoration/treevirtual/cross.gif","menu-checkbox":"decoration/menu/checkbox.gif","menu-checkbox-invert":"decoration/menu/checkbox-invert.gif","menu-radiobutton-invert":"decoration/menu/radiobutton-invert.gif","menu-radiobutton":"decoration/menu/radiobutton.gif","tabview-close":"decoration/tabview/close.gif"}}});
})();
(function(){var l="_applyBoxShadow",k="px ",j="Integer",i="shadowHorizontalLength",h="box-shadow",g="qx.debug",f="-webkit-box-shadow",e="shadowVerticalLength",d="-moz-box-shadow",c="shorthand",a="qx.ui.decoration.MBoxShadow",b="Color";
qx.Mixin.define(a,{properties:{shadowHorizontalLength:{nullable:true,check:j,apply:l},shadowVerticalLength:{nullable:true,check:j,apply:l},shadowBlurRadius:{nullable:true,check:j,apply:l},shadowColor:{nullable:true,check:b,apply:l},shadowLength:{group:[i,e],mode:c}},members:{_styleBoxShadow:function(m){var n=qx.theme.manager.Color.getInstance();
var q=n.resolve(this.getShadowColor());

if(q!=null){var r=this.getShadowVerticalLength()||0;
var o=this.getShadowHorizontalLength()||0;
var blur=this.getShadowBlurRadius()||0;
var p=o+k+r+k+blur+k+q;
m[d]=p;
m[f]=p;
m[h]=p;
}},_applyBoxShadow:function(){if(qx.core.Environment.get(g)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var e="qx.ui.decoration.MBackgroundColor",d="qx.debug",c="Color",b="_applyBackgroundColor",a="";
qx.Mixin.define(e,{properties:{backgroundColor:{check:c,nullable:true,apply:b}},members:{_tintBackgroundColor:function(f,g,h){var i=qx.theme.manager.Color.getInstance();

if(g==null){g=this.getBackgroundColor();
}h.backgroundColor=i.resolve(g)||a;
},_resizeBackgroundColor:function(j,k,l){var m=this.getInsets();
k-=m.left+m.right;
l-=m.top+m.bottom;
return {left:m.left,top:m.top,width:k,height:l};
},_applyBackgroundColor:function(){if(qx.core.Environment.get(d)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
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
(function(){var j="solid",i="_applyStyle",h="double",g="px ",f="dotted",e="_applyWidth",d="Color",c="",b="dashed",a="Number",E=" ",D="shorthand",C="widthTop",B="styleRight",A="styleBottom",z="qx.debug",y="widthBottom",x="widthLeft",w="styleTop",v="colorBottom",q="styleLeft",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="border-top",k="border-left",l="border-right",s="qx.ui.decoration.MSingleBorder",t="border-bottom",u="absolute";
qx.Mixin.define(s,{properties:{widthTop:{check:a,init:0,apply:e},widthRight:{check:a,init:0,apply:e},widthBottom:{check:a,init:0,apply:e},widthLeft:{check:a,init:0,apply:e},styleTop:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleRight:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleBottom:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleLeft:{nullable:true,check:[j,f,b,h],init:j,apply:i},colorTop:{nullable:true,check:d,apply:i},colorRight:{nullable:true,check:d,apply:i},colorBottom:{nullable:true,check:d,apply:i},colorLeft:{nullable:true,check:d,apply:i},left:{group:[x,q,o]},right:{group:[r,B,p]},top:{group:[C,w,m]},bottom:{group:[y,A,v]},width:{group:[C,r,y,x],mode:D},style:{group:[w,B,A,q],mode:D},color:{group:[m,p,v,o],mode:D}},members:{_styleBorder:function(F){var G=qx.theme.manager.Color.getInstance();
var H=this.getWidthTop();

if(H>0){F[n]=H+g+this.getStyleTop()+E+(G.resolve(this.getColorTop())||c);
}var H=this.getWidthRight();

if(H>0){F[l]=H+g+this.getStyleRight()+E+(G.resolve(this.getColorRight())||c);
}var H=this.getWidthBottom();

if(H>0){F[t]=H+g+this.getStyleBottom()+E+(G.resolve(this.getColorBottom())||c);
}var H=this.getWidthLeft();

if(H>0){F[k]=H+g+this.getStyleLeft()+E+(G.resolve(this.getColorLeft())||c);
}if(qx.core.Environment.get(z)){if(F.length===0){throw new Error("Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}F.position=u;
F.top=0;
F.left=0;
},_resizeBorder:function(I,J,K){var L=this.getInsets();
J-=L.left+L.right;
K-=L.top+L.bottom;
if(J<0){J=0;
}
if(K<0){K=0;
}return {left:L.left-this.getWidthLeft(),top:L.top-this.getWidthTop(),width:J,height:K};
},_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_applyWidth:function(){this._applyStyle();
this._resetInsets();
},_applyStyle:function(){if(qx.core.Environment.get(z)){if(this._markup){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
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
(function(){var a="qx.ui.decoration.Uniform";
qx.Class.define(a,{extend:qx.ui.decoration.Single,construct:function(b,c,d){qx.ui.decoration.Single.call(this);
if(b!=null){this.setWidth(b);
}
if(c!=null){this.setStyle(c);
}
if(d!=null){this.setColor(d);
}}});
})();
(function(){var j='',i="px ",h=" ",g="border-top",f="border-left",e="border-bottom",d="border-right",c="Color",b="Number",a="qx.debug",D="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",u="innerColorTop",q="relative",r="browser.documentmode",o="innerColorLeft",p="qx.ui.decoration.MDoubleBorder",m="left",n="engine.version",k="innerWidthBottom",l="innerWidthLeft",s="position",t="absolute";
qx.Mixin.define(p,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__kF;
this._resizeBorder=this.__kE;
this._styleBorder=this.__kC;
this._generateMarkup=this.__kD;
},properties:{innerWidthTop:{check:b,init:0},innerWidthRight:{check:b,init:0},innerWidthBottom:{check:b,init:0},innerWidthLeft:{check:b,init:0},innerWidth:{group:[w,z,k,l],mode:D},innerColorTop:{nullable:true,check:c},innerColorRight:{nullable:true,check:c},innerColorBottom:{nullable:true,check:c},innerColorLeft:{nullable:true,check:c},innerColor:{group:[u,v,x,o],mode:D}},members:{__kB:null,__kC:function(E){var F=qx.theme.manager.Color.getInstance();
E.position=q;
var G=this.getInnerWidthTop();

if(G>0){E[g]=G+i+this.getStyleTop()+h+F.resolve(this.getInnerColorTop());
}var G=this.getInnerWidthRight();

if(G>0){E[d]=G+i+this.getStyleRight()+h+F.resolve(this.getInnerColorRight());
}var G=this.getInnerWidthBottom();

if(G>0){E[e]=G+i+this.getStyleBottom()+h+F.resolve(this.getInnerColorBottom());
}var G=this.getInnerWidthLeft();

if(G>0){E[f]=G+i+this.getStyleLeft()+h+F.resolve(this.getInnerColorLeft());
}
if(qx.core.Environment.get(a)){if(!E[g]&&!E[d]&&!E[e]&&!E[f]){throw new Error("Invalid Double decorator (zero inner border width). Use qx.ui.decoration.Single instead!");
}}},__kD:function(H){var K=this._generateBackgroundMarkup(H);
var I=qx.theme.manager.Color.getInstance();
H[g]=j;
H[d]=j;
H[e]=j;
H[f]=j;
H[C]=0;
if((qx.core.Environment.get(B)==A&&parseFloat(qx.core.Environment.get(n))<8)||(qx.core.Environment.get(B)==A&&qx.core.Environment.get(r)<8)){H[C]=j;
}var J=this.getWidthTop();

if(J>0){H[g]=J+i+this.getStyleTop()+h+I.resolve(this.getColorTop());
}var J=this.getWidthRight();

if(J>0){H[d]=J+i+this.getStyleRight()+h+I.resolve(this.getColorRight());
}var J=this.getWidthBottom();

if(J>0){H[e]=J+i+this.getStyleBottom()+h+I.resolve(this.getColorBottom());
}var J=this.getWidthLeft();

if(J>0){H[f]=J+i+this.getStyleLeft()+h+I.resolve(this.getColorLeft());
}
if(qx.core.Environment.get(a)){if(H[g]==j&&H[d]==j&&H[e]==j&&H[f]==j){throw new Error("Invalid Double decorator (zero outer border width). Use qx.ui.decoration.Single instead!");
}}H[s]=t;
H[y]=0;
H[m]=0;
return this.__kB=this._generateBackgroundMarkup(H,K);
},__kE:function(L,M,N){var O=this.getInsets();
M-=O.left+O.right;
N-=O.top+O.bottom;
var P=O.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=O.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:P,top:top,width:M,height:N,elementToApplyDimensions:L.firstChild};
},__kF:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var j="_applyLinearBackgroundGradient",i=" ",h=")",g="engine.name",f="horizontal",e=",",d=" 0",c="px",b="browser.name",a="0",L="shorthand",K="Color",J="vertical",I="",H="Number",G="webkit",F="%",E="),to(",D="from(",C="background-image",q="engine.version",r="-moz-",o="-webkit-gradient(linear,",p="startColorPosition",m="qx.debug",n="-o-",k="deg, ",l="startColor",s="ie",t="qx.ui.decoration.MLinearBackgroundGradient",w="endColorPosition",v="opera",y="linear-gradient(",x="endColor",A="-ms-",z="gecko",u="background",B="-webkit-";
qx.Mixin.define(t,{properties:{startColor:{check:K,nullable:true,apply:j},endColor:{check:K,nullable:true,apply:j},orientation:{check:[f,J],init:J,apply:j},startColorPosition:{check:H,init:0,apply:j},endColorPosition:{check:H,init:100,apply:j},colorPositionUnit:{check:[c,F],init:F,apply:j},gradientStart:{group:[l,p],mode:L},gradientEnd:{group:[x,w],mode:L}},members:{_styleLinearBackgroundGradient:function(M){var P=qx.theme.manager.Color.getInstance();
var V=this.getColorPositionUnit();
if(qx.core.Environment.get(g)==G&&parseFloat(qx.core.Environment.get(q))<534.16){V=V===c?I:V;

if(this.getOrientation()==f){var U=this.getStartColorPosition()+V+d+V;
var T=this.getEndColorPosition()+V+d+V;
}else{var U=a+V+i+this.getStartColorPosition()+V;
var T=a+V+i+this.getEndColorPosition()+V;
}var R=D+P.resolve(this.getStartColor())+E+P.resolve(this.getEndColor())+h;
var Q=o+U+e+T+e+R+h;
M[u]=Q;
}else{var W=this.getOrientation()==f?0:270;
var O=P.resolve(this.getStartColor())+i+this.getStartColorPosition()+V;
var N=P.resolve(this.getEndColor())+i+this.getEndColorPosition()+V;
var S=I;

if(qx.core.Environment.get(g)==z){S=r;
}else if(qx.core.Environment.get(b)==v){S=n;
}else if(qx.core.Environment.get(b)==s){S=A;
}else if(qx.core.Environment.get(g)==G){S=B;
}M[C]=S+y+W+k+O+e+N+h;
}},_resizeLinearBackgroundGradient:function(X,Y,ba){var bb=this.getInsets();
Y-=bb.left+bb.right;
ba-=bb.top+bb.bottom;
return {left:bb.left,top:bb.top,width:Y,height:ba};
},_applyLinearBackgroundGradient:function(){if(qx.core.Environment.get(m)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
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
(function(){var j="tabview-button-border",i="button-box",h="button-box-pressed",g="background-selected",f="button-border",e="button-box-hovered",d="button-box-pressed-hovered",c="solid",b="invalid",a="gray",X="button-border-hovered",W="tabview-unselected",V="shadow",U="border-separator",T="button-box-focused",S="border-light",R="checkbox",Q="tabview-page-button-top-bottom",P="window-border",O="radiobutton",q="scroll-knob",r="tabview-page-button-right-left",o="background",p="button-box-bright",m="window-border-inner",n="white",k="button-box-bright-pressed",l="button-box-dark-pressed",u="table-header",v="button-box-invalid",C="menubar-button-hovered",A="button-box-dark",G="#999999",E="qx/decoration/Simple",K="dotted",I="button",x="tooltip-text",N="table-focus-indicator",M="button-box-pressed-invalid",L="scrollbar-dark",w="qx.theme.simple.Decoration",y="table-header-cell",z="border-lead",B="#FFF",D="button-box-pressed-focused",F="scrollbar-bright",H="border-light-shadow",J="white-box-border",s="window",t="scroll-knob-pressed";
qx.Theme.define(w,{aliases:{decoration:E},decorations:{"border-blue":{decorator:qx.ui.decoration.Uniform,style:{width:4,color:g}},"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:g}},"main-dark":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:f}},"popup":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:P,shadowLength:2,shadowBlurRadius:5,shadowColor:V}},"button-box":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:f,gradientStart:[p,40],gradientEnd:[A,70],backgroundColor:p}},"button-box-pressed":{include:i,style:{gradientStart:[k,40],gradientEnd:[l,70],backgroundColor:k}},"button-box-pressed-hovered":{include:h,style:{color:X}},"button-box-hovered":{include:i,style:{color:X}},"button-box-invalid":{include:i,style:{color:b}},"button-box-pressed-invalid":{include:h,style:{color:b}},"button-box-hovered-invalid":{include:v},"button-box-pressed-hovered-invalid":{include:M},"button-box-focused":{include:i,style:{color:g}},"button-box-pressed-focused":{include:h,style:{color:g}},"button-box-hovered-focused":{include:T},"button-box-pressed-hovered-focused":{include:D},"button-box-right":{include:i,style:{radius:[0,3,3,0]}},"button-box-pressed-right":{include:h,style:{radius:[0,3,3,0]}},"button-box-pressed-hovered-right":{include:d,style:{radius:[0,3,3,0]}},"button-box-hovered-right":{include:e,style:{radius:[0,3,3,0]}},"button-box-focused-right":{include:T,style:{radius:[0,3,3,0]}},"button-box-right-borderless":{include:i,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-right-borderless":{include:h,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-hovered-right-borderless":{include:d,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-hovered-right-borderless":{include:e,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-top-right":{include:i,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-top-right":{include:h,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-hovered-top-right":{include:d,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-hovered-top-right":{include:e,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-bottom-right":{include:i,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-bottom-right":{include:h,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-hovered-bottom-right":{include:d,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-hovered-bottom-right":{include:e,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-bottom-left":{include:i,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-bottom-left":{include:h,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-hovered-bottom-left":{include:d,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-hovered-bottom-left":{include:e,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-top-left":{include:i,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-top-left":{include:h,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-hovered-top-left":{include:d,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-hovered-top-left":{include:e,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-middle":{include:i,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-middle":{include:h,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-hovered-middle":{include:d,style:{radius:0,width:[1,0,1,1]}},"button-box-hovered-middle":{include:e,style:{radius:0,width:[1,0,1,1]}},"button-box-left":{include:i,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-left":{include:h,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-hovered-left":{include:d,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-hovered-left":{include:e,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-focused-left":{include:T,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:U}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:U}},"scroll-knob":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:f,backgroundColor:F}},"scroll-knob-pressed":{include:q,style:{backgroundColor:L}},"scroll-knob-hovered":{include:q,style:{color:X}},"scroll-knob-pressed-hovered":{include:t,style:{color:X}},"button-hover":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius],style:{backgroundColor:I,radius:3}},"window":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:P,innerWidth:4,innerColor:m,shadowLength:1,shadowBlurRadius:3,shadowColor:V,backgroundColor:o}},"window-active":{include:s,style:{shadowLength:2,shadowBlurRadius:5}},"window-caption":{decorator:qx.ui.decoration.Single,style:{width:[0,0,2,0],color:m}},"white-box":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:J,shadowBlurRadius:2,shadowColor:G,radius:7,backgroundColor:n}},"inset":{decorator:qx.ui.decoration.Single,style:{width:1,color:[H,S,S,S]}},"focused-inset":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:g}},"border-invalid":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:b}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:K,color:z}},"tooltip":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{width:1,color:x,shadowLength:1,shadowBlurRadius:2,shadowColor:V}},"tooltip-error":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{radius:5,backgroundColor:b}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:f}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g}},"menubar-button-hovered":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{width:1,color:g,radius:3,backgroundColor:n}},"menubar-button-pressed":{include:C,style:{radius:[3,3,0,0],width:[1,1,0,1]}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:a,style:c}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:a,style:c}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:a,style:c}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:a,widthRight:1,colorRight:a,style:c}},"tabview-page-button-top-bottom":{decorator:qx.ui.decoration.Single,style:{width:[0,1],color:j}},"tabview-page-button-top-bottom-first":{include:Q,style:{color:[j,j,j,W]}},"tabview-page-button-top-bottom-last":{include:Q,style:{color:[j,W,j,j]}},"tabview-page-button-right-left":{decorator:qx.ui.decoration.Single,style:{width:[1,0],color:j}},"tabview-page-button-right-left-first":{include:r,style:{color:[W,j,j,j]}},"tabview-page-button-right-left-last":{include:r,style:{color:[j,j,W,j]}},"statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g,styleTop:c}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:N,style:c}},"table-header":{include:i,style:{radius:0,width:[1,0,1,0]}},"table-header-column-button":{include:u,style:{width:1,color:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,color:f}},"table-header-cell-first":{include:y,style:{widthLeft:1}},"progressbar":{decorator:qx.ui.decoration.Single,style:{backgroundColor:B,width:1,color:U}},"radiobutton":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:10,width:1,color:f,innerColor:o,innerWidth:2}},"radiobutton-focused":{include:O,style:{color:g}},"radiobutton-invalid":{include:O,style:{color:b}},"checkbox":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:f}},"checkbox-focused":{include:R,style:{color:g}},"checkbox-invalid":{include:R,style:{color:b}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b}});
})();
(function(){var f="sans-serif",e="arial",d="monospace",c="Courier New",b="qx.theme.simple.Font",a="DejaVu Sans Mono";
qx.Theme.define(b,{fonts:{"default":{size:13,family:[e,f]},"bold":{size:13,family:[e,f],bold:true},"headline":{size:24,family:[f,e]},"small":{size:11,family:[e,f]},"monospace":{size:11,family:[a,c,d]}}});
})();
(function(){var j="white",i="#5685D6",h="black",g="#6694E3",f="#EEE",e="gray",d="#D9D9D9",c="#1866B5",b="#24B",a="#FF0000",N="#CCCCCC",M="rgba(0, 0, 0, 0.4)",L="#FFFFE1",K="#B7B7B7",J="#BBBBBB",I="#9DCBFE",H="#A7A6AA",G="#EBEBEB",F="#666666",E="#CBC8CD",q="#F9F9F9",r="#F7F7F7",o="#808080",p="#686868",m="#888888",n="#E0ECFF",k="#2E3A46",l="css.rgba",s="#F5F5F5",t="#E3E3E3",w="#DDDDDD",v="#BBB",y="qx.theme.simple.Color",x="#F1F1F1",A="#939393",z="#BCBCBC",u="#134983",D="#E8F0E3",C="#FAFBFE",B="#AAAAAA";
qx.Theme.define(y,{colors:{"background":j,"dark-blue":i,"light-background":n,"background-selected":g,"background-selected-dark":i,"background-disabled":r,"background-disabled-checked":J,"background-pane":C,"tabview-unselected":c,"tabview-button-border":u,"tabview-label-active-disabled":d,"link":b,"scrollbar-bright":x,"scrollbar-dark":G,"button":D,"button-border":v,"button-border-hovered":A,"invalid":a,"button-box-bright":q,"button-box-dark":t,"button-box-bright-pressed":w,"button-box-dark-pressed":s,"border-lead":m,"window-border":k,"window-border-inner":I,"white-box-border":z,"shadow":qx.core.Environment.get(l)?M:F,"border-main":g,"border-light":K,"border-light-shadow":p,"border-separator":o,"text":h,"text-disabled":H,"text-selected":j,"text-placeholder":E,"tooltip":L,"tooltip-text":h,"table-header":[242,242,242],"table-focus-indicator":[179,217,255],"table-header-cell":[235,234,219],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":j,"table-row-background-odd":j,"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":f,"table-column-line":f,"progressive-table-header":B,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":N,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":j}});
})();
(function(){var b="Simple",a="qx.theme.Simple";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.simple.Color,decoration:qx.theme.simple.Decoration,font:qx.theme.simple.Font,appearance:qx.theme.simple.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var l="'>",k="[",h=", ",g="</span>",f="<span class='type-",e="</span> ",d="}",c="",b="]",a="\n",K="{",J="map",I="function",H="<span class='object'>",G="]:",F="&gt;",E="<span class='object' title='Object instance with hash code: ",D="string",C="level-",B="0",s="&lt;",t="<span class='offset'>",q=":",r="qx.log.appender.Util",o="&amp;",p="&#39;",m="DIV",n="<span>",u="&quot;",v="<span class='type-key'>",x="</span>:<span class='type-",w="</span>: ",z=" ",y="]</span>: ",A="?";
qx.Class.define(r,{statics:{toHtml:function(L){var V=[];
var S,U,N,P;
V.push(t,this.formatOffset(L.offset,6),e);

if(L.object){var M=L.win.qx.core.ObjectRegistry.fromHashCode(L.object);

if(M){V.push(E+M.$$hash+l,M.classname,k,M.$$hash,y);
}}else if(L.clazz){V.push(H+L.clazz.classname,w);
}var O=L.items;

for(var i=0,T=O.length;i<T;i++){S=O[i];
U=S.text;

if(U instanceof Array){var P=[];

for(var j=0,R=U.length;j<R;j++){N=U[j];

if(typeof N===D){P.push(n+this.escapeHTML(N)+g);
}else if(N.key){P.push(v+N.key+x+N.type+l+this.escapeHTML(N.text)+g);
}else{P.push(f+N.type+l+this.escapeHTML(N.text)+g);
}}V.push(f+S.type+l);

if(S.type===J){V.push(K,P.join(h),d);
}else{V.push(k,P.join(h),b);
}V.push(g);
}else{V.push(f+S.type+l+this.escapeHTML(U)+e);
}}var Q=document.createElement(m);
Q.innerHTML=V.join(c);
Q.className=C+L.level;
return Q;
},formatOffset:function(W,length){var ba=W.toString();
var X=(length||6)-ba.length;
var Y=c;

for(var i=0;i<X;i++){Y+=B;
}return Y+ba;
},FORMAT_STACK:null,escapeHTML:function(bb){return String(bb).replace(/[<>&"']/g,this.__Gg);
},__Gg:function(bc){var bd={"<":s,">":F,"&":o,"'":p,'"':u};
return bd[bc]||A;
},toText:function(be){return this.toTextArray(be).join(z);
},toTextArray:function(bf){var bn=[];
bn.push(this.formatOffset(bf.offset,6));

if(bf.object){var bg=bf.win.qx.core.ObjectRegistry.fromHashCode(bf.object);

if(bg){bn.push(bg.classname+k+bg.$$hash+G);
}}else if(bf.clazz){bn.push(bf.clazz.classname+q);
}var bh=bf.items;
var bk,bm;

for(var i=0,bl=bh.length;i<bl;i++){bk=bh[i];
bm=bk.text;

if(bk.trace&&bk.trace.length>0){if(typeof (this.FORMAT_STACK)==I){bm+=a+this.FORMAT_STACK(bk.trace);
}else{bm+=a+bk.trace;
}}
if(bm instanceof Array){var bi=[];

for(var j=0,bj=bm.length;j<bj;j++){bi.push(bm[j].text);
}
if(bk.type===J){bn.push(K,bi.join(h),d);
}else{bn.push(k,bi.join(h),b);
}}else{bn.push(bm);
}}return bn;
}}});
})();
(function(){var d="log",c="debug",b="engine.name",a="qx.log.appender.Native";
qx.Class.define(a,{statics:{process:qx.core.Environment.select(b,{"gecko":function(e){if(window.console){var f=console[e.level]?e.level:d;

if(console[f]){console[f].call(console,qx.log.appender.Util.toText(e));
}}},"mshtml":function(g){if(window.console){var i=g.level;

if(i==c){i=d;
}var h=qx.log.appender.Util.toText(g);
console[i](h);
}},"webkit":function(j){if(window.console){var l=j.level;

if(l==c){l=d;
}var k=qx.log.appender.Util.toText(j);
console[l](k);
}},"opera":function(m){}})},defer:function(n){qx.log.Logger.register(n);
}});
})();
(function(){var k="",j='</div>',i="none",h="keypress",g='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',f="Enter",d="px",c='.qxconsole .messages .user-result{background:white}',b='.qxconsole .messages .level-error{background:#FFE2D5}',a="div",V="user-command",U='<div class="command">',T="Up",S='.qxconsole .command input:focus{outline:none;}',R='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',P='.qxconsole .messages div{padding:0px 4px;}',O='.qxconsole .messages .level-debug{background:white}',N='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',M="DIV",r='.qxconsole .messages .level-user{background:#E3EFE9}',s='<div class="qxconsole">',p="D",q='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',n='.qxconsole .messages .type-string{color:black;font-weight:normal;}',o='.qxconsole .control a{text-decoration:none;color:black;}',l='<div class="messages">',m='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',t='<input type="text"/>',u="clear",B='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',z='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',F='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',D='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',I='.qxconsole .messages .user-command{color:blue}',H="F7",w="qx.log.appender.Console",L='.qxconsole .messages .level-info{background:#DEEDFA}',K="block",J='.qxconsole .messages .level-warn{background:#FFF7D5}',v='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',x='.qxconsole .messages .user-error{background:#FFE2D5}',y='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',A='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',C=">>> ",E="Down",G='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(w,{statics:{init:function(){var W=[F,y,o,g,P,I,c,x,O,L,J,b,r,n,G,m,z,q,R,N,Q,v,D,B,S];
qx.bom.Stylesheet.createElement(W.join(k));
var Y=[s,A,l,j,U,t,j,j];
var ba=document.createElement(M);
ba.innerHTML=Y.join(k);
var X=ba.firstChild;
document.body.appendChild(ba.firstChild);
this.__Lz=X;
this.__cr=X.childNodes[1];
this.__LA=X.childNodes[2].firstChild;
this.__jW();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,h,this.__gl,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__cr.innerHTML=k;
},process:function(bb){this.__cr.appendChild(qx.log.appender.Util.toHtml(bb));
this.__LB();
},__LB:function(){this.__cr.scrollTop=this.__cr.scrollHeight;
},__eP:true,toggle:function(){if(!this.__Lz){this.init();
}else if(this.__Lz.style.display==i){this.show();
}else{this.__Lz.style.display=i;
}},show:function(){if(!this.__Lz){this.init();
}else{this.__Lz.style.display=K;
this.__cr.scrollTop=this.__cr.scrollHeight;
}},__CK:[],execute:function(){var be=this.__LA.value;

if(be==k){return;
}
if(be==u){return this.clear();
}var bc=document.createElement(a);
bc.innerHTML=qx.log.appender.Util.escapeHTML(C+be);
bc.className=V;
this.__CK.push(be);
this.__LC=this.__CK.length;
this.__cr.appendChild(bc);
this.__LB();

try{var bd=window.eval(be);
}catch(bf){qx.log.Logger.error(bf);
}
if(bd!==undefined){qx.log.Logger.debug(bd);
}},__jW:function(e){this.__cr.style.height=(this.__Lz.clientHeight-this.__Lz.firstChild.offsetHeight-this.__Lz.lastChild.offsetHeight)+d;
},__gl:function(e){var bh=e.getKeyIdentifier();
if((bh==H)||(bh==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__Lz){return;
}if(!qx.dom.Hierarchy.contains(this.__Lz,e.getTarget())){return;
}if(bh==f&&this.__LA.value!=k){this.execute();
this.__LA.value=k;
}if(bh==T||bh==E){this.__LC+=bh=="Up"?-1:1;
this.__LC=Math.min(Math.max(0,this.__LC),this.__CK.length);
var bg=this.__CK[this.__LC];
this.__LA.value=bg||k;
this.__LA.select();
}}},defer:function(bi){qx.event.Registration.addListener(document.documentElement,h,bi.__gl,bi);
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
(function(){var cn="window",cm="engine.name",cl="",ck="childNodes",cj="nodeName",ci="nodeType",ch="document",cg="function",cf="mshtml",ce="firstChild",bt="external",bs="location",br="[native code]",bq="lastChild",bp="scrollY",bo="scrollWidth",bn="defaultView",bm="closed",bl="content",bk="qx",cu="</td><td>",cv="filters",cs="locationbar",ct="screenX",cq="previousSibling",cr="localStorage",co="scrollX",cp="Global namespace is polluted by the following unknown objects:\n\n",cw="doctype",cx="parent",bR="qx.dev.Pollution",bQ="outerText",bT="pageYOffset",bS="parentElement",bV="opera",bU="designMode",bX="cookie",bW="fullScreen",bP="links",bO="pageXOffset",a="frames",b="documentElement",c="screenY",d="statusbar",e="history",f="sun",g="pkcs11",h="java",j="style",k="innerWidth",cB="plugins",cA="implementation",cz="clientWidth",cy="compatMode",cF="length",cE="textContent",cD="controllers",cC="netscape",cH="self",cG="domConfig",J="attributes",K="clientHeight",H="outerHeight",I="parentNode",N="innerHeight",O="title",L="ownerDocument",M="<table>",F="globalStorage",G="Global namespace is not polluted by any unknown objects.",s="toolbar",r="outerHTML",u="crypto",t="forms",o="scrollbars",n="frameElement",q="Components",p="body",m="clientInformation",l="offscreenBuffering",T="embeds",U="localName",V="scrollTop",W="isMultiLine",P="scrollLeft",Q="images",R="event",S="offsetHeight",X="scrollMaxY",Y="sessionStorage",C="screen",B="name",A="offsetLeft",z="console",y="XMLHttpRequest",x="nextSibling",w="innerText",v="menubar",E="scopeName",D="top",ba="outerWidth",bb=": ",bc="\n",bd="status",be="contentEditable",bf="anchors",bg="</table>",bh="<tr style='vertical-align:top'><td>",bi="scrollMaxX",bj="screenTop",bx="defaultStatus",bw="styleSheets",bv="className",bu="personalbar",bB="</td></tr>",bA="currentStyle",bz="directories",by="navigator",bD="applets",bC="screenLeft",bK="opener",bL="scrollHeight",bI="__firebug__",bJ="Option",bG="innerHTML",bH="tabIndex",bE="offsetTop",bF="[function]",bM="clipboardData",bN="Packages",ca="tagName",bY="offsetWidth",cc="applicationCache",cb="undefined",cd="Image";
qx.Class.define(bR,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bk,h,f,bN,bI,q,cD,Y,F,z,R,l,bM,m,bJ,cd,bt,bj,bC,cF,cn,ch,bs,by,cC,cx,a,D,o,B,co,bp,cH,C,e,bl,v,s,cs,bu,d,bz,bm,u,g,bK,bd,bx,k,N,ba,H,ct,c,bO,bT,bi,X,bW,n,y,cc,cr],"document":[cG,bs,cy,cA,bn,O,p,bw,b,cj,ci,ce,bq,cw,Q,bD,bP,t,bf,bX,T,cB,bU,ck],"body":[cE,bG,r,w,bQ,E,bS,ca,cv,be,ch,bA,W,K,cz,bq,ce,bE,A,bY,S,bH,bv,J,cq,x,L,U,ck,I,ci,cj,j,V,P,bo,bL]},getInfo:function(cI){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
var cJ=qx.dev.Pollution.getTextList(cI||cn);

if(cJ){return cp+cJ;
}else{return G;
}},extract:function(cK){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
var cM=[];
var cL=qx.dev.Pollution.ignore[cK];
if((qx.core.Environment.get(cm)==cf)){if(cK==cn){cL=cL.slice(0);

for(var cN=0;cN<window.length;cN++){cL.push(cl+cN);
}}}var cO=qx.dev.Pollution.names[cK];

for(var cP in cO){try{if(qx.core.Environment.get(cm)==cf||qx.core.Environment.get(cm)==bV){if(cK==cn&&cP==bt){continue;
}}if(typeof cO[cP]==cb||cO[cP]===null){continue;
}if(typeof cO[cP]==cg&&cO[cP].toString().indexOf(br)!=-1){continue;
}if(typeof cO[cP].constructor==cg){if((cO[cP].constructor.toString().indexOf(br)!=-1)||(cO[cP].constructor.toString().indexOf(bF)!=-1)){continue;
}}if(qx.lang.Array.contains(cL,cP)){continue;
}}catch(cQ){continue;
}cM.push({"key":cP,"value":cO[cP]});
}return cM;
},getHtmlTable:function(cR){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
var cT=[];
var cS=bh;
var cV=cu;
var cW=bB;
cT.push(M);
var cU=this.extract(cR);

for(var i=0;i<cU.length;i++){cT.push(cS+cU[i].key+cV+cU[i].value+cW);
}cT.push(bg);
return cT.join(cl);
},getTextList:function(cX){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
var da=[];
var db=bb;
var dc=bc;
var cY=this.extract(cX);

for(var i=0;i<cY.length;i++){da.push(cY[i].key+db+cY[i].value+dc);
}return da.join(cl);
}}});
})();


qx.$$loader.init();

