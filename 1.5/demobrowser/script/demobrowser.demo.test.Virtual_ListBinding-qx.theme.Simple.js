(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.allowUrlSettings":true,"qx.allowUrlVariants":true,"qx.application":"demobrowser.demo.test.Virtual_ListBinding","qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.theme":"qx.theme.Simple"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.5"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:demobrowser.demo.test.Virtual_ListBinding-qx.theme.Simple.9ae4948bb612.js"]}},
  urisBefore : [],
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
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
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

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

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

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Zone"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"EEE, d.M.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan.","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb.","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr.","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Juni","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"Tag","dayperiod":"Tageshälfte","era":"Epoche","hour":"Stunde","minute":"Minute","month":"Monat","quotationEnd":"“","quotationStart":"„","second":"Sekunde","week":"Woche","weekday":"Wochentag","year":"Jahr","zone":"Zone"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Zone"},"en_US":{},"fr":{"alternateQuotationEnd":"›","alternateQuotationStart":"‹","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"EEE d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"EEE d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"jour","dayperiod":"cadran","era":"ère","hour":"heure","minute":"minute","month":"mois","quotationEnd":"»","quotationStart":"«","second":"seconde","week":"semaine","weekday":"jour de la semaine","year":"année","zone":"fuseau horaire"},"fr_FR":{}},"resources":{"qx/decoration/Simple/arrows/down-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/down-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/down.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/forward.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/left-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/left.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/rewind.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/right-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/right.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/up-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/up-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/up.gif":[7,4,"gif","qx"],"qx/decoration/Simple/checkbox/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/checked.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Simple/checkbox/undetermined.png":[6,2,"png","qx"],"qx/decoration/Simple/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Simple/colorselector/brightness-handle.gif":[35,11,"gif","qx"],"qx/decoration/Simple/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Simple/colorselector/huesaturation-handle.gif":[11,11,"gif","qx"],"qx/decoration/Simple/cursors/alias.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/copy.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/move.gif":[13,9,"gif","qx"],"qx/decoration/Simple/cursors/nodrop.gif":[20,20,"gif","qx"],"qx/decoration/Simple/menu/checkbox-invert.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/checkbox.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/radiobutton-invert.gif":[16,5,"gif","qx"],"qx/decoration/Simple/menu/radiobutton.gif":[16,5,"gif","qx"],"qx/decoration/Simple/splitpane/knob-horizontal.png":[1,8,"png","qx"],"qx/decoration/Simple/splitpane/knob-vertical.png":[8,1,"png","qx"],"qx/decoration/Simple/table/ascending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/ascending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/boolean-false.png":[11,11,"png","qx"],"qx/decoration/Simple/table/boolean-true.png":[11,11,"png","qx"],"qx/decoration/Simple/table/descending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/descending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/select-column-order.png":[10,9,"png","qx"],"qx/decoration/Simple/tabview/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/window/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/maximize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/restore.gif":[8,9,"gif","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};
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
},__he:[r,G,E,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bw){var bx=[];
var bz=Object.prototype.hasOwnProperty;

for(var bA in bw){if(bz.call(bw,bA)){bx.push(bA);
}}var by=qx.Bootstrap.__he;

for(var i=0,a=by,l=a.length;i<l;i++){if(bz.call(bw,a[i])){bx.push(a[i]);
}}return bx;
},"default":function(bB){var bC=[];
var bD=Object.prototype.hasOwnProperty;

for(var bE in bB){if(bD.call(bB,bE)){bC.push(bE);
}}return bC;
}})[typeof (Object.keys)==
L?B:
(function(){for(var bF in {toString:1}){return bF;
}})()!==m?u:j],getKeysAsString:function(bG){var bH=qx.Bootstrap.getKeys(bG);

if(bH.length==0){return p;
}return g+bH.join(C)+g;
},__hf:{"[object String]":d,"[object Array]":f,"[object Object]":h,"[object RegExp]":D,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":c,"[object Error]":J},bind:function(bI,self,bJ){var bK=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bL=Array.prototype.slice.call(arguments,0,arguments.length);
return bI.apply(self,bK.concat(bL));
};
},firstUp:function(bM){return bM.charAt(0).toUpperCase()+bM.substr(1);
},firstLow:function(bN){return bN.charAt(0).toLowerCase()+bN.substr(1);
},getClass:function(bO){var bP=Object.prototype.toString.call(bO);
return (qx.Bootstrap.__hf[bP]||bP.slice(8,-1));
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
qx.Bootstrap.define(b,{statics:{getLocale:function(){var e=qx.bom.client.Locale.__lG();
var f=e.indexOf(d);

if(f!=-1){e=e.substr(0,f);
}return e;
},getVariant:function(){var g=qx.bom.client.Locale.__lG();
var i=c;
var h=g.indexOf(d);

if(h!=-1){i=g.substr(h+1);
}return i;
},__lG:function(){var j=(navigator.userLanguage||navigator.language||c);
if(qx.bom.client.OperatingSystem.getName()==a){var k=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(k){j=k[0];
}}return j.toLowerCase();
}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",V="10.0",U="10.4",T="2003",S=")",R="iPhone",Q="android",P="unix",O="ce",N="7",M="SymbianOS",q="MacPPC",r="iPod",o="\.",p="Win64",m="linux",n="me",k="Macintosh",l="Android",s="Windows",t="ios",A="vista",y="blackberry",E="(",C="win",I="Linux",G="BSD",v="iPad",L="X11",K="xp",J="symbian",u="qx.bom.client.OperatingSystem",w="g",x="Win32",z="osx",B="|",D="BlackBerry",F="nt4",H="MacIntel";
qx.Bootstrap.define(u,{statics:{getName:function(){var W=navigator&&navigator.platform;

if(!W){return j;
}
if(W.indexOf(s)!=-1||W.indexOf(x)!=-1||W.indexOf(p)!=-1){return C;
}else if(W.indexOf(k)!=-1||W.indexOf(q)!=-1||W.indexOf(H)!=-1){return z;
}else if(W.indexOf(r)!=-1||W.indexOf(R)!=-1||W.indexOf(v)!=-1){return t;
}else if(W.indexOf(I)!=-1){return m;
}else if(W.indexOf(L)!=-1||W.indexOf(G)!=-1){return P;
}else if(W.indexOf(l)!=-1){return Q;
}else if(W.indexOf(M)!=-1){return J;
}else if(W.indexOf(D)!=-1){return y;
}return j;
},__dk:{"Windows NT 6.1":N,"Windows NT 6.0":A,"Windows NT 5.2":T,"Windows NT 5.1":K,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":F,"Win 9x 4.90":n,"Windows CE":O,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":U,"Mac OS X 10.4":U,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":V,"Mac OS X 10.0":V},getVersion:function(){var ba=[];

for(var Y in qx.bom.client.OperatingSystem.__dk){ba.push(Y);
}var bb=new RegExp(E+ba.join(B).replace(/\./g,o)+S,w);
var X=bb.exec(navigator.userAgent);

if(X&&X[1]){return qx.bom.client.OperatingSystem.__dk[X[1]];
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
},getXmlHttpRequest:function(){var q=window.ActiveXObject?
(function(){if(window.location.protocol!==h){try{new window.XMLHttpRequest();
return k;
}catch(r){}}
try{new window.ActiveXObject(j);
return d;
}catch(s){}})():
(function(){try{new window.XMLHttpRequest();
return k;
}catch(t){}})();
return q||i;
}}});
})();
(function(){var f="silverlight",e="wmv",d="quicktime",c="pdf",b="divx",a="qx.bom.client.Plugin";
qx.Bootstrap.define(a,{statics:{getGears:function(){return !!(window.google&&window.google.gears);
},__IH:{quicktime:{plugin:["QuickTime"],control:"QuickTimeCheckObject.QuickTimeCheck.1"},wmv:{plugin:["Windows Media"],control:"WMPlayer.OCX.7"},divx:{plugin:["DivX Web Player"],control:"npdivx.DivXBrowserPlugin.1"},silverlight:{plugin:["Silverlight"],control:"AgControl.AgControl"},pdf:{plugin:["Chrome PDF Viewer","Adobe Acrobat"],control:"AcroPDF.PDF"}},getQuicktimeVersion:function(){var g=qx.bom.client.Plugin.__IH[d];
return qx.bom.client.Plugin.__II(g.control,g.plugin);
},getWindowsMediaVersion:function(){var h=qx.bom.client.Plugin.__IH[e];
return qx.bom.client.Plugin.__II(h.control,h.plugin);
},getDivXVersion:function(){var k=qx.bom.client.Plugin.__IH[b];
return qx.bom.client.Plugin.__II(k.control,k.plugin);
},getSilverlightVersion:function(){var l=qx.bom.client.Plugin.__IH[f];
return qx.bom.client.Plugin.__II(l.control,l.plugin);
},getPdfVersion:function(){var m=qx.bom.client.Plugin.__IH[c];
return qx.bom.client.Plugin.__II(m.control,m.plugin);
},getQuicktime:function(){var n=qx.bom.client.Plugin.__IH[d];
return qx.bom.client.Plugin.__IJ(n.control,n.plugin);
},getWindowsMedia:function(){var o=qx.bom.client.Plugin.__IH[e];
return qx.bom.client.Plugin.__IJ(o.control,o.plugin);
},getDivX:function(){var p=qx.bom.client.Plugin.__IH[b];
return qx.bom.client.Plugin.__IJ(p.control,p.plugin);
},getSilverlight:function(){var q=qx.bom.client.Plugin.__IH[f];
return qx.bom.client.Plugin.__IJ(q.control,q.plugin);
},getPdf:function(){var r=qx.bom.client.Plugin.__IH[c];
return qx.bom.client.Plugin.__IJ(r.control,r.plugin);
},__II:function(s,t){var u=qx.bom.client.Plugin.__IJ(s,t);
if(!u){return "";
}if(qx.bom.client.Engine.getName()=="mshtml"){var v=new ActiveXObject(s);

try{var y=v.versionInfo;

if(y!=undefined){return y;
}y=v.version;

if(y!=undefined){return y;
}y=v.settings.version;

if(y!=undefined){return y;
}}catch(A){return "";
}return "";
}else{var z=navigator.plugins;
var x=/([0-9]\.[0-9])/g;

for(var i=0;i<z.length;i++){var w=z[i];

for(var j=0;j<t.length;j++){if(w.name.indexOf(t[j])!==-1){if(x.test(w.name)||x.test(w.description)){return RegExp.$1;
}}}}return "";
}},__IJ:function(B,C){if(qx.bom.client.Engine.getName()=="mshtml"){var D=window.ActiveXObject;

if(!D){return false;
}
try{new ActiveXObject(B);
}catch(F){return false;
}return true;
}else{var E=navigator.plugins;

if(!E){return false;
}var name;

for(var i=0;i<E.length;i++){name=E[i].name;

for(var j=0;j<C.length;j++){if(name.indexOf(C[j])!==-1){return true;
}}}return false;
}}}});
})();
(function(){var r=".",q="function",p="",o="gecko",n="[object Opera]",m="mshtml",l="8.0",k="AppleWebKit/",j="9.0",i="[^\\.0-9]",c="Gecko",h="webkit",f="4.0",b="1.9.0.0",a="opera",e="Version/",d="5.0",g="qx.bom.client.Engine";
qx.Bootstrap.define(g,{statics:{getVersion:function(){var v=window.navigator.userAgent;
var t=p;

if(qx.bom.client.Engine.__bN()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(v)){if(v.indexOf(e)!=-1){var u=v.match(/Version\/(\d+)\.(\d+)/);
t=u[1]+r+u[2].charAt(0)+r+u[2].substring(1,u[2].length);
}else{t=RegExp.$1+r+RegExp.$2;

if(RegExp.$3!=p){t+=r+RegExp.$3;
}}}}else if(qx.bom.client.Engine.__bO()){if(/AppleWebKit\/([^ ]+)/.test(v)){t=RegExp.$1;
var w=RegExp(i).exec(t);

if(w){t=t.slice(0,w.index);
}}}else if(qx.bom.client.Engine.__bP()){if(/rv\:([^\);]+)(\)|;)/.test(v)){t=RegExp.$1;
}}else if(qx.bom.client.Engine.__bQ()){if(/MSIE\s+([^\);]+)(\)|;)/.test(v)){t=RegExp.$1;
if(t<8&&/Trident\/([^\);]+)(\)|;)/.test(v)){if(RegExp.$1==f){t=l;
}else if(RegExp.$1==d){t=j;
}}}}else{var s=window.qxFail;

if(s&&typeof s===q){t=s().FULLVERSION;
}else{t=b;
qx.Bootstrap.warn("Unsupported client: "+v+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return t;
},getName:function(){var name;

if(qx.bom.client.Engine.__bN()){name=a;
}else if(qx.bom.client.Engine.__bO()){name=h;
}else if(qx.bom.client.Engine.__bP()){name=o;
}else if(qx.bom.client.Engine.__bQ()){name=m;
}else{var x=window.qxFail;

if(x&&typeof x===q){name=x().NAME;
}else{name=o;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__bN:function(){return window.opera&&Object.prototype.toString.call(window.opera)==n;
},__bO:function(){return window.navigator.userAgent.indexOf(k)!=-1;
},__bP:function(){return window.controllers&&window.navigator.product===c;
},__bQ:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}}});
})();
(function(){var j="mshtml",i="msie",h=")(/| )([0-9]+\.[0-9])",g="",f="(",e="ce",d="CSS1Compat",c="android",b="operamini",a="mobile chrome",z="iemobile",y="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",x="opera mobi",w="Mobile Safari",v="operamobile",u="ie",t="mobile safari",s="IEMobile|Maxthon|MSIE",r="qx.bom.client.Browser",q="opera mini",o="opera",p="Opera Mini|Opera Mobi|Opera",m="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",k="5.0",l="Mobile/";
qx.Bootstrap.define(r,{statics:{getName:function(){var D=navigator.userAgent;
var C=new RegExp(f+qx.bom.client.Browser.__du+h);
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
var G=new RegExp(f+qx.bom.client.Browser.__du+h);
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
}},__du:{"webkit":m,"gecko":y,"mshtml":s,"opera":p}[qx.bom.client.Engine.getName()]}});
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
return (C==d||C==h)&&qx.bom.client.Flash.__Cr(a,D);
},getStrictSecurityModel:function(){var E=qx.bom.client.Flash.getVersion();

if(E==r){return false;
}var F=E.split(t);

if(F[0]<10){return qx.bom.client.Flash.__Cr(c,E);
}else{return qx.bom.client.Flash.__Cr(b,E);
}},_cachedSupportsVersion:{},__Cr:function(G,H){var K=G.split(t);
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
qx.Bootstrap.define(d,{statics:{__dk:{"iPod":m,"iPad":c,"iPhone":f,"PSP":"psp","PLAYSTATION 3":"ps3","Nintendo Wii":a,"Nintendo DS":b,"XBOX":"xbox","Xbox":k},getName:function(){var p=[];

for(var o in this.__dk){p.push(o);
}var q=new RegExp(h+p.join(e).replace(/\./g,i)+g,l);
var n=q.exec(navigator.userAgent);

if(n&&n[1]){return qx.bom.client.Device.__dk[n[1]];
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
(function(){var bs="html.video.ogg",br="os.version",bq="phonegap.notification",bp="browser.name",bo="event.pointer",bn="plugin.gears",bm="io.ssl",bl="css.boxmodel",bk="html.xul",bj="html.classlist",X="event.touch",W="io.maxrequests",V="browser.documentmode",U="ecmascript.objectcount",T="plugin.flash.strictsecurity",S="html.audio.mp3",R="locale",Q="css.rgba",P="plugin.divx.version",O="locale.variant",bz="device.name",bA="html.filereader",bx="html.video.webm",by="os.name",bv="html.storage.local",bw="css.borderradius",bt="plugin.silverlight",bu="|",bB="plugin.flash",bC="html.audio.aif",bc="css.translate3d",bb="html.canvas",be="html.audio",bd="html.xpath",bg="html.audio.ogg",bf="plugin.pdf.version",bi="css.placeholder",bh="html.dataset",ba="plugin.quicktime.version",Y="io.xhr",a="plugin.silverlight.version",b="html.video",c="default",d="plugin.windowsmedia",e="plugin.flash.version",f="html.geolocation",g="html.storage.session",h="html.audio.au",j="plugin.quicktime",k="plugin.windowsmedia.version",bG="engine.name",bF="html.video.h264",bE="html.webworker",bD="css.boxshadow",bK="html.audio.wav",bJ="browser.version",bI="plugin.flash.express",bH="browser.quirksmode",bM="phonegap",bL="qx.allowUrlSettings",z="css.textoverflow",A="plugin.divx",x="css.gradients",y="engine.version",D="html.vml",E="plugin.pdf",B="html.dataurl",C="html.svg",v="qx.optimization.strings",w="qx.dynlocale",s="qx.propertyDebugLevel",r=":",u="qx.optimization.comments",t="qx.mobile.emulatetouch",o="qx.core.Environment",n="qx.optimization.variables",q="qxenv",p="qx.optimization.variants",m="&",l="qx.allowUrlVariants",J="qx.debug.databinding",K="qx.optimization.basecalls",L="true",M="qx.optimization.privates",F="qx.aspects",G="qx.debug",H="qx.dynamicmousewheel",I="false",N="qx.mobile.nativescroll";
qx.Bootstrap.define(o,{statics:{_checks:{},_asyncChecks:{},__cJ:{},get:function(bN){if(this.__cJ[bN]!=undefined){return this.__cJ[bN];
}var bO=this._checks[bN];

if(bO){var bP=bO();
this.__cJ[bN]=bP;
return bP;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bN+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},getAsync:function(bQ,bR,self){var bT=this;

if(this.__cJ[bQ]!=undefined){window.setTimeout(function(){bR.call(self,bT.__cJ[bQ]);
},0);
return;
}var bS=this._asyncChecks[bQ];

if(bS){bS(function(bU){bT.__cJ[bQ]=bU;
bR.call(self,bU);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bQ+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(bV,bW){return this.__cK(this.get(bV),bW);
},selectAsync:function(bX,bY,self){this.getAsync(bX,function(ca){var cb=this.__cK(bX,bY);
cb.call(self,ca);
},this);
},__cK:function(cc,cd){var cf=cd[cc];

if(cd.hasOwnProperty(cc)){return cf;
}for(var ce in cd){if(ce.indexOf(bu)!=-1){var cg=ce.split(bu);

for(var i=0;i<cg.length;i++){if(cg[i]==cc){return cd[ce];
}}}}
if(cd[c]!==undefined){return cd[c];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+cc+'" ('+(typeof cc)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(cd)+'] found, and no default ("default") given');
}},invalidateCacheKey:function(ch){delete this.__cJ[ch];
},add:function(ci,cj){if(this._checks[ci]==undefined){if(cj instanceof Function){this._checks[ci]=cj;
}else{this._checks[ci]=this.__cN(cj);
}}},addAsync:function(ck,cl){if(this._checks[ck]==undefined){this._asyncChecks[ck]=cl;
}},_initDefaultQxValues:function(){this.add(bL,function(){return false;
});
this.add(l,function(){return false;
});
this.add(s,function(){return 0;
});
this.add(G,function(){return true;
});
this.add(F,function(){return false;
});
this.add(w,function(){return true;
});
this.add(t,function(){return false;
});
this.add(N,function(){return false;
});
this.add(H,function(){return true;
});
this.add(J,function(){return false;
});
this.add(K,function(){return false;
});
this.add(u,function(){return false;
});
this.add(M,function(){return false;
});
this.add(v,function(){return false;
});
this.add(n,function(){return false;
});
this.add(p,function(){return false;
});
},__cL:function(){if(qx&&qx.$$environment){for(var cn in qx.$$environment){var cm=qx.$$environment[cn];
this._checks[cn]=this.__cN(cm);
}}},__cM:function(){if(window.document&&window.document.location){var co=window.document.location.search.slice(1).split(m);

for(var i=0;i<co.length;i++){var cq=co[i].split(r);

if(cq.length!=3||cq[0]!=q){continue;
}var cr=cq[1];
var cp=decodeURIComponent(cq[2]);
if(cp==L){cp=true;
}else if(cp==I){cp=false;
}else if(/^(\d|\.)+$/.test(cp)){cp=parseFloat(cp);
}this._checks[cr]=this.__cN(cp);
}}},__cN:function(cs){return qx.Bootstrap.bind(function(ct){return ct;
},null,cs);
},useCheck:function(cu){return true;
},_initChecksMap:function(){if(this.useCheck(y)){this._checks[y]=qx.bom.client.Engine.getVersion;
}
if(this.useCheck(bG)){this._checks[bG]=qx.bom.client.Engine.getName;
}if(this.useCheck(bp)){this._checks[bp]=qx.bom.client.Browser.getName;
}
if(this.useCheck(bJ)){this._checks[bJ]=qx.bom.client.Browser.getVersion;
}
if(this.useCheck(V)){this._checks[V]=qx.bom.client.Browser.getDocumentMode;
}
if(this.useCheck(bH)){this._checks[bH]=qx.bom.client.Browser.getQuirksMode;
}if(this.useCheck(bz)){this._checks[bz]=qx.bom.client.Device.getName;
}if(this.useCheck(R)){this._checks[R]=qx.bom.client.Locale.getLocale;
}
if(this.useCheck(O)){this._checks[O]=qx.bom.client.Locale.getVariant;
}if(this.useCheck(by)){this._checks[by]=qx.bom.client.OperatingSystem.getName;
}
if(this.useCheck(br)){this._checks[br]=qx.bom.client.OperatingSystem.getVersion;
}if(this.useCheck(bn)){this._checks[bn]=qx.bom.client.Plugin.getGears;
}
if(this.useCheck(j)){this._checks[j]=qx.bom.client.Plugin.getQuicktime;
}
if(this.useCheck(ba)){this._checks[ba]=qx.bom.client.Plugin.getQuicktimeVersion;
}
if(this.useCheck(d)){this._checks[d]=qx.bom.client.Plugin.getWindowsMedia;
}
if(this.useCheck(k)){this._checks[k]=qx.bom.client.Plugin.getWindowsMediaVersion;
}
if(this.useCheck(A)){this._checks[A]=qx.bom.client.Plugin.getDivX;
}
if(this.useCheck(P)){this._checks[P]=qx.bom.client.Plugin.getDivXVersion;
}
if(this.useCheck(bt)){this._checks[bt]=qx.bom.client.Plugin.getSilverlight;
}
if(this.useCheck(a)){this._checks[a]=qx.bom.client.Plugin.getSilverlightVersion;
}
if(this.useCheck(bB)){this._checks[bB]=qx.bom.client.Flash.isAvailable;
}
if(this.useCheck(e)){this._checks[e]=qx.bom.client.Flash.getVersion;
}
if(this.useCheck(bI)){this._checks[bI]=qx.bom.client.Flash.getExpressInstall;
}
if(this.useCheck(T)){this._checks[T]=qx.bom.client.Flash.getStrictSecurityModel;
}
if(this.useCheck(E)){this._checks[E]=qx.bom.client.Plugin.getPdf;
}
if(this.useCheck(bf)){this._checks[bf]=qx.bom.client.Plugin.getPdfVersion;
}if(this.useCheck(W)){this._checks[W]=qx.bom.client.Transport.getMaxConcurrentRequestCount;
}
if(this.useCheck(bm)){this._checks[bm]=qx.bom.client.Transport.getSsl;
}
if(this.useCheck(Y)){this._checks[Y]=qx.bom.client.Transport.getXmlHttpRequest;
}if(this.useCheck(X)){this._checks[X]=qx.bom.client.Event.getTouch;
}
if(this.useCheck(bo)){this._checks[bo]=qx.bom.client.Event.getPointer;
}if(this.useCheck(U)){this._checks[U]=qx.bom.client.EcmaScript.getObjectCount;
}if(this.useCheck(bE)){this._checks[bE]=qx.bom.client.Html.getWebWorker;
}
if(this.useCheck(bA)){this._checks[bA]=qx.bom.client.Html.getFileReader;
}
if(this.useCheck(f)){this._checks[f]=qx.bom.client.Html.getGeoLocation;
}
if(this.useCheck(be)){this._checks[be]=qx.bom.client.Html.getAudio;
}
if(this.useCheck(bg)){this._checks[bg]=qx.bom.client.Html.getAudioOgg;
}
if(this.useCheck(S)){this._checks[S]=qx.bom.client.Html.getAudioMp3;
}
if(this.useCheck(bK)){this._checks[bK]=qx.bom.client.Html.getAudioWav;
}
if(this.useCheck(h)){this._checks[h]=qx.bom.client.Html.getAudioAu;
}
if(this.useCheck(bC)){this._checks[bC]=qx.bom.client.Html.getAudioAif;
}
if(this.useCheck(b)){this._checks[b]=qx.bom.client.Html.getVideo;
}
if(this.useCheck(bs)){this._checks[bs]=qx.bom.client.Html.getVideoOgg;
}
if(this.useCheck(bF)){this._checks[bF]=qx.bom.client.Html.getVideoH264;
}
if(this.useCheck(bx)){this._checks[bx]=qx.bom.client.Html.getVideoWebm;
}
if(this.useCheck(bv)){this._checks[bv]=qx.bom.client.Html.getLocalStorage;
}
if(this.useCheck(g)){this._checks[g]=qx.bom.client.Html.getSessionStorage;
}
if(this.useCheck(bj)){this._checks[bj]=qx.bom.client.Html.getClassList;
}
if(this.useCheck(bd)){this._checks[bd]=qx.bom.client.Html.getXPath;
}
if(this.useCheck(bk)){this._checks[bk]=qx.bom.client.Html.getXul;
}
if(this.useCheck(bb)){this._checks[bb]=qx.bom.client.Html.getCanvas;
}
if(this.useCheck(C)){this._checks[C]=qx.bom.client.Html.getSvg;
}
if(this.useCheck(D)){this._checks[D]=qx.bom.client.Html.getVml;
}
if(this.useCheck(B)){this._asyncChecks[B]=qx.bom.client.Html.getDataUrl;
}
if(this.useCheck(bh)){this._checks[bh]=qx.bom.client.Html.getDataset;
}if(this.useCheck(z)){this._checks[z]=qx.bom.client.Css.getTextOverflow;
}
if(this.useCheck(bi)){this._checks[bi]=qx.bom.client.Css.getPlaceholder;
}
if(this.useCheck(bw)){this._checks[bw]=qx.bom.client.Css.getBorderRadius;
}
if(this.useCheck(bD)){this._checks[bD]=qx.bom.client.Css.getBoxShadow;
}
if(this.useCheck(x)){this._checks[x]=qx.bom.client.Css.getGradients;
}
if(this.useCheck(bl)){this._checks[bl]=qx.bom.client.Css.getBoxModel;
}
if(this.useCheck(bc)){this._checks[bc]=qx.bom.client.Css.getTranslate3d;
}
if(this.useCheck(Q)){this._checks[Q]=qx.bom.client.Css.getRgba;
}if(this.useCheck(bM)){this._checks[bM]=qx.bom.client.PhoneGap.getPhoneGap;
}
if(this.useCheck(bq)){this._checks[bq]=qx.bom.client.PhoneGap.getNotification;
}}},defer:function(cv){cv._initDefaultQxValues();
cv._initChecksMap();
cv.__cL();
if(cv.get(bL)===true){cv.__cM();
}}});
})();
(function(){var t="object",s="qx.debug",r="function",q="Array",p="Mixin",o="qx.Mixin",n=".prototype",m="constructor",k="[Mixin ",j="]",d="RegExp",h="members",g="destruct",c="properties",b="Date",f="events",e="statics";
qx.Bootstrap.define(o,{statics:{define:function(name,u){if(u){if(u.include&&!(qx.Bootstrap.getClass(u.include)===q)){u.include=[u.include];
}if(qx.core.Environment.get(s)){this.__gd(name,u);
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
},$$registry:{},__gb:qx.core.Environment.select(s,{"true":{"include":t,"statics":t,"members":t,"properties":t,"events":t,"destruct":r,"construct":r},"default":null}),__gd:qx.core.Environment.select(s,{"true":function(name,K){var N=this.__gb;

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
(function(){var w="qx.debug",v="object",u="Array",t="Interface",s="string",r="number",q="function",p="Boolean",o="qx.Interface",n="events",e="[Interface ",m="]",h="members",d="properties",c="Date",g="RegExp",f="toggle",j="boolean",b="is",k="statics";
qx.Bootstrap.define(o,{statics:{define:function(name,x){if(x){if(x.extend&&!(qx.Bootstrap.getClass(x.extend)===u)){x.extend=[x.extend];
}if(qx.core.Environment.get(w)){this.__gd(name,x);
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
},__jO:function(B,C,D,E){var I=D.$$members;

if(I){for(var H in I){if(qx.Bootstrap.isFunction(I[H])){var G=this.__jP(C,H);
var F=G||qx.Bootstrap.isFunction(B[H]);

if(!F){throw new Error('Implementation of method "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}var J=E===true&&!G&&!qx.Bootstrap.hasInterface(C,D);

if(J){B[H]=this.__jS(D,B[H],H,I[H]);
}}else{if(typeof B[H]===undefined){if(typeof B[H]!==q){throw new Error('Implementation of member "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}}}}}},__jP:function(K,L){var P=L.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!P){return false;
}var M=qx.Bootstrap.firstLow(P[2]);
var N=qx.Bootstrap.getPropertyDefinition(K,M);

if(!N){return false;
}var O=P[0]==b||P[0]==f;

if(O){return qx.Bootstrap.getPropertyDefinition(K,M).check==p;
}return true;
},__jQ:function(Q,R){if(R.$$properties){for(var S in R.$$properties){if(!qx.Bootstrap.getPropertyDefinition(Q,S)){throw new Error('The property "'+S+'" is not supported by Class "'+Q.classname+'"!');
}}}},__jR:function(T,U){if(U.$$events){for(var V in U.$$events){if(!qx.Bootstrap.supportsEvent(T,V)){throw new Error('The event "'+V+'" is not supported by Class "'+T.classname+'"!');
}}}},assertObject:function(W,X){var ba=W.constructor;
this.__jO(W,ba,X,false);
this.__jQ(ba,X);
this.__jR(ba,X);
var Y=X.$$extends;

if(Y){for(var i=0,l=Y.length;i<l;i++){this.assertObject(W,Y[i]);
}}},assert:function(bb,bc,bd){this.__jO(bb.prototype,bb,bc,bd);
this.__jQ(bb,bc);
this.__jR(bb,bc);
var be=bc.$$extends;

if(be){for(var i=0,l=be.length;i<l;i++){this.assert(bb,be[i],bd);
}}},genericToString:function(){return e+this.name+m;
},$$registry:{},__jS:qx.core.Environment.select(w,{"true":function(bf,bg,bh,bi){function bj(){bi.apply(this,arguments);
return bg.apply(this,arguments);
}bg.wrapper=bj;
return bj;
},"default":function(){}}),__gb:qx.core.Environment.select(w,{"true":{"extend":v,"statics":v,"members":v,"properties":v,"events":v},"default":null}),__gd:qx.core.Environment.select(w,{"true":function(name,bk){if(qx.core.Environment.get(w)){var bn=this.__gb;

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
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__hg:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__hg;
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
},addAdvice:function(o,p,q,name){this.__hg.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
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
(function(){var cV=';',cU='computed=this.',cT='=value;',cS='this.',cR="set",cQ="setThemed",cP="init",cO="setRuntime",cN='if(this.',cM='delete this.',bQ='!==undefined)',bP='}',bO="resetThemed",bN='else if(this.',bM="string",bL="qx.debug",bK='return this.',bJ="reset",bI='","',bH='",value);',dd="",de="refresh",db="boolean",dc="resetRuntime",cY='!==undefined){',da='=true;',cW="this.",cX=";",df='old=this.',dg="qx.propertyDebugLevel",cv='.$$properties.',cu="();",cx='else ',cw='if(old===undefined)old=this.',cz='old=computed=this.',cy='if(value===undefined)prop.error(this,2,"',cB="return this.",cA="get",ct='(value);',cs="(a[",n='if(old===computed)return value;',o='"), msg)',p='!(',q="value",r=' of an instance of ',s='var prop=qx.core.Property;',t='if(old===undefined)old=null;',u=')',v=' is not (yet) ready!");',w="]);",dv='!==inherit){',du='var msg = "Invalid incoming value for property \'',dt='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',ds='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',dz='value !== null && value.nodeType === 9 && value.documentElement',dy='===value)return value;',dx='value !== null && value.$$type === "Mixin"',dw='return init;',dB='var init=this.',dA=')prop.error(this,5,"',bh='value !== null && value.nodeType === 1 && value.attributes',bi="var parent = this.getLayoutParent();",bf="Error in property ",bg='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',bl="property",bm='.check.call(this, value)',bj='if((computed===undefined||computed===inherit)&&',bk='.validate.call(this, value);',bd='qx.core.Assert.assertInstance(value, Date, msg) || true',be='else{',O="if (!parent) return;",N=" in method ",Q='qx.core.Assert.assertInstance(value, Error, msg) || true',P='=computed;',K='Undefined value is not allowed!',J='(backup);',M='if(',L="MSIE 6.0",I='if(computed===inherit){',H="inherit",br='Is invalid!',bs='var computed, old=this.',bt='else if(computed===undefined)',bu="': ",bn=" of class ",bo='value !== null && value.nodeType !== undefined',bp='===undefined)return;',bq='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bv="')){",bw='qx.core.Assert.assertPositiveInteger(value, msg) || true',ba='else this.',Y='value=this.',X='if(init==qx.core.Property.$$inherit)init=null;',W='qx.core.Assert.assertInArray(value, ',V='value !== null && value.$$type === "Interface"',U='var inherit=prop.$$inherit;',T="', qx.event.type.Data, [computed, old]",S="var value = parent.",bc="$$useinit_",bb='computed=undefined;delete this.',bx="(value);",by='Requires exactly one argument!',bz='computed=value;',bA='}else{',bB="$$runtime_",bC='if(this.$$initialized)prop.error(this,0,"',bD='qx.core.Assert.assertInstance(value, qx.Class.getByName("',bE="$$user_",bF='if(value===null)prop.error(this,4,"',bG='){',bW='!',bV='qx.core.Assert.assertArray(value, msg) || true',bU='if(computed===undefined||computed===inherit){',bT='qx.core.Assert.assertPositiveNumber(value, msg) || true',cb=".prototype",ca="function",bY="Boolean",bX=")}",ce='(computed, old, "',cd='return value;',co='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cp="if(reg.hasListener(this, '",cm='Does not allow any arguments!',cn='\'";',ck=')a[i].',cl="()",ci=';}',cj="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cq='value !== null && value.$$type === "Theme"',cr='if(value!==null)',cF="var reg=qx.event.Registration;",cE="())",cH='return null;',cG='qx.core.Assert.assertObject(value, msg) || true',cJ='");',cI='qx.core.Assert.assertString(value, msg) || true',cL='!==undefined&&',cK='var pa=this.getLayoutParent();if(pa)computed=pa.',cD="if (value===undefined) value = parent.",cC='value !== null && value.$$type === "Class"',dn='qx.core.Assert.assertFunction(value, msg) || true',dp='var computed, old;',dq='var backup=computed;',dr=".",dj="object",dk="$$init_",dl='qx.core.Assert.assertInterface(value, qx.Interface.getByName("',dm="$$theme_",dh='if(computed===undefined)computed=null;',di='\' of class \'',m='if(arguments.length!==1)prop.error(this,1,"',k='qx.core.Assert.assertMap(value, msg) || true',j="qx.aspects",h='qx.core.Assert.assertNumber(value, msg) || true',g="reg.fireEvent(this, '",f='Null value is not allowed!',e='if(value!==inherit)',d='qx.core.Assert.assertInteger(value, msg) || true',c="rv:1.8.1",b="shorthand",z='qx.core.Assert.assertInstance(value, RegExp, msg) || true',A='value !== null && value.type !== undefined',x='value !== null && value.document',y='throw new Error("Property ',D="(!this.",E='qx.core.Assert.assertBoolean(value, msg) || true',B='if(a[i].',C='.check, msg)',F="toggle",G="$$inherit_",cf=" with incoming value '",cc='if(arguments.length!==0)prop.error(this,3,"',ch="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",cg='if(computed===undefined||computed==inherit)computed=null;',bS="qx.core.Property",bR="is",R='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(bS,{statics:{__fE:{"Boolean":E,"String":cI,"Number":h,"Integer":d,"PositiveNumber":bT,"PositiveInteger":bw,"Error":Q,"RegExp":z,"Object":cG,"Array":bV,"Map":k,"Function":dn,"Date":bd,"Node":bo,"Element":bh,"Document":dz,"Window":x,"Event":A,"Class":cC,"Mixin":dx,"Interface":V,"Theme":cq,"Color":dt,"Decorator":bq,"Font":ds},__fF:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:H,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bM,dereference:db,inheritable:db,nullable:db,themeable:db,refine:db,init:null,apply:bM,event:bM,check:null,transform:bM,deferredInit:db,validate:null},$$allowedGroupKeys:{name:bM,group:dj,mode:bM,themeable:db},$$inheritable:{},__fG:function(dC){var dD=this.__fH(dC);

if(!dD.length){var dE=function(){};
}else{dE=this.__fI(dD);
}dC.prototype.$$refreshInheritables=dE;
},__fH:function(dF){var dH=[];

while(dF){var dG=dF.$$properties;

if(dG){for(var name in this.$$inheritable){if(dG[name]&&dG[name].inheritable){dH.push(name);
}}}dF=dF.superclass;
}return dH;
},__fI:function(dI){var dM=this.$$store.inherit;
var dL=this.$$store.init;
var dK=this.$$method.refresh;
var dJ=[bi,O];

for(var i=0,l=dI.length;i<l;i++){var name=dI[i];
dJ.push(S,dM[name],cX,cD,dL[name],cX,cW,dK[name],bx);
}return new Function(dJ.join(dd));
},attachRefreshInheritables:function(dN){dN.prototype.$$refreshInheritables=function(){qx.core.Property.__fG(dN);
return this.$$refreshInheritables();
};
},attachMethods:function(dO,name,dP){dP.group?this.__fJ(dO,dP,name):this.__fK(dO,dP,name);
},__fJ:function(dQ,dR,name){var dY=qx.Bootstrap.firstUp(name);
var dX=dQ.prototype;
var ea=dR.themeable===true;

if(qx.core.Environment.get(bL)){if(qx.core.Environment.get(dg)>1){qx.Bootstrap.debug("Generating property group: "+name);
}}var eb=[];
var dU=[];

if(ea){var dS=[];
var dW=[];
}var dV=cj;
eb.push(dV);

if(ea){dS.push(dV);
}
if(dR.mode==b){var dT=ch;
eb.push(dT);

if(ea){dS.push(dT);
}}
for(var i=0,a=dR.group,l=a.length;i<l;i++){if(qx.core.Environment.get(bL)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}eb.push(cW,this.$$method.set[a[i]],cs,i,w);
dU.push(cW,this.$$method.reset[a[i]],cu);

if(ea){if(qx.core.Environment.get(bL)){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}dS.push(cW,this.$$method.setThemed[a[i]],cs,i,w);
dW.push(cW,this.$$method.resetThemed[a[i]],cu);
}}this.$$method.set[name]=cR+dY;
dX[this.$$method.set[name]]=new Function(eb.join(dd));
this.$$method.reset[name]=bJ+dY;
dX[this.$$method.reset[name]]=new Function(dU.join(dd));

if(ea){this.$$method.setThemed[name]=cQ+dY;
dX[this.$$method.setThemed[name]]=new Function(dS.join(dd));
this.$$method.resetThemed[name]=bO+dY;
dX[this.$$method.resetThemed[name]]=new Function(dW.join(dd));
}},__fK:function(ec,ed,name){var ef=qx.Bootstrap.firstUp(name);
var eh=ec.prototype;

if(qx.core.Environment.get(bL)){if(qx.core.Environment.get(dg)>1){qx.Bootstrap.debug("Generating property wrappers: "+name);
}}if(ed.dereference===undefined&&typeof ed.check===bM){ed.dereference=this.__fL(ed.check);
}var eg=this.$$method;
var ee=this.$$store;
ee.runtime[name]=bB+name;
ee.user[name]=bE+name;
ee.theme[name]=dm+name;
ee.init[name]=dk+name;
ee.inherit[name]=G+name;
ee.useinit[name]=bc+name;
eg.get[name]=cA+ef;
eh[eg.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,ec,name,cA);
};
eg.set[name]=cR+ef;
eh[eg.set[name]]=function(ei){return qx.core.Property.executeOptimizedSetter(this,ec,name,cR,arguments);
};
eg.reset[name]=bJ+ef;
eh[eg.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,ec,name,bJ);
};

if(ed.inheritable||ed.apply||ed.event||ed.deferredInit){eg.init[name]=cP+ef;
eh[eg.init[name]]=function(ej){return qx.core.Property.executeOptimizedSetter(this,ec,name,cP,arguments);
};
}
if(ed.inheritable){eg.refresh[name]=de+ef;
eh[eg.refresh[name]]=function(ek){return qx.core.Property.executeOptimizedSetter(this,ec,name,de,arguments);
};
}eg.setRuntime[name]=cO+ef;
eh[eg.setRuntime[name]]=function(el){return qx.core.Property.executeOptimizedSetter(this,ec,name,cO,arguments);
};
eg.resetRuntime[name]=dc+ef;
eh[eg.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,ec,name,dc);
};

if(ed.themeable){eg.setThemed[name]=cQ+ef;
eh[eg.setThemed[name]]=function(em){return qx.core.Property.executeOptimizedSetter(this,ec,name,cQ,arguments);
};
eg.resetThemed[name]=bO+ef;
eh[eg.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,ec,name,bO);
};
}
if(ed.check===bY){eh[F+ef]=new Function(cB+eg.set[name]+D+eg.get[name]+cE);
eh[bR+ef]=new Function(cB+eg.get[name]+cl);
}},__fL:function(en){return !!this.__fF[en];
},__fM:function(eo){return this.__fF[eo]||qx.Bootstrap.classIsDefined(eo)||(qx.Interface&&qx.Interface.isDefined(eo));
},__fN:{0:R,1:by,2:K,3:cm,4:f,5:br},error:function(ep,eq,er,es,et){var eu=ep.constructor.classname;
var ev=bf+er+bn+eu+N+this.$$method[es][er]+cf+et+bu;
throw new Error(ev+(this.__fN[eq]||"Unknown reason: "+eq));
},__fO:function(ew,ey,name,ez,eA,eB){var eC=this.$$method[ez][name];
if(qx.core.Environment.get(bL)){if(qx.core.Environment.get(dg)>1){qx.Bootstrap.debug("Code["+this.$$method[ez][name]+"]: "+eA.join(""));
}try{ey[eC]=new Function(q,eA.join(dd));
}catch(eD){throw new Error("Malformed generated code to unwrap method: "+this.$$method[ez][name]+"\n"+eA.join(""));
}}else{ey[eC]=new Function(q,eA.join(dd));
}if(qx.core.Environment.get(j)){ey[eC]=qx.core.Aspect.wrap(ew.classname+dr+eC,ey[eC],bl);
}qx.Bootstrap.setDisplayName(ey[eC],ew.classname+cb,eC);
if(eB===undefined){return ew[eC]();
}else if(qx.core.Environment.get(bL)){return ew[eC].apply(ew,eB);
}else{return ew[eC](eB[0]);
}},executeOptimizedGetter:function(eE,eF,name,eG){var eI=eF.$$properties[name];
var eK=eF.prototype;
var eH=[];
var eJ=this.$$store;
eH.push(cN,eJ.runtime[name],bQ);
eH.push(bK,eJ.runtime[name],cV);

if(eI.inheritable){eH.push(bN,eJ.inherit[name],bQ);
eH.push(bK,eJ.inherit[name],cV);
eH.push(cx);
}eH.push(cN,eJ.user[name],bQ);
eH.push(bK,eJ.user[name],cV);

if(eI.themeable){eH.push(bN,eJ.theme[name],bQ);
eH.push(bK,eJ.theme[name],cV);
}
if(eI.deferredInit&&eI.init===undefined){eH.push(bN,eJ.init[name],bQ);
eH.push(bK,eJ.init[name],cV);
}eH.push(cx);

if(eI.init!==undefined){if(eI.inheritable){eH.push(dB,eJ.init[name],cV);

if(eI.nullable){eH.push(X);
}else if(eI.init!==undefined){eH.push(bK,eJ.init[name],cV);
}else{eH.push(co,name,r,eF.classname,v);
}eH.push(dw);
}else{eH.push(bK,eJ.init[name],cV);
}}else if(eI.inheritable||eI.nullable){eH.push(cH);
}else{eH.push(y,name,r,eF.classname,v);
}return this.__fO(eE,eK,name,eG,eH);
},executeOptimizedSetter:function(eL,eM,name,eN,eO){var eT=eM.$$properties[name];
var eS=eM.prototype;
var eQ=[];
var eP=eN===cR||eN===cQ||eN===cO||(eN===cP&&eT.init===undefined);
var eR=eT.apply||eT.event||eT.inheritable;
var eU=this.__fP(eN,name);
this.__fQ(eQ,eT,name,eN,eP);

if(eP){this.__fR(eQ,eM,eT,name);
}
if(eR){this.__fS(eQ,eP,eU,eN);
}
if(eT.inheritable){eQ.push(U);
}
if(qx.core.Environment.get(bL)){if(eP){this.__fT(eQ,eT,eM,name,eN);
}}
if(!eR){this.__fU(eQ,name,eN,eP);
}else{this.__fV(eQ,eT,name,eN,eP);
}
if(eT.inheritable){this.__fW(eQ,eT,name,eN);
}else if(eR){this.__fX(eQ,eT,name,eN);
}
if(eR){this.__fY(eQ,eT,name);
if(eT.inheritable&&eS._getChildren){this.__ga(eQ,name);
}}if(eP){eQ.push(cd);
}return this.__fO(eL,eS,name,eN,eQ,eO);
},__fP:function(eV,name){if(eV===cO||eV===dc){var eW=this.$$store.runtime[name];
}else if(eV===cQ||eV===bO){eW=this.$$store.theme[name];
}else if(eV===cP){eW=this.$$store.init[name];
}else{eW=this.$$store.user[name];
}return eW;
},__fQ:function(eX,eY,name,fa,fb){if(qx.core.Environment.get(bL)){eX.push(s);

if(fa===cP){eX.push(bC,name,bI,fa,bH);
}
if(fa===de){}else if(fb){eX.push(m,name,bI,fa,bH);
eX.push(cy,name,bI,fa,bH);
}else{eX.push(cc,name,bI,fa,bH);
}}else{if(!eY.nullable||eY.check||eY.inheritable){eX.push(s);
}if(fa===cR){eX.push(cy,name,bI,fa,bH);
}}},__fR:function(fc,fd,fe,name){if(fe.transform){fc.push(Y,fe.transform,ct);
}if(fe.validate){if(typeof fe.validate===bM){fc.push(cS,fe.validate,ct);
}else if(fe.validate instanceof Function){fc.push(fd.classname,cv,name);
fc.push(bk);
}}},__fS:function(ff,fg,fh,fi){var fj=(fi===bJ||fi===bO||fi===dc);

if(fg){ff.push(cN,fh,dy);
}else if(fj){ff.push(cN,fh,bp);
}},__fT:qx.core.Environment.select(bL,{"true":function(fk,fl,fm,name,fn){if(!fl.nullable){fk.push(bF,name,bI,fn,bH);
}if(fl.check!==undefined){fk.push(du+name+di+fm.classname+cn);
if(fl.nullable){fk.push(cr);
}if(fl.inheritable){fk.push(e);
}fk.push(M);

if(this.__fE[fl.check]!==undefined){fk.push(p,this.__fE[fl.check],u);
}else if(qx.Class.isDefined(fl.check)){fk.push(bD,fl.check,o);
}else if(qx.Interface&&qx.Interface.isDefined(fl.check)){fk.push(dl,fl.check,o);
}else if(typeof fl.check===ca){fk.push(bW,fm.classname,cv,name);
fk.push(bm);
}else if(typeof fl.check===bM){fk.push(p,fl.check,u);
}else if(fl.check instanceof Array){fk.push(W,fm.classname,cv,name,C);
}else{throw new Error("Could not add check to property "+name+" of class "+fm.classname);
}fk.push(dA,name,bI,fn,bH);
}},"false":undefined}),__fU:function(fo,name,fp,fq){if(fp===cO){fo.push(cS,this.$$store.runtime[name],cT);
}else if(fp===dc){fo.push(cN,this.$$store.runtime[name],bQ);
fo.push(cM,this.$$store.runtime[name],cV);
}else if(fp===cR){fo.push(cS,this.$$store.user[name],cT);
}else if(fp===bJ){fo.push(cN,this.$$store.user[name],bQ);
fo.push(cM,this.$$store.user[name],cV);
}else if(fp===cQ){fo.push(cS,this.$$store.theme[name],cT);
}else if(fp===bO){fo.push(cN,this.$$store.theme[name],bQ);
fo.push(cM,this.$$store.theme[name],cV);
}else if(fp===cP&&fq){fo.push(cS,this.$$store.init[name],cT);
}},__fV:function(fr,fs,name,ft,fu){if(fs.inheritable){fr.push(bs,this.$$store.inherit[name],cV);
}else{fr.push(dp);
}fr.push(cN,this.$$store.runtime[name],cY);

if(ft===cO){fr.push(cU,this.$$store.runtime[name],cT);
}else if(ft===dc){fr.push(cM,this.$$store.runtime[name],cV);
fr.push(cN,this.$$store.user[name],bQ);
fr.push(cU,this.$$store.user[name],cV);
fr.push(bN,this.$$store.theme[name],bQ);
fr.push(cU,this.$$store.theme[name],cV);
fr.push(bN,this.$$store.init[name],cY);
fr.push(cU,this.$$store.init[name],cV);
fr.push(cS,this.$$store.useinit[name],da);
fr.push(bP);
}else{fr.push(cz,this.$$store.runtime[name],cV);
if(ft===cR){fr.push(cS,this.$$store.user[name],cT);
}else if(ft===bJ){fr.push(cM,this.$$store.user[name],cV);
}else if(ft===cQ){fr.push(cS,this.$$store.theme[name],cT);
}else if(ft===bO){fr.push(cM,this.$$store.theme[name],cV);
}else if(ft===cP&&fu){fr.push(cS,this.$$store.init[name],cT);
}}fr.push(bP);
fr.push(bN,this.$$store.user[name],cY);

if(ft===cR){if(!fs.inheritable){fr.push(df,this.$$store.user[name],cV);
}fr.push(cU,this.$$store.user[name],cT);
}else if(ft===bJ){if(!fs.inheritable){fr.push(df,this.$$store.user[name],cV);
}fr.push(cM,this.$$store.user[name],cV);
fr.push(cN,this.$$store.runtime[name],bQ);
fr.push(cU,this.$$store.runtime[name],cV);
fr.push(cN,this.$$store.theme[name],bQ);
fr.push(cU,this.$$store.theme[name],cV);
fr.push(bN,this.$$store.init[name],cY);
fr.push(cU,this.$$store.init[name],cV);
fr.push(cS,this.$$store.useinit[name],da);
fr.push(bP);
}else{if(ft===cO){fr.push(cU,this.$$store.runtime[name],cT);
}else if(fs.inheritable){fr.push(cU,this.$$store.user[name],cV);
}else{fr.push(cz,this.$$store.user[name],cV);
}if(ft===cQ){fr.push(cS,this.$$store.theme[name],cT);
}else if(ft===bO){fr.push(cM,this.$$store.theme[name],cV);
}else if(ft===cP&&fu){fr.push(cS,this.$$store.init[name],cT);
}}fr.push(bP);
if(fs.themeable){fr.push(bN,this.$$store.theme[name],cY);

if(!fs.inheritable){fr.push(df,this.$$store.theme[name],cV);
}
if(ft===cO){fr.push(cU,this.$$store.runtime[name],cT);
}else if(ft===cR){fr.push(cU,this.$$store.user[name],cT);
}else if(ft===cQ){fr.push(cU,this.$$store.theme[name],cT);
}else if(ft===bO){fr.push(cM,this.$$store.theme[name],cV);
fr.push(cN,this.$$store.init[name],cY);
fr.push(cU,this.$$store.init[name],cV);
fr.push(cS,this.$$store.useinit[name],da);
fr.push(bP);
}else if(ft===cP){if(fu){fr.push(cS,this.$$store.init[name],cT);
}fr.push(cU,this.$$store.theme[name],cV);
}else if(ft===de){fr.push(cU,this.$$store.theme[name],cV);
}fr.push(bP);
}fr.push(bN,this.$$store.useinit[name],bG);

if(!fs.inheritable){fr.push(df,this.$$store.init[name],cV);
}
if(ft===cP){if(fu){fr.push(cU,this.$$store.init[name],cT);
}else{fr.push(cU,this.$$store.init[name],cV);
}}else if(ft===cR||ft===cO||ft===cQ||ft===de){fr.push(cM,this.$$store.useinit[name],cV);

if(ft===cO){fr.push(cU,this.$$store.runtime[name],cT);
}else if(ft===cR){fr.push(cU,this.$$store.user[name],cT);
}else if(ft===cQ){fr.push(cU,this.$$store.theme[name],cT);
}else if(ft===de){fr.push(cU,this.$$store.init[name],cV);
}}fr.push(bP);
if(ft===cR||ft===cO||ft===cQ||ft===cP){fr.push(be);

if(ft===cO){fr.push(cU,this.$$store.runtime[name],cT);
}else if(ft===cR){fr.push(cU,this.$$store.user[name],cT);
}else if(ft===cQ){fr.push(cU,this.$$store.theme[name],cT);
}else if(ft===cP){if(fu){fr.push(cU,this.$$store.init[name],cT);
}else{fr.push(cU,this.$$store.init[name],cV);
}fr.push(cS,this.$$store.useinit[name],da);
}fr.push(bP);
}},__fW:function(fv,fw,name,fx){fv.push(bU);

if(fx===de){fv.push(bz);
}else{fv.push(cK,this.$$store.inherit[name],cV);
}fv.push(bj);
fv.push(cS,this.$$store.init[name],cL);
fv.push(cS,this.$$store.init[name],dv);
fv.push(cU,this.$$store.init[name],cV);
fv.push(cS,this.$$store.useinit[name],da);
fv.push(bA);
fv.push(cM,this.$$store.useinit[name],ci);
fv.push(bP);
fv.push(n);
fv.push(I);
fv.push(bb,this.$$store.inherit[name],cV);
fv.push(bP);
fv.push(bt);
fv.push(cM,this.$$store.inherit[name],cV);
fv.push(ba,this.$$store.inherit[name],P);
fv.push(dq);
if(fw.init!==undefined&&fx!==cP){fv.push(cw,this.$$store.init[name],cX);
}else{fv.push(t);
}fv.push(cg);
},__fX:function(fy,fz,name,fA){if(fA!==cR&&fA!==cO&&fA!==cQ){fy.push(dh);
}fy.push(n);
if(fz.init!==undefined&&fA!==cP){fy.push(cw,this.$$store.init[name],cX);
}else{fy.push(t);
}},__fY:function(fB,fC,name){if(fC.apply){fB.push(cS,fC.apply,ce,name,cJ);
}if(fC.event){fB.push(cF,cp,fC.event,bv,g,fC.event,T,bX);
}},__ga:function(fD,name){fD.push(bg);
fD.push(B,this.$$method.refresh[name],ck,this.$$method.refresh[name],J);
fD.push(bP);
}},defer:function(fE){var fG=navigator.userAgent.indexOf(L)!=-1;
var fF=navigator.userAgent.indexOf(c)!=-1;
if(fG||fF){fE.__fL=fE.__fM;
}}});
})();
(function(){var m="qx.debug",k=".",j="object",h="qx.aspects",g="static",f="function",e="Array",d="string",c="abstract",b="singleton",M="constructor",L="_",K=".prototype",J="environment",I="$$init_",H="extend",G="init",F="qx.event.type.Data",E="refine",D="members",t="variants",u="properties",r="statics",s="toString",p="events",q="member",n="]",o="Class",v="Interface",w="qx.Class",y="Mixin",x="settings",A='Assumed static class because no "extend" key was found. ',z="[Class ",C="destructor",B="destruct";
qx.Bootstrap.define(w,{statics:{define:function(name,N){if(!N){var N={};
}if(N.include&&!(qx.Bootstrap.getClass(N.include)===e)){N.include=[N.include];
}if(N.implement&&!(qx.Bootstrap.getClass(N.implement)===e)){N.implement=[N.implement];
}var O=false;

if(!N.hasOwnProperty(H)&&!N.type){N.type=g;
O=true;
}if(qx.core.Environment.get(m)){try{this.__gd(name,N);
}catch(R){if(O){R.message=A+R.message;
}throw R;
}}var P=this.__gf(name,N.type,N.extend,N.statics,N.construct,N.destruct,N.include);
if(N.extend){if(N.properties){this.__gh(P,N.properties,true);
}if(N.members){this.__gj(P,N.members,true,true,false);
}if(N.events){this.__gg(P,N.events,true);
}if(N.include){for(var i=0,l=N.include.length;i<l;i++){this.__gn(P,N.include[i],false);
}}}if(N.environment){for(var Q in N.environment){qx.core.Environment.add(Q,N.environment[Q]);
}}if(N.implement){for(var i=0,l=N.implement.length;i<l;i++){this.__gl(P,N.implement[i]);
}}
if(qx.core.Environment.get(m)){this.__ge(P);
}if(N.defer){N.defer.self=P;
N.defer(P,P.prototype,{add:function(name,S){var T={};
T[name]=S;
qx.Class.__gh(P,T,true);
}});
}return P;
},undefine:function(name){delete this.$$registry[name];
var U=name.split(k);
var W=[window];

for(var i=0;i<U.length;i++){W.push(W[i][U[i]]);
}for(var i=W.length-1;i>=1;i--){var V=W[i];
var parent=W[i-1];

if(qx.Bootstrap.isFunction(V)||qx.Bootstrap.objectGetLength(V)===0){delete parent[U[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(X,Y){if(qx.core.Environment.get(m)){if(!Y){throw new Error("The mixin to include into class '"+X.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(Y,X);
}qx.Class.__gn(X,Y,false);
},patch:function(ba,bb){if(qx.core.Environment.get(m)){if(!bb){throw new Error("The mixin to patch class '"+ba.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(bb,ba);
}qx.Class.__gn(ba,bb,true);
},isSubClassOf:function(bc,bd){if(!bc){return false;
}
if(bc==bd){return true;
}
if(bc.prototype instanceof bd){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(be){var bf=[];

while(be){if(be.$$properties){bf.push.apply(bf,qx.Bootstrap.getKeys(be.$$properties));
}be=be.superclass;
}return bf;
},getByProperty:function(bg,name){while(bg){if(bg.$$properties&&bg.$$properties[name]){return bg;
}bg=bg.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bh,bi){return bh.$$includes&&bh.$$includes.indexOf(bi)!==-1;
},getByMixin:function(bj,bk){var bl,i,l;

while(bj){if(bj.$$includes){bl=bj.$$flatIncludes;

for(i=0,l=bl.length;i<l;i++){if(bl[i]===bk){return bj;
}}}bj=bj.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bm,bn){return !!this.getByMixin(bm,bn);
},hasOwnInterface:function(bo,bp){return bo.$$implements&&bo.$$implements.indexOf(bp)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bq){var br=[];

while(bq){if(bq.$$implements){br.push.apply(br,bq.$$flatImplements);
}bq=bq.superclass;
}return br;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bs,bt){var bu=bs.constructor;

if(this.hasInterface(bu,bt)){return true;
}
try{qx.Interface.assertObject(bs,bt);
return true;
}catch(bv){}
try{qx.Interface.assert(bu,bt,false);
return true;
}catch(bw){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return z+this.classname+n;
},$$registry:qx.Bootstrap.$$registry,__gb:qx.core.Environment.select(m,{"true":{"type":d,"extend":f,"implement":j,"include":j,"construct":f,"statics":j,"properties":j,"members":j,"environment":j,"events":j,"defer":f,"destruct":f},"default":null}),__gc:qx.core.Environment.select(m,{"true":{"type":d,"statics":j,"environment":j,"defer":f},"default":null}),__gd:qx.core.Environment.select(m,{"true":function(name,bx){if(bx.type&&!(bx.type===g||bx.type===c||bx.type===b)){throw new Error('Invalid type "'+bx.type+'" definition for class "'+name+'"!');
}if(bx.type&&bx.type!==g&&!bx.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var bA=bx.type===g?this.__gc:this.__gb;

for(var bz in bx){if(!bA[bz]){throw new Error('The configuration key "'+bz+'" in class "'+name+'" is not allowed!');
}
if(bx[bz]==null){throw new Error('Invalid key "'+bz+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof bx[bz]!==bA[bz]){throw new Error('Invalid type of key "'+bz+'" in class "'+name+'"! The type of the key must be "'+bA[bz]+'"!');
}}var by=[r,u,D,J,x,t,p];

for(var i=0,l=by.length;i<l;i++){var bz=by[i];

if(bx[bz]!==undefined&&(bx[bz].$$hash!==undefined||!qx.Bootstrap.isObject(bx[bz]))){throw new Error('Invalid key "'+bz+'" in class "'+name+'"! The value needs to be a map!');
}}if(bx.include){if(qx.Bootstrap.getClass(bx.include)===e){for(var i=0,a=bx.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==y){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(bx.implement){if(qx.Bootstrap.getClass(bx.implement)===e){for(var i=0,a=bx.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==v){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(bx.include){try{qx.Mixin.checkCompatibility(bx.include);
}catch(bB){throw new Error('Error in include definition of class "'+name+'"! '+bB.message);
}}if(bx.environment){for(var bz in bx.environment){if(bz.substr(0,bz.indexOf(k))!=name.substr(0,name.indexOf(k))){throw new Error('Forbidden environment setting "'+bz+'" found in "'+name+'". It is forbidden to define a '+'environment setting for an external namespace!');
}}}if(bx.settings){for(var bz in bx.settings){if(bz.substr(0,bz.indexOf(k))!=name.substr(0,name.indexOf(k))){throw new Error('Forbidden setting "'+bz+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(bx.variants){for(var bz in bx.variants){if(bz.substr(0,bz.indexOf(k))!=name.substr(0,name.indexOf(k))){throw new Error('Forbidden variant "'+bz+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__ge:qx.core.Environment.select(m,{"true":function(bC){var bE=bC.superclass;

while(bE){if(bE.$$classtype!==c){break;
}var bD=bE.$$implements;

if(bD){for(var i=0;i<bD.length;i++){qx.Interface.assert(bC,bD[i],true);
}}bE=bE.superclass;
}},"default":function(){}}),__gf:function(name,bF,bG,bH,bI,bJ,bK){var bN;

if(!bG&&qx.core.Environment.get(h)==false){bN=bH||{};
qx.Bootstrap.setDisplayNames(bN,name);
}else{var bN={};

if(bG){if(!bI){bI=this.__go();
}
if(this.__gq(bG,bK)){bN=this.__gr(bI,name,bF);
}else{bN=bI;
}if(bF===b){bN.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bI,name,M);
}if(bH){qx.Bootstrap.setDisplayNames(bH,name);
var bO;

for(var i=0,a=qx.Bootstrap.getKeys(bH),l=a.length;i<l;i++){bO=a[i];
var bL=bH[bO];

if(qx.core.Environment.get(h)){if(bL instanceof Function){bL=qx.core.Aspect.wrap(name+k+bO,bL,g);
}bN[bO]=bL;
}else{bN[bO]=bL;
}}}}var bM=qx.Bootstrap.createNamespace(name,bN);
bN.name=bN.classname=name;
bN.basename=bM;
bN.$$type=o;

if(bF){bN.$$classtype=bF;
}if(!bN.hasOwnProperty(s)){bN.toString=this.genericToString;
}
if(bG){qx.Bootstrap.extendClass(bN,bI,bG,name,bM);
if(bJ){if(qx.core.Environment.get(h)){bJ=qx.core.Aspect.wrap(name,bJ,C);
}bN.$$destructor=bJ;
qx.Bootstrap.setDisplayName(bJ,name,B);
}}this.$$registry[name]=bN;
return bN;
},__gg:function(bP,bQ,bR){if(qx.core.Environment.get(m)){if(typeof bQ!==j||qx.Bootstrap.getClass(bQ)===e){throw new Error(bP.classname+": the events must be defined as map!");
}
for(var bS in bQ){if(typeof bQ[bS]!==d){throw new Error(bP.classname+"/"+bS+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(bP.$$events&&bR!==true){for(var bS in bQ){if(bP.$$events[bS]!==undefined&&bP.$$events[bS]!==bQ[bS]){throw new Error(bP.classname+"/"+bS+": the event value/type cannot be changed from "+bP.$$events[bS]+" to "+bQ[bS]);
}}}}
if(bP.$$events){for(var bS in bQ){bP.$$events[bS]=bQ[bS];
}}else{bP.$$events=bQ;
}},__gh:function(bT,bU,bV){var bW;

if(bV===undefined){bV=false;
}var bX=bT.prototype;

for(var name in bU){bW=bU[name];
if(qx.core.Environment.get(m)){this.__gi(bT,name,bW,bV);
}bW.name=name;
if(!bW.refine){if(bT.$$properties===undefined){bT.$$properties={};
}bT.$$properties[name]=bW;
}if(bW.init!==undefined){bT.prototype[I+name]=bW.init;
}if(bW.event!==undefined){var event={};
event[bW.event]=F;
this.__gg(bT,event,bV);
}if(bW.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bX.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bT);
}}
if(!bW.refine){qx.core.Property.attachMethods(bT,name,bW);
}}},__gi:qx.core.Environment.select(m,{"true":function(bY,name,ca,cb){var cd=this.hasProperty(bY,name);

if(cd){var cc=this.getPropertyDefinition(bY,name);

if(ca.refine&&cc.init===undefined){throw new Error("Could not refine an init value if there was previously no init value defined. Property '"+name+"' of class '"+bY.classname+"'.");
}}
if(!cd&&ca.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+bY.classname+"'!");
}
if(cd&&!cb){throw new Error("Class "+bY.classname+" already has a property: "+name+"!");
}
if(cd&&cb){if(!ca.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+bY.classname+', original class: '+this.getByProperty(bY,name).classname+'.');
}
for(var ce in ca){if(ce!==G&&ce!==E){throw new Error("Class "+bY.classname+" could not refine property: "+name+"! Key: "+ce+" could not be refined!");
}}}var cf=ca.group?qx.core.Property.$$allowedGroupKeys:qx.core.Property.$$allowedKeys;

for(var ce in ca){if(cf[ce]===undefined){throw new Error('The configuration key "'+ce+'" of property "'+name+'" in class "'+bY.classname+'" is not allowed!');
}
if(ca[ce]===undefined){throw new Error('Invalid key "'+ce+'" of property "'+name+'" in class "'+bY.classname+'"! The value is undefined: '+ca[ce]);
}
if(cf[ce]!==null&&typeof ca[ce]!==cf[ce]){throw new Error('Invalid type of key "'+ce+'" of property "'+name+'" in class "'+bY.classname+'"! The type of the key must be "'+cf[ce]+'"!');
}}
if(ca.transform!=null){if(!(typeof ca.transform==d)){throw new Error('Invalid transform definition of property "'+name+'" in class "'+bY.classname+'"! Needs to be a String.');
}}
if(ca.check!=null){if(!qx.Bootstrap.isString(ca.check)&&!qx.Bootstrap.isArray(ca.check)&&!qx.Bootstrap.isFunction(ca.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+bY.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__gj:function(cg,ch,ci,cj,ck){var cl=cg.prototype;
var cn,cm;
qx.Bootstrap.setDisplayNames(ch,cg.classname+K);

for(var i=0,a=qx.Bootstrap.getKeys(ch),l=a.length;i<l;i++){cn=a[i];
cm=ch[cn];

if(qx.core.Environment.get(m)){if(cl[cn]!==undefined&&cn.charAt(0)==L&&cn.charAt(1)==L){throw new Error('Overwriting private member "'+cn+'" of Class "'+cg.classname+'" is not allowed!');
}
if(ci!==true&&cl.hasOwnProperty(cn)){throw new Error('Overwriting member "'+cn+'" of Class "'+cg.classname+'" is not allowed!');
}}if(cj!==false&&cm instanceof Function&&cm.$$type==null){if(ck==true){cm=this.__gk(cm,cl[cn]);
}else{if(cl[cn]){cm.base=cl[cn];
}cm.self=cg;
}
if(qx.core.Environment.get(h)){cm=qx.core.Aspect.wrap(cg.classname+k+cn,cm,q);
}}cl[cn]=cm;
}},__gk:function(co,cp){if(cp){return function(){var cr=co.base;
co.base=cp;
var cq=co.apply(this,arguments);
co.base=cr;
return cq;
};
}else{return co;
}},__gl:function(cs,ct){if(qx.core.Environment.get(m)){if(!cs||!ct){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(cs,ct)){throw new Error('Interface "'+ct.name+'" is already used by Class "'+cs.classname+'!');
}if(cs.$$classtype!==c){qx.Interface.assert(cs,ct,true);
}}var cu=qx.Interface.flatten([ct]);

if(cs.$$implements){cs.$$implements.push(ct);
cs.$$flatImplements.push.apply(cs.$$flatImplements,cu);
}else{cs.$$implements=[ct];
cs.$$flatImplements=cu;
}},__gm:function(cv){var name=cv.classname;
var cw=this.__gr(cv,name,cv.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(cv),l=a.length;i<l;i++){cx=a[i];
cw[cx]=cv[cx];
}cw.prototype=cv.prototype;
var cz=cv.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(cz),l=a.length;i<l;i++){cx=a[i];
var cA=cz[cx];
if(cA&&cA.self==cv){cA.self=cw;
}}for(var cx in this.$$registry){var cy=this.$$registry[cx];

if(!cy){continue;
}
if(cy.base==cv){cy.base=cw;
}
if(cy.superclass==cv){cy.superclass=cw;
}
if(cy.$$original){if(cy.$$original.base==cv){cy.$$original.base=cw;
}
if(cy.$$original.superclass==cv){cy.$$original.superclass=cw;
}}}qx.Bootstrap.createNamespace(name,cw);
this.$$registry[name]=cw;
return cw;
},__gn:function(cB,cC,cD){if(qx.core.Environment.get(m)){if(!cB||!cC){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(cB,cC)){return;
}var cG=cB.$$original;

if(cC.$$constructor&&!cG){cB=this.__gm(cB);
}var cF=qx.Mixin.flatten([cC]);
var cE;

for(var i=0,l=cF.length;i<l;i++){cE=cF[i];
if(cE.$$events){this.__gg(cB,cE.$$events,cD);
}if(cE.$$properties){this.__gh(cB,cE.$$properties,cD);
}if(cE.$$members){this.__gj(cB,cE.$$members,cD,cD,cD);
}}if(cB.$$includes){cB.$$includes.push(cC);
cB.$$flatIncludes.push.apply(cB.$$flatIncludes,cF);
}else{cB.$$includes=[cC];
cB.$$flatIncludes=cF;
}},__go:function(){function cH(){cH.base.apply(this,arguments);
}return cH;
},__gp:function(){return function(){};
},__gq:function(cI,cJ){if(qx.core.Environment.get(m)){return true;
}if(cI&&cI.$$includes){var cK=cI.$$flatIncludes;

for(var i=0,l=cK.length;i<l;i++){if(cK[i].$$constructor){return true;
}}}if(cJ){var cL=qx.Mixin.flatten(cJ);

for(var i=0,l=cL.length;i<l;i++){if(cL[i].$$constructor){return true;
}}}return false;
},__gr:function(cM,name,cN){var cP=function(){var cS=cP;

if(qx.core.Environment.get(m)){if(!(this instanceof cS)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(cN===c){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(cN===b){if(!cS.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}var cR=cS.$$original.apply(this,arguments);
if(cS.$$includes){var cQ=cS.$$flatIncludes;

for(var i=0,l=cQ.length;i<l;i++){if(cQ[i].$$constructor){cQ[i].$$constructor.apply(this,arguments);
}}}
if(qx.core.Environment.get(m)){if(this.classname===name){this.$$initialized=true;
}}return cR;
};

if(qx.core.Environment.get(h)){var cO=qx.core.Aspect.wrap(name,cP,M);
cP.$$original=cM;
cP.constructor=cO;
cP=cO;
}cP.$$original=cM;
cM.wrapper=cP;
return cP;
}},defer:function(){if(qx.core.Environment.get(h)){for(var cT in qx.Bootstrap.$$registry){var cU=qx.Bootstrap.$$registry[cT];

for(var cV in cU){if(cU[cV] instanceof Function){cU[cV]=qx.core.Aspect.wrap(cT+k+cV,cU[cV],g);
}}}}}});
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
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var h="qx.debug",g="$$hash",f="-",e="",d="qx.core.ObjectRegistry",c="-0";
qx.Class.define(d,{statics:{inShutDown:false,__hg:{},__hh:0,__hi:[],__hj:e,register:function(j){var n=this.__hg;

if(!n){return;
}var m=j.$$hash;

if(m==null){var k=this.__hi;

if(k.length>0){m=k.pop();
}else{m=(this.__hh++)+this.__hj;
}j.$$hash=m;
}
if(qx.core.Environment.get(h)){if(!j.dispose){throw new Error("Invalid object: "+j);
}}n[m]=j;
},unregister:function(o){var p=o.$$hash;

if(p==null){return;
}var q=this.__hg;

if(q&&q[p]){delete q[p];
this.__hi.push(p);
}try{delete o.$$hash;
}catch(r){if(o.removeAttribute){o.removeAttribute(g);
}}},toHashCode:function(s){if(qx.core.Environment.get(h)){if(s==null){throw new Error("Invalid object: "+s);
}}var u=s.$$hash;

if(u!=null){return u;
}var t=this.__hi;

if(t.length>0){u=t.pop();
}else{u=(this.__hh++)+this.__hj;
}return s.$$hash=u;
},clearHashCode:function(v){if(qx.core.Environment.get(h)){if(v==null){throw new Error("Invalid object: "+v);
}}var w=v.$$hash;

if(w!=null){this.__hi.push(w);
try{delete v.$$hash;
}catch(x){if(v.removeAttribute){v.removeAttribute(g);
}}}},fromHashCode:function(y){return this.__hg[y]||null;
},shutdown:function(){this.inShutDown=true;
var A=this.__hg;
var C=[];

for(var B in A){C.push(B);
}C.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var z,i=0,l=C.length;

while(true){try{for(;i<l;i++){B=C[i];
z=A[B];

if(z&&z.dispose){z.dispose();
}}}catch(D){qx.Bootstrap.error(this,"Could not dispose object "+z.toString()+": "+D);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__hg;
},getRegistry:function(){return this.__hg;
}},defer:function(E){if(window&&window.top){var frames=window.top.frames;

for(var i=0;i<frames.length;i++){if(frames[i]===window){E.__hj=f+(i+1);
return;
}}}E.__hj=c;
}});
})();
(function(){var k="on",j="engine.name",i="gecko",h="engine.version",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:function(l,m,n,o){if(l.addEventListener){l.addEventListener(m,n,!!o);
}else if(l.attachEvent){l.attachEvent(k+m,n);
}},removeNativeListener:function(p,q,r,s){if(p.removeEventListener){p.removeEventListener(q,r,!!s);
}else if(p.detachEvent){try{p.detachEvent(k+q,r);
}catch(e){if(e.number!==-2146828218){throw e;
}}}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(j)==i)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===b){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((qx.core.Environment.get(j)==i)&&parseFloat(qx.core.Environment.get(h))>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if((qx.core.Environment.get(j)==i)&&parseFloat(qx.core.Environment.get(h))<1.9){try{e.keyCode=0;
}catch(t){}}}else{try{e.keyCode=0;
}catch(u){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(v,w){if(document.createEvent){var x=document.createEvent(a);
x.initEvent(w,true,true);
return !v.dispatchEvent(x);
}else{var x=document.createEventObject();
return v.fireEvent(k+w,x);
}},supportsEvent:qx.core.Environment.select(j,{"webkit":function(y,z){return y.hasOwnProperty(k+z);
},"default":function(A,B){var C=k+B;
var D=(C in A);

if(!D){D=typeof A[C]==g;

if(!D&&A.setAttribute){A.setAttribute(C,c);
D=typeof A[C]==g;
A.removeAttribute(C);
}}return D;
}})}});
})();
(function(){var k="qx.debug",j="|bubble",h="|capture",g="|",f="': ",e="'",d="",c="_",b="Invalid Target.",a="Invalid capture flag.",J="Invalid event type.",I=" from the target '",H="Invalid callback function",G="Invalid event target.",F="unload",E="Failed to remove event listener for id '",D="Invalid context for callback.",C="Failed to add event listener for type '",B="UNKNOWN_",A="capture",s="__jy",t="qx.event.Manager",q="' on target '",r="Could not dispatch event '",o="DOM_",p="QX_",m=" to the target '",n="Failed to remove event listener for type '",u="Invalid id type.",v="__jz",x="c",w="DOCUMENT_",z="WIN_",y="Invalid event object.";
qx.Class.define(t,{extend:Object,construct:function(K,L){this.__cp=K;
this.__jH=qx.core.ObjectRegistry.toHashCode(K);
this.__cT=L;
if(K.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(K,F,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(K,F,arguments.callee);
self.dispose();
}));
}this.__jI={};
this.__jy={};
this.__jz={};
this.__jJ={};
},statics:{__jK:0,getNextUniqueId:function(){return (this.__jK++)+d;
}},members:{__cT:null,__jI:null,__jz:null,__jL:null,__jy:null,__jJ:null,__cp:null,__jH:null,getWindow:function(){return this.__cp;
},getWindowId:function(){return this.__jH;
},getHandler:function(M){var N=this.__jy[M.classname];

if(N){return N;
}return this.__jy[M.classname]=new M(this);
},getDispatcher:function(O){var P=this.__jz[O.classname];

if(P){return P;
}return this.__jz[O.classname]=new O(this,this.__cT);
},getListeners:function(Q,R,S){var T=Q.$$hash||qx.core.ObjectRegistry.toHashCode(Q);
var V=this.__jI[T];

if(!V){return null;
}var W=R+(S?h:j);
var U=V[W];
return U?U.concat():null;
},serializeListeners:function(X){var bf=X.$$hash||qx.core.ObjectRegistry.toHashCode(X);
var bh=this.__jI[bf];
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
var bq=this.__jI[bo];

if(bq){var bl,bp,bk,bm;

for(var bn in bq){bl=bn.indexOf(g);
bp=bn.substring(0,bl);
bk=bn.charCodeAt(bl+1)===99;
bm=bq[bn];

if(bj){this.__jM(bi,bp,bk);
}else{this.__jN(bi,bp,bk);
}}}},hasListener:function(br,bs,bt){if(qx.core.Environment.get(k)){if(br==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+br);
}}var bu=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);
var bw=this.__jI[bu];

if(!bw){return false;
}var bx=bs+(bt?h:j);
var bv=bw[bx];
return !!(bv&&bv.length>0);
},importListeners:function(by,bz){if(qx.core.Environment.get(k)){if(by==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+by);
}}var bF=by.$$hash||qx.core.ObjectRegistry.toHashCode(by);
var bG=this.__jI[bF]={};
var bC=qx.event.Manager;

for(var bA in bz){var bD=bz[bA];
var bE=bD.type+(bD.capture?h:j);
var bB=bG[bE];

if(!bB){bB=bG[bE]=[];
this.__jM(by,bD.type,bD.capture);
}bB.push({handler:bD.listener,context:bD.self,unique:bD.unique||(bC.__jK++)+d});
}},addListener:function(bH,bI,bJ,self,bK){if(qx.core.Environment.get(k)){var bO=C+bI+e+m+bH.classname+f;
qx.core.Assert.assertObject(bH,bO+b);
qx.core.Assert.assertString(bI,bO+J);
qx.core.Assert.assertFunction(bJ,bO+H);

if(bK!==undefined){qx.core.Assert.assertBoolean(bK,a);
}}var bP=bH.$$hash||qx.core.ObjectRegistry.toHashCode(bH);
var bR=this.__jI[bP];

if(!bR){bR=this.__jI[bP]={};
}var bN=bI+(bK?h:j);
var bM=bR[bN];

if(!bM){bM=bR[bN]=[];
}if(bM.length===0){this.__jM(bH,bI,bK);
}var bQ=(qx.event.Manager.__jK++)+d;
var bL={handler:bJ,context:self,unique:bQ};
bM.push(bL);
return bN+g+bQ;
},findHandler:function(bS,bT){var cg=false,bX=false,ch=false,bU=false;
var ce;

if(bS.nodeType===1){cg=true;
ce=o+bS.tagName.toLowerCase()+c+bT;
}else if(bS.nodeType===9){bU=true;
ce=w+bT;
}else if(bS==this.__cp){bX=true;
ce=z+bT;
}else if(bS.classname){ch=true;
ce=p+bS.classname+c+bT;
}else{ce=B+bS+c+bT;
}var ca=this.__jJ;

if(ca[ce]){return ca[ce];
}var cd=this.__cT.getHandlers();
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
},__jM:function(ci,cj,ck){var cl=this.findHandler(ci,cj);

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
var cv=this.__jI[cu];

if(!cv){return false;
}var cq=cn+(cp?h:j);
var cr=cv[cq];

if(!cr){return false;
}var cs;

for(var i=0,l=cr.length;i<l;i++){cs=cr[i];

if(cs.handler===co&&cs.context===self){qx.lang.Array.removeAt(cr,i);

if(cr.length==0){this.__jN(cm,cn,cp);
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
var cH=this.__jI[cE];

if(!cH){return false;
}var cC=cG+(cy?h:j);
var cA=cH[cC];

if(!cA){return false;
}var cz;

for(var i=0,l=cA.length;i<l;i++){cz=cA[i];

if(cz.unique===cF){qx.lang.Array.removeAt(cA,i);

if(cA.length==0){this.__jN(cw,cG,cy);
}return true;
}}return false;
},removeAllListeners:function(cI){var cM=cI.$$hash||qx.core.ObjectRegistry.toHashCode(cI);
var cO=this.__jI[cM];

if(!cO){return false;
}var cK,cN,cJ;

for(var cL in cO){if(cO[cL].length>0){cK=cL.split(g);
cN=cK[0];
cJ=cK[1]===A;
this.__jN(cI,cN,cJ);
}}delete this.__jI[cM];
return true;
},deleteAllListeners:function(cP){delete this.__jI[cP];
},__jN:function(cQ,cR,cS){var cT=this.findHandler(cQ,cR);

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
}var cY=this.__cT.getDispatchers();
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
},dispose:function(){this.__cT.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,s);
qx.util.DisposeUtil.disposeMap(this,v);
this.__jI=this.__cp=this.__jL=null;
this.__cT=this.__jJ=null;
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
(function(){var d="qx.dom.Node",c="engine.name",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(e){return e.nodeType===
this.DOCUMENT?e:
e.ownerDocument||e.document;
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
}}else{bk=bm[br];

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
(function(){var k="qx.debug",j="Invalid event target.",i="Invalid event dispatcher!",h="': ",g="Invalid event handler.",f="' on target '",e="Could not fire event '",d="undefined",c="qx.event.Registration";
qx.Class.define(c,{statics:{__jx:{},getManager:function(l){if(l==null){if(qx.core.Environment.get(k)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}l=window;
}else if(l.nodeType){l=qx.dom.Node.getWindow(l);
}else if(!qx.dom.Node.isWindow(l)){l=window;
}var n=l.$$hash||qx.core.ObjectRegistry.toHashCode(l);
var m=this.__jx[n];

if(!m){m=new qx.event.Manager(l,this);
this.__jx[n]=m;
}return m;
},removeManager:function(o){var p=o.getWindowId();
delete this.__jx[p];
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
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__jy:[],addHandler:function(Y){if(qx.core.Environment.get(k)){qx.core.Assert.assertInterface(Y,qx.event.IEventHandler,g);
}this.__jy.push(Y);
this.__jy.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__jy;
},__jz:[],addDispatcher:function(ba,bb){if(qx.core.Environment.get(k)){qx.core.Assert.assertInterface(ba,qx.event.IEventDispatcher,i);
}this.__jz.push(ba);
this.__jz.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__jz;
}}});
})();
(function(){var b="qx.globalErrorHandling",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{__hU:function(){if(qx.core&&qx.core.Environment){return qx.core.Environment.get(b);
}else{return !!qx.Bootstrap.getEnvironmentSetting(b);
}},setErrorHandler:function(c,d){this.__ey=c||null;
this.__ez=d||window;

if(this.__hU()){if(c&&window.onerror){var e=qx.Bootstrap.bind(this.__hW,this);

if(this.__hV==null){this.__hV=window.onerror;
}var self=this;
window.onerror=function(f,g,h){self.__hV(f,g,h);
e(f,g,h);
};
}
if(c&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__hW,this);
}if(this.__ey==null){if(this.__hV!=null){window.onerror=this.__hV;
this.__hV=null;
}else{window.onerror=null;
}}}},__hW:function(i,j,k){if(this.__ey){this.handleError(new qx.core.WindowError(i,j,k));
return true;
}},observeMethod:function(l){if(this.__hU()){var self=this;
return function(){if(!self.__ey){return l.apply(this,arguments);
}
try{return l.apply(this,arguments);
}catch(m){self.handleError(new qx.core.GlobalError(m,arguments));
}};
}else{return l;
}},handleError:function(n){if(this.__ey){this.__ey.call(this.__ez,n);
}}},defer:function(o){if(qx.core&&qx.core.Environment){qx.core.Environment.add(b,true);
}else{qx.Bootstrap.setEnvironmentSetting(b,true);
}o.setErrorHandler(null,null);
}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bz="' but found ",by="]",bx=", ",bw="The value '",bv=" != ",bu="qx.core.Object",bt="Expected value to be an array but found ",bs=") was fired.",br="Expected value to be an integer >= 0 but found ",bq="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",S="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",V="null",bm="' but found '",bg="' must must be a key of the map '",J="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",bn="qx.util.ColorUtil",I=": ",L="The raised exception does not have the expected type! ",N=") not fired.",Q="qx.core.Assert",T="Expected value to be typeof object but found ",W="' (identical) but found '",bd="' must have any of the values defined in the array '",bi="Expected value to be a number but found ",y="Called assertFalse with '",z="qx.ui.core.Widget",K="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",X="Array[",bf="' does not match the regular expression '",be="' to be not identical with '",U="Expected [",bc="' arguments but found '",a="', which cannot be converted to a CSS color!",bh="qx.core.AssertionError",A="Expected value to be a boolean but found ",B="Expected value not to be null but found null!",P="))!",b="Expected value to be a qooxdoo widget but found ",c="Expected value to be typeof '",H="Expected value to be typeof function but found ",C="Expected value to be an integer but found ",D="Called fail().",G="The parameter 're' must be a string or a regular expression.",R="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",bj="], but found [",M="Wrong number of arguments given. Expected '",bl="object";
qx.Class.define(Q,{statics:{__eh:true,__ei:function(bA,bB){var bF=p;

for(var i=1,l=arguments.length;i<l;i++){bF=bF+this.__ej(arguments[i]);
}var bE=p;

if(bF){bE=bA+I+bF;
}else{bE=bA;
}var bD=bb+bE;

if(this.__eh){qx.Bootstrap.error(bD);
}
if(qx.Class.isDefined(bh)){var bC=new qx.core.AssertionError(bA,bF);

if(this.__eh){qx.Bootstrap.error("Stack trace: \n"+bC.getStackTrace());
}throw bC;
}else{throw new Error(bD);
}},__ej:function(bG){var bH;

if(bG===null){bH=V;
}else if(qx.lang.Type.isArray(bG)&&bG.length>10){bH=X+bG.length+by;
}else if((bG instanceof Object)&&(bG.toString==null)){bH=qx.lang.Json.stringify(bG,null,2);
}else{try{bH=bG.toString();
}catch(e){bH=p;
}}return bH;
},assert:function(bI,bJ){bI==true||this.__ei(bJ||p,O);
},fail:function(bK,bL){var bM=bL?p:D;
this.__ei(bK||p,bM);
},assertTrue:function(bN,bO){(bN===true)||this.__ei(bO||p,u,bN,m);
},assertFalse:function(bP,bQ){(bP===false)||this.__ei(bQ||p,y,bP,m);
},assertEquals:function(bR,bS,bT){bR==bS||this.__ei(bT||p,k,bR,bm,bS,n);
},assertNotEquals:function(bU,bV,bW){bU!=bV||this.__ei(bW||p,k,bU,bq,bV,n);
},assertIdentical:function(bX,bY,ca){bX===bY||this.__ei(ca||p,k,bX,W,bY,n);
},assertNotIdentical:function(cb,cc,cd){cb!==cc||this.__ei(cd||p,k,cb,be,cc,n);
},assertNotUndefined:function(ce,cf){ce!==undefined||this.__ei(cf||p,bo);
},assertUndefined:function(cg,ch){cg===undefined||this.__ei(ch||p,t,cg,o);
},assertNotNull:function(ci,cj){ci!==null||this.__ei(cj||p,B);
},assertNull:function(ck,cl){ck===null||this.__ei(cl||p,F,ck,o);
},assertJsonEquals:function(cm,cn,co){this.assertEquals(qx.lang.Json.stringify(cm),qx.lang.Json.stringify(cn),co);
},assertMatch:function(cp,cq,cr){this.assertString(cp);
this.assert(qx.lang.Type.isRegExp(cq)||qx.lang.Type.isString(cq),G);
cp.search(cq)>=0||this.__ei(cr||p,J,cp,bf,cq.toString(),n);
},assertArgumentsCount:function(cs,ct,cu,cv){var cw=cs.length;
(cw>=ct&&cw<=cu)||this.__ei(cv||p,M,ct,w,cu,bc,arguments.length,ba);
},assertEventFired:function(cx,event,cy,cz,cA){var cC=false;
var cB=function(e){if(cz){cz.call(cx,e);
}cC=true;
};
var cD;

try{cD=cx.addListener(event,cB,cx);
cy.call();
}catch(cE){throw cE;
}finally{try{cx.removeListenerById(cD);
}catch(cF){}}cC===true||this.__ei(cA||p,f,event,N);
},assertEventNotFired:function(cG,event,cH,cI){var cK=false;
var cJ=function(e){cK=true;
};
var cL=cG.addListener(event,cJ,cG);
cH.call();
cK===false||this.__ei(cI||p,f,event,bs);
cG.removeListenerById(cL);
},assertException:function(cM,cN,cO,cP){var cN=cN||Error;
var cQ;

try{this.__eh=false;
cM();
}catch(cR){cQ=cR;
}finally{this.__eh=true;
}
if(cQ==null){this.__ei(cP||p,s);
}cQ instanceof cN||this.__ei(cP||p,L,cN,bv,cQ);

if(cO){this.assertMatch(cQ.toString(),cO,cP);
}},assertInArray:function(cS,cT,cU){cT.indexOf(cS)!==-1||this.__ei(cU||p,bw,cS,bd,cT,m);
},assertArrayEquals:function(cV,cW,cX){this.assertArray(cV,cX);
this.assertArray(cW,cX);
cX=cX||U+cV.join(bx)+bj+cW.join(bx)+by;

if(cV.length!==cW.length){this.fail(cX,true);
}
for(var i=0;i<cV.length;i++){if(cV[i]!==cW[i]){this.fail(cX,true);
}}},assertKeyInMap:function(cY,da,db){da[cY]!==undefined||this.__ei(db||p,bw,cY,bg,da,m);
},assertFunction:function(dc,dd){qx.lang.Type.isFunction(dc)||this.__ei(dd||p,H,dc,o);
},assertString:function(de,df){qx.lang.Type.isString(de)||this.__ei(df||p,bp,de,o);
},assertBoolean:function(dg,dh){qx.lang.Type.isBoolean(dg)||this.__ei(dh||p,A,dg,o);
},assertNumber:function(di,dj){(qx.lang.Type.isNumber(di)&&isFinite(di))||this.__ei(dj||p,bi,di,o);
},assertPositiveNumber:function(dk,dl){(qx.lang.Type.isNumber(dk)&&isFinite(dk)&&dk>=0)||this.__ei(dl||p,R,dk,o);
},assertInteger:function(dm,dn){(qx.lang.Type.isNumber(dm)&&isFinite(dm)&&dm%1===0)||this.__ei(dn||p,C,dm,o);
},assertPositiveInteger:function(dp,dq){var dr=(qx.lang.Type.isNumber(dp)&&isFinite(dp)&&dp%1===0&&dp>=0);
dr||this.__ei(dq||p,br,dp,o);
},assertInRange:function(ds,dt,du,dv){(ds>=dt&&ds<=du)||this.__ei(dv||p,qx.lang.String.format(Y,[ds,dt,du]));
},assertObject:function(dw,dx){var dy=dw!==null&&(qx.lang.Type.isObject(dw)||typeof dw===bl);
dy||this.__ei(dx||p,T,(dw),o);
},assertArray:function(dz,dA){qx.lang.Type.isArray(dz)||this.__ei(dA||p,bt,dz,o);
},assertMap:function(dB,dC){qx.lang.Type.isObject(dB)||this.__ei(dC||p,v,dB,o);
},assertRegExp:function(dD,dE){qx.lang.Type.isRegExp(dD)||this.__ei(dE||p,r,dD,o);
},assertType:function(dF,dG,dH){this.assertString(dG,S);
typeof (dF)===dG||this.__ei(dH||p,c,dG,bz,dF,o);
},assertInstance:function(dI,dJ,dK){var dL=dJ.classname||dJ+p;
dI instanceof dJ||this.__ei(dK||p,bk,dL,bz,dI,o);
},assertInterface:function(dM,dN,dO){qx.Class.implementsInterface(dM,dN)||this.__ei(dO||p,x,dM,E,dN,n);
},assertCssColor:function(dP,dQ,dR){var dS=qx.Class.getByName(bn);

if(!dS){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dU=dS.stringToRgb(dP);

try{var dT=dS.stringToRgb(dQ);
}catch(dW){this.__ei(dR||p,d,dP,j,dU.join(h),g,dQ,a);
}var dV=dU[0]==dT[0]&&dU[1]==dT[1]&&dU[2]==dT[2];
dV||this.__ei(dR||p,d,dU,j,dU.join(h),g,dQ,j,dT.join(h),P);
},assertElement:function(dX,dY){!!(dX&&dX.nodeType===1)||this.__ei(dY||p,q,dX,n);
},assertQxObject:function(ea,eb){this.__ek(ea,bu)||this.__ei(eb||p,K,ea,o);
},assertQxWidget:function(ec,ed){this.__ek(ec,z)||this.__ei(ed||p,b,ec,o);
},__ek:function(ee,ef){if(!ee){return false;
}var eg=ee.constructor;

while(eg){if(eg.classname===ef){return true;
}eg=eg.superclass;
}return false;
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
var Q=this.__dm(P);
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
if(W){var Y=this.__dm(W[1]);
V.push(Y+W[2]);
}else{V.push(U[1]);
}}return V;
}else if(T.sourceURL&&T.line){return [this.__dm(T.sourceURL)+m+T.line];
}else{return [];
}},"opera":function(bc){if(bc.stacktrace){var be=bc.stacktrace;

if(be.indexOf(k)>=0){be=be.split(k)[0];
}if(be.indexOf(a)>=0){var bo=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bi=bf[2];
var bm=this.__dm(bi);
bg.push(bm+m+bn);
}}else{var bo=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bh=bf[2];
var bi=bf[3];
var bm=this.__dm(bi);
bg.push(bm+m+bn+m+bh);
}}return bg;
}else if(bc.message&&bc.message.indexOf("Backtrace:")>=0){var bg=[];
var bj=qx.lang.String.trim(bc.message.split("Backtrace:")[1]);
var bk=bj.split(f);

for(var i=0;i<bk.length;i++){var bd=bk[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(bd&&bd.length>=2){var bn=bd[1];
var bl=this.__dm(bd[2]);
bg.push(bl+m+bn);
}}return bg;
}else{return [];
}},"default":function(){return [];
}}),__dm:function(bp){var bt=d;
var bq=bp.indexOf(bt);
var bs=bp.indexOf(e);

if(bs>=0){bp=bp.substring(0,bs);
}var br=(bq==-1)?bp:bp.substring(bq+bt.length).replace(/\//g,b).replace(/\.js$/,g);
return br;
}}});
})();
(function(){var k="",j="g",h="0",g='\\$1',f="%",e='-',d="qx.lang.String",c=' ',b='\n',a="undefined";
qx.Class.define(d,{statics:{camelCase:function(l){return l.replace(/\-([a-z])/g,function(m,n){return n.toUpperCase();
});
},hyphenate:function(o){return o.replace(/[A-Z]/g,function(p){return (e+p.charAt(0).toLowerCase());
});
},capitalize:function(q){return q.replace(/\b[a-z]/g,function(r){return r.toUpperCase();
});
},clean:function(s){return this.trim(s.replace(/\s+/g,c));
},trimLeft:function(t){return t.replace(/^\s+/,k);
},trimRight:function(u){return u.replace(/\s+$/,k);
},trim:function(v){return v.replace(/^\s+|\s+$/g,k);
},startsWith:function(w,x){return w.indexOf(x)===0;
},endsWith:function(y,z){return y.substring(y.length-z.length,y.length)===z;
},repeat:function(A,B){return A.length>0?new Array(B+1).join(A):k;
},pad:function(C,length,D){var E=length-C.length;

if(E>0){if(typeof D===a){D=h;
}return this.repeat(D,E)+C;
}else{return C;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(F,G){return F.indexOf(G)!=-1;
},format:function(H,I){var J=H;
var i=I.length;

while(i--){J=J.replace(new RegExp(f+(i+1),j),I[i]+k);
}return J;
},escapeRegexpChars:function(K){return K.replace(/([.*+?^${}()|[\]\/\\])/g,g);
},toArray:function(L){return L.split(/\B|\b/g);
},stripTags:function(M){return M.replace(/<\/?[^>]+>/gi,k);
},stripScripts:function(N,O){var Q=k;
var P=N.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){Q+=arguments[1]+b;
return k;
});

if(O===true){qx.lang.Function.globalEval(Q);
}return P;
}}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__fx:null,__fy:null,__fz:null,__fA:null,stringify:function(bb,bc,bd){this.__fx=p;
this.__fy=p;
this.__fA=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__fy+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__fy=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__fz=bc;
}else{this.__fz=null;
}return this.__fB(p,{'':bb});
},__fB:function(be,bf){var bi=this.__fx,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__fz===e){bj=this.__fz.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__fC(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__fx+=this.__fy;
bg=[];

if(this.__fA.indexOf(bj)!==-1){throw new TypeError(V);
}this.__fA.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__fB(i,bj)||h;
}this.__fA.pop();
if(bg.length===0){var bh=s;
}else if(this.__fx){bh=E+this.__fx+bg.join(Y+this.__fx)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__fx=bi;
return bh;
case z:this.__fx+=this.__fy;
bg=[];

if(this.__fA.indexOf(bj)!==-1){throw new TypeError(V);
}this.__fA.push(bj);
if(this.__fz&&typeof this.__fz===f){var length=this.__fz.length;

for(var i=0;i<length;i+=1){var k=this.__fz[i];

if(typeof k===W){var v=this.__fB(k,bj);

if(v){bg.push(this.__fC(k)+(this.__fx?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__fB(k,bj);

if(v){bg.push(this.__fC(k)+(this.__fx?g:m)+v);
}}}}this.__fA.pop();
if(bg.length===0){var bh=A;
}else if(this.__fx){bh=w+this.__fx+bg.join(Y+this.__fx)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__fx=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__fC:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bq.lastIndex=0;

if(bq.test(bo)){return o+
bo.replace(bq,function(a){var c=bp[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bo+o;
}},parse:function(br,bs){var bt=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bt.lastIndex=0;
if(bt.test(br)){br=br.replace(bt,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(br.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+br+D);
return typeof bs===e?this.__fD({'':j},p,bs):j;
}throw new SyntaxError(P);
},__fD:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__fD(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(c);
}this.__bR=b+(c&&c.message?c.message:c);
Error.call(this,this.__bR);
this.__kw=d;
this.__kx=c;
},members:{__kx:null,__kw:null,__bR:null,toString:function(){return this.__bR;
},getArguments:function(){return this.__kw;
},getSourceException:function(){return this.__kx;
}},destruct:function(){this.__kx=null;
this.__kw=null;
this.__bR=null;
}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bE=d||c;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bE:null,message:null,getComment:function(){return this.__bE;
},toString:function(){return this.__bE+(this.message?b+this.message:c);
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__dt=qx.dev.StackTrace.getStackTrace();
},members:{__dt:null,getStackTrace:function(){return this.__dt;
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)==
"JSON"&&
JSON.parse('{"x":1}').x===
1&&
JSON.stringify({"prop":"val"},function(k,v){return k==="prop"?"repl":v;
}).indexOf("repl")>0)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__eA:0,__eB:0,__eC:false,__eD:0,__eE:null,__eF:null,setMaxEntries:function(c){this.__eF=c;
this.clear();
},getMaxEntries:function(){return this.__eF;
},addEntry:function(d){this.__eE[this.__eA]=d;
this.__eA=this.__eG(this.__eA,1);
var e=this.getMaxEntries();

if(this.__eB<e){this.__eB++;
}if(this.__eC&&(this.__eD<e)){this.__eD++;
}},mark:function(){this.__eC=true;
this.__eD=0;
},clearMark:function(){this.__eC=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__eB){f=this.__eB;
}if(g&&this.__eC&&(f>this.__eD)){f=this.__eD;
}
if(f>0){var i=this.__eG(this.__eA,-1);
var h=this.__eG(i,-f+1);
var j;

if(h<=i){j=this.__eE.slice(h,i+1);
}else{j=this.__eE.slice(h,this.__eB).concat(this.__eE.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__eE=new Array(this.getMaxEntries());
this.__eB=0;
this.__eD=0;
this.__eA=0;
},__eG:function(k,l){var m=this.getMaxEntries();
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
qx.Class.define(t,{statics:{__jA:A,setLevel:function(J){this.__jA=J;
},getLevel:function(){return this.__jA;
},setTreshold:function(K){this.__jC.setMaxMessages(K);
},getTreshold:function(){return this.__jC.getMaxMessages();
},__jB:{},__dc:0,register:function(L){if(L.$$id){return;
}var N=this.__dc++;
this.__jB[N]=L;
L.$$id=N;
var M=this.__jD;
var O=this.__jC.getAllLogEvents();

for(var i=0,l=O.length;i<l;i++){if(M[O[i].level]>=M[this.__jA]){L.process(O[i]);
}}},unregister:function(P){var Q=P.$$id;

if(Q==null){return;
}delete this.__jB[Q];
delete P.$$id;
},debug:function(R,S){qx.log.Logger.__jE(A,arguments);
},info:function(T,U){qx.log.Logger.__jE(c,arguments);
},warn:function(V,W){qx.log.Logger.__jE(o,arguments);
},error:function(X,Y){qx.log.Logger.__jE(g,arguments);
},trace:function(ba){qx.log.Logger.__jE(c,[ba,qx.dev.StackTrace.getStackTrace().join(v)]);
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
}}},clear:function(){this.__jC.clearHistory();
},__jC:new qx.log.appender.RingBuffer(50),__jD:{debug:0,info:1,warn:2,error:3},__jE:function(bw,bx){var bC=this.__jD;

if(bC[bw]<bC[this.__jA]){return;
}var bz=bx.length<2?null:bx[0];
var bB=bz?1:0;
var by=[];

for(var i=bB,l=bx.length;i<l;i++){by.push(this.__jG(bx[i],true));
}var bD=new Date;
var bE={time:bD,offset:bD-qx.Bootstrap.LOADSTART,level:bw,items:by,win:window};
if(bz){if(bz.$$hash!==undefined){bE.object=bz.$$hash;
}else if(bz.$$type){bE.clazz=bz;
}}this.__jC.process(bE);
var bF=this.__jB;

for(var bA in bF){bF[bA].process(bE);
}},__jF:function(bG){if(bG===undefined){return s;
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
},__jG:function(bI,bJ){var bQ=this.__jF(bI);
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
}bM.push(this.__jG(bI[i],false));
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
bK=this.__jG(bI[bO],false);
bK.key=bO;
bM.push(bK);
}}else{var bN=0;

for(var bO in bI){bN++;
}bM=m+bN+x;
}break;
}return {type:bQ,text:bM,trace:bL};
}},defer:function(bR){var bS=qx.Bootstrap.$$logs;

for(var i=0;i<bS.length;i++){bR.__jE(bS[i][0],bS[i][1]);
}qx.Bootstrap.debug=bR.debug;
qx.Bootstrap.info=bR.info;
qx.Bootstrap.warn=bR.warn;
qx.Bootstrap.error=bR.error;
qx.Bootstrap.trace=bR.trace;
}});
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
},__dn:qx.event.Registration,addListener:function(K,L,self,M){if(!this.$$disposed){return this.__dn.addListener(this,K,L,self,M);
}return null;
},addListenerOnce:function(N,O,self,P){var Q=function(e){this.removeListener(N,Q,this,P);
O.call(self||this,e);
};
return this.addListener(N,Q,this,P);
},removeListener:function(R,S,self,T){if(!this.$$disposed){return this.__dn.removeListener(this,R,S,self,T);
}return false;
},removeListenerById:function(U){if(!this.$$disposed){return this.__dn.removeListenerById(this,U);
}return false;
},hasListener:function(V,W){return this.__dn.hasListener(this,V,W);
},dispatchEvent:function(X){if(!this.$$disposed){return this.__dn.dispatchEvent(this,X);
}return true;
},fireEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__dn.fireEvent(this,Y,ba,bb);
}return true;
},fireNonBubblingEvent:function(bc,bd,be){if(!this.$$disposed){return this.__dn.fireNonBubblingEvent(this,bc,bd,be);
}return true;
},fireDataEvent:function(bf,bg,bh,bi){if(!this.$$disposed){if(bh===undefined){bh=null;
}return this.__dn.fireNonBubblingEvent(this,bf,qx.event.type.Data,[bg,bh,!!bi]);
}return true;
},__do:null,setUserData:function(bj,bk){if(!this.__do){this.__do={};
}this.__do[bj]=bk;
},getUserData:function(bl){if(!this.__do){return null;
}var bm=this.__do[bl];
return bm===undefined?null:bm;
},__dp:qx.log.Logger,debug:function(bn){this.__dq(g,arguments);
},info:function(bo){this.__dq(m,arguments);
},warn:function(bp){this.__dq(c,arguments);
},error:function(bq){this.__dq(j,arguments);
},trace:function(){this.__dp.trace(this);
},__dq:function(br,bs){var bt=qx.lang.Array.fromArguments(bs);
bt.unshift(this);
this.__dp[br].apply(this.__dp,bt);
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
}if(this.__dr){this.__dr();
}if(qx.core.Environment.get(t)){if(qx.core.Environment.get(s)>0){var bx,bv;

for(bx in this){bv=this[bx];
if(bv!==null&&typeof bv===f&&!(qx.Bootstrap.isString(bv))){if(this.constructor.prototype[bx]!=null){continue;
}var bz=navigator.userAgent.indexOf(o)!=-1;
var by=navigator.userAgent.indexOf(q)!=-1;
if(bz||by){if(bv instanceof qx.core.Object||qx.core.Environment.get(s)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+bx+"' in "+this.classname+"["+this.toHashCode()+"]: "+bv);
delete this[bx];
}}else{if(qx.core.Environment.get(s)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+bx+"' in "+this.classname+"["+this.toHashCode()+"]: "+bv);
delete this[bx];
}}}}}}},__dr:null,__ds:function(){var bA=qx.Class.getProperties(this.constructor);

for(var i=0,l=bA.length;i<l;i++){delete this[a+bA[i]];
}},_disposeObjects:function(bB){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bC){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bD){qx.util.DisposeUtil.disposeArray(this,bD);
},_disposeMap:function(bE){qx.util.DisposeUtil.disposeMap(this,bE);
}},environment:{"qx.disposerDebugLevel":0},defer:function(bF,bG){if(qx.core.Environment.get(t)){qx.Class.include(bF,qx.core.MAssert);
}var bI=navigator.userAgent.indexOf(q)!=-1;
var bH=navigator.userAgent.indexOf(o)!=-1;
if(bI||bH){bG.__dr=bG.__ds;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__do=null;
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
(function(){var n="engine.name",m="ready",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="webkit",f="gecko",d="opera",a="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._window=o.getWindow();
this.__cO=false;
this.__cP=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__cS();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__cQ:null,__cO:null,__cP:null,__cR:null,__cS:function(){if(!this.__cQ&&this.__cO&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__cQ=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__cQ=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__cQ;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__cO=true;
this.__cS();
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
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__cO=true;
this.__cS();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cR){this.__cR=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var g="",f="qx.core.BaseInit",d="engine.name",c="demobrowser.demo.test.Virtual_ListBinding",b="os.name",a="engine.version";
qx.Class.define(f,{statics:{getApplication:function(){return this.__dY||null;
},ready:function(){if(this.__dY){return;
}
if(qx.core.Environment.get(d)==g){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(a)==g){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==g){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=c;
var j=qx.Class.getByName(i);

if(j){this.__dY=new j;
var h=new Date;
this.__dY.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__dY.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__ea:function(e){var k=this.__dY;

if(k){k.close();
}},__eb:function(){var l=this.__dY;

if(l){l.terminate();
}qx.core.ObjectRegistry.shutdown();
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
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
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__bL={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__bL:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__bL[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__bL){return;
}var h=g.classname;
var j=this.__bL[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__bL[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__bL;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__bL;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
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
qx.Class.define(a,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__ea:function(e){var f=this.__application;

if(f){e.setReturnValue(f.close());
}},__eb:function(){var g=this.__application;

if(g){g.terminate();
}}},defer:function(h){qx.event.Registration.addListener(window,d,h.ready,h);
qx.event.Registration.addListener(window,c,h.__eb,h);
qx.event.Registration.addListener(window,b,h.__ea,h);
}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__cq:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__cq;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__cq=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__cq=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var b="demobrowser.demo.test.Virtual_ListBinding",a="Affe ";
qx.Class.define(b,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);
var d=new qx.ui.virtual.form.List();
this.getRoot().add(d,{left:10,top:10});
var g=[];

for(var i=0;i<10000;i++){g.push(a+i);
}g=new qx.data.Array(g);
var e=new qx.ui.virtual.form.ListController(g,d);
e.setDelegate({filter:function(j){var k;
parseInt(j[j.length-1])%2?k=false:k=true;
return k;
},sorter:function(l,m){return l>m;
}});
var h=new qx.ui.virtual.form.List().set({useWidgetCells:true});
this.getRoot().add(h,{left:500,top:10});
new qx.ui.virtual.form.ListController(e.getSelection(),h);
var c=new qx.ui.virtual.form.List().set({useWidgetCells:true,cellRenderer:new demobrowser.demo.virtual.messenger.BuddyCell(),rowHeight:28});
var f=demobrowser.demo.virtual.messenger.BuddyModel.createBuddies(200);
new qx.ui.virtual.form.ListController(f,c);
this.getRoot().add(c,{left:10,top:320});
}}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cY:null,__hT:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__cY=b;
this.__hT=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__cY=this.__cY;
f.__hT=this.__hT;
return f;
},getData:function(){return this.__cY;
},getOldData:function(){return this.__hT;
}},destruct:function(){this.__cY=this.__hT=null;
}});
})();
(function(){var m="get",l="",k="[",h=".",g="last",f="change",d="]",c="Number",b="String",a="qx.debug.databinding",J="set",I="deepBinding",H="item",G="reset",F="qx.debug",E="' (",D="Boolean",C=") to the object '",B="Integer",A=" of object ",u="qx.event.type.Data",v="qx.data.SingleValueBinding",s="Binding property ",t="Can not remove the bindings for null object!",q="Binding from '",r="PositiveNumber",n="PositiveInteger",p="Binding does not exist!",w=" is not an data (qx.event.type.Data) event on ",x=").",z="Date",y=" not possible: No event available. ";
qx.Class.define(v,{statics:{__jT:{},bind:function(K,L,M,N,O){var ba=this.__jV(K,L,M,N,O);
var U=L.split(h);
var Q=this.__kc(U);
var Y=[];
var V=[];
var W=[];
var S=[];
var T=K;
try{for(var i=0;i<U.length;i++){if(Q[i]!==l){S.push(f);
}else{S.push(this.__jW(T,U[i]));
}Y[i]=T;
if(i==U.length-1){if(Q[i]!==l){var be=Q[i]===g?T.length-1:Q[i];
var P=T.getItem(be);
this.__kb(P,M,N,O,K);
W[i]=this.__kd(T,S[i],M,N,O,Q[i]);
}else{if(U[i]!=null&&T[m+qx.lang.String.firstUp(U[i])]!=null){var P=T[m+qx.lang.String.firstUp(U[i])]();
this.__kb(P,M,N,O,K);
}W[i]=this.__kd(T,S[i],M,N,O);
}}else{var bb={index:i,propertyNames:U,sources:Y,listenerIds:W,arrayIndexValues:Q,targetObject:M,targetPropertyChain:N,options:O,listeners:V};
var X=qx.lang.Function.bind(this.__jU,this,bb);
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
this.__ke(bc,K,L,M,N);
return bc;
},__jU:function(bg){if(bg.options&&bg.options.onUpdate){bg.options.onUpdate(bg.sources[bg.index],bg.targetObject);
}for(var j=bg.index+1;j<bg.propertyNames.length;j++){var bk=bg.sources[j];
bg.sources[j]=null;

if(!bk){continue;
}bk.removeListenerById(bg.listenerIds[j]);
}var bk=bg.sources[bg.index];
for(var j=bg.index+1;j<bg.propertyNames.length;j++){if(bg.arrayIndexValues[j-1]!==l){bk=bk[m+qx.lang.String.firstUp(bg.propertyNames[j-1])](bg.arrayIndexValues[j-1]);
}else{bk=bk[m+qx.lang.String.firstUp(bg.propertyNames[j-1])]();
}bg.sources[j]=bk;
if(!bk){this.__jX(bg.targetObject,bg.targetPropertyChain);
break;
}if(j==bg.propertyNames.length-1){if(qx.Class.implementsInterface(bk,qx.data.IListData)){var bl=bg.arrayIndexValues[j]===g?bk.length-1:bg.arrayIndexValues[j];
var bi=bk.getItem(bl);
this.__kb(bi,bg.targetObject,bg.targetPropertyChain,bg.options,bg.sources[bg.index]);
bg.listenerIds[j]=this.__kd(bk,f,bg.targetObject,bg.targetPropertyChain,bg.options,bg.arrayIndexValues[j]);
}else{if(bg.propertyNames[j]!=null&&bk[m+qx.lang.String.firstUp(bg.propertyNames[j])]!=null){var bi=bk[m+qx.lang.String.firstUp(bg.propertyNames[j])]();
this.__kb(bi,bg.targetObject,bg.targetPropertyChain,bg.options,bg.sources[bg.index]);
}var bj=this.__jW(bk,bg.propertyNames[j]);
bg.listenerIds[j]=this.__kd(bk,bj,bg.targetObject,bg.targetPropertyChain,bg.options);
}}else{if(bg.listeners[j]==null){var bh=qx.lang.Function.bind(this.__jU,this,bg);
bg.listeners.push(bh);
}if(qx.Class.implementsInterface(bk,qx.data.IListData)){var bj=f;
}else{var bj=this.__jW(bk,bg.propertyNames[j]);
}bg.listenerIds[j]=bk.addListener(bj,bg.listeners[j]);
}}},__jV:function(bm,bn,bo,bp,bq){var bu=bp.split(h);
var bs=this.__kc(bu);
var bz=[];
var by=[];
var bw=[];
var bv=[];
var bt=bo;
for(var i=0;i<bu.length-1;i++){if(bs[i]!==l){bv.push(f);
}else{try{bv.push(this.__jW(bt,bu[i]));
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
}else{try{var bB=qx.data.SingleValueBinding.__jW(bC,bu[j]);
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
bJ=qx.data.SingleValueBinding.__kf(bJ,bG,bH,bI,bE);
this.__jY(bG,bH,bJ);
},getValueFromObject:function(o,bK){var bO=this.__ka(o,bK);
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
},__jW:function(bR,bS){var bT=this.__kg(bR,bS);
if(bT==null){if(qx.Class.supportsEvent(bR.constructor,bS)){bT=bS;
}else if(qx.Class.supportsEvent(bR.constructor,f+qx.lang.String.firstUp(bS))){bT=f+qx.lang.String.firstUp(bS);
}else{throw new qx.core.AssertionError(s+bS+A+bR+y);
}}return bT;
},__jX:function(bU,bV){var bW=this.__ka(bU,bV);

if(bW!=null){var bX=bV.substring(bV.lastIndexOf(h)+1,bV.length);
if(bX.charAt(bX.length-1)==d){this.__jY(bU,bV,null);
return;
}if(bW[G+qx.lang.String.firstUp(bX)]!=undefined){bW[G+qx.lang.String.firstUp(bX)]();
}else{bW[J+qx.lang.String.firstUp(bX)](null);
}}},__jY:function(bY,ca,cb){var cf=this.__ka(bY,ca);

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
}}},__ka:function(ch,ci){var cl=ci.split(h);
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
},__kb:function(co,cp,cq,cr,cs){co=this.__kf(co,cp,cq,cr,cs);
if(co===undefined){this.__jX(cp,cq);
}if(co!==undefined){try{this.__jY(cp,cq,co);
if(cr&&cr.onUpdate){cr.onUpdate(cs,cp,co);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cr&&cr.onSetFail){cr.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+co+" on "+cp+". Error message: "+e);
}}}},__kc:function(ct){var cu=[];
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
},__kd:function(cw,cx,cy,cz,cA,cB){if(qx.core.Environment.get(F)){var cC=qx.Class.getEventType(cw.constructor,cx);
qx.core.Assert.assertEquals(u,cC,cx+w+cw+h);
}var cE=function(cF,e){if(cF!==l){if(cF===g){cF=cw.length-1;
}var cI=cw.getItem(cF);
if(cI===undefined){qx.data.SingleValueBinding.__jX(cy,cz);
}var cG=e.getData().start;
var cH=e.getData().end;

if(cF<cG||cF>cH){return;
}}else{var cI=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+cw+" by "+cx+" to "+cy+" ("+cz+")");
qx.log.Logger.debug("Data before conversion: "+cI);
}cI=qx.data.SingleValueBinding.__kf(cI,cy,cz,cA,cw);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cI);
}try{if(cI!==undefined){qx.data.SingleValueBinding.__jY(cy,cz,cI);
}else{qx.data.SingleValueBinding.__jX(cy,cz);
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
},__ke:function(cJ,cK,cL,cM,cN){if(this.__jT[cK.toHashCode()]===undefined){this.__jT[cK.toHashCode()]=[];
}this.__jT[cK.toHashCode()].push([cJ,cK,cL,cM,cN]);
},__kf:function(cO,cP,cQ,cR,cS){if(cR&&cR.converter){var cU;

if(cP.getModel){cU=cP.getModel();
}return cR.converter(cO,cU,cS,cP);
}else{var cW=this.__ka(cP,cQ);
var cX=cQ.substring(cQ.lastIndexOf(h)+1,cQ.length);
if(cW==null){return cO;
}var cV=qx.Class.getPropertyDefinition(cW.constructor,cX);
var cT=cV==null?l:cV.check;
return this.__kh(cO,cT);
}},__kg:function(cY,da){var db=qx.Class.getPropertyDefinition(cY.constructor,da);

if(db==null){return null;
}return db.event;
},__kh:function(dc,dd){var de=qx.lang.Type.getClass(dc);
if((de==c||de==b)&&(dd==B||dd==n)){dc=parseInt(dc,10);
}if((de==D||de==c||de==z)&&dd==b){dc=dc+l;
}if((de==c||de==b)&&(dd==c||dd==r)){dc=parseFloat(dc);
}return dc;
},removeBindingFromObject:function(df,dg){if(dg.type==I){for(var i=0;i<dg.sources.length;i++){if(dg.sources[i]){dg.sources[i].removeListenerById(dg.listenerIds[i]);
}}for(var i=0;i<dg.targets.length;i++){if(dg.targets[i]){dg.targets[i].removeListenerById(dg.targetListenerIds[i]);
}}}else{df.removeListenerById(dg);
}var dh=this.__jT[df.toHashCode()];
if(dh!=undefined){for(var i=0;i<dh.length;i++){if(dh[i][0]==dg){qx.lang.Array.remove(dh,dh[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(di){if(qx.core.Environment.get(F)){qx.core.Assert.assertNotNull(di,t);
}var dj=this.__jT[di.toHashCode()];

if(dj!=undefined){for(var i=dj.length-1;i>=0;i--){this.removeBindingFromObject(di,dj[i][0]);
}}},getAllBindingsForObject:function(dk){if(this.__jT[dk.toHashCode()]===undefined){this.__jT[dk.toHashCode()]=[];
}return this.__jT[dk.toHashCode()];
},removeAllBindings:function(){for(var dm in this.__jT){var dl=qx.core.ObjectRegistry.fromHashCode(dm);
if(dl==null){delete this.__jT[dm];
continue;
}this.removeAllBindingsForObject(dl);
}this.__jT={};
},getAllBindings:function(){return this.__jT;
},showBindingInLog:function(dn,dp){var dr;
for(var i=0;i<this.__jT[dn.toHashCode()].length;i++){if(this.__jT[dn.toHashCode()][i][0]==dp){dr=this.__jT[dn.toHashCode()][i];
break;
}}
if(dr===undefined){var dq=p;
}else{var dq=q+dr[1]+E+dr[2]+C+dr[3]+E+dr[4]+x;
}qx.log.Logger.debug(dq);
},showAllBindingsInLog:function(){for(var dt in this.__jT){var ds=qx.core.ObjectRegistry.fromHashCode(dt);

for(var i=0;i<this.__jT[dt].length;i++){this.showBindingInLog(ds,this.__jT[dt][i][0]);
}}}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__bR=c;
this.__bS=d||b;
this.__bT=e===undefined?-1:e;
},members:{__bR:null,__bS:null,__bT:null,toString:function(){return this.__bR;
},getUri:function(){return this.__bS;
},getLineNumber:function(){return this.__bT;
}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
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
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__gY:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__ha:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__di:function(){var L=qx.lang.Generics.__gY;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__ha(N,O);
}}}}},defer:function(Q){Q.__di();
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
}else if(this.isRgbString(m)){return this.__ck();
}else if(this.isHex3String(m)){return this.__cm();
}else if(this.isHex6String(m)){return this.__cn();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__ck();
}else if(this.isRgbaString(n)){return this.__cl();
}else if(this.isHex3String(n)){return this.__cm();
}else if(this.isHex6String(n)){return this.__cn();
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
},__ck:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__cl:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__cm:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__cn:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__cm(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__cn(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__cm(P);
}
if(this.isHex6String(P)){return this.__cn(P);
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
(function(){var m="object",l="__ih",k="_applyTheme",j="",h="_",g="qx.ui.decoration.",f="qx.theme.manager.Decoration",e=".",d="Theme",c="changeTheme",a="string",b="singleton";
qx.Class.define(f,{type:b,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:k,event:c}},members:{__ih:null,resolve:function(n){if(!n){return null;
}
if(typeof n===m){return n;
}var s=this.getTheme();

if(!s){return null;
}var p=this.__ih;

if(!p){p=this.__ih={};
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
},_applyTheme:function(A,B){var D=qx.util.AliasManager.getInstance();

if(B){for(var C in B.aliases){D.remove(C);
}}
if(A){for(var C in A.aliases){D.add(C,A.aliases[C]);
}}
if(!A){this.__ih={};
}}},destruct:function(){this._disposeMap(l);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="qx.debug",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,d,a],mode:b}},members:{__js:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__js=null;
},getInsets:function(){if(this.__js){return this.__js;
}var k=this._getDefaultInsets();
return this.__js={left:this.getInsetLeft()==null?k.left:this.getInsetLeft(),right:this.getInsetRight()==null?k.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?k.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?k.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Environment.get(e)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__js=null;
}},destruct:function(){this.__js=null;
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
(function(){var k="engine.version",j="",i="engine.name",h="hidden",g="-moz-scrollbars-none",f="overflow",e=";",d="overflowY",b=":",a="overflowX",z="overflow:",y="none",x="scroll",w="borderLeftStyle",v="borderRightStyle",u="div",r="borderRightWidth",q="overflow-y",p="borderLeftWidth",o="-moz-scrollbars-vertical",m="100px",n="qx.bom.element.Overflow",l="overflow-x";
qx.Class.define(n,{statics:{__dl:null,getScrollbarWidth:function(){if(this.__dl!==null){return this.__dl;
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
this.__dl=c?c:16;
document.body.removeChild(t);
return this.__dl;
},_compile:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(P,Q){if(Q==h){Q=g;
}return z+Q+e;
}:
function(R,S){return R+b+S+e;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(T,U){return z+U+e;
}:
function(V,W){return V+b+W+e;
},"default":function(X,Y){return X+b+Y+e;
}}),compileX:function(ba){return this._compile(l,ba);
},compileY:function(bb){return this._compile(q,bb);
},getX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bc,bd){var be=qx.bom.element.Style.get(bc,f,bd,false);

if(be===g){be=h;
}return be;
}:
function(bf,bg){return qx.bom.element.Style.get(bf,a,bg,false);
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bh,bi){return qx.bom.element.Style.get(bh,f,bi,false);
}:
function(bj,bk){return qx.bom.element.Style.get(bj,a,bk,false);
},"default":function(bl,bm){return qx.bom.element.Style.get(bl,a,bm,false);
}}),setX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bn,bo){if(bo==h){bo=g;
}bn.style.overflow=bo;
}:
function(bp,bq){bp.style.overflowX=bq;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(br,bs){br.style.overflow=bs;
}:
function(bt,bu){bt.style.overflowX=bu;
},"default":function(bv,bw){bv.style.overflowX=bw;
}}),resetX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bx){bx.style.overflow=j;
}:
function(by){by.style.overflowX=j;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bz,bA){bz.style.overflow=j;
}:
function(bB,bC){bB.style.overflowX=j;
},"default":function(bD){bD.style.overflowX=j;
}}),getY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bE,bF){var bG=qx.bom.element.Style.get(bE,f,bF,false);

if(bG===g){bG=h;
}return bG;
}:
function(bH,bI){return qx.bom.element.Style.get(bH,d,bI,false);
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bJ,bK){return qx.bom.element.Style.get(bJ,f,bK,false);
}:
function(bL,bM){return qx.bom.element.Style.get(bL,d,bM,false);
},"default":function(bN,bO){return qx.bom.element.Style.get(bN,d,bO,false);
}}),setY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bP,bQ){if(bQ===h){bQ=g;
}bP.style.overflow=bQ;
}:
function(bR,bS){bR.style.overflowY=bS;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bT,bU){bT.style.overflow=bU;
}:
function(bV,bW){bV.style.overflowY=bW;
},"default":function(bX,bY){bX.style.overflowY=bY;
}}),resetY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(ca){ca.style.overflow=j;
}:
function(cb){cb.style.overflowY=j;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(cc,cd){cc.style.overflow=j;
}:
function(ce,cf){ce.style.overflowY=j;
},"default":function(cg){cg.style.overflowY=j;
}})}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__gY:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__gY[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__gY[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var r="engine.name",q="",p="qx.debug",o="boxSizing",n="box-sizing",m="qx.bom.element.BoxSizing",k="KhtmlBoxSizing",j="border-box",h="-moz-box-sizing",g="WebkitBoxSizing",c=":",f=";",e="-khtml-box-sizing",b="content-box",a="-webkit-box-sizing",d="MozBoxSizing";
qx.Class.define(m,{statics:{__ii:qx.core.Environment.select(r,{"mshtml":null,"webkit":[o,k,g],"gecko":[d],"opera":[o]}),__ij:qx.core.Environment.select(r,{"mshtml":null,"webkit":[n,e,a],"gecko":[h],"opera":[n]}),__ik:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__il:function(s){var t=this.__ik;
return t.tags[s.tagName.toLowerCase()]||t.types[s.type];
},compile:qx.core.Environment.select(r,{"mshtml":function(u){if(qx.core.Environment.get(p)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(v){var x=this.__ij;
var w=q;

if(x){for(var i=0,l=x.length;i<l;i++){w+=x[i]+c+v+f;
}}return w;
}}),get:qx.core.Environment.select(r,{"mshtml":function(y){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(y))){if(!this.__il(y)){return b;
}}return j;
},"default":function(z){var B=this.__ii;
var A;

if(B){for(var i=0,l=B.length;i<l;i++){A=qx.bom.element.Style.get(z,B[i],null,false);

if(A!=null&&A!==q){return A;
}}}return q;
}}),set:qx.core.Environment.select(r,{"mshtml":function(C,D){if(qx.core.Environment.get(p)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(E,F){var G=this.__ii;

if(G){for(var i=0,l=G.length;i<l;i++){E.style[G[i]]=F;
}}}}),reset:function(H){this.set(H,q);
}}});
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
qx.Class.define(s,{statics:{__kF:function(){var L=[H,h,y,J];
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
}}}this.__kG=P;
this.__kG[x]=qx.core.Environment.select(k,{"gecko":c,"webkit":z,"default":h});
this.__kH={};

for(var N in P){this.__kH[N]=this.__kL(P[N]);
}this.__kG[K]=qx.core.Environment.select(k,{"mshtml":I,"default":D});
},__kI:{width:v,height:G,left:t,right:n,top:C,bottom:a},__kJ:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(T){var V=[];
var X=this.__kJ;
var W=this.__kH;
var name,U;

for(name in T){U=T[name];

if(U==null){continue;
}name=W[name]||name;
if(X[name]){V.push(X[name].compile(U));
}else{V.push(this.__kL(name),E,U,w);
}}return V.join(m);
},__kK:{},__kL:function(Y){var ba=this.__kK;
var bb=ba[Y];

if(!bb){bb=ba[Y]=qx.lang.String.hyphenate(Y);
}return bb;
},setCss:qx.core.Environment.select(k,{"mshtml":function(bc,bd){bc.style.cssText=bd;
},"default":function(be,bf){be.setAttribute(e,bf);
}}),getCss:qx.core.Environment.select(k,{"mshtml":function(bg){return bg.style.cssText.toLowerCase();
},"default":function(bh){return bh.getAttribute(e);
}}),isPropertySupported:function(bi){return (this.__kJ[bi]||this.__kG[bi]||bi in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bj,name,bk,bl){if(qx.core.Environment.get(g)){qx.core.Assert.assertElement(bj,d);
qx.core.Assert.assertString(name,B);

if(bl!==undefined){qx.core.Assert.assertBoolean(bl,f);
}}name=this.__kG[name]||name;
if(bl!==false&&this.__kJ[name]){return this.__kJ[name].set(bj,bk);
}else{bj.style[name]=bk!==null?bk:m;
}},setStyles:function(bm,bn,bo){if(qx.core.Environment.get(g)){qx.core.Assert.assertElement(bm,d);
qx.core.Assert.assertMap(bn,r);

if(bo!==undefined){qx.core.Assert.assertBoolean(bo,f);
}}var br=this.__kG;
var bt=this.__kJ;
var bp=bm.style;

for(var bs in bn){var bq=bn[bs];
var name=br[bs]||bs;

if(bq===undefined){if(bo!==false&&bt[name]){bt[name].reset(bm);
}else{bp[name]=m;
}}else{if(bo!==false&&bt[name]){bt[name].set(bm,bq);
}else{bp[name]=bq!==null?bq:m;
}}}},reset:function(bu,name,bv){name=this.__kG[name]||name;
if(bv!==false&&this.__kJ[name]){return this.__kJ[name].reset(bu);
}else{bu.style[name]=m;
}},get:qx.core.Environment.select(k,{"mshtml":function(bw,name,bx,by){name=this.__kG[name]||name;
if(by!==false&&this.__kJ[name]){return this.__kJ[name].get(bw,bx);
}if(!bw.currentStyle){return bw.style[name]||m;
}switch(bx){case this.LOCAL_MODE:return bw.style[name]||m;
case this.CASCADED_MODE:return bw.currentStyle[name]||m;
default:var bC=bw.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bC)){return bC;
}var bB=this.__kI[name];

if(bB){var bz=bw.style[name];
bw.style[name]=bC||0;
var bA=bw.style[bB]+b;
bw.style[name]=bz;
return bA;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bC)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bC;
}},"default":function(bD,name,bE,bF){name=this.__kG[name]||name;
if(bF!==false&&this.__kJ[name]){return this.__kJ[name].get(bD,bE);
}switch(bE){case this.LOCAL_MODE:return bD.style[name]||m;
case this.CASCADED_MODE:if(bD.currentStyle){return bD.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bG=qx.dom.Node.getDocument(bD);
var bH=bG.defaultView.getComputedStyle(bD,null);
return bH?bH[name]:m;
}}})},defer:function(bI){bI.__kF();
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
}}),getScrollLeft:qx.core.Environment.select(b,{"mshtml":function(p){var q=(p||window).document;
return q.documentElement.scrollLeft||q.body.scrollLeft;
},"default":function(r){return (r||window).pageXOffset;
}}),getScrollTop:qx.core.Environment.select(b,{"mshtml":function(s){var t=(s||window).document;
return t.documentElement.scrollTop||t.body.scrollTop;
},"default":function(u){return (u||window).pageYOffset;
}}),__ev:function(){var v=this.getWidth()>this.getHeight()?90:0;
var w=window.orientation;

if(w==null||Math.abs(w%180)==v){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};
}else{return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};
}},__ew:null,getOrientation:function(x){var y=(x||window).orientation;

if(y==null){y=this.getWidth(x)>this.getHeight(x)?90:0;
}else{y=this.__ew[y];
}return y;
},isLandscape:function(z){return Math.abs(this.getOrientation(z))==90;
},isPortrait:function(A){return Math.abs(this.getOrientation(A))!==90;
}},defer:function(B){B.__ew=B.__ev();
}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__co={};
this.add(a,h);
},members:{__co:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__co[k]){return this.__co[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__co[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__co[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__co[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__co){v[w]=this.__co[w];
}return v;
}},destruct:function(){this.__co=null;
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(f){var g=this._dynamic;
return f instanceof qx.bom.Font?f:g[f];
},resolve:function(h){var k=this._dynamic;
var i=k[h];

if(i){return i;
}var j=this.getTheme();

if(j!==null&&j.fonts[h]){var l=this.__hd(j.fonts[h]);
return k[h]=(new l).set(j.fonts[h]);
}return h;
},isDynamic:function(m){var p=this._dynamic;

if(m&&(m instanceof qx.bom.Font||p[m]!==undefined)){return true;
}var o=this.getTheme();

if(o!==null&&m&&o.fonts[m]){var n=this.__hd(o.fonts[m]);
p[m]=(new n).set(o.fonts[m]);
return true;
}return false;
},__hc:function(q,r){if(q[r].include){var s=q[q[r].include];
q[r].include=null;
delete q[r].include;
q[r]=qx.lang.Object.mergeWith(q[r],s,false);
this.__hc(q,r);
}},_applyTheme:function(t){var u=this._getDynamic();

for(var x in u){if(u[x].themed){u[x].dispose();
delete u[x];
}}
if(t){var v=t.fonts;

for(var x in v){if(v[x].include&&v[v[x].include]){this.__hc(v,x);
}var w=this.__hd(v[x]);
u[x]=(new w).set(v[x]);
u[x].themed=true;
}}this._setDynamic(u);
},__hd:function(y){if(y.sources){return qx.bom.webfonts.WebFont;
}return qx.bom.Font;
}}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",z="Integer",y="_applyFamily",x="_applyLineHeight",w="Array",v="line-through",u="overline",t="Color",s="qx.bom.Font",r="Number",q="_applyDecoration",o=" ",p="_applySize",m=",",n="_applyColor";
qx.Class.define(s,{extend:qx.core.Object,construct:function(A,B){qx.core.Object.call(this);

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
},__gu:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2,textColor:k},getDefaultStyles:function(){return this.__gu;
}},properties:{size:{check:z,nullable:true,apply:p},lineHeight:{check:r,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,v,u],nullable:true,apply:q},color:{check:t,nullable:true,apply:n}},members:{__gv:null,__gw:null,__gx:null,__gy:null,__gz:null,__gA:null,__gB:null,_applySize:function(J,K){this.__gv=J===null?null:J+g;
},_applyLineHeight:function(L,M){this.__gA=L===null?null:L;
},_applyFamily:function(N,O){var P=k;

for(var i=0,l=N.length;i<l;i++){if(N[i].indexOf(o)>0){P+=f+N[i]+f;
}else{P+=N[i];
}
if(i!==l-1){P+=m;
}}this.__gw=P;
},_applyBold:function(Q,R){this.__gx=Q===null?null:Q?c:d;
},_applyItalic:function(S,T){this.__gy=S===null?null:S?e:d;
},_applyDecoration:function(U,V){this.__gz=U===null?null:U;
},_applyColor:function(W,X){this.__gB=W===null?null:W;
},getStyles:function(){return {fontFamily:this.__gw,fontSize:this.__gv,fontWeight:this.__gx,fontStyle:this.__gy,textDecoration:this.__gz,lineHeight:this.__gA,textColor:this.__gB};
}}});
})();
(function(){var p="qx.debug",o="Invalid argument 'map'",n="=",m="+",k="Invalid argument 'minLength'",j="ecmascript.objectcount",h="Invalid argument 'source'",g="Invalid argument 'target'",f="function",e="Invalid argument 'array'",b="&",d="qx.lang.Object",c="undefined",a="object";
qx.Class.define(d,{statics:{empty:function(q){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(q,o);
}
for(var r in q){if(q.hasOwnProperty(r)){delete q[r];
}}},isEmpty:(qx.core.Environment.get(j))?
function(s){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(s,o);
}return s.__count__===0;
}:
function(t){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(t,o);
}
for(var u in t){return false;
}return true;
},hasMinLength:(qx.core.Environment.get(j))?
function(v,w){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(v,o);
qx.core.Assert&&qx.core.Assert.assertInteger(w,k);
}return v.__count__>=w;
}:
function(x,y){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(x,o);
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
(function(){var h="'",g="qx.bom.webfonts.WebFont",f="",e="qx.debug",d="changeStatus",c=" ",b="_applySources",a="qx.event.type.Data";
qx.Class.define(g,{extend:qx.bom.Font,events:{"changeStatus":a},properties:{sources:{nullable:true,apply:b}},members:{__kE:null,_applySources:function(j,k){var o=[];

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
this.__gI=[];
this.__gJ={};
this.__cX=[];
this.__gK=this.getPreferredFormats();
},statics:{FONT_FORMATS:["eot","woff","ttf","svg"],VALIDATION_TIMEOUT:5000},members:{__gI:null,__gL:null,__gJ:null,__gK:null,__cX:null,__gM:null,require:function(V,W,X,Y){var ba=[];

for(var i=0,l=W.length;i<l;i++){var bc=W[i].split(c);
var bb=qx.util.ResourceManager.getInstance().toUri(bc[0]);

if(bc.length>1){bb=bb+c+bc[1];
}ba.push(bb);
}if(!(qx.core.Environment.get(g)==h&&qx.bom.client.Browser.getVersion()<9)){this.__gN(V,ba,X,Y);
return;
}
if(!this.__gM){this.__gM=new qx.event.Timer(100);
this.__gM.addListener(q,this.__gO,this);
}
if(!this.__gM.isEnabled()){this.__gM.start();
}this.__cX.push([V,ba,X,Y]);
},remove:function(bd){var be=null;

for(var i=0,l=this.__gI.length;i<l;i++){if(this.__gI[i]==bd){be=i;
this.__gU(bd);
break;
}}
if(be){qx.lang.Array.removeAt(this.__gI,be);
}
if(bd in this.__gJ){this.__gJ[bd].dispose();
delete this.__gJ[bd];
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
},removeStyleSheet:function(){this.__gI=[];

if(this.__gL){var bk=this.__gL.ownerNode?this.__gL.ownerNode:this.__gL.owningElement;
qx.dom.Element.removeChild(bk,bk.parentNode);
}this.__gL=null;
},__gN:function(bl,bm,bn,bo){if(!qx.lang.Array.contains(this.__gI,bl)){var br=this.__gQ(bm);
var bq=this.__gR(bl,br);

if(!bq){throw new Error("Couldn't create @font-face rule for WebFont "+bl+"!");
}
if(!this.__gL){this.__gL=qx.bom.Stylesheet.createElement();
}
try{this.__gT(bq);
}catch(bs){if(qx.core.Environment.get(t)){this.warn("Error while adding @font-face rule:",bs.message);
return;
}}this.__gI.push(bl);
}
if(!this.__gJ[bl]){this.__gJ[bl]=new qx.bom.webfonts.Validator(bl);
this.__gJ[bl].setTimeout(qx.bom.webfonts.Manager.VALIDATION_TIMEOUT);
this.__gJ[bl].addListener(f,this.__gP,this);
}
if(bn){var bp=bo||window;
this.__gJ[bl].addListener(f,bn,bp);
}this.__gJ[bl].validate();
},__gO:function(){if(this.__cX.length==0){this.__gM.stop();
return;
}var bt=this.__cX.shift();
this.__gN.apply(this,bt);
},__gP:function(bu){var bv=bu.getData();

if(bv.valid===false){this.remove(bv.family);
}},__gQ:function(bw){var by=qx.bom.webfonts.Manager.FONT_FORMATS;
var bB={};

for(var i=0,l=bw.length;i<l;i++){var bz=null;

for(var x=0;x<by.length;x++){var bA=new RegExp(E+by[x]+O);
var bx=bA.exec(bw[i]);

if(bx){bz=bx[1];
}}
if(bz){bB[bz]=bw[i];
}}return bB;
},__gR:function(bC,bD){var bG=[];
var bE=this.__gK.length>0?this.__gK:qx.bom.webfonts.Manager.FONT_FORMATS;

for(var i=0,l=bE.length;i<l;i++){var bF=bE[i];

if(bD[bF]){bG.push(this.__gS(bF,bD[bF]));
}}var bH=u+bG.join(L)+I;
bH=o+bC+D+bH;
bH=bH+K;
return bH;
},__gS:function(bI,bJ){switch(bI){case a:return k+bJ+y;
case R:return k+bJ+C;
case T:return k+bJ+B;
case e:return k+bJ+G;
default:return null;
}},__gT:function(bK){var bM=z+bK+r;

if(qx.core.Environment.get(g)==h&&qx.core.Environment.get(S)<9){var bL=this.__gV(this.__gL.cssText);
bL+=bM;
this.__gL.cssText=bL;
}else{this.__gL.insertRule(bM,this.__gL.cssRules.length);
}},__gU:function(bN){var bQ=new RegExp(J+bN,Q);

for(var i=0,l=document.styleSheets.length;i<l;i++){var bO=document.styleSheets[i];

if(bO.cssText){var bP=bO.cssText.replace(/\n/g,n).replace(/\r/g,n);
bP=this.__gV(bP);

if(bQ.exec(bP)){bP=bP.replace(bQ,n);
}bO.cssText=bP;
}else if(bO.cssRules){for(var j=0,m=bO.cssRules.length;j<m;j++){var bP=bO.cssRules[j].cssText.replace(/\n/g,n).replace(/\r/g,n);

if(bQ.exec(bP)){this.__gL.deleteRule(j);
return;
}}}}},__gV:function(bR){return bR.replace(s,A);
}},destruct:function(){delete this.__gI;
this.removeStyleSheet();

for(var bS in this.__gJ){this.__gJ[bS].dispose();
}qx.bom.webfonts.Validator.removeDefaultHelperElements();
}});
})();
(function(){var p="",o="/",n="mshtml",m="engine.name",l="io.ssl",k="string",j="//",i="?",h="data",g="type",c="data:image/",f=";",e="encoding",b="qx.util.ResourceManager",a="singleton",d=",";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
},statics:{__hg:qx.$$resources||{},__ig:{}},members:{has:function(q){return !!this.self(arguments).__hg[q];
},getData:function(r){return this.self(arguments).__hg[r]||null;
},getImageWidth:function(s){var t=this.self(arguments).__hg[s];
return t?t[0]:null;
},getImageHeight:function(u){var v=this.self(arguments).__hg[u];
return v?v[1]:null;
},getImageFormat:function(w){var x=this.self(arguments).__hg[w];
return x?x[2]:null;
},getCombinedFormat:function(y){var B=p;
var A=this.self(arguments).__hg[y];
var z=A&&A.length>4&&typeof (A[4])==k&&this.constructor.__hg[A[4]];

if(z){var D=A[4];
var C=this.constructor.__hg[D];
B=C[2];
}return B;
},toUri:function(E){if(E==null){return E;
}var F=this.self(arguments).__hg[E];

if(!F){return E;
}
if(typeof F===k){var H=F;
}else{var H=F[3];
if(!H){return E;
}}var G=p;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){G=this.self(arguments).__ig[H];
}return G+qx.$$libraries[H].resourceUri+o+E;
},toDataUri:function(I){var K=this.constructor.__hg[I];
var L=this.constructor.__hg[K[4]];
var M;

if(L){var J=L[4][I];
M=c+J[g]+f+J[e]+d+J[h];
}else{M=this.toUri(I);
}return M;
}},defer:function(N){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var R in qx.$$libraries){var P;

if(qx.$$libraries[R].resourceUri){P=qx.$$libraries[R].resourceUri;
}else{N.__ig[R]=p;
continue;
}if(P.match(/^\/\//)!=null){N.__ig[R]=window.location.protocol;
}else if(P.match(/^\//)!=null){N.__ig[R]=window.location.protocol+j+window.location.host;
}else if(P.match(/^\.\//)!=null){var O=document.URL;
N.__ig[R]=O.substring(0,O.lastIndexOf(o)+1);
}else if(P.match(/^http/)!=null){N.__ig[R]=p;
}else{var S=window.location.href.indexOf(i);
var Q;

if(S==-1){Q=window.location.href;
}else{Q=window.location.href.substring(0,S);
}N.__ig[R]=Q.substring(0,Q.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var k="interval",j="qx.event.Timer",i="_applyInterval",h="func is not a function",g="Boolean",f="qx.debug",d="No timeout given",c="Integer",b="qx.event.type.Event",a="_applyEnabled";
qx.Class.define(j,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);
this.setEnabled(false);

if(l!=null){this.setInterval(l);
}var self=this;
this.__ee=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(m,n,o){if(qx.core.Environment.get(f)){qx.core.Assert.assertFunction(m,h);
qx.core.Assert.assertNotUndefined(o,d);
}var p=new qx.event.Timer(o);
p.__ef=m;
p.addListener(k,function(e){p.stop();
m.call(n,e);
p.dispose();
n=null;
},n);
p.start();
return p;
}},properties:{enabled:{init:true,check:g,apply:a},interval:{check:c,init:1000,apply:i}},members:{__eg:null,__ee:null,_applyInterval:function(q,r){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(s,t){if(t){window.clearInterval(this.__eg);
this.__eg=null;
}else if(s){this.__eg=window.setInterval(this.__ee,this.getInterval());
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
}})},destruct:function(){if(this.__eg){window.clearInterval(this.__eg);
}this.__eg=this.__ee=null;
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
}this.__dd=this._getRequestedHelpers();
},statics:{COMPARISON_FONTS:{sans:["Arial","Helvetica","sans-serif"],serif:["Times New Roman","Georgia","serif"]},HELPER_CSS:{position:"absolute",margin:"0",padding:"0",top:"-1000px",left:"-1000px",fontSize:"350px",width:"auto",height:"auto",lineHeight:"normal",fontVariant:"normal"},COMPARISON_STRING:"WEei",__de:null,__df:null,removeDefaultHelperElements:function(){var j=qx.bom.webfonts.Validator.__df;

if(j){for(var k in j){document.body.removeChild(j[k]);
}}delete qx.bom.webfonts.Validator.__df;
}},properties:{fontFamily:{nullable:true,init:null,apply:c},timeout:{check:a,init:5000}},events:{"changeStatus":e},members:{__dd:null,__dg:null,__dh:null,validate:function(){this.__dh=new Date().getTime();

if(this.__dg){this.__dg.restart();
}else{this.__dg=new qx.event.Timer(100);
this.__dg.addListener(g,this.__dj,this);
qx.event.Timer.once(function(){this.__dg.start();
},this,0);
}},_reset:function(){if(this.__dd){for(var m in this.__dd){var l=this.__dd[m];
document.body.removeChild(l);
}this.__dd=null;
}},_isFontValid:function(){if(!qx.bom.webfonts.Validator.__de){this.__di();
}
if(!this.__dd){this.__dd=this._getRequestedHelpers();
}var o=qx.bom.element.Dimension.getWidth(this.__dd.sans);
var n=qx.bom.element.Dimension.getWidth(this.__dd.serif);
var p=qx.bom.webfonts.Validator;

if(o!==p.__de.sans&&n!==p.__de.serif){return true;
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
}},__di:function(){var x=qx.bom.webfonts.Validator;

if(!x.__df){x.__df={sans:this._getHelperElement(x.COMPARISON_FONTS.sans),serif:this._getHelperElement(x.COMPARISON_FONTS.serif)};
}x.__de={sans:qx.bom.element.Dimension.getWidth(x.__df.sans),serif:qx.bom.element.Dimension.getWidth(x.__df.serif)};
},__dj:function(){if(this._isFontValid()){this.__dg.stop();
this._reset();
this.fireDataEvent(f,{family:this.getFontFamily(),valid:true});
}else{var y=new Date().getTime();

if(y-this.__dh>=this.getTimeout()){this.__dg.stop();
this._reset();
this.fireDataEvent(f,{family:this.getFontFamily(),valid:false});
}}}},destruct:function(){this._reset();
this.__dg.stop();
this.__dg.removeListener(g,this.__dj,this);
this._disposeObjects(this.__dg);
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
},__hX:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(r);
var u=parseInt(s.get(r,d)||i,10);
var x=parseInt(s.get(r,e)||i,10);

if(this.__hX[t]){var w=r.clientWidth;

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

if(this.__hX[C]){return y.clientHeight-B-A;
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
this.__gE={};
this.__gF={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__gG:{},__gE:null,__gF:null,_applyTheme:function(j,k){this.__gF={};
this.__gE={};
},__gH:function(l,m,n){var s=m.appearances;
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
return this.__gH(r,m,n);
}}}for(var i=0;i<p.length-1;i++){p.shift();
var q=p.join(w);
var o=this.__gH(q,m);

if(o){return o;
}}if(n!=null){return this.__gH(n,m);
}return null;
}else if(typeof v===h){return this.__gH(v,m,n);
}else if(v.include&&!v.style){return this.__gH(v.include,m,n);
}return l;
},styleFrom:function(x,y,z,A){if(!z){z=this.getTheme();
}var F=this.__gF;
var B=F[x];

if(!B){B=F[x]=this.__gH(x,z,A);
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
}}var E=this.__gE;

if(E[M]!==undefined){return E[M];
}if(!y){y=this.__gG;
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
}},destruct:function(){this.__gE=this.__gF=null;
}});
})();
(function(){var t="object",s="qx.debug",r="Theme",q="icons",p="widgets",o="undefined",n="fonts",m="string",k="colors",j="decorations",d="meta",h="appearances",g="borders",c="other",b="qx.Theme",f="]",e="[Theme ";
qx.Bootstrap.define(b,{statics:{define:function(name,u){if(!u){var u={};
}u.include=this.__op(u.include);
u.patch=this.__op(u.patch);
if(qx.core.Environment.get(s)){this.__gd(name,u);
}var v={$$type:r,name:name,title:u.title,toString:this.genericToString};
if(u.extend){v.supertheme=u.extend;
}v.basename=qx.Bootstrap.createNamespace(name,v);
this.__os(v,u);
this.__oq(v,u);
this.$$registry[name]=v;
for(var i=0,a=u.include,l=a.length;i<l;i++){this.include(v,a[i]);
}
for(var i=0,a=u.patch,l=a.length;i<l;i++){this.patch(v,a[i]);
}},__op:function(w){if(!w){return [];
}
if(qx.Bootstrap.isArray(w)){return w;
}else{return [w];
}},__oq:function(x,y){var z=y.aliases||{};

if(y.extend&&y.extend.aliases){qx.Bootstrap.objectMergeWith(z,y.extend.aliases,false);
}x.aliases=z;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return e+this.name+f;
},__or:function(A){for(var i=0,B=this.__ot,l=B.length;i<l;i++){if(A[B[i]]){return B[i];
}}},__os:function(C,D){var G=this.__or(D);
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
},$$registry:{},__ot:[k,g,j,n,q,p,h,d],__gb:qx.core.Environment.select(s,{"true":{"title":m,"aliases":t,"type":m,"extend":t,"colors":t,"borders":t,"decorations":t,"fonts":t,"icons":t,"widgets":t,"appearances":t,"meta":t,"include":t,"patch":t},"default":null}),__ou:qx.core.Environment.select(s,{"true":{"color":t,"border":t,"decoration":t,"font":t,"icon":t,"appearance":t,"widget":t},"default":null}),__gd:qx.core.Environment.select(s,{"true":function(name,J){var O=this.__gb;

for(var N in J){if(O[N]===undefined){throw new Error('The configuration key "'+N+'" in theme "'+name+'" is not allowed!');
}
if(J[N]==null){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value is undefined/null!');
}
if(O[N]!==null&&typeof J[N]!==O[N]){throw new Error('Invalid type of key "'+N+'" in theme "'+name+'"! The type of the key must be "'+O[N]+'"!');
}}var M=[k,g,j,n,q,p,h,d];

for(var i=0,l=M.length;i<l;i++){var N=M[i];
if(J[N]!==undefined&&N===q){qx.Bootstrap.warn("The key 'icons' is deprecated, please check your configuration: "+name);
}
if(J[N]!==undefined&&(J[N] instanceof Array||J[N] instanceof RegExp||J[N] instanceof Date||J[N].classname!==undefined)){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value needs to be a map!');
}}var K=0;

for(var i=0,l=M.length;i<l;i++){var N=M[i];

if(J[N]){K++;
}
if(K>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(J.meta){var L;

for(var N in J.meta){L=J.meta[N];

if(this.__ou[N]===undefined){throw new Error('The key "'+N+'" is not allowed inside a meta theme block.');
}
if(typeof L!==this.__ou[N]){throw new Error('The type of the key "'+N+'" inside the meta block is wrong.');
}
if(!(typeof L===t&&L!==null&&L.$$type===r)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+N+'" in theme "'+name+'" is invalid: '+L);
}}}if(J.extend&&J.extend.$$type!==r){throw new Error('Invalid extend in theme "'+name+'": '+J.extend);
}if(J.include){for(var i=0,l=J.include.length;i<l;i++){if(typeof (J.include[i])==o||J.include[i].$$type!==r){throw new Error('Invalid include in theme "'+name+'": '+J.include[i]);
}}}if(J.patch){for(var i=0,l=J.patch.length;i<l;i++){if(typeof (J.patch[i])==o||J.patch[i].$$type!==r){throw new Error('Invalid patch in theme "'+name+'": '+J.patch[i]);
}}}},"default":function(){}}),patch:function(P,Q){var S=this.__or(Q);

if(S!==this.__or(P)){throw new Error("The mixins '"+P.name+"' are not compatible '"+Q.name+"'!");
}var R=Q[S];
var T=P.$$clazz.prototype;

for(var U in R){T[U]=R[U];
}},include:function(V,W){var Y=W.type;

if(Y!==V.type){throw new Error("The mixins '"+V.name+"' are not compatible '"+W.name+"'!");
}var X=W[Y];
var ba=V.$$clazz.prototype;

for(var bb in X){if(ba[bb]!==undefined){continue;
}ba[bb]=X[bb];
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
}if(!z||
!z.getEnabled()||
z.isBlockToolTip()||
(!x&&!this.getShowToolTips())||(x&&!this.getShowInvalidToolTips())){return;
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
this.__bL={};
},statics:{MAX_SIZE:15,__bM:d},members:{__bL:null,getDecoratorElement:function(k){var p=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(k)){var n=k;
var m=qx.theme.manager.Decoration.getInstance().resolve(k);
}else{var n=p.__bM;
m=k;
}var o=this.__bL;

if(o[n]&&o[n].length>0){var l=o[n].pop();
}else{var l=this._createDecoratorElement(m,n);
}l.$$pooled=false;
return l;
},poolDecorator:function(q){if(!q||q.$$pooled||q.isDisposed()){return;
}var t=qx.ui.core.DecoratorFactory;
var r=q.getId();

if(r==t.__bM){q.dispose();
return;
}var s=this.__bL;

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

for(var z in this.__bL){x+=1;
y+=this.__bL[z].length;
}return [e,this.$$hash,c,b,x,a,y].join(g);
},"false":function(){return qx.core.Object.prototype.toString.call(this);
}})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var B=this.__bL;

for(var A in B){qx.util.DisposeUtil.disposeArray(B,A);
}}this.__bL=null;
}});
})();
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="qx.debug",b="allowShrinkY",a="Wrong 'width' argument. ",E="Something went wrong with the layout of ",D="bottom",C="Wrong 'left' argument. ",B="baseline",A="marginBottom",z="qx.ui.core.LayoutItem",y="center",x="marginTop",w="!",v="allowGrowX",q="middle",r="marginLeft",o="allowShrinkX",p="top",m="right",n="marginRight",k="abstract",l="Wrong 'top' argument. ",s="Wrong 'height' argument. ",t="allowGrowY",u="left";
qx.Class.define(z,{type:k,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[v,o],mode:e,themeable:true},allowStretchY:{group:[t,b],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[x,n,A,r],mode:e,themeable:true},alignX:{check:[u,y,m],nullable:true,apply:d,themeable:true},alignY:{check:[p,q,D,B],nullable:true,apply:d,themeable:true}},members:{__cb:null,__cc:null,__cd:null,__ce:null,__cf:null,__cg:null,__ch:null,getBounds:function(){return this.__cg||this.__cc||null;
},clearSeparators:function(){},renderSeparator:function(F,G){},renderLayout:function(H,top,I,J){if(qx.core.Environment.get(c)){var K=E+this.toString()+w;
this.assertInteger(H,C+K);
this.assertInteger(top,l+K);
this.assertInteger(I,a+K);
this.assertInteger(J,s+K);
}var L=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var L=this._getHeightForWidth(I);
}
if(L!=null&&L!==this.__cb){this.__cb=L;
qx.ui.core.queue.Layout.add(this);
return null;
}var N=this.__cc;

if(!N){N=this.__cc={};
}var M={};

if(H!==N.left||top!==N.top){M.position=true;
N.left=H;
N.top=top;
}
if(I!==N.width||J!==N.height){M.size=true;
N.width=I;
N.height=J;
}if(this.__cd){M.local=true;
delete this.__cd;
}
if(this.__cf){M.margin=true;
delete this.__cf;
}return M;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__cd;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__cd=true;
this.__ce=null;
},getSizeHint:function(O){var P=this.__ce;

if(P){return P;
}
if(O===false){return null;
}P=this.__ce=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__cb&&this.getHeight()==null){P.height=this.__cb;
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
},_applyMargin:function(){this.__cf=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__cg;
},setUserBounds:function(ba,top,bb,bc){this.__cg={left:ba,top:top,width:bb,height:bc};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__cg;
qx.ui.core.queue.Layout.add(this);
},__ci:{},setLayoutProperties:function(bd){if(bd==null){return;
}var be=this.__ch;

if(!be){be=this.__ch={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(bd);
}for(var bf in bd){if(bd[bf]==null){delete be[bf];
}else{be[bf]=bd[bf];
}}},getLayoutProperties:function(){return this.__ch||this.__ci;
},clearLayoutProperties:function(){delete this.__ch;
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
var bk=this.__ch;

if(bk){bj.__ch=qx.lang.Object.clone(bk);
}return bj;
}},destruct:function(){this.$$parent=this.$$subparent=this.__ch=this.__cc=this.__cg=this.__ce=null;
}});
})();
(function(){var cu="px",ct="qx.debug",cs="Boolean",cr="qx.event.type.Drag",cq="qx.event.type.Mouse",cp="visible",co="qx.event.type.Focus",cn="Integer",cm="qx.event.type.Touch",cl="qx.event.type.Data",bx="excluded",bw="_applyPadding",bv="qx.event.type.Event",bu="on",bt="hidden",bs="engine.name",br="contextmenu",bq="String",bp="tabIndex",bo="focused",cB="changeVisibility",cC="mshtml",cz="hovered",cA="qx.event.type.KeySequence",cx="absolute",cy="backgroundColor",cv="drag",cw="div",cD="object",cE="disabled",bV="move",bU="dragstart",bX="qx.dynlocale",bW="dragchange",ca="dragend",bY="resize",cc="Decorator",cb="zIndex",bT="opacity",bS="default",c="Color",d="qxType",f="changeToolTipText",g="beforeContextmenuOpen",h="_applyNativeContextMenu",j="content",k="_applyBackgroundColor",m="event.pointer",n="_applyFocusable",o="changeShadow",cI="qx.event.type.KeyInput",cH="createChildControl",cG="Invalid left decorator inset detected: ",cF="Font",cM="_applyShadow",cL="Invalid layout data: ",cK="Could not add widget to itself: ",cJ="_applyEnabled",cO="_applySelectable",cN="__jc",N="Number",O="_applyKeepActive",L="_applyVisibility",M="The 'after' widget is not a child of this widget!",R="__jk",S="repeat",P="qxDraggable",Q="syncAppearance",J="paddingLeft",K="_applyDroppable",w="Wrong 'left' argument. ",v="protector",y="#",x="__iX",s="qx.event.type.MouseWheel",r="_applyCursor",u="_applyDraggable",t="__ji",q="changeTextColor",p="$$widget",X="changeContextMenu",Y="paddingTop",ba="changeSelectable",bb="hideFocus",T="Invalid top decorator inset detected: ",U="none",V="outline",W="The 'before' widget is not a child of this widget!",bc="_applyAppearance",bd=" returned an invalid size hint!",G="__iW",F="_applyOpacity",E="url(",D=")",C="qx.ui.core.Widget",B="minHeight is larger than maxHeight!",A="_applyFont",z="cursor",I="qxDroppable",H="changeZIndex",be="changeEnabled",bf="changeFont",bg="_applyDecorator",bh="_applyZIndex",bi="_applyTextColor",bj="qx.ui.menu.Menu",bk="Invalid right decorator inset detected: ",bl="__jg",bm="Invalid widget to add: ",bn="_applyToolTipText",bB="The layout of the widget",bA="true",bz="widget",by="Wrong 'top' argument. ",bF="changeDecorator",bE="__jb",bD="changeBackgroundColor",bC="_applyTabIndex",bH="Invalid bottom decorator inset detected: ",bG="changeAppearance",bO="__jd",bP="shorthand",bM="/",bN="",bK="_applyContextMenu",bL="container",bI="paddingBottom",bJ="changeNativeContextMenu",bQ="undefined",bR="qx.ui.tooltip.ToolTip",ce="qxKeepActive",cd="_applyKeepFocus",cg="paddingRight",cf="minWidth is larger than maxWidth!",ci="changeLocale",ch="qxKeepFocus",ck="opera",cj="qx/static/blank.gif";
qx.Class.define(C,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__iW=this._createContainerElement();
this.__iX=this.__jj();
this.__iW.add(this.__iX);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bv,disappear:bv,createChildControl:cl,resize:cl,move:cl,syncAppearance:cl,mousemove:cq,mouseover:cq,mouseout:cq,mousedown:cq,mouseup:cq,click:cq,dblclick:cq,contextmenu:cq,beforeContextmenuOpen:cl,mousewheel:s,touchstart:cm,touchend:cm,touchmove:cm,touchcancel:cm,tap:cm,swipe:cm,keyup:cA,keydown:cA,keypress:cA,keyinput:cI,focus:co,blur:co,focusin:co,focusout:co,activate:co,deactivate:co,capture:bv,losecapture:bv,drop:cr,dragleave:cr,dragover:cr,drag:cr,dragstart:cr,dragend:cr,dragchange:cr,droprequest:cr},properties:{paddingTop:{check:cn,init:0,apply:bw,themeable:true},paddingRight:{check:cn,init:0,apply:bw,themeable:true},paddingBottom:{check:cn,init:0,apply:bw,themeable:true},paddingLeft:{check:cn,init:0,apply:bw,themeable:true},padding:{group:[Y,cg,bI,J],mode:bP,themeable:true},zIndex:{nullable:true,init:null,apply:bh,event:H,check:cn,themeable:true},decorator:{nullable:true,init:null,apply:bg,event:bF,check:cc,themeable:true},shadow:{nullable:true,init:null,apply:cM,event:o,check:cc,themeable:true},backgroundColor:{nullable:true,check:c,apply:k,event:bD,themeable:true},textColor:{nullable:true,check:c,apply:bi,event:q,themeable:true,inheritable:true},font:{nullable:true,apply:A,check:cF,event:bf,themeable:true,inheritable:true,dereference:true},opacity:{check:N,apply:F,themeable:true,nullable:true,init:null},cursor:{check:bq,apply:r,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bR,nullable:true},toolTipText:{check:bq,nullable:true,event:f,apply:bn},toolTipIcon:{check:bq,nullable:true,event:f},blockToolTip:{check:cs,init:false},visibility:{check:[cp,bt,bx],init:cp,apply:L,event:cB},enabled:{init:true,check:cs,inheritable:true,apply:cJ,event:be},anonymous:{init:false,check:cs},tabIndex:{check:cn,nullable:true,apply:bC},focusable:{check:cs,init:false,apply:n},keepFocus:{check:cs,init:false,apply:cd},keepActive:{check:cs,init:false,apply:O},draggable:{check:cs,init:false,apply:u},droppable:{check:cs,init:false,apply:K},selectable:{check:cs,init:false,event:ba,apply:cO},contextMenu:{check:bj,apply:bK,nullable:true,event:X},nativeContextMenu:{check:cs,init:false,themeable:true,event:bJ,apply:h},appearance:{check:bq,init:bz,apply:bc,event:bG}},statics:{DEBUG:false,getWidgetByElement:function(cP,cQ){while(cP){var cR=cP.$$widget;
if(cR!=null){var cS=qx.core.ObjectRegistry.fromHashCode(cR);
if(!cQ||!cS.getAnonymous()){return cS;
}}try{cP=cP.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cT){while(cT){if(parent==cT){return true;
}cT=cT.getLayoutParent();
}return false;
},__iY:new qx.ui.core.DecoratorFactory(),__ja:new qx.ui.core.DecoratorFactory()},members:{__iW:null,__iX:null,__jb:null,__jc:null,__jd:null,__je:null,__jf:null,__jg:null,_getLayout:function(){return this.__jg;
},_setLayout:function(cU){if(qx.core.Environment.get(ct)){if(cU){this.assertInstance(cU,qx.ui.layout.Abstract);
}}
if(this.__jg){this.__jg.connectToWidget(null);
}
if(cU){cU.connectToWidget(this);
}this.__jg=cU;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cV=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cV);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cV);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__jh:function(a,b){if(a==b){return false;
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
if(dl.size){var dk=this.__jd;

if(dk){dk.setStyles({width:db+cu,height:dc+cu});
}}
if(dl.size||this._updateInsets){if(this.__jb){this.__jb.resize(db,dc);
}}
if(dl.size){if(this.__jc){var dd=this.__jc.getInsets();
var dh=db+dd.left+dd.right;
var df=dc+dd.top+dd.bottom;
this.__jc.resize(dh,df);
}}
if(di||dl.local||dl.margin){if(this.__jg&&this.hasLayoutChildren()){this.__jg.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(dl.position&&this.hasListener(bV)){this.fireDataEvent(bV,this.getBounds());
}
if(dl.size&&this.hasListener(bY)){this.fireDataEvent(bY,this.getBounds());
}delete this._updateInsets;
return dl;
},__ji:null,clearSeparators:function(){var dp=this.__ji;

if(!dp){return;
}var dq=qx.ui.core.Widget.__iY;
var content=this.getContentElement();
var dn;

for(var i=0,l=dp.length;i<l;i++){dn=dp[i];
dq.poolDecorator(dn);
content.remove(dn);
}dp.length=0;
},renderSeparator:function(dr,ds){var dt=qx.ui.core.Widget.__iY.getDecoratorElement(dr);
this.getContentElement().add(dt);
dt.resize(ds.width,ds.height);
dt.setStyles({left:ds.left+cu,top:ds.top+cu});
if(!this.__ji){this.__ji=[dt];
}else{this.__ji.push(dt);
}},_computeSizeHint:function(){var dA=this.getWidth();
var dz=this.getMinWidth();
var dv=this.getMaxWidth();
var dy=this.getHeight();
var dw=this.getMinHeight();
var dx=this.getMaxHeight();

if(qx.core.Environment.get(ct)){if(dz!==null&&dv!==null){this.assert(dz<=dv,cf);
}
if(dw!==null&&dx!==null){this.assert(dw<=dx,B);
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

if(this.__jg){this.__jg.invalidateLayoutCache();
}},_getContentHint:function(){var dF=this.__jg;

if(dF){if(this.hasLayoutChildren()){var dG=dF.getSizeHint();

if(qx.core.Environment.get(ct)){var dE=bB+this.toString()+bd;
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

if(this.__jb){var dQ=this.__jb.getInsets();

if(qx.core.Environment.get(ct)){this.assertNumber(dQ.top,T+dQ.top);
this.assertNumber(dQ.right,bk+dQ.right);
this.assertNumber(dQ.bottom,bH+dQ.bottom);
this.assertNumber(dQ.left,cG+dQ.left);
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
},isSeeable:function(){var dX=this.getContainerElement().getDomElement();

if(dX){return dX.offsetWidth>0;
}var dW=this;

do{if(!dW.isVisible()){return false;
}
if(dW.isRootWidget()){return true;
}dW=dW.getLayoutParent();
}while(dW);
return false;
},_createContainerElement:function(){var ea={"$$widget":this.toHashCode()};

if(qx.core.Environment.get(ct)){ea.qxType=bL;
ea.qxClass=this.classname;
}var dY={zIndex:0,position:cx};
return new qx.html.Element(cw,dY,ea);
},__jj:function(){var eb=this._createContentElement();

if(qx.core.Environment.get(ct)){eb.setAttribute(d,j);
}eb.setStyles({"position":cx,"zIndex":10});
return eb;
},_createContentElement:function(){return new qx.html.Element(cw,{overflowX:bt,overflowY:bt});
},getContainerElement:function(){return this.__iW;
},getContentElement:function(){return this.__iX;
},getDecoratorElement:function(){return this.__jb||null;
},getShadowElement:function(){return this.__jc||null;
},__jk:null,getLayoutChildren:function(){var ed=this.__jk;

if(!ed){return this.__jl;
}var ee;

for(var i=0,l=ed.length;i<l;i++){var ec=ed[i];

if(ec.hasUserBounds()||ec.isExcluded()){if(ee==null){ee=ed.concat();
}qx.lang.Array.remove(ee,ec);
}}return ee||ed;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var ef=this.__jg;

if(ef){ef.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var eg=this.__jk;

if(!eg){return false;
}var eh;

for(var i=0,l=eg.length;i<l;i++){eh=eg[i];

if(!eh.hasUserBounds()&&!eh.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__jl:[],_getChildren:function(){return this.__jk||this.__jl;
},_indexOf:function(ei){var ej=this.__jk;

if(!ej){return -1;
}return ej.indexOf(ei);
},_hasChildren:function(){var ek=this.__jk;
return ek!=null&&(!!ek[0]);
},addChildrenToQueue:function(em){var en=this.__jk;

if(!en){return;
}var eo;

for(var i=0,l=en.length;i<l;i++){eo=en[i];
em.push(eo);
eo.addChildrenToQueue(em);
}},_add:function(ep,eq){if(ep.getLayoutParent()==this){qx.lang.Array.remove(this.__jk,ep);
}
if(this.__jk){this.__jk.push(ep);
}else{this.__jk=[ep];
}this.__jm(ep,eq);
},_addAt:function(er,es,et){if(!this.__jk){this.__jk=[];
}if(er.getLayoutParent()==this){qx.lang.Array.remove(this.__jk,er);
}var eu=this.__jk[es];

if(eu===er){er.setLayoutProperties(et);
}
if(eu){qx.lang.Array.insertBefore(this.__jk,er,eu);
}else{this.__jk.push(er);
}this.__jm(er,et);
},_addBefore:function(ev,ew,ex){if(qx.core.Environment.get(ct)){this.assertInArray(ew,this._getChildren(),W);
}
if(ev==ew){return;
}
if(!this.__jk){this.__jk=[];
}if(ev.getLayoutParent()==this){qx.lang.Array.remove(this.__jk,ev);
}qx.lang.Array.insertBefore(this.__jk,ev,ew);
this.__jm(ev,ex);
},_addAfter:function(ey,ez,eA){if(qx.core.Environment.get(ct)){this.assertInArray(ez,this._getChildren(),M);
}
if(ey==ez){return;
}
if(!this.__jk){this.__jk=[];
}if(ey.getLayoutParent()==this){qx.lang.Array.remove(this.__jk,ey);
}qx.lang.Array.insertAfter(this.__jk,ey,ez);
this.__jm(ey,eA);
},_remove:function(eB){if(!this.__jk){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__jk,eB);
this.__jn(eB);
},_removeAt:function(eC){if(!this.__jk){throw new Error("This widget has no children!");
}var eD=this.__jk[eC];
qx.lang.Array.removeAt(this.__jk,eC);
this.__jn(eD);
return eD;
},_removeAll:function(){if(!this.__jk){return [];
}var eE=this.__jk.concat();
this.__jk.length=0;

for(var i=eE.length-1;i>=0;i--){this.__jn(eE[i]);
}qx.ui.core.queue.Layout.add(this);
return eE;
},_afterAddChild:null,_afterRemoveChild:null,__jm:function(eF,eG){if(qx.core.Environment.get(ct)){this.assertInstance(eF,qx.ui.core.LayoutItem,bm+eF);
this.assertNotIdentical(eF,this,cK+eF);

if(eG!=null){this.assertType(eG,cD,cL+eG);
}}var parent=eF.getLayoutParent();

if(parent&&parent!=this){parent._remove(eF);
}eF.setLayoutParent(this);
if(eG){eF.setLayoutProperties(eG);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(eF);
}},__jn:function(eH){if(qx.core.Environment.get(ct)){this.assertNotUndefined(eH);
}
if(eH.getLayoutParent()!==this){throw new Error("Remove Error: "+eH+" is not a child of this widget!");
}eH.setLayoutParent(null);
if(this.__jg){this.__jg.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(eH);
}},capture:function(eI){this.getContainerElement().capture(eI);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(eJ,eK,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__jd){return;
}var eL=this.__jd=new qx.html.Element;

if(qx.core.Environment.get(ct)){eL.setAttribute(d,v);
}eL.setStyles({position:cx,top:0,left:0,zIndex:7});
var eM=this.getBounds();

if(eM){this.__jd.setStyles({width:eM.width+cu,height:eM.height+cu});
}if((qx.core.Environment.get(bs)==cC)){eL.setStyles({backgroundImage:E+qx.util.ResourceManager.getInstance().toUri(cj)+D,backgroundRepeat:S});
}this.getContainerElement().add(eL);
},_applyDecorator:function(eN,eO){if(qx.core.Environment.get(ct)){if(eN&&typeof eN===cD){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and "+"processing time. Often it is better to lay them out to a "+"theme file. Hash code of decorator object: "+eN);
}}}var eR=qx.ui.core.Widget.__iY;
var eP=this.getContainerElement();
if(!this.__jd&&!qx.core.Environment.get(m)){this._createProtectorElement();
}if(eO){eP.remove(this.__jb);
eR.poolDecorator(this.__jb);
}if(eN){var eQ=this.__jb=eR.getDecoratorElement(eN);
eQ.setStyle(cb,5);
eP.add(eQ);
}else{delete this.__jb;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__jh(eO,eN)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(eN){var eS=this.getBounds();

if(eS){eQ.resize(eS.width,eS.height);
this.__jd&&
this.__jd.setStyles({width:eS.width+cu,height:eS.height+cu});
}}},_applyShadow:function(eT,eU){var fc=qx.ui.core.Widget.__ja;
var eW=this.getContainerElement();
if(eU){eW.remove(this.__jc);
fc.poolDecorator(this.__jc);
}if(eT){var eY=this.__jc=fc.getDecoratorElement(eT);
eW.add(eY);
var fb=eY.getInsets();
eY.setStyles({left:(-fb.left)+cu,top:(-fb.top)+cu});
var fa=this.getBounds();

if(fa){var eX=fa.width+fb.left+fb.right;
var eV=fa.height+fb.top+fb.bottom;
eY.resize(eX,eV);
}eY.tint(null);
}else{delete this.__jc;
}},_applyToolTipText:function(fd,fe){if(qx.core.Environment.get(bX)){if(this.__jf){return;
}var ff=qx.locale.Manager.getInstance();
this.__jf=ff.addListener(ci,function(){var fg=this.getToolTipText();

if(fg&&fg.translate){this.setToolTipText(fg.translate());
}},this);
}},_applyTextColor:function(fh,fi){},_applyZIndex:function(fj,fk){this.getContainerElement().setStyle(cb,fj==null?0:fj);
},_applyVisibility:function(fl,fm){var fn=this.getContainerElement();

if(fl===cp){fn.show();
}else{fn.hide();
}var parent=this.$$parent;

if(parent&&(fm==null||fl==null||fm===bx||fl===bx)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(fo,fp){this.getContainerElement().setStyle(bT,fo==1?null:fo);
if((qx.core.Environment.get(bs)==cC)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var fq=(fo==1||fo==null)?null:0.99;
this.getContentElement().setStyle(bT,fq);
}}},_applyCursor:function(fr,fs){if(fr==null&&!this.isSelectable()){fr=bS;
}this.getContainerElement().setStyle(z,fr,qx.core.Environment.get(bs)==ck);
},_applyBackgroundColor:function(ft,fu){var fv=this.getBackgroundColor();
var fx=this.getContainerElement();

if(this.__jb){this.__jb.tint(fv);
fx.setStyle(cy,null);
}else{var fw=qx.theme.manager.Color.getInstance().resolve(fv);
fx.setStyle(cy,fw);
}},_applyFont:function(fy,fz){},__jo:null,$$stateChanges:null,_forwardStates:null,hasState:function(fA){var fB=this.__jo;
return !!fB&&!!fB[fA];
},addState:function(fC){var fD=this.__jo;

if(!fD){fD=this.__jo={};
}
if(fD[fC]){return;
}this.__jo[fC]=true;
if(fC===cz){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fG=this.__jr;

if(forward&&forward[fC]&&fG){var fE;

for(var fF in fG){fE=fG[fF];

if(fE instanceof qx.ui.core.Widget){fG[fF].addState(fC);
}}}},removeState:function(fH){var fI=this.__jo;

if(!fI||!fI[fH]){return;
}delete this.__jo[fH];
if(fH===cz){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fL=this.__jr;

if(forward&&forward[fH]&&fL){for(var fK in fL){var fJ=fL[fK];

if(fJ instanceof qx.ui.core.Widget){fJ.removeState(fH);
}}}},replaceState:function(fM,fN){var fO=this.__jo;

if(!fO){fO=this.__jo={};
}
if(!fO[fN]){fO[fN]=true;
}
if(fO[fM]){delete fO[fM];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fR=this.__jr;

if(forward&&forward[fN]&&fR){for(var fQ in fR){var fP=fR[fQ];

if(fP instanceof qx.ui.core.Widget){fP.replaceState(fM,fN);
}}}},__jp:null,__jq:null,syncAppearance:function(){var fW=this.__jo;
var fV=this.__jp;
var fX=qx.theme.manager.Appearance.getInstance();
var fT=qx.core.Property.$$method.setThemed;
var gc=qx.core.Property.$$method.resetThemed;
if(this.__jq){delete this.__jq;
if(fV){var fS=fX.styleFrom(fV,fW,null,this.getAppearance());
fV=null;
}}if(!fV){var fU=this;
var gb=[];

do{gb.push(fU.$$subcontrol||fU.getAppearance());
}while(fU=fU.$$subparent);
fV=gb.reverse().join(bM).replace(/#[0-9]+/g,bN);
this.__jp=fV;
}var fY=fX.styleFrom(fV,fW,null,this.getAppearance());

if(fY){if(fS){for(var ga in fS){if(fY[ga]===undefined){this[gc[ga]]();
}}}if(qx.core.Environment.get(ct)){for(var ga in fY){if(!this[fT[ga]]){throw new Error(this.classname+' has no themeable property "'+ga+'" while styling '+fV);
}}}for(var ga in fY){fY[ga]===undefined?this[gc[ga]]():this[fT[ga]](fY[ga]);
}}else if(fS){for(var ga in fS){this[gc[ga]]();
}}this.fireDataEvent(Q,this.__jo);
},_applyAppearance:function(gd,ge){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__je){qx.ui.core.queue.Appearance.add(this);
this.__je=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__jq=true;
qx.ui.core.queue.Appearance.add(this);
var gh=this.__jr;

if(gh){var gf;

for(var gg in gh){gf=gh[gg];

if(gf instanceof qx.ui.core.Widget){gf.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var gi=this;

while(gi.getAnonymous()){gi=gi.getLayoutParent();

if(!gi){return null;
}}return gi;
},getFocusTarget:function(){var gj=this;

if(!gj.getEnabled()){return null;
}
while(gj.getAnonymous()||!gj.getFocusable()){gj=gj.getLayoutParent();

if(!gj||!gj.getEnabled()){return null;
}}return gj;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(gk,gl){var gm=this.getFocusElement();
if(gk){var gn=this.getTabIndex();

if(gn==null){gn=1;
}gm.setAttribute(bp,gn);
if((qx.core.Environment.get(bs)==cC)){gm.setAttribute(bb,bA);
}else{gm.setStyle(V,U);
}}else{if(gm.isNativelyFocusable()){gm.setAttribute(bp,-1);
}else if(gl){gm.setAttribute(bp,null);
}}},_applyKeepFocus:function(go){var gp=this.getFocusElement();
gp.setAttribute(ch,go?bu:null);
},_applyKeepActive:function(gq){var gr=this.getContainerElement();
gr.setAttribute(ce,gq?bu:null);
},_applyTabIndex:function(gs){if(gs==null){gs=1;
}else if(gs<1||gs>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&gs!=null){this.getFocusElement().setAttribute(bp,gs);
}},_applySelectable:function(gt,gu){if(gu!==null){this._applyCursor(this.getCursor());
}this.getContentElement().setSelectable(gt);
},_applyEnabled:function(gv,gw){if(gv===false){this.addState(cE);
this.removeState(cz);
if(this.isFocusable()){this.removeState(bo);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(cE);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gx,gy,name){},_applyContextMenu:function(gz,gA){if(gA){gA.removeState(br);

if(gA.getOpener()==this){gA.resetOpener();
}
if(!gz){this.removeListener(br,this._onContextMenuOpen);
gA.removeListener(cB,this._onBeforeContextMenuOpen,this);
}}
if(gz){gz.setOpener(this);
gz.addState(br);

if(!gA){this.addListener(br,this._onContextMenuOpen);
gz.addListener(cB,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==cp&&this.hasListener(g)){this.fireDataEvent(g,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gB,gC){if(!this.isEnabled()&&gB===true){gB=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gB){this.addListener(bU,this._onDragStart);
this.addListener(cv,this._onDrag);
this.addListener(ca,this._onDragEnd);
this.addListener(bW,this._onDragChange);
}else{this.removeListener(bU,this._onDragStart);
this.removeListener(cv,this._onDrag);
this.removeListener(ca,this._onDragEnd);
this.removeListener(bW,this._onDragChange);
}this.getContainerElement().setAttribute(P,gB?bu:null);
},_applyDroppable:function(gD,gE){if(!this.isEnabled()&&gD===true){gD=false;
}this.getContainerElement().setAttribute(I,gD?bu:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bS);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gF=qx.ui.core.DragDropCursor.getInstance();
var gG=e.getCurrentAction();
gG?gF.setAction(gG):gF.resetAction();
},visualizeFocus:function(){this.addState(bo);
},visualizeBlur:function(){this.removeState(bo);
},scrollChildIntoView:function(gH,gI,gJ,gK){gK=typeof gK==bQ?true:gK;
var gL=qx.ui.core.queue.Layout;
var parent;
if(gK){gK=!gL.isScheduled(gH);
parent=gH.getLayoutParent();
if(gK&&parent){gK=!gL.isScheduled(parent);
if(gK){parent.getChildren().forEach(function(gM){gK=gK&&!gL.isScheduled(gM);
});
}}}this.scrollChildIntoViewX(gH,gI,gK);
this.scrollChildIntoViewY(gH,gJ,gK);
},scrollChildIntoViewX:function(gN,gO,gP){this.getContentElement().scrollChildIntoViewX(gN.getContainerElement(),gO,gP);
},scrollChildIntoViewY:function(gQ,gR,gS){this.getContentElement().scrollChildIntoViewY(gQ.getContainerElement(),gR,gS);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(gT){if(!this.__jr){return false;
}return !!this.__jr[gT];
},__jr:null,_getCreatedChildControls:function(){return this.__jr;
},getChildControl:function(gU,gV){if(!this.__jr){if(gV){return null;
}this.__jr={};
}var gW=this.__jr[gU];

if(gW){return gW;
}
if(gV===true){return null;
}return this._createChildControl(gU);
},_showChildControl:function(gX){var gY=this.getChildControl(gX);
gY.show();
return gY;
},_excludeChildControl:function(ha){var hb=this.getChildControl(ha,true);

if(hb){hb.exclude();
}},_isChildControlVisible:function(hc){var hd=this.getChildControl(hc,true);

if(hd){return hd.isVisible();
}return false;
},_createChildControl:function(he){if(!this.__jr){this.__jr={};
}else if(this.__jr[he]){throw new Error("Child control '"+he+"' already created!");
}var hi=he.indexOf(y);

if(hi==-1){var hf=this._createChildControlImpl(he);
}else{var hf=this._createChildControlImpl(he.substring(0,hi),he.substring(hi+1,he.length));
}
if(!hf){throw new Error("Unsupported control: "+he);
}hf.$$subcontrol=he;
hf.$$subparent=this;
var hg=this.__jo;
var forward=this._forwardStates;

if(hg&&forward&&hf instanceof qx.ui.core.Widget){for(var hh in hg){if(forward[hh]){hf.addState(hh);
}}}this.fireDataEvent(cH,hf);
return this.__jr[he]=hf;
},_createChildControlImpl:function(hj,hk){return null;
},_disposeChildControls:function(){var ho=this.__jr;

if(!ho){return;
}var hm=qx.ui.core.Widget;

for(var hn in ho){var hl=ho[hn];

if(!hm.contains(this,hl)){hl.destroy();
}else{hl.dispose();
}}delete this.__jr;
},_findTopControl:function(){var hp=this;

while(hp){if(!hp.$$subparent){return hp;
}hp=hp.$$subparent;
}return null;
},getContainerLocation:function(hq){var hr=this.getContainerElement().getDomElement();
return hr?qx.bom.element.Location.get(hr,hq):null;
},getContentLocation:function(hs){var ht=this.getContentElement().getDomElement();
return ht?qx.bom.element.Location.get(ht,hs):null;
},setDomLeft:function(hu){var hv=this.getContainerElement().getDomElement();

if(hv){hv.style.left=hu+cu;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(hw){var hx=this.getContainerElement().getDomElement();

if(hx){hx.style.top=hw+cu;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(hy,top){var hz=this.getContainerElement().getDomElement();

if(hz){hz.style.left=hy+cu;
hz.style.top=top+cu;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var hA=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var hB=this.getChildren();

for(var i=0,l=hB.length;i<l;i++){hA.add(hB[i].clone());
}}return hA;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(bX)){if(this.__jf){qx.locale.Manager.getInstance().removeListenerById(this.__jf);
}}this.getContainerElement().setAttribute(p,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var hD=qx.ui.core.Widget;
var hC=this.getContainerElement();

if(this.__jb){hC.remove(this.__jb);
hD.__iY.poolDecorator(this.__jb);
}
if(this.__jc){hC.remove(this.__jc);
hD.__ja.poolDecorator(this.__jc);
}this.clearSeparators();
this.__jb=this.__jc=this.__ji=null;
}else{this._disposeArray(t);
this._disposeObjects(bE,cN);
}this._disposeArray(R);
this.__jo=this.__jr=null;
this._disposeObjects(bl,G,x,bO);
}});
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
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{statics:{__iB:null,setVisibleElement:function(y){this.__iB=y;
},getVisibleElement:function(){return this.__iB;
}},properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__kM:null,__kN:null,__kO:null,getLayoutLocation:function(z){var C,B,D,top;
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
}},placeToWidget:function(L,M){if(M){this.__kP();
this.__kM=qx.lang.Function.bind(this.placeToWidget,this,L,false);
qx.event.Idle.getInstance().addListener(i,this.__kM);
this.__kO=function(){this.__kP();
};
this.addListener(g,this.__kO,this);
}var N=L.getContainerLocation()||this.getLayoutLocation(L);
this.__kR(N);
},__kP:function(){if(this.__kM){qx.event.Idle.getInstance().removeListener(i,this.__kM);
this.__kM=null;
}
if(this.__kO){this.removeListener(g,this.__kO,this);
this.__kO=null;
}},placeToMouse:function(event){var P=event.getDocumentLeft();
var top=event.getDocumentTop();
var O={left:P,top:top,right:P,bottom:top};
this.__kR(O);
},placeToElement:function(Q,R){var location=qx.bom.element.Location.get(Q);
var S={left:location.left,top:location.top,right:location.left+Q.offsetWidth,bottom:location.top+Q.offsetHeight};
if(R){this.__kM=qx.lang.Function.bind(this.placeToElement,this,Q,false);
qx.event.Idle.getInstance().addListener(i,this.__kM);
this.addListener(g,function(){if(this.__kM){qx.event.Idle.getInstance().removeListener(i,this.__kM);
this.__kM=null;
}},this);
}this.__kR(S);
},placeToPoint:function(T){var U={left:T.left,top:T.top,right:T.left,bottom:T.top};
this.__kR(U);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__kQ:function(V){var W=null;

if(this._computePlacementSize){var W=this._computePlacementSize();
}else if(this.isVisible()){var W=this.getBounds();
}
if(W==null){this.addListenerOnce(q,function(){this.__kQ(V);
},this);
}else{V.call(this,W);
}},__kR:function(X){this.__kQ(function(Y){var ba=qx.util.placement.Placement.compute(Y,this.getLayoutParent().getBounds(),X,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(ba.left,ba.top);
});
}},destruct:function(){this.__kP();
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
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__bU={};
this.__bV=qx.lang.Function.bind(this.__ca,this);
this.__bW=false;
},members:{__bX:null,__bY:null,__bU:null,__bW:null,__bV:null,schedule:function(c){if(this.__bX==null){this.__bX=window.setTimeout(this.__bV,0);
}var d=c.toHashCode();
if(this.__bY&&this.__bY[d]){return;
}this.__bU[d]=c;
this.__bW=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__bY&&this.__bY[f]){this.__bY[f]=null;
return;
}delete this.__bU[f];
if(qx.lang.Object.isEmpty(this.__bU)&&this.__bX!=null){window.clearTimeout(this.__bX);
this.__bX=null;
}},__ca:qx.event.GlobalError.observeMethod(function(){this.__bX=null;
while(this.__bW){this.__bY=qx.lang.Object.clone(this.__bU);
this.__bU={};
this.__bW=false;

for(var h in this.__bY){var g=this.__bY[h];

if(g){this.__bY[h]=null;
g.call();
}}}this.__bY=null;
})},destruct:function(){if(this.__bX!=null){window.clearTimeout(this.__bX);
}this.__bV=this.__bU=null;
}});
})();
(function(){var b="qx.util.DeferredCall",a="qx.debug";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c,d){qx.core.Object.call(this);
this.__ey=c;
this.__ez=d||null;
this.__x=qx.util.DeferredCallManager.getInstance();
},members:{__ey:null,__ez:null,__x:null,cancel:function(){this.__x.cancel(this);
},schedule:function(){this.__x.schedule(this);
},call:function(){if(qx.core.Environment.get(a)){var e=this.__ez;

if(e&&e.isDisposed&&e.isDisposed()){this.warn("The context object '"+e+"' of the defered call '"+this+"'is already disposed.");
}}this.__ez?this.__ey.apply(this.__ez):this.__ey();
}},destruct:function(){this.cancel();
this.__ez=this.__ey=this.__x=null;
}});
})();
(function(){var m="element",k="qx.debug",j="qxSelectable",h="off",g="engine.name",f="on",d="text",c="': ",b="Invalid context for callback.",a="Invalid capture flag.",Q="div",P="'",O="Invalid event type.",N="Invalid callback function",M="",L="mshtml",K="none",J="scroll",I="|bubble|",H="qx.html.Element",t="|capture|",u="activate",r="Failed to add event listener for type '",s="blur",p="deactivate",q="capture",n="__iL",o="userSelect",v=" from the target '",w="-moz-none",B="visible",A="releaseCapture",D="Failed to remove event listener for type '",C="tabIndex",F="focus",E="MozUserSelect",z=" to the target '",G="hidden";
qx.Class.define(H,{extend:qx.core.Object,construct:function(R,S,T){qx.core.Object.call(this);
this.__iq=R||Q;
this.__ir=S||null;
this.__is=T||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__it:{},_scheduleFlush:function(U){qx.html.Element.__eO.schedule();
},flush:function(){var bg;

if(qx.core.Environment.get(k)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var X=this.__iu();
var W=X.getFocus();

if(W&&this.__iy(W)){X.blur(W);
}var bn=X.getActive();

if(bn&&this.__iy(bn)){qx.bom.Element.deactivate(bn);
}var bb=this.__iw();

if(bb&&this.__iy(bb)){qx.bom.Element.releaseCapture(bb);
}var bh=[];
var bi=this._modified;

for(var bf in bi){bg=bi[bf];
if(bg.__iP()){if(bg.__iz&&qx.dom.Hierarchy.isRendered(bg.__iz)){bh.push(bg);
}else{if(qx.core.Environment.get(k)){if(this.DEBUG){bg.debug("Flush invisible element");
}}bg.__iO();
}delete bi[bf];
}}
for(var i=0,l=bh.length;i<l;i++){bg=bh[i];

if(qx.core.Environment.get(k)){if(this.DEBUG){bg.debug("Flush rendered element");
}}bg.__iO();
}var bd=this._visibility;

for(var bf in bd){bg=bd[bf];
var bj=bg.__iz;

if(!bj){delete bd[bf];
continue;
}
if(qx.core.Environment.get(k)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+bg.__iB);
}}if(!bg.$$disposed){bj.style.display=bg.__iB?M:K;
if((qx.core.Environment.get(g)==L)){if(!(document.documentMode>=8)){bj.style.visibility=bg.__iB?B:G;
}}}delete bd[bf];
}var scroll=this._scroll;

for(var bf in scroll){bg=scroll[bf];
var bo=bg.__iz;

if(bo&&bo.offsetWidth){var ba=true;
if(bg.__iE!=null){bg.__iz.scrollLeft=bg.__iE;
delete bg.__iE;
}if(bg.__iF!=null){bg.__iz.scrollTop=bg.__iF;
delete bg.__iF;
}var bk=bg.__iC;

if(bk!=null){var be=bk.element.getDomElement();

if(be&&be.offsetWidth){qx.bom.element.Scroll.intoViewX(be,bo,bk.align);
delete bg.__iC;
}else{ba=false;
}}var bl=bg.__iD;

if(bl!=null){var be=bl.element.getDomElement();

if(be&&be.offsetWidth){qx.bom.element.Scroll.intoViewY(be,bo,bl.align);
delete bg.__iD;
}else{ba=false;
}}if(ba){delete scroll[bf];
}}}var Y={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bm=this._actions[i];
var bj=bm.element.__iz;

if(!bj||!Y[bm.type]&&!bm.element.__iP()){continue;
}var bc=bm.args;
bc.unshift(bj);
qx.bom.Element[bm.type].apply(qx.bom.Element,bc);
}this._actions=[];
for(var bf in this.__it){var V=this.__it[bf];
var bo=V.element.__iz;

if(bo){qx.bom.Selection.set(bo,V.start,V.end);
delete this.__it[bf];
}}qx.event.handler.Appear.refresh();
},__iu:function(){if(!this.__iv){var bp=qx.event.Registration.getManager(window);
this.__iv=bp.getHandler(qx.event.handler.Focus);
}return this.__iv;
},__iw:function(){if(!this.__ix){var bq=qx.event.Registration.getManager(window);
this.__ix=bq.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__ix.getCaptureElement();
},__iy:function(br){var bs=qx.core.ObjectRegistry.fromHashCode(br.$$element);
return bs&&!bs.__iP();
}},members:{__iq:null,__iz:null,__cq:false,__iA:true,__iB:true,__iC:null,__iD:null,__iE:null,__iF:null,__iG:null,__iH:null,__iI:null,__ir:null,__is:null,__iJ:null,__iK:null,__iL:null,__iM:null,__iN:null,_scheduleChildrenUpdate:function(){if(this.__iM){return;
}this.__iM=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__iq);
},__iO:function(){if(qx.core.Environment.get(k)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var length;
var bt=this.__iL;

if(bt){length=bt.length;
var bu;

for(var i=0;i<length;i++){bu=bt[i];

if(bu.__iB&&bu.__iA&&!bu.__iz){bu.__iO();
}}}
if(!this.__iz){this.__iz=this._createDomElement();
this.__iz.$$element=this.$$hash;
this._copyData(false);

if(bt&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__iM){this._syncChildren();
}}delete this.__iM;
},_insertChildren:function(){var bv=this.__iL;
var length=bv.length;
var bx;

if(length>2){var bw=document.createDocumentFragment();

for(var i=0;i<length;i++){bx=bv[i];

if(bx.__iz&&bx.__iA){bw.appendChild(bx.__iz);
}}this.__iz.appendChild(bw);
}else{var bw=this.__iz;

for(var i=0;i<length;i++){bx=bv[i];

if(bx.__iz&&bx.__iA){bw.appendChild(bx.__iz);
}}}},_syncChildren:function(){var bH=qx.core.ObjectRegistry;
var by=this.__iL;
var bF=by.length;
var bz;
var bD;
var bB=this.__iz;
var bE=bB.childNodes;
var bA=0;
var bC;

if(qx.core.Environment.get(k)){var bG=0;
}for(var i=bE.length-1;i>=0;i--){bC=bE[i];
bD=bH.fromHashCode(bC.$$element);

if(!bD||!bD.__iA||bD.__iN!==this){bB.removeChild(bC);

if(qx.core.Environment.get(k)){bG++;
}}}for(var i=0;i<bF;i++){bz=by[i];
if(bz.__iA){bD=bz.__iz;
bC=bE[bA];

if(!bD){continue;
}if(bD!=bC){if(bC){bB.insertBefore(bD,bC);
}else{bB.appendChild(bD);
}
if(qx.core.Environment.get(k)){bG++;
}}bA++;
}}if(qx.core.Environment.get(k)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+bG+" operations");
}}},_copyData:function(bI){var bM=this.__iz;
var bL=this.__is;

if(bL){var bJ=qx.bom.element.Attribute;

for(var bN in bL){bJ.set(bM,bN,bL[bN]);
}}var bL=this.__ir;

if(bL){var bK=qx.bom.element.Style;

if(bI){bK.setStyles(bM,bL);
}else{bK.setCss(bM,bK.compile(bL));
}}var bL=this.__iJ;

if(bL){for(var bN in bL){this._applyProperty(bN,bL[bN]);
}}var bL=this.__iK;

if(bL){qx.event.Registration.getManager(bM).importListeners(bM,bL);
delete this.__iK;
}},_syncData:function(){var bS=this.__iz;
var bR=qx.bom.element.Attribute;
var bP=qx.bom.element.Style;
var bQ=this.__iH;

if(bQ){var bV=this.__is;

if(bV){var bT;

for(var bU in bQ){bT=bV[bU];

if(bT!==undefined){bR.set(bS,bU,bT);
}else{bR.reset(bS,bU);
}}}this.__iH=null;
}var bQ=this.__iG;

if(bQ){var bV=this.__ir;

if(bV){var bO={};

for(var bU in bQ){bO[bU]=bV[bU];
}bP.setStyles(bS,bO);
}this.__iG=null;
}var bQ=this.__iI;

if(bQ){var bV=this.__iJ;

if(bV){var bT;

for(var bU in bQ){this._applyProperty(bU,bV[bU]);
}}this.__iI=null;
}},__iP:function(){var bW=this;
while(bW){if(bW.__cq){return true;
}
if(!bW.__iA||!bW.__iB){return false;
}bW=bW.__iN;
}return false;
},__iQ:function(bX){if(bX.__iN===this){throw new Error("Child is already in: "+bX);
}
if(bX.__cq){throw new Error("Root elements could not be inserted into other ones.");
}if(bX.__iN){bX.__iN.remove(bX);
}bX.__iN=this;
if(!this.__iL){this.__iL=[];
}if(this.__iz){this._scheduleChildrenUpdate();
}},__iR:function(bY){if(bY.__iN!==this){throw new Error("Has no child: "+bY);
}if(this.__iz){this._scheduleChildrenUpdate();
}delete bY.__iN;
},__iS:function(ca){if(ca.__iN!==this){throw new Error("Has no child: "+ca);
}if(this.__iz){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__iL||null;
},getChild:function(cb){var cc=this.__iL;
return cc&&cc[cb]||null;
},hasChildren:function(){var cd=this.__iL;
return cd&&cd[0]!==undefined;
},indexOf:function(ce){var cf=this.__iL;
return cf?cf.indexOf(ce):-1;
},hasChild:function(cg){var ch=this.__iL;
return ch&&ch.indexOf(cg)!==-1;
},add:function(ci){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__iQ(arguments[i]);
}this.__iL.push.apply(this.__iL,arguments);
}else{this.__iQ(ci);
this.__iL.push(ci);
}return this;
},addAt:function(cj,ck){this.__iQ(cj);
qx.lang.Array.insertAt(this.__iL,cj,ck);
return this;
},remove:function(cl){var cm=this.__iL;

if(!cm){return;
}
if(arguments[1]){var cn;

for(var i=0,l=arguments.length;i<l;i++){cn=arguments[i];
this.__iR(cn);
qx.lang.Array.remove(cm,cn);
}}else{this.__iR(cl);
qx.lang.Array.remove(cm,cl);
}return this;
},removeAt:function(co){var cp=this.__iL;

if(!cp){throw new Error("Has no children!");
}var cq=cp[co];

if(!cq){throw new Error("Has no child at this position!");
}this.__iR(cq);
qx.lang.Array.removeAt(this.__iL,co);
return this;
},removeAll:function(){var cr=this.__iL;

if(cr){for(var i=0,l=cr.length;i<l;i++){this.__iR(cr[i]);
}cr.length=0;
}return this;
},getParent:function(){return this.__iN||null;
},insertInto:function(parent,cs){parent.__iQ(this);

if(cs==null){parent.__iL.push(this);
}else{qx.lang.Array.insertAt(this.__iL,this,cs);
}return this;
},insertBefore:function(ct){var parent=ct.__iN;
parent.__iQ(this);
qx.lang.Array.insertBefore(parent.__iL,this,ct);
return this;
},insertAfter:function(cu){var parent=cu.__iN;
parent.__iQ(this);
qx.lang.Array.insertAfter(parent.__iL,this,cu);
return this;
},moveTo:function(cv){var parent=this.__iN;
parent.__iS(this);
var cw=parent.__iL.indexOf(this);

if(cw===cv){throw new Error("Could not move to same index!");
}else if(cw<cv){cv--;
}qx.lang.Array.removeAt(parent.__iL,cw);
qx.lang.Array.insertAt(parent.__iL,this,cv);
return this;
},moveBefore:function(cx){var parent=this.__iN;
return this.moveTo(parent.__iL.indexOf(cx));
},moveAfter:function(cy){var parent=this.__iN;
return this.moveTo(parent.__iL.indexOf(cy)+1);
},free:function(){var parent=this.__iN;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__iL){return;
}parent.__iR(this);
qx.lang.Array.remove(parent.__iL,this);
return this;
},getDomElement:function(){return this.__iz||null;
},getNodeName:function(){return this.__iq;
},setNodeName:function(name){this.__iq=name;
},setRoot:function(cz){this.__cq=cz;
},useMarkup:function(cA){if(this.__iz){throw new Error("Could not overwrite existing element!");
}if((qx.core.Environment.get(g)==L)){var cB=document.createElement(Q);
}else{var cB=qx.bom.Element.getHelperElement();
}cB.innerHTML=cA;
this.useElement(cB.firstChild);
return this.__iz;
},useElement:function(cC){if(this.__iz){throw new Error("Could not overwrite existing element!");
}this.__iz=cC;
this.__iz.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var cE=this.getAttribute(C);

if(cE>=1){return true;
}var cD=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(cE>=0&&cD[this.__iq]){return true;
}return false;
},setSelectable:qx.core.Environment.select(g,{"webkit":function(cF){this.setAttribute(j,cF?f:h);
this.setStyle(o,cF?d:K);
},"gecko":function(cG){this.setAttribute(j,cG?f:h);
this.setStyle(E,cG?d:w);
},"default":function(cH){this.setAttribute(j,cH?f:h);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__iq];
},include:function(){if(this.__iA){return;
}delete this.__iA;

if(this.__iN){this.__iN._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__iA){return;
}this.__iA=false;

if(this.__iN){this.__iN._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__iA===true;
},show:function(){if(this.__iB){return;
}
if(this.__iz){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}if(this.__iN){this.__iN._scheduleChildrenUpdate();
}delete this.__iB;
},hide:function(){if(!this.__iB){return;
}
if(this.__iz){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}this.__iB=false;
},isVisible:function(){return this.__iB===true;
},scrollChildIntoViewX:function(cI,cJ,cK){var cL=this.__iz;
var cM=cI.getDomElement();

if(cK!==false&&cL&&cL.offsetWidth&&cM&&cM.offsetWidth){qx.bom.element.Scroll.intoViewX(cM,cL,cJ);
}else{this.__iC={element:cI,align:cJ};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__iE;
},scrollChildIntoViewY:function(cN,cO,cP){var cQ=this.__iz;
var cR=cN.getDomElement();

if(cP!==false&&cQ&&cQ.offsetWidth&&cR&&cR.offsetWidth){qx.bom.element.Scroll.intoViewY(cR,cQ,cO);
}else{this.__iD={element:cN,align:cO};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__iF;
},scrollToX:function(x,cS){var cT=this.__iz;

if(cS!==true&&cT&&cT.offsetWidth){cT.scrollLeft=x;
delete this.__iE;
}else{this.__iE=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__iC;
},getScrollX:function(){var cU=this.__iz;

if(cU){return cU.scrollLeft;
}return this.__iE||0;
},scrollToY:function(y,cV){var cW=this.__iz;

if(cV!==true&&cW&&cW.offsetWidth){cW.scrollTop=y;
delete this.__iF;
}else{this.__iF=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__iD;
},getScrollY:function(){var cX=this.__iz;

if(cX){return cX.scrollTop;
}return this.__iF||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(J,this.__iU,this);
},enableScrolling:function(){this.removeListener(J,this.__iU,this);
},__iT:null,__iU:function(e){if(!this.__iT){this.__iT=true;
this.__iz.scrollTop=0;
this.__iz.scrollLeft=0;
delete this.__iT;
}},getTextSelection:function(){var cY=this.__iz;

if(cY){return qx.bom.Selection.get(cY);
}return null;
},getTextSelectionLength:function(){var da=this.__iz;

if(da){return qx.bom.Selection.getLength(da);
}return null;
},getTextSelectionStart:function(){var dc=this.__iz;

if(dc){return qx.bom.Selection.getStart(dc);
}return null;
},getTextSelectionEnd:function(){var dd=this.__iz;

if(dd){return qx.bom.Selection.getEnd(dd);
}return null;
},setTextSelection:function(de,df){var dg=this.__iz;

if(dg){qx.bom.Selection.set(dg,de,df);
return;
}qx.html.Element.__it[this.toHashCode()]={element:this,start:de,end:df};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var dh=this.__iz;

if(dh){qx.bom.Selection.clear(dh);
}delete qx.html.Element.__it[this.toHashCode()];
},__iV:function(di,dj){var dk=qx.html.Element._actions;
dk.push({type:di,element:this,args:dj||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__iV(F);
},blur:function(){this.__iV(s);
},activate:function(){this.__iV(u);
},deactivate:function(){this.__iV(p);
},capture:function(dl){this.__iV(q,[dl!==false]);
},releaseCapture:function(){this.__iV(A);
},setStyle:function(dm,dn,dp){if(!this.__ir){this.__ir={};
}
if(this.__ir[dm]==dn){return;
}
if(dn==null){delete this.__ir[dm];
}else{this.__ir[dm]=dn;
}if(this.__iz){if(dp){qx.bom.element.Style.set(this.__iz,dm,dn);
return this;
}if(!this.__iG){this.__iG={};
}this.__iG[dm]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(dq,dr){var ds=qx.bom.element.Style;

if(!this.__ir){this.__ir={};
}
if(this.__iz){if(!this.__iG){this.__iG={};
}
for(var du in dq){var dt=dq[du];

if(this.__ir[du]==dt){continue;
}
if(dt==null){delete this.__ir[du];
}else{this.__ir[du]=dt;
}if(dr){ds.set(this.__iz,du,dt);
continue;
}this.__iG[du]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var du in dq){var dt=dq[du];

if(this.__ir[du]==dt){continue;
}
if(dt==null){delete this.__ir[du];
}else{this.__ir[du]=dt;
}}}return this;
},removeStyle:function(dv,dw){this.setStyle(dv,null,dw);
},getStyle:function(dx){return this.__ir?this.__ir[dx]:null;
},getAllStyles:function(){return this.__ir||null;
},setAttribute:function(dy,dz,dA){if(!this.__is){this.__is={};
}
if(this.__is[dy]==dz){return;
}
if(dz==null){delete this.__is[dy];
}else{this.__is[dy]=dz;
}if(this.__iz){if(dA){qx.bom.element.Attribute.set(this.__iz,dy,dz);
return this;
}if(!this.__iH){this.__iH={};
}this.__iH[dy]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(dB,dC){for(var dD in dB){this.setAttribute(dD,dB[dD],dC);
}return this;
},removeAttribute:function(dE,dF){this.setAttribute(dE,null,dF);
},getAttribute:function(dG){return this.__is?this.__is[dG]:null;
},_applyProperty:function(name,dH){},_setProperty:function(dI,dJ,dK){if(!this.__iJ){this.__iJ={};
}
if(this.__iJ[dI]==dJ){return;
}
if(dJ==null){delete this.__iJ[dI];
}else{this.__iJ[dI]=dJ;
}if(this.__iz){if(dK){this._applyProperty(dI,dJ);
return this;
}if(!this.__iI){this.__iI={};
}this.__iI[dI]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(dL,dM){this._setProperty(dL,null,dM);
},_getProperty:function(dN){var dO=this.__iJ;

if(!dO){return null;
}var dP=dO[dN];
return dP==null?null:dP;
},addListener:function(dQ,dR,self,dS){if(this.$$disposed){return null;
}
if(qx.core.Environment.get(k)){var dT=r+dQ+P+z+this+c;
this.assertString(dQ,dT+O);
this.assertFunction(dR,dT+N);

if(self!==undefined){this.assertObject(self,b);
}
if(dS!==undefined){this.assertBoolean(dS,a);
}}
if(this.__iz){return qx.event.Registration.addListener(this.__iz,dQ,dR,self,dS);
}
if(!this.__iK){this.__iK={};
}
if(dS==null){dS=false;
}var dU=qx.event.Manager.getNextUniqueId();
var dV=dQ+(dS?t:I)+dU;
this.__iK[dV]={type:dQ,listener:dR,self:self,capture:dS,unique:dU};
return dV;
},removeListener:function(dW,dX,self,dY){if(this.$$disposed){return null;
}
if(qx.core.Environment.get(k)){var ea=D+dW+P+v+this+c;
this.assertString(dW,ea+O);
this.assertFunction(dX,ea+N);

if(self!==undefined){this.assertObject(self,b);
}
if(dY!==undefined){this.assertBoolean(dY,a);
}}
if(this.__iz){qx.event.Registration.removeListener(this.__iz,dW,dX,self,dY);
}else{var ec=this.__iK;
var eb;

if(dY==null){dY=false;
}
for(var ed in ec){eb=ec[ed];
if(eb.listener===dX&&eb.self===self&&eb.capture===dY&&eb.type===dW){delete ec[ed];
break;
}}}return this;
},removeListenerById:function(ee){if(this.$$disposed){return null;
}
if(this.__iz){qx.event.Registration.removeListenerById(this.__iz,ee);
}else{delete this.__iK[ee];
}return this;
},hasListener:function(ef,eg){if(this.$$disposed){return false;
}
if(this.__iz){return qx.event.Registration.hasListener(this.__iz,ef,eg);
}var ei=this.__iK;
var eh;

if(eg==null){eg=false;
}
for(var ej in ei){eh=ei[ej];
if(eh.capture===eg&&eh.type===ef){return true;
}}return false;
}},defer:function(ek){ek.__eO=new qx.util.DeferredCall(ek.flush,ek);
},destruct:function(){var em=this.__iz;

if(em){qx.event.Registration.getManager(em).removeAllListeners(em);
em.$$element=M;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__iN;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(n);
this.__is=this.__ir=this.__iK=this.__iJ=this.__iH=this.__iG=this.__iI=this.__iz=this.__iN=this.__iC=this.__iD=null;
}});
})();
(function(){var d="event.pointer",c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(e,f){var g={position:a,top:0,left:0};

if(qx.core.Environment.get(d)){g.pointerEvents=c;
}qx.html.Element.call(this,null,g);
this.__db=e;
this.__dc=f||e.toHashCode();
this.useMarkup(e.getMarkup());
},members:{__dc:null,__db:null,getId:function(){return this.__dc;
},getDecorator:function(){return this.__db;
},resize:function(h,i){this.__db.resize(this.getDomElement(),h,i);
},tint:function(j){this.__db.tint(this.getDomElement(),j);
},getInsets:function(){return this.__db.getInsets();
}},destruct:function(){this.__db=null;
}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__x=f;
this.__cp=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__x:null,__cp:null,__ky:null,__kz:null,__kA:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__kA=qx.lang.Function.listener(this._onNative,this);
this.__ky=qx.bom.Event.supportsEvent(this.__cp,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__cp,this.__ky,this.__kA);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cp,this.__ky,this.__kA);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__kz!=p){this.__kz=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__cp,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__x=this.__cp=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__x=b;
this.__cp=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__x:null,__cp:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__x=this.__cp=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",d="mshtml",j="qx.event.handler.Touch",h="useraction",c="swipe",b="qx.mobile.nativescroll",g="webkit",f="tap",i="x",a="y";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__x=u;
this.__cp=u.getWindow();
this.__cq=this.__cp.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__cr:null,__cs:null,__x:null,__cp:null,__cq:null,__ct:null,__cu:null,__cv:null,__cw:null,__cx:false,__cy:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__cz:function(D){var E=qx.bom.Event.getTarget(D);
if((qx.core.Environment.get(n)==g)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__cA:function(F,G,H,I){if(!H){H=this.__cz(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__cp,h,qx.event.type.Data,[G]);
},__cB:function(J,K,L){if(!L){L=this.__cz(J);
}var K=K||J.type;

if(K==r){this.__cC(J,L);
}else if(K==q){this.__cD(J,L);
}else if(K==s){this.__cE(J,L);
}},__cC:function(M,N){var O=M.changedTouches[0];
this.__ct=O.screenX;
this.__cu=O.screenY;
this.__cv=new Date().getTime();
this.__cw=M.changedTouches.length===1;
},__cD:function(P,Q){if(this.__cw&&P.changedTouches.length>1){this.__cw=false;
}},__cE:function(R,S){if(this.__cw){var T=R.changedTouches[0];
var V={x:T.screenX-this.__ct,y:T.screenY-this.__cu};
var W=qx.event.handler.Touch;

if(this.__cy==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__cA(R,f,S,qx.event.type.Tap);
}else{var U=this.__cF(R,S,V);

if(U){R.swipe=U;
this.__cA(R,c,S,qx.event.type.Swipe);
}}}},__cF:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__cv;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__cv,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__cG:qx.core.Environment.select(t,{"true":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__cH(bi)){this.__cx=true;
}else if(bj==s){this.__cx=false;
}var bm=this.__cI(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__cH:qx.core.Environment.select(t,{"true":function(bn){if((qx.core.Environment.get(n)==d)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__cI:qx.core.Environment.select(t,{"true":function(bp){var bq=this.__cz(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__cr=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,r,this.__cr);
Event.addNativeListener(this.__cq,q,this.__cr);
Event.addNativeListener(this.__cq,s,this.__cr);
Event.addNativeListener(this.__cq,m,this.__cr);
},_initMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){this.__cs=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,k,this.__cs);
Event.addNativeListener(this.__cq,o,this.__cs);
Event.addNativeListener(this.__cq,l,this.__cs);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,r,this.__cr);
Event.removeNativeListener(this.__cq,q,this.__cr);
Event.removeNativeListener(this.__cq,s,this.__cr);
Event.removeNativeListener(this.__cq,m,this.__cr);
},_stopMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,k,this.__cs);
Event.removeNativeListener(this.__cq,o,this.__cs);
Event.removeNativeListener(this.__cq,l,this.__cs);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Environment.select(t,{"true":qx.event.GlobalError.observeMethod(function(bs){if(!qx.core.Environment.get(p)){if(bs.type==o&&!this.__cx){return;
}var bt=this.__cG(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__cy=this.__cz(bu);
}this.__cA(bu,bv);
this.__cB(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__x=this.__cp=this.__cq=this.__cy=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.core.Environment.get(p)){if(qx.core.Environment.get(b)==false){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__x=d;
this.__gs={};
qx.event.handler.Appear.__gt[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__gt:{},refresh:function(){var e=this.__gt;

for(var f in e){e[f].refresh();
}}},members:{__x:null,__gs:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__gs;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__gs;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__gs;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__x.dispatchEvent(w,t);
}}}},destruct:function(){this.__x=this.__gs=null;
delete qx.event.handler.Appear.__gt[this.$$hash];
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
this.__x=u;
this.__cp=u.getWindow();
this.__cq=this.__cp.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__el:null,__em:null,__en:null,__eo:null,__ep:null,__x:null,__cp:null,__cq:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===
d?
function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===
d?
function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__cA:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__cp,b,qx.event.type.Data,[E||D.type]);
},__eq:function(){var H=[this.__cp,this.__cq,this.__cq.body];
var I=this.__cp;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__el=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,q,this.__el);
Event.addNativeListener(this.__cq,t,this.__el);
Event.addNativeListener(this.__cq,r,this.__el);
Event.addNativeListener(this.__cq,n,this.__el);
Event.addNativeListener(this.__cq,p,this.__el);
},_initMoveObserver:function(){this.__em=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,j,this.__em);
Event.addNativeListener(this.__cq,l,this.__em);
Event.addNativeListener(this.__cq,k,this.__em);
},_initWheelObserver:function(){this.__en=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__eq();
qx.bom.Event.addNativeListener(J.target,J.type,this.__en);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,q,this.__el);
Event.removeNativeListener(this.__cq,t,this.__el);
Event.removeNativeListener(this.__cq,r,this.__el);
Event.removeNativeListener(this.__cq,n,this.__el);
Event.removeNativeListener(this.__cq,p,this.__el);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,j,this.__em);
Event.removeNativeListener(this.__cq,l,this.__em);
Event.removeNativeListener(this.__cq,k,this.__em);
},_stopWheelObserver:function(){var K=this.__eq();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__en);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__cA(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__er){this.__er(M,N,O);
}
if(this.__et){this.__et(M,N,O);
}this.__cA(M,N,O);

if(this.__es){this.__es(M,N,O);
}
if(this.__eu){this.__eu(M,N,O);
}this.__eo=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__cA(P,o);
}),__er:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__cA(Q,t,S);
}}},"default":null}),__es:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__cA(T,p,V);
}},"default":null}),__et:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__eo==r){this.__cA(W,q,Y);
}else if(X==n){this.__cA(W,r,Y);
}},"default":null}),__eu:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__ep=bc;
break;
case t:if(bc!==this.__ep){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__ep);
this.__cA(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__x=this.__cp=this.__cq=this.__ep=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="win",c="1",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__x=by;
this.__cp=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__cq=this.__cp;
}else{this.__cq=this.__cp.document.documentElement;
}this.__ko={};
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
}}},members:{__kp:null,__x:null,__cp:null,__cq:null,__ko:null,__kq:null,__kr:null,__ks:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__kt();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__x.dispatchEvent(bL,event);
}if(this.__cp){qx.event.Registration.fireEvent(this.__cp,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__kt();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__x.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__cp){qx.event.Registration.fireEvent(this.__cp,s,qx.event.type.Data,[bN]);
}},__kt:function(){var bR=this.__x.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__x.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__kp=qx.lang.Function.listener(this.__ku,this);
this.__ks=qx.lang.Function.listener(this.__dA,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,i,this.__kp);
Event.addNativeListener(this.__cq,m,this.__kp);
Event.addNativeListener(this.__cq,k,this.__ks);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,i,this.__kp);
Event.removeNativeListener(this.__cq,m,this.__kp);
Event.removeNativeListener(this.__cq,k,this.__ks);

for(var bU in (this.__kr||{})){var bT=this.__kr[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__kr);
},__ku:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__ko[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__ko[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==b){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__ko[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__ko[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__kv(ca.target,cd,ce);
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
}}this.__ko[ci]=ch;
}},"opera":function(cj){this.__kq=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__kv:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__kr){this.__kr={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__kr[co]){return;
}var self=this;
this.__kr[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__dA(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__kr[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__dA:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

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
if(cB!=this.__kq){this._idealKeyHandler(0,this.__kq,cA,cz);
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
this.__kq=this.__x=this.__cp=this.__cq=this.__ko=null;
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
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Control",d="Shift",c="mousemove",b="move",a="mouseover",C="Alt",B="keyup",A="mouseup",z="keypress",y="dragend",x="on",w="mousedown",v="qxDraggable",u="Escape",t="drag",r="drop",s="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(D){qx.core.Object.call(this);
this.__x=D;
this.__cq=D.getWindow().document.documentElement;
this.__x.addListener(this.__cq,w,this._onMouseDown,this);
this.__hM();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__x:null,__cq:null,__hD:null,__hE:null,__H:null,__hF:null,__hG:null,__cJ:null,__hH:null,__hI:null,__hJ:false,__hK:0,__hL:0,canHandleEvent:function(E,F){},registerEvent:function(G,H,I){},unregisterEvent:function(J,K,L){},addType:function(M){this.__H[M]=true;
},addAction:function(N){this.__hF[N]=true;
},supportsType:function(O){return !!this.__H[O];
},supportsAction:function(P){return !!this.__hF[P];
},getData:function(Q){if(!this.__hS||!this.__hD){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__H[Q]){throw new Error("Unsupported data type: "+Q+"!");
}
if(!this.__cJ[Q]){this.__hH=Q;
this.__cA(q,this.__hE,this.__hD,false);
}
if(!this.__cJ[Q]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__cJ[Q]||null;
},getCurrentAction:function(){return this.__hI;
},addData:function(R,S){this.__cJ[R]=S;
},getCurrentType:function(){return this.__hH;
},isSessionActive:function(){return this.__hJ;
},__hM:function(){this.__H={};
this.__hF={};
this.__hG={};
this.__cJ={};
},__hN:function(){if(this.__hE==null){return;
}var V=this.__hF;
var T=this.__hG;
var U=null;

if(this.__hS){if(T.Shift&&T.Control&&V.alias){U=k;
}else if(T.Shift&&T.Alt&&V.copy){U=j;
}else if(T.Shift&&V.move){U=b;
}else if(T.Alt&&V.alias){U=k;
}else if(T.Control&&V.copy){U=j;
}else if(V.move){U=b;
}else if(V.copy){U=j;
}else if(V.alias){U=k;
}}
if(U!=this.__hI){this.__hI=U;
this.__cA(o,this.__hE,this.__hD,false);
}},__cA:function(W,X,Y,ba,bb){var bd=qx.event.Registration;
var bc=bd.createEvent(W,qx.event.type.Drag,[ba,bb]);

if(X!==Y){bc.setRelatedTarget(Y);
}return bd.dispatchEvent(X,bc);
},__hO:function(be){while(be&&be.nodeType==1){if(be.getAttribute(v)==x){return be;
}be=be.parentNode;
}return null;
},__hP:function(bf){while(bf&&bf.nodeType==1){if(bf.getAttribute(s)==x){return bf;
}bf=bf.parentNode;
}return null;
},__hQ:function(){this.__hE=null;
this.__x.removeListener(this.__cq,c,this._onMouseMove,this,true);
this.__x.removeListener(this.__cq,A,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__hM();
},__hR:function(){if(this.__hJ){this.__x.removeListener(this.__cq,a,this._onMouseOver,this,true);
this.__x.removeListener(this.__cq,h,this._onMouseOut,this,true);
this.__x.removeListener(this.__cq,g,this._onKeyDown,this,true);
this.__x.removeListener(this.__cq,B,this._onKeyUp,this,true);
this.__x.removeListener(this.__cq,z,this._onKeyPress,this,true);
this.__cA(y,this.__hE,this.__hD,false);
this.__hJ=false;
}this.__hS=false;
this.__hD=null;
this.__hQ();
},__hS:false,_onWindowBlur:function(e){this.__hR();
},_onKeyDown:function(e){var bg=e.getKeyIdentifier();

switch(bg){case C:case f:case d:if(!this.__hG[bg]){this.__hG[bg]=true;
this.__hN();
}}},_onKeyUp:function(e){var bh=e.getKeyIdentifier();

switch(bh){case C:case f:case d:if(this.__hG[bh]){this.__hG[bh]=false;
this.__hN();
}}},_onKeyPress:function(e){var bi=e.getKeyIdentifier();

switch(bi){case u:this.__hR();
}},_onMouseDown:function(e){if(this.__hJ){return;
}var bj=this.__hO(e.getTarget());

if(bj){this.__hK=e.getDocumentLeft();
this.__hL=e.getDocumentTop();
this.__hE=bj;
this.__x.addListener(this.__cq,c,this._onMouseMove,this,true);
this.__x.addListener(this.__cq,A,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__hS){this.__cA(r,this.__hD,this.__hE,false,e);
}if(this.__hJ){e.stopPropagation();
}this.__hR();
},_onMouseMove:function(e){if(this.__hJ){if(!this.__cA(t,this.__hE,this.__hD,true,e)){this.__hR();
}}else{if(Math.abs(e.getDocumentLeft()-this.__hK)>3||Math.abs(e.getDocumentTop()-this.__hL)>3){if(this.__cA(n,this.__hE,this.__hD,true,e)){this.__hJ=true;
this.__x.addListener(this.__cq,a,this._onMouseOver,this,true);
this.__x.addListener(this.__cq,h,this._onMouseOut,this,true);
this.__x.addListener(this.__cq,g,this._onKeyDown,this,true);
this.__x.addListener(this.__cq,B,this._onKeyUp,this,true);
this.__x.addListener(this.__cq,z,this._onKeyPress,this,true);
var bk=this.__hG;
bk.Control=e.isCtrlPressed();
bk.Shift=e.isShiftPressed();
bk.Alt=e.isAltPressed();
this.__hN();
}else{this.__cA(y,this.__hE,this.__hD,false);
this.__hQ();
}}}},_onMouseOver:function(e){var bl=e.getTarget();
var bm=this.__hP(bl);

if(bm&&bm!=this.__hD){this.__hS=this.__cA(m,bm,this.__hE,true,e);
this.__hD=bm;
this.__hN();
}},_onMouseOut:function(e){var bo=this.__hP(e.getTarget());
var bn=this.__hP(e.getRelatedTarget());

if(bo&&bo!==bn&&bo==this.__hD){this.__cA(l,this.__hD,bn,false,e);
this.__hD=null;
this.__hS=false;
qx.event.Timer.once(this.__hN,this,0);
}}},destruct:function(){this.__hE=this.__hD=this.__x=this.__cq=this.__H=this.__hF=this.__hG=this.__cJ=null;
},defer:function(bp){qx.event.Registration.addHandler(bp);
}});
})();
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__ln:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__lo:{},__lp:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__lp[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__lp[t]=true;
}catch(e){qx.bom.Element.__lp[t]=false;
}}return qx.bom.Element.__lp[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__lo[w]){var v=qx.bom.Element.__lo[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__lo[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__ln;
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
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__ec:null,__ed:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__ec=d;
this.__ed=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__ec=this.__ec;
g.__ed=this.__ed;
return g;
},getOrientation:function(){return this.__ec;
},isLandscape:function(){return this.__ed==c;
},isPortrait:function(){return this.__ed==a;
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
},isMultiTouch:function(){return this.__gD().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__gC(f).pageX;
},getDocumentTop:function(g){return this.__gC(g).pageY;
},getScreenLeft:function(h){return this.__gC(h).screenX;
},getScreenTop:function(j){return this.__gC(j).screenY;
},getViewportLeft:function(k){return this.__gC(k).clientX;
},getViewportTop:function(l){return this.__gC(l).clientY;
},getIdentifier:function(m){return this.__gC(m).identifier;
},__gC:function(n){n=n==null?0:n;
return this.__gD()[n];
},__gD:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
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
},__ie:{0:j,2:i,1:h},__if:{1:j,2:i,4:h},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:return i;
case f:if(qx.core.Environment.get(b)===a&&qx.core.Environment.get(c)<9){return j;
}default:if(this._native.target!==undefined){return this.__ie[this._native.button]||g;
}else{return this.__if[this._native.button]||g;
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
},__bG:function(m){var n=Math.abs(m);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>n){qx.event.type.MouseWheel.MINSCROLL=n;
this.__bH();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<n){qx.event.type.MouseWheel.MAXSCROLL=n;
this.__bH();
}if(qx.event.type.MouseWheel.MAXSCROLL===n&&qx.event.type.MouseWheel.MINSCROLL===n){return 2*(m/n);
}var o=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var p=(m/o)*Math.log(o)*qx.event.type.MouseWheel.FACTOR;
return p<0?Math.min(p,-1):Math.max(p,1);
},__bH:function(){var q=qx.event.type.MouseWheel.MAXSCROLL||0;
var t=qx.event.type.MouseWheel.MINSCROLL||q;

if(q<=t){return;
}var r=q-t;
var s=(q/r)*Math.log(r);

if(s==0){s=1;
}qx.event.type.MouseWheel.FACTOR=6/s;
},getWheelDelta:function(u){var e=this._native;
if(u===undefined){if(v===undefined){var v=-e.wheelDelta;

if(e.wheelDelta===undefined){v=e.detail;
}}return this.__bI(v);
}if(u===i){var x=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__bI(-e.wheelDeltaX):0;
}}else{if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__bI(e.detail);
}}return x;
}if(u===a){var y=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__bI(-e.wheelDeltaY):0;
}else{y=this.__bI(-e.wheelDelta);
}}else{if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__bI(e.detail);
}}return y;
}return 0;
},__bI:function(w){if(qx.core.Environment.get(f)){return this.__bG(w);
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
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__eV:null,__eW:null,__eX:null,__eY:null,__fa:null,__fb:null,__fc:null,__fd:null,__fe:null,__ff:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
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
}},tryActivate:function(S){var T=this.__ft(S);

if(T){this.setActive(T);
}},__cA:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__fg:function(){if(this._windowFocused){this._windowFocused=false;
this.__cA(this._window,null,g,false);
}},__fh:function(){if(!this._windowFocused){this._windowFocused=true;
this.__cA(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__eV=qx.lang.Function.listener(this.__fn,this);
this.__eW=qx.lang.Function.listener(this.__fo,this);
this.__eX=qx.lang.Function.listener(this.__fm,this);
this.__eY=qx.lang.Function.listener(this.__fl,this);
this.__fa=qx.lang.Function.listener(this.__fi,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eV,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eW,true);
qx.bom.Event.addNativeListener(this._window,f,this.__eX,true);
qx.bom.Event.addNativeListener(this._window,g,this.__eY,true);
qx.bom.Event.addNativeListener(this._window,y,this.__fa,true);
},"mshtml":function(){this.__eV=qx.lang.Function.listener(this.__fn,this);
this.__eW=qx.lang.Function.listener(this.__fo,this);
this.__fc=qx.lang.Function.listener(this.__fj,this);
this.__fd=qx.lang.Function.listener(this.__fk,this);
this.__fb=qx.lang.Function.listener(this.__fq,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eV);
qx.bom.Event.addNativeListener(this._document,h,this.__eW);
qx.bom.Event.addNativeListener(this._document,b,this.__fc);
qx.bom.Event.addNativeListener(this._document,a,this.__fd);
qx.bom.Event.addNativeListener(this._document,d,this.__fb);
},"webkit":function(){this.__eV=qx.lang.Function.listener(this.__fn,this);
this.__eW=qx.lang.Function.listener(this.__fo,this);
this.__fd=qx.lang.Function.listener(this.__fk,this);
this.__eX=qx.lang.Function.listener(this.__fm,this);
this.__eY=qx.lang.Function.listener(this.__fl,this);
this.__fb=qx.lang.Function.listener(this.__fq,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eV,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eW,true);
qx.bom.Event.addNativeListener(this._document,d,this.__fb,false);
qx.bom.Event.addNativeListener(this._window,c,this.__fd,true);
qx.bom.Event.addNativeListener(this._window,f,this.__eX,true);
qx.bom.Event.addNativeListener(this._window,g,this.__eY,true);
},"opera":function(){this.__eV=qx.lang.Function.listener(this.__fn,this);
this.__eW=qx.lang.Function.listener(this.__fo,this);
this.__fc=qx.lang.Function.listener(this.__fj,this);
this.__fd=qx.lang.Function.listener(this.__fk,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eV,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eW,true);
qx.bom.Event.addNativeListener(this._window,z,this.__fc,true);
qx.bom.Event.addNativeListener(this._window,c,this.__fd,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eV,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eW,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__eX,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__eY,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__fa,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eV);
qx.bom.Event.removeNativeListener(this._document,h,this.__eW);
qx.bom.Event.removeNativeListener(this._document,b,this.__fc);
qx.bom.Event.removeNativeListener(this._document,a,this.__fd);
qx.bom.Event.removeNativeListener(this._document,d,this.__fb);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eV,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eW,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__fb,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__fd,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__eX,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__eY,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eV,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eW,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__fc,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__fd,true);
}}),__fi:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__fu(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__fj:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__fh();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__fs(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__fh();

if(this.__fe){this.setFocus(this.__fe);
delete this.__fe;
}
if(this.__ff){this.setActive(this.__ff);
delete this.__ff;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__fu(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__fk:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__fg();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__fg();
this.__fe=this.getFocus();
this.__ff=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__fl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__fg();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__fg();
this.__fe=this.getFocus();
this.__ff=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__fm:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__fh();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__fh();

if(this.__fe){this.setFocus(this.__fe);
delete this.__fe;
}
if(this.__ff){this.setActive(this.__ff);
delete this.__ff;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__fn:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__fs(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__fs(bB);

if(bA){if(!this.__fu(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__fu(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__fs(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__fs(bK);

if(!this.__fu(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__fo:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__fp(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__fp(bQ));
},"default":null})),__fp:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__fq:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__fu(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__fr:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__fs:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__fr(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__ft:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__fu:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__cA(cg,cf,v,true);
}
if(cf){this.__cA(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__cA(ci,ch,a,true);
}
if(ch){this.__cA(ch,ci,b,true);
}if(ci){this.__cA(ci,ch,g,false);
}
if(ch){this.__cA(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fv=null;
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
},"default":function(p){if(this.__fw(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__fw(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__fw(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__fw(A)){var F=qx.bom.Range.get();
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
}},"gecko|webkit":function(K){if(this.__fw(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__fw(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__fw(O)){var T=qx.bom.Range.get();
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
}},"gecko|webkit":function(Y){if(this.__fw(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__fw(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__fw:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
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
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var j="",i="undefined",h="engine.name",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__ex:{names:{"class":b,"for":x,html:q,text:(qx.core.Environment.get(h)==l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__ex.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Environment.select(h,{"mshtml":function(D,name){var F=this.__ex;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__ex;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(J,name,K){if(typeof K===i){return;
}var L=this.__ex;
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
(function(){var i="engine.name",h="losecapture",g="mshtml",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);
this.__cp=j.getWindow();
this.__cT=k;
j.addListener(this.__cp,f,this.releaseCapture,this);
j.addListener(this.__cp,e,this.releaseCapture,this);
j.addListener(this.__cp,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cT:null,__cU:null,__cV:true,__cp:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__cU&&this.__cW[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__cV||!qx.dom.Hierarchy.contains(this.__cU,o)){o=this.__cU;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__cW:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__cU===q&&this.__cV==r){return;
}
if(this.__cU){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__cV=r;
this.__cU=q;
this.__cT.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__cU;
},releaseCapture:function(){var s=this.__cU;

if(!s){return;
}this.__cU=null;
this.__cT.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__cU=this.__cp=this.__cT=null;
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
if(C){L=E?
{expr:K.pop(),set:f(E)}:s.find(K.pop(),K.length===1&&(K[0]==="~"||K[0]==="+")&&C.parentNode?C.parentNode:C,G);
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
qx.Class.define(z,{statics:{__kS:function(D,E){return qx.bom.element.Style.get(D,E,qx.bom.element.Style.COMPUTED_MODE,false);
},__kT:function(F,G){return parseInt(qx.bom.element.Style.get(F,G,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__kU:function(H){var K=0,top=0;
if(H.getBoundingClientRect&&qx.core.Environment.get(f)!=t){var J=qx.dom.Node.getWindow(H);
K-=qx.bom.Viewport.getScrollLeft(J);
top-=qx.bom.Viewport.getScrollTop(J);
}else{var I=qx.dom.Node.getDocument(H).body;
H=H.parentNode;
while(H&&H!=I){K+=H.scrollLeft;
top+=H.scrollTop;
H=H.parentNode;
}}return {left:K,top:top};
},__kV:qx.core.Environment.select(f,{"mshtml":function(L){var N=qx.dom.Node.getDocument(L);
var M=N.body;
var O=0;
var top=0;
O-=M.clientLeft+N.documentElement.clientLeft;
top-=M.clientTop+N.documentElement.clientTop;

if(!qx.core.Environment.get(A)){O+=this.__kT(M,i);
top+=this.__kT(M,j);
}return {left:O,top:top};
},"webkit":function(P){var R=qx.dom.Node.getDocument(P);
var Q=R.body;
var S=Q.offsetLeft;
var top=Q.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<530.17){S+=this.__kT(Q,i);
top+=this.__kT(Q,j);
}return {left:S,top:top};
},"gecko":function(T){var U=qx.dom.Node.getDocument(T).body;
var V=U.offsetLeft;
var top=U.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<1.9){V+=this.__kT(U,g);
top+=this.__kT(U,h);
}if(qx.bom.element.BoxSizing.get(U)!==c){V+=this.__kT(U,i);
top+=this.__kT(U,j);
}return {left:V,top:top};
},"default":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
return {left:Y,top:top};
}}),__kW:qx.core.Environment.select(f,{"mshtml|webkit":function(ba){var bc=qx.dom.Node.getDocument(ba);
if(ba.getBoundingClientRect){var bd=ba.getBoundingClientRect();
var be=bd.left;
var top=bd.top;
}else{var be=ba.offsetLeft;
var top=ba.offsetTop;
ba=ba.offsetParent;
var bb=bc.body;
while(ba&&ba!=bb){be+=ba.offsetLeft;
top+=ba.offsetTop;
be+=this.__kT(ba,i);
top+=this.__kT(ba,j);
ba=ba.offsetParent;
}}return {left:be,top:top};
},"gecko":function(bf){if(bf.getBoundingClientRect){var bi=bf.getBoundingClientRect();
var bj=Math.round(bi.left);
var top=Math.round(bi.top);
}else{var bj=0;
var top=0;
var bg=qx.dom.Node.getDocument(bf).body;
var bh=qx.bom.element.BoxSizing;

if(bh.get(bf)!==c){bj-=this.__kT(bf,i);
top-=this.__kT(bf,j);
}
while(bf&&bf!==bg){bj+=bf.offsetLeft;
top+=bf.offsetTop;
if(bh.get(bf)!==c){bj+=this.__kT(bf,i);
top+=this.__kT(bf,j);
}if(bf.parentNode&&this.__kS(bf.parentNode,n)!=v){bj+=this.__kT(bf.parentNode,i);
top+=this.__kT(bf.parentNode,j);
}bf=bf.offsetParent;
}}return {left:bj,top:top};
},"default":function(bk){var bm=0;
var top=0;
var bl=qx.dom.Node.getDocument(bk).body;
while(bk&&bk!==bl){bm+=bk.offsetLeft;
top+=bk.offsetTop;
bk=bk.offsetParent;
}return {left:bm,top:top};
}}),get:function(bn,bo){if(bn.tagName==u){var location=this.__kX(bn);
var bv=location.left;
var top=location.top;
}else{var bp=this.__kV(bn);
var bu=this.__kW(bn);
var scroll=this.__kU(bn);
var bv=bu.left+bp.left-scroll.left;
var top=bu.top+bp.top-scroll.top;
}var bq=bv+bn.offsetWidth;
var br=top+bn.offsetHeight;

if(bo){if(bo==B||bo==e){var bs=qx.bom.element.Overflow.getX(bn);

if(bs==e||bs==C){bq+=bn.scrollWidth-bn.offsetWidth+this.__kT(bn,i)+this.__kT(bn,a);
}var bt=qx.bom.element.Overflow.getY(bn);

if(bt==e||bt==C){br+=bn.scrollHeight-bn.offsetHeight+this.__kT(bn,j)+this.__kT(bn,b);
}}
switch(bo){case B:bv+=this.__kT(bn,y);
top+=this.__kT(bn,r);
bq-=this.__kT(bn,k);
br-=this.__kT(bn,q);
case e:bv-=bn.scrollLeft;
top-=bn.scrollTop;
bq-=bn.scrollLeft;
br-=bn.scrollTop;
case s:bv+=this.__kT(bn,i);
top+=this.__kT(bn,j);
bq-=this.__kT(bn,a);
br-=this.__kT(bn,b);
break;
case m:bv-=this.__kT(bn,g);
top-=this.__kT(bn,h);
bq+=this.__kT(bn,o);
br+=this.__kT(bn,w);
break;
}}return {left:bv,top:top,right:bq,bottom:br};
},__kX:qx.core.Environment.select(f,{"default":function(bw){var top=bw.offsetTop+this.__kT(bw,h);
var bx=bw.offsetLeft+this.__kT(bw,g);
return {left:bx,top:top};
},"mshtml":function(by){var top=by.offsetTop;
var bz=by.offsetLeft;

if(!((parseFloat(qx.core.Environment.get(d))<8||qx.core.Environment.get(l)<8)&&!qx.core.Environment.get(A))){top+=this.__kT(by,h);
bz+=this.__kT(by,g);
}return {left:bz,top:top};
},"gecko":function(bA){var top=bA.offsetTop+this.__kT(bA,h)+this.__kT(bA,i);
var bB=bA.offsetLeft+this.__kT(bA,g)+this.__kT(bA,j);
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
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__cX:{},remove:function(c){delete this.__cX[c.$$hash];
},add:function(d){this.__cX[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},isScheduled:function(e){return !!this.__cX[e.$$hash];
},flush:function(){var f=this.__kD();
for(var i=f.length-1;i>=0;i--){var g=f[i];
if(g.hasValidLayout()){continue;
}if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();
g.renderLayout(0,0,j.width,j.height);
}else{var h=g.getBounds();
g.renderLayout(h.left,h.top,h.width,h.height);
}}},getNestingLevel:function(k){var l=this.__kC;
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
},__kB:function(){var t=qx.ui.core.queue.Visibility;
this.__kC={};
var s=[];
var r=this.__cX;
var o,q;

for(var p in r){o=r[p];

if(t.isVisible(o)){q=this.getNestingLevel(o);
if(!s[q]){s[q]={};
}s[q][p]=o;
delete r[p];
}}return s;
},__kD:function(){var x=[];
var z=this.__kB();

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
qx.Class.define(b,{statics:{__eH:false,__eI:{},__eJ:0,MAX_RETRIES:10,scheduleFlush:function(j){var self=qx.ui.core.queue.Manager;
self.__eI[j]=true;

if(!self.__eH){self.__eO.schedule();
self.__eH=true;
}},flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;
}var self=qx.ui.core.queue.Manager;
if(self.__eK){return;
}self.__eK=true;
self.__eO.cancel();
var k=self.__eI;
self.__eL(function(){while(k.visibility||k.widget||k.appearance||k.layout||k.element){if(k.widget){delete k.widget;
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
}}},function(){self.__eH=false;
});
self.__eL(function(){if(k.dispose){delete k.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__eK=false;
});
self.__eJ=0;
},__eL:qx.core.Environment.select(i,{"true":function(l,m){l();
m();
},"false":function(n,o){var self=qx.ui.core.queue.Manager;

try{n();
}catch(e){if(qx.core.Environment.get(i)){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__eH=false;
self.__eK=false;
self.__eJ+=1;
if(qx.core.Environment.get(a)==f&&qx.core.Environment.get(d)<=7){o();
}
if(self.__eJ<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__eJ-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{o();
}}}),__eM:function(e){var p=qx.ui.core.queue.Manager;
if(e.getData()==g){p.PAUSE=true;

if(p.__eN){window.clearTimeout(p.__eN);
}p.__eN=window.setTimeout(function(){p.PAUSE=false;
p.__eN=null;
p.flush();
},500);
}else{p.flush();
}}},defer:function(q){q.__eO=new qx.util.DeferredCall(q.flush);
qx.html.Element._scheduleFlush=q.scheduleFlush;
qx.event.Registration.addListener(window,h,qx.core.Environment.get(c)?q.__eM:q.flush);
}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__cX:[],remove:function(c){qx.lang.Array.remove(this.__cX,c);
},add:function(d){var e=this.__cX;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__cX;
var g;

for(var i=f.length-1;i>=0;i--){g=f[i];
f.splice(i,1);
g.syncWidget();
}if(f.length!=0){return;
}this.__cX=[];
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__cX:[],__cY:{},remove:function(c){delete this.__cY[c.$$hash];
qx.lang.Array.remove(this.__cX,c);
},isVisible:function(d){return this.__cY[d.$$hash]||false;
},__da:function(e){var g=this.__cY;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__da(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(j){var k=this.__cX;

if(qx.lang.Array.contains(k,j)){return;
}k.unshift(j);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var o=this.__cX;
var p=this.__cY;
for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;

if(p[n]!=null){o[i].addChildrenToQueue(o);
}}var l={};

for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;
l[n]=p[n];
p[n]=null;
}for(var i=o.length-1;i>=0;i--){var m=o[i];
var n=m.$$hash;
o.splice(i,1);
if(p[n]==null){this.__da(m);
}if(p[n]&&p[n]!=l[n]){m.checkAppearanceNeeds();
}}this.__cX=[];
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__cX:[],remove:function(c){qx.lang.Array.remove(this.__cX,c);
},add:function(d){var e=this.__cX;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(f){return qx.lang.Array.contains(this.__cX,f);
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__cX;
var h;

for(var i=g.length-1;i>=0;i--){h=g[i];
g.splice(i,1);
if(j.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__cX:[],add:function(c){var d=this.__cX;

if(qx.lang.Array.contains(d,c)){return;
}d.unshift(c);
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__cX;

for(var i=e.length-1;i>=0;i--){var f=e[i];
e.splice(i,1);
f.dispose();
}if(e.length!=0){return;
}this.__cX=[];
}}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__x=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__x:null,__bJ:{focusin:1,focusout:1,focus:1,blur:1},__bK:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;
},_dispatchEvent:function(j){var p=j.getTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);
var q=false;

while(o&&o.isAnonymous()){var q=true;
o=o.getLayoutParent();
}if(o&&q&&j.getType()==a){o.getContainerElement().activate();
}if(this.__bJ[j.getType()]){o=o&&o.getFocusTarget();
if(!o){return;
}}if(j.getRelatedTarget){var x=j.getRelatedTarget();
var w=qx.ui.core.Widget.getWidgetByElement(x);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}
if(w){if(this.__bJ[j.getType()]){w=w.getFocusTarget();
}if(w===o){return;
}}}var s=j.getCurrentTarget();
var u=qx.ui.core.Widget.getWidgetByElement(s);

if(!u||u.isAnonymous()){return;
}if(this.__bJ[j.getType()]){u=u.getFocusTarget();
}var v=j.getType();

if(!u||!(u.isEnabled()||this.__bK[v])){return;
}var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var r=this.__x.getListeners(u,v,k);

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
}}},destruct:function(){this.__x=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var c="abstract",b="qx.debug",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:c,extend:qx.core.Object,members:{__ce:null,_invalidChildrenCache:null,__cj:null,invalidateLayoutCache:function(){this.__ce=null;
},renderLayout:function(d,e){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__ce){return this.__ce;
}return this.__ce=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(f){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Environment.select(b,{"true":function(g,name,h){},"false":null}),_clearSeparators:function(){var i=this.__cj;

if(i instanceof qx.ui.core.LayoutItem){i.clearSeparators();
}},_renderSeparator:function(j,k){this.__cj.renderSeparator(j,k);
},connectToWidget:function(l){if(l&&this.__cj){throw new Error("It is not possible to manually set the connected widget.");
}this.__cj=l;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__cj;
},_applyLayoutChange:function(){if(this.__cj){this.__cj.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__cj.getLayoutChildren();
}},destruct:function(){this.__cj=this.__ce=null;
}});
})();
(function(){var u="",t='indexOf',s='slice',r='concat',q='toLocaleLowerCase',p="qx.type.BaseString",o='match',n="qx.debug",m='search',k='replace',d='toLowerCase',j='charCodeAt',g='split',c='substring',b='lastIndexOf',f='substr',e='toLocaleUpperCase',h='toUpperCase',a='charAt';
qx.Class.define(p,{extend:Object,construct:function(v){var v=v||u;
this.__dv=v;
this.length=v.length;
},members:{$$isString:true,length:0,__dv:null,toString:function(){return this.__dv;
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
this.__gW=c;
this.__gX=d;
},members:{__gW:null,__gX:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__gW,this.__gX);
}}});
})();
(function(){var m="_",l="",k="locale",j="_applyLocale",h="changeLocale",g="C",f="locale.variant",e="qx.dynlocale",d="qx.locale.Manager",c="String",a="singleton",b="qx.debug";
qx.Class.define(d,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hv=qx.$$translations||{};
this.__hw=qx.$$locales||{};
var n=qx.core.Environment.get(k);
var o=qx.core.Environment.get(f);

if(o!==l){n+=m+o;
}this.__hx=n;
this.setLocale(n||this.__hy);
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
}},properties:{locale:{check:c,nullable:true,apply:j,event:h}},members:{__hy:g,__hz:null,__hA:null,__hv:null,__hw:null,__hx:null,getLanguage:function(){return this.__hA;
},getTerritory:function(){return this.getLocale().split(m)[1]||l;
},getAvailableLocales:function(){var D=[];

for(var C in this.__hw){if(C!=this.__hy){D.push(C);
}}return D;
},__hB:function(E){var G;

if(E==null){return null;
}var F=E.indexOf(m);

if(F==-1){G=E;
}else{G=E.substring(0,F);
}return G;
},_applyLocale:function(H,I){if(qx.core.Environment.get(b)){if(!(H in this.__hw||H==this.__hx)){qx.log.Logger.warn("Locale: "+H+" not available.");
}}this.__hz=H;
this.__hA=this.__hB(H);
},addTranslation:function(J,K){var L=this.__hv;

if(L[J]){for(var M in K){L[J][M]=K[M];
}}else{L[J]=K;
}},addLocale:function(N,O){var P=this.__hw;

if(P[N]){for(var Q in O){P[N][Q]=O[Q];
}}else{P[N]=O;
}},translate:function(R,S,T){var U=this.__hv;
return this.__hC(U,R,S,T);
},localize:function(V,W,X){var Y=this.__hw;
return this.__hC(Y,V,W,X);
},__hC:function(ba,bb,bc,bd){var be;

if(!ba){return bb;
}
if(bd){var bg=this.__hB(bd);
}else{bd=this.__hz;
bg=this.__hA;
}if(!be&&ba[bd]){be=ba[bd][bb];
}if(!be&&ba[bg]){be=ba[bg][bb];
}if(!be&&ba[this.__hy]){be=ba[this.__hy][bb];
}
if(!be){be=bb;
}
if(bc.length>0){var bf=[];

for(var i=0;i<bc.length;i++){var bh=bc[i];

if(bh&&bh.translate){bf[i]=bh.translate();
}else{bf[i]=bh;
}}be=qx.lang.String.format(be,bf);
}
if(qx.core.Environment.get(e)){be=new qx.locale.LocalizedString(be,bb,bc);
}return be;
}},destruct:function(){this.__hv=this.__hw=null;
}});
})();
(function(){var k="px",j="engine.name",i="div",h="img",g="",f="no-repeat",d="qx.debug",c="scale-x",b="mshtml",a="repeat",J="scale",I="b64",H="scale-y",G="qx/icon",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",r='<img src="',s="qx.bom.element.Decoration",p="', sizingMethod='",q='"/>',n="png",o="')",l='"></div>',m='" style="',t="none",u="webkit",w=" ",v="repeat-x",y="DXImageTransform.Microsoft.AlphaImageLoader",x="qx/static/blank.gif",z="absolute";
qx.Class.define(s,{statics:{DEBUG:false,__lq:{},__lr:(qx.core.Environment.get(j)==b)&&qx.core.Environment.get(D)<9,__ls:qx.core.Environment.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__lt:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(K,L,M,N){var P=this.getTagName(M,L);

if(P!=K.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var Q=this.getAttributes(L,M,N);

if(P===h){K.src=Q.src||qx.util.ResourceManager.getInstance().toUri(x);
}if(K.style.backgroundPosition!=g&&Q.style.backgroundPosition===undefined){Q.style.backgroundPosition=null;
}if(K.style.clip!=g&&Q.style.clip===undefined){Q.style.clip=null;
}var O=qx.bom.element.Style;
O.setStyles(K,Q.style);
if(this.__lr){try{K.filters[y].apply();
}catch(e){}}},create:function(R,S,T){var U=this.getTagName(S,R);
var W=this.getAttributes(R,S,T);
var V=qx.bom.element.Style.compile(W.style);

if(U===h){return r+W.src+m+V+q;
}else{return B+V+l;
}},getTagName:function(X,Y){if((qx.core.Environment.get(j)==b)){if(Y&&this.__lr&&this.__ls[X]&&qx.lang.String.endsWith(Y,F)){return i;
}}return this.__lt[X];
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
if(this.__lr&&this.__ls[bb]&&be===n){bd=this.__lw(bc,bb,ba);
}else{if(bb===J){bd=this.__lx(bc,bb,ba);
}else if(bb===c||bb===H){bd=this.__ly(bc,bb,ba);
}else{bd=this.__lB(bc,bb,ba);
}}return bd;
},__lu:function(bf,bh,bi){if(bf.width==null&&bh!=null){bf.width=bh+k;
}
if(bf.height==null&&bi!=null){bf.height=bi+k;
}return bf;
},__lv:function(bj){var bk=qx.util.ResourceManager.getInstance().getImageWidth(bj)||qx.io.ImageLoader.getWidth(bj);
var bl=qx.util.ResourceManager.getInstance().getImageHeight(bj)||qx.io.ImageLoader.getHeight(bj);
return {width:bk,height:bl};
},__lw:function(bm,bn,bo){var br=this.__lv(bo);
bm=this.__lu(bm,br.width,br.height);
var bq=bn==f?E:J;
var bp=C+qx.util.ResourceManager.getInstance().toUri(bo)+p+bq+o;
bm.filter=bp;
bm.backgroundImage=bm.backgroundRepeat=g;
return {style:bm};
},__lx:function(bs,bt,bu){var bv=qx.util.ResourceManager.getInstance().toUri(bu);
var bw=this.__lv(bu);
bs=this.__lu(bs,bw.width,bw.height);
return {src:bv,style:bs};
},__ly:function(bx,by,bz){var bA=qx.util.ResourceManager.getInstance();
var bD=bA.getCombinedFormat(bz);
var bF=this.__lv(bz);
var bB;

if(bD){var bE=bA.getData(bz);
var bC=bE[4];

if(bD==I){bB=bA.toDataUri(bz);
}else{bB=bA.toUri(bC);
}
if(by===c){bx=this.__lz(bx,bE,bF.height);
}else{bx=this.__lA(bx,bE,bF.width);
}return {src:bB,style:bx};
}else{if(qx.core.Environment.get(d)){this.__lD(bz);
}
if(by==c){bx.height=bF.height==null?null:bF.height+k;
}else if(by==H){bx.width=bF.width==null?null:bF.width+k;
}bB=bA.toUri(bz);
return {src:bB,style:bx};
}},__lz:function(bG,bH,bI){var bJ=qx.util.ResourceManager.getInstance().getImageHeight(bH[4]);
bG.clip={top:-bH[6],height:bI};
bG.height=bJ+k;
if(bG.top!=null){bG.top=(parseInt(bG.top,10)+bH[6])+k;
}else if(bG.bottom!=null){bG.bottom=(parseInt(bG.bottom,10)+bI-bJ-bH[6])+k;
}return bG;
},__lA:function(bK,bL,bM){var bN=qx.util.ResourceManager.getInstance().getImageWidth(bL[4]);
bK.clip={left:-bL[5],width:bM};
bK.width=bN+k;
if(bK.left!=null){bK.left=(parseInt(bK.left,10)+bL[5])+k;
}else if(bK.right!=null){bK.right=(parseInt(bK.right,10)+bM-bN-bL[5])+k;
}return bK;
},__lB:function(bO,bP,bQ){var bT=qx.util.ResourceManager.getInstance();
var bY=bT.getCombinedFormat(bQ);
var cb=this.__lv(bQ);
if(bY&&bP!==a){var ca=bT.getData(bQ);
var bX=ca[4];

if(bY==I){var bW=bT.toDataUri(bQ);
var bV=bU=0;
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
}else{if(qx.core.Environment.get(d)){if(bP!==a){this.__lD(bQ);
}}bO=this.__lu(bO,cb.width,cb.height);
bO=this.__lC(bO,bQ,bP);
return {style:bO};
}},__lC:function(cc,cd,ce){var top=null;
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
},__lD:function(cj){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(cj)&&cj.indexOf(G)==-1){if(!this.__lq[cj]){qx.log.Logger.debug("Potential clipped image candidate: "+cj);
this.__lq[cj]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Environment.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__lr;
},"default":function(){return false;
}})}});
})();
(function(){var c="engine.name",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__cY:{},__hY:{width:null,height:null},__ia:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__cY[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__cY[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__cY[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__cY[k];
return m?m.format:null;
},getSize:function(n){var o=this.__cY[n];
return o?
{width:o.width,height:o.height}:this.__hY;
},getWidth:function(p){var q=this.__cY[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__cY[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__cY[t];

if(!w){w=this.__cY[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__ib,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__cY[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__cY[z]=null;
},__ib:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__cY[E];

if(!F){}if(event.type===b){F.loaded=true;
F.width=this.__ic(D);
F.height=this.__id(D);
var G=this.__ia.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__ic:qx.core.Environment.select(c,{"gecko":function(I){return I.naturalWidth;
},"default":function(J){return J.width;
}}),__id:qx.core.Environment.select(c,{"gecko":function(K){return K.naturalHeight;
},"default":function(L){return L.height;
}})}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__im:[n,null,m,i,null,r,k,null,r],__in:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__io:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__ip:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__io(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__ip(G)){G=q+G+q;
}var H=this.__im;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__in;
}var L=this.__io(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__ip(N)){O=j+N+p;
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
(function(){var j="nonScaled",i="scaled",h="alphaScaled",g=".png",f="div",e="replacement",d="qx.event.type.Event",c="engine.name",b="hidden",a="Boolean",A="px",z="http",y="scale",x="changeSource",w="qx.ui.basic.Image",v="qx.debug",u="loaded",t="-disabled.$1",s="loadingFailed",r="String",p="_applySource",q="__kY",n="img",o="image",l="mshtml",m="_applyScale",k="no-repeat";
qx.Class.define(w,{extend:qx.ui.core.Widget,construct:function(B){this.__kY={};
qx.ui.core.Widget.call(this);

if(B){this.setSource(B);
}},properties:{source:{check:r,init:null,nullable:true,event:x,apply:p,themeable:true},scale:{check:a,init:false,themeable:true,apply:m},appearance:{refine:true,init:o},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:d,loaded:d},members:{__la:null,__lb:null,__ed:null,__kY:null,getContentElement:function(){return this.__lf();
},_createContentElement:function(){return this.__lf();
},_getContentHint:function(){return {width:this.__la||0,height:this.__lb||0};
},_applyEnabled:function(C,D){qx.ui.core.Widget.prototype._applyEnabled.call(this,C,D);

if(this.getSource()){this._styleSource();
}},_applySource:function(E){this._styleSource();
},_applyScale:function(F){this._styleSource();
},__lc:function(G){this.__ed=G;
},__ld:function(){if(this.__ed==null){var I=this.getSource();
var H=false;

if(I!=null){H=qx.lang.String.endsWith(I,g);
}
if(this.getScale()&&H&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__ed=h;
}else if(this.getScale()){this.__ed=i;
}else{this.__ed=j;
}}return this.__ed;
},__le:function(J){var K;
var L;

if(J==h){K=true;
L=f;
}else if(J==j){K=false;
L=f;
}else{K=true;
L=n;
}var M=new qx.html.Image(L);
M.setScale(K);
M.setStyles({"overflowX":b,"overflowY":b});
return M;
},__lf:function(){var N=this.__ld();

if(this.__kY[N]==null){this.__kY[N]=this.__le(N);
}return this.__kY[N];
},_styleSource:function(){var O=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!O){this.getContentElement().resetSource();
return;
}this.__lg(O);

if((qx.core.Environment.get(c)==l)){var P=this.getScale()?y:k;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(P,O);
}if(qx.util.ResourceManager.getInstance().has(O)){this.__li(this.getContentElement(),O);
}else if(qx.io.ImageLoader.isLoaded(O)){this.__lj(this.getContentElement(),O);
}else{this.__lk(this.getContentElement(),O);
}},__lg:qx.core.Environment.select(c,{"mshtml":function(Q){var S=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var R=qx.lang.String.endsWith(Q,g);

if(S&&R){if(this.getScale()&&this.__ld()!=h){this.__lc(h);
}else if(!this.getScale()&&this.__ld()!=j){this.__lc(j);
}}else{if(this.getScale()&&this.__ld()!=i){this.__lc(i);
}else if(!this.getScale()&&this.__ld()!=j){this.__lc(j);
}}this.__lh(this.__lf());
},"default":function(T){if(this.getScale()&&this.__ld()!=i){this.__lc(i);
}else if(!this.getScale()&&this.__ld(j)){this.__lc(j);
}this.__lh(this.__lf());
}}),__lh:function(U){var X=this.getContainerElement();
var Y=X.getChild(0);

if(Y!=U){if(Y!=null){var bb=A;
var V={};
var W=this.getInnerSize();

if(W!=null){V.width=W.width+bb;
V.height=W.height+bb;
}var ba=this.getInsets();
V.left=ba.left+bb;
V.top=ba.top+bb;
V.zIndex=10;
U.setStyles(V,true);
U.setSelectable(this.getSelectable());
}X.removeAt(0);
X.addAt(U,0);
}},__li:function(bc,bd){var bf=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var be=bd.replace(/\.([a-z]+)$/,t);

if(bf.has(be)){bd=be;
this.addState(e);
}else{this.removeState(e);
}}if(bc.getSource()===bd){return;
}bc.setSource(bd);
this.__lm(bf.getImageWidth(bd),bf.getImageHeight(bd));
},__lj:function(bg,bh){var bj=qx.io.ImageLoader;
bg.setSource(bh);
var bi=bj.getWidth(bh);
var bk=bj.getHeight(bh);
this.__lm(bi,bk);
},__lk:function(bl,bm){var bn=qx.io.ImageLoader;

if(qx.core.Environment.get(v)){if(!qx.lang.String.startsWith(bm.toLowerCase(),z)){var self=this.self(arguments);

if(!self.__uv){self.__uv={};
}
if(!self.__uv[bm]){this.debug("try to load an unmanaged relative image: "+bm);
self.__uv[bm]=true;
}}}if(!bn.isFailed(bm)){bn.load(bm,this.__ll,this);
}else{if(bl!=null){bl.resetSource();
}}},__ll:function(bo,bp){if(this.$$disposed===true){return;
}if(bo!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bp.failed){this.warn("Image could not be loaded: "+bo);
this.fireEvent(s);
}else{this.fireEvent(u);
}this._styleSource();
},__lm:function(bq,br){if(bq!==this.__la||br!==this.__lb){this.__la=bq;
this.__lb=br;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(q);
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
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__ki=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__ki:null,_applyTimeoutInterval:function(h){this.__ki.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__ki){this.__ki.stop();
}this.__ki=null;
}});
})();
(function(){var j="top",i="right",h="bottom",g="left",f="edge-start",e="align-start",d="align-end",c="edge-end",b="qx.util.placement.AbstractAxis",a="-",F="best-fit",E="size",D="target.bottom",C="offsets",B="size.width",A="offsets.bottom",z="qx.util.placement.Placement",y="qx.debug",x="keep-align",w="target.right",q="direct",r="offsets.right",o="target",p="offsets.left",m="area",n="target.top",k="area.height",l='__dM',s="target.left",t="area.width",v="size.height",u="offsets.top";
qx.Class.define(z,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__dM=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:b},axisY:{check:b},edge:{check:[j,i,h,g],init:j},align:{check:[j,i,h,g],init:i}},statics:{__dN:null,compute:function(G,H,I,J,K,L,M){this.__dN=this.__dN||new qx.util.placement.Placement();
var P=K.split(a);
var O=P[0];
var N=P[1];
this.__dN.set({axisX:this.__dR(L),axisY:this.__dR(M),edge:O,align:N});
return this.__dN.compute(G,H,I,J);
},__dO:null,__dP:null,__dQ:null,__dR:function(Q){switch(Q){case q:this.__dO=this.__dO||new qx.util.placement.DirectAxis();
return this.__dO;
case x:this.__dP=this.__dP||new qx.util.placement.KeepAlignAxis();
return this.__dP;
case F:this.__dQ=this.__dQ||new qx.util.placement.BestFitAxis();
return this.__dQ;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__dM:null,compute:function(R,S,T,U){if(qx.core.Environment.get(y)){this.assertObject(R,E);
this.assertNumber(R.width,B);
this.assertNumber(R.height,v);
this.assertObject(S,m);
this.assertNumber(S.width,t);
this.assertNumber(S.height,k);
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
}var V=this.getAxisX()||this.__dM;
var X=V.computeStart(R.width,{start:T.left,end:T.right},{start:U.left,end:U.right},S.width,this.__dS());
var W=this.getAxisY()||this.__dM;
var top=W.computeStart(R.height,{start:T.top,end:T.bottom},{start:U.top,end:U.bottom},S.height,this.__dT());
return {left:X,top:top};
},__dS:function(){var ba=this.getEdge();
var Y=this.getAlign();

if(ba==g){return f;
}else if(ba==i){return c;
}else if(Y==g){return e;
}else if(Y==i){return d;
}},__dT:function(){var bc=this.getEdge();
var bb=this.getAlign();

if(bc==j){return f;
}else if(bc==h){return c;
}else if(bb==j){return e;
}else if(bb==h){return d;
}}},destruct:function(){this._disposeObjects(l);
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
(function(){var g="mousedown",f="qx.debug",d="blur",c="__nn",b="qx.ui.popup.Manager",a="singleton";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nn=[];
qx.event.Registration.addListener(document.documentElement,g,this.__np,this,true);
qx.bom.Element.addListener(window,d,this.hideAll,this);
},members:{__nn:null,add:function(h){if(qx.core.Environment.get(f)){if(!(h instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+h);
}}this.__nn.push(h);
this.__no();
},remove:function(j){if(qx.core.Environment.get(f)){if(!(j instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+j);
}}
if(this.__nn){qx.lang.Array.remove(this.__nn,j);
this.__no();
}},hideAll:function(){var k;
var m=this.__nn;

if(m){for(var i=0,l=m.length;i<l;i++){var k=m[i];
k.getAutoHide()&&k.exclude();
}}},__no:function(){var n=1e7;

for(var i=0;i<this.__nn.length;i++){this.__nn[i].setZIndex(n++);
}},__np:function(e){var p=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var q=this.__nn;

for(var i=0;i<q.length;i++){var o=q[i];

if(!o.getAutoHide()||p==o||qx.ui.core.Widget.contains(o,p)){continue;
}o.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__np,this,true);
this._disposeArray(c);
}});
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
var N,top,D,w;
var I,B;
var G=this.getGap();
var L=this.getCenter();
if(v===p||v===j){var E=length-1;
var z=-1;
var x=-1;
}else{var E=0;
var z=length;
var x=1;
}if(v==o||v==p){if(L){var H=0;

for(var i=E;i!=z;i+=x){w=y[i].getSizeHint().height;

if(w>0){H+=w;

if(i!=E){H+=G;
}}}top=Math.round((t-H)/2);
}else{top=0;
}
for(var i=E;i!=z;i+=x){I=y[i];
B=I.getSizeHint();
D=Math.min(B.maxWidth,Math.max(s,B.minWidth));
w=B.height;
N=C.computeHorizontalAlignOffset(c,D,s);
I.renderLayout(N,top,D,w);
if(w>0){top+=w+G;
}}}else{var A=s;
var u=null;
var K=0;

for(var i=E;i!=z;i+=x){I=y[i];
D=I.getSizeHint().width;

if(D>0){if(!u&&I instanceof qx.ui.basic.Label){u=I;
}else{A-=D;
}K++;
}}
if(K>1){var J=(K-1)*G;
A-=J;
}
if(u){var B=u.getSizeHint();
var F=Math.max(B.minWidth,Math.min(A,B.maxWidth));
A-=F;
}
if(L&&A>0){N=Math.round(A/2);
}else{N=0;
}
for(var i=E;i!=z;i+=x){I=y[i];
B=I.getSizeHint();
w=Math.min(B.maxHeight,Math.max(t,B.minHeight));

if(I===u){D=F;
}else{D=B.width;
}var M=h;

if(v==m){M=o;
}else if(v==l){M=p;
}top=C.computeVerticalAlignOffset(M,B.height,t);
I.renderLayout(N,top,D,w);
if(D>0){N+=D+G;
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
(function(){var k="qx.dynlocale",j="Boolean",i="color",h="qx.debug",g="enabled",f="changeLocale",d="_applyTextAlign",c="qx.ui.core.Widget",b="nowrap",a="changeTextAlign",E="_applyWrap",D="changeValue",C="qx.ui.basic.Label",B="whiteSpace",A="css.textoverflow",z="html.xul",y="_applyValue",x="center",w="_applyBuddy",v="String",r="textAlign",s="right",p="justify",q="changeRich",n="normal",o="_applyRich",l="click",m="label",t="left",u="A";
qx.Class.define(C,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(F){qx.ui.core.Widget.call(this);

if(F!=null){this.setValue(F);
}
if(qx.core.Environment.get(k)){qx.locale.Manager.getInstance().addListener(f,this._onChangeLocale,this);
}},properties:{rich:{check:j,init:false,event:q,apply:o},wrap:{check:j,init:true,apply:E},value:{check:v,apply:y,event:D,nullable:true},buddy:{check:c,apply:w,nullable:true,init:null,dereference:true},textAlign:{check:[t,x,s,p],nullable:true,themeable:true,apply:d,event:a},appearance:{refine:true,init:m},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__L:null,__kj:null,__kk:null,__kl:null,__M:null,_getContentHint:function(){if(this.__kj){this.__km=this.__kn();
delete this.__kj;
}return {width:this.__km.width,height:this.__km.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(G){if(!qx.core.Environment.get(A)&&qx.core.Environment.get(z)){if(G&&!this.isRich()){if(qx.core.Environment.get(h)){this.warn("Only rich labels are selectable in browsers with Gecko engine!");
}return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,G);
},_getContentHeightForWidth:function(H){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__kn(H).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(I,J){this.getContentElement().setStyle(r,I);
},_applyTextColor:function(K,L){if(K){this.getContentElement().setStyle(i,qx.theme.manager.Color.getInstance().resolve(K));
}else{this.getContentElement().removeStyle(i);
}},__km:{width:0,height:0},_applyFont:function(M,N){if(N&&this.__L&&this.__M){this.__L.removeListenerById(this.__M);
this.__M=null;
}var O;

if(M){this.__L=qx.theme.manager.Font.getInstance().resolve(M);

if(this.__L instanceof qx.bom.webfonts.WebFont){this.__M=this.__L.addListener("changeStatus",this._onWebFontStatusChange,this);
}O=this.__L.getStyles();
}else{this.__L=null;
O=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(O);
this.__kj=true;
qx.ui.core.queue.Layout.add(this);
},__kn:function(P){var T=qx.bom.Label;
var R=this.getFont();
var Q=R?this.__L.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||u;
var S=this.getRich();
return S?T.getHtmlSize(content,Q,P):T.getTextSize(content,Q);
},_applyBuddy:function(U,V){if(V!=null){V.removeBinding(this.__kk);
this.__kk=null;
this.removeListenerById(this.__kl);
this.__kl=null;
}
if(U!=null){this.__kk=U.bind(g,this,g);
this.__kl=this.addListener(l,function(){if(U.isFocusable()){U.focus.apply(U);
}},this);
}},_applyRich:function(W){this.getContentElement().setRich(W);
this.__kj=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(X,Y){if(X&&!this.isRich()){if(qx.core.Environment.get(h)){this.warn("Only rich labels support wrap.");
}}
if(this.isRich()){var ba=X?n:b;
this.getContentElement().setStyle(B,ba);
}},_onChangeLocale:qx.core.Environment.select(k,{"true":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"false":null}),_onWebFontStatusChange:function(bb){if(bb.getData().valid===true){this.__kj=true;
qx.ui.core.queue.Layout.add(this);
}},_applyValue:function(bc,bd){this.getContentElement().setValue(bc);
this.__kj=true;
qx.ui.core.queue.Layout.add(this);
}},destruct:function(){if(qx.core.Environment.get(k)){qx.locale.Manager.getInstance().removeListener(f,this._onChangeLocale,this);
}if(this.__kk!=null){var be=this.getBuddy();

if(be!=null&&!be.isDisposed()){be.removeBinding(this.__kk);
}}
if(this.__L&&this.__M){this.__L.removeListenerById(this.__M);
}this.__L=this.__kk=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__bF:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__bF;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(g){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__bF==h){return;
}this.__bF=h;
return this;
},setValue:function(j){this._setProperty(b,j);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var j="css.textoverflow",i="html.xul",h="div",g="inherit",f="text",e="value",d="",c="engine.name",b="hidden",a="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",C="nowrap",B="auto",A="0",z="ellipsis",y="normal",x="label",w="px",v="crop",u="gecko",t="end",q="100%",r="visible",o="qx.bom.Label",p="opera",m="engine.version",n="mshtml",k="block",l="-1000px",s="absolute";
qx.Class.define(o,{statics:{__eP:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__eQ:function(){var D=this.__eS(false);
document.body.insertBefore(D,document.body.firstChild);
return this._textElement=D;
},__eR:function(){var E=this.__eS(true);
document.body.insertBefore(E,document.body.firstChild);
return this._htmlElement=E;
},__eS:function(F){var G=qx.bom.Element.create(h);
var H=G.style;
H.width=H.height=B;
H.left=H.top=l;
H.visibility=b;
H.position=s;
H.overflow=r;

if(F){H.whiteSpace=y;
}else{H.whiteSpace=C;

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var I=document.createElementNS(a,x);
var H=I.style;
H.padding=A;

for(var J in this.__eP){H[J]=g;
}G.appendChild(I);
}}return G;
},__eT:function(K){var L={};

if(K){L.whiteSpace=y;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){L.display=k;
}else{L.overflow=b;
L.whiteSpace=C;
L.textOverflow=z;
if((qx.core.Environment.get(c)==p)){L.OTextOverflow=z;
}}return L;
},create:function(content,M,N){if(!N){N=window;
}
if(M){var O=N.document.createElement(h);
O.useHtml=true;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var O=N.document.createElement(h);
var Q=N.document.createElementNS(a,x);
var P=Q.style;
P.cursor=g;
P.color=g;
P.overflow=b;
P.maxWidth=q;
P.padding=A;
for(var R in this.__eP){Q.style[R]=g;
}Q.setAttribute(v,t);
O.appendChild(Q);
}else{var O=N.document.createElement(h);
qx.bom.element.Style.setStyles(O,this.__eT(M));
}
if(content){this.setValue(O,content);
}return O;
},setValue:function(S,T){T=T||d;

if(S.useHtml){S.innerHTML=T;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){S.firstChild.setAttribute(e,T);
}else{qx.bom.element.Attribute.set(S,f,T);
}},getValue:function(U){if(U.useHtml){return U.innerHTML;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){return U.firstChild.getAttribute(e)||d;
}else{return qx.bom.element.Attribute.get(U,f);
}},getHtmlSize:function(content,V,W){var X=this._htmlElement||this.__eR();
X.style.width=W!=undefined?W+w:B;
X.innerHTML=content;
return this.__eU(X,V);
},getTextSize:function(Y,ba){var bb=this._textElement||this.__eQ();

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){bb.firstChild.setAttribute(e,Y);
}else{qx.bom.element.Attribute.set(bb,f,Y);
}return this.__eU(bb,ba);
},__eU:function(bc,bd){var be=this.__eP;

if(!bd){bd={};
}
for(var bf in be){bc.style[bf]=bd[bf]||d;
}var bg=qx.bom.element.Dimension.getSize(bc);
if((qx.core.Environment.get(c)==u)){bg.width++;
}if((qx.core.Environment.get(c)==n)&&parseFloat(qx.core.Environment.get(m))>=9){bg.width++;
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
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__x",b="__od",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__od:null,__x:null,getWindowManager:function(){if(!this.__x){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__x;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__x){this.__x.setDesktop(null);
}j.setDesktop(this);
this.__x=j;
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
},getWindows:function(){if(!this.__od){this.__od=[];
}return this.__od;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__mA",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__mA=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__mA:null,_applyBlockerColor:function(g,h){this.__mA.setColor(g);
},_applyBlockerOpacity:function(i,j){this.__mA.setOpacity(i);
},block:function(){this.__mA.block();
},isBlocked:function(){return this.__mA.isBlocked();
},unblock:function(){this.__mA.unblock();
},forceUnblock:function(){this.__mA.forceUnblock();
},blockContent:function(k){this.__mA.blockContent(k);
},isContentBlocked:function(){return this.__mA.isContentBlocked();
},unblockContent:function(){this.__mA.unblockContent();
},forceUnblockContent:function(){this.__mA.forceUnblockContent();
},getBlocker:function(){return this.__mA;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var t="engine.name",s="help",r="contextmenu",q="changeGlobalCursor",p="keypress",o="Boolean",n="root",m="",l=" !important",k="input",d="_applyGlobalCursor",j="Space",h="_applyNativeHelp",c=";",b="qx.ui.root.Abstract",g="abstract",f="textarea",i="String",a="*";
qx.Class.define(b,{type:g,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
this.addListener(p,this.__qS,this);
},properties:{appearance:{refine:true,init:n},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:i,nullable:true,themeable:true,apply:d,event:q},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:o,init:false,apply:h}},members:{__qR:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Environment.select(t,{"mshtml":function(u,v){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__qR;

if(!z){this.__qR=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,a,qx.bom.element.Cursor.compile(w).replace(c,m)+l);
}}}),_applyNativeContextMenu:function(A,B){if(A){this.removeListener(r,this._onNativeContextMenu,this,true);
}else{this.addListener(r,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},__qS:function(e){if(e.getKeyIdentifier()!==j){return;
}var D=e.getTarget();
var C=qx.ui.core.FocusHandler.getInstance();

if(!C.isFocused(D)){return;
}var E=D.getContentElement().getNodeName();

if(E===k||E===f){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Environment.select(t,{"mshtml":function(F,G){if(G===false){qx.bom.Event.removeNativeListener(document,s,qx.lang.Function.returnFalse);
}
if(F===false){qx.bom.Event.addNativeListener(document,s,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__qR=null;
},defer:function(H,I){qx.ui.core.MChildrenHandling.remap(I);
}});
})();
(function(){var n="resize",m="engine.name",l="position",k="0px",j="webkit",i="paddingLeft",h="$$widget",g="qx.ui.root.Application",f="hidden",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(g,{extend:qx.ui.root.Abstract,construct:function(o){this.__cp=qx.dom.Node.getWindow(o);
this.__nz=o;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__cp,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__cp:null,__nz:null,_createContainerElement:function(){var p=this.__nz;
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
},_computeSizeHint:function(){var u=qx.bom.Viewport.getWidth(this.__cp);
var v=qx.bom.Viewport.getHeight(this.__cp);
return {minWidth:u,width:u,maxWidth:u,minHeight:v,height:v,maxHeight:v};
},_applyPadding:function(w,x,name){if(w&&(name==a||name==i)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,w,x,name);
},_applyDecorator:function(y,z){qx.ui.root.Abstract.prototype._applyDecorator.call(this,y,z);

if(!y){return;
}var A=this.getDecoratorElement().getInsets();

if(A.left||A.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__cp=this.__nz=null;
}});
})();
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="resize",f="keyup",d="keypress",c="__ki",b="backgroundColor",a="_applyOpacity",x="Boolean",w="__qj",v="opacity",u="interval",t="Tab",s="Color",r="qx.ui.root.Page",q="__mA",p="Number",o="qx.ui.core.Blocker",m="qx.ui.root.Application",n="_applyColor";
qx.Class.define(o,{extend:qx.core.Object,construct:function(y){qx.core.Object.call(this);
this._widget=y;
this._isPageRoot=(qx.Class.isDefined(r)&&y instanceof qx.ui.root.Page);

if(this._isPageRoot){y.addListener(g,this.__ql,this);
}
if(qx.Class.isDefined(m)&&y instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__qf=[];
this.__qg=[];
this.__qh=[];
},properties:{color:{check:s,init:null,nullable:true,apply:n,themeable:true},opacity:{check:p,init:1,apply:a,themeable:true},keepBlockerActive:{check:x,init:false}},members:{__mA:null,__qi:0,__qj:null,__qh:null,__qf:null,__qg:null,__qk:null,__ki:null,_isPageRoot:false,_widget:null,__ql:function(e){var z=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:z.width,height:z.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:z.width,height:z.height});
}},_applyColor:function(A,B){var C=qx.theme.manager.Color.getInstance().resolve(A);
this.__qm(b,C);
},_applyOpacity:function(D,E){this.__qm(v,D);
},__qm:function(F,G){var H=[];
this.__mA&&H.push(this.__mA);
this.__qj&&H.push(this.__qj);

for(var i=0;i<H.length;i++){H[i].setStyle(F,G);
}},_backupActiveWidget:function(){var I=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__qf.push(I.getActive());
this.__qg.push(I.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var L=this.__qf.length;

if(L>0){var K=this.__qf[L-1];

if(K){qx.bom.Element.activate(K);
}this.__qf.pop();
}var J=this.__qg.length;

if(J>0){var K=this.__qg[J-1];

if(K){qx.bom.Element.focus(this.__qg[J-1]);
}this.__qg.pop();
}},__qn:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__mA){this.__mA=this.__qn();
this.__mA.setStyle(l,15);
this._widget.getContainerElement().add(this.__mA);
this.__mA.exclude();
}return this.__mA;
},block:function(){this.__qi++;

if(this.__qi<2){this._backupActiveWidget();
var M=this.getBlockerElement();
M.include();
M.activate();
M.addListener(h,this.__qs,this);
M.addListener(d,this.__qr,this);
M.addListener(j,this.__qr,this);
M.addListener(f,this.__qr,this);
}},isBlocked:function(){return this.__qi>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__qi--;

if(this.__qi<1){this.__qo();
this.__qi=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__qi=0;
this.__qo();
},__qo:function(){this._restoreActiveWidget();
var N=this.getBlockerElement();
N.removeListener(h,this.__qs,this);
N.removeListener(d,this.__qr,this);
N.removeListener(j,this.__qr,this);
N.removeListener(f,this.__qr,this);
N.exclude();
},getContentBlockerElement:function(){if(!this.__qj){this.__qj=this.__qn();
this._widget.getContentElement().add(this.__qj);
this.__qj.exclude();
}return this.__qj;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(l,O);
this.__qh.push(O);

if(this.__qh.length<2){P.include();

if(this._isPageRoot){if(!this.__ki){this.__ki=new qx.event.Timer(300);
this.__ki.addListener(u,this.__qq,this);
}this.__ki.start();
this.__qq();
}}},isContentBlocked:function(){return this.__qh.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__qh.pop();
var Q=this.__qh[this.__qh.length-1];
var R=this.getContentBlockerElement();
R.setStyle(l,Q);

if(this.__qh.length<1){this.__qp();
this.__qh=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__qh=[];
var S=this.getContentBlockerElement();
S.setStyle(l,null);
this.__qp();
},__qp:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__ki.stop();
}},__qq:function(){var T=this._widget.getContainerElement().getDomElement();
var U=qx.dom.Node.getDocument(T);
this.getContentBlockerElement().setStyles({height:U.documentElement.scrollHeight+k,width:U.documentElement.scrollWidth+k});
},__qr:function(e){if(e.getKeyIdentifier()==t){e.stop();
}},__qs:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(g,this.__ql,this);
}this._disposeObjects(w,q,c);
this.__qk=this.__qf=this.__qg=this._widget=this.__qh=null;
}});
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
this.addListener(t,this.__nk,this);
this.addListener(n,this.__nk,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__nk:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var k="keypress",j="focusout",h="activate",g="Tab",f="singleton",d="__dw",c="deactivate",b="focusin",a="qx.ui.core.FocusHandler";
qx.Class.define(a,{extend:qx.core.Object,type:f,construct:function(){qx.core.Object.call(this);
this.__dw={};
},members:{__dw:null,__dx:null,__dy:null,__dz:null,connectTo:function(m){m.addListener(k,this.__dA,this);
m.addListener(b,this._onFocusIn,this,true);
m.addListener(j,this._onFocusOut,this,true);
m.addListener(h,this._onActivate,this,true);
m.addListener(c,this._onDeactivate,this,true);
},addRoot:function(n){this.__dw[n.$$hash]=n;
},removeRoot:function(o){delete this.__dw[o.$$hash];
},getActiveWidget:function(){return this.__dx;
},isActive:function(p){return this.__dx==p;
},getFocusedWidget:function(){return this.__dy;
},isFocused:function(q){return this.__dy==q;
},isFocusRoot:function(r){return !!this.__dw[r.$$hash];
},_onActivate:function(e){var t=e.getTarget();
this.__dx=t;
var s=this.__dB(t);

if(s!=this.__dz){this.__dz=s;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__dx==u){this.__dx=null;
}},_onFocusIn:function(e){var v=e.getTarget();

if(v!=this.__dy){this.__dy=v;
v.visualizeFocus();
}},_onFocusOut:function(e){var w=e.getTarget();

if(w==this.__dy){this.__dy=null;
w.visualizeBlur();
}},__dA:function(e){if(e.getKeyIdentifier()!=g){return;
}
if(!this.__dz){return;
}e.stopPropagation();
e.preventDefault();
var x=this.__dy;

if(!e.isShiftPressed()){var y=x?this.__dF(x):this.__dD();
}else{var y=x?this.__dG(x):this.__dE();
}if(y){y.tabFocus();
}},__dB:function(z){var A=this.__dw;

while(z){if(A[z.$$hash]){return z;
}z=z.getLayoutParent();
}return null;
},__dC:function(B,C){if(B===C){return 0;
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
},__dD:function(){return this.__dJ(this.__dz,null);
},__dE:function(){return this.__dK(this.__dz,null);
},__dF:function(M){var N=this.__dz;

if(N==M){return this.__dD();
}
while(M&&M.getAnonymous()){M=M.getLayoutParent();
}
if(M==null){return [];
}var O=[];
this.__dH(N,M,O);
O.sort(this.__dC);
var P=O.length;
return P>0?O[0]:this.__dD();
},__dG:function(Q){var R=this.__dz;

if(R==Q){return this.__dE();
}
while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();
}
if(Q==null){return [];
}var S=[];
this.__dI(R,Q,S);
S.sort(this.__dC);
var T=S.length;
return T>0?S[T-1]:this.__dE();
},__dH:function(parent,U,V){var W=parent.getLayoutChildren();
var X;

for(var i=0,l=W.length;i<l;i++){X=W[i];
if(!(X instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__dC(U,X)<0){V.push(X);
}this.__dH(X,U,V);
}}},__dI:function(parent,Y,ba){var bb=parent.getLayoutChildren();
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
if(!(bc instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__dC(Y,bc)>0){ba.push(bc);
}this.__dI(bc,Y,ba);
}}},__dJ:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__dC(bf,bd)<0){bd=bf;
}}bd=this.__dJ(bf,bd);
}}return bd;
},__dK:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__dC(bi,bg)>0){bg=bi;
}}bg=this.__dK(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(d);
this.__dy=this.__dx=this.__dz=null;
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
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Environment.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var k="scrollbar-y",j="scrollbar-x",i="pane",h="auto",g="corner",f="scrollbar-",d="on",c="_computeScrollbars",b="getDocument",a="changeVisibility",E="off",D="x",C="scroll",B="touchmove",A="scrollY",z="Left",y="mousewheel",x="scrollbarX",w="event.touch",v="scrollarea",r="y",s="vertical",p="scrollX",q="touchstart",n="horizontal",o="qx.ui.core.scroll.AbstractScrollArea",l="abstract",m="update",t="scrollbarY",u="Top";
qx.Class.define(o,{extend:qx.ui.core.Widget,include:[qx.ui.core.scroll.MScrollBarFactory,qx.ui.core.scroll.MWheelHandling],type:l,construct:function(){qx.ui.core.Widget.call(this);
var F=new qx.ui.layout.Grid();
F.setColumnFlex(0,1);
F.setRowFlex(0,1);
this._setLayout(F);
this.addListener(y,this._onMouseWheel,this);
if(qx.core.Environment.get(w)){this.addListener(B,this._onTouchMove,this);
this.addListener(q,function(){this.__hT={"x":0,"y":0};
},this);
this.__hT={};
this.__rc={};
}},properties:{appearance:{refine:true,init:v},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[h,d,E],init:h,themeable:true,apply:c},scrollbarY:{check:[h,d,E],init:h,themeable:true,apply:c},scrollbar:{group:[x,t]}},members:{__hT:null,__rc:null,_createChildControlImpl:function(G,H){var I;

switch(G){case i:I=new qx.ui.core.scroll.ScrollPane();
I.addListener(m,this._computeScrollbars,this);
I.addListener(p,this._onScrollPaneX,this);
I.addListener(A,this._onScrollPaneY,this);
this._add(I,{row:0,column:0});
break;
case j:I=this._createScrollBar(n);
I.setMinWidth(0);
I.exclude();
I.addListener(C,this._onScrollBarX,this);
I.addListener(a,this._onChangeScrollbarXVisibility,this);
this._add(I,{row:1,column:0});
break;
case k:I=this._createScrollBar(s);
I.setMinHeight(0);
I.exclude();
I.addListener(C,this._onScrollBarY,this);
I.addListener(a,this._onChangeScrollbarYVisibility,this);
this._add(I,{row:0,column:1});
break;
case g:I=new qx.ui.core.Widget();
I.setWidth(0);
I.setHeight(0);
I.exclude();
this._add(I,{row:1,column:1});
break;
}return I||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,G);
},getPaneSize:function(){return this.getChildControl(i).getInnerSize();
},getItemTop:function(J){return this.getChildControl(i).getItemTop(J);
},getItemBottom:function(K){return this.getChildControl(i).getItemBottom(K);
},getItemLeft:function(L){return this.getChildControl(i).getItemLeft(L);
},getItemRight:function(M){return this.getChildControl(i).getItemRight(M);
},scrollToX:function(N){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollTo(N);
},scrollByX:function(O){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollBy(O);
},getScrollX:function(){var P=this.getChildControl(j,true);
return P?P.getPosition():0;
},scrollToY:function(Q){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollTo(Q);
},scrollByY:function(R){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollBy(R);
},getScrollY:function(){var S=this.getChildControl(k,true);
return S?S.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(i).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(i).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onTouchMove:function(e){this._onTouchMoveDirectional(D,e);
this._onTouchMoveDirectional(r,e);
e.stop();
},_onTouchMoveDirectional:function(T,e){var U=(T==D?z:u);
var W=this.getChildControl(f+T,true);
var X=this._isChildControlVisible(f+T);

if(X&&W){if(this.__hT[T]==0){var V=0;
}else{var V=-(e[b+U]()-this.__hT[T]);
}this.__hT[T]=e[b+U]();
W.scrollBy(V);
if(this.__rc[T]){clearTimeout(this.__rc[T]);
this.__rc[T]=null;
}this.__rc[T]=setTimeout(qx.lang.Function.bind(function(Y){this.__rd(Y,T);
},this,V),100);
}},__rd:function(ba,bb){this.__rc[bb]=null;
var bd=this._isChildControlVisible(f+bb);

if(ba==0||!bd){return;
}if(ba>0){ba=Math.max(0,ba-3);
}else{ba=Math.min(0,ba+3);
}this.__rc[bb]=setTimeout(qx.lang.Function.bind(function(be,bf){this.__rd(be,bf);
},this,ba,bb),20);
var bc=this.getChildControl(f+bb,true);
bc.scrollBy(ba);
},_onChangeScrollbarXVisibility:function(e){var bg=this._isChildControlVisible(j);
var bh=this._isChildControlVisible(k);

if(!bg){this.scrollToX(0);
}bg&&bh?this._showChildControl(g):this._excludeChildControl(g);
},_onChangeScrollbarYVisibility:function(e){var bi=this._isChildControlVisible(j);
var bj=this._isChildControlVisible(k);

if(!bj){this.scrollToY(0);
}bi&&bj?this._showChildControl(g):this._excludeChildControl(g);
},_computeScrollbars:function(){var bq=this.getChildControl(i);
var content=bq.getChildren()[0];

if(!content){this._excludeChildControl(j);
this._excludeChildControl(k);
return;
}var bk=this.getInnerSize();
var bp=bq.getInnerSize();
var bn=bq.getScrollSize();
if(!bp||!bn){return;
}var br=this.getScrollbarX();
var bs=this.getScrollbarY();

if(br===h&&bs===h){var bo=bn.width>bk.width;
var bt=bn.height>bk.height;
if((bo||bt)&&!(bo&&bt)){if(bo){bt=bn.height>bp.height;
}else if(bt){bo=bn.width>bp.width;
}}}else{var bo=br===d;
var bt=bs===d;
if(bn.width>(bo?bp.width:bk.width)&&br===h){bo=true;
}
if(bn.height>(bo?bp.height:bk.height)&&bs===h){bt=true;
}}if(bo){var bm=this.getChildControl(j);
bm.show();
bm.setMaximum(Math.max(0,bn.width-bp.width));
bm.setKnobFactor((bn.width===0)?0:bp.width/bn.width);
}else{this._excludeChildControl(j);
}
if(bt){var bl=this.getChildControl(k);
bl.show();
bl.setMaximum(Math.max(0,bn.height-bp.height));
bl.setKnobFactor((bn.height===0)?0:bp.height/bn.height);
}else{this._excludeChildControl(k);
}}}});
})();
(function(){var f="pane",d="scrollY",c="qx.ui.virtual.core.Scroller",b="update",a="scrollX";
qx.Class.define(c,{extend:qx.ui.core.scroll.AbstractScrollArea,construct:function(g,h,i,j){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__AX=new qx.ui.virtual.core.Pane(g,h,i,j);
this.__AX.addListener(b,this._computeScrollbars,this);
this.__AX.addListener(a,this._onScrollPaneX,this);
this.__AX.addListener(d,this._onScrollPaneY,this);
this._add(this.__AX,{row:0,column:0});
},properties:{width:{refine:true,init:null},height:{refine:true,init:null}},members:{__AX:null,getPane:function(){return this.__AX;
},_createChildControlImpl:function(k,l){if(k==f){return this.__AX;
}else{return qx.ui.core.scroll.AbstractScrollArea.prototype._createChildControlImpl.call(this,k);
}},getItemTop:function(m){throw new Error("The method 'getItemTop' is not implemented!");
},getItemBottom:function(n){throw new Error("The method 'getItemBottom' is not implemented!");
},getItemLeft:function(o){throw new Error("The method 'getItemLeft' is not implemented!");
},getItemRight:function(p){throw new Error("The method 'getItemRight' is not implemented!");
},_onScrollBarX:function(e){this.__AX.setScrollX(e.getData());
},_onScrollBarY:function(e){this.__AX.setScrollY(e.getData());
}},destruct:function(){this.__AX.dispose();
this.__AX=null;
}});
})();
(function(){var l="row-layer",k="selected",j="grid-lines",h="Boolean",g="Integer",f="cell.row",d="cell.renderer",c="_applyDelegate",b="__x",a="qx.ui.virtual.form.List",A="Object",z="_applyCellRenderer",y="changeRowHeight",x="_applyRowCount",w="changeCellRenderer",v="_applyShowGridLines",u="resize",t="changeShowGridLines",s="changeDelegate",r="_applyUseWidgetCells",p="changeRowCount",q="_applyRowHeight",n="__FE",o="horizontal",m="virtual-list";
qx.Class.define(a,{extend:qx.ui.virtual.core.Scroller,construct:function(){qx.ui.virtual.core.Scroller.call(this,0,1,20,100);
qx.ui.core.queue.Widget.add(this);
this.getPane().addListener(u,this._onResize,this);
this._initSelectionManager();
this.initRowHeight();
this.initDelegate();
},properties:{appearance:{refine:true,init:m},rowCount:{check:g,event:p,init:0,apply:x},rowHeight:{check:g,event:y,init:20,apply:q,themeable:true},showGridLines:{check:h,event:t,init:false,apply:v,themeable:true},useWidgetCells:{check:h,init:false,apply:r,themeable:true},cellRenderer:{event:w,apply:z,themeable:true},delegate:{check:A,event:s,init:null,nullable:true,apply:c}},members:{__FD:null,__x:null,__FE:null,__FF:null,_initWidgetLayer:function(){var self=this;
var B={getCellWidget:function(C,D){var H=self._getCellData(C);

if(!H){return null;
}var E={};

if(self.__x.isItemSelected(C)){E.selected=true;
}var F=self._getCellRenderer(C);
var G=F.getCellWidget(H,E);
G.setUserData(f,C);
G.setUserData(d,F);
return G;
},poolCellWidget:function(I){var J=I.getUserData(d);
J.pool(I);
}};
this._showChildControl(l);
this.__FE=new qx.ui.virtual.layer.WidgetCell(B);
this.getPane().addLayer(this.__FE);

if(!this.__FD){this.setCellRenderer(qx.ui.virtual.form.ListItemCell.getInstance());
}},_initHtmlLayer:function(){var self=this;
var K={getCellProperties:function(L,M){var N={};

if(self.__x.isItemSelected(L)){N.selected=true;
}return self._getCellRenderer(L).getCellProperties(self._getCellData(L),N);
}};
this._showChildControl(l);
this.__FE=new qx.ui.virtual.layer.HtmlCell(K);
this.getPane().addLayer(this.__FE);

if(!this.__FD){this.setCellRenderer(new qx.ui.virtual.cell.Cell());
}},_initSelectionManager:function(){var self=this;
var O={isItemSelectable:function(P){return self._delegate.isRowSelectable?self._delegate.isRowSelectable(P):true;
},styleSelectable:function(Q,R,S){if(self.__FF){self._styleWidgetSelectable(Q,R,S);
}else{self._styleHtmlSelectable(Q,R,S);
}}};
this.__x=new qx.ui.virtual.selection.Row(this.getPane(),O);
this.__x.attachMouseEvents(this.getPane());
this.__x.attachKeyEvents(this);
},getSelectionManager:function(){return this.__x;
},_createChildControlImpl:function(T,U){var V;

switch(T){case l:V=new qx.ui.virtual.layer.Row(null,null);
this.getPane().addLayer(V);
break;
case j:V=new qx.ui.virtual.layer.GridLines(o);
this.getPane().addLayer(V);
break;
}return V||qx.ui.virtual.core.Scroller.prototype._createChildControlImpl.call(this,T);
},update:function(){if(this.__FE){this.__FE.updateLayerData();
}},_applyRowCount:function(W,X){this.getPane().getRowConfig().setItemCount(W);
},_applyRowHeight:function(Y,ba){this.getPane().getRowConfig().setDefaultItemSize(Y);
},_applyShowGridLines:function(bb,bc){if(bb){this._showChildControl(j);
}else{this._excludeChildControl(j);
}},_applyDelegate:function(bd,be){this._delegate=bd||{};
},_applyUseWidgetCells:function(bf,bg){if(this.__FF!==null){throw new Error("The property 'useWidgetCells' cannot be set after the list has "+"been rendered.");
}},_applyCellRenderer:function(bh,bi){this.__FD=bh;

if(this.__FE){this.__FE.fullUpdate();
}},_getCellData:function(bj){return this._delegate.getCellData?this._delegate.getCellData(bj):null;
},_getCellRenderer:function(bk){return this._delegate.getCellRenderer?this._delegate.getCellRenderer(bk):this.__FD;
},_styleHtmlSelectable:function(bl,bm,bn){if(bm!==k){return;
}var bo=this.getChildControl(l);

if(bn){bo.setBackground(bl,k);
}else{bo.setBackground(bl,null);
}this.__FE.updateLayerData();
},_styleWidgetSelectable:function(bp,bq,br){if(bq!==k){return;
}var bs=this.__FE.getChildren();

for(var i=0;i<bs.length;i++){var bt=bs[i];
var bv=bt.getUserData(f);

if(bp!==bv){continue;
}
if(this.getPane().isUpdatePending()){continue;
}var bu=this._getCellRenderer(bp);

if(br){bu.updateStates(bt,{selected:1});
}else{bu.updateStates(bt,{});
}}},syncWidget:function(){if(this.__FF!==null){return;
}this.__FF=this.getUseWidgetCells();

if(this.__FF){this._initWidgetLayer();
}else{this._initHtmlLayer();
}},_onResize:function(e){this.getPane().getColumnConfig().setItemSize(0,e.getData().width);
}},destruct:function(){this._delegate=this.__FD=null;
this._disposeObjects(b,n);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="0",d="engine.name",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",z="PositiveNumber",y="Integer",x="mousemove",w="_applyMaximum",v="__qt",u="_applyOrientation",t="appear",s="opera",r="PositiveInteger",q="mshtml",o="mouseup",p="Number",m="_applyPosition",n="scrollbar",l="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this.addState(l);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if((qx.core.Environment.get(d)==s)){this.addListener(t,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[k,h],init:k,apply:u},maximum:{check:r,apply:w,init:100},position:{check:p,init:0,apply:m,event:i},singleStep:{check:y,init:20},knobFactor:{check:z,nullable:true}},members:{__mx:null,__qt:null,_getScrollPaneElement:function(){if(!this.__qt){this.__qt=new qx.html.Element();
}return this.__qt;
},renderLayout:function(B,top,C,D){var E=qx.ui.core.Widget.prototype.renderLayout.call(this,B,top,C,D);
this._updateScrollBar();
return E;
},_getContentHint:function(){var F=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__mx?100:F,maxWidth:this.__mx?null:F,minWidth:this.__mx?null:F,height:this.__mx?F:100,maxHeight:this.__mx?F:null,minHeight:this.__mx?F:null};
},_applyEnabled:function(G,H){qx.ui.core.Widget.prototype._applyEnabled.call(this,G,H);
this._updateScrollBar();
},_applyMaximum:function(I){this._updateScrollBar();
},_applyPosition:function(J){var content=this.getContentElement();

if(this.__mx){content.scrollToX(J);
}else{content.scrollToY(J);
}},_applyOrientation:function(K,L){var M=this.__mx=K===k;
this.set({allowGrowX:M,allowShrinkX:M,allowGrowY:!M,allowShrinkY:!M});

if(M){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:M?i:c,overflowY:M?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var O=this.__mx;
var P=this.getBounds();

if(!P){return;
}
if(this.isEnabled()){var Q=O?P.width:P.height;
var N=this.getMaximum()+Q;
}else{N=0;
}if((qx.core.Environment.get(d)==q)){var P=this.getBounds();
this.getContentElement().setStyles({left:O?f:g,top:O?g:f,width:(O?P.width:P.width+1)+j,height:(O?P.height+1:P.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(O?N:1)+j,height:(O?1:N)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(R){this.setPosition(Math.max(0,Math.min(this.getMaximum(),R)));
},scrollBy:function(S){this.scrollTo(this.getPosition()+S);
},scrollBySteps:function(T){var U=this.getSingleStep();
this.scrollBy(T*U);
},_onScroll:function(e){var W=this.getContentElement();
var V=this.__mx?W.getScrollX():W.getScrollY();
this.setPosition(V);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(v);
}});
})();
(function(){var k="slider",j="horizontal",i="button-begin",h="vertical",g="button-end",f="Integer",d="execute",c="right",b="left",a="down",z="up",y="PositiveNumber",x="changeValue",w="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",v="_applyKnobFactor",u="knob",t="qx.ui.core.scroll.ScrollBar",s="resize",r="_applyOrientation",q="_applyPageStep",o="PositiveInteger",p="scroll",m="_applyPosition",n="scrollbar",l="_applyMaximum";
qx.Class.define(t,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this._createChildControl(i);
this._createChildControl(k).addListener(s,this._onResizeSlider,this);
this._createChildControl(g);
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[j,h],init:j,apply:r},maximum:{check:o,apply:l,init:100},position:{check:w,init:0,apply:m,event:p},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:q},knobFactor:{check:y,apply:v,nullable:true}},members:{__Aa:2,_createChildControlImpl:function(B,C){var D;

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

if(this.getOrientation()==h){if(R.height<S.minHeight+this.__Aa){Q=true;
}}else{if(R.width<S.minWidth+this.__Aa){Q=true;
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
(function(){var l="qx.dynlocale",k="Boolean",j="changeLocale",i="changeInvalidMessage",h="String",g="invalid",f="",d="qx.ui.form.MForm",c="_applyValid",b="changeRequired",a="changeValid";
qx.Mixin.define(d,{construct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().addListener(j,this.__hb,this);
}},properties:{valid:{check:k,init:true,apply:c,event:a},required:{check:k,init:false,event:b},invalidMessage:{check:h,init:f,event:i},requiredInvalidMessage:{check:h,nullable:true,event:i}},members:{_applyValid:function(m,n){m?this.removeState(g):this.addState(g);
},__hb:qx.core.Environment.select(l,{"true":function(e){var o=this.getInvalidMessage();

if(o&&o.translate){this.setInvalidMessage(o.translate());
}var p=this.getRequiredInvalidMessage();

if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());
}},"false":null})},destruct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().removeListener(j,this.__hb,this);
}}});
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
}},events:{changeValue:O},properties:{appearance:{refine:true,init:T},focusable:{refine:true,init:true},orientation:{check:[j,i],init:j,apply:K},value:{check:w,init:0,apply:m,nullable:true},minimum:{check:h,init:0,apply:M,event:t},maximum:{check:h,init:100,apply:F,event:J},singleStep:{check:h,init:1},pageStep:{check:h,init:10},knobFactor:{check:H,apply:u,nullable:true}},members:{__Ab:null,__Ac:null,__Ad:null,__Ae:null,__Af:null,__Ag:null,__Ah:null,__Ai:null,__ki:null,__Aj:null,__Ak:null,__Al:null,_forwardStates:{invalid:true},_createChildControlImpl:function(ba,bb){var bc;

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
},_onMouseDown:function(e){if(this.__Ae){return;
}var bk=this.__mx;
var bi=this.getChildControl(k);
var bj=bk?f:d;
var bm=bk?e.getDocumentLeft():e.getDocumentTop();
var bn=this.__Ab=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bj];
var bl=this.__Ac=qx.bom.element.Location.get(bi.getContainerElement().getDomElement())[bj];

if(e.getTarget()===bi){this.__Ae=true;

if(!this.__Aj){this.__Aj=new qx.event.Timer(100);
this.__Aj.addListener(W,this._fireValue,this);
}this.__Aj.start();
this.__Af=bm+bn-bl;
bi.addState(b);
}else{this.__Ag=true;
this.__Ah=bm<=bl?-1:1;
this.__An(e);
this._onInterval();
if(!this.__ki){this.__ki=new qx.event.Timer(100);
this.__ki.addListener(W,this._onInterval,this);
}this.__ki.start();
}this.addListener(V,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__Ae){this.releaseCapture();
delete this.__Ae;
this.__Aj.stop();
this._fireValue();
delete this.__Af;
this.getChildControl(k).removeState(b);
if(e.getType()===c){var bp;
var bq;
var bo;

if(this.__mx){bp=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__Ab);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[d];
bq=e.getDocumentTop()-(bo+this.getChildControl(k).getBounds().top);
}else{bp=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__Ab);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[f];
bq=e.getDocumentLeft()-(bo+this.getChildControl(k).getBounds().left);
}
if(bq<0||bq>this.__Ad||bp<0||bp>this.__Ad){this.getChildControl(k).removeState(g);
}}}else if(this.__Ag){this.__ki.stop();
this.releaseCapture();
delete this.__Ag;
delete this.__Ah;
delete this.__Ai;
}this.removeListener(V,this._onMouseMove);
if(e.getType()===c){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__Ae){var bs=this.__mx?e.getDocumentLeft():e.getDocumentTop();
var br=bs-this.__Af;
this.slideTo(this._positionToValue(br));
}else if(this.__Ag){this.__An(e);
}e.stopPropagation();
},_onInterval:function(e){var bt=this.getValue()+(this.__Ah*this.getPageStep());
if(bt<this.getMinimum()){bt=this.getMinimum();
}else if(bt>this.getMaximum()){bt=this.getMaximum();
}var bu=this.__Ah==-1;

if((bu&&bt<=this.__Ai)||(!bu&&bt>=this.__Ai)){bt=this.__Ai;
}this.slideTo(bt);
},_onUpdate:function(e){var bw=this.getInnerSize();
var bx=this.getChildControl(k).getBounds();
var bv=this.__mx?E:C;
this._updateKnobSize();
this.__Am=bw[bv]-bx[bv];
this.__Ad=bx[bv];
this._updateKnobPosition();
},__mx:false,__Am:0,__An:function(e){var by=this.__mx;
var bF=by?e.getDocumentLeft():e.getDocumentTop();
var bH=this.__Ab;
var bz=this.__Ac;
var bJ=this.__Ad;
var bG=bF-bH;

if(bF>=bz){bG-=bJ;
}var bD=this._positionToValue(bG);
var bA=this.getMinimum();
var bB=this.getMaximum();

if(bD<bA){bD=bA;
}else if(bD>bB){bD=bB;
}else{var bE=this.getValue();
var bC=this.getPageStep();
var bI=this.__Ah<0?N:z;
bD=bE+(Math[bI]((bD-bE)/bC)*bC);
}if(this.__Ai==null||(this.__Ah==-1&&bD<=this.__Ai)||(this.__Ah==1&&bD>=this.__Ai)){this.__Ai=bD;
}},_positionToValue:function(bK){var bL=this.__Am;
if(bL==null||bL==0){return 0;
}var bN=bK/bL;

if(bN<0){bN=0;
}else if(bN>1){bN=1;
}var bM=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bM*bN);
},_valueToPosition:function(bO){var bP=this.__Am;

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

if(this.__mx){bT.setStyle(f,bS+a,true);
}else{bT.setStyle(d,bS+a,true);
}},_updateKnobSize:function(){var bV=this.getKnobFactor();

if(bV==null){return;
}var bU=this.getInnerSize();

if(bU==null){return;
}if(this.__mx){this.getChildControl(k).setWidth(Math.round(bV*bU.width));
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
this.__mx=bY===j;
if(this.__mx){this.removeState(i);
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
}else{if(this.__mx){this.getChildControl(k).resetWidth();
}else{this.getChildControl(k).resetHeight();
}}},_applyValue:function(ce,cf){if(ce!=null){this._updateKnobPosition();

if(this.__Ae){this.__Al=[ce,cf];
}else{this.fireEvent(X,qx.event.type.Data,[ce,cf]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__Al){return;
}var cg=this.__Al;
this.__Al=null;
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
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__dU:null,__dV:false,__dW:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__dV){this.__dV=false;
}else{this.__dV=true;
o.execute(this);
}}this.fireEvent(n);
},__dX:function(e){if(this.__dV){this.__dV=false;
return;
}this.__dV=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__dW);
}
if(p!=null){this.__dW=p.addListener(n,this.__dX,this);
}var t=this.__dU;

if(t==null){this.__dU=t={};
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
this.__dU=null;
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="__ki",d="qx.ui.form.RepeatButton",a="release",c="interval",b="execute";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__ki=new qx.event.AcceleratingTimer();
this.__ki.addListener(c,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__oa:null,__ki:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__ob();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__oa){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__oc();
},_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);

if(!r){this.removeState(n);
this.removeState(m);
this.__oc();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__ki.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__ki.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__ob();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__oa){this.execute();
}}this.__oc();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__oa){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__oc();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__ob();
}},_onInterval:function(e){this.__oa=true;
this.fireEvent(b);
},__ob:function(){this.fireEvent(g);
this.__oa=false;
this.__ki.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__oc:function(){this.fireEvent(a);
this.__ki.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var e="Integer",d="interval",c="__ki",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ki=new qx.event.Timer(this.getInterval());
this.__ki.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__ki:null,__oB:null,start:function(){this.__ki.setInterval(this.getFirstInterval());
this.__ki.start();
},stop:function(){this.__ki.stop();
this.__oB=null;
},_onInterval:function(){this.__ki.stop();

if(this.__oB==null){this.__oB=this.getInterval();
}this.__oB=Math.max(this.getMinimum(),this.__oB-this.getDecrease());
this.__ki.setInterval(this.__oB);
this.__ki.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var s="_applyLayoutChange",r="left",q="width",p="center",o="top",n="Decorator",m="middle",k="_applyReversed",j="qx.debug",h="bottom",c="' is not supported by the HBox layout!",g="Boolean",f="flex",b="right",a="Integer",e="The property '",d="qx.ui.layout.HBox";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);

if(t){this.setSpacing(t);
}
if(u){this.setAlignX(u);
}
if(v){this.setSeparator(v);
}},properties:{alignX:{check:[r,p,b],init:r,apply:s},alignY:{check:[o,m,h],init:o,apply:s},spacing:{check:a,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:g,init:false,apply:k}},members:{__lH:null,__ju:null,__jv:null,__iL:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jw:function(){var B=this._getLayoutChildren();
var length=B.length;
var y=false;
var w=this.__lH&&this.__lH.length!=length&&this.__ju&&this.__lH;
var z;
var x=w?this.__lH:new Array(length);
var A=w?this.__ju:new Array(length);
if(this.getReversed()){B=B.concat().reverse();
}for(var i=0;i<length;i++){z=B[i].getLayoutProperties();

if(z.width!=null){x[i]=parseFloat(z.width)/100;
}
if(z.flex!=null){A[i]=z.flex;
y=true;
}else{A[i]=0;
}}if(!w){this.__lH=x;
this.__ju=A;
}this.__jv=y;
this.__iL=B;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Environment.select(j,{"true":function(C,name,D){this.assert(name===f||name===q,e+name+c);

if(name==q){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(D);
this.assert(D>=0);
}},"false":null}),renderLayout:function(E,F){if(this._invalidChildrenCache){this.__jw();
}var L=this.__iL;
var length=L.length;
var U=qx.ui.layout.Util;
var T=this.getSpacing();
var X=this.getSeparator();

if(X){var I=U.computeHorizontalSeparatorGaps(L,T,X);
}else{var I=U.computeHorizontalGaps(L,T,true);
}var i,G,R,Q;
var W=[];
var M=I;

for(i=0;i<length;i+=1){Q=this.__lH[i];
R=Q!=null?Math.floor((E-I)*Q):L[i].getSizeHint().width;
W.push(R);
M+=R;
}if(this.__jv&&M!=E){var O={};
var S,V;

for(i=0;i<length;i+=1){S=this.__ju[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jw();
}var bj=qx.ui.layout.Util;
var br=this.__iL;
var bd=0,bk=0,bh=0;
var bg=0,bi=0;
var bo,be,bq;
for(var i=0,l=br.length;i<l;i+=1){bo=br[i];
be=bo.getSizeHint();
bk+=be.width;
var bn=this.__ju[i];
var bf=this.__lH[i];

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
}},destruct:function(){this.__lH=this.__ju=this.__iL=null;
}});
})();
(function(){var s="_applyLayoutChange",r="top",q="left",p="height",o="middle",n="Decorator",m="center",k="_applyReversed",j="qx.debug",h="bottom",c="' is not supported by the VBox layout!",g="qx.ui.layout.VBox",f="flex",b="Integer",a="The property '",e="right",d="Boolean";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);

if(t){this.setSpacing(t);
}
if(u){this.setAlignY(u);
}
if(v){this.setSeparator(v);
}},properties:{alignY:{check:[r,o,h],init:r,apply:s},alignX:{check:[q,m,e],init:q,apply:s},spacing:{check:b,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:d,init:false,apply:k}},members:{__jt:null,__ju:null,__jv:null,__iL:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jw:function(){var B=this._getLayoutChildren();
var length=B.length;
var x=false;
var w=this.__jt&&this.__jt.length!=length&&this.__ju&&this.__jt;
var z;
var y=w?this.__jt:new Array(length);
var A=w?this.__ju:new Array(length);
if(this.getReversed()){B=B.concat().reverse();
}for(var i=0;i<length;i++){z=B[i].getLayoutProperties();

if(z.height!=null){y[i]=parseFloat(z.height)/100;
}
if(z.flex!=null){A[i]=z.flex;
x=true;
}else{A[i]=0;
}}if(!w){this.__jt=y;
this.__ju=A;
}this.__jv=x;
this.__iL=B;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Environment.select(j,{"true":function(C,name,D){this.assert(name===f||name===p,a+name+c);

if(name==p){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(D);
this.assert(D>=0);
}},"false":null}),renderLayout:function(E,F){if(this._invalidChildrenCache){this.__jw();
}var M=this.__iL;
var length=M.length;
var W=qx.ui.layout.Util;
var V=this.getSpacing();
var ba=this.getSeparator();

if(ba){var J=W.computeVerticalSeparatorGaps(M,V,ba);
}else{var J=W.computeVerticalGaps(M,V,true);
}var i,H,I,Q;
var R=[];
var X=J;

for(i=0;i<length;i+=1){Q=this.__jt[i];
I=Q!=null?Math.floor((F-J)*Q):M[i].getSizeHint().height;
R.push(I);
X+=I;
}if(this.__jv&&X!=F){var O={};
var U,Y;

for(i=0;i<length;i+=1){U=this.__ju[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jw();
}var bj=qx.ui.layout.Util;
var br=this.__iL;
var bf=0,bi=0,bh=0;
var bd=0,bk=0;
var bo,be,bq;
for(var i=0,l=br.length;i<l;i+=1){bo=br[i];
be=bo.getSizeHint();
bi+=be.height;
var bn=this.__ju[i];
var bg=this.__jt[i];

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
}},destruct:function(){this.__jt=this.__ju=this.__iL=null;
}});
})();
(function(){var n="top",m="left",h="qx.debug",g="bottom",f="hAlign",e="vAlign",d="Integer",c="_applyLayoutChange",b="center",a="middle",D="right",C="flex",B="height",A="' is not supported by the Grid layout!",z="Invalid parameter 'column'",w="The property '",v="Value must be positive",u="qx.ui.layout.Grid",t="maxHeight",s="width",q="minHeight",r="minWidth",o="maxWidth",p="Invalid parameter 'row'";
qx.Class.define(u,{extend:qx.ui.layout.Abstract,construct:function(E,F){qx.ui.layout.Abstract.call(this);
this.__hk=[];
this.__hl=[];

if(E){this.setSpacingX(E);
}
if(F){this.setSpacingY(F);
}},properties:{spacingX:{check:d,init:0,apply:c},spacingY:{check:d,init:0,apply:c}},members:{__hm:null,__hk:null,__hl:null,__hn:null,__ho:null,__hp:null,__hq:null,__hr:null,__hs:null,verifyLayoutProperty:qx.core.Environment.select(h,{"true":function(G,name,H){var I={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(I[name]==1,w+name+A);
this.assertInteger(H);
this.assert(H>=0,v);
},"false":null}),__ht:function(){var O=[];
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
}}this.__hm=O;
this.__hn=N;
this.__ho=P;
this.__hp=L;
this.__hq=K;
this.__hr=null;
this.__hs=null;
delete this._invalidChildrenCache;
},_setRowData:function(T,U,V){var W=this.__hk[T];

if(!W){this.__hk[T]={};
this.__hk[T][U]=V;
}else{W[U]=V;
}},_setColumnData:function(X,Y,ba){var bb=this.__hl[X];

if(!bb){this.__hl[X]={};
this.__hl[X][Y]=ba;
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
},getColumnAlign:function(bg){var bh=this.__hl[bg]||{};
return {vAlign:bh.vAlign||n,hAlign:bh.hAlign||m};
},setRowAlign:function(bi,bj,bk){if(qx.core.Environment.get(h)){this.assertInteger(bi,p);
this.assertInArray(bj,[m,b,D]);
this.assertInArray(bk,[n,a,g]);
}this._setRowData(bi,f,bj);
this._setRowData(bi,e,bk);
this._applyLayoutChange();
return this;
},getRowAlign:function(bl){var bm=this.__hk[bl]||{};
return {vAlign:bm.vAlign||n,hAlign:bm.hAlign||m};
},getCellWidget:function(bn,bo){if(this._invalidChildrenCache){this.__ht();
}var bn=this.__hm[bn]||{};
return bn[bo]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__ht();
}return this.__hp+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__ht();
}return this.__hq+1;
},getCellAlign:function(bp,bq){var bw=n;
var bu=m;
var bv=this.__hk[bp];
var bs=this.__hl[bq];
var br=this.__hm[bp][bq];

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
},getColumnFlex:function(bz){var bA=this.__hl[bz]||{};
return bA.flex!==undefined?bA.flex:0;
},setRowFlex:function(bB,bC){this._setRowData(bB,C,bC);
this._applyLayoutChange();
return this;
},getRowFlex:function(bD){var bE=this.__hk[bD]||{};
var bF=bE.flex!==undefined?bE.flex:0;
return bF;
},setColumnMaxWidth:function(bG,bH){this._setColumnData(bG,o,bH);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bI){var bJ=this.__hl[bI]||{};
return bJ.maxWidth!==undefined?bJ.maxWidth:Infinity;
},setColumnWidth:function(bK,bL){this._setColumnData(bK,s,bL);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bM){var bN=this.__hl[bM]||{};
return bN.width!==undefined?bN.width:null;
},setColumnMinWidth:function(bO,bP){this._setColumnData(bO,r,bP);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bQ){var bR=this.__hl[bQ]||{};
return bR.minWidth||0;
},setRowMaxHeight:function(bS,bT){this._setRowData(bS,t,bT);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bU){var bV=this.__hk[bU]||{};
return bV.maxHeight||Infinity;
},setRowHeight:function(bW,bX){this._setRowData(bW,B,bX);
this._applyLayoutChange();
return this;
},getRowHeight:function(bY){var ca=this.__hk[bY]||{};
return ca.height!==undefined?ca.height:null;
},setRowMinHeight:function(cb,cc){this._setRowData(cb,q,cc);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(cd){var ce=this.__hk[cd]||{};
return ce.minHeight||0;
},__hu:function(cf){var cj=cf.getSizeHint();
var ci=cf.getMarginLeft()+cf.getMarginRight();
var ch=cf.getMarginTop()+cf.getMarginBottom();
var cg={height:cj.height+ch,width:cj.width+ci,minHeight:cj.minHeight+ch,minWidth:cj.minWidth+ci,maxHeight:cj.maxHeight+ch,maxWidth:cj.maxWidth+ci};
return cg;
},_fixHeightsRowSpan:function(ck){var cr=this.getSpacingY();

for(var i=0,l=this.__ho.length;i<l;i++){var cy=this.__ho[i];
var cu=this.__hu(cy);
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

for(var i=0,l=this.__hn.length;i<l;i++){var cG=this.__hn[i];
var cI=this.__hu(cG);
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
}}}},_getRowHeights:function(){if(this.__hr!=null){return this.__hr;
}var dd=[];
var cV=this.__hp;
var cU=this.__hq;

for(var de=0;de<=cV;de++){var cW=0;
var cY=0;
var cX=0;

for(var dc=0;dc<=cU;dc++){var cT=this.__hm[de][dc];

if(!cT){continue;
}var da=cT.getLayoutProperties().rowSpan||0;

if(da>1){continue;
}var db=this.__hu(cT);

if(this.getRowFlex(de)>0){cW=Math.max(cW,db.minHeight);
}else{cW=Math.max(cW,db.height);
}cY=Math.max(cY,db.height);
}var cW=Math.max(cW,this.getRowMinHeight(de));
var cX=this.getRowMaxHeight(de);

if(this.getRowHeight(de)!==null){var cY=this.getRowHeight(de);
}else{var cY=Math.max(cW,Math.min(cY,cX));
}dd[de]={minHeight:cW,height:cY,maxHeight:cX};
}
if(this.__ho.length>0){this._fixHeightsRowSpan(dd);
}this.__hr=dd;
return dd;
},_getColWidths:function(){if(this.__hs!=null){return this.__hs;
}var dj=[];
var dg=this.__hq;
var di=this.__hp;

for(var dp=0;dp<=dg;dp++){var dm=0;
var dl=0;
var dh=Infinity;

for(var dq=0;dq<=di;dq++){var df=this.__hm[dq][dp];

if(!df){continue;
}var dk=df.getLayoutProperties().colSpan||0;

if(dk>1){continue;
}var dn=this.__hu(df);

if(this.getColumnFlex(dp)>0){dl=Math.max(dl,dn.minWidth);
}else{dl=Math.max(dl,dn.width);
}dm=Math.max(dm,dn.width);
}dl=Math.max(dl,this.getColumnMinWidth(dp));
dh=this.getColumnMaxWidth(dp);

if(this.getColumnWidth(dp)!==null){var dm=this.getColumnWidth(dp);
}else{var dm=Math.max(dl,Math.min(dm,dh));
}dj[dp]={minWidth:dl,width:dm,maxWidth:dh};
}
if(this.__hn.length>0){this._fixWidthsColSpan(dj);
}this.__hs=dj;
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
},renderLayout:function(dF,dG){if(this._invalidChildrenCache){this.__ht();
}var dU=qx.ui.layout.Util;
var dI=this.getSpacingX();
var dO=this.getSpacingY();
var ea=this._getColWidths();
var dY=this._getColumnFlexOffsets(dF);
var dJ=[];
var ec=this.__hq;
var dH=this.__hp;
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

for(var dP=0;dP<=dH;dP++){var dW=this.__hm[dP][ed];
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
this.__hs=null;
this.__hr=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ht();
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
}},destruct:function(){this.__hm=this.__hk=this.__hl=this.__hn=this.__ho=this.__hs=this.__hr=null;
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
(function(){var w="appear",v="qx.ui.virtual.core.CellEvent",u="update",t="change",s="qx.event.type.Data",r="qx.ui.virtual.core.Pane",q="resize",p="click",o="scrollX",n="dblclick",f="contextmenu",m="qx.debug",j="cellClick",c="cellContextmenu",b="qx.event.type.Event",h="__zl",g="__zm",k="__zg",a="cellDblclick",l="scrollY",d="__zh";
qx.Class.define(r,{extend:qx.ui.core.Widget,construct:function(x,y,z,A){qx.ui.core.Widget.call(this);
this.__zg=new qx.ui.virtual.core.Axis(z,x);
this.__zh=new qx.ui.virtual.core.Axis(A,y);
this.__rG=0;
this.__rF=0;
this.__zi=0;
this.__zj=0;
this.__zk={};
this.__eI={};
this.__zl=new qx.ui.container.Composite();
this.__zl.setUserBounds(0,0,0,0);
this._add(this.__zl);
this.__zm=[];
this.__zg.addListener(t,this.fullUpdate,this);
this.__zh.addListener(t,this.fullUpdate,this);
this.addListener(q,this._onResize,this);
this.addListenerOnce(w,this._onAppear,this);
this.addListener(p,this._onClick,this);
this.addListener(n,this._onDblclick,this);
this.addListener(f,this._onContextmenu,this);
},events:{cellClick:v,cellContextmenu:v,cellDblclick:v,update:b,scrollX:s,scrollY:s},properties:{width:{refine:true,init:400},height:{refine:true,init:300}},members:{__zg:null,__zh:null,__rG:null,__rF:null,__zi:null,__zj:null,__zk:null,__eI:null,__zl:null,__zm:null,__zn:null,__ph:null,__zo:null,getRowConfig:function(){return this.__zg;
},getColumnConfig:function(){return this.__zh;
},getChildren:function(){return [this.__zl];
},addLayer:function(B){if(qx.core.Environment.get(m)){this.assertInterface(B,qx.ui.virtual.core.ILayer);
}this.__zm.push(B);
B.setUserBounds(0,0,0,0);
this.__zl.add(B);
},getLayers:function(){return this.__zm;
},getVisibleLayers:function(){var C=[];

for(var i=0;i<this.__zm.length;i++){var D=this.__zm[i];

if(D.isVisible()){C.push(D);
}}return C;
},getScrollMaxX:function(){var E=this.getBounds();

if(E){return Math.max(0,this.__zh.getTotalSize()-E.width);
}return 0;
},getScrollMaxY:function(){var F=this.getBounds();

if(F){return Math.max(0,this.__zg.getTotalSize()-F.height);
}return 0;
},setScrollY:function(G){var H=this.getScrollMaxY();

if(G<0){G=0;
}else if(G>H){G=H;
}
if(this.__rG!==G){var I=this.__rG;
this.__rG=G;
this._deferredUpdateScrollPosition();
this.fireDataEvent(l,G,I);
}},getScrollY:function(){return this.__rG;
},setScrollX:function(J){var K=this.getScrollMaxX();

if(J<0){J=0;
}else if(J>K){J=K;
}
if(J!==this.__rF){var L=this.__rF;
this.__rF=J;
this._deferredUpdateScrollPosition();
this.fireDataEvent(o,J,L);
}},getScrollX:function(){return this.__rF;
},getScrollSize:function(){return {width:this.__zh.getTotalSize(),height:this.__zg.getTotalSize()};
},scrollRowIntoView:function(M){var P=this.getBounds();

if(!P){this.addListenerOnce(w,function(){qx.event.Timer.once(function(){this.scrollRowIntoView(M);
},this,0);
},this);
return;
}var Q=this.__zg.getItemPosition(M);
var O=Q+this.__zg.getItemSize(M);
var N=this.getScrollY();

if(Q<N){this.setScrollY(Q);
}else if(O>N+P.height){this.setScrollY(O-P.height);
}},scrollColumnIntoView:function(R){var U=this.getBounds();

if(!U){this.addListenerOnce(w,function(){qx.event.Timer.once(function(){this.scrollColumnIntoView(R);
},this,0);
},this);
return;
}var T=this.__zh.getItemPosition(R);
var S=T+this.__zh.getItemSize(R);
var V=this.getScrollX();

if(T<V){this.setScrollX(T);
}else if(S>V+U.width){this.setScrollX(S-U.width);
}},scrollCellIntoView:function(W,X){var Y=this.getBounds();

if(!Y){this.addListenerOnce(w,function(){qx.event.Timer.once(function(){this.scrollCellIntoView(W,X);
},this,0);
},this);
return;
}this.scrollColumnIntoView(W);
this.scrollRowIntoView(X);
},getCellAtPosition:function(ba,bb){var bc,bd;
var be=this.getContentLocation();

if(!be||bb<be.top||bb>=be.bottom||ba<be.left||ba>=be.right){return null;
}bc=this.__zg.getItemAtPosition(this.getScrollY()+bb-be.top);
bd=this.__zh.getItemAtPosition(this.getScrollX()+ba-be.left);

if(!bc||!bd){return null;
}return {row:bc.index,column:bd.index};
},prefetchX:function(bf,bg,bh,bi){var bj=this.getVisibleLayers();

if(bj.length==0){return;
}var bl=this.getBounds();

if(!bl){return;
}var bm=this.__rF+bl.width;
var bn=this.__zj-bm;

if(this.__rF-this.__zk.left<Math.min(this.__rF,bf)||this.__zk.right-bm<Math.min(bn,bh)){var bo=Math.min(this.__rF,bg);
var bk=Math.min(bn,bi);
this._setLayerWindow(bj,this.__rF-bo,this.__rG,bl.width+bo+bk,bl.height,false);
}},prefetchY:function(bp,bq,br,bs){var bt=this.getVisibleLayers();

if(bt.length==0){return;
}var bw=this.getBounds();

if(!bw){return;
}var bu=this.__rG+bw.height;
var bv=this.__zi-bu;

if(this.__rG-this.__zk.top<Math.min(this.__rG,bp)||this.__zk.bottom-bu<Math.min(bv,br)){var by=Math.min(this.__rG,bq);
var bx=Math.min(bv,bs);
this._setLayerWindow(bt,this.__rF,this.__rG-by,bw.width,bw.height+by+bx,false);
}},_onResize:function(){if(this.getContainerElement().getDomElement()){this.__zn=true;
this._updateScrollPosition();
this.__zn=null;
this.fireEvent(u);
}},_onAppear:function(){this.fullUpdate();
},_onClick:function(e){this.__zp(e,j);
},_onContextmenu:function(e){this.__zp(e,c);
},_onDblclick:function(e){this.__zp(e,a);
},__zp:function(e,bz){var bA=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());

if(!bA){return;
}this.fireNonBubblingEvent(bz,qx.ui.virtual.core.CellEvent,[this,e,bA.row,bA.column]);
},syncWidget:function(){if(this.__eI._fullUpdate){this._fullUpdate();
}else if(this.__eI._updateScrollPosition){this._updateScrollPosition();
}this.__eI={};
},_setLayerWindow:function(bB,bC,top,bD,bE,bF){var bK=this.__zg.getItemAtPosition(top);

if(bK){var bM=bK.index;
var bQ=this.__zg.getItemSizes(bM,bE+bK.offset);
var bL=qx.lang.Array.sum(bQ);
var bS=top-bK.offset;
var bP=top-bK.offset+bL;
}else{var bM=0;
var bQ=[];
var bL=0;
var bS=0;
var bP=0;
}var bO=this.__zh.getItemAtPosition(bC);

if(bO){var bI=bO.index;
var bH=this.__zh.getItemSizes(bI,bD+bO.offset);
var bN=qx.lang.Array.sum(bH);
var bR=bC-bO.offset;
var bJ=bC-bO.offset+bN;
}else{var bI=0;
var bH=[];
var bN=0;
var bR=0;
var bJ=0;
}this.__zk={top:bS,bottom:bP,left:bR,right:bJ};
this.__zl.setUserBounds(this.__zk.left-this.__rF,this.__zk.top-this.__rG,bN,bL);
this.__ph=bH;
this.__zo=bQ;

for(var i=0;i<this.__zm.length;i++){var bG=this.__zm[i];
bG.setUserBounds(0,0,bN,bL);

if(bF){bG.fullUpdate(bM,bI,bQ,bH);
}else{bG.updateLayerWindow(bM,bI,bQ,bH);
}}},__zq:function(){if(this.__zn){return;
}var bT=this.getScrollSize();

if(this.__zi!==bT.height||this.__zj!==bT.width){this.__zi=bT.height;
this.__zj=bT.width;
this.fireEvent(u);
}},fullUpdate:function(){this.__eI._fullUpdate=1;
qx.ui.core.queue.Widget.add(this);
},isUpdatePending:function(){return !!this.__eI._fullUpdate;
},_fullUpdate:function(){var bU=this.getVisibleLayers();

if(bU.length==0){this.__zq();
return;
}
if(!this.getContainerElement().getDomElement()){return ;
}var bV=this.getBounds();
this._setLayerWindow(bU,this.__rF,this.__rG,bV.width,bV.height,true);
this.__zq();
},_deferredUpdateScrollPosition:function(){this.__eI._updateScrollPosition=1;
qx.ui.core.queue.Widget.add(this);
},_updateScrollPosition:function(){var bW=this.getVisibleLayers();

if(bW.length==0){this.__zq();
return;
}var bY=this.getBounds();

if(!bY){return ;
}var bX={top:this.__rG,bottom:this.__rG+bY.height,left:this.__rF,right:this.__rF+bY.width};

if(this.__zk.top<=bX.top&&this.__zk.bottom>=bX.bottom&&this.__zk.left<=bX.left&&this.__zk.right>=bX.right){this.__zl.setUserBounds(this.__zk.left-bX.left,this.__zk.top-bX.top,this.__zk.right-this.__zk.left,this.__zk.bottom-this.__zk.top);
}else{this._setLayerWindow(bW,this.__rF,this.__rG,bY.width,bY.height,false);
}this.__zq();
}},destruct:function(){this._disposeArray(g);
this._disposeObjects(k,d,h);
this.__zk=this.__eI=this.__ph=this.__zo=null;
}});
})();
(function(){var g="change",f="qx.debug",e="qx.event.type.Event",d="'size' must be 'null' or an integer larger than 0.",c="qx.ui.virtual.core.Axis";
qx.Class.define(c,{extend:qx.core.Object,construct:function(h,j){qx.core.Object.call(this);
this.itemCount=j;
this.defaultItemSize=h;
this.customSizes={};
},events:{"change":e},members:{__zr:null,getDefaultItemSize:function(){return this.defaultItemSize;
},setDefaultItemSize:function(k){if(this.defaultItemSize!==k){this.defaultItemSize=k;
this.__zr=null;
this.fireNonBubblingEvent(g);
}},getItemCount:function(){return this.itemCount;
},setItemCount:function(l){if(this.itemCount!==l){this.itemCount=l;
this.__zr=null;
this.fireNonBubblingEvent(g);
}},setItemSize:function(m,n){if(qx.core.Environment.get(f)){this.assertArgumentsCount(arguments,2,2);
this.assert(n>0||n===null,d);
}
if(this.customSizes[m]==n){return;
}
if(n===null){delete this.customSizes[m];
}else{this.customSizes[m]=n;
}this.__zr=null;
this.fireNonBubblingEvent(g);
},getItemSize:function(o){return this.customSizes[o]||this.defaultItemSize;
},resetItemSizes:function(){this.customSizes={};
this.__zr=null;
this.fireNonBubblingEvent(g);
},__zs:function(){if(this.__zr){return this.__zr;
}var r=this.defaultItemSize;
var y=this.itemCount;
var t=[];

for(var v in this.customSizes){var p=parseInt(v,10);

if(p<y){t.push(p);
}}
if(t.length==0){var u=[{startIndex:0,endIndex:y-1,firstItemSize:r,rangeStart:0,rangeEnd:y*r-1}];
this.__zr=u;
return u;
}t.sort(function(a,b){return a>b?1:-1;
});
var u=[];
var q=0;

for(var i=0;i<t.length;i++){var p=t[i];

if(p>=y){break;
}var x=this.customSizes[p];
var s=p*r+q;
q+=x-r;
u[i]={startIndex:p,firstItemSize:x,rangeStart:s};

if(i>0){u[i-1].rangeEnd=s-1;
u[i-1].endIndex=p-1;
}}if(u[0].rangeStart>0){u.unshift({startIndex:0,endIndex:u[0].startIndex-1,firstItemSize:r,rangeStart:0,rangeEnd:u[0].rangeStart-1});
}var z=u[u.length-1];
var w=(y-z.startIndex-1)*r;
z.rangeEnd=z.rangeStart+z.firstItemSize+w-1;
z.endIndex=y-1;
this.__zr=u;
return u;
},__zt:function(A){var B=this.__zr||this.__zs();
var C=0;
var E=B.length-1;
while(true){var F=C+((E-C)>>1);
var D=B[F];

if(D.rangeEnd<A){C=F+1;
}else if(D.rangeStart>A){E=F-1;
}else{return D;
}}},getItemAtPosition:function(G){if(G<0||G>=this.getTotalSize()){return null;
}var I=this.__zt(G);
var K=I.rangeStart;
var H=I.startIndex;
var L=I.firstItemSize;

if(K+L>G){return {index:H,offset:G-K};
}else{var J=this.defaultItemSize;
return {index:H+1+Math.floor((G-K-L)/J),offset:(G-K-L)%J};
}},__zu:function(M){var N=this.__zr||this.__zs();
var O=0;
var Q=N.length-1;
while(true){var R=O+((Q-O)>>1);
var P=N[R];

if(P.endIndex<M){O=R+1;
}else if(P.startIndex>M){Q=R-1;
}else{return P;
}}},getItemPosition:function(S){if(S<0||S>=this.itemCount){return null;
}var T=this.__zu(S);

if(T.startIndex==S){return T.rangeStart;
}else{return T.rangeStart+T.firstItemSize+(S-T.startIndex-1)*this.defaultItemSize;
}},getTotalSize:function(){var U=this.__zr||this.__zs();
return U[U.length-1].rangeEnd+1;
},getItemSizes:function(V,W){var X=this.customSizes;
var bb=this.defaultItemSize;
var ba=0;
var Y=[];
var i=0;

while(ba<W){var bc=X[V++]||bb;
ba+=bc;
Y[i++]=bc;

if(V>=this.itemCount){break;
}}return Y;
}},destruct:function(){this.customSizes=this.__zr=null;
}});
})();
(function(){var a="qx.ui.virtual.core.ILayer";
qx.Interface.define(a,{members:{fullUpdate:function(b,c,d,e){this.assertArgumentsCount(arguments,6,6);
this.assertPositiveInteger(b);
this.assertPositiveInteger(c);
this.assertArray(d);
this.assertArray(e);
},updateLayerWindow:function(f,g,h,i){this.assertArgumentsCount(arguments,6,6);
this.assertPositiveInteger(f);
this.assertPositiveInteger(g);
this.assertArray(h);
this.assertArray(i);
},updateLayerData:function(){}}});
})();
(function(){var b="Integer",a="qx.ui.virtual.core.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);
this.setRow(e);
this.setColumn(f);
}}});
})();
(function(){var b="qx.ui.virtual.layer.Abstract",a="abstract";
qx.Class.define(b,{extend:qx.ui.core.Widget,type:a,implement:[qx.ui.virtual.core.ILayer],construct:function(){qx.ui.core.Widget.call(this);
this.__eI={};
},properties:{anonymous:{refine:true,init:true}},members:{__eI:null,__kw:null,__Aq:null,__Ar:null,__zo:null,__ph:null,getFirstRow:function(){return this.__Aq;
},getFirstColumn:function(){return this.__Ar;
},getRowSizes:function(){return this.__zo||[];
},getColumnSizes:function(){return this.__ph||[];
},syncWidget:function(){if(!this.getContentElement().getDomElement()){return;
}
if(this.__eI.fullUpdate||this.__eI.updateLayerWindow&&this.__eI.updateLayerData){this._fullUpdate.apply(this,this.__kw);
}else if(this.__eI.updateLayerWindow){this._updateLayerWindow.apply(this,this.__kw);
}else if(this.__eI.updateLayerData&&this.__zo){this._updateLayerData();
}
if(this.__eI.fullUpdate||this.__eI.updateLayerWindow){var c=this.__kw;
this.__Aq=c[0];
this.__Ar=c[1];
this.__zo=c[2];
this.__ph=c[3];
}this.__eI={};
},_updateLayerData:function(){this._fullUpdate(this.__Aq,this.__Ar,this.__zo,this.__ph);
},_fullUpdate:function(d,e,f,g){throw new Error("Abstract method '_fullUpdate' called!");
},_updateLayerWindow:function(h,i,j,k){this._fullUpdate(h,i,j,k);
},updateLayerData:function(){this.__eI.updateLayerData=true;
qx.ui.core.queue.Widget.add(this);
},fullUpdate:function(l,m,n,o){this.__kw=arguments;
this.__eI.fullUpdate=true;
qx.ui.core.queue.Widget.add(this);
},updateLayerWindow:function(p,q,r,s){this.__kw=arguments;
this.__eI.updateLayerWindow=true;
qx.ui.core.queue.Widget.add(this);
}},destruct:function(){this.__eI=this.__kw=this.__zo=this.__ph=null;
}});
})();
(function(){var g="cell.empty",f="cell.column",e="qx.debug",d="cell.row",c="updated",b="qx.event.type.Event",a="qx.ui.virtual.layer.WidgetCell";
qx.Class.define(a,{extend:qx.ui.virtual.layer.Abstract,include:[qx.ui.core.MChildrenHandling],construct:function(h){qx.ui.virtual.layer.Abstract.call(this);
this.setZIndex(2);

if(qx.core.Environment.get(e)){this.assertInterface(h,qx.ui.virtual.core.IWidgetCellProvider);
}this._cellProvider=h;
this.__AG=[];
},properties:{anonymous:{refine:true,init:false}},events:{updated:b},members:{__AG:null,getRenderedCellWidget:function(j,k){var l=this.getColumnSizes().length;
var q=this.getRowSizes().length;
var p=this.getFirstRow();
var o=this.getFirstColumn();

if(j<p||j>=p+q||k<o||k>=o+l){return null;
}var n=(k-o)+(j-p)*l;
var m=this._getChildren()[n];

if(m.getUserData(g)){return null;
}else{return m;
}},_getSpacer:function(){var r=this.__AG.pop();

if(!r){r=new qx.ui.core.Spacer();
r.setUserData(g,1);
}return r;
},_activateNotEmptyChild:function(s){var t=qx.ui.core.FocusHandler.getInstance().getActiveWidget();
if(t==s||qx.ui.core.Widget.contains(s,t)){var u=this._getChildren();

for(var i=u.length-1;i>=0;i--){if(!u[i].getUserData(g)){u[i].activate();
break;
}}}},_fullUpdate:function(v,w,z,A){var C=this._cellProvider;
var G=this._getChildren();

for(var i=0;i<G.length;i++){var E=G[i];

if(E.getUserData(g)){this.__AG.push(E);
}else{this._activateNotEmptyChild(E);
C.poolCellWidget(E);
}}this._removeAll();
var top=0;
var H=0;

for(var y=0;y<z.length;y++){for(var x=0;x<A.length;x++){var F=v+y;
var D=w+x;
var B=C.getCellWidget(F,D)||this._getSpacer();
B.setUserBounds(H,top,A[x],z[y]);
B.setUserData(d,F);
B.setUserData(f,D);
this._add(B);
H+=A[x];
}top+=z[y];
H=0;
}this.fireEvent(c);
},_updateLayerWindow:function(I,J,K,L){if(qx.core.Environment.get(e)){this.assertPositiveInteger(I);
this.assertPositiveInteger(J);
this.assertArray(K);
this.assertArray(L);
}var X=I+K.length-1;
var O=J+L.length-1;
var T={firstRow:Math.max(I,this.getFirstRow()),lastRow:Math.min(X,this._lastRow),firstColumn:Math.max(J,this.getFirstColumn()),lastColumn:Math.min(O,this._lastColumn)};
this._lastColumn=O;
this._lastRow=X;

if(T.firstRow>T.lastRow||T.firstColumn>T.lastColumn){return this._fullUpdate(I,J,K,L);
}var Y=this._getChildren();
var M=this.getColumnSizes().length;
var V=[];
var S={};

for(var ba=I;ba<=X;ba++){V[ba]=[];

for(var R=J;R<=O;R++){if(ba>=T.firstRow&&ba<=T.lastRow&&R>=T.firstColumn&&R<=T.lastColumn){var x=R-this.getFirstColumn();
var y=ba-this.getFirstRow();
var N=y*M+x;
V[ba][R]=Y[N];
S[N]=true;
}}}var U=this._cellProvider;
var Y=this._getChildren();

for(var i=0;i<Y.length;i++){if(!S[i]){var W=Y[i];

if(W.getUserData(g)){this.__AG.push(W);
}else{this._activateNotEmptyChild(W);
U.poolCellWidget(W);
}}}this._removeAll();
var top=0;
var P=0;

for(var y=0;y<K.length;y++){for(var x=0;x<L.length;x++){var ba=I+y;
var R=J+x;
var Q=V[ba][R]||U.getCellWidget(ba,R)||this._getSpacer();
Q.setUserBounds(P,top,L[x],K[y]);
Q.setUserData(d,ba);
Q.setUserData(f,R);
this._add(Q);
P+=L[x];
}top+=K[y];
P=0;
}this.fireEvent(c);
}},destruct:function(){var bb=this._getChildren();

for(var i=0;i<bb.length;i++){bb[i].dispose();
}this._cellProvider=this.__AG=null;
}});
})();
(function(){var a="qx.ui.virtual.core.IWidgetCellProvider";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},poolCellWidget:function(d){}}});
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
(function(){var a="qx.ui.virtual.cell.IWidgetCell";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},pool:function(d){},updateStates:function(e,f){},updateData:function(g,h){}}});
})();
(function(){var c="cell.states",b="qx.ui.virtual.cell.AbstractWidget",a="qx.event.type.Data";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.virtual.cell.IWidgetCell],construct:function(){qx.core.Object.call(this);
this.__bL=[];
},events:{"created":a},members:{__bL:null,_createWidget:function(){throw new Error("abstract method call");
},updateData:function(d,e){throw new Error("abstract method call");
},updateStates:function(f,g){var j=f.getUserData(c);
if(j){var h=g||{};

for(var i in j){if(!h[i]){f.removeState(i);
}}}else{j={};
}if(g){for(var i in g){if(!j.state){f.addState(i);
}}}f.setUserData(c,g);
},getCellWidget:function(k,l){var m=this.__AH();
this.updateStates(m,l);
this.updateData(m,k);
return m;
},pool:function(n){this.__bL.push(n);
},_cleanupPool:function(){var o=this.__bL.pop();

while(o){o.destroy();
o=this.__bL.pop();
}},__AH:function(){var p=this.__bL.pop();

if(p==null){p=this._createWidget();
this.fireDataEvent("created",p);
}return p;
}},destruct:function(){this.__bL=null;
}});
})();
(function(){var b="singleton",a="qx.ui.virtual.form.ListItemCell";
qx.Class.define(a,{extend:qx.ui.virtual.cell.AbstractWidget,type:b,members:{_createWidget:function(){return new qx.ui.form.ListItem();
},updateData:function(c,d){c.setLabel(d);
}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b,dereference:true}}});
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
(function(){var q="",p="px;",o="' ",n="width:",m="top:",l="css.boxmodel",k=">",j="qx.debug",i="content",h="</div>",c="qx.ui.virtual.layer.HtmlCell",g="style='",f="height:",b="<div ",a="class='",e="left:",d="html";
qx.Class.define(c,{extend:qx.ui.virtual.layer.Abstract,construct:function(r){qx.ui.virtual.layer.Abstract.call(this);
this.setZIndex(2);

if(qx.core.Environment.get(j)){this.assertInterface(r,qx.ui.virtual.core.IHtmlCellProvider);
}this._cellProvider=r;
},members:{_getCellSizeStyle:function(s,t,u,v){var w=q;

if(qx.core.Environment.get(l)==i){s-=u;
t-=v;
}w+=n+s+p;
w+=f+t+p;
return w;
},_fullUpdate:function(z,A,B,C){var I=[];
var J=0;
var top=0;
var K=z;
var E=A;

for(var y=0;y<B.length;y++){var J=0;
var E=A;
var F=B[y];

for(var x=0;x<C.length;x++){var H=C[x];
var D=this._cellProvider.getCellProperties(K,E);
var G=D.insets||[0,0];
I.push(b,g,e,J,p,m,top,p,this._getCellSizeStyle(H,F,G[0],G[1]),D.style||q,o,a,D.classes||q,o,D.attributes||q,k,D.content||q,h);
E++;
J+=H;
}top+=F;
K++;
}this.getContentElement().setAttribute(d,I.join(q));
}},destruct:function(){this._cellProvider=null;
}});
})();
(function(){var a="qx.ui.virtual.core.IHtmlCellProvider";
qx.Interface.define(a,{members:{getCellProperties:function(b,c){}}});
})();
(function(){var a="qx.ui.virtual.cell.ICell";
qx.Interface.define(a,{members:{getCellProperties:function(b,c){}}});
})();
(function(){var d="",c="qx.ui.virtual.cell.Abstract",b="abstract",a="qx-cell";
qx.Class.define(c,{type:b,extend:qx.core.Object,implement:qx.ui.virtual.cell.ICell,construct:function(){qx.core.Object.call(this);
qx.ui.virtual.cell.CellStylesheet.getInstance();
},members:{getCssClasses:function(e,f){return a;
},getAttributes:function(g,h){return d;
},getStyles:function(i,j){return d;
},getInsets:function(k,l){return [0,0];
},getContent:function(m,n){return m;
},getCellProperties:function(o,p){return {classes:this.getCssClasses(o,p),style:this.getStyles(o,p),attributes:this.getAttributes(o,p),content:this.getContent(o,p),insets:this.getInsets(o,p)};
}}});
})();
(function(){var k="Integer",j="_applyPadding",h="paddingLeft",g="Color",f="",e="paddingBottom",d="paddingTop",c="paddingRight",b=";",a="-",J="backgroundColor",I="_applyTextAlign",H="px",G="_applyFont",F="_applyBackgroundColor",E="cell",D="center",C="font",B=":",A="shorthand",r="String",s="_applyAppearance",p="background-color:",q="textAlign",n="qx-cell ",o="left",l="textColor",m="text-align:",t="Font",u="right",w="_applyTextColor",v="justify",y="color:",x=" ",z="qx.ui.virtual.cell.Cell";
qx.Class.define(z,{extend:qx.ui.virtual.cell.Abstract,construct:function(){qx.ui.virtual.cell.Abstract.call(this);
this.__yW=qx.ui.virtual.cell.CellStylesheet.getInstance();
this.__zv={};
this.__zw={};
this.__zx={};
this.__zy={};
this.__jo={};
this.__zz={};
this.initAppearance();
this.__zD();
},properties:{appearance:{check:r,init:E,apply:s},backgroundColor:{nullable:true,check:g,apply:F,themeable:true},textColor:{nullable:true,check:g,apply:w,themeable:true},textAlign:{check:[o,D,u,v],nullable:true,themeable:true,apply:I},font:{nullable:true,apply:G,check:t,themeable:true},paddingTop:{check:k,init:0,apply:j,themeable:true},paddingRight:{check:k,nullable:true,apply:j,themeable:true},paddingBottom:{check:k,nullable:true,apply:j,themeable:true},paddingLeft:{check:k,nullable:true,apply:j,themeable:true},padding:{group:[d,c,e,h],mode:A,themeable:true}},members:{__zA:null,__zB:null,__jo:null,__zz:null,__zw:null,__zv:null,__zx:null,__zy:null,__zC:false,__yW:null,__zD:function(){var M=qx.util.PropertyUtil;
var O=qx.lang.Object.fromArray(this._getCssProperties());
this.__zA=[];
var L=this.constructor;

while(L){var N=M.getProperties(L);

for(var K in N){if(!O[K]){this.__zA.push(K);
}}L=L.superclass;
}},_getCssProperties:function(){return [J,l,C,q,d,c,e,h];
},_applyAppearance:function(P,Q){if(Q){this.__zw={};
}},_getValue:function(R){if(this.__zC){return qx.util.PropertyUtil.getThemeValue(this,R);
}else{return qx.util.PropertyUtil.getUserValue(this,R);
}},_storeStyle:function(S,T){var U;

if(this.__zC){U=this.__zw;
}else{U=this.__zv;
}
if(T===null){delete U[S];
}else{U[S]=T;
}},_applyBackgroundColor:function(V,W,name){var V=this._getValue(name);

if(!V){this._storeStyle(name,null);
}else{this._storeStyle(name,p+qx.theme.manager.Color.getInstance().resolve(V));
}},_applyTextColor:function(X,Y,name){var X=this._getValue(name);

if(!X){this._storeStyle(name,null);
}else{this._storeStyle(name,y+qx.theme.manager.Color.getInstance().resolve(X));
}},_applyTextAlign:function(ba,bb,name){var ba=this._getValue(name);

if(!ba){this._storeStyle(name,null);
}else{this._storeStyle(name,m+ba);
}},_applyFont:function(bc,bd,name){var bc=this._getValue(name);

if(!bc){this._storeStyle(name,null);
}else{var be=qx.theme.manager.Font.getInstance().resolve(bc);
this._storeStyle(name,qx.bom.element.Style.compile(be.getStyles()));
}},_applyPadding:function(bf,bg,name){var bf=this._getValue(name);

if(this.__zC){var bi=this.__zy;
}else{bi=this.__zx;
}
if(bf===null){delete bi[name];
}else{bi[name]=bf;
}
if(bf===null){this._storeStyle(name,null);
}else{var bh=qx.lang.String.hyphenate(name);
this._storeStyle(name,bh+B+bf+H);
}},getCellProperties:function(bj,bk){this.__zE(bk);
return {classes:this.getCssClasses(bj,bk),style:this.getStyles(bj,bk),attributes:this.getAttributes(bj,bk),content:this.getContent(bj,bk),insets:this.getInsets(bj,bk)};
},getAttributes:function(bl,bm){return f;
},getContent:function(bn,bo){return bn;
},getCssClasses:function(bp,bq){var br=this.__yW.getCssClass(this.__zB)||f;
return n+br;
},__zE:function(bs){if(!bs){bs={};
}var bu=this.getAppearance();
var bt=bu+a+qx.lang.Object.getKeys(bs).sort().join(x);

if(this.__zB==bt){return;
}this.__zB=bt;
var bv=this.__jo[this.__zB];

if(!bv){this.__zF();
this.__zG(bs);
this.__zH(bs);
this.__zI();
this.__jo[this.__zB]=1;
}this.__zJ();
},__zF:function(){var bw=qx.util.PropertyUtil;
var bx=this._getCssProperties();

for(var i=0;i<bx.length;i++){bw.deleteThemeValue(this,bx[i]);
}},__zG:function(by){this.__zw={};
this.__zC=true;
var bB=this.getAppearance();
var bA=qx.util.PropertyUtil;
var bz=qx.theme.manager.Appearance.getInstance().styleFrom(bB,by);

for(var bC in bz){if(bz[bC]!==undefined){bA.setThemed(this,bC,bz[bC]);
}}this.__zC=false;
},__zH:function(){var bD=qx.lang.Object.getValues(this.__zw).join(b);
this.__yW.computeClassForStyles(this.__zB,bD);
},__zI:function(){var bI=this.__zA;
var bE=qx.util.PropertyUtil;
var bG={};

for(var i=0;i<bI.length;i++){var bH=bI[i];
var bF=bE.getThemeValue(this,bH);

if(bF!==undefined){bG[bH]=bF;
}}this.__zz[this.__zB]=bG;
},__zJ:function(){var bK=qx.util.PropertyUtil;
var bJ=this.__zz[this.__zB]||{};

for(var bL in bJ){bK.setThemed(this,bL,bJ[bL]);
}},getStyles:function(bM,bN){return qx.lang.Object.getValues(this.__zv).join(b);
},getInsets:function(bO,bP){var bT=this.__zx;
var bS=this.__zy;
var top=(bT.paddingTop!==undefined?bT.paddingTop:bS.paddingTop)||0;
var bQ=(bT.paddingRight!==undefined?bT.paddingRight:bS.paddingRight)||0;
var bR=(bT.paddingBottom!==undefined?bT.paddingBottom:bS.paddingBottom)||0;
var bU=(bT.paddingLeft!==undefined?bT.paddingLeft:bS.paddingLeft)||0;
return [bU+bQ,top+bR];
}},destruct:function(){this.__yW=this.__zv=this.__zw=this.__zx=this.__zy=this.__jo=this.__zz=this.__zA=null;
}});
})();
(function(){var p=".qx-cell {",o="-",n="mshtml",m="engine.name",l="qx.ui.virtual.cell.CellStylesheet",k="none",j="qx-cell-",i="default",h="ellipsis",g="}",c="hidden",f="} ",e=".",b="content-box",a="singleton",d="absolute";
qx.Class.define(l,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var q=p+
qx.bom.element.Style.compile({position:d,overflow:c,cursor:i,textOverflow:h,userSelect:k})+f;

if(!(qx.core.Environment.get(m)==n)){q+=p+qx.bom.element.BoxSizing.compile(b)+g;
}this.__yW=qx.bom.Stylesheet.createElement(q);
this.__yX={};
this.__eP={};
},members:{__yW:null,__yX:null,__eP:null,getStylesheet:function(){return this.__yW;
},getCssClass:function(r){return this.__yX[r]||null;
},computeClassForStyles:function(s,t){var u=this.__eP[t];

if(!u){var u=this.__yY();
qx.bom.Stylesheet.addRule(this.__yW,e+u,t);
this.__eP[t]=u;
}this.__yX[s]=u;
return u;
},__yY:function(){return j+this.toHashCode()+o+(this.__za++);
},__za:0},destruct:function(){this.__yW=this.__yX=this.__eP=null;
}});
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
(function(){var o="one",n="single",m="selected",k="additive",j="multi",h="os.name",g="osx",f="under",d="PageUp",c="Left",O="lead",N="Down",M="Up",L="Boolean",K="PageDown",J="anchor",I="End",H="Home",G="Right",F="right",v="click",w="above",t="left",u="Escape",r="A",s="Space",p="_applyMode",q="interval",x="changeSelection",y="qx.event.type.Data",A="quick",z="key",C="__oK",B="abstract",E="drag",D="qx.ui.core.selection.Abstract";
qx.Class.define(D,{type:B,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__it={};
},events:{"changeSelection":y},properties:{mode:{check:[n,j,k,o],init:n,apply:p},drag:{check:L,init:false},quick:{check:L,init:false}},members:{__oI:0,__oJ:0,__oK:null,__oL:null,__oM:null,__oN:null,__oO:null,__oP:null,__oQ:null,__oR:null,__oS:null,__oT:null,__oU:null,__oV:null,__oW:null,__oX:null,__oY:null,__it:null,__pa:null,__pb:null,_userInteraction:false,__pc:null,getSelectionContext:function(){return this.__oX;
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
}else{if(!this._getAnchorItem()){this._setAnchorItem(S);
}this._setLeadItem(S);
this._addToSelection(S);
}this._scrollItemIntoView(S);
this._fireChange();
},removeItem:function(U){this._removeFromSelection(U);

if(this.getMode()===o&&this.isSelectionEmpty()){var V=this._getFirstSelectable();

if(V){this.addItem(V);
}if(V==U){return;
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
},clearSelection:function(){if(this.getMode()==o){var ba=this._getFirstSelectable();

if(ba!=null){this.selectItem(ba);
return;
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
},getSelection:function(){return qx.lang.Object.getValues(this.__it);
},getSortedSelection:function(){var bg=this.getSelectables();
var bf=qx.lang.Object.getValues(this.__it);
bf.sort(function(a,b){return bg.indexOf(a)-bg.indexOf(b);
});
return bf;
},isItemSelected:function(bh){var bi=this._selectableToHashCode(bh);
return this.__it[bi]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__it);
},invertSelection:function(){var bk=this.getMode();

if(bk===n||bk===o){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bj=this.getSelectables();

for(var i=0;i<bj.length;i++){this._toggleInSelection(bj[i]);
}this._fireChange();
},_setLeadItem:function(bl){var bm=this.__oY;

if(bm!==null){this._styleSelectable(bm,O,false);
}
if(bl!==null){this._styleSelectable(bl,O,true);
}this.__oY=bl;
},getLeadItem:function(){return this.__oY!==null?this.__oY:null;
},_setAnchorItem:function(bn){var bo=this.__pa;

if(bo){this._styleSelectable(bo,J,false);
}
if(bn){this._styleSelectable(bn,J,true);
}this.__pa=bn;
},_getAnchorItem:function(){return this.__pa!==null?this.__pa:null;
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
if(bH===o){var bJ=this._getFirstSelectable();

if(bJ!=null){this._setSelectedItem(bJ);
this._scrollItemIntoView(bJ);
}}this._fireChange();
},handleMouseOver:function(event){if(this.__pc!=null&&this.__pc!=this._getScroll().top){this.__pc=null;
return;
}this._userInteraction=true;

if(!this.getQuick()){this._userInteraction=false;
return;
}var bL=this.getMode();

if(bL!==o&&bL!==n){this._userInteraction=false;
return;
}var bK=this._getSelectableFromMouseEvent(event);

if(bK===null){this._userInteraction=false;
return;
}this._setSelectedItem(bK);
this._fireChange(A);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var bN=this._getSelectableFromMouseEvent(event);

if(bN===null){this._userInteraction=false;
return;
}var bP=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var bM=event.isShiftPressed();
if(this.isItemSelected(bN)&&!bM&&!bP&&!this.getDrag()){this.__pb=bN;
this._userInteraction=false;
return;
}else{this.__pb=null;
}this._scrollItemIntoView(bN);
switch(this.getMode()){case n:case o:this._setSelectedItem(bN);
break;
case k:this._setLeadItem(bN);
this._setAnchorItem(bN);
this._toggleInSelection(bN);
break;
case j:this._setLeadItem(bN);
if(bM){var bO=this._getAnchorItem();

if(bO===null){bO=this._getFirstSelectable();
this._setAnchorItem(bO);
}this._selectItemRange(bO,bN,bP);
}else if(bP){this._setAnchorItem(bN);
this._toggleInSelection(bN);
}else{this._setAnchorItem(bN);
this._setSelectedItem(bN);
}break;
}var bQ=this.getMode();

if(this.getDrag()&&bQ!==n&&bQ!==o&&!bM&&!bP){this.__oO=this._getLocation();
this.__oL=this._getScroll();
this.__oP=event.getDocumentLeft()+this.__oL.left;
this.__oQ=event.getDocumentTop()+this.__oL.top;
this.__oR=true;
this._capture();
}this._fireChange(v);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var bU=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var bR=event.isShiftPressed();

if(!bU&&!bR&&this.__pb){var bS=this._getSelectableFromMouseEvent(event);

if(bS===null||!this.isItemSelected(bS)){this._userInteraction=false;
return;
}var bT=this.getMode();

if(bT===k){this._removeFromSelection(bS);
}else{this._setSelectedItem(bS);

if(this.getMode()===j){this._setLeadItem(bS);
this._setAnchorItem(bS);
}}this._userInteraction=false;
}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__oR){return;
}this.__oS=event.getDocumentLeft();
this.__oT=event.getDocumentTop();
this._userInteraction=true;
var bW=this.__oS+this.__oL.left;

if(bW>this.__oP){this.__oU=1;
}else if(bW<this.__oP){this.__oU=-1;
}else{this.__oU=0;
}var bV=this.__oT+this.__oL.top;

if(bV>this.__oQ){this.__oV=1;
}else if(bV<this.__oQ){this.__oV=-1;
}else{this.__oV=0;
}var location=this.__oO;

if(this.__oS<location.left){this.__oI=this.__oS-location.left;
}else if(this.__oS>location.right){this.__oI=this.__oS-location.right;
}else{this.__oI=0;
}
if(this.__oT<location.top){this.__oJ=this.__oT-location.top;
}else if(this.__oT>location.bottom){this.__oJ=this.__oT-location.bottom;
}else{this.__oJ=0;
}if(!this.__oK){this.__oK=new qx.event.Timer(100);
this.__oK.addListener(q,this._onInterval,this);
}this.__oK.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var bX=e.getData();

if(this.getMode()===o&&this.isSelectionEmpty()){this.addItem(bX);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__oR){return;
}if(this.__oW){this._fireChange(v);
}delete this.__oR;
delete this.__oM;
delete this.__oN;
this._releaseCapture();
if(this.__oK){this.__oK.stop();
}},_onInterval:function(e){this._scrollBy(this.__oI,this.__oJ);
this.__oL=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var ch=this._getDimension();
var ca=Math.max(0,Math.min(this.__oS-this.__oO.left,ch.width))+this.__oL.left;
var bY=Math.max(0,Math.min(this.__oT-this.__oO.top,ch.height))+this.__oL.top;
if(this.__oM===ca&&this.__oN===bY){return;
}this.__oM=ca;
this.__oN=bY;
var cj=this._getAnchorItem();
var cc=cj;
var cf=this.__oU;
var ci,cb;

while(cf!==0){ci=cf>0?this._getRelatedSelectable(cc,F):this._getRelatedSelectable(cc,t);
if(ci!==null){cb=this._getSelectableLocationX(ci);
if((cf>0&&cb.left<=ca)||(cf<0&&cb.right>=ca)){cc=ci;
continue;
}}break;
}var cg=this.__oV;
var ce,cd;

while(cg!==0){ce=cg>0?this._getRelatedSelectable(cc,f):this._getRelatedSelectable(cc,w);
if(ce!==null){cd=this._getSelectableLocationY(ce);
if((cg>0&&cd.top<=bY)||(cg<0&&cd.bottom>=bY)){cc=ce;
continue;
}}break;
}var ck=this.getMode();

if(ck===j){this._selectItemRange(cj,cc);
}else if(ck===k){if(this.isItemSelected(cj)){this._selectItemRange(cj,cc,true);
}else{this._deselectItemRange(cj,cc);
}this._setAnchorItem(cc);
}this._fireChange(E);
},__oj:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
var cq,cp;
var cs=event.getKeyIdentifier();
var cr=this.getMode();
var cm=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var cn=event.isShiftPressed();
var co=false;

if(cs===r&&cm){if(cr!==n&&cr!==o){this._selectAllItems();
co=true;
}}else if(cs===u){if(cr!==n&&cr!==o){this._clearSelection();
co=true;
}}else if(cs===s){var cl=this.getLeadItem();

if(cl&&!cn){if(cm||cr===k){this._toggleInSelection(cl);
}else{this._setSelectedItem(cl);
}co=true;
}}else if(this.__oj[cs]){co=true;

if(cr===n||cr==o){cq=this._getSelectedItem();
}else{cq=this.getLeadItem();
}
if(cq!==null){switch(cs){case H:cp=this._getFirstSelectable();
break;
case I:cp=this._getLastSelectable();
break;
case M:cp=this._getRelatedSelectable(cq,w);
break;
case N:cp=this._getRelatedSelectable(cq,f);
break;
case c:cp=this._getRelatedSelectable(cq,t);
break;
case G:cp=this._getRelatedSelectable(cq,F);
break;
case d:cp=this._getPage(cq,true);
break;
case K:cp=this._getPage(cq,false);
break;
}}else{switch(cs){case H:case N:case G:case K:cp=this._getFirstSelectable();
break;
case I:case M:case c:case d:cp=this._getLastSelectable();
break;
}}if(cp!==null){switch(cr){case n:case o:this._setSelectedItem(cp);
break;
case k:this._setLeadItem(cp);
break;
case j:if(cn){var ct=this._getAnchorItem();

if(ct===null){this._setAnchorItem(ct=this._getFirstSelectable());
}this._setLeadItem(cp);
this._selectItemRange(ct,cp,cm);
}else{this._setAnchorItem(cp);
this._setLeadItem(cp);

if(!cm){this._setSelectedItem(cp);
}}break;
}this.__pc=this._getScroll().top;
this._scrollItemIntoView(cp);
}}
if(co){event.stop();
this._fireChange(z);
}this._userInteraction=false;
},_selectAllItems:function(){var cu=this.getSelectables();

for(var i=0,l=cu.length;i<l;i++){this._addToSelection(cu[i]);
}},_clearSelection:function(){var cv=this.__it;

for(var cw in cv){this._removeFromSelection(cv[cw]);
}this.__it={};
},_selectItemRange:function(cx,cy,cz){var cC=this._getSelectableRange(cx,cy);
if(!cz){var cB=this.__it;
var cD=this.__pd(cC);

for(var cA in cB){if(!cD[cA]){this._removeFromSelection(cB[cA]);
}}}for(var i=0,l=cC.length;i<l;i++){this._addToSelection(cC[i]);
}},_deselectItemRange:function(cE,cF){var cG=this._getSelectableRange(cE,cF);

for(var i=0,l=cG.length;i<l;i++){this._removeFromSelection(cG[i]);
}},__pd:function(cH){var cJ={};
var cI;

for(var i=0,l=cH.length;i<l;i++){cI=cH[i];
cJ[this._selectableToHashCode(cI)]=cI;
}return cJ;
},_getSelectedItem:function(){for(var cK in this.__it){return this.__it[cK];
}return null;
},_setSelectedItem:function(cL){if(this._isSelectable(cL)){var cM=this.__it;
var cN=this._selectableToHashCode(cL);

if(!cM[cN]||qx.lang.Object.hasMinLength(cM,2)){this._clearSelection();
this._addToSelection(cL);
}}},_addToSelection:function(cO){var cP=this._selectableToHashCode(cO);

if(!this.__it[cP]&&this._isSelectable(cO)){this.__it[cP]=cO;
this._styleSelectable(cO,m,true);
this.__oW=true;
}},_toggleInSelection:function(cQ){var cR=this._selectableToHashCode(cQ);

if(!this.__it[cR]){this.__it[cR]=cQ;
this._styleSelectable(cQ,m,true);
}else{delete this.__it[cR];
this._styleSelectable(cQ,m,false);
}this.__oW=true;
},_removeFromSelection:function(cS){var cT=this._selectableToHashCode(cS);

if(this.__it[cT]!=null){delete this.__it[cT];
this._styleSelectable(cS,m,false);
this.__oW=true;
}},_replaceMultiSelection:function(cU){var cX=false;
var db,da;
var cV={};

for(var i=0,l=cU.length;i<l;i++){db=cU[i];

if(this._isSelectable(db)){da=this._selectableToHashCode(db);
cV[da]=db;
}}var dc=cU[0];
var cW=db;
var cY=this.__it;

for(var da in cY){if(cV[da]){delete cV[da];
}else{db=cY[da];
delete cY[da];
this._styleSelectable(db,m,false);
cX=true;
}}for(var da in cV){db=cY[da]=cV[da];
this._styleSelectable(db,m,true);
cX=true;
}if(!cX){return false;
}this._scrollItemIntoView(cW);
this._setLeadItem(dc);
this._setAnchorItem(dc);
this.__oW=true;
this._fireChange();
},_fireChange:function(dd){if(this.__oW){this.__oX=dd||null;
this.fireDataEvent(x,this.getSelection());
delete this.__oW;
}}},destruct:function(){this._disposeObjects(C);
this.__it=this.__pb=this.__pa=null;
this.__oY=null;
}});
})();
(function(){var j="mouseup",i="mousedown",h="losecapture",g="mouseover",f="mousemove",e="removeItem",d="keypress",c="addItem",b="qx.ui.virtual.selection.Abstract",a="qx.debug";
qx.Class.define(b,{extend:qx.ui.core.selection.Abstract,construct:function(k,l){qx.ui.core.selection.Abstract.call(this);

if(qx.core.Environment.get(a)){this.assertInstance(k,qx.ui.virtual.core.Pane);
}this._pane=k;
this._delegate=l||{};
},members:{_isSelectable:function(m){return this._delegate.isItemSelectable?this._delegate.isItemSelectable(m):true;
},_styleSelectable:function(n,o,p){if(this._delegate.styleSelectable){this._delegate.styleSelectable(n,o,p);
}},attachMouseEvents:function(){var q=this._pane.getContainerElement();
q.addListener(i,this.handleMouseDown,this);
q.addListener(j,this.handleMouseUp,this);
q.addListener(g,this.handleMouseOver,this);
q.addListener(f,this.handleMouseMove,this);
q.addListener(h,this.handleLoseCapture,this);
},detatchMouseEvents:function(){var r=this._pane.getContainerElement();
r.removeListener(i,this.handleMouseDown,this);
r.removeListener(j,this.handleMouseUp,this);
r.removeListener(g,this.handleMouseOver,this);
r.removeListener(f,this.handleMouseMove,this);
r.removeListener(h,this.handleLoseCapture,this);
},attachKeyEvents:function(s){s.addListener(d,this.handleKeyPress,this);
},detachKeyEvents:function(t){t.removeListener(d,this.handleKeyPress,this);
},attachListEvents:function(u){u.addListener(c,this.handleAddItem,this);
u.addListener(e,this.handleRemoveItem,this);
},detachListEvents:function(v){v.removeListener(c,this.handleAddItem,this);
v.removeListener(e,this.handleRemoveItem,this);
},_capture:function(){this._pane.capture();
},_releaseCapture:function(){this._pane.releaseCapture();
},_getScroll:function(){return {left:this._pane.getScrollX(),top:this._pane.getScrollY()};
},_scrollBy:function(w,x){this._pane.setScrollX(this._pane.getScrollX()+w);
this._pane.setScrollY(this._pane.getScrollY()+x);
},_getLocation:function(){var y=this._pane.getContentElement().getDomElement();
return y?qx.bom.element.Location.get(y):null;
},_getDimension:function(){return this._pane.getInnerSize();
}},destruct:function(){this._pane=this._delegate=null;
}});
})();
(function(){var d="qx.ui.virtual.selection.Row",c="above",b="under",a="one";
qx.Class.define(d,{extend:qx.ui.virtual.selection.Abstract,members:{_getItemCount:function(){return this._pane.getRowConfig().getItemCount();
},_getSelectableFromMouseEvent:function(event){var e=this._pane.getCellAtPosition(event.getDocumentLeft(),event.getDocumentTop());

if(!e){return null;
}return this._isSelectable(e.row)?e.row:null;
},getSelectables:function(f){var g=[];

for(var i=0,l=this._getItemCount();i<l;i++){if(this._isSelectable(i)){g.push(i);
}}return g;
},_getSelectableRange:function(h,j){var k=[];
var n=Math.min(h,j);
var m=Math.max(h,j);

for(var i=n;i<=m;i++){if(this._isSelectable(i)){k.push(i);
}}return k;
},_getFirstSelectable:function(){var o=this._getItemCount();

for(var i=0;i<o;i++){if(this._isSelectable(i)){return i;
}}return null;
},_getLastSelectable:function(){var p=this._getItemCount();

for(var i=p-1;i>=0;i--){if(this._isSelectable(i)){return i;
}}return null;
},_getRelatedSelectable:function(q,r){if(r==c){var t=q-1;
var s=0;
var u=-1;
}else if(r==b){var t=q+1;
var s=this._getItemCount()-1;
var u=1;
}else{return null;
}
for(var i=t;i!==s+u;i+=u){if(this._isSelectable(i)){return i;
}}return null;
},_getPage:function(v,w){if(w){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}},_selectableToHashCode:function(x){return x;
},_scrollItemIntoView:function(y){this._pane.scrollRowIntoView(y);
},_getSelectableLocationX:function(z){return {left:0,right:this._pane.getColumnConfig().getTotalSize()-1};
},_getSelectableLocationY:function(A){var D=this._pane.getRowConfig();
var C=D.getItemPosition(A);
var B=C+D.getItemSize(A)-1;
return {top:C,bottom:B};
},_applyDefaultSelection:function(){if(this.getMode()===a&&this.isSelectionEmpty()){var E=this._getFirstSelectable();

if(E!=null){this.selectItem(E);
}}}}});
})();
(function(){var d="Color",c="_applyColorOdd",b="_applyColorEven",a="qx.ui.virtual.layer.AbstractBackground";
qx.Class.define(a,{extend:qx.ui.virtual.layer.Abstract,construct:function(e,f){qx.ui.virtual.layer.Abstract.call(this);

if(e){this.setColorEven(e);
}
if(f){this.setColorOdd(f);
}this.__Bj={};
this.__Bk={};
},properties:{colorEven:{nullable:true,check:d,apply:b,themeable:true},colorOdd:{nullable:true,check:d,apply:c,themeable:true}},members:{__Bl:null,__Bm:null,__Bj:null,__Bk:null,setColor:function(g,h){if(h){this.__Bj[g]=qx.theme.manager.Color.getInstance().resolve(h);
}else{delete (this.__Bj[g]);
}},clearCustomColors:function(){this.__Bj={};
this.updateLayerData();
},getColor:function(i){var j=this.__Bj[i];

if(j){return j;
}else{return i%2==0?this.__Bl:this.__Bm;
}},_applyColorEven:function(k,l){if(k){this.__Bl=qx.theme.manager.Color.getInstance().resolve(k);
}else{this.__Bl=null;
}this.updateLayerData();
},_applyColorOdd:function(m,n){if(m){this.__Bm=qx.theme.manager.Color.getInstance().resolve(m);
}else{this.__Bm=null;
}this.updateLayerData();
},setBackground:function(o,p){if(p){this.__Bk[o]=qx.theme.manager.Decoration.getInstance().resolve(p);
}else{delete (this.__Bk[o]);
}this.updateLayerData();
},getBackground:function(q){return this.__Bk[q];
}},destruct:function(){this.__Bj=this.__Bk=null;
}});
})();
(function(){var q="px;",p="left: 0;",o="</div>",n="top:",m="position: absolute;",k="<div style='",j="'>",h="background-color:",g="",f="qx.ui.virtual.layer.Row",c="block",e="width:",d="height:",b="row-layer",a="none";
qx.Class.define(f,{extend:qx.ui.virtual.layer.AbstractBackground,properties:{appearance:{refine:true,init:b}},members:{_fullUpdate:function(r,s,t,u){var B=[];
var A=qx.lang.Array.sum(u);
var C=[];
var top=0;
var E=r;
var x=0;

for(var y=0;y<t.length;y++){var D=this.getBackground(E);

if(D){C.push({childIndex:x,decorator:D,width:A,height:t[y]});
B.push(k,m,p,n,top,q,j,D.getMarkup(),o);
x++;
}else{var z=this.getColor(E);

if(z){B.push(k,m,p,n,top,q,d,t[y],q,e,A,q,h,z,j,o);
x++;
}}top+=t[y];
E+=1;
}var v=this.getContentElement().getDomElement();
v.style.display=a;
v.innerHTML=B.join(g);
for(var i=0,l=C.length;i<l;i++){var w=C[i];
w.decorator.resize(v.childNodes[w.childIndex].firstChild,w.width,w.height);
}v.style.display=c;
this._width=A;
},_updateLayerWindow:function(F,G,H,I){if(F!==this.getFirstRow()||H.length!==this.getRowSizes().length||this._width<qx.lang.Array.sum(I)){this._fullUpdate(F,G,H,I);
}},setColor:function(J,K){qx.ui.virtual.layer.AbstractBackground.prototype.setColor.call(this,J,K);

if(this.__Bn(J)){this.updateLayerData();
}},setBackground:function(L,M){qx.ui.virtual.layer.AbstractBackground.prototype.setBackground.call(this,L,M);

if(this.__Bn(L)){this.updateLayerData();
}},__Bn:function(N){var P=this.getFirstRow();
var O=P+this.getRowSizes().length-1;
return N>=P&&N<=O;
}}});
})();
(function(){var u="px;",t="</div>",s="background-color:",r="horizontal",q="position: absolute;",p="qx.debug",o="<div style='",n="'>",m="top:",l="",e="height: ",k="gray",h="width: 100%;",c="width: ",b="height: 100%;",g="qx.ui.virtual.layer.GridLines",f="left:",i="html",a="Color",j="PositiveInteger",d="top: 0px;";
qx.Class.define(g,{extend:qx.ui.virtual.layer.Abstract,construct:function(v,w,z){qx.ui.virtual.layer.Abstract.call(this);
this.setZIndex(1);

if(w){this.setDefaultLineColor(w);
}
if(z!==undefined){this.setDefaultLineSize(z);
}this.__As=[];
this.__At=[];
this._isHorizontal=(v||r)==r;
},properties:{defaultLineColor:{init:k,check:a,themeable:true},defaultLineSize:{init:1,check:j,themeable:true}},members:{__As:null,__At:null,isHorizontal:function(){return this._isHorizontal;
},setLineColor:function(A,B){if(qx.core.Environment.get(p)){qx.core.Assert.assertPositiveNumber(A);
qx.core.Assert.assertString(B);
}this.__As[A]=B;

if(this.__Au(A)){this.updateLayerData();
}},setLineSize:function(C,D){if(qx.core.Environment.get(p)){qx.core.Assert.assertPositiveInteger(C);
qx.core.Assert.assertPositiveInteger(D);
}this.__At[C]=D;

if(this.__Au(C)){this.updateLayerData();
}},__Au:function(E){if(this._isHorizontal){var I=this.getFirstColumn();
var G=I+this.getColumnSizes().length-1;
return E>=I&&E<=G;
}else{var H=this.getFirstRow();
var F=H+this.getRowSizes().length-1;
return E>=H&&E<=F;
}},getLineSize:function(J){return this.__At[J]||this.getDefaultLineSize();
},getLineColor:function(K){return this.__As[K]||this.getDefaultLineColor();
},__Av:function(L,M,N){var top=0;
var O,P;

for(var y=0;y<N.length-1;y++){O=this.getLineColor(M+y);
P=this.getLineSize(M+y);
top+=N[y];
L.push(o,q,e+P+u,h,m,top-((P>1)?Math.floor(P/2):1),u,s,O,n,t);
}},__Aw:function(Q,R,S){var V=0;
var T,U;

for(var x=0;x<S.length-1;x++){T=this.getLineColor(R+x);
U=this.getLineSize(R+x);
V+=S[x];
Q.push(o,q,c+U+u,b,d,f,V-((U>1)?Math.floor(U/2):1),u,s,T,n,t);
}},_fullUpdate:function(W,X,Y,ba){var bb=[];

if(this._isHorizontal){this.__Av(bb,W,Y);
}else{this.__Aw(bb,X,ba);
}this.getContentElement().setAttribute(i,bb.join(l));
},_updateLayerWindow:function(bc,bd,be,bf){var bg=bc!==this.getFirstRow()||be.length!==this.getRowSizes().length;
var bh=bd!==this.getFirstColumn()||bf.length!==this.getColumnSizes().length;

if((this._isHorizontal&&bg)||(!this._isHorizontal&&bh)){this._fullUpdate(bc,bd,be,bf);
}}},destruct:function(){this.__As=this.__At=null;
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(i,j,name){this.fireDataEvent(c,{value:i,name:name,old:j});
this._registerEventChaining(i,j,name);
},_registerEventChaining:function(k,l,name){if((k instanceof qx.core.Object)&&qx.Class.hasMixin(k.constructor,qx.data.marshal.MEventBubbling)){var m=qx.lang.Function.bind(this.__lR,this,name);
var n=k.addListener(c,m,this);
k.setUserData(d,n);
}if(l!=null&&l.getUserData&&l.getUserData(d)!=null){l.removeListenerById(l.getUserData(d));
}},__lR:function(name,e){var v=e.getData();
var r=v.value;
var p=v.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(v.name.indexOf){var u=v.name.indexOf(f)!=-1?v.name.indexOf(f):v.name.length;
var s=v.name.indexOf(h)!=-1?v.name.indexOf(h):v.name.length;

if(u<s){var o=v.name.substring(0,u);
var t=v.name.substring(u+1,v.name.length);

if(t[0]!=h){t=f+t;
}var q=name+h+o+g+t;
}else if(s<u){var o=v.name.substring(0,s);
var t=v.name.substring(s,v.name.length);
var q=name+h+o+g+t;
}else{var q=name+h+v.name+g;
}}else{var q=name+h+v.name+g;
}}else{var q=name+f+v.name;
}this.fireDataEvent(c,{value:r,name:q,old:p});
}}});
})();
(function(){var p="change",o="changeBubble",n="add",m="remove",l="0-",k="order",j="-",h="0",g="qx.event.type.Data",f="",c="qx.data.Array",e="qx.debug",d="The parameter must be an array.",b="number",a="changeLength";
qx.Class.define(c,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(q){qx.core.Object.call(this);
if(q==undefined){this.__mm=[];
}else if(arguments.length>1){this.__mm=[];

for(var i=0;i<arguments.length;i++){this.__mm.push(arguments[i]);
}}else if(typeof q==b){this.__mm=new Array(q);
}else if(q instanceof Array){this.__mm=qx.lang.Array.clone(q);
}else{this.__mm=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__mm.length;i++){this._applyEventPropagation(this.__mm[i],null,i);
}this.__mn();
},events:{"change":g,"changeLength":g},members:{__mm:null,concat:function(r){if(r){var s=this.__mm.concat(r);
}else{var s=this.__mm.concat();
}return new qx.data.Array(s);
},join:function(t){return this.__mm.join(t);
},pop:function(){var u=this.__mm.pop();
this.__mn();
this._registerEventChaining(null,u,this.length-1);
this.fireDataEvent(o,{value:[],name:this.length,old:[u]});
this.fireDataEvent(p,{start:this.length-1,end:this.length-1,type:m,items:[u]},null);
return u;
},push:function(v){for(var i=0;i<arguments.length;i++){this.__mm.push(arguments[i]);
this.__mn();
this._registerEventChaining(arguments[i],null,this.length-1);
this.fireDataEvent(o,{value:[arguments[i]],name:this.length-1,old:[]});
this.fireDataEvent(p,{start:this.length-1,end:this.length-1,type:n,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){if(this.length==0){return;
}var w=this.__mm.concat();
this.__mm.reverse();
this.fireDataEvent(p,{start:0,end:this.length-1,type:k,items:null},null);
this.fireDataEvent(o,{value:this.__mm,name:l+(this.__mm.length-1),old:w});
},shift:function(){if(this.length==0){return;
}var x=this.__mm.shift();
this.__mn();
this._registerEventChaining(null,x,this.length-1);
this.fireDataEvent(o,{value:[],name:h,old:[x]});
this.fireDataEvent(p,{start:0,end:this.length-1,type:m,items:[x]},null);
return x;
},slice:function(y,z){return new qx.data.Array(this.__mm.slice(y,z));
},splice:function(A,B,C){var K=this.__mm.length;
var G=this.__mm.splice.apply(this.__mm,arguments);
if(this.__mm.length!=K){this.__mn();
}var I=B>0;
var E=arguments.length>2;
var F=null;

if(I||E){if(this.__mm.length>K){var J=n;
}else if(this.__mm.length<K){var J=m;
F=G;
}else{var J=k;
}this.fireDataEvent(p,{start:A,end:this.length-1,type:J,items:F},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,A+i);
}var H=[];

for(var i=2;i<arguments.length;i++){H[i-2]=arguments[i];
}var D=(A+Math.max(arguments.length-3,B-1));
var name=A==D?D:A+j+D;
this.fireDataEvent(o,{value:H,name:name,old:G});
for(var i=0;i<G.length;i++){this._registerEventChaining(null,G[i],i);
}return (new qx.data.Array(G));
},sort:function(L){if(this.length==0){return;
}var M=this.__mm.concat();
this.__mm.sort.apply(this.__mm,arguments);
this.fireDataEvent(p,{start:0,end:this.length-1,type:k,items:null},null);
this.fireDataEvent(o,{value:this.__mm,name:l+(this.length-1),old:M});
},unshift:function(N){for(var i=arguments.length-1;i>=0;i--){this.__mm.unshift(arguments[i]);
this.__mn();
this._registerEventChaining(arguments[i],null,0);
this.fireDataEvent(o,{value:[this.__mm[0]],name:h,old:[this.__mm[1]]});
this.fireDataEvent(p,{start:0,end:this.length-1,type:n,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__mm;
},getItem:function(O){return this.__mm[O];
},setItem:function(P,Q){var R=this.__mm[P];
if(R===Q){return;
}this.__mm[P]=Q;
this._registerEventChaining(Q,R,P);
if(this.length!=this.__mm.length){this.__mn();
}this.fireDataEvent(o,{value:[Q],name:P,old:[R]});
this.fireDataEvent(p,{start:P,end:P,type:n,items:[Q]},null);
},getLength:function(){return this.length;
},indexOf:function(S){return this.__mm.indexOf(S);
},toString:function(){if(this.__mm!=null){return this.__mm.toString();
}return f;
},contains:function(T){return this.__mm.indexOf(T)!==-1;
},copy:function(){return this.concat();
},insertAt:function(U,V){this.splice(U,0,V);
},insertBefore:function(W,X){var Y=this.indexOf(W);

if(Y==-1){this.push(X);
}else{this.splice(Y,0,X);
}},insertAfter:function(ba,bb){var bc=this.indexOf(ba);

if(bc==-1||bc==(this.length-1)){this.push(bb);
}else{this.splice(bc+1,0,bb);
}},removeAt:function(bd){return this.splice(bd,1).getItem(0);
},removeAll:function(){for(var i=0;i<this.__mm.length;i++){this._registerEventChaining(null,this.__mm[i],i);
}if(this.getLength()==0){return;
}var bf=this.getLength();
var be=this.__mm.concat();
this.__mm.length=0;
this.__mn();
this.fireDataEvent(o,{value:[],name:l+(bf-1),old:be});
this.fireDataEvent(p,{start:0,end:bf-1,type:m,items:be},null);
return be;
},append:function(bg){if(bg instanceof qx.data.Array){bg=bg.toArray();
}if(qx.core.Environment.get(e)){qx.core.Assert.assertArray(bg,d);
}Array.prototype.push.apply(this.__mm,bg);
for(var i=0;i<bg.length;i++){this._registerEventChaining(bg[i],null,this.__mm.length+i);
}var bh=this.length;
this.__mn();
this.fireDataEvent(o,{value:bg,name:bh==(this.length-1)?bh:bh+j+(this.length-1),old:[]});
this.fireDataEvent(p,{start:bh,end:this.length-1,type:n,items:bg},null);
},remove:function(bi){var bj=this.indexOf(bi);

if(bj!=-1){this.splice(bj,1);
return bi;
}},equals:function(bk){if(this.length!==bk.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==bk.getItem(i)){return false;
}}return true;
},sum:function(){var bl=0;

for(var i=0;i<this.length;i++){bl+=this.getItem(i);
}return bl;
},max:function(){var bm=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>bm){bm=this.getItem(i);
}}return bm===undefined?null:bm;
},min:function(){var bn=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bn){bn=this.getItem(i);
}}return bn===undefined?null:bn;
},forEach:function(bo,bp){for(var i=0;i<this.__mm.length;i++){bo.call(bp,this.__mm[i],i,this);
}},__mn:function(){var bq=this.length;
this.length=this.__mm.length;
this.fireDataEvent(a,this.length,bq);
}},destruct:function(){for(var i=0;i<this.__mm.length;i++){this._applyEventPropagation(null,this.__mm[i],i);
}this.__mm=null;
}});
})();
(function(){var w="sorter",v="change",u="changeSelection",t="changeLength",s="qx.data.IListData",r="filter",q="changeModel",p="_applyDelegate",o="changeDelegate",n="",f="qx.ui.virtual.form.ListController",m="_applyTarget",j="qx.ui.virtual.form.List",d="_applySelection",c="changeTarget",h="changeBubble",g="_applyModel",k="object";
qx.Class.define(f,{extend:qx.core.Object,construct:function(x,y){qx.core.Object.call(this);
this.__nB=[];
this.setSelection(new qx.data.Array());

if(x!=null){this.setModel(x);
}
if(y!=null){this.setTarget(y);
}},properties:{target:{check:j,event:c,nullable:true,init:null,apply:m},model:{check:s,event:q,nullable:true,init:null,apply:g},selection:{check:s,event:u,apply:d},delegate:{apply:p,event:o,init:null,nullable:true}},members:{__Gl:null,__Gm:null,__Gn:null,__Go:null,__Gp:null,__Gq:null,__nB:null,_validDelegates:[w,r],_getRowData:function(z){var A=this.getModel();
return A?A.getItem(this.__nR(z)):null;
},_getModelRow:function(B){return this.getModel().indexOf(B);
},getRowCount:function(){return this.__nB.length;
},update:function(){this.__nQ();
this._syncViewSelectionToModel();
},__nQ:function(){var C=this.getModel();

if(C==null){return;
}this.__nB=[];
this._runDelegateFilter(C);
this._runDelegateSorter(C);

if(this.getTarget()!=null){this._syncRowCount();
}},_runDelegateSorter:function(D){if(!this._containsDelegateMethod(this.getDelegate(),w)||qx.lang.Type.isObject(D)){return;
}
if(this.__nB.length==0){return;
}var E=this._getDelegate(w);

if(E!=null){this.__nB.sort(function(a,b){return E(D.getItem(a),D.getItem(b));
});
}},_runDelegateFilter:function(F){if(typeof F!==k){return;
}var G=this._getDelegate(r);

for(var i=0,l=F.length;i<l;++i){if(G==null||G(F.getItem(i))){this.__nB.push(i);
}}},_containsDelegateMethod:function(H,I){var K=qx.lang.Type;

if(K.isObject(H)){if(K.isString(I)){return K.isFunction(H[I]);
}else{for(var J in this._validDelegates){if(K.isFunction(H[J])){return true;
}}}}return false;
},_getDelegate:function(L){var M=this.getDelegate();

if(this._containsDelegateMethod(M,L)){return M[L];
}return null;
},__nR:function(N){return this.__nB[N];
},_applyDelegate:function(O,P){if(this.getTarget()==null||this.getModel()==null){return;
}
if(this._containsDelegateMethod(O)){this.__nQ();
}},_applyTarget:function(Q,R){if(Q!=null){Q.setDelegate(this);
this.__Go=Q.getSelectionManager().addListener(u,this._onChangeSelectionView,this);
}
if(R!=null){R.setDelegate(null);
R.getSelectionManager().removeListenerById(this.__Go);
}
if(this.getModel()==null){return;
}this.__nQ();
this._syncRowCount();
},_applyModel:function(S,T){if(T!=null){T.removeListenerById(this.__Gl);
T.removeListenerById(this.__Gm);
T.removeListenerById(this.__Gn);
}
if(S!=null){this.__nQ();
this.__Gl=S.addListener(t,this._onChangeLengthModel,this);
this.__Gm=S.addListener(v,this._onChangeModel,this);
this.__Gn=S.addListener(h,this._onChangeBubbleModel,this);
}
if(this.getTarget()!=null){this._syncRowCount();
}},_applySelection:function(U,V){if(U!=null){this.__Gp=U.addListener(v,this._onChangeSelectionModel,this);
this.__Gq=U.addListener(t,this._onChangeSelectionModel,this);
this._syncModelSelectionToView();
}
if(V!=null){V.removeListenerById(this.__Gp);
V.removeListenerById(this.__Gq);
}},_onChangeSelectionView:function(e){this._syncViewSelectionToModel();
},_onChangeSelectionModel:function(e){this._syncModelSelectionToView();
},_onChangeLengthModel:function(e){this.__nQ();
this._syncRowCount();
},_onChangeModel:function(e){var W=this.getTarget();

if(W!=null){this.__nQ();
W.update();
}},_onChangeBubbleModel:function(e){var X=this.getTarget();

if(X!=null){this.__nQ();
X.update();
}},_syncViewSelectionToModel:function(){if(this._ignoreSelectionChange){return;
}var bc=this.getTarget();

if(!bc){this.getSelection().removeAll();
return;
}var bb=bc.getSelectionManager().getSelection();
var ba=[];

for(var i=0;i<bb.length;i++){var Y=this._getRowData(bb[i]);
ba.push(Y);
}ba.unshift(this.getSelection().length);
ba.unshift(0);
this._ignoreSelectionChange=true;
this.getSelection().splice.apply(this.getSelection(),ba);
this._ignoreSelectionChange=false;
},_syncModelSelectionToView:function(){if(this._ignoreSelectionChange){return;
}var bf=this.getTarget();

if(!bf){return;
}this._ignoreSelectionChange=true;
var bd=this.getSelection();
var be=[];

for(var i=bd.length;i>=0;i--){var bg=this._getModelRow(bd.getItem(i));

if(bg!==-1){be.push(bg);
}else{bd.removeAt(i);
}}bf.getSelectionManager().replaceSelection(be);
this._ignoreSelectionChange=false;
},_syncRowCount:function(){var length=this.getRowCount();
this.getTarget().setRowCount(length);
},getCellData:function(bh){return this._getRowData(bh)||n;
}},destruct:function(){this.__nB=null;
}});
})();
(function(){var dj="widget",di="button",dh="pointer",dg="button-box",df="atom",de="background",dd="main-dark",dc="bold",db="text-disabled",da="image",ca="list",bY="white",bX="background-selected",bW="popup",bV="button-box-hovered",bU="",bT="button-box-pressed-hovered",bS="button-box-pressed",bR="arrow-down",bQ="groupbox",dr="text-selected",ds="cell",dp="tooltip",dq="label",dm="combobox/button",dn="middle",dk="menu-button",dl="toolbar-button",dt="textfield",du="spinner",cI="button-frame",cH="-middle",cK="light-background",cJ="-invert",cM="background-selected-dark",cL="invalid",cO="combobox",cN="scrollbar",cG="inset",cF="center",k="datechooser/button",l="right",m="main",n="background-disabled",o="-right",p="radiobutton",q="arrow-",r="checkbox",s="-left",t="tree-folder",dI="selectbox",dH="-invalid",dG="icon/16/places/folder-open.png",dF="menu-slidebar-button",dM="scrollbar/button",dL="border-invalid",dK="tree-minus",dJ="statusbar",dO="down",dN="text",bg="background-disabled-checked",bh="slidebar/button-forward",be="icon/16/places/folder.png",bf="icon/16/mimetypes/text-plain.png",bk="tree-plus",bl="default",bi="-top-left",bj="datechooser",bc="blank",bd="treevirtual-folder",L="-bottom-right",K="virtual-list",N="-top-right",M="arrow-right",H="left",G="up",J="right-top",I="focused-inset",F="slidebar/button-backward",E="-bottom-left",bq="table-row-background-even",br="button-box-pressed-top-right",bs="arrow-left",bt="datechooser-weekday",bm="arrow-up",bn="icon/16/actions/dialog-ok.png",bo="button-box-top-right",bp="slidebar",bu="#BABABA",bv="button-box-hovered-bottom-right",W="tabview-page-button-top-bottom",V="move-frame",U="nodrop",T="window-caption",S="table-header-cell",R="button-box-hovered-top-right",Q="row-layer",P="treevirtual-plus-only",bb="move",ba="treevirtual-plus-end",bw="-last",bx="vertical",by="arrow-down-small",bz="tooltip-error",bA="window-restore",bB="resize-frame",bC="scroll-knob",bD="tabview-close",bE="atom/label",bF="button-box-pressed-bottom-right",ci="button-box-pressed-hovered-bottom-right",ch="icon/16/actions/dialog-cancel.png",cg="qx.theme.simple.Appearance",cf="menu-slidebar",cm="treevirtual-minus-cross",cl="background-pane",ck="table-",cj="scroll-knob-pressed",cp="icon",co="arrow-rewind",cB="icon/16/apps/office-calendar.png",cC="headline",cz="treevirtual-plus-start",cA="treevirtual-minus-end",cx="checkbox-undetermined",cy="button-box-bottom-right",cv="datechooser-week",cw="descending",cD="toolbar-separator",cE="arrow-up-small",cS="horizontal",cR="border-light-shadow",cU="text-placeholder",cT="treevirtual-plus-cross",cW="scrollarea",cV="treevirtual-line",cY="tabview-page-button-right-left",cX="menu-checkbox",cQ="best-fit",cP="button-border",dB="treevirtual-cross",dC="button-hover",dD="menubar-button-pressed",dE="progressbar",dx="tree-file",dy="tooltip-text",dz="keep-align",dA="-first",dv="alias",dw="ascending",j="button-box-hovered-right-borderless",i="button-box-right-borderless",h="lead-item",g="checkbox-focused",f="border-blue",e="window-minimize",d="button-box-pressed-hovered-top-right",c="knob-",b="treevirtual-minus-only",a="treevirtual-minus-start",w="checkbox-checked",x="window",u="window-active",v="table-header-cell-first",A="button-box-pressed-right-borderless",B="scroll-knob-hovered",y="tabview-label-active-disabled",z="select-column-order",C="button-box-pressed-hovered-right-borderless",D="scroll-knob-pressed-hovered",cq="white-box",cn="datechooser-week-header",cu="menubar-button-hovered",cr="table-header-column-button",cd="window-close",cb="datechooser-date-pane",O="tabview-unselected",ce="cursor-",Y="-focused",X="menu-radiobutton",bI="window-maximize",bJ="treevirtual-end",bK="table",bL="arrow-forward",bM="copy",bN="table-row-background-selected",bO="radiobutton-focused",bP="scrollbar/slider/knob",bG="atom/icon",bH="table-header",cc="menu-separator",ct="link",cs="icon/16/actions/view-refresh.png";
qx.Theme.define(cg,{appearances:{"widget":{},"label":{style:function(dP){return {textColor:dP.disabled?db:undefined};
}},"image":{style:function(dQ){return {opacity:!dQ.replacement&&dQ.disabled?0.3:undefined};
}},"atom":{},"atom/label":dq,"atom/icon":da,"root":{style:function(dR){return {backgroundColor:de,textColor:dN,font:bl};
}},"popup":{style:function(dS){return {decorator:bW,backgroundColor:cl};
}},"tooltip":{include:bW,style:function(dT){return {backgroundColor:dp,textColor:dy,decorator:dp,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":df,"tooltip-error":{include:dp,style:function(dU){return {textColor:dr,showTimeout:100,hideTimeout:10000,decorator:bz,font:dc,backgroundColor:undefined};
}},"tooltip-error/atom":df,"iframe":{style:function(dV){return {backgroundColor:bY,decorator:dd};
}},"move-frame":{style:function(dW){return {decorator:dd};
}},"resize-frame":V,"dragdrop-cursor":{style:function(dX){var dY=U;

if(dX.copy){dY=bM;
}else if(dX.move){dY=bb;
}else if(dX.alias){dY=dv;
}return {source:qx.theme.simple.Image.URLS[ce+dY],position:J,offset:[2,16,2,6]};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:di,include:di,style:function(ea){return {icon:qx.theme.simple.Image.URLS[q+(ea.vertical?dO:l)]};
}},"slidebar/button-backward":{alias:di,include:di,style:function(eb){return {icon:qx.theme.simple.Image.URLS[q+(eb.vertical?G:H)]};
}},"table":dj,"table/statusbar":{style:function(ec){return {decorator:dJ,padding:[2,5],backgroundColor:cK};
}},"table/column-button":{alias:di,style:function(ed){return {decorator:cr,padding:3,icon:qx.theme.simple.Image.URLS[z]};
}},"table-column-reset-button":{include:dk,alias:dk,style:function(){return {icon:cs};
}},"table-scroller/scrollbar-x":cN,"table-scroller/scrollbar-y":cN,"table-scroller":dj,"table-scroller/header":{style:function(){return {decorator:bH};
}},"table-scroller/pane":{},"table-scroller/focus-indicator":{style:function(ee){return {decorator:m};
}},"table-scroller/resize-line":{style:function(ef){return {backgroundColor:cP,width:3};
}},"table-header-cell":{alias:df,style:function(eg){return {decorator:eg.first?v:S,minWidth:13,font:dc,paddingTop:3,paddingLeft:5,cursor:dh,sortIcon:eg.sorted?(qx.theme.simple.Image.URLS[ck+(eg.sortedAscending?dw:cw)]):undefined};
}},"table-header-cell/icon":{include:bG,style:function(eh){return {paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(ei){return {alignY:dn,alignX:l,paddingRight:5};
}},"table-editor-textfield":{include:dt,style:function(ej){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:dI,alias:dI,style:function(ek){return {padding:[0,2]};
}},"table-editor-combobox":{include:cO,alias:cO,style:function(el){return {decorator:undefined};
}},"treevirtual":bK,"treevirtual-folder":{style:function(em){return {icon:(em.opened?dG:be)};
}},"treevirtual-file":{include:bd,alias:bd,style:function(en){return {icon:bf};
}},"treevirtual-line":{style:function(eo){return {icon:qx.theme.simple.Image.URLS[cV]};
}},"treevirtual-contract":{style:function(ep){return {icon:qx.theme.simple.Image.URLS[dK]};
}},"treevirtual-expand":{style:function(eq){return {icon:qx.theme.simple.Image.URLS[bk]};
}},"treevirtual-only-contract":{style:function(er){return {icon:qx.theme.simple.Image.URLS[b]};
}},"treevirtual-only-expand":{style:function(es){return {icon:qx.theme.simple.Image.URLS[P]};
}},"treevirtual-start-contract":{style:function(et){return {icon:qx.theme.simple.Image.URLS[a]};
}},"treevirtual-start-expand":{style:function(eu){return {icon:qx.theme.simple.Image.URLS[cz]};
}},"treevirtual-end-contract":{style:function(ev){return {icon:qx.theme.simple.Image.URLS[cA]};
}},"treevirtual-end-expand":{style:function(ew){return {icon:qx.theme.simple.Image.URLS[ba]};
}},"treevirtual-cross-contract":{style:function(ex){return {icon:qx.theme.simple.Image.URLS[cm]};
}},"treevirtual-cross-expand":{style:function(ey){return {icon:qx.theme.simple.Image.URLS[cT]};
}},"treevirtual-end":{style:function(ez){return {icon:qx.theme.simple.Image.URLS[bJ]};
}},"treevirtual-cross":{style:function(eA){return {icon:qx.theme.simple.Image.URLS[dB]};
}},"resizer":{style:function(eB){return {decorator:dd};
}},"splitpane":{},"splitpane/splitter":{style:function(eC){return {backgroundColor:cK};
}},"splitpane/splitter/knob":{style:function(eD){return {source:qx.theme.simple.Image.URLS[c+(eD.horizontal?cS:bx)],padding:2};
}},"splitpane/slider":{style:function(eE){return {backgroundColor:cR,opacity:0.3};
}},"menu":{style:function(eF){var eG={backgroundColor:de,decorator:m,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:eF.submenu||eF.contextmenu?cQ:dz};

if(eF.submenu){eG.position=J;
eG.offset=[-2,-3];
}
if(eF.contextmenu){eG.offset=4;
}return eG;
}},"menu/slidebar":cf,"menu-slidebar":dj,"menu-slidebar-button":{style:function(eH){return {backgroundColor:eH.hovered?bX:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:dF,style:function(eI){return {icon:qx.theme.simple.Image.URLS[bm+(eI.hovered?cJ:bU)]};
}},"menu-slidebar/button-forward":{include:dF,style:function(eJ){return {icon:qx.theme.simple.Image.URLS[bR+(eJ.hovered?cJ:bU)]};
}},"menu-separator":{style:function(eK){return {height:0,decorator:cc,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:df,style:function(eL){return {backgroundColor:eL.selected?bX:undefined,textColor:eL.selected?dr:undefined,padding:[2,6]};
}},"menu-button/icon":{include:da,style:function(eM){return {alignY:dn};
}},"menu-button/label":{include:dq,style:function(eN){return {alignY:dn,padding:1};
}},"menu-button/shortcut":{include:dq,style:function(eO){return {alignY:dn,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:da,style:function(eP){return {source:qx.theme.simple.Image.URLS[M+(eP.selected?cJ:bU)],alignY:dn};
}},"menu-checkbox":{alias:dk,include:dk,style:function(eQ){return {icon:!eQ.checked?undefined:qx.theme.simple.Image.URLS[cX+(eQ.selected?cJ:bU)]};
}},"menu-radiobutton":{alias:dk,include:dk,style:function(eR){return {icon:!eR.checked?undefined:qx.theme.simple.Image.URLS[X+(eR.selected?cJ:bU)]};
}},"menubar":{style:function(eS){return {backgroundColor:cK,padding:[4,2]};
}},"menubar-button":{style:function(eT){var eV;
var eU=[2,6];

if(!eT.disabled){if(eT.pressed){eV=dD;
eU=[1,5,2,5];
}else if(eT.hovered){eV=cu;
eU=[1,5];
}}return {padding:eU,cursor:eT.disabled?undefined:dh,textColor:ct,decorator:eV};
}},"virtual-list":ca,"virtual-list/row-layer":Q,"row-layer":dj,"column-layer":dj,"group-item":{include:dq,alias:dq,style:function(eW){return {padding:4,backgroundColor:bu,textColor:bY,font:dc};
}},"virtual-selectbox":dI,"virtual-selectbox/dropdown":bW,"virtual-selectbox/dropdown/list":{alias:K},"virtual-combobox":cO,"virtual-combobox/dropdown":bW,"virtual-combobox/dropdown/list":{alias:K},"virtual-tree":{include:ca,alias:ca,style:function(eX){return {padding:eX.focused?0:1};
}},"virtual-tree-folder":t,"virtual-tree-file":dx,"cell":{style:function(eY){return {backgroundColor:eY.selected?bN:bq,textColor:eY.selected?dr:dN,padding:[3,6]};
}},"cell-string":ds,"cell-number":{include:ds,style:function(fa){return {textAlign:l};
}},"cell-image":ds,"cell-boolean":ds,"cell-atom":ds,"cell-date":ds,"cell-html":ds,"htmlarea":{"include":dj,style:function(fb){return {backgroundColor:bY};
}},"scrollbar":{},"scrollbar/slider":{},"scrollbar/slider/knob":{style:function(fc){var fd=bC;

if(!fc.disabled){if(fc.hovered&&!fc.pressed&&!fc.checked){fd=B;
}else if(fc.hovered&&(fc.pressed||fc.checked)){fd=D;
}else if(fc.pressed||fc.checked){fd=cj;
}}return {height:14,width:14,cursor:dh,decorator:fd,minHeight:fc.horizontal?undefined:20,minWidth:fc.horizontal?20:undefined};
}},"scrollbar/button":{style:function(fe){var ff={};
ff.padding=4;
var fg=bU;

if(fe.left){fg=H;
ff.marginRight=2;
}else if(fe.right){fg+=l;
ff.marginLeft=2;
}else if(fe.up){fg+=G;
ff.marginBottom=2;
}else{fg+=dO;
ff.marginTop=2;
}ff.icon=qx.theme.simple.Image.URLS[q+fg];
ff.cursor=dh;
ff.decorator=dg;
return ff;
}},"scrollbar/button-begin":dM,"scrollbar/button-end":dM,"scrollarea/corner":{style:function(fh){return {backgroundColor:de};
}},"scrollarea":dj,"scrollarea/pane":dj,"scrollarea/scrollbar-x":cN,"scrollarea/scrollbar-y":cN,"textfield":{style:function(fi){var fk;

if(fi.disabled){fk=db;
}else if(fi.showingPlaceholder){fk=cU;
}else{fk=undefined;
}var fl;
var fj;

if(fi.disabled){fl=cG;
fj=[2,3];
}else if(fi.invalid){fl=dL;
fj=[1,2];
}else if(fi.focused){fl=I;
fj=[1,2];
}else{fj=[2,3];
fl=cG;
}return {decorator:fl,padding:fj,textColor:fk,backgroundColor:fi.disabled?n:bY};
}},"textarea":dt,"radiobutton/icon":{style:function(fm){var fo=p;

if(fm.focused&&!fm.invalid){fo=bO;
}fo+=fm.invalid&&!fm.disabled?dH:bU;
var fn;

if(fm.disabled&&fm.checked){fn=bg;
}else if(fm.disabled){fn=n;
}else if(fm.checked){fn=bX;
}return {decorator:fo,width:12,height:12,backgroundColor:fn};
}},"radiobutton":{style:function(fp){return {icon:qx.theme.simple.Image.URLS[bc]};
}},"checkbox":{alias:df,style:function(fq){var fr;
if(fq.checked){fr=qx.theme.simple.Image.URLS[w];
}else if(fq.undetermined){fr=qx.theme.simple.Image.URLS[cx];
}else{fr=qx.theme.simple.Image.URLS[bc];
}return {icon:fr,gap:6};
}},"checkbox/icon":{style:function(fs){var fu=r;

if(fs.focused&&!fs.invalid){fu=g;
}fu+=fs.invalid&&!fs.disabled?dH:bU;
var ft;
if(fs.checked){ft=2;
}else if(fs.undetermined){ft=[4,2];
}return {decorator:fu,width:12,height:12,padding:ft,backgroundColor:bY};
}},"spinner":{style:function(fv){return {textColor:fv.disabled?db:undefined};
}},"spinner/textfield":dt,"spinner/upbutton":{alias:dm,include:dm,style:function(fw){var fx=bo;

if(fw.hovered&&!fw.pressed&&!fw.checked){fx=R;
}else if(fw.hovered&&(fw.pressed||fw.checked)){fx=d;
}else if(fw.pressed||fw.checked){fx=br;
}return {icon:qx.theme.simple.Image.URLS[cE],decorator:fx,width:17};
}},"spinner/downbutton":{alias:dm,include:dm,style:function(fy){var fz=cy;

if(fy.hovered&&!fy.pressed&&!fy.checked){fz=bv;
}else if(fy.hovered&&(fy.pressed||fy.checked)){fz=ci;
}else if(fy.pressed||fy.checked){fz=bF;
}return {icon:qx.theme.simple.Image.URLS[by],decorator:fz,width:17};
}},"selectbox":cI,"selectbox/atom":df,"selectbox/popup":bW,"selectbox/list":{alias:ca,include:ca,style:function(){return {decorator:undefined};
}},"selectbox/arrow":{include:da,style:function(fA){return {source:qx.theme.simple.Image.URLS[bR],paddingRight:4,paddingLeft:5};
}},"combobox":{},"combobox/button":{alias:cI,include:cI,style:function(fB){var fC=i;

if(fB.hovered&&!fB.pressed&&!fB.checked){fC=j;
}else if(fB.hovered&&(fB.pressed||fB.checked)){fC=C;
}else if(fB.pressed||fB.checked){fC=A;
}return {icon:qx.theme.simple.Image.URLS[bR],cursor:dh,decorator:fC,padding:[0,5],width:19};
}},"combobox/popup":bW,"combobox/list":{alias:ca},"combobox/textfield":dt,"datefield":cO,"datefield/button":{alias:dm,include:dm,style:function(fD){return {icon:cB,padding:[0,0,0,3],backgroundColor:undefined,decorator:undefined,width:19};
}},"datefield/list":{alias:bj,include:bj,style:function(fE){return {decorator:undefined};
}},"list":{alias:cW,include:dt},"listitem":{alias:df,style:function(fF){return {gap:4,padding:fF.lead?[2,4]:[3,5],backgroundColor:fF.selected?bX:undefined,textColor:fF.selected?dr:undefined,decorator:fF.lead?h:undefined};
}},"slider":{style:function(fG){var fI;
var fH;

if(fG.disabled){fI=cG;
fH=[2,3];
}else if(fG.invalid){fI=dL;
fH=[1,2];
}else if(fG.focused){fI=I;
fH=[1,2];
}else{fH=[2,3];
fI=cG;
}return {decorator:fI,padding:fH};
}},"slider/knob":bP,"button-frame":{alias:df,style:function(fJ){var fK=dg;

if(fJ.hovered&&!fJ.pressed&&!fJ.checked){fK=bV;
}else if(fJ.hovered&&(fJ.pressed||fJ.checked)){fK=bT;
}else if(fJ.pressed||fJ.checked){fK=bS;
}
if(fJ.invalid&&!fJ.disabled){fK+=dH;
}else if(fJ.focused){fK+=Y;
}return {decorator:fK,padding:[3,8],cursor:fJ.disabled?undefined:dh,minWidth:5,minHeight:5};
}},"button-frame/label":{alias:bE,style:function(fL){return {textColor:fL.disabled?db:undefined};
}},"button":{alias:cI,include:cI,style:function(fM){return {center:true};
}},"hover-button":{alias:di,include:di,style:function(fN){return {decorator:fN.hovered?dC:undefined};
}},"splitbutton":{},"splitbutton/button":{alias:df,style:function(fO){var fP=dg;

if(fO.disabled){fP=dg;
}else if(fO.hovered&&!fO.pressed&&!fO.checked){fP=bV;
}else if(fO.hovered&&(fO.pressed||fO.checked)){fP=bT;
}else if(fO.pressed||fO.checked){fP=bS;
}fP+=s;
return {decorator:fP,padding:[3,8],cursor:fO.disabled?undefined:dh};
}},"splitbutton/arrow":{style:function(fQ){var fR=dg;

if(fQ.disabled){fR=dg;
}else if(fQ.hovered&&!fQ.pressed&&!fQ.checked){fR=bV;
}else if(fQ.hovered&&(fQ.pressed||fQ.checked)){fR=bT;
}else if(fQ.pressed||fQ.checked){fR=bS;
}fR+=o;
return {icon:qx.theme.simple.Image.URLS[bR],decorator:fR,cursor:dh,padding:[3,4]};
}},"groupbox":{},"groupbox/legend":{alias:df,style:function(fS){return {textColor:fS.invalid?cL:undefined,padding:5,margin:4,font:dc};
}},"groupbox/frame":{style:function(fT){return {backgroundColor:de,padding:[6,9],margin:[18,2,2,2],decorator:cq};
}},"check-groupbox":bQ,"check-groupbox/legend":{alias:r,include:r,style:function(fU){return {textColor:fU.invalid?cL:undefined,padding:5,margin:4,font:dc};
}},"radio-groupbox":bQ,"radio-groupbox/legend":{alias:p,include:p,style:function(fV){return {textColor:fV.invalid?cL:undefined,padding:5,margin:4,font:dc};
}},"tree-folder/open":{include:da,style:function(fW){return {source:fW.opened?qx.theme.simple.Image.URLS[dK]:qx.theme.simple.Image.URLS[bk]};
}},"tree-folder":{style:function(fX){return {padding:[2,8,2,5],icon:fX.opened?dG:be,backgroundColor:fX.selected?bX:undefined,iconOpened:dG};
}},"tree-folder/icon":{include:da,style:function(fY){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(ga){return {padding:[1,2],textColor:ga.selected?dr:undefined};
}},"tree-file":{include:t,alias:t,style:function(gb){return {icon:bf};
}},"tree":{include:ca,alias:ca,style:function(gc){return {contentPadding:gc.invalid&&!gc.disabled?[3,0]:[4,1],padding:gc.focused?0:1};
}},"window":{style:function(gd){return {contentPadding:[10,10,10,10],backgroundColor:de,decorator:gd.maximized?undefined:gd.active?u:x};
}},"window-resize-frame":bB,"window/pane":{},"window/captionbar":{style:function(ge){return {backgroundColor:ge.active?cK:n,padding:8,font:dc,decorator:T};
}},"window/icon":{style:function(gf){return {marginRight:4};
}},"window/title":{style:function(gg){return {cursor:bl,font:dc,marginRight:20,alignY:dn};
}},"window/minimize-button":{alias:di,style:function(gh){return {icon:qx.theme.simple.Image.URLS[e],padding:[1,2],cursor:gh.disabled?undefined:dh};
}},"window/restore-button":{alias:di,style:function(gi){return {icon:qx.theme.simple.Image.URLS[bA],padding:[1,2],cursor:gi.disabled?undefined:dh};
}},"window/maximize-button":{alias:di,style:function(gj){return {icon:qx.theme.simple.Image.URLS[bI],padding:[1,2],cursor:gj.disabled?undefined:dh};
}},"window/close-button":{alias:di,style:function(gk){return {marginLeft:2,icon:qx.theme.simple.Image.URLS[cd],padding:[1,2],cursor:gk.disabled?undefined:dh};
}},"window/statusbar":{style:function(gl){return {decorator:dJ,padding:[2,6]};
}},"window/statusbar-text":dq,"datechooser":{style:function(gm){return {decorator:m};
}},"datechooser/navigation-bar":{style:function(gn){return {backgroundColor:de,textColor:gn.disabled?db:gn.invalid?cL:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":dp,"datechooser/last-month-button-tooltip":dp,"datechooser/next-year-button-tooltip":dp,"datechooser/next-month-button-tooltip":dp,"datechooser/last-year-button":k,"datechooser/last-month-button":k,"datechooser/next-year-button":k,"datechooser/next-month-button":k,"datechooser/button/icon":{},"datechooser/button":{style:function(go){var gp={width:17,show:cp,cursor:dh};

if(go.lastYear){gp.icon=qx.theme.simple.Image.URLS[co];
}else if(go.lastMonth){gp.icon=qx.theme.simple.Image.URLS[bs];
}else if(go.nextYear){gp.icon=qx.theme.simple.Image.URLS[bL];
}else if(go.nextMonth){gp.icon=qx.theme.simple.Image.URLS[M];
}return gp;
}},"datechooser/month-year-label":{style:function(gq){return {font:dc,textAlign:cF};
}},"datechooser/date-pane":{style:function(gr){return {decorator:cb,backgroundColor:de};
}},"datechooser/weekday":{style:function(gs){return {decorator:bt,font:dc,textAlign:cF,textColor:gs.disabled?db:gs.weekend?cM:de,backgroundColor:gs.weekend?de:cM,paddingTop:2};
}},"datechooser/day":{style:function(gt){return {textAlign:cF,decorator:gt.today?m:undefined,textColor:gt.disabled?db:gt.selected?dr:gt.otherMonth?db:undefined,backgroundColor:gt.disabled?undefined:gt.selected?bX:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(gu){return {textAlign:cF,textColor:cM,padding:[2,4],decorator:gu.header?cn:cv};
}},"progressbar":{style:function(gv){return {decorator:dE,padding:1,backgroundColor:bY};
}},"progressbar/progress":{style:function(gw){return {backgroundColor:gw.disabled?bg:bX};
}},"toolbar":{style:function(gx){return {backgroundColor:cK,padding:0};
}},"toolbar/part":{style:function(gy){return {margin:[0,15]};
}},"toolbar/part/container":{},"toolbar/part/handle":{},"toolbar-separator":{style:function(gz){return {decorator:cD,margin:[7,0],width:4};
}},"toolbar-button":{alias:df,style:function(gA){var gC=dg;

if(gA.disabled){gC=dg;
}else if(gA.hovered&&!gA.pressed&&!gA.checked){gC=bV;
}else if(gA.hovered&&(gA.pressed||gA.checked)){gC=bT;
}else if(gA.pressed||gA.checked){gC=bS;
}if(gA.left){gC+=s;
}else if(gA.right){gC+=o;
}else if(gA.middle){gC+=cH;
}var gB=[7,10];

if(gA.left||gA.middle||gA.right){gB=[7,0];
}return {cursor:dh,decorator:gC,margin:gB,padding:[3,5]};
}},"toolbar-menubutton":{alias:dl,include:dl,style:function(gD){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:da,include:da,style:function(gE){return {source:qx.theme.simple.Image.URLS[bR],cursor:dh,padding:[0,5],marginLeft:2};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":{alias:dl,include:dl,style:function(gF){var gG=dg;

if(gF.disabled){gG=dg;
}else if(gF.hovered&&!gF.pressed&&!gF.checked){gG=bV;
}else if(gF.hovered&&(gF.pressed||gF.checked)){gG=bT;
}else if(gF.pressed||gF.checked){gG=bS;
}if(gF.left){gG+=s;
}else if(gF.right){gG+=cH;
}else if(gF.middle){gG+=cH;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:gG};
}},"toolbar-splitbutton/arrow":{alias:dl,include:dl,style:function(gH){var gI=dg;

if(gH.disabled){gI=dg;
}else if(gH.hovered&&!gH.pressed&&!gH.checked){gI=bV;
}else if(gH.hovered&&(gH.pressed||gH.checked)){gI=bT;
}else if(gH.pressed||gH.checked){gI=bS;
}if(gH.left){gI+=cH;
}else if(gH.right){gI+=o;
}else if(gH.middle){gI+=cH;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:gI};
}},"tabview":{},"tabview/bar":{alias:bp,style:function(gJ){var gK=0,gN=0,gL=0,gM=0;

if(gJ.barTop){gL-=2;
}else if(gJ.barBottom){gK-=2;
}else if(gJ.barRight){gM-=2;
}else{gN-=2;
}return {marginBottom:gL,marginTop:gK,marginLeft:gM,marginRight:gN};
}},"tabview/bar/button-forward":{include:bh,alias:bh,style:function(gO){var gP=dg;

if(gO.hovered&&!gO.pressed&&!gO.checked){gP=bV;
}else if(gO.hovered&&(gO.pressed||gO.checked)){gP=bT;
}else if(gO.pressed||gO.checked){gP=bS;
}
if(gO.barTop){return {marginTop:4,marginBottom:2,decorator:gP+N};
}else if(gO.barBottom){return {marginTop:2,marginBottom:4,decorator:gP+L};
}else if(gO.barLeft){return {marginLeft:4,marginRight:2,decorator:gP+E};
}else{return {marginLeft:2,marginRight:4,decorator:gP+L};
}}},"tabview/bar/button-backward":{include:F,alias:F,style:function(gQ){var gR=dg;

if(gQ.hovered&&!gQ.pressed&&!gQ.checked){gR=bV;
}else if(gQ.hovered&&(gQ.pressed||gQ.checked)){gR=bT;
}else if(gQ.pressed||gQ.checked){gR=bS;
}
if(gQ.barTop){return {marginTop:4,marginBottom:2,decorator:gR+bi};
}else if(gQ.barBottom){return {marginTop:2,marginBottom:4,decorator:gR+E};
}else if(gQ.barLeft){return {marginLeft:4,marginRight:2,decorator:gR+bi};
}else{return {marginLeft:2,marginRight:4,decorator:gR+N};
}}},"tabview/pane":{style:function(gS){return {backgroundColor:de,decorator:f,padding:10};
}},"tabview-page":dj,"tabview-page/button":{style:function(gT){var hd;
var hb=0,gY=0,gV=0,gX=0;
if(gT.barTop||gT.barBottom){var gW=5,gU=5,ha=9,hc=9;
}else{var gW=8,gU=8,ha=4,hc=4;
}if(gT.barTop||gT.barBottom){hd=W;
}else if(gT.barRight||gT.barLeft){hd=cY;
}if(gT.checked){if(gT.barTop){ha+=1;
hc+=1;
gW+=4;
}else if(gT.barBottom){ha+=1;
hc+=1;
gW+=2;
}else if(gT.barLeft){gW+=1;
gU+=1;
ha+=4;
}else if(gT.barRight){gW+=1;
gU+=1;
ha+=2;
}}else{if(gT.barTop){gV+=2;
hb+=4;
}else if(gT.barBottom){gV+=4;
hb+=2;
}else if(gT.barLeft){gY+=2;
gX+=4;
}else if(gT.barRight){gY+=4;
gX+=2;
}}
if(gT.firstTab&&!gT.checked){hd+=dA;
}else if(gT.lastTab&&!gT.checked){hd+=bw;
}return {zIndex:gT.checked?10:5,decorator:gT.checked?undefined:hd,backgroundColor:gT.checked?bX:O,textColor:gT.disabled?gT.checked?y:db:bY,padding:[gW,hc,gU,ha],margin:[hb,gY,gV,gX]};
}},"tabview-page/button/label":{alias:dq,style:function(he){return {padding:[0,1,0,1],margin:he.focused?0:1};
}},"tabview-page/button/icon":da,"tabview-page/button/close-button":{alias:df,style:function(hf){return {cursor:hf.disabled?undefined:dh,icon:qx.theme.simple.Image.URLS[bD]};
}},"colorpopup":{alias:bW,include:bW,style:function(hg){return {padding:5};
}},"colorpopup/field":{style:function(hh){return {margin:2,width:14,height:14,backgroundColor:de,decorator:dd};
}},"colorpopup/selector-button":di,"colorpopup/auto-button":di,"colorpopup/preview-pane":bQ,"colorpopup/current-preview":{style:function(hi){return {height:20,padding:4,marginLeft:4,decorator:dd,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hj){return {height:20,padding:4,marginRight:4,decorator:dd,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:di,include:di,style:function(hk){return {icon:bn};
}},"colorpopup/colorselector-cancelbutton":{alias:di,include:di,style:function(hl){return {icon:ch};
}},"colorselector":dj,"colorselector/control-bar":dj,"colorselector/visual-pane":bQ,"colorselector/control-pane":dj,"colorselector/preset-grid":dj,"colorselector/colorbucket":{style:function(hm){return {decorator:dd,width:16,height:16};
}},"colorselector/preset-field-set":bQ,"colorselector/input-field-set":bQ,"colorselector/preview-field-set":bQ,"colorselector/hex-field-composite":dj,"colorselector/hex-field":dt,"colorselector/rgb-spinner-composite":dj,"colorselector/rgb-spinner-red":du,"colorselector/rgb-spinner-green":du,"colorselector/rgb-spinner-blue":du,"colorselector/hsb-spinner-composite":dj,"colorselector/hsb-spinner-hue":du,"colorselector/hsb-spinner-saturation":du,"colorselector/hsb-spinner-brightness":du,"colorselector/preview-content-old":{style:function(hn){return {decorator:dd,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(ho){return {decorator:dd,backgroundColor:bY,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(hp){return {decorator:dd,margin:5};
}},"colorselector/brightness-field":{style:function(hq){return {decorator:dd,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dj,"colorselector/hue-saturation-handle":dj,"colorselector/brightness-pane":dj,"colorselector/brightness-handle":dj,"app-header":{style:function(hr){return {font:cC,textColor:dr,backgroundColor:cM,padding:[8,12]};
}},"app-header-label":{style:function(hs){return {paddingTop:5};
}}}});
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
(function(){var j='',i="px ",h=" ",g="border-top",f="border-left",e="border-bottom",d="border-right",c="Color",b="Number",a="qx.debug",D="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",u="innerColorTop",q="relative",r="browser.documentmode",o="innerColorLeft",p="qx.ui.decoration.MDoubleBorder",m="left",n="engine.version",k="innerWidthBottom",l="innerWidthLeft",s="position",t="absolute";
qx.Mixin.define(p,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__qX;
this._resizeBorder=this.__qW;
this._styleBorder=this.__qU;
this._generateMarkup=this.__qV;
},properties:{innerWidthTop:{check:b,init:0},innerWidthRight:{check:b,init:0},innerWidthBottom:{check:b,init:0},innerWidthLeft:{check:b,init:0},innerWidth:{group:[w,z,k,l],mode:D},innerColorTop:{nullable:true,check:c},innerColorRight:{nullable:true,check:c},innerColorBottom:{nullable:true,check:c},innerColorLeft:{nullable:true,check:c},innerColor:{group:[u,v,x,o],mode:D}},members:{__qT:null,__qU:function(E){var F=qx.theme.manager.Color.getInstance();
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
}}},__qV:function(H){var K=this._generateBackgroundMarkup(H);
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
return this.__qT=this._generateBackgroundMarkup(H,K);
},__qW:function(L,M,N){var O=this.getInsets();
M-=O.left+O.right;
N-=O.top+O.bottom;
var P=O.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=O.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:P,top:top,width:M,height:N,elementToApplyDimensions:L.firstChild};
},__qX:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
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
(function(){var j="tabview-button-border",i="button-box",h="button-box-pressed",g="background-selected",f="button-border",e="button-box-hovered",d="button-box-pressed-hovered",c="solid",b="invalid",a="gray",X="button-border-hovered",W="tabview-unselected",V="shadow",U="border-separator",T="border-light",S="checkbox",R="tabview-page-button-top-bottom",Q="window-border",P="radiobutton",O="scroll-knob",q="tabview-page-button-right-left",r="background",o="button-box-bright",p="window-border-inner",m="white",n="button-box-bright-pressed",k="button-box-dark-pressed",l="table-header",u="button-box-invalid",v="menubar-button-hovered",C="button-box-dark",A="#999999",G="qx/decoration/Simple",E="dotted",K="button",I="tooltip-text",x="table-focus-indicator",N="button-box-pressed-invalid",M="scrollbar-dark",L="qx.theme.simple.Decoration",w="button-box-focused",y="table-header-cell",z="border-lead",B="#FFF",D="button-box-pressed-focused",F="scrollbar-bright",H="border-light-shadow",J="white-box-border",s="window",t="scroll-knob-pressed";
qx.Theme.define(L,{aliases:{decoration:G},decorations:{"border-blue":{decorator:qx.ui.decoration.Uniform,style:{width:4,color:g}},"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:g}},"main-dark":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:f}},"popup":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:Q,shadowLength:2,shadowBlurRadius:5,shadowColor:V}},"button-box":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:f,gradientStart:[o,40],gradientEnd:[C,70],backgroundColor:o}},"button-box-pressed":{include:i,style:{gradientStart:[n,40],gradientEnd:[k,70],backgroundColor:n}},"button-box-pressed-hovered":{include:h,style:{color:X}},"button-box-hovered":{include:i,style:{color:X}},"button-box-invalid":{include:i,style:{color:b}},"button-box-pressed-invalid":{include:h,style:{color:b}},"button-box-hovered-invalid":{include:u},"button-box-pressed-hovered-invalid":{include:N},"button-box-focused":{include:i,style:{color:g}},"button-box-pressed-focused":{include:h,style:{color:g}},"button-box-hovered-focused":{include:w},"button-box-pressed-hovered-focused":{include:D},"button-box-right":{include:i,style:{radius:[0,3,3,0]}},"button-box-pressed-right":{include:h,style:{radius:[0,3,3,0]}},"button-box-pressed-hovered-right":{include:d,style:{radius:[0,3,3,0]}},"button-box-hovered-right":{include:e,style:{radius:[0,3,3,0]}},"button-box-right-borderless":{include:i,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-right-borderless":{include:h,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-hovered-right-borderless":{include:d,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-hovered-right-borderless":{include:e,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-top-right":{include:i,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-top-right":{include:h,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-hovered-top-right":{include:d,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-hovered-top-right":{include:e,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-bottom-right":{include:i,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-bottom-right":{include:h,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-hovered-bottom-right":{include:d,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-hovered-bottom-right":{include:e,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-bottom-left":{include:i,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-bottom-left":{include:h,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-hovered-bottom-left":{include:d,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-hovered-bottom-left":{include:e,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-top-left":{include:i,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-top-left":{include:h,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-hovered-top-left":{include:d,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-hovered-top-left":{include:e,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-middle":{include:i,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-middle":{include:h,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-hovered-middle":{include:d,style:{radius:0,width:[1,0,1,1]}},"button-box-hovered-middle":{include:e,style:{radius:0,width:[1,0,1,1]}},"button-box-left":{include:i,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-left":{include:h,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-hovered-left":{include:d,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-hovered-left":{include:e,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:U}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:U}},"scroll-knob":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:f,backgroundColor:F}},"scroll-knob-pressed":{include:O,style:{backgroundColor:M}},"scroll-knob-hovered":{include:O,style:{color:X}},"scroll-knob-pressed-hovered":{include:t,style:{color:X}},"button-hover":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius],style:{backgroundColor:K,radius:3}},"window":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:Q,innerWidth:4,innerColor:p,shadowLength:1,shadowBlurRadius:3,shadowColor:V,backgroundColor:r}},"window-active":{include:s,style:{shadowLength:2,shadowBlurRadius:5}},"window-caption":{decorator:qx.ui.decoration.Single,style:{width:[0,0,2,0],color:p}},"white-box":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:J,shadowBlurRadius:2,shadowColor:A,radius:7,backgroundColor:m}},"inset":{decorator:qx.ui.decoration.Single,style:{width:1,color:[H,T,T,T]}},"focused-inset":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:g}},"border-invalid":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:b}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:E,color:z}},"tooltip":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{width:1,color:I,shadowLength:1,shadowBlurRadius:2,shadowColor:V}},"tooltip-error":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{radius:5,backgroundColor:b}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:f}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g}},"menubar-button-hovered":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{width:1,color:g,radius:3,backgroundColor:m}},"menubar-button-pressed":{include:v,style:{radius:[3,3,0,0],width:[1,1,0,1]}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:a,style:c}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:a,style:c}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:a,style:c}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:a,widthRight:1,colorRight:a,style:c}},"tabview-page-button-top-bottom":{decorator:qx.ui.decoration.Single,style:{width:[0,1],color:j}},"tabview-page-button-top-bottom-first":{include:R,style:{color:[j,j,j,W]}},"tabview-page-button-top-bottom-last":{include:R,style:{color:[j,W,j,j]}},"tabview-page-button-right-left":{decorator:qx.ui.decoration.Single,style:{width:[1,0],color:j}},"tabview-page-button-right-left-first":{include:q,style:{color:[W,j,j,j]}},"tabview-page-button-right-left-last":{include:q,style:{color:[j,j,W,j]}},"statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g,styleTop:c}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:x,style:c}},"table-header":{include:i,style:{radius:0,width:[1,0,1,0]}},"table-header-column-button":{include:l,style:{width:1,color:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,color:f}},"table-header-cell-first":{include:y,style:{widthLeft:1}},"progressbar":{decorator:qx.ui.decoration.Single,style:{backgroundColor:B,width:1,color:U}},"radiobutton":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:10,width:1,color:f,innerColor:r,innerWidth:2}},"radiobutton-focused":{include:P,style:{color:g}},"radiobutton-invalid":{include:P,style:{color:b}},"checkbox":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:f}},"checkbox-focused":{include:S,style:{color:g}},"checkbox-invalid":{include:S,style:{color:b}}}});
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
(function(){var a="qx.theme.simple.Image";
qx.Class.define(a,{extend:qx.core.Object,statics:{URLS:{"blank":"qx/static/blank.gif","checkbox-checked":"decoration/checkbox/checked.png","checkbox-undetermined":"decoration/checkbox/undetermined.png","window-minimize":"decoration/window/minimize.gif","window-maximize":"decoration/window/maximize.gif","window-restore":"decoration/window/restore.gif","window-close":"decoration/window/close.gif","cursor-copy":"decoration/cursors/copy.gif","cursor-move":"decoration/cursors/move.gif","cursor-alias":"decoration/cursors/alias.gif","cursor-nodrop":"decoration/cursors/nodrop.gif","arrow-right":"decoration/arrows/right.gif","arrow-left":"decoration/arrows/left.gif","arrow-up":"decoration/arrows/up.gif","arrow-down":"decoration/arrows/down.gif","arrow-forward":"decoration/arrows/forward.gif","arrow-rewind":"decoration/arrows/rewind.gif","arrow-down-small":"decoration/arrows/down-small.gif","arrow-up-small":"decoration/arrows/up-small.gif","arrow-up-invert":"decoration/arrows/up-invert.gif","arrow-down-invert":"decoration/arrows/down-invert.gif","arrow-right-invert":"decoration/arrows/right-invert.gif","knob-horizontal":"decoration/splitpane/knob-horizontal.png","knob-vertical":"decoration/splitpane/knob-vertical.png","tree-minus":"decoration/tree/minus.gif","tree-plus":"decoration/tree/plus.gif","select-column-order":"decoration/table/select-column-order.png","table-ascending":"decoration/table/ascending.png","table-descending":"decoration/table/descending.png","treevirtual-line":"decoration/treevirtual/line.gif","treevirtual-minus-only":"decoration/treevirtual/only_minus.gif","treevirtual-plus-only":"decoration/treevirtual/only_plus.gif","treevirtual-minus-start":"decoration/treevirtual/start_minus.gif","treevirtual-plus-start":"decoration/treevirtual/start_plus.gif","treevirtual-minus-end":"decoration/treevirtual/end_minus.gif","treevirtual-plus-end":"decoration/treevirtual/end_plus.gif","treevirtual-minus-cross":"decoration/treevirtual/cross_minus.gif","treevirtual-plus-cross":"decoration/treevirtual/cross_plus.gif","treevirtual-end":"decoration/treevirtual/end.gif","treevirtual-cross":"decoration/treevirtual/cross.gif","menu-checkbox":"decoration/menu/checkbox.gif","menu-checkbox-invert":"decoration/menu/checkbox-invert.gif","menu-radiobutton-invert":"decoration/menu/radiobutton-invert.gif","menu-radiobutton":"decoration/menu/radiobutton.gif","tabview-close":"decoration/tabview/close.gif"}}});
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
},FORMAT_STACK:null,escapeHTML:function(bb){return String(bb).replace(/[<>&"']/g,this.__wf);
},__wf:function(bc){var bd={"<":s,">":F,"&":o,"'":p,'"':u};
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
(function(){var d="debug",c="log",b="engine.name",a="qx.log.appender.Native";
qx.Class.define(a,{statics:{process:qx.core.Environment.select(b,{"gecko":function(e){if(window.console&&console.firebug){console[e.level].call(console,qx.log.appender.Util.toText(e));
}},"mshtml":function(f){if(window.console){var h=f.level;

if(h==d){h=c;
}var g=qx.log.appender.Util.toText(f);
console[h](g);
}},"webkit":function(i){if(window.console){var k=i.level;

if(k==d){k=c;
}var j=qx.log.appender.Util.toText(i);
console[k](j);
}},"opera":function(l){}})},defer:function(m){qx.log.Logger.register(m);
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
this.__Ca=X;
this.__jE=X.childNodes[1];
this.__Cb=X.childNodes[2].firstChild;
this.__ql();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__dA,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__jE.innerHTML=k;
},process:function(bb){this.__jE.appendChild(qx.log.appender.Util.toHtml(bb));
this.__Cc();
},__Cc:function(){this.__jE.scrollTop=this.__jE.scrollHeight;
},__iB:true,toggle:function(){if(!this.__Ca){this.init();
}else if(this.__Ca.style.display==h){this.show();
}else{this.__Ca.style.display=h;
}},show:function(){if(!this.__Ca){this.init();
}else{this.__Ca.style.display=K;
this.__jE.scrollTop=this.__jE.scrollHeight;
}},__rW:[],execute:function(){var be=this.__Cb.value;

if(be==k){return;
}
if(be==u){return this.clear();
}var bc=document.createElement(V);
bc.innerHTML=qx.log.appender.Util.escapeHTML(C+be);
bc.className=U;
this.__rW.push(be);
this.__Cd=this.__rW.length;
this.__jE.appendChild(bc);
this.__Cc();

try{var bd=window.eval(be);
}catch(bf){qx.log.Logger.error(bf);
}
if(bd!==undefined){qx.log.Logger.debug(bd);
}},__ql:function(e){this.__jE.style.height=(this.__Ca.clientHeight-this.__Ca.firstChild.offsetHeight-this.__Ca.lastChild.offsetHeight)+c;
},__dA:function(e){var bh=e.getKeyIdentifier();
if((bh==H)||(bh==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__Ca){return;
}if(!qx.dom.Hierarchy.contains(this.__Ca,e.getTarget())){return;
}if(bh==d&&this.__Cb.value!=k){this.execute();
this.__Cb.value=k;
}if(bh==i||bh==E){this.__Cd+=bh==i?-1:1;
this.__Cd=Math.min(Math.max(0,this.__Cd),this.__rW.length);
var bg=this.__rW[this.__Cd];
this.__Cb.value=bg||k;
this.__Cb.select();
}}},defer:function(bi){qx.event.Registration.addListener(document.documentElement,g,bi.__dA,bi);
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

